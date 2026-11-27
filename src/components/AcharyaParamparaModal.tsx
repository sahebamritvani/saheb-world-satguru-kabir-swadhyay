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
  title: { hi: string; pb: string; en: string };
  period: { hi: string; pb: string; en: string };
  description: { hi: string; pb: string; en: string };
  role: { hi: string; pb: string; en: string };
  isBridge?: boolean;
}

const ACHARYA_LINEAGE: AcharyaInfo[] = [
  {
    title: {
      hi: '१. प्रथम आचार्य - धनी धर्मदास साहेब जी',
      pb: '੧. ਪ੍ਰਥਮ ਆਚਾਰੀਆ - ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ',
      en: '1. First Acharya - Dhani Dharmdas Saheb Ji'
    },
    period: {
      hi: 'सृजन काल',
      pb: 'ਸ੍ਰਿਜਨ ਕਾਲ',
      en: 'Founding Era'
    },
    description: {
      hi: "सतगुरु कबीर साहेब के मुख्य शिष्य, वंश बयालीस परंपरा के आदि गद्दीपति तथा पावन ग्रंथ 'कबीर सागर' के प्रमुख संवाददाता व संग्रहकर्ता।",
      pb: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਮੁੱਖ ਸ਼ਿਸ਼, ਵੰਸ਼ ਬਿਆਲੀਸ ਪਰੰਪਰਾ ਦੇ ਆਦਿ ਗੱਦੀਪਤੀ ਅਤੇ ਪਾਵਨ ਗ੍ਰੰਥ 'ਕਬੀਰ ਸਾਗਰ' ਦੇ ਪ੍ਰਮੁੱਖ ਸੰਵਾਦਦਾਤਾ ਤੇ ਸੰਗ੍ਰਹਿਕਰਤਾ।",
      en: "Chief disciple of Satguru Kabir Saheb Ji, Adi Gaddipati of the Vansh Bayalis lineage, and principal interlocutor and compiler of the sacred Granth 'Kabir Sagar'."
    },
    role: {
      hi: 'आदि गद्दीपति',
      pb: 'ਆਦਿ ਗੱਦੀਪਤੀ',
      en: 'Adi Gaddipati'
    }
  },
  {
    title: {
      hi: '२. चूरामणि नाम साहेब जी',
      pb: '੨. ਚੂਰਾਮਣਿ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      en: '2. Churamani Naam Saheb Ji'
    },
    period: {
      hi: 'वंश प्रथम राजा',
      pb: 'ਵੰਸ਼ ਪ੍ਰਥਮ ਰਾਜਾ',
      en: 'First Lineage Ruler'
    },
    description: {
      hi: 'धनी धर्मदास साहेब जी के सुपुत्र। वंश बयालीस परंपरा के प्रथम वंशाचार्य जिन्होंने बांधवगढ़ में पंथ की ध्वजा फहराई।',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੇ ਸੁਪੁੱਤਰ ਅਤੇ ਵੰਸ਼ ਪਰੰਪਰਾ ਦੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ।',
      en: 'Son of Dhani Dharmdas Saheb Ji and first lineage master of Vansh 42.'
    },
    role: {
      hi: 'प्रथम वंशाचार्य',
      pb: 'ਪ੍ਰਥਮ ਵੰਸ਼ਾਚਾਰੀਆ',
      en: 'First Vanshacharya'
    }
  },
  {
    title: {
      hi: '३. पंथ श्री हुजूर सुदर्शन नाम साहेब जी',
      pb: '੩. ਪੰਥ ਸ਼੍ਰੀ ਹੁਜੂਰ ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      en: '3. Panth Shri Huzoor Sudarshan Naam Saheb Ji'
    },
    period: {
      hi: 'द्वितीय वंशाचार्य',
      pb: 'ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ',
      en: 'Second Vanshacharya'
    },
    description: {
      hi: 'कबीर पंथ के द्वितीय वंशाचार्य जिन्होंने अमर सिद्धांतों का प्रचार-प्रसार किया।',
      pb: 'ਕਬੀਰ ਪੰਥ ਦੇ ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ।',
      en: 'Second lineage master of Kabir Panth.'
    },
    role: {
      hi: 'द्वितीय वंशाचार्य',
      pb: 'ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ',
      en: 'Second Vanshacharya'
    }
  },
  {
    title: {
      hi: 'अविरल वंश बयालीस आचार्य परंपरा (३ से १४ तक)',
      pb: 'ਅਵਿਰਲ ਵੰਸ਼ ਬਿਆਲੀਸ ਆਚਾਰਯ ਪਰੰਪਰਾ (੩ ਤੋਂ ੧੪ ਤੱਕ)',
      en: 'Continuous Vansh Bayalis Lineage (3 to 14)'
    },
    period: {
      hi: 'अविरल पावन वंशावली',
      pb: 'ਅਵਿਰਲ ਪਾਵਨ ਵੰਸ਼ਾਵਲੀ',
      en: 'Unbroken Sacred Succession'
    },
    description: {
      hi: "तृतीय वंशाचार्य पंथ श्री कुलपति नाम साहेब जी, १२वें वंशाचार्य पूज्य उग्र नाम साहेब जी (कबीर धर्मनगर दामाखेड़ा गद्दी के संस्थापक) एवं १४वें वंशाचार्य पूज्य गृन्धमुनि नाम साहेब जी सहित समस्त आचार्यों से होते हुए यह पावन वंश बयालीस परंपरा अविरल वर्तमान आचार्य श्री तक प्रवाहित हुई है।",
      pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ ਤੋਂ ਲੈ ਕੇ ੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ (ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਸੰਸਥਾਪਕ) ਅਤੇ ੧੪ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਗ੍ਰਿੰਧਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਰਾਹੀਂ ਇਹ ਪਾਵਨ ਵੰਸ਼ ਬਿਆਲੀਸ ਪਰੰਪਰਾ ਨਿਰੰਤਰ ਵਰਤਮਾਨ ਆਚਾਰੀਆ ਜੀ ਤੱਕ ਪ੍ਰਵਾਹਿਤ ਹੋਈ ਹੈ।",
      en: "From the 3rd Vanshacharya through the 12th Vanshacharya Pujya Ugra Naam Saheb Ji (Founder of Damakheda Gaddi) and the 14th Vanshacharya Pujya Grindhmuni Naam Saheb Ji, the continuous Vansh Bayalis lineage flows uninterrupted to the present Acharya."
    },
    role: {
      hi: 'क्रमिक वंशाचार्य परंपरा',
      pb: 'ਕ੍ਰਮਿਕ ਵੰਸ਼ਾਚਾਰੀਆ ਪਰੰਪਰਾ',
      en: 'Sequential Lineage Tradition'
    },
    isBridge: true
  },
  {
    title: {
      hi: '४. वर्तमान आचार्य - पंथ श्री हुजूर १०८ प्रकाशमुनि नाम साहेब जी',
      pb: '੪. ਵਰਤਮਾਨ ਆਚਾਰੀਆ - ਪੰਥ ਸ਼੍ਰੀ ਹੁਜੂਰ ੧੦੮ ਪ੍ਰਕਾਸ਼ਮੁਨਿ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      en: '4. Current Acharya - Panth Shri Huzoor 108 Prakashmuni Naam Saheb Ji'
    },
    period: {
      hi: 'वर्तमान गद्दीनशीन',
      pb: 'ਵਰਤਮਾਨ ਗੱਦੀਨਸ਼ੀਨ',
      en: 'Current Supreme Head'
    },
    description: {
      hi: 'कबीर धर्मनगर दामाखेड़ा की पावन गद्दी के वर्तमान आचार्य। आपके पावन मार्गदर्शन में कबीर पंथ का विश्वभर में प्रचार व जनकल्याण कार्य हो रहा है।',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਵਰਤਮਾਨ ਆਚਾਰੀਆ ਜੀ।',
      en: 'Current Supreme Head of Kabir Dharamnagar Damakheda Gaddi guiding global propagation.'
    },
    role: {
      hi: 'वर्तमान पंथश्री',
      pb: 'ਵਰਤਮਾਨ ਪੰਥਸ਼੍ਰੀ',
      en: 'Present Panthshri'
    }
  },
  {
    title: {
      hi: '५. भावी आचार्य - युवराज श्री उदितमुनि नाम साहेब जी',
      pb: '੫. ਭਾਵੀ ਆਚਾਰੀਆ - ਯੁਵਰਾਜ ਸ਼੍ਰੀ ਉਦਿਤਮੁਨਿ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      en: '5. Future Acharya - Yuvraj Shri Uditmuni Naam Saheb Ji'
    },
    period: {
      hi: 'युवराज साहेब',
      pb: 'ਯੁਵਰਾਜ ਸਾਹੇਬ',
      en: 'Yuvraj Saheb'
    },
    description: {
      hi: 'दामाखेड़ा गद्दी के भावी उत्तराधिकारी (युवराज साहेब) जो युवा पीढ़ी में सत्यनाम का संदेश प्रसारित कर रहे हैं।',
      pb: 'ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਭਾਵੀ ਉੱਤਰਾਧਿਕਾਰੀ (ਯੁਵਰਾਜ ਸਾਹੇਬ) ਜੋ ਨੌਜਵਾਨ ਪੀੜ੍ਹੀ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਸੰਦੇਸ਼ ਫੈਲਾ ਰਹੇ ਹਨ।',
      en: 'Future lineage heir (Yuvraj Saheb) of Damakheda Gaddi spreading the message of Satyanaam among the youth.'
    },
    role: {
      hi: 'युवराज साहेब',
      pb: 'ਯੁਵਰਾਜ ਸਾਹੇਬ',
      en: 'Yuvraj Saheb'
    }
  }
];

export const AcharyaParamparaModal: React.FC<AcharyaParamparaModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const currentLang = language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi';

  const modalContent = (
    <AnimatePresence>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 14px',
          zIndex: 100,
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          style={{
            width: '100%',
            maxWidth: '480px',
            maxHeight: 'calc(100dvh - 104px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: '16px',
          }}
          className="relative border-2 border-amber-400 dark:border-amber-700 bg-white dark:bg-zinc-900 shadow-2xl"
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
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-amber-50/40 dark:bg-zinc-950/40">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-amber-950 dark:text-amber-100 text-xs sm:text-sm leading-relaxed font-serif">
              {language === 'pb'
                ? 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ (ਛੱਤੀਸਗੜ੍ਹ) ਕਬੀਰ ਪੰਥ ਦੀ ਮੂਲ ਗੱਦੀ ਹੈ ਜਿੱਥੋਂ ਵੰਸ਼ ਬയാਲੀਸ ਆਚਾਰਯ ਪਰੰਪਰਾ ਦੁਆਰਾ ਸਤਯਨਾਮ ਦਾ ਸੁਨੇਹਾ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ ਪ੍ਰਸਾਰਿਤ ਹੋ ਰਿਹਾ ਹੈ।'
                : language === 'en'
                ? 'Kabir Dharamnagar Damakheda is the sacred principal seat of Kabir Panth where the unbroken Vansh Bayalis Acharya lineage preserves and propagates the eternal message of Satyanaam.'
                : 'कबीर धर्मनगर दामाखेड़ा (छत्तीसगढ़) कबीर पंथ की मूल पावन गद्दी है जहाँ से वंश बयालीस आचार्यों द्वारा सत्यनाम का अलख जगाया जा रहा है।'}
            </div>

            <div className="space-y-3">
              {ACHARYA_LINEAGE.map((acharya, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 shadow-sm space-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-600/10 dark:bg-amber-500/20 text-amber-900 dark:text-amber-200">
                      {acharya.period[currentLang]}
                    </span>
                    <span className="text-xs font-serif font-bold text-amber-700 dark:text-amber-400">
                      {acharya.role[currentLang]}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm sm:text-base text-amber-950 dark:text-amber-100">
                    {acharya.title[currentLang]}
                  </h4>

                  <p className="text-xs sm:text-sm font-serif text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {acharya.description[currentLang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3.5 border-t border-amber-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center shrink-0">
            <span className="font-serif text-xs font-bold text-amber-900 dark:text-amber-300">
              {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '।। Saheb Bandagi Saheb ।।' : '।। साहेब बंदगी साहेब ।।'}
            </span>
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
