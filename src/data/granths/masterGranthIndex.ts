import { MasterGranth, GranthChapter, GranthVerse } from './granthTypes';
import { Sakhi } from '../../types';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';
import { devanagariToGurmukhi } from '../../services/transliteration';
import { offlineScriptureCache } from '../../services/offlineScriptureCache';
import {
  ADMIN_SLOTS_UPDATED_EVENT,
  getInjectedGranthChapters,
  getSlotIdForGranthSlug,
} from '../../services/adminSlotInjectorStore';

function sakhiToGranthVerse(s: Sakhi): GranthVerse {
  return {
    id: s.id,
    type: 'sakhi' as const,
    lines: {
      hi: s.text.hi ? s.text.hi.split('\n') : [''],
      pb: s.text.pb ? s.text.pb.split('\n') : [devanagariToGurmukhi(s.text.hi || '')],
      en: s.text.en ? s.text.en.split('\n') : [s.transliteration || ''],
    },
    shabdarth: s.wordMeanings
      ? {
          hi: s.wordMeanings.hi,
          pb: s.wordMeanings.pb,
          en: s.wordMeanings.en,
        }
      : undefined,
    bhavarth: s.bhavarth
      ? {
          hi: s.bhavarth.hi || '',
          pb: s.bhavarth.pb || devanagariToGurmukhi(s.bhavarth.hi || ''),
          en: s.bhavarth.en || '',
        }
      : undefined,
    contemplation: s.contemplation
      ? {
          hi: s.contemplation.hi || '',
          pb: s.contemplation.pb || devanagariToGurmukhi(s.contemplation.hi || ''),
          en: s.contemplation.en || '',
        }
      : undefined,
    practicalApplication: s.practicalApplication
      ? {
          hi: s.practicalApplication.hi || '',
          pb: s.practicalApplication.pb || devanagariToGurmukhi(s.practicalApplication.hi || ''),
          en: s.practicalApplication.en || '',
        }
      : undefined,
    samarpanPrayer: s.samarpanPrayer
      ? {
          hi: s.samarpanPrayer.hi || '',
          pb: s.samarpanPrayer.pb || devanagariToGurmukhi(s.samarpanPrayer.hi || ''),
          en: s.samarpanPrayer.en || '',
        }
      : undefined,
  };
}

export const SAKHI_SANGRAH_ANG_METADATA = [
  { id: 'ang-1', count: 36, title: { hi: 'गुरु को अंग', pb: 'ਗੁਰੂ ਕੋ ਅੰਗ', en: 'Guru Ko Ang (The Divine Master)' } },
  { id: 'ang-2', count: 22, title: { hi: 'सतगुरु को अंग', pb: 'ਸਤਿਗੁਰੂ ਕੋ ਅੰਗ', en: 'Satguru Ko Ang (The True Master)' } },
  { id: 'ang-3', count: 22, title: { hi: 'गुरु पारख को अंग', pb: 'ਗੁਰੂ ਪਰਖ ਕੋ ਅੰਗ', en: 'Guru Parakh Ko Ang (Recognizing the Master)' } },
  { id: 'ang-4', count: 12, title: { hi: 'गुरु शिष्य हेरा को अंग', pb: 'ਗੁਰੂ ਸਿੱਖ ਹੇਰਾ ਕੋ ਅੰਗ', en: 'Guru Shishya Hera Ko Ang (Disciple Bond)' } },
  { id: 'ang-5', count: 22, title: { hi: 'निगुरा को अंग', pb: 'ਨਿਗੁਰਾ ਕੋ ਅੰਗ', en: 'Nigura Ko Ang (The Masterless)' } },
  { id: 'ang-6', count: 99, title: { hi: 'साधु को अंग', pb: 'ਸਾਧੂ ਕੋ ਅੰਗ', en: 'Sadhu Ko Ang (The Holy Saints)' } },
  { id: 'ang-7', count: 13, title: { hi: 'भेष को अंग', pb: 'ਭੇਖ ਕੋ ਅੰਗ', en: 'Bhesh Ko Ang (Outer Guises)' } },
  { id: 'ang-8', count: 8, title: { hi: 'भीख को अंग', pb: 'ਭੀਖ ਕੋ ਅੰਗ', en: 'Bheekh Ko Ang (Alms & Begging)' } },
  { id: 'ang-9', count: 20, title: { hi: 'संगति को अंग', pb: 'ਸੰਗਤਿ ਕੋ ਅੰਗ', en: 'Sangati Ko Ang (Holy Fellowship)' } },
  { id: 'ang-10', count: 17, title: { hi: 'सेवक को अंग', pb: 'ਸੇਵਕ ਕੋ ਅੰਗ', en: 'Sevak Ko Ang (The Devout Servant)' } },
  { id: 'ang-11', count: 12, title: { hi: 'दासातन को अंग', pb: 'ਦਾਸਾਤਨ ਕੋ ਅੰਗ', en: 'Dasatan Ko Ang (Humility & Servitude)' } },
  { id: 'ang-12', count: 32, title: { hi: 'भक्ति को अंग', pb: 'ਭਗਤੀ ਕੋ ਅੰਗ', en: 'Bhakti Ko Ang (Sacred Devotion)' } },
  { id: 'ang-13', count: 73, title: { hi: 'सुमिरन को अंग', pb: 'ਸਿਮਰਨ ਕੋ ਅੰਗ', en: 'Sumiran Ko Ang (Remembrance of Truth)' } },
  { id: 'ang-14', count: 44, title: { hi: 'प्रेम को अंग', pb: 'ਪ੍ਰੇਮ ਕੋ ਅੰਗ', en: 'Prem Ko Ang (Divine Love)' } },
  { id: 'ang-15', count: 105, title: { hi: 'चितावनी को अंग', pb: 'ਚਿਤਾਵਨੀ ਕੋ ਅੰਗ', en: 'Chitawani Ko Ang (Awakening & Counsel)' } },
  { id: 'ang-16', count: 53, title: { hi: 'उपदेश को अंग', pb: 'ਉਪਦੇਸ਼ ਕੋ ਅੰਗ', en: 'Upadesh Ko Ang (Spiritual Teachings)' } },
  { id: 'ang-17', count: 40, title: { hi: 'शब्द को अंग', pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ', en: 'Shabad Ko Ang (The Primordial Sound)' } },
  { id: 'ang-18', count: 12, title: { hi: 'जीवत मृतक को अंग', pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ', en: 'Jeevat Mritak Ko Ang (Dying to Self)' } },
  { id: 'ang-19', count: 52, title: { hi: 'काल को अंग', pb: 'ਕਾਲ ਕੋ ਅੰਗ', en: 'Kaal Ko Ang (Time, Karma & Death)' } },
  { id: 'ang-20', count: 5, title: { hi: 'स्वार्थ को अंग', pb: 'ਸੁਆਰਥ ਕੋ ਅੰਗ', en: 'Swarth Ko Ang (Selfish Illusion)' } },
  { id: 'ang-21', count: 8, title: { hi: 'परमार्थ को अंग', pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ', en: 'Parmarth Ko Ang (Altruism & Highest Good)' } },
  { id: 'ang-22', count: 59, title: { hi: 'मन को अंग', pb: 'ਮਨ ਕੋ ਅੰਗ', en: 'Man Ko Ang (Conquering the Mind)' } },
  { id: 'ang-23', count: 51, title: { hi: 'माया को अंग', pb: 'ਮਾਇਆ ਕੋ ਅੰਗ', en: 'Maya Ko Ang (The Cosmic Illusion)' } },
  { id: 'ang-24', count: 12, title: { hi: 'मोह को अंग', pb: 'ਮੋਹ ਕੋ ਅੰਗ', en: 'Moh Ko Ang (Worldly Attachments)' } },
  { id: 'ang-25', count: 17, title: { hi: 'काम को अंग', pb: 'ਕਾਮ ਕੋ ਅੰਗ', en: 'Kaam Ko Ang (Desire & Passion)' } },
  { id: 'ang-26', count: 6, title: { hi: 'क्रोध को अंग', pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ', en: 'Krodh Ko Ang (Overcoming Anger)' } },
  { id: 'ang-27', count: 5, title: { hi: 'लोभ को अंग', pb: 'ਲੋਭ ਕੋ ਅੰਗ', en: 'Lobh Ko Ang (Eradicating Greed)' } },
  { id: 'ang-28', count: 7, title: { hi: 'मद को अंग', pb: 'ਮਦ ਕੋ ਅੰਗ', en: 'Mad Ko Ang (Arrogance & Delusion)' } },
  { id: 'ang-29', count: 27, title: { hi: 'मान को अंग', pb: 'ਮਾਨ ਕੋ ਅੰਗ', en: 'Maan Ko Ang (Pride & Ego)' } },
  { id: 'ang-30', count: 19, title: { hi: 'निन्दा को अंग', pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ', en: 'Ninda Ko Ang (Slander & Defamation)' } },
  { id: 'ang-31', count: 14, title: { hi: 'कथनी को अंग', pb: 'ਕਥਨੀ ਕੋ ਅੰਗ', en: 'Kathani Ko Ang (Mere Words)' } },
  { id: 'ang-32', count: 16, title: { hi: 'करनी को अंग', pb: 'ਕਰਨੀ ਕੋ ਅੰਗ', en: 'Karani Ko Ang (Right Action)' } },
  { id: 'ang-33', count: 16, title: { hi: 'क्रम को अंग', pb: 'ਕ੍ਰਮ ਕੋ ਅੰਗ', en: 'Kram Ko Ang (Disciplined Order)' } },
  { id: 'ang-34', count: 39, title: { hi: 'भ्रम-विध्वंस को अंग', pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ', en: 'Bhram-Vidhvans Ko Ang (Dispelling Doubt)' } },
  { id: 'ang-35', count: 10, title: { hi: 'दया को अंग', pb: 'ਦਇਆ ਕੋ ਅੰਗ', en: 'Daya Ko Ang (Universal Compassion)' } },
  { id: 'ang-36', count: 13, title: { hi: 'दीनता को अंग', pb: 'ਦੀਨਤਾ ਕੋ ਅੰਗ', en: 'Deenta Ko Ang (Meek Devotion)' } },
  { id: 'ang-37', count: 14, title: { hi: 'सांच को अंग', pb: 'ਸਾਚ ਕੋ ਅੰਗ', en: 'Saanch Ko Ang (Absolute Truth)' } },
];

const SAKHI_SANGRAH_CHAPTER_STUBS: GranthChapter[] = SAKHI_SANGRAH_ANG_METADATA.map((ang, idx) => ({
  id: ang.id,
  chapterNumber: idx + 1,
  title: {
    hi: `${idx + 1}. ${ang.title.hi}`,
    pb: `${idx + 1}. ${ang.title.pb}`,
    en: `${idx + 1}. ${ang.title.en}`,
  },
  subtitle: {
    hi: `${ang.title.hi} की पवित्र साखियाँ (${ang.count} पद्य)`,
    pb: `${ang.title.pb} ਦੀਆਂ ਪਾਵਨ ਸਾਖੀਆਂ (${ang.count} ਪਦ)`,
    en: `Sacred verses of ${ang.title.en} (${ang.count} Verses)`,
  },
  description: {
    hi: `इस अंग में ${ang.title.hi} से संबंधित ${ang.count} साखियाँ संकलित हैं।`,
    pb: `ਇਸ ਅੰਗ ਵਿੱਚ ${ang.title.pb} ਨਾਲ ਸਬੰਧਤ ${ang.count} ਪਾਵਨ ਸਾਖੀਆਂ ਹਨ।`,
    en: `This chapter contains ${ang.count} couplets exploring ${ang.title.en}.`,
  },
  verses: [],
}));

export const SAKHI_SANGRAH_READER_MASTER_GRANTH_STUB: MasterGranth = {
  id: 'sakhi-sangrah-reader',
  slug: 'sakhi-sangrah',
  title: {
    hi: 'सतगुरु कबीर साखी संग्रह',
    pb: 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Satguru Kabir Sakhi Sangrah',
  },
  shortTitle: {
    hi: 'साखी संग्रह',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Sakhi Sangrah',
  },
  subtitle: {
    hi: 'साखी, पद, सवैया एवं रमैनी का प्रामाणिक ऐतिहासिक संकलन',
    pb: 'ਸਾਖੀ, ਪਦ ਤੇ ਰਮੈਣੀ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ',
    en: 'Authentic Historical Anthology of Sakhis, Padas & Ramainis',
  },
  category: 'sakhi',
  iconName: 'BookOpen',
  bannerColor: 'from-amber-800 to-yellow-900',
  accentColor: 'text-amber-700',
  totalChapters: 37,
  estimatedHours: {
    hi: '४५ घण्टे स्वाध्याय',
    pb: '੪੫ ਘੰਟੇ ਅਧਿਐਨ',
    en: '45 Hours Study',
  },
  description: {
    hi: 'साखी संग्रह सतगुरु कबीर साहेब की वाणी का सर्वाधिक प्रामाणिक शोध संकलन है। इसमें ज्ञान, विवेक, गुरु-भक्ति, नीति और आत्म-साक्षात्कार के पदों का अद्भुत संगम है।',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਤੇ ਪ੍ਰਮਾਣਿਕ ਗ੍ਰੰਥ ਹੈ।',
    en: "Sakhi Sangrah is the premier spiritual anthology preserving the saint's verses, couplets, and songs across thematic Angs.",
  },
  chapters: SAKHI_SANGRAH_CHAPTER_STUBS,
};

/**
 * Lightweight catalog metadata (~5 KB). Zero verse bundles loaded at startup!
 */
export const MASTER_GRANTH_CATALOG: MasterGranth[] = [
  {
    id: 'kabir-sagar-granth',
    slug: 'kabir-sagar',
    title: {
      hi: 'कबीर सागर (समस्त सागर संग्रह)',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਸਮੁੱਚਾ ਸਾਗਰ ਸੰਗ੍ਰਹਿ)',
      en: 'Kabir Sagar (Ocean of Divine Wisdom)',
    },
    shortTitle: { hi: 'कबीर सागर', pb: 'ਕਬੀਰ ਸਾਗਰ', en: 'Kabir Sagar' },
    subtitle: {
      hi: 'अमरलोक रहस्य, सृष्टि उत्पत्ति एवं ज्ञान बोध संवाद',
      pb: 'ਅਮਰਲੋਕ ਭੇਦ, ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਤੇ ਗਿਆਨ ਬੋਧ',
      en: 'Secrets of Amar Lok, Creation & Spiritual Dialogues',
    },
    category: 'mool-granth',
    iconName: 'Compass',
    bannerColor: 'from-amber-600 to-orange-700',
    accentColor: 'text-amber-600',
    totalChapters: 31,
    estimatedHours: { hi: '३० घण्टे', pb: '੩੦ ਘੰਟੇ', en: '30 Hours' },
    description: {
      hi: 'कबीर सागर के ३१ दिव्य बोध एवं सागर अध्यायों का संग्रह।',
      pb: 'ਕਬੀਰ ਸਾਗਰ ਦੇ ੩੧ ਪਾਵਨ ਬੋਧ ਤੇ ਸਾਗਰ ਅਧਿਆਏ।',
      en: 'Collection of 31 sacred Bodh & Sagar chapters of Kabir Sagar.',
    },
    chapters: [],
  },
  {
    id: 'bijak-granth',
    slug: 'bijak',
    title: {
      hi: 'बीजक ग्रंथ (मूल वाणी)',
      pb: 'ਬੀਜਕ ਗ੍ਰੰਥ (ਮੂਲ ਬਾਣੀ)',
      en: 'Beejak Granth (The Canonical Essence)',
    },
    shortTitle: { hi: 'बीजक', pb: 'ਬੀਜਕ', en: 'Beejak' },
    subtitle: {
      hi: 'रमैनी, सबद, साखी व ज्ञान चौंतीसा का प्रमाणिक संग्रह',
      pb: 'ਰਮੈਣੀ, ਸਬਦ ਤੇ ਸਾਖੀਆਂ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ',
      en: 'Ramaini, Shabad, Sakhi & Gyan Chautisa Collection',
    },
    category: 'mool-granth',
    iconName: 'BookOpen',
    bannerColor: 'from-emerald-700 to-teal-800',
    accentColor: 'text-emerald-600',
    totalChapters: 12,
    estimatedHours: { hi: '२५ घण्टे', pb: '੨੫ ਘੰਟੇ', en: '25 Hours' },
    description: {
      hi: 'कबीर पंथ का मूल एवं सर्वाधिक प्रामाणिक ग्रंथ बीजक।',
      pb: 'ਕਬੀਰ ਪੰਥ ਦਾ ਮੂਲ ਅਤੇ ਸਰਬੋਤਮ ਪ੍ਰਮਾਣਿਕ ਗ੍ਰੰਥ ਬੀਜਕ।',
      en: 'The primary canonical scripture of Kabir Panth.',
    },
    chapters: [],
  },
  {
    id: 'ulatbaasi-granth',
    slug: 'ulatbaasi',
    title: {
      hi: 'सतगुरु कबीर उलटबांसी ग्रन्थ (२५० गूढ़ पद)',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਲਟਬਾਂਸੀ ਗ੍ਰੰਥ (੨੫੦ ਗੂੜ੍ਹ ਪਦ)',
      en: 'Satguru Kabir Ulatbaasi Granth (250 Mystic Inversions)',
    },
    shortTitle: {
      hi: 'सतगुरु कबीर उलटबांसी (२५० पद)',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਲਟਬਾਂਸੀ (੨੫੦ ਪਦ)',
      en: 'Satguru Kabir Ulatbaasi (250 Verses)',
    },
    subtitle: {
      hi: 'गूढ़ प्रतीक विद्या व पहेलियों का आध्यात्मिक भाष्य',
      pb: 'ਗੂੜ੍ਹ ਪ੍ਰਤੀਕ ਵਿੱਦਿਆ ਤੇ ਅਧਿਆਤਮਕ ਰਹੱਸ',
      en: 'Mystical Symbolic Poetry & Paradoxical Revelations',
    },
    category: 'rahasya',
    iconName: 'Sparkles',
    bannerColor: 'from-purple-700 to-indigo-800',
    accentColor: 'text-purple-600',
    totalChapters: 10,
    estimatedHours: { hi: '१५ घण्टे', pb: '੧੫ ਘੰਟੇ', en: '15 Hours' },
    description: {
      hi: '२५० गूढ़ उलटबांसी पदों का अर्थ सहित संकलन।',
      pb: '੨੫੦ ਗੂੜ੍ਹ ਉਲਟਬਾਂਸੀ ਪਦਾਂ ਦਾ ਅਰਥਾਂ ਸਮੇਤ ਸੰਗ੍ਰਹਿ।',
      en: '250 mystical Ulatbaasi paradox verses with spiritual meanings.',
    },
    chapters: [],
  },
  {
    id: 'shabdawali-granth',
    slug: 'shabdawali',
    title: {
      hi: 'शब्दावली ग्रंथ (राग व पद संग्रह)',
      pb: 'ਸ਼ਬਦਾਵਲੀ ਗ੍ਰੰਥ (ਰਾਗ ਤੇ ਪਦ ਸੰਗ੍ਰਹਿ)',
      en: 'Shabdawali Granth (Sacred Hymns & Ragas)',
    },
    shortTitle: { hi: 'शब्दावली', pb: 'ਸ਼ਬਦਾਵਲੀ', en: 'Shabdawali' },
    subtitle: {
      hi: 'शास्त्रीय रागों में निबद्ध पावन भजन व पद',
      pb: 'ਸ਼ਾਸਤਰੀ ਰਾਗਾਂ ਵਿੱਚ ਪਾਵਨ ਸ਼ਬਦ ਤੇ ਭਜਨ',
      en: 'Devotional Hymns Set to Classical Ragas',
    },
    category: 'shabda',
    iconName: 'Music',
    bannerColor: 'from-rose-700 to-amber-700',
    accentColor: 'text-rose-600',
    totalChapters: 6,
    estimatedHours: { hi: '१२ घण्टे', pb: '੧੨ ਘੰਟੇ', en: '12 Hours' },
    description: {
      hi: 'सत्संग व कीर्तन हेतु पावन शब्दावली संग्रह।',
      pb: 'ਸਤਿਸੰਗ ਅਤੇ ਕੀਰਤਨ ਲਈ ਪਾਵਨ ਸ਼ਬਦਾਵਲੀ ਸੰਗ੍ਰਹਿ।',
      en: 'Sacred Shabdawali verses for meditation and singing.',
    },
    chapters: [],
  },
  {
    id: 'kabir-granthavali-granth',
    slug: 'granthavali',
    title: {
      hi: 'कबीर ग्रंथावली (प्रामाणिक संकलन)',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ (ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ)',
      en: 'Kabir Granthavali (Canonical Collection)',
    },
    shortTitle: { hi: 'कबीर ग्रंथावली', pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ', en: 'Kabir Granthavali' },
    subtitle: {
      hi: 'साखी, पद एवं रमैनी प्रकरण (स्लॉट #4)',
      pb: 'ਸਾਖੀ, ਪਦ ਤੇ ਰਮੈਣੀ ਪ੍ਰਕਰਣ (ਸਲੌਟ #4)',
      en: 'Sakhis, Padas & Ramaini Sections (Slot #4)',
    },
    category: 'mool-granth',
    iconName: 'Scroll',
    bannerColor: 'from-amber-700 to-stone-800',
    accentColor: 'text-amber-700',
    totalChapters: 0,
    estimatedHours: { hi: 'स्लॉट आधारित', pb: 'ਸਲੌਟ ਆਧਾਰਿਤ', en: 'Slot-Ready' },
    description: {
      hi: 'कबीर ग्रंथावली हेतु आरक्षित ग्रन्थ स्लॉट — प्रशासक डेटा इंजेक्टर द्वारा स्थानीय JSON लोड करें।',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ ਲਈ ਰਾਖਵਾਂ ਗ੍ਰੰਥ ਸਲੌਟ — ਐਡਮਿਨ ਇੰਜੈਕਟਰ ਰਾਹੀਂ ਡੇਟਾ ਲੋਡ ਕਰੋ।',
      en: 'Dedicated Granth vault for Kabir Granthavali — load local JSON via Admin Data Injector.',
    },
    chapters: [],
  },
  SAKHI_SANGRAH_READER_MASTER_GRANTH_STUB,
];

const granthMemoryCache = new Map<string, MasterGranth>();
const angVersesMemoryCache = new Map<string, GranthVerse[]>();

export function clearMasterGranthCaches(): void {
  granthMemoryCache.clear();
  angVersesMemoryCache.clear();
}

if (typeof window !== 'undefined') {
  window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, () => {
    clearMasterGranthCaches();
  });
}

async function loadRawAngVerses(angId: string): Promise<GranthVerse[]> {
  if (angVersesMemoryCache.has(angId)) {
    return angVersesMemoryCache.get(angId)!;
  }

  // Try bounded offline cache first
  const cached = await offlineScriptureCache.getCachedChapter<GranthVerse[]>(`granth:sakhi-sangrah:${angId}`);
  if (Array.isArray(cached) && cached.length > 0) {
    angVersesMemoryCache.set(angId, cached);
    return cached;
  }

  let raw: GranthVerse[] = [];
  switch (angId) {
    case 'ang-1': raw = (await import('./sakhiSangrahAng1')).SAKHI_SANGRAH_ANG_1_VERSES; break;
    case 'ang-2': raw = (await import('./sakhiSangrahAng2')).SAKHI_SANGRAH_ANG_2_VERSES; break;
    case 'ang-3': raw = (await import('./sakhiSangrahAng3')).SAKHI_SANGRAH_ANG_3_VERSES; break;
    case 'ang-4': raw = (await import('./sakhiSangrahAng4')).SAKHI_SANGRAH_ANG_4_VERSES; break;
    case 'ang-5': raw = (await import('./sakhiSangrahAng5')).SAKHI_SANGRAH_ANG_5_VERSES; break;
    case 'ang-6': raw = (await import('./sakhiSangrahAng6')).SAKHI_SANGRAH_ANG_6_VERSES; break;
    case 'ang-7': raw = (await import('./sakhiSangrahAng7')).SAKHI_SANGRAH_ANG_7_VERSES; break;
    case 'ang-8': raw = (await import('./sakhiSangrahAng8')).SAKHI_SANGRAH_ANG_8_VERSES; break;
    case 'ang-9': raw = (await import('./sakhiSangrahAng9')).SAKHI_SANGRAH_ANG_9_VERSES; break;
    case 'ang-10': raw = (await import('./sakhiSangrahAng10')).SAKHI_SANGRAH_ANG_10_VERSES; break;
    case 'ang-11': raw = (await import('./sakhiSangrahAng11')).SAKHI_SANGRAH_ANG_11_VERSES; break;
    case 'ang-12': raw = (await import('./sakhiSangrahAng12')).SAKHI_SANGRAH_ANG_12_VERSES; break;
    case 'ang-13': raw = (await import('./sakhiSangrahAng13')).SAKHI_SANGRAH_ANG_13_VERSES; break;
    case 'ang-14': raw = (await import('./sakhiSangrahAng14')).SAKHI_SANGRAH_ANG_14_VERSES; break;
    case 'ang-15': raw = (await import('./sakhiSangrahAng15')).SAKHI_SANGRAH_ANG_15_VERSES; break;
    case 'ang-16': raw = (await import('../sakhisUpdeshKoAng')).SAKHIS_UPDESH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-17': raw = (await import('../sakhisShabdKoAng')).SAKHIS_SHABD_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-18': raw = (await import('../sakhisJeevatMritakKoAng')).SAKHIS_JEEVAT_MRITAK_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-19': raw = (await import('../sakhisKaalKoAng')).SAKHIS_KAAL_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-20': raw = (await import('../sakhisSwaarathKoAng')).SAKHIS_SWAARATH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-21': raw = (await import('../sakhisParmaarthKoAng')).SAKHIS_PARMAARTH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-22': raw = (await import('../sakhisManKoAng')).SAKHIS_MAN_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-23': raw = (await import('../sakhisMayaKoAng')).SAKHIS_MAYA_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-24': raw = (await import('../sakhisMohKoAng')).SAKHIS_MOH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-25': raw = (await import('../sakhisKaamKoAng')).SAKHIS_KAAM_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-26': raw = (await import('../sakhisKrodhKoAng')).SAKHIS_KRODH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-27': raw = (await import('../sakhisLobhKoAng')).SAKHIS_LOBH_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-28': raw = (await import('../sakhisMadKoAng')).SAKHIS_MAD_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-29': raw = (await import('../sakhisMaanKoAng')).SAKHIS_MAAN_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-30': raw = (await import('../sakhisNindaKoAng')).SAKHIS_NINDA_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-31': raw = (await import('../sakhisKathaniKoAng')).SAKHIS_KATHANI_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-32': raw = (await import('../sakhisKaraniKoAng')).SAKHIS_KARANI_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-33': raw = (await import('../sakhisKramKoAng')).SAKHIS_KRAM_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-34': raw = (await import('../sakhisBhramVidhvansKoAng')).SAKHIS_BHRAM_VIDHVANS_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-35': raw = (await import('../sakhisDayaKoAng')).SAKHIS_DAYA_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-36': raw = (await import('../sakhisDeentaKoAng')).SAKHIS_DEENTA_KO_ANG.map(sakhiToGranthVerse); break;
    case 'ang-37': raw = (await import('../sakhisSaanchKoAng')).SAKHIS_SAANCH_KO_ANG.map(sakhiToGranthVerse); break;
  }

  const angMeta = SAKHI_SANGRAH_ANG_METADATA.find((a) => a.id === angId);
  const enriched = raw.map((v) => enrichVerseWith5Steps(v, angMeta?.title.hi || 'साखी संग्रह'));
  angVersesMemoryCache.set(angId, enriched);

  // Cache opened chapter safely with LRU cap
  offlineScriptureCache
    .cacheOpenedChapter(`granth:sakhi-sangrah:${angId}`, enriched, angMeta?.title.hi)
    .catch(() => {});

  return enriched;
}

/**
 * Dynamically imports a MasterGranth bundle only when the user opens that Granth.
 */
export async function loadMasterGranth(slug: string): Promise<MasterGranth> {
  if (granthMemoryCache.has(slug)) {
    return granthMemoryCache.get(slug)!;
  }

  let granth: MasterGranth;
  switch (slug) {
    case 'kabir-sagar':
      granth = (await import('./kabirSagar')).KABIR_SAGAR_GRANTH;
      break;
    case 'bijak':
      granth = (await import('./bijakGranth')).BIJAK_GRANTH;
      break;
    case 'ulatbaasi':
      granth = (await import('./ulatbaasi')).ULATBAASI_GRANTH;
      break;
    case 'shabdawali':
      granth = (await import('./shabdawali')).SHABDAWALI_GRANTH;
      break;
    case 'granthavali':
      granth =
        MASTER_GRANTH_CATALOG.find((g) => g.slug === 'granthavali') ||
        SAKHI_SANGRAH_READER_MASTER_GRANTH_STUB;
      break;
    case 'sakhi-sangrah':
    default: {
      // Load first Ang automatically so default view is immediately populated
      const firstAngVerses = await loadRawAngVerses('ang-1');
      granth = {
        ...SAKHI_SANGRAH_READER_MASTER_GRANTH_STUB,
        chapters: SAKHI_SANGRAH_CHAPTER_STUBS.map((ch) =>
          ch.id === 'ang-1' ? { ...ch, verses: firstAngVerses } : ch
        ),
      };
      break;
    }
  }

  // Overlay / prepend admin-injected chapters for this Granth slot if present
  const slotId = getSlotIdForGranthSlug(slug);
  if (slotId) {
    const injectedChapters = getInjectedGranthChapters(slotId);
    if (injectedChapters && injectedChapters.length > 0) {
      const injectedIds = new Set(injectedChapters.map((c) => c.id));
      const remainingBase = granth.chapters.filter((c) => !injectedIds.has(c.id));
      const mergedChapters = [...injectedChapters, ...remainingBase];
      granth = {
        ...granth,
        totalChapters: mergedChapters.length,
        chapters: mergedChapters,
      };
    }
  }

  granthMemoryCache.set(slug, granth);
  return granth;
}

/**
 * Loads a single chapter inside a MasterGranth dynamically (crucial for Sakhi Sangrah's 37 Angs).
 */
export async function loadMasterGranthChapter(granthSlug: string, chapterId: string): Promise<GranthChapter | null> {
  const granth = await loadMasterGranth(granthSlug);
  const targetChapter = granth.chapters.find((c) => c.id === chapterId) || granth.chapters[0] || null;
  if (!targetChapter) return null;

  if (granthSlug === 'sakhi-sangrah' && (!targetChapter.verses || targetChapter.verses.length === 0)) {
    const verses = await loadRawAngVerses(targetChapter.id);
    const updatedChapter: GranthChapter = { ...targetChapter, verses };
    const updatedGranth: MasterGranth = {
      ...granth,
      chapters: granth.chapters.map((c) => (c.id === targetChapter.id ? updatedChapter : c)),
    };
    granthMemoryCache.set(granthSlug, updatedGranth);
    return updatedChapter;
  }

  // Cache non-Sakhi Sangrah opened chapters smoothly
  if (targetChapter.verses && targetChapter.verses.length > 0) {
    offlineScriptureCache
      .cacheOpenedChapter(`granth:${granthSlug}:${targetChapter.id}`, targetChapter.verses, targetChapter.title.hi)
      .catch(() => {});
  }

  return targetChapter;
}

export const ALL_MASTER_GRANTHS: MasterGranth[] = MASTER_GRANTH_CATALOG;
