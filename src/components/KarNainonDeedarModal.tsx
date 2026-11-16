import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Compass, 
  Flower2, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { KAR_NAINON_DEEDAR_VERSES, KAMAL_STAGES_SUMMARY } from '../data/granths/karNainonDeedar';
import { satyanaamAudio } from '../services/audioDhun';

interface KarNainonDeedarModalProps {
  language: Language;
  onClose: () => void;
}

export const KarNainonDeedarModal: React.FC<KarNainonDeedarModalProps> = ({
  language,
  onClose
}) => {
  const { theme } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'verses' | 'chart' | 'audio'>('verses');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedVerseNo, setSelectedVerseNo] = useState<number | null>(null);

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Filtered verses based on search query
  const filteredVerses = useMemo(() => {
    if (!searchQuery.trim()) return KAR_NAINON_DEEDAR_VERSES;
    const query = searchQuery.toLowerCase();
    return KAR_NAINON_DEEDAR_VERSES.filter((v, idx) => {
      const hiLines = v.lines.hi.join(' ').toLowerCase();
      const pbLines = v.lines.pb.join(' ').toLowerCase();
      const enLines = v.lines.en.join(' ').toLowerCase();
      const bhavarthHi = v.bhavarth?.hi.toLowerCase() || '';
      return (
        hiLines.includes(query) ||
        pbLines.includes(query) ||
        enLines.includes(query) ||
        bhavarthHi.includes(query) ||
        `verse ${idx}`.includes(query)
      );
    });
  }, [searchQuery]);

  const handleCopyVerse = (textToCopy: string, index: number) => {
    const formatted = `${exactTop}\n\n${textToCopy}\n\n${exactBottom}`;
    navigator.clipboard.writeText(formatted);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleShareWhatsApp = (textToShare: string) => {
    const formatted = `${exactTop}\n\n${textToShare}\n\n${exactBottom}\n\nSaheb World App`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
  };

  const toggleAudio = () => {
    if (isPlayingAudio) {
      satyanaamAudio.stop();
      setIsPlayingAudio(false);
    } else {
      satyanaamAudio.play();
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        style={{ backgroundColor: theme.cardBg, color: theme.textPrimary, borderColor: theme.cardBorder }}
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden"
      >
        {/* Sacred Header (First Bar - Compact & Sleek) */}
        <div 
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="py-2 sm:py-2.5 px-3 sm:px-4 border-b flex items-center justify-between shrink-0 min-h-[44px]"
        >
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold border border-amber-500/30 shrink-0">
              <Flower2 className="w-4 h-4 text-amber-500 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black tracking-wider text-amber-700 dark:text-amber-300 uppercase font-serif truncate">
                  {exactTop}
                </span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/30 shrink-0">
                  {language === 'pb' ? '੩੨ ਕੜੀਆਂ' : language === 'en' ? '32 Verses' : '३२ कड़ियाँ'}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-black font-serif leading-tight truncate" style={{ color: theme.sacredMaroon }}>
                {language === 'pb' 
                  ? 'ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ ਮਹਲ ਮੇਂ ਪਿਆਰਾ ਹੈ' 
                  : language === 'en' 
                  ? 'Kar Nainon Deedar Mahal Mein Pyara Hai' 
                  : 'कर नैनों दीदार महल में प्यारा है'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleAudio}
              className={`px-2 py-1 rounded-lg border text-[11px] font-bold font-serif transition-all flex items-center gap-1 cursor-pointer ${
                isPlayingAudio 
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm animate-pulse' 
                  : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
              }`}
              title={isPlayingAudio 
                ? (language === 'pb' ? 'ਧੁਨੀ ਬੰਦ ਕਰੋ' : language === 'en' ? 'Stop Audio' : 'ध्वनि बंद करें') 
                : (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ ਸੁਣੋ' : language === 'en' ? 'Listen Satyanaam Dhun' : 'सत्यनाम धुन व पाठ सुनें')}
            >
              {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden xs:inline">
                {isPlayingAudio 
                  ? (language === 'pb' ? 'ਧੁਨ ਬੰਦ' : language === 'en' ? 'Stop' : 'धुन बंद') 
                  : (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ' : language === 'en' ? 'Dhun' : 'सत्यनाम धुन')}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-500"
              title={language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs & Search (Second Bar - Compact & Streamlined) */}
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="py-1 px-2.5 sm:px-4 border-b flex flex-wrap items-center justify-between gap-1.5 shrink-0 min-h-[36px]"
        >
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
            <button
              onClick={() => setActiveTab('verses')}
              className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold font-serif transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeTab === 'verses'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? '੩੨ ਕੜੀਆਂ (Verses)' : language === 'en' ? '32 Verses' : '३२ कड़ियाँ (Verses)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('chart')}
              className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold font-serif transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeTab === 'chart'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਚੱਕਰ ਸੋਪਾਨ ਚਾਰਟ (Chakra Map)' : language === 'en' ? 'Chakra Map' : 'चक्र सोपान चार्ट (Chakra Map)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold font-serif transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeTab === 'audio'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਸਾਧਨਾ ਮਰਮ (Essence)' : language === 'en' ? 'Essence' : 'साधना मर्म (Essence)'}</span>
            </button>
          </div>

          {activeTab === 'verses' && (
            <div className="relative flex-1 sm:flex-none min-w-[130px] sm:w-48">
              <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-amber-600 opacity-60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'pb' ? 'ਕੜੀ ਜਾਂ ਚੱਕਰ ਖੋਜੋ...' : language === 'en' ? 'Search verse or chakra...' : 'कड़ी या चक्र खोजें...'}
                className="w-full pl-7 pr-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] border focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
              />
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-16 sm:pb-20 space-y-6">
          {/* TAB 1: ALL 32 VERSES */}
          {activeTab === 'verses' && (
            <div className="space-y-6">
              {filteredVerses.map((v, idx) => {
                const isRefrain = v.id === 'knd-refrain';
                const verseNum = isRefrain ? 0 : idx;
                const activeLines = language === 'pb' && v.lines.pb ? v.lines.pb : v.lines.hi;
                const verseLinesText = activeLines.join('\n');

                return (
                  <div
                    key={v.id}
                    id={`verse-${verseNum}`}
                    style={{ 
                      backgroundColor: isRefrain ? 'rgba(245, 158, 11, 0.08)' : theme.bgSecondary, 
                      borderColor: isRefrain ? '#F59E0B' : theme.cardBorder 
                    }}
                    className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                      selectedVerseNo === verseNum ? 'ring-2 ring-amber-500 shadow-lg' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 border-b pb-3 mb-3" style={{ borderColor: theme.cardBorder }}>
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                          {isRefrain 
                            ? (language === 'pb' ? 'ਟੇਕ' : language === 'en' ? 'Ref' : 'टेक') 
                            : verseNum}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                          {isRefrain 
                            ? (language === 'pb' ? 'ਪਾਵਨ ਮੰਗਲਾਚਰਨ ਟੇਕ (Refrain)' : language === 'en' ? 'Sacred Mangalacharan (Refrain)' : 'पावन मंगलाचरण टेक (Refrain)') 
                            : (language === 'pb' ? `ਕੜੀ ਕ੍ਰਮਾਂਕ ${verseNum}` : language === 'en' ? `Verse ${verseNum}` : `कड़ी क्रमांक ${verseNum}`)}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleCopyVerse(verseLinesText, idx)}
                          className="p-1.5 rounded-lg border border-amber-500/20 hover:bg-amber-500/10 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                          style={{ color: theme.sacredMaroon }}
                          title={language === 'pb' ? 'ਕੜੀ ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy Verse' : 'कड़ी कॉपी करें'}
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-600 text-[10px]">
                                {language === 'pb' ? 'ਕਾਪੀ ਹੋਇਆ!' : language === 'en' ? 'Copied!' : 'कॉपी हुआ!'}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">
                                {language === 'pb' ? 'ਕਾਪੀ' : language === 'en' ? 'Copy' : 'कॉपी'}
                              </span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleShareWhatsApp(verseLinesText)}
                          className="p-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                          title={language === 'pb' ? 'ਵਟਸਐਪ ਤੇ ਸ਼ੇਅਰ ਕਰੋ' : language === 'en' ? 'Share on WhatsApp' : 'व्हाट्सएप पर शेयर करें'}
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">
                            {language === 'pb' ? 'ਸ਼ੇਅਰ' : language === 'en' ? 'Share' : 'शेयर'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Primary Verses Display */}
                    <div className="space-y-1 text-base sm:text-lg font-black font-serif leading-relaxed" style={{ color: theme.sacredMaroon }}>
                      {activeLines.map((line, lIdx) => (
                        <p key={lIdx} className="drop-shadow-2xs">
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Hindi Reference if Punjabi selected */}
                    {language === 'pb' && (
                      <div className="mt-2 text-xs font-medium font-serif opacity-70" style={{ color: theme.textSecondary }}>
                        {v.lines.hi.map((line, lIdx) => (
                          <p key={lIdx}>ਮੂਲ: {line}</p>
                        ))}
                      </div>
                    )}

                    {/* English Transliteration */}
                    {language === 'en' && v.lines.en && (
                      <div className="mt-2 text-xs italic font-serif opacity-80" style={{ color: theme.textSecondary }}>
                        {v.lines.en.map((line, lIdx) => (
                          <p key={lIdx}>{line}</p>
                        ))}
                      </div>
                    )}

                    {/* Bhavarth Box */}
                    {v.bhavarth && (
                      <div className="mt-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                        <strong className="text-xs font-extrabold uppercase font-serif tracking-wider text-amber-700 dark:text-amber-300 block">
                          💡 {language === 'pb' ? 'ਸਰਲ ਭਾਵਾਰਥ:' : language === 'en' ? 'Simple Meaning:' : 'सरल भावार्थ:'}
                        </strong>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                          {v.bhavarth[language] || v.bhavarth.hi}
                        </p>
                      </div>
                    )}

                    {/* Spiritual Essence / Chakra Note */}
                    {v.spiritualEssence && (
                      <div className="mt-2 p-2.5 rounded-lg bg-black/5 dark:bg-white/5 flex items-start gap-2 text-xs">
                        <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span style={{ color: theme.textSecondary }}>
                          <strong className="font-bold text-amber-700 dark:text-amber-300">
                            {language === 'pb' ? 'ਚੱਕਰ/ਸਾਧਨਾ ਸੋਪਾਨ: ' : language === 'en' ? 'Chakra/Stage: ' : 'चक्र/साधना सोपान: '}
                          </strong>
                          {v.spiritualEssence[language] || v.spiritualEssence.hi}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: CHAKRA & KAMAL STAGES CHART */}
          {activeTab === 'chart' && (
            <div className="space-y-6">
              <div className="text-center space-y-2 border-b pb-4" style={{ borderColor: theme.cardBorder }}>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                  {exactTop}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb' 
                    ? '🌸 ਮੂਲਾਧਾਰ ਤੋਂ ਅਨਾਮੀ ਪਦ ਤੱਕ ੧੯ ਪ੍ਰਮੁੱਖ ਸੋਪਾਨ ਤਾਲਿਕਾ' 
                    : language === 'en' 
                    ? '🌸 19 Key Spiritual Stages: From Muladhar to Anami Dham' 
                    : '🌸 मूलाधार से अनामी पद तक १९ प्रमुख सोपान तालिका'}
                </h3>
                <p className="text-xs sm:text-sm font-serif max-w-xl mx-auto" style={{ color: theme.textSecondary }}>
                  {language === 'pb'
                    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੁਆਰਾ ਵਰਣਿਤ ਸਰੀਰ ਵਿੱਚ ਸੂਖਮ ਚੱਕਰਾਂ, ਧੁਨਾਂ, ਦੇਵਤਿਆਂ, ਮੰਤਰਾਂ ਤੇ ਅਮਰ ਲੋਕਾਂ ਦਾ ਕ੍ਰਮਬੱਧ ਨਕਸ਼ਾ'
                    : language === 'en'
                    ? 'Sequential roadmap of chakras, inner sounds, deities, mantras, and eternal realms revealed by Satguru Kabir Saheb'
                    : 'सतगुरु कबीर साहेब द्वारा वर्णित शरीर में सूक्ष्म चक्रों, ध्वनियों, देवों, मंत्रों एवं अमर लोकों का क्रमबद्ध नक्शा'}
                </p>
              </div>

              <div className="space-y-3">
                {KAMAL_STAGES_SUMMARY.map((stage, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveTab('verses');
                      setSelectedVerseNo(stage.verseNo);
                      setTimeout(() => {
                        const el = document.getElementById(`verse-${stage.verseNo}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                    className="p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/50 hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-black text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                        {stage.verseNo}
                      </span>
                      <div>
                        <h4 className="text-base font-bold font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
                          <span>{stage.name}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-sans">
                            {stage.petalsOrStage}
                          </span>
                        </h4>
                        <p className="text-xs mt-1" style={{ color: theme.textSecondary }}>
                          <strong>{language === 'pb' ? 'ਦੇਵਤਾ/ਨਾਦ:' : language === 'en' ? 'Deity/Sound:' : 'देवता/नाद:'}</strong> {stage.deityOrSound} • <strong>{language === 'pb' ? 'ਮੰਤਰ/ਸ਼ਬਦ:' : language === 'en' ? 'Mantra/Sound:' : 'मंत्र/शब्द:'}</strong> {stage.mantraOrWord}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-300 group-hover:underline flex items-center gap-1 font-serif">
                        <span>{language === 'pb' ? `ਕੜੀ ${stage.verseNo} ਦੇਖੋ` : language === 'en' ? `View Verse ${stage.verseNo}` : `कड़ी ${stage.verseNo} देखें`}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ESSENCE & SPIRITUAL GUIDE */}
          {activeTab === 'audio' && (
            <div className="space-y-6">
              <div 
                style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', borderColor: '#F59E0B' }}
                className="p-5 sm:p-6 rounded-3xl border-2 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                      {language === 'pb' 
                        ? "ਸਾਧਨਾ ਮਰਮ: 'ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ' ਦਾ ਅਮਰ ਸੰਦੇਸ਼" 
                        : language === 'en' 
                        ? "Spiritual Essence: The Eternal Message of 'Kar Nainon Deedar'" 
                        : "साधना मर्म: 'कर नैनों दीदार' का अमर संदेश"}
                    </h3>
                    <p className="text-xs font-serif" style={{ color: theme.textSecondary }}>
                      {language === 'pb' 
                        ? 'ਵਿਹੰਗਮ ਚਾਲ ਤੇ ਸੁਰਤਿ-ਸ਼ਬਦ ਯੋਗ ਦੀ ਪੂਰਨ ਕੁੰਜੀ' 
                        : language === 'en' 
                        ? 'The Master Key to Vihangam Chaal & Surati-Shabd Yoga' 
                        : 'विहंगम चाल व सुरति-शब्द योग की पूर्ण कुंजी'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                  {language === 'pb' ? (
                    <>
                      <p>
                        <strong>੧. ਪਿੰਡ ਤੇ ਅੰਡ ਤੋਂ ਪਾਰ ਦੀ ਯਾਤਰਾ:</strong> ਮੂਲਾਧਾਰ, ਸਵਾਧਿਸ਼ਠਾਨ, ਮਣੀਪੁਰ, ਅਨਾਹਤ, ਵਿਸ਼ੁੱਧ ਅਤੇ ਆਗਿਆ ਚੱਕਰ — ਇਹ ਸਭ ਸਥੂਲ ਸਰੀਰ (ਪਿੰਡ) ਦੇ ਅੰਗ ਹਨ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀਵ ਨੂੰ ਇਹਨਾਂ ਚੱਕਰਾਂ ਦੇ ਭਰਮਜਾਲ ਤੋਂ ਕੱਢ ਕੇ ਅਨਹਦ ਨਾਦ ਤੇ ਦਸਵੇਂ ਦੁਆਰ ਰਾਹੀਂ ਸਿੱਧਾ ਸਤਯ ਲੋਕ (ਸੱਚਖੰਡ) ਲੈ ਜਾਂਦੇ ਹਨ।
                      </p>
                      <p>
                        <strong>੨. ਵਿਹੰਗਮ ਚਾਲ ਦਾ ਰਹੱਸ:</strong> ਪੰਛੀ ਜਿਵੇਂ ਸਿੱਧਾ ਆਕਾਸ਼ ਵਿੱਚ ਉੱਚੀ ਉਡਾਣ ਭਰਦਾ ਹੈ, ਉਸੇ ਤਰ੍ਹਾਂ ਸੁਰਤਿ-ਸ਼ਬਦ ਅਭਿਆਸ ਦੁਆਰਾ ਜੀਵ ਸਿੱਧਾ ਕਾਲ-ਮਾਇਆ ਦੀ ਸੀਮਾ (ਸੋਹੰ) ਨੂੰ ਪਾਰ ਕਰ ਕੇ ਅਨਾਮੀ ਧਾਮ ਪਹੁੰਚਦਾ ਹੈ।
                      </p>
                      <p>
                        <strong>੩. ਸਤਿਗੁਰੂ ਸ਼ਰਣ ਦੀ ਅਨਿਵਾਰੀਤਾ:</strong> ਮਹਾਸੁੰਨ ਦੀ ਘੋਰ ਹਨੇਰੀ ਘਾਟੀ ਅਤੇ ਡਾਕਿਨੀ-ਸ਼ਾਕਿਨੀ ਦੇ ਭੈਅ ਤੋਂ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੁਆਰਾ ਪ੍ਰਾਪਤ "ਸਤਯਨਾਮ" ਹੀ ਜੀਵ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।
                      </p>
                    </>
                  ) : language === 'en' ? (
                    <>
                      <p>
                        <strong>1. Journey Beyond the Physical & Astral Body:</strong> Muladhar, Swadhisthana, Manipur, Anahata, Vishuddha, and Agya chakras belong to the physical body. Satguru Kabir Saheb guides the soul beyond these illusions directly to the Eternal Realm through the 10th Door and the Unstruck Sound.
                      </p>
                      <p>
                        <strong>2. The Secret of Vihangam Flight:</strong> Just as a bird soars directly across vast skies, the soul practicing Surati-Shabd Yoga transcends the boundary of Kaal and Maya to attain Anami Dham.
                      </p>
                      <p>
                        <strong>3. Essential Grace of the Satguru:</strong> Across the dark abyss of Mahasunn, only the sacred power of "Satyanaam" bestowed by the Satguru protects and liberates the soul.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>१. पिण्ड और अण्ड से पार की यात्रा:</strong> मूलाधार, स्वाधिष्ठान, मणिपुर, अनाहत, विशुद्ध तथा आज्ञा चक्र — ये सब स्थूल शरीर (पिण्ड) के अंग हैं। सतगुरु कबीर साहेब जीव को इन चक्रों के भ्रमजाल से निकालकर अनहद नाद और दसवें द्वार द्वारा सीधे सत्त लोक ले जाते हैं।
                      </p>
                      <p>
                        <strong>२. विहंगम चाल का रहस्य:</strong> पक्षी जैसे सीधे गगन में ऊंची उड़ान भरता है, वैसे ही सुरति-शब्द अभ्यास द्वारा जीव सीधे काल-माया की सीमा (सोहं) को पार कर अनामी धाम पहुँचता है।
                      </p>
                      <p>
                        <strong>३. सतगुरु शरण की अनिवार्यता:</strong> महाशून्य की घोर अंधकारमयी घाटी तथा डाकिनी-शाकिनी के भय से केवल सतगुरु द्वारा प्राप्त "सत्यनाम" ही जीव की रक्षा करता है।
                      </p>
                    </>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-500/30 text-center">
                  <button
                    onClick={toggleAudio}
                    className="px-6 py-3 rounded-2xl bg-amber-500 text-white font-bold font-serif hover:bg-amber-600 shadow-lg transition flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>
                      {isPlayingAudio 
                        ? (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ ਬੰਦ ਕਰੋ' : language === 'en' ? 'Pause Satyanaam Dhun' : 'सत्यनाम धुन बंद करें') 
                        : (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ ਤੇ ਸਿਮਰਨ ਆਰੰਭ ਕਰੋ' : language === 'en' ? 'Play Satyanaam Dhun & Chanting' : 'सत्यनाम धुन व सुमिरन प्रारंभ करें')}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sacred Footer Bar */}
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="p-3 border-t text-center shrink-0 select-none"
        >
          <span 
            style={{ color: theme.sacredMaroon }}
            className="text-sm sm:text-base font-black font-serif tracking-wide block drop-shadow-2xs"
          >
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};
