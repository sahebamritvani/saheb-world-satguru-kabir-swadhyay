import React, { useState } from 'react';
import { 
  SATYA_NAAM_DATA, 
  SATYA_NAAM_COMPARISON_TABLE, 
  GURU_NANAK_KABIR_DIALOGUE 
} from '../data/satyaNaamData';
import { useLanguage } from '../context/LanguageContext';
import { useAppTheme } from '../theme/ThemeContext';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  BookOpenText, 
  Sparkles, 
  Scale, 
  Scroll, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { sacredHaptics } from '../services/haptics';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface SatyaNaamMahaMargdarshikaProps {
  language: Language;
  onClose?: () => void;
}

export const SatyaNaamMahaMargdarshika: React.FC<SatyaNaamMahaMargdarshikaProps> = ({ language }) => {
  const { theme } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'darshan' | 'comparison' | 'dialogue'>('darshan');
  const [expandedId, setExpandedId] = useState<string | null>('mool-arth');

  const getTranslated = (obj: any) => {
    if (!obj) return '';
    return obj[language] || obj['hi'] || obj['en'] || '';
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16 font-sans">
      {/* Sacred Header Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, #6B1800 0%, #8B2500 55%, #9A3412 100%)',
          borderColor: theme.accentGold 
        }}
        className="rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border-2 backdrop-blur-md"
      >
        <div className="absolute -right-8 -bottom-8 text-9xl opacity-10 pointer-events-none select-none">
          ੴ
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest border border-white/30 font-mono">
                {language === 'pb' ? 'ਸਤਯਨਾਮ ਤੇ ਸਾਰਸ਼ਬਦ ਰਹਿਸ' : language === 'en' ? 'Original Sound Current' : 'सत्यनाम व सारशब्द तत्व'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/30 text-amber-100 text-xs font-serif font-bold border border-amber-300/40">
                {language === 'pb' ? 'ਸੂਖਮ ਵੇਦ ਪ੍ਰਮਾਣ' : language === 'en' ? 'Anurag Sagar Praman' : 'सूक्ष्म वेद व कबीर सागर प्रमाण'}
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black font-serif leading-tight">
              {getTranslated(SATYA_NAAM_DATA.title)}
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 font-serif max-w-3xl leading-relaxed">
              {getTranslated(SATYA_NAAM_DATA.coreIntroduction)}
            </p>
          </div>

        </div>
      </div>

      {/* Modern 3-Tab Navigator */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
        className="rounded-2xl p-2 border shadow-xs flex items-center justify-between gap-2 overflow-x-auto"
      >
        {[
          { 
            id: 'darshan' as const, 
            label: language === 'pb' ? '੧. ਸਤਯਨਾਮ ਦਾ ਮੂਲ ਤੱਤ (੪ ਥੰਮ੍ਹ)' : language === 'en' ? '1. Core Truth & 4 Pillars' : '१. सत्यनाम मूल तत्व (४ आधार)',
            icon: BookOpenText 
          },
          { 
            id: 'comparison' as const, 
            label: language === 'pb' ? '੨. ਸਤਯਨਾਮ ਬਨਾਮ ਸਾਰਸ਼ਬਦ' : language === 'en' ? '2. Satyanaam vs Saar Shabd' : '२. सत्यनाम बनाम सारनाम (तुलना)',
            icon: Scale 
          },
          { 
            id: 'dialogue' as const, 
            label: language === 'pb' ? '੩. ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਸੰਵਾਦ' : language === 'en' ? '3. Guru Nanak & Kabir Dialogue' : '३. गुरु नानक देव जी ऐतिहासिक संवाद',
            icon: Scroll 
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveTab(tab.id);
              }}
              style={{
                backgroundColor: isActive ? theme.buttonPrimaryBg : 'transparent',
                color: isActive ? theme.buttonPrimaryText : theme.textPrimary,
              }}
              className={`flex-1 py-2.5 px-3 rounded-xl font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 whitespace-nowrap transition cursor-pointer ${
                isActive ? 'shadow-md' : 'hover:bg-amber-500/10'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: SATYANAAM MOOL ARTH & 4 PILLARS */}
      {activeTab === 'darshan' && (
        <div className="space-y-4">
          {SATYA_NAAM_DATA.sections.map((section) => {
            const isExpanded = expandedId === section.id;
            return (
              <motion.div
                key={section.id}
                layout
                style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
                className="rounded-3xl border p-5 sm:p-6 shadow-sm transition hover:shadow-md"
              >
                <div 
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setExpandedId(isExpanded ? null : section.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 dark:text-amber-300 font-mono font-bold text-sm shrink-0">
                      {section.number}
                    </div>
                    <h2 className="font-serif font-black text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
                      {getTranslated(section.title)}
                    </h2>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-dashed border-amber-500/20 space-y-4 text-xs sm:text-sm font-serif leading-relaxed" style={{ color: theme.textPrimary }}>
                        {/* Section Main Content */}
                        <div className="whitespace-pre-line leading-relaxed text-justify">
                          {getTranslated(section.content)}
                        </div>

                        {/* Sacred Doha Callouts if present */}
                        {section.dohas && section.dohas.length > 0 && (
                          <div className="space-y-3 pt-2">
                            {section.dohas.map((d, dIdx) => (
                              <UnifiedDohaCard
                                key={dIdx}
                                id={`satyanaam-${section.id}-${dIdx}`}
                                text={{
                                  hi: d.couplet,
                                  pb: d.coupletPb || d.couplet,
                                  en: d.couplet,
                                }}
                                source={d.reference}
                                language={language}
                                defaultExpandedMeaning={false}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* TAB 2: SATYANAAM VS SAAR SHABD COMPARISON TABLE */}
      {activeTab === 'comparison' && (
        <div 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
          className="rounded-3xl border p-5 sm:p-7 shadow-sm space-y-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <h2 className="font-serif font-black text-lg sm:text-2xl" style={{ color: theme.sacredMaroon }}>
                {language === 'pb'
                  ? 'ਸਤਯਨਾਮ ਅਤੇ ਸਾਰਨਾਮ (ਸਾਰਸ਼ਬਦ) ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ'
                  : language === 'en'
                  ? 'Key Distinction: Satyanaam vs Saar Shabd'
                  : 'सत्यनाम और सारनाम (सारशब्द) में मुख्य अंतर (अनुराग सागर)'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-serif">
              {language === 'pb'
                ? 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਨੇ ਅਨੁਰਾਗ ਸਾਗਰ ਵਿੱਚ ਧਰਮਦਾਸ ਜੀ ਨੂੰ ਸਮਝਾਇਆ ਹੈ ਕਿ ਕਾਲ ਦੇ ਜਾਲ ਤੋਂ ਨਿਕਲਣ ਲਈ ਜੀਵ ਨੂੰ ਨਾਮ ਦੀਆਂ ਤਿੰਨ ਅਵਸਥਾਵਾਂ (ਪ੍ਰਥਮ ਨਾਮ, ਸਤਯਨਾਮ ਅਤੇ ਸਾਰਨਾਮ) ਵਿੱਚੋਂ ਗੁਜ਼ਰਨਾ ਪੈਂਦਾ ਹੈ:'
                : language === 'en'
                ? 'In Anurag Sagar, Kabir Saheb elucidated to Dharmadas Ji that the soul passes through distinct stages of Naam to cross beyond the 21 universes of Kal:'
                : 'सतगुरु कबीर साहेब ने अपने ग्रंथ \'अनुराग सागर\' में धर्मदास जी को समझाया है कि काल के जाल से निकलने के लिए जीव को नाम की तीन अवस्थाओं (प्रथम नाम, सत्यनाम, और सारनाम) से गुजरना पड़ता है:'}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-amber-500/20 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm font-serif">
              <thead>
                <tr className="bg-amber-500/15 border-b border-amber-500/20 text-amber-950 dark:text-amber-100 font-black">
                  <th className="p-3 sm:p-4 w-1/4">
                    {language === 'pb' ? 'ਵਿਸ਼ੇਸ਼ਤਾ' : language === 'en' ? 'Feature' : 'विशेषता'}
                  </th>
                  <th className="p-3 sm:p-4 w-3/8 text-amber-800 dark:text-amber-300">
                    {language === 'pb' ? 'ਸਤਯਨਾਮ (Satyanaam)' : language === 'en' ? 'Satyanaam' : 'सत्यनाम (Satyanaam)'}
                  </th>
                  <th className="p-3 sm:p-4 w-3/8 text-emerald-800 dark:text-emerald-300">
                    {language === 'pb' ? 'ਸਾਰਨਾਮ / ਸਾਰਸ਼ਬਦ (Saarshabd)' : language === 'en' ? 'Saar Naam / Saar Shabd' : 'सारनाम / सारशब्द (Saarnaam)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/10">
                {SATYA_NAAM_COMPARISON_TABLE.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-amber-500/5 transition">
                    <td className="p-3 sm:p-4 font-bold text-gray-800 dark:text-gray-200 bg-black/5 dark:bg-white/5 align-top">
                      {getTranslated(row.feature)}
                    </td>
                    <td className="p-3 sm:p-4 leading-relaxed text-gray-700 dark:text-gray-300 align-top">
                      {getTranslated(row.satyaNaam)}
                    </td>
                    <td className="p-3 sm:p-4 leading-relaxed text-emerald-900 dark:text-emerald-200 font-medium bg-emerald-500/5 align-top">
                      {getTranslated(row.saarShabd)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sacred Anurag Sagar Vani Callout */}
          <UnifiedDohaCard
            id="anurag-sagar-saarshabd"
            badgeLabel={{
              hi: 'अनुराग सागर पावन प्रमाण',
              pb: 'ਅਨੁਰਾਗ ਸਾਗਰ ਪਾਵਨ ਪ੍ਰਮਾਣ',
              en: 'Anurag Sagar Verse',
            }}
            text={{
              hi: 'कबीर, मूल नाम (सारशब्द) गुप्त है, वाको जाने न कोय॥\nजो जाने सो जीव मुक्त, बहुरि न संकट होय॥',
              pb: 'ਕਬੀਰ, ਮੂਲ ਨਾਮ (ਸਾਰਸ਼ਬਦ) ਗੁਪਤ ਹੈ, ਵਾਕੋ ਜਾਨੈ ਨ ਕੋਇ ॥\nਜੋ ਜਾਨੈ ਸੋ ਜੀਵ ਮੁਕਤ, ਬਹੁਰਿ ਨ ਸੰਕਟ ਹੋਇ ॥',
              en: 'Kabir, mool naam (Saarshabd) gupt hai, vaako jaane na koy ||\nJo jaane so jeev mukt, bahuri na sankat hoy ||',
            }}
            meaning={{
              hi: 'सारशब्द परम गुप्त है; जिस जीव को सतगुरु द्वारा इसकी पहचान हो जाती है, वह जन्म-मरण के संकट से सदा के लिए मुक्त हो जाता है।',
              pb: 'ਸਾਰਸ਼ਬਦ ਪਰਮ ਗੁਪਤ ਹੈ; ਜਿਸ ਜੀਵ ਨੂੰ ਸਤਿਗੁਰੂ ਰਾਹੀਂ ਇਸਦੀ ਪਛਾਣ ਹੋ ਜਾਂਦੀ ਹੈ, ਉਹ ਸਦਾ ਲਈ ਕਾਲ ਦੇ ਸੰਕਟ ਤੋਂ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
              en: 'Saar Shabd is supremely esoteric; the soul awakened to it by the Satguru is forever liberated from the cycle of birth and death.',
            }}
            language={language}
          />
        </div>
      )}

      {/* TAB 3: GURU NANAK DEV JI & KABIR SAHEB HISTORICAL DIALOGUE */}
      {activeTab === 'dialogue' && (
        <div 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
          className="rounded-3xl border p-5 sm:p-7 shadow-sm space-y-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Scroll className="w-5 h-5 text-amber-600" />
              <h2 className="font-serif font-black text-lg sm:text-2xl" style={{ color: theme.sacredMaroon }}>
                {getTranslated(GURU_NANAK_KABIR_DIALOGUE.title)}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-serif">
              {language === 'pb'
                ? 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ, ਕਾਲੀ ਵੇਈਂ ਨਦੀ ਪ੍ਰਸੰਗ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਪ੍ਰਮਾਣ'
                : language === 'en'
                ? 'Sultanpur Lodhi, Bein River Immersion, and the Glory of Satyanaam in Sri Guru Granth Sahib'
                : 'सुल्तानपुर लोधी, काली वेईं नदी प्रसंग एवं सत्यनाम प्रमाण'}
            </p>
          </div>

          {/* Sultanpur Lodhi Bein River Context */}
          <div 
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-5 rounded-2xl border space-y-3"
          >
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-serif font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਵੇਈਂ ਨਦੀ ਮਿਲਾਪ ਅਤੇ ਜ਼ਿੰਦਾ ਪੀਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Bein River Meeting & Zinda Mahatma Darshan' : 'वेईं नदी मिलाप एवं जिंदा महात्मा दर्शन'}</span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-justify text-gray-700 dark:text-gray-200">
              {getTranslated(GURU_NANAK_KABIR_DIALOGUE.meetingBackground)}
            </p>
          </div>

          {/* Japji Sahib First Verse Connection */}
          <div 
            style={{ backgroundColor: 'rgba(217, 119, 6, 0.08)', borderColor: theme.accentGold }}
            className="p-5 rounded-2xl border-2 space-y-3"
          >
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200 font-serif font-black text-sm sm:text-base">
              <span>☬</span>
              <span>{language === 'pb' ? 'ਜਪੁਜੀ ਸਾਹਿਬ ਦੀ ਪ੍ਰਥਮ ਤੁਕ ਵਿੱਚ ਸਤਯਨਾਮ ਦੀ ਮਹਿਮਾ' : language === 'en' ? 'Glory of Satyanaam in Japji Sahib Opening Verse' : 'जपुजी साहिब की प्रथम पंक्ति में सत्यनाम की महिमा'}</span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-justify text-gray-800 dark:text-gray-100">
              {getTranslated(GURU_NANAK_KABIR_DIALOGUE.satyaNaamMahima)}
            </p>
          </div>

          {/* Triloki vs Sachkhand Passage */}
          <div 
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-5 rounded-2xl border space-y-3"
          >
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-serif font-bold text-sm">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਤ੍ਰਿਲੋਕੀ (ਕਾਲ ਲੋਕ) ਦੇ ਪਾਰ ਸੱਚਖੰਡ ਦਾ ਮਾਰਗ' : language === 'en' ? 'Path to Sachkhand (Satlok) Beyond the Three Worlds' : 'त्रिलोकी (काल लोक) के पार सचखंड (सतलोक) का मार्ग'}</span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-justify text-gray-700 dark:text-gray-200">
              {getTranslated(GURU_NANAK_KABIR_DIALOGUE.trilokiVsSachkhand)}
            </p>
          </div>

          {/* Historical Authentic Verses */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-300">
              {language === 'pb' ? 'ਇਤਿਹਾਸਕ ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ ਤੁਕਾਂ' : language === 'en' ? 'Authentic Historical Vani Excerpts' : 'ऐतिहासिक प्रामाणिक वाणी पंक्तियाँ'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GURU_NANAK_KABIR_DIALOGUE.historicalVerses.map((v, vIdx) => (
                <UnifiedDohaCard
                  key={vIdx}
                  id={`nanak-kabir-verse-${vIdx}`}
                  text={{
                    hi: v.devanagari,
                    pb: v.gurmukhi,
                    en: v.devanagari,
                  }}
                  meaning={v.meaning}
                  language={language}
                />
              ))}
            </div>
          </div>

          {/* Spiritual Relevance */}
          <div 
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.accentGold }}
            className="p-5 rounded-2xl border-l-4 space-y-2"
          >
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-serif font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਇਸ ਮਾਰਗ ਦੀ ਪਰਮ ਪ੍ਰਾਸੰਗਿਕਤਾ' : language === 'en' ? 'Supreme Spiritual Relevance & Liberation' : 'इस मार्ग की परम प्रासंगिकता व मोक्ष निश्चय'}</span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-gray-700 dark:text-gray-200">
              {getTranslated(GURU_NANAK_KABIR_DIALOGUE.spiritualRelevance)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
