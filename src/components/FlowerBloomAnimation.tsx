import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower2, Sparkles, X, Heart } from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface FlowerBloomAnimationProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  title?: string;
  message?: string;
}

export const FlowerBloomAnimation: React.FC<FlowerBloomAnimationProps> = ({
  isOpen,
  onClose,
  language,
  title,
  message,
}) => {
  const { theme } = useAppTheme();
  const [petals, setPetals] = useState<Array<{ id: number; x: number; y: number; r: number; scale: number }>>([]);

  useEffect(() => {
    if (isOpen) {
      sacredHaptics.successVibration();
      const newPetals = Array.from({ length: 24 }, (_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 260,
        y: (Math.random() - 0.5) * 260,
        r: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
      }));
      setPetals(newPetals);
    } else {
      setPetals([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const defaultTitle = language === 'pb' 
    ? 'ਸਤਿਗੁਰੂ ਪਾਵਨ ਅਸੀਸ' 
    : language === 'en' 
    ? 'Satguru Divine Blessing' 
    : 'सतगुरु कबीर साहेब पावन आशीष';

  const defaultMessage = language === 'pb'
    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਆਪ ਜੀ ਦੀ ਸਾਧਨਾ ਸਫਲ ਹੋਵੇ। ਸਤਯਨਾਮ।'
    : language === 'en'
    ? 'May your devotion blossom by the grace of Satguru Kabir Saheb. Satyanaam.'
    : 'सतगुरु कबीर साहेब की असीम कृपा से आपकी साधना व स्वाध्याय सदा फलदायी रहे। सत्यनाम।';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className="relative max-w-sm w-full rounded-3xl border-2 p-6 text-center shadow-2xl overflow-hidden select-none"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer text-gray-500"
            title="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Animated Blooming Flower Container */}
          <div className="relative w-32 h-32 mx-auto my-3 flex items-center justify-center">
            {/* Exploding floating petals */}
            {petals.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                animate={{ x: p.x, y: p.y, opacity: 0, scale: p.scale }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="absolute text-xl pointer-events-none"
              >
                🌸
              </motion.div>
            ))}

            {/* Glowing Golden Pulse */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute inset-0 rounded-full bg-amber-400/20 blur-md pointer-events-none"
            />

            {/* Central Bloom Flower */}
            <motion.div
              initial={{ rotate: -90, scale: 0.2 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 100 }}
              className="w-20 h-20 rounded-full border-2 border-amber-500/40 bg-gradient-to-tr from-amber-500/20 to-rose-400/20 flex items-center justify-center shadow-lg"
            >
              <Flower2 className="w-12 h-12 text-rose-500 animate-pulse" />
            </motion.div>
          </div>

          {/* Title & Sacred Header */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest font-serif block">
              🌹 {SACRED_BRANDING.header[language]} 🌹
            </span>
            <h3 
              className="text-lg font-black font-serif"
              style={{ color: theme.sacredMaroon }}
            >
              {title || defaultTitle}
            </h3>
          </div>

          {/* Message */}
          <p className="text-xs sm:text-sm font-serif leading-relaxed mt-2 opacity-85 px-2">
            {message || defaultMessage}
          </p>

          {/* Action Button */}
          <button
            onClick={onClose}
            style={{
              backgroundColor: theme.sacredMaroon,
              color: '#FFFFFF',
            }}
            className="mt-5 w-full py-2.5 px-4 rounded-xl font-bold font-serif text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
          >
            {language === 'pb' ? 'ਪ੍ਰਣਾਮ (ਸਵੀਕਾਰ ਕਰੋ)' : language === 'en' ? 'Accept Blessing' : 'प्रणाम (स्वीकार करें)'}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
