export interface SggsKabirVerse {
  id: string;
  category: 'salok' | 'shabad' | 'bavan-akhari' | 'dialogue';
  raag?: string;
  ang: number;
  title: {
    pb: string;
    hi: string;
    en: string;
  };
  moolGurmukhi: string[];
  moolDevanagari: string[];
  moolRoman: string[];
  shabdarth: {
    word: string;
    meaning: {
      pb: string;
      hi: string;
      en: string;
    };
  }[];
  bhavarth: {
    pb: string;
    hi: string;
    en: string;
  };
  chintan: {
    pb: string;
    hi: string;
    en: string;
  };
  acharana: {
    pb: string;
    hi: string;
    en: string;
  };
  samarpan: {
    pb: string;
    hi: string;
    en: string;
  };
  sggsReference: string;
}

export const SGGS_KABIR_STATS = {
  totalShabads: 227,
  totalSaloks: 243,
  totalRaags: 17,
  totalAngRange: 'Ang 323 to Ang 1377',
  specialCompositions: ['ਬਾਵਨ ਅਖਰੀ (Bavan Akhari)', 'ਥਿਤੀ (Thiti)', 'ਵਾਰ ੭ (Gauri 7 Vaar)'],
};

export const SGGS_KABIR_RAAGS = [
  { namePb: 'ਗਉੜੀ', nameHi: 'गउड़ी', nameEn: 'Gauri', count: 74, angStart: 323 },
  { namePb: 'ਆਸਾ', nameHi: 'आसा', nameEn: 'Asa', count: 37, angStart: 475 },
  { namePb: 'ਗੂਜਰੀ', nameHi: 'गूजरी', nameEn: 'Gujri', count: 2, angStart: 524 },
  { namePb: 'ਸੋਰਠਿ', nameHi: 'सोरठि', nameEn: 'Sorath', count: 11, angStart: 654 },
  { namePb: 'ਧਨਾਸਰੀ', nameHi: 'धनासरी', nameEn: 'Dhanasri', count: 5, angStart: 691 },
  { namePb: 'ਜੈਤਸਰੀ', nameHi: 'जैतसरी', nameEn: 'Jaitsri', count: 1, angStart: 709 },
  { namePb: 'ਟੋਡੀ', nameHi: 'टोडी', nameEn: 'Todi', count: 1, angStart: 718 },
  { namePb: 'ਤਿਲੰਗ', nameHi: 'तिलंग', nameEn: 'Tilang', count: 1, angStart: 727 },
  { namePb: 'ਸੂਹੀ', nameHi: 'सूही', nameEn: 'Suhi', count: 5, angStart: 792 },
  { namePb: 'ਬਿਲਾਵਲੁ', nameHi: 'बिलावलु', nameEn: 'Bilaval', count: 12, angStart: 855 },
  { namePb: 'ਗੋਂਡ', nameHi: 'गोंड', nameEn: 'Gaund', count: 11, angStart: 870 },
  { namePb: 'ਰਾਮਕਲੀ', nameHi: 'रामकली', nameEn: 'Ramkali', count: 12, angStart: 968 },
  { namePb: 'ਮਾਰੂ', nameHi: 'मारू', nameEn: 'Maru', count: 12, angStart: 1102 },
  { namePb: 'ਕੇਦਾਰਾ', nameHi: 'केदारा', nameEn: 'Kedara', count: 6, angStart: 1123 },
  { namePb: 'ਭੈਰਉ', nameHi: 'भैरउ', nameEn: 'Bhairav', count: 19, angStart: 1157 },
  { namePb: 'ਬਸੰਤੁ', nameHi: 'बसंतु', nameEn: 'Basant', count: 8, angStart: 1193 },
  { namePb: 'ਸਾਰੰਗ', nameHi: 'सारंग', nameEn: 'Sarang', count: 3, angStart: 1251 },
  { namePb: 'ਮਲਾਰ', nameHi: 'मलार', nameEn: 'Malar', count: 2, angStart: 1284 },
  { namePb: 'ਪ੍ਰਭਾਤੀ', nameHi: 'प्रभाती', nameEn: 'Prabhati', count: 5, angStart: 1349 },
  { namePb: 'ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀਉ ਕੇ', nameHi: 'सलोक भगत कबीर जीउ के', nameEn: 'Salok Bhagat Kabir Jio Ke', count: 243, angStart: 1364 },
];

export const FALLBACK_HUKAMNAMA_VERSE: SggsKabirVerse = {
  id: 'sggs-salok-1',
  category: 'salok',
  ang: 1364,
  title: {
    pb: 'ਸਲੋਕੁ ੧ • ਮੇਰੀ ਸਿਮਰਨੀ',
    hi: 'सलोक १ • मेरी सिमरनी',
    en: 'Salok 1 • True Rosary',
  },
  moolGurmukhi: [
    'ਕਬੀਰ ਮੇਰੀ ਸਿਮਰਨੀ ਰਸਨਾ ਊਪਰਿ ਰਾਮੁ ॥',
    'ਆਦਿ ਜੁਗਾਦੀ ਸਗਲ ਭਗਤ ਤਾ ਕੋ ਸੁਖੁ ਬਿਸ੍ਰਾਮੁ ॥੧॥',
  ],
  moolDevanagari: [
    'कबीर मेरी सिमरनी रसना ऊपरि रामु ॥',
    'आदि जुगादी सगल भगत ता को सुखु बिस्रामु ॥१॥',
  ],
  moolRoman: [
    'Kabeer maeree simaranee rasanaa oopar raam ||',
    'Aadh jugaadhee sagal bhagat thaa ko sukh bisraam ||1||',
  ],
  shabdarth: [
    {
      word: 'सिमरनी',
      meaning: { pb: 'ਮਾਲਾ / ਸਿਮਰਨ', hi: 'सुमिरनी माला', en: 'Rosary / Remembrance' },
    },
    {
      word: 'रसना',
      meaning: { pb: 'ਜੀਭ', hi: 'जिह्वा', en: 'Tongue' },
    },
  ],
  bhavarth: {
    pb: 'ਹੇ ਕਬੀਰ! ਮੇਰੀ ਅਸਲ ਮਾਲਾ ਮੇਰੀ ਜੀਭ ਉੱਤੇ ਵਸਦਾ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਹੈ। ਆਦਿ ਜੁਗਾਦਿ ਤੋਂ ਸਾਰੇ ਭਗਤਾਂ ਨੂੰ ਇਸੇ ਨਾਮ ਤੋਂ ਪਰਮ ਸੁੱਖ ਤੇ ਵਿਸ਼ਰਾਮ ਮਿਲਦਾ ਹੈ।',
    hi: 'सतगुरु कबीर साहेब कहते हैं कि मेरी सच्ची सुमिरनी मेरी जिह्वा पर निरंतर प्रभु नाम का जप है। आदि-अनादि से समस्त भक्तों को इसी सत्यनाम से परम सुख और शांति प्राप्त होती है।',
    en: 'Kabir says: My true rosary is the Name of the Lord dwelling upon my tongue. From the beginning of time, all devotees find eternal peace and rest therein.',
  },
  chintan: {
    pb: 'ਬਾਹਰੀ ਮਾਲਾ ਫੇਰਨ ਨਾਲੋਂ ਜੀਭ ਅਤੇ ਸੁਰਤਿ ਉੱਤੇ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਵਸਾਉਣਾ ਸੱਚਾ ਸਿਮਰਨ ਹੈ।',
    hi: 'बाहरी दिखावे से ऊपर उठकर प्रत्येक श्वास और वाणी में सत्यनाम का सुमिरन करें।',
    en: 'Rise above external rituals and anchor your breath and speech in constant remembrance.',
  },
  acharana: {
    pb: 'ਮਿੱਠੇ, ਸੱਚੇ ਅਤੇ ਨਿਮਰ ਬਚਨ ਬੋਲੋ।',
    hi: 'आज वाणी में मधुरता, सत्य और संयम रखें।',
    en: 'Speak only truthful, gentle, and uplifting words today.',
  },
  samarpan: {
    pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਰਸਨਾ ਉੱਤੇ ਸਦਾ ਆਪਣਾ ਨਾਮ ਵਸਾਓ।',
    hi: 'हे सतगुरु कबीर साहेब! मेरी रसना पर आपका पावन सत्यनाम सदा विराजमान रहे।',
    en: 'O Satguru! May Your sacred Name always dwell upon my tongue.',
  },
  sggsReference: 'Sri Guru Granth Sahib Ji • Ang 1364',
};
