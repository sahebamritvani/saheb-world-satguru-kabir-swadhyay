import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  ChevronRight, 
  ChevronDown,
  Globe, 
  Languages, 
  ArrowLeft,
  BookOpen,
  Volume2,
  VolumeX,
  Share2,
  Check,
  CheckCircle2,
  Copy,
  Info,
  X,
  Play,
  Pause,
  RefreshCw,
  Wand2,
  Compass,
  Cpu,
  Flame,
  Feather,
  Radio,
  Bookmark,
  BookmarkCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Sakhi, SACRED_BRANDING } from '../types';
import { QuoteCardModal } from './QuoteCardModal';
import { UlatvasiQuiz } from './UlatvasiQuiz';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ULATVASI_CORE_QUESTIONS, loadAllUlatvasiDatabase, UlatvasiQuestion } from '../data/ulatvasiQuizData';
import { SacredLoader } from './SacredLoader';
import { PaginationControls } from './PaginationControls';
import { 
  SACRED_ULATBAANSI_DESCRIPTIONS, 
  devanagariToGurmukhi, 
  hindiToPunjabiWordConverter 
} from '../services/transliteration';
import { satyanaamAudio } from '../services/audioDhun';
import { generateUniqueUlatvasiAnalysis } from '../services/ulatvasiEssenceEngine';
import { getAppUrlSync } from '../utils/url';
import {
  ADMIN_SLOTS_UPDATED_EVENT,
  getInjectedGranthChapters,
} from '../services/adminSlotInjectorStore';

interface UlatvasiLibraryProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  initialSelectedUlatvasiId?: string | null;
  onSelectUlatvasi: (id: string) => void;
  onOpenBlessing?: () => void;
  onClose: () => void;
}

export const UlatvasiLibrary: React.FC<UlatvasiLibraryProps> = ({
  language: initialLanguage,
  onSelectLanguage,
  initialSelectedUlatvasiId = null,
  onSelectUlatvasi,
  onOpenBlessing,
  onClose,
}) => {
  const { theme } = useAppTheme();
  const { language: contextLang, setLanguage: setContextLang, t: contextT } = useLanguage();
  const currentLang = initialLanguage || contextLang;

  const handleLanguageChange = (newLang: Language) => {
    setContextLang(newLang);
    if (onSelectLanguage) {
      onSelectLanguage(newLang);
    }
  };

  const t = translations[currentLang] || contextT;
  const [selected3DUlatvasiId, setSelected3DUlatvasiId] = useState<string | null>(initialSelectedUlatvasiId);
  const [activeSubTab, setActiveSubTab] = useState<'collection' | 'quiz'>(
    initialSelectedUlatvasiId ? 'quiz' : 'collection'
  );

  useEffect(() => {
    if (initialSelectedUlatvasiId) {
      setSelected3DUlatvasiId(initialSelectedUlatvasiId);
      setActiveSubTab('quiz');
    }
  }, [initialSelectedUlatvasiId]);

  const handleOpen3DForUlatvasi = (id: string) => {
    setSelected3DUlatvasiId(id);
    setActiveSubTab('quiz');
    onSelectUlatvasi(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRealm, setSelectedRealm] = useState<string>('all');
  const [showIntroDescription, setShowIntroDescription] = useState(true);
  const [globalSpiritualEssence, setGlobalSpiritualEssence] = useState(false);
  const [globalAutoExpandMeaning, setGlobalAutoExpandMeaning] = useState(false);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kabir_ulatvasi_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      try {
        localStorage.setItem('kabir_ulatvasi_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const ITEMS_PER_PAGE = 24;
  const [ulatvasiList, setUlatvasiList] = useState<UlatvasiQuestion[]>(ULATVASI_CORE_QUESTIONS);
  const [isLoadingUlatvasis, setIsLoadingUlatvasis] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [adminSlotsVersion, setAdminSlotsVersion] = useState<number>(0);

  useEffect(() => {
    const handleAdminSlotsUpdated = () => {
      setAdminSlotsVersion((v) => v + 1);
    };
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
    return () => {
      window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleAdminSlotsUpdated);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingUlatvasis(true);
    loadAllUlatvasiDatabase()
      .then((all) => {
        if (!cancelled && all.length > 0) {
          setUlatvasiList(all);
        }
      })
      .catch((err) => {
        console.error('Error loading ulatvasi batches:', err);
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoadingUlatvasis(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const mergedUlatvasiList = useMemo(() => {
    const injectedChapters = getInjectedGranthChapters('slot-6-ulatbaasi');
    if (!injectedChapters || injectedChapters.length === 0) {
      return ulatvasiList;
    }

    const injectedQuestions: UlatvasiQuestion[] = [];
    let counter = 1;
    for (const ch of injectedChapters) {
      for (const v of ch.verses || []) {
        const hiVerse = (v.lines?.hi || []).join('\n');
        const pbVerse = (v.lines?.pb || []).join('\n') || hiVerse;
        const enVerse = (v.lines?.en || []).join('\n') || hiVerse;
        const hiBhav = v.bhavarth?.hi || ch.description?.hi || 'सत्यनाम एवं आत्म-ज्ञान का गूढ़ रहस्य।';
        const pbBhav = v.bhavarth?.pb || ch.description?.pb || hiBhav;
        const enBhav = v.bhavarth?.en || ch.description?.en || 'Esoteric spiritual revelation of Satyanaam.';
        const hiTitle = (v.lines?.hi?.[0] || ch.title?.hi || `इंजेक्टेड उलटबांसी #${counter}`).slice(0, 64);
        const pbTitle = (v.lines?.pb?.[0] || ch.title?.pb || hiTitle).slice(0, 64);
        const enTitle = (v.lines?.en?.[0] || ch.title?.en || `Injected Ulatbaasi #${counter}`).slice(0, 64);

        injectedQuestions.push({
          id: v.id ? String(v.id) : `slot6-${ch.id}-${counter}`,
          number: counter,
          realm: 'kautuhal',
          realmTitle: {
            hi: ch.title?.hi || 'प्रशासक संकलन (स्लॉट #6)',
            pb: ch.title?.pb || 'ਐਡਮਿਨ ਸੰਗ੍ਰਹਿ (ਸਲੌਟ #6)',
            en: ch.title?.en || 'Admin Collection (Slot #6)',
          },
          title: {
            hi: `${counter}. ${hiTitle}`,
            pb: `${counter}. ${pbTitle}`,
            en: `${counter}. ${enTitle}`,
          },
          verse: { hi: hiVerse, pb: pbVerse, en: enVerse },
          literalParadox: { hi: hiBhav, pb: pbBhav, en: enBhav },
          clueHint: {
            hi: v.contemplation?.hi || hiBhav,
            pb: v.contemplation?.pb || pbBhav,
            en: v.contemplation?.en || enBhav,
          },
          symbols: [],
          question: {
            hi: 'इस पावन उलटबांसी पद का मुख्य आध्यात्मिक मर्म क्या है?',
            pb: 'ਇਸ ਪਾਵਨ ਉਲਟਬਾਂਸੀ ਪਦ ਦਾ ਮੁੱਖ ਅਧਿਆਤਮਕ ਮਰਮ ਕੀ ਹੈ?',
            en: 'What is the core spiritual essence of this Ulatbaasi verse?',
          },
          options: {
            hi: [hiBhav, 'बाहरी भौतिक अर्थ', 'सांसारिक कल्पना', 'केवल शाब्दिक वर्णन'],
            pb: [pbBhav, 'ਬਾਹਰੀ ਭੌਤਿਕ ਅਰਥ', 'ਸੰਸਾਰਕ ਕਲਪਨਾ', 'ਕੇਵਲ ਸ਼ਬਦੀ ਵਰਣਨ'],
            en: [enBhav, 'Literal outer meaning', 'Worldly imagination', 'Mere poetic figure'],
          },
          correctIndex: 0,
          mysticalUnveiling: {
            headline: {
              hi: ch.title?.hi || 'गूढ़ आध्यात्मिक बोध',
              pb: ch.title?.pb || 'ਗੂੜ੍ਹ ਅਧਿਆਤਮਕ ਬੋਧ',
              en: ch.title?.en || 'Esoteric Spiritual Insight',
            },
            deepMeaning: { hi: hiBhav, pb: pbBhav, en: enBhav },
            kabirPhilosophy: {
              hi: v.practicalApplication?.hi || 'सतगुरु के शब्द और सत्यनाम के अभ्यास से भ्रम मिटता है।',
              pb: v.practicalApplication?.pb || 'ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਅਤੇ ਸਤਯਨਾਮ ਦੇ ਅਭਿਆਸ ਨਾਲ ਭਰਮ ਮਿਟਦਾ ਹੈ।',
              en: v.practicalApplication?.en || 'Illusion dissolves through the Satguru’s Shabd and Satyanaam.',
            },
            parakhiInsight: {
              hi: v.samarpanPrayer?.hi || 'साहेब बंदगी — अंतर्मुखी साधना का पावन सूत्र।',
              pb: v.samarpanPrayer?.pb || 'ਸਾਹੇਬ ਬੰਦਗੀ — ਅੰਤਰਮੁਖੀ ਸਾਧਨਾ ਦਾ ਪਾਵਨ ਸੂਤਰ।',
              en: v.samarpanPrayer?.en || 'Saheb Bandagi — sacred key to inward contemplation.',
            },
          },
          wisdomPoints: 100,
        });
        counter += 1;
      }
    }

    if (injectedQuestions.length === 0) return ulatvasiList;
    const injectedIds = new Set(injectedQuestions.map((q) => q.id));
    return [...injectedQuestions, ...ulatvasiList.filter((q) => !injectedIds.has(q.id))];
  }, [ulatvasiList, adminSlotsVersion]);

  const filteredItems = useMemo(() => {
    return mergedUlatvasiList.filter(item => {
      const titleText = item.title[currentLang] || item.title.hi || '';
      const verseText = item.verse[currentLang] || item.verse.hi || '';
      const matchesSearch = 
        titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        verseText.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRealm = selectedRealm === 'all' || item.realm === selectedRealm;
      const matchesBookmark = !showOnlyBookmarks || bookmarkedIds.includes(item.id);
      
      return matchesSearch && matchesRealm && matchesBookmark;
    });
  }, [mergedUlatvasiList, searchQuery, selectedRealm, currentLang, showOnlyBookmarks, bookmarkedIds]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedRealm, showOnlyBookmarks]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleUlatvasiPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const realms = [
    { 
      id: 'all', 
      title: { hi: 'सभी पहेलियाँ', pb: 'ਸਾਰੀਆਂ ਉਲਟਬਾਂਸੀਆਂ', en: 'All Paradoxes' } 
    },
    { 
      id: 'kautuhal', 
      title: { hi: 'कौतूहल (Curiosity)', pb: 'ਕੌਤਕ (Curiosity)', en: 'Curiosity' } 
    },
    { 
      id: 'antaryog', 
      title: { hi: 'अंतर्योग (Yogic)', pb: 'ਅੰਤਰਯੋਗ (Yogic)', en: 'Yogic' } 
    },
    { 
      id: 'shunya-samadhi', 
      title: { hi: 'शून्य-समाधि (Absolute)', pb: 'ਸੁੰਨ-ਸਮਾਧੀ (Absolute)', en: 'Absolute' } 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 px-2 sm:px-4">
      {/* Unified Ulatvasi Segmented Tabs */}
      <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-2xl border" style={{ borderColor: theme.cardBorder }}>
        <button
          onClick={() => {
            setActiveSubTab('collection');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-2.5 rounded-xl text-sm font-black font-serif transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeSubTab === 'collection'
              ? 'bg-[#8B2500] text-white shadow-md'
              : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{currentLang === 'hi' ? '📖 पावन उलटबांसी संग्रह (२५० पद)' : currentLang === 'pb' ? '📖 ਉਲਟਬਾਂਸੀ ਸੰਗ੍ਰਹਿ' : '📖 Sacred 250 Paradoxes'}</span>
        </button>
        <button
          onClick={() => {
            setActiveSubTab('quiz');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-2.5 rounded-xl text-sm font-black font-serif transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeSubTab === 'quiz'
              ? 'bg-[#8B2500] text-white shadow-md'
              : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>{currentLang === 'hi' ? '⚡ उलटबांसी 3D गेमिंग प्रश्नोत्तरी' : currentLang === 'pb' ? '⚡ ਉਲਟਬਾਂਸੀ 3D ਗੇਮਿੰਗ' : '⚡ Ulatvasi 3D Game & Quiz'}</span>
        </button>
      </div>

      {activeSubTab === 'quiz' ? (
        <UlatvasiQuiz
          language={currentLang}
          initialTab="paradox-quest"
          initialUlatvasiId={selected3DUlatvasiId}
          onClose={() => {
            setSelected3DUlatvasiId(null);
            setActiveSubTab('collection');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={onOpenBlessing || (() => {})}
        />
      ) : (
        <>

      {/* Hero Section with Trilingual Intro */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
        }}
        className="p-5 sm:p-7 rounded-3xl border-2 backdrop-blur-md shadow-xl space-y-4 relative overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                borderColor: '#F59E0B',
              }}
              className="w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-inner shrink-0"
            >
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  style={{ color: theme.accentGold }}
                  className="text-xs sm:text-sm font-black font-serif tracking-normal"
                >
                  {currentLang === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : currentLang === 'en' ? '।। Satyanaam ।।' : '।। सत्यनाम ।।'}
                </span>
                <span aria-hidden="true" style={{ color: theme.textSecondary }}>·</span>
                <span className="text-xs font-bold font-serif" style={{ color: theme.textSecondary }}>
                  {currentLang === 'hi' ? 'उलटबांसी संग्रह' : currentLang === 'pb' ? 'ਉਲਟਬਾਂਸੀ ਸੰਗ੍ਰਹਿ' : 'Sacred Paradoxes'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight mt-1" style={{ color: theme.sacredMaroon }}>
                {currentLang === 'hi' ? 'सतगुरु कबीर साहेब की उलटबांसियां' : currentLang === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ' : "Satguru Kabir Saheb's Ulatbansian"}
              </h2>
            </div>
          </div>

          <button
            onClick={() => setShowIntroDescription(!showIntroDescription)}
            className="p-2 rounded-xl border border-amber-500/20 hover:bg-amber-500/10 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            style={{ color: theme.sacredMaroon }}
            title={showIntroDescription ? 'Collapse description' : 'Expand description'}
          >
            <Info className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">
              {showIntroDescription ? (currentLang === 'hi' ? 'संक्षिप्त करें' : currentLang === 'pb' ? 'ਸੰਖੇਪ ਕਰੋ' : 'Hide') : (currentLang === 'hi' ? 'विस्तार' : currentLang === 'pb' ? 'ਵੇਰਵਾ' : 'Info')}
            </span>
          </button>
        </div>

        {/* Intro Description */}
        <AnimatePresence>
          {showIntroDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                }}
                className="p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed font-serif space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                    <Feather className="w-3.5 h-3.5" />
                    {currentLang === 'hi' ? 'आध्यात्मिक परिचय एवं स्वरूप' : currentLang === 'pb' ? 'ਅਧਿਆਤਮਕ ਜਾਣ-ਪਛਾਣ ਅਤੇ ਸਰੂਪ' : 'Spiritual Introduction & Essence'}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    {currentLang === 'hi' ? 'हिंदी' : currentLang === 'pb' ? 'ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)' : 'English'}
                  </span>
                </div>

                <p 
                  style={{ color: theme.textPrimary }}
                  className="whitespace-pre-line text-justify font-serif text-sm sm:text-base leading-relaxed"
                >
                  {SACRED_ULATBAANSI_DESCRIPTIONS[currentLang]}
                </p>

                <div className="pt-2 border-t border-dashed border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === 'hi' 
                        ? '✨ AI आध्यात्मिक सार विश्लेषण एवं वाचन सुविधा उपलब्ध है' 
                        : currentLang === 'pb' 
                        ? '✨ AI ਅਧਿਆਤਮਕ ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਵਾਚਨ ਸੁਵਿਧਾ ਉਪਲਬਧ ਹੈ' 
                        : '✨ AI Spiritual Essence Analysis & Audio Narration Active'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] opacity-70">
                      {currentLang === 'hi' ? 'भाषा चुनें:' : currentLang === 'pb' ? 'ਭਾਸ਼ਾ ਚੁਣੋ:' : 'Switch Language:'}
                    </span>
                    {(['hi', 'pb', 'en'] as Language[]).map((l) => {
                      const isSelected = currentLang === l;
                      return (
                        <button
                          key={l}
                          onClick={() => handleLanguageChange(l)}
                          style={{
                            backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.bgSecondary,
                            color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                            borderColor: theme.cardBorder,
                          }}
                          className={`px-2 py-0.5 rounded-md text-[10px] border transition cursor-pointer ${
                            isSelected ? 'font-black shadow-xs' : 'font-bold hover:opacity-90'
                          }`}
                        >
                          {l === 'hi' ? 'हिंदी' : l === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="space-y-3 relative z-10 p-1" style={{ backgroundColor: theme.cardBg }}>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 opacity-50 group-focus-within:opacity-100" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentLang === 'hi' 
                ? 'उलटबांसी खोजें (उदा. सिंह, गाय, मछली, आकाश)...' 
                : currentLang === 'pb' 
                ? 'ਉਲਟਬਾਂਸੀ ਖੋਜੋ (ਜਿਵੇਂ ਸ਼ੇਰ, ਗਾਂ, ਮੱਛੀ, ਅਕਾਸ਼)...' 
                : 'Search Ulatbaasi paradoxes...'
            }
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm font-medium"
            style={{ 
              backgroundColor: theme.cardBg, 
              borderColor: theme.cardBorder,
              color: theme.textPrimary
            }}
          />
        </div>

        {/* Realms Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {realms.map(realm => {
            const isSelected = selectedRealm === realm.id;
            return (
              <button
                key={realm.id}
                onClick={() => setSelectedRealm(realm.id)}
                style={{
                  backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.bgSecondary,
                  color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                  borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                }}
                className={`px-4 py-2 rounded-full border text-xs font-bold whitespace-nowrap transition cursor-pointer hover:scale-102 active:scale-98 shadow-xs ${
                  isSelected ? 'font-black ring-1 ring-amber-400/50' : 'hover:opacity-90'
                }`}
              >
                {realm.title[currentLang]}
              </button>
            );
          })}
        </div>

        {/* Global Essence & Meaning Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-1.5 border-t border-dashed border-amber-500/20">
          <button
            onClick={() => setGlobalSpiritualEssence(!globalSpiritualEssence)}
            className={`px-3 py-1.5 rounded-xl border text-[11px] font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              globalSpiritualEssence
                ? 'bg-amber-500 text-stone-950 border-amber-600'
                : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:bg-amber-500/20'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${globalSpiritualEssence ? 'animate-pulse text-amber-950' : ''}`} />
            <span>
              {currentLang === 'hi'
                ? '✨ सभी पदों का आध्यात्मिक सार खोलें'
                : currentLang === 'pb'
                ? '✨ ਸਾਰੀਆਂ ਉਲਟਬਾਂਸੀਆਂ ਦਾ ਤੱਤ ਖੋਲ੍ਹੋ'
                : '✨ Enable Spiritual Essence (All)'}
            </span>
          </button>

          <button
            onClick={() => setGlobalAutoExpandMeaning(!globalAutoExpandMeaning)}
            className={`px-3 py-1.5 rounded-xl border text-[11px] font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              globalAutoExpandMeaning
                ? 'bg-[#8B2500] text-white border-amber-700'
                : 'bg-black/5 dark:bg-white/10 text-stone-700 dark:text-stone-300 border-black/10 hover:bg-black/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'hi'
                ? '📖 सभी गूढ़ अर्थ विस्तारित करें'
                : currentLang === 'pb'
                ? '📖 ਸਾਰੇ ਅਰਥ ਦੇਖੋ'
                : '📖 Expand Meanings (All)'}
            </span>
          </button>

          <button
            onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
            className={`px-3 py-1.5 rounded-xl border text-[11px] font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              showOnlyBookmarks
                ? 'bg-[#8B2500] text-white border-amber-700'
                : 'bg-black/5 dark:bg-white/10 text-stone-700 dark:text-stone-300 border-black/10 hover:bg-black/10'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-current' : ''}`} />
            <span>
              {currentLang === 'hi'
                ? `🔖 सहेजे गए पद (${bookmarkedIds.length})`
                : currentLang === 'pb'
                ? `🔖 ਸਾਂਭੇ ਹੋਏ ਪਦ (${bookmarkedIds.length})`
                : `🔖 Bookmarked (${bookmarkedIds.length})`}
            </span>
          </button>
        </div>
      </div>

      {/* Paradox Verses List */}
      {isLoadingUlatvasis && ulatvasiList.length <= 3 ? (
        <SacredLoader language={currentLang} compact />
      ) : (
        <div className="space-y-4">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredItems.length}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={handleUlatvasiPageChange}
            language={currentLang}
            itemLabel={{ hi: 'पद', pb: 'ਪਦ', en: 'Paradoxes' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paginatedItems.map((item, idx) => (
              <UlatvasiAccordionItem 
                key={item.id} 
                item={item} 
                allItems={ulatvasiList}
                language={currentLang} 
                theme={theme} 
                idx={(currentPage - 1) * ITEMS_PER_PAGE + idx} 
                onSelectUlatvasi={handleOpen3DForUlatvasi}
                onSelectLanguage={handleLanguageChange}
                globalSpiritualEssence={globalSpiritualEssence}
                globalAutoExpandMeaning={globalAutoExpandMeaning}
                isBookmarked={bookmarkedIds.includes(item.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}

            {filteredItems.length === 0 && (
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="sm:col-span-2 p-12 text-center rounded-3xl border space-y-3"
              >
                <BookOpen className="w-12 h-12 mx-auto text-amber-500 opacity-30 animate-pulse" />
                <p className="text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                  {currentLang === 'hi' ? 'कोई उलटबांसी नहीं मिली' : currentLang === 'pb' ? 'ਕੋਈ ਉਲਟਬਾਂਸੀ ਨਹੀਂ ਮਿਲੀ' : 'No Ulatbaasi found'}
                </p>
                <p className="text-xs opacity-70" style={{ color: theme.textSecondary }}>
                  {currentLang === 'hi' ? 'कृपया अन्य शब्द से खोजें।' : currentLang === 'pb' ? 'ਕਿਰਪਾ ਕਰਕੇ ਕੋਈ ਹੋਰ ਸ਼ਬਦ ਖੋਜੋ।' : 'Please try searching with another keyword.'}
                </p>
              </div>
            )}
          </div>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredItems.length}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={handleUlatvasiPageChange}
            language={currentLang}
            itemLabel={{ hi: 'पद', pb: 'ਪਦ', en: 'Paradoxes' }}
          />
        </div>
      )}
      </>
      )}
    </div>
  );
};

interface SpiritualAnalysisResult {
  mysticalReversalFormula: string;
  outerParadoxDeconstruction: string;
  esotericReversalAnalysis: string;
  practicalSadhanaGuidance: string;
  coreTeachingQuote: string;
}

interface UlatvasiAccordionItemProps {
  item: UlatvasiQuestion;
  allItems: UlatvasiQuestion[];
  language: Language;
  theme: any;
  idx: number;
  onSelectUlatvasi: (id: string) => void;
  onSelectLanguage?: (lang: Language) => void;
  globalSpiritualEssence?: boolean;
  globalAutoExpandMeaning?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string, e?: React.MouseEvent) => void;
}

const UlatvasiAccordionItem: React.FC<UlatvasiAccordionItemProps> = ({ 
  item, 
  allItems,
  language, 
  theme, 
  idx, 
  onSelectUlatvasi,
  globalSpiritualEssence = false,
  globalAutoExpandMeaning = false,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPathCopied, setIsPathCopied] = useState(false);
  const [isQuoteCardOpen, setIsQuoteCardOpen] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const baseUrl = getAppUrlSync();
    const shareUrl = `${baseUrl}?ulatvasi=${item.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsPathCopied(true);
      setTimeout(() => setIsPathCopied(false), 2500);
    } catch {
      setIsPathCopied(true);
      setTimeout(() => setIsPathCopied(false), 2500);
    }
  };

  // Convert Ulatbaasi to Sakhi domain model for quote card generation and community sharing
  const ulatvasiSakhi = useMemo((): Sakhi => {
    return {
      id: `ulatvasi-${item.id}`,
      number: parseInt(String(item.id).replace(/\D/g, ''), 10) || (idx + 1),
      grantha: 'Bijak',
      category: 'chetavni-jagriti',
      categoryTitle: {
        hi: item.title.hi || 'सतगुरु कबीर साहेब की उलटबांसियां',
        pb: item.title.pb || 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ',
        en: item.title.en || 'Satguru Kabir Saheb - Sacred Ulatbaasi',
      },
      text: {
        hi: item.verse.hi,
        pb: item.verse.pb || hindiToPunjabiWordConverter(item.verse.hi),
        en: item.verse.en || item.verse.hi,
      },
      bhavarth: {
        hi: item.mysticalUnveiling.deepMeaning.hi || item.literalParadox.hi,
        pb: item.mysticalUnveiling.deepMeaning.pb || hindiToPunjabiWordConverter(item.mysticalUnveiling.deepMeaning.hi),
        en: item.mysticalUnveiling.deepMeaning.en || item.literalParadox.en || '',
      },
      wordMeanings: {
        hi: item.symbols?.map((s: any) => ({ word: s.symbol, meaning: s.meaning?.hi || '' })) || [],
        pb: item.symbols?.map((s: any) => ({ word: s.symbol, meaning: s.meaning?.pb || s.meaning?.hi || '' })) || [],
        en: item.symbols?.map((s: any) => ({ word: s.symbol, meaning: s.meaning?.en || s.meaning?.hi || '' })) || [],
      },
      contemplation: {
        hi: item.clueHint.hi || 'इस उलटबांसी के गूढ़ संकेत को समझकर मन को अंतर्मुखी करें।',
        pb: item.clueHint.pb || hindiToPunjabiWordConverter(item.clueHint.hi),
        en: item.clueHint.en || 'Contemplate this mystical paradox to still the mind.',
      },
      practicalApplication: {
        hi: 'संसार के भ्रम और अहंकार को त्यागकर घट के भीतर सत्यनाम के अमर प्रकाश का अनुभव करें।',
        pb: 'ਹਉਮੈ ਨੂੰ ਮਿਟਾ ਕੇ ਅੰਦਰਲੇ ਸੱਚੇ ਨਾਮ ਦਾ ਅਨੁਭਵ ਕਰੋ।',
        en: 'Relinquish outer sensory illusion and experience the unstruck light within.',
      },
      samarpanPrayer: {
        hi: 'हे सतगुरु कबीर साहेब! आपकी गूढ़ वाणी का अलौकिक प्रकाश मेरे घट में जाग्रत हो।',
        pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਤੁਹਾਡੀ ਪਾਵਨ ਬਾਣੀ ਦਾ ਚਾਨਣ ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਹੋਵੇ।',
        en: 'O Satguru Kabir Saheb! May the sublime light of your Word shine within my being.',
      },
      quiz: [],
    };
  }, [item]);

  // Spiritual Essence Analysis States
  const [showSpiritualEssence, setShowSpiritualEssence] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SpiritualAnalysisResult | null>(null);

  // Audio Narration States
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioTarget, setAudioTarget] = useState<'verse' | 'analysis' | null>(null);

  // Localized string formats
  const displayTitle = item.title[language] || item.title.hi;
  const displayVerse = item.verse[language] || (
    language === 'pb' 
      ? hindiToPunjabiWordConverter(item.verse.hi) 
      : item.verse.hi
  );

  const displayLiteral = item.literalParadox[language] || (
    language === 'pb' 
      ? hindiToPunjabiWordConverter(item.literalParadox.hi) 
      : item.literalParadox.hi
  );

  const displaySpiritual = item.clueHint[language] || (
    language === 'pb' 
      ? hindiToPunjabiWordConverter(item.clueHint.hi) 
      : item.clueHint.hi
  );

  const displayDeepMeaning = item.mysticalUnveiling.deepMeaning[language] || (
    language === 'pb'
      ? hindiToPunjabiWordConverter(item.mysticalUnveiling.deepMeaning.hi)
      : item.mysticalUnveiling.deepMeaning.hi
  );

  // Stop audio speech when component unmounts
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const triggerAnalysis = async () => {
    if (analysis || isAnalyzing) return;
    setIsAnalyzing(true);
    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('Offline mode');
      }
      const response = await fetch('/api/spiritual-essence-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: item.id,
          title: displayTitle,
          verse: displayVerse,
          literalParadox: displayLiteral,
          clueHint: displaySpiritual,
          deepMeaning: displayDeepMeaning,
          language
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.analysis) {
          setAnalysis(data.analysis);
        } else {
          throw new Error('Invalid analysis object');
        }
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      // High-precision verse-specific synthesis via Ulatvasi Essence Engine
      const result = generateUniqueUlatvasiAnalysis({
        id: item.id,
        title: displayTitle,
        verse: displayVerse,
        literalParadox: displayLiteral,
        clueHint: displaySpiritual,
        deepMeaning: displayDeepMeaning,
        language
      });
      setAnalysis(result);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Sync state with global toggles
  useEffect(() => {
    if (globalAutoExpandMeaning) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [globalAutoExpandMeaning]);

  useEffect(() => {
    if (globalSpiritualEssence) {
      setShowSpiritualEssence(true);
      triggerAnalysis();
    } else {
      setShowSpiritualEssence(false);
    }
  }, [globalSpiritualEssence]);

  // Fetch or synthesize AI Spiritual Essence Analysis
  const handleToggleSpiritualEssence = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const nextState = !showSpiritualEssence;
    setShowSpiritualEssence(nextState);

    if (nextState && !analysis) {
      await triggerAnalysis();
    }
  };

  // Audio Narration Handler (SpeechSynthesis)
  const handleAudioNarration = (target: 'verse' | 'analysis', textToRead: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    if (isPlayingAudio && audioTarget === target) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setAudioTarget(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Clean text for speech synthesis
    const cleanText = textToRead
      .replace(/[।।|]/g, ' ')
      .replace(/[*#]/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.88; // Devotional, clear pace
    utterance.pitch = 1.0;

    if (language === 'pb') {
      utterance.lang = 'pa-IN';
    } else if (language === 'en') {
      utterance.lang = 'en-US';
    } else {
      utterance.lang = 'hi-IN';
    }

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      setAudioTarget(target);
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setAudioTarget(null);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setAudioTarget(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const copyText = `${displayTitle}\n\n${displayVerse}\n\n${language === 'hi' ? 'भावार्थ:' : language === 'pb' ? 'ਭਾਵਾਰਥ:' : 'Meaning:'}\n${displayDeepMeaning}\n\n।। सत्यनाम ।।`;
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.005 }}
      transition={{ delay: Math.min(idx * 0.02, 0.3) }}
      style={{ 
        backgroundColor: theme.cardBg, 
        borderColor: showSpiritualEssence ? '#F59E0B' : theme.cardBorder 
      }}
      className={`p-5 sm:p-6 rounded-3xl border shadow-sm transition-all group relative overflow-hidden space-y-4 h-full flex flex-col justify-between hover:border-amber-500/60 hover:shadow-lg ${
        showSpiritualEssence ? 'ring-2 ring-amber-500/30' : ''
      }`}
    >
      {/* Background Spiritual Glow Effect when Active */}
      {showSpiritualEssence && (
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      )}

      {/* Header Row */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-start gap-3 flex-1 cursor-pointer" onClick={() => onSelectUlatvasi(item.id)}>
          <div 
            style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
            className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 border border-amber-500/20 shadow-inner group-hover:scale-105 transition-transform"
          >
            {item.number}
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-600">
                {item.realmTitle[language]}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                +{item.wisdomPoints} XP
              </span>
              {showSpiritualEssence && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black animate-pulse flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  {language === 'hi' ? 'सार विश्लेषण सक्रिय' : language === 'pb' ? 'ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ ' : 'Essence Active'}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold font-serif leading-snug group-hover:text-amber-700 transition-colors" style={{ color: theme.sacredMaroon }}>
              {displayTitle}
            </h3>
          </div>
        </div>

        {/* Quick Actions Header: Copy & Audio Narration */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => handleAudioNarration('verse', `${displayTitle}. ${displayVerse}`, e)}
            className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1 ${
              isPlayingAudio && audioTarget === 'verse'
                ? 'bg-amber-500 text-stone-950 border-amber-600 animate-pulse font-bold'
                : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
            title={language === 'hi' ? 'वाणी वाचन (Audio Narration)' : language === 'pb' ? 'ਵਾਣੀ ਵਾਚਨ' : 'Audio Narration'}
          >
            {isPlayingAudio && audioTarget === 'verse' ? (
              <>
                <VolumeX className="w-4 h-4 text-stone-950" />
                {/* Audio Waves Visualizer */}
                <div className="flex items-end gap-0.5 h-3 px-0.5">
                  <motion.span animate={{ height: ['20%', '100%', '30%'] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-stone-950 rounded-full" />
                  <motion.span animate={{ height: ['80%', '20%', '90%'] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-stone-950 rounded-full" />
                  <motion.span animate={{ height: ['40%', '90%', '20%'] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-0.5 bg-stone-950 rounded-full" />
                </div>
              </>
            ) : (
              <Volume2 className="w-4 h-4 opacity-70" />
            )}
          </button>

          <button
            onClick={handleCopy}
            className="p-2 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
            title={language === 'hi' ? 'पाठ कॉपी करें' : language === 'pb' ? 'ਪਾਠ ਕਾਪੀ ਕਰੋ' : 'Copy Text'}
          >
            {isCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 opacity-70" />}
          </button>

          <button
            onClick={handleCopyLink}
            className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1 ${
              isPathCopied
                ? 'bg-green-500/20 text-green-700 border-green-500 font-bold'
                : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 opacity-75'
            }`}
            title={language === 'hi' ? 'सीधा शेयर लिंक कॉपी करें' : language === 'pb' ? 'ਸਿੱਧਾ ਸਾਂਝਾ ਲਿੰਕ ਕਾਪੀ ਕਰੋ' : 'Copy Link'}
          >
            {isPathCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
          </button>

          <button
            onClick={(e) => onToggleBookmark?.(item.id, e)}
            className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1 ${
              isBookmarked
                ? 'bg-amber-500 text-stone-950 border-amber-600 font-bold shadow-xs'
                : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 opacity-75'
            }`}
            title={
              language === 'hi'
                ? isBookmarked ? 'बुकमार्क हटाया गया' : 'साधना हेतु बुकमार्क करें'
                : language === 'pb'
                ? isBookmarked ? 'ਬੁੱਕਮਾਰਕ ਹਟਾਓ' : 'ਸਾਧਨਾ ਲਈ ਬੁੱਕਮਾਰਕ ਕਰੋ'
                : isBookmarked ? 'Remove Bookmark' : 'Bookmark Pad'
            }
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-stone-950" /> : <Bookmark className="w-4 h-4" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsQuoteCardOpen(true);
            }}
            className="px-2.5 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 transition flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-2xs"
            title={language === 'hi' ? 'सुंदर कार्ड बनाकर सोशल मीडिया पर साझा करें' : language === 'pb' ? 'ਸੁੰਦਰ ਕਾਰਡ ਬਣਾ ਕੇ ਸਾਂਝਾ ਕਰੋ' : 'Create & Share Sacred Card'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'hi' ? 'कार्ड साझा करें' : language === 'pb' ? 'ਕਾਰਡ ਸਾਂਝਾ ਕਰੋ' : 'Share Card'}</span>
          </button>
        </div>
      </div>

      {/* Main Verse Box */}
      <div
        style={{
          backgroundColor: theme.bgSecondary,
          borderColor: theme.borderOrnament,
        }}
        className="p-4 sm:p-5 rounded-2xl border text-center space-y-2 relative overflow-hidden"
      >
        <p 
          style={{ color: theme.sacredMaroon }}
          className="font-serif text-base sm:text-lg font-bold leading-relaxed whitespace-pre-line tracking-wide"
        >
          {displayVerse}
        </p>
      </div>

      {/* Action Row: 1. Spiritual Essence Toggle, 2. Meaning Accordion, 3. 3D Game Play */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
        {/* Toggle for 'Spiritual Essence Analysis' */}
        <button
          onClick={handleToggleSpiritualEssence}
          className={`py-2.5 px-3 rounded-xl border font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs ${
            showSpiritualEssence
              ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-md scale-[1.02]'
              : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${showSpiritualEssence ? 'animate-spin' : ''}`} />
          <span>
            {language === 'hi'
              ? 'आध्यात्मिक सार विश्लेषण'
              : language === 'pb'
              ? 'ਅਧਿਆਤਮਕ ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ'
              : 'Spiritual Essence Analysis'}
          </span>
        </button>

        {/* Meaning & Symbols Accordion Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          style={{ color: theme.sacredMaroon }}
        >
          <span>
            {isOpen 
              ? (language === 'hi' ? 'अर्थ छिपाएं' : language === 'pb' ? 'ਅਰਥ ਛੁਪਾਓ' : 'Hide Meaning') 
              : (language === 'hi' ? 'गूढ़ अर्थ व प्रतीक देखें' : language === 'pb' ? 'ਗੂੜ੍ਹ ਅਰਥ ਤੇ ਪ੍ਰਤੀਕ ਦੇਖੋ' : 'View Meaning & Symbols')}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* 3D Mode Play */}
        <button
          onClick={() => onSelectUlatvasi(item.id)}
          className="py-2.5 px-3 rounded-xl bg-stone-900 dark:bg-amber-600 hover:bg-black text-white dark:text-stone-950 font-black text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
          title="Play in 3D Mode"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>
            {language === 'hi' ? '3D दर्शन एवं गेम' : language === 'pb' ? '3D ਦਰਸ਼ਨ ਤੇ ਗੇਮ' : '3D Play Experience'}
          </span>
        </button>
      </div>

      {/* Dynamic AI Spiritual Essence Analysis Panel */}
      <AnimatePresence>
        {showSpiritualEssence && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.98 }}
            animate={{ height: 'auto', opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div 
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: '#F59E0B',
              }}
              className="p-5 rounded-2xl border-2 space-y-4 relative shadow-inner mt-2"
            >
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black">
                    <Wand2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black font-serif uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      🔮 {language === 'hi' ? 'रहस्यमयी उलटबांसी: आध्यात्मिक सार विश्लेषण' : language === 'pb' ? 'ਰਹੱਸਮਈ ਉਲਟਬਾਂਸੀ: ਅਧਿਆਤਮਕ ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ' : 'Mystical Reversal: Spiritual Essence Analysis'}
                    </h4>
                    <p className="text-[10px] opacity-70">
                      {language === 'hi' ? 'संतमत एवं कबीर वाणी ज्ञान द्वारा आलोकित' : language === 'pb' ? 'ਸੰਤਮਤ ਅਤੇ ਕਬੀਰ ਬਾਣੀ ਗਿਆਨ ਦੁਆਰਾ ਆਲੋਕਿਤ' : 'Illuminated by Sant Mat & Kabir Vani Wisdom'}
                    </p>
                  </div>
                </div>

                {/* Audio Narration for Spiritual Essence Analysis */}
                {analysis && (
                  <button
                    onClick={(e) => {
                      const analysisSpeechText = `${analysis.mysticalReversalFormula}. ${analysis.outerParadoxDeconstruction}. ${analysis.esotericReversalAnalysis}. ${analysis.practicalSadhanaGuidance}. ${analysis.coreTeachingQuote}`;
                      handleAudioNarration('analysis', analysisSpeechText, e);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                      isPlayingAudio && audioTarget === 'analysis'
                        ? 'bg-amber-500 text-stone-950 border-amber-600 animate-pulse font-black'
                        : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
                    }`}
                  >
                    {isPlayingAudio && audioTarget === 'analysis' ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? 'रोकें' : language === 'pb' ? 'ਰੋਕੋ' : 'Stop'}</span>
                        <div className="flex items-end gap-0.5 h-3 px-0.5">
                          <motion.span animate={{ height: ['20%', '100%', '30%'] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-0.5 bg-stone-950 rounded-full" />
                          <motion.span animate={{ height: ['80%', '20%', '90%'] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-stone-950 rounded-full" />
                        </div>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{language === 'hi' ? 'सार वाचन सुनें' : language === 'pb' ? 'ਤੱਤ ਵਾਚਨ ਸੁਣੋ' : 'Listen Analysis'}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Loading Spinner */}
              {isAnalyzing && (
                <div className="py-8 text-center space-y-3">
                  <RefreshCw className="w-8 h-8 mx-auto text-amber-500 animate-spin" />
                  <p className="text-xs font-serif font-bold text-amber-700 dark:text-amber-300">
                    {language === 'hi' 
                      ? 'सतगुरु कबीर वाणी का गूढ़ आध्यात्मिक रहस्य विश्लेषित किया जा रहा है...' 
                      : language === 'pb' 
                      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਾਣੀ ਦਾ ਗੂੜ੍ਹ ਅਧਿਆਤਮਕ ਰਹੱਸ ਵਿਸ਼ਲੇਸ਼ਿਤ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...' 
                      : 'Decoding mystical reversal essence...'}
                  </p>
                </div>
              )}

              {/* Analysis Content */}
              {!isAnalyzing && analysis && (
                <div className="space-y-4 text-xs sm:text-sm font-serif">
                  {/* Formula Bar */}
                  <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 block mb-1">
                      ⚡ {language === 'hi' ? 'उलटबांसी का मुख्य आध्यात्मिक सूत्र' : language === 'pb' ? 'ਉਲਟਬਾਂਸੀ ਦਾ ਮੁੱਖ ਅਧਿਆਤਮਕ ਸੂਤਰ' : 'Core Mystical Reversal Formula'}
                    </span>
                    <strong className="text-sm sm:text-base font-black text-amber-800 dark:text-amber-200">
                      {analysis.mysticalReversalFormula}
                    </strong>
                  </div>

                  {/* Outer Paradox vs Esoteric Reversal Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-300 font-bold text-xs">
                        <Flame className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? '1. बाह्य उल्टा दृश्य (इंद्रिय भ्रम)' : language === 'pb' ? '1. ਬਾਹਰੀ ਉਲਟਾ ਦ੍ਰਿਸ਼ (ਇੰਦਰੀ ਭਰਮ)' : '1. Outer Paradox (Sensory Illusion)'}</span>
                      </div>
                      <p className="leading-relaxed opacity-90 text-xs sm:text-sm" style={{ color: theme.textPrimary }}>
                        {analysis.outerParadoxDeconstruction}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? '2. अंतर्मुखी उलटबांसी रहस्य (आत्मज्ञान)' : language === 'pb' ? '2. ਅੰਤਰਮੁਖੀ ਉਲਟਬਾਂਸੀ ਰਹੱਸ (ਆਤਮ ਗਿਆਨ)' : '2. Esoteric Reversal (Inner Awakening)'}</span>
                      </div>
                      <p className="leading-relaxed opacity-90 text-xs sm:text-sm" style={{ color: theme.textPrimary }}>
                        {analysis.esotericReversalAnalysis}
                      </p>
                    </div>
                  </div>

                  {/* Practical Sadhana Guidance */}
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-bold text-xs">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? '3. साधक हेतु व्यावहारिक साधना सूत्र' : language === 'pb' ? '3. ਸਾਧਕ ਲਈ ਵਿਵਹਾਰਕ ਸਾਧਨਾ ਸੂਤਰ' : '3. Practical Sadhana Guidance'}</span>
                    </div>
                    <p className="leading-relaxed opacity-90 text-xs sm:text-sm" style={{ color: theme.textPrimary }}>
                      {analysis.practicalSadhanaGuidance}
                    </p>
                  </div>

                  {/* Golden Quote */}
                  {analysis.coreTeachingQuote && (
                    <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/30 text-center italic font-serif text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                      {analysis.coreTeachingQuote}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accordion Content for Meaning & Symbols */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="pt-3 border-t border-dashed border-amber-500/20 space-y-4 text-xs sm:text-sm"
            >
              {/* Outer Paradox vs Spiritual Reality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.06)', borderColor: 'rgba(239, 68, 68, 0.2)' }}
                  className="p-3.5 rounded-2xl border space-y-1 transition hover:shadow-sm"
                >
                  <p className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    🌪️ {language === 'hi' ? 'बाह्य कौतूहल (उल्टा अर्थ)' : language === 'pb' ? 'ਬਾਹਰੀ ਕੌਤਕ (ਉਲਟਾ ਅਰਥ)' : 'Literal Paradox'}
                  </p>
                  <p className="leading-relaxed opacity-90">{displayLiteral}</p>
                </div>

                <div 
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.06)', borderColor: 'rgba(34, 197, 94, 0.2)' }}
                  className="p-3.5 rounded-2xl border space-y-1 transition hover:shadow-sm"
                >
                  <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    💡 {language === 'hi' ? 'आंतरिक योग संकेत (सीधा भेद)' : language === 'pb' ? 'ਅੰਦਰੂਨੀ ਯੋਗ ਸੰਕੇਤ (ਸਿੱਧਾ ਭੇਦ)' : 'Inner Yogic Clue'}
                  </p>
                  <p className="leading-relaxed opacity-90">{displaySpiritual}</p>
                </div>
              </div>

              {/* Deep Meaning Section Sourced from Ulatvasi Database */}
              {item.mysticalUnveiling && item.mysticalUnveiling.deepMeaning && (
                <motion.div 
                  initial={{ scale: 0.99, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.12 }}
                  style={{ backgroundColor: theme.bgSecondary, borderColor: 'rgba(245, 158, 11, 0.35)' }}
                  className="p-4 rounded-2xl border-2 space-y-2 shadow-inner"
                >
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200 font-black text-xs uppercase tracking-wider border-b pb-2 border-amber-500/25">
                    <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                    <span>
                      {language === 'hi' 
                        ? '🔮 गहन आध्यात्मिक एवं योगार्थ रहस्य (Deep Meaning):' 
                        : language === 'pb' 
                        ? '🔮 ਗੂੜ੍ਹ ਅਧਿਆਤਮਕ ਅਤੇ ਯੋਗ ਅਰਥ (Deep Meaning):' 
                        : '🔮 Deep Spiritual & Yogic Philosophy (Deep Meaning):'}
                    </span>
                  </div>
                  <p className="leading-relaxed opacity-95 text-xs sm:text-sm font-serif italic" style={{ color: theme.textPrimary }}>
                    "{item.mysticalUnveiling.deepMeaning[language as keyof typeof item.mysticalUnveiling.deepMeaning] || item.mysticalUnveiling.deepMeaning.hi}"
                  </p>
                  {item.mysticalUnveiling.kabirPhilosophy && (
                    <div className="pt-2 border-t border-amber-500/20 text-[11px] opacity-85 font-serif space-y-0.5">
                      <strong className="text-amber-700 dark:text-amber-300">संतमत दर्शन (Kabir Philosophy):</strong> 
                      <p className="opacity-90">{item.mysticalUnveiling.kabirPhilosophy[language as keyof typeof item.mysticalUnveiling.kabirPhilosophy] || item.mysticalUnveiling.kabirPhilosophy.hi}</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Decoded Symbols */}
              {item.symbols && item.symbols.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-wider text-amber-600">
                    🔍 {language === 'hi' ? 'शब्द-दर-शब्द प्रतीक व्याख्या' : language === 'pb' ? 'ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਪ੍ਰਤੀਕ ਵਿਆਖਿਆ' : 'Word-by-Word Decoded Symbols'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.symbols.map((sym, sIdx) => {
                      const symMeaning = sym.meaning[language] || (
                        language === 'pb' 
                          ? hindiToPunjabiWordConverter(sym.meaning.hi) 
                          : sym.meaning.hi
                      );
                      return (
                        <div
                          key={sIdx}
                          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                          className="p-2.5 rounded-xl border flex items-start gap-2 text-xs"
                        >
                          <span className="text-sm shrink-0">{sym.symbol.split(' ')[0]}</span>
                          <div>
                            <strong style={{ color: theme.sacredMaroon }}>{sym.symbol}</strong>
                            <p style={{ color: theme.textSecondary }} className="text-[11px] mt-0.5 leading-tight">
                              {symMeaning}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Deep Spiritual Unveiling */}
              {displayDeepMeaning && (
                <div 
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  className="p-4 rounded-2xl border space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-600">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'विस्तृत आध्यात्मिक भावार्थ' : language === 'pb' ? 'ਵਿਸਤ੍ਰਿਤ ਅਧਿਆਤਮਕ ਭਾਵਾਰਥ' : 'Detailed Spiritual Meaning'}</span>
                  </div>
                  <p className="font-serif leading-relaxed text-xs sm:text-sm" style={{ color: theme.textPrimary }}>
                    {displayDeepMeaning}
                  </p>
                </div>
              )}

              {/* Deep Connection: Thematically Similar Pads */}
              {(() => {
                const similarPads = allItems
                  .filter(p => p.realm === item.realm && p.id !== item.id)
                  .slice(0, 3);

                if (similarPads.length === 0) return null;

                return (
                  <div className="pt-3 border-t border-dashed border-amber-500/20 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">
                      <Compass className="w-4 h-4 text-amber-600 animate-spin" />
                      <span>
                        {language === 'hi' 
                          ? '🔗 गहन संबंध: अन्य समान दार्शनिक पद' 
                          : language === 'pb' 
                          ? '🔗 ਗੂੜ੍ਹ ਸੰਬੰਧ: ਹੋਰ ਸਮਾਨ ਪਦ' 
                          : '🔗 Deep Connection: Thematically Similar Pads'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {similarPads.map(sim => (
                        <button
                          key={sim.id}
                          onClick={() => onSelectUlatvasi(sim.id)}
                          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                          className="p-3 rounded-xl border text-left space-y-1 hover:border-amber-500 transition cursor-pointer group shadow-2xs hover:scale-[1.02]"
                        >
                          <div className="flex items-center justify-between text-[10px] font-bold text-amber-600">
                            <span>पद् #{sim.number || sim.id}</span>
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <p className="font-serif font-bold text-xs line-clamp-1" style={{ color: theme.sacredMaroon }}>
                            {sim.title[language] || sim.title.hi}
                          </p>
                          <p className="text-[11px] opacity-75 line-clamp-1 font-serif" style={{ color: theme.textPrimary }}>
                            {sim.verse[language] || sim.verse.hi}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sacred Quote Card Modal for Community Sharing */}
      {isQuoteCardOpen && (
        <QuoteCardModal
          isOpen={isQuoteCardOpen}
          onClose={() => setIsQuoteCardOpen(false)}
          sakhi={ulatvasiSakhi}
          initialLanguage={language}
        />
      )}
    </motion.div>
  );
};
