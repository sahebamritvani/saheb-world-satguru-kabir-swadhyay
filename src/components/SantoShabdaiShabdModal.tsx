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
  Flame,
  Zap,
  Disc
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { SANTO_SHABDAI_SHABD_VERSES, MUDRA_SOUND_SUMMARY } from '../data/granths/santoShabdaiShabd';
import { satyanaamAudio } from '../services/audioDhun';

interface SantoShabdaiShabdModalProps {
  language: Language;
  onClose: () => void;
}

export const SantoShabdaiShabdModal: React.FC<SantoShabdaiShabdModalProps> = ({
  language,
  onClose
}) => {
  const { theme } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'verses' | 'matrix'>('verses');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Filtered verses based on search query
  const filteredVerses = useMemo(() => {
    if (!searchQuery.trim()) return SANTO_SHABDAI_SHABD_VERSES;
    const query = searchQuery.toLowerCase();
    return SANTO_SHABDAI_SHABD_VERSES.filter((v, idx) => {
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
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-bold border border-indigo-500/30 shrink-0">
              <Zap className="w-4 h-4 text-indigo-500 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black tracking-wider text-indigo-700 dark:text-indigo-300 uppercase font-serif truncate">
                  {language === 'pb' ? 'ਕਬੀਰ ਸ਼ਬਦਾਵਲੀ' : language === 'en' ? 'Kabir Shabdawali' : 'कबीर शब्दावली'}
                </span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 shrink-0">
                  {language === 'pb' ? '੫ ਸ਼ਬਦ' : language === 'en' ? '5 Sounds' : '५ शब्द व ५ मुद्रा'}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold font-serif tracking-tight text-amber-800 dark:text-amber-200 truncate">
                {language === 'pb' 
                  ? 'ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ ਬਖਾਨਾ' 
                  : language === 'en' 
                  ? 'Santo Shabdai Shabd Bakhana' 
                  : 'संतो शब्दई शब्द बखाना'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleAudio}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition border cursor-pointer ${
                isPlayingAudio
                  ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                  : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
              }`}
              title="सत्यनाम धुन सिमरण"
            >
              {isPlayingAudio ? <VolumeX size={13} /> : <Volume2 size={13} />}
              <span className="hidden xs:inline">
                {isPlayingAudio 
                  ? (language === 'pb' ? 'ਧੁਨ ਰੋਕੋ' : 'धुन बंद') 
                  : (language === 'pb' ? 'ਸਤਯਨਾਮ' : 'सत्यनाम')}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition text-gray-500 cursor-pointer"
              title="बंद करें"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation & Search (Second Bar - Compact & Streamlined) */}
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="py-1 px-2.5 sm:px-4 border-b flex flex-wrap items-center justify-between gap-1.5 shrink-0 min-h-[36px]"
        >
          <div className="flex items-center gap-1 p-0.5 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/20">
            <button
              onClick={() => setActiveTab('verses')}
              className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeTab === 'verses'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <BookOpen size={13} />
              <span>{language === 'pb' ? 'ਸੰਪੂਰਨ ਪਦ (੧੪)' : language === 'en' ? 'All Verses (14)' : 'सम्पूर्ण पद (१४)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeTab === 'matrix'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Compass size={13} />
              <span>{language === 'pb' ? '੫ ਸ਼ਬਦ-ਮੁਦ੍ਰਾ ਸਾਰਣੀ' : language === 'en' ? '5 Sound-Mudra Matrix' : '५ शब्द-मुद्रा सारणी'}</span>
            </button>
          </div>

          {activeTab === 'verses' && (
            <div className="relative flex-1 sm:flex-none min-w-[130px] sm:w-48">
              <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'pb' ? 'ਪਦ ਵਿੱਚ ਖੋਜੋ...' : language === 'en' ? 'Search in verses...' : 'पद या शब्द खोजें...'}
                className="w-full pl-7 pr-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] bg-white dark:bg-zinc-900 border border-amber-500/30 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
              />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 pb-16 sm:pb-20 space-y-6">
          {activeTab === 'verses' && (
            <div className="space-y-5">
              {filteredVerses.map((verse, idx) => {
                const activeLines = language === 'pb' && verse.lines.pb ? verse.lines.pb : verse.lines.hi;
                const activeLineStr = activeLines.join('\n');
                const isCopied = copiedIndex === idx;

                return (
                  <div
                    key={verse.id}
                    style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                    className="p-4 sm:p-5 rounded-2xl border shadow-xs transition hover:shadow-md space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-amber-500/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center">
                          {idx === 0 ? (language === 'pb' ? 'ਟੇਕ' : language === 'en' ? 'Ref' : 'टेक') : idx}
                        </span>
                        <span className="text-xs font-bold text-amber-700 dark:text-amber-300 font-serif">
                          {idx === 0 
                            ? (language === 'pb' ? 'ਮੰਗਲਾਚਰਣ (ਟੇਕ)' : language === 'en' ? 'Mangalacharan (Refrain)' : 'मंगलाचरण (टेक)') 
                            : (language === 'pb' ? `ਕੜੀ #${idx}` : language === 'en' ? `Verse #${idx}` : `कड़ी #${idx}`)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyVerse(activeLineStr, idx)}
                          className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 transition cursor-pointer"
                          title={language === 'pb' ? 'ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy Verse' : 'कॉपी करें'}
                        >
                          {isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(activeLineStr)}
                          className="p-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition cursor-pointer"
                          title={language === 'pb' ? 'ਵਟਸਐਪ ਤੇ ਸ਼ੇਅਰ ਕਰੋ' : language === 'en' ? 'Share on WhatsApp' : 'व्हाट्सएप शेयर'}
                        >
                          <Share2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Sacred Verses Lines */}
                    <div className="space-y-1.5">
                      {activeLines.map((line, lIdx) => (
                        <p 
                          key={lIdx}
                          className="text-base sm:text-xl font-bold font-serif leading-relaxed text-amber-950 dark:text-amber-100 drop-shadow-2xs"
                        >
                          {line}
                        </p>
                      ))}

                      {language === 'pb' && (
                        <div className="mt-2 pt-1 text-xs font-medium font-serif opacity-70" style={{ color: theme.textSecondary }}>
                          {verse.lines.hi.map((hLine, hIdx) => (
                            <p key={hIdx}>ਮੂਲ: {hLine}</p>
                          ))}
                        </div>
                      )}

                      {language === 'en' && verse.lines.en && (
                        <div className="mt-2 pt-1 text-xs italic font-serif opacity-80" style={{ color: theme.textSecondary }}>
                          {verse.lines.en.map((eLine, eIdx) => (
                            <p key={eIdx}>{eLine}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bhavarth Box */}
                    {verse.bhavarth && (
                      <div 
                        style={{ backgroundColor: theme.bgSecondary }}
                        className="p-3 sm:p-4 rounded-xl border border-amber-500/20 space-y-1.5"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-black text-amber-700 dark:text-amber-300 font-serif">
                          <Sparkles size={12} className="text-amber-500" />
                          <span>{language === 'pb' ? 'ਭਾਵਾਰਥ ਤੇ ਰਹਿਸਯ' : language === 'en' ? 'Bhavarth & Mystical Meaning' : 'भावार्थ व गूढ़ रहस्य'}</span>
                        </div>
                        <p className="text-xs sm:text-sm font-serif leading-relaxed opacity-90">
                          {verse.bhavarth[language] || verse.bhavarth.hi}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'matrix' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-200 font-bold font-serif">
                  <Disc className="w-5 h-5 text-indigo-600 animate-spin" />
                  <h3 className="text-sm sm:text-base font-bold">
                    {language === 'pb' 
                      ? '੫ ਸ਼ਬਦ ਤੇ ੫ ਮੁਦ੍ਰਾਵਾਂ ਦੀ ਗੁਪਤ ਸਾਰਣੀ' 
                      : language === 'en' 
                      ? 'Secret Comparative Matrix of 5 Sounds & 5 Mudras' 
                      : '५ शब्द व ५ मुद्राओं की गुप्त तुलनात्मक सारणी'}
                  </h3>
                </div>
                <p className="text-xs opacity-90 font-serif leading-relaxed">
                  {language === 'pb'
                    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਸ ਸ਼ਬਦ ਵਿੱਚ ਇਹ ਪ੍ਰਤੱਖ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਹੈ ਕਿ ਕਾਲ ਨਿਰੰਜਨ ਨੇ ੫ ਸ਼ਬਦਾਂ ਅਤੇ ੫ ਯੋਗ-ਮੁਦ੍ਰਾਵਾਂ ਦਾ ਜਾਲ ਫੈਲਾ ਕੇ ਗਿਆਨੀਆਂ ਤੇ ਸਿੱਧਾਂ ਨੂੰ ਵੀ ਬੰਨ੍ਹ ਰੱਖਿਆ ਹੈ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਤੋਂ ਪ੍ਰਾਪਤ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ ਹੀ ਇਸ ਜਾਲ ਤੋਂ ਪਾਰ ਲੈ ਜਾਂਦਾ ਹੈ।'
                    : language === 'en'
                    ? 'Satguru Kabir Saheb has directly revealed in this Shabad that Kaal Niranjan has trapped seekers and yogis in the snare of 5 sounds and 5 yogic mudras. Only the Nih-Akshar Satyanaam received from Satguru takes the soul beyond this illusion.'
                    : 'सतगुरु कबीर साहेब ने इस शब्द में यह प्रत्यक्ष प्रमाणित किया है कि काल निरंजन ने ५ शब्दों और ५ योग-मुद्राओं का जाल फैलाकर ज्ञानियों व सिद्धों को भी बांध रखा है। केवल सतगुरु से प्राप्त निःअक्षर सत्यनाम ही इस जाल से पार ले जाता है।'}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-amber-500/20 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-serif">
                  <thead>
                    <tr style={{ backgroundColor: theme.bgSecondary }} className="border-b border-amber-500/30 text-amber-800 dark:text-amber-200">
                      <th className="p-3 font-bold">{language === 'pb' ? 'ਸ਼ਬਦ (Sound)' : language === 'en' ? 'Sound' : 'शब्द (Sound)'}</th>
                      <th className="p-3 font-bold">{language === 'pb' ? 'ਮੁਦ੍ਰਾ (Mudra)' : language === 'en' ? 'Mudra' : 'मुद्रा (Mudra)'}</th>
                      <th className="p-3 font-bold">{language === 'pb' ? 'ਸਰੀਰ ਵਿੱਚ ਸਥਾਨ' : language === 'en' ? 'Body Location' : 'काया में स्थान'}</th>
                      <th className="p-3 font-bold">{language === 'pb' ? 'ਰਿਸ਼ੀ / ਦੇਵਤਾ' : language === 'en' ? 'Rishi / Deity' : 'ऋषि / देव'}</th>
                      <th className="p-3 font-bold">{language === 'pb' ? 'ਆਤਮਿਕ ਸੀਮਾ ਤੇ ਜਾਲ' : language === 'en' ? 'Spiritual Level / Trap' : 'आध्यात्मिक सीमा व काल जाल'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/10">
                    {MUDRA_SOUND_SUMMARY.map((row, rIdx) => {
                      const getField = (f: any) => typeof f === 'object' && f !== null ? (f[language] || f.hi || f.en) : f;
                      return (
                        <tr key={rIdx} className="hover:bg-amber-500/5 transition">
                          <td className="p-3 font-bold text-amber-900 dark:text-amber-200">{getField(row.shabdName)}</td>
                          <td className="p-3 font-semibold text-indigo-700 dark:text-indigo-300">{getField(row.mudraName)}</td>
                          <td className="p-3 opacity-90">{getField(row.bodyLocation)}</td>
                          <td className="p-3 opacity-90 font-medium">{getField(row.associatedRishiDeity)}</td>
                          <td className="p-3 text-red-600 dark:text-red-400 font-semibold">{getField(row.spiritualLevelAndTrap)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1">
                <p className="text-sm font-bold text-amber-900 dark:text-amber-200 font-serif">
                  {language === 'pb' 
                    ? '"ਕਹੈਂ ਕਬੀਰ ਅਕਸ਼ਰ ਕੇ ਆਗੇ, ਨਿਃਅਕਸ਼ਰ ਉਜਿਯਾਲਾ ॥"' 
                    : language === 'en'
                    ? '"Kahain Kabir Akshar Ke Aage, Nih-Akshar Ujiyaala ||"'
                    : '"कहैं कबीर अक्षर के आगे, निःअक्षर उजियाला ॥"'}
                </p>
                <p className="text-xs opacity-80 font-serif">
                  {language === 'pb'
                    ? 'ਖ਼ਰ (ਸਰੀਰ) ਅਤੇ ਅੱਖਰ (ਬ੍ਰਹਿਮੰਡ) ਤੋਂ ਪਾਰ ਕੇਵਲ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ ਅਮਰ ਪ੍ਰਕਾਸ਼ ਹੈ।'
                    : language === 'en'
                    ? 'Beyond the perishable body and cosmic mind, only the Nih-Akshar Satyanaam is eternal.'
                    : 'क्षर (शरीर) और अक्षर (ब्रह्मांड) से पार केवल निःअक्षर सत्यनाम का अमर प्रकाश है।'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div 
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="p-3 border-t flex items-center justify-between text-xs font-serif text-amber-800 dark:text-amber-300 shrink-0 select-none"
        >
          <span className="font-bold">{SACRED_BRANDING.header[language]}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs cursor-pointer"
          >
            {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
          </button>
          <span className="font-bold">{SACRED_BRANDING.footer[language]}</span>
        </div>
      </div>
    </div>
  );
};
