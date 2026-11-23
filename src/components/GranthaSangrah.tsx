import React, { useState, useMemo } from 'react';
import { Search, BookOpen, HelpCircle, Volume2, Sparkles, Filter, Check, X } from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter } from '../services/audioDhun';

interface GranthaSangrahProps {
  sakhis: Sakhi[];
  language: Language;
  onSelectSakhiForSwadhyay: (sakhi: Sakhi) => void;
  onSelectSakhiForQuiz: (sakhi: Sakhi) => void;
  onSelectLanguage?: (lang: Language) => void;
  onClose?: () => void;
}

export const GranthaSangrah: React.FC<GranthaSangrahProps> = ({
  sakhis,
  language,
  onSelectSakhiForSwadhyay,
  onSelectSakhiForQuiz,
  onSelectLanguage,
  onClose,
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    sakhis.forEach((s) => cats.add(s.categoryTitle[language]));
    return Array.from(cats);
  }, [sakhis, language]);

  // Filtered Sakhis
  const filteredSakhis = useMemo(() => {
    return sakhis.filter((s) => {
      const matchCat =
        selectedCategory === 'all' || s.categoryTitle[language] === selectedCategory;

      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const textMatch = s.text[language].toLowerCase().includes(q);
      const bhavarthMatch = s.bhavarth[language].toLowerCase().includes(q);
      const numMatch = s.number.toString().includes(q);

      return textMatch || bhavarthMatch || numMatch;
    });
  }, [sakhis, language, selectedCategory, searchQuery]);

  const handlePlayRecitation = (sakhi: Sakhi) => {
    if (playingId === sakhi.id) {
      speechReciter.stop();
      setPlayingId(null);
    } else {
      setPlayingId(sakhi.id);
      speechReciter.speak(
        sakhi.text[language],
        language,
        () => setPlayingId(null),
        () => setPlayingId(null)
      );
    }
  };

  return (
    <div
      id="grantha-sangrah-container"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-2xl border shadow-xl overflow-hidden flex flex-col transition-all"
    >
      {/* Standardized Sacred Top Bar (Satyanaam ONLY) */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Reader Controls Bar: Language and Close (Shifted here from Top Bar) */}
      <div className="flex items-center justify-end gap-3 px-1 mt-2">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {onSelectLanguage && (
            <div 
              className="flex items-center gap-1 p-0.5 rounded-lg shrink-0 border"
              style={{
                backgroundColor: theme.mode === 'mystic_dark' ? '#2A2016' : theme.stepActiveBg,
                borderColor: theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder,
              }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                return (
                  <button
                    key={lng}
                    onClick={() => onSelectLanguage(lng)}
                    style={{
                      backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                      color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                    }}
                    className={`px-2 py-0.5 rounded text-xs font-serif transition-all cursor-pointer ${
                      isSelected ? 'font-black shadow-xs' : 'font-bold hover:opacity-90'
                    }`}
                  >
                    {lng === 'hi' ? 'हि' : lng === 'pb' ? 'ਪੰ' : 'EN'}
                  </button>
                );
              })}
            </div>
          )}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: '#EF4444',
                color: '#DC2626',
              }}
              className="px-2.5 py-1 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
              title={language === 'pb' ? 'ਬੰਦ ਕਰੋ (Close)' : language === 'en' ? 'Close' : 'बंद करें (Close)'}
            >
              <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
              <span className="hidden sm:inline font-serif font-bold">{language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Header and Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: theme.cardBorder }}>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif">
              {t.allSakhisTitle}
            </h2>
            <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm">
              कबीर साखी संग्रह, बीजक एवं कबीर सागर का पावन संकलन
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search
              style={{ color: theme.textMuted }}
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="साखी, शब्द या संख्या खोजें..."
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.borderOrnament,
                color: theme.textPrimary,
              }}
              className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              backgroundColor: selectedCategory === 'all' ? theme.buttonPrimaryBg : theme.bgSecondary,
              color: selectedCategory === 'all' ? theme.buttonPrimaryText : theme.textPrimary,
              borderColor: selectedCategory === 'all' ? theme.buttonPrimaryBg : theme.borderOrnament,
            }}
            className="px-3 py-1.5 rounded-lg border font-semibold whitespace-nowrap cursor-pointer transition backdrop-blur-md"
          >
            सभी अंग ({sakhis.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: selectedCategory === cat ? theme.buttonPrimaryBg : theme.bgSecondary,
                color: selectedCategory === cat ? theme.buttonPrimaryText : theme.textPrimary,
                borderColor: selectedCategory === cat ? theme.buttonPrimaryBg : theme.borderOrnament,
              }}
              className="px-3 py-1.5 rounded-lg border font-medium whitespace-nowrap cursor-pointer transition backdrop-blur-md"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sakhi Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSakhis.map((sakhi) => {
            const isReciting = playingId === sakhi.id;

            return (
              <div
                key={sakhi.id}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: isReciting ? theme.accentGold : theme.borderOrnament,
                }}
                className={`p-4 sm:p-5 rounded-xl border flex flex-col justify-between gap-4 transition-all hover:shadow-md ${
                  isReciting ? 'ring-1 ring-amber-500 shadow-sm' : ''
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      style={{
                        backgroundColor: theme.accentGoldLight,
                        color: theme.sacredMaroon,
                      }}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                    >
                      #{sakhi.number} • {sakhi.categoryTitle[language]}
                    </span>

                    <button
                      onClick={() => handlePlayRecitation(sakhi)}
                      title="Listen"
                      style={{ color: isReciting ? theme.sacredMaroon : theme.accentGold }}
                      className="p-1 hover:opacity-80 transition cursor-pointer"
                    >
                      <Volume2 className={`w-4 h-4 ${isReciting ? 'animate-bounce' : ''}`} />
                    </button>
                  </div>

                  <p
                    style={{ color: theme.sacredMaroon }}
                    className="font-serif font-bold text-base sm:text-lg leading-relaxed whitespace-pre-line"
                  >
                    {sakhi.text[language]}
                  </p>

                  <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {sakhi.bhavarth[language]}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t" style={{ borderColor: theme.cardBorder }}>
                  <button
                    id={`quiz-sakhi-${sakhi.number}`}
                    onClick={() => onSelectSakhiForQuiz(sakhi)}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:opacity-90 flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>प्रश्नोत्तरी</span>
                  </button>

                  <button
                    id={`swadhyay-sakhi-${sakhi.number}`}
                    onClick={() => onSelectSakhiForSwadhyay(sakhi)}
                    style={{
                      backgroundColor: theme.buttonPrimaryBg,
                      color: theme.buttonPrimaryText,
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold hover:opacity-95 flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t.readSakhiBtn}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strict Sacred Footer Spelling */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-t py-2 px-4 text-center select-none"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
        >
          {exactBottom}
        </span>
      </div>
    </div>
  );
};
