import { NitnemSection } from '../types';
import masterIndexJson from './nitnemMasterIndex.json';
import { PRABHAT_PATH_SECTIONS } from './nitnem/prabhatPath';
import { SANDHYA_PATH_SECTIONS } from './nitnem/sandhyaPath';
import { GAYATRI_PATH_SECTIONS } from './nitnem/gayatriPath';
import { POONAM_MAHATMYA_SECTIONS } from './nitnem/poonamMahatmya';
import { CHALISA_BARAHMASI_TEESA_SECTIONS } from './nitnem/chalisaBarahmasiTeesa';

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

const ACTUAL_DATA_COLLECTION: NitnemSection[] = [
  ...PRABHAT_PATH_SECTIONS,
  ...SANDHYA_PATH_SECTIONS,
  ...GAYATRI_PATH_SECTIONS,
  ...POONAM_MAHATMYA_SECTIONS,
  ...CHALISA_BARAHMASI_TEESA_SECTIONS,
];

/**
 * Generate comprehensive list of NitnemSection items matching the 65 sub-chapters
 * in Damakheda Kabir Panth Nitnem Master Index.
 * Use actual data if available, otherwise return placeholders.
 */
function buildNitnemSections(): NitnemSection[] {
  const sections: NitnemSection[] = [];

  for (const group of masterIndexJson.granth_suchi) {
    for (const sub of group.sub_chapters) {
      const sectionId = sub.section_id || `${group.section_id}_${sub.id}`;
      
      // Try to find actual data first (direct match or normalized alias)
      let actualSection = ACTUAL_DATA_COLLECTION.find(s => 
        s.id === sectionId || 
        s.id.replace('gyaan', 'gyan') === sectionId.replace('gyaan', 'gyan') ||
        s.id.replace(/-/g, '_') === sectionId.replace(/-/g, '_') ||
        s.id.replace('sandhya-sakhi', 'sakhi') === sectionId.replace('sandhya-sakhi', 'sakhi') ||
        (s.title?.hi && sub.hindi && s.title.hi.trim() === sub.hindi.trim())
      );

      // If not directly found in actual collection, check if a corresponding section exists
      // e.g. Sandhya Aarti 1-4, Vinati 1-2, Dhanakshari, Sumiran Aarti, Shlok Dhyanam, Vinati, Samapan Vandana
      if (!actualSection && sectionId.startsWith('sandhya-')) {
        const prabhatEquivalentId = sectionId.replace('sandhya-', 'prabhat-').replace(/-2$/, '');
        const fallbackMatch = ACTUAL_DATA_COLLECTION.find(s => 
          s.id === prabhatEquivalentId || 
          s.id === sectionId.replace(/-2$/, '') ||
          s.id.replace('gyaan', 'gyan') === prabhatEquivalentId.replace('gyaan', 'gyan')
        );
        if (fallbackMatch) {
          actualSection = {
            ...fallbackMatch,
            id: sectionId,
            majorCategoryId: 'sandhya-path',
            majorCategoryTitle: {
              hi: group.hindi_title,
              pb: group.punjabi_title,
              en: (group as any).english_title || group.hindi_title,
            }
          };
        }
      }

      if (actualSection) {
        sections.push({
          ...actualSection,
          id: sectionId,
          majorCategoryId: group.major_category_id as any,
          majorCategoryTitle: {
            hi: group.hindi_title,
            pb: group.punjabi_title,
            en: (group as any).english_title || group.hindi_title,
          },
        });
        continue;
      }

      const englishTitle = (sub as any).english || sub.hindi;
      const englishGroupTitle = (group as any).english_title || group.hindi_title;

      sections.push({
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
          hi: `${sub.hindi} (पावन पाठ प्रविष्टि हेतु सुरक्षित)`,
          pb: `${sub.punjabi} (ਪਾਵਨ ਪਾਠ ਪ੍ਰਵਿਸ਼ਟੀ ਲਈ ਤਿਆਰ)`,
          en: `${englishTitle} (Ready for sacred recitation text)`,
        },
        iconName: 'Scroll',
        estimatedMinutes: 3,
        totalVerses: 1,
        verses: [
          {
            id: `${sectionId}-placeholder-1`,
            type: 'doha',
            lines: {
              hi: [
                `।। सत्यनाम ।।`,
                `।। ${sub.hindi} ।।`,
                `[ इस शीर्षक का पावन पाठ यहाँ प्रविष्ट किया जाएगा ]`
              ],
              pb: [
                `।। ਸਤ੍ਯਨਾਮ ।।`,
                `।। ${sub.punjabi} ।।`,
                `[ ਇਸ ਸਿਰਲੇਖ ਦਾ ਪਾਵਨ ਪਾਠ ਇੱਥੇ ਦਰਜ ਕੀਤਾ ਜਾਵੇਗਾ ]`
              ],
              en: [
                `|| Satyanaam ||`,
                `|| ${englishTitle} ||`,
                `[ Sacred text for this heading will be added here ]`
              ]
            },
            bhavarth: {
              hi: `${sub.hindi} का प्रामाणिक अर्थ एवं भावार्थ यहाँ उपलब्ध होगा।`,
              pb: `${sub.punjabi} ਦਾ ਪ੍ਰਮਾਣਿਕ ਭਾਵਾਰਥ ਇੱਥੇ ਉਪਲਬਧ ਹੋਵੇਗਾ।`,
              en: `Authentic contemplation and meaning for ${englishTitle} will be available here.`
            }
          }
        ]
      });
    }
  }

  return sections;
}

export const NITNEM_SECTIONS: NitnemSection[] = buildNitnemSections();

export function getNitnemSectionById(id: string): NitnemSection | undefined {
  return NITNEM_SECTIONS.find(s => s.id === id);
}
