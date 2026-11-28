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
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface DailyHukamnamaViewProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBack: () => void;
  onOpenWallpaperEngine?: (hukamnamaVerse: SggsKabirVerse) => void;
}

export const DailyHukamnamaView: React.FC<DailyHukamnamaViewProps> = ({
  language,
  onLanguageChange,
  onBack,
  onOpenWallpaperEngine
}) => {
  const { theme, isDarkMode } = useAppTheme();
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
      const primaryLines = isPb
        ? verse.moolGurmukhi
        : isEn && verse.moolRoman?.length
        ? verse.moolRoman
        : verse.moolDevanagari;
      const textToSpeak =
        primaryLines
          .map((l) => (l || '').replace(/([।॥])\s*[।॥]/g, '$1').trim())
          .join(' ')
          .replace(/([।॥])\s*[।॥]/g, '$1') +
        ' ' +
        (bhavarthText || '');
      speechReciter.speak(
        textToSpeak,
        language,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
      setIsPlayingAudio(true);
    }
  };

  const buildShareContent = () => {
    const header = isPb
      ? '☬ ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ • ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ'
      : isEn
      ? '☬ Sacred Daily Hukamnama • Sri Guru Granth Sahib Ji'
      : '☬ पावन दैनिक हुकमनामा • श्री गुरु ग्रंथ साहिब जी';
    const sub = isPb
      ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬਾਣੀ (ਅੰਗ ${verse.ang})`
      : isEn
      ? `Satguru Kabir Saheb Vani (Ang ${verse.ang})`
      : `सतगुरु कबीर साहेब वाणी (अंग ${verse.ang})`;
    const bhavarthHeading = isPb ? 'ਭਾਵਾਰਥ:' : isEn ? 'Spiritual Essence:' : 'भावार्थ:';
    const discHeading = isPb
      ? `ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਅਨੁਸ਼ਾਸਨ:\n• ਵਿਚਾਰ: ${discipline.vicharPoint}\n• ਆਚਰਣ: ${discipline.aacharanPoint}\n• ਸੰਕਲਪ: ${discipline.samkalpPoint}`
      : isEn
      ? `Daily Life Discipline:\n• Mind: ${discipline.vicharPoint}\n• Conduct: ${discipline.aacharanPoint}\n• Resolve: ${discipline.samkalpPoint}`
      : `दैनिक जीवन में अनुशासन:\n• विचार: ${discipline.vicharPoint}\n• आचरण: ${discipline.aacharanPoint}\n• संकल्प: ${discipline.samkalpPoint}`;
    const footer = isPb
      ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।'
      : isEn
      ? '|| Saheb Bandagi Saheb ||'
      : '।। साहेब बंदगी साहेब ।।';

    return (
      `${header}\n${sub}\n\n` +
      `${verse.moolGurmukhi.join('\n')}\n\n` +
      `${verse.moolDevanagari.join('\n')}\n\n` +
      `${bhavarthHeading}\n${bhavarthText}\n\n` +
      `${discHeading}\n\n` +
      `${footer}`
    );
  };

  const handleCopyText = (type: 'all' | 'mool') => {
    sacredHaptics.lightTap();
    const moolText = isPb
      ? verse.moolGurmukhi.join('\n')
      : isEn && verse.moolRoman?.length
      ? verse.moolRoman.join('\n')
      : verse.moolDevanagari.join('\n');
    const textToCopy = type === 'mool' ? moolText : buildShareContent();

    navigator.clipboard.writeText(textToCopy);
    setCopiedScript(type);
    setTimeout(() => setCopiedScript(null), 2500);
  };

  const handleShare = () => {
    sacredHaptics.lightTap();
    const shareText = `${buildShareContent()}\nSaheb World`;

    if (navigator.share) {
      navigator
        .share({
          title: isPb
            ? 'ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ • Saheb World'
            : isEn
            ? 'Daily Hukamnama • Saheb World'
            : 'पावन दैनिक हुकमनामा • Saheb World',
          text: shareText,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setCopiedScript('share');
      setTimeout(() => setCopiedScript(null), 2500);
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
    <div className="max-w-5xl mx-auto space-y-6 pb-28 px-4 sm:px-6" style={{ color: theme.textPrimary }}>
      {/* TOP NAVIGATION BAR */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        {/* Global Language Switcher */}
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="flex items-center gap-1.5 p-1 rounded-2xl border backdrop-blur-md shadow-xs"
        >
          <Languages className="w-4 h-4 ml-2 mr-1" style={{ color: theme.accentGold }} />
          {[
            { code: 'hi', label: 'हिंदी' },
            { code: 'pb', label: 'ਪੰਜਾਬੀ' },
            { code: 'en', label: 'English' }
          ].map((l) => {
            const isSel = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  onLanguageChange(l.code as Language);
                }}
                style={
                  isSel
                    ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }
                    : { color: theme.textPrimary }
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isSel ? 'shadow-xs' : 'hover:bg-amber-500/15'
                }`}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* HEADER BANNER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#6B1800]/95 via-[#8B2500]/95 to-[#7C2D12]/95 backdrop-blur-md text-white p-6 sm:p-8 shadow-xl border border-amber-400/30">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 border border-amber-300/35 text-amber-100 text-xs font-bold font-serif">
              <Scroll className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {isPb
                  ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ'
                  : isEn
                  ? 'Sri Guru Granth Sahib Ji • Daily Hukamnama'
                  : 'श्री गुरु ग्रंथ साहिब जी • दैनिक हुकमनामा'}
              </span>
            </span>

            {/* Date Navigator */}
            <div className="flex items-center gap-2 bg-black/35 rounded-2xl p-1 border border-white/15 text-xs">
              <button
                type="button"
                onClick={() => handleDateShift(-1)}
                className="p-1 rounded-lg hover:bg-white/15 transition cursor-pointer"
                title={isPb ? 'ਪਿਛਲਾ ਦਿਨ' : isEn ? 'Previous Day' : 'पिछला दिन'}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="font-bold px-2">
                {currentDate.toLocaleDateString(isPb ? 'pa-IN' : isEn ? 'en-IN' : 'hi-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>

              <button
                type="button"
                onClick={() => handleDateShift(1)}
                className="p-1 rounded-lg hover:bg-white/15 transition cursor-pointer"
                title={isPb ? 'ਅਗਲਾ ਦਿਨ' : isEn ? 'Next Day' : 'अगला दिन'}
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {!isToday && (
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date())}
                  className="px-2 py-0.5 rounded-md bg-amber-400 text-black text-[10px] font-bold cursor-pointer"
                >
                  {isPb ? 'ਅੱਜ' : isEn ? 'Today' : 'आज'}
                </button>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-wide text-amber-50">
            {isPb ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਬਾਣੀ ਹੁਕਮਨਾਮਾ' : isEn ? 'Satguru Kabir Saheb Sacred Vani Hukamnama' : 'सतगुरु कबीर साहेब पावन वाणी हुकमनामा'}
          </h1>
          <p className="text-xs sm:text-sm font-serif font-bold text-amber-200">
            {isPb ? 'ਸਤਿਗੁਰੂ ਬੰਦੀਛੋੜ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਅੱਜ ਦਾ ਫ਼ੁਰਮਾਨ' : isEn ? "Today's Sacred Decree of Satguru Bandichhor Kabir Saheb" : 'सतगुरु बंदीछोड़ कबीर साहेब का आज का फरमान'}
          </p>

          <p className="text-xs sm:text-sm text-amber-100/90 font-serif max-w-2xl leading-relaxed">
            {isPb 
              ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚੋਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਫ਼ੁਰਮਾਨ, ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਅਤੇ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਅਨੁਸ਼ਾਸਨ।'
              : isEn 
              ? 'Sacred command from Sri Guru Granth Sahib Ji with deep mystical essence and practical daily life discipline guidance.'
              : 'श्री गुरु ग्रंथ साहिब जी में दर्ज सतगुरु कबीर साहेब का पावन हुकमनामा, गहन आध्यात्मिक रहस्य एवं दैनिक जीवन में आचरण का अनुशासन।'}
          </p>
        </div>
      </div>

      {/* SCRIPTURAL CITATION BAR */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
        className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border backdrop-blur-md text-xs font-serif font-bold shadow-sm"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4" style={{ color: theme.accentGold }} />
          <span>
            {isPb ? 'ਅੰਗ' : isEn ? 'Ang' : 'अंग'} {verse.ang} •{' '}
            {verse.raag
              ? `${isPb ? 'ਰਾਗ' : isEn ? 'Raag' : 'राग'} ${verse.raag}`
              : isPb
              ? 'ਸਲੋਕ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ'
              : isEn
              ? 'Salok Satguru Kabir Saheb Ke'
              : 'सलोक सतगुरु कबीर साहेब जी'}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            style={{ color: isDarkMode ? '#6EE7B7' : '#065F46' }}
            className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35"
          >
            {isPb
              ? '✓ 12:00 AM ਸਵੈ-ਪਰਿਵਰਤਨ (ਅਣਦੁਹਰਾਇਆ)'
              : isEn
              ? '✓ Auto-updates 12:00 AM (No Repetition)'
              : '✓ 12:00 AM स्वतः परिवर्तन (अनावृत्ति)'}
          </span>

          {onOpenWallpaperEngine && (
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onOpenWallpaperEngine(verse);
              }}
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="min-h-[36px] px-3 py-1 rounded-xl text-[11px] font-bold hover:opacity-90 transition cursor-pointer"
            >
              {isPb ? 'ਵਾਲਪੇਪਰ ਬਣਾਓ' : isEn ? 'Create Wallpaper' : 'वॉलपेपर बनाएं'}
            </button>
          )}
        </div>
      </div>

      {/* CONTENT TABS */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="flex flex-wrap sm:flex-nowrap gap-2 p-1.5 rounded-2xl border backdrop-blur-md"
      >
        {[
          {
            id: 'vani',
            label: isPb ? '📜 ਪਾਵਨ ਮੂਲ ਬਾਣੀ' : isEn ? '📜 Original Vani' : '📜 पावन मूल वाणी',
          },
          {
            id: 'bhavarth',
            label: isPb ? '✨ ਗਹਿਰਾ ਭਾਵਾਰਥ' : isEn ? '✨ Spiritual Essence' : '✨ गहन भावार्थ',
          },
          {
            id: 'anushasan',
            label: isPb ? '🛡️ ਰੋਜ਼ਾਨਾ ਅਨੁਸ਼ਾਸਨ' : isEn ? '🛡️ Daily Discipline' : '🛡️ दैनिक अनुशासन',
          },
          {
            id: 'shabdarth',
            label: isPb ? '📖 ਸ਼ਬਦਾਰਥ' : isEn ? '📖 Vocabulary' : '📖 शब्दार्थ',
          },
        ].map((tab) => {
          const isAct = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveTab(tab.id as any);
              }}
              style={
                isAct
                  ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }
                  : { color: theme.textPrimary }
              }
              className={`flex-1 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition cursor-pointer ${
                isAct ? 'shadow-md' : 'hover:bg-amber-500/15'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT 1: MOOL VANI */}
      {activeTab === 'vani' && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="space-y-5 p-6 sm:p-8 rounded-3xl border backdrop-blur-md shadow-lg"
        >
          {/* Gurmukhi Script */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
            className="p-5 rounded-2xl border space-y-2 text-center"
          >
            <span style={{ color: theme.accentGold }} className="text-[10px] font-bold block tracking-wider uppercase">
              {isPb ? 'ਮੂਲ ਗੁਰਮੁਖੀ ਪਾਠ' : isEn ? 'Original Gurmukhi Script' : 'मूल गुरुमुखी पाठ'}
            </span>
            {verse.moolGurmukhi.map((line: string, idx: number) => (
              <p
                key={idx}
                style={{ color: theme.sacredMaroon }}
                className="font-serif font-black text-lg sm:text-2xl leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Devanagari Script */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
            className="p-5 rounded-2xl border space-y-2 text-center"
          >
            <span style={{ color: theme.accentGold }} className="text-[10px] font-bold block tracking-wider uppercase">
              {isPb ? 'ਦੇਵਨਾਗਰੀ ਲਿਪੀ ਪਾਠ' : isEn ? 'Devanagari Script' : 'मूल देवनागरी पाठ'}
            </span>
            {verse.moolDevanagari.map((line: string, idx: number) => (
              <p
                key={idx}
                style={{ color: theme.sacredMaroon }}
                className="font-serif font-black text-lg sm:text-2xl leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Roman Transliteration if available */}
          {verse.moolRoman && verse.moolRoman.length > 0 && (
            <div
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
              className="p-4 rounded-xl border space-y-1 text-center"
            >
              <span style={{ color: theme.textMuted }} className="text-[10px] block uppercase font-mono font-bold">
                {isPb ? 'ਅੰਗਰੇਜ਼ੀ ਉਚਾਰਣ (Roman)' : isEn ? 'English Transliteration' : 'अंग्रेज़ी उच्चारण (Roman)'}
              </span>
              {verse.moolRoman.map((line: string, idx: number) => (
                <p key={idx} style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif italic">
                  {line}
                </p>
              ))}
            </div>
          )}

          {/* Controls below verse */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t" style={{ borderColor: theme.cardBorder }}>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleToggleAudio}
                style={
                  isPlayingAudio
                    ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText, borderColor: theme.accentGold }
                    : { backgroundColor: theme.stepActiveBg, color: theme.textPrimary, borderColor: theme.cardBorder }
                }
                className={`py-2 px-3.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  isPlayingAudio ? 'animate-pulse' : 'hover:opacity-90'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>
                  {isPlayingAudio
                    ? isPb
                      ? 'ਰੋਕੋ'
                      : isEn
                      ? 'Stop'
                      : 'रोकें'
                    : isPb
                    ? 'ਪਾਵਨ ਬਾਣੀ ਸੁਣੋ'
                    : isEn
                    ? 'Listen Audio'
                    : 'पावन वाणी श्रवण'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleCopyText('mool')}
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
                className="py-2 px-3 rounded-xl border hover:opacity-90 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                {copiedScript === 'mool' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copiedScript === 'mool'
                    ? isPb
                      ? 'ਕਾਪੀ ਹੋਇਆ'
                      : isEn
                      ? 'Copied'
                      : 'कॉपी हुआ'
                    : isPb
                    ? 'ਮੂਲ ਬਾਣੀ ਕਾਪੀ'
                    : isEn
                    ? 'Copy Verse'
                    : 'मूल दोहा कॉपी'}
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleShare}
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="py-2 px-4 rounded-xl font-bold text-xs shadow-sm hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
            >
              {copiedScript === 'share' ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>
                {copiedScript === 'share'
                  ? isPb
                    ? 'ਹੁਕਮਨਾਮਾ ਕਾਪੀ ਹੋਇਆ!'
                    : isEn
                    ? 'Hukamnama Copied!'
                    : 'हुकमनामा कॉपी हुआ!'
                  : isPb
                  ? 'ਹੁਕਮਨਾਮਾ ਸਾਂਝਾ ਕਰੋ'
                  : isEn
                  ? 'Share Hukamnama'
                  : 'हुकमनामा साझा करें'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: BHAVARTH (DEEP SPIRITUAL ESSENCE) */}
      {activeTab === 'bhavarth' && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="p-6 sm:p-8 rounded-3xl border backdrop-blur-md shadow-lg space-y-5"
        >
          <div className="flex items-center gap-2 pb-3 border-b" style={{ borderColor: theme.cardBorder }}>
            <Sparkles className="w-5 h-5" style={{ color: theme.accentGold }} />
            <h2 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-xl">
              {isPb ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਤੇ ਤੱਤ ਗਿਆਨ' : isEn ? 'Deep Spiritual Meaning & Mystical Essence' : 'गहन आध्यात्मिक भावार्थ एवं तत्त्व ज्ञान'}
            </h2>
          </div>

          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            className="p-5 rounded-2xl border leading-relaxed font-serif text-sm sm:text-base whitespace-pre-line"
          >
            {bhavarthText}
          </div>

          {/* Secondary Language Bhavarth */}
          {language !== 'hi' && verse.bhavarth?.hi && (
            <div style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border space-y-1">
              <span style={{ color: theme.accentGold }} className="text-[11px] font-bold block">
                {isPb ? 'ਹਿੰਦੀ ਭਾਵਾਰਥ:' : 'Hindi Meaning:'}
              </span>
              <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed">
                {verse.bhavarth.hi}
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 3: DAINIK JEEVAN ANUSHASAN */}
      {activeTab === 'anushasan' && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="p-6 sm:p-8 rounded-3xl border backdrop-blur-md shadow-lg space-y-6"
        >
          <div className="space-y-1 pb-3 border-b" style={{ borderColor: theme.cardBorder }}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-xl">
                {discipline.title}
              </h2>
            </div>
            <p style={{ color: theme.textSecondary }} className="text-xs font-serif">
              {discipline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1: Chintan */}
            <div style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }} className="p-5 rounded-2xl border space-y-2">
              <div style={{ color: theme.sacredMaroon }} className="flex items-center gap-2 font-bold text-sm">
                <Sun className="w-4 h-4" style={{ color: theme.accentGold }} />
                <span>
                  {isPb ? '੧. ਮਨ ਤੇ ਵਿਚਾਰ ਸੰਜਮ' : isEn ? '1. Mind & Thought Discipline' : '१. मन एवं विचार संयम'}
                </span>
              </div>
              <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif leading-relaxed">
                {discipline.vicharPoint}
              </p>
            </div>

            {/* Step 2: Acharan */}
            <div style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }} className="p-5 rounded-2xl border space-y-2">
              <div style={{ color: isDarkMode ? '#6EE7B7' : '#065F46' }} className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>
                  {isPb ? '੨. ਬਾਣੀ ਤੇ ਸੱਚਾ ਆਚਰਣ' : isEn ? '2. Speech & Truthful Conduct' : '२. वाणी एवं सत्य आचरण'}
                </span>
              </div>
              <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif leading-relaxed">
                {discipline.aacharanPoint}
              </p>
            </div>

            {/* Step 3: Samkalp */}
            <div style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }} className="p-5 rounded-2xl border space-y-2">
              <div style={{ color: theme.accentGold }} className="flex items-center gap-2 font-bold text-sm">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>
                  {isPb ? '੩. ਅੱਜ ਦਾ ਪਾਵਨ ਸੰਕਲਪ' : isEn ? "3. Today's Sacred Resolve" : '३. आज का पावन संकल्प'}
                </span>
              </div>
              <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif leading-relaxed">
                {discipline.samkalpPoint}
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border flex items-start gap-3">
            <HeartHandshake className="w-5 h-5 shrink-0 mt-0.5" style={{ color: theme.accentGold }} />
            <p style={{ color: theme.textPrimary }} className="text-xs leading-relaxed font-serif">
              {isPb ? (
                <>
                  <strong>ਸਾਧਕ ਆਚਾਰ ਸੰਹਿਤਾ:</strong> ਜਦੋਂ ਅਸੀਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਬਚਨਾਂ ਨੂੰ ਕੇਵਲ ਪੜ੍ਹਦੇ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਆਪਣੇ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਢਾਲਦੇ ਹਾਂ, ਤਾਂ ਜੀਵਨ ਦੇ ਸਾਰੇ ਤਾਪ ਅਤੇ ਭਰਮ ਮਿਟ ਜਾਂਦੇ ਹਨ।
                </>
              ) : isEn ? (
                <>
                  <strong>Seeker Code of Conduct:</strong> When we do not merely read Satguru Kabir Saheb’s sacred words, but live them in our daily actions, all inner afflictions and illusions dissolve.
                </>
              ) : (
                <>
                  <strong>साधक आचार संहिता:</strong> जब हम सतगुरु कबीर साहेब के वचनों को केवल पढ़ते नहीं, अपितु अपने दैनिक आचरण में ढालते हैं, तब जीवन के समस्त ताप और भ्रम समाप्त हो जाते हैं।
                </>
              )}
            </p>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: SHABDARTH */}
      {activeTab === 'shabdarth' && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="p-6 sm:p-8 rounded-3xl border backdrop-blur-md shadow-lg space-y-5"
        >
          <div className="flex items-center gap-2 pb-3 border-b" style={{ borderColor: theme.cardBorder }}>
            <BookOpen className="w-5 h-5" style={{ color: theme.accentGold }} />
            <h2 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-xl">
              {isPb ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪਾਵਨ ਸ਼ਬਦਾਰਥ' : isEn ? 'Sacred Vocabulary & Meanings (Shabdarth)' : 'श्री गुरु ग्रंथ साहिब जी के पावन शब्दार्थ'}
            </h2>
          </div>

          {verse.shabdarth && verse.shabdarth.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verse.shabdarth.map((item: any, idx: number) => (
                <div
                  key={idx}
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                  className="p-3.5 rounded-2xl border flex items-start justify-between gap-3 text-xs"
                >
                  <strong style={{ color: theme.sacredMaroon }} className="font-serif text-sm">
                    {item.word}
                  </strong>
                  <span style={{ color: theme.textSecondary }} className="font-serif text-right">
                    {isPb ? item.meaning?.pb : isEn ? item.meaning?.en : item.meaning?.hi}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: theme.textMuted }} className="text-xs font-serif text-center py-6">
              {isPb
                ? 'ਇਸ ਸ਼ਬਦ ਦੇ ਸਾਰੇ ਸ਼ਬਦ ਸਰਲ ਭਾਵਾਰਥ ਵਿੱਚ ਹੀ ਸਪੱਸ਼ਟ ਹਨ।'
                : isEn
                ? 'All words of this verse are already explained clearly in the spiritual essence.'
                : 'इस पद के सभी शब्द सामान्य व सरल भावार्थ में स्पष्ट हैं।'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
