import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight, Scroll, Sparkles } from 'lucide-react';
import { SAKHI_SANGRAH_ANG_15_VERSES } from '../data/granths/sakhiSangrahAng15';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { devanagariToGurmukhi } from '../services/transliteration';

interface ChetawaniSaarangProps {
  language: Language;
  onOpenSwadhyay?: (verseNum: number) => void;
  onClose?: () => void;
}

export const ChetawaniSaarang: React.FC<ChetawaniSaarangProps> = ({ language, onOpenSwadhyay, onClose }) => {
  const { theme } = useAppTheme();

  // Top 10 impactful verses selected from the 105
  // Verses: 4, 11, 17, 26, 44, 55, 71, 74, 91, 104
  const topVersesIndices = [3, 10, 16, 25, 43, 54, 70, 73, 90, 103];
  const sarangVerses = useMemo(() => topVersesIndices.map(idx => SAKHI_SANGRAH_ANG_15_VERSES[idx]), []);

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* Header */}
      <div 
        style={{ backgroundColor: theme.sacredMaroon }}
        className="p-6 rounded-3xl text-white space-y-2 relative overflow-hidden shadow-lg"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sarangVerses.map((verse, idx) => (
          <motion.div
            key={verse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{ 
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
            }}
            className="group relative rounded-2xl border-2 p-5 space-y-4 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Index Badge */}
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black font-serif">{idx + 1}</span>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-amber-600">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest font-mono">
                  Sakhi #{String(verse.id).includes('-v') ? String(verse.id).split('-v')[1] : verse.id}
                </span>
              </div>

              <blockquote 
                className="text-lg font-serif font-black leading-relaxed"
                style={{ color: theme.textPrimary }}
              >
                {verse.lines[language][0]}
                <br />
                {verse.lines[language][1]}
              </blockquote>

              <p 
                className="text-xs font-serif leading-relaxed italic opacity-80 border-l-2 pl-3"
                style={{ color: theme.textSecondary, borderColor: theme.accentGold }}
              >
                {verse.bhavarth?.[language] || ''}
              </p>
            </div>

            <div className="pt-3 flex items-center justify-between border-t" style={{ borderColor: theme.cardBorder }}>
              <button
                onClick={() => {
                  const idStr = String(verse.id);
                  const num = idStr.includes('-v') ? parseInt(idStr.split('-v')[1]) : parseInt(idStr);
                  onOpenSwadhyay?.(num);
                }}
                style={{ color: theme.sacredMaroon }}
                className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer group/btn"
              >
                <span>{language === 'hi' ? 'गहन स्वाध्याय' : language === 'pb' ? 'ਗਹਿਨ ਸਵਾਧਿਆਏ' : 'Deep Study'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
              
              <div className="flex items-center gap-1">
                <Scroll className="w-3.5 h-3.5 text-amber-500/40" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {onClose && (
        <div className="flex justify-center pt-4">
          <button
            onClick={onClose}
            style={{ backgroundColor: theme.sacredMaroon }}
            className="px-8 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>{language === 'hi' ? 'वापस जाएं' : language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'Go Back'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
