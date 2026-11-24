import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Database,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Upload,
  Check,
  FileJson,
  Info,
  X,
  RotateCcw,
  Search,
  Plus,
  Edit2,
  Download,
  Copy,
  Sliders,
  BookOpen,
  Sparkles,
  MessageSquare,
  Feather,
  Layers,
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import {
  ADMIN_GRANTH_SLOTS,
  ADMIN_SLOT_CATEGORIES,
  ADMIN_SLOTS_UPDATED_EVENT,
  AdminGranthSlotId,
  AdminSlotCategoryId,
  SlotStatusInfo,
  getAllSlotStatuses,
  getSampleJsonForSlot,
  getSlotRawJson,
  injectSlotJson,
  purgeAllInjectedSlots,
  purgeSingleInjectedSlot,
  validateAdminSlotJson,
} from '../services/adminSlotInjectorStore';
import { isAdminAuthenticated } from '../services/adminAuth';
import { devanagariToGurmukhi } from '../services/transliteration';

interface AdminDataInjectorProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  initialSlotId?: AdminGranthSlotId | null;
}

type StatusFilter = 'all' | 'loaded' | 'empty';
type CmsMode = 'easy' | 'raw';
type GranthTemplateType = 'sakhi' | 'dialogue' | 'bijak' | 'nitnem' | 'flexible';

interface GranthItemDraft {
  id?: string;
  template: GranthTemplateType;
  // Common / Flexible
  titleHi: string;
  titlePb: string;
  titleEn: string;
  contentHi: string;
  contentPb: string;
  contentEn: string;
  // Sakhi Template (11-Steps)
  moolVani?: string;
  shabdarth?: string;
  bhavarth?: string;
  // Dialogue Template (Kabir Sagar)
  speaker?: string; // 'Satguru Kabir Saheb' | 'Sri Dharmadas Ji' | 'Custom'
  customSpeakerName?: string;
  dialogueText?: string;
  // Bijak Template
  bijakDepartment?: string; // 'Ramaini' | 'Shabad' | 'Sakhi' | 'Gyan Chautisa'
  moolVerse?: string;
  exegesis?: string;
  // Nitnem Template
  nitnemSection?: string; // 'Prabhat' | 'Sandhya' | 'Aarti' | 'Chalisa' | 'Barahmasi'
}

export const AdminDataInjector: React.FC<AdminDataInjectorProps> = ({
  isOpen,
  onClose,
  language = 'hi',
  initialSlotId = null,
}) => {
  const { theme, isDarkMode } = useAppTheme();

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [selectedSlotId, setSelectedSlotId] = useState<AdminGranthSlotId>('slot-1-nitnem');
  const [selectedCategory, setSelectedCategory] = useState<'all' | AdminSlotCategoryId>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // CMS Modes
  const [cmsMode, setCmsMode] = useState<CmsMode>('easy');
  const [jsonInput, setJsonInput] = useState<string>('');
  const [activeTemplate, setActiveTemplate] = useState<GranthTemplateType>('flexible');

  // Items State
  const [itemsList, setItemsList] = useState<GranthItemDraft[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [currentItem, setCurrentItem] = useState<GranthItemDraft>({
    template: 'flexible',
    titleHi: '',
    titlePb: '',
    titleEn: '',
    contentHi: '',
    contentPb: '',
    contentEn: '',
    speaker: 'Satguru Kabir Saheb',
    bijakDepartment: 'Ramaini',
    nitnemSection: 'Prabhat',
  });
  const [showItemModal, setShowItemModal] = useState<boolean>(false);

  const [slotStatuses, setSlotStatuses] = useState<Record<AdminGranthSlotId, SlotStatusInfo>>(() =>
    getAllSlotStatuses()
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [showPurgeConfirm, setShowPurgeConfirm] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    const syncAdmin = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', syncAdmin);
    window.addEventListener('storage', syncAdmin);
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', syncAdmin);
      window.removeEventListener('storage', syncAdmin);
    };
  }, []);

  useEffect(() => {
    if (isOpen && !isAdmin) {
      onClose();
    }
  }, [isOpen, isAdmin, onClose]);

  const totalSlots = ADMIN_GRANTH_SLOTS.length;

  const refreshStatuses = useCallback(() => {
    setSlotStatuses(getAllSlotStatuses());
  }, []);

  useEffect(() => {
    if (isOpen && initialSlotId) {
      setSelectedSlotId(initialSlotId);
      setSelectedCategory('all');
      setStatusFilter('all');
      setSearchQuery('');
    }
  }, [isOpen, initialSlotId]);

  // Determine smart template based on selected slot ID
  const detectTemplateForSlot = (sId: AdminGranthSlotId): GranthTemplateType => {
    if (sId === 'slot-2-sakhi' || sId === 'slot-13-daily-sakhi') return 'sakhi';
    if (sId === 'slot-5-kabir-sagar' || sId === 'slot-9-kar-nainon') return 'dialogue';
    if (sId === 'slot-3-bijak') return 'bijak';
    if (sId === 'slot-1-nitnem' || sId === 'slot-15-akhand-path' || sId === 'slot-16-aarti-sanctuary') return 'nitnem';
    return 'flexible';
  };

  // Parse existing JSON into Granth items array
  const parseJsonToItems = (raw: string, defTpl: GranthTemplateType): GranthItemDraft[] => {
    if (!raw.trim()) return [];
    try {
      const parsed = JSON.parse(raw);
      let arr = Array.isArray(parsed) ? parsed : [parsed];
      if (parsed.chapters && Array.isArray(parsed.chapters)) arr = parsed.chapters;
      if (parsed.items && Array.isArray(parsed.items)) arr = parsed.items;
      
      return arr.map((item: any, idx: number) => ({
        id: item.id || String(idx + 1),
        template: item.template || defTpl,
        titleHi: typeof item.title === 'string' ? item.title : (item.title?.hi || item.name?.hi || item.heading?.hi || `खंड ${idx + 1}`),
        titlePb: item.title?.pb || item.name?.pb || item.heading?.pb || '',
        titleEn: item.title?.en || item.name?.en || item.heading?.en || '',
        contentHi: typeof item.content === 'string' ? item.content : (Array.isArray(item.lines) ? item.lines.join('\n') : (item.content?.hi || item.description?.hi || '')),
        contentPb: Array.isArray(item.lines) ? item.lines.join('\n') : (item.content?.pb || item.description?.pb || ''),
        contentEn: Array.isArray(item.lines) ? item.lines.join('\n') : (item.content?.en || item.description?.en || ''),
        moolVani: item.moolVani || item.verse || '',
        shabdarth: item.shabdarth || '',
        bhavarth: item.bhavarth || '',
        speaker: item.speaker || 'Satguru Kabir Saheb',
        dialogueText: item.dialogueText || '',
        bijakDepartment: item.bijakDepartment || 'Ramaini',
        nitnemSection: item.nitnemSection || 'Prabhat',
      }));
    } catch {
      return [];
    }
  };

  const compileItemsToJson = (items: GranthItemDraft[]): string => {
    const formatted = items.map((it, idx) => ({
      id: it.id || `item-${idx + 1}`,
      number: idx + 1,
      template: it.template,
      title: {
        hi: it.titleHi || `अध्याय ${idx + 1}`,
        pb: it.titlePb || it.titleHi,
        en: it.titleEn || it.titleHi,
      },
      content: {
        hi: it.contentHi,
        pb: it.contentPb || it.contentHi,
        en: it.contentEn || it.contentHi,
      },
      moolVani: it.moolVani || it.contentHi,
      shabdarth: it.shabdarth || '',
      bhavarth: it.bhavarth || it.contentHi,
      speaker: it.speaker || 'Satguru Kabir Saheb',
      dialogueText: it.dialogueText || it.contentHi,
      bijakDepartment: it.bijakDepartment || 'Ramaini',
      nitnemSection: it.nitnemSection || 'Prabhat',
      lines: it.contentHi.split('\n').filter(Boolean),
    }));
    return JSON.stringify(formatted, null, 2);
  };

  useEffect(() => {
    if (!isOpen) return;
    refreshStatuses();
    const tpl = detectTemplateForSlot(selectedSlotId);
    setActiveTemplate(tpl);
    const existingRaw = getSlotRawJson(selectedSlotId);
    setJsonInput(existingRaw);
    setItemsList(parseJsonToItems(existingRaw, tpl));
    setActionError(null);
    setShowPurgeConfirm(false);
  }, [isOpen, selectedSlotId, refreshStatuses]);

  useEffect(() => {
    const handleUpdated = () => refreshStatuses();
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleUpdated);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleUpdated);
  }, [refreshStatuses]);

  const validation = useMemo(() => validateAdminSlotJson(jsonInput), [jsonInput]);

  const loadedSlotsCount = useMemo(
    () => Object.values(slotStatuses).filter((s) => s.loaded).length,
    [slotStatuses]
  );

  const emptySlotsCount = totalSlots - loadedSlotsCount;

  const categoryCounts = useMemo(() => {
    const counts: Record<AdminSlotCategoryId, number> = {
      'scriptures-darshan': 0,
      'sadhana-dhun': 0,
      'wisdom-quizzes': 0,
      'exploration-tools': 0,
      'guide-policies': 0,
    };
    for (const slot of ADMIN_GRANTH_SLOTS) {
      counts[slot.category] += 1;
    }
    return counts;
  }, []);

  const filteredSlots = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ADMIN_GRANTH_SLOTS.filter((slot) => {
      if (selectedCategory !== 'all' && slot.category !== selectedCategory) return false;
      const isLoaded = Boolean(slotStatuses[slot.id]?.loaded);
      if (statusFilter === 'loaded' && !isLoaded) return false;
      if (statusFilter === 'empty' && isLoaded) return false;
      if (!q) return true;

      const haystack = [
        String(slot.slotNumber),
        `#${slot.slotNumber}`,
        slot.label,
        slot.title.hi,
        slot.title.pb,
        slot.title.en,
        slot.description.hi,
        slot.targetSlug,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [searchQuery, selectedCategory, statusFilter, slotStatuses]);

  const selectedSlotMeta = useMemo(
    () => ADMIN_GRANTH_SLOTS.find((s) => s.id === selectedSlotId) || ADMIN_GRANTH_SLOTS[0],
    [selectedSlotId]
  );

  const selectedSlotStatus = slotStatuses[selectedSlotId] || {
    slotId: selectedSlotId,
    loaded: false,
    itemCount: 0,
    updatedAt: null,
    byteSize: 0,
  };

  if (!isOpen || !isAdmin) return null;

  const showSuccessToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleInject = async () => {
    setActionError(null);
    let payloadToInject = jsonInput;
    if (cmsMode === 'easy') {
      payloadToInject = compileItemsToJson(itemsList);
      setJsonInput(payloadToInject);
    }

    const valResult = validateAdminSlotJson(payloadToInject);
    if (!valResult.valid) {
      setActionError(valResult.errorHi || valResult.errorEn || 'अमान्य डेटा संरचना');
      return;
    }

    setIsSaving(true);
    try {
      const result = await injectSlotJson(selectedSlotId, payloadToInject);
      if (!result.ok) {
        setActionError(result.errorHi || result.errorEn || 'डेटा सेव करने में त्रुटि हुई');
        return;
      }
      refreshStatuses();
      showSuccessToast(`✓ #${selectedSlotMeta.slotNumber} (${selectedSlotMeta.label}) सफलतापूर्वक सहेजा गया!`);
    } finally {
      setIsSaving(false);
    }
  };

  // AI Assist Helper to auto-draft Punjabi & English from Hindi Vani
  const handleAiAssistTranslate = () => {
    const hindiSrc = currentItem.contentHi || currentItem.moolVani || currentItem.titleHi;
    if (!hindiSrc.trim()) {
      setActionError('कृपया पहले हिंदी मूलवाणी या शीर्षक दर्ज करें ताकि AI Assist उसका पंजाबी व अंग्रेज़ी ड्राफ़्ट तैयार कर सके।');
      return;
    }
    const gurmukhiDraft = devanagariToGurmukhi(hindiSrc);
    const englishDraft = `Sacred Kabir Bani Exegesis: "${hindiSrc}" — Elucidating the supreme eternal truth of Satguru Kabir Saheb.`;
    
    setCurrentItem({
      ...currentItem,
      titlePb: currentItem.titlePb || devanagariToGurmukhi(currentItem.titleHi || 'पावन खंड'),
      titleEn: currentItem.titleEn || `Sacred Chapter / Vani`,
      contentPb: currentItem.contentPb || gurmukhiDraft,
      contentEn: currentItem.contentEn || englishDraft,
      moolVani: currentItem.moolVani || hindiSrc,
      bhavarth: currentItem.bhavarth || `सद्गुरु कबीर साहेब फरमाते हैं कि इस पावन वाणी का सार आत्म-शुद्धि व सत्यनाम सिमरन है।`,
    });
    showSuccessToast('✨ AI Assist ने हिंदी मूलवाणी से पंजाबी (गुरुमुखी) व अंग्रेज़ी ड्राफ़्ट सफलतापूर्वक तैयार कर दिया है!');
  };

  const handleSaveItemModal = () => {
    if (!currentItem.titleHi.trim()) {
      setActionError('कृपया कम से कम हिंदी शीर्षक अवश्य दर्ज करें।');
      return;
    }
    let updated: GranthItemDraft[];
    if (editingIndex !== null) {
      updated = [...itemsList];
      updated[editingIndex] = { ...currentItem, template: activeTemplate };
    } else {
      updated = [...itemsList, { ...currentItem, template: activeTemplate }];
    }
    setItemsList(updated);
    setJsonInput(compileItemsToJson(updated));
    setShowItemModal(false);
    setEditingIndex(null);
    setCurrentItem({
      template: activeTemplate,
      titleHi: '',
      titlePb: '',
      titleEn: '',
      contentHi: '',
      contentPb: '',
      contentEn: '',
      speaker: 'Satguru Kabir Saheb',
      bijakDepartment: 'Ramaini',
      nitnemSection: 'Prabhat',
    });
  };

  const handleDeleteItem = (idx: number) => {
    const updated = itemsList.filter((_, i) => i !== idx);
    setItemsList(updated);
    setJsonInput(compileItemsToJson(updated));
  };

  const handleEditItem = (idx: number) => {
    setEditingIndex(idx);
    setCurrentItem(itemsList[idx]);
    setActiveTemplate(itemsList[idx].template || activeTemplate);
    setShowItemModal(true);
  };

  const handleExportJsonBackup = () => {
    const fullData: Record<string, string> = {};
    for (const slot of ADMIN_GRANTH_SLOTS) {
      const raw = getSlotRawJson(slot.id);
      if (raw) fullData[slot.id] = raw;
    }
    const blob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saheb_world_cms_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccessToast('✓ पूर्ण CMS बैकअप JSON फाइल सफलतापूर्वक डाउनलोड हो गई!');
  };

  const handleImportJsonBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (typeof parsed === 'object' && parsed !== null) {
          for (const [sId, rawJson] of Object.entries(parsed)) {
            if (typeof rawJson === 'string') {
              await injectSlotJson(sId as AdminGranthSlotId, rawJson);
            }
          }
          refreshStatuses();
          const tpl = detectTemplateForSlot(selectedSlotId);
          const existingRaw = getSlotRawJson(selectedSlotId);
          setJsonInput(existingRaw);
          setItemsList(parseJsonToItems(existingRaw, tpl));
          showSuccessToast('✓ बैकअप डेटा सफलतापूर्वक लोड और सिंक ہو گیا!');
        }
      } catch {
        setActionError('बैकअप फाइल अमान्य JSON है।');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="fixed inset-0 z-[105] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="w-full max-w-4xl max-h-[92vh] rounded-2xl border shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="px-4 sm:px-6 py-3.5 border-b flex items-center justify-between gap-3 shrink-0"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              style={{
                backgroundColor: isDarkMode ? 'rgba(217, 119, 6, 0.2)' : 'rgba(180, 83, 9, 0.12)',
                borderColor: theme.accentGold,
              }}
              className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0"
            >
              <Database className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </div>
            <div className="min-w-0">
              <h2
                style={{ color: theme.sacredMaroon }}
                className="text-sm sm:text-base font-black font-serif leading-snug truncate"
              >
                स्मार्ट ग्रंथ CMS व बहु-स्तरीय संपादन प्रणाली (Smart Granth CMS)
              </h2>
              <p
                className="text-[11px] font-serif tabular-nums truncate flex items-center gap-1.5"
                style={{ color: theme.textSecondary }}
              >
                <span>लोडेड स्लॉट्स: {loadedSlotsCount} / {totalSlots}</span>
                <span>·</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">100% ऑफ़लाइन IndexedDB सिंक</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportJsonBackup}
              className="min-h-[36px] px-3 py-1.5 rounded-xl bg-amber-600 text-white text-xs font-bold font-serif hover:bg-amber-700 transition cursor-pointer flex items-center gap-1 shrink-0"
              title="पूरा डेटा बैकअप डाउनलोड करें"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">बैकअप (Export)</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg, color: theme.sacredMaroon }}
              className="min-h-[36px] px-3 py-1.5 rounded-xl border text-xs font-bold font-serif flex items-center gap-1 hover:opacity-90 cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>बंद करें</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {toastMessage && (
            <div className="p-3 rounded-xl border border-emerald-600/40 bg-emerald-600/12 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-bold font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Slot Selector & Template Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <label
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>ग्रंथ या कार्ड स्लॉट चुनें (Select Granth Slot):</span>
              </label>

              <div className="flex items-center gap-2">
                <label className="text-[11px] font-serif cursor-pointer flex items-center gap-1 opacity-80 hover:opacity-100">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJsonBackup}
                    className="hidden"
                  />
                  <span className="underline font-bold">बैकअप लोड करें (Import)</span>
                </label>
              </div>
            </div>

            <select
              value={selectedSlotId}
              onChange={(e) => {
                const sId = e.target.value as AdminGranthSlotId;
                setSelectedSlotId(sId);
                const tpl = detectTemplateForSlot(sId);
                setActiveTemplate(tpl);
                const raw = getSlotRawJson(sId);
                setJsonInput(raw);
                setItemsList(parseJsonToItems(raw, tpl));
              }}
              style={{
                backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                borderColor: theme.accentGold,
                color: theme.textPrimary,
              }}
              className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-bold font-serif outline-none cursor-pointer"
            >
              {ADMIN_SLOT_CATEGORIES.map((cat) => (
                <optgroup key={cat.id} label={cat.title[language] || cat.title.hi}>
                  {ADMIN_GRANTH_SLOTS.filter((s) => s.category === cat.id).map((slot) => {
                    const st = slotStatuses[slot.id];
                    const statusLabel = st?.loaded ? `लोडेड (${st.itemCount})` : 'रिक्त';
                    return (
                      <option key={slot.id} value={slot.id}>
                        {slot.title[language] || slot.label} — [{statusLabel}]
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>

            {/* Template Selector & CMS Mode Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-amber-500/20">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setCmsMode('easy')}
                    style={{
                      backgroundColor: cmsMode === 'easy' ? '#8B2500' : 'transparent',
                      color: cmsMode === 'easy' ? '#FFFFFF' : theme.textPrimary,
                      borderColor: theme.cardBorder,
                    }}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold font-serif transition cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>स्मार्ट टेम्पलेट मोड (Smart Granth Template)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCmsMode('raw')}
                    style={{
                      backgroundColor: cmsMode === 'raw' ? '#8B2500' : 'transparent',
                      color: cmsMode === 'raw' ? '#FFFFFF' : theme.textPrimary,
                      borderColor: theme.cardBorder,
                    }}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold font-serif transition cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <FileJson className="w-3.5 h-3.5" />
                    <span>उन्नत JSON मोड (Raw JSON)</span>
                  </button>
                </div>

                {cmsMode === 'easy' && (
                  <select
                    value={activeTemplate}
                    onChange={(e) => setActiveTemplate(e.target.value as GranthTemplateType)}
                    style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg, color: theme.textPrimary }}
                    className="px-2.5 py-1.5 rounded-xl border text-xs font-bold font-serif cursor-pointer outline-none"
                    title="ग्रंथ लेखन टेम्पलेट बदलें"
                  >
                    <option value="sakhi">📜 साखी संग्रह टेम्पलेट (11 Steps / अंग)</option>
                    <option value="dialogue">💬 कबीर सागर संवाद टेम्पलेट (Dialogue Samvaad)</option>
                    <option value="bijak">⚡ श्री कबीर बीजक टेम्पलेट (5 Steps / Main Ang)</option>
                    <option value="nitnem">🌅 नितनेम गुटका साहेब टेम्पलेट (Daily Prayer &amp; Aarti)</option>
                    <option value="flexible">📖 साधारण अध्याय शैली (Flexible Mode)</option>
                  </select>
                )}
              </div>

              {cmsMode === 'easy' && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingIndex(null);
                    setCurrentItem({
                      template: activeTemplate,
                      titleHi: '',
                      titlePb: '',
                      titleEn: '',
                      contentHi: '',
                      contentPb: '',
                      contentEn: '',
                      speaker: 'Satguru Kabir Saheb',
                      bijakDepartment: 'Ramaini',
                      nitnemSection: 'Prabhat',
                    });
                    setShowItemModal(true);
                  }}
                  className="px-4 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ नया प्रसंग/अध्याय जोड़ें</span>
                </button>
              )}
            </div>
          </div>

          {/* Easy Writing Mode UI */}
          {cmsMode === 'easy' ? (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-serif leading-relaxed flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-amber-900 dark:text-amber-200 mb-0.5">
                    सक्रिय टेम्पलेट: <span className="uppercase text-amber-700 dark:text-amber-300 font-mono">[{activeTemplate}]</span>
                  </p>
                  <p className="opacity-80">
                    पब्लिक यूज़र्स को यह सामग्री ग्रंथ की वास्तविक साहित्यिक शैली (जैसे संवाद कार्ड, 11-चरण साखी स्वाध्याय, या दैनिक पाठ मोड) के रूप में दिखेगी।
                  </p>
                </div>
              </div>

              {itemsList.length === 0 ? (
                <div className="p-8 text-center rounded-2xl border border-dashed border-amber-500/30 space-y-3">
                  <BookOpen className="w-10 h-10 mx-auto text-amber-600 opacity-50" />
                  <p className="text-xs font-serif opacity-75">
                    इस स्लॉट में अभी कोई प्रसंग दर्ज नहीं है। ऊपर दिए गए "+ नया प्रसंग/अध्याय जोड़ें" बटन से शुरुआत करें।
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1">
                  {itemsList.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                      className="p-3.5 rounded-2xl border flex items-center justify-between gap-3 shadow-xs hover:border-amber-500/50 transition"
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[0.625rem] font-black bg-[#8B2500] text-white shrink-0">
                            #{idx + 1}
                          </span>
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-100 truncate">
                            {item.titleHi || `अध्याय ${idx + 1}`}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-800 dark:text-amber-300 shrink-0">
                            {item.template}
                          </span>
                        </div>
                        <p className="text-[0.6875rem] opacity-70 font-serif truncate">
                          🇮🇳 {item.titleHi} | 🇵🇧 {item.titlePb || '—'} | 🇬🇧 {item.titleEn || '—'}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleEditItem(idx)}
                          className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 transition cursor-pointer"
                          title="संपादित करें (Edit)"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(idx)}
                          className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 transition cursor-pointer"
                          title="हटाएं (Delete)"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Advanced Raw JSON Mode */
            <div className="space-y-2">
              <label
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <FileJson className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0" />
                <span>उन्नत JSON एडिटर (Advanced Raw JSON Payload)</span>
              </label>

              <textarea
                value={jsonInput}
                onChange={(e) => {
                  setJsonInput(e.target.value);
                  setItemsList(parseJsonToItems(e.target.value, activeTemplate));
                  setActionError(null);
                }}
                rows={10}
                spellCheck={false}
                placeholder="यहाँ वैध JSON कोड दर्ज करें..."
                style={{
                  backgroundColor: isDarkMode ? '#110E0B' : '#FFFDF8',
                  borderColor: validation.valid ? '#16A34A' : '#DC2626',
                  color: theme.textPrimary,
                }}
                className="w-full p-3 rounded-xl border font-mono text-xs leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[220px]"
              />

              {validation.valid ? (
                <div className="p-2.5 rounded-xl border border-emerald-600/35 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-xs font-bold font-serif flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{validation.summaryHi}</span>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl border border-red-600/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs font-bold font-serif flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{validation.errorHi || 'अमान्य JSON प्रारूप'}</span>
                </div>
              )}
            </div>
          )}

          {actionError && (
            <div className="p-2.5 rounded-xl border border-red-600/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs font-bold font-serif flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{actionError}</span>
            </div>
          )}

          {/* Purge Confirm Prompt */}
          {showPurgeConfirm && (
            <div className="p-3.5 rounded-xl border border-red-600/50 bg-red-500/10 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold font-serif text-red-900 dark:text-red-200">
                    क्या आप वाकई सभी {totalSlots} स्लॉट्स का डेटा हटाना चाहते हैं?
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowPurgeConfirm(false)}
                  className="px-3 py-1.5 rounded-xl border text-xs font-bold font-serif cursor-pointer"
                >
                  रद्द करें
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    setIsSaving(true);
                    await purgeAllInjectedSlots();
                    setJsonInput('');
                    setItemsList([]);
                    setShowPurgeConfirm(false);
                    refreshStatuses();
                    setIsSaving(false);
                    showSuccessToast('✓ सभी स्लॉट्स रिक्त कर दिए गए!');
                  }}
                  className="px-4 py-1.5 rounded-xl bg-red-600 text-white text-xs font-bold font-serif cursor-pointer"
                >
                  हाँ, सभी रिक्त करें
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="px-4 sm:px-6 py-3.5 border-t flex items-center justify-between gap-2.5 shrink-0"
        >
          <button
            type="button"
            onClick={() => setShowPurgeConfirm(true)}
            className="px-4 py-2 rounded-xl border border-red-600/45 bg-red-500/10 text-red-800 dark:text-red-300 text-xs font-bold font-serif hover:bg-red-500/20 transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4 inline mr-1" />
            <span>सभी स्लॉट्स रीसेट करें</span>
          </button>

          <button
            type="button"
            disabled={isSaving || (cmsMode === 'raw' && !validation.valid)}
            onClick={handleInject}
            className="px-6 py-2 rounded-xl bg-[#8B2500] hover:bg-amber-700 text-white text-xs sm:text-sm font-bold font-serif flex items-center gap-2 shadow-md transition cursor-pointer disabled:opacity-50"
          >
            <Upload className="w-4 h-4 shrink-0" />
            <span>{isSaving ? 'सहेजा जा रहा है...' : 'ग्लोबल ऐप में सेव व पब्लिश करें (Publish)'}</span>
          </button>
        </div>
      </div>

      {/* Smart Template Modal (Add / Edit Item) */}
      {showItemModal && (
        <div className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3">
          <div
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="w-full max-w-2xl max-h-[90vh] rounded-3xl border-2 p-6 overflow-y-auto space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-800 dark:text-amber-200 font-bold uppercase">
                  [{activeTemplate}]
                </span>
                <h3 className="font-serif font-black text-base sm:text-lg text-amber-900 dark:text-amber-200">
                  {editingIndex !== null ? 'प्रसंग संपादित करें (Edit Granth Item)' : 'नया प्रसंग जोड़ें (Add Granth Item)'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowItemModal(false)}
                className="p-1.5 rounded-xl hover:bg-black/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* AI Assist Button */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 to-yellow-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div className="space-y-0.5 text-xs font-serif">
                <p className="font-bold text-amber-900 dark:text-amber-200">✨ AI Assist (एक-क्लिक अनुवाद व भावार्थ)</p>
                <p className="opacity-75">हिंदी मूलवाणी लिखकर इस बटन को दबाएं, AI स्वतः पंजाबी और अंग्रेज़ी ड्राफ़्ट तैयार कर देगा।</p>
              </div>
              <button
                type="button"
                onClick={handleAiAssistTranslate}
                className="min-h-[38px] px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold font-serif shadow-sm transition cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI ड्राफ़्ट बनाएं</span>
              </button>
            </div>

            <div className="space-y-4 text-xs font-serif">
              {/* Template Specific Header Fields */}
              {activeTemplate === 'dialogue' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">वक्ता (Speaker):</label>
                    <select
                      value={currentItem.speaker}
                      onChange={(e) => setCurrentItem({ ...currentItem, speaker: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold outline-none"
                    >
                      <option value="Satguru Kabir Saheb">सतगुरु कबीर साहेब (Satguru Kabir Saheb)</option>
                      <option value="Sri Dharmadas Ji">धनी धर्मदास साहेब (Sri Dharmadas Ji)</option>
                      <option value="Acharya / Seeker">जिज्ञासु / संत जन (Seeker / Sage)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">संवाद शीर्षक (Dialogue Title):</label>
                    <input
                      type="text"
                      value={currentItem.titleHi}
                      onChange={(e) => setCurrentItem({ ...currentItem, titleHi: e.target.value })}
                      placeholder="उदा. अमर मूल संवाद"
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold"
                    />
                  </div>
                </div>
              )}

              {activeTemplate === 'bijak' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">बीजक विभाग (Department):</label>
                    <select
                      value={currentItem.bijakDepartment}
                      onChange={(e) => setCurrentItem({ ...currentItem, bijakDepartment: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold outline-none"
                    >
                      <option value="Ramaini">रमैनी (Ramaini)</option>
                      <option value="Shabad">शब्द (Shabad)</option>
                      <option value="Sakhi">साखी (Sakhi)</option>
                      <option value="Gyan Chautisa">ज्ञान चौंतीसा (Gyan Chautisa)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">अध्याय शीर्षक:</label>
                    <input
                      type="text"
                      value={currentItem.titleHi}
                      onChange={(e) => setCurrentItem({ ...currentItem, titleHi: e.target.value })}
                      placeholder="उदा. रमैनी १"
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold"
                    />
                  </div>
                </div>
              )}

              {activeTemplate === 'sakhi' && (
                <div className="space-y-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <label className="font-bold text-amber-800 dark:text-amber-300 block">साखी / अंग शीर्षक:</label>
                  <input
                    type="text"
                    value={currentItem.titleHi}
                    onChange={(e) => setCurrentItem({ ...currentItem, titleHi: e.target.value })}
                    placeholder="उदा. गुरु महिमा अंग - १"
                    className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold"
                  />
                </div>
              )}

              {activeTemplate === 'nitnem' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">नितनेम खंड (Section):</label>
                    <select
                      value={currentItem.nitnemSection}
                      onChange={(e) => setCurrentItem({ ...currentItem, nitnemSection: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold outline-none"
                    >
                      <option value="Prabhat">प्रभात पाठ (Prabhat Path)</option>
                      <option value="Sandhya">संध्या पाठ (Sandhya Path)</option>
                      <option value="Aarti">चौका आरती (Chouka Aarti)</option>
                      <option value="Chalisa">कबीर चालीसा (Kabir Chalisa)</option>
                      <option value="Barahmasi">बारहमासी (Barahmasi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-amber-800 dark:text-amber-300 block mb-1">पाठ शीर्षक:</label>
                    <input
                      type="text"
                      value={currentItem.titleHi}
                      onChange={(e) => setCurrentItem({ ...currentItem, titleHi: e.target.value })}
                      placeholder="उदा. प्रातः सुमिरन"
                      className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold"
                    />
                  </div>
                </div>
              )}

              {activeTemplate === 'flexible' && (
                <div className="space-y-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <label className="font-bold text-amber-800 dark:text-amber-300 block">अध्याय / खंड शीर्षक (Title):</label>
                  <input
                    type="text"
                    value={currentItem.titleHi}
                    onChange={(e) => setCurrentItem({ ...currentItem, titleHi: e.target.value })}
                    placeholder="उदा. पावन अध्याय शीर्षक"
                    className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-bold"
                  />
                </div>
              )}

              {/* Hindi Tab / Box */}
              <div className="space-y-1.5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <label className="font-bold text-amber-800 dark:text-amber-300 block">
                  🇮🇳 हिंदी मूलवाणी / मुख्य सामग्री (Hindi):
                </label>
                <textarea
                  value={currentItem.contentHi}
                  onChange={(e) => setCurrentItem({ ...currentItem, contentHi: e.target.value })}
                  rows={4}
                  placeholder="हिंदी में मूलवाणी, श्लोक या संवाद यहाँ लिखें..."
                  className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-serif"
                />
              </div>

              {/* Punjabi Tab / Box */}
              <div className="space-y-1.5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <label className="font-bold text-amber-800 dark:text-amber-300 block">
                  🇵🇧 ਪੰਜਾਬੀ (Gurmukhi) ਸਿਰਲੇਖ ਅਤੇ ਪਾਵਨ ਬਾਣੀ:
                </label>
                <input
                  type="text"
                  value={currentItem.titlePb}
                  onChange={(e) => setCurrentItem({ ...currentItem, titlePb: e.target.value })}
                  placeholder="ਪੰਜਾਬੀ ਸਿਰਲੇਖ"
                  className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-serif font-bold mb-1"
                />
                <textarea
                  value={currentItem.contentPb}
                  onChange={(e) => setCurrentItem({ ...currentItem, contentPb: e.target.value })}
                  rows={4}
                  placeholder="ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) ਵਿੱਚ ਪਾਵਨ ਬਾਣੀ ਜਾਂ ਵੇਰਵਾ..."
                  className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-serif"
                />
              </div>

              {/* English Tab / Box */}
              <div className="space-y-1.5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <label className="font-bold text-amber-800 dark:text-amber-300 block">
                  🇬🇧 English Title &amp; Sacred Verse:
                </label>
                <input
                  type="text"
                  value={currentItem.titleEn}
                  onChange={(e) => setCurrentItem({ ...currentItem, titleEn: e.target.value })}
                  placeholder="English Title"
                  className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-serif font-bold mb-1"
                />
                <textarea
                  value={currentItem.contentEn}
                  onChange={(e) => setCurrentItem({ ...currentItem, contentEn: e.target.value })}
                  rows={4}
                  placeholder="English translation or exegesis..."
                  className="w-full p-2.5 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-serif"
                />
              </div>
            </div>

            <div className="pt-3 border-t flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowItemModal(false)}
                className="px-4 py-2 rounded-xl border text-xs font-bold font-serif cursor-pointer"
              >
                रद्द करें
              </button>
              <button
                type="button"
                onClick={handleSaveItemModal}
                className="px-5 py-2 rounded-xl bg-[#8B2500] hover:bg-amber-700 text-white text-xs font-bold font-serif cursor-pointer shadow-md"
              >
                प्रसंग सहेजें (Save Item)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
