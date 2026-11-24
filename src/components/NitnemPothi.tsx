import React, { useState, useEffect, useRef, forwardRef, Component, ReactNode, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  EyeOff,
  BookOpen,
  Play,
  Pause,
  X,
  Sun,
  Moon,
  Flower2,
  Type
} from 'lucide-react';
import { Language, NitnemSection, ReaderFontSize, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { speechReciter } from '../services/audioDhun';
import {
  MAJOR_GRANTH_CATEGORIES,
  loadNitnemCategorySections,
} from '../data/nitnemData';
import { ADMIN_SLOTS_UPDATED_EVENT } from '../services/adminSlotInjectorStore';
import { getSmartNitnemRecommendation } from '../data/nitnemMasterIndex';
import { triggerSacredFlowerShower } from '../services/flowerShower';
import {
  getHaziriState,
  isTodayNitnemDone,
  markNitnemSadhanaDone,
  subscribeToHaziri,
} from '../services/haziriStore';
import { sacredHaptics } from '../services/haptics';

const FlipBookComponent: any = (HTMLFlipBook as any)?.default || HTMLFlipBook;

export type PothiPaperTheme = 'parchment' | 'sepia' | 'night';

export interface NitnemAngData {
  angNumber: number;
  chapterTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  verseType: string;
  originalLines: {
    hi: string[];
    pb: string[];
    en: string[];
  };
  shabdarth?: {
    hi?: Array<{ word: string; meaning: string }>;
    pb?: Array<{ word: string; meaning: string }>;
    en?: Array<{ word: string; meaning: string }>;
  };
  bhavarth: {
    hi: string;
    pb: string;
    en: string;
  };
}

// ----------------------------------------------------------------------------
// Empty starter array — Nitnem Gutka Saheb is cleared and ready for new Paths
// ----------------------------------------------------------------------------
export const NITNEM_PRABHAT_ANGS: NitnemAngData[] = [];

function sectionToAngs(section: NitnemSection): NitnemAngData[] {
  if (!section?.verses || section.verses.length === 0) {
    return NITNEM_PRABHAT_ANGS;
  }
  return section.verses.map((v, idx) => ({
    angNumber: idx + 1,
    chapterTitle: section.title,
    verseType: v.type || 'वाणी',
    originalLines: {
      hi: v.lines.hi || [],
      pb: v.lines.pb && v.lines.pb.length > 0 ? v.lines.pb : v.lines.hi || [],
      en: v.lines.en && v.lines.en.length > 0 ? v.lines.en : v.lines.hi || [],
    },
    shabdarth: v.shabdarth,
    bhavarth: {
      hi: v.bhavarth?.hi || '',
      pb: v.bhavarth?.pb || v.bhavarth?.hi || '',
      en: v.bhavarth?.en || v.bhavarth?.hi || '',
    },
  }));
}

// ----------------------------------------------------------------------------
// Single Page / Ang Component with Two-Part Layout
// ----------------------------------------------------------------------------
export const NitnemAngItem = forwardRef<HTMLDivElement, {
  ang: NitnemAngData;
  totalAngs: number;
  language: Language;
  paperTheme: PothiPaperTheme;
  readerFontSize: ReaderFontSize;
  globalShowMeaning: boolean;
  onToggleGlobalMeaning: () => void;
  onSpeak: (text: string) => void;
  isSpeaking: boolean;
  onCopy: (text: string, angNum: number) => void;
  isCopied: boolean;
  onBookmark: (angNum: number) => void;
  isBookmarked: boolean;
}>(({
  ang,
  totalAngs,
  language,
  paperTheme,
  readerFontSize,
  globalShowMeaning,
  onToggleGlobalMeaning,
  onSpeak,
  isSpeaking,
  onCopy,
  isCopied,
  onBookmark,
  isBookmarked
}, ref) => {
  const pothiColors =
    paperTheme === 'night'
      ? {
          bg: '#161310',
          cream: '#221C16',
          meaningBg: '#1C1712',
          maroon: '#F59E0B',
          gold: '#B45309',
          text: '#F5EBE0',
          subText: '#D6C6B2',
        }
      : paperTheme === 'sepia'
      ? {
          bg: '#EFE4CA',
          cream: '#F8EED8',
          meaningBg: '#EBDDC0',
          maroon: '#7C2D12',
          gold: '#A16207',
          text: '#3A2310',
          subText: '#5C3A1E',
        }
      : {
          bg: '#FAF4E8',
          cream: '#FFFDD0',
          meaningBg: '#FAF4E8',
          maroon: '#8B4513',
          gold: '#C59A3F',
          text: '#3D2817',
          subText: '#6E4726',
        };

  const baniFontSizes: Record<string, string> = {
    small: 'text-sm sm:text-base',
    normal: 'text-base sm:text-xl',
    medium: 'text-lg sm:text-2xl',
    large: 'text-xl sm:text-3xl',
    xl: 'text-2xl sm:text-3xl md:text-4xl',
    xlarge: 'text-2xl sm:text-4xl',
    elderly: 'text-3xl sm:text-4xl font-black',
  };

  const meaningFontSizes: Record<string, string> = {
    small: 'text-xs',
    normal: 'text-xs sm:text-sm',
    medium: 'text-sm sm:text-base',
    large: 'text-sm sm:text-base',
    xl: 'text-base sm:text-lg',
    xlarge: 'text-base sm:text-lg',
    elderly: 'text-lg sm:text-xl font-bold',
  };

  const lines = ang.originalLines[language] || ang.originalLines.hi;
  const meaning = ang.bhavarth[language] || ang.bhavarth.hi;
  const title = ang.chapterTitle[language] || ang.chapterTitle.hi;
  const shabdarthList = ang.shabdarth?.[language] || ang.shabdarth?.hi;

  const meaningBtnLabel = globalShowMeaning
    ? language === 'pb'
      ? 'ਅਰਥ ਛੁਪਾਓ'
      : language === 'en'
      ? 'Hide Meaning'
      : 'अर्थ छुपाएं'
    : language === 'pb'
    ? 'ਅਰਥ ਦਿਖਾਓ'
    : language === 'en'
    ? 'Show Meaning'
    : 'अर्थ दिखाएं';

  return (
    <div
      ref={ref}
      className="nitnem-ang-page w-full h-full select-none overflow-hidden relative shadow-2xl flex flex-col justify-between transition-colors duration-300"
      style={{
        backgroundColor: pothiColors.bg,
        color: pothiColors.text,
        fontFamily: "'Noto Serif Devanagari', 'Cinzel', serif",
        boxShadow: 'inset 0 0 35px rgba(139, 69, 19, 0.16), 0 10px 25px rgba(0,0,0,0.2)',
        borderRight: ang.angNumber % 2 !== 0 ? `1px solid ${pothiColors.gold}40` : 'none',
        borderLeft: ang.angNumber % 2 === 0 ? `1px solid ${pothiColors.gold}40` : 'none'
      }}
    >
      {/* Traditional Pothi Red Sacred Spine Line */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-10"
        style={{
          width: '3px',
          left: ang.angNumber % 2 === 0 ? '20px' : 'auto',
          right: ang.angNumber % 2 !== 0 ? '20px' : 'auto',
          backgroundColor: '#9E2A2B',
          opacity: 0.35
        }}
      />

      {/* Main Content Area */}
      <div
        className="p-4 sm:p-6 flex-1 flex flex-col justify-between relative z-10 h-full overflow-y-auto scrollbar-hide"
        style={{
          paddingLeft: ang.angNumber % 2 === 0 ? '2rem' : '1.25rem',
          paddingRight: ang.angNumber % 2 !== 0 ? '2rem' : '1.25rem'
        }}
      >
        {/* HEADER: Chapter & Ang Indicator */}
        <div className="border-b pb-2 flex items-center justify-between gap-2" style={{ borderColor: `${pothiColors.gold}50` }}>
          <div className="flex items-center gap-1.5 min-w-0">
            <span
              className="text-[10px] font-black px-2 py-0.5 rounded text-white tracking-wider shrink-0"
              style={{ backgroundColor: paperTheme === 'night' ? '#92400E' : pothiColors.maroon }}
            >
              {language === 'pb' ? '।।ਸਤਯਨਾਮ।।' : language === 'en' ? '|| Satyanaam ||' : '।।सत्यनाम।।'}
            </span>
            <span className="text-xs font-bold truncate" style={{ color: pothiColors.maroon }}>
              {title}
            </span>
          </div>

          <span
            className="text-xs font-black px-2.5 py-0.5 rounded-full border shadow-inner shrink-0"
            style={{
              borderColor: pothiColors.gold,
              backgroundColor: pothiColors.cream,
              color: pothiColors.maroon
            }}
          >
            {language === 'pb' ? 'ਅੰਗ' : language === 'en' ? 'Ang' : 'अंग'} {ang.angNumber} / {totalAngs}
          </span>
        </div>

        {/* PART 1: UPPER SECTION - SACRED FRAME WITH ORIGINAL TEXT */}
        <div className="my-2.5">
          <div
            className="rounded-2xl p-1 shadow-md transition-all duration-300"
            style={{
              background:
                paperTheme === 'night'
                  ? 'linear-gradient(135deg, #451A03 0%, #78350F 50%, #291002 100%)'
                  : 'linear-gradient(135deg, #5C2C16 0%, #8B4513 50%, #3D1C06 100%)',
              boxShadow: '0 6px 16px rgba(92, 53, 19, 0.25)'
            }}
          >
            <div
              className="rounded-xl p-3.5 sm:p-5 text-center relative overflow-hidden"
              style={{
                backgroundColor: pothiColors.cream,
                border: `2px solid ${pothiColors.gold}`,
              }}
            >
              <span className="absolute top-1 left-1 text-xs opacity-60" style={{ color: pothiColors.maroon }}>❖</span>
              <span className="absolute top-1 right-1 text-xs opacity-60" style={{ color: pothiColors.maroon }}>❖</span>
              <span className="absolute bottom-1 left-1 text-xs opacity-60" style={{ color: pothiColors.maroon }}>❖</span>
              <span className="absolute bottom-1 right-1 text-xs opacity-60" style={{ color: pothiColors.maroon }}>❖</span>

              {/* Action Toolbar */}
              <div className="mb-2 flex items-center justify-between border-b pb-1.5" style={{ borderColor: `${pothiColors.gold}40` }}>
                <span className="text-[11px] font-bold font-serif" style={{ color: pothiColors.maroon }}>
                  {ang.verseType}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onSpeak(lines.join(' '))}
                    className="min-w-[36px] min-h-[36px] p-1.5 rounded-lg hover:bg-black/5 transition cursor-pointer flex items-center justify-center"
                    title={isSpeaking ? 'Pause' : 'Listen'}
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-4 h-4 text-red-600 animate-pulse" />
                    ) : (
                      <Volume2 className="w-4 h-4" style={{ color: pothiColors.maroon }} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onCopy(lines.join('\n') + (meaning ? '\n\n' + meaning : ''), ang.angNumber)}
                    className="min-w-[36px] min-h-[36px] p-1.5 rounded-lg hover:bg-black/5 transition cursor-pointer flex items-center justify-center"
                    title="Copy Verse"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" style={{ color: pothiColors.maroon }} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookmark(ang.angNumber)}
                    className="min-w-[36px] min-h-[36px] p-1.5 rounded-lg hover:bg-black/5 transition cursor-pointer flex items-center justify-center"
                    title="Bookmark"
                  >
                    {isBookmarked ? <CheckCircle2 className="w-4 h-4" style={{ color: pothiColors.maroon }} /> : <Bookmark className="w-4 h-4 opacity-70" style={{ color: pothiColors.maroon }} />}
                  </button>
                </div>
              </div>

              {/* Sacred Original Bani */}
              <div className="space-y-2 py-1 text-center">
                {lines.map((l, lIdx) => (
                  <p
                    key={lIdx}
                    className={`font-serif font-black leading-relaxed tracking-wide ${baniFontSizes[readerFontSize] || baniFontSizes.medium}`}
                    style={{ color: pothiColors.text }}
                  >
                    {l}
                  </p>
                ))}
              </div>

              <div className="mt-2 text-center text-xs opacity-60 select-none" style={{ color: pothiColors.gold }}>
                ─── ꧁ ☬ ꧂ ───
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: LOWER SECTION - TRANSLATED MEANING & TOGGLE */}
        {meaning && (
          <div className="flex-1 mt-1 flex flex-col justify-end">
            <div
              className="rounded-xl p-3 sm:p-4 border shadow-inner"
              style={{
                backgroundColor: pothiColors.meaningBg,
                borderColor: `${pothiColors.gold}60`
              }}
            >
              <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b" style={{ borderColor: `${pothiColors.gold}40` }}>
                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: pothiColors.maroon }}>
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {language === 'hi' ? 'पावन भावार्थ एवं अर्थ' : language === 'pb' ? 'ਪਾਵਨ ਭਾਵਾਰਥ ਤੇ ਅਰਥ' : 'Spiritual Meaning'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onToggleGlobalMeaning}
                  className="px-2.5 py-1 rounded-lg border text-[11px] font-bold font-serif flex items-center gap-1 cursor-pointer transition hover:opacity-90 whitespace-nowrap"
                  style={{
                    borderColor: `${pothiColors.gold}70`,
                    color: pothiColors.maroon,
                    backgroundColor: pothiColors.cream
                  }}
                >
                  {globalShowMeaning ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{meaningBtnLabel}</span>
                </button>
              </div>

              {globalShowMeaning && shabdarthList && shabdarthList.length > 0 && (
                <div className={`mb-2 pb-1.5 border-b border-dashed space-y-0.5 ${meaningFontSizes[readerFontSize] || meaningFontSizes.medium}`} style={{ borderColor: `${pothiColors.maroon}30` }}>
                  <span className="font-bold" style={{ color: pothiColors.maroon }}>
                    {language === 'hi' ? 'शब्दार्थ: ' : language === 'pb' ? 'ਸ਼ਬਦਾਰਥ: ' : 'Word Meanings: '}
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {shabdarthList.map((sh, sIdx) => (
                      <span key={sIdx} className="opacity-90">
                        <strong>{sh.word}:</strong> {sh.meaning}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {globalShowMeaning ? (
                <p
                  className={`font-serif leading-relaxed text-justify opacity-95 ${meaningFontSizes[readerFontSize] || meaningFontSizes.medium}`}
                  style={{ color: pothiColors.text }}
                >
                  {meaning}
                </p>
              ) : (
                <p className="text-[11px] text-center italic opacity-70 py-1" style={{ color: pothiColors.subText }}>
                  {language === 'pb' ? '(ਅਰਥ ਛੁਪਿਆ ਹੈ — "ਅਰਥ ਦਿਖਾਓ" ਬਟਨ ਦਬਾਓ)' : language === 'en' ? '(Meaning hidden — tap "Show Meaning" above)' : '(भावार्थ छुपा हुआ है — "अर्थ दिखाएं" पर टैप करें)'}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Sacred Concluding Salutation on Final Ang */}
        {ang.angNumber === totalAngs && (
          <div className="my-2 text-center">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-serif font-black border shadow-2xs"
              style={{
                backgroundColor: `${pothiColors.gold}25`,
                color: pothiColors.maroon,
                borderColor: `${pothiColors.gold}70`,
              }}
            >
              {language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।।साहेब बन्दगी साहेब।।'}
            </span>
          </div>
        )}

        {/* FOOTER */}
        <div className="pt-2 mt-1 border-t flex items-center justify-between text-[10px] opacity-75" style={{ borderColor: `${pothiColors.gold}40`, color: pothiColors.subText }}>
          <span>{ang.angNumber % 2 === 0 ? '👈 बायां पन्ना' : 'दायां पन्ना 👉'}</span>
          <span className="italic">
            {language === 'pb' ? 'ਸਵਾਈਪ ਕਰਕੇ ਪੰਨਾ ਪਲਟੋ 📖' : language === 'en' ? 'Swipe to turn page 📖' : 'स्वाइप करके पन्ना पलटें 📖'}
          </span>
          <span className="font-bold">{ang.angNumber}</span>
        </div>
      </div>
    </div>
  );
});

// Fallback Error Boundary
class NitnemErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ----------------------------------------------------------------------------
// MAIN NITNEM POTHI 3D COMPONENT (Full Gutka Mode + Dynamic Sections + Haziri)
// ----------------------------------------------------------------------------
export const NitnemPothi: React.FC<{
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
  onClose?: () => void;
  sections?: NitnemSection[];
  initialSectionId?: string;
  onSectionChange?: (sectionId: string) => void;
  onHaziriMarked?: () => void;
}> = ({
  language = 'hi',
  onLanguageChange,
  onClose,
  sections: propSections,
  initialSectionId,
  onSectionChange,
  onHaziriMarked,
}) => {
  const { theme, fontSize, setFontSize } = useAppTheme();
  const [currentLang, setCurrentLang] = useState<Language>(language);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(() => {
    return getSmartNitnemRecommendation().primaryCategoryId;
  });
  const [loadedSections, setLoadedSections] = useState<NitnemSection[]>(propSections || []);
  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId || '');
  const [currentAngIdx, setCurrentAngIdx] = useState<number>(0);
  const [slotRefreshTick, setSlotRefreshTick] = useState<number>(0);

  useEffect(() => {
    const handleSlotUpdate = () => setSlotRefreshTick((t) => t + 1);
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotUpdate);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotUpdate);
  }, []);

  // Gutka Comfort Tools State
  const [showMeaningGlobal, setShowMeaningGlobal] = useState<boolean>(true);
  const [paperTheme, setPaperTheme] = useState<PothiPaperTheme>('parchment');
  const [localFontSize, setLocalFontSize] = useState<ReaderFontSize>(fontSize || 'normal');
  const [keepScreenAwake, setKeepScreenAwake] = useState<boolean>(true);
  const [autoTurnSpeed, setAutoTurnSpeed] = useState<0.5 | 1 | 1.5 | 2>(1);
  const [isAutoTurn, setIsAutoTurn] = useState<boolean>(false);

  // Playback & Interaction State
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedAng, setCopiedAng] = useState<number | null>(null);
  const [bookmarkedAng, setBookmarkedAng] = useState<number | null>(null);
  const [haziriMarkedToday, setHaziriMarkedToday] = useState<boolean>(() => isTodayNitnemDone());
  const [haziriStreak, setHaziriStreak] = useState<number>(() => getHaziriState().currentStreak);
  const [blessingCelebratedForSection, setBlessingCelebratedForSection] = useState<string | null>(null);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setCurrentLang(language);
  }, [language]);

  useEffect(() => {
    if (propSections && propSections.length > 0) {
      setLoadedSections(propSections);
      if (initialSectionId && propSections.some((s) => s.id === initialSectionId)) {
        setActiveSectionId(initialSectionId);
      } else if (!activeSectionId) {
        setActiveSectionId(propSections[0].id);
      }
      return;
    }

    let cancelled = false;
    loadNitnemCategorySections(selectedCategoryId)
      .then((allLoaded) => {
        if (cancelled) return;
        const scoped = allLoaded.filter((s) => s.majorCategoryId === selectedCategoryId);
        setLoadedSections(scoped);
        if (scoped.length > 0) {
          if (initialSectionId && scoped.some((s) => s.id === initialSectionId)) {
            setActiveSectionId(initialSectionId);
          } else {
            setActiveSectionId(scoped[0].id);
          }
          setCurrentAngIdx(0);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [propSections, selectedCategoryId, initialSectionId, slotRefreshTick]);

  useEffect(() => {
    const unsub = subscribeToHaziri((state) => {
      setHaziriStreak(state.currentStreak);
      setHaziriMarkedToday(isTodayNitnemDone());
    });
    return unsub;
  }, []);

  // Wake Lock API with visibilitychange re-acquisition
  useEffect(() => {
    if (!keepScreenAwake) return;
    let wakeLock: any = null;
    let disposed = false;

    const acquireLock = async () => {
      try {
        if (!disposed && 'wakeLock' in navigator && document.visibilityState === 'visible') {
          wakeLock = await (navigator as any).wakeLock.request('screen');
        }
      } catch {}
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        acquireLock();
      }
    };

    acquireLock();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      disposed = true;
      document.removeEventListener('visibilitychange', handleVisibility);
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, [keepScreenAwake]);

  const activeSection = useMemo(() => {
    return loadedSections.find((s) => s.id === activeSectionId) || loadedSections[0];
  }, [loadedSections, activeSectionId]);

  const activeCategorySections = useMemo(() => {
    if (!activeSection) return loadedSections;
    return loadedSections.filter((s) => s.majorCategoryId === activeSection.majorCategoryId);
  }, [loadedSections, activeSection]);

  const activeSectionIndex = useMemo(() => {
    if (!activeSection) return -1;
    return activeCategorySections.findIndex((s) => s.id === activeSection.id);
  }, [activeCategorySections, activeSection]);

  const nextSubChapter = useMemo(() => {
    if (activeSectionIndex >= 0 && activeSectionIndex < activeCategorySections.length - 1) {
      return activeCategorySections[activeSectionIndex + 1];
    }
    return null;
  }, [activeCategorySections, activeSectionIndex]);

  const activeAngs: NitnemAngData[] = useMemo(() => {
    if (activeSection) return sectionToAngs(activeSection);
    return NITNEM_PRABHAT_ANGS;
  }, [activeSection]);

  const isOnFinalAng = activeAngs.length > 0 && currentAngIdx >= activeAngs.length - 1;
  const isFinalSubChapterOfMajorPath =
    activeCategorySections.length > 0 &&
    activeSectionIndex === activeCategorySections.length - 1;

  // Real Auto-Turn Timer with Speed Control
  useEffect(() => {
    if (!isAutoTurn || activeAngs.length <= 1) return;
    const intervalMs = Math.max(3500, Math.round(10000 / autoTurnSpeed));
    const timer = window.setInterval(() => {
      setCurrentAngIdx((prev) => {
        if (prev >= activeAngs.length - 1) {
          setIsAutoTurn(false);
          return prev;
        }
        const nextIdx = prev + 1;
        if (bookRef.current) {
          try {
            bookRef.current.pageFlip().turnToPage(nextIdx);
          } catch {}
        }
        return nextIdx;
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [isAutoTurn, autoTurnSpeed, activeAngs.length]);

  // Peaceful Flower-Petal Blessing only when completing a populated major Nitnem path
  useEffect(() => {
    if (
      activeSection &&
      activeAngs.length > 0 &&
      isOnFinalAng &&
      isFinalSubChapterOfMajorPath &&
      blessingCelebratedForSection !== activeSection.id
    ) {
      setBlessingCelebratedForSection(activeSection.id);
      triggerSacredFlowerShower();
    }
  }, [activeSection, activeAngs.length, isOnFinalAng, isFinalSubChapterOfMajorPath, blessingCelebratedForSection]);

  const handleLangSwitch = (newLang: Language) => {
    setCurrentLang(newLang);
    if (onLanguageChange) onLanguageChange(newLang);
  };

  const handleSelectSubChapter = (secId: string) => {
    sacredHaptics.lightTap();
    setIsAutoTurn(false);
    setActiveSectionId(secId);
    setCurrentAngIdx(0);
    if (onSectionChange) onSectionChange(secId);
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().turnToPage(0);
      } catch {}
    }
  };

  const handleMarkNitnemHaziri = () => {
    const pathName =
      activeSection?.majorCategoryTitle?.[currentLang] ||
      activeSection?.title?.[currentLang] ||
      'नितनेम गुटका साहेब';
    const next = markNitnemSadhanaDone(pathName);
    setHaziriMarkedToday(true);
    setHaziriStreak(next.currentStreak);
    triggerSacredFlowerShower();
    if (onHaziriMarked) onHaziriMarked();
  };

  const flipNext = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipNext();
        return;
      } catch {}
    }
    setCurrentAngIdx((prev) => Math.min(activeAngs.length - 1, prev + 1));
  };

  const flipPrev = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipPrev();
        return;
      } catch {}
    }
    setCurrentAngIdx((prev) => Math.max(0, prev - 1));
  };

  const jumpToAng = (idx: number) => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().turnToPage(idx);
      } catch {}
    }
    setCurrentAngIdx(idx);
  };

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speechReciter.speak(text, currentLang, () => {
        setIsSpeaking(false);
      });
    }
  };

  const handleCopy = (text: string, angNum: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedAng(angNum);
    setTimeout(() => setCopiedAng(null), 2000);
  };

  const handleBookmark = (angNum: number) => {
    setBookmarkedAng(angNum);
    setTimeout(() => setBookmarkedAng(null), 2000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) flipNext();
    else if (diff < -40) flipPrev();
    setTouchStartX(null);
  };

  const cyclePaperTheme = () => {
    sacredHaptics.lightTap();
    setPaperTheme((prev) => (prev === 'parchment' ? 'sepia' : prev === 'sepia' ? 'night' : 'parchment'));
  };

  const cycleFontSize = () => {
    sacredHaptics.lightTap();
    const order: ReaderFontSize[] = ['small', 'normal', 'large', 'xlarge'];
    const idx = order.indexOf(localFontSize);
    const next = order[(idx + 1) % order.length];
    setLocalFontSize(next);
    setFontSize(next);
  };

  const barColors =
    paperTheme === 'night'
      ? { bg: '#1C1713', border: '#92400E', text: '#FDE68A', muted: '#D6C6B2' }
      : paperTheme === 'sepia'
      ? { bg: '#F4E9D0', border: '#9A4208', text: '#5C2C16', muted: '#7C4A22' }
      : { bg: '#FFFDD0', border: '#8B4513', text: '#8B4513', muted: '#6E4726' };

  const FallbackView = (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
    >
      <NitnemAngItem
        ang={activeAngs[currentAngIdx] || activeAngs[0]}
        totalAngs={activeAngs.length}
        language={currentLang}
        paperTheme={paperTheme}
        readerFontSize={localFontSize}
        globalShowMeaning={showMeaningGlobal}
        onToggleGlobalMeaning={() => setShowMeaningGlobal((v) => !v)}
        onSpeak={handleSpeak}
        isSpeaking={isSpeaking}
        onCopy={handleCopy}
        isCopied={copiedAng === currentAngIdx + 1}
        onBookmark={handleBookmark}
        isBookmarked={bookmarkedAng === currentAngIdx + 1}
      />
    </div>
  );

  const completionBlessingText =
    currentLang === 'pb'
      ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ! ਅੱਜ ਤੁਸੀਂ ਜੀਵਨ ਦੇ ਇੱਕ ਨਵੇਂ ਸੱਚ ਦਾ ਸਵਾਧਿਆਏ ਪੂਰਾ ਕੀਤਾ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ 🙏'
      : currentLang === 'en'
      ? 'Saheb Bandagi Saheb! Today you completed the self-study of a new truth of life. Saheb Bandagi Saheb 🙏'
      : 'साहेब बंदगी साहेब! आज आपने जीवन के एक नए सत्य का स्वाध्याय पूरा किया। साहेब बंदगी साहेब 🙏';

  const hasEmptySlotOnly = activeAngs.length === 0;

  return (
    <div
      ref={containerRef}
      className="nitnem-pothi-wrapper w-full flex flex-col items-center justify-between rounded-3xl transition-all duration-300 relative space-y-3 my-2"
    >

      {/* Standalone 7-Section Category Picker when used directly */}
      {!propSections && (
        <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          {MAJOR_GRANTH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setSelectedCategoryId(cat.id);
              }}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-serif font-bold transition whitespace-nowrap border cursor-pointer shrink-0 ${
                selectedCategoryId === cat.id
                  ? 'bg-[#8B4513] text-white border-[#8B4513] shadow-sm'
                  : 'bg-[#FAF4E8] text-[#5C2C16] border-[#C59A3F]/50 hover:bg-[#F5EBE0]'
              }`}
            >
              {cat.title[currentLang] || cat.title.hi}
            </button>
          ))}
        </div>
      )}

      {/* Sacred Gutka Comfort Toolbar */}
      <div
        className="w-full p-3.5 sm:p-4 rounded-3xl border shadow-md flex flex-col gap-3"
        style={{
          backgroundColor: barColors.bg,
          borderColor: barColors.border
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2.5 rounded-2xl bg-[#8B4513] text-white shadow-xs shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif font-black text-sm sm:text-base truncate" style={{ color: barColors.text }}>
                {activeSection?.title?.[currentLang] || activeSection?.title?.hi || (currentLang === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ • 3D ਪੋਥੀ' : currentLang === 'en' ? 'Nitnem Gutka Saheb • 3D Pothi' : 'नितनेम गुटका साहेब • पोथी पठन')}
              </h3>
              <p className="text-xs font-serif truncate" style={{ color: barColors.muted }}>
                {hasEmptySlotOnly
                  ? currentLang === 'pb'
                    ? 'ਖਾਲੀ ਪੋਥੀ ਪੰਨਾ · ਪਾਠ ਪ੍ਰਤੀਕਸ਼ਾਰਤ'
                    : currentLang === 'en'
                    ? 'Empty Folio · Ready for Path Text'
                    : 'रिक्त पोथी पन्ना · पाठ प्रतीक्षारत'
                  : `${currentLang === 'pb' ? 'ਅੰਗ' : currentLang === 'en' ? 'Ang' : 'अंग'} ${currentAngIdx + 1} / ${activeAngs.length}`}
                {activeCategorySections.length > 1 && activeSectionIndex >= 0
                  ? ` · ${currentLang === 'pb' ? 'ਅਧਿਆਇ' : currentLang === 'en' ? 'Ch' : 'अध्याय'} ${activeSectionIndex + 1}/${activeCategorySections.length}`
                  : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={handleLangSwitch}
              variant="pothi-compact"
            />
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-3 py-1.5 rounded-xl bg-[#8B4513] text-white hover:opacity-90 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold font-serif whitespace-nowrap"
              >
                <X className="w-4 h-4 shrink-0" />
                <span>{currentLang === 'pb' ? 'ਵਾਪਸ ਆਓ' : currentLang === 'en' ? 'Return' : 'वापस आएं'}</span>
              </button>
            )}
          </div>
        </div>

        {/* One-Tap Gutka Comfort Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t" style={{ borderColor: `${barColors.border}30` }}>
          {/* Meaning Toggle */}
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setShowMeaningGlobal((v) => !v);
            }}
            className="min-h-[44px] px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition"
            style={{
              backgroundColor: showMeaningGlobal ? '#8B4513' : 'transparent',
              color: showMeaningGlobal ? '#FFFFFF' : barColors.text,
              borderColor: barColors.border
            }}
          >
            {showMeaningGlobal ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span>
              {showMeaningGlobal
                ? currentLang === 'pb' ? 'ਅਰਥ ਛੁਪਾਓ' : currentLang === 'en' ? 'Hide Meaning' : 'अर्थ छुपाएं'
                : currentLang === 'pb' ? 'ਅਰਥ ਦਿਖਾਓ' : currentLang === 'en' ? 'Show Meaning' : 'अर्थ दिखाएं'}
            </span>
          </button>

          {/* One-Tap Font Size */}
          <button
            type="button"
            onClick={cycleFontSize}
            className="min-h-[44px] px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition"
            style={{ borderColor: barColors.border, color: barColors.text }}
          >
            <Type className="w-4 h-4" />
            <span>
              {localFontSize === 'small' ? 'A-' : localFontSize === 'normal' ? 'Aa' : localFontSize === 'large' ? 'A+' : 'A++'}
            </span>
          </button>

          {/* Parchment / Cream Mode Switcher */}
          <button
            type="button"
            onClick={cyclePaperTheme}
            className="min-h-[44px] px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition"
            style={{ borderColor: barColors.border, color: barColors.text }}
          >
            {paperTheme === 'night' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span>
              {paperTheme === 'parchment'
                ? currentLang === 'pb' ? 'ਕਰੀਮ ਪੱਤਰਾ' : currentLang === 'en' ? 'Cream Paper' : 'क्रीम पत्र'
                : paperTheme === 'sepia'
                ? currentLang === 'pb' ? 'ਪੁਰਾਤਨ ਪੋਥੀ' : currentLang === 'en' ? 'Parchment' : 'पुरातन पोथी'
                : currentLang === 'pb' ? 'ਰਾਤਰੀ ਮੋਡ' : currentLang === 'en' ? 'Night' : 'रात्रि मोड'}
            </span>
          </button>

          {/* Wake Lock Keep Screen Awake */}
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setKeepScreenAwake((v) => !v);
            }}
            className="min-h-[44px] px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition"
            style={{
              backgroundColor: keepScreenAwake ? 'rgba(16, 185, 129, 0.14)' : 'transparent',
              borderColor: keepScreenAwake ? '#059669' : barColors.border,
              color: keepScreenAwake ? '#065F46' : barColors.text
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {keepScreenAwake
                ? currentLang === 'pb' ? 'ਸਕ੍ਰੀਨ ਜਾਗ੍ਰਿਤ' : currentLang === 'en' ? 'Screen Awake' : 'स्क्रीन जागृत'
                : currentLang === 'pb' ? 'ਸਕ੍ਰੀਨ ਆਮ' : currentLang === 'en' ? 'Sleep Normal' : 'स्क्रीन सामान्य'}
            </span>
          </button>

          {/* Auto-Turn + Speed Control */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsAutoTurn(!isAutoTurn)}
              className="min-h-[44px] px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition"
              style={{
                backgroundColor: isAutoTurn ? '#8B4513' : 'transparent',
                color: isAutoTurn ? '#FFFFFF' : barColors.text,
                borderColor: barColors.border
              }}
            >
              {isAutoTurn ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>
                {isAutoTurn
                  ? currentLang === 'pb' ? 'ਵਿਰਾਮ' : currentLang === 'en' ? 'Pause' : 'विराम'
                  : currentLang === 'pb' ? 'ਸਵੈ-ਪਲਟ' : currentLang === 'en' ? 'Auto-Turn' : 'स्वतः पठन'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                const speeds: Array<0.5 | 1 | 1.5 | 2> = [0.5, 1, 1.5, 2];
                setAutoTurnSpeed(speeds[(speeds.indexOf(autoTurnSpeed) + 1) % speeds.length]);
              }}
              className="min-h-[44px] px-2.5 py-1.5 rounded-xl border text-xs font-mono font-bold cursor-pointer whitespace-nowrap"
              style={{ borderColor: barColors.border, color: barColors.text }}
              title="Auto-Turn Speed"
            >
              {autoTurnSpeed}x
            </button>
          </div>
        </div>
      </div>

      {/* 3D Pothi Book Stage OR Serene Empty-Folio Stage */}
      {hasEmptySlotOnly ? (
        <div
          className="w-full max-w-2xl mx-auto my-4 rounded-3xl border px-6 py-10 sm:px-10 sm:py-14 text-center space-y-5 shadow-lg"
          style={{ backgroundColor: barColors.bg, borderColor: `${barColors.border}55`, color: barColors.text }}
        >
          <p className="text-xs uppercase tracking-widest font-serif opacity-75">
            {currentLang === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : currentLang === 'en' ? '|| Satyanaam ||' : '।। सत्यनाम ।।'}
          </p>
          <div className="border-t border-b py-6 space-y-2.5" style={{ borderColor: `${barColors.border}28` }}>
            <h4 className="font-serif font-bold text-xl sm:text-2xl">
              {activeSection?.title?.[currentLang] || activeSection?.title?.hi || (currentLang === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ' : currentLang === 'en' ? 'Nitnem Gutka Saheb' : 'नितनेम गुटका साहेब')}
            </h4>
            <p className="text-sm font-serif opacity-85 max-w-md mx-auto leading-relaxed">
              {currentLang === 'pb'
                ? 'ਇਸ ਪੋਥੀ ਅਧਿਆਇ ਵਿੱਚ ਨਵਾਂ ਪਾਵਨ ਪਾਠ ਜੋੜੇ ਜਾਣ ਲਈ ਇਹ ਥਾਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਾਫ਼ ਅਤੇ ਤਿਆਰ ਹੈ।'
                : currentLang === 'en'
                ? 'This 3D Pothi chapter space is cleared and ready for the upcoming authentic Path.'
                : 'इस ३D पोथी अध्याय में नया पावन पाठ संकलित किए जाने हेतु यह स्थान पूर्णतः रिक्त एवं तैयार है।'}
            </p>
          </div>
          <p className="text-xs font-serif font-semibold opacity-75">
            {currentLang === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : currentLang === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
          </p>

          {activeCategorySections.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              <select
                value={activeSection?.id || ''}
                onChange={(e) => handleSelectSubChapter(e.target.value)}
                className="min-h-[44px] max-w-xs px-3 py-2 rounded-xl border text-xs font-bold font-serif outline-none bg-white text-[#8B4513] border-[#8B4513]/40 cursor-pointer"
                aria-label={currentLang === 'pb' ? 'ਅਧਿਆਇ ਚੁਣੋ' : currentLang === 'en' ? 'Select Chapter' : 'अध्याय चुनें'}
              >
                {activeCategorySections.map((sec, idx) => (
                  <option key={sec.id} value={sec.id}>
                    {idx + 1}. {sec.title[currentLang] || sec.title.hi}
                  </option>
                ))}
              </select>

              {nextSubChapter && (
                <button
                  type="button"
                  onClick={() => handleSelectSubChapter(nextSubChapter.id)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8B4513] text-white font-serif font-bold text-xs shadow-sm hover:opacity-95 cursor-pointer whitespace-nowrap"
                >
                  <span>
                    {currentLang === 'pb' ? 'ਅਗਲਾ ਅਧਿਆਇ' : currentLang === 'en' ? 'Next Chapter' : 'अगला अध्याय'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full flex items-center justify-center my-2 sm:my-4 relative min-h-[540px] sm:min-h-[600px]"
          >
            <button
              type="button"
              onClick={flipPrev}
              disabled={currentAngIdx === 0}
              className={`min-w-[44px] min-h-[44px] absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-2xl border transition-all cursor-pointer flex items-center justify-center ${
                currentAngIdx === 0
                  ? 'opacity-30 cursor-not-allowed bg-black/20 text-gray-400'
                  : 'bg-[#8B4513] text-white hover:scale-110 active:scale-95'
              }`}
              title={currentLang === 'pb' ? 'ਪਿਛਲਾ ਪੰਨਾ' : currentLang === 'en' ? 'Previous Page' : 'पिछला पन्ना'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <NitnemErrorBoundary fallback={FallbackView}>
              <div className="pothi-flipbook-container shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center w-full max-w-3xl">
                {FlipBookComponent ? (
                  <FlipBookComponent
                    key={`nitnem-flip-${activeSection?.id || 'default'}-${currentLang}-${paperTheme}-${activeAngs.length}`}
                    ref={bookRef}
                    width={420}
                    height={580}
                    size="stretch"
                    minWidth={280}
                    maxWidth={580}
                    minHeight={500}
                    maxHeight={740}
                    maxShadowOpacity={0.65}
                    showCover={false}
                    mobileScrollSupport={true}
                    onFlip={(e: any) => {
                      if (typeof e.data === 'number') setCurrentAngIdx(e.data);
                    }}
                    className="pothi-book-canvas"
                    style={{ margin: '0 auto' }}
                    startPage={currentAngIdx}
                    drawShadow={true}
                    flippingTime={850}
                    usePortrait={true}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                  >
                    {activeAngs.map((angItem, idx) => (
                      <NitnemAngItem
                        key={`${activeSection?.id || 'default'}-${idx}`}
                        ang={angItem}
                        totalAngs={activeAngs.length}
                        language={currentLang}
                        paperTheme={paperTheme}
                        readerFontSize={localFontSize}
                        globalShowMeaning={showMeaningGlobal}
                        onToggleGlobalMeaning={() => setShowMeaningGlobal((v) => !v)}
                        onSpeak={handleSpeak}
                        isSpeaking={isSpeaking}
                        onCopy={handleCopy}
                        isCopied={copiedAng === angItem.angNumber}
                        onBookmark={handleBookmark}
                        isBookmarked={bookmarkedAng === angItem.angNumber}
                      />
                    ))}
                  </FlipBookComponent>
                ) : (
                  FallbackView
                )}
              </div>
            </NitnemErrorBoundary>

            <button
              type="button"
              onClick={flipNext}
              disabled={currentAngIdx >= activeAngs.length - 1}
              className={`min-w-[44px] min-h-[44px] absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-2xl border transition-all cursor-pointer flex items-center justify-center ${
                currentAngIdx >= activeAngs.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-black/20 text-gray-400'
                  : 'bg-[#8B4513] text-white hover:scale-110 active:scale-95'
              }`}
              title={currentLang === 'pb' ? 'ਅਗਲਾ ਪੰਨਾ' : currentLang === 'en' ? 'Next Page' : 'अगला पन्ना'}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Seamless Next Sub-Chapter Flow OR Major Path Haziri Completion */}
          {isOnFinalAng && (nextSubChapter || isFinalSubChapterOfMajorPath) && (
            <div
              className="w-full p-5 rounded-3xl border-2 text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#FAF4E8', borderColor: '#C59A3F' }}
            >
              {nextSubChapter ? (
                <>
                  <p className="text-xs font-serif font-bold text-[#8B4513]">
                    {currentLang === 'pb' ? 'ਅਗਲਾ ਉਪ-ਅਧਿਆਇ' : currentLang === 'en' ? 'Next Sub-Chapter' : 'अगला उप-अध्याय'}
                  </p>
                  <h4 className="font-serif font-black text-base text-[#3D2817]">
                    {nextSubChapter.title[currentLang] || nextSubChapter.title.hi}
                  </h4>
                  <button
                    type="button"
                    onClick={() => handleSelectSubChapter(nextSubChapter.id)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#8B4513] text-white font-serif font-bold text-xs sm:text-sm shadow-md hover:opacity-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>
                      {currentLang === 'pb' ? 'ਅਗਲਾ ਉਪ-ਅਧਿਆਇ ਪੜ੍ਹੋ' : currentLang === 'en' ? 'Next Sub-Chapter' : 'अगला उप-अध्याय पढ़ें'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-[#8B4513]">
                    <Flower2 className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base font-serif font-black text-[#3D2817] max-w-lg mx-auto leading-relaxed">
                    {completionBlessingText}
                  </p>
                  <button
                    type="button"
                    onClick={handleMarkNitnemHaziri}
                    className={`min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl font-serif font-bold text-xs sm:text-sm shadow-md cursor-pointer whitespace-nowrap transition ${
                      haziriMarkedToday
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#8B4513] hover:opacity-95 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {haziriMarkedToday
                        ? currentLang === 'pb'
                          ? `ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਹੈ (${haziriStreak} ਦਿਨ)`
                          : currentLang === 'en'
                          ? `Today's Nitnem Haziri Marked (${haziriStreak}d Streak)`
                          : `आज की नितनेम हाज़िरी दर्ज है (${haziriStreak} दिन)`
                        : currentLang === 'pb'
                        ? 'ਅੱਜ ਦੀ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ'
                        : currentLang === 'en'
                        ? "Mark Today's Nitnem Haziri"
                        : 'नितनेम हाज़िरी दर्ज करें'}
                    </span>
                  </button>
                </>
              )}
            </div>
          )}

          {/* Bottom Ang & Sub-Chapter Selector Bar */}
          <div
            className="w-full p-3 rounded-2xl border shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs"
            style={{ backgroundColor: barColors.bg, borderColor: barColors.border }}
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif font-bold" style={{ color: barColors.text }}>
                {currentLang === 'pb' ? 'ਅੰਗ ਚੁਣੋ:' : currentLang === 'en' ? 'Select Ang:' : 'अंग चुनें:'}
              </span>
              <select
                value={currentAngIdx}
                onChange={(e) => jumpToAng(Number(e.target.value))}
                className="min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-bold font-serif outline-none bg-white text-[#8B4513] border-[#8B4513]/40 cursor-pointer"
              >
                {activeAngs.map((ang, idx) => (
                  <option key={idx} value={idx}>
                    {currentLang === 'pb' ? 'ਅੰਗ' : currentLang === 'en' ? 'Ang' : 'अंग'} {ang.angNumber}: {ang.chapterTitle[currentLang] || ang.chapterTitle.hi}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => jumpToAng(0)}
                className="min-h-[40px] px-3 py-1 rounded-lg border bg-[#8B4513]/10 font-bold hover:bg-[#8B4513]/20 transition cursor-pointer whitespace-nowrap"
                style={{ color: barColors.text, borderColor: `${barColors.border}50` }}
              >
                {currentLang === 'pb' ? 'ਪਹਿਲਾ ਅੰਗ' : currentLang === 'en' ? 'First Ang' : 'प्रथम अंग'}
              </button>
              <button
                type="button"
                onClick={() => jumpToAng(activeAngs.length - 1)}
                className="min-h-[40px] px-3 py-1 rounded-lg border bg-[#8B4513]/10 font-bold hover:bg-[#8B4513]/20 transition cursor-pointer whitespace-nowrap"
                style={{ color: barColors.text, borderColor: `${barColors.border}50` }}
              >
                {currentLang === 'pb' ? 'ਆਖ਼ਰੀ ਅੰਗ' : currentLang === 'en' ? 'Last Ang' : 'अंतिम अंग'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

