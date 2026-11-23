import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Scroll, 
  Columns, 
  Palette, 
  Type, 
  Sliders, 
  Highlighter, 
  Play, 
  Pause, 
  Target, 
  ArrowLeft, 
  Sparkles, 
  Check,
  Zap,
  History,
  Trash2,
  Clock,
  RotateCcw,
  ChevronRight,
  Timer,
  Volume2,
  VolumeX,
  Moon,
  Sun
} from 'lucide-react';
import { Language, SACRED_BRANDING, ReaderCustomTheme, ReaderFontSize, ReaderTarget, AppView } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { 
  getReadingHistory, 
  clearReadingHistory, 
  ReadingHistoryItem 
} from '../services/readingHistoryStore';

interface AdvancedReadingSuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigateView?: (view: AppView) => void;
}

export const AdvancedReadingSuiteModal: React.FC<AdvancedReadingSuiteModalProps> = ({
  isOpen,
  onClose,
  language,
  onNavigateView,
}) => {
  const { 
    theme, 
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    themeMode,
    setThemeMode,
    isMuted,
    setIsMuted,
    readingFramework,
    setReadingFramework,
    autoScrollActive,
    setAutoScrollActive,
    autoScrollSpeed,
    setAutoScrollSpeed,
    zenModeActive,
    setZenModeActive,
    larivaarModeActive,
    setLarivaarModeActive,
    visraamModeActive,
    setVisraamModeActive
  } = useAppTheme();

  const isHi = language === 'hi';
  const isPb = language === 'pb';

  const [activeTab, setActiveTab] = useState<'suite' | 'history'>('suite');
  const [historyItems, setHistoryItems] = useState<ReadingHistoryItem[]>([]);

  // Font Size Slider Pixel State (12px to 32px)
  const [fontPixelSize, setFontPixelSize] = useState<number>(() => {
    if (fontSize === 'small') return 14;
    if (fontSize === 'medium') return 18;
    if (fontSize === 'large') return 24;
    return 18;
  });

  const [activeTheme, setActiveTheme] = useState<ReaderCustomTheme>(() => {
    try {
      return (localStorage.getItem('sahebworld_reader_theme') as any) || 'mool';
    } catch {
      return 'mool';
    }
  });

  const [activeHighlighter, setActiveHighlighter] = useState<'saffron' | 'green' | 'yellow' | 'none'>(() => {
    try {
      return (localStorage.getItem('sahebworld_active_highlighter') as any) || 'saffron';
    } catch {
      return 'saffron';
    }
  });

  useEffect(() => {
    const handleZenToggle = () => {
      setZenModeActive(!zenModeActive);
    };
    const handleLarivaarToggle = () => {
      setLarivaarModeActive(!larivaarModeActive);
    };
    const handleVisraamToggle = () => {
      setVisraamModeActive(!visraamModeActive);
    };

    window.addEventListener('sahebworld_toggle_zen_mode', handleZenToggle);
    window.addEventListener('sahebworld_toggle_larivaar_mode', handleLarivaarToggle);
    window.addEventListener('sahebworld_toggle_visraam_mode', handleVisraamToggle);
    return () => {
      window.removeEventListener('sahebworld_toggle_zen_mode', handleZenToggle);
      window.removeEventListener('sahebworld_toggle_larivaar_mode', handleLarivaarToggle);
      window.removeEventListener('sahebworld_toggle_visraam_mode', handleVisraamToggle);
    };
  }, [zenModeActive, larivaarModeActive, visraamModeActive, setZenModeActive, setLarivaarModeActive, setVisraamModeActive]);

  const [targetPace, setTargetPace] = useState<ReaderTarget>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_target_pace');
      return saved ? (parseInt(saved, 10) as ReaderTarget) : 21;
    } catch {
      return 21;
    }
  });

  const [savedSuccessNotice, setSavedSuccessNotice] = useState<string | null>(null);

  // --- DYNAMIC READING SPEED & WORD COUNT CALCULATIONS ---
  const [currentReadingText, setCurrentReadingText] = useState<string>(() => {
    try {
      return localStorage.getItem('sahebworld_current_reading_text') || '';
    } catch {
      return '';
    }
  });

  const [currentReadingTitle, setCurrentReadingTitle] = useState<string>(() => {
    try {
      return localStorage.getItem('sahebworld_current_reading_title') || '';
    } catch {
      return '';
    }
  });

  const [currentReadingProgress, setCurrentReadingProgress] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_current_reading_progress');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [readingWpm, setReadingWpm] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_reading_wpm');
      return saved ? parseInt(saved, 10) : 140;
    } catch {
      return 140;
    }
  });

  useEffect(() => {
    const handleReadingUpdate = () => {
      try {
        setCurrentReadingText(localStorage.getItem('sahebworld_current_reading_text') || '');
        setCurrentReadingTitle(localStorage.getItem('sahebworld_current_reading_title') || '');
        const savedProgress = localStorage.getItem('sahebworld_current_reading_progress');
        setCurrentReadingProgress(savedProgress ? parseInt(savedProgress, 10) : 0);
        const savedWpm = localStorage.getItem('sahebworld_reading_wpm');
        if (savedWpm) {
          setReadingWpm(parseInt(savedWpm, 10));
        }
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener('sahebworld_current_reading_updated', handleReadingUpdate);
    // Initial read
    handleReadingUpdate();

    return () => {
      window.removeEventListener('sahebworld_current_reading_updated', handleReadingUpdate);
    };
  }, [isOpen]);

  const calculatedRemainingMins = React.useMemo(() => {
    if (!currentReadingText) return 2;
    const wordCount = currentReadingText.trim().split(/\s+/).filter(Boolean).length;
    const totalWordsEstimate = Math.max(wordCount, 15);
    const remainingFraction = 1 - (currentReadingProgress / 100);
    const remainingWords = Math.round(totalWordsEstimate * Math.max(0.1, remainingFraction));
    const mins = Math.ceil(remainingWords / readingWpm);
    return Math.max(1, mins);
  }, [currentReadingText, currentReadingProgress, readingWpm]);

  useEffect(() => {
    if (isOpen) {
      setHistoryItems(getReadingHistory());
      const handleHistoryUpdate = () => {
        setHistoryItems(getReadingHistory());
      };
      window.addEventListener('sahebworld_reading_history_updated', handleHistoryUpdate);
      return () => window.removeEventListener('sahebworld_reading_history_updated', handleHistoryUpdate);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSliderFontChange = (newPx: number) => {
    setFontPixelSize(newPx);
    if (newPx <= 15) {
      setFontSize('small');
    } else if (newPx <= 21) {
      setFontSize('medium');
    } else {
      setFontSize('large');
    }
  };

  const handleSelectReadingMode = (modeId: string) => {
    sacredHaptics.lightTap();
    // Ensure mutual exclusivity: reset all auxiliary mode flags first
    setAutoScrollActive(false);
    setZenModeActive(false);
    setLarivaarModeActive(false);
    setVisraamModeActive(false);
    setReadingFramework('scroll');

    switch (modeId) {
      case 'scroll':
        setReadingFramework('scroll');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'scroll');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'scroll' } }));
        } catch {}
        showToast(isHi ? 'निरंतर स्क्रॉल मोड सक्रिय!' : isPb ? 'ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ ਚਾਲੂ!' : 'Continuous Scroll Mode Active!');
        break;
      case 'flip':
        setReadingFramework('flip');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'flip');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'flip' } }));
        } catch {}
        showToast(isHi ? '३D पोथी पन्ना मोड सक्रिय!' : isPb ? '੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ ਚਾਲੂ!' : '3D Pothi Flip Mode Active!');
        break;
      case 'parallel':
        setReadingFramework('parallel');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'parallel');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'parallel' } }));
        } catch {}
        showToast(isHi ? 'समानांतर तुलना मोड सक्रिय!' : isPb ? 'ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ ਚਾਲੂ!' : 'Parallel Translation Mode Active!');
        break;
      case 'zen':
        setZenModeActive(true);
        try {
          localStorage.setItem('sahebworld_zen_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_zen_mode'));
        } catch {}
        showToast(isHi ? 'ज़ेन एकाग्रता मोड सक्रिय!' : isPb ? 'ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ ਚਾਲੂ!' : 'Zen Focus Mode Active!');
        onClose();
        break;
      case 'larivaar':
        setLarivaarModeActive(true);
        try {
          localStorage.setItem('sahebworld_larivaar_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_larivaar_mode'));
        } catch {}
        showToast(isHi ? 'लारीवार अखंड पाठ मोड सक्रिय!' : isPb ? 'ਲਾਰੀਵਾਰ ਅਖੰਡ ਪਾਠ ਮੋਡ ਚਾਲੂ!' : 'Larivaar Mode Active!');
        break;
      case 'visraam':
        setVisraamModeActive(true);
        try {
          localStorage.setItem('sahebworld_visraam_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_visraam_mode'));
        } catch {}
        showToast(isHi ? 'विश्राम हाइलाइट मोड सक्रिय!' : isPb ? 'ਵਿਸ਼ਰਾਮ ਹයිਲਾਈਟ ਮੋਡ ਚਾਲੂ!' : 'Visraam Highlight Mode Active!');
        break;
      case 'autoplay':
        setAutoScrollActive(true);
        try {
          localStorage.setItem('sahebworld_autoscroll_active', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_autoscroll_toggled', { detail: { active: true, speed: autoScrollSpeed } }));
        } catch {}
        showToast(isHi ? 'स्वतः स्क्रॉल एवं श्वास मोड सक्रिय!' : isPb ? 'ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ ਮੋਡ ਚਾਲੂ!' : 'Auto-Scroll & Breath Mode Active!');
        break;
      case 'swadhyay':
        onClose();
        if (onNavigateView) onNavigateView('swadhyay');
        break;
      case 'akhand-path':
        onClose();
        if (onNavigateView) onNavigateView('akhand-path');
        break;
    }
  };

  const handleSpeedChange = (speed: number) => {
    sacredHaptics.lightTap();
    setAutoScrollSpeed(speed);
    try {
      localStorage.setItem('sahebworld_autoscroll_speed', String(speed));
      window.dispatchEvent(new CustomEvent('sahebworld_autoscroll_speed_changed', { detail: { speed } }));
    } catch {}
    showToast(`${isHi ? 'स्क्रॉल गति' : isPb ? 'ਸਕ੍ਰੋਲ ਗਤੀ' : 'Scroll Speed'} ${speed}x`);
  };

  const handleThemeChange = (thm: ReaderCustomTheme) => {
    sacredHaptics.lightTap();
    setActiveTheme(thm);
    try {
      localStorage.setItem('sahebworld_reader_theme', thm);
      window.dispatchEvent(new CustomEvent('sahebworld_reader_theme_changed', { detail: { theme: thm } }));
      
      // Also seamlessly transition the global app theme mode between bhojpatra (light) and mystic_dark (night/dark)
      const thmStr = thm as string;
      if (thmStr === 'deep_sepia' || thmStr === 'black' || thmStr === 'midnight' || thmStr === 'oled' || thmStr === 'dark') {
        setThemeMode('mystic_dark');
      } else {
        setThemeMode('bhojpatra');
      }
    } catch {}
    showToast(isHi ? 'पठन थीम लागू हुई!' : isPb ? 'ਥੀਮ ਲਾਗੂ ਹੋਈ!' : 'Reader Theme Applied!');
  };

  const handleHighlighterChange = (hl: 'saffron' | 'green' | 'yellow' | 'none') => {
    sacredHaptics.lightTap();
    setActiveHighlighter(hl);
    try {
      localStorage.setItem('sahebworld_active_highlighter', hl);
      window.dispatchEvent(new CustomEvent('sahebworld_highlighter_changed', { detail: { color: hl } }));
    } catch {}
    showToast(isHi ? 'हाइलाइटर अद्यतित!' : isPb ? 'ਹਾਈਲਾਈਟਰ ਅੱਪਡੇਟ ਹੋਇਆ!' : 'Highlighter Color Set!');
  };

  const handleTargetChange = (tgt: ReaderTarget) => {
    sacredHaptics.lightTap();
    setTargetPace(tgt);
    try {
      localStorage.setItem('sahebworld_target_pace', String(tgt));
      window.dispatchEvent(new CustomEvent('sahebworld_target_pace_changed', { detail: { target: tgt } }));
    } catch {}
    showToast(`${isHi ? 'दैनिक लक्ष्य' : isPb ? 'ਦੈਨਿਕ ਟੀਚਾ' : 'Daily Goal'}: ${tgt} ${isHi ? 'पद्य' : isPb ? 'ਪਦ' : 'Verses'}`);
  };

  const handleClearHistory = () => {
    sacredHaptics.lightTap();
    clearReadingHistory();
    setHistoryItems([]);
    showToast(isHi ? 'पठन इतिहास साफ़ कर दिया गया!' : isPb ? 'ਪਠਨ ਇਤਿਹਾਸ ਸਾਫ਼ ਹੋ ਗਿਆ!' : 'Reading history cleared!');
  };

  const handleResumeHistoryItem = (item: ReadingHistoryItem) => {
    sacredHaptics.lightTap();
    onClose();
    if (onNavigateView) {
      if (item.type === 'nitnem') {
        onNavigateView('nitnem-gutka');
      } else if (item.type === 'granth') {
        onNavigateView('grantha');
      } else if (item.type === 'ulatvasi') {
        onNavigateView('ulatvasi-library');
      } else if (item.type === 'aarti') {
        onNavigateView('aarti-sanctuary');
      } else if (item.type === 'chintan') {
        onNavigateView('dainik-chintan');
      } else {
        onNavigateView('swadhyay');
      }
    }
  };

  const showToast = (msg: string) => {
    setSavedSuccessNotice(msg);
    setTimeout(() => setSavedSuccessNotice(null), 2500);
  };

  const formatTimeAgo = (isoDate: string) => {
    try {
      const d = new Date(isoDate);
      const diffMs = Date.now() - d.getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 1) return isHi ? 'अभी-अभी' : isPb ? 'ਹੁਣੇ-ਹੁਣੇ' : 'Just now';
      if (diffMins < 60) return `${diffMins} ${isHi ? 'मिनट पहले' : isPb ? 'ਮਿੰਟ ਪਹਿਲਾਂ' : 'mins ago'}`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours} ${isHi ? 'घंटे पहले' : isPb ? 'ਘੰਟੇ ਪਹਿਲਾਂ' : 'hours ago'}`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays} ${isHi ? 'दिन पहले' : isPb ? 'ਦਿਨ ਪਹਿਲਾਂ' : 'days ago'}`;
    } catch {
      return '';
    }
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  return (
    <div
      id="advanced-reading-suite-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'advanced-reading-suite-overlay') {
          onClose();
        }
      }}
      className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
    >
      <div
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] transition-all"
      >
        {/* Modal Top Sacred Header Bar */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-b py-2.5 px-4 text-center select-none flex items-center justify-between shrink-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-300 shadow-2xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm sm:text-base leading-tight">
                {isHi ? 'उन्नत पठन साधन (Advanced Reading Suite)' : isPb ? 'ਉੱਨਤ ਪਠਨ ਸਾਧਨ' : 'Advanced Reading Suite'}
              </h3>
              <p style={{ color: theme.textSecondary }} className="text-[10px] font-serif opacity-80">
                {isHi ? '५ विशेष समूह व अन्तिम १० पठन इतिहास' : isPb ? '੫ ਵਿਸ਼ੇਸ਼ ਸਮੂਹ ਤੇ ਪਠਨ ਇਤਿਹਾਸ' : '5 Core Groups & Last 10 Reading History'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              onClose();
            }}
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="px-3 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition cursor-pointer hover:scale-105 active:scale-95 shrink-0 shadow-2xs"
            title={isHi ? 'वापस जाएं' : isPb ? 'ਵਾਪਸ ਜਾਓ' : 'Back'}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif">{isHi ? 'वापस जाएं' : isPb ? 'ਵਾਪਸ ਜਾਓ' : 'Back'}</span>
          </button>
        </div>

        {/* Tab Selector: Reading Suite vs Reading History */}
        <div className="flex items-center border-b p-1.5 gap-1 shrink-0" style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}>
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveTab('suite');
            }}
            style={{
              backgroundColor: activeTab === 'suite' ? theme.cardBg : 'transparent',
              borderColor: activeTab === 'suite' ? theme.accentGold : 'transparent',
              color: activeTab === 'suite' ? theme.sacredMaroon : theme.textMuted,
            }}
            className="flex-1 py-1.5 px-3 rounded-xl border font-serif font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isHi ? '🎛️ पठन साधन (Controls)' : isPb ? '🎛️ ਪਠਨ ਸਾਧਨ' : '🎛️ Controls'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveTab('history');
            }}
            style={{
              backgroundColor: activeTab === 'history' ? theme.cardBg : 'transparent',
              borderColor: activeTab === 'history' ? theme.accentGold : 'transparent',
              color: activeTab === 'history' ? theme.sacredMaroon : theme.textMuted,
            }}
            className="flex-1 py-1.5 px-3 rounded-xl border font-serif font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs relative"
          >
            <History className="w-3.5 h-3.5" />
            <span>{isHi ? '📜 पठन इतिहास (Last 10)' : isPb ? '📜 ਪਠਨ ਇਤਿਹਾਸ' : '📜 Reading History'}</span>
            {historyItems.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white text-[9px] font-mono flex items-center justify-center font-bold">
                {historyItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Success Toast Notice */}
        {savedSuccessNotice && (
          <div className="bg-[#8B2500] text-white px-3 py-1.5 text-xs font-bold font-serif text-center flex items-center justify-center gap-1.5 animate-fadeIn shrink-0">
            <Check className="w-3.5 h-3.5" />
            <span>{savedSuccessNotice}</span>
          </div>
        )}

        {/* Tab 1: Scrollable Body - 9 Sacred Reading Modes & Suite Controls */}
        {activeTab === 'suite' ? (
          <div className="overflow-y-auto px-4 sm:px-6 py-5 space-y-6 flex-1 overscroll-contain pb-20">
            
            {/* 🔱 9 SACRED READING MODES SELECTOR (੯ ਪਾਵਨ ਪਾਠ ਮੋਡ) */}
            <div className="p-4 rounded-3xl bg-amber-500/10 dark:bg-amber-950/30 border-2 border-amber-500/30 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔱</span>
                  <div>
                    <h3 className="font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                      {isPb ? '੯ ਪਾਵਨ ਪਾਠ ਮੋਡ (9 Sacred Reading Modes)' : isHi ? '९ प्रकार के पावन पाठ मोड (9 Sacred Reading Modes)' : '9 Sacred Reading Modes'}
                    </h3>
                    <p className="text-[10px] text-amber-800/80 dark:text-amber-300/80 font-serif">
                      {isPb ? 'ਆਪਣੀ ਪਸੰਦ ਦਾ ਪਾਠ ਮੋਡ ਚੁਣੋ' : isHi ? 'अपनी पसंद का पाठ मोड चुनें' : 'Choose your preferred reading mode'}
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#8B2500] text-white text-[10px] font-bold font-mono">
                  9 MODES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: 'scroll',
                    icon: '📜',
                    titleHi: '१. निरंतर स्क्रॉल मोड',
                    titlePb: '੧. ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ',
                    descHi: 'अखंड ऊर्ध्वाधर स्क्रॉल प्रवाह व ऑटो-स्क्रॉल',
                    descPb: 'ਅਖੰਡ ਸਕ੍ਰੋਲ ਪ੍ਰਵਾਹ ਤੇ ਆਟੋ-ਸਕ੍ਰੋਲ',
                    active: readingFramework === 'scroll' && !autoScrollActive && !zenModeActive && !larivaarModeActive && !visraamModeActive,
                    action: () => handleSelectReadingMode('scroll'),
                  },
                  {
                    id: 'flip',
                    icon: '📖',
                    titleHi: '२. ३D पोथी पन्ना मोड',
                    titlePb: '੨. ੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ',
                    descHi: 'हस्तलिखित ३D पोथी पन्ना पलटने का अनुभव',
                    descPb: 'ਹਸਤਲਿਖਤ ੩D ਪੋਥੀ ਪੰਨਾ ਪਲਟਣ ਦਾ ਅਨੁਭਵ',
                    active: readingFramework === 'flip',
                    action: () => handleSelectReadingMode('flip'),
                  },
                  {
                    id: 'parallel',
                    icon: '📊',
                    titleHi: '३. समानांतर द्विभाषिक तुलना मोड',
                    titlePb: '੩. ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ',
                    descHi: 'मूल वाणी व पद-प्रति-पद अर्थ साथ-साथ',
                    descPb: 'ਮੂਲ ਬਾਣੀ ਤੇ ਅਰਥ ਨਾਲ-ਨਾਲ',
                    active: readingFramework === 'parallel',
                    action: () => handleSelectReadingMode('parallel'),
                  },
                  {
                    id: 'zen',
                    icon: '🧘',
                    titleHi: '४. सहज पाठ एवं ज़ेन एकाग्रता मोड',
                    titlePb: '੪. ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ',
                    descHi: 'बिना रुकावट केवल पावन वाणी पर निर्विकल्प ध्यान',
                    descPb: 'ਬਿਨਾ ਰੁਕਾਵਟ ਕੇਵਲ ਬਾਣੀ ਉੱਤੇ ਧਿਆਨ',
                    active: zenModeActive,
                    action: () => handleSelectReadingMode('zen'),
                  },
                  {
                    id: 'larivaar',
                    icon: '🪷',
                    titleHi: '५. लारीवार अखंड पाठ मोड',
                    titlePb: '੫. ਲਾਰੀਵਾਰ ਅਖੰਡ ਮੋਡ',
                    descHi: 'शब्दों के बीच बिना स्पेस के पारंपरिक अखंड पाठ',
                    descPb: 'ਸ਼ਬਦਾਂ ਵਿਚਕਾਰ ਬਿਨਾ ਸਪੇਸ ਦੇ ਅਖੰਡ ਪਾਠ',
                    active: larivaarModeActive,
                    action: () => handleSelectReadingMode('larivaar'),
                  },
                  {
                    id: 'visraam',
                    icon: '🎯',
                    titleHi: '६. विश्राम हाइलाइट मोड',
                    titlePb: '੬. ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ ਮੋਡ',
                    descHi: 'शुद्ध उच्चारण व लय हेतु विश्राम स्थलों का अंकन',
                    descPb: 'ਸ਼ੁੱਧ ਉੱਚਾਰਣ ਤੇ ਲਯ ਹੇਤੂ ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ',
                    active: visraamModeActive,
                    action: () => handleSelectReadingMode('visraam'),
                  },
                  {
                    id: 'autoplay',
                    icon: '⚡',
                    titleHi: '७. स्वतः स्क्रॉल एवं दिव्य श्वास चक्र',
                    titlePb: '੭. ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ ਚੱਕਰ',
                    descHi: '0.5x-5x गति स्क्रॉल, श्वास प्राणायाम व पृष्ठभूमि धुन',
                    descPb: '੦.੫x-੫x ਗਤੀ ਸਕ੍ਰੋਲ, ਸੁਆਸ ਚੱਕਰ ਤੇ ਪਿਛੋਕੜ ਧੁਨ',
                    active: autoScrollActive,
                    action: () => handleSelectReadingMode('autoplay'),
                  },
                  {
                    id: 'swadhyay',
                    icon: '📚',
                    titleHi: '८. स्वाध्याय ८-चरण मर्म चिंतन मोड',
                    titlePb: '੮. ਸਵਾਧਿਆਇ ੮-ਚਰਣ ਮਨਨ ਮੋਡ',
                    descHi: 'वाणी का क्रमबद्ध ८ चरणों में आध्यात्मिक स्वाध्याय',
                    descPb: 'ਬਾਣੀ ਦਾ ਕ੍ਰਮਬੱਧ ੮ ਚਰਣਾਂ ਵਿਚ ਗੂੜ੍ਹ ਅਧਿਐਨ',
                    active: false,
                    action: () => handleSelectReadingMode('swadhyay'),
                  },
                  {
                    id: 'akhand-path',
                    icon: '🔱',
                    titleHi: '९. अखंड पाठ मोड',
                    titlePb: '੯. ਅਖੰਡ ਪਾਠ ਮੋਡ',
                    descHi: 'अविराम साखी पाठ',
                    descPb: 'ਨਿਰੰਤਰ ਸਾਖੀ ਪਾਠ',
                    active: false,
                    action: () => handleSelectReadingMode('akhand-path'),
                  },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      mode.action();
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                      mode.active
                        ? 'bg-[#8B2500] text-white border-amber-600 shadow-md ring-2 ring-amber-400/40'
                        : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-amber-400'
                    }`}
                  >
                    <span className="text-2xl shrink-0 leading-none pt-0.5">{mode.icon}</span>
                    <div className="min-w-0 flex-1">
                      <span className="font-serif font-black text-xs block leading-snug">
                        {isPb ? mode.titlePb : mode.titleHi}
                      </span>
                      <span className={`text-[10px] font-serif block mt-0.5 line-clamp-1 ${mode.active ? 'text-amber-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {isPb ? mode.descPb : mode.descHi}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 🚀 Mobile Optimized Quick Controls Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Framework Controls */}
              <button
                type="button"
                onClick={() => handleSelectReadingMode('scroll')}
                className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif ${
                  readingFramework === 'scroll' 
                    ? 'bg-[#8B2500] text-white border-[#7C1D00] font-bold shadow-md' 
                    : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-zinc-800'
                }`}
              >
                <span className="text-xl">📜</span>
                <span className="text-[11px] leading-tight font-black">{isPb ? 'ਨਿਰੰਤਰ' : 'निरंतर'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectReadingMode('parallel')}
                className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif ${
                  readingFramework === 'parallel' 
                    ? 'bg-[#8B2500] text-white border-[#7C1D00] font-bold shadow-md' 
                    : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-zinc-800'
                }`}
              >
                <span className="text-xl">📖</span>
                <span className="text-[11px] leading-tight font-black">{isPb ? 'ਸਮਾਨਾਂਤਰ' : 'समानांतर'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectReadingMode('flip')}
                className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif ${
                  readingFramework === 'flip' 
                    ? 'bg-[#8B2500] text-white border-[#7C1D00] font-bold shadow-md' 
                    : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-zinc-800'
                }`}
              >
                <span className="text-xl">🪞</span>
                <span className="text-[11px] leading-tight font-black">{isPb ? '੩D ਪੋਥੀ' : '३D पोथी'}</span>
              </button>

              {/* Theme Control */}
              <button
                type="button"
                onClick={() => handleThemeChange('mool')}
                className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif ${
                  activeTheme === 'mool' 
                    ? 'bg-[#8B2500] text-white border-[#7C1D00] font-bold shadow-md' 
                    : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-zinc-800'
                }`}
              >
                <Palette className="w-5 h-5 text-amber-600" />
                <span className="text-[11px] leading-tight font-black">{isPb ? 'ਮੂਲ' : 'मूल'}</span>
              </button>

              {/* Combined Typography Control (A A • 7XL) */}
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-3 rounded-2xl border flex flex-col items-center justify-center gap-1"
              >
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSliderFontChange(Math.max(12, fontPixelSize - 2));
                    }}
                    className="text-sm font-bold text-amber-700 active:scale-90 px-1"
                  >
                    A
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSliderFontChange(Math.min(32, fontPixelSize + 2));
                    }}
                    className="text-lg font-black text-amber-700 active:scale-90 px-1"
                  >
                    A
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-amber-600" />
                  <button
                    onClick={() => setWidthMode(widthMode === 'wide' ? 'medium' : 'wide')}
                    className="text-[10px] font-black bg-[#8B2500] text-white px-2 py-0.5 rounded-md"
                  >
                    {widthMode === 'wide' ? '7XL' : '5XL'}
                  </button>
                </div>
              </div>

              {/* Auto Scroll Speed (1x) */}
              <button
                type="button"
                onClick={() => {
                  const speeds = [0.5, 1, 1.5, 2, 2.5, 3];
                  const currentIdx = speeds.indexOf(autoScrollSpeed);
                  const nextIdx = (currentIdx === -1 ? 1 : currentIdx + 1) % speeds.length;
                  handleSpeedChange(speeds[nextIdx]);
                }}
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-mono"
              >
                <Zap className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black">{autoScrollSpeed}x</span>
              </button>

              {/* Daily Goal (21) */}
              <button
                type="button"
                onClick={() => {
                  const targets: ReaderTarget[] = [11, 21, 51, 108];
                  const currentIdx = targets.indexOf(targetPace);
                  const nextIdx = (currentIdx === -1 ? 1 : currentIdx + 1) % targets.length;
                  handleTargetChange(targets[nextIdx]);
                }}
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-mono"
              >
                <Target className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black">{targetPace}</span>
              </button>

              {/* Mute Control (म्यूट) */}
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setIsMuted(!isMuted);
                }}
                className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif ${
                  isMuted 
                    ? 'bg-red-600 text-white border-red-600 font-bold shadow-md' 
                    : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-zinc-800'
                }`}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-600" />}
                <span className="text-[11px] leading-tight font-black">{isPb ? 'ਮਿਊਟ' : 'म्यूट'}</span>
              </button>

              {/* Advanced Tools Label (उन्नत साधन) */}
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  onClose();
                }}
                className="p-3 rounded-2xl border bg-[#8B2500] text-white border-[#7C1D00] text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer font-serif font-bold shadow-md hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-[11px] leading-tight uppercase tracking-tighter font-black">{isPb ? 'ਉੱਨਤ ਸਾਧਨ' : 'उन्नत साधन'}</span>
              </button>
            </div>

            <div className="space-y-4 pt-2">
              {/* ⚡ Auto-Scroll Speed Selector Card (0.2x to 5x) */}
              <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>{isHi ? 'स्वतः स्क्रॉल गति (Auto-Scroll Speed Range): 0.2x - 5x' : isPb ? 'ਸਵੈ-ਸਕ੍ਰੋਲ ਗਤੀ: 0.2x - 5x' : 'Auto-Scroll Speed: 0.2x - 5x'}</span>
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {([0.2, 0.5, 1, 1.5, 2, 2.5, 3, 5] as const).map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => handleSpeedChange(spd)}
                      className={`py-2 px-1 rounded-xl text-xs font-mono font-black border transition-all cursor-pointer ${
                        autoScrollSpeed === spd
                          ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-md ring-2 ring-amber-400/40 scale-105'
                          : 'bg-white dark:bg-zinc-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-zinc-700 hover:border-amber-400'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Themes & Presets (Compact) */}
              <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-600" />
                  <span>{isHi ? 'पावन थीम व रंग' : isPb ? 'ਪਾਵਨ ਥੀਮ ਤੇ ਰੰਗ' : 'Sacred Themes & Colors'}</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'deep_sepia', labelHi: '🤎 गहरा सेपिया', labelPb: '🤎 ਗਹਿਰਾ ਸੇਪੀਆ' },
                    { id: 'black', labelHi: '🖤 ब्लैक नाइट', labelPb: '🖤 ਬਲੈਕ ਨਾਈਟ' },
                    { id: 'comfort', labelHi: '🍃 सुखद पठन', labelPb: '🍃 ਸੁਖਦ ਪਠਨ' },
                    { id: 'pothi', labelHi: '📜 प्राचीन पोथी', labelPb: '📜 ਪ੍ਰਾਚੀਨ ਪੋਥੀ' },
                  ].map((nt) => (
                    <button
                      key={nt.id}
                      type="button"
                      onClick={() => handleThemeChange(nt.id as any)}
                      className={`px-3 py-2 rounded-xl text-[11px] font-serif font-bold transition cursor-pointer border ${
                        activeTheme === nt.id
                          ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs'
                          : 'bg-black/5 border-transparent hover:bg-black/10'
                      }`}
                    >
                      {isPb ? nt.labelPb : nt.labelHi}
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlighters (Compact) */}
              <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Highlighter className="w-4 h-4 text-amber-600" />
                  <span>{isHi ? 'हाइलाइटर साधन' : isPb ? 'ਹਾਈਲਾਈਟਰ ਸਾਧਨ' : 'Highlighter Tools'}</span>
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { id: 'saffron', color: '#F59E0B', labelHi: 'केसरिया', labelPb: 'ਕੇਸਰੀ' },
                    { id: 'green', color: '#10B981', labelHi: 'हरा', labelPb: 'ਹਰਾ' },
                    { id: 'yellow', color: '#FDE047', labelHi: 'पीला', labelPb: 'ਪੀਲਾ' },
                  ].map((hl) => (
                    <button
                      key={hl.id}
                      onClick={() => handleHighlighterChange(hl.id as any)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold border transition ${
                        activeHighlighter === hl.id ? 'border-amber-600 bg-amber-600/10' : 'border-transparent bg-black/5'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hl.color }} />
                      {isPb ? hl.labelPb : hl.labelHi}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Reading History (अन्तिम १० पठन इतिहास) */
          <div className="overflow-y-auto px-4 sm:px-6 py-5 space-y-4 flex-1 overscroll-contain">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.borderOrnament }}>
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-amber-600" />
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs sm:text-sm uppercase tracking-wider">
                  {isHi ? 'अन्तिम १० पठन इतिहास (Recently Accessed)' : isPb ? 'ਅਖੀਰੀ ੧੦ ਪਠਨ ਇਤਿਹਾਸ' : 'Last 10 Recently Accessed'}
                </h4>
              </div>
              {historyItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearHistory}
                  className="px-2.5 py-1 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-700 dark:text-red-300 border border-red-500/30 text-[11px] font-serif font-bold flex items-center gap-1 transition cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>{isHi ? 'इतिहास साफ़ करें' : isPb ? 'ਸਾਫ਼ ਕਰੋ' : 'Clear All'}</span>
                </button>
              )}
            </div>

            {historyItems.length === 0 ? (
              <div className="p-8 text-center space-y-2 border-2 border-dashed rounded-2xl" style={{ borderColor: theme.borderOrnament }}>
                <Clock className="w-8 h-8 mx-auto text-amber-500/50" />
                <p className="font-serif text-xs opacity-75">
                  {isHi ? 'कोई हालिया पठन इतिहास उपलब्ध नहीं है। जब आप साखियों या ग्रंथों का स्वाध्याय करते हैं, तो वे यहाँ स्वतः सुरक्षित हो जाएंगे।' : isPb ? 'ਕੋਈ ਪਠਨ ਇਤਿਹਾਸ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।' : 'No recent reading history. Your last 10 read items will automatically appear here.'}
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {historyItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleResumeHistoryItem(item)}
                    className="p-3.5 rounded-2xl border transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] flex items-center justify-between gap-3 shadow-xs group"
                    style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-200 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                          #{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-serif uppercase tracking-wider bg-amber-600/15 text-amber-900 dark:text-amber-200 border border-amber-600/30 shrink-0">
                          {item.type === 'sakhi' ? (isHi ? 'साखी' : 'ਸਾਖੀ') : item.type === 'granth' ? (isHi ? 'ग्रन्थ' : 'ਗ੍ਰੰਥ') : (isHi ? 'स्वाध्याय' : 'ਸਵਾਧਿਆਏ')}
                        </span>
                        <span className="text-[10px] font-serif opacity-60 flex items-center gap-1 ml-auto shrink-0">
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>{formatTimeAgo(item.timestamp)}</span>
                        </span>
                      </div>

                      <h5 className="font-serif font-black text-xs sm:text-sm text-amber-900 dark:text-amber-200 truncate">
                        {item.title}
                      </h5>

                      {item.snippet && (
                        <p className="text-[11px] font-serif opacity-80 line-clamp-1 italic text-stone-700 dark:text-stone-300">
                          "{item.snippet}"
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl bg-[#8B2500] text-white font-serif font-bold text-xs flex items-center gap-1 shrink-0 shadow-xs group-hover:scale-105 transition"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{isHi ? 'पुनः पढ़ें' : isPb ? 'ਦੁਬਾਰਾ ਪੜ੍ਹੋ' : 'Resume'}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2.5 px-4 text-center select-none shrink-0"
        >
          <span style={{ color: theme.sacredMaroon }} className="text-xs sm:text-sm font-semibold tracking-wider font-serif block">
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};
