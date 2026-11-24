import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Volume2, 
  VolumeX, 
  Share2, 
  Check, 
  Sun, 
  BookOpen,
  HeartPulse,
  Award,
  RefreshCw
} from 'lucide-react';
import { Language, AppView, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { formatCoupletString } from '../utils/textSanitizer';

interface SatyanaamPanaceaViewProps {
  language: Language;
  onClose: () => void;
  onNavigateView?: (view: AppView) => void;
  onSelectLanguage?: (lang: Language) => void;
}

export const SatyanaamPanaceaView: React.FC<SatyanaamPanaceaViewProps> = ({
  language,
  onClose,
  onNavigateView,
  onSelectLanguage,
}) => {
  const { isDarkMode } = useAppTheme();
  const [activeLang, setActiveLang] = useState<Language>(language);
  const [isPanaceaTaken, setIsPanaceaTaken] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);

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
        hi: 'सत्यनामऔषधि है, भव-व्याधि की एक। जो जन सुमिरै प्रेम सों, ताके कटैं अनेक॥',
        pb: 'ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਹੈ, ਭਵ-व्याਧੀ ਕੀ ਏਕ। ਜੋ ਜਨ ਸਿਮਰੈ ਪ੍ਰੇਮ ਸੋਂ, ਤਾਕੇ ਕਟੈਂ ਅਨੇਕ॥',
        en: 'Satyanaam is the supreme medicine for all worldly ailments; whoever remembers it with pure devotion, their myriad bonds are severed.',
      },
      meaning: {
        hi: 'सतगुरु कबीर साहेब फरमाते हैं कि सत्यनाम ही समस्त जन्म-मरण, अज्ञान, मोह और मानसिक संतापों की एकमात्र महा-औषधि (Panacea) है। प्रेमपूर्वक इसके स्मरण से सभी कष्ट स्वतः नष्ट हो जाते हैं।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਤਯਨਾਮ ਹੀ ਸਮੁੱਚੇ ਮਾਨਸਿਕ ਤਾਪਾਂ ਤੇ ਵਿਕਾਰਾਂ ਦੀ ਮਹਾ-ਔਸ਼ਧੀ ਹੈ। ਪ੍ਰੇਮ ਸਹਿਤ ਸਿਮਰਨ ਨਾਲ ਸਾਰੇ ਰੋਗ ਮਿਟ ਜਾਂਦੇ ਹਨ।',
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
        en: 'Remembrance brings supreme bliss; remembrance cures all ailments. By the potency of simran, Kabir says, the fever of worldly rebirth is extinguished.',
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
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾहिਬ (ਸੁਖਮਨੀ ਸਾਹਿਬ, ਅੰਗ ੨੭੪)',
        en: 'Sri Guru Granth Sahib (Sukhmani Sahib, Ang 274)',
      },
      verse: {
        hi: 'प्रभ का सिमरणु सब ते ऊचा ॥ सिमरणि उद्धरे कतहु न मूंचा ॥',
        pb: 'ਪ੍ਰਭ ਕਾ ਸਿਮਰਨੁ ਸਭ ਤੇ ਊਚਾ ॥ ਸਿਮਰਨਿ ਉੱਧਰੇ ਕਤਹੁ ਨ ਮੂੰਚਾ ॥',
        en: 'Remembrance of the Supreme Lord is the highest of all; through Simran, souls are liberated and never wander again.',
      },
      meaning: {
        hi: 'श्री गुरु ग्रंथ साहिब में परम पावन सुखमनी साहिब का यह वचन है कि सत्यनाम का सुमिरन समस्त औषधियों में सर्वोच्च है। इसके प्रताप से जीव आवागमन के चक्र से हमेशा के लिए मुक्त हो जाता है।',
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਸੁਖਮਨੀ ਸਾਹਿਬ ਦਾ ਫੁਰਮਾਨ ਹੈ ਕਿ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਸਭ ਤੋਂ ਉੱਚਾ ਹੈ। ਇਸ ਨਾਲ ਜੀਵ ਜਨਮ-ਮरण ਦੇ ਦੁੱਖਾਂ ਤੋਂ ਪੂਰਨ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
        en: 'In Sukhmani Sahib, it is enshrined that the remembrance of the Supreme Truth is the highest panacea, liberating the seeker from all suffering and wandering.',
      },
    },
  ];

  const handleShareCard = (card: typeof panaceaCards[0]) => {
    sacredHaptics.lightTap();
    const liveUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sahebworld.app';
    const header = SACRED_BRANDING.header[activeLang] || SACRED_BRANDING.header.hi;
    const sourceLabel = activeLang === 'pb' ? 'ਸਰੋਤ' : activeLang === 'en' ? 'Source' : 'स्रोत';
    const meaningLabel = activeLang === 'pb' ? 'ਭਾਵਾਰਥ' : activeLang === 'en' ? 'Meaning' : 'भावार्थ';
    const footer = SACRED_BRANDING.footer[activeLang] || SACRED_BRANDING.footer.hi;

    const text = `${header}\n\n✨ ${card.source[activeLang] || card.source.hi}\n\n${formatCoupletString(card.verse[activeLang] || card.verse.hi)}\n\n📖 ${meaningLabel}: ${card.meaning[activeLang] || card.meaning.hi}\n\n👉 ${liveUrl}/#satyanaam-panacea\n\n${footer}`;

    if (navigator.share) {
      navigator.share({
        title: activeLang === 'pb' ? 'ਸਤਯਨਾਮ: ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ ਔਸ਼ਧੀ' : activeLang === 'en' ? 'Satyanaam: The Supreme Panacea' : 'सत्यनाम: सर्व रोग निवारक औषधि',
        text: text,
      }).catch(() => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      });
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }

    setCopiedCardId(card.id);
    setTimeout(() => setCopiedCardId(null), 2500);
  };

  const handleToggleAudio = (cardId: string, verseText: string) => {
    sacredHaptics.lightTap();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio === cardId) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(null);
      return;
    }

    window.speechSynthesis.cancel();
    setIsPlayingAudio(cardId);

    const utterance = new SpeechSynthesisUtterance(verseText);
    utterance.lang = activeLang === 'pb' ? 'pa-IN' : activeLang === 'en' ? 'en-IN' : 'hi-IN';
    utterance.rate = 0.88;
    utterance.onend = () => setIsPlayingAudio(null);
    utterance.onerror = () => setIsPlayingAudio(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      style={{ 
        backgroundColor: isDarkMode ? '#17120E' : '#FDF8EE',
        color: isDarkMode ? '#F5EBE1' : '#2C1810' 
      }} 
      className="min-h-screen pb-20 selection:bg-amber-500 selection:text-white"
    >
      {/* Top-Center Sacred Banner */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#241A14' : '#FAF0DC',
          borderColor: 'rgba(217, 119, 6, 0.35)',
        }}
        className="border-b py-2 px-3 sm:px-4 flex items-center justify-center select-none"
      >
        <span
          style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
          className="text-base sm:text-lg font-black tracking-wide font-serif whitespace-nowrap text-center"
        >
          {SACRED_BRANDING.header[activeLang]}
        </span>
      </div>

      {/* Top Header Navigation Bar */}
      <header 
        style={{
          backgroundColor: isDarkMode ? 'rgba(26, 18, 14, 0.92)' : 'rgba(253, 248, 238, 0.92)',
          borderColor: '#D97706',
        }}
        className="sticky top-0 z-40 backdrop-blur-md border-b px-4 py-3 sm:px-6 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border border-amber-600/30 hover:bg-amber-500/10 transition-colors cursor-pointer flex items-center justify-center text-[#6B1D1D] dark:text-amber-400"
            title={activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : activeLang === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black tracking-widest text-[#D97706] uppercase">
                {activeLang === 'pb' ? 'ਸਾਧਨਾ ਤੇ ਆਤਮ-ਸ਼ੁੱਧੀ' : activeLang === 'en' ? 'Sadhana & Healing' : 'साधना एवं आत्म-शुद्धि'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/20">
                100% Panacea
              </span>
            </div>
            <h1 
              style={{ color: '#6B1D1D' }} 
              className="text-base sm:text-lg font-serif font-black dark:text-amber-300 tracking-tight"
            >
              {activeLang === 'pb' ? 'ਸਤਯਨਾਮ: ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ ਔਸ਼ਧੀ' : activeLang === 'en' ? 'Satyanaam: The Supreme Panacea' : 'सत्यनाम: सर्व रोग निवारक औषधि'}
            </h1>
          </div>
        </div>

        {/* Language Selector Pills */}
        <div className="flex items-center gap-1 bg-amber-500/10 p-1 rounded-xl border border-amber-500/20">
          {(['hi', 'pb', 'en'] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveLang(lang);
                if (onSelectLanguage) onSelectLanguage(lang);
              }}
              className={`px-2.5 py-1 text-xs font-serif font-black rounded-lg transition-all cursor-pointer ${
                activeLang === lang
                  ? 'bg-[#6B1D1D] text-amber-50 shadow-xs'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/15'
              }`}
            >
              {lang === 'hi' ? 'हिंदी' : lang === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
            </button>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 space-y-7">
        
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
            {activeLang === 'pb' && 'ਸਤਯਨਾਮ ਹੀ ਭਵ-ਵ්‍යාਧੀ, ਮੋਹ, ਭ੍ਰम ਅਤੇ ਕਰਮ-ਬੰਧਨਾਂ ਦੀ ਇੱਕੋ-ਇੱਕ ਅਚूक ਔਸ਼ਧੀ ਹੈ।'}
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
                  ? 'ਮੋਹ, ਭ੍ਰम ਤੇ ਅਸ਼ਾਂਤੀ ਦੇ ਬੱ बादल ਹਟਾ ਕੇ ਅੰਤਰਘਟ ਵਿੱਚ ਸ਼ੁੱਧ ਚੇਤਨਾ ਪ੍ਰਗਟ ਕਰੋ'
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
          <div className="relative py-8 px-4 bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 rounded-2xl border border-amber-500/30 overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
            
            {/* Ambient Background Rays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none" />

            {/* Surrounding Ailment Mist Clouds (Fade away when Panacea is taken) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <motion.div
                animate={{
                  opacity: isPanaceaTaken ? 0 : 0.85,
                  scale: isPanaceaTaken ? 1.4 : 1,
                  filter: isPanaceaTaken ? 'blur(16px)' : 'blur(4px)',
                }}
                transition={{ duration: 1.2 }}
                className="relative w-full max-w-sm h-64 flex items-center justify-center"
              >
                {/* Cloud 1: भव-व्याधि */}
                <div className="absolute top-4 left-6 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-600/50 text-stone-300 text-xs font-serif shadow-lg animate-pulse">
                  {activeLang === 'pb' ? '☁️ ਭਵ-ਵ්‍යාਧੀ (Ailment)' : activeLang === 'en' ? '☁️ Worldly Ailment' : '☁️ भव-व्याधि'}
                </div>
                {/* Cloud 2: मोह-भ्रम */}
                <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-600/50 text-stone-300 text-xs font-serif shadow-lg">
                  {activeLang === 'pb' ? '☁️ मोह-भ्रम (Illusion)' : activeLang === 'en' ? '☁️ Illusion & Maya' : '☁️ मोह-भ्रम'}
                </div>
                {/* Cloud 3: कर्म-बंधन */}
                <div className="absolute bottom-6 left-8 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-600/50 text-stone-300 text-xs font-serif shadow-lg">
                  {activeLang === 'pb' ? '☁️ कर्म-बंधन (Karmas)' : activeLang === 'en' ? '☁️ Karmic Bonds' : '☁️ कर्म-बंधन'}
                </div>
                {/* Cloud 4: अशांति */}
                <div className="absolute bottom-4 right-8 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-600/50 text-stone-300 text-xs font-serif shadow-lg animate-pulse">
                  {activeLang === 'pb' ? '☁️ अशांति (Agitation)' : activeLang === 'en' ? '☁️ Inner Agitation' : '☁️ अशांति'}
                </div>
              </motion.div>
            </div>

            {/* Center Pure White Divine Light Orb & Lotus */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
              {/* Lotus Base */}
              <div className="text-3xl filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] select-none">
                🪷
              </div>

              {/* Radiant White Light Orb */}
              <motion.div
                animate={{
                  scale: isPanaceaTaken ? [1, 1.25, 1.15] : [1, 1.08, 1],
                  boxShadow: isPanaceaTaken 
                    ? ['0 0 30px rgba(255,255,255,0.8)', '0 0 60px rgba(255,255,255,1)', '0 0 45px rgba(255,255,255,0.9)']
                    : ['0 0 20px rgba(255,255,255,0.4)', '0 0 35px rgba(255,255,255,0.7)', '0 0 20px rgba(255,255,255,0.4)'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: 'radial-gradient(circle, #FFFFFF 0%, #FEF3C7 60%, #F59E0B 100%)',
                }}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center p-4 text-stone-900 border-4 border-amber-200 shadow-2xl cursor-pointer select-none"
                onClick={handleTakePanacea}
              >
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900">
                  {activeLang === 'pb' ? 'ਸ਼੍ਵੇਤ ਪ੍ਰਕਾਸ਼' : activeLang === 'en' ? 'Divine Light' : 'श्वेत दिव्य प्रकाश'}
                </span>
                <span className="text-lg sm:text-xl font-serif font-black my-1 text-stone-900">
                  {activeLang === 'pb' ? '॥ ਸਤਯਨਾਮ ॥' : activeLang === 'en' ? '|| Satyanaam ||' : '॥ सत्यनाम ॥'}
                </span>
                <span className="text-[10px] font-serif text-amber-900/80 font-semibold">
                  {activeLang === 'pb' ? 'ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ' : activeLang === 'en' ? 'Supreme Panacea' : 'सर्व रोग निवारक'}
                </span>
              </motion.div>

              {/* Success Message when Panacea Taken */}
              <AnimatePresence>
                {isPanaceaTaken && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white max-w-sm text-center shadow-lg"
                  >
                    <p className="text-xs font-serif font-bold text-amber-200">
                      ✨ {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਮਹਾ-ਔਸ਼ਧੀ ਪ੍ਰਾਪਤ ਹੋਈ! ਸਾਰੇ ਵਿਕਾਰ ਤੇ ਭਵ-ਵ්‍යාਧੀ ਨਸ਼ਟ ਹੋ ਗਏ।' : activeLang === 'en' ? 'Satyanaam Panacea received! All ailments and illusions have dissolved into pure light.' : 'सत्यनाम महा-औषधि ग्रहण संपन्न! समस्त भव-व्याधि एवं मोह-भ्रम श्वेत प्रकाश में विलीन हो गए।'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Button */}
            {!isPanaceaTaken && (
              <div className="mt-6 z-10">
                <button
                  type="button"
                  onClick={handleTakePanacea}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-stone-950 font-serif font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-200 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-stone-900 animate-spin" />
                  <span>
                    {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਔਸ਼ਧੀ ग्रहण ਕਰੋ (Experience Light)' : activeLang === 'en' ? 'Take Satyanaam Panacea (Experience Divine Light)' : 'सत्यनाम औषधि ग्रहण करें (दिव्य प्रकाश अनुभव करें)'}
                  </span>
                </button>
              </div>
            )}
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
                  ? 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਕਬੀਰ ਗ੍ਰंਥਾਵਲੀ ਅਤੇ ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਤੋਂ ਸਤਯਨਾਮ ਔਸ਼ਧੀ ਦੇ ਪ੍ਰਮਾਣ'
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
            {panaceaCards.map((card) => {
              const isPlaying = isPlayingAudio === card.id;
              const isCopied = copiedCardId === card.id;

              return (
                <div
                  key={card.id}
                  style={{
                    backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
                    borderColor: 'rgba(217, 119, 6, 0.35)',
                  }}
                  className="rounded-2xl border-2 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Source Header */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-serif font-black text-[#D97706] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0" />
                        <span>{card.source[activeLang] || card.source.hi}</span>
                      </span>

                      {/* Actions */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggleAudio(card.id, card.verse[activeLang] || card.verse.hi)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isPlaying
                              ? 'bg-amber-600 text-white border-amber-700'
                              : 'border-amber-500/30 hover:bg-amber-500/15 text-stone-700 dark:text-stone-300'
                          }`}
                          title={isPlaying ? 'Stop Audio' : 'Listen Audio'}
                        >
                          {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleShareCard(card)}
                          className="p-1.5 rounded-lg border border-amber-500/30 hover:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 transition-colors cursor-pointer"
                          title="Share on WhatsApp"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Verse */}
                    <p 
                      style={{ color: '#6B1D1D' }} 
                      className="font-serif font-black text-sm sm:text-base leading-relaxed dark:text-amber-300"
                    >
                      {formatCoupletString(card.verse[activeLang] || card.verse.hi)}
                    </p>

                    {/* Meaning */}
                    <div className="p-3 rounded-xl bg-amber-500/8 border border-amber-500/15">
                      <p className="text-xs font-serif leading-relaxed text-stone-700 dark:text-stone-300">
                        <span className="font-bold text-[#D97706]">
                          {activeLang === 'pb' ? 'ਭਾਵਾਰਥ: ' : activeLang === 'en' ? 'Meaning: ' : 'भावार्थ: '}
                        </span>
                        {card.meaning[activeLang] || card.meaning.hi}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
};
