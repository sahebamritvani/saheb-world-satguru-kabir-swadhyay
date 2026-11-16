import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquareWarning } from 'lucide-react';
import { Language } from '../types';

interface TextCorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  defaultVerseText?: string;
  sectionTitle?: string;
}

export const TextCorrectionModal: React.FC<TextCorrectionModalProps> = ({
  isOpen,
  onClose,
  language,
  defaultVerseText = '',
  sectionTitle = ''
}) => {
  const [correctedText, setCorrectedText] = useState(defaultVerseText);
  const [remarks, setRemarks] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRemarks('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-md rounded-3xl border-2 border-amber-400 dark:border-amber-700 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-amber-200 dark:border-zinc-800 bg-amber-50 dark:bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-sm">
                <MessageSquareWarning size={18} />
              </div>
              <h3 className="text-base font-black font-serif text-amber-950 dark:text-amber-200">
                {language === 'pb' ? 'ਸ਼ੁੱਧਤਾ ਸੁਧਾਰ ਸੁਝਾਅ (Text Correction)' : 'पावन वाणी शुद्धि रिपोर्ट (Text Correction)'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:text-gray-300 transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 size={48} className="mx-auto text-green-600 dark:text-green-400" />
                <h4 className="text-lg font-bold font-serif text-gray-900 dark:text-gray-100">
                  {language === 'pb' ? 'ਸੁਝਾਅ ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ ਹੈ!' : 'आपका सुझाव प्राप्त हो गया है!'}
                </h4>
                <p className="text-xs font-serif opacity-75 max-w-xs mx-auto">
                  {language === 'pb' ? 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦੀ ਸ਼ੁੱਧਤਾ ਲਈ ਤੁਹਾਡਾ ਧੰਨਵਾਦ। ਅਗਲੇ ਅਪਡੇਟ ਵਿੱਚ ਇਸਨੂੰ ਦਰੁਸਤ ਕਰ ਦਿੱਤਾ ਜਾਵੇਗਾ।' : 'सतगुरु कबीर साहेब की वाणी की शुद्धता एवं पवित्रता बनाए रखने में सहयोग हेतु धन्यवाद। अगले अपडेट में इसे जांचकर तुरंत ठीक कर दिया जाएगा।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-serif opacity-75">
                  <span className="font-bold text-amber-700 dark:text-amber-400">{sectionTitle}</span>
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold mb-1 opacity-80">
                    {language === 'pb' ? 'ਮੌਜੂਦਾ / ਸੁਧਾਰੀ ਜਾਣ ਵਾਲੀ ਪੰਕਤੀ:' : 'सुधार की आवश्यकता वाली पंक्ति या शब्द:'}
                  </label>
                  <textarea
                    rows={3}
                    value={correctedText}
                    onChange={(e) => setCorrectedText(e.target.value)}
                    className="w-full p-3 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-xs sm:text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="यहाँ पंक्ति लिखें..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold mb-1 opacity-80">
                    {language === 'pb' ? 'ਗਲਤੀ ਦਾ ਵੇਰਵਾ (Remarks):' : 'त्रुटि का विवरण या सही शब्द क्या होना चाहिए:'}
                  </label>
                  <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full p-3 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-xs font-serif focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="उदा. वर्तनी (Spelling) की अशुद्धि..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{language === 'pb' ? 'ਸੁਝਾਅ ਭੇਜੋ' : 'सुझाव भेजें (Report Mistake)'}</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
