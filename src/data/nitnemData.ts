import { NitnemSection } from '../types';
import { MASTER_NITNEM_INDEX } from './nitnemMasterIndex';

export interface MajorGranthCategory {
  id: string;
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  iconName: string;
}

export const MAJOR_GRANTH_CATEGORIES: MajorGranthCategory[] = [
  {
    id: 'prabhat-path',
    title: {
      hi: '१. प्रभात (प्रातः) पाठ',
      pb: '੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ',
      en: '1. Prabhat (Morning) Path',
    },
    iconName: 'Sun',
  },
  {
    id: 'sandhya-path',
    title: {
      hi: '२. मूल संध्या पाठ',
      pb: '੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ',
      en: '2. Mool Sandhya (Evening) Path',
    },
    iconName: 'Moon',
  },
  {
    id: 'gayatri',
    title: {
      hi: '३. गायत्री',
      pb: '੩. ਗਾਇਤਰੀ',
      en: '3. Gayatri Path',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'poonam-mahatmya',
    title: {
      hi: '४. पूनो महात्म्य पाठ',
      pb: '੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ',
      en: '4. Poonam Mahatmya Path',
    },
    iconName: 'Moon',
  },
  {
    id: 'chalisa',
    title: {
      hi: '५. सतगुरु कबीर चालीसा पाठ',
      pb: '੫. ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ',
      en: '5. Satguru Kabir Chalisa Path',
    },
    iconName: 'Scroll',
  },
  {
    id: 'barahmasi',
    title: {
      hi: '६. बारहमासी पाठ',
      pb: '੬. ਬਾਰਹਮਾਸੀ ਪਾਠ',
      en: '6. Barahmasi Path',
    },
    iconName: 'Calendar',
  },
  {
    id: 'teesa-yantra',
    title: {
      hi: '७. तीसा यंत्र',
      pb: '੭. ਤੀਸਾ ਯੰਤਰ',
      en: '7. Teesa Yantra',
    },
    iconName: 'Shield',
  },
];

const MAJOR_CAT_MAP = new Map(MAJOR_GRANTH_CATEGORIES.map((c) => [c.id, c]));

/**
 * Complete 7-section Nitnem Gutka Saheb chapter skeleton initialized with
 * empty verse slots (`verses: []`), ready for upcoming authentic Path text.
 */
export const NITNEM_SECTION_STUBS: NitnemSection[] = MASTER_NITNEM_INDEX.granth_suchi.flatMap((granth) => {
  const catMeta = MAJOR_CAT_MAP.get(granth.major_category_id);
  const majorCategoryTitle = catMeta?.title || {
    hi: granth.hindi_title,
    pb: granth.punjabi_title,
    en: granth.english_title || granth.hindi_title,
  };

  return granth.sub_chapters.map((sub) => ({
    id: sub.section_id || sub.id,
    majorCategoryId: granth.major_category_id,
    majorCategoryTitle,
    subGroup: granth.hindi_title,
    title: {
      hi: sub.hindi,
      pb: sub.punjabi,
      en: sub.english || sub.hindi,
    },
    subtitle: {
      hi: 'नए पावन पाठ हेतु आरक्षित रिक्त स्थान',
      pb: 'ਨਵੇਂ ਪਾਵਨ ਪਾਠ ਲਈ ਰਾਖਵੀਂ ਖਾਲੀ ਥਾਂ',
      en: 'Clean space reserved for upcoming sacred Path text',
    },
    iconName: catMeta?.iconName || 'BookOpen',
    estimatedMinutes: 0,
    totalVerses: 0,
    verses: [],
  }));
});

export async function loadNitnemCategorySections(categoryId: string): Promise<NitnemSection[]> {
  if (!categoryId || categoryId === 'all') {
    return NITNEM_SECTION_STUBS;
  }
  return NITNEM_SECTION_STUBS.filter((s) => s.majorCategoryId === categoryId);
}

export async function loadAllNitnemSections(): Promise<NitnemSection[]> {
  return NITNEM_SECTION_STUBS;
}

export async function loadNitnemSectionById(id: string): Promise<NitnemSection | undefined> {
  return getNitnemSectionById(id);
}

export function getNitnemSectionById(id: string): NitnemSection | undefined {
  if (!id) return NITNEM_SECTION_STUBS[0];
  const exact = NITNEM_SECTION_STUBS.find((s) => s.id === id);
  if (exact) return exact;
  const normalized = id.toLowerCase().replace(/[-_]/g, '');
  return NITNEM_SECTION_STUBS.find((s) => s.id.toLowerCase().replace(/[-_]/g, '') === normalized);
}
