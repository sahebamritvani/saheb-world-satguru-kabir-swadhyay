import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2,
  Music,
  Target,
  Glasses,
  Scroll,
  Heart,
  Copy,
  Sliders,
  CheckCircle2,
  PlusCircle,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Feather,
  Play,
  Pause,
  RotateCcw,
  Wind,
  Layers,
  FileText,
  Compass,
  X,
  ChevronsUp,
  ChevronsDown,
  Settings,
  ArrowLeft,
  Palette,
  Bookmark,
  BookmarkCheck,
  Disc,
  Highlighter,
  Languages,
  Type,
  Pin,
  Flower2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SACRED_BRANDING, ReaderCustomTheme, ReaderFontSize, ReaderTarget, NitnemSection, NitnemVersePair } from '../types';
import {
  NITNEM_SECTION_STUBS,
  MAJOR_GRANTH_CATEGORIES,
  MajorGranthCategory,
  loadNitnemCategorySections,
  loadAllNitnemSections,
  loadNitnemSectionById,
} from '../data/nitnemData';
import { ADMIN_SLOTS_UPDATED_EVENT } from '../services/adminSlotInjectorStore';
import { SacredLoader } from './SacredLoader';
import { 
  MASTER_NITNEM_INDEX, 
  TRADITIONAL_GUTKA_OUTLINES,
  NitnemOutlineChapter,
  getSmartNitnemRecommendation,
  SmartNitnemRecommendation,
  getLocalizedBookTitle, 
  getLocalizedChapterTitle, 
  getLocalizedSubChapterTitle, 
  resolveNitnemSectionId,
  GranthSuchiSection,
  SubChapterIndexItem
} from '../data/nitnemMasterIndex';
import { triggerSacredFlowerShower } from '../services/flowerShower';
import {
  getHaziriState,
  isTodayNitnemDone,
  markNitnemSadhanaDone,
  subscribeToHaziri,
  SADHANA_GOAL_EVENT,
  HaziriState,
} from '../services/haziriStore';
import { HaziriModal } from './HaziriModal';
import { translations, getVerseTypeLabel } from '../data/translations';
import { sacredHaptics } from '../services/haptics';
import { useAppTheme, FONT_STYLE_OPTIONS } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { speechReciter, ambientReaderAudio, DhunSoundType } from '../services/audioDhun';
import { AmbientSoundPlayer } from './AmbientSoundPlayer';
import { PothiFlipBook, PothiPageData } from './PothiFlipBook';
import { ReadingModeSelector } from './ReadingModeSelector';
import { useAutoScroll } from '../hooks/useAutoScroll';
import { JaapMalaCounter } from './JaapMalaCounter';
import { SandhukkariGlossaryModal } from './SandhukkariGlossaryModal';
import { SacredMaryadaModal } from './SacredMaryadaModal';
import { ShabadShareModal } from './ShabadShareModal';
import { AcharyaParamparaModal } from './AcharyaParamparaModal';
import { ChoukaAartiVidhiModal } from './ChoukaAartiVidhiModal';
import { DamakhedaRouteModal } from './DamakhedaRouteModal';
import { BackupRestoreModal } from './BackupRestoreModal';
import { TextCorrectionModal } from './TextCorrectionModal';
import { 
  getVerseSteekCommentary, 
  tokenizeVerseLine, 
  VerseSteekCommentary 
} from '../services/kabirSteekEngine';
import { 
  SANDHUKKARI_GLOSSARY, 
  SandhukkariTerm,
  userHighlightService,
  HighlightColor
} from '../services/sandhukkariGlossary';
import { SmartGlossaryTooltip } from './SmartGlossaryTooltip';
import { SmartGlossaryText } from './SmartGlossaryText';

interface NitnemGutkaReaderProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onClose?: () => void;
  onOpenSettings?: () => void;
}

const READER_LOCAL_T: Record<Language, {
  headerTitle: string;
  headerSubtitle: string;
  continuousPath: string;
  pageFlip: string;
  autoScroll: string;
  pause: string;
  speed: string;
  shvasChakra: string;
  ekagrataManan: string;
  shvasChakraDesc: string;
  shvasIn: string;
  shvasHold: string;
  shvasOut: string;
  shvasCalm: string;
  bgDhun: string;
  dhunStop: string;
  tanpura: string;
  flute: string;
  satyanaamResonance: string;
  calmRiver: string;
  showExplanation: string;
  hideBhavarth: string;
  pathProgress: string;
  pad: string;
  targetAchieved: string;
  granthListSelect: string;
  paathAvailable: string;
  prevPage: string;
  nextPage: string;
  prevPath: string;
  nextPath: string;
  estimatedTime: string;
  minute: string;
  textSwaroop: string;
}> = {
  hi: {
    headerTitle: 'नितनेम गुटका साहेब',
    headerSubtitle: 'सतगुरु कबीर साहेब नित्य पाठ, स्तुति, आरती एवं ग्रन्थ संग्रह',
    continuousPath: 'निरंतर प्रवाह पाठ',
    pageFlip: '📖 ३D पोथी पठन (3D Pothi)',
    autoScroll: 'स्वतः स्क्रॉल',
    pause: 'विराम',
    speed: 'गति:',
    shvasChakra: 'दिव्य श्वास चक्र',
    ekagrataManan: 'एकाग्रता मनन',
    shvasChakraDesc: 'वाणियों पर एकाग्र होकर श्वास-श्वास सुमिरन का आनंद लें। चक्र के अनुसार श्वास भरें, रोकें व छोड़ें।',
    shvasIn: '🌬️ श्वास भरें',
    shvasHold: '🧘 श्वास रोकें',
    shvasOut: '💨 श्वास छोड़ें',
    shvasCalm: '✨ शांत स्थिर',
    bgDhun: 'पृष्ठभूमि धुन',
    dhunStop: 'धुन बंद',
    tanpura: 'तानपूरा',
    flute: 'बाँसुरी',
    satyanaamResonance: 'सत्यनाम अनुनाद',
    calmRiver: 'शांत सरिता',
    showExplanation: 'व्याख्या देखें',
    hideBhavarth: 'भावार्थ छिपाएं',
    pathProgress: 'पाठ प्रगति:',
    pad: 'पद',
    targetAchieved: 'लक्ष्य पूर्ण!',
    granthListSelect: 'ग्रन्थ-सूची खण्ड चयन:',
    paathAvailable: 'पाठ उपलब्ध',
    prevPage: 'पिछला पन्ना',
    nextPage: 'अगला पन्ना',
    prevPath: 'पिछला पाठ',
    nextPath: 'अगला पाठ',
    estimatedTime: 'समय:',
    minute: 'मिनट',
    textSwaroop: 'पाठ'
  },
  pb: {
    headerTitle: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ',
    headerSubtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿੱਤ ਪਾਠ, ਅਸਤੁਤੀ, ਆਰਤੀ ਅਤੇ ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ',
    continuousPath: 'ਨਿਰੰਤਰ ਪਾਠ (Scroll)',
    pageFlip: '📖 3D ਪੋਥੀ ਪਾਠ (3D Pothi)',
    autoScroll: 'ਸਵੈ-ਚਾਲਿਤ ਸਕ੍ਰੌਲ',
    pause: 'ਵਿਰਾਮ',
    speed: 'ਗਤੀ:',
    shvasChakra: 'ਦਿਵਯ ਸੁਆਸ ਚੱਕਰ',
    ekagrataManan: 'ਇਕਾਗਰਤਾ ਮਨਨ',
    shvasChakraDesc: 'ਬਾਣੀਆਂ ਤੇ ਇਕਾਗਰ ਹੋ ਕੇ ਸੁਆਸ-ਸੁਆਸ ਸਿਮਰਨ ਦਾ ਆਨੰਦ ਲਓ। ਚੱਕਰ ਅਨੁਸਾਰ ਸੁਆਸ ਭਰੋ, ਰੋਕੋ ਤੇ ਛੱਡੋ।',
    shvasIn: '🌬️ ਸੁਆਸ ਭਰੋ',
    shvasHold: '🧘 ਸੁਆਸ ਰੋਕੋ',
    shvasOut: '💨 ਸੁਆਸ ਛੱਡੋ',
    shvasCalm: '✨ ਸ਼ਾਂਤ ਸਥਿਰ',
    bgDhun: 'ਪਿਛੋਕੜ ਧੁਨੀ',
    dhunStop: 'ਧੁਨੀ ਬੰਦ',
    tanpura: 'ਤਾਨਪੁਰਾ',
    flute: 'ਬੰਸਰੀ',
    satyanaamResonance: 'ਸਤਯਨਾਮ ਅਨੁਨਾਦ',
    calmRiver: 'ਸ਼ਾਂਤ ਸਰਿਤਾ',
    showExplanation: 'ਵਿਆਖਿਆ ਵੇਖੋ',
    hideBhavarth: 'ਭਾਵਾਰਥ ਛੁਪਾਓ',
    pathProgress: 'ਪਾਠ ਪ੍ਰਗਤੀ:',
    pad: 'ਪਦ',
    targetAchieved: 'ਟੀਚਾ ਪੂਰਾ ਹੋਇਆ!',
    granthListSelect: 'ਗ੍ਰੰਥ-ਸੂਚੀ ਖੰਡ ਚੋਣ:',
    paathAvailable: 'ਪਾਠ ਉਪਲਬਧ',
    prevPage: 'ਪਿਛਲਾ ਪੰਨਾ',
    nextPage: 'ਅਗਲਾ ਪੰਨਾ',
    prevPath: 'ਪਿਛਲਾ ਪਾਠ',
    nextPath: 'ਅਗਲਾ ਪਾਠ',
    estimatedTime: 'ਸਮਾਂ:',
    minute: 'ਮਿੰਟ',
    textSwaroop: 'ਪਾਠ'
  },
  en: {
    headerTitle: 'Nitnem Gutka Saheb',
    headerSubtitle: 'Daily Recitations, Prayers, Hymns & Scriptures',
    continuousPath: 'Continuous Scroll',
    pageFlip: 'Page Flip (Panna)',
    autoScroll: 'Auto Scroll',
    pause: 'Pause',
    speed: 'Speed:',
    shvasChakra: 'Divine Breath Cycle',
    ekagrataManan: 'Focus Contemplation',
    shvasChakraDesc: 'Contemplate on the sacred verses with rhythmic breathing. Inhale, hold, and exhale.',
    shvasIn: '🌬️ Inhale',
    shvasHold: '🧘 Hold Breath',
    shvasOut: '💨 Exhale',
    shvasCalm: '✨ Calm & Still',
    bgDhun: 'Background Dhun',
    dhunStop: 'Stop Dhun',
    tanpura: 'Tanpura',
    flute: 'Flute',
    satyanaamResonance: 'Satyanaam Resonance',
    calmRiver: 'Gentle River',
    showExplanation: 'Show Explanation',
    hideBhavarth: 'Hide Meaning',
    pathProgress: 'Progress:',
    pad: 'verses',
    targetAchieved: 'Goal Achieved!',
    granthListSelect: 'Select Scripture Section:',
    paathAvailable: 'recitations available',
    prevPage: 'Previous Page',
    nextPage: 'Next Page',
    prevPath: 'Previous Prayer',
    nextPath: 'Next Prayer',
    estimatedTime: 'Time:',
    minute: 'mins',
    textSwaroop: 'recitations'
  }
};

/**
 * Hook that persists the current scroll position and verse index to localStorage
 * when the user navigates away, and restores it automatically when they return.
 */
export function useNitnemScrollPersistence({
  sectionId,
  viewMode,
  activeVerseIndex,
  versesListLength,
  smoothScrollRef,
  onRestorePosition
}: {
  sectionId: string;
  viewMode: 'selection' | 'reading';
  activeVerseIndex: number;
  versesListLength: number;
  smoothScrollRef: React.RefObject<HTMLDivElement | null>;
  onRestorePosition?: (verseIdx: number, scrollTop: number) => void;
}) {
  const isRestoredRef = useRef<Record<string, boolean>>({});

  // Save current scroll position & verse index to localStorage
  useEffect(() => {
    if (viewMode !== 'reading' || !sectionId) return;

    const saveScrollState = () => {
      try {
        const container = smoothScrollRef.current;
        const rootEl = document.getElementById('root');
        const currentScrollTop = (container ? container.scrollTop : 0) || (rootEl ? rootEl.scrollTop : 0) || window.scrollY || window.pageYOffset || 0;

        const storedRaw = localStorage.getItem('sahebworld_nitnem_scroll_position');
        const stored = storedRaw ? JSON.parse(storedRaw) : {};

        stored[sectionId] = {
          verseIndex: activeVerseIndex,
          scrollTop: Math.round(currentScrollTop),
          timestamp: Date.now()
        };
        stored._activeSectionId = sectionId;

        localStorage.setItem('sahebworld_nitnem_scroll_position', JSON.stringify(stored));
      } catch (e) {
        console.error('Error saving nitnem scroll position:', e);
      }
    };

    const debounceTimer = setTimeout(saveScrollState, 200);
    return () => clearTimeout(debounceTimer);
  }, [sectionId, viewMode, activeVerseIndex, smoothScrollRef]);

  // Persist on navigation away / unmount / beforeunload
  useEffect(() => {
    const handleSaveOnExit = () => {
      if (viewMode !== 'reading' || !sectionId) return;
      try {
        const container = smoothScrollRef.current;
        const rootEl = document.getElementById('root');
        const currentScrollTop = (container ? container.scrollTop : 0) || (rootEl ? rootEl.scrollTop : 0) || window.scrollY || window.pageYOffset || 0;

        const storedRaw = localStorage.getItem('sahebworld_nitnem_scroll_position');
        const stored = storedRaw ? JSON.parse(storedRaw) : {};

        stored[sectionId] = {
          verseIndex: activeVerseIndex,
          scrollTop: Math.round(currentScrollTop),
          timestamp: Date.now()
        };
        stored._activeSectionId = sectionId;

        localStorage.setItem('sahebworld_nitnem_scroll_position', JSON.stringify(stored));
      } catch {}
    };

    window.addEventListener('beforeunload', handleSaveOnExit);
    window.addEventListener('pagehide', handleSaveOnExit);
    return () => {
      handleSaveOnExit();
      window.removeEventListener('beforeunload', handleSaveOnExit);
      window.removeEventListener('pagehide', handleSaveOnExit);
    };
  }, [sectionId, viewMode, activeVerseIndex, smoothScrollRef]);

  // Restore scroll position when user returns to reading view
  useEffect(() => {
    if (viewMode !== 'reading' || !sectionId) return;
    if (isRestoredRef.current[sectionId]) return;

    try {
      const storedRaw = localStorage.getItem('sahebworld_nitnem_scroll_position');
      if (!storedRaw) return;
      const stored = JSON.parse(storedRaw);
      const sectionState = stored[sectionId];

      if (sectionState && typeof sectionState.verseIndex === 'number' && sectionState.verseIndex > 0 && sectionState.verseIndex < versesListLength) {
        isRestoredRef.current[sectionId] = true;
        const timer = setTimeout(() => {
          if (onRestorePosition) {
            onRestorePosition(sectionState.verseIndex, sectionState.scrollTop || 0);
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error('Error restoring nitnem scroll position:', e);
    }
  }, [sectionId, viewMode, versesListLength, onRestorePosition]);
}

export const NitnemGutkaReader: React.FC<NitnemGutkaReaderProps> = ({
  language: propLanguage,
  onSelectLanguage,
  onClose,
  onOpenSettings
}) => {
  const { theme, themeMode, setThemeMode, isDarkMode, globalWallpaper, fontSize, setFontSize, lineHeight, setLineHeight, widthMode, setWidthMode, fontFamily, fontStyle, setFontStyle } = useAppTheme();
  const { language: contextLang, t: contextT } = useLanguage();
  const language = propLanguage || contextLang;
  const lang = language;
  const t = translations[lang] || contextT;
  const rt = READER_LOCAL_T[lang] || READER_LOCAL_T.hi;

  // Selected Category filter & Selected Section / Paath (Lazy-loaded on demand)
  const [nitnemSections, setNitnemSections] = useState<NitnemSection[]>(NITNEM_SECTION_STUBS);
  const [isLoadingCategoryData, setIsLoadingCategoryData] = useState<boolean>(false);
  const [selectedGranthCategory, setSelectedGranthCategory] = useState<string>('all');
  const [selectedSectionId, setSelectedSectionId] = useState<string>(NITNEM_SECTION_STUBS[0]?.id || 'prabhat-aarambh-vandana');

  // Helper to merge newly loaded sections into state without losing previously loaded categories
  const mergeResolvedSections = useCallback((loaded: NitnemSection[]) => {
    if (!loaded || loaded.length === 0) return;
    setNitnemSections((prev) => {
      const byId = new Map(loaded.map((s) => [s.id, s]));
      return prev.map((existing) => {
        const resolved = byId.get(existing.id);
        if (resolved && resolved.verses && resolved.verses.length > 0 && !String(resolved.verses[0]?.id ?? '').includes('-placeholder-')) {
          return resolved;
        }
        return existing;
      });
    });
  }, []);

  // Load selected category / section dynamically on mount or switch
  useEffect(() => {
    let cancelled = false;
    const currentStub = nitnemSections.find((s) => s.id === selectedSectionId);
    const needsAsyncHydration = Boolean(currentStub && String(currentStub.verses?.[0]?.id ?? '').includes('-placeholder-'));

    const loadRequired = async () => {
      if (needsAsyncHydration) {
        setIsLoadingCategoryData(true);
      }
      try {
        if (selectedSectionId) {
          const sec = await loadNitnemSectionById(selectedSectionId);
          if (!cancelled && sec) {
            mergeResolvedSections([sec]);
          }
        }
        if (selectedGranthCategory && selectedGranthCategory !== 'all') {
          const catLoaded = await loadNitnemCategorySections(selectedGranthCategory);
          if (!cancelled) {
            mergeResolvedSections(catLoaded);
          }
        }
      } finally {
        if (!cancelled) {
          setIsLoadingCategoryData(false);
        }
      }
    };

    loadRequired();
    return () => {
      cancelled = true;
    };
  }, [selectedGranthCategory, selectedSectionId, mergeResolvedSections]);

  // Deferred idle hydration of remaining Nitnem categories for smooth Next/Prev & TOC audio preview
  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      loadAllNitnemSections()
        .then((allLoaded) => {
          if (!cancelled) {
            mergeResolvedSections(allLoaded);
          }
        })
        .catch(() => {});
    }, 800);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [mergeResolvedSections]);

  // Live refresh when Admin Data Injector injects or purges Slot #1 without page reload
  const [haziriModalState, setHaziriModalState] = useState<HaziriState>(() => getHaziriState());
  const [showNitnemHaziriModal, setShowNitnemHaziriModal] = useState<boolean>(false);

  useEffect(() => {
    const unsubHz = subscribeToHaziri((hz) => {
      setHaziriModalState(hz);
    });
    return () => unsubHz();
  }, []);

  useEffect(() => {
    const handleAdminSlotsUpdated = () => {
      loadAllNitnemSections()
        .then((allLoaded) => {
          setNitnemSections(allLoaded);
        })
        .catch(() => {});
    };
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
  }, []);

  // Reader Settings (Persisted in localStorage + synced with ThemeContext)
  const [readerTheme, setReaderTheme] = useState<ReaderCustomTheme>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_reader_theme') as ReaderCustomTheme | null;
      if (saved) return saved === ('comfort' as any) ? ('netra' as ReaderCustomTheme) : saved;
    } catch {}
    if (themeMode === 'mystic_dark' || themeMode === 'amrit_neel' || themeMode === 'flow_state') {
      return 'black';
    }
    return 'mool';
  });
  const [fontSizeLevel, setFontSizeLevel] = useState<ReaderFontSize>(fontSize);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState<boolean>(false);
  const [settingsTab, setSettingsTab] = useState<'all' | 'framework' | 'autoscroll' | 'themes' | 'audio' | 'targets'>('all');

  const changeReaderTheme = (thm: ReaderCustomTheme) => {
    const normalized = (thm as string) === 'comfort' ? ('netra' as ReaderCustomTheme) : thm;
    setReaderTheme(normalized);
    const thmStr = String(normalized);
    const isDarkTheme = thmStr === 'black' || thmStr === 'dark' || thmStr === 'netra' || thmStr === 'midnight' || thmStr === 'deep_sepia';
    try {
      localStorage.setItem('sahebworld_reader_theme', thmStr);
      localStorage.setItem('sahebworld_night_mode', String(isDarkTheme));
      window.dispatchEvent(new CustomEvent('sahebworld_reader_theme_changed', { detail: { theme: thmStr } }));
    } catch {}
    setThemeMode(isDarkTheme ? 'mystic_dark' : 'bhojpatra');
  };

  useEffect(() => {
    if (!isSettingsExpanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSettingsExpanded(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isSettingsExpanded]);

  // Reading Modes: Continuous vs Page Flip
  const [isPageFlipMode, setIsPageFlipMode] = useState<boolean>(false);
  const [currentReadingMode, setCurrentReadingMode] = useState<string>('scroll');
  const [isTriLanguageView, setIsTriLanguageView] = useState<boolean>(false);
  const [pageFlipIndex, setPageFlipIndex] = useState<number>(0);

  // Sikhworld Style View Mode: Selection Grid vs Actual Reader
  const [viewMode, setViewMode] = useState<'selection' | 'reading'>('selection');

  // Auto-Advance / Auto-Scroll & Pure Vani (Sirf Vani Auto-Path)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [autoScrollSpeed, setAutoScrollSpeed] = useState<0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 5>(1);
  const [isPureVaniMode, setIsPureVaniMode] = useState<boolean>(false);
  const [isAudioPaused, setIsAudioPaused] = useState<boolean>(false);
  const [pathContinuityMode, setPathContinuityMode] = useState<'full-path' | 'single-chapter'>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_nitnem_path_continuity');
      return saved === 'single-chapter' ? 'single-chapter' : 'full-path';
    } catch {
      return 'full-path';
    }
  });
  const [completedNextSectionInfo, setCompletedNextSectionInfo] = useState<{
    id: string;
    title: { hi: string; pb: string; en: string };
    chapterNumber: number;
    totalInGranth: number;
  } | null>(null);
  const prevBhavarthBeforePureRef = useRef<boolean>(true);
  const startedDhunByPureRef = useRef<boolean>(false);
  const playbackSessionRef = useRef<number>(0);
  const playbackFallbackTimerRef = useRef<number | null>(null);
  const activePlaybackCoordRef = useRef<{ verseIdx: number; lineIdx: number }>({ verseIdx: 0, lineIdx: 0 });

  const handleModeSelect = (modeId: string) => {
    setCurrentReadingMode(modeId);
    sacredHaptics.lightTap();
    if (modeId === 'pure_vani') {
      enterPureVaniMode();
      setIsSettingsExpanded(false);
      return;
    }
    if (isPureVaniMode) {
      exitPureVaniMode(false);
    }
    switch (modeId) {
      case 'scroll':
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        setShowBhavarthGlobal(false);
        setIsSanthiyaMode(false);
        break;
      case 'pothi':
        setIsPageFlipMode(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        setShowBhavarthGlobal(false);
        setIsSanthiyaMode(false);
        break;
      case 'parallel':
        setIsPageFlipMode(false);
        setShowBhavarthGlobal(true);
        setIsSanthiyaMode(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        break;
      case 'zen':
        setIsZenMode(true);
        setIsPageFlipMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        break;
      case 'larivaar':
        setIsLarivaarMode(true);
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        break;
      case 'visraam':
        setIsVisraamHighlightEnabled(true);
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsAutoPlaying(false);
        break;
      case 'autoplay':
        setIsPageFlipMode(false);
        setIsAutoPlaying(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        break;
      case 'swadhyay':
        setIsPageFlipMode(false);
        setShowBhavarthGlobal(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAutoPlaying(false);
        break;
      case 'akhand':
        setIsPageFlipMode(false);
        setIsAutoPlaying(true);
        setAutoScrollSpeed(1.5);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        if (!isFullBaniAudioPlaying) {
          handleToggleFullBaniAudio();
        }
        break;
      default:
        break;
    }
  };

  // Divya Shvas Chakra (Breathing Guide)
  const [showBreathingGuide, setShowBreathingGuide] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold-out'>('inhale');

  useEffect(() => {
    if (!showBreathingGuide) return;
    const interval = setInterval(() => {
      setBreathPhase(prev => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        if (prev === 'exhale') return 'hold-out';
        return 'inhale';
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [showBreathingGuide]);

  // Synchronize local states with global context settings
  useEffect(() => {
    setFontSizeLevel(fontSize);
  }, [fontSize]);

  const handleSetLocalFontSizeLevel = (level: ReaderFontSize) => {
    setFontSizeLevel(level);
    setFontSize(level);
  };

  const [selectedTarget, setSelectedTarget] = useState<ReaderTarget>(0); // 0 = Full path
  const [isLineGuideActive, setIsLineGuideActive] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sahebworld_focus_ruler') === 'true';
    } catch {
      return false;
    }
  });
  const [selectedLineId, setSelectedLineId] = useState<string | null>(null);
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [isBackgroundDhunPlaying, setIsBackgroundDhunPlaying] = useState<boolean>(false);
  const [dhunSound, setDhunSound] = useState<DhunSoundType>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_nitnem_dhun_sound');
      if (saved === 'satyanaam' || saved === 'tanpura' || saved === 'flute' || saved === 'stream') {
        return saved;
      }
    } catch {}
    return 'satyanaam';
  });
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(0);
  const [readingProgressCount, setReadingProgressCount] = useState<number>(1);
  const [readVersesSet, setReadVersesSet] = useState<Set<number | string>>(new Set([1]));
  const [playingVoiceVerseId, setPlayingVoiceVerseId] = useState<number | string | null>(null);
  const [copiedId, setCopiedId] = useState<number | string | null>(null);
  const [showBhavarthGlobal, setShowBhavarthGlobal] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sahebworld_show_bhavarth') !== 'false';
    } catch {
      return true;
    }
  });
  const [verseBhavarthOverrides, setVerseBhavarthOverrides] = useState<Record<string | number, boolean>>({});
  const [pinnedVerseId, setPinnedVerseId] = useState<string | number | null>(null);
  const [showQuickNav, setShowQuickNav] = useState<boolean>(false);
  const [scrollProgressPercent, setScrollProgressPercent] = useState<number>(0);

  // --- FULL-SCREEN READING MODE (Browser Full-Screen API + Dynamic Header/Footer Hiding) ---
  const [isFullscreen, setIsFullscreen] = useState<boolean>(() => {
    return typeof document !== 'undefined' ? !!document.fullscreenElement : false;
  });

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = typeof document !== 'undefined' ? !!document.fullscreenElement : false;
      setIsFullscreen(active);
    };
    const handleCustomFullscreen = (e: any) => {
      if (typeof e.detail?.isFullscreen === 'boolean') {
        setIsFullscreen(e.detail.isFullscreen);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    window.addEventListener('sahebworld:fullscreen-change', handleCustomFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      window.removeEventListener('sahebworld:fullscreen-change', handleCustomFullscreen);
    };
  }, []);

  const toggleFullscreen = () => {
    const willBeFullscreen = !isFullscreen;
    setIsFullscreen(willBeFullscreen);
    window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: willBeFullscreen } }));

    if (typeof document !== 'undefined') {
      if (willBeFullscreen) {
        const elem = containerRef.current || document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen().catch(() => {});
        } else if ((elem as any).webkitRequestFullscreen) {
          (elem as any).webkitRequestFullscreen();
        }
      } else {
        if (document.fullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
          }
        }
      }
    }
  };

  // --- TAP-TO-MEAN & STEEK / COMMENTARY STATES ---
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<SandhukkariTerm | null>(null);
  const [glossaryTargetRect, setGlossaryTargetRect] = useState<DOMRect | null>(null);
  const [fullDetailGlossaryTerm, setFullDetailGlossaryTerm] = useState<SandhukkariTerm | null>(null);
  const [showAllGlossaryModal, setShowAllGlossaryModal] = useState<boolean>(false);
  const [showMaryadaModal, setShowMaryadaModal] = useState<boolean>(false);
  const [glossarySearchQuery, setGlossarySearchQuery] = useState<string>('');
  const [verseTabs, setVerseTabs] = useState<Record<string | number, 'bhavarth' | 'steek' | 'shabdarth'>>({});
  const [verseScriptMode, setVerseScriptMode] = useState<Record<string | number, 'hi' | 'pb' | 'en' | 'tri'>>({});

  // --- AUDIO RECITATION & SANTHIYA PRONUNCIATION STATES ---
  const [isFullBaniAudioPlaying, setIsFullBaniAudioPlaying] = useState<boolean>(false);
  const [activeRecitingVerseIdx, setActiveRecitingVerseIdx] = useState<number | null>(null);
  const [activeRecitingLineIdx, setActiveRecitingLineIdx] = useState<number | null>(null);
  const [isSanthiyaMode, setIsSanthiyaMode] = useState<boolean>(false);
  const [santhiyaActiveWord, setSanthiyaActiveWord] = useState<string | null>(null);
  const [audioSpeedLevel, setAudioSpeedLevel] = useState<number>(() => speechReciter.getRate() || 1.0);

  // --- LARIVAAR, VISRAAM & GRAPHICS SHARING STATES ---
  const [isLarivaarMode, setIsLarivaarMode] = useState<boolean>(false);
  const [isVisraamHighlightEnabled, setIsVisraamHighlightEnabled] = useState<boolean>(true);
  const [sharingVerse, setSharingVerse] = useState<NitnemVersePair | null>(null);

  // --- DAMAKHEDA SPECIAL MODAL STATES ---
  const [showAcharyaModal, setShowAcharyaModal] = useState<boolean>(false);
  const [showChoukaVidhiModal, setShowChoukaVidhiModal] = useState<boolean>(false);
  const [showRouteModal, setShowRouteModal] = useState<boolean>(false);
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [showCorrectionModal, setShowCorrectionModal] = useState<boolean>(false);
  const [correctionVerseText, setCorrectionVerseText] = useState<string>('');

  // --- INDEX COLLAPSIBLE & FEATURE TOGGLE STATES ---
  const [isIndexSectionCollapsed, setIsIndexSectionCollapsed] = useState<boolean>(false);
  const [collapsedIndexSections, setCollapsedIndexSections] = useState<Record<string | number, boolean>>({});

  const toggleAllIndexSections = () => {
    sacredHaptics.lightTap();
    const allSectionIds = filteredGranthSuchi.map(s => s.section_id);
    const areAllCollapsed = allSectionIds.every(id => collapsedIndexSections[id]);
    if (areAllCollapsed) {
      setCollapsedIndexSections({});
    } else {
      const nextMap: Record<string | number, boolean> = {};
      allSectionIds.forEach(id => { nextMap[id] = true; });
      setCollapsedIndexSections(nextMap);
    }
  };

  const toggleSingleIndexSection = (secId: string | number) => {
    sacredHaptics.lightTap();
    setCollapsedIndexSections(prev => ({
      ...prev,
      [secId]: !prev[secId]
    }));
  };

  // --- SMART TIME & PURNIMA SUGGESTION + DAILY HAZIRI STATE ---
  const [smartRecommendation, setSmartRecommendation] = useState<SmartNitnemRecommendation>(() =>
    getSmartNitnemRecommendation()
  );
  const [haziriMarkedToday, setHaziriMarkedToday] = useState<boolean>(() => isTodayNitnemDone());
  const [haziriStreak, setHaziriStreak] = useState<number>(() => getHaziriState().currentStreak);
  const [justCompletedHaziriPath, setJustCompletedHaziriPath] = useState<boolean>(false);
  const celebratedEndSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const syncSmart = () => setSmartRecommendation(getSmartNitnemRecommendation());
    const interval = window.setInterval(syncSmart, 60000);
    const syncHaziri = () => {
      setHaziriMarkedToday(isTodayNitnemDone());
      setHaziriStreak(getHaziriState().currentStreak);
    };
    const unsub = subscribeToHaziri(syncHaziri);
    window.addEventListener(SADHANA_GOAL_EVENT, syncHaziri);
    return () => {
      window.clearInterval(interval);
      unsub();
      window.removeEventListener(SADHANA_GOAL_EVENT, syncHaziri);
    };
  }, []);

  // --- KEEP SCREEN AWAKE (WAKE LOCK API WITH TOGGLE & VISIBILITY RE-ACQUISITION) ---
  const [keepScreenAwake, setKeepScreenAwake] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_nitnem_wakelock');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });

  const toggleKeepScreenAwake = () => {
    sacredHaptics.lightTap();
    setKeepScreenAwake((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('sahebworld_nitnem_wakelock', String(next));
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    let wakeLock: any = null;
    let isDisposed = false;

    const requestWakeLock = async () => {
      if (!keepScreenAwake || isDisposed) return;
      try {
        if ('wakeLock' in navigator && document.visibilityState === 'visible') {
          wakeLock = await (navigator as any).wakeLock.request('screen');
        }
      } catch {}
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && keepScreenAwake) {
        requestWakeLock();
      }
    };

    if (keepScreenAwake) {
      requestWakeLock();
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      isDisposed = true;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, [keepScreenAwake]);

  useEffect(() => {
    const syncBhavarth = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.show === 'boolean') {
        setShowBhavarthGlobal(detail.show);
      } else {
        try {
          setShowBhavarthGlobal(localStorage.getItem('sahebworld_show_bhavarth') !== 'false');
        } catch {}
      }
      setVerseBhavarthOverrides({});
    };
    const syncWakeLock = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.enabled === 'boolean') {
        setKeepScreenAwake(detail.enabled);
      } else {
        try {
          setKeepScreenAwake(localStorage.getItem('sahebworld_nitnem_wakelock') !== 'false');
        } catch {}
      }
    };
    const syncFocusRuler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.enabled === 'boolean') {
        setIsLineGuideActive(detail.enabled);
      } else {
        try {
          setIsLineGuideActive(localStorage.getItem('sahebworld_focus_ruler') === 'true');
        } catch {}
      }
    };
    window.addEventListener('sahebworld_bhavarth_changed', syncBhavarth as EventListener);
    window.addEventListener('sahebworld_wakelock_changed', syncWakeLock as EventListener);
    window.addEventListener('sahebworld_focus_ruler_changed', syncFocusRuler as EventListener);
    return () => {
      window.removeEventListener('sahebworld_bhavarth_changed', syncBhavarth as EventListener);
      window.removeEventListener('sahebworld_wakelock_changed', syncWakeLock as EventListener);
      window.removeEventListener('sahebworld_focus_ruler_changed', syncFocusRuler as EventListener);
      speechReciter.stop();
      ambientReaderAudio.stop();
    };
  }, []);

  const getActiveVerseTab = (verseId: string | number): 'bhavarth' | 'steek' | 'shabdarth' => {
    return verseTabs[verseId] || 'bhavarth';
  };

  const setVerseTab = (verseId: string | number, tab: 'bhavarth' | 'steek' | 'shabdarth') => {
    setVerseTabs(prev => ({ ...prev, [verseId]: tab }));
  };

  // --- GLOBAL SCRIPT / LIPI STATE (FIX BAR CONTROL) ---
  const [globalScriptMode, setGlobalScriptMode] = useState<'hi' | 'pb' | 'en' | 'tri'>((language as 'hi' | 'pb' | 'en') || 'hi');

  // Synchronize lipi script with active language
  React.useEffect(() => {
    if (language && (language === 'hi' || language === 'pb' || language === 'en')) {
      setGlobalScriptMode(language);
    }
  }, [language]);

  const getVerseScript = (verseId: string | number): 'hi' | 'pb' | 'en' | 'tri' => {
    if (verseScriptMode[verseId]) return verseScriptMode[verseId];
    return globalScriptMode;
  };

  const setVerseScript = (verseId: string | number, script: 'hi' | 'pb' | 'en' | 'tri') => {
    setVerseScriptMode(prev => ({ ...prev, [verseId]: script }));
  };

  // Check if a specific verse's bhavarth is currently visible
  const isVerseBhavarthVisible = (verseId: string | number): boolean => {
    if (isPureVaniMode) {
      return false;
    }

    if (verseBhavarthOverrides[verseId] !== undefined) {
      return verseBhavarthOverrides[verseId];
    }
    return showBhavarthGlobal;
  };

  // Toggle individual verse's bhavarth visibility (दिखाओ / छुपाओ)
  const toggleSingleVerseBhavarth = (verseId: string | number) => {
    const currentVal = isVerseBhavarthVisible(verseId);
    setVerseBhavarthOverrides(prev => ({
      ...prev,
      [verseId]: !currentVal
    }));
  };

  // Toggle all bhavarths across the entire Nitnem Gutka Sahib
  const toggleAllBhavarth = () => {
    const nextVal = !showBhavarthGlobal;
    setShowBhavarthGlobal(nextVal);
    setVerseBhavarthOverrides({}); // Reset overrides so all verses follow new global state
  };

  // --- NEW TOP FEATURES: Mala Counter, Sacred Bookmarks & Resume Last Read ---
  const [showMalaModal, setShowMalaModal] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Array<{ sectionId: string; verseId: string | number; title: string; time: number }>>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_sacred_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastReadPosition, setLastReadPosition] = useState<{ sectionId: string; verseIndex: number; title: string; timestamp: number } | null>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_last_read_nitnem');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Save last read position automatically whenever active verse or section changes
  useEffect(() => {
    if (viewMode === 'reading' && selectedSectionId) {
      const currentSec = nitnemSections.find(s => s.id === selectedSectionId);
      if (currentSec) {
        const pos = {
          sectionId: selectedSectionId,
          verseIndex: activeVerseIndex,
          title: currentSec.title[lang] || currentSec.title.hi,
          timestamp: Date.now()
        };
        setLastReadPosition(pos);
        try {
          localStorage.setItem('sahebworld_last_read_nitnem', JSON.stringify(pos));
        } catch {}
      }
    }
  }, [selectedSectionId, activeVerseIndex, viewMode, lang, nitnemSections]);

  // Save bookmarks
  const toggleBookmark = (verse: NitnemVersePair) => {
    const isBookmarked = bookmarks.some(b => b.sectionId === selectedSectionId && b.verseId === verse.id);
    let updated: typeof bookmarks;
    if (isBookmarked) {
      updated = bookmarks.filter(b => !(b.sectionId === selectedSectionId && b.verseId === verse.id));
    } else {
      updated = [
        ...bookmarks,
        {
          sectionId: selectedSectionId,
          verseId: verse.id,
          title: `${currentSection.title[lang] || currentSection.title.hi} - ${getVerseTypeLabel(verse.type || 'doha', verse.id, lang)}`,
          time: Date.now()
        }
      ];
    }
    setBookmarks(updated);
    try {
      localStorage.setItem('sahebworld_sacred_bookmarks', JSON.stringify(updated));
    } catch {}
  };

  // Synchronize settings from AdvancedReadingSuiteModal and other global controllers
  useEffect(() => {
    const handleFramework = (e: Event) => {
      const fw = (e as CustomEvent).detail?.framework;
      if (fw) {
        setIsPageFlipMode(fw === 'flip');
        setIsSanthiyaMode(fw === 'parallel');
      }
    };

    const handleAutoScrollToggle = (e: Event) => {
      const active = (e as CustomEvent).detail?.active;
      if (active !== undefined) {
        setIsAutoPlaying(active);
      }
    };

    const handleAutoScrollSpeed = (e: Event) => {
      const speed = (e as CustomEvent).detail?.speed;
      if (speed !== undefined) {
        setAutoScrollSpeed(speed);
      }
    };

    const handleTheme = (e: Event) => {
      const thm = (e as CustomEvent).detail?.theme;
      if (thm) {
        setReaderTheme(thm);
      }
    };

    const handleTargetPace = (e: Event) => {
      const target = (e as CustomEvent).detail?.target;
      if (target !== undefined) {
        setSelectedTarget(target);
      }
    };

    const handleToggleZen = () => {
      setIsZenMode(prev => !prev);
    };

    const handleToggleLarivaar = () => {
      setIsLarivaarMode(prev => !prev);
    };

    const handleToggleVisraam = () => {
      setIsVisraamHighlightEnabled(prev => !prev);
    };

    window.addEventListener('sahebworld_framework_changed', handleFramework as EventListener);
    window.addEventListener('sahebworld_autoscroll_toggled', handleAutoScrollToggle as EventListener);
    window.addEventListener('sahebworld_autoscroll_speed_changed', handleAutoScrollSpeed as EventListener);
    window.addEventListener('sahebworld_reader_theme_changed', handleTheme as EventListener);
    window.addEventListener('sahebworld_target_pace_changed', handleTargetPace as EventListener);
    window.addEventListener('sahebworld_toggle_zen_mode', handleToggleZen);
    window.addEventListener('sahebworld_toggle_larivaar_mode', handleToggleLarivaar);
    window.addEventListener('sahebworld_toggle_visraam_mode', handleToggleVisraam);

    return () => {
      window.removeEventListener('sahebworld_framework_changed', handleFramework as EventListener);
      window.removeEventListener('sahebworld_autoscroll_toggled', handleAutoScrollToggle as EventListener);
      window.removeEventListener('sahebworld_autoscroll_speed_changed', handleAutoScrollSpeed as EventListener);
      window.removeEventListener('sahebworld_reader_theme_changed', handleTheme as EventListener);
      window.removeEventListener('sahebworld_target_pace_changed', handleTargetPace as EventListener);
      window.removeEventListener('sahebworld_toggle_zen_mode', handleToggleZen);
      window.removeEventListener('sahebworld_toggle_larivaar_mode', handleToggleLarivaar);
      window.removeEventListener('sahebworld_toggle_visraam_mode', handleToggleVisraam);
    };
  }, []);

  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);

  // Resume last read action
  const handleResumeLastRead = () => {
    if (!lastReadPosition) return;
    setSelectedSectionId(lastReadPosition.sectionId);
    setActiveVerseIndex(lastReadPosition.verseIndex);
    setViewMode('reading');
    setTimeout(() => {
      scrollToVerse(lastReadPosition.verseIndex);
    }, 250);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const smoothScrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Filtered sections by Granth category
  const filteredSections = useMemo(() => {
    if (selectedGranthCategory === 'all') {
      return nitnemSections;
    }
    return nitnemSections.filter(s => s.majorCategoryId === selectedGranthCategory);
  }, [selectedGranthCategory, nitnemSections]);

  // Filtered Granth Suchi based on verified multilingual master dataset
  const filteredGranthSuchi = useMemo(() => {
    if (selectedGranthCategory === 'all') {
      return MASTER_NITNEM_INDEX.granth_suchi;
    }
    return MASTER_NITNEM_INDEX.granth_suchi.filter(s => s.major_category_id === selectedGranthCategory);
  }, [selectedGranthCategory]);

  // Active section data with alias normalizer & guaranteed non-null fallback
  const currentSection = useMemo<NitnemSection>(() => {
    let found = nitnemSections.find(s => s.id === selectedSectionId);
    if (!found && selectedSectionId) {
      const normalized = selectedSectionId.toLowerCase().replace(/[-_]/g, '');
      found = nitnemSections.find(s => {
        const sNorm = s.id.toLowerCase().replace(/[-_]/g, '');
        return sNorm === normalized ||
          (normalized.includes('gud') && sNorm.includes('gud')) ||
          s.id.replace('gyaan', 'gyan') === selectedSectionId.replace('gyaan', 'gyan') ||
          s.id.replace('gudadi', 'gudri') === selectedSectionId.replace('gudadi', 'gudri') ||
          s.id.replace('gudadi', 'guddi') === selectedSectionId.replace('gudadi', 'guddi');
      });
    }
    return found || nitnemSections[0] || {
      id: selectedSectionId || 'prabhat-aarambh-vandana',
      majorCategoryId: 'prabhat-path',
      title: {
        hi: 'नितनेम गुटका साहेब',
        pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ',
        en: 'Nitnem Gutka Saheb',
      },
      subtitle: {
        hi: 'नए पावन पाठ हेतु आरक्षित रिक्त स्थान',
        pb: 'ਨਵੇਂ ਪਾਵਨ ਪਾਠ ਲਈ ਰਾਖਵੀਂ ਖਾਲੀ ਥਾਂ',
        en: 'Clean space reserved for upcoming sacred Path text',
      },
      totalVerses: 0,
      verses: [],
    };
  }, [selectedSectionId, nitnemSections]);

  const versesList = useMemo<NitnemVersePair[]>(() => {
    if (currentSection?.verses && currentSection.verses.length > 0) {
      return currentSection.verses;
    }
    return [];
  }, [currentSection]);

  // Category-scoped ordered Granth sub-chapter sequence
  const getGranthPlaylistContext = (sectionId: string) => {
    const sec = nitnemSections.find(s => s.id === sectionId) || nitnemSections[0];
    if (!sec) {
      return {
        granthSections: [] as NitnemSection[],
        currentIndex: 0,
        totalCount: 0,
        nextSection: null as NitnemSection | null,
      };
    }
    const granthSections = nitnemSections.filter(s => s.majorCategoryId === sec.majorCategoryId);
    const idx = granthSections.findIndex(s => s.id === sec.id);
    const safeIdx = idx >= 0 ? idx : 0;
    const nextSec = safeIdx < granthSections.length - 1 ? granthSections[safeIdx + 1] : null;
    return {
      granthSections,
      currentIndex: safeIdx,
      totalCount: granthSections.length,
      nextSection: nextSec,
    };
  };

  const granthContext = useMemo(() => {
    return getGranthPlaylistContext(currentSection.id);
  }, [currentSection.id, nitnemSections]);

  // Peaceful gentle flower shower only when arriving at a populated final chapter of a major Nitnem path
  useEffect(() => {
    if (
      viewMode === 'reading' &&
      versesList.length > 0 &&
      !granthContext.nextSection &&
      currentSection?.id &&
      !celebratedEndSectionsRef.current.has(currentSection.id)
    ) {
      celebratedEndSectionsRef.current.add(currentSection.id);
      const timer = window.setTimeout(() => {
        triggerSacredFlowerShower();
      }, 450);
      return () => window.clearTimeout(timer);
    }
  }, [viewMode, versesList.length, granthContext.nextSection, currentSection?.id]);

  const handleMarkNitnemPathHaziri = () => {
    const pathName =
      MAJOR_GRANTH_CATEGORIES.find((c) => c.id === currentSection.majorCategoryId)?.title[language] ||
      currentSection.title[language] ||
      currentSection.title.hi;
    const nextState = markNitnemSadhanaDone(pathName);
    setHaziriMarkedToday(true);
    setHaziriStreak(nextState.currentStreak);
    setJustCompletedHaziriPath(true);
    triggerSacredFlowerShower();
    sacredHaptics.lightTap();
  };

  const cycleQuickFontSize = (direction: 1 | -1) => {
    const order: ReaderFontSize[] = ['small', 'normal', 'medium', 'large', 'xlarge'];
    const currentIdx = order.indexOf(fontSizeLevel);
    const safeIdx = currentIdx === -1 ? 1 : currentIdx;
    const nextIdx = Math.max(0, Math.min(order.length - 1, safeIdx + direction));
    handleSetLocalFontSizeLevel(order[nextIdx]);
    sacredHaptics.lightTap();
  };

  // Live refs so async audio playback & speed changes always access fresh data
  const versesListRef = useRef<NitnemVersePair[]>(versesList);
  versesListRef.current = versesList;
  const currentSectionRef = useRef(currentSection);
  currentSectionRef.current = currentSection;
  const pathContinuityModeRef = useRef<'full-path' | 'single-chapter'>(pathContinuityMode);
  pathContinuityModeRef.current = pathContinuityMode;
  const isPureVaniModeRef = useRef<boolean>(isPureVaniMode);
  isPureVaniModeRef.current = isPureVaniMode;
  const languageRef = useRef<Language>(language);
  languageRef.current = language;
  const globalScriptModeRef = useRef<'hi' | 'pb' | 'en' | 'tri'>(globalScriptMode);
  globalScriptModeRef.current = globalScriptMode;
  const verseScriptModeRef = useRef<Record<string | number, 'hi' | 'pb' | 'en' | 'tri'>>(verseScriptMode);
  verseScriptModeRef.current = verseScriptMode;
  const audioSpeedLevelRef = useRef<number>(audioSpeedLevel);
  audioSpeedLevelRef.current = audioSpeedLevel;

  // Automatic restore callback for scroll position and active verse
  const handleRestoreScrollPosition = useCallback((verseIdx: number, savedScrollTop: number) => {
    setActiveVerseIndex(verseIdx);
    const cardEl = document.getElementById(`verse-card-${versesList[verseIdx]?.id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (savedScrollTop > 0) {
      if (smoothScrollRef.current) {
        smoothScrollRef.current.scrollTo({ top: savedScrollTop, behavior: 'smooth' });
      }
      window.scrollTo({ top: savedScrollTop, behavior: 'smooth' });
    }
  }, [versesList]);

  // Persistent scroll position & active verse hook
  useNitnemScrollPersistence({
    sectionId: selectedSectionId,
    viewMode,
    activeVerseIndex,
    versesListLength: versesList.length,
    smoothScrollRef,
    onRestorePosition: handleRestoreScrollPosition
  });

  const pinnedVerse = useMemo(() => {
    if (!pinnedVerseId) return null;
    return versesList.find(v => v.id === pinnedVerseId) || null;
  }, [versesList, pinnedVerseId]);

  // --- FRAMER MOTION SWIPE GESTURE NAVIGATION FOR BANI VERSES & CHAPTERS ---
  const handleFramerMotionDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.2;
    
    // Prioritize horizontal swipe over vertical scroll
    if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) return;

    // Swipe Left (Go to Next Verse, Page, or Next Section)
    if ((info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold)) {
      if (isPageFlipMode) {
        if (pageFlipIndex >= versesList.length - 1) {
          handleNextSection();
        } else {
          setPageFlipIndex(prev => Math.min(versesList.length - 1, prev + 1));
        }
      } else {
        if (activeVerseIndex >= versesList.length - 1) {
          handleNextSection();
        } else {
          scrollToVerse(Math.min(versesList.length - 1, activeVerseIndex + 1));
        }
      }
      sacredHaptics.lightTap();
    } 
    // Swipe Right (Go to Previous Verse, Page, or Previous Section)
    else if ((info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold)) {
      if (isPageFlipMode) {
        if (pageFlipIndex <= 0) {
          handlePrevSection();
        } else {
          setPageFlipIndex(prev => Math.max(0, prev - 1));
        }
      } else {
        if (activeVerseIndex <= 0) {
          handlePrevSection();
        } else {
          scrollToVerse(Math.max(0, activeVerseIndex - 1));
        }
      }
      sacredHaptics.lightTap();
    }
  };

  // --- 물리적 볼륨 버튼 & ARROW KEY NAVIGATION ---
  const scrollSegmentUp = () => {
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollBy({ top: -350, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: -350, behavior: 'smooth' });
    }
  };

  const scrollSegmentDown = () => {
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollBy({ top: 350, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 350, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'AudioVolumeUp') {
        e.preventDefault();
        scrollToVerse(Math.max(0, activeVerseIndex - 1));
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'AudioVolumeDown') {
        e.preventDefault();
        scrollToVerse(Math.min(versesList.length - 1, activeVerseIndex + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVerseIndex, versesList.length]);

  // Current section index in overall nitnemSections
  const currentOverallIndex = useMemo(() => {
    return nitnemSections.findIndex(s => s.id === currentSection.id);
  }, [currentSection.id, nitnemSections]);

  // Handle section switch & auto-scroll to top smoothly
  useEffect(() => {
    scrollToContainerTop();
    setSelectedLineId(null);
  }, [selectedSectionId, viewMode]);

  // Smooth manual scroll tracking without layout jitter
  const handleContainerScroll = () => {
    const container = smoothScrollRef.current;
    const rootEl = document.getElementById('root');
    const scrollTop = (container ? container.scrollTop : 0) || (rootEl ? rootEl.scrollTop : 0) || window.scrollY || window.pageYOffset || 0;
    const scrollHeight = (container ? container.scrollHeight : 0) || (rootEl ? rootEl.scrollHeight : 0) || document.documentElement.scrollHeight;
    const clientHeight = (container ? container.clientHeight : 0) || (rootEl ? rootEl.clientHeight : 0) || window.innerHeight;

    setIsScrolledDown(scrollTop > 120);

    if (scrollHeight > clientHeight) {
      const pct = Math.min(100, Math.max(0, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)));
      setScrollProgressPercent(pct);
    }

    // Identify active verse based on scroll position smoothly
    const cards = document.querySelectorAll<HTMLElement>('[data-verse-card]');
    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.top <= 160 && cardRect.bottom >= 40) {
        setActiveVerseIndex(idx);
      }
    });
  };

  // Window scroll listener for reading mode
  useEffect(() => {
    if (viewMode !== 'reading') return;
    window.addEventListener('scroll', handleContainerScroll, { passive: true });
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.addEventListener('scroll', handleContainerScroll, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', handleContainerScroll);
      if (rootEl) {
        rootEl.removeEventListener('scroll', handleContainerScroll);
      }
    };
  }, [viewMode]);

  // When user manually scrolls/wheels the container, pause auto-scroll
  const handleManualScrollStart = () => {
    // Keep auto-playing active unless manually toggled via Settings or floating play bar
  };

  // Smooth programmatic scroll to specific verse page
  const scrollToVerse = (idx: number) => {
    if (idx < 0 || idx >= versesList.length) return;
    setActiveVerseIndex(idx);
    handleMarkVerseRead(versesList[idx]?.id);
    if (idx === 0) {
      scrollToContainerTop();
      return;
    }
    const cardEl = document.getElementById(`verse-card-${versesList[idx]?.id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContainerTop = () => {
    sacredHaptics.lightTap();
    const scrollOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.scrollTo(scrollOptions);
    }
    const readerRoot = document.getElementById('nitnem-gutka-reader-root');
    if (readerRoot) {
      readerRoot.scrollTo(scrollOptions);
    }
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollTo(scrollOptions);
    }
    if (containerRef.current) {
      containerRef.current.scrollTo(scrollOptions);
    }
    const topBanner = document.getElementById('nitnem-reading-top-header');
    if (topBanner) {
      topBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveVerseIndex(0);
  };

  const scrollToContainerBottom = () => {
    sacredHaptics.lightTap();
    const maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 5000);
    const scrollOptions: ScrollToOptions = { top: maxScroll, behavior: 'smooth' };
    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.scrollTo(scrollOptions);
    }
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollTo({ top: smoothScrollRef.current.scrollHeight, behavior: 'smooth' });
    } else if (containerRef.current) {
      containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleGlobalTop = () => {
      scrollToContainerTop();
    };
    window.addEventListener('sahebworld:scroll-to-top', handleGlobalTop);
    return () => window.removeEventListener('sahebworld:scroll-to-top', handleGlobalTop);
  }, []);

  const handleSelectSection = (sectionId: string, options?: { autoPlayAudio?: boolean }) => {
    playbackSessionRef.current += 1;
    const scheduledToken = playbackSessionRef.current;
    if (playbackFallbackTimerRef.current) {
      window.clearTimeout(playbackFallbackTimerRef.current);
      playbackFallbackTimerRef.current = null;
    }
    speechReciter.stop();
    setIsFullBaniAudioPlaying(false);
    setIsAudioPaused(false);
    setActiveRecitingVerseIdx(null);
    setActiveRecitingLineIdx(null);
    setCompletedNextSectionInfo(null);
    activePlaybackCoordRef.current = { verseIdx: 0, lineIdx: 0 };

    setSelectedSectionId(sectionId);
    setActiveVerseIndex(0);
    setReadVersesSet(new Set([1]));
    setReadingProgressCount(1);
    setIsAutoPlaying(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }

    if (options?.autoPlayAudio || isPureVaniModeRef.current) {
      playbackFallbackTimerRef.current = window.setTimeout(() => {
        if (playbackSessionRef.current !== scheduledToken) return;
        playBaniFromCoord(0, 0);
      }, 180);
    }
  };

  const handleNextSection = () => {
    if (currentOverallIndex < nitnemSections.length - 1) {
      const nextSec = nitnemSections[currentOverallIndex + 1];
      handleSelectSection(nextSec.id);
    }
  };

  const handlePrevSection = () => {
    if (currentOverallIndex > 0) {
      const prevSec = nitnemSections[currentOverallIndex - 1];
      handleSelectSection(prevSec.id);
    }
  };

  // --- TRANQUILITY BREATHING CYCLE TIMER ---
  useEffect(() => {
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        if (prev === 'exhale') return 'hold-out';
        return 'inhale';
      });
    }, 4000); // 4s per phase
    return () => clearInterval(interval);
  }, []);

  // --- AUTO-SCROLL & PAGE FLIP ENGINE ---
  // Yield to audio-synced verse/line scroll when Full Bani recitation is active
  useAutoScroll({
    containerRef: isZenMode ? containerRef : smoothScrollRef,
    isActive: isAutoPlaying && !isFullBaniAudioPlaying,
    speedMultiplier: autoScrollSpeed,
    isPageFlipMode: isPageFlipMode,
    onPageFlipNext: () => {
      setPageFlipIndex((prev) => {
        if (prev >= versesList.length - 1) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    },
    onComplete: () => {
      setIsAutoPlaying(false);
    }
  });

  // --- KEYBOARD SHORTCUTS FOR PAGE FLIP ---
  useEffect(() => {
    if (!isPageFlipMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setPageFlipIndex((prev) => Math.min(versesList.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setPageFlipIndex((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPageFlipMode, versesList.length]);

  // Font size resolver (Devanagari/Gurmukhi mobile-safe scale)
  const getFontSizeClass = (level: ReaderFontSize) => {
    switch (level) {
      case 'small': return 'text-lg sm:text-xl';
      case 'normal': return 'text-xl sm:text-2xl';
      case 'medium': return 'text-2xl sm:text-3xl';
      case 'large': return 'text-[1.65rem] sm:text-4xl';
      case 'xlarge': return 'text-3xl sm:text-5xl';
      case 'xl': return 'text-3xl sm:text-5xl md:text-6xl';
      case 'elderly': return 'text-3xl xs:text-4xl sm:text-6xl font-black';
      default: return 'text-xl sm:text-2xl';
    }
  };

  const getLineHeightClass = (lh: 'small' | 'medium' | 'large') => {
    switch (lh) {
      case 'small': return 'leading-[1.75]';
      case 'medium': return 'leading-[1.95]';
      case 'large': return 'leading-[2.2]';
      default: return 'leading-[1.95]';
    }
  };

  const getWidthClass = (mode: 'narrow' | 'medium' | 'wide') => {
    switch (mode) {
      case 'narrow': return 'w-full mx-auto';
      case 'medium': return 'w-full mx-auto';
      case 'wide': return 'w-full mx-auto';
      default: return 'w-full mx-auto';
    }
  };

  // Theme styling resolver
  const getThemeStyles = (themeName: ReaderCustomTheme) => {
    const hasWp = Boolean(globalWallpaper);
    switch (themeName) {
      case 'mool':
      case 'light':
      default:
        return {
          wrapperBg: hasWp ? 'bg-transparent' : (isDarkMode ? 'bg-[#12100E]' : 'bg-[#faf7ee]'),
          cardBg: hasWp
            ? (isDarkMode ? 'bg-zinc-900/78 backdrop-blur-md' : 'bg-[#fffdf9]/84 backdrop-blur-md')
            : (isDarkMode ? 'bg-[#1e1a16]' : 'bg-[#fffef9]'),
          cardBorder: isDarkMode ? 'border-amber-500/25' : 'border-[#d6be8a]/70',
          textColor: isDarkMode ? 'text-[#f8fafc]' : 'text-[#26180a]',
          accentText: isDarkMode ? 'text-[#fbbf24]' : 'text-[#8b2500]',
          subText: isDarkMode ? 'text-[#e2d9c8]' : 'text-[#5c4328]',
          highlightBg: isDarkMode ? 'bg-[#78350f]/35' : 'bg-[#fef3c7]/70',
          badgeBg: isDarkMode ? 'bg-[#382c1e] text-[#fcd34d]' : 'bg-[#f5ebd2] text-[#8b2500]',
          lineGuideColor: 'bg-amber-500/20 border-y-2 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
          toolbarBg: hasWp
            ? (isDarkMode ? 'bg-zinc-900/86 border-amber-500/25 backdrop-blur-md' : 'bg-[#fffdf9]/88 border-[#d6be8a]/70 backdrop-blur-md')
            : (isDarkMode ? 'bg-[#1e1a16]/95 border-[#3d3326]' : 'bg-[#fffef9]/95 border-[#e6dcbe]'),
          controlGroupBg: hasWp
            ? (isDarkMode ? 'bg-zinc-950/75 border-amber-500/20' : 'bg-[#faf7ee]/82 border-[#d6be8a]/60')
            : (isDarkMode ? 'bg-[#1a1612]/90 border-[#3d3326]/60' : 'bg-[#faf7ee]/90 border-[#e6dcbe]/60'),
          btnActive: isDarkMode ? 'bg-[#f59e0b] text-[#09090b] shadow-sm font-black' : 'bg-[#8B2500] text-white shadow-sm',
          btnInactive: isDarkMode ? 'text-[#e2d9c8] hover:bg-zinc-700/50' : 'text-[#5c4328] hover:bg-amber-100/70',
          selectBg: isDarkMode ? 'bg-zinc-900/90 text-[#f8fafc] border-amber-500/25' : 'bg-[#fffdf9]/90 text-[#26180a] border-[#d6be8a]/70'
        };
      case 'pothi':
      case 'sepia':
        return {
          wrapperBg: hasWp ? 'bg-transparent' : (isDarkMode ? 'bg-[#1c140b]' : 'bg-[#f4ead1]'),
          cardBg: hasWp
            ? (isDarkMode ? 'bg-[#261b0e]/82 backdrop-blur-md' : 'bg-[#fbf4e1]/84 backdrop-blur-md')
            : (isDarkMode ? 'bg-[#2c2012]' : 'bg-[#fbf4e1]'),
          cardBorder: isDarkMode ? 'border-[#b8860b]/45' : 'border-[#c4a668]/75',
          textColor: isDarkMode ? 'text-[#fef3c7]' : 'text-[#2e1a07]',
          accentText: isDarkMode ? 'text-[#fbbf24]' : 'text-[#8b2500]',
          subText: isDarkMode ? 'text-[#fde68a]' : 'text-[#5c3a18]',
          highlightBg: isDarkMode ? 'bg-[#713f12]/45' : 'bg-[#f7e7bf]',
          badgeBg: isDarkMode ? 'bg-[#451a03] text-[#fef08a]' : 'bg-[#efe0b9] text-[#703c0a]',
          lineGuideColor: 'bg-[rgba(217,119,6,0.12)] border-y-2 border-amber-600/35',
          toolbarBg: hasWp
            ? (isDarkMode ? 'bg-[#261b0e]/88 border-[#b8860b]/45 backdrop-blur-md' : 'bg-[#fbf4e1]/90 border-[#c4a668]/75 backdrop-blur-md')
            : (isDarkMode ? 'bg-[#2c2012]/95 border-[#b8860b]/40' : 'bg-[#fbf4e1]/95 border-[#d6be8a]/65'),
          controlGroupBg: hasWp
            ? (isDarkMode ? 'bg-[#1c140b]/80 border-[#b8860b]/30' : 'bg-[#f4ead1]/84 border-[#c4a668]/50')
            : (isDarkMode ? 'bg-[#20180e]/90 border-[#b8860b]/20' : 'bg-[#f4ead1]/90 border-[#d6be8a]/40'),
          btnActive: isDarkMode ? 'bg-[#fbbf24] text-[#261b0e] shadow-sm font-black' : 'bg-[#8B2500] text-white shadow-sm',
          btnInactive: isDarkMode ? 'text-[#fde68a] hover:bg-[#451a03]/50' : 'text-[#5c3a18] hover:bg-[#f2e2b8]',
          selectBg: isDarkMode ? 'bg-[#261b0e]/90 text-[#fef3c7] border-[#b8860b]/40' : 'bg-[#fbf4e1]/90 text-[#2e1a07] border-[#c4a668]/60'
        };
      case 'black':
      case 'dark':
        return {
          wrapperBg: hasWp ? 'bg-transparent' : 'bg-[#09090b]',
          cardBg: hasWp ? 'bg-[#0c0c10]/80 backdrop-blur-md' : 'bg-[#121215]',
          cardBorder: 'border-amber-400/25',
          textColor: 'text-[#f8fafc]',
          accentText: 'text-[#fbbf24]',
          subText: 'text-[#d4d4d8]',
          highlightBg: 'bg-[#27272a]/85',
          badgeBg: 'bg-[#18181b] text-[#fbbf24] border border-[#3f3f46]',
          lineGuideColor: 'bg-amber-500/15 border-y-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.25)]',
          toolbarBg: hasWp ? 'bg-[#0c0c10]/88 border-amber-400/25 backdrop-blur-md shadow-inner' : 'bg-[#121215]/95 border-[#27272a] shadow-inner',
          controlGroupBg: hasWp ? 'bg-[#18181b]/80 border-[#3f3f46]' : 'bg-[#18181b] border-[#27272a]',
          btnActive: 'bg-[#f59e0b] text-[#09090b] shadow-sm font-black',
          btnInactive: 'text-[#d4d4d8] hover:bg-[#27272a] hover:text-[#f8fafc]',
          selectBg: 'bg-[#18181b]/90 text-[#f8fafc] border-[#3f3f46]'
        };
      case 'netra':
      case 'comfort':
        return {
          wrapperBg: hasWp ? 'bg-transparent' : 'bg-[#101f17]',
          cardBg: hasWp ? 'bg-[#12261c]/82 backdrop-blur-md' : 'bg-[#172a20]',
          cardBorder: 'border-[#34d399]/35',
          textColor: 'text-[#ecfdf5]',
          accentText: 'text-[#6ee7b7]',
          subText: 'text-[#a7f3d0]',
          highlightBg: 'bg-[#064e3b]/60',
          badgeBg: 'bg-[#064e3b] text-[#6ee7b7] border border-[#059669]',
          lineGuideColor: 'bg-emerald-400/20 border-y-2 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]',
          toolbarBg: hasWp ? 'bg-[#12261c]/88 border-[#34d399]/35 backdrop-blur-md shadow-inner' : 'bg-[#172a20]/95 border-[#294a3a] shadow-inner',
          controlGroupBg: hasWp ? 'bg-[#0e1d15]/80 border-[#294a3a]' : 'bg-[#101f17] border-[#294a3a]',
          btnActive: 'bg-[#34d399] text-[#0b1912] shadow-sm font-black',
          btnInactive: 'text-[#a7f3d0] hover:bg-[#294a3a] hover:text-[#ecfdf5]',
          selectBg: 'bg-[#101f17]/90 text-[#ecfdf5] border-[#294a3a]'
        };
    }
  };

  // Handle Category Select
  const handleSelectCategory = (categoryId: string) => {
    setSelectedGranthCategory(categoryId);
    
    // Automatically select the first section of the new category
    const categorySections = categoryId === 'all' 
      ? nitnemSections 
      : nitnemSections.filter(s => s.majorCategoryId === categoryId);
    
    if (categorySections.length > 0) {
      handleSelectSection(categorySections[0].id);
    }
  };

  const currentThemeStyle = getThemeStyles(readerTheme);

  // Background dhun toggle
  const handleToggleBackgroundDhun = (sound?: DhunSoundType) => {
    const targetSound = sound || dhunSound;
    if (isBackgroundDhunPlaying && (!sound || sound === dhunSound)) {
      ambientReaderAudio.stop();
      setIsBackgroundDhunPlaying(false);
      startedDhunByPureRef.current = false;
    } else {
      setDhunSound(targetSound);
      try {
        localStorage.setItem('sahebworld_nitnem_dhun_sound', targetSound);
      } catch {}
      ambientReaderAudio.start(targetSound);
      setIsBackgroundDhunPlaying(true);
    }
  };

  const handleChangeDhunSound = (sound: DhunSoundType) => {
    setDhunSound(sound);
    try {
      localStorage.setItem('sahebworld_nitnem_dhun_sound', sound);
    } catch {}
    if (isBackgroundDhunPlaying) {
      ambientReaderAudio.start(sound);
    }
  };

  const handleTogglePathContinuity = () => {
    sacredHaptics.lightTap();
    const nextMode = pathContinuityMode === 'full-path' ? 'single-chapter' : 'full-path';
    setPathContinuityMode(nextMode);
    pathContinuityModeRef.current = nextMode;
    try {
      localStorage.setItem('sahebworld_nitnem_path_continuity', nextMode);
    } catch {}
  };

  const handleCycleDhunInPureVani = () => {
    sacredHaptics.lightTap();
    if (!isBackgroundDhunPlaying) {
      ambientReaderAudio.setVolume(0.24);
      ambientReaderAudio.start('satyanaam');
      setDhunSound('satyanaam');
      try { localStorage.setItem('sahebworld_nitnem_dhun_sound', 'satyanaam'); } catch {}
      setIsBackgroundDhunPlaying(true);
      startedDhunByPureRef.current = true;
    } else if (dhunSound === 'satyanaam') {
      ambientReaderAudio.setVolume(0.24);
      ambientReaderAudio.start('tanpura');
      setDhunSound('tanpura');
      try { localStorage.setItem('sahebworld_nitnem_dhun_sound', 'tanpura'); } catch {}
    } else {
      ambientReaderAudio.stop();
      setIsBackgroundDhunPlaying(false);
      startedDhunByPureRef.current = false;
    }
  };

  // Audio voice recitation for single verse
  const handlePlayVoice = (verse: NitnemVersePair) => {
    if (playingVoiceVerseId === verse.id) {
      speechReciter.stop();
      setPlayingVoiceVerseId(null);
    } else {
      if (isFullBaniAudioPlaying) {
        setIsFullBaniAudioPlaying(false);
      }
      setPlayingVoiceVerseId(verse.id);
      const linesText = verse.lines[language]?.join(' ') || verse.lines.hi.join(' ');
      speechReciter.speak(
        linesText,
        language,
        () => setPlayingVoiceVerseId(null),
        (err) => {
          console.warn('Speech synthesis error:', err);
          setPlayingVoiceVerseId(null);
        }
      );
    }
  };

  // --- FULL BANI SEQUENTIAL AUDIO RECITATION WITH AUDIO-SYNCED SCROLL, PAUSE & SPEED ---
  const stopAllAudioPlayback = useCallback(() => {
    playbackSessionRef.current += 1;
    if (playbackFallbackTimerRef.current) {
      window.clearTimeout(playbackFallbackTimerRef.current);
      playbackFallbackTimerRef.current = null;
    }
    speechReciter.stop();
    setIsFullBaniAudioPlaying(false);
    setIsAudioPaused(false);
    setActiveRecitingVerseIdx(null);
    setActiveRecitingLineIdx(null);
    setCompletedNextSectionInfo(null);
  }, []);

  const enterPureVaniMode = (startIdx?: number) => {
    sacredHaptics.lightTap();
    if (viewMode !== 'reading') {
      setViewMode('reading');
    }
    if (!isPureVaniMode) {
      prevBhavarthBeforePureRef.current = showBhavarthGlobal;
    }
    setIsPureVaniMode(true);
    isPureVaniModeRef.current = true;
    setCurrentReadingMode('pure_vani');
    setIsPageFlipMode(false);
    setIsZenMode(false);
    setIsSanthiyaMode(false);
    setShowBhavarthGlobal(false);
    setVerseBhavarthOverrides({});
    setIsAutoPlaying(false);
    setPinnedVerseId(null);
    setCompletedNextSectionInfo(null);

    // Start soothing Satyanaam Dhun (or user's selected Dhun) gently beneath voice recitation
    if (!isBackgroundDhunPlaying) {
      const targetDhun = dhunSound || 'satyanaam';
      ambientReaderAudio.setVolume(0.24);
      ambientReaderAudio.start(targetDhun);
      setIsBackgroundDhunPlaying(true);
      startedDhunByPureRef.current = true;
    } else {
      ambientReaderAudio.setVolume(0.24);
    }

    const targetIdx = startIdx !== undefined ? startIdx : activeVerseIndex;
    const enterToken = playbackSessionRef.current;
    window.setTimeout(() => {
      if (playbackSessionRef.current !== enterToken) return;
      playBaniFromCoord(targetIdx, 0);
    }, viewMode !== 'reading' ? 160 : 40);
  };

  const exitPureVaniMode = (resetReadingMode: boolean = true) => {
    sacredHaptics.lightTap();
    stopAllAudioPlayback();
    if (startedDhunByPureRef.current) {
      ambientReaderAudio.stop();
      setIsBackgroundDhunPlaying(false);
      startedDhunByPureRef.current = false;
    }
    ambientReaderAudio.setVolume(0.45);
    setShowBhavarthGlobal(prevBhavarthBeforePureRef.current);
    setIsPureVaniMode(false);
    isPureVaniModeRef.current = false;
    if (resetReadingMode && currentReadingMode === 'pure_vani') {
      setCurrentReadingMode('scroll');
    }
  };

  const handleTogglePureVaniMode = () => {
    if (isPureVaniMode) {
      exitPureVaniMode(true);
    } else {
      enterPureVaniMode(viewMode === 'reading' ? activeVerseIndex : 0);
    }
  };

  const playBaniFromCoord = (startVerseIdx: number, startLineIdx: number = 0) => {
    playbackSessionRef.current += 1;
    const sessionToken = playbackSessionRef.current;

    if (playbackFallbackTimerRef.current) {
      window.clearTimeout(playbackFallbackTimerRef.current);
      playbackFallbackTimerRef.current = null;
    }

    speechReciter.stop();
    speechReciter.setRate(audioSpeedLevelRef.current);
    setPlayingVoiceVerseId(null);
    setIsFullBaniAudioPlaying(true);
    setIsAudioPaused(false);
    setCompletedNextSectionInfo(null);

    const reciteAt = (vIdx: number, lIdx: number) => {
      if (playbackSessionRef.current !== sessionToken) return;

      const list = versesListRef.current;
      if (!list || list.length === 0) {
        setIsFullBaniAudioPlaying(false);
        setIsAudioPaused(false);
        setActiveRecitingVerseIdx(null);
        setActiveRecitingLineIdx(null);
        setCompletedNextSectionInfo(null);
        return;
      }

      if (vIdx < 0 || vIdx >= list.length) {
        const liveSection = currentSectionRef.current;
        const { nextSection, currentIndex, totalCount } = getGranthPlaylistContext(liveSection?.id);

        if (pathContinuityModeRef.current === 'full-path' && nextSection && (nextSection.verses?.length ?? 0) > 0) {
          setIsAudioPaused(false);
          setActiveRecitingVerseIdx(null);
          setActiveRecitingLineIdx(null);
          setCompletedNextSectionInfo(null);
          playbackFallbackTimerRef.current = window.setTimeout(() => {
            if (playbackSessionRef.current !== sessionToken) return;
            handleSelectSection(nextSection.id, { autoPlayAudio: true });
          }, 900);
          return;
        }

        setIsFullBaniAudioPlaying(false);
        setIsAudioPaused(false);
        setActiveRecitingVerseIdx(null);
        setActiveRecitingLineIdx(null);
        if (nextSection) {
          setCompletedNextSectionInfo({
            id: nextSection.id,
            title: nextSection.title,
            chapterNumber: currentIndex + 2,
            totalInGranth: totalCount,
          });
        } else {
          setCompletedNextSectionInfo(null);
        }
        return;
      }

      const verse = list[vIdx];
      if (!verse) {
        reciteAt(vIdx + 1, 0);
        return;
      }

      const activeLang = languageRef.current;
      const script = verseScriptModeRef.current[verse.id] || globalScriptModeRef.current;
      let lines = verse.lines.hi;
      let langCode: Language = 'hi';

      if (script === 'pb' && verse.lines.pb && verse.lines.pb.length > 0) {
        lines = verse.lines.pb;
        langCode = 'pb';
      } else if (script === 'en' && verse.lines.en && verse.lines.en.length > 0) {
        lines = verse.lines.en;
        langCode = 'en';
      } else if (activeLang === 'pb' && verse.lines.pb && verse.lines.pb.length > 0) {
        lines = verse.lines.pb;
        langCode = 'pb';
      } else if (activeLang === 'en' && verse.lines.en && verse.lines.en.length > 0) {
        lines = verse.lines.en;
        langCode = 'en';
      }

      if (lIdx >= lines.length) {
        playbackFallbackTimerRef.current = window.setTimeout(() => {
          reciteAt(vIdx + 1, 0);
        }, 380);
        return;
      }

      activePlaybackCoordRef.current = { verseIdx: vIdx, lineIdx: lIdx };
      setActiveRecitingVerseIdx(vIdx);
      setActiveVerseIndex(vIdx);
      setActiveRecitingLineIdx(lIdx);
      handleMarkVerseRead(verse.id);

      // Center the currently spoken line smoothly in the reading viewport
      const lineId = `${verse.id}-${langCode}-${lIdx}`;
      window.setTimeout(() => {
        if (playbackSessionRef.current !== sessionToken) return;
        const lineEl = document.getElementById(lineId);
        if (lineEl) {
          lineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          const cardEl = document.getElementById(`verse-card-${verse.id}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 45);

      const currentLineText = lines[lIdx] || '';
      const speakStartTime = Date.now();
      let handled = false;

      const advanceToNext = () => {
        if (handled || playbackSessionRef.current !== sessionToken) return;
        handled = true;

        const elapsed = Date.now() - speakStartTime;
        // If browser SpeechSynthesis is unavailable or instant-completes, glide naturally by reading duration
        if (elapsed < 120) {
          const safeRate = Math.max(0.5, audioSpeedLevelRef.current || 1.0);
          const naturalMs = Math.max(1300, Math.round((Math.max(12, currentLineText.length) * 65) / safeRate));
          playbackFallbackTimerRef.current = window.setTimeout(() => {
            reciteAt(vIdx, lIdx + 1);
          }, naturalMs);
        } else {
          reciteAt(vIdx, lIdx + 1);
        }
      };

      speechReciter.setRate(audioSpeedLevelRef.current);
      speechReciter.speak(currentLineText, langCode, advanceToNext, advanceToNext);
    };

    reciteAt(startVerseIdx, startLineIdx);
  };

  const playBaniFromIndex = (idx: number) => {
    playBaniFromCoord(idx, 0);
  };

  const handleToggleFullBaniAudio = (startVerseIdx?: number) => {
    if (isFullBaniAudioPlaying) {
      stopAllAudioPlayback();
    } else {
      const start = startVerseIdx !== undefined ? startVerseIdx : activeVerseIndex;
      playBaniFromCoord(start, 0);
    }
  };

  const handlePauseOrResumeAudio = () => {
    sacredHaptics.lightTap();
    if (!isFullBaniAudioPlaying) {
      playBaniFromCoord(activeVerseIndex, 0);
      return;
    }

    if (!isAudioPaused) {
      // Pause reliably while preserving exact (verseIdx, lineIdx) coordinate
      playbackSessionRef.current += 1;
      if (playbackFallbackTimerRef.current) {
        window.clearTimeout(playbackFallbackTimerRef.current);
        playbackFallbackTimerRef.current = null;
      }
      speechReciter.stop();
      setIsAudioPaused(true);
    } else {
      // Resume from exact paused verse & line
      const { verseIdx, lineIdx } = activePlaybackCoordRef.current;
      playBaniFromCoord(verseIdx, lineIdx);
    }
  };

  const handleChangeAudioSpeed = (newSpeed: number) => {
    sacredHaptics.lightTap();
    setAudioSpeedLevel(newSpeed);
    audioSpeedLevelRef.current = newSpeed;
    speechReciter.setRate(newSpeed);
    if (isFullBaniAudioPlaying && !isAudioPaused) {
      const { verseIdx, lineIdx } = activePlaybackCoordRef.current;
      playBaniFromCoord(verseIdx, lineIdx);
    }
  };

  // Clean up speech & Pure Vani Tanpura on unmount
  useEffect(() => {
    return () => {
      playbackSessionRef.current += 1;
      if (playbackFallbackTimerRef.current) {
        window.clearTimeout(playbackFallbackTimerRef.current);
      }
      speechReciter.stop();
      if (startedDhunByPureRef.current) {
        ambientReaderAudio.stop();
      }
    };
  }, []);

  // Santhiya Mode: Single Word Accurate Pronunciation
  const handleSanthiyaPronounceWord = (word: string, langCode: Language) => {
    const cleanWord = word.replace(/[।,!?;:'"॥()]/g, '').trim();
    if (!cleanWord) return;
    setSanthiyaActiveWord(cleanWord);
    speechReciter.stop();
    speechReciter.speak(cleanWord, langCode, () => {
      setSanthiyaActiveWord(null);
    }, () => {
      setSanthiyaActiveWord(null);
    });
  };

  // Mark verse as read & progress update
  const handleMarkVerseRead = (vId: number | string) => {
    setReadVersesSet(prev => {
      const next = new Set(prev);
      next.add(vId);
      setReadingProgressCount(next.size);
      return next;
    });
  };

  // Share / Copy verse
  const handleCopyVerse = (verse: NitnemVersePair) => {
    const lines = (verse.lines[language] || verse.lines.hi).join('\n');
    const bhav = verse.bhavarth ? (verse.bhavarth[language] || verse.bhavarth.hi) : '';
    const shareText = `।। सत्यनाम ।।\n\n${currentSection.title[language] || currentSection.title.hi}\n\n${lines}${bhav ? `\n\nभावार्थ:\n${bhav}` : ''}\n\n।। साहेब बंदगी साहेब ।।\n(SahebWorld App)`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedId(verse.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleShareVerse = async (verse: NitnemVersePair) => {
    const lines = (verse.lines[language] || verse.lines.hi).join('\n');
    const bhav = verse.bhavarth ? (verse.bhavarth[language] || verse.bhavarth.hi) : '';
    const shareText = `।। सत्यनाम ।।\n\n${currentSection.title[language] || currentSection.title.hi}\n\n${lines}${bhav ? `\n\nभावार्थ:\n${bhav}` : ''}\n\n।। साहेब बंदगी साहेब ।।\n(SahebWorld App)`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentSection.title[language] || currentSection.title.hi,
          text: shareText,
        });
        return;
      } catch {
        // Fallback to copy if share canceled or not supported
      }
    }
    handleCopyVerse(verse);
  };

  // Save verse note to Spiritual Diary
  const handleSaveToDiary = (verse: NitnemVersePair) => {
    try {
      const saved = localStorage.getItem('sahebworld_diary_entries');
      let existing: any[] = [];
      if (saved) {
        try { existing = JSON.parse(saved); } catch { existing = []; }
      }
      const lines = (verse.lines[language] || verse.lines.hi).join('\n');
      const newEntry = {
        id: 'diary-' + Date.now(),
        date: new Date().toISOString(),
        notes: `${currentSection.title[language] || currentSection.title.hi}:\n${lines}`,
        categoryTag: currentSection.title[language] || 'नितनेम पाठ'
      };
      localStorage.setItem('sahebworld_diary_entries', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.error(e);
    }
  };

  // Calculate target progress percentage
  const totalVersesInCount = Math.max(1, selectedTarget === 0 ? versesList.length : selectedTarget);
  const progressPercent = Math.min(100, Math.round((readingProgressCount / totalVersesInCount) * 100));

  // Memoized pages for 3D Pothi Flip Book Mode with hand touch/drag page-turning in sober colors
  const pothiPages: PothiPageData[] = useMemo(() => {
    return versesList.map((verse, idx) => ({
      id: verse.id,
      angNumber: idx + 1,
      granthTitle: currentSection.title[language] || currentSection.title.hi,
      chapterTitle: getVerseTypeLabel(verse.type || 'doha', verse.id, language),
      originalLines: {
        hi: verse.lines.hi,
        pb: verse.lines.pb,
        en: verse.lines.en,
      },
      bhavarth: verse.bhavarth ? {
        hi: verse.bhavarth.hi,
        pb: verse.bhavarth.pb,
        en: verse.bhavarth.en,
      } : undefined
    }));
  }, [versesList, currentSection, language]);

  return (
    <div
      ref={containerRef}
      id="nitnem-gutka-reader-root"
      className={`min-h-screen transition-colors duration-300 ${currentThemeStyle.wrapperBg} ${
        isZenMode || isFullscreen
          ? 'fixed inset-0 z-50 overflow-y-auto p-0' 
          : viewMode === 'reading' 
          ? 'w-full p-0 pb-36 sm:pb-40' 
          : 'rounded-3xl p-3 sm:p-6 pb-28'
      }`}
    >
      {/* Top Return Bar for Zen Mode - Centered so it never covers the Settings icon */}
      {isZenMode && (
        <button
          type="button"
          onClick={() => {
            setIsZenMode(false);
            if (typeof document !== 'undefined' && document.fullscreenElement) {
              document.exitFullscreen().catch(() => {});
            }
            window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
          }}
          className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] min-h-[44px] px-4 py-2 rounded-full bg-[#8B2500] hover:bg-[#701D00] text-white text-xs sm:text-sm font-bold font-serif shadow-2xl transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 border border-white/40 whitespace-nowrap"
          title={language === 'pb' ? 'ਆਮ ਸਕ੍ਰੀਨ (ਵਾਪਸ ਆਓ)' : language === 'en' ? 'Normal Screen (Return)' : 'सामान्य स्क्रीन (वापस आएं)'}
        >
          <Minimize2 size={16} />
          <span>
            {language === 'pb'
              ? 'ਆਮ ਸਕ੍ਰੀਨ (ਵਾਪਸ ਆਓ)'
              : language === 'en'
              ? 'Normal Screen (Return)'
              : 'सामान्य स्क्रीन (वापस आएं)'}
          </span>
        </button>
      )}
      {/* High-Contrast Sacred Header: Shown on Index Selection OR Fullscreen Mode (Removed duplicate maroon bar during normal reading) */}
      {(viewMode === 'selection' || isFullscreen) && (
      <div className={`bg-gradient-to-r from-[#7C1D00]/95 via-[#8B2500]/95 to-[#9A3412]/95 backdrop-blur-md text-white px-2 py-2 sm:px-4 sm:py-2.5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 sm:gap-3 shadow-md ${isFullscreen ? 'sticky top-0 z-30' : 'relative z-20 rounded-t-2xl'} border-b border-amber-300/25 w-full`}>
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1">
          {viewMode === 'reading' ? (
            <button
              type="button"
              onClick={() => {
                if (isPureVaniMode) {
                  exitPureVaniMode(true);
                } else {
                  stopAllAudioPlayback();
                }
                setViewMode('selection');
                setIsAutoPlaying(false);
              }}
              className="min-h-[38px] min-w-[38px] sm:min-h-[40px] px-2 sm:px-2.5 py-1.5 bg-white/15 hover:bg-white/25 rounded-xl transition cursor-pointer font-bold text-xs flex items-center justify-center gap-1 shrink-0 whitespace-nowrap"
              aria-label={language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}
              title={language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}
            >
              <ArrowLeft size={18} className="shrink-0" />
              <span className="hidden sm:inline">{language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}</span>
            </button>
          ) : null}
          <div 
            onClick={viewMode === 'reading' ? scrollToContainerTop : undefined}
            className={`min-w-0 flex-1 overflow-hidden ${viewMode === 'reading' ? 'cursor-pointer select-none' : ''}`}
          >
            <h1 className="text-xs sm:text-base md:text-xl font-bold font-serif leading-tight truncate">
              {viewMode === 'reading' 
                ? (currentSection.title[language] || currentSection.title.hi) 
                : getLocalizedBookTitle(language)
              }
            </h1>
            {viewMode === 'selection' && (
              <p className="hidden md:block text-[0.6875rem] opacity-90 font-serif mt-0.5 truncate">
                {language === 'pb' 
                  ? 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿੱਤ ਪਾਠ, ਅਸਤੁਤੀ, ਆਰਤੀ ਅਤੇ ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ' 
                  : language === 'en' 
                  ? 'Satguru Kabir Saheb Daily Prayers, Praises, Aarti & Sacred Texts' 
                  : 'सतगुरु कबीर साहेब नित्य पाठ, अस्तुति, आरती एवं ग्रन्थ संग्रह'}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto">
          {/* Sirf Vani (Auto-Scroll + Audio) Mode */}
          <button
            type="button"
            onClick={handleTogglePureVaniMode}
            className={`min-h-[38px] sm:min-h-[40px] px-2 sm:px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 text-[11px] sm:text-xs font-bold font-serif active:scale-95 whitespace-nowrap shrink-0 ${
              isPureVaniMode
                ? 'bg-white text-amber-800 shadow-md ring-2 ring-white/70'
                : 'bg-white/18 hover:bg-white/28 text-white border border-white/25'
            }`}
            title={
              language === 'pb'
                ? 'ਸਿਰਫ਼ ਬਾਣੀ (ਆਟੋ-ਸਕ੍ਰੌਲ + ਆਡੀਓ) ਮੋਡ'
                : language === 'en'
                ? 'Pure Vani (Auto-Scroll + Audio) Mode'
                : 'सिर्फ वाणी (ऑटो-स्क्रॉल + ऑडियो) मोड'
            }
            aria-pressed={isPureVaniMode}
          >
            <Volume2 size={15} className="shrink-0" />
            <span>
              {language === 'pb'
                ? (isPureVaniMode ? 'ਸਿਰਫ਼ ਬਾਣੀ ✓' : 'ਸਿਰਫ਼ ਬਾਣੀ')
                : language === 'en'
                ? (isPureVaniMode ? 'Pure Vani ✓' : 'Pure Vani')
                : (isPureVaniMode ? 'सिर्फ वाणी ✓' : 'सिर्फ वाणी')}
            </span>
          </button>

          {/* Full-Screen Toggle Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`min-h-[38px] min-w-[38px] sm:min-h-[40px] sm:min-w-0 px-2 sm:px-2.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 text-xs font-bold font-serif active:scale-95 whitespace-nowrap shrink-0 ${
              isFullscreen
                ? 'bg-white text-amber-800 shadow-md ring-2 ring-white/60'
                : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
            }`}
            title={
              isFullscreen
                ? (language === 'pb' ? 'ਪੂਰੀ ਸਕਰੀਨ ਬੰਦ ਕਰੋ (Exit Full Screen)' : language === 'en' ? 'Exit Full Screen' : 'सामान्य स्क्रीन (Exit Full Screen)')
                : (language === 'pb' ? 'ਪੂਰੀ ਸਕਰੀਨ (Full Screen)' : language === 'en' ? 'Full Screen' : 'पूर्ण स्क्रीन (Full Screen)')
            }
            aria-label="Toggle Full-Screen"
          >
            {isFullscreen ? <Minimize2 size={16} className="shrink-0" /> : <Maximize2 size={16} className="shrink-0" />}
            <span className="hidden lg:inline">
              {isFullscreen
                ? (language === 'pb' ? 'ਆਮ ਸਕ੍ਰੀਨ' : language === 'en' ? 'Exit Full' : 'सामान्य स्क्रीन')
                : (language === 'pb' ? 'ਪੂਰੀ ਸਕਰੀਨ' : language === 'en' ? 'Full Screen' : 'पूर्ण स्क्रीन')
              }
            </span>
          </button>

          {/* Audio Resonance Toggle */}
          <button
            type="button"
            onClick={() => handleToggleBackgroundDhun()}
            className={`min-w-[38px] min-h-[38px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-xl transition cursor-pointer shrink-0 ${isBackgroundDhunPlaying ? 'bg-white text-amber-700' : 'bg-white/10 hover:bg-white/20 text-white'}`}
            title={rt.bgDhun}
            aria-label="Toggle Background Dhun"
          >
            {isBackgroundDhunPlaying ? <Music size={17} /> : <VolumeX size={17} />}
          </button>

          {/* Smart Glossing Tool Button */}
          {!isPureVaniMode && (
            <button
              type="button"
              onClick={() => setShowAllGlossaryModal(true)}
              className="hidden sm:flex min-w-[40px] min-h-[40px] rounded-xl transition cursor-pointer hover:bg-white/20 text-white items-center justify-center shrink-0"
              title={language === 'pb' ? 'ਸਮਾਰਟ ਸ਼ਬਦਾਵਲੀ ਟੂਲ (Smart Glossing Tool)' : language === 'en' ? 'Smart Glossing Tool' : 'स्मार्ट शब्दावली टूल (Smart Glossing Tool)'}
            >
              <Sparkles size={18} className="text-amber-200" />
            </button>
          )}
        </div>
      </div>
      )}

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${viewMode === 'selection' ? 'p-4 sm:p-6' : 'p-0'}`}>
        {viewMode === 'selection' ? (
          /* ========================================================================= */
          /* SELECTION VIEW: Index First with V-shape Collapsible Controls             */
          /* ========================================================================= */
          <div className="w-full mx-auto space-y-6">

            {/* 1. SMART TIME & PURNIMA RECOMMENDATION + DAILY HAZIRI STATUS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                  color: theme.textPrimary,
                }}
                className="lg:col-span-2 border-2 rounded-3xl p-4 sm:p-5 shadow-md backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      style={{
                        backgroundColor: theme.buttonPrimaryBg,
                        color: theme.buttonPrimaryText,
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6875rem] font-bold font-serif whitespace-nowrap shadow-2xs"
                    >
                      <Sparkles size={12} />
                      {smartRecommendation.badge[language] || smartRecommendation.badge.hi}
                    </span>
                    {haziriMarkedToday && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 text-[0.6875rem] font-bold font-serif whitespace-nowrap">
                        <CheckCircle2 size={12} />
                        {language === 'pb'
                          ? `ਅੱਜ ਦੀ ਹਾਜ਼ਰੀ ਪੂਰੀ (${haziriStreak} ਦਿਨ)`
                          : language === 'en'
                          ? `Today's Haziri Done (${haziriStreak}d Streak)`
                          : `आज की हाज़िरी पूर्ण (${haziriStreak} दिन)`}
                      </span>
                    )}
                  </div>
                  <h3 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-xl leading-snug">
                    {smartRecommendation.title[language] || smartRecommendation.title.hi}
                  </h3>
                  <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed">
                    {smartRecommendation.subtitle[language] || smartRecommendation.subtitle.hi}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setSelectedGranthCategory(smartRecommendation.primaryCategoryId);
                    handleSelectSection(smartRecommendation.primarySectionId);
                    setViewMode('reading');
                  }}
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="min-h-[44px] px-4 py-2.5 rounded-2xl font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:opacity-95 transition active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <BookOpen size={16} />
                  <span>
                    {language === 'pb' ? 'ਹੁਣੇ ਪਾਠ ਕਰੋ' : language === 'en' ? 'Start Suggested Path' : 'अभी पाठ आरंभ करें'}
                  </span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {smartRecommendation.isPurnimaToday ? (
                <div className="bg-gradient-to-br from-indigo-950/92 via-amber-950/90 to-amber-900/90 backdrop-blur-md text-amber-50 border-2 border-amber-400/70 rounded-3xl p-4 sm:p-5 shadow-md flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[0.6875rem] font-black font-serif whitespace-nowrap">
                      🌕 {language === 'pb' ? 'ਪੂਰਨਮਾਸ਼ੀ ਵਿਸ਼ੇਸ਼' : language === 'en' ? 'Purnima Special' : 'पूर्णिमा विशेष'}
                    </span>
                    <h4 className="font-serif font-black text-base text-amber-100">
                      {language === 'pb' ? '੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ' : language === 'en' ? '4. Poono Mahatmya Path' : '४. पूनो महात्म्य पाठ'}
                    </h4>
                    <p className="text-xs font-serif text-amber-100/90">
                      {smartRecommendation.purnimaTitle?.[language] || smartRecommendation.purnimaTitle?.hi}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setSelectedGranthCategory('poonam-mahatmya');
                      handleSelectSection('poonam-vandana');
                      setViewMode('reading');
                    }}
                    className="min-h-[44px] w-full px-4 py-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-serif font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer whitespace-nowrap"
                  >
                    <span>{language === 'pb' ? 'ਪੂਨੋ ਪਾਠ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Poono Mahatmya' : 'पूनो महात्म्य खोलें'}</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  id="nitnem-haziri-sankalp-card"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setHaziriModalState(getHaziriState());
                    setShowNitnemHaziriModal(true);
                  }}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="border-2 rounded-3xl p-4 sm:p-5 shadow-sm backdrop-blur-md flex flex-col justify-between gap-3 text-left cursor-pointer hover:border-amber-500/70 hover:shadow-md active:scale-[0.99] transition-all w-full"
                >
                  <div className="space-y-1">
                    <span style={{ color: theme.accentGold }} className="text-[0.6875rem] font-mono font-bold uppercase tracking-wider block">
                      {language === 'pb' ? 'ਸਤਗੁਰੂ ਨਿਤਨੇਮ ਗੁਟਕਾ' : language === 'en' ? 'Complete 7-Section Gutka' : 'सम्पूर्ण ७ खंड गुटका साहेब'}
                    </span>
                    <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm sm:text-base">
                      {haziriMarkedToday
                        ? (language === 'pb' ? 'ਅੱਜ ਦਾ ਨਿਤਨੇਮ ਸੰਪੰਨ' : language === 'en' ? 'Daily Swadhyay Marked' : 'आज का नित्य नियम पूर्ण')
                        : (language === 'pb' ? 'ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਬਾਕੀ' : language === 'en' ? 'Daily Nitnem Pending' : 'नितनेम हाज़िरी संकल्प')}
                    </h4>
                    <p style={{ color: theme.textSecondary }} className="text-xs font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਪਾਠ ਦੇ ਅੰਤ ਵਿਚ ਆਪਣੀ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ।'
                        : language === 'en'
                        ? 'Complete any path to record your daily Haziri & petal blessing.'
                        : 'किसी भी प्रमुख पाठ की समाप्ति पर पावन हाज़िरी दर्ज करें।'}
                    </p>
                  </div>
                  <div style={{ color: theme.accentGold, borderColor: theme.cardBorder }} className="flex items-center justify-between text-xs font-serif font-bold pt-2 border-t w-full">
                    <span>🔥 {haziriStreak} {language === 'pb' ? 'ਦਿਨ ਲੜੀ' : language === 'en' ? 'Day Streak' : 'दिन निरंतर'}</span>
                    <span className="inline-flex items-center gap-1 underline decoration-dotted">
                      {haziriMarkedToday ? '🙏 ✓' : (language === 'pb' ? 'ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open' : 'खोलें')} →
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* 2. MASTER INDEX HEADER BAR (पावन अनुक्रमणिका व सूची) WITH V-SHAPE TOGGLE */}
            <div className="bg-gradient-to-r from-[#7C1D00]/95 via-[#8B2500]/95 to-[#9A3412]/95 backdrop-blur-md text-white rounded-3xl p-4 sm:p-5 shadow-lg space-y-3 border border-amber-300/25">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-serif font-black text-lg text-amber-100 shadow-inner">
                    📖
                  </div>
                  <div>
                    <h2 className="font-serif font-black text-lg sm:text-2xl text-white leading-tight">
                      {language === 'pb' ? 'ਪਾਵਨ ਨਿਤਨੇਮ ਅਨੁਕ੍ਰਮਣਿਕਾ ਤੇ ਸੂਚੀ' : language === 'en' ? 'Sacred Nitnem Index & Chapters' : 'पावन नितनेम अनुक्रमणिका व सूची'}
                    </h2>
                    <p className="text-xs text-amber-100 font-serif">
                      {language === 'pb' ? 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ (੭ ਭਾਗ)' : language === 'en' ? 'Satguru Kabir Saheb Nitnem Gutka Saheb (7 Sacred Sections)' : 'सतगुरु कबीर साहेब नितनेम गुटका साहेब (७ पावन खंड)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Collapse / Expand All Button */}
                  {!isIndexSectionCollapsed && (
                    <button
                      type="button"
                      onClick={toggleAllIndexSections}
                      className="min-h-[44px] px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/30 text-xs font-bold font-serif transition cursor-pointer shadow-2xs flex items-center gap-1.5 whitespace-nowrap"
                      title={language === 'pb' ? 'ਸਾਰੇ ਅਧਿਆਇ ਖੋਲ੍ਹੋ/ਸਮੇਟੋ' : language === 'en' ? 'Toggle All Chapters' : 'सभी अध्याय खोलें/समेटें'}
                    >
                      <span>
                        {filteredGranthSuchi.every(s => collapsedIndexSections[s.section_id])
                          ? (language === 'pb' ? 'ਸਾਰੇ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Expand All' : 'सभी खोलें')
                          : (language === 'pb' ? 'ਸਾਰੇ ਸਮੇਟੋ' : language === 'en' ? 'Collapse All' : 'सभी समेटें')}
                      </span>
                    </button>
                  )}

                  {/* V-Shape Master Index Section Toggle (अनुक्रमणिका बंद करें / खोलें) */}
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setIsIndexSectionCollapsed(!isIndexSectionCollapsed);
                    }}
                    className="min-h-[44px] px-3.5 py-1.5 rounded-xl bg-white text-[#7C1D00] border border-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer whitespace-nowrap"
                    title={isIndexSectionCollapsed ? 'ਅਨੁਕ੍ਰਮਣਿਕਾ ਖੋਲ੍ਹੋ (Open Index)' : 'ਅਨੁਕ੍ਰਮਣਿਕਾ ਬੰਦ ਕਰੋ (Close Index)'}
                  >
                    {isIndexSectionCollapsed ? (
                      <>
                        <ChevronDown className="w-4 h-4 text-[#8B2500] animate-bounce" />
                        <span>{language === 'pb' ? 'ਅਨੁਕ੍ਰਮਣਿਕਾ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Show Index' : 'अनुक्रमणिका खोलें'}</span>
                      </>
                    ) : (
                      <>
                        <ChevronUp className="w-4 h-4 text-[#8B2500]" />
                        <span>{language === 'pb' ? 'ਅਨੁਕ੍ਰਮਣਿਕਾ ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close Index' : 'अनुक्रमणिका बंद करें'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Category Tabs in Selection View (Visible when Index is open) */}
              {!isIndexSectionCollapsed && (
                <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 scrollbar-hide border-t border-white/20">
                  {MAJOR_GRANTH_CATEGORIES.map((cat) => {
                    const isSmartSuggestedCat =
                      cat.id === smartRecommendation.primaryCategoryId ||
                      (smartRecommendation.isPurnimaToday && cat.id === 'poonam-mahatmya');
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border cursor-pointer flex items-center gap-1.5 ${
                          selectedGranthCategory === cat.id
                            ? 'bg-white text-[#7C1D00] font-black shadow-md border-white'
                            : isSmartSuggestedCat
                            ? 'bg-amber-300/25 hover:bg-amber-300/35 text-amber-50 border-amber-200/70'
                            : 'bg-white/15 hover:bg-white/25 text-white border-white/20'
                        }`}
                      >
                        {isSmartSuggestedCat && <span>{cat.id === 'poonam-mahatmya' ? '🌕' : '✨'}</span>}
                        <span>{cat.title[language] || cat.title.hi}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. EXACT 7-SECTION TRADITIONAL GUTKA INDEX WITH NESTED SUB-CHAPTERS */}
            {!isIndexSectionCollapsed && (
              <div className="space-y-4">
                {filteredGranthSuchi.map((section: GranthSuchiSection) => {
                  const sectionTitle = getLocalizedChapterTitle(section, language);
                  const traditionalOutline: NitnemOutlineChapter[] =
                    TRADITIONAL_GUTKA_OUTLINES[section.major_category_id] || [];
                  const hasOutlineChapters = traditionalOutline.length > 0;
                  const isSecCollapsed = !!collapsedIndexSections[section.section_id];
                  const isRecommendedSec = section.major_category_id === smartRecommendation.primaryCategoryId;
                  const isPurnimaSec = smartRecommendation.isPurnimaToday && section.major_category_id === 'poonam-mahatmya';

                  return (
                    <div
                      key={section.section_id}
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: (isPurnimaSec || isRecommendedSec) ? theme.accentGold : theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className={`rounded-3xl p-4 sm:p-5 shadow-md hover:shadow-lg backdrop-blur-md transition-all space-y-3 border-2 ${
                        (isPurnimaSec || isRecommendedSec) ? 'ring-2 ring-amber-500/25' : ''
                      }`}
                    >
                      {/* Section Main Header with V-Shape Chevron Toggle */}
                      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between gap-2 border-b pb-2.5">
                        <div
                          onClick={() => toggleSingleIndexSection(section.section_id)}
                          className="flex items-center gap-3 cursor-pointer group min-w-0 flex-1 pr-2"
                        >
                          <div
                            style={{
                              backgroundColor: theme.buttonPrimaryBg,
                              color: theme.buttonPrimaryText,
                            }}
                            className="w-10 h-10 rounded-2xl flex items-center justify-center font-serif font-black text-sm shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                          >
                            {section.section_id}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-lg leading-tight transition-colors truncate">
                                {sectionTitle}
                              </h3>
                              {isRecommendedSec && (
                                <span
                                  style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon, borderColor: theme.accentGold }}
                                  className="px-2 py-0.5 rounded-full border text-[0.625rem] font-bold font-serif whitespace-nowrap"
                                >
                                  ✨ {language === 'pb' ? 'ਨਿਰਧਾਰਤ ਪਾਠ' : language === 'en' ? 'Recommended Now' : 'अभी निर्धारित'}
                                </span>
                              )}
                              {isPurnimaSec && (
                                <span
                                  style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon, borderColor: theme.accentGold }}
                                  className="px-2 py-0.5 rounded-full border text-[0.625rem] font-bold font-serif whitespace-nowrap"
                                >
                                  🌕 {language === 'pb' ? 'ਪੂਰਨਮਾਸ਼ੀ' : language === 'en' ? 'Purnima Today' : 'पूर्णिमा विशेष'}
                                </span>
                              )}
                            </div>
                            <span style={{ color: theme.textSecondary }} className="text-[0.6875rem] font-mono block truncate">
                              {hasOutlineChapters && (traditionalOutline.length > 1 || (traditionalOutline[0]?.children?.length ?? 0) > 0)
                                ? (language === 'pb'
                                    ? `${traditionalOutline.length} ਮੁੱਖ ਅਧਿਆਇ (${section.sub_chapters.length} ਪਾਠ)`
                                    : language === 'en'
                                    ? `${traditionalOutline.length} Chapters (${section.sub_chapters.length} Parts)`
                                    : `${traditionalOutline.length} मुख्य अध्याय (${section.sub_chapters.length} पाठ)`)
                                : (language === 'pb' ? 'ਸੰਪੂਰਨ ਪਾਠ' : language === 'en' ? 'Complete Recitation' : 'सम्पूर्ण पाठ')}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              const firstTarget =
                                traditionalOutline[0]?.sectionId ||
                                resolveNitnemSectionId({ id: `${section.section_id}_1`, hindi: '', punjabi: '' }, section);
                              handleSelectSection(firstTarget);
                              setViewMode('reading');
                            }}
                            style={{
                              backgroundColor: theme.buttonPrimaryBg,
                              color: theme.buttonPrimaryText,
                            }}
                            className="min-h-[44px] px-3 py-1.5 rounded-xl font-serif font-bold text-xs flex items-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer whitespace-nowrap"
                          >
                            <BookOpen size={14} />
                            <span className="hidden sm:inline">
                              {language === 'pb' ? 'ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? 'Start Path' : 'पाठ आरंभ'}
                            </span>
                          </button>

                          {/* V-Shape Individual Section Collapse Button */}
                          <button
                            type="button"
                            onClick={() => toggleSingleIndexSection(section.section_id)}
                            style={{
                              backgroundColor: theme.stepActiveBg,
                              color: theme.sacredMaroon,
                              borderColor: theme.accentGold,
                            }}
                            className="min-w-[44px] min-h-[44px] p-2 rounded-xl border hover:opacity-90 transition cursor-pointer flex items-center justify-center"
                            title={isSecCollapsed ? 'ਖੋਲ੍ਹੋ (Expand)' : 'ਸਮੇਟੋ (Collapse)'}
                            aria-label="Toggle Section"
                          >
                            {isSecCollapsed ? (
                              <ChevronDown size={18} />
                            ) : (
                              <ChevronUp size={18} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Chapters & Sub-Chapters List (Visible when section is expanded) */}
                      {!isSecCollapsed && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                          {traditionalOutline.map((chapter) => {
                            const chapterTitle =
                              language === 'pb'
                                ? chapter.punjabi
                                : language === 'en'
                                ? chapter.english
                                : chapter.hindi;
                            const chapterSubtitle =
                              language === 'pb'
                                ? chapter.subtitle_pb
                                : language === 'en'
                                ? chapter.subtitle_en
                                : chapter.subtitle_hi;
                            const targetSectionId =
                              chapter.sectionId ||
                              chapter.children?.[0]?.section_id ||
                              resolveNitnemSectionId({ id: `${section.section_id}_1`, hindi: '', punjabi: '' }, section);
                            const matchingSection = nitnemSections.find(s => s.id === targetSectionId) || currentSection;
                            const isMadhyahnHighlighted =
                              smartRecommendation.prahar === 'noon' && targetSectionId === 'gayatri-madhyahan';

                            return (
                              <div
                                key={`${section.section_id}-${chapter.number}-${targetSectionId}`}
                                onClick={() => {
                                  handleSelectSection(targetSectionId);
                                  setViewMode('reading');
                                }}
                                style={{
                                  backgroundColor: isMadhyahnHighlighted ? theme.stepActiveBg : theme.bgSecondary,
                                  borderColor: isMadhyahnHighlighted ? theme.accentGold : theme.cardBorder,
                                  color: theme.textPrimary,
                                }}
                                className="rounded-2xl p-3 flex flex-col justify-between gap-2.5 transition-all group cursor-pointer border backdrop-blur-sm shadow-2xs hover:shadow-sm"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                                    <span
                                      style={{
                                        backgroundColor: theme.stepActiveBg,
                                        color: theme.sacredMaroon,
                                        borderColor: theme.cardBorder,
                                      }}
                                      className="text-[0.6875rem] font-mono font-bold px-2 py-0.5 rounded-lg border shrink-0"
                                    >
                                      {chapter.number}
                                    </span>
                                    <div className="min-w-0">
                                      <h4 style={{ color: theme.textPrimary }} className="font-serif font-bold text-xs sm:text-sm truncate">
                                        {chapterTitle}
                                      </h4>
                                      {chapterSubtitle && (
                                        <p style={{ color: theme.textSecondary }} className="text-[0.6875rem] font-serif opacity-80 truncate mt-0.5">
                                          ({chapterSubtitle})
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1 shrink-0">
                                    <button
                                      type="button"
                                      onClick={async (e) => {
                                        e.stopPropagation();
                                        handleSelectSection(targetSectionId);
                                        setViewMode('reading');
                                        const loadedSec =
                                          !matchingSection || String(matchingSection.verses?.[0]?.id ?? '').includes('-placeholder-')
                                            ? await loadNitnemSectionById(targetSectionId)
                                            : matchingSection;
                                        if (loadedSec?.verses && loadedSec.verses.length > 0) {
                                          setTimeout(() => handlePlayVoice(loadedSec.verses[0]), 300);
                                        }
                                      }}
                                      style={{
                                        backgroundColor: theme.buttonPrimaryBg,
                                        color: theme.buttonPrimaryText,
                                      }}
                                      className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer shadow-2xs"
                                      title={language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण'}
                                      aria-label={`Play ${chapterTitle}`}
                                    >
                                      <Play size={13} className="ml-0.5" />
                                    </button>
                                    <ChevronRight size={15} style={{ color: theme.accentGold }} className="group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </div>

                                {/* Nested Sub-Items (e.g., गुरु महिमा १/२/शतक सार, गौड़ी १..५, अष्टक १..३, आरती १..४, विनती १..२) */}
                                {chapter.children && chapter.children.length > 0 && (
                                  <div style={{ borderColor: theme.cardBorder }} className="flex flex-wrap gap-1.5 pt-2 border-t">
                                    {chapter.children.map((child) => {
                                      const childTitle = getLocalizedSubChapterTitle(child, language);
                                      const childSecId = resolveNitnemSectionId(child, section);
                                      return (
                                        <button
                                          key={child.id}
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelectSection(childSecId);
                                            setViewMode('reading');
                                          }}
                                          style={{
                                            backgroundColor: theme.cardBg,
                                            color: theme.sacredMaroon,
                                            borderColor: theme.cardBorder,
                                          }}
                                          className="min-h-[36px] px-2.5 py-1 rounded-xl border text-[0.6875rem] font-serif font-bold hover:brightness-95 transition cursor-pointer"
                                        >
                                          {childTitle}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* 3. QUICK SADHANA & SPECIAL PANTHIC VAULTS (PLACED BELOW INDEX) */}
            <div style={{ borderColor: theme.cardBorder }} className="pt-3 border-t space-y-4">
              <div className="flex items-center justify-between">
                <h3 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-sm flex items-center gap-1.5">
                  <Sparkles size={16} style={{ color: theme.accentGold }} />
                  <span>{language === 'pb' ? 'ਤਵਰਿਤ ਸਾਧਨਾ ਤੇ ਪੰਥਕ ਸੇਵਾਵਾਂ' : language === 'en' ? 'Quick Sadhana & Panthic Vaults' : 'त्वरित साधना एवं पंथिक सेवाएं'}</span>
                </h3>
              </div>

              {/* Quick Sadhana Bar: Resume Last Read & Mala Counter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Last Read Resume Card */}
                {lastReadPosition ? (
                  <div
                    onClick={handleResumeLastRead}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.accentGold,
                      color: theme.textPrimary,
                    }}
                    className="border-2 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:shadow-md backdrop-blur-md transition shadow-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: theme.buttonPrimaryBg,
                          color: theme.buttonPrimaryText,
                        }}
                        className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                      >
                        <BookmarkCheck size={20} />
                      </div>
                      <div>
                        <span style={{ color: theme.accentGold }} className="text-[0.625rem] font-bold uppercase tracking-wider block">
                          {language === 'pb' ? 'ਪਿਛਲਾ ਪਾਠ ਜਾਰੀ ਰੱਖੋ' : language === 'en' ? 'Resume Last Read' : 'पिछला पाठ जारी रखें'}
                        </span>
                        <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm line-clamp-1">
                          {lastReadPosition.title} • {language === 'pb' ? `ਪੰਨਾ ${lastReadPosition.verseIndex + 1}` : language === 'en' ? `Page ${lastReadPosition.verseIndex + 1}` : `पृष्ठ ${lastReadPosition.verseIndex + 1}`}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight size={18} style={{ color: theme.sacredMaroon }} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      if (nitnemSections[0]?.id) {
                        handleSelectSection(nitnemSections[0].id);
                        setViewMode('reading');
                      }
                    }}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.accentGold,
                      color: theme.textPrimary,
                    }}
                    className="border-2 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:shadow-md backdrop-blur-md transition shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: theme.buttonPrimaryBg,
                          color: theme.buttonPrimaryText,
                        }}
                        className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      >
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <span style={{ color: theme.accentGold }} className="text-[0.625rem] font-bold uppercase tracking-wider block">
                          {language === 'pb' ? 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਨਿਤਨੇਮ' : language === 'en' ? 'Daily Nitnem' : 'अमृतवेला नितनेम'}
                        </span>
                        <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm">
                          {nitnemSections[0]?.title[language] || nitnemSections[0]?.title.hi || getLocalizedBookTitle(language)}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight size={18} style={{ color: theme.sacredMaroon }} className="shrink-0" />
                  </div>
                )}

                {/* Digital Jaap Mala Quick Button */}
                <div
                  onClick={() => setShowMalaModal(true)}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="border-2 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:border-emerald-500 backdrop-blur-md transition shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-xl">📿</span>
                    </div>
                    <div>
                      <span className="text-[0.625rem] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">
                        {language === 'pb' ? 'ਸਿਮਰਨ ਸਾਧਨਾ' : language === 'en' ? 'Simran Sadhana' : 'सिमरन साधना'}
                      </span>
                      <h4 style={{ color: theme.textPrimary }} className="font-serif font-black text-sm">
                        {language === 'pb' ? 'ਜਾਪ ਮਾਲਾ ਕਾਊਂਟਰ (੧੦੮ ਮਣਕੇ)' : language === 'en' ? 'Jaap Mala Counter (108 Beads)' : 'जाप माला काउंटर (१०८ मनके)'}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-emerald-700 dark:text-emerald-300 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>

              {/* Specialized Panthic Vaults: Acharya Parampara & Chouka-Aarti Vidhi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Acharya Parampara Itihas Card (Single Canonical Card) */}
                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setShowAcharyaModal(true);
                  }}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="border-2 rounded-3xl p-4 flex items-center justify-between gap-3 cursor-pointer hover:border-amber-500/70 hover:shadow-md active:scale-[0.99] backdrop-blur-md transition-all shadow-xs group text-left w-full"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      style={{
                        backgroundColor: theme.buttonPrimaryBg,
                        color: theme.buttonPrimaryText,
                      }}
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0"
                    >
                      <span className="text-lg">👑</span>
                    </div>
                    <div className="min-w-0">
                      <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm truncate">
                        {language === 'pb' ? 'ਆਚਾਰੀਆ ਪਰੰਪਰਾ ਇਤਿਹਾਸ' : language === 'en' ? 'Acharya Parampara History' : 'आचार्य परंपरा इतिहास'}
                      </h4>
                      <p style={{ color: theme.textSecondary }} className="text-xs font-serif font-semibold line-clamp-2 mt-0.5">
                        {language === 'pb'
                          ? 'ਦਾਮਾਖੇੜਾ ਪਾਵਨ ਗੱਦੀ ਦੀ ਆਚਾਰੀਆ ਪਰੰਪਰਾ'
                          : language === 'en'
                          ? 'Lineage of Damakheda Gaddi Acharyas'
                          : 'दामाखेड़ा पावन गद्दी की आचार्य परंपरा'}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{ color: theme.accentGold }}
                    className="text-xs font-serif font-bold whitespace-nowrap underline decoration-dotted shrink-0"
                  >
                    {language === 'pb' ? 'ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open' : 'खोलें'} →
                  </span>
                </button>

                {/* Compact Summary Card: Chouka-Aarti Vidhi & Satvik Niyam (Modal-Style like Nitnem Haziri Sankalp) */}
                <button
                  type="button"
                  id="nitnem-chouka-aarti-card"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setShowChoukaVidhiModal(true);
                  }}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="border-2 rounded-3xl p-4 flex items-center justify-between gap-3 cursor-pointer hover:border-amber-500/70 hover:shadow-md active:scale-[0.99] backdrop-blur-md transition-all shadow-xs group text-left w-full"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      style={{
                        backgroundColor: theme.buttonPrimaryBg,
                        color: theme.buttonPrimaryText,
                      }}
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0"
                    >
                      <span className="text-lg">🪷</span>
                    </div>
                    <div className="min-w-0">
                      <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm truncate">
                        {language === 'pb'
                          ? 'ਚੌਕਾ-ਆਰਤੀ: ਪਾਵਨ ਵਿਧੀ ਅਤੇ ਸਾਤਵਿਕ ਨਿਯਮ'
                          : language === 'en'
                          ? 'Chouka Aarti: Sacred Vidhi & Holy Rules'
                          : 'चौका-आरती: पावन विधि एवं सात्विक नियम'}
                      </h4>
                      <p style={{ color: theme.textSecondary }} className="text-xs font-serif font-semibold line-clamp-2 mt-0.5">
                        {language === 'pb'
                          ? 'ਪੰਥਕ ਮਰਿਆਦਾ, ਚੌਕਾ ਆਰਤੀ ਤੇ ਰੂਹਾਨੀ ਜਿਗਿਆਸਾ ਸਮਾਧਾਨ'
                          : language === 'en'
                          ? 'Panthic Q&A regarding rituals and Chouka Vidhi'
                          : 'पंथिक मर्यादा, चौका आरती एवं आध्यात्मिक जिज्ञासा समाधान'}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{ color: theme.accentGold }}
                    className="text-xs font-serif font-bold whitespace-nowrap underline decoration-dotted shrink-0"
                  >
                    {language === 'pb' ? 'ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open' : 'खोलें'} →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* READING VIEW: Actual Text Content (100% Full Mobile Responsive Layout)    */
          /* ========================================================================= */
          <div className="w-full max-w-6xl mx-auto px-1 sm:px-4 relative flex flex-col">
            
            {/* Divya Shvas Chakra overlay when active */}
            {showBreathingGuide && (
              <div className="my-2 p-3 bg-amber-500/10 dark:bg-amber-500/5 rounded-3xl border-2 border-amber-400/50 flex flex-col items-center justify-center gap-2 animate-pulse shadow-sm shrink-0">
                <h4 className="font-serif font-black text-xs text-amber-950 dark:text-amber-200">
                  🌀 {language === 'pb' ? 'ਦਿਵਯ ਸ਼ਵਾਸ ਚੱਕਰ (ਪ੍ਰਾਣਾਯਾਮ ਸਾਧਨਾ)' : language === 'en' ? 'Divine Breathing Cycle' : 'दिव्य श्वास चक्र (प्राणायाम साधना)'}
                </h4>
                <div className="flex items-center gap-4">
                  {/* Outer circle */}
                  <div className={`w-14 h-14 rounded-full border-4 border-amber-500 flex items-center justify-center transition-all duration-1000 ${
                    breathPhase === 'inhale' ? 'scale-110 bg-amber-500/20' : 
                    breathPhase === 'hold' ? 'scale-110 bg-amber-500/40' : 
                    breathPhase === 'exhale' ? 'scale-95 bg-transparent' : 'scale-90 bg-black/10'
                  }`}>
                    <span className="text-[0.5625rem] font-black uppercase text-amber-950 dark:text-amber-200">
                      {breathPhase === 'inhale'
                        ? (language === 'pb' ? 'ਸੁਆਸ ਭਰੋ' : language === 'en' ? 'Inhale' : 'श्वास भरें')
                        : breathPhase === 'hold'
                        ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Hold' : 'रोकें')
                        : breathPhase === 'exhale'
                        ? (language === 'pb' ? 'ਛੱਡੋ' : language === 'en' ? 'Exhale' : 'छोड़ें')
                        : (language === 'pb' ? 'ਬਾਹਰ ਰੋਕੋ' : language === 'en' ? 'Hold Out' : 'बाहर रोकें')}
                    </span>
                  </div>
                  <p className="text-[0.6875rem] font-serif font-bold text-gray-700 dark:text-gray-300 max-w-md leading-relaxed text-left">
                    {breathPhase === 'inhale'
                      ? (language === 'pb' ? 'ਨਾਸਕਾ ਰਾਹੀਂ ਪਾਵਨ ਸੁਆਸ ਅੰਦਰ ਭਰੋ।' : language === 'en' ? 'Slowly inhale sacred breath.' : 'नासिका द्वारा पावन श्वास धीरे-धीरे अंदर भरें।')
                      : breathPhase === 'hold'
                      ? (language === 'pb' ? 'ਸੁਆਸ ਅੰਦਰ ਰੋਕ ਕੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਕਰੋ।' : language === 'en' ? 'Hold breath inside, meditate on Satyanaam.' : 'श्वास अंदर रोककर सत्यनाम सुमिरन करें।')
                      : breathPhase === 'exhale'
                      ? (language === 'pb' ? 'ਸੁਆਸ ਹੌਲੀ-ਹੌਲੀ ਬਾਹਰ ਛੱਡੋ।' : language === 'en' ? 'Slowly exhale breath.' : 'श्वास धीरे-धीरे बाहर छोड़ें।')
                      : (language === 'pb' ? 'ਸੁਆਸ ਬਾਹਰ ਰੋਕ ਕੇ ਸ਼ਾਂਤ ਚਿੱਤ ਹੋਵੋ।' : language === 'en' ? 'Hold breath out, tranquil mind.' : 'श्वास बाहर रोककर शांत चित्त हो जाएं।')}
                  </p>
                </div>
              </div>
            )}

            {/* Scroll Area Start: Dedicated Smooth-Scroll Container with Gesture Support */}
            {!isPageFlipMode ? (
              <motion.div 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleFramerMotionDragEnd}
                className="flex flex-col w-full touch-pan-y"
              >
                {/* The Smooth-Scroll Viewport */}
                <div
                  ref={smoothScrollRef}
                  id="nitnem-smooth-scroll-container"
                  onScroll={handleContainerScroll}
                  onTouchStart={handleManualScrollStart}
                  onWheel={handleManualScrollStart}
                  className="nitnem-smooth-scroll-viewport w-full flex-1 select-none"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: (isAutoPlaying || isFullBaniAudioPlaying || isPureVaniMode) ? 'auto' : 'smooth',
                    scrollSnapType: (isAutoPlaying || isFullBaniAudioPlaying || isPureVaniMode) ? 'none' : 'y mandatory',
                  }}
                >
                  <div className={`${isPureVaniMode ? 'max-w-3xl mx-auto space-y-5 pb-40 sm:pb-44 pt-4 sm:pt-6 px-3 sm:px-6' : 'space-y-6 pb-44 sm:pb-48 pt-4 sm:pt-6 px-3 sm:px-4'}`}>
                    {/* Top Sacred Section Header Card */}
                    {isPureVaniMode ? (
                      <div
                        id="nitnem-reading-top-header"
                        className="py-3 px-4 border-b border-amber-500/25 text-center space-y-1"
                      >
                        <p className="text-xs font-serif text-amber-800 dark:text-amber-300">
                          <span>
                            {language === 'pb' ? 'ਸਿਰਫ਼ ਬਾਣੀ' : language === 'en' ? 'Pure Vani' : 'सिर्फ वाणी'}
                          </span>
                          <span aria-hidden="true"> · </span>
                          <span className="tabular-nums">
                            {language === 'pb'
                              ? `ਅਧਿਆਇ ${granthContext.currentIndex + 1}/${granthContext.totalCount}`
                              : language === 'en'
                              ? `Ch ${granthContext.currentIndex + 1}/${granthContext.totalCount}`
                              : `अध्याय ${granthContext.currentIndex + 1}/${granthContext.totalCount}`}
                          </span>
                          <span aria-hidden="true"> · </span>
                          <span className="tabular-nums">
                            {versesList.length} {language === 'pb' ? 'ਪਦ' : language === 'en' ? 'Verses' : 'पद'}
                          </span>
                          <span aria-hidden="true"> · </span>
                          <span>
                            {!isBackgroundDhunPlaying
                              ? (language === 'pb' ? 'ਧੁਨ ਬੰਦ' : language === 'en' ? 'Dhun Off' : 'धुन बंद')
                              : dhunSound === 'satyanaam'
                              ? (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ' : language === 'en' ? 'Satyanaam Dhun' : 'सत्यनाम धुन')
                              : dhunSound === 'tanpura'
                              ? (language === 'pb' ? 'ਤਾਨਪੁਰਾ' : language === 'en' ? 'Tanpura' : 'तानपुरा')
                              : (language === 'pb' ? 'ਬੰਸਰੀ' : language === 'en' ? 'Flute' : 'बांसुरी')}
                          </span>
                        </p>
                        <h2 className="text-xl sm:text-2xl font-black font-serif text-amber-950 dark:text-amber-100">
                          {currentSection.title[language] || currentSection.title.hi}
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (isPureVaniMode) {
                                exitPureVaniMode(true);
                              } else {
                                stopAllAudioPlayback();
                              }
                              setViewMode('selection');
                              setIsAutoPlaying(false);
                            }}
                            className="px-3 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-amber-500/20 transition"
                          >
                            <ArrowLeft size={13} />
                            <span>{language === 'pb' ? 'ਅਧਿਆਇ ਸੂਚੀ' : language === 'en' ? 'Chapters' : 'अनुक्रमणिका'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={handleTogglePureVaniMode}
                            className="px-3 py-1 rounded-lg border border-amber-500/30 bg-amber-600 text-white text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
                          >
                            <Volume2 size={13} />
                            <span>{language === 'pb' ? 'ਸਿਰਫ਼ ਬਾਣੀ ਬੰਦ' : language === 'en' ? 'Exit Pure Vani' : 'सामान्य वाचन'}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div 
                        id="nitnem-reading-top-header"
                        style={{
                          scrollSnapAlign: 'start',
                          color: theme.textPrimary,
                          borderColor: 'rgba(217, 119, 6, 0.25)',
                        }}
                        className="nitnem-verse-snap-item snap-start py-3 sm:py-4 px-2 border-b text-center space-y-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              stopAllAudioPlayback();
                              setViewMode('selection');
                              setIsAutoPlaying(false);
                            }}
                            className="px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-amber-500/20 transition whitespace-nowrap"
                          >
                            <ArrowLeft size={13} />
                            <span>{language === 'pb' ? '੭-ਭਾਗ ਸੂਚੀ' : language === 'en' ? 'Index' : 'अनुक्रमणिका'}</span>
                          </button>

                          <div className="flex items-center gap-1.5 flex-wrap">
                            <button
                              type="button"
                              onClick={handleTogglePureVaniMode}
                              className="px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-amber-500/20 transition whitespace-nowrap"
                            >
                              <Volume2 size={13} />
                              <span>{language === 'pb' ? 'ਸਿਰਫ਼ ਬਾਣੀ' : language === 'en' ? 'Pure Vani' : 'सिर्फ वाणी'}</span>
                            </button>
                            <button
                              type="button"
                              onClick={toggleFullscreen}
                              className="px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-amber-500/20 transition whitespace-nowrap"
                              title={language === 'pb' ? 'ਪੂਰੀ ਸਕਰੀਨ' : language === 'en' ? 'Full Screen' : 'पूर्ण स्क्रीन'}
                            >
                              <Maximize2 size={13} />
                              <span className="hidden sm:inline">{language === 'pb' ? 'ਪੂਰੀ ਸਕਰੀਨ' : language === 'en' ? 'Full Screen' : 'पूर्ण स्क्रीन'}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleBackgroundDhun()}
                              className={`px-2 py-1 rounded-lg border text-xs font-bold flex items-center gap-1 cursor-pointer transition whitespace-nowrap ${
                                isBackgroundDhunPlaying
                                  ? 'bg-[#8B2500] text-white border-[#8B2500]'
                                  : 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200'
                              }`}
                              title={rt.bgDhun}
                            >
                              {isBackgroundDhunPlaying ? <Music size={13} /> : <VolumeX size={13} />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span style={{ color: theme.accentGold }} className="text-[0.625rem] sm:text-xs font-mono font-bold uppercase tracking-wider block">
                            {language === 'pb' ? 'ਪਾਵਨ ਨਿਤਨੇਮ ਪਾਠ' : language === 'en' ? 'Sacred Nitnem Recitation' : 'पावन नितनेम पाठ'} · {granthContext.currentIndex + 1}/{granthContext.totalCount} · {versesList.length} {language === 'pb' ? 'ਪਦ' : language === 'en' ? 'Verses' : 'पद'}
                          </span>
                          <h2 style={{ color: theme.sacredMaroon }} className="text-lg sm:text-2xl font-black font-serif">
                            {currentSection.title[language] || currentSection.title.hi}
                          </h2>
                          {currentSection.subtitle && (
                            <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif max-w-xl mx-auto">
                              {currentSection.subtitle[language] || currentSection.subtitle.hi}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Pinned Focused Study Card */}
                    {pinnedVerse && (
                      <div className="sticky top-0 z-20 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 dark:from-amber-950/80 dark:to-zinc-900/90 border-2 border-amber-500/60 backdrop-blur-md shadow-lg space-y-2.5 animate-fadeIn">
                        <div className="flex items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
                          <div className="flex items-center gap-1.5 font-black font-serif text-xs text-amber-950 dark:text-amber-200">
                            <Pin size={14} className="text-amber-600 dark:text-amber-400 rotate-45" />
                            <span>{language === 'pb' ? 'ਪਿਨ ਕੀਤਾ ਧਿਆਨ ਪਦ (Focused Verse)' : language === 'en' ? '📌 Pinned Focused Verse' : '📌 पिन किया गया पद (विशेष ध्यान)'}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPinnedVerseId(null);
                              sacredHaptics.lightTap();
                            }}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-500/20 hover:bg-amber-500/40 transition cursor-pointer"
                          >
                            ✕ {language === 'pb' ? 'ਹਟਾਓ (Unpin)' : language === 'en' ? 'Unpin' : 'हटाएं (Unpin)'}
                          </button>
                        </div>
                        <div className={`${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} font-black text-center text-sm sm:text-base leading-relaxed text-amber-950 dark:text-amber-100`}>
                          {(pinnedVerse.lines[language] || pinnedVerse.lines.hi).map((l, idx) => (
                            <div key={idx} className="my-0.5">{l}</div>
                          ))}
                        </div>
                        {pinnedVerse.bhavarth && (
                          <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-900/40 text-xs font-serif text-amber-900 dark:text-amber-200 leading-relaxed border border-amber-400/40">
                            <span className="font-bold">।। भावार्थ ।।: </span>
                            {pinnedVerse.bhavarth[language] || pinnedVerse.bhavarth.hi}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Global Sacred Invocation: Every prayer begins with '।। सत्यनाम ।।' */}
                    <div className="text-center py-2.5 my-2">
                      <span
                        style={{
                          backgroundColor: theme.cardBg,
                          borderColor: theme.accentGold,
                          color: theme.sacredMaroon,
                        }}
                        className="inline-block px-6 py-2 rounded-full border-2 font-serif font-black text-sm sm:text-base tracking-normal backdrop-blur-md shadow-xs"
                      >
                        {language === 'pb' ? '।।ਸਤਯਨਾਮ।।' : language === 'en' ? '||Satyanaam||' : '।।सत्यनाम।।'}
                      </span>
                    </div>

                    {(isLoadingCategoryData || String(versesList[0]?.id ?? '').includes('-placeholder-')) ? (
                      <SacredLoader language={language} compact />
                    ) : versesList.length === 0 ? (
                      <section
                        aria-label={language === 'pb' ? 'ਖਾਲੀ ਪਾਠ ਸਥਾਨ' : language === 'en' ? 'Empty Path Space' : 'रिक्त पाठ स्थान'}
                        style={{
                          backgroundColor: theme.cardBg,
                          borderColor: theme.cardBorder,
                          color: theme.textPrimary,
                        }}
                        className="max-w-2xl mx-auto my-6 rounded-2xl border backdrop-blur-md px-6 py-10 sm:px-10 sm:py-14 text-center space-y-5 shadow-sm"
                      >
                        <p className="text-xs uppercase tracking-widest font-sans text-stone-500 dark:text-amber-300/75">
                          <span>
                            {MAJOR_GRANTH_CATEGORIES.find((c) => c.id === currentSection.majorCategoryId)?.title[language] ||
                              MAJOR_GRANTH_CATEGORIES.find((c) => c.id === currentSection.majorCategoryId)?.title.hi ||
                              getLocalizedBookTitle(language)}
                          </span>
                          <span aria-hidden="true"> · </span>
                          <span className="tabular-nums">
                            {language === 'pb'
                              ? `ਅਧਿਆਇ ${granthContext.currentIndex + 1}/${Math.max(1, granthContext.totalCount)}`
                              : language === 'en'
                              ? `Chapter ${granthContext.currentIndex + 1}/${Math.max(1, granthContext.totalCount)}`
                              : `अध्याय ${granthContext.currentIndex + 1}/${Math.max(1, granthContext.totalCount)}`}
                          </span>
                        </p>

                        <div className="border-t border-b border-stone-200/90 dark:border-amber-900/35 py-6 space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 dark:text-amber-100 leading-snug">
                            {currentSection.title[language] || currentSection.title.hi}
                          </h3>
                          <p className="max-w-prose mx-auto text-sm sm:text-base font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
                            {language === 'pb'
                              ? 'ਇਸ ਅਧਿਆਇ ਦਾ ਪਾਵਨ ਪਾਠ ਜੋੜੇ ਜਾਣ ਲਈ ਇਹ ਸਥਾਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਾਫ਼ ਅਤੇ ਤਿਆਰ ਹੈ।'
                              : language === 'en'
                              ? 'This chapter space is clean and ready for the upcoming authentic Path text.'
                              : 'इस अध्याय का पावन पाठ संकलित किए जाने हेतु यह स्थान पूर्णतः रिक्त एवं तैयार है।'}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              sacredHaptics.lightTap();
                              if (isPureVaniMode) {
                                exitPureVaniMode(true);
                              }
                              setViewMode('selection');
                            }}
                            className="min-h-[44px] px-5 py-2.5 rounded-xl border border-stone-300 dark:border-amber-800/60 bg-white dark:bg-zinc-900 text-stone-800 dark:text-amber-200 hover:bg-stone-100 dark:hover:bg-zinc-800 font-serif font-bold text-xs sm:text-sm transition cursor-pointer inline-flex items-center gap-2"
                          >
                            <ArrowLeft size={16} />
                            <span>
                              {language === 'pb'
                                ? '੭-ਭਾਗ ਸੂਚੀ ਤੇ ਵਾਪਸ ਜਾਓ'
                                : language === 'en'
                                ? 'Back to 7-Section Index'
                                : '७-खंड अनुक्रमणिका पर लौटें'}
                            </span>
                          </button>

                          {granthContext.nextSection && (
                            <button
                              type="button"
                              onClick={() => {
                                sacredHaptics.lightTap();
                                handleSelectSection(granthContext.nextSection!.id);
                              }}
                              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#8B4513] hover:bg-[#72380f] text-white font-serif font-bold text-xs sm:text-sm transition cursor-pointer inline-flex items-center gap-1.5"
                            >
                              <span>
                                {language === 'pb'
                                  ? `ਅਗਲਾ: ${granthContext.nextSection.title.pb || granthContext.nextSection.title.hi}`
                                  : language === 'en'
                                  ? `Next: ${granthContext.nextSection.title.en || granthContext.nextSection.title.hi}`
                                  : `अगला: ${granthContext.nextSection.title.hi}`}
                              </span>
                              <ChevronRight size={16} />
                            </button>
                          )}
                        </div>
                      </section>
                    ) : versesList.map((verse, vIdx) => {
                      const isCurrentActive = activeVerseIndex === vIdx;
                      const isRead = readVersesSet.has(verse.id);
                      const isPlayingAudio = playingVoiceVerseId === verse.id;

                      const hindiLines = verse.lines.hi;
                      const punjabiLines = verse.lines.pb || [];
                      const englishLines = verse.lines.en || [];

                      const currentScript = getVerseScript(verse.id);
                      const activeTab = getActiveVerseTab(verse.id);
                      const steekData = getVerseSteekCommentary(
                        verse,
                        selectedSectionId,
                        currentSection.title[language] || currentSection.title.hi,
                        language
                      );

                      // Interactive Tap-to-Mean & Santhiya Pronunciation line renderer
                      const renderInteractiveLine = (lineText: string, langCode: Language) => {
                        const line = isLarivaarMode ? lineText.replace(/\s+/g, '') : lineText;

                        // Detect Chhand Sub-headings like -: सोरठा :-, -: चौपाई :-, -: साखी :-, मंगलाचरण - सोरठा
                        const isChhandHeader = /^(मंगलाचरण\s*-\s*|\[?-:\s*)(सोरठा|चौपाई|साखी)(\s*:-]?)$/i.test(line.trim()) ||
                          line.trim().startsWith('-: सोरठा :-') || line.trim().startsWith('-: चौपाई :-') || line.trim().startsWith('-: साखी :-') ||
                          line.trim().startsWith('[-: सोरठा :-]') || line.trim().startsWith('[-: चौपाई :-]') || line.trim().startsWith('[-: साखी :-]');

                        if (isChhandHeader) {
                          return (
                            <div className="text-center my-3">
                              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-400/50 text-xs sm:text-sm font-black font-serif shadow-xs tracking-wider">
                                ✨ {line.trim()} ✨
                              </span>
                            </div>
                          );
                        }

                        if (isSanthiyaMode) {
                          // Santhiya Mode: word-by-word pronunciation reciter
                          const words = line.split(/(\s+)/);
                          return (
                            <span className="break-words [overflow-wrap:anywhere] break-all max-w-full inline-block">
                              {words.map((word, wIdx) => {
                                if (!word.trim()) return <span key={wIdx}>{word}</span>;
                                const isSpeakingThisWord = santhiyaActiveWord === word.replace(/[।,!?;:'"॥()]/g, '').trim();
                                return (
                                  <span
                                    key={wIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSanthiyaPronounceWord(word, langCode);
                                    }}
                                    className={`inline-block px-1.5 py-0.5 mx-0.5 rounded-lg text-sm sm:text-base md:text-lg font-bold cursor-pointer transition-all duration-150 break-words ${
                                      isSpeakingThisWord
                                        ? 'bg-emerald-500 text-white shadow-md scale-110 ring-2 ring-emerald-300'
                                        : 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-950 dark:text-emerald-200 hover:bg-emerald-500/30 border border-emerald-400/40'
                                    }`}
                                    title={`उच्चारण सुनें: ${word} (Tap to listen exact pronunciation)`}
                                  >
                                    {word}
                                    <Volume2 size={10} className="inline -mt-2 ml-0.5 opacity-60 text-emerald-700 dark:text-emerald-300" />
                                  </span>
                                );
                              })}
                            </span>
                          );
                        }

                        // Normal Mode: Sandhukkari Glossary Tap-to-Mean
                        const tokens = tokenizeVerseLine(line, langCode);
                        return (
                          <span className="break-words [overflow-wrap:anywhere] break-all max-w-full inline-block">
                            {tokens.map((tok, tIdx) => {
                              const isVisraamWord = isVisraamHighlightEnabled && ['कहै', 'कबीर', 'सुन', 'मन', 'भाई', 'साहेब', 'सतगुरु', 'नाम', 'ज्ञान', 'जीव', 'काल', 'माया', 'सुनि'].some(p => tok.text.includes(p));

                              if (tok.isSandhukkari && tok.term) {
                                return (
                                  <span
                                    key={tIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      sacredHaptics.lightTap();
                                      const rect = e.currentTarget.getBoundingClientRect();
                                      setGlossaryTargetRect(rect);
                                      setSelectedGlossaryTerm(tok.term || null);
                                    }}
                                    className="inline-block border-b-2 border-dotted border-amber-500/80 dark:border-amber-400/80 hover:bg-amber-400/25 text-amber-900 dark:text-amber-200 px-0.5 rounded cursor-pointer transition-colors duration-150 mx-0.5 font-bold break-words"
                                    title={`साधुक्कड़ी शब्दार्थ: ${tok.term.word} (Tap to view meaning)`}
                                  >
                                    {tok.text}
                                    <Sparkles size={11} className="inline -mt-2 ml-0.5 opacity-75 text-amber-600 dark:text-amber-400" />
                                  </span>
                                );
                              }
                              return (
                                <span
                                  key={tIdx}
                                  className={`break-words ${isVisraamWord ? 'text-orange-600 dark:text-orange-400 font-extrabold underline decoration-orange-500/40 underline-offset-4' : ''}`}
                                  title={isVisraamWord ? 'विश्राम (Pause Point for Correct Ucharan)' : ''}
                                >
                                  {tok.text}
                                </span>
                              );
                            })}
                          </span>
                        );
                      };

                      const renderVerseLines = (lines: string[], langCode: Language, badgeLabel?: string) => (
                        <div className="relative group w-full max-w-full overflow-x-hidden nitnem-reader-container reader-container-root select-none">
                          {badgeLabel && (
                            <span className="text-[0.625rem] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 mb-1 inline-block">
                              {badgeLabel}
                            </span>
                          )}
                          <div
                            style={{
                              direction: 'ltr',
                              textAlign: 'center',
                            }}
                            className={`${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} font-bold sm:font-black sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] max-w-full w-full ${getFontSizeClass(fontSizeLevel)} ${isPureVaniMode ? 'leading-[2]' : getLineHeightClass(lineHeight)} ${currentThemeStyle.textColor}`}
                          >
                            {lines.map((line, lIdx) => {
                              const lineId = `${verse.id}-${langCode}-${lIdx}`;
                              const isLineActive = isLineGuideActive && selectedLineId === lineId;
                              const isKaraokeSpeakingThisLine = isFullBaniAudioPlaying && activeRecitingVerseIdx === vIdx && activeRecitingLineIdx === lIdx;
                              const isCoupletDivider = lIdx % 2 === 1 && lIdx < lines.length - 1;

                              return (
                                <React.Fragment key={lIdx}>
                                  <div 
                                    id={lineId}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedLineId(lineId);
                                      setActiveVerseIndex(vIdx);
                                      sacredHaptics.lightTap();
                                      if (isPureVaniMode) {
                                        playBaniFromCoord(vIdx, lIdx);
                                      } else {
                                        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                      }
                                    }}
                                    className={`group/line relative my-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-200 [word-break:keep-all] [overflow-wrap:break-word] max-w-full w-full cursor-pointer nitnem-selectable-line select-text ${
                                      isKaraokeSpeakingThisLine
                                        ? 'bg-amber-400/25 dark:bg-amber-500/25 ring-1 ring-amber-500/60 shadow-sm text-amber-950 dark:text-amber-50 font-black'
                                        : isLineActive 
                                        ? 'bg-amber-500/20 dark:bg-amber-500/30 ring-2 ring-amber-500/60 shadow-sm font-black' 
                                        : 'hover:bg-amber-500/10 dark:hover:bg-amber-500/15'
                                    }`}
                                  >
                                    {!isPureVaniMode && (
                                      <div className="absolute top-1.5 right-2 opacity-0 group-hover/line:opacity-100 transition-opacity flex items-center gap-1 z-10">
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            navigator.clipboard.writeText(line);
                                            sacredHaptics.lightTap();
                                          }}
                                          className="p-1 rounded-lg bg-white/90 dark:bg-black/70 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition shadow-xs cursor-pointer"
                                          title="Copy line"
                                          aria-label="Copy line"
                                        >
                                          <Copy size={12} />
                                        </button>
                                      </div>
                                    )}
                                    {renderInteractiveLine(line, langCode)}
                                  </div>

                                  {/* Bhavarth (meaning) section displayed after every two lines (suppressed in Pure Vani Mode) */}
                                  {!isPureVaniMode && (() => {
                                    const sid = (selectedSectionId || currentSection.id || '').toLowerCase();
                                    const isTargetPrayer = 
                                      sid.includes('sandhya-sakhi') ||
                                      sid.includes('gudadi') ||
                                      sid.includes('gudri') ||
                                      sid.includes('guddi') ||
                                      sid.includes('aarti') ||
                                      (currentSection.title?.hi || '').includes('साखी') ||
                                      (currentSection.title?.hi || '').includes('गुदड़ी') ||
                                      (currentSection.title?.hi || '').includes('आरती');

                                    const isTwoLineInterval = (lIdx % 2 === 1) || (lIdx === lines.length - 1 && lines.length === 1);

                                    if (isTargetPrayer && isTwoLineInterval && verse.bhavarth && isVerseBhavarthVisible(verse.id)) {
                                      return (
                                        <div className="my-3.5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-400/40 dark:border-amber-700/50 shadow-xs text-xs sm:text-sm text-left not-italic font-normal">
                                          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-amber-400/25 text-amber-900 dark:text-amber-300 font-bold">
                                            <span className="flex items-center gap-1.5 font-serif font-black text-xs sm:text-sm">
                                              <span>✨</span>
                                              <span>
                                                {language === 'pb' ? '।। ਭਾਵਾਰਥ ।। (ਦੋਹੇ / ਚੌਪਾਈ ਦਾ ਸਰਲ ਅਰਥ)' : language === 'en' ? '|| Spiritual Meaning ||' : '।। भावार्थ ।। (दोहे/चौपाई का सरल भावार्थ)'}
                                              </span>
                                            </span>
                                            <span className="text-[0.625rem] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200">
                                              {language === 'pb' ? `ਪਦ ${vIdx + 1}` : language === 'en' ? `Couplet ${vIdx + 1}` : `चरण ${vIdx + 1}`}
                                            </span>
                                          </div>
                                          <div className={`${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} sacred-meaning-typography ${getLineHeightClass(lineHeight)} text-sm sm:text-base ${currentThemeStyle.textColor}`}>
                                            <SmartGlossaryText 
                                              text={verse.bhavarth[language] || verse.bhavarth.hi}
                                              language={language}
                                            />
                                          </div>
                                          {verse.bhavarth.en && language !== 'en' && (
                                            <div className="mt-2 pt-1.5 border-t border-amber-400/20 text-xs text-stone-600 dark:text-amber-200/80 italic font-serif">
                                              <span className="font-bold not-italic block text-[0.625rem] uppercase font-mono text-amber-800 dark:text-amber-300">English Meaning:</span>
                                              "{verse.bhavarth.en}"
                                            </div>
                                          )}
                                        </div>
                                      );
                                    }
                                    return null;
                                  })()}

                                  {/* Subtle visual divider between every two lines of text (couplets) */}
                                  {isCoupletDivider && (
                                    <div className="my-2 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-amber-500/35 to-transparent select-none pointer-events-none" />
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      );

                      return (
                        <div
                          key={verse.id}
                          id={`verse-card-${verse.id}`}
                          data-verse-card="true"
                          style={!isPureVaniMode ? { scrollSnapAlign: 'start' } : undefined}
                          onClick={() => {
                            setActiveVerseIndex(vIdx);
                            handleMarkVerseRead(verse.id);
                            if (isPureVaniMode) {
                              playBaniFromCoord(vIdx, 0);
                            }
                          }}
                          className={`nitnem-verse-snap-item ${!isPureVaniMode ? 'snap-start' : ''} relative scroll-mt-24 sm:scroll-mt-28 transition-colors duration-200 cursor-pointer ${
                            isPureVaniMode
                              ? `rounded-2xl border-b border-black/8 dark:border-white/8 px-3 py-5 sm:px-6 sm:py-6 ${
                                  isFullBaniAudioPlaying && activeRecitingVerseIdx === vIdx
                                    ? 'bg-amber-500/12 dark:bg-amber-900/25 ring-1 ring-amber-500/40'
                                    : isFullBaniAudioPlaying
                                    ? 'opacity-85 hover:opacity-100'
                                    : ''
                                }`
                              : `${globalWallpaper ? 'rounded-2xl border backdrop-blur-md shadow-sm' : 'rounded-none border-0'} p-5 sm:p-7 ${currentThemeStyle.cardBg} ${currentThemeStyle.cardBorder} ${
                                  isFullBaniAudioPlaying && activeRecitingVerseIdx === vIdx
                                    ? 'ring-2 ring-amber-500/60 shadow-inner'
                                    : isCurrentActive 
                                    ? 'ring-1 ring-amber-500/35' 
                                    : ''
                                }`
                          }`}
                        >
                          {/* Optional Line Guide Overlay on Active Verse */}
                          {isLineGuideActive && isCurrentActive && !isPureVaniMode && (
                            <div className={`absolute inset-0 z-0 rounded-3xl pointer-events-none ${currentThemeStyle.highlightBg}`} />
                          )}

                          <div className="relative z-10">
                            {/* Verse Header Row: Clean quiet ordinal in Pure Vani mode, full toolbar otherwise */}
                            {isPureVaniMode ? (
                              <div className="text-center mb-2">
                                <span className={`text-xs font-serif tracking-wide ${currentThemeStyle.subText}`}>
                                  {getVerseTypeLabel(verse.type || 'doha', verse.id, language)}
                                  <span aria-hidden="true"> · </span>
                                  <span className="tabular-nums">{vIdx + 1} / {versesList.length}</span>
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between gap-[6px] mb-4 pb-3 border-b border-black/5 dark:border-white/5">
                              <div className="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
                                {(() => {
                                  const verseLabel = getVerseTypeLabel(verse.type || 'doha', verse.id, language);
                                  const idStr = String(verse.id || '');
                                  const idNumMatch = idStr.match(/\d+$/);
                                  const displayNum = idNumMatch ? idNumMatch[0] : (vIdx + 1);
                                  const isSpecial = verse.type === 'mangal' || verse.type === 'vandana';
                                  
                                  return (
                                    <>
                                      <span className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-xl flex items-center justify-center font-bold text-xs font-mono ${
                                        isRead 
                                          ? 'bg-green-600 text-white shadow-xs' 
                                          : `bg-black/5 dark:bg-white/5 ${currentThemeStyle.textColor} opacity-80 border ${currentThemeStyle.cardBorder}`
                                      }`}>
                                        {isSpecial ? (vIdx + 1) : displayNum}
                                      </span>
                                      <span className={`text-xs font-bold font-serif truncate ${currentThemeStyle.accentText}`}>
                                        {verseLabel}
                                      </span>
                                      {/* Distinct Page Badge */}
                                      <span className="text-[0.625rem] sm:text-[0.6875rem] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 whitespace-nowrap shrink-0">
                                        📖 {language === 'pb' ? `ਪੰਨਾ ${vIdx + 1}` : language === 'en' ? `Page ${vIdx + 1}` : `पृष्ठ ${vIdx + 1}`} / {versesList.length}
                                      </span>
                                    </>
                                  );
                                })()}
                              </div>

                              {/* Right Action Icons */}
                              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                                {/* Pin to Top Focus button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setPinnedVerseId(pinnedVerseId === verse.id ? null : verse.id);
                                    sacredHaptics.lightTap();
                                  }}
                                  title={pinnedVerseId === verse.id 
                                    ? (language === 'pb' ? 'ਪਿਨ ਹਟਾਓ' : language === 'en' ? 'Unpin Verse' : 'पिन हटाएं')
                                    : (language === 'pb' ? 'ਸਿਖਰ ਉੱਤੇ ਪਿਨ ਕਰੋ (Focus)' : language === 'en' ? 'Pin Verse to Top for Focused Study' : 'शीर्ष पर पिन करें (Focus)')}
                                  className={`p-2 rounded-xl transition cursor-pointer ${
                                    pinnedVerseId === verse.id
                                      ? 'bg-[#8B2500] text-white shadow-xs'
                                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                                  }`}
                                >
                                  <Pin size={16} className={pinnedVerseId === verse.id ? 'rotate-45 text-white' : ''} />
                                </button>

                                {/* Sacred Bookmark Toggle */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleBookmark(verse);
                                  }}
                                  title={bookmarks.some(b => b.sectionId === selectedSectionId && b.verseId === verse.id) ? "Remove Bookmark" : "Add Sacred Bookmark"}
                                  className={`p-2 rounded-xl transition cursor-pointer ${
                                    bookmarks.some(b => b.sectionId === selectedSectionId && b.verseId === verse.id)
                                      ? 'bg-amber-500 text-white shadow-xs'
                                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                                  }`}
                                >
                                  {bookmarks.some(b => b.sectionId === selectedSectionId && b.verseId === verse.id) ? (
                                    <BookmarkCheck size={16} />
                                  ) : (
                                    <Bookmark size={16} />
                                  )}
                                </button>

                                {/* Individual Verse Bhavarth / Steek Toggle */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSingleVerseBhavarth(verse.id);
                                  }}
                                  title={isVerseBhavarthVisible(verse.id)
                                    ? (language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਸਟੀਕ ਛੁਪਾਓ' : language === 'en' ? 'Hide Meaning & Steek' : 'भावार्थ व सटीक छुपाओ')
                                    : (language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਸਟੀਕ ਦਿਖਾਓ' : language === 'en' ? 'Show Meaning & Steek' : 'भावार्थ व सटीक दिखाओ')
                                  }
                                  className={`p-2 rounded-xl transition cursor-pointer ${
                                    isVerseBhavarthVisible(verse.id)
                                      ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 shadow-xs'
                                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400'
                                  }`}
                                >
                                  {isVerseBhavarthVisible(verse.id) ? <Eye size={16} /> : <EyeOff size={16} />}
                                </button>

                                {/* Single Verse Audio Recitation Button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlayVoice(verse);
                                  }}
                                  title="Play Verse Audio"
                                  className={`p-2 rounded-xl transition cursor-pointer ${
                                    isPlayingAudio
                                      ? 'bg-[#8B2500] text-white animate-pulse'
                                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                                  }`}
                                >
                                  <Volume2 size={16} />
                                </button>

                                {/* Copy Button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopyVerse(verse);
                                  }}
                                  title={language === 'pb' ? 'ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy Verse & Meaning' : 'पद व भावार्थ कॉपी करें'}
                                  className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition cursor-pointer"
                                >
                                  {copiedId === verse.id ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                                </button>

                                {/* Share Button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShareVerse(verse);
                                  }}
                                  title={language === 'pb' ? 'ਸ਼ੇਅਰ ਕਰੋ' : language === 'en' ? 'Share Verse' : 'शेयर करें (Share)'}
                                  className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition cursor-pointer"
                                >
                                  <Share2 size={16} />
                                </button>
                              </div>
                              </div>
                            )}

                            {/* Render Main Text according to selected script */}
                            {currentScript === 'tri' ? (
                              <div className="space-y-4 my-2">
                                {renderVerseLines(hindiLines, 'hi', 'देवनागरी (Hindi)')}
                                {punjabiLines.length > 0 && renderVerseLines(punjabiLines, 'pb', 'ਗੁਰਮੁਖੀ (Gurmukhi)')}
                                {englishLines.length > 0 && renderVerseLines(englishLines, 'en', 'English (Roman Text)')}
                              </div>
                            ) : (
                              currentScript === 'pb' ? renderVerseLines(punjabiLines.length > 0 ? punjabiLines : hindiLines, 'pb') :
                              currentScript === 'en' ? renderVerseLines(englishLines.length > 0 ? englishLines : hindiLines, 'en') :
                              renderVerseLines(hindiLines, 'hi')
                            )}

                            {/* Bhavarth & Steek Commentary Section (completely hidden in Pure Vani Mode) */}
                            {!isPureVaniMode && (
                            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5">
                              {/* Quick Toggle pill above/at the bhavarth */}
                              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSingleVerseBhavarth(verse.id);
                                  }}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer border ${
                                    isVerseBhavarthVisible(verse.id)
                                      ? 'bg-amber-500/15 dark:bg-amber-500/25 text-amber-800 dark:text-amber-300 border-amber-300/50 shadow-xs'
                                      : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-black/5 hover:bg-amber-50 dark:hover:bg-zinc-800 hover:text-amber-700'
                                  }`}
                                >
                                  {isVerseBhavarthVisible(verse.id) ? (
                                    <>
                                      <EyeOff size={13} className="text-amber-600 dark:text-amber-400" />
                                      <span>{language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਸਟੀਕ ਛੁਪਾਓ' : language === 'en' ? 'Hide Meaning & Steek' : 'भावार्थ व सटीक छुपाओ'}</span>
                                      <ChevronUp size={13} className="opacity-70" />
                                    </>
                                  ) : (
                                    <>
                                      <Eye size={13} className="text-amber-600 dark:text-amber-400" />
                                      <span>{language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਸਟੀਕ ਦਿਖਾਓ' : language === 'en' ? 'Show Meaning & Steek' : 'भावार्थ व सटीक दिखाओ'}</span>
                                      <ChevronDown size={13} className="opacity-70" />
                                    </>
                                  )}
                                </button>

                                {isVerseBhavarthVisible(verse.id) && (
                                  <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setVerseTab(verse.id, 'bhavarth');
                                      }}
                                      className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition cursor-pointer ${
                                        activeTab === 'bhavarth'
                                          ? 'bg-white dark:bg-zinc-800 text-amber-700 dark:text-amber-300 shadow-xs'
                                          : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                                      }`}
                                    >
                                      📖 {language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਅਨੁਵਾਦ' : language === 'en' ? 'Translation & Meaning' : 'भावार्थ व अनुवाद'}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setVerseTab(verse.id, 'steek');
                                      }}
                                      className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition cursor-pointer ${
                                        activeTab === 'steek'
                                          ? 'bg-white dark:bg-zinc-800 text-amber-700 dark:text-amber-300 shadow-xs'
                                          : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                                      }`}
                                    >
                                      🔍 {language === 'pb' ? 'ਸਟੀਕ ਤੇ ਵਿਚਾਰ' : language === 'en' ? 'Steek & Context' : 'सटीक व विचार'}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setVerseTab(verse.id, 'shabdarth');
                                      }}
                                      className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition cursor-pointer ${
                                        activeTab === 'shabdarth'
                                          ? 'bg-white dark:bg-zinc-800 text-amber-700 dark:text-amber-300 shadow-xs'
                                          : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                                      }`}
                                    >
                                      🔤 {language === 'pb' ? 'ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Vocabulary' : 'साधुक्कड़ी शब्दार्थ'}
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* Collapsible Drawer Body */}
                              <AnimatePresence>
                                {isVerseBhavarthVisible(verse.id) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="overflow-hidden space-y-3"
                                  >
                                    {/* TAB 1: Bhavarth & English Translation in Distinct Sacred Warm Color */}
                                    {activeTab === 'bhavarth' && (
                                      <div className="space-y-2.5">
                                        {/* Hindi / Punjabi Bhavarth in Distinct Color */}
                                        <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed border-2 shadow-xs ${
                                          readerTheme === 'black'
                                            ? 'bg-zinc-900/95 border-amber-500/40 text-amber-100'
                                            : readerTheme === 'netra'
                                            ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-100'
                                            : 'bg-amber-500/10 dark:bg-amber-950/40 border-amber-400/50 dark:border-amber-700/60 text-amber-950 dark:text-amber-100'
                                        }`}>
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="font-black font-serif text-amber-900 dark:text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                                              <span>✨</span>
                                              <span>।। {t.bhavarthLabel.replace(':', '')} (दोहे/चौपाई का भावार्थ) ।।</span>
                                            </span>
                                            <span className="text-[0.625rem] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200">
                                              {language === 'pb' ? 'ਸਰਲ ਟੀਕਾ' : language === 'en' ? 'Couplet Meaning' : 'सरल भावार्थ'}
                                            </span>
                                          </div>
                                          <div className={`${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} leading-relaxed text-xs sm:text-sm`}>
                                            <SmartGlossaryText 
                                              text={verse.bhavarth?.[language] || verse.bhavarth?.hi || 'कबीर साहेब की यह पावन वाणी जीवात्मा को सत्य का दर्शन कराती है।'}
                                              language={language}
                                            />
                                          </div>
                                        </div>

                                        {/* Dedicated English Translation Card */}
                                        <div className="p-3.5 rounded-2xl text-xs sm:text-sm bg-blue-50/60 dark:bg-blue-950/25 border border-blue-200/60 dark:border-blue-900/40 text-blue-950 dark:text-blue-200">
                                          <span className="font-bold text-[0.6875rem] uppercase tracking-wider text-blue-800 dark:text-blue-300 block mb-1 font-mono">
                                            🌐 English Translation (English Arth)
                                          </span>
                                          <p className={`italic ${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} leading-relaxed`}>
                                            "{steekData.englishTranslation}"
                                          </p>
                                        </div>
                                      </div>
                                    )}

                                    {/* TAB 2: Steek & Contextual Commentary (सटीक व विचार) */}
                                    {activeTab === 'steek' && (
                                      <div className="space-y-2.5 text-xs sm:text-sm">
                                        {/* Context & Satire (कटाक्ष एवं संदर्भ) */}
                                        <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-1">
                                          <div className="flex items-center gap-1.5 font-bold font-serif text-amber-800 dark:text-amber-300 text-xs">
                                            <span>🎯</span>
                                            <span>{language === 'pb' ? 'ਪ੍ਰਸੰਗ ਤੇ ਕਟਾਖਸ਼ (Context & Sharp Satire)' : language === 'en' ? 'Context & Satire' : 'कटाक्ष एवं संदर्भ (Context & Sharp Satire)'}</span>
                                          </div>
                                          <p className={`leading-relaxed ${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} opacity-90`}>
                                            {steekData.contextAndSatire[language] || steekData.contextAndSatire.hi}
                                          </p>
                                        </div>

                                        {/* Esoteric Spiritual Meaning (गूढ़ आध्यात्मिक रहस्य) */}
                                        <div className="p-3.5 rounded-2xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 text-purple-950 dark:text-purple-100 space-y-1">
                                          <div className="flex items-center gap-1.5 font-bold font-serif text-purple-800 dark:text-purple-300 text-xs">
                                            <Sparkles size={14} />
                                            <span>{language === 'pb' ? 'ਗੂੜ੍ਹ ਅਧਿਆਤਮਿਕ ਭੇਦ (Esoteric Spiritual Secret)' : language === 'en' ? 'Esoteric Meaning' : 'गूढ़ आध्यात्मिक रहस्य (Esoteric Secret)'}</span>
                                          </div>
                                          <p className={`leading-relaxed ${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} opacity-90`}>
                                            {steekData.esotericSecret[language] || steekData.esotericSecret.hi}
                                          </p>
                                        </div>

                                        {/* Sadhana Application (साधना सूत्र) */}
                                        <div className="p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-950 dark:text-emerald-100 space-y-1">
                                          <div className="flex items-center gap-1.5 font-bold font-serif text-emerald-800 dark:text-emerald-300 text-xs">
                                            <span>🧘</span>
                                            <span>{language === 'pb' ? 'ਸਾਧਨਾ ਕੁੰਜੀ (Practical Sadhana Key)' : language === 'en' ? 'Sadhana Key' : 'साधना सूत्र (Practical Sadhana Key)'}</span>
                                          </div>
                                          <p className={`leading-relaxed ${fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif'} opacity-90`}>
                                            {steekData.sadhanaApplication[language] || steekData.sadhanaApplication.hi}
                                          </p>
                                        </div>
                                      </div>
                                    )}

                                    {/* TAB 3: Sadhukari Vocabulary & Word Meanings */}
                                    {activeTab === 'shabdarth' && (
                                      <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-zinc-800/80 border border-amber-200/80 dark:border-zinc-700 space-y-3">
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs font-bold font-serif text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                                            <span>🔤</span>
                                            <span>{language === 'pb' ? 'ਇਸ ਬਾਣੀ ਦੇ ਸਾਧੁੱਕੜੀ ਸ਼ਬਦ (ਅਰਥ ਦੇਖਣ ਲਈ ਛੂਹੋ)' : language === 'en' ? 'Key Sandhukkari Terms (Tap to view meaning)' : 'इस वाणी के मुख्य साधुक्कड़ी शब्द (अर्थ जानने हेतु स्पर्श करें)'}</span>
                                          </span>
                                        </div>

                                        {steekData.keySadhukariTerms.length > 0 ? (
                                          <div className="flex flex-wrap gap-2">
                                            {steekData.keySadhukariTerms.map((term, tIdx) => (
                                              <button
                                                key={tIdx}
                                                type="button"
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  setSelectedGlossaryTerm(term);
                                                }}
                                                className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-amber-300 dark:border-amber-800/60 hover:border-amber-500 shadow-xs flex items-center gap-1.5 text-xs font-serif font-bold text-amber-900 dark:text-amber-200 hover:scale-105 transition cursor-pointer"
                                              >
                                                <span>✨ {language === 'pb' ? term.punjabi : language === 'en' ? term.transliteration : term.word}</span>
                                                <span className="text-[0.625rem] opacity-70 font-mono">({language === 'en' ? term.word : term.transliteration})</span>
                                              </button>
                                            ))}
                                          </div>
                                        ) : (
                                          <div className="text-xs text-gray-500 font-serif italic">
                                            {language === 'pb' ? 'ਇਸ ਪਦ ਦੇ ਸ਼ਬਦਾਂ \'ਤੇ ਟੈਪ ਕਰਕੇ ਸਿੱਧਾ ਅਰਥ ਦੇਖ ਸਕਦੇ ਹੋ।' : language === 'en' ? 'Tap on any word in this verse to view its literal & spiritual meaning.' : 'इस पद के किसी भी शब्द पर टैप करके आप तुरंत उसका अर्थ व आध्यात्मिक रहस्य जान सकते हैं।'}
                                          </div>
                                        )}

                                        <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                          <span className="text-[0.6875rem] text-gray-500 font-serif">
                                            {language === 'pb' ? 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਖਿਚੜੀ / ਸਾਧੁੱਕੜੀ ਭਾਸ਼ਾ' : language === 'en' ? 'Kabir Saheb’s Khichadi / Sandhukkari Language' : 'कबीर साहेब की खिचड़ी / साधुक्कड़ी भाषा'}
                                          </span>
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setShowAllGlossaryModal(true);
                                            }}
                                            className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                                          >
                                            <span>📚 {language === 'pb' ? 'ਪੂਰਾ ਸ਼ਬਦਕੋਸ਼ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Full Glossary' : 'पूरा शब्दकोश खोलें'}</span>
                                            <ChevronRight size={13} />
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Seamless Flow Next Sub-Chapter Card OR Peaceful End-of-Path Flower Blessing & Daily Haziri (only when verses exist) */}
                    {!isPureVaniMode && versesList.length > 0 && (
                      granthContext.nextSection ? (
                        <div
                          style={{
                            backgroundColor: theme.cardBg,
                            borderColor: theme.accentGold,
                            color: theme.textPrimary,
                          }}
                          className="my-6 p-4 sm:p-6 rounded-3xl border-2 backdrop-blur-md shadow-md text-center space-y-3"
                        >
                          <span style={{ color: theme.accentGold }} className="text-[0.6875rem] font-mono font-bold uppercase tracking-wider block">
                            {language === 'pb'
                              ? `ਅਗਲਾ ਉਪ-ਅਧਿਆਇ (${granthContext.currentIndex + 2}/${granthContext.totalCount})`
                              : language === 'en'
                              ? `Next Sub-Chapter (${granthContext.currentIndex + 2}/${granthContext.totalCount})`
                              : `अगला उप-अध्याय (${granthContext.currentIndex + 2}/${granthContext.totalCount})`}
                          </span>
                          <h3 style={{ color: theme.sacredMaroon }} className="text-base sm:text-xl font-serif font-black">
                            {granthContext.nextSection.title[language] || granthContext.nextSection.title.hi}
                          </h3>
                          {granthContext.nextSection.subtitle && (
                            <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif max-w-xl mx-auto leading-relaxed">
                              {granthContext.nextSection.subtitle[language] || granthContext.nextSection.subtitle.hi}
                            </p>
                          )}
                          <div>
                            <button
                              type="button"
                              onClick={() => {
                                sacredHaptics.lightTap();
                                handleSelectSection(granthContext.nextSection!.id);
                              }}
                              style={{
                                backgroundColor: theme.buttonPrimaryBg,
                                color: theme.buttonPrimaryText,
                              }}
                              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-serif font-black text-xs sm:text-sm shadow-md transition-all hover:opacity-95 active:scale-95 cursor-pointer whitespace-nowrap"
                            >
                              <span>
                                {language === 'pb'
                                  ? `ਅਗਲਾ ਉਪ-ਅਧਿਆਇ: ${granthContext.nextSection.title.pb || granthContext.nextSection.title.hi}`
                                  : language === 'en'
                                  ? `Next Sub-Chapter: ${granthContext.nextSection.title.en || granthContext.nextSection.title.hi}`
                                  : `अगला उप-अध्याय: ${granthContext.nextSection.title.hi}`}
                              </span>
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            backgroundColor: theme.cardBg,
                            borderColor: theme.accentGold,
                            color: theme.textPrimary,
                          }}
                          className="my-6 p-5 sm:p-7 rounded-3xl border-2 backdrop-blur-md shadow-lg text-center space-y-4"
                        >
                          <div
                            style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon, borderColor: theme.accentGold }}
                            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-bold font-serif"
                          >
                            <Flower2 size={15} />
                            <span>
                              {language === 'pb'
                                ? 'ਪਾਵਨ ਨਿਤਨੇਮ ਪਾਠ ਸੰਪੰਨ'
                                : language === 'en'
                                ? 'Sacred Nitnem Section Completed'
                                : 'पावन नितनेम पाठ सम्पन्न'}
                            </span>
                          </div>

                          <p style={{ color: theme.textPrimary }} className="text-base sm:text-xl font-serif font-black max-w-2xl mx-auto leading-relaxed">
                            {language === 'pb'
                              ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ! ਅੱਜ ਤੁਸੀਂ ਜੀਵਨ ਦੇ ਇੱਕ ਨਵੇਂ ਸੱਤ ਦਾ ਸਵਾਧਿਆਇ ਪੂਰਾ ਕੀਤਾ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ 🙏'
                              : language === 'en'
                              ? 'Saheb Bandagi Saheb! Today you have completed the sacred Swadhyay of a new truth of life. Saheb Bandagi Saheb 🙏'
                              : 'साहेब बंदगी साहेब! आज आपने जीवन के एक नए सत्य का स्वाध्याय पूरा किया। साहेब बंदगी साहेब 🙏'}
                          </p>

                          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                            <button
                              type="button"
                              onClick={handleMarkNitnemPathHaziri}
                              style={!haziriMarkedToday ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText } : undefined}
                              className={`min-h-[48px] inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-serif font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap ${
                                haziriMarkedToday
                                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                                  : 'hover:opacity-95'
                              }`}
                            >
                              {haziriMarkedToday ? <CheckCircle2 size={18} /> : <Flower2 size={18} />}
                              <span>
                                {haziriMarkedToday
                                  ? (language === 'pb'
                                      ? (justCompletedHaziriPath ? 'ਅੱਜ ਦੀ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਹੋ ਗਈ ✓' : 'ਅੱਜ ਦੀ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਹੈ ✓')
                                      : language === 'en'
                                      ? "Today's Nitnem Haziri Marked ✓"
                                      : 'आज की नितनेम हाज़िरी दर्ज है ✓')
                                  : (language === 'pb'
                                      ? 'ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ'
                                      : language === 'en'
                                      ? "Mark Today's Nitnem Haziri"
                                      : 'नितनेम हाज़िरी दर्ज करें')}
                              </span>
                            </button>

                            {currentOverallIndex < nitnemSections.length - 1 && (
                              <button
                                type="button"
                                onClick={handleNextSection}
                                style={{
                                  backgroundColor: theme.bgSecondary,
                                  color: theme.sacredMaroon,
                                  borderColor: theme.accentGold,
                                }}
                                className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border font-serif font-bold text-xs sm:text-sm hover:opacity-90 transition cursor-pointer whitespace-nowrap"
                              >
                                <span>
                                  {language === 'pb'
                                    ? 'ਅਗਲਾ ਗ੍ਰੰਥ ਭਾਗ ਖੋਲ੍ਹੋ'
                                    : language === 'en'
                                    ? 'Continue to Next Granth'
                                    : 'अगला ग्रन्थ खंड आरंभ करें'}
                                </span>
                                <ChevronRight size={15} />
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    )}

                    {/* Global Sacred Concluding Salutation: Every prayer ends with '।। साहेब बंदगी साहेब ।।' */}
                    <div className="text-center py-6 my-4 border-t-2 border-amber-500/25">
                      <div
                        style={{
                          backgroundColor: theme.cardBg,
                          borderColor: theme.accentGold,
                          color: theme.sacredMaroon,
                        }}
                        className="inline-flex flex-col items-center gap-1.5 px-6 sm:px-8 py-3.5 rounded-3xl border-2 backdrop-blur-md shadow-md"
                      >
                        <span style={{ color: theme.accentGold }} className="text-[0.6875rem] font-mono font-bold uppercase tracking-wider">
                          {language === 'pb' ? '॥ ਸੰਪੂਰਨ ਸਮਾਪਤੀ ਵੰਦਨਾ ॥' : language === 'en' ? '|| Sacred Concluding Prostration ||' : '।। सम्पूर्ण समाप्ति वंदना ।।'}
                        </span>
                        <span className="font-serif font-black text-base sm:text-lg tracking-normal">
                          {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
                        </span>
                      </div>
                    </div>
                </div>
              </div>

                    
                  </motion.div>
            ) : (
              <motion.div 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleFramerMotionDragEnd}
                className="space-y-4 touch-pan-y"
              >
                <div className="text-center py-2 px-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs font-serif font-bold text-amber-900 dark:text-amber-300">
                  📖 वास्तविक 3D पोथी पठन: हाथ से पन्ना खींचकर या स्वाइप (Swipe) करके पलटें
                </div>
                  <PothiFlipBook
                    pages={pothiPages}
                    initialPage={pageFlipIndex}
                    granthName={currentSection.title[language] || currentSection.title.hi}
                    language={language}
                    onLanguageChange={onSelectLanguage}
                    themeMode={readerTheme}
                    fontSize={fontSizeLevel}
                    onFontSizeChange={(size) => handleSetLocalFontSizeLevel(size)}
                    onPageChange={(idx) => setPageFlipIndex(idx)}
                    onSaveBookmark={(vId) => handleMarkVerseRead(vId)}
                    onClose={() => setIsPageFlipMode(false)}
                    onThemeChange={(newTheme) => setReaderTheme(newTheme)}
                  />
              </motion.div>
            )}
          </div>
        )}

        {/* View Transition Padding */}
        <div className="h-16" />
      </div>

      {/* 🧭 Compact Floating Scroll Navigation Pill (Lower Bottom-Right Corner) */}
      {viewMode === 'reading' && !isPureVaniMode && (
        <aside
          aria-label="Scroll Navigation"
          className="fixed right-2 sm:right-4 bottom-16 sm:bottom-[4.25rem] z-30 flex flex-col items-center gap-1 p-0.5 sm:p-1 rounded-full bg-[#8B2500]/90 dark:bg-stone-900/90 text-white backdrop-blur-md border border-white/25 shadow-lg select-none"
        >
          <button
            type="button"
            onClick={scrollToContainerTop}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/30 active:scale-95 transition cursor-pointer"
            title={language === 'pb' ? 'ਸਭ ਤੋਂ ਉੱਪਰ ਜਾਓ (Top)' : language === 'en' ? 'Scroll to Top' : 'सबसे ऊपर जाएं (Top)'}
            aria-label="Scroll to Top"
          >
            <ChevronsUp size={14} />
          </button>
          <button
            type="button"
            onClick={scrollToContainerBottom}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/30 active:scale-95 transition cursor-pointer"
            title={language === 'pb' ? 'ਸਭ ਤੋਂ ਹੇਠਾਂ ਜਾਓ (Bottom)' : language === 'en' ? 'Scroll to Bottom' : 'सबसे नीचे जाएं (Bottom)'}
            aria-label="Scroll to Bottom"
          >
            <ChevronsDown size={14} />
          </button>
        </aside>
      )}

      {/* FIXED FOOTER NAVIGATION PANEL ("पिछला पाठ / अगला पाठ") - Hidden in Pure Vani Audio Mode to keep mobile sticky footprint <= 15% */}
      {viewMode === 'reading' && !isPureVaniMode && (
        <footer
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.cardBorder,
            color: theme.textPrimary,
          }}
          className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t shadow-lg px-3 sm:px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] print:hidden"
        >
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
            {/* Previous Paath */}
            <button
              type="button"
              onClick={handlePrevSection}
              disabled={currentOverallIndex === 0}
              style={currentOverallIndex !== 0 ? {
                backgroundColor: theme.bgSecondary,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              } : undefined}
              className={`min-h-[44px] flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                currentOverallIndex === 0
                  ? 'opacity-30 cursor-not-allowed bg-gray-100 dark:bg-zinc-800 text-gray-400'
                  : 'border hover:opacity-90 active:scale-95 shadow-xs'
              }`}
            >
              <ChevronLeft size={16} />
              <span>{rt.prevPath || 'पिछला पाठ'}</span>
            </button>

            {/* Center Paath Progress / Title */}
            <div className="text-center px-1 flex-1 min-w-0">
              <span style={{ color: theme.accentGold }} className="text-[0.625rem] sm:text-[0.6875rem] font-mono font-black uppercase tracking-wider block truncate">
                {rt?.textSwaroop || 'पाठ'} {currentOverallIndex + 1} / {nitnemSections.length}
              </span>
              <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif font-black truncate mt-0.5">
                {currentSection?.title?.[language] || currentSection?.title?.hi || ''}
              </p>
            </div>

            {/* Next Paath */}
            <button
              type="button"
              onClick={handleNextSection}
              disabled={currentOverallIndex === nitnemSections.length - 1}
              style={currentOverallIndex !== nitnemSections.length - 1 ? {
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              } : undefined}
              className={`min-h-[44px] flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                currentOverallIndex === nitnemSections.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-gray-100 dark:bg-zinc-800 text-gray-400'
                  : 'hover:opacity-95 shadow-md active:scale-95'
              }`}
            >
              <span>{rt?.nextPath || 'अगला पाठ'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </footer>
      )}

      {/* Floating Audio-Synced Controller Bar (Pure Vani Mode + Full Bani Narration) */}
      {(isFullBaniAudioPlaying || isPureVaniMode || completedNextSectionInfo) && (
        <div
          className={`fixed left-1/2 -translate-x-1/2 z-[130] w-[96%] max-w-xl animate-in slide-in-from-bottom-5 duration-200 print:hidden ${
            isPureVaniMode ? 'bottom-3' : 'bottom-16 sm:bottom-20'
          }`}
        >
          <div className="px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-zinc-950/95 text-white border border-amber-500/60 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col gap-1.5">
              {/* Row 1: Status + Chapter/Verse Counter + Continuity Mode / 1-Tap Next Chapter */}
              <div className="min-w-0 flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[0.6875rem] font-serif text-amber-300 truncate">
                    <span>
                      {language === 'pb'
                        ? (isAudioPaused
                            ? 'ਵਿਰਾਮ (Paused)'
                            : isFullBaniAudioPlaying
                            ? 'ਸਿਰਫ਼ ਬਾਣੀ · ਆਟੋ-ਸਕ੍ਰੌਲ'
                            : completedNextSectionInfo
                            ? 'ਉਪ-ਅਧਿਆਇ ਸੰਪੂਰਨ'
                            : 'ਸੰਪੂਰਨ ਪਾਠ ਸੰਪੰਨ')
                        : language === 'en'
                        ? (isAudioPaused
                            ? 'Paused'
                            : isFullBaniAudioPlaying
                            ? 'Pure Vani · Synced Scroll'
                            : completedNextSectionInfo
                            ? 'Chapter Completed'
                            : 'Path Completed')
                        : (isAudioPaused
                            ? 'विराम (Paused)'
                            : isFullBaniAudioPlaying
                            ? 'सिर्फ वाणी · ऑटो-स्क्रॉल'
                            : completedNextSectionInfo
                            ? 'उप-अध्याय पूर्ण'
                            : 'पूर्ण पाठ सम्पन्न')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums text-amber-200">
                      {language === 'pb'
                        ? `ਅਧਿਆਇ ${granthContext.currentIndex + 1}/${granthContext.totalCount}`
                        : language === 'en'
                        ? `Ch ${granthContext.currentIndex + 1}/${granthContext.totalCount}`
                        : `अध्याय ${granthContext.currentIndex + 1}/${granthContext.totalCount}`}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums text-amber-200">
                      {versesList.length === 0
                        ? '0/0'
                        : activeRecitingVerseIdx !== null
                        ? `${activeRecitingVerseIdx + 1}/${versesList.length}`
                        : `${activeVerseIndex + 1}/${versesList.length}`}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif font-bold truncate text-white">
                    {currentSection.title[language] || currentSection.title.hi}
                  </p>
                </div>

                {/* Single-Chapter Completion CTA OR Continuity Mode Toggle */}
                {completedNextSectionInfo ? (
                  <button
                    type="button"
                    onClick={() => handleSelectSection(completedNextSectionInfo.id, { autoPlayAudio: true })}
                    className="min-h-[44px] sm:min-h-[38px] px-3 flex items-center justify-center gap-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-serif font-bold text-xs shadow-md transition cursor-pointer whitespace-nowrap shrink-0"
                    title={completedNextSectionInfo.title[language] || completedNextSectionInfo.title.hi}
                    aria-label="Play Next Sub-Chapter"
                  >
                    <span>
                      {language === 'pb'
                        ? 'ਅਗਲਾ ਪਾਠ ਸੁਣੋ'
                        : language === 'en'
                        ? `Next (${completedNextSectionInfo.chapterNumber}/${completedNextSectionInfo.totalInGranth})`
                        : 'अगला पाठ सुनें'}
                    </span>
                    <ChevronRight size={15} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleTogglePathContinuity}
                    className={`min-h-[44px] sm:min-h-[38px] px-2.5 flex items-center justify-center rounded-xl text-[0.6875rem] font-serif font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                      pathContinuityMode === 'full-path'
                        ? 'bg-amber-500/25 text-amber-200 border border-amber-400/50'
                        : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/15'
                    }`}
                    title={
                      language === 'pb'
                        ? 'ਲਗਾਤਾਰ ਪੂਰਾ ਪਾਠ / ਇਕ ਅਧਿਆਇ ਤੇ ਵਿਰਾਮ ਬਦਲੋ'
                        : language === 'en'
                        ? 'Toggle Full Granth Auto-Play vs Single Chapter Stop'
                        : 'पूर्ण पाठ निरंतर / एक पाठ विराम बदलें'
                    }
                    aria-label="Toggle Path Continuity Mode"
                  >
                    {pathContinuityMode === 'full-path'
                      ? (language === 'pb'
                          ? `ਪੂਰਾ ਪਾਠ (੧-${granthContext.totalCount})`
                          : language === 'en'
                          ? `Full Path (1-${granthContext.totalCount})`
                          : `पूर्ण पाठ (१-${granthContext.totalCount})`)
                      : (language === 'pb'
                          ? '੧ ਅਧਿਆਇ ਵਿਰਾਮ'
                          : language === 'en'
                          ? 'Single Ch Stop'
                          : '१ पाठ विराम')}
                  </button>
                )}
              </div>

              {/* Row 2: Compact Action Controls (Prev | Play/Pause | Next | Speed | Dhun Cycle | Close) */}
              <div className="flex items-center justify-between gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const base = activeRecitingVerseIdx ?? activeVerseIndex;
                    if (base > 0) {
                      playBaniFromCoord(base - 1, 0);
                    }
                  }}
                  disabled={(activeRecitingVerseIdx ?? activeVerseIndex) <= 0}
                  className="min-w-[44px] min-h-[44px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition cursor-pointer text-white"
                  title={language === 'pb' ? 'ਪਿਛਲਾ ਪਦ' : language === 'en' ? 'Previous Verse' : 'पिछला पद'}
                  aria-label="Previous Verse"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={handlePauseOrResumeAudio}
                  className="min-w-[44px] min-h-[44px] sm:min-w-[44px] sm:min-h-[40px] px-3 flex items-center justify-center gap-1 rounded-xl bg-[#8B2500] hover:bg-[#7C1D00] text-white shadow-md transition cursor-pointer font-serif font-bold text-xs whitespace-nowrap"
                  title={isAudioPaused || !isFullBaniAudioPlaying ? 'Resume' : 'Pause'}
                  aria-label={isAudioPaused || !isFullBaniAudioPlaying ? 'Play or Resume Audio' : 'Pause Audio'}
                >
                  {isAudioPaused || !isFullBaniAudioPlaying ? <Play size={17} /> : <Pause size={17} />}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const base = activeRecitingVerseIdx ?? activeVerseIndex;
                    if (base < versesList.length - 1) {
                      playBaniFromCoord(base + 1, 0);
                    }
                  }}
                  disabled={(activeRecitingVerseIdx ?? activeVerseIndex) >= versesList.length - 1}
                  className="min-w-[44px] min-h-[44px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition cursor-pointer text-white"
                  title={language === 'pb' ? 'ਅਗਲਾ ਪਦ' : language === 'en' ? 'Next Verse' : 'अगला पद'}
                  aria-label="Next Verse"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Speed Cycle Control */}
                <button
                  type="button"
                  onClick={() => {
                    const presets = [0.75, 0.9, 1.0, 1.25, 1.5];
                    const currentIdx = presets.findIndex(p => Math.abs(p - audioSpeedLevel) < 0.05);
                    const nextSpeed = presets[(currentIdx + 1) % presets.length];
                    handleChangeAudioSpeed(nextSpeed);
                  }}
                  className="min-w-[44px] min-h-[44px] sm:min-h-[40px] px-2 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 font-mono tabular-nums font-bold text-xs transition cursor-pointer whitespace-nowrap"
                  title={language === 'pb' ? 'ਬੋਲਣ ਦੀ ਗਤੀ ਬਦਲੋ' : language === 'en' ? 'Voice Speed' : 'आवाज़ गति बदलें'}
                  aria-label="Change Playback Speed"
                >
                  {audioSpeedLevel}x
                </button>

                {/* Dhun Cycle Control: Satyanaam Dhun -> Tanpura -> Off */}
                <button
                  type="button"
                  onClick={handleCycleDhunInPureVani}
                  className={`min-w-[44px] min-h-[44px] sm:min-h-[40px] px-2.5 flex items-center justify-center gap-1 rounded-xl text-xs font-serif font-bold transition cursor-pointer whitespace-nowrap ${
                    isBackgroundDhunPlaying
                      ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300'
                  }`}
                  title={
                    language === 'pb'
                      ? 'ਧੁਨ ਬਦਲੋ: ਸਤਯਨਾਮ → ਤਾਨਪੁਰਾ → ਬੰਦ'
                      : language === 'en'
                      ? 'Switch Dhun: Satyanaam → Tanpura → Off'
                      : 'धुन बदलें: सत्यनाम → तानपुरा → बंद'
                  }
                  aria-label="Cycle Background Dhun"
                >
                  <Music size={15} />
                  <span>
                    {!isBackgroundDhunPlaying
                      ? (language === 'pb' ? 'ਧੁਨ ਬੰਦ' : language === 'en' ? 'Off' : 'धुन बंद')
                      : dhunSound === 'satyanaam'
                      ? (language === 'pb' ? 'ਸਤਯਨਾਮ' : language === 'en' ? 'Satyanaam' : 'सत्यनाम')
                      : dhunSound === 'tanpura'
                      ? (language === 'pb' ? 'ਤਾਨਪੁਰਾ' : language === 'en' ? 'Tanpura' : 'तानपुरा')
                      : (language === 'pb' ? 'ਬੰਸਰੀ' : language === 'en' ? 'Flute' : 'बांसुरी')}
                  </span>
                </button>

                {/* Close / Exit */}
                <button
                  type="button"
                  onClick={() => {
                    if (isPureVaniMode) {
                      exitPureVaniMode(true);
                    } else {
                      stopAllAudioPlayback();
                    }
                  }}
                  className="min-w-[44px] min-h-[44px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-xl bg-red-600/30 hover:bg-red-600/50 text-red-200 transition cursor-pointer"
                  title={language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Exit Pure Vani' : 'बंद करें'}
                  aria-label="Exit Pure Vani Audio Mode"
                >
                  <X size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Digital Jaap Mala Modal Dialog */}
      {showMalaModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs">
          <div className="max-w-sm w-full animate-in fade-in zoom-in-95 duration-200">
            <JaapMalaCounter
              language={language}
              onClose={() => setShowMalaModal(false)}
            />
          </div>
        </div>
      )}

      {/* Tap-to-Mean Sandhukkari Non-Intrusive Tooltip */}
      {selectedGlossaryTerm && (
        <SmartGlossaryTooltip
          term={selectedGlossaryTerm}
          targetRect={glossaryTargetRect}
          onClose={() => {
            setSelectedGlossaryTerm(null);
            setGlossaryTargetRect(null);
          }}
          onOpenFullModal={(term) => {
            setSelectedGlossaryTerm(null);
            setFullDetailGlossaryTerm(term);
          }}
          language={language}
        />
      )}

      {/* Full Sandhukkari Word Detail Modal (when user clicks 'View Details' in the tooltip) */}
      {fullDetailGlossaryTerm && (
        <SandhukkariGlossaryModal
          term={fullDetailGlossaryTerm}
          isOpen={Boolean(fullDetailGlossaryTerm)}
          onClose={() => setFullDetailGlossaryTerm(null)}
          language={language}
        />
      )}

      {/* Full Sandhukkari Vocabulary Explorer Modal */}
      {showAllGlossaryModal && (
        <div className="fixed inset-0 z-[190] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm">
          <div
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold, color: theme.textPrimary }}
            className="border-2 backdrop-blur-xl rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
          >
            {/* Header */}
            <div style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }} className="p-4 sm:p-5 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }} className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm">
                  📚
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-serif text-gray-900 dark:text-gray-100">
                    {language === 'pb' ? 'ਸਾਧੁੱਕੜੀ ਸ਼ਬਦਕੋਸ਼ (ਖਿਚੜੀ ਭਾਸ਼ਾ)' : language === 'en' ? 'Sandhukkari Spiritual Glossary' : 'साधुक्कड़ी शब्दकोश (संत / खिचड़ी भाषा)'}
                  </h3>
                  <p className="text-[0.6875rem] text-amber-800 dark:text-amber-400 font-serif">
                    {language === 'pb' ? 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਰਥ ਤੇ ਆਤਮਿਕ ਰਹੱਸ' : language === 'en' ? 'Deep meanings, etymology & spiritual essence of Kabir Saheb Bani' : 'कबीर साहेब की वाणी के गूढ़ शब्दार्थ, व्युत्पत्ति एवं आत्मिक रहस्य'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAllGlossaryModal(false)}
                className="p-2 rounded-xl bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Filter */}
            <div className="p-3 sm:p-4 border-b border-gray-100 dark:border-zinc-800 bg-amber-50/40 dark:bg-zinc-900/60">
              <input
                type="text"
                value={glossarySearchQuery}
                onChange={(e) => setGlossarySearchQuery(e.target.value)}
                placeholder={language === 'pb' ? 'ਕੋਈ ਵੀ ਸਾਧੁੱਕੜੀ ਸ਼ਬਦ ਖੋਜੋ...' : language === 'en' ? 'Search any Sandhukkari term...' : 'कोई भी साधुक्कड़ी शब्द खोजें (उदा. अनहद, सुरति, हंस)...'}
                className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-zinc-800 border border-amber-300/60 dark:border-zinc-700 text-xs sm:text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Terms List Grid */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(SANDHUKKARI_GLOSSARY)
                  .filter(term => {
                    if (!glossarySearchQuery.trim()) return true;
                    const q = glossarySearchQuery.toLowerCase();
                    return (
                      term.word.toLowerCase().includes(q) ||
                      term.punjabi.toLowerCase().includes(q) ||
                      term.transliteration.toLowerCase().includes(q) ||
                      (term.literalMeaning.hi && term.literalMeaning.hi.toLowerCase().includes(q)) ||
                      (term.esotericMeaning.hi && term.esotericMeaning.hi.toLowerCase().includes(q))
                    );
                  })
                  .map((term, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedGlossaryTerm(term)}
                      className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-zinc-800/60 border border-amber-200/70 dark:border-zinc-700/80 hover:border-amber-500 hover:scale-[1.02] transition cursor-pointer shadow-xs group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h4 className="font-serif font-black text-sm text-amber-900 dark:text-amber-200 group-hover:text-amber-600">
                            {language === 'pb' ? term.punjabi : language === 'en' ? term.transliteration : term.word}
                          </h4>
                          <span className="text-[0.625rem] font-mono text-gray-500 font-bold">
                            {language === 'en' ? term.word : term.transliteration}
                          </span>
                        </div>
                        <p className="text-[0.6875rem] font-serif text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                          {term.literalMeaning[language] || term.literalMeaning.hi}
                        </p>
                      </div>

                      <div className="pt-2 mt-2 border-t border-amber-200/40 dark:border-zinc-700/40 flex items-center justify-between text-[0.625rem] font-serif text-amber-700 dark:text-amber-400 font-bold">
                        <span>✨ {language === 'pb' ? 'ਗੂੜ੍ਹ ਰਹੱਸ ਦੇਖੋ' : language === 'en' ? 'View Deep Essence' : 'गूढ़ रहस्य देखें'}</span>
                        <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex items-center justify-between text-xs">
              <span className="font-serif opacity-75 text-[0.6875rem]">
                {Object.keys(SANDHUKKARI_GLOSSARY).length} {language === 'pb' ? 'ਪਵਿੱਤਰ ਸ਼ਬਦ ਉਪਲਬਧ ਹਨ' : language === 'en' ? 'Sacred Sandhukkari Terms Available' : 'पवित्र साधुक्कड़ी शब्द उपलब्ध'}
              </span>
              <button
                type="button"
                onClick={() => setShowAllGlossaryModal(false)}
                className="px-4 py-1.5 rounded-xl bg-[#8B2500] text-white font-bold text-xs hover:bg-[#7C1D00] transition cursor-pointer"
              >
                {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sacred Maryada & Protocol Modal */}
      {showMaryadaModal && (
        <SacredMaryadaModal
          isOpen={showMaryadaModal}
          onClose={() => setShowMaryadaModal(false)}
          language={language}
        />
      )}

      {/* Shabad Graphic Share Card Modal */}
      {sharingVerse && (
        <ShabadShareModal
          verse={sharingVerse}
          sectionTitle={currentSection.title[language] || currentSection.title.hi}
          isOpen={Boolean(sharingVerse)}
          onClose={() => setSharingVerse(null)}
          language={language}
        />
      )}

      {/* Acharya Parampara Modal */}
      {showAcharyaModal && (
        <AcharyaParamparaModal
          isOpen={showAcharyaModal}
          onClose={() => setShowAcharyaModal(false)}
          language={language}
        />
      )}

      {/* Chouka Aarti Vidhi Guide Modal */}
      {showChoukaVidhiModal && (
        <ChoukaAartiVidhiModal
          isOpen={showChoukaVidhiModal}
          onClose={() => setShowChoukaVidhiModal(false)}
          language={language}
        />
      )}

      {/* Damakheda Ashram Route & Stay Guide Modal */}
      {showRouteModal && (
        <DamakhedaRouteModal
          isOpen={showRouteModal}
          onClose={() => setShowRouteModal(false)}
          language={language}
        />
      )}

      {/* Local Cloud Backup & Restore Modal */}
      {showBackupModal && (
        <BackupRestoreModal
          isOpen={showBackupModal}
          onClose={() => setShowBackupModal(false)}
          language={language}
        />
      )}

      {/* Text Correction Reporting Modal */}
      {showCorrectionModal && (
        <TextCorrectionModal
          isOpen={showCorrectionModal}
          onClose={() => setShowCorrectionModal(false)}
          language={language}
          defaultVerseText={correctionVerseText}
          sectionTitle={currentSection.title[language] || currentSection.title.hi}
        />
      )}

      {/* Nitnem Haziri Sankalp Modal */}
      <HaziriModal
        isOpen={showNitnemHaziriModal}
        onClose={() => setShowNitnemHaziriModal(false)}
        language={language}
        haziriState={haziriModalState}
        isTodayMarked={haziriMarkedToday}
        onMarkNitnemHaziri={handleMarkNitnemPathHaziri}
        onTriggerFlowerShower={() => triggerSacredFlowerShower()}
      />

      {/* Collapsible Bottom Sheet Panel for Settings & Controls (Stays hidden until triggered) */}
                    <AnimatePresence>
                      {isSettingsExpanded && (
                        <>
                          {/* Backdrop Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSettingsExpanded(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[120]"
                          />

                          {/* Bottom Sheet Modal */}
                          <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold, color: theme.textPrimary }}
                            className="fixed bottom-0 left-0 right-0 z-[130] backdrop-blur-xl rounded-t-3xl shadow-2xl p-3 sm:p-6 pb-safe border-t-2 max-h-[86dvh] overflow-y-auto overflow-x-hidden overscroll-contain"
                          >
                            <div
                              onClick={() => setIsSettingsExpanded(false)}
                              className="w-12 h-1.5 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-3 cursor-pointer"
                              aria-hidden="true"
                            />
                            <div className="w-full flex flex-col gap-4">
                              {/* Header with Title & Quick Close button */}
                              <div className="flex flex-wrap items-center justify-between border-b pb-3 border-amber-200/50 dark:border-zinc-800 gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="text-xl shrink-0">⚙️</span>
                                  <div className="min-w-0">
                                    <h3 className="font-serif font-black text-base text-gray-800 dark:text-gray-100 leading-tight truncate">
                                      {language === 'pb' ? 'ਉੱਨਤ ਪਾਠ ਸੁਵਿਧਾਵਾਂ (Advanced Reading Suite)' : language === 'en' ? 'Advanced Reading Suite & Controls' : 'उन्नत पठन साधन (Advanced Reading Suite)'}
                                    </h3>
                                    <p className="text-[0.625rem] font-serif text-amber-700 dark:text-amber-400 truncate">
                                      {language === 'pb'
                                        ? '੫ ਵਿਸ਼ੇਸ਼ ਸਮੂਹ: ਪ੍ਰਾਰੂਪ, ਸਕ੍ਰੌਲ, ਥੀਮ, ਧਿਆਨ ਸਾਧਨਾ ਤੇ ਜਾਪ ਟੀਚਾ'
                                        : language === 'en'
                                        ? '5 Control Groups: Format, Scroll, Themes, Meditation & Jaap Target'
                                        : '५ विशेष समूह: प्रारूप, स्क्रॉल, थीम, ध्यान साधना एवं जाप लक्ष्य'}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  {onOpenSettings && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setIsSettingsExpanded(false);
                                        onOpenSettings();
                                      }}
                                      className="min-h-[44px] sm:min-h-[38px] px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-bold font-serif hover:bg-amber-100 transition cursor-pointer flex items-center gap-1 shadow-2xs"
                                      title={language === 'pb' ? 'ਐਪ ਸੈਟਿੰਗਜ਼' : language === 'en' ? 'Global App Settings' : 'समग्र ऐप सेटिंग्स'}
                                    >
                                      <Settings size={15} />
                                      <span className="hidden sm:inline">{language === 'pb' ? 'ਐਪ ਸੈਟਿੰਗਜ਼' : language === 'en' ? 'App Settings' : 'ऐप सेटिंग्स'}</span>
                                    </button>
                                  )}
                                  <button
                                    type='button'
                                    onClick={() => setIsSettingsExpanded(false)}
                                    className='min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 border border-amber-500/40 shadow-sm text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shrink-0'
                                    title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Back' : 'वापस जाएं'}
                                  >
                                    <ArrowLeft size={16} />
                                    <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Back' : 'वापस जाएं'}</span>
                                  </button>
                                </div>
                              </div>

                              {/* Navigation Group Filter Pills */}
                              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                                {[
                                  { id: 'all', label: language === 'pb' ? '🌟 ਸਭ ਸੁਵਿਧਾਵਾਂ' : language === 'en' ? '🌟 All Tools' : '🌟 सम्पूर्ण साधन', short: 'All' },
                                  { id: 'framework', label: language === 'pb' ? '📖 ੧. ਪਾਠ ਪ੍ਰਾਰੂਪ' : language === 'en' ? '📖 1. Reader Format' : '📖 १. पठन प्रारूप', short: 'प्रारूप' },
                                  { id: 'autoscroll', label: language === 'pb' ? '⚡ ੨. ਸਵੈ-ਸਕ੍ਰੌਲ' : language === 'en' ? '⚡ 2. Auto-Scroll' : '⚡ २. स्वतः स्क्रॉल', short: 'स्क्रॉल' },
                                  { id: 'themes', label: language === 'pb' ? '🎨 ੩. ਥੀਮ ਤੇ ਰੰਗ' : language === 'en' ? '🎨 3. Themes & Colors' : '🎨 ३. थीम एवं रंग', short: 'थीम' },
                                  { id: 'audio', label: language === 'pb' ? '🧘 ੪. ਆਡੀਓ ਤੇ ਧਿਆਨ' : language === 'en' ? '🧘 4. Audio & Meditation' : '🧘 ४. ऑडियो एवं ध्यान', short: 'ध्यान' },
                                  { id: 'targets', label: language === 'pb' ? '📿 ੫. ਜਾਪ ਟੀਚਾ' : language === 'en' ? '📿 5. Chanting Target' : '📿 ५. जाप लक्ष्य', short: 'जाप' },
                                ].map((tab) => (
                                  <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setSettingsTab(tab.id as any)}
                                    className={`min-h-[42px] sm:min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all whitespace-nowrap border cursor-pointer ${
                                      settingsTab === tab.id
                                        ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-sm scale-[1.02]'
                                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                    }`}
                                  >
                                    {tab.label}
                                  </button>
                                ))}
                              </div>

                              {/* ========================================================= */}
                              {/* GROUP 1: READING FRAMEWORK (निरंतर पाठ vs पेज फ़्लिप)    */}
                              {/* ========================================================= */}
                              {(settingsTab === 'all' || settingsTab === 'framework') && (
                                <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-zinc-900 border-2 border-amber-500/20 space-y-3">
                                  <div className="flex items-center justify-between border-b border-amber-500/15 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base">📖</span>
                                      <h4 className="font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-300">
                                        {language === 'pb'
                                          ? 'ਸਮੂਹ ੧: ਪਾਠ ਪ੍ਰਾਰੂਪ (Reading Framework)'
                                          : language === 'en'
                                          ? 'Group 1: Reading Framework & Script'
                                          : 'समूह १: पठन प्रारूप (Reading Framework)'}
                                      </h4>
                                    </div>
                                    <span className="text-[0.625rem] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                                      {isPageFlipMode
                                        ? (language === 'pb' ? 'ਪੋਥੀ ਮੋਡ' : language === 'en' ? 'Page Flip' : 'पेज फ़्लिप')
                                        : (language === 'pb' ? 'ਸਕ੍ਰੌਲ ਮੋਡ' : language === 'en' ? 'Smooth Scroll' : 'निरंतर स्क्रॉल')}
                                    </span>
                                  </div>

                                  {/* 8 SACRED READING MODES SELECTOR */}
                                  <ReadingModeSelector
                                    currentMode={currentReadingMode}
                                    onModeSelect={handleModeSelect}
                                    language={language}
                                  />

                                  {/* Script Lipi, Font Size, Line Height & Font Face Controls */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-amber-500/10">
                                    {/* Script selector */}
                                    <div className="space-y-1.5">
                                      <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                        🪷 {language === 'pb' ? 'ਲਿਪੀ ਵਿਕਲਪ:' : language === 'en' ? 'Script Option:' : 'लिपि विकल्प (Script):'}
                                      </span>
                                      <div className="flex items-center gap-1 flex-wrap">
                                        {([
                                          { id: 'hi' as const, label: '🪷 देवनागरी' },
                                          { id: 'pb' as const, label: '☬ ਗੁਰਮੁਖੀ' },
                                          { id: 'en' as const, label: '🔤 Roman' },
                                          { id: 'tri' as const, label: '🌐 3-in-1' },
                                        ] as const).map((scr) => (
                                          <button
                                            key={scr.id}
                                            type="button"
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              setGlobalScriptMode(scr.id);
                                              if (onSelectLanguage && (scr.id === 'hi' || scr.id === 'pb' || scr.id === 'en')) {
                                                onSelectLanguage(scr.id as Language);
                                              }
                                            }}
                                            className={`min-h-[40px] sm:min-h-[34px] px-2.5 py-1 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer ${
                                              globalScriptMode === scr.id
                                                ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs'
                                                : 'bg-white/80 dark:bg-zinc-800/80 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-amber-50'
                                            }`}
                                          >
                                            {scr.label}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Font Size controls */}
                                    <div className="space-y-1.5">
                                      <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                        🔤 {language === 'pb' ? 'ਅੱਖਰ ਅਕਾਰ:' : language === 'en' ? 'Font Size:' : 'अक्षर आकार (Font Size):'}
                                      </span>
                                      <div className="flex items-center gap-1">
                                        {(['small', 'normal', 'large', 'xlarge', 'elderly'] as const).map(fs => (
                                          <button
                                            key={fs}
                                            type="button"
                                            onClick={() => handleSetLocalFontSizeLevel(fs)}
                                            className={`min-h-[40px] sm:min-h-[34px] flex-1 py-1 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer ${
                                              fontSizeLevel === fs || (fs === 'normal' && fontSizeLevel === 'medium') || (fs === 'xlarge' && fontSizeLevel === 'xl')
                                                ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs' 
                                                : 'bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                            }`}
                                          >
                                            {fs === 'small' ? 'A-' : fs === 'normal' ? 'Aa' : fs === 'large' ? 'A+' : fs === 'xlarge' ? 'A++' : '👵'}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Line Spacing controls */}
                                    <div className="space-y-1.5">
                                      <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                        ↕️ {language === 'pb' ? 'ਲਾਈਨ ਅੰਤਰਾਲ:' : language === 'en' ? 'Line Spacing:' : 'पंक्ति अंतराल (Line Height):'}
                                      </span>
                                      <div className="flex items-center gap-1">
                                        {([
                                          { id: 'small' as const, label: language === 'pb' ? 'ਘੱਟ' : language === 'en' ? 'Compact' : 'कॉम्पैक्ट' },
                                          { id: 'medium' as const, label: language === 'pb' ? 'ਸੰਤੁਲਿਤ' : language === 'en' ? 'Balanced' : 'संतुलित' },
                                          { id: 'large' as const, label: language === 'pb' ? 'ਖੁੱਲ੍ਹਾ' : language === 'en' ? 'Spacious' : 'विस्तृत' },
                                        ]).map(lh => (
                                          <button
                                            key={lh.id}
                                            type="button"
                                            onClick={() => {
                                              sacredHaptics.lightTap();
                                              setLineHeight(lh.id);
                                            }}
                                            className={`min-h-[40px] sm:min-h-[34px] flex-1 py-1 px-2 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer ${
                                              lineHeight === lh.id
                                                ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs'
                                                : 'bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                            }`}
                                          >
                                            {lh.label}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Font Style (7 Script Styles) */}
                                    <div className="space-y-1.5">
                                      <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                        ✒️ {language === 'pb' ? 'ਅੱਖਰ ਤੇ ਫੌਂਟ ਸ਼ੈਲੀ (7 ਵਿਕਲਪ):' : language === 'en' ? 'Font Style (7 Options):' : 'लिपि एवं फॉन्ट शैली (7 विकल्प):'}
                                      </span>
                                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                                        {FONT_STYLE_OPTIONS.map(ff => (
                                          <button
                                            key={ff.id}
                                            type="button"
                                            onClick={() => {
                                              sacredHaptics.lightTap();
                                              setFontStyle(ff.id);
                                            }}
                                            className={`min-h-[38px] sm:min-h-[34px] py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all border cursor-pointer text-left flex flex-col gap-0.5 ${
                                              fontStyle === ff.id
                                                ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs ring-1 ring-amber-400'
                                                : 'bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                            }`}
                                          >
                                            <span className="truncate">{ff.icon} {ff.label[language] || ff.label.hi}</span>
                                            <span className={`text-[10px] opacity-80 truncate ${ff.previewClass}`}>{ff.sample[language] || ff.sample.hi}</span>
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* ========================================================= */}
                              {/* GROUP 2: AUTO-SCROLL (स्वतः स्क्रॉल 0.5x - 5x)            */}
                              {/* ========================================================= */}
                              {(settingsTab === 'all' || settingsTab === 'autoscroll') && (
                                <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-zinc-900 border-2 border-emerald-500/20 space-y-3">
                                  <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base">⚡</span>
                                      <h4 className="font-serif font-black text-xs sm:text-sm text-emerald-950 dark:text-emerald-300">
                                        {language === 'pb' ? 'ਸਮੂਹ ੨: ਸਵੈ-ਸਕ੍ਰੌਲ ਤੇ ਗਤੀ' : language === 'en' ? 'Group 2: Auto-Scroll & Speed' : 'समूह २: स्वतः स्क्रॉल एवं गति'}
                                      </h4>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                      className={`px-3 py-1 rounded-full text-xs font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5 ${
                                        isAutoPlaying
                                          ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40 animate-pulse'
                                          : 'bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300'
                                      }`}
                                    >
                                      <span>{isAutoPlaying ? (language === 'pb' ? '● ਚਾਲੂ' : language === 'en' ? '● Active' : '● चालू') : (language === 'pb' ? '○ ਬੰਦ' : language === 'en' ? '○ Off' : '○ बंद')}</span>
                                    </button>
                                  </div>

                                  {/* Speed factors 0.5x, 1x, 1.5x, 2x, 2.5x, 3x, 5x */}
                                  <div className="space-y-1.5">
                                    <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                      ⏱️ {language === 'pb' ? 'ਸਕ੍ਰੌਲਿੰਗ ਗਤੀ ਗੁਣਾਂਕ:' : language === 'en' ? 'Scrolling Speed Factors:' : 'स्क्रॉलिंग गति गुणक:'}
                                    </span>
                                    <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                                      {([0.5, 1, 1.5, 2, 2.5, 3, 5] as const).map(spd => (
                                        <button
                                          key={spd}
                                          type="button"
                                          onClick={() => {
                                            setAutoScrollSpeed(spd);
                                            if (!isAutoPlaying) setIsAutoPlaying(true);
                                          }}
                                          className={`py-2 rounded-xl text-xs font-mono font-black transition-all border cursor-pointer text-center ${
                                            autoScrollSpeed === spd 
                                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-400/40 scale-105' 
                                              : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-700 hover:bg-emerald-50'
                                          }`}
                                        >
                                          {spd}x
                                        </button>
                                      ))}
                                    </div>
                                    <p className="text-[0.625rem] font-serif text-gray-500 dark:text-gray-400 italic pt-1">
                                      {language === 'pb' ? 'ਸਕ੍ਰੀਨ ਛੂਹਣ ਜਾਂ ਉਂਗਲੀ ਨਾਲ ਹਿਲਾਉਣ ਤੇ ਸਵੈ-ਸਕ੍ਰੌਲ ਆਪਣੇ ਆਪ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦਾ ਹੈ।' : language === 'en' ? 'Auto-scroll gently pauses whenever you touch or manually scroll.' : 'स्क्रीन को छूने या स्क्रॉल करने पर स्वतः स्क्रॉल सहजता से विराम ले लेता है।'}
                                    </p>
                                  </div>
                                </div>
                              )}

                              {/* ========================================================= */}
                              {/* GROUP 3: THEMES (मूल, पोथी, ब्लैक, नेत्र)                  */}
                              {/* ========================================================= */}
                              {(settingsTab === 'all' || settingsTab === 'themes') && (
                                <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-zinc-900 border-2 border-amber-500/20 space-y-3">
                                  <div className="flex items-center justify-between border-b border-amber-500/15 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base">🎨</span>
                                      <h4 className="font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-300">
                                        {language === 'pb' ? 'ਸਮੂਹ ੩: ਪਾਠ ਥੀਮ ਤੇ ਰੰਗ' : language === 'en' ? 'Group 3: Reading Themes' : 'समूह ३: थीम एवं रंग'}
                                      </h4>
                                    </div>
                                    <span className="text-[0.625rem] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                                      {readerTheme === 'mool'
                                        ? (language === 'pb' ? 'ਮੂਲ' : language === 'en' ? 'Mool' : 'मूल')
                                        : (readerTheme === 'pothi' || readerTheme === 'sepia')
                                        ? (language === 'pb' ? 'ਪੋਥੀ' : language === 'en' ? 'Pothi' : 'पोथी')
                                        : (readerTheme === 'black' || readerTheme === 'dark')
                                        ? (language === 'pb' ? 'ਬਲੈਕ' : language === 'en' ? 'Black' : 'ब्लैक')
                                        : (language === 'pb' ? 'ਨੇਤ੍ਰ' : language === 'en' ? 'Netra' : 'नेत्र')}
                                    </span>
                                  </div>

                                  {/* 4 Themes: मूल, पोथी (Sepia), ब्लैक, नेत्र */}
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {[
                                      {
                                        id: 'mool' as const,
                                        label: language === 'pb' ? 'ਮੂਲ' : language === 'en' ? 'Mool' : 'मूल',
                                        sub: language === 'pb' ? 'ਲਾਈਟ ਕਰੀਮ' : language === 'en' ? 'Light Cream' : 'हल्का क्रीम',
                                        bgClass: 'bg-[#fffef9] border-[#e6dcbe] text-[#332211]',
                                        previewColor: '#fffef9',
                                        borderAccent: '#8b2500'
                                      },
                                      {
                                        id: 'pothi' as const,
                                        label: language === 'pb' ? 'ਪੋਥੀ (ਸੇਪੀਆ)' : language === 'en' ? 'Pothi (Sepia)' : 'पोथी (सेपिया)',
                                        sub: language === 'pb' ? 'ਪੁਰਾਤਨ ਪੱਤਰਾ' : language === 'en' ? 'Sepia Parchment' : 'पुरातन पत्र',
                                        bgClass: 'bg-[#fbf4e1] border-[#d6be8a] text-[#3a220c]',
                                        previewColor: '#fbf4e1',
                                        borderAccent: '#9a4208'
                                      },
                                      {
                                        id: 'black' as const,
                                        label: language === 'pb' ? 'ਬਲੈਕ' : language === 'en' ? 'Black' : 'ब्लैक',
                                        sub: language === 'pb' ? 'ਓਲੇਡ ਡਾਰਕ' : language === 'en' ? 'Pure Dark' : 'पूर्ण डार्क',
                                        bgClass: 'bg-[#09090b] border-[#3f3f46] text-[#fafafa]',
                                        previewColor: '#09090b',
                                        borderAccent: '#a1a1aa'
                                      },
                                      {
                                        id: 'netra' as const,
                                        label: language === 'pb' ? 'ਨੇਤ੍ਰ' : language === 'en' ? 'Netra' : 'नेत्र',
                                        sub: language === 'pb' ? 'ਕੋਮਲ ਹਰਾ' : language === 'en' ? 'Soft Green' : 'कोमल हरा',
                                        bgClass: 'bg-[#101f17] border-[#047857] text-[#d7f7e6]',
                                        previewColor: '#101f17',
                                        borderAccent: '#10b981'
                                      },
                                    ].map((th) => {
                                      const isSelected =
                                        readerTheme === th.id ||
                                        (th.id === 'netra' && (readerTheme as string) === 'comfort') ||
                                        (th.id === 'pothi' && (readerTheme as string) === 'sepia');
                                      return (
                                        <button
                                          key={th.id}
                                          type="button"
                                          onClick={() => {
                                            sacredHaptics.lightTap();
                                            changeReaderTheme(th.id);
                                          }}
                                          className={`min-h-[64px] p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                                            isSelected
                                              ? 'border-amber-600 ring-2 ring-amber-500 shadow-md scale-[1.02]'
                                              : 'border-gray-200 dark:border-zinc-700 hover:border-amber-400'
                                          } ${th.bgClass}`}
                                        >
                                          <div className="flex items-center justify-between w-full mb-2">
                                            <div
                                              className="w-4 h-4 rounded-full border shadow-2xs"
                                              style={{ backgroundColor: th.previewColor, borderColor: th.borderAccent }}
                                            />
                                            {isSelected && (
                                              <span className="w-5 h-5 rounded-full bg-[#8B2500] text-white flex items-center justify-center text-[0.625rem]">
                                                ✓
                                              </span>
                                            )}
                                          </div>
                                          <div>
                                            <span className="font-serif font-black text-xs sm:text-sm block">
                                              {th.label}
                                            </span>
                                            <span className="text-[0.625rem] font-serif opacity-75 block">
                                              {th.sub}
                                            </span>
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* ========================================================= */}
                              {/* GROUP 4: AUDIO & MEDITATIVE (पंक्ति गाइड, धुन, जेन, श्वास)*/}
                              {/* ========================================================= */}
                              {(settingsTab === 'all' || settingsTab === 'audio') && (
                                <div className="p-4 rounded-2xl bg-purple-500/5 dark:bg-zinc-900 border-2 border-purple-500/20 space-y-3">
                                  <div className="flex items-center justify-between border-b border-purple-500/15 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base">🧘</span>
                                      <h4 className="font-serif font-black text-xs sm:text-sm text-purple-950 dark:text-purple-300">
                                        {language === 'pb' ? 'ਸਮੂਹ ੪: ਆਡੀਓ ਤੇ ਧਿਆਨ ਸਾਧਨਾ' : language === 'en' ? 'Group 4: Audio & Meditative' : 'समूह ४: ऑडियो एवं ध्यान साधना'}
                                      </h4>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleToggleFullBaniAudio()}
                                      className={`px-3 py-1 rounded-full text-xs font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5 ${
                                        isFullBaniAudioPlaying
                                          ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-400/40 animate-pulse'
                                          : 'bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300'
                                      }`}
                                    >
                                      <Volume2 size={12} />
                                      <span>{isFullBaniAudioPlaying ? (language === 'pb' ? 'ਪਾਠ ਚੱਲ ਰਿਹਾ' : language === 'en' ? 'Playing Audio' : 'पाठ चालू') : (language === 'pb' ? 'ਪਾਠ ਸੁਣੋ' : language === 'en' ? 'Listen Bani' : 'पाठ सुनें')}</span>
                                    </button>
                                  </div>

                                  {/* Line Highlighter & Zen Mode & Breathing Tool */}
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    {/* 1. पंक्ति गाइड (Line Highlighter) */}
                                    <button
                                      type="button"
                                      onClick={() => setIsLineGuideActive(!isLineGuideActive)}
                                      className={`p-2.5 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                                        isLineGuideActive
                                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                                          : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-purple-400'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span>🔦</span>
                                        <div>
                                          <span className="font-serif font-bold text-xs block">
                                            {language === 'pb' ? 'ਪੰਕਤੀ ਗਾਈਡ' : language === 'en' ? 'Line Guide' : 'पंक्ति गाइड'}
                                          </span>
                                          <span className={`text-[0.625rem] block opacity-80 ${isLineGuideActive ? 'text-white' : 'text-gray-500'}`}>
                                            {isLineGuideActive ? (language === 'pb' ? 'ਚਾਲੂ' : language === 'en' ? 'Active' : 'चालू') : (language === 'pb' ? 'ਬੰਦ' : language === 'en' ? 'Off' : 'बंद')}
                                          </span>
                                        </div>
                                      </div>
                                      <span className="text-xs font-mono font-bold">{isLineGuideActive ? '✓' : '○'}</span>
                                    </button>

                                    {/* 2. जेन एकाग्रता (Zen Focus Mode) */}
                                    <button
                                      type="button"
                                      onClick={() => setIsZenMode(!isZenMode)}
                                      className={`p-2.5 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                                        isZenMode
                                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                                          : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-purple-400'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span>🧘</span>
                                        <div>
                                          <span className="font-serif font-bold text-xs block">
                                            {language === 'pb' ? 'ਜੇਨ ਇਕਾਗਰਤਾ' : language === 'en' ? 'Zen Focus Mode' : 'जेन एकाग्रता'}
                                          </span>
                                          <span className={`text-[0.625rem] block opacity-80 ${isZenMode ? 'text-white' : 'text-gray-500'}`}>
                                            {language === 'pb' ? 'ਨਿਰਵਿਕਲਪ ਧਿਆਨ' : language === 'en' ? 'Distraction-Free' : 'निर्विकल्प ध्यान'}
                                          </span>
                                        </div>
                                      </div>
                                      <span className="text-xs font-mono font-bold">{isZenMode ? '✓' : '○'}</span>
                                    </button>

                                    {/* 3. दिव्य श्वास चक्र (Breathing Guide) */}
                                    <button
                                      type="button"
                                      onClick={() => setShowBreathingGuide(!showBreathingGuide)}
                                      className={`p-2.5 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                                        showBreathingGuide
                                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                                          : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-purple-400'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span>🌀</span>
                                        <div>
                                          <span className="font-serif font-bold text-xs block">
                                            {language === 'pb' ? 'ਦਿਵਯ ਸੁਆਸ ਚੱਕਰ' : language === 'en' ? 'Breathing Cycle' : 'दिव्य श्वास चक्र'}
                                          </span>
                                          <span className={`text-[0.625rem] block opacity-80 ${showBreathingGuide ? 'text-white' : 'text-gray-500'}`}>
                                            {language === 'pb' ? 'ਪ੍ਰਾਣਾਯਾਮ ਸਾਧਨਾ' : language === 'en' ? 'Calm Pranayama' : 'प्राणायाम साधना'}
                                          </span>
                                        </div>
                                      </div>
                                      <span className="text-xs font-mono font-bold">{showBreathingGuide ? '✓' : '○'}</span>
                                    </button>
                                  </div>

                                  {/* Audio Track Switchers: म्यूट, तानपुरा, बांसुरी, सत्यनाम धुन */}
                                  <div className="space-y-1.5 pt-2 border-t border-purple-500/10">
                                    {/* Audio Speed Controls */}
                                    <div className="bg-white/50 dark:bg-zinc-800/50 p-3 rounded-xl mb-3">
                                      <div className="flex justify-between text-[0.6875rem] font-bold mb-2">
                                        <span>{language === 'pb' ? 'ਪਾਠ ਦੀ ਗਤੀ' : language === 'en' ? 'Recitation Speed' : 'पाठ की गति'} (0.2x - 5x)</span>
                                        <span>{audioSpeedLevel.toFixed(1)}x</span>
                                      </div>
                                      <input
                                        type="range"
                                        min="0.2"
                                        max="5.0"
                                        step="0.1"
                                        value={audioSpeedLevel}
                                        onChange={(e) => {
                                          const newSpeed = parseFloat(e.target.value);
                                          setAudioSpeedLevel(newSpeed);
                                          speechReciter.setRate(newSpeed);
                                        }}
                                        className="w-full accent-amber-500"
                                      />
                                    </div>

                                    <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                      {language === 'pb'
                                        ? 'ਪਿਛੋਕੜ ਧੁਨੀ ਅਨੁਨਾਦ (Background Dhun):'
                                        : language === 'en'
                                        ? 'Background Sacred Dhun:'
                                        : 'पृष्ठभूमि धुन अनुनाद (Background Dhun):'}
                                    </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                      {[
                                        {
                                          id: 'mute',
                                          label: language === 'pb' ? 'ਮਿਊਟ (ਬੰਦ)' : language === 'en' ? 'Mute' : 'म्यूट (बंद)',
                                          active: !isBackgroundDhunPlaying,
                                          action: () => {
                                            ambientReaderAudio.stop();
                                            setIsBackgroundDhunPlaying(false);
                                            startedDhunByPureRef.current = false;
                                          }
                                        },
                                        {
                                          id: 'satyanaam',
                                          label: language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ' : language === 'en' ? 'Satyanaam Dhun' : 'सत्यनाम धुन',
                                          active: isBackgroundDhunPlaying && dhunSound === 'satyanaam',
                                          action: () => {
                                            handleChangeDhunSound('satyanaam');
                                            if (!isBackgroundDhunPlaying) handleToggleBackgroundDhun('satyanaam');
                                          }
                                        },
                                        {
                                          id: 'tanpura',
                                          label: language === 'pb' ? 'ਤਾਨਪੁਰਾ' : language === 'en' ? 'Tanpura' : 'तानपुरा',
                                          active: isBackgroundDhunPlaying && dhunSound === 'tanpura',
                                          action: () => {
                                            handleChangeDhunSound('tanpura');
                                            if (!isBackgroundDhunPlaying) handleToggleBackgroundDhun('tanpura');
                                          }
                                        },
                                        {
                                          id: 'flute',
                                          label: language === 'pb' ? 'ਬੰਸਰੀ' : language === 'en' ? 'Flute' : 'बांसुरी',
                                          active: isBackgroundDhunPlaying && dhunSound === 'flute',
                                          action: () => {
                                            handleChangeDhunSound('flute');
                                            if (!isBackgroundDhunPlaying) handleToggleBackgroundDhun('flute');
                                          }
                                        },
                                      ].map((trk) => (
                                        <button
                                          key={trk.id}
                                          type="button"
                                          onClick={trk.action}
                                          className={`py-2 px-2.5 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer flex items-center justify-between whitespace-nowrap ${
                                            trk.active
                                              ? 'bg-purple-600 text-white border-purple-600 shadow-sm scale-[1.02]'
                                              : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-700 hover:bg-purple-50'
                                          }`}
                                        >
                                          <span>{trk.label}</span>
                                          {trk.active && <span className="text-[0.625rem] font-mono">●</span>}
                                        </button>
                                      ))}
                                    </div>

                                    {/* Granth Auto-Play Continuity Setting (Full Path vs Single Chapter) */}
                                    <div className="pt-2.5 mt-1 border-t border-purple-500/10 space-y-1.5">
                                      <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                        {language === 'pb'
                                          ? 'ਅਧਿਆਇ ਨਿਰੰਤਰਤਾ ਵਿਕਲਪ (Path Continuity):'
                                          : language === 'en'
                                          ? 'Path Continuity (Auto-Advance Across Sub-Chapters):'
                                          : 'पाठ निरंतरता विकल्प (Path Continuity):'}
                                      </span>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            if (pathContinuityMode !== 'full-path') handleTogglePathContinuity();
                                          }}
                                          className={`py-2 px-3 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer text-left flex items-center justify-between ${
                                            pathContinuityMode === 'full-path'
                                              ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-sm'
                                              : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                          }`}
                                        >
                                          <span>
                                            {language === 'pb'
                                              ? 'ਪੂਰਾ ਪਾਠ ਨਿਰੰਤਰ (੧ ਤੋਂ ਅੰਤ ਤੱਕ)'
                                              : language === 'en'
                                              ? 'Full Granth Continuous (Start → End)'
                                              : 'पूर्ण पाठ निरंतर (१ से अंतिम अध्याय)'}
                                          </span>
                                          {pathContinuityMode === 'full-path' && <span className="text-[0.625rem] font-mono">●</span>}
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            if (pathContinuityMode !== 'single-chapter') handleTogglePathContinuity();
                                          }}
                                          className={`py-2 px-3 rounded-xl text-xs font-serif font-bold transition-all border cursor-pointer text-left flex items-center justify-between ${
                                            pathContinuityMode === 'single-chapter'
                                              ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-sm'
                                              : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-700 hover:bg-amber-50'
                                          }`}
                                        >
                                          <span>
                                            {language === 'pb'
                                              ? 'ਇਕ ਉਪ-ਅਧਿਆਇ ਤੇ ਵਿਰਾਮ'
                                              : language === 'en'
                                              ? 'Stop After Each Sub-Chapter'
                                              : 'एक उप-अध्याय के बाद विराम'}
                                          </span>
                                          {pathContinuityMode === 'single-chapter' && <span className="text-[0.625rem] font-mono">●</span>}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* ========================================================= */}
                              {/* GROUP 5: JAAP TARGETS (5, 11, 21, 51, 108)               */}
                              {/* ========================================================= */}
                              {(settingsTab === 'all' || settingsTab === 'targets') && (
                                <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-zinc-900 border-2 border-emerald-500/20 space-y-3">
                                  <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base">📿</span>
                                      <h4 className="font-serif font-black text-xs sm:text-sm text-emerald-950 dark:text-emerald-300">
                                        {language === 'pb' ? 'ਸਮੂਹ ੫: ਜਾਪ ਟੀਚਾ ਤੇ ਮਾਲਾ ਕਾਊਂਟਰ' : language === 'en' ? 'Group 5: Chanting Target & Mala Counter' : 'समूह ५: जाप लक्ष्य एवं माला काउंटर'}
                                      </h4>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setIsSettingsExpanded(false);
                                        setShowMalaModal(true);
                                      }}
                                      className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xs flex items-center gap-1 shadow-sm transition cursor-pointer"
                                    >
                                      <span>📿 {language === 'pb' ? 'ਮਾਲਾ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Mala' : 'माला खोलें'}</span>
                                    </button>
                                  </div>

                                  {/* Goal Buttons: 5, 11, 21, 51, 108, 0 */}
                                  <div className="space-y-1.5">
                                    <span className="text-[0.6875rem] font-serif font-bold text-gray-600 dark:text-gray-300 block">
                                      🎯 {language === 'pb' ? 'ਮਣਕੇ / ਪਾਠ ਸੰਕਲਪ ਟੀਚਾ:' : language === 'en' ? 'Chanting / Reading Goal Target:' : 'मनके / पाठ संकल्प लक्ष्य:'}
                                    </span>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                      {[
                                        { val: 5 as const, label: '5' },
                                        { val: 11 as const, label: '11' },
                                        { val: 21 as const, label: '21' },
                                        { val: 51 as const, label: '51' },
                                        { val: 108 as const, label: '108' },
                                        { val: 0 as const, label: language === 'pb' ? 'ਅਖੰਡ' : language === 'en' ? 'Infinite' : 'अनंत' },
                                      ].map((tgt) => {
                                        const isSelected = selectedTarget === tgt.val;
                                        return (
                                          <button
                                            key={tgt.val}
                                            type="button"
                                            onClick={() => setSelectedTarget(tgt.val)}
                                            className={`py-2 rounded-xl text-xs font-serif font-black transition-all border cursor-pointer flex flex-col items-center justify-center ${
                                              isSelected
                                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-400/40 scale-105'
                                                : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-700 hover:bg-emerald-50'
                                            }`}
                                          >
                                            <span className="text-sm font-mono">{tgt.label}</span>
                                            <span className="text-[0.5625rem] opacity-80">
                                              {tgt.val === 0
                                                ? (language === 'pb' ? 'ਅਖੰਡ' : language === 'en' ? 'Akhand' : 'अखंड')
                                                : (language === 'pb' ? 'ਮਣਕੇ' : language === 'en' ? 'Beads' : 'मनके')}
                                            </span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                    <p className="text-[0.625rem] font-serif text-gray-500 dark:text-gray-400 italic pt-1">
                                      {language === 'pb'
                                        ? 'ਨਿਰਧਾਰਿਤ ਟੀਚਾ ਪੂਰਾ ਹੋਣ ਤੇ ਮਾਲਾ ਆਟੋਮੈਟਿਕ ਵਧਾਈ ਦਿੰਦੀ ਹੈ।'
                                        : language === 'en'
                                        ? 'Completing your chosen target automatically displays a sacred blessing celebration.'
                                        : 'निर्धारित लक्ष्य पूरा होने पर माला एवं पाठक स्वतः दिव्य उत्सव एवं मंगल बधाई प्रदर्शित करता है।'}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
    </div>
  );
};
