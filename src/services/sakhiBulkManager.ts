/**
 * Sakhi Bulk Text Replacement & Sacred Terminology Harmonization Engine
 * Manages database-wide consistency, bulk replace across Akhand Path database and Sakhis,
 * persistent overrides, and Sant Bhasha standardization.
 */

import { Sakhi, WordMeaning } from '../types';
import { sakhisDatabase, SACRED_SAKHIS } from '../data/sakhis';

export type TargetField = 
  | 'text.hi' 
  | 'text.pb' 
  | 'text.en' 
  | 'bhavarth.hi' 
  | 'bhavarth.pb' 
  | 'bhavarth.en' 
  | 'transliteration' 
  | 'wordMeanings'
  | 'contemplation.hi';

export interface BulkReplaceOptions {
  search: string;
  replace: string;
  fields: TargetField[];
  matchCase?: boolean;
  wholeWord?: boolean;
  granthaFilter?: string; // 'all' or specific grantha
}

export interface MatchSnippet {
  sakhiNumber: number;
  sakhiId: string;
  grantha: string;
  category: string;
  field: TargetField;
  originalText: string;
  modifiedText: string;
  matchCount: number;
}

export interface BulkReplaceResult {
  affectedSakhisCount: number;
  totalReplacements: number;
  snippets: MatchSnippet[];
  timestamp: number;
}

export interface HarmonizationRule {
  id: string;
  search: string;
  replace: string;
  category: 'spelling' | 'dialect' | 'reverence' | 'meter';
  label: string;
  description: string;
  targetFields: TargetField[];
  enabled: boolean;
}

export interface BulkOperationHistoryItem {
  id: string;
  timestamp: number;
  description: string;
  affectedSakhisCount: number;
  totalReplacements: number;
  previousSnapshots: Record<string, Partial<Sakhi>>;
}

const STORAGE_KEY = 'sahebworld_sakhi_customizations_v2';
const HISTORY_KEY = 'sahebworld_bulk_history_v2';
const EVENT_NAME = 'sahebworld:sakhis-updated';

/**
 * Standard Spiritual Terminology & Kabir Vani Harmonization Rules
 */
export const STANDARD_HARMONIZATION_RULES: HarmonizationRule[] = [
  {
    id: 'brahm-standardization',
    search: 'ब्रम्ह',
    replace: 'ब्रह्म',
    category: 'spelling',
    label: 'ब्रम्ह ➔ ब्रह्म',
    description: 'वेदांत एवं संत मत अनुसार परम सत्ता के लिए शुद्ध वर्तनी "ब्रह्म"',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings', 'contemplation.hi'],
    enabled: true,
  },
  {
    id: 'pakhand-anuswar',
    search: 'पाखण्ड',
    replace: 'पाखंड',
    category: 'spelling',
    label: 'पाखण्ड ➔ पाखंड',
    description: 'मानक देवनागरी अनुस्वार वर्तनी शुद्धिकरण',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'surati-bhakti',
    search: 'सुरती',
    replace: 'सुरति',
    category: 'spelling',
    label: 'सुरती ➔ सुरति',
    description: 'कबीर वाणी में सुरति-निरति साधना का मूल आध्यात्मिक स्वरूप',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'nirati-bhakti',
    search: 'निरती',
    replace: 'निरति',
    category: 'spelling',
    label: 'निरती ➔ निरति',
    description: 'स्थिर विवेक व परख के लिए मानक संत भाषा "निरति"',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'sumiran-sadhu',
    search: 'सुमिर्न',
    replace: 'सुमिरन',
    category: 'spelling',
    label: 'सुमिर्न ➔ सुमिरन',
    description: 'सत्यनाम सुमिरन की शुद्ध संत शब्दावली',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'smaran-to-sumiran',
    search: 'स्मरण',
    replace: 'सुमिरन',
    category: 'dialect',
    label: 'स्मरण ➔ सुमिरन (वाणी में)',
    description: 'कबीर सधुक्कड़ी बोली में स्मरण की जगह प्रामाणिक लोक रूप "सुमिरन"',
    targetFields: ['text.hi'],
    enabled: true,
  },
  {
    id: 'kabirdas-reverence',
    search: 'कबीरदास',
    replace: 'कबीर साहेब',
    category: 'reverence',
    label: 'कबीरदास ➔ कबीर साहेब',
    description: 'पूर्ण परब्रह्म सतगुरु कबीर साहेब के प्रति परम आदरणीय संबोधन',
    targetFields: ['bhavarth.hi', 'contemplation.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'sadhu-short-u',
    search: 'साधू',
    replace: 'साधु',
    category: 'spelling',
    label: 'साधू ➔ साधु',
    description: 'साधु महिमा में ह्रस्व "उ" का शास्त्रीय व सधुक्कड़ी मानक',
    targetFields: ['text.hi', 'bhavarth.hi'],
    enabled: true,
  },
  {
    id: 'janiya-to-jaanya',
    search: 'जानिया',
    replace: 'जाण्या',
    category: 'dialect',
    label: 'जानिया ➔ जाण्या',
    description: 'कबीर साहेब के मूल दोहों में सधुक्कड़ी शब्द "जाण्या"',
    targetFields: ['text.hi'],
    enabled: true,
  },
  {
    id: 'dono-to-dou',
    search: 'दोनों',
    replace: 'दोऊ',
    category: 'meter',
    label: 'दोनों ➔ दोऊ (छंद में)',
    description: 'दोहा छंद (उदा. गुरु गोविंद दोऊ खड़े) की गेयता व मात्रा संरक्षण',
    targetFields: ['text.hi'],
    enabled: true,
  },
  {
    id: 'paav-to-paay',
    search: 'पांव',
    replace: 'पाँय',
    category: 'meter',
    label: 'पांव ➔ पाँय',
    description: 'दोहा तुकबंदी (काके लागूं पाँय... बलिहारी गुरु आपने)',
    targetFields: ['text.hi'],
    enabled: true,
  },
  {
    id: 'paav-alt-to-paay',
    search: 'पाँव',
    replace: 'पाँय',
    category: 'meter',
    label: 'पाँव ➔ पाँय',
    description: 'तुकबंदी वर्तनी संरक्षण',
    targetFields: ['text.hi'],
    enabled: true,
  },
  {
    id: 'moko-kaha',
    search: 'मोको कहां',
    replace: 'मोको कहाँ',
    category: 'spelling',
    label: 'मोको कहां ➔ मोको कहाँ',
    description: 'शुद्ध चंद्रबिंदु युक्त पद स्वरूप',
    targetFields: ['text.hi', 'bhavarth.hi'],
    enabled: true,
  },
  {
    id: 'ahankar-anuswar',
    search: 'अहँकार',
    replace: 'अहंकार',
    category: 'spelling',
    label: 'अहँकार ➔ अहंकार',
    description: 'मानक अनुस्वार स्वरूप',
    targetFields: ['text.hi', 'bhavarth.hi', 'wordMeanings'],
    enabled: true,
  },
  {
    id: 'dhundhta-to-dhundhai',
    search: 'ढूंढता',
    replace: 'ढूँढै',
    category: 'dialect',
    label: 'ढूंढता ➔ ढूँढै (वाणी में)',
    description: 'सधुक्कड़ी क्रिया रूप (उदा. कस्तूरी कुंडल बसै मृग ढूँढै बन माहि)',
    targetFields: ['text.hi'],
    enabled: true,
  }
];

class SakhiBulkManagerService {
  private customOverrides: Record<string, Partial<Sakhi>> = {};
  private history: BulkOperationHistoryItem[] = [];

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.customOverrides = JSON.parse(stored);
        this.applyOverridesToDatabase();
      }

      const storedHistory = localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        this.history = JSON.parse(storedHistory);
      }
    } catch (e) {
      console.error('Failed to load custom sakhi overrides:', e);
    }
  }

  /**
   * Applies loaded custom overrides directly onto the in-memory sakhisDatabase array
   */
  private applyOverridesToDatabase() {
    for (let i = 0; i < sakhisDatabase.length; i++) {
      const sakhi = sakhisDatabase[i];
      const override = this.customOverrides[sakhi.id];
      if (override) {
        Object.assign(sakhi, override);
      }
    }
  }

  /**
   * Saves current overrides and history to localStorage
   */
  private persist() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.customOverrides));
      localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history.slice(0, 30)));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { timestamp: Date.now() } }));
    } catch (e) {
      console.error('Failed to persist sakhi overrides:', e);
    }
  }

  /**
   * Creates a RegExp for search based on options
   */
  private createRegex(search: string, matchCase: boolean = false, wholeWord: boolean = false): RegExp {
    // Escape regex special chars
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let pattern = escaped;

    if (wholeWord) {
      // Check for Devanagari or standard word boundaries
      pattern = `(?<=^|[^\\p{L}\\p{M}])${escaped}(?=[^\\p{L}\\p{M}]|$)`;
    }

    const flags = matchCase ? 'gu' : 'giu';
    return new RegExp(pattern, flags);
  }

  /**
   * Replaces matches inside a target field of a Sakhi
   */
  private replaceInField(
    sakhi: Sakhi,
    field: TargetField,
    regex: RegExp,
    replacement: string
  ): { modified: boolean; before: string; after: string; count: number } {
    let before = '';
    let after = '';
    let count = 0;

    switch (field) {
      case 'text.hi': {
        before = sakhi.text.hi || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'text.pb': {
        before = sakhi.text.pb || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'text.en': {
        before = sakhi.text.en || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'bhavarth.hi': {
        before = sakhi.bhavarth?.hi || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'bhavarth.pb': {
        before = sakhi.bhavarth?.pb || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'bhavarth.en': {
        before = sakhi.bhavarth?.en || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'transliteration': {
        before = sakhi.transliteration || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'contemplation.hi': {
        before = sakhi.contemplation?.hi || '';
        const matches = before.match(regex);
        if (matches && matches.length > 0) {
          count = matches.length;
          after = before.replace(regex, replacement);
          return { modified: true, before, after, count };
        }
        break;
      }
      case 'wordMeanings': {
        let wmModified = false;
        let totalWmCount = 0;
        const currentList = sakhi.wordMeanings?.hi || [];
        const newList: WordMeaning[] = [];

        for (const item of currentList) {
          let wordStr = item.word;
          let meanStr = item.meaning;
          const wordMatches = wordStr.match(regex);
          const meanMatches = meanStr.match(regex);

          if (wordMatches) {
            wmModified = true;
            totalWmCount += wordMatches.length;
            wordStr = wordStr.replace(regex, replacement);
          }
          if (meanMatches) {
            wmModified = true;
            totalWmCount += meanMatches.length;
            meanStr = meanStr.replace(regex, replacement);
          }
          newList.push({ word: wordStr, meaning: meanStr });
        }

        if (wmModified) {
          before = currentList.map(m => `${m.word}: ${m.meaning}`).join('; ');
          after = newList.map(m => `${m.word}: ${m.meaning}`).join('; ');
          return { modified: true, before, after, count: totalWmCount };
        }
        break;
      }
    }

    return { modified: false, before: '', after: '', count: 0 };
  }

  /**
   * Previews bulk replacement across Sakhis without applying changes
   */
  public previewBulkReplace(options: BulkReplaceOptions): BulkReplaceResult {
    const { search, replace, fields, matchCase, wholeWord, granthaFilter } = options;
    if (!search) {
      return { affectedSakhisCount: 0, totalReplacements: 0, snippets: [], timestamp: Date.now() };
    }

    const regex = this.createRegex(search, matchCase, wholeWord);
    const snippets: MatchSnippet[] = [];
    const affectedSet = new Set<string>();
    let totalReplacements = 0;

    for (const sakhi of sakhisDatabase) {
      if (granthaFilter && granthaFilter !== 'all' && sakhi.grantha !== granthaFilter) {
        continue;
      }

      for (const field of fields) {
        const res = this.replaceInField(sakhi, field, regex, replace);
        if (res.modified) {
          affectedSet.add(sakhi.id);
          totalReplacements += res.count;
          snippets.push({
            sakhiNumber: sakhi.number,
            sakhiId: sakhi.id,
            grantha: sakhi.grantha,
            category: sakhi.categoryTitle?.hi || sakhi.category,
            field,
            originalText: res.before,
            modifiedText: res.after,
            matchCount: res.count
          });
        }
      }
    }

    return {
      affectedSakhisCount: affectedSet.size,
      totalReplacements,
      snippets,
      timestamp: Date.now()
    };
  }

  /**
   * Executes bulk replace on the active Akhand Path database & Sakhis, persisting results
   */
  public executeBulkReplace(options: BulkReplaceOptions): BulkReplaceResult {
    const preview = this.previewBulkReplace(options);
    if (preview.affectedSakhisCount === 0) {
      return preview;
    }

    const previousSnapshots: Record<string, Partial<Sakhi>> = {};
    const regex = this.createRegex(options.search, options.matchCase, options.wholeWord);

    for (const sakhi of sakhisDatabase) {
      if (options.granthaFilter && options.granthaFilter !== 'all' && sakhi.grantha !== options.granthaFilter) {
        continue;
      }

      let sakhiModified = false;
      const snapshot: Partial<Sakhi> = {};

      for (const field of options.fields) {
        const res = this.replaceInField(sakhi, field, regex, options.replace);
        if (res.modified) {
          sakhiModified = true;

          // Record before state for undo
          if (field === 'text.hi') {
            snapshot.text = { ...sakhi.text, hi: sakhi.text.hi };
            sakhi.text.hi = res.after;
          } else if (field === 'text.pb') {
            snapshot.text = { ...sakhi.text, pb: sakhi.text.pb };
            sakhi.text.pb = res.after;
          } else if (field === 'text.en') {
            snapshot.text = { ...sakhi.text, en: sakhi.text.en };
            sakhi.text.en = res.after;
          } else if (field === 'bhavarth.hi') {
            snapshot.bhavarth = { ...sakhi.bhavarth, hi: sakhi.bhavarth.hi };
            sakhi.bhavarth.hi = res.after;
          } else if (field === 'bhavarth.pb') {
            snapshot.bhavarth = { ...sakhi.bhavarth, pb: sakhi.bhavarth.pb };
            sakhi.bhavarth.pb = res.after;
          } else if (field === 'bhavarth.en') {
            snapshot.bhavarth = { ...sakhi.bhavarth, en: sakhi.bhavarth.en };
            sakhi.bhavarth.en = res.after;
          } else if (field === 'transliteration') {
            snapshot.transliteration = sakhi.transliteration;
            sakhi.transliteration = res.after;
          } else if (field === 'contemplation.hi') {
            snapshot.contemplation = { ...sakhi.contemplation, hi: sakhi.contemplation.hi };
            sakhi.contemplation.hi = res.after;
          } else if (field === 'wordMeanings') {
            snapshot.wordMeanings = { ...sakhi.wordMeanings, hi: [...sakhi.wordMeanings.hi] };
            // Update the array
            sakhi.wordMeanings.hi = (sakhi.wordMeanings.hi || []).map(wm => ({
              word: wm.word.replace(regex, options.replace),
              meaning: wm.meaning.replace(regex, options.replace)
            }));
          }
        }
      }

      if (sakhiModified) {
        previousSnapshots[sakhi.id] = snapshot;
        // Merge into customOverrides
        this.customOverrides[sakhi.id] = {
          ...(this.customOverrides[sakhi.id] || {}),
          text: { ...sakhi.text },
          bhavarth: { ...sakhi.bhavarth },
          wordMeanings: { ...sakhi.wordMeanings },
          transliteration: sakhi.transliteration,
          contemplation: sakhi.contemplation
        };
      }
    }

    // Save history item
    const historyItem: BulkOperationHistoryItem = {
      id: `op-${Date.now()}`,
      timestamp: Date.now(),
      description: `प्रतिस्थापन: "${options.search}" ➔ "${options.replace}" (${preview.affectedSakhisCount} साखियां)`,
      affectedSakhisCount: preview.affectedSakhisCount,
      totalReplacements: preview.totalReplacements,
      previousSnapshots
    };
    this.history.unshift(historyItem);

    this.persist();
    return preview;
  }

  /**
   * Applies standard curated Sant Bhasha harmonization rules across all Sakhis
   */
  public executeHarmonization(selectedRuleIds?: string[]): {
    totalRulesApplied: number;
    totalSakhisAffected: number;
    totalCorrections: number;
    ruleSummaries: Array<{ rule: HarmonizationRule; count: number; sakhisCount: number }>;
  } {
    const rulesToApply = STANDARD_HARMONIZATION_RULES.filter(
      r => !selectedRuleIds || selectedRuleIds.includes(r.id)
    );

    let totalCorrections = 0;
    const globalAffectedIds = new Set<string>();
    const ruleSummaries: Array<{ rule: HarmonizationRule; count: number; sakhisCount: number }> = [];

    for (const rule of rulesToApply) {
      const res = this.executeBulkReplace({
        search: rule.search,
        replace: rule.replace,
        fields: rule.targetFields,
        wholeWord: false,
        matchCase: false
      });

      if (res.totalReplacements > 0) {
        res.snippets.forEach(s => globalAffectedIds.add(s.sakhiId));
        totalCorrections += res.totalReplacements;
        ruleSummaries.push({
          rule,
          count: res.totalReplacements,
          sakhisCount: res.affectedSakhisCount
        });
      }
    }

    return {
      totalRulesApplied: ruleSummaries.length,
      totalSakhisAffected: globalAffectedIds.size,
      totalCorrections,
      ruleSummaries
    };
  }

  /**
   * Undoes the last bulk replacement operation
   */
  public undoLastOperation(): boolean {
    if (this.history.length === 0) return false;
    const lastOp = this.history.shift();
    if (!lastOp) return false;

    // Restore snapshots
    for (const [id, snapshot] of Object.entries(lastOp.previousSnapshots)) {
      const sakhi = sakhisDatabase.find(s => s.id === id);
      if (sakhi) {
        if (snapshot.text) sakhi.text = { ...sakhi.text, ...snapshot.text };
        if (snapshot.bhavarth) sakhi.bhavarth = { ...sakhi.bhavarth, ...snapshot.bhavarth };
        if (snapshot.wordMeanings) sakhi.wordMeanings = { ...sakhi.wordMeanings, ...snapshot.wordMeanings };
        if (snapshot.transliteration !== undefined) sakhi.transliteration = snapshot.transliteration;
        if (snapshot.contemplation) sakhi.contemplation = { ...sakhi.contemplation, ...snapshot.contemplation };

        // Update customOverrides
        if (this.customOverrides[id]) {
          Object.assign(this.customOverrides[id], snapshot);
        }
      }
    }

    this.persist();
    return true;
  }

  /**
   * Resets entire database back to default factory sacred texts
   */
  public resetToFactoryDefaults(): void {
    this.customOverrides = {};
    this.history = [];

    // Reset sakhisDatabase in-place from SACRED_SAKHIS pristine clone
    for (let i = 0; i < sakhisDatabase.length; i++) {
      const pristine = SACRED_SAKHIS[i];
      if (pristine) {
        sakhisDatabase[i] = JSON.parse(JSON.stringify(pristine));
      }
    }

    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(HISTORY_KEY);
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { timestamp: Date.now() } }));
    }
  }

  /**
   * Returns current statistics
   */
  public getStats() {
    return {
      totalSakhis: sakhisDatabase.length,
      customizedCount: Object.keys(this.customOverrides).length,
      historyCount: this.history.length,
      history: this.history
    };
  }

  /**
   * Exports current sakhis as JSON
   */
  public exportJson(): void {
    if (typeof window === 'undefined') return;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(sakhisDatabase, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `saheb-world-sakhis-database-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
}

export const sakhiBulkManager = new SakhiBulkManagerService();
