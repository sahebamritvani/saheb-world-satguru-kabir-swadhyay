import React from 'react';
import { Languages, Check } from 'lucide-react';
import { Language } from '../types';
import { SACRED_NAME_CONSTANTS } from '../services/multilingualEngine';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  currentLang?: Language;
  onLanguageChange?: (lang: Language) => void;
  className?: string;
  variant?: 'pothi-compact' | 'pothi-full' | 'pothi-pill';
}

const LANGUAGES_CONFIG = [
  {
    code: 'hi' as Language,
    label: 'हिन्दी',
    scriptBadge: '🚩 हि',
    greeting: 'सत्यनाम • साहेब बंदगी साहेब',
    shortName: 'हिंदी'
  },
  {
    code: 'pb' as Language,
    label: 'ਪੰਜਾਬੀ',
    scriptBadge: '🌾 ਪੰ',
    greeting: 'ਸਤਯਨਾਮ • ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ',
    shortName: 'ਗੁਰਮੁਖੀ'
  },
  {
    code: 'en' as Language,
    label: 'English',
    scriptBadge: '🌐 EN',
    greeting: 'Satyanaam • Saheb Bandagi Saheb',
    shortName: 'English'
  }
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
  className = '',
  variant = 'pothi-full'
}) => {
  const ctx = useLanguage();
  const activeLang = currentLang || ctx.language;
  const handleLangChange = onLanguageChange || ctx.setLanguage;

  return (
    <div 
      className={`inline-flex items-center p-1 sm:p-1.5 rounded-2xl shadow-inner border transition-all duration-300 ${className}`}
      style={{
        backgroundColor: '#FFFDD0', // Authentic Pothi Cream
        borderColor: '#8B4513', // Sacred Maroon
        boxShadow: 'inset 0 2px 4px rgba(139, 69, 19, 0.15)'
      }}
      role="group"
      aria-label="Language selection without page reload"
    >
      <div className="flex items-center gap-1 sm:gap-1.5">
        {LANGUAGES_CONFIG.map((langItem) => {
          const isActive = activeLang === langItem.code;
          return (
            <button
              key={langItem.code}
              type="button"
              onClick={() => { console.log('Lang switch clicked:', langItem.code); handleLangChange(langItem.code); }}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? 'text-white shadow-md transform scale-102'
                  : 'text-[#8B4513] hover:bg-[#8B4513]/10 opacity-80 hover:opacity-100'
              }`}
              style={{
                backgroundColor: isActive ? '#8B4513' : 'transparent',
                border: isActive ? '1px solid #C59A3F' : '1px solid transparent'
              }}
              title={langItem.greeting}
            >
              {/* Script Badge */}
              <span className="text-[10px] sm:text-xs tracking-wider">
                {langItem.scriptBadge}
              </span>

              {/* Language Name */}
              <span>{variant === 'pothi-compact' ? langItem.shortName : langItem.label}</span>

              {/* Active Indicator Icon */}
              {isActive && (
                <Check className="w-3 h-3 text-[#FFD700] shrink-0" />
              )}
            </button>
          );
        })}
        {/* Script Selection (Conditional) */}
        <div className="flex items-center gap-1.5 mt-2 p-1 border-t border-[#8B4513]/20 pt-2">
          <span className="text-[10px] text-[#8B4513] font-bold uppercase tracking-wider mr-1">Script:</span>
          {activeLang === 'hi' && (
            <button className="px-3 py-1 bg-[#8B4513] text-white rounded-lg text-xs font-bold">Devanagari</button>
          )}
          {activeLang === 'pb' && (
            <button className="px-3 py-1 bg-[#8B4513] text-white rounded-lg text-xs font-bold cursor-not-allowed opacity-90">Gurmukhi</button>
          )}
          {activeLang === 'en' && (
            <button className="px-3 py-1 bg-[#8B4513] text-white rounded-lg text-xs font-bold">ABC (Roman)</button>
          )}
        </div>
      </div>
    </div>
  );
};
