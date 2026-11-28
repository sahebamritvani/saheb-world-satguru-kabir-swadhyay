import { Language } from '../../types';

export type LocalizedText = {
  hi: string;
  pb: string;
  en: string;
};

export interface GranthDialog {
  speaker: LocalizedText;
  text: LocalizedText;
}

export interface GranthVerse {
  id: number | string;
  type: 'doha' | 'chaupai' | 'pada' | 'ramaini' | 'shabad' | 'salok' | 'ulatbaasi' | 'sakhi' | 'chhand' | 'katha' | 'mangal' | 'aarti' | 'stuti' | 'vandana' | 'sortha';
  category?: 'Mulvani' | 'Ramaini' | 'Sabad' | 'Sakhi' | 'Prasang';
  mulvani?: {
    hi: string[];
    pb: string[];
    en: string[];
  };
  dialogues?: GranthDialog[];
  wordMeanings?: {
    hi?: { word: string; meaning: string }[];
    pb?: { word: string; meaning: string }[];
    en?: { word: string; meaning: string }[];
  };
  saralBhavarth?: LocalizedText;
  deepInsight?: LocalizedText;
  dailyDiscipline?: {
    title: LocalizedText;
    actionStep: LocalizedText;
  };
  reflectionQuestion?: LocalizedText;
  lines: {
    hi: string[];
    pb: string[];
    en: string[];
  };
  shabdarth?: {
    hi?: { word: string; meaning: string }[];
    pb?: { word: string; meaning: string }[];
    en?: { word: string; meaning: string }[];
  };
  bhavarth?: LocalizedText;
  contemplation?: LocalizedText;
  practicalApplication?: LocalizedText;
  samarpanPrayer?: LocalizedText;
  spiritualEssence?: LocalizedText;
  englishTranslation?: string;
  translationEn?: string;
}

export interface GranthChapter {
  id: string;
  chapterNumber: number;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  verses: GranthVerse[];
}

export interface MasterGranth {
  id: string;
  slug: 'nitnem-gutka' | 'kabir-sagar' | 'bijak' | 'shabdawali' | 'sakhi-sangrah' | 'ulatbaasi' | 'granthavali' | (string & {});
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  shortTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  subtitle: {
    hi: string;
    pb: string;
    en: string;
  };
  category: 'nitnem' | 'mool-granth' | 'shabda' | 'sakhi' | 'rahasya' | 'katha';
  iconName: string;
  bannerColor: string;
  accentColor: string;
  totalChapters: number;
  estimatedHours: {
    hi: string;
    pb: string;
    en: string;
  } | string;
  description: {
    hi: string;
    pb: string;
    en: string;
  };
  chapters: GranthChapter[];
}
