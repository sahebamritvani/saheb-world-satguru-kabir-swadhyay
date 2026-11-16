import { Language } from '../types';
import { ULATVASI_BATCH_4_TO_30 } from './ulatvasiBatch4To30';
import { ULATVASI_BATCH_31_TO_45 } from './ulatvasiBatch31To45';
import { ULATVASI_BATCH_46_TO_60 } from './ulatvasiBatch46To60';
import { ULATVASI_BATCH_61_TO_70 } from './ulatvasiBatch61To70';
import { ULATVASI_BATCH_71_TO_80 } from './ulatvasiBatch71To80';
import { ULATVASI_BATCH_81_TO_90 } from './ulatvasiBatch81To90';
import { ULATVASI_BATCH_91_TO_100 } from './ulatvasiBatch91To100';
import { ULATVASI_BATCH_101_TO_110 } from './ulatvasiBatch101To110';
import { ULATVASI_BATCH_111_TO_120 } from './ulatvasiBatch111To120';
import { ULATVASI_BATCH_121_TO_130 } from './ulatvasiBatch121To130';
import { ULATVASI_BATCH_131_TO_140 } from './ulatvasiBatch131To140';
import { ULATVASI_BATCH_141_TO_150 } from './ulatvasiBatch141To150';
import { ULATVASI_BATCH_151_TO_160 } from './ulatvasiBatch151To160';
import { ULATVASI_BATCH_161_TO_170 } from './ulatvasiBatch161To170';
import { ULATVASI_BATCH_171_TO_180 } from './ulatvasiBatch171To180';
import { ULATVASI_BATCH_181_TO_190 } from './ulatvasiBatch181To190';
import { ULATVASI_BATCH_191_TO_200 } from './ulatvasiBatch191To200';
import { ULATVASI_BATCH_201_TO_210 } from './ulatvasiBatch201To210';
import { ULATVASI_BATCH_211_TO_220 } from './ulatvasiBatch211To220';
import { ULATVASI_BATCH_221_TO_230 } from './ulatvasiBatch221To230';
import { ULATVASI_BATCH_231_TO_240 } from './ulatvasiBatch231To240';
import { ULATVASI_BATCH_241_TO_250 } from './ulatvasiBatch241To250';

export type UlatvasiRealm = 'kautuhal' | 'antaryog' | 'shunya-samadhi';

export interface UlatvasiSymbol {
  symbol: string;
  meaning: {
    hi: string;
    pb: string;
    en: string;
  };
}

export interface UlatvasiQuestion {
  id: string;
  number: number;
  realm: UlatvasiRealm;
  realmTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  verse: {
    hi: string;
    pb: string;
    en: string;
  };
  literalParadox: {
    hi: string;
    pb: string;
    en: string;
  };
  clueHint: {
    hi: string;
    pb: string;
    en: string;
  };
  symbols: UlatvasiSymbol[];
  question: {
    hi: string;
    pb: string;
    en: string;
  };
  options: {
    hi: string[];
    pb: string[];
    en: string[];
  };
  correctIndex: number;
  mysticalUnveiling: {
    headline: {
      hi: string;
      pb: string;
      en: string;
    };
    deepMeaning: {
      hi: string;
      pb: string;
      en: string;
    };
    kabirPhilosophy: {
      hi: string;
      pb: string;
      en: string;
    };
    parakhiInsight: {
      hi: string;
      pb: string;
      en: string;
    };
  };
  wisdomPoints: number;
}

export const ULATVASI_DATABASE: UlatvasiQuestion[] = [
  {
    id: 'ub-1',
    number: 1,
    realm: 'kautuhal',
    realmTitle: { hi: 'कौतूहल (Curiosity)', pb: 'ਕੌਤਕ (Curiosity)', en: 'Curiosity' },
    title: { hi: '1. बरसे कंबल, भींजे पानी', pb: '1. ਬਰਸੇ ਕੰਬਲ, ਭੀਂਜੇ ਪਾਣੀ', en: '1. Blanket Rains, Water Gets Wet' },
    verse: {
      hi: '"एक अचम्भा देखा रे भाई, थारा सिंह चरावै गाई। पहले पूत पीछे भई माई, चेला के गुरु लागै पाई। जल की मछली तरुवर ब्याई, कुतवा को ले गई बिलाई। तले बलद ऊपर है गाड़ी, धरनी उलटि अकासै जाई। बरसै कम्बल भींजै पानी, कहै कबीर सोई संत ग्यानी॥"',
      pb: '"ਇਕ ਅਚੰਭਾ ਦੇਖਿਆ ਰੇ ਭਾਈ, ਥਾਰਾ ਸਿੰਘ ਚਰਾਵੈ ਗਾਈ। ਪਹਿਲੇ ਪੂਤ ਪਿੱਛੇ ਭਈ ਮਾਈ, ਚੇਲਾ ਕੇ ਗੁਰੂ ਲਾਗੈ ਪਾਈ।..."',
      en: '"An amazing wonder seen, oh brother: lion grazes the cow. Son born before mother, disciple touching guru\'s feet..."'
    },
    literalParadox: {
      hi: 'सिंह गाय चरा रहा है, बेटा पहले पैदा हुआ और माँ बाद में, मछली पेड़ पर बच्चे दे रही है, कंबल बरस रहा है जिससे पानी भीग रहा है।',
      pb: 'ਸਿੰਘ ਗਾਂ ਚਰਾ ਰਿਹਾ ਹੈ, ਪੁੱਤਰ ਪਹਿਲਾਂ ਅਤੇ ਮਾਂ ਬਾਅਦ ਵਿੱਚ ਪੈਦਾ ਹੋਈ, ਕੰਬਲ ਬਰਸ ਰਿਹਾ ਹੈ ਅਤੇ ਪਾਣੀ ਭਿੱਜ ਰਿਹਾ ਹੈ।',
      en: 'Lion grazes cow, son born before mother, blanket rains and water gets wet.'
    },
    clueHint: {
      hi: 'सिंह ज्ञान का प्रतीक है और गाय इंद्रियों की। कंबल परमात्मा की कृपा है।',
      pb: 'ਸਿੰਘ ਗਿਆਨ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਅਤੇ ਗਾਂ ਇੰਦਰੀਆਂ ਦੀ। ਕੰਬਲ ਪ੍ਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ ਹੈ।',
      en: 'Lion symbolizes wisdom and cow represents senses. Blanket symbolizes divine grace.'
    },
    symbols: [
      { symbol: 'सिंह (Lion)', meaning: { hi: 'ज्ञान / विवेक', pb: 'ਗਿਆਨ / ਬਿਬੇਕ', en: 'Wisdom / Discrimination' } },
      { symbol: 'गाई (Cow)', meaning: { hi: 'इंद्रियाँ', pb: 'ਇੰਦਰੀਆਂ', en: 'Senses' } },
      { symbol: 'कंबल (Blanket)', meaning: { hi: 'परमात्मा की कृपा / वाणी', pb: 'ਪ੍ਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ', en: 'Divine Grace / Vani' } }
    ],
    question: {
      hi: 'इस उलटबांसी में "सिंह" और "गाई" किसका प्रतीक हैं?',
      pb: 'ਇਸ ਉਲਟਬਾਂਸੀ ਵਿੱਚ "ਸਿੰਘ" ਅਤੇ "ਗਾਈ" ਕਿਸ ਦਾ ਪ੍ਰਤੀਕ ਹਨ?',
      en: 'In this paradox, what do the "Lion" and "Cow" symbolize?'
    },
    options: {
      hi: ['ज्ञान और इंद्रियाँ', 'राजा और प्रजा', 'आकाश और पाताल', 'गुरु और शिष्य'],
      pb: ['ਗਿਆਨ ਅਤੇ ਇੰਦਰੀਆਂ', 'ਰਾਜਾ ਅਤੇ ਪ੍ਰਜਾ', 'ਆਕਾਸ਼ ਅਤੇ ਪਾਤਾਲ', 'ਗੁਰੂ ਅਤੇ ਸਿੱਖ'],
      en: ['Wisdom and Senses', 'King and Subjects', 'Sky and Netherworld', 'Guru and Disciple']
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'सिंह और गाय का योग', pb: 'ਸਿੰਘ ਅਤੇ ਗਾਂ ਦਾ ਯੋਗ', en: 'Union of Lion and Cow' },
      deepMeaning: {
        hi: 'सिंह ज्ञान/विवेक का प्रतीक है और गाय हमारी इंद्रियों की। जब ज्ञान जाग्रत होता है, तो वह चंचल इंद्रियों को अपने वश में कर लेता है।',
        pb: 'ਸਿੰਘ ਗਿਆਨ ਦਾ ਅਤੇ ਗਾਂ ਇੰਦਰੀਆਂ ਦਾ ਪ੍ਰਤੀਕ ਹੈ। ਗਿਆਨ ਜਾਗਰੂਕ ਹੋਣ ਤੇ ਇੰਦਰੀਆਂ ਵਸ਼ ਵਿੱਚ ਹੋ ਜਾਂਦੀਆਂ ਹਨ।',
        en: 'Lion symbolizes wisdom and cow the senses. When wisdom awakens, it subjugates the fickle senses.'
      },
      kabirPhilosophy: {
        hi: 'गुरु की कृपा (कंबल) बरसने पर संसारी जीव ज्ञान के रंग में भीग जाता है।',
        pb: 'ਗੁਰੂ ਦੀ ਕਿਰਪਾ (ਕੰਬਲ) ਬਰਸਣ ਤੇ ਸੰਸਾਰੀ ਜੀਵ ਗਿਆਨ ਦੇ ਰੰਗ ਵਿੱਚ ਭਿੱਜ ਜਾਂਦਾ ਹੈ।',
        en: 'When guru\'s grace rains, the worldly soul is drenched in the colors of divine wisdom.'
      },
      parakhiInsight: { hi: 'सत्यनाम साहेब।', pb: 'ਸਤਯਨਾਮ ਸਾਹਿਬ।', en: 'Satyanaam Saheb.' }
    },
    wisdomPoints: 15
  },
  {
    id: 'ub-2',
    number: 2,
    realm: 'antaryog',
    realmTitle: { hi: 'अंतर्योग (Yogic)', pb: 'ਅੰਤਰਯੋਗ (Yogic)', en: 'Yogic' },
    title: { hi: '2. चींटी के मुख में हाथी', pb: '2. ਚੀਂਟੀ ਦੇ ਮੁੱਖ ਵਿੱਚ ਹਾਥੀ', en: '2. Elephant in Ant\'s Mouth' },
    verse: {
      hi: '"धरती उलटि अकासै जाय, चिउंटी के मुख हस्ति समाय। बिना पवन सो पर्वत उड़े, जीव जन्तु सब वृक्षा चढ़े॥"',
      pb: '"ਧਰਤੀ ਉਲਟਿ ਅਕਾਸੈ ਜਾਇ, ਚਿਉਂਟੀ ਕੇ ਮੁੱਖ ਹਸਤੀ ਸਮਾਇ।..."',
      en: '"Earth turns upward to the sky, elephant fits in ant\'s mouth. Mountains fly without wind, all creatures climb trees."'
    },
    literalParadox: {
      hi: 'धरती उलटकर आकाश में जा रही है और चींटी के मुंह में हाथी समा रहा है।',
      pb: 'ਧਰਤੀ ਉਲਟ ਕੇ ਆਕਾਸ਼ ਵਿੱਚ ਜਾ ਰਹੀ ਹੈ ਅਤੇ ਚੀਂਟੀ ਦੇ ਮੁੱਖ ਵਿੱਚ ਹਾਥੀ ਸਮਾ ਰਿਹਾ ਹੈ।',
      en: 'Earth turns upside down into the sky and an elephant fits inside an ant\'s mouth.'
    },
    clueHint: {
      hi: 'चींटी सूक्ष्म आत्मा या विनम्रता है, और हाथी विशाल अहंकार है।',
      pb: 'ਚੀਂਟੀ ਸੂਖਮ ਆਤਮਾ ਜਾਂ ਨਿਮਰਤਾ ਹੈ, ਅਤੇ ਹਾਥੀ ਵਿਸ਼ਾਲ ਹੰਕਾਰ ਹੈ।',
      en: 'Ant is the subtle soul or humility, while elephant is colossal ego.'
    },
    symbols: [
      { symbol: 'चींटी (Ant)', meaning: { hi: 'सूक्ष्म आत्मा / विनम्रता', pb: 'ਸੂਖਮ ਆਤਮਾ', en: 'Subtle Soul / Humility' } },
      { symbol: 'हाथी (Elephant)', meaning: { hi: 'विशाल अहंकार', pb: 'ਵਿਸ਼ਾਲ ਹੰਕਾਰ', en: 'Colossal Ego' } },
      { symbol: 'धरती (Earth)', meaning: { hi: 'मूलाधार चक्र', pb: 'ਮੂਲਾਧਾਰ ਚੱਕਰ', en: 'Muladhar Chakra' } }
    ],
    question: {
      hi: 'चींटी और हाथी के इस प्रतीक का आध्यात्मिक अर्थ क्या है?',
      pb: 'ਚੀਂਟੀ ਅਤੇ ਹਾਥੀ ਦੇ ਇਸ ਪ੍ਰਤੀਕ ਦਾ ਆਧਿਆਤਮਿਕ ਅਰਥ ਕੀ ਹੈ?',
      en: 'What is the spiritual meaning of the ant and elephant symbol?'
    },
    options: {
      hi: ['आत्मा द्वारा अहंकार का नाश', 'जानवरों की दौड़', 'भौतिक भूगोल', 'मौसम परिवर्तन'],
      pb: ['ਆਤਮਾ ਦੁਆਰਾ ਹੰਕਾਰ ਦਾ ਨਾਸ਼', 'ਜਾਨਵਰਾਂ ਦੀ ਦੌੜ', 'ਭੌਤਿਕ ਭੂਗੋਲ', 'ਮੌਸਮ ਪਰਿਵर्तन'],
      en: ['Soul overcoming ego', 'Animal race', 'Physical geography', 'Weather change']
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'अहंकार का विसर्जन', pb: 'ਹੰਕਾਰ ਦਾ ਵਿਸਰਜਨ', en: 'Dissolution of Ego' },
      deepMeaning: {
        hi: 'जब आत्मा जाग्रत होती है, तो वह विनम्रता (चींटी) के बल पर बड़े से बड़े अहंकार (हाथी) को निगल जाती है।',
        pb: 'ਜਦੋਂ ਆਤਮਾ ਜਾਗਰੂਕ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਉਹ ਨਿਮਰਤਾ ਨਾਲ ਵੱਡੇ ਤੋਂ ਵੱਡੇ ਹੰਕਾਰ ਨੂੰ ਨਿਗਲ ਜਾਂਦੀ ਹੈ।',
        en: 'When soul awakens, through humility (ant) it devours colossal ego (elephant).'
      },
      kabirPhilosophy: {
        hi: 'ध्यान मूलाधार से सहस्रार की ओर मुड़ता है।',
        pb: 'ਧਿਆਨ ਮੂਲਾਧਾਰ ਤੋਂ ਸਹਸ੍ਰਾਰ ਵੱਲ ਮੁੜਦਾ ਹੈ।',
        en: 'Meditation turns from Muladhar to Sahasrara chakra.'
      },
      parakhiInsight: { hi: 'सत्यनाम साहेब।', pb: 'ਸਤਯਨਾਮ ਸਾਹਿਬ।', en: 'Satyanaam Saheb.' }
    },
    wisdomPoints: 15
  },
  {
    id: 'ub-3',
    number: 3,
    realm: 'shunya-samadhi',
    realmTitle: { hi: 'शून्य-समाधि (Absolute)', pb: 'ਸੁੰਨ-ਸਮਾਧੀ (Absolute)', en: 'Absolute' },
    title: { hi: '3. सूखे सरोवर में हिलोरें', pb: '3. ਸੁੱਕੇ ਸਰਵਰ ਵਿੱਚ ਹਿਲੋਰੇ', en: '3. Waves in Dry Lake' },
    verse: {
      hi: '"सूखे सरवर उठे हिलोरा, बिनु जल तक वा करत किलोरा। बैठा पंडित पढ़े कुरान, बिन देखे का करत बखान॥"',
      pb: '"ਸੁੱਕੇ ਸਰਵਰ ਉੱਠੇ ਹਿਲੋਰਾ, ਬਿਨੁ ਜਲ ਤਕ ਵਾ ਕਰਤ ਕਿਲੋਰਾ।..."',
      en: '"Waves rise in a dry lake, playing without water. Scholar sits reading scripture, explaining without seeing."'
    },
    literalParadox: {
      hi: 'सूखे तालाब में पानी की लहरें उठ रही हैं और बिना जल के जीव आनंद ले रहे हैं।',
      pb: 'ਸੁੱਕੇ ਤਾਲਾਬ ਵਿੱਚ ਪਾਣੀ ਦੀਆਂ ਲਹਿਰਾਂ ਉੱਠ ਰਹੀਆਂ ਹਨ।',
      en: 'Water waves arise in a dry pond and beings enjoy without water.'
    },
    clueHint: {
      hi: 'सूखा सरोवर संसार से विरक्त मन का प्रतीक है।',
      pb: 'ਸੁੱਕਾ ਸਰਵਰ ਸੰਸਾਰ ਤੋਂ ਵਿਰਕਤ ਮਨ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      en: 'Dry lake symbolizes a mind detached from worldly desires.'
    },
    symbols: [
      { symbol: 'सूखा सरवर (Dry Lake)', meaning: { hi: 'विरक्त मन', pb: 'ਵਿਰਕਤ ਮਨ', en: 'Detached Mind' } },
      { symbol: 'हिलोरें (Waves)', meaning: { hi: 'भक्ति और आत्मानंद', pb: 'ਭਗਤੀ ਅਤੇ ਆਤਮਾਨੰਦ', en: 'Waves of Devotional Bliss' } }
    ],
    question: {
      hi: '"सूखा सरोवर" किसे कहा गया है?',
      pb: '"ਸੁੱਕਾ ਸਰਵਰ" ਕਿਸ ਨੂੰ ਕਿਹਾ ਗਿਆ ਹੈ?',
      en: 'What is referred to as the "Dry Lake"?'
    },
    options: {
      hi: ['वैरागी एवं विरक्त मन', 'रेगिस्तान', 'खाली बर्तन', 'बंद कमरा'],
      pb: ['ਵਿਰਕਤ ਮਨ', 'ਰੇਗਿਸਤਾਨ', 'ਖਾਲੀ ਭਾਂਡਾ', 'ਬੰਦ ਕਮਰਾ'],
      en: ['Detached mind', 'Desert', 'Empty pot', 'Closed room']
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'वैराग्य का आनंद', pb: 'ਵੈਰਾਗ ਦਾ ਆਨੰਦ', en: 'Bliss of Detachment' },
      deepMeaning: {
        hi: 'जब मन बाहरी इच्छाओं से सूख जाता है (वैराग्य), तब उसके भीतर भक्ति और आत्मानंद की अद्भुत हिलोरें उठने लगती हैं।',
        pb: 'ਜਦੋਂ ਮਨ ਬਾਹਰੀ ਇੱਛਾਵਾਂ ਤੋਂ ਸੁੱਕ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਭਗਤੀ ਅਤੇ ਆਨੰਦ ਦੀਆਂ ਲਹਿਰਾਂ ਉੱਠਦੀਆਂ ਹਨ।',
        en: 'When mind dries of outer desires, wonderful waves of divine bliss arise within.'
      },
      kabirPhilosophy: {
        hi: 'किताबी ज्ञान केवल ढोंग है, वास्तविक अनुभव अंतर्मुखी साधना से होता है।',
        pb: 'ਕਿਤਾਬੀ ਗਿਆਨ ਕੇਵਲ ਦਿਖਾਵਾ ਹੈ।',
        en: 'Bookish scholarship without inner realization is mere hypocrisy.'
      },
      parakhiInsight: { hi: 'सत्यनाम साहेब।', pb: 'ਸਤਯਨਾਮ ਸਾਹਿਬ।', en: 'Satyanaam Saheb.' }
    },
    wisdomPoints: 15
  },
  ...ULATVASI_BATCH_4_TO_30,
  ...ULATVASI_BATCH_31_TO_45,
  ...ULATVASI_BATCH_46_TO_60,
  ...ULATVASI_BATCH_61_TO_70,
  ...ULATVASI_BATCH_71_TO_80,
  ...ULATVASI_BATCH_81_TO_90,
  ...ULATVASI_BATCH_91_TO_100,
  ...ULATVASI_BATCH_101_TO_110,
  ...ULATVASI_BATCH_111_TO_120,
  ...ULATVASI_BATCH_121_TO_130,
  ...ULATVASI_BATCH_131_TO_140,
  ...ULATVASI_BATCH_141_TO_150,
  ...ULATVASI_BATCH_151_TO_160,
  ...ULATVASI_BATCH_161_TO_170,
  ...ULATVASI_BATCH_171_TO_180,
  ...ULATVASI_BATCH_181_TO_190,
  ...ULATVASI_BATCH_191_TO_200,
  ...ULATVASI_BATCH_201_TO_210,
  ...ULATVASI_BATCH_211_TO_220,
  ...ULATVASI_BATCH_221_TO_230,
  ...ULATVASI_BATCH_231_TO_240,
  ...ULATVASI_BATCH_241_TO_250
];


export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  solvedCount: number;
  streak: number;
  accuracy: number;
  title: string;
  badge: string;
  timestamp: number;
  isCurrentUser?: boolean;
}

export const INITIAL_SEEKERS_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'seeker-1',
    name: 'परम हंस साधक (Param Hans)',
    score: 1850,
    solvedCount: 10,
    streak: 10,
    accuracy: 98,
    title: 'परम तत्वदर्शी (Supreme Mystic)',
    badge: '👑',
    timestamp: Date.now() - 3600000 * 2,
  }
];

export const getUlatvasiRank = (score: number, language: Language = 'hi') => {
  if (score >= 1500) {
    return {
      title: { hi: 'परम तत्वदर्शी', pb: 'ਪਰਮ ਤੱਤਦਰਸ਼ੀ', en: 'Supreme Mystic Master' },
      badge: '👑',
      auraColor: '#F59E0B',
      description: {
        hi: 'कबीर साहेब की समस्त उलटबांसियों का गूढ़ आध्यात्मिक भेद आपको हृदयंगम हो चुका है। आप सच्चे पारखी हंस हैं।',
        pb: 'ਤੁਸੀਂ ਕਬੀਰ ਸਾਹਿਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ ਦਾ ਗੂੜ੍ਹ ਭੇਦ ਸਮਝ ਲਿਆ ਹੈ। ਤੁਸੀਂ ਸੱਚੇ ਪਾਰਖੀ ਹੰਸ ਹੋ।',
        en: 'You have decoded the highest esoteric paradoxes of Satguru Kabir. You stand as a true Illumined Soul.'
      }
    };
  }
  if (score >= 1000) {
    return {
      title: { hi: 'साहेब कृपा पात्र', pb: 'ਸਾਹਿਬ ਕਿਰਪਾ ਪਾਤਰ', en: 'Beloved Disciple' },
      badge: '🪷',
      auraColor: '#EC4899',
      description: {
        hi: 'आपकी सुरति आंतरिक योग और अनहद रहस्यों को भेदने में सक्षम हो चुकी है। साहेब की कृपा आप पर बरस रही है।',
        pb: 'ਤੁਹਾਡੀ ਸੁਰਤਿ ਅੰਦਰੂਨੀ ਨਾਦ ਅਤੇ ਭੇਦਾਂ ਨੂੰ ਸਮਝਣ ਦੇ ਯੋਗ ਹੋ ਚੁੱਕੀ ਹੈ।',
        en: 'Your consciousness has pierced the veil of inner yoga and unstruck sound. Divine grace shines upon you.'
      }
    };
  }
  if (score >= 600) {
    return {
      title: { hi: 'उलटबांसी पारखी', pb: 'ਉਲਟਬਾਂਸੀ ਪਾਰਖੀ', en: 'Paradox Master' },
      badge: '💎',
      auraColor: '#8B5CF6',
      description: {
        hi: 'माया और आत्मा के द्वंद्व को समझकर आपने अधिकांश पहेलियों के आध्यात्मिक अर्थ खोल लिए हैं।',
        pb: 'ਮਾਇਆ ਅਤੇ ਆਤਮਾ ਦੇ ਭੇਦ ਨੂੰ ਸਮਝ ਕੇ ਤੁਸੀਂ ਕਈ ਬੁਝਾਰਤਾਂ ਹੱਲ ਕਰ ਲਈਆਂ ਹਨ।',
        en: 'Discerning spirit from illusion, you have unlocked the esoteric keys of many mystical paradoxes.'
      }
    };
  }
  if (score >= 300) {
    return {
      title: { hi: 'गूढ़ भेदिया', pb: 'ਗੂੜ੍ਹ ਭੇਦੀਆ', en: 'Mystery Decoder' },
      badge: '🔮',
      auraColor: '#3B82F6',
      description: {
        hi: 'कबीर साहेब की रूपक शैली और प्रतीक विद्या में आपकी गहरी गति बन रही है।',
        pb: 'ਕਬੀਰ ਸਾਹਿਬ ਦੇ ਰਹੱਸਮਈ ਪ੍ਰਤੀਕਾਂ ਵਿੱਚ ਤੁਹਾਡੀ ਸਮਝ ਵਧ ਰਹੀ ਹੈ।',
        en: 'Your spiritual intellect is blossoming into the symbolic mysteries and divine allegories of Kabir.'
      }
    };
  }
  return {
    title: { hi: 'कौतूहल खोजी', pb: 'ਕੌਤਕ ਖੋਜੀ', en: 'Curious Seeker' },
    badge: '🌟',
    auraColor: '#10B981',
    description: {
      hi: 'उलटबांसी यात्रा का आरंभ हो चुका है। प्रत्येक पहेली को मन से नहीं, आत्मा के विवेक से परखें।',
      pb: 'ਸਵਾਧਿਆਏ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋਈ ਹੈ। ਹਰ ਬੁਝਾਰਤ ਨੂੰ ਆਤਮਕ ਵਿਵੇਕ ਨਾਲ ਸਮਝੋ।',
      en: 'The mystic journey has begun. Decipher each paradox with spiritual intellect rather than logical intellect.'
    }
  };
};
