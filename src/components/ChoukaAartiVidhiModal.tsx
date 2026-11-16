import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flame, CheckCircle, HelpCircle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface ChoukaAartiVidhiModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const PANTHIC_QA_LIST = [
  {
    q: {
      hi: 'प्रश्न १: चौका आरती का कबीर पंथ में क्या सर्वोपरि आध्यात्मिक महत्व है?',
      pb: 'ਪ੍ਰਸ਼ਨ ੧: ਚੌਕਾ ਆਰਤੀ ਦਾ ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਕੀ ਰੂਹਾਨੀ ਮਹੱਤਵ ਹੈ?',
      en: 'Q1: What is the spiritual significance of Chouka Aarti in Kabir Panth?'
    },
    a: {
      hi: 'चौका आरती सतगुरु कबीर साहेब जी द्वारा स्थापित परम पावन अनुष्ठान है। यह जीव के चौरासी के चक्र को काट कर सत्यलोक और आत्म-कल्याण का द्वार खोलता है।',
      pb: 'ਚੌਕਾ ਆਰਤੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੁਆਰਾ ਸਥਾਪਿਤ ਪਰਮ ਪਵਿੱਤਰ ਅਨੁਸ਼ਠਾਨ ਹੈ ਜੋ ਜੀਵ ਦੇ ਚੌਰਾਸੀ ਦੇ ਗੇੜ ਨੂੰ ਕੱਟ ਕੇ ਸਤਿਲੋਕ ਦਾ ਦੁਆਰ ਖੋਲ੍ਹਦਾ ਹੈ।',
      en: 'Chouka Aarti is the supreme sacred ritual established by Satguru Kabir Saheb. It dissolves past karmas and grants direct refuge in Satyaloka.'
    }
  },
  {
    q: {
      hi: 'प्रश्न २: चौका आरती अनुष्ठान में नारियल (श्रीफल) भेंट करने का क्या विधान है?',
      pb: 'ਪ੍ਰਸ਼ਨ ੨: ਚੌਕਾ ਆਰਤੀ ਵਿੱਚ ਨਾਰੀਅਲ (ਸ਼੍ਰੀਫਲ) ਭੇਟ ਕਰਨ ਦਾ ਕੀ ਵਿਧਾਨ ਹੈ?',
      en: 'Q2: What is the sacred rule regarding Coconut (Shrifal) offering in Chouka Vidhi?'
    },
    a: {
      hi: 'श्रीफल नारियल जीव के सिर एवं अहंकार के समर्पण का प्रतीक है। गुरुदेव के सम्मुख नारियल तोड़कर प्रसाद रूप में वितरण करने से काल-जाल और भय का नाश होता है।',
      pb: 'ਸ਼੍ਰੀਫਲ ਨਾਰੀਅਲ ਜੀਵ ਦੇ ਹੰਕਾਰ ਤੇ ਸੀਸ ਸਮਰਪਣ ਦਾ ਪ੍ਰਤੀਕ ਹੈ। ਗੁਰੂਦੇਵ ਦੇ ਸਨਮੁਖ ਨਾਰੀਅਲ ਤੋੜ ਕੇ ਪ੍ਰਸ਼ਾਦ ਵੰਡਣ ਨਾਲ ਕਾਲ ਦਾ ਡਰ ਨਾਸ ਹੁੰਦਾ ਹੈ।',
      en: 'Shrifal represents the surrender of ego and self to the Satguru. Offering and distributing it breaks the web of Kaal.'
    }
  },
  {
    q: {
      hi: 'प्रश्न ३: मस्तक पर सफ़ेद चन्दन तिलक धारण करने का क्या रहस्य है?',
      pb: 'ਪ੍ਰਸ਼ਨ ੩: ਮੱਥੇ ਉੱਤੇ ਚਿੱਟੇ ਚੰਦਨ ਦਾ ਤਿਲਕ ਲਗਾਉਣ ਦਾ ਕੀ ਰਹੱਸ ਹੈ?',
      en: 'Q3: What is the significance of applying pure white sandalwood Tilak on the forehead?'
    },
    a: {
      hi: 'कबीर पंथ मर्यादा अनुसार मस्तक पर भौंहों के मध्य से ऊपर की ओर सीधा अखंड सफ़ेद चन्दन तिलक धारण किया जाता है जो आज्ञा चक्र और सत्यनाम भक्ति की निर्मलता का प्रतीक है।',
      pb: 'ਕਬੀਰ ਪੰਥ ਮਰਿਆਦਾ ਅਨੁਸਾਰ ਮੱਥੇ ਉੱਤੇ ਸਿੱਧਾ ਅਖੰਡ ਚਿੱਟੇ ਚੰਦਨ ਦਾ ਤਿਲਕ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਜੋ ਸਤਯਨਾਮ ਭਗਤੀ ਦੀ ਪਵਿੱਤਰਤਾ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      en: 'According to Kabir Panth protocol, a clean straight vertical white sandalwood Tilak is applied on the forehead representing Satyanam purity and the Ajna chakra.'
    }
  },
  {
    q: {
      hi: 'प्रश्न ४: कबीर धर्मनगर दमाखेड़ा धाम की क्या पंथिक महत्ता है?',
      pb: 'ਪ੍ਰਸ਼ਨ ੪: ਕਬੀਰ ਧਰਮਨਗਰ ਦਮਾਖੇੜਾ ਧਾਮ ਦੀ ਕੀ ਮਹੱਤਤਾ ਹੈ?',
      en: 'Q4: What is the supreme importance of Kabir Dharamnagar Damakheda Dham?'
    },
    a: {
      hi: 'दमाखेड़ा धाम धनी धर्मदास साहेब जी की वंश बयालीस आचार्यों की मूल पवित्र गद्दी है। यहाँ कबीर साहेब की मूल मर्यादा, चौका आरती एवं अखंड ज्योति की अविरल धारा प्रवाहित है।',
      pb: 'ਦਮਾਖੇੜਾ ਧਾਮ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੀ ਵੰਸ਼ ਬਿਆਲੀਸ ਆਚਾਰੀਆ ਜੀ ਦੀ ਮੁੱਖ ਗੱਦੀ ਹੈ ਜਿੱਥੇ ਅਮਰ ਸੰਦੇਸ਼ ਤੇ ਚੌਕਾ ਆਰਤੀ ਦੀ ਅਖੰਡ ਧਾਰਾ ਹੈ।',
      en: 'Damakheda Dham is the sacred supreme seat of Dhani Dharmdas Saheb Vansh 42 Acharyas, preserving authentic Kabir Panth traditions and eternal light.'
    }
  },
  {
    q: {
      hi: 'प्रश्न ५: नितनेम, संध्या आरती एवं सुमिरन का सही समय क्या है?',
      pb: 'ਪ੍ਰਸ਼ਨ ੫: ਨਿਤਨੇਮ, ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਸਿਮਰਨ ਦਾ ਸਹੀ ਸਮਾਂ ਕੀ ਹੈ?',
      en: 'Q5: What is the ideal time for Nitnem, Evening Aarti, and Simran?'
    },
    a: {
      hi: 'सूर्योदय से पूर्व अमृतवेला (प्रातः ४ से ६ बजे) नितनेम व सुमिरन करें। सूर्यास्त के समय संध्या आरती व चौका सुमिरन का नियम जीवन में आत्म-शांति प्रदान करता है।',
      pb: 'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਅੰਮ੍ਰਿਤਵੇਲਾ ਨਿਤਨੇਮ ਤੇ ਸਿਮਰਨ ਕਰੋ। ਸ਼ਾਮ ਵੇਲੇ ਸੰਧਿਆ ਆਰਤੀ ਦਾ ਨਿਯਮ ਰੂਹਾਨੀ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ।',
      en: 'Amritvela (4 AM - 6 AM before sunrise) is ideal for Nitnem & Simran. Sunset is the divine hour for Evening Aarti and Chouka remembrance.'
    }
  }
];

const CHOUKA_STEPS = [
  {
    step: '१. स्थान की शुद्धि व लिपाइ',
    desc: 'पवित्र स्थल की सफाई करके शुद्ध जल व गंगाजल से छिड़काव करें। पावन भूमि को गाय के गोबर या शुद्ध मिट्टी से लीपकर तैयार करें।'
  },
  {
    step: '२. चौका का रेखांकन (आकृतियाँ)',
    desc: 'शुद्ध आटे या चावल के चूर्ण से चौका रेखांकन करें। चौका के चारों कोनों पर स्वास्तिक व कमल की पंखुड़ियाँ बनाएँ।'
  },
  {
    step: '३. नारियल, पान व कसैली की स्थापना',
    desc: 'चौका के मध्य में श्रीफल (नारियल), नौ पान के पत्ते, कसैली (सुपारी) और पावन नैवेद्य अर्पित करें।'
  },
  {
    step: '४. आरती व दीप प्रज्वलन',
    desc: 'कपूर व शुद्ध घृत (घी) का दीपक जलाकर कबीर साहेब की आरती, मंगलाचरण व गुरु महिमा का सस्वर पाठ करें।'
  },
  {
    step: '५. प्रसाद वितरण व बंदगी',
    desc: 'आरती पूर्ण होने के बाद सत्यनाम का सुमिरन करते हुए सभी भक्तों में पावन नारियल प्रसाद वितरित करें और ।।साहेब बंदगी साहेब।। करें।'
  }
];

export const ChoukaAartiVidhiModal: React.FC<ChoukaAartiVidhiModalProps> = ({ isOpen, onClose, language }) => {
  const [activeTab, setActiveTab] = useState<'qna' | 'vidhi'>('qna');
  const [openQaIndex, setOpenQaIndex] = useState<number | null>(0);

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
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-sm">
                🪷
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif">
                  {language === 'pb' ? 'ਪ੍ਰਸ਼ਨੋਤਰੀ (ਸਵਾਲ-ਜਵਾਬ)' : language === 'en' ? 'Prashnottari (Panthic Q&A)' : 'प्रश्नोत्तरी (Sawal-Jawab)'}
                </h3>
                <p className="text-[11px] font-serif opacity-90">
                  {language === 'pb' ? 'ਰੀਤੀ-ਰਿਵਾਜ਼ਾਂ ਤੇ ਚੌਕਾ ਵਿਧੀ ਸਬੰਧੀ ਸ਼ੰਕਾ ਸਮਾਧਾਨ' : language === 'en' ? 'Panthic Q&A regarding rituals and Chouka Vidhi' : 'Panthic Q&A regarding rituals and Chouka Vidhi'}
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

          {/* Sub Navigation Tabs: Q&A vs Vidhi Step Guide */}
          <div className="flex items-center border-b border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 p-2 gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('qna')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold font-serif text-xs transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'qna'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <HelpCircle size={15} />
              <span>{language === 'pb' ? 'ਪ੍ਰਸ਼ਨੋਤਰੀ (ਸਵਾਲ-ਜਵਾਬ)' : language === 'en' ? 'Panthic Q&A' : 'प्रश्नोत्तरी (Sawal-Jawab)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('vidhi')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold font-serif text-xs transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'vidhi'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Flame size={15} />
              <span>{language === 'pb' ? 'ਚੌਕਾ ਆਰਤੀ ਵਿਧੀ' : language === 'en' ? 'Chouka Aarti Guide' : 'चौका आरती विधि'}</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {activeTab === 'qna' ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed">
                  ✨ <strong>Panthic Q&A regarding rituals and Chouka Vidhi:</strong> कबीर पंथ की पावन मर्यादा, पूजन विधि, श्रीफल अर्पण व तिलक संबंधी प्रामाणिक शंका-समाधान।
                </div>

                <div className="space-y-2.5">
                  {PANTHIC_QA_LIST.map((item, idx) => {
                    const isOpen = openQaIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-amber-200/80 dark:border-zinc-800 bg-amber-50/40 dark:bg-zinc-800/40 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenQaIndex(isOpen ? null : idx)}
                          className="w-full p-3.5 text-left flex items-center justify-between gap-3 font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200 cursor-pointer hover:bg-amber-100/50 dark:hover:bg-zinc-700/50 transition"
                        >
                          <span>{item.q[language] || item.q.hi}</span>
                          {isOpen ? <ChevronUp size={16} className="text-amber-600 shrink-0" /> : <ChevronDown size={16} className="text-amber-600 shrink-0" />}
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs font-serif leading-relaxed text-gray-800 dark:text-gray-200 border-t border-amber-200/40 dark:border-zinc-700/40 bg-white/60 dark:bg-zinc-900/60">
                            {item.a[language] || item.a.hi}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed">
                  "चौका आरती कबीर पंथ का सर्वोच्च एवं परम पावन अनुष्ठान है, जो जीव को सत्यलोक और सतगुरु कबीर साहेब की प्रत्यक्ष शरण प्रदान करता है।"
                </div>

                <div className="space-y-2.5">
                  {CHOUKA_STEPS.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 space-y-1">
                      <h5 className="text-xs font-black font-serif text-amber-900 dark:text-amber-300">
                        {st.step}
                      </h5>
                      <p className="text-xs font-serif opacity-80 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs font-serif space-y-1">
                  <span className="font-bold flex items-center gap-1">
                    <CheckCircle size={15} /> आवश्यक सामग्री सूची:
                  </span>
                  <p className="opacity-90 leading-relaxed">
                    शुद्ध आटा/चावल चूर्ण, नारियल (श्रीफल), ९ पान पत्ते, सुपारियाँ, कपूर, शुद्ध गाय का घी, दीया, पुष्प व नैवेद्य।
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex items-center justify-between">
            <span className="text-[11px] font-serif text-amber-900 dark:text-amber-300 font-bold">
              {language === 'pb' ? 'ਦਮਾਖੇੜਾ ਕਬੀਰ ਪੰਥ ਮਰਿਆਦਾ' : 'दमाखेड़ा कबीर पंथ अमर मर्यादा'}
            </span>
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
