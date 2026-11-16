import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Navigation, Train, Bus, BedDouble, Info } from 'lucide-react';
import { Language } from '../types';

interface DamakhedaRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DamakhedaRouteModal: React.FC<DamakhedaRouteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-lg rounded-3xl border-2 border-amber-400 dark:border-amber-700 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-amber-50 dark:bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl shadow-sm">
                🚩
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif text-amber-950 dark:text-amber-200">
                  दमाखेड़ा आश्रम मार्ग व ठहरने की व्यवस्था (Route & Stay Guide)
                </h3>
                <p className="text-[11px] font-serif text-amber-800 dark:text-amber-400">
                  कबीर धर्मनगर दमाखेड़ा (जिला बलौदाबाजार, छत्तीसगढ़)
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
                <span>रेलवे स्टेशन व निकटतम एयरपोर्ट:</span>
              </h4>
              <p className="opacity-80 leading-relaxed">
                • <strong>निकटतम मुख्य रेलवे स्टेशन:</strong> रायपुर जंक्शन (Raipur Jn) - लगभग 45 किमी।<br />
                • <strong>भाटापारा रेलवे स्टेशन:</strong> भाटापारा से दमाखेड़ा लगभग 25 किमी।<br />
                • <strong>निकटतम एयरपोर्ट:</strong> स्वामी विवेकानंद एयरपोर्ट, रायपुर।
              </p>
            </div>

            {/* Bus & Road Transit */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 space-y-2">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                <Bus size={16} className="text-amber-600" />
                <span>सड़क मार्ग व बस सेवा:</span>
              </h4>
              <p className="opacity-80 leading-relaxed">
                रायपुर बस स्टैंड (पंडरी / भाठागांव) से बलौदाबाजार / बिलासपुर मार्ग पर चलने वाली बसें सीधे दमाखेड़ा आश्रम गेट पर उतरती हैं। टैक्सी व ऑटो भी निरंतर उपलब्ध रहते हैं।
              </p>
            </div>

            {/* Stay Rules & Protocol */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 text-amber-950 dark:text-amber-200">
              <h4 className="font-bold flex items-center gap-1.5 text-sm">
                <BedDouble size={16} className="text-amber-600" />
                <span>आश्रम में रुकने के नियम व व्यवस्था:</span>
              </h4>
              <p className="opacity-90 leading-relaxed">
                • आश्रम में सर्व-सुविधायुक्त धर्मशालाएं उपलब्ध हैं।<br />
                • माघ पूर्णिमा मेला एवं उत्सव के समय पूर्व सूचना के साथ आना उचित रहता है।<br />
                • आश्रम परिसर में पूर्ण शाकाहार, सात्विकता व पावन मर्यादा का पालन अनिवार्य है।
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer"
            >
              साहेब बंदगी साहेब
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
