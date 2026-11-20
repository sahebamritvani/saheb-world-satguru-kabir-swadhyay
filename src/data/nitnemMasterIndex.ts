import masterIndexJson from './nitnemMasterIndex.json';
import { jantriEvents2026 } from './jantri';
import { Language } from '../types';

export interface SubChapterIndexItem {
  id: string;
  section_id?: string;
  hindi: string;
  punjabi: string;
  english?: string;
}

export interface NitnemOutlineChapter {
  number: string;
  hindi: string;
  punjabi: string;
  english: string;
  sectionId?: string;
  children?: SubChapterIndexItem[];
}

export interface GranthSuchiSection {
  section_id: string;
  major_category_id: 'prabhat-path' | 'sandhya-path' | 'gayatri' | 'poonam-mahatmya' | 'chalisa' | 'barahmasi' | 'teesa-yantra';
  hindi_title: string;
  punjabi_title: string;
  english_title?: string;
  sub_chapters: SubChapterIndexItem[];
}

export interface MasterNitnemIndexData {
  book_title_hindi: string;
  book_title_punjabi: string;
  book_title_english?: string;
  granth_suchi: GranthSuchiSection[];
}

export const MASTER_NITNEM_INDEX: MasterNitnemIndexData = masterIndexJson as MasterNitnemIndexData;

/**
 * Traditional grouped chapter outlines matching the authentic
 * Satguru Kabir Saheb Nitnem Gutka Saheb (Damakheda / Kabir Panth).
 */
export const TRADITIONAL_GUTKA_OUTLINES: Record<
  GranthSuchiSection['major_category_id'],
  NitnemOutlineChapter[]
> = {
  'prabhat-path': [],
  'sandhya-path': [],
  'gayatri': [],
  'poonam-mahatmya': [],
  'chalisa': [],
  'barahmasi': [],
  'teesa-yantra': [],
};

export interface SmartNitnemRecommendation {
  prahar: 'morning' | 'noon' | 'evening';
  primaryCategoryId: GranthSuchiSection['major_category_id'];
  primarySectionId: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  badge: Record<Language, string>;
  isPurnimaToday: boolean;
  purnimaTitle?: Record<Language, string>;
}

/**
 * Checks whether the given local date falls on Purnima:
 * 1. Exact check against jantriEvents2026 (including Kabir Jayanti / Jyeshtha Purnima)
 * 2. Astronomical synodic lunar age fallback (~14.77 days from reference New Moon) for other years
 */
export function isDatePurnima(date: Date = new Date()): { isPurnima: boolean; label?: Record<Language, string> } {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const localIso = `${year}-${month}-${day}`;

  const matchedJantri = jantriEvents2026.find(
    (e) =>
      e.date === localIso &&
      (e.type === 'purnima' ||
        e.title.hi.includes('पूर्णिमा') ||
        e.title.en.toLowerCase().includes('purnima'))
  );

  if (matchedJantri) {
    return { isPurnima: true, label: matchedJantri.title };
  }

  // Fallback astronomical synodic calculation for other years (epoch: 2000-01-06 18:14 UTC new moon)
  const synodicMonth = 29.53058867;
  const refEpochMs = Date.UTC(2000, 0, 6, 18, 14, 0);
  const noonUtcMs = Date.UTC(year, date.getMonth(), date.getDate(), 12, 0, 0);
  const daysSinceRef = (noonUtcMs - refEpochMs) / 86400000;
  const lunarAge = ((daysSinceRef % synodicMonth) + synodicMonth) % synodicMonth;
  if (Math.abs(lunarAge - synodicMonth / 2) <= 0.65 && year !== 2026) {
    return {
      isPurnima: true,
      label: {
        hi: 'पावन पूर्णिमा (पूनो पर्व)',
        pb: 'ਪਾਵਨ ਪੂਰਨਮਾਸ਼ੀ (ਪੂਨੋ ਪੁਰਬ)',
        en: 'Sacred Full Moon (Purnima)',
      },
    };
  }

  return { isPurnima: false };
}

/**
 * Smart Time Detection for Satguru Kabir Saheb Nitnem Gutka Saheb:
 * - Morning (04:00 - 11:29): Highlights 'प्रभात (प्रातः) पाठ'
 * - Noon (11:30 - 15:59): Highlights 'मध्याह्न गायत्री'
 * - Evening / Night (16:00 - 03:59): Highlights 'मूल संध्या पाठ'
 * - Purnima Day: Additionally flags 'पूनो महात्म्य पाठ'
 */
export function getSmartNitnemRecommendation(now: Date = new Date()): SmartNitnemRecommendation {
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;
  const purnimaInfo = isDatePurnima(now);

  // Morning: 04:00 (240) to 11:29 (689)
  if (timeInMinutes >= 240 && timeInMinutes < 690) {
    return {
      prahar: 'morning',
      primaryCategoryId: 'prabhat-path',
      primarySectionId: 'prabhat-aarambh-vandana',
      badge: {
        hi: 'प्रभात बेला • सुझायित पाठ',
        pb: 'ਪ੍ਰਭਾਤ ਵੇਲਾ • ਸੁਝਾਇਆ ਪਾਠ',
        en: 'Morning Hour • Recommended',
      },
      title: {
        hi: '१. प्रभात (प्रातः) पाठ',
        pb: '੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ',
        en: '1. Prabhat (Morning) Path',
      },
      subtitle: {
        hi: 'ब्रह्ममुहूर्त व प्रातःकाल के लिए आरंभ वंदना से समापन वंदना तक नित्य प्रभात पाठ।',
        pb: 'ਸਵੇਰ ਵੇਲੇ ਲਈ ਆਰੰਭ ਵੰਦਨਾ ਤੋਂ ਸਮਾਪਨ ਵੰਦਨਾ ਤੱਕ ਨਿੱਤ ਪ੍ਰਭਾਤ ਪਾਠ।',
        en: 'Begin your auspicious morning with Prabhat Path from Aarambh Vandana to Samapan Vandana.',
      },
      isPurnimaToday: purnimaInfo.isPurnima,
      purnimaTitle: purnimaInfo.label,
    };
  }

  // Noon: 11:30 (690) to 15:59 (959)
  if (timeInMinutes >= 690 && timeInMinutes < 960) {
    return {
      prahar: 'noon',
      primaryCategoryId: 'gayatri',
      primarySectionId: 'gayatri-madhyahan',
      badge: {
        hi: 'मध्याह्न बेला • सुझायित पाठ',
        pb: 'ਦੁਪਹਿਰ ਵੇਲਾ • ਸੁਝਾਇਆ ਪਾਠ',
        en: 'Midday Hour • Recommended',
      },
      title: {
        hi: 'मध्याह्न गायत्री (३. गायत्री)',
        pb: 'ਮਧਿਆਹਨ ਗਾਇਤਰੀ (੩. ਗਾਇਤਰੀ)',
        en: 'Madhyahn Gayatri (3. Gayatri)',
      },
      subtitle: {
        hi: 'दोपहर के पावन स्मरण हेतु अचिन्त पुरुष की मध्याह्न गायत्री का पाठ करें।',
        pb: 'ਦੁਪਹਿਰ ਦੇ ਪਵਿੱਤਰ ਸਿਮਰਨ ਲਈ ਮਧਿਆਹਨ ਗਾਇਤਰੀ ਦਾ ਪਾਠ ਕਰੋ।',
        en: 'Recite Madhyahn Gayatri for serene midday contemplation and remembrance.',
      },
      isPurnimaToday: purnimaInfo.isPurnima,
      purnimaTitle: purnimaInfo.label,
    };
  }

  // Evening / Night: 16:00 (960) to 03:59 (239)
  return {
    prahar: 'evening',
    primaryCategoryId: 'sandhya-path',
    primarySectionId: 'sandhya-aarambh-vandana',
    badge: {
      hi: 'संध्या बेला • सुझायित पाठ',
      pb: 'ਸੰਧਿਆ ਵੇਲਾ • ਸੁਝਾਇਆ ਪਾਠ',
      en: 'Evening Hour • Recommended',
    },
    title: {
      hi: '२. मूल संध्या पाठ',
      pb: '੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ',
      en: '2. Mool Sandhya (Evening) Path',
    },
    subtitle: {
      hi: 'सायंकालीन शांति व सतगुरु चरण ध्यान हेतु आरंभ वंदना से मूल संध्या पाठ प्रारंभ करें।',
      pb: 'ਸ਼ਾਮ ਵੇਲੇ ਦੀ ਸ਼ਾਂਤੀ ਤੇ ਸਤਿਗੁਰੂ ਧਿਆਨ ਲਈ ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਆਰੰਭ ਕਰੋ।',
      en: 'Observe evening twilight devotion with the complete Mool Sandhya Path.',
    },
    isPurnimaToday: purnimaInfo.isPurnima,
    purnimaTitle: purnimaInfo.label,
  };
}

/**
 * Strict Multilingual Conditional Resolvers for Nitnem Gutka Index:
 * - If user language is Punjabi/Gurmukhi ('pb'), render Punjabi title.
 * - If user language is English ('en'), render English title.
 * - Otherwise (Hindi 'hi', or other), render Hindi title.
 */
export function getLocalizedBookTitle(language: Language): string {
  if (language === 'pb') {
    return MASTER_NITNEM_INDEX.book_title_punjabi;
  }
  if (language === 'en') {
    return MASTER_NITNEM_INDEX.book_title_english || 'Satguru Kabir Saheb Nitnem Gutka Saheb';
  }
  return MASTER_NITNEM_INDEX.book_title_hindi;
}

export function getLocalizedChapterTitle(section: GranthSuchiSection, language: Language): string {
  if (language === 'pb') {
    return section.punjabi_title;
  }
  if (language === 'en') {
    return section.english_title || section.hindi_title;
  }
  return section.hindi_title;
}

export function getLocalizedSubChapterTitle(subChapter: SubChapterIndexItem, language: Language): string {
  if (language === 'pb') {
    return subChapter.punjabi;
  }
  if (language === 'en') {
    return subChapter.english || subChapter.hindi;
  }
  return subChapter.hindi;
}

/**
 * Maps a SubChapter ID or section_id to the appropriate Nitnem section ID
 */
export function resolveNitnemSectionId(subChapter: SubChapterIndexItem, parentSection: GranthSuchiSection): string {
  if (subChapter.section_id) {
    const sid = subChapter.section_id;
    if (sid.includes('gyan-gudri') || sid.includes('gyan-guddi')) {
      return sid.replace('gyan-gudri', 'gyan-gudadi').replace('gyan-guddi', 'gyan-gudadi');
    }
    return sid;
  }
  // Check if title mentions Gyan Guddi/Gudri
  if (subChapter.hindi && (subChapter.hindi.includes('गुदड़ी') || subChapter.hindi.includes('गुदरी'))) {
    return parentSection.major_category_id === 'sandhya-path' ? 'sandhya-gyan-gudadi' : 'prabhat-gyan-gudadi';
  }
  // Default fallbacks based on major category
  switch (parentSection.major_category_id) {
    case 'prabhat-path':
      return 'prabhat-aarambh-vandana';
    case 'sandhya-path':
      return 'sandhya-aarambh-vandana';
    case 'gayatri':
      return 'gayatri-adi';
    case 'poonam-mahatmya':
      return 'poonam-vandana';
    case 'chalisa':
      return 'chalisa-vandana';
    case 'barahmasi':
      return 'barahmasi-path';
    case 'teesa-yantra':
      return 'teesa-yantra-path';
    default:
      return 'prabhat-aarambh-vandana';
  }
}
