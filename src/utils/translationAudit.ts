/**
 * Translation Audit Diagnostic Utility
 * Audits language bundles (Hindi, Punjabi, English) to detect strings failing to switch
 * or left untranslated across language variants.
 */
import { translations, AppTranslations } from '../data/translations';
import { Language } from '../types';

export interface AuditFlag {
  key: string;
  reason: 'identical_to_hindi' | 'identical_to_punjabi' | 'empty' | 'missing';
  languagesInvolved: Language[];
  preview: {
    hi: string;
    pb: string;
    en: string;
  };
}

export interface TranslationAuditReport {
  totalKeys: number;
  healthyCount: number;
  flaggedCount: number;
  healthPercentage: number;
  flags: AuditFlag[];
  timestamp: string;
}

// Keys that are intentionally identical across languages (e.g. universal mantras, numbers, or branding)
const EXEMPT_KEYS = new Set<string>([
  'aspectRatioLabel', // technical
  'appVersionValue',
  'appName',
  'diaryTags',
  'universeLevels',
]);

export const auditAllTranslations = (): TranslationAuditReport => {
  const hi = translations.hi as Record<string, any>;
  const pb = translations.pb as Record<string, any>;
  const en = translations.en as Record<string, any>;

  const keys = Object.keys(hi);
  const flags: AuditFlag[] = [];

  for (const key of keys) {
    if (EXEMPT_KEYS.has(key)) continue;

    const valHi = String(hi[key] || '').trim();
    const valPb = String(pb[key] || '').trim();
    const valEn = String(en[key] || '').trim();

    // Check empty
    if (!valHi || !valPb || !valEn) {
      flags.push({
        key,
        reason: 'empty',
        languagesInvolved: [
          ...(!valHi ? ['hi' as Language] : []),
          ...(!valPb ? ['pb' as Language] : []),
          ...(!valEn ? ['en' as Language] : []),
        ],
        preview: { hi: valHi, pb: valPb, en: valEn }
      });
      continue;
    }

    // Check if English string is identical to Hindi string (meaning untranslated to English)
    // Ignore pure numbers or single symbols
    if (valEn === valHi && valHi.length > 2 && !/^\d+$/.test(valHi)) {
      flags.push({
        key,
        reason: 'identical_to_hindi',
        languagesInvolved: ['en', 'hi'],
        preview: { hi: valHi, pb: valPb, en: valEn }
      });
      continue;
    }

    // Check if Punjabi string is identical to Hindi string
    if (valPb === valHi && valHi.length > 2 && !/^\d+$/.test(valHi)) {
      flags.push({
        key,
        reason: 'identical_to_hindi',
        languagesInvolved: ['pb', 'hi'],
        preview: { hi: valHi, pb: valPb, en: valEn }
      });
      continue;
    }
  }

  const healthyCount = keys.length - flags.length;
  const healthPercentage = Math.round((healthyCount / keys.length) * 100);

  return {
    totalKeys: keys.length,
    healthyCount,
    flaggedCount: flags.length,
    healthPercentage,
    flags,
    timestamp: new Date().toISOString()
  };
};

/**
 * Checks if a specific key has failed to switch for the target language
 */
export const isKeyFailingSwitch = (key: keyof AppTranslations, currentLang: Language): boolean => {
  const hi = (translations.hi as any)[key];
  const target = (translations[currentLang] as any)[key];

  if (target === undefined || target === null || target === '') return true;
  if (currentLang === 'en' && typeof target === 'string' && typeof hi === 'string') {
    if (target === hi && hi.length > 3 && !/^\d+$/.test(hi)) return true;
  }
  if (currentLang === 'pb' && typeof target === 'string' && typeof hi === 'string') {
    if (target === hi && hi.length > 3 && !/^\d+$/.test(hi)) return true;
  }
  return false;
};
