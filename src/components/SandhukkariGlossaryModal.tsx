import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  Compass, 
  Heart, 
  Layers, 
  Quote 
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { SandhukkariTerm } from '../services/sandhukkariGlossary';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface SandhukkariGlossaryModalProps {
  term: SandhukkariTerm | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SandhukkariGlossaryModal: React.FC<SandhukkariGlossaryModalProps> = ({
  term,
  isOpen,
  onClose,
  language,
}) => {
  const { theme } = useAppTheme();

  if (!isOpen || !term) return null;

  const handleSpeak = () => {
    sacredHaptics.lightTap();
    const textToSpeak = `${term.word}. ${term.esotericMeaning[language] || term.esotericMeaning.hi}`;
    speechReciter.speak(textToSpeak, language);
  };

  const getCategoryBadge = () => {
    switch (term.category) {
      case 'liberation':
        return { label: language === 'pb' ? 'ਮੁਕਤੀ ਤੇ ਹੰਸ ਪਦ' : language === 'en' ? 'Liberation & Soul' : 'मुक्ति एवं हंस पद', color: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30' };
      case 'sadhana':
        return { label: language === 'pb' ? 'ਅੰਦਰੂਨੀ ਸਾਧਨਾ' : language === 'en' ? 'Inner Sadhana' : 'आंतरिक साधना', color: 'bg-amber-500/15 text-amber-800 border-amber-500/30' };
      case 'realms':
        return { label: language === 'pb' ? 'ਅਧਿਆਤਮਿਕ ਲੋਕ' : language === 'en' ? 'Spiritual Realms' : 'आध्यात्मिक लोक व धाम', color: 'bg-indigo-500/15 text-indigo-800 border-indigo-500/30' };
      case 'maya':
        return { label: language === 'pb' ? 'ਕਾਲ ਤੇ ਮਾਇਆ' : language === 'en' ? 'Kaal & Maya' : 'काल एवं माया प्रपंच', color: 'bg-rose-500/15 text-rose-800 border-rose-500/30' };
      case 'divine':
        return { label: language === 'pb' ? 'ਪਰਮ ਸਤਿਗੁਰੂ ਅਵਤਾਰ' : language === 'en' ? 'Satguru Manifestation' : 'परम सतगुरु अवतार', color: 'bg-purple-500/15 text-purple-800 border-purple-500/30' };
      default:
        return { label: language === 'pb' ? 'ਗੂੜ੍ਹ ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Spiritual Term' : 'गूढ़ शब्दार्थ', color: 'bg-amber-500/15 text-amber-800 border-amber-500/30' };
    }
  };

  const badge = getCategoryBadge();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className="relative w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.accentGold,
            }}
            className="p-5 border-b flex items-start justify-between gap-4 relative"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badge.color}`}>
                  {badge.label}
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-800/80 font-mono">
                  {term.transliteration}
                </span>
              </div>
              <div className="flex items-baseline gap-3 pt-1">
                <h3
                  style={{ color: theme.sacredMaroon }}
                  className="text-2xl sm:text-3xl font-black font-serif tracking-wide"
                >
                  {language === 'pb' ? term.punjabi : term.word}
                </h3>
                {language !== 'pb' && (
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 font-serif">
                    ({term.punjabi})
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSpeak}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                }}
                className="p-2 rounded-xl border text-amber-700 hover:scale-105 transition-all cursor-pointer shadow-xs"
                title="शब्द एवं अर्थ सुनें (Listen Pronunciation)"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-black/5 hover:bg-black/10 transition-colors text-gray-500 hover:text-gray-800 cursor-pointer"
                title="बंद करें (Close)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm">
            {/* Esoteric Meaning (सर्वोच्च गूढ़ आध्यात्मिक रहस्य) */}
            <div 
              style={{ 
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder 
              }}
              className="p-4 rounded-2xl border space-y-1.5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-serif">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {language === 'pb' ? 'ਗੂੜ੍ਹ ਅਧਿਆਤਮਿਕ ਰਹੱਸ' : language === 'en' ? 'Esoteric Spiritual Meaning' : 'गूढ़ आध्यात्मिक रहस्य'}
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                {term.esotericMeaning[language] || term.esotericMeaning.hi}
              </p>
            </div>

            {/* Literal Meaning & Etymology */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div 
                style={{ borderColor: theme.cardBorder }}
                className="p-3.5 rounded-xl border bg-black/[0.02] space-y-1"
              >
                <span className="font-bold opacity-70 block font-serif">
                  {language === 'pb' ? 'ਸਧਾਰਨ ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Literal Meaning' : 'साधारण शब्दार्थ'}
                </span>
                <p className="leading-snug">
                  {term.literalMeaning[language] || term.literalMeaning.hi}
                </p>
              </div>

              <div 
                style={{ borderColor: theme.cardBorder }}
                className="p-3.5 rounded-xl border bg-black/[0.02] space-y-1"
              >
                <span className="font-bold opacity-70 block font-serif">
                  {language === 'pb' ? 'ਮੂਲ ਧਾਤੂ / ਵਿਉਤਪਤੀ' : language === 'en' ? 'Root & Etymology' : 'मूल धातु / व्युत्पत्ति'}
                </span>
                <p className="leading-snug">
                  {term.rootEtymology[language] || term.rootEtymology.hi}
                </p>
              </div>
            </div>

            {/* Key Verse Snippet from Scripture if present */}
            {term.keyVerseSnippet && (
              <div 
                style={{ borderColor: theme.accentGold }}
                className="p-3.5 rounded-2xl border-l-4 bg-amber-500/10 space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-amber-800 dark:text-amber-300 font-serif">
                  <span className="flex items-center gap-1.5">
                    <Quote className="w-3 h-3" />
                    <span>{language === 'pb' ? 'ਪਾਵਨ ਗ੍ਰੰਥ ਪ੍ਰਮਾਣ' : language === 'en' ? 'Scriptural Reference' : 'पावन ग्रन्थ प्रमाण'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20">
                    {term.keyVerseSnippet.source}
                  </span>
                </div>
                <p className="font-serif italic text-sm text-amber-950 dark:text-amber-100 font-bold">
                  "{term.keyVerseSnippet.text}"
                </p>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div 
            style={{ 
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.cardBorder 
            }}
            className="p-3.5 border-t text-center shrink-0 flex items-center justify-between px-5"
          >
            <span className="text-[11px] opacity-70 italic font-serif">
              {language === 'pb' ? '।। ਸਤਯਨਾਮ ਸ਼੍ਰੀ ਕਬੀਰ ਸਾਹੇਬ ।।' : language === 'en' ? '।। Satyanaam Sri Kabir Saheb ।।' : '।। सत्यनाम श्री कबीर साहेब ।।'}
            </span>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: theme.sacredMaroon,
              }}
              className="px-5 py-1.5 rounded-xl text-white font-bold text-xs shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              {language === 'pb' ? 'ਸਮਝ ਗਏ (ਬੰਦ ਕਰੋ)' : language === 'en' ? 'Understood' : 'समझ गए (बंद करें)'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
