/**
 * Saheb World - Sacred Swadhyay Progressive Web App
 * Types & Domain Interfaces
 */

export type Language = 'hi' | 'pb' | 'en';

export type { SggsKabirVerse } from './data/sggsKabirMetadata';

export type ThemeMode = 'bhojpatra' | 'amrit_neel' | 'mystic_dark' | 'flow_state' | 'high_readability_light';

export type GranthaName = 
  | 'Sakhi Sangrah' 
  | 'Kabir Sagar' 
  | 'Bijak' 
  | 'Anurag Sagar' 
  | 'Padavali'
  | 'Prabhat-Sandhya';

export type SakhiCategory = 
  | 'guru-mahima' 
  | 'chetavani' 
  | 'prem-bhakti' 
  | 'naam-mahima' 
  | 'maya-kaya' 
  | 'satya-aacharan'
  | 'creation-truth'
  | 'maya-illusion'
  | 'aatma-nirikshan'
  | 'sadhu-sangati'
  | 'namrata-ahimsa'
  | 'dhairya-sabar'
  | 'antar-sumiran'
  | 'sadhu-gyan'
  | 'aatma-shodhan'
  | 'abhyas-shram'
  | 'vani-sanyam'
  | 'madhyam-marg'
  | 'nindak-mahima'
  | 'manushya-janam'
  | 'sarva-hit'
  | 'ekta-satyanaam'
  | 'chetavni-jagriti'
  | 'hans-gyan'
  | 'gun-parakh'
  | 'kaal-chetavni'
  | 'nashwartaa-bodh'
  | (string & {});

export interface WordMeaning {
  word: string;
  meaning: string;
}

export interface QuizQuestion {
  id: string;
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
  explanation: {
    hi: string;
    pb: string;
    en: string;
  };
}

export interface Sakhi {
  id: string;
  number: number;
  grantha: GranthaName;
  category: SakhiCategory;
  categoryTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  text: {
    hi: string;
    pb: string;
    en: string;
  };
  transliteration?: string;
  bhavarth: {
    hi: string;
    pb: string;
    en: string;
  };
  wordMeanings: {
    hi: WordMeaning[];
    pb: WordMeaning[];
    en: WordMeaning[];
  };
  contemplation: {
    hi: string;
    pb: string;
    en: string;
  };
  practicalApplication?: {
    hi: string;
    pb: string;
    en: string;
  };
  samarpanPrayer?: {
    hi: string;
    pb: string;
    en: string;
  };
  contextNote?: {
    hi: string;
    pb: string;
    en: string;
  };
  themeTags?: string[];
  quiz?: QuizQuestion[];
}

export interface GratitudeLogEntry {
  id: string;
  date: string;
  items: [string, string, string];
  tags?: string[];
  sakhiNumber?: number;
}

export interface SiddhantNote {
  id: string;
  sakhiNumber: number;
  grantha?: string;
  categoryTitle?: string;
  highlightedText: string;
  reflectionNote?: string;
  date: string;
  color?: string;
  tags?: string[];
}

export interface AccessibilitySettings {
  speechRate: number; // 0.5 to 2.0 (default 0.9 or 1.0)
  speechPitch: number; // 0.5 to 1.5 (default 1.0)
  speechVolume: number; // 0.0 to 1.0 (default 1.0)
  preferredVoice?: string;
  autoScrollOnSpeech?: boolean;
  highlightCurrentVerse?: boolean;
  highContrast?: boolean;
}

export interface DiaryEntry {
  id: string;
  sakhiId?: string;
  sakhiNumber?: number;
  date: string;
  timestamp?: number;
  notes: string;
  favoriteLine?: string;
  category?: string;
  categoryTag?: string;
  mood?: string;
  gratitude?: string;
  gratitude3?: [string, string, string];
  resolution?: string;
}

export type AppView = 
  | 'daily' 
  | 'swadhyay' 
  | 'das-sutra'
  | 'dainik-chintan'
  | 'nitnem-gutka'
  | 'quiz' 
  | 'ulatvasi-quiz'
  | 'ulatvasi-library'
  | 'akhand-path' 
  | 'grantha' 
  | 'diary' 
  | 'dhun'
  | 'jantri'
  | 'mantra-tracker'
  | 'audio-library'
  | 'universe-map'
  | 'health-diagnostic'
  | 'deep-search'
  | 'meditation-timer'
  | 'community-board'
  | 'life-journey'
  | 'auto-correct'
  | 'sacred-ashrams'
  | 'discourse-engine'
  | 'divine-guidance'
  | 'spiritual-discipline'
  | 'sacred-leelas'
  | 'aarti-sanctuary'
  | 'shabd-kosha'
  | 'satsang-video'
  | 'sadhana-goals'
  | 'growth-dashboard'
  | 'bhajan-repository'
  | 'damakheda-index'
  | 'acharya-parampara'
  | 'divine-darshan'
  | 'chetavani-saarang'
  | 'sggs-kabir-bani'
  | 'doha-memory'
  | 'satya-naam'
  | 'aatma-bhushan'
  | 'gyan-chakra'
  | 'nature-wallpaper'
  | 'mool-siddhant'
  | 'hukamnama'
  | 'vani-card-maker'
  | 'satvik-sankalp'
  | 'kabir-gyan-quiz'
  | 'vansh-bayalis'
  | 'satyanaam-panacea';

export type ReaderCustomTheme = 'mool' | 'pothi' | 'black' | 'netra' | 'dark' | 'light' | 'sepia' | 'classic' | 'comfort' | 'deep_sepia' | 'midnight';
export type ReaderFontSize = 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'elderly' | 'xl'; // A-, A, A+, A++, A+++ (Elderly Senior Citizen 8XL)
export type ReaderTarget = 5 | 11 | 21 | 51 | 108 | 0; // 0 = Full path

export interface NitnemVersePair {
  id: number | string;
  type: 'mangal' | 'vandana' | 'doha' | 'chaupai' | 'pada' | 'shabad' | 'sakhi' | 'stuti' | 'aarti' | 'sortha' | 'chhand' | 'ramaini' | 'ulatbaasi';
  lines: {
    hi: string[];
    pb?: string[];
    en?: string[];
  };
  shabdarth?: {
    hi?: WordMeaning[];
    pb?: WordMeaning[];
    en?: WordMeaning[];
  };
  bhavarth?: {
    hi: string;
    pb: string;
    en: string;
  };
  marmNote?: {
    hi: string;
    pb: string;
    en: string;
  };
  spiritualEssence?: {
    hi: string;
    pb?: string;
    en?: string;
  };
}

export interface NitnemSection {
  id: string;
  majorCategoryId?: 'prabhat-path' | 'sandhya-path' | 'gayatri' | 'poonam-mahatmya' | 'chalisa' | 'barahmasi' | 'teesa-yantra';
  majorCategoryTitle?: {
    hi: string;
    pb: string;
    en: string;
  };
  subGroup?: string;
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  subtitle?: {
    hi: string;
    pb: string;
    en: string;
  };
  iconName?: string;
  estimatedMinutes?: number;
  totalVerses: number;
  verses: NitnemVersePair[];
  isCustomPlaceholder?: boolean;
}

export interface NityaVaniConfig {
  enabled: boolean;
  time: string; // e.g. "05:00"
  subscribedDays: number;
}

export interface SpiritualRank {
  minScore: number;
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  description: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const SACRED_BRANDING = {
  header: {
    hi: '🌹।।सत्यनाम।।🌹',
    pb: '🌹।।ਸਤਯਨਾਮ।।🌹',
    en: '🌹||Satyanaam||🌹',
  },
  footer: {
    hi: '।।साहेब बन्दगी साहेब।। 🙏',
    pb: '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।। 🙏',
    en: '||Saheb Bandagi Saheb|| 🙏',
  },
} as const;

import { APP_ASSETS } from './assets/assetsRegistry';

export { APP_ASSETS };

export type StudyStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type ActiveTab = 
  | 'daily-sakhi' 
  | 'swadhyay-steps' 
  | 'sangrah' 
  | 'quiz' 
  | 'akhand-path' 
  | 'diary' 
  | 'dhun'
  | 'settings';
