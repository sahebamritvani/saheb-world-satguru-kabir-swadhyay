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
  { namePb: 'ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀਉ ਕੇ', nameHi: 'सलोक भगत कबीर जीउ के', nameEn: 'Salok Bhagat Kabir Jio Ke', count: 243, angStart: 1364 }
];

export const SGGS_KABIR_VERSES_COLLECTION: SggsKabirVerse[] = [
  // -------------------------------------------------------------------------
  // SALOK 1 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-1',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੧: ਰਸਨਾ ਊਪਰਿ ਰਾਮੁ (ਪ੍ਰਭੂ ਸਿਮਰਨੀ)',
      hi: 'सलोक १: रसना ऊपरि रामु (प्रभु सिमरनी)',
      en: 'Salok 1: Divine Name upon the Tongue (Spiritual Rosary)',
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
      'Kabīr merī simranī rasnā ūpar rām.',
      'Ādi jugādī sagal bhagat tā ko sukh bisrām. ||1||',
    ],
    shabdarth: [
      {
        word: 'ਸਿਮਰਨੀ / सिमरनी',
        meaning: {
          pb: 'ਮਾਲਾ (ਜਪਣ ਵਾਲੀ ਮਾਲਾ)',
          hi: 'माला (स्मरण करने वाली मनकों की माला)',
          en: 'Rosary / prayer beads for meditation',
        },
      },
      {
        word: 'ਰਸਨਾ / रसना',
        meaning: {
          pb: 'ਜੀਭ, ਜ਼ਬਾਨ',
          hi: 'जिह्वा, वाणी',
          en: 'Tongue / speech',
        },
      },
      {
        word: 'ਬਿਸ੍ਰਾਮੁ / बिस्रामु',
        meaning: {
          pb: 'ਆਤਮਿਕ ਸ਼ਾਂਤੀ, ਸੁਖ ਤੇ ਟਿਕਾਉ',
          hi: 'आत्मिक शांति, विश्राम व शाश्वत आनंद',
          en: 'Spiritual tranquility, rest, and supreme peace',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕਿ ਮੇਰੀ (ਸਿਮਰਨੀ) ਮਾਲਾ ਏਹੀ ਹੈ ਕਿ ਮੇਰੀ ਜ਼ਬਾਨ ਤੇ ਹਰ ਸਮੇਂ ਰਾਮ ਦਾ ਨਾਮ ਰਹਿੰਦਾ ਹੈ। ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਵੀ ਜੁਗਾਂ ਦੇ ਆਦਿ ਤੋਂ ਜੋ ਸਾਰੇ ਭਗਤ ਹੋਏ ਹਨ, ਉਨ੍ਹਾਂ ਨੇ ਵੀ ਇਸ ਰਾਮ ਨਾਮ ਦੀ ਮਾਲਾ ਦੁਆਰਾ ਹੀ ਆਤਮ ਸੁਖ ਪ੍ਰਾਪਤ ਕੀਤਾ ਹੈ॥ ੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- कि मेरी (सिमरनी) माला यही है कि मेरी जीभ पर हर समय प्रभु का पावन नाम रहता है। इससे पहले भी युगों के आदि से जो समस्त भक्त हुए हैं, उन्होंने भी इसी नाम-स्मरण की माला द्वारा ही आत्म-सुख प्राप्त किया है॥ १॥',
      en: 'Satguru Kabir Saheb proclaims: My rosary is that the Divine Name constantly abides upon my tongue. From the primordial dawn of the ages, all holy devotees have attained supreme spiritual tranquility and divine peace solely through this inner contemplation of the Divine Name. ||1||',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਮਣਕਿਆਂ ਦੀ ਮਾਲਾ ਫੇਰਨ ਦੀ ਥਾਂ ਜੀਭ ਅਤੇ ਅੰਦਰੂਨੀ ਸੁਰਤ ਨਾਲ ਹਰ ਸਵਾਸ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਨਿਰੰਤਰ ਸਿਮਰਨ ਹੀ ਸੱਚੀ ਸਿਮਰਨੀ ਹੈ।',
      hi: 'बाहरी मनकों की माला फेरने के स्थान पर जिह्वा और अंतःकरण की सुरति से प्रति श्वास में सत्यनाम का निरंतर सिमरन ही सच्ची माला है।',
      en: 'Rather than turning physical beads, keeping the Divine Name vibrant on the tongue and soul with every breath is the true spiritual rosary.',
    },
    acharana: {
      pb: 'ਨਿੱਤ ਕਾਰ-ਵਿਹਾਰ ਕਰਦਿਆਂ ਵੀ ਜ਼ਬਾਨ ਤੇ ਹਿਰਦੇ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਜਾਪ ਬਣਾਈ ਰੱਖੋ।',
      hi: 'दैनिक कार्य-व्यवहार करते हुए भी जिह्वा व हृदय में सत्यनाम का सतत स्मरण बनाए रखें।',
      en: 'Maintain continuous remembrance of Satyanaam in heart and speech amidst all daily tasks.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣੀ ਰਸਨਾ ਅਤੇ ਚੇਤਨਾ ਸਮਰਪਿਤ ਕਰਕੇ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰੋ।',
      hi: 'सतगुरु के चरणों में अपनी रसना और चेतना समर्पित कर विश्राम का अनुभव करें।',
      en: 'Surrender tongue and awareness at the feet of Satguru to experience eternal peace.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 2 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-2',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੨: ਬਲਿਹਾਰੀ ਇਸ ਜਾਤਿ ਕਉ (ਸਿਰਜਨਹਾਰੁ)',
      hi: 'सलोक २: बलिहारी इस जाति कउ (सिरजनहारु)',
      en: 'Salok 2: Blessed is this Birth that Contemplates the Creator',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੇਰੀ ਜਾਤਿ ਕਉ ਸਭੁ ਕੋ ਹਸਨੇਹਾਰੁ ॥',
      'ਬਲਿਹਾਰੀ ਇਸ ਜਾਤਿ ਕਉ ਜਿਹ ਜਪਿਓ ਸਿਰਜਨਹਾਰੁ ॥੨॥',
    ],
    moolDevanagari: [
      'कबीर मेरी जाति कउ सभु को हसनेहारु ॥',
      'बलिहारी इस जाति कउ जिह जपिओ सिरजनहारु ॥२॥',
    ],
    moolRoman: [
      'Kabīr merī jāt kau sabh ko hasnehār.',
      'Balihārī is jāt kau jih japio sirjanhār. ||2||',
    ],
    shabdarth: [
      {
        word: 'ਹਸਨੇਹਾਰੁ / हसनेहारु',
        meaning: {
          pb: 'ਹਾਸਾ ਉਡਾਉਣ ਵਾਲਾ, ਨਿੰਦਕ',
          hi: 'उपहास करने वाला, हँसने वाला',
          en: 'Mocker / one who ridicules',
        },
      },
      {
        word: 'ਬਲਿਹਾਰੀ / बलिहारी',
        meaning: {
          pb: 'ਕੁਰਬਾਨ, ਸਦਕੇ ਜਾਣਾ',
          hi: 'कुर्बान, न्योछावर',
          en: 'Sacrifice / surrender in deep gratitude',
        },
      },
      {
        word: 'ਸਿਰਜਨਹਾਰੁ / सिरजनहारु',
        meaning: {
          pb: 'ਸ੍ਰਿਸ਼ਟੀ ਦਾ ਕਰਤਾ, ਪਰਮਾਤਮਾ',
          hi: 'सृष्टिकर्ता, परमात्मा',
          en: 'The Divine Creator of the Universe',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੇਰੀ ਇਸ ਜੁਲਾਹੇ ਦੀ ਜ਼ਾਤ ਨੂੰ ਨੀਵੀਂ ਸਮਝ ਕੇ ਹਰ ਕੋਈ ਹੱਸਦਾ ਹੈ, ਪਰ ਮੈਂ ਇਸ ਆਪਣੀ ਨੀਵੀਂ ਜ਼ਾਤ ਤੋਂ ਕੁਰਬਾਨ ਜਾਂਦਾ ਹਾਂ। ਜਿਸ ਨੇ ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਜਪਿਆ ਹੈ॥੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मेरी इस जुलाहे की जाति को नीची समझकर हर कोई उपहास करता है, किंतु मैं अपनी इस जाति पर बलिहारी (कुर्बान) जाता हूँ, जिसने सृजनहार परमात्मा का नाम जपा है॥ २॥',
      en: 'Satguru Kabir Saheb proclaims: Everyone laughs at my weaver caste, considering it humble and low. Yet I am a sacrifice to this very birth, because through it I have meditated upon the Divine Creator of all. ||2||',
    },
    chintan: {
      pb: 'ਕੋਈ ਵੀ ਕੁਲ ਜਾਂ ਜ਼ਾਤ ਨੀਵੀਂ ਜਾਂ ਉੱਚੀ ਨਹੀਂ ਹੁੰਦੀ। ਜਿਸ ਜੀਵ ਨੇ ਸਿਰਜਨਹਾਰ ਨੂੰ ਜਪ ਲਿਆ, ਉਸ ਦਾ ਜੀਵਨ ਸਰਵੋੱਚ ਅਤੇ ਧੰਨ ਹੋ ਗਿਆ।',
      hi: 'संसार में कोई कुल या जाति ऊँची-नीची नहीं होती। जिसने सृजनहार परमात्मा को जान लिया, उसका जीवन धन्य और सर्वोच्च हो गया।',
      en: 'No caste or lineage is inherently high or low in spirit; whoever remembers the Creator is exalted beyond measure.',
    },
    acharana: {
      pb: 'ਸਮਾਜਿਕ ਹਉਮੈ ਅਤੇ ਜ਼ਾਤ-ਪਾਤ ਦੇ ਭੇਦਭਾਵ ਨੂੰ ਮਿਟਾ ਕੇ ਸਭਨਾਂ ਵਿੱਚ ਇੱਕੋ ਜੋਤ ਦਾ ਦੀਦਾਰ ਕਰੋ।',
      hi: 'सामाजिक अहंकार व जाति-भेद का त्याग कर समस्त जीवों में एक ही दिव्य चेतना का दर्शन करें।',
      en: 'Eradicate caste arrogance and behold the single divine light in every living being.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਮਾਜਿਕ ਪਛਾਣ ਦਾ ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਸਿਰਜਨਹਾਰ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਓ।',
      hi: 'अपनी सामाजिक पहचान का अहंकार त्यागकर प्रभु चरणों में समर्पित रहें।',
      en: 'Renounce pride of worldly identity and abide surrendered to the Creator.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 3 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-3',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੩: ਡਗਮਗ ਕਿਆ ਕਰਹਿ (ਰਾਮ ਨਾਮ ਰਸੁ)',
      hi: 'सलोक ३: डगमग किआ करहि (राम नाम रसु)',
      en: 'Salok 3: Why Do You Waver? Drink the Nectar of the Name',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਡਗਮਗ ਕਿਆ ਕਰਹਿ ਕਹਾ ਡੁਲਾਵਹਿ ਜੀਉ ॥',
      'ਸਰਬ ਸੂਖ ਕੋ ਨਾਇਕੋ ਰਾਮ ਨਾਮ ਰਸੁ ਪੀਉ ॥੩॥',
    ],
    moolDevanagari: [
      'कबीर डगमग किआ करहि कहा डुलावहि जीउ ॥',
      'सरब सूख को नाइको राम नाम रसु पीउ ॥३॥',
    ],
    moolRoman: [
      'Kabīr dagmag kiā karahi kahā dulāvahi jīu.',
      'Sarab sūkh ko nāiko rām nām ras pīu. ||3||',
    ],
    shabdarth: [
      {
        word: 'ਡਗਮਗ / डगमग',
        meaning: {
          pb: 'ਡਾਵਾਂ-ਡੋਲ, ਸ਼ੰਕਾਗ੍ਰਸਤ',
          hi: 'डांवाडोल, संशयग्रस्त, अस्थिर',
          en: 'Wavering, oscillating in doubt',
        },
      },
      {
        word: 'ਨਾਇਕੋ / नाइको',
        meaning: {
          pb: 'ਮਾਲਕ, ਸੁਆਮੀ, ਕਰਤਾ',
          hi: 'स्वामी, अधिपति, प्रभु',
          en: 'Master, supreme sovereign',
        },
      },
      {
        word: 'ਰਸੁ ਪੀਉ / रसु पीउ',
        meaning: {
          pb: 'ਅੰਮ੍ਰਿਤ ਰਸ ਦਾ ਪਾਨ ਕਰਨਾ',
          hi: 'अमृत रस का पान करना',
          en: 'Drink the supreme divine nectar',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਡਾਵਾਂ ਡੋਲ ਹੋ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਕਿਉਂ ਡੁਲਾਉਂਦਾ ਹੈ। ਸਾਰੇ ਸੁਖਾਂ ਦਾ ਸੁਆਮੀ ਜੋ ਵਾਹਿਗੁਰੂ ਹੈ, ਉਸਦੇ ਨਾਮ ਅੰਮ੍ਰਿਤ ਰਸ ਨੂੰ ਪੀਣਾ ਕਰ, ਉਸ ਦਾ ਸਿਮਰਨ ਕਰ॥ ੩ ॥',
      hi: 'हे कबीर! डांवाडोल होकर अपने मन को क्यों विचलित करता है? समस्त सुखों के अधिपति जो परमात्मा हैं, उनके पावन नाम का अमृत रस पान कर, उन्हीं का सिमरन कर॥ ३॥',
      en: 'O Kabir! Why do you falter, and why do you let your soul waver? The Divine Lord is the master of all joys; drink the elixir of the Divine Name. ||3||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰ ਦੇ ਦੁੱਖ-ਸੁੱਖ ਆਉਣ-ਜਾਣ ਵਾਲੇ ਹਨ। ਮਨ ਨੂੰ ਸੰਸਾਰਕ ਉਤਰਾਅ-ਚੜ੍ਹਾਅ ਵਿੱਚ ਡੋਲਣ ਨਾ ਦਿਓ; ਸਤਯਨਾਮ ਵਿੱਚ ਸਥਿਰ ਹੋਵੋ।',
      hi: 'संसार के सुख-दुःख नश्वर हैं। अपने मन को जगत के उतार-चढ़ाव में डांवाडोल न होने दें; सत्यनाम में अचल हो जाएं।',
      en: 'Worldly joys and sorrows are transient; do not let the mind vacillate, but anchor firmly in Satyanaam.',
    },
    acharana: {
      pb: 'ਕਠਿਨ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਵੀ ਧੀਰਜ ਰੱਖ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਦਾ ਆਸਰਾ ਲਓ।',
      hi: 'विपरीत परिस्थितियों में भी धैर्य रखकर गुरु के पावन शब्द का आश्रय लें।',
      en: 'Maintain unwavering equanimity and trust the Master through all trials.',
    },
    samarpan: {
      pb: 'ਸਾਰੇ ਸੁਖਾਂ ਦੇ ਦਾਤੇ ਸਤਿਪੁਰਸ਼ ਅੱਗੇ ਆਪਣੇ ਚੰਚਲ ਮਨ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਰਪਨ ਕਰ ਦਿਓ।',
      hi: 'समस्त सुखों के दाता प्रभु के सम्मुख अपने चंचल मन को पूर्णतः समर्पित करें।',
      en: 'Offer the wandering mind to the Master of all bliss.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 4 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-4',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੪: ਕੰਚਨ ਕੇ ਕੁੰਡਲ (ਨਾਮ ਬਿਨੁ ਦਾਧੇ ਕਾਨ)',
      hi: 'सलोक ४: कंचन के कुंडल (नाम बिनु दाधे कान)',
      en: 'Salok 4: Golden Earrings are Like Burnt Reeds Without the Name',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੰਚਨ ਕੇ ਕੁੰਡਲ ਬਨੇ ਊਪਰਿ ਲਾਲ ਜੜਾਉ ॥',
      'ਦੀਸਹਿ ਦਾਧੇ ਕਾਨ ਜਿਉ ਜਿਨ੍ ਮਨਿ ਨਾਹੀ ਨਾਉ ॥੪॥',
    ],
    moolDevanagari: [
      'कबीर कंचन के कुंडल बने ऊपरि लाल जड़ाउ ॥',
      'दीसहि दाधे कान जिउ जिन्ह मनि नाही नाउ ॥४॥',
    ],
    moolRoman: [
      'Kabīr kanchan ke kundal bane ūpar lāl jaṛāu.',
      'Dīsahi dādhe kān jiu jinh man nāhī nāu. ||4||',
    ],
    shabdarth: [
      {
        word: 'ਕੰਚਨ / कंचन',
        meaning: {
          pb: 'ਸੋਨਾ (ਸਵਰਨ)',
          hi: 'स्वर्ण, शुद्ध सोना',
          en: 'Gold',
        },
      },
      {
        word: 'ਦਾਧੇ ਕਾਨ / दाधे कान',
        meaning: {
          pb: 'ਸੜੇ ਹੋਏ ਕਾਨੇ (ਜਲੇ ਹੋਏ ਸਰਕੰਡੇ)',
          hi: 'जले हुए सरकंडे (राख हुए काने)',
          en: 'Burnt reeds / charred sticks',
        },
      },
      {
        word: 'ਨਾਉ / नाउ',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦਾ ਨਾਮ, ਸਤਯਨਾਮ',
          hi: 'प्रभु का पावन नाम, सत्यनाम',
          en: 'Divine Name of the Supreme Truth',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਸੋਨੇ ਦੇ ਕੁੰਡਲ (ਕੰਨ ਦੇ ਵਾਲੇ) ਜਿਨ੍ਹਾਂ ਉੱਪਰ ਲਾਲ ਜੜੇ ਹੋਏ ਹਨ, ਉਹ ਮੈਨੂੰ ਇਉਂ ਦਿਸਦੇ ਹਨ। ਜਿਵੇਂ ਸੜੇ ਹੋਏ ਕਾਨੇ, ਜੋ ਬਾਹਰੋਂ ਲਿਸ਼ਕਦੇ ਹਨ, ਪਰ ਅੰਦਰੋਂ ਸੜੇ ਹੋਏ ਸੁਆਹ ਹੁੰਦੇ ਹਨ। ਏਹੀ ਹਾਲ ਉਨ੍ਹਾਂ ਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਦੇ ਮਨ ਵਿਚ ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਨਹੀਂ ॥ ੪॥',
      hi: 'हे कबीर! सोने के कुंडल (कर्णफूल) जिन पर लाल जड़े हुए हों, वे मुझे ऐसे दिखते हैं जैसे जले हुए काने जो बाहर से चमकते हैं पर भीतर से जलकर राख होते हैं। यही दशा उन मनुष्यों की है जिनके मन में प्रभु का नाम नहीं है॥ ४॥',
      en: 'O Kabir! Gold earrings studded with jewels appear like burnt reeds if the Divine Name does not dwell within the heart. Outward splendor cannot illuminate an inner soul devoid of the Truth. ||4||',
    },
    chintan: {
      pb: 'ਸਰੀਰਕ ਸ਼ਿੰਗਾਰ, ਧਨ-ਦੌਲਤ ਅਤੇ ਗਹਿਣੇ ਵਿਅਰਥ ਹਨ ਜੇਕਰ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਦਾ ਪਾਵਨ ਨਾਮ ਨਹੀਂ ਵੱਸਦਾ।',
      hi: 'शारीरिक श्रृंगार, संपत्ति और आभूषण सब व्यर्थ हैं यदि अंतःकरण में प्रभु का पावन नाम नहीं बसता।',
      en: 'Physical ornaments and material riches are hollow without the living presence of the Divine Name in the heart.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਦੀ ਥਾਂ ਆਤਮਿਕ ਸ਼ਿੰਗਾਰ (ਸ਼ੁਭ ਗੁਣ, ਨਿਰਮਲਤਾ ਅਤੇ ਸਿਮਰਨ) ਨੂੰ ਧਾਰਨ ਕਰੋ।',
      hi: 'बाहरी दिखावे के स्थान पर आंतरिक आत्म-सौंदर्य (सदाचार व सिमरन) को प्राथमिकता दें।',
      en: 'Prioritize internal virtues and meditation over superficial vanity.',
    },
    samarpan: {
      pb: 'ਸੰਸਾਰਕ ਮੋਹ ਅਤੇ ਸ਼ਿੰਗਾਰ ਦਾ ਭਰਮ ਤਿਆਗ ਕੇ ਸਤਯਨਾਮ ਨੂੰ ਆਪਣਾ ਅਸਲ ਗਹਿਣਾ ਬਣਾਓ।',
      hi: 'सांसारिक मोह त्यागकर सत्यनाम को ही अपना अमूल्य आभूषण बनाएं।',
      en: 'Make the Divine Name your supreme ornament, relinquishing outer illusion.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 5 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-5',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੫: ਜੀਵਤ ਮਿਰਤਕੁ ਹੋਇ (ਨਿਰਭੈ ਹੋਇ ਕੈ)',
      hi: 'सलोक ५: जीवत मिरतकु होइ (निरभै होइ कै)',
      en: 'Salok 5: Dying While Alive (Fearless Spiritual Vision)',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਏਕੁ ਆਧੁ ਜੋ ਜੀਵਤ ਮਿਰਤਕੁ ਹੋਇ ॥',
      'ਨਿਰਭੈ ਹੋਇ ਕੈ ਗੁਨ ਰਵੈ ਜਤ ਪੇਖਉ ਤਤ ਸੋਇ ॥੫॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा एकु आधु जो जीवत मिरतकु होइ ॥',
      'निरभै होइ कै गुन रवै जत पेखउ तत सोइ ॥५॥',
    ],
    moolRoman: [
      'Kabīr aisā ek ādh jo jīvat mirtak hoi.',
      'Nirbhai hoi kai gun ravai jat pekhau tat soi. ||5||',
    ],
    shabdarth: [
      {
        word: 'ਜੀਵਤ ਮਿਰਤਕੁ / जीवत मिरतकु',
        meaning: {
          pb: 'ਜੀਉਂਦੇ ਜੀਅ ਹੰਕਾਰ ਵੱਲੋਂ ਮਰਿਆ ਹੋਇਆ (ਨਿਰ-ਅਹੰਕਾਰੀ)',
          hi: 'जीवित रहते हुए भी अहंकार-रहित, देह-भाव से मुक्त',
          en: 'Dead to ego while physically alive; liberated from self-centeredness',
        },
      },
      {
        word: 'ਜਤ ਪੇਖਉ ਤਤ ਸੋਇ / जत पेखउ तत सोइ',
        meaning: {
          pb: 'ਜਿੱਧਰ ਵੀ ਦੇਖੋ, ਓਧਰ ਉਹੀ ਪ੍ਰਮਾਤਮਾ ਨਜ਼ਰ ਆਉਂਦਾ ਹੈ',
          hi: 'जिधर भी दृष्टि जाए, उधर वही परमात्मा दिखाई दे',
          en: 'Wherever one gazes, one beholds only that Supreme Divine',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਅਜਿਹਾ ਕੋਈ (ਇਕ ਅੱਧ) ਵਿਰਲਾ ਹੀ ਹੁੰਦਾ ਹੈ, ਜਿਹੜਾ ਜਿਊਂਦਾ ਹੀ ਮੁਰਦੇ ਸਮਾਨ ਹੋਵੇ, ਉਹ ਦੁਖਾਂ ਸੁਖਾਂ ਵਿਚ ਅਡੋਲ ਰਹਿੰਦਾ ਹੈ। ਐਸਾ ਪੁਰਸ਼ ਨਿਰਭੈ ਹੋ ਕੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਗੁਣ ਗਾਉਂਦਾ ਹੈ ਅਤੇ ਜਿਧਰ ਵੇਖਦਾ ਹੈ ਉਧਰ ਹੀ ਉਸ ਨੂੰ (ਸੋਇ) ਪ੍ਰਮਾਤਮਾ ਹੀ ਨਜ਼ਰ ਆਉਂਦਾ ਹੈ॥ ੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं, ऐसा कोई विरला ही होता है, जो जीवित रहते हुए ही अहंकार से मुक्त होकर मृतवत हो जाए, वह सुख-दुःख में अडोल रहता है। ऐसा पुरुष निर्भय होकर परमात्मा के गुण गाता है और जिधर देखता है उधर वही परमात्मा दृष्टिगोचर होता है॥ ५॥',
      en: 'Satguru Kabir Saheb proclaims: Rare is that extraordinary seeker who dies to ego while still alive, rising above worldly pain and pleasure. Fearlessly singing the praises of the Divine, wherever such a soul looks, they behold only the Eternal One. ||5||',
    },
    chintan: {
      pb: 'ਹੰਕਾਰ ਨੂੰ ਮਿਟਾਉਣਾ ਹੀ ਜੀਵਤ ਮਰਨਾ ਹੈ। ਜਦੋਂ ਮੈਂ-ਭਾਵ ਮਿਟਦਾ ਹੈ, ਤਦ ਸਾਰੀ ਸ੍ਰਿਸ਼ਟੀ ਵਿੱਚ ਪ੍ਰਮਾਤਮਾ ਦਾ ਹੀ ਦਰਸ਼ਨ ਹੁੰਦਾ ਹੈ।',
      hi: 'अहंकार को समाप्त कर देना ही जीवित रहते हुए मरना है। जब "मैं" समाप्त होता है, तब सर्वत्र परमात्मा ही दृष्टिगोचर होता है।',
      en: 'Ego dissolution is true spiritual dying; when self-centeredness vanishes, the omnipresent God is witnessed everywhere.',
    },
    acharana: {
      pb: 'ਮਾਨ-ਅਪਮਾਨ, ਉਸਤਤਿ-ਨਿੰਦਾ ਵਿੱਚ ਨਿਰਲੇਪ ਰਹਿ ਕੇ ਨਿਰਭੈਤਾ ਦਾ ਅਭਿਆਸ ਕਰੋ।',
      hi: 'मान-अपमान व प्रशंसा-निंदा में सम रहकर निर्भयता का आचरण करें।',
      en: 'Cultivate fearlessness and stay poised across both praise and blame.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਗਿਆਨ ਅੱਗੇ ਆਪਣਾ ਅਹੰਕਾਰ ਭੇਟ ਕਰਕੇ ਸਰਬ-ਵਿਆਪੀ ਪ੍ਰਭੂ ਨੂੰ ਮਹਿਸੂਸ ਕਰੋ।',
      hi: 'सतगुरु के सम्मुख अपना अहंकार समर्पित कर सर्वव्यापी परमात्मा का साक्षात्कार करें।',
      en: 'Surrender all ego to realize the omnipresent Supreme Reality.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 6 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-6',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੬: ਜਾ ਦਿਨ ਹਉ ਮੂਆ (ਪਾਛੈ ਭਇਆ ਅਨੰਦੁ)',
      hi: 'सलोक ६: जा दिन हउ मूआ (पाछै भइआ अनंदु)',
      en: 'Salok 6: The Day Ego Died, Supreme Bliss Blossomed',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਾ ਦਿਨ ਹਉ ਮੂਆ ਪਾਛੈ ਭਇਆ ਅਨੰਦੁ ॥',
      'ਮੋਹਿ ਮਿਲਿਓ ਪ੍ਰਭੁ ਆਪਨਾ ਸੰਗੀ ਭਜਹਿ ਗੋੁਬਿੰਦੁ ॥੬॥',
    ],
    moolDevanagari: [
      'कबीर जा दिन हउ मूआ पाछै भइआ अनंदु ॥',
      'मोहि मिलिओ प्रभु आपना संगी भजहि गोबिंदु ॥६॥',
    ],
    moolRoman: [
      'Kabīr jā din hau mūā pāchhai bhaiā anand.',
      'Mohi milio prabh āpnā sangī bhajah gobind. ||6||',
    ],
    shabdarth: [
      {
        word: 'ਹਉ ਮੂਆ / हउ मूआ',
        meaning: {
          pb: 'ਮੇਰਾ ਅਹੰਕਾਰ ਮਰ ਗਿਆ, ਹਉਮੈ ਖ਼ਤਮ ਹੋ ਗਈ',
          hi: 'मेरा अहंकार नष्ट हो गया, "मैं"-भाव मिट गया',
          en: 'My ego died; selfish arrogance was annihilated',
        },
      },
      {
        word: 'ਪਾਛੈ / पाछै',
        meaning: {
          pb: 'ਉਸ ਤੋਂ ਬਾਅਦ, ਉਪਰੰਤ',
          hi: 'उसके पश्चात्, तदुपरांत',
          en: 'Thereafter / consequently',
        },
      },
      {
        word: 'ਸੰਗੀ / संगी',
        meaning: {
          pb: 'ਸਾਥੀ, ਸੰਤ-ਜਨ, ਗਿਆਨ-ਇੰਦਰੀਆਂ',
          hi: 'साथी, ज्ञानेंद्रियाँ, सत्संगी जन',
          en: 'Companions / sensory faculties attuned to God',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਸ ਦਿਨ ਮੈਂ ਮੇਰੀ ਮਰ ਗਈ ਉਸ ਤੋਂ ਪਿੱਛੋਂ ਅਨੰਦ ਹੋ ਗਿਆ। ਮੈਨੂੰ ਆਪਣਾ ਮਾਲਕ ਮਿਲ ਗਿਆ ਅਤੇ ਮੇਰੇ ਸੰਗੀ (ਗਿਆਨ ਇੰਦਰੇ) ਪ੍ਰਮਾਤਮਾ ਦੇ ਭਜਨ ਸਿਮਰਨ ਵਿਚ ਲੱਗ ਗਏ॥ ੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जिस दिन मेरा "मैं-भाव" (अहंकार) समाप्त हो गया, उसके पश्चात् मेरे भीतर अखंड आनंद प्रकट हो गया। मुझे मेरा परमात्मा मिल गया और मेरी समस्त ज्ञानेंद्रियां प्रभु भजन में लीन हो गईं॥ ६॥',
      en: 'Satguru Kabir Saheb proclaims: The day my ego died, supreme bliss pervaded within. I found my Master, and all my sensory companions became absorbed in Divine meditation. ||6||',
    },
    chintan: {
      pb: 'ਜਿੰਨਾ ਚਿਰ ਹਉਮੈ ਰਹਿੰਦੀ ਹੈ, ਓਨਾ ਚਿਰ ਪ੍ਰਭੂ ਦੂਰ ਲੱਗਦਾ ਹੈ। ਜਦੋਂ ਹੰਕਾਰ ਮਿਟਦਾ ਹੈ, ਅੰਦਰਲਾ ਅਨੰਦ ਜਾਗ ਪੈਂਦਾ ਹੈ।',
      hi: 'जब तक अहंकार रहता है, तब तक परमात्मा दूर लगता है। ज्यों ही अहंकार मिटता है, अखंड परमानंद की अनुभूति होती है।',
      en: 'As long as ego remains, God seems distant; when pride is surrendered, boundless inner joy awakens.',
    },
    acharana: {
      pb: 'ਨਿੱਤ ਸਿਮਰਨ ਦੁਆਰਾ ਮਨ ਦੀ ਹਉਮੈ ਨੂੰ ਮਿਟਾਉਣ ਦਾ ਯਤਨ ਕਰੋ।',
      hi: 'नित्य सिमरन द्वारा मन के अहंकार को विलीन करने का अभ्यास करें।',
      en: 'Strive to dissolve mental pride through unbroken daily contemplation.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣੀ ਮੈਂ-ਮੇਰੀ ਦਾ ਸਮਰਪਣ ਕਰੋ।',
      hi: 'सतगुरु के चरणों में अपना अहंकार समर्पित कर अमर सुख प्राप्त करें।',
      en: 'Surrender all sense of "I" and "mine" at the feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 7 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-7',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੭: ਸਭ ਤੇ ਹਮ ਬੁਰੇ (ਮੀਤੁ ਹਮਾਰਾ ਸੋਇ)',
      hi: 'सलोक ७: सभ ते हम बुरे (मीतु हमारा सोइ)',
      en: 'Salok 7: I am the Worst of All; All Others are Good',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਭ ਤੇ ਹਮ ਬੁਰੇ ਹਮ ਤਜਿ ਭਲੋ ਸਭੁ ਕੋਇ ॥',
      'ਜਿਨਿ ਐਸਾ ਕਰਿ ਬੂਝਿਆ ਮੀਤੁ ਹਮਾਰਾ ਸੋਇ ॥੭॥',
    ],
    moolDevanagari: [
      'कबीर सभ ते हम बुरे हम तजि भलो सभु कोइ ॥',
      'जिनि ऐसा करि बूझिआ मीतु हमारा सोइ ॥७॥',
    ],
    moolRoman: [
      'Kabīr sabh te ham bure ham taj bhalo sabh koi.',
      'Jin aisā kar būjhiā mīt hamārā soi. ||7||',
    ],
    shabdarth: [
      {
        word: 'ਹਮ ਤਜਿ / हम तजि',
        meaning: {
          pb: 'ਮੈਨੂੰ ਛੱਡ ਕੇ, ਮੇਰੇ ਤੋਂ ਇਲਾਵਾ',
          hi: 'मुझे छोड़कर, मेरे अतिरिक्त',
          en: 'Except me / setting myself aside',
        },
      },
      {
        word: 'ਮੀਤੁ / मीतु',
        meaning: {
          pb: 'ਸੱਚਾ ਮਿੱਤਰ, ਆਤਮਿਕ ਸਾਥੀ',
          hi: 'सच्चा मित्र, आत्मिक सखा',
          en: 'True spiritual friend / kindred soul',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਸਭ ਤੋਂ ਬੁਰਾ ਹਾਂ, ਮੈਨੂੰ ਛੱਡ ਕੇ ਹੋਰ ਸਭ ਚੰਗੇ ਹਨ। ਜਿਸ ਨੇ ਅਜਿਹਾ ਕਰਕੇ ਸਮਝ ਲਿਆ ਹੈ, ਉਹੀ ਮੇਰਾ ਮਿੱਤਰ ਹੈ॥੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मैं संसार में सबसे बुरा हूँ, मुझे छोड़कर अन्य सभी जन अच्छे हैं। जिसने इस परम विनम्रता के मर्म को समझ लिया है, वही मेरा सच्चा मित्र है॥ ७॥',
      en: 'Satguru Kabir Saheb proclaims: I am the worst of all; everyone else is noble and good. Whoever understands this profound humility is my true friend and spiritual companion. ||7||',
    },
    chintan: {
      pb: 'ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਵੇਖਣ ਦੀ ਬਜਾਏ ਆਪਣੇ ਮਨ ਦੇ ਨੁਕਸ ਦੇਖਣਾ ਅਤੇ ਪਰਮ ਨਿਮਰਤਾ ਵਿੱਚ ਰਹਿਣਾ ਹੀ ਭਗਤੀ ਦਾ ਅਸਲ ਮਾਰਗ ਹੈ।',
      hi: 'दूसरों के दोष देखने के बजाय अपने अंतःकरण के विकारों की समीक्षा करना और पूर्ण नम्रता में रहना ही सच्ची भक्ति है।',
      en: 'Looking at one\'s own shortcomings rather than judging others, abiding in utmost humility, is the core of true devotion.',
    },
    acharana: {
      pb: 'ਨਿੰਦਾ ਅਤੇ ਆਲੋਚਨਾ ਛੱਡ ਕੇ ਸਭਨਾਂ ਦੇ ਗੁਣ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'दूसरों की निंदा त्यागकर सभी के शुभ गुणों को ग्रहण करें।',
      en: 'Abandon fault-finding and embrace the virtues of every soul.',
    },
    samarpan: {
      pb: 'ਨਿਰ-ਅਹੰਕਾਰ ਹੋ ਕੇ ਪਰਮ ਨਿਮਰਤਾ ਨਾਲ ਸਤਿਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹੋ।',
      hi: 'निरहंकार होकर सतगुरु के पावन चरणों में नतमस्तक रहें।',
      en: 'Abide in boundless humility at the lotus feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 8 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-8',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੮: ਆਈ ਮੁਝਹਿ ਪਹਿ ਅਨਿਕ ਕਰੇ ਕਰਿ ਭੇਸ (ਮਾਇਆ)',
      hi: 'सलोक ८: आई मुझहि पहि अनिक करे करि भेस (माया)',
      en: 'Salok 8: Maya Came in Diverse Disguises, but Guru Protected Me',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਆਈ ਮੁਝਹਿ ਪਹਿ ਅਨਿਕ ਕਰੇ ਕਰਿ ਭੇਸ ॥',
      'ਹਮ ਰਾਖੇ ਗੁਰ ਆਪਨੇ ਉਨਿ ਕੀਨੋ ਆਦੇਸੁ ॥੮॥',
    ],
    moolDevanagari: [
      'कबीर आई मुझहि पहि अनिक करे करि भेस ॥',
      'हम राखे गुर आपने उनि कीनो आदेसु ॥८॥',
    ],
    moolRoman: [
      'Kabīr āī mujhah pah anik kare kar bhes.',
      'Ham rākhe gur āpne un kīno ādes. ||8||',
    ],
    shabdarth: [
      {
        word: 'ਅਨਿਕ ਭੇਸ / अनिक भेस',
        meaning: {
          pb: 'ਅਨੇਕਾਂ ਪ੍ਰਕਾਰ ਦੇ ਰੂਪ ਅਤੇ ਭਰਮਾਊ ਭੇਸ',
          hi: 'अनेक प्रकार के छल-कपट और लुभावने रूप',
          en: 'Countless seductive disguises and allurements',
        },
      },
      {
        word: 'ਆਦੇਸੁ / आदेसु',
        meaning: {
          pb: 'ਨਮਸਕਾਰ, ਸੀਸ ਝੁਕਾਉਣਾ',
          hi: 'नमस्कार, नतमस्तक होकर प्रणाम',
          en: 'Bowed in salutation and departed',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੇਰੇ ਪਾਸ ਮਾਇਆ ਕਈ ਪ੍ਰਕਾਰ ਦੇ ਭੇਸ ਕਰਕੇ ਆਈ। ਸਾਨੂੰ ਉਸ (ਖੇਖਣਹਾਰੀ) ਤੋਂ ਮੇਰੇ ਗੁਰੂ ਨੇ ਰੱਖ ਲਿਆ, ਤੇ ਉਹ ਨਮਸ਼ਕਾਰ ਕਰਕੇ ਚਲੀ ਗਈ॥੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मेरे पास माया अनेक प्रकार के छल-कपट व रूप धारण करके आई। किंतु मुझे मेरे पूर्ण गुरु ने उसकी मोहिनी से बचा लिया, और वह माया स्वयं नतमस्तक होकर चली गई॥ ८॥',
      en: 'Satguru Kabir Saheb proclaims: Maya came to me in countless alluring disguises. But my Guru protected and preserved me, so that Maya herself bowed in reverence and departed. ||8||',
    },
    chintan: {
      pb: 'ਮਾਇਆ ਦਾ ਪ੍ਰਭਾਵ ਬਹੁਤ ਡੂੰਘਾ ਤੇ ਬਹੁਰੂਪੀਆ ਹੈ। ਕੇਵਲ ਸੱਚੇ ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਅਤੇ ਗਿਆਨ ਹੀ ਜੀਵ ਨੂੰ ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਬਚਾ ਸਕਦਾ ਹੈ।',
      hi: 'माया अत्यंत बलवान और बहुरूपिया है। केवल सतगुरु की असीम कृपा और ज्ञान ही जीवात्मा को माया के प्रलोभनों से बचा सकता है।',
      en: 'Maya is immensely powerful and takes myriad forms; only the Satguru\'s protective grace shields the seeker.',
    },
    acharana: {
      pb: 'ਮਾਇਆ ਦੇ ਲੋਭ-ਲਾਲਚ ਤੋਂ ਸਦਾ ਸੁਚੇਤ ਰਹੋ ਅਤੇ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਦੀ ਓਟ ਲਓ।',
      hi: 'माया के प्रलोभन से सदा सावधान रहकर गुरु के पावन शब्द का आश्रय लें।',
      en: 'Stay vigilant against worldly temptations and take shelter in the Guru\'s Word.',
    },
    samarpan: {
      pb: 'ਗੁਰੂ ਦੀ ਰਖਵਾਲੀ ਉੱਤੇ ਪੂਰਨ ਭਰੋਸਾ ਰੱਖ ਕੇ ਨਿਸ਼ਚਿੰਤ ਹੋ ਜਾਓ।',
      hi: 'सतगुरु के रक्षा-कवच पर पूर्ण विश्वास रखकर निश्चिंत रहें।',
      en: 'Place total trust in the protective grace of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 9 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-9',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੯: ਸੋਈ ਮਾਰੀਐ ਜਿਹ ਮੂਐ ਸੁਖੁ ਹੋਇ (ਹਉਮੈ ਨਾਸ)',
      hi: 'सलोक ९: सोई मारीऐ जिह मूऐ सुखु होइ (हउमै नास)',
      en: 'Salok 9: Slay that (Ego) Whose Death Brings True Peace',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੋਈ ਮਾਰੀਐ ਜਿਹ ਮੂਐ ਸੁਖੁ ਹੋਇ ॥',
      'ਭਲੋ ਭਲੋ ਸਭੁ ਕੋ ਕਹੈ ਬੁਰੋ ਨ ਮਾਨੈ ਕੋਇ ॥੯॥',
    ],
    moolDevanagari: [
      'कबीर सोई मारीऐ जिह मूऐ सुखु होइ ॥',
      'भलो भलो सभु को कहै बुरो न मानै कोइ ॥९॥',
    ],
    moolRoman: [
      'Kabīr soī mārīai jih mūai sukh hoi.',
      'Bhalo bhalo sabh ko kahai buro na mānai koi. ||9||',
    ],
    shabdarth: [
      {
        word: 'ਸੋਈ ਮਾਰੀਐ / सोई मारीऐ',
        meaning: {
          pb: 'ਉਸ (ਹਉਮੈ/ਅਹੰਕਾਰ) ਨੂੰ ਮਾਰਨਾ ਚਾਹੀਦਾ ਹੈ',
          hi: 'उस (अहंकार/विकारों) को मारना चाहिए',
          en: 'Kill that very thing (ego/pride)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉਹ ਵਸਤੂ (ਹਉਮੈ) ਨੂੰ ਮਾਰਨਾ ਚਾਹੀਦਾ ਹੈ, ਜਿਸ ਦੇ ਮਰਨ ਕਰਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਸੁਖ ਪ੍ਰਾਪਤ ਹੋਏ। ਫਿਰ ਸਭ ਕੋਈ ਚੰਗਾ ਚੰਗਾ ਕਰਕੇ ਆਖੇ ਅਤੇ ਇਸ ਦੇ ਮਰਨ ਨੂੰ ਬੁਰਾ ਕੋਈ ਨਾ ਆਖੇ ॥ ੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- उस वस्तु (अहंकार) को मारना चाहिए, जिसके मरने से अपने मन को वास्तविक सुख प्राप्त होता है। फिर सभी उसे उत्तम कहते हैं और उसके मरने को कोई बुरा नहीं मानता॥ ९॥',
      en: 'Satguru Kabir Saheb proclaims: Slay that ego whose death brings absolute peace. Everyone praises its annihilation, and no one regrets its demise. ||9||',
    },
    chintan: {
      pb: 'ਜੀਵ ਹੱਤਿਆ ਜਾਂ ਬਾਹਰੀ ਹਿੰਸਾ ਪਾਪ ਹੈ, ਪਰ ਆਪਣੇ ਅੰਦਰਲੀ ਹਉਮੈ ਅਤੇ ਕਾਮ-ਕ੍ਰੋਧ ਨੂੰ ਮਾਰਨਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਪੁੰਨ ਤੇ ਸੁਖ ਦਾ ਸਰੋਤ ਹੈ।',
      hi: 'बाहरी जीवों को मारना महापाप है, किंतु अपने भीतर के अहंकार और काम-क्रोध का संहार करना ही परमकल्याणकारी है।',
      en: 'Slaying physical beings is sin, but annihilating inner ego and passions is the supreme virtuous victory.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਕਾਮਨਾ, ਕ੍ਰੋਧ ਅਤੇ ਹੰਕਾਰ ਨੂੰ ਗੁਰੂ-ਗਿਆਨ ਦੀ ਤਲਵਾਰ ਨਾਲ ਕੱਟੋ।',
      hi: 'अपनी वासनाओं और अहंकार को ज्ञान के खड्ग से समाप्त करें।',
      en: 'Sever inner arrogance and lust with the sword of spiritual wisdom.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਉਪਦੇਸ਼ ਅੱਗੇ ਆਪਣੇ ਮਨ ਦੀਆਂ ਚਲਾਕੀਆਂ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'सतगुरु के सम्मुख अपनी मानसिक चालाकियों का त्याग करें।',
      en: 'Surrender all mental cunning at the altar of Satguru\'s wisdom.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 10 (Ang 1364)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-10',
    category: 'salok',
    ang: 1364,
    title: {
      pb: 'ਸਲੋਕ ੧੦: ਰਾਤੀ ਹੋਵਹਿ ਕਾਰੀਆ (ਕਾਰੇ ਊਭੇ ਜੰਤ)',
      hi: 'सलोक १०: राती होवहि कारीआ (कारे ऊभे जंत)',
      en: 'Salok 10: When Nights Turn Dark, Sins Rise (Divine Chastisement)',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਤੀ ਹੋਵਹਿ ਕਾਰੀਆ ਕਾਰੇ ਊਭੇ ਜੰਤ ॥',
      'ਲੈ ਫਾਹੇ ਉਠਿ ਧਾਵਤੇ ਸਿ ਜਾਨਿ ਮਾਰੇ ਭਗਵੰਤ ॥੧੦॥',
    ],
    moolDevanagari: [
      'कबीर राती होवहि कारीआ कारे ऊभे जंत ॥',
      'लै फाहे उठि धावते सि जानि मारे भगवंत ॥१०॥',
    ],
    moolRoman: [
      'Kabīr rātī hovahi kārīā kāre ūbhe jant.',
      'Lai phāhe uth dhāvate si jān māre bhagvant. ||10||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਰੇ ਊਭੇ ਜੰਤ / कारे ऊभे जंत',
        meaning: {
          pb: 'ਕਾਲੇ ਕਰਤੂਤਾਂ ਵਾਲੇ ਚੋਰ-ਲੁਟੇਰੇ ਉੱਠ ਖੜ੍ਹੇ ਹੁੰਦੇ ਹਨ',
          hi: 'काली करतूत करने वाले चोर-व्यभिचारी उठ खड़े होते हैं',
          en: 'Evil-doers and thieves rise in the dark',
        },
      },
      {
        word: 'ਮਾਰੇ ਭਗਵੰਤ / मारे भगवंत',
        meaning: {
          pb: 'ਰੱਬ ਦੇ ਮਾਰੇ ਹੋਏ, ਆਤਮਿਕ ਤੌਰ ਤੇ ਤ੍ਰਿਸਕਾਰੇ ਹੋਏ',
          hi: 'प्रभु द्वारा तिरस्कृत, आत्मिक रूप से विनष्ट',
          en: 'Spiritually ruined and cursed by divine justice',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਦ ਰਾਤਾਂ ਹਨ੍ਹੇਰੀਆਂ ਹੋਣ ਤਾਂ (ਕਾਰੇ ਜੰਤ) ਚੋਰ ਲੋਕ ਚੋਰੀ ਲਈ (ਉਭੇ) ਉੱਠ ਖੜੇ ਹੁੰਦੇ ਹਨ, ਅਤੇ ਹੱਥਾਂ ਵਿਚ ਫਾਹੀਆਂ ਲੈ ਕੇ ਉਠ ਦੌੜਦੇ ਹਨ, ਐਸੇ ਬੰਦਿਆਂ ਨੂੰ ਇਉਂ ਜਾਣੋ ਕਿ ਉਹ ਰੱਬ ਦੇ ਮਾਰੇ (ਤ੍ਰਿਸਕਾਰੇ) ਹੋਏ ਹਨ॥੧੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जब रातें घोर अंधियारी होती हैं तब दुष्ट व चोर लोग चोरी व कुकर्म के लिए उठ खड़े होते हैं और हाथों में फांसियां लेकर दौड़ते हैं; ऐसे लोगों को जानो कि वे प्रभु द्वारा ही आत्मिक रूप से विनष्ट व तिरस्कृत हैं॥ १०॥',
      en: 'Satguru Kabir Saheb proclaims: When nights turn pitch dark, wicked souls rise with nooses to rob and plunder. Know them to be spiritually ruined and forsaken by Divine grace. ||10||',
    },
    chintan: {
      pb: 'ਅਗਿਆਨਤਾ ਦੇ ਅੰਧਕਾਰ ਵਿੱਚ ਵਿਕਾਰਾਂ ਦੇ ਪਿੱਛੇ ਭੱਜਣ ਵਾਲੇ ਮਨੁੱਖ ਅਸਲ ਵਿੱਚ ਆਪਣੀ ਆਤਮਿਕ ਪੂੰਜੀ ਨੂੰ ਹੀ ਨਸ਼ਟ ਕਰ ਲੈਂਦੇ ਹਨ।',
      hi: 'अज्ञान के अंधकार में पाप व वासनाओं के पीछे दौड़ने वाले वास्तव में अपनी अमूल्य आत्मिक पूंजी नष्ट कर लेते हैं।',
      en: 'Those who run after theft and vices in the dark of ignorance destroy their own eternal spiritual treasure.',
    },
    acharana: {
      pb: 'ਕਿਸੇ ਦਾ ਹੱਕ ਨਾ ਮਾਰੋ; ਇਮਾਨਦਾਰੀ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਜੀਵਨ ਬਤੀਤ ਕਰੋ।',
      hi: 'किसी का अहित न करें; ईमानदारी और गुरु के प्रकाश में जीवन व्यतीत करें।',
      en: 'Do not harm or rob anyone; live honestly in the radiant light of truth.',
    },
    samarpan: {
      pb: 'ਮਨ ਦੇ ਹਨ੍ਹੇਰੇ ਨੂੰ ਦੂਰ ਕਰਨ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਚਾਨਣ ਦੀ ਸ਼ਰਨ ਲਓ।',
      hi: 'मन के अंधकार को दूर करने हेतु सतगुरु के दिव्य प्रकाश की शरण लें।',
      en: 'Seek the Divine Light of the Master to banish all inner darkness.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 11 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-11',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੧: ਚੰਦਨ ਕਾ ਬਿਰਵਾ ਭਲਾ (ਸੰਗਤਿ ਮਹਿਮਾ)',
      hi: 'सलोक ११: चंदन का बिरवा भला (संगति महिमा)',
      en: 'Salok 11: The Blessed Sandalwood Tree Transmutes the Forest',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚੰਦਨ ਕਾ ਬਿਰਵਾ ਭਲਾ ਬੇੜਿਓ ਢਾਕ ਪਲਾਸ ॥',
      'ਓਇ ਭੀ ਚੰਦਨੁ ਹੋਇ ਰਹੇ ਬਸੇ ਜੁ ਚੰਦਨ ਪਾਸਿ ॥੧੧॥',
    ],
    moolDevanagari: [
      'कबीर चंदन का बिरवा भला बेड़िओ ढाक पलास ॥',
      'ओइ भी चंदनु होइ रहे बसे जु चंदन पासि ॥११॥',
    ],
    moolRoman: [
      'Kabīr chandan kā birvā bhalā beṛio dhāk palās.',
      'Oi bhī chandan hoi rahe base ju chandan pās. ||11||',
    ],
    shabdarth: [
      {
        word: 'ਬਿਰਵਾ / बिरवा',
        meaning: {
          pb: 'ਛੋਟਾ ਰੁੱਖ / ਬੂਟਾ',
          hi: 'छोटा वृक्ष / पौधा',
          en: 'Small tree / sapling',
        },
      },
      {
        word: 'ਢਾਕ ਪਲਾਸ / ढाक पलास',
        meaning: {
          pb: 'ਸਾਧਾਰਨ ਜੰਗਲੀ ਛਿਛਰੇ ਤੇ ਪਲਾਸ਼ ਦੇ ਰੁੱਖ (ਬਿਨਾਂ ਸੁਗੰਧ ਵਾਲੇ)',
          hi: 'साधारण जंगली ढाक व पलाश के वृक्ष',
          en: 'Ordinary odorless palash trees in the forest',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਚੰਦਨ ਦਾ ਬਿੱਛ ਚੰਗਾ ਹੈ, ਜਿਹੜਾ ਛਿਛਰਿਆਂ ਨਾਲ ਵਲ੍ਹੇਟਿਆ ਹੋਇਆ ਹੁੰਦਾ ਹੈ। ਉਹ ਵੀ ਸੁਗੰਧੀ ਨਾਲ ਚੰਦਨ ਰੂਪ ਹੀ ਹੋ ਜਾਂਦਾ ਹੈ, ਜਿਹੜਾ ਚੰਦਨ ਦੇ ਪਾਸ ਵੱਸਦਾ ਹੈ॥੧੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- चंदन का वृक्ष धन्य है, यद्यपि वह गंधहीन ढाक और पलाश के साधारण वृक्षों से घिरा रहता है, फिर भी जो वृक्ष चंदन के पास बसते हैं वे भी उसकी सुगंध से चंदन-रूपी सुवासित हो जाते हैं॥ ११॥',
      en: 'Satguru Kabir Saheb proclaims: Blessed is the sandalwood tree surrounded by ordinary palash trees; for even those ordinary trees that abide near the sandalwood absorb its fragrance and become sandalwood themselves. ||11||',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ-ਸਤਿਗੁਰੂ ਦੀ ਸੰਗਤ ਦੀ ਅਜਿਹੀ ਮਹਿਮਾ ਹੈ ਕਿ ਨੀਚ ਤੇ ਸਾਧਾਰਨ ਜੀਵ ਵੀ ਸੰਗਤ ਦੇ ਪ੍ਰਭਾਵ ਨਾਲ ਪਰਮ ਪਵਿੱਤਰ ਤੇ ਗਿਆਨਵਾਨ ਹੋ ਜਾਂਦੇ ਹਨ।',
      hi: 'सत्संग और सतगुरु का संग ऐसा पारस-रूपी है जो साधारण अज्ञानी जीवों को भी अपनी दिव्य सुगंध से सुवासित कर संत बना देता है।',
      en: 'Such is the power of holy company (Satsang) that ordinary souls dwelling near the Satguru become fragrant with divine wisdom.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤ ਤੋਂ ਬਚ ਕੇ ਹਮੇਸ਼ਾ ਪੂਰਨ ਗੁਰੂ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਸਮਾਂ ਬਿਤਾਓ।',
      hi: 'कुसंगति से बचकर सदैव सतगुरु व संत-जनों की संगति में समय व्यतीत करें।',
      en: 'Shun toxic company and constantly immerse in the uplifting presence of true saints.',
    },
    samarpan: {
      pb: 'ਚੰਦਨ ਰੂਪ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਦੇ ਪਾਸ ਆਪਣਾ ਜੀਵਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'चंदन-स्वरूपी सतगुरु के चरणों में अपना जीवन समर्पित करें।',
      en: 'Surrender your life near the sandalwood presence of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 12 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-12',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੨: ਬਾਂਸੁ ਬਡਾਈ ਬੂਡਿਆ (ਹੰਕਾਰ ਦਾ ਦੁਖਾਂਤ)',
      hi: 'सलोक १२: बांसु बडाई बूडिआ (अहंकार का दुखांत)',
      en: 'Salok 12: The Bamboo Drowns in Pride (No Fragrance Absorbed)',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬਾਂਸੁ ਬਡਾਈ ਬੂਡਿਆ ਇਉ ਮਤ ਡੂਬਹੁ ਕੋਇ ॥',
      'ਚੰਦਨ ਕੈ ਨਿਕਟੇ ਬਸੈ ਬਾਂਸੁ ਸੁਗੰਧੁ ਨ ਹੋਇ ॥੧੨॥',
    ],
    moolDevanagari: [
      'कबीर बांसु बडाई बूडिआ इउ मत डूबहु कोइ ॥',
      'चंदन कै निकटे बसै बांसु सुगंधु न होइ ॥१२॥',
    ],
    moolRoman: [
      'Kabīr bāns badāī būdiā iu mat dūbahu koi.',
      'Chandan kai nikte basai bāns sugandh na hoi. ||12||',
    ],
    shabdarth: [
      {
        word: 'ਬਡਾਈ ਬੂਡਿਆ / बडाई बूडिआ',
        meaning: {
          pb: 'ਆਪਣੇ ਉੱਚੇ ਕੱਦ ਅਤੇ ਹਉਮੈ ਦੇ ਹੰਕਾਰ ਵਿੱਚ ਡੁੱਬ ਗਿਆ',
          hi: 'अपनी ऊंचाई व बड़प्पन के अहंकार में डूब गया',
          en: 'Drowned in the vanity of its own tall stature',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਵਾਂਸ ਆਪਣੀ ਵਡਿਆਈ (ਲੰਮਾ ਉੱਚਾ ਹੋਣ) ਵਿਚ ਹੀ (ਡੁੱਬ) ਰਹਿ ਗਿਆ ਹੈ, ਜਿਸ ਕਰਕੇ ਭਾਵੇਂ ਉਹ ਵੀ ਚੰਦਨ ਦੇ ਪਾਸ ਹੀ ਵੱਸਦਾ ਹੈ, ਪਰ ਉਸ ਵਿਚ ਸੁਗੰਧ ਨਹੀਂ ਹੁੰਦੀ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਵਾਂਸ ਵਿਚ ਹਉਮੈਂ ਦਾ ਅਤੇ ਢਾਕ ਪਲਾਸ ਵਿਚ ਨਿੰਮ੍ਰਤਾ ਦਾ ਸੰਕੇਤ ਦੇਂਦੇ ਹਨ॥ ੧੨ ॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- बांस अपने बड़प्पन (ऊंचे कद) के अहंकार में डूब गया, इस प्रकार कोई मत डूबो। वह चंदन के बिल्कुल निकट बसने पर भी अपनी अकड़ के कारण कभी सुवासित नहीं हो पाता। बांस अहंकार का और पलाश नम्रता का प्रतीक है॥ १२॥',
      en: 'Satguru Kabir Saheb proclaims: The bamboo drowned in its own lofty pride; let no one drown like that! Though it dwells right next to the sandalwood, its hollow rigidity prevents it from absorbing any fragrance. ||12||',
    },
    chintan: {
      pb: 'ਵਿੱਦਿਆ, ਧਨ ਜਾਂ ਉੱਚੇ ਰੁਤਬੇ ਦਾ ਹੰਕਾਰ ਮਨੁੱਖ ਨੂੰ ਗੁਰੂ ਦੇ ਕੋਲ ਰਹਿੰਦਿਆਂ ਵੀ ਗਿਆਨ ਦੀ ਸੁਗੰਧ ਲੈਣ ਤੋਂ ਵਾਂਝਾ ਰੱਖਦਾ ਹੈ।',
      hi: 'विद्या, धन अथवा पद का अहंकार मनुष्य को गुरु के सान्निध्य में रहते हुए भी आध्यात्मिक सुगंध से वंचित कर देता है।',
      en: 'Arrogance of status or erudition blocks the soul from absorbing the divine perfume even while standing near the Master.',
    },
    acharana: {
      pb: 'ਅੰਦਰੋਂ ਖਾਲੀਪਨ ਤੇ ਆਕੜ ਛੱਡ ਕੇ ਨਿਮਰਤਾ ਅਤੇ ਗ੍ਰਹਿਣਸ਼ੀਲਤਾ ਅਪਣਾਓ।',
      hi: 'भीतर की अकड़ छोड़कर पूर्ण नम्रता व ग्रहणशीलता धारण करें।',
      en: 'Shed inner rigidity; embrace humble receptivity like a flower absorbing dew.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਵਡਿਆਈ ਦਾ ਭਰਮ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਤਿਆਗ ਦਿਓ।',
      hi: 'अपने बड़प्पन का भ्रम गुरु के चरणों में विसर्जित करें।',
      en: 'Surrender all vanity of personal greatness at the feet of the Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 13 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-13',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੩: ਦੀਨੁ ਗਵਾਇਆ ਦੁਨੀ ਸਿਉ (ਪਾਇ ਕੁਹਾੜਾ ਮਾਰਿਆ)',
      hi: 'सलोक १३: दीनु गवाइआ दुनी सिउ (पाइ कुहाड़ा मारिआ)',
      en: 'Salok 13: Lost Faith for the World, Striking an Axe to One\'s Own Feet',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦੀਨੁ ਗਵਾਇਆ ਦੁਨੀ ਸਿਉ ਦੁਨੀ ਨ ਚਾਲੀ ਸਾਥਿ ॥',
      'ਪਾਇ ਕੁਹਾੜਾ ਮਾਰਿਆ ਗਾਫਲਿ ਅਪੁਨੈ ਹਾਥਿ ॥੧੩॥',
    ],
    moolDevanagari: [
      'कबीर दीनु गवाइआ दुनी सिउ दुनी न चाली साथि ॥',
      'पाइ कुहाड़ा मारिआ गाफलि अपुनै हाथि ॥१३॥',
    ],
    moolRoman: [
      'Kabīr dīn gavāiā dunī siu dunī na chālī sāth.',
      'Pāi kuhāṛā māriā gāphal apunai hāth. ||13||',
    ],
    shabdarth: [
      {
        word: 'ਦੀਨੁ / दीनु',
        meaning: {
          pb: 'ਧਰਮ, ਭਗਤੀ, ਆਤਮਿਕ ਕਰਤਵ',
          hi: 'धर्म, भक्ति, आत्मिक साधना',
          en: 'Spiritual faith and divine devotion',
        },
      },
      {
        word: 'ਗਾਫਲਿ / गाफलि',
        meaning: {
          pb: 'ਬੇਪਰਵਾਹ, ਭੁੱਲੜ, ਅਗਿਆਨੀ ਮਨੁੱਖ',
          hi: 'असावधान, अज्ञानी, भटका हुआ जीव',
          en: 'Heedless, careless, ignorant person',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਦੁਨੀਆਂ ਨੇ ਮਾਇਆ ਦੇ ਰਸਾਂ ਕਸਾਂ ਨਾਲ ਲੱਗ ਕੇ ਆਪਣਾ ਧਰਮ ਵੀ ਗਵਾ ਲਿਆ। ਪ੍ਰੰਤੂ ਦੁਨੀਆਂ ਫੇਰ ਵੀ ਨਾਲ ਨਾ ਚਲੀ। ਗਾਫਲ (ਭੁੱਲੜ) ਨੇ ਆਪਣੇ ਹੱਥੀਂ ਹੀ ਪੈਰਾਂ ਤੇ ਕੁਹਾੜਾ ਮਾਰ ਲਿਆ। ਪਰਮਾਤਮਾ ਦੇ ਸਿਮਰਨ ਨੂੰ ਛੱਡ ਕੇ ਸੰਸਾਰ ਦੇ ਧੰਧਿਆਂ ਵਿਚ ਜਨਮ ਬਤੀਤ ਕਰ ਦਿਤਾ॥ ੧੩ ॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- संसार के क्षणभंगुर सुखों के पीछे लगकर मनुष्य ने अपनी आध्यात्मिक पूंजी (धर्म) भी खो दी, किंतु अंत समय में यह दुनिया साथ नहीं चली। इस बेपरवाह अज्ञानी ने अपने ही हाथों अपने पैरों पर कुल्हाड़ी मार ली॥ १३॥',
      en: 'Satguru Kabir Saheb proclaims: For the sake of worldly pleasures, mortals forfeit their spiritual faith, yet this world accompanies no one after death. The heedless fool strikes an axe against their own feet with their own hands. ||13||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰਕ ਸੁਖ ਨਾਸ਼ਵਾਨ ਹਨ। ਮਾਇਆ ਦੇ ਪਿੱਛੇ ਪੈ ਕੇ ਅਮੋਲਕ ਮਨੁੱਖਾ ਜਨਮ ਅਤੇ ਸਤਯਨਾਮ ਦੀ ਪੂੰਜੀ ਗੁਆ ਲੈਣਾ ਸਭ ਤੋਂ ਵੱਡੀ ਭੁੱਲ ਹੈ।',
      hi: 'सांसारिक लाभ क्षणिक हैं। नश्वर माया के मोह में पड़कर प्रभु-भक्ति और अनमोल मानव जीवन को गवां देना आत्मघात के समान है।',
      en: 'Worldly pleasures are ephemeral; trading the priceless jewel of spiritual devotion for transient illusion is spiritual suicide.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਵੀ ਭਗਤੀ ਅਤੇ ਧਰਮ ਨੂੰ ਪਹਿਲ ਦਿਓ।',
      hi: 'संसार में रहते हुए भी प्रभु-भक्ति व धर्म को सर्वोपरि स्थान दें।',
      en: 'Keep spiritual devotion foremost while carrying out honest worldly duties.',
    },
    samarpan: {
      pb: 'ਸੰਸਾਰਕ ਮੋਹ ਨੂੰ ਤਿਆਗ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਰਹੋ।',
      hi: 'सांसारिक आसक्ति त्यागकर सतगुरु के पावन नाम का संबल लें।',
      en: 'Anchor your heart in the Eternal Name, relinquishing worldly illusions.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 14 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-14',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੪: ਇਕ ਰਾਮ ਸਨੇਹੀ ਬਾਹਰਾ (ਊਜਰੁ ਮੇਰੈ ਭਾਂਇ)',
      hi: 'सलोक १४: इक राम सनेही बाहरा (ऊजरु मेरै भांइ)',
      en: 'Salok 14: Without the Beloved Lord, the Entire World is a Wilderness',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਹ ਜਹ ਹਉ ਫਿਰਿਓ ਕਉਤਕ ਠਾਓ ਠਾਇ ॥',
      'ਇਕ ਰਾਮ ਸਨੇਹੀ ਬਾਹਰਾ ਊਜਰੁ ਮੇਰੈ ਭਾਂਇ ॥੧੪॥',
    ],
    moolDevanagari: [
      'कबीर जह जह हउ फिरिओ कउतक ठाओ ठाइ ॥',
      'इक राम सनेही बाहरा ऊजरु मेरै भांइ ॥१४॥',
    ],
    moolRoman: [
      'Kabīr jah jah hau phirio kautak thāo thāi.',
      'Ik rām snehī bāhrā ūjar merai bhāi. ||14||',
    ],
    shabdarth: [
      {
        word: 'ਕਉਤਕ / कउतक',
        meaning: {
          pb: 'ਨਾਟਕ-ਤਮਾਸ਼ੇ, ਸੰਸਾਰਕ ਭਰਮ-ਲੀਲਾ',
          hi: 'तमाशे, कौतुक, सांसारिक लीलाएं',
          en: 'Worldly spectacles, dramas, and shows',
        },
      },
      {
        word: 'ਊਜਰੁ / ऊजरु',
        meaning: {
          pb: 'ਉਜਾੜ, ਬੀਆਬਾਨ ਜੰਗਲ',
          hi: 'उजाड़, वीरान, बंजर वन',
          en: 'Wilderness, desolate wasteland',
        },
      },
      {
        word: 'ਸਨੇਹੀ / सनेही',
        meaning: {
          pb: 'ਪ੍ਰੇਮੀ, ਸੱਚਾ ਹਿਤੈਸ਼ੀ ਪ੍ਰਭੂ',
          hi: 'परम स्नेही, सच्चा प्रेमी परमात्मा',
          en: 'True beloved Divine Friend',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿੱਥੇ ਜਿੱਥੇ ਮੈਂ ਫਿਰਿਆ ਹਾਂ ਉੱਥੇ ਉੱਥੇ ਹੀ ਥਾਂ ਥਾਂ ਤੇ ਤਮਾਸ਼ੇ ਹੀ ਵੇਖੇ ਹਨ ਪਰ ਇਕ ਰਾਮ ਦੇ ਪ੍ਰੇਮੀ ਤੋਂ ਬਿਨਾਂ ਮੇਰੇ ਭਾਣੇ ਉਹ ਥਾਂ ਸਭ ਉਜਾੜ ਹਨ। ਜਿਥੇ ਰਾਮ ਦਾ ਭਗਤੀ ਭਾਵ ਨਾਲ ਪ੍ਰੇਮੀ ਨਹੀਂ ਹੈ॥ ੧੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जहां-जहां मैं गया, वहां-वहां मैंने केवल सांसारिक कौतुक और तमाशे ही देखे; किंतु एक प्रभु-प्रेमी के बिना मेरे दृष्टिकोण से वे सब स्थान उजाड़ और वीरान हैं जहां प्रभु का पावन नाम नहीं॥ १४॥',
      en: 'Satguru Kabir Saheb proclaims: Wherever I wandered, I saw only worldly spectacles and fleeting illusions; yet without the beloved Lord and holy devotees, all those bustling places are mere desolate wilderness to me. ||14||',
    },
    chintan: {
      pb: 'ਜਿਸ ਥਾਂ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਅਤੇ ਪ੍ਰੇਮ ਨਹੀਂ, ਉਹ ਮਹਿਲ ਵੀ ਉਜਾੜ ਸਮਾਨ ਹੈ। ਸੱਚੀ ਰੌਣਕ ਕੇਵਲ ਸਤਿਸੰਗ ਅਤੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਿੱਚ ਹੈ।',
      hi: 'जिस स्थान पर परमात्मा का सिमरन और सत्संग नहीं, वह भव्य नगर भी वीरान जंगल के समान है।',
      en: 'A palace without divine remembrance is a barren desert; true splendor resides only where the Divine is loved.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਕ ਰੰਗ-ਤਮਾਸ਼ਿਆਂ ਦੇ ਮੋਹ ਤੋਂ ਪਰੇ ਹਟ ਕੇ ਆਪਣਾ ਮਨ ਸਤਯਨਾਮ ਵਿੱਚ ਲਗਾਓ।',
      hi: 'सांसारिक तमाशों से दृष्टि हटाकर मन को प्रभु-प्रेम में स्थिर करें।',
      en: 'Turn attention away from hollow worldly amusements and anchor in Divine love.',
    },
    samarpan: {
      pb: 'ਸਭ ਤੋਂ ਵੱਡੇ ਸਨੇਹੀ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣੇ ਹਿਰਦੇ ਨੂੰ ਅਰਪਨ ਕਰੋ।',
      hi: 'परम स्नेही सतगुरु के चरणों में अपना हृदय समर्पित करें।',
      en: 'Surrender your heart to the ultimate Beloved, the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 15 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-15',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੫: ਸੰਤਨ ਕੀ ਝੁੰਗੀਆ ਭਲੀ (ਭਠਿ ਕੁਸਤੀ ਗਾਉ)',
      hi: 'सलोक १५: संतन की झुंगीआ भली (भठि कुसती गाउ)',
      en: 'Salok 15: Better is the Saint\'s Humble Hut Than a Wicked Palace',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਤਨ ਕੀ ਝੁੰਗੀਆ ਭਲੀ ਭਠਿ ਕੁਸਤੀ ਗਾਉ ॥',
      'ਆਗਿ ਲਗਉ ਤਿਹ ਧਉਲਹਰ ਜਿਹ ਨਾਹੀ ਹਰਿ ਕੋ ਨਾਉ ॥੧੫॥',
    ],
    moolDevanagari: [
      'कबीर संतन की झुंगीआ भली भठि कुसती गाउ ॥',
      'आगि लगउ तिह धउलहर जिह नाही हरि को नाउ ॥१५॥',
    ],
    moolRoman: [
      'Kabīr santan kī jhungīā bhalī bhath kustī gāu.',
      'Āg lagau tih dhaulhar jih nāhī har ko nāu. ||15||',
    ],
    shabdarth: [
      {
        word: 'ਝੁੰਗੀਆ / झुंगीआ',
        meaning: {
          pb: 'ਕੱਚੀ ਝੁੱਗੀ, ਸਾਧਾਰਨ ਕੁੱਲੀ',
          hi: 'कच्ची कुटिया, झोंपड़ी',
          en: 'Humble straw hut',
        },
      },
      {
        word: 'ਭਠਿ ਕੁਸਤੀ ਗਾਉ / भठि कुसती गाउ',
        meaning: {
          pb: 'ਦੁਸ਼ਟਾਂ ਦਾ ਪਿੰਡ ਭੱਠੀ (ਅੱਗ ਦੇ ਚੁੱਲ੍ਹੇ) ਵਰਗਾ ਹੈ',
          hi: 'कुसंगियों का गांव जलती हुई भट्ठी समान है',
          en: 'The village of the wicked burns like a fiery furnace',
        },
      },
      {
        word: 'ਧਉਲਹਰ / धउलहर',
        meaning: {
          pb: 'ਸਫੈਦ ਉੱਚੇ ਰਾਜ-ਮਹਿਲ',
          hi: 'ऊंचे-ऊंचे भव्य राजमहल',
          en: 'White marble mansions and royal palaces',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਕਥਨ ਹੈ ਕਿ -ਸੰਤਾਂ ਦੀ ਝੁੱਗੀ ਚੰਗੀ ਹੈ ਤੇ ਬੁਰੇ ਪੁਰਸ਼ ਦਾ ਪਿੰਡ ਵੀ ਭੱਠੀ ਸਮਾਨ ਹੈ। ਫਿਰ ਕਹਿੰਦੇ ਹਨ। ਕਿ ਉਸ ਰਾਜ ਮਹੱਲ ਨੂੰ ਅੱਗ ਲੱਗ ਜਾਵੇ ਜਿਸ ਵਿਚ ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਨਹੀਂ ਲਿਆ ਜਾਂਦਾ ॥ ੧੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- संतों की साधारण झोंपड़ी उत्तम है, जबकि दुष्टों का पूरा गांव जलती भट्ठी के समान त्याज्य है। आग लग जाए उन भव्य महलों को, जिनमें प्रभु का पावन नाम नहीं जपा जाता॥ १५॥',
      en: 'Satguru Kabir Saheb proclaims: Blessed is the humble hut of the saints; the town of the wicked is like a blazing furnace. May those grand palaces burn to ashes where the Divine Name is never uttered! ||15||',
    },
    chintan: {
      pb: 'ਸਾਦਗੀ ਅਤੇ ਪ੍ਰਭੂ-ਭਗਤੀ ਵਾਲਾ ਛੋਟਾ ਘਰ ਵੀ ਸਵਰਗ ਹੈ, ਪਰ ਨਾਮ-ਹੀਣ ਸ਼ਾਨੋ-ਸ਼ੌਕਤ ਵਾਲੇ ਮਹਿਲ ਵੀ ਨਰਕ ਸਮਾਨ ਹਨ।',
      hi: 'सादगी और प्रभु-स्मरण से युक्त छोटी कुटिया भी स्वर्ग है, किंतु नाम-रहित विलासी महल नरक समान हैं।',
      en: 'A modest hut filled with prayer is heaven; a godless mansion of luxury is hell.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਸ਼ਾਨੋ-ਸ਼ੌਕਤ ਦੀ ਥਾਂ ਸਾਧਗੀ ਅਤੇ ਸਤਸੰਗ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਓ।',
      hi: 'भौतिक ठाठ-बाट की जगह सादगी और सत्संग को जीवन का आधार बनाएं।',
      en: 'Choose saintly simplicity and continuous prayer over vain luxury.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਦੇ ਮਹਿਲ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਸਿਮਰਨ ਦਾ ਮੰਦਰ ਬਣਾਓ।',
      hi: 'अपने अंतःकरण को प्रभु सिमरन की पावन कुटिया बनाएं।',
      en: 'Dedicate the sanctuary of your heart to the unbroken remembrance of the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 16 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-16',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੬: ਸੰਤ ਮੂਏ ਕਿਆ ਰੋਈਐ (ਸਾਕਤ ਬਾਪੁਰੇ)',
      hi: 'सलोक १६: संत मूए किआ रोईऐ (साकत बापुरे)',
      en: 'Salok 16: Why Mourn the Saint Who Returns to the Eternal Abode?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਤ ਮੂਏ ਕਿਆ ਰੋਈਐ ਜੋ ਅਪੁਨੇ ਗ੍ਰਿਹਿ ਜਾਇ ॥',
      'ਰੋਵਹੁ ਸਾਕਤ ਬਾਪੁਰੇ ਜੁ ਹਾਟੈ ਹਾਟ ਬਿਕਾਇ ॥੧੬॥',
    ],
    moolDevanagari: [
      'कबीर संत मूए किआ रोईऐ जो अपुने ग्रिहि जाइ ॥',
      'रोवहु साकत बापुरे जु हाटै हाਟ बिकाइ ॥१६॥',
    ],
    moolRoman: [
      'Kabīr sant mūe kiā roīai jo apune grihi jāi.',
      'Rovahu sākat bāpure ju hātai hāt bikāi. ||16||',
    ],
    shabdarth: [
      {
        word: 'ਅਪੁਨੇ ਗ੍ਰਿਹਿ / अपुने ग्रिहि',
        meaning: {
          pb: 'ਆਪਣੇ ਨਿੱਜ ਘਰ (ਸਤਲੋਕ/ਪ੍ਰਭੂ ਧਾਮ) ਵਿੱਚ',
          hi: 'अपने निज धाम (सत्यलोक/प्रभु लोक) में',
          en: 'To their true primal home (Satlok)',
        },
      },
      {
        word: 'ਸਾਕਤ ਬਾਪੁਰੇ / साकत बापुरे',
        meaning: {
          pb: 'ਰੱਬ ਤੋਂ ਟੁੱਟੇ ਹੋਏ ਮਾਇਆਧਾਰੀ ਵਿਚਾਰੇ ਜੀਵ',
          hi: 'प्रभु-विमुख, मायाधारी अभागे प्राणी',
          en: 'Wretched faithless materialists',
        },
      },
      {
        word: 'ਹਾਟੈ ਹਾਟ ਬਿਕਾਇ / हाटै हाट बिकाइ',
        meaning: {
          pb: 'ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਦੀ ਮੰਡੀ ਵਿੱਚ ਭਟਕਦੇ ਵਿਕਦੇ ਹਨ',
          hi: 'चौरासी लाख योनियों के हाट-बाजार में भटकते हैं',
          en: 'Traded and reborn endlessly across the 8.4 million species',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਸੰਤ (ਭਲੇ ਪੁਰਸ਼) ਦੇ ਮਰਨ ਤੇ ਕਿਉਂ ਰੋਈਏ, ਜਿਹੜਾ ਆਪਣੇ ਘਰ ਜਾਂਦਾ ਹੈ। ਹਾਂ ! ਉਸ ਬੁਰੇ ਪੁਰਸ਼ ਵਿਚਾਰੇ ਨੂੰ ਰੋਵਣਾ ਕਰੋ ਜਿਹੜਾ ਹੱਟੀ ਹੱਟੀ ਵਿਕਦਾ (ਬੇਕਦਰਾ ਹੋਇਆ) ਜੂਨਾਂ ਵਿਚ ਭਟਕਦਾ ਫਿਰਦਾ ਹੈ॥ ੧੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- संतों के भौतिक शरीर छोड़ने पर क्यों शोक करें, जो अपने सच्चे आत्मिक घर (सत्यलोक) लौट जाते हैं। रोना तो उस अभागे साकत (प्रभु-विमुख) पर चाहिए जो चौरासी लाख योनियों के हाट-बाज़ार में भटकता हुआ बार-बार जन्मता-मरता है॥ १६॥',
      en: 'Satguru Kabir Saheb proclaims: Why mourn the departure of a saint who merely returns to their true eternal home? Weep instead for the wretched materialist, who is traded and reborn ceaselessly in the marketplace of reincarnation. ||16||',
    },
    chintan: {
      pb: 'ਸੰਤ ਮਹਾਪੁਰਸ਼ ਮੁਕਤ ਹੋ ਕੇ ਸੱਚਖੰਡ ਵਿੱਚ ਲੀਨ ਹੁੰਦੇ ਹਨ। ਪਰ ਨਾਮ-ਹੀਣ ਮਨੁੱਖ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਦੇ ਚੱਕਰਵਿਊਹ ਵਿੱਚ ਫਸ ਜਾਂਦਾ ਹੈ।',
      hi: 'संत महापुरुष प्रभु में लीन होकर शाश्वत मुक्ति पाते हैं, जबकि भक्ति-रहित जीव पुनर्जन्म के दुखों में भटकता है।',
      en: 'Saints return home to the Supreme Realm, while souls devoid of devotion wander endlessly through rebirths.',
    },
    acharana: {
      pb: 'ਚੌਰਾਸੀ ਦੇ ਗੇੜ ਤੋਂ ਮੁਕਤੀ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'जन्म-मरण के बंधन से मुक्ति हेतु सत्यनाम की सच्ची कमाई करें।',
      en: 'Cultivate the wealth of Satyanaam to cross beyond the cycle of births and deaths.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਅਸਲ ਘਰ ਸਤਲੋਕ ਦੀ ਪ੍ਰਾਪਤੀ ਲਈ ਸਤਿਗੁਰੂ ਨੂੰ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'अपने शाश्वत घर सत्यलोक की प्राप्ति हेतु सतगुरु की शरण लें।',
      en: 'Surrender to the Satguru to return to your primal eternal home.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 17 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-17',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੭: ਸਾਕਤੁ ਐਸਾ ਹੈ ਜੈਸੀ ਲਸਨ ਕੀ ਖਾਨਿ',
      hi: 'सलोक १७: साकतु ऐसा है जैसी लसन की खानि',
      en: 'Salok 17: The Wicked is Like a Mine of Garlic',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਕਤੁ ਐਸਾ ਹੈ ਜੈਸੀ ਲਸਨ ਕੀ ਖਾਨਿ ॥',
      'ਕੋਨੇ ਬੈਠੇ ਖਾਈਐ ਪਰਗਟ ਹੋਇ ਨਿਦਾਨਿ ॥੧੭॥',
    ],
    moolDevanagari: [
      'कबीर साकतु ऐसा है जैसी लसन की खानि ॥',
      'कोने बैठे खाईऐ परगट होइ निदानि ॥१७॥',
    ],
    moolRoman: [
      'Kabīr sākat aisā hai jaisī lasan kī khān.',
      'Kone baithe khāīai pargat hoi nidān. ||17||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਕਤੁ / साकतु',
        meaning: {
          pb: 'ਪ੍ਰਭੂ-ਵਿਮੁਖ, ਖੋਟਾ, ਮਾਇਆਧਾਰੀ ਮਨੁੱਖ',
          hi: 'प्रभु-विमुख, दुष्ट, कपटी व्यक्ति',
          en: 'Faithless materialist / hypocrite',
        },
      },
      {
        word: 'ਲਸਨ ਕੀ ਖਾਨਿ / लसन की खानि',
        meaning: {
          pb: 'ਲਸਣ (ਥੋਮ) ਦਾ ਭੰਡਾਰ ਜਿਸ ਦੀ ਬਦਬੂ ਛੁਪਦੀ ਨਹੀਂ',
          hi: 'लहसुन का ढेर जिसकी दुर्गंध छिपती नहीं',
          en: 'Storehouse of garlic whose pungent odor cannot be hidden',
        },
      },
      {
        word: 'ਨਿਦਾਨਿ / निदानि',
        meaning: {
          pb: 'ਅੰਤ ਨੂੰ, ਆਖ਼ਰਕਾਰ',
          hi: 'अंततः, आखिरकार',
          en: 'Ultimately / in the end',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਖੋਟਾ ਪੁਰਸ਼ ਐਸਾ ਹੈ ਜਿਸ ਤਰ੍ਹਾਂ ਕਿ ਥੋਮ ਦੀ ਖਾਣ (ਭੰਡਾਰ) ਜਿਸ ਨੂੰ ਭਾਵੇਂ ਨੁੱਕਰ ਵਿਚ ਬੈਠ ਕੇ ਖਾਵੀਏ, ਅੰਤ ਨੂੰ ਉਸਦੀ ਬੂ ਪਰਗਟ ਹੋ ਕੇ ਹੀ ਰਹਿੰਦੀ ਹੈ॥੧੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- प्रभु-विमुख कपटी मनुष्य लहसुन के ढेर के समान है, जिसे चाहे किसी भी एकांत कोने में बैठकर खाया जाए, अंततः उसकी दुर्गंध प्रकट होकर ही रहती है॥ १७॥',
      en: 'Satguru Kabir Saheb proclaims: The hypocritical faithless person is like a mine of garlic; even if eaten in a secluded corner, its pungent odor inevitably exposes itself in the end. ||17||',
    },
    chintan: {
      pb: 'ਖੋਟ ਅਤੇ ਪਾਪ ਕਦੇ ਛੁਪ ਨਹੀਂ ਸਕਦੇ। ਜਿਸ ਮਨ ਵਿੱਚ ਨਾਮ ਨਹੀਂ, ਉਸ ਦੇ ਔਗੁਣ ਅੰਤ ਨੂੰ ਪ੍ਰਗਟ ਹੋ ਕੇ ਹੀ ਰਹਿੰਦੇ ਹਨ।',
      hi: 'कपट और पाप कभी छिप नहीं सकते। अंतःकरण की अशुद्धि अंततः सबको ज्ञात हो जाती है।',
      en: 'Deceit and wickedness cannot remain hidden; true purity comes only through genuine devotion.',
    },
    acharana: {
      pb: 'ਕਪਟ ਤੇ ਢੋਂਗ ਦਾ ਤਿਆਗ ਕਰਕੇ ਨਿਰਮਲ ਅਤੇ ਸੱਚਾ ਆਚਰਣ ਰੱਖੋ।',
      hi: 'कपट व ढोंग त्यागकर सरल और निष्कपट जीवन जिएं।',
      en: 'Cast away hypocrisy and cultivate transparent, genuine purity.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਗਿਆਨ ਨਾਲ ਆਪਣੇ ਮਨ ਦੀ ਦੁਰਗੰਧ ਨੂੰ ਦੂਰ ਕਰੋ।',
      hi: 'सतगुरु के पावन ज्ञान से अपने अंतःकरण को निर्मल बनाएं।',
      en: 'Purify the soul through the fragrant wisdom of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 18 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-18',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੮: ਮਾਇਆ ਡੋਲਨੀ ਪਵਨੁ ਝਕੋਲਨਹਾਰੁ (ਸੰਤਹੁ ਮਾਖਨੁ ਖਾਇਆ)',
      hi: 'सलोक १८: माइआ डोलनी पवनु झकोलनहारु (संतहु माखनु खाइआ)',
      en: 'Salok 18: Maya is the Churning Pot, Saints Taste the Butter',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਇਆ ਡੋਲਨੀ ਪਵਨੁ ਝਕੋਲਨਹਾਰੁ ॥',
      'ਸੰਤਹੁ ਮਾਖਨੁ ਖਾਇਆ ਛਾਛਿ ਪੀਐ ਸੰਸਾਰੁ ॥੧੮॥',
    ],
    moolDevanagari: [
      'कबीर माइआ डोलनी पवनु झकोलनहारु ॥',
      'संतहु माखनु खाइआ छाछि पीऐ संसारु ॥१८॥',
    ],
    moolRoman: [
      'Kabīr māiā dolnī pavan jhakolanhār.',
      'Santahu mākhan khāiā chhāchh pīai sansār. ||18||',
    ],
    shabdarth: [
      {
        word: 'ਡੋਲਨੀ / डोलनी',
        meaning: {
          pb: 'ਦੁੱਧ ਰਿੜਕਣ ਵਾਲੀ ਮੱਟੀ/ਮਟਕੀ',
          hi: 'दूध मथने वाली मटकी',
          en: 'Churning pot',
        },
      },
      {
        word: 'ਮਾਖਨੁ / माखनु',
        meaning: {
          pb: 'ਮੱਖਣ (ਸਾਰ-ਤੱਤ, ਸਤਯਨਾਮ, ਸ਼ੁਭ ਗੁਣ)',
          hi: 'मक्खन (सार तत्व, प्रभु-भक्ति, सत्यनाम)',
          en: 'Butter (the divine essence, truth)',
        },
      },
      {
        word: 'ਛਾਛਿ / छाछि',
        meaning: {
          pb: 'ਲੱਸੀ (ਫੋਕਟ, ਵਿਸ਼ੇ-ਵਿਕਾਰ)',
          hi: 'छाछ (सारहीन, नश्वर विषय-वासनाएं)',
          en: 'Buttermilk (the residue, worldly illusion)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਾਇਆ ਮੱਟੀ ਹੈ, (ਦੁੱਧ ਰਿੜਕਣ ਵਾਲੀ) ਅਤੇ ਹਵਾ ਉਸ ਨੂੰ ਰਿੜਕਣ ਵਾਲੀ ਹੈ। ਉਸਦਾ ਮੱਖਣ (ਸ਼ੁਭ ਗੁਣ) ਸੰਤਾਂ ਨੇ ਖਾਧਾ ਹੈ ਅਤੇ ਸੰਸਾਰ ਉਸਦੀ ਲੱਸੀ ਮੰਦ-ਵਾਸ਼ਨਾਵਾਂ ਰੂਪ ਪੀਂਦਾ ਹੈ ॥੧੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यह माया मथने की मटकी है और प्राण-पवन उसे मथने वाला है। संतों ने साधना द्वारा उसका सारभूत मक्खन (सत्यनाम) ग्रहण किया है, जबकि अज्ञानी संसार केवल सारहीन छाछ (विषय-वासना) पीता रहता है॥ १८॥',
      en: 'Satguru Kabir Saheb proclaims: Maya is the churning pot, and the vital breath is the churn. The saints have extracted and savored the pure butter of the Divine Name, while the worldly crowd drinks only the leftover buttermilk. ||18||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰ ਦੇ ਵਿਸ਼ੇ-ਵਿਕਾਰ ਫੋਕਟ ਲੱਸੀ ਸਮਾਨ ਹਨ। ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਦਾ ਮੰਥਨ ਕਰਕੇ ਸਤਯਨਾਮ ਰੂਪੀ ਅੰਮ੍ਰਿਤ ਮੱਖਣ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'सांसारिक भोग सारहीन छाछ के समान हैं। साधना और सत्संग के मंथन से सत्यनाम रूपी अमृत मक्खन प्राप्त करना ही जीवन का लक्ष्य है।',
      en: 'Worldly pleasures are like worthless buttermilk; through spiritual contemplation, extract the immortal butter of Truth.',
    },
    acharana: {
      pb: 'ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਨੂੰ ਛੱਡ ਕੇ ਨਾਮ ਦੇ ਸਾਰ-ਤੱਤ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'सारहीन प्रपंच छोड़कर प्रभु-स्मरण के सार तत्व को अपनाएं।',
      en: 'Choose the supreme essence of the Divine Name over fleeting sensory pursuits.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣੇ ਹਰ ਸੁਆਸ ਦਾ ਮੰਥਨ ਕਰਕੇ ਸਤਯਨਾਮ ਨੂੰ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'सतगुरु के चरणों में अपने श्वासों को सत्यनाम के मंथन में लगाएं।',
      en: 'Offer every breath to churn the sacred nectar of Satyanaam.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 19 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-19',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੧੯: ਪਵਨ ਵਹੈ ਹਿਵ ਧਾਰ (ਜਿਨਿ ਬਿਲੋਇਆ ਤਿਨਿ ਖਾਇਆ)',
      hi: 'सलोक १९: पवन वहै हिव धार (जिनि बिलोइआ तिनि खाइआ)',
      en: 'Salok 19: The Cool Breeze of Breath Churns the Nectar',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਇਆ ਡੋਲਨੀ ਪਵਨ ਵਹੈ ਹਿਵ ਧਾਰ ॥',
      'ਜਿਨਿ ਬਿਲੋਇਆ ਤਿਨਿ ਖਾਇਆ ਅਵਰ ਬਿਲੋਵਨਹਾਰ ॥੧੯॥',
    ],
    moolDevanagari: [
      'कबीर माइआ डोलनी पवन वहै हिव धार ॥',
      'जिनि बिलोइआ तिनि खाइआ अवर बिलोवनहार ॥१९॥',
    ],
    moolRoman: [
      'Kabīr māiā dolnī pavan vahai hiv dhār.',
      'Jin biloīā tin khāiā avar bilovanhār. ||19||',
    ],
    shabdarth: [
      {
        word: 'ਹਿਵ ਧਾਰ / हिव धार',
        meaning: {
          pb: 'ਬਰਫ਼ ਵਰਗੀ ਸ਼ਾਂਤ ਅਤੇ ਠੰਢੀ ਧਾਰਾ (ਸੁਖਮਨਾ ਨਾੜੀ)',
          hi: 'बर्फ जैसी शीतल शांत धारा (सुषुम्ना नाड़ी)',
          en: 'Cool icy stream / serene current of peaceful breath',
        },
      },
      {
        word: 'ਬਿਲੋਇਆ / बिलोइआ',
        meaning: {
          pb: 'ਸੁਆਸ-ਸੁਆਸ ਨਾਮ ਦਾ ਮੰਥਨ ਕੀਤਾ',
          hi: 'श्वास-श्वास में नाम का मंथन किया',
          en: 'Churned through conscious meditative breathing',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਾਇਆ (ਦੁਨੀਆਂ) ਇਕ ਮੱਟੀ ਹੈ ਅਤੇ ਪੌਣ ਸੁਆਸ ਰੂਪ ਬਰਫ ਵਾਂਗੂੰ ਠੰਢੀ ਵਗ ਰਹੀ ਹੈ। ਜਿਸ ਨੇ ਰਿੜਕਿਆ, (ਸੁਆਸ ਸੁਆਸ ਨਾਮ ਜਪਿਆ) ਉਸ ਨੇ ਨਾਮ ਰੂਪ (ਮੱਖਣ ਖਾਧਾ) ਅਤੇ ਹੋਰ ਸਾਰੇ ਰਿੜਕਣ ਵਾਲੇ ਰਿੜਕਦੇ ਹੀ ਰਹਿ ਗਏ॥ ੧੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यह शरीर-रूपी माया मटकी है और श्वास-पवन बर्फ के समान शीतल बह रही है। जिसने श्वास-श्वास में नाम का मंथन किया, उसने नाम-रूपी मक्खन का रसपान किया; शेष लोग केवल व्यर्थ मंथन में ही उलझे रह गए॥ १९॥',
      en: 'Satguru Kabir Saheb proclaims: In this pot of existence, the breath flows like a cool current. Whoever churned it with the Divine Name savored the butter of liberation, while others merely toiled in vain. ||19||',
    },
    chintan: {
      pb: 'ਸੁਆਸ-ਸੁਆਸ ਸਿਮਰਨ ਦੁਆਰਾ ਹੀ ਆਤਮਾ ਅੰਦਰਲਾ ਅੰਮ੍ਰਿਤ ਰਸ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ। ਬਾਹਰੀ ਵਿਖਾਵੇ ਵਾਲੇ ਰਿੜਕਦੇ ਹੀ ਰਹਿ ਜਾਂਦੇ ਹਨ।',
      hi: 'श्वास-श्वास सिमरन द्वारा ही अंतरात्मा का अमृत रस प्रकट होता है। खोखले पाखंडी केवल हाथ मलते रह जाते हैं।',
      en: 'Only through mindful breath-by-breath remembrance does the nectar of the Soul awaken.',
    },
    acharana: {
      pb: 'ਹਰ ਆਉਂਦੇ-ਜਾਂਦੇ ਸੁਆਸ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਅਭਿਆਸ ਕਰੋ।',
      hi: 'प्रति श्वास में सत्यनाम का एकाग्र अभ्यास करें।',
      en: 'Practice Satyanaam with every incoming and outgoing breath.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਪ੍ਰਾਣਾਂ ਦੀ ਧਾਰਾ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਅਰਪਿਤ ਕਰੋ।',
      hi: 'अपने प्राणों की धारा को सतगुरु के पावन शब्द में समर्पित करें।',
      en: 'Surrender the flow of your life-breath into the True Word.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 20 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-20',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੨੦: ਮਾਇਆ ਚੋਰਟੀ ਮੁਸਿ ਮੁਸਿ ਲਾਵੈ ਹਾਟਿ (ਬਾਰਹ ਬਾਟ)',
      hi: 'सलोक २०: माइआ चोरटी मुसि मुसि लावै हाटि (बारह बाट)',
      en: 'Salok 20: Maya the Thief Plunders All, but Kabir Smashed It to Pieces',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਇਆ ਚੋਰਟੀ ਮੁਸਿ ਮੁਸਿ ਲਾਵੈ ਹਾਟਿ ॥',
      'ਏਕੁ ਕਬੀਰਾ ਨਾ ਮੁਸੈ ਜਿਨਿ ਕੀਨੀ ਬਾਰਹ ਬਾਟ ॥੨੦॥',
    ],
    moolDevanagari: [
      'कबीर माइआ चोरटी मुसि मुसि लावै हाटि ॥',
      'एकु कबीरा ना मुसै जिनि कीनी बारह बाट ॥२०॥',
    ],
    moolRoman: [
      'Kabīr māiā chortī mus mus lāvai hāt.',
      'Ek kabīrā nā musai jin kīnī bārah bāt. ||20||',
    ],
    shabdarth: [
      {
        word: 'ਚੋਰਟੀ / चोरटी',
        meaning: {
          pb: 'ਠੱਗਣੀ, ਚੋਰਨੀ, ਧੋਖੇਬਾਜ਼ ਮਾਇਆ',
          hi: 'चोरनी, ठगिनी, कपटी माया',
          en: 'Thief / deceiver Maya',
        },
      },
      {
        word: 'ਮੁਸਿ ਮੁਸਿ / मुसि मुसि',
        meaning: {
          pb: 'ਲੁੱਟ-ਲੁੱਟ ਕੇ, ਠੱਗ-ਠੱਗ ਕੇ',
          hi: 'लूट-लूट कर, ठग-ठग कर',
          en: 'Plundering and robbing continuously',
        },
      },
      {
        word: 'ਬਾਰਹ ਬਾਟ / बारह बाट',
        meaning: {
          pb: 'ਬਾਰਾਂ ਟੋਟੇ ਕਰ ਦਿੱਤੇ (ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਸ਼ਟ ਕਰ ਦਿੱਤੀ)',
          hi: 'बारह टुकड़े कर दिए (पूर्णतः नष्ट व परास्त कर दिया)',
          en: 'Smashed into twelve pieces (completely conquered and shattered)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਕਥਨ ਹੈ- ਕਿ ਮਾਇਆ ਠੱਗਣੀ ਠੱਗ ਠੱਗ (ਲੁਟ) ਕੇ ਵਿਕਾਰਾਂ ਰੂਪ ਹੱਟੀਆਂ ਲਾਉਂਦੀ ਹੈ, ਤਰ੍ਹਾਂ ਤਰ੍ਹਾਂ ਦੇ ਰੂਪਾਂ ਵਿਚ ਪੁਰਸ਼ ਨੂੰ ਭਟਕਾਉਂਦੀ ਹੈ, ਪਰ ਇਕ ਕਬੀਰ ਨਹੀਂ ਠੱਗਿਆ ਜਾਂਦਾ ਜਿਸ ਨੇ ਬਾਰਾਂ ਟੋਟੇ ਕਰ ਦਿੱਤੀ ਹੈ, ਭਾਵ ਨਸ਼ਟ ਕਰ ਦਿੱਤੀ ਹੈ ਤੇ ਇਸਦਾ ਕੋਈ ਰੂਪ ਵੀ ਸਵੀਕਾਰ ਨਹੀਂ ਕੀਤਾ ॥੨੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यह माया बड़ी चालाक चोरनी है जो जीवों को लूट-लूट कर विकारों की दुकानें लगाती है और अनेक रूपों में भटकाती है। किंतु अकेला कबीर इस माया से नहीं ठगा गया, जिसने ज्ञान के बल पर इस माया के बारह टुकड़े कर इसे पूर्णतः पराजित कर दिया॥ २०॥',
      en: 'Satguru Kabir Saheb proclaims: Maya is a cunning thief who plunders mortals and sets up shops of worldly desires. But Kabir was not robbed, for he smashed Maya into twelve pieces and conquered it through Divine Wisdom! ||20||',
    },
    chintan: {
      pb: 'ਮਾਇਆ ਸਾਰੇ ਸੰਸਾਰ ਨੂੰ ਭਰਮਾਉਂਦੀ ਹੈ। ਪਰ ਜਿਸ ਨੂੰ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦਾ ਸਾਰ ਸ਼ਬਦ ਪ੍ਰਾਪਤ ਹੋ ਜਾਵੇ, ਮਾਇਆ ਉਸ ਦਾ ਕੁਝ ਨਹੀਂ ਵਿਗਾੜ ਸਕਦੀ।',
      hi: 'माया समस्त जगत को छलती है। किंतु जिसे पूर्ण सतगुरु का सार शब्द प्राप्त हो जाए, माया उसके सामने नतमस्तक हो जाती है।',
      en: 'Maya deceives the entire cosmos, yet it powerless before the soul armed with the Master\'s Truth.',
    },
    acharana: {
      pb: 'ਮਾਇਆ ਦੇ ਛਲ-ਕਪਟ ਤੋਂ ਸੁਚੇਤ ਰਹੋ ਅਤੇ ਗਿਆਨ ਨਾਲ ਵਿਕਾਰਾਂ ਨੂੰ ਭਸਮ ਕਰੋ।',
      hi: 'माया के प्रपंचों से सावधान रहकर ज्ञान द्वारा वासनाओं को पराजित करें।',
      en: 'Stay vigilant against deceptive illusions and vanquish worldly desires with wisdom.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸ਼ਰਨ ਲੈ ਕੇ ਮਾਇਆ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋਵੋ।',
      hi: 'सतगुरु कबीर साहेब के चरणों की शरण लेकर माया के बंधनों से मुक्त हों।',
      en: 'Take refuge in Satguru Kabir Saheb to transcend all bonds of Maya.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 48 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-48',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੪੮: ਖਿੰਥਾ ਜਲਿ ਕੋਇਲਾ ਭਈ (ਦੇਹ ਨਾਸ਼ਮਾਨਤਾ)',
      hi: 'सलोक ४८: खिंथा जलि कोयला भई (देह नाशमानता)',
      en: 'Salok 48: The Robe of Flesh Burns to Ash',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਖਿੰਥਾ ਜਲਿ ਕੋਇਲਾ ਭਈ ਖਾਪਰੁ ਫੂਟ ਮਫੂਟ॥',
      'ਜੋਗੀ ਬਪੁੜਾ ਖੇਲਿਓ ਆਸਨਿ ਰਹੀ ਬਿਭੂਤਿ ॥੪੮॥',
    ],
    moolDevanagari: [
      'कबीर खिंथा जलि कोयला भई खापरु फूट मफूट॥',
      'जोगी बपुड़ा खेलिओ आसनि रही बिभूति ॥४८॥',
    ],
    moolRoman: [
      'Kabīr khinthā jal koilā bhaī khāpar phūt maphūt.',
      'Jogī bapurā khelio āsan rahī bibhūt. ||48||',
    ],
    shabdarth: [
      {
        word: 'ਖਿੰਥਾ / खिंथा',
        meaning: {
          pb: 'ਜੋਗੀਆਂ ਦੀ ਗੋਦੜੀ (ਫਟੇ-ਪੁਰਾਣੇ ਕੱਪੜਿਆਂ ਦੀ ਬਣੀ)',
          hi: 'योगियों की गुदड़ी (फटे-पुराने वस्त्रों से सिली)',
          en: 'Patchwork cloak worn by ascetics',
        },
      },
      {
        word: 'ਖਾਪਰੁ / खापरु',
        meaning: {
          pb: 'ਭਿੱਖਿਆ ਮੰਗਣ ਲਈ ਖਪਰਾ ਜਾਂ ਪਾਤਰ',
          hi: 'भिक्षा मांगने का पात्र / खपरा',
          en: 'Alms bowl',
        },
      },
      {
        word: 'ਬਿਭੂਤਿ / विभूति',
        meaning: {
          pb: 'ਸੁਆਹ, ਭਸਮ',
          hi: 'राख, भस्म',
          en: 'Sacred ash',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੀਵ ਰੂਪ ਜੋਗੀ ਦੀ ਦੇਹ ਰੂਪ ਗੋਦੜੀ ਸੜ ਕੇ ਕੋਲਾ ਹੋ ਗਈ ਅਤੇ ਭਿੱਖਿਆ ਮੰਗਣ ਵਾਲਾ ਖਪਰਾ ਟੁੱਟ ਫੁੱਟ ਗਿਆ। ਜੀਵ ਰੂਪ ਜੋਗੀ ਵਿਚਾਰਾ ਵੀ ਖੇਡ ਸਮਾਪਤ ਕਰ ਗਿਆ ਤੇ ਪਿਛੇ ਉਸ ਦੀ ਆਸਣ-ਮੜੀ ਉਤੇ ਸੁਆਹ ਹੀ ਰਹਿ ਗਈ॥੪੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जीव-रूपी जोगी की देह-रूपी गुदड़ी जलकर कोयला हो गई और भिक्षा का पात्र फूट गया। वह बेचारा जोगी भी संसार की खेल खेल कर चला गया और पीछे उसके आसन पर केवल राख ही शेष रह गई॥ ४८॥',
      en: 'Satguru Kabir Saheb proclaims: The soul-yogis patchwork cloak of flesh burns to coal, and the alms bowl shatters. The poor yogi finishes the worldly game, leaving behind only ashes on the seat. ||48||',
    },
    chintan: {
      pb: 'ਇਹ ਸਰੀਰ ਨਾਸ਼ਵਾਨ ਹੈ। ਅਹੰਕਾਰ ਅਤੇ ਬਾਹਰਲੇ ਭੇਖ ਸਦਾ ਨਹੀਂ ਰਹਿੰਦੇ, ਕੇਵਲ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਹੀ ਸੱਚਾ ਸਾਥੀ ਹੈ।',
      hi: 'यह शरीर नश्वर है। बाहरी योग-भेष और देह का अहंकार सदा नहीं टिकते, केवल प्रभु नाम ही शाश्वत है।',
      en: 'This physical frame is transient. External garbs and ego vanish, leaving only divine remembrance.',
    },
    acharana: {
      pb: 'ਦੇਹ ਦੇ ਮੋਹ ਨੂੰ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਮਨ ਜੋੜੋ।',
      hi: 'देह के मोह से ऊपर उठकर नाम सिमरन में चित्त लगाएं।',
      en: 'Transcending bodily attachment, immerse your mind in divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਨਾਸ਼ਵਾਨ ਪਦਾਰਥਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਅਮਰ ਨਾਮ ਨੂੰ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी आत्मा को नश्वर बंधनों से मुक्त कर अमर नाम को समर्पित करें।',
      en: 'Free your soul from ephemeral attachments and dedicate it to the Eternal Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 49 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-49',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੪੯: ਥੋਰੈ ਜਲਿ ਮਾਛੁਲੀ (ਸਮੁੰਦਰ ਦੀ ਤਲਾਸ਼)',
      hi: 'सलोक ४९: थोरै जलि माछुली (समुंदर की तलाश)',
      en: 'Salok 49: The Fish in Shallow Water Should Seek the Great Ocean',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਥੋਰੈ ਜਲਿ ਮਾਛੁਲੀ ਝੀਵਰਿ ਮੇਲਿਓ ਜਾਲੁ ॥',
      'ਇਹ ਟੋਘਨੈ ਨ ਛੂਟਸਹਿ ਫਿਰਿ ਕਰਿ ਸਮੁੰਦੁ ਸਮ੍ਹਾਲਿ ॥੪੯॥',
    ],
    moolDevanagari: [
      'कबीर थोरै जलि माछुली झीवरि मेलिओ जालु ॥',
      'इह टोधनै न छूटसहि ফিরि करि समुंदु सम्हालि ॥४९॥',
    ],
    moolRoman: [
      'Kabīr thorai jal māchhulī jhīvar melio jāl.',
      'Ih toghanai na chhūtsahi phir kar samund samhāl. ||49||',
    ],
    shabdarth: [
      {
        word: 'ਝੀਵਰਿ / झीवरि',
        meaning: {
          pb: 'ਮਛੇਰਾ, ਕਾਲ ਰੂਪੀ ਸ਼ਿਕਾਰੀ',
          hi: 'मछुआरा, काल रूपी शिकारी',
          en: 'Fisherman / Death (Kaal)',
        },
      },
      {
        word: 'ਟੋਘਨੈ / टोधनै',
        meaning: {
          pb: 'ਛੋਟੇ ਟੋਇਆਂ, ਛਪੜੀਆਂ ਵਿੱਚ',
          hi: 'छोटे तालाबों या गड्ढों में',
          en: 'In shallow ponds or puddles',
        },
      },
      {
        word: 'ਸਮੁੰਦੁ ਸਮ੍ਹਾਲਿ / समुंदु सम्हालि',
        meaning: {
          pb: 'ਅਥਾਹ ਸਮੁੰਦਰ (ਪ੍ਰਭੂ-ਚਰਨਾਂ) ਦਾ ਆਸਰਾ ਲੈ',
          hi: 'अथाह समुद्र (प्रभु-चरणों) का आश्रय लो',
          en: 'Seek the refuge of the infinite Ocean (Supreme Lord)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਥੋੜੇ ਪਾਣੀ ਵਿਚ ਰਹਿਣ ਵਾਲੀ ਮੱਛੀ ਨੂੰ ਮਛੇਰਾ ਆਣ ਕੇ ਜਾਲ ਪਾ ਲੈਂਦਾ ਹੈ। ਹੇ ਜੀਵ! ਇਨ੍ਹਾਂ ਛੋਟੀਆਂ ਛਪੜੀਆਂ (ਦੇਵਤਿਆਂ ਆਦਿ ਦੇ ਆਸਰਿਆਂ) ਵਿਚ ਤੂੰ ਕਾਲ ਤੋਂ ਬਚ ਨਹੀਂ ਸਕਦੀ, ਇਸ ਲਈ ਤੂੰ ਅਥਾਹ ਸਮੁੰਦਰ (ਪਰਮਾਤਮਾ) ਦੀ ਭਾਲ ਕਰ ਤੇ ਉਸਦਾ ਆਸਰਾ ਲੈ॥ ੪੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- थोड़े पानी में रहने वाली मछली पर मछुआरा जाल डाल देता है। हे जीव! इन छोटे तालाबों के आश्रय से तू काल के जाल से नहीं बच सकती, इसलिए तू अथाह समुद्र (परमात्मा) का आश्रय ग्रहण कर॥ ४९॥',
      en: 'Satguru Kabir Saheb proclaims: The fisherman casts his net for the fish in shallow waters. O soul, you cannot escape Death in these shallow puddles; seek instead the shelter of the infinite Ocean. ||49||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰਕ ਦੇਵਤੇ ਜਾਂ ਛੋਟੇ ਆਸਰੇ ਕਾਲ ਦੇ ਫਾਹੇ ਤੋਂ ਨਹੀਂ ਬਚਾ ਸਕਦੇ। ਕੇਵਲ ਪੂਰਨ ਪਰਮਾਤਮਾ ਦਾ ਨਾਮ ਹੀ ਅਭੈਦਾਨ ਦਿੰਦਾ ਹੈ।',
      hi: 'सांसारिक देवी-देवता या छोटे प्रलोभन काल के बंधन से मुक्त नहीं कर सकते। केवल पूर्ण परमात्मा की शरण ही रक्षक है।',
      en: 'Worldly attachments and minor refuges cannot protect against mortality. Only the Supreme Lord grants liberation.',
    },
    acharana: {
      pb: 'ਛੋਟੀਆਂ ਕਾਮਨਾਵਾਂ ਨੂੰ ਤਿਆਗ ਕੇ ਪਰਮ ਪਾਰਬ੍ਰਹਮ ਦੀ ਭਗਤੀ ਕਰੋ।',
      hi: 'छोटी कामनाओं का त्याग कर परमेश्वर की भक्ति में लीन हों।',
      en: 'Renounce petty desires and devote yourself to the Supreme Divine.',
    },
    samarpan: {
      pb: 'ਸਮੁੰਦਰ ਰੂਪ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਪੂਰਨ ਤੌਰ \'ਤੇ ਸਮਰਪਿਤ ਹੋ ਜਾਓ।',
      hi: 'समुद्र-रूपी सतगुरु के चरणों में पूर्ण रूप से समर्पित हो जाएं।',
      en: 'Surrender completely to the Lotus Feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 50 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-50',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੦: ਸਮੁੰਦੁ ਨ ਛੋਡੀਐ (ਪ੍ਰਭੂ ਆਸਰਾ)',
      hi: 'सलोक ५०: समुंदु न छोडीऐ (प्रभु आश्रय)',
      en: 'Salok 50: Never Forsake the Ocean, Though Saline',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਮੁੰਦੁ ਨ ਛੋਡੀਐ ਜਉ ਅਤਿ ਖਾਰੋ ਹੋਇ ॥',
      'ਪੋਖਰਿ ਪੋਖਰਿ ਢੂਢਤੇ ਭਲੋ ਨ ਕਹਿਹੈ ਕੋਇ ॥੫੦॥',
    ],
    moolDevanagari: [
      'कबीर समुंदु न छोडीऐ जउ अति खारो होइ ॥',
      'पोखरि पोखरि ढूढते भलो न कहिहै कोइ ॥५०॥',
    ],
    moolRoman: [
      'Kabīr samund na chhodīai jau ati khāro hoi.',
      'Pokhar pokhar dhūdhate bhalo na kahihai koi. ||50||',
    ],
    shabdarth: [
      {
        word: 'ਖਾਰੋ / खारो',
        meaning: {
          pb: 'ਖਾਰਾ, ਨਮਕੀਨ (ਔਖਾ ਮਾਰਗ)',
          hi: 'खारा, नमकीन (कठिन मार्ग)',
          en: 'Salty / rigorous spiritual discipline',
        },
      },
      {
        word: 'ਪੋਖਰਿ / पोखरि',
        meaning: {
          pb: 'ਛੋਟੇ ਤਾਲਾਬ, ਛਪੜੀ',
          hi: 'छोटा तालाब, पोखर',
          en: 'Small ponds / puddles',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਸਮੁੰਦਰ ਰੂਪ ਵਾਹਿਗੁਰੂ ਨੂੰ ਕਦੀ ਨਾ ਛੱਡੀਏ ਭਾਵੇਂ ਉਸਦੀ ਭਗਤੀ ਦਾ ਮਾਰਗ ਕਿੰਨਾ ਵੀ ਔਖਾ (ਖਾਰਾ) ਹੋਵੇ। ਨਿੱਕੇ ਨਿੱਕੇ ਛਪੜਾਂ ਤੋਂ ਪਾਣੀ (ਸੰਸਾਰਕ ਸੁਖ) ਲੱਭਣ ਵਾਲੇ ਨੂੰ ਕੋਈ ਵੀ ਸਮਝਦਾਰ ਚੰਗਾ ਨਹੀਂ ਕਹਿੰਦਾ ॥੫੦॥',
      hi: 'हे कबीर! समुद्र-रूपी परमात्मा को कभी न छोड़िए चाहे उसकी भक्ति का मार्ग कितना भी कठिन (खारा) हो। छोटे-छोटे ताल-पोखरों से पानी ढूंढने वाले को कोई भी बुद्धिमान अच्छा नहीं कहता॥ ५०॥',
      en: 'O Kabir, never abandon the infinite Ocean, though its water be saline (and the discipline rigorous). One who wanders from pond to pond seeking relief is praised by none. ||50||',
    },
    chintan: {
      pb: 'ਸੱਚੇ ਮਾਰਗ \'ਤੇ ਚੱਲਣਾ ਕਠਿਨ ਹੋ ਸਕਦਾ ਹੈ, ਪਰ ਇਹੀ ਮੁਕਤੀ ਦਾ ਇਕੋ ਇਕ ਰਾਹ ਹੈ।',
      hi: 'सत्य का मार्ग कठिन अवश्य होता है, किंतु यही मुक्ति का एकमात्र शाश्वत मार्ग है।',
      en: 'The path of truth may be rigorous, but it is the sole gateway to eternal freedom.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰੀ ਭਰਮਾਂ ਵਿੱਚ ਭਟਕਣ ਦੀ ਬਜਾਏ ਪੂਰਨ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਅਡੋਲ ਰਹੋ।',
      hi: 'सांसारिक प्रलोभनों में भटकने के स्थान पर पूर्ण सतगुरु की शरण में अडिग रहें।',
      en: 'Instead of wandering in worldly illusions, remain steadfast in the Master\'s refuge.',
    },
    samarpan: {
      pb: 'ਕੁਦਰਤ ਦੇ ਮਾਲਕ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਟੱਲ ਸ਼ਰਧਾ ਰੱਖੋ।',
      hi: 'परमात्मा के चरणों में अटूट श्रद्धा और समर्पण बनाए रखें।',
      en: 'Maintain unwavering devotion at the Lotus Feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 51 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-51',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੧: ਨਿਗੁਸਾਂਏਂ ਬਹਿ ਗਏ (ਗੁਰੂ ਮਹਿਮਾ ਤੇ ਨਿਮ੍ਰਤਾ)',
      hi: 'सलोक ५१: निगुसाएं बहि गए (गुरु महिमा व विनम्रता)',
      en: 'Salok 51: The Unguided Sink; Embrace Humility',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਿਗੁਸਾਂਏਂ ਬਹਿ ਗਏ ਥਾਂਘੀ ਨਾਹੀ ਕੋਇ ॥',
      'ਦੀਨ ਗਰੀਬੀ ਆਪੁਨੀ ਕਰਤੇ ਹੋਇ ਸੁ ਹੋਇ ॥੫੧॥',
    ],
    moolDevanagari: [
      'कबीर निगुसाएं बहि गए थांघी नाही कोइ ॥',
      'दीन गरीबी आपुनी करते होइ सु होइ ॥५१॥',
    ],
    moolRoman: [
      'Kabīr nigusāen bahi gae thānghī nāhī koi.',
      'Dīn garībī āpunī karte hoi su hoi. ||51||',
    ],
    shabdarth: [
      {
        word: 'ਨਿਗੁਸਾਂਏਂ / निगुसाएं',
        meaning: {
          pb: 'ਨਿਗੁਰੇ (ਜਿਨ੍ਹਾਂ ਦਾ ਕੋਈ ਗੁਰੂ ਨਹੀਂ)',
          hi: 'निगुुरे (जिन्होंने गुरु धारण नहीं किया)',
          en: 'The unguided / those without a True Master',
        },
      },
      {
        word: 'ਥਾਂਘੀ / थांघी',
        meaning: {
          pb: 'ਸਹਾਰਾ, ਮਲਾਹ, ਕਿਨਾਰਾ ਲਾਉਣ ਵਾਲਾ',
          hi: 'सहारा, मल्लाह, पार लगाने वाला',
          en: 'Support, Savior, or Ferryman',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਨ੍ਹਾਂ ਦਾ ਕੋਈ ਗੁਰੂ ਨਹੀਂ, ਉਹ ਸੰਸਾਰ ਸਮੁੰਦਰ ਵਿੱਚ ਰੁੜ੍ਹ ਜਾਂਦੇ ਹਨ, ਉਨ੍ਹਾਂ ਨੂੰ ਪਾਰ ਲੰਘਾਉਣ ਵਾਲਾ ਕੋਈ ਮਲਾਹ ਨਹੀਂ ਹੁੰਦਾ। ਜਿਨ੍ਹਾਂ ਨੇ ਦੀਨਤਾ ਤੇ ਨਿਮ੍ਰਤਾ ਨੂੰ ਆਪਣਾ ਗਹਿਣਾ ਬਣਾ ਲਿਆ ਹੈ, ਉਹ ਪ੍ਰਭੂ ਦੇ ਭਾਣੇ ਨੂੰ ਮਿੱਠਾ ਕਰਕੇ ਮੰਨਦੇ ਹਨ ॥੫੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जिनका कोई गुरु नहीं, वे संसार-सागर में बह जाते हैं, उन्हें पार लगाने वाला कोई मल्लाह नहीं होता। जिन्होंने दीनता और नम्रता को अपना लिया है, वे परमात्मा के प्रत्येक भाणे (रजा) को मीठा मानकर स्वीकार करते हैं॥ ५१॥',
      en: 'Satguru Kabir Saheb proclaims: The unguided drift and drown in the ocean of samsara without a savior. Those who embrace humility and surrender accept whatever the Lord ordains with sweet gratitude. ||51||',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਬਿਨੁ ਗਿਆਨੁ ਨ ਉਪਜै। ਜੀਵਨ ਵਿੱਚ ਨਿਮ੍ਰਤਾ ਅਤੇ ਗੁਰੂ-ਸ਼ਰਨ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਬਲ ਹੈ।',
      hi: 'गुरु बिना ज्ञान नहीं मिलता। जीवन में विनम्रता और गुरु-शरण ही सबसे बड़ा संबल है।',
      en: 'Without a Master, true wisdom cannot dawn. Humility and the Master\'s refuge are the greatest armor.',
    },
    acharana: {
      pb: 'ਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰਕੇ ਨਿਮ੍ਰਤਾ ਅਤੇ ਸੇਵਾ ਨੂੰ ਅਪਣਾਓ।',
      hi: 'अंकार का त्याग कर नम्रता और सेवा को जीवन का आधार बनाएं।',
      en: 'Forsake ego, embracing humility and selfless service as your guide.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੀਵਨ ਦੀ ਨਾਵ ਸੌਂਪ ਦਿਓ।',
      hi: 'पूर्ण सतगुरु के चरणों में अपने जीवन की नौका सौंप दें।',
      en: 'Entrust the boat of your life to the Lotus Feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 52 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-52',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੨: ਬੈਸਨਉ ਕੀ ਕੂਕਰਿ ਭਲੀ (ਸੰਤ ਸੰਗਤਿ ਮਹਿਮਾ)',
      hi: 'सलोक ५२: बैसनउ की कूकरि भली (संत संगति महिमा)',
      en: 'Salok 52: Blessed is the Saint\'s Dog Over the Unguided Mother',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬੈਸਨਉ ਕੀ ਕੂਕਰਿ ਭਲੀ ਸਾਕਤ ਕੀ ਬੁਰੀ ਮਾਇ ॥',
      'ਓਹ ਨਿਤ ਸੁਨੈ ਹਰਿ ਨਾਮ ਜਸੁ ਉਹ ਪਾਪ ਬਿਸਾਹਨ ਜਾਇ ॥੫੨॥',
    ],
    moolDevanagari: [
      'कबीर बैसनउ की कूकरि भली साकत की बुरी माइ ॥',
      'ओह नित सुनै हरि नाम जसु उह पाप बिसाहन जाइ ॥५२॥',
    ],
    moolRoman: [
      'Kabīr baisnau kī kūkar bhalī sākat kī burī māi.',
      'Oh nit sunai har nām jas uh pāp bisāhan jāi. ||52||',
    ],
    shabdarth: [
      {
        word: 'ਬੈਸਨਉ / बैसनउ',
        meaning: {
          pb: 'ਹਰਿ ਦਾ ਭਗਤ, ਵੈଷ୍ਣਵ',
          hi: 'भगवान का भक्त, संत',
          en: 'Devotee of the Lord / Saint',
        },
      },
      {
        word: 'ਸਾਕਤ / साकत',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਟੁੱਟਿਆ ਹੋਇਆ ਬੇਮੁਖ ਵਿਅਕਤੀ',
          hi: 'परमात्मा से विमुख संसारी जीव',
          en: 'One turned away from God / materialistic person',
        },
      },
      {
        word: 'ਬਿਸਾਹਨ / बिसाहन',
        meaning: {
          pb: 'ਖਰੀਦਣ, ਇਕੱਠੇ ਕਰਨ',
          hi: 'खरीदने, एकत्रित करने',
          en: 'To purchase / accumulate',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਭਗਤ (ਸੰਤ) ਦੀ ਕੁੱਤੀ ਵੀ ਚੰਗੀ ਹੈ ਅਤੇ ਰੱਬ ਤੋਂ ਬੇਮੁਖ ਦੀ ਮਾਂ ਵੀ ਬੁਰੀ ਹੈ, ਕਿਉਂਕਿ ਭਗਤ ਦੀ ਕੁੱਤੀ ਅੱਠੇ ਪਹਿਰ ਹਰੀ ਦਾ ਜੱਸ ਸੁਣਦੀ ਰਹਿੰਦੀ ਹੈ ਤੇ ਬੇਮੁਖ ਦੀ ਮਾਂ ਪਾਪ ਕਮਾਉਣ ਅਤੇ ਸੰਸਾਰਕ ਵਿਕਾਰਾਂ ਵਿੱਚ ਹੀ ਲੱਗੀ ਰਹਿੰਦੀ ਹੈ॥ ੫੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- भक्त (संत) की कुतिया भी अच्छी है और परमात्मा से विमुख संसारी की माता भी बुरी है, क्योंकि भक्त की कुतिया निरंतर प्रभु का यश सुनती है और संसारी की माता पाप कर्मों को ही खरीदने (संचित करने) जाती है॥ ५२॥',
      en: 'Satguru Kabir Saheb proclaims: Better is the dog of a saint than the mother of a godless materialist. The saint\'s dog constantly hears the praises of the Lord, while the materialist mother continually accumulates sins. ||52||',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਰਹਿਣ ਵਾਲਾ ਪਸ਼ੂ ਵੀ ਉੱਚਾ ਹੈ, ਪਰ ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਮਨੁੱਖ ਦਾ ਜੀਵਨ ਵਿਅर्थ ਹੈ।',
      hi: 'संतों की संगति में रहने वाला जीव श्रेष्ठ है, किंतु प्रभु से विमुख अहंकारी का जीवन व्यर्थ है।',
      en: 'Even an animal in the company of saints is exalted, whereas a life turned away from God is wasted.',
    },
    acharana: {
      pb: 'ਸਦਾ ਸੰਤਾਂ ਅਤੇ ਪ੍ਰਭੂ ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਸਮਾਂ ਬਿਤਾਓ।',
      hi: 'सदैव संतों और प्रभु भक्तों की संगति में समय व्यतीत करें।',
      en: 'Constantly cherish the company of saints and God-devoted souls.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸੇਵਕ ਬਣ ਕੇ ਹਰਿ-ਜਸ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਆਧਾਰ ਬਣਾਓ।',
      hi: 'सतगुरु के सेवक बनकर हर-यश को अपने जीवन का आधार बनाएं।',
      en: 'Become a servant of the Master, making divine praise the core of your life.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 53 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-53',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੩: ਹਰਨਾ ਦੁਬਲਾ (ਵਿਸ਼ਾ-ਵਿਕਾਰਾਂ ਦਾ ਜਾਲ)',
      hi: 'सलोक ५३: हरना दुबला (विषय-विकारों का जाल)',
      en: 'Salok 53: The Vulnerable Deer in the Lush Forest of Maya',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਨਾ ਦੁਬਲਾ ਇਹੁ ਹਰੀਆਰਾ ਤਾਲੁ ॥',
      'ਲਾਖ ਅਹੇਰੀ ਏਕੁ ਜੀਉ ਕੇਤਾ ਬੰਚਉ ਕਾਲੁ ॥੫੩॥',
    ],
    moolDevanagari: [
      'कबीर हरना दुबला इहु हरीआरा तालु ॥',
      'लाख अहेरी एकु जीउ केता बंचउ कालु ॥५३॥',
    ],
    moolRoman: [
      'Kabīr harnā dubalā ih harīārā tāl.',
      'Lākh aherī ek jīo ketā banchau kāl. ||53||',
    ],
    shabdarth: [
      {
        word: 'ਹਰਨਾ / हरना',
        meaning: {
          pb: 'ਜੀਵ-ਰूपी ਹਰਨ (ਕਮਜ਼ੋਰ ਮਨ)',
          hi: 'जीव-रूपी हिरण (कमजोर मन)',
          en: 'Soul in the form of a fragile deer',
        },
      },
      {
        word: 'ਹਰੀਆਰਾ ਤਾਲੁ / हरीआरा तालु',
        meaning: {
          pb: 'ਵਿਸ਼ੇ-ਵਕਾਰਾਂ ਨਾਲ ਹਰਾ-ਭਰਾ ਸੰਸਾਰ',
          hi: 'विषय-विकारों से हरा-भरा संसार',
          en: 'Lush green lake of worldly temptations',
        },
      },
      {
        word: 'ਅਹੇਰੀ / अहेरी',
        meaning: {
          pb: 'ਸ਼ਿਕਾਰੀ (ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ ਆਦਿ ਵਿਕਾਰ)',
          hi: 'शिकारी (काम, क्रोध, लोभ आदि विकार)',
          en: 'Hunters (lust, anger, greed, worldly desires)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਜੀਵ ਰੂਪੀ ਹਰਨ ਕਮਜ਼ੋਰ ਹੈ ਅਤੇ ਸੰਸਾਰ ਰੂਪੀ ਤਾਲ, ਵਿਸ਼ਿਆਂ ਰੂਪੀ ਪਦਾਰਥਾਂ ਦੇ ਪਾਣੀ ਨਾਲ ਹਰਿਆਵਲਾ ਲਹਿ ਲਹਿ ਕਰ ਰਿਹਾ ਹੈ। ਇਸ ਹਰਨ ਰੂਪੀ ਇੱਕਲੇ ਜੀਵ ਨੂੰ ਫੜਨ ਵਾਲੇ ਲੱਖਾਂ ਹੀ (ਸ਼ਿਕਾਰੀ) ਵਿਕਾਰ ਹਨ, ਫਿਰ ਇਹ ਵਿਚਾਰਾ ਜੀਵ ਕਾਲ ਤੋਂ ਕਿਵੇਂ ਬਚ ਸਕਦਾ ਹੈ? ॥੫੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यह जीव-रूपी हिरण कमजोर है और विषय-विकारों के जल से संसार-रूपी तालाब हरा-भरा हो रहा है। इस अकेले जीव को शिकार बनाने वाले लाखों शिकारी (विकार) घात लगाए बैठे हैं, ऐसे में यह जीव काल से कब तक बच सकता है?॥ ५३॥',
      en: 'Satguru Kabir Saheb proclaims: The soul is a fragile deer, and the lake of Maya is lush with sensory temptations. With millions of hunters lying in wait, how can this single soul escape Death? ||53||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਭੋਗਾਂ ਅਤੇ ਵਿਸ਼ਿਆਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਮਨ ਕਮਜ਼ੋਰ ਹੋ ਜਾਂਦਾ ਹੈ। ਬਿਨਾਂ ਸਤਿਗੁਰੂ ਦੀ ਸੁਰੱਖਿਆ ਦੇ ਇਸ ਤੋਂ ਬਚਣਾ ਅਸੰਭਵ ਹੈ।',
      hi: 'सांसारिक भोगों के जाल में फंसा मन कमजोर हो जाता है। बिना सतगुरु की कृपा के इससे बचना असंभव है।',
      en: 'Ensnared in sensory indulgences, the mind grows frail. Without the Master\'s shield, escape is impossible.',
    },
    acharana: {
      pb: 'ਇੰਦ੍ਰੀਆਂ ਨੂੰ ਕਾਬੂ ਵਿੱਚ ਰੱਖੋ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਦਾ ਕਵਚ ਪਹਿਨੋ।',
      hi: 'इंद्रियों को वश में रखें और नाम सिमरन का कवच धारण करें।',
      en: 'Keep your senses restrained and wear the armor of divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਸਤਿਗੁਰੂ ਦੇ ਸੁਰੱਖਿਅਤ ਹੱਥਾਂ ਵਿੱਚ ਸੌਂਪ ਦਿਓ।',
      hi: 'स्वयं को सतगुरु के सुरक्षित चरणों में समर्पित कर दें।',
      en: 'Surrender yourself into the secure hands of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 54 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-54',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੪: ਗੰਗਾ ਤੀਰ ਜੁ ਘਰੁ ਕਰਹਿ (ਭਗਤੀ ਬਿਨੁ ਮੁਕਤਿ ਨਾਹੀਂ)',
      hi: 'सलोक ५४: गंगा तीर जु घरु करहि (भक्ति बिनु मुकति नाही)',
      en: 'Salok 54: Living on Ganga\'s Banks Without Devotion Brings No Liberation',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗੰਗਾ ਤੀਰ ਜੁ ਘਰੁ ਕਰਹਿ ਪੀਵਹਿ ਨਿਰਮਲ ਨੀਰੁ ॥',
      'ਬਿਨੁ ਹਰਿ ਭਗਤਿ ਨ ਮੁਕਤਿ ਹੋਇ ਇਉ ਕਹਿ ਰਮੇ ਕਬੀਰ ॥੫੪॥',
    ],
    moolDevanagari: [
      'कबीर गंगा तीर जु घरु करहि पीवहि निरमल नीरु ॥',
      'बिनु हरि भगति न मुकति होइ इउ कहि रमे कबीर ॥५४॥',
    ],
    moolRoman: [
      'Kabīr gangā tīr ju ghar karahi pīvehi nirmal nīr.',
      'Bin har bhagat na mukat hoi iu kahi rame kabīr. ||54||',
    ],
    shabdarth: [
      {
        word: 'ਗੰਗਾ ਤੀਰ / गंगा तीर',
        meaning: {
          pb: 'ਗੰਗਾ ਨਦੀ ਦਾ ਕਿਨਾਰਾ (ਤੀਰਥ ਅਸਥਾਨ)',
          hi: 'गंगा नदी का तट (तीर्थ स्थल)',
          en: 'Banks of the holy Ganges river',
        },
      },
      {
        word: 'ਰਮੇ ਕਬੀਰ / रमे कबीर',
        meaning: {
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਜਪਦੇ ਹਨ',
          hi: 'कबीर प्रभु का नाम स्मरण करते हैं',
          en: 'Kabir chants the Name of the Lord',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜੇ ਤੂੰ ਗੰਗਾ ਦੇ ਕਿਨਾਰੇ ਆਪਣਾ ਘਰ (ਨਿਵਾਸ) ਬਣਾ ਲਵੇਂ ਅਤੇ ਗੰਗਾ ਦਾ ਪਵਿੱਤਰ ਜਲ ਸਦਾ ਪੀਂਦਾ ਰਹੇਂ, ਤਾਂ ਵੀ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਤੋਂ ਬਿਨਾਂ ਮੁਕਤੀ ਨਹੀਂ ਹੋ ਸਕਦੀ। ਇਸ ਤਰ੍ਹਾਂ ਨਿਸ਼ਚਾ ਕਰਕੇ ਕਬੀਰ ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਜਪਦਾ ਹੈ॥ ੫੪॥',
      hi: 'हे कबीर! यदि तू गंगा के तट पर घर बना ले और सदा उसका पवित्र जल ही पिए, फिर भी भगवान की भक्ति के बिना मुक्ति नहीं मिल सकती। ऐसा दृढ़ निश्चय कर कबीर प्रभु का स्मरण करता है॥ ५४॥',
      en: 'O Kabir, even if you build your home on the banks of the Ganges and drink its pure waters forever, liberation is impossible without devotion to the Lord. Thus affirming, Kabir chants the Divine Name. ||54||',
    },
    chintan: {
      pb: 'ਬਾਹਰਲੇ ਤੀਰਥ ਇਸ਼ਨਾਨ ਜਾਂ ਜਲ ਪੀਣ ਨਾਲ ਮਨ ਦੇ ਪਾਪ ਨਹੀਂ ਧੁਲਦੇ। ਮੁਕਤੀ ਕੇਵਲ ਅੰਤਰ ਆਤਮਾ ਦੀ ਪ੍ਰਭੂ-ਭਗਤੀ ਨਾਲ ਮਿਲਦੀ ਹੈ।',
      hi: 'बाहरी तीर्थों में स्नान से मन के विकार नहीं धुलते। मुक्ति केवल अंतःकरण की सच्ची प्रभु-भक्ति से मिलती है।',
      en: 'External pilgrimages and holy waters do not cleanse inner impurities. True liberation springs solely from devotion to the Lord.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਕਰਮ-ਕਾਂਡਾਂ ਨੂੰ ਛੱਡ ਕੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'बाहरी कर्म-कांडों से ऊपर उठकर अंतर्मुखी होकर नाम सिमरन करें।',
      en: 'Transcending outer rituals, turn inward and practice divine remembrance.',
    },
    samarpan: {
      pb: 'ਤੀਰਥਾਂ ਦੇ ਭਰਮ ਨੂੰ ਤਿਆਗ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਨੂੰ ਆਪਣਾ ਤੀਰਥ ਬਣਾਓ।',
      hi: 'तीर्थों के भ्रम को त्यागकर सतगुरु के चरणों को ही अपना तीर्थ मानें।',
      en: 'Forsaking illusions of holy spots, make the Lotus Feet of the Master your true shrine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 55 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-55',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੫: ਮਨੁ ਨਿਰਮਲੁ ਭਇਆ (ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਮਿਲਾਪ)',
      hi: 'सलोक ५५: मनु निरमलु भइआ (प्रभु प्रेम मिलाप)',
      en: 'Salok 55: The Mind Becomes Pure Like Ganga Water',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਨੁ ਨਿਰਮਲੁ ਭਇਆ ਜੈਸਾ ਗੰਗਾ ਨੀਰੁ ॥',
      'ਪਾਛੈ ਲਾਗੋ ਹਰਿ ਫਿਰੈ ਕਹਤ ਕਬੀਰ ਕਬੀਰ ॥੫੫॥',
    ],
    moolDevanagari: [
      'कबीर मनु निरमलु भइआ जैसा गंगा नीरु ॥',
      'पाछै लागो हरि फिरै कहत कबीर कबीर ॥५५॥',
    ],
    moolRoman: [
      'Kabīr man nirmal bhaia jaisā gangā nīr.',
      'Pāchhai lāgo har phirai kahat kabīr kabīr. ||55||',
    ],
    shabdarth: [
      {
        word: 'ਨਿਰਮਲੁ / निरमलु',
        meaning: {
          pb: 'ਪਵਿੱਤਰ, ਮੈਲ-ਰਹਿਤ',
          hi: 'पवित्र, शुद्ध',
          en: 'Pure, immaculate',
        },
      },
      {
        word: 'ਪਾਛੈ ਲਾਗੋ / पाछै लागो',
        meaning: {
          pb: 'ਪਿੱਛੇ ਲੱਗਾ ਹੋਇਆ, ਮਿਹਰਵਾਨ ਹੋਇਆ',
          hi: 'पीछे लगा हुआ, कृपावान हुआ',
          en: 'Following closely in divine love / grace',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਦੋਂ ਭਗਤੀ ਦੁਆਰਾ ਮੇਰਾ ਮਨ ਗੰਗਾ ਦੇ ਸਾਫ਼ ਪਾਣੀ ਵਾਂਗ ਬਿਲਕੁਲ ਪਵਿੱਤਰ ਹੋ ਗਿਆ, ਤਾਂ ਪ੍ਰਮਾਤਮਾ ਮੇਰੇ ਪਿੱਛੇ-ਪਿੱਛੇ ਇਹ ਕਹਿੰਦਾ ਫਿਰਦਾ ਹੈ ਕਿ \'ਕਬੀਰ! ਕਬੀਰ!\' (ਭਾਵ ਪ੍ਰਭੂ ਆਪਣੇ ਭਗਤ ਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹੈ) ॥੫੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जब भक्ति के प्रभाव से मेरा मन गंगा के जल की भांति पूरी तरह पवित्र हो गया, तब स्वयं परमात्मा मेरे पीछे-पीछे \'कबीर! कबीर!\' पुकारते हुए प्रेमवश फिरते हैं॥ ५५॥',
      en: 'Satguru Kabir Saheb proclaims: When my mind became pure and immaculate like the waters of the Ganges through devotion, the Lord Himself follows behind me, calling out, "Kabir! Kabir!" (in loving grace). ||55||',
    },
    chintan: {
      pb: 'ਜਦੋਂ ਹਿਰਦਾ ਵਿਕਾਰਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਪਰਮਾਤਮਾ ਉਸ ਭਗਤ ਦਾ ਪ੍ਰੇਮੀ ਬਣ ਜਾਂਦਾ ਹੈ।',
      hi: 'जब हृदय विकारों से मुक्त हो जाता है, तब भगवान स्वयं ऐसे प्रेमी भक्त के अनुगामी बन जाते हैं।',
      en: 'When the heart is cleansed of impurities, the Supreme Lord Himself seeks out and honors His devotee.',
    },
    acharana: {
      pb: 'ਮਨ ਦੀ ਮੈਲ (ਹੰਕਾਰ ਤੇ ਵਿਕਾਰ) ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਧੋ ਕੇ ਪਵਿੱਤਰ ਕਰੋ।',
      hi: 'मन के विकारों व अहंकार को नाम स्मरण से धोकर निर्मल बनाएं।',
      en: 'Wash away mental impurities with divine remembrance.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸਮਰਪਣ ਰਾਹੀਂ ਆਪਣੇ ਹਿਰਦੇ ਨੂੰ ਪ੍ਰਭੂ ਦਾ ਨਿਵਾਸ ਬਣਾਓ।',
      hi: 'पूर्ण समर्पण द्वारा अपने हृदय को परमात्मा का निवास बनाएं।',
      en: 'Make your heart a divine sanctuary through total surrender.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 56 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-56',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੬: ਹਰਦੀ ਪੀਅਰੀ ਚੂੰਨਾਂ ਊਜਲ (ਜਾਤ-ਪਾਤ ਦਾ ਅਭਾਵ)',
      hi: 'सलोक ५६: हरदी पीअरी चूंना ऊजल (जाति-पाति का अभाव)',
      en: 'Salok 56: Turmeric is Yellow, Lime is White; Love Blends All',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਦੀ ਪੀਅਰੀ ਚੂੰਨਾਂ ਊਜਲ ਭਾਇ ॥',
      'ਰਾਮ ਸਨੇਹੀ ਤਉ ਮਿਲੈ ਦੋਨਉ ਬਰਨ ਗਵਾਇ ॥੫੬॥',
    ],
    moolDevanagari: [
      'कबीर हरदी पीअरी चूंना ऊजल भाइ ॥',
      'राम सनेही तउ मिलै दोनउ बरन गवाइ ॥५६॥',
    ],
    moolRoman: [
      'Kabīr hardī pīarī chūnā ūjal bhāi.',
      'Rām sanehī tau milai donau baran gavāi. ||56||',
    ],
    shabdarth: [
      {
        word: 'ਹਰਦੀ / हरदी',
        meaning: {
          pb: 'ਹਲਦੀ (ਪੀਲੇ ਰੰਗ ਦੀ)',
          hi: 'हल्दी (पीले रंग की)',
          en: 'Turmeric (yellow)',
        },
      },
      {
        word: 'ਚੂੰਨਾਂ / चूंना',
        meaning: {
          pb: 'ਚੂਨਾ (ਚਿੱਟੇ ਰੰਗ ਦਾ)',
          hi: 'चूना (सफेद रंग का)',
          en: 'Lime (white)',
        },
      },
      {
        word: 'ਬਰਨ ਗਵਾਇ / बरन गवाइ',
        meaning: {
          pb: 'ਆਪਣਾ ਅੱਡੋ-ਅੱਡ ਰੰਗ (ਜਾਤ-ਪਾਤ ਦਾ ਭੇਦ) ਛੱਡ ਕੇ',
          hi: 'अपना भिन्न रंग (जाति-पाति का भेद) त्याग कर',
          en: 'Forsaking separate colors (caste / social distinctions)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹਲਦੀ ਪੀਲੇ ਰੰਗ ਦੀ ਅਤੇ ਚੂਨਾ ਚਿੱਟੇ ਰੰਗ ਦਾ ਹੁੰਦਾ ਹੈ। ਪਰਮਾਤਮਾ ਦਾ ਪ੍ਰੇਮੀ ਭਗਤ ਤਦ ਹੀ ਬਣ ਸਕਦਾ ਹੈ ਜੇ ਉਹ ਉੱਚੀ ਨੀਵੀਂ ਜ਼ਾਤ-ਪਾਤ ਦੇ ਦੋਵੇਂ ਵਿਤਕਰੇ ਛੱਡ ਦੇਵੇ। ਜਿਸ ਤਰ੍ਹਾਂ ਹਲਦੀ ਅਤੇ ਚੂਨਾ ਮਿਲ ਕੇ ਆਪਣਾ ਪੀਲਾ ਤੇ ਚਿੱਟਾ ਰੰਗ ਤਿਆਗ ਕੇ ਲਾਲ ਰੰਗ ਹੋ ਜਾਂਦੇ ਹਨ, ਇਵੇਂ ਹੀ ਭਗਤ ਸਭ ਭੇਦ ਮਿਟਾ ਦਿੰਦਾ ਹੈ॥ ੫੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- हल्दी पीले रंग की और चूना सफेद रंग का होता है। परमेश्वर का प्रेमी तभी मिलता है जब वह ऊंच-नीच और जाति-पाति के दोनों भेद त्याग दे। जिस प्रकार हल्दी और चूना मिलने पर अपना पीला व सफेद रंग छोड़कर एक नया लाल रंग बना लेते हैं, वैसे ही सच्चा भक्त सभी भेदभाव मिटा देता है॥ ५६॥',
      en: 'Satguru Kabir Saheb proclaims: Turmeric is yellow and lime is white. The devotee meets the Beloved Lord only by discarding all distinctions of high and low caste. Just as turmeric and lime blend together, losing their separate yellow and white colors to form a brilliant red, true devotees dissolve all divisions. ||56||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਜਾਤ, ਪਾਤ, ਰੰਗ ਅਤੇ ਨਸਲ ਦਾ ਕੋਈ ਭੇਦ ਨਹੀਂ ਰਹਿੰਦਾ। ਸਾਰੇ ਪ੍ਰਭੂ ਦੀ ਸੰਤਾਨ ਹਨ।',
      hi: 'प्रभु के प्रेम में जाति, वर्ण और कुल का कोई भेदभाव नहीं रहता। सभी एक ही परमात्मा की संतान हैं।',
      en: 'In divine love, caste, creed, and color vanish. All souls are children of the One Lord.',
    },
    acharana: {
      pb: 'ਸਮਾਜਿਕ ਅਤੇ ਜਾਤੀਗਤ ਵਿਤਕਰਿਆਂ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸਭ ਨਾਲ ਸਮਤਾ ਦਾ ਵਰਤਾਓ ਕਰੋ।',
      hi: 'सामाजिक व जातिगत भेदभाव से ऊपर उठकर सभी के साथ समता का व्यवहार करें।',
      en: 'Rise above social and caste discriminations, treating all with equal grace.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਅਹੰਮਤਾ ਅਤੇ ਜਾਤੀ ਅਭਿਮਾਨ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपने अहंकार व जातिगत अभिमान को प्रभु के प्रेम में पूर्णतः समर्पित कर दें।',
      en: 'Surrender all ego and pride of birth into the fire of divine love.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 57 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-57',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੭: ਹਰਦੀ ਪੀਰਤਨੁ ਹਰੈ (ਪ੍ਰੇਮ ਦੀ ਅਨੋਖੀ ਰੀਤ)',
      hi: 'सलोक ५७: हरदी पीरतनु हरै (प्रेम की अनोखी रीत)',
      en: 'Salok 57: Blessed is the Love That Erases All Caste and Class',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਦੀ ਪੀਰਤਨੁ ਹਰੈ ਚੂਨ ਚਿਹਨੁ ਨ ਰਹਾਇ ॥',
      'ਬਲਿਹਾਰੀ ਇਹ ਪ੍ਰੀਤਿ ਕਉ ਜਿਹ ਜਾਤਿ ਬਰਨੁ ਕੁਲੁ ਜਾਇ ॥੫੭॥',
    ],
    moolDevanagari: [
      'कबीर हरदी पीरतनु हरै चून चिह्ननु न रहाइ ॥',
      'बलिहारी इह प्रीति कउ जिह जाति बरनु कुलु जाइ ॥५७॥',
    ],
    moolRoman: [
      'Kabīr hardī pīrtan harai chūn chihanu na rahāi.',
      'Balihārī ih prīt kau jih jāt baran kul jāi. ||57||',
    ],
    shabdarth: [
      {
        word: 'ਪੀਰਤਨੁ ਹਰੈ / पीरतनु हरै',
        meaning: {
          pb: 'ਪੀਲਾਪਣ ਅਤੇ ਸਰੀਰਕ ਰੰਗ ਨੂੰ ਮਿਟਾ ਦਿੰਦੀ ਹੈ',
          hi: 'पीलापन व मूल रंग को मिटा देती है',
          en: 'Erases the original yellow hue',
        },
      },
      {
        word: 'ਚਿਹਨੁ / चिह्ननु',
        meaning: {
          pb: 'ਚਿੰਨ੍ਹ, ਨਿਸ਼ਾਨ',
          hi: 'चिह्न, निशान',
          en: 'Trace / sign',
        },
      },
      {
        word: 'ਜਾਤਿ ਬਰਨੁ ਕੁਲੁ / जाति बरनु कुलु',
        meaning: {
          pb: 'ਜਾਤੀ, ਵਰਨ ਅਤੇ ਕੁਲ ਦਾ ਹੰਕਾਰ',
          hi: 'जाति, वर्ण और कुल का अभिमान',
          en: 'Pride of caste, color, and lineage',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜਿਵੇਂ ਹਲਦੀ ਆਪਣਾ ਪੀਲਾ ਰੰਗ ਅਤੇ ਚੂਨਾ ਆਪਣਾ ਚਿੱਟਾ ਰੰਗ ਛੱਡ ਦਿੰਦੇ ਹਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦਾ ਵੱਖਰਾ ਚਿੰਨ੍ਹ ਨਹੀਂ ਰਹਿੰਦਾ, ਮੈਂ ਅਜਿਹੀ ਪ੍ਰੀਤ ਤੋਂ ਕੁਰਬਾਨ ਜਾਂਦਾ ਹਾਂ ਜਿਸ ਨਾਲ ਉੱਚੀ-ਨੀਵੀਂ ਜਾਤ, ਵਰਨ ਅਤੇ ਕੁਲ ਦਾ ਹੰਕਾਰ ਸਦਾ ਲਈ ਮਿਟ ਜਾਂਦਾ ਹੈ॥ ੫੭॥',
      hi: 'हे कबीर! जैसे हल्दी अपना पीलापन और चूना अपनी सफेदी त्याग देता है और उनका पृथक चिह्न शेष नहीं रहता, मैं ऐसी दिव्य प्रीति से बलिहारी जाता हूँ जिससे जाति, वर्ण और कुल का सारा अभिमान सदा के लिए समाप्त हो जाता है॥ ५७॥',
      en: 'O Kabir, just as turmeric discards its yellow and lime discards its white, leaving no separate trace, I am a sacrifice to that divine love which utterly eradicates all pride of caste, color, and lineage. ||57||',
    },
    chintan: {
      pb: 'ਸੱਚਾ ਪ੍ਰੇਮ ਸਾਰੇ ਸਮਾਜਿਕ ਪਾੜੇ ਅਤੇ ਭੇਦਭਾਵ ਮਿਟਾ ਕੇ ਸਭ ਨੂੰ ਇੱਕ ਆਤਮ ਰੰਗ ਵਿੱਚ ਰੰਗ ਦਿੰਦਾ ਹੈ।',
      hi: 'सच्चा प्रेम सभी सामाजिक दूरियों व भेदभावों को मिटाकर सबको एक आत्म-रंग में रंग देता है।',
      en: 'True divine love dissolves all social divides, bathing everyone in the single hue of the soul.',
    },
    acharana: {
      pb: 'ਕੁਲ ਅਤੇ ਜਾਤ ਦੇ ਅਭਿਮਾਨ ਨੂੰ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'कुल और जाति के अभिमान को त्यागकर प्रभु के प्रेम में लीन हों।',
      en: 'Abandoning pride of lineage, immerse yourself in divine love.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸਮਰਪਣ ਦੁਆਰਾ ਸਾਰੇ ਮਨੁੱਖਾਂ ਨੂੰ ਆਪਣਾ ਆਪਾ ਜਾਣ ਕੇ ਪਿਆਰ ਕਰੋ।',
      hi: 'पूर्ण समर्पण द्वारा सभी मनुष्यों को अपना स्वरूप मानकर प्रेम करें।',
      en: 'Embrace all humanity as your very own through total surrender.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 58 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-58',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੮: ਮੁਕਤਿ ਦੁਆਰਾ ਸੰਕੁਰਾ (ਹੰਕਾਰ ਤੇ ਮੁਕਤੀ ਮਾਰਗ)',
      hi: 'सलोक ५८: मुकति दुआरा संकुरा (अहंकार व मुक्ति मार्ग)',
      en: 'Salok 58: The Gate of Liberation is Needle-Thin; The Ego is an Elephant',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੁਕਤਿ ਦੁਆਰਾ ਸੰਕੁਰਾ ਰਾਈ ਦਸਏਂ ਭਾਇ ॥',
      'ਮਨੁ ਤਉ ਮੈਗਲੁ ਹੋਇ ਰਹਿਓ ਨਿਕਸੋ ਕਿਉ ਕੈ ਜਾਇ ॥੫੮॥',
    ],
    moolDevanagari: [
      'कबीर मुकति दुआरा संकुरा राई दसेएं भाइ ॥',
      'मनु तउ मैगलु होइ रहिओ निकसो किउ कै जाइ ॥५८॥',
    ],
    moolRoman: [
      'Kabīr mukat duārā sankurā rāī dasen bhāi.',
      'Man tau maigal hoi rahio nikso kiu kai jāi. ||58||',
    ],
    shabdarth: [
      {
        word: 'ਸੰਕੁਰਾ / संकुरा',
        meaning: {
          pb: 'ਸੰਘਣਾ, ਬਹੁਤ ਭੀੜਾ',
          hi: 'संकुचित, अति संकरा व तंग',
          en: 'Extremely narrow / tight',
        },
      },
      {
        word: 'ਰਾਈ ਦਸਏਂ ਭਾਇ / राई दसेएं भाइ',
        meaning: {
          pb: 'ਰਾਈ ਦੇ ਦਾਣੇ ਦਾ ਦਸਵਾਂ ਹਿੱਸਾ',
          hi: 'राई के दाने का दसवां हिस्सा',
          en: 'One-tenth of a mustard seed',
        },
      },
      {
        word: 'ਮੈਗਲੁ / मैगलु',
        meaning: {
          pb: 'ਮਸਤ ਹਾਥੀ (ਵੱਡਾ ਹੰਕਾਰ)',
          hi: 'मस्त हाथी (अहमकार से बड़ा)',
          en: 'An intoxicated elephant (swollen with ego)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੁਕਤੀ ਦਾ ਦੁਆਰਾ ਬਹੁਤ ਭੀੜਾ ਹੈ, ਰਾਈ ਦੇ ਦਾਣੇ ਦੇ ਦਸਵੇਂ ਹਿੱਸੇ ਜਿੰਨਾ ਬਾਰੀਕ ਹੈ, ਪਰ ਮਨ ਹੰਕਾਰ ਕਰਕੇ ਮਸਤ ਹਾਥੀ ਵਾਂਗ ਵਿਸ਼ਾਲ ਹੋ ਰਿਹਾ ਹੈ। ਫਿਰ ਇਹ ਹਾਥੀ ਵਰਗਾ ਮਨ ਐਸੇ ਭੀੜੇ ਰਸਤੇ ਵਿੱਚੋਂ ਕਿਵੇਂ ਨਿਕਲ ਸਕਦਾ ਹੈ? ॥੫੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मुक्ति का द्वार अत्यंत संकरा है, राई के दाने के दसवें हिस्से जितना बारीक है, किंतु यह मन अहंकार के कारण मस्त हाथी के समान विशाल हो रहा है। भला यह हाथी-सा मन इतने तंग मार्ग से कैसे निकल सकता है?॥ ५८॥',
      en: 'Satguru Kabir Saheb proclaims: The gateway of liberation is extremely narrow, like one-tenth of a mustard seed, but the mind is swollen with ego like an intoxicated elephant. How can it ever pass through such a narrow opening? ||58||',
    },
    chintan: {
      pb: 'ਹੰਕਾਰ ਨਾਲ ਭਰਿਆ ਮਨ ਮੁਕਤੀ ਦੇ ਦੁਆਰ ਤੋਂ ਨਹੀਂ ਲੰਘ ਸਕਦਾ। ਜਦ ਤੱਕ ਮਨ ਨਿਮ੍ਰ ਅਤੇ ਬਾਰੀਕ ਨਹੀਂ ਹੁੰਦਾ, ਮੁਕਤੀ ਅਸੰਭਵ ਹੈ।',
      hi: 'अहंकार से भरा मन मुक्ति के द्वार से नहीं निकल सकता। जब तक मन विनम्र और सूक्ष्मतम नहीं होता, तब तक मोक्ष असंभव है।',
      en: 'A mind bloated with ego cannot pass through the gate of liberation. Until ego melts into humility, salvation remains out of reach.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਆਪਣੇ ਅੰਦਰੋਂ ਹੰਕਾਰ ਦਾ ਮਹਾਵਤ ਬਣ ਕੇ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰੋ।',
      hi: 'सतगुरु की कृपा से अहंकार का त्याग कर मन रूपी हाथी को वश में करें।',
      en: 'Through the Master\'s grace, tame the elephant of the mind by discarding ego.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਨਿਮ੍ਰ ਬਣਾ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'स्वयं को पूर्णतः विनम्र बनाकर सतगुरु के चरणों में अर्पित हो जाएं।',
      en: 'Melt into absolute humility at the Lotus Feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 59 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-59',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੫੯: ਐਸਾ ਸਤਿਗੁਰੁ ਜੇ ਮਿਲੈ (ਸਤਿਗੁਰੂ ਕਿਰਪਾ ਤੇ ਮੁਕਤੀ)',
      hi: 'सलोक ५९: ऐसा सतगुरु जे मिलै (सतगुरु कृपा व मुक्ति)',
      en: 'Salok 59: When the True Master Bestows Grace, the Gate Opens Wide',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਸਤਿਗੁਰੁ ਜੇ ਮਿਲੈ ਤੁਠਾ ਕਰੇ ਪਸਾਉ ॥',
      'ਮੁਕਤਿ ਦੁਆਰਾ ਮੋਕਲਾ ਸਹਜੇ ਆਵਉ ਜਾਉ ॥੫੯॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा सतगुरु जे मिलै तुठा करे पसाउ ॥',
      'मुकति दुआरा मोकला सहजे आवउ जाउ ॥५९॥',
    ],
    moolRoman: [
      'Kabīr aisā satgur je milai tuthā kare pasāu.',
      'Mukat duārā mokalā sahje āvau jāu. ||59||',
    ],
    shabdarth: [
      {
        word: 'तुठा / तुठा',
        meaning: {
          pb: 'ਪ੍ਰਸੰਨ ਹੋ ਕੇ, ਮਿਹਰਬਾਨ ਹੋ ਕੇ',
          hi: 'प्रसन्न होकर, कृपा करके',
          en: 'Being pleased / gracious',
        },
      },
      {
        word: 'पसाउ / पसाउ',
        meaning: {
          pb: 'ਪ੍ਰਸਾਦਿ, ਕਿਰਪਾ, ਬਖਸ਼ਿਸ਼',
          hi: 'कृपा, बख्शिश',
          en: 'Divine blessing / grace',
        },
      },
      {
        word: 'मोकला / मोकला',
        meaning: {
          pb: 'ਖੁੱל੍ਹਾ-ਡੁੱਲ੍ਹਾ, ਵਿਸ਼ਾਲ',
          hi: 'खुला हुआ, चौड़ा',
          en: 'Wide, spacious, or unhindered',
        },
      },
      {
        word: 'सह्जे / सहजे',
        meaning: {
          pb: 'ਸੌਖੇ ਹੀ, ਅਡੋਲਤਾ ਵਿੱਚ',
          hi: 'सहजता से, आसानी से',
          en: 'Effortlessly in divine poise',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇ ਕੋਈ ਅਜਿਹਾ ਪੂਰਨ ਸਤਿਗੁਰੂ ਮਿਲ ਜਾਏ ਜੋ ਪ੍ਰਸੰਨ ਹੋ ਕੇ ਆਪਣੀ ਬਖਸ਼ਿਸ਼ ਕਰ ਦੇਵੇ, ਤਾਂ (ਸੋਝੀ ਹੋਣ ਨਾਲ) ਮੁਕਤੀ ਦਾ ਭੀੜਾ ਦੁਆਰਾ ਵੀ ਖੁੱਲ੍ਹਾ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜੀਵ ਸਹਜੇ ਹੀ ਉਸ ਵਿੱਚੋਂ ਆਉਣਾ-ਜਾਣਾ (ਮੁਕਤੀ ਪ੍ਰਾਪਤ ਕਰਨਾ) ਕਰ ਲੈਂਦਾ ਹੈ॥ ੫੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यदि कोई ऐसा पूर्ण सतगुरु मिल जाए जो प्रसन्न होकर अपनी कृपा की बख्शिश कर दे, तो मुक्ति का संकरा द्वार भी खुला हो जाता है और जीव सहज ही उसमें से आ-जा (मोक्ष प्राप्त कर) सकता है॥ ५९॥',
      en: 'Satguru Kabir Saheb proclaims: If one meets such a True Master who is graciously pleased to bestow His blessing, the narrow gate of liberation opens wide, and the soul effortlessly passes through in divine poise. ||59||',
    },
    chintan: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਮਨ ਦਾ ਹੰਕਾਰ ਮਿਟ ਜਾਂਦਾ ਹੈ ਅਤੇ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਬਹੁਤ ਸੌਖਾ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'पूर्ण सतगुरु की कृपा से मन का अहंकार मिट जाता है और मोक्ष का मार्ग अत्यंत सहज हो जाता है।',
      en: 'Through the grace of the True Master, ego dissolves and the path of liberation becomes effortlessly accessible.',
    },
    acharana: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਗ੍ਰਹਿਣ ਕਰਕੇ ਅਡੋਲਤਾ ਅਤੇ ਨਿਮ੍ਰਤਾ ਦਾ ਜੀਵਨ ਜੀਓ।',
      hi: 'पूर्ण सतगुरु की शरण ग्रहण कर सहजता और विनम्रता का जीवन जिएं।',
      en: 'Embracing the Master\'s refuge, lead a life of poise and humility.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨੂੰ ਹੀ ਆਪਣੀ ਮੁਕਤੀ ਦਾ ਆਧਾਰ ਸਮਝੋ।',
      hi: 'सतगुरु की कृपा को ही अपनी मुक्ति का एकमात्र आधार मानें।',
      en: 'Regard the Master\'s grace as the sole anchor of your liberation.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 60 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-60',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੦: ਨਾ ਮੋਹਿ ਛਾਨਿ ਨ ਛਾਪਰੀ (ਅਪਣਤ ਤੇ ਅਹੰਕਾਰ ਤਿਆਗ)',
      hi: 'सलोक ६०: ना मोहि छानिन छापरी (अपना व अहंकार त्याग)',
      en: 'Salok 60: I Have No Hut, No Home, No Name or Caste',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਾ ਮੋੁਹਿ ਛਾਨਿ ਨ ਛਾਪਰੀ ਨਾ ਮੋੁਹਿ ਘਰੁ ਨਹੀ ਗਾਉ ॥',
      'ਮਤ ਹਰਿ ਪੂਛੈ ਕਉਨੁ ਹੈ ਮੇਰੇ ਜਾਤਿ ਨ ਨਾਉ ॥੬੦॥',
    ],
    moolDevanagari: [
      'कबीर ना मोहि छानिन छापरी ना मोहि घरु नही गाउ ॥',
      'मत हरि पूछै कउनु है मेरे जाति न नाउ॥६०॥',
    ],
    moolRoman: [
      'Kabīr nā mohi chhān ni chhāprī nā mohi ghar nahī gāu.',
      'Mat har pūchhai kaun hai mere jāt na nāu. ||60||',
    ],
    shabdarth: [
      {
        word: 'ਛਾਨਿ ਨ ਛਾਪਰੀ / छानि न छापरी',
        meaning: {
          pb: 'ਕੁੱਲੀ, ਛੱਪਰ, ਘਰ',
          hi: 'कुटिया, छप्पर, आवास',
          en: 'Hut or thatched shelter',
        },
      },
      {
        word: 'ਗਾਉ / गाउ',
        meaning: {
          pb: 'ਪਿੰਡ, ਸ਼ਹਿਰ, ਟਿਕਾਣਾ',
          hi: 'गांव, नगर, ठिकाना',
          en: 'Village / permanent worldly address',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਨਾ ਮੇਰੀ ਕੋਈ ਕੁੱਲੀ ਹੈ, ਨਾ ਛੱਪਰ ਹੈ, ਨਾ ਮੇਰਾ ਕੋਈ ਘਰ ਹੈ ਅਤੇ ਨਾ ਹੀ ਕੋਈ ਰਹਿਣ ਨੂੰ ਪਿੰਡ ਹੈ। ਮੈਂ ਤਾਂ ਆਪਣੇ ਆਪ ਨੂੰ ਇੰਨਾ ਮਿਟਾ ਚੁੱਕਾ ਹਾਂ ਕਿ ਜੇ ਕਿਤੇ ਪ੍ਰਮਾਤਮਾ ਪੁੱਛ ਲਵੇ ਕਿ \'ਤੂੰ ਕੌਣ ਹੈਂ?\' ਤਾਂ ਮੇਰੀ ਕੋਈ ਜ਼ਾਤ ਅਤੇ ਨਾਮ ਵੀ ਨਹੀਂ ਬਚਿਆ ਕਿ ਮੈਂ ਕੀ ਦੱਸਾਂ? ॥੬੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- न मेरी कोई कुटिया है, न छप्पर है, न मेरा कोई घर है और न ही रहने का कोई गांव है। मैं इस हद तक मिट चुका हूँ कि यदि कहीं भगवान पूछ लें कि \'तू कौन है?\' तो मेरे पास बताने के लिए अपनी कोई जाति और नाम भी शेष नहीं है॥ ६०॥',
      en: 'Satguru Kabir Saheb proclaims: I have no hut, no thatched roof, no home, and no village. I have so completely annihilated my ego that if the Lord asks, "Who are you?", I have neither caste nor name left to declare. ||60||',
    },
    chintan: {
      pb: 'ਜਦੋਂ ਤੱਕ ਮਨ ਵਿੱਚ \'ਮੈਂ\' ਅਤੇ \'ਮੇരാ\' ਦਾ ਹੰਕਾਰ ਹੈ, ਪ੍ਰਭੂ ਮਿਲਾਪ ਨਹੀਂ ਹੋ ਸਕਦਾ। ਅਹੰਕਾਰ ਦਾ ਅੰਤ ਹੀ ਮੁਕਤੀ ਹੈ।',
      hi: 'जब तक मन में \'मैं\' और \'मेरा\' का अहंकार है, प्रभु-मिलाप नहीं हो सकता। अहंकार का शमन ही मोक्ष है।',
      en: 'As long as "I" and "mine" linger in the mind, union with God is impossible. Total ego-loss is true salvation.',
    },
    acharana: {
      pb: 'ਅਪਣਤ, ਮੋਹ ਅਤੇ ਹੰਕਾਰ ਨੂੰ ਤਿਆਗ ਕੇ ਨਿਰਲੇਪ ਜੀਵਨ ਜੀਓ।',
      hi: 'ममता, मोह और अहंकार को त्यागकर निर्मल और निर्लेप जीवन जिएं।',
      en: 'Forsaking possessiveness, attachment, and ego, live an unattached life.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਰ ਪਛਾਣ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਵਿਸਾਰ ਦਿਓ।',
      hi: 'अपनी प्रत्येक पहचान को प्रभु के चरणों में विसर्जित कर दें।',
      en: 'Dissolve every worldly identity at the Lotus Feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 61 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-61',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੧: ਮੁਹਿ ਮਰਨੇ ਕਾ ਚਾਉ ਹੈ (ਪ੍ਰਭੂ ਦੁਆਰ ਮਰਨਾ)',
      hi: 'सलोक ६१: मुहि मरने का चाउ है (प्रभु द्वार मरना)',
      en: 'Salok 61: I Long to Die at the Lord\'s Doorstep',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੁਹਿ ਮਰਨੇ ਕਾ ਚਾਉ ਹੈ ਮਰਉ ਤ ਹਰਿ ਕੈ ਦੁਆਰ ॥',
      'ਮਤ ਹਰਿ ਪੂਛੈ ਕਉਨੁ ਹੈ ਪਰਾ ਹਮਾਰੈ ਬਾਰ ॥੬੧॥',
    ],
    moolDevanagari: [
      'कबीर मुहि मरने का चाउ है मरउ त हरि कै दुआर ॥',
      'मत हरि पूछै कउनु है परा हमारै बार ॥६१॥',
    ],
    moolRoman: [
      'Kabīr muhi marane kā chāu hai marau ta har kai duār.',
      'Mat har pūchhai kaun hai parā hamārai bār. ||61||',
    ],
    shabdarth: [
      {
        word: 'ਚਾਉ / चाउ',
        meaning: {
          pb: 'ਚਾਅ, ਤੀਬਰ ਇੱਛਾ',
          hi: 'चाव, तीव्र अभिलाषा',
          en: 'Deep longing / ardent desire',
        },
      },
      {
        word: 'ਪਰਾ ਹਮਾਰੈ ਬਾਰ / परा हमारै बार',
        meaning: {
          pb: 'ਸਾਡੇ ਬੂਹੇ ਉੱਤੇ ਡਾਹਿਆ (ਪਿਆ) ਹੈ',
          hi: 'हमारे द्वार पर पड़ा हुआ है',
          en: 'Lying prostrate at our doorway',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਨੂੰ ਤਾਂ (ਆਪਾ ਮਿਟਾ ਕੇ) ਮਰਨ ਦਾ ਚਾਅ ਹੈ, ਜੇ ਮਰਾਂ (ਅਹੰਕਾਰ ਤੋਂ ਮਰਾਂ) ਤਾਂ ਪ੍ਰਭੂ ਦੇ ਦੁਆਰ ਉੱਤੇ ਮਰਾਂ; ਕਿਤੇ ਪ੍ਰਭੂ ਇਹ ਨਾ ਪੁੱਛ ਲਵੇ ਕਿ \'ਇਹ ਕੌਣ ਹੈ ਜਿਹੜਾ ਸਾਡੇ ਬੂਹੇ ਉੱਤੇ (ਨਿਮ੍ਰ ਹੋ ਕੇ) ਪਿਆ ਹੈ?\' (ਭਾਵ ਪ੍ਰਭੂ ਆਪਣੇ ਦੁਆਰ ’ਤੇ ਡਿੱਗੇ ਪ੍ਰੇਮੀ ਨੂੰ ਅਪਣਾ ਲਵੇ)॥ ੬੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मुझे तो (अहम मिटाकर) मिटने का ही चाव है, यदि मरूं तो परमात्मा के द्वार पर ही मरूं; कहीं ऐसा न हो कि भगवान पूछ बैठें कि \'यह कौन है जो हमारे द्वार पर (दीन भाव से) पड़ा है?\' (अर्थात प्रभु अपने द्वार पर गिरे हुए प्रेमी को गले लगा लें)॥ ६१॥',
      en: 'Satguru Kabir Saheb proclaims: I have an ardent longing to die (to my ego); if I die, I wish to die at the Lord\'s doorstep. Lest the Lord should ask, "Who is this lying prostrate at our door?" (and embrace me in His boundless grace). ||61||',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਸਫਲਤਾ ਅਹੰਕਾਰ ਨੂੰ ਮਾਰ ਕੇ ਪ੍ਰਭੂ ਦੇ ਦਰ \'ਤੇ ਨਿਮ੍ਰ ਹੋ ਕੇ ਡਿੱਗਣਾ ਹੈ।',
      hi: 'जीवन की सबसे बड़ी सफलता अहंकार को समाप्त कर प्रभु के द्वार पर विनम्रता से समर्पित होना है।',
      en: 'The supreme triumph of life is to slay the ego and lie prostrate in utter humility at the Lord\'s doorstep.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਹੰਕਾਰ ਤੋਂ ਮਾਰ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਦਰ \'ਤੇ ਸੇਵਕ ਬਣ ਕੇ ਰਹੋ।',
      hi: 'अहंकार का त्याग कर सतगुरु के दरबार में समर्पित सेवक बनकर रहें।',
      en: 'Dying to ego, live as a devoted servant at the Master\'s threshold.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਜੀਵਨ ਅਤੇ ਮਰਨ ਨੂੰ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'प्रभु के प्रेम में अपने जीवन और मरण को पूर्णतः समर्पित कर दें।',
      en: 'Surrender both life and death entirely to divine love.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 62 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-62',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੨: ਨਾ ਹਮ ਕੀਆ ਨ ਕਰਹਿਗੇ (ਕਰਤਾਰੀ ਸੱਤਾ)',
      hi: 'सलोक ६२: ना हम कीआ न करहिगे (कर्तारी सत्ता)',
      en: 'Salok 62: I Have Done Nothing; All is the Lord\'s Will',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਾ ਹਮ ਕੀਆ ਨ ਕਰਹਿਗੇ ਨਾ ਕਰਿ ਸਕੈ ਸਰੀਰੁ ॥',
      'ਕਿਆ ਜਾਨਉ ਕਿਛੁ ਹਰਿ ਕੀਆ ਭਇਓ ਕਬੀਰੁ ਕਬੀਰੁ ॥੬੨॥',
    ],
    moolDevanagari: [
      'कबीर ना हम कीआ न करहिगे ना करि सकै सरीरु ॥',
      'किआ जानउ किछु हरि कीआ भइओ कबीरू कबीरू ॥६२॥',
    ],
    moolRoman: [
      'Kabīr nā ham kīā na karhige nā kar sakai sarīr.',
      'Kiā jānau kichh har kīā bhaio kabīr kabīr. ||62||',
    ],
    shabdarth: [
      {
        word: 'ਕੀਆ / कीआ',
        meaning: {
          pb: 'ਕੁਝ ਕੀਤਾ ਹੈ (ਕਰਤਾ ਹੋਣ ਦਾ ਅਭਿਮਾਨ)',
          hi: 'स्वयं कुछ किया है (अहंकार)',
          en: 'Done anything by oneself (ego)',
        },
      },
      {
        word: 'ਹਰਿ ਕੀਆ / हरि कीआ',
        meaning: {
          pb: 'ਸਭ ਕੁਝ ਪ੍ਰਭੂ ਨੇ ਹੀ ਕੀਤਾ ਹੈ',
          hi: 'सब कुछ प्रभु ने ही किया है',
          en: 'Everything is wrought by the Lord',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਨਾ ਮੈਂ ਪਹਿਲਾਂ ਕੁਝ ਕੀਤਾ ਹੈ, ਨਾ ਅੱਗੇ ਕੁਝ ਕਰ ਸਕਾਂਗਾ ਅਤੇ ਨਾ ਹੀ ਮੇਰਾ ਇਹ ਸਰੀਰ ਕੁਝ ਕਰਨ ਦੇ ਸਮਰੱਥ ਹੈ। ਮੈਂ ਕੀ ਜਾਣਾਂ, ਜੋ ਕੁਝ ਵੀ ਹੋਇਆ ਹੈ ਪ੍ਰਭੂ ਨੇ ਹੀ ਕੀਤਾ ਹੈ, ਜਿਸਦੀ ਬਖਸ਼ਿਸ਼ ਨਾਲ ਕਬੀਰ (ਸੰਸਾਰ ਵਿੱਚ ਪ੍ਰਭੂ ਦੀ ਮਹਿਮਾ ਕਰਕੇ) ਪ੍ਰਸਿੱਧ ਹੋ ਗਿਆ ਹੈ॥ ੬੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- न मैंने पहले कुछ किया है, न आगे कुछ कर सकूंगा और न ही मेरा यह शरीर कुछ कर सकता है। मैं क्या जानूं, जो कुछ भी हुआ है परमात्मा ने ही किया है, जिसकी कृपा से कबीर जग में प्रख्यात हो गया है॥ ६२॥',
      en: 'Satguru Kabir Saheb proclaims: I have done nothing in the past, nor can I do anything in the future, nor can this body achieve anything of itself. What do I know? Everything is done by the Lord, through whose grace Kabir is renowned. ||62||',
    },
    chintan: {
      pb: 'ਕਰਤਾ ਪੁਰਖ ਪ੍ਰਭੂ ਹੀ ਸਭ ਕੁਝ ਕਰਨ ਵਾਲਾ ਹੈ। \'ਮੈਂ ਕਰਦਾ ਹਾਂ\' ਦਾ ਭਰਮ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਬੰਧਨ ਹੈ।',
      hi: 'कर्ता पुरुष परमात्मा ही सब कुछ करने वाला है। \'मैं करता हूँ\' का भ्रम ही जीव का सबसे बड़ा बंधन है।',
      en: 'The Supreme Creator is the sole doer. The delusion of "I am the doer" is the greatest bondage.',
    },
    acharana: {
      pb: 'ਹਰ ਕੰਮ ਵਿੱਚ ਕਰਤਾਰ ਦੀ ਰਜ਼ਾ ਅਤੇ ਉਸਦੀ ਸ਼ਕਤੀ ਨੂੰ ਪ੍ਰਵਾਨ ਕਰੋ।',
      hi: 'प्रत्येक कार्य में कर्ता की रजा और उसकी शक्ति को स्वीकार करें।',
      en: 'Acknowledge the Divine Will behind every breath and deed.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਅਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਕੇ ਪ੍ਰਭੂ ਨੂੰ ਹੀ ਸਭ ਕੁਝ ਦਾ ਕਰਤਾ ਮੰਨੋ।',
      hi: 'अपने अहंकार को मिटाकर प्रभु को ही सर्वस्व का कर्ता मानें।',
      en: 'Surrender all doer-ship at the feet of the Supreme Doer.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 63 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-63',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੩: ਸੁਪਨੈਹੂ ਬਰੜਾਇ ਕੈ (ਗੁਰਸਿਖ ਪ੍ਰੇਮ)',
      hi: 'सलोक ६३: सुपनैहू बरड़ाइ कै (गुरसिख प्रेम)',
      en: 'Salok 63: Dust of Feet of One Who Subconsciously Chants Ram',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੁਪਨੈਹੂ ਬਰੜਾਇ ਕੈ ਜਿਹ ਮੁਖਿ ਨਿਕਸੈ ਰਾਮੁ ॥',
      'ਤਾ ਕੇ ਪਗ ਕੀ ਪਾਨਹੀ ਮੇਰੇ ਤਨ ਕੋ ਚਾਮੁ ॥੬੩॥',
    ],
    moolDevanagari: [
      'कबीर सुपनैहू बरड़ाइ कै जिह मुखि निकसै रामु ॥',
      'ता के पग की पानही मेरे तन को ਚਾਮੁ ॥६३॥',
    ],
    moolRoman: [
      'Kabīr supanaihu barṛāi kai jih mukhi niksai rām.',
      'Tā ke pag kī pānahī mere tan ko chām. ||63||',
    ],
    shabdarth: [
      {
        word: 'ਬਰੜਾਇ ਕੈ / बरड़ाइ कै',
        meaning: {
          pb: 'ਸੁਪਨੇ ਵਿੱਚ ਬੋਲਦਿਆਂ, ਅਭੜਵਾਹੇ',
          hi: 'स्वप्न में बोलते हुए, अचेत अवस्था में',
          en: 'Even subconsciously or in a dream',
        },
      },
      {
        word: 'ਪਾਨਹੀ / पानही',
        meaning: {
          pb: 'ਜੁੱਤੀ, ਚੱਪਲ',
          hi: 'जूती, चप्पल',
          en: 'Shoe / sandal',
        },
      },
      {
        word: 'ਚਾਮੁ / ਚਾਮੁ',
        meaning: {
          pb: 'ਚੰਮ, ਖੱਲ',
          hi: 'चर्म, चमड़ा',
          en: 'Skin / hide',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੋ ਮਨੁੱਖ ਸੁਪਨੇ ਵਿੱਚ ਵੀ ਅਭੜਵਾਹੇ ਆਪਣੇ ਮੂੰਹੋਂ ਪ੍ਰਭੂ ਦਾ ਰਾਮ ਨਾਮ ਉਚਾਰਦਾ ਹੈ, ਮੈਂ ਚਾਹੁੰਦਾ ਹਾਂ ਕਿ ਉਸਦੇ ਪੈਰ ਦੀ ਜੁੱਤੀ ਮੇਰੇ ਸਰੀਰ ਦੀ ਖੱਲ (ਚੰਮ) ਦੀ ਬਣੀ ਹੋਵੇ॥ ੬੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जो मनुष्य स्वप्न में भी अचेत अवस्था में अपने मुख से भगवान का नाम जपता है, मेरी अभिलाषा है कि उसके पैरों की जूती मेरे शरीर के चर्म की बनी हो॥ ६३॥',
      en: 'Satguru Kabir Saheb proclaims: One who chants the Name of the Lord even subconsciously in a dream—may the shoes on their feet be fashioned from the skin of my body. ||63||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਪ੍ਰੇਮੀਆਂ ਅਤੇ ਗੁਰਸਿੱਖਾਂ ਦੀ ਸੇਵਾ ਅਤੇ ਚਰਨ-ਧੂੜ ਪ੍ਰਾਪਤ ਕਰਨਾ ਸਭ ਤੋਂ ਵੱਡਾ ਭਾਗ ਹੈ।',
      hi: 'प्रभु प्रेमियों और गुरुसिखों की सेवा और उनकी चरण-धूलि प्राप्त करना सबसे बड़ा सौभाग्य है।',
      en: 'To serve God\'s devotees and revere the dust of their feet is the highest blessing.',
    },
    acharana: {
      pb: 'ਸੰਤ ਜਨਾਂ ਅਤੇ ਗੁਰਸਿੱਖਾਂ ਪ੍ਰਤੀ ਅਥਾਹ ਸਤਿਕਾਰ ਅਤੇ ਨਿਮ੍ਰਤਾ ਰੱਖੋ।',
      hi: 'संत जनों और गुरुसिखों के प्रति अगाध आदर और विनम्रता का भाव रखें।',
      en: 'Cherish profound respect and humility toward holy souls.',
    },
    samarpan: {
      pb: 'ਗੁਰਸਿੱਖਾਂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਆਪਣਾ ਆਪਾ ਕੁਰਬਾਨ ਕਰਨ ਲਈ ਤਿਆਰ ਰਹੋ।',
      hi: 'गुरुसिखों की सेवा में अपना सर्वस्व समर्पित करने के लिए तत्पर रहें।',
      en: 'Stand ready to offer your very self in the service of God\'s devotees.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 64 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-64',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੪: ਮਾਟੀ ਕੇ ਹਮ ਪੂਤਰੇ (ਜੀਵਨ ਦੀ ਅਸਥਿਰਤਾ)',
      hi: 'सलोक ६४: माटी के हम पूतरे (जीवन की अस्थिरता)',
      en: 'Salok 64: We Are Clay Puppets; Why Hoard Space in Vain?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਟੀ ਕੇ ਹਮ ਪੂਤਰੇ ਮਾਨਸੁ ਰਾਖਿਓੁ ਨਾਉ ॥',
      'ਚਾਰਿ ਦਿਵਸ ਕੇ ਪਾਹੁਨੇ ਬਡ ਬਡ ਰੂੰਧਹਿ ਠਾਉ ॥੬੪॥',
    ],
    moolDevanagari: [
      'कबीर माटी के हम पूतरे मानसु राखिओ नाउ ॥',
      'चारि दिवस के पाहुने बड बड रूंधहि ठाउ ॥६४॥',
    ],
    moolRoman: [
      'Kabīr mātī ke ham pūtre mānas rākhiu nāu.',
      'Chār divas ke pāhune baḍ baḍ rūndhih ṭhāu. ||64||',
    ],
    shabdarth: [
      {
        word: 'ਪੂਤਰੇ / पूतरे',
        meaning: {
          pb: 'ਪੁਤਲੇ',
          hi: 'पुतले, खिलौने',
          en: 'Puppets / statues',
        },
      },
      {
        word: 'ਪਾਹੁਨੇ / पाहुने',
        meaning: {
          pb: 'ਪ੍ਰਾਹੁਣੇ, ਮਹਿਮਾਨ',
          hi: 'मेहमान, यात्री',
          en: 'Guests / temporary travelers',
        },
      },
      {
        word: 'ਰੂੰਧਹਿ / रूंधहि',
        meaning: {
          pb: 'ਘੇਰਦੇ ਹਨ, ਰੋਕਦੇ ਹਨ',
          hi: 'घेरते हैं, कब्जा जमाते हैं',
          en: 'Claim and hoard space',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅਸੀਂ ਮਿੱਟੀ ਦੇ ਪੁਤਲੇ ਹਾਂ ਅਤੇ ਨਾਂ \'ਮਨੁੱਖ\' ਰੱਖਿਆ ਹੋਇਆ ਹੈ। ਅਸੀਂ ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਚਾਰ ਦਿਨ ਦੇ ਪ੍ਰਾਹੁਣੇ ਹਾਂ, ਫਿਰ ਵੀ ਵੱਡੇ-ਵੱਡੇ ਥਾਂ ਘੇਰੀ ਬੈਠੇ ਹਾਂ (ਹੰਕਾਰ ਤੇ ਮੋਹ ਵਿੱਚ ਮਾਲਕੀ ਜਤਾਉਂਦੇ ਹਾਂ)॥ ੬੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- हम मिट्टी के पुतले हैं और नाम \'मनुष्य\' रख लिया है। इस संसार में हम केवल चार दिन के मेहमान हैं, फिर भी बड़े-बड़े स्थान (अधिकार व संपत्ति) घेरे पड़े हैं॥ ६४॥',
      en: 'Satguru Kabir Saheb proclaims: We are mere puppets of clay, bearing the name of human beings. We are temporary guests here for just a few days, yet we arrogantly hoard vast possessions and territory. ||64||',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਨਾਸ਼ਵਾਨ ਹੈ। ਸੰਸਾਰ ਵਿੱਚ ਮਾਲਕੀ ਦਾ ਅਹੰਕਾਰ ਕਰਨਾ ਮੂਰਖਤਾ ਹੈ।',
      hi: 'जीवन नश्वर है। संसार में संपत्ति और अधिकार का अहंकार करना अज्ञानता है।',
      en: 'Life is fleeting. To harbor pride of ownership in this world is utter folly.',
    },
    acharana: {
      pb: 'ਮੋਹ ਅਤੇ ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰਕੇ ਨਿਮ੍ਰਤਾ ਨਾਲ ਜੀਵਨ ਬਤੀਤ ਕਰੋ।',
      hi: 'मोह और अहंकार का त्याग कर विनम्रता से जीवन व्यतीत करें।',
      en: 'Forsaking attachment and ego, live simply with humility.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਅਮਾਨਤ ਸਮਝ ਕੇ ਜੀਵਨ ਜੀਓ।',
      hi: 'स्वयं को और सब कुछ प्रभु की अमानत मानकर जीवन जिएं।',
      en: 'Regard yourself and all things as divine trust.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 65 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-65',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੫: ਮਹਿਦੀ ਕਰਿ ਘਾਲਿਆ (ਪ੍ਰਭੂ ਮਿਲਾਪ ਦੀ ਤੀਬਰ ਤਾਂਘ)',
      hi: 'सलोक ६५: महिदी करि घालिआ (प्रभु मिलाप की तीव्र तड़प)',
      en: 'Salok 65: Crushed Like Henna in Devotion, Yet Awaiting Grace',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਹਿਦੀ ਕਰਿ ਘਾਲਿਆ ਆਪੁ ਪੀਸਾਇ ਪੀਸਾਇ ॥',
      'ਤੈ ਸਹ ਬਾਤ ਨ ਪੂਛੀਐ ਕਬਹੁ ਨ ਲਾਈ ਪਾਇ ॥੬੫॥',
    ],
    moolDevanagari: [
      'कबीर महिदी करि घालिआ आपु पीसाइ पीसाइ ॥',
      'तै सह बात न पूछीऐ कबहु न लाइ पाइ ॥६५॥',
    ],
    moolRoman: [
      'Kabīr mahidī kar ghāliā āp pīsāi pīsāi.',
      'Tai sah bāt na pūchīai kabahu nā lāi pāi. ||65||',
    ],
    shabdarth: [
      {
        word: 'ਮਹਿਦੀ ਕਰਿ ਘਾਲਿਆ / महिदी करि घालिआ',
        meaning: {
          pb: 'ਮਹਿੰਦੀ ਵਾਂਗ ਘੋਟ ਕੇ, ਆਪਣੇ ਆਪ ਨੂੰ ਪੀਹ ਕੇ',
          hi: 'मेहंदी की भांति पीसकर, अपना अहंकार मिटाकर',
          en: 'Ground down like henna leaves through ascetic discipline',
        },
      },
      {
        word: 'ਬਾਤ ਨ ਪੂਛੀਐ / बात न पूछीऐ',
        meaning: {
          pb: 'ਸਾਰ ਨਹੀਂ ਲਈ, ਖ਼ਬਰ ਨਹੀਂ ਪੁੱਛੀ',
          hi: 'सुध नहीं ली, हाल नहीं पूछा',
          en: 'Have not inquired after or noticed',
        },
      },
      {
        word: 'ਲਾਈ ਪਾਇ / लाइ पाइ',
        meaning: {
          pb: 'ਪੈਰਾਂ ਵਿੱਚ ਲਗਾਇਆ (ਚਰਨਾਂ ਨਾਲ ਨਹੀਂ ਲਾਇਆ)',
          hi: 'चरणों में नहीं लगाया',
          en: 'Applied to Thy Lotus Feet',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਆਪਣੇ ਆਪ ਨੂੰ ਮਹਿੰਦੀ ਵਾਂਗ ਪੀਹ ਪੀਹ ਕੇ (ਸਾਧਨਾ ਅਤੇ ਤਪੱਸਿਆ ਵਿੱਚ) ਘਾਲਣਾ ਘਾਲੀ ਹੈ, ਪਰ ਫਿਰ ਵੀ ਹੇ ਪ੍ਰਭੂ! ਤੂੰ ਮੇਰੀ ਸਾਰ ਨਹੀਂ ਲਈ ਅਤੇ ਨਾ ਹੀ ਮੇਰੀ ਪੀਸੀ ਹੋਈ ਮਹਿੰਦੀ ਨੂੰ ਕਦੀ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਲਾਇਆ॥ ੬੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मैंने अपने आपको मेहंदी की भांति पीस-पीस कर (साधना व तपस्या में) खपा दिया है, किंतु फिर भी हे प्रभु! तूने मेरी सुध नहीं ली और न ही मेरी पिसी हुई मेहंदी को कभी अपने चरणों में लगाया (मुझे अपने चरणों की शरण नहीं बख्शी)॥ ६५॥',
      en: 'Satguru Kabir Saheb proclaims: I have ground myself down like henna leaves through rigorous devotion, yet O Lord, Thou hast not inquired after me, nor applied this crushed henna to Thy Lotus Feet. ||65||',
    },
    chintan: {
      pb: 'ਭਗਤ ਦੀ ਅੰਤਿਮ ਤਾਂਘ ਕੇਵਲ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਦੀ ਛੁਹ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਹੁੰਦੀ ਹੈ। ਇਹ ਆਪਾ-ਸਮਰਪਣ ਦੀ ਸਿਖਰ ਹੈ।',
      hi: 'भक्त की अंतिम अभिलाषा केवल प्रभु के चरणों का स्पर्श पाने की होती है। यह आत्म-समर्पण की पराकाष्ठा है।',
      en: 'The ultimate yearning of a devotee is simply to touch the Lotus Feet of the Beloved. This is the peak of surrender.',
    },
    acharana: {
      pb: 'ਹੰਕਾਰ ਦਾ ਅੰਤਿਮ ਤਿਆਗ ਕਰਕੇ ਨਿਮ੍ਰਤਾ ਨਾਲ ਪ੍ਰਭੂ ਦੀ ਉਡੀਕ ਕਰੋ।',
      hi: 'अहंकार का पूर्ण त्याग कर अत्यंत दीनता से प्रभु की कृपा की प्रतीक्षा करें।',
      en: 'Relinquishing all ego, await divine grace with profound patience.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਤਨ-ਮਨ ਨੂੰ ਪੀਹ ਕੇ ਕੇਵਲ ਪ੍ਰਭੂ ਦੀ ਪ੍ਰਸੰਨਤਾ ਲਈ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपने तन-मन को समर्पित कर केवल प्रभु की प्रसन्नता को ही अपना लक्ष्य बनाएं।',
      en: 'Dedicate your entire being solely to winning the pleasure of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 66 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-66',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੬: ਜਿਹ ਦਰਿ ਆਵਤ ਜਾਤਿਅਹੁ (ਪ੍ਰਭੂ ਦਰ ਦੀ ਮਹਿਮਾ)',
      hi: 'सलोक ६६: जिह दरि आवत जातिअहु (प्रभु दर की महिमा)',
      en: 'Salok 66: How Can We Forsake the Door Where None Are Turned Away?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਿਹ ਦਰਿ ਆਵਤ ਜਾਤਿਅਹੁ ਹਟਕੈ ਨਾਹੀ ਕੋਇ ॥',
      'ਸੋ ਦਰੁ ਕੈਸੇ ਛੋਡੀਐ ਜੋ ਦਰੁ ਐਸਾ ਹੋਇ ॥੬੬॥',
    ],
    moolDevanagari: [
      'कबीर जिह दरि आवत जातिअहु हटकाई नाही कोइ ॥',
      'सो दरु कैसै छोडीऐ जो दरु ऐसा होइ॥६६॥',
    ],
    moolRoman: [
      'Kabīr jih dar āvat jātiahu haṭkai nāhī koi.',
      'So dar kaisā chodīai jo dar aisā hoi. ||66||',
    ],
    shabdarth: [
      {
        word: 'ਆਵਤ ਜਾਤਿਅਹੁ / आवत जातिअहु',
        meaning: {
          pb: 'ਆਉਣ-ਜਾਣ ਵਾਲਿਆਂ ਨੂੰ, ਪ੍ਰੇਮੀਆਂ ਨੂੰ',
          hi: 'आने-जाने वाले प्रेमियों को',
          en: 'Those coming and going / seekers visiting',
        },
      },
      {
        word: 'ਹਟਕੈ / हटकाई',
        meaning: {
          pb: 'ਰੋਕਦਾ ਹੈ, ਮਨ੍ਹਾਂ ਕਰਦਾ ਹੈ',
          hi: 'रोक-टोक करता है, निषेध करता है',
          en: 'Restricts, bars, or turns away',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਸ ਪ੍ਰਭੂ ਦੇ ਦੁਆਰੇ ਉੱਤੇ ਆਉਣ-ਜਾਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਪ੍ਰੇਮੀ ਨੂੰ ਕੋਈ ਰੋਕ-ਟੋਕ ਨਹੀਂ ਕਰਦਾ, ਸਗੋਂ ਸਭ ਦਾ ਖੁੱਲ੍ਹਾ ਸੁਆਗਤ ਹੁੰਦਾ ਹੈ,ੇ ਅਜਿਹੇ ਦਾਤਾਰ ਦੇ ਦਰ ਨੂੰ ਕੋਈ ਕਿਵੇਂ ਛੱਡ ਸਕਦਾ ਹੈ? ਅਰਥਾਤ ਕਦੀ ਨਹੀਂ ਛੱਡਣਾ ਚਾਹੀਦਾ॥ ੬੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जिस परमात्मा के द्वार पर आने-जाने वाले किसी भी प्रेमी को कोई रोक-टोक नहीं करता, बल्कि सबका स्वागत होता है, ऐसे महान दाता के द्वार को कोई कैसे छोड़ सकता है? अर्थात उसे कभी नहीं छोड़ना चाहिए॥ ६६॥',
      en: 'Satguru Kabir Saheb proclaims: At whose heavenly doorway none are ever barred or turned away, how could anyone ever forsake such a gracious portal? Indeed, it should never be left. ||66||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਦਰ ਸਭ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ। ਉੱਥੇ ਜਾਤ, ਪਾਤ ਜਾਂ ਪਾਪਾਂ ਦਾ ਕੋਈ ਬੰਧਨ ਨਹੀਂ, ਕੇਵਲ ਪ੍ਰੇਮ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'प्रभु का द्वार सबके लिए सर्वदा खुला है। वहाँ कोई पाबंदी नहीं, केवल प्रेम और शरण की आवश्यकता है।',
      en: 'The Lord\'s door is open to all without restriction. Only sincere love is required.',
    },
    acharana: {
      pb: 'ਸਦਾ ਪ੍ਰਭੂ ਦੇ ਦਰਬਾਰ ਨਾਲ ਜੁੜੇ ਰਹੋ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'सदैव प्रभु के दरबार से जुड़े रहें और नाम सिमरन की कमाई करें।',
      en: 'Remain eternally tethered to the Master\'s threshold through remembrance.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਦਰ ਨੂੰ ਹੀ ਆਪਣਾ ਸਦੀਵੀ ਟਿਕਾਣਾ ਮੰਨ ਕੇ ਸਮਰਪਿਤ ਹੋ ਜਾਓ।',
      hi: 'प्रभु के द्वार को ही अपना शाश्वत ठिकाना मानकर पूर्ण रूप से समर्पित हो जाएं।',
      en: 'Make the Lord\'s threshold your eternal and sole refuge.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 67 (Ang 1365)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-67',
    category: 'salok',
    ang: 1365,
    title: {
      pb: 'ਸਲੋਕ ੬੭: ਡੂਬਾ ਥਾ ਪੈ ਉਬਰਿਓ (ਸ਼ੁਭ ਗੁਣ ਤੇ ਸਰੀਰ ਮੋਹ ਤਿਆਗ)',
      hi: 'सलोक ६७: डूबा था पै उबरिओ (शुभ गुण व देह मोह त्याग)',
      en: 'Salok 67: I Was Drowning, Saved by Virtues; Fled the Fragile Body-Boat',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਡੂਬਾ ਥਾ ਪੈ ਉਬਰਿਓ ਗੁਨ ਕੀ ਲਹਰਿ ਝਬਕਿ ॥',
      'ਜਬ ਦੇਖਿਓ ਬੇੜਾ ਜਰਜਰਾ ਤਬ ਉਤਰਿ ਪਰਿਓ ਹਉ ਫਰਕਿ ॥੬੭॥',
    ],
    moolDevanagari: [
      'कबीर डूबा था पै उबरिओ गुन की लहरि झबकि॥',
      'जब देखिओ बेड़ा जरजरा तब उतरि परिओ हउ फरकि॥६७॥',
    ],
    moolRoman: [
      'Kabīr ḍūbā thā pai ubrio gun kī lahar jhabak.',
      'Jab dekhiou beṛā jarjarā tab utar paio hau farki. ||67||',
    ],
    shabdarth: [
      {
        word: 'ਉਬਰਿਓ / उबरिओ',
        meaning: {
          pb: 'ਬੱਚ ਗਿਆ',
          hi: 'बच गया, तर गया',
          en: 'Rescued / saved',
        },
      },
      {
        word: 'ਝਬਕਿ / झबकि',
        meaning: {
          pb: 'ਝਲਕਾਰੇ ਨਾਲ, ਫੁਰਤੀ ਨਾਲ',
          hi: 'झटके से, तुरंत',
          en: 'Instantly / swiftly',
        },
      },
      {
        word: 'ਜਰਜਰਾ / जरजरा',
        meaning: {
          pb: 'ਗਲਿਆ-ਸੜਿਆ, ਕਮਜ਼ੋਰ (ਨਾਸ਼ਵਾਨ ਸਰੀਰ)',
          hi: 'जीर्ण-शीर्ण, कमजोर (नश्वर शरीर)',
          en: 'Dilapidated and decaying (mortal body)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਸੰਸਾਰ ਸਮੁੰਦਰ ਵਿੱਚ ਡੁੱਬ ਰਿਹਾ ਸੀ, ਪਰ ਸ਼ੁਭ ਗੁਣਾਂ ਅਤੇ ਪ੍ਰਭੂ-ਭਗਤੀ ਦੀ ਲਹਿਰ ਦੇ ਝਲਕਾਰੇ ਨਾਲ ਬਚ ਗਿਆ। ਜਦ ਮੈਂ ਵੇਖਿਆ ਕਿ ਇਹ ਸਰੀਰ-ਰूपी ਬੇੜਾ ਗਲਿਆ-ਸੜਿਆ (ਨਾਸ਼ਵਾਨ) ਹੈ, ਤਾਂ ਮੈਂ ਇਸ ਵਿੱਚੋਂ ਝੱਟਪਟ (ਮੋਹ ਛੱਡ ਕੇ) ਉਤਰ ਪਿਆ॥ ੬੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मैं संसार-सागर में डूब रहा था, किंतु शुभ गुणों व प्रभु-भक्ति की लहर के झटके से बच गया। जब मैंने देखा कि यह शरीर-रूपी नौका जीर्ण-शीर्ण (नश्वर) है, तो मैं उससे तुरंत (मोह त्यागकर) उतर पड़ा॥ ६७॥',
      en: 'Satguru Kabir Saheb proclaims: I was drowning in the ocean of samsara, but was swiftly rescued by a wave of divine virtues. When I realized that this body-boat was dilapidated and decaying, I instantly stepped out of it (renouncing bodily attachment). ||67||',
    },
    chintan: {
      pb: 'ਸਰੀਰ ਅਤੇ ਸੰਸਾਰ ਦਾ ਮੋਹ ਛੱਡ ਕੇ ਹੀ ਆਤਮਾ ਪਾਰ ਉਤਰਦੀ ਹੈ। ਗੁਣਾਂ ਦਾ ਆਸਰਾ ਹੀ ਸੱਚੀ ਕਿਸ਼ਤੀ ਹੈ।',
      hi: 'शरीर और संसार का मोह त्यागकर ही आत्मा पार उतरती है। सद्गुणों का आश्रय ही सच्ची नौका है।',
      en: 'Only by relinquishing attachment to the physical frame does the soul cross over. Divine virtues are the true vessel.',
    },
    acharana: {
      pb: 'ਦੇਹ ਅਧਿਆਸ ਨੂੰ ਤਿਆਗ ਕੇ ਗੁਣਾਂ ਅਤੇ ਨਾਮ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'देह-अभिमान को त्यागकर सद्गुणों और नाम की कमाई करें।',
      en: 'Transcending bodily identification, cultivate virtues and divine remembrance.',
    },
    samarpan: {
      pb: 'ਨਾਸ਼ਵਾਨ ਦੇਹ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਅਮਰ ਆਤਮਾ ਨੂੰ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜੋ।',
      hi: 'नश्वर देह से ऊपर उठकर अमर आत्मा को प्रभु चरणों से जोड़ें।',
      en: 'Rising above the ephemeral body, anchor your immortal soul at the Lord\'s feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 68 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-68',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੬੮: ਪਾਪੀ ਭਗਤਿ ਨ ਭਾਵਈ (ਪਾਪੀ ਸੁਭਾਅ)',
      hi: 'सलोक ६८: पापी भगति न भावई (पापी स्वभाव)',
      en: 'Salok 68: The Sinner Dislikes Devotion, Like a Fly Seeking Filth',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਪੀ ਭਗਤਿ ਨ ਭਾਵਈ ਹਰਿ ਪੂਜਾ ਨ ਸੁਹਾਇ ॥',
      'ਮਾਖੀ ਚੰਦਨੁ ਪਰਹਰੈ ਜਹ ਬਿਗੰਧ ਤਹ ਜਾਇ ॥੬੮॥',
    ],
    moolDevanagari: [
      'कबीर पापी भगति न भावई हरि पूजा न सुहाइ ॥',
      'माखी चंदनु परहरै जह बिगंध तह जाइ ॥६८॥',
    ],
    moolRoman: [
      'Kabīr pāpī bhagat na bhāvai har pūjā na suhāi.',
      'Mākhi chandan parharai jah bigandh tah jāi. ||68||',
    ],
    shabdarth: [
      {
        word: 'ਪਰਹਰੈ / परहरै',
        meaning: {
          pb: 'ਤਿਆਗ ਦਿੰਦੀ ਹੈ, ਛੱਡ ਦਿੰਦੀ ਹੈ',
          hi: 'त्याग देती है, दूर भागती है',
          en: 'Abandons / shuns',
        },
      },
      {
        word: 'ਬਿਗੰਧ / बिगंध',
        meaning: {
          pb: 'ਦੁਰਗੰਧ, ਗੰਦਗੀ',
          hi: 'दुर्गंध, गंदगी',
          en: 'Foul odor / filth',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪਾਪੀ ਪੁਰਸ਼ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਚੰਗੀ ਨਹੀਂ ਲੱਗਦੀ ਅਤੇ ਨਾ ਹੀ ਹਰੀ ਦੀ ਪੂਜਾ ਉਸ ਨੂੰ ਸੁਖਾਂਦੀ ਹੈ। ਜਿਵੇਂ ਮੱਖੀ ਸੁਗੰਧ ਵਾਲੇ ਚੰਦਨ ਨੂੰ ਤਿਆਗ ਦਿੰਦੀ ਹੈ ਅਤੇ ਜਿੱਥੇ ਗੰਦਗੀ (ਦੁਰਗੰਧ) ਹੋਵੇ, ਉੱਥੇ ਹੀ ਜਾਂਦੀ ਹੈ॥ ੬੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- पापी पुरुष को भगवान की भक्ति अच्छी नहीं लगती और न ही ईश्वर की पूजा उसे सुहाती है। जैसे मक्खी सुगंधित चंदन को छोड़ देती है और जहां गंदगी (दुर्गंध) हो, वहीं जाती है॥ ६८॥',
      en: 'Satguru Kabir Saheb proclaims: The sinner finds no joy in devotion or worship of the Lord. Just as a fly shuns fragrant sandalwood and settles only upon filth, so does the vicious mind cling to vice. ||68||',
    },
    chintan: {
      pb: 'ਵਿਕਾਰੀ ਮਨ ਨੂੰ ਵਿਕਾਰ ਹੀ ਭਾਉਂਦੇ ਹਨ। ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਅਤੇ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਕੇਵਲ ਪਵਿੱਤਰ ਹਿਰਦੇ ਨੂੰ ਹੀ ਭਾਉਂਦਾ ਹੈ।',
      hi: 'विकारी मन को विकार ही भाते हैं। संतों की संगति और प्रभु का नाम केवल निर्मल हृदय को ही सुहाता है।',
      en: 'The impure mind craves impurity. Only the purified heart relishes the fragrance of divine devotion.',
    },
    acharana: {
      pb: 'ਮਨ ਨੂੰ ਵਿਕਾਰਾਂ ਦੀ ਗੰਦਗੀ ਤੋਂ ਬਚਾ ਕੇ ਸਿਮਰਨ ਦੇ ਚੰਦਨ ਨਾਲ ਜੋੜੋ।',
      hi: 'मन को विकारों की गंदगी से बचाकर सिमरन रूपी चंदन से जोड़ें।',
      en: 'Shield your mind from the filth of vice, bathing it in the fragrance of remembrance.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਸ਼ਿੰਗਾਰ ਬਣਾਓ।',
      hi: 'प्रभु की भक्ति को अपने जीवन का शृंगार बनाएं।',
      en: 'Make divine devotion the pristine ornament of your life.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 69 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-69',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੬੯: ਬੈਦੁ ਮੂਆ ਰੋਗੀ ਮੂਆ (ਮੋਹ ਦੀ ਮੌਤ ਤੋਂ ਮੁਕਤੀ)',
      hi: 'सलोक ६९: बैदु मूआ रोगी मूआ (मोह मृत्यु से मुक्ति)',
      en: 'Salok 69: Doctor, Patient, and World Die; Only the Detached Kabir Lives',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬੈਦੁ ਮੂਆ ਰੋਗੀ ਮੂਆ ਮੂਆ ਸਭੁ ਸੰਸਾਰੁ ॥',
      'ਏਕੁ ਕਬੀਰਾ ਨਾ ਮੂਆ ਜਿਹ ਨਾਹੀ ਰੋਵਨਹਾਰੁ ॥੬੯॥',
    ],
    moolDevanagari: [
      'कबीर बैदु मूआ रोगी मूआ मूआ सभु संसारु ॥',
      'एकु कबीरा ना मूआ जिह नाही रोवनहारु ॥६९॥',
    ],
    moolRoman: [
      'Kabīr baid mūā rogī mūā mūā sabh sansār.',
      'Ek kabīr nā mūā jih nāhī rovanhār. ||69||',
    ],
    shabdarth: [
      {
        word: 'ਬੈਦੁ / बैदु',
        meaning: {
          pb: 'ਹਕੀਮ, ਡਾਕਟਰ (ਚਤੁਰ ਸਿਆਣੇ)',
          hi: 'वैद्य, हकीम (दुनियादारी के चतुर)',
          en: 'Physician / worldly wise',
        },
      },
      {
        word: 'ਰੋਵਨਹਾਰੁ / रोवनहारु',
        meaning: {
          pb: 'ਮੋਹ ਵਿੱਚ ਰੋਣ ਵਾਲੇ ਸੰਬੰਧੀ',
          hi: 'मोह वश विलाप करने वाले सगे-संबंधी',
          en: 'Mourners attached in worldly grief',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਵੈਦ ਮਰ ਗਿਆ, ਰੋਗੀ ਵੀ ਮਰ ਗਿਆ ਅਤੇ ਸਾਰਾ ਸੰਸਾਰ ਵੀ (ਵਿਕਾਰਾਂ ਅਤੇ ਮੋਹ ਦੀ ਮੌਤੇ) ਮਰ ਗਿਆ, ਪਰ ਇੱਕ ਕਬੀਰ ਨਾ ਮਰਿਆ ਜਿਸ ਨੂੰ ਕੋਈ ਰੋਣ ਵਾਲਾ ਨਹੀਂ ਹੈ (ਭਾਵ ਜਿਸਦਾ ਕੋਈ ਸੰਸਾਰੀ ਮੋਹ ਨਹੀਂ, ਉਹ ਪ੍ਰਭੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਅਮਰ ਹੋ ਗਿਆ ਹੈ)॥ ੬੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- वैद्य मर गया, रोगी भी मर गया और सारा संसार भी (मोह व विकारों के कारण) मर गया, किंतु एक कबीर नहीं मरा जिसका कोई रोने वाला नहीं है (अर्थात जो संसार के मोह-माया के बंधनों से मुक्त होकर अमर हो चुका है)॥ ६९॥',
      en: 'Satguru Kabir Saheb proclaims: The physician dies, the patient dies, and the entire world dies (consumed by the death of worldly attachment). Only Kabir does not die, for he has no worldly mourners attached to him (having transcended all mortality through God-realization). ||69||',
    },
    chintan: {
      pb: 'ਸਾਰਾ ਸੰਸਾਰ ਮੋਹ-ਮਾਇਆ ਦੇ ਰੋਗ ਵਿੱਚ ਫਸ ਕੇ ਆਤਮਿਕ ਤੌਰ \'ਤੇ ਮਰ ਰਿਹਾ ਹੈ। ਕੇਵਲ ਨਾਮ ਸਿਮਰਨ ਵਾਲਾ ਭਗਤ ਅਮਰ ਹੁੰਦਾ ਹੈ।',
      hi: 'सारा संसार मोह-माया के रोग में फंसकर आत्मिक रूप से मर रहा है। केवल नाम सिमरन करने वाला संत ही अमर होता है।',
      en: 'The worldly masses perish spiritually, caught in the disease of attachment. Only the God-realized saint lives eternally.',
    },
    acharana: {
      pb: 'ਮੋਹ ਦੇ ਜੰਜਾਲਾਂ ਨੂੰ ਤਿਆਗ ਕੇ ਅਮਰ ਆਤਮਾ ਦਾ ਗਿਆਨ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'मोह के बंधनों को त्यागकर अमर आत्मा का दिव्य ज्ञान प्राप्त करें।',
      en: 'Forsaking worldly grief, awaken to the immortal truth within.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਜੀਵਨ ਬਤੀਤ ਕਰੋ ਤਾਂ ਜੋ ਮੌਤ ਦਾ ਭੈ ਸਦਾ ਲਈ ਮਿਟ ਜਾਵੇ।',
      hi: 'प्रभु के प्रेम में जीवन व्यतीत करें ताकि मृत्यु का भय सदा के लिए मिट जाए।',
      en: 'Live in divine love so that all fear of mortality dissolves forever.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 70 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-70',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੦: ਰਾਮੁ ਨ ਧਿਆਇਓ (ਮਨੁੱਖਾ ਜਨਮ ਦੀ ਦੁਰਲਭਤਾ)',
      hi: 'सलोक ७०: रामु न धिआइओ (मनुष्य जन्म की दुर्लभता)',
      en: 'Salok 70: Unremembered Ram, the Wooden Pot Bakes But Once',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮੁ ਨ ਧਿਆਇਓ ਮੋਟੀ ਲਾਗੀ ਖੋਰਿ ॥',
      'ਕਾਇਆ ਹਾਂਡੀ ਕਾਠ ਕੀ ਨਾ ਓਹ ਚਰੈ ਬਹੋਰਿ ॥੭੦॥',
    ],
    moolDevanagari: [
      'कबीर रामु न धिआइओ मोटी लागी खोरि ॥',
      'काइआ हांडी काठ की ना ओह चरै बहोरि ॥७०॥',
    ],
    moolRoman: [
      'Kabīr rām na dhiāio moṭī lāgī khor.',
      'Kāiā hāṇḍī kāṭh kī nā oh charai bahor. ||70||',
    ],
    shabdarth: [
      {
        word: 'ਖੋਰਿ / खोरि',
        meaning: {
          pb: 'ਘੁਣ, ਨੁਕਸ, ਅੰਦਰੋਂ ਖਾਧਾ ਜਾਣਾ',
          hi: 'घुन, दोष, अंदर से खोखला होना',
          en: 'Rot / inner decay or worm',
        },
      },
      {
        word: 'ਕਾਠ ਕੀ ਹਾਂਡੀ / काइआ हांडी काठ की',
        meaning: {
          pb: 'ਲੱਕੜੀ ਦੀ ਹਾਂਡੀ (ਸਰੀਰ ਜੋ ਦੁਬਾਰਾ ਨਹੀਂ ਮਿਲਦਾ)',
          hi: 'लकड़ी की हांडी (यह शरीर जो दोबारा नहीं मिलता)',
          en: 'Wooden pot of the body (which can be placed on fire only once)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜੇ ਤੂੰ ਪਰਮਾਤਮਾ ਦਾ ਸਿਮਰਨ ਨਹੀਂ ਕੀਤਾ, ਤਾਂ ਤੇਰੇ ਜੀਵਨ ਨੂੰ (ਕਾਲ ਰੂਪੀ) ਵੱਡੀ ਖੋਰ ਲੱਗ ਚੁੱਕੀ ਹੈ। ਇਹ ਸਰੀਰ-ਰੂਪੀ ਲੱਕੜ ਦੀ ਹਾਂਡੀ ਚੁੱਲ੍ਹੇ ਉੱਤੇ ਇੱਕ ਵਾਰ ਹੀ ਚੜ੍ਹਦੀ ਹੈ, ਭਾਵ ਮਨੁੱਖਾ ਜਨਮ ਬਾਰ-ਬਾਰ ਨਹੀਂ ਮਿਲਦਾ॥ ੭੦॥',
      hi: 'हे कबीर! यदि तूने परमात्मा का स्मरण नहीं किया, तो तेरे जीवन को (काल-रूपी) बड़ा घुन लग चुका है। यह शरीर-रूपी लकड़ी की हांडी चूल्हे पर एक बार ही चढ़ती है, अर्थात यह मनुष्य जन्म बार-बार नहीं मिलता॥ ७०॥',
      en: 'O Kabir, if you have not meditated on the Lord, a deep rot has consumed your life. The wooden pot of the human body is placed on the fire only once (this priceless human birth does not return). ||70||',
    },
    chintan: {
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਬਹੁਤ ਮੁਸ਼ਕਿਲ ਨਾਲ ਮਿਲਦਾ ਹੈ। ਇਸ ਨੂੰ ਵਿਕਾਰਾਂ ਵਿੱਚ ਗਵਾਉਣਾ ਸਭ ਤੋਂ ਵੱਡਾ ਘਾਟਾ ਹੈ।',
      hi: 'मनुष्य जन्म अत्यंत दुर्लभ है। इसे व्यर्थ गंवाना सबसे बड़ा घाटा है।',
      en: 'Human birth is supremely rare. To squander it in worldly vice is the ultimate loss.',
    },
    acharana: {
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਦੇ ਹਰ ਸੁਆਸ ਨੂੰ ਪ੍ਰਭੂ ਸਿਮਰਨ ਵਿੱਚ ਸਫ਼ਲ ਕਰੋ।',
      hi: 'मनुष्य जन्म के प्रत्येक श्वास को प्रभु सिमरन में सफल बनाएं।',
      en: 'Fulfill every breath of this rare human birth with divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ-ਮਨ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਜੀਵਨ ਸਫਲਾ ਕਰੋ।',
      hi: 'अपना तन-मन प्रभु चरणों में समर्पित कर जीवन सफल करें।',
      en: 'Dedicate your body and mind to the Lord to crown your life with success.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 71 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-71',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੧: ਐਸੀ ਹੋਇ ਪਰੀ (ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਿੱਚ ਨਿਡਰਤਾ)',
      hi: 'सलोक ७१: ऐसी होइ परी (प्रभु प्रेम में निडरता)',
      en: 'Salok 71: Why Fear Death When Dedicated in Divine Love?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸੀ ਹੋਇ ਪਰੀ ਮਨ ਕੋ ਭਾਵਤੁ ਕੀਨੁ ॥',
      'ਮਰਨੇ ਤੇ ਕਿਆ ਡਰਪਨਾ ਜਬ ਹਾਥਿ ਸਿਧਉਰਾ ਲੀਨ ॥੭੧॥',
    ],
    moolDevanagari: [
      'कबीर ऐसी होइ परी मन को भावतु कीनु ॥',
      'मरने ते किआ डरपना जब हाथि सिधउरा लीन ॥७१॥',
    ],
    moolRoman: [
      'Kabīr aisī hoi parī man ko bhāvat kīn.',
      'Marne te kiā ḍarpanā jab hāth sidhaurā līn. ||71||',
    ],
    shabdarth: [
      {
        word: 'ਮਨ ਕੋ ਭਾਵਤੁ / मन को भावतु',
        meaning: {
          pb: 'ਮਨ ਦੀ ਪਸੰਦ ਅਨੁਸਾਰ (ਪ੍ਰਭੂ ਮਿਲਾਪ)',
          hi: 'मन की प्रसन्नता के अनुसार',
          en: 'According to heart\'s supreme desire',
        },
      },
      {
        word: 'ਸਿਧਉਰਾ / सिधउरा',
        meaning: {
          pb: 'ਸਤੀ ਹੋਣ ਵਾਲੇ ਦਾ ਨਾਰੀਅਲ/ਪ੍ਰਣ (ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਪ੍ਰਣ)',
          hi: 'नारियल या प्रण (प्रेम व समर्पण का प्रतीक)',
          en: 'Symbol of absolute pledge or dedication',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੁਣ ਤਾਂ ਐਸੀ ਬਾਤ ਹੋ ਗਈ ਹੈ ਕਿ ਮੈਂ ਆਪਣੇ ਮਨ ਨੂੰ ਭਾਉਂਦੀ (ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਾਲੀ) ਗաղ ਕਰ ਲਈ ਹੈ। ਹੁਣ ਮੌਤ ਤੋਂ ਕੀ ਡਰਨਾ, ਜਦੋਂ ਮੈਂ ਪ੍ਰਭੂ-ਪ੍ਰੇਮ ਵਿੱਚ ਆਪਾ ਅਰਪਣ ਕਰਨ ਦਾ ਪ੍ਰਣ (ਸਿਧਉਰਾ) ਹੱਥ ਵਿੱਚ ਲੈ ਲਿਆ ਹੈ॥ ੭੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- अब तो ऐसी स्थिति बन गई है कि मैंने अपने मन-भावन प्रभु-प्रेम का मार्ग चुन लिया है। अब मृत्यु से क्या डरना, जब मैंने प्रेम और समर्पण का नारियल (प्रण) अपने हाथ में ले लिया है॥ ७१॥',
      en: 'Satguru Kabir Saheb proclaims: Now such a state has blossomed that my heart has found its supreme desire in the Lord. Why fear death when I have taken the pledge of absolute dedication in my hand? ||71||',
    },
    chintan: {
      pb: 'ਜਿਸ ਨੇ ਪ੍ਰਭੂ ਨਾਲ ਸੱਚਾ ਪ੍ਰੇਮ ਪਾ ਲਿਆ ਹੈ, ਉਸ ਦੇ ਹਿਰਦੇ ਵਿੱਚੋਂ ਮੌਤ ਦਾ ਡਰ ਸਦਾ ਲਈ ਮਿਟ ਜਾਂਦਾ ਹੈ।',
      hi: 'जिसने प्रभु से सच्चा प्रेम पा लिया है, उसके हृदय से मृत्यु का भय सदा के लिए मिट जाता है।',
      en: 'One who has tasted true love for the Lord is forever liberated from the fear of death.',
    },
    acharana: {
      pb: 'ਮੌਤ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਨਿਡਰਤਾ ਨਾਲ ਭਗਤੀ ਮਾਰਗ ’ਤੇ ਚੱਲੋ।',
      hi: 'मृत्यु के भय से मुक्त होकर निर्भीकता से भक्ति मार्ग पर आगे बढ़ें।',
      en: 'Walking fearlessly on the path of devotion, transcend all dread of mortality.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਆਪਣਾ ਸਭ ਕੁਝ ਨਿਛਾਵਰ ਕਰਨ ਦਾ ਦ੍ਰਿੜ੍ਹ ਸੰਕਲਪ ਕਰੋ।',
      hi: 'प्रभु के प्रेम में अपना सर्वस्व न्यौछावर करने का दृढ़ संकल्प लें।',
      en: 'Resolve firmly to surrender all to the divine beloved.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 72 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-72',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੨: ਰਸ ਕੋ ਗਾਂਡੋ ਚੂਸੀਐ (ਗੁਣ ਪ੍ਰਾਪਤੀ ਦਾ ਯਤਨ)',
      hi: 'सलोक ७२: रस को गांडो चूसीऐ (गुण प्राप्ति का यत्न)',
      en: 'Salok 72: Suck the Sugarcane for Juice; Strive for Virtues',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਸ ਕੋ ਗਾਂਡੋ ਚੂਸੀਐ ਗੁਨ ਕਉ ਮਰੀਐ ਰੋਇ ॥',
      'ਅਵਗੁਨੀਆਰੇ ਮਾਨਸੈ ਭਲੋ ਨ ਕਹਿਹੈ ਕੋਇ ॥੭੨॥',
    ],
    moolDevanagari: [
      'कबीर रस को गांडो चूसीऐ गुन कउ मरीऐ रोइ ॥',
      'अवगुनीआरे मानसै भलो न कहिहै कोइ ॥७२॥',
    ],
    moolRoman: [
      'Kabīr ras ko gāṇḍo chūsīai gun kau marīai roi.',
      'Avgunīāre mānsai bhalo na kahihai koi. ||72||',
    ],
    shabdarth: [
      {
        word: 'ਗਾਂਡੋ / गांडो',
        meaning: {
          pb: 'ਗੰਢਾਂ ਵਾਲਾ ਗੰਨਾ',
          hi: 'गन्नों की गांठ / गन्ना',
          en: 'Sugarcane',
        },
      },
      {
        word: 'અਵਗੁਨੀਆਰੇ / अवगुनीआरे',
        meaning: {
          pb: 'ਔਗੁਣਾਂ ਨਾਲ ਭਰੇ ਹੋਏ ਮਨੁੱਖ',
          hi: 'अवगुणों व बुराइयों से भरे हुए मनुष्य',
          en: 'Those filled with vices and demerits',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਮਿੱਠਾ ਰਸ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਗੰਢਾਂ ਵਾਲਾ ਗੰਨਾ ਚੂਪੀਦਾ ਹੈ, ਇਸੇ ਤਰ੍ਹਾਂ ਆਤਮਿਕ ਗੁਣ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਭਾਵੇਂ ਕਿੰਨੀ ਵੀ ਮਿਹਨਤ (ਕਸ਼ਟ) ਕਰਨੀ ਪਵੇ, ਪਿੱਛੇ ਨਹੀਂ ਹਟਣਾ ਚਾਹੀਦਾ; ਕਿਉਂਕਿ ਔਗੁਣਾਂ ਨਾਲ ਭਰੇ ਮਨੁੱਖ ਨੂੰ ਸੰਸਾਰ ਵਿੱਚ ਕੋਈ ਵੀ ਚੰਗਾ ਨਹੀਂ ਆਖਦਾ॥ ੭੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जैसे मधुर रस प्राप्त करने के लिए गन्ने को चूसा जाता है, उसी प्रकार आत्मिक गुण प्राप्त करने के लिए चाहे कितनी भी कठिन साधना क्यों न करनी पड़े, अवश्य करनी चाहिए; क्योंकि अवगुणों से भरे मनुष्य को संसार में कोई भी अच्छा नहीं कहता॥ ७२॥',
      en: 'Satguru Kabir Saheb proclaims: Just as sugarcane is sucked to extract its sweet juice, so must one strive with utmost diligence to attain spiritual virtues. For no one in the world praises a person filled with vices. ||72||',
    },
    chintan: {
      pb: 'ਗੁਣਾਂ ਅਤੇ ਗਿਆਨ ਦੀ ਪ੍ਰਾਪਤੀ ਸਹਿਜੇ ਨਹੀਂ ਹੁੰਦੀ, ਇਸ ਲਈ ਦ੍ਰਿੜ੍ਹ ਯਤਨ ਦੀ ਲੋੜ ਹੈ।',
      hi: 'सद्गुणों और ज्ञान की प्राप्ति सहज नहीं होती, इसके लिए निरंतर दृढ़ पुरुषार्थ की आवश्यकता है।',
      en: 'The acquisition of virtues requires earnest and persistent spiritual effort.',
    },
    acharana: {
      pb: 'ਔਗੁਣਾਂ ਨੂੰ ਤਿਆਗ ਕੇ ਨਿੱਤ ਆਤਮਿਕ ਗੁਣਾਂ ਨੂੰ ਆਪਣੇ ਆਚਰਣ ਵਿੱਚ ਧਾਰਨ ਕਰੋ।',
      hi: 'अवगुणों को त्यागकर नित्य आत्मिक गुणों को अपने आचरण में ढालें।',
      en: 'Shedding vices, weave divine virtues into your daily conduct.',
    },
    samarpan: {
      pb: 'ਗੁਣਾਂ ਦੀ ਖਾਣ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੀਵਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'सद्गुणों के भंडार सतगुरु के चरणों में अपना जीवन समर्पित करें।',
      en: 'Surrender your life at the feet of the Master, the Fountain of all Virtues.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 73 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-73',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੩: ਗਾਗਰਿ ਜਲ ਭਰੀ (ਸੁਆਸਾਂ ਦੀ ਨਾਸ਼ਮਾਨਤਾ)',
      hi: 'सलोक ७३: गागरि जल भरी (श्वासों की नश्वरता)',
      en: 'Salok 73: The Water-Pot of Breath Will Break; Remember the Guru',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗਾਗਰਿ ਜਲ ਭਰੀ ਆਜੁ ਕਾਲਿ ਜੈਹੈ ਫੂਟਿ ॥',
      'ਗੁਰੁ ਜੁ ਨ ਚੇਤਹਿ ਆਪਨੋ ਅਧ ਮਾਝਿ ਲੀਜਹਿਗੇ ਲੂਟਿ ॥੭੩॥',
    ],
    moolDevanagari: [
      'कबीर गागरि जल भरी आजु कालि जैहै फूटि ॥',
      'गुरु जु न चेतहि आपनो अध माझि लीजहिगे लुटि ॥७३॥',
    ],
    moolRoman: [
      'Kabīr gāgar jal bharī āj kāl jaihai phūṭ.',
      'Gur ju na chetahi āpano adh mājhi lījihige lūṭ. ||73||',
    ],
    shabdarth: [
      {
        word: 'ਗਾਗਰਿ ਜਲ ਭਰੀ / गागरि जल भरी',
        meaning: {
          pb: 'ਸਾਹਾਂ (ਸੁਆਸਾਂ) ਨਾਲ ਭਰੀ ਦੇਹ ਰੂਪੀ ਗਾਗਰ',
          hi: 'श्वास रूपी जल से भरी देह रूपी गागर',
          en: 'The water-pot of the body filled with breath',
        },
      },
      {
        word: 'ਅਧ ਮਾਝਿ / अध माझि',
        meaning: {
          pb: 'ਅਧਵਾਟੇ, ਰਸਤੇ ਵਿੱਚ ਹੀ',
          hi: 'अधबीच में, रास्ते में ही',
          en: 'Midway / halfway through life\'s journey',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਦੇਹ ਰੂਪੀ ਗਾਗਰ ਜੋ ਸੁਆਸਾਂ ਦੇ ਪਾਣੀ ਨਾਲ ਭਰੀ ਹੋਈ ਹੈ, ਪਤਾ ਨਹੀਂ ਕੱਲ੍ਹ ਜਾਂ ਅੱਜ ਹੀ ਟੁੱਟ ਜਾਣੀ ਹੈ (ਸਰੀਰ ਨਾਸ਼ਵਾਨ ਹੈ)। ਜਿਹੜੇ ਮਨੁੱਖ ਆਪਣੇ ਗੁਰੂ ਨੂੰ ਯਾਦ ਨਹੀਂ ਕਰਦੇ, ਉਹ ਜੀਵਨ ਦੇ ਅਧਵਾਟੇ ਹੀ ਵਿਕਾਰਾਂ ਹੱਥੋਂ ਲੁੱਟੇ ਜਾਂਦੇ ਹਨ॥ ੭੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यह शरीर-रूपी गागर जो श्वासों के जल से भरी है, आज या कल फूट जाएगी (नश्वर है)। जो मनुष्य अपने गुरु का स्मरण नहीं करते, वे जीवन के अधबीच में ही विकारों द्वारा ठग लिए जाते हैं (जीवन व्यर्थ गंवा देते हैं)॥ ७३॥',
      en: 'Satguru Kabir Saheb proclaims: This water-pot of the body filled with breath will break today or tomorrow. Those who do not remember their Guru are robbed midway by worldly vices. ||73||',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਅਸਥਿਰ ਹੈ। ਮੌਤ ਦਾ ਕੋਈ ਭਰੋਸਾ ਨਹੀਂ, ਇਸ ਲਈ ਗੁਰੂ-ਸਿਮਰਨ ਵਿੱਚ ਦੇਰੀ ਨਾ ਕਰੋ।',
      hi: 'जीवन अनित्य है। मृत्यु का कोई भरोसा नहीं, अतः गुरु-स्मरण में तनिक भी विलंब न करें।',
      en: 'Life is precarious. Death waits for none; delay not in remembering the Master.',
    },
    acharana: {
      pb: 'ਹਰ ਸੁਆਸ ਨਾਲ ਗੁਰੂ ਦਾ ਸਿਮਰਨ ਕਰਕੇ ਆਪਣੀ ਜੀਵਨ ਗਾਗਰ ਨੂੰ ਸਫਲ ਕਰੋ।',
      hi: 'प्रत्येक श्वास के साथ गुरु का स्मरण कर अपने जीवन को सफल बनाएं।',
      en: 'With every breath, remember the Master to crown your journey with grace.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'स्वयं को पूर्णतः सतगुरु के चरणों में समर्पित कर दें।',
      en: 'Surrender yourself completely to the shelter of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 74 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-74',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੪: ਕੂਕਰੁ ਰਾਮ ਕੋ ਮੁਤੀਆ (ਪ੍ਰਭੂ ਦਾ ਆਗਿਆਕਾਰੀ ਸੇਵਕ)',
      hi: 'सलोक ७४: कूकरु राम को मुतीआ (प्रभु का आज्ञाकारी सेवक)',
      en: 'Salok 14 (74): I Am the Lord\'s Dog, Named Moti; Bound by His Leash',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੂਕਰੁ ਰਾਮ ਕੋ ਮੁਤੀਆ ਮੇਰੋ ਨਾਉ ॥',
      'ਗਲੇ ਹਮਾਰੇ ਜੇਵਰੀ ਜਹ ਖਿੰਚੈ ਤਹ ਜਾਉ ॥੭੪॥',
    ],
    moolDevanagari: [
      'कबीर कूकरु राम को मुतीआ मेरो नाउ ॥',
      'गले हमारे जेवरी जह खिंचै तह जाउ ॥७४॥',
    ],
    moolRoman: [
      'Kabīr kūkar rām ko mutīā mero nāu.',
      'Gale hamāre jevarī jah khinchai tah jāu. ||74||',
    ],
    shabdarth: [
      {
        word: 'ਕੂਕਰੁ / कूकरु',
        meaning: {
          pb: 'ਕੁੱਤਾ (ਨਿਮ੍ਰ ਸੇਵਕ)',
          hi: 'कुत्ता (नर्म व वफादार सेवक)',
          en: 'Faithful dog / humble servant',
        },
      },
      {
        word: 'ਮੁਤੀਆ / मुतीआ',
        meaning: {
          pb: 'ਮੋਤੀ (ਕੁੱਤੇ ਦਾ ਪਿਆਰਾ ਨਾਮ)',
          hi: 'मोती (सेवक का नाम)',
          en: 'Moti (Pearl - the devotee\'s name)',
        },
      },
      {
        word: 'ਜੇਵਰੀ / जेवरी',
        meaning: {
          pb: 'ਰੱਸੀ, ਹੁਕਮ ਦੀ ਡोरी',
          hi: 'रस्सी, आज्ञा की डोर',
          en: 'Leash / divine will',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਪ੍ਰਮਾਤਮਾ ਦੇ ਦਰ ਦਾ ਵਫ਼ਾਦਾਰ ਕੁੱਤਾ ਹਾਂ, ਮੇਰਾ ਨਾਮ \'ਮੋਤੀ\' ਹੈ। ਮੇਰੇ ਗਲ ਵਿੱਚ ਮਾਲਕ (ਪ੍ਰਭੂ) ਨੇ ਹੁਕਮ ਦੀ ਰੱਸੀ ਪਾਈ ਹੋਈ ਹੈ, ਮਾਲਕ ਜਿਧਰ ਵੀ ਖਿੱਚਦਾ ਹੈ, ਮੈਂ ਉੱਧਰ ਹੀ ਜਾਂਦਾ ਹਾਂ॥ ੭੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मैं परमात्मा के द्वार का वफादार कुत्ता हूँ, मेरा नाम \'मोती\' है। मेरे गले में मालिक (प्रभु) ने आज्ञा की डोरी (रस्सी) डाली हुई है, मालिक जिधर भी खींचता है, मैं उधर ही जाता हूँ॥ ७४॥',
      en: 'Satguru Kabir Saheb proclaims: I am the faithful dog of the Lord\'s threshold, and my name is "Moti" (Pearl). Around my neck is the leash of His divine will; wherever He pulls me, thither I go. ||74||',
    },
    chintan: {
      pb: 'ਭਗਤ ਆਪਣੇ ਮਾਲਕ (ਪ੍ਰਭੂ) ਦੀ ਰਜ਼ਾ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰਾਜ਼ੀ ਰਹਿੰਦਾ ਹੈ। ਆਪਣੀ ਕੋਈ ਇੱਛਾ ਨਹੀਂ ਹੁੰਦੀ।',
      hi: 'भक्त अपने मालिक की रजा में पूर्णतः संतुष्ट रहता है। उसकी अपनी कोई पृथक इच्छा नहीं होती।',
      en: 'The true devotee rests entirely in the divine will, possessing no separate egoistic desire.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਹੁਕਮ ਅਤੇ ਰਜ਼ਾ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਪਰਮ ਧਰਮ ਮੰਨੋ।',
      hi: 'प्रभु के आदेश और रजा को अपने जीवन का परम धर्म मानें।',
      en: 'Embrace the divine command as the supreme law of your life.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਇੱਛਾ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਇੱਛਾ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਲੀਨ ਕਰ ਦਿਓ।',
      hi: 'अपनी इच्छा को प्रभु की इच्छा में पूर्ण रूप से विलीन कर दें।',
      en: 'Dissolve your personal will entirely into the divine Ocean.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 75 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-75',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੫: ਜਪਨੀ ਕਾਠ ਕੀ (ਬਾਹਰੀ ਦਿਖਾਵਾ)',
      hi: 'सलोक ७५: जपनी काठ की (बाहरी दिखावा)',
      en: 'Salok 75: What Use is a Wooden Rosary If the Heart Forgets Ram?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਪਨੀ ਕਾਠ ਕੀ ਕਿਆ ਦਿਖਲਾਵਹਿ ਲੋਇ ॥',
      'ਹਿਰਦੈ ਰਾਮੁ ਨ ਚੇਤਹੀ ਇਹ ਜਪਨੀ ਕਿਆ ਹੋਇ ॥੭੫॥',
    ],
    moolDevanagari: [
      'कबीर जपनी काठ की किआ दिखलावहि लोइ ॥',
      'हिरदै रामु न चेतही इह जपनी किआ होइ ॥७५॥',
    ],
    moolRoman: [
      'Kabīr japnī kāṭh kī kiā dikhlāvahi loi.',
      'Hirdai rām na chetahī ih japnī kiā hoi. ||75||',
    ],
    shabdarth: [
      {
        word: 'ਜਪਨੀ ਕਾਠ ਕੀ / जपनी काठ की',
        meaning: {
          pb: 'ਲੱਕੜੀ ਜਾਂ ਤੁਲਸੀ ਦੀ ਮਾਲਾ',
          hi: 'लकड़ी या तुलसी की जप-माला',
          en: 'Wooden rosary beads',
        },
      },
      {
        word: 'ਲੋਇ / लोइ',
        meaning: {
          pb: 'ਸੰਸਾਰ ਨੂੰ, ਲੋਕਾਂ ਨੂੰ',
          hi: 'संसार को, दुनिया को दिखाने के लिए',
          en: 'To the world / public display',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਲੱਕੜੀ (ਤुलसी) ਦੀ ਮਾਲਾ ਹੱਥ ਵਿੱਚ ਫੜ ਕੇ ਸੰਸਾਰ ਨੂੰ ਕੀ ਦਿਖਾਉਂਦਾ ਹੈਂ? ਜੇ ਤੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਨੂੰ ਯਾਦ ਨਹੀਂ ਕਰਦਾ, ਤਾਂ ਇਸ ਮਾਲਾ ਨਾਲ ਕੀ ਲਾਭ ਹੋਵੇਗਾ? (ਬਾਹਰੀ ਦਿਖਾਵੇ ਦਾ ਕੋਈ ਮੁੱਲ ਨਹੀਂ)॥ ੭੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- लकड़ी की माला हाथ में लेकर संसार को क्या दिखा रहा है? यदि तू अपने हृदय में भगवान का स्मरण नहीं करता, तो इस माला से क्या लाभ होगा? (बाहरी पाखंड व्यर्थ है)॥ ७५॥',
      en: 'Satguru Kabir Saheb proclaims: Why display a wooden rosary to the world? If you do not remember the Lord within your heart, of what use is this rosary? (External pretense is worthless). ||75||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਭਗਤੀ ਹਿਰਦੇ ਦੀ ਸ਼ੁੱਧਤਾ ਨਾਲ ਹੈ, ਨਾ ਕਿ ਬਾਹਰੀ ਮਾਲਾ ਫੇਰਨ ਦੇ ਪਾਖੰਡ ਨਾਲ।',
      hi: 'प्रभु भक्ति हृदय की निर्मलता से है, न कि बाह्य माला फेरने के पाखंड से।',
      en: 'True devotion dwells in purity of heart, not in public ostentation of rosary beads.',
    },
    acharana: {
      pb: 'ਪਾਖੰਡ ਅਤੇ ਦਿਖਾਵੇ ਨੂੰ ਛੱਡ ਕੇ ਅੰਦਰੋਂ ਸੱਚੇ ਮਨ ਨਾਲ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'पाखंड और दिखावे को त्यागकर सच्चे मन से आंतरिक सिमरन करें।',
      en: 'Forsaking hypocrisy, cultivate sincere inner remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਮਾਲਾ ਬਣਾ ਕੇ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੋ।',
      hi: 'अपने मन को ही माला बनाकर प्रभु के चरणों से जोड़ें।',
      en: 'Make your mind the rosary, uniting your consciousness with the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 76 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-76',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੬: ਬਿਰਹੁ ਭੁਯੰਗਮੁ ਮਨਿ ਬਸੈ (ਪ੍ਰਭੂ ਵਿਛੋੜੇ ਦੀ ਤੜਪ)',
      hi: 'सलोक ७६: बिरहु भुयंगमु मनि बसै (प्रभु वियोग की तड़प)',
      en: 'Salok 76: The Serpent of Divine Separation Dwells in the Mind',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬਿਰਹੁ ਭੁਯੰਗਮੁ ਮਨਿ ਬਸੈ ਮੰਤੁ ਨ ਮਾਨੈ ਕੋਇ ॥',
      'ਰਾਮ ਬਿਓਗੀ ਨਾ ਜੀਐ ਜੀਐ ਤ ਬਉਰਾ ਹੋਇ ॥੭੬॥',
    ],
    moolDevanagari: [
      'कबीर बिरहु भुयंगमु मनि बसै मंतु न मानै कोई ॥',
      'राम बियोगी ना जीए जीए त बउरा होइ ॥७६॥',
    ],
    moolRoman: [
      'Kabīr birah bhuyangam man basai mant na mānai koi.',
      'Rām biogī nā jīai jīai ta baurā hoi. ||76||',
    ],
    shabdarth: [
      {
        word: 'ਬਿਰਹੁ ਭੁਯੰਗਮੁ / बिरहु भुयंगमु',
        meaning: {
          pb: 'ਵਿਛੋੜੇ ਦਾ ਸੱਪ (ਪ੍ਰਭੂ ਤੋਂ ਵੱਖ ਹੋਣ ਦੀ ਪੀੜ)',
          hi: 'वियोग रूपी सर्प (प्रभु से बिछड़ने की पीड़ा)',
          en: 'The serpent of separation / longing for the Lord',
        },
      },
      {
        word: 'ਮੰਤੁ ਨ ਮਾਨੈ / मंतु न मानै',
        meaning: {
          pb: 'ਕੋਈ ਮੰਤਰ ਅਸਰ ਨਹੀਂ ਕਰਦਾ',
          hi: 'कोई मंत्र या उपाय असर नहीं करता',
          en: 'Resists all spells or earthly remedies',
        },
      },
      {
        word: 'ਬਉਰਾ / बउरा',
        meaning: {
          pb: 'ਪਾਗਲ, ਮਸਤ (ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਿੱਚ ਦੀਵਾਨਾ)',
          hi: 'पागल, प्रेम में मत्त दीवाना',
          en: 'Intoxicated / maddened with divine love',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਭੂ-ਵਿਛੋੜੇ ਦਾ ਸੱਪ ਮਨ ਵਿੱਚ ਵੱਸ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਉੱਤੇ ਕੋਈ ਮੰਤਰ ਅਸਰ ਨਹੀਂ ਕਰਦਾ। ਰਾਮ ਦੇ ਵਿਜੋਗ ਦਾ ਮਾਰਿਆ ਪ੍ਰੇਮੀ ਜੀਉਂਦਾ ਨਹੀਂ ਰਹਿ ਸਕਦਾ, ਜੇ ਜਿਉਂਦਾ ਰਹੇ ਤਾਂ ਉਹ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਪਾਗਲ (ਦੀਵਾਨਾ) ਹੋ ਜਾਂਦਾ ਹੈ॥ ੭੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- प्रभु-वियोग रूपी सर्प मन में बस जाता है, जिस पर कोई मंत्र असर नहीं करता। भगवान के वियोग का मारा प्रेमी जीवित नहीं रह सकता, और यदि वह जीवित रहे भी तो वह प्रभु के प्रेम में दीवाना (पागल) हो जाता है॥ ७६॥',
      en: 'Satguru Kabir Saheb proclaims: The serpent of longing for the Lord dwells in the mind, yielding to no earthly spell or antidote. The lover separated from the Lord cannot survive; if he survives, he is utterly intoxicated and maddened with divine love. ||76||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਵਿਛੋੜੇ ਦੀ ਪੀੜ ਸਭ ਤੋਂ ਤੀਬਰ ਹੈ। ਜਦੋਂ ਇਹ ਲਗਦੀ ਹੈ ਤਾਂ ਸੰਸਾਰਕ ਸੁਖ ਫਿੱਕੇ ਪੈ ਜਾਂਦੇ ਹਨ।',
      hi: 'प्रभु के वियोग की पीड़ा सबसे तीव्र है। जब यह लगती है, तब सांसारिक सुख फीके पड़ जाते हैं।',
      en: 'The pain of separation from God is the most intense yearning, eclipsing all worldly pleasures.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਮਿਲਾਪ ਲਈ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚੀ ਤਾਂਘ ਅਤੇ ਪ੍ਰੇਮ ਪੈਦਾ ਕਰੋ।',
      hi: 'प्रभु मिलन के लिए हृदय में सच्ची तड़प और प्रेम उत्पन्न करें।',
      en: 'Cultivate a burning passion in your heart for union with the Beloved.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਦੀਵਾਨਾ ਬਣਾ ਕੇ ਸਮਰਪਿਤ ਹੋ ਜਾਓ।',
      hi: 'स्वयं को प्रभु के प्रेम में दीवाना बनाकर पूर्णतः समर्पित कर दें।',
      en: 'Surrender completely, intoxicated in the divine ecstasy of love.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 77 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-77',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੭: ਪਾਰਸ ਚੰਦਨੈ (ਸੰਤ ਸੰਗਤਿ ਦਾ ਪ੍ਰਭਾਵ)',
      hi: 'सलोक ७७: पारस चंदनै (संत संगति का प्रभाव)',
      en: 'Salok 77: Touchstone and Sandalwood Transmute Iron and Wood',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਰਸ ਚੰਦਨੈ ਤਿਨ੍ਹ ਹੈ ਏਕ ਸੁਗੰਧ ॥',
      'ਤਿਹ ਮਿਲਿ ਤੇਊ ਊਤਮ ਭਏ ਲੋਹ ਕਾਠ ਨਿਰਗੰਧ ॥੭੭॥',
    ],
    moolDevanagari: [
      'कबीर पारस चंदनै तिन्ह है एक सुगंध ॥',
      'तिह मिलि तेऊ ऊतम भए लोह काठ निरगंध ॥७७॥',
    ],
    moolRoman: [
      'Kabīr pāras chandanai tinh hai ek sugand.',
      'Tih mili teū ūtam bhae loh kāṭh nirgand. ||77||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਰਸ / पारस',
        meaning: {
          pb: 'ਲੋਹੇ ਨੂੰ ਸੋਨਾ ਬਣਾਉਣ ਵਾਲਾ ਪੱਥਰ',
          hi: 'लोहे को सोना बनाने वाला स्पर्श-मणि',
          en: 'Touchstone (alchemical philosopher\'s stone)',
        },
      },
      {
        word: 'ਚੰਦਨੈ / चंदनै',
        meaning: {
          pb: 'ਚੰਦਨ ਦਾ ਰੁੱਖ (ਜੋ ਸੁਗੰਧੀ ਦਿੰਦਾ ਹੈ)',
          hi: 'चंदन का वृक्ष (सुगंधित पेड़)',
          en: 'Sandalwood tree',
        },
      },
      {
        word: 'ਨਿਰਗੰਧ / निरगंध',
        meaning: {
          pb: 'ਬਿਨਾਂ ਸੁਗੰਧ ਵਾਲੀ (ਸਾਧਾਰਨ ਲੱਕੜ)',
          hi: 'बिना गंध वाली साधारण लकड़ी',
          en: 'Odorless / devoid of fragrance',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਪਾਰਸ ਅਤੇ ਚੰਦਨ ਵਿੱਚ ਅਜਿਹਾ ਪ੍ਰਭਾਵੀ ਗੁਣ ਹੈ; ਉਨ੍ਹਾਂ ਦੇ ਮਿਲਣ ਨਾਲ (ਨਿਰਗੰਧ) ਲੋਹਾ (ਸੋਨਾ ਬਣ ਕੇ) ਅਤੇ (ਬਿਨਾਂ ਸੁਗੰਧ ਵਾਲੀ) ਲੱਕੜ (ਸੁਗੰਧ ਵਾਲੀ ਬਣ ਕੇ) ਉੱਤਮ ਹੋ ਜਾਂਦੀ ਹੈ। ਇਵੇਂ ਹੀ ਪੂਰਨ ਗੁਰੂ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਮਨੁੱਖ ਨੂੰ ਪਵਿੱਤਰ ਕਰ ਦਿੰਦੀ ਹੈ॥ ੭੭॥',
      hi: 'हे कबीर! पारस और चंदन में विलक्षण गुण है; उनके स्पर्श से गंधहीन लोहा (सोना बनकर) और साधारण लकड़ी (सुगंधित बनकर) श्रेष्ठ हो जाती है। इसी प्रकार पूर्ण सतगुरु और संतों की संगति साधारण जीव को उत्तम बना देती है॥ ७७॥',
      en: 'O Kabir, the touchstone and sandalwood possess wondrous transforming power; by their contact, odorless iron becomes gold and odorless wood becomes fragrant. In the same way, the company of saints transforms ordinary mortals into divine beings. ||77||',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਅਤੇ ਸਤਿਗੁਰੂ ਦੀ ਸੰਗਤ ਪਾਰਸ ਅਤੇ ਚੰਦਨ ਵਰਗੀ ਹੈ, ਜੋ ਅਗਿਆਨੀ ਜੀਵ ਨੂੰ ਗਿਆਨਵਾਨ ਅਤੇ ਪਵਿੱਤਰ ਬਣਾ ਦਿੰਦੀ ਹੈ।',
      hi: 'संतों और सतगुरु की संगति पारस और चंदन के समान है, जो अज्ञानी जीव को ज्ञानी और पवित्र बना देती है।',
      en: 'The company of saints and the Satguru is like the touchstone and sandalwood, elevating ordinary souls to divine perfection.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤ ਤਿਆਗ ਕੇ ਸਦਾ ਸਤਿਗੁਰੂ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਰਹੋ।',
      hi: 'कुसंगति का त्याग कर सदैव सतगुरु और संतों की संगति में निवास करें।',
      en: 'Forsaking toxic company, dwell eternally in the purifying presence of saints.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਹੋ ਕੇ ਆਪਣਾ ਜੀਵਨ ਸੋਨਾ ਬਣਾ ਲਓ।',
      hi: 'पूर्ण सतगुरु के चरणों में समर्पित होकर अपने जीवन को स्वर्णिम बनाएं।',
      en: 'Surrender at the Lotus Feet of the Master to transform your life into pure gold.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 78 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-78',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੮: ਜਮ ਕਾ ਡੇਂਗਾ ਬੁਰਾ ਹੈ (ਸਾਧੂ ਸੰਗਤਿ ਰੱਖਿਆ)',
      hi: 'सलोक ७८: जम का डेंगा बुरा है (साधु संगति रक्षा)',
      en: 'Salok 78: The Blow of Death is Cruel; Saved by the Saint\'s Refuge',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਮ ਕਾ ਡੇਂਗਾ ਬੁਰਾ ਹੈ ਓਹ ਨਹੀ ਸਹਿਆ ਜਾਇ ॥',
      'ਏਕੁ ਜੁ ਸਾਧੂ ਮੋਹਿ ਮਿਲਿਓ ਤਿਨ੍ਹਿ ਲੀਆ ਅੰਚਲਿ ਲਾਇ ॥੭੮॥',
    ],
    moolDevanagari: [
      'कबीर जम का डेंगा बुरा है ओह नही सहिया जाइ ॥',
      'एकु जु साधू मोहि मिलिओ तिन्ह लीआ अंचलि लाइ ॥७८॥',
    ],
    moolRoman: [
      'Kabīr jam kā ḍengā burā hai oh nahī sahiā jāi.',
      'Ek ju sādhū mohi milio tinh līā anchal lāi. ||78||',
    ],
    shabdarth: [
      {
        word: 'ਡੇਂਗਾ / डेंगा',
        meaning: {
          pb: 'ਸੋਟਾ, ਡੰਡਾ (ਕਾਲ ਦਾ ਪ੍ਰਕੋਪ)',
          hi: 'डंडा, सोंटा (काल का प्रहार)',
          en: 'Blow or staff of Death',
        },
      },
      {
        word: 'ਅੰਚਲਿ ਲਾਇ / अंचलि लाइ',
        meaning: {
          pb: 'ਪੱਲੇ ਨਾਲ ਲਾਉਣਾ, ਆਪਣੀ ਸ਼ਰਨ ਵਿੱਚ ਰੱਖਣਾ',
          hi: 'पल्ले से लगाना, शरण में लेना',
          en: 'Taking under one\'s protective hem / shelter',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕਾਲ (ਜਮ) ਦਾ ਸੋਟਾ ਬਹੁਤ ਭਿਆਨਕ ਹੈ, ਉਹ ਸਹਾਰਿਆ ਨਹੀਂ ਜਾਂਦਾ। ਪਰ ਜਦੋਂ ਦਾ ਮੈਨੂੰ ਪ੍ਰਭੂ ਦਾ ਸੰਤ (ਸਾਧੂ) ਮਿਲਿਆ ਹੈ, ਉਸ ਨੇ ਮੈਨੂੰ ਆਪਣੇ ਪੱਲੇ ਨਾਲ ਲਾ ਲਿਆ ਹੈ (ਪ੍ਰਭੂ ਦੀ ਸ਼ਰਨ ਬਖਸ਼ੀ ਹੈ), ਜਿਸ ਨਾਲ ਮੈਂ ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਬਚ ਗਿਆ ਹਾਂ॥ ੭੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- काल (यम) का डंडा बहुत बुरा है, वह सहा नहीं जाता। परंतु जब से मुझे संत (साधु) मिला है, उसने मुझे अपने आंचल से लगा लिया है (प्रभु की शरण दी है), जिससे मैं काल के भय से मुक्त हो गया हूँ॥ ७८॥',
      en: 'Satguru Kabir Saheb proclaims: The heavy staff of Death is cruel and unbearable. But since I met a holy Saint, he has taken me under the protective hem of his garment, saving me from all fear of mortality. ||78||',
    },
    chintan: {
      pb: 'ਸਤਿਗੁਰੂ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸ਼ਰਨ ਹੀ ਜੀਵ ਨੂੰ ਮੌਤ ਅਤੇ ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਕਰਦੀ ਹੈ।',
      hi: 'सतगुरु और संतों की शरण ही जीव को मृत्यु और काल के भय से मुक्त करती है।',
      en: 'The refuge of the Satguru and saints alone liberates the soul from all dread of death.',
    },
    acharana: {
      pb: 'ਕਾਲ ਦੇ ਭੈ ਤੋਂ ਬਚਣ ਲਈ ਪੂਰਨ ਸੰਤਾਂ ਦੀ ਸ਼ਰਨ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'काल के भय से मुक्ति पाने हेतु पूर्ण संतों की शरण ग्रहण करें।',
      en: 'Seek the shelter of true saints to transcend mortality.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸ਼ਰਧਾ ਨਾਲ ਆਪਣੇ ਆਪ ਨੂੰ ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'पूर्ण श्रद्धा के साथ स्वयं को गुरु चरणों में समर्पित कर दें।',
      en: 'Surrender yourself with total faith at the feet of the Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 79 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-79',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੭੯: ਬੈਦੁ ਕਹੈ ਹਉ ਹੀ ਭਲਾ (ਜੀਵਨ ਪ੍ਰਭੂ ਅਧੀਨ)',
      hi: 'सलोक ७९: बैदु कहै हउ ही भला (जीवन प्रभु अधीन)',
      en: 'Salok 79: The Physician Boasts, But Life Belongs to God',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬੈਦੁ ਕਹੈ ਹਉ ਹੀ ਭਲਾ ਦਾਰੂ ਮੇਰੈ ਵਸਿ ॥',
      'ਇਹ ਤਉ ਬਸਤੁ ਗੁਪਾਲ ਕੀ ਜਬ ਭਾਵੈ ਲੇਇ ਖਸਿ ॥੭੯॥',
    ],
    moolDevanagari: [
      'कबीर बैदु कहै हउ ही भला दारू मेरै वसि ॥',
      'इह तउ बसतु गुपाल की जब भावै लेइ खसि ॥७९॥',
    ],
    moolRoman: [
      'Kabīr baid kahai hau hī bhalā dārū merai vasi.',
      'Ih tau basat gupāl kī jab bhāvai lei khasi. ||79||',
    ],
    shabdarth: [
      {
        word: 'ਬੈਦੁ / बैदु',
        meaning: {
          pb: 'ਹਕੀਮ, ਡਾਕਟਰ (ਅਭਿਮਾਨੀ ਵੈਦ)',
          hi: 'वैद्य, चिकित्सक (अहमकारी)',
          en: 'Physician / arrogant doctor',
        },
      },
      {
        word: 'ਖਸਿ / खसि',
        meaning: {
          pb: 'ਖੋਹ ਲੈਣਾ, ਵਾਪਸ ਲੈ ਲੈਣਾ',
          hi: 'छीन लेना, वापस ले लेना',
          en: 'Snatch away / reclaim',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਵੈਦ (ਅਭਿਮਾਨੀ ਮਨੁੱਖ) ਆਖਦਾ ਹੈ ਕਿ ਮੈਂ ਬੜਾ ਸਿਆਣਾ ਹਾਂ ਅਤੇ ਸਭ ਰੋਗਾਂ ਦਾ ਇਲਾਜ ਮੇਰੇ ਵੱਸ ਵਿੱਚ ਹੈ, ਪਰ ਅਸਲ ਵਿੱਚ ਇਹ ਜੀਵਨ-ਰੂਪ ਵਸਤੂ ਤਾਂ ਗੋਪਾਲ (ਪ੍ਰਭੂ) ਦੀ ਦਿੱਤੀ ਹੋਈ ਹੈ, ਜਦੋਂ ਉਹ ਚਾਹੇ ਇਸ ਨੂੰ ਖੋਹ ਲੈਂਦਾ ਹੈ॥ ੭੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- वैद्य (अहमकारी मनुष्य) कहता है कि मैं बहुत ज्ञानी हूँ और हर रोग का इलाज मेरे वश में है, किंतु वास्तव में यह जीवन-रूपी वस्तु तो गोपाल (परमात्मा) की दी हुई है, जब वह चाहे इसे वापस छीन लेता है॥ ७९॥',
      en: 'Satguru Kabir Saheb proclaims: The arrogant physician boasts that he is wise and that cures lie in his hands. But in truth, this life belongs to the Lord Gopal; whenever He pleases, He snatches it away. ||79||',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਅਤੇ ਮੌਤ ਕੇਵਲ ਪ੍ਰਮਾਤਮਾ ਦੇ ਹੱਥ ਵਿੱਚ ਹੈ। ਮਨੁੱਖ ਦਾ ਹੰਕਾਰ ਵਿਅਰਥ ਹੈ।',
      hi: 'जीवन और मृत्यु केवल परमात्मा के हाथ में है। मनुष्य का अहंकार सर्वथा व्यर्थ है।',
      en: 'Life and death rest solely in divine hands. Human arrogance is utterly vain.',
    },
    acharana: {
      pb: 'ਅਭਿਮਾਨ ਨੂੰ ਤਿਆਗ ਕੇ ਹਰ ਸਾਹ ਲਈ ਪ੍ਰਭੂ ਦਾ ਸ਼ੁਕਰਾਨਾ ਕਰੋ।',
      hi: 'अभिमान को त्यागकर प्रत्येक श्वास के लिए प्रभु का شکرਾਨा करें।',
      en: 'Shedding pride, offer gratitude to the Lord for every breath.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਜਿੰਦ ਅਤੇ ਪ੍ਰਾਨ ਪ੍ਰਭੂ ਦੀ ਅਮਾਨਤ ਸਮਝ ਕੇ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने प्राणों को प्रभु की अमानत मानकर पूर्णतः समर्पित करें।',
      en: 'Trust your very breath as a sacred trust from the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 80 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-80',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੦: ਨਉਬਤਿ ਆਪਨੀ ਦਿਨ ਦਸ (ਜੀਵਨ ਦੀ ਸੰਖੇਪਤਾ)',
      hi: 'सलोक ८०: नउबति आपनी दिन दस (जीवन की संक्षिप्तता)',
      en: 'Salok 80: Beat Your Drum for Ten Days; Life is Like Boats Meeting on a River',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਉਬਤਿ ਆਪਨੀ ਦਿਨ ਦਸ ਲੇਹੁ ਬਜਾਇ ॥',
      'ਨਦੀ ਨਾਵ ਸੰਜੋਗ ਜਿਉ ਬਹੁਰਿ ਨ ਮਿਲਹੈ ਆਇ ॥੮੦॥',
    ],
    moolDevanagari: [
      'कबीर नउबति आपनी दिन दस लेहु बजाइ ॥',
      'नदी नाव संजोग जिउ बहुरि न मिलhai आइ ॥८०॥',
    ],
    moolRoman: [
      'Kabīr naubat āpanī din das lehu bajāi.',
      'Nadī nāv sanjog jiu bahur na milhai āi. ||80||',
    ],
    shabdarth: [
      {
        word: 'ਨਉਬਤਿ / नउबति',
        meaning: {
          pb: 'ਨਗਾਰਾ, ਸ਼ਾਨ, ਜੀਵਨ ਦਾ ਮਾਣ',
          hi: 'नगाड़ा, शान, जीवन का डंका',
          en: 'Drumbeat / fanfare of worldly life',
        },
      },
      {
        word: 'ਸੰਜੋਗ / संजोग',
        meaning: {
          pb: 'ਮੇਲ, ਸੰਜੋਗ',
          hi: 'मेल, संयोग',
          en: 'Meeting / transient junction',
        },
      },
      {
        word: 'ਬਹੁਰਿ / बहुरि',
        meaning: {
          pb: 'ਫਿਰ ਕਦੇ, ਦੁਬਾਰਾ',
          hi: 'फिर कभी, दोबारा',
          en: 'Again / henceforth',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਆਪਣੇ ਜੀਵਨ ਦਾ ਨਗਾਰਾ (ਮਾਣ-ਸ਼ਾਨ) ਕੁਝ ਦਿਨਾਂ (ਚਾਰ ਦਿਨ) ਲਈ ਵਜਾ ਲੈ। ਜਿਵੇਂ ਨਦੀ ਵਿੱਚ ਬੇੜੀ ਦੇ ਮੁਸਾਫਰਾਂ ਦਾ ਮੇਲ ਹੁੰਦਾ ਹੈ ਅਤੇ ਪਾਰ ਉੱਤਰ ਕੇ ਉਹ ਮੁੜ ਨਹੀਂ ਮਿਲਦੇ, ਇਵੇਂ ਇਹ ਮਨੁੱਖਾ ਜਨਮ ਮੁੜ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੋਣਾ॥ ੮੦॥',
      hi: 'हे कबीर! अपने जीवन का नगाड़ा (शान-शौकत) कुछ दिनों के लिए बजा ले। जैसे नदी में नाव के यात्रियों का मेल होता है और पार उतरकर वे फिर कभी नहीं मिलते, वैसे ही यह मनुष्य जन्म दोबारा प्राप्त नहीं होगा॥ ८०॥',
      en: 'O Kabir, beat the drum of your worldly fanfare for a few brief days. Just as travelers meet on a boat crossing a river and never meet again after disembarking, so this human birth will not return. ||80||',
    },
    chintan: {
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਬਹੁਤ ਛੋਟਾ ਹੈ। ਇਸ ਨੂੰ ਮਾਇਆ ਦੇ ਹੰਕਾਰ ਵਿੱਚ ਗਵਾਉਣ ਦੀ ਬਜਾਏ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲਾਓ।',
      hi: 'मानव जीवन बहुत अल्प है। इसे माया के अहंकार में गंवाने के स्थान पर प्रभु भक्ति में सफल करें।',
      en: 'Human life is fleeting. Instead of squandering it in ego, invest it in divine devotion.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰੀ ਮਾਣ-ਸ਼ਾਨ ਨੂੰ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਆਧਾਰ ਬਣਾਓ।',
      hi: 'सांसारिक शान-शौकत को त्यागकर नाम सिमरन को जीवन का आधार बनाएं।',
      en: 'Forsaking transient fanfare, make divine remembrance your anchor.',
    },
    samarpan: {
      pb: 'ਜੀਵਨ ਦੇ ਹਰ ਪਲ ਨੂੰ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'जीवन के प्रत्येक पल को प्रभु चरणों में समर्पित करें।',
      en: 'Dedicate every fleeting moment of life to the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 81 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-81',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੧: ਸਾਤ ਸਮੁੰਦਹਿ ਮਸੁ ਕਰਉ (ਪ੍ਰਭੂ ਮਹਿਮਾ ਅਪਾਰ)',
      hi: 'सलोक ८१: सात समुंदहि मसु करउ (प्रभु महिमा अपार)',
      en: 'Salok 81: Seven Oceans of Ink Cannot Describe the Lord\'s Glory',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਤ ਸਮੁੰਦਹਿ ਮਸੁ ਕਰਉ ਕਲਮ ਕਰਉ ਬਨਰਾਇ ॥',
      'ਬਸੁਧਾ ਕਾਗਦੁ ਜਉ ਕਰਉ ਹਰਿ ਜਸੁ ਲਿਖن ਨ ਜਾਇ ॥੮੧॥',
    ],
    moolDevanagari: [
      'कबीर सात समुंदहि मसु करउ कलम करओ बनराइ ॥',
      'बसुधा कागदु जउ करउ हरि जसु लिखन न जाइ ॥८१॥',
    ],
    moolRoman: [
      'Kabīr sāt samundahi mas karau kalam karo banrāi.',
      'Basudhā kāgad jau karau har jas likhan na jāi. ||81||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਤ ਸਮੁੰਦਹਿ / सात समुंदहि',
        meaning: {
          pb: 'ਸੱਤ ਸਮੁੰਦਰਾਂ',
          hi: 'सातों समुद्रों',
          en: 'All seven oceans',
        },
      },
      {
        word: 'ਮਸੁ / मसु',
        meaning: {
          pb: 'ਸਿਆਹੀ',
          hi: 'स्याही',
          en: 'Ink',
        },
      },
      {
        word: 'ਬਨਰਾਇ / बनराइ',
        meaning: {
          pb: 'ਸਾਰੀ ਬਨਾਸਪਤੀ, ਜੰਗਲ',
          hi: 'समस्त वनस्पति, वृक्ष',
          en: 'All forests and trees',
        },
      },
      {
        word: 'ਬਸੁਧਾ / बसुधा',
        meaning: {
          pb: 'ਧਰਤੀ, ਪ੍ਰਿਥਵੀ',
          hi: 'धरती, पृथ्वी',
          en: 'Earth / globe',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇ ਮੈਂ ਸੱਤਾਂ ਸਮੁੰਦਰਾਂ ਦੇ ਪਾਣੀ ਦੀ ਸਿਆਹੀ ਬਣਾ ਲਵਾਂ, ਸਾਰੀ ਬਨਾਸਪਤੀ (ਜੰਗਲਾਂ) ਦੀਆਂ ਕਲਮਾਂ ਕਰ ਲਵਾਂ ਅਤੇ ਸਾਰੀ ਪ੍ਰਿਥਵੀ ਨੂੰ ਕਾਗਜ਼ ਬਣਾ ਲਵਾਂ, ਤਾਂ ਵੀ ਹਰੀ ਦਾ ਅੰਤਿਮ ਜੱਸ (ਮਹਿਮਾ) ਲਿਖਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ॥ ੮੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यदि मैं सातों समुद्रों के जल की स्याही बना लूँ, समस्त वनों (वृक्षों) की कलमें बना लूँ और संपूर्ण पृथ्वी को कागज बना लूँ, तब भी हरि का अंतहीन यश (महिमा) लिखा नहीं जा सकता॥ ८१॥',
      en: 'Satguru Kabir Saheb proclaims: If I were to turn all seven oceans into ink, fashion every tree in the forest into a quill, and use the entire earth as paper, still the infinite Glory of the Lord could never be fully written. ||81||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਮਹਿਮਾ ਅਤੇ ਗੁਣ ਅਪਾਰ ਹਨ। ਮਨੁੱਖੀ ਬੁੱਧੀ ਅਤੇ ਬਾਣੀ ਉਨ੍ਹਾਂ ਦਾ ਪਾਰਾਵਾਰ ਨਹੀਂ ਪਾ ਸਕਦੇ।',
      hi: 'प्रभु की महिमा और गुण अनंत हैं। मानव बुद्धि और वाणी उनका पार नहीं पा सकती।',
      en: 'The Lord\'s majesty is boundless. Human intellect and speech can never fully fathom it.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਅਪਾਰ ਮਹਿਮਾ ਨੂੰ ਮੱਥਾ ਟੇਕ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਸ਼ਰਧਾ ਅਤੇ ਵਿਸਮਾਦ ਮਾਣੋ।',
      hi: 'प्रभु की अनंत महिमा के आगे नतमस्तक होकर हृदय में विस्मय और श्रद्धा भाव रखें।',
      en: 'Bow before the infinite majesty of the Divine in silent awe and devotion.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੋਲੀ ਅਤੇ ਸਾਹਾਂ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਸਿਫ਼ਤ-ਸਲਾਹ ਲਈ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी वाणी और श्वासों को प्रभु की सिफत-सलाह के लिए समर्पित करें।',
      en: 'Dedicate your speech and breath entirely to singing divine praises.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 82 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-82',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੨: ਜਾਤਿ ਜੁਲਾਹਾ ਕਿਆ ਕਰੈ (ਬ੍ਰਹਮ ਗਿਆਨ ਤੇ ਜਾਤ)',
      hi: 'सलोक ८२: जाति जुलाहा किआ करै (ब्रह्म ज्ञान व जाति)',
      en: 'Salok 82: What Can Caste Do When God Dwells in the Heart?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਾਤਿ ਜੁਲਾਹਾ ਕਿਆ ਕਰੈ ਹਿਰਦੈ ਬਸੇ ਗੁਪਾਲ ॥',
      'ਕਬੀਰ ਰਮਈਆ ਕੰਠਿ ਮਿਲੁ ਚੂਕਹਿ ਸਰਬ ਜੰਜਾਲ ॥੮੨॥',
    ],
    moolDevanagari: [
      'कबीर जाति जुलाहा किआ करै हिरदै बसै गुपाल ॥',
      'कबीर रमईआ कंठि मिलु चूकहि सरब जंजाल ॥८२॥',
    ],
    moolRoman: [
      'Kabīr jāt julāhā kiā karai hirdai basai gupāl.',
      'Kabīr rameīā kaṇṭh mil chūkahī sarab janjāl. ||82||',
    ],
    shabdarth: [
      {
        word: 'ਜਾਤਿ ਜੁਲਾਹਾ / जाति जुलाहा',
        meaning: {
          pb: 'ਜੁਲਾਹੇ ਦੀ ਕਥਿਤ ਨੀਵੀਂ ਜਾਤੀ',
          hi: 'जुलाहे की तथाकथित नीची जाति',
          en: 'The weaver caste (perceived as low in society)',
        },
      },
      {
        word: 'ਕੰਠਿ ਮਿਲੁ / कंठि मिलु',
        meaning: {
          pb: 'ਗਲ ਨਾਲ ਮਿਲਣਾ, ਅਭੇਦ ਹੋਣਾ',
          hi: 'गले मिलना, प्रभु से एक होना',
          en: 'Embrace closely / merge in union',
        },
      },
      {
        word: 'ਚੂਕਹਿ / चूकहि',
        meaning: {
          pb: 'ਮੁੱਕ ਜਾਂਦੇ ਹਨ, ਖ਼ਤਮ ਹੋ ਜਾਂਦੇ ਹਨ',
          hi: 'समाप्त हो जाते हैं',
          en: 'Are shattered and dissolved',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੁਲਾਹੇ ਦੀ ਨੀਵੀਂ ਜਾਤ ਕੀ ਕਰ ਸਕਦੀ ਹੈ (ਕੋਈ ਨੁਕਸਾਨ ਨਹੀਂ ਕਰ ਸਕਦੀ), ਜਦੋਂ ਕਿ ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਗੋਪਾਲ ਵੱਸਦਾ ਹੈ। ਹੇ ਭਾਈ! ਪ੍ਰਭੂ ਰਮਈਆ ਨੂੰ ਗਲ ਨਾਲ ਲਾਓ (ਪ੍ਰੇਮ ਕਰੋ), ਜਿਸ ਨਾਲ ਸਾਰੇ ਜੰਜਾਲ ਕੱਟੇ ਜਾਂਦੇ ਹਨ॥ ੮੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जुलाहे की नीची जाति क्या बिगाड़ सकती है, जब मेरे हृदय में भगवान गोपाल का वास है। हे भाई! उस सर्वव्यापक प्रभु को गले लगाओ (प्रेम करो), जिससे सारे सांसारिक जंजाल समाप्त हो जाते हैं॥ ८२॥',
      en: 'Satguru Kabir Saheb proclaims: What can the weaver caste matter when God Gopal dwells within my heart? O brother, embrace the Lord closely in love, and all worldly bonds and traps are instantly dissolved. ||82||',
    },
    chintan: {
      pb: 'ਬ੍ਰਹਮ ਗਿਆਨ ਅਤੇ ਪ੍ਰਭੂ ਦੀ ਪ੍ਰਾਪਤੀ ਅੱਗੇ ਜਾਤ-ਪਾਤ ਦੇ ਸਾਰੇ ਬੰਧਨ ਅਰਥਹੀਣ ਹੋ ਜਾਂਦੇ ਹਨ।',
      hi: 'ब्रह्मज्ञान और प्रभु की प्राप्ति के समक्ष जाति-पाति के सभी बंधन अर्थहीन हो जाते हैं।',
      en: 'Before divine wisdom and God-realization, all distinctions of caste become meaningless.',
    },
    acharana: {
      pb: 'ਜਾਤੀ ਅਭਿਮਾਨ ਨੂੰ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'जातिगत अभिमान को त्यागकर प्रभु के प्रेम में लीन हों।',
      en: 'Forsaking pride of birth, immerse yourself entirely in divine love.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਸੌਂਪ ਕੇ ਸਾਰੇ ਜੰਜਾਲਾਂ ਤੋਂ ਮੁਕਤ ਹੋਵੋ।',
      hi: 'स्वयं को प्रभु की शरण में सौंपकर समस्त बंधनों से मुक्त हो जाएं।',
      en: 'Surrender to the Lord and transcend all entangling bonds.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 83 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-83',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੩: ਮੰਦਰੁ ਦੇਇ ਜਰਾਇ (ਵਿਕਾਰਾਂ ਦਾ ਨਾਸ਼)',
      hi: 'सलोक ८३: मंदरु देइ जराइ (विकारों का नाश)',
      en: 'Salok 83: Who Burns the Body-Temple and Slays the Five Vices?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਕੋ ਨਹੀ ਮੰਦਰੁ ਦੇਇ ਜਰਾਇ ॥',
      'ਪਾਂਚਓ ਲਰਿਕੇ ਮਾਰਿ ਕੈ ਰਹੈ ਰਾਮ ਲਿਉ ਲਾਇ ॥੮੩॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा को नही मंदरु देइ जराइ ॥',
      'पांचओ लरिके मारि कै रहै राम लिउ लाइ ॥८३॥',
    ],
    moolRoman: [
      'Kabīr aisā ko nahī mandar dei jarāi.',
      'Pānchao larike māri kai rahai rām liu lāi. ||83||',
    ],
    shabdarth: [
      {
        word: 'ਮੰਦਰੁ / मंदरु',
        meaning: {
          pb: 'ਸਰੀਰ-ਰੂਪੀ ਮੰਦਰ (ਦੇਹ ਦਾ ਮੋਹ)',
          hi: 'शरीर-रूपी मंदिर (देह का मोह)',
          en: 'The temple of the body (attachment to the flesh)',
        },
      },
      {
        word: 'ਪਾਂਚਓ ਲਰਿਕੇ / पांचओ लरिके',
        meaning: {
          pb: 'ਪੰਜ ਵਿਕਾਰ (ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ, ਹੰਕਾਰ)',
          hi: 'पंच विकार (काम, क्रोध, लोभ, मोह, अहंकार)',
          en: 'The five vices (lust, anger, greed, attachment, pride)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕੋਈ ਅਜਿਹਾ ਵਿਰਲਾ ਹੀ ਹੈ ਜਿਹੜਾ (ਦੇਹ ਦੇ ਮੋਹ ਰੂਪੀ) ਮੰਦਰ ਨੂੰ ਸਾੜ ਦੇਵੇ (ਮੋਹ ਤਿਆਗ ਦੇਵੇ) ਅਤੇ ਪੰਜਾਂ ਵਿਕਾਰ-ਰੂਪੀ ਲੜਕਿਆਂ ਨੂੰ ਮਾਰ ਕੇ ਪ੍ਰਮਾਤਮਾ ਨਾਲ ਲਿਵ ਜੋੜ ਲਵੇ॥ ੮੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- कोई ऐसा विरला ही है जो (देह के मोह-रूपी) मंदिर को जला दे (मोह त्याग दे) और पांचों विकार-रूपी लड़कों को मारकर भगवान से अपनी लिव (सुरति) जोड़ ले॥ ८३॥',
      en: 'Satguru Kabir Saheb proclaims: Rarely is there one who burns down the body-temple of attachment, slays the five unruly sons (vices), and fixes his consciousness in loving communion with the Lord. ||83||',
    },
    chintan: {
      pb: 'ਪੰਜਾਂ ਵਿਕਾਰਾਂ ਨੂੰ ਕਾਬੂ ਕੀਤੇ ਬਿਨਾਂ ਅਤੇ ਦੇਹ ਦਾ ਮੋਹ ਛੱਡੇ ਬਿਨਾਂ ਪ੍ਰਭੂ ਨਾਲ ਲਿਵ ਨਹੀਂ ਲੱਗ ਸਕਦੀ।',
      hi: 'पंच विकारों को वश में किए बिना और देह का मोह छोड़े बिना प्रभु से सुरति नहीं जुड़ सकती।',
      en: 'Without conquering the five vices and forsaking bodily attachment, communion with God remains impossible.',
    },
    acharana: {
      pb: 'ਸਾਧਨਾ ਅਤੇ ਸਿਮਰਨ ਦੁਆਰਾ ਪੰਜਾਂ ਵਿਕਾਰਾਂ ਨੂੰ ਪਰਾਜਿਤ ਕਰੋ।',
      hi: 'साधना और सिमरन द्वारा पंच विकारों को पराजित करें।',
      en: 'Vanquish the five vices through intense spiritual discipline.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ-ਮਨ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਪਵਿੱਤਰ ਹੋਵੋ।',
      hi: 'अपना तन-मन प्रभु चरणों में समर्पित कर पवित्र हो जाएं।',
      en: 'Purify your being by surrendering completely at the Lord\'s feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 84 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-84',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੪: ਐਸਾ ਕੋ ਨਹੀ ਇਹੁ ਤਨੁ ਦੇਵੈ ਫੁਕਿ (ਸਰੀਰ ਮੋਹ ਤਿਆਗ)',
      hi: 'सलोक ८४: ऐसा को नही इहु तनु देवै फुकि (शरीर मोह त्याग)',
      en: 'Salok 84: Who Surrenders Body Attachment? The World Slumbers On',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਕੋ ਨਹੀ ਇਹੁ ਤਨੁ ਦੇਵੈ ਫੁਕਿ ॥',
      'ਅੰਧਾ ਲੋਗ ਨ ਜਾਨਈ ਰਹਿਓ ਕਬੀਰਾ ਬੁਕਿ ॥੮੪॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा को नही इहु तनु देवै फुकि ॥',
      'अंधा लोग न जानई रहिओ कबीरा बुकि ॥८४॥',
    ],
    moolRoman: [
      'Kabīr aisā ko nahī ih tan devai fuki.',
      'Andhā log na jānaī rahio kabīrā buki. ||84||',
    ],
    shabdarth: [
      {
        word: 'ਤਨੁ ਦੇਵੈ ਫੁਕਿ / तनु देवै फुकि',
        meaning: {
          pb: 'ਸਰੀਰ ਦੇ ਮੋਹ ਨੂੰ ਸਾੜ ਦੇਣਾ',
          hi: 'शरीर के मोह व अहंकार को जला देना',
          en: 'Incinerate attachment to the physical body',
        },
      },
      {
        word: 'ਬੁਕਿ / बुकि',
        meaning: {
          pb: 'ਉੱਚੀ ਆਵਾਜ਼ ਵਿੱਚ ਪੁਕਾਰ ਕੇ, ਹੋਕਾ ਦੇ ਕੇ',
          hi: 'उच्च स्वर में पुकार कर, घोषणा करके',
          en: 'Crying out aloud / proclaiming',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕੋਈ ਅਜਿਹਾ ਵਿਰਲਾ ਹੀ ਹੈ ਜਿਹੜਾ ਇਸ ਸਰੀਰ ਦੇ ਮੋਹ ਨੂੰ (ਭਾਵ ਅਹੰਕਾਰ ਨੂੰ) ਸਾੜ ਦੇਵੇ। ਇਹ ਅੰ੍ਹੇ ਅਗਿਆਨੀ ਲੋਕ ਇਸ ਸੱਚ ਨੂੰ ਨਹੀਂ ਸਮਝਦੇ, ਭਾਵੇਂ ਕਬੀਰ ਉੱਚੀ ਆਵਾਜ਼ ਵਿੱਚ ਹੋਕਾ ਦੇ ਕੇ ਸਮਝਾ ਰਿਹਾ ਹੈ॥ ੮੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- कोई ऐसा विरला ही है जो इस शरीर के मोह को जला दे। यह अंधे संसारी लोग इस सत्य को नहीं जानते, यद्यपि कबीर उच्च स्वर में पुकार-पुकार कर यह बात कह रहा है॥ ८४॥',
      en: 'Satguru Kabir Saheb proclaims: Rarely is there one who incinerates attachment to this mortal frame. The blinded worldly people understand it not, though Kabir cries out aloud in proclamation. ||84||',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਜੀਵ ਸਰੀਰ ਅਤੇ ਮਾਇਆ ਦੇ ਮੋਹ ਵਿੱਚ ਅੰ੍ਹੇ ਹੋਏ ਹਨ। ਉਹ ਸੱਚੇ ਗਿਆਨ ਨੂੰ ਨਹੀਂ ਪਛਾਣਦੇ।',
      hi: 'संसार के लोग शरीर और माया के मोह में अंधे हो रहे हैं। वे शाश्वत सत्य को नहीं पहचानते।',
      en: 'The worldly masses are blinded by bodily and material attachment, ignoring eternal truth.',
    },
    acharana: {
      pb: 'ਸਰੀਰਕ ਮੋਹ ਨੂੰ ਛੱਡ ਕੇ ਆਤਮਿਕ ਜਾਗਰੂਕਤਾ ਨੂੰ ਅਪਣਾਓ।',
      hi: 'शारीरिक मोह को छोड़कर आत्मिक जागृति को जीवन में उतारें।',
      en: 'Forsaking bodily illusion, awaken to spiritual consciousness.',
    },
    samarpan: {
      pb: 'ਆਤਮਿਕ ਪ੍ਰਕਾਸ਼ ਦੀ ਪ੍ਰਾਪਤੀ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਧਾਰਨ ਕਰੋ।',
      hi: 'आत्मिक प्रकाश की प्राप्ति हेतु सतगुरु के वचनों को अपने हृदय में बसाएं।',
      en: 'Embrace the Master\'s words to attain inner illumination.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 85 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-85',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੫: ਸਤੀ ਪੁਕਾਰੈ ਚਿਹ ਚੜੀ (ਮ੍ਰਿਤਕ ਲੋਕ ਸੱਚ)',
      hi: 'सलोक ८५: सती पुकारै चिह चड़ी (मृतक लोक सत्य)',
      en: 'Salok 85: The Sati on the Pyre Proclaims the Ultimate Truth',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਤੀ ਪੁਕਾਰੈ ਚਿਹ ਚੜੀ ਸੁਨੁ ਹੋ ਬੀਰ ਮਸਾਨ ॥',
      'ਲੋਗੁ ਸਬਾਇਆ ਚਲਿ ਗਇਓ ਹਮ ਤੁਮ ਕਾਮੁ ਨਿਦਾਨ ॥੮੫॥',
    ],
    moolDevanagari: [
      'कबीर सती पुकारै चिह चड़ी सुनु हो बिर मसान ॥',
      'लोगु सबाइआ चलि गइओ हम तुम कामु निदान ॥८५॥',
    ],
    moolRoman: [
      'Kabīr satī pukarai cih chaṛī sun ho bīr masān.',
      'Log sabaiā chal gaio ham tum kām nidān. ||85||',
    ],
    shabdarth: [
      {
        word: 'ਚਿਹ ਚੜੀ / चिह चड़ी',
        meaning: {
          pb: 'ਚਿਖਾ ਉੱਤੇ ਚੜ੍ਹ ਕੇ',
          hi: 'चिता पर आरूढ़ होकर',
          en: 'Mounting the funeral pyre',
        },
      },
      {
        word: 'ਬੀਰ ਮਸਾਨ / बिर मसान',
        meaning: {
          pb: 'ਮਸਾਣਾਂ ਦਾ ਬੀਰ (ਮਰਨਹਾਰ ਜੀਵਾਂ ਨੂੰ ਸੁਚੇਤ ਕਰਨ ਵਾਲਾ ਪ੍ਰਤੀਕ)',
          hi: 'श्मशान का वीर (नश्वरता की याद दिलाने वाला प्रतीक)',
          en: 'Spirit of the cremation ground / symbol of mortality',
        },
      },
      {
        word: 'ਨਿਦਾਨ / निदान',
        meaning: {
          pb: 'ਅੰਤ ਨੂੰ, ਆਖਿਰਕਾਰ',
          hi: 'अंततः, आखिरकार',
          en: 'Ultimately / in the end',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਸਤੀ ਹੋਣ ਵਾਲੀ ਇਸਤਰੀ ਚਿਖਾ ਉੱਤੇ ਚੜ੍ਹ ਕੇ ਆਖਦੀ ਹੈ-ਹੇ ਮਸਾਣਾਂ ਦੇ ਬੀਰ! ਸੁਣ, ਸਾਰਾ ਸੰਸਾਰ ਤੁਰ ਗਿਆ ਹੈ, ਆਖਿਰਕਾਰ ਮੈਂ ਤੇ ਤੁਸੀਂ ਸਾਰਿਆਂ ਨੇ ਇੱਥੇ ਹੀ (ਮਸਾਣਾਂ ਵਿੱਚ) ਆਉਣਾ ਹੈ॥ ੮੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जैसे सती होने वाली स्त्री चिता पर चढ़कर पुकारती है- हे श्मशान के वीर! सुन, सारा संसार यहाँ से चला गया है, अंततः हम और तुम सबको यहीं (श्मशान में) आना है॥ ८५॥',
      en: 'Satguru Kabir Saheb proclaims: Just as the Sati mounting the funeral pyre proclaims: O spirit of the cremation ground, listen! The entire world has departed, and ultimately you and I must both end up here. ||85||',
    },
    chintan: {
      pb: 'ਮੌਤ ਅਟੱਲ ਸੱਚਾਈ ਹੈ। ਸੰਸਾਰ ਦੇ ਸਾਰੇ ਪ੍ਰਪੰਚ ਛੱਡ ਕੇ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਕਰਤੱਵ ਹੈ।',
      hi: 'मृत्यु अटल सत्य है। संसार के प्रपंचों को छोड़कर प्रभु का सिमरन करना ही एकमात्र सच्चा कर्तव्य है।',
      en: 'Death is the immutable truth. Abandoning worldly illusions, remembrance of God is our sole duty.',
    },
    acharana: {
      pb: 'ਜੀਵਨ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਨੂੰ ਪਛਾਣ ਕੇ ਆਪਣੇ ਆਪ ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲਗਾਓ।',
      hi: 'जीवन की नश्वरता को पहचानकर अपना मन नाम सिमरन में लगाएं।',
      en: 'Recognizing life\'s transience, dedicate your consciousness to divine remembrance.',
    },
    samarpan: {
      pb: 'ਅਮਰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣਾ ਜੀਵਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'अमर प्रभु के चरणों में अपना जीवन समर्पित करें।',
      en: 'Surrender your life to the Immortal Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 86 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-86',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੬: ਮਨੁ ਪੰਖੀ ਭਇਓ (ਸੰਗਤਿ ਦਾ ਪ੍ਰਭਾਵ)',
      hi: 'सलोक ८६: मनु पंखी भइओ (संगति का प्रभाव)',
      en: 'Salok 86: The Mind is a Wandering Bird; It Bears the Fruit of Its Company',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਨੁ ਪੰਖੀ ਭਇਓ ਉਡਿ ਉਡਿ ਦਹ ਦਿਸ ਜਾਇ ॥',
      'ਜੋ ਜੈਸੀ ਸੰਗਤਿ ਮਿਲੈ ਸੋ ਤੈਸੋ ਫਲੁ ਖਾਇ ॥੮੬॥',
    ],
    moolDevanagari: [
      'कबीर मनु पंखी भइओ उडि उडि दह दिसि जाइ ॥',
      'जो जैसी संगति मिलै सो तैसो फलु खाइ ॥८६॥',
    ],
    moolRoman: [
      'Kabīr man pankhī bhaio uḍ uḍ dah dis jāi.',
      'Jo jaisī sangat milai so taiso phal khāi. ||86||',
    ],
    shabdarth: [
      {
        word: 'ਮਨੁ ਪੰਖੀ / मनु पंखी',
        meaning: {
          pb: 'ਪੰਛੀ ਵਰਗਾ ਉੱਡਣ ਵਾਲਾ ਮਨ',
          hi: 'पक्षी की भांति उड़ने वाला चंचल मन',
          en: 'The bird-like wandering mind',
        },
      },
      {
        word: 'ਦਹ ਦਿਸ / दह दिसि',
        meaning: {
          pb: 'ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ (ਚਾਰੇ ਪਾਸੇ)',
          hi: 'दसों दिशाओं में',
          en: 'In all ten directions',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਇਹ ਮਨ ਪੰਛੀ ਸਮਾਨ ਹੈ ਜੋ ਸੰਕਲਪਾਂ-ਵਿਕਲਪਾਂ ਦੀਆਂ ਉਡਾਰੀਆਂ ਲਾ ਕੇ ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਭਟਕਦਾ ਰਹਿੰਦਾ ਹੈ। ਇਸ ਮਨ ਨੂੰ ਜਿਹੋ ਜਿਹੋ ਸੰਗਤ ਮਿਲਦੀ ਹੈ, ਇਹ ਉਸੇ ਸੰਗਤ ਦੇ ਪ੍ਰਭਾਵ ਅਨੁਸਾਰ ਚੰਗਾ ਜਾਂ ਮਾੜਾ ਫਲ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ॥ ੮੬॥',
      hi: 'हे कबीर! यह मन पक्षी के समान है जो संकल्प-विकल्पों की उड़ान भरकर दसों दिशाओं में भटकता रहता है। इस मन रूपी पक्षी को जैसी संगति मिलती है, यह वैसा ही अच्छा या बुरा फल प्राप्त करता है॥ ८६॥',
      en: 'O Kabir, this mind is like a bird that flies in all ten directions on wings of desires. Whatever company it keeps, it reaps the corresponding fruit of its associations. ||86||',
    },
    chintan: {
      pb: 'ਸੰਗਤ ਦਾ ਪ੍ਰਭਾਵ ਮਨ ’ਤੇ ਸਭ ਤੋਂ ਵੱਧ ਪੈਂਦਾ ਹੈ। ਸਾਧੂਆਂ ਦੀ ਸੰਗਤ ਮੁਕਤੀ ਦਿੰਦੀ ਹੈ ਅਤੇ ਕੁਸੰਗਤ ਪਤਨ ਕਰਦੀ ਹੈ।',
      hi: 'संगति का प्रभाव मन पर सर्वाधिक पड़ता है। संतों की संगति मुक्ति देती है और कुसंगति पतन करती है।',
      en: 'Association profoundly shapes the mind. The company of saints liberates, while bad company destroys.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤ ਦਾ ਤਿਆਗ ਕਰਕੇ ਸਦਾ ਸਾਧੂ ਸੰਤਾਂ ਦੀ ਪਵਿੱਤਰ ਸੰਗਤ ਕਰੋ।',
      hi: 'कुसंगति का त्याग कर सदैव साधु-संतों की पवित्र संगति करें।',
      en: 'Forsaking bad company, cherish the pure association of saints.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਗੁਰੂ ਚਰਨਾਂ ਨਾਲ ਜੋੜ ਕੇ ਪਵਿੱਤਰ ਬਣਾਓ।',
      hi: 'अपने मन को गुरु चरणों से जोड़कर पवित्र बनाएं।',
      en: 'Anchor your wandering mind at the Lotus Feet of the Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 87 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-87',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੭: ਜਾ ਕਉ ਖੋਜਤੇ ਪਾਇਓ (ਆਤਮ-ਦਰਸ਼ਨ ਤੇ ਅਭੇਦਤਾ)',
      hi: 'सलोक ८७: जा कउ खोजते पाइओ (आत्म-दर्शन व अभेदता)',
      en: 'Salok 87: Seeking the Lord Without, I Found Him Within; I Became He',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਾ ਕਉ ਖੋਜਤੇ ਪਾਇਓ ਸੋਈ ਠਉਰੁ ॥',
      'ਸੋਈ ਫਿਰਿ ਕੈ ਤੂ ਭਇਆ ਜਾ ਕਉ ਕਹਤਾ ਅਉਰੁ ॥੮੭॥',
    ],
    moolDevanagari: [
      'कबीर जा कउ खोजते पाइओ सोई ठउरु ॥',
      'सोई फिरि कै तू भइआ जा कउ कहता अउरु ॥८७॥',
    ],
    moolRoman: [
      'Kabīr jā kau khojate pāio soi ṭhaur.',
      'Soi phir kai tū bhaiā jā kau kahtā aur. ||87||',
    ],
    shabdarth: [
      {
        word: 'ਠਉਰੁ / ठउरु',
        meaning: {
          pb: 'ਟਿਕਾਣਾ, ਪ੍ਰਭੂ ਦਾ ਸਰੂਪ',
          hi: 'वह ठिकाना, परमात्मा का स्वरूप',
          en: 'The divine Abode / True Self',
        },
      },
      {
        word: 'ਅਉਰੁ / अउरु',
        meaning: {
          pb: 'ਹੋਰ ਕੋਈ (ਆਪਣੇ ਆਪ ਤੋਂ ਭਿੰਨ)',
          hi: 'दूसरा कोई (अपने से भिन्न)',
          en: 'Another / separate from oneself',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਸ ਪ੍ਰਭੂ ਨੂੰ ਮੈਂ ਬਾਹਰ ਥਾਵੀਂ ਲੱਭਦਾ ਸੀ, ਉਹੀ ਅਸਲ ਠਾਉਂ (ਆਪਣਾ ਆਪ) ਮੈਨੂੰ ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ ਹੈ। ਜਿਸ ਨੂੰ ਪਹਿਲਾਂ ਤੂੰ ਆਪਣੇ ਨਾਲੋਂ ਵੱਖਰਾ (ਹੋਰ) ਸਮਝਦਾ ਸੀ, ਹੁਣ ਗਿਆਨ ਹੋਣ ’ਤੇ ਤੂੰ ਆਪ ਹੀ ਉਹ (ਪ੍ਰਭੂ-ਰੂਪ) ਹੋ ਗਿਆ ਹੈਂ॥ ੮੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जिस परमात्मा को मैं बाहर खोज रहा था, वही परम धाम मुझे भीतर मिल गया है। जिसे पहले तू अपने से भिन्न (दूसरा) कहता था, अब ज्ञान होने पर तू स्वयं वही (प्रभु-रूप) हो गया है॥ ८७॥',
      en: 'Satguru Kabir Saheb proclaims: Whom I was searching for outside, that very Abode I have found within. He whom you once considered separate and other than yourself—upon realization, you have become He. ||87||',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਕੋਈ ਬਾਹਰ ਨਹੀਂ, ਸਾਡੇ ਆਪਣੇ ਅੰਤःਕਰਨ ਵਿੱਚ ਵੱਸਦਾ ਹੈ। ਆਤਮ-ਗਿਆਨ ਨਾਲ ਜੀਵ ਪ੍ਰਭੂ ਵਿੱਚ ਅਭੇਦ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'परमात्मा कोई बाहर नहीं, हमारे अपने अंतःकरण में विराजमान है। आत्मज्ञान से जीव प्रभु में अभेद हो जाता है।',
      en: 'God is not external; He dwells within our own heart. Through self-realization, the soul merges in Him.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਭਟਕਣਾ ਛੱਡ ਕੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਆਪਣੇ ਮੂਲ ਆਤਮ ਸਰੂਪ ਨੂੰ ਪਛਾਣੋ।',
      hi: 'बाहरी भटकन छोड़कर अंतर्मुखी होकर अपने मूल आत्म-स्वरूप को पहचानें।',
      en: 'Ceasing outer wandering, turn inward to recognize your true divine nature.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਹਉਮੈ ਦੇ ਪਰਦੇ ਤੋੜ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਭੇਦ ਹੋ ਜਾਓ।',
      hi: 'अपने अहंकार के पर्दे तोड़कर प्रभु के साथ पूर्ण रूप से अभेद हो जाएं।',
      en: 'Shatter the veil of ego and merge into the infinite One.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 88 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-88',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੮: ਮਾਰੀ ਮਰਉ ਕੁਸੰਗ ਕੀ (ਕੁਸੰਗਤ ਦਾ ਖ਼ਤਰਾ)',
      hi: 'सलोक ८८: मारी मरउ कुसंग की (कुसंगति का खतरा)',
      en: 'Salok 88: Destroyed by Bad Company; The Banana Plant Pierced by the Thorn-Bush',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਰੀ ਮਰਉ ਕੁਸੰਗ ਕੀ ਕੇਲੇ ਨਿਕਟਿ ਜੁ ਬੇਰਿ ॥',
      'ਉਹ ਝੁਲੈ ਉਹ ਚੀਰੀਐ ਸਾਕਤ ਸੰਗੁ ਨ ਹੇਰਿ ॥੮੮॥',
    ],
    moolDevanagari: [
      'कबीर मारी मरउ कुसंग की केले निकति जु बेरि ॥',
      'उह झुलै उह चीरीऐ साकत संगु न हेरि ॥८८॥',
    ],
    moolRoman: [
      'Kabīr mārī marau kusang kī kele nikat ju ber.',
      'Oh jhulai oh chīrīai sākat sang na her. ||88||',
    ],
    shabdarth: [
      {
        word: 'ਕੇਲੇ ਨਿਕਟਿ ਜੁ ਬੇਰਿ / केले निकति जु बेरि',
        meaning: {
          pb: 'ਕੇਲੇ ਦੇ ਰੁੱਖ ਦੇ ਕੋਲ ਉੱਗੀ ਹੋਈ ਬੇਰੀ (ਕੰਡਿਆਂ ਵਾਲੀ)',
          hi: 'केले के पेड़ के समीप उगी हुई कांटेदार बेर की झाड़ी',
          en: 'The thorny bush growing near the tender banana tree',
        },
      },
      {
        word: 'ਚੀਰੀਐ / चीरीऐ',
        meaning: {
          pb: 'ਚੀਰਿਆ ਜਾਂਦਾ ਹੈ, ਵਿੰਨ੍ਹਿਆ ਜਾਂਦਾ ਹੈ',
          hi: 'छीछालेदर होना, चीरा जाना',
          en: 'Torn or pierced',
        },
      },
      {
        word: 'ਸਾਕਤ ਸੰਗੁ / साकत संगु',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਟੁੱਟੇ ਹੋਏ ਵਿਕਾਰੀ ਮਨੁੱਖ ਦੀ ਸੰਗਤ',
          hi: 'परमात्मा से विमुख संसारी की संगति',
          en: 'Company of the godless materialist',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕੁਸੰਗਤ ਦੀ ਮਾਰ ਬਹੁਤ ਭੈੜੀ ਹੁੰਦੀ ਹੈ। ਜਿਵੇਂ ਕੋਮਲ ਕੇਲੇ ਦੇ ਰੁੱਖ ਦੇ ਕੋਲ ਕੰਡਿਆਂ ਵਾਲੀ ਬੇਰੀ ਹੋਵੇ, ਹਵਾ ਨਾਲ ਬੇਰੀ ਹਿੱਲਦੀ ਹੈ ਅਤੇ ਉਸਦੇ ਕੰਡਿਆਂ ਨਾਲ ਨਾਲ ਵਾਲਾ ਕੋਮਲ ਕੇਲਾ ਚੀਰਿਆ ਜਾਂਦਾ ਹੈ; ਇਸੇ ਤਰ੍ਹਾਂ ਵਿਕਾਰੀ (ਸਾਕਤ) ਦੀ ਸੰਗਤ ਤੋਂ ਬਚੋ, ਉਸ ਵੱਲ ਨਾ ਦੇਖੋ॥ ੮੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- कुसंगति की मार बहुत घातक होती है। जैसे कोमल केले के पेड़ के पास कांटेदार बेर की झाड़ी हो, हवा चलने पर बेर हिलती है और उसके कांटों से पास का कोमल केला छिल व चीर दिया जाता है; इसी प्रकार ससाकत (विकारी) की संगति से बचो, उसकी ओर भूलकर भी मत ताको॥ ८८॥',
      en: 'Satguru Kabir Saheb proclaims: The blow of bad company is fatal. Just as a thorny bush standing near a tender banana tree is tossed by the wind, and its thorns tear the soft banana tree, so should you avoid the company of godless materialists. ||88||',
    },
    chintan: {
      pb: 'ਵਿਕਾਰੀ ਅਤੇ ਮਨੁੱਖਾ ਜਨਮ ਨੂੰ ਵਿਅਰਥ ਗਵਾਉਣ ਵਾਲਿਆਂ ਦੀ ਸੰਗਤ ਸਾਧਕ ਦੇ ਗੁਣਾਂ ਨੂੰ ਨਸ਼ਟ ਕਰ ਦਿੰਦੀ ਹੈ।',
      hi: 'विकारियों और सांसारिक भोगियों की संगति साधक के गुणों को नष्ट कर देती है।',
      en: 'The company of vicious people ruins the spiritual seeker\'s virtues.',
    },
    acharana: {
      pb: 'ਸਾਕਤ ਅਤੇ ਕੁਸੰਗੀ ਲੋਕਾਂ ਦੀ ਸੰਗਤ ਤੋਂ ਹਮੇਸ਼ਾ ਦੂਰ ਰਹੋ।',
      hi: 'साकत और कुसंगी लोगों की संगति से सदैव दूर रहें।',
      en: 'Ever keep your distance from toxic and godless associations.',
    },
    samarpan: {
      pb: 'ਸਦਾ ਪ੍ਰਭੂ ਭਗਤਾਂ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਰਹਿ ਕੇ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖੋ।',
      hi: 'सदैव प्रभु भक्तों और संतों की संगति में रहकर अपनी सुरति को सुरक्षित रखें।',
      en: 'Safeguard your consciousness by abiding in the company of holy devotees.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 89 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-89',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੮੯: ਭਾਰ ਪਰਾਈ ਸਿਰਿ ਚਰੈ (ਨਿੰਦਿਆ ਦਾ ਭਾਰ)',
      hi: 'सलोक ८९: भार पराई सिरि चरै (निंदा का भार)',
      en: 'Salok 89: Carrying the Load of Others\' Sins on a Steep Path',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਭਾਰ ਪਰਾਈ ਸਿਰਿ ਚਰੈ ਚਲਿਓ ਚਾਹੈ ਬਾਟ ॥',
      'ਅਪਨੇ ਭਾਰਹਿ ਨਾ ਡਰੈ ਆਗੈ ਅਉਘਟ ਘਾਟ ॥੮੯॥',
    ],
    moolDevanagari: [
      'कबीर भार पराई सिरि चरै चलिओ चाहै बाट ॥',
      'अपने भारहि ना डरै आगै अउघट घाट ॥८९॥',
    ],
    moolRoman: [
      'Kabīr bhār parāī sir charai chalio chāhai bāṭ.',
      'Apne bhārah nā ḍarai āgai aughaṭ ghāṭ. ||89||',
    ],
    shabdarth: [
      {
        word: 'ਭਾਰ ਪਰਾਈ / भार पराई',
        meaning: {
          pb: 'ਪਰਾਇਆ ਭਾਰ (ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਿਆ ਜਾਂ ਪਾਪ)',
          hi: 'पराया भार (दूसरों की निंदा व पाप अपने सिर लेना)',
          en: 'The burden of others\' faults / calumny',
        },
      },
      {
        word: 'ਅਉਘਟ ਘਾਟ / अउघट घाट',
        meaning: {
          pb: 'ਔਖਾ ਪੈਂਡਾ, ਮੁਸ਼ਕਿਲ ਘਾਟੀ (ਪ੍ਰਭੂ ਦਰ ਦਾ ਰਸਤਾ)',
          hi: 'कठिन मार्ग, विकट घाटी',
          en: 'Steep, treacherous mountain pass',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਿਆ ਦਾ ਪਰਾਇਆ ਭਾਰ ਮਨੁੱਖ ਆਪਣੇ ਸਿਰ ’ਤੇ ਚੜ੍ਹਾਉਂਦਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਸੇ ਤਰ੍ਹਾਂ ਸੰਸਾਰ ਦਾ ਪੈਂਡਾ ਤੈਅ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ। ਤੂੰ ਆਪਣੇ ਮਾੜੇ ਕਰਮਾਂ ਦੇ ਭਾਰ ਤੋਂ ਨਹੀਂ ਡਰਦਾ, ਜਦੋਂ ਕਿ ਅੱਗੇ ਆਤਮਿਕ ਮਾਰਗ ਦਾ ਬਹੁਤ ਔਖਾ ਘਾਟ ਹੈ॥ ੮੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- मनुष्य दूसरों की निंदा का पराया भार अपने सिर पर चढ़ाता जाता है और इसी प्रकार जीवन की यात्रा तय करना चाहता है। तू अपने ही दुष्कर्मों के भार से नहीं डर रहा, जबकि आगे आध्यात्मिक मार्ग की अत्यंत कठिन और विकट घाटी है॥ ८९॥',
      en: 'Satguru Kabir Saheb proclaims: Man loads the heavy burden of others\' calumny and sins onto his own head, yet wishes to journey on. You fear not the weight of your own misdeeds, even though a steep and treacherous pass lies ahead. ||89||',
    },
    chintan: {
      pb: 'ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਿਆ ਅਤੇ ਚੁਗ਼ਲੀ ਕਰਨ ਨਾਲ ਆਪਣੇ ਕਰਮਾਂ ਦਾ ਭਾਰ ਹੋਰ ਭਾਰੀ ਹੋ ਜਾਂਦਾ ਹੈ। ਆਤਮਿਕ ਮਾਰਗ ਬਹੁਤ ਕਠਿਨ ਹੈ।',
      hi: 'दूसरों की निंदा और चुगली करने से अपने कर्मों का बोझ और भारी हो जाता है। आध्यात्मिक मार्ग अत्यंत कठिन है।',
      en: 'Calumniating others multiplies one\'s own karmic burden, making the steep spiritual journey impossible.',
    },
    acharana: {
      pb: 'ਨਿੰਦਿਆ ਅਤੇ ਚੁਗ਼ਲੀ ਤੋਂ ਬਚ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਸ਼ੁੱਧ ਕਰੋ।',
      hi: 'निंदा और चुगली से बचकर अपने मन को शुद्ध करें।',
      en: 'Refrain from calumny, purifying your mind.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਕਰਮਾਂ ਨੂੰ ਸੁਧਾਰ ਕੇ ਪ੍ਰਭੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਨਿਮ੍ਰਤਾ ਨਾਲ ਚੱਲੋ।',
      hi: 'अपने कर्मों को सुधारकर प्रभु की शरण में विनम्रता से आगे बढ़ें।',
      en: 'Correct your deeds and walk humbly in the refuge of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 90 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-90',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੯੦: ਬਨ ਕੀ ਦਾਧੀ ਲਾਕਰੀ (ਪ੍ਰਭੂ ਭਗਤੀ ਚੇਤਾਵਨੀ)',
      hi: 'सलोक ९०: बन की दाधी लाकरी (प्रभु भक्ति चेतावनी)',
      en: 'Salok 90: The Burnt Log Pleads Not to Fall Into the Blacksmith\'s Fire Again',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬਨ ਕੀ ਦਾਧੀ ਲਾਕਰੀ ਠਾਢੀ ਕਰੈ ਪੁਕਾਰ ॥',
      'ਮਤਿ ਬਸਿ ਪਰਉ ਲੁਹਾਰ ਕੇ ਜਾਰੈ ਦੂਜੀ ਬਾਰ ॥੯੦॥',
    ],
    moolDevanagari: [
      'कबीर बन की दाधी लाकरी ठाढी करै पुकार ॥',
      'मति बसि परउ लुहार के जारै दूजी बार ॥९०॥',
    ],
    moolRoman: [
      'Kabīr ban kī dādhī lākarī ṭhāḍī karai pukār.',
      'Mat basi parau luhār ke jārai dūjī bār. ||90||',
    ],
    shabdarth: [
      {
        word: 'ਦਾਧੀ ਲਾਕਰੀ / दाधी लाकरी',
        meaning: {
          pb: 'ਅੱਗ ਨਾਲ ਸੜੀ ਹੋਈ ਲੱਕੜ',
          hi: 'जंगल की आग से जली हुई लकड़ी',
          en: 'Log burnt in a forest fire',
        },
      },
      {
        word: 'ਲੁਹਾਰ ਕੇ / लुहार के',
        meaning: {
          pb: 'ਲੁਹਾਰ ਦੀ ਭੱਠੀ ਵਿੱਚ (ਕਾਲ ਦੇ ਚੱਕਰ ਵਿੱਚ)',
          hi: 'लोहार की भट्टी में (बार-बार जन्म-मरण में)',
          en: 'Into the blacksmith\'s furnace (cycle of repeated birth and death)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੰਗਲ ਦੀ ਅੱਗ ਨਾਲ ਸੜੀ ਹੋਈ ਲੱਕੜ ਖੜ੍ਹੀ ਪੁਕਾਰ ਕਰਦੀ ਹੈ ਕਿ ਹੇ ਪ੍ਰਭੂ! ਮੈਂ ਕਿਤੇ ਫਿਰ ਤੋਂ ਲੁਹਾਰ ਦੇ ਵੱਸ ਨਾ ਪੈ ਜਾਵਾਂ, ਜਿਹੜਾ ਮੈਨੂੰ ਪਹਿਲਾਂ ਹੀ ਸੜੀ ਹੋਈ ਨੂੰ ਦੁਬਾਰਾ ਭੱਠੀ ਵਿੱਚ ਪਾ ਕੇ ਕੋਇਲੇ ਕਰਕੇ ਸਾੜ ਦੇਵੇ॥ ੯੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जंगल की आग से जली हुई लकड़ी खड़ी पुकार करती है कि हे प्रभु! मैं कहीं फिर से लोहार (काल) के वश में न पड़ जाऊँ, जो मुझे पहले से जली हुई को दोबारा भट्टी में डालकर कोयला करके जला दे॥ ९०॥',
      en: 'Satguru Kabir Saheb proclaims: The log burnt in the forest fire cries out, pleading not to fall into the blacksmith\'s hands again, lest he thrust already burnt wood into the furnace to burn it to coal once more. ||90||',
    },
    chintan: {
      pb: 'ਮਨੁੱਖ ਸੰਸਾਰ ਦੀ ਅੱਗ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਬਹੁਤ ਸੜ ਚੁੱਕਾ ਹੈ। ਹੁਣ ਮਨੁੱਖਾ ਜਨਮ ਵਿੱਚ ਨਾਮ ਸਿਮਰਨ ਕਰਕੇ ਮੁਕਤੀ ਪਾਓ, ਨਾ ਕਿ ਫਿਰ ਤੋਂ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਵਿੱਚ ਪਵੋ।',
      hi: 'मनुष्य संसार की आग में पहले ही बहुत जल चुका है। अब मनुष्य जन्म में नाम सिमरन कर मुक्ति पाएं, न कि पुनरावृत्ति के फेर में पड़ें।',
      en: 'Humanity has suffered immensely in the fires of worldly suffering. Seek liberation now through remembrance rather than returning to the wheel of rebirth.',
    },
    acharana: {
      pb: 'ਬਾਰ-ਬਾਰ ਜਨਮ-ਮਰਨ ਦੇ ਦੁੱਖਾਂ ਤੋਂ ਬਚਣ ਲਈ ਇਸ ਜਨਮ ਵਿੱਚ ਹੀ ਪ੍ਰਭੂ ਭਗਤੀ ਪੂਰੀ ਕਰੋ।',
      hi: 'बार-बार जन्म-मृत्यु के दुखों से बचने के लिए इसी जन्म में प्रभु भक्ति पूर्ण करें।',
      en: 'Fulfill your devotion in this very life to escape the cycle of recurring mortality.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਆਵਾਗੌਮਨ ਤੋਂ ਛੁਟਕਾਰਾ ਪਾਓ।',
      hi: 'स्वयं को प्रभु चरणों में समर्पित कर आवागमन के चक्कर से मुक्ति पाएं।',
      en: 'Surrender to the Lord to break free from the wheel of reincarnation.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 91 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-91',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੬੧ (੯੧): ਏਕ ਮਰੰਤੇ ਦੁਇ ਮੂਏ (ਵਿਕਾਰਾਂ ਦਾ ਕ੍ਰਮਵਾਰ ਨਾਸ਼)',
      hi: 'सलोक ९१: एक मरंते दुइ मूए (विकारों का क्रमिक नाश)',
      en: 'Salok 91: When One Ego Dies, Two Vices Die; Conquering the Inner Six',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਏਕ ਮਰੰਤੇ ਦੁਇ ਮੂਏ ਦੋਇ ਮਰੰਤਹ ਚਾਰਿ ॥',
      'ਚਾਰਿ ਮਰੰਤਹ ਛਹ ਮੂਏ ਚਾਰਿ ਪੁਰਖ ਦੁਇ ਨਾਰਿ ॥੯੧॥',
    ],
    moolDevanagari: [
      'कबीर एक मरंते दुइ मूए दोइ मरंतह चारि ॥',
      'चारि मरंतह छह मूए चारि पुरख दुइ नारि ॥९१॥',
    ],
    moolRoman: [
      'Kabīr ek marante dui mūe doi marantah chār.',
      'Chār marantah chhah mūe chār purakh dui nāri. ||91||',
    ],
    shabdarth: [
      {
        word: 'ਏਕ ਮਰੰਤੇ / एक मरंते',
        meaning: {
          pb: 'ਇੱਕ (ਹੰਕਾਰ) ਦੇ ਮਰਨ ਨਾਲ',
          hi: 'एक (अहंकार) के मरने से',
          en: 'When the single ego dies',
        },
      },
      {
        word: 'ਦੁਇ ਮੂਏ / दुइ मूए',
        meaning: {
          pb: 'ਦੋ (ਮਾਨ ਅਤੇ ਅਪਮਾਨ) ਮਰ ਜਾਂਦੇ ਹਨ',
          hi: 'दो (मान और अपमान) मर जाते हैं',
          en: 'Two (honor and dishonor) dissolve',
        },
      },
      {
        word: 'ਚਾਰਿ ਪੁਰਖ ਦੁਇ ਨਾਰਿ / चार पुरख दुइ नारि',
        meaning: {
          pb: 'ਚਾਰ ਮਰਦ (ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ) ਤੇ ਦੋ ਇਸਤਰੀਆਂ (ਆਸ਼ਾ, ਤ੍ਰਿਸ਼ਨਾ)',
          hi: 'चार पुरुष (काम, क्रोध, लोभ, मोह) और दो स्त्रियां (आशा, तृष्णा)',
          en: 'Four male vices and two female desires',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਮਨ ਦੇ ਇੱਕ ਅਹੰਕਾਰ ਦੇ ਮਰਨ ਨਾਲ ਦੋ (ਮਾਨ ਅਤੇ ਅਪਮਾਨ) ਮਰ ਜਾਂਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਦੋਹਾਂ ਦੇ ਮਰਨ ਨਾਲ ਚਾਰ (ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ) ਮਰ ਜਾਂਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਚਾਰਾਂ ਤੇ ਦੋਵਾਂ ਦੇ ਮਰਨ ਨਾਲ ਕੁੱਲ ਛੇ ਵਿਕਾਰ (ਚਾਰ ਮਰਦ ਤੇ ਦੋ ਨਾਰੀ - ਆਸ਼ਾ, ਤ੍ਰਿਸ਼ਨਾ) ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ॥ ੯੧॥',
      hi: 'हे कबीर! मन के एक अहंकार के मरने से दो (मान और अपमान) मर जाते हैं। इन दोनों के मरने से चार (काम, क्रोध, लोभ, मोह) मर जाते हैं। इस प्रकार कुल छह विकार (चार पुरुष और दो नारियां - आशा, तृष्णा) समाप्त हो जाते हैं॥ ९१॥',
      en: 'O Kabir, when the single ego dies, two (honor and dishonor) die with it. When those two die, four (lust, anger, greed, attachment) die. Thus the entire six inner enemies (four male vices and two female desires of hope and thirst) are utterly destroyed. ||91||',
    },
    chintan: {
      pb: 'ਮੂਲ ਹੰਕਾਰ ਨੂੰ ਜਿੱਤਣ ਨਾਲ ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ, ਆਸ਼ਾ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਸਾਰੇ ਵਿਕਾਰ ਆਪਣੇ ਆਪ ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ।',
      hi: 'मूल अहंकार को जीतने से काम, क्रोध, लोभ, मोह, आशा और तृष्णा सभी विकार स्वतः नष्ट हो जाते हैं।',
      en: 'Conquering the root ego automatically vanquishes lust, anger, greed, attachment, hope, and thirst.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਆਪਣੇ ਮੂਲ ਅਹੰਕਾਰ ਨੂੰ ਮਿਟਾਓ।',
      hi: 'सतगुरु के ज्ञान से अपने मूल अहंकार को समाप्त करें।',
      en: 'Uproot the root ego through the Master\'s divine wisdom.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਰਜ਼ਾ ਵਿੱਚ ਰਹਿ ਕੇ ਸਾਰੇ ਅੰਦਰੂਨੀ ਵਿਕਾਰਾਂ ਨੂੰ ਭਸਮ ਕਰੋ।',
      hi: 'प्रभु की रजा में रहकर समस्त आंतरिक विकारों को भस्म करें।',
      en: 'Abiding in divine surrender, incinerate all internal vices.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 92 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-92',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੯੨: ਦੇਖਿ ਦੇਖਿ ਜਗੁ ਢੂੰਢਿਆ (ਨਾਮ ਬਿਨੁ ਭਟਕਣਾ)',
      hi: 'सलोक ९२: देखि देखि जगु ढूढਿਆ (नाम बिनु भटकणा)',
      en: 'Salok 92: I Searched the Whole World; Without the Name, All Wander in Vain',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦੇਖਿ ਦੇਖਿ ਜਗੁ ਢੂੰਢਿਆ ਕਹੂੰ ਨ ਪਾਇਆ ਠਉਰੁ ॥',
      'ਜਿਨਿ ਹਰਿ ਕਾ ਨਾਮੁ ਨ ਚੇਤਿਓ ਕਹਾ ਭੁਲਾਨੇ ਅਉਰ ॥੯੨॥',
    ],
    moolDevanagari: [
      'कबीर देखि देखि जगु ढूढਿਆ कहूं न पाइआ ठउरु ॥',
      'जिनि हरि का नामु न चेतिओ कहा भुलाने अउरु ॥९२॥',
    ],
    moolRoman: [
      'Kabīr dekhi dekhi jag ḍhūṇḍhiā kahūṅ na pāiā ṭhaur.',
      'Jin har kā nām na chetiō kahā bhulāne aur. ||92||',
    ],
    shabdarth: [
      {
        word: 'ਠਉਰੁ / ठउरु',
        meaning: {
          pb: 'ਸ਼ਾਂਤੀ ਦਾ ਟਿਕਾਣਾ, ਅਡੋਲਤਾ',
          hi: 'शांति का ठिकाना, विश्राम',
          en: 'Abode of peace / sanctuary',
        },
      },
      {
        word: 'ਭੁਲਾਨੇ / भुलाने',
        meaning: {
          pb: 'ਭਟਕ ਰਹੇ ਹਨ, ਕੁਰਾਹੇ ਪਏ ਹਨ',
          hi: 'भटक रहे हैं, भ्रमित हैं',
          en: 'Deluded / wandering astray',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੰਸਾਰ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਵੇਖ-ਵੇਖ ਕੇ ਢੂੰਡਿਆ ਹੈ, ਪਰ ਕਿਤੇ ਵੀ ਮਨ ਨੂੰ ਸ਼ਾਂਤੀ ਦਾ ਅਸਲ ਟਿਕਾਣਾ ਨਹੀਂ ਮਿਲਿਆ। ਜਿਨ੍ਹਾਂ ਨੇ ਹਰੀ ਦਾ ਨਾਮ ਨਹੀਂ ਚੇਤਿਆ, ਉਹ ਹੋਰ ਕਿੱਥੇ-ਕਿੱਥੇ ਭਟਕਦੇ ਫਿਰਦੇ ਹਨ? (ਅਸਲ ਸ਼ਾਂਤੀ ਕੇਵਲ ਨਾਮ ਵਿੱਚ ਹੈ)॥ ੯੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- संसार को भली-भांति देख-देख कर ढूंढ लिया है, किंतु कहीं भी मन को शांति का वास्तविक ठिकाना नहीं मिला। जिन लोगों ने भगवान का नाम स्मरण नहीं किया, वे व्यर्थ ही अन्यत्र कहां-कहां भटक रहे हैं?॥ ९२॥',
      en: 'Satguru Kabir Saheb proclaims: I have searched the entire world thoroughly, but found no true sanctuary of peace anywhere. Those who do not remember the Divine Name—where else are they pointlessly wandering? ||92||',
    },
    chintan: {
      pb: 'ਦੁਨੀਆ ਦੇ ਪਦਾਰਥਾਂ ਅਤੇ ਭਰਮਾਂ ਵਿੱਚ ਸ਼ਾਂਤੀ ਨਹੀਂ ਮਿਲ ਸਕਦੀ। ਸੱਚੀ ਸ਼ਾਂਤੀ ਕੇਵਲ ਪ੍ਰਭੂ ਦੇ ਨਾਮ ਵਿੱਚ ਹੈ।',
      hi: 'दुनिया के पदार्थों और भ्रमों में शांति नहीं मिल सकती। सच्ची शांति केवल प्रभु के नाम में है।',
      en: 'Worldly objects and illusions cannot grant peace. True tranquility resides solely in the Divine Name.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰੀ ਭਟਕਣਾ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਆਧਾਰ ਬਣਾਓ।',
      hi: 'संसार की भटकन छोड़कर नाम सिमरन को जीवन का आधार बनाएं।',
      en: 'Forsaking worldly wandering, make divine remembrance your anchor.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਨਾਮ ਵਿੱਚ ਜੁੜ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਅਡੋਲ ਕਰੋ।',
      hi: 'प्रभु के नाम से जुड़कर अपने मन को अचल और शांत करें।',
      en: 'Anchor your consciousness in the Name of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 93 (Ang 1366)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-93',
    category: 'salok',
    ang: 1366,
    title: {
      pb: 'ਸਲੋਕ ੯੩: ਸੰਗਤਿ ਕਰੀਐ ਸਾਧ ਕੀ (ਸਤਿਸੰਗ ਮਹਿਮਾ)',
      hi: 'सलोक ९३: संगति करीऐ साध की (सतसंग महिमा)',
      en: 'Salok 93: Keep Company with Saints; Shun the Godless',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਗਤਿ ਕਰੀਐ ਸਾਧ ਕੀ ਅੰਤਿ ਕਰੈ ਨਿਰਬਾਹੁ ॥',
      'ਸਾਕਤ ਸੰਗੁ ਨ ਕੀਜੀਐ ਜਾ ਤੇ ਹੋਇ ਬਿਨਾਹੁ ॥੯੩॥',
    ],
    moolDevanagari: [
      'कबीर संगति करीऐ साध की अंति करै निरबाहु ॥',
      'साकत संगु न कीजीऐ जा ते होइ बिनाहु ॥९३॥',
    ],
    moolRoman: [
      'Kabīr sangat karīai sādh kī ant karai nirbāhu.',
      'Sākat sang na kījīai jā te hoi bināhu. ||93||',
    ],
    shabdarth: [
      {
        word: 'ਨਿਰਬਾਹੁ / निरबाहु',
        meaning: {
          pb: 'ਸਾਥ ਨਿਭਾਉਣਾ, ਪਾਰ ਲੰਘਾਉਣਾ',
          hi: 'साथ निभाना, पार लगाना',
          en: 'Sustaining / carrying across safely to liberation',
        },
      },
      {
        word: 'ਸਾਕਤ / साकत',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਟੁੱਟਿਆ ਹੋਇਆ ਵਿਕਾਰੀ ਮਨੁੱਖ',
          hi: 'परमात्मा से विमुख संसारी',
          en: 'The godless materialist',
        },
      },
      {
        word: 'ਬਿਨਾਹੁ / बिनाहु',
        meaning: {
          pb: 'ਨਾਸ਼, ਪਤਨ, ਬਰਬਾਦੀ',
          hi: 'विनाश, पतन',
          en: 'Ruination / spiritual destruction',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸਾਧੂ (ਪੂਰਨ ਸੰਤ) ਦੀ ਸੰਗਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ, ਜੋ ਅੰਤ ਨੂੰ (ਜੀਵ ਦਾ) ਸਾਥ ਨਿਭਾਉਂਦੀ ਹੈ ਅਤੇ ਪਾਰ ਲੰਘਾਉਂਦੀ ਹੈ। ਪ੍ਰੰਤੂ ਪ੍ਰਭੂ ਤੋਂ ਟੁੱਟੇ ਹੋਏ ਸਾਕਤ ਦੀ ਸੰਗਤ ਕਦੀ ਨਾ ਕਰੋ, ਜਿਸ ਤੋਂ ਆਤਮਕ ਨਾਸ਼ ਹੁੰਦਾ ਹੈ॥ ੯੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- साधु (पूर्ण संत) की संगति करनी चाहिए, जो अंत में (जीव का) साथ निभाती है और पार लगाती है। परंतु परमात्मा से विमुख साकत (विकारी) की संगति कभी न करें, जिससे आत्मिक विनाश होता है॥ ९३॥',
      en: 'Satguru Kabir Saheb proclaims: Keep company with the holy Saints, for they alone sustain and carry you safely across to liberation at the end. Never keep company with the godless materialist, which leads only to spiritual destruction. ||93||',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਹੈ ਅਤੇ ਵਿਕਾਰੀਆਂ ਦੀ ਸੰਗਤ ਪਤਨ ਦਾ ਕਾਰਨ ਹੈ।',
      hi: 'संतों की संगति मुक्ति का मार्ग है और विकारियों की संगति पतन का कारण है।',
      en: 'The company of saints is the path to liberation, while vicious company leads to ruin.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤ ਤੋਂ ਬਚ ਕੇ ਸਦਾ ਸਤਿਸੰਗ ਵਿੱਚ ਸਮਾਂ ਬਿਤਾਓ।',
      hi: 'कुसंगति से बचकर सदैव सत्संग में समय व्यतीत करें।',
      en: 'Shunning bad company, ever abide in holy satsang.',
    },
    samarpan: {
      pb: 'ਸੰਤ ਜਨਾਂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੀਵਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'संत जनों के चरणों में अपना जीवन समर्पित करें।',
      en: 'Dedicate your life to the fellowship of saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 94 (Ang 1366-1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-94',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੪: ਜਗ ਮਹਿ ਚੇਤਿਓ ਜਾਨਿ ਕੈ (ਸਾਚਾ ਜੀਵਨ)',
      hi: 'सलोक ९४: जग महि चेतिओ जानि कै (सच्चा जीवन)',
      en: 'Salok 94: One Who Remembers God with Awareness Lives Unblemished in the World',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਗ ਮਹਿ ਚੇਤਿਓ ਜਾਨਿ ਕੈ ਜਗ ਮਹਿ ਰਹਿਓ ਸਮਾਇ ॥',
      'ਜਿਨਿ ਹਰਿ ਕਾ ਨਾਮੁ ਨ ਚੇਤਿਓ ਬਾਦਹਿ ਜਨਮੇਂ ਆਇ ॥੯੪॥',
    ],
    moolDevanagari: [
      'कबीर जग महि चेतिओ जानि कै जग महि रहिओ समाइ ॥',
      'जिनि हरि का नामु न चेतिओ बादahi जनमें आइ ॥९४॥',
    ],
    moolRoman: [
      'Kabīr jag mah cetiō jāni kai jag mah rahio samāi.',
      'Jin har kā nām na chetiō bādahi janmen āi. ||94||',
    ],
    shabdarth: [
      {
        word: 'ਜਾਨਿ ਕੈ / जानि कै',
        meaning: {
          pb: 'ਸੱਚੀ ਸੂਝ ਅਤੇ ਗਿਆਨ ਨਾਲ',
          hi: 'सच्ची सूझ और ज्ञान के साथ',
          en: 'With true discernment and wisdom',
        },
      },
      {
        word: 'ਸਮਾਇ / समाइ',
        meaning: {
          pb: 'ਨਿਰਲੇਪ ਰਹਿਣਾ, ਪ੍ਰਭੂ ਵਿੱਚ ਲੀਨ ਰਹਿਣਾ',
          hi: 'निनलेप रहना, प्रभु में लीन रहना',
          en: 'Remaining absorbed / detached in divine poise',
        },
      },
      {
        word: 'ਬਾਦਹਿ / बादहि',
        meaning: {
          pb: 'ਅਕਾਰਥ, ਵਿਅਰਥ ਹੀ',
          hi: 'व्यर्थ ही, निष्फल',
          en: 'In vain, fruitlessly',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਨ੍ਹਾਂ ਮਨੁੱਖਾਂ ਨੇ ਜਗਤ ਵਿੱਚ ਸੱਚੀ ਸੂਝ ਪ੍ਰਾਪਤ ਕਰਕੇ ਪ੍ਰਭੂ ਨੂੰ ਚੇਤਿਆ ਹੈ, ਉਹ ਜਗਤ ਵਿੱਚ ਨਿਰਲੇਪ ਰਹਿੰਦੇ ਹੋਏ ਵੀ ਪ੍ਰਭੂ ਵਿੱਚ ਸਮਾਏ ਰਹਿੰਦੇ ਹਨ। ਪਰ ਜਿਨ੍ਹਾਂ ਨੇ ਹਰੀ ਦਾ ਨਾਮ ਨਹੀਂ ਚੇਤਿਆ, ਉਹ ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਵਿਅਰਥ ਹੀ ਜੰਮ ਕੇ ਆਏ ਹਨ॥ ੯੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- जिन मनुष्यों ने जगत में सच्ची सूझ-बूझ पाकर परमात्मा का स्मरण किया है, वे संसार में रहते हुए भी उससे निर्लेप रहकर प्रभु में लीन रहते हैं। किंतु जिन्होंने भगवान का नाम स्मरण नहीं किया, उनका संसार में जन्म लेना व्यर्थ और निष्फल गया है॥ ९४॥',
      en: 'Satguru Kabir Saheb proclaims: Those who remember the Lord in this world with true discernment remain detached and absorbed in Him while living in the world. But those who do not remember the Divine Name are born in vain. ||94||',
    },
    chintan: {
      pb: 'ਸੱਚਾ ਜੀਵਨ ਉਹ ਹੈ ਜੋ ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੀਨ ਰਹੇ। ਨਾਮ ਬਿਨਾਂ ਜੀਵਨ ਵਿਅਰਥ ਹੈ।',
      hi: 'सच्चा जीवन वही है जो संसार में रहते हुए प्रभु के प्रेम और नाम सिमरन में लीन रहे। नाम बिना जीवन व्यर्थ है।',
      en: 'A true life is one that remains absorbed in divine love while dwelling in the world. Without the Name, life is wasted.',
    },
    acharana: {
      pb: 'ਜੀਵਨ ਦੇ ਅਸਲੇ ਨੂੰ ਪਛਾਣ ਕੇ ਹਰ ਸਾਹ ਨਾਲ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'जीवन के मूल सत्य को पहचानकर प्रत्येक श्वास से प्रभु का स्मरण करें।',
      en: 'Recognizing life\'s true purpose, practice divine remembrance with every breath.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਰਪਿਤ ਕਰਕੇ ਆਪਣਾ ਜੀਵਨ ਸਫਲ ਕਰੋ।',
      hi: 'स्वयं को प्रभु चरणों में पूर्णतः समर्पित कर अपने जीवन को सफल बनाएं।',
      en: 'Surrender completely at the Lotus Feet of the Lord to crown your life with ultimate success.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 95 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-95',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੫: ਆਸਾ ਕਰੀਐ ਰਾਮ ਕੀ (ਇਕੋ ਆਸਾ)',
      hi: 'सलोक ९५: आसा करीऐ राम की (एकमात्र आशा)',
      en: 'Salok 95: Place All Hope in the Divine Alone; All Other Expectations End in Despair',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਆਸਾ ਕਰੀਐ ਰਾਮ ਕੀ ਅਵਰੈ ਆਸ ਨਿਰਾਸ ॥',
      'ਨਰਕਿ ਪਰਹਿ ਤੇ ਮਾਨਈ ਜੋ ਹਰਿ ਨਾਮ ਉਦਾਸ ॥੯੫॥',
    ],
    moolDevanagari: [
      'कबीर आसा करीऐ राम की अवरै आसा निरास ॥',
      'नरकि परहि ते मानई जो हरि नाम उदास ॥९५॥',
    ],
    moolRoman: [
      'Kabīr āsā karīai Rām kī avrai ās nirās.',
      'Narak parahi te mānaī jo har nām udās. ||95||',
    ],
    shabdarth: [
      {
        word: 'ਆਸਾ ਕਰੀਐ / आसा करीऐ',
        meaning: {
          pb: 'ਭਰੋਸਾ ਅਤੇ ਉਮੀਦ ਰੱਖਣੀ',
          hi: 'ਭਰोसा व उम्मीद रखना',
          en: 'Place expectation and trust',
        },
      },
      {
        word: 'ਨਰਕਿ ਪਰਹਿ / नरकि परहि',
        meaning: {
          pb: 'ਆਤਮਿਕ ਨਰਕ ਅਤੇ ਦੁੱਖਾਂ ਵਿੱਚ ਪੈਂਦੇ ਹਨ',
          hi: 'आध्यात्मिक नरक व दुखों में गिरते हैं',
          en: 'Fall into spiritual hell and suffering',
        },
      },
      {
        word: 'ਉਦਾਸ / उदास',
        meaning: {
          pb: 'ਬੇਮੁਖ, ਵਿਹੂਣੇ',
          hi: 'विमुख, उदासीन',
          en: 'Detached / indifferent / estranged',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕੇਵਲ ਪ੍ਰਮਾਤਮਾ ਦੀ ਹੀ ਆਸ (ਭਰੋਸਾ) ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ, ਬਾਕੀ ਸਾਰੀਆਂ ਦੁਨਿਆਵੀ ਆਸਾਂ ਨਿਰਾਸਤਾ ਵੱਲ ਲੈ ਜਾਂਦੀਆਂ ਹਨ। ਜਿਹੜੇ ਮਨੁੱਖ ਪ੍ਰਭੂ ਦੇ ਨਾਮ ਤੋਂ ਬੇਮੁਖ ਰਹਿੰਦੇ ਹਨ, ਉਹ ਮਾਨੋ ਆਤਮਿਕ ਨਰਕਾਂ ਵਿੱਚ ਪੈਂਦੇ ਹਨ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- केवल परमात्मा की ही आशा (भरोसा) रखनी चाहिए, बाकी अन्य सभी कामनाएं निराशा देने वाली हैं। जो मनुष्य भगवान के नाम से विमुख रहते हैं, वे मानो आत्मिक नरकों में गिरते हैं।',
      en: 'Satguru Kabir Saheb proclaims: Hope and reliance should be placed in the Lord alone; all other expectations lead to despair. Those who remain indifferent to the Divine Name fall into spiritual suffering and hell.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਆਸਰਾ ਹੀ ਸੱਚਾ ਅਤੇ ਸਥਾਈ ਹੈ। ਹੋਰ ਮਾਇਕ ਸਹਾਰੇ ਅਸਥਿਰ ਅਤੇ ਦੁਖਦਾਈ ਹਨ।',
      hi: 'प्रभु का आश्रय ही सच्चा और शाश्वत है। अन्य सभी सांसारिक सहारे क्षणिक और दुःखदाई हैं।',
      en: 'Divine refuge alone is true and eternal; all other temporal props are fleeting and painful.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਕ ਆਸਾਂ ਤਿਆਗ ਕੇ ਕੇਵਲ ਅਕਾਲ ਪੁਰਖ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਰਹੋ।',
      hi: 'सांसारिक आशाओं को त्यागकर केवल अकाल पुरख की शरण में रहें।',
      en: 'Renouncing worldly expectations, abide solely in the sanctuary of the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ-ਮਨ ਅਤੇ ਆਸਾਂ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने तन-मन और समस्त आशाओं को प्रभु चरणों में समर्पित करें।',
      en: 'Surrender your heart, mind, and all hopes at the lotus feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 96 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-96',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੬: ਸਿਖ ਸਾਖਾ ਬਹੁਤੇ ਕੀਏ (ਅਧੂਰੀ ਪ੍ਰੀਤ)',
      hi: 'सलोक ९६: सिख साखा बहुते कीए (अधूरी प्रीत)',
      en: 'Salok 96: Cultivating Many Worldly Acquaintances While Forgetting the Divine Friend',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਿਖ ਸਾਖਾ ਬਹੁਤੇ ਕੀਏ ਕੇਸੋ ਕੀਓ ਨ ਮੀਤੁ ॥',
      'ਚਾਲੇ ਥੇ ਹਰਿ ਮਿਲਨ ਕਉ ਬੀਚੈ ਅਟਕਿਓ ਚੀਤੁ ॥੯੬॥',
    ],
    moolDevanagari: [
      'कबीर सिख साखा बहुते कीए केसो कीओ न मीतु ॥',
      'चाले थे हरि मिलन कउ बीचै अटकिओ चीतु ॥९६॥',
    ],
    moolRoman: [
      'Kabīr sikh sākhā bahute kīe keso kīo na mīt.',
      'Chāle the har milan kau bīchai atakio chīt. ||96||',
    ],
    shabdarth: [
      {
        word: 'ਸਿਖ ਸਾਖਾ / सिख साखा',
        meaning: {
          pb: 'ਚੇਲੇ, ਸਾਕ-ਸੰਬੰਧੀ ਅਤੇ ਮਿੱਤਰ-ਦੋਸਤ',
          hi: 'चेले, सगे-संबंधी और मित्र-दोस्त',
          en: 'Disciples, relatives, and worldly companions',
        },
      },
      {
        word: 'ਕੇਸੋ / केसो',
        meaning: {
          pb: 'ਸੋਹਣੇ ਵਾਲਾਂ ਵਾਲਾ ਪ੍ਰਭੂ, ਅਕਾਲ ਪੁਰਖ',
          hi: 'सुंदर बालों वाले प्रभु, अकाल पुरख',
          en: 'The Divine Beloved (Keso)',
        },
      },
      {
        word: 'ਬੀਚੈ ਅਟਕਿਓ / बीचै अटकिओ',
        meaning: {
          pb: 'ਰਾਹ ਵਿੱਚ ਹੀ ਮਨ ਫਸ ਗਿਆ',
          hi: 'मार्ग में ही मन उलझ गया',
          en: 'Mind got stuck midway in worldly attachments',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅਸੀਂ ਦੁਨਿਆਵੀ ਚੇਲੇ, ਸਾਕ-ਸੰਬੰਧੀ ਅਤੇ ਮਿੱਤਰ ਤਾਂ ਬਹੁਤ ਬਣਾ ਲਏ, ਪਰ ਪ੍ਰਭੂ ਨੂੰ ਆਪਣਾ ਮਿੱਤਰ ਨਾ ਬਣਾਇਆ। ਜਦ ਅਸੀਂ ਪ੍ਰਭੂ ਨੂੰ ਮਿਲਣ ਲਈ ਤੁਰੇ ਤਾਂ ਰਾਹ ਵਿੱਚ ਹੀ ਮਨ ਮਾਇਕ ਪਦਾਰਥਾਂ ਵਿੱਚ ਅਟਕ ਗਿਆ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हमने दुनियावी चेले, सगे-संबंधी और मित्र तो बहुत बना लिए, परंतु भगवान को अपना मित्र नहीं बनाया। जब हम प्रभु से मिलने के लिए चले थे, तब मार्ग में ही हमारा मन सांसारिक मोह में उलझ कर रह गया।',
      en: 'Satguru Kabir Saheb proclaims: We made numerous worldly friends, disciples, and relatives, but never made the Divine our Friend. Setting out to meet the Lord, our mind got trapped midway in worldly distractions.',
    },
    chintan: {
      pb: 'ਦੁਨਿਆਵੀ ਰਿਸ਼ਤੇ ਅਸਥਿਰ ਹਨ। ਅਸਲ ਮਿੱਤਰ ਕੇਵਲ ਪਰਮਾਤਮਾ ਹੈ ਜੋ ਜਨਮ-ਜੰਮਾਂਤਰਾਂ ਦਾ ਸਾਥੀ ਹੈ।',
      hi: 'दुनियावी रिश्ते क्षणिक हैं। वास्तविक मित्र केवल परमात्मा है जो जन्म-जन्मांतर का साथी है।',
      en: 'Worldly relationships are fleeting; the true and eternal Friend is God alone.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਕ ਮੋਹ-ਜਾਲ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਪ੍ਰੀਤ ਪੱਕੀ ਕਰੋ।',
      hi: 'सांसारिक मोह-जाल से ऊपर उठकर प्रभु से प्रेम पक्का करें।',
      en: 'Rising above worldly attachments, anchor your love firmly in the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਸਾਰੀ ਦੁਨੀਆਂ ਤੋਂ ਤੋੜ ਕੇ ਕੇਵਲ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜੋ।',
      hi: 'अपने मन को संपूर्ण दुनिया से हटाकर केवल प्रभु चरणों में जोड़ें।',
      en: 'Detach your mind from all else and unite it entirely with the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 97 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-97',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੭: ਕਾਰਨੁ ਬਪੁਰਾ ਕਿਆ ਕਰੈ (ਪ੍ਰਭੂ ਦੀ ਕਿਰਪਾ)',
      hi: 'सलोक ९७: कारनु बपुरा किआ करै (प्रभु की कृपा)',
      en: 'Salok 97: What Can Human Effort Achieve Without Divine Grace?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਰਨੁ ਬਪੁਰਾ ਕਿਆ ਕਰੈ ਜਉ ਰਾਮੁ ਨ ਕਰੈ ਸਹਾਇ ॥',
      'ਜਿਹ ਜਿਹ ਡਾਲੀ ਪਗੁ ਧਰਉ ਸੋਈ ਮੁਰਿ ਮੁਰਿ ਜਾਇ ॥੯੭॥',
    ],
    moolDevanagari: [
      'कबीर कारनु बपुरा किआ करै जउ रामु न करै सहाइ ॥',
      'जਿਹ जिह डाली पगु धरउ सोई मुरि मुरि जाइ ॥९७॥',
    ],
    moolRoman: [
      'Kabīr kāran bapurā kiā karai jau Rām na karai sahāi.',
      'Jih jih ḍālī pag dharau soī mur mur jāi. ||97||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਰਨੁ ਬਪੁਰਾ / कारनु बपुरा',
        meaning: {
          pb: 'ਵਿਚਾਰਾ ਸਾਧਨ ਯਾ ਯਤਨ',
          hi: 'बेचारा साधन या प्रयास',
          en: 'Helpless human effort / meager means',
        },
      },
      {
        word: 'ਸਹਾਇ / सहाइ',
        meaning: {
          pb: 'ਸਹਾਇਤਾ, ਮਦਦ',
          hi: 'सहायता, मदद',
          en: 'Assistance / divine help',
        },
      },
      {
        word: 'ਮੁਰਿ ਮੁਰਿ ਜਾਇ / मुरि मुरि जाइ',
        meaning: {
          pb: 'ਭੱਜ ਜਾਂਦੀ ਹੈ, ਟੁੱਟ ਜਾਂਦੀ ਹੈ',
          hi: 'मुड़ जाती है, टूट जाती है',
          en: 'Snaps or breaks repeatedly',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨੁੱਖ ਦਾ ਵਿਚਾਰਾ ਯਤਨ ਕੀ ਕਰ ਸਕਦਾ ਹੈ ਜੇਕਰ ਪ੍ਰਮਾਤਮਾ ਆਪ ਸਹਾਇਤਾ ਨਾ ਕਰੇ? ਅਸੀਂ ਰੁੱਖ ਦੀ ਜਿਸ ਜਿਸ ਟਾਹਣੀ ਉੱਤੇ (ਚੜ੍ਹਨ ਲਈ) ਪੈਰ ਰੱਖਦੇ ਹਾਂ, ਉਹੀ ਟਾਹਣੀ ਟੁੱਟ ਜਾਂਦੀ ਹੈ (ਭਾਵ ਬਿਨਾਂ ਪ੍ਰਭੂ ਕਿਰਪਾ ਦੇ ਸਾਰੇ ਕਰਮ ਅਧੂਰੇ ਰਹਿ ਜਾਂਦੇ ਹਨ)।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य का बेचारा प्रयास क्या कर सकता है यदि परमात्मा स्वयं सहायता न करे? हम पेड़ की जिस-जिस टहनी पर पैर रखते हैं, वही टहनी टूट जाती है (अर्थात बिना प्रभु कृपा के सभी साधन विफल हो जाते हैं)।',
      en: 'Satguru Kabir Saheb proclaims: What can helpless human effort accomplish if the Lord does not extend His grace? Whichever branch we step on breaks and snaps (without divine aid, all human strivings fail).',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਦੀ ਹਰ ਸਫਲਤਾ ਪਿੱਛੇ ਅਕਾਲ ਪੁਰਖ ਦੀ ਬਖ਼ਸ਼ਿਸ਼ ਹੁੰਦੀ ਹੈ। ਅਹੰਕਾਰ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਦਾ ਆਸਰਾ ਲਵੋ।',
      hi: 'जीवन की प्रत्येक सफलता के पीछे प्रभु की कृपा होती है। अहंकार त्यागकर प्रभु का आश्रय लें।',
      en: 'Every success in life stems from divine grace. Abandoning ego, seek refuge in God.',
    },
    acharana: {
      pb: 'ਕੋਈ ਵੀ ਕਾਰਜ ਆਰੰਭ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਭੂ ਦੀ ਸਹਾਇਤਾ ਲਈ ਅਰਦਾਸ ਕਰੋ।',
      hi: 'कोई भी कार्य आरंभ करने से पूर्व प्रभु की सहायता हेतु अरदास करें।',
      en: 'Before beginning any endeavor, pray for divine guidance and support.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਤਿਆਗ ਕੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਰਜ਼ਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने अहंकार को त्यागकर स्वयं को प्रभु की रजा में समर्पित करें।',
      en: 'Surrendering self-will, resign yourself lovingly to the divine Will.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 98 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-98',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੮: ਅਵਰਹ ਕਉ ਉਪਦੇਸਤੇ (ਕਰਨੀ ਤੇ ਕਥਨੀ)',
      hi: 'सलोक ९८: अवरह कउ उपदेसते (करनी और कथनी)',
      en: 'Salok 98: Preaching to Others While Neglecting Personal Practice',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਅਵਰਹ ਕਉ ਉਪਦੇਸਤੇ ਮੁਖ ਮੈ ਪਰਿ ਹੈ ਰੇਤੁ ॥',
      'ਰਾਸਿ ਬਿਰਾਨੀ ਰਾਖਤੇ ਖਾਯਾ ਘਰ ਕਾ ਖੇਤੁ ॥੯੮॥',
    ],
    moolDevanagari: [
      'कबीर अवरह कउ उपदेसते मुख मै परि है रेतु ॥',
      'रासि बिरानी राखते खाया घर का खेतु ॥९८॥',
    ],
    moolRoman: [
      'Kabīr avrah kau upadeste mukh mai pari hai ret.',
      'Rās birānī rākhte khāyā ghar kā khet. ||98||',
    ],
    shabdarth: [
      {
        word: 'ਉਪਦੇਸਤੇ / उपदेसते',
        meaning: {
          pb: 'ਹੋਰਨਾਂ ਨੂੰ ਉਪਦੇਸ਼ ਦੇਣ ਵਾਲੇ',
          hi: 'दूसरों को उपदेश देने वाले',
          en: 'Those who preach to others',
        },
      },
      {
        word: 'ਮੁਖ ਮੈ ਰੇਤੁ / मुख मै रेतु',
        meaning: {
          pb: 'ਮੂੰਹ ਵਿੱਚ ਸੁਆਹ ਜਾਂ ਰੇਤ ਪੈਣੀ (ਬਦਨਾਮੀ)',
          hi: 'मुख में राख या रेत पड़ना (निंदा व असफलता)',
          en: 'Ashes/sand in the mouth (disgrace and failure)',
        },
      },
      {
        word: 'ਰਾਸਿ ਬਿਰਾਨੀ / रासि बिरानी',
        meaning: {
          pb: 'ਪਰਾਈ ਪੂੰਜੀ (ਦੂਜਿਆਂ ਦੀਆਂ ਗੱਲਾਂ)',
          hi: 'पराई पूंजी (दूसरों की बातें संभालना)',
          en: 'Others\' wealth / borrowed knowledge',
        },
      },
      {
        word: 'ਘਰ ਕਾ ਖੇਤੁ / घर का खेतु',
        meaning: {
          pb: 'ਆਪਣਾ ਹਿਰਦਾ ਰੂਪੀ ਖੇਤ',
          hi: 'अपना हृदय रूपी खेत',
          en: 'One\'s own field of the heart',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜਿਹੜੇ ਮਨੁੱਖ ਹੋਰਨਾਂ ਨੂੰ ਤਾਂ ਉਪਦੇਸ਼ ਦਿੰਦੇ ਹਨ ਪਰ ਆਪ ਉਸ ’ਤੇ ਅਮਲ ਨਹੀਂ ਕਰਦੇ, ਉਨ੍ਹਾਂ ਦੇ ਮੂੰਹ ਵਿੱਚ ਰੇਤ ਪੈਂਦੀ ਹੈ (ਉਹ ਨਿੰਦਣਯੋਗ ਹੁੰਦੇ ਹਨ)। ਉਹ ਪਰਾਈ ਪੂੰਜੀ ਸੰਭਾਲਦਿਆਂ-ਸੰਭਾਲਦਿਆਂ ਆਪਣੇ ਘਰ ਦਾ ਖੇਤ (ਆਪਣਾ ਜੀਵਨ) ਗੁਆ ਬੈਠਦੇ ਹਨ।',
      hi: 'हे कबीर! जो मनुष्य दूसरों को तो उपदेश देते हैं किंतु स्वयं आचरण नहीं करते, उनके मुख में रेत पड़ती है (वे अपमानित होते हैं)। वे दूसरों की पूंजी संभालते-संभाल्ते अपने घर का खेत (अपना जीवन) बर्बाद कर लेते हैं।',
      en: 'O Kabir! Those who preach to others but do not practice it themselves suffer disgrace. Preserving borrowed knowledge, they ruin their own field of the heart (neglecting spiritual practice).',
    },
    chintan: {
      pb: 'ਉਪਦੇਸ਼ ਦੇਣ ਨਾਲੋਂ ਆਪਣੇ ਜੀਵਨ ਵਿੱਚ ਧਰਮ ਨੂੰ ਕਮਾਉਣਾ ਵੱਧ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
      hi: 'उपदेश देने की अपेक्षा अपने जीवन में धर्म का आचरण करना अधिक महत्वपूर्ण है।',
      en: 'Living the truth yourself is infinitely more vital than preaching it to others.',
    },
    acharana: {
      pb: 'ਪਹਿਲਾਂ ਆਪ ਗੁਣਾਂ ਨੂੰ ਧਾਰਨ ਕਰੋ, ਫਿਰ ਦੂਜਿਆਂ ਨੂੰ ਉਪਦੇਸ਼ ਦਿਓ।',
      hi: 'पहले स्वयं गुणों को धारण करें, पश्चात दूसरों को उपदेश दें।',
      en: 'First embody virtues in your own life before instructing others.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਅੰਤਸ਼ਕਰਣ ਨੂੰ ਸ਼ੁੱਧ ਕਰਨ ਵਿੱਚ ਆਪਣੀ ਸਾਰੀ ਊਰਜਾ ਲਗਾਓ।',
      hi: 'अपने अंतःकरण को शुद्ध करने में अपनी समस्त ऊर्जा लगाएं।',
      en: 'Dedicate your complete energy to purifying your inner consciousness.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 99 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-99',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੯੯: ਸਾਧੂ ਕੀ ਸੰਗਤਿ ਰਹਉ (ਸੰਤ ਸੰਗ)',
      hi: 'सलोक ९९: साधू की संगति रहउ (संत संग)',
      en: 'Salok 99: Abide in the Holy Company of Saints, Even on Meager Fare',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਧੂ ਕੀ ਸੰਗਤਿ ਰਹਉ ਜਉ ਕੀ ਭੂਸੀ ਖਾਉ ॥',
      'ਹੋਨਹਾਰੁ ਸੋ ਹੋਇ ਹੈ ਸਾਕਤ ਸੰਗਿ ਨ ਜਾਉ ॥੯੯॥',
    ],
    moolDevanagari: [
      'कबीर साधू की संगति रहउ जउ की भूसी खाउ ॥',
      'होनहारु सो होइ hai साकत संगि न जाउ ॥९९॥',
    ],
    moolRoman: [
      'Kabīr sādhū kī sangat rahau jau kī bhūsī khāu.',
      'Honahār so hoi hai sākat sang na jāu. ||99||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਧੂ ਕੀ ਸੰਗਤਿ / साधू की संगति',
        meaning: {
          pb: 'ਗੁਰਮੁਖਾਂ ਅਤੇ ਸੰਤਾਂ ਦਾ ਸਾਥ',
          hi: 'संतों और गुरमुखों का साथ',
          en: 'Holy company of enlightened saints',
        },
      },
      {
        word: 'ਕੀ ਭੂਸੀ / की भूसी',
        meaning: {
          pb: 'ਅਨਾਜ ਦਾ ਛਿਲਕਾ ਯਾ ਰੁੱਖੀ-ਸੁੱਕੀ ਰੋਟੀ',
          hi: 'अनाज का छिलका या रूखी-सूखी रोटी',
          en: 'Husk of grain / humble dry crust',
        },
      },
      {
        word: 'ਸਾਕਤ ਸੰਗਿ / साकत संगि',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਮਨੁੱਖ ਦੀ ਸੰਗਤ',
          hi: 'परमात्मा से विमुख विकारी की संगति',
          en: 'Company of the godless materialist',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਭਾਵੇਂ ਮੈਨੂੰ ਰੁੱਖੀ-ਸੁੱਕੀ (ਭੂਸੀ) ਖਾਣੀ ਪਵੇ, ਮੈਂ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਹੀ ਰਹਾਂਗਾ। ਜੋ ਹੋਣਾ ਹੈ ਉਹ ਹੋਵੇਗਾ, ਪਰ ਮੈਂ ਕਦਾਚਿਤ ਵੀ ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਸਾਕਤ ਦੀ ਸੰਗਤ ਵਿੱਚ ਨਹੀਂ ਜਾਵਾਂਗਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-चाहे मुझे रूखी-सूखी (अनाज का छिलका या सूखी रोटी) खानी पड़े, मैं संतों की संगति में ही रहूंगा। जो होना है वह होगा, किंतु मैं कदापि परमात्मा से विमुख साकत की संगति में नहीं जाऊंगा।',
      en: 'Satguru Kabir Saheb proclaims: Even if I must eat dry husk, I will dwell in the holy company of saints. Whatever is destined will happen, but I will never keep company with the godless.',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਆਤਮਿਕ ਬਲ ਦਿੰਦੀ ਹੈ ਜਦਕਿ ਵਿਕਾਰੀਆਂ ਦੀ ਸੰਗਤ ਪਤਨ ਦਾ ਕਾਰਨ ਬਣਦੀ ਹੈ।',
      hi: 'संतों की संगति आत्मिक बल देती है जबकि विकारियों की संगति पतन का कारण बनती है।',
      en: 'Holy company empowers the soul, whereas vicious company causes downfall.',
    },
    acharana: {
      pb: 'ਸਤਿਸੰਗ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਆਧਾਰ ਬਣਾਓ ਅਤੇ ਕੁਸੰਗ ਤੋਂ ਸਦਾ ਬਚੋ।',
      hi: 'सत्संग को अपने जीवन का आधार बनाएं और कुसंग से सदैव बचें।',
      en: 'Make satsang your life foundation and forever shun bad company.',
    },
    samarpan: {
      pb: 'ਸੰਤ ਜਨਾਂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੀਵਨ ਬਿਤਾਉਣ ਦਾ ਦ੍ਰਿੜ੍ਹ ਸੰਕਲਪ ਕਰੋ।',
      hi: 'संत जनों के चरणों में जीवन व्यतीत करने का दृढ़ संकल्प करें।',
      en: 'Resolve firmly to spend your life in the fellowship of saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 100 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-100',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੦: ਸੰਗਤਿ ਸਾਧ ਕੀ ਦਿਨ ਦਿਨ (ਪ੍ਰੇਮ ਵਾਧਾ)',
      hi: 'सलोक १००: संगति साध की दिन दिन (प्रेम वृद्धि)',
      en: 'Salok 100: Company of the Holy Deepens Love Daily; The Impure Mind Cannot Be Washed Clean',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਗਤਿ ਸਾਧ ਕੀ ਦਿਨ ਦਿਨ ਦੂਨਾ ਹੇਤੁ ॥',
      'ਸਾਕਤ ਕਾਰੀ ਕਾਂਬਰੀ ਧੋਏ ਹੋਇ ਨ ਸੇਤੁ ॥੧੦੦॥',
    ],
    moolDevanagari: [
      'कबीर संगति साध की दिन दिन दूना हेतु ॥',
      'साकत कारी कांबरी धोए होइ न सेतु ॥१०१॥',
    ],
    moolRoman: [
      'Kabīr sangat sādh kī din din dūnā het.',
      'Sākat kārī kāmbarī dhoe hoi na set. ||100||',
    ],
    shabdarth: [
      {
        word: 'ਦੂਨਾ ਹੇਤੁ / दूना हेतु',
        meaning: {
          pb: 'ਪ੍ਰੇਮ ਵਿੱਚ ਦੂਣਾ ਵਾਧਾ',
          hi: 'प्रेम में दोगुना विस्तार',
          en: 'Doubling of love and devotion',
        },
      },
      {
        word: 'ਕਾਰੀ ਕਾਂਬਰੀ / कारी कांबरी',
        meaning: {
          pb: 'ਕਾਲਾ ਕੰਬਲ',
          hi: 'काला कंबल',
          en: 'Black blanket',
        },
      },
      {
        word: 'ਸੇਤੁ / सेतु',
        meaning: {
          pb: 'ਚਿੱਟਾ, ਨਿਰਮਲ',
          hi: 'सफेद, निर्मल',
          en: 'White / pure',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਕਰਨ ਨਾਲ ਪ੍ਰਮਾਤਮਾ ਨਾਲ ਪ੍ਰੇਮ ਦਿਨੋ-ਦਿਨ ਦੂਣਾ ਹੁੰਦਾ ਹੈ। ਪਰ ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਮਨੁੱਖ ਕਾਲੇ ਕੰਬਲ ਵਾਂਗ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨੂੰ ਕਿੰਨਾ ਵੀ ਧੋ ਲਈਏ ਉਹ ਕਦੇ ਚਿੱਟਾ (ਨਿਰਮਲ) ਨਹੀਂ ਹੁੰਦਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संतों की संगति करने से परमात्मा से प्रेम दिन-प्रतिदिन दोगुना होता है। किंतु परमात्मा से विमुख मनुष्य काले कंबल के समान होता है, जिसे कितना भी धोएं वह कभी सफेद (निर्मल) नहीं होता।',
      en: 'Satguru Kabir Saheb proclaims: In the company of saints, love for the Divine doubles day by day. But the godless person is like a black blanket which, no matter how much it is washed, never becomes white.',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਮਨ ਨੂੰ ਨਿਰਮਲ ਕਰਦੀ ਹੈ ਜਦਕਿ ਹਠੀ ਮਨਮੁਖ ਆਪਣੇ ਸੁਭਾਅ ਤੋਂ ਬਾਜ਼ ਨਹੀਂ ਆਉਂਦਾ।',
      hi: 'संतों की संगति मन को निर्मल करती है जबकि हठी मनमुख अपने स्वभाव से बाज नहीं आता।',
      en: 'Holy association purifies the mind, while stubborn egoists remain unwashed.',
    },
    acharana: {
      pb: 'ਸਤਿਸੰਗ ਰਾਹੀਂ ਆਪਣੇ ਹਿਰਦੇ ਨੂੰ ਮਾਂਜ ਕੇ ਪਵਿੱਤਰ ਬਣਾਓ।',
      hi: 'सत्संग के द्वारा अपने हृदय को माँजकर पवित्र बनाएं।',
      en: 'Polish and cleanse your heart through regular satsang.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੁੜ ਕੇ ਆਪਣੇ ਅੰਦਰੋਂ ਮੈਲ ਧੋਵੋ।',
      hi: 'सतगुरु के चरणों में जुड़कर अपने अंदर से मैल धोएं।',
      en: 'Connecting with Satguru, wash away all inner impurities.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 101 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-101',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੧: ਮਨੁ ਮੁੰਡਿਆ ਨਹੀ ਕੇਸ ਮੁੰਡਾਏ (ਅੰਦਰੂਨੀ ਸ਼ੁੱਧੀ)',
      hi: 'सलोक १०१: मनु मुंडिआ नही केस मुंडाए (आंतरिक शुद्धि)',
      en: 'Salok 101: Shaving the Head Without Cleansing the Mind Is Futile',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਨੁ ਮੁੰਡਿਆ ਨਹੀ ਕੇਸ ਮੁੰਡਾਏ ਕਾਂਇ ॥',
      'ਜੋ ਕਿਛੁ ਕੀਆ ਸੋ ਮਨ ਕੀਆ ਮੁੰਡਾ ਮੂੰਡੁ ਅਜਾਂਇ ॥੧੦੧॥',
    ],
    moolDevanagari: [
      'कबीर मनु मुंडिआ नही केस मुंडाए काइ ॥',
      'जो किछु कीआ सो मन कीआ मुंडा मुंडु अजाइ ॥१०१॥',
    ],
    moolRoman: [
      'Kabīr man mundiā nahī kes mundāe kāi.',
      'Jo kichu kīā so man kīā mundā mūnd ajāi. ||101||',
    ],
    shabdarth: [
      {
        word: 'ਮਨੁ ਮੁੰਡਿਆ / मनु मुंडिआ',
        meaning: {
          pb: 'ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨੂੰ ਮੁੰਨਿਆ (ਖ਼ਤਮ ਕੀਤਾ)',
          hi: 'मन के विकारों को मुंडना (समाप्त करना)',
          en: 'Shaving/cleansing the mind of vices',
        },
      },
      {
        word: 'ਕੇਸ ਮੁੰਡਾਏ / केस मुंडाए',
        meaning: {
          pb: 'ਸਿਰ ਦੇ ਵਾਲ ਮੁਨਾਉਣੇ',
          hi: 'सिर के बाल मुंडाना',
          en: 'Shaving the hair of the head',
        },
      },
      {
        word: 'ਅਜਾਂਇ / अजाइ',
        meaning: {
          pb: 'ਅਕਾਰਥ, ਵਿਅਰਥ',
          hi: 'व्यर्थ, निष्फल',
          en: 'In vain / uselessly',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇਕਰ ਤੂੰ ਆਪਣਾ ਮਨ ਨਹੀਂ ਮੁੰਨਿਆ (ਵਿਕਾਰਾਂ ਤੋਂ ਖ਼ਾਲੀ ਨਹੀਂ ਕੀਤਾ) ਤਾਂ ਸਿਰ ਦੇ ਵਾਲ ਕਿਉਂ ਮੁਨਾਏ ਹਨ? ਜੋ ਕੁਝ ਵੀ ਚੰਗਾ ਜਾਂ ਮੰਦਾ ਕਰਦਾ ਹੈ ਉਹ ਮਨ ਹੀ ਕਰਦਾ ਹੈ, ਸਿਰ ਮੁਨਾਉਣਾ ਤਾਂ ਵਿਅਰਥ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि तूने अपना मन नहीं मुंडा (विकारों से मुक्त नहीं किया) तो सिर के बाल क्यों मुंडाए हैं? जो कुछ भी अच्छा या बुरा करता है वह मन ही करता है, सिर मुंडाना तो व्यर्थ है।',
      en: 'Satguru Kabir Saheb proclaims: If you have not shaved your mind of vices, why shave the hair of your head? Whatever is done—good or bad—is done by the mind; shaving the head is utterly useless.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਭੇਖ ਜਾਂ ਮੁਨੇ ਹੋਏ ਸਿਰ ਨਾਲੋਂ ਮਨ ਦੀ ਪਵਿੱਤਰਤਾ ਅਤੇ ਅੰਦਰੂਨੀ ਅਨੁਸ਼ਾਸਨ ਅਤਿ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
      hi: 'बाहरी वेश अथवा मुंडे हुए सिर की अपेक्षा मन की पवित्रता और आंतरिक अनुशासन अति महत्वपूर्ण है।',
      en: 'Inner purity of mind and discipline far surpass outer religious disguises or shaven heads.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਛੱਡ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਸ਼ੁੱਧ ਕਰੋ।',
      hi: 'बाहरी दिखावे छोड़कर अपने मन को नाम सिमरन से पवित्र करें।',
      en: 'Discarding outer show, purify your mind through divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਦੀ ਹਉਮੈ ਨੂੰ ਗੁਰੂ ਸ਼ਬਦ ਅੱਗੇ ਭੇਟ ਕਰਕੇ ਨਿਰਮਲ ਬਣੋ।',
      hi: 'अपने मन के अहंकार को गुरु शब्द के आगे भेंट कर निर्मल बनें।',
      en: 'Surrender your egoistic mind before the Guru\'s Word to become pure.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 102 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-102',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੨: ਰਾਮੁ ਨ ਛੋਡੀਐ ਤਨੁ ਧਨੁ ਜਾਇ (ਅਡੋਲ ਪ੍ਰੇਮ)',
      hi: 'सलोक १०२: रामु न छोडीऐ तनु धनु जाइ (अडोल प्रेम)',
      en: 'Salok 102: Never Forsake the Lord, Even if Body and Wealth Perish',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮੁ ਨ ਛੋਡੀਐ ਤਨੁ ਧਨੁ ਜਾਇ ਤ ਜਾਉ ॥',
      'ਚਰਨ ਕਮਲ ਚਿਤੁ ਬੇਧਿਆ ਰਾਮਹਿ ਨਾਮਿ ਸਮਾਉ ॥੧੦੨॥',
    ],
    moolDevanagari: [
      'कबीर रामु न छोडीऐ तनु धनु जाइ त जाउ ॥',
      'चरन कमल चितु बेधिआ रामहि नामि समाउ ॥१०२॥',
    ],
    moolRoman: [
      'Kabīr Rām na choḍīai tan dhan jāi ta jāu.',
      'Charan kamal chit bedhiā rāmah nām samāu. ||102||',
    ],
    shabdarth: [
      {
        word: 'ਤਨੁ ਧਨੁ ਜਾਇ / तनु धनु जाइ',
        meaning: {
          pb: 'ਸਰੀਰ ਤੇ ਧਨ ਨਸ਼ਟ ਹੋ ਜਾਵੇ',
          hi: 'शरीर और धन नष्ट हो जाए',
          en: 'Even if body and wealth perish',
        },
      },
      {
        word: 'ਚਰਨ ਕਮਲ / चरन कमल',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦੇ ਪਵਿੱਤਰ ਚਰਨ',
          hi: 'प्रभु के पवित्र चरण',
          en: 'Lotus feet of the Lord',
        },
      },
      {
        word: 'ਚਿਤੁ ਬੇਧਿਆ / चितु बेधिआ',
        meaning: {
          pb: 'ਮਨ ਵਿੰਨ੍ਹਿਆ ਗਿਆ, ਜੁੜ ਗਿਆ',
          hi: 'मन विंध गया, जुड़ गया',
          en: 'Mind is pierced and lovingly bound',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਕਦੇ ਨਾ ਛੱਡੀਏ, ਭਾਵੇਂ ਸਰੀਰ ਅਤੇ ਧਨ ਸਭ ਕੁਝ ਨਸ਼ਟ ਹੋ ਜਾਵੇ ਤਾਂ ਵੀ ਭਾਵੇਂ ਹੋ ਜਾਵੇ। ਸਾਡਾ ਚਿੱਤ ਪ੍ਰਭੂ ਦੇ ਚਰਨ ਕਮਲਾਂ ਵਿੱਚ ਵਿੰਨ੍ਹਿਆ ਗਿਆ ਹੈ ਅਤੇ ਅਸੀਂ ਰਾਮ ਦੇ ਨਾਮ ਵਿੱਚ ਹੀ ਸਮਾਏ ਹੋਏ ਹਾਂ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-परमात्मा का नाम कभी न छोड़ें, भले ही शरीर और धन सब कुछ नष्ट हो जाए। हमारा चित्त प्रभु के चरण कमलों में विंध गया है और हम राम के नाम में ही लीन हैं।',
      en: 'Satguru Kabir Saheb proclaims: Never forsake the Lord, even if body and wealth perish. Our consciousness is pierced and bound to His lotus feet, and we remain absorbed in the Divine Name.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਅਤੇ ਪ੍ਰੇਮ ਸਭ ਤੋਂ ਉੱਚੀ ਪੂੰਜੀ ਹੈ ਜਿਸ ਲਈ ਸਭ ਕੁਝ ਕੁਰਬਾਨ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
      hi: 'प्रभु का नाम और प्रेम सर्वोच्च पूंजी है जिसके लिए सब कुछ कुर्बान किया जा सकता है।',
      en: 'Divine remembrance is the supreme treasure for which all else can be joyfully sacrificed.',
    },
    acharana: {
      pb: 'ਹਰ ਹਾਲਤ ਵਿੱਚ ਪ੍ਰਭੂ ਸਿਮਰਨ ਅਤੇ ਆਪਣੇ ਧਰਮ ਨਾਲ ਅਡੋਲ ਜੁੜੇ ਰਹੋ।',
      hi: 'प्रत्येक परिस्थिति में प्रभु सिमरन और अपने धर्म से अडिग जुड़े रहें।',
      en: 'In every circumstance, remain steadfast in divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ, ਮਨ ਅਤੇ ਧਨ ਸਭ ਕੁਝ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना तन, मन और धन सब कुछ प्रभु चरणों में समर्पित करें।',
      en: 'Dedicate your body, mind, and wealth entirely at the divine feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 103 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-103',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੩: ਜੋ ਹਮ ਜੰਤੁ ਬਜਾਵਤੇ (ਸਰੀਰਕ ਵਾਜਾ)',
      hi: 'सलोक १०३: जो हम जंतु बजावते (शरीरिक बाजा)',
      en: 'Salok 103: The Instrument of the Body When the Player Departs',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੋ ਹਮ ਜੰਤੁ ਬਜਾਵਤੇ ਟੂਟਿ ਗਈਂ ਸਭ ਤਾਰ ॥',
      'ਜੰਤੁ ਬਿਚਾਰਾ ਕਿਆ ਕਰੈ ਚਲੇ ਬਜਾਵਨਹਾਰ ॥੧੦੩॥',
    ],
    moolDevanagari: [
      'कबीर जो हम जंतु बजावते टूटि गईं सभ तार ॥',
      'जंतु बिचारा किआ करै चले बजावनहार ॥१०३॥',
    ],
    moolRoman: [
      'Kabīr jo ham jant bajāvte ṭūṭ gaīṁ sabh tār.',
      'Jant bichārā kiā karai chale bajāvanhār. ||103||',
    ],
    shabdarth: [
      {
        word: 'ਜੰਤੁ ਬਜਾਵਤੇ / जंतु बजावते',
        meaning: {
          pb: 'ਸਰੀਰਕ ਸਾਜ਼ ਨੂੰ ਵਜਾਉਣਾ (ਜੀਵਨ ਖੇਡ)',
          hi: 'शरीर रूपी साज को बजाना',
          en: 'Playing the instrument of the body',
        },
      },
      {
        word: 'ਟੂਟਿ ਗਈਂ ਤਾਰ / टूटि गईं तार',
        meaning: {
          pb: 'ਮੋਹ-ਆਸ ਦੀਆਂ ਤਾਰਾਂ ਟੁੱਟ ਗਈਆਂ',
          hi: 'मोह-आशा की तारें टूट गईं',
          en: 'Strings of worldly attachment snapped',
        },
      },
      {
        word: 'ਬਜਾਵਨਹਾਰ / बजावनहार',
        meaning: {
          pb: 'ਵਜਾਉਣ ਵਾਲਾ (ਪ੍ਰਾਣ, ਮਨ)',
          hi: 'बजाने वाला (प्राण, जीव)',
          en: 'The player / life breath',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅਸੀਂ ਸਰੀਰ ਦਾ ਜਿਹੜਾ ਵਾਜਾ (ਸੰਕਲਪਾਂ-ਵਿਕਲਪਾਂ ਦਾ) ਵਜਾਉਂਦੇ ਸੀ, ਉਸ ਦੀਆਂ ਸਾਰੀਆਂ ਮੋਹ ਰੂਪੀ ਤਾਰਾਂ ਟੁੱਟ ਗਈਆਂ ਹਨ। ਹੁਣ ਵਿਚਾਰਾ ਵਾਜਾ ਕੀ ਕਰ ਸਕਦਾ ਹੈ ਜਦ ਇਸ ਨੂੰ ਵਜਾਉਣ ਵਾਲਾ (ਜੀਵ) ਹੀ ਚਲਾ ਗਿਆ ਹੈ?',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हमने शरीर का जो बाजा (संकल्प-विकल्पों का) बजाया था, उसकी मोह रूपी सभी तारें टूट चुकी हैं। अब बेचारा बाजा क्या करे जब इसे बजाने वाला (प्राण) ही चला गया है?',
      en: 'Satguru Kabir Saheb proclaims: The strings of attachment on the musical instrument of our body have snapped. What can the helpless instrument do now that the Player has departed?',
    },
    chintan: {
      pb: 'ਇਹ ਸਰੀਰ ਨਾਸ਼ਵਾਨ ਹੈ। ਜਦ ਤੱਕ ਪ੍ਰਾਣ ਹਨ, ਪ੍ਰਭੂ ਭਗਤੀ ਕਰ ਲਉ।',
      hi: 'यह शरीर नश्वर है। जब तक प्राण हैं, प्रभु भक्ति कर लें।',
      en: 'This body is ephemeral. While breath remains, dedicate yourself to divine devotion.',
    },
    acharana: {
      pb: 'ਜੀਵਨ ਦੇ ਇਸ ਮੌਕੇ ਨੂੰ ਗਵਾਓ ਨਾ ਅਤੇ ਹਰ ਸਾਹ ਪ੍ਰਭੂ ਲੇਖੇ ਲਾਓ।',
      hi: 'जीवन के इस अवसर को गंवाएं न और प्रत्येक श्वास प्रभु लेखे लगाएं।',
      en: 'Do not waste this precious life; devote every breath to the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਚਰਨ-ਸ਼ਰਨ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने आपको प्रभु की चरण-शरण में पूर्णतः समर्पित करें।',
      en: 'Surrender yourself completely at the holy feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 104 (Ang 1367)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-104',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੪: ਮਾਇ ਮੂੰਡਉ ਤਿਹ ਗੂਰੁ ਕੀ (ਅਸਤ ਗੁਰੂ)',
      hi: 'सलोक १०४: माइ मुंडउ तिह गुर की (असत गुरु)',
      en: 'Salok 104: Condemning False Gurus Who Sink With Their Disciples in Ritualism',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਇ ਮੂੰਡਉ ਤਿਹ ਗੁਰੂ ਕੀ ਜਾ ਤੇ ਭਰਮੁ ਨ ਜਾਇ ॥',
      'ਆਪ ਡੁਬੇ ਚਹੁ ਬੇਦ ਮਹਿ ਚੇਲੇ ਦੀਏ ਬਹਾਇ ॥੧੦੪॥',
    ],
    moolDevanagari: [
      'कबीर माइ मुंडउ तिह गुरु की जा ते भरमु न जाइ ॥',
      'आप डुबे चहु बेद महि चेले दीए बहाइ ॥१०४॥',
    ],
    moolRoman: [
      'Kabīr māi mūṇḍau tih gurū kī jā te bharam na jāi.',
      'Āp dube chahu bed mahi chele dīe bahāi. ||104||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਇ ਮੂੰਡਉ / माइ मुंडउ',
        meaning: {
          pb: 'ਸਿਰ ਮੁੰਨ ਦੇਈਏ (ਤ੍ਰਿਸਕਾਰ ਕਰੀਏ)',
          hi: 'सिर मुंड देना चाहिए (तिरस्कार करना)',
          en: 'Condemn/shun utterly',
        },
      },
      {
        word: 'ਚਹੁ ਬੇਦ ਮਹਿ / चहु बेद महि',
        meaning: {
          pb: 'ਚਾਰੇ ਵੇਦਾਂ ਦੇ ਕਰਮਕਾਂਡ ਵਿੱਚ',
          hi: 'चारों वेदों के कर्मकांड में',
          en: 'In the ritualistic formalism of the four Vedas',
        },
      },
      {
        word: 'ਚੇਲੇ ਬਹਾਇ / चेले बहाइ',
        meaning: {
          pb: 'ਚੇਲਿਆਂ ਨੂੰ ਵੀ ਰੋੜ੍ਹ ਦਿੱਤਾ',
          hi: 'चेलों को भी डुबो दिया',
          en: 'Sank their disciples along with them',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉਸ ਗੁਰੂ ਦਾ ਸਿਰ ਮੁੰਨ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ (ਉਸ ਦਾ ਤ੍ਰਿਸਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ) ਜਿਸ ਪਾਸੋਂ ਮਨ ਦਾ ਭਰਮ ਨਵਿਰਤ ਨਹੀਂ ਹੁੰਦਾ। ਐਸੇ ਗੁਰੂ ਆਪ ਤਾਂ ਚਾਰੇ ਵੇਦਾਂ ਦੇ ਕਰਮਕਾਂਡ ਵਿੱਚ ਡੁੱਬੇ ਹੀ ਹਨ, ਨਾਲੇ ਆਪਣੇ ਚੇਲਿਆਂ ਨੂੰ ਵੀ ਰੋੜ੍ਹ ਕੇ ਲੈ ਜਾਂਦੇ ਹਨ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-ऐसे गुरु का सिर मुंड देना चाहिए (उसका तिरस्कार करना चाहिए) जिससे मन का भ्रम दूर नहीं होता। ऐसे गुरु स्वयं तो चारों वेदों के कर्मकांड में डूबे ही हैं, साथ ही अपने चेलों को भी डुबो देते हैं।',
      en: 'Satguru Kabir Saheb proclaims: Condemn that guru whose teachings do not dispel mental doubt. Such gurus themselves drown in ritualistic dogmas, and sweep their disciples away with them into spiritual ruin.',
    },
    chintan: {
      pb: 'ਸੱਚਾ ਗੁਰੂ ਉਹ ਹੈ ਜੋ ਮਨ ਦਾ ਅੰਧਕਾਰ ਮਿਟਾ ਕੇ ਬ੍ਰਹਮ ਗਿਆਨ ਪ੍ਰਦਾਨ ਕਰੇ। ਕਰਮਕਾਂਡੀ ਪਾਖੰਡ ਤੋਂ ਬਚੋ।',
      hi: 'सच्चा गुरु वह है जो मन का अंधकार मिटाकर ब्रह्म ज्ञान प्रदान करे। कर्मकांडी पाखंड से बचें।',
      en: 'A true Guru dispels inner darkness and bestows divine wisdom. Shun ritualistic hypocrisy.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਸ਼ਬਦ ਨੂੰ ਪਛਾਣੋ ਅਤੇ ਪਾਖੰਡੀ ਅਡੰਬਰਾਂ ਤੋਂ ਮੁਕਤ ਹੋਵੋ।',
      hi: 'सतगुरु के सच्चे शब्द को पहचानें और पाखंडी आडंबरों से मुक्त हों।',
      en: 'Recognize the authentic Word of the Satguru and free yourself from empty rituals.',
    },
    samarpan: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਜਾ ਕੇ ਆਪਣਾ ਜੀਵਨ ਸਫल ਕਰੋ।',
      hi: 'पूर्ण सतगुरु की शरण में जाकर अपना जीवन सफल बनाएं।',
      en: 'Seek refuge in the complete Satguru to crown your life with success.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 105 (Ang 1367-1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-105',
    category: 'salok',
    ang: 1367,
    title: {
      pb: 'ਸਲੋਕ ੧੦੫: ਜੇਤੇ ਪਾਪ ਕੀਏ ਰਾਖੇ ਤਲੈ (ਕਰਮਾਂ ਦਾ ਲੇਖਾ)',
      hi: 'सलोक १०५: जेते पाप कीए राखे तलै (कर्मों का लेखा)',
      en: 'Salok 105: Hidden Sins Are Finally Exposed Before the Divine Judge',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੇਤੇ ਪਾਪ ਕੀਏ ਰਾਖੇ ਤਲੈ ਦੁਰਾਇ ॥',
      'ਪਰਗਟ ਭਏ ਨਿਦਾਨ ਸਭ ਜਬ ਪੂਛੇ ਧਰਮ ਰਾਇ ॥੧੦੫॥',
    ],
    moolDevanagari: [
      'कबीर जेते पाप कीए राखे तलै दुराइ ॥',
      'परगट भए निदान सभ जब पूछे धरम राइ ॥१०५॥',
    ],
    moolRoman: [
      'Kabīr jete pāp kīe rākhe talai durāi.',
      'Pargat bhae nidān sabh jab pūche dharam rāi. ||105||',
    ],
    shabdarth: [
      {
        word: 'ਰਾਖੇ ਤਲੈ ਦੁਰਾਇ / राखे तलै दुराइ',
        meaning: {
          pb: 'ਹਿਰਦੇ ਵਿੱਚ ਲੁਕਾ ਕੇ ਰੱਖੇ',
          hi: 'हृदय में छिपाकर रखे',
          en: 'Concealed deep within the heart',
        },
      },
      {
        word: 'ਨਿਦਾਨ / निदान',
        meaning: {
          pb: 'ਆਖਿਰਕਾਰ, ਅੰਤ ਨੂੰ',
          hi: 'अंततः, आखिरकार',
          en: 'Ultimately / finally',
        },
      },
      {
        word: 'ਧਰਮ ਰਾਇ / धरम राइ',
        meaning: {
          pb: 'ਧਰਮਰਾਜ, ਨਿਆਂ ਦਾ ਦੇਵਤਾ (ਕਰਮਾਂ ਦਾ ਨਿਆਂ)',
          hi: 'धर्मराज, न्याय का देवता',
          en: 'Dharam Rai / the divine Arbiter of karma',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨੁੱਖ ਨੇ ਜਿਤਨੇ ਵੀ ਪਾਪ ਕੀਤੇ ਸਨ ਅਤੇ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਲੁਕਾ ਕੇ ਰੱਖੇ ਸਨ, ਉਹ ਸਾਰੇ ਆਖਿਰਕਾਰ ਪ੍ਰਗਟ ਹੋ ਜਾਂਦੇ ਹਨ, ਜਦ ਧਰਮਰਾਜ (ਕਰਮਾਂ ਦਾ ਨਿਆਂ) ਪੁੱਛਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य ने जितने भी पाप किए थे और अपने हृदय में छिपाकर रखे थे, वे सब अंततः प्रकट हो जाते हैं, जब धर्मराज (कर्मों का न्याय) पूछताछ करता है।',
      en: 'Satguru Kabir Saheb proclaims: All sins that a person commits and tries to hide secretly within the heart are ultimately exposed when the divine Arbiter of karma calls for the accounting.',
    },
    chintan: {
      pb: 'ਕੋਈ ਵੀ ਕਰਮ ਲੁਕਿਆ ਨਹੀਂ ਰਹਿੰਦਾ। ਕਰਮਾਂ ਦਾ ਹਿਸਾਬ ਅਟੱਲ ਹੈ।',
      hi: 'कोई भी कर्म छिपा नहीं रहता। कर्मों का हिसाब अटल है।',
      en: 'No action remains hidden; the law of karma is absolute and unerring.',
    },
    acharana: {
      pb: 'ਹਮੇਸ਼ਾ ਨੇਕ ਕਰਮ ਕਰੋ ਅਤੇ ਪਾਪਾਂ ਤੋਂ ਬਚ ਕੇ ਜੀਵਨ ਬਿਤਾਓ।',
      hi: 'सदैव नेक कर्म करें और पापों से बचकर जीवन बिताएं।',
      en: 'Ever perform noble deeds and live a life free of transgression.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਦਇਆ ਮੰਗ ਕੇ ਆਪਣੇ ਪਿਛਲੇ ਕਰਮਾਂ ਦੀ ਖਿਮਾ ਪਾਓ।',
      hi: 'प्रभु की दया मांगकर अपने पिछले कर्मों की क्षमा पाएं।',
      en: 'Seeking divine mercy, wash away past transgressions in devotion.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੭-੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 106 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-106',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੦੬: ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ (ਕੁਟੰਬ ਮੋਹ)',
      hi: 'सलोक १०६: हरि का सिमरनु छाडि कै (कुटुंब मोह)',
      en: 'Salok 106: Forsaking Divine Remembrance for Family Attachment',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਪਾਲਿਓ ਬਹੁਤੁ ਕੁਟੰਬੁ ॥',
      'ਧੰਧਾ ਕਰਤਾ ਰਹਿ ਗਇਆ ਭਾਈ ਰਹਿਆ ਨ ਬੰਧੁ ॥੧੦੬॥',
    ],
    moolDevanagari: [
      'कबीर हरि का सिमरनु छाडि कै पालिओ बहुतु कुटुंबु ॥',
      'धंधा करता रहि गइआ भाई रहिआ न बंधु ॥१०६॥',
    ],
    moolRoman: [
      'Kabīr har kā simran chhād kai pālio bahut kuṭamb.',
      'Dhandhā kartā rah gaiā bhāī rahiā na bandh. ||106||',
    ],
    shabdarth: [
      {
        word: 'ਕੁਟੰਬੁ / कुटुंबु',
        meaning: {
          pb: 'ਪਰਿਵਾਰ, ਬਾਲ-ਬੱਚੇ',
          hi: 'परिवार, बाल-बच्चे',
          en: 'Family and relatives',
        },
      },
      {
        word: 'ਧੰਧਾ ਕਰਤਾ / धंधा करता',
        meaning: {
          pb: 'ਸੰਸਾਰਕ ਧੰਧਿਆਂ ਵਿੱਚ ਉਲਝਿਆ ਰਿਹਾ',
          hi: 'सांसारिक धंधों में उलझा रहा',
          en: 'Busy in worldly pursuits',
        },
      },
      {
        word: 'ਭਾਈ ਨ ਬੰਧੁ / भाई न बंधु',
        meaning: {
          pb: 'ਕੋਈ ਭਾਈ ਯਾ ਸਾਕ-ਸੰਬੰਧੀ ਨਾਲ ਨਹੀਂ ਨਿਭਿਆ',
          hi: 'कोई सगा-संबंधी साथ नहीं निभाया',
          en: 'No brother or relative accompanies in the end',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨੁੱਖ ਨੇ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਛੱਡ ਕੇ ਬਹੁਤ ਪਰਿਵਾਰ ਪਾਲਿਆ। ਪਰਿਵਾਰ ਦੇ ਧੰਧੇ ਕਰਦਿਆਂ-ਕਰਦਿਆਂ ਹੀ ਉਮਰ ਬੀਤ ਗਈ, ਅੰਤ ਨੂੰ ਨਾ ਕੋਈ ਭਾਈ ਰਿਹਾ ਤੇ ਨਾ ਕੋਈ ਸਾਕ-ਸੰਬੰਧੀ ਨਾਲ ਗਿਆ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य ने भगवान का स्मरण छोड़कर बहुत परिवार पाला। परिवार के धंधे करते-करते ही आयु बीत गई, अंत में न कोई भाई रहा और न कोई सगा-संबंधी साथ गया।',
      en: 'Satguru Kabir Saheb proclaims: Forsaking divine remembrance, a person nurtures a large family. Spending life busy in worldly chores, in the end neither brother nor relative goes along with the soul.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰਕ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਨਿਭਾਉਂਦੇ ਹੋਏ ਵੀ ਅਸਲ ਧਿਆਨ ਪ੍ਰਭੂ ਨਾਮ ਵਿੱਚ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'सांसारिक उत्तरदायित्व निभाते हुए भी वास्तविक ध्यान प्रभु नाम में होना चाहिए।',
      en: 'While fulfilling worldly duties, core consciousness must rest in the Divine Name.',
    },
    acharana: {
      pb: 'ਪਰਿਵਾਰ ਦੀ ਸੇਵਾ ਕਰਦਿਆਂ ਪਰਮਾਤਮਾ ਨੂੰ ਕਦੇ ਨਾ ਵਿਸਾਰੋ।',
      hi: 'परिवार की सेवा करते हुए परमात्मा को कभी न विसारें।',
      en: 'Serving family, never forget the Supreme Lord.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਮਨ ਸਦਾ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜੀ ਰੱਖੋ।',
      hi: 'अपना मन सदा प्रभु चरणों में जोड़े रखें।',
      en: 'Keep your mind anchored perpetually at the divine feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 107 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-107',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੦੭: ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਰਾਤਿ ਜਗਾਵਨ ਜਾਇ (ਅੰਧ ਵਿਸ਼ਵਾਸ)',
      hi: 'सलोक १०७: हरि का सिमरनु छाडि कै राति जगावन जाइ (अंध विश्वास)',
      en: 'Salok 107: Abandoning God for Superstitious Night Vigils Results in Degradation',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਰਾਤਿ ਜਗਾਵਨ ਜਾਇ ॥',
      'ਸਰਪਨਿ ਹੋਇ ਕੈ ਅਉਤਰੈ ਜਾਏ ਅਪੁਨੇ ਖਾਇ ॥੧੦੭॥',
    ],
    moolDevanagari: [
      'कबीर हरि का सिमरनु छाडि कै राति जगावन जाइ ॥',
      'सरपनि होइ कै अउतरै जाए अपुने खाइ ॥१०७॥',
    ],
    moolRoman: [
      'Kabīr har kā simran chhād kai rāt jagāvan jāi.',
      'Sarpan hoi kai autrai jāe apune khāi. ||107||',
    ],
    shabdarth: [
      {
        word: 'ਰਾਤਿ ਜਗਾਵਨ / राति जगावन',
        meaning: {
          pb: 'ਰਾਤ ਨੂੰ ਮਸਾਣਾਂ ਆਦਿ ਵਿੱਚ ਜਾ ਕੇ ਦੇਵੀ ਤੋਸ਼ਣੇ ਜਾਗਰਣ ਕਰਨੇ',
          hi: 'रात को श्मशान आदि में जाकर तांत्रिक अनुष्ठान करना',
          en: 'Worshiping spirits or ghosts at night in cremation grounds',
        },
      },
      {
        word: 'ਸਰਪਨਿ ਹੋਇ / सरपनि होइ',
        meaning: {
          pb: 'ਸੱਪਣੀ ਦੀ ਜੂਨ ਵਿੱਚ ਪੈਣਾ',
          hi: 'सर्पिणी (सांपिन) की योनि में जन्म लेना',
          en: 'Reborn as a female serpent',
        },
      },
      {
        word: 'ਅਪੁਨੇ ਖਾਇ / अपुने खाइ',
        meaning: {
          pb: 'ਆਪਣੇ ਹੀ ਬੱਚਿਆਂ ਨੂੰ ਖਾਣਾ',
          hi: 'अपने ही बच्चों को खाना',
          en: 'Consuming one\'s own offspring',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜਿਹੜੀ ਇਸਤ੍ਰੀ ਹਰੀ ਦਾ ਸਿਮਰਨ ਛੱਡ ਕੇ ਰਾਤ ਨੂੰ ਮਸਾਣਾਂ ਵਿੱਚ ਜਾ ਕੇ (ਭੂਤਾਂ-ਪ੍ਰੇਤਾਂ ਦੀ) ਪੂਜਾ ਕਰਦੀ ਹੈ, ਉਹ ਅਗਲੇ ਜਨਮ ਵਿੱਚ ਸੱਪਣੀ ਬਣਦੀ ਹੈ ਅਤੇ ਆਪਣੇ ਹੀ ਬੱਚਿਆਂ ਨੂੰ ਖਾਂਦੀ ਹੈ।',
      hi: 'हे कबीर! जो स्त्री भगवान का स्मरण छोड़कर रात को श्मशान में जाकर (तांत्रिक अनुष्ठान) करती है, वह अगले जन्म में सर्पिणी बनती है और अपने ही बच्चों को खाती है।',
      en: 'O Kabir! A woman who abandons divine remembrance to perform night vigils in cremation grounds (superstitious rituals) is reborn as a venomous serpent that consumes its own offspring.',
    },
    chintan: {
      pb: 'ਅੰਧ-ਵਿਸ਼ਵਾਸ ਅਤੇ ਤੰਤਰ-ਮੰਤਰ ਆਤਮਿਕ ਪਤਨ ਵੱਲ ਲੈ ਜਾਂਦੇ ਹਨ। ਕੇਵਲ ਨਾਮ ਸਿਮਰਨ ਹੀ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਹੈ।',
      hi: 'अंधविश्वास और तांत्रिक कर्म आत्मिक पतन की ओर ले जाते हैं। केवल नाम सिमरन ही मुक्ति का मार्ग है।',
      en: 'Superstitions lead to spiritual ruin; only pure divine remembrance liberates the soul.',
    },
    acharana: {
      pb: 'ਸਭ ਭਰਮ-ਭੁਲੇਖੇ ਤਿਆਗ ਕੇ ਕੇਵਲ ਸੱਚੇ ਨਾਮ ਦੀ ਉਪਾਸਨਾ ਕਰੋ।',
      hi: 'सभी भ्रम-भ्रमियों को त्यागकर केवल सच्चे नाम की उपासना करें।',
      en: 'Discarding all delusions, worship solely the authentic Divine Name.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਹਰ ਤਰ੍ਹਾਂ ਦੇ ਵਹਿਮ-ਭਰਮ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਪ੍ਰਭੂ ਨੂੰ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने मन को हर तरह के वहम-भ्रम से मुक्त करके प्रभु को समर्पित करें।',
      en: 'Freeing your mind from superstitions, surrender to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 108 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-108',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੦੮: ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਅਹੋਈ ਰਾਖੈ ਨਾਰਿ (ਵਰਤ ਤੇ ਪਾਖੰਡ)',
      hi: 'सलोक १०८: हरि का सिमरनु छाडि कै अहोई राखे नारि (व्रत और पाखंड)',
      en: 'Salok 108: Observing Ritual Fasts Instead of Remembering God Leads to Bondage',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਅਹੋਈ ਰਾਖੈ ਨਾਰਿ ॥',
      'ਗਦਹੀ ਹੋਇ ਕੈ ਅਉਤਰੈ ਭਾਰੁ ਸਹੈ ਮਨ ਚਾਰਿ ॥੧੦੮॥',
    ],
    moolDevanagari: [
      'कबीर हरि का सिमरनु छाडि कै अहोई राखे नारि ॥',
      'गदही होइ कै अउतरै भारु सहै मन चारि ॥१०८॥',
    ],
    moolRoman: [
      'Kabīr har kā simran chhād kai ahoī rākhe nāri.',
      'Gadhī hoi kai autrai bhār sahai man chāri. ||108||',
    ],
    shabdarth: [
      {
        word: 'ਅਹੋਈ ਰਾਖੈ / अहोई राखे',
        meaning: {
          pb: 'ਦੇਵੀ-ਦੇਵਤਿਆਂ ਦੇ ਕਰਮਕਾਂਡੀ ਵਰਤ ਰੱਖਣੇ',
          hi: 'देवी-देवताओं के कर्मकांडी व्रत रखना',
          en: 'Observing ritualistic customary fasts',
        },
      },
      {
        word: 'ਗਦਹੀ ਹੋਇ / गदही होइ',
        meaning: {
          pb: 'ਖੋਤੀ ਦੀ ਜੂਨ ਵਿੱਚ ਪੈਣਾ',
          hi: 'गधी की योनि में जन्म लेना',
          en: 'Reborn as a pack donkey',
        },
      },
      {
        word: 'ਭਾਰੁ ਸਹੈ / भारु सहै',
        meaning: {
          pb: 'ਭਾਰੁ ਚੁੱਕਣਾ (ਚਾਰ ਮਣ)',
          hi: 'चार मन का भारी बोझ उठाना',
          en: 'Bearing heavy burdens of karma',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜਿਹੜੀ ਇਸਤ੍ਰੀ ਪ੍ਰਮਾਤਮਾ ਦਾ ਸਿਮਰਨ ਛੱਡ ਕੇ (ਦੇਵੀ ਆਦਿ ਦੇ) ਕਰਮਕਾਂਡੀ ਵਰਤ ਰੱਖਦੀ ਹੈ, ਉਹ ਅਗਲੇ ਜਨਮ ਵਿੱਚ ਖੋਤੀ ਬਣਦੀ ਹੈ ਅਤੇ ਆਪਣੀ ਪਿੱਠ ਉੱਤੇ ਭਾਰੁ ਚੁੱਕਦੀ ਹੈ।',
      hi: 'हे कबीर! जो स्त्री भगवान का स्मरण छोड़कर (देवी आदि के) कर्मकांडी व्रत रखती है, वह अगले जन्म में गधी बनती है और अपनी पीठ पर भारी बोझ उठाती है।',
      en: 'O Kabir! A woman who abandons divine remembrance to keep ritualistic fasts is reborn as a donkey, bearing heavy loads upon her back.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਅਤੇ ਵਰਤਾਂ ਨਾਲੋਂ ਅੰਤਰਜਾਮੀ ਪ੍ਰਭੂ ਦਾ ਪ੍ਰੇਮ ਸਿਮਰਨ ਹੀ ਮੁਕਤੀ ਦਾ ਆਧਾਰ ਹੈ।',
      hi: 'बाहरी कर्मकांड और व्रतों की अपेक्षा अंतर्यामी प्रभु का प्रेम सिमरन ही मुक्ति का आधार है।',
      en: 'Loving remembrance of the Divine surpasses all external ritual fasts.',
    },
    acharana: {
      pb: 'ਵਹਿਮਾਂ-ਭਰਮਾਂ ਨੂੰ ਤਿਆਗ ਕੇ ਕੇਵਲ ਨਾਮ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'वहम-भ्रमों को त्यागकर केवल नाम की कमाई करें।',
      en: 'Shunning delusions, cultivate the wealth of the divine Name.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਸੱਚੇ ਧਰਮ ਅਤੇ ਪ੍ਰਭੂ ਸ਼ਰਧਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने मन को सच्चे धर्म और प्रभु श्रद्धा में समर्पित करें।',
      en: 'Dedicate your mind to genuine faith and devotion.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 109 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-109',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੦੯: ਚਤੁਰਾਈ ਅਤਿ ਘਨੀ (ਸੂਲੀ ਉੱਤੇ ਖੇਡ)',
      hi: 'सलोक १०९: चतुराई अति घनी (सूली ऊपर खेल)',
      en: 'Salok 109: Spiritual Devotion Is Like Walking on a Razor\'s Edge',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚਤੁਰਾਈ ਅਤਿ ਘਨੀ ਹਰਿ ਜਪਿ ਹਿਰਦੈ ਮਾਹਿ ॥',
      'ਸੂਰੀ ਊਪਰਿ ਖੇਲਨਾ ਗਿਰੈ ਤ ਠਾਹਰ ਨਾਹਿ ॥੧੦੯॥',
    ],
    moolDevanagari: [
      'कबीर चतुराई अति घनी हरि जपि हिरदै माहि ॥',
      'सूरी ऊपरि खेलना गिरै त ठाहर नाहि ॥१०९॥',
    ],
    moolRoman: [
      'Kabīr chaturāī ati ghanī har jap hirdai māhi.',
      'Sūrī ūpar khelna girai ta ṭhāhar nāhi. ||109||',
    ],
    shabdarth: [
      {
        word: 'ਚਤੁਰਾਈ ਅਤਿ ਘਨੀ / चतुराई अति घनी',
        meaning: {
          pb: 'ਵੱਡੀ ਸਿਆਣਪ ਅਤੇ ਸੁਚੇਤਤਾ',
          hi: 'अत्यधिक चातुरी और सजगता',
          en: 'Utmost wisdom and vigilance',
        },
      },
      {
        word: 'ਸੂਰੀ ਊਪਰਿ / सूरी ऊपरि',
        meaning: {
          pb: 'ਸੂਲੀ ਉੱਤੇ (ਤਲਵਾਰ ਦੀ ਧਾਰ ’ਤੇ)',
          hi: 'सूली के ऊपर (तलवार की धार पर)',
          en: 'Upon the stake / razor\'s edge',
        },
      },
      {
        word: 'ਠਾਹਰ ਨਾਹਿ / ठाहर नाहि',
        meaning: {
          pb: 'ਕੋਈ ਆਸਰਾ ਨਹੀਂ ਮਿਲਦਾ',
          hi: 'कोई ठिकाना या आश्रय नहीं मिलता',
          en: 'No place of refuge if one falls',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇ ਤੇਰੇ ਪਾਸ ਬਹੁਤ ਚਤੁਰਾਈ ਹੈ, ਤਾਂ ਹੇ ਭਾਈ! ਹਰੀ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਜਪ। ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰਨਾ ਸੂਲੀ ਉੱਤੇ ਖੇਡਣ (ਤਲਵਾਰ ਦੀ ਧਾਰ ’ਤੇ ਚੱਲਣ) ਦੇ ਬਰਾਬਰ ਹੈ; ਜੇ ਇਸ ਤੋਂ ਡਿੱਗ ਪਵੇਂ (ਨਾਮ ਭੁੱਲ ਜਾਏ) ਤਾਂ ਹੋਰ ਕੋਈ ਠਾਹਰ (ਆਸਰਾ) ਨਹੀਂ ਮਿਲਦੀ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि तेरे पास बहुत चतुराई है, तो हे भाई! भगवान का स्मरण अपने हृदय में कर। प्रभु का सिमरन करना सूली पर खेलने (तलवार की धार पर चलने) के समान है; यदि इससे गिर पड़े (नाम भूल जाए) तो कोई अन्य ठिकाना (आश्रय) नहीं मिलता।',
      en: 'Satguru Kabir Saheb proclaims: If you possess true wisdom, chant the Lord\'s Name within your heart. Practicing divine devotion is like walking on the razor\'s edge; if you fall (forget the Lord), there is no other refuge.',
    },
    chintan: {
      pb: 'ਨਾਮ ਸਿਮਰਨ ਲਈ ਪੂਰੀ ਸੁਚੇਤਤਾ, ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਪ੍ਰੇਮ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।',
      hi: 'नाम सिमरन के लिए पूर्ण सजगता, अनुशासन और प्रेम की आवश्यकता होती है।',
      en: 'Divine devotion demands absolute vigilance, discipline, and sincere love.',
    },
    acharana: {
      pb: 'ਜੀਵਨ ਦੇ ਹਰ ਪਲ ਪੂਰੀ ਸੁਚੇਤਤਾ ਨਾਲ ਪ੍ਰਭੂ ਚਰਨਾਂ ਨਾਲ ਜੁੜੇ ਰਹੋ।',
      hi: 'जीवन के प्रत्येक पल पूर्ण सजगता से प्रभु चरणों से जुड़े रहें।',
      en: 'Every moment of life, stay connected with the Divine in alert awareness.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਪੂਰੀ ਸ਼ਰਧਾ ਅਤੇ ਸਮਰਪਣ ਨਾਲ ਪ੍ਰਭੂ ਲੇਖੇ ਲਾਓ।',
      hi: 'अपना जीवन पूर्ण श्रद्धा और समर्पण से प्रभु लेखे लगाएं।',
      en: 'Dedicate your life entirely to the Divine with steadfast surrender.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 110 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-110',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੦: ਸੋਈ ਮੁਖੁ ਧੰਨਿ ਹੈ (ਰਾਮ ਨਾਮ ਮੁਖ)',
      hi: 'सलोक ११०: सोई मुखु धंनि है (राम नाम मुख)',
      en: 'Salok 110: Blessed Is the Mouth That Utters the Divine Name',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੋੁਈ ਮੁਖੁ ਧੰਨਿ ਹੈ ਜਾ ਮੁਖਿ ਕਹੀਐ ਰਾਮੁ ॥',
      'ਦੇਹੀ ਕਿਸ ਕੀ ਬਾਪੁਰੀ ਪਵਿਤ੍ਰ ਹੋਇਗੋ ਗ੍ਰਾਮੁ ॥੧੧੦॥',
    ],
    moolDevanagari: [
      'कबीर सोई मुखु धंनि है जा मुखि कहीऐ रामु ॥',
      'देही किस की बापुरी पवित्र होइगो ग्रामु ॥११०॥',
    ],
    moolRoman: [
      'Kabīr soī mukh dhan hai jā mukh kahīai Rām.',
      'Dehī kis kī bāpurī pavitr hoigo grām. ||110||',
    ],
    shabdarth: [
      {
        word: 'ਸੋਈ ਮੁਖੁ ਧੰਨਿ / सोई मुखु धंनि',
        meaning: {
          pb: 'ਵਿਸ਼ੇਸ਼ ਭਾਗਾਂ ਵਾਲਾ ਮੁਖ',
          hi: 'सौभाग्यशाली मुख',
          en: 'Blessed and fortunate is the mouth',
        },
      },
      {
        word: 'ਦੇਹੀ ਕਿਸ ਕੀ ਬਾਪੁਰੀ / देही किस की बापुरी',
        meaning: {
          pb: 'ਸਰੀਰ ਵਿਚਾਰੇ ਦੀ ਕੀ ਗੱਲ ਹੈ (ਉਹ ਤਾਂ ਪਵਿੱਤਰ ਹੁੰਦਾ ਹੀ ਹੈ)',
          hi: 'शरीर बेचारे की क्या बात है',
          en: 'What to speak of the frail body',
        },
      },
      {
        word: 'ਪਵਿਤ੍ਰ ਹੋਇਗੋ ਗ੍ਰਾਮੁ / पवित्र होइगो ग्रामु',
        meaning: {
          pb: 'ਸਾਰਾ ਨਗਰ ਪਵਿੱਤਰ ਹੋ ਜਾਂਦਾ ਹੈ',
          hi: 'संपूर्ण नगर पवित्र हो जाता है',
          en: 'The entire village/town is sanctified',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉਹੀ ਮੂੰਹ ਧੰਨ ਹੈ (ਭਾਗਾਂ ਵਾਲਾ ਹੈ) ਜਿਸ ਮੂੰਹ ਨਾਲ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਉਚਾਰਿਆ ਜਾਂਦਾ ਹੈ। ਸਰੀਰ ਵਿਚਾਰੇ ਦੀ ਤਾਂ ਕੀ ਗੱਲ ਹੈ, ਜਿਸ ਨਗਰ ਵਿੱਚ ਰਾਮ ਦਾ ਨਾਮ ਲਿਆ ਜਾਂਦਾ ਹੈ, ਉਹ ਸਾਰਾ ਨਗਰ ਹੀ ਪਵਿੱਤਰ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-वही मुख धन्य (सौभाग्यशाली) है जिस मुख से भगवान का नाम उच्चारित किया जाता है। शरीर बेचारे की क्या बात है, जिस नगर में राम का नाम लिया जाता है, वह संपूर्ण नगर ही पवित्र हो जाता है।',
      en: 'Satguru Kabir Saheb proclaims: Blessed is that mouth which utters the Divine Name. What to speak of the frail body alone—the entire town where the Lord\'s Name is chanted becomes sanctified.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਉਚਾਰਨ ਨਾਲ ਆਪਾ ਪਵਿੱਤਰ ਹੁੰਦਾ ਹੈ ਅਤੇ ਆਲੇ-ਕੁਆਲੇ ਵਿੱਚ ਵੀ ਅਧਿਆਤਮਕ ਸ਼ਾਂਤੀ ਫੈਲਦੀ ਹੈ।',
      hi: 'प्रभु का नाम उच्चारण करने से आत्मा पवित्र होती है और आसपास भी आध्यात्मिक शांति फैलती है।',
      en: 'Chanting the divine Name purifies the soul and radiates spiritual peace all around.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਜ਼ਬਾਨ ਨੂੰ ਹਰ ਸਮੇਂ ਪ੍ਰਭੂ ਦੇ ਸਿਮਰਨ ਵਿੱਚ ਜੋੜੋ।',
      hi: 'अपनी जुबान को हर समय प्रभु के सिमरन में जोड़ें।',
      en: 'Ever engage your tongue in divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬਾਣੀ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਉਸਤਤ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी वाणी को प्रभु की स्तुति में समर्पित करें।',
      en: 'Dedicate your speech entirely to praising the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 111 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-111',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੧: ਸੋਈ ਕੁਲ ਭਲੀ ਜਾ ਕੁਲ ਹਰਿ ਕੋ ਦਾਸੁ (ਭਗਤ ਕੁਲ)',
      hi: 'सलोक १११: सोई कुल भली जा कुल हरि को दासु (भगत कुल)',
      en: 'Salok 111: Blessed Is the Family That Produces a Devotee of God',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੋਈ ਕੁਲ ਭਲੀ ਜਾ ਕੁਲ ਹਰਿ ਕੋ ਦਾਸੁ ॥',
      'ਜਿਹ ਕੁਲ ਦਾਸੁ ਨ ਊਪਜੈ ਸੋ ਕੁਲ ਢਾਕੁ ਪਲਾਸੁ ॥੧੧੧॥',
    ],
    moolDevanagari: [
      'कबीर सोई कुल भली जा कुल हरि को दासु ॥',
      'जिह कुल दासु न ऊपजै सो कुल ढाकु प्लासु ॥१११॥',
    ],
    moolRoman: [
      'Kabīr soī kul bhalī jā kul har ko dās.',
      'Jih kul dās na ūpjai so kul ḍhāk palās. ||111||',
    ],
    shabdarth: [
      {
        word: 'ਕੁਲ ਭਲੀ / कुल भली',
        meaning: {
          pb: 'ਸੇ੍ਰਸ਼ਠ ਅਤੇ ਭਾਗਾਂ ਵਾਲੀ ਕੁਲ',
          hi: 'श्रेष्ठ और सौभाग्यशाली कुल',
          en: 'Noble and blessed family',
        },
      },
      {
        word: 'ਹਰਿ ਕੋ ਦਾਸੁ / हरि को दासु',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦਾ ਭਗਤ ਯਾ ਸੇਵਕ',
          hi: 'प्रभु का भक्त या सेवक',
          en: 'Devotee / servant of the Lord',
        },
      },
      {
        word: 'ਢਾਕੁ ਪਲਾਸੁ / ढाकु प्लासु',
        meaning: {
          pb: 'ਢੱਕ ਤੇ ਪਲਾਸ ਦੇ ਫੁੱਲ-ਹੀਣ ਬੂਟੇ (ਨਿਸਫਲ)',
          hi: 'पलास और ढार्क के निष्फल पौधे',
          en: 'Useless trees of Dhak and Palash (bearing no sweet fruit)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉਹੀ ਕੁਲ ਚੰਗੀ (ਸ੍ਰੇਸ਼ਠ) ਹੈ ਜਿਸ ਕੁਲ ਵਿੱਚ ਪ੍ਰਮਾਤਮਾ ਦਾ ਭਗਤ ਪੈਦਾ ਹੁੰਦਾ ਹੈ। ਜਿਸ ਕੁਲ ਵਿੱਚ ਪ੍ਰਭੂ ਦਾ ਭਗਤ ਪੈਦਾ ਨਹੀਂ ਹੁੰਦਾ, ਉਹ ਕੁਲ ਜੰਗਲੀ ਢੱਕ ਅਤੇ ਪਲਾਸ ਦੇ ਬੂਟਿਆਂ ਵਾਂਗ ਨਿਸਫਲ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-वही कुल अच्छा (श्रेष्ठ) है जिस कुल में भगवान का भक्त पैदा होता है। जिस कुल में प्रभु का भक्त पैदा नहीं होता, वह कुल जंगली ढाक और पलास के पौधों के समान निष्फल है।',
      en: 'Satguru Kabir Saheb proclaims: That family is truly noble in which a devotee of God is born. A family that produces no devotee is as barren and fruitless as the wild Dhak and Palash trees.',
    },
    chintan: {
      pb: 'ਕੁਲ ਦਾ ਅਸਲ ਮਾਣ ਉੱਚੀ ਜਾਤ ਜਾਂ ਧਨ ਨਾਲ ਨਹੀਂ, ਬਲਕਿ ਪ੍ਰਭੂ ਭਗਤੀ ਨਾਲ ਹੈ।',
      hi: 'कुल का वास्तविक मान ऊंची जाति या धन से नहीं, बल्कि प्रभु भक्ति से है।',
      en: 'True nobility of lineage stems from devotion to God, not from birth or wealth.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਜੀਵਨ ਨੂੰ ਭਗਤੀ ਅਤੇ ਸੇਵਾ ਨਾਲ ਸ੍ਰੇਸ਼ਠ ਬਣਾਓ।',
      hi: 'अपने जीवन को भक्ति और सेवा से श्रेष्ठ बनाएं।',
      en: 'Ennoble your life through devotion and selfless service.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੁੜ ਕੇ ਆਪਣੇ ਵੰਸ਼ ਅਤੇ ਜੀਵਨ ਨੂੰ ਤਾਰੋ।',
      hi: 'प्रभु के चरणों में जुड़कर अपने वंश और जीवन को तारें।',
      en: 'Connecting with the Divine, elevate your entire lineage.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 112 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-112',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੨: ਹੈ ਗਇ ਬਾਹਨ ਸਘਨ ਘਨ (ਭਗਤੀ ਦੀ ਉੱਤਮਤਾ)',
      hi: 'सलोक ११२: है गइ बाहन सघन घन (भक्ति की उत्तमता)',
      en: 'Salok 112: A Humble Life Spent in Divine Remembrance Surpasses Vast Worldly Empire',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹੈ ਗਇ ਬਾਹਨ ਸਘਨ ਘਨ ਲਾਖ ਧਜਾ ਫਹਰਾਹਿ ॥',
      'ਇਆ ਸੁਖ ਤੇ ਭਿਖਾ ਭਲੀ ਜਉ ਹਰਿ ਸਿਮਰਤ ਦਿਨ ਜਾਹਿ ॥੧੧੨॥',
    ],
    moolDevanagari: [
      'कबीर है गइ बाहन सघन घन लाख धजा फहराहि ॥',
      'इआ सुख ते भिखा भली जउ हरि सिमरत दिन जाहि ॥११२॥',
    ],
    moolRoman: [
      'Kabīr hai gai bāhan saghan ghan lākh dhajā faharāhi.',
      'Iā sukh te bhikhā bhalī jau har simrat din jāhi. ||112||',
    ],
    shabdarth: [
      {
        word: 'ਹੈ ਗਇ ਬਾਹਨ / है गइ बाहन',
        meaning: {
          pb: 'ਘੋੜੇ, ਹਾਥੀ ਅਤੇ ਅਨੇਕਾਂ ਸਵਾਰੀਆਂ',
          hi: 'घोड़े, हाथी और अनेक सवारियां',
          en: 'Horses, elephants, and vast royal carriages',
        },
      },
      {
        word: 'ਲਾਖ ਧਜਾ / लाख धजा',
        meaning: {
          pb: 'ਲੱਖਾਂ ਝੰਡੇ ਅਤੇ ਰਾਜ-ਭਾਗ ਦੀ ਸ਼ਾਨ',
          hi: 'लाखों झंडे और राज-पाट का वैभव',
          en: 'Millions of flags and imperial majesty',
        },
      },
      {
        word: 'ਭਿਖਾ ਭਲੀ / भिखा भली',
        meaning: {
          pb: 'ਭੀਖ ਮੰਗ ਕੇ ਗੁਜ਼ਾਰਾ ਕਰਨਾ ਵੀ ਚੰਗਾ ਹੈ',
          hi: 'भीख मांगकर गुजर-बसर करना भी श्रेष्ठ है',
          en: 'Even begging is far superior',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਘੋੜੇ, ਹਾਥੀ ਅਤੇ ਅਨੇਕਾਂ ਸਵਾਰੀਆਂ ਹੋਣ ਅਤੇ ਲੱਖਾਂ ਝੰਡੇ (ਰਾਜ-ਭਾਗ ਦੀ ਸ਼ਾਨ) ਝੂਲਦੇ ਹੋਣ, ਇਸ (ਦੁਨਿਆਵੀ ਰਾਜ-ਸੁਖ) ਨਾਲੋਂ ਭੀਖ ਮੰਗ ਕੇ ਗੁਜ਼ਾਰਾ ਕਰਨਾ ਵੀ ਚੰਗਾ ਹੈ ਜੇਕਰ ਦਿਨ ਪ੍ਰਮਾਤਮਾ ਦਾ ਸਿਮਰਨ ਕਰਦਿਆਂ ਬੀਤਣ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-घोड़े, हाथी और अनेक सवारियां हों तथा लाखों झंडे (राज-पाट का वैभव) फहराते हों, इस (दुनियावी राज-सुख) की अपेक्षा भीख मांगकर गुजर-बसर करना भी श्रेष्ठ है यदि दिन परमात्मा का स्मरण करते हुए बीतें।',
      en: 'Satguru Kabir Saheb proclaims: Even possessing horses, elephants, imperial carriages, and millions of flags of sovereignty—such royal power is far inferior to begging if those days are spent in divine remembrance.',
    },
    chintan: {
      pb: 'ਸਭ ਤੋਂ ਉੱਤਮ ਸੁਖ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਹੈ। ਰਾਜ-ਭਾਗ ਵੀ ਨਾਮ ਬਿਨਾਂ ਵਿਅਰਥ ਹੈ।',
      hi: 'सर्वोत्तम सुख प्रभु का सिमरन है। राज-पाट भी नाम बिना व्यर्थ है।',
      en: 'The ultimate bliss is divine remembrance; worldly empires without God are worthless.',
    },
    acharana: {
      pb: 'ਦੁਨਿਆਵੀ ਐਸ਼ੋ-ਆਰਾਮ ਪਿੱਛੇ ਭੱਜਣ ਦੀ ਬਜਾਏ ਨਾਮ ਦੀ ਧਨ ਕਮਾਓ।',
      hi: 'दुनियावी ऐशो-आराम के पीछे भागने के बजाय नाम का धन कमाएं।',
      en: 'Rather than chasing material luxuries, accumulate the wealth of the Name.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਨਿਮਰਤਾ ਅਤੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना जीवन विनम्रता और प्रभु भक्ति में समर्पित करें।',
      en: 'Dedicate your life in humility and devotion to the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 113 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-113',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੩: ਸਭੁ ਜਗੁ ਹਉ ਫਿਰਿਓ (ਸੋਧ ਪਰਖ)',
      hi: 'सलोक ११३: सभु जगु हउ फिरिओ (शोध परख)',
      en: 'Salok 113: Searching the Whole World, Finding None Truly Attached to Another Without God',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਭੁ ਜਗੁ ਹਉ ਫਿਰਿਓ ਮਾਂਦਲ ਕੰਧ ਚਢਾਇ ॥',
      'ਕੋਈ ਕਾਹੂ ਕੋ ਨਹੀ ਸਭ ਦੇਖੀ ਠੋਕਿ ਬਜਾਇ ॥੧੧੩॥',
    ],
    moolDevanagari: [
      'कबीर सभु जगु हउ फिरिओ मांदल कंध चढाइ ॥',
      'कोई काहू को नही सभ देखी ठोकि बजाइ ॥११३॥',
    ],
    moolRoman: [
      'Kabīr sabh jag hau firiō māndal kand chaḍāi.',
      'Koī kāhū ko nahī sabh dekhī ṭhok bajāi. ||113||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਂਦਲ ਕੰਧ ਚਢਾਇ / मांदल कंध चढाइ',
        meaning: {
          pb: 'ਢੋਲਕੀ ਮੋਢੇ ਉੱਤੇ ਚੁੱਕ ਕੇ (ਘੁੰਮ-ਘੁੰਮ ਕੇ)',
          hi: 'ढोलक कंधे पर उठाकर (गली-गली घूमकर खोज करना)',
          en: 'Carrying a drum on the shoulder (searching everywhere far and wide)',
        },
      },
      {
        word: 'ਕੋਈ ਕਾਹੂ ਕੋ ਨਹੀ / कोई काहू को नही',
        meaning: {
          pb: 'ਕੋਈ ਕਿਸੇ ਦਾ ਅਸਲੀ ਸਾਥੀ ਨਹੀਂ',
          hi: 'कोई किसी का वास्तविक साथी नहीं है',
          en: 'No one is truly anyone\'s permanent companion in worldly ties',
        },
      },
      {
        word: 'ਠੋਕਿ ਬਜਾਇ / ठोकि बजाइ',
        meaning: {
          pb: 'ਚੰਗੀ ਤਰ੍ਹਾਂ ਪਰਖ ਕੇ, ਠੋਕ-ਵਜਾ ਕੇ',
          hi: 'भली-भांति परख कर, जांच कर',
          en: 'Thoroughly tested and examined',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਢੋਲਕੀ ਮੋਢੇ ਉੱਤੇ ਚੁੱਕ ਕੇ (ਢੰਡੋਰਾ ਪਿੱਟ ਕੇ) ਸਾਰਾ ਜਗਤ ਫਿਰ ਆਇਆ ਹਾਂ ਅਤੇ ਸਭ ਕੁਝ ਚੰਗੀ ਤਰ੍ਹਾਂ ਠੋਕ-ਵਜਾ ਕੇ ਵੇਖ ਲਿਆ ਹੈ; ਸੰਸਾਰ ਵਿੱਚ ਅਸਲ ਵਿੱਚ ਕੋਈ ਕਿਸੇ ਦਾ ਨਹੀਂ ਹੈ (ਸਭ ਮੋਹ ਦੇ ਨਾਤੇ ਹਨ)।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैं ढोलक कंधे पर उठाकर (ढिंढोरा पीटकर) संपूर्ण जगत घूम आया हूँ और सब कुछ भली-भांति ठोक-बजा कर देख लिया है; संसार में वास्तव में कोई किसी का नहीं है (सब मोह के नाते हैं)।',
      en: 'Satguru Kabir Saheb proclaims: I have wandered across the entire world carrying a drum on my shoulder, thoroughly testing and examining everything; in truth, no one belongs to anyone else in worldly attachments.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰਕ ਰਿਸ਼ਤੇ ਨਾਤੇ ਮੋਹ ਦੇ ਹਨ। ਅਸਲ ਸਾਥੀ ਕੇਵਲ ਪ੍ਰਮਾਤਮਾ ਹੈ।',
      hi: 'सांसारिक रिश्ते-नाते मोह के हैं। वास्तविक साथी केवल परमात्मा है।',
      en: 'Worldly relationships are driven by illusion; the only true eternal companion is God.',
    },
    acharana: {
      pb: 'ਦੁਨਿਆਵੀ ਮੋਹ ਦੇ ਭਰਮ ਵਿੱਚ ਨਾ ਫਸ ਕੇ ਕੇਵਲ ਪ੍ਰਭੂ ਦਾ ਆਸਰਾ ਲਵੋ।',
      hi: 'दुनियावी मोह के भ्रम में न फंसकर केवल प्रभु का आश्रय लें।',
      en: 'Avoiding the illusion of worldly attachments, seek refuge in the Divine alone.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਮਨ ਮਾਇਕ ਰਿਸ਼ਤਿਆਂ ਤੋਂ ਤੋੜ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना मन माईक रिश्तों से तोड़कर प्रभु चरणों में समर्पित करें।',
      en: 'Detaching your heart from transient ties, surrender to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // CLASSIC SHABAD 1: Aval Allah Noor Upaya (Ang 1349)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-shabad-aval-allah',
    category: 'shabad',
    raag: 'ਪ੍ਰਭਾਤੀ (Prabhati)',
    ang: 1349,
    title: {
      pb: 'ਰਾਗੁ ਪ੍ਰਭਾਤੀ: ਅਵਲਿ ਅਲਹ ਨੂਰੁ ਉਪਾਇਆ ਕੁਦਰਤਿ ਕੇ ਸਭ ਬੰਦੇ',
      hi: 'रागु प्रभाती: अवलि अलह नूरु उपाइआ कुदरति के सभ बंदे',
      en: 'Raag Prabhati: First Allah Created the Divine Light; All are Children of Nature',
    },
    moolGurmukhi: [
      'ਅਵਲਿ ਅਲਹ ਨੂਰੁ ਉਪਾਇਆ ਕੁਦਰਤਿ ਕੇ ਸਭ ਬੰਦੇ ॥',
      'ਏਕ ਨੂਰ ਤੇ ਸਭੁ ਜਗੁ ਉਪਜਿਆ ਕਉਨ ਭਲੇ ਕੋ ਮੰਦੇ ॥੧॥',
      'ਲੋਗਾ ਭਰਮਿ ਨ ਭੂਲਹੁ ਭਾਈ ॥',
      'ਖਾਲਿਕੁ ਖਲਕ ਖਲਕ ਮਹਿ ਖਾਲਿਕੁ ਪੂਰਿ ਰਹਿਓ ਸ੍ਰਬ ਠਾਂਈ ॥੧॥ ਰਹਾਉ ॥',
    ],
    moolDevanagari: [
      'अवलि अलह नूरु उपाइआ कुदरति के सभ बंदे ॥',
      'एक नूर ते सभु जगु उपजिआ कउन भले को मंदे ॥१॥',
      'लोगा भरमि न भूलहु भाई ॥',
      'खालिकु खलक खलक महि खालिकु पूरि रहिओ स्रब ठांई ॥१॥ रहाउ ॥',
    ],
    moolRoman: [
      'Aval alah nūr upāiā kudrat ke sabh bande.',
      'Ek nūr te sabh jag upjiā kaun bhale ko mande. ||1||',
      'Logā bharam na bhūlahu bhāī.',
      'Khālik khalak khalak mahi khālik pūr rahio srab thāī. ||1|| Rahāu.',
    ],
    shabdarth: [
      {
        word: 'ਅਵਲਿ / अवलि',
        meaning: {
          pb: 'ਸਭ ਤੋਂ ਪਹਿਲਾਂ',
          hi: 'सर्वप्रथम, सबसे पहले',
          en: 'First and foremost',
        },
      },
      {
        word: 'ਨੂਰੁ / नूरु',
        meaning: {
          pb: 'ਪ੍ਰਕਾਸ਼, ਆਤਮਿਕ ਚਾਨਣ',
          hi: 'दिव्य ज्योति, आत्मिक प्रकाश',
          en: 'Divine radiant Light',
        },
      },
      {
        word: 'ਖਾਲਿਕੁ ਖਲਕ / खालिकु खलक',
        meaning: {
          pb: 'ਸਿਰਜਣਹਾਰ ਸ੍ਰਿਸ਼ਟੀ ਵਿੱਚ ਹੈ ਤੇ ਸ੍ਰਿਸ਼ਟੀ ਸਿਰਜਣਹਾਰ ਵਿੱਚ ਹੈ',
          hi: 'सृजनहार सृष्टि में और सृष्टि सृजनहार में व्याप्त है',
          en: 'The Creator is in the creation, and the creation dwells in the Creator',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪਰਮਾਤਮਾ ਨੇ ਆਪਣਾ ਨੂਰ (ਚਾਨਣ) ਪੈਦਾ ਕੀਤਾ ਅਤੇ ਕੁਦਰਤ ਦੇ ਸਾਰੇ ਜੀਵ ਉਸੇ ਇਕ ਨੂਰ ਤੋਂ ਉਪਜੇ ਹਨ। ਜਦੋਂ ਸਾਰਾ ਜਗਤ ਇਕੋ ਪ੍ਰਕਾਸ਼ ਤੋਂ ਬਣਿਆ ਹੈ ਤਾਂ ਕੌਣ ਚੰਗਾ ਤੇ ਕੌਣ ਮੰਦਾ? ਹੇ ਲੋਕੋ! ਭਰਮ ਵਿੱਚ ਨਾ ਭੁੱਲੋ; ਕਰਤਾਰ ਸ੍ਰਿਸ਼ਟੀ ਵਿੱਚ ਅਤੇ ਸ੍ਰਿਸ਼ਟੀ ਕਰਤਾਰ ਵਿੱਚ ਸਮਾਈ ਹੋਈ ਹੈ।',
      hi: 'सर्वप्रथम परमात्मा ने अपनी दिव्य ज्योति प्रकट की और प्रकृति के समस्त जीव उसी एक ज्योति से उत्पन्न हुए हैं। जब सम्पूर्ण जगत एक ही प्रकाश से प्रगट हुआ है, तब कौन उत्तम है और कौन बुरा? हे लोगो! भ्रम में मत भटको; परमात्मा सृष्टि में और सृष्टि परमात्मा में सर्वत्र व्याप्त है।',
      en: 'First, the Supreme Divine created the universal Light, and all beings are children of nature. From that single Light the whole universe blossomed; who can be judged good and who evil? O people, wander not in illusion: the Creator is in the creation, and the creation is immersed in the Creator.',
    },
    chintan: {
      pb: 'ਸਾਰੇ ਮਨੁੱਖ ਇੱਕੋ ਪਰਮਾਤਮਾ ਦੇ ਬੱਚੇ ਹਨ। ਧਰਮ, ਜ਼ਾਤ, ਰੰਗ ਅਤੇ ਨਸਲ ਦੇ ਆਧਾਰ ‘ਤੇ ਕਿਸੇ ਨਾਲ ਵਿਤਕਰਾ ਕਰਨਾ ਅਗਿਆਨਤਾ ਹੈ।',
      hi: 'समस्त प्राणी एक ही परमात्मा की संतान हैं। जाति, वर्ण अथवा पंथ के आधार पर किसी से भेद करना अज्ञान है।',
      en: 'All humanity is rooted in the same Divine Source; discrimination based on creed or caste is pure ignorance.',
    },
    acharana: {
      pb: 'ਹਰ ਜੀਵ ਨਾਲ ਪ੍ਰੇਮ, ਹਮਦਰਦੀ ਅਤੇ ਬਰਾਬਰੀ ਵਾਲਾ ਵਰਤਾਓ ਕਰੋ।',
      hi: 'प्रत्येक प्राणी के साथ समता, करुणा एवं निष्काम प्रेम का व्यवहार करें।',
      en: 'Treat every soul with universal compassion, love, and equal respect.',
    },
    samarpan: {
      pb: 'ਸਾਰੇ ਭੇਦਭਾਵ ਮਿਟਾ ਕੇ ਇੱਕੋ ਪਰਮ ਨੂਰ ਨੂੰ ਪ੍ਰਣਾਮ ਕਰੋ।',
      hi: 'समस्त भेदभाव विसर्जित कर उस एक दिव्य ज्योति को नमन करें।',
      en: 'Bow before the One Divine Light, transcending all divisions.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੪੯ (Raag Prabhati, Bhagat Kabir Ji)',
  },

  // -------------------------------------------------------------------------
  // CLASSIC SHABAD 2: Gagan Damama Bajiyo (Ang 1105)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-shabad-gagan-damama',
    category: 'shabad',
    raag: 'ਮਾਰੂ (Maru)',
    ang: 1105,
    title: {
      pb: 'ਰਾਗੁ ਮਾਰੂ: ਗਗਨ ਦਮਾਮਾ ਬਾਜਿਓ ਪਰਿਓ ਨੀਸਾਨੈ ਘਾਵ (ਸੂਰਾ ਸੋ ਪਹਿਚਾਨੀਐ)',
      hi: 'रागु मारू: गगन दमामा बाजिओ परिओ नीसानै घाव (सूरा सो पहिचानीऐ)',
      en: 'Raag Maru: The Battle Drum Resounds in Inner Heavens (True Spiritual Warrior)',
    },
    moolGurmukhi: [
      'ਗਗਨ ਦਮਾਮਾ ਬਾਜਿਓ ਪਰਿਓ ਨੀਸਾਨੈ ਘਾਵ ॥',
      'ਖੇਤੁ ਜੁ ਮਾਂਡਿਓ ਸੂਰਮਾ ਅਬ ਜੂਝਨ ਕੋ ਦਾਵ ॥੧॥',
      'ਸੂਰਾ ਸੋ ਪਹਿਚਾਨੀਐ ਜੁ ਲਰੈ ਦੀਨ ਕੇ ਹੇਤ ॥',
      'ਪੁਰਜਾ ਪੁਰਜਾ ਕਟਿ ਮਰੈ ਕਬਹੂ ਨ ਛਾਡੈ ਖੇਤੁ ॥੨॥੨॥',
    ],
    moolDevanagari: [
      'गगन दमामा बाजिओ परिओ नीसानै घाव ॥',
      'खेतु जु मांडिओ सूरमा अब जूझन को दाव ॥१॥',
      'सूरा सो पहिचानीऐ जु लरै दीन के हेत ॥',
      'पुरजा पुरजा कटि मरै कबहू न छाडै खेतु ॥२॥२॥',
    ],
    moolRoman: [
      'Gagan damāmā bājio pario nīsānai ghāv.',
      'Khet ju māndio sūrmā ab jūjhan ko dāv. ||1||',
      'Sūrā so pahichānīai ju larai dīn ke het.',
      'Purjā purjā kat marai kabhū na chhādai khet. ||2||2||',
    ],
    shabdarth: [
      {
        word: 'ਗਗਨ ਦਮਾਮਾ / गगन दमामा',
        meaning: {
          pb: 'ਦਸਮ ਦੁਆਰ (ਅੰਦਰੂਨੀ ਆਕਾਸ਼) ਵਿੱਚ ਸ਼ਬਦ ਦਾ ਨਗਾਰਾ',
          hi: 'दसम द्वार (आंतरिक गगन) में सत्य शब्द का नगाड़ा',
          en: 'The battle drum of divine sound echoing in the inner spiritual zenith',
        },
      },
      {
        word: 'ਦੀਨ ਕੇ ਹੇਤ / दीन के हेत',
        meaning: {
          pb: 'ਧਰਮ, ਸੱਚਾਈ ਅਤੇ ਨਿਤਾਣਿਆਂ ਦੀ ਰੱਖਿਆ ਲਈ',
          hi: 'धर्म, सत्य और असहायों की रक्षा हेतु',
          en: 'For the sake of righteousness, truth, and the oppressed',
        },
      },
      {
        word: 'ਖੇਤੁ ਨ ਛਾਡੈ / खेतु न छाडै',
        meaning: {
          pb: 'ਸਾਧਨਾ ਅਤੇ ਧਰਮ ਦੇ ਮੈਦਾਨ ਨੂੰ ਕਦੇ ਪਿੱਠ ਨਾ ਦੇਵੇ',
          hi: 'साधना व धर्म के युद्ध क्षेत्र को कभी न छोड़े',
          en: 'Never abandons the battlefield of righteousness and spiritual discipline',
        },
      },
    ],
    bhavarth: {
      pb: 'ਅੰਦਰੂਨੀ ਗਗਨ (ਦਸਮ ਦੁਆਰ) ਵਿੱਚ ਆਤਮਿਕ ਗਿਆਨ ਦਾ ਨਗਾਰਾ ਵੱਜ ਪਿਆ ਹੈ ਅਤੇ ਸੁਰਤ ਦਾ ਨਿਸ਼ਾਨਾ ਸਿੱਧਾ ਲੱਗ ਗਿਆ ਹੈ। ਸੂਰਬੀਰ ਸਾਧਕ ਨੇ ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨਾਲ ਜੂਝਣ ਦਾ ਮੈਦਾਨ ਮੱਲ ਲਿਆ ਹੈ। ਅਸਲ ਸੂਰਮਾ ਉਹੀ ਹੈ ਜੋ ਧਰਮ, ਨਿਮਰਤਾ ਅਤੇ ਸੱਚਾਈ ਦੀ ਖ਼ਾਤਰ ਲੜਦਾ ਹੈ ਅਤੇ ਟੁਕੜੇ-ਟੁਕੜੇ ਹੋ ਕੇ ਵੀ ਧਰਮ ਦਾ ਮੈਦਾਨ ਨਹੀਂ ਛੱਡਦਾ।',
      hi: 'दसम द्वार (आंतरिक गगन) में ज्ञान का नगाड़ा बज उठा है और सुरति का निशाना अचूक लगा है। आध्यात्मिक शूरवीर ने काम-क्रोधादि विकारों से जूझने हेतु रणभूमि सजा ली है। सच्चा शूरवीर वही है जो धर्म और सत्य की रक्षा हेतु लड़े और कण-कण कट मरे किंतु साधना के मैदान को कभी न छोड़े।',
      en: 'The divine battle drum resounds in the inner celestial heavens, and the arrow strikes true to the mark. The spiritual warrior has entered the field to conquer mind and vices. That soul alone is recognized as a true hero who battles for righteousness and truth, refusing to flee the spiritual field even if broken into pieces.',
    },
    chintan: {
      pb: 'ਅਸਲ ਜੰਗ ਬਾਹਰੀ ਨਹੀਂ, ਬਲਕਿ ਆਪਣੇ ਅੰਦਰਲੇ ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ ਅਤੇ ਹੰਕਾਰ ਦੇ ਵਿਰੁੱਧ ਹੈ।',
      hi: 'वास्तविक युद्ध बाह्य तलवारों का नहीं, अपितु अंतःकरण के पांच विकारों और वासनाओं के विरुद्ध सत्यनाम की तलवार से है।',
      en: 'The true heroic battle is fought within against the inner demons of lust, anger, greed, attachment, and pride.',
    },
    acharana: {
      pb: 'ਮੁਸੀਬਤਾਂ ਤੇ ਪਰਤਾਵਿਆਂ ਵਿੱਚ ਵੀ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਮਾਰਗ ‘ਤੇ ਅਡੋਲ ਰਹੋ।',
      hi: 'मुसीबतों और प्रलोभनों के सम्मुख भी सत्य के मार्ग पर अडिग रहें।',
      en: 'Stand unwavering on the path of truth through all hardships.',
    },
    samarpan: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਹੁਕਮ ਵਿੱਚ ਆਪਣੇ ਮਨ ਦੇ ਸਾਰੇ ਵਿਕਾਰਾਂ ਨੂੰ ਭੇਟ ਕਰਕੇ ਸੱਚੇ ਸੂਰਮੇ ਬਣੋ।',
      hi: 'सतगुरु के पावन चरणों में अपने समस्त विकारों को समर्पित कर शूरवीर बनें।',
      en: 'Surrender all inner weaknesses at the feet of Satguru to emerge victorious.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // -------------------------------------------------------------------------
  // SALOK 114 (Ang 1368)
  // -------------------------------------------------------------------------
  {
    id: 'sggs-salok-114',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੪: ਮਾਰਗਿ ਮੋਤੀ ਬੀਥਰੇ (ਗਿਆਨਹੀਨ ਅੰਧਾ)',
      hi: 'सलोक ११४: मारगि मोती बीथरे (ज्ञानहीन अंधा)',
      en: 'Salok 114: Pearls of Spiritual Wisdom Scattered Along the Path, Yet Ignored by the Blind Soul',
    },
    moolGurmukhi: [
      'ਮਾਰਗਿ ਮੋਤੀ ਬੀਥਰੇ ਅੰਧਾ ਨਿਕਸਿਓ ਆਇ ॥',
      'ਜੋਤਿ ਬਿਨਾ ਜਗਦੀਸ ਕੀ ਜਗਤੁ ਉਲੰਘੇ ਜਾਇ ॥੧੧੪॥',
    ],
    moolDevanagari: [
      'मारगि मोती बीथरे अंधा निकसिओ आइ ॥',
      'जोति बिना जगदीस की जगतु उलघे जाइ ॥११४॥',
    ],
    moolRoman: [
      'Mārag mīti bīthre andhā nicsio āi.',
      'Jot binā jagdīs kī jagat ulanghe jāi. ||114||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਰਗਿ ਮੋਤੀ / मारगि मोती',
        meaning: {
          pb: 'ਜੀਵਨ ਮਾਰਗ ਉੱਤੇ ਨਾਮ-ਰੂਪੀ ਮੋਤੀ (ਸ਼ੁਭ ਗੁਣ)',
          hi: 'जीवन मार्ग पर नाम रूपी मोती (शुभ गुण)',
          en: 'Pearls of spiritual wisdom scattered on the path',
        },
      },
      {
        word: 'ਅੰਧਾ / अंधा',
        meaning: {
          pb: 'ਅਗਿਆਨੀ, ਮਾਇਆ ਵਿੱਚ ਅੰਨ੍ਹਾ ਹੋਇਆ ਜੀਵ',
          hi: 'अज्ञानी, माया में अंधा हुआ जीव',
          en: 'The blind, ignorant soul',
        },
      },
      {
        word: 'ਜੋਤਿ ਬਿਨਾ / जोति बिना',
        meaning: {
          pb: 'ਪਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ-ਦ੍ਰਿਸ਼ਟੀ ਤੇ ਬਿਨਾਂ',
          hi: 'परमात्मा की कृपा-दृष्टि के बिना',
          en: 'Without divine light and grace',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਜੀਵਨ ਰੂਪੀ ਰਸਤੇ ਵਿੱਚ ਨਾਮ-ਰੂਪੀ ਮੋਤੀ (ਸ਼ੁਭ ਗੁਣ) ਖਿੰਡਰੇ ਪਏ ਹਨ, ਪਰ ਕੋਈ ਅਗਿਆਨੀ (ਅੰਨ੍ਹਾ) ਜੀਵ ਉੱਧਰ ਆ ਨਿਕਲਿਆ। ਪ੍ਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ-ਜੋਤ ਤੋਂ ਬਿਨਾਂ ਉਹ ਮਨੁੱਖ ਸਾਰੇ ਸ਼ੁਭ ਗੁਣਾਂ ਨੂੰ ਲੰਘ ਕੇ ਅੱਗੇ ਨਿਕਲ ਜਾਂਦਾ ਹੈ ਪਰ ਉਨ੍ਹਾਂ ਨੂੰ ਗ੍ਰਹਿਣ ਨਹੀਂ ਕਰਦਾ।',
      hi: 'हे कबीर! जीवन रूपी मार्ग पर नाम रूपी मोती (शुभ गुण) बिखरे पड़े हैं, किंतु कोई अज्ञानी (अंधा) जीव उधर आ निकला। परमात्मा की कृपा-ज्योति के बिना वह मनुष्य समस्तशुभ गुणों की उपेक्षा करके आगे निकल जाता है किंतु उन्हें ग्रहण नहीं करता।',
      en: 'O Kabir! Pearls of divine wisdom are scattered along the path of life, but an ignorant, blind soul passes by them. Without the radiant light of divine grace, the person walks right past all virtues without gathering them.',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਵਿੱਚ ਅੰਮ੍ਰਿਤ ਰੂਪੀ ਗੁਣ ਮੌਜੂਦ ਹਨ, ਪਰ ਪ੍ਰਭੂ ਕਿਰਪਾ ਬਿਨਾਂ ਅਗਿਆਨੀ ਉਨ੍ਹਾਂ ਨੂੰ ਪਛਾਣ ਨਹੀਂ ਸਕਦਾ।',
      hi: 'जीवन में अमृत रूपी गुण विद्यमान हैं, किंतु प्रभु कृपा बिना अज्ञानी उन्हें पहचान नहीं सकता।',
      en: 'Spiritual treasures are all around us, but without divine grace, ego blinds us to their worth.',
    },
    acharana: {
      pb: 'ਹਰ ਪਲ ਸੁਚੇਤ ਹੋ ਕੇ ਜੀਵਨ ਮਾਰਗ ਦੇ ਸ਼ੁਭ ਗੁਣਾਂ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਓ।',
      hi: 'प्रत्येक पल सजग होकर जीवन मार्ग के शुभ गुणों को अपने हृदय में बसाएं।',
      en: 'Awake and alert, gather the virtues of truth along life\'s pathway.',
    },
    samarpan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਕਿਰਪਾ ਦੀ ਭੀਖ ਮੰਗੋ ਤਾਂ ਜੋ ਅੱਖਾਂ ਖੁੱਲ੍ਹ ਸਕਣ।',
      hi: 'प्रभु की कृपा की भीख मांगें ताकि नेत्र खुल सकें।',
      en: 'Humbly pray for divine light to awaken inner spiritual sight.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 115 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-115',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੫: ਬੂਡਾ ਬੰਸੁ ਕਬੀਰ ਕਾ (ਪੁੱਤਰ ਮੋਹ)',
      hi: 'सलोक ११५: बूडा बंसु कबीर का (पुत्र मोह)',
      en: 'Salok 115: Kabir\'s Lineage Endangered Due to Worldly Attachment',
    },
    moolGurmukhi: [
      'ਬੂਡਾ ਬੰਸੁ ਕਬੀਰ ਕਾ ਉਪਜਿਓ ਪੂਤੁ ਕਮਾਲੁ ॥',
      'ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਛਾਡਿ ਕੈ ਘਰਿ ਲੇ ਆਯਾ ਮਾਲੁ ॥੧੧੫॥',
    ],
    moolDevanagari: [
      'बूडा बंसु कबीर का उपजिओ पूतु कमालु ॥',
      'हरि का सिमरनु छाडि कै घरि ले आया मालु ॥११५॥',
    ],
    moolRoman: [
      'Būḍā bans Kabīr kā upjiō pūt kamāl.',
      'Har kā simran chhād kai ghar le āyā māl. ||115||',
    ],
    shabdarth: [
      {
        word: 'ਬੂਡਾ ਬੰਸੁ / बूडा बंसु',
        meaning: {
          pb: 'ਖ਼ਾਨਦਾਨ ਜਾਂ ਆਤਮਿਕ ਪੀੜ੍ਹੀ ਡੁੱਬ ਗਈ',
          hi: 'वंश या आत्मिक पीढ़ी डूब गई',
          en: 'Lineage / spiritual heritage is sinking',
        },
      },
      {
        word: 'ਕਮਾਲੁ / कमालु',
        meaning: {
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪੁੱਤਰ (ਕਮਾਲ)',
          hi: 'सतगुरु कबीर साहेब का पुत्र (कमाल)',
          en: 'Kamal, Kabir\'s son',
        },
      },
      {
        word: 'ਘਰਿ ਲੇ ਆਯਾ ਮਾਲੁ / घरि ले आया मालु',
        meaning: {
          pb: 'ਘਰ ਵਿੱਚ ਮਾਇਆ (ਦੁਨਿਆਵੀ ਧਨ) ਲਿਆ ਕੇ ਰੱਖ ਲਿਆ',
          hi: 'घर में माया (दुनियावी धन) लाकर रख लिया',
          en: 'Brought home worldly wealth and attachment',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕਬੀਰ ਦਾ (ਆਤਮਿਕ) ਬੰਸ ਡੁੱਬ ਗਿਆ ਹੈ ਕਿਉਂਕਿ ਘਰ ਵਿੱਚ ਕਮਾਲ (ਪੁੱਤਰ) ਪੈਦਾ ਹੋਇਆ ਹੈ, ਜਿਸ ਨੇ ਪ੍ਰਮਾਤਮਾ ਦਾ ਸਿਮਰਨ ਛੱਡ ਕੇ (ਸੰਸਾਰਕ ਮੋਹ ਅਤੇ) ਮਾਇਆ ਦਾ ਮਾਲ ਘਰ ਵਿੱਚ ਲਿਆ ਕੇ ਜੋੜ ਲਿਆ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-कबीर का (आध्यात्मिक) वंश डूब गया है क्योंकि घर में कमाल (पुत्र) पैदा हुआ है, जिसने भगवान का स्मरण छोड़कर (सांसारिक मोह और) माया का धन घर में लाकर एकत्र कर लिया है।',
      en: 'Satguru Kabir Saheb proclaims: My spiritual lineage is sinking because son Kamal has been born, who, forsaking divine remembrance, has brought home worldly wealth and materialistic attachment.',
    },
    chintan: {
      pb: 'ਮਾਇਆ ਦਾ ਮੋਹ ਅਤੇ ਸੰਸਾਰਕ ਧੰਧੇ ਪਰਿਵਾਰ ਨੂੰ ਅਧਿਆਤਮਕ ਮਾਰਗ ਤੋਂ ਭਟਕਾ ਦਿੰਦੇ ਹਨ।',
      hi: 'माया का मोह और सांसारिक धंधे परिवार को आध्यात्मिक मार्ग से भटका देते हैं।',
      en: 'Worldly attachments and wealth often pull succeeding generations away from spiritual pursuit.',
    },
    acharana: {
      pb: 'ਪਰਿਵਾਰ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਨਿਭਾਉਂਦੇ ਹੋਏ ਵੀ ਮਾਇਕ ਮੋਹ ਤੋਂ ਉੱਪਰ ਰਹੋ।',
      hi: 'परिवार की जिम्मेदारियां निभाते हुए भी माईक मोह से ऊपर रहें।',
      en: 'Fulfilling family duties, remain detached from greed and material obsession.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਪਰਿਵਾਰਕ ਮੋਹ ਨੂੰ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने पारिवारिक मोह को प्रभु चरणों में समर्पित करें।',
      en: 'Surrender all familial attachments at the divine lotus feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 116 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-116',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੬: ਸਾਧੂ ਕਉ ਮਿਲਨੇ ਜਾਈਐ (ਸੰਤ ਮਿਲਾਪ)',
      hi: 'सलोक ११६: साधू कउ मिलने जाईऐ (संत मिलाप)',
      en: 'Salok 116: Visiting Holy Saints Alone and With Unwavering Resolve',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਧੂ ਕਉ ਮਿਲਨੇ ਜਾਈਐ ਸਾਥਿ ਨ ਲੀਜੈ ਕੋਇ ॥',
      'ਪਾਛੈ ਪਾਉ ਨ ਦੀਜੀਐ ਆਗੈ ਹੋਇ ਸੁ ਹੋਇ ॥੧੧੬॥',
    ],
    moolDevanagari: [
      'कबीर साधू कउ मिलने जाईऐ साथि न लीजै कोइ ॥',
      'पाछै पाउ न दीजीऐ आगै होइ सु होइ ॥११६॥',
    ],
    moolRoman: [
      'Kabīr sādhū kau milne jāīai sāth na lījai koi.',
      'Pāchhai pāu na dījai āgai hoi su hoi. ||116||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਧੂ ਕਉ / साधू कउ',
        meaning: {
          pb: 'ਸੰਤ ਜਨਾਂ, ਗੁਰਮੁਖਾਂ ਨੂੰ',
          hi: 'संत जनों, गुरमुखों को',
          en: 'To the holy saints',
        },
      },
      {
        word: 'ਸਾਥਿ ਨ ਲੀਜੈ / साथि न लीजै',
        meaning: {
          pb: 'ਕਿਸੇ ਦੁਨਿਆਵੀ ਸਾਥੀ ਨੂੰ ਨਾਲ ਨਾ ਲਿਜਾਓ',
          hi: 'किसी दुनियावी साथी को साथ न ले जाएं',
          en: 'Take no worldly companion along',
        },
      },
      {
        word: 'ਪਾਛੈ ਪਾਉ ਨ / पाछै पाउ न',
        meaning: {
          pb: 'ਪਿੱਛੇ ਪੈਰ ਨਾ ਪਾਓ (ਵਾਪਸ ਨਾ ਮੁੜੋ)',
          hi: 'पीछे पैर न रखें (वापस न लौटें)',
          en: 'Do not turn back or hesitate',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇਕਰ ਸੰਤਾਂ ਨੂੰ ਮਿਲਣ ਜਾਣਾ ਹੋਵੇ ਤਾਂ ਨਾਲ ਕਿਸੇ ਦੁਨਿਆਵੀ ਸਾਥੀ ਨੂੰ ਨਾ ਲਿਜਾਓ (ਇਕੱਲੇ, ਨਿਰਮਲ ਮਨ ਨਾਲ ਜਾਓ)। ਘਰੋਂ ਪੈਰ ਪੁੱਟ ਕੇ ਕਦੇ ਪਿੱਛੇ ਪੈਰ ਨਾ ਰੱਖੋ (ਵਾਪਸ ਨਾ ਮੁੜੋ), ਅੱਗੇ ਭਾਵੇਂ ਜੋ ਕੁਝ ਵੀ ਹੋਵੇ, ਸਹਾਰੋ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि संतों से मिलने जाना हो तो साथ किसी दुनियावी साथी को न ले जाएं (अकेले, निर्मल मन से जाएं)। घर से कदम बढ़ाकर कभी पीछे पैर न रखें (वापस न लौटें), आगे चाहे जो कुछ भी हो, उसका सामना करें।',
      en: 'Satguru Kabir Saheb proclaims: When going to visit holy saints, take no worldly companion along. Step forward with resolute devotion and never turn back, come what may.',
    },
    chintan: {
      pb: 'ਪਰਮਾਤਮਾ ਅਤੇ ਸੰਤਾਂ ਦੀ ਪ੍ਰਾਪਤੀ ਲਈ ਦ੍ਰਿੜ੍ਹਤਾ ਅਤੇ ਇਕਾਗਰਤਾ ਅਤਿ ਜ਼ਰੂਰੀ ਹੈ।',
      hi: 'परमात्मा और संतों की प्राप्ति के लिए दृढ़ता और एकाग्रता अति आवश्यक है।',
      en: 'Absolute determination and single-minded focus are essential in seeking spiritual truth.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਮਾਰਗ ਉੱਤੇ ਬਿਨਾਂ ਕਿਸੇ ਸੰਕੋਚ ਜਾਂ ਦੁਚਿਤੀ ਦੇ ਅੱਗੇ ਵਧੋ।',
      hi: 'सतगुरु के मार्ग पर बिना किसी संकोच या दुविधा के आगे बढ़ें।',
      en: 'Walk fearlessly and without hesitation on the path of truth.',
    },
    samarpan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਆਪਣੇ ਆਪ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'संतों की संगति में अपने आपको पूर्णतः समर्पित करें।',
      en: 'Surrender your ego completely in the gathering of the saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 117 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-117',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੭: ਜਗੁ ਬਾਧਿਓ ਜਿਹ ਜੇਵري (ਮਾਇਆ ਦੀ ਰੱਸੀ)',
      hi: 'सलोक ११७: जगु बाधिओ जिह जेवरी (माया की रस्सी)',
      en: 'Salok 117: Do Not Bind Yourself with the Rope of Worldly Attachment',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਗੁ ਬਾਧਿਓ ਜਿਹ ਜੇਵਰੀ ਤਿਹ ਮਤ ਬੰਧਹੁ ਕਬੀਰ ॥',
      'ਜੈਹਹਿ ਆਟਾ ਲੋਨ ਜਿਉ ਸੋਨ ਸਮਾਨਿ ਸਰੀਰੁ ॥੧੧੭॥',
    ],
    moolDevanagari: [
      'कबीर जगु बाधिओ जिह जेवरी तिह मत बंधहु कबीर ॥',
      'जैहहि आटा लोन जिउ सोन समानि शरीरु ॥११७॥',
    ],
    moolRoman: [
      'Kabīr jag bādhiō jih jevrī tih mat bandhahu Kabīr.',
      'Jaihi āṭā lon jiu son samān sharīr. ||117||',
    ],
    shabdarth: [
      {
        word: 'ਜਿਹ ਜੇਵਰੀ / जिह जेवरी',
        meaning: {
          pb: 'ਜਿਸ ਮਾਇਆ-ਮੋਹ ਦੀ ਰੱਸੀ ਨਾਲ',
          hi: 'जिस माया-मोह की रस्सी से',
          en: 'With which rope of worldly illusion',
        },
      },
      {
        word: 'ਜੈਹਹਿ / जैहहि',
        meaning: {
          pb: 'ਨਸ਼ਟ ਹੋ ਜਾਵੇਗਾ, ਵਿਅਰਥ ਚਲਾ ਜਾਵੇਗਾ',
          hi: 'नष्ट हो जाएगा, व्यर्थ चला जाएगा',
          en: 'Will be wasted / dissolved',
        },
      },
      {
        word: 'ਸੋਨ ਸਮਾਨਿ / सोन समानि',
        meaning: {
          pb: 'ਸੋਨੇ ਵਰਗਾ ਕੀਮਤੀ ਸਰੀਰ',
          hi: 'सोने के समान मूल्यवान शरीर',
          en: 'This precious gold-like body',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਮਾਇਆ-ਮੋਹ ਦੀ ਜਿਸ ਰੱਸੀ ਨਾਲ ਸਾਰਾ ਜਗਤ ਬੱਧਾ ਹੋਇਆ ਹੈ, ਤੂੰ ਆਪਣੇ ਆਪ ਨੂੰ ਉਸ ਨਾਲ ਨਾ ਬੰਨ੍ਹੀਂ। ਨਹੀਂ ਤਾਂ ਇਹ ਸੋਨੇ ਵਰਗਾ ਕੀਮਤੀ ਸਰੀਰ ਲੂਣ ਅਤੇ ਆਟੇ ਵਾਂਗ (ਪਾਣੀ ਵਿੱਚ ਘੁਲ ਕੇ) ਬਿਨਾਂ ਮੁੱਲ ਹੀ ਨਸ਼ਟ ਹੋ ਜਾਵੇਗਾ।',
      hi: 'हे कबीर! माया-मोह की जिस रस्सी से सारा जगत बंधा हुआ है, तू अपने आपको उससे न बांधना। अन्यथा यह सोने के समान मूल्यवान शरीर नमक और आटे की भांति (पानी में घुलकर) व्यर्थ ही नष्ट हो जाएगा।',
      en: 'O Kabir! Do not bind yourself with the same rope of worldly illusion that ties down the whole world. Otherwise, this precious gold-like body will dissolve and be wasted away like salt or flour in water.',
    },
    chintan: {
      pb: 'ਦੁਨਿਆਵੀ ਮੋਹ ਵਿੱਚ ਫਸ ਕੇ ਮਨੁੱਖ ਆਪਣਾ ਕੀਮਤੀ ਜੀਵਨ ਵਿਅਰਥ ਗੁਆ ਲੈਂਦਾ ਹੈ।',
      hi: 'दुनियावी मोह में फंसकर मनुष्य अपना बहुमूल्य जीवन व्यर्थ गंवा देता है।',
      en: 'Entangled in worldly delusion, humanity wastes the precious gift of human birth.',
    },
    acharana: {
      pb: 'ਮਾਇਕ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਪ੍ਰਭੂ ਨਾਲ ਜੋੜੋ।',
      hi: 'माईक बंधनों से मुक्त होकर अपने मन को प्रभु से जोड़ें।',
      en: 'Liberating yourself from material bondage, attach your mind to the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਅਕਾਲ ਪੁਰਖ ਦੀ ਬੰਦਗੀ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना जीवन अकाल पुरख की बंदगी में समर्पित करें।',
      en: 'Consecrate your life entirely to divine worship and remembrance.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 118 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-118',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੮: ਹੰਸੁ ਉਡਿਓ ਤਨੁ ਗਾਡਿਓ (ਅੰਤਿਮ ਸਮਾਂ)',
      hi: 'सलोक ११८: हंसु उडिओ तनु गाडिओ (अंतिम समय)',
      en: 'Salok 118: Attachment Lingers Even at the Moment of Death',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹੰਸੁ ਉਡਿਓ ਤਨੁ ਗਾਡਿਓ ਸੋਝਾਈ ਸੈਨਾਹ ॥',
      'ਅਜਹੂ ਜੀਉ ਨ ਛੋਡਈ ਰੰਕਾਈ ਨੈਨਾਹ ॥੧੧੮॥',
    ],
    moolDevanagari: [
      'कबीर हंसु उडिओ तनु गाडिओ सोझाई सैनाह ॥',
      'अजहू जीउ न छोडई रंकाइ नैनाह ॥११८॥',
    ],
    moolRoman: [
      'Kabīr hans uḍiō tan gāḍiō sojhāī saināh.',
      'Ajahū jīu na choḍīai rankāī naināh. ||118||',
    ],
    shabdarth: [
      {
        word: 'ਹੰਸੁ ਉਡਿਓ / हंसु उडिओ',
        meaning: {
          pb: 'ਜੀਵਾਤਮਾ ਸਰੀਰ ਛੱਡ ਕੇ ਉੱਡ ਗਿਆ',
          hi: 'जीवात्मा शरीर छोड़कर उड़ गया',
          en: 'The swan-soul has flown away from the body',
        },
      },
      {
        word: 'ਤਨੁ ਗਾਡਿਓ / तनु गाडिओ',
        meaning: {
          pb: 'ਸਰੀਰ ਨੂੰ (ਮਿੱਟੀ ਵਿੱਚ) ਦਬਾ ਦਿੱਤਾ ਗਿਆ',
          hi: 'शरीर को (मिट्टी में) दबा दिया गया',
          en: 'The body is buried/cremated',
        },
      },
      {
        word: 'ਰੰਕਾਈ ਨੈਨਾਹ / रंकाई नैनाह',
        meaning: {
          pb: 'ਅੱਖਾਂ ਦੀ ਕੰਗਾਲਤਾ (ਲਾਲਚੀ ਨਜ਼ਰਾਂ)',
          hi: 'आंखों की कंगालता (लालची नजरें)',
          en: 'Poverty and greed of the eyes / yearning looks',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਦ ਹੰਸ (ਜੀਵਾਤਮਾ) ਸਰੀਰ ਛੱਡ ਕੇ ਉੱਡ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਰੀਰ ਨੂੰ ਮਿੱਟੀ ਵਿੱਚ ਦਬਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ (ਜਾਂ ਸਾੜ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ), ਤਾਂ ਵੀ ਮਨੁੱਖ ਇਸ਼ਾਰਿਆਂ ਨਾਲ ਸੰਬੰਧੀਆਂ ਨੂੰ ਘਰ ਦੀ ਸੰਭਾਲ ਸਮਝਾਉਂਦਾ ਹੈ। ਅੰਤ ਵੇਲੇ ਵੀ ਮਨੁੱਖ ਅੱਖਾਂ ਦੀ ਕੰਗਾਲਤਾ (ਲਾਲਚ) ਨਹੀਂ ਛੱਡਦਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जब हंस (जीवात्मा) शरीर छोड़कर उड़ जाता है और शरीर को मिट्टी में दबा दिया जाता है (या दाह-संस्कार कर दिया जाता है), तब भी मनुष्य संकेतों से संबंधियों को घर की संभाल समझाता है। अंत समय में भी मनुष्य आंखों की कंगालता (मोह-लोभ) नहीं छोड़ता।',
      en: 'Satguru Kabir Saheb proclaims: When the soul-swan departs and the body is buried or cremated, even then the dying person signals instructions to relatives about worldly affairs. Even at the final moment, the eyes do not let go of greed and attachment.',
    },
    chintan: {
      pb: 'ਮਾਇਆ ਦਾ ਮੋਹ ਮਰਦਮਸ਼ੁਮਾਰੀ ਤੱਕ ਨਾਲ ਨਹੀਂ ਛੁੱਟਦਾ। ਜੀਵਨ ਵਿੱਚ ਹੀ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਕਮਾਓ।',
      hi: 'माया का मोह अंतिम समय तक नहीं छूटता। जीवन में ही प्रभु प्रेम कमाएं।',
      en: 'Worldly attachment clings until the very end. Cultivate divine love while you live.',
    },
    acharana: {
      pb: 'ਮਾਇਕ ਮੋਹ ਨੂੰ ਘਟਾ ਕੇ ਹਰ ਸਾਹ ਪ੍ਰਭੂ ਯਾਦ ਵਿੱਚ ਬਿਤਾਓ।',
      hi: 'माईक मोह को घटाकर प्रत्येक श्वास प्रभु याद में बिताएं।',
      en: 'Diminishing worldly greed, spend every breath in divine remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਮਾਇਆ ਤੋਂ ਮੋੜ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਟਿਕਾਓ।',
      hi: 'अपनी सुरति को माया से मोड़कर प्रभु चरणों में टिकाएं।',
      en: 'Anchor your consciousness in the Divine rather than in material possessions.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 119 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-119',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੧੯: ਨੈਨ ਨਿਹਾਰਉ ਤੁਝ ਕਉ (ਪ੍ਰਭੂ ਦਰਸ਼ਨ)',
      hi: 'सलोक ११९: नैन निहारउ तुझ कउ (प्रभु दर्शन)',
      en: 'Salok 119: Yearning to Behold the Divine with Eyes, Ears, and Heart',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨੈਨ ਨਿਹਾਰਉ ਤੁਝ ਕਉ ਸ੍ਰਵਨ ਸਨਉ ਤੁਅ ਨਾਉ ॥',
      'ਬੈਠ ਉਚਰਉ ਤੁਅ ਨਾਮ ਜੀ ਚਰਨ ਕਮਲ ਰਿਦ ਠਾਉ ॥੧੧੯॥',
    ],
    moolDevanagari: [
      'कबीर नैन निहारउ तुझ कउ स्रवन सनउ तुअ नाउ ॥',
      'बैठ उचरउ तुअ नाम जी चरन कमल रिद ठाउ ॥११९॥',
    ],
    moolRoman: [
      'Kabīr nain nihārau tujh kau sravan sanao tuā nāu.',
      'Baiṭh ucharau tuā nām jī charan kamal rid ṭhāu. ||119||',
    ],
    shabdarth: [
      {
        word: 'ਨੈਨ ਨਿਹਾਰਉ / नैन निहारउ',
        meaning: {
          pb: 'ਅੱਖਾਂ ਨਾਲ ਤੁਹਾਨੂੰ ਵੇਖਦਾ ਰਹਾਂ',
          hi: 'नेत्रों से आपको देखता रहूं',
          en: 'May I continually behold You with my eyes',
        },
      },
      {
        word: 'ਸ੍ਰਵਨ ਸਨਉ / स्रवन सनउ',
        meaning: {
          pb: 'ਕੰਨਾਂ ਨਾਲ ਤੇਰਾ ਨਾਮ ਸੁਣਦਾ ਰਹਾਂ',
          hi: 'कानों से आपका नाम सुनता रहूं',
          en: 'May I hear Your Name with my ears',
        },
      },
      {
        word: 'ਰਿਦ ਠਾਉ / रिद ठाउ',
        meaning: {
          pb: 'ਹਿਰਦੇ ਵਿੱਚ ਸਥਾਨ ਦੇਣਾ',
          hi: 'हृदय में स्थान देना',
          en: 'Enshrined within the heart',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬੇਨਤੀ ਕਰਦੇ ਹਨ-ਹੇ ਪ੍ਰਭੂ! ਮੈਂ ਆਪਣੀਆਂ ਅੱਖਾਂ ਨਾਲ ਤੈਨੂੰ ਹੀ ਵੇਖਦਾ ਰਹਾਂ, ਕੰਨਾਂ ਨਾਲ ਤੇਰਾ ਨਾਮ ਸੁਣਦਾ ਰਹਾਂ, ਬੈਠ ਕੇ ਜ਼ਬਾਨ ਨਾਲ ਤੇਰਾ ਨਾਮ ਉਚਾਰਦਾ ਰਹਾਂ ਅਤੇ ਤੇਰੇ ਚਰਨ ਕਮਲਾਂ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਈ ਰੱਖਾਂ।',
      hi: 'सतगुरु कबीर साहेब प्रार्थना करते हैं-हे प्रभु! मैं अपनी आंखों से आपको ही देखता रहूं, कानों से आपका नाम सुनता रहूं, बैठकर जुबान से आपका नाम उच्चारित करता रहूं और आपके चरण कमलों को अपने हृदय में बसाए रखूं।',
      en: 'Satguru Kabir Saheb prays: O Lord, may my eyes ever behold You, my ears hear Your Name, my tongue utter Your praise, and my heart enshrine Your lotus feet as its permanent abode.',
    },
    chintan: {
      pb: 'ਭਗਤ ਦੀ ਅੰਤਿਮ ਇੱਛਾ ਕੇਵਲ ਪ੍ਰਭੂ ਦੇ ਦਰਸ਼ਨ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਦੀ ਹੁੰਦੀ ਹੈ।',
      hi: 'भक्त की अंतिम इच्छा केवल प्रभु के दर्शन और नाम सिमरन की होती है।',
      en: 'A devotee\'s sole aspiration is unbroken communion through sight, sound, and heart.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਸਾਰੇ ਇੰਦਰੀਆਂ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਸੇਵਾ ਅਤੇ ਸਿਮਰਨ ਵਿੱਚ ਲਗਾਓ।',
      hi: 'अपनी समस्त इंद्रियों को प्रभु की सेवा और सिमरन में लगाएं।',
      en: 'Engage all your senses and faculties in divine service and remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ, ਮਨ ਅਤੇ ਸਾਰੇ ਅੰਗ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना तन, मन और समस्त अंग प्रभु चरणों में समर्पित करें।',
      en: 'Dedicate your entire being entirely at the feet of the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 120 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-120',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੨੦: ਸੁਰਗ ਨਰਕ ਤੇ ਮੈ ਰਹਿਓ (ਆਤਮਿਕ ਅਨੰਦ)',
      hi: 'सलोक १२०: सुरग नरक ते मै रहिओ (आत्मिक आनंद)',
      en: 'Salok 120: Transcending Heaven and Hell Through Satguru\'s Grace',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੁਰਗ ਨਰਕ ਤੇ ਮੈ ਰਹਿਓ ਸਤਿਗੁਰ ਕੇ ਪਰਸਾਦਿ ॥',
      'ਚਰਨ ਕਮਲ ਕੀ ਮਉਜ ਮਹਿ ਰਹਉ ਅੰਤਿ ਅਰੁ ਆਦਿ ॥੧੨੦॥',
    ],
    moolDevanagari: [
      'कबीर सुरग नरक ते मै रहिओ सतिगुर के परसादि ॥',
      'चरन कमल की मौज महि रहउ अंति अरु आदि ॥१२०॥',
    ],
    moolRoman: [
      'Kabīr surag narak te mai rahiō satigur ke parsād.',
      'Charan kamal kī mauj mahi rahau ant aru ād. ||120||',
    ],
    shabdarth: [
      {
        word: 'ਸੁਰਗ ਨਰਕ ਤੇ / सुरग नरक ते',
        meaning: {
          pb: 'ਸੁਰਗ ਅਤੇ ਨਰਕ ਦੇ ਬੰਧਨਾਂ ਤੋਂ',
          hi: 'स्वर्ग और नरक के बंधनों से',
          en: 'From the cycles of heaven and hell',
        },
      },
      {
        word: 'ਸਤਿਗੁਰ ਕੇ ਪਰਸਾਦਿ / सतिगुर के परसादि',
        meaning: {
          pb: 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ',
          hi: 'सतगुरु की कृपा से',
          en: 'By the grace of the Satguru',
        },
      },
      {
        word: 'ਚਰਨ ਕਮਲ ਕੀ ਮਉਜ / चरण कमल की मौज',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦੇ ਚਰਨ ਕਮਲਾਂ ਦੇ ਪ੍ਰੇਮ-ਅਨੰਦ ਵਿੱਚ',
          hi: 'प्रभु के चरण कमलों के प्रेम-आनंद में',
          en: 'In the blissful ecstasy of the Lord\'s lotus feet',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਮੈਂ ਸੁਰਗ ਅਤੇ ਨਰਕ (ਦੇ ਚੱਕਰਾਂ) ਤੋਂ ਬਚ ਗਿਆ ਹਾਂ। ਮੈਂ ਮੁੱਢ ਤੋਂ ਲੈ ਕੇ ਅੰਤ ਤੱਕ (ਸਦਾ ਹੀ) ਪ੍ਰਭੂ ਦੇ ਚਰਨ ਕਮਲਾਂ ਦੀ ਮੌਜ (ਅਨੰਦ) ਵਿੱਚ ਮਸਤ ਰਹਿੰਦਾ ਹਾਂ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सतगुरु की कृपा से मैं स्वर्ग और नरक (के चक्रों) से बच गया हूँ। मैं आदि से अंत तक (सदैव) प्रभु के चरण कमलों की मौज (आनंद) में मग्न रहता हूँ।',
      en: 'Satguru Kabir Saheb proclaims: By the grace of the Satguru, I have transcended the illusions of heaven and hell. From beginning to end, I abide eternally in the blissful ecstasy of the Lord\'s lotus feet.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਪ੍ਰੇਮ ਅਤੇ ਸਿਮਰਨ ਹੀ ਸਭ ਤੋਂ ਉੱਤਮ ਮੁਕਤੀ ਹੈ ਜੋ ਸੁਰਗ-ਨਰਕ ਤੋਂ ਪਾਰ ਕਰ ਦਿੰਦੀ ਹੈ।',
      hi: 'प्रभु का प्रेम और सिमरन ही सर्वोच्च मुक्ति है जो स्वर्ग-नरक से पार कर देती है।',
      en: 'Divine love and remembrance grant ultimate liberation, far beyond mere heaven and hell.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਆ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਦਾ ਅਨੰਦ ਮਾਣੋ।',
      hi: 'सतगुरु की शरण में आकर प्रभु भक्ति का आनंद लें।',
      en: 'Abiding in Satguru\'s sanctuary, savor the pure joy of divine devotion.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना जीवन पूर्ण रूप से प्रभु चरणों में समर्पित करें।',
      en: 'Surrender your heart unconditionally at the divine feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 121 (Ang 1368)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-121',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੨੧: ਚਰਨ ਕਮਲ ਕੀ ਮਉਜ ਕੋ (ਅਨੁਭਵੀ ਅਨੰਦ)',
      hi: 'सलोक १२१: चरन कमल की मौज को (अनुभवी आनंद)',
      en: 'Salok 121: The Bliss of Divine Union Cannot Be Described; It Must Be Experienced',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚਰਨ ਕਮਲ ਕੀ ਮਉਜ ਕੋ ਕਹਿ ਕैसे ਉਨਮਾਨ ॥',
      'ਕਹਿਬੇ ਕਉ ਸੋਭਾ ਨਹੀ ਦੇਖਾ ਹੀ ਪਰਵਾਨੁ ॥੧੨੧॥',
    ],
    moolDevanagari: [
      'कबीर चरन कमल की मौज को कहि कैसे उनमान ॥',
      'कहिबे कउ सोभा नही देखा ही परवानु ॥१२१॥',
    ],
    moolRoman: [
      'Kabīr charan kamal kī mauj ko kahi kaise unmān.',
      'Kahibe kau sobhā nahī dekhā hī parvān. ||121||',
    ],
    shabdarth: [
      {
        word: 'ਉਨਮਾਨ / उनमान',
        meaning: {
          pb: 'ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ, ਬਿਆਨ ਕਰਨਾ',
          hi: 'अनुमान लगाना, बयान करना',
          en: 'Estimate or describe',
        },
      },
      {
        word: 'ਕਹਿਬੇ ਕਉ ਸੋਭਾ ਨਹੀ / कहिबे कउ सोभा नही',
        meaning: {
          pb: 'ਸ਼ਬਦਾਂ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਿਆਨ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ',
          hi: 'शब्दों में पूर्णतः व्यक्त नहीं किया जा सकता',
          en: 'Cannot be adequately expressed in words',
        },
      },
      {
        word: 'ਦੇਖਾ ਹੀ ਪਰਵਾਨੁ / देखा ही परवानु',
        meaning: {
          pb: 'ਅਨੁਭਵ ਕਰਨਾ ਹੀ ਪ੍ਰਮਾਣਿਕ ਹੈ',
          hi: 'अनुभव करना ही प्रामाणिक है',
          en: 'Experiencing it firsthand is the only proof',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਦੇ ਚਰਨ ਕਮਲਾਂ ਦੀ ਮੌਜ (ਅਨੰਦ) ਦਾ ਅੰਦਾਜ਼ਾ ਕਿਵੇਂ ਲਗਾਇਆ ਜਾ ਸਕਦਾ ਹੈ? ਇਸ ਨੂੰ ਬਚਨਾਂ ਨਾਲ ਕਹਿ ਕੇ ਬਿਆਨ ਕਰਨਾ ਸੋਭਦਾ ਨਹੀਂ (ਇਹ ਅਕਥਨੀਯ ਹੈ), ਇਹ ਤਾਂ ਖ਼ੁਦ ਅਨੁਭਵ ਕਰਨ ਨਾਲ ਹੀ ਪ੍ਰਮਾਣਿਕ ਹੁੰਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-प्रभु के चरण कमलों की मौज (आनंद) का अनुमान कैसे लगाया जा सकता है? इसे शब्दों में व्यक्त करना संभव नहीं (यह अकथनीय है), यह तो स्वयं अनुभव करने से ही प्रामाणिक होता है।',
      en: 'Satguru Kabir Saheb proclaims: How can the supreme bliss of divine lotus feet be estimated or described? It transcends words; experiencing it firsthand within the soul is the only true proof.',
    },
    chintan: {
      pb: 'ਅਧਿਆਤਮਕ ਅਨੰਦ ਅਨੁਭਵ ਦੀ ਚੀਜ਼ ਹੈ, ਸ਼ਬਦਾਂ ਦੀ ਸੀਮਾ ਤੋਂ ਪਰ੍ਹੇ ਹੈ।',
      hi: 'आध्यात्मिक आनंद अनुभव की वस्तु है, शब्दों की सीमा से परे है।',
      en: 'Spiritual ecstasy is a matter of direct inner experience, beyond the reach of words.',
    },
    acharana: {
      pb: 'ਸਿਮਰਨ ਦਾ ਅਨੰਦ ਬੋਲਣ ਦੀ ਬਜਾਏ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਮਾਣੋ।',
      hi: 'सिमरन का आनंद बोलने की अपेक्षा अपने हृदय में अनुभव करें।',
      en: 'Savor the joy of devotion silently within your own heart.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਉਸ ਅਕਥ ਅਨੰਦ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਲੀਨ ਕਰ ਦਿਓ।',
      hi: 'अपने आपको उस अकथ आनंद में पूर्णतः लीन कर दें।',
      en: 'Immerse your soul completely in that unspeakable divine rapture.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੮ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 122 (Ang 1368-1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-122',
    category: 'salok',
    ang: 1368,
    title: {
      pb: 'ਸਲੋਕ ੧੨੨: ਦੇਖਿ ਕੈ ਕਿਹ ਕਹਉ (ਸਾਚਾ ਪ੍ਰਭੂ)',
      hi: 'सलोक १२२: देखि कै किह कहउ (साचा प्रभु)',
      en: 'Salok 122: Singing the Praises of the Indescribable Lord',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦੇਖਿ ਕੈ ਕਿਹ ਕਹਉ ਕਹੇ ਨ ਕੋ ਪਤੀਆਇ ॥',
      'ਹਰਿ ਜੈਸਾ ਤੈਸਾ ਉਹੀ ਰਹਉ ਹਰਖਿ ਗੁਨ ਗਾਇ ॥੧੨੨॥',
    ],
    moolDevanagari: [
      'कबीर देखि कै किह कहउ कहे न को पतीआइ ॥',
      'हरि ਜੈਸਾ तैसा उही रहउ हरखि गुन गाइ ॥१२२॥',
    ],
    moolRoman: [
      'Kabīr dekh kai kih kahau kahe na ko patīāi.',
      'Har jaisā taisā uhee rahau harkhi gun gāi. ||122||',
    ],
    shabdarth: [
      {
        word: 'ਕਿਹ ਕਹਉ / किह कहउ',
        meaning: {
          pb: 'ਕਿਸ ਨੂੰ ਜਾ ਕੇ ਦੱਸੀਏ',
          hi: 'किसको जाकर बताएं',
          en: 'To whom can I describe it',
        },
      },
      {
        word: 'ਕਹੇ ਨ ਕੋ ਪਤੀਆਇ / कहे न को पतीआइ',
        meaning: {
          pb: 'ਕੋਈ ਵਿਸ਼ਵਾਸ ਨਹੀਂ ਕਰਦਾ',
          hi: 'कोई विश्वास नहीं करता',
          en: 'No one would believe or comprehend it',
        },
      },
      {
        word: 'ਹਰਿ ਜੈਸਾ ਤੈਸਾ / हरि जैसा तैसा',
        meaning: {
          pb: 'ਪ੍ਰਮਾਤਮਾ ਜੈਸਾ ਬੇਅੰਤ ਹੈ, ਤੈਸਾ ਹੀ ਹੈ',
          hi: 'परमात्मा जैसा अनंत है, वैसा ही है',
          en: 'God is just as He is (infinite and ineffable)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਸ (ਚਰਨ ਕਮਲਾਂ ਦੀ ਮੌਜ) ਨੂੰ ਵੇਖ ਕੇ ਮੈਂ ਕਿਸ ਨੂੰ ਜਾ ਕੇ ਦੱਸਾਂ? ਦੱਸਣ ਨਾਲ ਕੋਈ ਵਿਸ਼ਵਾਸ (ਪਤੀਆਰਾ) ਨਹੀਂ ਕਰਦਾ। ਇਸ ਲਈ ਪਰਮਾਤਮਾ ਜੈਸਾ ਹੈ, ਵੈਸਾ ਹੀ ਅਕਥ ਹੈ; ਮੈਂ ਤਾਂ ਪ੍ਰਸੰਨ ਹੋ ਕੇ ਸਦਾ ਉਸ ਦੇ ਗੁਣ ਹੀ ਗਾਉਂਦਾ ਰਹਿੰਦਾ ਹਾਂ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-इस (आनंद) को देखकर मैं किसको जाकर बताऊं? बताने से कोई विश्वास नहीं करता। इसलिए परमात्मा जैसा है, वैसा ही अकथ है; मैं तो प्रसन्न होकर सदा उसके गुण ही गाता रहता हूँ।',
      en: 'Satguru Kabir Saheb proclaims: Having witnessed this supreme bliss, to whom can I describe it? No one would believe it. Therefore, God is just as He is—ineffable. I simply remain joyful, singing His endless praises.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਮਹਿਮਾ ਅਪਾਰ ਹੈ। ਉਸ ਨੂੰ ਬਚਨਾਂ ਵਿੱਚ ਬੰਨ੍ਹਣ ਦੀ ਬਜਾਏ ਉਸ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'प्रभु की महिमा अपार है। उसे शब्दों में बांधने की अपेक्षा उसका स्मरण करें।',
      en: 'The glory of God is immeasurable; rather than trying to define Him, praise Him in devotion.',
    },
    acharana: {
      pb: 'ਅਕਥ ਕਥਾ ਨੂੰ ਬਚਨਾਂ ਨਾਲ ਮਾਪਣ ਦੀ ਬਜਾਏ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰੇਮ ਨਾਲ ਮਾਣੋ।',
      hi: 'अकथ कथा को शब्दों से मापने की अपेक्षा हृदय में प्रेम से अनुभव करें।',
      en: 'Cherish the divine mystery in loving silence and joyful kirtan.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਪ੍ਰਭੂ ਦੀ ਸਿਫ਼ਤ-ਸਲਾਹ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना जीवन प्रभु की सिफत-सलाह में समर्पित करें।',
      en: 'Dedicate your life to praising the Supreme Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 123 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-123',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੩: ਚੁਗੈ ਚਿਤਾਰੈ ਭੀ ਚੁਗੈ (ਮਾਇਆ ਮਮਤਾ)',
      hi: 'सलोक १२३: चुगै चितारै भी चुगै (माया ममता)',
      en: 'Salok 123: The Crane Foraging While Remembering Its Young (Worldly Attachment)',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚੁਗੈ ਚਿਤਾਰੈ ਭੀ ਚੁਗੈ ਚੁਗਿ ਚੁਗਿ ਚਿਤਾਰੇ ॥',
      'ਜੈਸੇ ਬਚਰਹਿ ਕੂੰਜ ਮਨ ਮਾਇਆ ਮਮਤਾ ਰੇ ॥੧੨੩॥',
    ],
    moolDevanagari: [
      'कबीर चुगै चितारै भी चुगै चुगि चुगि चितारे ॥',
      'जैसे बच्रहि कूंज मन माया ममता रे ॥१२३॥',
    ],
    moolRoman: [
      'Kabīr chugai chitārai bhī chugai chug chug chitāre.',
      'Jaise bachrahi kūnj man māyā mamatā re. ||123||',
    ],
    shabdarth: [
      {
        word: 'ਚੁਗੈ ਚਿਤਾਰੈ / चुगै चितारै',
        meaning: {
          pb: 'ਚੋਗਾ ਵੀ ਚੁਗਦੀ ਹੈ ਤੇ ਬੱਚਿਆਂ ਨੂੰ ਵੀ ਯਾਦ ਰੱਖਦੀ ਹੈ',
          hi: 'दाना भी चुगती है और बच्चों को भी याद रखती है',
          en: 'Forages for food while keeping her young in mind',
        },
      },
      {
        word: 'ਬਚਰਹਿ ਕੂੰਜ / बच्रहि कूंज',
        meaning: {
          pb: 'ਕੂੰਜ ਪੰਛੀ ਦੇ ਬੱਚੇ',
          hi: 'कुंजर पक्षी के बच्चे',
          en: 'Young chicks of the crane',
        },
      },
      {
        word: 'ਮਾਇਆ ਮਮਤਾ / माया ममता',
        meaning: {
          pb: 'ਦੁਨਿਆਵੀ ਮੋਹ ਅਤੇ ਅਪਣੱਤ',
          hi: 'दुनियावी मोह और अपनापन',
          en: 'Worldly attachment and possessive greed',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਕੂੰਜ (ਪੰਛੀ) ਚੋਗਾ ਵੀ ਚੁਗਦੀ ਹੈ ਅਤੇ ਨਾਲੇ ਆਪਣੇ ਬੱਚਿਆਂ ਨੂੰ ਯਾਦ ਰੱਖਦੀ ਹੈ, ਅਤੇ ਚੁਗਦਿਆਂ-ਚੁਗਦਿਆਂ ਫਿਰ ਬੱਚਿਆਂ ਦੀ ਯਾਦ ਵਿੱਚ ਤੜਫ਼ਦੀ ਹੈ; ਇਸੇ ਤਰ੍ਹਾਂ ਮਨੁੱਖ ਦਾ ਮਨ ਵੀ ਦੁਨਿਆਵੀ ਕਾਰ-ਵਿਹਾਰ ਕਰਦਿਆਂ ਮਾਇਆ ਦੀ ਮਮਤਾ ਵਿੱਚ ਜੁੜਿਆ ਰਹਿੰਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे कुंज (पक्षी) दाना भी चुगती है और साथ ही अपने बच्चों को याद रखती है, और चुगते-चुगते फिर बच्चों की याद में तड़पती है; इसी प्रकार मनुष्य का मन भी दुनियावी कार्य-व्यवहार करते हुए माया की ममता में जुड़ा रहता है।',
      en: 'Satguru Kabir Saheb proclaims: Just as the crane forages for food while constantly remembering and worrying about her young chicks, in the same way, the worldly mind remains deeply entangled in possessive attachment and greed.',
    },
    chintan: {
      pb: 'ਮਨੁੱਖੀ ਮਨ ਸੰਸਾਰਕ ਕਾਰਜਾਂ ਵਿੱਚ ਰੁਝਿਆ ਹੋਣ ਤੇ ਵੀ ਮਾਇਕ ਮੋਹ ਵਿੱਚ ਗ੍ਰਸਤ ਰਹਿੰਦਾ ਹੈ।',
      hi: 'मानवीय मन संसारिक कार्यों में व्यस्त होने पर भी माईक मोह से ग्रस्त रहता है।',
      en: 'Even while engaged in daily tasks, the untrained mind remains tethered to worldly desires.',
    },
    acharana: {
      pb: 'ਕੰਮ-ਕਾਰ ਕਰਦਿਆਂ ਵੀ ਆਪਣਾ ਮਨ ਪ੍ਰਮਾਤਮਾ ਨਾਲ ਜੋੜੋ, ਮਾਇਆ ਦੀ ਮਮਤਾ ਤੋਂ ਮੁਕਤ ਹੋਵੋ।',
      hi: 'काम-धंधा करते हुए भी अपना मन परमात्मा से जोड़ें, माया की ममता से मुक्त हों।',
      en: 'Perform your duties while keeping your heart detached from greedy possession.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਮਮਤਾ ਨੂੰ ਤਿਆਗ ਕੇ ਸਭ ਕੁਝ ਪ੍ਰਭੂ ਦੀ ਅਮਾਨਤ ਸਮਝੋ।',
      hi: 'अपनी ममता को त्यागकर सब कुछ प्रभु की अमानत समझें।',
      en: 'Surrender all possessiveness, recognizing everything as belonging to the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 124 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-124',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੪: ਅੰਬਰ ਘਨਹਰੁ ਛਾਇਆ (ਪਪੀਹੇ ਦੀ ਪਿਆਸ)',
      hi: 'सलोक १२४: अंबर घनहरु छाइआ (पपीहे की प्यास)',
      en: 'Salok 124: Dying of Thirst Amidst Abundance (The Plover and the Clouds)',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਅੰਬਰ ਘਨਹਰੁ ਛਾਇਆ ਬਰਖਿ ਭਰੇ ਸਰ ਤਾਲ ॥',
      'ਚਾਤ੍ਰਿਕ ਜਿਉ ਤਰਸਤ ਰਹੈ ਤਿਨ ਕੋ ਕਉਨੁ ਹਵਾਲੁ ॥੧੨੪॥',
    ],
    moolDevanagari: [
      'कबीर अंबर घनहरु छाइआ बरखि भरे सर ताल ॥',
      'चात्रिक जिउ तरसत रहै तिन को कउनु हवालु ॥१२੪॥',
    ],
    moolRoman: [
      'Kabīr ambar ghanhar chhāiā barakh bhare sar tāl.',
      'Chātrak jiu tarsat rahai tin ko kaun havāl. ||124||',
    ],
    shabdarth: [
      {
        word: 'ਅੰਬਰ ਘਨਹਰੁ / अंबर घनहरु',
        meaning: {
          pb: 'ਆਕਾਸ਼ ਵਿੱਚ ਘਣੇ ਕਾਲੇ ਬੱਦਲ ਛਾਏ ਹੋਏ ਹਨ',
          hi: 'आकाश में घने काले बादल छाए हुए हैं',
          en: 'Dark monsoon clouds covering the sky',
        },
      },
      {
        word: 'ਸਰ ਤਾਲ / सर ताल',
        meaning: {
          pb: 'ਸਰੋਵਰ ਅਤੇ ਤਲਾਅ ਪਾਣੀ ਨਾਲ ਭਰ ਗਏ ਹਨ',
          hi: 'सरोवर और तालाब जल से भर गए हैं',
          en: 'Lakes and ponds filled to the brim with water',
        },
      },
      {
        word: 'ਚਾਤ੍ਰਿਕ / चात्रिक',
        meaning: {
          pb: 'ਪਪੀਹਾ (ਜੋ ਸਿਰਫ਼ ਸੁਆਤੀ ਬੂੰਦ ਲਈ ਤਰਸਦਾ ਹੈ)',
          hi: 'पपीहा (जो केवल स्वाती नक्षत्र की बूंद के लिए तरसता है)',
          en: 'The plover / chakrik bird',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਆਕਾਸ਼ ਵਿੱਚ ਘਣੇ ਬੱਦਲ ਛਾਏ ਹੋਏ ਹਨ ਅਤੇ ਮੀਂਹ ਵਰ੍ਹਨ ਨਾਲ ਸਾਰੇ ਸਰੋਵਰ ਤੇ ਤਲਾਅ ਭਰ ਗਏ ਹਨ, ਪਰ ਪਪੀਹਾ (ਆਪਣੀ ਖ਼ਾਸ ਬੂੰਦ ਲਈ) ਫਿਰ ਵੀ ਤਰਸਦਾ ਰਹਿੰਦਾ ਹੈ। (ਇਸੇ ਤਰ੍ਹਾਂ) ਜਿਹੜੇ ਮਨੁੱਖ ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਮਾਤਮਾ ਨੂੰ ਛੱਡ ਕੇ ਮਾਇਆ ਪਿੱਛੇ ਤਰਸਦੇ ਫਿਰਦੇ ਹਨ, ਉਨ੍ਹਾਂ ਦਾ ਕੀ ਹਾਲ ਹੋਵੇਗਾ?',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-आकाश में घने बादल छाए हुए हैं और वर्षा होने से सभी सरोवर और तालाब भर गए हैं, किंतु पपीहा (अपनी विशेष बूंद के लिए) फिर भी तरसता रहता है। (इसी प्रकार) जो मनुष्य सर्वव्यापक परमात्मा को छोड़कर माया के पीछे तरसते फिरते हैं, उनका क्या हाल होगा?',
      en: 'Satguru Kabir Saheb proclaims: Dark clouds fill the sky and rain fills all lakes and ponds to the brim, yet the plover still pines away parched (for its single drop). Similarly, what will become of those who turn away from the all-pervading God and endlessly chase after worldly illusions?',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ-ਰੂਪੀ ਅੰਮ੍ਰਿਤ ਸਾਹਮਣੇ ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਮਾਇਕ ਤ੍ਰਿਸ਼ਨਾ ਵਿੱਚ ਭਟਕਣਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁੱਖ ਹੈ।',
      hi: 'प्रभु रूपी अमृत सामने होने के बावजूद माईक तृष्णा में भटकना सबसे बड़ा दुःख है।',
      en: 'To thirst for worldly illusions while the ocean of divine nectar is all around is tragic delusion.',
    },
    acharana: {
      pb: 'ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਤ੍ਰਿਪਤ ਹੋਵੋ ਅਤੇ ਮਾਇਕ ਭਟਕਣਾ ਤੋਂ ਬਚੋ।',
      hi: 'सर्वव्यापक प्रभु के प्रेम से तृप्त हों और माईक भटकना से बचें।',
      en: 'Quench your soul\'s thirst in divine love and abandon vain material cravings.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਪਿਆਸ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਸ਼ਾਂਤੀ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'अपनी प्यास प्रभु चरणों में समर्पित कर शांति प्राप्त करें।',
      en: 'Surrender all restless desires at the feet of the Lord to find ultimate peace.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 125 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-125',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੫: ਚਕਈ ਜਉ ਨਿਸਿ ਬੀਛੁਰੈ (ਪ੍ਰਭੂ ਵਿਛੋੜਾ)',
      hi: 'सलोक १२५: चकई जਉ निसि बीचुरै (प्रभु वियोग)',
      en: 'Salok 125: The Chakvi Bird Reunites at Dawn, But the Godless Remain Estranged Forever',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚਕਈ ਜਉ ਨਿਸਿ ਬੀਛੁਰੈ ਆਇ ਮਿਲੈ ਪਰਭਾਤਿ ॥',
      'ਜੋ ਨਰ ਬਿਛਰੇ ਰਾਮ ਸਿਉ ਨਾ ਦਿਨ ਮਿਲੇ ਨ ਰਾਤਿ ॥੧੨੫॥',
    ],
    moolDevanagari: [
      'कबीर चकई जउ निसि बीचुरै आइ मिलै प्रभाति ॥',
      'जो नर बिछरे राम सिउ ना दिन मिले न राति ॥१२५॥',
    ],
    moolRoman: [
      'Kabīr chakī jau nis bīchurai āi milai prabhāti.',
      'Jo nar bichre Rām siu nā din mile na rāti. ||125||',
    ],
    shabdarth: [
      {
        word: 'ਚਕਈ / चकई',
        meaning: {
          pb: 'ਚਕਵੀ ਪੰਛੀ (ਜੋ ਰਾਤ ਨੂੰ ਚਕਵੇ ਤੋਂ ਵਿਛੜਦੀ ਹੈ)',
          hi: 'चकवी पक्षी (जो रात को चकवे से बिछड़ती है)',
          en: 'The chakvi bird (separated from its mate at night)',
        },
      },
      {
        word: 'ਪਰਭਾਤਿ / परभाति',
        meaning: {
          pb: 'ਸਵੇਰਸਾਰ, ਪ੍ਰਭਾਤ ਵੇਲੇ',
          hi: 'प्रातःकाल, सवेरे',
          en: 'At dawn / early morning',
        },
      },
      {
        word: 'ਰਾਮ ਸਿਉ / राम सिउ',
        meaning: {
          pb: 'ਪਰਮਾਤਮਾ ਨਾਲੋਂ',
          hi: 'परमात्मा से',
          en: 'From the Supreme Lord',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਚਕਵੀ (ਪੰਛੀ) ਰਾਤ ਨੂੰ (ਆਪਣੇ ਸਾਥੀ ਨਾਲੋਂ) ਵਿਛੜਦੀ ਹੈ ਪਰ ਸਵੇਰਸਾਰ ਆ ਕੇ ਮਿਲ ਜਾਂਦੀ ਹੈ; ਪਰ ਜਿਹੜੇ ਮਨੁੱਖ ਅਗਿਆਨਤਾ ਕਾਰਨ ਪਰਮਾਤਮਾ ਨਾਲੋਂ ਵਿਛੜੇ ਹਨ, ਉਹ ਨਾ ਦਿਨ ਨੂੰ ਮਿਲਦੇ ਹਨ ਅਤੇ ਨਾ ਰਾਤ ਨੂੰ (ਕਦੇ ਵੀ ਪ੍ਰਭੂ ਸਿਮਰਨ ਵਿੱਚ ਨਹੀਂ ਜੁੜਦੇ)।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे चकवी (पक्षी) रात को (अपने साथी से) बिछड़ती है किंतु प्रातःकाल आकर मिल जाती है; किंतु जो मनुष्य अज्ञानतावश परमात्मा से बिछड़े हैं, वे न दिन को मिलते हैं और न रात को (कभी भी प्रभु सिमरन से नहीं जुड़ते)।',
      en: 'Satguru Kabir Saheb proclaims: Just as the chakvi bird separates from its mate at night but reunites at dawn, those souls estranged from God due to ignorance remain separated day and night, never uniting in divine remembrance.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਵਿਛੋੜਾ ਅਸਥਾਈ ਹੈ ਪਰ ਪ੍ਰਭੂ ਤੋਂ ਵਿਛੋੜਾ ਅਗਿਆਨਤਾ ਕਾਰਨ ਲੰबा ਅਤੇ ਘਾਤਕ ਹੁੰਦਾ ਹੈ।',
      hi: 'संसारिक वियोग अस्थायी है किंतु प्रभु से वियोग अज्ञानता के कारण लंबा और घातक होता है।',
      en: 'Worldly separations are temporary, but estrangement from God in ignorance is spiritual death.',
    },
    acharana: {
      pb: 'ਅਗਿਆਨ ਦੀ ਨੀਂਦ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਸਦੀਵੀ ਮਿਲਾਪ ਦੀ ਤਾਂਘ ਰੱਖੋ।',
      hi: 'अज्ञान की नींद त्यागकर प्रभु से सदैव मिलाप की तड़प रखें।',
      en: 'Awakening from illusion, yearn for eternal union with the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਵਿਛੜੀ ਹੋਈ ਆਤਮਾ ਨੂੰ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਮਿਲਾਪ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'अपनी बिछुड़ी हुई आत्मा को प्रभु चरणों में समर्पित कर मिलाप प्राप्त करें।',
      en: 'Surrender your separated soul at the feet of the Lord to attain blissful union.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 126 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-126',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੬: ਰੈਨਾਇਰ ਬਿਛੋਰਿਆ (ਸੰਖ ਦੀ ਪੁਕਾਰ)',
      hi: 'सलोक १२६: रैनाइर बिछोरिआ (शंख की पुकार)',
      en: 'Salok 126: The Conch Shell Separated from the Ocean',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰੈਨਾਇਰ ਬਿਛੋਰਿਆ ਰਹੁ ਰੇ ਸੰਖ ਮਝੂਰਿ ॥',
      'ਦੇਵਲ ਦੇਵਲ ਧਾਹੜੀ ਦੇਸਹਿ ਉਗਵਤ ਸੂਰ ॥੧੨੬॥',
    ],
    moolDevanagari: [
      'कबीर रैनाइर बिछोरिआ रहु रे संख मझूरि ॥',
      'देवल देवल धाहड़ी देसहि उगवत सूर ॥१२६॥',
    ],
    moolRoman: [
      'Kabīr rainair bi-choriā rahu re sankh majhūr.',
      'Deval deval dhāhaṛī desahi ugvat sūr. ||126||',
    ],
    shabdarth: [
      {
        word: 'ਰੈਨਾਇਰ / रैनाइर',
        meaning: {
          pb: 'ਸਮੁੰਦਰ (ਰਤਨਾਕਰ)',
          hi: 'समुद्र (रत्नाकर)',
          en: 'The Ocean',
        },
      },
      {
        word: 'ਸੰਖ ਮਝੂਰਿ / संख मझूरि',
        meaning: {
          pb: 'ਸਮੁੰਦਰ ਦੇ ਅੰਦਰ ਹੀ',
          hi: 'समुद्र के भीतर ही',
          en: 'Deep within the ocean',
        },
      },
      {
        word: 'ਧਾਹੜੀ ਦੇਸਹਿ / धाहड़ी देसहि',
        meaning: {
          pb: 'ਧਾਹਾਂ ਮਾਰ ਕੇ ਰੋਵੇਂਗਾ',
          hi: 'विलाप करेगा, धाड़ें मारकर रोएगा',
          en: 'Will wail and lament bitterly',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਸੰਖ! ਸਮੁੰਦਰ ਤੋਂ ਵਿਛੜ ਕੇ ਤੂੰ ਸਮੁੰਦਰ ਦੇ ਅੰਦਰ ਹੀ ਰਹੁ (ਕਿਉਂ ਬਾਹਰ ਆਉਂਦਾ ਹੈਂ?) ਨਹੀਂ ਤਾਂ ਮੰਦਰ-ਮੰਦਰ ਵਿੱਚ ਸੂਰਜ ਚੜ੍ਹਦਿਆਂ ਹੀ ਲੋਕਾਂ ਦੇ ਹੱਥਾਂ ਵਿੱਚ ਪੈ ਕੇ ਤੂੰ ਧਾਹਾਂ ਮਾਰ ਕੇ ਰੋਵੇਂਗਾ (ਵਿਛੋੜੇ ਦਾ ਦੁੱਖ ਭੋਗੇਂਗਾ)।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे शंख! समुद्र से बिछड़कर तू समुद्र के भीतर ही रह (क्यों बाहर आता है?) अन्यथा मंदिर-मंदिर में सूर्योदय होते ही लोगों के हाथों में पड़कर तू विलाप करेगा और धाड़ें मारकर रोएगा।',
      en: 'Satguru Kabir Saheb proclaims: O conch shell, separated from the ocean, remain deep within the waters! Otherwise, carried away into temples at sunrise, you will be blown and will wail bitterly in separation.',
    },
    chintan: {
      pb: 'ਆਪਣੇ ਮੂਲ (ਪਰਮਾਤਮਾ) ਤੋਂ ਵਿਛੜਿਆ ਹੋਇਆ ਜੀਵ ਸੰਸਾਰ ਵਿੱਚ ਆ ਕੇ ਸਦਾ ਦੁੱਖ ਅਤੇ ਵਿਲਾਪ ਭੋਗਦਾ ਹੈ।',
      hi: 'अपने मूल (परमात्मा) से बिछुड़ा हुआ जीव संसार में आकर सदैव दुःख और विलाप भोगता है।',
      en: 'Separated from its divine Source, the soul suffers endless grief and turmoil in the world.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਮੂਲ ਪ੍ਰਭੂ ਨਾਲੋਂ ਕਦੇ ਨਾ ਵਿਛੜੋ, ਸਦਾ ਉਸ ਦੀ ਯਾਦ ਵਿੱਚ ਲੀਨ ਰਹੋ।',
      hi: 'अपने मूल प्रभु से कभी न बिछड़ें, सदैव उसकी याद में लीन रहें।',
      en: 'Never sever your connection with your divine Origin; abide ever in His grace.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਪਰਮਾਤਮਾ ਦੇ ਸਾਗਰ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਲੀਨ ਕਰੋ।',
      hi: 'अपनी आत्मा को परमात्मा के सागर में पूर्णतः लीन करें।',
      en: 'Merge your soul completely back into the infinite Ocean of Divinity.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 127 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-127',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੭: ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਜਾਗੁ ਰੋਇ ਭੈ ਦੁਖ (ਅਗਿਆਨ ਨੀਂਦ)',
      hi: 'सलोक १२७: सूता किआ करहि जागु रोइ भै दुख (अज्ञान नींद)',
      en: 'Salok 127: Why Sleep in Illusion? Wake Up and Weep in Contemplation of Life\'s Transience',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਜਾਗੁ ਰੋਇ ਭੈ ਦੁਖ ॥',
      'ਜਾ ਕਾ ਬਾਸਾ ਗੋਰ ਮਹਿ ਸੋ ਕਿਉ ਸੋਵੈ ਸੁਖ ॥੧੨੭॥',
    ],
    moolDevanagari: [
      'कबीर सूता किआ करहि जागु रोइ भै दुख ॥',
      'जा का बासा गोर महि सो किउ सोवै सुख ॥१२७॥',
    ],
    moolRoman: [
      'Kabīr sūtā kiā karai jāg roi bhai dukh.',
      'Jā kā bāsā gor mahi so kiū sovai sukh. ||127||',
    ],
    shabdarth: [
      {
        word: 'ਸੂਤਾ ਕਿਆ ਕਰਹਿ / सूता किआ करहि',
        meaning: {
          pb: 'ਅਗਿਆਨ ਦੀ ਨੀਂਦ ਵਿੱਚ ਸੁੱਤਾ ਹੋਇਆ ਕੀ ਕਰ ਰਿਹਾ ਹੈਂ',
          hi: 'अज्ञान की नींद में सोया हुआ क्या कर रहा है',
          en: 'Why do you sleep away time in ignorance?',
        },
      },
      {
        word: 'ਜਾਗੁ ਰੋਇ / जागु रोइ',
        meaning: {
          pb: 'ਸਾਧਕ ਬਣ ਕੇ ਜਾਗ ਅਤੇ ਆਪਣੇ ਕਰਮਾਂ ਉੱਤੇ ਪਸਚਾਤਾਪ ਕਰ',
          hi: 'सचेत होकर जाग और अपने कर्मों पर पश्चाताप कर',
          en: 'Wake up, repent, and weep in holy fear of separation',
        },
      },
      {
        word: 'ਬਾਸਾ ਗੋਰ ਮਹਿ / बासा गोर महि',
        meaning: {
          pb: 'ਜਿਸ ਦਾ ਨਿਵਾਸ ਮਿੱਟੀ (ਕਬਰ/ਸ਼ਮਸ਼ਾਨ) ਵਿੱਚ ਹੋਣਾ ਹੈ',
          hi: 'जिसका निवास अंततः मिट्टी में होना है',
          en: 'Whose ultimate dwelling is the grave / dust',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਮਾਇਆ ਦੇ ਮੋਹ ਵਿੱਚ ਸੁੱਤਾ ਹੋਇਆ ਤੂੰ ਕੀ ਕਰ ਰਿਹਾ ਹੈਂ? ਸੁਚੇਤ ਹੋ ਕੇ ਜਾਗ ਅਤੇ (ਪ੍ਰਭੂ ਤੋਂ ਵਿਛੋੜੇ ਦੇ) ਡਰ ਤੇ ਦੁੱਖ ਕਾਰਨ ਪਸਚਾਤਾਪ ਕਰ। ਜਿਸ ਮਨੁੱਖ ਦਾ ਅੰਤ ਨਿਵਾਸ ਮਿੱਟੀ (ਕਬਰ) ਵਿੱਚ ਹੋਣਾ ਹੈ, ਉਹ ਨਿਸ਼ਚਿੰਤ ਹੋ ਕੇ ਕਿਵੇਂ ਸੌਂ ਸਕਦਾ ਹੈ?',
      hi: 'हे कबीर! माया के मोह में सोया हुआ तू क्या कर रहा है? सचेत होकर जाग और (प्रभु से वियोग के) भय व दुःख के कारण पश्चाताप कर। जिस मनुष्य का अंततः निवास मिट्टी (कब्र) में होना है, वह निश्चिंत होकर कैसे सो सकता है?',
      en: 'O Kabir! Why do you sleep away in worldly illusion? Wake up, repent, and weep in contemplation of spiritual transience. How can one whose ultimate dwelling is the dust sleep in careless slumber?',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਨਾਸ਼ਵਾਨ ਹੈ। ਮਾਇਕ ਨੀਂਦ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੱਗਣਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'जीवन नश्वर है। माईक नींद त्यागकर प्रभु भक्ति में लगना चाहिए।',
      en: 'Life is fleeting. Abandoning careless slumber, awaken to divine devotion.',
    },
    acharana: {
      pb: 'ਗਾਫ਼ਲ ਨੀਂਦ ਛੱਡ ਕੇ ਹਰ ਸਾਹ ਪ੍ਰਭੂ ਦੀ ਯਾਦ ਵਿੱਚ ਬਿਤਾਓ।',
      hi: 'गाफिल नींद छोड़कर प्रत्येक श्वास प्रभु की याद में बिताएं।',
      en: 'Forsaking spiritual lethargy, dedicate every breath to remembering the Lord.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਜਾਗ੍ਰਿਤ ਕਰਕੇ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी आत्मा को जागृत करके प्रभु चरणों में समर्पित करें।',
      en: 'Awaken your soul and surrender completely to the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 128 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-128',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੮: ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਉਠਿ ਕਿ ਨ ਜਪਹਿ (ਮੌਤ ਦੀ ਯਾਦ)',
      hi: 'सलोक १२८: सूता किआ करहि उठि कि न जपहि (मृत्यु स्मरण)',
      en: 'Salok 128: Why Sleep in Ignorance? One Day You Must Lie Down with Limbs Extended in Death',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਉਠਿ ਕਿ ਨ ਜਪਹਿ ਮੁਰਾਰਿ ॥',
      'ਇਕ ਦਿਨ ਸੋਵਨੁ ਹੋਇਗੋ ਲਾਂਬੇ ਗੋਡ ਪਸਾਰਿ ॥੧੨੮॥',
    ],
    moolDevanagari: [
      'कबीर सूता किआ करहि उठि कि न जपहि मुरारि ॥',
      'इक दिन सोवनु होइगो लाम्बे गोड पसारि ॥१२८॥',
    ],
    moolRoman: [
      'Kabīr sūtā kiā karai uṭh ki na japahi murāri.',
      'Ik din sovan hoigo lāmbe goḍ pasāri. ||128||',
    ],
    shabdarth: [
      {
        word: 'ਜਪਹਿ ਮੁਰਾਰਿ / जपहि मुरारि',
        meaning: {
          pb: 'ਪਰਮਾਤਮਾ (ਮੁਰਾਰਿ) ਨੂੰ ਕਿਉਂ ਨਹੀਂ ਜਪਦਾ',
          hi: 'परमात्मा (मुरारि) का स्मरण क्यों नहीं करता',
          en: 'Why do you not chant the Name of the Lord?',
        },
      },
      {
        word: 'ਸੋਵਨੁ ਹੋਇਗੋ / सोवनु होइगो',
        meaning: {
          pb: 'ਸੌਣਾ ਪਵੇਗਾ (ਮੌਤ ਦੀ ਨੀਂਦ)',
          hi: 'सोना पड़ेगा (मृत्यु की नींद)',
          en: 'You will have to sleep (in death)',
        },
      },
      {
        word: 'ਲਾਂਬੇ ਗੋਡ ਪਸਾਰਿ / लाम्बे गोड पसारि',
        meaning: {
          pb: 'ਲੰਮੇ ਪੈ ਕੇ, ਮੌਤ ਦੀ ਚਦਰ ਤਾਣ ਕੇ',
          hi: 'पैर पसार कर (चिता या कब्र में)',
          en: 'With limbs stretched out in death',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਮਾਇਆ ਦੀ ਨੀਂਦ ਵਿੱਚ ਸੁੱਤਾ ਹੋਇਆ ਤੂੰ ਕੀ ਕਰ ਰਿਹਾ ਹੈਂ? ਉੱਠ ਕੇ ਮੁਰਾਰਿ (ਪਰਮਾਤਮਾ) ਨੂੰ ਕਿਉਂ ਨਹੀਂ ਜਪਦਾ? ਇੱਕ ਦਿਨ ਤੈਨੂੰ ਲੰਮੇ ਗੋਡੇ ਪਸਾਰ ਕੇ (ਮੌਤ ਦੀ ਚਦਰ ਤਾਣ ਕੇ) ਸਦਾ ਲਈ ਸੌਂ ਜਾਣਾ ਪਵੇਗਾ।',
      hi: 'हे कबीर! माया की नींद में सोया हुआ तू क्या कर रहा है? उठकर मुरारि (परमात्मा) का स्मरण क्यों नहीं करता? एक दिन तुझे पैर पसार कर (मृत्यु की चादर ओढ़कर) सदा के लिए सोना पड़ेगा।',
      en: 'O Kabir! Why do you sleep in the slumber of illusion? Why not wake up and chant the Lord\'s Name? One day you will have to lie down with your limbs stretched out in death.',
    },
    chintan: {
      pb: 'ਮੌਤ ਅਟੱਲ ਹੈ। ਸਮਾਂ ਵਿਅਰਥ ਗਵਾਉਣ ਦੀ ਬਜਾਏ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'मृत्यु अटल है। समय व्यर्थ गंवाने के बजाय नाम सिमरन करें।',
      en: 'Death is certain. Instead of wasting time, engage in divine remembrance.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਜਾਗਰੂਕ ਅਵਸਥਾ ਵਿੱਚ ਪ੍ਰਭੂ ਭਗਤੀ ਨੂੰ ਪਹਿਲ ਦਿਓ।',
      hi: 'अपनी जागरूक अवस्था में प्रभु भक्ति को प्राथमिकता दें।',
      en: 'Prioritize devotion in your daily life while breath remains.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਅਕਾਲ ਪੁਰਖ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਸਫ਼ਲ ਕਰੋ।',
      hi: 'अपना जीवन अकाल पुरख के चरणों में समर्पित कर सफल करें।',
      en: 'Crown your life with success by surrendering to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 129 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-129',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੨੯: ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਬੈਠਾ ਰਹੁ ਅਰੁ ਜਾਗੁ (ਜਾਗ੍ਰਿਤੀ)',
      hi: 'सलोक १२९: सूता किआ करहि बैठी रहु अरु जागु (जाग्रति)',
      en: 'Salok 129: Reconnect with the Divine Source from Which You Separated',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੂਤਾ ਕਿਆ ਕਰਹਿ ਬੈਠਾ ਰਹੁ ਅਰੁ ਜਾਗੁ ॥',
      'ਜਾ ਕੋ ਸੰਗ ਤੇ ਬੀਛੁਰਾ ਤਾਹੀ ਕੇ ਸੰਗਿ ਲਾਗੁ ॥੧੨੯॥',
    ],
    moolDevanagari: [
      'कबीर सूता किआ करहि बैठी रहु अरु जागु ॥',
      'जा को संग ते बीछुरा ताही के संगि लागु ॥१२९॥',
    ],
    moolRoman: [
      'Kabīr sūtā kiā karai baiṭhā rahu aru jāg.',
      'Jā ko sang te bīchurā tāhī ke sang lāg. ||129||',
    ],
    shabdarth: [
      {
        word: 'ਬੈਠਾ ਰਹੁ ਅਰੁ ਜਾਗੁ / बैठा रहु अरु जागु',
        meaning: {
          pb: 'ਸੁਚੇਤ ਹੋ ਕੇ ਬੈਠ ਅਤੇ ਜਾਗਰੂਕ ਹੋ ਜਾ',
          hi: 'सचेत होकर बैठ और जागरूक हो जा',
          en: 'Sit up alertly and remain awake in awareness',
        },
      },
      {
        word: 'ਸੰਗ ਤੇ ਬੀਛੁਰਾ / संग ते बीछुरा',
        meaning: {
          pb: 'ਜਿਸ ਪਰਮਾਤਮਾ ਨਾਲੋਂ ਤੂੰ ਵਿਛੜਿਆ ਹੈਂ',
          hi: 'जिस परमात्मा से तू बिछड़ा है',
          en: 'From whom you have been separated',
        },
      },
      {
        word: 'ਤਾਹੀ ਕੇ ਸੰਗਿ / ताही के संगि',
        meaning: {
          pb: 'ਉਸੇ ਦੇ ਨਾਲ (ਚਰਨਾਂ ਵਿੱਚ) ਜੁੜ ਜਾ',
          hi: 'उसी के साथ (चरणों में) जुड़ जा',
          en: 'Reunite and merge with Him alone',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਸੁੱਤਾ ਹੋਇਆ ਕੀ ਕਰ ਰਿਹਾ ਹੈਂ? ਸਮਾਂ ਵਿਅਰਥ ਨਾ ਗਵਾ, ਸੁਚੇਤ ਹੋ ਕੇ ਬੈਠ ਅਤੇ ਜਾਗਰੂਕ ਹੋ ਜਾ। ਜਿਸ ਪ੍ਰਭੂ ਨਾਲੋਂ ਤੂੰ (ਅਗਿਆਨਤਾ ਕਰਕੇ) ਵਿਛੜਿਆ ਹੋਇਆ ਹੈਂ, ਮੁੜ ਕੇ ਉਸੇ ਦੇ ਚਰਨਾਂ ਨਾਲ ਜੁੜ ਜਾ।',
      hi: 'हे कबीर! सोया हुआ क्या कर रहा है? समय व्यर्थ न गंवा, सचेत होकर बैठ और जागरूक हो जा। जिस प्रभु से तू (अज्ञानतावश) बिछड़ा हुआ है, पुनः उसी के चरणों से जुड़ जा।',
      en: 'O Kabir! Why do you sleep away your time? Sit up alertly and awaken. Reconnect and merge once more with the Divine Source from which you have been estranged.',
    },
    chintan: {
      pb: 'ਜੀਵ ਦਾ ਅਸਲ ਘਰ ਪ੍ਰਮਾਤਮਾ ਦੀ ਚਰਨ-ਸ਼ਰਨ ਹੈ। ਵਿਛੜੀ ਰੂਹ ਨੂੰ ਮੁੜ ਮਾਲਕ ਨਾਲ ਜੁੜਨਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'जीव का असल घर परमात्मा की चरण-शरण है। बिछुड़ी روح को पुनः मालिक से जुड़ना चाहिए।',
      en: 'The soul\'s true home is in God; the separated spirit must seek reunion with its Master.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਕ ਮੋਹ ਤਿਆਗ ਕੇ ਆਪਣਾ ਮਨ ਸਦਾ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜੀ ਰੱਖੋ।',
      hi: 'सांसारिक मोह त्यागकर अपना मन सदा प्रभु चरणों में जोड़े रखें।',
      en: 'Forsaking worldly delusion, keep your heart anchored perpetually in the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਉਸ ਅਨੰਤ ਜੋਤ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी आत्मा को उस अनंत जोति में पूर्णतः समर्पित करें।',
      en: 'Surrender your soul completely to the infinite Light of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 130 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-130',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੦: ਸੰਤ ਕੀ ਗੈਲ ਨ ਛੋਡੀਐ (ਸੰਤ ਮਾਰਗ)',
      hi: 'सलोक १३०: संत की गैल न छोडीऐ (संत मार्ग)',
      en: 'Salok 130: Never Abandon the Path of the Saints; Their Sight Purifies the Soul',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਤ ਕੀ ਗੈਲ ਨ ਛੋਡੀਐ ਮਾਰਗਿ ਲਾਗਾ ਜਾਉ ॥',
      'ਪੇਖਤ ਹੀ ਪੰਨੀਤ ਹੋਇ ਭੇਟਤ ਜਪੀਐ ਨਾਉ ॥੧੩੦॥',
    ],
    moolDevanagari: [
      'कबीर संत की गैल न छोडीऐ मारगि लागा जाउ ॥',
      'पेखत ही पनीत होइ भेटत जपीऐ नाउ ॥१३०॥',
    ],
    moolRoman: [
      'Kabīr sant kī gail na choḍīai mārag lāgā jāu.',
      'Pekhat hī paneet hoi bheṭat japīai nāu. ||130||',
    ],
    shabdarth: [
      {
        word: 'ਸੰਤ ਕੀ ਗੈਲ / संत की गैल',
        meaning: {
          pb: 'ਸੰਤਾਂ ਦਾ ਰਸਤਾ ਯਾ ਪਿੱਛਾ',
          hi: 'संतों का मार्ग या पद-चिह्न',
          en: 'The path and footsteps of the saints',
        },
      },
      {
        word: 'ਪੇਖਤ ਹੀ / पेखत ही',
        meaning: {
          pb: 'ਦੇਖਦਿਆਂ ਸਾਰ ਹੀ',
          hi: 'देखते ही, दर्शन मात्र से',
          en: 'Merely by beholding them',
        },
      },
      {
        word: 'ਪੰਨੀਤ ਹੋਇ / पनीत होइ',
        meaning: {
          pb: 'ਪਵਿੱਤਰ ਹੋ ਜਾਂਦਾ ਹੈ',
          hi: 'पवित्र हो जाता है',
          en: 'The mind becomes purified',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੰਤਾਂ (ਪੂਰਨ ਗੁਰਮੁਖਾਂ) ਦਾ ਰਸਤਾ ਨਹੀਂ ਛੱਡਣਾ ਚਾਹੀਦਾ, ਸਦਾ ਉਨ੍ਹਾਂ ਦੇ ਮਾਰਗ ਉੱਤੇ ਚੱਲਣਾ ਚਾਹੀਦਾ ਹੈ। ਉਨ੍ਹਾਂ ਦੇ ਦਰਸ਼ਨ ਕਰਦਿਆਂ ਸਾਰ ਹੀ ਮਨ ਪਵਿੱਤਰ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਮਿਲ ਕੇ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਜਪੀਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संतों (पूर्ण गुरमुखों) का मार्ग नहीं छोड़ना चाहिए, सदैव उनके पद-चिह्नों पर चलना चाहिए। उनके दर्शन मात्र से ही मन पवित्र हो जाता है और मिलकर भगवान का नाम जपते हैं।',
      en: 'Satguru Kabir Saheb proclaims: Never abandon the path of the holy saints; ever walk in their footsteps. Merely by beholding them, the mind is purified, and together we chant the Divine Name.',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਅਤੇ ਉਨ੍ਹਾਂ ਦਾ ਦਰਸ਼ਨ ਆਤਮਾ ਨੂੰ ਮੈਲ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਪਵਿੱਤਰ ਬਣਾਉਂਦਾ ਹੈ।',
      hi: 'संतों की संगति और उनके दर्शन आत्मा को मैल से मुक्त करके पवित्र बनाते हैं।',
      en: 'The company and darshan of holy saints cleanse the soul of all impurities.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਅਤੇ ਸੰਤ ਜਨਾਂ ਦੇ ਦਰਸ਼ਨ ਅਤੇ ਸਤਿਸੰਗ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਦਾ ਅੰਗ ਬਣਾਓ।',
      hi: 'सतगुरु और संत जनों के दर्शन और सत्संग को अपने जीवन का अंग बनाएं।',
      en: 'Make the fellowship of holy beings an integral part of your daily life.',
    },
    samarpan: {
      pb: 'ਸੰਤਾਂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੀਵਨ ਅਰਪਣ ਕਰਕੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'संतों के चरणों में जीवन अर्पण करके प्रभु प्रेम प्राप्त करें।',
      en: 'Surrender to the guidance of saints to attain supreme divine love.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 131 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-131',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੧: ਸਾਕਤ ਸੰਗੁ ਨ ਕੀਜੀਐ (ਕੁਸੰਗਤ ਤਿਆਗ)',
      hi: 'सलोक १३१: साकत संगु न कीजीऐ (कुसंगत त्याग)',
      en: 'Salok 131: Shun the Company of the Godless; Sin Leaves Its Stain Like Soot',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਕਤ ਸੰਗੁ ਨ ਕੀਜੀਐ ਦੂਰਹਿ ਜਾਈਐ ਭਾਗਿ ॥',
      'ਬਾਸਨੁ ਕਾਰੋ ਪਰਸੀਐ ਤਉ ਕਛੁ ਲਾਗੈ ਦਾਗੁ ॥੧੩੧॥',
    ],
    moolDevanagari: [
      'कबीर साकत संगु न कीजीऐ दूरहि जईऐ भागि ॥',
      'बासनु कारो परसीऐ तउ कछु लागै दागु ॥१३१॥',
    ],
    moolRoman: [
      'Kabīr sākat sang na kījīai dūrah jāīai bhāg.',
      'Bāsan kāro parasīai tau kachu lāgai dāg. ||131||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਕਤ ਸੰਗੁ / साकत संगु',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਮਨੁੱਖ ਦੀ ਸੰਗਤ',
          hi: 'परमात्मा से विमुख विकारी की संगति',
          en: 'Company of the godless/vicious person',
        },
      },
      {
        word: 'ਦੂਰਹਿ ਭਾਗਿ / दूरहि भागि',
        meaning: {
          pb: 'ਦੂਰੋਂ ਹੀ ਭੱਜ ਜਾਣਾ (ਕੁਸੰਗ ਤੋਂ ਬਚਣਾ)',
          hi: 'दूर से ही भाग जाना (कुसंग से बचना)',
          en: 'Flee far away from bad company',
        },
      },
      {
        word: 'ਬਾਸਨੁ ਕਾਰੋ / बासनु कारो',
        meaning: {
          pb: 'ਕਾਲਾ ਭਾਂਡਾ (ਕਾਲ਼ਖ ਵਾਲਾ ਬਰਤਨ)',
          hi: 'काला बर्तन (कालिख लगा हुआ पात्र)',
          en: 'A soot-covered blackened pot',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਭੂ ਤੋਂ ਵਿਮੁਖ ਮਨੁੱਖ (ਸਾਕਤ) ਦੀ ਕਦਾਚਿਤ ਸੰਗਤ ਨਾ ਕਰੋ, ਸਗੋਂ ਉਸ ਤੋਂ ਦੂਰ ਹੀ ਭੱਜ ਜਾਓ। ਜਿਵੇਂ ਕਾਲ਼ਖ ਨਾਲ ਭਰੇ ਭਾਂਡੇ ਨੂੰ ਛੂਹਣ ਨਾਲ ਕੁਝ ਨਾ ਕੁਝ ਕਾਲਾ ਦਾਗ ਲੱਗ ਹੀ ਜਾਂਦਾ ਹੈ, ਤਿਵੇਂ ਕੁਸੰਗ ਦਾ ਪ੍ਰਭਾਵ ਪੈ ਹੀ ਜਾਂਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-परमात्मा से विमुख मनुष्य (साकत) की कदापि संगति न करें, अपितु उससे दूर ही भाग जाएं। जैसे कालिख से भरे बर्तन को छूने से थोड़ा-बहुत काला दाग लग ही जाता है, वैसे ही कुसंग का प्रभाव पड़ ही जाता है।',
      en: 'Satguru Kabir Saheb proclaims: Never keep company with the godless materialist; flee far away from such bad company. Just as touching a soot-covered pot leaves a black stain on you, vicious company inevitably leaves its spiritual stain.',
    },
    chintan: {
      pb: 'ਕੁਸੰਗਤ ਦਾ ਪ੍ਰਭਾਵ ਅਵੱਸ਼ ਪੈਂਦਾ ਹੈ। ਪਵਿੱਤਰ ਰਹਿਣ ਲਈ ਕੁਸੰਗ ਤੋਂ ਸਦਾ ਬਚੋ।',
      hi: 'कुसंगति का प्रभाव अवश्य पड़ता है। पवित्र रहने के लिए कुसंग से सदैव बचें।',
      en: 'Bad company leaves indelible moral stains. To stay pure, shun vicious association.',
    },
    acharana: {
      pb: 'ਵਿਕਾਰੀਆਂ ਅਤੇ ਨਾਸਤਿਕਾਂ ਦੀ ਸੰਗਤ ਤਿਆਗ ਕੇ ਸਤਸੰਗ ਵਿੱਚ ਜੀਵਨ ਬਿਤਾਓ।',
      hi: 'विकारियों और नास्तिकों की संगति त्यागकर सत्संग में जीवन बिताएं।',
      en: 'Abjuring negative influences, spend your life in uplifting holy company.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਹਰ ਮਾੜੇ ਪ੍ਰਭਾਵ ਤੋਂ ਬਚਾ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने मन को हर बुरे प्रभाव से बचाकर प्रभु चरणों में समर्पित करें।',
      en: 'Protect your heart from negative influences and dedicate it to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 132 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-132',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੨: ਰਾਮੁ ਨ ਚੇਤਿਓ ਜਰਾ ਪਹੂੰਚਿਓ (ਬੁਢੇਪਾ ਤੇ ਮੌਤ)',
      hi: 'सलोक १३२: रामु न चेतिओ जरा पहूंचिओ (बुढ़ापा और मृत्यु)',
      en: 'Salok 132: Old Age Arrives Without Remembering God; Too Late When Fire Consumes the House',
    },
    moolGurmukhi: [
      'ਕਬੀਰਾ ਰਾਮੁ ਨ ਚੇਤਿਓ ਜਰਾ ਪਹੂੰਚਿਓ ਆਇ ॥',
      'ਲਾਗੀ ਮੰਦਿਰ ਦੁਆਰ ਤੇ ਅਬ ਕਿਆ ਕਾਢਿਆ ਜਾਇ ॥੧੩੨॥',
    ],
    moolDevanagari: [
      'कबीरा रामु न चेतिओ जरा पहूंचिओ आइ ॥',
      'लागी मंदिर द्वार ते अब किआ काढिआ जाइ ॥१३२॥',
    ],
    moolRoman: [
      'Kabīr Rām na chetiō jarā pahūnchiō āi.',
      'Lāgī mandir dvār te ab kiā kāḍhiā jāi. ||132||',
    ],
    shabdarth: [
      {
        word: 'ਜਰਾ ਪਹੂੰਚਿਓ / जरा पहूंचिओ',
        meaning: {
          pb: 'ਬੁਢੇਪਾ ਆਣ ਕੇ ਪਹੁੰਚ ਗਿਆ ਹੈ',
          hi: 'बुढ़ापा आ पहुंचा है',
          en: 'Old age has arrived upon you',
        },
      },
      {
        word: 'ਮੰਦਿਰ ਦੁਆਰ / मन्दिर द्वार',
        meaning: {
          pb: 'ਸਰੀਰ ਰੂਪੀ ਘਰ ਦਾ ਦਰਵਾਜ਼ਾ (ਸਿਰ, ਮੁੱਖ)',
          hi: 'शरीर रूपी घर का द्वार',
          en: 'The doorway of the body-temple',
        },
      },
      {
        word: 'ਕਿਆ ਕਾਢਿਆ ਜਾਇ / किआ काढिआ जाइ',
        meaning: {
          pb: 'ਹੁਣ ਕੀ ਕੱਢਿਆ ਜਾ ਸਕਦਾ ਹੈ (ਸਭ ਕੁਝ ਸੜ ਗਿਆ)',
          hi: 'अब क्या निकाला जा सकता है (सब जल चुका)',
          en: 'What can be salvaged now?',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਭਾਈ! ਤूं ਜਵਾਨੀ ਵੇਲੇ ਰਾਮ ਨੂੰ ਚੇਤਿਆ ਨਹੀਂ, ਤੇ ਬੁਢੇਪਾ ਆਣ ਕੇ ਪਹੁੰਚ ਗਿਆ ਹੈ। ਸਰੀਰ ਰੂਪੀ ਮੰਦਰ ਦੇ ਬੂਹੇ ਨੂੰ (ਬੁਢੇਪੇ ਦੀ) ਅੱਗ ਲੱਗ ਚੁੱਕੀ ਹੈ; ਹੁਣ ਘਰ ਵਿੱਚੋਂ ਕੀ ਕੱਢਿਆ ਜਾ ਸਕਦਾ ਹੈ? (ਭਾਵ ਬੁਢੇਪੇ ਵਿੱਚ ਸਿਮਰਨ ਕਰਨਾ ਔਖਾ ਹੋ ਜਾਂਦਾ ਹੈ)।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे भाई! तूने जवानी के समय भगवान का स्मरण नहीं किया, और बुढ़ापा आ पहुंचा है। शरीर रूपी घर के द्वार को (बुढ़ापे की) आग लग चुकी है; अब घर में से क्या निकाला जा सकता है? (अर्थात बुढ़ापे में भजन-सिमरन कठिन हो जाता है)।',
      en: 'Satguru Kabir Saheb proclaims: O mortal, you did not remember God in youth, and now old age has arrived. Fire has broken out at the doorway of the body-temple (death is imminent); what can be salvaged from the burning house now?',
    },
    chintan: {
      pb: 'ਭਗਤੀ ਲਈ ਬੁਢੇਪੇ ਦਾ ਇੰਤਜ਼ਾਰ ਨਾ ਕਰੋ। ਜਵਾਨੀ ਅਤੇ ਜੀਵਨ ਦੇ ਹਰ ਸਾਹ ਵਿੱਚ ਪ੍ਰਭੂ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'भक्ति के लिए बुढ़ापे का इंतजार न करें। जवानी और जीवन के हर श्वास में प्रभु सिमरन करें।',
      en: 'Do not wait for old age to seek God. Worship Him in the prime of youth and every breath.',
    },
    acharana: {
      pb: 'ਸਮਾਂ ਰਹਿੰਦਿਆਂ ਪ੍ਰਭੂ ਦੇ ਨਾਮ ਦੀ ਕਮਾਈ ਕਰ ਲਓ ਤਾਂ ਜੋ ਅੰਤ ਸਮੇਂ ਪਛਤਾਉਣਾ ਨਾ ਪਵੇ।',
      hi: 'समय रहते प्रभु के नाम की कमाई कर लें ताकि अंत समय में पछताना न पड़े।',
      en: 'While time remains, amass the wealth of the Divine Name to avoid final regret.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਅੱਜ ਹੀ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपना जीवन आज ही प्रभु चरणों में समर्पित कर दें।',
      en: 'Surrender your life entirely at the lotus feet of the Lord today.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 133 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-133',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੩: ਕਾਰਨੁ ਸੋ ਭਇਓ ਜੋ ਕੀਨੋ ਕਰਤਾਰਿ (ਸਿਰਜਨਹਾਰ)',
      hi: 'सलोक १३३: कारनु सो भइओ जो कीनो करतारि (सृजनहार)',
      en: 'Salok 133: Whatever Happens Is Caused by the Creator Alone',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਰਨੁ ਸੋ ਭਇਓ ਜੋ ਕੀਨੋ ਕਰਤਾਰਿ ॥',
      'ਤਿਸੁ ਬਿਨੁ ਦੂਸਰੁ ਕੋ ਨਹੀ ਏਕੈ ਸਿਰਜਨਹਾਰੁ ॥੧੩੩॥',
    ],
    moolDevanagari: [
      'कबीर कारनु सो भइओ जो कीनो करतारि ॥',
      'तिसु बिनु दूसरु को नही एकै सिरजनहारु ॥१३३॥',
    ],
    moolRoman: [
      'Kabīr kāran so bhaīō jo kīnō kartār.',
      'Tis bin dūsar ko nahī ekai sirjanhār. ||133||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਰਨੁ / कारनु',
        meaning: {
          pb: 'ਸਬੱਬ, ਕਾਰਣ, ਮੂਲ ਹੇਤੂ',
          hi: 'कारण, मूल हेतु, निमित्त',
          en: 'Cause, reason, origin',
        },
      },
      {
        word: 'ਕਰਤਾਰਿ / करतारि',
        meaning: {
          pb: 'ਸਿਰਜਣਹਾਰ ਪ੍ਰਭੂ ਨੇ',
          hi: 'सृजनहार प्रभु ने',
          en: 'By the Creator Lord',
        },
      },
      {
        word: 'ਦੂਸਰੁ ਕੋ ਨਹੀ / दूसरु को नही',
        meaning: {
          pb: 'ਕੋਈ ਦੂਜਾ ਕਰਨ ਵਾਲਾ ਨਹੀਂ ਹੈ',
          hi: 'कोई दूसरा करने वाला नहीं है',
          en: 'There is no second cause or power',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉਹੀ ਕਾਰਨ ਹੁੰਦਾ ਹੈ, ਜਿਹੜਾ ਪ੍ਰਮਾਤਮਾ ਆਪ ਕਰੇ। ਉਸ ਪ੍ਰਮਾਤਮਾ ਤੋਂ ਬਿਨਾਂ ਹੋਰ ਦੂਸਰਾ ਕੋਈ ਨਹੀਂ, ਉਹੀ ਇਕ ਸਿਰਜਨਹਾਰ ਕਾਰਨ (ਸਬੱਬ) ਬਨਾਉਣ ਵਾਲਾ ਹੈ॥ ੧੩੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-वही कारण घटित होता है, जो करतार स्वयं करता है। उस परमात्मा के बिना कोई दूसरा नहीं है, वही एकमात्र सृजनहार सर्व-कारण रचयिता है॥ १३३॥',
      en: 'Satguru Kabir Saheb proclaims: Whatever happens is caused by the Creator alone. There is no other besides Him; the One Creator alone is the ultimate cause of all causes.',
    },
    chintan: {
      pb: 'ਕਰਤਾ ਪੁਰਖ ਹੀ ਸਭ ਘਟਾਂ ਦਾ ਸੁਆਮੀ ਹੈ। ਹਰ ਘਟਨਾ ਵਿੱਚ ਪ੍ਰਭੂ ਦੀ ਰਜ਼ਾ ਪਛਾਣੋ।',
      hi: 'कर्ता पुरुष ही सब जगत् का स्वामी है। हर घटना में प्रभु की रज़ा पहचानें।',
      en: 'The Creator alone commands all occurrences. Recognize His Divine Will in every moment.',
    },
    acharana: {
      pb: 'ਕਰਤਾ ਤੇ ਭਰੋਸਾ ਰੱਖੋ ਅਤੇ ਚਿੰਤਾ ਛੱਡ ਕੇ ਭਾਣੇ ਵਿੱਚ ਰਾਜ਼ੀ ਰਹੋ।',
      hi: 'करतार पर भरोसा रखें और चिंता छोड़कर भाणे में प्रसन्न रहें।',
      en: 'Place complete trust in the Creator and remain peacefully surrendered to His Will.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਅਹੰਕਾਰ ਮਿਟਾ ਕੇ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਦਾ ਸੋਮਾ ਵਾਹਿਗੁਰੂ ਮੰਨੋ।',
      hi: 'अपना अहंकार मिटाकर समस्त शक्तियों का स्रोत परमात्मा को मानें।',
      en: 'Erase pride and attribute all power and causality to the Divine Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 134 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-134',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੪: ਫਲ ਲਾਗੇ ਫਲਨਿ ਪਾਕਨਿ ਲਾਗੇ ਆਂਬ (ਬੇਦਾਗ ਜੀਵਨ)',
      hi: 'सलोक १३४: फल लागे फलनि पाकनि लागे आंब (बेदाग जीवन)',
      en: 'Salok 134: Only Untainted Fruits Reach the Master',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਫਲ ਲਾਗੇ ਫਲਨਿ ਪਾਕਨਿ ਲਾਗੇ ਆਂਬ ॥',
      'ਜਾਇ ਪਹੂਚਹਿ ਖਸਮ ਕਉ ਜਉ ਬੀਚਿ ਨ ਖਾਹੀ ਕਾਂਬ ॥੧੩੪॥',
    ],
    moolDevanagari: [
      'कबीर फल लागे फलनि पाकनि लागे आंब ॥',
      'जाइ पहूचहि खसम कउ जउ बीचि न खाही कांब ॥१३४॥',
    ],
    moolRoman: [
      'Kabīr phal lāge phalan pākan lāge āmb.',
      'Jāi pahūchah khasam kau jau bīch na khāhī kāmb. ||134||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਕਨਿ ਲਾਗੇ ਆਂਬ / पाकनि लागे आंब',
        meaning: {
          pb: 'ਅੰਬ ਦੇ ਫਲ ਪੱਕਣ ਲੱਗ ਪੈਂਦੇ ਹਨ',
          hi: 'आम के फल पकने लगते हैं',
          en: 'Mangoes begin to ripen on the tree',
        },
      },
      {
        word: 'ਖਸਮ ਕਉ / खसम कउ',
        meaning: {
          pb: 'ਮਾਲਕ ਪ੍ਰਭੂ ਤੱਕ',
          hi: 'मालिक प्रभु तक',
          en: 'To the Master / Owner',
        },
      },
      {
        word: 'ਕਾਂਬ / कांब',
        meaning: {
          pb: 'ਦਾਗ, ਖੋਟ, ਕੀੜਾ ਜਾਂ ਦਾਗ਼ੀ ਹੋਣਾ',
          hi: 'दाग, कीड़ा, विकार या त्रुटि',
          en: 'Spot, stain, flaw, rot, or infestation',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅੰਬ ਦੇ ਬ੍ਰਿਛ ਨੂੰ ਫੁੱਲ ਫਲ ਲੱਗਣ ਲੱਗਦੇ ਹਨ ਅਤੇ ਫਿਰ ਉਹ ਪੱਕਣ ਲੱਗ ਪੈਂਦੇ ਹਨ। ਪੱਕ ਕੇ ਉਹੀ ਮਾਲਕ ਨੂੰ ਪਹੁੰਚਦੇ ਹਨ, ਜਿਨ੍ਹਾਂ ਨੂੰ ਇਸ ਸਮੇਂ ਵਿਚ ਕੋਈ ਦਾਗ ਨਹੀਂ ਲੱਗਦਾ। ਜੈਸਾ ਕਿ ਤੋਤੇ ਅਤੇ ਗਾਲੜਾਂ ਆਦਿ ਦੇ ਟੁਕਣ ਨਾਲ ਅਤੇ ਹਨ੍ਹੇਰੀ ਆਦਿ ਨਾਲ ਹੇਠਾਂ ਡਿੱਗ ਕੇ ਅੰਬ ਦਾਗੀ ਹੋ ਜਾਂਦੇ ਹਨ, ਇਨ੍ਹਾਂ ਦਾਗੀ ਅੰਬਾਂ ਨੂੰ ਬਾਗ ਦਾ ਮਾਲੀ ਛਾਂਟ ਕੇ ਉਥੇ ਹੀ ਛੱਡ ਜਾਂਦਾ ਹੈ ਤੇ ਸਾਫ ਸੁਥਰਿਆਂ ਨੂੰ ਮਾਲਕ ਪਾਸ ਪਹੁੰਚਾ ਦੇਂਦਾ ਹੈ। ਇਸ ਤਰ੍ਹਾਂ ਹੀ ਜਦ ਮਨੁੱਖ ਦੇ ਮੰਦੇ ਕਰਮ ਉਸ ਨੂੰ ਦਾਗੀ ਕਰ ਦੇਂਦੇ ਹਨ, ਤਾਂ ਉਹ ਪ੍ਰਮਾਤਮਾ ਦੀ ਦਰਗਾਹ ਵਿਚ ਜਾਣ ਦੀ ਥਾਂ ਭਟਕਦਾ ਰਹਿੰਦਾ ਹੈ॥ ੧੩੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-आम के वृक्ष पर फल लगते हैं और पकने लगते हैं। मालिक तक वही पहुंचते हैं जो बीच में किसी विकार या दाग के शिकार नहीं होते। जैसे दागदार आमों को माली छोड़ देता है और साफ़ फलों को मालिक को सौंपता है, वैसे ही कुकर्मों से दागी जीव परमात्मा की दरगाह में स्थान नहीं पाते।',
      en: 'Satguru Kabir Saheb proclaims: Mango trees bear fruit, which ripen in due season. Only those fruits reach the Master that remain untainted along the way. Likewise, souls untainted by sin reach the Divine Lord, while stained souls fall away.',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਰੂਪੀ ਫਲ ਨੂੰ ਵਿਕਾਰਾਂ ਦੇ ਦਾਗ਼ਾਂ ਤੋਂ ਬਚਾ ਕੇ ਰੱਖਣਾ ਹੀ ਅਸਲ ਸਾਧਨਾ ਹੈ।',
      hi: 'जीवन रूपी फल को विकारों के दागों से बचाकर रखना ही सच्ची साधना है।',
      en: 'Preserving the fruit of life untainted by vices is the true essence of spiritual practice.',
    },
    acharana: {
      pb: 'ਕਾਮ, ਕ੍ਰੋਧ ਅਤੇ ਲੋਭ ਰੂਪੀ ਦਾਗ਼ਾਂ ਤੋਂ ਬਚੋ ਤਾਂ ਜੋ ਪ੍ਰਭੂ ਦਰਗਾਹ ਵਿੱਚ ਪ੍ਰਵਾਨ ਹੋ ਸਕੋ।',
      hi: 'काम, क्रोध और लोभ रूपी दागों से बचें ताकि प्रभु दरबार में स्वीकार हो सकें।',
      en: 'Guard yourself against the stains of lust, anger, and greed to be accepted at the Lord’s door.',
    },
    samarpan: {
      pb: 'ਨਿਰਮਲ ਆਚਰਣ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਆਪਣੇ ਆਪ ਨੂੰ ਨਿਰੰਜਨ ਪ੍ਰਭੂ ਅੱਗੇ ਅਰਪਣ ਕਰੋ।',
      hi: 'निर्मल आचरण और नाम स्मरण से स्वयं को निरंजन प्रभु के चरणों में समर्पित करें।',
      en: 'Offer yourself to the Immaculate Lord through pure conduct and holy devotion.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 135 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-135',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੫: ਠਾਕੁਰੁ ਪੂਜਹਿ ਮੋਲਿ ਲੇ (ਪਾਖੰਡ ਖੰਡਨ)',
      hi: 'सलोक १३५: ठाकुरु पूजहि मोलि ले (पाखंड खंडन)',
      en: 'Salok 135: Buying Idols and Stubborn Rituals lead to Confusion',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਠਾਕੁਰੁ ਪੂਜਹਿ ਮੋਲਿ ਲੇ ਮਨਹਠਿ ਤੀਰਥ ਜਾਹਿ ॥',
      'ਦੇਖਾ ਦੇਖੀ ਸ੍ਵਾਂਗੁ ਧਰਿ ਭੂਲੇ ਭਟਕਾ ਖਾਹਿ ॥੧੩੫॥',
    ],
    moolDevanagari: [
      'कबीर ठाकुरु पूजहि मोलि ले मनहठि तीरथ जाहि ॥',
      'देखा देखी स्वांगु धरि भूले भटका खाहि ॥१३५॥',
    ],
    moolRoman: [
      'Kabīr ṭhākur pūjah mol le manhaṭh tīrath jāhi.',
      'Dekhā dekhī svāng dhar bhūle bhaṭkā khāhi. ||135||',
    ],
    shabdarth: [
      {
        word: 'ਮੋਲਿ ਲੇ / मोलि ले',
        meaning: {
          pb: 'ਮੁੱਲ ਲੈ ਕੇ, ਪੈਸੇ ਦੇ ਕੇ ਖਰੀਦ ਕੇ',
          hi: 'मूल्य देकर खरीदकर',
          en: 'Purchased for money in the market',
        },
      },
      {
        word: 'ਮਨਹਠਿ / मनहठि',
        meaning: {
          pb: 'ਮਨ ਦੇ ਹੱਠ ਨਾਲ, ਅਹੰਕਾਰ ਨਾਲ',
          hi: 'मन के हठ व अहंकार से',
          en: 'Through stubborn pride of mind',
        },
      },
      {
        word: 'ਸ੍ਵਾਂਗੁ ਧਰਿ / स्वांगु धरि',
        meaning: {
          pb: 'ਦਿਖਾਵਾ ਤੇ ਭੇਖ ਧਾਰ ਕੇ',
          hi: 'दिखावा व भेष धारण करके',
          en: 'Donning outer guises and pretenses',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਮੁੱਲ ਲੈ ਕੇ (ਪੱਥਰ ਦੀ ਮੂਰਤੀ) ਠਾਕੁਰ ਨੂੰ ਪੂਜਦੇ ਹਨ ਅਤੇ ਮਨ ਦੇ ਹੱਠ ਕਰਕੇ ਤੀਰਥ ਕਰਨ ਜਾਂਦੇ ਹਨ। ਇਕ ਦੂਜੇ ਨੂੰ ਵੇਖ ਕੇ ਸਾਂਗ ਬਣਾ ਕੇ ਇਹ ਭੁਲੇ ਹੋਏ ਲੋਕ ਭਟਕਦੇ ਹਨ॥ ੧੩੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-लोग बाजार से खरीदकर पत्थर की मूर्ति पूजते हैं और हठपूर्वक तीर्थयात्रा करते हैं। दूसरों की देखा-देखी ढोंग रचकर ये भटके हुए लोग जीवन व्यर्थ गंवाते हैं॥ १३५॥',
      en: 'Satguru Kabir Saheb proclaims: People buy stone idols to worship and go on pilgrimages out of stubborn pride. Blindly imitating others in empty rituals, these misguided souls wander in confusion.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਅਤੇ ਦੇਖਾ-ਦੇਖੀ ਧਰਮ ਕਮਾਉਣ ਨਾਲ ਆਤਮਿਕ ਸ਼ਾਂਤੀ ਨਹੀਂ ਮਿਲਦੀ।',
      hi: 'बाहरी दिखावे और देखा-देखी धर्म कमाने से आत्मिक शांति नहीं मिलती।',
      en: 'Spiritual peace is never attained through outer guises and blind imitation.',
    },
    acharana: {
      pb: 'ਪਾਖੰਡ ਅਤੇ ਮਨਹੱਠ ਛੱਡ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਘਟ ਘਟ ਵਾਸੀ ਰਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'पाखंड और मनहठ छोड़कर हृदय में घट-घट वासी राम का स्मरण करें।',
      en: 'Forsake hypocritical shows and stubborness; worship the Lord living in every heart.',
    },
    samarpan: {
      pb: 'ਕਲਪਿਤ ਪੂਜਾ ਛੱਡ ਕੇ ਨਿਰਾਕਾਰ ਸੱਚੇ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'कल्पित पूजा छोड़कर निराकार सच्चे प्रभु की भक्ति में लीन हों।',
      en: 'Abandon imaginative idols and immerse your mind in the devotion of the Formless Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 136 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-136',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੬: ਪਾਹਨੁ ਪਰਮੇਸੁਰੁ ਕੀਆ (ਅਗਿਆਨਤਾ ਦਾ ਡੋਬਾ)',
      hi: 'सलोक १३६: पाहनु परमेसुरु कीआ (अज्ञानता का डूबना)',
      en: 'Salok 136: Worshiping Stone Idols Drowns Soul in Ignorance',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਹਨੁ ਪਰਮੇਸੁਰੁ ਕੀਆ ਪੂਜੈ ਸਭੁ ਸੰਸਾਰੁ ॥',
      'ਇਸ ਭਰਵਾਸੇ ਜੋ ਰਹੇ ਬੂਡੈ ਕਾਲੀ ਧਾਰ ॥੧੩੬॥',
    ],
    moolDevanagari: [
      'कबीर पाहनु परमेसुरु कीआ पूजै सभु संसारु ॥',
      'इस भरवासे जो रहे बूडै काली धार ॥१३६॥',
    ],
    moolRoman: [
      'Kabīr pāhan parmesur kīā pūjai sabh sansār.',
      'Is bharvāse jo rahe būḍai kālī dhār. ||136||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਹਨੁ / पाहनु',
        meaning: {
          pb: 'ਪੱਥਰ',
          hi: 'पत्थर',
          en: 'Stone',
        },
      },
      {
        word: 'ਕਾਲੀ ਧਾਰ / काली धार',
        meaning: {
          pb: 'ਅਗਿਆਨਤਾ ਤੇ ਸੰਸਾਰ ਸਮੁੰਦਰ ਦੀ ਡੂੰਘੀ ਕਾਲੀ ਧਾਰਾ',
          hi: 'अज्ञान व संसार-सागर की गहरी काली धारा',
          en: 'The deep black current of ignorance and illusion',
        },
      },
      {
        word: 'ਬੂਡੈ / बूडै',
        meaning: {
          pb: 'ਡੁੱਬ ਜਾਂਦੇ ਹਨ',
          hi: 'डूब जाते हैं',
          en: 'Drowns / perishes',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪੱਥਰ ਨੂੰ ਪ੍ਰਮੇਸ਼ਰ ਮੰਨਕੇ ਸਾਰਾ ਸੰਸਾਰ ਉਸ ਦੀ ਪੂਜਾ ਕਰਦਾ ਹੈ ਪਰ ਜਿਹੜਾ ਇਸ ਭਰਵਾਸੇ ਵਿਚ ਰਹੇਗਾ ਕਿ ਪੱਥਰ ਪੂਜਣ ਨਾਲ ਉਸ ਦੀ ਗਤੀ ਹੋ ਜਾਵੇਗੀ ਉਸ ਨੂੰ ਡੂੰਘੇ ਪਾਣੀ ਵਿਚ ਡੁਬਿਆ ਸਮਝੋ ॥ ੧੩੬ ॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संसार पत्थर को परमेश्वर मानकर पूजता है। जो इस भ्रम में रहता है कि पत्थर पूजने से कल्याण होगा, वह अज्ञान के गहरे काले जल में डूब जाता है॥ १३६॥',
      en: 'Satguru Kabir Saheb proclaims: The whole world worships stone as God. Those who rely on this false hope drown in the deep black current of ignorance and spiritual loss.',
    },
    chintan: {
      pb: 'ਨਿਰਜੀਵ ਪੱਥਰ ਵਿੱਚ ਚੇਤਨ ਪ੍ਰਮਾਤਮਾ ਨਹੀਂ ਵੱਸਦਾ; ਜੀਵਿਤ ਸ਼ਬਦ ਵਿੱਚ ਹਰੀ ਨੂੰ ਖੋਜੋ।',
      hi: 'निर्जीव पत्थर में चेतन परमात्मा नहीं बसता; जीवित शब्द में हरि को खोजें।',
      en: 'Lifeless stone cannot contain the Living God; seek Him within the divine Word.',
    },
    acharana: {
      pb: 'ਜੜ੍ਹ ਪੂਜਾ ਤਿਆਗ ਕੇ ਚੇਤਨ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਓ।',
      hi: 'जड़ पूजा त्यागकर चेतन प्रभु का स्मरण हृदय में बसाएं।',
      en: 'Renounce idol-worship and enshrine the remembrance of the Living Master in your heart.',
    },
    samarpan: {
      pb: 'ਸਾਰੇ ਭਰਮ ਅਤੇ ਅੰਧਵਿਸ਼ਵਾਸ ਛੱਡ ਕੇ ਇਕ ਸਚਿਦਾਨੰਦ ਪ੍ਰਭੂ ਦੀ ਸ਼ਰਨ ਲਵੋ।',
      hi: 'समस्त भ्रम और अंधविश्वास छोड़कर एक सच्चिदानंद प्रभु की शरण लें।',
      en: 'Cast away all superstition and seek the sole refuge of the Eternal Consciousness.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 137 (Ang 1369)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-137',
    category: 'salok',
    ang: 1369,
    title: {
      pb: 'ਸਲੋਕ ੧੩੭: ਕਾਗਦ ਕੀ ਓਬਰੀ ਮਸੁ ਕੇ ਕਰਮ ਕਪਾਟ (ਕਰਮ ਕਾਂਡ ਖੰਡਨ)',
      hi: 'सलोक १३७: कागद की ओबरी मसु के करम कपाट (कर्मकांड खण्डन)',
      en: 'Salok 137: Books and Rituals Are Like Paper Prisons',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਗਦ ਕੀ ਓਬਰੀ ਮਸੁ ਕੇ ਕਰਮ ਕਪਾਟ ॥',
      'ਪਾਹਨ ਬੋਰੀ ਪਿਰਥਮੀ ਪੰਡਿਤ ਪਾੜੀ ਬਾਟ ॥੧੩੭॥',
    ],
    moolDevanagari: [
      'कबीर कागद की ओबरी मसु के करम कपाट ॥',
      'पाहन बोरी पिरथमी पंडित पाड़ी बाट ॥१३७॥',
    ],
    moolRoman: [
      'Kabīr kāgad kī obrī mas ke karam kapāṭ.',
      'Pāhan borī pirthamī panḍit pāṛī bāṭ. ||137||',
    ],
    shabdarth: [
      {
        word: 'ਓਬਰੀ / ओबरी',
        meaning: {
          pb: 'ਕੋਠੜੀ, ਜੇਲ੍ਹ ਦੀ ਛੋਟੀ ਕੋਠੜੀ',
          hi: 'कोठरी, जेल की छोटी कोठरी',
          en: 'Small room / prison cell',
        },
      },
      {
        word: 'ਕਰਮ ਕਪਾਟ / करम कपाट',
        meaning: {
          pb: 'ਕਰਮ ਕਾਂਡ ਦੇ ਅੱਖਰ ਤੇ ਕਵਾੜ (ਤਖਤੇ)',
          hi: 'कर्मकांड के अक्षर और किवाड़',
          en: 'Lettered doors / ritualistic barriers',
        },
      },
      {
        word: 'ਪਾੜੀ ਬਾਟ / पाड़ी बाट',
        meaning: {
          pb: 'ਰਸਤਾ ਪਾੜ ਕੇ ਲੁੱਟ ਲਿਆ, ਗੁਮਰਾਹ ਕੀਤਾ',
          hi: 'रास्ता रोककर लूट लिया, गुमराह किया',
          en: 'Waylaid and plundered the spiritual path',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕਾਗਜ਼ (ਧਰਮ ਸ਼ਾਸਤਰਾਂ) ਦੀ ਓਬਰੀ (ਕੈਦਖਾਨੇ ਦੀ ਇੱਕ ਕੋਠੜੀ) ਹੈ। ਸਿਆਹੀ ਦੇ ਅੱਖਰ ਜੋ ਹਨ, ਇਹ ਤਖਤੇ ਲੱਗੇ ਹੋਏ ਹਨ। ਉਸ ਕਾਗਜ਼ਾਂ ਦੀ ਕੋਠੜੀ ਅਤੇ ਪੱਥਰ ਦੀਆਂ ਮੂਰਤੀਆਂ ਨੇ ਪ੍ਰਿਥਵੀ ਦੇ ਜੀਵਾਂ ਨੂੰ ਡੋਬ ਦਿੱਤਾ ਹੈ ਅਤੇ ਪੰਡਤਾਂ ਨੇ ਰਸਤਾ ਪਾੜ ਕੇ ਲੋਕਾਂ ਨੂੰ ਰਸਤੇ ਵਿੱਚ ਹੀ ਲੁੱਟ ਲਿਆ ਹੈ, ਅਰਥਾਤ ਸ਼ਾਸਤਰਾਂ ਦੇ ਲਿਖੇ ਕਰਮ ਕਾਂਡਾਂ ਵਿੱਚ ਲਾ ਕੇ ਦੱਛਣਾ ਲੈ ਕੇ ਅੱਗੇ ਪਹੁੰਚਣ ਹੀ ਨਹੀਂ ਦੇਂਦੇ॥ ੧੩੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-शास्त्र कागज की कोठरी के समान हैं और स्याही के अक्षर उसके किवाड़ हैं। पत्थर की मूर्तियों ने संसार को डुबो दिया है और धर्मगुरुओं ने करमकाण्ड में उलझाकर सीधे मार्ग को लूट लिया है॥ १३७॥',
      en: 'Satguru Kabir Saheb proclaims: Books are like a cell of paper, and ink letters are its wooden doors. Stone idols have drowned the world, and religious pundits plunder seekers along the way with outer rituals.',
    },
    chintan: {
      pb: 'ਕੇਵਲ ਪੁਸਤਕੀ ਗਿਆਨ ਜਾਂ ਅੱਖਰੀ ਵਿੱਦਿਆ ਨਾਲ ਮੁਕਤੀ ਨਹੀਂ ਹੁੰਦੀ; ਨਾਮ ਦੀ ਪ੍ਰਾਪਤੀ ਅਨੁਭਵ ਨਾਲ ਹੁੰਦੀ ਹੈ।',
      hi: 'केवल पुस्तकीय ज्ञान या अक्षरी विद्या से मुक्ति नहीं होती; नाम की प्राप्ति अनुभव से होती है।',
      en: 'Mere bookish knowledge cannot liberate the soul; realization of the Divine Name comes through inner experience.',
    },
    acharana: {
      pb: 'ਕਰਮ ਕਾਂਡੀ ਲੁੱਟ ਤੋਂ ਬਚ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਸ਼ਬਦ ਨਾਲ ਜੁੜੋ।',
      hi: 'कर्मकांडी शोषण से बचकर सतगुरु के सच्चे शब्द से जुड़ें।',
      en: 'Escape ritualistic exploitation and attach yourself to the Satguru’s true Word.',
    },
    samarpan: {
      pb: 'ਸ਼ਬਦ ਅਨੁਭਵ ਦੁਆਰਾ ਅੰਤਰ ਆਤਮੇ ਵਿੱਚ ਵਾਸ ਕਰਦੇ ਹਰਿ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'शब्द अनुभव द्वारा अंतरात्मा में वास करते हरि चरणों में समर्पित हों।',
      en: 'Surrender to the Supreme Lord through direct inner realization of the Word.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੬੯ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 138 (Ang 1371)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-138',
    category: 'salok',
    ang: 1371,
    title: {
      pb: 'ਸਲੋਕ ੧੩੮: ਕਾਲਿ ਕਰੰਤਾ ਅਬਹਿ ਕਰੁ (ਸ਼ੁਭ ਕਰਮਾਂ ਵਿਚ ਦੇਰੀ ਨਾ ਕਰੋ)',
      hi: 'सलोक १३८: कालि करंता अबहि करु (शुभ कर्मों में विलंब न करें)',
      en: 'Salok 138: Do Today What You Planned for Tomorrow',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਲਿ ਕਰੰਤਾ ਅਬਹਿ ਕਰੁ ਅਬ ਕਰਤਾ ਸੁਇ ਤਾਲ ॥',
      'ਪਾਛੈ ਕਛੂ ਨ ਹੋਇਗਾ ਜਉ ਸਿਰ ਪਰਿ ਆਵੈ ਕਾਲੁ ॥੧੩੮॥',
    ],
    moolDevanagari: [
      'कबीर कालि करंता अबहि करु अब करता सुइ ताल ॥',
      'पाछै कछू न होइगा जउ सिर परि आवै कालु ॥१३८॥',
    ],
    moolRoman: [
      'Kabīr kāl karantā abah kar ab kartā sui tāl.',
      'Pāchhai kachhū na hoīgā jau sir par āvai kāl. ||138||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਲਿ ਕਰੰਤਾ / कालि करंता',
        meaning: {
          pb: 'ਜੋ ਕੱਲ੍ਹ ਕਰਨਾ ਹੈ',
          hi: 'जो कल करना है',
          en: 'Whatever you plan to do tomorrow',
        },
      },
      {
        word: 'ਸੁਇ ਤਾਲ / सुइ ताल',
        meaning: {
          pb: 'ਉਸੇ ਤਾਲ (ਛਿਨ) ਵਿੱਚ, ਹੁਣੇ ਹੀ',
          hi: 'उसी ताल (क्षण) में, अभी तुरंत',
          en: 'In this very moment / instantly',
        },
      },
      {
        word: 'ਸਿਰ ਪਰਿ ਆਵੈ ਕਾਲੁ / सिर परि आवै कालु',
        meaning: {
          pb: 'ਜਦੋਂ ਸਿਰ ਤੇ ਮੌਤ ਆ ਪਹੁੰਚੇਗੀ',
          hi: 'जब सिर पर मृत्यु आ पहुंचेगी',
          en: 'When death arrives over your head',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰਾ ! ਜੋ ਭਲਕੇ ਕਰਨਾ ਹੈ ਉਹ ਅੱਜ ਹੀ ਕਰ ਅਤੇ ਜੋ ਅੱਜ ਕਰਨਾ ਹੈ ਉਹ ਤਤ ਛਿਨ ਹੀ ਕਰ। ਫਿਰ ਪਿਛੋਂ ਕੁਝ ਨਹੀਂ ਹੋ ਸਕਦਾ ਜਦੋਂ ਸਿਰ ਉਤੇ ਮੌਤ ਆ ਜਾਂਦੀ ਹੈ॥੧੩੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जो कल करना है उसे आज ही कर ले, और जो आज करना है उसे तुरंत इसी क्षण कर ले। जब सिर पर काल आ पहुंचेगा, तब पीछे कुछ भी नहीं हो सकेगा॥ १३८॥',
      en: 'Satguru Kabir Saheb proclaims: Do today what you planned to do tomorrow, and do right now what you planned for today. When death suddenly arrives at your head, nothing can be done afterward.',
    },
    chintan: {
      pb: 'ਮਨੁੱਖੀ ਜਨਮ ਅਨਮੋਲ ਹੈ; ਸਿਮਰਨ ਅਤੇ ਸ਼ੁਭ ਕਾਰਜਾਂ ਲਈ ਸਮਾਂ ਨਾ ਗਵਾਓ।',
      hi: 'मनुष्य जन्म अनमोल है; सिमरन और शुभ कार्यों के लिए समय न गंवाएं।',
      en: 'Human life is precious; do not procrastinate in meditation and righteous deeds.',
    },
    acharana: {
      pb: 'ਅੱਜ ਹੀ ਹਰੀ ਭਗਤੀ ਆਰੰਭ ਕਰੋ ਅਤੇ ਹਰ ਸਾਹ ਨੂੰ ਪ੍ਰਭੂ ਦੀ ਯਾਦ ਵਿੱਚ ਵਰਤੋ।',
      hi: 'आज ही हरि भक्ति प्रारंभ करें और हर श्वास को प्रभु की याद में लगाएं।',
      en: 'Begin devotion today and utilize every breath in remembrance of God.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਵਰਤਮਾਨ ਸਮਾਂ ਅਤੇ ਸਾਰੇ ਸ਼ਵਾਸ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना वर्तमान समय और समस्त श्वास प्रभु चरणों में अर्पित करें।',
      en: 'Surrender your present moment and every breath to the lotus feet of the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੧ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 139 (Ang 1371)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-139',
    category: 'salok',
    ang: 1371,
    title: {
      pb: 'ਸਲੋਕ ੧੩੯: ਐਸਾ ਜੰਤੁ ਇਕੁ ਦੇਖਿਆ (ਕੱਪਟੀ ਤੇ ਬੁਧੀ-ਹੀਨ)',
      hi: 'सलोक १३९: ऐसा जंतु इकु देखिआ (कपटी व बुद्धिहीन)',
      en: 'Salok 139: The Hypocrite Shiny Outside But Black Within',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਜੰਤੁ ਇਕੁ ਦੇਖਿਆ ਜੈਸੀ ਧੋਈ ਲਾਖ ॥',
      'ਦੀਸੈ ਚੰਚਲੁ ਬਹੁ ਗੁਨਾ ਮਤਿ ਹੀਨਾ ਨਾਪਾਕ ॥੧੩੯॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा जंतु इकु देखिआ जैसी धोई लाख ॥',
      'दीसै चंचलु बहु गुना मति हीना नापाक ॥१३९॥',
    ],
    moolRoman: [
      'Kabīr aisā jant ik dekhiā jaisī dhoī lākh.',
      'Dīsai chanchal bahu gunā mat hīnā nāpāk. ||139||',
    ],
    shabdarth: [
      {
        word: 'ਧੋਈ ਲਾਖ / धोई लाख',
        meaning: {
          pb: 'ਧੋਤੀ ਹੋਈ ਲਾਖ (ਜੋ ਬਾਹਰੋਂ ਲਿਸ਼ਕਦੀ ਹੈ ਪਰ ਅੰਦਰੋਂ ਕਾਲੀ ਹੁੰਦੀ ਹੈ)',
          hi: 'धुली हुई लाख (जो बाहर से चमकती है पर भीतर से काली होती है)',
          en: 'Washed shellac (glossy outside, black inside)',
        },
      },
      {
        word: 'ਚੰਚਲੁ ਬਹੁ ਗੁਨਾ / चंचलु बहु गुना',
        meaning: {
          pb: 'ਚਤੁਰ, ਚਾਲਾਕ ਤੇ ਬਹੁਤੇ ਗੁਣਾਂ ਵਾਲਾ ਦਿਸਦਾ ਹੈ',
          hi: 'चतुर, चालाक व बहुत गुणों वाला दिखाई देता है',
          en: 'Appears clever, quick-witted, and full of talents',
        },
      },
      {
        word: 'ਮਤਿ ਹੀਨਾ ਨਾਪਾਕ / मति हीना नापाक',
        meaning: {
          pb: 'ਬੁੱਧੀ ਤੋਂ ਹੀਣਾ ਤੇ ਅੰਦਰੋਂ ਅਪਵਿੱਤਰ',
          hi: 'बुद्धिहीन और भीतर से अपवित्र',
          en: 'Senseless and spiritually unholy inside',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇੱਕ ਐਸਾ ਪੁਰਸ਼ ਵੇਖਿਆ ਹੈ ਜਿਸ ਤਰ੍ਹਾਂ ਦੀ ਧੋਤੀ ਹੋਈ ਲਾਖ ਹੁੰਦੀ ਹੈ, ਜੋ ਬਾਹਰੋਂ ਬੜੀ ਚਮਕਦੀ ਹੈ ਤੇ ਵਿਚੋਂ ਕਾਲੀ ਹੁੰਦੀ ਹੈ। ਐਸਾ ਪੁਰਸ਼ ਵੇਖਣ ਨੂੰ ਭਾਵੇਂ ਬਹੁਤ ਹੀ ਚਤੁਰ ਚਾਲਾਕ ਜਾਪਦਾ ਹੈ ਪਰ ਉਹ ਅੰਦਰੋਂ ਬੁਧੀ-ਹੀਨ ਤੇ ਅਪਵਿਤ੍ਰ ਹੁੰਦਾ ਹੈ, ਜੋ ਪ੍ਰਭੂ ਭਗਤੀ ਅਤੇ ਸਿਮਰਨ ਨਹੀਂ ਕਰਦਾ॥ ੧੩੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैंने एक ऐसा जीव देखा जो धुली हुई लाख की भांति है, जो बाहर से चमकती है पर भीतर से काली होती है। वह देखने में चतुर और गुणवान लगता है, परंतु भीतर से मतिहीन और अपवित्र होता है॥ १३९॥',
      en: 'Satguru Kabir Saheb proclaims: I have seen a creature like washed shellac—shiny on the outside, but pitch black within. He appears clever and full of talents, but inside he is foolish and unholy without devotion.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਚਤੁਰਾਈ ਤੇ ਦਿਖਾਵਾ ਹਰਿ ਦਰਗਾਹ ਵਿੱਚ ਕੰਮ ਨਹੀਂ ਆਉਂਦਾ; ਹਿਰਦੇ ਦੀ ਪਵਿੱਤਰਤਾ ਹੀ ਪ੍ਰਭੂ ਨੂੰ ਭਾਉਂਦੀ ਹੈ।',
      hi: 'बाहरी चतुराई व दिखावा हरि दरबार में काम नहीं आता; हृदय की पवित्रता ही प्रभु को प्रिय है।',
      en: 'Outer cleverness is useless at God’s door; only inner purity pleases the Lord.',
    },
    acharana: {
      pb: 'ਕੱਪਟ ਅਤੇ ਬਾਹਰੀ ਪਖੰਡ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਸੱਚ ਅਤੇ ਭਗਤੀ ਧਾਰਨ ਕਰੋ।',
      hi: 'कपट और बाहरी पाखंड छोड़कर आंतरिक सत्य और भक्ति धारण करें।',
      en: 'Abandon hypocrisy and outer show; embrace inner truth and sincere devotion.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਲਾਕੀ ਛੱਡ ਕੇ ਨਿਰਛਲ ਮਨ ਨਾਲ ਨਿਰੰਜਨ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਹੋਵੋ।',
      hi: 'अपनी चालाकी छोड़कर निष्छल मन से निरंजन प्रभु चरणों में समर्पित हों।',
      en: 'Surrender all cleverness and present a simple, guileless heart to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੧ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 140 (Ang 1371)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-140',
    category: 'salok',
    ang: 1371,
    title: {
      pb: 'ਸਲੋਕ ੧੪੦: ਮੇਰੀ ਬੁਧਿ ਕਉ ਜਮੁ ਨ ਕਰੈ ਤਿਸਕਾਰ (ਜਮ ਤੋਂ ਅਭੈ)',
      hi: 'सलोक १४०: मेरी बुधि कउ जमु न करै तिसकार (यम से अभय)',
      en: 'Salok 140: Even Death Respects the Devotee of the Almighty',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੇਰੀ ਬੁਧਿ ਕਉ ਜਮੁ ਨ ਕਰੈ ਤਿਸਕਾਰ ॥',
      'ਜਿਨਿ ਇਹੁ ਜਮੂਆ ਸਿਰਜਿਆ ਸੁ ਜਪਿਆ ਪਰਵਿਦਗਾਰ ॥੧੪੦॥',
    ],
    moolDevanagari: [
      'कबीर मेरी बुद्धि कउ जमु न करै तिसकार ॥',
      'जिनि इहु जमूआ सिरजिआ सु जपिआ परविदगार ॥१४०॥',
    ],
    moolRoman: [
      'Kabīr merī budh kau jam na karai tiskār.',
      'Jin ih jamūā sirjiā su japiā parvidgār. ||140||',
    ],
    shabdarth: [
      {
        word: 'ਤਿਸਕਾਰ / तिसकार',
        meaning: {
          pb: 'ਨਿਰਾਦਰ, ਅਪਮਾਨ',
          hi: 'तिरस्कार, निरादर, अपमान',
          en: 'Disrespect / insult',
        },
      },
      {
        word: 'ਜਮੂਆ / जमूआ',
        meaning: {
          pb: 'ਜਮਦੂਤ, ਮੌਤ ਦਾ ਦੂਤ',
          hi: 'यमदूत, मृत्यु का दूत',
          en: 'The Messenger of Death',
        },
      },
      {
        word: 'ਪਰਵਿਦਗਾਰ / परविदगार',
        meaning: {
          pb: 'ਪਾਲਣਹਾਰ ਪ੍ਰਮਾਤਮਾ',
          hi: 'पालनहार परमेश्वर',
          en: 'The Cherishing Lord / Almighty',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੇਰੀ ਬੁੱਧੀ ਦੀ ਜਮਰਾਜ ਭੀ ਨਿਰਾਦਰੀ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਮੈਂ ਉਸ ਪਾਲਣਾ ਕਰਨ ਵਾਲੇ ਪ੍ਰਭੂ ਨੂੰ ਸਿਮਰਿਆ ਹੈ ਜਿਸ ਨੇ ਜਮ ਨੂੰ ਪੈਦਾ ਕੀਤਾ ਹੈ॥ ੧੪੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यमराज भी मेरी बुद्धि का तिरस्कार नहीं कर सकता, क्योंकि मैंने उस प्रतिपालक परमेश्वर का नाम जपा है जिसने इस यमदूत को भी उत्पन्न किया है॥ १४०॥',
      en: 'Satguru Kabir Saheb proclaims: Even the Messenger of Death cannot disrespect my understanding, for I contemplate that Nourishing Lord who created the Messenger of Death Himself.',
    },
    chintan: {
      pb: 'ਹਰਿ ਨਾਮ ਦੇ ਸਿਮਰਨ ਨਾਲ ਮੌਤ ਦਾ ਡਰ ਸਦਾ ਲਈ ਮਿਟ ਜਾਂਦਾ ਹੈ।',
      hi: 'हरि नाम के स्मरण से मृत्यु का भय सदा के लिए मिट जाता है।',
      en: 'Meditation on the Divine Name permanently destroys the fear of Death.',
    },
    acharana: {
      pb: 'ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਰਚੇਤਾ ਪਰਵਰਦਿਗਾਰ ਵਾਹਿਗੁਰੂ ਦੀ ਸਰਨ ਪਵੋ ਅਤੇ ਨਿਰਭਉ ਹੋ ਕੇ ਜੀਵੋ।',
      hi: 'सृष्टि के रचयिता परवरदिगार वाहेगुरु की शरण लें और निर्भय होकर जिएं।',
      en: 'Seek refuge in the Creator Lord and live in total fearlessness.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਅਤੇ ਭੈਅ ਨੂੰ ਹਰਿ ਪਰਵਰਦਿਗਾਰ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी बुद्धि और भय को हरि परवरदिगार के चरणों में समर्पित करें।',
      en: 'Dedicate your mind and intellect to the Almighty Lord who governs all.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੧ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 141 (Ang 1371)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-141',
    category: 'salok',
    ang: 1371,
    title: {
      pb: 'ਸਲੋਕ ੧੪੧: ਕਸਤੂਰੀ ਭਇਆ ਭਵਰ ਭਏ ਸਭ ਦਾਸ (ਰਾਮ ਨਿਵਾਸ)',
      hi: 'सलोक १४१: कसूरी भइआ भवर भए सभ दास (राम निवास)',
      en: 'Salok 141: Devotion Fills the Soul with the Fragrance of Divine Musk',
    },
    moolGurmukhi: [
      'ਕਬੀਰੁ ਕਸਤੂਰੀ ਭਇਆ ਭਵਰ ਭਏ ਸਭ ਦਾਸ ॥',
      'ਜਿਉ ਜਿਉ ਭਗਤਿ ਕਬੀਰ ਕੀ ਤਿਉ ਤਿਉ ਰਾਮ ਨਿਵਾਸ ॥੧੪੧॥',
    ],
    moolDevanagari: [
      'कबीरु कसूरी भइआ भवर भए सभ दास ॥',
      'जिउ जिउ भगति कबीर की तिउ तिउ राम निवास ॥१४१॥',
    ],
    moolRoman: [
      'Kabīr kastūrī bhaīā bhavar bhae sabh dās.',
      'Jiu jiu bhagat Kabīr kī tiu tiu Rām nivās. ||141||',
    ],
    shabdarth: [
      {
        word: 'ਕਸਤੂਰੀ / कसूरी',
        meaning: {
          pb: 'ਸੁਗੰਧਿਤ ਕਸਤੂਰੀ ਰੂਪ ਪ੍ਰਭੂ ਜਾਂ ਨਾਮ ਦੀ ਸੁਗੰਧ',
          hi: 'सुगंधित कस्तूरी रूप प्रभु या नाम की सुगंध',
          en: 'Fragrant musk of Divine Name',
        },
      },
      {
        word: 'ਭਵਰ ਭਏ ਸਭ ਦਾਸ / भवर भए सभ दास',
        meaning: {
          pb: 'ਸਾਰੇ ਭਗਤ ਭੌਰੇ ਬਣ ਕੇ ਸ਼ਰਨ ਆਉਂਦੇ ਹਨ',
          hi: 'सभी भक्त भौंरे बनकर शरण में आते हैं',
          en: 'Devotees become like honeybees drawn to divine nectar',
        },
      },
      {
        word: 'ਰਾਮ ਨਿਵਾਸ / राम निवास',
        meaning: {
          pb: 'ਹਿਰਦੇ ਵਿਚ ਪ੍ਰਭੂ ਦਾ ਨਿਵਾਸ ਤੇ ਪ੍ਰਕਾਸ਼',
          hi: 'हृदय में प्रभु का निवास व प्रकाश',
          en: 'Inhabitance and light of God in the heart',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਕਸਤੂਰੀ ਰੂਪ ਹੈ ਅਤੇ ਉਸ ਦੇ ਸਾਰੇ ਭਗਤ ਭੌਰਿਆਂ ਸਮਾਨ ਹਨ। ਜਿਵੇਂ ਜਿਵੇਂ ਦਾਸ, ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਕਰਦੇ ਹਨ, ਤਿਉ, ਤਿਉਂ ਉਹਨਾਂ ਦੇ ਮਨ ਵਿਚ ਪ੍ਰਭੂ ਦਾ ਨਿਵਾਸ ਹੁੰਦਾ ਜਾਂਦਾ ਹੈ॥ ੧੪੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-भगवान कस्तूरी के समान सुगंधित हैं और सभी भक्त भौंरों की भांति हैं। जैसे-जैसे कबीर भक्ति में लीन होता है, वैसे-वैसे हृदय में राम का प्रकाश और निवास बढ़ता जाता है॥ १४१॥',
      en: 'Satguru Kabir Saheb proclaims: God is like divine musk, and all His devotees are like honeybees drawn to Him. As Kabir engages in pure devotion, the presence of the Lord dwells ever deeper within his heart.',
    },
    chintan: {
      pb: 'ਭਗਤੀ ਨਾਲ ਆਤਮਾ ਪਵਿੱਤਰ ਹੁੰਦੀ ਹੈ ਅਤੇ ਪ੍ਰਭੂ ਦੀ ਅਲੌਕਿਕ ਸੁਗੰਧ ਨਾਲ ਮਹਿਕ ਉੱਠਦੀ ਹੈ।',
      hi: 'भक्ति से आत्मा पवित्र होती है और प्रभु की अलौकिक सुगंध से महक उठती है।',
      en: 'True devotion purifies the soul and fills it with the fragrance of Divine Presence.',
    },
    acharana: {
      pb: 'ਨਿਰੰਤਰ ਨਾਮ ਦੀ ਕਮਾਈ ਕਰੋ ਤਾਂ ਜੋ ਰਾਮ ਆਪ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚ ਨਿਵਾਸ ਕਰੇ।',
      hi: 'निरंतर नाम की कमाई करें ताकि राम स्वयं आपके हृदय में निवास करें।',
      en: 'Earn the wealth of Name constantly so the Supreme Lord resides in your heart.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਭਵਰੇ ਨੂੰ ਕੇਵਲ ਰਾਮ ਚਰਨ ਕਮਲਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने मन रूपी भौंरे को केवल राम चरण कमलों में अर्पित करें।',
      en: 'Offer your bee-like mind solely at the lotus feet of the Supreme Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੧ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 142 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-142',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੨: ਗਹਗਚਿ ਪਰਿਓ ਕੁਟੰਬ ਕੈ (ਪਰਿਵਾਰ ਦਾ ਮੋਹ ਤੇ ਮੌਤ)',
      hi: 'सलोक १४२: गहगचि परिओ कुटंब कै (परिवार का मोह व मृत्यु)',
      en: 'Salok 142: Entangled in Family Worldly Clamor, Death Suddenly Arrives',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗਹਗਚਿ ਪਰਿਓ ਕੁਟੰਬ ਕੈ ਕਾਂਠੈ ਰਹਿ ਗਇਓ ਰਾਮੁ ॥',
      'ਆਇ ਪਰੇ ਧਰਮ ਰਾਇ ਕੇ ਬੀਚਹਿ ਧੁਮਾ ਧਾਮ ॥੧੪੨॥',
    ],
    moolDevanagari: [
      'कबीर गहगचि परिओ कुटंब कै कांठै रहि गइओ रामु ॥',
      'आइ परे धरम राइ के बीचहि धुमा धाम ॥१४२॥',
    ],
    moolRoman: [
      'Kabīr gahgach pariō kuṭamb kai kāṇṭhai rah gaiō Rām.',
      'Āi pare Dharam Rāi ke bīchah dhumā dhām. ||142||',
    ],
    shabdarth: [
      {
        word: 'ਗਹਗਚਿ / गहगचि',
        meaning: {
          pb: 'ਘਮਸਾਣ, ਰੌਲੇ-ਰੱਪੇ, ਖਚਿਤ ਹੋਣਾ',
          hi: 'आपधापी, मोह-जाल, घनघोर उलझन',
          en: 'Whirlpool of family entanglement and commotion',
        },
      },
      {
        word: 'ਕਾਂਠੈ / कांठै',
        meaning: {
          pb: 'ਇੱਕ ਪਾਸੇ, ਲਾਂਭੇ',
          hi: 'एक ओर, किनारे पर, अलग',
          en: 'Aside / on the margin',
        },
      },
      {
        word: 'ਧੁਮਾ ਧਾਮ / धुमा धाम',
        meaning: {
          pb: 'ਸ਼ੋਰ-ਸ਼ਰਾਬੇ ਤੇ ਭੱਜ-ਦੌੜ ਦੇ ਵਿਚਕਾਰ ਹੀ',
          hi: 'शोर-शराबे और आपाधापी के बीच में ही',
          en: 'In the very midst of worldly turmoil and bustle',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪੁਰਸ਼ ਆਪਣੇ ਪੁੱਤਰ ਇਸਤਰੀ ਆਦਿ ਕੁਟੰਬੀਆਂ ਦੇ ਘਮਸਾਣ ਵਿਚ ਪਿਆ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਭਜਨ ਸਿਮਰਨ ਦੀ ਯਾਦ ਲਾਂਭੇ (ਇਕ ਪਾਸੇ ਹੀ) ਰਹਿ ਜਾਂਦੀ ਹੈ। ਇਸ ਰੌਲੇ ਰੱਪੇ ਵਿਚ ਹੀ ਧਰਮਰਾਜ ਦੇ ਦੂਤ ਆ ਪਹੁੰਚਦੇ ਹਨ॥੧੪੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य परिवार के मोह-जाल में उलझा रहता है और भगवान का स्मरण एक ओर छूट जाता है। इसी आपाधापी के बीच धर्मराज के दूत आ धमकते हैं और जीवन समाप्त हो जाता है॥ १४२॥',
      en: 'Satguru Kabir Saheb proclaims: Entangled in the emotional turbulence of family ties, remembrance of the Lord is set aside. Right in the midst of this worldly turmoil, the messengers of Death arrive.',
    },
    chintan: {
      pb: 'ਕੁਟੰਬੀ ਮੋਹ ਅਸਥਿਰ ਹੈ; ਕੇਵਲ ਰਾਮ ਨਾਮ ਹੀ ਅੰਤ ਵੇਲੇ ਦਾ ਸਾਥੀ ਹੈ।',
      hi: 'पारिवारिक मोह क्षणभंगुर है; केवल राम नाम ही अंतिम समय का सच्चा साथी है।',
      en: 'Family attachment is temporary; only the Divine Name is the soul’s eternal companion.',
    },
    acharana: {
      pb: 'ਗ੍ਰਿਹਸਥ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਨਿਭਾਉਂਦੇ ਹੋਏ ਵੀ ਪ੍ਰਭੂ ਸਿਮਰਨ ਨੂੰ ਪ੍ਰਥਮ ਸਥਾਨ ਦਿਓ।',
      hi: 'गृहस्थ के कर्तव्य निभाते हुए भी प्रभु सिमरन को प्रथम स्थान दें।',
      en: 'Fulfill worldly duties, but give top priority to the remembrance of God.',
    },
    samarpan: {
      pb: 'ਸਭ ਮੋਹ ਮਾਇਆ ਤੋਂ ਮਨ ਉਦਾਸ ਕਰਕੇ ਸੱਚੇ ਹਰਿ ਨਾਮ ਵਿੱਚ ਚਿੱਤ ਲਗਾਓ।',
      hi: 'समस्त मोह-माया से मन हटाकर सच्चे हरि नाम में चित्त लगाएं।',
      en: 'Detach your heart from transient worldly ties and fix it upon the Supreme Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 143 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-143',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੩: ਸਾਕਤ ਤੇ ਸੂਕਰ ਭਲਾ (ਬੇਮੁਖ ਮਨੁੱਖ)',
      hi: 'सलोक १४३: साकत ते सूकरु भला (विमुख मनुष्य)',
      en: 'Salok 143: A Swine Is Better Than a Godless Materialist',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਕਤ ਤੇ ਸੂਕਰ ਭਲਾ ਰਾਖੈ ਆਛਾ ਗਾਉ ॥',
      'ਉਹੁ ਸਾਕਤੁ ਬਪੁਰਾ ਮਰਿ ਗਇਆ ਕੋਇ ਨ ਲੈਹੈ ਨਾਉ ॥੧੪੩॥',
    ],
    moolDevanagari: [
      'कबीर साकत ते सूकरु भला राखै आछा गाउ ॥',
      'ओहु साकतु बापुरा मरि गइआ कोइ न ਲੈਹੈ ਨਾਉ ॥१४३॥',
    ],
    moolRoman: [
      'Kabīr sākat te sūkar bhalā rākhai āchhā gāu.',
      'Oh sākat bapurā mar gaiā koi na laihai nāu. ||143||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਕਤ / साकत',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਤੋਂ ਬੇਮੁਖ, ਮਾਇਆਧਾਰੀ ਮਨੁੱਖ',
          hi: 'प्रभु से विमुख, मायावादी मनुष्य',
          en: 'A godless materialist / ungodly person',
        },
      },
      {
        word: 'ਸੂਕਰ / सूकर',
        meaning: {
          pb: 'ਸੂਰ (ਜੋ ਵਿਸ਼ਟਾ ਖਾ ਕੇ ਪਿੰਡ ਸਾਫ਼ ਰੱਖਦਾ ਹੈ)',
          hi: 'सूअर (जो गंदगी खाकर गांव स्वच्छ रखता है)',
          en: 'A pig (which cleans the village by eating refuse)',
        },
      },
      {
        word: 'ਬਪੁਰਾ / बापुरा',
        meaning: {
          pb: 'ਲਾਚਾਰ, ਵਿਚਾਰਾ, ਮੰਦਭਾਗੀ',
          hi: 'बेचारा, भाग्यहीन',
          en: 'Wretched / unfortunate',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਵਾਹਿਗੁਰੂ ਵੱਲੋਂ ਬੇਮੁਖ (ਸਾਕਤ) ਪੁਰਸ਼ ਨਾਲੋਂ ਸੂਰ ਚੰਗਾ ਹੈ ਜਿਹੜਾ ਵਿਸ਼ਟਾ ਗੰਦਗੀ ਖਾ ਕੇ ਪਿੰਡ ਨੂੰ ਸਾਫ਼ ਰੱਖਦਾ ਹੈ। ਪਰ ਬੇਮੁਖ ਪੁਰਸ਼ ਜਦੋਂ ਮਰ ਜਾਂਦਾ ਹੈ ਤਾਂ ਕੋਈ ਵੀ ਉਸ ਦਾ ਨਾਮ ਨਹੀਂ ਲੈਂਦਾ, ਕਿਉਂਕਿ ਉਸ ਨੇ ਕੋਈ ਚੰਗਿਆਈ ਨਹੀਂ ਕੀਤੀ ਹੁੰਦੀ, ਸਗੋਂ ਦੁੱਖ ਦੇ ਕੇ ਗੰਦ ਹੀ ਖਿਲਾਰਿਆ ਹੁੰਦਾ ਹੈ॥ ੧੪੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-भगवान से विमुख मनुष्य से सूअर भला है जो गंदगी खाकर गांव को स्वच्छ रखता है। परंतु वह विमुख साकत जब मर जाता है, तो कोई उसका नाम भी नहीं लेता क्योंकि उसने कोई भलाई नहीं की॥ १४३॥',
      en: 'Satguru Kabir Saheb proclaims: A pig is better than a godless materialist, for at least it cleanses the village by eating garbage. But when that wretched materialist dies, no one remembers his name because he left no goodness behind.',
    },
    chintan: {
      pb: 'ਸਿਮਰਨਹੀਣ ਜੀਵਨ ਨਿਰਅਰਥਕ ਹੈ; ਪਰਉਪਕਾਰ ਅਤੇ ਪ੍ਰਭੂ ਭਗਤੀ ਨਾਲ ਹੀ ਜਨਮ ਸਫਲ ਹੁੰਦਾ ਹੈ।',
      hi: 'सिमरनहीन जीवन निरर्थक है; परोपकार और प्रभु भक्ति से ही जन्म सफल होता है।',
      en: 'A life devoid of devotion is useless; only altruism and prayer make life fruitful.',
    },
    acharana: {
      pb: 'ਸਾਕਤਪੁਣਾ ਤਿਆਗ ਕੇ ਪਰਉਪਕਾਰੀ ਅਤੇ ਨਾਮ-ਲੀਨ ਗੁਰਮੁਖ ਬਣੋ।',
      hi: 'साकतपना त्यागकर परोपकारी और नाम-लीन गुरमुख बनें।',
      en: 'Renounce ungodliness; become a benevolent, Name-imbued seeker of Truth.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਦੇਹ ਅਤੇ ਆਤਮਾ ਨੂੰ ਸ੍ਰੀ ਹਰਿ ਭਗਤੀ ਅਤੇ ਜਨ-ਸੇਵਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी देह और आत्मा को श्री हरि भक्ति और जन-सेवा में समर्पित करें।',
      en: 'Dedicate body and soul to Divine worship and humble selfless service.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 144 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-144',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੪: ਕਉਡੀ ਕਉਡੀ ਜੋਰਿ ਕੈ (ਧਨ ਦੀ ਅਸਥਿਰਤਾ)',
      hi: 'सलोक १४४: कउडी कउडी जोरि कै (धन की अनित्यता)',
      en: 'Salok 144: Hoarding Wealth Cannot Buy Eternity When Death Takes All',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਉਡੀ ਕਉਡੀ ਜੋਰਿ ਕੈ ਜੋਰੇ ਲਾਖ ਕਰੋਰਿ ॥',
      'ਚਲਤੀ ਬਾਰ ਨ ਕਛੁ ਮਿਲਿਓ ਲਈ ਲੰਗੋਟੀ ਤੋਰਿ ॥੧੪੪॥',
    ],
    moolDevanagari: [
      'कबीर कउडी कउडी जोरि कै जोरे लाख करोरਿ ॥',
      'चलती बार न कछु मिलिओ लई लंगोटी तोरि ॥१४੪॥',
    ],
    moolRoman: [
      'Kabīr kauḍī kauḍī jor kai jore lākh karor.',
      'Chaltī bār na kachh miliō laī langoṭī tor. ||144||',
    ],
    shabdarth: [
      {
        word: 'ਕਉਡੀ ਕਉਡੀ / कउडी कउडी',
        meaning: {
          pb: 'ਇੱਕ-ਇੱਕ ਪੈਸਾ ਜੋੜ ਕੇ',
          hi: 'एक-एक पैसा जोड़कर',
          en: 'Penny by penny, hoarded meticulously',
        },
      },
      {
        word: 'ਚਲਤੀ ਬਾਰ / चलती बार',
        meaning: {
          pb: 'ਮੌਤ ਸਮੇਂ, ਸੰਸਾਰ ਤੋਂ ਚੱਲਣ ਵੇਲੇ',
          hi: 'मृत्यु काल में, संसार से जाते समय',
          en: 'At the time of death / final departure',
        },
      },
      {
        word: 'ਲਈ ਲੰਗੋਟੀ ਤੋਰਿ / लई लंगोटी तोरि',
        meaning: {
          pb: 'ਲੰਗੋਟੀ (ਵਸਤਰ) ਵੀ ਉਤਾਰ ਲਈ ਗਈ',
          hi: 'लंगोटी भी उतार ली गई',
          en: 'Even the cloth tied to the waist is taken away',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕੌਡੀ ਕੌਡੀ ਇਕੱਠੀ ਕਰਕੇ ਲੱਖਾਂ ਤੇ ਕਰੋੜਾਂ ਜੋੜ ਲਏ। ਪਰ ਅੰਤ ਸਮੇਂ ਇਸ ਸੰਸਾਰ ਤੋਂ ਅੱਗੇ ਚੱਲਣ ਲੱਗੇ ਕੁਝ ਵੀ ਨਾ ਮਿਲਿਆ, ਏਥੋਂ ਤੱਕ ਕਿ ਲੱਕ ਨਾਲ ਬੱਧੀ ਹੋਈ ਉਸ ਦੀ ਲੰਗੋਟੀ ਵੀ ਤੋੜ (ਉਤਾਰ) ਲਈ॥ ੧੪੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-कौड़ी-कौड़ी जोड़कर लाखों-करोड़ों का धन एकत्रित कर लिया। परंतु मृत्यु के समय साथ कुछ भी नहीं गया, यहाँ तक कि कमर पर बंधी लंगोटी भी छीन ली गई॥ १४४॥',
      en: 'Satguru Kabir Saheb proclaims: Penny by penny, one hoards millions and billions. But at the time of departure, nothing goes with him—even the loincloth tied around his waist is stripped away.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਧਨ-ਦੌਲਤ ਇੱਥੇ ਹੀ ਰਹਿ ਜਾਣੀ ਹੈ; ਕੇਵਲ ਰਾਮ ਨਾਮ ਦਾ ਧਨ ਹੀ ਅੰਤ ਵੇਲੇ ਨਾਲ ਜਾਂਦਾ ਹੈ।',
      hi: 'सांसारिक धन-दौलत यहीं रह जानी है; केवल राम नाम का धन ही अंत समय साथ जाता है।',
      en: 'Material wealth remains behind; only the wealth of the Divine Name accompanies the soul.',
    },
    acharana: {
      pb: 'ਧਨ ਦੀ ਤ੍ਰਿਸ਼ਨਾ ਛੱਡ ਕੇ ਨਾਮ ਧਨ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'धन की तृष्णा छोड़कर नाम धन की कमाई करें।',
      en: 'Abandon avarice and accumulate the everlasting treasure of God’s Name.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਧਿਆਨ ਨਾਸਵੰਤ ਧਨ ਤੋਂ ਹਟਾ ਕੇ ਅਬਿਨਾਸੀ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना ध्यान नाशवंत धन से हटाकर अविनाशी प्रभु के चरणों में समर्पित करें।',
      en: 'Shift your devotion from perishable riches to the Imperishable Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 145 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-145',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੫: ਬੈਸਨੋ ਹੂਆ ਤ ਕਿਆ ਭਇਆ (ਬਾਹਰੀ ਮਾਲਾ ਤੇ ਅੰਦਰਲੀ ਮੈਲ)',
      hi: 'सलोक १४५: बैसनो हूआ त किआ भइआ (बाहरी माला व आंतरिक मैल)',
      en: 'Salok 145: Rosaries Around Neck Mean Nothing If Heart Is Full of Impurity',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬੈਸਨੋ ਹੂਆ ਤ ਕਿਆ ਭਇਆ ਮਾਲਾ ਮੇਲੀਂ ਚਾਰਿ ॥',
      'ਬਾਹਰਿ ਕੰਚਨੁ ਬਾਰਹਾ ਭੀਤਰਿ ਭਰੀ ਭੰਗਾਰ ॥੧੪੫॥',
    ],
    moolDevanagari: [
      'कबीर बैसनो हूआ त किआ भइआ माला मेलीं चारि ॥',
      'बाहरि कंचनु बारहा भीतरि भरी भंगਾਰ ॥१४५॥',
    ],
    moolRoman: [
      'Kabīr baisno hūā ta kiā bhaīā mālā melīñ chār.',
      'Bāhar kanchan bārahā bhītar bharī bhangār. ||145||',
    ],
    shabdarth: [
      {
        word: 'ਬੈਸਨੋ / बैसनो',
        meaning: {
          pb: 'ਵੈਸ਼ਨਵ ਦਾ ਭਗਤ ਅਖਵਾਉਣ ਵਾਲਾ',
          hi: 'वैष्णव भक्त कहलाने वाला',
          en: 'A professed Vaishnavite devotee',
        },
      },
      {
        word: 'ਮਾਲਾ ਮੇਲੀਂ ਚਾਰਿ / माला मेलीं चारि',
        meaning: {
          pb: 'ਗਲ ਵਿੱਚ ਚਾਰ ਮਾਲਾਵਾਂ ਇਕੱਠੀਆਂ ਪਾ ਲਈਆਂ',
          hi: 'गले में चार मालाएं पहन लीं',
          en: 'Wore four rosaries around the neck',
        },
      },
      {
        word: 'ਕੰਚਨੁ ਬਾਰਹਾ / कंचनु बारहा',
        meaning: {
          pb: 'ਬਾਰਾਂ ਵੰਨੀ ਦਾ ਸ਼ੁੱਧ ਸੋਨਾ',
          hi: 'बारह वानी का शुद्ध कुंदन/सोना',
          en: 'Pure 12-carat fine gold',
        },
      },
      {
        word: 'ਭੰਗਾਰ / भंगार',
        meaning: {
          pb: 'ਮੈਲ, ਖੋਟ, ਕਬਾੜ, ਵਿਕਾਰ',
          hi: 'मैल, खोट, कबाड़, विकार',
          en: 'Trash, scum, spiritual impurities, or internal flaws',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਵਿਸ਼ਨੂੰ ਦਾ ਭਗਤ ਹੋ ਗਿਆ ਤਾਂ ਕੀ ਹੋਇਆ, ਗਲ ਵਿਚ ਚਾਰ ਮਾਲਾ ਇਕੱਠੀਆਂ ਕਰਕੇ ਪਾ ਲਈਆਂ? ਬਾਹਰੋਂ ਤਾਂ ਉਹ ਬਾਰਾਂ ਵੰਨੀ ਦਾ ਸ਼ੁਧ ਸੋਨਾ ਜਾਪਦਾ ਹੈ, ਪਰ ਮਨ ਅੰਦਰ ਮੈਲ (ਲਾਖ/ਖੋਟ) ਭਰੀ ਹੋਈ ਹੁੰਦੀ ਹੈ, ਜੋ ਬੁਰੇ ਕਰਤੱਵਾਂ ਦਾ ਸੰਕੇਤ ਹੁੰਦੀ ਹੈ॥ ੧੪੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि कोई वैष्णव बन गया और गले में चार-चार मालाएं पहन लीं तो क्या हुआ? बाहर से तो वह शुद्ध कुंदन जैसा चमकता है, परंतु भीतर कबाड़ और विकार भरा होता है॥ १४५॥',
      en: 'Satguru Kabir Saheb proclaims: What if one becomes a devout Vaishnavite and wears four rosaries around his neck? Externally he appears like pure gold, but internally he remains full of trash and spiritual impurity.',
    },
    chintan: {
      pb: 'ਧਰਮ ਕੇਵਲ ਬਾਹਰੀ ਪਹਿਰਾਵੇ ਜਾਂ ਮਾਲਾ ਦਾ ਨਾਂ ਨਹੀਂ, ਸਗੋਂ ਹਿਰਦੇ ਦੀ ਪਵਿੱਤਰਤਾ ਹੈ।',
      hi: 'धर्म केवल बाहरी पहनावे या माला का नाम नहीं, बल्कि हृदय की पवित्रता है।',
      en: 'Religion is not outer attire or rosaries, but fundamental purity of the heart.',
    },
    acharana: {
      pb: 'ਮੋਹ, ਈਰਖਾ ਤੇ ਕਾਮਨਾ ਰੂਪੀ ਅੰਦਰਲੀ ਮੈਲ ਨੂੰ ਧੋ ਕੇ ਨਿਰਮਲ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'मोह, ईर्ष्या व वासना रूपी आंतरिक मैल को धोकर निर्मल नाम सिमरन करें।',
      en: 'Cleanse the internal filth of jealousy and desire through pure remembrance.',
    },
    samarpan: {
      pb: 'ਬਾਹਰੀ ਭੇਖ ਛੱਡ ਕੇ ਨਿਸ਼ਕਾਮ ਭਾਵ ਨਾਲ ਆਪਣੀ ਆਤਮਾ ਸ੍ਰੀ ਹਰਿ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'बाहरी भेष छोड़कर निष्काम भाव से अपनी आत्मा श्री हरि के चरणों में समर्पित करें।',
      en: 'Discarding outer guises, dedicate your soul in selfless love at the Lord’s feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 146 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-146',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੬: ਰੋੜਾ ਹੋਇ ਰਹੁ ਬਾਟ ਕਾ (ਨਿਮਰਤਾ)',
      hi: 'सलोक १४६: रोड़ा होइ राहु बाट का (नम्रता)',
      en: 'Salok 146: Become a Pebble on the Path Discarding Pride',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰੋੜਾ ਹੋਇ ਰਹੁ ਬਾਟ ਕਾ ਤਜਿ ਮਨ ਕਾ ਅਭਿਮਾਨੁ ॥',
      'ਐਸਾ ਕੋਈ ਦਾਸੁ ਹੋਇ ਤਾਹਿ ਮਿਲੈ ਭਗਵਾਨੁ ॥੧੪੬॥',
    ],
    moolDevanagari: [
      'कबीर रोड़ा होइ राहु बाट का तजि मन का अभिमानु ॥',
      'ऐसा कोई दासु होइ ताहि मिलै भगवानु ॥१४६॥',
    ],
    moolRoman: [
      'Kabīr roṛā hoi rahu bāṭ kā taj man kā abhimān.',
      'Aisā koī dās hoi tāhi milai bhagvān. ||146||',
    ],
    shabdarth: [
      {
        word: 'ਰੋੜਾ / रोड़ा',
        meaning: {
          pb: 'ਪੱਥਰ ਦਾ ਛੋਟਾ ਟੁਕੜਾ, ਰੋੜੀ',
          hi: 'कंकड़, छोटा पत्थर',
          en: 'Pebble, small stone',
        },
      },
      {
        word: 'ਬਾਟ ਕਾ / बाट का',
        meaning: {
          pb: 'ਰਸਤੇ ਦਾ',
          hi: 'मार्ग का, रास्ते का',
          en: 'Of the path / highway',
        },
      },
      {
        word: 'ਅਭਿਮਾਨੁ / अभिमानु',
        meaning: {
          pb: 'ਹੰਕਾਰ, ਗਰੂਰ',
          hi: 'अहंकार, घमंड',
          en: 'Egoistic pride',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਤੂੰ ਰਸਤੇ ਦਾ ਰੋੜਾ ਹੋ ਰਹੋ, ਆਪਣੇ ਮਨ ਦਾ ਹੰਕਾਰ ਛਡ ਦੇਹ, ਕਿਉਂਕਿ ਜੇ ਕੋਈ ਅਜਿਹਾ ਦਾਸ ਹੋਵੇ, ਤਾਂ ਉਸ ਨੂੰ ਹੀ ਪ੍ਰਮਾਤਮਾ ਮਿਲਦਾ ਹੈ॥ ੧੪੬॥',
      hi: 'हे कबीर! तुम रास्ते का कंकड़ (रोड़ा) बन जाओ और अपने मन का अभिमान त्याग दो। जो कोई ऐसा विनम्र दास बनता है, उसी को भगवान मिलते हैं॥ १४६॥',
      en: 'Satguru Kabir Saheb proclaims: Become a pebble on the path, discarding all pride of the mind. Only such a humble servant meets the Supreme Lord.',
    },
    chintan: {
      pb: 'ਨਿਮਰਤਾ ਹੀ ਪ੍ਰਭੂ ਪ੍ਰਾਪਤੀ ਦਾ ਸੱਚਾ ਦੁਆਰ ਹੈ। ਹੰਕਾਰ ਦਾ ਤਿਆਗ ਅਵੱਸ਼ਕ ਹੈ।',
      hi: 'नम्रता ही प्रभु प्राप्ति का सच्चा द्वार है। अहंकार का त्याग आवश्यक है।',
      en: 'Humility is the true doorway to God. Renunciation of ego is essential.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਮਨ ਵਿੱਚੋਂ ਅਹੰਕਾਰ ਮਿਟਾ ਕੇ ਦਾਸਨਿ ਦਾਸ ਬਣ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਕਰੋ।',
      hi: 'अपने मन से अहंकार मिटाकर दासों का दास बनकर प्रभु भक्ति करें।',
      en: 'Erase pride from your heart and serve the Lord as the servant of His servants.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਹੰਕਾਰ-ਰਹਿਤ ਕਰਕੇ ਨਿਰੰਜਨ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी आत्मा को अहंकार-रहित करके निरंजन प्रभु चरणों में समर्पित करें।',
      en: 'Offer your soul free of pride at the lotus feet of the Immaculate Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 147 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-147',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੭: ਰੋੜਾ ਹੂਆ ਤ ਕਿਆ ਭਇਆ (ਧਰਨੀ ਮਹਿ ਖੇਹ)',
      hi: 'सलोक १४७: रोड़ा हूआ त किआ भइआ (धरनी महि खेह)',
      en: 'Salok 147: Be Like the Dust of the Earth',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰੋੜਾ ਹੂਆ ਤ ਕਿਆ ਭਇਆ ਪੰਥੀ ਕਉ ਦੁਖੁ ਦੇਇ ॥',
      'ਐਸਾ ਤੇਰਾ ਦਾਸੁ ਹੈ ਜਿਉ ਧਰਨੀ ਮਹਿ ਖੇਹ ॥੧੪੭॥',
    ],
    moolDevanagari: [
      'कबीर रोड़ा हूआ त किआ भइआ पंथी कउ दुखु देइ ॥',
      'ऐसा तेरा दासु है जिउ धरनी महि खेह ॥१४७॥',
    ],
    moolRoman: [
      'Kabīr roṛā hūā ta kiā bhaīā panthī kau dukh dei.',
      'Aisā terā dās hai jiu dharnī mah kheh. ||147||',
    ],
    shabdarth: [
      {
        word: 'ਪੰਥੀ / पंथी',
        meaning: {
          pb: 'ਰਾਹੀ, ਮੁਸਾਫ਼ਿਰ',
          hi: 'राहगीर, यात्री',
          en: 'Traveler / wayfarer',
        },
      },
      {
        word: 'ਧਰਨੀ ਮਹਿ ਖੇਹ / धरनी महि खेह',
        meaning: {
          pb: 'ਧਰਤੀ ਵਿੱਚ ਮਿੱਟੀ (ਧੂੜ)',
          hi: 'धरती पर धूल/मिट्टी',
          en: 'Dust of the earth',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਜੇ ਰਸਤੇ ਦਾ ਰੋੜਾ ਹੋ ਗਿਆ ਤਾਂ ਕੀ ਹੋਇਆ, ਉਹ ਰਾਹੀ ਦੇ ਪੈਰਾਂ ਨੂੰ ਚੁਭੇਗਾ ਤੇ ਦੁਖ ਦੇਵੇਗਾ, ਪ੍ਰਮਾਤਮਾ ਦਾ ਦਾਸ ਅਜਿਹਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ, ਜਿਸ ਤਰ੍ਹਾਂ ਪ੍ਰਿਥਵੀ ਉਤੇ ਮਿਟੀ ਹੁੰਦੀ ਹੈ॥ ੧੪੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि रास्ते का कंकड़ भी बन गए तो क्या हुआ? वह तो राहगीर के पैरों में चुभकर कष्ट देगा। परमात्मा का भक्त तो धरती की धूल की भांति अत्यंत नम्र होना चाहिए॥ १४७॥',
      en: 'Satguru Kabir Saheb proclaims: What good is becoming a pebble if it still pricks and hurts the traveler\'s feet? Your devotee should be like the dust of the earth.',
    },
    chintan: {
      pb: 'ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਦੇਣ ਵਾਲੀ ਨਿਮਰਤਾ ਅਸਲ ਨਿਮਰਤਾ ਨਹੀਂ; ਮਿੱਟੀ ਵਾਂਗ ਸਾਰਿਆਂ ਨੂੰ ਸਹਾਰਾ ਦਿਓ।',
      hi: 'किसी को दुख देने वाली नम्रता सच्ची नम्रਤਾ नहीं; मिट्टी की भांति सभी को सहें।',
      en: 'Pebble-like humility that causes pain is incomplete; true surrender is gentle like dust.',
    },
    acharana: {
      pb: 'ਕਿਸੇ ਦੇ ਮਨ ਨੂੰ ਠੇਸ ਨਾ ਪਹੁੰਚਾਓ, ਧਰਤੀ ਦੀ ਧੂੜ ਬਣ ਕੇ ਸਰਬੱਤ ਦਾ ਭਲਾ ਕਰੋ।',
      hi: 'किसी के मन को ठेस न पहुंचाएं, धूल बनकर सबका भला करें।',
      en: 'Do not cause grief to anyone; be humble as dust and seek the good of all.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਧਰਤੀ ਦੀ ਮਿੱਟੀ ਵਾਂਗ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने अहंकार को धरती की धूल भांति प्रभु चरणों में अर्पित करें।',
      en: 'Offer your ego like earth’s humble dust at the Lord’s feet.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 148 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-148',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੮: ਖੇਹ ਹੂਈ ਤਉ ਕਿਆ ਭਇਆ (ਪਾਨੀ ਸਰਬੰਗ)',
      hi: 'सलोक १४८: खेह हूई तउ किआ भइआ (पानी सरबंग)',
      en: 'Salok 148: Be Pure and All-Embracing Like Water',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਖੇਹ ਹੂਈ ਤਉ ਕਿਆ ਭਇਆ ਜਉ ਉਡਿ ਲਾਗੈ ਅੰਗ ॥',
      'ਹਰਿ ਜਨੁ ਐਸਾ ਚਾਹੀਐ ਜਿਉ ਪਾਨੀ ਸਰਬੰਗ ॥੧੪੮॥',
    ],
    moolDevanagari: [
      'कबीर खेह हूई तउ किआ भइआ जउ उड़ਿ लागै अंग ॥',
      'हरि जनु ऐसा चाहीऐ जिਉ पानी सरबंग ॥१४८॥',
    ],
    moolRoman: [
      'Kabīr kheh hūī tau kiā bhaīā jau uḍ lāgai ang.',
      'Har jan aisā chāhīai jiu pānī sarbang. ||148||',
    ],
    shabdarth: [
      {
        word: 'ਉਡਿ ਲਾਗੈ ਅੰਗ / उड़ि लागै अंग',
        meaning: {
          pb: 'ਉੱਡ ਕੇ ਸਰੀਰ ਨੂੰ ਲੱਗ ਜਾਵੇ ਤੇ ਮੈਲਾ ਕਰੇ',
          hi: 'उड़कर शरीर पर लग जाए और गंदा करे',
          en: 'Flies up and soils the traveler’s body',
        },
      },
      {
        word: 'ਪਾਨੀ ਸਰਬੰਗ / पानी सरबंग',
        meaning: {
          pb: 'ਪਾਣੀ ਵਰਗਾ ਜੋ ਸਾਰੇ ਅੰਗਾਂ ਨੂੰ ਸ਼ੀਤਲ ਤੇ ਸਾਫ਼ ਰੱਖਦਾ ਹੈ',
          hi: 'जल की भांति जो सब अंगों को शीतल व स्वच्छ रखे',
          en: 'Like water, cleansing and soothing all beings',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਿੱਟੀ ਵੀ ਹੋ ਗਈ ਤਾਂ ਕੀ ਹੋਇਆ, ਜੋ ਉੱਡ ਉੱਡ ਕੇ ਸਰੀਰ ਦੇ ਅੰਗਾਂ ਨੂੰ ਲੱਗ ਕੇ ਮੈਲਾ ਕਰ ਦੇਂਦੀ ਹੈ। ਇਸ ਕਰਕੇ ਹਰੀ ਦਾ ਦਾਸ ਭਗਤ ਐਸਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਜਿਸ ਤਰ੍ਹਾਂ ਪਾਣੀ ਹੈ ਜੋ ਸਾਰੇ ਅੰਗਾਂ ਨਾਲ ਮੇਲ ਰੱਖਦਾ ਹੈ॥ ੧੪੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-धूल भी बन गए तो क्या हुआ, जो उड़-उड़कर राहगीर के अंगों पर लगकर मैला कर देती है। हरि का सेवक तो जल की भांति होना चाहिए जो सभी के अंगों को शीतल व स्वच्छ रखे॥ १४८॥',
      en: 'Satguru Kabir Saheb proclaims: What good is becoming dust, if it flies up and soils the body of travelers? The servant of the Lord should be like water, pure and embracing all.',
    },
    chintan: {
      pb: 'ਹਰੀ ਦਾ ਭਗਤ ਪਾਣੀ ਵਾਂਗ ਪਵਿੱਤਰ ਅਤੇ ਨਿਰਮਲ ਸੁਭਾਅ ਵਾਲਾ ਹੁੰਦਾ ਹੈ।',
      hi: 'हरि का भक्त जल की भांति पवित्र और निर्मल स्वभाव वाला होता है।',
      en: 'A true devotee is pure and accommodating like refreshing water.',
    },
    acharana: {
      pb: 'ਕਿਸੇ ਨੂੰ ਮੈਲਾ ਜਾਂ ਦੁਖੀ ਨਾ ਕਰੋ, ਸਭ ਨੂੰ ਪਿਆਰ ਅਤੇ ਸ਼ਾਂਤੀ ਦੀ ਸ਼ੀਤਲਤਾ ਦਿਓ।',
      hi: 'किसी को मलिन या दुखी न करें, सबको प्रेम और शांति प्रदान करें।',
      en: 'Impart love and peace to all without staining anyone with harshness.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਪਾਣੀ ਵਾਂਗ ਨਿਰਮਲ ਕਰਕੇ ਸੱਚੇ ਹਰਿ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने मन को जल की भांति निर्मल करके सच्चे हरि चरणों में अर्पित करें।',
      en: 'Make your heart pure as water and offer it at the feet of God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 149 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-149',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੪੯: ਪਾਨੀ ਹੂਆ ਤ ਕਿਆ ਭਇਆ (ਜੈਸਾ ਹਰਿ ਹੀ ਹੋਇ)',
      hi: 'सलोक १४९: पानी हूआ त किआ भइआ (जैसा हरि ही होइ)',
      en: 'Salok 149: The Devotee Should Become One With the Lord Himself',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਨੀ ਹੂਆ ਤ ਕਿਆ ਭਇਆ ਸੀਰਾ ਤਾਤਾ ਹੋਇ ॥',
      'ਹਰਿ ਜਨੁ ਐਸਾ ਚਾਹੀਐ ਜੈਸਾ ਹਰਿ ਹੀ ਹੋਇ ॥੧੪੯॥',
    ],
    moolDevanagari: [
      'कबीर पानी हूआ त किआ भइआ सीरा ताता होइ ॥',
      'हरि जनु ऐसा चाहीऐ जैसा हरि ही होइ ॥१४९॥',
    ],
    moolRoman: [
      'Kabīr pānī hūā ta kiā bhaīā sīrā tātā hoi.',
      'Har jan aisā chāhīai jaisā Har hī hoi. ||149||',
    ],
    shabdarth: [
      {
        word: 'ਸੀਰਾ ਤਾਤਾ / सीरा ताता',
        meaning: {
          pb: 'ਠੰਢਾ ਅਤੇ ਤੱਤਾ (ਠੰਢਾ-ਗਰਮ ਹੋ ਜਾਣ ਵਾਲਾ)',
          hi: 'ठंडा और गरम (परिवर्तनशील)',
          en: 'Cold and hot (subject to shifting states)',
        },
      },
      {
        word: 'ਜੈਸਾ ਹਰਿ ਹੀ ਹੋਇ / जैसा हरि ही होइ',
        meaning: {
          pb: 'ਜਿਹੋ ਜਿਹਾ ਪ੍ਰਮਾਤਮਾ ਆਪ ਹੈ (ਨਿਰਵਿਕਾਰ, ਸਦਾ ਇੱਕਰਸ)',
          hi: 'जैसा स्वयं परमात्मा है (अविकारी, सदा एकरस)',
          en: 'Immutable and supreme like the Lord Himself',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪਾਣੀ ਵਰਗਾ ਵੀ ਹੋ ਗਿਆ ਤਾਂ ਕੀ ਹੋਇਆ। ਪਾਣੀ ਠੰਢਾ ਤੇ ਤੱਤਾ ਹੋ ਜਾਂਦਾ ਹੈ। ਪ੍ਰਮਾਤਮਾ ਦਾ ਭਗਤ ਐਸਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿ ਹਰੀ ਵਰਗਾ (ਉਸ ਦਾ ਰੂਪ) ਹੀ ਹੋ ਜਾਵੇ॥ ੧੪੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जल की भांति भी बन गए तो क्या हुआ? जल ठंडा और गरम (परिवर्तनशील) हो जाता है। हरि का जन तो स्वयं हरि रूप ही निष्काम व निर्विकार होना चाहिए॥ १४९॥',
      en: 'Satguru Kabir Saheb proclaims: What good is becoming like water, if it changes temperature from cold to hot? The humble servant of the Lord should be like the Divine Lord Himself.',
    },
    chintan: {
      pb: 'ਹਰਿ ਭਗਤ ਸੁਖ-ਦੁੱਖ ਵਿੱਚ ਸਦਾ ਇੱਕਰਸ ਰਹਿੰਦਾ ਹੈ; ਉਹ ਪ੍ਰਭੂ ਦਾ ਸਾਖਿਆਤ ਰੂਪ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'हरि भक्त सुख-दुख में सदा एकरस रहता है; वह स्वयं प्रभु का रूप हो जाता है।',
      en: 'The devotee remains immutable in pain and joy, becoming one with the Supreme.',
    },
    acharana: {
      pb: 'ਮਨ ਨੂੰ ਵਿਕਾਰਾਂ ਅਤੇ ਬਦਲਾਵਾਂ ਤੋਂ ਉੱਪਰ ਚੁੱਕ ਕੇ ਨਿਰੰਕਾਰ ਪ੍ਰਭੂ ਵਰਗਾ ਨਿਰਲੇਪ ਬਣਾਓ।',
      hi: 'मन को विकारों से ऊपर उठाकर निरंकार प्रभु की भांति निर्लेप बनाएं।',
      en: 'Rise above emotional fluctuations and embody the unattached stance of the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਵੱਖਰੀ ਹਸਤੀ ਮਿਟਾ ਕੇ ਹਰਿ ਰੂਪ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਵੋ।',
      hi: 'अपनी पृथक सत्ता मिटाकर हरि रूप में लीन हो जाएं।',
      en: 'Dissolve your separate identity and merge into the form of the Omnipresent Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 150 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-150',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੦: ਊਚ ਭਵਨ ਕਨਕਾਮਨੀ (ਮਧੂਕਰੀ ਤੇ ਸੰਤ ਸੰਗ)',
      hi: 'सलोक १५०: ऊच भवन कनकामनी (मधूकरी व संत संग)',
      en: 'Salok 150: Begged Bread in Holy Company Is Superior to Royal Palaces',
    },
    moolGurmukhi: [
      'ਊਚ ਭਵਨ ਕਨਕਾਮਨੀ ਸਿਖਰਿ ਧਜਾ ਫਹਰਾਇ ॥',
      'ਤਾ ਤੇ ਭਲੀ ਮਧੂਕਰੀ ਸੰਤਸੰਗਿ ਗੁਨ ਗਾਇ ॥੧੫੦॥',
    ],
    moolDevanagari: [
      'ऊच भवन कनकामनी सिखरि धजा फहराइ ॥',
      'ता ते भली मधूकरी संतसंगि गुन गाइ ॥१५०॥',
    ],
    moolRoman: [
      'Ūch bhavan kanakāmanī sikhar dhajā phahrāi.',
      'Tā te bhalī madhūkarī sant-sang gun gāi. ||150||',
    ],
    shabdarth: [
      {
        word: 'ਕਨਕਾਮਨੀ / कनकामनी',
        meaning: {
          pb: 'ਸੋਨਾ (ਕਨਕ) ਅਤੇ ਸੁੰਦਰ ਇਸਤਰੀ (ਕਾਮਿਨੀ)',
          hi: 'स्वर्ण (कनक) और सुंदर स्त्री (कामिनी)',
          en: 'Gold (wealth) and beautiful companions',
        },
      },
      {
        word: 'ਸਿਖਰਿ ਧਜਾ / सिखरि धजा',
        meaning: {
          pb: 'ਮਹਿਲ ਦੀ ਚੋਟੀ ਤੇ ਝੰਡਾ ਫਹਿਰਾਉਣਾ',
          hi: 'भवन के शिखर पर ध्वजा फहराना',
          en: 'Flag flying atop royal palaces',
        },
      },
      {
        word: 'ਮਧੂਕਰੀ / मधूकरी',
        meaning: {
          pb: 'ਭੌਂਰੇ ਵਾਂਗ ਮੰਗ ਕੇ ਮੰਗੀ ਹੋਈ ਸੁੱਕੀ ਰੋਟੀ',
          hi: 'भौंरे की भांति मांगकर खाई सूखी रोटी',
          en: 'Begged bread gathered like nectar by a bee',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਉੱਚੇ ਮਹਿਲ ਮਾੜੀਆਂ, ਸੋਨਾ ਅਥਵਾ ਧਨ ਸੰਪਦਾ ਅਤੇ ਸੁੰਦਰ ਇਸਤਰੀ ਹੋਵੇ ਅਤੇ ਘਰ ਦੀ ਚੋਟੀ ਉਤੇ ਝੰਡਾ ਝੂਲਦਾ ਹੋਵੇ (ਪਰ ਜੇ ਇੱਥੇ ਪ੍ਰਭੂ ਗੁਣ ਨਾ ਗਾਏ ਜਾਣ) ਤਾਂ ਇਸ ਨਾਲੋਂ ਭਿਖਿਆ ਦੀ ਮੰਗੀ ਰੋਟੀ ਚੰਗੀ ਹੈ, ਜਿਸ ਨੂੰ ਖਾ ਕੇ ਪੁਰਸ਼ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿਚ ਬੈਠ ਕੇ ਪ੍ਰਭੂ ਦੇ ਗੁਣ ਗਾਉਂਦਾ ਹੈ॥ ੧੫੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-ऊंचे महल, स्वर्ण, सुंदर स्त्री और भवन के शिखर पर फहराती ध्वजा का क्या लाभ, यदि प्रभु का नाम न हो? उससे तो संत-संगत में बैठकर मांगी हुई सूखी रोटी (मधूकरी) भली है, जिससे प्रभु का यश गाया जा सके॥ १५०॥',
      en: 'Satguru Kabir Saheb proclaims: High mansions, gold, beautiful companions, and flags flying atop palaces are useless without devotion. Far better is dry begged bread eaten in holy company singing the praises of God.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਵੈਭਵ ਬਿਨਾਂ ਭਗਤੀ ਦੇ ਤੁੱਛ ਹੈ; ਸੰਤ ਸੰਗਤ ਵਿੱਚ ਸੁੱਕੀ ਰੋਟੀ ਵੀ ਅੰਮ੍ਰਿਤ ਸਮਾਨ ਹੈ।',
      hi: 'सांसारिक वैभव बिना भक्ति के व्यर्थ है; संत-संगति में सूखी रोटी भी अमृत समान है।',
      en: 'Worldly glory without prayer is worthless; dry bread in holy satsang is pure ambrosia.',
    },
    acharana: {
      pb: 'ਮਾਇਆ ਦੇ ਹੰਕਾਰ ਨੂੰ ਤਿਆਗ ਕੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਪ੍ਰਭੂ ਗੁਣ ਗਾਓ।',
      hi: 'माया के अहंकार को त्यागकर संतों की संगति में प्रभु गुण गाएं।',
      en: 'Forsake royal arrogance and sing praises of the Lord in holy fellowship.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਲਾਲਸਾ ਛੱਡ ਕੇ ਰਾਮ ਭਗਤਾਂ ਦੀ ਚਰਨ ਧੂੜ ਵਿੱਚ ਆਤਮਾ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी लालसा छोड़कर राम भक्तों की चरण धूलि में आत्मा अर्पित करें।',
      en: 'Surrender all desires and dedicate yourself to the service of God’s saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 151 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-151',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੧: ਪਾਟਨ ਤੇ ਊਜਰੁ ਭਲਾ (ਰਾਮ ਭਗਤ ਠਾਇ)',
      hi: 'सलोक १५१: पाटन ते ऊजरु भला (राम भगत ठाइ)',
      en: 'Salok 151: A Wilderness with Saints Is Better Than a Godless City',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਟਨ ਤੇ ਊਜਰੁ ਭਲਾ ਰਾਮ ਭਗਤ ਜਿਹ ਠਾਇ ॥',
      'ਰਾਮ ਸਨੇਹੀ ਬਾਹਰਾ ਜਮ ਪੁਰੁ ਮੇਰੇ ਭਾਂਇ ॥੧੫੧॥',
    ],
    moolDevanagari: [
      'कबीर पाटन ते ऊजरु भला राम भगत जिह ठाइ ॥',
      'राम सनेही बाहरा जम पुरु मेरे भांइ ॥१५१॥',
    ],
    moolRoman: [
      'Kabīr pāṭan te ūjar bhalā Rām bhagat jih ṭhāi.',
      'Rām sanehī bāhrā jam pur mere bhāñi. ||151||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਟਨ / पाटन',
        meaning: {
          pb: 'ਵੱਸਦਾ ਸ਼ਹਿਰ, ਨਗਰ',
          hi: 'बसा हुआ नगर, शहर',
          en: 'Populated city / town',
        },
      },
      {
        word: 'ਊਜਰੁ / ऊजरु',
        meaning: {
          pb: 'ਉਜਾੜ, ਜੰਗਲ, ਇਲਾਕਾ',
          hi: 'उजड़ा स्थान, जंगल',
          en: 'Wilderness / deserted place',
        },
      },
      {
        word: 'ਜਮ ਪੁਰੁ / जम पुरु',
        meaning: {
          pb: 'ਜਮਰਾਜ ਦੀ ਪੁਰੀ, ਨਰਕ',
          hi: 'यमपुरी, नर्क',
          en: 'Abode of Death / Hell',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ! ਸ਼ਹਿਰ ਨਾਲੋਂ ਉਜਾੜ ਚੰਗੀ ਹੈ ਜਿਥੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਭਗਤ ਉਸ ਦੇ ਗੁਣ ਗਾਉਂਦੇ ਹਨ। ਪ੍ਰਮਾਤਮਾ ਦੇ ਪ੍ਰੇਮ ਤੋਂ ਬਿਨਾਂ ਜਿਹੜਾ ਅਸਥਾਨ ਹੈ, ਉਹ ਮੇਰੇ ਵਿਚਾਰ ਵਿੱਚ ਜਮਾਂ ਦੀ ਪੁਰੀ ਨਰਕ ਸਮਾਨ ਹੈ॥ ੧੫੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-भरे-पूरे शहर से तो वह उजड़ा जंगल भला जहाँ भगवान के भक्त प्रभु यश गाते हैं। राम के प्रेम से रहित स्थान मेरे विचार में यमपुरी (नर्क) के समान है॥ १५१॥',
      en: 'Satguru Kabir Saheb proclaims: Better than a grand city is a wilderness where Lord\'s lovers sing His praise. Any place devoid of Divine love is like the Abode of Death to me.',
    },
    chintan: {
      pb: 'ਅਸਲ ਉੱਤਮ ਅਸਥਾਨ ਉਹ ਹੈ ਜਿੱਥੇ ਹਰਿ ਨਾਮ ਦੀ ਚਰਚਾ ਹੁੰਦੀ ਹੈ; ਬਾਕੀ ਸਭ ਨਰਕ ਸਮਾਨ ਹੈ।',
      hi: 'उत्तम स्थान वही है जहाँ हरि नाम का स्मरण हो; शेष सब यमलोक समान है।',
      en: 'The truly sublime place is where God is remembered; all else is like hell.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਤੋਂ ਬੇਮੁਖ ਰੌਲੇ-ਰੱਪੇ ਵਾਲੇ ਸਥਾਨਾਂ ਤੋਂ ਬਚ ਕੇ ਸਤਸੰਗਤ ਦੇ ਘਰ ਵਿੱਚ ਨਿਵਾਸ ਕਰੋ।',
      hi: 'प्रभु विमुख वातावरण से बचकर सत्संगत के वातावरण में निवास करें।',
      en: 'Avoid godless environments and dwell in the atmosphere of holy satsang.',
    },
    samarpan: {
      pb: 'ਰਾਮ ਸਨੇਹੀ ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਆਪਣਾ ਜੀਵਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'राम स्नेही भक्तों की संगति में अपना जीवन अर्पित करें।',
      en: 'Dedicate your life in the inspiring company of God’s true lovers.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 152 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-152',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੨: ਗੰਗ ਜਮੁਨ ਕੇ ਅੰਤਰੇ (ਸਹਜ ਸੁੰਨ ਕੇ ਘਾਟ)',
      hi: 'सलोक १५२: गंग समुन के अंतरे (सहज सुंन के घाट)',
      en: 'Salok 152: Abiding at the Ghat of Sahaj Sunn Beyond Dualities',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗੰਗ ਜਮੁਨ ਕੇ ਅੰਤਰੇ ਸਹਜ ਸੁੰਨ ਕੇ ਘਾਟ ॥',
      'ਤਹਾ ਕਬੀਰੈ ਮਟੁ ਕੀਆ ਖੋਜਤ ਮੁਨਿ ਜਨ ਬਾਟ ॥੧੫੨॥',
    ],
    moolDevanagari: [
      'कबीर गंग समुन के अंतरे सहज सुंन के घाट ॥',
      'तहा कबीरै मटु कीआ खोजत मुनि जन बाट ॥१५२॥',
    ],
    moolRoman: [
      'Kabīr Gang Jamun ke antare sahaj sunn ke ghāṭ.',
      'Tahā Kabīrai maṭ kīā khojat mun jan bāṭ. ||152||',
    ],
    shabdarth: [
      {
        word: 'ਗੰਗ ਜਮੁਨ ਕੇ ਅੰਤਰੇ / गंग समुन के अंतरे',
        meaning: {
          pb: 'ਇੜਾ ਤੇ ਪਿੰਗਲਾ ਨਾੜੀਆਂ ਦੇ ਵਿਚਕਾਰ (ਸੁਖਮਨਾ)',
          hi: 'इड़ा और पिंगला के मध्य (सुषुम्ना संधि)',
          en: 'Between Ida and Pingala (the central Sushumna channel)',
        },
      },
      {
        word: 'ਸਹਜ ਸੁੰਨ / सहज सुंन',
        meaning: {
          pb: 'ਸਹਜ ਅਵਸਥਾ, ਨਿਰਵਿਕਲਪ ਫੁਰਨੇ-ਰਹਿਤ ਸਮਾਧੀ',
          hi: 'सहज शांत निर्विकल्प समाधि',
          en: 'Equipoised state of meditative stillness',
        },
      },
      {
        word: 'ਮਟੁ ਕੀਆ / मटु कीआ',
        meaning: {
          pb: 'ਕੁਟੀਆ, ਨਿਵਾਸ ਅਸਥਾਨ ਬਣਾਇਆ',
          hi: 'कुटिया / निवास बनाया',
          en: 'Built a hut / established spiritual abode',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਗੰਗਾ ਜਮਨਾ ਦੇ ਅੰਦਰ (ਇੜਾ ਪਿੰਗਲਾ ਸੁਖਮਨਾ ਦੀ ਸੰਧੀ) ਜਿੱਥੇ ਮਨ ਦੀ ਅਡੋਲ ਅਵਸਥਾ ਰਹਿੰਦੀ ਹੈ ਅਤੇ ਮਾਇਆ ਦੇ ਫੁਰਨੇ ਨਹੀਂ ਉੱਠਦੇ, ਉਸ (ਸਹਜ ਸੁੰਨ) ਘਾਟ ਉੱਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਨਿਵਾਸ ਕੀਤਾ ਹੈ, ਜਿਸ ਰਸਤੇ ਨੂੰ ਮੁਨੀ ਜਨ ਲੱਭਦੇ ਫਿਰਦੇ ਹਨ॥ ੧੫੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-गंगा और यमुना के मध्य (इड़ा-पिंगला के परे सुषुम्ना-सहज शून्य तट पर) जहाँ शांत निर्विकल्प अवस्था है, वहाँ कबीर ने अपना आश्रम बनाया है, जिसे ऋषि-मुनि खोजते रहते हैं॥ १५२॥',
      en: 'Satguru Kabir Saheb proclaims: Between Ganges and Yamuna, at the ghat of Sahaj Sunn (state of deep meditative equilibrium), Kabir has built his hut—the path that silent sages search for.',
    },
    chintan: {
      pb: 'ਅੰਤਰ ਆਤਮੇ ਵਿੱਚ ਸਹਜ ਸਮਾਧੀ ਪ੍ਰਾਪਤ ਕਰਨਾ ਹੀ ਯੋਗੀਆਂ ਅਤੇ ਭਗਤਾਂ ਦੀ ਉੱਚੀ ਅਵਸਥਾ ਹੈ।',
      hi: 'अंतरात्मा में सहज समाधि प्राप्त करना ही योगियों और भक्तों की उच्चतम अवस्था है।',
      en: 'Attaining inner equipoise and meditative tranquility is the highest goal of seekers.',
    },
    acharana: {
      pb: 'ਦੁਬਿਧਾ ਅਤੇ ਚੰਚਲਤਾ ਤਿਆਗ ਕੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'द्विधा और चंचलता त्यागकर अंतर्मुखी होकर प्रभु का सिमरन करें।',
      en: 'Renounce duality and restlessness; turn inward in silent meditation.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ ਬ੍ਰਿਤੀ ਨੂੰ ਸਹਜ ਸੁੰਨ ਨਿਰੰਜਨ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी चित्तवृत्ति को सहज-शून्य निरंजन प्रभु चरणों में समर्पित करें।',
      en: 'Offer your entire mental consciousness at the feet of the Eternal Formless Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 153 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-153',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੩: ਜੈਸੀ ਉਪਜੀ ਪੇਡ ਤੇ (ਅੰਤ ਤੱਕ ਨਿਭਾਉ)',
      hi: 'सलोक १५३: जैसी उपजीेड ते (अंत तक निष्ठा)',
      en: 'Salok 153: Enduring Initial Pure Devotion Is Worth Millions of Jewels',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੈਸੀ ਉਪਜੀ ਪੇਡ ਤੇ ਜਉ ਤੈਸੀ ਨਿਬਹੈ ਓੜਿ ॥',
      'ਹੀਰਾ ਕਿਸ ਕਾ ਬਾਪੁਰਾ ਪੁਜਹਿ ਨ ਰਤਨ ਕਰੋੜਿ ॥੧੫੩॥',
    ],
    moolDevanagari: [
      'कबीर जैसी उपजीेड ते जउ तैसी निबहै ओड़ਿ ॥',
      'हीरा किस का बापुरा पुजहि न रतन करोड़ਿ ॥१५३॥',
    ],
    moolRoman: [
      'Kabīr jaisī upjī peḍ te jau taisī nibhai oṛ.',
      'Hīrā kis kā bāpurā pujah na ratan karoṛ. ||153||',
    ],
    shabdarth: [
      {
        word: 'ਪੇਡ ਤੇ ਉਪਜੀ / पेड ते उपजी',
        meaning: {
          pb: 'ਬੂਟੇ ਤੋਂ ਉੱਗੀ ਹੋਈ ਕੋਮਲਤਾ/ਸ਼ੁਰੂਆਤੀ ਕੋਮਲ ਪਿਆਰ',
          hi: 'पौधे से प्रस्फुटित कोमलता व आरंभिक शुद्ध प्रेम',
          en: 'The initial tender purity that sprouts at the start',
        },
      },
      {
        word: 'ਓੜਿ / ओड़ि',
        meaning: {
          pb: 'ਅੰਤ ਤੱਕ, ਆਖ਼ਰ ਤੱਕ',
          hi: 'अंत तक, जीवन पर्यंत',
          en: 'To the very end / till death',
        },
      },
      {
        word: 'ਪੁਜਹਿ ਨ / पुजहि न',
        meaning: {
          pb: 'ਬਰਾਬਰੀ ਨਹੀਂ ਕਰ ਸਕਦੇ',
          hi: 'बराबरी नहीं कर सकते',
          en: 'Cannot match or equal',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੈਸੀ ਕੋਮਲਤਾ ਤੇ ਨਵੀਨਤਾ ਨਵੇਂ ਉੱਗੇ ਬੂਟੇ ਵਿਚ ਹੁੰਦੀ ਹੈ, ਜੇ ਐਸੀ ਹੀ ਅੰਤ ਤੱਕ ਬਣੀ ਰਹੇ ਤਾਂ ਫਿਰ ਇੱਕ ਹੀਰਾ ਕੀ ਵਿਚਾਰਾ ਹੈ, ਉਸ ਨੂੰ ਕਰੋੜਾਂ ਰਤਨ ਵੀ ਨਹੀਂ ਪੁੱਜ ਸਕਦੇ, ਭਾਵ ਉਸ ਦੀ ਬਰਾਬਰੀ ਨਹੀਂ ਕਰ ਸਕਦੇ॥ ੧੫੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-प्रारंभिक अवस्था में वृक्ष के अंकुर जैसी जो शुद्धता व भक्ति का भाव उपजता है, यदि अंत तक वैसा ही बना रहे, तो हीरा क्या चीज़ है, करोड़ों रत्न भी उसकी बराबरी नहीं कर सकते॥ १५३॥',
      en: 'Satguru Kabir Saheb proclaims: If the initial innocence and devotion that sprouts at the beginning endures to the very end, then diamonds are nothing—even millions of jewels cannot match such purity.',
    },
    chintan: {
      pb: 'ਭਗਤੀ ਵਿੱਚ ਆਰੰਭ ਤੋਂ ਅੰਤ ਤੱਕ ਇੱਕਰਸ ਨਿਸ਼ਠਾ ਬਣਾਈ ਰੱਖਣਾ ਹੀ ਪਰਮ ਕਮਾਈ ਹੈ।',
      hi: 'भक्ति में आरंभ से अंत तक एकरस निष्ठा बनाए रखना ही परम कमाई है।',
      en: 'Maintaining unwavering devotion from beginning to end is the supreme accomplishment.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਸ਼ਰਧਾ ਅਤੇ ਪ੍ਰੇਮ ਨੂੰ ਕਦੇ ਸੁੱਕਣ ਨਾ ਦਿਓ; ਆਖ਼ਰੀ ਸਾਹ ਤੱਕ ਗੁਰੂ ਸ਼ਬਦ ਤੇ ਦ੍ਰਿੜ੍ਹ ਰਹੋ।',
      hi: 'अपनी श्रद्धा और प्रेम को कभी कम न होने दें; अंतिम श्वास तक गुरु शब्द पर दृढ़ रहें।',
      en: 'Never let your faith diminish; remain steadfast in the Guru’s Word until your last breath.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਨਿਰਮਲ ਨਿਸ਼ਠਾ ਨੂੰ ਸਦਾ ਲਈ ਹਰਿ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी निर्मल निष्ठा को सदा के लिए हरि चरणों में समर्पित करें।',
      en: 'Offer your unsullied devotion eternally at the lotus feet of God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 154 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-154',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੪: ਹੀਰਾ ਹਾਟ ਬਿਕਾਇ (ਪਾਰਖੂ ਬਿਨੁ ਅਜਾਈਂ)',
      hi: 'सलोक १५४: हीरा हाट बिकाइ (पारखी बिन व्यर्थ)',
      en: 'Salok 154: Priceless Diamond Squandered Like Shells Without True Appraiser',
    },
    moolGurmukhi: [
      'ਕਬੀਰਾ ਏਕੁ ਅਚੰਭਉ ਦੇਖਿਓ ਹੀਰਾ ਹਾਟ ਬਿਕਾਇ ॥',
      'ਬਨਜਨਹਾਰੇ ਬਾਹਰਾ ਕਉਡੀ ਬਦਲੈ ਜਾਇ ॥੧੫੪॥',
    ],
    moolDevanagari: [
      'कबीरा एकु अचंभउ देखिओ हीरा हाट बिकाइ ॥',
      'बनजनहारे बाहरा कउडी बदलै जाइ ॥१५४॥',
    ],
    moolRoman: [
      'Kabīrā ek achambhau dekhiō hīrā hāṭ bikāi.',
      'Banjanhāre bāhrā kauḍī badlai jāi. ||154||',
    ],
    shabdarth: [
      {
        word: 'ਅਚੰਭਉ / अचंभउ',
        meaning: {
          pb: 'ਅਸਚਰਜ ਕੌਤਕ, ਅਨੋਖੀ ਗੱਲ',
          hi: 'आश्चर्यजनक दृश्य',
          en: 'Astonishing sight / wonder',
        },
      },
      {
        word: 'ਬਨਜਨਹਾਰੇ ਬਾਹਰਾ / बनजनहारे बाहरा',
        meaning: {
          pb: 'ਪਾਰਖੂ ਜੌਹਰੀ ਤੋਂ ਬਿਨਾਂ',
          hi: 'पारखी व्यापारी/जौहरी के बिना',
          en: 'Without a discerning appraiser or jeweler',
        },
      },
      {
        word: 'ਕਉਡੀ ਬਦਲੈ / कउਡੀ बदलै',
        meaning: {
          pb: 'ਕੌਡੀ ਦੇ ਭਾਅ (ਮੁਫ਼ਤ ਵਰਗਾ ਅਜਾਈਂ)',
          hi: 'कौड़ी के मोल व्यर्थ',
          en: 'In exchange for a cheap shell',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਇੱਕ ਅਸਚਰਜ ਗੱਲ ਵੇਖੀ ਹੈ ਕਿ ਹੀਰਾ ਹੱਟੀ ਹੱਟੀ ਵਿਕ ਰਿਹਾ ਹੈ ਪਰ ਉਸ ਦੇ ਪਾਰਖੂ ਜੌਹਰੀ ਤੋਂ ਬਿਨਾਂ ਉਹ ਇੱਕ ਕੌਡੀ ਦੇ ਭਾਅ ਜਾ ਰਿਹਾ ਹੈ। ਇਹ ਮਨੁੱਖਾ ਜਨਮ ਇੱਕ ਹੀਰੇ ਦੇ ਸਮਾਨ ਅਮੋਲਕ ਹੈ। ਜਿਹੜੇ ਇਸ ਨੂੰ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਨਹੀਂ ਲਾਉਂਦੇ, ਉਹ ਮਾਇਆ ਦੇ ਵਿਹਾਰਾਂ ਵਿੱਚ ਇਸ ਨੂੰ ਅਜਾਈਂ ਗਵਾ ਲੈਂਦੇ ਹਨ॥ ੧੫੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैंने एक आश्चर्य देखा कि अनमोल हीरा बाजार में बिक रहा है, परंतु पारखी जौहरी के बिना वह कौड़ी के मोल जा रहा है। यह मनुष्य जन्म भी अनमोल हीरा है, जिसे अज्ञानी कौड़ी के मोल व्यर्थ गंवा देते हैं॥ १५४॥',
      en: 'Satguru Kabir Saheb proclaims: I saw a strange sight—a priceless diamond was being sold in the market, but lacking a knowledgeable jeweler, it was exchanged for a mere shell. So is human life squandered without devotion.',
    },
    chintan: {
      pb: 'ਮਨੁੱਖੀ ਜੀਵਨ ਅਮੋਲਕ ਹੀਰਾ ਹੈ; ਇਸ ਦਾ ਮੁੱਲ ਕੇਵਲ ਪੂਰਾ ਗੁਰੂ ਜੌਹਰੀ ਹੀ ਜਾਣਦਾ ਹੈ।',
      hi: 'मनुष्य जीवन अनमोल हीरा है; इसका मूल्य केवल पूरा गुरु जौहरी ही जानता है।',
      en: 'Human life is a priceless diamond; its true value is appraised only by the Perfect Guru.',
    },
    acharana: {
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਨੂੰ ਮਾਇਆ ਦੀ ਕੌਡੀ ਬਦਲੇ ਵਿਅਰਥ ਨਾ ਗਵਾਓ, ਸ਼ਬਦ ਦੀ ਕਮਾਈ ਕਰੋ।',
      hi: 'मनुष्य जन्म को माया की कौड़ी में व्यर्थ न गंवाएं, शब्द की कमाई करें।',
      en: 'Do not waste this priceless life for petty material gain; earn the wealth of the Word.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਅਮੋਲਕ ਸਵਾਸਾਂ ਦੇ ਹੀਰੇ ਨੂੰ ਸਤਿਗੁਰੂ ਜੌਹਰੀ ਅੱਗੇ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने अनमोल श्वासों के हीरे को सतगुरु जौहरी के चरणों में समर्पित करें।',
      en: 'Surrender the diamond of your breaths at the feet of the Guru Appraiser.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 155 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-155',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੫: ਜਹਾ ਗਿਆਨੁ ਤਹ ਧਰਮੁ ਹੈ (ਜਹਾ ਖਿਮਾ ਤਹ ਆਪਿ)',
      hi: 'सलोक १५५: जहा गिआनु तह धरमु है (जहा खिमा तह आपि)',
      en: 'Salok 155: Where Forgiveness Dwells, God Himself Abides',
    },
    moolGurmukhi: [
      'ਕਬੀਰਾ ਜਹਾ ਗਿਆਨੁ ਤਹ ਧਰਮੁ ਹੈ ਜਹਾ ਝੂਠੁ ਤਹ ਪਾਪੁ ॥',
      'ਜਹਾ ਲੋਭੁ ਤਹ ਕਾਲੁ ਹੈ ਜਹਾ ਖਿਮਾ ਤਹ ਆਪਿ ॥੧੫੫॥',
    ],
    moolDevanagari: [
      'कबीरा जहा गिआनु तह धरमु है जहा झूथु तह पापु ॥',
      'जहा लोभु तह कालु है जहा खिमा तह आपि ॥१५५॥',
    ],
    moolRoman: [
      'Kabīrā jahā giān tah dharam hai jahā jhūṭh tah pāp.',
      'Jahā lobh tah kāl hai jahā khimā tah āp. ||155||',
    ],
    shabdarth: [
      {
        word: 'ਗਿਆਨੁ / गिआनु',
        meaning: {
          pb: 'ਆਤਮ-ਗਿਆਨ, ਪ੍ਰਭੂ ਦੀ ਸੋਝੀ',
          hi: 'आत्म-ज्ञान, प्रभु की सूझ',
          en: 'Divine knowledge / spiritual wisdom',
        },
      },
      {
        word: 'ਕਾਲੁ / कालु',
        meaning: {
          pb: 'ਆਤਮਿਕ ਮੌਤ, ਕਾਲ ਚੱਕਰ',
          hi: 'आध्यात्मिक मृत्यु, काल चक्र',
          en: 'Spiritual death / time of destruction',
        },
      },
      {
        word: 'ਖਿਮਾ ਤਹ ਆਪਿ / खिमा तह आपि',
        meaning: {
          pb: 'ਜਿੱਥੇ ਦਇਆ ਤੇ ਖਿਮਾ ਹੈ ਉੱਥੇ ਪ੍ਰਭੂ ਆਪ ਵੱਸਦਾ ਹੈ',
          hi: 'जहाँ क्षमा व दया है वहाँ परमात्मा स्वयं बसते हैं',
          en: 'Where there is forgiveness, God Himself abides',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿੱਥੇ ਜਿਸ ਮਨੁੱਖ ਦੇ ਅੰਦਰ ਪ੍ਰਭੂ ਦੀ ਬਖਸ਼ਿਸ਼ ਦਾ ਗਿਆਨ ਹੋਵੇ ਉੱਥੇ ਧਰਮ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਜਿੱਥੇ ਝੂਠ ਹੈ ਉੱਥੇ ਪਾਪ ਹੁੰਦਾ ਹੈ। ਫਿਰ ਜਿੱਥੇ ਲੋਭ ਲਾਲਚ ਹੋਵੇ ਉੱਥੇ ਅਧਿਆਤਮਿਕ ਮੌਤ (ਕਾਲ) ਹੁੰਦੀ ਹੈ ਅਤੇ ਜਿਸ ਹਿਰਦੇ ਵਿੱਚ ਖਿਮਾ ਤੇ ਦਇਆ ਹੋਵੇ ਉੱਥੇ ਪ੍ਰਮਾਤਮਾ ਆਪ ਵੱਸਦਾ ਹੈ॥ ੧੫੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जहाँ आत्म-ज्ञान है वहाँ धर्म है, जहाँ झूठ है वहाँ पाप है। जहाँ लोभ है वहाँ मृत्यु (काल) है और जहाँ क्षमा व दया है वहाँ स्वयं परमात्मा का निवास है॥ १५५॥',
      en: 'Satguru Kabir Saheb proclaims: Where there is divine knowledge, there is righteousness; where there is falsehood, there is sin. Where there is greed, there is spiritual death; where there is forgiveness, God Himself abides.',
    },
    chintan: {
      pb: 'ਖਿਮਾ ਅਤੇ ਦਇਆ ਹੀ ਪਰਮਾਤਮਾ ਦੇ ਨਿਵਾਸ ਦਾ ਸਾਖਿਆਤ ਅਸਥਾਨ ਹਨ।',
      hi: 'क्षमा और दया ही परमात्मा के निवास का साक्षात स्थान हैं।',
      en: 'Forgiveness and compassion form the true sanctuary where God dwells.',
    },
    acharana: {
      pb: 'ਝੂਠ ਅਤੇ ਲੋਭ ਦਾ ਤਿਆਗ ਕਰੋ; ਹਿਰਦੇ ਵਿੱਚ ਖਿਮਾ ਅਤੇ ਗਿਆਨ ਧਾਰਨ ਕਰੋ।',
      hi: 'झूठ और लोभ का त्याग करें; हृदय में क्षमा और ज्ञान धारण करें।',
      en: 'Forsake falsehood and greed; embrace forgiveness and spiritual wisdom.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਵਿੱਚੋਂ ਲੋਭ ਮਿਟਾ ਕੇ ਖਿਮਾ ਰੂਪੀ ਹਰੀ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਹੋਵੋ।',
      hi: 'अपने मन से लोभ मिटाकर क्षमा रूपी हरि चरणों में समर्पित हों।',
      en: 'Erase greed and surrender yourself to the Lord who embodies forgiveness.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 156 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-156',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੬: ਮਾਇਆ ਤਜੀ ਤ ਕਿਆ ਭਇਆ (ਮਾਨੁ ਤਜਿਆ ਨਹੀ)',
      hi: 'सलोक १५६: माइआ तजी त किआ भइआ (मानु तजिआ नही)',
      en: 'Salok 156: Renouncing Wealth Means Nothing If Ego Is Not Abandoned',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਇਆ ਤਜੀ ਤ ਕਿਆ ਭਇਆ ਜਉ ਮਾਨੁ ਤਜਿਆ ਨਹੀ ਜਾਇ ॥',
      'ਮਾਨ ਮੁਨੀ ਮੁਨਿਵਰ ਗਲੇ ਮਾਨੁ ਸਭੈ ਕਉ ਖਾਇ ॥੧੫੬॥',
    ],
    moolDevanagari: [
      'कबीर माइआ तजी त किआ भइआ जउ मानु तजिआ नही जाइ ॥',
      'मान मुनी मुनिवर गले मानु सभै कउ खाइ ॥१५६॥',
    ],
    moolRoman: [
      'Kabīr māiā tajī ta kiā bhaīā jau mān tajiā nahī jāi.',
      'Mān munī munivar gale mān sabhai kau khāi. ||156||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਨੁ / मानु',
        meaning: {
          pb: 'ਅਹੰਕਾਰ, ਮਾਨ-ਵਡਿਆਈ ਦੀ ਇੱਛਾ',
          hi: 'अहंकार, मान-प्रतिष्ठा की चाह',
          en: 'Pride / desire for status and honor',
        },
      },
      {
        word: 'ਮੁਨਿਵਰ ਗਲੇ / मुनिवर गले',
        meaning: {
          pb: 'ਵੱਡੇ-ਵੱਡੇ ਰਿਸ਼ੀ ਮੁਨੀ ਨਸ਼ਟ ਹੋ ਗਏ',
          hi: 'बड़े-बड़े मुनि व तपस्वी नष्ट हो गए',
          en: 'Great silent sages and hermits were ruined',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਮਾਇਆ ਤਿਆਗ ਦਿੱਤੀ ਤਾਂ ਕੀ ਹੋਇਆ, ਜੇਕਰ ਮਨ ਦਾ ਹੰਕਾਰ ਨਹੀਂ ਤਿਆਗਿਆ ਜਾਂਦਾ। ਕਿਉਂਕਿ ਵੱਡੇ ਮੁਨੀ ਤੇ ਰਿਸ਼ੀ ਇਸ ਹੰਕਾਰ ਵਿਚ ਹੀ ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ ਅਤੇ ਇਹ ਹੰਕਾਰ ਹੀ ਸਭ ਪ੍ਰਾਣੀ ਮਾਤਰ ਨੂੰ ਖਾ ਜਾਂਦਾ ਹੈ॥ ੧੫੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि माया छोड़ भी दी तो क्या हुआ, यदि मन का अहंकार नहीं छूटा? बड़े-बड़े मुनि और ऋषि इस अहंकार के कारण नष्ट हो गए; अहंकार सभी जीवों को खा जाता है॥ १५६॥',
      en: 'Satguru Kabir Saheb proclaims: What if one renounces wealth, if pride of the mind is not abandoned? Pride has destroyed even silent sages and great hermits; pride consumes everyone.',
    },
    chintan: {
      pb: 'ਸਭ ਤੋਂ ਵੱਡਾ ਤਿਆਗ ਮਨ ਦੇ ਅਹੰਕਾਰ ਅਤੇ ਵਡਿਆਈ ਦੀ ਚਾਹ ਦਾ ਤਿਆਗ ਹੈ।',
      hi: 'सबसे बड़ा त्याग मन के अहंकार और मान की चाह का त्याग है।',
      en: 'The ultimate renunciation is giving up ego and the desire for self-glorification.',
    },
    acharana: {
      pb: 'ਧਨ-ਦੌਲਤ ਦੇ ਤਿਆਗ ਦਾ ਹੰਕਾਰ ਨਾ ਕਰੋ, ਮਨੁੱਖਤਾ ਦੇ ਨਿਮਾਣੇ ਸੇਵਕ ਬਣੋ।',
      hi: 'त्याग का अहंकार न करें, नम्रतापूर्वक प्रभु भक्ति करें।',
      en: 'Do not take pride in your outer renunciation; serve with genuine humility.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਾਨ ਨੂੰ ਹਰਿ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਨਿਰਅਹੰਕਾਰੀ ਹੋਵੋ।',
      hi: 'अपने मान-प्रतिष्ठा के मोह को हरि चरणों में अर्पित करके निरहंकारी हों।',
      en: 'Surrender all self-pride and prestige at the lotus feet of the Almighty.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 157 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-157',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੭: ਸਾਚਾ ਸਤਿਗੁਰੁ ਮੈ ਮਿਲਿਆ (ਸਬਦੁ ਜੁ ਬਾਹਿਆ)',
      hi: 'सलोक १५७: साचा सतिगुरु मै मिलिआ (सबदु जु बाहिआ)',
      en: 'Salok 157: Struck by the Arrow of the True Guru’s Word',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਚਾ ਸਤਿਗੁਰੁ ਮੈ ਮਿਲਿਆ ਸਬਦੁ ਜੁ ਬਾਹਿਆ ਏਕੁ ॥',
      'ਲਾਗਤ ਹੀ ਭੁਇ ਮਿਲਿ ਗਇਆ ਪਰਿਆ ਕਲੇਜੇ ਛੇਕੁ ॥੧੫੭॥',
    ],
    moolDevanagari: [
      'कबीर साचा सतिगुरु मै मिलिआ सबदु जु बाहिआ एकु ॥',
      'लागत ही भुइ मिलि गइआ परिआ कलेजे छेकु ॥१५७॥',
    ],
    moolRoman: [
      'Kabīr sāchā satgur mai miliā sabad ju bāhiā ek.',
      'Lāgat hī bhui mil gaiā pariā kaleje chhek. ||157||',
    ],
    shabdarth: [
      {
        word: 'ਸਬਦੁ ਬਾਹਿਆ / सबदु बाहिआ',
        meaning: {
          pb: 'ਸ਼ਬਦ ਉਪਦੇਸ਼ ਰੂਪੀ ਬਾਣ ਚਲਾਇਆ',
          hi: 'शब्द उपदेश रूपी बाण चलाया',
          en: 'Shot a single arrow of spiritual instruction',
        },
      },
      {
        word: 'ਭੁਇ ਮਿਲਿ ਗਇਆ / भुइ मिलि गइआ',
        meaning: {
          pb: 'ਧਰਤੀ ਤੇ ਡਿੱਗ ਪਿਆ (ਅਹੰਕਾਰ ਮਿਟ ਗਿਆ, ਨਿਮਰ ਹੋ ਗਿਆ)',
          hi: 'धरती पर गिर पड़ा (अहंकार मिट गया)',
          en: 'Fell humble to the earth (ego dissolved)',
        },
      },
      {
        word: 'ਕਲੇਜੇ ਛੇਕੁ / कलेजे छेकु',
        meaning: {
          pb: 'ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰੇਮ ਦਾ ਸੁਰਾਖ (ਪ੍ਰੇਮ ਨਾਲ ਬਿੰਧਿਆ ਗਿਆ)',
          hi: 'हृदय में प्रेम का छेद (प्रेम में बिंध गया)',
          en: 'Heart pierced with divine love',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਨੂੰ ਸੱਚਾ ਪੂਰਾ ਸਤਿਗੁਰੂ ਮਿਲਿਆ, ਉਸ ਨੇ ਮੈਨੂੰ ਇੱਕ ਰਾਮ ਉਪਦੇਸ਼ ਰੂਪੀ ਬਾਣ ਮਾਰਿਆ, ਜਿਸ ਦੇ ਲੱਗਣ ਸਾਰ ਹੀ ਮੈਂ ਧਰਤੀ ਨਾਲ ਮਿਲ ਗਿਆ (ਮੇਰੇ ਮਨ ਵਿੱਚ ਨਿਮਰਤਾ ਆ ਗਈ) ਅਤੇ ਮੇਰਾ ਹਿਰਦਾ ਗੁਰੂ ਪ੍ਰੇਮ ਨਾਲ ਵਿੰਨ੍ਹਿਆ ਗਿਆ॥ ੧੫੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मुझे सच्चे सतगुरु मिले, जिन्होंने उपदेश रूपी एक ऐसा बाण चलाया कि लगते ही मैं धरती पर आ गिरा (अहंकार मिट गया और नम्रता आ गई) और मेरा हृदय प्रभु-प्रेम में बिंध गया॥ १५७॥',
      en: 'Satguru Kabir Saheb proclaims: I met the True Guru who struck me with a single arrow of the Word; the moment it struck, I fell humble to the ground, my heart pierced with Divine love.',
    },
    chintan: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਅਹੰਕਾਰ ਨੂੰ ਮੇਟ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਪ੍ਰਕਾਸ਼ ਕਰਦਾ ਹੈ।',
      hi: 'सतगुरु का उपदेश अहंकार को मिटाकर हृदय में प्रभु प्रेम का प्रकाश करता है।',
      en: 'The True Guru’s instruction shatters ego and kindles Divine love in the heart.',
    },
    acharana: {
      pb: 'ਗੁਰੂ ਦੇ ਸ਼ਬਦ-ਬਾਣ ਅੱਗੇ ਆਪਣੀ ਦੇਹ ਤੇ ਮਨ ਨੂੰ ਬਿਨਾਂ ਸ਼ਰਤ ਝੁਕਾ ਦਿਓ।',
      hi: 'गुरु के शब्द-बाण के आगे अपने तन-मन को बिना शर्त झुका दें।',
      en: 'Surrender mind and body unconditionally before the arrow of the Guru’s Word.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਵਿੰਨ੍ਹਿਆ ਹੋਇਆ ਹਿਰਦਾ ਸਤਿਗੁਰੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना प्रेम-बिंधा हृदय सतगुरु के पावन चरणों में अर्पित करें।',
      en: 'Offer your love-pierced heart entirely at the sacred feet of the True Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 158 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-158',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੮: ਸਿਖਾ ਮਹਿ ਚੂਕ (ਜਿਉ ਬਾਂਸੁ ਬਜਾਈਐ ਫੂਕ)',
      hi: 'सलोक १५८: सिखा महि चूक (जिउ बांसु बजाईऐ फूक)',
      en: 'Salok 158: The Flawed Disciple Is Like Hollow Bamboo',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਚਾ ਸਤਿਗੁਰੁ ਕਿਆ ਕਰੈ ਜਉ ਸਿਖਾ ਮਹਿ ਚੂਕ ॥',
      'ਅੰਧੇ ਏਕ ਨ ਲਾਗਈ ਜਿਉ ਬਾਂਸੁ ਬਜਾਈਐ ਫੂਕ ॥੧੫੮॥',
    ],
    moolDevanagari: [
      'कबीर साचा सतिगुरु किआ करै जउ सिखा महि चूक ॥',
      'अंधे एक न लागई जिउ बांसु बजाईऐ फूक ॥१५८॥',
    ],
    moolRoman: [
      'Kabīr sāchā satgur kiā karai jau sikhā mah chūk.',
      'Andhe ek na lāgī jiu bāns bajāīai phūk. ||158||',
    ],
    shabdarth: [
      {
        word: 'ਸਿਖਾ ਮਹਿ ਚੂਕ / सिखा महि चूक',
        meaning: {
          pb: 'ਸਿੱਖਾਂ (ਚੇਲਿਆਂ) ਦੇ ਆਪਣੇ ਸੁਭਾਅ ਵਿੱਚ ਖੋਟ ਜਾਂ ਭੁੱਲ',
          hi: 'शिष्यों के अपने स्वभाव में खोट या भूल',
          en: 'Flaw / resistance in the disciple’s own nature',
        },
      },
      {
        word: 'ਬਾਂਸੁ ਬਜਾਈਐ ਫੂਕ / बांसु बजाईऐ फूक',
        meaning: {
          pb: 'ਬਾਂਸ ਵਿੱਚ ਫੂਕ ਮਾਰੀਏ ਤਾਂ ਆਰ-ਪਾਰ ਨਿਕਲ ਜਾਂਦੀ ਹੈ',
          hi: 'बांस में फूंक मारने पर हवा आर-पार निकल जाती है',
          en: 'Blowing wind through hollow bamboo passes straight through',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੱਚਾ ਸਤਿਗੁਰੂ ਕੀ ਕਰ ਸਕਦਾ ਹੈ, ਜੇਕਰ ਚੇਲਿਆਂ (ਸਿੱਖਾਂ) ਵਿੱਚ ਹੀ ਊਣਤਾਈ ਹੋਵੇ। ਅਹੰਕਾਰ ਵਿੱਚ ਅੰਨ੍ਹੇ ਹੋਏ ਮਨੁੱਖ ਨੂੰ ਇੱਕ ਗੱਲ ਵੀ ਸਿੱਖਿਆ ਦੀ ਨਹੀਂ ਲੱਗਦੀ, ਜਿਵੇਂ ਵਾਂਸ ਵਿੱਚ ਫੂਕ ਮਾਰੀਏ ਤਾਂ ਉਹ ਆਰ-ਪਾਰ ਲੰਘ ਜਾਂਦੀ ਹੈ ਕਿਉਂਕਿ ਵਾਂਸ ਅੰਦਰੋਂ ਪੋਲਾ ਤੇ ਗੁਣਹੀਨ ਹੁੰਦਾ ਹੈ॥ ੧੫੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सच्चा सतगुरु क्या करे यदि शिष्यों में ही खोट हो? अहंकार में अंधे जीव को उपदेश की एक बात भी असर नहीं करती, जैसे बांस में फूँक मारने पर हवा आर-पार निकल जाती है॥ १५८॥',
      en: 'Satguru Kabir Saheb proclaims: What can the True Guru do if the disciple is flawed? To one blinded by pride, not a single lesson hits home, just as blowing wind through hollow bamboo passes straight through.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਤਾਂ ਹੀ ਅਸਰ ਕਰਦਾ ਹੈ ਜੇਕਰ ਸਿੱਖ ਦੇ ਮਨ ਵਿੱਚ ਨਿਮਰਤਾ ਤੇ ਗ੍ਰਹਿਣਸ਼ੀਲਤਾ ਹੋਵੇ।',
      hi: 'गुरु का उपदेश तभी फलित होता है जब शिष्य का मन नम्र और ग्रहणशील हो।',
      en: 'The Guru’s teaching bears fruit only when the disciple’s heart is humble and receptive.',
    },
    acharana: {
      pb: 'ਅੰਦਰਲੀ ਅਹੰਕਾਰੀ ਪੋਲ/ਖਾਲੀਪਨ ਦੂਰ ਕਰਕੇ ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਓ।',
      hi: 'आंतरिक अहंकारी खोखलेपन को दूर करके गुरु वचनों को हृदय में धारण करें।',
      en: 'Eliminate hollow pride and absorb the Guru’s nectar words into your soul.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਲਾਕੀ ਤੇ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਪੂਰੇ ਭਰੋਸੇ ਨਾਲ ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'अपनी चालाकी और अहंकार छोड़कर पूर्ण विश्वास से गुरु चरणों में समर्पित हों।',
      en: 'Abandon all egoistic resistance and surrender completely to the True Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 159 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-159',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੫੯: ਛਤ੍ਰਪਤੀ ਕੀ ਨਾਰਿ (ਹਰਿ ਜਨ ਕੀ ਪਨਿਹਾਰਿ)',
      hi: 'सलोक १५९: छत्रपती की नारि (हरि जन की पनिहारि)',
      en: 'Salok 159: The Queen Cannot Match the Humble Devotee’s Water-Carrier',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹੈ ਗੈ ਬਾਹਨ ਸਘਨ ਘਨ ਛਤ੍ਰਪਤੀ ਕੀ ਨਾਰਿ ॥',
      'ਤਾਸੁ ਪਟੰਤਰ ਨਾ ਪੁਜੈ ਹਰਿ ਜਨ ਕੀ ਪਨਿਹਾਰਿ ॥੧੫੯॥',
    ],
    moolDevanagari: [
      'कबीर है गै बाहन सघन घन छत्रपती की नारि ॥',
      'तासु पटंतर ना पुजै हरि जन की पनिहारि ॥१५९॥',
    ],
    moolRoman: [
      'Kabīr hai gai bāhan saghan ghan chhatrapatī kī nār.',
      'Tās paṭantar nā pujai Har jan kī panihār. ||159||',
    ],
    shabdarth: [
      {
        word: 'ਹੈ ਗੈ / है गै',
        meaning: {
          pb: 'ਘੋੜੇ (ਹੈ) ਅਤੇ ਹਾਥੀ (ਗੈ)',
          hi: 'घोड़े (हय) और हाथी (गज)',
          en: 'Horses and elephants of royal parade',
        },
      },
      {
        word: 'ਪਨਿਹਾਰਿ / पनिहारि',
        meaning: {
          pb: 'ਪਾਣੀ ਭਰਨ ਵਾਲੀ ਦਾਸੀ',
          hi: 'पानी भरने वाली दासी',
          en: 'Humble water-carrier woman',
        },
      },
      {
        word: 'ਪਟੰਤਰ / पटंतर',
        meaning: {
          pb: 'ਬਰਾਬਰੀ, ਤੁਲਨਾ',
          hi: 'बराबरी, समानता',
          en: 'Equality / comparison',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਘੋੜੇ ਹਾਥੀ, ਆਦਿ ਸਵਾਰੀ ਬੇਅੰਤ ਸਾਧਨਾ ਵਾਲੇ ਛੱਤ੍ਰਧਾਰੀ ਰਾਜੇ ਦੀ ਇਸਤ੍ਰੀ ਉਸ ਇਸਤ੍ਰੀ ਦੀ ਬਰਾਬਰੀ ਨਹੀਂ ਕਰ ਸਕਦੀ, ਜਿਹੜੀ ਪ੍ਰਭੂ ਭਗਤਾਂ ਦਾ ਪਾਣੀ ਭਰਨ ਵਾਲੀ ਹੈ॥ ੧੫੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हाथी, घोड़े और विशाल वैभव वाले राजा की रानी भी उस विनम्र दासी की बराबरी नहीं कर सकती, जो प्रभु-भक्तों के घर पानी भरती है॥ १५९॥',
      en: 'Satguru Kabir Saheb proclaims: The queen of a king with vast armies, horses, and elephants cannot equal the humble water-carrier woman who serves the devotees of God.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਰਾਜ-ਭੋਗ ਭਗਤਾਂ ਦੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਅੱਗੇ ਅਤਿ ਤੁੱਛ ਹਨ।',
      hi: 'सांसारिक राज-भोग भक्तों की निष्काम सेवा के समक्ष अत्यंत तुच्छ हैं।',
      en: 'Royal luxuries pale in comparison to humble, selfless service of God’s saints.',
    },
    acharana: {
      pb: 'ਰਾਜਸੀ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਪ੍ਰਭੂ ਭਗਤਾਂ ਦੀ ਨਿਮਾਣੀ ਸੇਵਾ ਕਰਨ ਦਾ ਵਡਭਾਗ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'सांसारिक अहंकार छोड़कर प्रभु भक्तों की नम्र सेवा करने का सौभाग्य प्राप्त करें।',
      en: 'Abandon worldly status and embrace the blessed fortune of serving holy devotees.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਹਰਿ ਜਨਾਂ ਦੀ ਚਰਨ ਸੇਵਾ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी आत्मा को हरि जनों की चरण सेवा में समर्पित करें।',
      en: 'Offer your soul in humble devotion at the feet of God’s servants.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 160 (Ang 1372)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-160',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੬੦: ਨ੍ਰਿਪ ਨਾਰੀ ਕਿਉ ਨਿੰਦੀਐ (ਹਰਿ ਚੇਰੀ ਕਉ ਮਾਨੁ)',
      hi: 'सलोक १६०: न्रिप नारी किउ निंदीऐ (हरि चेरी कउ मानु)',
      en: 'Salok 160: Why the Queen Is Criticized and the Servant Woman Honored',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨ੍ਰਿਪ ਨਾਰੀ ਕਿਉ ਨਿੰਦੀਐ ਕਿਉ ਹਰਿ ਚੇਰੀ ਕਉ ਮਾਨੁ ॥',
      'ਓਹ ਮਾਂਗ ਸਵਾਰੈ ਬਿਖੈ ਕਉ ਓਹ ਸਿਮਰੈ ਹਰਿ ਨਾਮੁ ॥੧੬੦॥',
    ],
    moolDevanagari: [
      'कबीर न्रिप नारी किउ निंदीऐ किउ हरि चेरी कउ मानु ॥',
      'ओह मांग सवारै बिखै कउ ओह सिमरै हरि नामु ॥१६०॥',
    ],
    moolRoman: [
      'Kabīr nrip nārī kiu nindīai kiu Har cherī kau mān.',
      'Oh māng savārai bikhai kau oh simrai Har nām. ||160||',
    ],
    shabdarth: [
      {
        word: 'ਨ੍ਰਿਪ ਨਾਰੀ / न्रिप नारी',
        meaning: {
          pb: 'ਰਾਜੇ ਦੀ ਰਾਣੀ',
          hi: 'राजा की रानी',
          en: 'The Queen of a King',
        },
      },
      {
        word: 'ਹਰਿ ਚੇਰੀ / हरि चेरी',
        meaning: {
          pb: 'ਹਰੀ ਦੇ ਭਗਤਾਂ ਦੀ ਦਾਸੀ',
          hi: 'हरि भक्तों की दासी',
          en: 'The humble servant woman of God’s devotees',
        },
      },
      {
        word: 'ਮਾਂਗ ਸਵਾਰੈ ਬਿਖੈ ਕਉ / मांग सवारै बिखै कउ',
        meaning: {
          pb: 'ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ (ਕਾਮ) ਲਈ ਸਿੰਗਾਰ ਕਰਦੀ ਹੈ',
          hi: 'विषय-विकारों के लिए श्रृंगार करती है',
          en: 'Adorns herself for worldly sensual indulgence',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਛਤਰਪਤੀ ਰਾਜੇ ਦੀ ਰਾਣੀ ਨੂੰ ਕਿਉਂ ਨਿੰਦਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸੰਤ ਮਹਾਤਮਾ ਦੀ ਦਾਸੀ ਨੂੰ ਕਿਉਂ ਵਡਿਆਈ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ? ਇਸ ਦਾ ਕਾਰਨ ਇਹ ਹੈ ਕਿ ਰਾਜੇ ਦੀ ਰਾਣੀ ਆਪਣੀ ਕਾਮ ਪੂਰਤੀ ਵਾਸਤੇ ਆਪਣੇ ਸਿਰ ਦੀ (ਮਾਂਗ) ਚੀਰਨੀ ਨੂੰ ਸੰਧੂਰ ਆਦਿਕ ਲਾ ਕੇ ਸਵਾਰਦੀ ਰਹਿੰਦੀ ਹੈ ਅਤੇ ਸੰਤਾਂ ਦੀ ਦਾਸੀ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿਚ ਹਰੀ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਦੀ ਹੈ॥ ੧੬੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-राजा की रानी की निंदा और संत की दासी का सम्मान क्यों होता है? क्योंकि राजा की रानी वासना के लिए श्रृंगार करती है, जबकि संत की दासी प्रभु के नाम का स्मरण करती है॥ १६०॥',
      en: 'Satguru Kabir Saheb proclaims: Why is the king’s queen criticized and the Lord’s servant woman honored? The queen adorns herself for sensual pleasure, while the humble servant woman meditates on the Divine Name.',
    },
    chintan: {
      pb: 'ਉੱਤਮਤਾ ਬਾਹਰੀ ਸੁੰਦਰਤਾ ਜਾਂ ਪਦਵੀ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਨਾਮ ਸਿਮਰਨ ਦੇ ਸੁਭਾਅ ਵਿੱਚ ਹੈ।',
      hi: 'उत्तमता बाहरी सुंदरता या पदवी में नहीं, बल्कि नाम स्मरण के स्वभाव में है।',
      en: 'True nobility is not found in royal stature or outer beauty, but in devotion to God.',
    },
    acharana: {
      pb: 'ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਦਾ ਸ਼ਿੰਗਾਰ ਛੱਡ ਕੇ ਆਤਮਾ ਨੂੰ ਹਰਿ ਨਾਮ ਦੀ ਭਗਤੀ ਨਾਲ ਸਵਾਰੋ।',
      hi: 'विषय-विकारों का श्रृंगार छोड़कर आत्मा को हरि नाम की भक्ति से सजाएं।',
      en: 'Discard sensual ornamentation; adorn your soul with the jewel of the Divine Name.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਸਮਾਂ ਅਤੇ ਧਿਆਨ ਵਿਕਾਰਾਂ ਤੋਂ ਹਟਾ ਕੇ ਨਿਰੰਜਨ ਹਰਿ ਨਾਮ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना समय और ध्यान विकारों से हटाकर निरंजन हरि नाम में समर्पित करें।',
      en: 'Redirect your mind from worldly pleasures and offer it to the Name of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 161 (Ang 1372 / 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-161',
    category: 'salok',
    ang: 1372,
    title: {
      pb: 'ਸਲੋਕ ੧੬੧: ਥੂਨੀ ਪਾਈ ਥਿਤਿ ਭਈ (ਮਾਨ ਸਰੋਵਰ ਤੀਰ)',
      hi: 'सलोक १६१: थूनी पाई थिति भई (मान सरोवर तीर)',
      en: 'Salok 161: Steadfast Peace Attained Through the Satguru’s Pillar of Word',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਥੂਨੀ ਪਾਈ ਥਿਤਿ ਭਈ ਸਤਿਗੁਰ ਬੰਧੀ ਧੀਰ ॥',
      'ਕਬੀਰ ਹੀਰਾ ਬਨਜਿਆ ਮਾਨ ਸਰੋਵਰ ਤੀਰ ॥੧੬੧॥',
    ],
    moolDevanagari: [
      'कबीर थूनी पाई थिति भई सतिगुर बांधी धीर ॥',
      'कबीर हीरा बनजिआ मान सरोवर तीर ॥१६१॥',
    ],
    moolRoman: [
      'Kabīr thūnī pāī thit bhaī satgur bandhī dhīr.',
      'Kabīr hīrā banjiā mān sarovar tīr. ||161||',
    ],
    shabdarth: [
      {
        word: 'ਥੂਨੀ / थूनी',
        meaning: {
          pb: 'ਥੰਮੀ, ਮਨ ਨੂੰ ਟਿਕਾਉਣ ਵਾਲਾ ਸ਼ਬਦ ਰੂਪੀ ਥੰਮ੍ਹ',
          hi: 'खंभा, मन को ठहराने वाला शब्द रूपी सहारा',
          en: 'Support pillar (the Guru’s Word)',
        },
      },
      {
        word: 'ਥਿਤਿ ਭਈ / थिति भई',
        meaning: {
          pb: 'ਸਥਿਰਤਾ ਆ ਗਈ, ਮਨ ਦਾ ਭਟਕਣਾ ਬੰਦ ਹੋ ਗਿਆ',
          hi: 'स्थिरता आ गई, मन भटकना बंद हुआ',
          en: 'Attained permanent composure / stillness',
        },
      },
      {
        word: 'ਮਾਨ ਸਰੋਵਰ ਤੀਰ / मान सरोवर तीर',
        meaning: {
          pb: 'ਸਤਿਸੰਗਤ ਰੂਪੀ ਮਾਨਸਰੋਵਰ ਦੇ ਕੰਢੇ ਤੇ',
          hi: 'सत्संगत रूपी मानसरोवर के तट पर',
          en: 'By the sacred shore of the Mansarovar of satsang',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਥੰਮੀ ਰੂਪ ਗੁਰੂ ਦਾ ਸ਼ਬਦ ਮਿਲਿਆ, ਤਾਂ ਮਨ ਦੀ ਸਥਿਰਤਾ ਹੋ ਗਈ ਅਤੇ ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਧੀਰਜ, ਨਿਸਚਾ ਦ੍ਰਿੜ ਕਰ ਦਿਤਾ। ਫਿਰ ਇਸ ਮਨ ਦੀ ਸਥਿਰਤਾ ਵਿਚ ਸਤਿਸੰਗਤ ਦੇ ਸਰੋਵਰ ਕੋਲੋਂ ਹਰੀ ਨਾਮ ਦਾ ਅਮੋਲਕ ਹੀਰਾ ਖਰੀਦ ਲਿਆ ਹੈ॥ ੧੬੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सतगुरु के शब्द रूपी खंभे का सहारा मिला तो मन स्थिर हो गया और धीरज बंध गया। कबीर ने इस स्थिरता में मानसरोवर (सत्संग) के तट पर प्रभु नाम का अनमोल हीरा प्राप्त कर लिया है॥ १६१॥',
      en: 'Satguru Kabir Saheb proclaims: Receiving the pillar of the Satguru\'s Word, my mind attained stability and steadfast peace. By the shore of the Mansarovar of holy satsang, Kabir has purchased the priceless diamond of God\'s Name.',
    },
    chintan: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਸ਼ਬਦ ਹੀ ਚੰਚਲ ਮਨ ਨੂੰ ਸਥਿਰਤਾ ਅਤੇ ਧੀਰਜ ਬਖ਼ਸ਼ਣ ਵਾਲਾ ਅਸਲ ਆਧਾਰ ਹੈ।',
      hi: 'सतगुरु का शब्द ही चंचल मन को स्थिरता और धीरज प्रदान करने वाला सच्चा सहारा है।',
      en: 'The Satguru’s Word alone is the pillar that anchors the wavering mind into peace.',
    },
    acharana: {
      pb: 'ਸਤਿਸੰਗਤ ਦੇ ਮਾਨਸਰੋਵਰ ਤੀਰ ਤੇ ਬੈਠ ਕੇ ਨਾਮ ਹੀਰੇ ਦਾ ਅਮੋਲਕ ਵਣਜ ਕਰੋ।',
      hi: 'सत्संगत के मानसरोवर तट पर बैठकर नाम रूपी हीरे का व्यापार करें।',
      en: 'Dwell by the Mansarovar of holy company and trade in the diamond of the Divine Name.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ ਬ੍ਰਿਤੀ ਨੂੰ ਸਤਿਗੁਰੂ ਸ਼ਬਦ ਦੇ ਥੰਮ੍ਹ ਨਾਲ ਬਾਨ੍ਹ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी चित्तवृत्ति को सतगुरु शब्द के खंभे से बांधकर प्रभु चरणों में समर्पित करें।',
      en: 'Anchor your mind to the pillar of the Guru’s Word and offer yourself to God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੨ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 162 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-162',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੨: ਕਬੀਰ ਹਰਿ ਹੀਰਾ ਜਨੁ ਜਉਹਰੀ (ਮਾਂਡੈ ਹਾਟ)',
      hi: 'सलोक १६२: कबीर हरि हीरा जनु जौहरी (मांडै हाट)',
      en: 'Salok 162: Devotees Are Jewelers Trading in God’s Diamond Name',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਿ ਹੀਰਾ ਜਨੁ ਜਉਹਰੀ ਲੇ ਕੈ ਮਾਂਡੈ ਹਾਟ ॥',
      'ਜਬ ਹੀ ਪਾਈਅਹਿ ਪਾਰਖੂ ਤਬ ਹੀਰਨ ਕੀ ਸਾਟ ॥੧੬੨॥',
    ],
    moolDevanagari: [
      'कबीर हरि हीरा जनु जौहरी ले कै मांडै हाट ॥',
      'जब ही पाईअहि पारखू तब हीरन की साट ॥१६२॥',
    ],
    moolRoman: [
      'Kabīr Har hīrā jan jauharī le kai māṇḍai hāṭ.',
      'Jab hī pāīah pārakhū tab hīran kī sāṭ. ||162||',
    ],
    shabdarth: [
      {
        word: 'ਜਉਹਰੀ / जौहरी',
        meaning: {
          pb: 'ਪਰਖ ਕਰਨ ਵਾਲਾ ਜੌਹਰੀ, ਭਗਤ',
          hi: 'परख करने वाला जौहरी, भक्त',
          en: 'Jeweler / Devotee who values spiritual truth',
        },
      },
      {
        word: 'ਮਾਂਡੈ ਹਾਟ / मांडै हाट',
        meaning: {
          pb: 'ਦੁਕਾਨ (ਹਿਰਦੇ) ਸਜਾਉਂਦਾ ਹੈ',
          hi: 'दुकान (हृदय) सजाता है',
          en: 'Sets up a shop (heart/satsang)',
        },
      },
      {
        word: 'ਸਾਟ / साट',
        meaning: {
          pb: 'ਵਟਾਂਦਰਾ, ਲੈਣ-ਦੇਣ, ਵਪਾਰ',
          hi: 'लेन-देन, व्यापार',
          en: 'Exchange / spiritual discourse',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਹੀਰਾ ਹੈ, ਪ੍ਰਭੂ ਭਗਤ ਉਸ ਦੇ ਨਾਮ ਹੀਰੇ ਦੇ ਖਰੀਦਾਰ ਹਨ, ਜਿਸ ਨੂੰ ਲੈ ਕੇ ਆਪਣੀ ਹਟੀਆ (ਹਿਰਦਿਆਂ) ਨੂੰ ਸਜਾਉਂਦੇ ਹਨ। ਜਦ ਇਸ ਦੀ ਪਰਖ ਕਰਨ ਵਾਲੇ ਮਿਲਦੇ ਹਨ, ਤਦੋਂ ਹੀ ਇਨ੍ਹਾਂ ਹੀਰਿਆਂ ਦੀ ਪਰਖ ਹੁੰਦੀ ਹੈ ਅਰਥਾਤ ਸਤਿਸੰਗਤ ਵਿਚ ਗਿਆਨ ਦੀ ਚਰਚਾ ਹੁੰਦੀ ਹੈ॥ ੧੬੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-परमात्मा का नाम हीरा है और प्रभु-भक्त उस हीरे के जौहरी हैं, जो अपने हृदय रूपी हाट में उसे सजाते हैं। जब कोई विवेकशील पारखी मिलता है, तब इस हरि-नाम रूपी हीरे का अनमोल विनिमय होता है॥ १६२॥',
      en: 'Satguru Kabir Saheb proclaims: The Lord’s Name is the priceless diamond, and His devotees are the jewelers who set up shop in their hearts. When wise evaluators meet, the trading of these divine diamonds takes place in holy congregation.',
    },
    chintan: {
      pb: 'ਸਤਿਸੰਗਤ ਵਿੱਚ ਗਿਆਨ ਦੀ ਚਰਚਾ ਨਾਲ ਪ੍ਰਭੂ ਨਾਮ ਹੀਰੇ ਦੀ ਕਦਰ ਤੇ ਅਨੁਭਵ ਦ੍ਰਿੜ੍ਹ ਹੁੰਦਾ ਹੈ।',
      hi: 'सत्संगत में ज्ञान चर्चा से प्रभु नाम रूपी हीरे की परख और महिमा प्रकट होती है।',
      en: 'Spiritual fellowship allows wise souls to exchange and appreciate the priceless value of Divine Truth.',
    },
    acharana: {
      pb: 'ਨਾਮ ਹੀਰੇ ਦੇ ਜੌਹਰੀ ਬਣ ਕੇ ਸਤਿਸੰਗਤ ਵਿੱਚ ਗੁਰਮਤਿ ਗਿਆਨ ਦਾ ਅਮੋਲ ਵਪਾਰ ਕਰੋ।',
      hi: 'नाम रूपी हीरे के पारखी बनकर सत्संगत में गुरु-ज्ञान का अनमोल व्यापार करें।',
      en: 'Be a spiritual jeweler; engage in the sacred discourse of Divine Name in holy company.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਤੇ ਬੁੱਧੀ ਨੂੰ ਪ੍ਰਭੂ ਨਾਮ ਹੀਰੇ ਦੀ ਪਰਖ ਲਈ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपनी बुद्धि को प्रभु नाम रूपी हीरे के मूल्यांकन में समर्पित करें।',
      en: 'Dedicate your intellect entirely to realizing the infinite value of God’s Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 163 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-163',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੩: ਕਾਮ ਪਰੇ ਹਰਿ ਸਿਮਰੀਐ (ਐਸਾ ਸਿਮਰਹੁ ਨਿਤ)',
      hi: 'सलोक १६३: काम परे हरि सिमरीऐ (ऐसा सिमरहु नित)',
      en: 'Salok 163: Remember God Daily, Not Just in Times of Need',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਮ ਪਰੇ ਹਰਿ ਸਿਮਰੀਐ ਐਸਾ ਸਿਮਰਹੁ ਨਿਤ ॥',
      'ਅਮਰਾ ਪੁਰ ਬਾਸਾ ਕਰਹੁ ਹਰਿ ਗਇਆ ਬਹੋਰੈ ਬਿਤ ॥੧੬੩॥',
    ],
    moolDevanagari: [
      'कबीर काम परे हरि सिमरीऐ ऐसा सिमरहु नित ॥',
      'अमरा पुर बासा करहु हरि गइआ बहोरै बित ॥१६३॥',
    ],
    moolRoman: [
      'Kabīr kām pare Har simrīai aisā simrahu nit.',
      'Amarā pur bāsā karahu Har gaiā bahorai bit. ||163||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਮ ਪਰੇ / काम परे',
        meaning: {
          pb: 'ਮੁਸੀਬਤ/ਲੋੜ ਪੈਣ ਤੇ',
          hi: 'विपत्ति या काम पड़ने पर',
          en: 'In times of trouble or necessity',
        },
      },
      {
        word: 'ਅਮਰਾ ਪੁਰ / अमरा पुर',
        meaning: {
          pb: 'ਸੱਚਖੰਡ, ਅਮਰ ਲੋਕ',
          hi: 'अमर धाम, सचखंड',
          en: 'Abode of Immortality / Eternal Realm',
        },
      },
      {
        word: 'ਗਇਆ ਬਹੋਰੈ ਬਿਤ / गइआ बहोरै बित',
        meaning: {
          pb: 'ਗੁਆਚਾ ਹੋਇਆ ਸ਼ੁਭ ਗੁਣਾਂ ਦਾ ਧਨ ਮੋੜ ਦੇਵੇਗਾ',
          hi: 'गंवाया हुआ आत्म-धन वापस लौटा देगा',
          en: 'Restores lost spiritual wealth',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਜਿਸ ਤਰ੍ਹਾਂ ਕਿਸੇ ਕੰਮ ਪੈਣ ਤੇ ਪ੍ਰਮਾਤਮਾ ਨੂੰ ਯਾਦ ਕਰੀਦਾ ਹੈ, ਇਸ ਤਰਾਂ ਹੀ ਉਸ ਨੂੰ ਸਦਾ ਯਾਦ ਕਰੋ। ਤਦ ਤੁਸੀਂ ਅਮਰਾ ਪੁਰ (ਸੱਚਖੰਡ) ਵਿਚ ਨਿਵਾਸ ਕਰ ਲਵੋਗੇ ਅਤੇ ਤੁਹਾਡਾ ਗਿਆ ਹੋਇਆ ਸ਼ੁਭ ਗੁਣਾਂ ਦਾ ਧਨ ਪਦਾਰਥ, ਪ੍ਰਮਾਤਮਾ ਮੋੜ ਦੇਵੇਗਾ॥ ੧੬੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे विपत्ति पड़ने पर ईश्वर का स्मरण करते हैं, वैसा नित्य स्मरण करें। तब आप अमरपुर (सचखंड) में निवास पाएंगे और ईश्वर आपका खोया हुआ आत्म-धन पुनः लौटा देगा॥ १६३॥',
      en: 'Satguru Kabir Saheb proclaims: As you remember God in times of trouble, remember Him like that constantly every day! Then you shall abide in the Realm of Immortality, and God will restore all your lost spiritual virtues.',
    },
    chintan: {
      pb: 'ਨਿਰੰਤਰ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਜੀਵ ਅਮਰ ਪਦਵੀ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਅਤੇ ਆਤਮਿਕ ਧਨ ਮੁੜ ਮਿਲ ਜਾਂਦਾ ਹੈ।',
      hi: 'निरंतर नाम स्मरण से जीव अमर पद पाता है और उसका खोया आत्म-वैभव वापस मिलता है।',
      en: 'Constant rememberance of God establishes one in the Eternal Realm and restores divine virtues.',
    },
    acharana: {
      pb: 'ਕੇਵਲ ਮੁਸੀਬਤ ਵੇਲੇ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਸੁਆਸ ਨਾਲ ਨਿਰੰਤਰ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'केवल दुख में ही नहीं, बल्कि हर सांस में नित्य निरंतर प्रभु का ध्यान करें।',
      en: 'Do not remember God only in distress; meditate on Him continually with every breath.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਮੁੱਚੀ ਚਿਤ-ਬ੍ਰਿਤੀ ਨਿਤ ਪ੍ਰਭੂ ਸਿਮਰਨ ਵਿੱਚ ਲੀਨ ਕਰ ਦਿਓ।',
      hi: 'अपनी संपूर्ण चेतना नित्य प्रभु स्मरण में लीन कर दें।',
      en: 'Immerse your entire consciousness into daily, unceasing remembrance of the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 164 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-164',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੪: ਸੇਵਾ ਕਉ ਦੁਇ ਭਲੇ (ਏਕੁ ਸੰਤੁ ਇਕੁ ਰਾਮੁ)',
      hi: 'सलोक १६४: सेवा कउ दुइ भले (एकु संतु इकु रामु)',
      en: 'Salok 164: Two Are Worthy of Devotion—The Saint and the Lord',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੇਵਾ ਕਉ ਦੁਇ ਭਲੇ ਏਕੁ ਸੰਤੁ ਇਕੁ ਰਾਮੁ ॥',
      'ਰਾਮੁ ਜੁ ਦਾਤਾ ਮੁਕਤਿ ਕੋ ਸੰਤੁ ਜਪਾਵੈ ਨਾਮੁ ॥੧੬੪॥',
    ],
    moolDevanagari: [
      'कबीर सेवा कउ दुइ भले एकु संतु इकु रामु ॥',
      'रामु जु दाता मुकति को संतु जपावै नामु ॥१६४॥',
    ],
    moolRoman: [
      'Kabīr sevā kau dui bhale ek sant ik Rām.',
      'Rām ju dātā mukti ko sant japāvai nām. ||164||',
    ],
    shabdarth: [
      {
        word: 'ਸੇਵਾ ਕਉ / सेवा कउ',
        meaning: {
          pb: 'ਸੇਵਾ ਕਰਨ ਲਈ',
          hi: 'सेवा करने के लिए',
          en: 'For rendering devotion and service',
        },
      },
      {
        word: 'ਮੁਕਤਿ ਕੋ ਦਾਤਾ / मुकति को दाता',
        meaning: {
          pb: 'ਮੁਕਤੀ ਦੇਣ ਵਾਲਾ',
          hi: 'मुक्ति प्रदान करने वाला',
          en: 'Giver of absolute liberation',
        },
      },
      {
        word: 'ਜਪਾਵੈ ਨਾਮੁ / जपावै नामु',
        meaning: {
          pb: 'ਨਾਮ ਜਪਾਉਂਦਾ ਹੈ',
          hi: 'नाम जपता और जपाता है',
          en: 'Inspires the chanting of the Name',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੇਵਾ ਕਰਨ ਵਾਸਤੇ ਦੋ ਹੀ ਚੰਗੇ ਹਨ, ਇਕ ਸੰਤ ਅਤੇ ਦੂਜਾ ਪ੍ਰਮਾਤਮਾ, ਕਿਉਂਕਿ ਪ੍ਰਮਾਤਮਾ ਮੁਕਤੀ ਦੇਣ ਵਾਲਾ ਹੈ ਤੇ ਸੰਤ ਉਸ ਮੁਕਤੀ ਦਾਤੇ ਦਾ ਨਾਮ ਜਪਾਉਂਦਾ ਹੈ॥ ੧੬੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सेवा के लिए दो ही श्रेष्ठ हैं: एक संत और दूसरा राम। राम मुक्ति प्रदान करने वाले दाता हैं और संत उस प्रभु-नाम का जाप करवाते हैं॥ १६४॥',
      en: 'Satguru Kabir Saheb proclaims: For devotion and service, only two are worthy—the Saint and the Lord. The Lord is the Bestower of liberation, and the Saint inspires us to chant His Holy Name.',
    },
    chintan: {
      pb: 'ਸੰਤ ਸੇਵਾ ਨਾਲ ਨਾਮ ਦੀ ਪ੍ਰਾਪਤੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਰਾਮ ਸੇਵਾ ਨਾਲ ਮੁਕਤੀ ਪ੍ਰਾਪਤ ਹੁੰਦੀ ਹੈ।',
      hi: 'संत-सेवा से नाम की प्राप्ति होती है और राम-सेवा से परम मुक्ति मिलती है।',
      en: 'Serving the Saints leads to the Divine Name, and serving the Lord bestows supreme liberation.',
    },
    acharana: {
      pb: 'ਸੰਤਾਂ ਦੀ ਨਿਮਾਣੀ ਸੇਵਾ ਕਰਕੇ ਉਨ੍ਹਾਂ ਪਾਸੋਂ ਨਾਮ ਦੀ ਦੀਖਿਆ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'संतों की निष्काम सेवा करके उनसे हरि-नाम का उपदेश ग्रहण करें।',
      en: 'Serve holy Saints humbly and learn from them how to chant God’s liberating Name.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਤਨ, ਮਨ, ਧਨ ਦੀ ਸੇਵਾ ਸੰਤਾਂ ਅਤੇ ਰਾਮ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना तन, मन और भाव संतों तथा राम चरणों में अर्पित करें।',
      en: 'Surrender your body, mind, and service at the feet of the Lord and His Saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 165 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-165',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੫: ਜਿਹ ਮਾਰਗਿ ਪੰਡਿਤ ਗਏ (ਅਵਘਟ ਘਾਟੀ ਰਾਮ ਕੀ)',
      hi: 'सलोक १६५: जिह मारगि पंडित गए (अवघट घाटी राम की)',
      en: 'Salok 165: Climbing the Steep Pass of Divine Devotion',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਿਹ ਮਾਰਗਿ ਪੰਡਿਤ ਗਏ ਪਾਛੈ ਪਰੀ ਬਹੀਰ ॥',
      'ਇਕ ਅਵਘਟ ਘਾਟੀ ਰਾਮ ਕੀ ਤਿਹ ਚੜਿ ਰਹਿਓ ਕਬੀਰ ॥੧੬੫॥',
    ],
    moolDevanagari: [
      'कबीर जिह मारगि पंडित गए पाछै परी बहीर ॥',
      'इक अवघट घाटी राम की तिह चढ़ि रहिओ कबीर ॥१६५॥',
    ],
    moolRoman: [
      'Kabīr jih mārag paṇḍit gae pāchhai parī bahīr.',
      'Ik avghaṭ ghāṭī Rām kī tih chaṛh rahio Kabīr. ||165||',
    ],
    shabdarth: [
      {
        word: 'ਬਹੀਰ / बहीर',
        meaning: {
          pb: 'ਕਤਾਰਾਂ, ਭੀੜਾਂ, ਵਹੀਰਾਂ',
          hi: 'भीड़, कतारें',
          en: 'Crowds / traditional followers',
        },
      },
      {
        word: 'ਅਵਘਟ ਘਾਟੀ / अवघट घाटी',
        meaning: {
          pb: 'ਔਖੀ ਘਾਟੀ, ਬਿਖਮ ਪਹਾੜੀ ਰਸਤਾ (ਸ਼ੁੱਧ ਭਗਤੀ)',
          hi: 'कठिन चढ़ाई, सूक्ष्म भक्ति मार्ग',
          en: 'Treacherous steep pass (path of pure devotion)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਸ (ਕਰਮ ਕਾਂਡਾਂ ਦੇ) ਰਸਤੇ ਉਤੇ ਪੰਡਿਤ ਲੋਕ ਲੰਘ ਗਏ ਹਨ, ਉਨ੍ਹਾਂ ਦੇ ਪਿਛੇ ਵਹੀਰਾਂ ਤੁਰ ਪਈਆਂ ਹਨ। ਪ੍ਰਮਾਤਮਾ ਦੇ ਰਸਤੇ ਦੀ ਇਕ ਬੜੀ ਔਖੀ ਘਾਟੀ ਹੈ, ਜਿਸ ਉੱਤੇ ਕਬੀਰ ਚੜ੍ਹ ਰਿਹਾ ਹੈ॥ ੧੬੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जिस कर्मकांडी मार्ग पर पंडित गए, उनके पीछे अंधी भीड़ चल पड़ी। परंतु राम-भक्ति का मार्ग एक अत्यंत कठिन घाटी जैसा है, जिस पर कबीर दृढ़तापूर्वक चढ़ रहा है॥ १६५॥',
      en: 'Satguru Kabir Saheb proclaims: The crowds blindly follow the karmic ritual path trodden by worldly scholars. But the path to the Lord is a steep, difficult pass, and Kabir is climbing that tough mountain of pure devotion.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਕਰਮ-ਕਾਂਡਾਂ ਦੀ ਭੀੜ ਤੋਂ ਵੱਖ ਹੋ ਕੇ ਆਤਮਿਕ ਭਗਤੀ ਦੀ ਔਖੀ ਘਾਟੀ ਚੜ੍ਹਨਾ ਹੀ ਅਸਲ ਸਾਧਨਾ ਹੈ।',
      hi: 'कर्मकांडों की भीड़ से अलग होकर अंतरंग भक्ति की कठिन घाटी पर चढ़ना ही सच्चा साधन है।',
      en: 'True spirituality requires leaving behind blind ritualism and ascending the narrow, steep path of pure devotion.',
    },
    acharana: {
      pb: 'ਲੋਕਾਚਾਰੀ ਅਤੇ ਦਿਖਾਵੇ ਦੇ ਰਸਤੇ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦੇ ਬਿਖਮ ਰਸਤੇ ਤੇ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਚੱਲੋ।',
      hi: 'दिखावे और भीड़ चाल को त्यागकर प्रभु-प्रेम के सूक्ष्म मार्ग पर दृढ़ रहें।',
      en: 'Renounce herd mentality and superficial rituals; stay steadfast on the subtle trail of Divine love.',
    },
    samarpan: {
      pb: 'ਰਾਮ ਨਾਮ ਦੀ ਅਵਘਟ ਘਾਟੀ ਚੜ੍ਹਨ ਲਈ ਆਪਣਾ ਆਪ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'राम-नाम की कठिन घाटी चढ़ने हेतु अपना सर्वस्व प्रभु चरणों में अर्पित करें।',
      en: 'Offer your whole being to God as you climb the steep peak of His Holy Love.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 166 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-166',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੬: ਦੁਨੀਆ ਕੇ ਦੋਖੇ ਮੂਆ (ਚਾਲਤ ਕੁਲ ਕੀ ਕਾਨਿ)',
      hi: 'सलोक १६६: दुनीआ के दोखे मूआ (चालत कुल की कानि)',
      en: 'Salok 166: Dying in Worldly Anxieties and False Family Pride',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦੁਨੀਆ ਕੇ ਦੋਖੇ ਮੂਆ ਚਾਲਤ ਕੁਲ ਕੀ ਕਾਨਿ ॥',
      'ਤਬ ਕੁਲੁ ਕਿਸ ਕਾ ਲਾਜਸੀ ਜਬ ਲੇ ਧਰਹਿ ਮਸਾਨਿ ॥੧੬੬॥',
    ],
    moolDevanagari: [
      'कबीर दुनीआ के दोखे मूआ चालत कुल की कानि ॥',
      'तब कुलु किस का लाजसी जब ले धरहि मसानि ॥१६६॥',
    ],
    moolRoman: [
      'Kabīr dunīā ke dokhe mūā chālat kul kī kān.',
      'Tab kul kis kā lājasī jab le dharah masān. ||166||',
    ],
    shabdarth: [
      {
        word: 'ਦੋਖੇ / दोखे',
        meaning: {
          pb: 'ਚਿੰਤਾਵਾਂ, ਝੰਜਟਾਂ, ਧੋਖੇ',
          hi: 'चिंताओं, दुनियावी झंझटों',
          en: 'Illusionary worries / anxieties',
        },
      },
      {
        word: 'ਕੁਲ ਕੀ ਕਾਨਿ / कुल की कानि',
        meaning: {
          pb: 'ਕੁਲ ਦੀ ਲਾਜ, ਖਾਨਦਾਨੀ ਰੀਤਾਂ',
          hi: 'कुल की मर्यादा या रीतियों की चिंता',
          en: 'Family pride / social tradition',
        },
      },
      {
        word: 'ਮਸਾਨਿ / मसानि',
        meaning: {
          pb: 'ਸ਼ਮਸ਼ਾਨ ਘਾਟ',
          hi: 'श्मशान भूमि',
          en: 'Cremation ground',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਇਹ ਪੁਰਸ਼ ਦੁਨੀਆਂ ਦੇ ਫਿਕਰਾਂ (ਰਹੁ ਰੀਤਾਂ) ਵਿਚ ਹੀ ਮਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਆਪਣੀ ਕੁਲ ਦੀ ਰੀਤੀ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹੈ ਕਿ ਲੋਕ ਕੀ ਆਖਣਗੇ? ਪਰ ਜਦ ਤੈਨੂੰ ਸ਼ਮਸ਼ਾਨ ਭੂਮੀ ਵਿਚ ਲਿਜਾ ਕੇ ਫੂਕ ਦੇਣਗੇ, ਉਦੋਂ ਕਿਸ ਦੀ ਕੁਲ ਨੂੰ ਸ਼ਰਮਸਾਰੀ ਹੋਵੇਗੀ?॥ ੧੬੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य कुल-मर्यादा और लोक-लाज के चक्कर में पड़कर जीवन गंवा देता है। परंतु जब लोग शव को श्मशान में रख देंगे, तब किस कुल की प्रतिष्ठा बचेगी?॥ १६६॥',
      en: 'Satguru Kabir Saheb proclaims: Man dies wasting his life in worldly anxieties and keeping up social family traditions. But when they carry his body and place it in the cremation ground, whose family pride will matter then?',
    },
    chintan: {
      pb: 'ਲੋਕ-ਲਾਜ ਤੇ ਕੁਲ ਦੀ ਮਿਥਿਆ ਮਰਯਾਦਾ ਵਿੱਚ ਉਲਝ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਗੁਆ ਲੈਣਾ ਵੱਡੀ ਭੁੱਲ ਹੈ।',
      hi: 'लोक-लाज और कुल की मिथ्या मर्यादा में उलझकर हरि-भक्ति खो देना अज्ञान है।',
      en: 'Fretting over false family pride and social opinions distracts the soul from eternal devotion.',
    },
    acharana: {
      pb: 'ਝੂਠੀ ਕੁਲ-ਮਰਯਾਦਾ ਤੇ ਲੋਕ-ਭੈ ਛੱਡ ਕੇ ਨਿਧੜਕ ਹੋ ਕੇ ਵਾਹਿਗੁਰੂ ਦੀ ਭਗਤੀ ਕਰੋ।',
      hi: 'झूठी कुल-मर्यादा और लोक-भय छोड़कर निर्भय होकर प्रभु की भक्ति करें।',
      en: 'Break free from false social pretenses and fearlessly devote yourself to God.',
    },
    samarpan: {
      pb: 'ਲੋਕ-ਲਾਜ ਦਾ ਭੈ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਵਿਸਰਜਿਤ ਕਰਕੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'लोक-लाज का भय प्रभु चरणों में त्यागकर केवल नाम में लीन हों।',
      en: 'Surrender all social anxieties at God’s feet and focus solely on the Eternal Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 167 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-167',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੭: ਡੂਬਹਿਗੋ ਰੇ ਬਾਪੁਰੇ (ਪਾਰੋਸੀ ਕੇ ਜੋ ਹੂਆ)',
      hi: 'सलोक १६७: डूबहिगो रे बापुरे (पारोसी के जो हूआ)',
      en: 'Salok 167: Beware of Conforming; Your End Is Approaching Too',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਡੂਬਹਿਗੋ ਰੇ ਬਾਪੁਰੇ ਬਹੁ ਲੋਗਨ ਕੀ ਕਾਨਿ ॥',
      'ਪਾਰੋਸੀ ਕੇ ਜੋ ਹੂਆ ਤੂ ਅਪਨੇ ਭੀ ਜਾਨੁ ॥੧੬੭॥',
    ],
    moolDevanagari: [
      'कबीर डूबहिगो रे बापुरे बहु लोगन की कानि ॥',
      'पारोसी के जो हूआ तू अपने भी जानु ॥१६७॥',
    ],
    moolRoman: [
      'Kabīr ḍūbahigo re bāpure bahu logan kī kān.',
      'Pārosī ke jo hūā tū apne bhī jān. ||167||',
    ],
    shabdarth: [
      {
        word: 'ਬਾਪੁਰੇ / बापुरे',
        meaning: {
          pb: 'ਹੇ ਮੰਦਭਾਗੀ ਜੀਵ / ਵਿਚਾਰੇ',
          hi: 'हे अभागे जीव',
          en: 'O helpless / unfortunate soul',
        },
      },
      {
        word: 'ਲੋਗਨ ਕੀ ਕਾਨਿ / लोगन की कानि',
        meaning: {
          pb: 'ਲੋਕਾਂ ਦੀ ਸ਼ਰਮ / ਲੋਕ-ਲਾਜ',
          hi: 'लोगों की देखा-देखी या शर्म',
          en: 'Conforming to worldly social pressure',
        },
      },
      {
        word: 'ਪਾਰੋਸੀ / पारोसी',
        meaning: {
          pb: 'ਗੁਆਂਢੀ',
          hi: 'पड़ोसी',
          en: 'Neighbor',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੰਦਭਾਗੀ ਪੁਰਸ਼ ਬਹੁਤ ਲੋਕਾਂ ਦੀ ਲੋਕ ਲਾਜ ਵਿਚ ਹੀ ਡੁੱਬ ਜਾਏਂਗਾ। ਵੀਚਾਰ ਕਰ ਜੋ ਅਜ ਗੁਆਂਢੀ ਦੇ ਘਰ ਹੋਇਆ ਹੈ, ਉਸ ਨੂੰ ਤੂੰ ਆਪਣੇ ਉੱਤੇ ਵੀ ਵਾਪਰਿਆ ਜਾਣ। ਮੌਤ ਸਭ ਨੂੰ ਵਾਪਰਦੀ ਹੈ॥ ੧੬੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे अभागे जीव! तू लोगों की देखा-देखी और लोक-लाज में डूब जाएगा। जो आज पड़ोसी के घर मृत्यु घटी है, उसे अपने साथ भी अवश्य होने वाला जान॥ १६७॥',
      en: 'Satguru Kabir Saheb proclaims: O unfortunate soul, you will drown in the sea of worldly opinion! Recognize that what happened at your neighbor’s house today (death) will surely happen to you tomorrow.',
    },
    chintan: {
      pb: 'ਗੁਆਂਢੀ ਦੀ ਮੌਤ ਵੇਖ ਕੇ ਆਪਣੇ ਅੰਤ ਸਮੇਂ ਦਾ ਚੇਤਾ ਕਰਨਾ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗਣਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'दूसरों की मृत्यु देखकर अपने अंतकाल का स्मरण करना चाहिए और नाम जप में लगना चाहिए।',
      en: 'Seeing mortality all around us should awaken us to remember our own end and turn to God.',
    },
    acharana: {
      pb: 'ਦੂਜਿਆਂ ਦਾ ਅੰਤ ਵੇਖ ਕੇ ਜਾਗੋ ਅਤੇ ਸਮਾਂ ਬਿਤਾਏ ਬਿਨਾਂ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਆਰੰਭ ਕਰੋ।',
      hi: 'दूसरों का अंत देखकर जागें और समय गंवाए बिना प्रभु भक्ति आरंभ करें।',
      en: 'Awaken upon seeing the brevity of others\' lives; do not delay your spiritual practice.',
    },
    samarpan: {
      pb: 'ਮੌਤ ਦੀ ਅਟੱਲਤਾ ਨੂੰ ਸਮਝ ਕੇ ਆਪਣਾ ਆਪ ਵਾਹਿਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'मृत्यु की सत्यता को स्वीकार कर अपना आप वाहेगुरु चरणों में समर्पित करें।',
      en: 'Realize the inevitability of death and surrender your life completely to the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 168 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-168',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੮: ਭਲੀ ਮਧੂਕਰੀ (ਦਾਵਾ ਕਾਹੂ ਕੋ ਨਹੀ)',
      hi: 'सलोक १६८: भली मधूकरी (दावा काहू को नही)',
      en: 'Salok 168: Blessed Is Simple Unattached Alms-Living',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਭਲੀ ਮਧੂਕਰੀ ਨਾਨਾ ਬਿਧਿ ਕੋ ਨਾਜੁ ॥',
      'ਦਾਵਾ ਕਾਹੂ ਕੋ ਨਹੀ ਬਡਾ ਦੇਸੁ ਬਡ ਰਾਜੁ ॥੧੬੮॥',
    ],
    moolDevanagari: [
      'कबीर भली मधूकरी नाना बिधि को नाजु ॥',
      'दावा काहू को नही बडा देसु बड राजु ॥१६८॥',
    ],
    moolRoman: [
      'Kabīr bhalī madhūkarī nānā bidh ko nāj.',
      'Dāvā kāhū ko nahī baḍā des baḍ rāj. ||168||',
    ],
    shabdarth: [
      {
        word: 'ਮਧੂਕਰੀ / मधूकरी',
        meaning: {
          pb: 'ਮੰਗ ਕੇ ਲਈ ਭਿਛਿਆ (ਜਿਵੇਂ ਭੌਰ ਰਸ ਲੈਂਦਾ ਹੈ)',
          hi: 'माधुकरी भिक्षा (भ्रमर की भांति विभिन्न घरों से मांगी रोटी)',
          en: 'Alms gathered like a honeybee from various homes',
        },
      },
      {
        word: 'ਨਾਨਾ ਬਿਧਿ ਕੋ ਨਾਜੁ / नाना बिधि को नाजु',
        meaning: {
          pb: 'ਕਈ ਪ੍ਰਕਾਰ ਦਾ ਅੰਨ੍ਹ',
          hi: 'भांति-भांति का अनाज',
          en: 'Various grains/foods',
        },
      },
      {
        word: 'ਦਾਵਾ ਕਾਹੂ ਕੋ ਨਹੀ / दावा काहू को नही',
        meaning: {
          pb: 'ਕਿਸੇ ਚੀਜ਼ ਤੇ ਜਾਇਦਾਦ ਦਾ ਦਾਅਵਾ ਨਹੀਂ',
          hi: 'किसी संपत्ति पर अधिकार का दावा नहीं',
          en: 'No claim or attachment to ownership',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੰਗ ਕੇ ਭਿਛਿਆ ਦੀ ਲਈ ਹੋਈ ਰੋਟੀ ਚੰਗੀ ਹੈ, ਜਿਸ ਵਿਚ ਕਈ ਪ੍ਰਕਾਰ ਦਾ ਅਨਾਜ ਹੁੰਦਾ ਹੈ। ਫਿਰ ਰੋਟੀ ਮੰਗ ਕੇ ਖਾਣ ਵਾਲੇ ਦਾ ਕਿਸੇ ਚੀਜ਼ ਨਾਲ ਦਾਅਵਾ ਨਹੀਂ ਹੁੰਦਾ। ਉਸ ਵਾਸਤੇ ਬੜਾ ਵੱਡਾ ਦੇਸ਼ ਅਤੇ ਵੱਡਾ ਹਰੀ ਰਾਜ ਮੰਗਣ ਵਾਸਤੇ ਹੁੰਦਾ ਹੈ॥ ੧੬੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-माधुकरी भिक्षा मांगकर खाना ही भला है, जिसमें विविध प्रकार का अन्न होता है। ऐसी भिक्षा लेने वाले का किसी संपत्ति पर दावा नहीं होता; उसके लिए प्रभु का विशाल साम्राज्य ही उसका घर है॥ १६८॥',
      en: 'Satguru Kabir Saheb proclaims: Blessed is the simple alms-bread gathered freely, composed of varied grains. One who lives simply without claiming property has no attachment; for him, the entire world is God’s vast domain.',
    },
    chintan: {
      pb: 'ਸੰਤੁਸ਼ਟਤਾ ਅਤੇ ਦਾਅਵਾ-ਰਹਿਤ ਜੀਵਨ ਨਾਲ ਮਨ ਵਿੱਚ ਸੱਚੀ ਆਜ਼ਾਦੀ ਤੇ ਨਿਰਭੈਤਾ ਆਉਂਦੀ ਹੈ।',
      hi: 'दावा-रहित संन्यासी जीवन से परम स्वतंत्रता और मानसिक शांति प्राप्त होती है।',
      en: 'Living without pride of ownership brings absolute spiritual freedom and inner quietude.',
    },
    acharana: {
      pb: 'ਮਲਕੀਅਤ ਦੇ ਦਾਅਵੇ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਛੱਡ ਕੇ ਸਾਦਗੀ ਅਤੇ ਸੰਤੋਖ ਵਾਲਾ ਜੀਵਨ ਬਿਤਾਓ।',
      hi: 'स्वामित्व का अहंकार त्यागकर सादगी और संतोषमय जीवन व्यतीत करें।',
      en: 'Live with utmost simplicity and contentment, abandoning greedy claims of possession.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਮੁੱਚੀ ਤ੍ਰਿਸ਼ਨਾ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਤਿਆਗ ਕੇ ਨਿਸੰਕ ਨਾਮ ਰਸ ਪੀਓ।',
      hi: 'अपनी तृष्णाएं प्रभु चरणों में त्यागकर निःशंक नाम का आनंद लें।',
      en: 'Surrender all worldly possessions and cravings to enjoy the unrestrained sweetness of God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 169 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-169',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੬੯: ਦਾਵੈ ਦਾਝਨੁ ਹੋਤੁ ਹੈ (ਨਿਰਦਾਵੈ ਰਹੈ ਨਿਸੰਕ)',
      hi: 'सलोक १६९: दावै दाझनु होतु है (निरदावै रहै निसंक)',
      en: 'Salok 169: Claiming Property Burns the Soul; Detached Souls Excel Kings',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦਾਵੈ ਦਾਝਨੁ ਹੋਤੁ ਹੈ ਨਿਰਦਾਵੈ ਰਹੈ ਨਿਸੰਕ ॥',
      'ਜੋ ਜਨੁ ਨਿਰਦਾਵੈ ਰਹੈ ਸੋ ਗਨੈ ਇੰਦ੍ਰ ਸੋ ਰੰਕ ॥੧੬੯॥',
    ],
    moolDevanagari: [
      'कबीर दावै दाझनु होतु है निरदावै रहै निसंक ॥',
      'जो जनु निरदावै रहै सो गनै इंद्र सो रंक ॥१६९॥',
    ],
    moolRoman: [
      'Kabīr dāvai dājhan hot hai nirdāvai rahai nisank.',
      'Jo jan nirdāvai rahai so ganai Indra so rank. ||169||',
    ],
    shabdarth: [
      {
        word: 'ਦਾਵੈ ਦਾਝਨੁ / दावै दाझनु',
        meaning: {
          pb: 'ਦਾਅਵਾ ਕਰਨ ਨਾਲ ਸੜਨ/ਈਰਖਾ ਹੁੰਦੀ ਹੈ',
          hi: 'दावा करने से ईर्ष्या/दाह पैदा होती है',
          en: 'Claims of ownership burn the soul with anxiety and envy',
        },
      },
      {
        word: 'ਨਿਰਦਾਵੈ / निरदावै',
        meaning: {
          pb: 'ਦਾਅਵੇ ਤੋਂ ਰਹਿਤ, ਮਲਕੀਅਤ ਹੀਨ',
          hi: 'दावा रहित, निष्काम',
          en: 'Unattached / claiming nothing',
        },
      },
      {
        word: 'ਇੰਦ੍ਰ ਸੋ ਰੰਕ / इंद्र सो रंक',
        meaning: {
          pb: 'ਇੰਦਰ ਰਾਜੇ ਨੂੰ ਵੀ ਕੰਗਾਲ ਸਮਝਦਾ ਹੈ',
          hi: 'इंद्र देव को भी दरिद्र समझता है',
          en: 'Considers even King Indra as poor in comparison',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਲਕੀਅਤ ਦਾ ਦਾਅਵਾ ਕਰਨਾ ਤਥਾ ਮਲਕੀਅਤ ਬਨਾਉਣ ਨਾਲ ਅੰਦਰ ਈਰਖਾ ਦੀ ਅੱਗ ਅਥਵਾ ਹਉਮੈ ਨਾਲ ਸੜਨ ਪੈਦਾ ਹੁੰਦੀ ਹੈ। ਪਰੰਤੂ ਜਿਹੜਾ ਪੁਰਸ਼ ਕੋਈ ਮਲਕੀਅਤ ਨਹੀਂ ਬਣਾਉਂਦਾ ਉਸ ਨੂੰ ਕੋਈ ਚਿੰਤਾ ਨਹੀਂ ਹੁੰਦੀ ਤੇ ਉਹ ਇੰਦਰ ਰਾਜੇ ਨੂੰ ਵੀ ਕੰਗਾਲ ਹੀ ਸਮਝਦਾ ਹੈ॥ ੧੬੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संपत्ति के दावे से चिंताओं और ईर्ष्या की जलन होती है, परंतु दावा-रहित पुरुष निर्भय रहता है। जो जन दावा-रहित है, वह इंद्र जैसे राजा को भी अपने आगे दरिद्र समझता है॥ १६९॥',
      en: 'Satguru Kabir Saheb proclaims: Claiming ownership causes burning envy and worry, but one without claims remains carefree. A person free from ownership regards even King Indra as poor.',
    },
    chintan: {
      pb: 'ਮਾਇਆ ਦਾ ਦਾਅਵਾ ਚਿੰਤਾ ਪੈਦਾ ਕਰਦਾ ਹੈ, ਜਦਕਿ ਨਿਰਮੋਹ ਆਤਮਾ ਸਾਰਿਆਂ ਤੋਂ ਵਡਿਆਈ ਪਾਉਂਦੀ ਹੈ।',
      hi: 'माया का दावा दाह पैदा करता है, जबकि निर्मोह आत्मा राजाओं से भी महान होती है।',
      en: 'Attachment to possessions creates internal burning, whereas non-attachment reigns supreme.',
    },
    acharana: {
      pb: 'ਮਮਤਾ ਤੇ ਮਲਕੀਅਤ ਦੀ ਅਗਨੀ ਤੋਂ ਬਚ ਕੇ ਨਿਰਮੋਹ ਅਵਸਥਾ ਵਿੱਚ ਸਥਿਤ ਹੋਵੋ।',
      hi: 'ममता और स्वामित्व की अग्नि से बचकर निर्मोह अवस्था में रहें।',
      en: 'Avoid the burning fire of possessiveness; anchor yourself in desireless detachment.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ "ਮੈ-ਮੇਰੀ" ਪ੍ਰਭੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਨਿਸੰਕ ਹੋ ਜਾਵੋ।',
      hi: 'अपनी "मैं-मेरी" प्रभु के पावन चरणों में अर्पित करके निःशंक हों।',
      en: 'Offer all sense of "mine" to the Lord and abide in fearless tranquility.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 170 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-170',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੦: ਪਾਲਿ ਸਮੁਹਾ ਸਰਵਰੁ ਭਰਾ (ਭਰਿ ਭਰਿ ਪੀਉ)',
      hi: 'सलोक १७०: पालि समुहा सरवरु भरा (भरि भरि पीउ)',
      en: 'Salok 170: Drink Deeply from the Overflowing Lake of Divine Nectar',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਾਲਿ ਸਮੁਹਾ ਸਰਵਰੁ ਭਰਾ ਪੀ ਨ ਸਕੈ ਕੋਈ ਨੀਰੁ ॥',
      'ਭਾਗ ਬਡੇ ਤੈ ਪਾਇਓ ਤੂੰ ਭਰਿ ਭਰਿ ਪੀਉ ਕਬੀਰ ॥੧੭੦॥',
    ],
    moolDevanagari: [
      'कबीर पालि समुहा सरवरु भरा पी न सकै कोई नीरु ॥',
      'भाग बडे तै पाइओ तू भरि भरि पीउ कबीर ॥१७०॥',
    ],
    moolRoman: [
      'Kabīr pāl samuhā sarvar bharā pī na sakai koī nīr.',
      'Bhāg baḍe tai pāio tū bhar bhar pīu Kabīr. ||170||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਲਿ ਸਮੁਹਾ / पालि समुहा',
        meaning: {
          pb: 'ਕਿਨਾਰਿਆਂ ਤੱਕ ਨਕਾ-ਨਕ',
          hi: 'किनारों तक लबालब',
          en: 'Brimming over the banks',
        },
      },
      {
        word: 'ਸਰਵਰੁ / सरवरु',
        meaning: {
          pb: 'ਵਾਹਿਗੁਰੂ ਨਾਮ ਦਾ ਅੰਮ੍ਰਿਤ ਸਰੋਵਰ',
          hi: 'प्रभु-नाम रूपी सरोवर',
          en: 'Sacred lake of Divine Nectar',
        },
      },
      {
        word: 'ਭਰਿ ਭਰਿ ਪੀਉ / भरि भरि पीउ',
        meaning: {
          pb: 'ਬੁੱਕ ਭਰ ਭਰ ਕੇ ਰੱਜ ਕੇ ਪੀਓ',
          hi: 'अंजलि भर-भरकर तृप्त होकर पियो',
          en: 'Drink abundantly with full palms',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਕਿਨਾਰਿਆਂ ਤੱਕ ਮੂੰਹ ਤੱਕ ਨਕਾ ਨਕ ਸਰੋਵਰ ਭਰਿਆ ਹੋਇਆ ਹੈ, ਪਰ ਉਸਦੇ ਪਾਣੀ ਨੂੰ (ਅਭਾਗਾ) ਕੋਈ ਪੀ ਨਹੀਂ ਸਕਦਾ। ਹੇ ਕਬੀਰ ! ਵੱਡੇ ਭਾਗਾਂ ਕਰਕੇ ਤੂੰ ਇਸ ਪਾਣੀ ਨੂੰ ਪਾ ਲਿਆ ਹੈ ਤੇ ਹੁਣ ਤੂੰ ਬੁੱਕ ਭਰ ਭਰ ਕੇ ਪੀ, ਇਹ ਵਾਹਿਗੁਰੂ ਨਾਮ ਦਾ ਸਰੋਵਰ ਜਲ ਹੈ॥ ੧੭੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हरि-नाम का सरोवर लबालब भरा हुआ है, परंतु अभागे जीव उसका जल नहीं पी पाते। हे कबीर! बड़े भाग्य से तुझे यह अमूर्त नाम-जल मिला है, अब तू भर-भरकर इसे पियो॥ १७०॥',
      en: 'Satguru Kabir Saheb proclaims: The ocean of God’s Name is brimming over its banks, yet the unfortunate cannot drink it. By great good fortune, O Kabir, you have found it—drink deeply of this Divine Nectar!',
    },
    chintan: {
      pb: 'ਨਾਮ ਅੰਮ੍ਰਿਤ ਦਾ ਸਰੋਵਰ ਸਦਾ ਭਰਪੂਰ ਹੈ, ਭਾਗਾਂ ਵਾਲੇ ਹੀ ਇਸ ਦੀ ਤ੍ਰਿਪਤੀ ਲੈਂਦੇ ਹਨ।',
      hi: 'नाम-अमृत का सरोवर सदा परिपूर्ण है, भाग्यशाली जीव ही इससे तृप्त होते हैं।',
      en: 'The Nectar of the Name is endlessly overflowing; fortunate souls partake of it to full saturation.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਨਾਮ ਅੰਮ੍ਰਿਤ ਰਸ ਨੂੰ ਹਰ ਸਮੇਂ ਇਕਮਨ ਹੋ ਕੇ ਛਕੋ ਤੇ ਆਤਮਿਕ ਤ੍ਰਿਪਤੀ ਲਵੋ।',
      hi: 'प्रभु नाम-अमृत रस का हर समय ध्यानपूर्वक पान करें और आत्म-तृप्ति पाएं।',
      en: 'Drink from the pool of Nam continuously and satisfy your soul’s eternal thirst.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਪਿਆਸੀ ਆਤਮਾ ਨੂੰ ਪ੍ਰਭੂ ਨਾਮ ਸਰੋਵਰ ਦੇ ਅੰਮ੍ਰਿਤ ਵਿੱਚ ਲੀਨ ਕਰੋ।',
      hi: 'अपनी प्यासी आत्मा को प्रभु नाम-सरोवर में निमग्न कर दें।',
      en: 'Immerse your thirsty soul into the limitless Nectar Lake of the Almighty.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 171 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-171',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੧: ਪਰਭਾਤੇ ਤਾਰੇ ਖਿਸਹਿ (ਏ ਦੁਇ ਅਖਰ ਨਾ ਖਿਸਹਿ)',
      hi: 'सलोक १७१: परभाते तारे खिसहि (ए दुइ अखर ना खिसहि)',
      en: 'Salok 171: As Morning Stars Fade, So Fades the Body; Holding to RAM',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਪਰਭਾਤੇ ਤਾਰੇ ਖਿਸਹਿ ਤਿਉ ਇਹੁ ਖਿਸੈ ਸਰੀਰੁ ॥',
      'ਏ ਦੁਇ ਅਖਰ ਨਾ ਖਿਸਹਿ ਸੋ ਗਹਿ ਰਹਿਓ ਕਬੀਰੁ ॥੧੭੧॥',
    ],
    moolDevanagari: [
      'कबीर परभाते तारे खिसहि तिउ इहु खिसै सरीरु ॥',
      'ए दुइ अखर ना खिसहि सो गहि रहिओ कबीरु ॥१७१॥',
    ],
    moolRoman: [
      'Kabīr parbhāte tāre khisah tiu ih khisai sarīr.',
      'E dui akhar nā khisah so gah rahio Kabīr. ||171||',
    ],
    shabdarth: [
      {
        word: 'ਪਰਭਾਤੇ ਤਾਰੇ / परभाते तारे',
        meaning: {
          pb: 'ਪਰਭਾਤ ਸਮੇਂ ਦੇ ਤਾਰੇ',
          hi: 'प्रातःकाल के लुप्त होते तारे',
          en: 'Morning stars fading away',
        },
      },
      {
        word: 'ਖਿਸੈ ਸਰੀਰੁ / खिसै सरीरु',
        meaning: {
          pb: 'ਸਰੀਰ ਢਲਦਾ/ਨਾਸ਼ ਹੁੰਦਾ ਹੈ',
          hi: 'शरीर ढलता और नष्ट होता है',
          en: 'Body fades and deteriorates',
        },
      },
      {
        word: 'ਏ ਦੁਇ ਅਖਰ / ए दुइ अखर',
        meaning: {
          pb: 'ਰਾਮ ਨਾਮ ਦੇ ਦੋ ਅੱਖਰ (ਰ ਅਤੇ ਮ)',
          hi: 'राम नाम के दो अक्षर (र और म)',
          en: 'The two letters of RAM (God’s Name)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਜਿਸ ਤਰ੍ਹਾਂ ਪਰਭਾਤ ਸਮੇਂ ਅਕਾਸ਼ ਦੇ ਤਾਰੇ ਖਿਸਕਦੇ ਜਾਂਦੇ ਹਨ, ਤਿਵੇਂ ਹੀ ਬੁਢਾਪੇ ਕਾਰਨ ਇਹ ਸਰੀਰ ਢਲਦਾ ਪਿਛੇ ਹਟਦਾ ਜਾਂਦਾ ਹੈ, ਪਰ ਇਹ ਦੋ ਰਾਮ ਨਾਮ ਦੇ ਅੱਖਰ (ਰ ਅਤੇ ਮ) ਨਹੀਂ ਮਿਟਦੇ, ਜਿਸ ਕਰਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਹੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਹਿਰਦੇ ਵਿਚ ਫੜ ਰਖਿਆ ਹੈ॥ ੧੭੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे प्रभात काल में आकाश के तारे एक-एक कर गायब हो जाते हैं, वैसे ही यह शरीर ढल जाता है। परंतु राम नाम के दो अक्षर कभी नष्ट नहीं होते, कबीर ने उसी अविनाशी नाम को थाम रखा है॥ १७१॥',
      en: 'Satguru Kabir Saheb proclaims: As the stars fade away at dawn, so does this human body wither away. But the two letters of RAM (God’s Name) never perish, and Kabir holds fast to that Eternal Name.',
    },
    chintan: {
      pb: 'ਸਰੀਰ ਦੀ ਨਾਸ਼ਵੰਤਤਾ ਸਾਹਮਣੇ ਅਵਿਨਾਸ਼ੀ ਰਾਮ ਨਾਮ ਹੀ ਇੱਕੋ-ਇੱਕ ਸਦਾ ਥਿਰ ਆਧਾਰ ਹੈ।',
      hi: 'शरीर के नश्वर स्वभाव के समक्ष अविनाशी राम-नाम ही एक मात्र अचल सहारा है।',
      en: 'Amidst the impermanence of the physical body, the Eternal Name of God is the only unfailing anchor.',
    },
    acharana: {
      pb: 'ਢਲਦੇ ਸਰੀਰ ਦਾ ਮੋਹ ਛੱਡ ਕੇ ਅਵਿਨਾਸ਼ੀ ਰਾਮ ਨਾਮ ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਧਾਰਨ ਕਰੋ।',
      hi: 'नश्वर शरीर का मोह छोड़कर अविनाशी राम-नाम को हृदय में धारण करें।',
      en: 'Release attachment to the aging body and grasp tightly to the Imperishable Name.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਧਿਆਨ ਅਵਿਨਾਸ਼ੀ ਰਾਮ ਅੱਖਰਾਂ ਵਿੱਚ ਲਗਾ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰ ਦਿਓ।',
      hi: 'अपना ध्यान अविनाशी राम नाम के चरणों में अर्पित कर दें।',
      en: 'Anchor your spirit to the immortal letters of God’s Name now and forever.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 172 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-172',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੨: ਕੋਠੀ ਕਾਠ ਕੀ (ਮੂਰਖ ਉਬਰੇ ਭਾਗਿ)',
      hi: 'सलोक १७२: कोठी काठ की (मूरख उबरे भागि)',
      en: 'Salok 172: The Wooden House Ablaze; Scholars Burn, Devotees Escape',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੋਠੀ ਕਾਠ ਕੀ ਦਹ ਦਿਸਿ ਲਾਗੀ ਆਗਿ ॥',
      'ਪੰਡਿਤ ਪੰਡਿਤ ਜਲਿ ਮੁਏ ਮੂਰਖ ਉਬਰੇ ਭਾਗਿ ॥੧੭੨॥',
    ],
    moolDevanagari: [
      'कबीर कोठी काठ की दह दिसि लागी आगि ॥',
      'पंडित पंडित जलि मुए मूरख उबरे भागि ॥१७२॥',
    ],
    moolRoman: [
      'Kabīr koṭhī kāṭh kī dah dis lāgī āg.',
      'Paṇḍit paṇḍit jal mue mūrakh ubare bhāg. ||172||',
    ],
    shabdarth: [
      {
        word: 'ਕੋਠੀ ਕਾਠ ਕੀ / कोठी काठ की',
        meaning: {
          pb: 'ਲੱਕੜ ਦਾ ਘਰ (ਸੰਸਾਰ / ਸਰੀਰ)',
          hi: 'लकड़ी का घर (संसार/शरीर)',
          en: 'Wooden house (world / mortal body)',
        },
      },
      {
        word: 'ਦਹ ਦਿਸਿ ਆਗਿ / दह दिसि आगि',
        meaning: {
          pb: 'ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਮੋਹ ਮਾਇਆ ਦੀ ਅੱਗ',
          hi: 'दसों दिशाओं में तृष्णा/माया की अग्नि',
          en: 'Fire of desires burning in all ten directions',
        },
      },
      {
        word: 'ਮੂਰਖ ਉਬਰੇ ਭਾਗਿ / मूरख उबरे भागि',
        meaning: {
          pb: 'ਨਿਰਲੇਪ ਭਗਤ (ਜਿਨ੍ਹਾਂ ਨੂੰ ਜਗਤ ਮੂਰਖ ਕਹਿੰਦਾ ਹੈ) ਬਚ ਕੇ ਭੱਜ ਨਿਕਲੇ',
          hi: 'सरल-हृदय भक्त (जिन्हें दुनिया मूर्ख समझती है) भागकर बच गए',
          en: 'Innocent devotees (called fools by worldly men) escaped safely',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਜਗਤ ਰੂਪੀ ਕੋਠੀ ਲੱਕੜ ਦੀ ਹੈ, ਇਸ ਦੇ ਦਸਾਂ ਦਿਸ਼ਾਂ ਵਿਚ ਹੀ ਮੋਹ ਮਾਇਆ ਦੀ ਅੱਗ ਲੱਗੀ ਹੋਈ ਹੈ। ਇਸ ਅੱਗ ਵਿਚ ਆਪਣੇ ਆਪ ਨੂੰ ਸਿਆਣੇ ਸਮਝਣ ਵਾਲੇ ਪੰਡਿਤ ਸੜ ਮਰਦੇ ਹਨ ਅਤੇ ਇਸ ਮੋਹ ਮਾਇਆ ਤੋਂ ਨਿਰਲੇਪ ਰਹਿਣ ਵਾਲੇ (ਜਿਨ੍ਹਾਂ ਨੂੰ ਲੋਕ ਮੂਰਖ ਸਮਝਦੇ ਹਨ) ਉਹ ਭੱਜ ਕੇ ਬਚ ਨਿਕਲਦੇ ਹਨ॥ ੧੭੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यह संसार लकड़ी का कोठा है, जिसमें दसों दिशाओं से तृष्णा की आग लगी है। अपने को चतुर मानने वाले पंडित विद्वान इसमें जल मरे, परंतु निष्काम-सरल भक्त (जिन्हें दुनिया मूर्ख कहती है) भागकर बच निकले॥ १७२॥',
      en: 'Satguru Kabir Saheb proclaims: This world is a house of wood, set ablaze on all ten sides by the fire of desires. The self-wise scholars burn to death in it, while the innocent, detached souls (whom the world calls fools) escape in safety.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਚਤੁਰਾਈ ਤੇ ਹਉਮੈ ਮਾਇਆ ਦੀ ਅੱਗ ਵਿੱਚ ਜਲਾਉਂਦੀ ਹੈ, ਜਦਕਿ ਨਿਰਮਲ ਭਗਤੀ ਬਚਾਉਂਦੀ ਹੈ।',
      hi: 'पांडित्य का अहंकार तृष्णा में जलाता है, जबकि निष्कपट भक्ति जीव की रक्षा करती है।',
      en: 'Intellectual pride burns in worldly fires, whereas simple, unpretentious devotion brings salvation.',
    },
    acharana: {
      pb: 'ਚਤੁਰਾਈ ਦਾ ਹੰਕਾਰ ਛੱਡ ਕੇ ਭੋਲੇ ਭਾਅ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਹੋ ਕੇ ਅੱਗ ਤੋਂ ਬਚੋ।',
      hi: 'चतुराई का अहंकार छोड़कर निश्छल भाव से प्रभु की शरण लें।',
      en: 'Abandon intellectual arrogance and escape the fires of greed through pure innocence.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਦੀ ਚਤੁਰਾਈ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਨਿਰਹੰਕਾਰੀ ਬਣੋ।',
      hi: 'अपनी बौद्धिक चतुराई प्रभु चरणों में समर्पित कर निरहंकारी बनें।',
      en: 'Surrender all clever intellect at God’s feet and dwell in childlike purity.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 173 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-173',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੩: ਸੰਸਾ ਦੂਰਿ ਕਰੁ (ਬਾਵਨ ਅਖਰ ਸੋਧਿ)',
      hi: 'सलोक १७३: संसा दूरि करु (बावन अखर सोधि)',
      en: 'Salok 173: Dispelling Doubt and Fixing the Mind on God’s Feet',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਸਾ ਦੂਰਿ ਕਰੁ ਕਾਗਦ ਦੇਹ ਬਿਹਾਇ ॥',
      'ਬਾਵਨ ਅਖਰ ਸੋਧਿ ਕੈ ਹਰਿ ਚਰਨੀ ਚਿਤੁ ਲਾਇ ॥੧੭੩॥',
    ],
    moolDevanagari: [
      'कबीर संसा दूरि करु कागद देह बिहाइ ॥',
      'बावन अखर सोधि कै हरि चरनी चितु लाइ ॥१७३॥',
    ],
    moolRoman: [
      'Kabīr sansā dūr kar kāgad deh bihāe.',
      'Bāvan akhar sodh kai Har charnī chit lāe. ||173||',
    ],
    shabdarth: [
      {
        word: 'ਸੰਸਾ / संसा',
        meaning: {
          pb: 'ਸੰਸਾ, ਸ਼ੰਕਾ, ਭਰਮ',
          hi: 'संशय, भ्रम, शंका',
          en: 'Doubts and misgivings',
        },
      },
      {
        word: 'ਕਾਗਦ ਦੇਹ ਬਿਹਾਇ / कागद देह बिहाइ',
        meaning: {
          pb: 'ਕਰਮ-ਕਾਂਡੀ ਕਾਗਜ਼ਾਂ/ਗ੍ਰੰਥਾਂ ਦੀ ਚਰਚਾ ਛੱਡ ਦੇਹ',
          hi: 'कर्मकांडी कागजों/ग्रंथों का फेर छोड़ दे',
          en: 'Put aside endless ritualistic writings',
        },
      },
      {
        word: 'ਬਾਵਨ ਅਖਰ ਸੋਧਿ / बावन अखर सोधि',
        meaning: {
          pb: 'ਬਵੰਜਾ ਅੱਖਰਾਂ (ਵਰਣਮਾਲਾ) ਦਾ ਸਾਰ ਸੋਧ ਕੇ',
          hi: 'बावन अक्षरों का सार विचारकर',
          en: 'Contemplating the essence of all letters/scripts',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਭਰਮ ਨੂੰ ਦੂਰ ਕਰਕੇ, ਕਰਮ ਕਾਂਡਾਂ ਵਾਲੇ ਕਾਗਜ਼ਾਂ (ਗ੍ਰੰਥਾਂ) ਨੂੰ ਛਡ ਦੇਹ। ਤੂੰ ਕੇਵਲ ਬਵੰਜਾ ਅੱਖਰਾਂ ਦਾ ਸਾਰ ਵੀਚਾਰ ਕੇ ਕਿ ਇਨ੍ਹਾਂ ਵਿੱਚ ਕੀ ਉਪਦੇਸ਼ ਹੈ, ਪ੍ਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿਚ ਆਪਣੇ ਮਨ ਨੂੰ ਜੋੜ॥ ੧੭੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संशय को दूर करो और कर्मकांडी शास्त्रों का पचड़ा छोड़ दो। बावन अक्षरों का सार विचारकर केवल हरि-चरणों में अपना चित्त लगाओ॥ १७३॥',
      en: 'Satguru Kabir Saheb proclaims: Cast away all doubts and put aside academic debate over paper texts. Contemplate the true essence of all letters and fix your consciousness at the lotus feet of the Lord.',
    },
    chintan: {
      pb: 'ਕੇਵਲ ਪੋਥੀਆਂ ਪੜ੍ਹਨ ਨਾਲ ਨਹੀਂ, ਸਗੋਂ ਹਰਿ ਚਰਨਾਂ ਵਿੱਚ ਚਿੱਤ ਲਗਾਉਣ ਨਾਲ ਭਰਮ ਦੂਰ ਹੁੰਦਾ ਹੈ।',
      hi: 'केवल ग्रंथ पढ़ने से नहीं, बल्कि प्रभु चरणों में चित्त लगाने से संशय मिटता है।',
      en: 'True wisdom is not mere reading of paper books, but anchoring the mind in Divine remembrance.',
    },
    acharana: {
      pb: 'ਵਿਅਰਥ ਸ਼ੰਕਿਆਂ ਨੂੰ ਛੱਡ ਕੇ ਗੁਰੂ ਸ਼ਬਦ ਦੁਆਰਾ ਹਰਿ ਚਰਨਾਂ ਨਾਲ ਪ੍ਰੇਮ ਜੋੜੋ।',
      hi: 'व्यर्थ शंकाओं को त्यागकर गुरु-शब्द द्वारा हरि चरणों से प्रेम जोड़ें।',
      en: 'Discard fruitless doubts and fix your attention directly on God’s Holy Feet.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ-ਬ੍ਰਿਤੀ ਅਤੇ ਬੁੱਧੀ ਪ੍ਰਭੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना चित्त और बुद्धि प्रभु के पावन चरणों में समर्पित करें।',
      en: 'Offer your entire intellect and devotion exclusively at the lotus feet of God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 174 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-174',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੪: ਸੰਤੁ ਨ ਛਾਡੈ ਸੰਤਈ (ਮਲਿਆਗਰੁ ਭੁਯੰਗਮ)',
      hi: 'सलोक १७४: संतु न छाडै संतई (मलिआगरु भुयंगम)',
      en: 'Salok 174: A Saint Never Abandons Saintliness, Like Sandalwood with Snakes',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੰਤੁ ਨ ਛਾਡੈ ਸੰਤਈ ਜਉ ਕੋਟਿਕ ਮਿਲਹਿ ਅਸੰਤ ॥',
      'ਮਲਿਆਗਰੁ ਭੁਯੰਗਮ ਬੇਢਿਓ ਤ ਸੀਤਲਤਾ ਨ ਤਜੰਤ ॥੧੭੪॥',
    ],
    moolDevanagari: [
      'कबीर संतु न छाडै संतई जउ कोटिक मिलहि असंत ॥',
      'मलिआगरु भुयंगम बेढिओ त सीतलता न तजंत ॥१७४॥',
    ],
    moolRoman: [
      'Kabīr sant na chhāḍai santī jau koṭik milah asant.',
      'Maliāgar bhuyangam beḍhio ta sītaltā na tajant. ||174||',
    ],
    shabdarth: [
      {
        word: 'ਸੰਤਈ / संतई',
        meaning: {
          pb: 'ਸੰਤਪੁਣਾ, ਸ਼ਾਂਤੀ ਤੇ ਸ਼ੁਭ ਗੁਣ',
          hi: 'संतता, शांति व शुभ गुण',
          en: 'Saintliness / inherent peaceful virtues',
        },
      },
      {
        word: 'ਮਲਿਆਗਰੁ / मलिआगरु',
        meaning: {
          pb: 'ਮਲਯ ਪਹਾੜ ਦਾ ਚੰਦਨ',
          hi: 'चंदन का वृक्ष',
          en: 'Sandalwood tree',
        },
      },
      {
        word: 'ਭੁਯੰਗਮ ਬੇਢਿਓ / भुयंगम बेढिओ',
        meaning: {
          pb: 'ਸੱਪਾਂ ਨਾਲ ਲਪੇਟਿਆ ਹੋਇਆ ਵੀ',
          hi: 'सर्पों से घिरा होने पर भी',
          en: 'Even when encircled by venomous snakes',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਹਾਂ ਪੁਰਸ਼ ਸੰਤ ਆਪਣੇ ਸੰਤਪੁਣੇ (ਸ਼ੁਭ ਸੁਭਾਅ) ਨੂੰ ਨਹੀਂ ਛੱਡਦਾ, ਭਾਵੇਂ ਉਸਨੂੰ ਕ੍ਰੋੜਾਂ ਹੀ ਅਸੰਤ ਪੁਰਸ਼ ਮਿਲ ਜਾਣ। ਜਿਵੇਂ ਚੰਦਨ ਦਾ ਬਿੱਛ ਸੱਪਾਂ ਨਾਲ ਲਪੇਟਿਆ ਹੋਇਆ ਵੀ ਆਪਣੀ ਸੀਤਲਤਾ (ਠੰਢਕ) ਨਹੀਂ ਤਿਆਗਦਾ॥ ੧੭੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-संत पुरुष कभी अपनी संतता और शांत स्वभाव नहीं त्यागते, चाहे उन्हें करोड़ों दुष्ट पुरुष मिल जाएं। जैसे चंदन का वृक्ष विषैले सांपों से घिरा रहकर भी अपनी शीतलता नहीं छोड़ता॥ १७४॥',
      en: 'Satguru Kabir Saheb proclaims: A true Saint never abandons his peaceful saintly nature, even if he encounters millions of wicked people. Just as the sandalwood tree remains cool even when encircled by poisonous snakes.',
    },
    chintan: {
      pb: 'ਸੱਚਾ ਸੰਤ ਬੁਰਿਆਈ ਦਾ ਬਦਲਾ ਬੁਰਿਆਈ ਨਾਲ ਨਹੀਂ ਦਿੰਦਾ, ਸਗੋਂ ਆਪਣੇ ਸ਼ਾਂਤ ਸੁਭਾਅ ਵਿੱਚ ਅਡੋਲ ਰਹਿੰਦਾ ਹੈ।',
      hi: 'सच्चा संत बुराई का उत्तर बुराई से नहीं देता, बल्कि अपने शीतल स्वभाव में अचल रहता है।',
      en: 'The saintly soul remains undisturbed by surrounding negativity, maintaining innate purity and coolness.',
    },
    acharana: {
      pb: 'ਮਾੜੀ ਸੰਗਤ ਵਿੱਚ ਵੀ ਆਪਣੇ ਆਤਮਿਕ ਧੀਰਜ ਅਤੇ ਸ਼ਾਂਤ ਸੁਭਾਵ ਨੂੰ ਕਾਇਮ ਰੱਖੋ।',
      hi: 'विषम परिस्थितियों में भी अपने आत्मिक धैर्य और शांत स्वभाव को बनाए रखें।',
      en: 'Maintain saintly patience and calmness regardless of surrounding adversity or malice.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਹਿਰਦੇ ਦੀ ਸੀਤਲਤਾ ਨੂੰ ਸਤਿਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਅਡੋਲ ਹੋਵੋ।',
      hi: 'अपने हृदय की शीतलता सतगुरु चरणों में अर्पित कर अचल हों।',
      en: 'Surrender your heart to the Satguru to remain forever cool and unshakable.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 175 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-175',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੫: ਮਨੁ ਸੀਤਲੁ ਭਇਆ (ਪਾਇਆ ਬ੍ਰਹਮ ਗਿਆਨੁ)',
      hi: 'सलोक १७५: मनु सीतलु भइआ (पाइआ ब्रहम गिआनु)',
      en: 'Salok 175: Mind Cooled by Brahm Gyan; Worldly Flames Become Water',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਨੁ ਸੀਤਲੁ ਭਇਆ ਪਾਇਆ ਬ੍ਰਹਮ ਗਿਆਨੁ ॥',
      'ਜਿਨਿ ਜੁਆਲਾ ਜਗੁ ਜਾਰਿਆ ਸੁ ਜਨ ਕੇ ਉਦਕ ਸਮਾਨਿ ॥੧੭੫॥',
    ],
    moolDevanagari: [
      'कबीर मनु सीतलु भइआ पाइआ ब्रहम गिआनु ॥',
      'जिनि दुआला जगु जारिआ सु जन के उदक समानि ॥१७५॥',
    ],
    moolRoman: [
      'Kabīr man sītal bhaīā pāiā Braham giān.',
      'Jin juālā jag jāriā su jan ke udak samān. ||175||',
    ],
    shabdarth: [
      {
        word: 'ਮਨੁ ਸੀਤਲੁ / मनु सीतलु',
        meaning: {
          pb: 'ਮਨ ਸ਼ਾਂਤ ਤੇ ਠੰਡਾ ਹੋ ਗਿਆ',
          hi: 'मन शीतल व शांत हो गया',
          en: 'Mind became tranquil and cool',
        },
      },
      {
        word: 'ਬ੍ਰਹਮ ਗਿਆਨੁ / ब्रहम गिआनु',
        meaning: {
          pb: 'ਪਰਮਾਤਮਾ ਦਾ ਆਤਮ-ਗਿਆਨ',
          hi: 'ब्रह्म का परम ज्ञान',
          en: 'Supreme divine wisdom',
        },
      },
      {
        word: 'ਜੁਆਲਾ ਜਗੁ ਜਾਰਿਆ / दुआला जगु जारिआ',
        meaning: {
          pb: 'ਜਿਸ ਮਾਇਆ ਦੀ ਅੱਗ ਨੇ ਜਗਤ ਨੂੰ ਸਾੜਿਆ',
          hi: 'जिस तृष्णा-अग्नि ने संसार को जलाया',
          en: 'The fire of desire that burnt the world',
        },
      },
      {
        word: 'ਉਦਕ ਸਮਾਨਿ / उदक समानि',
        meaning: {
          pb: 'ਪਾਣੀ ਵਾਂਗ ਠੰਡੀ ਠਾਰ',
          hi: 'जल के समान शीतल',
          en: 'Cool like refreshing water',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨ ਸ਼ਾਂਤ ਹੋ ਗਿਆ ਹੈ, ਕਿਉਂਕਿ ਬ੍ਰਹਮ ਗਿਆਨ ਨੂੰ ਪਾ ਲਿਆ ਹੈ। ਹੁਣ ਜਿਹੜੀ ਮਾਇਆ ਦੀ ਅਗਨੀ ਨੇ ਸੰਸਾਰ ਦੇ ਜੀਵਾਂ ਨੂੰ ਆਪਣੀ ਲਪੇਟ ਵਿਚ ਲੈ ਕੇ ਸਾੜ ਦਿਤਾ ਹੈ, ਉਹ ਅਗਨੀ ਦਾਸ ਲਈ ਪਾਣੀ ਸਮਾਨ ਠੰਡੀ ਠਾਰ ਹੋ ਗਈ ਹੈ॥ ੧੭੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-ब्रह्मज्ञान प्राप्त होते ही मन शीतल हो गया। जिस तृष्णा-रूपी ज्वाला ने पूरे संसार को जला रखा है, वह ईश्वर के दास के लिए शीतल जल के समान शांत हो गई है॥ १७५॥',
      en: 'Satguru Kabir Saheb proclaims: Receiving Divine Wisdom, my mind has become profoundly tranquil. The raging fire of worldly desire that consumes the world has become as cool as soothing water for God’s servant.',
    },
    chintan: {
      pb: 'ਬ੍ਰਹਮ ਗਿਆਨ ਦੀ ਪ੍ਰਾਪਤੀ ਨਾਲ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਸ਼ਾਂਤ ਹੋ ਕੇ ਆਤਮਿਕ ਸੀਤਲਤਾ ਬਣ ਜਾਂਦੀ ਹੈ।',
      hi: 'ब्रह्मज्ञान प्राप्त होते ही तृष्णा की ज्वाला शांत होकर परम शांति में बदल जाती है।',
      en: 'Divine knowledge completely quenches the fire of worldly craving, turning it into soothing nectar.',
    },
    acharana: {
      pb: 'ਗੁਰਮਤਿ ਗਿਆਨ ਦੀ ਰੋਸ਼ਨੀ ਦੁਆਰਾ ਮਾਇਆ ਦੀ ਅੱਗ ਤੋਂ ਆਪਣੇ ਮਨ ਨੂੰ ਮੁਕਤ ਕਰੋ।',
      hi: 'गुरु-ज्ञान के प्रकाश द्वारा मन को तृष्णा की अग्नि से मुक्त रखें।',
      en: 'Bask in the light of spiritual knowledge to cool all flames of desire and anxiety.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਾ ਨੂੰ ਪਰਮਾਤਮਾ ਦੇ ਬ੍ਰਹਮ ਗਿਆਨ ਵਿੱਚ ਲੀਨ ਕਰ ਦਿਓ।',
      hi: 'अपनी आत्मा को ब्रह्मज्ञान के प्रकाश में समर्पित करें।',
      en: 'Surrender your spirit entirely to the illuminating wisdom of the Supreme Soul.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 176 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-176',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੬: ਸਾਰੀ ਸਿਰਜਨਹਾਰ ਕੀ (ਜਾਨੈ ਨਾਹੀ ਕੋਇ)',
      hi: 'सलोक १७६: सारी सिरजनहार की (जानै नाही कोइ)',
      en: 'Salok 176: The Creation Is the Creator’s Game; Known Only to Love-Drunk Devotees',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਰੀ ਸਿਰਜਨਹਾਰ ਕੀ ਜਾਨੈ ਨਾਹੀ ਕੋਇ ॥',
      'ਕੈ ਜਾਨੈ ਆਪਨ ਧਨੀ ਕੈ ਦਾਸੁ ਦੀਵਾਨੀ ਹੋਇ ॥੧੭੬॥',
    ],
    moolDevanagari: [
      'कबीर सारी सिरजनहार की जानै नाही कोइ ॥',
      'कै जानै आपन धनी कै दासु दीवानी होइ ॥१७६॥',
    ],
    moolRoman: [
      'Kabīr sārī sirjanhār kī jānai nāhī koi.',
      'Kai jānai āpan dhanī kai dās dīvānī hoi. ||176||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਰੀ / सारी',
        meaning: {
          pb: 'ਖੇਡ, ਰਚਨਾ, ਚੌਪੜ ਦੀ ਬਾਜ਼ੀ',
          hi: 'सृष्टि-खेल, चौपड़ की बाजी',
          en: 'The cosmic game / creation',
        },
      },
      {
        word: 'ਆਪਨ ਧਨੀ / आपन धनी',
        meaning: {
          pb: 'ਸ੍ਰਿਸ਼ਟੀ ਦਾ ਮਾਲਕ ਪ੍ਰਭੂ ਆਪ',
          hi: 'सृष्टि का स्वामी प्रभु स्वयं',
          en: 'The Creator Master Himself',
        },
      },
      {
        word: 'ਦਾਸੁ ਦੀਵਾਨੀ / दासु दीवानी',
        meaning: {
          pb: 'ਪ੍ਰੇਮ ਵਿੱਚ ਮਸਤ ਦਾਸ / ਭਗਤ',
          hi: 'प्रभु-प्रेम में मग्न अनन्य भक्त',
          en: 'Devotee intoxicated in divine love',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਹਾਰ ਪ੍ਰਮਾਤਮਾ ਦੀ ਖੇਲ ਹੈ, ਇਸ ਖੇਲ ਨੂੰ (ਆਮ ਜੀਵ) ਕੋਈ ਨਹੀਂ ਜਾਣਦਾ। ਜਾਂ ਪ੍ਰਮਾਤਮਾ ਆਪ ਹੀ ਇਸ ਨੂੰ ਜਾਣਦਾ ਹੈ ਤੇ ਜਾਂ ਉਸਦੇ ਦਰਬਾਰ ਵਿਚ ਰਹਿਣ ਵਾਲਾ ਪ੍ਰੇਮ ਮਸਤ ਦਾਸ ਹੀ ਉਸ ਦੀ ਇਸ ਖੇਡ ਨੂੰ ਜਾਣ ਸਕਦਾ ਹੈ॥ ੧੭੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यह पूरी सृष्टि सिरजनहार की एक लीला-खेल है, जिसे साधारण कोई नहीं जान सकता। या तो स्वयं स्वामी प्रभु इसे जानता है, या फिर उसके प्रेम में मग्न हुआ अनन्य दास ही इसे समझ पाता है॥ १७६॥',
      en: 'Satguru Kabir Saheb proclaims: This entire cosmos is the play of the Creator, and no ordinary person understands it. Either the Master Himself knows His play, or the devotee who is deeply intoxicated with His divine love understands it.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਕੁਦਰਤ ਤੇ ਖੇਡ ਅਗਾਧ ਹੈ, ਇਸ ਦੀ ਸਮਝ ਕੇਵਲ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਭਗਤ ਨੂੰ ਹੁੰਦੀ ਹੈ।',
      hi: 'प्रभु की लीला अपरंपार है; इसकी समझ केवल प्रभु-प्रेम में लीन भक्त को ही होती है।',
      en: 'The Creator’s cosmic drama is infinite; only a soul dissolved in Divine love gains insight into it.',
    },
    acharana: {
      pb: 'ਕੁਦਰਤ ਦੀ ਖੇਡ ਅੱਗੇ ਨਿਮਰ ਹੋ ਕੇ ਵਾਹਿਗੁਰੂ ਦੇ ਪ੍ਰੇਮ ਦੀ ਦੀਵਾਨਗੀ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'सृष्टि-लीला के आगे नम्र होकर प्रभु के अनन्य प्रेम में लीन हों।',
      en: 'Bow in awe before the Creator’s play and immerse yourself in ecstatic devotion.',
    },
    samarpan: {
      pb: 'ਸਿਰਜਨਹਾਰ ਪ੍ਰਭੂ ਦੀ ਅਥਾਹ ਖੇਡ ਅੱਗੇ ਆਪਣੀ ਸਮੁੱਚੀ ਹਸਤੀ ਨੂੰ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'सिरजनहार की इस विशाल लीला में अपना सर्वस्व अर्पित करें।',
      en: 'Surrender your entire existence into the mystical, joyful play of the Almighty Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 177 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-177',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੭: ਭਲੀ ਭਈ ਜੋ ਭਉ ਪਰਿਆ (ਦਿਸਾ ਗਈ ਸਭ ਭੂਲਿ)',
      hi: 'सलोक १७७: भली भई जो भउ परिआ (दिसा गई सभ भूलि)',
      en: 'Salok 177: Blessed Divine Fear Dissolves Worldly Pursuits Like Hail Melting into Water',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਭਲੀ ਭਈ ਜੋ ਭਉ ਪਰਿਆ ਦਿਸਾ ਗਈ ਸਭ ਭੂਲਿ ॥',
      'ਓਰਾ ਗਰਿ ਪਾਨੀ ਭਇਆ ਜਾਇ ਮਿਲਿਓ ਢਲਿ ਕੂਲਿ ॥੧੭੭॥',
    ],
    moolDevanagari: [
      'कबीर भली भई जो भउ परिआ दिसा गई सभ भूलि ॥',
      'ओरा गरि पानी भइआ जाइ मिलिओ ढलि कूल॥१७७॥',
    ],
    moolRoman: [
      'Kabīr bhalī bhaī jo bhau pariā disā gaī sabh bhūl.',
      'Orā gar pānī bhaīā jāe milio ḍhal kūl. ||177||',
    ],
    shabdarth: [
      {
        word: 'ਭਉ ਪਰਿਆ / भउ परिआ',
        meaning: {
          pb: 'ਵਾਹਿਗੁਰੂ ਦਾ ਭੈ ਮਨ ਵਿਚ ਵੱਸ ਗਿਆ',
          hi: 'ईश्वर का पावन भय मन में बसा',
          en: 'Reverent fear of God entered the mind',
        },
      },
      {
        word: 'ਦਿਸਾ ਗਈ ਭੂਲਿ / दिसा गई भूलि',
        meaning: {
          pb: 'ਸੰਸਾਰਿਕ ਭਟਕਣਾਵਾਂ ਭੁੱਲ ਗਈਆਂ',
          hi: 'सांसारिक दिशाएं और भटकाव भूल गए',
          en: 'All worldly directions and distractions forgotten',
        },
      },
      {
        word: 'ਓਰਾ / ओरा',
        meaning: {
          pb: 'ਗੜਾ (ਬ੍ਰਫ ਦਾ ਗੋਲਾ)',
          hi: 'ओला (बर्फ का गोला)',
          en: 'Hailstone',
        },
      },
      {
        word: 'ਢਲਿ ਕੂਲਿ / ढलि कूल',
        meaning: {
          pb: 'ਪਿਘਲ ਕੇ ਨਦੀ/ਝਰਨੇ ਦੀ ਧਾਰਾ ਵਿਚ ਮਿਲ ਗਿਆ',
          hi: 'पिघलकर नदी की धारा में मिल गया',
          en: 'Melted and merged into the flowing stream',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਚੰਗੀ ਗੱਲ ਹੋਈ ਕਿ ਪ੍ਰਮਾਤਮਾ ਦਾ ਡਰ ਮਨ ਵਿਚ ਪੈ ਗਿਆ ਜਿਸ ਨਾਲ ਸੰਸਾਰ ਦੀ ਦਿਸ਼ਾ ਸਭ ਭੁਲ ਗਈ ਹੈ। ਜਿਸ ਤਰ੍ਹਾਂ ਗੜਾ ਗਰਮੀ ਨਾਲ ਢਲ ਕੇ ਪਾਣੀ ਰੂਪ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਪਹਾੜ ਦੀ ਆੜ/ਕੂਲ ਵਿਚ ਜਾ ਮਿਲਦਾ ਹੈ, ਇਸ ਤਰ੍ਹਾਂ ਹੀ ਪ੍ਰਮਾਤਮਾ ਦੇ ਭੈ ਕਰਕੇ ਆਪਾ ਭਾਵ ਮਿਟ ਕੇ ਪ੍ਰਮਾਤਮਾ ਨਾਮ ਦੀ ਕੂਲ ਵਿਚ ਮਿਲ ਜਾਂਦਾ ਹੈ॥ ੧੭੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यह बहुत भला हुआ कि मन में ईश्वर का भय उत्पन्न हो गया, जिससे संसार की दिशाएं और वासनाएं विस्मृत हो गईं। जैसे ओला पिघलकर पानी बन जाता है और नदी की धारा में मिल जाता है, वैसे ही अहंकार पिघलकर आत्मा हरि-नाम की धारा में लीन हो गई॥ १७७॥',
      en: 'Satguru Kabir Saheb proclaims: It is a blessed thing that reverent fear of God entered my mind, making me forget all worldly pursuits! Just as a hailstone melts into water and flows into the river stream, my ego dissolved and merged into the Stream of Divine Name.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦੇ ਭੈ ਨਾਲ ਹਉਮੈ ਦਾ ਅਹੰਕਾਰ ਪਿਘਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਆਤਮਾ ਪ੍ਰਭੂ ਨਾਲ ਇੱਕਮਿੱਕ ਹੋ ਜਾਂਦੀ ਹੈ।',
      hi: 'प्रभु के पावन भय से अहंकार रूपी कठोरता पिघलती है और आत्मा हरि में लीन होती है।',
      en: 'The holy fear of God melts away the icy hail of ego, merging the soul seamlessly with the Lord.',
    },
    acharana: {
      pb: 'ਮਨ ਵਿੱਚ ਗੁਰੂ-ਭੈ ਧਾਰਨ ਕਰਕੇ ਸੰਸਾਰਿਕ ਚਤੁਰਾਈਆਂ ਤੇ ਭਟਕਣਾ ਤਿਆਗੋ।',
      hi: 'मन में गुरु-भय धारण कर सांसारिक दिशाओं के भटकाव को त्यागें।',
      en: 'Cultivate reverent devotion in your mind and abandon all worldly wanderings.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਉਮੈ ਦੀ ਕਠੋਰਤਾ ਪ੍ਰਭੂ ਭੈ ਵਿੱਚ ਪਿਘਲਾ ਕੇ ਨਾਮ ਧਾਰਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने अहंकार की कठोरता को प्रभु-भय में पिघलाकर नाम-धारा में समर्पित करें।',
      en: 'Dissolve all hardness of ego in the warmth of Divine love and surrender to the Nam.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 178 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-178',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੮: ਧੂਰਿ ਸਕੇਲਿ ਕੈ (ਅੰਤਿ ਖੇਹ ਕੀ ਖੇਹ)',
      hi: 'सलोक १७८: धूलि सकेलि कै (अंति खेह की खेह)',
      en: 'Salok 178: The Body Built of Dust Returns to Dust in the End',
    },
    moolGurmukhi: [
      'ਕਬੀਰਾ ਧੂਰਿ ਸਕੇਲਿ ਕੈ ਪੁਰੀਆ ਬਾਂਧੀ ਦੇਹ ॥',
      'ਦਿਵਸ ਚਾਰਿ ਕੋ ਪੇਖਨਾ ਅੰਤਿ ਖੇਹ ਕੀ ਖੇਹ ॥੧੭੮॥',
    ],
    moolDevanagari: [
      'कबीरा धूलि सकेलि कै पुरीआ बांधी देह ॥',
      'दिवस चारि को पेखना अंति खेह की खेह ॥१७८॥',
    ],
    moolRoman: [
      'Kabīrā dhūr sakel kai purīā bāndhī deh.',
      'Divas chār ko pekhanā ant kheh kī kheh. ||178||',
    ],
    shabdarth: [
      {
        word: 'ਧੂਰਿ ਸਕੇਲਿ / धूलि सकेलि',
        meaning: {
          pb: 'ਮਿੱਟੀ/ਪੰਜਾਂ ਤੱਤਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਕੇ',
          hi: 'धूल/पांचों तत्वों को एकत्र करके',
          en: 'Gathering dust / five elements together',
        },
      },
      {
        word: 'ਪੁਰੀਆ ਬਾਂਧੀ / पुरीआ बांधी',
        meaning: {
          pb: 'ਨਗਰੀ/ਸਰੀਰ ਬਣਾਇਆ',
          hi: 'शरीर रूपी नगरी बनाई',
          en: 'Constructed the city of the body',
        },
      },
      {
        word: 'ਪੇਖਨਾ / पेखना',
        meaning: {
          pb: 'ਵੇਖਣਾ, ਥੋੜ੍ਹੇ ਦਿਨਾਂ ਦਾ ਖੇਡ-ਤਮਾਸ਼ਾ',
          hi: 'देखना, क्षणिक खेल-तमाशा',
          en: 'A fleeting spectacle / brief show',
        },
      },
      {
        word: 'ਖੇਹ ਕੀ ਖੇਹ / खेह की खेह',
        meaning: {
          pb: 'ਅੰਤ ਮਿੱਟੀ ਦੀ ਮਿੱਟੀ',
          hi: 'अंत में मिट्टी की मिट्टी',
          en: 'In the end, dust returning to dust',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਨੇ ਪੰਜ ਤੱਤਾਂ ਦੀ ਮਿੱਟੀ ਦਾ ਮੇਲ ਕਰਕੇ ਇਹ ਸਰੀਰ ਦੀ ਨੱਗਰੀ ਬਣਾਈ ਹੈ। ਇਹ ਸਰੀਰ ਚਾਰ ਦਿਨ ਦਾ ਤਮਾਸ਼ਾ ਹੈ, ਖੇਡ ਹੈ, ਫਿਰ ਅੰਤ ਨੂੰ ਇਹ ਮਿੱਟੀ ਦੀ ਮਿੱਟੀ ਹੀ ਹੋ ਜਾਣਾ ਹੈ॥ ੧੭੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-ईश्वर ने पांच तत्वों की धूल को एकत्र करके यह शरीर रूपी नगरी बनाई है। यह तो चार दिनों का खेल-तमाशा है; अंत में यह मिट्टी पुनः मिट्टी में मिल जानी है॥ १७८॥',
      en: 'Satguru Kabir Saheb proclaims: Collecting the dust of five elements, God constructed this human body. It is a fleeting spectacle of four days, and ultimately, dust returns to dust.',
    },
    chintan: {
      pb: 'ਸਰੀਰ ਦੀ ਨਾਸ਼ਵੰਤਤਾ ਨੂੰ ਸਮਝ ਕੇ ਮੋਹ-ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਹੋਣਾ ਹੀ ਸੱਚੀ ਸਿਆਣਪ ਹੈ।',
      hi: 'शरीर की क्षणभंगुरता को समझकर मोह-माया से मुक्त होना ही सच्चा विवेक है।',
      en: 'Understanding the temporary nature of this body frees us from worldly illusion and attachment.',
    },
    acharana: {
      pb: 'ਨਾਸ਼ਵੰਤ ਦੇਹ ਦਾ ਹੰਕਾਰ ਛੱਡ ਕੇ ਅਵਿਨਾਸ਼ੀ ਨਾਮ ਸਿਮਰਨ ਦਾ ਆਧਾਰ ਲਵੋ।',
      hi: 'नश्वर देह का अभिमान छोड़कर अविनाशी नाम स्मरण का सहारा लें।',
      en: 'Abandon pride in your temporary body and anchor yourself in the Immortal Name.',
    },
    samarpan: {
      pb: 'ਮਿੱਟੀ ਦੀ ਦੇਹ ਦਾ ਮੋਹ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਤਿਆਗ ਕੇ ਆਤਮ-ਗਿਆਨ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'मिट्टी की देह का मोह प्रभु चरणों में त्यागकर आत्म-ज्ञान में लीन हों।',
      en: 'Surrender all attachment to this bodily shell and merge your awareness into the Spirit.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 179 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-179',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੭੯: ਸੂਰਜ ਚਾਂਦ ਕੈ ਉਦੈ ਭਈ (ਗੁਰ ਗੋਬਿੰਦ ਕੇ ਬਿਨੁ ਮਿਲੇ)',
      hi: 'सलोक १७९: सूरज चांद कै उदै भई (गुर गोबिंद के बिनु मिले)',
      en: 'Salok 179: Without Meeting Gur-Gobind, All Life Turns to Dust',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸੂਰਜ ਚਾਂਦ ਕੈ ਉਦੈ ਭਈ ਸਭ ਦੇਹ ॥',
      'ਗੁਰ ਗੋਬਿੰਦ ਕੇ ਬਿਨੁ ਮਿਲੇ ਪਲਟਿ ਭਈ ਸਭ ਖੇਹ ॥੧੭੯॥',
    ],
    moolDevanagari: [
      'कबीर सूरज चांद कै उदै भई सभ देह ॥',
      'गुर गोबिंद के बिनु मिले पलटि भई सभ खेह ॥१७९॥',
    ],
    moolRoman: [
      'Kabīr sūraj chānd kai udai bhaī sabh deh.',
      'Gur Gobind ke bin mile palaṭ bhaī sabh kheh. ||179||',
    ],
    shabdarth: [
      {
        word: 'ਉਦੈ ਭਈ / उदै भई',
        meaning: {
          pb: 'ਪ੍ਰਗਟ ਹੋਈਆਂ, ਉਪਜੀਆਂ',
          hi: 'प्रकट हुईं, निर्मित हुईं',
          en: 'Emerged / appeared under sun and moon',
        },
      },
      {
        word: 'ਪਲਟਿ ਭਈ / पलटि भई',
        meaning: {
          pb: 'ਮੁੜ ਕੇ ਬਦਲ ਗਈ',
          hi: 'पुनः परिवर्तित हो गई',
          en: 'Turned back / transformed',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸੂਰਜ ਚੰਦ ਦੇ ਚੜਨ ਵਾਂਗੂੰ ਇਹ ਦੇਹਾਂ ਉਪਜਦੀਆਂ ਹਨ ਅਤੇ ਦਿਨ ਰਾਤ ਦਾ ਸਮਾਂ ਬਤੀਤ ਕਰਕੇ ਛਿੱਪ ਜਾਂਦੀਆਂ ਹਨ। ਜੇਕਰ ਗੁਰੂ ਪ੍ਰਮਾਤਮਾ ਦਾ ਮਿਲਾਪ ਨਾ ਹੋਵੇ ਤਾਂ ਇਹ ਸਰੀਰ ਮੁੜ ਕੇ ਫਿਰ ਮਿੱਟੀ ਹੀ ਹੋ ਜਾਂਦੇ ਹਨ॥ ੧੭੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सूरज और चंद्रमा के उदित होने की भांति ये सभी देहें उत्पन्न होती और समय बिताकर अस्त हो जाती हैं। यदि गुरु और गोविंद का मिलाप न हो, तो यह शरीर पुनः मिट्टी में बदल कर व्यर्थ हो जाता है॥ १७९॥',
      en: 'Satguru Kabir Saheb proclaims: Like the rising and setting of the sun and moon, all bodies appear and pass away with time. Without meeting the Guru and the Divine Lord, all human bodies turn back into dust uselessly.',
    },
    chintan: {
      pb: 'ਮਾਨਵ ਦੇਹ ਦਾ ਮਨੋਰਥ ਕੇਵਲ ਸਮਾਂ ਬਿਤਾਉਣਾ ਨਹੀਂ, ਸਗੋਂ ਗੁਰੂ ਦੁਆਰਾ ਗੋਬਿੰਦ ਨੂੰ ਮਿਲਣਾ ਹੈ।',
      hi: 'मानव देह का उद्देश्य केवल समय बिताना नहीं, बल्कि गुरु कृपा से गोविंद को पाना है।',
      en: 'The true purpose of human birth is not merely living out time under sun and moon, but realizing God through the Guru.',
    },
    acharana: {
      pb: 'ਦਿਨ-ਰਾਤ ਦਾ ਸਮਾਂ ਅਜਾਈਂ ਨਾ ਗਵਾਓ; ਗੁਰੂ ਉਪਦੇਸ਼ ਦੁਆਰਾ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾਪ ਕਰੋ।',
      hi: 'दिन-रात का समय व्यर्थ न गंवाएं; गुरु-उपदेश द्वारा प्रभु से मिलाप करें।',
      en: 'Do not waste days and nights in vain pursuits; seek Union with God through the Guru’s teachings.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਜੀਵਨ ਗੁਰੂ-ਗੋਬਿੰਦ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਸਫਲ ਕਰੋ।',
      hi: 'अपना जीवन गुरु-गोविंद के पावन चरणों में समर्पित कर सफल करें।',
      en: 'Dedicate your entire lifetime to the sacred feet of the Lord and the Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 180 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-180',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੮੦: ਜਹ ਅਨਭਉ ਤਹ ਭੈ ਨਹੀ (ਜਹ ਭਉ ਤਹ ਹਰਿ ਨਾਹਿ)',
      hi: 'सलोक १८०: जह अनभउ तह भय नही (जह भउ तह हरि नाहि)',
      en: 'Salok 180: Where Direct Realization Exists, Fear Vanishes',
    },
    moolGurmukhi: [
      'ਜਹ ਅਨਭਉ ਤਹ ਭੈ ਨਹੀ ਜਹ ਭਉ ਤਹ ਹਰਿ ਨਾਹਿ ॥',
      'ਕਹਿਓ ਕਬੀਰ ਬਿਚਾਰਿ ਕੈ ਸੰਤ ਸੁਨਹੁ ਮਨ ਮਾਹਿ ॥੧੮੦॥',
    ],
    moolDevanagari: [
      'जह अनभउ तह भय नही जह भउ तह हरि नाहि ॥',
      'कहओ कबीर बिचारि कै संत सुनहु मन माहि ॥१८०॥',
    ],
    moolRoman: [
      'Jah anbhau tah bhai nahī jah bhau tah Har nāh.',
      'Kahio Kabīr bichār kai sant sunahu man māh. ||180||',
    ],
    shabdarth: [
      {
        word: 'ਅਨਭਉ / अनभउ',
        meaning: {
          pb: 'ਆਤਮ-ਅਨੁਭਵ, ਬ੍ਰਹਮ ਗਿਆਨ',
          hi: 'आत्म-अनुभव, निर्भय अपरोक्ष ज्ञान',
          en: 'Direct spiritual experience / Divine Realization',
        },
      },
      {
        word: 'ਜਹ ਭਉ ਤਹ ਹਰਿ ਨਾਹਿ / जह भउ तह हरि नाहि',
        meaning: {
          pb: 'ਜਿੱਥੇ ਭਰਮ/ਡਰ ਹੈ ਉੱਥੇ ਹਰੀ ਦਾ ਪ੍ਰਗਾਸ ਨਹੀਂ',
          hi: 'जहां भय/संशय है वहां हरि का वास नहीं',
          en: 'Where fear/doubt exists, God’s presence is not realized',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਥੇ (ਹਿਰਦੇ ਵਿਚ) ਪ੍ਰਮਾਤਮਾ ਦਾ ਗਿਆਨ-ਅਨੁਭਵ ਹੋਵੇ ਉਥੇ ਕੋਈ ਭੈ/ਡਰ ਨਹੀਂ ਹੁੰਦਾ। ਪ੍ਰੰਤੂ ਜਿਥੇ ਡਰ ਹੋਵੇ ਉਥੇ ਪ੍ਰਮਾਤਮਾ ਪ੍ਰਗਟ ਨਹੀਂ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਇਹ ਗੱਲ ਮੈਂ ਵੀਚਾਰ ਕੇ ਆਖੀ ਹੈ, ਹੇ ਸੰਤ ਜਨੋਂ! ਤੁਸੀਂ ਇਸ ਨੂੰ ਮਨ ਲਾ ਕੇ ਸੁਣੋ॥ ੧੮੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जहां ईश्वर का प्रत्यक्ष आत्म-अनुभव है, वहां कोई भय नहीं रहता। परंतु जहां भय है, वहां हरि का ज्ञान नहीं। सतगुरु कबीर साहेब फरमाते हैं-हे संतों! मैंने विचार करके यह कहा है, इसे मन में धारण करो॥ १८०॥',
      en: 'Satguru Kabir Saheb proclaims: Where there is Direct Divine Realization, there is no fear. But where fear resides, God’s presence is not experienced. Satguru Kabir Saheb proclaims after deep contemplation: O Saints, listen and reflect upon this in your heart!',
    },
    chintan: {
      pb: 'ਬ੍ਰਹਮ ਗਿਆਨ ਦਾ ਅਨੁਭਵ ਜੀਵ ਨੂੰ ਪੂਰਨ ਨਿਰਭੈਤਾ ਬਖ਼ਸ਼ਦਾ ਹੈ ਅਤੇ ਭਰਮ ਮੁਕਤ ਕਰਦਾ ਹੈ।',
      hi: 'आत्म-अनुभव जीव को सर्वथा निर्भय बनाता है और सभी शंकाएं मिटा देता है।',
      en: 'Direct spiritual intuition bestows total fearlessness and dissolves all worldly anxieties.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਿਕ ਭੈ ਤੋਂ ਮੁਕਤ ਹੋਣ ਲਈ ਗੁਰਮਤਿ ਦੁਆਰਾ ਪ੍ਰਭੂ ਦਾ ਪ੍ਰਤੱਖ ਅਨੁਭਵ ਪ੍ਰਾਪਤ ਕਰੋ।',
      hi: 'सांसारिक भय से मुक्त होने के लिए गुरु-ज्ञान द्वारा प्रभु का प्रत्यक्ष अनुभव प्राप्त करें।',
      en: 'Seek direct intuition of the Lord through spiritual discipline to attain absolute fearlessness.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਮਨ ਤੇ ਚਿੱਤ ਗਿਆਨ-ਅਨੁਭਵ ਲਈ ਸੰਤ ਸੰਗਤ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना मन और चित्त आत्म-ज्ञान हेतु संत-संगत में समर्पित करें।',
      en: 'Surrender your mind and heart in holy company to attain direct experience of the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 181 (Ang 1373)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-181',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੮੧: ਜਿਨਹੁ ਕਿਛੁ ਜਾਨਿਆ ਨਹੀਂ (ਪੂਰੀ ਪਰੀ ਬਲਾਇ)',
      hi: 'सलोक १८१: जिनहु किछु जानिआ नही (पूरी परी बलाइ)',
      en: 'Salok 181: The Ignorant Sleep Calmly; Realizing Truth Sparks Intense Yearning',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਿਨਹੁ ਕਿਛੁ ਜਾਨਿਆ ਨਹੀ ਤਿਨ ਸੁਖ ਨੀਦ ਬਿਹਾਇ ॥',
      'ਹਮਹੁ ਜੁ ਬੂਝਾ ਬੂਝਨਾ ਪੂਰੀ ਪਰੀ ਬਲਾਇ ॥੧੮੧॥',
    ],
    moolDevanagari: [
      'कबीर जिनहु किछु जानिआ नही तिन सुख नीद बिहाइ ॥',
      'हमहु जु बूझा बूझना पूरी परी बलाइ ॥१८१॥',
    ],
    moolRoman: [
      'Kabīr jinah kichh jāniā nahī tin sukh nīd bihāe.',
      'Hamah ju būjhā būjhanā pūrī parī balāe. ||181||',
    ],
    shabdarth: [
      {
        word: 'ਸੁਖ ਨੀਦ ਬਿਹਾਇ / सुख नीद बिहाइ',
        meaning: {
          pb: 'ਅਗਿਆਨਤਾ ਦੀ ਸੁਖਾਲੀ ਨੀਂਦ ਵਿੱਚ ਸਮਾਂ ਬੀਤਦਾ ਹੈ',
          hi: 'अज्ञानता की सुखद नींद में समय बीतता है',
          en: 'Passes time in blissful ignorant sleep',
        },
      },
      {
        word: 'ਬੂਝਾ ਬੂਝਨਾ / बूझा बूझना',
        meaning: {
          pb: 'ਜੀਵਨ ਦਾ ਅਸਲ ਰਹੱਸ ਸਮਝ ਲਿਆ (ਕਿ ਸਭ ਨਾਸ਼ਵੰਤ ਹੈ)',
          hi: 'जीवन का सत्य समझ लिया (कि सब नश्वर है)',
          en: 'Realized the harsh reality (that all is perishable)',
        },
      },
      {
        word: 'ਪੂਰੀ ਪਰੀ ਬਲਾਇ / पूरी परी बलाइ',
        meaning: {
          pb: 'ਵੱਡੀ ਚਿੰਤਾ/ਬਿਰਹਾ ਪੈ ਗਈ (ਨਾਮ ਬਾਝੋਂ ਸਭ ਅਜਾਈਂ ਹੈ)',
          hi: 'बड़ी विरह-व्याकुलता पैदा हो गई',
          en: 'A intense spiritual longing / crisis arose',
        },
      },
    ],
    bhavarth: {
      pb: 'ਕਬੀਰ ! ਜਿਨ੍ਹਾਂ ਨੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਰਸਤੇ ਨੂੰ ਕੁਝ ਵੀ ਨਹੀਂ ਜਾਣਿਆ, ਉਨ੍ਹਾਂ ਦੀ ਸੁਖ ਨਾਲ ਅਗਿਆਨਤਾ ਵਿੱਚ ਸੌਂ ਕੇ ਰਾਤ ਬੀਤਦੀ ਹੈ। ਪਰ ਮੈਂ ਜੋ ਇਹ ਗੱਲ ਸਮਝ ਲਈ ਹੈ ਕਿ ਪ੍ਰਭੂ ਮਿਲਾਪ ਤੋਂ ਬਿਨਾਂ ਇਹ ਦੇਹ ਅੰਤ ਨੂੰ ਮਿੱਟੀ ਹੋ ਜਾਣੀ ਹੈ, ਮੇਰੇ ਉੱਤੇ ਹਰੀ ਬਿਰਹਾ ਦੀ ਪੂਰੀ ਬਿਪਤਾ ਪੈ ਗਈ ਹੈ॥ ੧੮੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जिन्होंने ईश्वर-मार्ग को बिल्कुल नहीं समझा, वे अज्ञान की सुखद नींद में सोते रहते हैं। परंतु जब से मैंने इस परम सत्य को समझ लिया है कि हरि-भक्ति बिना जीवन व्यर्थ है, तब से मेरे हृदय में तड़प और चिंता छा गई है॥ १८१॥',
      en: 'Satguru Kabir Saheb proclaims: Those who know nothing of the spiritual path sleep peacefully in ignorance. But since I realized the truth that without God\'s devotion life turns to dust, an intense spiritual pain and longing has taken over me.',
    },
    chintan: {
      pb: 'ਆਤਮਿਕ ਜਾਗ੍ਰਿਤੀ ਨਾਲ ਜੀਵ ਅਗਿਆਨਤਾ ਦੀ ਨੀਂਦ ਤੋਂ ਜਾਗ ਕੇ ਹਰਿ ਬਿਰਹਾ ਦੀ ਤੜਪ ਅਨੁਭਵ ਕਰਦਾ ਹੈ।',
      hi: 'आध्यात्मिक जागृति से जीव अज्ञान की नींद से जागकर प्रभु-विरह की तड़प महसूस करता है।',
      en: 'Spiritual awakening breaks the blissful sleep of ignorance, sparking intense yearning for the Divine.',
    },
    acharana: {
      pb: 'ਅਗਿਆਨਤਾ ਦੀ ਨੀਂਦ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦੀ ਵਿਆਕੁਲਤਾ ਵਿੱਚ ਨਾਮ ਜਪੋ।',
      hi: 'अज्ञान की नींद त्यागकर प्रभु-प्रेम की व्याकुलता में नाम जप करें।',
      en: 'Awake from ignorant slumber and dedicate yourself earnestly to divine yearning.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਆਤਮਿਕ ਤੜਪ ਤੇ ਬਿਰਹਾ ਵਾਹਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਮਿਲਾਪ ਲੋਚੋ।',
      hi: 'अपनी विरह-व्याकुलता वाहेगुरु के चरणों में अर्पित कर उनसे मिलाप चाहें।',
      en: 'Offer your spiritual ache and yearning at the feet of the Lord to achieve Union.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 182 (Ang 1373-1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-182',
    category: 'salok',
    ang: 1373,
    title: {
      pb: 'ਸਲੋਕ ੧੮੨: ਮਾਰੇ ਬਹੁਤੁ ਪੁਕਾਰਿਆ (ਲਾਗੀ ਚੋਟ ਮਰੰਮ ਕੀ)',
      hi: 'सलोक १८२: मारे बहुतु पुकारिआ (लागी चोट मरंम की)',
      en: 'Salok 182: Struck by the Secret Arrow of the Guru’s Word, Kabir Stays Still',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਾਰੇ ਬਹੁਤੁ ਪੁਕਾਰਿਆ ਪੀਰ ਪੁਕਾਰੈ ਅਉਰ ॥',
      'ਲਾਗੀ ਚੋਟ ਮਰੰਮ ਕੀ ਰਹਿਓ ਕਬੀਰਾ ਠਉਰ ॥੧੮੨॥',
    ],
    moolDevanagari: [
      'कबीर मारे बहुतु पुकारिआ पीर पुकारै और ॥',
      'लागी चोट मरंम की रहिओ कबीरा ਠउर ॥१८२॥',
    ],
    moolRoman: [
      'Kabīr māre bahut pukāriā pīr pukārai aur.',
      'Lāgī choṭ maram kī rahio Kabīrā ਠaur. ||182||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਰੇ ਬਹੁਤੁ ਪੁਕਾਰਿਆ / मारे बहुतु पुकारिआ',
        meaning: {
          pb: 'ਮਾਰ ਪੈਣ ਤੇ ਆਮ ਬੰਦਾ ਰੋਂਦਾ-ਚਿੱਲਾਉਂਦਾ ਹੈ',
          hi: 'मार पड़ने पर सामान्य व्यक्ति चिल्लाता है',
          en: 'When struck physically, one cries out loudly',
        },
      },
      {
        word: 'ਚੋਟ ਮਰੰਮ ਕੀ / चोट मरंम की',
        meaning: {
          pb: 'ਹਿਰਦੇ/ਮਰਮ ਨੂੰ ਵਿੰਨ੍ਹਣ ਵਾਲੀ ਗੁਰ-ਸ਼ਬਦ ਦੀ ਗੁੱਝੀ ਸੱਟ',
          hi: 'मर्मस्थल (हृदय) को बेधने वाली गुरु-शब्द की चोट',
          en: 'The secret, deep strike of the Guru’s Word on the heart',
        },
      },
      {
        word: 'ਰਹਿਓ ਠਉਰ / रहिओ ठउर',
        meaning: {
          pb: 'ਥਾਂ ਤੇ ਹੀ ਅਡੋਲ ਹੋ ਗਿਆ (ਮੂਰਛਿਤ/ਲੀਨ ਹੋ ਗਿਆ)',
          hi: 'स्थान पर ही अचल/लीं हो गया',
          en: 'Remained spellbound and still in one place',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਦ ਕਿਸੇ ਨੂੰ ਬਾਹਰੀ ਮਾਰ ਪਵੇ ਤਾਂ ਉਹ ਬਹੁਤ ਵਾਵੇਲਾ ਕਰਦਾ ਹੈ, ਪਰ ਮੈਨੂੰ ਹਿਰਦੇ ਨੂੰ ਵਿੰਨ੍ਹ ਜਾਣ ਵਾਲੀ ਗੁਝੀ ਚੋਟ ਗੁਰ-ਸ਼ਬਦ ਦੀ ਲੱਗੀ ਹੈ, ਜਿਸ ਨਾਲ ਮੈਂ ਥਾਂ ਤੇ ਹੀ ਅਡੋਲ ਰਹਿ ਗਿਆ ਹਾਂ। ਪੁਕਾਰਣ ਜਾਂ ਹਿੱਲਣ ਜੋਗਾ ਨਹੀਂ ਰਿਹਾ॥ ੧੮੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-शारीरिक चोट लगने पर मनुष्य बहुत चिल्लाता है। परंतु मुझे गुरु-शब्द की ऐसी गभीर मर्म-चोट लगी है कि कबीर वहीं स्तब्ध और शांत होकर रह गया है; अब पुकारने की गुंजाइश नहीं रही॥ १८२॥',
      en: 'Satguru Kabir Saheb proclaims: Struck physically, a man cries out in loud pain. But I have been pierced by the profound, secret strike of the Guru’s Word in my heart, leaving me silent and spellbound in total stillness.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਦੀ ਗੁੱਝੀ ਚੋਟ ਮਨ ਦੀਆਂ ਸਾਰੀਆਂ ਚਲਚਲਾਹਟਾਂ ਮੁਕਾ ਕੇ ਸ਼ਾਂਤ ਤੇ ਅਡੋਲ ਕਰ ਦਿੰਦੀ ਹੈ।',
      hi: 'गुरु-शब्द की मर्म-चोट मन की चंचलता समाप्त कर जीव को परम शांति में स्थिर कर देती है।',
      en: 'The deep inner strike of the Guru’s Word stills all mental chatter, anchoring the soul in divine peace.',
    },
    acharana: {
      pb: 'ਗੁਰੂ ਦੇ ਉਪਦੇਸ਼-ਬਾਣ ਨੂੰ ਸਿਦਕ ਨਾਲ ਹਿਰਦੇ ਵਿੱਚ ਝੱਲੋ ਅਤੇ ਨਿਮਰਤਾ ਧਾਰਨ ਕਰੋ।',
      hi: 'गुरु के उपदेश-बाण को श्रद्धापूर्वक हृदय में सहें और नम्र बनें।',
      en: 'Receive the arrow of the Guru’s instruction deep within your heart with utter devotion.',
    },
    samarpan: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਦੀ ਚੋਟ ਨਾਲ ਵਿੰਨ੍ਹਿਆ ਹਿਰਦਾ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰ ਦਿਓ।',
      hi: 'गुरु-शब्द से बिंधा अपना हृदय सतगुरु के पावन चरणों में समर्पित करें।',
      en: 'Offer your word-pierced heart completely at the lotus feet of the True Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੩-੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 183 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-183',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੩: ਚੋਟ ਸੁਹੇਲੀ ਸੇਲ ਕੀ (ਚੋਟ ਸਹਾਰੈ ਸਬਦ ਕੀ)',
      hi: 'सलोक १८३: चोट सुहेली सेल की (चोट सहारै सबद की)',
      en: 'Salok 183: Enduring the Ego-Killing Strike of the Word',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਚੋਟ ਸੁਹੇਲੀ ਸੇਲ ਕੀ ਲਾਗਤ ਲੇਇ ਉਸਾਸ ॥',
      'ਚੋਟ ਸਹਾਰੈ ਸਬਦ ਕੀ ਤਾਸੁ ਗੁਰੂ ਮੈ ਦਾਸ ॥੧੮੩॥',
    ],
    moolDevanagari: [
      'कबीर चोट सुहेली सेल की लागत लेइ उसास ॥',
      'चोट सहारै सबद की तासु गुरू मै दास ॥१८३॥',
    ],
    moolRoman: [
      'Kabīr choṭ suhelī sel kī lāgat lei usās.',
      'Choṭ sahārai sabad kī tās gurū mai dās. ||183||',
    ],
    shabdarth: [
      {
        word: 'ਸੁਹੇਲੀ ਸੇਲ ਕੀ / सुहेली सेल की',
        meaning: {
          pb: 'ਬਰਛੇ/ਭਾਲੇ ਦੀ ਸੱਟ ਸੌਖੀ ਹੈ',
          hi: 'भाले/नेजे की चोट सहना आसान है',
          en: 'Strike of a spear is easy to endure',
        },
      },
      {
        word: 'ਲਾਗਤ ਲੇਇ ਉਸਾਸ / लागत लेइ उसास',
        meaning: {
          pb: 'ਵੱਜਣ ਨਾਲ ਘੱਟੋ-ਘੱਟ ਸਾਹ ਤਾਂ ਆਉਂਦਾ ਹੈ',
          hi: 'लगने पर कम से कम सांस तो आती है',
          en: 'At least one can still draw breath',
        },
      },
      {
        word: 'ਤਾਸੁ ਗੁਰੂ ਮੈ ਦਾਸ / तासु गुरू मै दास',
        meaning: {
          pb: 'ਉਹ ਮੇਰਾ ਗੁਰੂ ਹੈ ਤੇ ਮੈਂ ਉਸਦਾ ਦਾਸ ਹਾਂ',
          hi: 'वह मेरा गुरु है और मैं उसका दास हूं',
          en: 'He is my Master and I am his humble servant',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਬਰਛੇ ਦੀ ਸੱਟ ਸਹਾਰਨੀ ਸੌਖੀ ਹੈ, ਜਿਸ ਦੇ ਵੱਜਣ ਨਾਲ ਘੱਟੋ ਘਟ ਸਾਹ ਤਾਂ ਆ ਜਾਂਦੇ ਹਨ, ਪਰ ਜਿਹੜਾ ਗੁਰੂ-ਸ਼ਬਦ ਦੀ ਸੱਟ ਨੂੰ ਸਹਾਰ ਲਵੇ (ਮਨ ਮਾਰ ਲਵੇ), ਉਹ ਮੇਰਾ ਗੁਰੂ ਹੈ ਤੇ ਮੈਂ ਉਸ ਦਾ ਦਾਸ ਹਾਂ॥ ੧੮੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-भाले की चोट सहना तो आसान है, क्योंकि उसमें सांस तो चलती रहती है। परंतु जो साधक गुरु-शब्द की मर्माहत चोट को सह लेता है (अहंकार मिटा देता है), वही मेरा गुरु है और मैं उसका दास हूं॥ १८३॥',
      en: 'Satguru Kabir Saheb proclaims: The blow of a spear is easy to endure, for one can still breathe through it. But whoever can withstand the piercing strike of the Guru’s Word (killing his ego), he is my Guru, and I am his servant.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਦੀ ਚੋਟ ਨਾਲ ਹਉਮੈ ਨੂੰ ਮਾਰਨਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤੇ ਸੂਖਮ ਸਾਧਨਾ ਹੈ।',
      hi: 'गुरु-शब्द की चोट से अहंकार का नाश करना ही सबसे कठिन और श्रेष्ठ साधना है।',
      en: 'Subduing the ego under the sharp stroke of the Guru’s Word is the ultimate spiritual achievement.',
    },
    acharana: {
      pb: 'ਸ਼ਬਦ ਦੀ ਚੋਟ ਸਹਾਰ ਕੇ ਆਪਣੇ ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰੋ ਅਤੇ ਗੁਰੂ ਦੇ ਬਚਨ ਕਮਾਓ।',
      hi: 'शब्द की चोट सहकर अपने अहंकार का त्याग करें और गुरु-वचनों का पालन करें।',
      en: 'Endure the ego-shattering stroke of the Word and live according to the Guru’s command.',
    },
    samarpan: {
      pb: 'ਜੋ ਗੁਰੂ-ਸ਼ਬਦ ਦੀ ਸੱਟ ਸਹਾਰਦਾ ਹੈ, ਉਸ ਸੰਤ-ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣਾ ਆਪ ਅਰਪਣ ਕਰੋ।',
      hi: 'जो गुरु-शब्द की चोट सहता है, उस संत-गुरु के चरणों में अपना आप समर्पित करें।',
      en: 'Surrender your mind and self to the Master who withstands the transformative stroke of the Word.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 184 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-184',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੪: ਮੁਲਾਂ ਮੁਨਾਰੇ ਕਿਆ ਚਢਹਿ (ਸਾਂਈ ਨ ਬਹਰਾ ਹੋਇ)',
      hi: 'सलोक १८४: मुलां मुनारे किआ चढहि (सांई न बहरा होइ)',
      en: 'Salok 184: God Is Not Deaf; Behold Him Within Your Own Heart',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੁਲਾਂ ਮੁਨਾਰੇ ਕਿਆ ਚਢਹਿ ਸਾਂਈ ਨ ਬਹਰਾ ਹੋਇ ॥',
      'ਜਾ ਕਾਰਨਿ ਤੂੰ ਬਾਂਗ ਦੇਹਿ ਦਿਲ ਹੀ ਭੀਤਰਿ ਜੋਇ ॥੧੮੪॥',
    ],
    moolDevanagari: [
      'कबीर मुलां मुनारे किआ चढहि सांई न बहरा होइ ॥',
      'जा कारनि तू बांग देहि दिल ही भीतरि जोइ ॥१८४॥',
    ],
    moolRoman: [
      'Kabīr mulān munāre kiā chaḍhah sāṅī na bahrā hoi.',
      'Jā kāran tūūṅ bāng deh dil hī bhītar joi. ||184||',
    ],
    shabdarth: [
      {
        word: 'ਮੁਨਾਰੇ ਕਿਆ ਚਢਹਿ / मुनारे किआ चढहि',
        meaning: {
          pb: 'ਉੱਚੀ ਮਸੀਤ ਦੇ ਮੁਨਾਰੇ ਤੇ ਕਿਉਂ ਚੜ੍ਹਦਾ ਹੈਂ',
          hi: 'ऊंचे मीनार पर क्यों चढ़ता है',
          en: 'Why climb high minarets to shout',
        },
      },
      {
        word: 'ਸਾਂਈ ਨ ਬਹਰਾ ਹੋਇ / सांई न बहरा होइ',
        meaning: {
          pb: 'ਮਾਲਕ ਪ੍ਰਭੂ ਬੋਲਾ ਨਹੀਂ ਹੈ',
          hi: 'मालिक ईश्वर बहरा नहीं है',
          en: 'The Lord Almighty is not deaf',
        },
      },
      {
        word: 'ਦਿਲ ਹੀ ਭੀਤਰਿ ਜੋਇ / दिल ही भीतरि जोइ',
        meaning: {
          pb: 'ਆਪਣੇ ਹਿਰਦੇ ਅੰਦਰ ਹੀ ਉਸ ਨੂੰ ਵੇਖ',
          hi: 'अपने हृदय के भीतर ही उसे देख',
          en: 'Behold Him right within your own heart',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਮੁਲਾਂ ! ਤੂੰ ਉੱਚੇ ਮੁਨਾਰੇ ਬਾਂਗ ਦੇਣ ਵਾਸਤੇ ਕਿਉਂ ਚੜ੍ਹਦਾ ਹੈਂ? ਮਾਲਕ ਬਾਂਗ ਸੁਣਨ ਵਾਲਾ ਬੋਲਾ ਨਹੀਂ ਹੈ। ਜਿਸ ਵਾਸਤੇ ਤੂੰ ਬਾਂਗ ਦੇਂਦਾ ਹੈਂ, ਉਸ ਪ੍ਰਭੂ ਨੂੰ ਤੂੰ ਆਪਣੇ ਅੰਦਰ ਹਿਰਦੇ ਵਿਚ ਹੀ ਵੇਖ ਤੇ ਪਛਾਣ॥ ੧੮੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे मुल्ला! तू अज़ान देने के लिए ऊंची मीनार पर क्यों चढ़ता है? परमात्मा बहरा नहीं है। जिस रब को तू बाहर पुकार रहा है, उसे अपने हृदय के भीतर ही देख और पहचान॥ १८४॥',
      en: 'Satguru Kabir Saheb proclaims: O Mullah, why do you climb the high minaret to shout your call? The Lord Master is not deaf! The One for whom you call out loud—behold Him residing right within your own heart.',
    },
    chintan: {
      pb: 'ਪ੍ਰਮਾਤਮਾ ਬਾਹਰੀ ਸ਼ੋਰ-ਸ਼ਰਾਬੇ ਨਾਲ ਨਹੀਂ, ਸਗੋਂ ਹਿਰਦੇ ਦੀ ਅੰਤਰਮੁਖੀ ਨਿਮਰਤਾ ਨਾਲ ਮਿਲਦਾ ਹੈ।',
      hi: 'ईश्वर बाहरी शोर-शराबे से नहीं, बल्कि आंतरिक शांति और नम्रता से प्रकट होता है।',
      en: 'God is not reached through loud outward displays, but through quiet inward contemplation.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਤੇ ਉੱਚੀਆਂ ਹੂਕਾਂ ਛੱਡ ਕੇ ਹਿਰਦੇ ਦੇ ਅੰਦਰ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'बाहरी दिखावा छोड़कर अपने हृदय के भीतर शांत मन से प्रभु का ध्यान करें।',
      en: 'Turn inward; meditate quietly on the Divine present within your soul.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਧਿਆਨ ਬਾਹਰਮੁਖੀ ਆਵਾਜ਼ਾਂ ਤੋਂ ਹਟਾ ਕੇ ਅੰਤਰਮੁਖੀ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना ध्यान बाहरी ध्वनियों से हटाकर अंतर्मुखी प्रभु चरणों में समर्पित करें।',
      en: 'Redirect your focus from outer rituals to the sacred alter within your own heart.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 185 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-185',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੫: ਸੇਖ ਸਬੂਰੀ ਬਾਹਰਾ (ਕਿਆ ਹਜ ਕਾਬੇ ਜਾਇ)',
      hi: 'सलोक १८५: सेख सबूरी बाहरा (किआ हज काबे जाइ)',
      en: 'Salok 185: Without Inner Contentment, Pilgrimage Is Futile',
    },
    moolGurmukhi: [
      'ਸੇਖ ਸਬੂਰੀ ਬਾਹਰਾ ਕਿਆ ਹਜ ਕਾਬੇ ਜਾਇ ॥',
      'ਕਬੀਰ ਜਾ ਕੀ ਦਿਲ ਸਾਬਤਿ ਨਹੀਂ ਤਾ ਕਉ ਕਹਾਂ ਖੁਦਾਇ ॥੧੮੫॥',
    ],
    moolDevanagari: [
      'सेख सबूरी बाहरा किआ हज काबे जाइ ॥',
      'कबीर जा की दिल साबति नही ता कउ कहां खुदाइ ॥१८५॥',
    ],
    moolRoman: [
      'Sekh sabūrī bāharā kiā haj kābe jāe.',
      'Kabīr jā kī dil sābat nahī tā kau kahāṅ khudāe. ||185||',
    ],
    shabdarth: [
      {
        word: 'ਸਬੂਰੀ ਬਾਹਰਾ / सबूरी बाहरा',
        meaning: {
          pb: 'ਸਬਰ, ਸੰਤੋਖ ਤੋਂ ਸੁੰਨਾ',
          hi: 'धैर्य और संतोष से हीन',
          en: 'Devoid of patience and contentment',
        },
      },
      {
        word: 'ਹਜ ਕਾਬੇ ਜਾਇ / हज काबे जाइ',
        meaning: {
          pb: 'ਕਾਬੇ ਦਾ ਹੱਜ ਕਰਨ ਜਾਣਾ',
          hi: 'काबा की तीर्थ-यात्रा करना',
          en: 'Going on pilgrimage to Mecca',
        },
      },
      {
        word: 'ਦਿਲ ਸਾਬਤਿ ਨਹੀਂ / दिल साबति नही',
        meaning: {
          pb: 'ਹਿਰਦਾ ਪਵਿੱਤਰ ਤੇ ਸ਼ਾਂਤ ਨਹੀਂ ਹੈ',
          hi: 'हृदय शुद्ध और स्थिर नहीं है',
          en: 'Heart is not pure, whole, and honest',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਸ਼ੇਖ ! ਜੇਕਰ ਹਿਰਦੇ ਅੰਦਰ ਸਬਰ ਸੰਤੋਖ ਨਹੀਂ ਹੈ ਤਾਂ ਹੱਜ ਕਾਬੇ ਕਿਸ ਵਾਸਤੇ ਜਾਣਾ ਹੈ? ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਜਿਸ ਦਾ ਹਿਰਦਾ ਪਵਿੱਤਰ ਤੇ ਸ਼ਾਂਤ ਨਹੀਂ, ਉਸ ਨੂੰ ਰੱਬ ਕਿਥੇ ਮਿਲ ਸਕਦਾ ਹੈ? ਅਰਥਾਤ ਹਿਰਦੇ ਦੀ ਸ਼ੁੱਧੀ ਤੋਂ ਬਿਨਾਂ ਰੱਬ ਨਹੀਂ ਮਿਲਦਾ॥ ੧੮੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे शेख! यदि हृदय में संतोष और सबूरी नहीं है, तो काबा का हज करने से क्या लाभ? जिसका दिल शुद्ध और कपट-रहित नहीं है, उसे ईश्वर की प्राप्ति कहां हो सकती है?॥ १८५॥',
      en: 'Satguru Kabir Saheb proclaims: O Sheikh, if you are devoid of inner contentment and patience, what is the use of going on pilgrimage to Mecca? For one whose heart is not pure and whole, where can God be found?',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਧਾਰਮਿਕ ਯਾਤਰਾਵਾਂ ਨਾਲੋਂ ਹਿਰਦੇ ਦੀ ਸਫ਼ਾਈ, ਸਬਰ ਤੇ ਸੰਤੋਖ ਹੀ ਅਸਲ ਰੱਬੀ ਮਿਲਾਪ ਦਾ ਸਾਧਨ ਹੈ।',
      hi: 'बाहरी तीर्थयात्राओं से बढ़कर हृदय का संतोष और पवित्रता ही सच्चे ईश्वर-मिलाप का मार्ग है।',
      en: 'Inner purity and contentment are far superior to external pilgrimages for realizing God.',
    },
    acharana: {
      pb: 'ਧਾਰਮਿਕ ਅਹੰਕਾਰ ਤੇ ਛਲ-ਕਪਟ ਛੱਡ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਸਬਰ, ਸੰਤੋਖ ਤੇ ਸੱਚ ਧਾਰਨ ਕਰੋ।',
      hi: 'धार्मिक अहंकार और छल छोड़कर हृदय में संतोष, धैर्य और सत्य धारण करें।',
      en: 'Eschew religious hypocrisy; cultivate genuine patience, truthfulness, and contentment.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਹਿਰਦੇ ਨੂੰ ਛਲ ਤੋਂ ਰਹਿਤ ਕਰਕੇ ਸੱਚੇ ਮਾਲਕ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने हृदय को निष्कपट बनाकर सच्चे स्वामी के चरणों में समर्पित करें।',
      en: 'Purify your heart of all deceit and offer a clean, whole soul to God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 186 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-186',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੬: ਅਲਹ ਕੀ ਕਰਿ ਬੰਦਗੀ (ਬੁਝੈ ਬਲੰਤੀ ਨਾਂਇ)',
      hi: 'सलोक १८६: अलह की करि बंदगी (बुझै बलंती नांइ)',
      en: 'Salok 186: Worship Allah; The Holy Name Extinguishes Desires',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਅਲਹ ਕੀ ਕਰਿ ਬੰਦਗੀ ਜਿਹ ਸਿਮਰਤ ਦੁਖੁ ਜਾਇ ॥',
      'ਦਿਲ ਮਹਿ ਸਾਂਈ ਪਰਗਟੈ ਬੁਝੈ ਬਲੰਤੀ ਨਾਂਇ ॥੧੮੬॥',
    ],
    moolDevanagari: [
      'कबीर अलह की करि बंदगी जिह सिमरत दुखु जाइ ॥',
      'दिल महि सांई परगटै बुझै बलंती नांइ ॥१८६॥',
    ],
    moolRoman: [
      'Kabīr Alah kī kar bandagī jih simrat dukh jāe.',
      'Dil mah sāṅī pargaṭai bujhai balantī nāṅe. ||186||',
    ],
    shabdarth: [
      {
        word: 'ਅਲਹ ਕੀ ਬੰਦਗੀ / अलह की बंदगी',
        meaning: {
          pb: 'ਅੱਲਾ/ਵਾਹਿਗੁਰੂ ਦੀ ਇਬਾਦਤ ਤੇ ਭਗਤੀ',
          hi: 'अल्लाह/परमात्मा की भक्ति',
          en: 'Devotion and worship of Allah/God',
        },
      },
      {
        word: 'ਸਾਂਈ ਪਰਗਟੈ / सांई परगटै',
        meaning: {
          pb: 'ਮਾਲਕ ਹਿਰਦੇ ਅੰਦਰ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ',
          hi: 'हृदय में स्वामी प्रकट होता है',
          en: 'The Divine Lord manifests in the heart',
        },
      },
      {
        word: 'ਬੁਝੈ ਬਲੰਤੀ ਨਾਂਇ / बुझै बलंती नांइ',
        meaning: {
          pb: 'ਨਾਮ ਦੁਆਰਾ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਬਲਦੀ ਅੱਗ ਬੁਝ ਜਾਂਦੀ ਹੈ',
          hi: 'नाम द्वारा तृष्णा की जलती अग्नि बुझती है',
          en: 'The burning fire of desires is extinguished by Nam',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਤੂੰ ਰੱਬ ਦੀ ਬੰਦਗੀ ਕਰ, ਜਿਸ ਦੇ ਸਿਮਰਨ ਕਰਕੇ ਦੁਖ ਦੂਰ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਹਿਰਦੇ ਅੰਦਰ ਹੀ ਪ੍ਰਮਾਤਮਾ ਪ੍ਰਗਟ ਹੋ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਦਾ ਭਾਂਬੜ ਉਸ ਦਾ ਨਾਮ ਲੈਣ ਕਰਕੇ ਬੁਝ ਜਾਂਦਾ ਹੈ॥ ੧੮੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-उस अल्लाह (ईश्वर) की भक्ति करो, जिसके स्मरण से सब दुःख दूर हो जाते हैं। हृदय के भीतर ही प्रभु प्रकट हो जाता है और उसके नाम से वासना की जलती आग बुझ जाती है॥ १८६॥',
      en: 'Satguru Kabir Saheb proclaims: Worship and devote yourself to the Divine Lord, remembering Whom all sorrows depart! The Master manifests right within your heart, and through His Holy Name, the burning fire of desire is quenched.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਸਿਮਰਨ ਨਾਲ ਹਿਰਦੇ ਵਿੱਚ ਵਾਹਿਗੁਰੂ ਦਾ ਪ੍ਰਗਾਸ ਹੁੰਦਾ ਹੈ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਬੁਝਦੀ ਹੈ।',
      hi: 'प्रभु स्मरण से हृदय में ईश्वर का प्रकाश होता है और तृष्णा की आग शांत होती है।',
      en: 'Continuous meditation manifests God within the soul and cools the fiery flames of craving.',
    },
    acharana: {
      pb: 'ਹਰ ਸੁਆਸ ਨਾਲ ਅੱਲਾ/ਵਾਹਿਗੁਰੂ ਦੀ ਬੰਦਗੀ ਕਰੋ ਅਤੇ ਮਨ ਦੇ ਸਾਰੇ ਦੁੱਖ-ਕਲੇਸ਼ ਦੂਰ ਕਰੋ।',
      hi: 'हर सांस से अल्लाह/वाहेगुरु का ध्यान करें और मन के सभी दुख दूर करें।',
      en: 'Devote yourself to the worship of God with every breath to dissolve all suffering.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ-ਬ੍ਰਿਤੀ ਅੱਲਾ ਦੀ ਬੰਦਗੀ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'अपनी चेतना अल्लाह की बंदगी में समर्पित कर नाम में लीन हों।',
      en: 'Surrender your conscious awareness to God’s worship and abide in His Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 187 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-187',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੭: ਜੋਰੀ ਕੀਏ ਜੁਲਮੁ ਹੈ (ਕਹਤਾ ਨਾਉ ਹਲਾਲੁ)',
      hi: 'सलोक १८७: जोरी कीए जुलमु है (कहता नाउ हलालु)',
      en: 'Salok 187: Oppression Cannot Be Called Lawful; Divine Judgment Awaits',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੋਰੀ ਕੀਏ ਜੁਲਮੁ ਹੈ ਕਹਤਾ ਨਾਉ ਹਲਾਲੁ ॥',
      'ਦਫਤਰਿ ਲੇਖਾ ਮਾਂਗੀਐ ਤਬ ਹੋਇਗੋ ਕਉਨੁ ਹਵਾਲੁ ॥੧੮੭॥',
    ],
    moolDevanagari: [
      'कबीर जोरी कीए जुलमु है कहता नाउ हलालु ॥',
      'दफतरि लेखा मांगीऐ तब होइगो कउनु हवालु ॥१८७॥',
    ],
    moolRoman: [
      'Kabīr jorī kīe julam hai kahtā nāu halāl.',
      'Daftar lekhā māngīai tab hoigo kaun havāl. ||187||',
    ],
    shabdarth: [
      {
        word: 'ਜੋਰੀ ਕੀਏ / जोरी कीए',
        meaning: {
          pb: 'ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ/ਜ਼ੁਲਮ ਕਰਨਾ',
          hi: 'ज़बरदस्ती या अत्याचार करना',
          en: 'Committing force, violence, or oppression',
        },
      },
      {
        word: 'ਹਲਾਲੁ / हलालु',
        meaning: {
          pb: 'ਜਾਇਜ਼/ਧਰਮ-ਅਨੁਕੂਲ ਕਹਿਣਾ',
          hi: 'न्यायसंगत/धर्मानुकूल ठहराना',
          en: 'Calling it lawful or sanctioned',
        },
      },
      {
        word: 'ਦਫਤਰਿ ਲੇਖਾ / दफतरि लेखा',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦੀ ਦਰਗਾਹ/ਲੇਖੇ ਵਾਲੇ ਦਫ਼ਤਰ ਵਿੱਚ',
          hi: 'प्रभु के दरबार के कार्यालय में',
          en: 'In the Divine Court of Accounts',
        },
      },
      {
        word: 'ਕਉਨੁ ਹਵਾਲੁ / कउनु हवाल',
        meaning: {
          pb: 'ਕੀ ਹਾਲ ਹੋਵੇਗਾ? (ਕੋਈ ਬਚਾਅ ਨਹੀਂ ਹੋਵੇਗਾ)',
          hi: 'क्या दुर्दशा होगी (कोई बचाव न होगा)',
          en: 'What awful plight will befall you then',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ ਨਾਲ ਕਿਸੇ ਜੀਵ ਉੱਤੇ ਜ਼ੁਲਮ ਕਰਕੇ ਉਸ ਨੂੰ (ਹਲਾਲ) ਧਰਮ-ਅਨੁਕੂਲ ਜਾਇਜ਼ ਕਹਿੰਦਾ ਹੈਂ, ਪਰ ਜਦੋਂ ਪ੍ਰਭੂ ਦੀ ਦਰਗਾਹ ਵਿੱਚੋਂ ਇਸ ਦਾ ਹਿਸਾਬ ਮੰਗਿਆ ਜਾਵੇਗਾ, ਤਾਂ ਫਿਰ ਤੇਰਾ ਕੀ ਹਾਲ ਹੋਵੇਗਾ? ਜ਼ੁਲਮ ਦਾ ਲੇਖਾ ਦੇਣਾ ਹੀ ਪਵੇਗਾ॥ ੧੮੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जीवों पर ज़बरदस्ती और अत्याचार करके तू उसे धर्मानुकूल (हलाल) कहता है! परंतु जब ईश्वर के दरबार में कर्मों का हिसाब मांगा जाएगा, तब तेरी क्या दुर्दशा होगी?॥ १८७॥',
      en: 'Satguru Kabir Saheb proclaims: Committing violence and cruelty against living beings, you call it lawful! When the Divine Court demands the account of your deeds, what terrible plight will befall you then?',
    },
    chintan: {
      pb: 'ਜੀਵਾਂ ਉੱਤੇ ਜ਼ੁਲਮ ਕਰਨਾ ਗੁਨਾਹ ਹੈ; ਦਰਗਾਹੀ ਲੇਖੇ ਵਿੱਚ ਹਰ ਜ਼ੁਲਮ ਦਾ ਹਿਸਾਬ ਦੇਣਾ ਪੈਂਦਾ ਹੈ।',
      hi: 'जीवों पर अत्याचार करना महापाप है; ईश्वर के दरबार में हर कर्म का हिसाब देना होता है।',
      en: 'Cruelty to living beings is a severe sin; every act of violence must be answered for in the Divine Court.',
    },
    acharana: {
      pb: 'ਜ਼ੁਲਮ ਤੇ ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ ਛੱਡ ਕੇ ਸਭ ਜੀਵਾਂ ਉੱਤੇ ਦਇਆ ਤੇ ਅਹਿੰਸਾ ਦਾ ਸੁਭਾਅ ਅਪਣਾਓ।',
      hi: 'अत्याचार और हिंसा त्यागकर सभी जीवों पर दया और करुणा का भाव रखें।',
      en: 'Abandon cruelty and force; practice compassion and non-violence toward all beings.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਲਾਕੀ ਪ੍ਰਭੂ ਦਰਬਾਰ ਅੱਗੇ ਛੱਡ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਦਇਆਵਾਨ ਬਣੋ।',
      hi: 'अपनी चालाकी प्रभु दरबार के आगे त्यागकर दयालु और नम्र बनें।',
      en: 'Surrender all self-justifying rationalizations and stand humble before Divine Justice.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 188 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-188',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੮: ਖੂਬੁ ਖਾਨਾ ਖੀਚਰੀ (ਗਲਾ ਕਟਾਵੈ ਕਉਨੁ)',
      hi: 'सलोक १८८: खूबु खाना खीचरी (गला कटावै कउनु)',
      en: 'Salok 188: Simple Khichdi Is Blessed; Avoid Meat to Escape Karmic Retribution',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਖੂਬੁ ਖਾਨਾ ਖੀਚਰੀ ਜਾ ਮਹਿ ਅੰਮ੍ਰਿਤੁ ਲੋਨੁ ॥',
      'ਹੇਰਾ ਰੋਟੀ ਕਾਰਨੇ ਗਲਾ ਕਟਾਵੈ ਕਉਨੁ ॥੧੮੮॥',
    ],
    moolDevanagari: [
      'कबीर खूबु खाना खीचरी जा महि अम्रितु लोनु ॥',
      'हेरा रोटी कारने गला कटावै कउनु ॥१८८॥',
    ],
    moolRoman: [
      'Kabīr khūb khānā khīcharī jā mah amrit lon.',
      'Herā roṭī kārne galā kaṭāvai kaun. ||188||',
    ],
    shabdarth: [
      {
        word: 'ਖੂਬੁ ਖਾਨਾ ਖੀਚਰੀ / खूबु खाना खीचरी',
        meaning: {
          pb: 'ਖਿਚੜੀ (ਦਾਲ-ਚੌਲ) ਦਾ ਭੋਜਨ ਸਭ ਤੋਂ ਉੱਤਮ ਹੈ',
          hi: 'खिचड़ी (दाल-चावल) का भोजन अत्यंत उत्तम है',
          en: 'Simple khichdi (lentils & rice) is a most sublime food',
        },
      },
      {
        word: 'ਅੰਮ੍ਰਿਤੁ ਲੋਨੁ / अम्रितु लोनु',
        meaning: {
          pb: 'ਸੁਆਦਲਾ/ਅੰਮ੍ਰਿਤ ਵਰਗਾ ਲੂਣ',
          hi: 'अमृत समान स्वादिष्ट नमक',
          en: 'Delicious nectar-like salt',
        },
      },
      {
        word: 'ਹੇਰਾ ਰੋਟੀ / हेरा रोटी',
        meaning: {
          pb: 'ਸ਼ਿਕਾਰ ਦਾ ਮਾਸ (ਹੇਰਾ/ਮਾਂਸ ਦੀ ਰੋਟੀ)',
          hi: 'शिकार का मांस (मांसाहार भोजन)',
          en: 'Hunted meat / non-vegetarian meal',
        },
      },
      {
        word: 'ਗਲਾ ਕਟਾਵੈ ਕਉਨੁ / गला कटावै कउनु',
        meaning: {
          pb: 'ਆਪਣਾ ਗਲਾ ਕੌਣ ਕਟਵਾਏ? (ਮਾਸ ਖਾ ਕੇ ਸਜ਼ਾ ਭੋਗਣਾ)',
          hi: 'अपना गला कौन कटवाए (पाप का दंड भुगतना)',
          en: 'Who would suffer getting his throat cut in retribution?',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਖਿਚੜੀ (ਦਾਲ ਤੇ ਚੌਲ) ਦਾ ਭੋਜਨ ਬਹੁਤ ਚੰਗਾ ਹੈ, ਜਿਸ ਵਿਚ ਅੰਮ੍ਰਿਤ ਵਰਗਾ ਸੁਆਦਲਾ ਲੂਣ ਹੁੰਦਾ ਹੈ। ਮਾਸ ਨਾਲ ਰੋਟੀ ਖਾਣ ਵਾਸਤੇ ਦੂਸਰੇ ਜੀਵਾਂ ਨੂੰ ਮਾਰਨਾ ਅਤੇ ਫਿਰ ਇਸ ਦੀ ਸਜ਼ਾ ਵਜੋਂ ਆਪਣਾ ਗਲਾ ਕੌਣ ਕਟਵਾਏ? ਮਾਸ ਖਾ ਕੇ ਗੁਨਾਹਗਾਰ ਬਣਨਾ ਮੰਨਜ਼ੂਰ ਨਹੀਂ॥ ੧੮੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-दाल-चावल की सात्विक खिचड़ी का भोजन बहुत उत्तम है, जिसमें स्वादिष्ट नमक मिला हो। मांस खाने के स्वाद के लिए किसी जीव की हत्या करना और परिणाम स्वरूप अपना गला कटवाना कौन बुद्धिमानी समझेगा?॥ १८८॥',
      en: 'Satguru Kabir Saheb proclaims: Eating simple khichdi with delicious salt is most wholesome! For the temporary relish of meat, who would kill a creature and suffer having his own throat cut in spiritual retribution?',
    },
    chintan: {
      pb: 'ਸਾਤਵਿਕ ਤੇ ਨਿਰਦੋਸ਼ ਭੋਜਨ ਮਨ ਵਿੱਚ ਸ਼ਾਂਤੀ ਲਿਆਉਂਦਾ ਹੈ, ਜਦਕਿ ਜੀਵ-ਹੱਤਿਆ ਦਰਗਾਹੀ ਦੰਡ ਲਿਆਉਂਦੀ ਹੈ।',
      hi: 'सात्विक भोजन मन को शांति देता है, जबकि जीव-हिंसा पाप और दंड का कारण बनती है।',
      en: 'Simple vegetarian food preserves spiritual purity, while animal harm incurs grave karmic retribution.',
    },
    acharana: {
      pb: 'ਮਾਸਾਹਾਰ ਤੇ ਜੀਵ-ਹੱਤਿਆ ਤਿਆਗ ਕੇ ਸਾਦਾ ਤੇ ਪਵਿੱਤਰ ਸਾਤਵਿਕ ਆਹਾਰ ਗ੍ਰਹਿਣ ਕਰੋ।',
      hi: 'मांसाहार और जीव-हिंसा त्यागकर सात्विक और पवित्र आहार ग्रहण करें।',
      en: 'Reject non-vegetarian food and violence; embrace simple, pure, compassionate sustenance.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਆਹਾਰ ਤੇ ਸੁਭਾਅ ਗੁਰਮਤਿ ਅਨੁਸਾਰ ਪਵਿੱਤਰ ਕਰਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना आहार और विचार गुरु-मर्यादा अनुसार पवित्र कर प्रभु को अर्पित करें।',
      en: 'Purify your lifestyle and diet according to Guru’s wisdom and offer yourself to God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 189 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-189',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੮੯: ਗੁਰੁ ਲਾਗਾ ਤਬ ਜਾਨੀਐ (ਮਿਟੈ ਮੋਹੁ ਤਨ ਤਾਪ)',
      hi: 'सलोक १८९: गुरु लागा तब जानीऐ (मिटै मोहु तन ताप)',
      en: 'Salok 189: The Guru’s Wisdom Takes Root When Worldly Afflictions Vanish',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗੁਰੁ ਲਾਗਾ ਤਬ ਜਾਨੀਐ ਮਿਟੈ ਮੋਹੁ ਤਨ ਤਾਪ ॥',
      'ਹਰਖ ਸੋਗ ਦਾਝੈ ਨਹੀ ਤਬ ਹਰਿ ਆਪਹਿ ਆਪਿ ॥੧੮੯॥',
    ],
    moolDevanagari: [
      'कबीर गुरु लागा तब जानीऐ मिटै मोहु तन ताप ॥',
      'हरख सोग दाझै नही तब हरि आपसहि आपि ॥१८९॥',
    ],
    moolRoman: [
      'Kabīr gur lāgā tab jānīai miṭai moh tan tāp.',
      'Harakh sog dājhai nahī tab Har āpah āp. ||189||',
    ],
    shabdarth: [
      {
        word: 'ਗੁਰੁ ਲਾਗਾ / गुरु लागा',
        meaning: {
          pb: 'ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਹਿਰਦੇ ਵਿੱਚ ਵੱਸਿਆ',
          hi: 'गुरु का उपदेश हृदय में फलित हुआ',
          en: 'Guru’s wisdom took root in the heart',
        },
      },
      {
        word: 'ਮਿਟੈ ਮੋਹੁ ਤਨ ਤਾਪ / मिटै मोहु तन ताप',
        meaning: {
          pb: 'ਮੋਹ ਤੇ ਦੇਹ ਦੇ ਦੁੱਖ-ਕਲੇਸ਼ ਮਿਟ ਜਾਣ',
          hi: 'मोह और शरीर के ताप/कष्ट मिट जाएं',
          en: 'Attachment and bodily afflictions vanish',
        },
      },
      {
        word: 'ਹਰਖ ਸੋਗ ਦਾਝੈ ਨਹੀ / हरख सोग दाझै नही',
        meaning: {
          pb: 'ਖੁਸ਼ੀ ਤੇ ਗਮੀ ਦੀ ਸਾੜਨ/ਚਿੰਤਾ ਨਾ ਹੋਵੇ',
          hi: 'हर्ष और शोक जला न सकें',
          en: 'Neither joy nor sorrow burns the mind',
        },
      },
      {
        word: 'ਹਰਿ ਆਪਹਿ ਆਪਿ / हरि आपसहि आपि',
        meaning: {
          pb: 'ਉੱਥੇ ਹਰੀ ਪ੍ਰਭੂ ਆਪ ਹੀ ਆਪ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ',
          hi: 'वहां हरि स्वयं प्रकट होते हैं',
          en: 'There the Lord Himself manifests fully',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਤਦ ਹੀ ਹਿਰਦੇ ਨੂੰ ਲੱਗਾ ਜਾਣਨਾ ਚਾਹੀਦਾ ਹੈ, ਜਦੋਂ ਮੋਹ ਅਤੇ ਸਰੀਰ ਦੇ ਦੁਖ ਕਲੇਸ਼ ਮਿਟ ਜਾਣ। ਜਦੋਂ ਖੁਸ਼ੀ ਤੇ ਗਮੀ ਮਨ ਨੂੰ ਨਾ ਸਾੜ ਸਕਣ, ਤਦ ਪ੍ਰਮਾਤਮਾ ਉਸ ਹਿਰਦੇ ਵਿਚ ਆਪ ਹੀ ਆਪ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ॥ ੧੮੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-गुरु का उपदेश फलित हुआ तब जानना चाहिए, जब मोह और देह के ताप मिट जाएं। जब हर्ष और शोक मन को न जला सकें, तब समझना चाहिए कि हरि उस हृदय में स्वयं विराजमान हैं॥ १८९॥',
      en: 'Satguru Kabir Saheb proclaims: Know that the Guru’s teaching has taken true root when worldly attachment and bodily afflictions dissolve. When neither pleasure nor sorrow can burn your mind, then the Lord Himself abides within you!',
    },
    chintan: {
      pb: 'ਗੁਰਮਤਿ ਗਿਆਨ ਨਾਲ ਮਨ ਖੁਸ਼ੀ ਤੇ ਗਮੀ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸਮ-ਦ੍ਰਿਸ਼ਟ ਅਤੇ ਅਡੋਲ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'गुरु-ज्ञान से मन हर्ष और शोक से परे होकर समभाव और अचल स्थिति में पहुंचता है।',
      en: 'True discipleship elevates the mind beyond pleasure and pain into serene divine poise.',
    },
    acharana: {
      pb: 'ਹਰਖ-ਸੋਗ ਦੀ ਸਾੜਨ ਤੋਂ ਬਚ ਕੇ ਗੁਰੂ ਸ਼ਬਦ ਦੀ ਲਿਵ ਵਿੱਚ ਅਡੋਲ ਰਹੋ।',
      hi: 'हर्ष और शोक से अप्रभावित रहकर गुरु-शब्द में स्थिर रहें।',
      en: 'Remain unruffled by earthly joy or grief, grounded firmly in the Guru’s wisdom.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਹਰਖ-ਸੋਗ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਿਜ-ਸਰੂਪ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपने मन को हर्ष-शोक से मुक्त कर परमात्मा के स्वरूप में समर्पित करें।',
      en: 'Surrender your dualities of joy and grief to experience the undivided presence of God.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 190 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-190',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੦: ਰਾਮ ਕਹਨ ਮਹਿ ਭੇਦੁ ਹੈ (ਸੋਈ ਕਉਤਕਹਾਰ)',
      hi: 'सलोक १९०: राम कहन महि भेदु है (सोई कउतकहार)',
      en: 'Salok 190: Distinguishing the All-Pervading Lord from the Historical Avatar',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮ ਕਹਨ ਮਹਿ ਭੇਦੁ ਹੈ ਤਾ ਮਹਿ ਏਕੁ ਬਿਚਾਰੁ ॥',
      'ਸੋਈ ਰਾਮੁ ਸਭੈ ਕਹਹਿ ਸੋਈ ਕਉਤਕਹਾਰ ॥੧੯੦॥',
    ],
    moolDevanagari: [
      'कबीर राम कहन महि भेदु है ता महि एकु बिचारु ॥',
      'सोई रामु सभै कहहि सोई कउतकहार ॥१९०॥',
    ],
    moolRoman: [
      'Kabīr Rām kahan mah bhed hai tā mah ek bichār.',
      'Soī Rām sabhai kahah soī kautakhār. ||190||',
    ],
    shabdarth: [
      {
        word: 'ਭੇਦੁ ਹੈ / भेदु है',
        meaning: {
          pb: 'ਗੂੜ੍ਹਾ ਅੰਤਰ/ਫਰਕ ਹੈ',
          hi: 'गंभीर भेद/अंतर है',
          en: 'There is a deep difference in meaning',
        },
      },
      {
        word: 'ਕਉਤਕਹਾਰ / कउतकहार',
        meaning: {
          pb: 'ਕੌਤਕ ਕਰਤਾ, ਅਵਤਾਰੀ (ਦਸਰਥ ਸੁਤ)',
          hi: 'कौतुक करने वाले अवतार',
          en: 'The miracle-performer / avatar',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਰਾਮ ਕਹਿਣ ਵਿਚ ਫਰਕ (ਅੰਤਰਾ) ਹੈ ਉਸ ਵਿਚ ਇਕ ਸਮਝਣ ਯੋਗ ਗੱਲ ਹੈ। ਉਹੀ ਰਾਮ (ਜੋ ਸਰਬ ਵਿਆਪਕ ਨਿਰੰਕਾਰ ਹੈ) ਉਸ ਨੂੰ ਸਾਰੇ ਕਹਿੰਦੇ ਹਨ, ਤੇ ਉਹੀ ਰਾਮ ਜੋ (ਦਸਰਥ ਦਾ ਪੁੱਤਰ) ਹੈ, ਰਾਵਣ ਨਾਲ ਜੁੱਧ ਕਰਕੇ ਕੌਤਕ ਕਰਨ ਵਾਲਾ ਹੈ॥ ੧੯੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-राम कहने में एक गहरा भेद और विचारणीय अंतर है। एक राम वह निरंकार प्रभु है जिसे सब भजते हैं, और एक राम वह लीलाधारी अवतारी राम है॥ १९०॥',
      en: 'Satguru Kabir Saheb proclaims: There is a vital distinction in uttering the Name of RAM. One RAM is the Omnipresent Supreme Being, while the other is the historical Avatar performing earthly plays.',
    },
    chintan: {
      pb: 'ਰਾਮ ਨਾਮ ਦੇ ਉੱਚਾਰਨ ਵਿੱਚ ਸਰਬ-ਵਿਆਪਕ ਨਿਰਗੁਣ ਪਰਮਾਤਮਾ ਦਾ ਗਿਆਨ-ਬਿਬੇਕ ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
      hi: 'राम नाम के उच्चारण में सर्व-व्यापी निरंकार प्रभु का ज्ञान होना आवश्यक है।',
      en: 'One must discern the difference between the finite avatar and the Infinite Omnipresent Spirit.',
    },
    acharana: {
      pb: 'ਅਵਤਾਰੀ ਰਾਮ ਦੀ ਥਾਂ ਸਰਬ-ਵਿਆਪੀ ਅਕਾਲ ਪੁਰਖ ਨਿਰੰਕਾਰ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'अवतारी रूप से परे सर्व-व्यापी निरंकार प्रभु का सुमिरन करें।',
      en: 'Contemplate the Infinite Omnipresent Lord who pervades every heart.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ-ਬ੍ਰਿਤੀ ਸਰਬ-ਵਿਆਪਕ ਨਿਰੰਕਾਰ ਰਾਮ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी चेतना सर्व-व्यापी निरंकार राम में समर्पित करें।',
      en: 'Surrender your awareness to the All-Pervading Absolute Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 191 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-191',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੧: ਰਾਮੈ ਰਾਮ ਕਹੁ (ਕਹਿਬੇ ਮਾਹਿ ਬਿਬੇਕ)',
      hi: 'सलोक १९१: रामै राम कहु (कहिबे माहि बिबेक)',
      en: 'Salok 191: Utter the Name of RAM with Spiritual Discrimination',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮੈ ਰਾਮ ਕਹੁ ਕਹਿਬੇ ਮਾਹਿ ਬਿਬੇਕ ॥',
      'ਏਕੁ ਅਨੇਕਹਿ ਮਿਲਿ ਗਇਆ ਏਕ ਸਮਾਨਾ ਏਕ ॥੧੯੧॥',
    ],
    moolDevanagari: [
      'कबीर रामै राम कहु कहिबे माहि बिबेक ॥',
      'एकु अनेकहि मिलि गइआ एक समाना एक ॥१९१॥',
    ],
    moolRoman: [
      'Kabīr Rāmai Rām kah kahibe māh bibek.',
      'Ek anekah mil gaiā ek samānā ek. ||191||',
    ],
    shabdarth: [
      {
        word: 'ਕਹਿਬੇ ਮਾਹਿ ਬਿਬੇਕ / कहिबे माहि बिबेक',
        meaning: {
          pb: 'ਉੱਚਾਰਨ ਕਰਨ ਵਿੱਚ ਗਿਆਨ-ਬਿਬੇਕ ਚਾਹੀਦਾ ਹੈ',
          hi: 'कहने में विवेक और ज्ञान होना चाहिए',
          en: 'Requires spiritual discrimination while chanting',
        },
      },
      {
        word: 'ਏਕੁ ਅਨੇਕਹਿ ਮਿਲਿ ਗਇਆ / एकु अनेकहि मिलि गइआ',
        meaning: {
          pb: 'ਇੱਕ ਰਾਮ ਅਨੇਕਾਂ ਜੀਵਾਂ ਵਿੱਚ ਵਿਆਪਕ ਹੈ (ਨਿਰੰਕਾਰ)',
          hi: 'एक राम अनेकों में व्याप्त है (निरंकार)',
          en: 'One RAM pervades countless beings',
        },
      },
      {
        word: 'ਏਕ ਸਮਾਨਾ ਏਕ / एक समाना एक',
        meaning: {
          pb: 'ਇੱਕ ਰਾਮ ਕੇਵਲ ਇੱਕ ਦੇਹ ਵਿੱਚ ਹੀ ਸੀ (ਅਵਤਾਰ)',
          hi: 'एक राम केवल एक देह में समाया था (अवतारी)',
          en: 'One RAM was limited to a single physical body',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਤੂੰ ਰਾਮ ਹੀ ਰਾਮ ਕਹੁ, ਸਦਾ ਹੀ ਰਾਮ ਦਾ ਸਿਮਰਨ ਕਰ, ਪਰ ਰਾਮ ਕਹਿਣ ਵਿਚ ਇਕ ਵੀਚਾਰ ਹੈ; ਇਕ ਰਾਮ (ਸਰਬ ਵਿਆਪਕ) ਉਹ ਹੈ ਜਿਹੜਾ ਅਨੇਕਾਂ ਜੀਵਾਂ ਵਿਚ ਸਮਾ ਰਿਹਾ ਹੈ। ਇਕ ਰਾਮ (ਦਸਰਥ ਦਾ ਪੁੱਤਰ) ਉਹ ਹੈ ਜਿਹੜਾ ਇੱਕ ਸਰੀਰ ਵਿਚ ਹੀ ਸਮਾਇਆ ਸੀ॥ ੧੯੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-राम ही राम कहो, परंतु उच्चारण में विवेक रखो। एक राम वह है जो अनेकों जीवों में व्याप्त है, और एक राम वह है जो केवल एक देह में समाया था॥ १९१॥',
      en: 'Satguru Kabir Saheb proclaims: Utter the Name of RAM, but chant with spiritual wisdom. One RAM pervades all creation, while the other was confined to a single physical form.',
    },
    chintan: {
      pb: 'ਸਿਮਰਨ ਵੇਲੇ ਸੂਖਮ ਬਿਬੇਕ ਬੁੱਧੀ ਦੁਆਰਾ ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਭੂ ਦੀ ਅਰਾਧਨਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
      hi: 'सुमिरन के समय विवेक-बुद्धि से सर्व-व्यापी प्रभु की आराधना करनी चाहिए।',
      en: 'In meditation, use spiritual discrimination to adore the One who pervades all souls.',
    },
    acharana: {
      pb: 'ਦੇਹ-ਧਾਰੀ ਤੱਕ ਸੀਮਤ ਨਾ ਰਹੋ; ਸਾਰੀ ਸ੍ਰਿਸ਼ਟੀ ਵਿੱਚ ਰਮੇ ਹੋਏ ਰਾਮ ਨੂੰ ਭਜੋ।',
      hi: 'देह-धारी तक सीमित न रहें; संपूर्ण सृष्टि में रमे राम का ध्यान करें।',
      en: 'Look beyond physical boundaries and worship the One who fills every void.',
    },
    samarpan: {
      pb: 'ਸਰਬ-ਵਿਆਪਕ ਰਾਮ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣੀ ਆਤਮਾ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'सर्व-व्यापी राम के चरणों में अपनी आत्मा समर्पित करें।',
      en: 'Surrender your spirit to the All-Pervading Omnipresent Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 192 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-192',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੨: ਜਾ ਘਰ ਸਾਧ ਨ ਸੇਵੀਅਹਿ (ਤੇ ਘਰ ਮਰਹਟ ਸਾਰਖੇ)',
      hi: 'सलोक १९२: जा घर साध न सेवीअहि (ते घर मरहट सारखे)',
      en: 'Salok 192: A House Without Saints or Devotion Is Like a Graveyard',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਾ ਘਰ ਸਾਧ ਨ ਸੇਵੀਅਹਿ ਹਰਿ ਕੀ ਸੇਵਾ ਨਾਹਿ ॥',
      'ਤੇ ਘਰ ਮਰਹਟ ਸਾਰਖੇ ਭੂਤ ਬਸਹਿ ਤਿਨ ਮਾਹਿ ॥੧੯੨॥',
    ],
    moolDevanagari: [
      'कबीर जा घर साध न सेवीअहि हरि की सेवा नाहि ॥',
      'ते घर मरहट सारखे भूत बसहि तिन माहि ॥१९२॥',
    ],
    moolRoman: [
      'Kabīr jā ghar sādh na sevīah Har kī sevā nāh.',
      'Te ghar marhaṭ sārakhe bhūt basah tin māh. ||192||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਧ ਨ ਸੇਵੀਅਹਿ / साध न सेवीअहि',
        meaning: {
          pb: 'ਸੰਤਾਂ ਦੀ ਸੇਵਾ ਨਹੀਂ ਹੁੰਦੀ',
          hi: 'संतों की सेवा नहीं होती',
          en: 'Saints and holy men are not served',
        },
      },
      {
        word: 'ਮਰਹਟ ਸਾਰਖੇ / मरहट सारखे',
        meaning: {
          pb: 'ਸ਼ਮਸ਼ਾਨ ਘਾਟ ਵਰਗੇ',
          hi: 'श्मशान घाट के समान',
          en: 'Like cremation grounds',
        },
      },
      {
        word: 'ਭੂਤ ਬਸਹਿ / भूत बसहि',
        meaning: {
          pb: 'ਭੂਤ-ਪ੍ਰੇਤ (ਵਿਕਾਰੀ ਬੰਦੇ) ਵੱਸਦੇ ਹਨ',
          hi: 'भूत-प्रेत (विकारी जीव) बसते हैं',
          en: 'Demons / evil-minded beings reside there',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਜਿਸ ਘਰ ਵਿਚ ਸੰਤਾਂ ਦੀ ਸੇਵਾ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਪ੍ਰਮਾਤਮਾ ਦੀ ਭਗਤੀ ਨਹੀਂ ਕੀਤੀ ਜਾਂਦੀ, ਉਹ ਘਰ ਮਸਾਣਾਂ ਵਰਗੇ ਹਨ, ਉਨਾਂ ਘਰਾਂ ਵਿਚ ਭੂਤਨੇ ਵੱਸਦੇ ਹਨ॥ ੧੯੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जिस घर में संतों की सेवा और ईश्वर की भक्ति नहीं होती, वे घर श्मशान के समान हैं और उनमें भूत-प्रेत निवास करते हैं॥ १९२॥',
      en: 'Satguru Kabir Saheb proclaims: The house where Saints are not served and God is not worshiped is like a desolate graveyard inhabited by ghosts.',
    },
    chintan: {
      pb: 'ਸੰਤ ਸੇਵਾ ਤੇ ਪ੍ਰਭੂ ਭਗਤੀ ਹੀ ਘਰ ਨੂੰ ਪਵਿੱਤਰ ਮੰਦਰ ਬਣਾਉਂਦੀ ਹੈ।',
      hi: 'संत-सेवा और प्रभु-भक्ति ही घर को पवित्र पावन मंदिर बनाती है।',
      en: 'Devotion and service to holy souls transform a house into a sacred temple.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਗ੍ਰਹਿਸਤ ਨੂੰ ਸਾਧ-ਸੰਗਤ ਅਤੇ ਨਾਮ-ਸਿਮਰਨ ਨਾਲ ਪਵਿੱਤਰ ਕਰੋ।',
      hi: 'अपने घर को साध-संगत और नाम-सुमिरन से पावन बनाएं।',
      en: 'Sanctify your home through holy hospitality, devotion, and unceasing remembrance of God.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਘਰ ਤੇ ਪਰਿਵਾਰ ਪ੍ਰਭੂ ਦੀ ਸੇਵਾ ਤੇ ਭਗਤੀ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपना घर और परिवार प्रभु की सेवा और भक्ति में समर्पित करें।',
      en: 'Dedicate your household and family life to the service of God and His devotees.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 193 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-193',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੩: ਗੂੰਗਾ ਹੂਆ ਬਾਵਰਾ (ਮਾਰਿਆ ਸਤਿਗੁਰ ਬਾਨ)',
      hi: 'सलोक १९३: गूंगा हूआ बावरा (मारिआ सतिगुर बान)',
      en: 'Salok 193: Struck by the Satguru’s Arrow, Senses Become Dead to Evil',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਗੂੰਗਾ ਹੂਆ ਬਾਵਰਾ ਬਹਰਾ ਹੂਆ ਕਾਨ ॥',
      'ਪਾਵਹੁ ਤੇ ਪਿੰਗੁਲ ਭਇਆ ਮਾਰਿਆ ਸਤਿਗੁਰ ਬਾਨ ॥੧੯੩॥',
    ],
    moolDevanagari: [
      'कबीर गूंगा हूआ बावरा बहरा हूआ कान ॥',
      'पावहु ते पिंगुल भइआ मारिआ सतिगुर बान ॥१९३॥',
    ],
    moolRoman: [
      'Kabīr gūngā hūā bāvarā bahrā hūā kān.',
      'Pāvahu te pingul bhaīā māriā satgur bān. ||193||',
    ],
    shabdarth: [
      {
        word: 'ਗੂੰਗਾ ਬਾਵਰਾ / गूंगा बावरा',
        meaning: {
          pb: 'ਨਿੰਦਿਆ ਤੋਂ ਗੂੰਗਾ ਤੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਚ ਬਾਵਰਾ (ਮਸਤ)',
          hi: 'निंदा के लिए मूक और प्रभु-प्रेम में मग्न',
          en: 'Mute to slander and mad in divine love',
        },
      },
      {
        word: 'ਬਹਰਾ ਹੂਆ ਕਾਨ / बहरा हूआ कान',
        meaning: {
          pb: 'ਬੁਰਾਈਆਂ ਸੁਣਨ ਤੋਂ ਬੋਲਾ',
          hi: 'बुराई सुनने में बहरा',
          en: 'Deaf to evil and criticism',
        },
      },
      {
        word: 'ਪਿੰਗੁਲ ਭਇਆ / पिंगुल भइआ',
        meaning: {
          pb: 'ਪਾਪ ਰਸਤੇ ਤੁਰਨ ਤੋਂ ਪਿੰਗਲਾ (ਲਾਚਾਰ)',
          hi: 'पाप-मार्ग पर चलने से पंगु',
          en: 'Lame to walk on evil paths',
        },
      },
      {
        word: 'ਸਤਿਗੁਰ ਬਾਨ / सतिगुर बान',
        meaning: {
          pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ-ਉਪਦੇਸ਼ ਦਾ ਬਾਣ',
          hi: 'सतगुरु के शब्द-उपदेश का बाण',
          en: 'The arrow of the True Guru’s Word',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਸ ਨੂੰ ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਆਪਣੇ ਸ਼ਬਦ ਦਾ ਬਾਣ ਮਾਰਿਆ, ਉਹ ਬੁਰੇ ਬੋਲਾਂ ਤੋਂ ਗੂੰਗਾ, ਪ੍ਰੇਮ ਵਿੱਚ ਬਾਵਰਾ, ਨਿੰਦਿਆ ਸੁਣਨ ਤੋਂ ਬੋਲਾ ਅਤੇ ਮਾੜੇ ਕਰਮਾਂ ਵੱਲ ਜਾਣ ਤੋਂ ਪਿੰਗਲਾ ਹੋ ਜਾਂਦਾ ਹੈ॥ ੧੯੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जिसे सतगुरु ने शब्द का बाण मारा है, वह निंदा के लिए मूक, बुराई सुनने में बहरा, और पाप-मार्ग पर चलने में पंगु हो जाता है॥ १९३॥',
      en: 'Satguru Kabir Saheb proclaims: Struck by the arrow of the True Guru’s Word, a person becomes mute to harsh speech, deaf to slander, and lame to walk on evil paths.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਦਾ ਬਾਣ ਜੀਵ ਦੀਆਂ ਇੰਦਰੀਆਂ ਨੂੰ ਵਿਕਾਰਾਂ ਵੱਲੋਂ ਹੋੜ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਕਰ ਦਿੰਦਾ ਹੈ।',
      hi: 'गुरु-शब्द का बाण इंद्रियों को विकारों से हटाकर केवल प्रभु-भक्ति में लीन कर देता है।',
      en: 'The Guru’s Word restrains the senses from evil pursuits, redirecting them toward pure devotion.',
    },
    acharana: {
      pb: 'ਆਪਣੀਆਂ ਇੰਦਰੀਆਂ ਨੂੰ ਵਿਕਾਰਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਗੁਰੂ ਉਪਦੇਸ਼ ਉੱਤੇ ਦ੍ਰਿੜ੍ਹ ਹੋਵੋ।',
      hi: 'अपनी इंद्रियों को विकारों से हटाकर गुरु-उपदेश पर दृढ़ रहें।',
      en: 'Restrain your tongue, ears, and feet from unrighteousness; live by the Guru’s wisdom.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ, ਮਨ ਤੇ ਸਾਰੀਆਂ ਇੰਦਰੀਆਂ ਸਤਿਗੁਰੂ ਦੇ ਬਾਣ ਅੱਗੇ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना तन, मन और संपूर्ण इंद्रियां सतगुरु के बाण के सम्मुख समर्पित करें।',
      en: 'Surrender all your sensory faculties unconditionally to the transformational Word of the Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭၄ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 194 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-194',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੪: ਸਤਿਗੁਰ ਸੂਰਮੇ ਬਾਹਿਆ ਬਾਨੁ (ਪਰਾ ਕਰੇਜੇ ਛੇਕੁ)',
      hi: 'सलोक १९४: सतिगुर सूरमे बाहिआ बानु (परा करेजे छेकु)',
      en: 'Salok 194: Struck by the Heroic Satguru’s Arrow of Love',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਤਿਗੁਰ ਸੂਰਮੇ ਬਾਹਿਆ ਬਾਨੁ ਜੁ ਏਕੁ ॥',
      'ਲਾਗਤ ਹੀ ਭੁਇ ਗਿਰਿ ਪਰਿਆ ਪਰਾ ਕਰੇਜੇ ਛੇਕੁ ॥੧੯੪॥',
    ],
    moolDevanagari: [
      'कबीर सतिगुर सूरमे बाहिआ बानु जु एकु ॥',
      'लागत ही भुइ गिरि परिआ परा करेजे छेकु ॥१९४॥',
    ],
    moolRoman: [
      'Kabīr satgur sūrme bāhiā bān ju ek.',
      'Lāgat hī bhui gir pariā parā kareje chhek. ||194||',
    ],
    shabdarth: [
      {
        word: 'ਸਤਿਗੁਰ ਸੂਰਮੇ / सतिगुर सूरमे',
        meaning: {
          pb: 'ਸੂਰਵੀਰ ਸਤਿਗੁਰੂ ਜੀ',
          hi: 'सूरवीर सतगुरु देव',
          en: 'The Heroic True Guru',
        },
      },
      {
        word: 'ਭੁਇ ਗਿਰਿ ਪਰਿਆ / भुइ गिरि परिआ',
        meaning: {
          pb: 'ਧਰਤੀ ਤੇ ਡਿੱਗ ਪਿਆ (ਅਹੰਕਾਰ ਮਿਟ ਗਿਆ)',
          hi: 'धरती पर आ गिरा (अहंकार मिट गया)',
          en: 'Fell humble to the ground (ego shattered)',
        },
      },
      {
        word: 'ਕਰੇਜੇ ਛੇਕੁ / करेजे छेकु',
        meaning: {
          pb: 'ਹਿਰਦਾ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਨਾਲ ਬਿੰਧਿਆ ਗਿਆ',
          hi: 'हृदय प्रभु-प्रेम से बिंध गया',
          en: 'Heart pierced with Divine Love',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪੂਰੇ ਸੂਰਮੇ ਸਤਿਗੁਰੂ ਨੇ ਜਿਸ ਨੂੰ ਆਪਣੇ ਉਪਦੇਸ਼ ਦਾ ਇੱਕ ਬਾਣ ਮਾਰਿਆ, ਉਸ ਦੇ ਲੱਗਦਿਆਂ ਹੀ ਉਹ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਧਰਤੀ ਤੇ ਡਿੱਗ ਪਿਆ ਅਤੇ ਉਸ ਦੇ ਹਿਰਦੇ ਵਿਚ ਪ੍ਰੇਮ ਦਾ ਛੇਕ ਪੈ ਗਿਆ॥ ੧੯੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-सूरवीर सतगुरु ने उपदेश का जो एक बाण चलाया, उसके लगते ही साधक का अहंकार मिट गया और उसका हृदय प्रभु-प्रेम से बिंध गया॥ १९४॥',
      en: 'Satguru Kabir Saheb proclaims: The Heroic True Guru struck with a single arrow of instruction; the moment it struck, pride fell humble to the ground and the heart was pierced with Divine Love.',
    },
    chintan: {
      pb: 'ਸੂਰਵੀਰ ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਹਉਮੈ ਨੂੰ ਮਾਰ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਅਮਰ ਪ੍ਰੇਮ ਦਾ ਪ੍ਰਕਾਸ਼ ਕਰਦਾ ਹੈ।',
      hi: 'वीर सतगुरु का उपदेश अहंकार को नष्ट कर हृदय में अमूर्त प्रेम का प्रकाश करता है।',
      en: 'The Guru’s mighty Word destroys pride and kindles eternal love within the heart.',
    },
    acharana: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਦੇ ਬਾਣ ਅੱਗੇ ਨਿਮਰ ਹੋ ਕੇ ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰੋ।',
      hi: 'गुरु-शब्द के बाण के समक्ष नम्र होकर अहंकार का त्याग करें।',
      en: 'Bow humbly before the Guru’s Word and relinquish all self-centered pride.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਵਿੰਨ੍ਹਿਆ ਹਿਰਦਾ ਸੂਰਮੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰ ਦਿਓ।',
      hi: 'अपना प्रेम-बिंधा हृदय सूरवीर सतगुरु के चरणों में अर्पित करें।',
      en: 'Offer your love-pierced heart at the feet of the Heroic True Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 195 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-195',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੫: ਨਿਰਮਲ ਬੂੰਦ ਅਕਾਸ ਕੀ (ਹੋਇ ਗਈ ਭਠ ਛਾਰ)',
      hi: 'सलोक १९५: निरमल बूंद अकास की (होइ गई भठ छार)',
      en: 'Salok 195: Without Holy Company, the Soul Turns to Ashes in Evil Company',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਿਰਮਲ ਬੂੰਦ ਅਕਾਸ ਕੀ ਪਰਿ ਗਈ ਭੂਮਿ ਬਿਕਾਰ ॥',
      'ਬਿਨੁ ਸੰਗਤਿ ਇਉ ਮਾਂਨਈ ਹੋਇ ਗਈ ਭਠ ਛਾਰ ॥੧੯੫॥',
    ],
    moolDevanagari: [
      'कबीर निरमल बूंद अकास की परि गई भूमि बिकार ॥',
      'बिनु संगति इउ मांनई होइ गई भठ छार ॥१९५॥',
    ],
    moolRoman: [
      'Kabīr nirmal būnd akās kī par gaī bhūm bikār.',
      'Bin sangat iu mānnī hoi gaī bhaṭh chhār. ||195||',
    ],
    shabdarth: [
      {
        word: 'ਨਿਰਮਲ ਬੂੰਦ / निरमल बूंद',
        meaning: {
          pb: 'ਅਕਾਸ਼ ਤੋਂ ਡਿੱਗੀ ਸਾਫ਼ ਬੂੰਦ (ਆਤਮਾ/ਜੀਵ)',
          hi: 'आकाश की निर्मल बूंद (पवित्र आत्मा)',
          en: 'Pure raindrop from heaven (pure soul)',
        },
      },
      {
        word: 'ਭੂਮਿ ਬਿਕਾਰ / भूमि बिकार',
        meaning: {
          pb: 'ਵਿਕਾਰੀ/ਗੰਦੀ ਧਰਤੀ',
          hi: 'विकारी/गंदी भूमि',
          en: 'Impure / contaminated soil',
        },
      },
      {
        word: 'ਭਠ ਛਾਰ / भठ छार',
        meaning: {
          pb: 'ਭੱਠੀ ਦੀ ਸੁਆਹ',
          hi: 'भट्टी की राख',
          en: 'Ashes of a hot furnace',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅਕਾਸ਼ ਤੋਂ ਨਿਰਮਲ ਬੂੰਦ ਡਿੱਗ ਕੇ ਗੰਦੀ ਧਰਤੀ ਵਿੱਚ ਪੈ ਕੇ ਬੇਕਾਰ ਹੋ ਗਈ। ਸੰਗਤ ਤੋਂ ਬਿਨਾਂ ਮਨੁੱਖੀ ਆਤਮਾ ਕੁਸੰਗਤ ਦੀ ਭੱਠੀ ਵਿੱਚ ਪੈ ਕੇ ਸੜ ਕੇ ਸੁਆਹ ਹੋ ਜਾਂਦੀ ਹੈ ਤੇ ਜਨਮ ਬਿਰਥਾ ਜਾਂਦਾ ਹੈ॥ ੧੯੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे आकाश की निर्मल बूंद दूषित भूमि पर गिरकर नष्ट हो जाती है, वैसे ही सत्संगत के बिना जीव-आत्मा कुसंगति की भट्टी में जलकर राख हो जाती है॥ १९५॥',
      en: 'Satguru Kabir Saheb proclaims: Like a pure raindrop falling from the sky onto contaminated soil, a human soul without holy company falls into the furnace of bad association and turns to ashes.',
    },
    chintan: {
      pb: 'ਸਤਿਸੰਗਤ ਤੋਂ ਬਿਨਾਂ ਨਿਰਮਲ ਆਤਮਾ ਵੀ ਕੁਸੰਗਤ ਦੇ ਪ੍ਰਭੂ ਨਾਲ ਬਿਨਸ ਜਾਂਦੀ ਹੈ।',
      hi: 'सत्संगत के बिना पवित्र आत्मा भी कुसंगति के प्रभाव से नष्ट हो जाती है।',
      en: 'Without holy fellowship, even a pure soul degrades in the burning furnace of evil company.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤ ਦੀ ਭੱਠੀ ਤੋਂ ਬਚ ਕੇ ਸਦਾ ਸਾਧ-ਸੰਗਤ ਦੀ ਸਰਨ ਲਵੋ।',
      hi: 'कुसंगति से बचकर सदा साध-संगत की शरण में रहें।',
      en: 'Shun toxic company and take refuge continuously in holy congregation.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਨਿਰਮਲ ਆਤਮਾ ਨੂੰ ਕੁਸੰਗਤ ਤੋਂ ਬਚਾ ਕੇ ਸੰਤ ਸੰਗਤ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी आत्मा को कुसंग से बचाकर संत-संगत में समर्पित करें।',
      en: 'Safeguard your pure soul and dedicate it to the sanctuary of holy association.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭၄ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 196 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-196',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੬: ਲੀਨੀ ਭੂਮਿ ਮਿਲਾਇ (ਨਾ ਨਿਰਵਾਰੀ ਜਾਇ)',
      hi: 'सलोक १९६: लीनी भूमि मिलाइ (ना निरवारी जाइ)',
      en: 'Salok 196: Merged with the Guru’s Wisdom, No Illusion Can Separate You',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਨਿਰਮਲ ਬੂੰਦ ਅਕਾਸ ਕੀ ਲੀਨੀ ਭੂਮਿ ਮਿਲਾਇ ॥',
      'ਅਨਿਕ ਸਿਆਨੇ ਪਚਿ ਗਏ ਨਾ ਨਿਰਵਾਰੀ ਜਾਇ ॥੧੯੬॥',
    ],
    moolDevanagari: [
      'कबीर निरमल बूंद अकास की लीनी भूमि मिलाइ ॥',
      'अनिक सिआने पचि गए ना निरवारी जाइ ॥१९६॥',
    ],
    moolRoman: [
      'Kabīr nirmal būnd akās kī līnī bhūm milāe.',
      'Anik siāne pach gae nā nirvārī jāe. ||196||',
    ],
    shabdarth: [
      {
        word: 'ਲੀਨੀ ਭੂਮਿ ਮਿਲਾਇ / लीनी भूमि मिलाइ',
        meaning: {
          pb: 'ਧਰਤੀ ਨੇ ਆਪਣੇ ਵਿੱਚ ਮਿਲਾ ਲਈ (ਸ਼ੁਭ ਹਿਰਦੇ ਵਿੱਚ ਸਮਾ ਗਈ)',
          hi: 'धरती में समा गई (पवित्र हृदय में रमी)',
          en: 'Absorbed into the earth (merged into a pure heart)',
        },
      },
      {
        word: 'ਨਾ ਨਿਰਵਾਰੀ ਜਾਇ / ना निरवारी जाइ',
        meaning: {
          pb: 'ਵੱਖ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ',
          hi: 'पृथक नहीं की जा सकती',
          en: 'Cannot be separated or extracted',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅਕਾਸ਼ ਤੋਂ ਡਿੱਗੀ ਸਾਫ਼ ਬੂੰਦ ਜਦੋਂ ਧਰਤੀ ਵਿੱਚ ਮਿਲ ਜਾਵੇ, ਤਾਂ ਅਨੇਕਾਂ ਸਿਆਣੇ ਵੀ ਉਸ ਨੂੰ ਵੱਖ ਨਹੀਂ ਕਰ ਸਕਦੇ। ਇਵੇਂ ਹੀ ਜਦੋਂ ਗੁਰੂ ਉਪਦੇਸ਼ ਸ਼ੁੱਧ ਹਿਰਦੇ ਵਿੱਚ ਸਮਾ ਜਾਵੇ, ਤਾਂ ਕੋਈ ਵੀ ਵਿਕਾਰ ਉਸ ਨੂੰ ਪ੍ਰਭੂ ਤੋਂ ਵੱਖ ਨਹੀਂ ਕਰ ਸਕਦਾ॥ ੧੯੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जब आकाश की निर्मल बूंद शुद्ध धरती में मिल जाती है, तो कोई उसे अलग नहीं कर सकता। वैसे ही जब गुरु-उपदेश पवित्र हृदय में रम जाता है, तो कोई विकार उसे प्रभु से अलग नहीं कर सकता॥ १९६॥',
      en: 'Satguru Kabir Saheb proclaims: When a pure raindrop merges into the soil, even clever experts cannot separate it. Likewise, when the Guru’s wisdom absorbs into a clean heart, no worldly illusion can ever separate that soul from God.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਨਾਲ ਇੱਕਮਿੱਕ ਹੋਈ ਆਤਮਾ ਨੂੰ ਕੋਈ ਵੀ ਸੰਸਾਰਿਕ ਵਿਕਾਰ ਡੋਲਾ ਨਹੀਂ ਸਕਦਾ।',
      hi: 'गुरु-उपदेश में लीन आत्मा को कोई भी सांसारिक विकार डिगा नहीं सकता।',
      en: 'A soul completely merged in the Guru’s instruction remains unshakeable and inseparable from the Supreme.',
    },
    acharana: {
      pb: 'ਗੁਰੂ ਸ਼ਬਦ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਅਜਿਹਾ ਵਸਾਓ ਕਿ ਕੋਈ ਬੁਰਾਈ ਇਸ ਨੂੰ ਜੁਦਾ ਨਾ ਕਰ ਸਕੇ।',
      hi: 'गुरु-शब्द को हृदय में ऐसे धारण करें कि कोई बुराई उसे अलग न कर सके।',
      en: 'Absorb the Divine Word so deeply into your heart that no evil can ever detach you.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੱਤ-ਬ੍ਰਿਤੀ ਗੁਰੂ ਸ਼ਬਦ ਵਿੱਚ ਅਭੇਦ ਕਰਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी चेतना गुरु-शब्द में अभिन्न करके प्रभु चरणों में समर्पित करें।',
      en: 'Surrender your spirit irrevocably into the Guru’s eternal teachings.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭၄ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 197 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-197',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੭: ਹਜ ਕਾਬੇ ਹਉ ਜਾਇ ਥਾ (ਆਗੈ ਮਿਲਿਆ ਖੁਦਾਇ)',
      hi: 'सलोक १९७: हज काबे हउ जाइ था (आगै मिलिआ खुदाइ)',
      en: 'Salok 197: On the Way to Mecca, God Met Me and Challenged My Bias',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਜ ਕਾਬੇ ਹਉ ਜਾਇ ਥਾ ਆਗੈ ਮਿਲਿਆ ਖੁਦਾਇ ॥',
      'ਸਾਂਈ ਮੁਝ ਸਿਉ ਲਰਿ ਪਰਿਆ ਤੁਝੈ ਕਿਨ੍ਹਿ ਫੁਰਮਾਈ ਗਾਇ ॥੧੯੭॥',
    ],
    moolDevanagari: [
      'कबीर हज काबे हउ जाइ था आगै मिलिआ खुदाइ ॥',
      'सांई मुझ सिउ लरि परिआ तुझै किन्हि फुरमाई गाइ ॥१९७॥',
    ],
    moolRoman: [
      'Kabīr haj kābe hau jāe thā āgai miliā khudāe.',
      'Sāṅī mujh siu lar pariā tujhai kinh furmāī gāe. ||197||',
    ],
    shabdarth: [
      {
        word: 'ਆਗੈ ਮਿਲਿਆ ਖੁਦਾਇ / आगै मिलिआ खुदाइ',
        meaning: {
          pb: 'ਰਾਹ ਵਿੱਚ ਹੀ ਖੁਦਾ ਮਿਲ ਪਿਆ',
          hi: 'मार्ग में ही ईश्वर मिल गए',
          en: 'Met God right along the way',
        },
      },
      {
        word: 'ਤੁਝੈ ਕਿਨ੍ਹਿ ਫੁਰਮਾਈ ਗਾਇ / तुझै किन्हि फुरमाई गाइ',
        meaning: {
          pb: 'ਤੈਨੂੰ ਇਹ ਕਿਸ ਨੇ ਦੱਸਿਆ ਕਿ ਮੈਂ ਕੇਵਲ ਇੱਕ ਥਾਂ (ਕਾਬੇ) ਹੀ ਹਾਂ?',
          hi: 'तुझे किसने कहा कि मैं केवल एक स्थान पर हूं?',
          en: 'Who told you I reside in only one specific location?',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇੱਕ ਵਾਰ ਮੈਂ ਕਾਬੇ ਦਾ ਹੱਜ ਕਰਨ ਜਾ ਰਿਹਾ ਸੀ, ਅੱਗੇ ਰਾਹ ਵਿੱਚ ਹੀ ਖੁਦਾ ਮਿਲ ਪਿਆ। ਪ੍ਰਭੂ ਮੇਰੇ ਨਾਲ ਪ੍ਰੇਮ ਵਿੱਚ ਲੜ ਪਿਆ ਕਿ ਤੈਨੂੰ ਕਿਸ ਨੇ ਕਿਹਾ ਹੈ ਕਿ ਮੈਂ ਕੇਵਲ ਕਾਬੇ ਵਿੱਚ ਹਾਂ, ਜਦਕਿ ਮੈਂ ਸਾਰੀ ਧਰਤੀ ਵਿੱਚ ਸਰਬ-ਵਿਆਪਕ ਹਾਂ!॥ ੧੯੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैं काबा का हज करने जा रहा था, मार्ग में ही ईश्वर मिल गए। प्रभु ने मुझसे कहा कि तुझे किसने कहा कि मैं केवल काबा में हूं? मैं तो सर्वत्र व्याप्त हूं!॥ १९७॥',
      en: 'Satguru Kabir Saheb proclaims: I was going on pilgrimage to Mecca, but I met God along the way! The Lord lovingly challenged me: "Who told you I am confined to a building, when I pervade the entire universe?"',
    },
    chintan: {
      pb: 'ਪਰਮਾਤਮਾ ਕੇਵਲ ਇੱਕ ਖਾਸ ਇਮਾਰਤ ਜਾਂ ਧਰਤੀ ਤੇ ਨਹੀਂ, ਸਗੋਂ ਸਾਰੀ ਕਾਇਨਾਤ ਵਿੱਚ ਹਾਜ਼ਰ-ਨਾਜ਼ਰ ਹੈ।',
      hi: 'ईश्वर किसी एक विशेष स्थान में नहीं, बल्कि संपूर्ण सृष्टि में सर्व-व्यापी है।',
      en: 'God is not limited to a single geographic shrine, but is vibrant and present everywhere.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਸੀਮਤ ਧਾਰਮਿਕ ਥਾਵਾਂ ਦੇ ਭਟਕਣ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਹਰ ਥਾਂ ਪ੍ਰਭੂ ਦੀ ਹਜ਼ੂਰੀ ਮਹਿਸੂਸ ਕਰੋ।',
      hi: 'स्थानगत संकीर्णता से ऊपर उठकर सर्वत्र प्रभु की उपस्थिति का अनुभव करें।',
      en: 'Rise above spatial bias; behold the Divine Presence in every corner of creation.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਨੂੰ ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਭੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी बुद्धि को सर्व-व्यापी प्रभु के चरणों में समर्पित करें।',
      en: 'Surrender your understanding to the Infinite Lord who fills all time and space.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 198 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-198',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੮: ਹਜ ਕਾਬੈ ਹੋਇ ਹੋਇ ਗਇਆ (ਸਾਂਈ ਮੁਝ ਮਹਿ ਕਿਆ ਖਤਾ)',
      hi: 'सलोक १९८: हज काबै होइ होइ गइआ (सांई मुझ महि किआ खता)',
      en: 'Salok 198: Outer Pilgrimages Cannot Make God Speak to You',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਜ ਕਾਬੈ ਹੋਇ ਹੋਇ ਗਇਆ ਕੇਤੀ ਬਾਰ ਕਬੀਰ ॥',
      'ਸਾਂਈ ਮੁਝ ਮਹਿ ਕਿਆ ਖਤਾ ਮੁਖਹੁ ਨ ਬੋਲੈ ਪੀਰ ॥੧੯੮॥',
    ],
    moolDevanagari: [
      'कबीर हज काबै होइ होइ गइआ केती बार कबीर ॥',
      'सांई मुझ महि किआ खता मुखहु न बोलै पीर ॥१९८॥',
    ],
    moolRoman: [
      'Kabīr haj kābai hoi hoi gaiā ketī bār Kabīr.',
      'Sāṅī mujh mah kiā khatā mukhahu na bolai pīr. ||198||',
    ],
    shabdarth: [
      {
        word: 'ਕੇਤੀ ਬਾਰ / केती बार',
        meaning: {
          pb: 'ਕਈ ਵਾਰ',
          hi: 'अनेक बार',
          en: 'Countless times',
        },
      },
      {
        word: 'ਕਿਆ ਖਤਾ / किआ खता',
        meaning: {
          pb: 'ਕਿਹੜੀ ਭੁੱਲ/ਗੁਨਾਹ',
          hi: 'क्या भूल/अपराध',
          en: 'What fault / mistake',
        },
      },
      {
        word: 'ਮੁਖਹੁ ਨ ਬੋਲੈ ਪੀਰ / मुखहु न बोलै पीर',
        meaning: {
          pb: 'ਪ੍ਰਭੂ-ਪੀਰ ਮੇਰੇ ਨਾਲ ਮੂੰਹੋਂ ਨਹੀਂ ਬੋਲਦਾ (ਬਾਹਰੀ ਯਾਤਰਾ ਨਾਲ ਪ੍ਰਭੂ ਪ੍ਰਗਟ ਨਹੀਂ ਹੁੰਦਾ)',
          hi: 'प्रभु मुख से बात नहीं करते (बाहरी यात्रा से प्रभु नहीं मिलते)',
          en: 'The Lord Master does not speak outwardly through physical pilgrimages',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੈਂ ਕਈ ਵਾਰ ਕਾਬੇ ਹੱਜ ਕਰਨ ਗਿਆ ਹਾਂ, ਪਰ ਹੇ ਮਾਲਕ! ਮੇਰੇ ਵਿੱਚ ਕੀ ਗੁਨਾਹ ਹੈ ਕਿ ਤੂੰ ਬਾਹਰੀ ਯਾਤਰਾਵਾਂ ਨਾਲ ਮੂੰਹੋਂ ਨਹੀਂ ਬੋਲਦਾ? ਭਾਵ ਬਾਹਰੀ ਤੀਰਥ ਯਾਤਰਾ ਨਾਲ ਪ੍ਰਭੂ ਪ੍ਰਾਪਤੀ ਨਹੀਂ ਹੁੰਦੀ॥ ੧੯੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैं कई बार काबा हज करने गया, पर हे प्रभु! मुझमें क्या खोट है कि तू बाहरी यात्राओं से प्रसन्न होकर बात नहीं करता? अर्थात् केवल बाहरी तीर्थों से ईश्वर नहीं मिलते॥ १९८॥',
      en: 'Satguru Kabir Saheb proclaims: I went on pilgrimage to Mecca time and again, yet O Lord, why do You not speak to me through physical visits? External pilgrimages alone cannot reveal the Divine.',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਤੀਰਥ ਯਾਤਰਾਵਾਂ ਨਾਲ ਪ੍ਰਭੂ ਪ੍ਰਸੰਨ ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਅੰਤਰਮੁਖੀ ਹਿਰਦੇ ਦੀ ਪ੍ਰੀਤ ਨਾਲ ਮਿਲਦਾ ਹੈ।',
      hi: 'बाहरी तीर्थयात्राओं से नहीं, बल्कि आंतरिक प्रेम और भक्ति से ईश्वर रीझते हैं।',
      en: 'God is not won over by external journeys, but reveals Himself to inner love and sincere devotion.',
    },
    acharana: {
      pb: 'ਬਾਹਰਮੁਖੀ ਤੀਰਥਾਂ ਦੇ ਭਟਕਣ ਛੱਡ ਕੇ ਹਿਰਦੇ ਦੇ ਅੰਦਰ ਨਾਮ ਦਾ ਤੀਰਥ ਬਣਾਓ।',
      hi: 'बाहरी तीर्थों की भटकन छोड़कर अपने हृदय में नाम-तीर्थ बनाएं।',
      en: 'Cease wandering to outer places; establish the sacred shrine of the Name within.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬਿਰਹਾ-ਕੁਲ ਆਤਮਾ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਸਾਂਈ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी आत्मा को अंतर्मुखी कर प्रभु चरणों में समर्पित करें।',
      en: 'Turn your seeking inward and offer your soul at the feet of the Indwelling Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 199 (Ang 1374)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-199',
    category: 'salok',
    ang: 1374,
    title: {
      pb: 'ਸਲੋਕ ੧੯੯: ਜੀਅ ਜੁ ਮਾਰਹਿ ਜੋਰੁ ਕਰਿ (ਦਫਤਰੁ ਦਈ ਜਬ ਕਾਢਿ ਹੈ)',
      hi: 'सलोक १९९: जीअ जु मारहि जोरु करि (दफतरु दई जब काढि है)',
      en: 'Salok 199: Cruelty to Creatures Cannot Be Called Halal; Divine Account Awaits',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੀਅ ਜੁ ਮਾਰਹਿ ਜੋਰੁ ਕਰਿ ਕਹਤੇ ਹਹਿ ਜੁ ਹਲਾਲੁ ॥',
      'ਦਫਤਰੁ ਦਈ ਜਬ ਕਾਢਿ ਹੈ ਹੋਇਗਾ ਕਉਨੁ ਹਵਾਲੁ ॥੧੯੯॥',
    ],
    moolDevanagari: [
      'कबीर जीअ जु मारहि जोरु करि कहते हहि जु हलालु ॥',
      'दफतरु दई जब काढि है होइगा कउनु हवालु ॥१९९॥',
    ],
    moolRoman: [
      'Kabīr jīa ju mārah jor kar kahte hah ju halāl.',
      'Daftar daī jab kāḍh hai hoigā kaun havāl. ||199||',
    ],
    shabdarth: [
      {
        word: 'ਜੀਅ ਜੋਰੁ ਕਰਿ ਮਾਰਹਿ / जीअ जोरु करि मारहि',
        meaning: {
          pb: 'ਜੀਵਾਂ ਨੂੰ ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ ਨਾਲ ਮਾਰਦੇ ਹਨ',
          hi: 'जीवों को बलपूर्वक मारते हैं',
          en: 'Forcefully slaughter living beings',
        },
      },
      {
        word: 'ਦਫਤਰੁ ਦਈ / दफतरु दई',
        meaning: {
          pb: 'ਪਰਮਾਤਮਾ (ਦਈ) ਦਾ ਦਫ਼ਤਰ/ਦਰਬਾਰ',
          hi: 'परमात्मा का दरबार/कार्यालय',
          en: 'The Register / Court of the Divine Lord',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੋ ਲੋਕ ਜੀਵਾਂ ਨੂੰ ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ ਨਾਲ ਮਾਰਦੇ ਹਨ ਅਤੇ ਉਸ ਨੂੰ ਹਲਾਲ (ਜਾਇਜ਼) ਕਹਿੰਦੇ ਹਨ, ਪਰ ਜਦੋਂ ਪਰਮਾਤਮਾ ਉਨ੍ਹਾਂ ਦਾ ਲੇਖਾ ਕੱਢੇਗਾ, ਉਦੋਂ ਉਨ੍ਹਾਂ ਦਾ ਕੀ ਹਾਲ ਹੋਵੇਗਾ?॥ ੧੯੯॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जो लोग जीवों को बलपूर्वक मारते हैं और उसे धर्मानुकूल (हलाल) कहते हैं, जब परमात्मा उनके कर्मों का लेखा निकालेगा, तब उनका क्या हाल होगा?॥ १९९॥',
      en: 'Satguru Kabir Saheb proclaims: Those who forcefully slaughter living beings and call it lawful—what terrible fate awaits them when the Almighty opens their record of deeds?',
    },
    chintan: {
      pb: 'ਜੀਵ-ਹੱਤਿਆ ਕਰਕੇ ਉਸ ਨੂੰ ਧਰਮ ਦਾ ਨਾਂ ਦੇਣਾ ਘੋਰ ਅਗਿਆਨਤਾ ਤੇ ਪਾਪ ਹੈ।',
      hi: 'जीव-हिंसा करके उसे धर्म का नाम देना घोर अज्ञान और महापाप है।',
      en: 'Killing living creatures and calling it holy is a grave illusion and severe sin.',
    },
    acharana: {
      pb: 'ਸਭ ਜੀਵਾਂ ਵਿੱਚ ਵਾਹਿਗੁਰੂ ਦੀ ਜੋਤਿ ਵੇਖ ਕੇ ਦਇਆ ਤੇ ਅਹਿੰਸਾ ਦਾ ਮਾਰਗ ਅਪਣਾਓ।',
      hi: 'सभी जीवों में ईश्वर की ज्योति देखकर दया और करुणा का मार्ग अपनाएं।',
      en: 'Recognize the Divine Light in all beings and walk the path of mercy and non-violence.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਲਾਕੀ ਛੱਡ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਿਆਂ ਅੱਗੇ ਨਿਮਰਤਾ ਨਾਲ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'अपनी चालाकी छोड़कर परमात्मा के न्याय के समक्ष नम्र होकर समर्पित हों।',
      en: 'Abandon all false justifications and bow humbly before Divine Justice.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੪ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 200 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-200',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੦: ਜੋਰੁ ਕੀਆ ਸੋ ਜੁਲਮੁ ਹੈ (ਲੇਇ ਜਬਾਬੁ ਖੁਦਾਇ)',
      hi: 'सलोक २००: जोरु कीआ सो जुलमु है (लेइ जबाबु खुदाइ)',
      en: 'Salok 200: Oppression Brings Punishing Retribution in the Court of God',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੋਰੁ ਕੀਆ ਸੋ ਜੁਲਮੁ ਹੈ ਲੇਇ ਜਬਾਬੁ ਖੁਦਾਇ ॥',
      'ਦਫਤਰਿ ਲੇਖਾ ਨੀਕਸੈ ਮਾਰ ਮੁਹੈ ਮੁਹਿ ਖਾਇ ॥੨੦੦॥',
    ],
    moolDevanagari: [
      'कबीर जोरु कीआ सो जुलमु है लेइ जबाबु खुदाइ ॥',
      'दफतरि लेखा नीकसै मार मुहै मुहि खाइ ॥२००॥',
    ],
    moolRoman: [
      'Kabīr jor kīā so julam hai lei jabāb khudāe.',
      'Daftar lekhā nīksai mār muhai muh khāe. ||200||',
    ],
    shabdarth: [
      {
        word: 'ਜੋਰੁ ਕੀਆ / जोरु कीआ',
        meaning: {
          pb: 'ਜ਼ੋਰ-ਜ਼ਬਰਦਸਤੀ ਤੇ ਧੱਕਾ ਕਰਨਾ',
          hi: 'अत्याचार व ज़बरदस्ती करना',
          en: 'Committing oppression or violence',
        },
      },
      {
        word: 'ਮਾਰ ਮੁਹੈ ਮੁਹਿ ਖਾਇ / मार मुहै मुहि खाइ',
        meaning: {
          pb: 'ਮੂੰਹ ਤੇ ਮਾਰ ਖਾਵੇਗਾ',
          hi: 'मुंह पर मार खाएगा',
          en: 'Will be struck severely on the face in disgrace',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਜੋ ਧੱਕਾ ਕਰਨਾ ਹੈ ਉਹ ਜ਼ੁਲਮ-ਪਾਪ ਹੈ, ਇਸ ਦਾ ਜਵਾਬ ਪਰਮਾਤਮਾ ਮੰਗੇਗਾ। ਜਦ ਦਰਗਾਹ ਵਿਚ ਹਿਸਾਬ ਨਿਕਲੇਗਾ ਤਾਂ ਜ਼ੁਲਮ ਕਰਨ ਵਾਲਾ ਪੁਰਸ਼ ਮੂੰਹੋਂ-ਮੂੰਹ ਮਾਰ ਖਾਏਗਾ॥ ੨੦੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-दूसरों पर ज़बरदस्ती करना घोर अत्याचार है, जिसका हिसाब ईश्वर स्वयं मांगेगा। जब परमात्मा के दरबार में कर्मों का लेखा निकलेगा, तब अत्याचारी मुंह पर मार खाएगा॥ २००॥',
      en: 'Satguru Kabir Saheb proclaims: Oppression and coercion are terrible sins for which God Himself demands an answer. When the account is settled in the Divine Court, the oppressor suffers striking blows upon his face.',
    },
    chintan: {
      pb: 'ਜ਼ੁਲਮ ਤੇ ਅਨਿਆਏ ਦਾ ਫਲ ਦਰਗਾਹ ਵਿੱਚ ਮਾਰ ਤੇ ਅਪਮਾਨ ਦੇ ਰੂਪ ਵਿੱਚ ਮਿਲਦਾ ਹੈ।',
      hi: 'अत्याचार का परिणाम ईश्वर के दरबार में भयानक दंड और अपमान के रूप में मिलता है।',
      en: 'Acts of tyranny inevitably bring disgrace and severe retribution in the Court of Divine Justice.',
    },
    acharana: {
      pb: 'ਕਿਸੇ ਵੀ ਜੀਵ ਉੱਤੇ ਜ਼ੁਲਮ ਨਾ ਕਰੋ; ਸਦਾ ਨਿਆਂ ਤੇ ਦਇਆ ਦੇ ਮਾਰਗ ਉੱਤੇ ਚੱਲੋ।',
      hi: 'किसी भी जीव पर अत्याचार न करें; न्याय और करुणा के मार्ग पर चलें।',
      en: 'Never oppress or harm any living being; walk faithfully on the path of compassion and justice.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਵਿੱਚ ਦਇਆ ਧਾਰਨ ਕਰਕੇ ਪਰਮਾਤਮਾ ਦੀ ਰਜ਼ਾ ਅੱਗੇ ਸਮਰਪਿਤ ਹੋਵੋ।',
      hi: 'अपने हृदय में करुणा धारण कर ईश्वर की रज़ा में समर्पित हों।',
      en: 'Cultivate compassion in your heart and surrender to the Supreme Will.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 201 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-201',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੧: ਲੇਖਾ ਦੇਨਾ ਸੁਹੇਲਾ (ਜਉ ਦਿਲ ਸੂਚੀ ਹੋਇ)',
      hi: 'सलोक २०१: लेखा देना सुहेला (जउ दिल सूची होइ)',
      en: 'Salok 201: Rendering Accounts Is Easy when the Heart Is Pure',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਲੇਖਾ ਦੇਨਾ ਸੁਹੇਲਾ ਜਉ ਦਿਲ ਸੂਚੀ ਹੋਇ ॥',
      'ਉਸੁ ਸਾਚੇ ਦੀਬਾਨ ਮਹਿ ਪਲਾ ਨ ਪਕਰੈ ਕੋਇ ॥੨੦੧॥',
    ],
    moolDevanagari: [
      'कबीर लेखा देना सुहेला जउ दिल सूची होइ ॥',
      'उसु साचे दीबान महि पला न पकरै कोइ ॥२०१॥',
    ],
    moolRoman: [
      'Kabīr lekhā denā suhelā jau dil sūchī hoi.',
      'Us sāche dībān mah palā na pakrai koi. ||201||',
    ],
    shabdarth: [
      {
        word: 'ਦਿਲ ਸੂਚੀ ਹੋਇ / दिल सूची होइ',
        meaning: {
          pb: 'ਹਿਰਦਾ ਪਵਿੱਤਰ ਤੇ ਸ਼ੁੱਧ ਹੋਵੇ',
          hi: 'हृदय पवित्र और निष्कपट हो',
          en: 'Heart is pure and truthful',
        },
      },
      {
        word: 'ਪਲਾ ਨ ਪਕਰੈ / पला न पकरै',
        meaning: {
          pb: 'ਕੋਈ ਪੱਲਾ ਨਹੀਂ ਫੜਦਾ (ਕੋਈ ਪੁੱਛ-ਗਿੱਛ ਨਹੀਂ ਹੁੰਦੀ)',
          hi: 'कोई पकड़ नहीं सकता (कोई बाधा नहीं होती)',
          en: 'No one restrains or detains the soul',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇਕਰ ਮਨੁੱਖ ਦਾ ਹਿਰਦਾ ਪਵਿੱਤਰ ਹੋਵੇ, ਤਾਂ ਉਸ ਨੂੰ ਲੇਖਾ ਦੇਣਾ ਸੁਖਾਲਾ ਹੁੰਦਾ ਹੈ ਅਤੇ ਉਸ ਸੱਚੇ ਦਰਬਾਰ ਵਿਚ ਉਸ ਦਾ ਕੋਈ ਪੱਲਾ ਨਹੀਂ ਫੜਦਾ (ਉਸ ਨੂੰ ਕੋਈ ਰੋਕ-ਟੋਕ ਨਹੀਂ ਹੁੰਦੀ)॥ ੨੦੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यदि मनुष्य का हृदय निष्कपट और पवित्र है, तो ईश्वर को कर्मों का लेखा देना अत्यंत सरल है। उस सच्चे दरबार में कोई उसका आंचल नहीं पकड़ सकता॥ २०१॥',
      en: 'Satguru Kabir Saheb proclaims: Settling accounts is smooth and easy when the heart is pure! In that True Court of Judgment, no one detains or questions such a righteous soul.',
    },
    chintan: {
      pb: 'ਹਿਰਦੇ ਦੀ ਪਵਿੱਤਰਤਾ ਤੇ ਸੱਚਾਈ ਜੀਵ ਨੂੰ ਦਰਗਾਹੀ ਦੰਡ ਤੋਂ ਪੂਰਨ ਮੁਕਤ ਕਰਦੀ ਹੈ।',
      hi: 'हृदय की पवित्रता और सत्यता जीव को ईश्वर के दरबार में भय-मुक्त करती है।',
      en: 'A clean and truthful heart grants complete freedom and peace before the Lord’s Judgment Seat.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਮਨ ਵਿੱਚੋਂ ਛਲ-ਕਪਟ ਤਿਆਗ ਕੇ ਹਿਰਦੇ ਨੂੰ ਸਦਾ ਪਵਿੱਤਰ ਤੇ ਸੁੱਚਾ ਰੱਖੋ।',
      hi: 'अपने मन से छल-कपट त्यागकर हृदय को सदा पवित्र रखें।',
      en: 'Purify your heart of all deceit; live with absolute honesty and transparency.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਪਵਿੱਤਰ ਹਿਰਦਾ ਸੱਚੇ ਪ੍ਰਭੂ ਦੀ ਦਰਗਾਹ ਵਿੱਚ ਨਿਮਰਤਾ ਨਾਲ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपना निष्कपट हृदय सच्चे प्रभु के पावन चरणों में अर्पित करें।',
      en: 'Offer a clean, transparent soul at the lotus feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 202 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-202',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੨: ਧਰਤੀ ਅਰੁ ਆਕਾਸ ਮਹਿ (ਦੁਇ ਤੂੰ ਬਰੀ ਅਬਧ)',
      hi: 'सलोक २०२: धरती अरु आकास महि (दुइ तू बरी अबध)',
      en: 'Salok 202: Duality Ensnares Scholars, Ascetics, and Siddhas Alike',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਧਰਤੀ ਅਰੁ ਆਕਾਸ ਮਹਿ ਦੁਇ ਤੂੰ ਬਰੀ ਅਬਧ ॥',
      'ਖਟ ਦਰਸਨ ਸੰਸੇ ਪਰੇ ਅਰੁ ਚਉਰਾਸੀਹ ਸਿਧ ॥੨੦੨॥',
    ],
    moolDevanagari: [
      'कबीर धरती अरु आकास महि दुइ तू बरी अबध ॥',
      'खट दरसन संसे परे अरु चउरासीह सिध ॥२०२॥',
    ],
    moolRoman: [
      'Kabīr dhartī ar ākās mah dui tūūṅ barī abadh.',
      'Khaṭ darsan sanse pare ar chaurāsīh sidh. ||202||',
    ],
    shabdarth: [
      {
        word: 'ਦੁਇ / दुइ',
        meaning: {
          pb: 'ਦਵੈਤ, ਦੂਜਾ-ਭਾਵ, ਮਾਇਆ ਦੀ ਦੁਬਿਧਾ',
          hi: 'द्वैत, माया का भ्रम',
          en: 'Duality / spiritual illusion of secondness',
        },
      },
      {
        word: 'ਬਰੀ ਅਬਧ / बरी अबध',
        meaning: {
          pb: 'ਬੜੀ ਬਲਵਾਨ ਤੇ ਨਾਸ਼-ਰਹਿਤ ਜਾਪਦੀ ਹੈ',
          hi: 'अत्यंत बलवती व अविनाशी प्रतीत होती है',
          en: 'Exceedingly powerful and hard to destroy',
        },
      },
      {
        word: 'ਖਟ ਦਰਸਨ ਸੰਸੇ ਪਰੇ / खट दरसन संसे परे',
        meaning: {
          pb: 'ਛੇ ਦਰਸ਼ਨਾਂ ਦੇ ਧਾਰਨੀ ਤੇ ਚੌਰਾਸੀ ਸਿੱਧ ਵੀ ਭਰਮ ਚ ਹਨ',
          hi: 'छह दर्शनों के साधक और चौरासी सिद्ध भी संशय में हैं',
          en: 'Six religious orders and 84 Siddhas fall into doubt',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਧਰਤੀ ਅਤੇ ਅਕਾਸ਼ (ਸਾਰੀ ਸ੍ਰਿਸ਼ਟੀ) ਵਿਚ ਹੇ ਦਵੈਤ/ਮਾਇਆ! ਤੂੰ ਬੜੀ ਬਲਵਾਨ ਹੈਂ। ਛੇ ਧਾਰਮਿਕ ਭੇਖਾਂ ਵਾਲੇ ਅਤੇ ਚੌਰਾਸੀ ਸਿੱਧ ਵੀ ਇਸ ਸੰਸੈ ਵਿਚ ਪਏ ਹੋਏ ਹਨ ਕਿ ਤੈਥੋਂ ਕਿਸ ਤਰ੍ਹਾਂ ਬਚਿਆ ਜਾਵੇ॥ ੨੦੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-धरती और आकाश के बीच हे द्वैत (माया)! तू अत्यंत बलवती है। छह दर्शनों के विद्वान और चौरासी सिद्ध भी इस संशय में पड़े हैं कि तुझसे कैसे बचा जाए॥ २०२॥',
      en: 'Satguru Kabir Saheb proclaims: O Duality (Illusion), between earth and sky, you reign exceedingly powerful! Scholars of the six philosophical schools and the 84 accomplished Siddhas all fall into doubt before you.',
    },
    chintan: {
      pb: 'ਦਵੈਤ ਭਾਵ ਦੀ ਮਾਇਆ ਅਤਿ ਬਲਵਾਨ ਹੈ, ਇਸ ਤੋਂ ਬਚਣ ਦਾ ਇੱਕੋ ਇੱਕ ਰਸਤਾ ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਹੈ।',
      hi: 'द्वैत की माया अत्यंत बलवती है, जिससे केवल गुरु-कृपा ही बचा सकती है।',
      en: 'Duality is a formidable cosmic illusion; only Guru’s Grace and Nam can save the soul from its doubts.',
    },
    acharana: {
      pb: 'ਦੂਜਾ-ਭਾਵ ਤੇ ਦਵੈਤ ਛੱਡ ਕੇ ਇੱਕੋ ਅਕਾਲ ਪੁਰਖ ਦੇ ਨਾਮ ਦਾ ਆਧਾਰ ਲਵੋ।',
      hi: 'द्वैत का भाव छोड़कर केवल एक अकाल पुरुष के नाम का ध्यान करें।',
      en: 'Rise above spiritual duality and ground your soul in the undivided Absolute Lord.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਦਾ ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਨਿਰੰਕਾਰ ਪ੍ਰਭੂ ਵਿੱਚ ਅਭੇਦ ਹੋਵੋ।',
      hi: 'बौद्धिक अहंकार त्यागकर निरंकार प्रभु में अभिन्न हों।',
      en: 'Surrender all intellectual pride and merge into the One Supreme Being.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 203 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-203',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੩: ਮੇਰਾ ਮੁਝ ਮਹਿ ਕਿਛੁ ਨਹੀ (ਜੋ ਕਿਛੁ ਹੈ ਸੋ ਤੇਰਾ)',
      hi: 'सलोक २०३: मेरा मुझ महि किछु नही (जो किछु है सो तेरा)',
      en: 'Salok 203: Nothing Is Mine; Surrendering Yours Back to You Costs Me Nothing',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮੇਰਾ ਮੁਝ ਮਹਿ ਕਿਛੁ ਨਹੀ ਜੋ ਕਿਛੁ ਹੈ ਸੋ ਤੇਰਾ ॥',
      'ਤੇਰਾ ਤੁਝ ਕਉ ਸਉਪਤੇ ਕਿਆ ਲਾਗੈ ਮੇਰਾ ॥੨੦੩॥',
    ],
    moolDevanagari: [
      'कबीर मेरा मुझ महि किछु नही जो किछु है सो तेरा ॥',
      'तेरा तुझ कउ सउपते किआ लागै मेरा ॥२०३॥',
    ],
    moolRoman: [
      'Kabīr merā mujh mah kichh nahī jo kichh hai so terā.',
      'Terā tujh kau saupte kiā lāgai merā. ||203||',
    ],
    shabdarth: [
      {
        word: 'ਮੇਰਾ ਮੁਝ ਮਹਿ ਕਿਛੁ ਨਹੀ / मेरा मुझ महि किछु नही',
        meaning: {
          pb: 'ਮੇਰੇ ਅੰਦਰ ਮੇਰਾ ਆਪਣਾ ਕੁਝ ਵੀ ਨਹੀਂ ਹੈ',
          hi: 'मेरे भीतर मेरा अपना कुछ भी नहीं है',
          en: 'Nothing within me belongs to me',
        },
      },
      {
        word: 'ਤੇਰਾ ਤੁਝ ਕਉ ਸਉਪਤੇ / तेरा तुझ कउ सउपते',
        meaning: {
          pb: 'ਤੇਰੀ ਦਿੱਤੀ ਵਸਤੂ ਤੈਨੂੰ ਹੀ ਅਰਪਣ ਕਰਦਿਆਂ',
          hi: 'आपकी दी वस्तु आपको ही अर्पित करते हुए',
          en: 'Surrendering back to You what is already Yours',
        },
      },
      {
        word: 'ਕਿਆ ਲਾਗੈ ਮੇਰਾ / किआ लागै मेरा',
        meaning: {
          pb: 'ਮੇਰਾ ਕੀ ਲੱਗਦਾ ਹੈ? (ਕੋਈ ਮੁਲ ਨਹੀਂ ਲੱਗਦਾ)',
          hi: 'मेरा क्या घटता है?',
          en: 'What does it cost me? / How can I claim ownership?',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਪ੍ਰਭੂ ! ਮੇਰੇ ਵਿਚ ਮੇਰਾ (ਤਨ, ਮਨ ਅਥਵਾ ਧਨ) ਕੁਝ ਨਹੀਂ ਹੈ, ਜੋ ਕੁਝ ਵੀ ਹੈ ਉਹ ਸਭ ਤੇਰਾ ਹੀ ਦਿੱਤਾ ਹੋਇਆ ਹੈ। ਤੇਰੀ ਦਿੱਤੀ ਵਸਤੂ ਤੈਨੂੰ ਹੀ ਸੌਂਪਣ ਲੱਗਿਆਂ ਮੇਰਾ ਕੀ ਲੱਗਦਾ ਹੈ? (ਕੁਝ ਵੀ ਨਹੀਂ!)॥ ੨੦੩॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे प्रभु! मुझमें मेरा अपना कुछ भी नहीं है, जो कुछ भी है वह सब आपका ही है। आपका दिया हुआ आपको ही सौंपते हुए मेरा क्या जाता है?॥ २०३॥',
      en: 'Satguru Kabir Saheb proclaims: O Lord, nothing in me belongs to me; whatever exists is entirely Yours. Surrendering Yours back to You, what does it cost me?',
    },
    chintan: {
      pb: 'ਜੀਵ ਦਾ ਤਨ, ਮਨ, ਧਨ ਸਭ ਪ੍ਰਭੂ ਦੀ ਬਖ਼ਸ਼ਿਸ਼ ਹੈ; ਮੈਂ-ਮੇਰੀ ਤਿਆਗ ਕੇ ਨਿਸ਼ਕਾਮ ਹੋਣਾ ਹੀ ਸਰਵੋਤਮ ਸਮਰਪਣ ਹੈ।',
      hi: 'तन, मन और धन सब ईश्वर की देन है; "मैं-मेरी" का त्याग ही परम समर्पण है।',
      en: 'Body, mind, and wealth are all God’s gifts; relinquishing "I, me, mine" is absolute surrender.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਹਉਮੈ ਤੇ ਮਲਕੀਅਤ ਦਾ ਮਾਣ ਛੱਡ ਕੇ ਹਰ ਵਸਤੂ ਪ੍ਰਭੂ ਦੀ ਮਾਨੋ।',
      hi: 'स्वामित्व का अहंकार छोड़कर हर वस्तु प्रभु की ही समझें।',
      en: 'Relinquish ego and possessiveness; view every breath and gift as belonging solely to God.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਤਨ, ਮਨ, ਆਤਮਾ ਤੇ ਸਭ ਵਸਤਾਂ ਵਾਹਿਗੁਰੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰ ਦਿਓ।',
      hi: 'अपना तन, मन, आत्मा और सर्वस्व वाहेगुरु के चरणों में समर्पित करें।',
      en: 'Surrender your body, mind, spirit, and possessions completely at the lotus feet of the Almighty.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 204 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-204',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੪: ਤੂੰ ਤੂੰ ਕਰਤਾ ਤੂ ਹੂਆ (ਜਤ ਦੇਖਉ ਤਤ ਤੂ)',
      hi: 'सलोक २०४: तू तू करता तू हूआ (जत देखउ तत तू)',
      en: 'Salok 204: Chanting "You, You", I Have Become You; Ego Dissolved Everywhere',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਤੂੰ ਤੂੰ ਕਰਤਾ ਤੂ ਹੂਆ ਮੁਝ ਮਹਿ ਰਹਾ ਨ ਹੂੰ ॥',
      'ਜਬ ਆਪਾ ਪਰ ਕਾ ਮਿਟਿ ਗਇਆ ਜਤ ਦੇਖਉ ਤਤ ਤੂ ॥੨੦੪॥',
    ],
    moolDevanagari: [
      'कबीर तू तू करता तू हूआ मुझ महि रहा न हूं ॥',
      'जब आपा पर का मिटि गइआ जत देखउ तत तू ॥२०४॥',
    ],
    moolRoman: [
      'Kabīr tūūṅ tūūṅ kartā tū hūā mujh mah rahā na hūūṅ.',
      'Jab āpā par kā miṭ gaiā jat dekhau tat tū. ||204||',
    ],
    shabdarth: [
      {
        word: 'ਤੂੰ ਤੂੰ ਕਰਤਾ / तू तू करता',
        meaning: {
          pb: 'ਤੇਰਾ ਹੀ ਸਿਮਰਨ/ਜਾਪ ਕਰਦਿਆਂ',
          hi: 'आपका ही निरंतर स्मरण करते हुए',
          en: 'Repeating Your Holy Name continually',
        },
      },
      {
        word: 'ਰਹਾ ਨ ਹੂੰ / रहा न हूं',
        meaning: {
          pb: 'ਮੇਰੇ ਅੰਦਰ ਹਉਮੈ (ਮੈਂ) ਨਾ ਰਹੀ',
          hi: 'मेरे भीतर अहंकार ("मैं") नहीं रहा',
          en: 'My ego ("I-ness") completely ceased to exist',
        },
      },
      {
        word: 'ਜਤ ਦੇਖਉ ਤਤ ਤੂ / जत देखउ तत तू',
        meaning: {
          pb: 'ਜਿੱਥੇ ਵੀ ਵੇਖਦਾ ਹਾਂ, ਉੱਥੇ ਤੂੰ ਹੀ ਤੂੰ ਹੈਂ',
          hi: 'जहां भी देखता हूं, वहां आप ही आप हैं',
          en: 'Wherever I look, there You alone are',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਹੇ ਪ੍ਰਮਾਤਮਾ! ਮੈਂ ਤੂੰ ਤੂੰ (ਤੇਰਾ ਸਿਮਰਨ) ਕਰਦਾ ਤੇਰਾ ਰੂਪ ਹੀ ਹੋ ਗਿਆ ਹਾਂ, ਹੁਣ ਮੇਰੇ ਵਿਚ ਮੇਰਾ ਆਪਾ (ਮੈਂ) ਨਹੀਂ ਰਿਹਾ। ਜਦ ਮੇਰਾ ਆਪਣੇ-ਪਰਾਏ ਵਾਲਾ ਦੈਤ ਭਾਵ ਮਿਟ ਗਿਆ, ਤਾਂ ਫਿਰ ਜਿਥੇ ਵੀ ਵੇਖਦਾ ਹਾਂ, ਉਥੇ ਤੂੰ ਹੀ ਤੂੰ ਹੈਂ॥ ੨੦੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे ईश्वर! आपका निरंतर "तू-तू" स्मरण करते हुए मैं आपका ही रूप हो गया हूं, अब मेरे भीतर "मैं" का अस्तित्व नहीं रहा। जब अपना और पराया का भेद मिट गया, तो जहां देखता हूं वहां तू ही तू दिखाई देता है॥ २०४॥',
      en: 'Satguru Kabir Saheb proclaims: O Lord, repeating "You, You", I have merged into You, and no "I" remains within me! When the distinction between self and other dissolved, wherever I look, I see only You.',
    },
    chintan: {
      pb: 'ਨਿਰੰਤਰ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਹਉਮੈ ਮਿਟ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸਾਰੇ ਸੰਸਾਰ ਵਿੱਚ ਵਾਹਿਗੁਰੂ ਦੀ ਜੋਤਿ ਪ੍ਰਗਟ ਹੁੰਦੀ ਹੈ।',
      hi: 'निरंतर नाम स्मरण से अहंकार मिटता है और सर्वत्र प्रभु का रूप ही दिखाई देता है।',
      en: 'Unceasing remembrance of God erases ego, revealing the Divine Light in every corner of creation.',
    },
    acharana: {
      pb: 'ਹੰਕਾਰ ਤੇ ਦੂਜਾ-ਭਾਵ ਤਿਆਗ ਕੇ ਸਦਾ ਤੂੰ ਹੀ ਤੂੰ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'अहंकार और भेद-भाव त्यागकर सदा "तू ही तू" का सुमिरन करें।',
      en: 'Erase all self-centered pride; constantly repeat the Divine Name until the illusion of "I" dissolves.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਸਤੀ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਲੀਨ ਕਰਕੇ ਅਭੇਦ ਹੋ ਜਾਵੋ।',
      hi: 'अपना अस्तित्व प्रभु के प्रकाश में लीन कर अभिन्न हों।',
      en: 'Dissolve your individual self into the Infinite Light of the Almighty.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 205 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-205',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੫: ਬਿਕਾਰਹ ਚਿਤਵਤੇ (ਚਾਲੇ ਊਠਿ ਨਿਰਾਸ)',
      hi: 'सलोक २०५: बिकारह चितवते (चाले ऊठि निरास)',
      en: 'Salok 205: Thinking Evil and Boasting Falsely; Departing Disappointed',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬਿਕਾਰਹ ਚਿਤਵਤੇ ਝੂਠੇ ਕਰਤ ਗੁਮਾਨ ॥',
      'ਮਨੋਰਥ ਕੋਇ ਨ ਪੂਰਿਓ ਚਾਲੇ ਊਠਿ ਨਿਰਾਸ ॥੨੦੫॥',
    ],
    moolDevanagari: [
      'कबीर बिकारह चितवते झूठे करत गुमान ॥',
      'मनोरथ कोइ न पूरिओ चाले ऊठि निरास ॥२०५॥',
    ],
    moolRoman: [
      'Kabīr bikārah chitvate jhūṭhe karat gumān.',
      'Manorath koi na pūrio chāle ūṭh nirās. ||205||',
    ],
    shabdarth: [
      {
        word: 'ਬਿਕਾਰਹ ਚਿਤਵਤੇ / बिकारह चितवते',
        meaning: {
          pb: 'ਬੁਰੇ ਕਰਮਾਂ/ਵਿਕਾਰਾਂ ਬਾਰੇ ਹੀ ਸੋਚਦੇ ਰਹਿੰਦੇ ਹਨ',
          hi: 'विकारों और कुकर्मों के विषय में सोचते हैं',
          en: 'Constantly contemplating evil desires',
        },
      },
      {
        word: 'ਝੂਠੇ ਕਰਤ ਗੁਮਾਨ / झूठे करत गुमान',
        meaning: {
          pb: 'ਝੂਠੀ ਮਾਇਆ ਦਾ ਹੰਕਾਰ ਕਰਦੇ ਹਨ',
          hi: 'झूठी माया का अभिमान करते हैं',
          en: 'Taking pride in false, temporary wealth',
        },
      },
      {
        word: 'ਚਾਲੇ ਊਠਿ ਨਿਰਾਸ / चाले ऊठि निरास',
        meaning: {
          pb: 'ਅੰਤ ਨਿਰਾਸ਼ ਹੋ ਕੇ ਚਲੇ ਜਾਂਦੇ ਹਨ',
          hi: 'अंत में निराश होकर संसार से चले जाते हैं',
          en: 'Depart from this world utterly disappointed',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਬੁਰੇ ਕੰਮਾਂ ਨੂੰ ਕਰਨ ਵਾਸਤੇ ਸੋਚਦੇ ਰਹਿੰਦੇ ਹਨ ਅਤੇ ਝੂਠੇ ਪਦਾਰਥਾਂ ਦੀ ਪ੍ਰਾਪਤੀ ਦਾ ਹੰਕਾਰ ਕਰਦੇ ਹਨ। ਇਸ ਤਰ੍ਹਾਂ ਕੋਈ ਮਨੋਰਥ ਵੀ ਪੂਰਾ ਨਾ ਹੋਇਆ, ਨਾ ਪ੍ਰਮਾਤਮਾ ਮਿਲਿਆ ਨਾ ਝੂਠੇ ਪਦਾਰਥ, ਅਤੇ ਅੰਤ ਨਿਰਾਸ਼ ਹੋ ਕੇ ਸੰਸਾਰ ਤੋਂ ਤੁਰ ਪਏ॥ ੨੦੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य जीवन भर विकारों की योजनाएं बनाता है और झूठी संपत्ति पर गर्व करता है। परंतु कोई मनोरथ पूरा नहीं होता और अंत में निराश होकर हाथ मलते हुए चला जाता है॥ २०५॥',
      en: 'Satguru Kabir Saheb proclaims: Man spends his life planning evil deeds and boasting of false possessions. Not a single true goal is achieved, and at last he departs from this world empty-handed and disappointed.',
    },
    chintan: {
      pb: 'ਵਿਕਾਰਾਂ ਦੀ ਚਿੰਤਾ ਤੇ ਝੂਠੀ ਮਾਇਆ ਦਾ ਗੁਮਾਨ ਆਤਮਾ ਨੂੰ ਕੇਵਲ ਨਿਰਾਸ਼ਾ ਹੀ ਦਿੰਦਾ ਹੈ।',
      hi: 'विकारों की योजना और झूठा अभिमान आत्मा को केवल निराशा और पश्चाताप देता है।',
      en: 'Contemplating sinful pleasures and boasting of false material gains yields only spiritual ruin and disappointment.',
    },
    acharana: {
      pb: 'ਬੁਰੇ ਕਰਮਾਂ ਦੀ ਸੋਚ ਤੇ ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਿਰਮਲ ਗੁਰਮਤਿ ਗਿਆਨ ਧਾਰਨ ਕਰੋ।',
      hi: 'कुकर्मों के विचार और अभिमान त्यागकर पवित्र गुरु-ज्ञान धारण करें।',
      en: 'Eschew sinful desires and false arrogance; cultivate holy wisdom and righteous living.',
    },
    samarpan: {
      pb: 'ਆਪਣੀਆਂ ਸੰਸਾਰਿਕ ਕਾਮਨਾਵਾਂ ਤਿਆਗ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      hi: 'अपनी सांसारिक कामनाएं त्यागकर परमात्मा के नाम में लीन हों।',
      en: 'Surrender all worldly cravings and rest your hopes solely on the Lord’s Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 206 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-206',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੬: ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਜੋ ਕਰੈ (ਸੋ ਸੁਖੀਆ ਸੰਸਾਰਿ)',
      hi: 'सलोक २०६: हरि का सिमरनु जो करै (सो सुखीआ संसारि)',
      en: 'Salok 206: Whoever Remembers God Is Peaceful; Protected by the Creator',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਹਰਿ ਕਾ ਸਿਮਰਨੁ ਜੋ ਕਰੈ ਸੋ ਸੁਖੀਆ ਸੰਸਾਰਿ ॥',
      'ਇਤ ਉਤ ਕਤਹਿ ਨ ਡੋਲਈ ਜਿਸੁ ਰਾਖੈ ਸਿਰਜਨਹਾਰੁ ॥੨੦੬॥',
    ],
    moolDevanagari: [
      'कबीर हरि का सिमरनु जो करै सो सुखीआ संसारि ॥',
      'इत उत कतहि न डोलई जिसु राखै सिरजनहारु ॥२०६॥',
    ],
    moolRoman: [
      'Kabīr Har kā simran jo karai so sukhīā sansār.',
      'It ut katah na ḍolaī jis rākhai Sirjanhār. ||206||',
    ],
    shabdarth: [
      {
        word: 'ਸੋ ਸੁਖੀਆ ਸੰਸਾਰਿ / सो सुखीआ संसारि',
        meaning: {
          pb: 'ਉਹੀ ਇਸ ਜਗਤ ਵਿੱਚ ਸੁਖੀ ਹੈ',
          hi: 'वही इस संसार में सुखी है',
          en: 'He alone is happy and peaceful in this world',
        },
      },
      {
        word: 'ਇਤ ਉਤ ਕਤਹਿ ਨ ਡੋਲਈ / इत उत कतहि न डोलई',
        meaning: {
          pb: 'ਏਧਰ-ਓਧਰ ਕਿਤੇ ਨਹੀਂ ਭਟਕਦਾ',
          hi: 'इधर-उधर कहीं नहीं भटकता',
          en: 'Does not waver or wander anywhere in anxiety',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਜਿਹੜਾ ਪੁਰਸ਼ ਹਰੀ ਦਾ ਸਿਮਰਨ ਕਰਦਾ ਹੈ, ਉਹੀ ਸੰਸਾਰ ਵਿਚ ਸੁਖੀ ਹੈ। ਜਿਸ ਨੂੰ ਪ੍ਰਮਾਤਮਾ ਸਿਰਜਨਹਾਰ ਆਪ ਰੱਖਦਾ ਹੈ, ਉਹ ਏਧਰ ਓਧਰ ਕਿਤੇ ਨਹੀਂ ਭਟਕਦਾ, ਉਹ ਆਪਣੇ ਨਿਸਚੇ ਉੱਤੇ ਦ੍ਰਿੜ੍ਹ ਰਹਿੰਦਾ ਹੈ॥ ੨੦੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जो मनुष्य हरि का स्मरण करता है, वही इस संसार में सच्चा सुखी है। जिसे सृजनहार प्रभु स्वयं रक्षा प्रदान करते हैं, वह कभी किसी दिशा में नहीं भटकता॥ २०६॥',
      en: 'Satguru Kabir Saheb proclaims: Whoever meditates on the Lord is truly happy in this world! Protected by the Creator, he never wavers or wanders anywhere.',
    },
    chintan: {
      pb: 'ਹਰਿ-ਸਿਮਰਨ ਹੀ ਜੀਵ ਨੂੰ ਸੱਚਾ ਸੁਖ, ਅਡੋਲਤਾ ਅਤੇ ਪ੍ਰਭੂ ਰੱਖਿਆ ਬਖ਼ਸ਼ਦਾ ਹੈ।',
      hi: 'हरि-सुमिरन ही जीव को परम सुख, स्थिरता और प्रभु की रक्षा प्रदान करता है।',
      en: 'Meditation on God bestows genuine peace, unshakeable stability, and Divine Protection.',
    },
    acharana: {
      pb: 'ਸਦਾ ਹਰੀ ਦੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ ਅਤੇ ਵਾਹਿਗੁਰੂ ਦੇ ਓਟ-ਆਸਰੇ ਵਿੱਚ ਦ੍ਰਿੜ੍ਹ ਰਹੋ।',
      hi: 'सदा हरि-नाम का सुमिरन करें और प्रभु के सहारे पर अचल रहें।',
      en: 'Chant the Holy Name continually; remain firm under the shelter of the Almighty.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੰਤਾ ਪ੍ਰਭੂ ਸਿਰਜਨਹਾਰ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਨਿਸਚਿੰਤ ਹੋਵੋ।',
      hi: 'अपनी चिंता सृजनहार प्रभु के चरणों में समर्पित कर निश्चिंत हों।',
      en: 'Surrender all your worries at the feet of the Creator and abide in fearless tranquility.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 207 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-207',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੭: ਘਾਣੀ ਪੀੜਤੇ ਸਤਿਗੁਰ ਲੀਏ ਛਡਾਇ (ਪਰਾ ਪੂਰਬਲੀ ਭਾਵਨੀ)',
      hi: 'सलोक २०७: घाणी पीड़ते सतिगुर लीए छडाइ (परा पूरबली भावनी)',
      en: 'Salok 207: Saved by the Satguru from the Press of Evil; Past Devotion Awakened',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਘਾਣੀ ਪੀੜਤੇ ਸਤਿਗੁਰ ਲੀਏ ਛਡਾਇ ॥',
      'ਪਰਾ ਪੂਰਬਲੀ ਭਾਵਨੀ ਪਰਗਟੁ ਹੋਈ ਆਇ ॥੨੦੭॥',
    ],
    moolDevanagari: [
      'कबीर घाणी पीड़ते सतिगुर लीए छडाइ ॥',
      'परा पूरबली भावनी परगटु होई आइ ॥२०७॥',
    ],
    moolRoman: [
      'Kabīr ghāṇī pīṛte satgur līe chhaḍāe.',
      'Parā pūrbalī bhāvnī pargaṭ hoī āe. ||207||',
    ],
    shabdarth: [
      {
        word: 'ਘਾਣੀ ਪੀੜਤੇ / घाणी पीड़ते',
        meaning: {
          pb: 'ਵਿਕਾਰਾਂ/ਬੁਰਿਆਈਆਂ ਦੀ ਘਾਣੀ ਚ ਪੀੜੇ ਜਾ ਰਹਿਆਂ ਨੂੰ',
          hi: 'विकारों के कोल्हू में पिसे जा रहे जीव को',
          en: 'Being crushed in the oil-press of sins and vices',
        },
      },
      {
        word: 'ਪਰਾ ਪੂਰਬਲੀ ਭਾਵਨੀ / परा पूरबली भावनी',
        meaning: {
          pb: 'ਪੂਰਬਲੇ ਜਨਮਾਂ ਦੀ ਸ਼ਰਧਾ/ਪ੍ਰੀਤ',
          hi: 'पूर्व जन्मों की भक्ति-भावना/श्रद्धा',
          en: 'Devotional destiny / faith from past lives',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਕਬੀਰ ! ਬੁਰਿਆਈਆਂ ਦੀ ਘਾਣੀ ਵਿੱਚ ਪੀੜੇ ਜਾ ਰਹਿਆਂ ਨੂੰ ਸਾਨੂੰ ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਕੱਢ ਕੇ ਛੁਡਾ ਲਿਆ ਹੈ। ਪਿਛਲੇ ਜਨਮਾਂ ਦੀ ਸ਼ਰਧਾ-ਪ੍ਰੀਤ, ਜੋ ਹਿਰਦੇ ਵਿਚ ਸੀ, ਉਹ ਹੁਣ ਪ੍ਰਗਟ ਆ ਹੋਈ ਹੈ॥ ੨੦੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-विकारों के कोल्हू में पिसे जा रहे हमको सतगुरु ने कृपा करके बचा लिया। पूर्व जन्मों की भक्ति-श्रद्धा जो हृदय में सोई थी, वह अब प्रकट हो गई है॥ २०७॥',
      en: 'Satguru Kabir Saheb proclaims: As I was being crushed in the oil-press of vices, the True Guru saved me! The devotional destiny and faith accumulated from past lives has now manifested.',
    },
    chintan: {
      pb: 'ਗੁਰੂ ਦੀ ਮੇਹਰ ਨਾਲ ਜੀਵ ਪਾਪਾਂ ਦੀ ਘਾਣੀ ਤੋਂ ਬਚਦਾ ਹੈ ਅਤੇ ਪੂਰਬਲੇ ਭਾਗ ਜਾਗ ਪੈਂਦੇ ਹਨ।',
      hi: 'गुरु-कृपा से जीव विकारों के दुख से बचता है और पूर्व-जन्मों का पुण्य जागृत होता है।',
      en: 'By the Guru’s grace, the soul is rescued from the crush of sins, awakening latent spiritual fortune.',
    },
    acharana: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਉਪਕਾਰ ਨੂੰ ਯਾਦ ਰੱਖ ਕੇ ਸਦਾ ਗੁਰਮਤਿ ਮਾਰਗ ਤੇ ਦ੍ਰਿੜ੍ਹ ਹੋਵੋ।',
      hi: 'सतगुरु के उपकार को स्मरण कर सदा गुरु-मार्ग पर दृढ़ रहें।',
      en: 'Remember the Guru’s infinite grace and remain steadfastly devoted to the Path.',
    },
    samarpan: {
      pb: 'ਆਪਣਾ ਆਪ ਸਤਿਗੁਰੂ ਦੀ ਚਰਨ ਸਰਨ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपना आप सतगुरु की चरण-शरण में समर्पित करें।',
      en: 'Offer yourself completely in surrender at the lotus feet of the True Guru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 208 (Ang 1375)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-208',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੮: ਟਾਲੈ ਟੋਲੈ ਦਿਨੁ ਗਇਆ (ਕਾਲੁ ਪਹੂੰਚੋ ਆਇ)',
      hi: 'सलोक २०८: टालै टोलै दिनु गइआ (कालु पहूंचो आइ)',
      en: 'Salok 208: Delaying Devotion Accumulates Sins; Death Arrives Unexpectedly',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਟਾਲੈ ਟੋਲੈ ਦਿਨੁ ਗਇਆ ਬਿਆਜੁ ਬਢੰਤਉ ਜਾਇ ॥',
      'ਨਾ ਹਰਿ ਭਜਿਓ ਨ ਖਤੁ ਫਟਿਓ ਕਾਲੁ ਪਹੂੰਚੋ ਆਇ ॥੨੦੮॥',
    ],
    moolDevanagari: [
      'कबीर टालै टोलै दिनु गइआ बिआजु बढंतउ जाइ ॥',
      'ना हरि भजिओ न खतु फटिओ कालु पहूंचो आइ ॥२०८॥',
    ],
    moolRoman: [
      'Kabīr ṭālai ṭolai din gaiā biāj baḍhantau jāe.',
      'Nā Har bhajio na khat faṭio kāl pahūṅcho āe. ||208||',
    ],
    shabdarth: [
      {
        word: 'ਟਾਲੈ ਟੋਲੈ / टालै टोलै',
        meaning: {
          pb: 'ਟਾਲਮਟੋਲ ਕਰਦਿਆਂ, ਅੱਜ-ਕੱਲ੍ਹ ਕਰਦਿਆਂ',
          hi: 'टालमटोल करते हुए, आज-कल करते हुए',
          en: 'Procrastinating day after day',
        },
      },
      {
        word: 'ਬਿਆਜੁ ਬਢੰਤਉ ਜਾਇ / बिआजु बढंतउ जाइ',
        meaning: {
          pb: 'ਵਿਕਾਰਾਂ ਦਾ ਲੇਖਾ/ਬਿਆਜ ਵਧਦਾ ਗਿਆ',
          hi: 'पापों और विकारों का ऋण/ब्याज बढ़ता गया',
          en: 'Interest on karmic debts kept compounding',
        },
      },
      {
        word: 'ਖਤੁ ਫਟਿਓ / खतु फटिओ',
        meaning: {
          pb: 'ਕਰਮਾਂ ਦਾ ਲੇਖਾ/ਖਾਤਾ ਫਟਿਆ (ਮਿਟਿਆ)',
          hi: 'पापों का खाता नष्ट हुआ',
          en: 'Karmic ledger settled or wiped clean',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਟਾਲ-ਮਟੋਲ ਕਰਦਿਆਂ ਉਮਰ ਦਾ ਸਮਾਂ ਬੀਤ ਗਿਆ ਅਤੇ ਵਿਕਾਰਾਂ ਦੇ ਪਾਪਾਂ ਦਾ ਲੇਖਾ-ਬਿਆਜ ਵਧਦਾ ਚਲਾ ਗਿਆ। ਨਾ ਹਰੀ ਦਾ ਸਿਮਰਨ ਕੀਤਾ, ਨਾ ਪਾਪਾਂ ਦਾ ਖਾਤਾ ਮਿਟਿਆ, ਅਤੇ ਅੰਤ ਮੌਤ ਆ ਪਹੁੰਚੀ!॥ ੨੦੮॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-टालमटोल करते हुए जीवन बीत गया और पापों का ऋण/ब्याज बढ़ता चला गया। न तो हरि का भजन किया, न पापों का खाता कटा, और अंत में काल आ पहुंचा!॥ २०८॥',
      en: 'Satguru Kabir Saheb proclaims: Procrastinating day by day, life slipped away while the compounding interest of sins kept growing. Neither was God worshiped, nor was the karmic debt cleared, and Death arrived at the door!',
    },
    chintan: {
      pb: 'ਸਿਮਰਨ ਵਿੱਚ ਦੇਰੀ ਕਰਨ ਨਾਲ ਪਾਪਾਂ ਦਾ ਭਾਰ ਵਧਦਾ ਹੈ; ਮੌਤ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਭੂ ਨਾਲ ਸਾਂਝ ਪਾਉਣੀ ਜ਼ਰੂਰੀ ਹੈ।',
      hi: 'सुमिरन में टालमटोल करने से पापों का भार बढ़ता है; मृत्यु से पहले हरि-भक्ति करना आवश्यक है।',
      en: 'Delaying spiritual practice compounds karmic debts; one must turn to God before Death arrives.',
    },
    acharana: {
      pb: 'ਟਾਲਮਟੋਲ ਛੱਡ ਕੇ ਅੱਜ ਹੀ, ਹੁਣੇ ਹੀ ਵਾਹਿਗੁਰੂ ਦਾ ਸਿਮਰਨ ਆਰੰਭ ਕਰੋ।',
      hi: 'टालमटोल छोड़कर आज ही, अभी से प्रभु का नाम जपना आरंभ करें।',
      en: 'Stop procrastinating; start meditating on the Divine Name right now without delay.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬਾਕੀ ਉਮਰ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਪਾਪਾਂ ਦਾ ਲੇਖਾ ਮਿਟਾਓ।',
      hi: 'अपना शेष जीवन प्रभु भक्ति में समर्पित कर पापों का खाता समाप्त करें।',
      en: 'Offer the remainder of your life to God’s service and clear your karmic ledger.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 209 (Ang 1375) - Guru Arjan Dev Ji (Mahala 5)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-209',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੦੯: ਮਹਲਾ ੫ - ਕੂਕਰੁ ਭਉਕਨਾ ਕਰੰਗ ਪਿਛੈ ਉਠਿ ਧਾਇ',
      hi: 'सलोक २०९: महला ५ - कूकरु भउकना करंग पिछै उठि धाइ',
      en: 'Salok 209: Mahala 5 - Mind like a barking dog',
    },
    moolGurmukhi: [
      'ਮਹਲਾ ੫ ॥',
      'ਕਬੀਰ ਕੂਕਰੁ ਭਉਕਨਾ ਕਰੰਗ ਪਿਛੈ ਉਠਿ ਧਾਇ ॥',
      'ਕਰਮੀ ਸਤਿਗੁਰੁ ਪਾਇਆ ਜਿਨਿ ਹਉ ਲੀਆ ਛਡਾਇ ॥੨੦੯॥',
    ],
    moolDevanagari: [
      'महला ५ ॥',
      'कबीर कूकरु भउकना करंग पिछै उठि धाइ ॥',
      'करमी सतिगुरु पाइआ जिनि हउ लीआ छडाइ ॥२०९॥',
    ],
    moolRoman: [
      'Mahalaa 5 ||',
      'Kabeer kookar bhaukanaa karang pichhai uth dhai ||',
      'Karamee satigur paaiaa jin hau leeaa chhadai ||209||',
    ],
    shabdarth: [
      {
        word: 'ਕੂਕਰੁ / कूकरु',
        meaning: {
          pb: 'ਮਨ ਰੂਪੀ ਕੁੱਤਾ',
          hi: 'मन रूपी कुत्ता',
          en: 'Mind like a dog',
        },
      },
      {
        word: 'ਕਰੰਗ / करंग',
        meaning: {
          pb: 'ਝੂਠੇ ਵਿਕਾਰ/ਮੁਰਦਾਰ ਪਦਾਰਥ',
          hi: 'झूठे विकार व मुर्दार पदार्थ',
          en: 'Corpse or false worldly pleasures',
        },
      },
      {
        word: 'ਕਰਮੀ / करमी',
        meaning: {
          pb: 'ਪ੍ਰਭੂ ਦੀ ਮਿਹਰ/ਚੰਗੇ ਭਾਗਾਂ ਨਾਲ',
          hi: 'प्रभु की कृपा/उत्तम कर्मों से',
          en: 'By Divine grace or good karma',
        },
      },
      {
        word: 'ਹਉ / हउ',
        meaning: {
          pb: 'ਹਉਮੈ/ਅਹੰਕਾਰ',
          hi: 'अहंकार/हौमै',
          en: 'Ego and pride',
        },
      },
    ],
    bhavarth: {
      pb: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਮਨ ਭੌਂਕਣ ਵਾਲੇ ਕੁੱਤੇ ਸਮਾਨ ਹੈ, ਜਿਹੜਾ ਝੂਠੇ ਵਿਕਾਰਾਂ (ਮੁਰਦਾਰ ਪਦਾਰਥਾਂ) ਪਿੱਛੇ ਦੌੜਦਾ ਫਿਰਦਾ ਹੈ। ਪਰ ਪ੍ਰਭੂ ਦੀ ਮਿਹਰ ਨਾਲ ਜਦੋਂ ਸਤਿਗੁਰੂ ਜੀ ਮਿਲੇ, ਤਾਂ ਉਨ੍ਹਾਂ ਨੇ ਹਉਮੈ ਅਤੇ ਝੂਠੀਆਂ ਵਾਸਨਾਵਾਂ ਤੋਂ ਛੁਡਾ ਲਿਆ।॥ ੨੦੯॥',
      hi: 'गुरु अर्जन देव जी सतगुरु कबीर साहेब फरमाते हैं-यह मन भौंकने वाले कुत्ते के समान है, जो झूठे विकारों (मुर्दार पदार्थों) के पीछे दौड़ता रहता है। परंतु प्रभु कृपा से जब सतगुरु मिले, तो उन्होंने अहंकार और वासनाओं से मुक्त करा दिया।॥ २०९॥',
      en: 'Guru Arjan Dev Ji teaches: This mind is like a barking dog, running after false worldly corpses. But through divine grace, when the True Guru was found, He liberated me from ego and futile pursuits.',
    },
    chintan: {
      pb: 'ਮਨ ਦੀ ਭਟਕਣਾ ਤੋਂ ਮੁਕਤੀ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਅਤੇ ਪ੍ਰਭੂ ਮਿਹਰ ਨਾਲ ਹੀ ਸੰਭਵ ਹੈ।',
      hi: 'मन की भटकन से मुक्ति केवल सतगुरु के उपदेश और प्रभु कृपा से ही संभव है।',
      en: 'Freedom from the mind’s restless wandering is achieved solely through the True Guru’s wisdom and divine grace.',
    },
    acharana: {
      pb: 'ਝੂਠੇ ਵਿਕਾਰਾਂ ਪਿੱਛੇ ਦੌੜਨਾ ਛੱਡ ਕੇ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਚਿੱਤ ਲਗਾਓ।',
      hi: 'झूठे विकारों के पीछे दौड़ना छोड़कर गुरु के शब्द में ध्यान लगाएं।',
      en: 'Stop chasing worldly illusions and anchor your heart in the Guru’s Word.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹਉਮੈ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ ਨਿਰਅਹੰਕਾਰੀ ਹੋਵੋ।',
      hi: 'अपना अहंकार सतगुरु के चरणों में समर्पित कर निष्काम बनें।',
      en: 'Surrender your ego at the True Guru’s feet and become free from vanity.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke - Mahala 5)',
  },

  // ---------------------------------------------------------
  // SALOK 210 (Ang 1375) - Guru Arjan Dev Ji (Mahala 5)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-210',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੦: ਮਹਲਾ ੫ - ਧਰਤੀ ਸਾਧ ਕੀ ਤਸਕਰ ਬੈਸਹਿ ਗਾਹਿ',
      hi: 'सलोक २१०: महला ५ - धरती साध की तसकर बैसहि गाहि',
      en: 'Salok 210: Mahala 5 - Earth belongs to the Holy',
    },
    moolGurmukhi: [
      'ਮਹਲਾ ੫ ॥',
      'ਕਬੀਰ ਧਰਤੀ ਸਾਧ ਕੀ ਤਸਕਰ ਬੈਸਹਿ ਗਾਹਿ ॥',
      'ਧਰਤੀ ਭਾਰਿ ਨ ਬਿਆਪਈ ਓਨ ਕਉ ਲਾਹੂ ਲਾਹਿ ॥੨੧੦॥',
    ],
    moolDevanagari: [
      'महला ५ ॥',
      'कबीर धरती साध की तसकर बैसहि गाहि ॥',
      'धरती भारि न बिअपई ओन कउ लाहू लाहि ॥२१०॥',
    ],
    moolRoman: [
      'Mahalaa 5 ||',
      'Kabeer dharatee saadh kee tasakar baisahi gaahi ||',
      'Dharatee bhaar na biaapee on kau lahoo laahi ||210||',
    ],
    shabdarth: [
      {
        word: 'ਸਾਧ ਕੀ / साध की',
        meaning: {
          pb: 'ਸਾਧੂ ਮਹਾਤਮਾ ਦੀ (ਧਰਮਸਾਲ)',
          hi: 'साधु-संतों की',
          en: 'Of the Holy Saints',
        },
      },
      {
        word: 'ਤਸਕਰ / तसकर',
        meaning: {
          pb: 'ਮੰਦਕਰਮੀ/ਚੋਰ ਲੋਕ',
          hi: 'चोर व पापी पुरुष',
          en: 'Thieves and evil-doers',
        },
      },
      {
        word: 'ਗਾਹਿ / गाहि',
        meaning: {
          pb: 'ਮੱਲ ਕੇ ਬੈਠਦੇ ਹਨ',
          hi: 'अधिकार कर लेते हैं',
          en: 'Occupying or encroaching upon',
        },
      },
      {
        word: 'ਲਾਹੂ ਲਾਹਿ / लाहू लाहि',
        meaning: {
          pb: 'ਹੇਠਾਂ ਧਸਾ ਦੇਂਦੀ ਹੈ (ਨਾਸ਼ ਕਰਦੀ ਹੈ)',
          hi: 'नीचे धंसा देती है (नष्ट करती है)',
          en: 'Sinks them beneath or destroys them',
        },
      },
    ],
    bhavarth: {
      pb: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਧਰਤੀ ਸਾਧੂ-ਸੰਤਾਂ ਦੀ ਸੰਗਤ-ਧਰਮਸਾਲ ਹੈ, ਪਰ ਇਸ ਉੱਤੇ ਮੰਦਕਰਮੀ ਲੋਕ ਕਬਜ਼ਾ ਕਰ ਕੇ ਬੈਠ ਜਾਂਦੇ ਹਨ। ਧਰਤੀ ਉਨ੍ਹਾਂ ਦਾ ਭਾਰ ਸਹਿਣ ਨਹੀਂ ਕਰਦੀ, ਸਗੋਂ ਉਨ੍ਹਾਂ ਨੂੰ ਆਪਣੇ ਹੇਠਾਂ ਧਸਾ ਕੇ (ਨਾਸ਼ ਕਰਕੇ) ਛੱਡਦੀ ਹੈ।॥ ੨੧੦॥',
      hi: 'गुरु अर्जन देव जी सतगुरु कबीर साहेब फरमाते हैं-यह धरती साधु-संतों की धर्मशाल है, परंतु इस पर दुराचारी लोग अधिकार जमा लेते हैं। धरती उनका भार सहन नहीं करती, बल्कि उन्हें विनाश की गर्त में धकेल देती है।॥ २१०॥',
      en: 'Guru Arjan Dev Ji teaches: This earth is the sanctuary of Saints, yet thieves and evildoers try to encroach upon it. Earth bears no burden for the wicked; it ultimately swallows and destroys them.',
    },
    chintan: {
      pb: 'ਅਧਰਮੀ ਅਤੇ ਮੰਦਕਰਮੀ ਲੋਕ ਕਦੇ ਵੀ ਸਤਿਸੰਗਤ ਜਾਂ ਧਰਤੀ ਉੱਤੇ ਸਥਾਈ ਸੁਖ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕਰ ਸਕਦੇ।',
      hi: 'अधर्मी और दुराचारी लोग कभी भी सतसंगत या धरती पर स्थायी सुख प्राप्त नहीं कर सकते।',
      en: 'The wicked can never find lasting peace or refuge on earth or in the Holy Society.',
    },
    acharana: {
      pb: 'ਮੰਦਕਰਮ ਅਤੇ ਕਬਜ਼ੇ ਦੀ ਬਿਰਤੀ ਛੱਡ ਕੇ ਸਾਧ-ਸੰਗਤਿ ਵਿੱਚ ਨਿਮਰਤਾ ਨਾਲ ਰਹੋ।',
      hi: 'दुष्कर्म और अधिकार जमाने की मनोवृत्ति छोड़कर साध-संगति में विनम्रता से रहें।',
      en: 'Renounce bad actions and greed; dwell humbly in the company of the Holy.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਨੂੰ ਸਾਧੂ-ਜਨਾਂ ਦੀ ਚਰਨ ਧੂੜ ਬਣਾ ਕੇ ਸਮਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'अपने मन को साधु-संतों की चरण-धूलि बनाकर समर्पित कर दें।',
      en: 'Offer your heart as the humble dust beneath the feet of the Holy Saints.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke - Mahala 5)',
  },

  // ---------------------------------------------------------
  // SALOK 211 (Ang 1375) - Guru Arjan Dev Ji (Mahala 5)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-211',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੧: ਮਹਲਾ ੫ - ਚਾਵਲ ਕਾਰਨੇ ਤੁਖ ਕਉ ਮੁਹਲੀ ਲਾਇ',
      hi: 'सलोक २११: महला ५ - चावल कारने तुख कउ मुहली लाइ',
      en: 'Salok 211: Mahala 5 - Husk pounded for rice',
    },
    moolGurmukhi: [
      'ਮਹਲਾ ੫ ॥',
      'ਕਬੀਰ ਚਾਵਲ ਕਾਰਨੇ ਤੁਖ ਕਉ ਮੁਹਲੀ ਲਾਇ ॥',
      'ਸੰਗਿ ਕੁਸੰਗੀ ਬੈਸਤੇ ਤਬ ਪੂਛੈ ਧਰਮ ਰਾਇ ॥੨੧੧॥',
    ],
    moolDevanagari: [
      'महला ५ ॥',
      'कबीर चावल कारने तुख कउ मुहली लाइ ॥',
      'संगि कुसंगी बैसते तब पूछै धरम राइ ॥२११॥',
    ],
    moolRoman: [
      'Mahalaa 5 ||',
      'Kabeer chaaval kaarane tukh kau muhalee laai ||',
      'Sang kusangee baisate tab poochhai dharam rai ||211||',
    ],
    shabdarth: [
      {
        word: 'ਤੁਖ / तुख',
        meaning: {
          pb: 'ਚੌਲਾਂ ਦੀ ਛਿੱਲ/ਭੂਸੀ',
          hi: 'चावल का छिलका',
          en: 'Husk or chaff of rice',
        },
      },
      {
        word: 'ਮੁਹਲੀ / मुहली',
        meaning: {
          pb: 'ਮੋਹਲੇ ਦੀ ਸੱਟ',
          hi: 'मूसल की चोट',
          en: 'Pounding with a pestle',
        },
      },
      {
        word: 'ਕੁਸੰਗੀ / कुसंगी',
        meaning: {
          pb: 'ਮੰਦਕਰਮੀ/ਖੋਟੇ ਪੁਰਸ਼',
          hi: 'बुरी संगति वाले',
          en: 'Bad or wicked companions',
        },
      },
      {
        word: 'ਧਰਮ ਰਾਇ / धरम राइ',
        meaning: {
          pb: 'ਧਰਮਰਾਜ/ਨਿਆਂਕਾਰੀ ਪ੍ਰਭੂ',
          hi: 'धर्मराज',
          en: 'Righteous Judge of Karma',
        },
      },
    ],
    bhavarth: {
      pb: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਚੌਲਾਂ ਦਾ ਦਾਣਾ ਕੱਢਣ ਲਈ ਛਿੱਲੜ ਉੱਤੇ ਵੀ ਮੋਹਲੇ ਦੀ ਸੱਟ ਪੈਂਦੀ ਹੈ, ਤਿਵੇਂ ਹੀ ਜੋ ਲੋਕ ਖੋਟੇ ਵਿਕਾਰੀਆਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਬੈਠਦੇ ਹਨ, ਧਰਮਰਾਜ ਉਨ੍ਹਾਂ ਕੋਲੋਂ ਵੀ ਲੇਖਾ ਮੰਗਦਾ ਹੈ ਅਤੇ ਸਜ਼ਾ ਦਿੰਦਾ ਹੈ।॥ ੨੧੧॥',
      hi: 'गुरु अर्जन देव जी सतगुरु कबीर साहेब फरमाते हैं-जैसे चावल निकालने के लिए छिलके पर भी मूसल की मार पड़ती है, वैसे ही जो लोग बुरों की संगति में बैठते हैं, धर्मराज उनसे भी पापों का हिसाब मांगता है और दंड देता है।॥ २११॥',
      en: 'Guru Arjan Dev Ji teaches: Just as the husk gets pounded by the pestle to extract the rice grain, so do those who associate with evil companions face judgment and punishment from the Righteous Judge.',
    },
    chintan: {
      pb: 'ਕੁਸੰਗਤਿ ਵਿੱਚ ਬੈਠਣ ਨਾਲ ਨਿਰਦੋਸ਼ ਮਨੁੱਖ ਵੀ ਪਾਪਾਂ ਦਾ ਭਾਗੀਦਾਰ ਬਣ ਜਾਂਦਾ ਹੈ।',
      hi: 'कुसंगति में बैठने से निर्दोष मनुष्य भी पापों का भागीदार बन जाता है।',
      en: 'Even an innocent person becomes a partner in sin by keeping bad company.',
    },
    acharana: {
      pb: 'ਕੁਸੰਗਤਿ ਤੋਂ ਦੂਰ ਰਹੋ ਅਤੇ ਕੇਵਲ ਸਤਿਸੰਗਤ ਦਾ ਆਸਰਾ ਲਵੋ।',
      hi: 'कुसंगति से दूर रहें और केवल सतसंगति का आश्रय लें।',
      en: 'Shun bad company and seek refuge exclusively in the Holy Congregation.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਚਿੱਤ ਨੂੰ ਕੁਸੰਗਤ ਦੇ ਪ੍ਰਭਾਵ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਵਾਹਿਗੁਰੂ ਦੇ ਲੇਖੇ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने चित्त को कुसंगति के प्रभाव से मुक्त कर प्रभु के चरणों में समर्पित करें।',
      en: 'Free your heart from negative influences and dedicate your life to God’s righteous count.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke - Mahala 5)',
  },

  // ---------------------------------------------------------
  // SALOK 212 (Ang 1375) - Bhagat Trilochan Ji to Bhagat Namdev Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-212',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੨: ਨਾਮਾ ਮਾਇਆ ਮੋਹਿਆ ਕਹੈ ਤਿਲੋਚਨੁ ਮੀਤ',
      hi: 'सलोक २१२: नामा माइआ मोहिआ कहै तिलोचनु मीत',
      en: 'Salok 212: Trilochan Ji asks Namdev Ji about Maya',
    },
    moolGurmukhi: [
      'ਨਾਮਾ ਮਾਇਆ ਮੋਹਿਆ ਕਹੈ ਤਿਲੋਚਨੁ ਮੀਤ ॥',
      'ਕਾਹੇ ਛੀਪਹੁ ਛਾਇਲੈ ਰਾਮ ਨ ਲਾਵਹੁ ਚੀਤੁ ॥੨੧੨॥',
    ],
    moolDevanagari: [
      'नामा माइआ मोहिआ कहै तिलोचनु मीत ॥',
      'काहे छीपहु छाइलै राम न लावहु चीतु ॥२१२॥',
    ],
    moolRoman: [
      'Naamaa maaiaa mohiaa kahai tilochan meet ||',
      'Kaahe chheepahu chhailai raam na laavahu cheet ||212||',
    ],
    shabdarth: [
      {
        word: 'ਨਾਮਾ / नामा',
        meaning: {
          pb: 'ਭਗਤ ਨਾਮਦੇਵ ਜੀ',
          hi: 'भगत नामदेव जी',
          en: 'Bhagat Namdev Ji',
        },
      },
      {
        word: 'ਤਿਲੋਚਨੁ / तिलोचनु',
        meaning: {
          pb: 'ਭਗਤ ਤ੍ਰਿਲੋਚਨ ਜੀ',
          hi: 'भगत त्रिलोचन जी',
          en: 'Bhagat Trilochan Ji',
        },
      },
      {
        word: 'ਛੀਪਹੁ / छीपहु',
        meaning: {
          pb: 'ਛਾਪ ਰਹੇ ਹੋ (ਕੱਪੜਿਆਂ ਤੇ ਛਾਪਾ ਲਗਾਉਣਾ)',
          hi: 'छपाई कर रहे हो',
          en: 'Printing/dyeing cloth',
        },
      },
      {
        word: 'ਛਾਇਲੈ / छाइलै',
        meaning: {
          pb: 'ਰਜਾਈਆਂ ਦੇ ਅਬਰੇ/ਕੱਪੜੇ',
          hi: 'सुंदर रजाई व वस्त्र',
          en: 'Quilts or decorated cloths',
        },
      },
    ],
    bhavarth: {
      pb: 'ਭਗਤ ਤ੍ਰਿਲੋਚਨ ਜੀ ਆਪਣੇ ਮਿੱਤਰ ਭਗਤ ਨਾਮਦੇਵ ਜੀ ਨੂੰ ਕਹਿੰਦੇ ਹਨ-ਹੇ ਮਿੱਤਰ ਨਾਮਦੇਵ! ਤੂੰ ਮਾਇਆ ਵਿੱਚ ਮੋਹਿਆ ਗਿਆ ਜਾਪਦਾ ਹੈਂ, ਜੋ ਕੱਪੜੇ ਛਾਪਣ ਦੇ ਧੰਧੇ ਵਿੱਚ ਲੱਗਾ ਹੋਇਆ ਹੈਂ। ਤੂੰ ਪ੍ਰਭੂ ਦੇ ਸਿਮਰਨ ਵਿੱਚ ਆਪਣਾ ਚਿੱਤ ਕਿਉਂ ਨਹੀਂ ਲਗਾਉਂਦਾ?॥ ੨੧੨॥',
      hi: 'भगत त्रिलोचन जी अपने मित्र भगत नामदेव जी से कहते हैं-हे मित्र नामदेव! तुम माया के मोह में रंगे लगते हो जो कपड़ों की छपाई के काम में व्यस्त हो। तुम प्रभु के स्मरण में अपना ध्यान क्यों नहीं लगाते?॥ २१२॥',
      en: 'Bhagat Trilochan Ji says to his close friend Bhagat Namdev Ji: O friend Namdev, you seem enticed by Maya, busy printing bedspreads and cloth! Why do you not focus your consciousness on meditating upon God?',
    },
    chintan: {
      pb: 'ਬਾਹਰੀ ਕਾਰ-ਵਿਹਾਰ ਵੇਖ ਕੇ ਕਿਸੇ ਦੇ ਆਤਮਿਕ ਜੀਵਨ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ ਭੁਲੇਖਾ ਹੋ ਸਕਦਾ ਹੈ।',
      hi: 'बाहरी कार्य-व्यवहार देखकर किसी के आध्यात्मिक जीवन का अनुमान लगाना भ्रम हो सकता है।',
      en: 'Judging another’s internal spiritual state solely by their outward trade or occupation can be mistaken.',
    },
    acharana: {
      pb: 'ਧਰਮ-ਈਮਾਨ ਨਾਲ ਕਿਰਤ ਕਰਦਿਆਂ ਪਰਮਾਤਮਾ ਦਾ ਧਿਆਨ ਰੱਖੋ।',
      hi: 'ईमानदारी से आजीविका कमाते हुए प्रभु का ध्यान रखें।',
      en: 'Earn an honest living while keeping the Divine constantly in mind.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਧੰਧੇ ਅਤੇ ਸਾਰੇ ਕਰਮਾਂ ਨੂੰ ਪ੍ਰਭੂ ਆਗਿਆ ਅਨੁਸਾਰ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने व्यापार और सभी कर्मों को प्रभु की आज्ञा में समर्पित करें।',
      en: 'Dedicating one’s worldly labor as an offering to the Almighty.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 213 (Ang 1375) - Bhagat Namdev Ji's immortal answer
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-213',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੩: ਨਾਮਾ ਕਹੈ ਤਿਲੋਚਨਾ ਮੁਖ ਤੇ ਰਾਮੁ ਸੰਮਾਲੑਿ',
      hi: 'सलोक २१३: नामा कहै तिलोचना मुख ते रामु सम्हालि',
      en: 'Salok 213: Namdev Ji replies - Hands to work, mind to God',
    },
    moolGurmukhi: [
      'ਨਾਮਾ ਕਹੈ ਤਿਲੋਚਨਾ ਮੁਖ ਤੇ ਰਾਮੁ ਸੰਮਾਲੑਿ ॥',
      'ਹਾਥ ਪਾਉ ਕਰਿ ਕਾਮੁ ਸਭੁ ਚੀਤੁ ਨਿਰੰਜਨ ਨਾਲਿ ॥੨੧੩॥',
    ],
    moolDevanagari: [
      'नामा कहै तिलोचना मुख ते रामु सम्हालि ॥',
      'हाथ पाउ करि कामु सभु चीतु निरंजन नालि ॥२१३॥',
    ],
    moolRoman: [
      'Naamaa kahai tilochanaa mukh te raam samhaal ||',
      'Haath paau kar kaam sabh cheet niranjan naali ||213||',
    ],
    shabdarth: [
      {
        word: 'ਸੰਮਾਲੑਿ / सम्हालि',
        meaning: {
          pb: 'ਸਿਮਰਨ ਕਰ, ਯਾਦ ਰੱਖ',
          hi: 'स्मरण करो',
          en: 'Remember and chant',
        },
      },
      {
        word: 'ਹਾਥ ਪਾਉ / हाथ पाउ',
        meaning: {
          pb: 'ਹੱਥਾਂ ਅਤੇ ਪੈਰਾਂ ਨਾਲ',
          hi: 'हाथों और पैरों से',
          en: 'With hands and feet',
        },
      },
      {
        word: 'ਨਿਰੰਜਨ / निरंजन',
        meaning: {
          pb: 'ਮਾਇਆ ਦੇ ਲੇਪ ਤੋਂ ਰਹਿਤ ਪ੍ਰਮਾਤਮਾ',
          hi: 'माया से परे निरंजन प्रभु',
          en: 'The Immaculate, Untainted God',
        },
      },
    ],
    bhavarth: {
      pb: 'ਭਗਤ ਨਾਮਦੇਵ ਜੀ ਉੱਤਰ ਦਿੰਦੇ ਹਨ-ਹੇ ਤ੍ਰਿਲੋਚਨ! ਮੂੰਹ ਨਾਲ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਉਚਾਰ, ਹੱਥਾਂ-ਪੈਰਾਂ ਨਾਲ ਸੰਸਾਰ ਦੇ ਸਾਰੇ ਕਾਰ-ਵਿਹਾਰ ਕਰ, ਅਤੇ ਆਪਣੇ ਚਿੱਤ ਨੂੰ ਮਾਇਆ-ਰਹਿਤ ਨਿਰੰਜਨ ਵਾਹਿਗੁਰੂ ਨਾਲ ਜੋੜ ਕੇ ਰੱਖ!॥ ੨੧੩॥',
      hi: 'भगत नामदेव जी उत्तर देते हैं-हे त्रिलोचन! मुख से प्रभु का नाम जपो, हाथों-पांवों से संसार के सभी कार्य करो, और अपने चित्त को माया-रहित निरंजन प्रभु से जोड़े रखो!॥ २१३॥',
      en: 'Bhagat Namdev Ji responds with immortal wisdom: O Trilochan, chant the Lord’s Name with your mouth, perform all work with your hands and feet, but keep your inner consciousness absorbed in the Immaculate Divine!',
    },
    chintan: {
      pb: 'ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ, ਵੰਡ ਛਕੋ - ਇਹ ਗੁਰਮਤਿ ਦਾ ਸੁਨਹਿਰੀ ਸਿਧਾਂਤ ਹੈ। ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਨਿਰਲੇਪ ਰਹਿਣਾ ਹੀ ਸੱਚਾ ਯੋਗ ਹੈ।',
      hi: 'कर्म करते हुए प्रभु स्मरण में लीन रहना ही सच्चा योग है।',
      en: 'Hands to work, mind to God! This is the core spiritual ideal of remaining detached while fulfilling worldly duties.',
    },
    acharana: {
      pb: 'ਰੋਜ਼ਾਨਾ ਦੇ ਹਰ ਕੰਮ ਨੂੰ ਕਰਦਿਆਂ ਮਨ ਵਿੱਚ ਵਾਹਿਗੁਰੂ ਨਾਮ ਦੀ ਧੁੰਨ ਬਣਾਈ ਰੱਖੋ।',
      hi: 'दैनिक जीवन के हर कार्य को करते हुए मन में प्रभु नाम का सुमिरन बनाए रखें।',
      en: 'Engage fully in daily duties while keeping your mind continuously anchored in Divine Remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਰਸਨਾ, ਹੱਥ, ਪੈਰ ਅਤੇ ਚਿੱਤ ਸਭ ਕੁਝ ਨਿਰੰਜਨ ਪ੍ਰਭੂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी वाणी, हाथ-पांव और चित्त सब कुछ निरंजन प्रभु की सेवा में समर्पित करें।',
      en: 'Surrender your speech, hands, feet, and intellect to the service of the Untainted Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 214 (Ang 1375) - Guru Arjan Dev Ji (Mahala 5)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-214',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੪: ਮਹਲਾ ੫ - ਹਮਰਾ ਕੋ ਨਹੀ ਹਮ ਕਿਸਹੂ ਕੇ ਨਾਹਿ',
      hi: 'सलोक २१४: महला ५ - हमारा को नही हम किसहू के नाहि',
      en: 'Salok 214: Mahala 5 - None is ours except the Creator',
    },
    moolGurmukhi: [
      'ਮਹਲਾ ੫ ॥',
      'ਕਬੀਰਾ ਹਮਰਾ ਕੋ ਨਹੀ ਹਮ ਕਿਸਹੂ ਕੇ ਨਾਹਿ ॥',
      'ਜਿਨਿ ਇਹੁ ਰਚਨੁ ਰਚਾਇਆ ਤਿਸ ਹੀ ਮਾਹਿ ਸਮਾਹਿ ॥੨੧੪॥',
    ],
    moolDevanagari: [
      'महला ५ ॥',
      'कबीरा हमारा को नही हम किसहू के नाहि ॥',
      'जिनि इहु रचनु रचाइआ तिस ही माहि समाहि ॥२१४॥',
    ],
    moolRoman: [
      'Mahalaa 5 ||',
      'Kabeeraa hamaraa ko nahee ham kisahoo ke naahi ||',
      'Jin ihu rachan rachaiaa tis hee maah samaahi ||214||',
    ],
    shabdarth: [
      {
        word: 'ਰਚਨੁ / रचनु',
        meaning: {
          pb: 'ਸ੍ਰਿਸ਼ਟੀ/ਰਚਨਾ',
          hi: 'सृष्टि की रचना',
          en: 'Creation or universe',
        },
      },
      {
        word: 'ਤਿਸ ਹੀ ਮਾਹਿ / तिस ही माहि',
        meaning: {
          pb: 'ਉਸ ਪ੍ਰਭੂ ਵਿੱਚ ਹੀ',
          hi: 'उस करतार में ही',
          en: 'In that Creator alone',
        },
      },
      {
        word: 'ਸਮਾਹਿ / समाहि',
        meaning: {
          pb: 'ਲੀਨ/ਸਮਾਏ ਰਹਿੰਦੇ ਹਾਂ',
          hi: 'लीन रहते हैं',
          en: 'Merge or remain absorbed',
        },
      },
    ],
    bhavarth: {
      pb: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਹਵਾਲੇ ਨਾਲ ਫਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਕਬੀਰ! ਸੰਸਾਰ ਵਿੱਚ ਸਾਡਾ ਕੋਈ ਸਥਾਈ ਸਾਥੀ ਨਹੀਂ ਅਤੇ ਨਾ ਅਸੀਂ ਕਿਸੇ ਦੇ ਹਾਂ। ਜਿਸ ਪਰਮਾਤਮਾ ਨੇ ਇਹ ਸ੍ਰਿਸ਼ਟੀ ਰਚੀ ਹੈ, ਅਸੀਂ ਉਸੇ ਦੀ ਯਾਦ ਵਿੱਚ ਲੀਨ ਰਹਿੰਦੇ ਹਾਂ।॥ ੨੧੪॥',
      hi: 'गुरु अर्जन देव जी सतगुरु कबीर साहेब के हवाले से सतगुरु कबीर साहेब फरमाते हैं-हे कबीर! संसार में हमारा कोई नहीं है और न हम किसी के हैं। जिस प्रभु ने यह रचना रची है, हम उसी की भक्ति में लीन रहते हैं।॥ २१४॥',
      en: 'Guru Arjan Dev Ji teaches through Satguru Kabir Saheb: O Kabir, no one in this world belongs to us, nor do we belong to anyone. We remain forever absorbed in the Creator who fashioned this universe.',
    },
    chintan: {
      pb: 'ਸੰਸਾਰੀ ਰਿਸ਼ਤੇ ਨਾਸ਼ਵੰਤ ਹਨ; ਕੇਵਲ ਕਰਤਾਰ ਨਾਲ ਹੀ ਸਦੀਵੀ ਸਾਂਝ ਹੈ।',
      hi: 'संसार के संबंध नाशवान हैं; केवल करतार से ही शाश्वत संबंध है।',
      en: 'Worldly relationships are ephemeral; the only eternal bond is with the Creator.',
    },
    acharana: {
      pb: 'ਝੂਠੇ ਸੰਸਾਰੀ ਮੋਹ-ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸਿਰਜਨਹਾਰ ਨਾਲ ਜੁੜੋ।',
      hi: 'झूठे सांसारिक मोह से मुक्त होकर सृजनहार से जुड़ें।',
      en: 'Detach from illusory worldly attachments and align your soul with the Creator.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਹੋਂਦ ਅਤੇ ਆਤਮਾ ਨੂੰ ਸਿਰਜਨਹਾਰ ਪ੍ਰਭੂ ਦੀ ਜੋਤਿ ਵਿੱਚ ਅਭੇਦ ਕਰੋ।',
      hi: 'अपनी आत्मा को करतार की परम ज्योति में समर्पित कर लीन करें।',
      en: 'Merge your soul completely into the Divine Light of the Supreme Creator.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke - Mahala 5)',
  },

  // ---------------------------------------------------------
  // SALOK 215 (Ang 1375) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-215',
    category: 'salok',
    ang: 1375,
    title: {
      pb: 'ਸਲੋਕ ੨੧੫: ਕੀਚੜਿ ਆਟਾ ਗਿਰਿ ਪਰਿਆ ਕਿਛੂ ਨ ਆਇਓ ਹਾਥ',
      hi: 'सलोक २१५: कीचड़ि आटा गिरि परिआ किछू न आइओ हाथ',
      en: 'Salok 215: Flour dropped in mud is lost',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੀਚੜਿ ਆਟਾ ਗਿਰਿ ਪਰਿਆ ਕਿਛੂ ਨ ਆਇਓ ਹਾਥ ॥',
      'ਪੀਸਤ ਪੀਸਤ ਚਾਬਿਆ ਸੋਈ ਨਿਬਹਿਆ ਸਾਥ ॥੨੧੫॥',
    ],
    moolDevanagari: [
      'कबीर कीचड़ि आटा गिरि परिआ किछू न आइओ हाथ ॥',
      'पीसत पीसत चाबिआ सोई निबहिआ साथ ॥२१५॥',
    ],
    moolRoman: [
      'Kabeer keechari aataa giri pariaa kichhoo na aaio haath ||',
      'Peesat peesat chaabiaa soee nibhiaa saath ||215||',
    ],
    shabdarth: [
      {
        word: 'ਕੀਚੜਿ / कीचड़ि',
        meaning: {
          pb: 'ਸੰਸਾਰ ਦੇ ਧੰਧਿਆਂ ਰੂਪੀ ਚਿੱਕੜ ਵਿੱਚ',
          hi: 'सांसारिक प्रपंचों के कीचड़ में',
          en: 'Mud or mire of worldly distractions',
        },
      },
      {
        word: 'ਆਟਾ / आटा',
        meaning: {
          pb: 'ਸੁਆਸ/ਉਮਰ ਦਾ ਆਟਾ',
          hi: 'श्वासों/उम्र का आटा',
          en: 'Flour representing breaths/life duration',
        },
      },
      {
        word: 'ਪੀਸਤ ਪੀਸਤ / पीसत पीसत',
        meaning: {
          pb: 'ਜੀਵਨ ਚੱਕੀ ਚੱਲਦਿਆਂ (ਕਾਰ-ਵਿਹਾਰ ਕਰਦਿਆਂ)',
          hi: 'जीवन-चक्की पीसते हुए',
          en: 'While grinding the mill of daily life',
        },
      },
      {
        word: 'ਚਾਬਿਆ / चाबिआ',
        meaning: {
          pb: 'ਨਾਮ-ਸਿਮਰਨ ਅੰਗੀਕਾਰ ਕਰ ਲਿਆ',
          hi: 'नाम का भक्षण किया',
          en: 'Tasted and digested the Holy Name',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜਿਵੇਂ ਆਟਾ ਚਿੱਕੜ ਵਿੱਚ ਡਿੱਗ ਪਵੇ ਤਾਂ ਬੇਅਰਥ ਚਲਾ ਜਾਂਦਾ ਹੈ, ਤਿਵੇਂ ਉਮਰ ਦੇ ਸੁਆਸ ਧੰਧਿਆਂ ਵਿੱਚ ਵਿਅਰਥ ਚਲੇ ਜਾਂਦੇ ਹਨ। ਪਰ ਜੀਵਨ ਚੱਕੀ ਪੀਂਹਦਿਆਂ ਜੋ ਸੁਆਸ ਹਰੀ-ਸਿਮਰਨ ਵਿੱਚ ਲਗਾਏ, ਉਹੀ ਅੰਤ ਸਮੇਂ ਨਾਲ ਨਿਭਦੇ ਹਨ।॥ ੨੧੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-जैसे आटा कीचड़ में गिर जाए तो व्यर्थ हो जाता है, वैसे ही श्वास सांसारिक प्रपंचों में नष्ट हो जाते हैं। परंतु जीवन-चक्की चलाते हुए जो श्वास प्रभु-सुमिरन में लगाए, वही अंत में साथ निभाते हैं।॥ २१५॥',
      en: 'Satguru Kabir Saheb proclaims: Like flour dropped into the mud, life’s breaths wasted in worldly mire are lost forever. Only the breaths spent in divine remembrance while grinding the mill of life shall abide with you in the end.',
    },
    chintan: {
      pb: 'ਸੁਆਸ-ਸੁਆਸ ਸਿਮਰਨ ਹੀ ਅਸਲ ਕਮਾਈ ਹੈ ਜੋ ਪਰਲੋਕ ਵਿੱਚ ਨਾਲ ਜਾਂਦੀ ਹੈ।',
      hi: 'श्वास-श्वास प्रभु-स्मरण ही वास्तविक कमाई है जो परलोक में साथ जाती है।',
      en: 'Every breath dedicated to divine memory is the only wealth that accompanies the soul hereafter.',
    },
    acharana: {
      pb: 'ਸੁਆਸਾਂ ਨੂੰ ਵਿਅਰਥ ਨਾ ਗੁਆਓ; ਕਾਰ-ਵਿਹਾਰ ਕਰਦਿਆਂ ਵੀ ਨਾਮ ਜਪੋ।',
      hi: 'श्वासों को व्यर्थ न गंवाएं; कार्य-व्यवहार करते हुए भी नाम का आनंद लें।',
      en: 'Do not waste your breaths; savor the Divine Name even while engaged in worldly work.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸੁਆਸਾਂ ਦੀ ਪੂੰਜੀ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਕੇ ਜੀਵਨ ਸਫਲ ਕਰੋ।',
      hi: 'अपनी श्वासों की पूंजी प्रभु चरणों में समर्पित कर जीवन सफल करें।',
      en: 'Consecrate the capital of your breaths to the Lord’s feet and make life fruitful.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੫ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 216 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-216',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੧੬: ਮਨੁ ਜਾਨੈ ਸਭ ਬਾਤ ਜਾਨਤ ਹੀ ਅਉਗਨੁ ਕਰੈ',
      hi: 'सलोक २१६: मनु जानै सभ बात जानत ही अउगनु करै',
      en: 'Salok 216: Mind knows right yet commits sin',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਮਨੁ ਜਾਨੈ ਸਭ ਬਾਤ ਜਾਨਤ ਹੀ ਅਉਗਨੁ ਕਰੈ ॥',
      'ਕਾਹੇ ਕੀ ਕੁਸਲਾਤ ਹਾਥਿ ਦੀਪੁ ਕੂਏ ਪਰੈ ॥੨੧੬॥',
    ],
    moolDevanagari: [
      'कबीर मनु जानै सभ बात जानत ही अउगनु करै ॥',
      'काहे की कुसलात हाथि दीपू कूए परै ॥२१६॥',
    ],
    moolRoman: [
      'Kabeer man jaanai sabh baat jaanat hee augan karai ||',
      'Kaahe kee kusalaat haathi deep kooe parai ||216||',
    ],
    shabdarth: [
      {
        word: 'ਅਉਗਨੁ / अउगनु',
        meaning: {
          pb: 'ਗੁਨਾਹ/ਪਾਪ/ਬੁਰਾਈ',
          hi: 'गुनाह व पाप',
          en: 'Sin or vice',
        },
      },
      {
        word: 'ਕੁਸਲਾਤ / कुसलात',
        meaning: {
          pb: 'ਭਲਾਈ/ਕੁਸ਼ਲਤਾ/ਲਾਭ',
          hi: 'भलाई व लाभ',
          en: 'Benefit or well-being',
        },
      },
      {
        word: 'ਹਾਥਿ ਦੀਪੁ / हाथि दीपੁ',
        meaning: {
          pb: 'ਹੱਥ ਵਿੱਚ ਦੀਵਾ/ਗਿਆਨ ਦਾ ਚਾਨਣ',
          hi: 'हाथ में दीपक',
          en: 'Holding a lamp in hand',
        },
      },
      {
        word: 'ਕੂਏ ਪਰੈ / कूए परै',
        meaning: {
          pb: 'ਖੂਹ ਵਿੱਚ ਡਿੱਗ ਪਵੇ',
          hi: 'कुएं में गिर पड़े',
          en: 'Falls into a deep well',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨ ਸਭ ਜਾਣਦਾ ਹੋਇਆ ਵੀ ਜਾਣ-ਬੁੱਝ ਕੇ ਪਾਪ-ਵਿਕਾਰ ਕਰਦਾ ਹੈ। ਅਜਿਹੇ ਮਨੁੱਖ ਦੇ ਹੱਥ ਵਿੱਚ ਦੀਵਾ (ਗਿਆਨ) ਹੋਣ ਦਾ ਕੀ ਲਾਭ, ਜੋ ਦੀਵਾ ਹੁੰਦਿਆਂ ਵੀ ਖੂਹ ਵਿੱਚ ਡਿੱਗ ਪਵੇ? ਅਰਥਾਤ ਜਾਣਕਾਰੀ ਦੇ ਹੁੰਦਿਆਂ ਬੁਰਾਈ ਕਰਨਾ ਹੋਰ ਵੀ ਗੰਭੀਰ ਭੁੱਲ ਹੈ।॥ ੨੧੬॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मन सब जानते हुए भी जान-बूझकर पाप-विकार करता है। ऐसे मनुष्य के हाथ में दीपक (ज्ञान) होने का क्या लाभ, जो दीपक होते हुए भी कुएं में गिर पड़े? अर्थात ज्ञान होते हुए भी बुराई करना और भी गंभीर अपराध है।॥ २१६॥',
      en: 'Satguru Kabir Saheb proclaims: The mind knows full well right from wrong, yet deliberately commits sin. What good is holding a lamp in hand if one still falls into a deep well? Knowing the truth yet choosing vice brings no wisdom.',
    },
    chintan: {
      pb: 'ਕੇਵਲ ਅਕਾਦਮਿਕ ਗਿਆਨ ਕਾਫ਼ੀ ਨਹੀਂ; ਗਿਆਨ ਅਨੁਸਾਰ ਆਚਰਣ ਅਤੇ ਮਨ ਦਾ ਸੁਧਾਰ ਜ਼ਰੂਰੀ ਹੈ।',
      hi: 'केवल ज्ञान होना पर्याप्त नहीं; ज्ञान के अनुसार आचरण और मन का सुधार आवश्यक है।',
      en: 'Mere theoretical knowledge is worthless unless translated into virtuous conduct and self-restraint.',
    },
    acharana: {
      pb: 'ਜਾਣ-ਬੁੱਝ ਕੇ ਮੰਦਕਰਮ ਕਰਨ ਦੀ ਬਿਰਤੀ ਤਿਆਗੋ ਅਤੇ ਗਿਆਨ ਦੀ ਰੌਸ਼ਨੀ ਵਿੱਚ ਸੱਚਾ ਮਾਰਗ ਚੁਣੋ।',
      hi: 'जान-बूझकर दुष्कर्म करने की प्रवृत्ति त्यागें और ज्ञान के प्रकाश में सन्मार्ग पर चलें।',
      en: 'Abandon deliberate wrongdoing; walk steadfastly on the righteous path guided by wisdom.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਅਤੇ ਗਿਆਨ ਨੂੰ ਅਹੰਕਾਰ ਤੋਂ ਬਚਾ ਕੇ ਪ੍ਰਭੂ ਭੈ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी बुद्धि और ज्ञान को अहंकार से बचाकर प्रभु भय और भक्ति में समर्पित करें।',
      en: 'Surrender your intellect and knowledge in reverent fear and devotion to the Divine.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 217 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-217',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੧੭: ਲਾਗੀ ਪ੍ਰੀਤਿ ਸੁਜਾਨ ਸਿਉ ਬਰਜੈ ਲੋਗੁ ਅਜਾਨੁ',
      hi: 'सलोक २१७: लागी प्रीति सुजान सिउ बरजै लोगु अजानु',
      en: 'Salok 217: Bound in love with the All-Knowing Lord',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਲਾਗੀ ਪ੍ਰੀਤਿ ਸੁਜਾਨ ਸਿਉ ਬਰਜੈ ਲੋਗੁ ਅਜਾਨੁ ॥',
      'ਤਾ ਸਿਉ ਟੂਟੀ ਕਿਉ ਬਨੈ ਜਾ ਕੇ ਜੀਅ ਪਰਾਨ ॥੨੧੭॥',
    ],
    moolDevanagari: [
      'कबीर लागी प्रीति सुजान सिउ बरजै लोगु अजानु ॥',
      'ता सिउ टूटी किउ बनै जा के जीअ परानु ॥२१७॥',
    ],
    moolRoman: [
      'Kabeer laagee preeti sujaan siu barjai log ajaan ||',
      'Taa siu tootee kiu banai jaa ke jia paraan ||217||',
    ],
    shabdarth: [
      {
        word: 'ਸੁਜਾਨ / सुजान',
        meaning: {
          pb: 'ਸਰਬ-ਗਿਆਨੀ ਪ੍ਰਮਾਤਮਾ',
          hi: 'सर्वज्ञ प्रभु',
          en: 'All-Knowing Supreme Lord',
        },
      },
      {
        word: 'ਬਰਜੈ / बरजै',
        meaning: {
          pb: 'ਹੋੜਦੇ/ਰੋਕਦੇ ਹਨ',
          hi: 'रोकते हैं',
          en: 'Restrain or forbid',
        },
      },
      {
        word: 'ਅਜਾਨੁ / अजानु',
        meaning: {
          pb: 'ਅਣਜਾਣ/ਮੂਰਖ ਲੋਕ',
          hi: 'अज्ञानी लोग',
          en: 'Ignorant or foolish people',
        },
      },
      {
        word: 'ਜੀਅ ਪਰਾਨ / जीअ परान',
        meaning: {
          pb: 'ਜਿੰਦ ਅਤੇ ਪ੍ਰਾਣ',
          hi: 'प्राण और जीवन',
          en: 'Soul and life-breath',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੇਰੀ ਪ੍ਰੀਤ ਸਰਬ-ਗਿਆਨੀ ਪ੍ਰਭੂ ਨਾਲ ਲੱਗੀ ਹੋਈ ਹੈ, ਪਰ ਅਣਜਾਣ ਲੋਕ ਮੈਨੂੰ ਰੋਕਦੇ ਹਨ। ਭਲਾ ਉਸ ਪ੍ਰਭੂ ਨਾਲੋਂ ਪ੍ਰੀਤ ਤੋੜਨੀ ਕਿਸ ਤਰ੍ਹਾਂ ਸੰਭਵ ਹੈ, ਜਿਸ ਨੇ ਇਹ ਜਿੰਦ ਅਤੇ ਪ੍ਰਾਣ ਬਖ਼ਸ਼ੇ ਹਨ?॥ ੨੧੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मेरी प्रीति सर्वज्ञ प्रभु से लगी हुई है, परंतु अज्ञानी लोग मुझे रोकते हैं। भला उस प्रभु से प्रीति तोड़ना कैसे संभव है, जिसने यह जीवन और प्राण दिए हैं?॥ २१७॥',
      en: 'Satguru Kabir Saheb proclaims: My love is pledged to the All-Knowing Lord, yet ignorant people try to dissuade me. How could I ever break my bond with Him who gave me my very soul and breath of life?',
    },
    chintan: {
      pb: 'ਸੰਸਾਰ ਦੇ ਤਾਹਨਿਆਂ ਜਾਂ ਹੋੜਾਂ ਤੋਂ ਬਿਨਾਂ ਘਾਬਰੇ ਸੱਚੇ ਪ੍ਰਭੂ ਨਾਲ ਅਟੁੱਟ ਪ੍ਰੀਤੀ ਬਣਾਈ ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ।',
      hi: 'संसारी उलाहनों से बेपरवाह होकर सर्वज्ञ प्रभु से अटूट प्रेम बनाए रखना चाहिए।',
      en: 'Unmoved by worldly criticism or ignorance, remain steadfast in unwavering love for the Creator.',
    },
    acharana: {
      pb: 'ਅਣਜਾਣ ਲੋਕਾਂ ਦੀਆਂ ਗੱਲਾਂ ਪਰਵਾਹ ਨਾ ਕਰਦਿਆਂ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ-ਮਾਰਗ ਤੇ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਚੱਲੋ।',
      hi: 'अज्ञानी लोगों की बातों की परवाह न करते हुए प्रभु के प्रेम-मार्ग पर दृढ़ता से चलें।',
      en: 'Ignore the chatter of the worldly-minded; walk firmly on the path of divine love.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਜਿੰਦ-ਪ੍ਰਾਣ ਉਸ ਸੁਜਾਨ ਵਾਹਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਟੁੱਟ ਪ੍ਰੇਮ ਨਾਲ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने प्राण और जीवन उस सर्वज्ञ प्रभु के चरणों में समर्पित करें।',
      en: 'Offer your soul and life-breath with undivided love at the feet of the All-Knowing Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 218 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-218',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੧੮: ਕੋਠੇ ਮੰਡਪ ਹੇਤੁ ਕਰਿ ਕਾਹੇ ਮਰਹੁ ਸਵਾਰਿ',
      hi: 'सलोक २१८: कोठे मंडप हेतु करि काहे मरहु सवारि',
      en: 'Salok 218: Why do you waste your life building and decorating palaces?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੋਠੇ ਮੰਡਪ ਹੇਤੁ ਕਰਿ ਕਾਹੇ ਮਰਹੁ ਸਵਾਰਿ ॥',
      'ਕਾਰਜੁ ਸਾਢੇ ਤੀਨਿ ਹਥ ਘਨੀ ਤ ਪਉਨੇ ਚਾਰਿ ॥੨੧੮॥',
    ],
    moolDevanagari: [
      'कबीर कोठे मंडप हेतु करि काहे मरहु सवारि ॥',
      'कारजु साढे तीनि हथ घनी त पउने चारि ॥२१८॥',
    ],
    moolRoman: [
      'Kabeer kothe mandap het kar kaahe marahu savaar ||',
      'Kaaraj saadhe teen hath ghanee ta paune chaar ||218||',
    ],
    shabdarth: [
      {
        word: 'ਕੋਠੇ ਮੰਡਪ / कोठे मंडप',
        meaning: {
          pb: 'ਮਕਾਨ ਤੇ ਮਹਿਲ',
          hi: 'मकान और महल',
          en: 'Houses and mansions',
        },
      },
      {
        word: 'ਹੇਤੁ ਕਰਿ / हेतु करि',
        meaning: {
          pb: 'ਮੋਹ ਕਰਕੇ',
          hi: 'मोह करके',
          en: 'Out of attachment',
        },
      },
      {
        word: 'ਸਵਾਰਿ / सवारि',
        meaning: {
          pb: 'ਸਜਾ ਸਜਾ ਕੇ',
          hi: 'सजा-सजा कर',
          en: 'Decorating/embellishing',
        },
      },
      {
        word: 'ਸਾਢੇ ਤੀਨਿ ਹਥ / साढे तीनि हथ',
        meaning: {
          pb: 'ਸਾਢੇ ਤਿੰਨ ਹੱਥ',
          hi: 'साढ़े तीन हाथ',
          en: 'Three and a half cubits',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਹਿਲਾਂ ਮਾੜੀਆਂ ਨਾਲ ਪ੍ਰੇਮ ਕਰਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਸਵਾਰ ਸਵਾਰ ਕੇ ਕਿਉਂ ਖੱਪ ਰਹੇ ਹੋ? ਅੰਤ ਤਾਂ ਤੇਰੇ ਸਰੀਰ ਦੇ ਕਾਰਜ ਲਈ ਸਾਢੇ ਤਿੰਨ ਹੱਥ (ਜਾਂ ਬਹੁਤ ਬਹੁਤ ਪੌਣੇ ਚਾਰ ਹੱਥ) ਥਾਂ ਹੀ ਕੰਮ ਆਉਣੀ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-महलों और मकानों से अत्यधिक मोह करके उन्हें संवारने में अपनी जीवन-लीला क्यों व्यर्थ कर रहे हो? अंत में इस नश्वर देह के लिए केवल साढ़े तीन या अधिकतम पौने चार हाथ भूमि ही काम आएगी।',
      en: 'Satguru Kabir Saheb proclaims: Why waste your life in attachment to building and decorating grand houses? Ultimately, your physical body only requires three and a half cubits (or at most three and three-quarters cubits) of land for its final resting place.',
    },
    chintan: {
      pb: 'ਭੌਤਿਕ ਘਰਾਂ ਦੀ ਸਜਾਵਟ ਨਾਲੋਂ ਆਤਮਿਕ ਘਰ ਨੂੰ ਸੰਵਾਰਨ ਦੀ ਲੋੜ ਹੈ।',
      hi: 'भौतिक मकानों को संवारने से अधिक अपने आंतरिक आध्यात्मिक घर को संवारने की आवश्यकता है।',
      en: 'Focus more on decorating and securing the spiritual home rather than temporary physical structures.',
    },
    acharana: {
      pb: 'ਮਕਾਨਾਂ ਦੇ ਹੰਕਾਰ ਅਤੇ ਮੋਹ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸਾਦਗੀ ਅਤੇ ਭਗਤੀ ਵਾਲਾ ਜੀਵਨ ਬਤੀਤ ਕਰੋ।',
      hi: 'मकानों और संपत्तियों के मोह एवं अहंकार से ऊपर उठकर सादा और भक्तिमय जीवन जिएं।',
      en: 'Rise above the vanity of properties and physical wealth; live a life of humility and simplicity.',
    },
    samarpan: {
      pb: 'ਸਭ ਕੁਝ ਨਾਸ਼ਵਾਨ ਜਾਣ ਕੇ ਆਪਣੀ ਸੁਰਤ ਨਿਰੰਕਾਰ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'सब कुछ नश्वर मानकर अपनी चेतना परमात्मा के चरणों में समर्पित करें।',
      en: 'Knowing all material forms to be perishable, surrender your consciousness to the Eternal Creator.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 219 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-219',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੧੯: ਜੋ ਮੈ ਚਿਤਵਉ ਨਾ ਕਰੈ ਕਿਆ ਮੇਰੇ ਚਿਤਵੇ ਹੋਇ',
      hi: 'सलोक २१९: जो मै चितवउ ना करै किआ मेरे चितवे होइ',
      en: 'Salok 219: What I plan, does not happen; what can my planning accomplish?',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜੋ ਮੈ ਚਿਤਵਉ ਨਾ ਕਰੈ ਕਿਆ ਮੇਰੇ ਚਿਤਵੇ ਹੋਇ ॥',
      'ਅਪਨਾ ਚਿਤਵਿਆ ਹਰਿ ਕਰੈ ਜੋ ਮੇਰੇ ਚਿਤਿ ਨ ਹੋਇ ॥੨੧੯॥',
    ],
    moolDevanagari: [
      'कबीर जो मै चितवउ ना करै किआ मेरे चितवे होइ ॥',
      'अपना चितविआ हरि करै जो मेरे चिति न होइ ॥२१९॥',
    ],
    moolRoman: [
      'Kabeer jo mai chitvau naa karai kia mere chitve hoi ||',
      'Apnaa chitviaa har karai jo mere chit na hoi ||219||',
    ],
    shabdarth: [
      {
        word: 'ਚਿਤਵਉ / चितवउ',
        meaning: {
          pb: 'ਮੈਂ ਸੋਚਦਾ ਹਾਂ',
          hi: 'मैं सोचता हूँ',
          en: 'I plan or think',
        },
      },
      {
        word: 'ਚਿਤਿ / चिति',
        meaning: {
          pb: 'ਮਨ ਵਿਚ',
          hi: 'मन में',
          en: 'In the mind',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮੇਰੇ ਸੋਚਣ-ਚਿਤਵਣ ਨਾਲ ਕੁਝ ਨਹੀਂ ਹੁੰਦਾ, ਕਿਉਂਕਿ ਪਰਮਾਤਮਾ ਉਹ ਨਹੀਂ ਕਰਦਾ ਜੋ ਮੈਂ ਸੋਚਦਾ ਹਾਂ। ਪ੍ਰਭੂ ਆਪਣੀ ਮਰਜ਼ੀ ਅਨੁਸਾਰ ਉਹ ਕਾਰਜ ਕਰਦਾ ਹੈ ਜੋ ਮੇਰੇ ਚਿੱਤ-ਚੇਤੇ ਵਿੱਚ ਵੀ ਨਹੀਂ ਹੁੰਦਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य के अपने सोचने-विचारने से कुछ नहीं होता। परमात्मा वह नहीं करता जो हम चाहते हैं, बल्कि वह अपनी इच्छा से वह सब घटित कर देता है जो हमारे चित्त की कल्पना में भी नहीं होता।',
      en: 'Satguru Kabir Saheb proclaims: My own planning accomplishes nothing, for the Lord does not act according to human expectations. The Divine executes His own supreme will, doing things that have never even crossed my mind.',
    },
    chintan: {
      pb: 'ਮਨੁੱਖੀ ਅਹੰਕਾਰ ਅਤੇ ਆਪਣੀ ਬੁੱਧੀ ਦੇ ਭਰੋਸੇ ਨੂੰ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਦੀ ਰਜ਼ਾ ਵਿੱਚ ਰਹਿਣਾ ਸਿੱਖੋ।',
      hi: 'मानवीय अहंकार और अपनी बुद्धि के अत्यधिक भरोसे को त्यागकर परमात्मा की रज़ा (इच्छा) में रहना सीखें।',
      en: 'Relinquish human ego and over-dependence on personal intellect; learn to abide in the Divine Will.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਿਕ ਯੋਜਨਾਵਾਂ ਦੇ ਅਸਫਲ ਹੋਣ ਤੇ ਨਿਰਾਸ਼ ਨਾ ਹੋਵੋ, ਸਗੋਂ ਪ੍ਰਭੂ ਦੇ ਹੁਕਮ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ।',
      hi: 'सांसारिक योजनाओं के असफल होने पर निराश न हों, बल्कि प्रभु के सर्वोपरि न्याय को सहर्ष स्वीकार करें।',
      en: 'Do not be discouraged when worldly plans fail; accept the supreme wisdom of the Lord.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੰਤਾ ਅਤੇ ਕਰਮਾਂ ਦਾ ਫਲ ਪਰਮੇਸ਼ੁਰ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी सभी चिंताओं और कर्मों का फल परमेश्वर के श्री चरणों में समर्पित करें।',
      en: 'Surrender all your worries, thoughts, and the fruits of your actions at the feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 220 (Ang 1376) - Guru Amar Das Ji (Mahala 3)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-220',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੦: ਮਹਲਾ ੩ - ਚਿੰਤਾ ਭਿ ਆਪਿ ਕਰਾਇਸੀ ਅਚਿੰਤ ਭਿ ਆਪੇ ਦੇਇ',
      hi: 'सलोक २२०: महला ३ - चिंता भि आपि कराइसी अचिंत भि आपे देइ',
      en: 'Salok 220: Guru Amar Das Ji - The Lord Himself guides our thoughts and grants peace.',
    },
    moolGurmukhi: [
      'ਮਃ ੩ ॥',
      'ਚਿੰਤਾ ਭਿ ਆਪਿ ਕਰਾਇਸੀ ਅਚਿੰਤ ਭਿ ਆਪੇ ਦੇਇ ॥',
      'ਨਾਨਕ ਸੋ ਸਾਲਾਹੀਐ ਜਿ ਸਭਨਾ ਸਾਰ ਕਰੇਇ ॥੨੨੦॥',
    ],
    moolDevanagari: [
      'मः ३ ॥',
      'चिंता भि आपि कराइसी अचिंत भि आपे देइ ॥',
      'नानक सो सालाहीऐ जि सभना सार करेइ ॥२२०॥',
    ],
    moolRoman: [
      'Mahalaa tija ||',
      'Chintaa bhee aap karaisee achint bhee aape dei ||',
      'Naanak so saalaaheeiai jise sabhnaa saar karei ||220||',
    ],
    shabdarth: [
      {
        word: 'ਅਚਿੰਤ / अचिंत',
        meaning: {
          pb: 'ਚਿੰਤਾ ਰਹਿਤ ਸ਼ਾਂਤੀ',
          hi: 'चिंता-रहित शांति / संतोष',
          en: 'Worry-free state / peace',
        },
      },
      {
        word: 'ਸਾਰ ਕਰੇਇ / सार करेइ',
        meaning: {
          pb: 'ਸੰਭਾਲ ਕਰਦਾ ਹੈ',
          hi: 'संभाव व रक्षा करता है',
          en: 'Takes care of everyone',
        },
      },
    ],
    bhavarth: {
      pb: 'ਤੀਜੇ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ-ਜੀਵਾਂ ਦੇ ਮਨ ਵਿੱਚ ਚਿੰਤਾ ਵੀ ਪ੍ਰਭੂ ਆਪ ਹੀ ਪੈਦਾ ਕਰਦਾ ਹੈ ਅਤੇ ਚਿੰਤਾ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸ਼ਾਂਤੀ ਵੀ ਉਹ ਆਪ ਹੀ ਬਖ਼ਸ਼ਦਾ ਹੈ। ਹੇ ਨਾਨਕ! ਉਸੇ ਇੱਕ ਪਰਮਾਤਮਾ ਦੀ ਸਿਫ਼ਤ-ਸਲਾਹ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ ਜੋ ਸਾਰੇ ਜੀਵਾਂ ਦੀ ਸੰਭਾਲ ਤੇ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।',
      hi: 'तृतीय गुरु श्री गुरु अमरदास जी सतगुरु कबीर साहेब फरमाते हैं-परमात्मा स्वयं ही जीवों के भीतर चिंतन-चिंता उत्पन्न करता है और वही उन्हें चिंता-मुक्त परम शांति प्रदान करता है। हे नानक! हमें उसी एक प्रभु की स्तुति करनी चाहिए जो सृष्टि के समस्त जीवों की सार-संभाल करता है।',
      en: 'Third Guru, Guru Amar Das Ji, reflects: The Lord Himself causes worry/concern to arise in the mind, and He Himself bestows worry-free peace. O Nanak, praise that Lord alone who sustains and takes care of all creation.',
    },
    chintan: {
      pb: 'ਸਾਡੇ ਜੀਵਨ ਦੇ ਦੁੱਖ-ਸੁੱਖ ਅਤੇ ਸ਼ਾਂਤੀ ਪ੍ਰਭੂ ਦੇ ਹੁਕਮ ਦੇ ਅਧੀਨ ਹਨ, ਇਸ ਲਈ ਸਭ ਉਸੇ ਦੀ ਦੇਣ ਹੈ।',
      hi: 'हमारे जीवन के हर्ष-शोक और चिंता-शांति प्रभु की ही सत्ता के अधीन हैं, अतः विचलित न हों।',
      en: 'Understand that anxiety and tranquility are both under the Divine Ordinance; remain poised.',
    },
    acharana: {
      pb: 'ਚਿੰਤਾਵਾਂ ਵਿੱਚ ਘਿਰ ਕੇ ਹਾਰਨ ਦੀ ਬਜਾਏ, ਸਾਰਿਆਂ ਦੀ ਸੰਭਾਲ ਕਰਨ ਵਾਲੇ ਅਕਾਲ ਪੁਰਖ ਦੀ ਅਰਾਧਨਾ ਕਰੋ।',
      hi: 'चिंताओं में घिरकर निराश होने के बजाय, सबका पोषण करने वाले अकाल पुरख की शरण लें।',
      en: 'Instead of succumbing to worry, engage in the praise of the Sustainer who nourishes all.',
    },
    samarpan: {
      pb: 'ਹਰ ਅਵਸਥਾ ਵਿੱਚ ਪ੍ਰਭੂ ਦੀ ਸਿਫ਼ਤ-ਸਲਾਹ ਕਰਦਿਆਂ ਆਪਣਾ ਆਪ ਉਸ ਨੂੰ ਅਰਪਣ ਕਰੋ।',
      hi: 'प्रत्येक परिस्थिति में प्रभु की महिमा गाते हुए स्वयं को पूर्ण रूप से समर्पित करें।',
      en: 'In every state, sing the praises of the Lord and surrender your life completely to His care.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩host੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 221 (Ang 1376) - Guru Arjan Dev Ji (Mahala 5)
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-221',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨2੧: ਮਹਲਾ ੫ - ਕਬੀਰ ਰਾਮੁ ਨ ਚੇਤਿਓ ਫਿਰਿਆ ਲਾਲਚ ਮਾਹਿ',
      hi: 'सलोक २२१: महला ५ - कबीर रामु न चेतिओ फिरिआ लालच माहि',
      en: 'Salok 221: Guru Arjan Dev Ji - The mortal did not remember the Lord, and wandered in greed.',
    },
    moolGurmukhi: [
      'ਮਃ ੫ ॥',
      'ਕਬੀਰ ਰਾਮੁ ਨ ਚੇਤਿਓ ਫਿਰਿਆ ਲਾਲਚ ਮਾਹਿ ॥',
      'ਪਾਪ ਕਰੰਤਾ ਮਰਿ ਗਇਆ ਅਉਧ ਪੁਨੀ ਖਿਨ ਮਾਹਿ ॥੨੨੧॥',
    ],
    moolDevanagari: [
      'मः ५ ॥',
      'कबीर रामु न चेतिओ फिरिआ लालच माहि ॥',
      'पाप करंता मरि गइआ अउध पुनी खिन माहि ॥२२१॥',
    ],
    moolRoman: [
      'Mahalaa panjva ||',
      'Kabeer raamu na chetio firiaa laalach maahi ||',
      'Paap karantaa mari gaiaa audh punee khin maahi ||221||',
    ],
    shabdarth: [
      {
        word: 'ਅਉਧ / अउध',
        meaning: {
          pb: 'ਉਮਰ / ਜੀਵਨ-ਕਾਲ',
          hi: 'आयु / जीवन-काल',
          en: 'Life span',
        },
      },
      {
        word: 'ਪੁਨੀ / पुनी',
        meaning: {
          pb: 'ਪੂਰੀ ਹੋ ਗਈ',
          hi: 'समाप्त हो गई',
          en: 'Completed / exhausted',
        },
      },
    ],
    bhavarth: {
      pb: 'ਪੰਜਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ-ਮਨੁੱਖ ਨੇ ਜੀਵਨ ਵਿੱਚ ਪਰਮਾਤਮਾ ਦਾ ਸਿਮਰਨ ਨਹੀਂ ਕੀਤਾ ਅਤੇ ਸਦਾ ਲਾਲਚ ਦੇ ਅਧੀਨ ਭਟਕਦਾ ਰਿਹਾ। ਪਾਪ ਕਰਦਿਆਂ-ਕਰਦਿਆਂ ਹੀ ਉਹ ਮੌਤ ਦੇ ਮੂੰਹ ਵਿੱਚ ਜਾ ਪਿਆ ਅਤੇ ਇੱਕ ਛਿਨ ਵਿੱਚ ਹੀ ਉਸ ਦੀ ਕੀਮਤੀ ਉਮਰ ਸਮਾਪਤ ਹੋ ਗਈ।',
      hi: 'पंचम गुरु श्री गुरु अर्जुन देव जी सतगुरु कबीर साहेब फरमाते हैं-मनुष्य ने जीवन भर राम का नाम स्मरण नहीं किया और केवल तृष्णा व लोभ में भटकता रहा। पाप-कर्म करते हुए ही उसकी मृत्यु हो गई और क्षण भर में ही उसकी अनमोल सांसारिक आयु समाप्त हो गई।',
      en: 'Fifth Guru, Guru Arjan Dev Ji, reflects: The mortal did not contemplate the Lord and wandered around in greed. Committing sins, he died, and in an instant, his life span was exhausted.',
    },
    chintan: {
      pb: 'ਲਾਲਚ ਅਤੇ ਪਾਪ ਮਨੁੱਖ ਦੇ ਜੀਵਨ ਨੂੰ ਬਿਨਾਂ ਭਗਤੀ ਦੇ ਅਚਾਨਕ ਹੀ ਨਾਸ ਕਰ ਦਿੰਦੇ ਹਨ।',
      hi: 'लोभ और पाप मनुष्य के आध्यात्मिक जीवन को समाप्त कर देते हैं और मृत्यु अचानक दबोच लेती है।',
      en: 'Greed and sinful actions consume the valuable life span, leaving one completely empty-handed at the end.',
    },
    acharana: {
      pb: 'ਲਾਲਚੀ ਬਿਰਤੀਆਂ ਦਾ ਤਿਆਗ ਕਰਕੇ ਸੱਚੇ ਹਿਰਦੇ ਨਾਲ ਪ੍ਰਭੂ ਨਾਮ ਦੀ ਆਰਾਧਨਾ ਵਿੱਚ ਜੁੜੋ।',
      hi: 'सांसारिक लोभ-लालच का त्याग कर शुद्ध हृदय से प्रभु नाम का स्मरण करें।',
      en: 'Abandon greedy impulses; associate with truthful conduct and engage in devotional remembrance.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਕੀਮਤੀ ਜੀਵਨ-ਸਵਾਸਾਂ ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी अनमोल जीवन-सांसों को परमात्मा की भक्ति में समर्पित करें।',
      en: 'Dedicate the precious breaths of your life to the service and remembrance of the Creator.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 222 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-222',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੨: ਕਾਇਆ ਕਾਚੀ ਕਾਰਵੀ ਕੇਵਲ ਕਾਚੀ ਧਾਤੁ',
      hi: 'सलोक २२२: काइआ काची कारवी केवल काची धातु',
      en: 'Salok 222: This body is a fragile clay pot, made of raw elements.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਇਆ ਕਾਚੀ ਕਾਰਵੀ ਕੇਵਲ ਕਾਚੀ ਧਾਤੁ ॥',
      'ਸਾਬਤੁ ਰਖਹਿ ਤ ਰਾਮ ਭਜੁ ਨਾਹਿ ਨ ਬਿਨਠੀ ਬਾਤ ॥੨੨੨॥',
    ],
    moolDevanagari: [
      'कबीर काइआ काची कारवी केवल काची धातु ॥',
      'साबतु रखहि त राम भजु नाहि न बिनठी बात ॥२२२॥',
    ],
    moolRoman: [
      'Kabeer kaaiaa kaachee kaaravee keval kaachee dhaatu ||',
      'Saabatu rakhahi ta raam bhaju naahi na binathee baat ||222||',
    ],
    shabdarth: [
      {
        word: 'ਕਾਰਵੀ / कारवी',
        meaning: {
          pb: 'ਕੱਚੀ ਮਿੱਟੀ ਦੀ ਮਟਕੀ / ਕੁਲ੍ਹੜ',
          hi: 'कच्ची मिट्टी की मटकी / कुल्हड़',
          en: 'Fragile small clay pot',
        },
      },
      {
        word: 'ਬਿਨਠੀ / बिनठी',
        meaning: {
          pb: 'ਨਾਸ ਹੋ ਜਾਵੇਗੀ / ਵਿਗੜ ਜਾਵੇਗੀ',
          hi: 'नष्ट हो जाएगी / बिगड़ जाएगी',
          en: 'Will perish / break',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਸਰੀਰ ਕੱਚੀ ਮਿੱਟੀ ਦੀ ਮਟਕੀ ਦੀ ਤਰ੍ਹਾਂ ਹੈ, ਜੋ ਬੇਹੱਦ ਨਾਜ਼ੁਕ ਹੈ। ਜੇਕਰ ਇਸ ਮਨੁੱਖਾ ਜਨਮ ਨੂੰ ਸਫਲ ਕਰਨਾ ਹੈ (ਸਾਬਤ ਰੱਖਣਾ ਹੈ), ਤਾਂ ਰਾਮ ਦਾ ਭਜਨ ਕਰ, ਨਹੀਂ ਤਾਂ ਇਹ ਨਿਰਸੰਦੇਹ ਨਾਸ ਹੋ ਜਾਵੇਗਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यह मानव शरीर मिट्टी की एक कच्ची कुल्हड़ (मटकी) की तरह है, जो अत्यंत क्षणभंगुर है। यदि तुम इस जीवन को सफल व अमर (साबुत) रखना चाहते हो, तो राम का सुमिरन करो, अन्यथा यह नष्ट हो जाएगा।',
      en: 'Satguru Kabir Saheb proclaims: This body is like a fragile container of unbaked clay, highly perishable. If you wish to preserve its true essence and make it successful, contemplate the Lord; otherwise, it will collapse and break.',
    },
    chintan: {
      pb: 'ਸਰੀਰਕ ਸੁੰਦਰਤਾ ਅਤੇ ਤਾਕਤ ਦਾ ਅਹੰਕਾਰ ਝੂਠਾ ਹੈ, ਕਿਉਂਕਿ ਇਹ ਕੱਚੀ ਮਿੱਟੀ ਵਾਂਗ ਢਹਿ ਜਾਣ ਵਾਲਾ ਹੈ।',
      hi: 'शारीरिक सौंदर्य और बल का घमंड व्यर्थ है, क्योंकि यह अत्यंत क्षणभंगुर और नश्वर मिट्टी है।',
      en: 'Physical beauty and strength are transient; do not take pride in this perishable form of clay.',
    },
    acharana: {
      pb: 'ਸਰੀਰ ਦੇ ਨਾਸ਼ਵਾਨ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਹੋ ਕੇ ਜੀਵਨ ਨੂੰ ਸਾਰਥਕ ਬਣਾਓ।',
      hi: 'शरीर के विनष्ट होने से पूर्व प्रभु सुमिरन में लीन होकर अपने जीवन को सार्थक बनाएं।',
      en: 'Utilize this fragile instrument of the body for devotional practice before it dissolves back into dust.',
    },
    samarpan: {
      pb: 'ਇਸ ਕੱਚੀ ਦੇਹੀ ਨੂੰ ਪਰਮੇਸ਼ੁਰ ਦੀ ਸੇਵਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'इस नश्वर काया को ईश्वर की सेवा और भक्ति में समर्पित करें।',
      en: 'Offer this physical container as a vessel of worship and service to the Supreme Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 223 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-223',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੩: ਕੇਸੋ ਕੇਸੋ ਕੂਕੀਐ ਨ ਸੋਈਐ ਅਸਾਰ',
      hi: 'सलोक २२३: केसो केसो कूकीऐ न सोईऐ असार',
      en: 'Salok 223: Cry out the Name of Keshav; do not sleep in heedlessness.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕੇਸੋ ਕੇਸੋ ਕੂਕੀਐ ਨ ਸੋਈਐ ਅਸਾਰ ॥',
      'ਰਾਤਿ ਦਿਵਸ ਕੇ ਕੂਕਨੇ ਕਬਹੂ ਕੇ ਸੁਨੈ ਪੁਕਾਰ ॥੨੨੩॥',
    ],
    moolDevanagari: [
      'कबीर केसो केसो कूकीऐ न सोईऐ असार ॥',
      'राति दिवस के कूकने कबहू के सुनै पुकार ॥२२३॥',
    ],
    moolRoman: [
      'Kabeer keso keso kookeeai na soeeai asaar ||',
      'Raati divas ke kookane kabahoo ke sunai pukaar ||223||',
    ],
    shabdarth: [
      {
        word: 'ਕੇਸੋ / केसो',
        meaning: {
          pb: 'ਕੇਸ਼ਵ (ਪ੍ਰਮਾਤਮਾ)',
          hi: 'केशव (परमात्मा)',
          en: 'Keshav / God',
        },
      },
      {
        word: 'ਅਸਾਰ / असार',
        meaning: {
          pb: 'ਬੇ-ਖਬਰ / ਬੇ-ਪ੍ਰਵਾਹ ਹੋ ਕੇ',
          hi: 'असावधान / बेखबर होकर',
          en: 'In heedless slumber',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸਾਨੂੰ ਹਮੇਸ਼ਾ ਸੁਆਸ-ਸੁਆਸ ਕੇਸ਼ਵ (ਪ੍ਰਮਾਤਮਾ) ਦਾ ਨਾਮ ਜਪਦੇ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਕਦੇ ਵੀ ਬੇ-ਖ਼ਬਰ ਹੋ ਕੇ (ਮੋਹ-ਮਾਇਆ ਦੀ ਨੀਂਦ ਵਿੱਚ) ਨਹੀਂ ਸੌਣਾ ਚਾਹੀਦਾ। ਦਿਨ-ਰਾਤ ਨਿਰੰਤਰ ਪੁਕਾਰਨ ਨਾਲ, ਪਰਮੇਸ਼ੁਰ ਕਦੇ ਨਾ ਕਦੇ ਸਾਡੀ ਬੇਨਤੀ ਜ਼ਰੂਰ ਸੁਣ ਲਵੇਗਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-निरंतर कूटते रहें, अज्ञानता की नींद में न सोएं। दिन-रात निरंतर पुकारने से कभी न कभी दयालु परमात्मा आपकी करुण पुकार अवश्य ही सुन लेंगे।',
      en: 'Satguru Kabir Saheb proclaims: Continually call upon the Lord (Keshav); do not slumber in deep spiritual ignorance and heedlessness. By crying out to Him day and night, the compassionate Lord will eventually hear your prayer.',
    },
    chintan: {
      pb: 'ਨਿਰੰਤਰ ਅਭਿਆਸ ਅਤੇ ਅਣਥੱਕ ਅਰਦਾਸ ਹੀ ਪਰਮਾਤਮਾ ਨਾਲ ਮਿਲਾਪ ਦਾ ਮਾਰਗ ਪ੍ਰਸ਼ਸਤ ਕਰਦੀ ਹੈ।',
      hi: 'निरंतर अभ्यास और सच्ची प्रार्थना ही जीवात्मा को परमात्मा से जोड़ती है।',
      en: 'Consistent, heartfelt prayers and tireless remembrance will inevitably reach the Divine ear.',
    },
    acharana: {
      pb: 'ਆਲਸ ਅਤੇ ਬੇ-ਪ੍ਰਵਾਹੀ ਨੂੰ ਤਿਆਗ ਕੇ ਹਰ ਸਮੇਂ ਜਾਗਰੂਕ ਅਵਸਥਾ ਵਿੱਚ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'आलस्य और अचेतता को त्यागकर सदैव जागरूक अवस्था में प्रभु का सिमरन करें।',
      en: 'Renounce laziness and spiritual sleep; maintain dynamic mindfulness in daily meditation.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਜਾਗਦੀ ਹੋਈ ਸੁਰਤ ਅਤੇ ਹਰੇਕ ਪੁਕਾਰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी चेतना की जागृत अवस्था और प्रत्येक प्रार्थना प्रभु चरणों में अर्पित करें।',
      en: 'Surrender your complete awareness and every call of your heart to the Divine Presence.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 224 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-224',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੪: ਕਾਇਆ ਕਜਲੀ ਬਨੁ ਭਇਆ ਮਨੁ ਕੁੰਚਰੁ ਮਯ ਮੰਤੁ',
      hi: 'सलोक २४: काइआ कजली बनु भइआ मनु कुंचरु मय मंतु',
      en: 'Salok 224: This body is like a dense banana forest, and the mind is an intoxicated elephant.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਕਾਇਆ ਕਜਲੀ ਬਨੁ ਭਇਆ ਮਨੁ ਕੁੰਚਰੁ ਮਯ ਮੰਤੁ ॥',
      'ਅੰਕਸੁ ਗਾਨੁ ਰਤਨੁ ਹੈ ਖੇਵਟੁ ਬਿਰਲਾ ਸੰਤੁ ॥...',
    ],
    moolDevanagari: [
      'कबीर काइआ कजली बनु भइआ मनु कुंचरु मय मंतु ॥',
      'अंकसु गानु रतनु है खेवटु बिरला संतु ॥२२४॥',
    ],
    moolRoman: [
      'Kabeer kaaiaa kajalee banu bhaiaa manu kuncharu may mantu ||',
      'Ankasu gaanu ratanu hai khevatu birlaa santu ||224||',
    ],
    shabdarth: [
      {
        word: 'ਕਜਲੀ ਬਨੁ / कजली बनु',
        meaning: {
          pb: 'ਕੇਲਿਆਂ ਦਾ ਸੰਘਣਾ ਜੰਗਲ',
          hi: 'कजली वन / केलों का घना वन',
          en: 'Dense banana forest / jungle of desires',
        },
      },
      {
        word: 'ਕੁੰਚਰੁ / कुंचरु',
        meaning: {
          pb: 'ਹਾਥੀ',
          hi: 'हाथी',
          en: 'Elephant',
        },
      },
      {
        word: 'ਅੰਕਸੁ / अंकसु',
        meaning: {
          pb: 'ਹਾਥੀ ਨੂੰ ਕਾਬੂ ਕਰਨ ਵਾਲਾ ਕੁੰਡਾ',
          hi: 'हाथी को वश में करने का अंकुश',
          en: 'Ankush / elephant goad',
        },
      },
      {
        word: 'ਖੇਵਟੁ / खेवटु',
        meaning: {
          pb: 'ਹਾਥੀ ਨੂੰ ਚਲਾਉਣ ਵਾਲਾ (ਮਹਾਵਤ)',
          hi: 'चलाने वाला (महावत)',
          en: 'Guide / mahout / driver',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਹ ਸਰੀਰ ਕਾਮ-ਵਾਸਨਾਵਾਂ ਨਾਲ ਭਰਿਆ ਇੱਕ ਸੰਘਣਾ ਕੇਲਿਆਂ ਦਾ ਜੰਗਲ ਹੈ, ਜਿਸ ਵਿੱਚ ਮਨ ਇੱਕ ਮਸਤ ਹਾਥੀ ਬਣਿਆ ਹੋਇਆ ਹੈ। ਗੁਰੂ ਦਾ ਗਿਆਨ ਰੂਪੀ ਅੰਕੁਸ਼ ਇੱਕ ਅਨਮੋਲ ਰਤਨ ਹੈ ਅਤੇ ਇਸ ਅੰਕੁਸ਼ ਰਾਹੀਂ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰਨ ਵਾਲਾ ਕੋਈ ਵਿਰਲਾ ਹੀ ਸੰਤ ਹੁੰਦਾ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-यह मानव शरीर वासनाओं का घना कजली वन है, और इसमें मन एक उन्मत्त, मस्त हाथी के समान भटक रहा है। गुरुदेव का दिव्य ज्ञान रूपी अंकुश ही वह रत्न है जो इस मदमस्त मन को नियंत्रित कर सकता है, और इस अंकुश को चलाने वाला महावत कोई विरला संत ही होता है।',
      en: 'Satguru Kabir Saheb proclaims: This body is like a dense jungle of impulses, and the mind is like an untamed, intoxicated elephant roaming within it. The jewel of divine wisdom is the goad (ankush) to restrain it, and rare is the saintly driver who knows how to apply it.',
    },
    chintan: {
      pb: 'ਮਨ ਦੀ ਮਸਤੀ ਅਤੇ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਦੀ ਭਟਕਣਾ ਨੂੰ ਕੇਵਲ ਗੁਰਮਤਿ ਗਿਆਨ ਰਾਹੀਂ ਹੀ ਕਾਬੂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
      hi: 'मन की चंचलता और विकारों की भटकान को केवल गुरु के ज्ञान द्वारा ही नियंत्रित किया जा सकता है।',
      en: 'The wild nature of the mind can only be curbed using the precious tool of spiritual wisdom.',
    },
    acharana: {
      pb: 'ਗੁਰੂ ਦੇ ਗਿਆਨ-ਉਪਦੇਸ਼ ਨੂੰ ਅੰਕੁਸ਼ ਬਣਾ ਕੇ ਆਪਣੇ ਬੇਕਾਬੂ ਮਨ ਨੂੰ ਸੱਚੇ ਮਾਰਗ ਤੇ ਤੋਰੋ।',
      hi: 'गुरु के ज्ञान-उपदेश को अंकुश बनाकर अपने बेकाबू मन को सन्मार्ग पर चलाएं।',
      en: 'Adopt the Guru\'s teachings as a goad to guide and direct your untamed mind along the path of truth.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਦੀ ਚਾਲ ਅਤੇ ਬੁੱਧੀ ਨੂੰ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने मन के अहंकार और उसकी दिशा को सतगुरु के चरणों में अर्पित करें।',
      en: 'Surrender the reins and direction of your mind completely to the guidance of the Enlightener.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 225 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-225',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੫: ਰਾਮ ਰਤਨੁ ਮੁਖੁ ਕੋਥਰੀ ਪਾਰਖ ਆਗੈ ਖੋਲਿ',
      hi: 'सलोक २२५: राम रतनु मुखु कोथरी पारख आगै खोलि',
      en: 'Salok 225: The Lord\'s Name is a priceless jewel; keep it in the purse of your mouth.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮ ਰਤਨੁ ਮੁਖੁ ਕੋਥਰੀ ਪਾਰਖ ਆਗੈ ਖੋਲਿ ॥',
      'ਕੋਈ ਆਇ ਮਿਲੈਗੋ ਗਾਹਕੀ ਲੇ ਗੋ ਮਹਗੇ ਮੋਲਿ ॥੨੨੫॥',
    ],
    moolDevanagari: [
      'कबीर राम रतनु मुखु कोथरी पारख आगै खोलि ॥',
      'कोई आइ मिलैगो गाहकी ले गो महगे मोलि ॥२२५॥',
    ],
    moolRoman: [
      'Kabeer raam ratanu mukhu kotharee paarakh aagai kholi ||',
      'Koee aai milaigo gaahakee le go mahage moli ||225||',
    ],
    shabdarth: [
      {
        word: 'ਕੋਥਰੀ / कोथरी',
        meaning: {
          pb: 'ਗੁੱਥੀ / ਥੈਲੀ',
          hi: 'थैली / गठरी',
          en: 'Small bag / purse',
        },
      },
      {
        word: 'ਪਾਰਖ / पारख',
        meaning: {
          pb: 'ਕਦਰਦਾਨ / ਗਿਆਨੀ',
          hi: 'पारखी / कद्रदान',
          en: 'Connoisseur / spiritual evaluator',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪਰਮਾਤਮਾ ਦਾ ਨਾਮ ਇੱਕ ਬੇਸ਼ਕੀਮਤੀ ਰਤਨ ਹੈ, ਆਪਣੇ ਮੁੱਖ ਨੂੰ ਇਸ ਰਤਨ ਦੀ ਗੁੱਥੀ (ਥੈਲੀ) ਬਣਾ ਕੇ ਰੱਖੋ। ਇਸ ਗਿਆਨ ਦੀ ਥੈਲੀ ਨੂੰ ਕੇਵਲ ਉਸ ਪਾਰਖੂ (ਗਿਆਨੀ ਜਗਿਆਸੂ) ਸਾਹਮਣੇ ਹੀ ਖੋਲ੍ਹੋ ਜੋ ਇਸ ਦੀ ਕਦਰ ਕਰਦਾ ਹੋਵੇ; ਕੋਈ ਸੱਚਾ ਗਾਹਕ ਮਿਲੇਗਾ ਜੋ ਆਪਣਾ ਤਨ-ਮਨ ਵਾਰ ਕੇ ਇਸ ਨੂੰ ਮਹਿੰਗੇ ਮੁੱਲ ਖਰੀਦ ਲਵੇਗਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-राम का नाम एक बहुमूल्य रत्न है, अपने मुख को इस रत्न को सहेजने वाली कोथली (थैली) बना लें। इस थैली को केवल किसी सच्चे पारखी (ज्ञानी) के समक्ष ही खोलें; कोई ऐसा खोजी ग्राहक अवश्य मिलेगा, जो अपना सर्वस्व अर्पण कर इसे अत्यधिक मूल्य पर सहर्ष ग्रहण कर लेगा।',
      en: 'Satguru Kabir Saheb proclaims: The Lord\'s Name is an invaluable jewel; make your mouth the secure pouch to keep it. Open this spiritual pouch only before a true evaluator of truth; eventually, a devoted buyer will arrive and purchase it at a premium price.',
    },
    chintan: {
      pb: 'ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਅਤੇ ਨਾਮ ਦੀ ਚਰਚਾ ਕੇਵਲ ਯੋਗ ਅਤੇ ਸੱਚੇ ਜਗਿਆਸੂਆਂ ਨਾਲ ਹੀ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
      hi: 'अध्यात्म के गहरे रहस्यों और नाम की महिमा की चर्चा केवल योग्य और सुपात्र जिज्ञासुओं से ही करें।',
      en: 'Discuss the profound mysteries of devotion and spiritual practice only with sincere, qualified seekers.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਵਾਣੀ ਨੂੰ ਸੰਜਮ ਵਿੱਚ ਰੱਖੋ ਅਤੇ ਕੇਵਲ ਗੁਣਵਾਨ ਸਤਸੰਗੀਆ ਅੱਗੇ ਹੀ ਗਿਆਨ ਸਾਂਝਾ ਕਰੋ।',
      hi: 'अपनी वाणी में गंभीरता लाएं और केवल सच्चे साधकों के समक्ष ही ज्ञान का प्रकटीकरण करें।',
      en: 'Practice restraint in speech; share divine wisdom exclusively with genuine companions of truth.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਭਗਤੀ ਅਤੇ ਜੀਵਨ-ਕਰਮਾਂ ਨੂੰ ਪਰਮੇਸ਼ੁਰ ਦੀ ਰਜ਼ਾ ਅਨੁਸਾਰ ਸੰਭਾਲ ਕੇ ਰੱਖੋ।',
      hi: 'अपने ज्ञान और भक्ति-धन को परमात्मा के चरणों में सुरक्षित व समर्पित रखें।',
      en: 'Safeguard your spiritual wealth and surrender your understanding to the Divine Wisdom.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩造੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 226 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-226',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੬: ਰਾਮ ਨਾਮੁ ਜਾਨਿਓ ਨਹੀਂ ਪਾਲਿਓ ਕਟਕੁ ਕੁਟੰਬੁ',
      hi: 'सलोक २२६: राम नामु जानिओ नही पालिओ कटकु कुट्मबु',
      en: 'Salok 226: The mortal did not recognize the Lord\'s Name, and fed his large family.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਰਾਮ ਨਾਮੁ ਜਾਨਿਓ ਨਹੀਂ ਪਾਲਿਓ ਕਟਕੁ ਕੁਟੰਬੁ ॥',
      'ਧੰਧੇ ਹੀ ਮਹਿ ਮਰਿ ਗਇਓ ਬਾਹਰਿ ਭਈ ਨ ਬੰਬ ॥੨੨੬॥',
    ],
    moolDevanagari: [
      'कबीर राम नामु जानिओ नहीं पालिओ कटकु कुट्मबु ॥',
      'धंधे ही महि मरि गइओ बाहरਿ भई न बंब ॥२२६॥',
    ],
    moolRoman: [
      'Kabeer raam naamu jaanio nahee paalio kataku kutambu ||',
      'Dhandhe hee mahi mari gaio baahari bhee na bamb ||226||',
    ],
    shabdarth: [
      {
        word: 'ਕਟਕੁ / कटकु',
        meaning: {
          pb: 'ਫੌਜ (ਵੱਡਾ ਟੱਬਰ)',
          hi: 'सेना (बड़ा परिवार)',
          en: 'Large family / relative army',
        },
      },
      {
        word: 'ਬੰਬ / बंब',
        meaning: {
          pb: 'ਆਵਾਜ਼ / ਨਾਮ ਦੀ ਪੁਕਾਰ',
          hi: 'आवाज / नाम की पुकार',
          en: 'Sound / call of devotion',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਮਨੁੱਖ ਨੇ ਸਾਰੀ ਉਮਰ ਰਾਮ ਦੇ ਨਾਮ ਦੀ ਮਹਿਮਾ ਨੂੰ ਨਹੀਂ ਸਮਝਿਆ ਅਤੇ ਕੇਵਲ ਆਪਣੇ ਵੱਡੇ ਪਰਿਵਾਰ ਦੀ ਪਾਲਣਾ ਕਰਨ ਵਿੱਚ ਹੀ ਲੱਗਾ ਰਿਹਾ। ਉਹ ਸੰਸਾਰ ਦੇ ਧੰਦਿਆਂ ਵਿੱਚ ਹੀ ਖਪ ਕੇ ਮਰ ਗਿਆ, ਪਰ ਉਸਦੇ ਮੁੱਖ ਤੋਂ ਕਦੇ ਵੀ ਰਾਮ ਨਾਮ ਦੀ ਪੁਕਾਰ ਨਹੀਂ ਨਿਕਲੀ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मनुष्य ने जीवन भर राम-नाम के सच्चे महत्व को नहीं जाना, केवल अपने बड़े परिवार (कुनबे) को पालने में ही व्यस्त रहा। वह संसार के प्रपंचों और धंधों में ही समाप्त हो गया, पर उसके कंठ से कभी प्रभु-स्मरण की पुकार नहीं गूंजी।',
      en: 'Satguru Kabir Saheb proclaims: The mortal never recognized the true value of the Lord\'s Name, and remained occupied only in feeding his large family. He died entangled in mundane chores, and his mouth never uttered the call of devotion.',
    },
    chintan: {
      pb: 'ਕੇਵਲ ਪਰਿਵਾਰਕ ਮੋਹ ਅਤੇ ਸੰਸਾਰਿਕ ਜੰਜਾਲਾਂ ਵਿੱਚ ਫਸ ਕੇ ਜੀਵਨ ਬਤੀਤ ਕਰਨਾ ਅੰਤ ਵਿੱਚ ਬਹੁਤ ਵੱਡੀ ਹਾਰ ਹੈ।',
      hi: 'केवल पारिवारिक मोह और सांसारिक कर्तव्यों के जंजाल में फंसकर जीवन समाप्त करना भारी भूल है।',
      en: 'To live solely for family attachment and worldly chores, neglecting inner growth, is a profound waste.',
    },
    acharana: {
      pb: 'ਸੰਸਾਰਿਕ ਫਰਜ਼ ਨਿਭਾਉਂਦਿਆਂ ਹੋਇਆਂ ਵੀ ਪ੍ਰਭੂ ਨਾਮ ਦੇ ਸਿਮਰਨ ਨੂੰ ਮੁੱਖ ਅਧਾਰ ਬਣਾਓ।',
      hi: 'सांसारिक दायित्वों को निभाते हुए भी प्रभु भक्ति को अपने जीवन का मुख्य आधार बनाएं।',
      en: 'While fulfilling family duties, ensure that the remembrance of God remains your core anchor.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਿੰਤਾ ਅਤੇ ਸੰਸਾਰਿਕ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਹੁਕਮ ਵਿੱਚ ਸੌਂਪ ਦਿਓ।',
      hi: 'अपनी समस्त चिंताओं और पारिवारिक कर्तव्यों को ईश्वर की इच्छा पर समर्पित करें।',
      en: 'Surrender your domestic anxieties and duties into the hands of the All-Sustaining Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 227 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-227',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੭: ਆਖੀ ਕੇਰੇ ਮਾਟੁਕੇ ਪਲੁ ਪਲੁ ਗਈ ਬਿਹਾਇ',
      hi: 'सलोक २२७: आखी केरे माटुके पलु पलु गई बिहाइ',
      en: 'Salok 227: In the blinking of an eye, moments of life pass away.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਆਖੀ ਕੇਰੇ ਮਾਟੁਕੇ ਪਲੁ ਪਲੁ ਗਈ ਬਿਹਾਇ ॥',
      'ਮਨੁ ਜੰਜਾਲੁ ਨ ਛੋਡਈ ਜਮ ਦੀਆ ਦਮਾਮਾ ਆਇ ॥੨੨੭॥',
    ],
    moolDevanagari: [
      'कबीर आखी केरे माटुके पलु पलु गई बिहाइ ॥',
      'मनु जंजालु न छोडई जम दीआ दमामा आइ ॥२२७॥',
    ],
    moolRoman: [
      'Kabeer aakhee kere maatuke palu palu gee bihaai ||',
      'Manu janjaalu na dhodai jam deeaa damaamaa aai ||227||',
    ],
    shabdarth: [
      {
        word: 'ਮਾਟੁਕੇ / माटुके',
        meaning: {
          pb: 'ਅੱਖ ਝਮਕਣਾ',
          hi: 'पलक झपकाना / इशारा',
          en: 'Blinking of an eye',
        },
      },
      {
        word: 'ਦਮਾਮਾ / दमामा',
        meaning: {
          pb: 'ਨਗਾਰਾ / ਮੌਤ ਦਾ ਡੰਕਾ',
          hi: 'नगाड़ा / मृत्यु का डंका',
          en: 'Kettle-drum of death',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਅੱਖਾਂ ਝਮਕਣ ਦੇ ਸਮੇਂ ਵਿੱਚ ਹੀ ਮਨੁੱਖ ਦਾ ਕੀਮਤੀ ਜੀਵਨ ਪਲ-ਪਲ ਕਰਕੇ ਬੀਤਦਾ ਜਾ ਰਿਹਾ ਹੈ। ਪਰ ਫਿਰ ਵੀ ਉਸਦਾ ਮਨ ਸੰਸਾਰ ਦੇ ਜੰਜਾਲਾਂ ਨੂੰ ਨਹੀਂ ਤਿਆਗਦਾ, ਅਤੇ ਅੰਤ ਨੂੰ ਮੌਤ ਦੇ ਜਮਦੂਤਾਂ ਨੇ ਆ ਕੇ ਉਸਦੇ ਦਰਵਾਜ਼ੇ ਤੇ ਕੂਚ ਦਾ ਨਗਾਰਾ ਵਜਾ ਦਿੱਤਾ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-आँखों के पलक झपकने की अल्प अवधि की तरह मानव जीवन का अमूल्य समय पल-पल बीतता जा रहा है। पर विडंबना यह है कि मन फिर भी सांसारिक प्रपंचों को नहीं छोड़ता, और अंततः यमराज ने आकर मृत्यु का डंका (नगाड़ा) बजा ही दिया।',
      en: 'Satguru Kabir Saheb proclaims: In the mere blinking of an eye, the precious moments of life slip away, yet the mind refuses to abandon worldly entanglements. At last, the Messenger of Death arrives and beats his drum, signaling departure.',
    },
    chintan: {
      pb: 'ਸਮਾਂ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਨਿਕਲ ਰਿਹਾ ਹੈ, ਅੱਜ ਦੇ ਕਾਰਜ ਨੂੰ ਕੱਲ੍ਹ ਤੇ ਟਾਲਣਾ ਬੇਅਕੂਫੀ ਹੈ।',
      hi: 'समय अत्यंत वेग से निकल रहा है, भजन-सुमिरन के अवसर को कल पर टालना आत्मघाती है।',
      en: 'Time is fleeting; postponing remembrance and self-realization to tomorrow is a great delusion.',
    },
    acharana: {
      pb: 'ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ, ਜੀਵਨ ਦੇ ਅੰਤਿਮ ਪਲਾਂ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਵਿੱਚ ਲੱਗੋ।',
      hi: 'सांसारिक भ्रम-जाल को त्यागकर, जीवन के अंतिम क्षणों के आने से पहले हरि सुमिरन में जुटें।',
      en: 'Break free from spiritual inertia; engage in divine contemplation before the final drum of death beats.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਚਲਦੀ ਹੋਈ ਉਮਰ ਅਤੇ ਸਵਾਸਾਂ ਨੂੰ ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਅੱਗੇ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी आयु के प्रत्येक क्षण और सांस को परमात्मा की भक्ति में समर्पित करें।',
      en: 'Surrender your declining moments and each breath of life to the worship of the Infinite.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 228 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-228',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੮: ਤਰਵਰ ਰੂਪੀ ਰਾਮੁ ਹੈ ਫਲ ਰੂਪੀ ਬੈਰਾਗੁ',
      hi: 'सलोक २२८: तरवर रूपी रामु है फल रूपी बैरागु',
      en: 'Salok 228: The Lord is the tree, and detached devotion is the fruit.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਤਰਵਰ ਰੂਪੀ ਰਾਮੁ ਹੈ ਫਲ ਰੂਪੀ ਬੈਰਾਗੁ ॥',
      'ਛਾਇਆ ਰੂਪੀ ਸਾਧੁ ਹੈ ਜਿਨਿ ਤਜਿਆ ਬਾਦੁ ਬਿਬਾਦੁ ॥੨੨੮॥',
    ],
    moolDevanagari: [
      'कबीर तरवर रूपी रामु है फल रूपी बैरागु ॥',
      'छाइआ रूपी साधु है जिनि तजिआ बादु बिबादु ॥२२८॥',
    ],
    moolRoman: [
      'Kabeer taravar roopee raamu hai fal roopee bairaagu ||',
      'Chhaiaa roopee saadhu hai jini tajiaa baadu bibaadu ||228||',
    ],
    shabdarth: [
      {
        word: 'ਤਰਵਰ / तरवर',
        meaning: {
          pb: 'ਸ੍ਰੇਸ਼ਟ ਰੁੱਖ (ਬਿੱਛ)',
          hi: 'श्रेष्ठ वृक्ष / कल्पवृक्ष',
          en: 'Sublime tree',
        },
      },
      {
        word: 'ਬਾਦੁ ਬਿਬਾਦੁ / बादु बिबादु',
        meaning: {
          pb: 'ਝਗੜਾ ਅਤੇ ਵਾਦ-ਵਿਵਾਦ',
          hi: 'वाद-विवाद और वैर-विरोध',
          en: 'Conflict and disputes',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪਰਮਾਤਮਾ ਨਾਮ-ਸਰੂਪ ਇੱਕ ਵਿਸ਼ਾਲ ਰੁੱਖ ਹੈ ਅਤੇ ਸੰਸਾਰ ਤੋਂ ਉਦਾਸੀ (ਵੈਰਾਗ) ਉਸਦਾ ਮਿੱਠਾ ਫਲ ਹੈ। ਸਾਧੂ ਜਨ ਉਸ ਰੁੱਖ ਦੀ ਸ਼ੀਤਲ ਛਾਂ ਦੀ ਤਰ੍ਹਾਂ ਹਨ, ਜਿਨ੍ਹਾਂ ਨੇ ਸੰਸਾਰ ਦੇ ਵਿਅਰਥ ਝਗੜੇ ਅਤੇ ਵਾਦ-ਵਿਵਾਦ ਤਿਆਗ ਦਿੱਤੇ ਹਨ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-परमात्मा एक विशाल कल्पवृक्ष के समान है और सांसारिक आसक्तियों से मुक्ति (वैराग्य) उसका दिव्य फल है। ऐसे शीतल वृक्ष की सुखद छाया संत पुरुष हैं, जिन्होंने संसार के व्यर्थ वाद-विवाद, वैर-विरोध और प्रपंचों को पूर्णतः त्याग दिया है।',
      en: 'Satguru Kabir Saheb proclaims: The Lord is like a grand, wish-fulfilling tree, and detached devotion (Vairagya) is its sweet fruit. Holy saints are like the cool shade of this tree, having completely abandoned useless disputes and conflicts.',
    },
    chintan: {
      pb: 'ਵਿਅਰਥ ਦੇ ਵਾਦ-ਵਿਵਾਦ ਤੋਂ ਦੂਰ ਰਹਿ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ-ਰੁੱਖ ਦੀ ਸ਼ਰਨ ਲੈਣੀ ਹੀ ਪਰਮ ਸੁੱਖ ਹੈ।',
      hi: 'व्यर्थ के वाद-विवाद से दूर रहकर प्रभु नाम रूपी वृक्ष की शीतल शरण लेना ही परम कल्याण है।',
      en: 'Abstaining from arguments and taking shelter under the shade of devotion brings supreme tranquility.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਜੀਵਨ ਵਿੱਚੋਂ ਵਾਦ-ਵਿਵਾਦ ਨੂੰ ਤਿਆਗ ਕੇ ਸਾਧੂਆਂ ਵਾਂਗ ਸ਼ਾਂਤ ਅਤੇ ਸ਼ੀਤਲ ਸੁਭਾਅ ਧਾਰਨ ਕਰੋ।',
      hi: 'अपने स्वभाव से कलह और विवाद मिटाकर संतों की भाँति गंभीर और शीतल बनें।',
      en: 'Eradicate argumentative tendencies from your behavior; cultivate peace and humility like the saints.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਨੂੰ ਵਾਦ-ਵਿਵਾਦ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਰਾਮ ਨਾਮ ਦੇ ਫਲ ਵਿੱਚ ਲਗਾਓ।',
      hi: 'अपनी बुद्धि को व्यर्थ विवादों से हटाकर राम-भक्ति के चरणों में समर्पित करें।',
      en: 'Divert your intellect from meaningless arguments; surrender your mind to the sweet fruit of devotion.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 229 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-229',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੨੯: ਐਸਾ ਬੀਜੁ ਬੋਇ ਬਾਰਹ ਮਾਸ ਫਲੰਤ',
      hi: 'सलोक २२९: ऐसा बीजु बोइ बारह मास फलंत',
      en: 'Salok 229: Sow such a seed of devotion which bears fruit all twelve months.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਐਸਾ ਬੀਜੁ ਬੋਇ ਬਾਰਹ ਮਾਸ ਫਲੰਤ ॥',
      'ਸੀਤਲ ਛਾਇਆ ਗਹਿਰ ਫਲ ਪੰਖੀ ਕੇਲ ਕਰੰਤ ॥੨੨੯॥',
    ],
    moolDevanagari: [
      'कबीर ऐसा बीजु बोइ बारह मास फलंत ॥',
      'सीतल छाइआ गहिर फल पंखी केल करंत ॥२२९॥',
    ],
    moolRoman: [
      'Kabeer aisaa beeju boi baarah maas falant ||',
      'Seetal chhaiaa gahira fal pankhee kel karant ||229||',
    ],
    shabdarth: [
      {
        word: 'ਗਹਿਰ / गहिर',
        meaning: {
          pb: 'ਗੂੜਾ / ਸੰਘਣਾ (ਅਧਿਆਤਮਿਕ ਅਨੰਦ)',
          hi: 'सघन / गहरा (आद्यात्मिक रस)',
          en: 'Dense / deep spiritual fruit',
        },
      },
      {
        word: 'ਕੇਲ / केल',
        meaning: {
          pb: 'ਕਲੋਲ / ਆਤਮਿਕ ਆਨੰਦ',
          hi: 'क्रीड़ा / आध्यात्मिक आनंद',
          en: 'Playful joy / soul-bliss',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੀਵਨ ਵਿੱਚ ਨਾਮ-ਸਿਮਰਨ ਰੂਪੀ ਅਜਿਹਾ ਬੀਜ ਬੀਜੋ, ਜੋ ਬਾਰਾਂ ਮਹੀਨੇ (ਹਰ ਸਮੇਂ) ਫਲਦਾ ਰਹੇ। ਇਸ ਭਗਤੀ ਦੇ ਰੁੱਖ ਦੀ ਛਾਂ ਅਤਿ ਸ਼ੀਤਲ ਹੋਵੇਗੀ, ਫਲ ਬੇਹੱਦ ਸੰਘਣਾ ਹੋਵੇਗਾ, ਅਤੇ ਜੀਵ-ਆਤਮਾ ਰੂਪੀ ਪੰਛੀ ਇਸ ਉੱਤੇ ਬੈਠ ਕੇ ਪਰਮ ਆਨੰਦਮਈ ਕਲੋਲ (ਕੇਲ) ਕਰਨਗੇ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मानव जीवन में राम-सुमिरन का ऐसा दिव्य बीज बोएं, जो बारहों महीने (सदा) भक्ति रस से फलित होता रहे। जिसकी शरण रूपी छाया अत्यंत शीतल होगी, जिसका आध्यात्मिक फल सघन होगा और जीव-आत्मा रूपी पक्षी इस पर बैठकर सदा परमानंद की क्रीड़ा करेंगे।',
      en: 'Satguru Kabir Saheb proclaims: Sow such a seed of devotion which remains eternally fruitful all twelve months. It offers deep, comforting shade and dense, spiritual fruit, where the birds of souls play in absolute joy and bliss.',
    },
    chintan: {
      pb: 'ਨਾਮ-ਸਿਮਰਨ ਦਾ ਫਲ ਅਨਾਦੀ ਹੈ, ਜੋ ਮਨੁੱਖ ਨੂੰ ਹਰ ਰੁੱਤ ਅਤੇ ਸਥਿਤੀ ਵਿੱਚ ਅਨੰਦ ਦਿੰਦਾ ਹੈ।',
      hi: 'प्रभु भक्ति का फल शाश्वत है, जो हर परिस्थिति और काल में जीवात्मा को तृप्त करता है।',
      en: 'The seed of mindfulness yields eternal spiritual joy that remains constant in all seasons of life.',
    },
    acharana: {
      pb: 'ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਬੀਜ ਬੀਜ ਕੇ ਆਪਣੇ ਸੁਭਾਅ ਵਿੱਚ ਸ਼ੀਤਲਤਾ ਅਤੇ ਸੰਤੋਖ ਧਾਰਨ ਕਰੋ।',
      hi: 'ईश्वर प्रेम का बीज बोकर अपने स्वभाव में विनम्रता, शीतलता और संतोष लाएं।',
      en: 'Sow the seeds of love; cultivate a gentle, compassionate, and contented demeanor.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਭਗਤੀ ਅਤੇ ਜੀਵਨ-ਕਰਮਾਂ ਨੂੰ ਨਾਮ ਰੂਪੀ ਅਨਾਦੀ ਰੁੱਖ ਦੇ ਅਧੀਨ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी भक्ति और जीवन के समस्त कर्मों को अकाल पुरख के वृक्ष-स्वरूप में अर्पित करें।',
      en: 'Surrender your devotion and your very life under the protective shade of the Eternal Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 230 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-230',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੩੦: ਕਬੀਰ ਦਾਤਾ ਤਰਵਰੁ ਦਯਾ ਫਲੁ ਉਪਕਾਰੀ ਜੀਵੰਤ',
      hi: 'सलोक २३०: कबीर दाता तरवरु दया फलु उपकारी जीवंत',
      en: 'Salok 230: The giver is the tree, and mercy is the fruit.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਦਾਤਾ ਤਰਵਰੁ ਦਯਾ ਫਲੁ ਉਪਕਾਰੀ ਜੀਵੰਤ ॥',
      'ਪੰਖੀ ਚਲੇ ਦਿਸਾਵਰੀ ਬਿਰਖਾ ਸੁਫਲ ਫਲੰਤ ॥੨੩੦॥',
    ],
    moolDevanagari: [
      'कबीर दाता तरवरु दया फलु उपकारी जीवंत ॥',
      'पंखी चले दिसावरी बिरखा सुफल फलंत ॥२३०॥',
    ],
    moolRoman: [
      'Kabeer daataa taravaru dayaa falu upakaaree jeevant ||',
      'Pankhee chale disaavaree birakhaa sufal falant ||230||',
    ],
    shabdarth: [
      {
        word: 'ਤਰਵਰੁ / तरवरु',
        meaning: {
          pb: 'ਬਿੱਛ / ਰੁੱਖ',
          hi: 'वृक्ष / कल्पवृक्ष',
          en: 'Tree',
        },
      },
      {
        word: 'ਦਿਸਾਵਰੀ / दिसावरी',
        meaning: {
          pb: 'ਹੋਰ ਦੇਸ਼ਾਂ ਨੂੰ',
          hi: 'अन्य देशों व दिशाओं में',
          en: 'To other countries/directions',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਦਾਤਾ ਰੂਪ ਇਕ ਬਿੱਛ ਹੈ, ਜਿਸ ਨੂੰ ਦਇਆ ਦੇ ਫਲ ਲੱਗਦੇ ਹਨ, ਐਸੇ ਦਇਆਵਾਨ ਉਪਕਾਰ ਕਰਨ ਵਾਲੇ ਪੁਰਸ਼ ਸਦਾ (ਜੀਵੰਤ) ਜੀਉਂਦੇ ਹਨ। ਪੰਛੀ, ਸਾਧੂ ਜਨ, ਹੋਰ ਹੋਰ ਦੇਸਾਂ ਨੂੰ ਚਲੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਉਸ ਬਿੱਛ ਨੂੰ ਅਸੀਸਾਂ ਦੇ ਜਾਂਦੇ ਹਨ ਕਿ ਹੇ ਸੁਖਦਾਈ ਬਿੱਛ! ਸਦਾ ਹੀ ਫਲਦਾ ਫੁਲਦਾ ਰਹੇ॥ ੨੩੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-दाता रूप एक वृक्ष है, जिसे दया के फल लगते हैं, ऐसे दयावान परोपकारी पुरुष सदा जीवित रहते हैं। पक्षी (साधु जन) अन्य देशों को चले जाते हैं और उस वृक्ष को अशीष देते हैं कि हे सुखदाई वृक्ष! तू सदा फलदार बना रहे॥ २३०॥',
      en: 'Satguru Kabir Saheb proclaims: The generous giver is like a wish-fulfilling tree that bears the sweet fruit of compassion; such altruistic souls live forever. The birds (holy seekers) migrate to various directions feeding on its fruits, blessing the tree to remain eternally fruitful.',
    },
    chintan: {
      pb: 'ਦਇਆ ਅਤੇ ਪਰਉਪਕਾਰ ਹੀ ਮਨੁੱਖ ਨੂੰ ਸਦਾ ਲਈ ਜੀਉਂਦਾ ਰੱਖਦੇ ਹਨ।',
      hi: 'दया और परोपकार ही मनुष्य को अमर बनाते हैं।',
      en: 'Compassion and charity are the qualities that make a soul truly immortal.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਜੀਵਨ ਵਿਚ ਦਇਆਵਾਨ ਬਣੋ ਅਤੇ ਪਰਉਪਕਾਰ ਦੇ ਕਰਮ ਕਰੋ।',
      hi: 'अपने जीवन में दयालु बनें और परोपकार के कार्य करें।',
      en: 'Cultivate mercy and perform selfless service for others.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਜੀਵਨ ਨੂੰ ਦਇਆ ਅਤੇ ਉਪਕਾਰ ਦੇ ਰਾਹ ਤੇ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने जीवन को दया और परोपकार के मार्ग पर समर्पित करें।',
      en: 'Surrender your life to the path of kindness and benevolence.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 231 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-231',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੩੧: ਸਾਧੂ ਸੰਗੁ ਪਰਾਪਤੀ ਲਿਖਿਆ ਹੋਇ ਲਿਲਾਟ',
      hi: 'सलोक २३१: साधू संगु परापती लिखिया होइ लीलाट',
      en: 'Salok 231: Blessed is the association of holy saints.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਸਾਧੂ ਸੰਗੁ ਪਰਾਪਤੀ ਲਿਖਿਆ ਹੋਇ ਲਿਲਾਟ ॥',
      'ਮੁਕਤਿ ਪਦਾਰਥੁ ਪਾਈਐ ਠਾਕ ਨ ਅਵਘਟ ਘਾਟ ॥੨੩੧॥',
    ],
    moolDevanagari: [
      'कबीर साधू संगु परापती लिखिया होइ लीलाट ॥',
      'मुकति पदारथु पाईऐ ठाक न अवघट घाट ॥२३१॥',
    ],
    moolRoman: [
      'Kabeer saadhoo sangu paraapatee likhiaa hoi lilaat ||',
      'Mukati padaarathu paaeeai thaak na avaghat ghaat ||231||',
    ],
    shabdarth: [
      {
        word: 'ਲਿਲਾਟ / लीलाट',
        meaning: {
          pb: 'ਮੱਥੇ ਦੇ ਭਾਗ / ਲੇਖ',
          hi: 'मस्तक के लेख / भाग्य',
          en: 'Forehead lines / destiny',
        },
      },
      {
        word: 'ਅਵਘਟ ਘਾਟ / अवघट घाट',
        meaning: {
          pb: 'ਔਖੀ ਘਾਟੀ / ਸੰਸਾਰ ਦੇ ਝੰਜਟ',
          hi: 'दुर्गम घाटी / जीवन के कठिन मार्ग',
          en: 'Difficult pass or steep valley',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਸਾਧ ਸੰਗਤ ਦੀ ਉਸ ਮਨੁੱਖ ਨੂੰ ਪ੍ਰਾਪਤੀ ਹੁੰਦੀ ਹੈ, ਜਿਸ ਦੇ (ਲਿਲਾਟ) ਮੱਥੇ ਤੇ ਲੇਖ ਲਿਖਿਆ ਹੋਵੇ ਚੰਗੇ ਭਾਗ ਹੋਣ। ਸਾਧ ਦੀ ਸੰਗਤ ਤੋਂ ਮੁਕਤੀ ਪਦ ਪਾਈਦਾ ਹੈ, ਫਿਰ (ਅਵਘਟ ਘਾਟ) ਔਖੀਆਂ ਘਾਟੀਆਂ ਸੰਸਾਰ ਦੇ ਝੰਜਟ ਉਸ ਨੂੰ (ਚੰਗੇ ਰਸਤੇ ਚਲਣ ਵਿਚ) ਰੋਕ ਨਹੀਂ ਪਾਉਂਦੇ॥ ੨੩੧॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-साधु संगत उसी मनुष्य ਨੂੰ प्राप्त होती है, जिसके मस्तक पर उत्तम भाग्य का लेख लिखा हो। संतों की संगति से मुक्ति रूपी पदार्थ प्राप्त होता है और संसार की कठिन मार्ग रूपी बाधाएँ उसे रोक नहीं पाती हैं॥ २३१॥',
      en: 'Satguru Kabir Saheb proclaims: The association of holy saints is obtained only through fortunate destiny written on one\'s forehead. From the saints, the gift of liberation is attained, and no difficult obstacles of life can hinder one\'s spiritual journey.',
    },
    chintan: {
      pb: 'ਸੰਗਤ ਹੀ ਜੀਵਨ ਨੂੰ ਮੁਕਤੀ ਦੇ ਰਾਹ ਵੱਲ ਲੈ ਜਾਂਦੀ ਹੈ।',
      hi: 'सत्संगत ही जीवन को मुक्ति और कल्याण की ओर ले जाती है।',
      en: 'The company of the wise is the ultimate gateway to inner freedom and peace.',
    },
    acharana: {
      pb: 'ਸਦਾ ਸਾਧੂਆਂ ਅਤੇ ਭਲੇ ਪੁਰਸ਼ਾਂ ਦੀ ਸੰਗਤ ਦੀ ਭਾਲ ਕਰੋ।',
      hi: 'सदैव संतों और उत्तम पुरुषों की संगति करें।',
      en: 'Always seek the company of truth-loving and righteous souls.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਨੂੰ ਸਾਧ ਸੰਗਤ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी बुद्धि और मन को सत्संगति के चरणों में समर्पित करें।',
      en: 'Surrender your mind and intellect to the wisdom of the congregation.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 232 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-232',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੩੨: ਏਕ ਘੜੀ ਆਧੀ ਘਰੀ ਆਧੀ ਹੂੰ ਤੇ ਆਧ',
      hi: 'सलोक २३२: एक घड़ी आधी घरी आधी हूं ते आध',
      en: 'Salok 232: A single moment in communion with the saints is supreme.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਏਕ ਘੜੀ ਆਧੀ ਘਰੀ ਆਧੀ ਹੂੰ ਤੇ ਆਧ ॥',
      'ਭਗਤਨ ਸੇਤੀ ਗੋਸਟੇ ਜੋ ਕੀਨੇ ਸੋ ਲਾਭ ॥੨੩੨॥',
    ],
    moolDevanagari: [
      'कबीर एक घड़ी आधी घरी आधी हूं ते आध ॥',
      'भगतन सेती गोसटे जो कीने सो लाभ ॥२३२॥',
    ],
    moolRoman: [
      'Kabeer ek ghadee aadhee gharee aadhee hoon te aadh ||',
      'Bhagatan seetee goste jo keene so laabh ||232||',
    ],
    shabdarth: [
      {
        word: 'ਘੜੀ / घड़ी',
        meaning: {
          pb: 'ਸਮੇਂ ਦਾ ਇੱਕ ਹਿੱਸਾ (ਲਗਭਗ ੨੪ ਮਿੰਟ)',
          hi: 'समय का एक अंश (लगभग २४ मिनट)',
          en: 'A measure of time (approx. 24 minutes)',
        },
      },
      {
        word: 'ਗੋਸਟੇ / गोसटे',
        meaning: {
          pb: 'ਵਿਚਾਰ ਚਰਚਾ / ਸੰਵਾਦ',
          hi: 'आध्यात्मिक संवाद / सत्संग',
          en: 'Spiritual discussion / discourse',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਇਕ ਘੜੀ ਅੱਧੀ ਘੜੀ ਅਤੇ ਅੱਧੀ ਤੋਂ ਵੀ ਅੱਧੀ। ਜਿਤਨਾ ਸਮਾਂ ਵੀ ਪ੍ਰਭੂ ਦੇ ਭਗਤਾਂ ਨਾਲ ਗਿਆਨ ਚਰਚਾ ਤਥਾ ਸੰਗਤ ਕੀਤੀ ਜਾਵੇ, ਉਹੀ ਲਾਭ ਹੈ॥ ੨੩੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-एक घड़ी, आधी घड़ी, या आधी से भी आधा समय। जितना समय भी ईश्वर के भक्तों के साथ सत्संग और आध्यात्मिक चर्चा में व्यतीत हो, वही सच्चा लाभ है॥ २३२॥',
      en: 'Satguru Kabir Saheb proclaims: Whether for a single hour, half an hour, or even half of that; any time spent in holy discourse and spiritual dialogue with the devotees of the Lord is a pure, eternal benefit.',
    },
    chintan: {
      pb: 'ਸੰਤਾਂ ਨਾਲ ਗੁਜ਼ਾਰਿਆ ਇੱਕ ਪਲ ਵੀ ਵਿਅਰਥ ਨਹੀਂ ਜਾਂਦਾ।',
      hi: 'भक्तों के साथ बिताया गया एक क्षण भी अमूल्य फल देता है।',
      en: 'Even a fleeting moment of true spiritual fellowship yields everlasting spiritual wealth.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਵਿਅਰਥ ਸਮੇਂ ਵਿਚੋਂ ਕੁਝ ਪਲ ਕੱਢ ਕੇ ਪ੍ਰਭੂ ਚਰਚਾ ਕਰੋ।',
      hi: 'व्यर्थ समय में से कुछ पल निकालकर हरि चर्चा में लगाएं।',
      en: 'Utilize any free moments to contemplate and share divine wisdom.',
    },
    samarpan: {
      pb: 'ਸਮੇਂ ਦੇ ਹਰ ਛੋਟੇ ਹਿੱਸੇ ਨੂੰ ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਸਵਾਰੋ।',
      hi: 'अपने समय के प्रत्येक क्षण को संतों की संगति में सार्थक करें।',
      en: 'Surrender your daily schedule to incorporate moments of reflection and sharing.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 233 (Ang 1376) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-233',
    category: 'salok',
    ang: 1376,
    title: {
      pb: 'ਸਲੋਕ ੨੩੩: ਭਾਂਗ ਮਾਛੁਲੀ ਸੁਰਾ ਪਾਨਿ ਜੋ ਜੋ ਪ੍ਰਾਨੀ ਖਾਂਹਿ',
      hi: 'सलोक २३३: भांग माछुली सुरा पानि जो जो प्रानी खांहि',
      en: 'Salok 233: Intoxicants and vices destroy all spiritual merit.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਭਾਂਗ ਮਾਛੁਲੀ ਸੁਰਾ ਪਾਨਿ ਜੋ ਜੋ ਪ੍ਰਾਨੀ ਖਾਂਹਿ ॥',
      'ਤੀਰਥ ਬਰਤ ਨੇਮ ਕੀਏ ਤੇ ਸਭੈ ਰਸਾਤਲਿ ਜਾਂਹਿ ॥੨੩੩॥',
    ],
    moolDevanagari: [
      'कबीर भांग माछुली सुरा पानि जो जो प्रानी खांहि ॥',
      'तीरथ बरत नेम कीए ते सभै रसातलि जांहि ॥२३३॥',
    ],
    moolRoman: [
      'Kabeer bhaang maachhulee suraa paani jo jo praanee khaanhi ||',
      'Teerath barat nem keee te sabhai rasaatali jaanhi ||233||',
    ],
    shabdarth: [
      {
        word: 'ਸੁਰਾ / सुरा',
        meaning: {
          pb: 'ਸ਼ਰਾਬ / ਨਸ਼ਾ',
          hi: 'मदिरा / शराब',
          en: 'Alcohol / liquor',
        },
      },
      {
        word: 'ਰਸਾਤਲਿ / रसातलि',
        meaning: {
          pb: 'ਗਰਕ / ਨਿਸਫਲ / ਪਤਾਲ',
          hi: 'नर्क / पाताल / व्यर्थ चले जाना',
          en: 'Ruined / rendered fruitless / abyss',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਭੰਗ (ਸੁਖਾ) ਪੀਣਾ, ਮੱਛੀ ਮਾਸ ਖਾਣਾ (ਸੁਰਾ) ਸ਼ਰਾਬ ਪੀਣਾ, ਪਾਨ ਖਾਣਾ, ਜਿਹੜਾ ਜਿਹੜਾ ਪੁਰਸ਼ ਵੀ ਕਰਦਾ ਹੈ, ਉਸ ਦੇ ਤੀਰਥ ਇਸ਼ਨਾਨ, ਵਰਤ ਰੱਖਣ ਅਤੇ ਹੋਰ ਚੰਗੇ ਨਿਯਮ ਕੀਤੇ ਹੋਏ (ਤੇ) ਉਹ ਸਾਰੇ ਹੀ (ਰਸਾਤਲਿ) ਗਰਕ ਨਿਸਫਲ ਜਾਂਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਬੁਰੀਆਂ ਚੀਜ਼ਾਂ ਦੇ ਵਰਤਨ ਵਾਲੇ ਦੇ ਕੀਤੇ ਹੋਏ ਕਰਮ, ਧਰਮ ਸਾਰੇ ਹੀ ਬੇਅਰਥ ਜਾਂਦੇ ਹਨ।॥ ੨੩੩ ॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-भांग का नशा करना, मछली (मांसाहार) खाना, शराब पीना और तंबाकू/पान आदि का सेवन जो भी प्राणी करते हैं, उनके द्वारा किए गए तीर्थ, व्रत और नियम आदि सब नष्ट हो जाते हैं और वे रसातल (गर्त) में चले जाते हैं॥ २३३॥',
      en: 'Satguru Kabir Saheb proclaims: Whosoever consumes intoxicants, eats meat, drinks liquor or indulges in harmful habits — all their ritual baths, fasts and disciplined practices are completely wasted and ruined in the abyss of spiritual failure.',
    },
    chintan: {
      pb: 'ਨਸ਼ੇ ਅਤੇ ਮਾਸਾਹਾਰ ਵਰਗੇ ਵਿਕਾਰ ਮਨੁੱਖੀ ਆਤਮਾ ਦੀ ਉੱਨਤੀ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਸ਼ਟ ਕਰ ਦਿੰਦੇ ਹਨ।',
      hi: 'नशीले पदार्थ और तामसिक भोजन मनुष्य के संपूर्ण पुण्य और सात्विकता को नष्ट कर देते हैं।',
      en: 'Intoxicants and impure habits corrupt the temple of the body, washing away any accumulated spiritual merits.',
    },
    acharana: {
      pb: 'ਨਸ਼ੇ, ਮਾਸਾਹਾਰ ਅਤੇ ਹਰ ਪ੍ਰਕਾਰ ਦੇ ਮੰਦ ਵਿਕਾਰਾਂ ਤੋਂ ਸਦਾ ਦੂਰ ਰਹੋ।',
      hi: 'नशीले पदार्थों और अपवित्र आहार से पूरी तरह दूर रहें।',
      en: 'Maintain strict physical and mental purity; stay completely clear of intoxicants and cruelty.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਕਾਇਆ ਅਤੇ ਮਨ ਨੂੰ ਪਵਿੱਤਰ ਰੱਖ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने शरीर और मन को पवित्र रखकर प्रभु के चरणों में समर्पित करें।',
      en: 'Surrender your body and mind to the Divine, keeping them completely pure and undefiled.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੬ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 234 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-234',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੪: ਨੀਚੇ ਲੋਇਨ ਕਰਿ ਰਹਉ ਲੇ ਸਾਜਨ ਘਟ ਮਾਹਿ',
      hi: 'सलोक २३४: नीचे लोइन करि रहउ ले साजन घट माहि',
      en: 'Salok 234: Keeping eyes lowered, I cherish my beloved Lord within.',
    },
    moolGurmukhi: [
      'ਨੀਚੇ ਲੋਇਨ ਕਰਿ ਰਹਉ ਲੇ ਸਾਜਨ ਘਟ ਮਾਹਿ ॥',
      'ਸਭ ਰਸ ਖੇਲਉ ਪੀਅ ਸਉ ਕਿਸੀ ਲਖਾਵਉ ਨਾਹਿ ॥੨੩੪॥',
    ],
    moolDevanagari: [
      'नीचे लोइन करि रहउ ले साजन घट माहि ॥',
      'सभ रस खेलउ पीअ सउ किसी लखावउ नाहि ॥२३४॥',
    ],
    moolRoman: [
      'Neeche loin kari rahau le saajan ghat maahi ||',
      'Sabh ras khelau peea sau kisee lakhaavau naahi ||234||',
    ],
    shabdarth: [
      {
        word: 'ਨੀਚੇ ਲੋਇਨ / नीचे लोइन',
        meaning: {
          pb: 'ਅੱਖਾਂ ਨੀਵੀਆਂ ਰੱਖਣਾ',
          hi: 'नेत्रों को झुकाए रखना',
          en: 'Keeping eyes lowered',
        },
      },
      {
        word: 'ਘਟ ਮਾਹਿ / घट माहि',
        meaning: {
          pb: 'ਹਿਰਦੇ ਦੇ ਅੰਦਰ',
          hi: 'हृदय के भीतर',
          en: 'Inside the heart/soul',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਆਪਣੇ ਸੱਜਣ ਨੂੰ ਹਿਰਦੇ ਵਿਚ ਲੈ ਕੇ (ਸੰਸਾਰ ਵਲੋਂ) ਅੱਖਾਂ ਨੀਂਵੀਆਂ ਕਰ ਰਖੀਆਂ ਹਨ, ਫਿਰ ਉਸ ਪਿਆਰੇ ਸੱਜਣ (ਪ੍ਰਭੂ) ਨਾਲ ਮੈਂ ਸਾਰੇ (ਰਸ) ਅਨੰਦ ਮਾਣਦੀ ਹਾਂ ਅਤੇ ਹੋਰ ਕਿਸੇ ਨੂੰ ਇਸ ਦਾ ਭੇਤ ਨਹੀਂ ਦਸਦੀ॥ ੨੪॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-मैं अपने प्रिय सखा प्रभु को अपने हृदय में बसाकर संसारी प्रलोभनों से अपनी आँखों को नीचा रखती हूँ। मैं अपने प्रिय प्रभु के साथ सभी प्रकार के आत्मिक सुखों का आनंद लेती हूँ पर इसका भेद किसी अन्य को नहीं बताती॥ २४४॥',
      en: 'Satguru Kabir Saheb proclaims: Having enshrined my Beloved Friend within my heart, I keep my eyes lowered to the world. I enjoy all the sweet nectar of spiritual union with Him, keeping this divine secret entirely to myself.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਦਾ ਪਿਆਰ ਅੰਦਰੂਨੀ ਹੈ, ਜੋ ਬਾਹਰ ਵਿਖਾਵੇ ਤੋਂ ਪਰੇ ਹੁੰਦਾ ਹੈ।',
      hi: 'प्रभु का प्रेम आंतरिक सुख है, जो बाहरी दिखावे से कोसों दूर है।',
      en: 'Divine love is an intimate, private experience of the soul, far removed from external showing.',
    },
    acharana: {
      pb: 'ਦੁਨਿਆਵੀ ਵਿਖਾਵੇ ਨੂੰ ਛੱਡ ਕੇ ਆਪਣੇ ਹਿਰਦੇ ਅੰਦਰ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਅਨੰਦ ਲਵੋ।',
      hi: 'बाहरी आडंबर को छोड़कर अपने हृदय के भीतर ईश्वर भक्ति का रस लें।',
      en: 'Flee from outward display; nurture a quiet, intimate relationship with the Creator within.',
    },
    samarpan: {
      pb: 'ਆਪਣੀਆਂ ਅੱਖਾਂ ਅਤੇ ਚਿੱਤ ਨੂੰ ਪਰਾਈ ਨਿੰਦਾ ਤੋਂ ਬਚਾ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿਚ ਲਗਾਓ।',
      hi: 'अपने नेत्रों और मन को संसारी प्रपंचों से हटाकर प्रभु चरणों में अर्पित करें।',
      en: 'Surrender your sight and senses to focus entirely on the indwelling Presence.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 235 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-235',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੫: ਆਠ ਜਾਮ ਚਉਸਠਿ ਘਰੀ ਤੁਅ ਨਿਰਖਤ ਰਹੈ ਜੀਉ',
      hi: 'सलोक २३५: आठ जाम चउसठि घरी तुअ निरखत रहै जीउ',
      en: 'Salok 235: My soul gazes at You all eight watches of the day.',
    },
    moolGurmukhi: [
      'ਆਠ ਜਾਮ ਚਉਸਠਿ ਘਰੀ ਤੁਅ ਨਿਰਖਤ ਰਹੈ ਜੀਉ ॥',
      'ਨੀਚੇ ਲੋਇਨ ਕਿਉ ਕਰਉ ਸਭ ਘਟ ਦੇਖਉ ਪੀਉ ॥੨੩੫॥',
    ],
    moolDevanagari: [
      'आठ जाम चउसठि घरी तुअ निरखत रहै जीउ ॥',
      'नीचे लोइन किउ करउ सभ घट देखउ पीउ ॥२३५॥',
    ],
    moolRoman: [
      'Aath jaam chausathi gharee tua nirakhat rahai jeeu ||',
      'Neeche loin kiu karau sabh ghat dekhau peeu ||235||',
    ],
    shabdarth: [
      {
        word: 'ਆਠ ਜਾਮ / आठ जाम',
        meaning: {
          pb: 'ਅੱਠ ਪਹਿਰ (੨੪ ਘੰਟੇ)',
          hi: 'आठ पहर (२४ घंटे)',
          en: 'All eight watches of the day (24 hours)',
        },
      },
      {
        word: 'ਚਉਸਠਿ ਘਰੀ / चउसठि घरी',
        meaning: {
          pb: '੬੪ ਘੜੀਆਂ',
          hi: '६४ घड़ियां (पूरा दिन और रात)',
          en: '64 measures of time (full day and night)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਹੇ ਪਤੀ ਪ੍ਰਮਾਤਮਾ! ਅੱਠ ਪਹਿਰ ਤੇ ਚੌਹਠ ਘੜੀਆਂ ਮੇਰਾ ਮਨ ਤੈਨੂੰ ਹੀ ਵੇਖਦਾ (ਦਰਸ਼ਨ ਕਰਦਾ) ਰਹੇ, ਮੈਂ ਅੱਖਾਂ ਨੀਵੀਆਂ ਕਿਉਂ ਕਰਾਂ, ਜਦੋਂ ਮੈਂ ਸਭ ਸਰੀਰਾਂ ਵਿਚ ਤੈਨੂੰ ਪਤੀ ਪ੍ਰਮਾਤਮਾ ਨੂੰ ਹੀ ਵੇਖਦਾ ਹਾਂ॥ ੨੩੫॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं-हे प्रियतम परमात्मा! आठ पहर और चौंसठ घड़ियाँ (अर्थात संपूर्ण दिन-रात) मेरी जीवात्मा तुझे ही निहारती रहे। अब मैं अपनी आँखों को क्यों झुकाऊँ, क्योंकि मुझे तो प्रत्येक घट (शरीर) में मेरा प्रियतम प्रभु ही दिखाई दे रहा है॥ २३५॥',
      en: 'Satguru Kabir Saheb proclaims: O my beloved Lord, my soul gazes upon You all eight watches and sixty-four hours of the day. Why should I lower my eyes to anything else when I see my Beloved residing in every single heart?',
    },
    chintan: {
      pb: 'ਹਰ ਜੀਵ ਵਿਚ ਪਰਮਾਤਮਾ ਦਾ ਰੂਪ ਦੇਖਣਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡੀ ਗਿਆਨ ਅਵਸਥਾ ਹੈ।',
      hi: 'प्रत्येक जीव में परमात्मा की ज्योति देखना ही ज्ञान की सर्वोच्च पराकाष्ठा है।',
      en: 'Beholding the same Divine Light in every living creature is the ultimate realization of oneness.',
    },
    acharana: {
      pb: 'ਸਾਰੇ ਮਨੁੱਖਾਂ ਨਾਲ ਬਿਨਾਂ ਭੇਦਭਾਵ ਦੇ ਪ੍ਰੇਮ ਕਰੋ ਕਿਉਂਕਿ ਸਭ ਵਿਚ ਪ੍ਰਭੂ ਆਪ ਵਸਦਾ ਹੈ।',
      hi: 'बिना भेदभाव के सभी मनुष्यों से प्रेम करें क्योंकि सबमें प्रियतम परमात्मा ही विद्यमान है।',
      en: 'Treat everyone with respect and kindness; recognize that the same Divine Soul dwells in all.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਨਜ਼ਰ ਨੂੰ ਹਰ ਘਟ ਵਿਚ ਵਸਦੇ ਪ੍ਰਭੂ ਦੇ ਦਰਸ਼ਨ ਕਰਨ ਲਈ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी दृष्टि और समझ को संपूर्ण घटों में प्रभु का दर्शन करने में समर्पित करें।',
      en: 'Surrender your perspective to perceive the Lord in all forms and elements of creation.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩target੭ (Salok Bhagat Kabir Jio Ke)',
  },

  // ---------------------------------------------------------
  // SALOK 236 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-236',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੬: ਸੁਨੁ ਸਖੀ ਪੀਅ ਮਹਿ ਜੀਉ ਬਸੈ ਜੀਅ ਮਹਿ ਬਸੈ ਕਿ ਪੀਉ',
      hi: 'सलोक २३६: सुनु सखी पीअ महि जीउ बसै जीअ महि बसै कि पीउ',
      en: 'Salok 236: The soul and the Beloved are indistinguishably one.',
    },
    moolGurmukhi: [
      'ਸੁਨੁ ਸਖੀ ਪੀਅ ਮਹਿ ਜੀਉ ਬਸੈ ਜੀਅ ਮਹਿ ਬਸੈ ਕਿ ਪੀਉ ॥',
      'ਜੀਉ ਪੀਉ ਬੂਝਉ ਨਹੀ ਘਟ ਮਹਿ ਜੀਉ ਕਿ ਪੀਉ ॥੨੩੬॥',
    ],
    moolDevanagari: [
      'सुनु सखी पीअ महि जीउ बसै जीअ महि बसै कि पीउ ॥',
      'जीउ पीउ बूझउ नही घट महि जीउ कि पीउ ॥२३६॥',
    ],
    moolRoman: [
      'Sunu sakhee peea mahi jeeu basai jeea mahi basai ki peeu ||',
      'Jeeu peeu boojhau nahee ghat mahi jeeu ki peeu ||236||',
    ],
    shabdarth: [
      {
        word: 'ਸਖੀ / सखी',
        meaning: {
          pb: 'ਸਹੇਲੀ / ਆਤਮਾ ਸਹੇਲੀ',
          hi: 'सखी / जीवात्मा सहेली',
          en: 'Soul-companion / friend',
        },
      },
      {
        word: 'ਜੀਉ ਪੀਉ / जीउ पीउ',
        meaning: {
          pb: 'ਜਿੰਦ ਅਤੇ ਪਿਆਰਾ ਪ੍ਰਭੂ',
          hi: 'जीवात्मा और परमात्मा',
          en: 'Soul and Beloved Lord',
        },
      },
    ],
    bhavarth: {
      pb: 'ਹੇ ਸਖੀ ਸੁਣ ! ਪਿਆਰੇ ਪ੍ਰਭੂ ਪਤੀ ਵਿਚ ਮੇਰੀ ਜਿੰਦ ਵਸਦੀ ਹੈ, ਜਾਂ ਮੇਰੀ ਜਿੰਦ ਵਿਚ ਪਿਆਰਾ ਪ੍ਰਭੂ ਵਸ ਰਿਹਾ ਹੈ, ਮੈਂ ਆਪਣੀ ਜਿੰਦ ਤੇ ਪ੍ਰਭੂ ਨੂੰ ਸਮਝ ਨਹੀਂ ਸਕਦੀ ਕਿ ਮੇਰੇ ਹਿਰਦੇ ਵਿਚ ਮੇਰੀ ਜਿੰਦ ਹੈ ਕਿ ਪਿਆਰਾ ਹੈ। (ਮੈਂ ਇਸ ਭੇਤ ਨੂੰ ਨਿਖੇੜ ਨਹੀਂ ਸਕਦੀ) ॥ ੨੩੬॥',
      hi: 'हे सखी सुनो! प्रियतम परमात्मा में मेरी जीवात्मा बसती है, अथवा मेरी जीवात्मा के भीतर वह प्रियतम परमात्मा बसता है, मैं इस अंतर को समझ नहीं पा रही हूँ कि मेरे हृदय के भीतर केवल जीवात्मा है अथवा साक्षात् मेरा प्रियतम ही विराजमान है॥ २३੬॥',
      en: 'Listen, O my companion: does my soul dwell inside my Beloved, or does my Beloved dwell within my soul? I cannot differentiate between the two anymore — whether it is my own soul or the Beloved Himself residing within my heart.',
    },
    chintan: {
      pb: 'ਜੀਵ-ਆਤਮਾ ਅਤੇ ਪਰਮ-ਆਤਮਾ ਦੀ ਸੰਪੂਰਨ ਏਕਤਾ ਹੀ ਸੱਚੀ ਭਗਤੀ ਦੀ ਅਵਸਥਾ ਹੈ।',
      hi: 'जीवात्मा और परमात्मा का एक हो जाना ही अद्वैत भक्ति का सर्वोच्च शिखर है।',
      en: 'The complete merging of the soul with the Over-soul represents the ultimate non-dual union of devotion.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਨਿੱਜੀ ਹਉਮੈ ਨੂੰ ਮਿਟਾ ਕੇ ਪ੍ਰਭੂ ਦੇ ਸਰੂਪ ਵਿਚ ਲੀਨ ਹੋ ਜਾਵੋ।',
      hi: 'अपने व्यक्तिगत अहंकार को मिटाकर प्रभु की पावन ज्योति में लीन हो जाएं।',
      en: 'Dissolve your individual ego; allow your consciousness to fully blend with the Divine.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਮੁੱਚੀ ਹੋਂਦ ਨੂੰ ਪਿਆਰੇ ਪ੍ਰਭੂ ਦੇ ਵਿਸ਼ਾਲ ਸਰੂਪ ਵਿਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपने संपूर्ण अस्तित्व को प्रभु के विराट प्रेम-स्वरूप में विलीन करें।',
      en: 'Surrender your entire existence into the boundless ocean of the Beloved\'s Presence.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },
  // ---------------------------------------------------------
  // SALOK 237 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-237',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੭: ਕਬੀਰ ਬਾਮਨੁ ਗੁਰੂ ਹੈ ਜਗਤ ਕਾ ਭਗਤਨ ਕਾ ਗੁਰੁ ਨਾਹਿ',
      hi: 'सलोक २३७: कबीर बामनु गुरू है जगत का भगतन का गुरू नाहि',
      en: 'Salok 237: The true teacher is one who knows the Divine, not just rituals.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਬਾਮਨੁ ਗੁਰੂ ਹੈ ਜਗਤ ਕਾ ਭਗਤਨ ਕਾ ਗੁਰੁ ਨਾਹਿ ॥',
      'ਅਰਝਿ ਉਰਝਿ ਕੈ ਪਚਿ ਮੁਆ ਚਾਰਉ ਬੇਦਹੁ ਮਾਹਿ ॥੨੩੭॥',
    ],
    moolDevanagari: [
      'कबीर बामनु गुरू है जगत का भगतन का गुरू नाहि ॥',
      'अरझि उरझि कै पचि मूआ चारउ बेदहु माहि ॥२३७॥',
    ],
    moolRoman: [
      'Kabeer baamanu guroo hai jagat kaa bhagatan kaa guru naahi ||',
      'Arajhi urajhi kai pachi muaa chaarau bedahu maahi ||237||',
    ],
    shabdarth: [
      {
        word: 'ਅਰਝਿ ਉਰਝਿ / अरझि उरझि',
        meaning: {
          pb: 'ਕਰਮ ਕਾਂਡਾਂ ਵਿਚ ਉਲਝ ਕੇ',
          hi: 'कर्मकांडों में उलझकर',
          en: 'Entangled in rituals',
        },
      },
      {
        word: 'ਪਚਿ ਮੁਆ / पचि मूआ',
        meaning: {
          pb: 'ਖੱਪ ਕੇ ਮਰ ਗਿਆ',
          hi: 'खप कर मर गया',
          en: 'Died struggling / wasted away',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਬ੍ਰਾਹਮਣ ਜਗਤ ਦੇ ਜੀਵਾਂ ਦਾ ਗੁਰੂ ਹੈ ਪਰ ਭਗਤਾਂ ਦਾ ਗੁਰੂ ਨਹੀਂ, ਕਿਉਂਕਿ ਇਹ ਆਪ ਚਾਰ ਵੇਦਾਂ ਦੇ ਕਰਮ ਕਾਂਡ ਦੀ ਉਲਝਣ ਵਿਚ ਖੱਪ ਖੱਪ ਕੇ ਮਰ ਜਾਂਦਾ ਹੈ। (ਇਸ ਨੇ ਹੋਰ ਲੋਕਾਂ ਦਾ ਭਲਾ ਕੀ ਕਰਨਾ ਹੈ)॥ ੨੩੭॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- ब्राह्मण जगत के साधारण मनुष्यों का गुरु तो हो सकता है, परंतु वह प्रभु के अनन्य भक्तों का गुरु नहीं हो सकता। क्योंकि वह तो स्वयं चारों वेदों के कर्मकांडों की उलझनों में ही उलझकर खप मरता है (अर्थात वह वास्तविक ब्रह्म-ज्ञान से वंचित रह जाता है)॥ २३७॥',
      en: 'Satguru Kabir Saheb proclaims: The Brahmin may be a teacher to the worldly people, but he is not a teacher to the true devotees of God. He has wasted his life becoming entangled in the complex rituals of the four Vedas, failing to find the simple path of Divine Love.',
    },
    chintan: {
      pb: 'ਕੇਵਲ ਪੁਸਤਕੀ ਗਿਆਨ ਜਾਂ ਕਰਮ ਕਾਂਡ ਮੁਕਤੀ ਨਹੀਂ ਦਿੰਦੇ, ਸਗੋਂ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਹੀ ਮੁੱਖ ਹੈ।',
      hi: 'केवल किताबी ज्ञान या बाहरी अनुष्ठान मुक्ति का मार्ग नहीं हैं, बल्कि हृदय की सच्ची भक्ति ही सर्वोपरि है।',
      en: 'Mere scholarly knowledge or ritualistic practices do not grant liberation; only heart-felt devotion leads to the Divine.',
    },
    acharana: {
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਦੇ ਕਰਮਾਂ ਨੂੰ ਛੱਡ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਵਿਚ ਪ੍ਰੇਮ ਪਾਓ।',
      hi: 'बाहरी दिखावे और जटिल कर्मकांडों को त्यागकर परमात्मा के नाम से प्रेम करें।',
      en: 'Forsake outward displays and complex ceremonies; cultivate a sincere love for the Name of God.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਨੂੰ ਵਾਦ-ਵਿਵਾਦ ਤੋਂ ਹਟਾ ਕੇ ਪ੍ਰਭੂ ਚਰਨਾਂ ਵਿਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी बुद्धि को शुष्क तर्कों से हटाकर प्रभु के पावन चरणों में अर्पित करें।',
      en: 'Surrender your intellect from dry arguments; dedicate your consciousness to the feet of the Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },
  // ---------------------------------------------------------
  // SALOK 238 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-238',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੮: ਹਰਿ ਹੈ ਖਾਂਡੁ ਰੇਤੁ ਮਹਿ ਬਿਖਰੀ ਹਾਥੀ ਚੁਨੀ ਨ ਜਾਇ',
      hi: 'सलोक २३८: हरि है खांडु रेतु महि बिखरी हाथी चुनी न जाइ',
      en: 'Salok 238: God is like sugar scattered in the sand; only the humble can find Him.',
    },
    moolGurmukhi: [
      'ਹਰਿ ਹੈ ਖਾਂਡੁ ਰੇਤੁ ਮਹਿ ਬਿਖਰੀ ਹਾਥੀ ਚੁਨੀ ਨ ਜਾਇ ॥',
      'ਕਹਿ ਕਬੀਰ ਗੁਰਿ ਭਲੀ ਬੁਝਾਈ ਕੀਟੀ ਹੋਇ ਕੈ ਖਾਇ ॥੨੩੮॥',
    ],
    moolDevanagari: [
      'हरि है खांडु रेतु महि बिखरी हाथी चुनी न जाइ ॥',
      'कहि कबीर गुरि भली बुझाई कीटी होय कै खाइ ॥२३८॥',
    ],
    moolRoman: [
      'Hari hai khaandu retu mahi bikharee haathee chunee na jaai ||',
      'Kahi Kabeer guri bhalee bujhaaee keetee hoi kai khaai ||238||',
    ],
    shabdarth: [
      {
        word: 'ਬਿਖਰੀ / बिखरी',
        meaning: {
          pb: 'ਖਿੰਡਰੀ ਹੋਈ',
          hi: 'फैली हुई / बिखरी हुई',
          en: 'Scattered',
        },
      },
      {
        word: 'ਕੀਟੀ / कीटी',
        meaning: {
          pb: 'ਕੀੜੀ (ਨਿਮ੍ਰਤਾ ਦਾ ਚਿੰਨ੍ਹ)',
          hi: 'चींटी (नम्रता का प्रतीक)',
          en: 'An ant (symbol of humility)',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਪ੍ਰਮਾਤਮਾ ਦਾ ਨਾਮ ਰੂਪ ਖੰਡ ਹੈ ਜੋ ਰੇਤ ਵਿਚ ਖਿੰਡਰੀ ਹੋਈ ਹੈ ਅਤੇ ਇਹ ਹਾਥੀ ਪਾਸੋਂ ਚੁਣੀ ਨਹੀਂ ਜਾਂਦੀ। ਗੁਰੂ ਜੀ ਨੇ ਚੰਗੀ ਗੱਲ ਸਮਝਾ ਦਿਤੀ ਹੈ ਕਿ ਪੁਰਸ਼ ਇਸ ਖੰਡ ਨੂੰ ਕੀੜੀ ਬਣ ਕੇ ਖਾ ਸਕਦਾ ਹੈ॥ ੨੩੮॥ ਭਾਵ-ਇਹ ਹਾਥੀ ਹਉਮੈ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਅਤੇ ਕੀੜੀ ਨਿੰਮ੍ਰਤਾ ਦਾ ਸੂਚਕ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- परमात्मा का नाम चीनी (खांड) के समान है जो संसार रूपी रेत में बिखरी हुई है। इसे अहंकार रूपी हाथी अपनी सूंड़ से नहीं चुन सकता। सतगुरु कबीर साहेब फरमाते हैं कि मेरे गुरु ने मुझे बहुत अच्छी बात समझाई है कि मनुष्य केवल नम्रता रूपी चींटी बनकर ही इस नाम-अमृत को प्राप्त कर सकता है॥ २३८॥',
      en: 'Satguru Kabir Saheb proclaims: The Lord is like sugar scattered in the sand. The elephant of pride cannot pick it up. Satguru Kabir Saheb proclaims, my Guru has given me this beautiful understanding: become an ant of humility, and then you can gather and taste this Divine Sweetness.',
    },
    chintan: {
      pb: 'ਹਉਮੈ ਨਾਲ ਪ੍ਰਮਾਤਮਾ ਦੀ ਪ੍ਰਾਪਤੀ ਅਸੰਭਵ ਹੈ, ਕੇਵਲ ਨਿਮ੍ਰਤਾ ਹੀ ਰਸਤਾ ਹੈ।',
      hi: 'अहंकार के साथ परमात्मा की प्राप्ति असंभव है; केवल दीनता और नम्रता ही वह मार्ग है जिससे प्रभु मिलते हैं।',
      en: 'God cannot be attained through ego and pride; only the path of absolute humility leads to His Presence.',
    },
    acharana: {
      pb: 'ਆਪਣੇ ਮਨ ਵਿੱਚੋਂ ਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਕੇ ਨਿਮ੍ਰਤਾ ਧਾਰਨ ਕਰੋ।',
      hi: 'अपने मन से अभिमान को त्यागकर चींटी की तरह विनम्र बनें।',
      en: 'Cast away all pride from your heart; adopt the modest and humble nature of an ant.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਿਆਣਪ ਅਤੇ ਹਉਮੈ ਨੂੰ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਅਰਪਣ ਕਰਕੇ ਨਿਮਾਣੇ ਬਣੋ।',
      hi: 'अपनी चतुराई और अहंकार को गुरु के चरणों में अर्पित कर स्वयं को छोटा (नम्र) समझें।',
      en: 'Surrender your cleverness and ego at the Guru\'s feet; embrace the state of being small and humble.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },
  // ---------------------------------------------------------
  // SALOK 239 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-239',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੩੯: ਕਬੀਰ ਜਉ ਤੁਹਿ ਸਾਧ ਪਿਰੰਮ ਕੀ ਸੀਸੁ ਕਾਟਿ ਕਰਿ ਗੋਇ',
      hi: 'सलोक २३९: कबीर जउ तुहि साध पिरंम की सीसु काटि करि गोइ',
      en: 'Salok 239: If you desire the path of Divine Love, surrender your head.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਉ ਤੁਹਿ ਸਾਧ ਪਿਰੰਮ ਕੀ ਸੀਸੁ ਕਾਟਿ ਕਰਿ ਗੋਇ ॥',
      'ਖੇਲਤ ਖੇਲਤ ਹਾਲ ਕਰਿ ਜੋ ਕਿਛੁ ਹੋਇ ਤ ਹੋਇ ॥੨੩੯॥',
    ],
    moolDevanagari: [
      'कबीर जਉ तुहि साध पिरंम की सीसु काटि करि गोइ ॥',
      'खेलत खेलत हाल करि जो किछु होइ त होइ ॥२३९॥',
    ],
    moolRoman: [
      'Kabeer jau tuhi saadh piramm kee seesu kaati kari goi ||',
      'Khelat khelat haal kari jo kichhu hoi ta hoi ||239||',
    ],
    shabdarth: [
      {
        word: 'ਪਿਰੰਮ / पिरंम',
        meaning: {
          pb: 'ਪ੍ਰੇਮ / ਪ੍ਰਭੂ ਦਾ ਪ੍ਰੇਮ',
          hi: 'प्रेम / ईश्वरीय प्रेम',
          en: 'Divine Love',
        },
      },
      {
        word: 'ਗੋਇ / गोइ',
        meaning: {
          pb: 'ਗੇਂਦ',
          hi: 'गेंद',
          en: 'A ball',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੋ ਤੈਨੂੰ ਪਿਆਰੇ ਪ੍ਰਭੂ ਦੇ ਮਿਲਣ ਦੀ ਸ਼ਰਧਾ ਹੈ ਤਾਂ ਆਪਣਾ ਸਿਰ ਕੱਟ ਕੇ (ਗੋਇ) ਗੇਂਦ ਬਣਾ ਲੈ ਅਤੇ ਇਸ ਗੇਂਦ ਨਾਲ ਖੇਡਦਾ ਖੇਡਦਾ (ਹਾਲ ਕਰਿ) ਮਸਤੀ ਵਿਚ ਰੰਗਿਆ ਜਾਹ, ਫਿਰ ਜੋ ਕੁਝ ਹੋਵੇ ਸੋ ਹੋਵੇ (ਤੂੰ ਦੁਨੀਆਂ ਵਲੋਂ ਬੇਪ੍ਰਵਾਹ ਹੋ ਕੇ ਭਗਤੀ ਕਰ)॥ ੨੩੯॥ ਭਾਵ-ਸਿਰ ਕੱਟਣ ਦਾ ਮਤਲਬ ਹਉਮੈ ਦਾ ਤਿਆਗ ਹੈ।',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यदि तुझे उस प्रियतम परमात्मा के प्रेम की प्यास है, तो अपने अहंकार रूपी सिर को काटकर गेंद बना ले। फिर इस प्रेम के खेल को खेलते-खेलते मग्न हो जा (हाल कर), फिर जो कुछ भी परिणाम हो, उसकी चिंता मत कर॥ २३९॥',
      en: 'Satguru Kabir Saheb proclaims: If you long for the path of Divine Love, then sever your head (ego) and turn it into a ball. Play this game of love with total abandon; whatever happens next, let it be.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਮਾਰਗ ਪੂਰਨ ਆਤਮ-ਸਮਰਪਣ ਅਤੇ ਹਉਮੈ ਦੇ ਤਿਆਗ ਦਾ ਮਾਰਗ ਹੈ।',
      hi: 'प्रभु प्रेम का मार्ग पूर्ण आत्म-विसर्जन और अहंकार की बलि का मार्ग है।',
      en: 'The path of Divine Love is the path of total self-sacrifice and the complete dissolution of the ego.',
    },
    acharana: {
      pb: 'ਆਪਣੀ ਬੁੱਧੀ ਅਤੇ ਅਭਿਮਾਨ ਨੂੰ ਤਿਆਗ ਕੇ ਭਗਤੀ ਦੇ ਰੰਗ ਵਿਚ ਰੰਗੇ ਜਾਵੋ।',
      hi: 'अपने पांडित्य और अभिमान को त्यागकर भक्ति के आनंद में सराबोर हो जाएं।',
      en: 'Let go of your intellectual pride and arrogance; immerse yourself in the bliss of devotion.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਮਨ ਅਤੇ ਹਉਮੈ ਨੂੰ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਕੁਰਬਾਨ ਕਰੋ।',
      hi: 'अपने मन और अहंकार को प्रभु के पावन चरणों में पूर्णतः न्यौछावर करें।',
      en: 'Sacrifice your mind and ego completely at the feet of the Divine Lord.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },
  // ---------------------------------------------------------
  // SALOK 240 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-240',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੪੦: ਕਬੀਰ ਜਉ ਤੁਹਿ ਸਾਧ ਪਿਰੰਮ ਕੀ ਪਾਕੇ ਸੇਤੀ ਖੇਲੁ',
      hi: 'सलोक २४०: कबीर जउ तुहि साध पिरंम की पाके सेती खेलु',
      en: 'Salok 240: Play the game of love with a perfected Guru.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਉ ਤੁਹਿ ਸਾਧ ਪਿਰੰਮ ਕੀ ਪਾਕੇ ਸੇਤੀ ਖੇਲੁ ॥',
      'ਕਾਚੀ ਸਰਸਉਂ ਪੇਲਿ ਕੈ ਨਾ ਖਲਿ ਭਈ ਨ ਤੇਲੁ ॥੨੪੦॥',
    ],
    moolDevanagari: [
      'कबीर जउ तुहि साध पिरंम की पाके सेती खेलु ॥',
      'काची सरसउं पेलि कै ना खलि भई न तेलु ॥२४०॥',
    ],
    moolRoman: [
      'Kabeer jau tuhi saadh piramm kee paake setee khelu ||',
      'Kaachee sarasaun peli kai naa khali bhaee na telu ||240||',
    ],
    shabdarth: [
      {
        word: 'ਪਾਕੇ ਸੇਤੀ / पाके सेती',
        meaning: {
          pb: 'ਪੱਕੇ (ਪੂਰਨ) ਗੁਰੂ ਨਾਲ',
          hi: 'पूर्ण व सिद्ध गुरु के साथ',
          en: 'With a perfected True Master',
        },
      },
      {
        word: 'ਸਰਸਉਂ / सरसउं',
        meaning: {
          pb: 'ਸਰੋਂ ਦਾ ਬੀਜ',
          hi: 'सरसों',
          en: 'Mustard seeds',
        },
      },
      {
        word: 'ਖਲਿ / खलि',
        meaning: {
          pb: 'ਖਲ (ਤੇਲ ਕੱਢਣ ਤੋਂ ਬਾਅਦ ਬਚਿਆ ਹਿੱਸਾ)',
          hi: 'खली',
          en: 'Oil-cake / residue',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇ ਤੈਨੂੰ ਆਪਣੇ ਪਿਆਰੇ ਨੂੰ ਮਿਲਣ ਦੀ ਸ਼ਰਧਾ ਹੈ ਤਾਂ (ਪਾਕੇ) ਪੱਕੇ ਗੁਰੂ ਨਾਲ ਖੇਡ, ਕਿਉਂਕਿ ਕੱਚੇ ਗੁਰੂ ਤੋਂ ਨਾ ਲੋਕ ਦਾ ਸੁਖ ਅਤੇ ਨਾ ਪ੍ਰਲੋਕ ਦਾ ਸੁਖ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਤਰ੍ਹਾਂ ਕੱਚੀ ਸਰੋਂ ਨੂੰ ਪੀੜਨ ਕਰਕੇ ਉਸ ਤੋਂ ਨਾ ਤੇਲ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ ਨਾ ਹੀ ਖਲ ਪ੍ਰਾਪਤ ਹੁੰਦੀ ਹੈ॥ ੨੪੦॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यदि तुझे अपने प्रियतम प्रभु से मिलने की श्रद्धा और चाह है तो पक्के (पूर्ण) गुरु के साथ प्रेम का खेल खेल। क्योंकि कच्चे गुरु से न लोक का सुख मिलता है और न परलोक का, जिस प्रकार कच्ची सरसों को पेरने से न तेल निकलता है और न ही खली बनती है॥ २४०॥',
      en: 'Satguru Kabir Saheb proclaims: If you long for the love of the Divine Beloved, then play with a perfected Guru. Seeking a false or immature teacher yields neither the bliss of this world nor the next — just as crushing unripe mustard seeds yields neither oil nor oil-cake.',
    },
    chintan: {
      pb: 'ਸੱਚੇ ਅਤੇ ਪੂਰਨ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈਣਾ ਹੀ ਅਧਿਆਤਮਿਕ ਸਫਲਤਾ ਦਾ ਮੂਲ ਹੈ।',
      hi: 'सच्चे और सिद्ध गुरु की शरण ही आध्यात्मिक सफलता का आधार है।',
      en: 'Taking refuge in an enlightened and authentic True Master is the foundation of spiritual realization.',
    },
    acharana: {
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ਾਂ ਤੇ ਚੱਲੋ ਅਤੇ ਕੱਚੇ ਪਖੰਡਾਂ ਤੋਂ ਬਚੋ।',
      hi: 'पूर्ण सतगुरु के उपदेशों पर चलें और पाखंड से दूर रहें।',
      en: 'Follow the teachings of the True Master and beware of superficial illusions.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਾਧਨਾ ਨੂੰ ਪੂਰਨ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी साधना को पूर्ण गुरु के चरणों में समर्पित करें।',
      en: 'Surrender your practice and ego at the feet of the True Master.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke)',
  },
  // ---------------------------------------------------------
  // SALOK 241 (Ang 1377) - Bhagat Namdev Ji in Salok Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-241',
    category: 'dialogue',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੪੧: ਢੂੰਢਤ ਡੋਲਹਿ ਅੰਧ ਗਤਿ ਅਰੁ ਚੀਨਤ ਨਾਹੀ ਸੰਤ (ਕਹਿ ਨਾਮਾ)',
      hi: 'सलोक २४१: ढूढत डोलहि अंध गति अरु चीनत नाही संत (कहि नामा)',
      en: 'Salok 241: Bhagat Namdev Ji - Without saints, how can the Lord be found?',
    },
    moolGurmukhi: [
      'ਢੂੰਢਤ ਡੋਲਹਿ ਅੰਧ ਗਤਿ ਅਰੁ ਚੀਨਤ ਨਾਹੀ ਸੰਤ ॥',
      'ਕਹਿ ਨਾਮਾ ਕਿਉ ਪਾਈਐ ਬਿਨੁ ਭਗਤਹੁ ਭਗਵੰਤੁ ॥੨੪੧॥',
    ],
    moolDevanagari: [
      'ढूंढत डोलहि अंध गति अरु चीनत नाही संत ॥',
      'कहि नामा किउ पाईऐ बिनु भगतहु भगवंतु ॥२४१॥',
    ],
    moolRoman: [
      'Dhoondhat dolahi andh gati aru cheenat naahee sant ||',
      'Kahi Naamaa kiu paaeeai binu bhagatahu bhagavantu ||241||',
    ],
    shabdarth: [
      {
        word: 'ਅੰਧ ਗਤਿ / अंध गति',
        meaning: {
          pb: 'ਅੰਨ੍ਹਿਆਂ ਵਾਂਗੂੰ ਭਟਕਣਾ',
          hi: 'नेत्रहीनों की तरह भटकना',
          en: 'Wandering blindly in ignorance',
        },
      },
      {
        word: 'ਚੀਨਤ / चीनत',
        meaning: {
          pb: 'ਪਛਾਣਨਾ / ਸ਼ਰਨ ਲੈਣਾ',
          hi: 'पहचानना / आदर करना',
          en: 'Recognizing / identifying',
        },
      },
    ],
    bhavarth: {
      pb: 'ਇਸ ਸਲੋਕ ਵਿਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਭਗਤ ਨਾਮਦੇਵ ਜੀ ਦਾ ਵੀਚਾਰ ਪ੍ਰਗਟ ਕੀਤਾ ਹੈ- ਨਾਮਦੇਵ ਜੀ ਕਹਿੰਦੇ ਹਨ-ਜੋ ਲੋਕ (ਅੰਧ ਗਤਿ) ਅੰਨ੍ਹਿਆਂ ਵਾਂਗੂੰ ਡੋਲਦੇ ਭਟਕਦੇ ਫਿਰਦੇ ਹਨ ਅਤੇ ਸੰਤਾਂ ਨੂੰ ਨਹੀਂ ਪਛਾਣਦੇ ਸੰਤਾਂ ਦੀ ਸ਼ਰਨ ਗ੍ਰਹਿਣ ਨਹੀਂ ਕਰਦੇ। ਉਹ (ਭਗਤਹੁ) ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਤੋਂ ਬਿਨਾਂ ਭਗਵਾਨ ਨੂੰ ਕਿਸ ਤਰ੍ਹਾਂ ਪਾ ਸਕਦੇ ਹਨ ? ਅਰਥਾਤ ਪ੍ਰਮਾਤਮਾ ਦੀ ਪ੍ਰਾਪਤੀ ਵਾਸਤੇ ਉਸ ਦੇ ਸੰਤਾਂ ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਕਰਨੀ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ॥੨੪੧॥',
      hi: 'इस श्लोक में सतगुरु कबीर साहेब ने भगत नामदेव जी के विचार को प्रकट किया है- नामदेव जी कहते हैं- जो लोग अंधों की भाँति भटकते फिरते हैं और सच्चे संतों को नहीं पहचानते, वे भक्तों की संगति के बिना भगवान को कैसे पा सकते हैं? अर्थात परमात्मा की प्राप्ति के लिए संतों-भक्तों का सान्निध्य अनिवार्य है॥ २४१॥',
      en: 'In this Salok, Bhagat Namdev Ji\'s insight is recorded alongside Satguru Kabir Saheb: Those who wander blindly without recognizing the saints can never find the Lord. How can God ever be attained without the association of His beloved devotees?',
    },
    chintan: {
      pb: 'ਸਾਧ-ਸੰਗਤ ਤੋਂ ਬਿਨਾਂ ਅੰਨ੍ਹੀ ਭਟਕਣਾ ਕਦੇ ਖਤਮ ਨਹੀਂ ਹੋ ਸਕਦੀ।',
      hi: 'सत्संगति के बिना सांसारिक भटकाव कभी समाप्त नहीं हो सकता।',
      en: 'Without the company of the holy, blind spiritual wandering can never cease.',
    },
    acharana: {
      pb: 'ਸਦਾ ਸੱਚੇ ਸੰਤਾਂ-ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਵਿਚ ਬੈਠੋ।',
      hi: 'सदा सच्चे संतों और हरि भक्तों की संगति में बैठें।',
      en: 'Always keep company with authentic devotees and saintly souls.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਭਾਲ ਨੂੰ ਸਾਧ-ਸੰਗਤ ਦੇ ਚਰਨਾਂ ਵਿਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपनी खोज को साधु-संगत के चरणों में समर्पित करें।',
      en: 'Surrender your spiritual search to the guidance of the holy congregation.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke / Namdev Ji)',
  },
  // ---------------------------------------------------------
  // SALOK 242 (Ang 1377) - Bhagat Ravidas Ji in Salok Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-242',
    category: 'dialogue',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੪੨: ਹਰਿ ਸੋ ਹੀਰਾ ਛਾਡਿ ਕੈ ਕਰਹਿ ਆਨ ਕੀ ਆਸ (ਸਤਿ ਭਾਖੈ ਰਵਿਦਾਸ)',
      hi: 'सलोक २४२: हरि सो हीरा छाडि कै करहि आन की आस (सति भाखै रविदास)',
      en: 'Salok 242: Bhagat Ravidas Ji - Abandoning the diamond of God\'s Name leads to misery.',
    },
    moolGurmukhi: [
      'ਹਰਿ ਸੋ ਹੀਰਾ ਛਾਡਿ ਕੈ ਕਰਹਿ ਆਨ ਕੀ ਆਸ ॥',
      'ਤੇ ਨਰ ਦੋਜਕ ਜਾਹਿਗੇ ਸਤਿ ਭਾਖੈ ਰਵਿਦਾਸ ॥੨੪੨॥',
    ],
    moolDevanagari: [
      'हरि सो हीरा छाडि कै करहि आन की आस ॥',
      'ते नर दोजक जाहिगे सति भाखै रविदास ॥२४२॥',
    ],
    moolRoman: [
      'Hari so heeraa chhaadi kai karahi aan kee aas ||',
      'Te nar dojak jaahige sati bhaakhai Ravidaas ||242||',
    ],
    shabdarth: [
      {
        word: 'ਆਨ ਕੀ ਆਸ / आन की आस',
        meaning: {
          pb: 'ਕਿਸੇ ਦੂਜੇ ਜਾਂ ਮਾਇਆ ਦੀ ਆਸ',
          hi: 'किसी अन्य संसारी वस्तु की आशा',
          en: 'Hopes placed in other transient things',
        },
      },
      {
        word: 'ਦੋਜਕ / दोजक',
        meaning: {
          pb: 'ਨਰਕ',
          hi: 'नरक',
          en: 'Hell / torment',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਭਗਤ ਰਵਿਦਾਸ ਜੀ ਨੇ ਸੱਚ ਕਿਹਾ ਕਿ ਪ੍ਰਮਾਤਮਾ ਦੇ ਨਾਮ ਰੂਪ ਹੀਰੇ ਨੂੰ ਛੱਡ ਕੇ ਜੋ ਲੋਕ ਦੂਸਰੇ ਦੀ ਆਸ ਰੱਖ ਕੇ ਆਤਮਿਕ ਸੁਖ ਚਾਹੁੰਦੇ ਹਨ, ਉਹ ਅਵੱਸ਼ ਹੀ ਨਰਕਾਂ ਨੂੰ ਜਾਣਗੇ॥ ੨੪੨॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- भगत रविदास जी ने सत्य कहा है कि परमात्मा के नाम रूपी अमूल्य हीरे को त्यागकर जो लोग अन्य सांसारिक प्रपंचों की आशा रखते हैं, वे नरक में ही पड़ते हैं॥ २४२॥',
      en: 'Bhagat Ravidas Ji speaks the absolute truth: Those who forsake the precious diamond of the Lord\'s Name and place their hopes in other worldly things shall surely fall into hell.',
    },
    chintan: {
      pb: 'ਪ੍ਰਭੂ ਨਾਮ ਹੀ ਇੱਕੋ-ਇੱਕ ਸੱਚਾ ਹੀਰਾ ਹੈ, ਬਾਕੀ ਸਭ ਮਾਇਆ ਦਾ ਧੋਖਾ ਹੈ।',
      hi: 'प्रभु का नाम ही एकमात्र सच्चा हीरा है, बाकी सब भ्रम और नश्वर है।',
      en: 'The Divine Name alone is the true eternal diamond; all else is transient illusion.',
    },
    acharana: {
      pb: 'ਕੇਵਲ ਹਰਿ-ਨਾਮ ਉੱਤੇ ਭਰੋਸਾ ਰੱਖੋ ਅਤੇ ਦੁਨਿਆਵੀ ਆਸਾਂ ਛੱਡੋ।',
      hi: 'केवल प्रभु नाम पर आस्था रखें और नश्वर आशाओं का त्याग करें।',
      en: 'Place all trust in the Lord\'s Name; shed dependence on fleeting worldly hopes.',
    },
    samarpan: {
      pb: 'ਆਪਣੀ ਸਾਰੀ ਟੇਕ ਅਤੇ ਆਸ ਪ੍ਰਭੂ ਦੇ ਨਾਮ-ਹੀਰੇ ਤੇ ਸਮਰਪਿਤ ਕਰੋ।',
      hi: 'अपनी समस्त आस और भरोसा प्रभु के नाम-रत्न पर समर्पित करें।',
      en: 'Surrender all expectations and lean entirely upon the diamond of the Name.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke / Ravidas Ji)',
  },
  // ---------------------------------------------------------
  // SALOK 243 (Ang 1377) - Bhagat Kabir Ji
  // ---------------------------------------------------------
  {
    id: 'sggs-salok-243',
    category: 'salok',
    ang: 1377,
    title: {
      pb: 'ਸਲੋਕ ੨੪੩: ਕਬੀਰ ਜਉ ਗ੍ਰਿਹੁ ਕਰਹਿ ਤ ਧਰਮੁ ਕਰੁ ਨਾਹੀ ਤ ਕਰੁ ਬੈਰਾਗੁ',
      hi: 'सलोक २४३: कबीर जउ ग्रिहु करहि त धरमु करु नाही त करु बैरागु',
      en: 'Salok 243: Practise righteousness in household or embrace true renunciation.',
    },
    moolGurmukhi: [
      'ਕਬੀਰ ਜਉ ਗ੍ਰਿਹੁ ਕਰਹਿ ਤ ਧਰਮੁ ਕਰੁ ਨਾਹੀ ਤ ਕਰੁ ਬੈਰਾਗੁ ॥',
      'ਬੈਰਾਗੀ ਬੰਧਨੁ ਕਰੈ ਤਾ ਕੋ ਬਡੋ ਅਭਾਗੁ ॥੨੪੩॥',
    ],
    moolDevanagari: [
      'कबीर जउ ग्रिहु करहि त धरमु करु नाही त करु बैरागु ॥',
      'बैरागी बंधनु करै ता को बडो अभागु ॥२४३॥',
    ],
    moolRoman: [
      'Kabeer jau grihu karahi ta dharamu karu naahee ta karu bairaagu ||',
      'Bairaagee bandhanu karai taa ko bado abhaagu ||243||',
    ],
    shabdarth: [
      {
        word: 'ਗ੍ਰਿਹੁ / ग्रिहु',
        meaning: {
          pb: 'ਗ੍ਰਿਹਸਥ ਜੀਵਨ / ਘਰ',
          hi: 'गृहस्थ जीवन',
          en: 'Household life',
        },
      },
      {
        word: 'ਬੈਰਾਗੁ / बैरागु',
        meaning: {
          pb: 'ਤਿਆਗ / ਸੰਨਿਆਸ',
          hi: 'वैराग्य / त्याग',
          en: 'Renunciation',
        },
      },
      {
        word: 'ਬਡੋ ਅਭਾਗੁ / बडो अभागु',
        meaning: {
          pb: 'ਵੱਡਾ ਮੰਦਭਾਗਾ',
          hi: 'बड़ा दुर्भाग्य',
          en: 'Great misfortune',
        },
      },
    ],
    bhavarth: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ-ਜੇ ਤੂੰ (ਗ੍ਰਿਹ) ਘਰ ਗ੍ਰਹਿਸਤ ਕਰਨਾ ਹੈ ਤਾਂ ਧਰਮ ਕਰ, ਪਰ ਜੇ ਧਰਮ ਨਹੀਂ ਕਰ ਸਕਦਾ ਤਾਂ (ਬੈਰਾਗੁ) ਤਿਆਗ ਧਾਰਨ ਕਰ ਲੈ (ਭਾਵ ਤਿਆਗੀ ਹੋ ਜਾਹ) ਪਰ ਜੇਕਰ ਕੋਈ ਤਿਆਗੀ ਹੋ ਕੇ ਫਿਰ ਗ੍ਰਹਿਸਤ ਦੇ ਧੰਧੇ ਹੀ ਕਰਦਾ ਹੈ ਤਾਂ ਉਸ ਦੇ ਬੜੇ ਖੋਟੇ ਭਾਗ ਹਨ॥ ੨੪੩॥ ਸਮਾਪਤ॥',
      hi: 'सतगुरु कबीर साहेब फरमाते हैं- यदि गृहस्थ जीवन जीना है तो धर्म और मर्यादा के साथ जीओ, नहीं तो पूर्ण वैराग्य धारण करो। परंतु यदि कोई वैरागी बनकर भी संसार के मोह-बंधनों में बंधता है, तो उससे बड़ा अभागा और कोई नहीं है॥ २४३॥ समाप्त॥',
      en: 'Satguru Kabir Saheb concludes: If you choose the household life, then practice righteousness and virtue; otherwise, adopt true renunciation. But if a renouncer entangles himself again in worldly attachments, great indeed is his misfortune. (Concluded).',
    },
    chintan: {
      pb: 'ਜੀਵਨ ਵਿਚ ਜੋ ਵੀ ਮਾਰਗ ਚੁਣੋ, ਉਸ ਉੱਤੇ ਪੂਰੀ ਇਮਾਨਦਾਰੀ ਅਤੇ ਧਰਮ ਨਾਲ ਚੱਲੋ।',
      hi: 'गृहस्थ हो या वैराग्य, जो भी मार्ग चुनें उस पर पूर्ण निष्ठा और सत्य से चलें।',
      en: 'Whichever path one chooses — household or renunciation — walk it with utter integrity, truth and discipline.',
    },
    acharana: {
      pb: 'ਦੋਗਲੇਪਣ ਤੋਂ ਬਚੋ; ਗ੍ਰਹਿਸਥ ਵਿਚ ਧਰਮੀ ਬਣੋ ਜਾਂ ਪੂਰੇ ਵੈਰਾਗੀ ਬਣੋ।',
      hi: 'पाखंड और दोहरे आचरण से बचें; गृहस्थ में धार्मिक रहें और विरक्त हों तो निष्काम रहें।',
      en: 'Avoid hypocrisy; live virtuously in the world or practice pure detached renunciation.',
    },
    samarpan: {
      pb: 'ਆਪਣੇ ਸਮੁੱਚੇ ਜੀਵਨ ਦੇ ਧਰਮ ਨੂੰ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਅਰਪਣ ਕਰੋ।',
      hi: 'अपने संपूर्ण जीवन के आचरण को सतगुरु के चरणों में समर्पित करें।',
      en: 'Surrender your entire conduct and moral duty at the feet of the Satguru.',
    },
    sggsReference: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਅੰਗ ੧੩੭੭ (Salok Bhagat Kabir Jio Ke - ਸਮਾਪਤ)',
  },
];


