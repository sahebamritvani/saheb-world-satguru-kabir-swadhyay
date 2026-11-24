import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Pause,
  Copy,
  Check,
  Share2,
  ArrowLeft,
  Languages,
  Compass,
  Heart
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { TEN_SATYA_VACHAN_SUTRAS, DAS_SUTRAS_METADATA, SatyaVachanSutra } from '../data/dasSutraData';
import { useAppTheme } from '../theme/ThemeContext';

interface GuruJiDasSutraViewProps {
  language: Language;
  onChangeLanguage?: (lang: Language) => void;
  onClose?: () => void;
  onOpenBlessing?: (title?: string, message?: string) => void;
}

type DisplayMode = 'single' | 'trilingual';

export const GuruJiDasSutraView: React.FC<GuruJiDasSutraViewProps> = ({
  language,
  onChangeLanguage,
  onClose,
  onOpenBlessing,
}) => {
  const { theme } = useAppTheme();

  // Local language state
  const [activeLang, setActiveLang] = useState<Language>(language);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('single');

  // Copy state
  const [isCopied, setIsCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Audio / Speech Synthesis state
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState<number | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Sync prop changes
  useEffect(() => {
    setActiveLang(language);
  }, [language]);

  // Initialize SpeechSynthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setActiveLang(lang);
    setDisplayMode('single');
    if (onChangeLanguage) {
      onChangeLanguage(lang);
    }
    stopAudio();
  };

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlayingAll(false);
    setCurrentlyPlayingIndex(null);
  };

  // Play a single sutra
  const playSutraAudio = (sutraItem: SatyaVachanSutra, index: number) => {
    if (!synthRef.current) return;

    if (currentlyPlayingIndex === index) {
      stopAudio();
      return;
    }

    synthRef.current.cancel();
    setCurrentlyPlayingIndex(index);
    setIsPlayingAll(false);

    const targetLang = activeLang;
    const textToSpeak = `${sutraItem.num}. ${sutraItem.sutra[targetLang]}. ${DAS_SUTRAS_METADATA.bhavarthLabel[targetLang]} ${sutraItem.bhavarth[targetLang]}. ${DAS_SUTRAS_METADATA.lifeMessageLabel[targetLang]} ${sutraItem.lifeMessage[targetLang]}`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = targetLang === 'hi' ? 'hi-IN' : targetLang === 'pb' ? 'pa-IN' : 'en-US';
    utterance.rate = 0.9;

    utterance.onend = () => setCurrentlyPlayingIndex(null);
    utterance.onerror = () => setCurrentlyPlayingIndex(null);

    synthRef.current.speak(utterance);
  };

  // Play all 10 sutras sequentially
  const playAllSutras = () => {
    if (!synthRef.current) return;

    if (isPlayingAll) {
      stopAudio();
      return;
    }

    synthRef.current.cancel();
    setIsPlayingAll(true);

    const targetLang = activeLang;
    let currentIndex = 0;

    const speakNext = () => {
      if (currentIndex >= TEN_SATYA_VACHAN_SUTRAS.length) {
        setIsPlayingAll(false);
        setCurrentlyPlayingIndex(null);
        return;
      }

      setCurrentlyPlayingIndex(currentIndex);
      const item = TEN_SATYA_VACHAN_SUTRAS[currentIndex];
      const textToSpeak = `सूत्र संख्या ${item.num}: ${item.sutra[targetLang]}. ${item.bhavarth[targetLang]}`;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = targetLang === 'hi' ? 'hi-IN' : targetLang === 'pb' ? 'pa-IN' : 'en-US';
      utterance.rate = 0.9;

      utterance.onend = () => {
        currentIndex++;
        speakNext();
      };

      utterance.onerror = () => {
        setIsPlayingAll(false);
        setCurrentlyPlayingIndex(null);
      };

      synthRef.current?.speak(utterance);
    };

    speakNext();
  };

  // Copy All
  const handleCopyAll = (mode: 'active' | 'all') => {
    let content = '';

    if (mode === 'all') {
      content = [
        SACRED_BRANDING.header[activeLang],
        'सतगुरु कबीर साहेब जी के १० पावन सत्य वचन सूत्र (त्रिभाषी / Tri-lingual)',
        '====================================================',
        '',
        ...TEN_SATYA_VACHAN_SUTRAS.map((s) => {
          return [
            `【 सूत्र ${s.num} 】`,
            `🇮🇳 हिंदी: ${s.sutra.hi}`,
            `   भावार्थ: ${s.bhavarth.hi}`,
            `   जीवन संदेश: ${s.lifeMessage.hi}`,
            `ੴ ਪੰਜਾਬੀ: ${s.sutra.pb}`,
            `   ਭਾਵਾਰਥ: ${s.bhavarth.pb}`,
            `   ਜੀਵਨ ਸੰਦੇਸ਼: ${s.lifeMessage.pb}`,
            `🇬🇧 English: ${s.sutra.en}`,
            `   Meaning: ${s.bhavarth.en}`,
            `   Life Message: ${s.lifeMessage.en}`,
            '',
          ].join('\n');
        }),
        '।। साहेब बंदगी साहेब ।। 🙏',
      ].join('\n');
    } else {
      content = [
        DAS_SUTRAS_METADATA.headerBadge[activeLang],
        '',
        DAS_SUTRAS_METADATA.title[activeLang],
        DAS_SUTRAS_METADATA.subtitle[activeLang],
        '',
        '====================================================',
        ...TEN_SATYA_VACHAN_SUTRAS.map(
          (s) =>
            `${s.num}. ${s.sutra[activeLang]}\n   ${DAS_SUTRAS_METADATA.bhavarthLabel[activeLang]} ${s.bhavarth[activeLang]}\n   🌱 ${DAS_SUTRAS_METADATA.lifeMessageLabel[activeLang]} ${s.lifeMessage[activeLang]}\n`
        ),
        '====================================================',
        DAS_SUTRAS_METADATA.summaryCardTitle[activeLang],
        ...DAS_SUTRAS_METADATA.summaryStages.map(
          (st) => `• ${st[activeLang] || st.hi}`
        ),
        '',
        DAS_SUTRAS_METADATA.salutation[activeLang],
      ].join('\n');
    }

    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Copy single items
  const handleCopySingle = (sutraItem: SatyaVachanSutra) => {
    const text = [
      `${sutraItem.num}. ${sutraItem.sutra[activeLang]}`,
      `${DAS_SUTRAS_METADATA.bhavarthLabel[activeLang]} ${sutraItem.bhavarth[activeLang]}`,
      `🌱 ${DAS_SUTRAS_METADATA.lifeMessageLabel[activeLang]} ${sutraItem.lifeMessage[activeLang]}`,
      '।। साहेब बंदगी साहेब ।।',
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopiedIndex(sutraItem.num);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Share
  const handleShare = () => {
    const title = DAS_SUTRAS_METADATA.title[activeLang];
    const text = [
      SACRED_BRANDING.header[activeLang],
      DAS_SUTRAS_METADATA.title[activeLang],
      '',
      ...TEN_SATYA_VACHAN_SUTRAS.map((s) => `${s.num}. ${s.sutra[activeLang]}`),
      '',
      DAS_SUTRAS_METADATA.salutation[activeLang],
    ].join('\n');

    if (navigator.share) {
      navigator.share({ title, text }).catch(() => {});
    } else {
      handleCopyAll('active');
    }
  };

  const handleShareIndividual = (heading: string, contentText: string) => {
    const text = `${SACRED_BRANDING.header[activeLang]}\n\n${heading}\n\n${contentText}\n\n${SACRED_BRANDING.footer[activeLang]} 🙏`;
    if (navigator.share) {
      navigator.share({ title: heading, text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('टेक्स्ट कॉपी हो गया है! (Copied to clipboard)');
    }
  };

  const exactBottom = SACRED_BRANDING.footer[activeLang] || '।। साहेब बंदगी साहेब ।।';

  const uiLabels = {
    hi: {
      tagBadge: '१० सत्य वचन सूत्र',
      mainTitle: 'सतगुरु कबीर साहेब के पावन सूत्र',
      subtitle: 'जीवन-रूपांतरण, आत्म-जागृति एवं सत्यनाम अनुभूति के अमर आध्यात्मिक उपदेश',
      langTitle: 'भाषा चुनें (Select Language):',
      btnPlayAll: isPlayingAll ? 'श्रवण रोकें (Stop)' : 'अखंड वाणी पाठ श्रवण (Play All)',
      btnCopyActive: 'पाठ कॉपी करें',
      btnCopyAllLangs: 'त्रिभाषी कॉपी (All 3)',
      btnTrilingual: 'त्रिभाषी दृश्य (All 3 Together)',
      btnSingle: 'एकल भाषा (Selected)',
      meaning: 'भावार्थ:',
      lifeWisdom: 'जीवन संदेश:',
      spiritualSynthesis: 'समग्र समीक्षा',
      closingPrayer: '।। साहेब बंदगी साहेब।।🙏',
      blessingAccept: '१० सूत्र संकल्प ग्रहण करें',
    },
    pb: {
      tagBadge: '੧੦ ਸਤਯ ਵਚਨ ਸੂਤਰ',
      mainTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪਾਵਨ ਸੂਤਰ',
      subtitle: 'ਜੀਵਨ-ਰੂਪਾਂਤਰਣ, ਆਤਮ-ਜਾਗ੍ਰਿਤੀ ਅਤੇ ਸਤਯਨਾਮ ਅਨੁਭੂਤੀ ਦੇ ਅਮਰ ਅਧਿਆਤਮਿਕ ਸੂਤਰ',
      langTitle: 'ਭਾਸ਼ਾ ਚੁਣੋ (Select Language):',
      btnPlayAll: isPlayingAll ? 'ਬੋਲਣਾ ਰੋਕੋ (Stop)' : 'ਅਖੰਡ ਪਾਠ ਸੁਣੋ (Play All)',
      btnCopyActive: 'ਕਾਪੀ ਕਰੋ',
      btnCopyAllLangs: 'ਤ੍ਰੈ-ਭਾਸ਼ੀ ਕਾਪੀ (All 3)',
      btnTrilingual: 'ਤ੍ਰੈ-ਭਾਸ਼ੀ ਦ੍ਰਿਸ਼ (All 3 Together)',
      btnSingle: 'ਇੱਕ ਭਾਸ਼ਾ (Selected)',
      meaning: 'ਭਾਵਾਰਥ:',
      lifeWisdom: 'ਜੀਵਨ ਸੰਦੇਸ਼:',
      spiritualSynthesis: 'ਸਮੁੱਚੀ ਸਮੀਖਿਆ',
      closingPrayer: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।🙏',
      blessingAccept: '੧੦ ਸੂਤਰ ਸੰਕਲਪ ਗ੍ਰਹਿਣ ਕਰੋ',
    },
    en: {
      tagBadge: '10 Satya Vachan Sutras',
      mainTitle: 'Satguru Kabir Saheb’s Sacred Sutras',
      subtitle: 'Immortal Awakening Sutras for Inner Liberation, Self-Inquiry & Divine Peace',
      langTitle: 'Choose Language:',
      btnPlayAll: isPlayingAll ? 'Stop Audio' : 'Listen Full Recitation (Play All)',
      btnCopyActive: 'Copy Verses',
      btnCopyAllLangs: 'Copy All 3 Languages',
      btnTrilingual: 'Tri-lingual View (All 3 Together)',
      btnSingle: 'Single Language',
      meaning: 'Spiritual Meaning:',
      lifeWisdom: 'Living Wisdom:',
      spiritualSynthesis: 'Holistic Summary',
      closingPrayer: '|| Saheb Bandagi Saheb || 🙏',
      blessingAccept: 'Accept 10 Sutras Pledge',
    },
  }[activeLang];

  return (
    <div
      id="guru-ji-das-sutra-container"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border shadow-2xl overflow-x-hidden flex flex-col transition-all duration-300 max-w-5xl mx-auto my-3"
    >
      {/* 1. SACRED TOP BANNER (Satyanaam) - Sticky at top */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="sticky top-0 z-30 border-b py-2 px-3 sm:px-4 mb-2 select-none flex items-center justify-center overflow-hidden min-h-[42px] backdrop-blur-md"
        role="region"
        aria-label="Sacred Top Banner"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-base sm:text-lg font-black tracking-wide font-serif block whitespace-nowrap text-center"
        >
          {SACRED_BRANDING.header[activeLang] || SACRED_BRANDING.header.hi}
        </span>
      </div>

      {/* Reader Navigation Controls Bar */}
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-2">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.borderOrnament,
                color: theme.textPrimary,
              }}
              className="p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs active:scale-95"
              title="वापस जाएं (Go Back)"
            >
              <ArrowLeft className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline font-serif text-xs">{activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : activeLang === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleShare}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.borderOrnament,
            }}
            className="p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs"
            title="साझा करें (Share)"
          >
            <Share2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </button>
        </div>
      </div>

      {/* 3. SACRED HEADER & PROMINENT LANGUAGE CONTROLS */}
      <div className="p-4 sm:p-6 border-b space-y-4" style={{ borderColor: theme.cardBorder }}>
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{uiLabels.tagBadge}</span>
          </span>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif drop-shadow-xs leading-tight"
            style={{ color: theme.sacredMaroon }}
          >
            {uiLabels.mainTitle}
          </h1>

          <p
            className="text-xs sm:text-sm font-serif max-w-2xl mx-auto leading-relaxed"
            style={{ color: theme.textSecondary }}
          >
            {uiLabels.subtitle}
          </p>
        </div>

        {/* 🌟 PROMINENT MULTI-LANGUAGE SELECTION BAR 🌟 */}
        <div
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="p-3.5 rounded-2xl border-2 space-y-2.5 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-black uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
                {uiLabels.langTitle}
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-0.5 rounded-xl border bg-black/5 dark:bg-white/5" style={{ borderColor: theme.cardBorder }}>
              <button
                type="button"
                onClick={() => setDisplayMode('single')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                  displayMode === 'single'
                    ? 'bg-[#8B2500] text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
                }`}
              >
                <span>{uiLabels.btnSingle}</span>
              </button>

              <button
                type="button"
                onClick={() => setDisplayMode('trilingual')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                  displayMode === 'trilingual'
                    ? 'bg-[#8B2500] text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
                }`}
              >
                <span>🌐 {uiLabels.btnTrilingual}</span>
              </button>
            </div>
          </div>

          {/* 3 Language Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleSelectLanguage('hi')}
              style={{
                backgroundColor: activeLang === 'hi' && displayMode === 'single' ? theme.buttonPrimaryBg : 'transparent',
                color: activeLang === 'hi' && displayMode === 'single' ? theme.buttonPrimaryText : theme.textPrimary,
                borderColor: activeLang === 'hi' && displayMode === 'single' ? theme.accentGold : theme.cardBorder,
              }}
              className="py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm font-serif flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:border-amber-500 active:scale-95"
            >
              <span className="text-base">🇮🇳</span>
              <span className="font-black">हिंदी</span>
              {activeLang === 'hi' && displayMode === 'single' && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>

            <button
              type="button"
              onClick={() => handleSelectLanguage('pb')}
              style={{
                backgroundColor: activeLang === 'pb' && displayMode === 'single' ? theme.buttonPrimaryBg : 'transparent',
                color: activeLang === 'pb' && displayMode === 'single' ? theme.buttonPrimaryText : theme.textPrimary,
                borderColor: activeLang === 'pb' && displayMode === 'single' ? theme.accentGold : theme.cardBorder,
              }}
              className="py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm font-serif flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:border-amber-500 active:scale-95"
            >
              <span className="text-base">ੴ</span>
              <span className="font-black">ਪੰਜਾਬੀ</span>
              {activeLang === 'pb' && displayMode === 'single' && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>

            <button
              type="button"
              onClick={() => handleSelectLanguage('en')}
              style={{
                backgroundColor: activeLang === 'en' && displayMode === 'single' ? theme.buttonPrimaryBg : 'transparent',
                color: activeLang === 'en' && displayMode === 'single' ? theme.buttonPrimaryText : theme.textPrimary,
                borderColor: activeLang === 'en' && displayMode === 'single' ? theme.accentGold : theme.cardBorder,
              }}
              className="py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm font-serif flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:border-amber-500 active:scale-95"
            >
              <span className="text-base">🇬🇧</span>
              <span className="font-black">English</span>
              {activeLang === 'en' && displayMode === 'single' && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>
          </div>
        </div>

        {/* Action Controls: Audio Recitation & Copy Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
          <button
            type="button"
            onClick={playAllSutras}
            style={{
              backgroundColor: isPlayingAll ? 'rgba(239, 68, 68, 0.15)' : theme.stepActiveBg,
              borderColor: isPlayingAll ? '#EF4444' : theme.accentGold,
              color: isPlayingAll ? '#DC2626' : theme.sacredMaroon,
            }}
            className="px-4 py-2 rounded-xl border-2 text-xs font-black font-serif flex items-center gap-2 shadow-xs hover:scale-[1.02] transition-all cursor-pointer active:scale-95"
          >
            {isPlayingAll ? (
              <>
                <VolumeX className="w-4 h-4 text-red-600 animate-pulse" />
                <span>{uiLabels.btnPlayAll}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
                <span>{uiLabels.btnPlayAll}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopyAll('active')}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.sacredMaroon,
              }}
              className="px-3.5 py-2 rounded-xl border text-xs font-bold font-serif flex items-center gap-1.5 shadow-2xs hover:border-amber-500 transition-all cursor-pointer active:scale-95"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 dark:text-green-400 font-black">
                    {DAS_SUTRAS_METADATA.copiedBtn[activeLang]}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-700" />
                  <span>{uiLabels.btnCopyActive}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. CONTENT CARDS (TEN SATYA VACHAN SUTRAS) */}
      <div className="p-4 sm:p-6 space-y-5">
        {TEN_SATYA_VACHAN_SUTRAS.map((item, index) => {
          const isAudioActive = currentlyPlayingIndex === index;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.03 }}
              style={{
                backgroundColor: isAudioActive ? 'rgba(245, 158, 11, 0.12)' : theme.bgSecondary,
                borderColor: isAudioActive ? '#F59E0B' : theme.cardBorder,
              }}
              className={`p-4 sm:p-5 rounded-3xl border-2 space-y-3 shadow-xs hover:border-amber-500/60 transition duration-200 relative overflow-hidden ${
                isAudioActive ? 'ring-2 ring-amber-500/40' : ''
              }`}
            >
              {/* Top Row: Number Badge, Voice Listen Button, Copy & Share */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-amber-500/25 text-amber-900 dark:text-amber-100 font-black text-sm flex items-center justify-center shrink-0 border border-amber-500/50 shadow-inner font-serif">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 font-serif">
                    सूत्र #{item.num}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Audio Recitation */}
                  <button
                    type="button"
                    onClick={() => playSutraAudio(item, index)}
                    style={{
                      backgroundColor: isAudioActive ? '#F59E0B' : theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: isAudioActive ? '#000000' : theme.textPrimary,
                    }}
                    className="p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs"
                    title={isAudioActive ? 'रोकें (Stop)' : 'इस सूत्र को सुनें (Listen)'}
                  >
                    {isAudioActive ? (
                      <Pause className="w-3.5 h-3.5 text-stone-950 animate-pulse" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                    )}
                  </button>

                  {/* Copy */}
                  <button
                    type="button"
                    onClick={() => handleCopySingle(item)}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                    }}
                    className="p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs"
                    title="कॉपी करें"
                  >
                    {copiedIndex === item.num ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-stone-500 hover:text-amber-600" />
                    )}
                  </button>

                  {/* Share Individual Sutra */}
                  <button
                    type="button"
                    onClick={() =>
                      handleShareIndividual(
                        `सूत्र #${item.num}: ${item.sutra[activeLang]}`,
                        `${uiLabels.meaning} ${item.bhavarth[activeLang]}\n🌱 ${uiLabels.lifeWisdom} ${item.lifeMessage[activeLang]}`
                      )
                    }
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                    }}
                    className="p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs"
                    title="साझा करें (Share)"
                  >
                    <Share2 className="w-3.5 h-3.5 text-amber-600" />
                  </button>
                </div>
              </div>

              {/* SUTRA TEXT & MEANING / LIFE MESSAGE */}
              {displayMode === 'single' ? (
                <div className="space-y-3">
                  <h3
                    className="text-lg sm:text-xl font-black font-serif leading-snug tracking-wide"
                    style={{ color: theme.sacredMaroon }}
                  >
                    "{item.sutra[activeLang]}"
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-amber-500/10">
                      <strong className="text-amber-800 dark:text-amber-300 font-serif mr-1.5">
                        📖 {uiLabels.meaning}
                      </strong>
                      <span className="font-serif">{item.bhavarth[activeLang]}</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                      <strong className="text-amber-900 dark:text-amber-200 font-serif mr-1.5">
                        🌱 {uiLabels.lifeWisdom}
                      </strong>
                      <span className="font-serif">{item.lifeMessage[activeLang]}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 pt-1">
                  <div className="p-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">
                      <span>🇮🇳</span>
                      <span>हिंदी (Hindi):</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                      "{item.sutra.hi}"
                    </h4>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-800 dark:text-amber-300 font-serif mr-1">भावार्थ:</strong>
                      {item.bhavarth.hi}
                    </p>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-900 dark:text-amber-200 font-serif mr-1">जीवन संदेश:</strong>
                      {item.lifeMessage.hi}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl border border-amber-500/30 bg-orange-500/5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">
                      <span>ੴ</span>
                      <span>ਪੰਜਾਬੀ (Punjabi):</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                      "{item.sutra.pb}"
                    </h4>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-800 dark:text-amber-300 font-serif mr-1">ਭਾਵਾਰਥ:</strong>
                      {item.bhavarth.pb}
                    </p>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-900 dark:text-amber-200 font-serif mr-1">ਜੀਵਨ ਸੰਦੇਸ਼:</strong>
                      {item.lifeMessage.pb}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl border border-amber-500/30 bg-stone-500/5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">
                      <span>🇬🇧</span>
                      <span>English:</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                      "{item.sutra.en}"
                    </h4>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-800 dark:text-amber-300 font-serif mr-1">Meaning:</strong>
                      {item.bhavarth.en}
                    </p>
                    <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: theme.textPrimary }}>
                      <strong className="text-amber-900 dark:text-amber-200 font-serif mr-1">Life Message:</strong>
                      {item.lifeMessage.en}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 5. "समग्र समीक्षा (4-Stage Summary)" CARD AT THE BOTTOM */}
      <div className="px-4 sm:px-6 pb-6">
        <div
          style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', borderColor: '#F59E0B' }}
          className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-amber-600 animate-spin" style={{ animationDuration: '20s' }} />
            <h3 className="text-base sm:text-lg font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {uiLabels.spiritualSynthesis}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
            {DAS_SUTRAS_METADATA.summaryStages.map((stageItem, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-amber-500/20 space-y-1"
              >
                <span className="font-serif opacity-95 block font-bold text-amber-800 dark:text-amber-300">
                  {stageItem[activeLang] || stageItem.hi}
                </span>
              </div>
            ))}
          </div>

          {/* Accept Pledge / Blessing Button */}
          {onOpenBlessing && (
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() =>
                  onOpenBlessing(
                    activeLang === 'pb'
                      ? '੧੦ ਸਤਯ ਵਚਨ ਸੂਤਰ ਸੰਕਲਪ'
                      : activeLang === 'en'
                      ? '10 Divine Truth Sutras Pledge'
                      : '१० पावन सत्य वचन सूत्र संकल्प',
                    TEN_SATYA_VACHAN_SUTRAS.map((s) => `${s.num}. ${s.sutra[activeLang]}`).join('\n')
                  )
                }
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-6 py-2.5 rounded-2xl font-bold font-serif text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span>{uiLabels.blessingAccept}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 6. SACRED CLOSING SALUTATION */}
      <div className="text-center pt-2 pb-4">
        <span
          className="text-lg sm:text-xl font-extrabold font-serif tracking-wide block drop-shadow-xs"
          style={{ color: theme.sacredMaroon }}
        >
          {uiLabels.closingPrayer}
        </span>
      </div>

      {/* 7. BOTTOM BRANDING */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-t py-2 px-4 text-center select-none"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-xs sm:text-sm font-semibold tracking-widest font-serif block opacity-90"
        >
          {exactBottom}
        </span>
      </div>
    </div>
  );
};
