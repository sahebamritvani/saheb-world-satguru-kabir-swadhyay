import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Heart, 
  Check, 
  ShieldCheck, 
  WifiOff, 
  BookOpen 
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';

interface SacredMaryadaModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SacredMaryadaModal: React.FC<SacredMaryadaModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const { theme } = useAppTheme();
  const [dontShowToday, setDontShowToday] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAcknowledge = () => {
    if (dontShowToday) {
      try {
        const todayStr = new Date().toISOString().split('T')[0];
        localStorage.setItem('sahebworld_maryada_dismissed_date', todayStr);
      } catch {}
    }
    onClose();
  };

  const title = {
    hi: 'पावन वाणी पाठ मर्यादा एवं स्मरण',
    pb: 'ਪਾਵਨ ਬਾਣੀ ਪਾਠ ਮਰਯਾਦਾ ਤੇ ਸਿਮਰਨ',
    en: 'Sacred Recitation Maryada & Protocol'
  }[language] || 'पावन वाणी पाठ मर्यादा एवं स्मरण';

  const subtitle = {
    hi: 'सतगुरु कबीर साहेब की वाणी की सर्वोच्च पवित्रता बनाए रखने हेतु विनम्र प्रार्थना',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਬਾਣੀ ਦੀ ਪਵਿੱਤਰਤਾ ਬਣਾਈ ਰੱਖਣ ਲਈ ਬੇਨਤੀ',
    en: 'Devout reminders for maintaining utmost sanctity of the sacred words'
  }[language] || 'सतगुरु कबीर साहेब की वाणी की सर्वोच्च पवित्रता बनाए रखने हेतु विनम्र प्रार्थना';

  const rules = [
    {
      icon: '🧣',
      title: {
        hi: 'शीश ढकें (Cover Your Head)',
        pb: 'ਸਿਰ ਢੱਕੋ (Cover Head)',
        en: 'Cover Your Head'
      }[language],
      desc: {
        hi: 'वाणी का श्रवण व पठन करते समय शीश पर रुमाल, दुपट्टा या वस्त्र अवश्य धारण करें।',
        pb: 'ਬਾਣੀ ਦਾ ਪਾਠ ਜਾਂ ਸਰਵਣ ਕਰਦੇ ਸਮੇਂ ਸਿਰ ਉੱਤੇ ਰੁਮਾਲ ਜਾਂ ਪੱਗੜੀ ਜ਼ਰੂਰ ਰੱਖੋ।',
        en: 'Kindly cover your head with a scarf, turban, or cloth as a mark of devotion.'
      }[language]
    },
    {
      icon: '🧼',
      title: {
        hi: 'हस्त एवं चरण शुद्धि (Cleanliness)',
        pb: 'ਹੱਥ ਤੇ ਚਰਨ ਸ਼ੁੱਧੀ (Clean Hands & Feet)',
        en: 'Cleanliness of Body'
      }[language],
      desc: {
        hi: 'पाठ आरंभ करने से पूर्व हाथ-मुँह व चरण स्वच्छ करें और जूते-चप्पल दूर रखें।',
        pb: 'ਪਾਠ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ-ਪੈਰ ਧੋਵੋ ਅਤੇ ਜੁੱਤੀਆਂ ਦੂਰ ਰੱਖੋ।',
        en: 'Please clean your hands and feet, keeping footwear aside before recitation.'
      }[language]
    },
    {
      icon: '🧘',
      title: {
        hi: 'शांत व एकाग्र मन (Pure Devotion)',
        pb: 'ਸ਼ਾਂਤ ਮਨ (Quiet Devotion)',
        en: 'Quiet & Devoted Mind'
      }[language],
      desc: {
        hi: 'सांसारिक कोलाहल से हटकर एकांत में शांत भाव से "सत्यनाम" का ध्यान धरें।',
        pb: 'ਸੰਸਾਰਿਕ ਰੌਲੇ ਤੋਂ ਹਟ ਕੇ ਏਕਾਂਤ ਵਿੱਚ ਸ਼ਾਂਤ ਮਨ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
        en: 'Sit in a quiet space with a calm, humble heart focused on the Supreme Truth.'
      }[language]
    },
    {
      icon: '🪔',
      title: {
        hi: 'भाल ऊर्ध्व तिलक एवं स्वरूप ध्यान (Kabir Panth Maryada)',
        pb: 'ਭਾਲ ਊਰਧਵ ਤਿਲਕ ਤੇ ਸ੍ਵਰੂਪ ਧਿਆਨ',
        en: 'Sacred Urdhva Tilak & Guru Dhyan'
      }[language],
      desc: {
        hi: 'कबीर पंथ मर्यादा अनुसार मस्तक पर "भाल ऊर्ध्व तिलक" (श्वेत/चन्दन ऊर्ध्व रेखा), श्वेत शुभ्र मुकुट, सेलीकंठ एवं पद्मासन में विराजमान सतगुरु का ध्यान धरें — "ध्यायतं सद्गुरु श्वेतरूप मंगलम् श्वेताम्बरं शोभितम्... सेलीकंठ भाल ऊर्ध्व तिलकम् श्वेताम्बरी मेखला॥"',
        pb: 'ਕਬੀਰ ਪੰਥ ਮਰਯਾਦਾ ਅਨੁਸਾਰ ਮਸਤਕ ਉੱਤੇ "ਭਾਲ ਊਰਧਵ ਤਿਲਕ" (ਸਫੈਦ/ਚੰਦਨ ਊਰਧਵ ਰੇਖਾ), ਸ਼ਵੇਤ ਮੁਕੁਟ, ਸੇਲੀਕੰਠ ਤੇ ਪਦਮਾਸਨ ਵਿਚ ਬਿਰਾਜਮਾਨ ਸਤਿਗੁਰੂ ਦਾ ਧਿਆਨ ਧਰੋ।',
        en: 'As per Kabir Panth maryada, meditate upon Satguru Kabir Saheb with the sacred vertical Urdhva Tilak on His forehead, white crown, and seated in Padmasana.'
      }[language]
    }
  ];

  return (
    <AnimatePresence>
      <div
        id="sacred-maryada-overlay"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === 'sacred-maryada-overlay') {
            handleAcknowledge();
          }
        }}
        className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className="relative w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.accentGold,
            }}
            className="p-5 border-b flex items-start justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                🙏
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 block">
                  {SACRED_BRANDING.header[language]}
                </span>
                <h3
                  style={{ color: theme.sacredMaroon }}
                  className="text-lg sm:text-xl font-black font-serif tracking-wide"
                >
                  {title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAcknowledge}
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:text-gray-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
            <p className="text-xs sm:text-sm font-serif opacity-85 leading-relaxed text-center">
              {subtitle}
            </p>

            {/* Respectful Core Disclaimer Callout Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border-2 border-amber-500/40 text-center space-y-2">
              <span className="text-xl">🙇‍♂️ ✨ 🙇‍♀️</span>
              <p className="font-serif font-black text-sm sm:text-base text-amber-900 dark:text-amber-200 leading-relaxed">
                {language === 'pb' 
                  ? '"ਕਿਰਪਾ ਕਰਕੇ ਸਿਰ ਢੱਕ ਕੇ, ਚਰਨ ਧੋ ਕੇ ਅਤੇ ਪਵਿੱਤਰ ਮਨ ਨਾਲ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ।"'
                  : language === 'en'
                  ? '"Kindly cover your head, wash your feet, and begin recitation with a pure mind."'
                  : '"कृपया सिर ढक कर, चरण धोकर और पवित्र मन से पाठ शुरू करें।"'}
              </p>
              <p className="text-[10px] uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400 font-bold">
                साहेब बंदगी साहेब (Saheb Bandagi Saheb)
              </p>
            </div>

            {/* Maryada Cards */}
            <div className="space-y-3">
              {rules.map((rule, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: theme.bgSecondary,
                    borderColor: theme.cardBorder,
                  }}
                  className="p-3.5 rounded-2xl border flex items-start gap-3.5 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{rule.icon}</span>
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-gray-100">
                      {rule.title}
                    </h4>
                    <p className="text-xs font-serif text-gray-600 dark:text-gray-300 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Purity & Ads-Free / Offline Guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-serif">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <ShieldCheck size={16} className="shrink-0 text-emerald-600" />
                <span className="font-bold">100% विज्ञापन-मुक्त (Strictly Ads-Free)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-800 dark:text-blue-300 flex items-center gap-2">
                <WifiOff size={16} className="shrink-0 text-blue-600" />
                <span className="font-bold">पूर्णतः ऑफलाइन (100% Offline)</span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div
            style={{
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.cardBorder,
            }}
            className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0"
          >
            <label className="flex items-center gap-2 text-xs font-serif text-gray-600 dark:text-gray-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontShowToday}
                onChange={(e) => setDontShowToday(e.target.checked)}
                className="rounded border-amber-400 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
              />
              <span>{language === 'pb' ? 'ਅੱਜ ਦੁਬਾਰਾ ਨਾ ਦਿਖਾਓ' : language === 'en' ? "Don't show again today" : 'आज के लिए पुनः न दिखाएं'}</span>
            </label>

            <button
              type="button"
              onClick={handleAcknowledge}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Check size={16} />
              <span>{language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ (ਮਰਯਾਦਾ ਸਵੀਕਾਰ ਹੈ) ।।' : language === 'en' ? '।। Saheb Bandagi Saheb (Acknowledge) ।।' : '।। साहेब बंदगी साहेब (मर्यादा स्वीकार है) ।।'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
