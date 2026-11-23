import { AppView } from '../types';
import { AdminGranthSlotId } from '../services/adminSlotInjectorStore';

export type DashboardCategoryNumber = 1 | 2 | 3 | 4 | 5;

export interface LocalizedText {
  hi: string;
  pb: string;
  en: string;
}

export type DashboardCardAction =
  | { kind: 'view'; view: AppView }
  | { kind: 'granth'; slug: string }
  | { kind: 'swadhyay' }
  | { kind: 'akhand-path' }
  | { kind: 'meditation-timer' }
  | { kind: 'dhun' }
  | { kind: 'daily-anchor' }
  | { kind: 'modal'; eventName: 'sahebworld_open_kar_nainon_deedar' | 'sahebworld_open_santo_shabdai_shabd' }
  | { kind: 'about-modal'; section: 'guide' | 'about' | 'disclaimer' | 'privacy' };

export type DashboardCardIconKey =
  | 'book'
  | 'library'
  | 'scroll'
  | 'sparkles'
  | 'flame'
  | 'atom'
  | 'sun'
  | 'compass'
  | 'music'
  | 'music2'
  | 'target'
  | 'timer'
  | 'shieldCheck'
  | 'trendingUp'
  | 'messageSquare'
  | 'play'
  | 'feather'
  | 'bookmark'
  | 'shieldAlert'
  | 'bookMarked'
  | 'crown'
  | 'history'
  | 'calendarDays'
  | 'mapPin'
  | 'search'
  | 'image'
  | 'spellCheck'
  | 'activity'
  | 'info'
  | 'lock'
  | 'helpCircle'
  | 'trophy';

export interface DashboardCategoryMeta {
  id: DashboardCategoryNumber;
  shortTitle: LocalizedText;
  title: LocalizedText;
  dotColorClass: string;
  accentTextClass: string;
}

export interface DashboardFeatureCard {
  slotId: AdminGranthSlotId;
  slotNumber: number;
  categoryId: DashboardCategoryNumber;
  kicker: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  actionLabel: LocalizedText;
  icon: DashboardCardIconKey;
  accentClass: string;
  hoverBorderClass: string;
  action: DashboardCardAction;
}

export const DASHBOARD_CATEGORIES: DashboardCategoryMeta[] = [
  {
    id: 1,
    shortTitle: {
      hi: 'ग्रन्थालय व पाठ',
      pb: 'ਗ੍ਰੰਥਾਵਲੀ ਤੇ ਪਾਠ',
      en: 'Scriptures',
    },
    title: {
      hi: '१. पावन ग्रन्थालय, नित्य पाठ एवं दर्शन',
      pb: '੧. ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ, ਨਿਤਨੇਮ ਪਾਠ ਤੇ ਦਰਸ਼ਨ',
      en: '1. Holy Scriptures, Daily Paths & Darshan',
    },
    dotColorClass: 'bg-amber-600',
    accentTextClass: 'text-amber-800 dark:text-amber-300',
  },
  {
    id: 2,
    shortTitle: {
      hi: 'साधना व धुन',
      pb: 'ਸਾਧਨਾ ਤੇ ਧੁਨ',
      en: 'Sadhana',
    },
    title: {
      hi: '२. साधना, सिमरन एवं पावन धुन',
      pb: '੨. ਸਾਧਨਾ, ਸਿਮਰਨ ਤੇ ਪਾਵਨ ਧੁਨ',
      en: '2. Sadhana, Simran & Sacred Audio',
    },
    dotColorClass: 'bg-emerald-600',
    accentTextClass: 'text-emerald-800 dark:text-emerald-300',
  },
  {
    id: 3,
    shortTitle: {
      hi: 'ज्ञान व प्रश्नोत्तरी',
      pb: 'ਗਿਆਨ ਤੇ ਕੁਇਜ਼',
      en: 'Wisdom',
    },
    title: {
      hi: '३. ज्ञान, बोध, जीवन चरित्र एवं प्रश्नोत्तरी',
      pb: '੩. ਗਿਆਨ, ਬੋਧ, ਜੀਵਨ ਚਰਿੱਤਰ ਤੇ ਕੁਇਜ਼',
      en: '3. Wisdom, Lineage & Quizzes',
    },
    dotColorClass: 'bg-indigo-600',
    accentTextClass: 'text-indigo-800 dark:text-indigo-300',
  },
  {
    id: 4,
    shortTitle: {
      hi: 'अन्वेषण व साधन',
      pb: 'ਖੋਜ ਤੇ ਸਾਧਨ',
      en: 'Tools',
    },
    title: {
      hi: '४. आध्यात्मिक अन्वेषण, जंत्री एवं साधन',
      pb: '੪. ਰੂਹਾਨੀ ਖੋਜ, ਜੰਤਰੀ ਤੇ ਸਾਧਨ',
      en: '4. Exploration, Calendar & Tools',
    },
    dotColorClass: 'bg-cyan-600',
    accentTextClass: 'text-cyan-800 dark:text-cyan-300',
  },
  {
    id: 5,
    shortTitle: {
      hi: 'मार्गदर्शिका व नीतियां',
      pb: 'ਮਾਰਗਦਰਸ਼ਿਕਾ ਤੇ ਨੀਤੀਆਂ',
      en: 'Guide & Info',
    },
    title: {
      hi: '५. उपयोगकर्ता मार्गदर्शिका, परिचय एवं नीतियां',
      pb: '੫. ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ, ਜਾਣ-ਪਛਾਣ ਤੇ ਨੀਤੀਆਂ',
      en: '5. User Guide, About Us & App Policies',
    },
    dotColorClass: 'bg-stone-600',
    accentTextClass: 'text-stone-700 dark:text-stone-300',
  },
];

export const ALL_DASHBOARD_CARDS: DashboardFeatureCard[] = [
  // =========================================================================
  // CATEGORY 1: Holy Scriptures, Paths & Darshan (22 Cards: #1 – #22, +1 Pinned)
  // =========================================================================
  {
    slotId: 'slot-1-nitnem',
    slotNumber: 1,
    categoryId: 1,
    kicker: { hi: 'नित्य पाठ', pb: 'ਨਿਤਨੇਮ ਪਾਠ', en: 'Daily Path' },
    title: { hi: 'नितनेम गुटका साहेब', pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ', en: 'Nitnem Gutka Saheb' },
    description: {
      hi: 'प्रभात, संध्या, आरती, गायत्री, पूनो महात्म्य, चालीसा एवं तीसा यंत्र के ७ खण्ड।',
      pb: 'ਪ੍ਰਭਾਤ, ਸੰਧਿਆ, ਆਰਤੀ, ਗਾਇਤਰੀ, ਪੂਨੋ ਮਹਾਤਮਯ, ਚਾਲੀਸਾ ਤੇ ਤੀਸਾ ਯੰਤਰ ਦੇ ੭ ਖੰਡ।',
      en: 'Seven complete Nitnem Gutka recitation sections with interactive Pothi reader.',
    },
    actionLabel: { hi: 'नितनेम खोलें', pb: 'ਨਿਤਨੇਮ ਖੋਲ੍ਹੋ', en: 'Open Nitnem' },
    icon: 'book',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'nitnem-gutka' },
  },
  {
    slotId: 'slot-2-sakhi',
    slotNumber: 2,
    categoryId: 1,
    kicker: { hi: '३७ अंग', pb: '੩੭ ਅੰਗ', en: '37 Angs' },
    title: { hi: 'साखी संग्रह ग्रन्थ', pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਗ੍ਰੰਥ', en: 'Sakhi Sangrah' },
    description: {
      hi: 'गुरु को अंग व शब्द को अंग सहित ३७ पावन अंगों की प्रमाणिक साखियाँ।',
      pb: 'ਗੁਰੂ ਕੋ ਅੰਗ ਤੇ ਸ਼ਬਦ ਕੋ ਅੰਗ ਸਮੇਤ ੩੭ ਪਾਵਨ ਅੰਗਾਂ ਦੀਆਂ ਪ੍ਰਮਾਣਿਕ ਸਾਖੀਆਂ।',
      en: 'Canonical anthology of sacred couplets across 37 spiritual Angs.',
    },
    actionLabel: { hi: 'साखी संग्रह पढ़ें', pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਪੜ੍ਹੋ', en: 'Read Sangrah' },
    icon: 'bookMarked',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'granth', slug: 'sakhi-sangrah' },
  },
  {
    slotId: 'slot-3-bijak',
    slotNumber: 3,
    categoryId: 1,
    kicker: { hi: 'मूल ग्रन्थ', pb: 'ਮੂਲ ਗ੍ਰੰਥ', en: 'Canonical' },
    title: { hi: 'श्री कबीर बीजक ग्रन्थ', pb: 'ਸ਼੍ਰੀ ਕਬੀਰ ਬੀਜਕ ਗ੍ਰੰਥ', en: 'Sri Kabir Bijak' },
    description: {
      hi: 'रमैनी, सबद, साखी एवं ज्ञान चौंतीसा प्रकरण का प्रमाणिक संकलन।',
      pb: 'ਰਮੈਣੀ, ਸਬਦ, ਸਾਖੀ ਅਤੇ ਗਿਆਨ ਚੌਂਤੀਸਾ ਪ੍ਰਕਰਣ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ।',
      en: 'Primary Kabir Panth scripture featuring Ramaini, Shabad & Sakhi.',
    },
    actionLabel: { hi: 'बीजक पढ़ें', pb: 'ਬੀਜਕ ਪੜ੍ਹੋ', en: 'Read Bijak' },
    icon: 'scroll',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'granth', slug: 'bijak' },
  },
  {
    slotId: 'slot-4-granthavali',
    slotNumber: 4,
    categoryId: 1,
    kicker: { hi: 'प्रामाणिक संकलन', pb: 'ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ', en: 'Collection' },
    title: { hi: 'कबीर ग्रंथावली', pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ', en: 'Kabir Granthavali' },
    description: {
      hi: 'कबीर ग्रंथावली की पावन साखियाँ, पद एवं रमैनी अध्याय।',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ ਦੀਆਂ ਪਾਵਨ ਸਾਖੀਆਂ, ਪਦ ਅਤੇ ਰਮੈਣੀ ਅਧਿਆਏ।',
      en: 'Classical Kabir Granthavali chapters, padas and verses.',
    },
    actionLabel: { hi: 'ग्रंथावली खोलें', pb: 'ਗ੍ਰੰਥਾਵਲੀ ਖੋਲ੍ਹੋ', en: 'Open Granthavali' },
    icon: 'library',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'granth', slug: 'granthavali' },
  },
  {
    slotId: 'slot-5-kabir-sagar',
    slotNumber: 5,
    categoryId: 1,
    kicker: { hi: '३१ बोध सागर', pb: '੩੧ ਬੋਧ ਸਾਗਰ', en: '31 Chapters' },
    title: { hi: 'कबीर सागर संग्रह', pb: 'ਕਬੀਰ ਸਾਗਰ ਸੰਗ੍ਰਹਿ', en: 'Kabir Sagar' },
    description: {
      hi: 'अमरलोक रहस्य, सृष्टि बोध एवं धनी धर्मदास साहेब संवाद प्रकरण।',
      pb: 'ਅਮਰਲੋਕ ਭੇਦ, ਸ੍ਰਿਸ਼ਟੀ ਬੋਧ ਤੇ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਸੰਵਾਦ।',
      en: '31 sacred Bodh dialogues on creation and Amar Lok realization.',
    },
    actionLabel: { hi: 'कबीर सागर पढ़ें', pb: 'ਕਬੀਰ ਸਾਗਰ ਪੜ੍ਹੋ', en: 'Read Sagar' },
    icon: 'compass',
    accentClass: 'text-orange-700 dark:text-orange-300',
    hoverBorderClass: 'hover:border-orange-600',
    action: { kind: 'granth', slug: 'kabir-sagar' },
  },
  {
    slotId: 'slot-6-ulatbaasi',
    slotNumber: 6,
    categoryId: 1,
    kicker: { hi: '२५० गूढ़ पद', pb: '੨੫੦ ਗੂੜ੍ਹ ਪਦ', en: '250 Verses' },
    title: { hi: 'सतगुरु कबीर उलटबांसी', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਉਲਟਬਾਂਸੀ', en: 'Satguru Kabir Ulatbaasi' },
    description: {
      hi: 'गूढ़ प्रतीक विद्या व यौगिक पहेलियों का भावार्थ सहित संकलन।',
      pb: 'ਗੂੜ੍ਹ ਪ੍ਰਤੀਕ ਵਿੱਦਿਆ ਤੇ ਰਹੱਸਮਈ ਪਦਾਂ ਦਾ ਭਾਵਾਰਥ ਸਹਿਤ ਸੰਗ੍ਰਹਿ।',
      en: '250 mystical paradox verses with esoteric spiritual commentaries.',
    },
    actionLabel: { hi: 'उलटबांसी खोलें', pb: 'ਉਲਟਬਾਂਸੀ ਖੋਲ੍ਹੋ', en: 'Open Library' },
    icon: 'sparkles',
    accentClass: 'text-purple-700 dark:text-purple-300',
    hoverBorderClass: 'hover:border-purple-600',
    action: { kind: 'view', view: 'ulatvasi-library' },
  },
  {
    slotId: 'slot-7-shabdawali',
    slotNumber: 7,
    categoryId: 1,
    kicker: { hi: 'राग एवं पद', pb: 'ਰਾਗ ਤੇ ਪਦ', en: 'Ragas & Padas' },
    title: { hi: 'शब्दावली ग्रंथ', pb: 'ਸ਼ਬਦਾਵਲੀ ਗ੍ਰੰਥ', en: 'Shabdawali Granth' },
    description: {
      hi: 'शास्त्रीय रागों में निबद्ध पावन भजन व अनहद पद संग्रह।',
      pb: 'ਸ਼ਾਸਤਰੀ ਰਾਗਾਂ ਵਿੱਚ ਪਾਵਨ ਸ਼ਬਦ ਤੇ ਭਜਨ ਸੰਗ੍ਰਹਿ।',
      en: 'Devotional hymns and padas arranged by classical Indian ragas.',
    },
    actionLabel: { hi: 'शब्दावली पढ़ें', pb: 'ਸ਼ਬਦਾਵਲੀ ਪੜ੍ਹੋ', en: 'Read Shabdawali' },
    icon: 'music',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'granth', slug: 'shabdawali' },
  },
  {
    slotId: 'slot-8-sggs',
    slotNumber: 8,
    categoryId: 1,
    kicker: { hi: '१७ राग · २२७ शबद', pb: '੧੭ ਰਾਗ · ੨੨੭ ਸ਼ਬਦ', en: 'SGGS Bani' },
    title: { hi: 'गुरु ग्रंथ साहिब कबीर वाणी', pb: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਕਬੀਰ ਬਾਣੀ', en: 'Guru Granth Sahib Kabir Bani' },
    description: {
      hi: '१७ रागों में २२७ शब्द, २४३ सलोक एवं बावन अखरी का दिव्य ज्ञान-इंजन।',
      pb: '੧੭ ਰਾਗਾਂ ਵਿੱਚ ੨੨੭ ਸ਼ਬਦ, ੨੪੩ ਸਲੋਕ ਤੇ ਬਾਵਨ ਅੱਖਰੀ ਦਾ ਪਾਵਨ ਇੰਜਣ।',
      en: 'Complete 227 Shabads across 17 Raags, 243 Saloks & Bavan Akhari.',
    },
    actionLabel: { hi: 'इंजन खोलें', pb: 'ਇੰਜਣ ਖੋਲ੍ਹੋ', en: 'Explore Bani' },
    icon: 'sparkles',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'sggs-kabir-bani' },
  },
  {
    slotId: 'slot-9-kar-nainon',
    slotNumber: 9,
    categoryId: 1,
    kicker: { hi: '३२ कड़ियाँ', pb: '੩੨ ਕੜੀਆਂ', en: '32 Verses' },
    title: { hi: 'कर नैनों दीदार', pb: 'ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ', en: 'Kar Nainon Deedar' },
    description: {
      hi: 'काया-भेद, अनहद नाद एवं अंतर्घट दर्शन की ३२ अलौकिक कड़ियाँ।',
      pb: 'ਕਾਇਆ ਭੇਦ ਅਤੇ ਅਨਹਦ ਨਾਦ ਦੀਆਂ ੩੨ ਪਾਵਨ ਕੜੀਆਂ।',
      en: '32 sacred stanzas guiding inner sanctuary & Anhad Naad awakening.',
    },
    actionLabel: { hi: 'दीदार पाठ खोलें', pb: 'ਦੀਦਾਰ ਪਾਠ ਖੋਲ੍ਹੋ', en: 'Open 32 Verses' },
    icon: 'book',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'modal', eventName: 'sahebworld_open_kar_nainon_deedar' },
  },
  {
    slotId: 'slot-10-santo-shabdai',
    slotNumber: 10,
    categoryId: 1,
    kicker: { hi: '५ शब्द · ५ मुद्रा', pb: '੫ ਸ਼ਬਦ · ੫ ਮੁਦ੍ਰਾ', en: '5 Shabads' },
    title: { hi: 'संतो शबदई शबद बखाना', pb: 'ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ ਬਖਾਨਾ', en: 'Santo Shabdai Shabd' },
    description: {
      hi: 'पंच शब्द, पंच मुद्रा एवं निःअक्षर सत्यनाम तत्व-बोध व्याख्या।',
      pb: 'ਪੰਜ ਸ਼ਬਦ, ਪੰਜ ਮੁਦ੍ਰਾ ਅਤੇ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ ਤੱਤ-ਬੋਧ ਵਿਆਖਿਆ।',
      en: 'Esoteric exposition of Five Shabads, Five Mudras & Nish-Akshar Satyanaam.',
    },
    actionLabel: { hi: 'शब्द भेद देखें', pb: 'ਸ਼ਬਦ ਭੇਦ ਵੇਖੋ', en: 'Open Stanzas' },
    icon: 'atom',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'modal', eventName: 'sahebworld_open_santo_shabdai_shabd' },
  },
  {
    slotId: 'slot-11-satyanaam-sutra',
    slotNumber: 11,
    categoryId: 1,
    kicker: { hi: 'परम मोक्ष', pb: 'ਪਰਮ ਮੋਕਸ਼', en: 'Ultimate Truth' },
    title: { hi: 'सत्यनाम व अमरलोक बोध', pb: 'ਸਤਯਨਾਮ ਤੇ ਅਮਰਲੋਕ ਬੋਧ', en: 'Satya Naam & Saar Shabd' },
    description: {
      hi: 'सत्यनाम महिमा, सारशब्द एवं अमरलोक बोध की महा-मार्गदर्शिका।',
      pb: 'ਸਤਯਨਾਮ ਮਹਿਮਾ, ਸਾਰਸ਼ਬਦ ਅਤੇ ਅਮਰਲੋਕ ਬੋਧ ਦੀ ਮਹਾ-ਮਾਰਗਦਰਸ਼ਿਕਾ।',
      en: 'Maha Margdarshika on Satyanaam, Saar Shabd & Amar Lok liberation.',
    },
    actionLabel: { hi: 'बोध दर्शन करें', pb: 'ਬੋਧ ਦਰਸ਼ਨ ਕਰੋ', en: 'Explore Essence' },
    icon: 'atom',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'satya-naam' },
  },
  {
    slotId: 'slot-12-master-granth',
    slotNumber: 12,
    categoryId: 1,
    kicker: { hi: 'मास्टर पोर्टल', pb: 'ਮਾਸਟਰ ਪੋਰਟਲ', en: 'All Scriptures' },
    title: { hi: 'समग्र ग्रन्थालय पोर्टल', pb: 'ਸਮੁੱਚੀ ਗ੍ਰੰਥਾਵਲੀ ਪੋਰਟਲ', en: 'Master Granth Library' },
    description: {
      hi: 'साखी संग्रह, बीजक, कबीर सागर, शब्दावली व उलटबांसी का एकीकृत ग्रन्थालय।',
      pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਬੀਜਕ, ਕਬੀਰ ਸਾਗਰ, ਸ਼ਬਦਾਵਲੀ ਤੇ ਉਲਟਬਾਂਸੀ ਦਾ ਪੋਰਟਲ।',
      en: 'Unified master reader for all canonical Kabir Panth scriptures.',
    },
    actionLabel: { hi: 'ग्रन्थालय खोलें', pb: 'ਗ੍ਰੰਥਾਵਲੀ ਖੋਲ੍ਹੋ', en: 'Open Library' },
    icon: 'library',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'grantha' },
  },
  {
    slotId: 'slot-13-daily-sakhi',
    slotNumber: 13,
    categoryId: 1,
    kicker: { hi: 'आज का अमृत', pb: 'ਅੱਜ ਦਾ ਅੰਮ੍ਰਿਤ', en: 'Today Verse' },
    title: { hi: 'दैनिक पावन साखी', pb: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ', en: 'Daily Pawan Sakhi' },
    description: {
      hi: 'आज के दिन की पावन साखी, सरल भावार्थ, ऑडियो श्रवण व दैनिक हाज़िरी।',
      pb: 'ਅੱਜ ਦੀ ਪਾਵਨ ਸਾਖੀ, ਸਰਲ ਭਾਵਾਰਥ, ਆਡੀਓ ਪਾਠ ਤੇ ਦੈਨਿਕ ਹਾਜ਼ਰੀ।',
      en: 'Today’s highlighted sacred Sakhi, contemplation & audio recitation.',
    },
    actionLabel: { hi: 'साखी कार्ड देखें', pb: 'ਸਾਖੀ ਕਾਰਡ ਵੇਖੋ', en: 'View Today Sakhi' },
    icon: 'sun',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'daily-anchor' },
  },
  {
    slotId: 'slot-14-divine-darshan',
    slotNumber: 14,
    categoryId: 1,
    kicker: { hi: 'पावन दर्शन', pb: 'ਪਾਵਨ ਦਰਸ਼ਨ', en: 'Darshan' },
    title: { hi: 'सतगुरु कबीर दिव्य दर्शन', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਦਿਵਯ ਦਰਸ਼ਨ', en: 'Satguru Divine Darshan' },
    description: {
      hi: 'सतगुरु कबीर साहेब का अलौकिक ध्यान कक्ष, स्तुति व पावन आरती दर्शन।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਦਿਵਯ ਧਿਆਨ ਕਮਰਾ, ਉਸਤਤ ਤੇ ਦਰਸ਼ਨ।',
      en: 'Sacred Darshan sanctuary with devotional contemplation & chants.',
    },
    actionLabel: { hi: 'दर्शन करें', pb: 'ਦਰਸ਼ਨ ਕਰੋ', en: 'Open Darshan' },
    icon: 'sparkles',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'view', view: 'divine-darshan' },
  },
  {
    slotId: 'slot-15-akhand-path',
    slotNumber: 15,
    categoryId: 1,
    kicker: { hi: 'अविराम पाठ', pb: 'ਅਖੰਡ ਪਾਠ', en: 'Continuous' },
    title: { hi: 'अखंड साखी पाठ', pb: 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ', en: 'Akhand Sakhi Path' },
    description: {
      hi: 'सैकड़ों साखियों का अविराम पाठ, स्वतः ऑडियो वाचन एवं प्रगति ट्रैकर।',
      pb: 'ਸੈਂਕੜੇ ਸਾਖੀਆਂ ਦਾ ਨਿਰੰਤਰ ਪਾਠ, ਆਟੋ-ਆਡੀਓ ਤੇ ਪ੍ਰਗਤੀ ਟਰੈਕਰ।',
      en: 'Continuous recitation of sacred Sakhis with synchronized audio.',
    },
    actionLabel: { hi: 'अखंड पाठ खोलें', pb: 'ਅਖੰਡ ਪਾਠ ਖੋਲ੍ਹੋ', en: 'Start Path' },
    icon: 'scroll',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'akhand-path' },
  },
  {
    slotId: 'slot-16-aarti-sanctuary',
    slotNumber: 16,
    categoryId: 1,
    kicker: { hi: 'आरती व स्तुति', pb: 'ਆਰਤੀ ਤੇ ਉਸਤਤ', en: 'Evening Aarti' },
    title: { hi: 'संध्या आरती एवं प्रभात गान', pb: 'ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਗਾਨ', en: 'Sandhya Aarti & Prayers' },
    description: {
      hi: 'संध्या आरती, प्रभात मंगल गान एवं पारंपरिक चौका वंदना संग्रह।',
      pb: 'ਸੰਧਿਆ ਆਰਤੀ, ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ ਤੇ ਪਰੰਪਰਾਗਤ ਵੰਦਨਾ ਸੰਗ੍ਰਹਿ।',
      en: 'Alaukik evening Aarti hymns, Prabhat Mangal Gaan & chants.',
    },
    actionLabel: { hi: 'आरती गाएं', pb: 'ਆਰਤੀ ਪੜ੍ਹੋ', en: 'Open Aarti' },
    icon: 'flame',
    accentClass: 'text-orange-700 dark:text-orange-300',
    hoverBorderClass: 'hover:border-orange-600',
    action: { kind: 'view', view: 'aarti-sanctuary' },
  },
  {
    slotId: 'slot-17-aatma-bhushan',
    slotNumber: 17,
    categoryId: 1,
    kicker: { hi: '१६ आत्म-गुण', pb: '੧੬ ਆਤਮ-ਗੁਣ', en: '16 Virtues' },
    title: { hi: 'आत्मा के १६ भूषण व ज्ञान-चक्र', pb: 'ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ ਤੇ ਗਿਆਨ-ਚੱਕਰ', en: '16 Attributes of Soul' },
    description: {
      hi: 'सत्य, संतोष, दया, क्षमा एवं शील सहित १६ आत्मिक आभूषण।',
      pb: 'ਸਤ, ਸੰਤੋਖ, ਦਇਆ, ਖਿਮਾ ਤੇ ਸ਼ੀਲ ਸਮੇਤ ੧੬ ਰੂਹਾਨੀ ਗਹਿਣੇ।',
      en: 'Sixteen sacred virtues of the awakened soul & Gyan-Chakra.',
    },
    actionLabel: { hi: '१६ भूषण देखें', pb: '੧੬ ਭੂਸ਼ਣ ਵੇਖੋ', en: 'Explore Virtues' },
    icon: 'sparkles',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'aatma-bhushan' },
  },
  {
    slotId: 'slot-18-hukamnama',
    slotNumber: 18,
    categoryId: 1,
    kicker: { hi: 'दैनिक आदेश', pb: 'ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ', en: 'Daily Hukam' },
    title: { hi: 'पावन दैनिक हुकमनामा साहेब', pb: 'ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ ਸਾਹੇਬ', en: 'Daily Sacred Hukamnama' },
    description: {
      hi: 'श्री गुरु ग्रंथ साहिब जी से प्रतिदिन १२ बजे स्वतः परिवर्तित कबीर वाणी हुकमनामा।',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤੋਂ ਹਰ ਰੋਜ਼ ੧੨ ਵਜੇ ਬਦਲਦਾ ਕਬੀਰ ਬਾਣੀ ਹੁਕਮਨਾਮਾ।',
      en: 'Daily rotating Guru Granth Sahib Kabir Bani Hukamnama with audio.',
    },
    actionLabel: { hi: 'हुकमनामा पढ़ें', pb: 'ਹੁਕਮਨਾਮਾ ਪੜ੍ਹੋ', en: 'Read Hukamnama' },
    icon: 'scroll',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'hukamnama' },
  },
  {
    slotId: 'slot-19-das-sutra',
    slotNumber: 19,
    categoryId: 1,
    kicker: { hi: '१० महासूत्र', pb: '੧੦ ਮਹਾਸੂਤਰ', en: '10 Sutras' },
    title: { hi: 'सतगुरु कबीर साहेब के १० सूत्र', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ੧੦ ਸੂਤਰ', en: '10 Sacred Sutras' },
    description: {
      hi: 'दैनिक जीवन को आलोकित करने वाले १० प्रमाणिक सत्य-वचन सूत्र।',
      pb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਨੂੰ ਰੌਸ਼ਨ ਕਰਨ ਵਾਲੇ ੧੦ ਪ੍ਰਮਾਣਿਕ ਸਤਿ-ਬਚਨ ਸੂਤਰ।',
      en: 'Ten core daily spiritual maxims of Satguru Kabir Saheb.',
    },
    actionLabel: { hi: '१० सूत्र पढ़ें', pb: '੧੦ ਸੂਤਰ ਪੜ੍ਹੋ', en: 'Read Sutras' },
    icon: 'scroll',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'das-sutra' },
  },
  {
    slotId: 'slot-20-dainik-chintan',
    slotNumber: 20,
    categoryId: 1,
    kicker: { hi: 'दैनिक मनन', pb: 'ਰੋਜ਼ਾਨਾ ਮਨਨ', en: 'Reflection' },
    title: { hi: 'दैनिक आत्म-चिंतन एवं मनन', pb: 'ਦੈਨਿਕ ਆਤਮ-ਚਿੰਤਨ ਤੇ ਮਨਨ', en: 'Daily Contemplation' },
    description: {
      hi: 'प्रतिदिन का अंतर्मुखी आत्म-मंथन, विवेक संवाद व व्यवहारिक सूत्र।',
      pb: 'ਹਰ ਦਿਨ ਦਾ ਅੰਤਰਮੁਖੀ ਆਤਮ-ਮੰਥਨ, ਵਿਵੇਕ ਸੰਵਾਦ ਤੇ ਅਮਲੀ ਸੂਤਰ।',
      en: 'Daily contemplative insights for calm inner clarity.',
    },
    actionLabel: { hi: 'चिंतन करें', pb: 'ਚਿੰਤਨ ਕਰੋ', en: 'Contemplate' },
    icon: 'feather',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'view', view: 'dainik-chintan' },
  },
  {
    slotId: 'slot-21-damakheda-index',
    slotNumber: 21,
    categoryId: 1,
    kicker: { hi: 'ग्रन्थ-सूची', pb: 'ਗ੍ਰੰਥ-ਸੂਚੀ', en: 'Panth Index' },
    title: { hi: 'दामाखेड़ा ग्रन्थ-सूची व क्रम', pb: 'ਦਾਮਾਖੇੜਾ ਗ੍ਰੰਥ-ਸੂਚੀ ਤੇ ਕ੍ਰਮ', en: 'Damakheda Granth Index' },
    description: {
      hi: 'दामाखेड़ा पंथिक परंपरा के नित्य पाठ क्रम व प्रमाणिक ग्रन्थ अनुक्रमणिका।',
      pb: 'ਦਾਮਾਖੇੜਾ ਪੰਥਕ ਪਰੰਪਰਾ ਦੇ ਨਿਤ ਪਾਠ ਕ੍ਰਮ ਤੇ ਪ੍ਰਮਾਣਿਕ ਗ੍ਰੰਥ ਸੂਚੀ।',
      en: 'Damakheda Panth liturgical schedule and canonical index.',
    },
    actionLabel: { hi: 'सूची देखें', pb: 'ਸੂਚੀ ਵੇਖੋ', en: 'View Index' },
    icon: 'bookMarked',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'damakheda-index' },
  },
  {
    slotId: 'slot-22-bhajan-repository',
    slotNumber: 22,
    categoryId: 1,
    kicker: { hi: 'भजन कोश', pb: 'ਭਜਨ ਕੋਸ਼', en: 'Bhajans' },
    title: { hi: 'दामाखेड़ा भजन व शबद संग्रह', pb: 'ਦਾਮਾਖੇੜਾ ਭਜਨ ਤੇ ਸ਼ਬਦ ਸੰਗ੍ਰਹਿ', en: 'Damakheda Bhajan Repository' },
    description: {
      hi: 'पारंपरिक भजन, राग, चौका-आरती पद एवं सत्संग कीर्तन संग्रह।',
      pb: 'ਪਰੰਪਰਾਗਤ ਭਜਨ, ਰਾਗ, ਚੌਕਾ-ਆਰਤੀ ਪਦ ਅਤੇ ਸਤਿਸੰਗ ਕੀਰਤਨ ਸੰਗ੍ਰਹਿ।',
      en: 'Traditional bhajan lyrics, Shabads & Panthic kirtan texts.',
    },
    actionLabel: { hi: 'भजन पढ़ें', pb: 'ਭਜਨ ਪੜ੍ਹੋ', en: 'Open Bhajans' },
    icon: 'music',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'view', view: 'bhajan-repository' },
  },

  // =========================================================================
  // CATEGORY 2: Sadhana, Simran & Sacred Audio (10 Cards: #23 – #32)
  // =========================================================================
  {
    slotId: 'slot-23-dhun',
    slotNumber: 23,
    categoryId: 2,
    kicker: { hi: 'अखंड नाद', pb: 'ਅਖੰਡ ਨਾਦ', en: 'Sacred Dhun' },
    title: { hi: 'सत्यनाम पावन धुन', pb: 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ', en: 'Satyanaam Sacred Dhun' },
    description: {
      hi: 'एकतारा, सारंगी, बांसुरी व अविरल सत्यनाम मंत्र नाद कक्ष।',
      pb: 'ਇਕਤਾਰਾ, ਸਾਰੰਗੀ, ਬੰਸਰੀ ਤੇ ਨਿਰੰਤਰ ਸਤਯਨਾਮ ਮੰਤਰ ਨਾਦ।',
      en: 'Continuous Satyanaam chanting with soothing ambient instruments.',
    },
    actionLabel: { hi: 'धुन सुनें', pb: 'ਧੁਨ ਸੁਣੋ', en: 'Listen Dhun' },
    icon: 'music',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'dhun' },
  },
  {
    slotId: 'slot-24-mantra-tracker',
    slotNumber: 24,
    categoryId: 2,
    kicker: { hi: '१०८ मनके', pb: '੧੦੮ ਮਣਕੇ', en: '108 Beads' },
    title: { hi: 'नाम-सिमरन आवर्तन (माला)', pb: 'ਨਾਮ-ਸਿਮਰਨ ਆਵਰਤਨ (ਮਾਲਾ)', en: 'Simran Mala Counter' },
    description: {
      hi: '१०८ मनकों की डिजिटल जप माला, श्वास-सुमिरन व दैनिक लक्ष्य।',
      pb: '੧੦੮ ਮਣਕਿਆਂ ਦੀ ਡਿਜੀਟਲ ਜਪ ਮਾਲਾ, ਸ਼ਵਾਸ-ਸੁਮਿਰਨ ਤੇ ਰੋਜ਼ਾਨਾ ਟੀਚਾ।',
      en: '108-bead digital rosary for rhythmic Satyanaam remembrance.',
    },
    actionLabel: { hi: 'जप माला शुरू', pb: 'ਮਾਲਾ ਜਾਪ ਸ਼ੁਰੂ', en: 'Chant Now' },
    icon: 'target',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'mantra-tracker' },
  },
  {
    slotId: 'slot-25-meditation-timer',
    slotNumber: 25,
    categoryId: 2,
    kicker: { hi: 'आत्म-ध्यान', pb: 'ਆਤਮ-ਧਿਆਨ', en: 'Meditation' },
    title: { hi: 'सुमिरन ध्यान टाइमर', pb: 'ਸੁਮਿਰਨ ਧਿਆਨ ਟਾਈਮਰ', en: 'Sumiran Meditation Timer' },
    description: {
      hi: 'ध्यान अंतराल, अनहद नाद व शांत सात्विक घंटी टाइमर।',
      pb: 'ਧਿਆਨ ਅੰਤਰਾਲ, ਅਨਹਦ ਨਾਦ ਤੇ ਸ਼ਾਂਤ ਸਾਤਵਿਕ ਘੰਟੀ ਟਾਈਮਰ।',
      en: 'Guided silent meditation intervals with gentle bell chimes.',
    },
    actionLabel: { hi: 'ध्यान शुरू करें', pb: 'ਧਿਆਨ ਸ਼ੁਰੂ ਕਰੋ', en: 'Start Timer' },
    icon: 'timer',
    accentClass: 'text-teal-700 dark:text-teal-300',
    hoverBorderClass: 'hover:border-teal-600',
    action: { kind: 'meditation-timer' },
  },
  {
    slotId: 'slot-26-spiritual-discipline',
    slotNumber: 26,
    categoryId: 2,
    kicker: { hi: 'पंचामृत नेम', pb: 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ', en: 'Panchamrit Vows' },
    title: { hi: 'पंचामृत नेम एवं साधना ट्रैकर', pb: 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ', en: 'Spiritual Discipline Tracker' },
    description: {
      hi: 'सत्य, दया, शील, क्षमा व संतोष के सात्विक दैनिक नेम संकल्प।',
      pb: 'ਸਤ, ਦਇਆ, ਸ਼ੀਲ, ਖਿਮਾ ਤੇ ਸੰਤੋਖ ਦੇ ਸਾਤਵਿਕ ਰੋਜ਼ਾਨਾ ਨੇਮ।',
      en: 'Track Panchamrit virtues and daily spiritual vows consistently.',
    },
    actionLabel: { hi: 'नेम ट्रैकर खोलें', pb: 'ਨੇਮ ਟਰੈਕਰ ਖੋਲ੍ਹੋ', en: 'Open Vows' },
    icon: 'shieldCheck',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'spiritual-discipline' },
  },
  {
    slotId: 'slot-27-growth-dashboard',
    slotNumber: 27,
    categoryId: 2,
    kicker: { hi: 'साधना प्रगति', pb: 'ਸਾਧਨਾ ਪ੍ਰਗਤੀ', en: 'Progress' },
    title: { hi: 'आध्यात्मिक प्रगति डैशबोर्ड', pb: 'ਅਧਿਆਤਮਕ ਪ੍ਰਗਤੀ ਡੈਸ਼ਬੋਰਡ', en: 'Spiritual Growth Dashboard' },
    description: {
      hi: 'स्वाध्याय चरण, माइलस्टोन स्तर व दैनिक साधना निरंतरता दृश्य।',
      pb: 'ਸਵਾਧਿਆਏ ਪੜਾਅ, ਮੀਲ-ਪੱਥਰ ਪੱਧਰ ਤੇ ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਪ੍ਰਗਤੀ।',
      en: 'Track your Swadhyay progress, milestones & daily consistency.',
    },
    actionLabel: { hi: 'प्रगति देखें', pb: 'ਪ੍ਰਗਤੀ ਵੇਖੋ', en: 'View Progress' },
    icon: 'trendingUp',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'growth-dashboard' },
  },
  {
    slotId: 'slot-28-sadhana-goals',
    slotNumber: 28,
    categoryId: 2,
    kicker: { hi: 'दैनिक संकल्प', pb: 'ਰੋਜ਼ਾਨਾ ਸੰਕਲਪ', en: 'Daily Goals' },
    title: { hi: 'दैनिक साधना लक्ष्य व संकल्प', pb: 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟੀਚੇ ਤੇ ਸੰਕਲਪ', en: 'Daily Sadhana Goals' },
    description: {
      hi: 'साखी, ध्यान, माला जप के दैनिक संकल्प और स्ट्रीक ट्रैकिंग।',
      pb: 'ਸਾਖੀ, ਧਿਆਨ, ਮਾਲਾ ਜਾਪ ਦੇ ਰੋਜ਼ਾਨਾ ਟੀਚੇ ਤੇ ਸਟ੍ਰੀਕ।',
      en: 'Set daily targets for reading, meditation and mantra counting.',
    },
    actionLabel: { hi: 'लक्ष्य देखें', pb: 'ਟੀਚੇ ਵੇਖੋ', en: 'Open Goals' },
    icon: 'target',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'sadhana-goals' },
  },
  {
    slotId: 'slot-29-divine-guidance',
    slotNumber: 29,
    categoryId: 2,
    kicker: { hi: 'दिव्य आदेश', pb: 'ਦਿਵਯ ਆਦੇਸ਼', en: 'Guidance' },
    title: { hi: 'सतगुरु दिव्य आदेश व मार्गदर्शन', pb: 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਤੇ ਮਾਰਗਦਰਸ਼ਨ', en: 'Divine Guidance Oracle' },
    description: {
      hi: 'जीवन की दुविधाओं के लिए सतगुरु कबीर वाणी से आध्यात्मिक उत्तर।',
      pb: 'ਜੀਵਨ ਦੀਆਂ ਉਲਝਣਾਂ ਲਈ ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਾਣੀ ਤੋਂ ਅਧਿਆਤਮਕ ਸੇਧ।',
      en: 'Receive timely scriptural counsel tailored to your situation.',
    },
    actionLabel: { hi: 'मार्गदर्शन लें', pb: 'ਸੇਧ ਲਓ', en: 'Seek Guidance' },
    icon: 'compass',
    accentClass: 'text-teal-700 dark:text-teal-300',
    hoverBorderClass: 'hover:border-teal-600',
    action: { kind: 'view', view: 'divine-guidance' },
  },
  {
    slotId: 'slot-30-community-board',
    slotNumber: 30,
    categoryId: 2,
    kicker: { hi: 'संत-मिलनी', pb: 'ਸੰਤ-ਮਿਲਣੀ', en: 'Satsang' },
    title: { hi: 'साधना मंच (सत्संग संवाद)', pb: 'ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਸੰਵਾਦ)', en: 'Sadhana Community Board' },
    description: {
      hi: 'साधकों के अनुभव, आध्यात्मिक विचार और सात्विक सत्संग संवाद।',
      pb: 'ਸਾਧਕਾਂ ਦੇ ਅਨੁਭਵ, ਅਧਿਆਤਮਕ ਵਿਚਾਰ ਤੇ ਸਤਿਸੰਗ ਸੰਵਾਦ।',
      en: 'Seeker reflections, fellowship notes & spiritual community board.',
    },
    actionLabel: { hi: 'मंच देखें', pb: 'ਮੰਚ ਵੇਖੋ', en: 'View Board' },
    icon: 'messageSquare',
    accentClass: 'text-purple-700 dark:text-purple-300',
    hoverBorderClass: 'hover:border-purple-600',
    action: { kind: 'view', view: 'community-board' },
  },
  {
    slotId: 'slot-31-audio-library',
    slotNumber: 31,
    categoryId: 2,
    kicker: { hi: 'ऑडियो वाणी', pb: 'ਆਡੀਓ ਬਾਣੀ', en: 'Audio Vault' },
    title: { hi: 'अमर वाणी ऑडियो लाइब्रेरी', pb: 'ਅਮਰ ਬਾਣੀ ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ', en: 'Amar Vani Audio Library' },
    description: {
      hi: 'पावन कबीर वाणी गायन एवं भक्तिमय भजनामृत ऑडियो संग्रह।',
      pb: 'ਪਾਵਨ ਕਬੀਰ ਬਾਣੀ ਗਾਇਨ ਤੇ ਭਗਤੀਮਈ ਭਜਨਾਮ੍ਰਿਤ ਸੰਗ੍ਰਹਿ।',
      en: 'Curated library of devotional Kabir Vani chants and tracks.',
    },
    actionLabel: { hi: 'ऑडियो सुनें', pb: 'ਆਡੀਓ ਸੁਣੋ', en: 'Listen Audio' },
    icon: 'music2',
    accentClass: 'text-violet-700 dark:text-violet-300',
    hoverBorderClass: 'hover:border-violet-600',
    action: { kind: 'view', view: 'audio-library' },
  },
  {
    slotId: 'slot-32-satsang-video',
    slotNumber: 32,
    categoryId: 2,
    kicker: { hi: 'सत्संग वीडियो', pb: 'ਸਤਿਸੰਗ ਵੀਡੀਓ', en: 'Discourses' },
    title: { hi: 'पावन सत्संग वीडियो संग्रह', pb: 'ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ ਸੰਗ੍ਰਹਿ', en: 'Satsang Video Discourses' },
    description: {
      hi: 'अनुराग सागर, बीजक एवं अमर लीलाओं के प्रवचन वीडियो।',
      pb: 'ਅਨੁਰਾਗ ਸਾਗਰ, ਬੀਜਕ ਤੇ ਅਮਰ ਲੀਲ੍ਹਾਵਾਂ ਦੇ ਪ੍ਰਵਚਨ ਵੀਡੀਓ।',
      en: 'Video discourses exploring Anurag Sagar, Bijak and sacred leelas.',
    },
    actionLabel: { hi: 'सत्संग देखें', pb: 'ਸਤਿਸੰਗ ਵੇਖੋ', en: 'Watch Videos' },
    icon: 'play',
    accentClass: 'text-red-700 dark:text-red-300',
    hoverBorderClass: 'hover:border-red-600',
    action: { kind: 'view', view: 'satsang-video' },
  },
  {
    slotId: 'slot-56-satvik-sankalp',
    slotNumber: 56,
    categoryId: 2,
    kicker: { hi: 'साधना संकल्प', pb: 'ਸਾਧਨਾ ਸੰਕਲਪ', en: 'Satvik Vows' },
    title: { hi: 'नशामुक्ति व सात्विक संकल्प', pb: 'ਨਸ਼ਾਮੁਕਤੀ ਤੇ ਸਾਤਵਿਕ ਸੰਕਲਪ', en: 'De-addiction & Sankalp' },
    description: {
      hi: 'दैनिक हाज़िरी, दिन गणना, मील के पत्थर बैज व प्रेरक साखियों से संकल्प निभाएं।',
      pb: 'ਰੋਜ਼ਾਨਾ ਹਾਜ਼ਰੀ, ਦਿਨਾਂ ਦੀ ਗਿਣਤੀ, ਮੀਲ ਪੱਥਰ ਬੈਜ ਤੇ ਪ੍ਰੇਰਕ ਸਾਖੀਆਂ ਨਾਲ ਸੰਕਲਪ ਨਿਭਾਓ।',
      en: 'Track clean living streaks, daily check-ins & unlock milestone badges offline.',
    },
    actionLabel: { hi: 'संकल्प ट्रैकर', pb: 'ਸੰਕਲਪ ਟਰੈਕਰ', en: 'Open Tracker' },
    icon: 'shieldCheck',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'satvik-sankalp' },
  },

  // =========================================================================
  // CATEGORY 3: Wisdom, Lineage & Quizzes (12 Cards: #33 – #42, #57 – #58)
  // =========================================================================
  {
    slotId: 'slot-33-swadhyay',
    slotNumber: 33,
    categoryId: 3,
    kicker: { hi: '११-चरणीय विधि', pb: '੧੧-ਚਰਣੀ ਵਿਧੀ', en: '11-Step Study' },
    title: { hi: 'सतगुरु साखी स्वाध्याय पद्धति', pb: 'ਸਤਿਗੁਰੂ ਸਾਖੀ ਸਵਾਧਿਆਏ ਵਿਧੀ', en: 'Sakhi Swadhyay & Quiz' },
    description: {
      hi: 'मूल पाठ, शब्दार्थ, सत्संग व्याख्या, प्रश्नोत्तरी, तत्व-ज्ञान व प्रमाण-पत्र।',
      pb: 'ਮੂਲ ਪਾਠ, ਸ਼ਬਦਾਰਥ, ਸਤਿਸੰਗ ਵਿਆਖਿਆ, ਕੁਇਜ਼, ਤੱਤ-ਗਿਆਨ ਤੇ ਪ੍ਰਮਾਣ-ਪੱਤਰ।',
      en: 'Complete 11-step study flow with interactive quiz and certificate.',
    },
    actionLabel: { hi: 'स्वाध्याय शुरू', pb: 'ਸਵਾਧਿਆਏ ਸ਼ੁਰੂ', en: 'Begin Study' },
    icon: 'book',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'swadhyay' },
  },
  {
    slotId: 'slot-34-ulatvasi-quiz',
    slotNumber: 34,
    categoryId: 3,
    kicker: { hi: '३D प्रश्नोत्तरी', pb: '੩D ਕੁਇਜ਼', en: '3D Quest' },
    title: { hi: 'उलटबांसी 3D पहेली प्रश्नोत्तरी', pb: 'ਉਲਟਬਾਂਸੀ 3D ਬੁਝਾਰਤ ਕੁਇਜ਼', en: 'Ulatbaasi 3D Quiz' },
    description: {
      hi: '3D कार्ड-फ्लिप के साथ रहस्यमयी उलटबांसी पहेलियों का रोचक अभ्यास।',
      pb: '3D ਕਾਰਡ-ਫਲਿੱਪ ਨਾਲ ਰਹੱਸਮਈ ਉਲਟਬਾਂਸੀ ਬੁਝਾਰਤਾਂ ਦਾ ਰੋਚਕ ਅਭਿਆਸ।',
      en: 'Interactive 3D card-flip challenge decoding Kabir paradoxes.',
    },
    actionLabel: { hi: '3D क्विज खेलें', pb: '3D ਕੁਇਜ਼ ਖੇਡੋ', en: 'Play 3D Quiz' },
    icon: 'sparkles',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'ulatvasi-quiz' },
  },
  {
    slotId: 'slot-35-doha-memory',
    slotNumber: 35,
    categoryId: 3,
    kicker: { hi: 'स्मृति अभ्यास', pb: 'ਯਾਦਦਾਸ਼ਤ ਅਭਿਆਸ', en: 'Memory Trainer' },
    title: { hi: 'दोहा स्मृति ट्रेनर', pb: 'ਦੋਹਾ ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ', en: 'Doha Memory Trainer' },
    description: {
      hi: 'चेतावनी वाणी व पावन साखियों को कंठस्थ करने का संवादात्मक अभ्यास।',
      pb: 'ਚੇਤਾਵਨੀ ਬਾਣੀ ਤੇ ਪਾਵਨ ਸਾਖੀਆਂ ਨੂੰ ਕੰਠ ਕਰਨ ਦਾ ਅਭਿਆਸ।',
      en: 'Interactive fill-in and recall trainer to memorize core couplets.',
    },
    actionLabel: { hi: 'अभ्यास खोलें', pb: 'ਅਭਿਆਸ ਖੋਲ੍ਹੋ', en: 'Start Trainer' },
    icon: 'bookmark',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'view', view: 'doha-memory' },
  },
  {
    slotId: 'slot-36-chetavani-saarang',
    slotNumber: 36,
    categoryId: 3,
    kicker: { hi: '१० प्रमुख दोहे', pb: '੧੦ ਪ੍ਰਮੁੱਖ ਦੋਹੇ', en: 'Awakening' },
    title: { hi: 'चेतावनी सारंग दोहे', pb: 'ਚੇਤਾਵਨੀ ਸਾਰੰਗ ਦੋਹੇ', en: 'Chetawani Saarang' },
    description: {
      hi: 'काल के चक्र व माया से सचेत करने वाले १० प्रभावशाली चेतावनी दोहे।',
      pb: 'ਕਾਲ ਦੇ ਚੱਕਰ ਤੇ ਮਾਇਆ ਤੋਂ ਸੁਚੇਤ ਕਰਨ ਵਾਲੇ ੧੦ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਦੋਹੇ।',
      en: 'Ten powerful awakening couplets warning against illusion.',
    },
    actionLabel: { hi: 'सारंग देखें', pb: 'ਸਾਰੰਗ ਵੇਖੋ', en: 'View Saarang' },
    icon: 'shieldAlert',
    accentClass: 'text-red-700 dark:text-red-300',
    hoverBorderClass: 'hover:border-red-600',
    action: { kind: 'view', view: 'chetavani-saarang' },
  },
  {
    slotId: 'slot-37-shabd-kosha',
    slotNumber: 37,
    categoryId: 3,
    kicker: { hi: 'पावन शब्दावली', pb: 'ਪਾਵਨ ਸ਼ਬਦਾਵਲੀ', en: 'Glossary' },
    title: { hi: 'शब्द-अमृत कोश (संधुक्कड़ी)', pb: 'ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਕੋਸ਼', en: 'Shabd-Amrit Kosha' },
    description: {
      hi: 'सतगुरु कबीर साहेब की वाणी के गूढ़ संधुक्कड़ी व यौगिक शब्दों का कोश।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ ਦਾ ਕੋਸ਼।',
      en: 'Authoritative lexicon of archaic Sandhukkari & yogic terms.',
    },
    actionLabel: { hi: 'शब्दकोश खोलें', pb: 'ਸ਼ਬਦਕੋਸ਼ ਖੋਲ੍ਹੋ', en: 'Open Kosha' },
    icon: 'bookMarked',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'view', view: 'shabd-kosha' },
  },
  {
    slotId: 'slot-38-life-journey',
    slotNumber: 38,
    categoryId: 3,
    kicker: { hi: 'चारों युग परिचय', pb: 'ਚਾਰੇ ਜੁੱਗ ਪਰਿਚਯ', en: 'Biography' },
    title: { hi: 'सतगुरु कबीर साहेब परिचय', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ', en: 'Satguru Kabir Biography' },
    description: {
      hi: 'सत्ययुग, त्रेता, द्वापर व कलयुग में प्राकट्य और काशी-मगहर जीवन चरित्र।',
      pb: 'ਚਾਰਾਂ ਯੁਗਾਂ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਤੇ ਕਾਸ਼ੀ-ਮਗਹਰ ਦਾ ਪਾਵਨ ਜੀਵਨ ਚਰਿੱਤਰ।',
      en: 'Four-era manifestation account and historical life journey.',
    },
    actionLabel: { hi: 'परिचय पढ़ें', pb: 'ਪਰਿਚਯ ਪੜ੍ਹੋ', en: 'Read Bio' },
    icon: 'crown',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'life-journey' },
  },
  {
    slotId: 'slot-39-sacred-leelas',
    slotNumber: 39,
    categoryId: 3,
    kicker: { hi: '२५ लीलाएं', pb: '੨੫ ਲੀਲ੍ਹਾਵਾਂ', en: 'Sacred Leelas' },
    title: { hi: 'सतगुरु अमर लीलाएं व कथाएं', pb: 'ਸਤਿਗੁਰੂ ਅਮਰ ਲੀਲ੍ਹਾਵਾਂ ਤੇ ਕਥਾਵਾਂ', en: 'Sacred Leelas & Episodes' },
    description: {
      hi: 'कमल पुष्प प्राकट्य से मगहर तक सतगुरु कबीर साहेब की २५ दिव्य लीलाएं।',
      pb: 'ਕਮਲ ਫੁੱਲ ਪ੍ਰਕਾਸ਼ ਤੋਂ ਮਗਹਰ ਤੱਕ ਸਤਿਗੁਰੂ ਜੀ ਦੀਆਂ ੨੫ ਦਿਵਯ ਲੀਲ੍ਹਾਵਾਂ।',
      en: '25 miraculous historical episodes and parables across eras.',
    },
    actionLabel: { hi: 'लीलाएं देखें', pb: 'ਲੀਲ੍ਹਾਵਾਂ ਵੇਖੋ', en: 'Explore Leelas' },
    icon: 'crown',
    accentClass: 'text-teal-700 dark:text-teal-300',
    hoverBorderClass: 'hover:border-teal-600',
    action: { kind: 'view', view: 'sacred-leelas' },
  },
  {
    slotId: 'slot-40-acharya-parampara',
    slotNumber: 40,
    categoryId: 3,
    kicker: { hi: 'वंश बयालीस', pb: 'ਵੰਸ਼ ਬਯਾਲੀਸ', en: 'Lineage' },
    title: { hi: 'आचार्य परंपरा इतिहास', pb: 'ਆਚਾਰਯ ਪਰੰਪਰਾ ਇਤਿਹਾਸ', en: 'Acharya Parampara History' },
    description: {
      hi: 'धनी धर्मदास साहेब जी से अटल वंश बयालीस आचार्य गद्दी की पावन वंशावली।',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਤੋਂ ਅਟੱਲ ਵੰਸ਼ ਬਯਾਲੀਸ ਆਚਾਰਯ ਗੱਦੀ ਦਾ ਇਤਿਹਾਸ।',
      en: 'Authentic lineage of Vansh Bayalees & Chouka-Aarti tradition.',
    },
    actionLabel: { hi: 'वंशावली देखें', pb: 'ਵੰਸ਼ਾਵਲੀ ਵੇਖੋ', en: 'View Lineage' },
    icon: 'history',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'acharya-parampara' },
  },
  {
    slotId: 'slot-41-discourse-engine',
    slotNumber: 41,
    categoryId: 3,
    kicker: { hi: '५-चरणीय प्रवचन', pb: '੫-ਚਰਣੀ ਪ੍ਰਵਚਨ', en: 'Discourse' },
    title: { hi: 'पावन प्रवचन इंजन', pb: 'ਪਾਵਨ ਪ੍ਰਵਚਨ ਇੰਜਣ', en: '5-Step Discourse Engine' },
    description: {
      hi: 'सत्संग प्रसंग, तात्विक सार व जीवन आचरण के ५-चरणीय प्रवचन पाठ।',
      pb: 'ਸਤਿਸੰਗ ਪ੍ਰਸੰਗ, ਤੱਤ-ਸਾਰ ਤੇ ਜੀਵਨ ਆਚਰਣ ਦੇ ੫-ਚਰਣੀ ਪ੍ਰਵਚਨ।',
      en: 'Structured 5-step spiritual talks and actionable principles.',
    },
    actionLabel: { hi: 'प्रवचन पढ़ें', pb: 'ਪ੍ਰਵਚਨ ਪੜ੍ਹੋ', en: 'Open Engine' },
    icon: 'feather',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'view', view: 'discourse-engine' },
  },
  {
    slotId: 'slot-42-prashnottari',
    slotNumber: 42,
    categoryId: 3,
    kicker: { hi: 'पंथिक संवाद', pb: 'ਪੰਥਕ ਸੰਵਾਦ', en: 'Panthic Q&A' },
    title: { hi: 'पंथिक प्रश्नोत्तरी (चौका-विधि)', pb: 'ਪੰਥਕ ਪ੍ਰਸ਼ਨੋਤਰੀ (ਚੌਕਾ ਵਿਧੀ)', en: 'Panthic Prashnottari' },
    description: {
      hi: 'चौका-आरती विधि, परवाना, गुरु दीक्षा व पंथिक मर्यादा प्रश्नोत्तरी।',
      pb: 'ਚੌਕਾ-ਆਰਤੀ ਵਿਧੀ, ਪਰਵਾਨਾ, ਗੁਰੂ ਦੀਖਿਆ ਤੇ ਪੰਥਕ ਸਵਾਲ-ਜਵਾਬ।',
      en: 'Essential Q&A on Chouka Aarti rituals, Parwana & core beliefs.',
    },
    actionLabel: { hi: 'प्रश्नोत्तरी खोलें', pb: 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਖੋਲ੍ਹੋ', en: 'View Q&A' },
    icon: 'helpCircle',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'nitnem-gutka' },
  },
  {
    slotId: 'slot-57-kabir-gyan-quiz',
    slotNumber: 57,
    categoryId: 3,
    kicker: { hi: 'ज्ञान परीक्षा', pb: 'ਗਿਆਨ ਪ੍ਰੀਖਿਆ', en: 'Spiritual Quiz' },
    title: { hi: 'कबीर ज्ञान प्रश्नोत्तरी', pb: 'ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ', en: 'Kabir Gyan Quiz' },
    description: {
      hi: 'सद्गुरु कबीर साहेब व वंश परंपरा पर ६ प्रश्नों की परीक्षा दें व प्रमाण-पत्र पाएं।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਤੇ ਵੰਸ਼ ਪਰੰਪਰਾ ਉੱਤੇ ੬ ਪ੍ਰਸ਼ਨਾਂ ਦੀ ਪ੍ਰੀਖਿਆ ਦਿਓ ਤੇ ਸਰਟੀਫਿਕੇਟ ਪਾਓ।',
      en: 'Test your knowledge across 6 questions and download your certificate.',
    },
    actionLabel: { hi: 'प्रश्नोत्तरी खेलें', pb: 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਖੇਡੋ', en: 'Start Quiz' },
    icon: 'trophy',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'view', view: 'kabir-gyan-quiz' },
  },
  {
    slotId: 'slot-58-vansh-bayalis',
    slotNumber: 58,
    categoryId: 3,
    kicker: { hi: '४२ पीढ़ियाँ', pb: '੪੨ ਪੀੜ੍ਹੀਆਂ', en: '42 Generations' },
    title: { hi: 'वंश बयालीस की पावन महिमा', pb: 'ਵੰਸ਼ ਬਿਆਲੀਸ ਦੀ ਪਾਵਨ ਮਹਿਮਾ', en: 'Glory of Vansh Bayalis' },
    description: {
      hi: 'सद्गुरु कबीर साहेब के वरदान, धनी धर्मदास व अटल वंश बयालीस परंपरा का रहस्य।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਵਰਦਾਨ, ਧਨੀ ਧਰਮਦਾਸ ਤੇ ਅਟੱਲ ਵੰਸ਼ ਬਿਆਲੀਸ ਪਰੰਪਰਾ ਦਾ ਰਹੱਸ।',
      en: 'Explore the 4-part guide on the eternal 42-generation lineage and divine promise.',
    },
    actionLabel: { hi: 'महिमा पढ़ें', pb: 'ਮਹਿਮਾ ਪੜ੍ਹੋ', en: 'Read Guide' },
    icon: 'crown',
    accentClass: 'text-orange-700 dark:text-orange-300',
    hoverBorderClass: 'hover:border-orange-600',
    action: { kind: 'view', view: 'vansh-bayalis' },
  },

  // =========================================================================
  // CATEGORY 4: Exploration, Calendar & Tools (9 Cards: #43 – #50, #55)
  // =========================================================================
  {
    slotId: 'slot-43-jantri',
    slotNumber: 43,
    categoryId: 4,
    kicker: { hi: 'पावन जंत्री', pb: 'ਪਾਵਨ ਜੰਤਰੀ', en: 'Almanac' },
    title: { hi: 'साहेब जंत्री (कैलेंडर)', pb: 'ਸਾਹੇਬ ਜੰਤਰੀ (ਕੈਲੰਡਰ)', en: 'Saheb Jantri Calendar' },
    description: {
      hi: 'पूर्णिमा, अमावस्या, संक्रांति, कबीर जयंती एवं पावन पर्व तिथियाँ।',
      pb: 'ਪੂਰਨਮਾਸ਼ੀ, ਮੱਸਿਆ, ਸੰਗਰਾਂਦ ਤੇ ਕਬੀਰ ਜਯੰਤੀ ਸਮੇਤ ਪਾਵਨ ਤਿਥੀਆਂ।',
      en: 'Sacred lunar calendar highlighting Purnima, festivals & observances.',
    },
    actionLabel: { hi: 'जंत्री देखें', pb: 'ਜੰਤਰੀ ਵੇਖੋ', en: 'Open Jantri' },
    icon: 'calendarDays',
    accentClass: 'text-cyan-700 dark:text-cyan-300',
    hoverBorderClass: 'hover:border-cyan-600',
    action: { kind: 'view', view: 'jantri' },
  },
  {
    slotId: 'slot-44-sacred-ashrams',
    slotNumber: 44,
    categoryId: 4,
    kicker: { hi: 'पावन धाम', pb: 'ਪਾਵਨ ਧਾਮ', en: 'Pilgrimages' },
    title: { hi: 'सतगुरु स्थान व पावन धाम', pb: 'ਸਤਿਗੁਰੂ ਅਸਥਾਨ ਤੇ ਪਾਵਨ ਧਾਮ', en: 'Sacred Ashrams & Dham' },
    description: {
      hi: 'लहरतारा, कबीर चौरा, मगहर, बांधवगढ़ एवं दामाखेड़ा धाम विवरण।',
      pb: 'ਲਹਿਰਤਾਰਾ, ਕਬੀਰ ਚੌਰਾ, ਮਗਹਰ ਤੇ ਦਾਮਾਖੇੜਾ ਧਾਮ ਦਾ ਵੇਰਵਾ।',
      en: 'Historical pilgrimage guide to Lahartara, Maghar & Damakheda.',
    },
    actionLabel: { hi: 'धाम दर्शन करें', pb: 'ਧਾਮ ਦਰਸ਼ਨ ਕਰੋ', en: 'View Ashrams' },
    icon: 'mapPin',
    accentClass: 'text-rose-700 dark:text-rose-300',
    hoverBorderClass: 'hover:border-rose-600',
    action: { kind: 'view', view: 'sacred-ashrams' },
  },
  {
    slotId: 'slot-45-universe-map',
    slotNumber: 45,
    categoryId: 4,
    kicker: { hi: 'पिंड-ब्रह्मांड', pb: 'ਪਿੰਡ-ਬ੍ਰਹਮੰਡ', en: 'Cosmology' },
    title: { hi: 'ब्रह्मांड दर्शन (काया नक्शा)', pb: 'ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ (ਕਾਇਆ ਨਕਸ਼ਾ)', en: 'Universe Map' },
    description: {
      hi: 'पिंड-ब्रह्मांड, २१ ब्रह्मांड, षट्चक्र एवं अमरलोक सत्यलोक दर्शन।',
      pb: 'ਪਿੰਡ-ਬ੍ਰਹਮੰਡ, ੨੧ ਬ੍ਰਹਮੰਡ, ਛੇ ਚੱਕਰ ਤੇ ਅਮਰਲੋਕ ਸਤਿ-ਲੋਕ ਦਰਸ਼ਨ।',
      en: 'Interactive cosmological map of subtle chakras and Amar Lok.',
    },
    actionLabel: { hi: 'नक्शा देखें', pb: 'ਨਕਸ਼ਾ ਵੇਖੋ', en: 'Explore Map' },
    icon: 'compass',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'view', view: 'universe-map' },
  },
  {
    slotId: 'slot-46-deep-search',
    slotNumber: 46,
    categoryId: 4,
    kicker: { hi: 'गहन खोज', pb: 'ਗਹਿਨ ਖੋਜ', en: 'Deep Search' },
    title: { hi: 'गहन वाणी एवं शब्द-खोज', pb: 'ਗਹਿਨ ਬਾਣੀ ਤੇ ਸ਼ਬਦ-ਖੋਜ', en: 'Deep Scripture Search' },
    description: {
      hi: 'समस्त ग्रन्थों, साखियों व उलटबांसी पदों में त्वरित शब्द खोज।',
      pb: 'ਸਮੁੱਚੇ ਗ੍ਰੰਥਾਂ, ਸਾਖੀਆਂ ਤੇ ਉਲਟਬਾਂਸੀ ਪਦਾਂ ਵਿੱਚ ਤੁਰੰਤ ਸ਼ਬਦ ਖੋਜ।',
      en: 'Fast full-text word & theme search across all app scriptures.',
    },
    actionLabel: { hi: 'वाणी खोजें', pb: 'ਬਾਣੀ ਖੋਜੋ', en: 'Search Now' },
    icon: 'search',
    accentClass: 'text-slate-700 dark:text-slate-300',
    hoverBorderClass: 'hover:border-slate-600',
    action: { kind: 'view', view: 'deep-search' },
  },
  {
    slotId: 'slot-47-diary',
    slotNumber: 47,
    categoryId: 4,
    kicker: { hi: 'निजी डायरी', pb: 'ਨਿੱਜੀ ਡਾਇਰੀ', en: 'Journal' },
    title: { hi: 'आत्म-चिंतन निजी डायरी', pb: 'ਆਤਮ-ਚਿੰਤਨ ਨਿੱਜੀ ਡਾਇਰੀ', en: 'Spiritual Diary' },
    description: {
      hi: 'व्यक्तिगत स्वाध्याय नोट्स, भाव-चिंतन व सुरक्षित ऑफ़लाइन स्मरण-लेख।',
      pb: 'ਨਿੱਜੀ ਸਵਾਧਿਆਏ ਨੋਟਸ, ਆਤਮ-ਚਿੰਤਨ ਤੇ ਸੁਰੱਖਿਅਤ ਆਫ਼ਲਾਈਨ ਡਾਇਰੀ।',
      en: 'Private offline contemplation journal saved locally on device.',
    },
    actionLabel: { hi: 'डायरी खोलें', pb: 'ਡਾਇਰੀ ਖੋਲ੍ਹੋ', en: 'Open Diary' },
    icon: 'bookmark',
    accentClass: 'text-stone-700 dark:text-stone-300',
    hoverBorderClass: 'hover:border-stone-600',
    action: { kind: 'view', view: 'diary' },
  },
  {
    slotId: 'slot-48-nature-wallpaper',
    slotNumber: 48,
    categoryId: 4,
    kicker: { hi: 'वॉलपेपर इंजन', pb: 'ਵਾਲਪੇपर ਇੰਜਣ', en: 'Wallpapers' },
    title: { hi: 'कुदरत वॉलपेपर जनरेटर', pb: 'ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਜਨਰੇਟਰ', en: 'Nature Wallpaper Engine' },
    description: {
      hi: 'सत्यनाम व पावन दोहों से सुसज्जित दिव्य प्राकृतिक वॉलपेपर निर्माण।',
      pb: 'ਸਤਯਨਾਮ ਤੇ ਪਾਵਨ ਦੋਹਿਆਂ ਨਾਲ ਸਜੇ ਕੁਦਰਤੀ ਵਾਲਪੇਪਰ ਤਿਆਰ ਕਰੋ।',
      en: 'Create serene HD nature wallpapers inscribed with sacred verses.',
    },
    actionLabel: { hi: 'वॉलपेपर बनाएं', pb: 'ਵਾਲਪੇਪਰ ਬਣਾਓ', en: 'Create Art' },
    icon: 'image',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'nature-wallpaper' },
  },
  {
    slotId: 'slot-49-auto-correct',
    slotNumber: 49,
    categoryId: 4,
    kicker: { hi: 'शुद्धीकरण', pb: 'ਸ਼ੁੱਧੀਕਰਨ', en: 'Corrector' },
    title: { hi: 'पावन वाणी ऑटो-करेक्ट', pb: 'ਪਾਵਨ ਬਾਣੀ ਆਟੋ-ਕਰੈਕਟ', en: 'Sacred Auto-Correct Tool' },
    description: {
      hi: 'पावन साखी व वाणी की वर्तनी व लिप्यंतरण शुद्ध करने का उपकरण।',
      pb: 'ਪਾਵਨ ਸਾਖੀ ਤੇ ਬਾਣੀ ਦੇ ਸ਼ਬਦ ਜੋੜ ਸ਼ੁੱਧ ਕਰਨ ਦਾ ਉਪਕਰਣ।',
      en: 'Standardize and proofread sacred verse spellings seamlessly.',
    },
    actionLabel: { hi: 'उपकरण खोलें', pb: 'ਉਪਕਰਣ ਖੋਲ੍ਹੋ', en: 'Open Tool' },
    icon: 'spellCheck',
    accentClass: 'text-orange-700 dark:text-orange-300',
    hoverBorderClass: 'hover:border-orange-600',
    action: { kind: 'view', view: 'auto-correct' },
  },
  {
    slotId: 'slot-50-health-diagnostic',
    slotNumber: 50,
    categoryId: 4,
    kicker: { hi: 'सिस्टम सेहत', pb: 'ਸਿਸਟਮ ਸਿਹਤ', en: 'Diagnostics' },
    title: { hi: 'ऐप सेहत व ऑफ़लाइन निदान', pb: 'ਐਪ ਸਿਹਤ ਤੇ ਆਫ਼ਲਾਈਨ ਜਾਂਚ', en: 'App Health & Offline Status' },
    description: {
      hi: 'ऑफ़लाइन कैश, लोकल संग्रहण एवं ऐप कार्यक्षमता की जांच स्थिति।',
      pb: 'ਆਫ਼ਲਾਈਨ ਕੈਸ਼, ਲੋਕਲ ਸਟੋਰੇਜ ਅਤੇ ਸਿਸਟਮ ਕਾਰਗੁਜ਼ਾਰੀ ਦੀ ਜਾਂਚ।',
      en: 'Inspect offline cache readiness, storage health & performance.',
    },
    actionLabel: { hi: 'सेहत जांचें', pb: 'ਸਿਹਤ ਜਾਂਚੋ', en: 'Check Health' },
    icon: 'activity',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'view', view: 'health-diagnostic' },
  },
  {
    slotId: 'slot-55-vani-card-maker',
    slotNumber: 55,
    categoryId: 4,
    kicker: { hi: 'कार्ड स्टूडियो', pb: 'ਕਾਰਡ ਸਟੂਡੀਓ', en: 'Card Studio' },
    title: { hi: 'कबीर वाणी कार्ड मेकर', pb: 'ਕਬੀਰ ਬਾਣੀ ਕਾਰਡ ਮੇਕਰ', en: 'Kabir Vani Card Maker' },
    description: {
      hi: 'सुंदर आध्यात्मिक थीम व अपने नाम के साथ पावन संदेश कार्ड डाउनलोड एवं शेयर करें।',
      pb: 'ਸੁੰਦਰ ਰੂਹਾਨੀ ਥੀਮ ਤੇ ਆਪਣੇ ਨਾਮ ਨਾਲ ਪਾਵਨ ਸੰਦੇਸ਼ ਕਾਰਡ ਡਾਊਨਲੋਡ ਅਤੇ ਸਾਂਝਾ ਕਰੋ।',
      en: 'Design & export spiritual greeting cards with themes and your courtesy name.',
    },
    actionLabel: { hi: 'कार्ड बनाएं', pb: 'ਕਾਰਡ ਬਣਾਓ', en: 'Create Card' },
    icon: 'image',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'view', view: 'vani-card-maker' },
  },

  // =========================================================================
  // CATEGORY 5: User Guide, About Us & App Policies (4 Cards: #51 – #54)
  // =========================================================================
  {
    slotId: 'slot-51-user-guide',
    slotNumber: 51,
    categoryId: 5,
    kicker: { hi: 'मार्गदर्शिका', pb: 'ਮਾਰਗਦਰਸ਼ਿਕਾ', en: 'User Guide' },
    title: { hi: 'उपयोगकर्ता मार्गदर्शिका', pb: 'ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ', en: 'User Guide' },
    description: {
      hi: 'ऐप के समस्त ग्रन्थों व साधना टूल्स के उपयोग की सरल विधि।',
      pb: 'ਐਪ ਦੇ ਸਾਰੇ ਭਾਗਾਂ ਤੇ ਸਾਧਨਾ ਫੀਚਰਸ ਦੀ ਵਰਤੋਂ ਵਿਧੀ।',
      en: 'Step-by-step instructions to explore every app feature.',
    },
    actionLabel: { hi: 'मार्गदर्शिका खोलें', pb: 'ਮਾਰਗਦਰਸ਼ਿਕਾ ਪੜ੍ਹੋ', en: 'Read Guide' },
    icon: 'book',
    accentClass: 'text-amber-700 dark:text-amber-300',
    hoverBorderClass: 'hover:border-amber-600',
    action: { kind: 'about-modal', section: 'guide' },
  },
  {
    slotId: 'slot-52-about-us',
    slotNumber: 52,
    categoryId: 5,
    kicker: { hi: 'परिचय', pb: 'ਜਾਣ-ਪਛਾਣ', en: 'About' },
    title: { hi: 'हमारे बारे में', pb: 'ਸਾਡੇ ਬਾਰੇ', en: 'About Us' },
    description: {
      hi: 'साहेब वर्ल्ड का पवित्र उद्देश्य व सतगुरु ज्ञान सेवा परिचय।',
      pb: 'ਸਾਹੇਬ ਵਰਲਡ ਮਿਸ਼ਨ ਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਗਿਆਨ ਪ੍ਰਸਾਰ।',
      en: 'Our mission to preserve Satguru Kabir Saheb timeless wisdom.',
    },
    actionLabel: { hi: 'विवरण पढ़ें', pb: 'ਵੇਰਵਾ ਵੇਖੋ', en: 'Learn More' },
    icon: 'info',
    accentClass: 'text-orange-700 dark:text-orange-300',
    hoverBorderClass: 'hover:border-orange-600',
    action: { kind: 'about-modal', section: 'about' },
  },
  {
    slotId: 'slot-53-disclaimer',
    slotNumber: 53,
    categoryId: 5,
    kicker: { hi: 'सूचना', pb: 'ਸਪਸ਼ਟੀਕਰਨ', en: 'Notice' },
    title: { hi: 'अस्वीकरण', pb: 'ਅਸਵੀਕਾਰਤਾ', en: 'Disclaimer' },
    description: {
      hi: 'पावन ग्रन्थ संदर्भ एवं साधना हेतु आवश्यक वैधानिक सूचना।',
      pb: 'ਗ੍ਰੰਥਾਂ, ਇਤਿਹਾਸਕ ਹਵਾਲਿਆਂ ਤੇ ਸਾਧਨਾ ਸਬੰਧੀ ਮਹੱਤਵਪੂਰਨ ਸੂਚਨਾ।',
      en: 'Important scriptural basis & spiritual practice guidance.',
    },
    actionLabel: { hi: 'अस्वीकरण देखें', pb: 'ਅਸਵੀਕਾਰਤਾ ਪੜ੍ਹੋ', en: 'Read Notice' },
    icon: 'shieldCheck',
    accentClass: 'text-indigo-700 dark:text-indigo-300',
    hoverBorderClass: 'hover:border-indigo-600',
    action: { kind: 'about-modal', section: 'disclaimer' },
  },
  {
    slotId: 'slot-54-privacy-policy',
    slotNumber: 54,
    categoryId: 5,
    kicker: { hi: 'सुरक्षा', pb: 'ਗੋਪਨੀਯਤਾ', en: 'Privacy' },
    title: { hi: 'गोपनीयता नीति', pb: 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ', en: 'Privacy Policy' },
    description: {
      hi: 'आपकी निजता, ऑफ़लाइन डेटा एवं सुरक्षा से संबंधित स्पष्ट नीति।',
      pb: 'ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਤੇ ਲੋਕਲ ਸਟੋਰੇਜ ਡੇਟਾ ਦੀ ਪੂਰਨ ਸੁਰੱਖਿਆ।',
      en: 'How your local journal data and device privacy are protected.',
    },
    actionLabel: { hi: 'नीति पढ़ें', pb: 'ਨੀਤੀ ਵੇਖੋ', en: 'View Policy' },
    icon: 'lock',
    accentClass: 'text-emerald-700 dark:text-emerald-300',
    hoverBorderClass: 'hover:border-emerald-600',
    action: { kind: 'about-modal', section: 'privacy' },
  },
];

// Backward-compatible alias for any callers importing the previous constant name (now 58 cards = 54 + 4 new modules)
export const ALL_54_DASHBOARD_CARDS = ALL_DASHBOARD_CARDS;
