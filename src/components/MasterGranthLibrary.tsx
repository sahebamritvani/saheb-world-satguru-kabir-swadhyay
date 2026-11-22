import React, { useState, useMemo, useEffect, useRef, Suspense, lazy } from 'react';
import { 
  BookOpen, 
  Scroll, 
  Library, 
  Search, 
  Sparkles, 
  Music, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Target, 
  Sliders, 
  RotateCcw, 
  Bookmark, 
  Share2, 
  Check, 
  Copy,
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  HelpCircle,
  FileText,
  Compass,
  CheckCircle2,
  Play,
  Pause,
  Timer,
  Heart,
  X,
  Columns,
  Highlighter,
  FastForward,
  Palette,
  Crown,
  Flame,
  ShieldCheck,
  BookMarked,
  Sun,
  Trophy,
  ArrowLeft,
  Settings,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SACRED_BRANDING, ReaderCustomTheme, ReaderFontSize, ReaderTarget, AppView } from '../types';
import { translations, getVerseTypeLabel } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { hindiToPunjabiWordConverter } from '../services/transliteration';
import { MASTER_GRANTH_CATALOG, loadMasterGranth, loadMasterGranthChapter, clearMasterGranthCaches } from '../data/granths/masterGranthIndex';
import { MasterGranth, GranthChapter, GranthVerse } from '../data/granths/granthTypes';
import { ADMIN_SLOTS_UPDATED_EVENT } from '../services/adminSlotInjectorStore';
import { SacredLoader } from './SacredLoader';
import { PaginationControls } from './PaginationControls';
import { generateUniqueUlatvasiAnalysis } from '../services/ulatvasiEssenceEngine';
import { deriveDistinctSpiritualEssence } from '../services/swadhyayContentEngine';
import { ambientReaderAudio, DhunSoundType, speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { backgroundSync } from '../services/backgroundSync';
import { FlowerBloomAnimation } from './FlowerBloomAnimation';
import confetti from 'canvas-confetti';

const NitnemGutkaReader = lazy(() =>
  import('./NitnemGutkaReader').then((m) => ({ default: m.NitnemGutkaReader }))
);
import { 
  userHighlightService, 
  HighlightColor, 
  UserVerseHighlight, 
  SandhukkariTerm, 
  findSandhukkariTerms 
} from '../services/sandhukkariGlossary';
import { SandhukkariGlossaryModal } from './SandhukkariGlossaryModal';

export interface ReadingHistoryItem {
  id: string;
  granthSlug: string;
  granthTitle: { hi: string; pb: string; en: string };
  chapterId: string;
  chapterTitle: { hi: string; pb: string; en: string };
  accessedAt: number;
}

const getFontSizeIndex = (fs: ReaderFontSize): number => {
  const mapping: Record<ReaderFontSize, number> = {
    'small': 0,
    'normal': 1,
    'medium': 2,
    'large': 3,
    'xlarge': 4,
    'xl': 5,
    'elderly': 6
  };
  return mapping[fs] ?? 1;
};

const getFontSizeFromIndex = (idx: number): ReaderFontSize => {
  const mapping: ReaderFontSize[] = ['small', 'normal', 'medium', 'large', 'xlarge', 'xl', 'elderly'];
  return mapping[idx] || 'normal';
};

interface MasterGranthLibraryProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  initialGranthId?: string;
  onOpenSwadhyay?: (text: string) => void;
  onOpenDiary?: () => void;
  onClose?: () => void;
  onSelectView?: (view: AppView) => void;
  onOpenSettings?: () => void;
}

export const MasterGranthLibrary: React.FC<MasterGranthLibraryProps> = ({
  language,
  onSelectLanguage,
  initialGranthId,
  onOpenSwadhyay,
  onOpenDiary,
  onClose,
  onSelectView,
  onOpenSettings,
}) => {
  const { 
    theme, 
    themeMode,
    setThemeMode,
    fontSize: globalFontSize, 
    setFontSize: setGlobalFontSize, 
    lineHeight,
    setLineHeight,
    widthMode,
    setWidthMode,
    fontFamily,
    setFontFamily
  } = useAppTheme();
  const { language: contextLang, t: contextT } = useLanguage();
  const lang = language || contextLang;
  const t = translations[lang] || contextT;

  // Granth and Chapter Selection (Lazy-loaded on demand)
  const VERSES_PER_PAGE = 30;
  const [loadedGranthsMap, setLoadedGranthsMap] = useState<Record<string, MasterGranth>>(() =>
    Object.fromEntries(MASTER_GRANTH_CATALOG.map((g) => [g.slug, g]))
  );
  const [isGranthLoading, setIsGranthLoading] = useState<boolean>(false);
  const [isChapterLoading, setIsChapterLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGranthSlug, setSelectedGranthSlug] = useState<string>(initialGranthId || '');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('');
  const [adminSlotsVersion, setAdminSlotsVersion] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [acceptedSankalps, setAcceptedSankalps] = useState<Record<string | number, boolean>>({});
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);

  useEffect(() => {
    if (initialGranthId) {
      setSelectedGranthSlug(initialGranthId);
    }
  }, [initialGranthId]);

  useEffect(() => {
    const handleOpenAdvancedSuite = () => {
      setShowAdvancedSuiteModal(true);
    };
    const handleAdminSlotsUpdated = () => {
      clearMasterGranthCaches();
      setLoadedGranthsMap(Object.fromEntries(MASTER_GRANTH_CATALOG.map((g) => [g.slug, g])));
      setSelectedChapterId('');
      setCurrentPage(1);
      setAdminSlotsVersion((v) => v + 1);
    };
    window.addEventListener('sahebworld_open_advanced_reading_suite', handleOpenAdvancedSuite);
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
    return () => {
      window.removeEventListener('sahebworld_open_advanced_reading_suite', handleOpenAdvancedSuite);
      window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
    };
  }, []);

  useEffect(() => {
    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.theme) {
        const thm = customEvent.detail.theme;
        setReaderTheme(thm);
        const thmStr = thm as string;
        const isDark = thmStr === 'deep_sepia' || thmStr === 'black' || thmStr === 'midnight' || thmStr === 'oled' || thmStr === 'dark';
        setIsNightMode(isDark);
      }
    };
    window.addEventListener('sahebworld_reader_theme_changed', handleThemeEvent);
    return () => {
      window.removeEventListener('sahebworld_reader_theme_changed', handleThemeEvent);
    };
  }, []);

  // Reader Settings State
  const [readerTheme, setReaderTheme] = useState<ReaderCustomTheme>(() => {
    try {
      return (localStorage.getItem('sahebworld_reader_theme') as any) || 'mool';
    } catch {
      return 'mool';
    }
  });
  const [fontSize, setFontSize] = useState<ReaderFontSize>(globalFontSize);

  // Synchronize local states with global context settings
  useEffect(() => {
    setFontSize(globalFontSize);
  }, [globalFontSize]);

  const handleSetLocalFontSize = (level: ReaderFontSize) => {
    setFontSize(level);
    setGlobalFontSize(level);
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
      case 'narrow': return 'max-w-3xl';
      case 'medium': return 'max-w-5xl';
      case 'wide': return 'max-w-7xl';
      default: return 'max-w-7xl';
    }
  };

  const [targetPace, setTargetPace] = useState<ReaderTarget>(21);
  const [showLineGuide, setShowLineGuide] = useState<boolean>(true);
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [individualToggle, setIndividualToggle] = useState<Record<number | string, boolean>>({});
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(0);

  const isMeaningVisible = (verseId: number | string) => {
    if (individualToggle[verseId] !== undefined) {
      return individualToggle[verseId];
    }
    return showMeaning;
  };

  const toggleIndividualMeaning = (verseId: number | string) => {
    setIndividualToggle((prev) => ({
      ...prev,
      [verseId]: !isMeaningVisible(verseId),
    }));
  };
  const [zenMode, setZenMode] = useState<boolean>(false);
  const [bgDhun, setBgDhun] = useState<DhunSoundType | 'off'>('off');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speakingVerseId, setSpeakingVerseId] = useState<number | string | null>(null);
  const [copiedId, setCopiedId] = useState<number | string | null>(null);
  const [diarySavedId, setDiarySavedId] = useState<number | string | null>(null);

  // Auto-scroll, Page Flip & Special Script features
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [autoScrollSpeed, setAutoScrollSpeed] = useState<0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 5>(1);
  const [isPageFlipMode, setIsPageFlipMode] = useState<boolean>(false);
  const [pageFlipIndex, setPageFlipIndex] = useState<number>(0);
  const [isLarivaarMode, setIsLarivaarMode] = useState<boolean>(false);
  const [isVisraamHighlightEnabled, setIsVisraamHighlightEnabled] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<any>(null);

  // Top Moveable Toolbar Quick Panel States
  const [activeQuickPanel, setActiveQuickPanel] = useState<'theme' | 'font' | 'highlighter' | 'autoscroll' | 'target' | 'dhun' | null>(null);
  const [showAdvancedSuiteModal, setShowAdvancedSuiteModal] = useState<boolean>(false);
  const [suiteActiveTab, setSuiteActiveTab] = useState<'controls' | 'history'>('controls');
  const [isToolbarSticky, setIsToolbarSticky] = useState<boolean>(true);

  // Reading History State (stores last 10 accessed Grantha / Sakhis)
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_reading_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // User Reading Speed (Words Per Minute / WPM)
  const [readingWpm, setReadingWpm] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_reading_wpm');
      return saved ? parseInt(saved, 10) : 140;
    } catch {
      return 140;
    }
  });

  // Text-To-Speech (TTS) Full Recitation State
  const [isFullRecitationActive, setIsFullRecitationActive] = useState<boolean>(false);

  // Night Mode State (Deep Sepia / Dark Theme for Nighttime Study)
  const [isNightMode, setIsNightMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sahebworld_night_mode') === 'true';
    } catch {
      return false;
    }
  });

  const changeReaderTheme = (thm: ReaderCustomTheme) => {
    setReaderTheme(thm);
    const thmStr = thm as string;
    const isDark = thmStr === 'deep_sepia' || thmStr === 'black' || thmStr === 'midnight' || thmStr === 'oled' || thmStr === 'dark';
    
    setIsNightMode(isDark);
    try {
      localStorage.setItem('sahebworld_night_mode', String(isDark));
      localStorage.setItem('sahebworld_reader_theme', thm);
      window.dispatchEvent(new CustomEvent('sahebworld_reader_theme_changed', { detail: { theme: thm } }));
    } catch {}

    if (isDark) {
      setThemeMode('mystic_dark');
    } else {
      setThemeMode('bhojpatra');
    }
  };

  const handleToggleNightMode = (enable?: boolean) => {
    sacredHaptics.lightTap();
    const next = enable !== undefined ? enable : !isNightMode;
    if (next) {
      changeReaderTheme('deep_sepia');
    } else {
      changeReaderTheme('mool');
    }
  };

  // Parallel View & Glossary & Highlighter States
  const [isParallelView, setIsParallelView] = useState<boolean>(false);
  const [isInterlinearView, setIsInterlinearView] = useState<boolean>(false);
  const [activeHighlightColor, setActiveHighlightColor] = useState<HighlightColor | null>(null);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<SandhukkariTerm | null>(null);
  const [userHighlights, setUserHighlights] = useState<Record<string, UserVerseHighlight>>(() => userHighlightService.getAll());

  const handleToggleHighlight = (verseId: string | number, color: HighlightColor) => {
    sacredHaptics.lightTap();
    const existing = userHighlightService.getHighlight(verseId, selectedGranthSlug);
    if (existing === color) {
      userHighlightService.removeHighlight(verseId, selectedGranthSlug);
    } else {
      userHighlightService.setHighlight(verseId, selectedGranthSlug, color);
    }
    setUserHighlights(userHighlightService.getAll());
  };

  const renderInteractiveLine = (text: string) => {
    if (!text) return null;
    const terms = findSandhukkariTerms(text);
    if (terms.length === 0) return <span>{text}</span>;

    const termWords = terms.map(t => t.word).concat(terms.map(t => t.punjabi)).filter(Boolean);
    termWords.sort((a, b) => b.length - a.length);

    const regex = new RegExp(`(${termWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, idx) => {
          const matchedTerm = terms.find(t => t.word === part || t.punjabi === part);
          if (matchedTerm) {
            return (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  sacredHaptics.lightTap();
                  setSelectedGlossaryTerm(matchedTerm);
                }}
                className="border-b-2 border-dashed border-amber-600/70 hover:border-amber-700 text-amber-900 dark:text-amber-200 cursor-pointer hover:bg-amber-500/15 px-0.5 rounded transition font-bold"
                title={`गूढ़ शब्दार्थ: ${matchedTerm.word} (क्लिक कर अर्थ देखें)`}
              >
                {part}
              </span>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </>
    );
  };

  // --- TRANQUILITY BREATHING STATES & EFFECT ---
  const [showBreathingGuide, setShowBreathingGuide] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold-out'>('inhale');

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        if (prev === 'exhale') return 'hold-out';
        return 'inhale';
      });
    }, 4000); // 4s per phase for serene breath cycle

    return () => clearInterval(interval);
  }, []);

  // Eye-friendly, comfortable reading offset so the container doesn't go all the way to the top edge!
  const scrollLibraryIntoView = () => {
    // Gentle scroll: keep upper portion visible and avoid abrupt jumps
    const container = document.getElementById('master-granth-library');
    if (container) {
      const rect = container.getBoundingClientRect();
      // If already within comfortable reading range, do not force scroll
      if (rect.top >= 20 && rect.top <= 250) {
        return;
      }
    }
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Current Granth Object (resolved from lazy-loaded state or lightweight catalog)
  const currentGranth = useMemo(() => {
    return (
      loadedGranthsMap[selectedGranthSlug] ||
      MASTER_GRANTH_CATALOG.find((g) => g.slug === selectedGranthSlug) ||
      MASTER_GRANTH_CATALOG[0]
    );
  }, [loadedGranthsMap, selectedGranthSlug]);

  // Dynamically load selected Granth bundle only when opened
  useEffect(() => {
    if (!selectedGranthSlug) return;
    let cancelled = false;

    const existing = loadedGranthsMap[selectedGranthSlug];
    const needsGranthLoad = !existing || existing.chapters.length === 0;

    if (needsGranthLoad) {
      setIsGranthLoading(true);
    }

    loadMasterGranth(selectedGranthSlug)
      .then((loaded) => {
        if (cancelled) return;
        setLoadedGranthsMap((prev) => ({
          ...prev,
          [selectedGranthSlug]: loaded,
        }));
      })
      .catch((err) => {
        console.error('Error lazy loading granth:', err);
      })
      .finally(() => {
        if (!cancelled) {
          setIsGranthLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [selectedGranthSlug, adminSlotsVersion]);

  // Dynamically load specific chapter verses (essential for Sakhi Sangrah's 37 lazy Angs)
  useEffect(() => {
    if (!selectedGranthSlug || !selectedChapterId) return;
    const granth = loadedGranthsMap[selectedGranthSlug];
    const ch = granth?.chapters.find((c) => c.id === selectedChapterId);
    if (ch && ch.verses && ch.verses.length > 0) return;

    let cancelled = false;
    setIsChapterLoading(true);

    loadMasterGranthChapter(selectedGranthSlug, selectedChapterId)
      .then((loadedChapter) => {
        if (cancelled || !loadedChapter) return;
        setLoadedGranthsMap((prev) => {
          const target = prev[selectedGranthSlug];
          if (!target) return prev;
          return {
            ...prev,
            [selectedGranthSlug]: {
              ...target,
              chapters: target.chapters.map((c) => (c.id === loadedChapter.id ? loadedChapter : c)),
            },
          };
        });
      })
      .catch((err) => {
        console.error('Error lazy loading granth chapter:', err);
      })
      .finally(() => {
        if (!cancelled) {
          setIsChapterLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [selectedGranthSlug, selectedChapterId]);

  // Filtered Chapters by Category (Mainly for Bijak)
  const filteredChapters = useMemo(() => {
    if (selectedGranthSlug === 'bijak') {
      if (activeCategoryFilter === 'all') return currentGranth.chapters;
      return currentGranth.chapters.filter(ch => {
        const title = ch.title.hi.toLowerCase();
        if (activeCategoryFilter === 'sakhi') return title.includes('साखी');
        if (activeCategoryFilter === 'shabad') return title.includes('सबद');
        if (activeCategoryFilter === 'ramaini') return title.includes('रमैनी');
        return true;
      });
    }
    return currentGranth.chapters;
  }, [currentGranth.chapters, selectedGranthSlug, activeCategoryFilter]);

  // Current Chapter Object
  const currentChapter = useMemo(() => {
    if (selectedChapterId) {
      const found = currentGranth.chapters.find((c) => c.id === selectedChapterId);
      if (found) return found;
    }
    return filteredChapters[0] || currentGranth.chapters[0] || null;
  }, [currentGranth, selectedChapterId, filteredChapters]);

  // Restore saved chapter and scroll position when granth changes or finishes loading
  useEffect(() => {
    if (selectedGranthSlug && currentGranth.chapters.length > 0) {
      const alreadyValid = selectedChapterId && currentGranth.chapters.some(c => c.id === selectedChapterId);
      if (alreadyValid) return;

      const saved = backgroundSync.getBookProgress(selectedGranthSlug);
      if (saved && saved.chapterId && currentGranth.chapters.some(c => c.id === saved.chapterId)) {
        setSelectedChapterId(saved.chapterId);
        setActiveVerseIndex(saved.verseIndex || 0);
        if (saved.scrollY > 0) {
          setTimeout(() => {
            window.scrollTo({ top: saved.scrollY, behavior: 'smooth' });
          }, 200);
        }
      } else {
        setSelectedChapterId(currentGranth.chapters[0].id);
        setActiveVerseIndex(0);
      }
      setActiveCategoryFilter('all');
    }
  }, [selectedGranthSlug, currentGranth.chapters.length]);

  useEffect(() => {
    setSelectedChapterId('');
    setCurrentPage(1);
  }, [selectedGranthSlug]);

  useEffect(() => {
    setActiveVerseIndex(0);
    setCurrentPage(1);
  }, [selectedChapterId]);

  // Save book scroll position & progress persistently
  useEffect(() => {
    if (!selectedGranthSlug || !currentChapter) return;
    const handleScrollAndSave = () => {
      const totalVerses = currentChapter.verses?.length || 1;
      const progressPercent = Math.min(100, Math.max(1, Math.round(((activeVerseIndex + 1) / totalVerses) * 100)));
      backgroundSync.saveBookProgress(selectedGranthSlug, {
        chapterId: currentChapter.id,
        verseIndex: activeVerseIndex,
        scrollY: window.scrollY,
        progressPercent,
      });
    };

    handleScrollAndSave();
    window.addEventListener('scroll', handleScrollAndSave, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollAndSave);
  }, [selectedGranthSlug, currentChapter, activeVerseIndex]);

  // Automatically record accessed Sakhi / Granth segment in reading history (max 10)
  useEffect(() => {
    if (!currentGranth || !currentChapter) return;

    const newItem: ReadingHistoryItem = {
      id: `${currentGranth.slug}_${currentChapter.id}`,
      granthSlug: currentGranth.slug,
      granthTitle: currentGranth.title,
      chapterId: currentChapter.id,
      chapterTitle: currentChapter.title,
      accessedAt: Date.now(),
    };

    setReadingHistory((prev) => {
      const filtered = prev.filter((item) => item.id !== newItem.id);
      const updated = [newItem, ...filtered].slice(0, 10);
      try {
        localStorage.setItem('sahebworld_reading_history', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }, [currentGranth, currentChapter]);

  // Handle Background Dhun
  const handleSelectDhun = (sound: DhunSoundType | 'off') => {
    setBgDhun(sound);
    if (sound === 'off') {
      ambientReaderAudio.stop();
    } else {
      ambientReaderAudio.start(sound);
      ambientReaderAudio.setSoundType(sound);
    }
  };

  useEffect(() => {
    return () => {
      ambientReaderAudio.stop();
      speechReciter.stop();
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  // Filtered Verses by Search
  const filteredVerses = useMemo(() => {
    if (!currentChapter) return [];
    if (!searchQuery.trim()) return currentChapter.verses;

    const q = searchQuery.toLowerCase();
    return currentChapter.verses.filter((v) => {
      const textMatches = v.lines[language]?.some((l) => l.toLowerCase().includes(q)) ||
        v.lines.hi?.some((l) => l.toLowerCase().includes(q));
      const bhavarthMatches = v.bhavarth ? (v.bhavarth[language]?.toLowerCase().includes(q) ||
        v.bhavarth.hi?.toLowerCase().includes(q)) : false;
      return textMatches || bhavarthMatches;
    });
  }, [currentChapter, searchQuery, language]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredVerses.length / VERSES_PER_PAGE));

  const paginatedVerses = useMemo(() => {
    const start = (currentPage - 1) * VERSES_PER_PAGE;
    return filteredVerses.slice(start, start + VERSES_PER_PAGE);
  }, [filteredVerses, currentPage]);

  const handleGranthPageChange = (page: number) => {
    sacredHaptics.lightTap();
    setCurrentPage(page);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Calculate words in current chapter/Sakhi segment
  const totalWordsInCurrentChapter = useMemo(() => {
    if (!currentChapter || !currentChapter.verses) return 0;
    return currentChapter.verses.reduce((acc, v) => {
      const lines = v.lines[language] || v.lines.hi || [];
      const verseText = lines.join(' ');
      const bhavText = v.bhavarth ? (v.bhavarth[language] || v.bhavarth.hi || '') : '';
      const wCount = (verseText + ' ' + bhavText).trim().split(/\s+/).filter(Boolean).length;
      return acc + wCount;
    }, 0);
  }, [currentChapter, language]);

  // Remaining verses & words for Reading Time Remaining
  const remainingVersesCount = useMemo(() => {
    if (!filteredVerses || filteredVerses.length === 0) return 0;
    return Math.max(0, filteredVerses.length - activeVerseIndex);
  }, [filteredVerses, activeVerseIndex]);

  const estimatedReadingMinsRemaining = useMemo(() => {
    if (filteredVerses.length === 0 || totalWordsInCurrentChapter === 0) return 1;
    const avgWordsPerVerse = totalWordsInCurrentChapter / filteredVerses.length;
    const remainingWords = Math.round(remainingVersesCount * avgWordsPerVerse);
    const mins = Math.ceil(remainingWords / readingWpm);
    return Math.max(1, mins);
  }, [totalWordsInCurrentChapter, filteredVerses.length, remainingVersesCount, readingWpm]);

  const chapterReadingProgressPercent = useMemo(() => {
    if (!filteredVerses || filteredVerses.length === 0) return 0;
    return Math.round(((activeVerseIndex + 1) / filteredVerses.length) * 100);
  }, [filteredVerses.length, activeVerseIndex]);

  const totalGranthHighlightsCount = useMemo(() => {
    return Object.keys(userHighlights).filter((k) => k.startsWith(`${selectedGranthSlug}:`)).length;
  }, [userHighlights, selectedGranthSlug]);

  const handleToggleFullRecitation = () => {
    sacredHaptics.lightTap();
    if (isSpeaking || isFullRecitationActive) {
      speechReciter.stop();
      setIsSpeaking(false);
      setSpeakingVerseId(null);
      setIsFullRecitationActive(false);
    } else {
      if (!currentChapter || !filteredVerses || filteredVerses.length === 0) return;
      setIsFullRecitationActive(true);
      const currentVerse = filteredVerses[activeVerseIndex] || filteredVerses[0];
      handleSpeakVerse(currentVerse);
    }
  };

  // High-precision smooth Auto-scroll & Page Flip engine
  useEffect(() => {
    let animationFrameId: number | null = null;
    let pageFlipTimer: any = null;
    let lastTimestamp: number | null = null;

    if (isAutoPlaying) {
      if (isPageFlipMode) {
        const baseIntervalMs = 4500;
        const flipIntervalMs = Math.max(700, Math.round(baseIntervalMs / autoScrollSpeed));
        pageFlipTimer = setInterval(() => {
          setPageFlipIndex((prev) => {
            if (prev >= filteredVerses.length - 1) {
              setIsAutoPlaying(false);
              return prev;
            }
            return prev + 1;
          });
        }, flipIntervalMs);
      } else {
        const basePxPerSec = 40;
        const pxPerSec = basePxPerSec * autoScrollSpeed;

        const performScrollStep = (timestamp: number) => {
          if (!lastTimestamp) lastTimestamp = timestamp;
          const deltaSec = (timestamp - lastTimestamp) / 1000;
          lastTimestamp = timestamp;

          if (deltaSec > 0 && deltaSec < 0.2) {
            const pixelsToScroll = pxPerSec * deltaSec;
            window.scrollBy(0, pixelsToScroll);
          }

          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 25) {
            setIsAutoPlaying(false);
          } else {
            animationFrameId = requestAnimationFrame(performScrollStep);
          }
        };

        animationFrameId = requestAnimationFrame(performScrollStep);
      }
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (pageFlipTimer) clearInterval(pageFlipTimer);
    };
  }, [isAutoPlaying, autoScrollSpeed, isPageFlipMode, filteredVerses.length]);

  // Keyboard navigation for page flip
  useEffect(() => {
    if (!isPageFlipMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setPageFlipIndex((prev) => Math.min(filteredVerses.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setPageFlipIndex((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPageFlipMode, filteredVerses.length]);

  // Font Size Classes
  const getFontSizeStyle = () => {
    const lhClass = getLineHeightClass(lineHeight);
    switch (fontSize) {
      case 'small': return { verse: `text-lg sm:text-xl font-medium sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-sm sm:text-base sacred-meaning-typography ${lhClass}` };
      case 'normal': return { verse: `text-xl sm:text-2xl font-semibold sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-base sm:text-lg sacred-meaning-typography ${lhClass}` };
      case 'medium': return { verse: `text-2xl sm:text-3xl font-bold sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-lg sm:text-xl sacred-meaning-typography ${lhClass}` };
      case 'large': return { verse: `text-[1.65rem] sm:text-4xl font-extrabold sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-xl sm:text-2xl sacred-meaning-typography ${lhClass}` };
      case 'xlarge': return { verse: `text-3xl sm:text-5xl font-black sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-2xl sm:text-3xl sacred-meaning-typography ${lhClass}` };
      case 'xl': return { verse: `text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-xl xs:text-2xl sm:text-4xl font-black sacred-meaning-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words` };
      case 'elderly': return { verse: `text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black sacred-verse-typography leading-[1.85] sm:leading-[2] [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-xl xs:text-2xl sm:text-4xl font-black sacred-meaning-typography leading-[1.85] sm:leading-[2] [word-break:keep-all] [overflow-wrap:break-word] break-words` };
      default: return { verse: `text-xl sm:text-2xl font-semibold sacred-verse-typography ${lhClass} [word-break:keep-all] [overflow-wrap:break-word] break-words`, text: `text-base sm:text-lg sacred-meaning-typography ${lhClass}` };
    }
  };

  // Reader Theme Classes
  const getThemeStyles = () => {
    switch (readerTheme) {
      case 'deep_sepia':
        return {
          bg: '#120D0A',
          card: '#1D1510',
          border: 'rgba(253, 230, 138, 0.25)',
          text: '#FFFDF7', // High contrast cream
          accent: '#FDE68A', // Warm golden cream
          highlight: '#2E2219',
          badgeBg: '#2E2219',
        };
      case 'midnight':
        return {
          bg: '#060B14',
          card: '#0D1527',
          border: 'rgba(253, 230, 138, 0.25)',
          text: '#FFFDF7', // High contrast cream
          accent: '#FDE68A', // Warm golden cream
          highlight: '#16233B',
          badgeBg: '#1E2D4A',
        };
      case 'pothi':
        return {
          bg: '#fbf4df',
          card: '#fffdf4',
          border: '#e4cf99',
          text: '#42280d',
          accent: '#b45309',
          highlight: '#faedd0',
          badgeBg: '#f0dfb2',
        };
      case 'comfort':
        return {
          bg: '#F2EBDC',
          card: '#FAF4E6',
          border: '#D9CDB8',
          text: '#2C241E',
          accent: '#8C3D28',
          highlight: '#EBDCC8',
          badgeBg: '#E0D4C0',
        };
      case 'black':
        return {
          bg: '#0A0806',
          card: '#16120E',
          border: 'rgba(253, 230, 138, 0.25)',
          text: '#FFFDF7', // High contrast cream
          accent: '#FDE68A', // Warm golden cream
          highlight: '#261F18',
          badgeBg: '#261F18',
        };
      case 'netra':
        return {
          bg: '#f0f5f1',
          card: '#ffffff',
          border: '#cde0d2',
          text: '#1b3b27',
          accent: '#15803d',
          highlight: '#e3eee6',
          badgeBg: '#d8e8dc',
        };
      default: // mool
        return {
          bg: theme.cardBg,
          card: theme.cardBg,
          border: theme.cardBorder,
          text: theme.textPrimary,
          accent: theme.accentGold,
          highlight: theme.stepActiveBg,
          badgeBg: theme.stepActiveBg,
        };
    }
  };

  const themeStyle = getThemeStyles();
  const fontStyle = getFontSizeStyle();

  // Recitation
  const handleSpeakVerse = (verse: GranthVerse) => {
    if (speakingVerseId === verse.id) {
      speechReciter.stop();
      setSpeakingVerseId(null);
      setIsSpeaking(false);
    } else {
      setSpeakingVerseId(verse.id);
      setIsSpeaking(true);
      const textToSpeak = verse.lines[language]?.join(' ') || verse.lines.hi?.join(' ');
      speechReciter.speak(
        textToSpeak,
        language,
        () => {
          setSpeakingVerseId(null);
          setIsSpeaking(false);
        },
        () => {
          setSpeakingVerseId(null);
          setIsSpeaking(false);
        }
      );
    }
  };

  // Copy Verse
  const handleCopyVerse = (verse: GranthVerse) => {
    const bhav = verse.bhavarth ? (verse.bhavarth[language] || verse.bhavarth.hi) : '';
    const textToCopy = `${verse.lines[language]?.join('\n') || verse.lines.hi.join('\n')}${bhav ? `\n\nभावार्थ:\n${bhav}` : ''}\n\n।। सत्यनाम साहेब ।।`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(verse.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Save to Spiritual Diary
  const handleSaveVerseToDiary = (verse: GranthVerse) => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_diary_entries');
      let existing = [];
      if (saved) {
        try { existing = JSON.parse(saved); } catch { existing = []; }
      }
      const bhav = verse.bhavarth ? (verse.bhavarth[language] || verse.bhavarth.hi) : '';
      const entry = {
        id: 'diary-granth-' + Date.now(),
        date: new Date().toISOString(),
        notes: `[${currentGranth.shortTitle[language]} - ${currentChapter?.title[language]}]\n\n${verse.lines[language]?.join('\n') || verse.lines.hi.join('\n')}${bhav ? `\n\nभावार्थ: ${bhav}` : ''}`,
        categoryTag: currentGranth.shortTitle[language],
      };
      localStorage.setItem('sahebworld_diary_entries', JSON.stringify([entry, ...existing]));
      setDiarySavedId(verse.id);
      setTimeout(() => setDiarySavedId(null), 2500);
    }
  };

  // Switch Chapters
  const handleNextChapter = () => {
    if (!currentChapter) return;
    const currentIndex = currentGranth.chapters.findIndex((c) => c.id === currentChapter.id);
    if (currentIndex < currentGranth.chapters.length - 1) {
      setSelectedChapterId(currentGranth.chapters[currentIndex + 1].id);
      setActiveVerseIndex(0);
      scrollLibraryIntoView();
    } else {
      setShowCompletionModal(true);
      confetti({ particleCount: 75, spread: 90, origin: { y: 0.6 } });
    }
  };

  const handlePrevChapter = () => {
    if (!currentChapter) return;
    const currentIndex = currentGranth.chapters.findIndex((c) => c.id === currentChapter.id);
    if (currentIndex > 0) {
      setSelectedChapterId(currentGranth.chapters[currentIndex - 1].id);
      setActiveVerseIndex(0);
      scrollLibraryIntoView();
    }
  };

  const breathingLabels = {
    hi: {
      btn: 'दैनिक स्वतः चक्र सुधार',
      title: 'दैनिक स्वतः चक्र सुधार (दिव्य प्रशांत सुमिरन चक्र)',
      subtitle: 'वाणियों पर एकाग्र होकर स्वतः श्वास-श्वास सुमिरन का आनंद लें। चक्र के अनुसार श्वास लें।',
      inhale: 'श्वास भरें',
      hold: 'श्वास रोकें',
      exhale: 'श्वास छोड़ें',
      holdOut: 'शांत स्थिर',
      footer: 'दैनिक स्वतः एकाग्रता व मनन चक्र सुधार'
    },
    pb: {
      btn: 'ਦੈਨਿਕ ਸੁਆਸ ਚੱਕਰ ਸੁਧਾਰ',
      title: 'ਦੈਨਿਕ ਸੁਆਸ ਚੱਕਰ ਸੁਧਾਰ (ਦਿਵਯ ਪ੍ਰਸ਼ਾਂਤ ਸਿਮਰਨ ਚੱਕਰ)',
      subtitle: 'ਪਵਿੱਤਰ ਬਾਣੀ ਉੱਤੇ ਇਕਾਗਰ ਹੋ ਕੇ ਸੁਆਸ-ਸੁਆਸ ਸਿਮਰਨ ਦਾ ਅਨੰਦ ਲਓ। ਚੱਕਰ ਨਾਲ ਸਾਹ-ਕਿਰਿਆ ਮਿਲਾਓ।',
      inhale: 'ਸੁਆਸ ਭਰੋ',
      hold: 'ਸੁਆਸ ਰੋਕੋ',
      exhale: 'ਸੁਆਸ ਛੱਡੋ',
      holdOut: 'ਸ਼ਾਂਤ ਸਥਿਰ',
      footer: 'ਦੈਨਿਕ ਇਕਾਗਰਤਾ ਮਨਨ ਸੁਧਾਰ ਚੱਕਰ'
    },
    en: {
      btn: 'Daily Auto Breath Cycle',
      title: 'Daily Auto Breath & Contemplation Cycle',
      subtitle: 'Align your breathing with the sacred pulsing aura to enter deep silent meditation.',
      inhale: 'Inhale Light',
      hold: 'Hold Still',
      exhale: 'Exhale Peace',
      holdOut: 'Pure Void',
      footer: 'Coherent Auto Respiration Peace Cycle'
    }
  }[language] || {
    btn: 'Daily Auto Breath Cycle',
    title: 'Daily Auto Breath & Contemplation Cycle',
    subtitle: 'Align your breathing with the sacred pulsing aura to enter deep silent meditation.',
    inhale: 'Inhale Light',
    hold: 'Hold Still',
    exhale: 'Exhale Peace',
    holdOut: 'Pure Void',
    footer: 'Coherent Auto Respiration Peace Cycle'
  };

  return (
    <div
      id="master-granth-library"
      style={{
        backgroundColor: themeStyle.bg,
        color: themeStyle.text,
      }}
      className="w-full max-w-full min-h-screen p-0 pb-16 transition-colors duration-300"
    >
      {/* Floating Exit Button for Zen Mode */}
      {zenMode && (
        <button
          type="button"
          onClick={() => setZenMode(false)}
          className="fixed top-4 right-4 z-[100] min-h-[44px] px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-serif shadow-2xl transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 border border-white/30"
          title={language === 'pb' ? 'ਜੇਨ ਮੋਡ ਬੰਦ ਕਰੋ' : 'ज़ेन एकाग्रता बंद करें'}
        >
          <EyeOff size={15} />
          <span>{language === 'pb' ? 'ਜੇਨ ਮੋਡ ਬੰਦ ਕਰੋ' : 'ज़ेन मोड बंद करें (Exit Zen)'}</span>
        </button>
      )}
      {/* Sikhworld Style Orange Header */}
      <div className="bg-amber-600 text-white px-3 py-2.5 sm:p-4 flex items-center justify-between shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {selectedGranthSlug ? (
            <button
              type="button"
              onClick={() => {
                setSelectedGranthSlug('');
                sacredHaptics.lightTap();
              }}
              aria-label={language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/20 rounded-full transition cursor-pointer shrink-0"
            >
              <ArrowLeft size={22} />
            </button>
          ) : onClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label={language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/20 rounded-full transition cursor-pointer shrink-0"
            >
              <ArrowLeft size={22} />
            </button>
          ) : null}
          <div>
            <h1 className="text-lg sm:text-xl font-bold font-serif leading-none">
              {selectedGranthSlug ? currentGranth.title[language] : (language === 'pb' ? 'ਗ੍ਰੰਥ ਸਾਹੇਬ' : language === 'en' ? 'Sacred Granths' : 'पावन ग्रन्थ साहेब')}
            </h1>
            {!selectedGranthSlug && (
               <p className="text-[0.625rem] sm:text-[0.6875rem] opacity-90 font-serif mt-0.5">
                  {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬਾਣੀ' : language === 'en' ? 'Satguru Kabir Saheb Bani' : 'सतगुरु कबीर साहेब अमृत वाणी'}
               </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onSelectLanguage && (
            <div className="flex items-center gap-1 bg-white/20 p-1 rounded-lg shrink-0">
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => onSelectLanguage(lng)}
                  className={`px-2 py-0.5 rounded text-xs font-bold font-serif transition-all ${
                    language === lng
                      ? 'bg-white text-amber-600 shadow-sm'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {lng === 'hi' ? 'हि' : lng === 'pb' ? 'ਪੰ' : 'EN'}
                </button>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={onOpenSettings}
            className="p-2 hover:bg-white/20 rounded-full transition cursor-pointer"
          >
            <Settings size={22} />
          </button>
        </div>
      </div>

      {/* Top Main Heading: Saheb World Sacred Granths & Features */}
      {!zenMode && !selectedGranthSlug && (
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
          className="p-4 sm:p-5 rounded-3xl border shadow-sm relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ ਤੇ ਸਾਧਨਾ ਪੋਰਟਲ' : language === 'en' ? 'Sacred Scriptures & Sadhana Portals' : 'पावन ग्रंथावली एवं साधना पोर्टल'}</span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-xl sm:text-2xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਸਾਹੇਬ ਵਰਲਡ ਪਾਵਨ ਗ੍ਰੰਥ ਤੇ ਸਮਸਤ ਸਾਧਨਾ ਫੀਚਰਸ' 
                : language === 'en' 
                ? 'Saheb World Sacred Granths & Features' 
                : 'साहेब वर्ल्ड पावन ग्रन्थ एवं समस्त साधना फीचर्स'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-2xl font-medium font-serif">
              {language === 'pb'
                ? '੬ ਮੁੱਖ ਪ੍ਰਮਾਣਿਕ ਧਰਮ ਗ੍ਰੰਥ, ਸੰਧਿਆ ਆਰਤੀ, ਨਿਤਨੇਮ, ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ ਤੇ ਚਾਰੇ ਜੁੱਗ ਲੀਲਾਵਾਂ ਸਮੇਤ ਸਮੁੱਚਾ ਅਧਿਆਤਮਿਕ ਸੰਗ੍ਰਹਿ।'
                : language === 'en'
                ? '6 Authentic Holy Scriptures, Sandhya Aarti, Nitnem, Satguru Kabir Saheb Biography & Four Yugas Leelas, and all sacred features.'
                : '६ मुख्य प्रामाणिक धर्मग्रन्थ, संध्या आरती, नित्यनेम, सतगुरु कबीर साहेब परिचय एवं चारों युग लीलाएं सहित सम्पूर्ण आध्यात्मिक साधना संग्रह।'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold font-serif px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/40 shadow-2xs">
              {MASTER_GRANTH_CATALOG.length} पवित्र ग्रन्थ • ६ मुख्य साधना द्वार
            </span>
          </div>
        </div>
      )}

      {/* Spacious Granth Library Interface: Grid containers for holy texts */}
      {!zenMode && !selectedGranthSlug && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3" style={{ borderColor: themeStyle.border }}>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
                <Library className="w-6 h-6 text-amber-600 shrink-0" />
                <span>{language === 'pb' ? 'ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ ਕੋਸ਼ (ਮੁੱਖ ੫ ਗ੍ਰੰਥ)' : language === 'en' ? 'Spacious Granth Library Vaults (5 Holy Scriptures)' : 'पावन समग्र ग्रन्थालय (५ मुख्य धर्मग्रंथ)'}</span>
              </h2>
              <p className="text-xs font-serif opacity-80">
                {language === 'pb'
                  ? 'ਕਬੀਰ ਸਾਗਰ, ਬੀਜਕ, ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਲਟਬਾਂਸੀ, ਸ਼ਬਦਾਵਲੀ ਤੇ ਗ੍ਰੰਥਾਵਲੀ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ।'
                  : language === 'en'
                  ? 'Authentic digital vaults for Kabir Sagar, Beejak, Satguru Kabir Ulatbaasi, Shabdawali, and Granthavali.'
                  : 'कबीर सागर, बीजक, सतगुरु कबीर उलटबांसी, शब्दावली एवं ग्रंथावली का प्रामाणिक संकलन।'}
              </p>
            </div>
            <div className="text-xs font-bold font-mono px-3 py-1 rounded-xl bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 shrink-0 self-start sm:self-auto">
              ५ मुख्य ग्रन्थ • {MASTER_GRANTH_CATALOG.reduce((acc, g) => acc + (g.chapters.length || g.totalChapters || 0), 0)}+ अंग/अध्याय
            </div>
          </div>

          {/* Granth Grid Containers: Kabir Sagar, Beejak, Ulatvasi, Shabdawali, Granthavali */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MASTER_GRANTH_CATALOG.map((granth) => {
              const isSelected = granth.slug === selectedGranthSlug;
              
              const getGranthTag = () => {
                switch (granth.slug) {
                  case 'kabir-sagar':
                    return { text: language === 'pb' ? 'ਅਮਰਲੋਕ ਭੇਦ' : language === 'en' ? 'Amar Lok Secret' : 'अमरलोक भेद', color: 'bg-amber-500/20 text-amber-800 border-amber-500/40' };
                  case 'bijak':
                    return { text: language === 'pb' ? 'ਮੂਲ ਬੀਜਕ' : language === 'en' ? 'Core Bijak' : 'मूल बीजक वाणी', color: 'bg-emerald-500/20 text-emerald-800 border-emerald-500/40' };
                  case 'ulatbaasi':
                    return { text: language === 'pb' ? 'ਗੂੜ੍ਹ ਪਦ' : language === 'en' ? 'Paradox Verses' : 'गूढ़ रहस्य पद', color: 'bg-purple-500/20 text-purple-800 border-purple-500/40' };
                  case 'shabdawali':
                    return { text: language === 'pb' ? 'ਰਾਗ ਤੇ ਸ਼ਬਦ' : language === 'en' ? 'Ragas & Chants' : 'राग व पद वाणी', color: 'bg-rose-500/20 text-rose-800 border-rose-500/40' };
                  case 'granthavali':
                    return { text: language === 'pb' ? '੩੭ ਅੰਗ ਸੰਗ੍ਰਹਿ' : language === 'en' ? '37 Wisdom Angs' : '३७ अंग संग्रह', color: 'bg-indigo-500/20 text-indigo-800 border-indigo-500/40' };
                  case 'nitnem-gutka':
                    return { text: language === 'pb' ? 'ਨਿਤਨੇਮ ਪਾਠ' : language === 'en' ? 'Daily Liturgy' : 'नित्य नियम पाठ', color: 'bg-orange-500/20 text-orange-800 border-orange-500/40' };
                  default:
                    return { text: 'पवित्र ग्रन्थ', color: 'bg-amber-500/20 text-amber-800 border-amber-500/40' };
                }
              };
              const tag = getGranthTag();

              return (
                <div
                  key={granth.id}
                  id={`granth-card-${granth.slug}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${granth.title[language] || granth.title.hi} - ${granth.subtitle[language] || granth.subtitle.hi}. ${language === 'pb' ? 'ਪਾਵਨ ਗ੍ਰੰਥ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Granth Vault' : 'पावन ग्रन्थ खोलें'}`}
                  onClick={() => {
                    sacredHaptics.lightTap();
                    if (granth.slug === 'ulatbaasi' && onSelectView) {
                      onSelectView('ulatvasi-library');
                    } else if (granth.slug === 'nitnem-gutka' && onSelectView) {
                      onSelectView('nitnem-gutka');
                    } else {
                      setSelectedGranthSlug(granth.slug);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      sacredHaptics.lightTap();
                      if (granth.slug === 'ulatbaasi' && onSelectView) {
                        onSelectView('ulatvasi-library');
                      } else if (granth.slug === 'nitnem-gutka' && onSelectView) {
                        onSelectView('nitnem-gutka');
                      } else {
                        setSelectedGranthSlug(granth.slug);
                      }
                    }
                  }}
                  style={{
                    backgroundColor: isSelected ? theme.stepActiveBg : themeStyle.card,
                    borderColor: isSelected ? theme.accentGold : themeStyle.border,
                    color: themeStyle.text,
                    boxShadow: isSelected ? '0 10px 25px -5px rgba(217, 119, 6, 0.25)' : undefined,
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between h-full group relative overflow-hidden shadow-sm hover:shadow-md ${
                    isSelected ? 'border-amber-600 hover:border-amber-600' : 'border-gray-200 dark:border-zinc-700 hover:border-amber-600'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif ${tag.color}`}>
                        {tag.text}
                      </span>
                      <Scroll className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 
                        style={{ color: theme.sacredMaroon }}
                        className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-amber-700 transition"
                      >
                        {granth.title[language] || granth.title.hi}
                      </h3>
                      <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                        {granth.subtitle[language] || granth.subtitle.hi}
                      </p>
                    </div>

                    {/* Persistent Progress Tracker Indicator */}
                    {(() => {
                      const progress = backgroundSync.getBookProgress(granth.slug);
                      if (!progress) return null;
                      const chapterName = granth.chapters.find(c => c.id === progress.chapterId)?.title[language] || progress.chapterId;
                      return (
                        <div className="pt-1.5 space-y-1">
                          <div className="flex items-center justify-between text-[0.625rem] font-bold font-mono text-amber-800 dark:text-amber-300">
                            <span className="truncate max-w-[150px]">📖 {chapterName}</span>
                            <span>{progress.progressPercent || 1}%</span>
                          </div>
                          <div className="w-full bg-amber-500/20 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className="bg-amber-600 h-full rounded-full transition-all duration-500"
                              style={{ width: `${Math.max(5, progress.progressPercent || 1)}%` }}
                            />
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  <div 
                    style={{ borderColor: themeStyle.border }}
                    className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                  >
                    <span className="text-amber-700 font-serif flex items-center gap-1">
                      {backgroundSync.getBookProgress(granth.slug) ? (
                        <>
                          <BookMarked size={12} className="text-amber-600 animate-pulse" />
                          <span>{language === 'pb' ? 'ਪੜ੍ਹਾਈ ਜਾਰੀ ਰੱਖੋ (Resume)' : language === 'en' ? 'Resume Reading' : 'आगे पढ़ें (Resume)'}</span>
                        </>
                      ) : (
                        language === 'pb' ? 'ਪਾਵਨ ਗ੍ਰੰਥ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Granth Vault' : 'पावन ग्रन्थ खोलें'
                      )}
                    </span>
                    <ChevronRight size={14} className="text-amber-700 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* SAMAST FEATURES & SPIRITUAL PORTALS (समस्त पावन फीचर्स एवं साधना द्वार) */}
          {/* ========================================================================= */}
          <div className="pt-6 border-t space-y-4" style={{ borderColor: themeStyle.border }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>
                    {language === 'pb' 
                      ? 'ਸਾਹੇਬ ਵਰਲਡ ਸਮਸਤ ਫੀਚਰਸ ਤੇ ਸਾਧਨਾ ਦੁਆਰ' 
                      : language === 'en' 
                      ? 'Saheb World All Spiritual Features & Portals' 
                      : 'साहेब वर्ल्ड समस्त फीचर्स एवं साधना द्वार'}
                  </span>
                </h3>
                <p className="text-xs font-serif opacity-80">
                  {language === 'pb'
                    ? 'ਸੰਧਿਆ ਆਰਤੀ, ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ, ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਮਾਰਗਦਰਸ਼ਨ, ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ ਸਮੇਤ ਸਮੁੱਚੇ ਪਵਿੱਤਰ ਸਾਧਨ।'
                    : language === 'en'
                    ? 'Direct access to Sandhya Aarti & Prabhat Gaan, Satguru Divine Guidance, Panchamrit Vows & Sadhana Tracker, and all core features.'
                    : 'संध्या आरती एवं प्रभात गान, सतगुरु दिव्य आदेश (मार्गदर्शन), पंचामृत नेम एवं साधना ट्रैकर सहित समस्त पावन आध्यात्मिक साधन।'}
                </p>
              </div>
              <span className="text-xs font-bold font-serif px-3 py-1 rounded-xl bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 shrink-0 self-start sm:self-auto">
                {language === 'pb' ? 'ਸਮਸਤ ਸਾਧਨਾ ਕੇਂਦਰ' : language === 'en' ? 'Complete Sadhana Hub' : 'समस्त साधना केंद्र'}
              </span>
            </div>

            {/* Featured Portals Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {/* 0. Prabhat-Sandhya Sakhi (Direct Shortcut) */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('nitnem-gutka');
                    // Logic to auto-scroll or select the specific section could be added if nitnem-gutka supports deep linking
                    // For now, it opens the Nitnem Gutka reader where Prabhat Path is first.
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#F59E0B',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-amber-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-amber-500/20 text-amber-800 border-amber-500/40">
                      {language === 'pb' ? 'ਨਿਤਨੇਮ ਪਾਠ' : language === 'en' ? 'Daily Prayer' : 'नितनेम पाठ'}
                    </span>
                    <Sun className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-amber-700 transition"
                    >
                      {language === 'pb' ? 'ਪ੍ਰਭਾਤ-ਸੰਧਿਆ ਸਾਖੀ ਪਾਠ' : language === 'en' ? 'Prabhat Sandhya Sakhi Path' : 'प्रभात-सन्ध्या साखी पाठ'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਪਾਵਨ ਪ੍ਰਭਾਤ ਸਾਖੀਆਂ, ਗਿਆਨ ਗੁਦੜੀ, ਅਰਜ਼ੀਨਾਮਾ, ਵਿਨਤੀ ਤੇ ਪ੍ਰਭਾਤ ਮੰਗਲ ਪਾਠ ਦਾ ਸੰਗ੍ਰਹਿ।'
                        : language === 'en'
                        ? 'Collection of Prabhat Sakhis, Gyaan Gudadi, Arjinama, Vinti and Morning Prayers.'
                        : 'पावन प्रभात साखियाँ, ज्ञान गुदड़ी, अर्जीनामा, विनती एवं प्रभात मंगल पाठ का संकलन।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-amber-700 font-serif">
                    {language === 'pb' ? 'ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? 'Begin Recitation' : 'पाठ प्रारंभ करें'}
                  </span>
                  <ChevronRight size={14} className="text-amber-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 1. Sandhya Aarti & Prabhat Gaan */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('aarti-sanctuary');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#F59E0B',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-amber-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-amber-500/20 text-amber-800 border-amber-500/40">
                      {language === 'pb' ? 'ਨਿਤਨੇਮ ਅਰਚਨਾ' : language === 'en' ? 'Daily Liturgy' : 'नित्यनेम अर्चना'}
                    </span>
                    <Flame className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-amber-700 transition"
                    >
                      {language === 'pb' ? 'ਅਲੌਕਿਕ ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਗਾਨ' : language === 'en' ? 'Alaukik Sandhya Aarti & Prayers' : 'अलौकिक संध्या आरती एवं प्रभात गान'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? '੪ ਪਾਵਨ ਆਰਤੀਆਂ (ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ, ਗ਼ਰੀਬ ਨਿਵਾਜ਼, ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ, ਸਤ੍ਯਨਾਮ ਕੀਜੈ), ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ ਤੇ ਆਰਤੀ ਗਾਨ ਆਡੀਓ।'
                        : language === 'en'
                        ? '4 authentic Aartis (Jai Jai Satya Kabir, Gareeb Niwaj, Shri Gurudev, Satyanam Keejai), Prabhat Gaan & audio recitation.'
                        : '४ पावन आरतियां (जय जय सत्य कबीर, गरीब निवाज, श्री गुरुदेव, सत्यनाम कीजै), प्रभात मंगल गान एवं आरती गान ऑडियो।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-amber-700 font-serif">
                    {language === 'pb' ? 'ਆਰਤੀ ਧਾਮ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Sanctuary' : 'आरती धाम खोलें'}
                  </span>
                  <ChevronRight size={14} className="text-amber-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 2. Satguru Divine Guidance */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('divine-guidance');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#8B5CF6',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-purple-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-purple-500/20 text-purple-800 border-purple-500/40">
                      {language === 'pb' ? 'ਦਿਵਯ ਮਾਰਗਦਰਸ਼ਨ' : language === 'en' ? 'Divine Oracle' : 'दिव्य मार्गदर्शन'}
                    </span>
                    <Compass className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-purple-700 transition"
                    >
                      {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ (ਮਾਰਗਦਰਸ਼ਨ)' : language === 'en' ? 'Satguru Divine Guidance (Aadesh)' : 'सतगुरु दिव्य आदेश (मार्गदर्शन)'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਜੀਵਨ ਦੀਆਂ ਉਲਝਣਾਂ, ਕਰਮ ਤੇ ਭਗਤੀ ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਬਾਣੀ ਰਾਹੀਂ ਅਧਿਆਤਮਿਕ ਸਮਾਧਾਨ।'
                        : language === 'en'
                        ? 'Spiritual resolution to life questions, dilemmas, and karma guided by Satguru Kabir’s eternal verses.'
                        : 'जीवन की उलझनों, कर्म एवं भक्ति के प्रश्नों का साहेब जी की पावन वाणी द्वारा आध्यात्मिक समाधान व दिव्य संदेश।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-purple-700 font-serif">
                    {language === 'pb' ? 'ਆਦੇਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ' : language === 'en' ? 'Seek Guidance' : 'दिव्य आदेश प्राप्त करें'}
                  </span>
                  <ChevronRight size={14} className="text-purple-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 3. Panchamrit Niyam & Sadhana Tracker */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('spiritual-discipline');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#10B981',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-emerald-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-emerald-500/20 text-emerald-800 border-emerald-500/40">
                      {language === 'pb' ? 'ਸਾਧਨਾ ਨੇਮ' : language === 'en' ? 'Spiritual Vows' : 'साधना नियम'}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-emerald-700 transition"
                    >
                      {language === 'pb' ? 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ' : language === 'en' ? 'Panchamrit Vows & Sadhana Tracker' : 'पंचामृत नेम एवं साधना ट्रैकर'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? '੫ ਪਵਿੱਤਰ ਨੇਮ (ਸਤਿ, ਦਯਾ, ਸ਼ੀਲ, ਖਿਮਾ, ਸੰਤੋਖ), ਦੈਨਿਕ ਅਧਿਆਤਮਿਕ ਰੁਟੀਨ ਤੇ ਨਾਮ-ਸਿਮਰਨ ਮਾਲਾ ਟਰੈਕਰ।'
                        : language === 'en'
                        ? '5 sacred Panchamrit virtues (Satya, Daya, Sheel, Kshama, Santosh) and daily sadhana tracker.'
                        : '५ पावन पंचामृत नियम (सत्य, दया, शील, क्षमा, संतोष), दैनिक आध्यात्मिक दिनचर्या एवं नाम-सुमिरन माला ट्रैकर।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-emerald-700 font-serif">
                    {language === 'pb' ? 'ਨੇਮ ਟਰੈਕਰ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Tracker' : 'साधना ट्रैकर खोलें'}
                  </span>
                  <ChevronRight size={14} className="text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 4. Kabir Shabd-Amrit Kosha */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('shabd-kosha');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#EC4899',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-pink-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-pink-500/20 text-pink-800 border-pink-500/40">
                      {language === 'pb' ? 'ਗੂੜ੍ਹ ਕੋਸ਼' : language === 'en' ? 'Glossary' : 'गूढ़ शब्द-कोश'}
                    </span>
                    <BookMarked className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-pink-700 transition"
                    >
                      {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਕੋਸ਼ (ਸ਼ਬਦਾਵਲੀ)' : language === 'en' ? 'Satguru Kabir Shabd-Amrit Kosha' : 'सतगुरु कबीर शब्द-अमृत कोश (शब्दावली)'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਬੀਜਕ ਤੇ ਬਾਣੀ ਦੇ ੨੫੦+ ਸੰਧੁੱਕੜੀ, ਯੋਗ ਤੇ ਰੂਹਾਨੀ ਪਦਾਂ ਦਾ ਪ੍ਰਮਾਣਿਕ ਅਰਥ ਸੰਗ੍ਰਹਿ।'
                        : language === 'en'
                        ? 'Authentic dictionary for 250+ Sandhukkari, Yogic, and esoteric terms from Kabir Beejak.'
                        : 'बीजक एवं वाणियों के २५०+ संधुक्कड़ी, योग एवं आध्यात्मिक शब्दों का विशद प्रामाणिक कोश।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-pink-700 font-serif">
                    {language === 'pb' ? 'ਕੋਸ਼ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Explore Kosha' : 'शब्द-कोश खोलें'}
                  </span>
                  <ChevronRight size={14} className="text-pink-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 5. Kabir Parichay & Four Yugas Leelas */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('sacred-leelas');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#D97706',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-amber-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-amber-500/20 text-amber-800 border-amber-500/40">
                      {language === 'pb' ? 'ਚਾਰੇ ਜੁੱਗ ਤੇ ਲੀਲਾਵਾਂ' : language === 'en' ? '4 Yugas & Leelas' : 'चारों युग एवं लीलाएं'}
                    </span>
                    <Crown className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-amber-800 transition"
                    >
                      {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ ਤੇ ਚਾਰੇ ਜੁੱਗ ਲੀਲਾਵਾਂ' : language === 'en' ? 'Satguru Kabir Saheb Biography & 4 Yugas Leelas' : 'सतगुरु कबीर साहेब परिचय एवं चारों युग लीलाएं'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਸਤਿਯੁਗ (ਸਤ੍ਯ ਸੁਕ੍ਰਿਤ), ਤ੍ਰੇਤਾ (ਮੁਨੀਂਦ੍ਰ), ਦ੍ਵਾਪਰ (ਕਰੁਣਾਮਯ) ਤੇ ਕਲਿਯੁਗ (ਕਬੀਰ) ਦੇ ਪਾਵਨ ਪ੍ਰਕਾਸ਼ ਅਤੇ ੨੫ ਲੀਲਾ-ਕਥਾਵਾਂ।'
                        : language === 'en'
                        ? 'Divine manifestations in Satya Yug (Sat Sukrit), Treta (Munindra), Dwapar (Karunamay), & Kali Yug (Kabir) with 25 sacred parables.'
                        : 'सत्ययुग (सत्य सुकृत), त्रेता (मुनींद्र), द्वापर (करुणामय) तथा कलयुग (कबीर साहेब) के प्राकट्य एवं २५ पावन लीला-कथाओं का दर्शन।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-amber-800 font-serif">
                    {language === 'pb' ? 'ਪਰਿਚਯ ਤੇ ਲੀਲਾ ਦਰਸ਼ਨ' : language === 'en' ? 'Explore Biography & Leelas' : 'परिचय एवं लीला दर्शन खोलें'}
                  </span>
                  <ChevronRight size={14} className="text-amber-800 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* 6. Akhand Sakhi Path */}
              <div
                onClick={() => {
                  sacredHaptics.lightTap();
                  if (onSelectView) {
                    onSelectView('akhand-path');
                  }
                }}
                style={{
                  backgroundColor: themeStyle.card,
                  borderColor: '#0284C7',
                }}
                className="p-4 sm:p-5 rounded-2xl border-2 hover:border-sky-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] sm:text-[0.6875rem] font-black border font-serif bg-sky-500/20 text-sky-800 border-sky-500/40">
                      {language === 'pb' ? 'ਅਖੰਡ ਪਾਠ' : language === 'en' ? 'Akhand Path' : 'अखंड पाठ'}
                    </span>
                    <BookOpen className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h4 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-lg font-black font-serif tracking-wide group-hover:text-sky-700 transition"
                    >
                      {language === 'pb' ? 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ' : language === 'en' ? 'Akhand Sakhi Path' : 'अखंड साखी पाठ'}
                    </h4>
                    <p className="text-[0.6875rem] sm:text-xs opacity-80 mt-1 line-clamp-2 font-serif leading-relaxed">
                      {language === 'pb'
                        ? 'ਸਮਸਤ ਪਾਵਨ ਸਾਖੀਆਂ ਦਾ ਅਨਵਰਤ ਨਿਰੰਤਰ ਪਾਠ, ਆਟੋ-ਸਕ੍ਰੌਲ ਤੇ ਅਧਿਆਤਮਿਕ ਸਵਾਧਿਆਏ।'
                        : language === 'en'
                        ? 'Continuous seamless recitation of all Sakhis with auto-scroll and ambient chanting.'
                        : 'समस्त पावन साखियों का अनवरत निरंतर पाठ, ऑटो-एडवांस एवं ध्यानमय अखंड स्वाध्याय।'}
                    </p>
                  </div>
                </div>

                <div 
                  style={{ borderColor: themeStyle.border }}
                  className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-[0.6875rem] font-bold"
                >
                  <span className="text-sky-700 font-serif">
                    {language === 'pb' ? 'ਪਾਠ ਆਰੰਭ ਕਰੋ' : language === 'en' ? 'Start Akhand Path' : 'अखंड पाठ आरंभ करें'}
                  </span>
                  <ChevronRight size={14} className="text-sky-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedGranthSlug === 'nitnem-gutka' ? (
        <Suspense fallback={<SacredLoader language={language} />}>
          <NitnemGutkaReader 
            language={language} 
            onSelectLanguage={onSelectLanguage} 
            onClose={() => setSelectedGranthSlug('')}
          />
        </Suspense>
      ) : (
        selectedGranthSlug && (
          <>
          {/* Selected Granth Banner Card */}
          {!zenMode && (
        <div
          style={{
            backgroundColor: themeStyle.card,
            borderColor: themeStyle.border,
          }}
          className="p-4 sm:p-6 rounded-2xl border shadow-md space-y-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: themeStyle.border }}>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  {currentGranth.shortTitle[language]}
                </span>
                <span className="text-xs opacity-75">
                  {currentGranth.chapters.length} {t.chaptersCountLabel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-serif tracking-wide text-amber-600">
                {currentGranth.title[language]}
              </h3>
              <p className="text-xs sm:text-sm opacity-85 font-serif">
                {currentGranth.subtitle[language]}
              </p>
            </div>

            {/* Chapter Selection Dropdown & PDF Export */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold opacity-75">{t.selectChapterLabel}</span>
              <select
                id="chapter-select-dropdown"
                value={selectedChapterId}
                onChange={(e) => {
                  setSelectedChapterId(e.target.value);
                  setActiveVerseIndex(0);
                }}
                style={{
                  backgroundColor: themeStyle.highlight,
                  borderColor: themeStyle.border,
                  color: themeStyle.text,
                }}
                className="w-full max-w-xs px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-serif font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 truncate"
              >
                {filteredChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title[language]} ({ch.verses.length} पद्य)
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  try {
                    window.print();
                  } catch {}
                }}
                style={{
                  backgroundColor: theme.stepActiveBg,
                  color: theme.sacredMaroon,
                  borderColor: theme.accentGold
                }}
                className="px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-sm"
                title="अध्याय प्रिंट / पीडीएफ सेव करें (Export PDF / Print)"
              >
                <FileText size={15} />
                <span>PDF / प्रिंट</span>
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed opacity-90 italic">
            {currentGranth.description[language]}
          </p>

          {/* Unified Ulatvasi Granth link to 3D Quest & Quiz */}
          {selectedGranthSlug === 'ulatbaasi' && (
            <div className="pt-3 border-t border-dashed flex flex-wrap items-center justify-between gap-3" style={{ borderColor: themeStyle.border }}>
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-amber-700 dark:text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>{language === 'hi' ? '✨ सभी २५० उलटबांसियों का 3D गेमिंग प्रश्नोत्तरी अनुभव उपलब्ध है' : language === 'en' ? '✨ Interactive 3D Gaming Quiz & Quest Available' : '✨ ਸਾਰੀਆਂ 250 ਉਲਟਬਾਂਸੀਆਂ ਦੀ 3D ਗੇਮਿੰਗ ਪ੍ਰਸ਼ਨਾਵਲੀ ਉਪਲਬਧ ਹੈ'}</span>
              </div>
              {onSelectView && (
                <button
                  type="button"
                  onClick={() => onSelectView('ulatvasi-library')}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold font-serif flex items-center gap-1.5 shadow-md hover:opacity-95 transition cursor-pointer active:scale-95"
                >
                  <Trophy className="w-4 h-4" />
                  <span>{language === 'hi' ? '⚡ उलटबांसी 3D गेमिंग खेलें' : language === 'en' ? 'Play Ulatvasi 3D Quest' : '⚡ ਉਲਟਬਾਂਸੀ 3D ਗੇਮਿੰਗ'}</span>
                </button>
              )}
            </div>
          )}

          {/* Bijak Specific Quick Categories */}
          {selectedGranthSlug === 'bijak' && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed" style={{ borderColor: themeStyle.border }}>
              {[
                { id: 'all', hi: 'सभी', en: 'All' },
                { id: 'sakhi', hi: 'साखी (दोहे)', en: 'Sakhi (Couplets)' },
                { id: 'shabad', hi: 'सबद (पद)', en: 'Shabad (Hymns)' },
                { id: 'ramaini', hi: 'रमैनी (चौपाइयां)', en: 'Ramaini (Quatrains)' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryFilter(cat.id);
                    // Select first chapter of this category automatically
                    const firstInCat = currentGranth.chapters.find(ch => {
                      if (cat.id === 'all') return true;
                      const title = ch.title.hi.toLowerCase();
                      if (cat.id === 'sakhi') return title.includes('साखी');
                      if (cat.id === 'shabad') return title.includes('सबद');
                      if (cat.id === 'ramaini') return title.includes('रमैनी');
                      return false;
                    });
                    if (firstInCat) setSelectedChapterId(firstInCat.id);
                  }}
                  style={{
                    backgroundColor: activeCategoryFilter === cat.id ? theme.accentGold : themeStyle.highlight,
                    color: activeCategoryFilter === cat.id ? '#ffffff' : themeStyle.text,
                    borderColor: themeStyle.border
                  }}
                  className={`px-3 py-1 rounded-full text-[0.625rem] sm:text-xs font-bold border transition-all hover:scale-105 active:scale-95 cursor-pointer`}
                >
                  {language === 'hi' ? cat.hi : cat.en}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Top Moveable / Sticky Quick-Action Bar */}
      <div
        id="master-reader-controls"
        style={{
          backgroundColor: themeStyle.card,
          borderColor: themeStyle.border,
        }}
        className="sticky top-2 z-30 p-2.5 sm:p-3.5 rounded-2xl border shadow-lg backdrop-blur-md bg-opacity-95 transition-all duration-200 flex flex-col gap-2 mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* 1. Layout Mode Switcher: Continuous vs Parallel vs Page Flip (3-Col Segmented Control) */}
          <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-black/5 dark:bg-white/10 p-1 rounded-xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setIsPageFlipMode(false);
                setIsParallelView(false);
                setIsInterlinearView(false);
              }}
              className={`px-2 py-1.5 sm:px-3 sm:py-1 rounded-lg font-bold flex items-center justify-center gap-1 text-[0.6875rem] sm:text-xs transition-all cursor-pointer ${
                !isPageFlipMode && !isParallelView && !isInterlinearView
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-black/5'
              }`}
              title={language === 'pb' ? 'ਨਿਰੰਤਰ ਪਾਠ (Scroll)' : language === 'en' ? 'Continuous Scroll' : 'निरंतर पाठ (Scroll)'}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">
                {language === 'pb' ? '📜 ਨਿਰੰਤਰ' : language === 'en' ? '📜 Scroll' : '📜 निरंतर'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setIsPageFlipMode(false);
                setIsParallelView(true);
                setIsInterlinearView(false);
              }}
              className={`px-2 py-1.5 sm:px-3 sm:py-1 rounded-lg font-bold flex items-center justify-center gap-1 text-[0.6875rem] sm:text-xs transition-all cursor-pointer ${
                isParallelView
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-black/5'
              }`}
              title={language === 'pb' ? 'ਸਮਾਨਾਂਤਰ ਟੀਕਾ (Parallel)' : language === 'en' ? 'Parallel View' : 'समानांतर टीका (Parallel)'}
            >
              <Columns className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">
                {language === 'pb' ? '📖 ਸਮਾਨਾਂਤਰ' : language === 'en' ? '📖 Parallel' : '📖 समानांतर'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setIsParallelView(false);
                setIsInterlinearView(false);
                setIsPageFlipMode(true);
              }}
              className={`px-2 py-1.5 sm:px-3 sm:py-1 rounded-lg font-bold flex items-center justify-center gap-1 text-[0.6875rem] sm:text-xs transition-all cursor-pointer ${
                isPageFlipMode
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-black/5'
              }`}
              title={language === 'pb' ? '੩D ਪੋਥੀ (3D Flip)' : language === 'en' ? '3D Pothi Flip' : '३D पोथी (3D Flip)'}
            >
              <Scroll className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">
                {language === 'pb' ? '🪞 ੩D ਪੋਥੀ' : language === 'en' ? '🪞 3D Flip' : '🪞 ३D पोथी'}
              </span>
            </button>
          </div>

          {/* 2. Top Moveable Quick-Action Icons Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full no-scrollbar">
            {/* Theme Icon Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'theme' ? null : 'theme');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeQuickPanel === 'theme'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="थीम चुनें (Themes)"
            >
              <Palette className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[0.6875rem]">
                {readerTheme === 'mool' && (language === 'pb' ? 'ਮੂਲ' : 'मूल')}
                {readerTheme === 'comfort' && (language === 'pb' ? 'ਸੁਖਦ' : 'सुखद')}
                {readerTheme === 'pothi' && (language === 'pb' ? 'ਪੋਥੀ' : 'पोथी')}
                {readerTheme === 'black' && (language === 'pb' ? 'ਬਲੈਕ' : 'ब्लैक')}
                {readerTheme === 'netra' && (language === 'pb' ? 'ਨੇਤਰ' : 'नेत्र')}
              </span>
            </button>

            {/* Font & Canvas Width Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'font' ? null : 'font');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeQuickPanel === 'font'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="फ़ॉन्ट व विस्तार (Font & Width)"
            >
              <span className="font-serif font-black text-amber-600">A</span>
              <span className="text-[0.6875rem] font-mono">
                {fontSize === 'small' ? 'A-' : fontSize === 'normal' || fontSize === 'medium' ? 'A' : fontSize === 'large' ? 'A+' : fontSize === 'elderly' ? '👵 A+++' : 'A++'} • {widthMode === 'wide' ? '7XL' : '5XL'}
              </span>
            </button>

            {/* Highlighter Icon Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'highlighter' ? null : 'highlighter');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeQuickPanel === 'highlighter' || activeHighlightColor
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="हाइलाइटर (Highlighter)"
            >
              <Highlighter className="w-3.5 h-3.5" />
              {activeHighlightColor && (
                <span
                  style={{
                    backgroundColor: activeHighlightColor === 'saffron' ? '#F59E0B' : activeHighlightColor === 'green' ? '#10B981' : '#FDE047',
                  }}
                  className="w-2.5 h-2.5 rounded-full ring-1 ring-white"
                />
              )}
              <span className="text-[0.6875rem] hidden sm:inline">
                {language === 'pb' ? 'ਹਾਈਲਾਈਟਰ' : language === 'en' ? 'Highlight' : 'हाइलाइटर'}
              </span>
            </button>

            {/* Auto-Scroll Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'autoscroll' ? null : 'autoscroll');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                isAutoPlaying || activeQuickPanel === 'autoscroll'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="स्वतः स्क्रॉल (Auto-Advance)"
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5 text-amber-600" />}
              <span className="text-[0.6875rem]">{autoScrollSpeed}x</span>
            </button>

            {/* Target Count Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'target' ? null : 'target');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeQuickPanel === 'target'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="दैनिक लक्ष्य (Target Pace)"
            >
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[0.6875rem] font-mono">{targetPace}</span>
            </button>

            {/* Interlinear View Toggle */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setIsInterlinearView(!isInterlinearView);
                setIsParallelView(false);
                setIsPageFlipMode(false);
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                isInterlinearView
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="इंटरलीनियर ३-भाषा दर्शन"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[0.6875rem] hidden sm:inline">{language === 'pb' ? 'ਇੰਟਰਲੀਨੀਅਰ' : 'इंटरलीनियर'}</span>
            </button>

            {/* Shabdarth & Bhavarth Toggle */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowMeaning(!showMeaning);
                setIndividualToggle({});
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                showMeaning
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10 opacity-70'
              }`}
              title={showMeaning ? "व्याख्या छिपाएं" : "व्याख्या देखें"}
            >
              {showMeaning ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="text-[0.6875rem] hidden sm:inline">{showMeaning ? (language === 'pb' ? 'ਅਰਥ ਸਹਿਤ' : 'अर्थ सहित') : (language === 'pb' ? 'ਕੇਵਲ ਮੂਲ' : 'केवल मूल')}</span>
            </button>

            {/* Line Guide Focus Beam */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowLineGuide(!showLineGuide);
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                showLineGuide
                  ? 'bg-amber-500/20 text-amber-700 border-amber-500/40 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10 opacity-70'
              }`}
              title="पंक्ति गाइड (Line Focus)"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[0.6875rem] hidden sm:inline">{language === 'pb' ? 'ਗਾਈਡ' : 'गाइड'}</span>
            </button>

            {/* Background Dhun Menu Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveQuickPanel(activeQuickPanel === 'dhun' ? null : 'dhun');
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                bgDhun !== 'off' || activeQuickPanel === 'dhun'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="पृष्ठभूमि धुन (Tanpura / Flute / Satyanaam)"
            >
              <Music className="w-3.5 h-3.5" />
              <span className="text-[0.6875rem]">
                {bgDhun === 'off' && (language === 'pb' ? 'ਮਿਊਟ' : 'म्यूट')}
                {bgDhun === 'tanpura' && (language === 'pb' ? 'ਤਾਨਪੂਰਾ' : 'तानपुरा')}
                {bgDhun === 'flute' && (language === 'pb' ? 'ਬਾਂਸੁਰੀ' : 'बांसुरी')}
                {bgDhun === 'satyanaam' && (language === 'pb' ? 'ਸਤਯਨਾਮ' : 'सत्यनाम')}
              </span>
            </button>

            {/* Zen Concentration Mode */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setZenMode(!zenMode);
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                zenMode
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="जेन एकाग्रता मोड (Zen Mode)"
            >
              {zenMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5 text-amber-600" />}
              <span className="text-[0.6875rem] hidden sm:inline">{language === 'pb' ? 'ਜ਼ੇਨ' : 'ज़ेन'}</span>
            </button>

            {/* Divine Breathing Guide Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowBreathingGuide(!showBreathingGuide);
              }}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                showBreathingGuide
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 text-inherit border-black/10 dark:border-white/10'
              }`}
              title="दैनिक स्वतः चक्र सुधार (दिव्य श्वास चक्र)"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" />
              <span className="text-[0.6875rem] hidden sm:inline">{language === 'pb' ? 'ਸ਼ਵਾਸ ਚੱਕਰ' : 'श्वास चक्र'}</span>
            </button>

            {/* Advanced Suite Trigger Button */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowAdvancedSuiteModal(true);
              }}
              className="px-2.5 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0"
              title="उन्नत पठन साधन (Advanced Reading Suite)"
            >
              <Settings className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[0.6875rem]">{language === 'pb' ? 'ਉੱਨਤ ਸਾਧਨ' : 'उन्नत साधन'}</span>
            </button>

            {/* Quick Link to Nitnem Gutka Saheb */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                if (onSelectView) {
                  onSelectView('nitnem-gutka');
                } else {
                  setSelectedGranthSlug('nitnem-gutka');
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-xs hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              title="सतगुरु कबीर साहेब नितनेम गुटका साहेब (नित्य पाठ, अस्तुति, आरती एवं ग्रन्थ संग्रह)"
            >
              <span>🌹</span>
              <span className="text-[0.6875rem] whitespace-nowrap">{language === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ' : 'नितनेम गुटका साहेब'}</span>
            </button>
          </div>
        </div>

        {/* 3. Expandable Interactive Quick Panels */}
        {activeQuickPanel && (
          <div
            style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}
            className="p-3 rounded-xl border text-xs animate-fadeIn flex flex-wrap items-center justify-between gap-3 shadow-inner"
          >
            {/* Theme Panel */}
            {activeQuickPanel === 'theme' && (
              <div className="flex flex-wrap items-center gap-1.5 w-full">
                <span className="font-bold text-amber-700 mr-2 flex items-center gap-1">
                  <Palette size={14} />
                  <span>{language === 'pb' ? 'ਥੀਮ ਚੁਣੋ:' : 'थीम चुनें:'}</span>
                </span>
                {(['mool', 'comfort', 'pothi', 'black', 'netra'] as ReaderCustomTheme[]).map((thm) => (
                  <button
                    key={thm}
                    onClick={() => {
                      sacredHaptics.lightTap();
                      changeReaderTheme(thm);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-serif font-bold text-xs transition cursor-pointer ${
                      readerTheme === thm ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {thm === 'mool' && (language === 'pb' ? 'ਮੂਲ' : 'मूल')}
                    {thm === 'comfort' && (language === 'pb' ? 'ਸੁਖਦ' : 'सुखद')}
                    {thm === 'pothi' && (language === 'pb' ? 'ਪੋਥੀ' : 'पोथी')}
                    {thm === 'black' && (language === 'pb' ? 'ਬਲੈਕ' : 'ब्लैक')}
                    {thm === 'netra' && (language === 'pb' ? 'ਨੇਤਰ' : 'नेत्र')}
                  </button>
                ))}
              </div>
            )}

            {/* Font Size, Line Height, Script Face & Canvas Width Panel */}
            {activeQuickPanel === 'font' && (
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-amber-700 mr-1 flex items-center gap-1">
                    <Sliders size={14} />
                    <span>{language === 'pb' ? 'ਅੱਖਰ ਆਕਾਰ:' : 'फ़ॉन्ट आकार:'}</span>
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={4}
                    step={1}
                    value={getFontSizeIndex(fontSize)}
                    onChange={(e) => {
                      sacredHaptics.lightTap();
                      const newFs = getFontSizeFromIndex(Number(e.target.value));
                      handleSetLocalFontSize(newFs);
                    }}
                    className="w-24 sm:w-36 h-2 bg-amber-200 dark:bg-amber-900 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  {(['small', 'normal', 'large', 'xlarge', 'elderly'] as ReaderFontSize[]).map((fs) => (
                    <button
                      key={fs}
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        handleSetLocalFontSize(fs);
                      }}
                      className={`min-h-[38px] sm:min-h-[30px] px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                        fontSize === fs || (fs === 'normal' && fontSize === 'medium') || (fs === 'xlarge' && fontSize === 'xl')
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-black/5 hover:bg-black/10'
                      }`}
                    >
                      {fs === 'small' && 'A- (छोटा)'}
                      {fs === 'normal' && 'A (मध्यम)'}
                      {fs === 'large' && 'A+ (बड़ा)'}
                      {fs === 'xlarge' && 'A++ (विशाल)'}
                      {fs === 'elderly' && '👵 A+++ (बुजुर्ग)'}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-black/10 dark:border-white/10">
                  {/* Line Spacing Controls */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-bold text-amber-700 mr-1">{language === 'pb' ? 'ਲਾਈਨ ਅੰਤਰਾਲ:' : 'पंक्ति अंतराल:'}</span>
                    {[
                      { id: 'small' as const, label: language === 'pb' ? 'ਘੱਟ' : 'कॉम्पैक्ट' },
                      { id: 'medium' as const, label: language === 'pb' ? 'ਸੰਤੁਲਿਤ' : 'संतुलित' },
                      { id: 'large' as const, label: language === 'pb' ? 'ਖੁੱਲ੍ਹਾ' : 'विस्तृत' },
                    ].map((lh) => (
                      <button
                        key={lh.id}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setLineHeight(lh.id);
                        }}
                        className={`min-h-[38px] sm:min-h-[30px] px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                          lineHeight === lh.id ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                        }`}
                      >
                        {lh.label}
                      </button>
                    ))}
                  </div>

                  {/* Script Face & Canvas Width */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg">
                      {[
                        { id: 'serif' as const, label: language === 'pb' ? '📜 ਗ੍ਰੰਥ' : '📜 ग्रंथ (Serif)' },
                        { id: 'sans' as const, label: language === 'pb' ? '🔤 ਸਰਲ' : '🔤 सरल (Sans)' },
                      ].map((ff) => (
                        <button
                          key={ff.id}
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setFontFamily(ff.id);
                          }}
                          className={`min-h-[38px] sm:min-h-[30px] px-2.5 py-1 rounded-md font-bold text-xs transition cursor-pointer ${
                            fontFamily === ff.id ? 'bg-amber-600 text-white shadow-xs' : 'hover:bg-black/10'
                          }`}
                        >
                          {ff.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-amber-700">{language === 'pb' ? 'ਕੈਨਵਸ:' : 'विस्तार:'}</span>
                      {[
                        { id: 'wide', label: language === 'pb' ? 'ਵਿਸ਼ਾਲ 7XL' : '7XL' },
                        { id: 'medium', label: language === 'pb' ? 'ਮੱਧਮ 5XL' : '5XL' },
                      ].map((wObj) => (
                        <button
                          key={wObj.id}
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setWidthMode(wObj.id as any);
                          }}
                          className={`min-h-[38px] sm:min-h-[30px] px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                            widthMode === wObj.id ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                          }`}
                        >
                          {wObj.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Highlighter Swatches Panel */}
            {activeQuickPanel === 'highlighter' && (
              <div className="flex flex-wrap items-center gap-2.5 w-full">
                <span className="font-bold text-amber-700 mr-1">{language === 'pb' ? 'ਹਾਈਲਾਈਟਰ ਰੰਗ:' : 'हाइलाइटर रंग:'}</span>
                {(['saffron', 'green', 'yellow'] as HighlightColor[]).map((clr) => (
                  <button
                    key={clr}
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setActiveHighlightColor(activeHighlightColor === clr ? null : clr);
                    }}
                    style={{
                      backgroundColor: clr === 'saffron' ? '#F59E0B' : clr === 'green' ? '#10B981' : '#FDE047',
                    }}
                    className={`px-3 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                      activeHighlightColor === clr ? 'ring-2 ring-amber-600 scale-105 text-black' : 'opacity-85 hover:opacity-100 text-black'
                    }`}
                  >
                    <span>●</span>
                    <span>{clr === 'saffron' ? (language === 'pb' ? 'ਕੇਸਰੀ' : 'केसरिया') : clr === 'green' ? (language === 'pb' ? 'ਹਰਾ' : 'हरा') : (language === 'pb' ? 'ਪੀਲਾ' : 'पीला')}</span>
                  </button>
                ))}
                {activeHighlightColor && (
                  <button
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setActiveHighlightColor(null);
                    }}
                    className="px-2.5 py-1 rounded-lg font-bold text-xs bg-black/10 hover:bg-black/20 text-gray-700 cursor-pointer"
                  >
                    {language === 'pb' ? 'ਰੱਦ ਕਰੋ' : 'रद्द करें'}
                  </button>
                )}
                <span className="text-[0.6875rem] opacity-75 ml-auto">
                  {language === 'pb' ? '(ਰੰਗ ਚੁਣ ਕੇ ਕਿਸੇ ਵੀ ਪਦ ਤੇ ਕਲਿੱਕ ਕਰੋ)' : '(रंग चुनकर किसी भी पद्य पर क्लिक करें)'}
                </span>
              </div>
            )}

            {/* Auto-Scroll & Speed Panel */}
            {activeQuickPanel === 'autoscroll' && (
              <div className="flex flex-wrap items-center justify-between gap-3 w-full">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                      isAutoPlaying ? 'bg-amber-600 text-white animate-pulse' : 'bg-black/10 hover:bg-black/20'
                    }`}
                  >
                    {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isAutoPlaying ? (language === 'pb' ? 'ਸਕ੍ਰੋਲ ਰੋਕੋ' : 'स्क्रॉल रोकें') : (language === 'pb' ? 'ਸਕ੍ਰੋਲ ਸ਼ੁਰੂ ਕਰੋ' : 'स्क्रॉल शुरू करें')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <span className="font-bold text-amber-700 mr-1">{language === 'pb' ? 'ਗਤੀ:' : 'गति:'}</span>
                  {([0.5, 1, 1.5, 2, 2.5, 3, 5] as const).map((spd) => (
                    <button
                      key={spd}
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setAutoScrollSpeed(spd);
                      }}
                      className={`px-2 py-1 rounded-md font-bold text-xs transition cursor-pointer ${
                        autoScrollSpeed === spd ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Target Pace Panel */}
            {activeQuickPanel === 'target' && (
              <div className="flex flex-wrap items-center gap-2 w-full">
                <span className="font-bold text-amber-700 mr-1">{language === 'pb' ? 'ਦੈਨਿਕ ਪਾਠ ਟੀਚਾ:' : 'दैनिक पठन लक्ष्य:'}</span>
                {([5, 11, 21, 51, 108] as ReaderTarget[]).map((tgt) => (
                  <button
                    key={tgt}
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setTargetPace(tgt);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                      targetPace === tgt ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {tgt} {language === 'pb' ? 'ਪਦ' : 'पद्य'}
                  </button>
                ))}
              </div>
            )}

            {/* Background Dhun Panel */}
            {activeQuickPanel === 'dhun' && (
              <div className="flex flex-wrap items-center gap-2 w-full">
                <span className="font-bold text-amber-700 mr-1 flex items-center gap-1">
                  <Music size={14} />
                  <span>{language === 'pb' ? 'ਪਾਵਨ ਧੁਨ:' : 'पावन पृष्ठभूमि धुन:'}</span>
                </span>
                {(['off', 'tanpura', 'flute', 'satyanaam'] as (DhunSoundType | 'off')[]).map((snd) => (
                  <button
                    key={snd}
                    onClick={() => {
                      sacredHaptics.lightTap();
                      handleSelectDhun(snd);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${
                      bgDhun === snd ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {snd === 'off' && (language === 'pb' ? '🔇 ਮਿਊਟ' : '🔇 म्यूट')}
                    {snd === 'tanpura' && (language === 'pb' ? '🪕 ਤਾਨਪੂਰਾ' : '🪕 तानपुरा')}
                    {snd === 'flute' && (language === 'pb' ? '🪈 ਬਾਂਸੁਰੀ' : '🪈 बांसुरी')}
                    {snd === 'satyanaam' && (language === 'pb' ? '🌹 ਸਤਯਨਾਮ ਧੁਨ' : '🌹 सत्यनाम धुन')}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Advanced Reading Suite Modal / Mobile Bottom Sheet (उन्नत पठन साधन) */}
      {showAdvancedSuiteModal && (
        <div
          onClick={() => setShowAdvancedSuiteModal(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border, color: themeStyle.text }}
            className="rounded-t-3xl sm:rounded-3xl border-t-2 sm:border-2 shadow-2xl max-w-xl w-full max-h-[88dvh] sm:max-h-[90vh] overflow-y-auto overscroll-contain p-4 sm:p-7 pb-safe space-y-6"
          >
            <div
              onClick={() => setShowAdvancedSuiteModal(false)}
              className="sm:hidden w-12 h-1.5 bg-amber-500/40 rounded-full mx-auto -mt-1 mb-1 cursor-pointer"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between border-b pb-3 gap-2" style={{ borderColor: themeStyle.border }}>
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                  <Settings size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-black text-base sm:text-lg text-amber-900 dark:text-amber-200 truncate">
                    {language === 'pb' ? 'ਉੱਨਤ ਪਠਨ ਸਾਧਨ (Advanced Reading Suite)' : 'उन्नत पठन साधन (Advanced Reading Suite)'}
                  </h3>
                  <p className="text-[0.6875rem] opacity-75 font-serif truncate">
                    {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਗ੍ਰੰਥਾਵਲੀ ਅਧਿਐਨ ਕੰਟਰੋਲ' : 'सतगुरु कबीर साहेब ग्रन्थावली समग्र स्वाध्याय नियंत्रण'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAdvancedSuiteModal(false)}
                className="min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0"
              >
                <ArrowLeft size={16} />
                <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'वापस जाएं'}</span>
              </button>
            </div>

            {/* Modal Tabs Navigation */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border" style={{ borderColor: themeStyle.border }}>
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSuiteActiveTab('controls');
                }}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  suiteActiveTab === 'controls'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'hover:bg-black/5 text-amber-900 dark:text-amber-200'
                }`}
              >
                <Sliders size={16} />
                <span>{language === 'pb' ? 'ਪਠਨ ਸਾਧਨ ਤੇ ਸੈਟਿੰਗਜ਼' : 'पठन साधन व सेटिंग्स'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSuiteActiveTab('history');
                }}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition cursor-pointer relative ${
                  suiteActiveTab === 'history'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'hover:bg-black/5 text-amber-900 dark:text-amber-200'
                }`}
              >
                <RotateCcw size={16} />
                <span>{language === 'pb' ? 'ਪਠਨ ਇਤਿਹਾਸ' : 'पठन इतिहास (History)'}</span>
                {readingHistory.length > 0 && (
                  <span className={`px-1.5 py-0.5 text-[0.625rem] rounded-full font-bold ${
                    suiteActiveTab === 'history' ? 'bg-white text-amber-900' : 'bg-amber-600 text-white'
                  }`}>
                    {readingHistory.length}
                  </span>
                )}
              </button>
            </div>

            {/* TAB 1: READING CONTROLS & 8 SACRED READING MODES */}
            {suiteActiveTab === 'controls' && (
              <div className="space-y-6">
                
                {/* 👑 8 SACRED READING MODES SELECTOR */}
                <div className="p-4 rounded-3xl border-2 border-amber-500/30 bg-amber-500/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📖</span>
                      <h4 className="font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200 uppercase tracking-wider">
                        {language === 'pb' ? '੮ ਪਾਵਨ ਪਾਠ ਮੋਡ (8 Reading Modes)' : '८ प्रकार के पावन पाठ मोड (8 Reading Modes)'}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-600 text-white text-[0.625rem] font-bold font-mono">
                      8 MODES
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      {
                        id: 'scroll',
                        icon: '📜',
                        titleHi: '१. निरंतर स्क्रॉल मोड',
                        titlePb: '੧. ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ',
                        active: !isPageFlipMode && !isParallelView,
                        action: () => {
                          setIsPageFlipMode(false);
                          setIsParallelView(false);
                        },
                      },
                      {
                        id: 'flip',
                        icon: '📖',
                        titleHi: '२. ३D पोथी पन्ना मोड',
                        titlePb: '੨. ੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ',
                        active: isPageFlipMode,
                        action: () => {
                          setIsPageFlipMode(true);
                          setIsParallelView(false);
                        },
                      },
                      {
                        id: 'parallel',
                        icon: '📊',
                        titleHi: '३. समानांतर तुलना मोड',
                        titlePb: '੩. ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ',
                        active: isParallelView,
                        action: () => {
                          setIsParallelView(true);
                          setIsPageFlipMode(false);
                        },
                      },
                      {
                        id: 'zen',
                        icon: '🧘',
                        titleHi: '४. सहज पाठ (ज़ेन मोड)',
                        titlePb: '੪. ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ',
                        active: zenMode,
                        action: () => {
                          setZenMode(!zenMode);
                          setShowAdvancedSuiteModal(false);
                        },
                      },
                      {
                        id: 'larivaar',
                        icon: '🪷',
                        titleHi: '५. लारीवार अखंड पाठ',
                        titlePb: '੫. ਲਾਰੀਵਾਰ ਅਖੰਡ ਪਾਠ',
                        active: isLarivaarMode,
                        action: () => setIsLarivaarMode(!isLarivaarMode),
                      },
                      {
                        id: 'visraam',
                        icon: '🎯',
                        titleHi: '६. विश्राम हाइलाइट',
                        titlePb: '੬. ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ',
                        active: isVisraamHighlightEnabled,
                        action: () => setIsVisraamHighlightEnabled(!isVisraamHighlightEnabled),
                      },
                      {
                        id: 'autoplay',
                        icon: '⚡',
                        titleHi: '७. स्वतः स्क्रॉल एवं श्वास',
                        titlePb: '੭. ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ',
                        active: isAutoPlaying,
                        action: () => setIsAutoPlaying(!isAutoPlaying),
                      },
                      {
                        id: 'swadhyay',
                        icon: '📚',
                        titleHi: '८. स्वाध्याय ८-चरण मर्म',
                        titlePb: '੮. ਸਵਾਧਿਆਇ ੮-ਚਰਣ ਮਨਨ',
                        active: false,
                        action: () => {
                          setShowAdvancedSuiteModal(false);
                          if (onSelectView) onSelectView('swadhyay');
                        },
                      },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          mode.action();
                        }}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                          mode.active
                            ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-xs'
                            : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-amber-400'
                        }`}
                      >
                        <span className="text-xl shrink-0">{mode.icon}</span>
                        <span className="font-serif font-black text-xs block truncate">
                          {language === 'pb' ? mode.titlePb : mode.titleHi}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 🌙 Night Mode Toggle Card */}
                <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                        <Moon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                          {language === 'pb' ? 'ਰਾਤਰੀ ਪਠਨ ਮੋਡ (Night Study Mode)' : 'रात्रि पठन मोड (Night Study Mode)'}
                        </h4>
                        <p className="text-[0.6875rem] opacity-75 font-serif">
                          {language === 'pb' ? 'ਗਹਿਰਾ ਸੇਪੀਆ ਤੇ ਨੇਤਰ ਸੁਰੱਖਿਆ ਨਾਈਟ ਥੀਮ' : 'अंधेरे में पठन हेतु गहरा सेपिया व नेत्र-सुरक्षा डार्क थीम'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleNightMode()}
                      className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm ${
                        isNightMode || readerTheme === 'deep_sepia' || readerTheme === 'midnight'
                          ? 'bg-amber-600 text-white'
                          : 'bg-black/10 hover:bg-black/20 text-stone-800 dark:text-stone-200'
                      }`}
                    >
                      {isNightMode || readerTheme === 'deep_sepia' || readerTheme === 'midnight' ? <Moon size={15} /> : <Sun size={15} />}
                      <span>
                        {isNightMode || readerTheme === 'deep_sepia' || readerTheme === 'midnight'
                          ? (language === 'pb' ? '🌙 ਰਾਤਰੀ ਮੋਡ ਚਾਲੂ' : '🌙 रात्रि मोड चालू')
                          : (language === 'pb' ? '☀️ ਦਿਨ ਮੋਡ ਚਾਲੂ' : '☀️ दिन मोड चालू')}
                      </span>
                    </button>
                  </div>

                  {/* Night Theme Presets */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-black/5 dark:border-white/5">
                    <span className="text-xs font-serif font-bold text-amber-800 dark:text-amber-300">
                      {language === 'pb' ? 'ਨਾਈਟ ਰੰਗ ਰੂਪ:' : 'रात्रि रंग स्वरूप:'}
                    </span>
                    {[
                      { id: 'deep_sepia', label: language === 'pb' ? '🤎 ਗਹਿਰਾ ਸੇਪੀਆ' : '🤎 गहरा सेपिया (Sepia)' },
                      { id: 'midnight', label: language === 'pb' ? '🌑 ਮਿਡਨਾਈਟ ਡਾਰਕ' : '🌑 मिडनाइट (Midnight)' },
                      { id: 'black', label: language === 'pb' ? '🖤 ਬਲੈਕ' : '🖤 ब्लैक (Black)' },
                    ].map((nt) => (
                      <button
                        key={nt.id}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          changeReaderTheme(nt.id as any);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition cursor-pointer ${
                          readerTheme === nt.id ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                        }`}
                      >
                        {nt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* ⏱️ Reading Time Remaining Indicator Card */}
                <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                        <Timer className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                          {language === 'pb' ? 'ਅਨੁਮਾਨਿਤ ਬਾਕੀ ਪਠਨ ਸਮਾਂ' : 'शेष पठन समय इंडिकेटर (Reading Time Remaining)'}
                        </h4>
                        <p className="text-[0.6875rem] opacity-75 font-serif">
                          {language === 'pb' ? 'ਤੁਹਾਡੀ ਪਠਨ ਗਤੀ ਦੇ ਆਧਾਰ ਤੇ ਗਣਨਾ ਕੀਤਾ ਗਿਆ' : 'आपकी औसत पठन गति व साखी की लम्बाई पर आधारित'}
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-xl bg-amber-600 text-white font-black text-xs shadow-xs font-mono">
                      ~{estimatedReadingMinsRemaining} {language === 'pb' ? 'ਮਿੰਟ ਬਾਕੀ' : 'मिनट शेष'}
                    </span>
                  </div>

                  {/* Progress Bar & Details */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[0.6875rem] font-serif font-bold text-amber-900 dark:text-amber-200">
                      <span>📖 {currentChapter?.title[language] || currentChapter?.title.hi}</span>
                      <span>{activeVerseIndex + 1} / {filteredVerses.length} {language === 'pb' ? 'ਪਦ' : 'पद्य'} ({chapterReadingProgressPercent}%)</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300 rounded-full"
                        style={{ width: `${chapterReadingProgressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Adjustable WPM Speed Setting */}
                  <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs">
                    <span className="font-serif font-bold text-amber-800 dark:text-amber-300">
                      {language === 'pb' ? 'ਪਠਨ ਗਤੀ (Speed):' : 'अपनी पठन गति (Reading Speed):'}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[
                        { wpm: 100, label: language === 'pb' ? 'ਧੀਮੀ (100 wpm)' : 'धीमी (100 wpm)' },
                        { wpm: 140, label: language === 'pb' ? 'ਮੱਧਮ (140 wpm)' : 'मध्यम (140 wpm)' },
                        { wpm: 180, label: language === 'pb' ? 'ਤੇਜ਼ (180 wpm)' : 'तीव्र (180 wpm)' },
                      ].map((s) => (
                        <button
                          key={s.wpm}
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setReadingWpm(s.wpm);
                            try {
                              localStorage.setItem('sahebworld_reading_wpm', String(s.wpm));
                            } catch (e) {
                              console.error(e);
                            }
                          }}
                          className={`px-2 py-0.5 rounded-lg text-[0.6875rem] font-bold transition cursor-pointer ${
                            readingWpm === s.wpm ? 'bg-amber-600 text-white shadow-xs' : 'bg-black/5 hover:bg-black/10'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 🔊 Text-to-Speech (TTS) Card */}
                <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                          {language === 'pb' ? 'ਟੈਕਸਟ ਟੂ ਸਪੀਚ (Text to Speech)' : 'पाठ वाणी वाचन (Text-to-Speech TTS)'}
                        </h4>
                        <p className="text-[0.6875rem] opacity-75 font-serif">
                          {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਬਾਣੀ ਦਾ ਸ਼ੁੱਧ ਉਚਾਰਨ ਸ਼੍ਰਵਣ ਕਰੋ' : 'सतगुरु कबीर साहेब पावन वाणी का एआई पाठ वाचन श्रवण करें'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleToggleFullRecitation}
                      className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm ${
                        isSpeaking || isFullRecitationActive
                          ? 'bg-amber-600 text-white animate-pulse'
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                    >
                      {isSpeaking || isFullRecitationActive ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      <span>
                        {isSpeaking || isFullRecitationActive
                          ? (language === 'pb' ? 'ਵਾਚਣ ਰੋਕੋ' : 'वाचन रोकें')
                          : (language === 'pb' ? 'ਬਾਣੀ ਸੁਣੋ' : 'वाणी श्रवण करें')}
                      </span>
                    </button>
                  </div>

                  {(isSpeaking || isFullRecitationActive) && (
                    <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-serif font-bold flex items-center gap-2 animate-fadeIn">
                      <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
                      <span>
                        {language === 'pb'
                          ? `🔊 ਪਾਵਨ ਬਾਣੀ ਵਾਚਣ ਚੱਲ ਰਿਹਾ ਹੈ... (ਪਦ #${activeVerseIndex + 1})`
                          : `🔊 पावन वाणी वाचन जारी है... (पद्य #${activeVerseIndex + 1})`}
                      </span>
                    </div>
                  )}
                </div>

                {/* 🖍️ Highlighting Feature Card */}
                <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                        <Highlighter className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                          {language === 'pb' ? 'ਹਾਈਲਾਈਟਰ ਸਾਧਨ (Highlighting)' : 'हाइलाइटर साधन (Highlighting Feature)'}
                        </h4>
                        <p className="text-[0.6875rem] opacity-75 font-serif">
                          {language === 'pb' ? 'ਮਨਪਸੰਦ ਪਦਾਂ ਨੂੰ ਵੱਖ-ਵੱਖ ਰੰਗਾਂ ਨਾਲ ਸੁਰੱਖਿਅਤ ਕਰੋ' : 'साखियों व पदों को अपनी पसंद के पावन रंगों में हाइलाइट करें'}
                        </p>
                      </div>
                    </div>

                    {totalGranthHighlightsCount > 0 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 text-[0.625rem] font-bold border border-amber-500/30">
                        {totalGranthHighlightsCount} {language === 'pb' ? 'ਸੁਰੱਖਿਅਤ' : 'सहेजे गए'}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {(['saffron', 'green', 'yellow'] as HighlightColor[]).map((clr) => (
                      <button
                        key={clr}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setActiveHighlightColor(activeHighlightColor === clr ? null : clr);
                        }}
                        style={{
                          backgroundColor: clr === 'saffron' ? '#F59E0B' : clr === 'green' ? '#10B981' : '#FDE047',
                        }}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 text-black transition cursor-pointer shadow-xs ${
                          activeHighlightColor === clr ? 'ring-2 ring-amber-600 scale-105' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <span>●</span>
                        <span>
                          {clr === 'saffron'
                            ? (language === 'pb' ? 'ਕੇਸਰੀ' : 'केसरिया')
                            : clr === 'green'
                            ? (language === 'pb' ? 'ਹਰਾ' : 'हरा')
                            : (language === 'pb' ? 'ਪੀਲਾ' : 'पीला')}
                        </span>
                      </button>
                    ))}

                    {activeHighlightColor && (
                      <button
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setActiveHighlightColor(null);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-black/10 hover:bg-black/20 text-xs font-bold font-serif cursor-pointer"
                      >
                        {language === 'pb' ? 'ਰੱਦ ਕਰੋ' : 'हाइलाइटर बंद करें'}
                      </button>
                    )}
                  </div>

                  <p className="text-[0.6875rem] opacity-75 font-serif italic">
                    {language === 'pb'
                      ? '💡 ਰੰਗ ਚੁਣ ਕੇ ਕਿਸੇ ਵੀ ਪਦ ਤੇ ਟੈਪ ਕਰਨ ਨਾਲ ਉਹ ਰੰਗੀਨ ਹੋ ਜਾਵੇਗਾ।'
                      : '💡 रंग चुनकर स्क्रीन पर किसी भी साखी/पद्य पर टैप करने से वह तुरंत हाइलाइट हो जाएगा।'}
                  </p>
                </div>

                {/* Fast Jump to Nitnem Gutka Saheb Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-700 text-white space-y-2 shadow-md">
                  <div className="flex items-center gap-2 font-serif font-black text-sm sm:text-base">
                    <span>🌹</span>
                    <span>{language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ' : 'सतगुरु कबीर साहेब नितनेम गुटका साहेब'}</span>
                  </div>
                  <p className="text-xs text-amber-100 leading-relaxed font-serif">
                    {language === 'pb'
                      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿਤਯ ਪਾਠ, ਅਸਤੁਤੀ, ਆਰਤੀ, ਚਾਲੀਸਾ ਤੇ ਸੰਪੂਰਨ ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ।'
                      : 'सतगुरु कबीर साहेब नित्य पाठ, अस्तुति, आरती, चालीसा एवं समग्र पावन ग्रन्थ संग्रह।'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAdvancedSuiteModal(false);
                      if (onSelectView) {
                        onSelectView('nitnem-gutka');
                      } else {
                        setSelectedGranthSlug('nitnem-gutka');
                      }
                    }}
                    className="px-4 py-2 bg-white text-amber-900 rounded-xl font-bold text-xs hover:bg-amber-50 transition shadow cursor-pointer active:scale-95"
                  >
                    {language === 'pb' ? 'ਗੁਟਕਾ ਸਾਹੇਬ ਖੋਲ੍ਹੋ →' : 'नितनेम गुटका साहेब खोलें →'}
                  </button>
                </div>

                {/* Font Size Slider (Font Akaar Slider) */}
                <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders size={15} />
                      <span>{language === 'pb' ? 'ਅੱਖਰ ਆਕਾਰ ਸਲਾਈਡਰ (Font Size):' : 'फ़ॉन्ट आकार स्लाइडर (Font Size Slider):'}</span>
                    </label>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-600 text-white">
                      {fontSize === 'small' && (language === 'pb' ? 'A- (ਛੋਟਾ 14px)' : 'A- (छोटा 14px)')}
                      {fontSize === 'normal' && (language === 'pb' ? 'A (ਮੱਧਮ 16px)' : 'A (मध्यम 16px)')}
                      {fontSize === 'large' && (language === 'pb' ? 'A+ (ਵੱਡਾ 18px)' : 'A+ (बड़ा 18px)')}
                      {fontSize === 'xlarge' && (language === 'pb' ? 'A++ (ਵਿਸ਼ਾਲ 22px)' : 'A++ (विशाल 22px)')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-300">A-</span>
                    <input
                      type="range"
                      min={0}
                      max={3}
                      step={1}
                      value={getFontSizeIndex(fontSize)}
                      onChange={(e) => {
                        sacredHaptics.lightTap();
                        const newFs = getFontSizeFromIndex(Number(e.target.value));
                        handleSetLocalFontSize(newFs);
                      }}
                      className="w-full h-2 bg-amber-200 dark:bg-amber-900 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                    <span className="text-base font-bold text-amber-800 dark:text-amber-300">A++</span>
                  </div>

                  {/* Live Sample Text Preview */}
                  <div className="p-2.5 rounded-xl border text-center font-serif transition-all" style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}>
                    <p className={`font-bold text-amber-900 dark:text-amber-100 ${
                      fontSize === 'small' ? 'text-xs sm:text-sm' :
                      fontSize === 'normal' ? 'text-sm sm:text-base' :
                      fontSize === 'large' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                    }`}>
                      {language === 'pb' ? '॥ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਪਾਵਨ ਅਮਰ ਬਾਣੀ ॥' : '॥ सतगुरु कबीर साहेब पावन अमर वाणी ॥'}
                    </p>
                  </div>
                </div>

                {/* Reading Modes Summary */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
                    {language === 'pb' ? 'ਪਠਨ ਵਿਧਾ:' : 'पठन विधा (Reading Mode):'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'scroll', label: language === 'pb' ? '📜 ਨਿਰੰਤਰ' : '📜 निरंतर' },
                      { id: 'parallel', label: language === 'pb' ? '📖 ਸਮਾਨਾਂਤਰ' : '📖 समानांतर' },
                      { id: 'flip', label: language === 'pb' ? '🪞 ੩D ਪੋਥੀ' : '🪞 ३D पोथी' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          if (m.id === 'scroll') {
                            setIsPageFlipMode(false);
                            setIsParallelView(false);
                          } else if (m.id === 'parallel') {
                            setIsPageFlipMode(false);
                            setIsParallelView(true);
                          } else {
                            setIsParallelView(false);
                            setIsPageFlipMode(true);
                          }
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                          (m.id === 'scroll' && !isPageFlipMode && !isParallelView) ||
                          (m.id === 'parallel' && isParallelView) ||
                          (m.id === 'flip' && isPageFlipMode)
                            ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                            : 'bg-black/5 hover:bg-black/10'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme & Canvas Width */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                      {language === 'pb' ? 'ਥੀਮ ਰੰਗ:' : 'थीम रंग (Theme):'}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(['mool', 'comfort', 'pothi', 'black', 'netra'] as ReaderCustomTheme[]).map((thm) => (
                        <button
                          key={thm}
                          onClick={() => changeReaderTheme(thm)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                            readerTheme === thm ? 'bg-amber-600 text-white' : 'bg-black/5 hover:bg-black/10'
                          }`}
                        >
                          {thm}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                      {language === 'pb' ? 'ਕੈਨਵਸ ਵਿਸਤਾਰ:' : 'कैनवास विस्तार (Canvas):'}
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setWidthMode('wide')}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                          widthMode === 'wide' ? 'bg-amber-600 text-white border-amber-600' : 'bg-black/5'
                        }`}
                      >
                        विशाल 7XL
                      </button>
                      <button
                        type="button"
                        onClick={() => setWidthMode('medium')}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                          widthMode === 'medium' ? 'bg-amber-600 text-white border-amber-600' : 'bg-black/5'
                        }`}
                      >
                        मध्यम 5XL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: READING HISTORY (LAST 10 SAKHIS / GRANTHA SEGMENTS) */}
            {suiteActiveTab === 'history' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: themeStyle.border }}>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                      <BookMarked className="w-4 h-4 text-amber-600" />
                      <span>{language === 'pb' ? 'ਹਾਲ ਹੀ ਵਿੱਚ ਪੜ੍ਹੇ ਗਏ ੧੦ ਪਾਵਨ ਅੰਗ' : 'हाल ही में पढ़े गए १० पावन साखी व ग्रन्थ खंड'}</span>
                    </h4>
                    <p className="text-[0.6875rem] opacity-75 font-serif">
                      {language === 'pb' ? 'ਤੁਰੰਤ ਮੁੜ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿਸੇ ਵੀ ਖੰਡ ਤੇ ਕਲਿੱਕ ਕਰੋ' : 'त्वरित पुनरारंभ (Quick Resumption) के लिए किसी भी खंड पर टैप करें'}
                    </p>
                  </div>

                  {readingHistory.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setReadingHistory([]);
                        try {
                          localStorage.removeItem('sahebworld_reading_history');
                        } catch (e) {
                          console.error(e);
                        }
                      }}
                      className="text-[0.6875rem] font-bold text-red-600 hover:text-red-700 underline cursor-pointer"
                    >
                      {language === 'pb' ? 'ਇਤਿਹਾਸ ਮਿਟਾਓ' : 'इतिहास साफ़ करें'}
                    </button>
                  )}
                </div>

                {readingHistory.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl border space-y-3" style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}>
                    <BookOpen className="w-10 h-10 mx-auto opacity-40 text-amber-600" />
                    <p className="text-xs sm:text-sm font-serif font-semibold opacity-75">
                      {language === 'pb'
                        ? 'ਅਜੇ ਤੱਕ ਕੋਈ ਪਠਨ ਇਤਿਹਾਸ ਦਰਜ ਨਹੀਂ ਹੈ। ਗ੍ਰੰਥ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ!'
                        : 'अभी तक कोई पठन इतिहास दर्ज नहीं है। पावन ग्रन्थ स्वाध्याय आरंभ करें!'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                    {readingHistory.map((item, idx) => {
                      const formattedTime = new Date(item.accessedAt).toLocaleString(
                        language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN',
                        { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' }
                      );

                      const isCurrent = item.granthSlug === selectedGranthSlug && item.chapterId === selectedChapterId;

                      return (
                        <div
                          key={`${item.id}-${idx}`}
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setSelectedGranthSlug(item.granthSlug);
                            setSelectedChapterId(item.chapterId);
                            setShowAdvancedSuiteModal(false);
                          }}
                          style={{
                            backgroundColor: isCurrent ? themeStyle.badgeBg : themeStyle.highlight,
                            borderColor: isCurrent ? '#F59E0B' : themeStyle.border,
                          }}
                          className={`p-3.5 rounded-2xl border transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-between gap-3 shadow-xs ${
                            isCurrent ? 'ring-2 ring-amber-500/40' : ''
                          }`}
                        >
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[0.625rem] font-black bg-amber-600 text-white shrink-0">
                                #{idx + 1}
                              </span>
                              <span className="text-xs font-serif font-black text-amber-700 dark:text-amber-300 truncate">
                                {item.granthTitle[language] || item.granthTitle.hi}
                              </span>
                              {isCurrent && (
                                <span className="px-2 py-0.5 rounded-full text-[0.625rem] font-bold bg-green-600 text-white shrink-0">
                                  {language === 'pb' ? 'ਮੌਜੂਦਾ' : 'वर्तमान'}
                                </span>
                              )}
                            </div>

                            <h5 className="font-serif font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-100 truncate">
                              📖 {item.chapterTitle[language] || item.chapterTitle.hi}
                            </h5>

                            <span className="text-[0.625rem] font-mono opacity-60 block">
                              🕒 {formattedTime}
                            </span>
                          </div>

                          <button
                            type="button"
                            className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-serif font-bold shrink-0 transition flex items-center gap-1 shadow-xs"
                          >
                            <span>{language === 'pb' ? 'ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ' : 'पुनः पढ़ें'}</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <div className="pt-2 border-t flex justify-end" style={{ borderColor: themeStyle.border }}>
              <button
                type="button"
                onClick={() => setShowAdvancedSuiteModal(false)}
                className="px-5 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition cursor-pointer shadow flex items-center gap-1.5"
              >
                <ArrowLeft size={16} />
                <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'वापस जाएं'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Divine Tranquility Breathing Circle */}
      {showBreathingGuide && (
        <div
          style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
          className="p-5 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn relative overflow-hidden shadow-md"
        >
          {/* Top light gradient aura strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 opacity-80" />

          <div className="flex-1 space-y-2 text-center md:text-left">
            <span style={{ color: theme.sacredMaroon }} className="text-xs font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{breathingLabels.title}</span>
            </span>
            <p style={{ color: themeStyle.text }} className="text-xs sm:text-sm max-w-xl leading-relaxed opacity-75">
              {breathingLabels.subtitle}
            </p>
            
            {/* Ambient Info indicator */}
            <div className="inline-flex items-center gap-1.5 text-[0.625rem] sm:text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 mt-1" style={{ color: theme.sacredMaroon }}>
              <Timer className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
              <span>{breathingLabels.footer}</span>
            </div>
          </div>

          {/* Breathing Circle Column */}
          <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-auto relative min-h-[140px] px-4">
            {/* Glowing background halo */}
            <div 
              className="absolute rounded-full blur-2xl opacity-15 transition-all duration-[4000ms] ease-in-out bg-amber-500"
              style={{
                width: breathPhase === 'inhale' || breathPhase === 'hold' ? '160px' : '80px',
                height: breathPhase === 'inhale' || breathPhase === 'hold' ? '160px' : '80px',
              }}
            />

            {/* Interactive breathing circle */}
            <div
              className="rounded-full flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out shadow-lg relative border border-amber-300/30"
              style={{
                width: breathPhase === 'inhale' || breathPhase === 'hold' ? '130px' : '95px',
                height: breathPhase === 'inhale' || breathPhase === 'hold' ? '130px' : '95px',
                backgroundColor: theme.stepActiveBg,
                boxShadow: breathPhase === 'hold' || breathPhase === 'inhale' 
                  ? '0 0 25px rgba(245, 158, 11, 0.25)' 
                  : '0 0 8px rgba(245, 158, 11, 0.05)',
              }}
            >
              {/* Breath phase labels */}
              <span 
                style={{ color: theme.sacredMaroon }} 
                className="text-xs sm:text-sm font-bold tracking-wider font-serif transition-opacity duration-500 text-center px-1"
              >
                {breathPhase === 'inhale' && breathingLabels.inhale}
                {breathPhase === 'hold' && breathingLabels.hold}
                {breathPhase === 'exhale' && breathingLabels.exhale}
                {breathPhase === 'hold-out' && breathingLabels.holdOut}
              </span>
              
              <span 
                className="text-[0.5625rem] font-black tracking-widest mt-1 block uppercase text-amber-600"
              >
                {language === 'pb' ? 'ਸਤਯਨਾਮ' : language === 'hi' ? 'सत्यनाम' : 'Satyanaam'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Active Chapter Details & Search */}
      {currentChapter && (
        <div
          style={{
            backgroundColor: themeStyle.card,
            borderColor: themeStyle.border,
          }}
          className="p-4 sm:p-5 rounded-2xl border shadow-md space-y-3"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-amber-600 break-words leading-tight">
                {currentChapter.title[language]}
              </h4>
              <p className="text-xs opacity-75 font-serif break-words">
                {currentChapter.subtitle[language]}
              </p>
            </div>

            {/* Quick In-Chapter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-50" />
              <input
                id="granth-verse-search"
                type="text"
                placeholder={t.searchVersePlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  backgroundColor: themeStyle.highlight,
                  borderColor: themeStyle.border,
                  color: themeStyle.text,
                }}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Verses Reading View: 3D Page Flip vs Parallel View vs Continuous Scroll */}
      {isPageFlipMode ? (
        /* SKEUOMORPHIC 3D PAGE FLIP STYLE MODE */
        <div className={`mx-auto w-full transition-all duration-300 ${getWidthClass(widthMode)} space-y-6 sm:space-y-8`}>
          {/* Top Page Flip Controls Bar */}
          <div
            style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
            className="p-3 sm:p-4 rounded-2xl border shadow-sm flex items-center justify-between gap-3"
          >
            <button
              type="button"
              onClick={() => {
                sacredHaptics.mysticFlip();
                setPageFlipIndex((prev) => Math.max(0, prev - 1));
              }}
              disabled={pageFlipIndex === 0}
              className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer ${
                pageFlipIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-amber-600 text-white border-amber-500 hover:scale-105 active:scale-95 shadow-sm'
              }`}
            >
              <ChevronLeft size={16} />
              <span>{language === 'pb' ? 'ਪਿਛਲਾ ਪੰਨਾ' : language === 'en' ? 'Prev Page' : 'पिछला पन्ना'}</span>
            </button>

            <div className="text-center font-serif">
              <span className="text-xs sm:text-base font-black text-amber-600 tracking-wide block">
                📖 {language === 'pb' ? 'ਪਾਵਨ ਪੋਥੀ ਪੰਨਾ' : language === 'en' ? 'Sacred Pothi Page' : 'पावन पोथी पन्ना'} {pageFlipIndex + 1} / {filteredVerses.length}
              </span>
              <span className="text-[0.625rem] sm:text-xs opacity-75 font-serif">
                {currentChapter?.title[language]}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.mysticFlip();
                setPageFlipIndex((prev) => Math.min(filteredVerses.length - 1, prev + 1));
              }}
              disabled={pageFlipIndex >= filteredVerses.length - 1}
              className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer ${
                pageFlipIndex >= filteredVerses.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-amber-600 text-white border-amber-500 hover:scale-105 active:scale-95 shadow-sm'
              }`}
            >
              <span>{language === 'pb' ? 'ਅਗਲਾ ਪੰਨਾ' : language === 'en' ? 'Next Page' : 'अगला पन्ना'}</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Skeuomorphic 3D Pothi Open Book Layout */}
          {(() => {
            const verse = filteredVerses[pageFlipIndex] || filteredVerses[0];
            if (!verse) return null;
            const isThisSpeaking = speakingVerseId === verse.id;
            const highlight = userHighlights[`${selectedGranthSlug}:${verse.id}`]?.color;

            const highlightBg = highlight === 'saffron'
              ? 'rgba(245, 158, 11, 0.18)'
              : highlight === 'green'
              ? 'rgba(16, 185, 129, 0.18)'
              : highlight === 'yellow'
              ? 'rgba(253, 224, 71, 0.28)'
              : undefined;

            return (
              <div 
                style={{ perspective: '1600px' }}
                className="w-full py-2"
              >
                <motion.div
                  key={`pothi-3d-${verse.id}-${pageFlipIndex}`}
                  initial={{ rotateY: 15, opacity: 0.88, scale: 0.98 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: -15, opacity: 0.88, scale: 0.98 }}
                  transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                  style={{
                    backgroundColor: themeStyle.card,
                    borderColor: themeStyle.border,
                    transformStyle: 'preserve-3d',
                  }}
                  className="rounded-3xl border-2 shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[460px]"
                >
                  {/* Skeuomorphic Book Spine Gutter & Sacred Red Binding Thread */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-6 z-20 pointer-events-none">
                    {/* Spine Shadow Gradient */}
                    <div className="w-full h-full bg-gradient-to-r from-black/15 via-black/30 to-black/15 dark:from-white/5 dark:via-white/10 dark:to-white/5" />
                    {/* Red Sacred Thread */}
                    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-red-600/60 shadow-sm" />
                    {/* Golden Stitches */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 border border-amber-600 shadow-xs" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 border border-amber-600 shadow-xs" />
                  </div>

                  {/* Curled Paper Corner Accent (Top Right) */}
                  <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none z-10 overflow-hidden">
                    <div className="w-16 h-16 bg-gradient-to-bl from-amber-400/40 via-amber-200/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8 border-b border-l border-amber-500/40 shadow-sm" />
                  </div>

                  {/* LEFT PAGE: Invocation, Chapter Title & Sacred Wisdom */}
                  <div
                    style={{ backgroundColor: themeStyle.highlight }}
                    className="md:col-span-5 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-amber-900/10 dark:border-amber-100/10 flex flex-col justify-between relative"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: themeStyle.border }}>
                        <span className="text-xs font-black font-serif text-amber-700 uppercase tracking-widest">
                          {currentGranth.shortTitle[language]}
                        </span>
                        <span className="text-[0.6875rem] font-mono opacity-70">
                          {language === 'pb' ? 'ਪੰਨਾ' : language === 'en' ? 'Page' : 'पन्ना'} {pageFlipIndex + 1}
                        </span>
                      </div>

                      <div className="pt-2 text-center space-y-2">
                        <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/15 border-2 border-amber-500/40 flex items-center justify-center shadow-inner">
                          <Crown className="w-7 h-7 text-amber-600" />
                        </div>
                        <h4 className="font-serif font-black text-lg text-amber-800 dark:text-amber-300">
                          {currentChapter?.title[language]}
                        </h4>
                        <p className="text-xs font-serif opacity-80 italic">
                          {currentChapter?.subtitle[language]}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-serif text-center space-y-1">
                        <span className="font-bold text-amber-700 block">
                          {language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।।साहेब बंदगी साहेब।।'}
                        </span>
                        <p className="opacity-85 text-[0.6875rem]">
                          {language === 'pb' 
                            ? 'ਸੁਰਤਿ ਨੂੰ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਕਰੋ। ਪਦ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਅਧਿਆਤਮਕ ਰਹੱਸ ਜਾਣੋ।' 
                            : language === 'en' 
                            ? 'Merge attention in the Word. Click on words to reveal deeper spiritual essence.' 
                            : 'सुरति को शब्द में लीन करें। पद्य के गूढ़ शब्दों पर क्लिक कर उनका आध्यात्मिक रहस्य जानें।'}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-serif">
                      <span className="text-amber-700 font-bold">
                        {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਾਣੀ' : language === 'en' ? 'Satguru Kabir Bani' : 'सतगुरु कबीर वाणी'}
                      </span>
                      <span className="opacity-70">
                        {language === 'pb' ? 'ਸਤਿਲੋਕ ਪ੍ਰਕਾਸ਼ਨ' : language === 'en' ? 'Satlok Publication' : 'सत्यलोक प्रकाशन'}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT PAGE: The Sacred Verse, Calligraphy & Tika */}
                  <div
                    style={{ backgroundColor: highlightBg || themeStyle.card }}
                    className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative"
                  >
                    <div className="space-y-4">
                      {/* Verse Header Actions */}
                      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: themeStyle.border }}>
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: themeStyle.badgeBg }}
                            className="px-3 py-1 rounded-lg text-xs font-black font-serif text-amber-800 dark:text-amber-200 border border-amber-500/30"
                          >
                            {getVerseTypeLabel(verse.type, verse.id, language)} #{pageFlipIndex + 1}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* Audio Recite */}
                          <button
                            type="button"
                            onClick={() => handleSpeakVerse(verse)}
                            className={`p-2 rounded-xl transition cursor-pointer ${
                              isThisSpeaking ? 'bg-amber-600 text-white animate-pulse' : 'hover:bg-black/5 text-gray-700 dark:text-gray-200'
                            }`}
                            title="वाणी पाठ ऑडियो (Audio Recite)"
                          >
                            <Volume2 size={16} />
                          </button>
                          {/* Copy */}
                          <button
                            type="button"
                            onClick={() => handleCopyVerse(verse)}
                            className="p-2 rounded-xl hover:bg-black/5 text-gray-700 dark:text-gray-200 transition cursor-pointer"
                            title="प्रतिलिपि बनाएं (Copy)"
                          >
                            {copiedId === verse.id ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                          </button>
                          {/* Save to Diary */}
                          <button
                            type="button"
                            onClick={() => handleSaveVerseToDiary(verse)}
                            className="p-2 rounded-xl hover:bg-black/5 text-gray-700 dark:text-gray-200 transition cursor-pointer"
                            title="डायरी में सहेजें"
                          >
                            {diarySavedId === verse.id ? <CheckCircle2 size={16} className="text-amber-600" /> : <Bookmark size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Main Sacred Verse Lines (Interactive Sandhukkari Words) */}
                      <div className={`space-y-3 py-2 text-center md:text-left font-serif font-black ${fontStyle.verse}`} style={{ color: themeStyle.text }}>
                        {verse.lines[language]?.map((line, lIdx) => (
                          <p key={lIdx} className="leading-relaxed drop-shadow-2xs">
                            {renderInteractiveLine(line)}
                          </p>
                        ))}
                      </div>

                      {/* Word-by-Word Shabdarth Pills */}
                      {(() => {
                        const shabdarthList = verse.shabdarth?.[language] || verse.shabdarth?.hi || [];
                        if (!shabdarthList || shabdarthList.length === 0) return null;
                        return (
                          <div
                            style={{ backgroundColor: themeStyle.badgeBg, borderColor: themeStyle.border }}
                            className="p-3.5 rounded-2xl border text-xs space-y-1.5 font-serif"
                          >
                            <span className="font-bold text-amber-700 block text-[0.6875rem] uppercase tracking-wider">
                              {language === 'pb' ? 'ਅੱਖਰੀ ਅਰਥ (ਸ਼ਬਦਾਰਥ):' : language === 'en' ? 'Glossary (Word Meanings):' : t.shabdarthLabel}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {shabdarthList.map((sh, sIdx) => {
                                const displayWord = language === 'pb' ? hindiToPunjabiWordConverter(sh.word) : sh.word;
                                const displayMeaning = language === 'pb' ? hindiToPunjabiWordConverter(sh.meaning) : sh.meaning;
                                return (
                                  <span key={sIdx} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-[0.6875rem]">
                                    <strong className="text-amber-800 dark:text-amber-200">{displayWord}:</strong> {displayMeaning}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}

                      {/* Detailed Bhavarth Box */}
                      {verse.bhavarth && (verse.bhavarth[language] || verse.bhavarth.hi) && (
                        <div
                          style={{ backgroundColor: themeStyle.highlight, borderColor: themeStyle.border }}
                          className="p-4 rounded-2xl border text-xs sm:text-sm font-serif leading-relaxed"
                        >
                          <div className="font-bold text-amber-600 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{language === 'pb' ? 'ਪਾਵਨ ਭਾਵਾਰਥ:' : language === 'en' ? 'Divine Exegesis:' : 'पावन भावार्थ:'}</span>
                          </div>
                          <p style={{ color: themeStyle.text }} className="opacity-95">
                            {language === 'pb' 
                              ? hindiToPunjabiWordConverter(verse.bhavarth.pb || verse.bhavarth.hi) 
                              : (verse.bhavarth[language] || verse.bhavarth.hi)}
                          </p>
                        </div>
                      )}

                      {/* Dynamic Ulatvasi Esoteric Essence Analysis */}
                      {selectedGranthSlug === 'ulatbaasi' && (() => {
                        const analysis = generateUniqueUlatvasiAnalysis({
                          id: verse.id,
                          title: currentChapter?.title[language] || '',
                          verse: verse.lines[language]?.[0] || '',
                          literalParadox: verse.bhavarth?.[language] || verse.bhavarth?.hi || '',
                          language
                        });

                        return (
                          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3 text-xs sm:text-sm font-serif">
                            <div className="flex items-center gap-2 border-b pb-2 border-amber-500/20">
                              <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
                              <span className="font-bold text-amber-800 dark:text-amber-200 uppercase tracking-wider text-xs">
                                {language === 'hi' ? '🔮 उलटबांसी रहस्य: आध्यात्मिक सार विश्लेषण' : language === 'pb' ? '🔮 ਉਲਟਬਾਂਸੀ ਰਹੱਸ: ਅਧਿਆਤਮਕ ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ' : '🔮 Mystical Reversal: Esoteric Essence Analysis'}
                              </span>
                            </div>

                            {/* Formula Bar */}
                            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-center">
                              <span className="text-[0.625rem] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-1">
                                ⚡ {language === 'hi' ? 'मुख्य आध्यात्मिक सूत्र' : language === 'pb' ? 'ਮੁੱਖ ਅਧਿਆਤਮਕ ਸੂਤਰ' : 'Core Reversal Formula'}
                              </span>
                              <strong className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-100">
                                {analysis.mysticalReversalFormula}
                              </strong>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                                <span className="font-bold text-rose-700 dark:text-rose-300 text-[0.6875rem] block">
                                  {language === 'hi' ? '1. बाह्य उल्टा दृश्य (इंद्रिय भ्रम)' : language === 'pb' ? '1. ਬਾਹਰੀ ਉਲਟਾ ਦ੍ਰਿਸ਼' : '1. Outer Paradox'}
                                </span>
                                <p className="leading-relaxed opacity-90 text-xs">
                                  {analysis.outerParadoxDeconstruction}
                                </p>
                              </div>

                              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                                <span className="font-bold text-emerald-700 dark:text-emerald-300 text-[0.6875rem] block">
                                  {language === 'hi' ? '2. अंतर्मुखी उलटबांसी रहस्य (आत्मज्ञान)' : language === 'pb' ? '2. ਅੰਤਰਮੁਖੀ ਰਹੱਸ' : '2. Esoteric Reversal'}
                                </span>
                                <p className="leading-relaxed opacity-90 text-xs">
                                  {analysis.esotericReversalAnalysis}
                                </p>
                              </div>
                            </div>

                            {/* Deep Esoteric & Yogic Meaning Box */}
                            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-1">
                              <div className="flex items-center gap-1.5 text-purple-800 dark:text-purple-300 font-bold text-xs">
                                <Crown className="w-3.5 h-3.5" />
                                <span>{language === 'hi' ? '🔮 गहन दार्शनिक एवं आंतरिक योगार्थ (Deep Meaning):' : language === 'pb' ? '🔮 ਗੂੜ੍ਹ ਦਾਰਸ਼ਨਿਕ ਅਤੇ ਯੋਗ ਅਰਥ (Deep Meaning):' : '🔮 Deep Esoteric & Yogic Meaning:'}</span>
                              </div>
                              <p className="leading-relaxed opacity-95 text-xs sm:text-sm font-serif" style={{ color: themeStyle.text }}>
                                {language === 'hi'
                                  ? `सद्गुरु कबीर साहेब इस उलटबांसी पद के माध्यम से समझाते हैं कि जब तक साधक की सुरति बाह्य प्रपंच और माया के जाल में उलझी रहती है, तब तक वह सतनाम और आत्म-स्वरूप से अनजान रहता है। इस पद का आंतरिक योगार्थ यह है कि प्राण और अपान की गति को उलटकर सुषुम्ना मार्ग से ब्रह्मरंध्र (दसम द्वार) की ओर यात्रा करनी होती है। यही उलटबांसी का सच्चा आंतरिक रहस्य है।`
                                  : analysis.esotericReversalAnalysis}
                              </p>
                            </div>

                            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                              <span className="font-bold text-blue-700 dark:text-blue-300 text-[0.6875rem] block">
                                🧭 {language === 'hi' ? 'साधक हेतु व्यावहारिक साधना मार्गदर्शन' : language === 'pb' ? 'ਸਾਧਕ ਲਈ ਮਾਰਗਦਰਸ਼ਨ' : 'Practical Sadhana Guidance'}
                              </span>
                              <p className="leading-relaxed opacity-90 text-xs">
                                {analysis.practicalSadhanaGuidance}
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Verse Bottom Highlights & Quick Controls */}
                    <div className="pt-3 border-t flex flex-wrap items-center justify-between gap-3 text-xs" style={{ borderColor: themeStyle.border }}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[0.6875rem] font-bold opacity-75">
                          {language === 'pb' ? 'ਹਾਈਲਾਈਟ:' : language === 'en' ? 'Highlight:' : 'हाइलाइट:'}
                        </span>
                        {(['saffron', 'green', 'yellow'] as HighlightColor[]).map((clr) => (
                          <button
                            key={clr}
                            type="button"
                            onClick={() => handleToggleHighlight(verse.id, clr)}
                            style={{
                              backgroundColor: clr === 'saffron' ? '#F59E0B' : clr === 'green' ? '#10B981' : '#FDE047',
                            }}
                            className={`w-4 h-4 rounded-full border transition-transform cursor-pointer ${
                              highlight === clr ? 'scale-125 ring-2 ring-amber-600' : 'opacity-70 hover:opacity-100'
                            }`}
                            title={`रंग: ${clr}`}
                          />
                        ))}
                      </div>

                      <div className="text-[0.6875rem] opacity-75 font-serif">
                        {language === 'pb' 
                          ? 'ਕੀਬੋਰਡ ਕੁੰਜੀ (⬅️ / ➡️) ਨਾਲ ਪੰਨਾ ਪਲਟੋ' 
                          : language === 'en' 
                          ? 'Turn pages using arrow keys (⬅️ / ➡️)' 
                          : 'कीबोर्ड कुंजी (⬅️ / ➡️) से पन्ना पलटें'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}

          {/* Bottom Flip Controls */}
          <div
            style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
            className="p-3 rounded-2xl border shadow-sm flex items-center justify-between gap-3"
          >
            <button
              type="button"
              onClick={() => {
                sacredHaptics.mysticFlip();
                setPageFlipIndex((prev) => Math.max(0, prev - 1));
              }}
              disabled={pageFlipIndex === 0}
              className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                pageFlipIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-amber-600 text-white border-amber-500 hover:scale-105 active:scale-95 shadow-xs'
              }`}
            >
              <ChevronLeft size={16} />
              <span>{language === 'pb' ? 'ਪਿਛਲਾ ਪੰਨਾ' : language === 'en' ? 'Previous' : 'पिछला पन्ना'}</span>
            </button>

            <div className="text-center font-serif text-xs font-bold opacity-80">
              <span>{language === 'pb' ? '੩D ਪੋਥੀ ਪੰਨਾ ਬਦਲੋ' : language === 'en' ? '3D Flip Navigation' : '३D पोथी पन्ना बदलें'}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.mysticFlip();
                setPageFlipIndex((prev) => Math.min(filteredVerses.length - 1, prev + 1));
              }}
              disabled={pageFlipIndex >= filteredVerses.length - 1}
              className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                pageFlipIndex >= filteredVerses.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-amber-600 text-white border-amber-500 hover:scale-105 active:scale-95 shadow-xs'
              }`}
            >
              <span>{language === 'pb' ? 'ਅਗਲਾ ਪੰਨਾ' : language === 'en' ? 'Next' : 'अगला पन्ना'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ) : isParallelView ? (
        /* PARALLEL VIEW: DUAL-COLUMN SPLIT FOR ORIGINAL VERSES & TIKA TRANSLATIONS */
        <div className={`mx-auto w-full transition-all duration-300 ${getWidthClass(widthMode)} space-y-6 sm:space-y-8`}>
          <div
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="p-3 rounded-2xl border flex items-center justify-between gap-3 text-xs font-serif font-bold text-amber-800 dark:text-amber-300"
          >
            <div className="flex items-center gap-2">
              <Columns size={16} className="text-amber-600" />
              <span>
                {language === 'pb'
                  ? 'ਸਮਾਨਾਂਤਰ ਟੀਕਾ ਦਰਸ਼ਨ: ਖੱਬੇ ਮੂਲ ਪਾਵਨ ਪਦ | ਸੱਜੇ ਵਿਸਤ੍ਰਿਤ ਟੀਕਾ, ਸ਼ਬਦਾਰਥ ਤੇ ਅਧਿਆਤਮਕ ਮਰਮ'
                  : language === 'en'
                  ? 'Parallel Commentary View: Left Sacred Original | Right Exegesis, Glossary & Esoteric Wisdom'
                  : 'समानांतर टीका दर्शन: बाएँ मूल पावन पद्य | दाएँ विस्तृत टीका, शब्दार्थ व आध्यात्मिक मर्म'}
              </span>
            </div>
            <span className="text-[0.6875rem] font-mono opacity-80 hidden sm:inline">
              {filteredVerses.length} {language === 'pb' ? 'ਪਦ ਸਮਾਨਾਂਤਰ ਸੰਰੇਖਿਤ' : language === 'en' ? 'Verses Parallel' : 'पद्य समानांतर संरेखित'}
            </span>
          </div>

          {(isGranthLoading || isChapterLoading) && filteredVerses.length === 0 ? (
            <SacredLoader language={language} compact />
          ) : filteredVerses.length === 0 ? (
            <div
              style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
              className="p-8 text-center rounded-2xl border space-y-2"
            >
              <BookOpen className="w-8 h-8 mx-auto text-amber-600 opacity-60" />
              <p className="text-sm font-serif font-medium">
                {language === 'pb' ? 'ਕੋਈ ਪਦ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।' : language === 'en' ? 'No verses available.' : 'कोई पद्य उपलब्ध नहीं है।'}
              </p>
            </div>
          ) : (
            <>
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredVerses.length}
                pageSize={VERSES_PER_PAGE}
                onPageChange={handleGranthPageChange}
                language={language}
              />
              {paginatedVerses.map((verse, idx) => {
                const globalIdx = (currentPage - 1) * VERSES_PER_PAGE + idx;
                const isGuideActive = showLineGuide && activeVerseIndex === globalIdx;
                const isThisSpeaking = speakingVerseId === verse.id;
                const highlight = userHighlights[`${selectedGranthSlug}:${verse.id}`]?.color;

                const highlightStyle = highlight === 'saffron'
                  ? { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: '#F59E0B' }
                  : highlight === 'green'
                  ? { backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: '#10B981' }
                  : highlight === 'yellow'
                  ? { backgroundColor: 'rgba(253, 224, 71, 0.22)', borderColor: '#FACC15' }
                  : undefined;

                return (
                  <div
                    key={`parallel-${verse.id}`}
                    id={`verse-card-${verse.id}`}
                    onClick={() => {
                      setActiveVerseIndex(globalIdx);
                      if (activeHighlightColor) {
                        handleToggleHighlight(verse.id, activeHighlightColor);
                      }
                    }}
                    style={{
                      backgroundColor: highlightStyle?.backgroundColor || (isGuideActive ? themeStyle.highlight : themeStyle.card),
                      borderColor: highlightStyle?.borderColor || (isGuideActive ? themeStyle.accent : themeStyle.border),
                    }}
                    className={`rounded-3xl border-2 shadow-sm transition-all duration-200 cursor-pointer overflow-hidden ${
                      isGuideActive ? 'ring-2 ring-amber-500/50 shadow-md' : 'hover:border-amber-500/40'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-amber-500/20 items-stretch">
                      {/* LEFT COLUMN: Sacred Original Verses */}
                      <div className="p-5 sm:p-7 flex flex-col justify-between space-y-4 relative">
                        {/* Active Beam Indicator */}
                        {isGuideActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-orange-600" />
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: themeStyle.border }}>
                            <span
                              style={{ backgroundColor: themeStyle.badgeBg }}
                              className="px-2.5 py-0.5 rounded-md text-xs font-black font-serif text-amber-800 dark:text-amber-200"
                            >
                              {getVerseTypeLabel(verse.type, verse.id, language)} #{globalIdx + 1}
                            </span>

                          <div className="flex items-center gap-1">
                            {/* Speech Recitation */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSpeakVerse(verse);
                              }}
                              className={`p-1.5 rounded-lg border transition-all ${
                                isThisSpeaking ? 'bg-amber-600 text-white' : 'hover:bg-black/5'
                              }`}
                              style={{ borderColor: themeStyle.border }}
                              title="वाणी श्रवण करें"
                            >
                              {isThisSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                            </button>
                            {/* Copy */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyVerse(verse);
                              }}
                              className="p-1.5 rounded-lg border hover:bg-black/5 transition-all"
                              style={{ borderColor: themeStyle.border }}
                              title="पद्य कॉपी करें"
                            >
                              {copiedId === verse.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 opacity-70" />}
                            </button>
                            {/* Save to Diary */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSaveVerseToDiary(verse);
                              }}
                              className="p-1.5 rounded-lg border hover:bg-black/5 transition-all"
                              style={{ borderColor: themeStyle.border }}
                              title="डायरी में सहेजें"
                            >
                              {diarySavedId === verse.id ? <CheckCircle2 className="w-4 h-4 text-amber-600" /> : <Bookmark className="w-4 h-4 opacity-70" />}
                            </button>
                          </div>
                        </div>

                        {/* Sacred Verse Lines with Interactive Words */}
                        <div className="space-y-2 py-1">
                          {verse.lines[language]?.map((line, lIdx) => (
                            <p
                              key={lIdx}
                              style={{ color: themeStyle.text }}
                              className={`${fontFamily === 'sans' ? 'font-sans' : 'font-serif'} font-bold sm:font-black ${fontStyle.verse}`}
                            >
                              {renderInteractiveLine(line)}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Left Column Bottom: Text Highlighter Buttons */}
                      <div className="pt-2 border-t flex items-center justify-between text-xs" style={{ borderColor: themeStyle.border }}>
                        <div className="flex items-center gap-1.5">
                          <Highlighter size={12} className="text-amber-600" />
                          <span className="text-[0.625rem] font-bold opacity-75">हाइलाइट:</span>
                          {(['saffron', 'green', 'yellow'] as HighlightColor[]).map((clr) => (
                            <button
                              key={clr}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleHighlight(verse.id, clr);
                              }}
                              style={{
                                backgroundColor: clr === 'saffron' ? '#F59E0B' : clr === 'green' ? '#10B981' : '#FDE047',
                              }}
                              className={`w-3.5 h-3.5 rounded-full border transition-transform cursor-pointer ${
                                highlight === clr ? 'scale-125 ring-2 ring-amber-600' : 'opacity-70 hover:opacity-100'
                              }`}
                              title={`रंग: ${clr}`}
                            />
                          ))}
                          {highlight && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleHighlight(verse.id, highlight);
                              }}
                              className="text-[0.5625rem] font-bold text-red-600 ml-1 underline cursor-pointer"
                            >
                              हटाएं
                            </button>
                          )}
                        </div>

                        <span className="text-[0.625rem] font-mono opacity-60">
                          {selectedGranthSlug}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Tika, Detailed Bhavarth & Shabdarth */}
                    <div
                      style={{ backgroundColor: themeStyle.highlight }}
                      className="p-5 sm:p-7 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: themeStyle.border }}>
                          <span className="text-xs font-black font-serif text-amber-700 flex items-center gap-1.5">
                            <Sparkles size={14} />
                            <span>{language === 'pb' ? 'ਸਮਾਨਾਂਤਰ ਟੀਕਾ ਤੇ ਅਧਿਆਤਮਿਕ ਰਹੱਸ' : language === 'en' ? 'Parallel Exegesis & Esoteric Wisdom' : 'समानांतर टीका एवं आध्यात्मिक मर्म'}</span>
                          </span>
                        </div>

                        {/* Word Meanings (शब्दारथ) */}
                        {(() => {
                          const shabdarthList = verse.shabdarth?.[language] || verse.shabdarth?.hi || [];
                          if (!shabdarthList || shabdarthList.length === 0) return null;
                          return (
                            <div
                              style={{ backgroundColor: themeStyle.badgeBg, borderColor: themeStyle.border }}
                              className="p-3 rounded-xl border text-xs space-y-1 font-serif"
                            >
                              <span className="font-bold text-amber-700 block text-[0.6875rem] uppercase tracking-wider">
                                {language === 'pb' ? 'ਅੱਖਰੀ ਅਰਥ (ਸ਼ਬਦਾਰਥ):' : language === 'en' ? 'Word Meanings:' : t.shabdarthLabel}
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {shabdarthList.map((sh, sIdx) => {
                                  const displayWord = language === 'pb' ? hindiToPunjabiWordConverter(sh.word) : sh.word;
                                  const displayMeaning = language === 'pb' ? hindiToPunjabiWordConverter(sh.meaning) : sh.meaning;
                                  return (
                                    <span key={sIdx} className="text-[0.6875rem] opacity-90">
                                      <strong className="text-amber-800 dark:text-amber-200">{displayWord}:</strong> {displayMeaning}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}

                        {/* Step 2: Bhavarth Box */}
                        {verse.bhavarth && (verse.bhavarth[language] || verse.bhavarth.hi) && (
                          <div className="space-y-1.5 font-serif p-3 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/15">
                            <span className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                              <span>📖</span>
                              <span>{language === 'pb' ? 'ਪੜਾਅ ੨: ਭਾਵਾਰਥ' : language === 'en' ? 'Step 2: Core Meaning' : 'चरण २: शब्दार्थ एवं भावार्थ'}</span>
                            </span>
                            <p className={`leading-relaxed opacity-95 ${fontStyle.text}`} style={{ color: themeStyle.text }}>
                              {language === 'pb'
                                ? hindiToPunjabiWordConverter(verse.bhavarth.pb || verse.bhavarth.hi)
                                : (verse.bhavarth[language] || verse.bhavarth.hi)}
                            </p>
                          </div>
                        )}

                        {/* Step 3: Contemplation */}
                        {verse.contemplation && (verse.contemplation[language] || verse.contemplation.hi) && (
                          <div className="space-y-1.5 font-serif p-3 rounded-xl bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/15">
                            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                              <span>💭</span>
                              <span>{language === 'pb' ? 'ਪੜਾਅ ੩: ਦੈਨਿਕ ਚਿੰਤਨ' : language === 'en' ? 'Step 3: Contemplation' : 'चरण ३: दैनिक चिंतन एवं आत्म-मनन'}</span>
                            </span>
                            <p className="text-xs italic leading-relaxed opacity-95">
                              {language === 'pb'
                                ? hindiToPunjabiWordConverter(verse.contemplation.pb || verse.contemplation.hi)
                                : (verse.contemplation[language] || verse.contemplation.hi)}
                            </p>
                          </div>
                        )}

                        {/* Step 4: Practical Application */}
                        {verse.practicalApplication && (verse.practicalApplication[language] || verse.practicalApplication.hi) && (
                          <div className="space-y-1.5 font-serif p-3 rounded-xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15">
                            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                              <span>🌿</span>
                              <span>{language === 'pb' ? 'ਪੜਾਅ ੪: ਜੀਵਨ ਆਚਰਨ' : language === 'en' ? 'Step 4: Living Practice' : 'चरण ४: व्यावहारिक आचरण एवं जीवन उपयोग'}</span>
                            </span>
                            <p className="text-xs leading-relaxed opacity-95">
                              {language === 'pb'
                                ? hindiToPunjabiWordConverter(verse.practicalApplication.pb || verse.practicalApplication.hi)
                                : (verse.practicalApplication[language] || verse.practicalApplication.hi)}
                            </p>
                          </div>
                        )}

                        {/* Step 5: Devotional Prayer */}
                        {verse.samarpanPrayer && (verse.samarpanPrayer[language] || verse.samarpanPrayer.hi) && (
                          <div className="space-y-1.5 font-serif p-3 rounded-xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/15">
                            <span className="text-xs font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                              <span>🙏</span>
                              <span>{language === 'pb' ? 'ਪੜਾਅ ੫: ਸਮਰਪਣ ਤੇ ਅਰਦਾਸ' : language === 'en' ? 'Step 5: Prayer & Surrender' : 'चरण ५: समर्पण एवं पावन प्रार्थना'}</span>
                            </span>
                            <p className="text-xs italic leading-relaxed opacity-95">
                              {language === 'pb'
                                ? hindiToPunjabiWordConverter(verse.samarpanPrayer.pb || verse.samarpanPrayer.hi)
                                : (verse.samarpanPrayer[language] || verse.samarpanPrayer.hi)}
                            </p>
                          </div>
                        )}

                        {/* Spiritual Essence / Marm Note */}
                        {verse.spiritualEssence && !verse.contemplation && (verse.spiritualEssence[language] || verse.spiritualEssence.hi) && (
                          <div
                            style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
                            className="p-3 rounded-xl border flex items-start gap-2 text-xs font-serif"
                          >
                            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-700 block text-[0.6875rem]">
                                {t.spiritualEssenceLabel}
                              </span>
                              <p className="italic opacity-90 leading-relaxed">
                                {deriveDistinctSpiritualEssence(
                                  verse.lines?.hi?.join(' ') || '',
                                  verse.bhavarth?.hi || '',
                                  verse.spiritualEssence[language] || verse.spiritualEssence.hi,
                                  language
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Swadhyay Action Link */}
                      {onOpenSwadhyay && (
                        <div className="pt-2 border-t flex justify-end" style={{ borderColor: themeStyle.border }}>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const verseText = verse.lines[language]?.join(' ') || verse.lines.hi?.join(' ');
                              onOpenSwadhyay(verseText);
                            }}
                            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 font-serif cursor-pointer hover:underline"
                          >
                            <span>
                              {language === 'pb' 
                                ? 'ਇਸ ਪਦ ਦਾ ੫-ਪੜਾਵੀ ਸਵਾਧਿਆਏ ਖੋਲ੍ਹੋ' 
                                : language === 'en' 
                                ? 'Open 5-Step Swadhyay for this Verse' 
                                : 'इस पद्य का ५-पड़ावी स्वाध्याय खोलें'}
                            </span>
                            <ChevronRight size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredVerses.length}
                pageSize={VERSES_PER_PAGE}
                onPageChange={handleGranthPageChange}
                language={language}
              />
            </>
          )}
        </div>
      ) : (
        /* CONTINUOUS SCROLL VIEW */
        <div className={`mx-auto w-full transition-all duration-300 ${getWidthClass(widthMode)} space-y-6 sm:space-y-8`}>
        {(isGranthLoading || isChapterLoading) && filteredVerses.length === 0 ? (
          <SacredLoader language={language} compact />
        ) : filteredVerses.length === 0 ? (
          <div
            style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
            className="p-8 text-center rounded-2xl border space-y-2"
          >
            <BookOpen className="w-8 h-8 mx-auto text-amber-600 opacity-60" />
            <p className="text-sm font-serif font-medium">
              {searchQuery.trim()
                ? 'खोज के अनुसार कोई पद्य नहीं मिला।'
                : 'कोई पद्य उपलब्ध नहीं है।'}
            </p>
          </div>
        ) : (
          <>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredVerses.length}
            pageSize={VERSES_PER_PAGE}
            onPageChange={handleGranthPageChange}
            language={language}
          />
          {paginatedVerses.map((verse, idx) => {
            const globalIdx = (currentPage - 1) * VERSES_PER_PAGE + idx;
            const isGuideActive = showLineGuide && activeVerseIndex === globalIdx;
            const isThisSpeaking = speakingVerseId === verse.id;
            const highlight = userHighlights[`${selectedGranthSlug}:${verse.id}`]?.color;

            const highlightStyle = highlight === 'saffron'
              ? { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: '#F59E0B' }
              : highlight === 'green'
              ? { backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: '#10B981' }
              : highlight === 'yellow'
              ? { backgroundColor: 'rgba(253, 224, 71, 0.22)', borderColor: '#FACC15' }
              : undefined;

            return (
              <div
                key={verse.id}
                id={`verse-card-${verse.id}`}
                onClick={() => {
                  setActiveVerseIndex(globalIdx);
                  if (activeHighlightColor) {
                    handleToggleHighlight(verse.id, activeHighlightColor);
                  }
                }}
                style={{
                  backgroundColor: highlightStyle?.backgroundColor || (isGuideActive ? themeStyle.highlight : themeStyle.card),
                  borderColor: highlightStyle?.borderColor || (isGuideActive ? themeStyle.accent : themeStyle.border),
                }}
                className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm relative ${
                  isGuideActive ? 'ring-2 ring-amber-500/50 shadow-md' : 'hover:border-amber-500/40'
                }`}
              >
                {/* Active Golden Beam Marker */}
                {isGuideActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-orange-600 rounded-l-2xl" />
                )}

                {/* Verse Header (Badge, Type, Actions) */}
                <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ borderColor: themeStyle.border }}>
                  <div className="flex items-center gap-2">
                    <span
                      style={{ backgroundColor: themeStyle.badgeBg }}
                      className="px-2.5 py-0.5 rounded-md text-xs font-black font-serif"
                    >
                      {getVerseTypeLabel(verse.type, verse.id, language)} #{globalIdx + 1}
                    </span>

                    {/* Quick Highlight Tag */}
                    {highlight && (
                      <span className="text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800">
                        हाइलाइट किया गया
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    {/* Highlighter Picker Button */}
                    <div className="hidden sm:flex items-center gap-1 mr-1">
                      {(['saffron', 'green', 'yellow'] as HighlightColor[]).map((clr) => (
                        <button
                          key={clr}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleHighlight(verse.id, clr);
                          }}
                          style={{
                            backgroundColor: clr === 'saffron' ? '#F59E0B' : clr === 'green' ? '#10B981' : '#FDE047',
                          }}
                          className={`w-3.5 h-3.5 rounded-full border transition-transform cursor-pointer ${
                            highlight === clr ? 'scale-125 ring-2 ring-amber-600' : 'opacity-70 hover:opacity-100'
                          }`}
                          title={`हाइलाइट: ${clr}`}
                        />
                      ))}
                    </div>

                    {/* Speech Recitation */}
                    <button
                      id={`speak-verse-${verse.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeakVerse(verse);
                      }}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isThisSpeaking ? 'bg-amber-600 text-white' : 'hover:bg-black/5'
                      }`}
                      style={{ borderColor: themeStyle.border }}
                      title="वाणी श्रवण करें"
                    >
                      {isThisSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                    </button>

                    {/* Toggle Individual Verse Meaning (देखो / छिपाओ) */}
                    {(verse.shabdarth || verse.bhavarth || verse.spiritualEssence) && (
                      <button
                        id={`toggle-meaning-${verse.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleIndividualMeaning(verse.id);
                        }}
                        className={`p-1.5 rounded-lg border transition-all flex items-center gap-1 text-xs font-serif ${
                          isMeaningVisible(verse.id)
                            ? 'bg-amber-500/15 text-amber-800 border-amber-500/30 font-bold'
                            : 'opacity-70 hover:opacity-100 bg-black/5'
                        }`}
                        title={isMeaningVisible(verse.id) ? "शब्दार्थ-भावार्थ छिपाएं" : "शब्दार्थ-भावार्थ देखें"}
                      >
                        {isMeaningVisible(verse.id) ? <Eye className="w-4 h-4 text-amber-600" /> : <EyeOff className="w-4 h-4 opacity-70" />}
                        <span className="text-[0.6875rem] hidden sm:inline">
                          {isMeaningVisible(verse.id) ? 'छिपाएं' : 'देखें'}
                        </span>
                      </button>
                    )}

                    {/* Copy */}
                    <button
                      id={`copy-verse-${verse.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyVerse(verse);
                      }}
                      className="p-1.5 rounded-lg border hover:bg-black/5 transition-all"
                      style={{ borderColor: themeStyle.border }}
                      title="पद्य व भावार्थ कॉपी करें"
                    >
                      {copiedId === verse.id ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4 opacity-70" />}
                    </button>

                    {/* Save to Diary */}
                    <button
                      id={`save-diary-${verse.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveVerseToDiary(verse);
                      }}
                      className="p-1.5 rounded-lg border hover:bg-black/5 transition-all"
                      style={{ borderColor: themeStyle.border }}
                      title="आध्यात्मिक डायरी में सहेजें"
                    >
                      {diarySavedId === verse.id ? <CheckCircle2 className="w-4 h-4 text-amber-600" /> : <Bookmark className="w-4 h-4 opacity-70" />}
                    </button>
                  </div>
                </div>

                {/* Main Sacred Verse Lines (Interactive Sandhukkari Words) */}
                <div className="space-y-2 my-3 text-center sm:text-left">
                  {isInterlinearView ? (
                    (() => {
                      const hi = verse.lines.hi || [];
                      const pb = verse.lines.pb || [];
                      const en = verse.lines.en || [];
                      const maxLines = Math.max(hi.length, pb.length, en.length);
                      const interlLines = [];
                      for(let i=0; i<maxLines; i++) {
                        interlLines.push(
                          <div key={i} className="mb-4 pb-2 border-b border-black/5 dark:border-white/5 last:border-0">
                            {pb[i] && (
                              <div className={`${fontFamily === 'sans' ? 'font-sans' : 'font-serif'} font-bold sm:font-black mb-1 ${fontStyle.verse}`} style={{ color: themeStyle.text }}>
                                {renderInteractiveLine(pb[i])}
                              </div>
                            )}
                            {hi[i] && (
                              <div className={`${fontFamily === 'sans' ? 'font-sans' : 'font-serif'} font-bold sm:font-black mb-1 opacity-90 ${fontStyle.verse}`} style={{ color: themeStyle.accent }}>
                                {renderInteractiveLine(hi[i])}
                              </div>
                            )}
                            {en[i] && (
                              <div className="font-serif text-sm italic opacity-75 mt-1" style={{ color: themeStyle.text }}>
                                {en[i]}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return <div className="space-y-1">{interlLines}</div>;
                    })()
                  ) : (
                    verse.lines[language]?.map((line, lIdx) => (
                      <p
                        key={lIdx}
                        style={{ color: themeStyle.text }}
                        className={`${fontFamily === 'sans' ? 'font-sans' : 'font-serif'} font-bold ${fontStyle.verse}`}
                      >
                        {renderInteractiveLine(line)}
                      </p>
                    ))
                  )}
                </div>

                {/* Word Meanings (शब्दार्थ) & Detailed Bhavarth (भावार्थ) */}
                {isMeaningVisible(verse.id) && (
                  <div className="space-y-3 pt-1">
                    {(() => {
                      const shabdarthList = verse.shabdarth?.[language] || verse.shabdarth?.hi || [];
                      if (!shabdarthList || shabdarthList.length === 0) return null;
                      return (
                        <div
                          style={{ 
                            backgroundColor: themeStyle.badgeBg,
                            borderColor: themeStyle.border 
                          }}
                          className="p-3 rounded-xl text-xs space-y-1 my-3 font-serif border"
                        >
                          <span className="font-bold text-amber-700 block text-[0.6875rem]">
                            {language === 'pb' ? 'ਅੱਖਰੀ ਅਰਥ (ਸ਼ਬਦਾਰਥ):' : language === 'en' ? 'Word Meanings:' : t.shabdarthLabel}
                          </span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {shabdarthList.map((sh, sIdx) => {
                              const displayWord = language === 'pb' ? hindiToPunjabiWordConverter(sh.word) : sh.word;
                              const displayMeaning = language === 'pb' ? hindiToPunjabiWordConverter(sh.meaning) : sh.meaning;
                              return (
                                <span key={sIdx} className="opacity-90">
                                  <strong className="text-amber-800 dark:text-amber-200">{displayWord}:</strong> {displayMeaning}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}

                    {/* Step 2: Bhavarth */}
                    {verse.bhavarth && (verse.bhavarth[language] || verse.bhavarth.hi) && (
                      <div className="pt-2 border-t space-y-1" style={{ borderColor: themeStyle.border }}>
                        <span className="text-[0.6875rem] font-bold text-amber-700 dark:text-amber-300 font-serif block">
                          📖 {language === 'pb' ? 'ਪੜਾਅ ੨: ਭਾਵਾਰਥ' : language === 'en' ? 'Step 2: Meaning' : 'चरण २: शब्दार्थ एवं भावार्थ'}
                        </span>
                        <p className={`${fontFamily === 'sans' ? 'font-sans' : 'font-serif'} opacity-95 ${fontStyle.text}`}>
                          {language === 'pb'
                            ? hindiToPunjabiWordConverter(verse.bhavarth.pb || verse.bhavarth.hi)
                            : (verse.bhavarth[language] || verse.bhavarth.hi)}
                        </p>
                      </div>
                    )}

                    {/* Step 3: Contemplation */}
                    {verse.contemplation && (verse.contemplation[language] || verse.contemplation.hi) && (
                      <div className="mt-2 p-2.5 rounded-xl bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/15 space-y-1">
                        <span className="text-[0.6875rem] font-bold text-blue-700 dark:text-blue-300 font-serif block">
                          💭 {language === 'pb' ? 'ਪੜਾਅ ੩: ਦੈਨਿਕ ਚਿੰਤਨ' : language === 'en' ? 'Step 3: Contemplation' : 'चरण ३: दैनिक चिंतन एवं आत्म-मनन'}
                        </span>
                        <p className="text-xs font-serif leading-relaxed italic opacity-95">
                          {verse.contemplation[language] || verse.contemplation.hi}
                        </p>
                      </div>
                    )}

                    {/* Step 4: Practical Application */}
                    {verse.practicalApplication && (verse.practicalApplication[language] || verse.practicalApplication.hi) && (
                      <div className="mt-2 p-2.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15 space-y-1">
                        <span className="text-[0.6875rem] font-bold text-emerald-700 dark:text-emerald-300 font-serif block">
                          🌿 {language === 'pb' ? 'ਪੜਾਅ ੪: ਜੀਵਨ ਆਚਰਨ' : language === 'en' ? 'Step 4: Living Practice' : 'चरण ४: व्यावहारिक आचरण एवं जीवन उपयोग'}
                        </span>
                        <p className="text-xs font-serif leading-relaxed opacity-95">
                          {verse.practicalApplication[language] || verse.practicalApplication.hi}
                        </p>
                      </div>
                    )}

                    {/* Step 5: Devotional Prayer */}
                    {verse.samarpanPrayer && (verse.samarpanPrayer[language] || verse.samarpanPrayer.hi) && (
                      <div className="mt-2 p-2.5 rounded-xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/15 space-y-1">
                        <span className="text-[0.6875rem] font-bold text-purple-700 dark:text-purple-300 font-serif block">
                          🙏 {language === 'pb' ? 'ਪੜਾਅ ੫: ਸਮਰਪਣ ਤੇ ਅਰਦਾਸ' : language === 'en' ? 'Step 5: Prayer & Surrender' : 'चरण ५: समर्पण एवं पावन प्रार्थना'}
                        </span>
                        <p className="text-xs font-serif leading-relaxed italic opacity-95">
                          {verse.samarpanPrayer[language] || verse.samarpanPrayer.hi}
                        </p>
                      </div>
                    )}

                    {/* Spiritual Essence / Marm Note */}
                    {verse.spiritualEssence && !verse.contemplation && (verse.spiritualEssence[language] || verse.spiritualEssence.hi) && (
                      <div
                        style={{
                          backgroundColor: themeStyle.highlight,
                          borderColor: themeStyle.border,
                        }}
                        className="mt-3 p-3 rounded-xl border flex items-start gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[0.6875rem] font-bold text-amber-700 font-serif block">
                            {t.spiritualEssenceLabel}
                          </span>
                          <p className="text-xs font-serif leading-relaxed italic opacity-90">
                            {deriveDistinctSpiritualEssence(
                              verse.lines?.hi?.join(' ') || '',
                              verse.bhavarth?.hi || '',
                              verse.spiritualEssence[language] || verse.spiritualEssence.hi,
                              language
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredVerses.length}
            pageSize={VERSES_PER_PAGE}
            onPageChange={handleGranthPageChange}
            language={language}
          />
          </>
        )}
        </div>
      )}

      {/* Bottom Chapter Navigation Bar */}
      {currentGranth.chapters.length > 1 && (
        <div
          style={{ backgroundColor: themeStyle.card, borderColor: themeStyle.border }}
          className="p-4 rounded-xl border flex items-center justify-between gap-4 mt-6"
        >
          <button
            id="prev-chapter-btn"
            onClick={handlePrevChapter}
            style={{ borderColor: themeStyle.border }}
            className="min-h-[44px] flex items-center gap-1 px-4 py-2 rounded-xl border hover:bg-black/5 text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.prevChapterLabel}</span>
          </button>

          <span className="text-xs sm:text-sm font-serif font-semibold opacity-80 text-center">
            {currentChapter?.chapterNumber} / {currentGranth.chapters.length} {t.chaptersCountLabel}
          </span>

          <button
            id="next-chapter-btn"
            onClick={handleNextChapter}
            style={{ borderColor: themeStyle.border }}
            className="min-h-[44px] flex items-center gap-1 px-4 py-2 rounded-xl border bg-amber-600 text-white text-xs sm:text-sm font-serif font-bold hover:bg-amber-700 transition-all shadow-sm cursor-pointer"
          >
            <span>{t.nextChapterLabel}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
          </>
        )
      )}

      {/* Sacred Bottom Footer */}
      {!zenMode && (
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2 px-4 text-center rounded-xl mt-4 select-none"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-xs sm:text-sm font-bold tracking-wider font-serif block"
          >
            {exactBottom}
          </span>
        </div>
      )}
      {/* Sacred Sandhukkari Glossary Popup Modal */}
      <SandhukkariGlossaryModal
        isOpen={!!selectedGlossaryTerm}
        term={selectedGlossaryTerm}
        onClose={() => setSelectedGlossaryTerm(null)}
        language={language}
      />

      {/* Chapter Completion Celebration Modal with Flower Bloom Animation */}
      <FlowerBloomAnimation
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        language={language}
        title={
          language === 'pb' ? 'ਅਧਿਆਏ ਸੁਆਧਿਆਏ ਪੂਰਾ ਹੋਇਆ' :
          language === 'en' ? 'Chapter Study Completed' :
          'अध्याय स्वाध्याय पूर्ण'
        }
        message={
          language === 'pb' ? 'ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ! ਅੱਜ ਤੁਸੀਂ ਜੀਵਨ ਦੇ ਇੱਕ ਨਵੇਂ ਸੱਤਿਆ ਦਾ ਸੁਆਧਿਆਏ ਪੂਰਾ ਕੀਤਾ। ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ 🙏' :
          language === 'en' ? 'Saheb Bandgi Saheb! Today you have completed the study of a new truth of life. Saheb Bandgi Saheb 🙏' :
          'साहेब बंदगी साहेब! आज आपने जीवन के एक नए सत्य का स्वाध्याय पूरा किया। साहेब बंदगी साहेब 🙏'
        }
      />
    </div>
  );
};
