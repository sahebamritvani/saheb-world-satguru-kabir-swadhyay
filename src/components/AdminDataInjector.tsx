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

interface AdminDataInjectorProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  initialSlotId?: AdminGranthSlotId | null;
}

type StatusFilter = 'all' | 'loaded' | 'empty';

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
  const [jsonInput, setJsonInput] = useState<string>('');
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

  // Apply deep-linked slot selection when opened from an active view banner
  useEffect(() => {
    if (isOpen && initialSlotId) {
      setSelectedSlotId(initialSlotId);
      setSelectedCategory('all');
      setStatusFilter('all');
      setSearchQuery('');
    }
  }, [isOpen, initialSlotId]);

  // Load slot contents when modal opens or active slot changes
  useEffect(() => {
    if (!isOpen) return;
    refreshStatuses();
    const existingRaw = getSlotRawJson(selectedSlotId);
    setJsonInput(existingRaw);
    setActionError(null);
    setShowPurgeConfirm(false);
  }, [isOpen, selectedSlotId, refreshStatuses]);

  // Keep slot statuses synced if updated externally or via IndexedDB hydration
  useEffect(() => {
    const handleUpdated = () => refreshStatuses();
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleUpdated);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleUpdated);
  }, [refreshStatuses]);

  // Escape key closes modal or inline confirmation cleanly
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showPurgeConfirm) {
          setShowPurgeConfirm(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, showPurgeConfirm, onClose]);

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
        slot.description.pb,
        slot.description.en,
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
    if (!validation.valid) {
      setActionError(validation.errorHi || validation.errorEn || 'अमान्य JSON डेटा');
      return;
    }

    setIsSaving(true);
    try {
      const result = await injectSlotJson(selectedSlotId, jsonInput);
      if (!result.ok) {
        setActionError(result.errorHi || result.errorEn || 'डेटा सेव करने में त्रुटि हुई');
        return;
      }
      refreshStatuses();
      showSuccessToast(`✓ #${selectedSlotMeta.slotNumber} स्लॉट में डेटा सफलतापूर्वक इंजेक्ट हो गया!`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClearSingleSlot = async () => {
    if (!selectedSlotStatus.loaded) return;
    setIsSaving(true);
    setActionError(null);
    try {
      await purgeSingleInjectedSlot(selectedSlotId);
      setJsonInput('');
      refreshStatuses();
      showSuccessToast(`✓ स्लॉट #${selectedSlotMeta.slotNumber} सफलतापूर्वक रिक्त कर दिया गया!`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmPurge = async () => {
    setIsSaving(true);
    setActionError(null);
    try {
      await purgeAllInjectedSlots();
      setJsonInput('');
      setShowPurgeConfirm(false);
      refreshStatuses();
      showSuccessToast(`✓ सभी ${totalSlots} स्लॉट्स सफलतापूर्वक रिक्त कर दिए गए!`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoadSample = () => {
    setJsonInput(getSampleJsonForSlot(selectedSlotId));
    setActionError(null);
  };

  const handleFormatJson = () => {
    if (!validation.valid || validation.parsed === undefined) return;
    setJsonInput(JSON.stringify(validation.parsed, null, 2));
  };

  return (
    <div
      className="fixed inset-0 z-[105] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-injector-modal-title"
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
        {/* 1. Header */}
        <div
          style={{
            backgroundColor: theme.stepActiveBg,
            borderColor: theme.cardBorder,
          }}
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
                id="admin-injector-modal-title"
                style={{ color: theme.sacredMaroon }}
                className="text-sm sm:text-base font-black font-serif leading-snug truncate"
              >
                प्रशासक डेटा लेयर इंजेक्टर (All-Card Slot Injection)
              </h2>
              <p
                className="text-[11px] font-serif tabular-nums truncate flex items-center gap-1.5"
                style={{ color: theme.textSecondary }}
              >
                <span>
                  {language === 'en'
                    ? `Offline App Card Slots`
                    : language === 'pb'
                    ? `ਔਫਲਾਈਨ ਸਮੁੱਚੇ ਐਪ ਕਾਰਡ ਸਲੌਟ`
                    : `ऑफ़लाइन समस्त ऐप कार्ड स्लॉट`}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">
                  {loadedSlotsCount} / {totalSlots}{' '}
                  {language === 'en' ? 'Loaded' : language === 'pb' ? 'ਲੋਡ' : 'लोडेड'}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">
                  {emptySlotsCount}{' '}
                  {language === 'en' ? 'Empty' : language === 'pb' ? 'ਖ਼ਾਲੀ' : 'रिक्त'}
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            id="admin-injector-close-btn"
            onClick={onClose}
            style={{
              borderColor: theme.cardBorder,
              backgroundColor: theme.cardBg,
              color: theme.sacredMaroon,
            }}
            className="min-h-[44px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition cursor-pointer shrink-0 whitespace-nowrap"
          >
            <X className="w-3.5 h-3.5 shrink-0" />
            <span>बंद करें</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {/* Dynamic Info Banner */}
          <div
            style={{
              backgroundColor: isDarkMode ? 'rgba(245, 158, 11, 0.10)' : '#FFFBEB',
              borderColor: isDarkMode ? 'rgba(245, 158, 11, 0.35)' : '#F59E0B',
            }}
            className="p-3.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-[13px] font-serif leading-relaxed"
          >
            <Info className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
            <p className="text-amber-950 dark:text-amber-100">
              वर्तमान में ऐप के सभी <strong className="font-mono tabular-nums">{totalSlots}</strong> कार्ड्स (ग्रन्थालय, नितनेम, साधना, धुन, ज्ञान, जंत्री, आश्रम व टूल्स) स्वच्छ डेटा स्लॉट्स पर सेट हैं। आप स्थानीय JSON स्ट्रक्चर यहाँ पेस्ट करके किसी भी कार्ड में वास्तविक डेटा लाइव लोड कर सकते हैं:
            </p>
          </div>

          {/* Success Toast */}
          {toastMessage && (
            <div
              role="status"
              className="p-3 rounded-xl border border-emerald-600/40 bg-emerald-600/12 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-bold font-serif flex items-center gap-2 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 2. Target Slot Selector (Grouped Dropdown + Search + Category/Status Filters + Grid) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <label
                htmlFor="admin-target-slot-select"
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <span>लक्षित स्लॉट (Target App Card Slot · {totalSlots} Cards)</span>
              </label>

              {/* Live Status Indicator for Active Slot (Text + Icon, no color-only) */}
              <div
                id="admin-slot-live-status-badge"
                className={`text-xs font-bold font-serif inline-flex items-center gap-1.5 tabular-nums ${
                  selectedSlotStatus.loaded
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                {selectedSlotStatus.loaded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      डेटा लोडेड / Loaded ({selectedSlotStatus.itemCount})
                    </span>
                  </>
                ) : (
                  <span>स्थिति: रिक्त / Empty</span>
                )}
              </div>
            </div>

            {/* Category-Grouped Dropdown across All 50 Cards */}
            <select
              id="admin-target-slot-select"
              value={selectedSlotId}
              onChange={(e) => setSelectedSlotId(e.target.value as AdminGranthSlotId)}
              style={{
                backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                borderColor: theme.accentGold,
                color: theme.textPrimary,
              }}
              className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-bold font-serif outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            >
              {ADMIN_SLOT_CATEGORIES.map((cat) => (
                <optgroup key={cat.id} label={cat.title[language] || cat.title.hi}>
                  {ADMIN_GRANTH_SLOTS.filter((s) => s.category === cat.id).map((slot) => {
                    const st = slotStatuses[slot.id];
                    const statusLabel = st?.loaded
                      ? `डेटा लोडेड / Loaded (${st.itemCount})`
                      : 'रिक्त / Empty';
                    const titleText = slot.title[language] || slot.label;
                    return (
                      <option key={slot.id} value={slot.id}>
                        {titleText} — [{statusLabel}]
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <p className="text-xs font-serif" style={{ color: theme.textSecondary }}>
                {selectedSlotMeta.description[language] || selectedSlotMeta.description.hi}
              </p>
              {selectedSlotStatus.loaded && (
                <button
                  type="button"
                  onClick={handleClearSingleSlot}
                  disabled={isSaving}
                  className="text-[11px] font-bold font-serif text-red-700 dark:text-red-300 hover:underline cursor-pointer whitespace-nowrap shrink-0"
                >
                  इस स्लॉट को रिक्त करें (Clear #{selectedSlotMeta.slotNumber})
                </button>
              )}
            </div>

            {/* Search & Filters Toolbar for 50 Cards */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Search Box */}
                <div className="relative flex-1">
                  <Search
                    className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
                    style={{ color: theme.textSecondary }}
                  />
                  <input
                    id="admin-slot-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="कार्ड खोजें (जैसे: आरती, जंत्री, बीजक, #40, Ashram)..."
                    style={{
                      backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full min-h-[40px] pl-8 pr-8 py-1.5 rounded-xl border text-xs font-serif outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="खोज साफ़ करें"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Status Filter Segmented Buttons */}
                <div
                  style={{ borderColor: theme.cardBorder }}
                  className="inline-flex items-center p-1 rounded-xl border bg-black/5 dark:bg-white/5 shrink-0 self-start sm:self-auto"
                >
                  {(
                    [
                      { id: 'all', label: `सभी (${totalSlots})` },
                      { id: 'loaded', label: `लोडेड (${loadedSlotsCount})` },
                      { id: 'empty', label: `रिक्त (${emptySlotsCount})` },
                    ] as Array<{ id: StatusFilter; label: string }>
                  ).map((stBtn) => {
                    const active = statusFilter === stBtn.id;
                    return (
                      <button
                        key={stBtn.id}
                        type="button"
                        onClick={() => setStatusFilter(stBtn.id)}
                        style={{
                          backgroundColor: active ? theme.cardBg : 'transparent',
                          color: active ? theme.sacredMaroon : theme.textSecondary,
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-serif tabular-nums transition cursor-pointer whitespace-nowrap shrink-0 ${
                          active ? 'shadow-xs' : 'hover:opacity-80'
                        }`}
                      >
                        {stBtn.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  style={{
                    backgroundColor: selectedCategory === 'all' ? theme.sacredMaroon : 'transparent',
                    color: selectedCategory === 'all' ? '#FFFFFF' : theme.textPrimary,
                    borderColor: selectedCategory === 'all' ? theme.sacredMaroon : theme.cardBorder,
                  }}
                  className="min-h-[34px] px-3 py-1 rounded-lg border text-[11px] font-bold font-serif tabular-nums transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  सभी कार्ड्स ({totalSlots})
                </button>
                {ADMIN_SLOT_CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        backgroundColor: active ? theme.sacredMaroon : 'transparent',
                        color: active ? '#FFFFFF' : theme.textPrimary,
                        borderColor: active ? theme.sacredMaroon : theme.cardBorder,
                      }}
                      className="min-h-[34px] px-3 py-1 rounded-lg border text-[11px] font-bold font-serif tabular-nums transition cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {cat.shortTitle[language] || cat.shortTitle.hi} ({categoryCounts[cat.id]})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable All-Card Grid (Clean, Zero-Pill Editorial Cards) */}
            <div className="pt-0.5">
              {filteredSlots.length === 0 ? (
                <div
                  style={{ borderColor: theme.cardBorder, color: theme.textSecondary }}
                  className="p-4 rounded-xl border text-center text-xs font-serif"
                >
                  इस खोज या फ़िल्टर के अनुसार कोई कार्ड स्लॉट नहीं मिला।
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                  {filteredSlots.map((slot) => {
                    const st = slotStatuses[slot.id];
                    const isActive = slot.id === selectedSlotId;
                    const isLoaded = Boolean(st?.loaded);
                    const catMeta = ADMIN_SLOT_CATEGORIES.find((c) => c.id === slot.category);
                    const rawTitle = (slot.title[language] || slot.label).replace(/^#\d+:\s*/, '');

                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlotId(slot.id)}
                        style={{
                          backgroundColor: isActive ? theme.stepActiveBg : 'transparent',
                          borderColor: isActive ? theme.accentGold : theme.cardBorder,
                        }}
                        className="min-h-[44px] px-3 py-2 rounded-lg border text-left flex items-center justify-between gap-2 transition hover:opacity-90 cursor-pointer"
                      >
                        <div className="min-w-0 flex-1 space-y-0.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className="text-[11px] font-mono tabular-nums shrink-0 opacity-75"
                              style={{ color: theme.textSecondary }}
                            >
                              #{String(slot.slotNumber).padStart(2, '0')}
                            </span>
                            <span
                              className="text-xs font-serif font-semibold truncate"
                              style={{ color: isActive ? theme.sacredMaroon : theme.textPrimary }}
                            >
                              {rawTitle}
                            </span>
                          </div>
                          <p
                            className="text-[10px] font-serif truncate opacity-75"
                            style={{ color: theme.textSecondary }}
                          >
                            {catMeta?.shortTitle[language] || catMeta?.shortTitle.hi}
                            {' · '}
                            {slot.targetSlug}
                          </p>
                        </div>

                        <span
                          className={`text-[11px] font-semibold font-serif shrink-0 tabular-nums whitespace-nowrap ${
                            isLoaded
                              ? 'text-emerald-700 dark:text-emerald-300'
                              : 'text-stone-500 dark:text-stone-400'
                          }`}
                        >
                          {isLoaded ? `लोडेड (${st?.itemCount || 1})` : 'रिक्त'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* 3. JSON Input Area & Real-Time Validation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <label
                htmlFor="admin-json-textarea"
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <FileJson className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0" />
                <span>स्थानीय JSON डेटा (Local JSON Payload · #{selectedSlotMeta.slotNumber})</span>
              </label>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={handleLoadSample}
                  style={{ borderColor: theme.cardBorder, color: theme.sacredMaroon }}
                  className="min-h-[36px] px-3 py-1 rounded-lg border text-[11px] font-bold font-serif hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  उदाहरण भरें (Sample)
                </button>
                {validation.valid && (
                  <button
                    type="button"
                    onClick={handleFormatJson}
                    style={{ borderColor: theme.cardBorder, color: theme.sacredMaroon }}
                    className="min-h-[36px] px-3 py-1 rounded-lg border text-[11px] font-bold font-serif hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap shrink-0"
                  >
                    फ़ॉर्मैट (Pretty)
                  </button>
                )}
                {jsonInput.trim().length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setJsonInput('');
                      setActionError(null);
                    }}
                    style={{ borderColor: theme.cardBorder, color: theme.textSecondary }}
                    className="min-h-[36px] px-3 py-1 rounded-lg border text-[11px] font-bold font-serif hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer whitespace-nowrap shrink-0"
                  >
                    साफ़ करें
                  </button>
                )}
              </div>
            </div>

            <textarea
              id="admin-json-textarea"
              value={jsonInput}
              onChange={(e) => {
                setJsonInput(e.target.value);
                setActionError(null);
              }}
              rows={8}
              spellCheck={false}
              placeholder='JSON स्वरूप (उदा. { "context": "...", "original_text": "..." } अथवा [ { "title": "प्रविष्टि १", "lines": ["..."] } ])'
              style={{
                backgroundColor: isDarkMode ? '#110E0B' : '#FFFDF8',
                borderColor:
                  jsonInput.trim().length === 0
                    ? theme.cardBorder
                    : validation.valid
                    ? '#16A34A'
                    : '#DC2626',
                color: theme.textPrimary,
              }}
              className="w-full p-3 rounded-xl border font-mono text-xs sm:text-[13px] leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[175px]"
            />

            {/* Real-time validation feedback */}
            {jsonInput.trim().length > 0 && (
              <div
                className={`p-2.5 rounded-xl border text-xs font-serif flex items-start gap-2 ${
                  validation.valid
                    ? 'bg-emerald-500/10 border-emerald-600/35 text-emerald-900 dark:text-emerald-200'
                    : 'bg-red-500/10 border-red-600/40 text-red-900 dark:text-red-200'
                }`}
              >
                {validation.valid ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-bold">{validation.summaryHi}</p>
                      <p className="text-[11px] opacity-85">{validation.summaryEn}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-bold">{validation.errorHi}</p>
                      {validation.errorEn && (
                        <p className="text-[11px] font-mono opacity-85 break-all">{validation.errorEn}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {actionError && (
              <div className="p-2.5 rounded-xl border border-red-600/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs font-bold font-serif flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{actionError}</span>
              </div>
            )}
          </div>

          {/* Inline Purge Confirmation Prompt (Zero window.confirm) */}
          {showPurgeConfirm && (
            <div
              role="alertdialog"
              aria-labelledby="purge-confirm-heading"
              className="p-3.5 rounded-xl border border-red-600/50 bg-red-500/10 space-y-3"
            >
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p
                    id="purge-confirm-heading"
                    className="text-xs sm:text-sm font-bold font-serif text-red-900 dark:text-red-200"
                  >
                    क्या आप वाकई सभी {totalSlots} स्लॉट्स का डेटा हटाना चाहते हैं?
                  </p>
                  <p className="text-[11px] font-serif text-red-800/85 dark:text-red-300/85">
                    यह क्रिया localStorage व IndexedDB में सेव किए गए सभी इंजेक्टेड कार्ड व ग्रन्थ डेटा को रिक्त कर देगी।
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => setShowPurgeConfirm(false)}
                  style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
                  className="min-h-[44px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  नहीं, रद्द करें
                </button>
                <button
                  type="button"
                  id="admin-confirm-purge-btn"
                  disabled={isSaving}
                  onClick={handleConfirmPurge}
                  className="min-h-[44px] px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer disabled:opacity-60 whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                  <span>हाँ, सभी {totalSlots} स्लॉट्स रिक्त करें</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 4. Action Buttons Footer */}
        <div
          style={{
            backgroundColor: theme.stepActiveBg,
            borderColor: theme.cardBorder,
          }}
          className="px-4 sm:px-6 py-3.5 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0"
        >
          <button
            type="button"
            id="admin-purge-reset-btn"
            disabled={isSaving}
            onClick={() => setShowPurgeConfirm(true)}
            className="min-h-[44px] px-4 py-2 rounded-xl border border-red-600/45 bg-red-500/10 hover:bg-red-500/20 text-red-800 dark:text-red-300 text-xs sm:text-sm font-bold font-serif flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50 whitespace-nowrap shrink-0"
          >
            <Trash2 className="w-4 h-4 shrink-0" />
            <span>सभी स्लॉट्स रिक्त करें (Purge &amp; Reset)</span>
          </button>

          <button
            type="button"
            id="admin-inject-json-btn"
            disabled={isSaving || !validation.valid}
            onClick={handleInject}
            style={{
              backgroundColor: validation.valid ? theme.sacredMaroon : undefined,
              color: '#FFFFFF',
            }}
            className={`min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-serif flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap shrink-0 ${
              validation.valid
                ? 'hover:opacity-95 active:scale-[0.99] cursor-pointer'
                : 'bg-stone-400 dark:bg-stone-700 opacity-60 cursor-not-allowed'
            }`}
          >
            <Upload className="w-4 h-4 shrink-0" />
            <span>{isSaving ? 'इंजेक्ट हो रहा है...' : 'डेटा इंजेक्ट करें (Inject JSON)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
