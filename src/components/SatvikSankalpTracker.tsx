import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  Calendar,
  Award,
  CheckCircle2,
  Lock,
  Flame,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { AppView, Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { NewModulesNavBar } from './NewModulesNavBar';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface SatvikSankalpTrackerProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onNavigateView: (view: AppView) => void;
  onClose: () => void;
}

type SankalpTypeId = 'de-addiction' | 'pure-veg' | 'sumiran-truth';

interface SankalpState {
  selectedVow: SankalpTypeId;
  startDate: string; // YYYY-MM-DD
  checkInDates: string[]; // array of YYYY-MM-DD
}

const STORAGE_KEY = 'sahebworld_satvik_sankalp_v1';

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function diffDaysInclusive(startIso: string, endIso: string): number {
  const [sy, sm, sd] = startIso.split('-').map(Number);
  const [ey, em, ed] = endIso.split('-').map(Number);
  if (!sy || !sm || !sd || !ey || !em || !ed) return 1;
  const startUtc = Date.UTC(sy, sm - 1, sd);
  const endUtc = Date.UTC(ey, em - 1, ed);
  const diff = Math.floor((endUtc - startUtc) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
}

const VOW_OPTIONS: Array<{
  id: SankalpTypeId;
  title: Record<Language, string>;
  desc: Record<Language, string>;
}> = [
  {
    id: 'de-addiction',
    title: {
      hi: 'नशामुक्ति (Complete De-addiction)',
      pb: 'ਨਸ਼ਾ-ਮੁਕਤੀ (Complete De-addiction)',
      en: 'Complete De-addiction',
    },
    desc: {
      hi: 'मद्य, तंबाकू व सभी नशीले पदार्थों से पूर्ण त्याग का अटल संकल्प।',
      pb: 'ਸ਼ਰਾਬ, ਤੰਬਾਕੂ ਅਤੇ ਹਰ ਤਰ੍ਹਾਂ ਦੇ ਨਸ਼ਿਆਂ ਦੇ ਪੂਰਨ ਤਿਆਗ ਦਾ ਅਟੱਲ ਸੰਕਲਪ।',
      en: 'Steadfast pledge to abstain completely from alcohol, tobacco, and intoxicants.',
    },
  },
  {
    id: 'pure-veg',
    title: {
      hi: 'पूर्ण शाकाहार (Pure Vegetarianism)',
      pb: 'ਪੂਰਨ ਸ਼ਾਕਾਹਾਰ (Pure Vegetarianism)',
      en: 'Pure Vegetarianism',
    },
    desc: {
      hi: 'जीव दया एवं अहिंसा के पालन हेतु शुद्ध सात्विक शाकाहारी आहार।',
      pb: 'ਜੀਵ ਦਇਆ ਅਤੇ ਅਹਿੰਸਾ ਦੀ ਪਾਲਣਾ ਲਈ ਸ਼ੁੱਧ ਸਾਤਵਿਕ ਸ਼ਾਕਾਹਾਰੀ ਭੋਜਨ।',
      en: 'Pure vegetarian Satvik living rooted in compassion and non-violence.',
    },
  },
  {
    id: 'sumiran-truth',
    title: {
      hi: 'दैनिक सुमिरन एवं सत्य आचरण',
      pb: 'ਦੈਨਿਕ ਸਿਮਰਨ ਅਤੇ ਸੱਚਾ ਆਚਰਨ',
      en: 'Daily Sumiran & Truthfulness',
    },
    desc: {
      hi: 'नित्य सत्यनाम का सुमिरन, मीठी वाणी और निष्कपट सत्य आचरण।',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ, ਮਿੱਠੀ ਬਾਣੀ ਅਤੇ ਸੱਚਾ ਆਚਰਨ।',
      en: 'Daily remembrance of Satyanaam, gentle speech, and truthful conduct.',
    },
  },
];

const MILESTONES: Array<{
  days: number;
  label: Record<Language, string>;
  title: Record<Language, string>;
}> = [
  {
    days: 7,
    label: { hi: '७ दिन', pb: '੭ ਦਿਨ', en: '7 Days' },
    title: { hi: 'प्रथम सात्विक सप्ताह', pb: 'ਪਹਿਲਾ ਸਾਤਵਿਕ ਹਫ਼ਤਾ', en: 'First Satvik Week' },
  },
  {
    days: 21,
    label: { hi: '२१ दिन', pb: '੨੧ ਦਿਨ', en: '21 Days' },
    title: { hi: 'सात्विक संस्कार निर्माण', pb: 'ਸਾਤਵਿਕ ਸੰਸਕਾਰ ਨਿਰਮਾਣ', en: 'Habit Transformation' },
  },
  {
    days: 42,
    label: { hi: '४२ दिन', pb: '੪੨ ਦਿਨ', en: '42 Days' },
    title: { hi: 'वंश बयालीस निष्ठा', pb: 'ਵੰਸ਼ ਬਿਆਲੀ ਨਿਸ਼ਠਾ', en: 'Steadfast Resolve' },
  },
  {
    days: 108,
    label: { hi: '१०८ दिन', pb: '੧੦੮ ਦਿਨ', en: '108 Days' },
    title: { hi: 'सिमरन माला सिद्धि', pb: 'ਸਿਮਰਨ ਮਾਲਾ ਸਿੱਧੀ', en: '108-Day Mastery' },
  },
  {
    days: 365,
    label: { hi: '१ वर्ष', pb: '੧ ਸਾਲ', en: '1 Year' },
    title: { hi: 'अखंड सात्विक जीवन', pb: 'ਅਖੰਡ ਸਾਤਵਿਕ ਜੀਵਨ', en: 'Eternal Satvik Living' },
  },
];

const MOTIVATIONAL_SAKHIS: Array<{
  verse: Record<Language, string>;
  meaning: Record<Language, string>;
}> = [
  {
    verse: {
      hi: 'भांग तमाखू छोड़ि दे, सुरा पान को त्याग। कहे कबीर गुरु भक्ति कर, तो होवे बड़ भाग॥',
      pb: 'ਭੰਗ ਤਮਾਖੂ ਛੋੜਿ ਦੇ, ਸੁਰਾ ਪਾਨ ਕੋ ਤਿਆਗ। ਕਹੇ ਕਬੀਰ ਗੁਰੂ ਭਗਤੀ ਕਰ, ਤੋ ਹੋਵੇ ਬੜ ਭਾਗ॥',
      en: 'Renounce intoxicants, tobacco, and liquor; Kabir says, devote yourself to the Guru and awaken supreme fortune.',
    },
    meaning: {
      hi: 'व्यसन मुक्त और पवित्र जीवन ही सद्गुरु की सच्ची भक्ति और आत्म-उन्नति की प्रथम सीढ़ी है।',
      pb: 'ਨਸ਼ਾ-ਮੁਕਤ ਅਤੇ ਪਵਿੱਤਰ ਜੀਵਨ ਹੀ ਸਤਿਗੁਰੂ ਦੀ ਸੱਚੀ ਭਗਤੀ ਅਤੇ ਆਤਮ-ਉੱਨਤੀ ਦੀ ਪਹਿਲੀ ਪੌੜੀ ਹੈ।',
      en: 'An addiction-free, pure lifestyle is the very first step toward true Guru devotion and inner peace.',
    },
  },
  {
    verse: {
      hi: 'सांच बराबर तप नहीं, झूठ बराबर पाप। जाके हिरदै सांच है, ताके हिरदै आप॥',
      pb: 'ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ, ਝੂਠ ਬਰਾਬਰ ਪਾਪ। ਜਾਕੇ ਹਿਰਦੈ ਸਾਂਚ ਹੈ, ਤਾਕੇ ਹਿਰਦੈ ਆਪ॥',
      en: 'No austerity equals truthfulness, and no stain equals falsehood; in the heart where truth dwells, the Divine Himself resides.',
    },
    meaning: {
      hi: 'सत्य और सात्विक आचरण धारण करने वाले साधक के हृदय में स्वयं परमात्मा का वास होता है।',
      pb: 'ਸੱਚ ਅਤੇ ਸਾਤਵਿਕ ਆਚਰਨ ਧਾਰਨ ਕਰਨ ਵਾਲੇ ਸਾਧਕ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਪਰਮਾਤਮਾ ਦਾ ਵਾਸ ਹੁੰਦਾ ਹੈ।',
      en: 'The heart anchored in truth and purity becomes a living sanctuary of the Supreme.',
    },
  },
  {
    verse: {
      hi: 'मांस भखैं और मद्य पियैं, ते नर जइहैं घोर। बिना दया अरु धर्म के, मिलै न साहेब ठौर॥',
      pb: 'ਮਾਸ ਭਖੈਂ ਅਰੁ ਮਦ ਪੀਅੈਂ, ਤੇ ਨਰ ਜਇਹੈਂ ਘੋਰ। ਬਿਨਾ ਦਇਆ ਅਰੁ ਧਰਮ ਕੇ, ਮਿਲੈ ਨ ਸਾਹੇਬ ਠੌਰ॥',
      en: 'Without compassion, kindness, and pure living, one loses spiritual shelter; Satvik discipline opens the door to grace.',
    },
    meaning: {
      hi: 'पूर्ण शाकाहार और जीव दया कबीर पंथ की मूल मर्यादा है, जो मन को शांत और करुणामय बनाती है।',
      pb: 'ਪੂਰਨ ਸ਼ਾਕਾਹਾਰ ਅਤੇ ਜੀਵ ਦਇਆ ਕਬੀਰ ਪੰਥ ਦੀ ਮੂਲ ਮਰਿਆਦਾ ਹੈ, ਜੋ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਅਤੇ ਦਿਆਲੂ ਬਣਾਉਂਦੀ ਹੈ।',
      en: 'Pure vegetarianism and compassion toward all beings purify the mind and bring lasting calm.',
    },
  },
];

export const SatvikSankalpTracker: React.FC<SatvikSankalpTrackerProps> = ({
  language,
  onSelectLanguage,
  onNavigateView,
  onClose,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const todayIso = getTodayIso();

  const [state, setState] = useState<SankalpState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          selectedVow: parsed.selectedVow || 'de-addiction',
          startDate: parsed.startDate || todayIso,
          checkInDates: Array.isArray(parsed.checkInDates) ? parsed.checkInDates : [],
        };
      }
    } catch {}
    return {
      selectedVow: 'de-addiction',
      startDate: todayIso,
      checkInDates: [],
    };
  });

  const [sakhiIndex, setSakhiIndex] = useState<number>(() => {
    const dayNum = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return dayNum % MOTIVATIONAL_SAKHIS.length;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const daysCompleted = useMemo(() => {
    return diffDaysInclusive(state.startDate, todayIso);
  }, [state.startDate, todayIso]);

  const isCheckedInToday = state.checkInDates.includes(todayIso);

  const ui = {
    hi: {
      title: 'नशामुक्ति एवं सात्विक संकल्प',
      subtitle: 'सद्गुरु कबीर साहेब एवं पूज्य आचार्य श्री के मार्गदर्शन में व्यसन-मुक्त, सात्विक जीवन का संकल्प लें।',
      chooseVow: '१. अपना सात्विक संकल्प चुनें',
      startDateLabel: '२. संकल्प प्रारंभ तिथि चुनें',
      startToday: 'आज से आरंभ करें',
      liveCounterTitle: 'अटल संकल्प यात्रा',
      daysUnit: 'दिन पूर्ण',
      checkInBtn: 'आज का संकल्प पुष्टि करें',
      checkedInBtn: 'आज की पुष्टि पूर्ण',
      checkInsCount: 'कुल दैनिक पुष्टियाँ:',
      milestonesTitle: 'सात्विक कीर्तिमान बैज (Milestones)',
      unlocked: 'अर्जित',
      locked: 'लक्ष्य',
      dailySakhiTitle: 'प्रेरणादायी कबीर वाणी',
      nextSakhi: 'अगली वाणी',
      resetStreak: 'नई तिथि से पुनः प्रारंभ',
    },
    pb: {
      title: 'ਨਸ਼ਾ-ਮੁਕਤੀ ਅਤੇ ਸਾਤਵਿਕ ਸੰਕਲਪ',
      subtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਤੇ ਪੂਜਨੀਕ ਆਚਾਰੀਆ ਸ੍ਰੀ ਦੀ ਅਗਵਾਈ ਹੇਠ ਨਸ਼ਾ-ਮੁਕਤ ਅਤੇ ਸਾਤਵਿਕ ਜੀਵਨ ਦਾ ਸੰਕਲਪ ਲਓ।',
      chooseVow: '੧. ਆਪਣਾ ਸਾਤਵਿਕ ਸੰਕਲਪ ਚੁਣੋ',
      startDateLabel: '੨. ਸੰਕਲਪ ਸ਼ੁਰੂ ਕਰਨ ਦੀ ਮਿਤੀ ਚੁਣੋ',
      startToday: 'ਅੱਜ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ',
      liveCounterTitle: 'ਅਟੱਲ ਸੰਕਲਪ ਯਾਤਰਾ',
      daysUnit: 'ਦਿਨ ਪੂਰੇ',
      checkInBtn: 'ਅੱਜ ਦਾ ਸੰਕਲਪ ਦਰਜ ਕਰੋ',
      checkedInBtn: 'ਅੱਜ ਦੀ ਹਾਜ਼ਰੀ ਪੂਰੀ',
      checkInsCount: 'ਕੁੱਲ ਰੋਜ਼ਾਨਾ ਪੁਸ਼ਟੀਆਂ:',
      milestonesTitle: 'ਸਾਤਵਿਕ ਮੀਲ-ਪੱਥਰ ਬੈਜ (Milestones)',
      unlocked: 'ਪ੍ਰਾਪਤ',
      locked: 'ਟੀਚਾ',
      dailySakhiTitle: 'ਪ੍ਰੇਰਣਾਦਾਇਕ ਕਬੀਰ ਬਾਣੀ',
      nextSakhi: 'ਅਗਲੀ ਬਾਣੀ',
      resetStreak: 'ਅੱਜ ਤੋਂ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ',
    },
    en: {
      title: 'De-addiction & Satvik Vow Tracker',
      subtitle: 'Take a sacred pledge for an addiction-free, pure Satvik life inspired by Sadguru Kabir Saheb and Pujya Acharya Shri.',
      chooseVow: '1. Select Your Sacred Vow (Sankalp)',
      startDateLabel: '2. Select Start Date',
      startToday: 'Start Today',
      liveCounterTitle: 'Active Vow Streak',
      daysUnit: 'Days Completed',
      checkInBtn: 'Confirm Today’s Vow',
      checkedInBtn: 'Checked In Today',
      checkInsCount: 'Daily Check-ins:',
      milestonesTitle: 'Satvik Milestone Badges',
      unlocked: 'Unlocked',
      locked: 'Target',
      dailySakhiTitle: 'Daily Motivational Kabir Sakhi',
      nextSakhi: 'Next Sakhi',
      resetStreak: 'Restart Today',
    },
  }[language];

  const handleToggleTodayCheckIn = () => {
    sacredHaptics.divineBlessing();
    setState((prev) => {
      if (prev.checkInDates.includes(todayIso)) return prev;
      return {
        ...prev,
        checkInDates: [...prev.checkInDates, todayIso],
      };
    });
  };

  const currentSakhi = MOTIVATIONAL_SAKHIS[sakhiIndex];

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 animate-fadeIn">
      <NewModulesNavBar
        currentView="satvik-sankalp"
        language={language}
        onSelectLanguage={onSelectLanguage}
        onNavigateView={onNavigateView}
        onClose={onClose}
      />

      {/* Hero Title */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
          borderColor: '#D97706',
        }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-md space-y-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#6B1D1D] text-amber-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1
              style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
              className="text-xl sm:text-3xl font-serif font-black tracking-tight"
            >
              {ui.title}
            </h1>
            <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif mt-1 leading-relaxed">
              {ui.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Live Day Counter + Vow Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Live Counter Card */}
        <div
          className="lg:col-span-5 rounded-3xl p-6 shadow-md text-white flex flex-col justify-between space-y-5"
          style={{
            background: 'linear-gradient(135deg, #6B1D1D 0%, #8B2500 55%, #B45309 100%)',
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm font-serif font-bold text-amber-200 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-300" />
              <span>{ui.liveCounterTitle}</span>
            </span>
            <span className="text-xs font-serif text-amber-100 tabular-nums">
              {ui.checkInsCount} {state.checkInDates.length}
            </span>
          </div>

          <div className="text-center py-4 space-y-2">
            <div className="text-6xl sm:text-7xl font-serif font-black tabular-nums tracking-tight text-amber-200">
              {daysCompleted}
            </div>
            <p className="text-base sm:text-lg font-serif font-bold text-white">
              {ui.daysUnit}
            </p>
            <p className="text-xs font-serif text-amber-100/90">
              {VOW_OPTIONS.find((v) => v.id === state.selectedVow)?.title[language]}
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              type="button"
              onClick={handleToggleTodayCheckIn}
              disabled={isCheckedInToday}
              className={`w-full min-h-[46px] px-4 py-2.5 rounded-xl font-serif font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
                isCheckedInToday
                  ? 'bg-emerald-700 text-white cursor-default'
                  : 'bg-amber-400 hover:bg-amber-300 text-[#451A03] shadow-sm'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{isCheckedInToday ? ui.checkedInBtn : ui.checkInBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setState((prev) => ({
                  ...prev,
                  startDate: todayIso,
                }));
              }}
              className="w-full min-h-[40px] px-3 py-2 rounded-xl bg-black/20 hover:bg-black/30 text-amber-100 text-xs font-serif font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{ui.resetStreak}</span>
            </button>
          </div>
        </div>

        {/* Vow Selection & Date Picker */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
            borderColor: theme.cardBorder,
          }}
          className="lg:col-span-7 rounded-3xl border p-5 sm:p-6 shadow-sm space-y-5 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <h2
              style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
              className="text-sm sm:text-base font-serif font-black"
            >
              {ui.chooseVow}
            </h2>
            <div className="space-y-2.5">
              {VOW_OPTIONS.map((vow) => {
                const selected = state.selectedVow === vow.id;
                return (
                  <button
                    key={vow.id}
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setState((prev) => ({ ...prev, selectedVow: vow.id }));
                    }}
                    style={{
                      backgroundColor: selected
                        ? isDarkMode
                          ? 'rgba(217, 119, 6, 0.2)'
                          : '#FDF8EE'
                        : theme.bgSecondary,
                      borderColor: selected ? '#D97706' : theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full text-left p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-serif font-black" style={{ color: selected ? (isDarkMode ? '#FDE68A' : '#6B1D1D') : theme.textPrimary }}>
                        {vow.title[language]}
                      </div>
                      <p className="text-xs font-serif opacity-85" style={{ color: theme.textSecondary }}>
                        {vow.desc[language]}
                      </p>
                    </div>
                    {selected && <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Start Date Selector */}
          <div className="space-y-2.5 pt-3 border-t" style={{ borderColor: theme.cardBorder }}>
            <label
              htmlFor="sankalp-start-date"
              style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
              className="text-sm font-serif font-black flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D97706]" />
              <span>{ui.startDateLabel}</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                id="sankalp-start-date"
                type="date"
                max={todayIso}
                value={state.startDate}
                onChange={(e) => {
                  if (e.target.value) {
                    setState((prev) => ({ ...prev, startDate: e.target.value }));
                  }
                }}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl border text-sm font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.mediumTap();
                  setState((prev) => ({ ...prev, startDate: todayIso }));
                }}
                className="min-h-[44px] px-5 py-2 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs sm:text-sm font-serif font-bold transition cursor-pointer whitespace-nowrap"
              >
                {ui.startToday}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Badges */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
          borderColor: theme.cardBorder,
        }}
        className="rounded-3xl border p-5 sm:p-6 shadow-sm space-y-4"
      >
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#D97706]" />
          <h2
            style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
            className="text-base sm:text-lg font-serif font-black"
          >
            {ui.milestonesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {MILESTONES.map((m) => {
            const isUnlocked = daysCompleted >= m.days;
            return (
              <div
                key={m.days}
                style={{
                  backgroundColor: isUnlocked
                    ? isDarkMode
                      ? 'rgba(217, 119, 6, 0.2)'
                      : '#FDF8EE'
                    : theme.bgSecondary,
                  borderColor: isUnlocked ? '#D97706' : theme.cardBorder,
                }}
                className="p-4 rounded-2xl border text-center space-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center justify-center">
                  {isUnlocked ? (
                    <Award className="w-7 h-7 text-[#D97706]" />
                  ) : (
                    <Lock className="w-6 h-6 opacity-40" style={{ color: theme.textSecondary }} />
                  )}
                </div>
                <div className="space-y-1">
                  <div
                    style={{ color: isUnlocked ? (isDarkMode ? '#FDE68A' : '#6B1D1D') : theme.textPrimary }}
                    className="text-base font-serif font-black tabular-nums"
                  >
                    {m.label[language]}
                  </div>
                  <div
                    style={{ color: theme.textSecondary }}
                    className="text-xs font-serif leading-snug"
                  >
                    {m.title[language]}
                  </div>
                </div>
                <div
                  className={`text-[11px] font-serif font-bold ${
                    isUnlocked ? 'text-emerald-700 dark:text-emerald-300' : 'opacity-65'
                  }`}
                >
                  {isUnlocked ? `✓ ${ui.unlocked}` : ui.locked}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Motivational Kabir Sakhi */}
      <UnifiedDohaCard
        id={`satvik-sakhi-${sakhiIndex}`}
        badgeLabel={ui.dailySakhiTitle}
        text={currentSakhi.verse}
        meaning={currentSakhi.meaning}
        language={language}
        footerExtra={
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setSakhiIndex((prev) => (prev + 1) % MOTIVATIONAL_SAKHIS.length);
            }}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.cardBorder,
              color: theme.sacredMaroon,
            }}
            className="ml-auto px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1 cursor-pointer hover:brightness-95"
          >
            <span>{ui.nextSakhi}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        }
      />
    </div>
  );
};
