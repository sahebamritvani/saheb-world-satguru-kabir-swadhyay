import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Target, Sparkles, CalendarDays } from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { Language } from '../types';

interface SahajSadhanaTrackerProps {
  language: Language;
}

export const SahajSadhanaTracker: React.FC<SahajSadhanaTrackerProps> = ({ language }) => {
  const { theme } = useAppTheme();
  const [streak, setStreak] = useState(0);
  const [hasCompletedToday, setHasCompletedToday] = useState(false);

  useEffect(() => {
    const savedStreak = localStorage.getItem('sahebworld_sahaj_streak');
    const lastCompleted = localStorage.getItem('sahebworld_sahaj_last_completed');
    const today = new Date().toISOString().slice(0, 10);
    
    if (savedStreak) setStreak(parseInt(savedStreak, 10));
    if (lastCompleted === today) setHasCompletedToday(true);
  }, []);

  const markCompleted = () => {
    const today = new Date().toISOString().slice(0, 10);
    if (!hasCompletedToday) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setHasCompletedToday(true);
      localStorage.setItem('sahebworld_sahaj_streak', newStreak.toString());
      localStorage.setItem('sahebworld_sahaj_last_completed', today);
    }
  };

  return (
    <div className="p-6 rounded-3xl border shadow-lg space-y-4" style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
          <Sparkles className="w-5 h-5 text-amber-500" />
          {language === 'pb' ? 'ਸਹਿਜ ਸਾਧਨਾ ਪ੍ਰਗਤੀ' : language === 'en' ? 'Sahaj Sadhana Progress' : 'सहज साधना प्रगति'}
        </h3>
        <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="font-bold text-xs text-amber-900 dark:text-amber-100">
            {streak} {language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Day Streak' : 'दिन'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <motion.div 
          animate={{ scale: hasCompletedToday ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl mb-2">{hasCompletedToday ? '✨' : '🧘'}</div>
          <p className="text-sm font-serif font-bold text-gray-700 dark:text-gray-200">
            {hasCompletedToday 
              ? (language === 'pb' ? 'ਅੱਜ ਦੀ ਸਾਧਨਾ ਪੂਰੀ ਹੋਈ' : language === 'en' ? 'Today\'s Sadhana Completed' : 'आज की साधना पूर्ण हुई')
              : (language === 'pb' ? 'ਅੱਜ ਦੀ ਸਾਧਨਾ ਬਾਕੀ' : language === 'en' ? 'Today\'s Sadhana Pending' : 'आज की साधना शेष')}
          </p>
        </motion.div>
      </div>

      {!hasCompletedToday && (
        <button 
          onClick={markCompleted}
          className="w-full py-3 rounded-2xl font-black font-serif cursor-pointer transition hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
        >
          {language === 'pb' ? 'ਅੱਜ ਦਾ ਅੰਮ੍ਰਿਤਵੇਲਾ ਧਿਆਨ ਪੂਰਾ ਕਰੋ' : language === 'en' ? 'Mark Amritvela Meditation Complete' : 'आज का अमृतवेला ध्यान पूर्ण करें'}
        </button>
      )}
    </div>
  );
};
