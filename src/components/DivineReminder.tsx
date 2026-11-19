import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bell, ArrowRight } from 'lucide-react';
import type { GranthVerse } from '../data/granths/granthTypes';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';

interface DivineReminderProps {
  language: Language;
  onOpenSwadhyay?: (verseId: string) => void;
}

export const DivineReminder: React.FC<DivineReminderProps> = ({ language, onOpenSwadhyay }) => {
  const { theme } = useAppTheme();
  const [currentVerse, setCurrentVerse] = useState<GranthVerse | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let versesCache: GranthVerse[] | null = null;
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const triggerReminder = async () => {
      try {
        if (!versesCache) {
          const mod = await import('../data/granths/sakhiSangrahAng15');
          versesCache = mod.SAKHI_SANGRAH_ANG_15_VERSES;
        }
        if (cancelled || !versesCache || versesCache.length === 0) return;
        const randomIndex = Math.floor(Math.random() * versesCache.length);
        setCurrentVerse(versesCache[randomIndex]);
        setIsVisible(true);
        if (hideTimeout) clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          if (!cancelled) setIsVisible(false);
        }, 8000);
      } catch {}
    };

    const interval = setInterval(triggerReminder, 45000);
    const initialTimeout = setTimeout(triggerReminder, 5000);

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(initialTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  if (!currentVerse) return null;

  const verse = currentVerse;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-4 z-40 max-w-[280px] sm:max-w-xs pointer-events-auto"
        >
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
              boxShadow: `0 10px 30px -5px rgba(217, 119, 6, 0.2)`,
            }}
            className="rounded-2xl border-2 p-4 space-y-3 relative overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full -mr-8 -mt-8 blur-2xl" />
            
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-amber-600 animate-bounce" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-400 font-serif flex-grow">
                {language === 'hi' ? 'दिव्य स्मरण' : language === 'pb' ? 'ਦਿਵਿਆ ਯਾਦ' : 'Divine Reminder'}
              </span>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-serif font-black leading-relaxed italic" style={{ color: theme.textPrimary }}>
                "{verse.lines[language][0]}<br />
                {verse.lines[language][1]}"
              </p>
              <p className="text-[10px] font-serif opacity-70 italic line-clamp-2" style={{ color: theme.textSecondary }}>
                {verse.bhavarth?.[language] || ''}
              </p>
            </div>

            <button
              onClick={() => {
                setIsVisible(false);
                if (onOpenSwadhyay) onOpenSwadhyay(String(verse.id));
              }}
              style={{ color: theme.sacredMaroon }}
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <span>{language === 'hi' ? 'स्वाध्याय करें' : language === 'pb' ? 'ਸਵਾਧਿਆਏ ਕਰੋ' : 'Start Swadhyay'}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
