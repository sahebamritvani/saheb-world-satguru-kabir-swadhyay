/**
 * Spiritual Text Purification & Auto-Correction Engine
 * Specialized in traditional literature, Sant Bhasha, and Kabir Vani
 * (Hindi, Gurmukhi/Punjabi, and English)
 */

import { Sakhi } from '../types';
import { sakhisDatabase } from '../data/sakhis';

export interface VaniCorrectionItem {
  original: string;
  corrected: string;
  note?: string;
}

export interface VaniPurificationResult {
  correctedText: string;
  matchedSakhiNumber?: number;
  grantha?: string;
  categoryTitle?: string;
  corrections: VaniCorrectionItem[];
  meaning: string;
  fullFormattedText: string;
  notice: string;
  source: 'sacred-database' | 'sacred-rules' | 'gemini-ai';
}

export interface PurificationOptions {
  language?: 'hi' | 'pb' | 'en';
  mode?: 'general' | 'vani';
}

function replaceDevWord(text: string, search: string, replace: string): string {
  const regex = new RegExp(`(?<=^|[^\\p{Script=Devanagari}\\p{M}])${search}(?=[^\\p{Script=Devanagari}\\p{M}]|$)`, 'gu');
  return text.replace(regex, replace);
}

function replaceGurWord(text: string, search: string, replace: string): string {
  const regex = new RegExp(`(?<=^|[^\\p{Script=Gurmukhi}\\p{M}])${search}(?=[^\\p{Script=Gurmukhi}\\p{M}]|$)`, 'gu');
  return text.replace(regex, replace);
}

/**
 * Normalizes Devanagari word to root consonants for fuzzy sacred matching
 */
function toDevRoot(w: string): string {
  return w
    .toLowerCase()
    .replace(/[।॥!?,;:.'"\-–—()\[\]{}/\\]/g, '')
    .replace(/[ािीुूृेैोौंःँ्]/g, '')
    .replace(/[षश]/g, 'स')
    .replace(/[ण]/g, 'न')
    .replace(/[व]/g, 'ब')
    .replace(/[य]/g, 'ज')
    .trim();
}

/**
 * Extracts normalized tokens from a text string
 */
function extractTokens(text: string): string[] {
  return text
    .replace(/[।॥!?,;:.'"\-–—()\[\]{}/\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(w => w.trim())
    .filter(w => w.length > 0);
}

/**
 * Checks if input matches any Sakhi in the sacred database
 */
function findMatchingSakhi(rawText: string): { sakhi: Sakhi; score: number } | null {
  const inputTokens = extractTokens(rawText);
  if (inputTokens.length < 3) return null;

  const inputRoots = inputTokens.map(toDevRoot).filter(r => r.length > 1);
  if (inputRoots.length < 3) return null;

  let bestMatch: Sakhi | null = null;
  let highestScore = 0;

  for (const sakhi of sakhisDatabase) {
    const sakhiHiTokens = extractTokens(sakhi.text.hi);
    const sakhiRoots = sakhiHiTokens.map(toDevRoot).filter(r => r.length > 1);

    // Count matching roots
    let matchedCount = 0;
    for (const r of inputRoots) {
      if (sakhiRoots.includes(r)) {
        matchedCount++;
      }
    }

    const score = matchedCount / Math.max(inputRoots.length, sakhiRoots.length);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = sakhi;
    }
  }

  // Threshold: at least 4 roots match or score >= 0.5
  if (bestMatch && (highestScore >= 0.45 || highestScore * inputRoots.length >= 4)) {
    return { sakhi: bestMatch, score: highestScore };
  }

  return null;
}

/**
 * Derives word-by-word corrections between input text and authentic text
 */
function deriveWordCorrections(inputRaw: string, authenticRaw: string, lang: 'hi' | 'pb' | 'en'): VaniCorrectionItem[] {
  const inputTokens = extractTokens(inputRaw);
  const authTokens = extractTokens(authenticRaw);
  const items: VaniCorrectionItem[] = [];
  const seenOriginals = new Set<string>();

  // Simple alignment
  let i = 0;
  let j = 0;

  while (i < inputTokens.length && j < authTokens.length) {
    const inWord = inputTokens[i];
    const authWord = authTokens[j];

    const inClean = inWord.replace(/[।॥,!?]/g, '');
    const authClean = authWord.replace(/[।॥,!?]/g, '');

    if (inClean === authClean) {
      i++;
      j++;
      continue;
    }

    // Check if root matches or word differs
    const inRoot = toDevRoot(inClean);
    const authRoot = toDevRoot(authClean);

    if (inRoot === authRoot || inRoot.includes(authRoot) || authRoot.includes(inRoot) || (inClean.length >= 2 && authClean.length >= 2)) {
      if (!seenOriginals.has(inClean)) {
        seenOriginals.add(inClean);

        let note = `'${inClean}' की जगह '${authClean}'`;
        if (inClean === 'गुरु' && authClean === 'गुर') {
          note = `'गुरु' की जगह गुर या गुरू`;
        }

        items.push({
          original: inClean,
          corrected: authClean,
          note
        });
      }
      i++;
      j++;
    } else {
      // Lookahead in authTokens
      let foundInAuth = false;
      for (let k = j + 1; k < Math.min(j + 3, authTokens.length); k++) {
        if (toDevRoot(inputTokens[i]) === toDevRoot(authTokens[k])) {
          j = k;
          foundInAuth = true;
          break;
        }
      }
      if (!foundInAuth) {
        i++;
      }
    }
  }

  return items;
}

/**
 * Sant Bhasha dialect vocabulary rules
 */
const VANI_DIALECT_RULES: Array<{
  search: string;
  replace: string;
  note: string;
}> = [
  { search: 'गुरु', replace: 'गुर', note: "'गुरु' की जगह गुर या गुरू" },
  { search: 'जानिया', replace: 'जाण्या', note: "'जानिया' की जगह जाण्या" },
  { search: 'जान्या', replace: 'जाण्या', note: "'जान्या' की जगह जाण्या" },
  { search: 'जाना', replace: 'जाण्या', note: "'जाना' की जगह जाण्या" },
  { search: 'को', replace: 'कूं', note: "'को' की जगह कूं" },
  { search: 'ओसे', replace: 'ओस', note: "'ओसे' की जगह ओस" },
  { search: 'भागसी', replace: 'भाजसी', note: "'भागसी' की जगह भाजसी" },
  { search: 'भागेगी', replace: 'भाजसी', note: "'भागेगी' की जगह भाजसी" },
  { search: 'धसे', replace: 'धसै', note: "'धसे' की जगह धसै" },
  { search: 'धंसे', replace: 'धसै', note: "'धंसे' की जगह धसै" },
  { search: 'ढूंढे', replace: 'ढूँढै', note: "'ढूंढे' की जगह ढूँढै" },
  { search: 'ढूंढता', replace: 'ढूँढै', note: "'ढूंढता' की जगह ढूँढै" },
  { search: 'ढूंढो', replace: 'ढूँढौ', note: "'ढूंढो' की जगह ढूँढौ" },
  { search: 'मोको कहां', replace: 'मोको कहाँ', note: "'मोको कहां' की जगह मोको कहाँ" },
  { search: 'बंदे', replace: 'बंदै', note: "'बंदे' की जगह बंदै" },
  { search: 'कहे', replace: 'कहै', note: "'कहे' की जगह कहै" },
  { search: 'कहता', replace: 'कहै', note: "'कहता' की जगह कहै" },
  { search: 'करे', replace: 'करै', note: "'करे' की जगह करै" },
  { search: 'करता', replace: 'करै', note: "'करता' की जगह करै" },
  { search: 'सोवे', replace: 'सोवै', note: "'सोवे' की जगह सोवै" },
  { search: 'जागे', replace: 'जागै', note: "'जागे' की जगह जागै" },
  { search: 'खावे', replace: 'खावै', note: "'खावे' की जगह खावै" },
  { search: 'पावे', replace: 'पावै', note: "'पावे' की जगह पावै" },
  { search: 'रोवे', replace: 'रोवै', note: "'रोवे' की जगह रोवै" },
  { search: 'खोवे', replace: 'खोवै', note: "'खोवे' की जगह खोवै" },
  { search: 'होवे', replace: 'होई', note: "'होवे' की जगह होई" },
  { search: 'होता', replace: 'होई', note: "'होता' की जगह होई" },
  { search: 'कैसे', replace: 'कैसै', note: "'कैसे' की जगह कैसै" },
  { search: 'वैसे', replace: 'वैसै', note: "'वैसे' की जगह वैसै" },
  { search: 'जैसे', replace: 'जैसै', note: "'जैसे' की जगह जैसै" },
  { search: 'तैसा', replace: 'तैसा', note: "'तैसा' की जगह तैसा" },
  { search: 'पाँव', replace: 'पाँय', note: "'पाँव' की जगह पाँय" },
  { search: 'पांव', replace: 'पाँय', note: "'पांव' की जगह पाँय" },
  { search: 'दोनों', replace: 'दोऊ', note: "'दोनों' की जगह दोऊ" },
  { search: 'खडे', replace: 'खड़े', note: "'खडे' की जगह खड़े" },
  { search: 'किसके', replace: 'काके', note: "'किसके' की जगह काके" },
  { search: 'अपने', replace: 'आपनै', note: "'अपने' की जगह आपनै" },
  { search: 'दिया', replace: 'दियो', note: "'दिया' की जगह दियो" },
  { search: 'बता', replace: 'बताय', note: "'बता' की जगह बताय" },
  { search: 'कबीरदास', replace: 'कबीर', note: "'कबीरदास' की जगह कबीर" },
  { search: 'माटी', replace: 'माटी', note: "'माटी' को मानक रूप दिया" },
  { search: 'सुरती', replace: 'सुरति', note: "'सुरती' की जगह सुरति" },
  { search: 'निरती', replace: 'निरति', note: "'निरती' की जगह निरति" },
  { search: 'स्मरण', replace: 'सुमिरन', note: "'स्मरण' की जगह सुमिरन" },
  { search: 'सुमिर्न', replace: 'सुमिरन', note: "'सुमिर्न' की जगह सुमिरन" },
  { search: 'साधू', replace: 'साधु', note: "'साधू' की जगह साधु" },
  { search: 'भगति', replace: 'भक्ति', note: "'भगति' को परंपरा अनुसार रखा" },
  { search: 'अहँकार', replace: 'अहंकार', note: "'अहँकार' की जगह अहंकार" },
  { search: 'पाखण्ड', replace: 'पाखंड', note: "'पाखण्ड' की जगह पाखंड" },
  { search: 'ब्रम्ह', replace: 'ब्रह्म', note: "'ब्रम्ह' की जगह ब्रह्म" }
];

/**
 * Main function that purifies and analyzes Vani with deep structured results:
 * - Pure authentic verse
 * - Word-by-word corrections (वर्तनी सुधार)
 * - Spiritual meaning (वाणी का अर्थ)
 * - Full formatted text
 */
export function purifyAndAnalyzeVani(
  rawText: string,
  options: PurificationOptions = {}
): VaniPurificationResult {
  if (!rawText || typeof rawText !== 'string') {
    return {
      correctedText: '',
      corrections: [],
      meaning: '',
      fullFormattedText: '',
      notice: '',
      source: 'sacred-rules',
    };
  }

  const { language = 'hi', mode = 'vani' } = options;
  const cleanedInput = rawText.normalize('NFC').trim();

  // 1. Check against Sacred Database (Full Sakhis Collection)
  const dbMatch = findMatchingSakhi(cleanedInput);
  if (dbMatch) {
    const { sakhi } = dbMatch;
    const correctedText = sakhi.text[language] || sakhi.text.hi;
    const meaning = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
    const corrections = deriveWordCorrections(cleanedInput, correctedText, language);

    // Format full text for single-click copying
    let fullFormattedText = '';
    if (language === 'pb') {
      fullFormattedText = `ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਇਸ ਪਾਵਨ ਮੂਲ ਬਾਣੀ (ਸਾਖੀ) ਦਾ ਸ਼ੁੱਧ ਰੂਪ ਇਸ ਪ੍ਰਕਾਰ ਹੈ:\n${correctedText}\n\n`;
      if (corrections.length > 0) {
        fullFormattedText += `ਸਰਲ ਸ਼ਬਦਾਂ ਵਿੱਚ ਸੁਧਾਰ (ਵਰਤਣੀ):\n${corrections.map(c => `• ${c.note || `'${c.original}' ਦੀ ਥਾਂ '${c.corrected}'`}`).join('\n')}\n\n`;
      }
      fullFormattedText += `ਬਾਣੀ ਦਾ ਅਰਥ (ਭਾਵਾਰਥ):\n${meaning}`;
    } else if (language === 'en') {
      fullFormattedText = `Pure authentic verse by Satguru Kabir Saheb:\n${correctedText}\n\n`;
      if (corrections.length > 0) {
        fullFormattedText += `Word Improvements & Spelling:\n${corrections.map(c => `• '${c.original}' replaced with '${c.corrected}'`).join('\n')}\n\n`;
      }
      fullFormattedText += `Spiritual Meaning:\n${meaning}`;
    } else {
      fullFormattedText = `कबीर दास जी की इस मूल वाणी (साखी) का शुद्ध रूप इस प्रकार है:\n${correctedText}\n\n`;
      if (corrections.length > 0) {
        fullFormattedText += `सरल शब्दों में सुधार (वर्तनी):\n${corrections.map(c => `• ${c.note || `'${c.original}' की जगह '${c.corrected}'`}`).join('\n')}\n\n`;
      }
      fullFormattedText += `वाणी का अर्थ:\n${meaning}`;
    }

    return {
      correctedText,
      matchedSakhiNumber: sakhi.number,
      grantha: sakhi.grantha,
      categoryTitle: sakhi.categoryTitle[language],
      corrections,
      meaning,
      fullFormattedText,
      notice: `✓ साखी #${sakhi.number} (${sakhi.grantha}) से प्रामाणिक रूप व भावार्थ सत्यापित।`,
      source: 'sacred-database',
    };
  }

  // 2. Fallback: Sant Bhasha Rule-Based Purifier
  let workingText = cleanedInput.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const detectedCorrections: VaniCorrectionItem[] = [];
  const seenOrigs = new Set<string>();

  if (mode === 'vani' || language === 'hi') {
    for (const rule of VANI_DIALECT_RULES) {
      const regex = new RegExp(`(?<=^|[^\\p{Script=Devanagari}\\p{M}])${rule.search}(?=[^\\p{Script=Devanagari}\\p{M}]|$)`, 'gu');
      if (regex.test(workingText)) {
        workingText = workingText.replace(regex, rule.replace);
        if (!seenOrigs.has(rule.search)) {
          seenOrigs.add(rule.search);
          detectedCorrections.push({
            original: rule.search,
            corrected: rule.replace,
            note: rule.note
          });
        }
      }
    }
  }

  // Punctuation formatting (danda at end of lines)
  workingText = formatVaniPunctuation(workingText, language);

  const fallbackMeaning = language === 'pb'
    ? 'ਇਸ ਪਾਵਨ ਬਾਣੀ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਆਤਮਿਕ ਗਿਆਨ, ਸਤਯਨਾਮ ਦੇ ਸਿਮਰਨ ਅਤੇ ਮਨ ਦੀ ਸ਼ੁੱਧਤਾ ਦਾ ਅਮਰ ਸੰਦੇਸ਼ ਬਖਸ਼ਦੇ ਹਨ।'
    : language === 'en'
    ? 'In this sacred verse, Satguru Kabir Saheb reveals the path of spiritual awareness, devotion, and inner awakening.'
    : 'इस पावन वाणी में कबीर साहेब अंतर्मन की शुद्धि, सतगुरु के ज्ञान और सत्यनाम के सुमिरन का पावन संदेश देते हैं।';

  let fullFormattedText = '';
  if (language === 'pb') {
    fullFormattedText = `ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਇਸ ਬਾਣੀ ਦਾ ਸ਼ੁੱਧ ਰੂਪ:\n${workingText}\n\n`;
    if (detectedCorrections.length > 0) {
      fullFormattedText += `ਸਰਲ ਸ਼ਬਦਾਂ ਵਿੱਚ ਸੁਧਾਰ (ਵਰਤਣੀ):\n${detectedCorrections.map(c => `• ${c.note || `'${c.original}' ਦੀ ਥਾਂ '${c.corrected}'`}`).join('\n')}\n\n`;
    }
    fullFormattedText += `ਬਾਣੀ ਦਾ ਅਰਥ:\n${fallbackMeaning}`;
  } else if (language === 'en') {
    fullFormattedText = `Corrected Verse:\n${workingText}\n\n`;
    if (detectedCorrections.length > 0) {
      fullFormattedText += `Word Improvements:\n${detectedCorrections.map(c => `• '${c.original}' ➔ '${c.corrected}'`).join('\n')}\n\n`;
    }
    fullFormattedText += `Spiritual Meaning:\n${fallbackMeaning}`;
  } else {
    fullFormattedText = `कबीर दास जी की इस मूल वाणी (साखी) का शुद्ध रूप इस प्रकार है:\n${workingText}\n\n`;
    if (detectedCorrections.length > 0) {
      fullFormattedText += `सरल शब्दों में सुधार (वर्तनी):\n${detectedCorrections.map(c => `• ${c.note || `'${c.original}' की जगह '${c.corrected}'`}`).join('\n')}\n\n`;
    }
    fullFormattedText += `वाणी का अर्थ:\n${fallbackMeaning}`;
  }

  return {
    correctedText: workingText,
    corrections: detectedCorrections,
    meaning: fallbackMeaning,
    fullFormattedText,
    notice: '✓ पावन ग्रंथ नियमों एवं संत भाषा व्याकरण द्वारा शुद्ध किया गया।',
    source: 'sacred-rules',
  };
}

/**
 * Backward-compatible wrapper returning pure text string
 */
export function cleanseSpiritualText(
  rawText: string,
  options: PurificationOptions = {}
): string {
  const result = purifyAndAnalyzeVani(rawText, options);
  return result.correctedText;
}

/**
 * Ensures couplets have appropriate traditional poetic punctuation (। for charan 1, ॥ for charan 2)
 */
function formatVaniPunctuation(text: string, language: 'hi' | 'pb' | 'en'): string {
  if (language === 'en') return text;

  // Replace double periods or triple periods with danda
  let clean = text.replace(/\.{2,}/g, ' । ').replace(/[ \t]+/g, ' ');

  const lines = clean.split('\n');
  const formattedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
      formattedLines.push('');
      continue;
    }

    // Do not touch full invocations
    if (line.startsWith('।।') && line.endsWith('।।')) {
      formattedLines.push(line);
      continue;
    }

    // Replace trailing western periods with danda
    line = line.replace(/\.+$/, '').trim();

    // Check if line already has danda
    const hasDanda = line.endsWith('।') || line.endsWith('॥');

    if (!hasDanda) {
      const prevLine = formattedLines.length > 0 ? formattedLines[formattedLines.length - 1].trim() : '';
      if (prevLine && prevLine.endsWith('।')) {
        line = line + ' ॥';
      } else {
        line = line + ' ।';
      }
    }

    formattedLines.push(line);
  }

  return formattedLines.join('\n');
}
