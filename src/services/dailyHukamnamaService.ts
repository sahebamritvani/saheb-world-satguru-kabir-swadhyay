/**
 * Saheb World - Daily Hukamnama Service
 * Automatic 12:00 AM Midnight Rollover without repetition
 * Dynamically imports the 1.1 MB SGGS Kabir collection only when needed,
 * and caches today's single Hukamnama verse locally for instant repeat loads.
 */

import { SggsKabirVerse, FALLBACK_HUKAMNAMA_VERSE } from '../data/sggsKabirMetadata';
import { Language } from '../types';

const HUKAMNAMA_CACHE_KEY_PREFIX = 'sahebworld_daily_hukamnama_v1_';

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function findCoprimeMultiplier(n: number): number {
  let candidate = 167;
  while (gcd(candidate, n) !== 1) {
    candidate += 2;
  }
  return candidate;
}

/**
 * Returns integer day number since Jan 1, 2026 based on local midnight
 */
export function getLocalDayNumber(d: Date = new Date()): number {
  const localMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  const baseMidnight = new Date(2026, 0, 1, 0, 0, 0, 0);
  const diffTime = localMidnight.getTime() - baseMidnight.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function getDateCacheKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${HUKAMNAMA_CACHE_KEY_PREFIX}${y}-${m}-${day}`;
}

/**
 * Synchronous getter returning cached daily Hukamnama for today or lightweight fallback
 * while the async SGGS bundle loads on demand.
 */
export function getDailyHukamnama(date: Date = new Date()): SggsKabirVerse {
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(getDateCacheKey(date));
      if (cached) {
        return JSON.parse(cached) as SggsKabirVerse;
      }
    } catch {}
  }
  return FALLBACK_HUKAMNAMA_VERSE;
}

/**
 * Dynamically imports sggsKabirBaniData.ts on demand and computes/caches the daily Hukamnama verse.
 */
export async function getDailyHukamnamaAsync(date: Date = new Date()): Promise<SggsKabirVerse> {
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(getDateCacheKey(date));
      if (cached) {
        return JSON.parse(cached) as SggsKabirVerse;
      }
    } catch {}
  }

  const { SGGS_KABIR_VERSES_COLLECTION } = await import('../data/sggsKabirBaniData');
  const total = SGGS_KABIR_VERSES_COLLECTION.length;
  if (total === 0) {
    return FALLBACK_HUKAMNAMA_VERSE;
  }

  const dayNumber = getLocalDayNumber(date);
  const multiplier = findCoprimeMultiplier(total);
  const offset = 43;

  const rawIndex = (dayNumber * multiplier + offset) % total;
  const index = (rawIndex + total) % total;
  const verse = SGGS_KABIR_VERSES_COLLECTION[index] || FALLBACK_HUKAMNAMA_VERSE;

  if (typeof window !== 'undefined') {
    try {
      // Remove older day caches cleanly so localStorage stays lean
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && k.startsWith(HUKAMNAMA_CACHE_KEY_PREFIX)) {
          localStorage.removeItem(k);
        }
      }
      localStorage.setItem(getDateCacheKey(date), JSON.stringify(verse));
    } catch {}
  }

  return verse;
}

/**
 * Milliseconds until next local 12:00 AM (midnight)
 */
export function getMsUntilNextMidnight(): number {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1, 0);
  return Math.max(1000, nextMidnight.getTime() - now.getTime());
}

/**
 * Initializes automatic midnight rollover listener
 */
export function setupMidnightHukamnamaListener(onMidnightChange: () => void): () => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const scheduleNextCheck = () => {
    const msUntilMidnight = getMsUntilNextMidnight();
    timerId = setTimeout(() => {
      try {
        onMidnightChange();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('sahebworld_daily_hukamnama_midnight_change'));
        }
      } catch (err) {
        console.error('Midnight Hukamnama rollover error:', err);
      }
      scheduleNextCheck();
    }, msUntilMidnight);
  };

  scheduleNextCheck();

  return () => {
    if (timerId) clearTimeout(timerId);
  };
}

export interface DailyLifeDiscipline {
  title: string;
  subtitle: string;
  vicharPoint: string;
  aacharanPoint: string;
  samkalpPoint: string;
}

/**
 * Formulates structured Daily Life Discipline from the verse
 */
export function getDailyLifeDiscipline(verse: SggsKabirVerse, lang: Language): DailyLifeDiscipline {
  const isPb = lang === 'pb';
  const isEn = lang === 'en';

  const vicharRaw = isPb ? verse.chintan?.pb : isEn ? verse.chintan?.en : verse.chintan?.hi;
  const aacharanRaw = isPb ? verse.acharana?.pb : isEn ? verse.acharana?.en : verse.acharana?.hi;
  const samkalpRaw = isPb ? verse.samarpan?.pb : isEn ? verse.samarpan?.en : verse.samarpan?.hi;

  return {
    title: isPb
      ? 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਅਨੁਸ਼ਾਸਨ ਤੇ ਆਚਰਣ'
      : isEn
      ? 'Daily Life Discipline & Spiritual Conduct'
      : 'दैनिक जीवन में अनुशासन एवं पावन आचरण',
    subtitle: isPb
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੇ ਹੁਕਮਨਾਮੇ ਅਨੁਸਾਰ ਅੱਜ ਦਾ ਨਿੱਤ ਨੇਮ ਤੇ ਸੰਕਲਪ'
      : isEn
      ? "Today's Sacred Discipline & Commitment guided by Satguru Kabir Saheb's Vani"
      : 'सतगुरु कबीर साहेब के पावन हुकमनामे अनुसार आज का जीवन संकल्प व व्यवहार',
    vicharPoint:
      vicharRaw ||
      (isPb
        ? 'ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਸਥਿਰਤਾ ਰੱਖੋ।'
        : isEn
        ? 'Cultivate mindful stillness and constant remembrance of Truth.'
        : 'मन को शांत रखें और सत्यनाम के सुमिरन में स्थिर करें।'),
    aacharanPoint:
      aacharanRaw ||
      (isPb
        ? 'ਸਾਰੇ ਜੀਵਾਂ ਨਾਲ ਨਿਮਰਤਾ, ਸੱਚਾਈ ਤੇ ਪ੍ਰੇਮ ਭਰਿਆ ਵਿਹਾਰ ਕਰੋ।'
        : isEn
        ? 'Act with genuine humility, truthfulness, and compassion towards all beings.'
        : 'समस्त जीवों के प्रति नम्रता, सत्य व्यवहार व करुणा का आचरण करें।'),
    samkalpPoint:
      samkalpRaw ||
      (isPb
        ? 'ਅੱਜ ਕਿਸੇ ਦੀ ਨਿੰਦਾ ਨਹੀਂ ਕਰਾਂਗਾ ਅਤੇ ਹਰ ਪਲ ਪ੍ਰਭੂ ਦਾ ਸ਼ੁਕਰਾਨਾ ਕਰਾਂਗਾ।'
        : isEn
        ? 'Today I abstain from malice and rest in gratitude and self-surrender.'
        : 'आज किसी की निंदा न करने और प्रत्येक क्षण में प्रभु का आभार मानने का संकल्प लें।'),
  };
}
