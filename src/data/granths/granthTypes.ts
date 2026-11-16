import { Language } from '../../types';

export interface GranthVerse {
  id: number | string;
  type: 'doha' | 'chaupai' | 'pada' | 'ramaini' | 'shabad' | 'salok' | 'ulatbaasi' | 'sakhi' | 'chhand' | 'katha' | 'mangal' | 'aarti' | 'stuti' | 'vandana' | 'sortha';
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
  bhavarth?: {
    hi: string;
    pb: string;
    en: string;
  };
  contemplation?: {
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
  spiritualEssence?: {
    hi: string;
    pb: string;
    en: string;
  };
}

export interface GranthChapter {
  id: string;
  chapterNumber: number;
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  subtitle: {
    hi: string;
    pb: string;
    en: string;
  };
  description: {
    hi: string;
    pb: string;
    en: string;
  };
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
