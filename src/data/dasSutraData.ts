import { Language } from '../types';

export interface SatyaVachanSutra {
  num: number;
  sutra: Record<Language, string>;
  bhavarth: Record<Language, string>;
  lifeMessage: Record<Language, string>;
}

export const TEN_SATYA_VACHAN_SUTRAS: SatyaVachanSutra[] = [
  {
    num: 1,
    sutra: {
      hi: 'जीवन से भागो नहीं, जीवन में जागो।',
      pb: 'ਜੀਵਨ ਤੋਂ ਭੱਜੋ ਨਹੀਂ, ਜੀਵਨ ਵਿੱਚ ਜਾਗੋ।',
      en: 'Do not flee from life, awaken within life.',
    },
    bhavarth: {
      hi: 'जीवन की कठिनाइयों से भागने के बजाय जागरूक होकर उनका सामना करो।',
      pb: 'ਜੀਵਨ ਦੀਆਂ ਔਕੜਾਂ ਤੋਂ ਭੱਜਣ ਦੀ ਬਜਾਏ ਜਾਗਰੂਕ ਹੋ ਕੇ ਉਨ੍ਹਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰੋ।',
      en: 'Instead of running away from life\'s difficulties, face them with mindful awareness.',
    },
    lifeMessage: {
      hi: 'समस्याएँ शत्रु नहीं, सीखने का अवसर हैं।',
      pb: 'ਸਮੱਸਿਆਵਾਂ ਦੁਸ਼ਮਣ ਨਹੀਂ, ਸਿੱਖਣ ਦਾ ਮੌਕਾ ਹਨ।',
      en: 'Problems are not enemies, but opportunities to learn.',
    },
  },
  {
    num: 2,
    sutra: {
      hi: 'ईश्वर को मानो नहीं, ईश्वर को जानो।',
      pb: 'ਈਸ਼ਵਰ ਨੂੰ ਮੰनो ਨਹੀਂ, ਈਸ਼ਵਰ ਨੂੰ ਜਾਣੋ।',
      en: 'Do not just believe in God, know God.',
    },
    bhavarth: {
      hi: 'केवल परंपरा या सुनी हुई बातों पर विश्वास करने के बजाय सत्य (सत्यनाम) को अनुभव करने का प्रयास करो।',
      pb: 'ਸਿਰਫ਼ ਪਰੰਪਰਾ ਜਾਂ ਸੁਣੀਆਂ-ਸੁਣਾਈਆਂ ਗੱਲਾਂ \'ਤੇ ਵਿਸ਼ਵਾਸ ਕਰਨ ਦੀ ਬਜਾਏ ਸਤਯਨਾਮ ਨੂੰ ਅਨੁਭਵ ਕਰਨ ਦਾ ਯਤਨ ਕਰੋ।',
      en: 'Instead of blindly believing tradition or hearsay, strive to experience Satyanaam directly.',
    },
    lifeMessage: {
      hi: 'श्रद्धा के साथ विवेक और अनुभव भी आवश्यक हैं।',
      pb: 'ਸ਼ਰਧਾ ਦੇ ਨਾਲ ਬਿਬੇਕ ਅਤੇ ਅਨੁਭਵ ਵੀ ਜ਼ਰੂਰੀ ਹਨ।',
      en: 'Alongside faith, discrimination and inner experience are essential.',
    },
  },
  {
    num: 3,
    sutra: {
      hi: 'भक्ति करो नहीं, स्वयं को पहचानो।',
      pb: 'ਭਗਤੀ ਕਰੋ ਨਹੀਂ, ਆਪਣੇ ਆਪ ਨੂੰ ਪਛਾਣੋ।',
      en: 'Do not just perform devotion, recognize your true Self.',
    },
    bhavarth: {
      hi: 'भक्ति को केवल बाहरी क्रिया या दिखावे तक सीमित मत रखो; अपने वास्तविक स्वरूप और भीतर की चेतना को समझो। विश्वास से आगे बढ़कर आत्मचिंतन द्वारा अपने भीतर सत्य को खोजो।',
      pb: 'ਭਗਤੀ ਨੂੰ ਸਿਰਫ਼ ਬਾਹਰੀ ਕਿਰਿਆ ਜਾਂ ਦਿਖਾਵੇ ਤੱਕ ਸੀਮਤ ਨਾ ਰੱਖੋ; ਆਪਣੇ ਅਸਲ ਸਰੂਪ ਅਤੇ ਅੰਦਰਲੀ ਚੇਤਨਾ ਨੂੰ ਸਮਝੋ। ਵਿਸ਼ਵਾਸ ਤੋਂ ਅੱਗੇ ਵਧ ਕੇ ਆਤਮ-ਚਿੰਤਨ ਰਾਹੀਂ ਆਪਣੇ ਅੰਦਰ ਸੱਚ ਨੂੰ ਖੋਜੋ।',
      en: 'Do not limit devotion to mere outer rituals or display; understand your true essence and inner consciousness. Go beyond blind belief and discover truth within through self-reflection.',
    },
    lifeMessage: {
      hi: 'भक्ति का मूल्य उसके जीवन-परिवर्तन में है।',
      pb: 'ਭਗਤੀ ਦਾ ਮੁੱਲ ਉਸਦੇ ਜੀਵਨ-ਪਰਿਵਰਤਨ ਵਿੱਚ ਹੈ।',
      en: 'The true value of devotion lies in its power to transform your life.',
    },
  },
  {
    num: 4,
    sutra: {
      hi: 'अपने को बाहर नहीं, अपने को भीतर खोजो।',
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਹਰ ਨਹੀਂ, ਆਪਣੇ ਆਪ ਨੂੰ ਅੰਦਰ ਖੋਜੋ।',
      en: 'Do not search for yourself outside, seek yourself within.',
    },
    bhavarth: {
      hi: 'अपनी वास्तविक पहचान, शांति और शक्ति बाहरी वस्तुओं में नहीं, आत्मचिंतन में खोजो।',
      pb: 'ਆਪਣੀ ਅਸਲ ਪਛਾਣ, ਸ਼ਾਂਤੀ ਅਤੇ ਸ਼ਕਤੀ ਬਾਹਰੀ ਵਸਤੂਆਂ ਵਿੱਚ ਨਹੀਂ, ਆਤਮ-ਚਿੰਤਨ ਵਿੱਚ ਖੋਜੋ।',
      en: 'Search for your true identity, peace, and power not in external objects, but in deep self-reflection.',
    },
    lifeMessage: {
      hi: 'आत्मज्ञान भीतर से प्रारंभ होता है।',
      pb: 'ਆਤਮ-ਗਿਆਨ ਅੰਦਰੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।',
      en: 'Self-realization begins from within.',
    },
  },
  {
    num: 5,
    sutra: {
      hi: 'ईश्वर से नहीं, अपने कर्मों से डरो।',
      pb: 'ਈਸ਼ਵਰ ਤੋਂ ਨਹੀਂ, ਆਪਣੇ ਕਰਮਾਂ ਤੋਂ ਡਰੋ।',
      en: 'Fear not God, fear your own karma.',
    },
    bhavarth: {
      hi: 'भय का कारण ईश्वर नहीं, बल्कि अपने कर्मों की जिम्मेदारी होनी चाहिए।',
      pb: 'ਡਰ ਦਾ ਕਾਰਨ ਈਸ਼ਵਰ ਨਹੀਂ, ਸਗੋਂ ਆਪਣੇ ਕਰਮਾਂ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
      en: 'The source of fear should not be God, but the accountability of your own actions.',
    },
    lifeMessage: {
      hi: 'अच्छे कर्म ही जीवन की सच्ची सुरक्षा हैं।',
      pb: 'ਚੰਗੇ ਕਰਮ ਹੀ ਜੀਵਨ ਦੀ ਅਸਲ ਸੁਰੱਖਿਆ ਹਨ।',
      en: 'Righteous karma is life\'s true protection.',
    },
  },
  {
    num: 6,
    sutra: {
      hi: 'अंधकार से डरो नहीं, अंधकार से लड़ो।',
      pb: 'ਹਨੇਰੇ ਤੋਂ ਡਰੋ ਨਹੀਂ, ਹਨੇਰੇ ਨਾਲ ਲੜੋ।',
      en: 'Do not fear darkness, fight the darkness.',
    },
    bhavarth: {
      hi: 'अज्ञान, भय और कठिनाइयों से घबराने के बजाय उनका सामना करो।',
      pb: 'ਅਗਿਆਨਤਾ, ਡਰ ਅਤੇ ਮੁਸ਼ਕਿਲਾਂ ਤੋਂ ਘਬਰਾਉਣ ਦੀ ਬਜਾਏ ਉਨ੍ਹਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰੋ।',
      en: 'Instead of panicking over ignorance, fear, and hardships, stand up and face them.',
    },
    lifeMessage: {
      hi: 'साहस ही अंधकार को प्रकाश में बदलता है।',
      pb: 'ਸਾਹਸ ਹੀ ਹਨੇਰੇ ਨੂੰ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
      en: 'Courage alone transforms darkness into light.',
    },
  },
  {
    num: 7,
    sutra: {
      hi: 'चित्त में चिंता नहीं, चित्त में चिंतन करो।',
      pb: 'ਚਿੱਤ ਵਿੱਚ ਚਿੰਤਾ ਨਹੀਂ, ਚਿੱਤ ਵਿੱਚ ਚਿੰਤਨ ਕਰੋ।',
      en: 'Do not harbor anxiety in mind, engage in divine contemplation.',
    },
    bhavarth: {
      hi: 'चिंता मन को कमजोर करती है, जबकि चिंतन समाधान की दिशा देता है।',
      pb: 'ਚਿੰਤਾ ਮਨ ਨੂੰ ਕਮਜ਼ੋਰ ਕਰਦੀ ਹੈ, ਜਦਕਿ ਚਿੰਤਨ ਸਮਾਧਾਨ ਵੱਲ ਸੇਧ ਦਿੰਦਾ ਹੈ।',
      en: 'Worry weakens the mind, whereas contemplation points toward solutions.',
    },
    lifeMessage: {
      hi: 'हर समस्या पर शांत मन से विचार करो।',
      pb: 'ਹਰ ਸਮੱਸਿਆ \'ਤੇ ਸ਼ਾਂਤ ਮਨ ਨਾਲ ਵਿਚਾਰ ਕਰੋ।',
      en: 'Reflect upon every challenge with a calm and centered mind.',
    },
  },
  {
    num: 8,
    sutra: {
      hi: 'मन से हारो नहीं, मन में नमन व मनन करो।',
      pb: 'ਮਨ ਤੋਂ ਹਾਰੋ ਨਹੀਂ, ਮਨ ਵਿੱਚ ਨਮਨ ਅਤੇ ਮੰਨਨ ਕਰੋ।',
      en: 'Do not surrender to the mind, bow in humility and reflect deeply.',
    },
    bhavarth: {
      hi: 'कठिन परिस्थिति में मन को पराजित मत होने दो। अहंकार छोड़कर विनम्रता (नमन) और घबराहट छोड़कर गहन विचार (मनन) को अपनाओ (क्रम: हारो → नमन → मनन → सुधार)।',
      pb: 'ਔਖੇ ਹਾਲਾਤ ਵਿੱਚ ਮਨ ਨੂੰ ਹਾਰਨ ਨਾ ਦਿਓ। ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਿਮਰਤਾ (ਨਮਨ) ਅਤੇ ਘਬਰਾਹਟ ਛੱਡ ਕੇ ਗੰਭੀਰ ਵਿਚਾਰ (ਮੰਨਨ) ਨੂੰ ਅਪਣਾਓ (ਕ੍ਰਮ: ਹਾਰੋ → ਨਮਨ → ਮੰਨਨ → ਸੁਧਾਰ)।',
      en: 'Do not let your mind be defeated in difficult times. Embrace humility (naman) by dropping ego, and deep contemplation (manan) by letting go of panic (sequence: defeat → bow → reflect → uplift).',
    },
    lifeMessage: {
      hi: 'बाहरी सम्मान से अधिक महत्वपूर्ण आंतरिक श्रद्धा है।',
      pb: 'ਬਾਹਰੀ ਸਤਿਕਾਰ ਨਾਲੋਂ ਅੰਦਰੂਨੀ ਸ਼ਰਧਾ ਵਧੇਰੇ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
      en: 'Inner reverence is far more significant than outer praise.',
    },
  },
  {
    num: 9,
    sutra: {
      hi: 'भरोसा दूसरों पर नहीं, भरोसा स्वयं पर करो।',
      pb: 'ਭਰੋਸਾ ਦੂਜਿਆਂ \'ਤੇ ਨਹੀਂ, ਭਰੋਸਾ ਆਪਣੇ ਆਪ \'ਤੇ ਕਰੋ।',
      en: 'Do not rely on others, trust in yourself.',
    },
    bhavarth: {
      hi: 'अपनी क्षमता, विवेक और परिश्रम पर विश्वास रखो।',
      pb: 'ਆਪਣੀ ਸਮਰੱਥਾ, ਬਿਬੇਕ ਅਤੇ ਮਿਹਨਤ \'ਤੇ ਵਿਸ਼ਵਾਸ ਰੱਖੋ।',
      en: 'Have faith in your own inner capacity, discrimination, and diligence.',
    },
    lifeMessage: {
      hi: 'आत्मविश्वास सफलता की पहली सीढ़ी है।',
      pb: 'ਆਤਮ-ਵਿਸ਼ਵਾਸ ਸਫ਼ਲਤਾ ਦੀ ਪਹਿਲੀ ਪੌੜੀ ਹੈ।',
      en: 'Self-confidence is the first step to success.',
    },
  },
  {
    num: 10,
    sutra: {
      hi: 'स्वयं को गुरुर में नहीं, स्वयं को सरूर में रखो।',
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਗੁਰੂਰ ਵਿੱਚ ਨਹੀਂ, ਆਪਣੇ ਆਪ ਨੂੰ ਸਰੂਰ ਵਿੱਚ ਰੱਖੋ।',
      en: 'Keep yourself not in ego, but in divine ecstasy and grace.',
    },
    bhavarth: {
      hi: 'अंकार (गुरुर) में नहीं, बल्कि विनम्रता, सहज आनंद और सत्यनाम-स्मरण के सरूर में जीओ।',
      pb: 'ਹੰਕਾਰ (ਗੁਰੂਰ) ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਨਿਮਰਤਾ, ਸਹਿਜ ਆਨੰਦ ਅਤੇ ਸਤਯਨਾਮ-ਸਿਮਰਨ ਦੇ ਸਰੂਰ ਵਿੱਚ ਜੀਓ।',
      en: 'Live not in arrogance (gurur), but in humility, effortless joy, and the divine ecstasy (saroor) of Satyanaam remembrance.',
    },
    lifeMessage: {
      hi: 'गुरुर व्यक्ति को गिराता है, जबकि सहज आनंद और विनम्रता उसे ऊँचा उठाते हैं।',
      pb: 'ਗੁਰੂਰ ਇਨਸਾਨ ਨੂੰ ਡੇਗਦਾ ਹੈ, ਜਦਕਿ ਸਹਿਜ ਆਨੰਦ ਅਤੇ ਨਿਮਰਤਾ ਉਸਨੂੰ ਉੱਚਾ ਚੁੱਕਦੇ ਹਨ।',
      en: 'Ego pulls a person down, while effortless joy and humility elevate them high.',
    },
  },
];

export const DAS_SUTRAS_METADATA = {
  headerBadge: {
    hi: '🌹।।सत्यनाम।।🌹',
    pb: '🌹।।ਸਤਯਨਾਮ।।🌹',
    en: '🌹||Satyanaam||🌹',
  },
  title: {
    hi: '१० सत्य वचन सूत्र',
    pb: '੧੦ ਸੱਤ ਵਚਨ ਸੂਤਰ',
    en: '10 Satya Vachan Sutras',
  },
  subtitle: {
    hi: 'सतगुरु कबीर साहेब की अमर चेतना से उपजे १० आत्म-जागृति सूत्र — भावार्थ एवं जीवन संदेश',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਮਰ ਚੇਤਨਾ ਤੋਂ ਪ੍ਰਗਟ ਹੋਏ ੧੦ ਆਤਮ-ਜਾਗ੍ਰਿਤੀ ਸੂਤਰ — ਭਾਵਾਰਥ ਅਤੇ ਜੀਵਨ ਸੰਦੇਸ਼',
    en: '10 divine awakening sutras from Satguru Kabir Saheb — Meaning and Life Message',
  },
  bhavarthLabel: {
    hi: 'भावार्थ:',
    pb: 'ਭਾਵਾਰਥ:',
    en: 'Meaning:',
  },
  lifeMessageLabel: {
    hi: 'जीवन संदेश:',
    pb: 'ਜੀਵਨ ਸੰਦੇਸ਼:',
    en: 'Life Message:',
  },
  copyBtn: {
    hi: '१० सूत्र कॉपी करें',
    pb: '੧੦ ਸੂਤਰ ਕਾਪੀ ਕਰੋ',
    en: 'Copy 10 Sutras',
  },
  copiedBtn: {
    hi: '✓ कॉपी हो गया!',
    pb: '✓ ਕਾਪੀ ਹੋ ਗਿਆ!',
    en: '✓ Copied!',
  },
  summaryCardTitle: {
    hi: 'समग्र समीक्षा',
    pb: 'ਸਮੁੱਚੀ ਸਮੀਖਿਆ',
    en: 'Holistic Summary',
  },
  summaryStages: [
    {
      hi: 'सूत्र १-२: जागृति और सत्य की खोज।',
      pb: 'ਸੂਤਰ ੧-੨: ਜਾਗ੍ਰਿਤੀ ਅਤੇ ਸਤ્ય ਦੀ ਖੋਜ।',
      en: 'Sutras 1-2: Awakening and search for truth.',
    },
    {
      hi: 'सूत्र ३-५: आत्मज्ञान और कर्म की जिम्मेदारी।',
      pb: 'ਸੂਤਰ ੩-੫: ਆਤਮ-ਗਿਆਨ ਅਤੇ ਕਰਮ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ।',
      en: 'Sutras 3-5: Self-knowledge and karmic responsibility.',
    },
    {
      hi: 'सूत्र ६-८: मानसिक और आध्यात्मिक साधना।',
      pb: 'ਸੂਤਰ ੬-੮: ਮਾਨਸਿਕ ਅਤੇ ਅਧਿਆਤਮਕ ਸਾਧਨਾ।',
      en: 'Sutras 6-8: Mental and spiritual discipline.',
    },
    {
      hi: 'सूत्र ९-१०: आत्मविश्वास और विनम्रता।',
      pb: 'ਸੂਤਰ ੯-੧੦: ਆਤਮ-ਵਿਸ਼ਵਾਸ ਅਤੇ ਨਿਮਰਤਾ।',
      en: 'Sutras 9-10: Self-confidence and humility.',
    },
  ],
  salutation: {
    hi: '।। साहेब बंदगी साहेब।।🙏',
    pb: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।🙏',
    en: '|| Saheb Bandagi Saheb || 🙏',
  },
};
