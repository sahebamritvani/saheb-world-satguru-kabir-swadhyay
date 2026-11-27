import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Train, Bus, BedDouble } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DamakhedaRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const DamakhedaRouteModal: React.FC<DamakhedaRouteModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const { language: contextLang } = useLanguage();
  const activeLang: Language = language || contextLang;
  const isPb = activeLang === 'pb';
  const isEn = activeLang === 'en';

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 14px', zIndex: 100 }}
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
          className="relative border-2 border-amber-400 dark:border-amber-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-amber-50/90 dark:bg-zinc-950/90 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#8B2500] text-white flex items-center justify-center text-xl shadow-sm">
                🚩
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif text-amber-950 dark:text-amber-200">
                  {isPb
                    ? 'ਦਾਮਾਖੇੜਾ ਆਸ਼ਰਮ ਮਾਰਗ ਤੇ ਠਹਿਰਣ ਦਾ ਪ੍ਰਬੰਧ'
                    : isEn
                    ? 'Damakheda Ashram Route & Stay Guide'
                    : 'दामाखेड़ा आश्रम मार्ग व ठहरने की व्यवस्था'}
                </h3>
                <p className="text-[11px] font-serif text-amber-800 dark:text-amber-400">
                  {isPb
                    ? 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ (ਜ਼ਿਲ੍ਹਾ ਬਲੌਦਾਬਾਜ਼ਾਰ, ਛੱਤੀਸਗੜ੍ਹ)'
                    : isEn
                    ? 'Kabir Dharmanagar Damakheda (Dist. Baloda Bazar, Chhattisgarh)'
                    : 'कबीर धर्मनगर दामाखेड़ा (जिला बलौदाबाजार, छत्तीसगढ़)'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 space-y-4 overflow-y-auto font-serif text-xs">
            {/* Railway & Airport */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 space-y-2">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                <Train size={16} className="text-amber-600" />
                <span>
                  {isPb
                    ? 'ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਤੇ ਨਜ਼ਦੀਕੀ ਹਵਾਈ ਅੱਡਾ:'
                    : isEn
                    ? 'Railway Stations & Nearest Airport:'
                    : 'रेलवे स्टेशन व निकटतम एयरपोर्ट:'}
                </span>
              </h4>
              <p className="opacity-80 leading-relaxed">
                {isPb ? (
                  <>
                    • <strong>ਨਜ਼ਦੀਕੀ ਮੁੱਖ ਰੇਲਵੇ ਸਟੇਸ਼ਨ:</strong> ਰਾਏਪੁਰ ਜੰਕਸ਼ਨ (Raipur Jn) - ਲਗਭਗ 45 ਕਿਮੀ।<br />
                    • <strong>ਭਾਟਾਪਾਰਾ ਰੇਲਵੇ ਸਟੇਸ਼ਨ:</strong> ਭਾਟਾਪਾਰਾ ਤੋਂ ਦਾਮਾਖੇੜਾ ਲਗਭਗ 25 ਕਿਮੀ।<br />
                    • <strong>ਨਜ਼ਦੀਕੀ ਹਵਾਈ ਅੱਡਾ:</strong> ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਹਵਾਈ ਅੱਡਾ, ਰਾਏਪੁਰ।
                  </>
                ) : isEn ? (
                  <>
                    • <strong>Nearest Major Railway Station:</strong> Raipur Junction (approx. 45 km).<br />
                    • <strong>Bhatapara Railway Station:</strong> Approx. 25 km from Damakheda.<br />
                    • <strong>Nearest Airport:</strong> Swami Vivekananda Airport, Raipur.
                  </>
                ) : (
                  <>
                    • <strong>निकटतम मुख्य रेलवे स्टेशन:</strong> रायपुर जंक्शन (Raipur Jn) - लगभग 45 किमी।<br />
                    • <strong>भाटापारा रेलवे स्टेशन:</strong> भाटापारा से दामाखेड़ा लगभग 25 किमी।<br />
                    • <strong>निकटतम एयरपोर्ट:</strong> स्वामी विवेकानंद एयरपोर्ट, रायपुर।
                  </>
                )}
              </p>
            </div>

            {/* Bus & Road Transit */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 space-y-2">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                <Bus size={16} className="text-amber-600" />
                <span>
                  {isPb ? 'ਸੜਕ ਮਾਰਗ ਤੇ ਬੱਸ ਸੇਵਾ:' : isEn ? 'Road & Bus Connectivity:' : 'सड़क मार्ग व बस सेवा:'}
                </span>
              </h4>
              <p className="opacity-80 leading-relaxed">
                {isPb
                  ? 'ਰਾਏਪੁਰ ਬੱਸ ਸਟੈਂਡ (ਪੰਡਰੀ / ਭਾਠਾਗਾਂਵ) ਤੋਂ ਬਲੌਦਾਬਾਜ਼ਾਰ / ਬਿਲਾਸਪੁਰ ਮਾਰਗ ਦੀਆਂ ਬੱਸਾਂ ਸਿੱਧੇ ਦਾਮਾਖੇੜਾ ਆਸ਼ਰਮ ਗੇਟ \'ਤੇ ਉਤਾਰਦੀਆਂ ਹਨ। ਟੈਕਸੀ ਤੇ ਆਟੋ ਵੀ ਲਗਾਤਾਰ ਉਪਲਬਧ ਹਨ।'
                  : isEn
                  ? 'Regular buses from Raipur Bus Stand (Pandri / Bhatagaon) via Baloda Bazar or Bilaspur highway stop right at the Damakheda Ashram Gate. Taxis and autos are readily available.'
                  : 'रायपुर बस स्टैंड (पंडरी / भाठागांव) से बलौदाबाजार / बिलासपुर मार्ग पर चलने वाली बसें सीधे दामाखेड़ा आश्रम गेट पर उतरती हैं। टैक्सी व ऑटो भी निरंतर उपलब्ध रहते हैं।'}
              </p>
            </div>

            {/* Stay Rules & Protocol */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 text-amber-950 dark:text-amber-200">
              <h4 className="font-bold flex items-center gap-1.5 text-sm">
                <BedDouble size={16} className="text-amber-600" />
                <span>
                  {isPb
                    ? 'ਆਸ਼ਰਮ ਵਿੱਚ ਠਹਿਰਣ ਦੇ ਨਿਯਮ ਤੇ ਪ੍ਰਬੰਧ:'
                    : isEn
                    ? 'Ashram Stay Guidelines & Arrangements:'
                    : 'आश्रम में रुकने के नियम व व्यवस्था:'}
                </span>
              </h4>
              <p className="opacity-90 leading-relaxed">
                {isPb ? (
                  <>
                    • ਆਸ਼ਰਮ ਵਿੱਚ ਸਾਰੀਆਂ ਸਹੂਲਤਾਂ ਵਾਲੀਆਂ ਧਰਮਸ਼ਾਲਾਵਾਂ ਉਪਲਬਧ ਹਨ।<br />
                    • ਮਾਘ ਪੂਰਨਿਮਾ ਮੇਲੇ ਅਤੇ ਉਤਸਵ ਸਮੇਂ ਪਹਿਲਾਂ ਸੂਚਨਾ ਦੇ ਕੇ ਆਉਣਾ ਉਚਿਤ ਰਹਿੰਦਾ ਹੈ।<br />
                    • ਆਸ਼ਰਮ ਪਰਿਸਰ ਵਿੱਚ ਪੂਰਨ ਸ਼ਾਕਾਹਾਰ, ਸਾਤਵਿਕਤਾ ਅਤੇ ਪਾਵਨ ਮਰਿਆਦਾ ਦਾ ਪਾਲਣ ਲਾਜ਼ਮੀ ਹੈ।
                  </>
                ) : isEn ? (
                  <>
                    • Well-equipped Dharmashalas (guest accommodations) are available inside the Ashram.<br />
                    • Advance intimation is advisable during Magh Purnima Mela and major festivals.<br />
                    • Pure vegetarian Satvik conduct and sacred Ashram discipline are strictly observed.
                  </>
                ) : (
                  <>
                    • आश्रम में सर्व-सुविधायुक्त धर्मशालाएं उपलब्ध हैं।<br />
                    • माघ पूर्णिमा मेला एवं उत्सव के समय पूर्व सूचना के साथ आना उचित रहता है।<br />
                    • आश्रम परिसर में पूर्ण शाकाहार, सात्विकता व पावन मर्यादा का पालन अनिवार्य है।
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex justify-end shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer"
            >
              {isPb ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ' : isEn ? 'Saheb Bandagi Saheb' : 'साहेब बंदगी साहेब'}
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

