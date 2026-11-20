import { NitnemSection } from '../types';
import masterIndexJson from './nitnemMasterIndex.json';
import { offlineScriptureCache } from '../services/offlineScriptureCache';

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

function createPlaceholderSection(
  group: (typeof masterIndexJson.granth_suchi)[number],
  sub: (typeof masterIndexJson.granth_suchi)[number]['sub_chapters'][number]
): NitnemSection {
  const sectionId = sub.section_id || `${group.section_id}_${sub.id}`;
  const englishTitle = (sub as any).english || sub.hindi;
  const englishGroupTitle = (group as any).english_title || group.hindi_title;

  return {
    id: sectionId,
    majorCategoryId: group.major_category_id as any,
    majorCategoryTitle: {
      hi: group.hindi_title,
      pb: group.punjabi_title,
      en: englishGroupTitle,
    },
    subGroup: group.hindi_title,
    title: {
      hi: sub.hindi,
      pb: sub.punjabi,
      en: englishTitle,
    },
    subtitle: {
      hi: `${sub.hindi} (पावन पाठ)`,
      pb: `${sub.punjabi} (ਪਾਵਨ ਪਾਠ)`,
      en: `${englishTitle}`,
    },
    iconName: 'Scroll',
    estimatedMinutes: 3,
    totalVerses: 1,
    verses: [
      {
        id: `${sectionId}-placeholder-1`,
        type: 'doha',
        lines: {
          hi: ['।। सत्यनाम ।।', `।। ${sub.hindi} ।।`],
          pb: ['।। ਸਤ੍ਯਨਾਮ ।।', `।। ${sub.punjabi} ।।`],
          en: ['|| Satyanaam ||', `|| ${englishTitle} ||`],
        },
        bhavarth: {
          hi: `${sub.hindi} का प्रामाणिक पाठ लोड हो रहा है।`,
          pb: `${sub.punjabi} ਦਾ ਪ੍ਰਮਾਣਿਕ ਪਾਠ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ।`,
          en: `Loading sacred text for ${englishTitle}.`,
        },
      },
    ],
  };
}

/**
 * Lightweight synchronous metadata stubs built purely from nitnemMasterIndex.json (~14 KB).
 * Zero heavy nitnem/*.ts verse files are imported eagerly at boot!
 */
export const NITNEM_SECTION_STUBS: NitnemSection[] = (() => {
  const stubs: NitnemSection[] = [];
  for (const group of masterIndexJson.granth_suchi) {
    for (const sub of group.sub_chapters) {
      stubs.push(createPlaceholderSection(group, sub));
    }
  }
  return stubs;
})();

const loadedCategoryRawCache = new Map<string, NitnemSection[]>();
const resolvedSectionCache = new Map<string, NitnemSection>();
let allLoadedPromise: Promise<NitnemSection[]> | null = null;

function mapIndexGroupSections(rawCollection: NitnemSection[]): NitnemSection[] {
  const sections: NitnemSection[] = [];

  for (const group of masterIndexJson.granth_suchi) {
    for (const sub of group.sub_chapters) {
      const sectionId = sub.section_id || `${group.section_id}_${sub.id}`;

      if (resolvedSectionCache.has(sectionId)) {
        sections.push(resolvedSectionCache.get(sectionId)!);
        continue;
      }

      let actualSection = rawCollection.find(
        (s) =>
          s.id === sectionId ||
          s.id.replace('aadi', 'adi') === sectionId.replace('aadi', 'adi') ||
          s.id.replace('gyaan', 'gyan') === sectionId.replace('gyaan', 'gyan') ||
          s.id.replace(/-/g, '_') === sectionId.replace(/-/g, '_') ||
          s.id.replace('sandhya-sakhi', 'sakhi') === sectionId.replace('sandhya-sakhi', 'sakhi') ||
          (s.title?.hi && sub.hindi && s.title.hi.trim() === sub.hindi.trim())
      );
      if (actualSection) {
        let finalVerses = actualSection.verses;
        if (sectionId === 'gayatri-madhyahan') {
          const extraMadhyan = rawCollection.find((s) => s.id === 'gayatri-madhyan-2');
          if (extraMadhyan && extraMadhyan.verses.length > 0) {
            finalVerses = [...actualSection.verses, ...extraMadhyan.verses];
          }
        }
        const resolved: NitnemSection = {
          ...actualSection,
          id: sectionId,
          verses: finalVerses,
          totalVerses: finalVerses.length,
          majorCategoryId: group.major_category_id as any,
          majorCategoryTitle: {
            hi: group.hindi_title,
            pb: group.punjabi_title,
            en: (group as any).english_title || group.hindi_title,
          },
        };
        resolvedSectionCache.set(sectionId, resolved);
        sections.push(resolved);
      } else {
        sections.push(createPlaceholderSection(group, sub));
      }
    }
  }

  return sections;
}

async function importNitnemGroup(groupKey: 'prabhat' | 'sandhya' | 'gayatri' | 'poonam' | 'chalisa'): Promise<NitnemSection[]> {
  if (loadedCategoryRawCache.has(groupKey)) {
    return loadedCategoryRawCache.get(groupKey)!;
  }

  let data: NitnemSection[] = [];
  switch (groupKey) {
    case 'prabhat': {
      const m = await import('./nitnem/prabhatPath');
      data = m.PRABHAT_PATH_SECTIONS;
      break;
    }
    case 'sandhya': {
      const m = await import('./nitnem/sandhyaPath');
      data = m.SANDHYA_PATH_SECTIONS;
      break;
    }
    case 'gayatri': {
      const m = await import('./nitnem/gayatriPath');
      data = m.GAYATRI_PATH_SECTIONS;
      break;
    }
    case 'poonam': {
      const m = await import('./nitnem/poonamMahatmya');
      data = m.POONAM_MAHATMYA_SECTIONS;
      break;
    }
    case 'chalisa': {
      const m = await import('./nitnem/chalisaBarahmasiTeesa');
      data = m.CHALISA_BARAHMASI_TEESA_SECTIONS;
      break;
    }
  }

  loadedCategoryRawCache.set(groupKey, data);
  return data;
}

function getGroupKeysForCategory(categoryId: string): Array<'prabhat' | 'sandhya' | 'gayatri' | 'poonam' | 'chalisa'> {
  switch (categoryId) {
    case 'prabhat-path':
      return ['prabhat'];
    case 'sandhya-path':
      return ['sandhya'];
    case 'gayatri':
      return ['gayatri'];
    case 'poonam-mahatmya':
      return ['poonam'];
    case 'chalisa':
    case 'barahmasi':
    case 'teesa-yantra':
      return ['chalisa'];
    default:
      return ['prabhat', 'sandhya', 'gayatri', 'poonam', 'chalisa'];
  }
}

/**
 * Dynamically loads ONLY the Nitnem category opened by the user and caches it cleanly.
 */
export async function loadNitnemCategorySections(categoryId: string): Promise<NitnemSection[]> {
  const cacheKey = `nitnem-cat:${categoryId}`;
  const groupKeys = getGroupKeysForCategory(categoryId);
  const loadedArrays = await Promise.all(groupKeys.map((k) => importNitnemGroup(k)));
  const combinedRaw = loadedArrays.flat();
  const mappedAll = mapIndexGroupSections(combinedRaw);
  const categorySections = categoryId === 'all'
    ? mappedAll
    : mappedAll.filter((s) => s.majorCategoryId === categoryId);

  offlineScriptureCache
    .cacheOpenedChapter(cacheKey, categorySections.slice(0, 15), `Nitnem: ${categoryId}`)
    .catch(() => {});

  return mappedAll;
}

/**
 * Dynamically loads all 5 Nitnem category bundles when full search/continuous navigation is needed.
 */
export async function loadAllNitnemSections(): Promise<NitnemSection[]> {
  if (!allLoadedPromise) {
    allLoadedPromise = (async () => {
      const [prabhat, sandhya, gayatri, poonam, chalisa] = await Promise.all([
        importNitnemGroup('prabhat'),
        importNitnemGroup('sandhya'),
        importNitnemGroup('gayatri'),
        importNitnemGroup('poonam'),
        importNitnemGroup('chalisa'),
      ]);
      return mapIndexGroupSections([...prabhat, ...sandhya, ...gayatri, ...poonam, ...chalisa]);
    })();
  }
  return allLoadedPromise;
}

/**
 * Dynamically loads the category owning a given sectionId and returns the section.
 */
export async function loadNitnemSectionById(id: string): Promise<NitnemSection | undefined> {
  if (resolvedSectionCache.has(id)) {
    return resolvedSectionCache.get(id);
  }
  const stub = NITNEM_SECTION_STUBS.find((s) => s.id === id);
  const allMapped = await loadNitnemCategorySections(stub?.majorCategoryId || 'all');
  return allMapped.find((s) => s.id === id);
}

export function getNitnemSectionById(id: string): NitnemSection | undefined {
  return resolvedSectionCache.get(id) || NITNEM_SECTION_STUBS.find((s) => s.id === id);
}
