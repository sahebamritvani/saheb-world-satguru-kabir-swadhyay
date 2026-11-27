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

  const langKey = language as keyof typeof verse.lines;
  const lines = verse.lines[langKey] || verse.lines.hi || [];
  const bhavarthObj = verse.bhavarth as Record<string, string> | undefined;
  const bhavarth = bhavarthObj ? (bhavarthObj[language] || bhavarthObj.hi) : '';

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
    const text = `🪷 ${sectionTitle} 🪷\n\n${lines.join('\n')}\n\n${bhavarth ? `भावार्थ:\n${bhavarth}\n\n` : ''}।। साहेब बंदगी साहेब ।।\n(SahebWorld - Satguru Kabir Saheb App)`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: sectionTitle,
          text: text,
        });
        return;
      } catch {}
    }
    handleCopyCard();
  };

  const themeClasses = {
    amber: 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 text-amber-950 dark:text-amber-100 border-amber-300 dark:border-amber-700/50',
    emerald: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 text-emerald-950 dark:text-emerald-100 border-emerald-300 dark:border-emerald-700/50',
    maroon: 'bg-gradient-to-br from-rose-50 via-red-50 to-rose-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 text-rose-950 dark:text-rose-100 border-rose-300 dark:border-rose-700/50',
    midnight: 'bg-gradient-to-br from-slate-900 via-zinc-900 to-zinc-950 text-slate-100 border-slate-700',
  }[cardTheme];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-[48px_14px] bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-[480px] max-h-[calc(100dvh-104px)] flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-amber-500/30"
          style={{ maxWidth: '480px' }}
        >
          {/* Modal Header */}
          <div className="p-4 border-b border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-900 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-serif font-bold text-sm sm:text-base text-amber-900 dark:text-amber-200">
                {language === 'pb' ? 'ਸ਼ਬਦ / ਸਾਖੀ ਸਾਂਝੀ ਕਰੋ' : language === 'en' ? 'Share Sacred Verse' : 'पावन वाणी / श्लोक साझा करें'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-500 transition cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Theme Selector Bar */}
          <div className="px-4 py-2 bg-amber-100/40 dark:bg-zinc-950 border-b border-amber-200/50 dark:border-zinc-800 flex items-center justify-center gap-2 shrink-0">
            <span className="text-xs font-serif text-amber-900 dark:text-amber-300 font-bold mr-1">थीम:</span>
            {(['amber', 'emerald', 'maroon', 'midnight'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setCardTheme(t)}
                className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold capitalize transition border ${
                  cardTheme === t
                    ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                    : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700'
                }`}
              >
                {t === 'amber' ? 'स्वर्ण' : t === 'emerald' ? 'हरित' : t === 'maroon' ? 'मारून' : 'रात्रि'}
              </button>
            ))}
          </div>

          {/* Scrollable Card Preview Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            <div className={`p-5 rounded-2xl border-2 shadow-lg transition-all ${themeClasses} max-h-[42vh] overflow-y-auto`}>
              <div className="text-center font-serif font-bold text-xs uppercase tracking-widest opacity-80 mb-2">
                🌹 ।। सत्यनाम ।। 🌹
              </div>
              <div className="text-center font-serif font-bold text-sm sm:text-base text-amber-800 dark:text-amber-300 mb-4 border-b border-current/20 pb-2">
                {sectionTitle}
              </div>

              <div className="space-y-2 text-center font-serif text-sm sm:text-base leading-relaxed mb-4">
                {lines.map((l: string, i: number) => (
                  <p key={i} className="font-semibold">{l}</p>
                ))}
              </div>

              {bhavarth && (
                <div className="mt-3 pt-3 border-t border-current/20 text-xs sm:text-sm font-sans opacity-90">
                  <span className="font-bold underline">भावार्थ / सार:</span> {bhavarth}
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-current/20 text-center font-serif text-xs font-bold tracking-wider opacity-90">
                {SACRED_BRANDING.footer[language]}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 flex items-center justify-between gap-3 shrink-0">
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
