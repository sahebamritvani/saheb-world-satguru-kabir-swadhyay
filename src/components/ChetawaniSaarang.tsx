import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight, Scroll } from 'lucide-react';
import type { GranthVerse } from '../data/granths/granthTypes';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { SacredLoader } from './SacredLoader';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface ChetawaniSaarangProps {
  language: Language;
  onOpenSwadhyay?: (verseNum: number) => void;
  onClose?: () => void;
}

export const ChetawaniSaarang: React.FC<ChetawaniSaarangProps> = ({ language, onOpenSwadhyay }) => {
  const { theme } = useAppTheme();
  const [ang15Verses, setAng15Verses] = useState<GranthVerse[]>([]);

  useEffect(() => {
    let cancelled = false;
    import('../data/granths/sakhiSangrahAng15')
      .then((mod) => {
        if (!cancelled) setAng15Verses(mod.SAKHI_SANGRAH_ANG_15_VERSES);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Top 10 impactful verses selected from the 105
  // Verses: 4, 11, 17, 26, 44, 55, 71, 74, 91, 104
  const topVersesIndices = [3, 10, 16, 25, 43, 54, 70, 73, 90, 103];
  const sarangVerses = useMemo(
    () => (ang15Verses.length === 0 ? [] : topVersesIndices.map(idx => ang15Verses[idx]).filter(Boolean)),
    [ang15Verses]
  );

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* Header */}
      <div 
        style={{ background: 'linear-gradient(135deg, #6B1800 0%, #8B2500 60%, #9A3412 100%)' }}
        className="p-6 rounded-3xl text-white space-y-2 relative overflow-hidden shadow-lg border border-amber-400/25 backdrop-blur-md"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-amber-400" />
          <h2 className="text-2xl font-serif font-black tracking-wide">
            {language === 'hi' ? 'चेतावनी सारंग' : language === 'pb' ? 'ਚੇਤਾਵਨੀ ਸਾਰੰਗ' : 'Chetavani Essence'}
          </h2>
        </div>
        <p className="text-sm opacity-90 font-serif leading-relaxed max-w-2xl">
          {language === 'hi' 
            ? 'संसार की नश्वरता और काल के चक्र से सावधान करने वाले १० अति प्रभावशाली दोहों का संग्रह।' 
            : language === 'pb'
            ? 'ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਤੇ ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਸੁਚੇਤ ਕਰਨ ਵਾਲੇ ੧੦ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਦੋਹਿਆਂ ਦਾ ਸੰਗ੍ਰਹਿ।'
            : 'A collection of 10 most impactful verses warning against worldly illusions and the cycle of time.'}
        </p>
      </div>

      {/* Scrollable Cards Container */}
      {sarangVerses.length === 0 ? (
        <SacredLoader language={language} compact />
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sarangVerses.map((verse, idx) => {
          const idStr = String(verse.id);
          const sakhiNum = idStr.includes('-v') ? parseInt(idStr.split('-v')[1]) : parseInt(idStr);
          return (
            <motion.div
              key={verse.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <UnifiedDohaCard
                id={`chetawani-${verse.id}`}
                verseNumber={sakhiNum}
                source={{
                  hi: `साखी संग्रह • साखी #${sakhiNum}`,
                  pb: `ਸਾਖੀ ਸੰਗ੍ਰਹਿ • ਸਾਖੀ #${sakhiNum}`,
                  en: `Sakhi Sangrah • Sakhi #${sakhiNum}`,
                }}
                text={{
                  hi: verse.lines.hi.join('\n'),
                  pb: verse.lines.pb.join('\n'),
                  en: verse.lines.en.join('\n'),
                }}
                meaning={verse.bhavarth}
                language={language}
                footerExtra={
                  <>
                    <button
                      type="button"
                      onClick={() => onOpenSwadhyay?.(sakhiNum)}
                      style={{ color: theme.sacredMaroon }}
                      className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer group/btn"
                    >
                      <span>{language === 'hi' ? 'गहन स्वाध्याय' : language === 'pb' ? 'ਗਹਿਨ ਸਵਾਧਿਆਏ' : 'Deep Study'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <Scroll className="w-3.5 h-3.5 text-amber-500/50" />
                  </>
                }
              />
            </motion.div>
          );
        })}
      </div>
      )}

    </div>
  );
};
