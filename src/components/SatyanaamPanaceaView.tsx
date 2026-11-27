import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen,
  HeartPulse,
  RefreshCw
} from 'lucide-react';
import { Language, AppView } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface SatyanaamPanaceaViewProps {
  language: Language;
  onClose: () => void;
  onNavigateView?: (view: AppView) => void;
  onSelectLanguage?: (lang: Language) => void;
}

export const SatyanaamPanaceaView: React.FC<SatyanaamPanaceaViewProps> = ({
  language,
}) => {
  const { isDarkMode } = useAppTheme();
  const [activeLang, setActiveLang] = useState<Language>(language);
  const [isPanaceaTaken, setIsPanaceaTaken] = useState(false);

  useEffect(() => {
    setActiveLang(language);
  }, [language]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Play Divine White Light Pure Tone Chime
  const playDivinePanaceaChime = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      // High luminous frequencies: C6, E6, G6, B6
      const freqs = [1046.5, 1318.5, 1567.98, 1975.53];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 1.9);
      });
    } catch {}
  };

  const handleTakePanacea = () => {
    sacredHaptics.mediumTap();
    playDivinePanaceaChime();
    setIsPanaceaTaken(true);
  };

  const handleResetPanacea = () => {
    sacredHaptics.lightTap();
    setIsPanaceaTaken(false);
  };

  // Content Cards Data (3 Canonical Scriptural References)
  const panaceaCards = [
    {
      id: 'sakhi-sangrah',
      source: {
        hi: 'कबीर साखी संग्रह — रोग निवारक अंग',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ — ਰੋਗ ਨਿਵਾਰਕ ਅੰਗ',
        en: 'Kabir Sakhi Sangrah — Panacea Ang',
      },
      verse: {
        hi: 'सत्यनाम औषधि है, भव-व्याधि की एक। जो जन सुमिरै प्रेम सों, ताके कटैं अनेक॥',
        pb: 'ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਹੈ, ਭਵ-ਵਿਆਧੀ ਕੀ ਏਕ। ਜੋ ਜਨ ਸਿਮਰੈ ਪ੍ਰੇਮ ਸੋਂ, ਤਾਕੇ ਕਟੈਂ ਅਨੇਕ॥',
        en: 'Satyanaam is the supreme medicine for all worldly ailments; whoever remembers it with pure devotion, their myriad bonds are severed.',
      },
      meaning: {
        hi: 'सतगुरु कबीर साहेब फरमाते हैं कि सत्यनाम ही समस्त जन्म-मरण, अज्ञान, मोह और मानसिक संतापों की एकमात्र महा-औषधि (Panacea) है। प्रेमपूर्वक इसके स्मरण से सभी कष्ट स्वतः नष्ट हो जाते हैं।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਤਯਨਾਮ ਹੀ ਸਮੁੱਚੇ ਮਾਨਸਿਕ ਤਾਪਾਂ ਤੇ ਵਿਕਾਰਾਂ ਦੀ ਮਹਾ-ਔਸ਼ਧੀ ਹੈ। ਪ੍ਰੇਮ ਸਹਿਤ ਸਿਮਰਨ ਨਾਲ ਸਾਰੇ ਰੋਗ ਮਿਟ ਜਾਂਦੇ ਹਨ।',
        en: 'Satguru Kabir Saheb proclaims that Satyanaam is the supreme panacea for all spiritual and worldly ailments. With loving remembrance, all suffering dissolves.',
      },
    },
    {
      id: 'granthavali',
      source: {
        hi: 'कबीर ग्रंथावली — नाम महिमा प्रकरण',
        pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ — ਨਾਮ ਮਹਿਮਾ ਪ੍ਰਕਰਣ',
        en: 'Kabir Granthavali — Name Glory Chapter',
      },
      verse: {
        hi: 'सुमिरन तें सुख होत है, सुमिरन तें सब व्याधि। कबीर सुमिरन के प्रभाव तें, मिटै जन्म की आधि॥',
        pb: 'ਸਿਮਰਨ ਤੇ ਸੁਖ ਹੋਤ ਹੈ, ਸਿਮਰਨ ਤੇ ਸਭ ਵਿਆਧੀ। ਕਬੀਰ ਸਿਮਰਨ ਕੇ ਪ੍ਰਭਾਵ ਤੇ, ਮਿਟੈ ਜਨਮ ਕੀ ਆਧੀ॥',
        en: 'Remembrance brings supreme bliss; remembrance cures all ailments. By the potency of simran, Satguru Kabir Saheb proclaims, the fever of worldly rebirth is extinguished.',
      },
      meaning: {
        hi: 'सत्यनाम के सतत सुमिरन से अंतःकरण में आत्यंतिक सुख की स्थापना होती है और शारीरिक-मानसिक समस्त व्याधियाँ शांत होती हैं। यह भवसागर के भयंकर रोगों की अचूक दवा है।',
        pb: 'ਸਤਯਨਾਮ ਦੇ ਨਿਰੰਤਰ ਸਿਮਰਨ ਨਾਲ ਅੰਤਰਜਾਮੀ ਸੁਖ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ ਅਤੇ ਮਾਨਸਿਕ ਰੋਗ ਸ਼ਾਂਤ ਹੁੰਦੇ ਹਨ। ਇਹ ਭਵਸਾਗਰ ਦੇ ਤਾਪਾਂ ਦੀ ਅਚूक ਦਵਾਈ ਹੈ।',
        en: 'Continuous meditation on Satyanaam establishes profound inner joy and stills all agitations. It is the infallible cure for the fever of worldly existence.',
      },
    },
    {
      id: 'sggs-sukhmani',
      source: {
        hi: 'श्री गुरु ग्रंथ साहिब (सुखमनी साहिब, अंग २७४)',
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ (ਸੁਖਮਨੀ ਸਾਹਿਬ, ਅੰਗ ੨੭੪)',
        en: 'Sri Guru Granth Sahib (Sukhmani Sahib, Ang 274)',
      },
      verse: {
        hi: 'प्रभ का सिमरणु सब ते ऊचा ॥ सिमरणि उद्धरे कतहु न मूंचा ॥',
        pb: 'ਪ੍ਰਭ ਕਾ ਸਿਮਰਨੁ ਸਭ ਤੇ ਊਚਾ ॥ ਸਿਮਰਨਿ ਉੱਧਰੇ ਕਤਹੁ ਨ ਮੂੰਚਾ ॥',
        en: 'Remembrance of the Supreme Lord is the highest of all; through Simran, souls are liberated and never wander again.',
      },
      meaning: {
        hi: 'श्री गुरु ग्रंथ साहिब में परम पावन सुखमनी साहिब का यह वचन है कि सत्यनाम का सुमिरन समस्त औषधियों में सर्वोच्च है। इसके प्रताप से जीव आवागमन के चक्र से हमेशा के लिए मुक्त हो जाता है।',
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਸੁਖਮਨੀ ਸਾਹਿਬ ਦਾ ਫੁਰਮਾਨ ਹੈ ਕਿ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਸਭ ਤੋਂ ਉੱਚਾ ਹੈ। ਇਸ ਨਾਲ ਜੀਵ ਜਨਮ-ਮਰਨ ਦੇ ਦੁੱਖਾਂ ਤੋਂ ਪੂਰਨ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
        en: 'In Sukhmani Sahib, it is enshrined that the remembrance of the Supreme Truth is the highest panacea, liberating the seeker from all suffering and wandering.',
      },
    },
  ];

  return (
    <div className="w-full space-y-7">
        
        {/* ========================================================================= */}
        {/* INTRO BANNER                                                              */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#241A14' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-lg relative overflow-hidden text-center"
        >
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#D97706] text-xs font-serif font-black uppercase mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>
              {activeLang === 'pb' ? '॥ ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ ਮਹਾ-ਔਸ਼ਧੀ ॥' : activeLang === 'en' ? '|| THE SUPREME SPIRITUAL PANACEA ||' : '॥ सर्व रोग निवारक महा-औषधि ॥'}
            </span>
          </div>

          <h2 
            style={{ color: '#6B1D1D' }} 
            className="text-xl sm:text-2xl md:text-3xl font-serif font-black dark:text-amber-300 leading-snug tracking-tight max-w-2xl mx-auto"
          >
            {activeLang === 'pb' && 'ਸਤਯਨਾਮ ਹੀ ਭਵ-ਵਿਆਧੀ, ਮੋਹ, ਭਰਮ ਅਤੇ ਕਰਮ-ਬੰਧਨਾਂ ਦੀ ਇੱਕੋ-ਇੱਕ ਅਚੂਕ ਔਸ਼ਧੀ ਹੈ।'}
            {activeLang === 'en' && 'Satyanaam is the supreme panacea dissolving all worldly ailments, illusions, and karmic bonds.'}
            {activeLang === 'hi' && 'सत्यनाम ही समस्त भव-व्याधि, मोह-भ्रम और कर्म-बंधन रोगों की एकमात्र अचूक महा-औषधि है।'}
          </h2>

          <p className="text-xs sm:text-sm font-serif mt-3 text-stone-600 dark:text-stone-300 max-w-xl mx-auto leading-relaxed">
            {activeLang === 'pb'
              ? 'ਸੰਸਾਰੀ ਤਾਪ, ਮਾਨਸਿਕ ਅਸ਼ਾਂਤੀ ਅਤੇ ਆਤਮਿਕ ਪੀੜਾਂ ਨੂੰ ਮਿਟਾਉਣ ਲਈ ਸ਼ੁੱਧ ਸਵੇਤ ਦਿਵਯ ਪ੍ਰਕਾਸ਼ (ਸਤਯਨਾਮ) ਦਾ ਅਨੁਭਵ ਕਰੋ।'
              : activeLang === 'en'
              ? 'Experience the pure white divine light of Satyanaam to dissolve all worldly fever, mental agitations, and spiritual distress.'
              : 'सांसारिक ताप, मानसिक अशांति और आत्मिक पीड़ाओं को जड़ से मिटाने हेतु श्वेत दिव्य प्रकाश (सत्यनाम) का अनुभव करें।'}
          </p>
        </section>

        {/* ========================================================================= */}
        {/* FOUNDATIONAL DOHA & MEANING CARD (High-contrast Cream #FDF8EE, Gold border) */}
        {/* ========================================================================= */}
        <section
          style={{
            backgroundColor: isDarkMode ? '#241A14' : '#FDF8EE',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-md space-y-4 text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-serif font-black uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {activeLang === 'pb' ? '📖 ਸਰੋਤ: ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ — ਰੋਗ ਨਿਵਾਰਕ ਅੰਗ' : activeLang === 'en' ? '📖 Source: Kabir Sakhi Sangrah — Panacea Ang' : '📖 स्रोत: कबीर साखी संग्रह — रोग निवारक अंग'}
            </span>
          </div>

          <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#6B1D1D] dark:text-amber-200 leading-relaxed whitespace-pre-line py-1">
            {activeLang === 'pb' 
              ? 'ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਹੈ, ਭਵ-ਵਿਆਧੀ ਕੀ ਏਕ。\nਜੋ ਜਨ ਸਿਮਰੈ ਪ੍ਰੇਮ ਸੋਂ, ਤਾਕੇ ਕਟੈਂ ਅਨੇਕ॥' 
              : activeLang === 'en'
              ? 'Satyanaam is the supreme medicine for all worldly ailments;\nWhoever remembers it with pure devotion, their myriad bonds are severed.'
              : 'सत्यनाम औषधि है, भव-व्याधि की एक।\nजो जन सुमिरै प्रेम सों, ताके कटैं अनेक॥'}
          </div>

          <div className="border-t border-amber-500/25 pt-3 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
              <strong className="text-[#6B1D1D] dark:text-amber-400 font-bold">
                {activeLang === 'pb' ? 'ਭਾਵਾਰਥ: ' : activeLang === 'en' ? 'Meaning: ' : 'भावार्थ: '}
              </strong>
              {activeLang === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ \'ਸਤਯਨਾਮ\' ਹੀ ਸਮੁੱਚੇ ਜਨਮ-ਮਰਨ, ਅਗਿਆਨ, ਮੋਹ ਅਤੇ ਮਾਨਸਿਕ ਤਾਪਾਂ ਦੀ ਇੱਕੋ-ਇੱਕ ਮਹਾ-ਔਸ਼ਧੀ ਹੈ। ਪ੍ਰੇਮ ਸਹਿਤ ਸਿਮਰਨ ਨਾਲ ਸਾਰੇ ਕਸ਼ਟ ਮਿਟ ਜਾਂਦੇ ਹਨ।'
                : activeLang === 'en'
                ? 'Satguru Kabir Saheb proclaims that \'Satyanaam\' is the supreme panacea for all worldly ailments, illusions, and karmic bonds. With loving remembrance, all suffering dissolves.'
                : 'सतगुरु कबीर साहेब फरमाते हैं कि \'सत्यनाम\' ही समस्त जन्म-मरण, अज्ञान, मोह और मानसिक संतापों की एकमात्र महा-औषधि (Panacea) है। प्रेमपूर्वक इसके स्मरण से सभी कष्ट स्वतः नष्ट हो जाते हैं।'}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE PURE WHITE DIVINE LIGHT VISUALIZATION CANVAS                  */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-lg space-y-6 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                <h3 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-lg sm:text-xl dark:text-amber-300"
                >
                  {activeLang === 'pb' ? 'ਸ਼੍ਵੇਤ ਦਿਵਯ ਪ੍ਰਕਾਸ਼ ਔਸ਼ਧੀ ਮੰਡਲ' : activeLang === 'en' ? 'Pure White Divine Light Sanctuary' : 'श्वेत दिव्य प्रकाश औषधि मंडल'}
                </h3>
              </div>
              <p className="text-xs font-serif text-stone-600 dark:text-stone-400 mt-0.5">
                {activeLang === 'pb'
                  ? 'ਮੋਹ, ਭਰਮ ਤੇ ਅਸ਼ਾਂਤੀ ਦੇ ਬੱਦਲ ਹਟਾ ਕੇ ਅੰਤਰਘਟ ਵਿੱਚ ਸ਼ੁੱਧ ਚੇਤਨਾ ਪ੍ਰਗਟ ਕਰੋ'
                  : activeLang === 'en'
                  ? 'Dissolve mist clouds of illusion and ailment, revealing the radiant white lotus core'
                  : 'मोह, भ्रम एवं अशांति के आवरण हटाकर अंतर्घट में शुद्ध श्वेत दिव्य प्रकाश का अनुभव करें'}
              </p>
            </div>

            {isPanaceaTaken && (
              <button
                type="button"
                onClick={handleResetPanacea}
                className="px-3 py-1.5 rounded-xl border border-amber-500/40 text-xs font-serif font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{activeLang === 'pb' ? 'ਮੁੜ ਵੇਖੋ' : activeLang === 'en' ? 'Reset' : 'पुनः देखें'}</span>
              </button>
            )}
          </div>

          {/* Canvas Visualization Area */}
          <div className="relative py-5 sm:py-7 px-3 sm:px-6 bg-gradient-to-b from-slate-950 via-stone-900 to-slate-950 rounded-2xl border-2 border-amber-500/35 overflow-hidden flex flex-col items-center justify-between gap-5 min-h-[390px] sm:min-h-[430px]">
            
            {/* Ambient Background Rays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.20)_0%,rgba(253,224,71,0.06)_38%,transparent_70%)] pointer-events-none" />

            {/* 4-Corner Mandala Frame around the Center Pure White Divine Light Orb */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-between gap-4 sm:gap-5">
              
              {/* Top Two Corners: भव-व्याधि (Top-Left) & मोह-भ्रम (Top-Right) */}
              <motion.div
                animate={{
                  opacity: isPanaceaTaken ? 0 : 1,
                  scale: isPanaceaTaken ? 0.85 : 1,
                  y: isPanaceaTaken ? -12 : 0,
                }}
                transition={{ duration: 0.7 }}
                className="w-full flex items-center justify-between gap-2 z-20 pointer-events-none"
              >
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.92)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(248, 250, 252, 0.45)',
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-serif font-bold shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-md"
                >
                  {activeLang === 'pb' ? '☁️ ਭਵ-ਵਿਆਧੀ' : activeLang === 'en' ? '☁️ Worldly Ailment' : '☁️ भव-व्याधि'}
                </div>

                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.92)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(248, 250, 252, 0.45)',
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-serif font-bold shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-md"
                >
                  {activeLang === 'pb' ? '☁️ ਮੋਹ-ਭਰਮ' : activeLang === 'en' ? '☁️ Illusion & Maya' : '☁️ मोह-भ्रम'}
                </div>
              </motion.div>

              {/* Center Pure White Divine Light Orb & Lotus */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-3 py-1 sm:py-2">
                {/* Lotus Base */}
                <div className="text-3xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.95)] select-none">
                  🪷
                </div>

                {/* Radiant Pure White Divine Light Orb */}
                <motion.div
                  animate={{
                    scale: isPanaceaTaken ? [1, 1.28, 1.15] : [1, 1.07, 1],
                    boxShadow: isPanaceaTaken 
                      ? ['0 0 60px 25px rgba(255, 255, 255, 0.9)', '0 0 90px 35px rgba(255, 255, 255, 1)', '0 0 70px 30px rgba(255, 255, 255, 0.95)']
                      : ['0 0 40px 15px rgba(255, 255, 255, 0.7)', '0 0 60px 25px rgba(255, 255, 255, 0.9)', '0 0 40px 15px rgba(255, 255, 255, 0.7)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'radial-gradient(circle, #FFFFFF 0%, #F8FAFC 45%, rgba(255,255,255,0.35) 75%, transparent 100%)',
                    boxShadow: '0 0 60px 25px rgba(255, 255, 255, 0.9)',
                  }}
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-full flex flex-col items-center justify-center p-4 text-stone-900 border-4 border-white/85 cursor-pointer select-none"
                  onClick={handleTakePanacea}
                >
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-700">
                    {activeLang === 'pb' ? 'ਸ਼੍ਵੇਤ ਪ੍ਰਕਾਸ਼' : activeLang === 'en' ? 'Divine Light' : 'श्वेत दिव्य प्रकाश'}
                  </span>
                  <span className="text-lg sm:text-2xl font-serif font-black my-1 text-stone-950">
                    {activeLang === 'pb' ? '॥ ਸਤਯਨਾਮ ॥' : activeLang === 'en' ? '|| Satyanaam ||' : '॥ सत्यनाम ॥'}
                  </span>
                  <span className="text-[11px] font-serif text-stone-800 font-bold">
                    {activeLang === 'pb' ? 'ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ' : activeLang === 'en' ? 'Supreme Panacea' : 'सर्व रोग निवारक'}
                  </span>
                </motion.div>
              </div>

              {/* Bottom Two Corners: कर्म-बंधन (Bottom-Left) & अशांति (Bottom-Right) */}
              <motion.div
                animate={{
                  opacity: isPanaceaTaken ? 0 : 1,
                  scale: isPanaceaTaken ? 0.85 : 1,
                  y: isPanaceaTaken ? 12 : 0,
                }}
                transition={{ duration: 0.7 }}
                className="w-full flex items-center justify-between gap-2 z-20 pointer-events-none"
              >
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.92)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(248, 250, 252, 0.45)',
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-serif font-bold shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-md"
                >
                  {activeLang === 'pb' ? '☁️ ਕਰਮ-ਬੰਧਨ' : activeLang === 'en' ? '☁️ Karmic Bonds' : '☁️ कर्म-बंधन'}
                </div>

                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.92)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(248, 250, 252, 0.45)',
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-serif font-bold shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-md"
                >
                  {activeLang === 'pb' ? '☁️ ਅਸ਼ਾਂਤੀ' : activeLang === 'en' ? '☁️ Inner Agitation' : '☁️ अशांति'}
                </div>
              </motion.div>
            </div>

            {/* Success Message or Action Button cleanly below the 4-Corner Orb */}
            <div className="relative z-20 w-full flex flex-col items-center justify-center pt-1">
              <AnimatePresence>
                {isPanaceaTaken && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white max-w-md text-center shadow-lg"
                  >
                    <p className="text-xs sm:text-sm font-serif font-bold text-amber-200">
                      ✨ {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਮਹਾ-ਔਸ਼ਧੀ ਪ੍ਰਾਪਤ ਹੋਈ! ਸਾਰੇ ਵਿਕਾਰ ਤੇ ਭਵ-ਵਿਆਧੀ ਨਸ਼ਟ ਹੋ ਗਏ।' : activeLang === 'en' ? 'Satyanaam Panacea received! All ailments and illusions have dissolved into pure light.' : 'सत्यनाम महा-औषधि ग्रहण संपन्न! समस्त भव-व्याधि, मोह-भ्रम, कर्म-बंधन एवं अशांति श्वेत दिव्य प्रकाश में विलीन हो गए।'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isPanaceaTaken && (
                <button
                  type="button"
                  onClick={handleTakePanacea}
                  className="px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-stone-950 font-serif font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-200 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-stone-900 animate-spin shrink-0" />
                  <span>
                    {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਗ੍ਰਹਿਣ ਕਰੋ (Experience Light)' : activeLang === 'en' ? 'Take Satyanaam Panacea (Experience Divine Light)' : 'सत्यनाम औषधि ग्रहण करें (दिव्य प्रकाश अनुभव करें)'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3 CANONICAL SCRIPTURAL CONTENT CARDS                                      */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h3 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-lg sm:text-xl dark:text-amber-300"
                >
                  {activeLang === 'pb' ? 'ਪ੍ਰਮਾਣਿਕ ਗ੍ਰੰਥਾਂ ਦੇ ਸਾਖਿਆਤ ਪ੍ਰਮਾਣ' : activeLang === 'en' ? 'Canonical Scriptural References' : 'प्रमाणिक ग्रंथों के साक्षात प्रमाण'}
                </h3>
              </div>
              <p className="text-xs font-serif text-stone-600 dark:text-stone-400 mt-0.5">
                {activeLang === 'pb'
                  ? 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ ਅਤੇ ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਤੋਂ ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਦੇ ਪ੍ਰਮਾਣ'
                  : activeLang === 'en'
                  ? 'Authoritative verses from Sakhi Sangrah, Kabir Granthavali and Sri Guru Granth Sahib'
                  : 'साखी संग्रह, कबीर ग्रंथावली एवं श्री गुरु ग्रंथ साहिब से सत्यनाम औषधि के पावन प्रमाण'}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {activeLang === 'pb' ? '੩ ਪ੍ਰਮਾਣ' : activeLang === 'en' ? '3 References' : '३ प्रमाण'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {panaceaCards.map((card, idx) => (
              <UnifiedDohaCard
                key={card.id}
                id={card.id}
                verseNumber={idx + 1}
                source={card.source[activeLang] || card.source.hi}
                text={card.verse[activeLang] || card.verse.hi}
                meaning={card.meaning[activeLang] || card.meaning.hi}
                language={activeLang}
                defaultExpandedMeaning={true}
              />
            ))}
          </div>
        </section>
    </div>
  );
};
