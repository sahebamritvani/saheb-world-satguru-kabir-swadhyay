import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Flame, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  RotateCcw, 
  Award, 
  Clock, 
  BookOpen, 
  Volume2, 
  ArrowLeft,
  Plus,
  Minus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { getTodayDateKey, SADHANA_GOAL_EVENT, subscribeToHaziri } from '../services/haziriStore';

interface DailySadhanaGoalProps {
  language: Language;
  onNavigateToSwadhyay?: () => void;
  onNavigateToTimer?: () => void;
  onNavigateToMantra?: () => void;
  onClose?: () => void;
}

interface SadhanaGoalsConfig {
  sakhisTarget: number; // e.g. 3
  dhyanMinutesTarget: number; // e.g. 20
  mantraTarget: number; // e.g. 108
  nitnemCompleted: boolean;
}

interface TodayProgress {
  sakhisDone: number;
  dhyanMinutesDone: number;
  mantraDone: number;
  nitnemDone: boolean;
}

export const DailySadhanaGoal: React.FC<DailySadhanaGoalProps> = ({
  language,
  onNavigateToSwadhyay,
  onNavigateToTimer,
  onNavigateToMantra,
  onClose
}) => {
  const { theme } = useAppTheme();
  const isHi = language === 'hi';
  const isPb = language === 'pb';

  const todayKey = getTodayDateKey();

  // User configured daily targets
  const [goals, setGoals] = useState<SadhanaGoalsConfig>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_daily_sadhana_goals');
        if (saved) return JSON.parse(saved);
      }
    } catch {}
    return {
      sakhisTarget: 2,
      dhyanMinutesTarget: 20,
      mantraTarget: 108,
      nitnemCompleted: true,
    };
  });

  // Daily progress for today
  const [progress, setProgress] = useState<TodayProgress>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(`sahebworld_sadhana_progress_${todayKey}`);
        if (saved) return JSON.parse(saved);
      }
    } catch {}
    return {
      sakhisDone: 1,
      dhyanMinutesDone: 10,
      mantraDone: 108,
      nitnemDone: false,
    };
  });

  // Streak counter
  const [streakDays, setStreakDays] = useState<number>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_sadhana_streak');
        return saved ? parseInt(saved, 10) : 5;
      }
    } catch {}
    return 5;
  });

  const [hasCelebratedToday, setHasCelebratedToday] = useState(false);

  useEffect(() => {
    const syncFromExternal = () => {
      try {
        const saved = localStorage.getItem(`sahebworld_sadhana_progress_${todayKey}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          setProgress((prev) => ({
            ...prev,
            ...parsed,
          }));
        }
      } catch {}
    };

    window.addEventListener(SADHANA_GOAL_EVENT, syncFromExternal);
    window.addEventListener('storage', syncFromExternal);
    const unsubHaziri = subscribeToHaziri((hz) => {
      if (hz.isTodayMarked) {
        syncFromExternal();
      }
    });
    return () => {
      window.removeEventListener(SADHANA_GOAL_EVENT, syncFromExternal);
      window.removeEventListener('storage', syncFromExternal);
      unsubHaziri();
    };
  }, [todayKey]);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('sahebworld_daily_sadhana_goals', JSON.stringify(goals));
      }
    } catch {}
  }, [goals]);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`sahebworld_sadhana_progress_${todayKey}`, JSON.stringify(progress));
      }
    } catch {}
  }, [progress, todayKey]);

  // Calculate overall percentage
  const sakhiPercent = Math.min(100, Math.round((progress.sakhisDone / (goals.sakhisTarget || 1)) * 100));
  const dhyanPercent = Math.min(100, Math.round((progress.dhyanMinutesDone / (goals.dhyanMinutesTarget || 1)) * 100));
  const mantraPercent = Math.min(100, Math.round((progress.mantraDone / (goals.mantraTarget || 1)) * 100));
  const nitnemPercent = progress.nitnemDone ? 100 : 0;

  const totalPercent = Math.round((sakhiPercent + dhyanPercent + mantraPercent + nitnemPercent) / 4);

  // Trigger celebration on 100% completion
  useEffect(() => {
    if (totalPercent >= 100 && !hasCelebratedToday) {
      setHasCelebratedToday(true);
      try {
        satyanaamAudio.ringSatyanaamTripleChime();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [totalPercent, hasCelebratedToday]);

  const updateProgress = (key: keyof TodayProgress, delta: number | boolean) => {
    sacredHaptics.lightTap();
    setProgress(prev => {
      if (typeof delta === 'boolean') {
        return { ...prev, [key]: delta };
      }
      const current = prev[key] as number;
      const nextVal = Math.max(0, current + delta);
      return { ...prev, [key]: nextVal };
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      {/* Main Header & Streak */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
            <Target className="w-6 h-6 text-amber-600" />
            <span>{isHi ? 'दैनिक साधना लक्ष्य' : isPb ? 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟੀਚੇ' : 'Daily Sadhana Goals'}</span>
          </h2>
          <p className="text-xs opacity-75" style={{ color: theme.textSecondary }}>
            {isHi
              ? 'स्वाध्याय, ध्यान, सुमिरन व नित्यम का दैनिक संकल्प एवं प्रगति'
              : isPb
              ? 'ਸਵਾਧਿਆਏ, ਧਿਆਨ, ਸਿਮਰਨ ਤੇ ਨਿਤਨੇਮ ਦਾ ਰੋਜ਼ਾਨਾ ਸੰਕਲਪ ਅਤੇ ਪ੍ਰਗਤੀ'
              : 'Track your daily devotional commitment and spiritual discipline'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Streak Badge */}
          <div className="px-3.5 py-1.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center gap-1.5 shadow-xs">
            <Flame className="w-4 h-4 text-orange-600 animate-bounce" />
            <span className="font-bold text-xs text-amber-900 dark:text-amber-200">
              {streakDays} {isHi ? 'दिन निरंतर साधना' : isPb ? 'ਦਿਨ ਨਿਰੰਤਰ ਸਾਧਨਾ' : 'Days Streak'}
            </span>
          </div>

        </div>
      </div>

      {/* Overall Progress Hero Card */}
      <div
        className="p-6 rounded-3xl border shadow-xl relative overflow-hidden space-y-4"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              {isHi ? 'आज की साधना पूर्णता' : isPb ? 'ਅੱਜ ਦੀ ਸਾਧਨਾ ਸੰਪੂਰਨਤਾ' : 'Today’s Sadhana Progress'}
            </span>
            <div className="text-3xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {totalPercent}% {totalPercent >= 100 ? (isHi ? '👑 पूर्णम्!' : isPb ? '👑 ਸੰਪੂਰਨ!' : '👑 Complete!') : isHi ? 'संपन्न' : isPb ? 'ਸੰਪੰਨ' : 'Complete'}
            </div>
          </div>

          <div className="w-16 h-16 rounded-full border-4 border-amber-500/30 flex items-center justify-center font-bold font-mono text-base shadow-inner text-amber-800 dark:text-amber-200 bg-amber-500/10">
            {totalPercent}%
          </div>
        </div>

        {/* Multi-layered progress bar */}
        <div className="w-full h-3 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              width: `${totalPercent}%`,
              backgroundColor: totalPercent >= 100 ? '#16A34A' : theme.sacredMaroon 
            }}
          />
        </div>

        {totalPercent >= 100 && (
          <div className="p-2.5 rounded-xl bg-green-500/15 border border-green-500/30 text-green-900 dark:text-green-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 animate-fadeIn">
            <Award className="w-4 h-4 text-green-600" />
            <span>
              {isHi
                ? 'सतगुरु आशीर्वाद: आज का पावन साधना संकल्प पूर्ण हुआ!'
                : isPb
                ? 'ਸਤਿਗੁਰੂ ਅਸ਼ੀਰਵਾਦ: ਅੱਜ ਦਾ ਪਾਵਨ ਸਾਧਨਾ ਸੰਕਲਪ ਪੂਰਾ ਹੋਇਆ!'
                : 'Satguru Blessings: Daily Sadhana goals fully achieved!'}
            </span>
          </div>
        )}
      </div>

      {/* The 4 Core Sadhana Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pillar 1: Sakhis Swadhyay */}
        <div 
          className="p-5 rounded-2xl border space-y-3"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif" style={{ color: theme.textPrimary }}>
                  {isHi ? 'पावन साखी स्वाध्याय' : isPb ? 'ਪਾਵਨ ਸਾਖੀ ਸਵਾਧਿਆਏ' : 'Sakhi Swadhyay'}
                </h4>
                <span className="text-[11px] opacity-70">
                  {progress.sakhisDone} / {goals.sakhisTarget} {isHi ? 'साखियाँ' : isPb ? 'ਸਾਖੀਆਂ' : 'Sakhis'}
                </span>
              </div>
            </div>
            <span className="font-bold font-mono text-xs text-amber-700">{sakhiPercent}%</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => updateProgress('sakhisDone', -1)}
                className="w-8 h-8 rounded-lg border flex items-center justify-center hover:bg-black/5 cursor-pointer text-xs"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => updateProgress('sakhisDone', 1)}
                className="w-8 h-8 rounded-lg border flex items-center justify-center hover:bg-black/5 cursor-pointer text-xs font-bold"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {onNavigateToSwadhyay && (
              <button
                type="button"
                onClick={onNavigateToSwadhyay}
                className="px-3 py-1.5 rounded-lg border border-amber-500/40 text-xs font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-500/10 cursor-pointer"
              >
                {isHi ? 'स्वाध्याय करें' : isPb ? 'ਸਵਾਧਿਆਏ ਕਰੋ' : 'Study'}
              </button>
            )}
          </div>
        </div>

        {/* Pillar 2: Amritvela Dhyan (Meditation) */}
        <div 
          className="p-5 rounded-2xl border space-y-3"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif" style={{ color: theme.textPrimary }}>
                  {isHi ? 'अमृतवेला ध्यान व मौन' : isPb ? 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਧਿਆਨ ਤੇ ਮੌਨ' : 'Meditation & Dhyan'}
                </h4>
                <span className="text-[11px] opacity-70">
                  {progress.dhyanMinutesDone} / {goals.dhyanMinutesTarget} {isHi ? 'मिनट' : isPb ? 'ਮਿੰਟ' : 'Mins'}
                </span>
              </div>
            </div>
            <span className="font-bold font-mono text-xs text-orange-700">{dhyanPercent}%</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => updateProgress('dhyanMinutesDone', -5)}
                className="px-2 py-1 rounded-lg border text-xs hover:bg-black/5 cursor-pointer"
              >
                -5m
              </button>
              <button
                type="button"
                onClick={() => updateProgress('dhyanMinutesDone', 5)}
                className="px-2 py-1 rounded-lg border text-xs font-bold hover:bg-black/5 cursor-pointer"
              >
                +5m
              </button>
            </div>

            {onNavigateToTimer && (
              <button
                type="button"
                onClick={onNavigateToTimer}
                className="px-3 py-1.5 rounded-lg border border-orange-500/40 text-xs font-bold text-orange-800 dark:text-orange-200 hover:bg-orange-500/10 cursor-pointer"
              >
                {isHi ? 'टाइमर खोलें' : isPb ? 'ਟਾਈਮਰ ਖੋਲ੍ਹੋ' : 'Timer'}
              </button>
            )}
          </div>
        </div>

        {/* Pillar 3: Satyanaam Mantra Japa */}
        <div 
          className="p-5 rounded-2xl border space-y-3"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif" style={{ color: theme.textPrimary }}>
                  {isHi ? 'सत्यनाम जप व सुमिरन' : isPb ? 'ਸਤਯਨਾਮ ਜਪ ਤੇ ਸਿਮਰਨ' : 'Satyanaam Mantra Japa'}
                </h4>
                <span className="text-[11px] opacity-70">
                  {progress.mantraDone} / {goals.mantraTarget} {isHi ? 'बार' : isPb ? 'ਵਾਰ' : 'Reps'}
                </span>
              </div>
            </div>
            <span className="font-bold font-mono text-xs text-rose-700">{mantraPercent}%</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => updateProgress('mantraDone', 108)}
                className="px-2.5 py-1 rounded-lg border text-xs font-bold hover:bg-black/5 cursor-pointer"
              >
                +108
              </button>
              <button
                type="button"
                onClick={() => updateProgress('mantraDone', -108)}
                className="px-2 py-1 rounded-lg border text-xs hover:bg-black/5 cursor-pointer"
              >
                -108
              </button>
            </div>

            {onNavigateToMantra && (
              <button
                type="button"
                onClick={onNavigateToMantra}
                className="px-3 py-1.5 rounded-lg border border-rose-500/40 text-xs font-bold text-rose-800 dark:text-rose-200 hover:bg-rose-500/10 cursor-pointer"
              >
                {isHi ? 'जाप माला' : isPb ? 'ਜਾਪ ਮਾਲਾ' : 'Counter'}
              </button>
            )}
          </div>
        </div>

        {/* Pillar 4: Nitnem Gutka Recitation */}
        <div 
          className="p-5 rounded-2xl border space-y-3 cursor-pointer select-none"
          onClick={() => updateProgress('nitnemDone', !progress.nitnemDone)}
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
                {progress.nitnemDone ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Circle className="w-5 h-5 text-emerald-600" />}
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif" style={{ color: theme.textPrimary }}>
                  {isHi ? 'नित्यम गुटका व आरती पाठ' : isPb ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਤੇ ਆਰਤੀ ਪਾਠ' : 'Daily Nitnem & Aarti'}
                </h4>
                <span className="text-[11px] opacity-70">
                  {progress.nitnemDone
                    ? (isHi ? 'सम्पन्न ✓' : isPb ? 'ਸੰਪੰਨ ✓' : 'Completed')
                    : (isHi ? 'लंबित' : isPb ? 'ਬਾਕੀ' : 'Pending')}
                </span>
              </div>
            </div>
            <span className="font-bold font-mono text-xs text-emerald-700">{nitnemPercent}%</span>
          </div>

          <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
            <span>
              {progress.nitnemDone
                ? (isHi ? '✓ आज का पाठ सम्पन्न' : isPb ? '✓ ਅੱਜ ਦਾ ਪਾਠ ਸੰਪੰਨ' : 'Marked as read')
                : (isHi ? 'क्लिक करके पूर्ण चिह्नित करें' : isPb ? 'ਪੂਰਾ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ' : 'Click to complete')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
