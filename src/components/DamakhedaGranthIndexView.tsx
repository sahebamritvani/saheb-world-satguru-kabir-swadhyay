import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Sun, Moon, Calendar, Repeat, BookOpen, ChevronRight, Play, ZoomIn, Volume2, Shield } from 'lucide-react';
import { Language } from '../types';
import { NITNEM_SECTION_STUBS } from '../data/nitnemData';
import { speechReciter } from '../services/audioDhun';

interface DamakhedaGranthIndexViewProps {
  language: Language;
  onSelectSection: (sectionId: string) => void;
  onClose: () => void;
}

export const DamakhedaGranthIndexView: React.FC<DamakhedaGranthIndexViewProps> = ({
  language,
  onSelectSection,
  onClose,
}) => {
  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());
  const [isPoonamToday, setIsPoonamToday] = useState<boolean>(false);
  const [activeDesiMonth, setActiveDesiMonth] = useState<string>('आश्विन / कार्तिक');
  const [showTeesaModal, setShowTeesaModal] = useState<boolean>(false);
  const [isChalisaLooping, setIsChalisaLooping] = useState<boolean>(false);

  useEffect(() => {
    const now = new Date();
    setCurrentHour(now.getHours());
    // Simple heuristic for Purnima (mocked or calendar check)
    // In Kabir Panth, Poonam has special significance
    const dateNum = now.getDate();
    if (dateNum === 15 || dateNum === 30) {
      setIsPoonamToday(true);
    }
  }, []);

  // Determine time-based priority
  const isMorningTime = currentHour >= 4 && currentHour < 17;
  const topPriorityId = isMorningTime ? 'prabhat-aarambh-vandana' : 'sandhya-aarambh-vandana';

  const handleLoopChalisa = () => {
    setIsChalisaLooping(!isChalisaLooping);
    if (!isChalisaLooping) {
      speechReciter.speak(
        'सतगुरु कबीर चालीसा - आदि अंत सत्यनाम हमारा। बन्दी छोड़ सतगुरु सहारा॥',
        language,
        () => {
          if (isChalisaLooping) {
            // Loop repeat
          }
        }
      );
    } else {
      speechReciter.stop();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* 1. Time-Based Smart Dashboard Banner */}
      <div className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-xl border ${
        isMorningTime
          ? 'bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 border-amber-400'
          : 'bg-gradient-to-r from-indigo-950 via-purple-950 to-zinc-950 border-indigo-500/50'
      }`}>
        <div className="absolute right-4 top-4 opacity-20 text-7xl">
          {isMorningTime ? <Sun size={80} /> : <Moon size={80} />}
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              {isMorningTime ? <Sun size={14} className="text-yellow-300 animate-spin" /> : <Moon size={14} className="text-indigo-300" />}
              {isMorningTime ? 'अमृतवेला से दोपहर (प्रभात बेला)' : 'संध्या बेला (मूल संध्या पाठ)'}
            </span>

            {isPoonamToday && (
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-mono font-bold flex items-center gap-1 animate-pulse">
                <Sparkles size={14} /> पूनो महात्म्य पावन पर्व विशेष!
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-serif">
            {language === 'pb' ? 'ਦਮਾਖੇੜਾ ਕਬੀਰ ਪੰਥ ਗ੍ਰੰਥ-ਸੂਚੀ' : language === 'en' ? 'Damakheda Kabir Panth Scripture Index' : 'दमखेड़ा कबीर पंथ पावन ग्रंथ-सूची (Index)'}
          </h2>

          <p className="text-xs sm:text-sm font-serif opacity-90 max-w-xl">
            {isMorningTime
              ? (language === 'pb' ? 'ਪ੍ਰਭਾਤ ਪਾਠ ਨਾਲ ਆਪਣੇ ਦਿਨ ਦਾ ਪਾਵਨ ਆਰੰਭ ਕਰੋ।' : language === 'en' ? 'Begin your sacred day with the Prabhat (Morning) Nitnem Recitation.' : 'प्रभात पाठ (मंगलाचरण, आरती, विनती और साखी) से अपने दिन का पावन आरंभ करें।')
              : (language === 'pb' ? 'ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਨਾਲ ਸੰਧਿਆ ਵੇਲੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਧਿਆਨ ਲਗਾਓ।' : language === 'en' ? 'Meditate at the lotus feet of Satguru during evening twilight with Mool Sandhya Path.' : 'मूल संध्या पाठ के माध्यम से संध्या बेला में सतगुरु के चरणों में ध्यान लगाएं।')}
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => onSelectSection(topPriorityId)}
              className="px-5 py-2.5 rounded-2xl bg-white text-amber-950 font-bold text-xs sm:text-sm shadow-md hover:bg-amber-100 transition flex items-center gap-2 cursor-pointer"
            >
              <Play size={16} />
              <span>{isMorningTime ? (language === 'pb' ? '੧. ਪ੍ਰਭਾਤ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? '1. Start Prabhat Path' : '१. प्रभात पाठ तुरंत शुरू करें') : (language === 'pb' ? '੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? '2. Start Mool Sandhya Path' : '२. मूल संध्या पाठ शुरू करें')}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowTeesaModal(true)}
              className="px-4 py-2.5 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-xs sm:text-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
            >
              <ZoomIn size={16} />
              <span>{language === 'pb' ? 'ਤੀਸਾ ਯੰਤਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Teesa Yantra Darshan' : 'तीसा यंत्र दर्शन (Teesa Yantra)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Special Quick Tools (Poonam, Chalisa Loop, Baramasi Month Indicator, Teesa Yantra) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Poonam Mahatmya */}
        <div className="p-4 rounded-3xl bg-amber-500/10 dark:bg-amber-500/15 border-2 border-amber-400/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">पूर्णिमा पर्व</span>
              <Calendar size={18} className="text-amber-600" />
            </div>
            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-gray-100">पूनो महात्म्य पाठ</h4>
            <p className="text-[11px] opacity-75 font-serif mt-1">कबीर पंथ में पूनो (पूर्णिमा) का पावन विधान व सत्संग।</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectSection('poonam-mahatmya')}
            className="mt-3 w-full py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition cursor-pointer"
          >
            पाठ खोलें
          </button>
        </div>

        {/* Kabir Chalisa Loop */}
        <div className="p-4 rounded-3xl bg-purple-500/10 dark:bg-purple-500/15 border-2 border-purple-400/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">सिमरन लूप</span>
              <Repeat size={18} className={isChalisaLooping ? 'animate-spin text-purple-600' : 'text-purple-600'} />
            </div>
            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-gray-100">कबीर चालीसा</h4>
            <p className="text-[11px] opacity-75 font-serif mt-1">लूप (Repeat) मोड के साथ निरंतर जाप व पाठ।</p>
          </div>
          <button
            type="button"
            onClick={handleLoopChalisa}
            className={`mt-3 w-full py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              isChalisaLooping ? 'bg-purple-700 text-white animate-pulse' : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {isChalisaLooping ? 'लूप चालू है (Loop On)' : 'चालीसा लूप चलाएं'}
          </button>
        </div>

        {/* Baramasi Month Indicator */}
        <div className="p-4 rounded-3xl bg-emerald-500/10 dark:bg-emerald-500/15 border-2 border-emerald-400/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">देशी महीना</span>
              <Sparkles size={18} className="text-emerald-600" />
            </div>
            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-gray-100">बारहमासी पाठ</h4>
            <p className="text-[11px] opacity-75 font-serif mt-1">चल रहा मास: <span className="font-bold text-emerald-700 dark:text-emerald-300">{activeDesiMonth}</span></p>
          </div>
          <button
            type="button"
            onClick={() => onSelectSection('baramasi-path')}
            className="mt-3 w-full py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer"
          >
            बारहमासी पढ़ें
          </button>
        </div>

        {/* Gayatri Four Prahar */}
        <div className="p-4 rounded-3xl bg-blue-500/10 dark:bg-blue-500/15 border-2 border-blue-400/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300">चार प्रहर</span>
              <Sun size={18} className="text-blue-600" />
            </div>
            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-gray-100">गायत्री (आदि, प्रभात, मध्याह्न, संध्या)</h4>
            <p className="text-[11px] opacity-75 font-serif mt-1">दिन के चारों प्रहर की पावन गायत्री वंदना।</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectSection('gayatri-chhar-prahar')}
            className="mt-3 w-full py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
          >
            गायत्री पाठ खोलें
          </button>
        </div>
      </div>

      {/* 3. Complete Granth-Suchi (Full Index List with Multi-Level Navigation) */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-amber-200 dark:border-zinc-800 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-amber-600" />
            <h3 className="text-lg font-black font-serif text-gray-900 dark:text-gray-100">
              {language === 'pb' ? 'ਸੰਪੂਰਨ ਗ੍ਰੰਥ-ਸੂਚੀ (Index)' : language === 'en' ? 'Complete Scripture Index (Damakheda)' : 'संपूर्ण ग्रंथ-सूची (Damakheda Index & Chapters)'}
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300">
            {NITNEM_SECTION_STUBS.length} {language === 'pb' ? 'ਪਾਵਨ ਭਾਗ' : language === 'en' ? 'Sacred Sections' : 'पावन भाग'}
          </span>
        </div>

        <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {NITNEM_SECTION_STUBS.length === 0 ? (
            <div className="p-8 rounded-2xl border-2 border-dashed border-amber-400/40 text-center space-y-2">
              <p className="font-serif font-black text-base text-gray-900 dark:text-gray-100">
                {language === 'pb'
                  ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ — ਖਾਲੀ ਥਾਂ'
                  : language === 'en'
                  ? 'Nitnem Gutka Saheb — Empty Space'
                  : 'नितनेम गुटका साहेब — रिक्त स्थान'}
              </p>
              <p className="text-xs sm:text-sm font-serif text-gray-600 dark:text-gray-300">
                {language === 'pb'
                  ? 'ਨਵੇਂ ਪਾਵਨ ਪਾਠ ਜੋੜੇ ਜਾਣ ਲਈ ਇਹ ਥਾਂ ਤਿਆਰ ਹੈ।'
                  : language === 'en'
                  ? 'This space has been cleared and is ready for the new sacred Path.'
                  : 'यह स्थान नए पावन पाठ के लिए पूर्णतः रिक्त एवं तैयार है।'}
              </p>
            </div>
          ) : NITNEM_SECTION_STUBS.map((sec, idx) => (
            <motion.div
              key={sec.id}
              whileHover={{ scale: 1.005 }}
              onClick={() => {
                onSelectSection(sec.id);
                onClose();
              }}
              className="p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50/85 dark:bg-zinc-800/65 backdrop-blur-sm hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:border-amber-400 transition cursor-pointer flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="w-8 h-8 rounded-xl bg-[#8B2500] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                  {idx + 1}
                </span>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider block">
                    {sec.majorCategoryTitle?.[language] || sec.majorCategoryTitle?.hi || ''}
                  </span>
                  <h4 className="text-sm font-black font-serif text-gray-900 dark:text-gray-100 truncate">
                    {sec.title?.[language] || sec.title?.hi || ''}
                  </h4>
                  <p className="text-[11px] font-serif opacity-70 truncate mt-0.5">
                    {sec.subtitle?.[language] || sec.subtitle?.hi || ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono font-bold opacity-60 px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                  {sec.totalVerses} पद
                </span>
                <ChevronRight size={16} className="text-amber-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teesa Yantra High-Resolution Modal */}
      {showTeesaModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-white dark:bg-zinc-900 border-2 border-amber-500 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-zinc-800">
              <h3 className="text-base font-black font-serif text-amber-900 dark:text-amber-200">
                🪷 श्री तीसा यंत्र दर्शन व ध्यान (Teesa Yantra)
              </h3>
              <button
                type="button"
                onClick={() => setShowTeesaModal(false)}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-zinc-950 border border-amber-200 dark:border-amber-900 text-center space-y-3">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 flex items-center justify-center shadow-xl text-4xl animate-pulse">
                🪷
              </div>
              <p className="text-xs font-serif italic text-amber-950 dark:text-amber-200 leading-relaxed">
                "तीसा यंत्र सतगुरु कबीर साहेब के सतलोक स्वरूप और अमर नाम की साधना का दिव्य प्रतीक है। इस यंत्र के दर्शन व ध्यान से मन एकाग्र होता है।"
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowTeesaModal(false)}
                className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition cursor-pointer"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
