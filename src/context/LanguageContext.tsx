import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, SACRED_BRANDING } from '../types';
import { translations, AppTranslations } from '../data/translations';
import { satyanaamAudio } from '../services/audioDhun';

export interface LocaleVerificationCheck {
  isVerified: boolean;
  satyanaamFormatted: string;
  expectedSatyanaam: string;
  scriptName: string;
  details: string;
}

export interface LanguageDiagnosticsInfo {
  currentLanguage: Language;
  direction: 'rtl' | 'ltr';
  htmlLang: string;
  totalKeys: number;
  untranslatedKeysCount: number;
  lastAccessedKey: string;
  fallbackCount: number;
  isInspectKeyOverlayActive: boolean;
  localeVerification: LocaleVerificationCheck;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: AppTranslations;
  dir: 'rtl' | 'ltr';
  diagnostics: LanguageDiagnosticsInfo;
  toggleInspectKeyOverlay: () => void;
  getKey: (key: keyof AppTranslations, fallback?: string) => string;
}

import { analytics } from '../services/analytics';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to determine direction for language (Gurmukhi, Devanagari and Latin are all LTR)
export const getScriptDirection = (lang: Language): 'rtl' | 'ltr' => {
  return 'ltr';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: Language }> = ({
  children,
  initialLanguage
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_lang');
      if (saved && (saved === 'hi' || saved === 'pb' || saved === 'en')) {
        return saved as Language;
      }
    }
    return 'hi';
  });

  const lastAccessedKeyRef = React.useRef<string>('appName');
  const fallbackCountRef = React.useRef<number>(0);
  const [isInspectKeyOverlayActive, setIsInspectKeyOverlayActive] = useState<boolean>(false);

  // Synchronize document.documentElement attributes ('dir' and 'lang')
  const syncHtmlAttributes = (lang: Language) => {
    if (typeof document !== 'undefined') {
      const direction = getScriptDirection(lang);
      const htmlLang = lang === 'pb' ? 'pa' : lang;

      document.documentElement.setAttribute('dir', direction);
      document.documentElement.setAttribute('lang', htmlLang);
      document.documentElement.dir = direction;
      document.documentElement.lang = htmlLang;

      if (document.body) {
        document.body.setAttribute('dir', direction);
        document.body.dir = direction;
      }
    }
  };

  // Run on mount and language change
  useEffect(() => {
    syncHtmlAttributes(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    const oldLang = language;
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_lang', lang);
      syncHtmlAttributes(lang);
      
      // Telemetry
      if (oldLang !== lang) {
        analytics.logEvent({
          name: 'language_change',
          params: { from: oldLang, to: lang }
        });
      }
      try {
        satyanaamAudio.setLanguage(lang);
      } catch {
        // ignore if audio not ready
      }

      // Dispatch custom events for instant sync across all legacy listeners
      window.dispatchEvent(new CustomEvent('sahebworld:language-changed', { detail: lang }));
      window.dispatchEvent(new CustomEvent('sahebworld_lang_change', { detail: lang }));
      window.dispatchEvent(new Event('sahebworld:sakhis-updated'));
    }
  };

  useEffect(() => {
    const handleLangEvent = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail && customEvent.detail !== language) {
        setLanguageState(customEvent.detail);
        syncHtmlAttributes(customEvent.detail);
      }
    };
    window.addEventListener('sahebworld:language-changed', handleLangEvent);
    window.addEventListener('sahebworld_lang_change', handleLangEvent as EventListener);
    
    // Cross-view and cross-tab storage persistence listener
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'sahebworld_lang' && e.newValue) {
        const newLang = e.newValue as Language;
        if (newLang === 'hi' || newLang === 'pb' || newLang === 'en') {
          if (newLang !== language) {
            setLanguageState(newLang);
            syncHtmlAttributes(newLang);
          }
        }
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('sahebworld:language-changed', handleLangEvent);
      window.removeEventListener('sahebworld_lang_change', handleLangEvent as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [language]);

  const toggleInspectKeyOverlay = () => {
    setIsInspectKeyOverlayActive((prev) => {
      const next = !prev;
      if (typeof document !== 'undefined') {
        if (next) {
          document.body.classList.add('i18n-inspect-keys-active');
        } else {
          document.body.classList.remove('i18n-inspect-keys-active');
        }
      }
      return next;
    });
  };

  // Create monitored translations proxy without mutating React state during render
  const t = useMemo(() => {
    const targetTranslations = translations[language] || translations.hi;
    const hindiTranslations = translations.hi;

    return new Proxy(targetTranslations, {
      get(target, prop: string | symbol) {
        if (typeof prop === 'string' && prop in target) {
          lastAccessedKeyRef.current = prop;
          const val = (target as any)[prop];
          if (val !== undefined && val !== null && val !== '') {
            return val;
          }
          fallbackCountRef.current += 1;
          return (hindiTranslations as any)[prop];
        }
        return (target as any)[prop];
      }
    });
  }, [language]);

  const getKey = (key: keyof AppTranslations, fallback?: string): string => {
    lastAccessedKeyRef.current = String(key);
    const target = translations[language] || translations.hi;
    const value = (target as any)[key];
    if (value !== undefined && value !== null && value !== '') {
      return String(value);
    }
    fallbackCountRef.current += 1;
    const hiValue = (translations.hi as any)[key];
    return hiValue !== undefined ? String(hiValue) : (fallback || String(key));
  };

  const diagnostics: LanguageDiagnosticsInfo = useMemo(() => {
    const totalKeys = Object.keys(translations.hi).length;
    const currentKeys = Object.keys(translations[language] || {});
    const untranslatedKeysCount = Math.max(0, totalKeys - currentKeys.length);

    // Secondary verification check for Satyanaam string and locale integrity
    const expectedHeaders: Record<Language, string> = {
      hi: '🌹 ।। सत्यनाम ।। 🌹',
      pb: '🌹 ।। ਸਤਯਨਾਮ ।। 🌹',
      en: '🌹 || Satyanaam || 🌹'
    };

    const actualHeader = SACRED_BRANDING.header[language];
    const expectedHeader = expectedHeaders[language];
    const isSatyanaamVerified = actualHeader === expectedHeader;

    const scriptNames: Record<Language, string> = {
      hi: 'Devanagari (हिन्दी)',
      pb: 'Gurmukhi (ਪੰਜਾਬੀ)',
      en: 'Latin (English)'
    };

    const localeVerification: LocaleVerificationCheck = {
      isVerified: isSatyanaamVerified && untranslatedKeysCount === 0,
      satyanaamFormatted: actualHeader,
      expectedSatyanaam: expectedHeader,
      scriptName: scriptNames[language],
      details: isSatyanaamVerified 
        ? `Satyanaam string authentically verified for ${scriptNames[language]}`
        : `Verification warning: Expected "${expectedHeader}" but found "${actualHeader}"`
    };

    return {
      currentLanguage: language,
      direction: getScriptDirection(language),
      htmlLang: language === 'pb' ? 'pa' : language,
      totalKeys,
      untranslatedKeysCount,
      lastAccessedKey: lastAccessedKeyRef.current,
      fallbackCount: fallbackCountRef.current,
      isInspectKeyOverlayActive,
      localeVerification
    };
  }, [language, isInspectKeyOverlayActive]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        dir: getScriptDirection(language),
        diagnostics, 
        toggleInspectKeyOverlay,
        getKey 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    const defaultLang: Language = 'hi';
    return {
      language: defaultLang,
      setLanguage: () => {},
      t: translations.hi,
      dir: 'ltr',
      diagnostics: {
        currentLanguage: defaultLang,
        direction: 'ltr',
        htmlLang: 'hi',
        totalKeys: Object.keys(translations.hi).length,
        untranslatedKeysCount: 0,
        lastAccessedKey: 'appName',
        fallbackCount: 0,
        isInspectKeyOverlayActive: false,
        localeVerification: {
          isVerified: true,
          satyanaamFormatted: '🌹 ।। सत्यनाम ।। 🌹',
          expectedSatyanaam: '🌹 ।। सत्यनाम ।। 🌹',
          scriptName: 'Devanagari (हिन्दी)',
          details: 'Default verified'
        }
      },
      toggleInspectKeyOverlay: () => {},
      getKey: (key: keyof AppTranslations) => (translations.hi as any)[key] || String(key)
    };
  }
  return context;
};
