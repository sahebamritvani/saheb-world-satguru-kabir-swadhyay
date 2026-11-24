import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Share2, Sparkles } from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';

interface ShabadShareModalProps {
  verse: { id: string | number; lines: { hi: string[]; pb?: string[]; en?: string[] }; bhavarth?: { hi?: string; pb?: string; en?: string } } | null;
  sectionTitle: string;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ShabadShareModal: React.FC<ShabadShareModalProps> = ({
  verse,
  sectionTitle,
  isOpen,
  onClose,
  language,
}) => {
  const { theme } = useAppTheme();
  const [copied, setCopied] = useState(false);
  const [cardTheme, setCardTheme] = useState<'amber' | 'emerald' | 'maroon' | 'midnight'>('amber');

  if (!isOpen || !verse) return null;

  const lines = verse.lines[language] || verse.lines.hi || [];
  const bhavarth = verse.bhavarth ? (verse.bhavarth[language] || verse.bhavarth.hi) : '';

  const handleCopyCard = async () => {
    const text = `🪷 ${sectionTitle} 🪷\n\n${lines.join('\n')}\n\n${bhavarth ? `भावार्थ:\n${bhavarth}\n\n` : ''}।। साहेब बंदगी साहेब ।।\n(SahebWorld - Satguru Kabir Saheb App)`;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
    } catch {}
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  const handleWebShare = async () => {
    const text = `🪷 ${sectionTitle} 🪷\n\n${lines.join('\n')}\n\n${bhavarth ? `भावार्थ:\n${bhavarth}\n\n` : ''}।। साहेब बंदगी साहेब ।।`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Satguru Kabir Saheb Vani',
          text: text,
        });
      } catch {}
    } else {
      handleCopyCard();
    }
  };

  const themeStyles = {
    amber: 'bg-gradient-to-br from-amber-50 via-yellow-100/70 to-amber-200 text-amber-950 border-amber-400',
    emerald: 'bg-gradient-to-br from-emerald-900 via-emerald-950 to-zinc-950 text-emerald-100 border-emerald-600',
    maroon: 'bg-gradient-to-br from-[#4A1515] via-[#2E0B0B] to-black text-amber-100 border-amber-600/70',
    midnight: 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-100 border-zinc-700'
  }[cardTheme];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col bg-white dark:bg-zinc-900"
        >
          {/* Header */}
          <div className="p-4 border-b border-amber-200/50 dark:border-zinc-800 bg-amber-50 dark:bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪷</span>
              <h3 className="text-base font-black font-serif text-amber-950 dark:text-amber-200">
                {language === 'pb' ? 'ਸ਼ਬਦ / ਪੰਕਤੀ ਸਾਂਝੀ ਕਰੋ' : language === 'en' ? 'Share Sacred Shabad Card' : 'सुंदर शबद / पंक्ति शेयर कार्ड'}
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

          {/* Theme Picker */}
          <div className="px-4 py-2.5 bg-gray-50 dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-2">
            <span className="text-xs font-serif opacity-75 font-bold">
              {language === 'pb' ? 'ਕਾਰਡ ਥੀਮ:' : language === 'en' ? 'Card Theme:' : 'कार्ड थीम चुने:'}
            </span>
            <div className="flex items-center gap-1.5">
              {(['amber', 'emerald', 'maroon', 'midnight'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setCardTheme(t)}
                  className={`w-6 h-6 rounded-full border-2 transition cursor-pointer ${
                    cardTheme === t ? 'scale-110 ring-2 ring-amber-500' : 'opacity-70 hover:opacity-100'
                  } ${
                    t === 'amber' ? 'bg-amber-200' : t === 'emerald' ? 'bg-emerald-800' : t === 'maroon' ? 'bg-[#5A1212]' : 'bg-zinc-900'
                  }`}
                  title={t}
                />
              ))}
            </div>
          </div>

          {/* Shareable Graphic Card Preview */}
          <div className="p-4 sm:p-6">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 shadow-xl relative overflow-hidden flex flex-col items-center text-center ${themeStyles}`}>
              {/* Decorative Corner Watermarks */}
              <div className="absolute top-2 left-3 opacity-20 text-xs font-mono">🪷 SATYANAAM</div>
              <div className="absolute bottom-2 right-3 opacity-20 text-xs font-mono">KABIR SAHEB</div>

              <span className="text-xs font-serif font-bold uppercase tracking-widest opacity-80 mb-2">
                🪷 {sectionTitle} 🪷
              </span>

              <div className="w-16 h-0.5 bg-amber-500/50 my-2 rounded-full" />

              <div className="space-y-2 my-4 font-serif font-black text-base sm:text-lg leading-relaxed">
                {lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>

              {bhavarth && (
                <p className="text-xs sm:text-sm font-serif italic opacity-90 max-w-md mx-auto mt-2 pt-3 border-t border-current/20">
                  "{bhavarth}"
                </p>
              )}

              <div className="mt-6 pt-3 border-t border-current/20 flex items-center justify-center gap-2 text-xs font-serif font-bold opacity-90">
                <span>{SACRED_BRANDING.footer[language]}</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopyCard}
              className="flex-1 px-4 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'कॉपी हो गया!' : 'टेक्स्ट कॉपी करें'}</span>
            </button>

            <button
              type="button"
              onClick={handleWebShare}
              className="flex-1 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 size={16} />
              <span>WhatsApp / Share</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
