import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Database,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Upload,
  FileJson,
  X,
  Search,
  Plus,
  Edit2,
  Download,
  BookOpen,
  PenLine,
  Save,
  RotateCcw,
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
import { MAJOR_GRANTH_CATEGORIES, loadAllNitnemSections } from '../data/nitnemData';
import { loadMasterGranth } from '../data/granths/masterGranthIndex';

interface AdminDataInjectorProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  initialSlotId?: AdminGranthSlotId | null;
}

type StatusFilter = 'all' | 'loaded' | 'empty';
type CmsMode = 'easy' | 'raw';

interface EasyHindiItem {
  id?: string;
  title: string;
  lines: string[];
  bhavarth?: string;
  englishTranslation?: string;
  extra?: Record<string, unknown>;
}

const BUILTIN_GRANTH_SLUGS = new Set([
  'bijak',
  'kabir-sagar',
  'shabdawali',
  'granthavali',
  'sakhi-sangrah',
]);

function extractTitleString(rawTitle: unknown, fallbackIndex: number): string {
  if (typeof rawTitle === 'string') {
    return rawTitle.trim() || `खंड ${fallbackIndex + 1}`;
  }
  if (rawTitle && typeof rawTitle === 'object' && !Array.isArray(rawTitle)) {
    const t = rawTitle as Record<string, unknown>;
    const candidate = t.hi ?? t.hindi ?? t.pb ?? t.en ?? t.original_text;
    if (typeof candidate === 'string' && candidate.trim()) {
      return candidate.trim();
    }
  }
  return `खंड ${fallbackIndex + 1}`;
}

function extractLinesArray(item: Record<string, unknown>): string[] {
  if (Array.isArray(item.lines)) {
    return item.lines
      .map((l) => (typeof l === 'string' ? l : l && typeof l === 'object' && 'hi' in (l as Record<string, unknown>) ? String((l as Record<string, unknown>).hi) : String(l ?? '')))
      .map((s) => s.trimEnd())
      .filter((s) => s.trim().length > 0);
  }
  if (typeof item.content === 'string') {
    return item.content.split('\n').filter((l) => l.trim().length > 0);
  }
  if (item.content && typeof item.content === 'object' && !Array.isArray(item.content)) {
    const c = item.content as Record<string, unknown>;
    const hiText = typeof c.hi === 'string' ? c.hi : typeof c.pb === 'string' ? c.pb : typeof c.en === 'string' ? c.en : '';
    if (hiText.trim()) {
      return hiText.split('\n').filter((l) => l.trim().length > 0);
    }
  }
  if (typeof item.moolVani === 'string' && item.moolVani.trim()) {
    return item.moolVani.split('\n').filter((l) => l.trim().length > 0);
  }
  if (Array.isArray(item.verses)) {
    const collected: string[] = [];
    for (const v of item.verses) {
      if (typeof v === 'string') {
        collected.push(...v.split('\n').filter((l) => l.trim().length > 0));
      } else if (v && typeof v === 'object') {
        const vo = v as Record<string, unknown>;
        if (Array.isArray(vo.lines)) {
          collected.push(...vo.lines.map(String).filter((l) => l.trim().length > 0));
        } else if (vo.lines && typeof vo.lines === 'object') {
          const vl = vo.lines as Record<string, unknown>;
          if (Array.isArray(vl.hi)) {
            collected.push(...vl.hi.map(String).filter((l) => l.trim().length > 0));
          }
        } else if (typeof vo.text === 'string') {
          collected.push(...vo.text.split('\n').filter((l) => l.trim().length > 0));
        }
      }
    }
    return collected;
  }
  return [];
}

function parseJsonToEasyItems(raw: string): EasyHindiItem[] {
  if (!raw.trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    let arr: unknown[] = Array.isArray(parsed) ? parsed : [parsed];
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      const obj = parsed as Record<string, unknown>;
      if (Array.isArray(obj.chapters)) arr = obj.chapters;
      else if (Array.isArray(obj.sections)) arr = obj.sections;
      else if (Array.isArray(obj.items)) arr = obj.items;
    }

    return arr
      .filter((el): el is Record<string, unknown> => Boolean(el && typeof el === 'object'))
      .map((item, idx) => {
        const title = extractTitleString(item.title ?? item.name ?? item.heading, idx);
        const lines = extractLinesArray(item);
        const bhavarthObj =
          item.bhavarth && typeof item.bhavarth === 'object' && !Array.isArray(item.bhavarth)
            ? (item.bhavarth as Record<string, unknown>)
            : null;
        const bhavarth =
          typeof item.bhavarth === 'string'
            ? item.bhavarth
            : bhavarthObj && typeof bhavarthObj.hi === 'string'
            ? bhavarthObj.hi
            : typeof item.meaning === 'string'
            ? item.meaning
            : typeof item.context === 'string'
            ? item.context
            : '';
        const englishTranslation =
          typeof item.englishTranslation === 'string'
            ? item.englishTranslation
            : typeof item.translationEn === 'string'
            ? item.translationEn
            : typeof item.translation === 'string'
            ? item.translation
            : typeof item.englishArth === 'string'
            ? item.englishArth
            : typeof item.englishBhavarth === 'string'
            ? item.englishBhavarth
            : typeof item.englishMeaning === 'string'
            ? item.englishMeaning
            : typeof item.arth === 'string'
            ? item.arth
            : bhavarthObj && typeof bhavarthObj.en === 'string' && bhavarthObj.en.trim() !== bhavarth.trim()
            ? bhavarthObj.en
            : '';
        const extra: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(item)) {
          if (
            ![
              'id',
              'title',
              'lines',
              'content',
              'moolVani',
              'bhavarth',
              'meaning',
              'context',
              'englishTranslation',
              'translationEn',
              'translation',
              'englishArth',
              'englishBhavarth',
              'englishMeaning',
              'arth',
            ].includes(k)
          ) {
            extra[k] = v;
          }
        }
        return {
          id: typeof item.id === 'string' && item.id.trim() ? item.id.trim() : undefined,
          title,
          lines,
          bhavarth: bhavarth.trim() || undefined,
          englishTranslation: englishTranslation.trim() || undefined,
          extra: Object.keys(extra).length > 0 ? extra : undefined,
        };
      });
  } catch {
    return [];
  }
}

function compileEasyItemsToJson(items: EasyHindiItem[]): string {
  const normalized = items.map((it) => {
    const cleanLines = it.lines.map((l) => l.trim()).filter(Boolean);
    return {
      ...(it.id ? { id: it.id } : {}),
      title: it.title.trim(),
      lines: cleanLines,
      ...(it.bhavarth?.trim() ? { bhavarth: it.bhavarth.trim() } : {}),
      ...(it.englishTranslation?.trim() ? { englishTranslation: it.englishTranslation.trim() } : {}),
      ...(it.extra || {}),
    };
  });
  return JSON.stringify(normalized, null, 2);
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

  // Default Mode = 'easy' (आसान हिंदी लेखन मोड)
  const [cmsMode, setCmsMode] = useState<CmsMode>('easy');
  const [jsonInput, setJsonInput] = useState<string>('');
  const [itemsList, setItemsList] = useState<EasyHindiItem[]>([]);
  const [builtinItems, setBuiltinItems] = useState<EasyHindiItem[]>([]);
  const [showBuiltinList, setShowBuiltinList] = useState<boolean>(false);

  // Direct Easy Hindi Form State
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<string | undefined>(undefined);
  const [sectionTitleInput, setSectionTitleInput] = useState<string>('');
  const [sectionLinesInput, setSectionLinesInput] = useState<string>('');
  const [sectionBhavarthInput, setSectionBhavarthInput] = useState<string>('');
  const [sectionEnglishInput, setSectionEnglishInput] = useState<string>('');

  const [slotStatuses, setSlotStatuses] = useState<Record<AdminGranthSlotId, SlotStatusInfo>>(() =>
    getAllSlotStatuses()
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [showPurgeConfirm, setShowPurgeConfirm] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const formCardRef = useRef<HTMLDivElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

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

  const selectedSlotMeta = useMemo(
    () => ADMIN_GRANTH_SLOTS.find((s) => s.id === selectedSlotId) || ADMIN_GRANTH_SLOTS[0],
    [selectedSlotId]
  );

  // Sync slot data & optional built-in preloaded items when slot changes
  useEffect(() => {
    if (!isOpen) return;
    refreshStatuses();
    const existingRaw = getSlotRawJson(selectedSlotId);
    setJsonInput(existingRaw);
    setItemsList(parseJsonToEasyItems(existingRaw));
    setEditingIndex(null);
    setEditingId(undefined);
    setSectionTitleInput('');
    setSectionLinesInput('');
    setActionError(null);
    setShowPurgeConfirm(false);
    setShowBuiltinList(false);

    let cancelled = false;
    const loadBuiltin = async () => {
      try {
        if (selectedSlotId === 'slot-1-nitnem') {
          const nitnemSecs = await loadAllNitnemSections();
          if (!cancelled) {
            setBuiltinItems(
              nitnemSecs.map((sec) => {
                const combinedBhavarth = sec.verses.map((v) => v.bhavarth?.hi?.trim()).filter(Boolean).join('\n\n');
                const combinedEnglish = sec.verses
                  .map((v) => {
                    const directEn = v.englishTranslation?.trim() || v.translationEn?.trim();
                    if (directEn) return directEn;
                    const en = v.bhavarth?.en?.trim() || '';
                    const hi = v.bhavarth?.hi?.trim() || '';
                    return en && en !== hi ? en : '';
                  })
                  .filter(Boolean)
                  .join('\n\n');
                return {
                  id: sec.id,
                  title: sec.title.hi,
                  lines: sec.verses.flatMap((v) => v.lines.hi),
                  ...(combinedBhavarth ? { bhavarth: combinedBhavarth } : {}),
                  ...(combinedEnglish ? { englishTranslation: combinedEnglish } : {}),
                };
              })
            );
          }
          return;
        }
        if (BUILTIN_GRANTH_SLUGS.has(selectedSlotMeta.targetSlug)) {
          const granth = await loadMasterGranth(selectedSlotMeta.targetSlug);
          if (!cancelled) {
            setBuiltinItems(
              granth.chapters.map((ch) => {
                const combinedBhavarth = ch.verses.map((v) => v.bhavarth?.hi?.trim()).filter(Boolean).join('\n\n');
                const combinedEnglish = ch.verses
                  .map((v) => {
                    const directEn = v.englishTranslation?.trim() || v.translationEn?.trim();
                    if (directEn) return directEn;
                    const en = v.bhavarth?.en?.trim() || '';
                    const hi = v.bhavarth?.hi?.trim() || '';
                    return en && en !== hi ? en : '';
                  })
                  .filter(Boolean)
                  .join('\n\n');
                return {
                  id: ch.id,
                  title: ch.title.hi,
                  lines: ch.verses.flatMap((v) => v.lines.hi),
                  ...(combinedBhavarth ? { bhavarth: combinedBhavarth } : {}),
                  ...(combinedEnglish ? { englishTranslation: combinedEnglish } : {}),
                };
              })
            );
          }
          return;
        }
      } catch {
        // Ignore built-in preview errors silently
      }
      if (!cancelled) {
        setBuiltinItems([]);
      }
    };
    loadBuiltin();
    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedSlotId, selectedSlotMeta.targetSlug, refreshStatuses]);

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

  if (!isOpen || !isAdmin) return null;

  const showSuccessToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const persistEasyItems = async (nextItems: EasyHindiItem[], successMsg: string) => {
    setIsSaving(true);
    setActionError(null);
    try {
      if (nextItems.length === 0) {
        await purgeSingleInjectedSlot(selectedSlotId);
        setItemsList([]);
        setJsonInput('');
        refreshStatuses();
        showSuccessToast(successMsg);
        return true;
      }

      const payload = compileEasyItemsToJson(nextItems);
      const valResult = validateAdminSlotJson(payload);
      if (!valResult.valid) {
        setActionError(valResult.errorHi || valResult.errorEn || 'अमान्य डेटा संरचना');
        return false;
      }

      const result = await injectSlotJson(selectedSlotId, payload);
      if (!result.ok) {
        setActionError(result.errorHi || result.errorEn || 'डेटा सहेजने में त्रुटि हुई');
        return false;
      }

      setItemsList(nextItems);
      setJsonInput(payload);
      refreshStatuses();
      showSuccessToast(successMsg);
      return true;
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddOrUpdateSection = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setActionError(null);

    const trimmedTitle = sectionTitleInput.trim();
    const lines = sectionLinesInput
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    const bhavarth = sectionBhavarthInput.trim();
    const englishTranslation = sectionEnglishInput.trim();

    if (!trimmedTitle) {
      setActionError('कृपया पहले "खंड/अध्याय का शीर्षक" लिखें।');
      titleInputRef.current?.focus();
      return;
    }
    if (lines.length === 0) {
      setActionError('कृपया "मुख्य वाणी/पाठ" बॉक्स में कम से कम एक पंक्ति लिखें।');
      return;
    }

    let nextItems: EasyHindiItem[];
    if (editingIndex !== null) {
      nextItems = itemsList.map((item, idx) =>
        idx === editingIndex
          ? {
              ...item,
              id: editingId || item.id,
              title: trimmedTitle,
              lines,
              bhavarth: bhavarth || undefined,
              englishTranslation: englishTranslation || undefined,
            }
          : item
      );
    } else {
      const existingByIdIdx = editingId ? itemsList.findIndex((it) => it.id === editingId) : -1;
      if (existingByIdIdx >= 0) {
        nextItems = itemsList.map((item, idx) =>
          idx === existingByIdIdx
            ? {
                ...item,
                id: editingId,
                title: trimmedTitle,
                lines,
                bhavarth: bhavarth || undefined,
                englishTranslation: englishTranslation || undefined,
              }
            : item
        );
      } else {
        nextItems = [
          ...itemsList,
          {
            ...(editingId ? { id: editingId } : {}),
            title: trimmedTitle,
            lines,
            ...(bhavarth ? { bhavarth } : {}),
            ...(englishTranslation ? { englishTranslation } : {}),
          },
        ];
      }
    }

    const ok = await persistEasyItems(
      nextItems,
      editingIndex !== null
        ? `✓ "${trimmedTitle}" सफलतापूर्वक संपादित व सहेजा गया!`
        : `✓ नया खंड "${trimmedTitle}" जोड़ा व सहेजा गया! (${nextItems.length} खंड लोडेड)`
    );

    if (ok) {
      setEditingIndex(null);
      setEditingId(undefined);
      setSectionTitleInput('');
      setSectionLinesInput('');
      setSectionBhavarthInput('');
      setSectionEnglishInput('');
    }
  };

  const handleEditLoadedItem = (idx: number) => {
    const target = itemsList[idx];
    if (!target) return;
    setEditingIndex(idx);
    setEditingId(target.id);
    setSectionTitleInput(target.title);
    setSectionLinesInput(target.lines.join('\n'));
    setSectionBhavarthInput(target.bhavarth || '');
    setSectionEnglishInput(target.englishTranslation || '');
    setActionError(null);
    formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    window.setTimeout(() => titleInputRef.current?.focus(), 120);
  };

  const handleEditBuiltinItem = (item: EasyHindiItem) => {
    const existingIdx = itemsList.findIndex(
      (it) => (item.id && it.id === item.id) || it.title.trim() === item.title.trim()
    );
    if (existingIdx >= 0) {
      handleEditLoadedItem(existingIdx);
      return;
    }
    setEditingIndex(null);
    setEditingId(item.id);
    setSectionTitleInput(item.title);
    setSectionLinesInput(item.lines.join('\n'));
    setSectionBhavarthInput(item.bhavarth || '');
    setSectionEnglishInput(item.englishTranslation || '');
    setActionError(null);
    formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    window.setTimeout(() => titleInputRef.current?.focus(), 120);
  };

  const handleDeleteLoadedItem = async (idx: number) => {
    const target = itemsList[idx];
    const nextItems = itemsList.filter((_, i) => i !== idx);
    if (editingIndex === idx) {
      setEditingIndex(null);
      setEditingId(undefined);
      setSectionTitleInput('');
      setSectionLinesInput('');
      setSectionBhavarthInput('');
      setSectionEnglishInput('');
    } else if (editingIndex !== null && editingIndex > idx) {
      setEditingIndex(editingIndex - 1);
    }
    await persistEasyItems(
      nextItems,
      target ? `🗑️ "${target.title}" हटाया गया!` : '🗑️ पाठ हटाया गया!'
    );
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingId(undefined);
    setSectionTitleInput('');
    setSectionLinesInput('');
    setSectionBhavarthInput('');
    setSectionEnglishInput('');
    setActionError(null);
  };

  const handleInject = async () => {
    setActionError(null);
    if (cmsMode === 'easy') {
      // If user typed something in the form boxes and pressed Publish directly, include it cleanly
      if (sectionTitleInput.trim() && sectionLinesInput.trim()) {
        await handleAddOrUpdateSection();
        return;
      }
      if (itemsList.length === 0) {
        await purgeSingleInjectedSlot(selectedSlotId);
        refreshStatuses();
        showSuccessToast(`✓ #${selectedSlotMeta.slotNumber} सहेजा गया (रिक्त)`);
        return;
      }
      await persistEasyItems(
        itemsList,
        `✓ #${selectedSlotMeta.slotNumber} (${selectedSlotMeta.label}) ग्लोबल ऐप में सहेजा गया!`
      );
      return;
    }

    const valResult = validateAdminSlotJson(jsonInput);
    if (!valResult.valid) {
      setActionError(valResult.errorHi || valResult.errorEn || 'अमान्य JSON डेटा संरचना');
      return;
    }

    setIsSaving(true);
    try {
      const result = await injectSlotJson(selectedSlotId, jsonInput);
      if (!result.ok) {
        setActionError(result.errorHi || result.errorEn || 'डेटा सेव करने में त्रुटि हुई');
        return;
      }
      setItemsList(parseJsonToEasyItems(jsonInput));
      refreshStatuses();
      showSuccessToast(`✓ #${selectedSlotMeta.slotNumber} (${selectedSlotMeta.label}) सफलतापूर्वक सहेजा गया!`);
    } finally {
      setIsSaving(false);
    }
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
    a.download = `saheb_world_data_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccessToast('✓ डेटा बैकअप JSON फाइल सफलतापूर्वक डाउनलोड हो गई!');
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
            } else if (Array.isArray(rawJson) || (rawJson && typeof rawJson === 'object')) {
              await injectSlotJson(sId as AdminGranthSlotId, JSON.stringify(rawJson, null, 2));
            }
          }
          refreshStatuses();
          const existingRaw = getSlotRawJson(selectedSlotId);
          setJsonInput(existingRaw);
          setItemsList(parseJsonToEasyItems(existingRaw));
          showSuccessToast('✓ डेटा बैकअप सफलतापूर्वक लोड और सिंक हो गया!');
        }
      } catch {
        setActionError('बैकअप फाइल अमान्य JSON है।');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="fixed inset-0 z-[105] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in"
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
        className="w-full max-w-4xl max-h-[94dvh] rounded-2xl border-2 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Top Header with Data Backup Download Button */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="px-3.5 sm:px-6 py-3 border-b flex flex-wrap items-center justify-between gap-2.5 shrink-0"
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
                className="text-sm sm:text-base font-black font-serif leading-snug"
              >
                प्रशासक डेटा लेयर इंजेक्टर ({totalSlots} स्लॉट्स)
              </h2>
              <p
                className="text-[11px] font-serif tabular-nums flex flex-wrap items-center gap-1.5"
                style={{ color: theme.textSecondary }}
              >
                <span>लोडेड स्लॉट्स: {loadedSlotsCount} / {totalSlots}</span>
                <span>·</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">ऑफ़लाइन IndexedDB सुरक्षित</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              id="admin-download-backup-btn"
              onClick={handleExportJsonBackup}
              className="min-h-[38px] px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-serif transition cursor-pointer flex items-center gap-1.5 shadow-xs shrink-0"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>डेटा बैकअप डाउनलोड करें</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg, color: theme.sacredMaroon }}
              className="min-h-[38px] px-3 py-1.5 rounded-xl border text-xs font-bold font-serif flex items-center gap-1 hover:opacity-90 cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>बंद करें</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 custom-scrollbar">
          {toastMessage && (
            <div className="p-3 rounded-xl border border-emerald-600/40 bg-emerald-600/12 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-bold font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {actionError && (
            <div className="p-2.5 rounded-xl border border-red-600/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs font-bold font-serif flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{actionError}</span>
            </div>
          )}

          {/* Slot Selector Card (Preserving all 58 slots) */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
            className="p-3.5 rounded-2xl border space-y-2.5"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <label
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>ग्रंथ / कार्ड स्लॉट चुनें (सभी {totalSlots} स्लॉट्स):</span>
              </label>

              <label className="text-[11px] font-serif cursor-pointer flex items-center gap-1 text-amber-800 dark:text-amber-300 hover:underline font-bold">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJsonBackup}
                  className="hidden"
                />
                <Upload className="w-3 h-3" />
                <span>पुराना बैकअप अपलोड करें (Import)</span>
              </label>
            </div>

            {/* Compact Search & Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <div className="sm:col-span-5 relative">
                <Search className="w-3.5 h-3.5 opacity-50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="स्लॉट खोजें (उदा. नितनेम, बीजक, #5)..."
                  style={{
                    backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl border text-xs font-serif outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as 'all' | AdminSlotCategoryId)}
                style={{
                  backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="sm:col-span-4 px-2.5 py-1.5 rounded-xl border text-xs font-serif font-bold outline-none cursor-pointer"
              >
                <option value="all">सभी श्रेणियाँ ({totalSlots})</option>
                {ADMIN_SLOT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title[language] || cat.title.hi}
                  </option>
                ))}
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                style={{
                  backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="sm:col-span-3 px-2.5 py-1.5 rounded-xl border text-xs font-serif font-bold outline-none cursor-pointer"
              >
                <option value="all">सभी स्थिति</option>
                <option value="loaded">लोडेड ({loadedSlotsCount})</option>
                <option value="empty">रिक्त ({totalSlots - loadedSlotsCount})</option>
              </select>
            </div>

            <select
              value={selectedSlotId}
              onChange={(e) => setSelectedSlotId(e.target.value as AdminGranthSlotId)}
              style={{
                backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                borderColor: theme.accentGold,
                color: theme.textPrimary,
              }}
              className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-bold font-serif outline-none cursor-pointer"
            >
              {ADMIN_SLOT_CATEGORIES.map((cat) => {
                const catSlots = filteredSlots.filter((s) => s.category === cat.id);
                if (catSlots.length === 0) return null;
                return (
                  <optgroup key={cat.id} label={cat.title[language] || cat.title.hi}>
                    {catSlots.map((slot) => {
                      const st = slotStatuses[slot.id];
                      const statusLabel = st?.loaded ? `✓ ${st.itemCount} खंड लोडेड` : 'रिक्त';
                      return (
                        <option key={slot.id} value={slot.id}>
                          {slot.title[language] || slot.label} — [{statusLabel}]
                        </option>
                      );
                    })}
                  </optgroup>
                );
              })}
            </select>

            <p className="text-[11px] font-serif opacity-80 leading-relaxed">
              {selectedSlotMeta.description[language] || selectedSlotMeta.description.hi}
            </p>
          </div>

          {/* Mode Toggle Tabs: Default = आसान हिंदी लेखन मोड */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                id="admin-mode-easy-btn"
                onClick={() => setCmsMode('easy')}
                style={{
                  backgroundColor: cmsMode === 'easy' ? '#8B2500' : 'transparent',
                  color: cmsMode === 'easy' ? '#FFFFFF' : theme.textPrimary,
                  borderColor: cmsMode === 'easy' ? '#8B2500' : theme.cardBorder,
                }}
                className="min-h-[38px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>आसान हिंदी लेखन मोड</span>
              </button>

              <button
                type="button"
                id="admin-mode-json-btn"
                onClick={() => {
                  if (cmsMode === 'easy' && itemsList.length > 0) {
                    setJsonInput(compileEasyItemsToJson(itemsList));
                  }
                  setCmsMode('raw');
                }}
                style={{
                  backgroundColor: cmsMode === 'raw' ? '#8B2500' : 'transparent',
                  color: cmsMode === 'raw' ? '#FFFFFF' : theme.textPrimary,
                  borderColor: cmsMode === 'raw' ? '#8B2500' : theme.cardBorder,
                }}
                className="min-h-[38px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <FileJson className="w-3.5 h-3.5" />
                <span>JSON कोड मोड (उन्नत)</span>
              </button>
            </div>

            {cmsMode === 'raw' && (
              <button
                type="button"
                onClick={() => {
                  const sample = getSampleJsonForSlot(selectedSlotId);
                  setJsonInput(sample);
                  setItemsList(parseJsonToEasyItems(sample));
                }}
                className="text-xs font-serif font-bold text-amber-700 dark:text-amber-300 underline cursor-pointer"
              >
                उदाहरण JSON भरें
              </button>
            )}
          </div>

          {cmsMode === 'easy' ? (
            <div className="space-y-4">
              {/* Direct Easy Hindi Form Card */}
              <form
                ref={formCardRef as any}
                onSubmit={handleAddOrUpdateSection}
                style={{
                  backgroundColor: isDarkMode ? 'rgba(217, 119, 6, 0.08)' : 'rgba(255, 251, 235, 0.9)',
                  borderColor: theme.accentGold,
                }}
                className="p-4 rounded-2xl border-2 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3
                    style={{ color: theme.sacredMaroon }}
                    className="text-sm font-black font-serif flex items-center gap-1.5"
                  >
                    <PenLine className="w-4 h-4" />
                    <span>
                      {editingIndex !== null
                        ? `खंड #${editingIndex + 1} संपादित करें (मात्रा / पाठ सुधार)`
                        : editingId
                        ? 'चयनित पाठ संपादित करें (मात्रा सुधार)'
                        : 'नया खंड / पाठ लिखें (आसान हिंदी फॉर्म)'}
                    </span>
                  </h3>

                  {(editingIndex !== null || editingId) && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-2.5 py-1 rounded-lg border border-stone-400/50 text-xs font-bold font-serif hover:bg-black/5 cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>नया लिखें / रद्द करें</span>
                    </button>
                  )}
                </div>

                {/* Quick 7-Section Chips for Nitnem Gutka Saheb */}
                {selectedSlotId === 'slot-1-nitnem' && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold font-serif text-amber-900 dark:text-amber-200">
                      नितनेम गुटका साहेब के ७ खंड (किसी पर भी क्लिक कर शीर्षक चुनें):
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {MAJOR_GRANTH_CATEGORIES.map((cat) => {
                        const isSelectedChip = sectionTitleInput.trim() === cat.title.hi.trim();
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setSectionTitleInput(cat.title.hi);
                              titleInputRef.current?.focus();
                            }}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-serif border transition cursor-pointer ${
                              isSelectedChip
                                ? 'bg-[#8B2500] text-white border-[#8B2500]'
                                : 'bg-white/80 dark:bg-zinc-900 border-amber-500/40 hover:bg-amber-500/15'
                            }`}
                          >
                            {cat.title.hi}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label
                    htmlFor="easy-section-title"
                    className="block text-xs font-bold font-serif text-amber-950 dark:text-amber-200"
                  >
                    खंड/अध्याय का शीर्षक *
                  </label>
                  <input
                    ref={titleInputRef}
                    id="easy-section-title"
                    type="text"
                    value={sectionTitleInput}
                    onChange={(e) => setSectionTitleInput(e.target.value)}
                    placeholder={
                      selectedSlotId === 'slot-1-nitnem'
                        ? 'उदा. १. प्रभात (प्रातः) पाठ'
                        : 'उदा. गुरु को अंग / अध्याय १'
                    }
                    style={{
                      backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full min-h-[42px] px-3 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="easy-section-lines"
                    className="block text-xs font-bold font-serif text-amber-950 dark:text-amber-200"
                  >
                    मुख्य वाणी/पाठ * <span className="font-normal opacity-75">(हर नई लाइन अपने आप अलग पंक्ति बनेगी)</span>
                  </label>
                  <textarea
                    id="easy-section-lines"
                    rows={6}
                    value={sectionLinesInput}
                    onChange={(e) => setSectionLinesInput(e.target.value)}
                    placeholder={'यहाँ पावन वाणी, साखी या पाठ हिंदी में लिखें...\n(प्रत्येक दोहा या चौपाई नई पंक्ति में लिखें)'}
                    style={{
                      backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full p-3 rounded-xl border text-xs sm:text-sm font-serif leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[140px]"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="easy-section-bhavarth"
                    className="block text-xs font-bold font-serif text-amber-950 dark:text-amber-200"
                  >
                    सरल भावार्थ एवं जीवन संदेश <span className="font-normal opacity-75">(Renders inside the Bhavarth card)</span>
                  </label>
                  <textarea
                    id="easy-section-bhavarth"
                    rows={3}
                    value={sectionBhavarthInput}
                    onChange={(e) => setSectionBhavarthInput(e.target.value)}
                    placeholder={'यहाँ इस खंड या दोहे का सरल भावार्थ/जीवन संदेश लिखें...'}
                    style={{
                      backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full p-3 rounded-xl border text-xs sm:text-sm font-serif leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[90px]"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="easy-section-english"
                    className="block text-xs font-bold font-serif text-amber-950 dark:text-amber-200"
                  >
                    English Translation & Meaning <span className="font-normal opacity-75">(Renders in English Translation box)</span>
                  </label>
                  <textarea
                    id="easy-section-english"
                    rows={2}
                    value={sectionEnglishInput}
                    onChange={(e) => setSectionEnglishInput(e.target.value)}
                    placeholder={'Enter English translation or summary here (never repeats raw Hindi text if left empty)...'}
                    style={{
                      backgroundColor: isDarkMode ? '#14110E' : '#FFFFFF',
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full p-3 rounded-xl border text-xs sm:text-sm font-serif leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[70px]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="min-h-[42px] px-5 py-2 rounded-xl bg-[#8B2500] hover:bg-amber-700 text-white text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5 shadow-sm transition cursor-pointer disabled:opacity-50"
                  >
                    {editingIndex !== null || editingId ? (
                      <>
                        <Save className="w-4 h-4 shrink-0" />
                        <span>{isSaving ? 'सहेजा जा रहा है...' : 'बदलाव सहेजें'}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 shrink-0" />
                        <span>{isSaving ? 'जोड़ा जा रहा है...' : '+ नया खंड जोड़ें'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Saved / Loaded Items List with explicit Edit & Delete buttons */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4
                    style={{ color: theme.sacredMaroon }}
                    className="text-xs sm:text-sm font-black font-serif"
                  >
                    इस स्लॉट में सहेजे गए पाठ ({itemsList.length})
                  </h4>

                  {builtinItems.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowBuiltinList((prev) => !prev)}
                      className="px-3 py-1 rounded-lg border border-amber-600/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-[11px] font-bold font-serif cursor-pointer transition"
                    >
                      {showBuiltinList
                        ? 'मूल पाठ सूची छुपाएं'
                        : `पहले से लोड मूल पाठ देखें (${builtinItems.length}) — मात्रा सुधार हेतु`}
                    </button>
                  )}
                </div>

                {itemsList.length === 0 ? (
                  <div className="p-6 text-center rounded-2xl border border-dashed border-amber-500/35 space-y-2">
                    <BookOpen className="w-8 h-8 mx-auto text-amber-600 opacity-60" />
                    <p className="text-xs font-serif opacity-80">
                      इस स्लॉट में अभी कोई नया/संपादित पाठ सहेजा नहीं गया है। ऊपर दिए गए बॉक्स में <b>"खंड/अध्याय का शीर्षक"</b> और <b>"मुख्य वाणी/पाठ"</b> लिखकर <b>"+ नया खंड जोड़ें"</b> दबाएं।
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {itemsList.map((item, idx) => (
                      <div
                        key={item.id || `${item.title}-${idx}`}
                        style={{
                          backgroundColor: editingIndex === idx ? (isDarkMode ? '#241B12' : '#FFFBEB') : theme.cardBg,
                          borderColor: editingIndex === idx ? theme.accentGold : theme.cardBorder,
                        }}
                        className="p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs transition"
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-[#8B2500] text-white shrink-0">
                              #{idx + 1}
                            </span>
                            <h5 className="font-serif font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-100">
                              {item.title}
                            </h5>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 shrink-0">
                              {item.lines.length} पंक्तियाँ
                            </span>
                          </div>
                          {item.lines.length > 0 && (
                            <p className="text-xs font-serif opacity-80 line-clamp-2 leading-relaxed">
                              {item.lines.slice(0, 2).join(' · ')}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleEditLoadedItem(idx)}
                            className="min-h-[36px] px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-600/35 text-amber-950 dark:text-amber-200 text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>✏️ संपादित करें</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteLoadedItem(idx)}
                            disabled={isSaving}
                            className="min-h-[36px] px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-600/30 text-red-700 dark:text-red-300 text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>🗑️ हटाएं</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Built-in Preloaded Chapters List (for fixing matras on pre-loaded texts) */}
                {showBuiltinList && builtinItems.length > 0 && (
                  <div className="p-3.5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-2.5">
                    <p className="text-xs font-bold font-serif text-amber-900 dark:text-amber-200">
                      ऐप में पहले से लोड मूल पाठ — किसी भी पाठ पर "✏️ संपादित करें" दबाकर उसकी मात्राएं सुधारें:
                    </p>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                      {builtinItems.map((bItem, bIdx) => (
                        <div
                          key={bItem.id || bIdx}
                          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                          className="p-2.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold font-serif truncate">{bItem.title}</p>
                            <p className="text-[11px] font-serif opacity-75 truncate">
                              {bItem.lines.length > 0
                                ? bItem.lines.slice(0, 2).join(' · ')
                                : 'अभी पाठ रिक्त है — जोड़ने हेतु संपादित करें'}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleEditBuiltinItem(bItem)}
                            className="min-h-[34px] px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-600/35 text-amber-950 dark:text-amber-200 text-xs font-bold font-serif flex items-center gap-1 shrink-0 cursor-pointer"
                          >
                            <Edit2 className="w-3 h-3" />
                            <span>✏️ संपादित करें</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Secondary Advanced JSON Mode preserving [ { "title": "...", "lines": ["..."] } ] */
            <div className="space-y-2">
              <label
                style={{ color: theme.sacredMaroon }}
                className="text-xs sm:text-sm font-bold font-serif flex items-center gap-1.5"
              >
                <FileJson className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0" />
                <span>JSON कोड मोड — संरचना: [ &#123; "title": "...", "lines": ["..."] &#125; ]</span>
              </label>

              <textarea
                value={jsonInput}
                onChange={(e) => {
                  setJsonInput(e.target.value);
                  setItemsList(parseJsonToEasyItems(e.target.value));
                  setActionError(null);
                }}
                rows={11}
                spellCheck={false}
                placeholder={'[\n  {\n    "title": "१. प्रभात (प्रातः) पाठ",\n    "lines": ["साहेब बंदगी साहेब", "सत्यनाम सिमरन"]\n  }\n]'}
                style={{
                  backgroundColor: isDarkMode ? '#110E0B' : '#FFFDF8',
                  borderColor: !jsonInput.trim() || validation.valid ? '#16A34A' : '#DC2626',
                  color: theme.textPrimary,
                }}
                className="w-full p-3 rounded-xl border font-mono text-xs leading-relaxed outline-none focus:ring-2 focus:ring-amber-500/40 resize-y min-h-[220px]"
              />

              {jsonInput.trim() && (
                validation.valid ? (
                  <div className="p-2.5 rounded-xl border border-emerald-600/35 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-xs font-bold font-serif flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{validation.summaryHi}</span>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-xl border border-red-600/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs font-bold font-serif flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{validation.errorHi || 'अमान्य JSON प्रारूप'}</span>
                  </div>
                )
              )}
            </div>
          )}

          {/* Purge Confirm Prompt */}
          {showPurgeConfirm && (
            <div className="p-3.5 rounded-xl border border-red-600/50 bg-red-500/10 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-bold font-serif text-red-900 dark:text-red-200">
                  क्या आप वाकई सभी {totalSlots} स्लॉट्स का कस्टम डेटा हटाना चाहते हैं? (मूल अंतर्निहित ग्रंथ सुरक्षित रहेंगे)
                </p>
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
          className="px-3.5 sm:px-6 py-3 border-t flex flex-wrap items-center justify-between gap-2.5 shrink-0"
        >
          <button
            type="button"
            onClick={() => setShowPurgeConfirm(true)}
            className="min-h-[38px] px-3.5 py-1.5 rounded-xl border border-red-600/45 bg-red-500/10 text-red-800 dark:text-red-300 text-xs font-bold font-serif hover:bg-red-500/20 transition cursor-pointer flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5 shrink-0" />
            <span>सभी स्लॉट्स रीसेट करें</span>
          </button>

          <button
            type="button"
            disabled={isSaving || (cmsMode === 'raw' && Boolean(jsonInput.trim()) && !validation.valid)}
            onClick={handleInject}
            className="min-h-[40px] px-5 py-2 rounded-xl bg-[#8B2500] hover:bg-amber-700 text-white text-xs sm:text-sm font-bold font-serif flex items-center gap-2 shadow-md transition cursor-pointer disabled:opacity-50"
          >
            <Save className="w-4 h-4 shrink-0" />
            <span>{isSaving ? 'सहेजा जा रहा है...' : 'ऐप में सेव व लागू करें'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
