import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  Share2, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Languages, 
  Scroll,
  Calendar,
  Image as ImageIcon
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

interface DailyHukamnamaCardProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenFullView: () => void;
  onOpenShare?: (text: string) => void;
  onOpenWallpaperEngine?: (hukamnamaVerse: SggsKabirVerse) => void;
}

export const DailyHukamnamaCard: React.FC<DailyHukamnamaCardProps> = ({
  language,
  onLanguageChange,
  onOpenFullView,
  onOpenShare,
  onOpenWallpaperEngine
}) => {
  const { theme } = useAppTheme();
  const [verse, setVerse] = useState<SggsKabirVerse>(() => getDailyHukamnama(new Date()));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Hydrate today's Hukamnama asynchronously & auto-update at midnight 12:00 AM
  useEffect(() => {
    let cancelled = false;
    getDailyHukamnamaAsync(new Date())
      .then((v) => {
        if (!cancelled) setVerse(v);
      })
      .catch(() => {});

    const cleanup = setupMidnightHukamnamaListener(() => {
      const today = new Date();
      setVerse(getDailyHukamnama(today));
      getDailyHukamnamaAsync(today)
        .then((v) => {
          if (!cancelled) setVerse(v);
        })
        .catch(() => {});
    });

    return () => {
      cancelled = true;
      cleanup();
      speechReciter.stop();
    };
  }, []);

  const discipline = getDailyLifeDiscipline(verse, language);

  const isPb = language === 'pb';
  const isEn = language === 'en';

  const moolLines: string[] = isPb 
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
      const textToSpeak = moolLines.join(' । ') + ' । ' + (bhavarthText || '');
      speechReciter.speak(
        textToSpeak,
        language,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
      setIsPlayingAudio(true);
    }
  };

  const handleShareClick = () => {
    sacredHaptics.lightTap();
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
    const bhavarthLabel = isPb ? 'ਭਾਵਾਰਥ:' : isEn ? 'Spiritual Essence:' : 'भावार्थ:';
    const discLabel = isPb
      ? `ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਅਨੁਸ਼ਾਸਨ:\n• ${discipline.vicharPoint}\n• ${discipline.aacharanPoint}`
      : isEn
      ? `Daily Life Discipline:\n• ${discipline.vicharPoint}\n• ${discipline.aacharanPoint}`
      : `दैनिक जीवन में अनुशासन:\n• ${discipline.vicharPoint}\n• ${discipline.aacharanPoint}`;
    const footer = isPb
      ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।'
      : isEn
      ? '|| Saheb Bandagi Saheb ||'
      : '।। साहेब बंदगी साहेब ।।';

    const shareText =
      `${header}\n${sub}\n\n` +
      `${verse.moolGurmukhi.join('\n')}\n\n` +
      `${verse.moolDevanagari.join('\n')}\n\n` +
      `${bhavarthLabel}\n${bhavarthText}\n\n` +
      `${discLabel}\n\n` +
      `${footer}\nSaheb World`;

    if (onOpenShare) {
      onOpenShare(shareText);
    } else if (navigator.share) {
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
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.accentGold,
        color: theme.textPrimary,
      }}
      className="relative rounded-3xl overflow-hidden border shadow-xl p-5 sm:p-7 backdrop-blur-md transition-colors duration-300"
    >
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-radial from-amber-400/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-radial from-orange-400/10 via-transparent to-transparent pointer-events-none" />

      {/* TOP BAR: Title Badge, SGGS Ang, and Quick Language Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b" style={{ borderColor: theme.cardBorder }}>
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: theme.stepActiveBg, color: theme.accentGold, borderColor: theme.cardBorder }}
            className="p-2 rounded-2xl border"
          >
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm sm:text-base">
                {isPb ? '☬ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ' : isEn ? '☬ Daily Hukamnama' : '☬ पावन दैनिक हुकमनामा'}
              </span>
              <span
                style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon, borderColor: theme.cardBorder }}
                className="text-[10px] px-2 py-0.5 rounded-full font-bold border"
              >
                {isPb ? '12:00 AM ਸਵੈ-ਪਰਿਵਰਤਨ' : isEn ? 'Auto-updates 12:00 AM' : '12:00 AM स्वतः परिवर्तन'}
              </span>
            </div>
            <p style={{ color: theme.textSecondary }} className="text-xs font-serif">
              {isPb ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ' : isEn ? 'Sri Guru Granth Sahib Ji' : 'श्री गुरु ग्रंथ साहिब जी'} •{' '}
              {isPb ? 'ਅੰਗ' : isEn ? 'Ang' : 'अंग'} {verse.ang} {verse.raag ? `(${verse.raag})` : ''}
            </p>
          </div>
        </div>

        {/* Global Language Pill Switcher */}
        <div
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="flex items-center gap-1 p-1 rounded-2xl border"
        >
          <Languages className="w-3.5 h-3.5 ml-1.5 mr-0.5" style={{ color: theme.accentGold }} />
          {[
            { code: 'hi', label: 'हिंदी' },
            { code: 'pb', label: 'ਪੰਜਾਬੀ' },
            { code: 'en', label: 'EN' }
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
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isSel ? 'shadow-xs' : 'hover:bg-amber-500/15'
                }`}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SACRED MOOL VANI */}
      <div className="py-5 space-y-3">
        <div
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="p-4 rounded-2xl border shadow-inner"
        >
          <div className="space-y-1.5 text-center">
            {moolLines.map((line: string, idx: number) => (
              <p
                key={idx}
                style={{ color: theme.sacredMaroon }}
                className="font-serif font-black text-base sm:text-xl leading-relaxed tracking-normal"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Secondary script if Devanagari or Gurmukhi is primary */}
          {language !== 'pb' && verse.moolGurmukhi && (
            <div className="mt-2.5 pt-2 border-t text-center" style={{ borderColor: theme.cardBorder }}>
              <p style={{ color: theme.textSecondary }} className="text-xs font-serif italic">
                {verse.moolGurmukhi.slice(0, 2).join(' । ')}
              </p>
            </div>
          )}
        </div>

        {/* BHAVARTH (DEEP SPIRITUAL ESSENCE) */}
        <div className="space-y-1">
          <span style={{ color: theme.accentGold }} className="text-[11px] font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isPb ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ (Spiritual Essence):' : isEn ? 'Deep Spiritual Meaning:' : 'गहन आध्यात्मिक भावार्थ:'}</span>
          </span>
          <p
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            className="text-xs sm:text-sm leading-relaxed font-serif p-3 rounded-xl border"
          >
            {bhavarthText}
          </p>
        </div>

        {/* DAINIK JEEVAN ANUSHASAN (DAILY LIFE DISCIPLINE TEASER) */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="p-3.5 rounded-2xl border space-y-2"
        >
          <div className="flex items-center justify-between gap-2">
            <span style={{ color: theme.sacredMaroon }} className="font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{discipline.title}</span>
            </span>
            <span style={{ color: theme.accentGold }} className="text-[10px] font-bold">
              {isPb ? 'ਅੱਜ ਦਾ ਪਾਵਨ ਸੰਕਲਪ' : isEn ? "Today's Sacred Resolve" : 'आज का पावन संकल्प'}
            </span>
          </div>

          <p style={{ color: theme.textSecondary }} className="text-xs leading-normal line-clamp-2">
            • <strong>{isPb ? 'ਆਚਰਣ' : isEn ? 'Conduct' : 'आचरण'}:</strong> {discipline.aacharanPoint}
          </p>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t" style={{ borderColor: theme.cardBorder }}>
        <div className="flex items-center gap-2">
          {/* Audio Recitation */}
          <button
            type="button"
            onClick={handleToggleAudio}
            style={
              isPlayingAudio
                ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText, borderColor: theme.accentGold }
                : { backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }
            }
            className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
              isPlayingAudio ? 'shadow-md animate-pulse' : 'hover:opacity-90'
            }`}
            title={isPb ? 'ਪਾਵਨ ਬਾਣੀ ਸੁਣੋ' : isEn ? 'Listen to Sacred Vani' : 'पावन वाणी श्रवण करें'}
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {isPlayingAudio
                ? isPb
                  ? 'ਰੋਕੋ'
                  : isEn
                  ? 'Stop'
                  : 'रोकें'
                : isPb
                ? 'ਸੁਣੋ'
                : isEn
                ? 'Listen'
                : 'श्रवण'}
            </span>
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShareClick}
            style={{ backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }}
            className="p-2.5 rounded-xl border hover:opacity-90 transition cursor-pointer flex items-center gap-1 text-xs font-bold"
            title={isPb ? 'ਹੁਕਮਨਾਮਾ ਸਾਂਝਾ ਕਰੋ' : isEn ? 'Share Hukamnama' : 'हुकमनामा साझा करें'}
          >
            <Share2 className="w-4 h-4" />
            {shareCopied && (
              <span>{isPb ? '✓ ਕਾਪੀ' : isEn ? '✓ Copied' : '✓ कॉपी'}</span>
            )}
          </button>

          {onOpenWallpaperEngine && (
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onOpenWallpaperEngine(verse);
              }}
              style={{ backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }}
              className="p-2.5 rounded-xl border hover:opacity-90 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title={isPb ? 'ਹੁਕਮਨਾਮਾ ਵਾਲਪੇਪਰ ਬਣਾਓ' : isEn ? 'Create Hukamnama Wallpaper' : 'हुकमनामा वॉलपेपर बनाएं'}
            >
              <ImageIcon className="w-4 h-4" style={{ color: theme.accentGold }} />
              <span className="hidden sm:inline">{isPb ? 'ਵਾਲਪੇਪਰ' : isEn ? 'Wallpaper' : 'वॉलपेपर'}</span>
            </button>
          )}
        </div>

        {/* Full View Button */}
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onOpenFullView();
          }}
          style={{
            backgroundColor: theme.buttonPrimaryBg,
            color: theme.buttonPrimaryText,
          }}
          className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:opacity-90 transition flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{isPb ? 'ਪੂਰਨ ਹੁਕਮਨਾਮਾ ਤੇ ਜੀਵਨ ਅਨੁਸ਼ਾਸਨ' : isEn ? 'Explore Full Sanctuary & Discipline' : 'पूर्ण हुकमनामा व दैनिक जीवन अनुशासन'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
