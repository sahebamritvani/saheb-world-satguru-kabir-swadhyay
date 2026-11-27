import { Language } from '../types';

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
  },
];

export const getUlatvasiRank = (score: number, _language: Language = 'hi') => {
  if (score >= 1500) {
    return {
      title: { hi: 'परम तत्वदर्शी', pb: 'ਪਰਮ ਤੱਤਦਰਸ਼ੀ', en: 'Supreme Mystic Master' },
      badge: '👑',
      auraColor: '#F59E0B',
      description: {
        hi: 'सतगुरु कबीर साहेब की समस्त उलटबांसियों का गूढ़ आध्यात्मिक भेद आपको हृदयंगम हो चुका है। आप सच्चे पारखी हंस हैं।',
        pb: 'ਤੁਸੀਂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ ਦਾ ਗੂੜ੍ਹ ਭੇਦ ਸਮਝ ਲਿਆ ਹੈ। ਤੁਸੀਂ ਸੱਚੇ ਪਾਰਖੀ ਹੰਸ ਹੋ।',
        en: 'You have decoded the highest esoteric paradoxes of Satguru Kabir. You stand as a true Illumined Soul.',
      },
    };
  }
  if (score >= 1000) {
    return {
      title: { hi: 'साहेब कृपा पात्र', pb: 'ਸਾਹੇਬ ਕਿਰਪਾ ਪਾਤਰ', en: 'Beloved Disciple' },
      badge: '🪷',
      auraColor: '#EC4899',
      description: {
        hi: 'आपकी सुरति आंतरिक योग और अनहद रहस्यों को भेदने में सक्षम हो चुकी है। साहेब की कृपा आप पर बरस रही है।',
        pb: 'ਤੁਹਾਡੀ ਸੁਰਤਿ ਅੰਦਰੂਨੀ ਨਾਦ ਅਤੇ ਭੇਦਾਂ ਨੂੰ ਸਮਝਣ ਦੇ ਯੋਗ ਹੋ ਚੁੱਕੀ ਹੈ।',
        en: 'Your consciousness has pierced the veil of inner yoga and unstruck sound. Divine grace shines upon you.',
      },
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
        en: 'Discerning spirit from illusion, you have unlocked the esoteric keys of many mystical paradoxes.',
      },
    };
  }
  if (score >= 300) {
    return {
      title: { hi: 'गूढ़ भेदिया', pb: 'ਗੂੜ੍ਹ ਭੇਦੀਆ', en: 'Mystery Decoder' },
      badge: '🔮',
      auraColor: '#3B82F6',
      description: {
        hi: 'सतगुरु कबीर साहेब की रूपक शैली और प्रतीक विद्या में आपकी गहरी गति बन रही है।',
        pb: 'ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਰਹੱਸਮਈ ਪ੍ਰਤੀਕਾਂ ਵਿੱਚ ਤੁਹਾਡੀ ਸਮਝ ਵਧ ਰਹੀ ਹੈ।',
        en: 'Your spiritual intellect is blossoming into the symbolic mysteries and divine allegories of Kabir.',
      },
    };
  }
  return {
    title: { hi: 'कौतूहल खोजी', pb: 'ਕੌਤਕ ਖੋਜੀ', en: 'Curious Seeker' },
    badge: '🌟',
    auraColor: '#10B981',
    description: {
      hi: 'उलटबांसी यात्रा का आरंभ हो चुका है। प्रत्येक पहेली को मन से नहीं, आत्मा के विवेक से परखें।',
      pb: 'ਸਵਾਧਿਆਏ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋਈ ਹੈ। ਹਰ ਬੁਝਾਰਤ ਨੂੰ ਆਤਮਕ ਵਿਵੇਕ ਨਾਲ ਸਮਝੋ।',
      en: 'The mystic journey has begun. Decipher each paradox with spiritual intellect rather than logical intellect.',
    },
  };
};
