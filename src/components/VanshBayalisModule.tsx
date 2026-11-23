import React, { useState, useEffect } from 'react';
import {
  Crown,
  CheckCircle2,
  Circle,
  BookOpen,
  History,
  Award,
  ArrowRight,
} from 'lucide-react';
import { AppView, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { NewModulesNavBar } from './NewModulesNavBar';

interface VanshBayalisModuleProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onNavigateView: (view: AppView) => void;
  onClose: () => void;
}

interface VanshSection {
  id: string;
  title: Record<Language, string>;
  body: Record<Language, string>;
}

const VANSH_CONTENT: Record<
  Language,
  {
    title: string;
    subtitle: string;
    studiedLabel: string;
    markStudied: string;
    studiedDone: string;
    exploreLineage: string;
    takeQuiz: string;
  }
> = {
  hi: {
    title: 'वंश बयालीस (४२ पीढ़ियों) की पावन परंपरा एवं रहस्य',
    subtitle:
      'सद्गुरु कबीर साहेब द्वारा धनी धर्मदास साहेब जी को प्रदान किए गए दिव्य आशीर्वाद और अटल गुरु परंपरा का परिचय।',
    studiedLabel: 'अध्ययन प्रगति:',
    markStudied: 'पठित चिन्हित करें',
    studiedDone: 'अध्ययन पूर्ण',
    exploreLineage: 'संपूर्ण आचार्य परंपरा इतिहास देखें',
    takeQuiz: 'कबीर ज्ञान प्रश्नोत्तरी हल करें',
  },
  pb: {
    title: 'ਵੰਸ਼ ਬਿਆਲੀ (੪੨ ਪੀੜ੍ਹੀਆਂ) ਦੀ ਪਾਵਨ ਪਰੰਪਰਾ ਅਤੇ ਮਹਿਮਾ',
    subtitle:
      'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਵੱਲੋਂ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਨੂੰ ਬਖ਼ਸ਼ੇ ਗਏ ਦਿਵ੍ਯ ਵਰਦਾਨ ਅਤੇ ਅਟੱਲ ਗੁਰੂ ਪਰੰਪਰਾ ਦਾ ਪਰਿਚੈ।',
    studiedLabel: 'ਅਧਿਐਨ ਪ੍ਰਗਤੀ:',
    markStudied: 'ਪੜ੍ਹਿਆ ਹੋਇਆ ਚਿੰਨ੍ਹਿਤ ਕਰੋ',
    studiedDone: 'ਅਧਿਐਨ ਸੰਪੂਰਨ',
    exploreLineage: 'ਸਮੁੱਚੀ ਆਚਾਰੀਆ ਪਰੰਪਰਾ ਇਤਿਹਾਸ ਵੇਖੋ',
    takeQuiz: 'ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ ਖੇਡੋ',
  },
  en: {
    title: 'The Sacred Tradition & Glory of Vansh Bayalis (42 Generations)',
    subtitle:
      'An introduction to the divine boon granted by Sadguru Kabir Saheb to Dhani Dharmadas Saheb Ji and the unbroken Guru lineage.',
    studiedLabel: 'Study Progress:',
    markStudied: 'Mark as Studied',
    studiedDone: 'Studied',
    exploreLineage: 'Explore Full Acharya Parampara History',
    takeQuiz: 'Take the Kabir Gyan Quiz',
  },
};

const VANSH_SECTIONS: VanshSection[] = [
  {
    id: 'sec-1-what-is',
    title: {
      hi: '१. वंश बयालीस क्या है?',
      pb: '੧. ਵੰਸ਼ ਬਿਆਲੀ ਕੀ ਹੈ?',
      en: '1. What is Vansh Bayalis?',
    },
    body: {
      hi: "'वंश बयालीस' का अर्थ है ४२ पीढ़ियों तक चलने वाली अखंड वंशावली। सद्गुरु कबीर साहेब ने अपने परम शिष्य धनी धर्मदास साहेब जी और माता आमिनी देवी की अनन्य भक्ति से प्रसन्न होकर वरदान दिया था कि उनके कुल में ४२ पीढ़ियों तक सत्यनाम की ज्योति प्रज्वलित करने वाले वंशाचार्य अवतरित होंगे।",
      pb: "'ਵੰਸ਼ ਬਿਆਲੀ' ਦਾ ਅਰਥ ਹੈ ੪੨ ਪੀੜ੍ਹੀਆਂ ਤੱਕ ਚੱਲਣ ਵਾਲੀ ਅਖੰਡ ਵੰਸ਼ਾਵਲੀ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਆਪਣੇ ਪਰਮ ਸ਼ਿਸ਼ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਅਤੇ ਮਾਤਾ ਆਮਿਨੀ ਦੇਵੀ ਦੀ ਅਨਿੰਨ ਭਗਤੀ ਤੋਂ ਪ੍ਰਸੰਨ ਹੋ ਕੇ ਵਰਦਾਨ ਦਿੱਤਾ ਸੀ ਕਿ ਉਨ੍ਹਾਂ ਦੀ ਕੁੱਲ ਵਿੱਚ ੪੨ ਪੀੜ੍ਹੀਆਂ ਤੱਕ ਸਤਯਨਾਮ ਦੀ ਜੋਤ ਜਗਾਉਣ ਵਾਲੇ ਵੰਸ਼ਾਚਾਰੀਆ ਪ੍ਰਗਟ ਹੋਣਗੇ।",
      en: "'Vansh Bayalis' literally translates to a lineage of 42 generations. Pleased with the supreme devotion of Dhani Dharmadas Saheb Ji and Mata Amini Devi, Sadguru Kabir Saheb blessed them that 42 successive Vanshacharyas would manifest in their lineage to keep the eternal flame of Satyanaam burning in the world.",
    },
  },
  {
    id: 'sec-2-manifestation',
    title: {
      hi: '२. वंशाचार्यों का दिव्य प्राकट्य',
      pb: '੨. ਵੰਸ਼ਾਚਾਰੀਆਂ ਦਾ ਦਿਵ੍ਯ ਪ੍ਰਕਾਸ਼',
      en: '2. Divine Manifestation of Vanshacharyas',
    },
    body: {
      hi: "इस पावन परंपरा के अनुसार, प्रत्येक वंशाचार्य का प्राकट्य किसी साधारण सांसारिक विधि से नहीं, बल्कि सद्गुरु कबीर साहेब के आशीर्वाद (नारियल और पान के परवाना प्रसाद) से होता है। प्रत्येक वंशाचार्य के नाम के साथ 'नाम साहेब' जुड़ता है, जो सत्यनाम की अखंडता का प्रतीक है।",
      pb: "ਇਸ ਪਾਵਨ ਪਰੰਪਰਾ ਅਨੁਸਾਰ, ਹਰੇਕ ਵੰਸ਼ਾਚਾਰੀਆ ਦਾ ਪ੍ਰਕਾਸ਼ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਆਸ਼ੀਰਵਾਦ (ਨਾਰੀਅਲ ਅਤੇ ਪਾਨ ਦੇ ਪਰਵਾਨਾ ਪ੍ਰਸ਼ਾਦ) ਸਦਕਾ ਹੁੰਦਾ ਹੈ। ਹਰੇਕ ਵੰਸ਼ਾਚਾਰੀਆ ਦੇ ਨਾਮ ਨਾਲ 'ਨਾਮ ਸਾਹੇਬ' ਜੁੜਦਾ ਹੈ, ਜੋ ਸਤਯਨਾਮ ਦੀ ਅਖੰਡਤਾ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।",
      en: "According to sacred tradition, the birth of each Vanshacharya occurs through the divine blessing (blessed coconut and betel leaf Parwana) of Sadguru Kabir Saheb. Every Acharya carries the sacred title 'Naam Saheb', symbolizing the eternal Satyanaam.",
    },
  },
  {
    id: 'sec-3-preservation',
    title: {
      hi: '३. पंथ की मर्यादा और रक्षा',
      pb: '੩. ਪੰਥ ਦੀ ਮਰਿਆਦਾ ਅਤੇ ਰੱਖਿਆ',
      en: '3. Preservation of the Path',
    },
    body: {
      hi: "धर्मदास साहेब के परिवार के एक पुत्र (नारायणदास) द्वारा पंथ की मर्यादा से विमुख होने पर, कबीर साहेब ने द्वितीय पुत्र 'चूड़ामणि (मुक्तामणि) नाम साहेब' से वंश बयालीस की स्थापना की, ताकि काल (माया) के प्रभाव से जीवों को बचाया जा सके और चौका-आरती एवं सत्यनाम का मार्ग युगों तक सुरक्षित रहे।",
      pb: "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਦੇ ਪਰਿਵਾਰ ਵਿੱਚੋਂ ਸੱਚੇ ਮਾਰਗ ਦੀ ਰੱਖਿਆ ਲਈ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਪੁੱਤਰ 'ਚੂੜਾਮਣੀ (ਮੁਕਤਾਮਣੀ) ਨਾਮ ਸਾਹੇਬ' ਜੀ ਤੋਂ ਵੰਸ਼ ਬਿਆਲੀ ਦੀ ਨੀਂਹ ਰੱਖੀ, ਤਾਂ ਜੋ ਕਾਲ (ਮਾਇਆ) ਦੇ ਪ੍ਰਭਾਵ ਤੋਂ ਜੀਵਾਂ ਨੂੰ ਬਚਾਇਆ ਜਾ ਸਕੇ ਅਤੇ ਚੌਕਾ-ਆਰਤੀ ਤੇ ਸਤਯਨਾਮ ਦਾ ਮਾਰਗ ਸੁਰੱਖਿਅਤ ਰਹੇ।",
      en: "To protect the pure spiritual path from worldly distortions, Sadguru Kabir Saheb initiated the Vansh Bayalis lineage through Dharmadas Ji's blessed son, Panth Shri Chudamani (Muktamani) Naam Saheb Ji, ensuring that the Satvik Chauka-Aarti and true devotion guide humanity for ages.",
    },
  },
  {
    id: 'sec-4-present-era',
    title: {
      hi: '४. वर्तमान कालखंड',
      pb: '੪. ਵਰਤਮਾਨ ਕਾਲਖੰਡ',
      en: '4. The Present Era',
    },
    body: {
      hi: 'वर्तमान में इस दिव्य ४२ वंश परंपरा के १५वें वंशाचार्य पंथ श्री हुजूर प्रकाशमुनि नाम साहेब जी एवं १६वें नवोदित वंशाचार्य पंथ श्री हुजूर उदितमुनि नाम साहेब जी दामाखेड़ा गद्दी से इस अटल परंपरा को आगे बढ़ा रहे हैं।',
      pb: 'ਵਰਤਮਾਨ ਸਮੇਂ ਇਸ ਦਿਵ੍ਯ ੪੨ ਵੰਸ਼ ਪਰੰਪਰਾ ਦੇ ੧੫ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਅਤੇ ੧੬ਵੇਂ ਨਵੋਦਿਤ ਵੰਸ਼ਾਚਾਰੀਆ ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਉਦਿਤਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਤੋਂ ਇਸ ਅਟੱਲ ਪਰੰਪਰਾ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਹੇ ਹਨ।',
      en: 'Today, the 15th Vanshacharya, Panth Shri Huzoor Prakashmuni Naam Saheb Ji, and the 16th emerging Vanshacharya, Panth Shri Huzoor Uditmuni Naam Saheb Ji, carry forward this eternal 42-generation legacy from Kabir Dharmanagar, Damakheda.',
    },
  },
];

const STORAGE_KEY = 'sahebworld_vansh_bayalis_studied_v1';

export const VanshBayalisModule: React.FC<VanshBayalisModuleProps> = ({
  language,
  onSelectLanguage,
  onNavigateView,
  onClose,
}) => {
  const { theme, isDarkMode } = useAppTheme();

  const [studiedIds, setStudiedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studiedIds));
    } catch {}
  }, [studiedIds]);

  const toggleSectionStudied = (id: string) => {
    sacredHaptics.lightTap();
    setStudiedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const ui = VANSH_CONTENT[language] || VANSH_CONTENT.hi;

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 animate-fadeIn">
      <NewModulesNavBar
        currentView="vansh-bayalis"
        language={language}
        onSelectLanguage={onSelectLanguage}
        onNavigateView={onNavigateView}
        onClose={onClose}
      />

      {/* Header */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
          borderColor: '#D97706',
        }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-md space-y-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6B1D1D] text-amber-300 flex items-center justify-center shrink-0">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h1
                style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                className="text-xl sm:text-3xl font-serif font-black tracking-tight"
              >
                {ui.title}
              </h1>
            </div>
          </div>
          <span
            style={{ color: theme.textSecondary }}
            className="text-xs font-serif font-bold tabular-nums"
          >
            {ui.studiedLabel} {studiedIds.length} / {VANSH_SECTIONS.length}
          </span>
        </div>

        <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed">
          {ui.subtitle}
        </p>

        <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#D97706] rounded-full transition-all duration-300"
            style={{ width: `${(studiedIds.length / VANSH_SECTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 4 Structured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VANSH_SECTIONS.map((sec) => {
          const isStudied = studiedIds.includes(sec.id);
          return (
            <div
              key={sec.id}
              style={{
                backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
                borderColor: isStudied ? '#D97706' : theme.cardBorder,
              }}
              className="rounded-3xl border p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4 transition"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h2
                    style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                    className="text-base sm:text-lg font-serif font-black leading-snug"
                  >
                    {sec.title[language]}
                  </h2>
                  <BookOpen className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                </div>
                <p
                  style={{ color: theme.textPrimary }}
                  className="text-xs sm:text-sm font-serif leading-relaxed opacity-90"
                >
                  {sec.body[language]}
                </p>
              </div>

              <div className="pt-3 border-t flex justify-end" style={{ borderColor: theme.cardBorder }}>
                <button
                  type="button"
                  onClick={() => toggleSectionStudied(sec.id)}
                  style={
                    isStudied
                      ? { backgroundColor: '#6B1D1D', color: '#FFFFFF' }
                      : { backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }
                  }
                  className="min-h-[38px] px-3.5 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer transition"
                >
                  {isStudied ? (
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 opacity-50 shrink-0" />
                  )}
                  <span>{isStudied ? ui.studiedDone : ui.markStudied}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onNavigateView('acharya-parampara');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
            borderColor: '#D97706',
            color: isDarkMode ? '#FDE68A' : '#6B1D1D',
          }}
          className="min-h-[52px] p-4 rounded-2xl border text-sm font-serif font-bold flex items-center justify-between gap-3 cursor-pointer hover:brightness-95 transition"
        >
          <span className="flex items-center gap-2">
            <History className="w-5 h-5 text-[#D97706] shrink-0" />
            <span>{ui.exploreLineage}</span>
          </span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onNavigateView('kabir-gyan-quiz');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="min-h-[52px] p-4 rounded-2xl bg-[#6B1D1D] hover:bg-[#541515] text-white text-sm font-serif font-bold flex items-center justify-between gap-3 cursor-pointer transition shadow-sm"
        >
          <span className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300 shrink-0" />
            <span>{ui.takeQuiz}</span>
          </span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>

      <p style={{ color: theme.sacredMaroon }} className="text-center text-xs sm:text-sm font-serif font-bold pt-2">
        {SACRED_BRANDING.footer[language]}
      </p>
    </div>
  );
};
