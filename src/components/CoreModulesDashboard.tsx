import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Library, 
  Crown, 
  CalendarDays, 
  Compass, 
  Sparkles, 
  BookOpen, 
  Scroll, 
  ChevronRight,
  Sun,
  Flame,
  Layers,
  ArrowRight,
  Heart,
  MapPin,
  Flower2,
  Atom
} from 'lucide-react';
import { Language, AppView, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { sacredHaptics } from '../services/haptics';
import { SacredLoader } from './SacredLoader';
import { AcharyaParamparaModal } from './AcharyaParamparaModal';
import { ChoukaAartiVidhiModal } from './ChoukaAartiVidhiModal';
import { SacredWisdomWidget } from './SacredWisdomWidget';

const MasterGranthLibrary = lazy(() => import('./MasterGranthLibrary').then(m => ({ default: m.MasterGranthLibrary })));
const KabirParichayFourYugas = lazy(() => import('./KabirParichayFourYugas').then(m => ({ default: m.KabirParichayFourYugas })));
const SpiritualCalendar = lazy(() => import('./SpiritualCalendar').then(m => ({ default: m.SpiritualCalendar })));
const UniverseMap = lazy(() => import('./UniverseMap').then(m => ({ default: m.UniverseMap })));
const SacredAshrams = lazy(() => import('./SacredAshrams').then(m => ({ default: m.SacredAshrams })));
const SatyaNaamMahaMargdarshika = lazy(() => import('./SatyaNaamMahaMargdarshika').then(m => ({ default: m.SatyaNaamMahaMargdarshika })));
const AatmaBhushanModule = lazy(() => import('./AatmaBhushanModule').then(m => ({ default: m.AatmaBhushanModule })));

export type CoreModuleTab = 'granth-library' | 'kabir-parichay' | 'saheb-jantri' | 'brahmand-darshan' | 'sacred-ashrams' | 'satya-naam' | 'aatma-bhushan';

interface CoreModulesDashboardProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  initialTab?: CoreModuleTab;
  onClose?: () => void;
  onOpenSwadhyay?: (text?: string) => void;
  onOpenDiary?: () => void;
  onNavigateView?: (view: AppView) => void;
}

export const CoreModulesDashboard: React.FC<CoreModulesDashboardProps> = ({
  language,
  onSelectLanguage,
  initialTab = 'granth-library',
  onClose,
  onOpenSwadhyay,
  onOpenDiary,
  onNavigateView,
}) => {
  const { theme } = useAppTheme();
  const { setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<CoreModuleTab>(initialTab);
  const [showAcharyaModal, setShowAcharyaModal] = useState(false);
  const [showQAtaModal, setShowQAtaModal] = useState(false);
  const [fallingPetals, setFallingPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  const handleOfferFlowers = () => {
    sacredHaptics.mediumTap();
    // Trigger flower petals shower animation
    const newPetals = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 0.4,
      duration: 2.5 + Math.random() * 1.5,
    }));
    setFallingPetals(newPetals);
    setTimeout(() => setFallingPetals([]), 4500);
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  const tabsConfig = [
    {
      id: 'granth-library' as CoreModuleTab,
      icon: Library,
      title: {
        hi: 'समग्र पावन ग्रन्थालय',
        pb: 'ਸਮੁੱਚੀ ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ',
        en: 'Granth Library Vaults',
      },
      subtitle: {
        hi: 'कबीर सागर, बीजक, उलटबांसी, शब्दावली एवं ग्रंथावली',
        pb: 'ਕਬੀਰ ਸਾਗਰ, ਬੀਜਕ, ਉਲਟਬਾਂਸੀ, ਸ਼ਬਦਾਵਲੀ ਤੇ ਗ੍ਰੰਥਾਵਲੀ',
        en: 'Kabir Sagar, Beejak, Ulatvasi, Shabdawali & Granthavali',
      },
      badge: {
        hi: '५ मुख्य ग्रन्थ',
        pb: '੫ ਮੁੱਖ ਗ੍ਰੰਥ',
        en: '5 Holy Scriptures',
      },
      gradient: 'from-amber-600 to-orange-700',
      activeColor: '#D97706',
    },
    {
      id: 'kabir-parichay' as CoreModuleTab,
      icon: Crown,
      title: {
        hi: 'सतगुरु कबीर साहेब परिचय',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚੈ',
        en: 'Satguru Kabir Saheb Parichay',
      },
      subtitle: {
        hi: 'आदि पुरुष का प्राकट्य एवं चारों युगों की अमर लीलाएँ',
        pb: 'ਆਦਿ ਪੁਰੁਸ਼ ਦਾ ਪ੍ਰਗਟਾਰਾ ਤੇ ਚਾਰਾਂ ਯੁਗਾਂ ਦੀਆਂ ਅਮਰ ਲੀਲ੍ਹਾਵਾਂ',
        en: 'Divine Manifestation across Satya, Treta, Dvapara & Kali Yugas',
      },
      badge: {
        hi: 'चारों युग लीला',
        pb: 'ਚਾਰੇ ਯੁਗ',
        en: '4 Yuga Leelas',
      },
      gradient: 'from-purple-600 to-indigo-700',
      activeColor: '#7C3AED',
    },
    {
      id: 'saheb-jantri' as CoreModuleTab,
      icon: CalendarDays,
      title: {
        hi: 'साहेब जंत्री (पंचांग)',
        pb: 'ਸਾਹੇਬ ਜੰਤਰੀ (ਪੰਚਾਂਗ)',
        en: 'Saheb Jantri (Spiritual Almanac)',
      },
      subtitle: {
        hi: 'उच्च-कंपन तिथियाँ, पूर्णिमा, अमावस्या, संक्रांति व आरती समय',
        pb: 'ਪੂਰਨਮਾਸ਼ੀ, ਮੱਸਿਆ, ਸੰਗਰਾਂਦ, ਪੁਰਬ ਤੇ ਆਰਤੀ ਸਮਾਂ',
        en: 'High-Vibration Days, Purnima, Amavasya, Sangrand & Aarti Offsets',
      },
      badge: {
        hi: 'पावन तिथियां',
        pb: 'ਪਾਵਨ ਤਿਥੀਆਂ',
        en: 'Sacred Almanac',
      },
      gradient: 'from-teal-600 to-emerald-700',
      activeColor: '#0D9488',
    },
    {
      id: 'brahmand-darshan' as CoreModuleTab,
      icon: Compass,
      title: {
        hi: 'ब्रह्मांड दर्शन (सत्यलोक मार्ग)',
        pb: 'ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ (ਸਤਿਲੋਕ ਮਾਰਗ)',
        en: 'Brahmand Darshan (Cosmological Map)',
      },
      subtitle: {
        hi: 'काल निरंजन के २१ ब्रह्मांडों से अमरलोक / सत्यलोक तक का आरोहण',
        pb: 'ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਮੰਡਾਂ ਤੋਂ ਅਮਰਲੋਕ ਤੱਕ ਜੀਵ ਦੀ ਅਮਰ ਯਾਤਰਾ',
        en: "Soul's Path through Kaal's 21 Universes upward to Satyaloka",
      },
      badge: {
        hi: '२१ ब्रह्मांड से सत्यलोक',
        pb: '੨੧ ਬ੍ਰਹਮੰਡ ਤੋਂ ਸਤਿਲੋਕ',
        en: '21 Universes to Amarlok',
      },
      gradient: 'from-blue-600 to-cyan-700',
      activeColor: '#2563EB',
    },
    {
      id: 'sacred-ashrams' as CoreModuleTab,
      icon: MapPin,
      title: {
        hi: 'सतगुरु स्थान व पावन धाम',
        pb: 'ਸਤਗੁਰੂ ਸਥਾਨ ਤੇ ਪਾਵਨ ਧਾਮ',
        en: 'Sacred Ashrams & Locations',
      },
      subtitle: {
        hi: 'लहरतारा, कबीर चौरा, मगहर एवं दामाखेड़ा धाम का विवरण व मार्ग',
        pb: 'ਲਹਿਰਤਾਰਾ, ਕਬੀਰ ਚੌਰਾ, ਮਗਹਰ ਤੇ ਦਾਮਾਖੇੜਾ ਧਾਮ ਦਾ ਵੇਰਵਾ ਤੇ ਰਾਹ',
        en: 'Details and directions for Lahartara, Kashi, Maghar & Damakheda',
      },
      badge: {
        hi: 'प्रमुख तीर्थ',
        pb: 'ਪ੍ਰਮੁੱਖ ਤੀਰਥ',
        en: 'Sacred Sites',
      },
      gradient: 'from-rose-600 to-red-800',
      activeColor: '#E11D48',
    },
    {
      id: 'satya-naam' as CoreModuleTab,
      icon: Atom,
      title: {
        hi: 'सत्यनाम एवं सारशब्द',
        pb: 'ਸਤਯਨਾਮ ਅਤੇ ਸਾਰਸ਼ਬਦ',
        en: 'Satyanaam & Saar Shabd',
      },
      subtitle: {
        hi: 'जीव की मुक्ति का गुप्त मार्ग एवं सारशब्द रहस्य',
        pb: 'ਜੀਵ ਦੀ ਮੁਕਤੀ ਦਾ ਗੁਪਤ ਮਾਰਗ ਅਤੇ ਸਾਰਸ਼ਬਦ ਰਹਿਸ',
        en: 'The secret path of liberation and Saar Shabd mystery',
      },
      badge: {
        hi: 'परम मोक्ष',
        pb: 'ਪਰਮ ਮੋਕਸ਼',
        en: 'Ultimate Moksha',
      },
      gradient: 'from-amber-500 to-yellow-600',
      activeColor: '#D97706',
    },
    {
      id: 'aatma-bhushan' as CoreModuleTab,
      icon: Sparkles,
      title: {
        hi: 'ज्ञान-चक्र (१६ भूषण)',
        pb: 'ਗਿਆਨ-ਚੱਕਰ (੧੬ ਭੂਸ਼ਣ)',
        en: 'Gyan-Chakra (16 Jewels)',
      },
      subtitle: {
        hi: 'सत्य, संतोष, दया और क्षमा आदि १६ आध्यात्मिक गुणों का वृत्ताकार ज्ञान चक्र',
        pb: 'ਸਤ, ਸੰਤੋਖ, ਦਇਆ ਤੇ ਖਿਮਾ ਆਦਿ ੧੬ ਰੂਹਾਨੀ ਗੁਣਾਂ ਦਾ ਗਿਆਨ ਚੱਕਰ',
        en: 'Circular Gyan-Chakra visualizing 16 essential spiritual virtues & relations',
      },
      badge: {
        hi: 'ज्ञान-चक्र दर्शन',
        pb: 'ਗਿਆਨ-ਚੱਕਰ ਦਰਸ਼ਨ',
        en: 'Gyan Chakra',
      },
      gradient: 'from-orange-500 to-amber-600',
      activeColor: '#F59E0B',
    },
  ];

  const handleTabChange = (tabId: CoreModuleTab) => {
    sacredHaptics.lightTap();
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 relative">
      {/* Falling Flower Petals Shower Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {fallingPetals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -40, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: [1, 0.9, 0], rotate: 360 }}
            transition={{ duration: petal.duration, delay: petal.delay, ease: 'easeOut' }}
            style={{ left: `${petal.left}%` }}
            className="absolute text-xl sm:text-2xl"
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Spacious Core Vaults Dashboard Container Header */}
      <div
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
        }}
        className="rounded-3xl border-2 p-4 sm:p-7 shadow-xl space-y-6"
      >
        {/* Top Header Row with Sacred Title & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5" style={{ borderColor: theme.cardBorder }}>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{language === 'pb' ? 'ਮੁੱਖ ਆਧਾਰ ਸਤੰਭ' : language === 'en' ? 'Core Sacred Vaults' : 'परम पावन आधार स्तम्भ'}</span>
              </span>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700/80">
                Kabir Panth Wisdom
              </span>
            </div>
            <h1
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl md:text-4xl font-black font-serif tracking-wide"
            >
              {language === 'pb'
                ? 'ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ, ਜੀਵਨ ਚਰਿੱਤਰ, ਜੰਤਰੀ ਤੇ ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ'
                : language === 'en'
                ? 'Core Sacred Granth Vaults & Cosmological Sanctum'
                : 'पावन ग्रन्थालय, साहेब परिचय, जंत्री एवं ब्रह्मांड दर्शन'}
            </h1>
            <p className="text-xs sm:text-sm font-serif opacity-85 max-w-3xl">
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਮਹਾਨ ਗ੍ਰੰਥਾਂ, ਚਾਰਾਂ ਯੁਗਾਂ ਦੀਆਂ ਅਮਰ ਲੀਲ੍ਹਾਵਾਂ, ਪਾਵਨ ਜੰਤਰੀ ਅਤੇ ਅਮਰਲੋਕ ਦੀ ਬ੍ਰਹਮੰਡੀ ਯਾਤਰਾ ਦਾ ਏਕੀਕ੍ਰਿਤ ਪਾਵਨ ਮੰਚ।'
                : language === 'en'
                ? 'Integrated sacred portals for Holy Scriptures, 4 Yuga Leelas, Spiritual Almanac, and the Soul’s Ascent to Satyaloka.'
                : 'सतगुरु कबीर साहेब के मूल प्रामाणिक ग्रन्थ, चारों युगों का प्राकट्य, साहेब जंत्री और काल निरंजन के २१ ब्रह्मांडों से सत्यलोक आरोहण का संपूर्ण संकलन।'}
            </p>
          </div>

          {/* Quick Language Switcher */}
          {onSelectLanguage && (
            <div 
              className="flex items-center gap-1 self-start md:self-auto p-1 rounded-xl shrink-0 border"
              style={{
                backgroundColor: theme.mode === 'mystic_dark' ? '#2A2016' : theme.stepActiveBg,
                borderColor: theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder,
              }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                return (
                  <button
                    key={lng}
                    type="button"
                    onClick={() => onSelectLanguage(lng)}
                    style={{
                      backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                      color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-serif transition-all cursor-pointer ${
                      isSelected ? 'font-black shadow-xs' : 'font-bold hover:opacity-90'
                    }`}
                  >
                    {lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 5 Spacious Interactive Tab Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {tabsConfig.map((tab) => {
            const isSelected = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                id={`core-module-tab-${tab.id}`}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  backgroundColor: isSelected ? theme.stepActiveBg : theme.cardBg,
                  borderColor: isSelected ? tab.activeColor : theme.cardBorder,
                  boxShadow: isSelected ? `0 10px 25px -5px ${tab.activeColor}33` : undefined,
                }}
                className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group hover:scale-[1.02] active:scale-[0.98] ${
                  isSelected ? 'ring-2 ring-amber-500/50' : 'hover:border-amber-500/40 opacity-90 hover:opacity-100'
                }`}
              >
                {/* Active Top Glow Bar */}
                {isSelected && (
                  <div
                    style={{ backgroundColor: tab.activeColor }}
                    className="absolute top-0 left-0 right-0 h-1.5"
                  />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      style={{
                        backgroundColor: isSelected ? tab.activeColor : `${tab.activeColor}15`,
                        color: isSelected ? '#ffffff' : tab.activeColor,
                      }}
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-colors shadow-xs"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      style={{
                        backgroundColor: `${tab.activeColor}20`,
                        color: tab.activeColor,
                        borderColor: `${tab.activeColor}40`,
                      }}
                      className="px-2 py-0.5 rounded-full text-[10px] font-black border font-mono tracking-wider"
                    >
                      {tab.badge[language]}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{ color: isSelected ? tab.activeColor : theme.textPrimary }}
                      className="font-serif font-black text-base sm:text-lg tracking-wide group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors"
                    >
                      {tab.title[language]}
                    </h3>
                    <p className="text-[11px] sm:text-xs mt-1.5 opacity-80 leading-relaxed font-serif line-clamp-2">
                      {tab.subtitle[language]}
                    </p>
                  </div>
                </div>

                <div
                  style={{ color: isSelected ? tab.activeColor : theme.textSecondary }}
                  className="mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold font-serif"
                >
                  <span>{isSelected ? (language === 'pb' ? '● ਖੁੱਲ੍ਹਾ ਹੈ' : language === 'en' ? '● Active' : '● वर्तमान दर्शन') : (language === 'pb' ? 'ਵੇਖੋ' : language === 'en' ? 'Explore' : 'दर्शन करें')}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sacred Wisdom Widget */}
      <SacredWisdomWidget
        language={language}
        onOpenSwadhyay={(s) => {
          if (onOpenSwadhyay) onOpenSwadhyay(s ? s.text[language] : undefined);
        }}
        onOpenDiaryWithVerse={(verseText, num) => {
          if (onOpenDiary) onOpenDiary();
        }}
      />

      {/* Dynamic Tab Content Area */}
      <div className="w-full">
        <Suspense fallback={<SacredLoader language={language} />}>
        <AnimatePresence mode="wait">
          {activeTab === 'granth-library' && (
            <motion.div
              key="tab-granth-library"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <MasterGranthLibrary
                language={language}
                onSelectLanguage={onSelectLanguage}
                onOpenSwadhyay={onOpenSwadhyay}
                onOpenDiary={onOpenDiary}
                onClose={onClose}
                onSelectView={onNavigateView}
              />
            </motion.div>
          )}

          {activeTab === 'kabir-parichay' && (
            <motion.div
              key="tab-kabir-parichay"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <KabirParichayFourYugas
                language={language}
                onClose={onClose}
                onOpenSwadhyay={() => onOpenSwadhyay && onOpenSwadhyay()}
              />
            </motion.div>
          )}

          {activeTab === 'saheb-jantri' && (
            <motion.div
              key="tab-saheb-jantri"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <SpiritualCalendar
                language={language}
                onClose={onClose}
                onOpenNitnem={() => {
                  setActiveTab('granth-library');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {activeTab === 'brahmand-darshan' && (
            <motion.div
              key="tab-brahmand-darshan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <UniverseMap
                language={language}
                onClose={onClose}
              />
            </motion.div>
          )}

          {activeTab === 'sacred-ashrams' && (
            <motion.div
              key="tab-sacred-ashrams"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <SacredAshrams
                language={language}
                onClose={onClose}
              />
            </motion.div>
          )}

          {activeTab === 'satya-naam' && (
            <motion.div
              key="tab-satya-naam"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <SatyaNaamMahaMargdarshika language={language} onClose={onClose} />
            </motion.div>
          )}

          {activeTab === 'aatma-bhushan' && (
            <motion.div
              key="tab-aatma-bhushan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <AatmaBhushanModule language={language} onClose={onClose} />
            </motion.div>
          )}
        </AnimatePresence>
        </Suspense>
      </div>

      {/* Specialized Panthic Vaults: Acharya Parampara & Prashnottari (Sawal-Jawab) */}
      <div className="pt-6 border-t space-y-4" style={{ borderColor: theme.cardBorder }}>
        <h3 style={{ color: theme.sacredMaroon }} className="text-lg font-serif font-black flex items-center gap-2">
          <Crown className="w-5 h-5" />
          {language === 'pb' ? 'ਪੰਥਕ ਗਿਆਨ ਭੰਡਾਰ' : language === 'en' ? 'Panthic Wisdom Vaults' : 'पंथिक ज्ञान भंडार'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Acharya Parampara Itihas Card */}
          <div
            onClick={() => setShowAcharyaModal(true)}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
              color: theme.textPrimary,
            }}
            className="border-2 rounded-3xl p-5 flex items-center justify-between cursor-pointer hover:scale-[1.01] transition shadow-md group backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
              >
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base">
                  {language === 'pb' ? 'ਆਚਾਰੀਆ ਪਰੰਪਰਾ ਇਤਿਹਾਸ' : language === 'en' ? 'Acharya Parampara History' : 'आचार्य परंपरा इतिहास'}
                </h4>
                <p style={{ color: theme.textSecondary }} className="text-xs font-serif font-medium mt-0.5">
                  {language === 'pb'
                    ? 'ਦਾਮਾਖੇੜਾ ਪਾਵਨ ਗੱਦੀ ਦੀ ਆਚਾਰੀਆ ਪਰੰਪਰਾ'
                    : language === 'en'
                    ? 'Lineage of Damakheda Gaddi Acharyas'
                    : 'दामाखेड़ा पावन गद्दी की आचार्य परंपरा'}
                </p>
              </div>
            </div>
            <ChevronRight style={{ color: theme.sacredMaroon }} className="group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Chouka-Aarti & Panthic Prashnottari Card */}
          <div
            onClick={() => setShowQAtaModal(true)}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
              color: theme.textPrimary,
            }}
            className="border-2 rounded-3xl p-5 flex items-center justify-between cursor-pointer hover:scale-[1.01] transition shadow-md group backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
              >
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base">
                  {language === 'pb'
                    ? 'ਚੌਕਾ-ਆਰਤੀ: ਪਾਵਨ ਵਿਧੀ ਅਤੇ ਸਾਤਵਿਕ ਨਿਯਮ'
                    : language === 'en'
                    ? 'Chouka Aarti: Sacred Vidhi & Holy Rules'
                    : 'चौका-आरती: पावन विधि एवं सात्विक नियम'}
                </h4>
                <p style={{ color: theme.textSecondary }} className="text-xs font-serif font-medium mt-0.5">
                  {language === 'pb'
                    ? 'ਪੰਥਕ ਮਰਿਆਦਾ, ਚੌਕਾ ਆਰਤੀ ਤੇ ਰੂਹਾਨੀ ਜਿਗਿਆਸਾ ਸਮਾਧਾਨ'
                    : language === 'en'
                    ? 'Panthic Q&A regarding rituals and Chouka Vidhi'
                    : 'पंथिक मर्यादा, चौका आरती एवं आध्यात्मिक जिज्ञासा समाधान'}
                </p>
              </div>
            </div>
            <ChevronRight style={{ color: theme.sacredMaroon }} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Modals */}
      <AcharyaParamparaModal 
        isOpen={showAcharyaModal} 
        onClose={() => setShowAcharyaModal(false)} 
        language={language} 
      />
      <ChoukaAartiVidhiModal 
        isOpen={showQAtaModal} 
        onClose={() => setShowQAtaModal(false)} 
        language={language} 
      />
    </div>
  );
};
