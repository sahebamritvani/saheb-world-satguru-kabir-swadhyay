import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface AcharyaParamparaModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface AcharyaInfo {
  title: string;
  period: string;
  description: { hi: string; pb: string; en: string };
  role: string;
}

const ACHARYA_LINEAGE: AcharyaInfo[] = [
  {
    title: '१. प्रथम आचार्य - धनी धर्मदास साहेब जी',
    period: 'सृजन काल',
    description: {
      hi: 'कबीर साहेब जी के मुख्य शिष्य और कबीर पंथ की प्रथम गुरु गद्दी के स्थापक। कबीर साहेब की पावन वाणी "बीजक" के संग्रहकर्ता।',
      pb: 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਮੁੱਖ ਸ਼ਿਸ਼ ਅਤੇ ਕਬੀਰ ਪੰਥ ਦੀ ਪਹਿਲੀ ਗੱਦੀ ਦੇ ਸੰਸਥਾਪਕ।',
      en: 'Chief disciple of Kabir Saheb and founder of the Kabir Panth first seat. Compiler of Beejak.'
    },
    role: 'आदि गद्दीपति'
  },
  {
    title: '२. चूरामणि नाम साहेब जी',
    period: 'वंश प्रथम राजा',
    description: {
      hi: 'धनी धर्मदास साहेब जी के सुपुत्र। वंश बयालीस परंपरा के प्रथम वंशाचार्य जिन्होंने बंधावगढ़ में पंथ की ध्वजा फहराई।',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੇ ਸੁਪੁੱਤਰ ਅਤੇ ਵੰਸ਼ ਪਰੰਪਰਾ ਦੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ।',
      en: 'Son of Dhani Dharmdas Saheb Ji and first lineage master of Vansh 42.'
    },
    role: 'प्रथम वंशाचार्य'
  },
  {
    title: '३. पंथ श्री हुजूर सुदर्शन नाम साहेब जी',
    period: 'द्वितीय वंशाचार्य',
    description: {
      hi: 'कबीर पंथ के द्वितीय वंशाचार्य जिन्होंने अमर सिद्धांतों का प्रचार-प्रसार किया।',
      pb: 'ਕਬੀਰ ਪੰਥ ਦੇ ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ।',
      en: 'Second lineage master of Kabir Panth.'
    },
    role: 'द्वितीय वंशाचार्य'
  },
  {
    title: '४. वर्तमान आचार्य - पंथ श्री हुजूर १०८ प्रकाशमुनि नाम साहेब जी',
    period: 'वर्तमान गद्दीनशीन',
    description: {
      hi: 'कबीर धर्मनगर दमाखेड़ा की पावन गद्दी के वर्तमान आचार्य। आपके पावन मार्गदर्शन में कबीर पंथ का विश्वभर में प्रचार व जनकल्याण कार्य हो रहा है।',
      pb: 'ਦਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਵਰਤਮਾਨ ਆਚਾਰੀਆ ਜੀ।',
      en: 'Current Supreme Head of Kabir Dharamnagar Damakheda Gaddi.'
    },
    role: 'वर्तमान पंथश्री'
  },
  {
    title: '५. भावी आचार्य - यवराज श्री उदितमुनि नाम साहेब जी',
    period: 'युवराज साहेब',
    description: {
      hi: 'दमाखेड़ा गद्दी के भावी उत्तराधिकारी (युवराज साहेब) जो युवा पीढ़ी में सत्यनाम का संदेश प्रसारित कर रहे हैं।',
      pb: 'ਦਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਭਾਵੀ ਉੱਤਰਾਧਿਕਾਰੀ।',
      en: 'Future lineage heir (Yuvraj Saheb) of Damakheda Gaddi.'
    },
    role: 'युवराज साहेब'
  }
];

export const AcharyaParamparaModal: React.FC<AcharyaParamparaModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-2xl rounded-3xl border-2 border-amber-400 dark:border-amber-700 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-gradient-to-r from-amber-600 to-yellow-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-sm">
                🪷
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif text-white">
                  {language === 'pb' ? 'ਆਚਾਰਯ ਪਰੰਪਰਾ ਇਤਿਹਾਸ' : language === 'en' ? 'Acharya Parampara History' : 'आचार्य परंपरा इतिहास'}
                </h3>
                <p className="text-[11px] font-serif opacity-90 text-amber-100">
                  {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਾਵਨ ਵੰਸ਼ਾਵਲੀ' : language === 'en' ? 'Sacred Lineage of Satguru Kabir Saheb' : 'सतगुरु कबीर साहेब की पावन वंशावली'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/20 hover:bg-black/30 text-white transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body List */}
          <div className="p-6 space-y-4 overflow-y-auto">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed flex items-start gap-3">
              <Sparkles size={18} className="shrink-0 text-amber-600 mt-0.5" />
              <p>
                {language === 'hi' 
                  ? 'सतगुरु कबीर साहेब की वंश बयालीस गुरु परंपरा का पावन संक्षिप्त परिचय। संपूर्ण जगत के कल्याण हेतु सत्यनाम का संदेश।' 
                  : language === 'pb' 
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਵੰਸ਼ ਬਿਆਲੀਸ ਗੁਰੂ ਪਰੰਪਰਾ ਦਾ ਪਾਵਨ ਸੰਖੇਪ ਪਰਿਚਯ।' 
                  : 'A brief sacred introduction to the Vansh 42 lineage of Satguru Kabir Saheb.'}
              </p>
            </div>

            <div className="space-y-3">
              {ACHARYA_LINEAGE.map((acharya, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl border border-amber-100 dark:border-zinc-800 bg-amber-50/20 dark:bg-zinc-800/20 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-amber-100/50 dark:border-zinc-800/50 pb-2">
                    <span className="font-serif font-black text-amber-950 dark:text-amber-100 text-xs sm:text-sm">
                      {acharya.title}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600/10 text-amber-800 dark:text-amber-300 shrink-0">
                      {acharya.role}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {acharya.description[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
                  </p>
                  <span className="text-[10px] text-stone-400 dark:text-stone-500 font-serif font-semibold self-end">
                    {language === 'hi' ? `काल: ${acharya.period}` : language === 'pb' ? `ਕਾਲ: ${acharya.period}` : `Period: ${acharya.period}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer"
            >
              {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '।। Saheb Bandagi Saheb ।।' : '।। साहेब बंदगी साहेब ।।'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
