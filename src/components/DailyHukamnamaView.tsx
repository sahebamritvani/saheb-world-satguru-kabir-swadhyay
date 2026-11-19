import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Scroll, 
  Volume2, 
  VolumeX, 
  Share2, 
  Download, 
  Sparkles, 
  Calendar, 
  Languages, 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Sun
} from 'lucide-react';
import { Language, SggsKabirVerse } from '../types';
import {
  getDailyHukamnama,
  getDailyHukamnamaAsync,
  setupMidnightHukamnamaListener,
  getDailyLifeDiscipline,
} from '../services/dailyHukamnamaService';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface DailyHukamnamaViewProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBack: () => void;
  onOpenWallpaperEngine?: () => void;
}

export const DailyHukamnamaView: React.FC<DailyHukamnamaViewProps> = ({
  language,
  onLanguageChange,
  onBack,
  onOpenWallpaperEngine
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [verse, setVerse] = useState<SggsKabirVerse>(() => getDailyHukamnama(new Date()));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedScript, setCopiedScript] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'vani' | 'shabdarth' | 'bhavarth' | 'anushasan'>('vani');

  // Update verse when date changes (lazy-loading full SGGS index on demand)
  useEffect(() => {
    let cancelled = false;
    setVerse(getDailyHukamnama(currentDate));
    getDailyHukamnamaAsync(currentDate)
      .then((v) => {
        if (!cancelled) setVerse(v);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [currentDate]);

  // Midnight 12:00 AM listener
  useEffect(() => {
    const cleanup = setupMidnightHukamnamaListener(() => {
      const today = new Date();
      setCurrentDate(today);
      setVerse(getDailyHukamnama(today));
      getDailyHukamnamaAsync(today)
        .then((v) => setVerse(v))
        .catch(() => {});
    });
    return cleanup;
  }, []);

  const discipline = getDailyLifeDiscipline(verse, language);
  const isPb = language === 'pb';
  const isEn = language === 'en';

  const moolLines = isPb 
    ? verse.moolGurmukhi 
    : isEn && verse.moolRoman?.length 
    ? verse.moolRoman 
    : verse.moolDevanagari;

  const bhavarthText = isPb 
    ? verse.bhavarth?.pb 
    : isEn 
    ? verse.bhavarth?.en 
    : verse.bhavarth?.hi;

  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      speechReciter.stop();
      setIsPlayingAudio(false);
    } else {
      try {
        satyanaamAudio.ringSacredBell();
      } catch {}
      const textToSpeak = verse.moolDevanagari.join(' । ') + ' । ' + (verse.bhavarth?.hi || '');
      speechReciter.speak(
        textToSpeak, 
        'hi', 
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
      setIsPlayingAudio(true);
    }
  };

  const handleCopyText = (type: 'all' | 'mool') => {
    sacredHaptics.lightTap();
    const textToCopy = type === 'mool' 
      ? verse.moolDevanagari.join('\n')
      : `☬ पावन दैनिक हुकमनामा • Sri Guru Granth Sahib Ji\n` +
        `सतगुरु कबीर साहेब वाणी (अंग ${verse.ang})\n\n` +
        `${verse.moolGurmukhi.join('\n')}\n\n` +
        `${verse.moolDevanagari.join('\n')}\n\n` +
        `भावार्थ:\n${bhavarthText}\n\n` +
        `दैनिक जीवन में अनुशासन:\n• विचार: ${discipline.vicharPoint}\n• आचरण: ${discipline.aacharanPoint}\n• संकल्प: ${discipline.samkalpPoint}\n\n` +
        `।। साहेब बन्दगी साहेब ।।`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedScript(type);
    setTimeout(() => setCopiedScript(null), 2500);
  };

  const handleShare = () => {
    sacredHaptics.lightTap();
    const shareText = `☬ पावन दैनिक हुकमनामा • Sri Guru Granth Sahib Ji\n` +
      `सतगुरु कबीर साहेब वाणी (अंग ${verse.ang})\n\n` +
      `${verse.moolGurmukhi.join('\n')}\n\n` +
      `${verse.moolDevanagari.join('\n')}\n\n` +
      `भावार्थ:\n${bhavarthText}\n\n` +
      `दैनिक जीवन में अनुशासन:\n• विचार: ${discipline.vicharPoint}\n• आचरण: ${discipline.aacharanPoint}\n• संकल्प: ${discipline.samkalpPoint}\n\n` +
      `।। साहेब बन्दगी साहेब ।।\nSaheb World Swadhyay App`;

    if (navigator.share) {
      navigator.share({
        title: 'पावन दैनिक हुकमनामा • Saheb World',
        text: shareText
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      alert('हुकमनामा कॉपी हो गया!');
    }
  };

  const handleDateShift = (days: number) => {
    sacredHaptics.lightTap();
    const newD = new Date(currentDate);
    newD.setDate(newD.getDate() + days);
    setCurrentDate(newD);
  };

  const isToday = currentDate.toDateString() === new Date().toDateString();

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-28 px-4 sm:px-6">
      {/* TOP NAVIGATION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onBack();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-500/25 text-amber-950 dark:text-amber-100 font-bold text-xs shadow-xs hover:bg-amber-500/10 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-600" />
          <span>{isPb ? 'ਵਾਪਸ ਮੁੱਖ ਪੰਨੇ ਤੇ' : isEn ? 'Back to Daily View' : 'वापस दैनिक स्वाध्याय'}</span>
        </button>

        {/* Global Language Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-zinc-900 rounded-2xl border border-amber-500/25 shadow-xs">
          <Languages className="w-4 h-4 text-amber-600 ml-2 mr-1" />
          {[
            { code: 'hi', label: 'हिंदी' },
            { code: 'pb', label: 'ਪੰਜਾਬੀ' },
            { code: 'en', label: 'English' }
          ].map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onLanguageChange(l.code as Language);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                language === l.code
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-950 dark:text-amber-100 hover:bg-amber-500/15'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* HEADER BANNER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-900 via-amber-800 to-orange-950 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-bold font-serif">
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ</span>
            </span>

            {/* Date Navigator */}
            <div className="flex items-center gap-2 bg-black/30 rounded-2xl p-1 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => handleDateShift(-1)}
                className="p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
                title="पिछला दिन"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="font-bold px-2">
                {currentDate.toLocaleDateString(isPb ? 'pa-IN' : 'hi-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>

              <button
                type="button"
                onClick={() => handleDateShift(1)}
                className="p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
                title="अगला दिन"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {!isToday && (
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date())}
                  className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-bold"
                >
                  आज
                </button>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-wide text-amber-100">
            {isPb ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਪਾਵਨ ਬਾਣੀ ਹੁਕਮਨਾਮਾ' : isEn ? 'Satguru Kabir Saheb Sacred Vani Hukamnama' : 'सतगुरु कबीर साहेब पावन वाणी हुकमनामा'}
          </h1>

          <p className="text-xs sm:text-sm text-amber-100/80 font-serif max-w-2xl leading-relaxed">
            {isPb 
              ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚੋਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦਾ ਪਾਵਨ ਫ਼ੁਰਮਾਨ, ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਅਤੇ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਅਨੁਸ਼ਾਸਨ।'
              : isEn 
              ? 'Sacred command from Sri Guru Granth Sahib Ji with deep mystical essence and practical daily life discipline guidance.'
              : 'श्री गुरु ग्रंथ साहिब जी में दर्ज सतगुरु कबीर साहेब का पावन हुकमनामा, गहन आध्यात्मिक रहस्य एवं दैनिक जीवन में आचरण का अनुशासन।'}
          </p>
        </div>
      </div>

      {/* SCRIPTURAL CITATION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50 dark:bg-[#1E1610] border border-amber-500/20 text-xs font-serif font-bold text-amber-900 dark:text-amber-200">
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>
            {isPb ? 'ਅੰਗ' : isEn ? 'Ang' : 'अंग'} {verse.ang} • {verse.raag ? `ਰਾਗ ${verse.raag}` : 'ਸਲੋਕ ਕਬੀਰ ਜੀਉ ਕੇ'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
            ✓ 12:00 AM स्वतः परिवर्तन (अनावृत्ति / No Repetition)
          </span>

          {onOpenWallpaperEngine && (
            <button
              type="button"
              onClick={onOpenWallpaperEngine}
              className="px-2.5 py-1 rounded-xl bg-amber-600 text-white text-[11px] hover:bg-amber-700 transition cursor-pointer"
            >
              वॉलपेपर बनाएं
            </button>
          )}
        </div>
      </div>

      {/* CONTENT TABS */}
      <div className="flex gap-2 p-1.5 rounded-2xl bg-amber-900/5 dark:bg-black/30 border border-amber-500/20">
        {[
          { id: 'vani', label: '📜 पावन मूल वाणी' },
          { id: 'bhavarth', label: '✨ गहन भावार्थ' },
          { id: 'anushasan', label: '🛡️ दैनिक अनुशासन' },
          { id: 'shabdarth', label: '📖 शब्दार्थ' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveTab(tab.id as any);
            }}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition cursor-pointer ${
              activeTab === tab.id
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 dark:text-amber-100 hover:bg-amber-500/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT 1: MOOL VANI */}
      {activeTab === 'vani' && (
        <div className="space-y-5 bg-white dark:bg-[#1A140E] p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-lg">
          {/* Gurmukhi Script */}
          <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-black/40 border border-amber-500/15 space-y-2 text-center">
            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 block tracking-wider uppercase">
              ਮੂਲ ਗੁਰਮੁਖੀ ਪਾਠ
            </span>
            {verse.moolGurmukhi.map((line: string, idx: number) => (
              <p
                key={idx}
                className="font-serif font-black text-lg sm:text-2xl text-amber-950 dark:text-amber-100 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Devanagari Script */}
          <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-black/40 border border-amber-500/15 space-y-2 text-center">
            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 block tracking-wider uppercase">
              मूल देवनागरी पाठ
            </span>
            {verse.moolDevanagari.map((line: string, idx: number) => (
              <p
                key={idx}
                className="font-serif font-black text-lg sm:text-2xl text-amber-950 dark:text-amber-100 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Roman Transliteration if available */}
          {verse.moolRoman && verse.moolRoman.length > 0 && (
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-1 text-center">
              <span className="text-[10px] text-gray-500 block uppercase font-mono">
                English Transliteration
              </span>
              {verse.moolRoman.map((line: string, idx: number) => (
                <p key={idx} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-serif italic">
                  {line}
                </p>
              ))}
            </div>
          )}

          {/* Controls below verse */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-500/15">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`py-2 px-3.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  isPlayingAudio
                    ? 'bg-amber-600 text-white border-amber-600 animate-pulse'
                    : 'bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/20 hover:bg-amber-500/20'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlayingAudio ? 'रोकें' : 'पावन वाणी श्रवण (Audio)'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopyText('mool')}
                className="py-2 px-3 rounded-xl bg-black/5 dark:bg-white/5 text-amber-900 dark:text-amber-200 border border-black/10 dark:border-white/10 hover:bg-black/10 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                {copiedScript === 'mool' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedScript === 'mool' ? 'कॉपी हुआ' : 'मूल दोहा कॉपी'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="py-2 px-4 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-sm hover:bg-amber-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>हुकमनामा साझा करें</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: BHAVARTH (DEEP SPIRITUAL ESSENCE) */}
      {activeTab === 'bhavarth' && (
        <div className="bg-white dark:bg-[#1A140E] p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-lg space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-amber-500/15">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h2 className="font-serif font-black text-base sm:text-xl text-amber-950 dark:text-amber-100">
              {isPb ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਤੇ ਤੱਤ ਗਿਆਨ' : isEn ? 'Deep Spiritual Meaning & Mystical Essence' : 'गहन आध्यात्मिक भावार्थ एवं तत्त्व ज्ञान'}
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-black/40 border border-amber-500/20 leading-relaxed font-serif text-sm sm:text-base text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {bhavarthText}
          </div>

          {/* Secondary Language Bhavarth */}
          {language !== 'hi' && verse.bhavarth?.hi && (
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 space-y-1">
              <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 block">
                हिंदी भावार्थ:
              </span>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
                {verse.bhavarth.hi}
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 3: DAINIK JEEVAN ANUSHASAN */}
      {activeTab === 'anushasan' && (
        <div className="bg-white dark:bg-[#1A140E] p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-lg space-y-6">
          <div className="space-y-1 pb-3 border-b border-amber-500/15">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-serif font-black text-base sm:text-xl text-amber-950 dark:text-amber-100">
                {discipline.title}
              </h2>
            </div>
            <p className="text-xs text-amber-900/70 dark:text-amber-300/70 font-serif">
              {discipline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1: Chintan */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>१. मन एवं विचार संयम</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-serif leading-relaxed">
                {discipline.vicharPoint}
              </p>
            </div>

            {/* Step 2: Acharan */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>२. वाणी एवं सत्य आचरण</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-serif leading-relaxed">
                {discipline.aacharanPoint}
              </p>
            </div>

            {/* Step 3: Samkalp */}
            <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-orange-900 dark:text-orange-200 font-bold text-sm">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>३. आज का पावन संकल्प</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-serif leading-relaxed">
                {discipline.samkalpPoint}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-600/10 border border-amber-500/25 flex items-start gap-3">
            <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-serif">
              <strong>साधक आचार संहिता:</strong> जब हम सतगुरु कबीर साहेब के वचनों को केवल पढ़ते नहीं, अपितु अपने दैनिक आचरण में ढालते हैं, तब जीवन के समस्त ताप और भ्रम समाप्त हो जाते हैं।
            </p>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: SHABDARTH */}
      {activeTab === 'shabdarth' && (
        <div className="bg-white dark:bg-[#1A140E] p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-lg space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-amber-500/15">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h2 className="font-serif font-black text-base sm:text-xl text-amber-950 dark:text-amber-100">
              {isPb ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪਾਵਨ ਸ਼ਬਦਾਰਥ' : isEn ? 'Sacred Vocabulary & Meanings (Shabdarth)' : 'श्री गुरु ग्रंथ साहिब जी के पावन शब्दार्थ'}
            </h2>
          </div>

          {verse.shabdarth && verse.shabdarth.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verse.shabdarth.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-black/30 border border-amber-500/15 flex items-start justify-between gap-3 text-xs"
                >
                  <strong className="text-amber-900 dark:text-amber-300 font-serif text-sm">
                    {item.word}
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300 font-serif text-right">
                    {isPb ? item.meaning?.pb : isEn ? item.meaning?.en : item.meaning?.hi}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-500 font-serif text-center py-6">
              इस पद के सभी शब्द सामान्य व सरल भावार्थ में स्पष्ट हैं।
            </p>
          )}
        </div>
      )}
    </div>
  );
};
