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
  'prabhat-path': [
    { number: '1', hindi: 'आरंभ वंदना', punjabi: 'ਆਰੰਭ ਵੰਦਨਾ', english: 'Aarambh Vandana', sectionId: 'prabhat-aarambh-vandana' },
    { number: '2', hindi: 'मंगलाचरण', punjabi: 'ਮੰਗਲਾਚਰਨ', english: 'Mangalacharan', sectionId: 'prabhat-mangalacharan' },
    {
      number: '3',
      hindi: 'गुरू महिमा पाठ',
      punjabi: 'ਗੁਰੂ ਮਹਿਮਾ ਪਾਠ',
      english: 'Guru Mahima Path',
      sectionId: 'prabhat-guru-mahima-1',
      children: [
        { id: '1_3', section_id: 'prabhat-guru-mahima-1', hindi: 'अथ श्री गुरू महिमा - १', punjabi: 'ਅਥ ਸ਼੍ਰੀ ਗੁਰੂ ਮਹਿਮਾ - ੧', english: 'Ath Shri Guru Mahima - 1' },
        { id: '1_4', section_id: 'prabhat-guru-mahima-2', hindi: 'अथ श्री गुरू महिमा - २', punjabi: 'ਅਥ ਸ਼੍ਰੀ ਗੁਰੂ ਮਹਿਮਾ - ੨', english: 'Ath Shri Guru Mahima - 2' },
        { id: '1_5', section_id: 'prabhat-guru-shatak-saar', hindi: 'अथ श्री गुरू शतक सार', punjabi: 'ਅਥ ਸ਼੍ਰੀ ਗੁਰੂ ਸ਼ਤਕ ਸਾਰ', english: 'Ath Shri Guru Shatak Saar' },
      ],
    },
    { number: '4', hindi: 'प्रभात संध्या साखी', punjabi: 'ਪ੍ਰਭਾਤ ਸੰਧਿਆ ਸਾਖੀ', english: 'Prabhat Sandhya Sakhi', sectionId: 'prabhat-sandhya-sakhi' },
    { number: '5', hindi: 'ज्ञान गुदड़ी', punjabi: 'ਗਿਆਨ ਗੁਦੜੀ', english: 'Gyan Gudadi', sectionId: 'prabhat-gyan-gudadi' },
    { number: '6', hindi: 'धनाक्षरी छन्द', punjabi: 'ਧਨਾਖਸ਼ਰੀ ਛੰਦ', english: 'Dhanakshari Chhand', sectionId: 'prabhat-dhanakshari' },
    { number: '7', hindi: 'अर्जीनामा', punjabi: 'ਅਰਜ਼ੀਨਾਮਾ', english: 'Arjinama', sectionId: 'prabhat-arjinama' },
    {
      number: '8',
      hindi: 'आरती',
      punjabi: 'ਆਰਤੀ',
      english: 'Aarti',
      sectionId: 'prabhat-aarti-1',
      children: [
        { id: '1_10', section_id: 'prabhat-aarti-1', hindi: 'आरती - १', punjabi: 'ਆਰਤੀ - ੧', english: 'Aarti - 1' },
        { id: '1_11', section_id: 'prabhat-aarti-2', hindi: 'आरती - २', punjabi: 'ਆਰਤੀ - ੨', english: 'Aarti - 2' },
        { id: '1_12', section_id: 'prabhat-aarti-3', hindi: 'आरती - ३', punjabi: 'ਆਰਤੀ - ੩', english: 'Aarti - 3' },
        { id: '1_13', section_id: 'prabhat-aarti-4', hindi: 'आरती - ४', punjabi: 'ਆਰਤੀ - ੪', english: 'Aarti - 4' },
      ],
    },
    {
      number: '9',
      hindi: 'विनती',
      punjabi: 'ਵਿਨਤੀ',
      english: 'Vinati',
      sectionId: 'prabhat-vinati-1',
      children: [
        { id: '1_14', section_id: 'prabhat-vinati-1', hindi: 'विनती - १', punjabi: 'ਵਿਨਤੀ - ੧', english: 'Vinati - 1' },
        { id: '1_15', section_id: 'prabhat-vinati-2', hindi: 'विनती - २', punjabi: 'ਵਿਨਤੀ - ੨', english: 'Vinati - 2' },
      ],
    },
    { number: '10', hindi: 'प्रातः सुमिरन आरती', punjabi: 'ਪ੍ਰਾਤਹ ਸੁਮਿਰਨ ਆਰਤੀ', english: 'Pratah Sumiran Aarti', sectionId: 'prabhat-pratah-sumiran-aarti' },
    { number: '11', hindi: 'श्लोक ध्यानं', punjabi: 'ਸ਼ਲੋਕ ਧਿਆਨੰ', english: 'Shlok Dhyanam', sectionId: 'prabhat-shlok-dhyanam' },
    { number: '12', hindi: 'विनती', punjabi: 'ਵਿਨਤੀ', english: 'Vinati', sectionId: 'prabhat-vinati' },
    { number: '13', hindi: 'समापन वंदना', punjabi: 'ਸਮਾਪਨ ਵੰਦਨਾ', english: 'Samapan Vandana', sectionId: 'prabhat-samapan-vandana' },
  ],
  'sandhya-path': [
    { number: '1', hindi: 'आरंभ वंदना', punjabi: 'ਆਰੰਭ ਵੰਦਨਾ', english: 'Aarambh Vandana', sectionId: 'sandhya-aarambh-vandana' },
    { number: '2', hindi: 'मंगलाचरण', punjabi: 'ਮੰਗਲਾਚਰਨ', english: 'Mangalacharan', sectionId: 'sandhya-mangalacharan' },
    {
      number: '3',
      hindi: 'गौड़ी',
      punjabi: 'ਗੌੜੀ',
      english: 'Gauri',
      sectionId: 'sandhya-gauri-1',
      children: [
        { id: '2_3', section_id: 'sandhya-gauri-1', hindi: 'गौड़ी - १', punjabi: 'ਗੌੜੀ - ੧', english: 'Gauri - 1' },
        { id: '2_4', section_id: 'sandhya-gauri-2', hindi: 'गौड़ी - २', punjabi: 'ਗੌੜੀ - ੨', english: 'Gauri - 2' },
        { id: '2_5', section_id: 'sandhya-gauri-3', hindi: 'गौड़ी - ३', punjabi: 'ਗੌੜੀ - ੩', english: 'Gauri - 3' },
        { id: '2_6', section_id: 'sandhya-gauri-4', hindi: 'गौड़ी - ४', punjabi: 'ਗੌੜੀ - ੪', english: 'Gauri - 4' },
        { id: '2_7', section_id: 'sandhya-gauri-5', hindi: 'गौड़ी - ५', punjabi: 'ਗੌੜੀ - ੫', english: 'Gauri - 5' },
      ],
    },
    { number: '4', hindi: 'प्रभात संध्या साखी', punjabi: 'ਪ੍ਰਭਾਤ ਸੰਧਿਆ ਸਾਖੀ', english: 'Prabhat Sandhya Sakhi', sectionId: 'sandhya-prabhat-sandhya-sakhi' },
    { number: '5', hindi: 'सुमिरन संध्या साखी', punjabi: 'ਸੁਮਿਰਨ ਸੰਧਿਆ ਸਾਖੀ', english: 'Sumiran Sandhya Sakhi', sectionId: 'sandhya-sumiran-sandhya-sakhi' },
    { number: '6', hindi: 'ज्ञान स्तोत्र', punjabi: 'ਗਿਆਨ ਸਤੋਤਰ', english: 'Gyan Stotra', sectionId: 'sandhya-gyan-stotra' },
    { number: '7', hindi: 'विज्ञान स्त्रोत', punjabi: 'ਵਿਗਿਆਨ ਸਤਰੋਤ', english: 'Vigyan Stotra', sectionId: 'sandhya-vigyan-stotra' },
    { number: '8', hindi: 'दया सागर स्तुति', punjabi: 'ਦਯਾ ਸਾਗਰ ਸਤੁਤੀ', english: 'Daya Sagar Stuti', sectionId: 'sandhya-dayasagar-stuti' },
    { number: '9', hindi: 'अधिक महिमा', punjabi: 'ਅਧਿਕ ਮਹਿਮਾ', english: 'Adhik Mahima', sectionId: 'sandhya-adhik-mahima' },
    { number: '10', hindi: 'चेतावनी साखी', punjabi: 'ਚੇਤਾਵਨੀ ਸਾਖੀ', english: 'Chetavani Sakhi', sectionId: 'sandhya-chetavani-sakhi' },
    { number: '11', hindi: 'सत का शब्द', punjabi: 'ਸਤ ਕਾ ਸ਼ਬਦ', english: 'Sat Ka Shabad', sectionId: 'sandhya-sat-ka-shabad' },
    { number: '12', hindi: 'ज्ञान गुदड़ी', punjabi: 'ਗਿਆਨ ਗੁਦੜੀ', english: 'Gyan Gudadi', sectionId: 'sandhya-gyan-gudadi' },
    { number: '13', hindi: 'अर्जीनामा', punjabi: 'ਅਰਜ਼ੀਨਾਮਾ', english: 'Arjinama', sectionId: 'sandhya-arjinama' },
    {
      number: '14',
      hindi: 'अष्टक',
      punjabi: 'ਅਸ਼ਟਕ',
      english: 'Ashtak',
      sectionId: 'sandhya-ashtak-1',
      children: [
        { id: '2_18', section_id: 'sandhya-ashtak-1', hindi: 'अष्टक - १', punjabi: 'ਅਸ਼ਟਕ - ੧', english: 'Ashtak - 1' },
        { id: '2_19', section_id: 'sandhya-ashtak-2', hindi: 'अष्टक - २ (त्रिभंगी छन्द)', punjabi: 'ਅਸ਼ਟਕ - ੨ (ਤ੍ਰਿਭੰਗੀ ਛੰਦ)', english: 'Ashtak - 2 (Tribhangi Chhand)' },
        { id: '2_20', section_id: 'sandhya-ashtak-3', hindi: 'अष्टक - ३', punjabi: 'ਅਸ਼ਟਕ - ੩', english: 'Ashtak - 3' },
      ],
    },
    { number: '15', hindi: 'धनाक्षरी छन्द', punjabi: 'ਧਨਾਖਸ਼ਰੀ ਛੰਦ', english: 'Dhanakshari Chhand', sectionId: 'sandhya-dhanakshari' },
    { number: '16', hindi: 'अर्जीनामा', punjabi: 'ਅਰਜ਼ੀਨਾਮਾ', english: 'Arjinama (Reprise)', sectionId: 'sandhya-arjinama-2' },
    {
      number: '17',
      hindi: 'आरती',
      punjabi: 'ਆਰਤੀ',
      english: 'Aarti',
      sectionId: 'sandhya-aarti-1',
      children: [
        { id: '2_23', section_id: 'sandhya-aarti-1', hindi: 'आरती - १', punjabi: 'ਆਰਤੀ - ੧', english: 'Aarti - 1' },
        { id: '2_24', section_id: 'sandhya-aarti-2', hindi: 'आरती - २', punjabi: 'ਆਰਤੀ - ੨', english: 'Aarti - 2' },
        { id: '2_25', section_id: 'sandhya-aarti-3', hindi: 'आरती - ३', punjabi: 'ਆਰਤੀ - ੩', english: 'Aarti - 3' },
        { id: '2_26', section_id: 'sandhya-aarti-4', hindi: 'आरती - ४', punjabi: 'ਆਰਤੀ - ੪', english: 'Aarti - 4' },
      ],
    },
    {
      number: '18',
      hindi: 'विनती',
      punjabi: 'ਵਿਨਤੀ',
      english: 'Vinati',
      sectionId: 'sandhya-vinati-1',
      children: [
        { id: '2_27', section_id: 'sandhya-vinati-1', hindi: 'विनती - १', punjabi: 'ਵਿਨਤੀ - ੧', english: 'Vinati - 1' },
        { id: '2_28', section_id: 'sandhya-vinati-2', hindi: 'विनती - २', punjabi: 'ਵਿਨਤੀ - ੨', english: 'Vinati - 2' },
      ],
    },
    { number: '19', hindi: 'संध्या सुमिरन आरती', punjabi: 'ਸੰਧਿਆ ਸੁਮਿਰਨ ਆਰਤੀ', english: 'Sandhya Sumiran Aarti', sectionId: 'sandhya-sandhya-sumiran-aarti' },
    { number: '20', hindi: 'श्लोक ध्यानं', punjabi: 'ਸ਼ਲੋਕ ਧਿਆਨੰ', english: 'Shlok Dhyanam', sectionId: 'sandhya-shlok-dhyanam' },
    { number: '21', hindi: 'विनती', punjabi: 'ਵਿਨਤੀ', english: 'Vinati', sectionId: 'sandhya-vinati' },
    { number: '22', hindi: 'समापन वंदना', punjabi: 'ਸਮਾਪਨ ਵੰਦਨਾ', english: 'Samapan Vandana', sectionId: 'sandhya-samapan-vandana' },
  ],
  'gayatri': [
    { number: '1', hindi: 'आदि गायत्री', punjabi: 'ਆਦਿ ਗਾਇਤਰੀ', english: 'Aadi Gayatri', sectionId: 'gayatri-adi' },
    { number: '2', hindi: 'प्रभात गायत्री', punjabi: 'ਪ੍ਰਭਾਤ ਗਾਇਤਰੀ', english: 'Prabhat Gayatri', sectionId: 'gayatri-prabhat' },
    { number: '3', hindi: 'मध्याह्न गायत्री', punjabi: 'ਮਧਿਆਹਨ ਗਾਇਤਰੀ', english: 'Madhyahn Gayatri', sectionId: 'gayatri-madhyahan' },
    { number: '4', hindi: 'संध्या गायत्री', punjabi: 'ਸੰਧਿਆ ਗਾਇਤ੍ਰੀ', english: 'Sandhya Gayatri', sectionId: 'gayatri-sandhya' },
  ],
  'poonam-mahatmya': [
    { number: '1', hindi: 'वंदना', punjabi: 'ਵੰਦਨਾ', english: 'Vandana', sectionId: 'poonam-vandana' },
    { number: '2', hindi: 'अथ वृहत्त पूनो महात्म्य', punjabi: 'ਅਥ ਵ੍ਰਿਹਤ ਪੂਨੋ ਮਹਾਤਮਯ', english: 'Ath Vrihat Poono Mahatmya', sectionId: 'poonam-vrihat-mahatmya' },
    { number: '3', hindi: 'कहरा', punjabi: 'ਕਹਰਾ', english: 'Kahra', sectionId: 'poonam-kahra' },
    { number: '4', hindi: 'मंगल', punjabi: 'ਮੰਗਲ', english: 'Mangal', sectionId: 'poonam-mangal' },
    { number: '5', hindi: 'अथ लघु पूनो महात्म्य', punjabi: 'ਅਥ ਲਘੂ ਪੂਨੋ ਮਹਾਤਮਯ', english: 'Ath Laghu Poono Mahatmya', sectionId: 'poonam-laghu-mahatmya' },
    { number: '6', hindi: 'अथ पूनम साधन का सुमिरण', punjabi: 'ਅਥ ਪੂਨਮ ਸਾਧਨ ਕਾ ਸੁਮਿਰਨ', english: 'Ath Poonam Sadhan Ka Sumiran', sectionId: 'poonam-sadhan-sumiran' },
    { number: '7', hindi: 'अथ बरसाइत महात्म्य', punjabi: 'ਅਥ ਬਰਸਾਇਤ ਮਹਾਤਮਯ', english: 'Ath Barsait Mahatmya', sectionId: 'poonam-barsait-mahatmya' },
  ],
  'chalisa': [
    { number: '1', hindi: 'वंदना', punjabi: 'ਵੰਦਨਾ', english: 'Vandana', sectionId: 'chalisa-vandana' },
    { number: '2', hindi: 'सतगुरु कबीर चालीसा पाठ', punjabi: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ', english: 'Satguru Kabir Chalisa Path', sectionId: 'chalisa-path' },
  ],
  'barahmasi': [
    { number: '6', hindi: 'बारहमासी पाठ', punjabi: 'ਬਾਰਹਮਾਸੀ ਪਾਠ', english: 'Barahmasi Path', sectionId: 'barahmasi-path' },
  ],
  'teesa-yantra': [
    { number: '7', hindi: 'तीसा यंत्र', punjabi: 'ਤੀਸਾ ਯੰਤਰ', english: 'Teesa Yantra', sectionId: 'teesa-yantra-path' },
  ],
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
