import React from 'react';
import { 
  ArrowLeft, 
  Settings, 
  Wifi, 
  WifiOff, 
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { Language, AppView, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { ALL_DASHBOARD_CARDS } from '../data/dashboardCardsCatalog';
import { useOnlineStatus } from '../hooks/usePWAInstall';

export interface MasterFeatureCardLayoutProps {
  currentView: AppView;
  language: Language;
  onBack: () => void;
  onSelectLanguage: (lang: Language) => void;
  onOpenSettings: () => void;
  onOpenAccessibility?: () => void;
  title?: string | { hi: string; pb: string; en: string };
  kicker?: string | { hi: string; pb: string; en: string };
  slotNumber?: number;
  children: React.ReactNode;
  className?: string;
  hideCreamContainer?: boolean;
}

// Fallback catalog of localized titles for all views
const VIEW_TITLES: Record<string, { hi: string; pb: string; en: string }> = {
  'daily': { hi: 'दैनिक पावन साखी', pb: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ', en: 'Daily Pawan Sakhi' },
  'swadhyay': { hi: '५-चरणीय पारंपरिक स्वाध्याय', pb: '੫-ਪੜਾਵੀ ਪਰੰਪਰਾਗਤ ਸਵਾਧਿਆਏ', en: '5-Step Traditional Swadhyay' },
  'das-sutra': { hi: '१० सत्य वचन सूत्र', pb: '੧੦ ਸੱਤ ਵਚਨ ਸੂਤਰ', en: '10 Satya Vachan Sutras' },
  'dainik-chintan': { hi: 'दैनिक चिंतन एवं मनन', pb: 'ਦੈਨਿਕ ਚਿੰਤਨ ਤੇ ਮਨਨ', en: 'Daily Contemplation' },
  'nitnem-gutka': { hi: 'नितनेम गुटका साहेब', pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ', en: 'Nitnem Gutka Saheb' },
  'grantha': { hi: 'समग्र पावन ग्रन्थालय', pb: 'ਸਮੁੱਚੀ ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ', en: 'Sacred Granth Library' },
  'quiz': { hi: 'आध्यात्मिक प्रश्नोत्तरी', pb: 'ਰੂਹਾਨੀ ਪ੍ਰਸ਼ਨੋਤਰੀ', en: 'Spiritual Quiz' },
  'akhand-path': { hi: 'अखंड साखी पाठ (अविराम श्रवण)', pb: 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ (ਨਿਰੰਤਰ ਸ਼੍ਰਵਣ)', en: 'Akhand Sakhi Path' },
  'diary': { hi: 'आत्मिक डायरी एवं चिंतन', pb: 'ਆਤਮਿਕ ਡਾਇਰੀ ਤੇ ਚਿੰਤਨ', en: 'Spiritual Diary & Reflection' },
  'dhun': { hi: 'सत्यनाम पावन धुन एवं सुमिरन', pb: 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ ਤੇ ਸਿਮਰਨ', en: 'Satyanaam Sacred Dhun' },
  'jantri': { hi: 'पावन कबीर जंत्री एवं उत्सव', pb: 'ਪਾਵਨ ਕਬੀਰ ਜੰਤਰੀ ਤੇ ਉਤਸਵ', en: 'Sacred Kabir Jantri' },
  'mantra-tracker': { hi: 'नाम-सिमरन आवर्तन (माला काउंटर)', pb: 'ਨਾਮ-ਸਿਮਰਨ (ਮਾਲਾ ਜਾਪ ਕਾਊਂਟਰ)', en: 'Simran & Jaap Counter' },
  'audio-library': { hi: 'पावन ऑडियो लाइब्रेरी', pb: 'ਪਾਵਨ ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ', en: 'Sacred Audio Library' },
  'universe-map': { hi: 'अलौकिक ब्रह्मांड दर्शन', pb: 'ਅਲੌਕਿਕ ਬ੍ਰਹਿਮੰਡ ਦਰਸ਼ਨ', en: 'Sacred Universe Map' },
  'aatma-bhushan': { hi: 'आत्मा के १६ भूषण', pb: 'ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ', en: '16 Ornaments of Soul' },
  'gyan-chakra': { hi: 'ज्ञान चक्र • आत्मा के १६ भूषण', pb: 'ਗਿਆਨ ਚੱਕਰ • ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ', en: 'Gyan Chakra 3D Sacred Wheel' },
  'life-journey': { hi: 'सतगुरु कबीर साहेब परिचय एवं चारों युग लीलाएं', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚੈ ਤੇ ਚਾਰੇ ਜੁੱਗ ਲੀਲਾਵਾਂ', en: 'Satguru Kabir Biography & Four Yugas' },
  'auto-correct': { hi: 'सत्यनाम शुद्धि साधन', pb: 'ਸਤਯਨਾਮ ਸ਼ੁੱਧੀ ਸਾਧਨ', en: 'Satyanaam Auto-Correct' },
  'sacred-ashrams': { hi: 'पावन ऐतिहासिक आश्रम व तीर्थ', pb: 'ਪਾਵਨ ਇਤਿਹਾਸਕ ਆਸ਼ਰਮ ਤੇ ਤੀਰਥ', en: 'Sacred Ashrams & Shrines' },
  'discourse-engine': { hi: 'सतगुरु सत्संग प्रवचन', pb: 'ਸਤਿਗੁਰੂ ਸਤਿਸੰਗ ਪ੍ਰਵਚਨ', en: 'Satsang Discourse Engine' },
  'divine-guidance': { hi: 'सतगुरु दिव्य आदेश एवं मार्गदर्शन', pb: 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਤੇ ਮਾਰਗਦਰਸ਼ਨ', en: 'Divine Guidance Oracle' },
  'spiritual-discipline': { hi: 'पंचामृत नेम एवं साधना ट्रैकर', pb: 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ', en: 'Panchamrit Vows Tracker' },
  'sacred-leelas': { hi: 'सतगुरु कबीर अमर लीलाएं', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਅਮਰ ਲੀਲਾਵਾਂ', en: 'Sacred Kabir Leelas' },
  'aarti-sanctuary': { hi: 'अलौकिक संध्या आरती एवं प्रभात गान', pb: 'ਅਲੌਕਿਕ ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਗਾਨ', en: 'Evening Aarti & Morning Chants' },
  'shabd-kosha': { hi: 'कबीर वाणी शब्दकोश', pb: 'ਕਬੀਰ ਬਾਣੀ ਸ਼ਬਦਕੋਸ਼', en: 'Kabir Vani Shabdakosha' },
  'satsang-video': { hi: 'पावन सत्संग वीडियो लाइब्रेरी', pb: 'ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ ਲਾਇਬ੍ਰੇਰੀ', en: 'Satsang Video Library' },
  'sadhana-goals': { hi: 'दैनिक साधना लक्ष्य एवं संकल्प', pb: 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟੀਚੇ ਤੇ ਸੰਕਲਪ', en: 'Daily Sadhana Goals Tracker' },
  'growth-dashboard': { hi: 'आध्यात्मिक साधना प्रगति डैशबोर्ड', pb: 'ਰੂਹਾਨੀ ਸਾਧਨਾ ਪ੍ਰਗਤੀ ਡੈਸ਼ਬੋਰਡ', en: 'Spiritual Growth Dashboard' },
  'bhajan-repository': { hi: 'पावन भजन व पद संग्रह', pb: 'ਪਾਵਨ ਭਜਨ ਤੇ ਪਦ ਸੰਗ੍ਰਹਿ', en: 'Bhajan & Pad Repository' },
  'damakheda-index': { hi: 'दामाखेड़ा ग्रन्थ सूची', pb: 'ਦਾਮਾਖੇੜਾ ਗ੍ਰੰਥ ਸੂਚੀ', en: 'Damakheda Granth Index' },
  'acharya-parampara': { hi: 'वंश बयालीस आचार्य परम्परा', pb: 'ਵੰਸ਼ ਬਿਆਲੀਸ ਆਚਾਰੀਆ ਪਰੰਪਰਾ', en: 'Acharya Parampara' },
  'divine-darshan': { hi: 'सतगुरु कबीर साहेब दिव्य पावन दर्शन', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ', en: 'Satguru Kabir Saheb Divine Darshan' },
  'chetavani-saarang': { hi: 'चेतावनी सारंग', pb: 'ਚੇਤਾਵਨੀ ਸਾਰੰਗ', en: 'Chetavani Saarang' },
  'sggs-kabir-bani': { hi: 'श्री गुरु ग्रंथ साहिब एवं कबीर वाणी', pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਤੇ ਕਬੀਰ ਬਾਣੀ', en: 'Sri Guru Granth Sahib & Kabir Bani' },
  'doha-memory': { hi: 'दोहा स्मृति साधना', pb: 'ਦੋਹਾ ਸਮ੍ਰਿਤੀ ਸਾਧਨਾ', en: 'Doha Memory Trainer' },
  'satya-naam': { hi: 'सत्यनाम एवं सारशब्द', pb: 'ਸਤਯਨਾਮ ਅਤੇ ਸਾਰਸ਼ਬਦ', en: 'Satyanaam & Saar Shabd' },
  'nature-wallpaper': { hi: 'कुदरत वॉलपेपर जनरेटर', pb: 'ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਜਨਰੇਟਰ', en: 'Nature Wallpaper Generator' },
  'mool-siddhant': { hi: 'मूल सिद्धांत (एक सत्यनाम से सब सधै)', pb: 'ਮੂਲ ਸਿਧਾਂਤ (ਇੱਕ ਸਤਯਨਾਮ ਤੋਂ ਸਭ ਸਧੈ)', en: 'Core Principle (Master the One Satyanaam)' },
  'hukamnama': { hi: 'पावन दैनिक हुकमनामा', pb: 'ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ', en: 'Daily Hukamnama' },
  'vani-card-maker': { hi: 'कबीर वाणी कार्ड स्टूडियो', pb: 'ਕਬੀਰ ਬਾਣੀ ਕਾਰਡ ਸਟੂਡੀਓ', en: 'Kabir Vani Card Studio' },
  'satvik-sankalp': { hi: 'नशामुक्ति एवं सात्विक संकल्प', pb: 'ਨਸ਼ਾਮੁਕਤੀ ਤੇ ਸਾਤਵਿਕ ਸੰਕਲਪ', en: 'Satvik Sankalp Tracker' },
  'kabir-gyan-quiz': { hi: 'कबीर ज्ञान प्रश्नोत्तरी', pb: 'ਕਬੀਰ ਗਿਆਨ ਕੁਇਜ਼', en: 'Kabir Gyan Quiz' },
  'vansh-bayalis': { hi: 'वंश बयालीस पावन परम्परा', pb: 'ਵੰਸ਼ ਬਿਆਲੀਸ ਪਾਵਨ ਪਰੰਪਰਾ', en: 'Vansh Bayalis Lineage' },
  'satyanaam-panacea': { 
    hi: 'सत्यनाम महा-औषधि (Satyanaam Panacea)', 
    pb: 'ਸਤਯਨਾਮ ਮਹਾ-ਔਸ਼ਧੀ (Satyanaam Panacea)', 
    en: 'Satyanaam Panacea (Universal Spiritual Remedy)' 
  },
  'ulatvasi-quiz': { hi: 'उलटबांसी 3D गेमिंग प्रश्नोत्तरी', pb: 'ਉਲਟਬਾਂਸੀ ੩ਡੀ ਕੁਇਜ਼', en: 'Ulatvasi 3D Quiz' },
  'ulatvasi-library': { hi: '२५० उलटबांसी पद संग्रह', pb: '੨੫੦ ਉਲਟਬਾਂਸੀ ਪਦ ਸੰਗ੍ਰਹਿ', en: '250 Ulatvasi Library' },
  'deep-search': { hi: 'समग्र ग्रन्थ अन्वेषण', pb: 'ਸਮੁੱਚੀ ਗ੍ਰੰਥ ਖੋਜ', en: 'Deep Scripture Search' },
  'meditation-timer': { hi: 'सुमिरन टाइमर एवं आत्म-ध्यान', pb: 'ਸੁਮਿਰਨ ਟਾਈਮਰ ਤੇ ਆਤਮ-ਧਿਆਨ', en: 'Sumiran & Meditation Timer' },
  'community-board': { hi: 'साधना मंच (सत्संग संवाद)', pb: 'ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਸੰਵਾਦ)', en: 'Sadhana Community Board' },
  'health-diagnostic': { hi: 'ऐप स्वास्थ्य एवं ऑफ़लाइन स्थिति', pb: 'ਐਪ ਸਿਹਤ ਤੇ ਔਫਲਾਈਨ ਸਥਿਤੀ', en: 'App Diagnostic & Offline Status' },
};

export const MasterFeatureCardLayout: React.FC<MasterFeatureCardLayoutProps> = ({
  currentView,
  language,
  onBack,
  onSelectLanguage,
  onOpenSettings,
  title,
  kicker,
  slotNumber,
  children,
  className = '',
  hideCreamContainer = false,
}) => {
  const { isDarkMode, theme } = useAppTheme();
  const isOnline = useOnlineStatus();

  // Find metadata from catalog if not explicitly passed
  const cardInCatalog = ALL_DASHBOARD_CARDS.find((c) => {
    if (c.action.kind === 'view' && c.action.view === currentView) return true;
    return false;
  });

  const activeSlotNumber = slotNumber || cardInCatalog?.slotNumber;

  // Resolve Title
  const resolvedTitle = (() => {
    if (title) {
      if (typeof title === 'string') return title;
      return title[language] || title.hi || '';
    }
    if (cardInCatalog) {
      return cardInCatalog.title[language] || cardInCatalog.title.hi;
    }
    const fallback = VIEW_TITLES[currentView];
    if (fallback) {
      return fallback[language] || fallback.hi;
    }
    return 'सत्यनाम पावन दर्शन';
  })();

  // Resolve Kicker
  const resolvedKicker = (() => {
    if (kicker) {
      if (typeof kicker === 'string') return kicker;
      return kicker[language] || kicker.hi || '';
    }
    if (cardInCatalog) {
      return cardInCatalog.kicker[language] || cardInCatalog.kicker.hi;
    }
    return '';
  })();

  return (
    <div className={`w-full max-w-5xl mx-auto pb-8 transition-all duration-300 ${className}`}>
      {/* =========================================================================
          SCROLLABLE 2-ROW NAVIGATION HEADER (Directly below 36px Frozen Top Bar)
          - Row 1: ← वापस + 100% Offline | हिंदी | ਪੰਜਾਬੀ | EN + unified ⚙️ Settings
          - Row 2: Full, untruncated Card/Granth Title centered cleanly
          ========================================================================= */}
      <header
        id="master-screen-header-stack"
        style={{
          backgroundColor: isDarkMode ? 'rgba(28, 20, 15, 0.98)' : 'rgba(253, 248, 238, 0.98)',
          borderColor: '#D97706',
        }}
        className="relative z-20 rounded-2xl border p-2.5 sm:p-4 mb-4 sm:mb-5 shadow-md backdrop-blur-md flex flex-col gap-2 transition-all w-full max-w-full overflow-hidden"
      >
        {/* Row 1: Top Utility Bar (Back button + Offline Badge on Left | Lang Toggle + Font + Settings on Right) */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 border-b border-amber-500/20 pb-2 w-full min-w-0">
          {/* Left: Back button + Offline Badge */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink-0">
            <button
              type="button"
              id="master-back-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                onBack();
              }}
              style={{
                backgroundColor: isDarkMode ? '#2C1E16' : '#FFFDF9',
                borderColor: 'rgba(217, 119, 6, 0.45)',
                color: isDarkMode ? '#FDE68A' : '#6B1D1D',
              }}
              className="h-8 sm:h-9 px-2 sm:px-3 rounded-xl border-1.5 flex items-center gap-1 hover:opacity-90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs shrink-0 font-serif font-black text-[11px] sm:text-sm"
              title={language === 'pb' ? 'ਮੁੱਖ ਪੰਨੇ ਤੇ ਵਾਪਸ' : language === 'en' ? 'Back to Dashboard' : 'मुख्य पृष्ठ पर वापस'}
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <span>
                {language === 'pb' ? 'ਵਾਪਸ' : language === 'en' ? 'Back' : 'वापस'}
              </span>
            </button>

            {/* 100% Offline Badge */}
            <span 
              className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-xs font-serif font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 shadow-2xs shrink-0"
              title="100% Offline Functional"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse shrink-0" />
              <span>
                {language === 'pb' ? '੧੦੦% ਔਫਲਾਈਨ' : language === 'en' ? '100% Offline' : '१००% ऑफ़लाइन'}
              </span>
            </span>
          </div>

          {/* Right: Compact Language Toggle + Font + Settings */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink-0 ml-auto">
            {/* Uniform 3-Language Toggle Buttons */}
            <div 
              style={{
                backgroundColor: isDarkMode ? '#241A14' : '#FDF3E0',
                borderColor: 'rgba(217, 119, 6, 0.4)',
              }}
              className="flex items-center border rounded-xl p-0.5 shadow-2xs shrink-0"
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                const label = lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN';
                return (
                  <button
                    key={lng}
                    type="button"
                    id={`master-lang-btn-${lng}`}
                    onClick={() => {
                      sacredHaptics.lightTap();
                      onSelectLanguage(lng);
                    }}
                    style={{
                      backgroundColor: isSelected 
                        ? (isDarkMode ? '#D97706' : '#6B1D1D') 
                        : 'transparent',
                      color: isSelected 
                        ? '#FFFFFF' 
                        : (isDarkMode ? '#F5F5F5' : '#451A03'),
                    }}
                    className={`h-7 px-1.5 sm:px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center text-[10px] sm:text-xs font-serif font-black ${
                      isSelected ? 'shadow-xs' : 'hover:opacity-85'
                    }`}
                    title={lng === 'hi' ? 'हिंदी भाषा' : lng === 'pb' ? 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ' : 'English Language'}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Quick Button for Unified "⚙️ Settings" (Settings + Accessibility + Reading Suite) */}
            <button
              type="button"
              id="master-settings-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                onOpenSettings();
              }}
              style={{
                backgroundColor: isDarkMode ? '#2C1E16' : '#FFFDF9',
                borderColor: 'rgba(217, 119, 6, 0.45)',
                color: isDarkMode ? '#FDE68A' : '#6B1D1D',
              }}
              className="h-8 px-2 sm:px-2.5 rounded-xl border flex items-center justify-center gap-1 hover:opacity-90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xs shrink-0"
              title={language === 'pb' ? 'ਸੈਟਿੰਗਜ਼, ਸੁਗਮਤਾ ਤੇ ਪਠਨ ਸਾਧਨ' : language === 'en' ? 'Settings, Accessibility & Reading Suite' : 'सेटिंग्स, सुगमता एवं पाठ साधन'}
              aria-label="Settings"
            >
              <Settings className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <span className="hidden xs:inline text-[10px] sm:text-xs font-serif font-black">
                {language === 'pb' ? 'ਸੈਟਿੰਗ' : language === 'en' ? 'Settings' : 'सेटिंग्स'}
              </span>
            </button>
          </div>
        </div>

        {/* Row 2: Full-Width Title Bar */}
        <div className="w-full text-center px-1 sm:px-2 py-0.5 sm:py-1 min-w-0">
          {resolvedKicker && (
            <span className="text-[11px] font-black tracking-widest text-[#D97706] uppercase block mb-0.5">
              {resolvedKicker}
            </span>
          )}
          <h1 
            style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }} 
            className="text-base sm:text-lg md:text-xl font-serif font-black whitespace-normal break-words leading-tight drop-shadow-2xs"
            title={resolvedTitle}
          >
            {resolvedTitle}
          </h1>
          {activeSlotNumber && (
            <span className="inline-block mt-1 text-[10px] font-black font-serif px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/30">
              Slot #{activeSlotNumber}
            </span>
          )}
        </div>
      </header>

      {/* =========================================================================
          3. HIGH-READABILITY SOLID CREAM CONTAINER (#FDF8EE, 96% opacity, #D97706 border)
          With Low-Opacity (~10%) Satguru Kabir Saheb Background Watermark
          ========================================================================= */}
      {hideCreamContainer ? (
        <div className="relative w-full z-10">
          {children}
        </div>
      ) : (
        <div
          id="master-solid-cream-container"
          style={{
            backgroundColor: isDarkMode ? 'rgba(32, 24, 18, 0.96)' : 'rgba(253, 248, 238, 0.96)',
            borderColor: '#D97706',
          }}
          className="relative w-full rounded-2xl sm:rounded-3xl border-2 shadow-2xl p-4 sm:p-6 sm:py-8 backdrop-blur-md overflow-x-clip text-[#1A1A1A] dark:text-[#F5F5F5] min-h-[500px]"
        >
          {/* Subtle (~8% to 10%) Satguru Kabir Saheb Official Portrait Watermark */}
          <div 
            className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.08] dark:opacity-[0.06] overflow-hidden select-none z-0"
            aria-hidden="true"
          >
            <img 
              src="/Saheb_World_icon.jpg" 
              alt="" 
              className="w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full object-cover filter contrast-125" 
            />
          </div>

          {/* Actual Foreground Feature Content (100% Crisp & Readable) */}
          <div className="relative z-10 w-full">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
