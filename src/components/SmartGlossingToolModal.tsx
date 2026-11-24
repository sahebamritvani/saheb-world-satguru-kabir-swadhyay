import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  Check, 
  Layers, 
  Compass, 
  Quote, 
  HelpCircle,
  Eye,
  Filter
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { SANDHUKKARI_GLOSSARY, SandhukkariTerm } from '../services/sandhukkariGlossary';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface SmartGlossingToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SmartGlossingToolModal: React.FC<SmartGlossingToolModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTerm, setSelectedTerm] = useState<SandhukkariTerm | null>(null);

  const allTerms = useMemo(() => {
    return Object.values(SANDHUKKARI_GLOSSARY);
  }, []);

  const categories = useMemo(() => [
    { id: 'all', label: language === 'pb' ? 'ਸਾਰੇ ਸ਼ਬਦ' : language === 'en' ? 'All Words' : 'समस्त शब्द' },
    { id: 'divine', label: language === 'pb' ? 'ਸਤਿਗੁਰੂ' : language === 'en' ? 'Satguru' : 'परम सतगुरु' },
    { id: 'liberation', label: language === 'pb' ? 'ਮੁਕਤੀ' : language === 'en' ? 'Liberation' : 'मोक्ष व मुक्ति' },
    { id: 'sadhana', label: language === 'pb' ? 'ਸਾਧਨਾ' : language === 'en' ? 'Sadhana' : 'आंतरिक साधना' },
    { id: 'realms', label: language === 'pb' ? 'ਲੋਕ-ਧਾਮ' : language === 'en' ? 'Realms' : 'लोक व धाम' },
    { id: 'maya', label: language === 'pb' ? 'ਕਾਲ-ਮਾਇਆ' : language === 'en' ? 'Kaal & Maya' : 'काल एवं माया' },
  ], [language]);

  const filteredTerms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allTerms.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;

      const inWord = item.word.toLowerCase().includes(q);
      const inPb = item.punjabi.toLowerCase().includes(q);
      const inTrans = item.transliteration.toLowerCase().includes(q);
      const inLiteral = (item.literalMeaning[language] || item.literalMeaning.hi).toLowerCase().includes(q);
      const inEsoteric = (item.esotericMeaning[language] || item.esotericMeaning.hi).toLowerCase().includes(q);

      return inWord || inPb || inTrans || inLiteral || inEsoteric;
    });
  }, [allTerms, searchQuery, selectedCategory, language]);

  if (!isOpen) return null;

  const handleSpeak = (term: SandhukkariTerm, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sacredHaptics.lightTap();
    const textToSpeak = `${term.word}. ${term.literalMeaning[language] || term.literalMeaning.hi}. ${term.esotericMeaning[language] || term.esotericMeaning.hi}`;
    speechReciter.speak(textToSpeak, language);
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'liberation':
        return { label: language === 'pb' ? 'ਮੁਕਤੀ' : language === 'en' ? 'Liberation' : 'मुक्ति', color: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30' };
      case 'sadhana':
        return { label: language === 'pb' ? 'ਸਾਧਨਾ' : language === 'en' ? 'Sadhana' : 'साधना', color: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30' };
      case 'realms':
        return { label: language === 'pb' ? 'ਲੋਕ' : language === 'en' ? 'Realms' : 'लोक-धाम', color: 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-500/30' };
      case 'maya':
        return { label: language === 'pb' ? 'ਮਾਇਆ' : language === 'en' ? 'Maya' : 'काल-माया', color: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30' };
      case 'divine':
        return { label: language === 'pb' ? 'ਸਤਿਗੁਰੂ' : language === 'en' ? 'Satguru' : 'सतगुरु', color: 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30' };
      default:
        return { label: language === 'pb' ? 'ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Term' : 'शब्दार्थ', color: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30' };
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[220] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            backgroundColor: isDarkMode ? '#1C1712' : '#FFFDF9',
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className="w-full max-w-2xl max-h-[90vh] rounded-3xl border-2 shadow-2xl flex flex-col overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between gap-3 bg-amber-500/5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif tracking-wide" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb' ? 'ਸਮਾਰਟ ਸ਼ਬਦਾਵਲੀ ਟੂਲ' : language === 'en' ? 'Smart Glossing Utility' : 'स्मार्ट शब्दावली टूल (Smart Glossing)'}
                </h3>
                <p className="text-xs opacity-75 font-serif">
                  {language === 'pb' 
                    ? 'ਸੰਤ ਬਾਣੀ, ਸਾਹਿਤਕ ਸ਼ਬਦਾਰਥ, ਉਚਾਰਣ ਅਤੇ ਗੂੜ੍ਹ ਅਧਿਆਤਮਿਕ ਰਹਿਸ'
                    : language === 'en'
                    ? 'Authentic Sant Bhasha definitions, root etymologies & pronunciation'
                    : 'संत वाणी, साहित्य शब्दार्थ, शुद्ध उच्चारण एवं गूढ़ आध्यात्मिक रहस्य'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-stone-500 transition cursor-pointer"
              title="बंद करें (Close)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* How Smart Glossing Works Banner */}
          <div className="px-4 sm:px-5 py-2.5 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2 text-xs">
            <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">💡 टिप्स:</span>
            <span className="opacity-90">
              {language === 'pb'
                ? 'ਪਾਠ ਪੜ੍ਹਦੇ ਸਮੇਂ ਜਿਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਦੇ ਥੱਲੇ ਬਿੰਦੀਆਂ (Dotted Underline ✦) ਹਨ, ਉਹਨਾਂ ਤੇ ਟੈਪ ਕਰਕੇ ਤੁਰੰਤ ਅਰਥ ਵੇਖੋ।'
                : language === 'en'
                ? 'While reading, tap any word with a dotted underline (✦) to immediately see its definition tooltip.'
                : 'पाठ पढ़ते समय जिन शब्दों के नीचे बिंदियां (Dotted Underline ✦) हैं, उन पर टैप करके तुरंत अर्थ देखें।'}
            </span>
          </div>

          {/* Search & Category Filter */}
          <div className="p-4 sm:p-5 space-y-3 border-b border-amber-500/10">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50 text-amber-700" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'pb' 
                    ? 'ਸ਼ਬਦ ਖੋਜੋ... (ਜਿਵੇਂ: ਸ਼ਬਦ, ਸੁਰਤਿ, ਅਨਹਦ, ਗਗਨ, ਹੰਸਾ)' 
                    : language === 'en' 
                    ? 'Search terms... (e.g. Shabd, Surati, Anhad, Gagan, Hansa)' 
                    : 'शब्द खोजें... (जैसे: शब्द, सुरति, अनहद, गगन, हंसा, सार शब्द)'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs sm:text-sm bg-black/5 dark:bg-white/5 border-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-60 hover:opacity-100"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setSelectedCategory(cat.id);
                    }}
                    style={{
                      backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                      color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                      borderColor: isSelected ? theme.buttonPrimaryBg : 'rgba(217, 119, 6, 0.25)',
                    }}
                    className="px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap transition cursor-pointer"
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content: Split view or List of Terms */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {selectedTerm ? (
              /* Deep Dive Detail View for Selected Term */
              <div className="space-y-4 animate-fadeIn">
                <button
                  type="button"
                  onClick={() => setSelectedTerm(null)}
                  className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer mb-2"
                >
                  ← {language === 'pb' ? 'ਸੂਚੀ ਵੱਲ ਵਾਪਸ' : language === 'en' ? 'Back to List' : 'शब्दावली सूची पर वापस'}
                </button>

                <div className="p-4 sm:p-5 rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h2 className="text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                          {language === 'pb' ? selectedTerm.punjabi : selectedTerm.word}
                        </h2>
                        {language !== 'pb' && (
                          <span className="text-sm font-serif text-amber-800/70 dark:text-amber-300/70">
                            ({selectedTerm.punjabi})
                          </span>
                        )}
                        <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                          [{selectedTerm.transliteration}]
                        </span>
                      </div>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryBadge(selectedTerm.category).color}`}>
                        {getCategoryBadge(selectedTerm.category).label}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSpeak(selectedTerm)}
                      className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/25 flex items-center gap-1.5 text-xs font-bold transition cursor-pointer"
                      title="उच्चारण सुनें (Listen Pronunciation)"
                    >
                      <Volume2 className="w-4 h-4 text-amber-600" />
                      <span>{language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'उच्चारण'}</span>
                    </button>
                  </div>

                  {/* Meanings */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/15">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                        📖 {language === 'pb' ? 'ਸ਼ਾਬਦਿਕ ਅਰਥ (Literal Meaning)' : language === 'en' ? 'Literal Meaning' : 'शाब्दिक अर्थ'}
                      </span>
                      <p className="text-xs sm:text-sm font-serif font-bold leading-relaxed">
                        {selectedTerm.literalMeaning[language] || selectedTerm.literalMeaning.hi}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-1">
                        ✨ {language === 'pb' ? 'ਗੂੜ੍ਹ ਅਧਿਆਤਮਿਕ ਰਹੱਸ (Esoteric Spiritual Meaning)' : language === 'en' ? 'Esoteric Spiritual Meaning' : 'गूढ़ आध्यात्मिक रहस्य'}
                      </span>
                      <p className="text-xs sm:text-sm font-serif leading-relaxed">
                        {selectedTerm.esotericMeaning[language] || selectedTerm.esotericMeaning.hi}
                      </p>
                    </div>

                    {selectedTerm.rootEtymology && (
                      <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/15">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                          🌱 {language === 'pb' ? 'ਸ਼ਬਦ ਵਿਉਤਪੱਤੀ (Root & Etymology)' : language === 'en' ? 'Root & Etymology' : 'व्युत्पत्ति एवं मूल स्रोत'}
                        </span>
                        <p className="text-xs font-serif leading-relaxed opacity-90">
                          {selectedTerm.rootEtymology[language] || selectedTerm.rootEtymology.hi}
                        </p>
                      </div>
                    )}

                    {selectedTerm.keyVerseSnippet && (
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
                          📜 {language === 'pb' ? 'ਸੰਬੰਧਿਤ ਬਾਣੀ ਪ੍ਰਮਾਣ' : language === 'en' ? 'Scriptural Verse Citation' : 'संबंधित वाणी प्रमाण'} ({selectedTerm.keyVerseSnippet.source})
                        </span>
                        <p className="text-xs font-serif font-bold italic leading-relaxed text-amber-950 dark:text-amber-100 whitespace-pre-line">
                          "{selectedTerm.keyVerseSnippet.text}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* List View of All Matching Terms */
              <div className="space-y-2">
                <div className="text-[11px] font-bold opacity-70 px-1 flex items-center justify-between">
                  <span>
                    {language === 'pb' 
                      ? `${filteredTerms.length} ਸ਼ਬਦ ਮਿਲੇ` 
                      : language === 'en' 
                      ? `${filteredTerms.length} terms found` 
                      : `${filteredTerms.length} शब्द उपलब्ध`}
                  </span>
                  <span>{language === 'pb' ? 'ਵੇਰਵੇ ਲਈ ਟੈਪ ਕਰੋ' : language === 'en' ? 'Tap for details' : 'विस्तार हेतु टैप करें'}</span>
                </div>

                {filteredTerms.length === 0 ? (
                  <div className="py-12 text-center text-xs opacity-60">
                    {language === 'pb' ? 'ਕੋਈ ਸ਼ਬਦ ਨਹੀਂ ਮਿਲਿਆ' : language === 'en' ? 'No terms match your search' : 'कोई शब्द नहीं मिला'}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {filteredTerms.map((term) => {
                      const badge = getCategoryBadge(term.category);
                      return (
                        <div
                          key={term.word}
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setSelectedTerm(term);
                          }}
                          className="p-3 rounded-2xl border border-amber-500/20 bg-black/5 dark:bg-white/5 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all cursor-pointer space-y-1.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-serif font-black text-sm text-amber-950 dark:text-amber-100">
                                {language === 'pb' ? term.punjabi : term.word}
                              </span>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${badge.color}`}>
                                {badge.label}
                              </span>
                            </div>
                            <p className="text-[11px] font-serif font-semibold text-stone-700 dark:text-stone-300 line-clamp-1">
                              {term.literalMeaning[language] || term.literalMeaning.hi}
                            </p>
                            <p className="text-[10px] font-serif text-stone-500 dark:text-stone-400 line-clamp-2">
                              {term.esotericMeaning[language] || term.esotericMeaning.hi}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-amber-500/10 text-[10px]">
                            <span className="font-mono text-amber-700/80 dark:text-amber-400/80 font-bold uppercase">
                              {term.transliteration}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => handleSpeak(term, e)}
                              className="p-1 rounded-md hover:bg-amber-500/20 text-amber-700 dark:text-amber-300"
                              title="सुनें"
                            >
                              <Volume2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t border-amber-500/20 bg-amber-500/5 flex items-center justify-between gap-3 text-xs">
            <span className="opacity-75 font-serif">
              {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
            </span>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="px-4 py-1.5 rounded-xl font-bold shadow-md hover:opacity-90 transition cursor-pointer"
            >
              {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'पूर्ण हुआ'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
