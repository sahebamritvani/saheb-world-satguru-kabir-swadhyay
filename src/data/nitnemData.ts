import { NitnemSection } from '../types';

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

/**
 * Empty state for Nitnem Gutka Saheb — ready for new authentic paths to be added.
 */
export const NITNEM_SECTION_STUBS: NitnemSection[] = [];

export async function loadNitnemCategorySections(_categoryId: string): Promise<NitnemSection[]> {
  return [];
}

export async function loadAllNitnemSections(): Promise<NitnemSection[]> {
  return [];
}

export async function loadNitnemSectionById(_id: string): Promise<NitnemSection | undefined> {
  return undefined;
}

export function getNitnemSectionById(_id: string): NitnemSection | undefined {
  return undefined;
}
