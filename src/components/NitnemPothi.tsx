import React, { useState, useEffect, useRef, forwardRef, Component, ReactNode, ErrorInfo } from 'react';
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
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Play, 
  Pause,
  X 
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { speechReciter } from '../services/audioDhun';
import { SACRED_NAME_CONSTANTS } from '../services/multilingualEngine';

const FlipBookComponent: any = (HTMLFlipBook as any)?.default || HTMLFlipBook;

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
// Authentic First Chapter of Nitnem Gutka Saheb: मंगलाचरण एवं प्रभात पाठ
// ----------------------------------------------------------------------------
export const NITNEM_PRABHAT_ANGS: NitnemAngData[] = [
  {
    angNumber: 1,
    chapterTitle: {
      hi: 'मंगलाचरण एवं साहेब वंदना',
      pb: 'ਮੰਗਲਾਚਰਣ ਤੇ ਸਾਹੇਬ ਵੰਦਨਾ',
      en: 'Mangalacharan & Satguru Invocation'
    },
    verseType: 'मंगलाचरण (Invocation)',
    originalLines: {
      hi: [
        '।। सत्यनाम ।।',
        'प्रथम वंदों सतगुरु चरना, जेहि प्रसादे भवजल तरना।',
        'साधु संत सबन को बन्दन, काटहिं भव के कठिन फन्दन।।'
      ],
      pb: [
        '।। ਸਤਯਨਾਮ ।।',
        'ਪ੍ਰਥਮ ਵੰਦੋਂ ਸਤਿਗੁਰੂ ਚਰਨਾ, ਜੇਹਿ ਪ੍ਰਸਾਦੇ ਭਵਜਲ ਤਰਨਾ।',
        'ਸਾਧੂ ਸੰਤ ਸਬਨ ਕੋ ਬੰਦਨ, ਕਾਟਹਿਂ ਭਵ ਕੇ ਕਠਿਨ ਫੰਦਨ।।'
      ],
      en: [
        '|| Satyanaam ||',
        'Pratham vandon Satguru charna, Jehi prasaade bhavjal tarna.',
        'Saadhoo sant saban ko bandan, Kaatahin bhav ke kathin phandan..'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'प्रथम', meaning: 'सर्वप्रथम' },
        { word: 'भवजल', meaning: 'संसार रूपी सागर' },
        { word: 'फन्दन', meaning: 'बंधन / पाश' }
      ],
      pb: [
        { word: 'ਪ੍ਰਥਮ', meaning: 'ਸਭ ਤੋਂ ਪਹਿਲਾਂ' },
        { word: 'ਭਵਜਲ', meaning: 'ਸੰਸਾਰ ਸਾਗਰ' },
        { word: 'ਫੰਦਨ', meaning: 'ਬੰਧਨ / ਫਾਹੇ' }
      ],
      en: [
        { word: 'Pratham', meaning: 'Foremost' },
        { word: 'Bhavjal', meaning: 'Ocean of transmigration' },
        { word: 'Phandan', meaning: 'Karmic fetters' }
      ]
    },
    bhavarth: {
      hi: '।। सत्यनाम ।। सर्वप्रथम पूर्ण परब्रह्म सतगुरु कबीर साहेब के पावन चरणों में सादर नमन करता हूँ, जिनकी असीम कृपा से संसार-सागर पार किया जा सकता है। सभी साधु-संतों को साहेब बंदगी साहेब, जो आवागमन के कठिन बंधनों को काट देते हैं।',
      pb: '।। ਸਤ੍ਯਨਾਮ ।। ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪੂਰਨ ਪਰਬ੍ਰਹਮ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿਚ ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ਕਰਦਾ ਹਾਂ, ਜਿਨ੍ਹਾਂ ਦੀ ਕ੍ਰਿਪਾ ਨਾਲ ਭਵਸਾਗਰ ਤਰਿਆ ਜਾਂਦਾ ਹੈ। ਸਮੂਹ ਸਾਧੂਆਂ ਸੰਤਾਂ ਨੂੰ ਵੰਦਨਾ ਹੈ ਜੋ ਕਾਲ ਦੇ ਕਠਿਨ ਬੰਧਨ ਕੱਟਦੇ ਹਨ।',
      en: '|| Satyanaam || First and foremost, I bow in profound surrender at the lotus feet of Satguru Kabir Saheb, by whose grace the turbulent ocean of worldly illusions is crossed. Saheb Bandagi Saheb to all enlightened saints who shatter the shackles of worldly bondage.'
    }
  },
  {
    angNumber: 2,
    chapterTitle: {
      hi: 'सतगुरु महिमा साखी',
      pb: 'ਸਤਿਗੁਰੂ ਮਹਿਮਾ ਸਾਖੀ',
      en: 'Glory of Satguru'
    },
    verseType: 'साखी (Witness Testimony)',
    originalLines: {
      hi: [
        'सतगुरु की महिमा अनन्त, अनन्त किया उपगार।',
        'लोचन अनन्त उघाड़िया, अनन्त दिखावणहार।।'
      ],
      pb: [
        'ਸਤਿਗੁਰੂ ਕੀ ਮਹਿਮਾ ਅਨੰਤ, ਅਨੰਤ ਕੀਆ ਉਪਗਾਰ।',
        'ਲੋਚਨ ਅਨੰਤ ਉਘਾੜਿਆ, ਅਨੰਤ ਦਿਖਾਵਣਹਾਰ।।'
      ],
      en: [
        'Satguru kee mahima anant, Anant keeya upgaar.',
        'Lochan anant ughaariya, Anant dikhaavanhaar..'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'लोचन', meaning: 'आंतरिक दिव्य चक्षु' },
        { word: 'उघाड़िया', meaning: 'खोल दिया / जागृत किया' }
      ],
      pb: [
        { word: 'ਲੋਚਨ', meaning: 'ਅੰਦਰੂਨੀ ਅੱਖਾਂ' },
        { word: 'ਉਘਾੜਿਆ', meaning: 'ਖੋਲ੍ਹ ਦਿੱਤਾ' }
      ],
      en: [
        { word: 'Lochan', meaning: 'Inner Spiritual Eye' },
        { word: 'Ughaariya', meaning: 'Illuminated / Opened' }
      ]
    },
    bhavarth: {
      hi: '।। सत्यनाम ।। सतगुरु कबीर साहेब की महिमा अपार है। उन्होंने अंतःकरण के दिव्य नेत्रों को खोलकर उस असीम, अविनाशी सत्यनाम स्वरूप के दर्शन कराए हैं।',
      pb: '।। ਸਤ੍ਯਨਾਮ ।। ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ ਬੇਅੰਤ ਹੈ। ਉਨ੍ਹਾਂ ਨੇ ਜੀਵ ਦੀ ਅੰਦਰੂਨੀ ਦਿਬ ਦ੍ਰਿਸ਼ਟੀ ਖੋਲ੍ਹ ਕੇ ਅਨੰਤ ਸੱਚੇ ਨਾਮ ਦੇ ਦਰਸ਼ਨ ਕਰਵਾਏ ਹਨ।',
      en: '|| Satyanaam || Boundless is the glory of Satguru Kabir Saheb. He has opened the inner eye of divine consciousness, revealing the infinite, imperishable Supreme Truth.'
    }
  },
  {
    angNumber: 3,
    chapterTitle: {
      hi: 'प्रभात अमृत सुमिरन',
      pb: 'ਪ੍ਰਭਾਤ ਅੰਮ੍ਰਿਤ ਸਿਮਰਨ',
      en: 'Morning Nectar Remembrance'
    },
    verseType: 'सबद (Melodic Verse)',
    originalLines: {
      hi: [
        'उठि प्रभात सुमिरो सत्यनाम, मेटो भव के सब संताप।',
        'कबीर कहे सोई जन धन्य, जाके हिरदै गुरु को जाप।।'
      ],
      pb: [
        'ਉਠਿ ਪ੍ਰਭਾਤ ਸੁਮਿਰੋ ਸਤ੍ਯਨਾਮ, ਮੇਟੋ ਭਵ ਕੇ ਸਬ ਸੰਤਾਪ।',
        'ਕਬੀਰ ਕਹੇ ਸੋਈ ਜਨ ਧੰਨ, ਜਾਕੇ ਹਿਰਦੈ ਗੁਰੂ ਕੋ ਜਾਪ।।'
      ],
      en: [
        'Uthi prabhaat sumiro Satyanaam, Meto bhav ke sab santaap.',
        'Kabeer kahe soee jan dhanya, Jaake hirdai guru ko jaap..'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सुमिरो', meaning: 'स्मरण करो / ध्यान लगाओ' },
        { word: 'हिरदै', meaning: 'हृदय में' }
      ],
      pb: [
        { word: 'ਸੁਮਿਰੋ', meaning: 'ਸਿਮਰਨ ਕਰੋ' },
        { word: 'ਹਿਰਦੈ', meaning: 'ਹਿਰਦੇ ਵਿਚ' }
      ],
      en: [
        { word: 'Sumiro', meaning: 'Meditate upon' },
        { word: 'Hirdai', meaning: 'Inner heart' }
      ]
    },
    bhavarth: {
      hi: '।। सत्यनाम ।। प्रभात वेला में उठकर पावन सत्यनाम का सुमिरन करें जिससे जीवन के समस्त संताप दूर हो जाएं। कबीर साहेब कहते हैं कि वही साधक धन्य है जिसके हृदय में निरंतर सतगुरु का जाप चलता है।',
      pb: '।। ਸਤ੍ਯਨਾਮ ।। ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਉੱਠ ਕੇ ਸਤ੍ਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ ਤਾਂ ਜੋ ਸਾਰੇ ਦੁੱਖ-ਕਲੇਸ਼ ਮਿਟ ਜਾਣ। ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਉਹ ਜੀਵ ਧੰਨ ਹੈ ਜਿਸਦੇ ਹਿਰਦੇ ਵਿਚ ਸਤਿਗੁਰੂ ਦਾ ਨਾਮ ਵਸਦਾ ਹੈ।',
      en: '|| Satyanaam || Arise in the auspicious dawn and meditate upon the holy Satyanaam to dissolve all worldly sorrows. Satguru Kabir declares blessed is the devotee whose heart resonates perpetually with the Guru’s divine remembrance.'
    }
  },
  {
    angNumber: 4,
    chapterTitle: {
      hi: 'सतगुरु गायत्री व आरती',
      pb: 'ਸਤਿਗੁਰੂ ਗਾਇਤ੍ਰੀ ਤੇ ਆਰਤੀ',
      en: 'Satguru Gayatri & Aarti'
    },
    verseType: 'आरती (Cosmic Adoration)',
    originalLines: {
      hi: [
        'तन मन धन सब अर्पण कीजै, सतगुरु चरणन चित्त धरीजै।',
        'आरती करूँ संत शिरोमणि, भवसागर से पार करीजै।।'
      ],
      pb: [
        'ਤਨ ਮਨ ਧਨ ਸਬ ਅਰਪਣ ਕੀਜੈ, ਸਤਿਗੁਰੂ ਚਰਣਨ ਚਿੱਤ ਧਰੀਜੈ।',
        'ਆਰਤੀ ਕਰੂੰ ਸੰਤ ਸ਼ਿਰੋਮਣੀ, ਭਵਸਾਗਰ ਸੇ ਪਾਰ ਕਰੀਜੈ।।'
      ],
      en: [
        'Tan man dhan sab arpan keejai, Satguru charnan chitt dhareejai.',
        'Aarti karoon sant shiromani, Bhavsaagar se paar kareejai..'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'अर्पण', meaning: 'समर्पण करना' },
        { word: 'संत शिरोमणि', meaning: 'परम पूज्य सतगुरु' }
      ],
      pb: [
        { word: 'ਅਰਪਣ', meaning: 'ਭੇਟ ਕਰਨਾ' },
        { word: 'ਸ਼ਿਰੋਮਣੀ', meaning: 'ਸਭ ਤੋਂ ਉੱਚੇ' }
      ],
      en: [
        { word: 'Arpan', meaning: 'To surrender with love' },
        { word: 'Sant Shiromani', meaning: 'Crown Jewel of Saints' }
      ]
    },
    bhavarth: {
      hi: '।। सत्यनाम ।। तन, मन और अहंकार सब सतगुरु के पावन चरणों में समर्पित करके उनकी आंतरिक आरती उतारें, जो हमें संसार के आवागमन चक्र से मुक्त कर देते हैं। ।। साहेब बंदगी साहेब ।।',
      pb: '।। ਸਤ੍ਯਨਾਮ ।। ਤਨ, ਮਨ ਤੇ ਸਭ ਕੁਝ ਸਤਿਗੁਰੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿਚ ਸਮਰਪਿਤ ਕਰਕੇ ਆਤਮਿਕ ਆਰਤੀ ਕਰੋ, ਜੋ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਾਰਦੇ ਹਨ। ।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।',
      en: '|| Satyanaam || Surrender body, mind, and ego at the lotus feet of Satguru Kabir, illuminating the inner temple of heart in divine adoration. || Saheb Bandagi Saheb ||'
    }
  }
];

// ----------------------------------------------------------------------------
// Single Page / Ang Component with Two-Part Layout
// ----------------------------------------------------------------------------
export const NitnemAngItem = forwardRef<HTMLDivElement, {
  ang: NitnemAngData;
  totalAngs: number;
  language: Language;
  onSpeak: (text: string) => void;
  isSpeaking: boolean;
  onCopy: (text: string, angNum: number) => void;
  isCopied: boolean;
  onBookmark: (angNum: number) => void;
  isBookmarked: boolean;
}>(({ ang, totalAngs, language, onSpeak, isSpeaking, onCopy, isCopied, onBookmark, isBookmarked }, ref) => {
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const { fontSize } = useAppTheme();

  // Theme Constants: Cream #FFFDD0, Sacred Maroon #8B4513, Gold #C59A3F
  const pothiColors = {
    bg: '#FAF4E8',
    cream: '#FFFDD0',
    maroon: '#8B4513',
    maroonDark: '#5C2C16',
    gold: '#C59A3F',
    text: '#3D2817'
  };

  // Dynamic Font Size Mapping
  interface FontMap { [key: string]: string }
  const baniFontSizes: FontMap = {
    small: 'text-sm sm:text-base',
    normal: 'text-base sm:text-xl',
    medium: 'text-base sm:text-xl',
    large: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl md:text-4xl',
    xlarge: 'text-2xl sm:text-3xl md:text-4xl',
    elderly: 'text-3xl sm:text-4xl md:text-5xl font-black text-[#3D2817]',
  };

  const meaningFontSizes: FontMap = {
    small: 'text-[10px] sm:text-xs',
    normal: 'text-xs sm:text-sm',
    medium: 'text-xs sm:text-sm',
    large: 'text-sm sm:text-base',
    xl: 'text-base sm:text-lg',
    xlarge: 'text-base sm:text-lg',
    elderly: 'text-lg sm:text-xl font-bold',
  };

  const lines = ang.originalLines[language] || ang.originalLines.hi;
  const meaning = ang.bhavarth[language] || ang.bhavarth.hi;
  const title = ang.chapterTitle[language] || ang.chapterTitle.hi;
  const shabdarthList = ang.shabdarth?.[language] || ang.shabdarth?.hi;

  return (
    <div 
      ref={ref}
      className="nitnem-ang-page w-full h-full select-none overflow-hidden relative shadow-2xl flex flex-col justify-between"
      style={{
        backgroundColor: pothiColors.bg,
        color: pothiColors.text,
        fontFamily: "'Noto Serif Devanagari', 'Cinzel', serif",
        boxShadow: 'inset 0 0 35px rgba(139, 69, 19, 0.2), 0 10px 25px rgba(0,0,0,0.2)',
        borderRight: ang.angNumber % 2 !== 0 ? '1px solid rgba(139, 69, 19, 0.2)' : 'none',
        borderLeft: ang.angNumber % 2 === 0 ? '1px solid rgba(139, 69, 19, 0.2)' : 'none'
      }}
    >
      {/* Traditional Pothi Red Sacred Spine Line */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-10"
        style={{
          width: '3px',
          left: ang.angNumber % 2 === 0 ? '24px' : 'auto',
          right: ang.angNumber % 2 !== 0 ? '24px' : 'auto',
          backgroundColor: '#9E2A2B',
          opacity: 0.4
        }}
      />

      {/* Main Content Area */}
      <div 
        className="p-4 sm:p-6 flex-1 flex flex-col justify-between relative z-10 h-full overflow-y-auto scrollbar-hide"
        style={{
          paddingLeft: ang.angNumber % 2 === 0 ? '2.2rem' : '1.25rem',
          paddingRight: ang.angNumber % 2 !== 0 ? '2.2rem' : '1.25rem'
        }}
      >
        {/* HEADER: Granth Name, Chapter & Ang Indicator */}
        <div className="border-b pb-2 flex items-center justify-between gap-2" style={{ borderColor: `${pothiColors.gold}50` }}>
          <div className="flex items-center gap-1.5">
            <span 
              className="text-[10px] font-black px-2 py-0.5 rounded text-white tracking-wider"
              style={{ backgroundColor: pothiColors.maroon }}
            >
              {language === 'pb' ? '।।ਸਤ੍ਯਨਾਮ।।' : language === 'en' ? '|| Satyanaam ||' : '।।सत्यनाम।।'}
            </span>
            <span className="text-xs font-bold truncate text-[#8B4513]">
              {title}
            </span>
          </div>

          <span 
            className="text-xs font-black px-2.5 py-0.5 rounded-full border shadow-inner"
            style={{ 
              borderColor: pothiColors.gold, 
              backgroundColor: pothiColors.cream,
              color: pothiColors.maroon
            }}
          >
            अंग {ang.angNumber} / {totalAngs}
          </span>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* PART 1: UPPER SECTION - SACRED WOODEN/GOLD FRAME WITH ORIGINAL TEXT */}
        {/* ------------------------------------------------------------------ */}
        <div className="my-2.5">
          <div 
            className="rounded-2xl p-1 shadow-md transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #5C2C16 0%, #8B4513 50%, #3D1C06 100%)',
              boxShadow: '0 6px 16px rgba(92, 53, 19, 0.3)'
            }}
          >
            <div 
              className="rounded-xl p-3.5 sm:p-5 text-center relative overflow-hidden"
              style={{
                backgroundColor: pothiColors.cream,
                border: `2px solid ${pothiColors.gold}`,
                boxShadow: 'inset 0 0 15px rgba(197, 154, 63, 0.25)'
              }}
            >
              {/* Corner Accents */}
              <span className="absolute top-1 left-1 text-xs opacity-60 text-[#8B4513]">❖</span>
              <span className="absolute top-1 right-1 text-xs opacity-60 text-[#8B4513]">❖</span>
              <span className="absolute bottom-1 left-1 text-xs opacity-60 text-[#8B4513]">❖</span>
              <span className="absolute bottom-1 right-1 text-xs opacity-60 text-[#8B4513]">❖</span>

              {/* Action Toolbar */}
              <div className="mb-2 flex items-center justify-between border-b pb-1.5" style={{ borderColor: `${pothiColors.gold}40` }}>
                <span className="text-[11px] font-bold font-serif text-[#8B4513]">
                  {ang.verseType}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onSpeak(lines.join(' '))}
                    className="p-1 rounded hover:bg-[#8B4513]/10 transition cursor-pointer"
                    title={isSpeaking ? "विराम (Pause)" : "वाणी श्रवण (Listen)"}
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-3.5 h-3.5 text-red-700 animate-pulse" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-[#8B4513]" />
                    )}
                  </button>

                  <button
                    onClick={() => onCopy(lines.join('\n') + '\n\n' + meaning, ang.angNumber)}
                    className="p-1 rounded hover:bg-[#8B4513]/10 transition cursor-pointer"
                    title="पद्य कॉपी करें"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Share2 className="w-3.5 h-3.5 text-[#8B4513]" />}
                  </button>

                  <button
                    onClick={() => onBookmark(ang.angNumber)}
                    className="p-1 rounded hover:bg-[#8B4513]/10 transition cursor-pointer"
                    title="सहेजें"
                  >
                    {isBookmarked ? <CheckCircle2 className="w-3.5 h-3.5 text-[#8B4513]" /> : <Bookmark className="w-3.5 h-3.5 opacity-70 text-[#8B4513]" />}
                  </button>
                </div>
              </div>

              {/* Sacred Original Bani */}
              <div 
                className="space-y-2 py-1"
                style={{
                  direction: 'ltr',
                  textAlign: 'center'
                }}
              >
                {lines.map((l, lIdx) => (
                  <p 
                    key={lIdx}
                    className={`font-serif font-black leading-relaxed tracking-wide text-[#3D2817] ${baniFontSizes[fontSize] || baniFontSizes.medium}`}
                  >
                    {l}
                  </p>
                ))}
              </div>

              <div className="mt-2 text-center text-xs opacity-60 text-[#C59A3F] select-none">
                ─── ꧁ ☬ ꧂ ───
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* PART 2: LOWER SECTION - TRILINGUAL TRANSLATED MEANING & SHABDARTH */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex-1 mt-1 flex flex-col justify-end">
          <div 
            className="rounded-xl p-3 sm:p-4 border shadow-inner"
            style={{
              backgroundColor: '#FAF4E8',
              borderColor: `${pothiColors.gold}60`
            }}
          >
            {/* Header & Toggle */}
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b" style={{ borderColor: `${pothiColors.gold}40` }}>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B4513]">
                <BookOpen className="w-3.5 h-3.5 text-[#8B4513]" />
                <span>
                  {language === 'hi' ? 'पावन भावार्थ एवं अर्थ' : language === 'pb' ? 'ਪਾਵਨ ਭਾਵਾਰਥ ਤੇ ਅਰਥ' : 'Spiritual Meaning & Essence'}
                </span>
              </div>

              <button
                onClick={() => setShowMeaning(!showMeaning)}
                className="p-1 rounded text-xs opacity-70 hover:opacity-100 transition cursor-pointer text-[#8B4513]"
                title={showMeaning ? "अर्थ छिपाएं" : "अर्थ देखें"}
              >
                {showMeaning ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3 opacity-60" />}
              </button>
            </div>

            {/* Shabdarth */}
            {showMeaning && shabdarthList && shabdarthList.length > 0 && (
              <div className={`mb-2 pb-1.5 border-b border-dashed border-[#8B4513]/20 space-y-0.5 ${meaningFontSizes[fontSize] || meaningFontSizes.medium}`}>
                <span className="font-bold text-[#8B4513]">
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

            {/* Spiritual Meaning */}
            {showMeaning ? (
              <p className={`font-serif leading-relaxed text-[#3D2817] text-justify opacity-95 ${meaningFontSizes[fontSize] || meaningFontSizes.medium}`}>
                {meaning}
              </p>
            ) : (
              <p className="text-[11px] text-center italic opacity-60 py-1">
                (भावार्थ छिपा हुआ है - आँख के चिह्न पर टैप करें)
              </p>
            )}
          </div>
        </div>

        {/* Sacred Concluding Salutation on Final Ang */}
        {ang.angNumber === totalAngs && (
          <div className="my-2 text-center">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-serif font-black bg-amber-500/20 text-[#8B4513] border border-amber-400/50 shadow-2xs">
              {language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।।साहेब बन्दगी साहेब।।'}
            </span>
          </div>
        )}

        {/* FOOTER */}
        <div className="pt-2 mt-1 border-t flex items-center justify-between text-[10px] opacity-70 text-[#8B4513]" style={{ borderColor: `${pothiColors.gold}40` }}>
          <span>{ang.angNumber % 2 === 0 ? '👈 बायां पन्ना' : 'दायां पन्ना 👉'}</span>
          <span className="italic">स्वाइप करके पन्ना पलटें 📖</span>
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
// MAIN NITNEM POTHI 3D COMPONENT
// ----------------------------------------------------------------------------
export const NitnemPothi: React.FC<{
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
  onClose?: () => void;
}> = ({
  language = 'hi',
  onLanguageChange,
  onClose
}) => {
  const { theme } = useAppTheme();
  const [currentLang, setCurrentLang] = useState<Language>(language);
  const [currentAngIdx, setCurrentAngIdx] = useState<number>(0);

  useEffect(() => {
    setCurrentLang(language);
  }, [language]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedAng, setCopiedAng] = useState<number | null>(null);
  const [bookmarkedAng, setBookmarkedAng] = useState<number | null>(null);
  const [isAutoTurn, setIsAutoTurn] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleLangSwitch = (newLang: Language) => {
    setCurrentLang(newLang);
    if (onLanguageChange) onLanguageChange(newLang);
  };

  const flipNext = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipNext();
        return;
      } catch (e) {}
    }
    setCurrentAngIdx(prev => Math.min(NITNEM_PRABHAT_ANGS.length - 1, prev + 1));
  };

  const flipPrev = () => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipPrev();
        return;
      } catch (e) {}
    }
    setCurrentAngIdx(prev => Math.max(0, prev - 1));
  };

  const jumpToAng = (idx: number) => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().turnToPage(idx);
        return;
      } catch (e) {}
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
    navigator.clipboard.writeText(text);
    setCopiedAng(angNum);
    setTimeout(() => setCopiedAng(null), 2000);
  };

  const handleBookmark = (angNum: number) => {
    setBookmarkedAng(angNum);
    setTimeout(() => setBookmarkedAng(null), 2000);
  };

  // Touch swipe support
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

  // Single Ang Fallback view
  const FallbackView = (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
    >
      <NitnemAngItem
        ang={NITNEM_PRABHAT_ANGS[currentAngIdx] || NITNEM_PRABHAT_ANGS[0]}
        totalAngs={NITNEM_PRABHAT_ANGS.length}
        language={currentLang}
        onSpeak={handleSpeak}
        isSpeaking={isSpeaking}
        onCopy={handleCopy}
        isCopied={copiedAng === (currentAngIdx + 1)}
        onBookmark={handleBookmark}
        isBookmarked={bookmarkedAng === (currentAngIdx + 1)}
      />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={`nitnem-pothi-wrapper w-full flex flex-col items-center justify-between rounded-3xl transition-all duration-300 relative ${
        isFullscreen ? 'fixed inset-0 z-50 p-4 bg-stone-950 text-white overflow-hidden' : 'space-y-4 my-2'
      }`}
    >
      {/* Standardized Sacred Top Bar (Satyanaam ONLY) */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-4 select-none flex items-center justify-center overflow-hidden min-h-[42px] w-full"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {currentLang === 'pb' ? '🌹 ।। ਸਤਯਨਾਮ ।। 🌹' : currentLang === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Sacred Top Bar with Language Switcher & Controls */}
      <div 
        className="w-full p-4 rounded-3xl border shadow-md flex flex-wrap items-center justify-between gap-4"
        style={{
          backgroundColor: '#FFFDD0', // Cream
          borderColor: '#8B4513' // Sacred Maroon
        }}
      >
        {/* Title & Invocation */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#8B4513] text-white shadow-xs">
            <BookOpen className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-serif font-black text-base sm:text-lg text-[#8B4513] flex items-center gap-2">
              {currentLang === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ • 3D ਪੋਥੀ' : currentLang === 'en' ? 'Nitnem Gutka Saheb • 3D Pothi' : 'नितनेम गुटका साहेब • 3D पोथी पठन'}
            </h3>
            <p className="text-xs font-serif text-[#8B4513]/80">
              {currentLang === 'pb' ? 'ਅੰਗ' : currentLang === 'en' ? 'Ang' : 'अंग'} {currentAngIdx + 1} / {NITNEM_PRABHAT_ANGS.length} • {currentLang === 'pb' ? 'ਪ੍ਰਭਾਤ ਪਾਠ ਤੇ ਸਾਹੇਬ ਵੰਦਨਾ' : currentLang === 'en' ? 'Morning Prayers' : 'प्रभात पाठ व साहेब वंदना'}
            </p>
          </div>
        </div>

        {/* Zero-Reload Trilingual Switcher */}
        <LanguageSwitcher
          currentLang={currentLang}
          onLanguageChange={handleLangSwitch}
          variant="pothi-compact"
        />

        {/* Auto Turn & Fullscreen */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoTurn(!isAutoTurn)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 transition cursor-pointer ${
              isAutoTurn 
                ? 'bg-[#8B4513] text-white shadow-xs' 
                : 'bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20'
            }`}
          >
            {isAutoTurn ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>
              {isAutoTurn 
                ? (currentLang === 'pb' ? 'ਵਿਰਾਮ' : currentLang === 'en' ? 'Pause' : 'विराम') 
                : (currentLang === 'pb' ? 'ਸਵੈ-ਪਾਠ' : currentLang === 'en' ? 'Auto Play' : 'स्वतः पठन')
              }
            </span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20 transition cursor-pointer"
              title={currentLang === 'pb' ? 'ਬੰਦ ਕਰੋ' : currentLang === 'en' ? 'Close' : 'बंद करें'}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 3D Pothi Book Stage */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full flex items-center justify-center my-2 sm:my-4 relative min-h-[580px] sm:min-h-[640px]"
      >
        {/* Previous Flap */}
        <button
          onClick={flipPrev}
          disabled={currentAngIdx === 0}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-2xl border transition-all cursor-pointer ${
            currentAngIdx === 0
              ? 'opacity-30 cursor-not-allowed bg-black/20 text-gray-400'
              : 'bg-[#8B4513] text-white hover:scale-110 active:scale-95'
          }`}
          title={currentLang === 'pb' ? 'ਪਿਛਲਾ ਪੰਨਾ' : currentLang === 'en' ? 'Previous Page' : 'पिछला पन्ना'}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* 3D Flip Canvas */}
        <NitnemErrorBoundary fallback={FallbackView}>
          <div className="pothi-flipbook-container shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center w-full max-w-3xl">
            {FlipBookComponent ? (
              <FlipBookComponent
                key={`nitnem-flip-${currentLang}-${NITNEM_PRABHAT_ANGS.length}`}
                ref={bookRef}
                width={420}
                height={580}
                size="stretch"
                minWidth={280}
                maxWidth={580}
                minHeight={520}
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
                flippingTime={900}
                usePortrait={true}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
              >
                {NITNEM_PRABHAT_ANGS.map((angItem, idx) => (
                  <NitnemAngItem
                    key={idx}
                    ang={angItem}
                    totalAngs={NITNEM_PRABHAT_ANGS.length}
                    language={currentLang}
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

        {/* Next Flap */}
        <button
          onClick={flipNext}
          disabled={currentAngIdx >= NITNEM_PRABHAT_ANGS.length - 1}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-2xl border transition-all cursor-pointer ${
            currentAngIdx >= NITNEM_PRABHAT_ANGS.length - 1
              ? 'opacity-30 cursor-not-allowed bg-black/20 text-gray-400'
              : 'bg-[#8B4513] text-white hover:scale-110 active:scale-95'
          }`}
          title={currentLang === 'pb' ? 'ਅਗਲਾ ਪੰਨਾ' : currentLang === 'en' ? 'Next Page' : 'अगला पन्ना'}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Ang Selector Bar */}
      <div 
        className="w-full p-3 rounded-2xl border shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs"
        style={{ backgroundColor: '#FFFDD0', borderColor: '#8B4513' }}
      >
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#8B4513]">
            {currentLang === 'pb' ? 'ਅੰਗ ਚੁਣੋ:' : currentLang === 'en' ? 'Select Ang:' : 'अंग चुनें:'}
          </span>
          <select
            value={currentAngIdx}
            onChange={(e) => jumpToAng(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold font-serif outline-none bg-white text-[#8B4513] border-[#8B4513]/40 cursor-pointer"
          >
            {NITNEM_PRABHAT_ANGS.map((ang, idx) => (
              <option key={idx} value={idx}>
                {currentLang === 'pb' ? 'ਅੰਗ' : currentLang === 'en' ? 'Ang' : 'अंग'} {ang.angNumber}: {ang.chapterTitle[currentLang] || ang.chapterTitle.hi}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => jumpToAng(0)}
            className="px-2.5 py-1 rounded-lg border bg-[#8B4513]/10 text-[#8B4513] font-bold hover:bg-[#8B4513]/20 transition cursor-pointer"
          >
            {currentLang === 'pb' ? 'ਪਹਿਲਾ ਅੰਗ' : currentLang === 'en' ? 'First Ang' : 'प्रथम अंग'}
          </button>
          <button
            onClick={() => jumpToAng(NITNEM_PRABHAT_ANGS.length - 1)}
            className="px-2.5 py-1 rounded-lg border bg-[#8B4513]/10 text-[#8B4513] font-bold hover:bg-[#8B4513]/20 transition cursor-pointer"
          >
            {currentLang === 'pb' ? 'ਆਖ਼ਰੀ ਅੰਗ' : currentLang === 'en' ? 'Last Ang' : 'अंतिम अंग'}
          </button>
        </div>
      </div>
    </div>
  );
};
