import React from 'react';
import { Language } from '../types';

interface SacredLoaderProps {
  language?: Language;
  message?: string;
  compact?: boolean;
}

export const SacredLoader: React.FC<SacredLoaderProps> = ({
  language = 'hi',
  message,
  compact = false,
}) => {
  const defaultTitle =
    language === 'pb'
      ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹'
      : language === 'en'
      ? '🌹 ।। Satyanaam ।। 🌹'
      : '🌹 ।। सत्यनाम ।। 🌹';

  const defaultSubtitle =
    message ||
    (language === 'pb'
      ? 'ਪਾਵਨ ਬਾਣੀ ਖੁੱਲ੍ਹ ਰਹੀ ਹੈ...'
      : language === 'en'
      ? 'Opening sacred scriptures...'
      : 'पावन वाणी खुल रही है...');

  if (compact) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-2.5 animate-fadeIn">
        <div className="w-8 h-8 rounded-full border-2 border-amber-500/25 border-t-amber-600 animate-spin" />
        <p className="text-xs sm:text-sm font-serif font-bold text-amber-800 dark:text-amber-200">
          {defaultSubtitle}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[45vh] w-full flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-amber-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-600 border-r-amber-500 animate-spin" />
        <span className="text-xl select-none" aria-hidden="true">
          🪷
        </span>
      </div>
      <p className="text-sm sm:text-base font-serif font-black tracking-wide text-amber-900 dark:text-amber-200">
        {defaultTitle}
      </p>
      <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-400 mt-1">
        {defaultSubtitle}
      </p>
    </div>
  );
};
