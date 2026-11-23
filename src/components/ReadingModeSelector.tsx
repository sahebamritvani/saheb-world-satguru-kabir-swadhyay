import React from 'react';
import { 
  Scroll, 
  BookOpen, 
  Columns, 
  Eye, 
  Sparkles, 
  Target, 
  Zap, 
  HelpCircle,
  Play,
  Pause
} from 'lucide-react';
import { Language } from '../types';
import { sacredHaptics } from '../services/haptics';

export interface ReadingMode {
  id: 'scroll' | 'pothi' | 'parallel' | 'zen' | 'larivaar' | 'visraam' | 'autoplay' | 'swadhyay' | 'akhand' | 'pure_vani';
  icon: string;
  iconComponent?: React.ReactNode;
  titleHi: string;
  titlePb: string;
  titleEn: string;
  descHi: string;
  descPb: string;
  descEn: string;
  previewBg: string;
  previewDotColor: string;
}

interface ReadingModeSelectorProps {
  currentMode: string;
  onModeSelect: (modeId: string) => void;
  language: Language;
  isLarivaar?: boolean;
  isVisraam?: boolean;
  isZen?: boolean;
  isAutoPlaying?: boolean;
}

export const READING_MODES_LIST: ReadingMode[] = [
  {
    id: 'pure_vani',
    icon: '🎙️',
    titleHi: '१०. सिर्फ वाणी (ऑटो-स्क्रॉल + ऑडियो)',
    titlePb: '੧੦. ਸਿਰਫ਼ ਬਾਣੀ (ਆਟੋ-ਸਕ੍ਰੌਲ + ਆਡੀਓ)',
    titleEn: '10. Pure Vani (Auto-Scroll + Audio)',
    descHi: 'केवल पावन वाणी, कोमल तानपुरा धुन और स्वर-ताल के साथ केंद्रित ऑटो-स्क्रॉल',
    descPb: 'ਕੇਵਲ ਪਾਵਨ ਬਾਣੀ, ਕੋਮਲ ਤਾਨਪੁਰਾ ਧੁਨ ਤੇ ਸਵਰ ਨਾਲ ਸਵੈ-ਕੇਂਦ੍ਰਿਤ ਸਕ੍ਰੌਲ',
    descEn: 'Pure Vani only with synced narration, Tanpura Dhun, speed & pause controls',
    previewBg: 'bg-amber-100/80 dark:bg-amber-950/50',
    previewDotColor: 'bg-amber-600'
  },
  {
    id: 'scroll',
    icon: '📜',
    titleHi: '१. निरंतर स्क्रॉल मोड',
    titlePb: '੧. ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ',
    titleEn: '1. Continuous Scroll',
    descHi: 'अखंड ऊर्ध्वाधर स्क्रॉल प्रवाह व पद्य हाईलाइट',
    descPb: 'ਅਖੰਡ ਸਕ੍ਰੋਲ ਪ੍ਰਵਾਹ ਤੇ ਪਦ ਹਾਈਲਾਈਟ',
    descEn: 'Seamless vertical scrolling with verse highlighting',
    previewBg: 'bg-amber-100/50 dark:bg-zinc-800',
    previewDotColor: 'bg-amber-600'
  },
  {
    id: 'pothi',
    icon: '📖',
    titleHi: '२. ३D पोथी पन्ना मोड',
    titlePb: '੨. ੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ',
    titleEn: '2. 3D Pothi Flip',
    descHi: 'हस्तलिखित ३D पोथी पन्ना पलटने का पवित्र अनुभव',
    descPb: 'ਹਸਤਲਿਖਤ ੩D ਪੋਥੀ ਪੰਨਾ ਪਲਟਣ ਦਾ ਅਨੁਭਵ',
    descEn: 'Authentic skeuomorphic 3D page turning feel',
    previewBg: 'bg-orange-100/50 dark:bg-orange-950/30',
    previewDotColor: 'bg-orange-600'
  },
  {
    id: 'parallel',
    icon: '📊',
    titleHi: '३. समानांतर तुलना मोड',
    titlePb: '੩. ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ',
    titleEn: '3. Parallel Translation',
    descHi: 'मूल वाणी व पद-प्रति-पद अर्थ साथ-साथ',
    descPb: 'ਮੂਲ ਬਾਣੀ ਤੇ ਅਰਥ ਨਾਲ-ਨਾਲ',
    descEn: 'Side-by-side original text and spiritual meanings',
    previewBg: 'bg-emerald-100/50 dark:bg-zinc-850',
    previewDotColor: 'bg-emerald-600'
  },
  {
    id: 'zen',
    icon: '🧘',
    titleHi: '४. सहज पाठ (ज़ेन एकाग्रता)',
    titlePb: '੪. ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ',
    titleEn: '4. Zen Focus Mode',
    descHi: 'बिना रुकावट केवल पावन वाणी पर निर्विकल्प ध्यान',
    descPb: 'ਬਿਨਾ ਰੁਕਾਵਟ ਕੇਵਲ ਬਾਣੀ ਉੱਤੇ ਧਿਆਨ',
    descEn: 'Distraction-free minimal view for silent meditation',
    previewBg: 'bg-purple-100/50 dark:bg-purple-950/30',
    previewDotColor: 'bg-purple-600'
  },
  {
    id: 'larivaar',
    icon: '🪷',
    titleHi: '५. लारीवार अखंड पाठ',
    titlePb: '੫. ਲਾਰੀਵਾਰ ਅਖੰਡ ਪਾਠ',
    titleEn: '5. Larivaar Unbroken Text',
    descHi: 'शब्दों के बीच बिना स्पेस के पारंपरिक अखंड पाठ',
    descPb: 'ਸ਼ਬਦਾਂ ਵਿਚਕਾਰ ਬਿਨਾ ਸਪੇਸ ਦੇ ਅਖੰਡ ਪਾਠ',
    descEn: 'Unbroken text with zero spacing in sacred tradition',
    previewBg: 'bg-blue-100/50 dark:bg-zinc-850',
    previewDotColor: 'bg-blue-600'
  },
  {
    id: 'visraam',
    icon: '🎯',
    titleHi: '६. विश्राम हाइलाइट मोड',
    titlePb: '੬. ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ ਮੋਡ',
    titleEn: '6. Visraam Pauses Highlight',
    descHi: 'शुद्ध उच्चारण व लय हेतु विश्राम स्थलों का अंकन',
    descPb: 'ਸ਼ੁੱਧ ਉੱਚਾਰਣ ਤੇ ਲਯ ਹੇਤੂ ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ',
    descEn: 'Pronunciation pause guidance marked in warm tones',
    previewBg: 'bg-rose-100/50 dark:bg-rose-950/30',
    previewDotColor: 'bg-rose-600'
  },
  {
    id: 'autoplay',
    icon: '⚡',
    titleHi: '७. स्वतः स्क्रॉल एवं श्वास',
    titlePb: '੭. ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ',
    titleEn: '7. Auto-Scroll & Breath',
    descHi: 'गति स्क्रॉल, श्वास प्राणायाम व पृष्ठभूमि धुन',
    descPb: 'ਗਤੀ ਸਕ੍ਰੋਲ, ਸੁਆਸ ਚੱਕਰ ਤੇ ਪਿਛੋਕੜ ਧੁਨ',
    descEn: 'Adjustable auto-scrolling with pulsing breathing guide',
    previewBg: 'bg-teal-100/50 dark:bg-zinc-850',
    previewDotColor: 'bg-teal-600'
  },
  {
    id: 'swadhyay',
    icon: '📚',
    titleHi: '८. स्वाध्याय ८-चरण मर्म',
    titlePb: '੮. ਸਵਾਧਿਆਇ ੮-ਚਰਣ ਮਨਨ',
    titleEn: '8. Swadhyay 8-Step Study',
    descHi: 'वाणी का क्रमबद्ध ८ चरणों में स्वाध्याय व मर्म चिंतन',
    descPb: 'ਬਾਣੀ ਦਾ ਕ੍ਰਮਬੱਧ ੮ ਚਰਣਾਂ ਵਿਚ ਗੂੜ੍ਹ ਅਧਿਐਨ',
    descEn: '8 structural contemplation steps for deep study',
    previewBg: 'bg-indigo-100/50 dark:bg-indigo-950/30',
    previewDotColor: 'bg-indigo-600'
  },
  {
    id: 'akhand',
    icon: '🔱',
    titleHi: '९. अखंड पाठ मोड (Akhand Path)',
    titlePb: '੯. ਅਖੰਡ ਪਾਠ ਮੋਡ (Akhand Path)',
    titleEn: '9. Akhand Path Mode',
    descHi: 'निरंतर २४-घंटे अखंड पाठ प्रवाह व पवित्र ध्वनि',
    descPb: 'ਨਿਰੰਤਰ ੨੪-ਘੰਟੇ ਅਖੰਡ ਪਾਠ ਪ੍ਰਵਾਹ ਤੇ ਪਵਿੱਤਰ ਧੁਨ',
    descEn: 'Continuous 24-hour devotional chanting flow',
    previewBg: 'bg-red-100/50 dark:bg-red-950/30',
    previewDotColor: 'bg-red-600'
  }
];

export const ReadingModeSelector: React.FC<ReadingModeSelectorProps> = ({
  currentMode,
  onModeSelect,
  language,
  isLarivaar = false,
  isVisraam = false,
  isZen = false,
  isAutoPlaying = false
}) => {
  const getLocalizedTexts = (mode: ReadingMode) => {
    if (language === 'pb') {
      return { title: mode.titlePb, desc: mode.descPb };
    }
    if (language === 'en') {
      return { title: mode.titleEn, desc: mode.descEn };
    }
    return { title: mode.titleHi, desc: mode.descHi };
  };

  const isModeActive = (id: string) => {
    if (id === 'pothi') return currentMode === 'pothi' || currentMode === 'flip';
    return currentMode === id;
  };

  const isPageFlipModeActive = () => {
    return currentMode === 'pothi' || currentMode === 'flip';
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {READING_MODES_LIST.map((mode) => {
          const { title, desc } = getLocalizedTexts(mode);
          const active = isModeActive(mode.id);

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onModeSelect(mode.id);
              }}
              className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden h-full group backdrop-blur-md ${
                active
                  ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-md ring-2 ring-amber-400/40 scale-[1.01]'
                  : 'bg-white/80 dark:bg-zinc-800/80 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-amber-400 hover:scale-[1.01]'
              }`}
            >
              <div className="flex items-start gap-2.5 w-full">
                {/* Simulated Mode Visual Preview */}
                <div className={`w-12 h-12 rounded-xl shrink-0 ${mode.previewBg} border border-amber-500/10 flex flex-col items-center justify-center relative overflow-hidden shadow-inner`}>
                  {/* Mode Icon */}
                  <span className="text-xl relative z-10">{mode.icon}</span>
                  {/* Animated Simulated Dots/Lines representing text content */}
                  <div className="absolute inset-x-1 bottom-1.5 flex flex-col gap-0.5 opacity-60">
                    <div className={`h-1 rounded-full ${mode.previewDotColor} w-[80%] mx-auto`} />
                    <div className={`h-1 rounded-full ${mode.previewDotColor} w-[60%] mx-auto`} />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="font-serif font-black text-xs sm:text-sm block truncate leading-tight">
                    {title}
                  </span>
                  <p className={`text-[10px] font-serif block mt-1 leading-snug line-clamp-2 ${active ? 'text-amber-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {desc}
                  </p>
                </div>
              </div>

              {active && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white text-amber-800 flex items-center justify-center text-[10px] font-bold shadow-xs">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
