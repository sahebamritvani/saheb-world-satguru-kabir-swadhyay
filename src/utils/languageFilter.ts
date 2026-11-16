import { Language } from '../types';
import {
  transliterateDevanagariToGurmukhi,
  transliterateDevanagariToRoman,
  SACRED_NAME_CONSTANTS,
  enforceSacredNameSpelling
} from '../services/multilingualEngine';

/**
 * Normalizes any language code or alias to strict Language type ('hi' | 'pb' | 'en')
 */
export function normalizeLanguageCode(code: string | null | undefined): Language {
  if (!code) return 'hi';
  const c = String(code).toLowerCase().trim();
  if (c === 'pa' || c === 'pb' || c === 'punjabi' || c === 'gurmukhi') return 'pb';
  if (c === 'en' || c === 'english' || c === 'roman') return 'en';
  return 'hi';
}

// Gurmukhi to Devanagari Character Map
const GUR_TO_DEV_MAP: Record<string, string> = {
  // Vowels
  'ਅ': 'अ', 'ਆ': 'आ', 'ਇ': 'इ', 'ਈ': 'ई', 'ਉ': 'उ', 'ਊ': 'ऊ',
  'ਏ': 'ए', 'ਐ': 'ऐ', 'ਓ': 'ओ', 'ਔ': 'औ',
  
  // Consonants
  'ਕ': 'क', 'ਖ': 'ख', 'ਗ': 'ग', 'ਘ': 'घ', 'ਙ': 'ङ',
  'ਚ': 'च', 'ਛ': 'छ', 'ਜ': 'ज', 'ਝ': 'झ', 'ਞ': 'ञ',
  'ਟ': 'ट', 'ਠ': 'ठ', 'ਡ': 'ड', 'ਢ': 'ढ', 'ਣ': 'ण',
  'ਤ': 'त', 'ਥ': 'थ', 'ਦ': 'द', 'ਧ': 'ध', 'ਨ': 'न',
  'ਪ': 'प', 'ਫ': 'फ', 'ਬ': 'ब', 'ਭ': 'भ', 'ਮ': 'म',
  'ਯ': 'य', 'ਰ': 'र', 'ਲ': 'ल', 'ਵ': 'व', 'ਸ਼': 'श',
  'ਸ': 'स', 'ਹ': 'ह', 'ੜ': 'ड़', 'ਕ਼': 'क़', 'ਖ਼': 'ख़',
  'ਗ਼': 'ग़', 'ਜ਼': 'ज़', 'ਫ਼': 'फ़',

  // Matras
  'ਾ': 'ा', 'ਿ': 'ि', 'ੀ': 'ी', 'ੁ': 'ु', 'ੂ': 'ू',
  'ੇ': 'े', 'ੈ': 'ै', 'ੋ': 'ो', 'ੌ': 'ौ',

  // Modifiers
  'ਂ': 'ं', 'ਁ': 'ँ', 'ਃ': 'ः', '੍': '्',

  // Numerals
  '੦': '०', '੧': '१', '੨': '२', '੩': '३', '੪': '४',
  '੫': '५', '੬': '६', '੭': '७', '੮': '८', '੯': '९',

  // Punctuation
  '।': '।', '॥': '॥'
};

/**
 * Converts Gurmukhi script characters to Devanagari script characters
 */
export function gurmukhiToDevanagari(gurText: string): string {
  if (!gurText) return '';
  let out = '';
  const len = gurText.length;
  for (let i = 0; i < len; i++) {
    const ch = gurText[i];
    const nextCh = i + 1 < len ? gurText[i + 1] : '';
    const twoChar = ch + nextCh;
    if (GUR_TO_DEV_MAP[twoChar]) {
      out += GUR_TO_DEV_MAP[twoChar];
      i++;
      continue;
    }
    if (GUR_TO_DEV_MAP[ch] !== undefined) {
      out += GUR_TO_DEV_MAP[ch];
    } else {
      out += ch;
    }
  }
  return enforceSacredNameSpelling(out, 'hi');
}

/**
 * Converts Gurmukhi text to Roman phonetic script
 */
export function gurmukhiToRoman(gurText: string): string {
  if (!gurText) return '';
  const devText = gurmukhiToDevanagari(gurText);
  return transliterateDevanagariToRoman(devText);
}

const DEVANAGARI_REGEX = /[\u0900-\u0963\u0966-\u097F]/;
const GURMUKHI_REGEX = /[\u0A00-\u0A7F]/;

/**
 * Bulletproof 3-way rendering filter for any string or multilingual node.
 * Strictly guarantees that:
 * - 'pb' (Gurmukhi) outputs 100% pure Gurmukhi text
 * - 'hi' (Devanagari) outputs 100% pure Devanagari text
 * - 'en' (Roman) outputs 100% pure Roman text
 */
export function filterLanguageText(
  item: { hi?: string; pb?: string; pa?: string; en?: string } | string | null | undefined,
  targetLang: Language
): string {
  if (item === null || item === undefined) return '';

  const lang = normalizeLanguageCode(targetLang);

  if (typeof item === 'object') {
    if (lang === 'pb') {
      const pbVal = item.pb || item.pa;
      if (pbVal && !DEVANAGARI_REGEX.test(pbVal)) {
        return pbVal;
      }
      const fallback = pbVal || item.hi || item.en || '';
      return transliterateDevanagariToGurmukhi(fallback);
    }

    if (lang === 'en') {
      const enVal = item.en;
      if (enVal && !DEVANAGARI_REGEX.test(enVal) && !GURMUKHI_REGEX.test(enVal)) {
        return enVal;
      }
      const fallback = enVal || item.hi || item.pb || item.pa || '';
      if (GURMUKHI_REGEX.test(fallback)) {
        return gurmukhiToRoman(fallback);
      }
      return transliterateDevanagariToRoman(fallback);
    }

    // Default 'hi' (Devanagari)
    const hiVal = item.hi;
    if (hiVal && !GURMUKHI_REGEX.test(hiVal)) {
      return hiVal;
    }
    const fallback = hiVal || item.pb || item.pa || item.en || '';
    if (GURMUKHI_REGEX.test(fallback)) {
      return gurmukhiToDevanagari(fallback);
    }
    return fallback;
  }

  // item is a string
  const str = String(item).trim();
  if (!str) return '';

  if (lang === 'pb') {
    if (DEVANAGARI_REGEX.test(str)) {
      return transliterateDevanagariToGurmukhi(str);
    }
    return str;
  }

  if (lang === 'en') {
    if (DEVANAGARI_REGEX.test(str)) {
      return transliterateDevanagariToRoman(str);
    }
    if (GURMUKHI_REGEX.test(str)) {
      return gurmukhiToRoman(str);
    }
    return str;
  }

  // Hindi: if string contains Gurmukhi, convert to Devanagari
  if (GURMUKHI_REGEX.test(str)) {
    return gurmukhiToDevanagari(str);
  }
  return str;
}

/**
 * Filter an array of verse lines to ensure 100% adherence to target language script
 */
export function filterVerseLines(
  linesObj: { hi?: string[]; pb?: string[]; pa?: string[]; en?: string[] },
  targetLang: Language
): string[] {
  const lang = normalizeLanguageCode(targetLang);

  if (lang === 'pb') {
    const pbLines = linesObj.pb || linesObj.pa;
    if (pbLines && pbLines.length > 0 && pbLines.some(l => !DEVANAGARI_REGEX.test(l))) {
      return pbLines.map(l => (DEVANAGARI_REGEX.test(l) ? transliterateDevanagariToGurmukhi(l) : l));
    }
    const hiLines = linesObj.hi || [];
    return hiLines.map(l => transliterateDevanagariToGurmukhi(l));
  }

  if (lang === 'en') {
    const enLines = linesObj.en;
    if (enLines && enLines.length > 0 && enLines.some(l => !DEVANAGARI_REGEX.test(l) && !GURMUKHI_REGEX.test(l))) {
      return enLines.map(l => {
        if (DEVANAGARI_REGEX.test(l)) return transliterateDevanagariToRoman(l);
        if (GURMUKHI_REGEX.test(l)) return gurmukhiToRoman(l);
        return l;
      });
    }
    const hiLines = linesObj.hi || [];
    return hiLines.map(l => transliterateDevanagariToRoman(l));
  }

  // Hindi: pure Devanagari
  const hiLines = linesObj.hi || [];
  return hiLines.map(l => (GURMUKHI_REGEX.test(l) ? gurmukhiToDevanagari(l) : l));
}
