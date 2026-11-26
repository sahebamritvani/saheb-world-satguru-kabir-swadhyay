import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
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
  isBridge?: boolean;
}

const ACHARYA_LINEAGE: AcharyaInfo[] = [
  {
    title: '१. प्रथम आचार्य - धनी धर्मदास साहेब जी',
    period: 'सृजन काल',
    description: {
      hi: "सतगुरु कबीर साहेब जी के मुख्य शिष्य, वंश बयालीस परंपरा के आदि गद्दीपति तथा पावन ग्रंथ 'कबीर सागर' के प्रमुख संवाददाता व संग्रहकर्ता।",
      pb: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਮੁੱਖ ਸ਼ਿਸ਼, ਵੰਸ਼ ਬਿਆਲੀਸ ਪਰੰਪਰਾ ਦੇ ਆਦਿ ਗੱਦੀਪਤੀ ਅਤੇ ਪਾਵਨ ਗ੍ਰੰਥ 'ਕਬੀਰ ਸਾਗਰ' ਦੇ ਪ੍ਰਮੁੱਖ ਸੰਵਾਦਦਾਤਾ ਤੇ ਸੰਗ੍ਰਹਿਕਰਤਾ।",
      en: "Chief disciple of Satguru Kabir Saheb Ji, Adi Gaddipati of the Vansh Bayalis lineage, and principal interlocutor and compiler of the sacred Granth 'Kabir Sagar'."
    },
    role: 'आदि गद्दीपति'
  },
  {
    title: '२. चूरामणि नाम साहेब जी',
    period: 'वंश प्रथम राजा',
    description: {
      hi: 'धनी धर्मदास साहेब जी के सुपुत्र। वंश बयालीस परंपरा के प्रथम वंशाचार्य जिन्होंने बांधवगढ़ में पंथ की ध्वजा फहराई।',
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
    title: 'अविरल वंश बयालीस आचार्य परंपरा (३ से १४ तक)',
    period: 'अविरल पावन वंशावली',
    description: {
      hi: "तृतीय वंशाचार्य पंथ श्री कुलपति नाम साहेब जी, १२वें वंशाचार्य पूज्य उग्र नाम साहेब जी (कबीर धर्मनगर दामाखेड़ा गद्दी के संस्थापक) एवं १४वें वंशाचार्य पूज्य गृन्धमुनि नाम साहेब जी सहित समस्त आचार्यों से होते हुए यह पावन वंश बयालीस परंपरा अविरल वर्तमान आचार्य श्री तक प्रवाहित हुई है।",
      pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ ਤੋਂ ਲੈ ਕੇ ੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ (ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਸੰਸਥਾਪਕ) ਅਤੇ ੧੪ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਗ੍ਰਿੰਧਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਰਾਹੀਂ ਇਹ ਪਾਵਨ ਵੰਸ਼ ਬਿਆਲੀਸ ਪਰੰਪਰਾ ਨਿਰੰਤਰ ਵਰਤਮਾਨ ਆਚਾਰੀਆ ਜੀ ਤੱਕ ਪ੍ਰਵਾਹਿਤ ਹੋਈ ਹੈ।",
      en: "From the 3rd Vanshacharya through the 12th Vanshacharya Pujya Ugra Naam Saheb Ji (Founder of Damakheda Gaddi) and the 14th Vanshacharya Pujya Grindhmuni Naam Saheb Ji, the continuous Vansh Bayalis lineage flows uninterrupted to the present Acharya."
    },
    role: 'क्रमिक वंशाचार्य परंपरा',
    isBridge: true
  },
  {
    title: '४. वर्तमान आचार्य - पंथ श्री हुजूर १०८ प्रकाशमुनि नाम साहेब जी',
    period: 'वर्तमान गद्दीनशीन',
    description: {
      hi: 'कबीर धर्मनगर दामाखेड़ा की पावन गद्दी के वर्तमान आचार्य। आपके पावन मार्गदर्शन में कबीर पंथ का विश्वभर में प्रचार व जनकल्याण कार्य हो रहा है।',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਵਰਤਮਾਨ ਆਚਾਰੀਆ ਜੀ।',
      en: 'Current Supreme Head of Kabir Dharamnagar Damakheda Gaddi.'
    },
    role: 'वर्तमान पंथश्री'
  },
  {
    title: '५. भावी आचार्य - युवराज श्री उदितमुनि नाम साहेब जी',
    period: 'युवराज साहेब',
    description: {
      hi: 'दामाखेड़ा गद्दी के भावी उत्तराधिकारी (युवराज साहेब) जो युवा पीढ़ी में सत्यनाम का संदेश प्रसारित कर रहे हैं।',
      pb: 'ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਭਾਵੀ ਉੱਤਰਾਧਿਕਾਰੀ (ਯੁਵਰਾਜ ਸਾਹੇਬ) ਜੋ ਨੌਜਵਾਨ ਪੀੜ੍ਹੀ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਸੰਦੇਸ਼ ਫੈਲਾ ਰਹੇ ਹਨ।',
      en: 'Future lineage heir (Yuvraj Saheb) of Damakheda Gaddi spreading the message of Satyanaam among the youth.'
    },
    role: 'युवराज साहेब'
  }
];

export const AcharyaParamparaModal: React.FC<AcharyaParamparaModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          zIndex: 120,
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          style={{ maxHeight: '82vh' }}
          className="relative w-full max-w-2xl rounded-3xl border-2 border-amber-400 dark:border-amber-700 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-gradient-to-r from-amber-600 to-yellow-600 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-sm">
                🪷
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif text-white">
                  {language === 'pb' ? 'ਆਚਾਰੀਆ ਪਰੰਪਰਾ ਇਤਿਹਾਸ' : language === 'en' ? 'Acharya Parampara History' : 'आचार्य परंपरा इतिहास'}
                </h3>
                <p className="text-[11px] font-serif opacity-90 text-amber-100">
                  {language === 'pb' ? 'ਦਾਮਾਖੇੜਾ ਪਾਵਨ ਗੱਦੀ ਦੀ ਆਚਾਰੀਆ ਪਰੰਪਰਾ' : language === 'en' ? 'Lineage of Damakheda Gaddi Acharyas' : 'दामाखेड़ा पावन गद्दी की आचार्य परंपरा'}
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
          <div className="p-4 sm:p-6 space-y-3.5 overflow-y-auto">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed flex items-start gap-3">
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
                  className={
                    acharya.isBridge
                      ? 'px-4 py-3 rounded-2xl border border-dashed border-amber-400/70 dark:border-amber-600/50 bg-amber-50/70 dark:bg-amber-950/20 flex flex-col gap-1.5'
                      : 'p-4 rounded-2xl border border-amber-100 dark:border-zinc-800 bg-amber-50/20 dark:bg-zinc-800/20 flex flex-col gap-2'
                  }
                >
                  <div className="flex items-center justify-between gap-2 border-b border-amber-100/50 dark:border-zinc-800/50 pb-1.5">
                    <span className="font-serif font-black text-amber-950 dark:text-amber-100 text-xs sm:text-sm">
                      {acharya.isBridge ? `✨ ${acharya.title}` : acharya.title}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600/10 text-amber-800 dark:text-amber-300 shrink-0">
                      {acharya.role}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {acharya.description[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
                  </p>
                  {!acharya.isBridge && (
                    <span className="text-[10px] text-stone-400 dark:text-stone-500 font-serif font-semibold self-end">
                      {language === 'hi' ? `काल: ${acharya.period}` : language === 'pb' ? `ਕਾਲ: ${acharya.period}` : `Period: ${acharya.period}`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 sm:p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex justify-end shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer"
            >
              {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};

