import masterIndexJson from './nitnemMasterIndex.json';
import { Language } from '../types';

export interface SubChapterIndexItem {
  id: string;
  section_id?: string;
  hindi: string;
  punjabi: string;
  english?: string;
}

export interface GranthSuchiSection {
  section_id: string;
  major_category_id: 'prabhat-path' | 'sandhya-path' | 'gayatri' | 'poonam-mahatmya' | 'chalisa' | 'barahmasi' | 'teesa-yantra';
  hindi_title: string;
  punjabi_title: string;
  english_title?: string;
  sub_chapters: SubChapterIndexItem[];
}

export interface MasterNitnemIndexData {
  book_title_hindi: string;
  book_title_punjabi: string;
  book_title_english?: string;
  granth_suchi: GranthSuchiSection[];
}

export const MASTER_NITNEM_INDEX: MasterNitnemIndexData = masterIndexJson as MasterNitnemIndexData;

/**
 * Strict Multilingual Conditional Resolvers for Nitnem Gutka Index:
 * - If user language is Punjabi/Gurmukhi ('pb'), render Punjabi title.
 * - If user language is English ('en'), render English title.
 * - Otherwise (Hindi 'hi', or other), render Hindi title.
 */
export function getLocalizedBookTitle(language: Language): string {
  if (language === 'pb') {
    return MASTER_NITNEM_INDEX.book_title_punjabi;
  }
  if (language === 'en') {
    return MASTER_NITNEM_INDEX.book_title_english || 'Satguru Kabir Saheb Nitnem Gutka Saheb';
  }
  return MASTER_NITNEM_INDEX.book_title_hindi;
}

export function getLocalizedChapterTitle(section: GranthSuchiSection, language: Language): string {
  if (language === 'pb') {
    return section.punjabi_title;
  }
  if (language === 'en') {
    return section.english_title || section.hindi_title;
  }
  return section.hindi_title;
}

export function getLocalizedSubChapterTitle(subChapter: SubChapterIndexItem, language: Language): string {
  if (language === 'pb') {
    return subChapter.punjabi;
  }
  if (language === 'en') {
    return subChapter.english || subChapter.hindi;
  }
  return subChapter.hindi;
}

/**
 * Maps a SubChapter ID or section_id to the appropriate Nitnem section ID
 */
export function resolveNitnemSectionId(subChapter: SubChapterIndexItem, parentSection: GranthSuchiSection): string {
  if (subChapter.section_id) {
    const sid = subChapter.section_id;
    if (sid.includes('gyan-gudri') || sid.includes('gyan-guddi')) {
      return sid.replace('gyan-gudri', 'gyan-gudadi').replace('gyan-guddi', 'gyan-gudadi');
    }
    return sid;
  }
  // Check if title mentions Gyan Guddi/Gudri
  if (subChapter.hindi && (subChapter.hindi.includes('गुदड़ी') || subChapter.hindi.includes('गुदरी'))) {
    return parentSection.major_category_id === 'sandhya-path' ? 'sandhya-gyan-gudadi' : 'prabhat-gyan-gudadi';
  }
  // Default fallbacks based on major category
  switch (parentSection.major_category_id) {
    case 'prabhat-path':
      return 'prabhat-aarambh-vandana';
    case 'sandhya-path':
      return 'sandhya-aarambh-vandana';
    case 'gayatri':
      return 'gayatri-adi';
    case 'poonam-mahatmya':
      return 'poonam-vandana';
    case 'chalisa':
      return 'chalisa-vandana';
    case 'barahmasi':
      return 'barahmasi-path';
    case 'teesa-yantra':
      return 'teesa-yantra-path';
    default:
      return 'prabhat-aarambh-vandana';
  }
}
