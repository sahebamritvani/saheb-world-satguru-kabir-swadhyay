import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  History,
  ArrowLeft,
  X,
  Library,
  Scroll,
  Mic,
  MicOff
} from 'lucide-react';
import { Language, Sakhi } from '../types';
import { translations, getLocalizedGranthaName } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { sakhisDatabase } from '../data/sakhis';
import { ULATVASI_CORE_QUESTIONS, loadAllUlatvasiDatabase, UlatvasiQuestion } from '../data/ulatvasiQuizData';
import { useVoiceInput } from '../services/speechRecognition';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, query, getDocs, orderBy, limit, serverTimestamp, doc } from 'firebase/firestore';

interface DeepSearchProps {
  language: Language;
  onSelectSakhi: (sakhi: Sakhi) => void;
  initialQuery?: string;
  onSelectUlatvasi?: (id: string) => void;
  onClose?: () => void;
}

export const DeepSearch: React.FC<DeepSearchProps> = ({ 
  language, 
  onSelectSakhi, 
  initialQuery = '',
  onSelectUlatvasi,
  onClose
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];
  const isHi = language === 'hi';
  const isPb = language === 'pb';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [selectedGranth, setSelectedGranth] = useState<string>('all');
  const [ulatvasiItems, setUlatvasiItems] = useState<UlatvasiQuestion[]>(ULATVASI_CORE_QUESTIONS);

  useEffect(() => {
    let cancelled = false;
    loadAllUlatvasiDatabase()
      .then((all) => {
        if (!cancelled && all.length > 0) setUlatvasiItems(all);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saheb_world_search_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Core Themes Relevant to Satguru Kabir Saheb's Teachings
  const THEME_FILTERS = [
    { id: 'all', title: { hi: 'सभी विषय (All Themes)', pb: 'ਸਾਰੇ ਵਿਸ਼ੇ', en: 'All Themes' }, icon: '✨' },
    { id: 'guru-mahima', title: { hi: 'गुरु महिमा व शरणागति', pb: 'ਗੁਰੂ ਮਹਿਮਾ ਤੇ ਸ਼ਰਣਾਗਤੀ', en: 'Guru Mahima' }, icon: '👑' },
    { id: 'naam-mahima', title: { hi: 'नाम महिमा व सत्यनाम सुमिरन', pb: 'ਨਾਮ ਮਹਿਮਾ ਤੇ ਸਿਮਰਨ', en: 'Naam Mahima' }, icon: '📿' },
    { id: 'chetavani', title: { hi: 'काल चेतावनी व जागृति', pb: 'ਕਾਲ ਚੇਤਾਵਨੀ ਤੇ ਜਾਗ੍ਰਤੀ', en: 'Chetavani' }, icon: '🔔' },
    { id: 'prem-bhakti', title: { hi: 'प्रेम व विरह भक्ति', pb: 'ਪ੍ਰੇਮ ਤੇ ਬਿਰਹਾ ਭਗਤੀ', en: 'Prem-Bhakti' }, icon: '❤️' },
    { id: 'maya-kaya', title: { hi: 'माया व काया पारख', pb: 'ਮਾਇਆ ਤੇ ਕਾਇਆ ਪਰਖ', en: 'Maya & Body' }, icon: '🌪️' },
    { id: 'satya-aacharan', title: { hi: 'सत्य आचरण व विवेक', pb: 'ਸੱਚਾ ਆਚਰਨ ਤੇ ਬਿਬੇਕ', en: 'Truthful Conduct' }, icon: '⚖️' },
    { id: 'sadhu-sangati', title: { hi: 'साधु संगति व सत्संग', pb: 'ਸਾਧੂ ਸੰਗਤ ਤੇ ਸਤਿਸੰਗ', en: 'Holy Satsang' }, icon: '🌸' },
    { id: 'antar-sumiran', title: { hi: 'अंतर्मुखी ध्यान व सूरत-शब्द', pb: 'ਅੰਤਰਮੁਖੀ ਧਿਆਨ', en: 'Inner Meditation' }, icon: '🧘' },
    { id: 'creation-truth', title: { hi: 'सृष्टि रचना व अमरलोक', pb: 'ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਤੇ ਅਮਰਲੋਕ', en: 'Creation & Satlok' }, icon: '🌌' },
  ];

  const GRANTH_FILTERS = [
    { id: 'all', label: { hi: 'सभी ग्रंथ (All)', pb: 'ਸਾਰੇ ਗ੍ਰੰਥ', en: 'All Granths' } },
    { id: 'Sakhi Sangrah', label: { hi: 'साखी संग्रह', pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ', en: 'Sakhi Sangrah' } },
    { id: 'Kabir Sagar', label: { hi: 'कबीर सागर', pb: 'ਕਬੀਰ ਸਾਗਰ', en: 'Kabir Sagar' } },
    { id: 'Bijak', label: { hi: 'बीजक', pb: 'ਬੀਜਕ', en: 'Bijak' } },
    { id: 'Anurag Sagar', label: { hi: 'अनुराग सागर', pb: 'ਅਨੁਰਾਗ ਸਾਗਰ', en: 'Anurag Sagar' } },
    { id: 'Padavali', label: { hi: 'पदावली', pb: 'ਪਦਾਵਲੀ', en: 'Padavali' } },
  ];
  
  // Web Speech API Voice Search Hook
  const {
    isListening,
    interimText,
    error: voiceError,
    toggleListening,
    isSupported: isVoiceSupported
  } = useVoiceInput({
    language,
    onTranscript: async (text, isFinal) => {
      setSearchQuery(text);
      if (isFinal && text.trim()) {
        await addSearchTerm(text.trim());
      }
    },
    continuous: false,
  });

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!isMounted || !user) return;
      try {
        const historyRef = collection(db, 'users', user.uid, 'searchHistory');
        const q = query(historyRef, orderBy('timestamp', 'desc'), limit(10));
        const snapshot = await getDocs(q);
        const history = snapshot.docs.map(docSnap => (docSnap.data() as { query: string }).query);
        if (isMounted && history.length > 0) {
          setSearchHistory(prev => {
            const combined = Array.from(new Set([...history, ...prev])).slice(0, 10);
            try {
              localStorage.setItem('saheb_world_search_history', JSON.stringify(combined));
            } catch {}
            return combined;
          });
        }
      } catch {
        // Offline / preview sandbox fallback to localStorage
      }
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const saveHistory = async (q: string) => {
    const cleanQuery = q.trim().slice(0, 200);
    if (!cleanQuery) return;
    if (auth.currentUser && auth.currentUser.emailVerified) {
      try {
        const historyRef = collection(db, 'users', auth.currentUser.uid, 'searchHistory');
        await addDoc(historyRef, {
          query: cleanQuery,
          timestamp: serverTimestamp()
        });
      } catch {
        // Offline / preview sandbox fallback
      }
    }
  };

  const addSearchTerm = async (term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setSearchHistory(prev => {
      const updated = [trimmed, ...prev.filter(item => item !== trimmed)].slice(0, 10);
      try {
        localStorage.setItem('saheb_world_search_history', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    await saveHistory(trimmed);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    try {
      localStorage.removeItem('saheb_world_search_history');
    } catch {}
  };

  const results = useMemo(() => {
    const lowQuery = searchQuery.trim().toLowerCase();
    const hasQuery = lowQuery.length >= 1;
    const hasFilter = selectedTheme !== 'all' || selectedGranth !== 'all';

    if (!hasQuery && !hasFilter) {
      return { 
        sakhis: sakhisDatabase.slice(0, 15), 
        ulatvasis: ulatvasiItems.slice(0, 5),
        isDefaultList: true 
      };
    }

    const matchedSakhis = sakhisDatabase.filter(sakhi => {
      // 1. Granth filter
      if (selectedGranth !== 'all' && sakhi.grantha !== selectedGranth) {
        return false;
      }

      // 2. Theme / Category filter
      if (selectedTheme !== 'all') {
        const cat = (sakhi.category || '').toLowerCase();
        const catTitleHi = (sakhi.categoryTitle.hi || '').toLowerCase();
        const matchesCategory = 
          cat.includes(selectedTheme) || 
          catTitleHi.includes(selectedTheme) ||
          (selectedTheme === 'guru-mahima' && (cat.includes('guru') || cat.includes('satguru'))) ||
          (selectedTheme === 'naam-mahima' && (cat.includes('naam') || cat.includes('sumiran') || cat.includes('satnam'))) ||
          (selectedTheme === 'chetavani' && (cat.includes('chetav') || cat.includes('kaal') || cat.includes('jagriti'))) ||
          (selectedTheme === 'prem-bhakti' && (cat.includes('prem') || cat.includes('bhakti') || cat.includes('virah'))) ||
          (selectedTheme === 'maya-kaya' && (cat.includes('maya') || cat.includes('kaya') || cat.includes('nashwar'))) ||
          (selectedTheme === 'satya-aacharan' && (cat.includes('satya') || cat.includes('aacharan') || cat.includes('vivek'))) ||
          (selectedTheme === 'sadhu-sangati' && (cat.includes('sadhu') || cat.includes('sant') || cat.includes('sangat'))) ||
          (selectedTheme === 'antar-sumiran' && (cat.includes('antar') || cat.includes('dhyan') || cat.includes('yoga'))) ||
          (selectedTheme === 'creation-truth' && (cat.includes('creation') || cat.includes('amar') || cat.includes('srishti')));
        if (!matchesCategory) return false;
      }

      // 3. Keyword query match
      if (hasQuery) {
        const hiText = (sakhi.text.hi || '').toLowerCase();
        const pbText = (sakhi.text.pb || '').toLowerCase();
        const enText = (sakhi.text.en || '').toLowerCase();
        const hiBhav = (sakhi.bhavarth.hi || '').toLowerCase();
        const pbBhav = (sakhi.bhavarth.pb || '').toLowerCase();
        const enBhav = (sakhi.bhavarth.en || '').toLowerCase();
        const numStr = String(sakhi.number);

        const wordMeaningsMatch = sakhi.wordMeanings?.hi?.some(wm => 
          wm.word.toLowerCase().includes(lowQuery) || wm.meaning.toLowerCase().includes(lowQuery)
        );

        return hiText.includes(lowQuery) || 
               pbText.includes(lowQuery) || 
               enText.includes(lowQuery) ||
               hiBhav.includes(lowQuery) ||
               pbBhav.includes(lowQuery) ||
               enBhav.includes(lowQuery) ||
               wordMeaningsMatch ||
               numStr === lowQuery;
      }

      return true;
    });

    const matchedUlatvasis = (selectedGranth === 'all' || selectedGranth === 'Bijak') ? ulatvasiItems.filter(u => {
      if (!hasQuery) return selectedTheme === 'all' || selectedTheme === 'maya-kaya' || selectedTheme === 'chetavani';
      return (
        u.title[language].toLowerCase().includes(lowQuery) ||
        u.verse[language].toLowerCase().includes(lowQuery) ||
        u.mysticalUnveiling.deepMeaning[language].toLowerCase().includes(lowQuery) ||
        u.number.toString() === lowQuery
      );
    }) : [];

    return { sakhis: matchedSakhis, ulatvasis: matchedUlatvasis, isDefaultList: false };
  }, [searchQuery, selectedTheme, selectedGranth, language, ulatvasiItems]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await addSearchTerm(searchQuery.trim());
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Standardized Sacred Top Bar (Satyanaam ONLY) */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Top Navigation Controls Bar (Close Button shifted here) */}
      <div className="flex items-center justify-end px-1 mb-2">
        {onClose && (
          <button 
            onClick={onClose} 
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
            title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
          </button>
        )}
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-2xs"
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
        >
          <Search className="w-4 h-4" />
          {t.tabDeepSearch}
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight" style={{ color: theme.textPrimary }}>
          {t.deepSearchEngine}
        </h2>
        <p className="text-sm max-w-xl mx-auto opacity-70" style={{ color: theme.textSecondary }}>
          {t.deepSearchDesc}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="w-6 h-6 opacity-40 group-focus-within:opacity-100 transition-opacity" style={{ color: theme.sacredMaroon }} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isListening ? (language === 'pb' ? 'ਬੋਲੋ ਜੀ... ਸ਼ਬਦ ਸੁਣੇ ਜਾ ਰਹੇ ਹਨ...' : language === 'en' ? 'Listening... Speak your query...' : 'बोलें... आपकी वाणी से खोज हो रही है...') : t.searchPlaceholder}
            className={`w-full pl-14 pr-32 sm:pr-36 py-4 sm:py-5 rounded-3xl border-2 text-base sm:text-lg shadow-lg focus:ring-4 transition-all outline-none ${
              isListening ? 'ring-2 ring-red-400 border-red-500' : ''
            }`}
            style={{ 
              backgroundColor: theme.cardBg, 
              borderColor: isListening ? '#EF4444' : theme.cardBorder,
              color: theme.textPrimary,
              boxShadow: `0 10px 30px -10px ${theme.accentGold}20`
            }}
          />
          <div className="absolute inset-y-0 right-2.5 sm:right-3 flex items-center gap-1 sm:gap-2">
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition cursor-pointer"
                title={language === 'pb' ? 'ਸਾਫ਼ ਕਰੋ' : language === 'en' ? 'Clear query' : 'साफ़ करें'}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 opacity-40 hover:opacity-100" />
              </button>
            )}

            {/* Web Speech API Voice Search Button */}
            <button
              type="button"
              onClick={toggleListening}
              style={{
                backgroundColor: isListening ? '#EF4444' : theme.stepActiveBg,
                color: isListening ? '#FFFFFF' : theme.sacredMaroon,
                borderColor: isListening ? '#DC2626' : theme.accentGold,
              }}
              className={`p-2 sm:p-2.5 rounded-2xl border transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center ${
                isListening ? 'animate-pulse ring-2 ring-red-400' : 'hover:scale-105'
              }`}
              title={
                isListening
                  ? (language === 'pb' ? 'ਬੋਲਣਾ ਰੋਕੋ' : language === 'en' ? 'Stop Listening' : 'बोलना रोकें')
                  : (language === 'pb' ? 'ਬੋਲ ਕੇ ਖੋਜੋ (Voice Search)' : language === 'en' ? 'Voice Search' : 'बोलकर खोजें (वॉइस सर्च)')
              }
            >
              {isListening ? (
                <MicOff className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              ) : (
                <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
              )}
            </button>

            <button
              type="submit"
              className="px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer shrink-0"
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
            >
              {t.searchBtn}
            </button>
          </div>
        </form>

        {/* Real-time Voice Recognition Live Feedback */}
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-900 dark:text-amber-200 shadow-sm"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
              <span className="font-semibold italic truncate">
                {interimText
                  ? `"${interimText}..."`
                  : (language === 'pb'
                  ? 'ਆਪਣੀ ਆਵਾਜ਼ ਵਿੱਚ ਬੋਲੋ (ਉਦਾਹਰਣ: ਕਬੀਰ, ਮਾਇਆ, ਸਤਯਨਾਮ)...'
                  : language === 'en'
                  ? 'Speak now (e.g., "Kabir", "Satyanaam", "Maya")...'
                  : 'अपनी वाणी में बोलें (उदा: कबीर, माया, सत्यनाम)...')}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold shrink-0">
              {language === 'pb' ? 'ਪੰਜਾਬੀ ਵੌਇਸ' : language === 'en' ? 'Voice Active' : 'हिन्दी आवाज़'}
            </span>
          </motion.div>
        )}

        {voiceError && (
          <p className="text-xs text-red-500 text-center italic mt-2">
            {voiceError}
          </p>
        )}

        {/* History Chips */}
        {searchHistory.length > 0 && (
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5" style={{ color: theme.textSecondary }}>
                <History className="w-3.5 h-3.5" />
                {language === 'pb' ? 'ਹਾਲ ਹੀ ਦੀਆਂ ਖੋਜਾਂ (Recent)' : language === 'en' ? 'Recent Searches' : 'हाल की खोजें (Recent Searches)'}
              </span>
              <button
                onClick={clearHistory}
                className="text-[11px] font-medium opacity-60 hover:opacity-100 transition underline cursor-pointer"
                style={{ color: theme.sacredMaroon }}
              >
                {language === 'pb' ? 'ਸਾਫ਼ ਕਰੋ' : language === 'en' ? 'Clear history' : 'इतिहास साफ़ करें'}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {searchHistory.map((h, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(h)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl border text-xs font-medium hover:bg-amber-500/10 transition shadow-2xs active:scale-95 cursor-pointer backdrop-blur-md"
                  style={{ borderColor: theme.cardBorder, color: theme.textPrimary, backgroundColor: theme.cardBg }}
                >
                  <History className="w-3 h-3 opacity-60" style={{ color: theme.sacredMaroon }} />
                  <span>{h}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category / Theme Filter Pills */}
      <div className="space-y-3 p-4 rounded-3xl border shadow-sm backdrop-blur-md" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-80" style={{ color: theme.textPrimary }}>
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? 'साधना विषय / थीम अनुसार फ़िल्टर (Filter by Kabir Teachings)' : isPb ? 'ਵਿਸ਼ੇ ਅਨੁਸਾਰ ਫਿਲਟਰ' : 'Filter by Teachings Theme'}</span>
          </span>
          {(selectedTheme !== 'all' || selectedGranth !== 'all') && (
            <button
              onClick={() => { setSelectedTheme('all'); setSelectedGranth('all'); }}
              className="text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              {isHi ? 'फ़िल्टर हटाएं (Reset)' : 'Reset Filters'}
            </button>
          )}
        </div>

        {/* Theme Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {THEME_FILTERS.map(tf => {
            const isSelected = selectedTheme === tf.id;
            return (
              <button
                key={tf.id}
                type="button"
                onClick={() => setSelectedTheme(tf.id)}
                style={{
                  backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.cardBg,
                  color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                  borderColor: isSelected ? theme.buttonPrimaryBg : theme.cardBorder,
                }}
                className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <span>{tf.icon}</span>
                <span>{tf.title[language] || tf.title.hi}</span>
              </button>
            );
          })}
        </div>

        {/* Granth Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-1">
          <span className="text-[11px] font-bold opacity-60 mr-1 shrink-0" style={{ color: theme.textSecondary }}>
            {isHi ? 'ग्रंथ चयन:' : 'Select Granth:'}
          </span>
          {GRANTH_FILTERS.map(gf => {
            const isSelected = selectedGranth === gf.id;
            return (
              <button
                key={gf.id}
                type="button"
                onClick={() => setSelectedGranth(gf.id)}
                style={{
                  backgroundColor: isSelected ? theme.accentGoldLight : theme.cardBg,
                  borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                  color: isSelected ? theme.sacredMaroon : theme.textSecondary,
                }}
                className="px-2.5 py-1 rounded-lg border text-[11px] font-bold whitespace-nowrap transition cursor-pointer hover:bg-amber-500/10 shrink-0"
              >
                {gf.label[language] || gf.label.hi}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-4 border-b pb-4" style={{ borderColor: theme.cardBorder }}>
          <h3 className="text-xl font-bold font-serif" style={{ color: theme.textPrimary }}>
            {t.searchResults}
            <span className="ml-2 font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
              {results.sakhis.length} {isHi ? 'साखियाँ' : isPb ? 'ਸਾਖੀਆਂ' : 'Sakhis'}
              {results.ulatvasis.length > 0 && ` • ${results.ulatvasis.length} ${isHi ? 'उलटबांसियां' : 'Ulatbaasis'}`}
            </span>
          </h3>
        </div>

        <div className="space-y-8">
          {/* Sakhis Results */}
          {results.sakhis.length > 0 && (
            <div className="space-y-4">
              <h4 className="px-4 text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Scroll className="w-3 h-3" />
                {language === 'hi' ? 'पावन साखी' : 'Sacred Sakhis'}
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                  {results.sakhis.map((sakhi, idx) => (
                    <motion.div
                      key={sakhi.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => onSelectSakhi(sakhi)}
                      className="p-6 rounded-3xl border-2 space-y-4 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
                      style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                    >
                      {/* ... Sakhi Card content ... */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold border border-amber-100 shadow-inner">
                            {sakhi.number}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: theme.textSecondary }}>
                              {getLocalizedGranthaName(sakhi.grantha, language)} • {sakhi.categoryTitle[language]}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5" style={{ color: theme.accentGold }} />
                      </div>
                      <p className="text-lg font-serif leading-relaxed line-clamp-2" style={{ color: theme.textPrimary }}>
                        {sakhi.text[language]}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Ulatvasi Results */}
          {results.ulatvasis.length > 0 && (
            <div className="space-y-4">
              <h4 className="px-4 text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                {language === 'hi' ? 'उलटबांसी रहस्य' : 'Ulatvasi Paradoxes'}
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                  {results.ulatvasis.map((u, idx) => (
                    <motion.div
                      key={u.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => onSelectUlatvasi?.(u.id)}
                      className="p-6 rounded-3xl border-2 border-dashed backdrop-blur-md space-y-4 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
                      style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#8B2500] text-white flex items-center justify-center font-bold shadow-md">
                            {u.number}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60" style={{ color: theme.sacredMaroon }}>
                              {u.realmTitle[language]}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5" style={{ color: theme.sacredMaroon }} />
                      </div>
                      <p className="text-lg font-serif font-bold leading-relaxed line-clamp-2" style={{ color: theme.textPrimary }}>
                        {u.title[language]}
                      </p>
                      <p className="text-sm italic opacity-70 line-clamp-2" style={{ color: theme.textSecondary }}>
                        "{u.verse[language]}"
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {searchQuery && results.sakhis.length === 0 && results.ulatvasis.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-10 h-10 opacity-20" />
              </div>
              <p className="text-lg font-bold opacity-40" style={{ color: theme.textSecondary }}>
                {t.noResults}
              </p>
            </div>
          )}

          {!searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              <div className="p-8 rounded-3xl border-2 border-dashed flex flex-col items-center text-center space-y-4 opacity-50">
                <Library className="w-12 h-12" />
                <h4 className="font-bold">{t.exploreByGrantha}</h4>
                <p className="text-sm">{t.exploreByGranthaDesc}</p>
              </div>
              <div className="p-8 rounded-3xl border-2 border-dashed flex flex-col items-center text-center space-y-4 opacity-50">
                <Scroll className="w-12 h-12" />
                <h4 className="font-bold">{t.topicSearch}</h4>
                <p className="text-sm">{t.topicSearchDesc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
