import { NitnemSection } from '../../types';
import { POONAM_VERSES_PART_1 } from './poonamVersesPart1';
import { POONAM_VERSES_PART_2 } from './poonamVersesPart2';
import { POONAM_KAHRA_VERSES, POONAM_MANGAL_VERSES } from './poonamKahraMangalVerses';
import { POONAM_LAGHU_VERSES } from './poonamLaghuVerses';
import { POONAM_BARSAIT_VERSES } from './poonamBarsaitVerses';

const sadhanSplitIndex = POONAM_LAGHU_VERSES.findIndex(
  (v) => v.lines?.hi?.[0]?.includes('अथ पूनम साधन का सुमिरण')
);
const laghuOnlyVerses =
  sadhanSplitIndex > 0 ? POONAM_LAGHU_VERSES.slice(0, sadhanSplitIndex) : POONAM_LAGHU_VERSES;
const sadhanSumiranVerses =
  sadhanSplitIndex > 0 ? POONAM_LAGHU_VERSES.slice(sadhanSplitIndex) : [];

export const POONAM_MAHATMYA_SECTIONS: NitnemSection[] = [
  {
    id: "poonam-vandana",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "वंदना",
      pb: "ਵੰਦਨਾ",
      en: "Vandana"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। सतगुरु कबीर साहेब एवं ब्यालीस वंश गुरु वंदना",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਤੇ ਬਿਆਲੀਸ ਵੰਸ਼ ਗੁਰੂ ਵੰਦਨਾ",
      en: "Sacred Salutation to Satguru Kabir Saheb & 42 Vansh Lineage"
    },
    iconName: "Moon",
    estimatedMinutes: 3,
    totalVerses: 1,
    verses: [POONAM_VERSES_PART_1[0]]
  },
  {
    id: "poonam-vrihat-mahatmya",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "अथ वृहत्त पूनो महात्म्य",
      pb: "ਅਥ ਵ੍ਰਿਹਤ ਪੂਨੋ ਮਹਾਤਮਯ",
      en: "Ath Vrihat Poono Mahatmya"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। पूर्णिमा व्रत महात्म्य, सत्य कबीर अमर ज्ञान एवं विधि",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਪੂਰਨਮਾਸ਼ੀ ਦੀ ਪਾਵਨ ਮਹਿਮਾ ਅਤੇ ਗੁਰੂ ਵੰਦਨਾ",
      en: "The Grand Discourse of the Sacred Full Moon Vow"
    },
    iconName: "Moon",
    estimatedMinutes: 25,
    totalVerses: POONAM_VERSES_PART_1.slice(1).length + POONAM_VERSES_PART_2.length,
    verses: [
      ...POONAM_VERSES_PART_1.slice(1),
      ...POONAM_VERSES_PART_2
    ]
  },
  {
    id: "poonam-kahra",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "कहरा",
      pb: "ਕਹਰਾ",
      en: "Kahra"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। पूनो कहरा छंद पावन गायन",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਪੂਨੋ ਕਹਰਾ ਛੰਦ ਪਾਵਨ ਗਾਇਨ",
      en: "Sacred Kahra Hymns of Full Moon"
    },
    iconName: "Music",
    estimatedMinutes: 5,
    totalVerses: POONAM_KAHRA_VERSES.length,
    verses: [...POONAM_KAHRA_VERSES]
  },
  {
    id: "poonam-mangal",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "मंगल",
      pb: "ਮੰਗਲ",
      en: "Mangal"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। पूनो आनंद मंगल गान",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਪੂਨੋ ਆਨੰਦ ਮੰਗਲ ਗੀਤ",
      en: "Auspicious Mangal Hymns of Full Moon"
    },
    iconName: "Sparkles",
    estimatedMinutes: 5,
    totalVerses: POONAM_MANGAL_VERSES.length,
    verses: [...POONAM_MANGAL_VERSES]
  },
  {
    id: "poonam-laghu-mahatmya",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "अथ लघु पूनो महात्म्य",
      pb: "ਅਥ ਲਘੂ ਪੂਨੋ ਮਹਾਤਮਯ",
      en: "Ath Laghu Poono Mahatmya"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। धर्मदास-सतगुरु संवाद एवं संक्षिप्त पूनो महात्म्य",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਧਰਮਦਾਸ-ਸਤਿਗੁਰੂ ਸੰਵਾਦ ਅਤੇ ਲਘੂ ਪੂਨੋ ਮਹਾਤਮਯ",
      en: "Concise Full Moon Discourse (Dharmadas & Satguru Dialogue)"
    },
    iconName: "Scroll",
    estimatedMinutes: 12,
    totalVerses: laghuOnlyVerses.length,
    verses: [...laghuOnlyVerses]
  },
  {
    id: "poonam-sadhan-sumiran",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "अथ पूनम साधन का सुमिरण",
      pb: "ਅਥ ਪੂਨਮ ਸਾਧਨ ਕਾ ਸੁਮਿਰਨ",
      en: "Ath Poonam Sadhan Ka Sumiran"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। पूनम साधन विधि एवं नाम सुमिरण",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਪੂਨਮ ਸਾਧਨਾ ਵਿਧੀ ਅਤੇ ਨਾਮ ਸਿਮਰਨ",
      en: "Method of Full Moon Spiritual Practice & Remembrance"
    },
    iconName: "Scroll",
    estimatedMinutes: 8,
    totalVerses: sadhanSumiranVerses.length,
    verses: [...sadhanSumiranVerses]
  },
  {
    id: "poonam-barsait-mahatmya",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Poonam Mahatmya Path"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "अथ बरसाइत महात्म्य",
      pb: "ਅਥ ਬਰਸਾਇਤ ਮਹਾਤਮਯ",
      en: "Ath Barsait Mahatmya"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। वार्षिक ज्येष्ठ पूर्णिमा (बरसाइत) महात्म्य",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਸਲਾਨਾ ਜੇਠ ਪੂਰਨਮਾਸ਼ੀ (ਬਰਸਾਇਤ) ਮਹਾਤਮਯ",
      en: "Annual Jyeshtha Purnima Barsait Discourse"
    },
    iconName: "Scroll",
    estimatedMinutes: 12,
    totalVerses: POONAM_BARSAIT_VERSES.length,
    verses: [...POONAM_BARSAIT_VERSES]
  }
];
