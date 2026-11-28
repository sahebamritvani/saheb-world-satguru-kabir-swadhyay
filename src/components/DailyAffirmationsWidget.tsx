import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCw,
  Copy,
  Check,
  Share2,
  Volume2,
  VolumeX,
  Feather,
  Sun,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { DailyAffirmation, getDailyAffirmation, getRandomAffirmation } from '../data/dailyAffirmations';
import { sacredHaptics } from '../services/haptics';
import { speechReciter } from '../services/audioDhun';

interface DailyAffirmationsWidgetProps {
  language: Language;
  onOpenDiaryWithVerse?: (text: string, sakhiNumber?: number) => void;
}

interface DailyVowProgress {
  completedDates: string[];
  streak: number;
  lastCompletedDate: string;
}

const VOW_STORAGE_KEY = 'sahebworld_daily_affirmation_vow_v1';

function getLocalDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getYesterdayDateKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateKey(d);
}

function computeStreakFromDates(dates: string[]): number {
  if (!dates.length) return 0;
  const set = new Set(dates);
  const todayKey = getLocalDateKey();
  const yesterdayKey = getYesterdayDateKey();

  const cursor = new Date();
  if (!set.has(todayKey)) {
    if (!set.has(yesterdayKey)) return 0;
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (set.has(getLocalDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function loadVowProgress(): DailyVowProgress {
  try {
    const raw = localStorage.getItem(VOW_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<DailyVowProgress>;
      const dates = Array.isArray(parsed.completedDates) ? parsed.completedDates : [];
      return {
        completedDates: dates,
        streak: computeStreakFromDates(dates),
        lastCompletedDate: parsed.lastCompletedDate || dates[dates.length - 1] || '',
      };
    }
  } catch {
    // ignore storage read error
  }
  return { completedDates: [], streak: 0, lastCompletedDate: '' };
}

export const DailyAffirmationsWidget: React.FC<DailyAffirmationsWidgetProps> = ({
  language,
  onOpenDiaryWithVerse,
}) => {
  const { theme } = useAppTheme();

  const [currentAffirmation, setCurrentAffirmation] = useState<DailyAffirmation>(() =>
    getDailyAffirmation(language)
  );
  const [isCopied, setIsCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [vowProgress, setVowProgress] = useState<DailyVowProgress>(() => loadVowProgress());

  const todayKey = getLocalDateKey();
  const isCompletedToday = vowProgress.completedDates.includes(todayKey);

  useEffect(() => {
    speechReciter.stop();
    setIsPlayingAudio(false);
    return () => {
      speechReciter.stop();
    };
  }, [language]);

  const handleToggleDailyVow = () => {
    sacredHaptics.lightTap();
    setVowProgress((prev) => {
      const exists = prev.completedDates.includes(todayKey);
      const nextDates = exists
        ? prev.completedDates.filter((d) => d !== todayKey)
        : Array.from(new Set([...prev.completedDates, todayKey])).sort();
      const nextStreak = computeStreakFromDates(nextDates);
      const nextState: DailyVowProgress = {
        completedDates: nextDates,
        streak: nextStreak,
        lastCompletedDate: nextDates[nextDates.length - 1] || '',
      };
      try {
        localStorage.setItem(VOW_STORAGE_KEY, JSON.stringify(nextState));
      } catch {
        // ignore storage quota error
      }
      if (!exists) {
        sacredHaptics.successVibration();
      }
      return nextState;
    });
  };

  const handleShuffle = () => {
    sacredHaptics.lightTap();
    setIsShuffling(true);
    speechReciter.stop();
    setIsPlayingAudio(false);

    setTimeout(() => {
      const nextAffirmation = getRandomAffirmation(currentAffirmation.id);
      setCurrentAffirmation(nextAffirmation);
      setIsShuffling(false);
    }, 180);
  };

  const categoryLabel =
    currentAffirmation.category?.[language] ||
    currentAffirmation.category?.hi ||
    (language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਪਦੇਸ਼'
      : language === 'en'
      ? 'Satguru Kabir Teachings'
      : 'सतगुरु कबीर उपदेश');

  const getAffirmationShareText = () => {
    const text = currentAffirmation.text[language] || currentAffirmation.text.hi;
    const explanation =
      currentAffirmation.explanation?.[language] || currentAffirmation.explanation?.hi || '';
    const header = SACRED_BRANDING.header[language];
    const label =
      language === 'pb'
        ? 'ਦੈਨਿਕ ਪਾਵਨ ਸੰਕਲਪ'
        : language === 'en'
        ? 'Daily Sacred Affirmation'
        : 'दैनिक पावन संकल्प';
    const bhavarthLabel =
      language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Essence:' : 'भावार्थ:';
    const courtesy =
      language === 'pb'
        ? 'ਸੌਜਨਯ: ਸਾਹਿਬ ਵਰਲਡ (Saheb World)'
        : language === 'en'
        ? 'Courtesy: Saheb World'
        : 'सौजन्य: साहेब वर्ल्ड (Saheb World)';
    const footer =
      language === 'pb'
        ? '।। ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ ।। 🙏'
        : language === 'en'
        ? '|| Saheb Bandagi Saheb || 🙏'
        : '।। साहेब बंदगी साहेब ।। 🙏';

    return (
      `${header}\n\n` +
      `✨ ${label} • ${categoryLabel}\n` +
      `"${text}"\n\n` +
      (explanation ? `🌿 ${bhavarthLabel} ${explanation}\n\n` : '') +
      `${courtesy}\n` +
      `${footer}`
    );
  };

  const handleCopy = async () => {
    sacredHaptics.lightTap();
    const textToCopy = getAffirmationShareText();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setIsCopied(true);
      sacredHaptics.successVibration();
      setTimeout(() => setIsCopied(false), 2200);
    } catch (err) {
      console.warn('Affirmation copy failed:', err);
    }
  };

  const handleShare = async () => {
    sacredHaptics.lightTap();
    const textToShare = getAffirmationShareText();
    const title =
      language === 'pb'
        ? 'ਸਤਿ ਬਚਨ ਪਾਵਨ ਸੰਕਲਪ - ਸਾਹੇਬ ਵਰਲਡ'
        : language === 'en'
        ? 'Daily Sacred Affirmation - Saheb World'
        : 'दैनिक पावन संकल्प - साहेब वर्ल्ड';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: textToShare,
          url: window.location.origin,
        });
        sacredHaptics.successVibration();
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
      setShareToast(
        language === 'pb'
          ? 'ਸੰਕਲਪ ਕਾਪੀ ਹੋ ਗਿਆ ਹੈ, ਸਾਂਝਾ ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ।'
          : language === 'en'
          ? 'Affirmation copied to clipboard!'
          : 'संकल्प कॉपी हो गया है, शेयर करने के लिए तैयार है।'
      );
      setTimeout(() => setShareToast(null), 3000);
    }
  };

  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      speechReciter.stop();
      setIsPlayingAudio(false);
    } else {
      const textToSpeak = currentAffirmation.text[language] || currentAffirmation.text.hi;
      setIsPlayingAudio(true);
      speechReciter.speak(textToSpeak, language, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleReflectInJournal = () => {
    sacredHaptics.lightTap();
    if (onOpenDiaryWithVerse) {
      const text = currentAffirmation.text[language] || currentAffirmation.text.hi;
      onOpenDiaryWithVerse(`दैनिक संकल्प: "${text}"\n\nआत्म-चिंतन: `);
    }
  };

  return (
    <motion.div
      id="daily-affirmations-widget"
      initial={{ opacity: 0, y: 22, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-4 relative overflow-hidden transition-all group"
    >
      {/* Decorative Aura */}
      <div
        className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ backgroundColor: theme.accentGold }}
      />
      <div
        className="absolute -left-10 -top-10 w-44 h-44 rounded-full blur-2xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#10B981' }}
      />

      {/* Widget Header */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 border-b pb-3.5"
        style={{ borderColor: theme.cardBorder }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="w-10 h-10 rounded-2xl border flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs shrink-0"
          >
            <Sun className="w-5 h-5 animate-pulse text-amber-600" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-black text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
                {language === 'pb'
                  ? 'ਨਿਤਨੇਮ ਸਤਿ ਬਚਨ ਸੰਕਲਪ'
                  : language === 'en'
                  ? 'Daily Sacred Affirmations'
                  : 'नित्य पावन संकल्प एवं आत्म-बल'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                {language === 'pb' ? 'ਸਤਿ ਬਚਨ' : language === 'en' ? 'Affirmation' : 'सत्य वचन'}
              </span>
            </div>
            <p className="text-xs font-serif font-bold truncate" style={{ color: theme.textSecondary }}>
              {categoryLabel}
            </p>
          </div>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Listen Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            style={{
              backgroundColor: isPlayingAudio ? theme.buttonPrimaryBg : theme.bgSecondary,
              borderColor: isPlayingAudio ? theme.accentGold : theme.cardBorder,
              color: isPlayingAudio ? theme.buttonPrimaryText : theme.textPrimary,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={isPlayingAudio ? 'Stop Audio' : 'Listen Affirmation'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4 animate-pulse" />
                <span className="text-[11px] hidden sm:inline">
                  {language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें'}
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] hidden sm:inline">
                  {language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'सुनें'}
                </span>
              </>
            )}
          </button>

          {/* Shuffle Button */}
          <button
            type="button"
            onClick={handleShuffle}
            disabled={isShuffling}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.cardBorder,
              color: theme.sacredMaroon,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
            title={
              language === 'pb'
                ? 'ਹੋਰ ਸੰਕਲਪ ਦੇਖੋ'
                : language === 'en'
                ? 'Shuffle Affirmation'
                : 'नया संकल्प देखें'
            }
          >
            <RotateCw className={`w-4 h-4 text-amber-600 ${isShuffling ? 'animate-spin' : ''}`} />
            <span className="text-[11px] hidden sm:inline">
              {language === 'pb' ? 'ਬਦਲੋ' : language === 'en' ? 'Shuffle' : 'बदलें'}
            </span>
          </button>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            style={{
              backgroundColor: isCopied ? '#10B981' : theme.bgSecondary,
              borderColor: isCopied ? '#10B981' : theme.cardBorder,
              color: isCopied ? '#FFFFFF' : theme.textPrimary,
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={
              language === 'pb'
                ? 'ਕਾਪੀ ਕਰੋ'
                : language === 'en'
                ? 'Copy Affirmation'
                : 'कॉपी करें'
            }
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-[11px]">
                  {language === 'pb' ? 'ਕਾਪੀ ਹੋ ਗਿਆ' : language === 'en' ? 'Copied' : 'कॉपी हुआ'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] hidden sm:inline">
                  {language === 'pb' ? 'ਕਾਪੀ' : language === 'en' ? 'Copy' : 'कॉपी'}
                </span>
              </>
            )}
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            style={{
              backgroundColor: theme.buttonPrimaryBg,
              color: theme.buttonPrimaryText,
              borderColor: theme.accentGold,
            }}
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
            title={
              language === 'pb'
                ? 'ਸਾਂਝਾ ਕਰੋ'
                : language === 'en'
                ? 'Share Affirmation'
                : 'शेयर करें'
            }
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[11px]">
              {language === 'pb' ? 'ਸ਼ੇਅਰ' : language === 'en' ? 'Share' : 'शेयर'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Affirmation Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAffirmation.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
          className="rounded-2xl border p-4 sm:p-6 space-y-3.5 text-center relative"
        >
          <span
            style={{ color: theme.accentGold }}
            className="text-[11px] uppercase tracking-widest font-black block font-serif"
          >
            {language === 'pb'
              ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਪਾਵਨ ਸੰਕਲਪ ।।'
              : language === 'en'
              ? '|| Satguru Kabir Sacred Affirmation ||'
              : '।। सतगुरु कबीर पावन संकल्प ।।'}
          </span>

          <p
            style={{ color: theme.sacredMaroon }}
            className="font-serif font-black text-base sm:text-xl md:text-2xl leading-relaxed tracking-wide"
          >
            "{currentAffirmation.text[language] || currentAffirmation.text.hi}"
          </p>

          {currentAffirmation.explanation && (
            <div style={{ borderColor: theme.cardBorder }} className="pt-3 mt-3 border-t text-left">
              <div className="flex items-start gap-2">
                <span className="text-xs font-black text-emerald-600 shrink-0 mt-0.5">
                  {language === 'pb'
                    ? 'ਆਤਮਿਕ ਸੇਧ:'
                    : language === 'en'
                    ? 'Spiritual Insight:'
                    : 'आत्मिक प्रेरणा:'}
                </span>
                <p
                  className="text-xs sm:text-sm leading-relaxed opacity-90 font-serif"
                  style={{ color: theme.textSecondary }}
                >
                  {currentAffirmation.explanation[language] || currentAffirmation.explanation.hi}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Daily Vow Completion Check-Button & Streak Counter */}
      <div
        style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
        className="flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl border"
      >
        <button
          id="daily-vow-complete-btn"
          type="button"
          onClick={handleToggleDailyVow}
          style={{
            backgroundColor: isCompletedToday ? '#059669' : theme.buttonPrimaryBg,
            color: '#FFFFFF',
            borderColor: isCompletedToday ? '#10B981' : theme.accentGold,
          }}
          className="px-3.5 py-2 rounded-xl border text-xs font-bold font-serif flex items-center gap-1.5 transition hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>
            {isCompletedToday
              ? language === 'pb'
                ? '✓ ਅੱਜ ਦਾ ਸੰਕਲਪ ਪੂਰਾ ਹੋਇਆ'
                : language === 'en'
                ? '✓ Today’s Vow Completed'
                : '✓ आज का संकल्प पूर्ण हुआ'
              : language === 'pb'
              ? 'ਅੱਜ ਦਾ ਸੰਕਲਪ ਪੂਰਾ ✓ (Mark Completed)'
              : language === 'en'
              ? 'Mark Today’s Vow Completed ✓'
              : 'आज का संकल्प पूर्ण ✓ (Mark Completed)'}
          </span>
        </button>

        <div className="flex items-center gap-2 text-xs font-serif font-bold">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {language === 'pb'
                ? `ਲਗਾਤਾਰ: ${vowProgress.streak} ਦਿਨ`
                : language === 'en'
                ? `Streak: ${vowProgress.streak}d`
                : `संकल्प क्रम: ${vowProgress.streak} दिन`}
            </span>
          </span>
        </div>
      </div>

      {/* Footer Reflection Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="opacity-75 font-serif" style={{ color: theme.textSecondary }}>
            {language === 'pb'
              ? 'ਹਰ ਸੁਆਸ ਨਾਲ ਸ਼ਾਂਤੀ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਅਹਿਸਾਸ ਕਰੋ'
              : language === 'en'
              ? 'Affirm divine peace with each conscious breath'
              : 'प्रत्येक श्वास के साथ सत्य व शांति का अनुभव करें'}
          </span>
        </div>

        {onOpenDiaryWithVerse && (
          <button
            type="button"
            onClick={handleReflectInJournal}
            style={{ color: theme.accentGold }}
            className="font-bold flex items-center gap-1.5 hover:underline cursor-pointer"
          >
            <Feather className="w-3.5 h-3.5" />
            <span>
              {language === 'pb'
                ? 'ਡਾਇਰੀ ਵਿੱਚ ਦਰਜ ਕਰੋ'
                : language === 'en'
                ? 'Reflect in Journal'
                : 'डायरी में चिंतन लिखें'}
            </span>
          </button>
        )}
      </div>

      {/* Share Toast */}
      {shareToast && (
        <div
          style={{
            backgroundColor: theme.stepActiveBg,
            borderColor: theme.accentGold,
            color: theme.sacredMaroon,
          }}
          className="p-2.5 rounded-xl border text-center text-xs font-bold animate-fadeIn shadow-md"
        >
          {shareToast}
        </div>
      )}
    </motion.div>
  );
};
