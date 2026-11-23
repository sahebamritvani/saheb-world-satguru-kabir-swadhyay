import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  Check,
  Search,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Copy,
  Info,
  Flame,
  Feather,
  Music,
  Compass,
  ArrowLeft,
  X,
  Layers,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAppTheme } from '../theme/ThemeContext';
import {
  SGGS_KABIR_STATS,
  SGGS_KABIR_RAAGS,
  SggsKabirVerse
} from '../data/sggsKabirMetadata';
import { sacredHaptics } from '../services/haptics';
import { speechReciter } from '../services/audioDhun';
import { SacredLoader } from './SacredLoader';
import { PaginationControls } from './PaginationControls';
import { ADMIN_SLOTS_UPDATED_EVENT, getInjectedSggsVerses } from '../services/adminSlotInjectorStore';

interface SggsKabirBaniEngineProps {
  onBack?: () => void;
}

export const SggsKabirBaniEngine: React.FC<SggsKabirBaniEngineProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const { theme } = useAppTheme();

  const [activeTab, setActiveTab] = useState<'all' | 'salok' | 'shabad' | 'bavan-akhari' | 'dialogue' | 'raags' | 'history'>('all');
  const [selectedRaag, setSelectedRaag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [scriptMode, setScriptMode] = useState<'pb' | 'hi' | 'en' | 'tri'>('tri');
  const [expandedVerseId, setExpandedVerseId] = useState<string | null>('sggs-shabad-aval-allah');
  const [activeStepTab, setActiveStepTab] = useState<{ [verseId: string]: number }>({});
  const [copiedVerseId, setCopiedVerseId] = useState<string | null>(null);
  const [savedBookmarks, setSavedBookmarks] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('sahebworld_sggs_bookmarks');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [historyChapter, setHistoryChapter] = useState<0 | 1 | 2 | 3>(0);
  const [shlokJumpNumber, setShlokJumpNumber] = useState<string>('');
  const [shlokJumpError, setShlokJumpError] = useState<string | null>(null);

  const PAGE_SIZE = 25;
  const [baseVerses, setBaseVerses] = useState<SggsKabirVerse[]>([]);
  const [versesCollection, setVersesCollection] = useState<SggsKabirVerse[]>([]);
  const [isLoadingSggs, setIsLoadingSggs] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingSggs(true);
    import('../data/sggsKabirBaniData')
      .then((mod) => {
        if (!cancelled) {
          setBaseVerses(mod.SGGS_KABIR_VERSES_COLLECTION);
          setVersesCollection([...getInjectedSggsVerses(), ...mod.SGGS_KABIR_VERSES_COLLECTION]);
        }
      })
      .catch((err) => {
        console.error('Failed to lazy load SGGS Kabir Bani data:', err);
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoadingSggs(false);
        }
      });
    return () => {
      cancelled = true;
      speechReciter.stop();
    };
  }, []);

  useEffect(() => {
    const handleSlotsUpdated = () => {
      setVersesCollection([...getInjectedSggsVerses(), ...baseVerses]);
    };
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotsUpdated);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotsUpdated);
  }, [baseVerses]);

  const handleShlokJump = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shlokJumpNumber.trim()) return;
    const num = parseInt(shlokJumpNumber.trim(), 10);
    if (isNaN(num)) {
      setShlokJumpError(language === 'pb' ? 'ਸਹੀ ਸਲੋਕ ਨੰਬਰ ਦਰਜ ਕਰੋ' : 'सही सलोक संख्या दर्ज करें');
      setTimeout(() => setShlokJumpError(null), 3000);
      return;
    }

    const targetId = `sggs-salok-${num}`;
    const salokList = versesCollection.filter(v => v.category === 'salok');
    const salokIdx = salokList.findIndex(v => v.id === targetId || v.id.endsWith(`-${num}`));
    const found = salokIdx >= 0 ? salokList[salokIdx] : versesCollection.find(v => v.id === targetId || v.id.endsWith(`-${num}`));
    if (found) {
      sacredHaptics.lightTap();
      setShlokJumpError(null);
      setShlokJumpNumber('');
      setActiveTab('salok');
      setSelectedRaag('all');
      setSearchQuery('');
      if (salokIdx >= 0) {
        setCurrentPage(Math.floor(salokIdx / PAGE_SIZE) + 1);
      }
      setExpandedVerseId(found.id);
      setTimeout(() => {
        const el = document.getElementById(found.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    } else {
      setShlokJumpError(
        language === 'pb'
          ? `ਸਲੋਕ #${num} ਨਹੀਂ ਮਿਲਿਆ (੧ ਤੋਂ ੨੪੩ ਦਰਜ ਕਰੋ)`
          : `सलोक #${num} नहीं मिला (१ से २४३ दर्ज करें)`
      );
      setTimeout(() => setShlokJumpError(null), 3500);
    }
  };

  const toggleBookmark = (id: string) => {
    sacredHaptics.lightTap();
    setSavedBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      if (typeof window !== 'undefined') {
        localStorage.setItem('sahebworld_sggs_bookmarks', JSON.stringify(next));
      }
      return next;
    });
  };

  const handleCopy = (verse: SggsKabirVerse) => {
    sacredHaptics.lightTap();
    const textToCopy = `ੴ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ - ਭਗਤ ਕਬੀਰ ਜੀ ਦੀ ਪਾਵਨ ਬਾਣੀ\n\n${verse.moolGurmukhi.join('\n')}\n\n[ਦੇਵਨਾਗਰੀ]:\n${verse.moolDevanagari.join('\n')}\n\n[ਭਾਵਾਰਥ]: ${verse.bhavarth[language] || verse.bhavarth.hi}\n\n[ਪ੍ਰਮਾਣ]: ${verse.sggsReference}\n— ਸਾਹੇਬ ਵਰਲਡ (Saheb World)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedVerseId(verse.id);
    setTimeout(() => setCopiedVerseId(null), 2500);
  };

  const handleTogglePlayVerse = (verse: SggsKabirVerse) => {
    sacredHaptics.lightTap();
    if (isPlayingAudio && currentPlayingId === verse.id) {
      speechReciter.stop();
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
      return;
    }

    const linesToRecite = language === 'pb' ? verse.moolGurmukhi : verse.moolDevanagari;
    const meaning = verse.bhavarth[language] || verse.bhavarth.hi;
    const chunks = [...linesToRecite, meaning];

    setCurrentPlayingId(verse.id);
    setIsPlayingAudio(true);
    speechReciter.speak(chunks.join(' । '), language, () => {
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    });
  };

  const filteredVerses = useMemo(() => {
    return versesCollection.filter(v => {
      // Tab filter
      if (activeTab !== 'all' && activeTab !== 'raags' && activeTab !== 'history') {
        if (v.category !== activeTab) return false;
      }
      // Raag filter
      if (selectedRaag !== 'all' && v.raag && !v.raag.includes(selectedRaag)) {
        return false;
      }
      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        v.title.pb.toLowerCase().includes(q) ||
        v.title.hi.toLowerCase().includes(q) ||
        v.title.en.toLowerCase().includes(q) ||
        v.moolGurmukhi.some(l => l.toLowerCase().includes(q)) ||
        v.moolDevanagari.some(l => l.toLowerCase().includes(q)) ||
        v.bhavarth.hi.toLowerCase().includes(q) ||
        v.bhavarth.pb.toLowerCase().includes(q) ||
        v.ang.toString().includes(q)
      );
    });
  }, [versesCollection, activeTab, selectedRaag, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, selectedRaag, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredVerses.length / PAGE_SIZE));

  const paginatedVerses = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredVerses.slice(start, start + PAGE_SIZE);
  }, [filteredVerses, currentPage]);

  const handleSggsPageChange = (page: number) => {
    sacredHaptics.lightTap();
    setCurrentPage(page);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full pb-24">
      {/* Header Banner: Guru Granth Sahib & Satguru Kabir Saheb Concordance Engine */}
      <div
        style={{
          background: 'linear-gradient(135deg, #78350F 0%, #B45309 50%, #D97706 100%)',
          color: '#FFFFFF',
        }}
        className="rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-white"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold font-serif border border-white/20">
              <span>☬</span>
              <span>
                {language === 'pb'
                  ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਾਣੀ ਸੰਗਮ'
                  : 'श्री गुरु ग्रंथ साहिब जी एवं सतगुरु कबीर वाणी संगम'}
              </span>
            </div>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="px-3.5 py-1 rounded-xl bg-white/15 hover:bg-white/25 transition text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>{language === 'pb' ? 'ਵਾਪਸ' : 'वापस'}</span>
              </button>
            )}
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-black font-serif tracking-wide leading-tight">
              {language === 'pb'
                ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਭਗਤ ਕਬੀਰ ਜੀ ਦੀ ਪਾਵਨ ਬਾਣੀ'
                : 'श्री गुरु ग्रंथ साहिब जी में सतगुरु कबीर साहेब की पावन वाणी'}
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 font-serif max-w-3xl mt-1.5 leading-relaxed">
              {language === 'pb'
                ? 'ਪੰਚਮ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਵੱਲੋਂ ਸ੍ਰੀ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸੁਭਾਇਮਾਨ ੨੨੭ ਸ਼ਬਦ (੧੭ ਰਾਗ), ੨੪੩ ਸਲੋਕ, ਬਾਵਨ ਅੱਖਰੀ ਤੇ ਥਿਤੀ ਬਾਣੀ ਦਾ ਸਰਬੋਤਮ ਸੰਕਲਨ।'
                : 'पंचम पातशाह श्री गुरु अर्जुन देव जी द्वारा श्री आदि ग्रंथ साहिब में प्रतिष्ठित २२७ शब्द (१७ राग), २४३ सलोक, बावन अखरी एवं पावन पदों का प्रामाणिक दिव्य ज्ञान-इंजन।'}
            </p>
          </div>

          {/* Quick Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/20">
            <div className="bg-black/20 rounded-2xl p-2.5 border border-white/10 text-center">
              <span className="text-lg sm:text-xl font-mono font-black block text-amber-300">
                {SGGS_KABIR_STATS.totalShabads}
              </span>
              <span className="text-[10px] opacity-80 font-serif">
                {language === 'pb' ? 'ਪਾਵਨ ਸ਼ਬਦ / ਪਦੇ' : 'पावन शब्द / पद'}
              </span>
            </div>
            <div className="bg-black/20 rounded-2xl p-2.5 border border-white/10 text-center">
              <span className="text-lg sm:text-xl font-mono font-black block text-amber-300">
                {SGGS_KABIR_STATS.totalSaloks}
              </span>
              <span className="text-[10px] opacity-80 font-serif">
                {language === 'pb' ? 'ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਕੇ' : 'सलोक भगत कबीर जीउ के'}
              </span>
            </div>
            <div className="bg-black/20 rounded-2xl p-2.5 border border-white/10 text-center">
              <span className="text-lg sm:text-xl font-mono font-black block text-amber-300">
                {SGGS_KABIR_STATS.totalRaags}
              </span>
              <span className="text-[10px] opacity-80 font-serif">
                {language === 'pb' ? 'ਸ਼ਾਸਤਰੀ ਰਾਗ' : 'शास्त्रीय राग'}
              </span>
            </div>
            <div className="bg-black/20 rounded-2xl p-2.5 border border-white/10 text-center">
              <span className="text-lg sm:text-xl font-mono font-black block text-amber-300">
                ੫੪੧+
              </span>
              <span className="text-[10px] opacity-80 font-serif">
                {language === 'pb' ? 'ਕੁੱਲ ਪਾਵਨ ਬਾਣੀ ਅੰਗ' : 'कुल पावन श्लोक/पद'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Script Selector & Search Tool Strip */}
      <div
        style={{ backgroundColor: theme.cardBg }}
        className="rounded-2xl p-3.5 shadow-sm space-y-3"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'pb'
                  ? 'ਸ਼ਬਦ, ਸਲੋਕ, ਅੰਗ ਨੰਬਰ ਜਾਂ ਰਾਗ ਖੋਜੋ (ਜਿਵੇਂ: ਅਵਲਿ ਅਲਹ, ਰਸਨਾ, ਗਉੜੀ)...'
                  : 'शब्द, सलोक, अंग नंबर या राग खोजें (उदा: अवलि अलह, रसना, गउड़ी)...'
              }
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl bg-black/5 dark:bg-white/5 border-none focus:ring-2 focus:ring-amber-500 font-medium"
              style={{ color: theme.textPrimary }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Go to Shlok Number Jump Box */}
          <form 
            onSubmit={handleShlokJump}
            className="flex items-center gap-1.5 shrink-0 bg-amber-500/10 dark:bg-amber-400/10 p-1 rounded-xl border border-amber-500/25 w-full sm:w-auto justify-between sm:justify-start"
          >
            <div className="flex items-center gap-1 pl-1">
              <span className="text-[11px] font-serif font-black text-amber-900 dark:text-amber-200 whitespace-nowrap">
                {language === 'pb' ? 'ਸਲੋਕ ਨੰ.' : 'सलोक नं.'}
              </span>
            </div>
            <input
              type="number"
              min="1"
              max="243"
              value={shlokJumpNumber}
              onChange={(e) => setShlokJumpNumber(e.target.value)}
              placeholder="1-243"
              className="w-16 sm:w-18 px-2 py-1 rounded-lg border border-amber-500/30 bg-white dark:bg-zinc-800 text-xs font-bold font-mono focus:ring-2 focus:ring-amber-500 text-center"
              style={{ color: theme.textPrimary }}
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded-lg font-serif font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition flex items-center gap-1 cursor-pointer active:scale-95"
              title={language === 'pb' ? 'ਸਲੋਕ ਖੋਲ੍ਹੋ' : 'सलोक खोलें'}
            >
              <span>{language === 'pb' ? 'ਜਾਓ' : 'जाएं'}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </form>

          {/* Script Modes (Gurmukhi, Devanagari, Roman, 3-in-1) */}
          <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
            <span className="text-[11px] font-serif font-bold text-gray-500 mr-1 hidden sm:inline">
              {language === 'pb' ? 'ਲਿਪੀ:' : 'लिपि:'}
            </span>
            {[
              { id: 'tri' as const, label: '🌐 3-in-1' },
              { id: 'pb' as const, label: '☬ ਗੁਰਮੁਖੀ' },
              { id: 'hi' as const, label: '🪷 देवनागरी' },
              { id: 'en' as const, label: '🔤 Roman' },
            ].map((scr) => (
              <button
                key={scr.id}
                type="button"
                onClick={() => setScriptMode(scr.id)}
                className={`px-2.5 py-1 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer ${
                  scriptMode === scr.id
                    ? 'bg-[#8B2500] text-white shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-amber-500/10'
                }`}
              >
                {scr.label}
              </button>
            ))}
          </div>
        </div>

        {shlokJumpError && (
          <div className="p-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-700 dark:text-red-300 text-xs font-bold text-center animate-fadeIn shadow-xs">
            {shlokJumpError}
          </div>
        )}

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide pt-1">
          {[
            { id: 'all', label: language === 'pb' ? '🌟 ਸਭ ਪਾਵਨ ਬਾਣੀ' : '🌟 सम्पूर्ण वाणी' },
            { id: 'salok', label: language === 'pb' ? '📜 ਸਲੋਕ (੨੪੩)' : '📜 सलोक (२४३)' },
            { id: 'shabad', label: language === 'pb' ? '🎶 ਰਾਗ ਸ਼ਬਦ' : '🎶 राग शब्द' },
            { id: 'bavan-akhari', label: language === 'pb' ? '🔤 ਬਾਵਨ ਅਖਰੀ' : '🔤 बावन अखरी' },
            { id: 'dialogue', label: language === 'pb' ? '👑 ਗੁਰੂ ਸਾਹਿਬਾਨ ਸੰਵਾਦ' : '👑 गुरु साहिबान संवाद' },
            { id: 'raags', label: language === 'pb' ? '🎼 ੧੭ ਰਾਗ ਸੂਚੀ' : '🎼 १७ राग सूची' },
            { id: 'history', label: language === 'pb' ? '🏛️ ਪਾਵਨ ਇਤਿਹਾਸ' : '🏛️ पावन इतिहास' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-amber-500/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW 1: 17 RAAGS OVERVIEW */}
      {activeTab === 'raags' && (
        <div className="space-y-4">
          <div
            style={{ backgroundColor: theme.cardBg }}
            className="rounded-3xl p-5 sm:p-6 shadow-sm space-y-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b pb-3 border-amber-500/20">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-black text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb' ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ੧੭ ਰਾਗਾਂ ਵਿੱਚ ਕਬੀਰ ਬਾਣੀ' : 'श्री गुरु ग्रंथ साहिब जी के १७ रागों में कबीर वाणी'}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full">
                ਕੁੱਲ ੨੨੭ ਸ਼ਬਦ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SGGS_KABIR_RAAGS.map((r, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setSelectedRaag(r.namePb);
                    setActiveTab('all');
                  }}
                  className="p-3.5 rounded-2xl border border-amber-500/15 hover:border-amber-500 bg-amber-500/5 hover:bg-amber-500/10 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#8B2500] text-white font-mono font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif font-black text-sm text-gray-800 dark:text-gray-100 group-hover:text-amber-700 transition">
                        {language === 'pb' ? `ਰਾਗੁ ${r.namePb}` : `राग ${r.nameHi}`}
                      </h4>
                      <span className="text-[10px] text-gray-500 block font-mono">
                        {language === 'pb' ? `ਅੰਗ ${r.angStart} ਤੋਂ` : `अंग ${r.angStart} से`}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200">
                    {r.count} {language === 'pb' ? 'ਸ਼ਬਦ' : 'पद'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: SACRED HISTORY & CONCORDANCE - THREE-CHAPTER INTERACTIVE ENCYCLOPEDIA */}
      {activeTab === 'history' && (
        <div
          style={{ backgroundColor: theme.cardBg }}
          className="rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 font-serif leading-relaxed border border-amber-500/10 backdrop-blur-md"
        >
          {/* Main Title Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg sm:text-2xl" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb'
                    ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ'
                    : 'श्री गुरु ग्रंथ साहिब जी में सतगुरु कबीर साहेब की पावन वाणी'}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                  {language === 'pb' 
                    ? 'ਪੂਰਨ ਇਤਿਹਾਸਕ ਸੰਦਰਭ, ਪ੍ਰਮਾਣਿਕ ਅੰਕੜੇ ਅਤੇ ੧੭ ਰਾਗਾਂ ਦਾ ਅਧਿਆਤਮਿਕ ਸੰਕਲਨ' 
                    : 'ऐतिहासिक संदर्भ, प्रमाणिक विवरण एवं १७ शास्त्रीय रागों का संपूर्ण वर्गीकरण'}
                </p>
              </div>
            </div>

            {/* Chapter Swapper Pills */}
            <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-2xl self-start sm:self-auto border border-amber-500/10">
              {([0, 1, 2, 3] as const).map((ch) => (
                <button
                  key={ch}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setHistoryChapter(ch);
                  }}
                  style={{
                    backgroundColor: historyChapter === ch ? theme.buttonPrimaryBg : 'transparent',
                    color: historyChapter === ch ? theme.buttonPrimaryText : theme.textSecondary,
                  }}
                  className="px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap"
                >
                  {ch === 0 ? (language === 'pb' ? 'ਸਟੀਕ' : 'सटीक') : (language === 'pb' ? `ਅਧਿ. ${ch}` : `अध्याय ${ch}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Content Router */}
          <div className="space-y-6 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
            
            {/* CHAPTER 0: SATEEK INTRODUCTION (Provided by User) */}
            {historyChapter === 0 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-mono font-black text-lg">ਸਟੀਕ:</span>
                  <h4 className="font-serif font-black text-base sm:text-lg text-amber-800 dark:text-amber-300">
                    {language === 'pb' 
                      ? 'ਸਲੋਕ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ (ਜੀਵਨ ਪਰਿਚੈ)' 
                      : 'सलोक सतगुरु कबीर साहेब (जीवन परिचय)'}
                  </h4>
                </div>

                <div className="space-y-4 text-justify leading-relaxed font-serif">
                  {language === 'pb' ? (
                    <>
                      <p>ਕਬੀਰ ਜੀ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਭਗਤਾਂ ਵਿਚੋਂ ਇਕ ਹੋਏ ਹਨ। ਆਪ ਜੀ ਦਾ ਜਨਮ ਇਕ ਵਿਧਵਾ ਬ੍ਰਾਹਮਣੀ ਦੇ ਉਦਰ ਤੋਂ ਜੇਠ ਸੁਦੀ ੧੫ ਸੰਮਤ ੧੪੫੫ ਨੂੰ ਬਨਾਰਸ ਵਿਚ ਹੋਇਆ। ਇਨ੍ਹਾਂ ਦੀ ਮਾਤਾ ਨੇ ਇਸ ਨਵੇਂ ਜਨਮੇ ਬਾਲਕ ਨੂੰ ਬਨਾਰਸ ਲਾਗੇ ਇਕ ਨਹਿਰ ਪਾਸ ਰੱਖ ਦਿੱਤਾ। ਉਥੋਂ ਇਸ ਨਵ-ਜੰਮੇ ਬਾਲਕ ਨੂੰ ਇਕ ਨੀਰੂ ਜੁਲਾਹੇ ਨੇ ਚੁੱਕ ਕੇ ਆਪਣੇ ਘਰ ਲੈ ਆਂਦਾ। ਨੀਰੂ ਦੀ ਇਸਤ੍ਰੀ ਨੇ ਇਸ ਨੂੰ ਆਪਣੇ ਪੁੱਤਰ ਸਮਾਨ ਹੀ ਦੇਖ ਭਾਲ ਕਰ ਕੇ ਪਾਲਿਆ।</p>
                      <p>ਉਪਰੰਤ ਸਮੇਂ ਅਨੁਸਾਰ ਇਸ ਦਾ ਮੁਸਲਮਾਨੀ ਮੱਤ ਅਨੁਸਾਰ ਕਬੀਰ ਨਾਮ ਰਖਿਆ ਗਿਆ ਅਤੇ ਇਸਲਾਮ ਦੀ ਸਿਖਿਆ ਦਿੱਤੀ ਗਈ। ਪਰ ਕਬੀਰ ਜੀ ਦਾ ਸੁਭਾਵਕ ਹੀ ਝੁਕਾਉ ਹਿੰਦੂ ਮੱਤ ਵਲ ਸੀ। ਜਦ ਜਵਾਨ ਹੋਏ ਤਾਂ ਇਹਨਾਂ ਦਾ ਵਿਆਹ ਲੋਈ ਨਾਮ ਦੀ ਇਸਤ੍ਰੀ ਨਾਲ ਹੋਇਆ। ਜਿਸ ਤੋਂ ਇਹਨਾਂ ਦੇ ਘਰ ਇਕ ਪੁੱਤਰ ਨੇ ਜਨਮ ਲਿਆ, ਜਿਸ ਦਾ ਨਾਮ ਕਮਾਲਾ ਰਖਿਆ ਗਿਆ।</p>
                      <p>ਕਬੀਰ ਜੀ ਨੇ ਉਸ ਸਮੇਂ ਦੇ ਬਨਾਰਸ ਵਿਚ ਪ੍ਰਸਿੱਧ ਭਗਤ ਰਾਮਾ ਨੰਦ ਜੀ ਤੋਂ ਗੁਰ-ਦੀਖਿਆ ਰਾਮ ਨਾਮ ਦਾ ਉਪਦੇਸ਼ ਲਿਆ ਅਤੇ ਵੈਸ਼ਨੋ ਮੱਤ ਗ੍ਰਹਿਣ ਕੀਤਾ। ਉਸ ਸਮੇਂ ਕਾਂਸ਼ੀ ਵਿਦਵਾਨਾਂ ਦਾ ਕੇਂਦਰ ਹੋਣ ਕਰਕੇ ਕਬੀਰ ਜੀ ਨੂੰ ਸਾਰੇ ਮਤ ਮਤਾਂਤਰਾਂ ਦੇ ਨਿਯਮ ਜਾਨਣ ਦਾ ਅਤੇ ਵਿਦਵਾਨਾਂ ਨਾਲ ਚਰਚਾ ਕਰਨ ਦਾ ਚੰਗਾ ਸਮਾਂ ਮਿਲ ਗਿਆ। ਜਿਸ ਕਰਕੇ ਚਤੁਰ ਹੋ ਗਏ ਅਤੇ ਫਿਰ ਪੂਰਨ ਗਿਆਨੀਆਂ ਦੀ ਸੰਗਤ ਕਰਕੇ ਆਪ ਜੀ ਬ੍ਰਹਮ ਗਿਆਨੀ ਦੀ ਪਦਵੀ ਨੂੰ ਪਹੁੰਚ ਗਏ ਅਤੇ ਆਪਣੇ ਅਨੇਕਾਂ ਸੰਗੀਆਂ ਨੂੰ ਗਿਆਨ ਮਾਰਗ ਦਰਸਾਇਆ।</p>
                      <p>ਬਾਦਸ਼ਾਹ ਸਿਕੰਦਰ ਲੋਧੀ ਜਦ ਸੰਮਤ ੧੫੪੭ ਵਿਚ ਬਨਾਰਸ ਆਇਆ ਤਾਂ ਕਬੀਰ ਜੀ ਨੂੰ ਈਰਖਾਵਾਦੀ ਮੁਸਲਮਾਨਾਂ ਬਹੁਤ ਕਸ਼ਟ ਪਹੁੰਚਾਇਆ। ਜਿਸ ਦਾ ਕੁਝ ਵਰਣਨ ਕਬੀਰ ਜੀ ਨੇ ਆਪਣੇ ਇਸ ਸ਼ਬਦ ਦੁਆਰਾ ਕੀਤਾ ਹੈ- ਭੁਜਾ ਬਾਂਧਿ ਭਿਲਾ ਕਰਿ ਡਾਰਿਓ॥ (ਰਾਗ ਗੋਂਡ ਕਬੀਰ ਜੀ)</p>
                      <p>ਕਬੀਰ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਲੇ ਦਿਨ ਮਗਹਰ ਜ਼ਿਲਾ ਗੋਰਖ ਪੁਰ ਜਾ ਬਤੀਤ ਕੀਤੇ। ਉਥੇ ਹੀ ਆਪ ਜੀ ਦਾ ਦੇਹਾਂਤ ਸੰਮਤ ੧੫੭੫ ਵਿਚ ਹੋਇਆ।</p>
                      <p>ਕਬੀਰ ਜੀ ਦੀ ਬਾਣੀ ਦਾ ਸੰਗ੍ਰਹਿ ਇਹਨਾਂ ਦੇ ਚੇਲਿਆਂ ਨੇ ਕੀਤਾ, ਇਸ ਸੰਗ੍ਰਹਿ ਪੋਥੀ ਦਾ ਨਾਮ 'ਕਬੀਰ ਬੀਜਕ' ਹੈ, ਜੋ ਇਸ ਦੇ ਇਕ ਧਰਮ ਦਾਸ ਚੇਲੇ ਨੇ ਸੰਮਤ ੧੫੨੧ ਵਿਚ ਲਿਖਿਆ ਸੀ ਅਤੇ ਰਿਆਸਤ ਰੀਵਾ ਵਿਚ ਰਖਿਆ ਹੋਇਆ ਹੈ।</p>
                      <p>ਕਬੀਰ ਜੀ ਦੀ ਬਹੁਤ ਸਾਰੀ ਬਾਣੀ ਸ਼ਬਦਾਂ ਤੇ ਸਲੋਕਾਂ ਵਿਚ ਉਚਾਰਨ ਕੀਤੀ ਹੋਈ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿਚ ਦਰਜ ਹੈ, ਜਿਨ੍ਹਾਂ ਦੀ ਕੁਲ ਗਿਣਤੀ ੫੩੪ ਹੈ। ਇਸ ਪੁਸਤਕ ਵਿਚ ਕੇਵਲ ਆਪ ਜੀ ਦੇ ੨੪੩ ਸਲੋਕਾਂ ਦਾ ਹੀ ਸੁਖੈਨ ਭਾਸ਼ਾ ਵਿਚ ਟੀਕਾ ਪਾਠਕਾਂ ਦੀ ਭੇਟ ਹੈ। ਇਹ ਸਲੋਕ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪੰਨਾ ੧੩੬੪ ਤੋਂ ਆਰੰਭ ਹੁੰਦੇ ਹਨ।</p>
                    </>
                  ) : (
                    <>
                      <p>सतगुरु कबीर साहेब भारत के प्रसिद्ध संतों व आध्यात्मिक मार्गदर्शकों में सर्वोच्च स्थान रखते हैं। आपका प्राकट्य ज्येष्ठ सुदी १५ संवत १४५५ को काशी के पावन लहरतारा सरोवर पर कमल पुष्प पर हुआ। वहां से इस नवजात दिव्य बालक को नीरू नामक जुलाहे ने उठा लिया और अपने घर ले आया। नीरू की पत्नी (नीमा) ने इनका पालन-पोषण किया।</p>
                      <p>समय के अनुसार आपका नाम कबीर (सर्वश्रेष्ठ/महान) रखा गया। सतगुरु कबीर साहेब का स्वाभाविक झुकाव सत्य, नाम-सुमिरन और आध्यात्मिक ज्ञान की ओर था। आपका विवाह माता लोई से हुआ এবং इनके घर पुत्र कमाल व पुत्री कमाली ने जन्म लिया।</p>
                      <p>सतगुरु कबीर साहेब ने काशी में स्वामी रामानंद जी से गुरु-दीक्षा ली और राम नाम (सत्यनाम) का मर्म उजागर किया। आपने सभी मत-मतांतरों के पाखंड, कर्मकांड और बाह्य आडंबरों का निर्भीकता से खंडन किया और जनमानस को सहज समाधि और सत्य ज्ञान का मार्ग दिखाया।</p>
                      <p>बादशाह सिकंदर लोदी जब संवत १५४७ में बनारस आया तो ईर्ष्यालु लोगों ने सतगुरु कबीर साहेब को अनेक कष्ट पहुँचाने के प्रयास किए, जिनका वर्णन सतगुरु कबीर साहेब ने अपने इस शब्द द्वारा किया है- "भुजा बांधि भिला करि डारिओ" (राग गोंड)।</p>
                      <p>सतगुरु कबीर साहेब ने अपना नश्वर चोला मगहर (जिला संतकबीरनगर) में संवत १५७५ में त्यागा, जहां केवल सुगंधित पुष्प प्राप्त हुए।</p>
                      <p>सतगुरु कबीर साहेब की पावन वाणी का प्रामाणिक संग्रह 'बीजक' के रूप में धर्मदास जी ने संकलित किया।</p>
                      <p>सतगुरु कबीर साहेब की पावन वाणी श्री गुरु ग्रंथ साहिब जी में अत्यंत आदरपूर्वक दर्ज है, जिनकी कुल संख्या ५३४ से अधिक है। इसमें आपके २४३ पावन सलोक श्री गुरु ग्रंथ साहिब जी के अंग १३६४ से आरंभ होते हैं।</p>
                    </>
                  )}
                </div>
              </div>
            )}
            {historyChapter === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-mono font-black text-lg">Chapter 1:</span>
                  <h4 className="font-serif font-black text-base sm:text-lg text-amber-800 dark:text-amber-300">
                    {language === 'pb' 
                      ? 'ਇਤਿਹਾਸਕ ਸੰਦਰਭ ਅਤੇ ਸੰਕਲਨ (Historical Context)' 
                      : 'इतिहासकार संदर्भ और संकलन (Historical Context)'}
                  </h4>
                </div>

                <div className="space-y-4 text-justify leading-relaxed">
                  <p>
                    {language === 'pb' ? (
                      <strong>ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ</strong>
                    ) : (
                      <strong>श्री गुरु ग्रंथ साहिब जी</strong>
                    )}
                    {language === 'pb'
                      ? ' ਸਿੱਖ ਧਰਮ ਦਾ ਸਭ ਤੋਂ ਪਵਿੱਤਰ, ਸਰਵੋੱਚ ਅਤੇ ਜਗਤ-ਜੋਤੀ ਪਰਮੇਸ਼ੁਰ ਸਵਰੂਪ ਗ੍ਰੰਥ ਹੈ। ਇਸ ਪਵਿੱਤਰ ਗ੍ਰੰਥ ਦੀ ਸੰਯੋਜਨਾ ਸੰਨ ੧ବ੦੪ ਵਿੱਚ ਪੰਚਮ ਪਾਤਸ਼ਾਹ, ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ \'ਆਦਿ ਗ੍ਰੰਥ\' ਦੇ ਰੂਪ ਵਿੱਚ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ, ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ ਕੀਤੀ ਸੀ।'
                      : ' सिख धर्म का सबसे पवित्र, सर्वोच्च और जगत-ज्योति परमेश्वर स्वरूप ग्रंथ है। इस पवित्र ग्रंथ की संयोजना सन १६०४ में पांचवें पातशाह, श्री गुरु अर्जुन देव जी ने \'आदि ग्रंथ\' के रूप में की थी।'}
                  </p>

                  <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 italic font-serif leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb'
                      ? '“ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਜਦੋਂ ਵੱਖ-ਵੱਖ ਧਰਮੀ ਪੁਰਸ਼ਾਂ, ਸੰਤਾਂ ਅਤੇ ਭਗਤਾਂ ਦੀ ਬਾਣੀ ਨੂੰ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਨ ਦਾ ਵਿਚਾਰ ਕੀਤਾ, ਤਾਂ ਉਨ੍ਹਾਂ ਨੇ ਦੇਖਿਆ ਕਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਪਰਮਾਤਮਾ ਦੇ ਨਿਰਗੁਣ ਰੂਪ, ਜ਼ਾਤ-ਪਾਤ ਦੇ ਖੰਡਨ, ਬਾਹਰੀ ਅਡੰਬਰਾਂ ਦੇ ਕਰੜੇ ਵਿਰੋਧ ਅਤੇ ਕੇਵਲ ਸੱਚੇ ਧਰਮ (ਸਤਯਨਾਮ ਸਿਮਰਨ) \'ਤੇ ਅਧਾਰਿਤ ਹੈ। ਇਹ ਵਿਚਾਰਧਾਰਾ ਗੁਰਮਤਿ (ਸਿੱਖ ਦਰਸ਼ਨ) ਦੇ ਬਿਲਕੁਲ ਅਨੁਕੂਲ ਸੀ।”'
                      : '“गुरु अर्जुन देव जी ने जब धर्मी पुरुषों, संतों और भगतों की वाणी को इसमें शामिल करने का विचार किया, तब उन्होंने देखा कि सतगुरु कबीर साहेब जी की वाणी परमात्मा के निरगुण रूप, जात-पात के खंडन, बाह्य आडंबरों के विरोध और केवल सच्चा धरम (सत्य नामस्मरण) पर आधारित है। यह विचारधारा गुरु मत (सिख दर्शन) के बिल्कुल अनुरूप थी।”'}
                  </div>

                  <p>
                    {language === 'pb'
                      ? 'ਇਸੇ ਕਰਕੇ, ਸ੍ਰੀ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ ਸਾਰੇ ੧੫ ਭਗਤਾਂ ਵਿੱਚੋਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਨੂੰ ਸਭ ਤੋਂ ਉੱਚਾ, ਆਦਰਯੋਗ ਅਤੇ ਵਿਸ਼ਿਸ਼ਟ ਸਥਾਨ ਦਿੱਤਾ ਗਿਆ। ਇਹ ਸੰਗਮ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਸੱਚੀ ਅਧਿਆਤਮਿਕਤਾ ਕਿਸੇ ਖ਼ਾਸ ਵਰਗ ਜਾਂ ਫ਼ਿਰਕੇ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ ਹੈ, ਬਲਕਿ ਇਹ ਸਰਬ-ਸਾਂਝੀ ਹੈ।'
                      : 'इसीलिए, सभी १५ भक्तों में से सतगुरु कबीर साहेब की वाणी को गुरु ग्रंथ साहिब जी में सबसे ऊंचा और विशिष्ट स्थान दिया गया। यह दिव्य समागम इस बात का प्रत्यक्ष प्रमाण है कि सत्य केवल एक है और वह किसी भौगोलिक सीमा या जाति के बंधन में नहीं बंधा है।'}
                  </p>
                </div>

                {/* Aesthetic Quote Block */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 to-orange-600/10 border-l-4 border-amber-500 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-extrabold block">
                    {language === 'pb' ? 'ਗੁਰੂ ਸ਼ਬਦ ਮਰਯਾਦਾ' : 'गुरु शब्द मर्यादा'}
                  </span>
                  <p className="text-xs sm:text-sm font-bold" style={{ color: theme.sacredMaroon }}>
                    {language === 'pb'
                      ? 'ਲੋਗੁ ਜਾਨੈ ਇਹੁ ਗੀਤੁ ਹੈ ਇਹੁ ਤਉ ਬ੍ਰਹਮ ਬੀਚਾਰ ॥ (ਅੰਗ ੩੩੫)'
                      : 'लोगु जानै इहु गीतु है इहु तਉ ब्रह्म बीचार ॥ (अंग ३३५)'}
                  </p>
                </div>
              </div>
            )}

            {/* CHAPTER 2: STATISTICS */}
            {historyChapter === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-mono font-black text-lg">Chapter 2:</span>
                  <h4 className="font-serif font-black text-base sm:text-lg text-amber-800 dark:text-amber-300">
                    {language === 'pb' 
                      ? 'ਬਾਣੀ ਦਾ ਪ੍ਰਮਾਣਿਕ ਵੇਰਵਾ (Hymn Count & Statistics)' 
                      : 'वाणी का प्रमाणिक विवरण (Hymn Count & Statistics)'}
                  </h4>
                </div>

                <p>
                  {language === 'pb'
                    ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਸਭ ਤੋਂ ਵੱਧ ਸੰਖਿਆ ਵਿੱਚ ਦਰਜ ਹੈ। ਸਮੂਹ ਭਗਤਾਂ ਵਿੱਚੋਂ ਉਨ੍ਹਾਂ ਦਾ ਯੋਗਦਾਨ ਸਭ ਤੋਂ ਵੱਡਾ ਅਤੇ ਵਿਸ਼ਾਲ ਹੈ:'
                    : 'श्री गुरु ग्रंथ साहिब जी में सतगुरु कबीर साहेब की वाणी सबसे ज्यादा संख्या में दर्ज है। उनका योगदान किसी भी अन्य भक्त से कहीं अधिक है:'}
                </p>

                {/* Statistic Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-amber-700 dark:text-amber-300 block">
                      227
                    </span>
                    <span className="text-xs font-serif font-bold text-gray-700 dark:text-gray-300 block">
                      {language === 'pb' ? 'ਕੁੱਲ ਸ਼ਬਦ / ਪਦੇ' : 'कुल शब्द / पद'}
                    </span>
                    <span className="text-[10px] text-gray-500 block">
                      (Total Shabads/Padas)
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-amber-700 dark:text-amber-300 block">
                      237
                    </span>
                    <span className="text-xs font-serif font-bold text-gray-700 dark:text-gray-300 block">
                      {language === 'pb' ? 'ਕੁੱਲ ਸਲੋਕ (Couplets)' : 'कुल सलोक (Couplets)'}
                    </span>
                    <span className="text-[10px] text-gray-500 block">
                      (Sakhis/Couplets)
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-amber-700 dark:text-amber-300 block">
                      ~544
                    </span>
                    <span className="text-xs font-serif font-bold text-gray-700 dark:text-gray-300 block">
                      {language === 'pb' ? 'ਕੁੱਲ ਬਾਣੀ ਅੰਗ (Hymns)' : 'कुल सयुंक्त वाणी (Hymns)'}
                    </span>
                    <span className="text-[10px] text-gray-500 block">
                      (Approx Combined Verses)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 space-y-2 border border-amber-500/10">
                  <h5 className="font-serif font-black text-sm text-amber-700 dark:text-amber-300">
                    📜 {language === 'pb' ? 'ਵਿਸ਼ੇਸ਼ ਵੱਡੀਆਂ ਰਚਨਾਵਾਂ (Large Compositions):' : 'विशेष बड़ी रचनाएँ (Large Compositions):'}
                  </h5>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {language === 'pb'
                      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਦੀ ਇੱਕ ਸਭ ਤੋਂ ਵੱਡੀ ਵਿਸ਼ੇਸ਼ਤਾ ਇਹ ਹੈ ਕਿ ਇਸ ਵਿੱਚ \'ਬਾਵਨ ਅੱਖਰੀ\' (Bavan Akhree - ਅੰਗ ੩੪੦) ਅਤੇ \'ਥਿਤੀ\' (Thiti - ਅੰਗ ੩੪੩) ਵਰਗੀਆਂ ਵਿਸ਼ਾਲ ਰਚਨਾਵਾਂ ਵੀ ਦਰਜ ਹਨ। ਇਹ ਰਚਨਾਵਾਂ ਆਤਮ-ਗਿਆਨ, ਅੱਖਰ-ਭੇਦ, ਅਤੇ ਬ੍ਰਹਮ ਵਿਚਾਰ ਨੂੰ ਬਹੁਤ ਹੀ ਸਰਲ ਪਰ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ ਵਿੱਚ ਸਮਝਾਉਂਦੀਆਂ ਹਨ।'
                      : 'सतगुरु कबीर साहेब की वाणी की एक सबसे बड़ी विशेषता यह है कि इसमें \'बावन अखरी\' (Bavan Akhree) और \'थिती\' (Thiti) जैसी बड़ी रचनाएं भी दर्ज हैं, जो आत्म-ज्ञान, संसार की अनित्यता और अक्षर-भेद को अत्यंत गहराई से समझाती हैं।'}
                  </p>
                </div>
              </div>
            )}

            {/* CHAPTER 3: RAAG & ANG CLASSIFICATION */}
            {historyChapter === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-mono font-black text-lg">Chapter 3:</span>
                  <h4 className="font-serif font-black text-base sm:text-lg text-amber-800 dark:text-amber-300">
                    {language === 'pb' 
                      ? 'ਰਾਗ ਅਤੇ ਅੰਗ ਵਰਗੀਕਰਨ (Raag & Ang Pages)' 
                      : 'राग और अंग (पृष्ठ संख्या) वर्गीकरण'}
                  </h4>
                </div>

                <p className="leading-relaxed">
                  {language === 'pb'
                    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਨੂੰ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਵੱਖ-ਵੱਖ \'ਅੰਗਾਂ\' (ਪੰਨਿਆਂ) \'ਤੇ ਉਨ੍ਹਾਂ ਦੀ ਰਾਗ-ਵਿਵਸਥਾ ਅਨੁਸਾਰ ਸੰਕਲਿਤ ਕੀਤਾ ਗਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਕੁੱਲ ੧੭ ਮੁੱਖ ਰਾਗਾਂ ਵਿੱਚ ਦਰਜ ਹੈ:'
                    : 'सतगुरु कबीर साहेब की वाणी को श्री गुरु ग्रंथ साहिब जी के विभिन्न \'अंगों\' (पृष्ठों) पर उनकी राग-व्यवस्था के अनुसार दर्ज किया गया है। सतगुरु कबीर साहेब की वाणी कुल १७ मुख्य रागों में निबद्ध है:'}
                </p>

                {/* Raag & Ang Details Table Grid */}
                <div className="border border-amber-500/25 rounded-2xl overflow-hidden shadow-inner">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#8B2500] text-white p-3 text-xs sm:text-sm font-black font-serif text-center">
                    <div className="col-span-2">#</div>
                    <div className="col-span-5 text-left pl-3">{language === 'pb' ? 'ਰਾਗ ਦਾ ਨਾਮ' : 'राग का नाम'}</div>
                    <div className="col-span-5">{language === 'pb' ? 'ਪਾਵਨ ਅੰਗ ਸੀਮਾ' : 'पावन अंग सीमा'}</div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-amber-500/15 max-h-[360px] overflow-y-auto scrollbar-thin text-center text-xs font-semibold">
                    {[
                      { num: 1, hi: 'राग गउड़ी', pb: 'ਰਾਗੁ ਗਉੜੀ', range: 'Ang 323 to 345', note: 'Includes Bavan Akhree & Thiti' },
                      { num: 2, hi: 'राग आसा', pb: 'ਰਾਗੁ ਆਸਾ', range: 'Ang 475 to 484', note: '' },
                      { num: 3, hi: 'राग गूजरी', pb: 'ਰਾਗੁ ਗੂਜਰੀ', range: 'Ang 524', note: '' },
                      { num: 4, hi: 'राग सोरठि', pb: 'ਰਾਗੁ ਸੋਰਠਿ', range: 'Ang 654 to 656', note: '' },
                      { num: 5, hi: 'राग धनासरी', pb: 'ਰਾਗੁ ਧਨਾਸਰੀ', range: 'Ang 691 to 692', note: '' },
                      { num: 6, hi: 'राग तिलंग', pb: 'ਰਾਗੁ ਤਿਲੰਗ', range: 'Ang 727', note: '' },
                      { num: 7, hi: 'राग सूही', pb: 'ਰਾਗੁ ਸੂਹੀ', range: 'Ang 792 to 793', note: '' },
                      { num: 8, hi: 'राग बिलावलु', pb: 'ਰਾਗੁ ਬਿਲਾਵਲੁ', range: 'Ang 855 to 858', note: '' },
                      { num: 9, hi: 'राग गोंड', pb: 'ਰਾਗੁ ਗੋਂਡ', range: 'Ang 870 to 873', note: '' },
                      { num: 10, hi: 'राग रामकली', pb: 'ਰਾਗੁ ਰਾਮਕਲੀ', range: 'Ang 968 to 972', note: '' },
                      { num: 11, hi: 'राग मारू', pb: 'ਰਾਗੁ ਮਾਰੂ', range: 'Ang 1102 to 1106', note: '' },
                      { num: 12, hi: 'राग केदारा', pb: 'ਰਾਗੁ ਕੇਦਾਰਾ', range: 'Ang 1123 to 1124', note: '' },
                      { num: 13, hi: 'राग भैरउ', pb: 'ਰਾਗੁ ਭੈਰਉ', range: 'Ang 1157 to 1162', note: '' },
                      { num: 14, hi: 'राग बसंतु', pb: 'ਰਾਗੁ ਬਸੰਤੁ', range: 'Ang 1193 to 1196', note: '' },
                      { num: 15, hi: 'राग सारंग', pb: 'ਰਾਗੁ ਸਾਰੰਗ', range: 'Ang 1251 to 1252', note: '' },
                      { num: 16, hi: 'राग मलਾਰ', pb: 'ਰਾਗੁ ਮਲਾਰ', range: 'Ang 1292', note: '' },
                      { num: 17, hi: 'राग प्रभाती', pb: 'ਰਾਗੁ ਪ੍ਰਭਾਤੀ', range: 'Ang 1349 to 1350', note: '' },
                    ].map((row) => (
                      <div key={row.num} className="grid grid-cols-12 p-2.5 items-center hover:bg-amber-500/5 transition">
                        <div className="col-span-2 font-mono font-bold text-amber-700 dark:text-amber-400">{row.num}</div>
                        <div className="col-span-5 text-left pl-3 font-serif font-black text-stone-800 dark:text-stone-200">
                          {language === 'pb' ? row.pb : row.hi}
                        </div>
                        <div className="col-span-5 font-mono text-gray-600 dark:text-gray-300">
                          <span className="bg-amber-500/10 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-amber-800 dark:text-amber-200 border border-amber-500/10">
                            {row.range}
                          </span>
                          {row.note && (
                            <span className="block text-[9px] text-amber-600 dark:text-amber-400 mt-1 italic font-serif">
                              ({row.note})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salok Bhagat Kabir Jio Ke Section */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-600/10 to-orange-600/10 border-2 border-amber-500/20 space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <Feather className="w-5 h-5 text-amber-600" />
                    <h5 className="font-serif font-black text-sm text-amber-900 dark:text-amber-300">
                      {language === 'pb' ? 'ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀਉ ਕੇ (Salok)' : 'सलोक भगत कबीर जीउ के (Salok)'}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {language === 'pb'
                      ? 'ਭਗਤ ਕਬੀਰ ਜੀ ਦੇ ਸਾਰਿਆਂ ਸਲੋਕਾਂ ਦਾ ਸੰਗ੍ਰਹਿ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਆਖ਼ਰੀ ਭਾਗ ਵਿੱਚ ਅੰਗ ੧੩ବ੪ ਤੋਂ ਲੈ ਕੇ ਅੰਗ ੧੩੭੭ ਤੱਕ ਬੜੀ ਹੀ ਸ਼ਰਧਾ ਅਤੇ ਮਰਯਾਦਾ ਨਾਲ ਦਰਜ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਹ ਸਲੋਕ ਅਧਿਆਤਮਿਕ ਰਸ ਅਤੇ ਬ੍ਰਹਮ-ਵਿਚਾਰ ਦੇ ਅਮੁੱਲ ਰਤਨ ਹਨ।'
                      : 'सतगुरु कबीर साहेब के पवित्र सलोकों का दिव्य संग्रह पवित्र ग्रंथ के अंतिम भाग में अंग १३६४ से अंग १३७७ तक बड़ी ही श्रद्धा एवं मर्यादा के साथ दर्ज किया गया है। ये सलोक सीधे जीवन-परिवर्तन, सहज समाधि और नाम-स्मरण के अनमोल मोती हैं।'}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* VIEW 3: VERSES CARDS DISPLAY WITH 5-STEP INTEGRATION */}
      {activeTab !== 'raags' && activeTab !== 'history' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-serif text-gray-500 px-1">
            <span>
              {language === 'pb'
                ? `ਕੁੱਲ ${filteredVerses.length} ਪਾਵਨ ਬਾਣੀ ਅੰਸ਼ ਉਪਲਬਧ`
                : `कुल ${filteredVerses.length} पावन वाणी प्रसंग उपलब्ध`}
            </span>
            {selectedRaag !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedRaag('all')}
                className="text-amber-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>ਰਾਗ ਫਿਲਟਰ ਹਟਾਓ (Show All)</span>
                <X size={12} />
              </button>
            )}
          </div>

          {isLoadingSggs ? (
            <SacredLoader language={language} />
          ) : filteredVerses.length === 0 ? (
            <div
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="rounded-3xl p-10 text-center space-y-4 border-2 border-dashed bg-gradient-to-br from-amber-500/5 to-amber-600/10"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-black text-lg text-amber-900 dark:text-amber-200">
                  {language === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : language === 'en' ? '।। Satyanaam ।।' : '।। सत्यनाम ।।'}
                </h3>
                <p className="font-serif font-bold text-sm sm:text-base text-stone-800 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
                  {language === 'pb'
                    ? 'ਇੱਥੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਪਾਵਨ ਮੂਲਬਾਣੀ ਜਲਦ ਹੀ ਸੁਸੱਜਿਤ ਕੀਤੀ ਜਾਵੇਗੀ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਮੂਲਬਾਣੀ ਪ੍ਰਦਾਨ ਕਰੋ।'
                    : language === 'en'
                    ? 'The sacred original verses of Satguru Kabir Saheb from Sri Guru Granth Sahib Ji will be loaded here shortly. Please provide your original text.'
                    : 'यहाँ श्री गुरु ग्रंथ साहिब जी में सतगुरु कबीर साहेब की पावन मूलवाणी शीघ्र ही सुसज्जित की जाएगी। कृपा करके अपनी मूलवाणी प्रदान करें।'}
                </p>
              </div>
            </div>
          ) : (
            <>
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredVerses.length}
              pageSize={PAGE_SIZE}
              onPageChange={handleSggsPageChange}
              language={language}
              itemLabel={{ hi: 'वाणी', pb: 'ਬਾਣੀ', en: 'Verses' }}
            />
            {paginatedVerses.map((verse) => {
              const isExpanded = expandedVerseId === verse.id;
              const currentStep = activeStepTab[verse.id] || 0;
              const isBookmarked = savedBookmarks.includes(verse.id);

              return (
                <div
                  key={verse.id}
                  id={verse.id}
                  style={{ backgroundColor: theme.cardBg }}
                  className="rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4 border border-amber-500/10 backdrop-blur-md"
                >
                  {/* Card Header: Category Badge, Ang Number & Action buttons */}
                  <div className="flex items-center justify-between gap-2 flex-wrap border-b pb-3 border-amber-500/10">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-black font-serif bg-amber-500/15 text-amber-900 dark:text-amber-200 border border-amber-500/30">
                        {verse.category === 'salok'
                          ? 'ਸਲੋਕ ਭਗਤ ਕਬੀਰ'
                          : verse.category === 'shabad'
                          ? `ਰਾਗੁ ${verse.raag || 'ਗਉੜੀ'}`
                          : verse.category === 'bavan-akhari'
                          ? 'ਬਾਵਨ ਅਖਰੀ'
                          : 'ਗੁਰੂ ਸੰਵਾਦ'}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-500/5 px-2.5 py-0.5 rounded-md">
                        {language === 'pb' ? `ਅੰਗ ${verse.ang}` : `अंग ${verse.ang}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleTogglePlayVerse(verse)}
                        className={`p-2 rounded-xl transition cursor-pointer flex items-center gap-1 text-xs font-serif font-bold ${
                          isPlayingAudio && currentPlayingId === verse.id
                            ? 'bg-[#8B2500] text-white shadow-xs animate-pulse'
                            : 'hover:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                        }`}
                        title={isPlayingAudio && currentPlayingId === verse.id ? 'ਰੋਕੋ (Stop Voice)' : 'ਸੁਣੋ (Listen Voice)'}
                      >
                        {isPlayingAudio && currentPlayingId === verse.id ? (
                          <>
                            <VolumeX size={15} />
                            <span className="hidden sm:inline">{language === 'pb' ? 'ਬੰਦ ਕਰੋ' : 'रोकें'}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 size={15} />
                            <span className="hidden sm:inline">{language === 'pb' ? 'ਪਾਠ ਸੁਣੋ' : 'पाठ सुनें'}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleBookmark(verse.id)}
                        className={`p-2 rounded-xl transition cursor-pointer ${
                          isBookmarked
                            ? 'bg-amber-500/20 text-amber-700'
                            : 'hover:bg-black/5 text-gray-400'
                        }`}
                        title="ਬੁੱਕਮਾਰਕ ਕਰੋ"
                      >
                        <Bookmark size={15} className={isBookmarked ? 'fill-amber-600 text-amber-600' : ''} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(verse)}
                        className="p-2 rounded-xl hover:bg-black/5 text-gray-500 transition cursor-pointer"
                        title="ਕਾਪੀ ਕਰੋ"
                      >
                        {copiedVerseId === verse.id ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedVerseId(isExpanded ? null : verse.id)}
                        className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-xs transition cursor-pointer flex items-center gap-1"
                      >
                        <span>{isExpanded ? (language === 'pb' ? 'ਸੰਖੇਪ' : 'संक्षेप') : (language === 'pb' ? '੫ ਚਰਨ ਵਿਆਖਿਆ' : '५ चरण व्याख्या')}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Title of the Shabad / Salok */}
                  <h3 className="text-base sm:text-lg font-black font-serif" style={{ color: theme.sacredMaroon }}>
                    {verse.title[language] || verse.title.pb}
                  </h3>

                  {/* MOOL TEXT DISPLAY (Gurmukhi, Devanagari, Roman or 3-in-1) */}
                  <div
                    style={{ backgroundColor: theme.bgSecondary }}
                    className="p-4 sm:p-6 rounded-2xl space-y-3 relative shadow-inner overflow-hidden"
                  >
                    {/* Gurmukhi Lines */}
                    {(scriptMode === 'pb' || scriptMode === 'tri') && (
                      <div className="space-y-1" style={{ direction: 'ltr', textAlign: 'left' }}>
                        {scriptMode === 'tri' && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-0.5" style={{ direction: 'ltr', textAlign: 'left' }}>
                            ☬ ਸ੍ਰੀ ਗੁਰਮੁਖੀ ਮੂਲ ਪਾਠ:
                          </span>
                        )}
                        {verse.moolGurmukhi.map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className="font-serif font-bold text-sm sm:text-base leading-relaxed tracking-wide"
                            style={{ color: theme.sacredMaroon }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Devanagari Lines */}
                    {(scriptMode === 'hi' || scriptMode === 'tri') && (
                      <div className="space-y-1 text-left pt-2 border-t border-amber-500/10">
                        {scriptMode === 'tri' && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-0.5">
                            🪷 देवनागरी पाठ:
                          </span>
                        )}
                        {verse.moolDevanagari.map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className="font-serif font-bold text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-100"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Roman Transliteration */}
                    {(scriptMode === 'en' || scriptMode === 'tri') && (
                      <div className="space-y-1 text-left pt-2 border-t border-amber-500/10">
                        {scriptMode === 'tri' && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-0.5">
                            🔤 Roman Phonetic:
                          </span>
                        )}
                        {verse.moolRoman.map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className="font-mono text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 italic"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 5-STEP SPIRITUAL SWADHYAY SUITE (Always expandable) */}
                  {isExpanded && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                        {[
                          { id: 0, label: language === 'pb' ? '📖 ੧. ਸ਼ਬਦਾਰਥ' : '📖 १. शब्दार्थ' },
                          { id: 1, label: language === 'pb' ? '💡 ੨. ਭਾਵਾਰਥ' : '💡 २. भावार्थ' },
                          { id: 2, label: language === 'pb' ? '💭 ੩. ਦੈਨਿਕ ਚਿੰਤਨ' : '💭 ३. दैनिक चिंतन' },
                          { id: 3, label: language === 'pb' ? '🌿 ੪. ਜੀਵਨ ਆਚਰਨ' : '🌿 ४. जीवन आचरण' },
                          { id: 4, label: language === 'pb' ? '🙏 ੫. ਅਰਦਾਸ ਤੇ ਸਮਰਪਣ' : '🙏 ५. समर्पण प्रार्थना' },
                        ].map((sTab) => (
                          <button
                            key={sTab.id}
                            type="button"
                            onClick={() =>
                              setActiveStepTab(prev => ({ ...prev, [verse.id]: sTab.id }))
                            }
                            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap ${
                              currentStep === sTab.id
                                ? 'bg-[#8B2500] text-white shadow-xs'
                                : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-amber-500/10'
                            }`}
                          >
                            {sTab.label}
                          </button>
                        ))}
                      </div>

                      {/* Step 1: Word Meanings */}
                      {currentStep === 0 && (
                        <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2">
                          <span className="text-xs font-black text-amber-800 dark:text-amber-300 font-serif block">
                            📖 {language === 'pb' ? 'ਮੁੱਖ ਸ਼ਬਦਾਰਥ ਤੇ ਰੂਹਾਨੀ ਸੰਕੇਤ:' : 'मुख्य शब्दार्थ एवं आध्यात्मिक संकेत:'}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {verse.shabdarth.map((sh, shIdx) => (
                              <div key={shIdx} className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-amber-500/10 text-xs font-serif">
                                <strong className="text-amber-800 dark:text-amber-300 block">{sh.word}</strong>
                                <span className="opacity-90">{sh.meaning[language] || sh.meaning.hi}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Bhavarth */}
                      {currentStep === 1 && (
                        <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2">
                          <span className="text-xs font-black text-amber-800 dark:text-amber-300 font-serif block">
                            💡 {language === 'pb' ? 'ਵਿਸਤ੍ਰਿਤ ਪਾਵਨ ਭਾਵਾਰਥ:' : 'विस्तृत पावन अमृत भावार्थ:'}
                          </span>
                          <p className="text-xs sm:text-sm font-serif leading-relaxed opacity-95">
                            {verse.bhavarth[language] || verse.bhavarth.hi}
                          </p>
                        </div>
                      )}

                      {/* Step 3: Daily Contemplation */}
                      {currentStep === 2 && (
                        <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2">
                          <span className="text-xs font-black text-blue-800 dark:text-blue-300 font-serif block">
                            💭 {language === 'pb' ? 'ਦੈਨਿਕ ਆਤਮ-ਚਿੰਤਨ (ਮਨਨ ਪ੍ਰਸ਼ਨ):' : 'दैनिक आत्म-चिंतन (मनन प्रश्न):'}
                          </span>
                          <p className="text-xs sm:text-sm font-serif leading-relaxed italic text-blue-950 dark:text-blue-200">
                            "{verse.chintan[language] || verse.chintan.hi}"
                          </p>
                        </div>
                      )}

                      {/* Step 4: Living Practice */}
                      {currentStep === 3 && (
                        <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-2">
                          <span className="text-xs font-black text-emerald-800 dark:text-emerald-300 font-serif block">
                            🌿 {language === 'pb' ? 'ਵਿਵਹਾਰਕ ਜੀਵਨ ਵਿੱਚ ਅਮਲ (ਆਚਰਨ):' : 'व्यावहारिक जीवन में सच्चा अमल (आचरण):'}
                          </span>
                          <p className="text-xs sm:text-sm font-serif leading-relaxed text-emerald-950 dark:text-emerald-200">
                            {verse.acharana[language] || verse.acharana.hi}
                          </p>
                        </div>
                      )}

                      {/* Step 5: Devotional Prayer */}
                      {currentStep === 4 && (
                        <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-2">
                          <span className="text-xs font-black text-purple-800 dark:text-purple-300 font-serif block">
                            🙏 {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਅੱਗੇ ਸਮਰਪਣ ਅਰਦਾਸ:' : 'सतगुरु के चरणों में समर्पण एवं प्रार्थना:'}
                          </span>
                          <p className="text-xs sm:text-sm font-serif leading-relaxed italic text-purple-950 dark:text-purple-200">
                            "{verse.samarpan[language] || verse.samarpan.hi}"
                          </p>
                        </div>
                      )}

                      {/* Reference Footer */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-1">
                        <span>📖 {verse.sggsReference}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredVerses.length}
              pageSize={PAGE_SIZE}
              onPageChange={handleSggsPageChange}
              language={language}
              itemLabel={{ hi: 'वाणी', pb: 'ਬਾਣੀ', en: 'Verses' }}
            />
            </>
          )}
        </div>
      )}
    </div>
  );
};
