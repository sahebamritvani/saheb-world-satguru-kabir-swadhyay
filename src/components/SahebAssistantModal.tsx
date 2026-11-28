import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  Scroll,
  Flame,
  BookMarked,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { AppView, Language, SACRED_BRANDING, Sakhi } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import {
  AssistantSearchResults,
  QUICK_ASSISTANT_TOPICS,
  preloadOfflineScriptureVault,
  searchOfflineScriptures,
} from '../services/localScriptureAssistant';

interface SahebAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenSakhiSwadhyay?: (sakhi: Sakhi) => void;
  onNavigateView?: (view: AppView) => void;
}

type ResultFilterTab = 'all' | 'sakhis' | 'sggs' | 'nitnem' | 'chouka' | 'glossary';

export const SahebAssistantModal: React.FC<SahebAssistantModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenSakhiSwadhyay,
  onNavigateView,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<ResultFilterTab>('all');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<AssistantSearchResults | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setIsSearching(true);
    preloadOfflineScriptureVault()
      .then(() => searchOfflineScriptures(query, language))
      .then((res) => {
        if (!cancelled) {
          setResults(res);
          setIsSearching(false);
        }
      })
      .catch(() => {
        if (!cancelled) setIsSearching(false);
      });

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await searchOfflineScriptures(query, language);
        if (!cancelled) {
          setResults(res);
        }
      } finally {
        if (!cancelled) setIsSearching(false);
      }
    }, 110);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [query, language, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleSelectTopic = (topicId: string, topicQuery: string) => {
    sacredHaptics.lightTap();
    setSelectedTopicId(topicId);
    setQuery(topicQuery);
    setActiveTab('all');
  };

  const handleClear = () => {
    sacredHaptics.lightTap();
    setQuery('');
    setSelectedTopicId(null);
    setActiveTab('all');
    inputRef.current?.focus();
  };

  const handleOpenSwadhyay = (sakhi: Sakhi) => {
    sacredHaptics.lightTap();
    if (onOpenSakhiSwadhyay) {
      onOpenSakhiSwadhyay(sakhi);
    } else {
      window.dispatchEvent(new CustomEvent('sahebworld_open_sakhi_swadhyay', { detail: { sakhi } }));
    }
    onClose();
  };

  const handleJumpToView = (view: AppView) => {
    sacredHaptics.lightTap();
    if (onNavigateView) {
      onNavigateView(view);
    }
    onClose();
  };

  const showSakhis = activeTab === 'all' || activeTab === 'sakhis';
  const showSggs = activeTab === 'all' || activeTab === 'sggs';
  const showNitnem = activeTab === 'all' || activeTab === 'nitnem';
  const showChouka = activeTab === 'all' || activeTab === 'chouka';
  const showGlossary = activeTab === 'all' || activeTab === 'glossary';

  const modalNode = (
    <AnimatePresence>
      <div
        id="saheb-assistant-modal-backdrop"
        onClick={onClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '44px 12px',
          zIndex: 130,
        }}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      >
        <motion.div
          id="saheb-assistant-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
            maxHeight: 'calc(100dvh - 104px)',
          }}
          className="w-full max-w-2xl rounded-3xl border-2 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 sm:px-5 py-3.5 bg-gradient-to-r from-[#6B1D1D] via-[#8B2500] to-[#9A3412] text-white border-b border-amber-400/40 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-lg sm:text-xl shrink-0">
                🪷
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="text-sm sm:text-base font-black font-serif tracking-wide truncate">
                    {language === 'pb'
                      ? 'ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਸਹਾਇਕ'
                      : language === 'en'
                      ? 'Saheb Swadhyay Assistant'
                      : 'साहेब स्वाध्याय सहायक'}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-300/40 text-[10px] font-bold text-emerald-100 whitespace-nowrap flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {language === 'pb'
                      ? '100% ਆਫ਼ਲਾਈਨ'
                      : language === 'en'
                      ? '100% Offline'
                      : '100% ऑफ़लाइन'}
                  </span>
                </div>
                <p className="text-[11px] font-serif text-amber-100/90 truncate">
                  {language === 'pb'
                    ? 'ਸਾਖੀਆਂ, SGGS ਬਾਣੀ, ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ, ਚੌਕਾ-ਆਰਤੀ ਤੇ ਸ਼ਬਦਕੋਸ਼ ਖੋਜ'
                    : language === 'en'
                    ? 'Instant Local Search: Sakhis, SGGS, Nitnem, Chouka-Aarti & Glossary'
                    : 'साखियाँ, SGGS वाणी, नितनेम गुटका साहेब, चौका-आरती एवं शब्दकोश खोज इंजन'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close assistant"
              className="p-2 rounded-xl bg-black/25 hover:bg-black/40 text-white transition cursor-pointer shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Search Input & Quick Topic Chips */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
            className="px-4 sm:px-5 py-3 border-b space-y-2.5 shrink-0"
          >
            {/* Search Box */}
            <div className="relative flex items-center">
              <Search
                className="w-4 h-4 absolute left-3.5 pointer-events-none"
                style={{ color: theme.accentGold }}
              />
              <input
                ref={inputRef}
                id="saheb-assistant-search-input"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedTopicId(null);
                }}
                placeholder={
                  language === 'pb'
                    ? 'ਕੋਈ ਸ਼ਬਦ, ਵਿਸ਼ਾ ਜਾਂ ਜੀਵਨ-ਪ੍ਰਸ਼ਨ ਲਿਖੋ (ਜਿਵੇਂ: ਮਨ ਸ਼ਾਂਤੀ, ਸਤਯਨਾਮ, ਹੰਕਾਰ)...'
                    : language === 'en'
                    ? 'Type a keyword or life question (e.g. anger peace, Satyanaam, ego, Chouka)...'
                    : 'कोई विषय, शब्द या जीवन का प्रश्न लिखें (जैसे: मन शांति, क्रोध, सत्यनाम, अहंकार)...'
                }
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                  color: theme.textPrimary,
                }}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border text-xs sm:text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/40 shadow-2xs"
              />
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  title={language === 'pb' ? 'ਸਾਫ਼ ਕਰੋ' : language === 'en' ? 'Clear' : 'साफ़ करें'}
                  className="absolute right-2.5 p-1 rounded-lg hover:bg-amber-500/15 cursor-pointer"
                  style={{ color: theme.textMuted }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Topic Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {QUICK_ASSISTANT_TOPICS.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleSelectTopic(topic.id, topic.query[language] || topic.query.hi)}
                    style={{
                      backgroundColor: isSelected ? theme.sacredMaroon : theme.cardBg,
                      borderColor: isSelected ? theme.sacredMaroon : theme.accentGold,
                      color: isSelected ? '#FFFFFF' : theme.sacredMaroon,
                    }}
                    className="px-2.5 py-1 rounded-full border text-[11px] font-bold font-serif transition cursor-pointer hover:scale-[1.03] active:scale-95 shadow-2xs"
                  >
                    {topic.label[language] || topic.label.hi}
                  </button>
                );
              })}
            </div>

            {/* Category Filter Tabs */}
            {results && (
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                {(
                  [
                    {
                      id: 'all',
                      label:
                        language === 'pb'
                          ? `ਸਭ (${results.totalCount})`
                          : language === 'en'
                          ? `All (${results.totalCount})`
                          : `सभी (${results.totalCount})`,
                    },
                    {
                      id: 'sakhis',
                      label:
                        language === 'pb'
                          ? `ਸਾਖੀਆਂ (${results.sakhis.length})`
                          : language === 'en'
                          ? `Sakhis (${results.sakhis.length})`
                          : `साखियाँ (${results.sakhis.length})`,
                    },
                    {
                      id: 'sggs',
                      label: `SGGS (${results.sggs.length})`,
                    },
                    {
                      id: 'nitnem',
                      label:
                        language === 'pb'
                          ? `ਨਿਤਨੇਮ (${results.nitnem.length})`
                          : language === 'en'
                          ? `Nitnem (${results.nitnem.length})`
                          : `नितनेम (${results.nitnem.length})`,
                    },
                    {
                      id: 'chouka',
                      label:
                        language === 'pb'
                          ? `ਚੌਕਾ-ਆਰਤੀ (${results.choukaQa.length})`
                          : language === 'en'
                          ? `Chouka-Aarti (${results.choukaQa.length})`
                          : `चौका-आरती (${results.choukaQa.length})`,
                    },
                    {
                      id: 'glossary',
                      label:
                        language === 'pb'
                          ? `ਸ਼ਬਦਕੋਸ਼ (${results.glossary.length})`
                          : language === 'en'
                          ? `Glossary (${results.glossary.length})`
                          : `शब्दकोश (${results.glossary.length})`,
                    },
                  ] as Array<{ id: ResultFilterTab; label: string }>
                ).map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        backgroundColor: active ? theme.accentGold : 'transparent',
                        borderColor: active ? theme.accentGold : theme.cardBorder,
                        color: active ? '#FFFFFF' : theme.textSecondary,
                      }}
                      className="px-2.5 py-1 rounded-lg border text-[11px] font-bold font-serif whitespace-nowrap transition cursor-pointer shrink-0"
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-3.5 space-y-4">
            {/* Offline Guidance Summary Card */}
            {results && (
              <div
                style={{
                  backgroundColor: isDarkMode ? 'rgba(217,119,6,0.12)' : '#FFFBEB',
                  borderColor: theme.accentGold,
                }}
                className="p-3 sm:p-3.5 rounded-2xl border flex items-start gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p
                  className="text-xs sm:text-sm font-serif leading-relaxed"
                  style={{ color: theme.textPrimary }}
                >
                  {results.guidanceSummary}
                </p>
              </div>
            )}

            {isSearching && (
              <p className="text-center py-6 text-xs font-serif opacity-75">
                {language === 'pb'
                  ? 'ਪਾਵਨ ਗ੍ਰੰਥਾਂ ਵਿੱਚ ਖੋਜ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...'
                  : language === 'en'
                  ? 'Searching local scriptures...'
                  : 'पावन ग्रन्थों में खोज की जा रही है...'}
              </p>
            )}

            {!isSearching && results && results.totalCount === 0 && (
              <div className="text-center py-8 space-y-2 opacity-80">
                <p className="text-2xl">🪷</p>
                <p className="text-sm font-serif font-bold" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb'
                    ? 'ਕੋਈ ਸਿੱਧਾ ਨਤੀਜਾ ਨਹੀਂ ਮਿਲਿਆ'
                    : language === 'en'
                    ? 'No matching verses found'
                    : 'कोई सीधा मिलान नहीं मिला'}
                </p>
              </div>
            )}

            {/* 1. AUTHENTIC SAKHIS SECTION */}
            {!isSearching && results && showSakhis && results.sakhis.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <h4
                    style={{ color: theme.sacredMaroon }}
                    className="text-xs sm:text-sm font-black font-serif uppercase tracking-wide"
                  >
                    {language === 'pb'
                      ? 'ਪ੍ਰਮਾਣਿਕ ਸਾਖੀਆਂ'
                      : language === 'en'
                      ? 'Authentic Sakhis'
                      : 'प्रामाणिक साखियाँ'}
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {results.sakhis.map(({ sakhi }) => {
                    const verseText = sakhi.text[language] || sakhi.text.hi;
                    const bhavarthText = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
                    return (
                      <div
                        key={sakhi.id}
                        style={{
                          backgroundColor: theme.bgSecondary,
                          borderColor: theme.cardBorder,
                        }}
                        className="p-3.5 rounded-2xl border space-y-2 shadow-2xs"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="px-2 py-0.5 rounded-md text-[10px] font-bold font-serif"
                            style={{
                              backgroundColor: theme.accentGoldLight,
                              color: theme.sacredMaroon,
                            }}
                          >
                            #{sakhi.number} • {sakhi.categoryTitle[language] || sakhi.categoryTitle.hi}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleOpenSwadhyay(sakhi)}
                            style={{
                              backgroundColor: theme.sacredMaroon,
                              color: '#FFFFFF',
                            }}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold font-serif flex items-center gap-1 transition hover:opacity-90 active:scale-95 cursor-pointer shrink-0 shadow-xs"
                          >
                            <span>
                              {language === 'pb'
                                ? 'ਸਵਾਧਿਆਏ ਖੋਲ੍ਹੋ →'
                                : language === 'en'
                                ? 'Open Swadhyay →'
                                : 'स्वाध्याय खोलें →'}
                            </span>
                          </button>
                        </div>

                        <p
                          style={{ color: theme.sacredMaroon }}
                          className="text-sm sm:text-base font-black font-serif whitespace-pre-line leading-relaxed"
                        >
                          {verseText}
                        </p>

                        <p
                          style={{ color: theme.textSecondary }}
                          className="text-xs font-serif leading-relaxed"
                        >
                          <strong style={{ color: theme.textPrimary }}>
                            {language === 'pb'
                              ? 'ਭਾਵਾਰਥ: '
                              : language === 'en'
                              ? 'Bhavarth: '
                              : 'भावार्थ: '}
                          </strong>
                          {bhavarthText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. SGGS KABIR BANI SECTION */}
            {!isSearching && results && showSggs && results.sggs.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Scroll className="w-4 h-4 text-amber-700" />
                    <h4
                      style={{ color: theme.sacredMaroon }}
                      className="text-xs sm:text-sm font-black font-serif uppercase tracking-wide"
                    >
                      {language === 'pb'
                        ? 'SGGS ਕਬੀਰ ਬਾਣੀ ਤੇ ਸਲੋਕ'
                        : language === 'en'
                        ? 'SGGS Kabir Saloks & Shabads'
                        : 'SGGS कबीर साहेब सलोक व शबद'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleJumpToView('sggs-kabir-bani')}
                    className="text-[11px] font-bold font-serif underline cursor-pointer flex items-center gap-0.5"
                    style={{ color: theme.sacredMaroon }}
                  >
                    <span>
                      {language === 'pb'
                        ? 'SGGS ਖੋਲ੍ਹੋ'
                        : language === 'en'
                        ? 'Open SGGS'
                        : 'SGGS खोलें'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-2">
                  {results.sggs.map(({ verse }) => {
                    const lines =
                      language === 'pb'
                        ? verse.moolGurmukhi
                        : language === 'en'
                        ? verse.moolRoman
                        : verse.moolDevanagari;
                    const bhavarthText = verse.bhavarth[language] || verse.bhavarth.hi;
                    return (
                      <div
                        key={verse.id}
                        style={{
                          backgroundColor: theme.bgSecondary,
                          borderColor: theme.cardBorder,
                        }}
                        className="p-3.5 rounded-2xl border space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2 text-[10px] font-bold">
                          <span style={{ color: theme.accentGold }}>
                            {verse.title[language] || verse.title.hi} • Ang {verse.ang}
                          </span>
                          <span className="opacity-70">{verse.sggsReference}</span>
                        </div>
                        <p
                          style={{ color: theme.sacredMaroon }}
                          className="text-xs sm:text-sm font-bold font-serif whitespace-pre-line leading-relaxed"
                        >
                          {lines.slice(0, 4).join('\n')}
                        </p>
                        <p style={{ color: theme.textSecondary }} className="text-xs font-serif leading-relaxed">
                          {bhavarthText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. NITNEM GUTKA SAHEB SECTION */}
            {!isSearching && results && showNitnem && results.nitnem.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <BookMarked className="w-4 h-4 text-amber-700" />
                    <h4
                      style={{ color: theme.sacredMaroon }}
                      className="text-xs sm:text-sm font-black font-serif uppercase tracking-wide"
                    >
                      {language === 'pb'
                        ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ'
                        : language === 'en'
                        ? 'Nitnem Gutka Saheb'
                        : 'नितनेम गुटका साहेब'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleJumpToView('nitnem-gutka')}
                    className="text-[11px] font-bold font-serif underline cursor-pointer flex items-center gap-0.5"
                    style={{ color: theme.sacredMaroon }}
                  >
                    <span>
                      {language === 'pb'
                        ? 'ਨਿਤਨੇਮ ਖੋਲ੍ਹੋ'
                        : language === 'en'
                        ? 'Open Nitnem'
                        : 'नितनेम खोलें'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-2">
                  {results.nitnem.map((hit) => {
                    const lines =
                      (language === 'pb' ? hit.lines.pb : language === 'en' ? hit.lines.en : hit.lines.hi) ||
                      hit.lines.hi;
                    const bhavarthText = hit.bhavarth
                      ? hit.bhavarth[language] || hit.bhavarth.hi
                      : '';
                    return (
                      <div
                        key={hit.id}
                        style={{
                          backgroundColor: theme.bgSecondary,
                          borderColor: theme.cardBorder,
                        }}
                        className="p-3.5 rounded-2xl border space-y-1.5"
                      >
                        <span className="text-[10px] font-bold" style={{ color: theme.accentGold }}>
                          {hit.sectionTitle[language] || hit.sectionTitle.hi}
                        </span>
                        <p
                          style={{ color: theme.sacredMaroon }}
                          className="text-xs sm:text-sm font-bold font-serif whitespace-pre-line leading-relaxed"
                        >
                          {lines.slice(0, 4).join('\n')}
                        </p>
                        {bhavarthText && (
                          <p style={{ color: theme.textSecondary }} className="text-xs font-serif leading-relaxed">
                            {bhavarthText}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. CHOUKA-AARTI VIDHI & PANTHIC Q&A */}
            {!isSearching && results && showChouka && results.choukaQa.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-700" />
                    <h4
                      style={{ color: theme.sacredMaroon }}
                      className="text-xs sm:text-sm font-black font-serif uppercase tracking-wide"
                    >
                      {language === 'pb'
                        ? 'ਚੌਕਾ-ਆਰਤੀ ਵਿਧੀ ਤੇ ਪੰਥਿਕ ਪ੍ਰਸ਼ਨ-ਉੱਤਰ'
                        : language === 'en'
                        ? 'Chouka-Aarti Vidhi & Panthic Q&A'
                        : 'चौका-आरती विधि एवं पंथिक प्रश्नोत्तर'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleJumpToView('aarti-sanctuary')}
                    className="text-[11px] font-bold font-serif underline cursor-pointer flex items-center gap-0.5"
                    style={{ color: theme.sacredMaroon }}
                  >
                    <span>
                      {language === 'pb'
                        ? 'ਆਰਤੀ ਭਵਨ'
                        : language === 'en'
                        ? 'Aarti Sanctuary'
                        : 'आरती व चौका खोलें'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-2">
                  {results.choukaQa.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: theme.bgSecondary,
                        borderColor: theme.cardBorder,
                      }}
                      className="p-3.5 rounded-2xl border space-y-1.5"
                    >
                      <p
                        style={{ color: theme.sacredMaroon }}
                        className="text-xs sm:text-sm font-black font-serif"
                      >
                        {item.title[language] || item.title.hi}
                      </p>
                      <p
                        style={{ color: theme.textSecondary }}
                        className="text-xs font-serif leading-relaxed"
                      >
                        {item.body[language] || item.body.hi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. GLOSSARY / SHABD KOSHA */}
            {!isSearching && results && showGlossary && results.glossary.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <h4
                      style={{ color: theme.sacredMaroon }}
                      className="text-xs sm:text-sm font-black font-serif uppercase tracking-wide"
                    >
                      {language === 'pb'
                        ? 'ਸ਼ਬਦਕੋਸ਼ (ਪਾਰਿਭਾਸ਼ਿਕ ਸ਼ਬਦ)'
                        : language === 'en'
                        ? 'Shabd Kosha (Glossary)'
                        : 'कबीर पंथ शब्दकोश'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleJumpToView('shabd-kosha')}
                    className="text-[11px] font-bold font-serif underline cursor-pointer flex items-center gap-0.5"
                    style={{ color: theme.sacredMaroon }}
                  >
                    <span>
                      {language === 'pb'
                        ? 'ਸ਼ਬਦਕੋਸ਼ ਖੋਲ੍ਹੋ'
                        : language === 'en'
                        ? 'Open Glossary'
                        : 'शब्दकोश खोलें'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-2">
                  {results.glossary.map(({ entry }) => (
                    <div
                      key={entry.id}
                      style={{
                        backgroundColor: theme.bgSecondary,
                        borderColor: theme.cardBorder,
                      }}
                      className="p-3.5 rounded-2xl border space-y-1.5"
                    >
                      <p
                        style={{ color: theme.sacredMaroon }}
                        className="text-xs sm:text-sm font-black font-serif"
                      >
                        {entry.term[language] || entry.term.hi}
                      </p>
                      <p style={{ color: theme.textPrimary }} className="text-xs font-serif font-medium">
                        {entry.literalMeaning[language] || entry.literalMeaning.hi}
                      </p>
                      <p style={{ color: theme.textSecondary }} className="text-xs font-serif leading-relaxed">
                        {entry.mysticalMeaning[language] || entry.mysticalMeaning.hi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
            className="px-4 py-2.5 border-t flex items-center justify-between gap-2 shrink-0"
          >
            <span
              className="text-[11px] font-serif font-bold"
              style={{ color: theme.sacredMaroon }}
            >
              {SACRED_BRANDING.footer[language]}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-xs font-bold font-serif transition cursor-pointer"
              style={{ color: theme.sacredMaroon }}
            >
              {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalNode, document.body);
};
