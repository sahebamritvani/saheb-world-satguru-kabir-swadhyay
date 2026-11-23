import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  X, 
  ArrowUpRight, 
  BookOpen, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  Scroll,
  ExternalLink
} from 'lucide-react';
import { SandhukkariTerm } from '../services/sandhukkariGlossary';
import { Language, Sakhi } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { fetchVerseContextForTerm } from '../services/glossaryContextResolver';

interface SmartGlossaryTooltipProps {
  term: SandhukkariTerm | null;
  targetRect?: DOMRect | null;
  onClose: () => void;
  onOpenFullModal?: (term: SandhukkariTerm) => void;
  onSelectSakhi?: (sakhi: Sakhi) => void;
  language: Language;
}

export const SmartGlossaryTooltip: React.FC<SmartGlossaryTooltipProps> = ({
  term,
  targetRect,
  onClose,
  onOpenFullModal,
  onSelectSakhi,
  language,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [isContextExpanded, setIsContextExpanded] = useState<boolean>(false);

  // Fetch scriptural verse context for the spiritual term
  const verseContext = useMemo(() => {
    if (!term) return null;
    return fetchVerseContextForTerm(term, language);
  }, [term, language]);

  if (!term) return null;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    const textToSpeak = `${term.word}. ${term.literalMeaning[language] || term.literalMeaning.hi}. ${term.esotericMeaning[language] || term.esotericMeaning.hi}`;
    speechReciter.speak(textToSpeak, language);
  };

  const handleSpeakVerseContext = (e: React.MouseEvent) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    if (verseContext?.verseText) {
      speechReciter.speak(verseContext.verseText, language);
    }
  };

  const handleToggleContext = (e: React.MouseEvent) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    setIsContextExpanded(!isContextExpanded);
  };

  const getCategoryBadge = () => {
    switch (term.category) {
      case 'liberation':
        return {
          label: language === 'pb' ? 'ਮੁਕਤੀ' : language === 'en' ? 'Liberation' : 'मुक्ति',
          color: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
        };
      case 'sadhana':
        return {
          label: language === 'pb' ? 'ਸਾਧਨਾ' : language === 'en' ? 'Sadhana' : 'साधना',
          color: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30'
        };
      case 'realms':
        return {
          label: language === 'pb' ? 'ਲੋਕ' : language === 'en' ? 'Realms' : 'लोक व धाम',
          color: 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-500/30'
        };
      case 'maya':
        return {
          label: language === 'pb' ? 'ਕਾਲ-ਮਾਇਆ' : language === 'en' ? 'Maya' : 'काल-माया',
          color: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30'
        };
      case 'divine':
        return {
          label: language === 'pb' ? 'ਸਤਿਗੁਰੂ' : language === 'en' ? 'Satguru' : 'सतगुरु',
          color: 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
        };
      default:
        return {
          label: language === 'pb' ? 'ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Term' : 'शब्दार्थ',
          color: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30'
        };
    }
  };

  const badge = getCategoryBadge();
  const definition = term.esotericMeaning[language] || term.esotericMeaning.hi;
  const literal = term.literalMeaning[language] || term.literalMeaning.hi;

  // Compute non-intrusive tooltip position
  let tooltipStyle: React.CSSProperties = {};
  if (targetRect) {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      tooltipStyle = {
        bottom: '88px',
        left: '14px',
        right: '14px',
        maxWidth: 'calc(100vw - 28px)',
        maxHeight: 'calc(100vh - 110px)',
      };
    } else {
      const topPos = targetRect.bottom + 8;
      const leftPos = Math.max(16, Math.min(window.innerWidth - 380, targetRect.left - 40));
      tooltipStyle = {
        top: `${Math.min(window.innerHeight - 420, Math.max(16, topPos))}px`,
        left: `${leftPos}px`,
        width: '360px',
        maxHeight: 'calc(100vh - 40px)',
      };
    }
  } else {
    tooltipStyle = {
      bottom: '96px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100vw - 32px)',
      maxWidth: '380px',
      maxHeight: 'calc(100vh - 120px)',
    };
  }

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[150] pointer-events-auto bg-black/25 backdrop-blur-[1.5px]"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          style={{
            ...tooltipStyle,
            backgroundColor: isDarkMode ? '#1E1915' : '#FFFCF5',
            borderColor: theme.accentGold,
            color: theme.textPrimary,
            boxShadow: '0 16px 40px -4px rgba(180, 83, 9, 0.3), 0 6px 16px rgba(0,0,0,0.12)',
          }}
          onClick={(e) => e.stopPropagation()}
          className="fixed rounded-3xl border-2 p-3.5 sm:p-4 z-[160] shadow-2xl overflow-y-auto text-left flex flex-col gap-2.5"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 border-b pb-2 border-amber-500/20">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badge.color}`}>
                {badge.label}
              </span>
              <span className="text-[10px] font-mono font-bold text-amber-700/80 dark:text-amber-400/80 uppercase">
                {term.transliteration}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleSpeak}
                className="p-1 rounded-lg hover:bg-amber-500/10 text-amber-700 dark:text-amber-300 transition cursor-pointer"
                title="उच्चारण सुनें (Listen Pronunciation)"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-stone-500 dark:text-stone-400 transition cursor-pointer"
                title="बंद करें (Close)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Word Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <h4 
              style={{ color: theme.sacredMaroon }}
              className="text-lg sm:text-xl font-black font-serif tracking-wide"
            >
              {language === 'pb' ? term.punjabi : term.word}
            </h4>
            {language !== 'pb' && (
              <span className="text-xs font-serif text-amber-800/70 dark:text-amber-300/70">
                ({term.punjabi})
              </span>
            )}

            {/* 🗣️ Ucharan Shudhata (Pronunciation Guide Speaker) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                sacredHaptics.lightTap();
                speechReciter.speak(language === 'pb' ? term.punjabi : term.word, language);
              }}
              className="px-2.5 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-[10px] font-bold flex items-center gap-1 cursor-pointer transition shadow-2xs"
              title="🗣️ शुद्ध उच्चारण सुनें (Listen Clean Pronunciation)"
            >
              <Volume2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 font-bold" />
              <span>{language === 'pb' ? 'ਸ਼ੁੱਧ ਉੱਚਾਰਣ' : language === 'en' ? 'Pronounce' : 'शुद्ध उच्चारण'}</span>
            </button>
          </div>

          {/* Meaning / Definition */}
          <div className="space-y-1.5">
            <p className="text-xs font-serif font-bold text-stone-800 dark:text-stone-200 leading-snug">
              {literal}
            </p>
            <p className="text-[11px] font-serif leading-relaxed text-stone-600 dark:text-stone-300">
              {definition}
            </p>
          </div>

          {/* ==========================================================
              EXPAND TO CONTEXT: ORIGINAL SCRIPTURAL SOURCE VERSE
             ========================================================== */}
          <div className="pt-1 border-t border-amber-500/15">
            <button
              type="button"
              onClick={handleToggleContext}
              style={{
                backgroundColor: isContextExpanded ? 'rgba(217, 119, 6, 0.15)' : 'rgba(217, 119, 6, 0.08)',
                color: theme.sacredMaroon,
                borderColor: 'rgba(217, 119, 6, 0.3)',
              }}
              className="w-full py-2 px-3 rounded-2xl border text-xs font-bold flex items-center justify-between hover:bg-amber-500/20 transition cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Scroll className="w-3.5 h-3.5 text-amber-600" />
                <span>
                  {isContextExpanded
                    ? (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਸੰਦਰਭ ਸਮੇਟੋ' : language === 'en' ? 'Collapse Context' : 'मूल वाणी संदर्भ समेटें')
                    : (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਸੰਦਰਭ ਵੇਖੋ (Expand to Context)' : language === 'en' ? 'Expand to Context (Source Verse)' : 'मूल वाणी संदर्भ देखें (Expand to Context)')}
                </span>
              </div>
              {isContextExpanded ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-amber-600" />}
            </button>

            {/* Expanded Source Material Card */}
            <AnimatePresence>
              {isContextExpanded && verseContext && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 p-3 sm:p-3.5 rounded-2xl border bg-amber-500/10 border-amber-500/30 space-y-2.5 overflow-hidden text-left"
                >
                  {/* Source Header */}
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono font-bold text-amber-800 dark:text-amber-300">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Quote className="w-3 h-3 text-amber-600" />
                      <span>{verseContext.sourceTitle}</span>
                      {verseContext.collectionType === 'kaal-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                          {language === 'pb' ? 'ਕਾਲ ਕੋ ਅੰਗ' : language === 'en' ? 'Kaal Ko Ang' : 'काल को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'jeevat-mritak-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                          {language === 'pb' ? 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ' : language === 'en' ? 'Jeevat Mritak Ko Ang' : 'जीवत मृतक को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'swaarath-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
                          {language === 'pb' ? 'ਸਵਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? 'Swaarath Ko Ang' : 'स्वारथ को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'parmaarth-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-violet-500/20 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                          {language === 'pb' ? 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? 'Parmaarth Ko Ang' : 'परमार्थ को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'man-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30">
                          {language === 'pb' ? 'ਮਨ ਕੋ ਅੰਗ' : language === 'en' ? 'Man Ko Ang' : 'मन को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'maya-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                          {language === 'pb' ? 'ਮਾਇਆ ਕੋ ਅੰਗ' : language === 'en' ? 'Maya Ko Ang' : 'माया को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'moh-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                          {language === 'pb' ? 'ਮੋਹ ਕੋ ਅੰਗ' : language === 'en' ? 'Moh Ko Ang' : 'मोह को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'kaam-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-red-600/20 text-red-900 dark:text-red-300 border border-red-600/30">
                          {language === 'pb' ? 'ਕਾਮ ਕੋ ਅੰਗ' : language === 'en' ? 'Kaam Ko Ang' : 'काम को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'krodh-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-orange-600/20 text-orange-900 dark:text-orange-300 border border-orange-600/30">
                          {language === 'pb' ? '⚡ ਕ੍ਰੋਧ ਕੋ ਅੰਗ' : language === 'en' ? '⚡ Krodh Ko Ang' : '⚡ क्रोध को अंग'}
                        </span>
                      )}
                      {verseContext.collectionType === 'lobh-ko-ang' && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-serif font-black bg-yellow-600/20 text-yellow-900 dark:text-yellow-300 border border-yellow-600/30">
                          {language === 'pb' ? '💰 ਲੋਭ ਕੋ ਅੰਗ' : language === 'en' ? '💰 Lobh Ko Ang' : '💰 लोभ को अंग'}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleSpeakVerseContext}
                      className="p-1 rounded-md hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center gap-1 transition cursor-pointer"
                      title="मूल वाणी श्रवण करें"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span className="text-[9px] font-serif">{language === 'pb' ? 'ਸਰਵਣ' : language === 'en' ? 'Listen' : 'श्रवण'}</span>
                    </button>
                  </div>

                  {/* Original Verse Couplet */}
                  <div className="p-2.5 rounded-xl bg-white/70 dark:bg-black/40 border border-amber-500/20">
                    <p className="font-serif font-black text-xs sm:text-sm leading-relaxed text-amber-950 dark:text-amber-100 whitespace-pre-line text-center italic">
                      "{verseContext.verseText}"
                    </p>
                    {verseContext.transliteration && language === 'en' && (
                      <p className="text-[10px] font-sans text-stone-500 dark:text-stone-400 text-center mt-1">
                        {verseContext.transliteration}
                      </p>
                    )}
                  </div>

                  {/* Spiritual Interpretation of this Source Verse */}
                  {verseContext.bhavarth && (
                    <div className="text-[11px] font-serif leading-relaxed text-stone-700 dark:text-stone-300 space-y-0.5">
                      <span className="font-bold text-amber-800 dark:text-amber-400 block text-[10px] uppercase tracking-wider">
                        ✨ {language === 'pb' ? 'ਆਤਮਿਕ ਅਰਥ (Spiritual Context)' : language === 'en' ? 'Spiritual Context' : 'आध्यात्मिक संदर्भ व भाव:'}
                      </span>
                      <p className="italic">
                        {verseContext.bhavarth}
                      </p>
                    </div>
                  )}

                  {/* Quick Action to study matched Sakhi in SwadhyayReader */}
                  {verseContext.matchedSakhi && onSelectSakhi && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectSakhi(verseContext.matchedSakhi!);
                      }}
                      className="w-full py-1 px-2.5 rounded-xl text-[10px] font-bold bg-[#8B2500] text-white hover:bg-[#7C1D00] transition flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{language === 'pb' ? 'ਇਸ ਸਾਖੀ ਦਾ ਪੂਰਨ ਸਵਾਧਿਆਇ ਕਰੋ' : language === 'en' ? 'Study This Sakhi in Swadhyay' : 'इस साखी का पूर्ण स्वाध्याय करें'}</span>
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Action to open full modal if user wants deep study */}
          {onOpenFullModal && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenFullModal(term);
              }}
              style={{
                backgroundColor: theme.stepActiveBg,
                color: theme.sacredMaroon,
                borderColor: theme.borderOrnament,
              }}
              className="w-full py-1.5 px-3 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition cursor-pointer"
            >
              <BookOpen className="w-3 h-3 text-amber-600" />
              <span>{language === 'pb' ? 'ਸੰਪੂਰਨ ਵੇਰਵਾ ਤੇ ਗੂੜ੍ਹ ਅਰਥ ਵੇਖੋ' : language === 'en' ? 'View Deep Esoteric Details' : 'संपूर्ण विवरण व गूढ़ रहस्य देखें'}</span>
              <ArrowUpRight className="w-3 h-3 text-amber-600" />
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
