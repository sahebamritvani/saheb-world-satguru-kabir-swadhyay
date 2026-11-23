import React, { useState, useEffect, useRef, forwardRef, useMemo, Component, ErrorInfo, ReactNode } from 'react';
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
  ChevronDown, 
  Sparkles, 
  Eye, 
  EyeOff, 
  Maximize2, 
  Minimize2, 
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  Search,
  MoreVertical,
  ArrowLeft,
  Droplets,
  Edit3,
  MessageSquare,
  Highlighter,
  FileText,
  LayoutGrid,
  X,
  Settings
} from 'lucide-react';
import { Language, ReaderCustomTheme, ReaderFontSize } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter } from '../services/audioDhun';
import { hindiToPunjabiWordConverter } from '../services/transliteration';

// Handle both ESM default and CommonJS export formats safely
const FlipBookComponent: any = (HTMLFlipBook as any)?.default || HTMLFlipBook;

export interface PothiPageData {
  id: string | number;
  angNumber: number;
  granthTitle: string;
  chapterTitle: string;
  verseType?: string;
  originalLines: {
    hi: string[];
    pb?: string[];
    en?: string[];
  };
  shabdarth?: Array<{ word: string; meaning: string }>;
  bhavarth?: {
    hi: string;
    pb?: string;
    en?: string;
  };
  spiritualEssence?: string;
}

interface PothiFlipBookProps {
  pages: PothiPageData[];
  initialPage?: number;
  granthName: string;
  language: Language;
  onLanguageChange?: (lang: Language) => void;
  themeMode?: ReaderCustomTheme;
  fontSize?: ReaderFontSize;
  onFontSizeChange?: (size: ReaderFontSize) => void;
  onPageChange?: (angIndex: number) => void;
  onSaveBookmark?: (verseId: string | number) => void;
  onClose?: () => void;
  onThemeChange?: (theme: ReaderCustomTheme) => void;
}

// Error boundary to gracefully catch any third-party canvas or DOM flip crashes
class PothiErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Pothi 3D Flip engine fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Single Page (Ang) component wrapped in forwardRef for react-pageflip
export const PothiAngPage = forwardRef<HTMLDivElement, {
  pageData: PothiPageData;
  pageNumber: number;
  totalPages: number;
  language: Language;
  themeMode: ReaderCustomTheme;
  fontSize: ReaderFontSize;
  onSpeak: (lines: string[]) => void;
  isSpeaking: boolean;
  onCopy: (text: string, id: string | number) => void;
  isCopied: boolean;
  onBookmark: (id: string | number) => void;
  isBookmarked: boolean;
}>(({
  pageData,
  pageNumber,
  totalPages,
  language,
  themeMode,
  fontSize,
  onSpeak,
  isSpeaking,
  onCopy,
  isCopied,
  onBookmark,
  isBookmarked
}, ref) => {
  const [showMeaning, setShowMeaning] = useState<boolean>(true);

  // Styling based on theme
  const getThemeStyles = () => {
    switch (themeMode) {
      case 'pothi':
        return {
          bg: '#FAF4E8',
          text: '#3D2817',
          frameBorder: '#8B4513',
          frameBg: '#F5EBE0',
          accent: '#8C2818',
          gold: '#C59A3F',
          shadow: 'rgba(92, 53, 19, 0.25)',
          paperTexture: 'radial-gradient(circle, rgba(245,235,224,0.9) 0%, rgba(238,220,195,0.95) 100%)',
          woodBorder: 'linear-gradient(135deg, #5C2C16 0%, #8B4513 50%, #3D1C06 100%)',
          redGutter: '#9E2A2B'
        };
      case 'black':
      case 'dark':
        return {
          bg: '#181411',
          text: '#F5EBE0',
          frameBorder: '#C59A3F',
          frameBg: '#231B15',
          accent: '#F59E0B',
          gold: '#E5B94E',
          shadow: 'rgba(0, 0, 0, 0.6)',
          paperTexture: 'linear-gradient(180deg, #1C1713 0%, #15110E 100%)',
          woodBorder: 'linear-gradient(135deg, #382414 0%, #5C3818 50%, #201309 100%)',
          redGutter: '#7A1C1D'
        };
      case 'classic':
        return {
          bg: '#F8F9FA',
          text: '#1A1A1A',
          frameBorder: '#ADB5BD',
          frameBg: '#FFFFFF',
          accent: '#8C2818',
          gold: '#6C757D',
          shadow: 'rgba(0, 0, 0, 0.05)',
          paperTexture: 'linear-gradient(to bottom, #F8F9FA 0%, #E9ECEF 100%)',
          woodBorder: 'linear-gradient(135deg, #DEE2E6 0%, #CED4DA 50%, #ADB5BD 100%)',
          redGutter: '#DEE2E6'
        };
      case 'netra':
      case 'sepia':
        return {
          bg: '#F4ECD8',
          text: '#433422',
          frameBorder: '#A77A3F',
          frameBg: '#ECE0C6',
          accent: '#965A1E',
          gold: '#B8860B',
          shadow: 'rgba(70, 50, 25, 0.2)',
          paperTexture: 'radial-gradient(circle, #F7F1E1 0%, #EBDDC1 100%)',
          woodBorder: 'linear-gradient(135deg, #7A5328 0%, #9C6B35 50%, #5A3A17 100%)',
          redGutter: '#8C3224'
        };
      case 'mool':
      case 'light':
      default:
        return {
          bg: '#FFFDF9',
          text: '#2D1B0F',
          frameBorder: '#8C2818',
          frameBg: '#FDF7EB',
          accent: '#8C2818',
          gold: '#D4AF37',
          shadow: 'rgba(0, 0, 0, 0.15)',
          paperTexture: 'linear-gradient(180deg, #FFFDF9 0%, #F9F3E5 100%)',
          woodBorder: 'linear-gradient(135deg, #7A351D 0%, #9E4624 50%, #542211 100%)',
          redGutter: '#9E2A2B'
        };
    }
  };

  const st = getThemeStyles();

  // Typography scaling
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small':
        return { bani: 'text-sm sm:text-base leading-relaxed', meaning: 'text-xs sm:text-xs leading-normal' };
      case 'large':
      case 'xlarge':
        return { bani: 'text-lg sm:text-2xl leading-loose font-bold', meaning: 'text-xs sm:text-sm leading-relaxed' };
      default:
        return { bani: 'text-base sm:text-xl leading-relaxed font-bold', meaning: 'text-xs sm:text-sm leading-relaxed' };
    }
  };

  const fCls = getFontSizeClass();

  // Extract lines for current language
  const linesToRender = pageData.originalLines[language] && pageData.originalLines[language]!.length > 0
    ? pageData.originalLines[language]!
    : language === 'pb' && pageData.originalLines.hi
    ? pageData.originalLines.hi.map(l => hindiToPunjabiWordConverter(l))
    : pageData.originalLines.hi || [];

  // Extract bhavarth for current language
  const bhavarthToRender = pageData.bhavarth?.[language] || (
    language === 'pb' && pageData.bhavarth?.hi
      ? hindiToPunjabiWordConverter(pageData.bhavarth.hi)
      : pageData.bhavarth?.hi || ''
  );

  return (
    <div 
      ref={ref} 
      className="pothi-ang-page w-full min-h-[440px] sm:min-h-[480px] aspect-[4/5] sm:aspect-[4/3] max-h-[60vh] sm:max-h-[70vh] rounded-3xl border-2 shadow-2xl relative flex flex-col items-stretch overflow-hidden"
      style={{
        backgroundColor: st.bg,
        color: st.text,
        borderColor: st.frameBorder,
        fontFamily: themeMode === 'classic' ? "system-ui, -apple-system, sans-serif" : "'Noto Serif Devanagari', 'Cinzel', serif",
      }}
    >
      <div 
        className="p-4 sm:p-6 flex-1 overflow-y-auto relative z-10 flex flex-col justify-start gap-4"
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y'
        }}
      >
        {/* UPPER PART - CLEAN BANI VIEW */}
        <div className="my-2 sm:my-3">
          <div className="text-center relative">
            {/* Chapter & Type Title */}
            <div className="mb-4 flex items-center justify-center border-b pb-1.5" style={{ borderColor: `${st.accent}20` }}>
              <span className="text-xs sm:text-sm font-black font-serif opacity-80" style={{ color: st.accent }}>
                {pageData.chapterTitle}
              </span>
            </div>

            {/* Sacred Opening Invocation on Ang 1 */}
            {pageData.angNumber === 1 && !linesToRender[0]?.includes('सत्यनाम') && !linesToRender[0]?.includes('ਸਤਯਨਾਮ') && (
              <div className="mb-3 text-center">
                <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-serif font-black bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-400/50 shadow-2xs">
                  {language === 'pb' ? '।।ਸਤ੍ਯਨਾਮ।।' : language === 'en' ? '|| Satyanam ||' : '।।सत्यनाम।।'}
                </span>
              </div>
            )}

            {/* Sacred Original Bani Text */}
            <div className="space-y-3 sm:space-y-4 py-1">
              {linesToRender.map((line, lIdx) => (
                <p 
                  key={lIdx}
                  className={`font-serif tracking-wide font-black ${fCls.bani}`}
                  style={{ color: st.text }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER PART - TRILINGUAL TRANSLATED MEANING & BHAVARTH */}
        <div className="flex-1 mt-1 flex flex-col justify-end">
          <div className="p-3 sm:p-4 border-t" style={{ borderColor: `${st.accent}20` }}>
            {/* Meaning Bar Title & Toggle */}
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b" style={{ borderColor: `${st.accent}10` }}>
              <div className="flex items-center gap-1 text-[11px] font-bold" style={{ color: st.accent }}>
                <span>
                  {language === 'hi' ? 'पावन भावार्थ एवं अर्थ' : language === 'pb' ? 'ਪਾਵਨ ਭਾਵਾਰਥ ਤੇ ਅਰਥ' : 'Spiritual Meaning & Essence'}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-200">
                  {language === 'hi' ? 'हिंदी' : language === 'pb' ? 'ਗੁਰਮੁਖੀ' : 'English'}
                </span>

                <button
                  onClick={() => setShowMeaning(!showMeaning)}
                  className="p-1 rounded text-xs opacity-70 hover:opacity-100 transition cursor-pointer"
                  title={showMeaning ? "अर्थ छिपाएं" : "अर्थ देखें"}
                >
                  {showMeaning ? <Eye className="w-3 h-3 text-amber-600" /> : <EyeOff className="w-3 h-3 opacity-60" />}
                </button>
              </div>
            </div>

            {/* Word Meanings (Shabdarth) */}
            {showMeaning && pageData.shabdarth && pageData.shabdarth.length > 0 && (
              <div className="mb-2 pb-1.5 border-b border-dashed border-amber-500/20 text-[11px] space-y-1">
                <span className="font-bold opacity-80" style={{ color: st.accent }}>
                  {language === 'hi' ? 'शब्दार्थ:' : language === 'pb' ? 'ਸ਼ਬਦਾਰਥ:' : 'Word Meanings:'}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px]">
                  {pageData.shabdarth.map((sh, sIdx) => (
                    <span key={sIdx} className="opacity-90">
                      <strong>{sh.word}:</strong> {sh.meaning}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Full Spiritual Bhavarth */}
            {showMeaning && bhavarthToRender ? (
              <p 
                className={`font-serif text-justify ${fCls.meaning} leading-relaxed opacity-95`}
                style={{ color: st.text }}
              >
                {bhavarthToRender}
              </p>
            ) : !showMeaning ? (
              <p className="text-[11px] text-center italic opacity-60 py-1">
                (भावार्थ छिपा हुआ है - देखने हेतु आँख के चिह्न पर टैप करें)
              </p>
            ) : null}

            {/* Sacred Closing Salutation on Last Ang */}
            {pageData.angNumber === totalPages && (
              <div className="mt-3 pt-2 text-center border-t border-amber-500/20">
                <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-serif font-black bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-400/50 shadow-2xs">
                  {language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।।साहेब बन्दगी साहेब।।'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-4 flex items-center justify-center opacity-30 animate-bounce pointer-events-none">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>


  );
});

export const PothiFlipBook: React.FC<PothiFlipBookProps> = ({
  pages,
  initialPage = 0,
  granthName,
  language,
  onLanguageChange,
  themeMode = 'pothi',
  fontSize = 'normal',
  onFontSizeChange,
  onPageChange,
  onThemeChange,
  onSaveBookmark,
  onClose
}) => {
  const { theme } = useAppTheme();
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speakingPageId, setSpeakingPageId] = useState<string | number | null>(null);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);
  const [bookmarkedId, setBookmarkedId] = useState<string | number | null>(null);
  const [isAutoFlipping, setIsAutoFlipping] = useState<boolean>(false);
  const [flipSpeedSec, setFlipSpeedSec] = useState<number>(12);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoFlipTimerRef = useRef<any>(null);
  const [showSettings, setShowSettings] = useState(false);

  // Touch gesture state for native fallback and smooth touch tracking
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Handle Page Flip Event from react-pageflip
  const handleFlip = (e: any) => {
    if (e && typeof e.data === 'number') {
      const newPageIdx = e.data;
      setCurrentPage(newPageIdx);
      if (onPageChange) {
        onPageChange(newPageIdx);
      }
    }
  };

  // Flip Next / Prev programmatic calls
  const flipNext = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipNext();
        return;
      } catch (err) {
        // Fall through
      }
    }
    setCurrentPage(prev => {
      const next = Math.min(pages.length - 1, prev + 1);
      if (onPageChange) onPageChange(next);
      return next;
    });
  };

  const flipPrev = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipPrev();
        return;
      } catch (err) {
        // Fall through
      }
    }
    setCurrentPage(prev => {
      const next = Math.max(0, prev - 1);
      if (onPageChange) onPageChange(next);
      return next;
    });
  };

  const jumpToPage = (pageIdx: number) => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().turnToPage(pageIdx);
        return;
      } catch (err) {
        // Fall through
      }
    }
    setCurrentPage(pageIdx);
    if (onPageChange) onPageChange(pageIdx);
  };

  // Speech Reciter
  const handleSpeakLines = (lines: string[]) => {
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
      setSpeakingPageId(null);
    } else {
      setIsSpeaking(true);
      const activeData = pages[currentPage] || pages[0];
      if (activeData) {
        setSpeakingPageId(activeData.id);
        speechReciter.speak(lines.join(' '), language, () => {
          setIsSpeaking(false);
          setSpeakingPageId(null);
        });
      }
    }
  };

  // Copy to Clipboard
  const handleCopyText = (text: string, id: string | number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Bookmark
  const handleBookmark = (id: string | number) => {
    setBookmarkedId(id);
    if (onSaveBookmark) {
      onSaveBookmark(id);
    }
    setTimeout(() => setBookmarkedId(null), 2500);
  };

  // Auto Page Turner Effect
  useEffect(() => {
    if (isAutoFlipping) {
      autoFlipTimerRef.current = setInterval(() => {
        if (currentPage < pages.length - 1) {
          flipNext();
        } else {
          setIsAutoFlipping(false);
        }
      }, flipSpeedSec * 1000);
    } else {
      if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current);
    }
    return () => {
      if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current);
    };
  }, [isAutoFlipping, currentPage, pages.length, flipSpeedSec]);

  // Fullscreen handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Touch handlers for direct touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      flipNext();
    } else if (diff < -45) {
      flipPrev();
    }
    setTouchStartX(null);
  };

  if (!pages || pages.length === 0) {
    const isDarkFolio = themeMode === 'black' || themeMode === 'dark' || themeMode === 'netra';
    return (
      <div className="w-full max-w-2xl mx-auto px-3 py-6">
        <div
          className={`rounded-3xl border px-6 py-10 sm:px-10 sm:py-14 text-center space-y-5 shadow-lg ${
            isDarkFolio
              ? 'bg-[#1C1713] border-amber-900/50 text-[#F5EBE0]'
              : 'bg-[#FBF9F5] border-stone-200 text-[#2D1B0F]'
          }`}
        >
          <p className="text-xs uppercase tracking-widest font-serif opacity-75">
            {language === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : language === 'en' ? '|| Satyanaam ||' : '।। सत्यनाम ।।'}
          </p>
          <div className="border-t border-b border-current/15 py-6 space-y-2.5">
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              {granthName || (language === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ' : language === 'en' ? 'Nitnem Gutka Saheb' : 'नितनेम गुटका साहेब')}
            </h3>
            <p className="text-sm font-serif opacity-80 max-w-md mx-auto leading-relaxed">
              {language === 'pb'
                ? 'ਇਸ ਪੋਥੀ ਅਧਿਆਇ ਦਾ ਪਾਵਨ ਪਾਠ ਜੋੜੇ ਜਾਣ ਲਈ ਇਹ ਪੰਨਾ ਖਾਲੀ ਤੇ ਤਿਆਰ ਹੈ।'
                : language === 'en'
                ? 'This 3D Pothi folio is clean and ready for the upcoming authentic Path text.'
                : 'इस ३D पोथी पन्ने पर पावन पाठ संकलित किए जाने हेतु यह स्थान पूर्णतः रिक्त एवं तैयार है।'}
            </p>
          </div>
          <p className="text-xs font-serif font-semibold opacity-75">
            {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
          </p>
          {onClose && (
            <div className="pt-1">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#8B4513] hover:bg-[#72380f] text-white font-serif font-bold text-xs sm:text-sm transition cursor-pointer inline-flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>
                  {language === 'pb' ? 'ਪਠਨ ਤੇ ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Back to Reader' : 'पठन पर वापस जाएं'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Pure Clean Fallback View
  const Fallback3DView = (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full bg-white dark:bg-zinc-950 transition-all duration-300"
    >
      <PothiAngPage
        pageData={pages[currentPage] || pages[0]}
        pageNumber={currentPage + 1}
        totalPages={pages.length}
        language={language}
        themeMode={themeMode}
        fontSize={fontSize}
        onSpeak={handleSpeakLines}
        isSpeaking={isSpeaking && speakingPageId === (pages[currentPage]?.id)}
        onCopy={handleCopyText}
        isCopied={copiedId === (pages[currentPage]?.id)}
        onBookmark={handleBookmark}
        isBookmarked={bookmarkedId === (pages[currentPage]?.id)}
      />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full flex flex-col items-stretch transition-all duration-300 relative ${
        isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-zinc-950 text-black dark:text-white overflow-hidden' : 'bg-white dark:bg-zinc-950'
      }`}
    >
      {/* Minimal Top Bar: Title & Ang only */}
      <div 
        style={{
          backgroundColor: themeMode === 'classic' ? '#FFFFFF' : theme.mode === 'mystic_dark' ? '#1A1109' : '#FFFFFF',
          borderBottom: `1px solid ${theme.cardBorder}`
        }}
        className="w-full h-14 px-4 flex items-center justify-between z-30 shadow-sm relative"
      >
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition active:scale-90"
          style={{ color: theme.textSecondary }}
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[13px] font-bold truncate max-w-[220px]" style={{ color: theme.textPrimary }}>
            {granthName}
          </h2>
          <p className="text-[10px] font-bold opacity-70" style={{ color: theme.textSecondary }}>
            {language === 'pb' ? 'ਪੰਨਾ' : language === 'en' ? 'Ang' : 'अंग'} {currentPage + 1} / {pages.length}
          </p>
        </div>

        <button 
          onClick={toggleFullscreen}
          className={`min-h-[40px] px-2.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition active:scale-90 flex items-center gap-1 text-xs font-bold whitespace-nowrap ${
            isFullscreen ? 'bg-[#8B2500] text-white hover:bg-amber-700' : ''
          }`}
          style={isFullscreen ? undefined : { color: theme.textSecondary }}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={20} />}
          {isFullscreen && (
            <span>
              {language === 'pb' ? 'ਆਮ ਸਕ੍ਰੀਨ (ਵਾਪਸ ਆਓ)' : language === 'en' ? 'Return' : 'वापस आएं'}
            </span>
          )}
        </button>
        
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition active:scale-90"
          style={{ color: theme.textSecondary }}
        >
          <Settings size={20} />
        </button>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowSettings(false)}>
          <div className="w-full sm:w-96 bg-white dark:bg-zinc-900 p-6 rounded-t-3xl sm:rounded-3xl border border-gray-200 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Settings</h3>
              <button onClick={() => setShowSettings(false)}><X size={20}/></button>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Font Size */}
              <div className="flex justify-between items-center">
                <span>Font Size</span>
                <div className="flex gap-2">
                  {(['small', 'normal', 'large', 'xlarge'] as ReaderFontSize[]).map(size => (
                    <button key={size} onClick={() => onFontSizeChange && onFontSizeChange(size)} className={`px-3 py-1 rounded ${fontSize === size ? 'bg-[#8B2500] text-white' : 'bg-gray-200'}`}>{size}</button>
                  ))}
                </div>
              </div>

              {/* Bold Toggle */}
              <div className="flex justify-between items-center">
                <span>Bold Text</span>
                <input type="checkbox" className="w-5 h-5" />
              </div>

              {/* Day/Night Toggle */}
              <div className="flex justify-between items-center">
                <span>Day/Night Mode</span>
                <button 
                  onClick={() => onThemeChange && onThemeChange(themeMode === 'pothi' ? 'dark' : 'pothi')} 
                  className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer"
                >
                  Toggle
                </button>
              </div>

              {/* Language Selection */}
              <div className="border-t pt-4">
                <div className="flex gap-2 mb-2">
                  <button onClick={() => onLanguageChange && onLanguageChange('hi')} className={`flex-1 py-2 rounded ${language === 'hi' ? 'bg-[#8B2500] text-white' : 'bg-gray-200'}`}>Hindi</button>
                  <button onClick={() => onLanguageChange && onLanguageChange('pb')} className={`flex-1 py-2 rounded ${language === 'pb' ? 'bg-[#8B2500] text-white' : 'bg-gray-200'}`}>Punjabi</button>
                  <button onClick={() => onLanguageChange && onLanguageChange('en')} className={`flex-1 py-2 rounded ${language === 'en' ? 'bg-[#8B2500] text-white' : 'bg-gray-200'}`}>English</button>
                </div>
                {/* Script indicator */}
                <div className="text-xs text-gray-500 text-center">
                  Script: {language === 'hi' ? 'Devanagari' : language === 'pb' ? 'Gurmukhi' : 'ABC'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area: 3D Single Ang Page Flip Experience */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full overflow-y-auto px-3 sm:px-6 py-4 bg-amber-50/20 dark:bg-zinc-950 flex flex-col justify-between"
      >
        <PothiErrorBoundary fallback={Fallback3DView}>
          <div className="w-full max-w-3xl sm:max-w-4xl mx-auto my-auto space-y-4">
            {/* 3D Page Card Container */}
            <div className="w-full shadow-2xl rounded-3xl overflow-hidden transition-all duration-300">
              <PothiAngPage
                pageData={pages[currentPage] || pages[0]}
                pageNumber={currentPage + 1}
                totalPages={pages.length}
                language={language}
                themeMode={themeMode === 'pothi' ? 'classic' : themeMode}
                fontSize={fontSize}
                onSpeak={handleSpeakLines}
                isSpeaking={isSpeaking && speakingPageId === (pages[currentPage]?.id)}
                onCopy={handleCopyText}
                isCopied={copiedId === (pages[currentPage]?.id)}
                onBookmark={handleBookmark}
                isBookmarked={bookmarkedId === (pages[currentPage]?.id)}
              />
            </div>

            {/* Bottom 3D Page Navigation Controller Dock */}
            <div className="flex items-center justify-between gap-3 p-3 bg-white/90 dark:bg-zinc-900/90 rounded-2xl border border-amber-500/30 shadow-lg backdrop-blur-sm">
              <button
                type="button"
                onClick={flipPrev}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer ${
                  currentPage === 0
                    ? 'opacity-30 cursor-not-allowed bg-gray-100 dark:bg-zinc-800 text-gray-400'
                    : 'bg-[#8B2500] text-white shadow-md hover:bg-amber-700 active:scale-95'
                }`}
              >
                <ChevronLeft size={16} />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ ਪੰਨਾ' : language === 'en' ? 'Prev Page' : 'पिछला पन्ना'}</span>
              </button>

              <div className="text-center font-serif">
                <span className="text-xs font-mono font-black text-amber-800 dark:text-amber-300 block">
                  📖 {currentPage + 1} / {pages.length}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 block">
                  {language === 'pb' ? 'ਸਵਾਈਪ ਕਰੋ / ਬਟਨ ਦਬਾਓ' : 'स्वाइप करें या बटन दबाएं'}
                </span>
              </div>

              <button
                type="button"
                onClick={flipNext}
                disabled={currentPage >= pages.length - 1}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-serif flex items-center gap-1.5 transition cursor-pointer ${
                  currentPage >= pages.length - 1
                    ? 'opacity-30 cursor-not-allowed bg-gray-100 dark:bg-zinc-800 text-gray-400'
                    : 'bg-[#8B2500] text-white shadow-md hover:bg-amber-700 active:scale-95'
                }`}
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ ਪੰਨਾ' : language === 'en' ? 'Next Page' : 'अगला पन्ना'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </PothiErrorBoundary>
      </div>
    </div>
  );
};
