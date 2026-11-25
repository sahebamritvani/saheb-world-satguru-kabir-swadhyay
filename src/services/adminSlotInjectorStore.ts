import { GranthChapter, GranthVerse, LocalizedText } from '../data/granths/granthTypes';
import { AppView, NitnemSection, NitnemVersePair, Sakhi } from '../types';
import { SggsKabirVerse } from '../data/sggsKabirMetadata';
import { devanagariToGurmukhi } from './transliteration';

export const ADMIN_SLOTS_UPDATED_EVENT = 'sahebworld:admin-slots-updated';
export const OPEN_ADMIN_INJECTOR_EVENT = 'sahebworld:open-admin-injector';

const STORAGE_KEY_PREFIX = 'sahebworld_admin_slot_';
const IDB_NAME = 'sahebworld_admin_injector_db';
const IDB_STORE = 'granth_slots';

export type AdminSlotCategoryId =
  | 'scriptures-darshan'
  | 'sadhana-dhun'
  | 'wisdom-quizzes'
  | 'exploration-tools'
  | 'guide-policies';

export interface AdminSlotCategoryMeta {
  id: AdminSlotCategoryId;
  shortTitle: LocalizedText;
  title: LocalizedText;
}

export const ADMIN_SLOT_CATEGORIES: AdminSlotCategoryMeta[] = [
  {
    id: 'scriptures-darshan',
    shortTitle: {
      hi: 'ग्रन्थालय व दर्शन',
      pb: 'ਗ੍ਰੰਥਾਵਲੀ ਤੇ ਦਰਸ਼ਨ',
      en: 'Scriptures & Darshan',
    },
    title: {
      hi: '१. पावन ग्रन्थालय, पाठ एवं दर्शन',
      pb: '੧. ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ, ਪਾਠ ਤੇ ਦਰਸ਼ਨ',
      en: '1. Holy Scriptures, Paths & Darshan',
    },
  },
  {
    id: 'sadhana-dhun',
    shortTitle: {
      hi: 'साधना व धुन',
      pb: 'ਸਾਧਨਾ ਤੇ ਧੁਨ',
      en: 'Sadhana & Dhun',
    },
    title: {
      hi: '२. साधना, सिमरन एवं पावन धुन',
      pb: '੨. ਸਾਧਨਾ, ਸਿਮਰਨ ਤੇ ਪਾਵਨ ਧੁਨ',
      en: '2. Sadhana, Simran & Sacred Audio',
    },
  },
  {
    id: 'wisdom-quizzes',
    shortTitle: {
      hi: 'ज्ञान व क्विज़',
      pb: 'ਗਿਆਨ ਤੇ ਕੁਇਜ਼',
      en: 'Wisdom & Quizzes',
    },
    title: {
      hi: '३. ज्ञान, बोध, चरित्र एवं प्रश्नोत्तरी',
      pb: '੩. ਗਿਆਨ, ਬੋਧ, ਚਰਿੱਤਰ ਤੇ ਪ੍ਰਸ਼ਨਾਵਲੀ',
      en: '3. Wisdom, Lineage & Quizzes',
    },
  },
  {
    id: 'exploration-tools',
    shortTitle: {
      hi: 'अन्वेषण व साधन',
      pb: 'ਖੋਜ ਤੇ ਸਾਧਨ',
      en: 'Exploration & Tools',
    },
    title: {
      hi: '४. अन्वेषण, जंत्री, वॉलपेपर एवं साधन',
      pb: '੪. ਖੋਜ, ਜੰਤਰੀ, ਵਾਲਪੇਪਰ ਤੇ ਸਾਧਨ',
      en: '4. Exploration, Calendar & Tools',
    },
  },
  {
    id: 'guide-policies',
    shortTitle: {
      hi: 'मार्गदर्शिका व नीतियां',
      pb: 'ਮਾਰਗਦਰਸ਼ਿਕਾ ਤੇ ਨੀਤੀਆਂ',
      en: 'Guide & Policies',
    },
    title: {
      hi: '५. उपयोगकर्ता मार्गदर्शिका, परिचय एवं नीतियां',
      pb: '੫. ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ, ਜਾਣ-ਪਛਾਣ ਤੇ ਨੀਤੀਆਂ',
      en: '5. User Guide, About Us & Policies',
    },
  },
];

export type AdminGranthSlotId =
  | 'slot-mool-siddhant'
  | 'slot-1-nitnem'
  | 'slot-2-sakhi'
  | 'slot-3-bijak'
  | 'slot-4-granthavali'
  | 'slot-5-kabir-sagar'
  | 'slot-6-ulatbaasi'
  | 'slot-7-shabdawali'
  | 'slot-8-sggs'
  | 'slot-9-kar-nainon'
  | 'slot-10-santo-shabdai'
  | 'slot-11-satyanaam-sutra'
  | 'slot-12-master-granth'
  | 'slot-13-daily-sakhi'
  | 'slot-14-divine-darshan'
  | 'slot-15-akhand-path'
  | 'slot-16-aarti-sanctuary'
  | 'slot-17-aatma-bhushan'
  | 'slot-18-hukamnama'
  | 'slot-19-das-sutra'
  | 'slot-20-dainik-chintan'
  | 'slot-21-damakheda-index'
  | 'slot-22-bhajan-repository'
  | 'slot-23-dhun'
  | 'slot-24-mantra-tracker'
  | 'slot-25-meditation-timer'
  | 'slot-26-spiritual-discipline'
  | 'slot-27-growth-dashboard'
  | 'slot-28-sadhana-goals'
  | 'slot-29-divine-guidance'
  | 'slot-30-community-board'
  | 'slot-31-audio-library'
  | 'slot-32-satsang-video'
  | 'slot-33-swadhyay'
  | 'slot-34-ulatvasi-quiz'
  | 'slot-35-doha-memory'
  | 'slot-36-chetavani-saarang'
  | 'slot-37-shabd-kosha'
  | 'slot-38-life-journey'
  | 'slot-39-sacred-leelas'
  | 'slot-40-acharya-parampara'
  | 'slot-41-discourse-engine'
  | 'slot-42-prashnottari'
  | 'slot-43-jantri'
  | 'slot-44-sacred-ashrams'
  | 'slot-45-universe-map'
  | 'slot-46-deep-search'
  | 'slot-47-diary'
  | 'slot-48-nature-wallpaper'
  | 'slot-49-auto-correct'
  | 'slot-50-health-diagnostic'
  | 'slot-51-user-guide'
  | 'slot-52-about-us'
  | 'slot-53-disclaimer'
  | 'slot-54-privacy-policy'
  | 'slot-55-vani-card-maker'
  | 'slot-56-satvik-sankalp'
  | 'slot-57-kabir-gyan-quiz'
  | 'slot-58-vansh-bayalis'
  | 'slot-59-satyanaam-panacea';

export interface AdminGranthSlotDefinition {
  id: AdminGranthSlotId;
  slotNumber: number;
  category: AdminSlotCategoryId;
  label: string;
  title: LocalizedText;
  targetSlug: string;
  targetViews: AppView[];
  nativeReaderHandled?: boolean;
  description: LocalizedText;
  sampleJson?: string;
}

export const ADMIN_GRANTH_SLOTS: AdminGranthSlotDefinition[] = [
  // =========================================================================
  // CATEGORY 1: Scriptures, Paths & Darshan (#01 – #22)
  // =========================================================================
  {
    id: 'slot-1-nitnem',
    slotNumber: 1,
    category: 'scriptures-darshan',
    label: '#1: नितनेम गुटका साहेब',
    title: {
      hi: '#1: नितनेम गुटका साहेब',
      pb: '#1: ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ',
      en: '#1: Nitnem Gutka Saheb',
    },
    targetSlug: 'nitnem-gutka',
    targetViews: ['nitnem-gutka'],
    nativeReaderHandled: true,
    description: {
      hi: 'प्रभात पाठ, संध्या पाठ, गायत्री, पूनो महात्म्य, चालीसा, बारहमासी एवं तीसा यंत्र के ७ खण्ड',
      pb: 'ਪ੍ਰਭਾਤ, ਸੰਧਿਆ, ਗਾਇਤਰੀ, ਪੂਨੋ ਮਹਾਤਮਯ, ਚਾਲੀਸਾ, ਬਾਰਹਮਾਸੀ ਤੇ ਤੀਸਾ ਯੰਤਰ',
      en: '7 Nitnem Gutka Saheb recitation sections & 3D Pothi verses',
    },
  },
  {
    id: 'slot-2-sakhi',
    slotNumber: 2,
    category: 'scriptures-darshan',
    label: '#2: साखी संग्रह (शब्द को अंग)',
    title: {
      hi: '#2: साखी संग्रह (शब्द को अंग)',
      pb: '#2: ਸਾਖੀ ਸੰਗ੍ਰਹਿ (ਸ਼ਬਦ ਕੋ ਅੰਗ)',
      en: '#2: Sakhi Sangrah (Shabd Ko Ang & 37 Angs)',
    },
    targetSlug: 'sakhi-sangrah',
    targetViews: ['daily', 'swadhyay', 'akhand-path'],
    nativeReaderHandled: true,
    description: {
      hi: 'साखी संग्रह ग्रन्थ, अखंड पाठ व स्वाध्याय हेतु प्रमाणिक साखी/दोहा डेटा',
      pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਅਖੰਡ ਪਾਠ ਤੇ ਸਵਾਧਿਆਏ ਲਈ ਪ੍ਰਮਾਣਿਕ ਸਾਖੀਆਂ',
      en: 'Sakhi Sangrah chapters & couplets for Granth, Akhand Path and Swadhyay readers',
    },
  },
  {
    id: 'slot-3-bijak',
    slotNumber: 3,
    category: 'scriptures-darshan',
    label: '#3: श्री कबीर बीजक',
    title: {
      hi: '#3: श्री कबीर बीजक',
      pb: '#3: ਸ਼੍ਰੀ ਕਬੀਰ ਬੀਜਕ',
      en: '#3: Sri Kabir Bijak Granth',
    },
    targetSlug: 'bijak',
    targetViews: ['grantha'],
    nativeReaderHandled: true,
    description: {
      hi: 'रमैनी, सबद, साखी एवं ज्ञान चौंतीसा प्रकरण',
      pb: 'ਰਮੈਣੀ, ਸਬਦ, ਸਾਖੀ ਅਤੇ ਗਿਆਨ ਚੌਂਤੀਸਾ',
      en: 'Ramaini, Shabad, Sakhi & Gyan Chautisa sections',
    },
  },
  {
    id: 'slot-4-granthavali',
    slotNumber: 4,
    category: 'scriptures-darshan',
    label: '#4: कबीर ग्रंथावली',
    title: {
      hi: '#4: कबीर ग्रंथावली',
      pb: '#4: ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ',
      en: '#4: Kabir Granthavali',
    },
    targetSlug: 'granthavali',
    targetViews: ['grantha'],
    nativeReaderHandled: true,
    description: {
      hi: 'कबीर ग्रंथावली की साखियाँ, पद एवं रमैनी अध्याय',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ ਦੀਆਂ ਸਾਖੀਆਂ, ਪਦ ਤੇ ਰਮੈਣੀ',
      en: 'Kabir Granthavali couplets, padas & chapters',
    },
  },
  {
    id: 'slot-5-kabir-sagar',
    slotNumber: 5,
    category: 'scriptures-darshan',
    label: '#5: कबीर सागर',
    title: {
      hi: '#5: कबीर सागर',
      pb: '#5: ਕਬੀਰ ਸਾਗਰ',
      en: '#5: Kabir Sagar',
    },
    targetSlug: 'kabir-sagar',
    targetViews: ['grantha'],
    nativeReaderHandled: true,
    description: {
      hi: 'अमरलोक रहस्य, सृष्टि बोध एवं धर्मदास संवाद प्रकरण',
      pb: 'ਅਮਰਲੋਕ ਭੇਦ, ਸ੍ਰਿਸ਼ਟੀ ਬੋਧ ਤੇ ਧਰਮਦਾਸ ਸੰਵਾਦ',
      en: 'Bodh & Sagar dialogues of Satguru Kabir Saheb',
    },
  },
  {
    id: 'slot-6-ulatbaasi',
    slotNumber: 6,
    category: 'scriptures-darshan',
    label: '#6: सतगुरु कबीर उलटबांसी (२५० पद)',
    title: {
      hi: '#6: सतगुरु कबीर उलटबांसी (२५० पद)',
      pb: '#6: ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਲਟਬਾਂਸੀ (੨੫੦ ਪਦ)',
      en: '#6: Satguru Kabir Ulatbaasi (250 Verses)',
    },
    targetSlug: 'ulatbaasi',
    targetViews: ['ulatvasi-library'],
    description: {
      hi: 'गूढ़ प्रतीक विद्या व यौगिक पहेलियों का भाष्य संग्रह',
      pb: 'ਗੂੜ੍ਹ ਪ੍ਰਤੀਕ ਵਿੱਦਿਆ ਅਤੇ ਰਹੱਸਮਈ ਪਦ',
      en: 'Mystic paradox verses and esoteric spiritual meanings',
    },
  },
  {
    id: 'slot-7-shabdawali',
    slotNumber: 7,
    category: 'scriptures-darshan',
    label: '#7: शब्दावली ग्रंथ',
    title: {
      hi: '#7: शब्दावली ग्रंथ',
      pb: '#7: ਸ਼ਬਦਾਵਲੀ ਗ੍ਰੰਥ',
      en: '#7: Shabdawali Granth',
    },
    targetSlug: 'shabdawali',
    targetViews: ['grantha'],
    nativeReaderHandled: true,
    description: {
      hi: 'शास्त्रीय रागों में निबद्ध पावन भजन व शब्द',
      pb: 'ਸ਼ਾਸਤਰੀ ਰਾਗਾਂ ਵਿੱਚ ਪਾਵਨ ਸ਼ਬਦ ਤੇ ਭਜਨ',
      en: 'Devotional hymns & ragas of Satguru Kabir Saheb',
    },
  },
  {
    id: 'slot-8-sggs',
    slotNumber: 8,
    category: 'scriptures-darshan',
    label: '#8: श्री गुरु ग्रंथ साहिब जी (कबीर वाणी)',
    title: {
      hi: '#8: श्री गुरु ग्रंथ साहिब जी (कबीर वाणी)',
      pb: '#8: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ (ਭਗਤ ਕਬੀਰ ਬਾਣੀ)',
      en: '#8: Sri Guru Granth Sahib Ji (Kabir Bani)',
    },
    targetSlug: 'sggs-kabir-bani',
    targetViews: ['sggs-kabir-bani'],
    nativeReaderHandled: true,
    description: {
      hi: '१७ रागों के शबद एवं भगत कबीर जीउ के सलोक',
      pb: '੧੭ ਰਾਗਾਂ ਦੇ ਸ਼ਬਦ ਅਤੇ ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀਉ ਕੇ',
      en: 'Sacred Shabads & Saloks across 17 Raags',
    },
  },
  {
    id: 'slot-9-kar-nainon',
    slotNumber: 9,
    category: 'scriptures-darshan',
    label: '#9: कर नैनों दीदार (३२ कड़ियाँ)',
    title: {
      hi: '#9: कर नैनों दीदार (३२ कड़ियाँ)',
      pb: '#9: ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ (੩੨ ਕੜੀਆਂ)',
      en: '#9: Kar Nainon Deedar (32 Verses)',
    },
    targetSlug: 'kar-nainon-deedar',
    targetViews: ['nitnem-gutka'],
    nativeReaderHandled: true,
    description: {
      hi: 'काया-भेद, अनहद नाद एवं सुरति-योग की ३२ कड़ियाँ',
      pb: 'ਕਾਇਆ ਭੇਦ ਅਤੇ ਅਨਹਦ ਨਾਦ ਦੀਆਂ ੩੨ ਕੜੀਆਂ',
      en: 'Inner sanctuary ascension and 32 sacred stanzas',
    },
  },
  {
    id: 'slot-10-santo-shabdai',
    slotNumber: 10,
    category: 'scriptures-darshan',
    label: '#10: संतो शबदई शबद (५ शब्द / मुद्रा)',
    title: {
      hi: '#10: संतो शबदई शबद (५ शब्द / मुद्रा)',
      pb: '#10: ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ (੫ ਸ਼ਬਦ / ਮੁਦ੍ਰਾ)',
      en: '#10: Santo Shabdai Shabd (5 Sounds & Mudras)',
    },
    targetSlug: 'santo-shabdai-shabd',
    targetViews: ['nitnem-gutka'],
    nativeReaderHandled: true,
    description: {
      hi: 'पंच शब्द, पंच मुद्रा एवं निःअक्षर सत्यनाम भेद',
      pb: 'ਪੰਜ ਸ਼ਬਦ, ਪੰਜ ਮੁਦ੍ਰਾ ਅਤੇ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ ਭੇਦ',
      en: 'Five Shabads, five Mudras & Nish-Akshar Satyanaam',
    },
  },
  {
    id: 'slot-11-satyanaam-sutra',
    slotNumber: 11,
    category: 'scriptures-darshan',
    label: '#11: सत्यनाम व अमरलोक बोध संग्रह',
    title: {
      hi: '#11: सत्यनाम व अमरलोक बोध संग्रह',
      pb: '#11: ਸਤਯਨਾਮ ਅਤੇ ਅਮਰਲੋਕ ਬੋਧ ਸੰਗ੍ਰਹਿ',
      en: '#11: Satyanaam & Amar Lok Bodh',
    },
    targetSlug: 'satyanaam-bodh',
    targetViews: ['satya-naam'],
    description: {
      hi: 'सत्यनाम महिमा, सारशब्द एवं अमरलोक बोध कार्ड',
      pb: 'ਸਤਯਨਾਮ ਮਹਿਮਾ, ਸਾਰਸ਼ਬਦ ਅਤੇ ਅਮਰਲੋਕ ਬੋਧ ਕਾਰਡ',
      en: 'Satyanaam Maha Margdarshika & Saar Shabd revelation card',
    },
  },
  {
    id: 'slot-12-master-granth',
    slotNumber: 12,
    category: 'scriptures-darshan',
    label: '#12: समग्र ग्रन्थालय (मास्टर लाइब्रेरी पोर्टल)',
    title: {
      hi: '#12: समग्र ग्रन्थालय (मास्टर लाइब्रेरी पोर्टल)',
      pb: '#12: ਸਮੁੱਚੀ ਗ੍ਰੰਥਾਵਲੀ (ਮਾਸਟਰ ਲਾਇਬ੍ਰੇਰੀ)',
      en: '#12: Master Granth Library Portal',
    },
    targetSlug: 'grantha',
    targetViews: ['grantha'],
    description: {
      hi: 'मुख्य ग्रन्थालय पोर्टल बैनर, विशेष सूचना एवं अतिरिक्त ग्रन्थ पाठ',
      pb: 'ਮੁੱਖ ਗ੍ਰੰਥਾਵਲੀ ਪੋਰਟਲ ਬੈਨਰ ਅਤੇ ਵਧੀਕ ਗ੍ਰੰਥ ਪਾਠ',
      en: 'Master Granth Library hub announcements & supplemental chapters',
    },
  },
  {
    id: 'slot-13-daily-sakhi',
    slotNumber: 13,
    category: 'scriptures-darshan',
    label: '#13: दैनिक पावन साखी (मुख्य कार्ड)',
    title: {
      hi: '#13: दैनिक पावन साखी (मुख्य कार्ड)',
      pb: '#13: ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ (ਮੁੱਖ ਕਾਰਡ)',
      en: '#13: Daily Pawan Sakhi (Home Card)',
    },
    targetSlug: 'daily',
    targetViews: ['daily'],
    description: {
      hi: 'दैनिक पावन साखी होम कार्ड पर विशेष पावन वचन व संदर्भ',
      pb: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ ਹੋਮ ਕਾਰਡ ਲਈ ਵਿਸ਼ੇਸ਼ ਪਾਵਨ ਬਚਨ',
      en: 'Featured verse & contemplation note for the Daily Sakhi home card',
    },
  },
  {
    id: 'slot-14-divine-darshan',
    slotNumber: 14,
    category: 'scriptures-darshan',
    label: '#14: सतगुरु कबीर साहेब दिव्य दर्शन',
    title: {
      hi: '#14: सतगुरु कबीर साहेब दिव्य दर्शन',
      pb: '#14: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਦਰਸ਼ਨ',
      en: '#14: Satguru Kabir Saheb Divine Darshan',
    },
    targetSlug: 'divine-darshan',
    targetViews: ['divine-darshan'],
    description: {
      hi: 'दिव्य दर्शन कार्ड में पावन स्तुति, आरती एवं ध्यान वचन',
      pb: 'ਦਿਵਯ ਦਰਸ਼ਨ ਕਾਰਡ ਵਿੱਚ ਪਾਵਨ ਉਸਤਤ ਅਤੇ ਧਿਆਨ ਬਚਨ',
      en: 'Sacred Darshan meditation verses and reverence notes',
    },
  },
  {
    id: 'slot-15-akhand-path',
    slotNumber: 15,
    category: 'scriptures-darshan',
    label: '#15: अखंड साखी पाठ (अविराम श्रवण)',
    title: {
      hi: '#15: अखंड साखी पाठ (अविराम श्रवण)',
      pb: '#15: ਅਖੰਡ ਸਾਖੀ ਪਾਠ (ਨਿਰੰਤਰ ਸ਼੍ਰਵਣ)',
      en: '#15: Akhand Sakhi Path',
    },
    targetSlug: 'akhand-path',
    targetViews: ['akhand-path'],
    description: {
      hi: 'अखंड साखी पाठ कार्ड हेतु विशेष पावन साखियाँ व पाठ क्रम',
      pb: 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ ਲਈ ਵਿਸ਼ੇਸ਼ ਸਾਖੀਆਂ ਅਤੇ ਪਾਠ ਕ੍ਰਮ',
      en: 'Supplemental sakhis and continuous recitation sequence',
    },
  },
  {
    id: 'slot-16-aarti-sanctuary',
    slotNumber: 16,
    category: 'scriptures-darshan',
    label: '#16: अलौकिक संध्या आरती एवं प्रभात गान',
    title: {
      hi: '#16: अलौकिक संध्या आरती एवं प्रभात गान',
      pb: '#16: ਅਲੌਕਿਕ ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ',
      en: '#16: Alaukik Sandhya Aarti & Prayers',
    },
    targetSlug: 'aarti-sanctuary',
    targetViews: ['aarti-sanctuary'],
    description: {
      hi: 'संध्या आरती, प्रभात मंगल गान एवं स्तुति संग्रह कार्ड',
      pb: 'ਸੰਧਿਆ ਆਰਤੀ, ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ ਤੇ ਉਸਤਤ ਸੰਗ੍ਰਹਿ',
      en: 'Evening Aarti hymns, Prabhat Mangal Gaan & prayer stanzas',
    },
  },
  {
    id: 'slot-17-aatma-bhushan',
    slotNumber: 17,
    category: 'scriptures-darshan',
    label: '#17: आत्मा के १६ भूषण व ज्ञान-चक्र',
    title: {
      hi: '#17: आत्मा के १६ भूषण व ज्ञान-चक्र',
      pb: '#17: ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ ਤੇ ਗਿਆਨ-ਚੱਕਰ',
      en: '#17: Aatma Ke 16 Bhushan & Gyan-Chakra',
    },
    targetSlug: 'aatma-bhushan',
    targetViews: ['aatma-bhushan', 'gyan-chakra'],
    description: {
      hi: 'सत्य, संतोष, दया, क्षमा आदि १६ आत्म-गुण एवं ज्ञान-चक्र कार्ड',
      pb: 'ਸਤ, ਸੰਤੋਖ, ਦਇਆ, ਖਿਮਾ ਆਦਿ ੧੬ ਆਤਮ-ਗੁਣ ਤੇ ਗਿਆਨ-ਚੱਕਰ',
      en: '16 sacred virtues of the soul & Gyan-Chakra wisdom notes',
    },
  },
  {
    id: 'slot-18-hukamnama',
    slotNumber: 18,
    category: 'scriptures-darshan',
    label: '#18: पावन दैनिक हुकमनामा साहेब',
    title: {
      hi: '#18: पावन दैनिक हुकमनामा साहेब',
      pb: '#18: ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ ਸਾਹੇਬ',
      en: '#18: Daily Sacred Hukamnama',
    },
    targetSlug: 'hukamnama',
    targetViews: ['hukamnama'],
    description: {
      hi: 'दैनिक हुकमनामा कार्ड हेतु पावन शब्द, राग व भावार्थ',
      pb: 'ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ ਕਾਰਡ ਲਈ ਪਾਵਨ ਸ਼ਬਦ, ਰਾਗ ਤੇ ਅਰਥ',
      en: 'Daily Hukamnama shabads, raag references & translations',
    },
  },
  {
    id: 'slot-19-das-sutra',
    slotNumber: 19,
    category: 'scriptures-darshan',
    label: '#19: सतगुरु कबीर साहेब के १० पावन सूत्र',
    title: {
      hi: '#19: सतगुरु कबीर साहेब के १० पावन सूत्र',
      pb: '#19: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ੧੦ ਪਾਵਨ ਸੂਤਰ',
      en: '#19: Satguru Kabir 10 Sacred Sutras',
    },
    targetSlug: 'das-sutra',
    targetViews: ['das-sutra'],
    description: {
      hi: 'सत्य वचन १० पावन सूत्र कार्ड हेतु सूत्र, दोहे एवं व्याख्या',
      pb: 'ਸਤਿਗੁਰੂ ਜੀ ਦੇ ੧੦ ਪਾਵਨ ਸੂਤਰ ਕਾਰਡ ਲਈ ਸੂਤਰ ਅਤੇ ਵਿਆਖਿਆ',
      en: '10 Foundational Spiritual Sutras & daily practice reflections',
    },
  },
  {
    id: 'slot-20-dainik-chintan',
    slotNumber: 20,
    category: 'scriptures-darshan',
    label: '#20: दैनिक आत्म-चिंतन एवं मनन',
    title: {
      hi: '#20: दैनिक आत्म-चिंतन एवं मनन',
      pb: '#20: ਦੈਨਿਕ ਆਤਮ-ਚਿੰਤਨ ਤੇ ਮਨਨ',
      en: '#20: Dainik Chintan (Daily Contemplation)',
    },
    targetSlug: 'dainik-chintan',
    targetViews: ['dainik-chintan'],
    description: {
      hi: 'अंतर्मुखी विचार, आत्म-मंथन प्रश्न एवं चिंतन संदेश',
      pb: 'ਅੰਤਰਮੁਖੀ ਵਿਚਾਰ, ਆਤਮ-ਮੰਥਨ ਪ੍ਰਸ਼ਨ ਅਤੇ ਚਿੰਤਨ ਸੰਦੇਸ਼',
      en: 'Daily introspection prompts & spiritual contemplation cards',
    },
  },
  {
    id: 'slot-21-damakheda-index',
    slotNumber: 21,
    category: 'scriptures-darshan',
    label: '#21: दामाखेड़ा ग्रन्थ-सूची एवं नित्य क्रम',
    title: {
      hi: '#21: दामाखेड़ा ग्रन्थ-सूची एवं नित्य क्रम',
      pb: '#21: ਦਾਮਾਖੇੜਾ ਗ੍ਰੰਥ-ਸੂਚੀ ਤੇ ਨਿਤ ਕ੍ਰਮ',
      en: '#21: Damakheda Granth Index',
    },
    targetSlug: 'damakheda-index',
    targetViews: ['damakheda-index'],
    description: {
      hi: 'दामाखेड़ा परंपरा के नित्य पाठ क्रम व ग्रन्थ-सूची विवरण',
      pb: 'ਦਾਮਾਖੇੜਾ ਪਰੰਪਰਾ ਦੇ ਨਿਤ ਪਾਠ ਕ੍ਰਮ ਅਤੇ ਗ੍ਰੰਥ-ਸੂਚੀ',
      en: 'Damakheda liturgical schedule and scripture index cards',
    },
  },
  {
    id: 'slot-22-bhajan-repository',
    slotNumber: 22,
    category: 'scriptures-darshan',
    label: '#22: दामाखेड़ा पावन भजन व शबद संग्रह',
    title: {
      hi: '#22: दामाखेड़ा पावन भजन व शबद संग्रह',
      pb: '#22: ਦਾਮਾਖੇੜਾ ਪਾਵਨ ਭਜਨ ਤੇ ਸ਼ਬਦ ਸੰਗ੍ਰਹਿ',
      en: '#22: Damakheda Bhajan & Shabad Repository',
    },
    targetSlug: 'bhajan-repository',
    targetViews: ['bhajan-repository'],
    description: {
      hi: 'पारंपरिक भजन, राग, चौका-आरती पद एवं कीर्तन संग्रह',
      pb: 'ਪਰੰਪਰਾਗਤ ਭਜਨ, ਰਾਗ, ਚੌਕਾ-ਆਰਤੀ ਪਦ ਤੇ ਕੀਰਤਨ',
      en: 'Traditional Kabir Panth bhajans, lyrics and raga notes',
    },
  },

  // =========================================================================
  // CATEGORY 2: Sadhana, Simran & Sacred Audio (#23 – #32)
  // =========================================================================
  {
    id: 'slot-23-dhun',
    slotNumber: 23,
    category: 'sadhana-dhun',
    label: '#23: सत्यनाम पावन धुन',
    title: {
      hi: '#23: सत्यनाम पावन धुन',
      pb: '#23: ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ',
      en: '#23: Satyanaam Sacred Dhun',
    },
    targetSlug: 'dhun',
    targetViews: ['dhun'],
    description: {
      hi: 'सत्यनाम अखंड धुन, एकतारा नाद एवं जाप संदेश',
      pb: 'ਸਤਯਨਾਮ ਅਖੰਡ ਧੁਨ, ਇਕਤਾਰਾ ਨਾਦ ਤੇ ਜਾਪ ਸੰਦੇਸ਼',
      en: 'Satyanaam sacred chanting & ambient soundscape notes',
    },
  },
  {
    id: 'slot-24-mantra-tracker',
    slotNumber: 24,
    category: 'sadhana-dhun',
    label: '#24: नाम-सिमरन आवर्तन (१०८ मनके माला)',
    title: {
      hi: '#24: नाम-सिमरन आवर्तन (१०८ मनके माला)',
      pb: '#24: ਨਾਮ-ਸਿਮਰਨ ਆਵਰਤਨ (੧੦੮ ਮਣਕੇ ਮਾਲਾ)',
      en: '#24: Simran Mala 108 Counter',
    },
    targetSlug: 'mantra-tracker',
    targetViews: ['mantra-tracker'],
    description: {
      hi: 'सत्यनाम जप माला, श्वास-सुमिरन व मंत्र लक्ष्य प्रेरणा',
      pb: 'ਸਤਯਨਾਮ ਜਪ ਮਾਲਾ, ਸ਼ਵਾਸ-ਸੁਮਿਰਨ ਤੇ ਟੀਚੇ ਦੀ ਪ੍ਰੇਰਣਾ',
      en: '108-bead Simran mala guidance & mantra instructions',
    },
  },
  {
    id: 'slot-25-meditation-timer',
    slotNumber: 25,
    category: 'sadhana-dhun',
    label: '#25: सुमिरन ध्यान टाइमर',
    title: {
      hi: '#25: सुमिरन ध्यान टाइमर',
      pb: '#25: ਸੁਮਿਰਨ ਧਿਆਨ ਟਾਈਮਰ',
      en: '#25: Sumiran Meditation Timer',
    },
    targetSlug: 'meditation-timer',
    targetViews: ['meditation-timer'],
    description: {
      hi: 'ध्यान सत्र विधि, शून्य समाधि एवं अनहद नाद निर्देश',
      pb: 'ਧਿਆਨ ਸੈਸ਼ਨ ਵਿਧੀ, ਸੁੰਨ ਸਮਾਧੀ ਤੇ ਅਨਹਦ ਨਾਦ ਨਿਰਦੇਸ਼',
      en: 'Meditation interval prompts & silent contemplation guides',
    },
  },
  {
    id: 'slot-26-spiritual-discipline',
    slotNumber: 26,
    category: 'sadhana-dhun',
    label: '#26: पंचामृत नेम एवं साधना ट्रैकर',
    title: {
      hi: '#26: पंचामृत नेम एवं साधना ट्रैकर',
      pb: '#26: ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ',
      en: '#26: Panchamrit Vows & Discipline Tracker',
    },
    targetSlug: 'spiritual-discipline',
    targetViews: ['spiritual-discipline'],
    description: {
      hi: 'सत्य, दया, शील, क्षमा, संतोष एवं सात्विक दिनचर्या नियम',
      pb: 'ਸਤ, ਦਇਆ, ਸ਼ੀਲ, ਖਿਮਾ, ਸੰਤੋਖ ਅਤੇ ਸਾਤਵਿਕ ਨੇਮ',
      en: 'Panchamrit vows, daily discipline & sattvic routine rules',
    },
  },
  {
    id: 'slot-27-growth-dashboard',
    slotNumber: 27,
    category: 'sadhana-dhun',
    label: '#27: आध्यात्मिक प्रगति डैशबोर्ड',
    title: {
      hi: '#27: आध्यात्मिक प्रगति डैशबोर्ड',
      pb: '#27: ਅਧਿਆਤਮਕ ਪ੍ਰਗਤੀ ਡੈਸ਼ਬੋਰਡ',
      en: '#27: Spiritual Growth Dashboard',
    },
    targetSlug: 'growth-dashboard',
    targetViews: ['growth-dashboard'],
    description: {
      hi: 'साधना स्तर, माइलस्टोन विवरण एवं प्रगति मार्गदर्शन',
      pb: 'ਸਾਧਨਾ ਪੱਧਰ, ਮੀਲ-ਪੱਥਰ ਵੇਰਵਾ ਤੇ ਪ੍ਰਗਤੀ ਮਾਰਗਦਰਸ਼ਨ',
      en: 'Spiritual growth milestones & seeker progress insights',
    },
  },
  {
    id: 'slot-28-sadhana-goals',
    slotNumber: 28,
    category: 'sadhana-dhun',
    label: '#28: दैनिक साधना लक्ष्य एवं संकल्प',
    title: {
      hi: '#28: दैनिक साधना लक्ष्य एवं संकल्प',
      pb: '#28: ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟੀਚੇ ਤੇ ਸੰਕਲਪ',
      en: '#28: Daily Sadhana Goals',
    },
    targetSlug: 'sadhana-goals',
    targetViews: ['sadhana-goals'],
    description: {
      hi: 'दैनिक स्वाध्याय, जप व ध्यान संकल्प कार्ड डेटा',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਵਾਧਿਆਏ, ਜਾਪ ਤੇ ਧਿਆਨ ਸੰਕਲਪ ਕਾਰਡ',
      en: 'Daily sadhana resolutions, targets & streak guidance',
    },
  },
  {
    id: 'slot-29-divine-guidance',
    slotNumber: 29,
    category: 'sadhana-dhun',
    label: '#29: सतगुरु दिव्य आदेश एवं मार्गदर्शन',
    title: {
      hi: '#29: सतगुरु दिव्य आदेश एवं मार्गदर्शन',
      pb: '#29: ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਤੇ ਮਾਰਗਦਰਸ਼ਨ',
      en: '#29: Satguru Divine Guidance (Aadesh)',
    },
    targetSlug: 'divine-guidance',
    targetViews: ['divine-guidance'],
    description: {
      hi: 'जीवन की दुविधाओं के आध्यात्मिक समाधान व दिव्य वचन',
      pb: 'ਜੀਵਨ ਦੀਆਂ ਉਲਝਣਾਂ ਦੇ ਅਧਿਆਤਮਕ ਹੱਲ ਤੇ ਦਿਵਯ ਬਚਨ',
      en: 'Divine counsel cards & spiritual clarity verses',
    },
  },
  {
    id: 'slot-30-community-board',
    slotNumber: 30,
    category: 'sadhana-dhun',
    label: '#30: साधना मंच (सत्संग संवाद)',
    title: {
      hi: '#30: साधना मंच (सत्संग संवाद)',
      pb: '#30: ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਸੰਵਾਦ)',
      en: '#30: Sadhana Community Board',
    },
    targetSlug: 'community-board',
    targetViews: ['community-board'],
    description: {
      hi: 'सत्संग सूचनाएँ, संत अनुभव व सामुदायिक विचार संवाद',
      pb: 'ਸਤਿਸੰਗ ਸੂਚਨਾਵਾਂ, ਸੰਤ ਅਨੁਭਵ ਤੇ ਵਿਚਾਰ ਸੰਵਾਦ',
      en: 'Satsang announcements, saint reflections & community notes',
    },
  },
  {
    id: 'slot-31-audio-library',
    slotNumber: 31,
    category: 'sadhana-dhun',
    label: '#31: अमर वाणी ऑडियो लाइब्रेरी',
    title: {
      hi: '#31: अमर वाणी ऑडियो लाइब्रेरी',
      pb: '#31: ਅਮਰ ਬਾਣੀ ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ',
      en: '#31: Amar Vani Audio Library',
    },
    targetSlug: 'audio-library',
    targetViews: ['audio-library'],
    description: {
      hi: 'पावन कबीर वाणी भजन व ऑडियो ट्रैक विवरण',
      pb: 'ਪਾਵਨ ਕਬੀਰ ਬਾਣੀ ਭਜਨ ਤੇ ਆਡੀਓ ਟ੍ਰੈਕ ਵੇਰਵਾ',
      en: 'Devotional audio tracks, lyrics & recording notes',
    },
  },
  {
    id: 'slot-32-satsang-video',
    slotNumber: 32,
    category: 'sadhana-dhun',
    label: '#32: पावन सत्संग वीडियो संग्रह',
    title: {
      hi: '#32: पावन सत्संग वीडियो संग्रह',
      pb: '#32: ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ ਸੰਗ੍ਰਹਿ',
      en: '#32: Satsang Video Library',
    },
    targetSlug: 'satsang-video',
    targetViews: ['satsang-video'],
    description: {
      hi: 'प्रवचन, कथा व सत्संग वीडियो शीर्षक एवं सारांश',
      pb: 'ਪ੍ਰਵਚਨ, ਕਥਾ ਤੇ ਸਤਿਸੰਗ ਵੀਡੀਓ ਸਿਰਲੇਖ ਤੇ ਸਾਰਾਂਸ਼',
      en: 'Satsang video discourses, summaries & speaker notes',
    },
  },
  {
    id: 'slot-56-satvik-sankalp',
    slotNumber: 56,
    category: 'sadhana-dhun',
    label: '#56: नशामुक्ति व सात्विक संकल्प ट्रैकर',
    title: {
      hi: '#56: नशामुक्ति व सात्विक संकल्प ट्रैकर',
      pb: '#56: ਨਸ਼ਾਮੁਕਤੀ ਤੇ ਸਾਤਵਿਕ ਸੰਕਲਪ ਟਰੈਕਰ',
      en: '#56: De-addiction & Satvik Sankalp Tracker',
    },
    targetSlug: 'satvik-sankalp',
    targetViews: ['satvik-sankalp'],
    description: {
      hi: 'दैनिक सात्विक संकल्प, नशामुक्ति दिन गणना, मील के पत्थर बैज एवं प्रेरक वाणियाँ',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਾਤਵਿਕ ਸੰਕਲਪ, ਨਸ਼ਾਮੁਕਤੀ ਦਿਨ ਗਿਣਤੀ ਅਤੇ ਪ੍ਰੇਰਕ ਬਾਣੀ',
      en: 'Clean living daily streaks, milestone badges & vows tracker',
    },
  },

  // =========================================================================
  // CATEGORY 3: Wisdom, Lineage & Quizzes (#33 – #42)
  // =========================================================================
  {
    id: 'slot-33-swadhyay',
    slotNumber: 33,
    category: 'wisdom-quizzes',
    label: '#33: सतगुरु साखी स्वाध्याय पद्धति (११ चरण)',
    title: {
      hi: '#33: सतगुरु साखी स्वाध्याय पद्धति (११ चरण)',
      pb: '#33: ਸਤਿਗੁਰੂ ਸਾਖੀ ਸਵਾਧਿਆਏ ਵਿਧੀ (੧੧ ਚਰਣ)',
      en: '#33: 11-Step Swadhyay & Quiz Method',
    },
    targetSlug: 'swadhyay',
    targetViews: ['swadhyay', 'quiz'],
    description: {
      hi: '११-चरणीय स्वाध्याय विश्लेषण, दृष्टांत एवं प्रश्नोत्तरी डेटा',
      pb: '੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ ਵਿਆਖਿਆ, ਦ੍ਰਿਸ਼ਟਾਂਤ ਤੇ ਪ੍ਰਸ਼ਨਾਵਲੀ',
      en: '11-step deep Swadhyay notes, parables & quiz commentary',
    },
  },
  {
    id: 'slot-34-ulatvasi-quiz',
    slotNumber: 34,
    category: 'wisdom-quizzes',
    label: '#34: उलटबांसी 3D पहेली प्रश्नोत्तरी',
    title: {
      hi: '#34: उलटबांसी 3D पहेली प्रश्नोत्तरी',
      pb: '#34: ਉਲਟਬਾਂਸੀ 3D ਬੁਝਾਰਤ ਕੁਇਜ਼',
      en: '#34: Ulatbaasi 3D Quiz & Quest',
    },
    targetSlug: 'ulatvasi-quiz',
    targetViews: ['ulatvasi-quiz'],
    description: {
      hi: 'उलटबांसी 3D गेमिंग प्रश्नोत्तरी के गूढ़ प्रश्न व उत्तर व्याख्या',
      pb: 'ਉਲਟਬਾਂਸੀ 3D ਕੁਇਜ਼ ਦੇ ਗੂੜ੍ਹ ਪ੍ਰਸ਼ਨ ਤੇ ਉੱਤਰ ਵਿਆਖਿਆ',
      en: 'Ulatbaasi 3D quiz riddles, mystic keys & explanations',
    },
  },
  {
    id: 'slot-35-doha-memory',
    slotNumber: 35,
    category: 'wisdom-quizzes',
    label: '#35: दोहा स्मृति ट्रेनर (चेतावनी वाणी)',
    title: {
      hi: '#35: दोहा स्मृति ट्रेनर (चेतावनी वाणी)',
      pb: '#35: ਦੋਹਾ ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ',
      en: '#35: Doha Memory Trainer',
    },
    targetSlug: 'doha-memory',
    targetViews: ['doha-memory'],
    description: {
      hi: 'कंठस्थ करने हेतु पावन दोहे, रिक्त स्थान व अर्थ',
      pb: 'ਕੰਠ ਕਰਨ ਲਈ ਪਾਵਨ ਦੋਹੇ, ਖ਼ਾਲੀ ਥਾਂ ਤੇ ਅਰਥ',
      en: 'Couple memorization exercises, missing words & meanings',
    },
  },
  {
    id: 'slot-36-chetavani-saarang',
    slotNumber: 36,
    category: 'wisdom-quizzes',
    label: '#36: चेतावनी सारंग (१० प्रमुख दोहे)',
    title: {
      hi: '#36: चेतावनी सारंग (१० प्रमुख दोहे)',
      pb: '#36: ਚੇਤਾਵਨੀ ਸਾਰੰਗ (੧੦ ਪ੍ਰਮੁੱਖ ਦੋਹੇ)',
      en: '#36: Chetawani Saarang',
    },
    targetSlug: 'chetavani-saarang',
    targetViews: ['chetavani-saarang'],
    description: {
      hi: 'काल के चक्र से जागृति देने वाले चेतावनी सारंग दोहे',
      pb: 'ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਸੁਚੇਤ ਕਰਨ ਵਾਲੇ ਚੇਤਾਵਨੀ ਦੋਹੇ',
      en: 'Awakening & warning couplets of Chetawani Saarang',
    },
  },
  {
    id: 'slot-37-shabd-kosha',
    slotNumber: 37,
    category: 'wisdom-quizzes',
    label: '#37: सतगुरु कबीर शब्द-अमृत कोश (शब्दावली)',
    title: {
      hi: '#37: सतगुरु कबीर शब्द-अमृत कोश (शब्दावली)',
      pb: '#37: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਕੋਸ਼ (ਸ਼ਬਦਾਵਲੀ)',
      en: '#37: Shabd-Amrit Kosha (Sacred Glossary)',
    },
    targetSlug: 'shabd-kosha',
    targetViews: ['shabd-kosha'],
    description: {
      hi: 'संधुक्कड़ी, योग व गूढ़ आध्यात्मिक शब्दों का शब्दकोश डेटा',
      pb: 'ਸੰਧੁੱਕੜੀ, ਯੋਗ ਅਤੇ ਅਧਿਆਤਮਕ ਸ਼ਬਦਾਂ ਦਾ ਕੋਸ਼ ਡੇਟਾ',
      en: 'Lexicon entries, archaic Kabir terms & spiritual definitions',
    },
  },
  {
    id: 'slot-38-life-journey',
    slotNumber: 38,
    category: 'wisdom-quizzes',
    label: '#38: सतगुरु कबीर साहेब परिचय (चारों युग)',
    title: {
      hi: '#38: सतगुरु कबीर साहेब परिचय (चारों युग)',
      pb: '#38: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ (ਚਾਰੇ ਜੁੱਗ)',
      en: '#38: Satguru Kabir Biography & Four Yugas',
    },
    targetSlug: 'life-journey',
    targetViews: ['life-journey'],
    description: {
      hi: 'सत्ययुग, त्रेता, द्वापर व कलयुग में सतगुरु कबीर साहेब प्राकट्य परिचय',
      pb: 'ਚਾਰਾਂ ਯੁਗਾਂ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪਰਿਚਯ',
      en: 'Historical biography & four-era manifestation records',
    },
  },
  {
    id: 'slot-39-sacred-leelas',
    slotNumber: 39,
    category: 'wisdom-quizzes',
    label: '#39: सतगुरु अमर लीलाएं एवं पावन कथाएं',
    title: {
      hi: '#39: सतगुरु अमर लीलाएं एवं पावन कथाएं',
      pb: '#39: ਸਤਿਗੁਰੂ ਅਮਰ ਲੀਲ੍ਹਾਵਾਂ ਤੇ ਪਾਵਨ ਕਥਾਵਾਂ',
      en: '#39: Sacred Leelas & Episodes',
    },
    targetSlug: 'sacred-leelas',
    targetViews: ['sacred-leelas'],
    description: {
      hi: 'सतगुरु कबीर साहेब जी की २५ पावन लीलाएं एवं दृष्टांत कथाएं',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀਆਂ ਪਾਵਨ ਲੀਲ੍ਹਾ-ਕਥਾਵਾਂ',
      en: 'Sacred leelas, parables & historical episodes',
    },
  },
  {
    id: 'slot-40-acharya-parampara',
    slotNumber: 40,
    category: 'wisdom-quizzes',
    label: '#40: आचार्य परंपरा इतिहास (पावन वंशावली)',
    title: {
      hi: '#40: आचार्य परंपरा इतिहास (पावन वंशावली)',
      pb: '#40: ਆਚਾਰਯ ਪਰੰਪਰਾ ਇਤਿਹਾਸ (ਪਾਵਨ ਵੰਸ਼ਾਵਲੀ)',
      en: '#40: Acharya Parampara History',
    },
    targetSlug: 'acharya-parampara',
    targetViews: ['acharya-parampara'],
    description: {
      hi: 'धनी धर्मदास साहेब जी एवं वंश बयालीस आचार्य परंपरा विवरण',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਤੇ ਵੰਸ਼ ਬਯਾਲੀਸ ਆਚਾਰਯ ਪਰੰਪਰਾ',
      en: 'Vansh Bayalees lineage, titles & historical notes',
    },
  },
  {
    id: 'slot-41-discourse-engine',
    slotNumber: 41,
    category: 'wisdom-quizzes',
    label: '#41: ५-चरणीय पावन प्रवचन इंजन',
    title: {
      hi: '#41: ५-चरणीय पावन प्रवचन इंजन',
      pb: '#41: ੫-ਚਰਣੀ ਪਾਵਨ ਪ੍ਰਵਚਨ ਇੰਜਣ',
      en: '#41: 5-Step Discourse Engine',
    },
    targetSlug: 'discourse-engine',
    targetViews: ['discourse-engine'],
    description: {
      hi: 'सत्संग प्रवचन रूपरेखा, सार-तत्व एवं अभ्यास चरण',
      pb: 'ਸਤਿਸੰਗ ਪ੍ਰਵਚਨ ਰੂਪਰੇਖਾ, ਸਾਰ-ਤੱਤ ਤੇ ਅਭਿਆਸ ਚਰਣ',
      en: 'Structured 5-step discourse talks & takeaways',
    },
  },
  {
    id: 'slot-42-prashnottari',
    slotNumber: 42,
    category: 'wisdom-quizzes',
    label: '#42: पंथिक प्रश्नोत्तरी (चौका-आरती विधि सवाल-जवाब)',
    title: {
      hi: '#42: पंथिक प्रश्नोत्तरी (चौका-आरती विधि सवाल-जवाब)',
      pb: '#42: ਪੰਥਕ ਪ੍ਰਸ਼ਨੋਤਰੀ (ਚੌਕਾ-ਆਰਤੀ ਵਿਧੀ)',
      en: '#42: Prashnottari (Sawal-Jawab & Chouka Vidhi)',
    },
    targetSlug: 'prashnottari',
    targetViews: ['grantha', 'swadhyay'],
    description: {
      hi: 'चौका-आरती विधि, परवाना, गुरु दीक्षा एवं पंथिक प्रश्नोत्तरी',
      pb: 'ਚੌਕਾ-ਆਰਤੀ ਵਿਧੀ, ਪਰਵਾਨਾ ਤੇ ਪੰਥਕ ਸਵਾਲ-ਜਵਾਬ',
      en: 'Panthic Q&A on Chouka Aarti rituals & core beliefs',
    },
  },
  {
    id: 'slot-57-kabir-gyan-quiz',
    slotNumber: 57,
    category: 'wisdom-quizzes',
    label: '#57: कबीर ज्ञान प्रश्नोत्तरी एवं प्रमाण-पत्र',
    title: {
      hi: '#57: कबीर ज्ञान प्रश्नोत्तरी एवं प्रमाण-पत्र',
      pb: '#57: ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ ਤੇ ਪ੍ਰਮਾਣ-ਪੱਤਰ',
      en: '#57: Kabir Gyan Quiz & Certificate',
    },
    targetSlug: 'kabir-gyan-quiz',
    targetViews: ['kabir-gyan-quiz'],
    description: {
      hi: 'सतगुरु कबीर साहेब एवं वंश परंपरा आधारित ६ प्रश्नों की परीक्षा व डिजिटल प्रमाण-पत्र',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਤੇ ਵੰਸ਼ ਪਰੰਪਰਾ ਉੱਤੇ ੬ ਪ੍ਰਸ਼ਨਾਂ ਦੀ ਪ੍ਰੀਖਿਆ ਤੇ ਪ੍ਰਮਾਣ-ਪੱਤਰ',
      en: 'Interactive 6-question Kabir philosophy quiz with digital certificate',
    },
  },
  {
    id: 'slot-58-vansh-bayalis',
    slotNumber: 58,
    category: 'wisdom-quizzes',
    label: '#58: वंश बयालीस की पावन महिमा',
    title: {
      hi: '#58: वंश बयालीस की पावन महिमा',
      pb: '#58: ਵੰਸ਼ ਬਿਆਲੀਸ ਦੀ ਪਾਵਨ ਮਹਿਮਾ',
      en: '#58: Glory of Vansh Bayalis',
    },
    targetSlug: 'vansh-bayalis',
    targetViews: ['vansh-bayalis'],
    description: {
      hi: 'धनी धर्मदास साहेब जी के प्रति सतगुरु कबीर साहेब का वरदान व ४२ वंशों की अटल महिमा',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਪ੍ਰਤੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਵਰਦਾਨ ਤੇ ੪੨ ਵੰਸ਼ਾਂ ਦੀ ਮਹਿਮਾ',
      en: 'Complete 4-part guide on Vansh Bayalis sacred lineage & divine promise',
    },
  },

  // =========================================================================
  // CATEGORY 4: Exploration, Calendar & Tools (#43 – #50)
  // =========================================================================
  {
    id: 'slot-43-jantri',
    slotNumber: 43,
    category: 'exploration-tools',
    label: '#43: साहेब जंत्री (आध्यात्मिक कैलेंडर)',
    title: {
      hi: '#43: साहेब जंत्री (आध्यात्मिक कैलेंडर)',
      pb: '#43: ਸਾਹੇਬ ਜੰਤਰੀ (ਰੂਹਾਨੀ ਕੈਲੰਡਰ)',
      en: '#43: Saheb Jantri (Spiritual Almanac)',
    },
    targetSlug: 'jantri',
    targetViews: ['jantri'],
    description: {
      hi: 'पूर्णिमा, अमावस्या, संक्रांति, कबीर जयंती एवं पर्व तिथियाँ',
      pb: 'ਪੂਰਨਮਾਸ਼ੀ, ਮੱਸਿਆ, ਸੰਗਰਾਂਦ ਤੇ ਪਾਵਨ ਤਿਥੀਆਂ',
      en: 'Sacred lunar dates, festivals & Panth calendar events',
    },
  },
  {
    id: 'slot-44-sacred-ashrams',
    slotNumber: 44,
    category: 'exploration-tools',
    label: '#44: सतगुरु पावन आश्रम व तीर्थ धाम',
    title: {
      hi: '#44: सतगुरु पावन आश्रम व तीर्थ धाम',
      pb: '#44: ਸਤਿਗੁਰੂ ਪਾਵਨ ਆਸ਼ਰਮ ਤੇ ਤੀਰਥ ਅਸਥਾਨ',
      en: '#44: Sacred Ashrams & Pilgrimages',
    },
    targetSlug: 'sacred-ashrams',
    targetViews: ['sacred-ashrams'],
    description: {
      hi: 'लहरतारा, कबीर चौरा, मगहर, बांधवगढ़ व दामाखेड़ा धाम विवरण',
      pb: 'ਲਹਿਰਤਾਰਾ, ਕਬੀਰ ਚੌਰਾ, ਮਗਹਰ ਤੇ ਦਾਮਾਖੇੜਾ ਧਾਮ ਵੇਰਵਾ',
      en: 'Pilgrimage guides, histories & visiting details for Ashrams',
    },
  },
  {
    id: 'slot-45-universe-map',
    slotNumber: 45,
    category: 'exploration-tools',
    label: '#45: ब्रह्मांड दर्शन (२१ ब्रह्मांड व सत्यलोक नक्शा)',
    title: {
      hi: '#45: ब्रह्मांड दर्शन (२१ ब्रह्मांड व सत्यलोक नक्शा)',
      pb: '#45: ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ (੨੧ ਬ੍ਰਹਮੰਡ ਤੇ ਸਤਿਲੋਕ)',
      en: '#45: Universe Map (Brahmand Darshan)',
    },
    targetSlug: 'universe-map',
    targetViews: ['universe-map'],
    description: {
      hi: 'पिंड-ब्रह्मांड, २१ ब्रह्मांड व अमरलोक/सत्यलोक आरोहण विवरण',
      pb: 'ਪਿੰਡ-ਬ੍ਰਹਮੰਡ, ੨੧ ਬ੍ਰਹਮੰਡ ਤੇ ਅਮਰਲੋਕ ਨਕਸ਼ਾ ਵੇਰਵਾ',
      en: 'Cosmological map layers, realms & Amar Lok journey',
    },
  },
  {
    id: 'slot-46-deep-search',
    slotNumber: 46,
    category: 'exploration-tools',
    label: '#46: गहन वाणी एवं शब्द खोज',
    title: {
      hi: '#46: गहन वाणी एवं शब्द खोज',
      pb: '#46: ਗਹਿਨ ਬਾਣੀ ਤੇ ਸ਼ਬਦ ਖੋਜ',
      en: '#46: Deep Scripture Search',
    },
    targetSlug: 'deep-search',
    targetViews: ['deep-search'],
    description: {
      hi: 'खोज इंजन हेतु विशेष शब्द-कोश, टैग एवं अनुक्रमित पद',
      pb: 'ਖੋਜ ਇੰਜਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਸ਼ਬਦ-ਕੋਸ਼ ਤੇ ਟੈਗ',
      en: 'Additional searchable scripture entries and keyword tags',
    },
  },
  {
    id: 'slot-47-diary',
    slotNumber: 47,
    category: 'exploration-tools',
    label: '#47: आत्म-चिंतन निजी डायरी',
    title: {
      hi: '#47: आत्म-चिंतन निजी डायरी',
      pb: '#47: ਆਤਮ-ਚਿੰਤਨ ਨਿੱਜੀ ਡਾਇਰੀ',
      en: '#47: Spiritual Contemplation Diary',
    },
    targetSlug: 'diary',
    targetViews: ['diary'],
    description: {
      hi: 'डायरी हेतु पूर्व-लिखित आत्म-मंथन पृष्ठ, आभार बिंदु व संकल्प',
      pb: 'ਡਾਇਰੀ ਲਈ ਆਤਮ-ਮੰਥਨ ਪ੍ਰਸ਼ਨ, ਸ਼ੁਕਰਾਨਾ ਤੇ ਸੰਕਲਪ',
      en: 'Guided spiritual journal prompts, gratitude templates & notes',
    },
  },
  {
    id: 'slot-48-nature-wallpaper',
    slotNumber: 48,
    category: 'exploration-tools',
    label: '#48: कुदरत वॉलपेपर जनरेटर',
    title: {
      hi: '#48: कुदरत वॉलपेपर जनरेटर',
      pb: '#48: ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਜਨਰੇਟਰ',
      en: '#48: Nature Wallpaper Engine',
    },
    targetSlug: 'nature-wallpaper',
    targetViews: ['nature-wallpaper'],
    description: {
      hi: 'वॉलपेपर पर अंकित करने हेतु पावन सत्यनाम सुविचार व दोहे',
      pb: 'ਵਾਲਪੇਪਰ ਉੱਤੇ ਅੰਕਿਤ ਕਰਨ ਲਈ ਪਾਵਨ ਸਤਯਨਾਮ ਬਚਨ',
      en: 'Curated sacred quotes & couplets for nature wallpapers',
    },
  },
  {
    id: 'slot-49-auto-correct',
    slotNumber: 49,
    category: 'exploration-tools',
    label: '#49: पावन वाणी ऑटो-करेक्ट उपकरण',
    title: {
      hi: '#49: पावन वाणी ऑटो-करेक्ट उपकरण',
      pb: '#49: ਪਾਵਨ ਬਾਣੀ ਆਟੋ-ਕਰੈਕਟ ਉਪਕਰਣ',
      en: '#49: Sacred Text Auto-Correct Tool',
    },
    targetSlug: 'auto-correct',
    targetViews: ['auto-correct'],
    description: {
      hi: 'पावन वाणी के शुद्ध शब्द रूप, वर्तनी नियम व शब्दावली सुधार',
      pb: 'ਪਾਵਨ ਬਾਣੀ ਦੇ ਸ਼ੁੱਧ ਸ਼ਬਦ ਜੋੜ ਤੇ ਨਿਯਮ',
      en: 'Sacred scripture spelling & transliteration normalization rules',
    },
  },
  {
    id: 'slot-50-health-diagnostic',
    slotNumber: 50,
    category: 'exploration-tools',
    label: '#50: ऐप सेहत व ऑफ़लाइन निदान',
    title: {
      hi: '#50: ऐप सेहत व ऑफ़लाइन निदान',
      pb: '#50: ਐਪ ਸਿਹਤ ਤੇ ਆਫ਼ਲਾਈਨ ਨਿਦਾਨ',
      en: '#50: App Health & Offline Diagnostics',
    },
    targetSlug: 'health-diagnostic',
    targetViews: ['health-diagnostic'],
    description: {
      hi: 'ऑफ़लाइन डेटा स्थिति, वर्ज़न नोट्स एवं सिस्टम सत्यापन जानकारी',
      pb: 'ਆਫ਼ਲਾਈਨ ਡੇਟਾ ਸਥਿਤੀ ਅਤੇ ਸਿਸਟਮ ਪ੍ਰਮਾਣਿਕਤਾ ਜਾਣਕਾਰੀ',
      en: 'Offline cache notes, release verification & system guidance',
    },
  },
  {
    id: 'slot-55-vani-card-maker',
    slotNumber: 55,
    category: 'exploration-tools',
    label: '#55: कबीर वाणी कार्ड मेकर (Greeting Studio)',
    title: {
      hi: '#55: कबीर वाणी कार्ड मेकर',
      pb: '#55: ਕਬੀਰ ਬਾਣੀ ਕਾਰਡ ਮੇਕਰ',
      en: '#55: Kabir Vani Greeting Card Maker',
    },
    targetSlug: 'vani-card-maker',
    targetViews: ['vani-card-maker'],
    description: {
      hi: 'सुंदर आध्यात्मिक थीम व सौजन्य नाम के साथ पावन संदेश कार्ड डाउनलोड और साझा करें',
      pb: 'ਸੁੰਦਰ ਰੂਹਾਨੀ ਥੀਮ ਤੇ ਆਪਣੇ ਨਾਮ ਨਾਲ ਪਾਵਨ ਸੰਦੇਸ਼ ਕਾਰਡ ਬਣਾਓ ਤੇ ਸਾਂਝਾ ਕਰੋ',
      en: 'Design, download and share spiritual greeting cards with themes and courtesy name',
    },
  },

  // =========================================================================
  // CATEGORY 5: User Guide, About Us & App Policies (#51 – #54)
  // =========================================================================
  {
    id: 'slot-51-user-guide',
    slotNumber: 51,
    category: 'guide-policies',
    label: '#51: उपयोगकर्ता मार्गदर्शिका (User Guide)',
    title: {
      hi: '#51: उपयोगकर्ता मार्गदर्शिका',
      pb: '#51: ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ',
      en: '#51: User Guide',
    },
    targetSlug: 'user-guide',
    targetViews: [],
    description: {
      hi: 'ऐप उपयोग विधि, अनुभाग निर्देश एवं त्वरित सहायता बिंदु',
      pb: 'ਐਪ ਵਰਤੋਂ ਵਿਧੀ ਅਤੇ ਸਹਾਇਤਾ ਨਿਰਦੇਸ਼',
      en: 'Step-by-step usage tips & helpful sections for seekers',
    },
  },
  {
    id: 'slot-52-about-us',
    slotNumber: 52,
    category: 'guide-policies',
    label: '#52: हमारे बारे में (About Us)',
    title: {
      hi: '#52: हमारे बारे में',
      pb: '#52: ਸਾਡੇ ਬਾਰੇ',
      en: '#52: About Us',
    },
    targetSlug: 'about-us',
    targetViews: [],
    description: {
      hi: 'साहेब वर्ल्ड मिशन, सेवा परिचय एवं संपादकीय विवरण',
      pb: 'ਸਾਹੇਬ ਵਰਲਡ ਮਿਸ਼ਨ ਅਤੇ ਸੰਪਾਦਕੀ ਜਾਣ-ਪਛਾਣ',
      en: 'Saheb World mission statement, team & editorial overview',
    },
  },
  {
    id: 'slot-53-disclaimer',
    slotNumber: 53,
    category: 'guide-policies',
    label: '#53: अस्वीकरण (Disclaimer)',
    title: {
      hi: '#53: अस्वीकरण',
      pb: '#53: ਅਸਵੀਕਾਰਤਾ',
      en: '#53: Disclaimer',
    },
    targetSlug: 'disclaimer',
    targetViews: [],
    description: {
      hi: 'ग्रन्थ संदर्भ, ऐतिहासिक मान्यताएं व साधना संबंधी अस्वीकरण सूचना',
      pb: 'ਗ੍ਰੰਥ ਹਵਾਲੇ ਅਤੇ ਸਾਧਨਾ ਸਬੰਧੀ ਅਸਵੀਕਾਰਤਾ ਸੂਚਨਾ',
      en: 'Scriptural sources notice and practice advisory',
    },
  },
  {
    id: 'slot-54-privacy-policy',
    slotNumber: 54,
    category: 'guide-policies',
    label: '#54: गोपनीयता नीति (Privacy Policy)',
    title: {
      hi: '#54: गोपनीयता नीति',
      pb: '#54: ਗੋਪਨੀਯਤਾ ਨੀਤੀ',
      en: '#54: Privacy Policy',
    },
    targetSlug: 'privacy-policy',
    targetViews: [],
    description: {
      hi: 'डेटा निजता, ऑफ़लाइन संग्रहण नीति एवं संपर्क विवरण',
      pb: 'ਡੇਟਾ ਗੋਪਨੀਯਤਾ ਅਤੇ ਲੋਕਲ ਸਟੋਰੇਜ ਨੀਤੀ',
      en: 'Data privacy terms, offline storage notice & contact details',
    },
  },
];

export const ADMIN_APP_CARD_SLOTS = ADMIN_GRANTH_SLOTS;

export interface JsonValidationResult {
  valid: boolean;
  errorHi?: string;
  errorEn?: string;
  summaryHi?: string;
  summaryEn?: string;
  itemCount?: number;
  parsed?: unknown;
}

export interface SlotStatusInfo {
  slotId: AdminGranthSlotId;
  loaded: boolean;
  itemCount: number;
  updatedAt: number | null;
  byteSize: number;
}

interface StoredSlotEnvelope {
  rawJson: string;
  updatedAt: number;
  itemCount: number;
}

export interface InjectedCardEntry {
  id: string;
  title: LocalizedText;
  lines: LocalizedTextLines;
  context?: LocalizedText;
}

export interface LocalizedTextLines {
  hi: string[];
  pb: string[];
  en: string[];
}

export interface InjectedViewPanelData {
  slot: AdminGranthSlotDefinition;
  status: SlotStatusInfo;
  entries: InjectedCardEntry[];
}

const memoryRawStore = new Map<AdminGranthSlotId, StoredSlotEnvelope>();

function getStorageKey(slotId: AdminGranthSlotId): string {
  return `${STORAGE_KEY_PREFIX}${slotId}`;
}

function openAdminDb(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const req = window.indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function idbPutSlot(slotId: AdminGranthSlotId, envelope: StoredSlotEnvelope): Promise<void> {
  const db = await openAdminDb();
  if (!db) return;
  try {
    await new Promise<void>((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(envelope, slotId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // Ignore IDB failures gracefully
  } finally {
    db.close();
  }
}

async function idbDeleteSlot(slotId: AdminGranthSlotId): Promise<void> {
  const db = await openAdminDb();
  if (!db) return;
  try {
    await new Promise<void>((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).delete(slotId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // Ignore IDB failures gracefully
  } finally {
    db.close();
  }
}

async function idbClearAllSlots(): Promise<void> {
  const db = await openAdminDb();
  if (!db) return;
  try {
    await new Promise<void>((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // Ignore IDB failures gracefully
  } finally {
    db.close();
  }
}

export async function hydrateAdminSlotsFromIndexedDB(): Promise<void> {
  const db = await openAdminDb();
  if (!db) return;
  try {
    await new Promise<void>((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.openCursor();
      let changed = false;
      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) {
          const slotId = cursor.key as AdminGranthSlotId;
          const val = cursor.value as StoredSlotEnvelope | undefined;
          if (val && typeof val.rawJson === 'string' && !memoryRawStore.has(slotId)) {
            memoryRawStore.set(slotId, val);
            changed = true;
          }
          cursor.continue();
        } else {
          if (changed && typeof window !== 'undefined') {
            window.dispatchEvent(
              new CustomEvent(ADMIN_SLOTS_UPDATED_EVENT, { detail: { slotId: 'all', action: 'hydrate' } })
            );
          }
          resolve();
        }
      };
      req.onerror = () => resolve();
    });
  } catch {
    // Ignore IDB failures gracefully
  } finally {
    db.close();
  }
}

function readEnvelope(slotId: AdminGranthSlotId): StoredSlotEnvelope | null {
  if (memoryRawStore.has(slotId)) {
    return memoryRawStore.get(slotId)!;
  }
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(getStorageKey(slotId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.rawJson === 'string') {
      const envelope: StoredSlotEnvelope = {
        rawJson: parsed.rawJson,
        updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : Date.now(),
        itemCount: typeof parsed.itemCount === 'number' ? parsed.itemCount : countParsedItems(JSON.parse(parsed.rawJson)),
      };
      memoryRawStore.set(slotId, envelope);
      return envelope;
    }
    const itemCount = countParsedItems(parsed);
    const envelope: StoredSlotEnvelope = {
      rawJson: raw,
      updatedAt: Date.now(),
      itemCount,
    };
    memoryRawStore.set(slotId, envelope);
    return envelope;
  } catch {
    return null;
  }
}

function countParsedItems(parsed: unknown): number {
  if (!parsed || typeof parsed !== 'object') return 0;
  if (Array.isArray(parsed)) return parsed.length;
  const obj = parsed as Record<string, unknown>;
  if (Array.isArray(obj.chapters)) return obj.chapters.length;
  if (Array.isArray(obj.sections)) return obj.sections.length;
  if (Array.isArray(obj.verses)) return obj.verses.length;
  if (Array.isArray(obj.items)) return obj.items.length;
  if (Array.isArray(obj.lines)) return 1;
  return Object.keys(obj).length > 0 ? 1 : 0;
}

export function validateAdminSlotJson(rawText: string): JsonValidationResult {
  const trimmed = (rawText || '').trim();
  if (!trimmed) {
    return {
      valid: false,
      errorHi: 'कृपया पहले JSON डेटा पेस्ट करें।',
      errorEn: 'Please paste JSON data before injecting.',
    };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch (err) {
    const rawMsg = err instanceof Error ? err.message : String(err);
    const posMatch = rawMsg.match(/position\s+(\d+)/i) || rawMsg.match(/line\s+(\d+)\s+column\s+(\d+)/i);
    let hintHi = 'कोमा (,), डबल कोट्स ("") या ब्रैकेट ({ } / [ ]) की सिंटैक्स जाँचें।';
    if (posMatch && posMatch[1] && posMatch[2]) {
      hintHi = `पंक्ति ${posMatch[1]}, स्तंभ ${posMatch[2]} के पास कोमा/कोट्स/ब्रैकेट त्रुटि है।`;
    } else if (posMatch && posMatch[1]) {
      const pos = Number(posMatch[1]);
      const snippet = trimmed.slice(0, pos);
      const lineNum = snippet.split('\n').length;
      const colNum = pos - snippet.lastIndexOf('\n');
      hintHi = `पंक्ति ${lineNum}, स्तंभ ${colNum} के पास सिंटैक्स त्रुटि है (कोमा या ब्रैकेट जाँचें)।`;
    }
    return {
      valid: false,
      errorHi: `JSON सिंटैक्स त्रुटि: ${hintHi}`,
      errorEn: `JSON Syntax Error: ${rawMsg}`,
    };
  }

  if (!parsed || typeof parsed !== 'object') {
    return {
      valid: false,
      errorHi: 'JSON केवल ऑब्जेक्ट `{ ... }` अथवा सूची `[ ... ]` के रूप में होना चाहिए।',
      errorEn: 'Root JSON value must be an Object `{ ... }` or Array `[ ... ]`.',
    };
  }

  if (Array.isArray(parsed) && parsed.length === 0) {
    return {
      valid: false,
      errorHi: 'रिक्त सूची `[]` इंजेक्ट नहीं की जा सकती। कम से कम १ अध्याय या पद जोड़ें।',
      errorEn: 'Cannot inject an empty array `[]`. Provide at least one chapter or item.',
    };
  }

  if (!Array.isArray(parsed) && Object.keys(parsed as Record<string, unknown>).length === 0) {
    return {
      valid: false,
      errorHi: 'रिक्त ऑब्जेक्ट `{}` इंजेक्ट नहीं किया जा सकता। कृपया वैध डेटा भरें।',
      errorEn: 'Cannot inject an empty object `{}`. Provide valid fields.',
    };
  }

  const itemCount = countParsedItems(parsed);
  if (itemCount === 0) {
    return {
      valid: false,
      errorHi: 'JSON संरचना में कोई पठनीय अध्याय, पंक्ति या प्रविष्टि नहीं मिली।',
      errorEn: 'No readable chapters, lines, or entries detected in the JSON structure.',
    };
  }

  return {
    valid: true,
    itemCount,
    parsed,
    summaryHi: `✓ वैध JSON संरचना सत्यापित (${itemCount} इकाई/प्रविष्टि लोड होने के लिए तैयार)`,
    summaryEn: `Valid JSON verified (${itemCount} item(s)/chapter(s) ready to inject)`,
  };
}

export function getSlotRawJson(slotId: AdminGranthSlotId): string {
  return readEnvelope(slotId)?.rawJson || '';
}

export function getSlotParsedData(slotId: AdminGranthSlotId): unknown | null {
  const env = readEnvelope(slotId);
  if (!env?.rawJson) return null;
  try {
    return JSON.parse(env.rawJson);
  } catch {
    return null;
  }
}

export function getSlotStatus(slotId: AdminGranthSlotId): SlotStatusInfo {
  const env = readEnvelope(slotId);
  if (!env || !env.rawJson) {
    return {
      slotId,
      loaded: false,
      itemCount: 0,
      updatedAt: null,
      byteSize: 0,
    };
  }
  return {
    slotId,
    loaded: true,
    itemCount: env.itemCount || 1,
    updatedAt: env.updatedAt,
    byteSize: env.rawJson.length,
  };
}

export function getAllSlotStatuses(): Record<AdminGranthSlotId, SlotStatusInfo> {
  const result = {} as Record<AdminGranthSlotId, SlotStatusInfo>;
  for (const slot of ADMIN_GRANTH_SLOTS) {
    result[slot.id] = getSlotStatus(slot.id);
  }
  return result;
}

export function getSlotIdForGranthSlug(slug: string): AdminGranthSlotId | null {
  const matched = ADMIN_GRANTH_SLOTS.find((s) => s.targetSlug === slug);
  return matched ? matched.id : null;
}

export function getSampleJsonForSlot(slotId: AdminGranthSlotId): string {
  const slot = ADMIN_GRANTH_SLOTS.find((s) => s.id === slotId);
  if (slot?.sampleJson) return slot.sampleJson;

  if (slotId === 'slot-1-nitnem') {
    return JSON.stringify(
      [
        {
          id: 'prabhat-aarambh-vandana',
          title: '१. मंगल वंदना (प्रभात पाठ)',
          lines: [
            'सत्यनाम सतगुरु कबीर साहेब, आदि अनादि अनंत ।',
            'बंदगी साहेब पद कमल, मिटे सकल भव फंद ॥',
          ],
          context: 'प्रभात वेला में सतगुरु कबीर साहेब एवं सत्यनाम की मंगल वंदना।',
        },
      ],
      null,
      2
    );
  }

  if (slot?.category === 'sadhana-dhun') {
    return JSON.stringify(
      [
        {
          title: `${slot.title.hi.replace(/^#\d+:\s*/, '')} — विशेष साधना सूत्र`,
          lines: [
            'श्वास-श्वास में सत्यनाम का अविरल सुमिरन करें।',
            'मन को शांत कर सतगुरु कबीर साहेब के चरणों में ध्यान लगाएं।',
          ],
          context: 'दैनिक साधना, सिमरन एवं आत्मिक स्थिरता हेतु पावन निर्देश।',
        },
      ],
      null,
      2
    );
  }

  if (slot?.category === 'wisdom-quizzes') {
    return JSON.stringify(
      [
        {
          title: `${slot.title.hi.replace(/^#\d+:\s*/, '')} — पावन प्रविष्टि`,
          lines: [
            'सतगुरु कबीर साहेब ने सत्यनाम के सारशब्द द्वारा जीव का मार्गदर्शन किया।',
            'सच्चे विवेक व अभ्यास से जीवन में परम शांति प्राप्त होती है।',
          ],
          context: 'आध्यात्मिक बोध, इतिहास एवं स्वाध्याय चिंतन हेतु प्रमाणिक विवरण।',
        },
      ],
      null,
      2
    );
  }

  if (slot?.category === 'exploration-tools' || slot?.category === 'guide-policies') {
    return JSON.stringify(
      [
        {
          title: `${slot.title.hi.replace(/^#\d+:\s*/, '')} — अद्यतन जानकारी`,
          lines: [
            'सत्यनाम महामंत्र के स्मरण से समस्त लोकों व तीर्थों का पुण्य प्राप्त होता है।',
            'अतिरिक्त निर्देश एवं अद्यतन सूचना प्रविष्टि।',
          ],
          context: 'अतिरिक्त विवरण, मार्गदर्शिका एवं नीतियों हेतु प्रमाणिक सूचना।',
        },
      ],
      null,
      2
    );
  }

  return JSON.stringify(
    [
      {
        title: 'अध्याय १',
        lines: [
          'सत्यनाम सुमिरन करो, तजो सकल भ्रम जाल ।',
          'सतगुरु कबीर साहेब चरण गहि, छूटे जम जंजाल ॥',
        ],
        context: 'सतगुरु की कृपा और सत्यनाम के सुमिरन से समस्त भ्रम व भव-बंधन समाप्त हो जाते हैं।',
      },
    ],
    null,
    2
  );
}

export async function injectSlotJson(
  slotId: AdminGranthSlotId,
  rawJson: string
): Promise<{ ok: boolean; errorHi?: string; errorEn?: string; itemCount?: number }> {
  const validation = validateAdminSlotJson(rawJson);
  if (!validation.valid) {
    return {
      ok: false,
      errorHi: validation.errorHi,
      errorEn: validation.errorEn,
    };
  }

  const normalizedRaw = rawJson.trim();
  const envelope: StoredSlotEnvelope = {
    rawJson: normalizedRaw,
    updatedAt: Date.now(),
    itemCount: validation.itemCount || 1,
  };

  memoryRawStore.set(slotId, envelope);

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(getStorageKey(slotId), JSON.stringify(envelope));
    } catch {
      // Fallback safely to IndexedDB if localStorage quota is tight
    }
  }

  await idbPutSlot(slotId, envelope);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(ADMIN_SLOTS_UPDATED_EVENT, {
        detail: { slotId, action: 'inject', itemCount: envelope.itemCount },
      })
    );
    if (slotId === 'slot-2-sakhi' || slotId === 'slot-13-daily-sakhi') {
      window.dispatchEvent(new CustomEvent('sahebworld:sakhis-updated'));
    }
  }

  return { ok: true, itemCount: envelope.itemCount };
}

export async function purgeSingleInjectedSlot(slotId: AdminGranthSlotId): Promise<void> {
  memoryRawStore.delete(slotId);
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(getStorageKey(slotId));
    } catch {}
  }
  await idbDeleteSlot(slotId);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(ADMIN_SLOTS_UPDATED_EVENT, {
        detail: { slotId, action: 'purge-single' },
      })
    );
    if (slotId === 'slot-2-sakhi' || slotId === 'slot-13-daily-sakhi') {
      window.dispatchEvent(new CustomEvent('sahebworld:sakhis-updated'));
    }
  }
}

export async function purgeAllInjectedSlots(): Promise<void> {
  memoryRawStore.clear();
  if (typeof window !== 'undefined') {
    for (const slot of ADMIN_GRANTH_SLOTS) {
      try {
        localStorage.removeItem(getStorageKey(slot.id));
      } catch {}
    }
  }
  await idbClearAllSlots();

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(ADMIN_SLOTS_UPDATED_EVENT, {
        detail: { slotId: 'all', action: 'purge' },
      })
    );
    window.dispatchEvent(new CustomEvent('sahebworld:sakhis-updated'));
  }
}

// -----------------------------------------------------------------------------
// JSON Normalization Helpers -> GranthChapters / NitnemSections / Sakhis / SGGS / All Card Views
// -----------------------------------------------------------------------------

function toLocalizedText(val: unknown, fallbackHi = ''): LocalizedText {
  if (typeof val === 'string') {
    const trimmed = val.trim();
    return {
      hi: trimmed,
      pb: devanagariToGurmukhi(trimmed),
      en: trimmed,
    };
  }
  if (val && typeof val === 'object' && !Array.isArray(val)) {
    const obj = val as Record<string, unknown>;
    const hi = String(obj.hi ?? obj.hindi ?? obj.original_text ?? obj.en ?? fallbackHi).trim();
    const pb = String(obj.pb ?? obj.pa ?? obj.punjabi ?? '').trim() || devanagariToGurmukhi(hi);
    const en = String(obj.en ?? obj.english ?? '').trim() || hi;
    return { hi, pb, en };
  }
  return {
    hi: fallbackHi,
    pb: devanagariToGurmukhi(fallbackHi),
    en: fallbackHi,
  };
}

function toStringLines(val: unknown): string[] {
  if (Array.isArray(val)) {
    return val
      .map((item) => (typeof item === 'string' ? item : String(item ?? '')))
      .flatMap((s) => s.split('\n'))
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (typeof val === 'string') {
    return val
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function extractLocalizedLines(raw: Record<string, unknown>): { hi: string[]; pb: string[]; en: string[] } {
  const rawLines = raw.lines ?? raw.original_text ?? raw.text ?? raw.vani ?? raw.mulvani ?? raw.couplet ?? raw.description;
  if (rawLines && typeof rawLines === 'object' && !Array.isArray(rawLines)) {
    const loc = rawLines as Record<string, unknown>;
    const hi = toStringLines(loc.hi ?? loc.hindi ?? loc.devanagari ?? loc.en);
    const pbRaw = toStringLines(loc.pb ?? loc.pa ?? loc.gurmukhi ?? loc.punjabi);
    const enRaw = toStringLines(loc.en ?? loc.english ?? loc.roman);
    return {
      hi: hi.length > 0 ? hi : enRaw.length > 0 ? enRaw : pbRaw,
      pb: pbRaw.length > 0 ? pbRaw : hi.map((l) => devanagariToGurmukhi(l)),
      en: enRaw.length > 0 ? enRaw : hi,
    };
  }
  const hi = toStringLines(rawLines);
  const pbExplicit = toStringLines(raw.punjabi_lines ?? raw.pbLines ?? raw.moolGurmukhi);
  const enExplicit = toStringLines(raw.english_lines ?? raw.enLines ?? raw.transliteration);
  return {
    hi,
    pb: pbExplicit.length > 0 ? pbExplicit : hi.map((l) => devanagariToGurmukhi(l)),
    en: enExplicit.length > 0 ? enExplicit : hi,
  };
}

function normalizeRawVerseToGranthVerse(item: unknown, idx: number): GranthVerse | null {
  if (typeof item === 'string') {
    const lines = toStringLines(item);
    if (lines.length === 0) return null;
    return {
      id: `injected-v-${idx + 1}`,
      type: 'pada',
      lines: {
        hi: lines,
        pb: lines.map((l) => devanagariToGurmukhi(l)),
        en: lines,
      },
    };
  }

  if (!item || typeof item !== 'object') return null;
  const obj = item as Record<string, unknown>;
  const lines = extractLocalizedLines(obj);
  const bhavarthSource = obj.bhavarth ?? obj.context ?? obj.meaning ?? obj.saralBhavarth ?? obj.explanation ?? obj.description;
  const bhavarth = bhavarthSource ? toLocalizedText(bhavarthSource) : undefined;

  if (lines.hi.length === 0 && !bhavarth?.hi) return null;
  const finalLines =
    lines.hi.length > 0
      ? lines
      : {
          hi: [bhavarth?.hi || ''],
          pb: [bhavarth?.pb || ''],
          en: [bhavarth?.en || ''],
        };

  const validTypes = [
    'doha', 'chaupai', 'pada', 'ramaini', 'shabad', 'salok', 'ulatbaasi',
    'sakhi', 'chhand', 'katha', 'mangal', 'aarti', 'stuti', 'vandana', 'sortha',
  ];
  const rawType = typeof obj.type === 'string' && validTypes.includes(obj.type) ? (obj.type as GranthVerse['type']) : 'pada';

  return {
    id: (obj.id as string | number) ?? `injected-v-${idx + 1}`,
    type: rawType,
    lines: finalLines,
    bhavarth,
    saralBhavarth: obj.saralBhavarth ? toLocalizedText(obj.saralBhavarth) : bhavarth,
    deepInsight: obj.deepInsight ? toLocalizedText(obj.deepInsight) : undefined,
    contemplation: obj.contemplation ? toLocalizedText(obj.contemplation) : undefined,
    practicalApplication: obj.practicalApplication ? toLocalizedText(obj.practicalApplication) : undefined,
    samarpanPrayer: obj.samarpanPrayer ? toLocalizedText(obj.samarpanPrayer) : undefined,
    spiritualEssence: obj.spiritualEssence ? toLocalizedText(obj.spiritualEssence) : undefined,
  };
}

export function getInjectedGranthChapters(slotId: AdminGranthSlotId): GranthChapter[] | null {
  const parsed = getSlotParsedData(slotId);
  if (!parsed) return null;

  const slotMeta = ADMIN_GRANTH_SLOTS.find((s) => s.id === slotId);
  const defaultTitle = slotMeta?.title || { hi: 'अध्याय १', pb: 'ਅਧਿਆਇ ੧', en: 'Chapter 1' };

  let rawChapters: unknown[] = [];
  if (Array.isArray(parsed)) {
    const looksLikeChapters = parsed.some(
      (el) =>
        el &&
        typeof el === 'object' &&
        (Array.isArray((el as Record<string, unknown>).verses) ||
          'title' in (el as Record<string, unknown>) ||
          'chapterNumber' in (el as Record<string, unknown>) ||
          'name' in (el as Record<string, unknown>))
    );
    if (looksLikeChapters) {
      rawChapters = parsed;
    } else {
      const verses = parsed
        .map((v, i) => normalizeRawVerseToGranthVerse(v, i))
        .filter((v): v is GranthVerse => v !== null);
      if (verses.length === 0) return null;
      return [
        {
          id: `${slotId}-ch-1`,
          chapterNumber: 1,
          title: defaultTitle,
          subtitle: {
            hi: `इंजेक्टेड डेटा (${verses.length} पद)`,
            pb: `ਇੰਜੈਕਟਿਡ ਡੇਟਾ (${verses.length} ਪਦ)`,
            en: `Injected Data (${verses.length} Verses)`,
          },
          description: slotMeta?.description || defaultTitle,
          verses,
        },
      ];
    }
  } else if (typeof parsed === 'object') {
    const obj = parsed as Record<string, unknown>;
    if (Array.isArray(obj.chapters)) {
      rawChapters = obj.chapters;
    } else if (Array.isArray(obj.sections)) {
      rawChapters = obj.sections;
    } else if (Array.isArray(obj.items)) {
      rawChapters = obj.items;
    } else if (Array.isArray(obj.verses)) {
      const verses = obj.verses
        .map((v, i) => normalizeRawVerseToGranthVerse(v, i))
        .filter((v): v is GranthVerse => v !== null);
      if (verses.length === 0) return null;
      return [
        {
          id: String(obj.id || `${slotId}-ch-1`),
          chapterNumber: 1,
          title: obj.title ? toLocalizedText(obj.title) : defaultTitle,
          subtitle: obj.subtitle
            ? toLocalizedText(obj.subtitle)
            : {
                hi: `${verses.length} पद लोडेड`,
                pb: `${verses.length} ਪਦ ਲੋਡ`,
                en: `${verses.length} Verses Loaded`,
              },
          description: obj.description ? toLocalizedText(obj.description) : defaultTitle,
          verses,
        },
      ];
    } else {
      const singleVerse = normalizeRawVerseToGranthVerse(obj, 0);
      if (!singleVerse) {
        // Generic object fallback: render key-value pairs cleanly
        const kvLines = Object.entries(obj)
          .slice(0, 12)
          .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`);
        if (kvLines.length === 0) return null;
        return [
          {
            id: `${slotId}-ch-1`,
            chapterNumber: 1,
            title: obj.title ? toLocalizedText(obj.title) : defaultTitle,
            subtitle: slotMeta?.description || defaultTitle,
            description: slotMeta?.description || defaultTitle,
            verses: [
              {
                id: `${slotId}-kv-1`,
                type: 'pada',
                lines: {
                  hi: kvLines,
                  pb: kvLines.map((l) => devanagariToGurmukhi(l)),
                  en: kvLines,
                },
              },
            ],
          },
        ];
      }
      return [
        {
          id: String(obj.id || `${slotId}-ch-1`),
          chapterNumber: 1,
          title: obj.title ? toLocalizedText(obj.title) : defaultTitle,
          subtitle: obj.subtitle
            ? toLocalizedText(obj.subtitle)
            : {
                hi: 'प्रशासक द्वारा लोडेड पावन पाठ',
                pb: 'ਪ੍ਰਸ਼ਾਸਕ ਦੁਆਰਾ ਲੋਡ ਕੀਤਾ ਪਾਵਨ ਪਾਠ',
                en: 'Admin-injected sacred entry',
              },
          description: obj.context ? toLocalizedText(obj.context) : defaultTitle,
          verses: [singleVerse],
        },
      ];
    }
  }

  const chapters: GranthChapter[] = [];
  rawChapters.forEach((rawCh, idx) => {
    if (!rawCh || typeof rawCh !== 'object') return;
    const chObj = rawCh as Record<string, unknown>;
    const rawTitle = chObj.title ?? chObj.name ?? chObj.heading;
    const title = rawTitle ? toLocalizedText(rawTitle) : toLocalizedText(`प्रविष्टि ${idx + 1}`);

    let verses: GranthVerse[] = [];
    if (Array.isArray(chObj.verses)) {
      verses = chObj.verses
        .map((v, vIdx) => normalizeRawVerseToGranthVerse(v, vIdx))
        .filter((v): v is GranthVerse => v !== null);
    } else {
      const single = normalizeRawVerseToGranthVerse(chObj, 0);
      if (single) verses = [single];
    }

    if (verses.length === 0) {
      const kvLines = Object.entries(chObj)
        .filter(([k]) => !['id', 'title', 'name'].includes(k))
        .slice(0, 8)
        .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`);
      if (kvLines.length === 0) return;
      verses = [
        {
          id: `${slotId}-kv-${idx + 1}`,
          type: 'pada',
          lines: {
            hi: kvLines,
            pb: kvLines.map((l) => devanagariToGurmukhi(l)),
            en: kvLines,
          },
        },
      ];
    }

    chapters.push({
      id: String(chObj.id || `${slotId}-ch-${idx + 1}`),
      chapterNumber: typeof chObj.chapterNumber === 'number' ? chObj.chapterNumber : idx + 1,
      title,
      subtitle: chObj.subtitle
        ? toLocalizedText(chObj.subtitle)
        : {
            hi: `${verses.length} पावन पद`,
            pb: `${verses.length} ਪਾਵਨ ਪਦ`,
            en: `${verses.length} Entries`,
          },
      description: chObj.description
        ? toLocalizedText(chObj.description)
        : chObj.context
        ? toLocalizedText(chObj.context)
        : title,
      verses,
    });
  });

  return chapters.length > 0 ? chapters : null;
}

type NitnemMajorCategoryId = NonNullable<NitnemSection['majorCategoryId']>;

const NITNEM_CATEGORY_DEFS: Array<{
  id: NitnemMajorCategoryId;
  title: { hi: string; pb: string; en: string };
  keywords: string[];
}> = [
  {
    id: 'prabhat-path',
    title: { hi: '१. प्रभात (प्रातः) पाठ', pb: '੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ', en: '1. Prabhat (Morning) Path' },
    keywords: ['प्रभात', 'प्रातः', 'prabhat', 'morning', 'सुमिरन', 'आरम्भ', 'वंदना', '1.'],
  },
  {
    id: 'sandhya-path',
    title: { hi: '२. मूल संध्या पाठ', pb: '੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ', en: '2. Mool Sandhya (Evening) Path' },
    keywords: ['संध्या', 'sandhya', 'evening', 'आरती', 'aarti', '2.'],
  },
  {
    id: 'gayatri',
    title: { hi: '३. गायत्री', pb: '੩. ਗਾਇਤਰੀ', en: '3. Gayatri Path' },
    keywords: ['गायत्री', 'gayatri', '3.'],
  },
  {
    id: 'poonam-mahatmya',
    title: { hi: '४. पूनो महात्म्य पाठ', pb: '੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ', en: '4. Poonam Mahatmya Path' },
    keywords: ['पूनो', 'पूर्णमासी', 'पूनम', 'महात्म्य', 'poonam', 'purnima', '4.'],
  },
  {
    id: 'chalisa',
    title: { hi: '५. सतगुरु कबीर चालीसा पाठ', pb: '੫. ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ', en: '5. Satguru Kabir Chalisa Path' },
    keywords: ['चालीसा', 'chalisa', '5.'],
  },
  {
    id: 'barahmasi',
    title: { hi: '६. बारहमासी पाठ', pb: '੬. ਬਾਰਹਮਾਸੀ ਪਾਠ', en: '6. Barahmasi Path' },
    keywords: ['बारहमासी', 'barahmasi', 'बारह', '6.'],
  },
  {
    id: 'teesa-yantra',
    title: { hi: '७. तीसा यंत्र', pb: '੭. ਤੀਸਾ ਯੰਤਰ', en: '7. Teesa Yantra' },
    keywords: ['तीसा', 'यंत्र', 'teesa', 'yantra', '7.'],
  },
];

function inferNitnemCategory(ch: GranthChapter, fallbackIndex: number): { id: NitnemMajorCategoryId; title: { hi: string; pb: string; en: string } } {
  const haystack = `${ch.id} ${ch.title.hi} ${ch.title.pb} ${ch.title.en}`.toLowerCase();
  for (const cat of NITNEM_CATEGORY_DEFS) {
    if (cat.keywords.some((kw) => haystack.includes(kw.toLowerCase()))) {
      return { id: cat.id, title: cat.title };
    }
  }
  const byIdx = NITNEM_CATEGORY_DEFS[fallbackIndex % NITNEM_CATEGORY_DEFS.length];
  return byIdx ? { id: byIdx.id, title: byIdx.title } : { id: 'prabhat-path', title: NITNEM_CATEGORY_DEFS[0].title };
}

function applySlotToNitnemSections(
  sections: NitnemSection[],
  slotId: AdminGranthSlotId,
  preferredMatchTokens: string[] = []
): NitnemSection[] {
  const injectedChapters = getInjectedGranthChapters(slotId);
  if (!injectedChapters || injectedChapters.length === 0) {
    return sections;
  }

  const updated = sections.map((sec) => ({ ...sec }));
  const unmatchedChapters: Array<{ ch: GranthChapter; idx: number }> = [];

  injectedChapters.forEach((ch, idx) => {
    const mappedVerses: NitnemVersePair[] = ch.verses.map((v, vIdx) => ({
      id: v.id || `${slotId}-inj-${idx}-${vIdx}`,
      type: (v.type === 'katha' ? 'pada' : v.type) as NitnemVersePair['type'],
      lines: {
        hi: v.lines.hi,
        pb: v.lines.pb,
        en: v.lines.en,
      },
      shabdarth: v.shabdarth,
      bhavarth: v.bhavarth,
      spiritualEssence: v.spiritualEssence || v.deepInsight,
    }));

    let targetIdx = updated.findIndex(
      (s) =>
        s.id === ch.id ||
        s.title.hi.trim().toLowerCase() === ch.title.hi.trim().toLowerCase() ||
        s.majorCategoryTitle?.hi.trim().toLowerCase() === ch.title.hi.trim().toLowerCase()
    );

    if (targetIdx < 0 && preferredMatchTokens.length > 0 && idx === 0) {
      targetIdx = updated.findIndex((s) =>
        preferredMatchTokens.some(
          (tok) =>
            s.id.toLowerCase().includes(tok) ||
            s.title.hi.toLowerCase().includes(tok) ||
            s.title.en.toLowerCase().includes(tok)
        )
      );
    }

    if (targetIdx < 0 && slotId === 'slot-1-nitnem') {
      const inferred = inferNitnemCategory(ch, idx);
      // Fill first empty stub matching this category if present
      targetIdx = updated.findIndex(
        (s) => s.majorCategoryId === inferred.id && s.verses.length === 0
      );
    }

    if (targetIdx >= 0) {
      updated[targetIdx] = {
        ...updated[targetIdx],
        title: ch.title.hi ? ch.title : updated[targetIdx].title,
        subtitle: ch.subtitle || updated[targetIdx].subtitle,
        verses: mappedVerses,
        totalVerses: mappedVerses.length,
        estimatedMinutes: Math.max(2, Math.ceil(mappedVerses.length * 0.6)),
      };
    } else {
      unmatchedChapters.push({ ch, idx });
    }
  });

  if (unmatchedChapters.length > 0) {
    unmatchedChapters.forEach(({ ch, idx }) => {
      const mappedVerses: NitnemVersePair[] = ch.verses.map((v, vIdx) => ({
        id: v.id || `${slotId}-extra-${idx}-${vIdx}`,
        type: (v.type === 'katha' ? 'pada' : v.type) as NitnemVersePair['type'],
        lines: {
          hi: v.lines.hi,
          pb: v.lines.pb,
          en: v.lines.en,
        },
        shabdarth: v.shabdarth,
        bhavarth: v.bhavarth,
        spiritualEssence: v.spiritualEssence || v.deepInsight,
      }));
      const inferred = inferNitnemCategory(ch, idx);
      updated.push({
        id: ch.id || `${slotId}-injected-${idx + 1}`,
        majorCategoryId: inferred.id,
        majorCategoryTitle: inferred.title,
        title: ch.title,
        subtitle: ch.subtitle,
        iconName: 'BookOpen',
        estimatedMinutes: Math.max(2, Math.ceil(mappedVerses.length * 0.6)),
        totalVerses: mappedVerses.length,
        verses: mappedVerses,
      });
    });
  }

  return updated;
}

export function getInjectedNitnemSections(baseSections: NitnemSection[]): NitnemSection[] {
  let result = applySlotToNitnemSections(baseSections, 'slot-1-nitnem');
  result = applySlotToNitnemSections(result, 'slot-9-kar-nainon', ['kar-nainon', 'kar nainon', 'नैनों']);
  result = applySlotToNitnemSections(result, 'slot-10-santo-shabdai', ['santo-shabdai', 'santo shabdai', 'शबदई']);
  return result;
}

export function getInjectedSakhis(): Sakhi[] {
  const sakhiSlotIds: AdminGranthSlotId[] = ['slot-2-sakhi', 'slot-13-daily-sakhi'];
  const sakhis: Sakhi[] = [];
  let seq = 9001;

  for (const slotId of sakhiSlotIds) {
    const chapters = getInjectedGranthChapters(slotId);
    if (!chapters) continue;
    chapters.forEach((ch) => {
      ch.verses.forEach((v) => {
        const numId = typeof v.id === 'number' ? v.id : seq++;
        sakhis.push({
          id: `injected-sakhi-${slotId}-${numId}`,
          number: numId,
          grantha: 'Sakhi Sangrah',
          category: 'shabd-ko-ang',
          categoryTitle: ch.title,
          text: {
            hi: v.lines.hi.join('\n'),
            pb: v.lines.pb.join('\n'),
            en: v.lines.en.join('\n'),
          },
          transliteration: v.lines.en.join(' '),
          bhavarth: v.bhavarth || {
            hi: ch.description.hi || '',
            pb: ch.description.pb || '',
            en: ch.description.en || '',
          },
          wordMeanings: {
            hi: v.shabdarth?.hi || [],
            pb: v.shabdarth?.pb || [],
            en: v.shabdarth?.en || [],
          },
          contemplation: v.contemplation || {
            hi: 'इस पावन वाणी पर शांत चित्त से अंतर्मन में विचार करें।',
            pb: 'ਇਸ ਪਾਵਨ ਬਾਣੀ ਉੱਤੇ ਸ਼ਾਂਤ ਮਨ ਨਾਲ ਵਿਚਾਰ ਕਰੋ।',
            en: 'Contemplate quietly on this sacred verse within.',
          },
          practicalApplication: v.practicalApplication,
          samarpanPrayer: v.samarpanPrayer,
          contextNote: ch.description,
        });
      });
    });
  }

  return sakhis;
}

export function getInjectedSggsVerses(): SggsKabirVerse[] {
  const chapters = getInjectedGranthChapters('slot-8-sggs');
  if (!chapters) return [];
  const result: SggsKabirVerse[] = [];
  let idx = 1;
  chapters.forEach((ch) => {
    ch.verses.forEach((v) => {
      const n = idx++;
      result.push({
        id: `sggs-injected-${n}`,
        category: 'shabad',
        ang: n,
        title: ch.title,
        moolGurmukhi: v.lines.pb,
        moolDevanagari: v.lines.hi,
        moolRoman: v.lines.en,
        shabdarth: [],
        bhavarth: v.bhavarth || {
          pb: ch.description.pb,
          hi: ch.description.hi,
          en: ch.description.en,
        },
        chintan: v.contemplation || {
          pb: 'ਸਤਯਨਾਮ ਸਿਮਰਨ ਨਾਲ ਮਨ ਨੂੰ ਸਥਿਰ ਕਰੋ।',
          hi: 'सत्यनाम स्मरण से मन को स्थिर करें।',
          en: 'Steady the mind in Satyanaam remembrance.',
        },
        acharana: v.practicalApplication || {
          pb: 'ਨਿਮਰਤਾ ਅਤੇ ਸੱਚ ਦਾ ਆਚਰਣ ਧਾਰਨ ਕਰੋ।',
          hi: 'विनम्रता और सत्य का आचरण धारण करें।',
          en: 'Practice humility and truthful living.',
        },
        samarpan: v.samarpanPrayer || {
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ! ਸਤਯਨਾਮ ਦਾ ਆਸਰਾ ਬਖਸ਼ੋ।',
          hi: 'सतगुरु कबीर साहेब! सत्यनाम का आश्रय प्रदान करें।',
          en: 'Satguru Kabir Saheb! Bless us with shelter in Satyanaam.',
        },
        sggsReference: `Admin Slot #8 · ${ch.title.hi}`,
      });
    });
  });
  return result;
}

export function getLoadedInjectedPanelsForView(view: AppView): InjectedViewPanelData[] {
  const matchingSlots = ADMIN_GRANTH_SLOTS.filter(
    (slot) => slot.targetViews.includes(view) && !slot.nativeReaderHandled
  );

  const panels: InjectedViewPanelData[] = [];
  for (const slot of matchingSlots) {
    const status = getSlotStatus(slot.id);
    if (!status.loaded) continue;

    const chapters = getInjectedGranthChapters(slot.id);
    if (!chapters || chapters.length === 0) continue;

    const entries: InjectedCardEntry[] = [];
    chapters.forEach((ch, cIdx) => {
      ch.verses.forEach((v, vIdx) => {
        entries.push({
          id: `${slot.id}-${cIdx}-${vIdx}`,
          title: ch.title,
          lines: v.lines,
          context: v.bhavarth || (ch.description.hi !== ch.title.hi ? ch.description : undefined),
        });
      });
    });

    if (entries.length > 0) {
      panels.push({ slot, status, entries });
    }
  }

  return panels;
}
