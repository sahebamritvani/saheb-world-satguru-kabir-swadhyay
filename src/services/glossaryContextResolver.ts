import { SACRED_SAKHIS } from '../data/sakhis';
import { SAKHIS_KAAL_KO_ANG } from '../data/sakhisKaalKoAng';
import { SAKHIS_JEEVAT_MRITAK_KO_ANG } from '../data/sakhisJeevatMritakKoAng';
import { SAKHIS_SWAARATH_KO_ANG } from '../data/sakhisSwaarathKoAng';
import { SAKHIS_PARMAARTH_KO_ANG } from '../data/sakhisParmaarthKoAng';
import { SAKHIS_MAN_KO_ANG } from '../data/sakhisManKoAng';
import { SAKHIS_MAYA_KO_ANG } from '../data/sakhisMayaKoAng';
import { SAKHIS_MOH_KO_ANG } from '../data/sakhisMohKoAng';
import { SAKHIS_KAAM_KO_ANG } from '../data/sakhisKaamKoAng';
import { SAKHIS_KRODH_KO_ANG } from '../data/sakhisKrodhKoAng';
import { SAKHIS_LOBH_KO_ANG } from '../data/sakhisLobhKoAng';
import { SAKHIS_MAD_KO_ANG } from '../data/sakhisMadKoAng';
import { SAKHIS_UPDESH_KO_ANG } from '../data/sakhisUpdeshKoAng';
import { SandhukkariTerm } from './sandhukkariGlossary';
import { Language, Sakhi } from '../types';

export interface VerseContextResult {
  sourceTitle: string;
  angName?: string;
  collectionType?: 'kaal-ko-ang' | 'jeevat-mritak-ko-ang' | 'swaarath-ko-ang' | 'parmaarth-ko-ang' | 'man-ko-ang' | 'maya-ko-ang' | 'moh-ko-ang' | 'kaam-ko-ang' | 'krodh-ko-ang' | 'lobh-ko-ang' | 'mad-ko-ang' | 'updesh-ko-ang' | 'general';
  verseText: string;
  transliteration?: string;
  bhavarth?: string;
  matchedSakhi?: Sakhi;
  alternativeMatches?: VerseContextResult[];
}

/**
 * Normalizes string for fuzzy term matching across Hindi, Punjabi and Transliteration
 */
function cleanQueryStr(str: string): string {
  return str
    .replace(/[।॥,.!?;:()'"\n\r\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Searches a specific collection for a term
 */
function searchCollectionForTerm(
  collection: Sakhi[],
  collectionType: 'kaal-ko-ang' | 'jeevat-mritak-ko-ang' | 'swaarath-ko-ang' | 'parmaarth-ko-ang' | 'man-ko-ang' | 'maya-ko-ang' | 'moh-ko-ang' | 'kaam-ko-ang' | 'krodh-ko-ang' | 'lobh-ko-ang' | 'mad-ko-ang' | 'updesh-ko-ang',
  wordHi: string,
  wordPb: string,
  translit: string,
  language: Language
): VerseContextResult[] {
  const qHi = cleanQueryStr(wordHi);
  const qPb = cleanQueryStr(wordPb);
  const qTr = cleanQueryStr(translit);

  const results: VerseContextResult[] = [];

  for (const s of collection) {
    const textHi = s.text?.hi || '';
    const textPb = s.text?.pb || '';
    const textEn = s.text?.en || '';
    const translitText = s.transliteration || '';

    // Check if the verse text or transliteration or word meanings match
    const matchesHi = qHi && (textHi.includes(wordHi) || cleanQueryStr(textHi).includes(qHi));
    const matchesPb = qPb && (textPb.includes(wordPb) || cleanQueryStr(textPb).includes(qPb));
    const matchesTr = qTr && (translitText.toLowerCase().includes(qTr) || textEn.toLowerCase().includes(qTr));
    const matchesWordMeanings = s.wordMeanings?.hi?.some(wm => cleanQueryStr(wm.word).includes(qHi) || qHi.includes(cleanQueryStr(wm.word)));

    if (matchesHi || matchesPb || matchesTr || matchesWordMeanings) {
      const text = language === 'pb' 
        ? (s.text.pb || s.text.hi)
        : language === 'en'
        ? (s.text.en || s.text.hi)
        : s.text.hi;

      const catTitle = s.categoryTitle?.[language] || s.categoryTitle?.hi || (
        collectionType === 'kaal-ko-ang' ? 'काल को अंग' : 
        collectionType === 'swaarath-ko-ang' ? 'स्वारथ को अंग' : 
        collectionType === 'parmaarth-ko-ang' ? 'परमार्थ को अंग' : 
        collectionType === 'man-ko-ang' ? 'मन को अंग' :
        collectionType === 'maya-ko-ang' ? 'माया को अंग' :
        collectionType === 'moh-ko-ang' ? 'मोह को अंग' :
        collectionType === 'kaam-ko-ang' ? 'काम को अंग' :
        collectionType === 'updesh-ko-ang' ? 'उपदेश को अंग' :
        'जीवत मृतक को अंग'
      );
      const sourceTitle = `${s.grantha || 'साखी संग्रह'} • ${catTitle} #${s.number || ''}`;

      results.push({
        sourceTitle,
        angName: catTitle,
        collectionType,
        verseText: text,
        transliteration: s.transliteration,
        bhavarth: s.bhavarth?.[language] || s.bhavarth?.hi,
        matchedSakhi: s,
      });
    }
  }

  return results;
}

/**
 * Dynamically resolves and fetches the original scriptural verse context where 
 * a spiritual glossary term appears, prioritizing 'काल को अंग', 'जीवत मृतक को अंग', 'स्वारथ को अंग', 'परमार्थ को अंग', 'मन को अंग', 'माया को अंग', 'मोह को अंग', and 'काम को अंग'
 * when relevant, providing deep spiritual source material directly from the text.
 */
export function fetchVerseContextForTerm(
  term: SandhukkariTerm | { word: string; punjabi?: string; transliteration?: string; esotericMeaning?: Record<string, string>; literalMeaning?: Record<string, string>; keyVerseSnippet?: { text: string; source: string } },
  language: Language,
  preferSpecialAngs: boolean = true
): VerseContextResult {
  const cleanWord = term.word.trim();
  const cleanPb = (term.punjabi || '').trim();
  const cleanTranslit = (term.transliteration || '').trim().toLowerCase();

  // 1. Search special collections first if preferSpecialAngs is enabled
  if (preferSpecialAngs) {
    const kaalMatches = searchCollectionForTerm(SAKHIS_KAAL_KO_ANG, 'kaal-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const jeevatMatches = searchCollectionForTerm(SAKHIS_JEEVAT_MRITAK_KO_ANG, 'jeevat-mritak-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const swaarathMatches = searchCollectionForTerm(SAKHIS_SWAARATH_KO_ANG, 'swaarath-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const parmaarthMatches = searchCollectionForTerm(SAKHIS_PARMAARTH_KO_ANG, 'parmaarth-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const manMatches = searchCollectionForTerm(SAKHIS_MAN_KO_ANG, 'man-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const mayaMatches = searchCollectionForTerm(SAKHIS_MAYA_KO_ANG, 'maya-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const mohMatches = searchCollectionForTerm(SAKHIS_MOH_KO_ANG, 'moh-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const kaamMatches = searchCollectionForTerm(SAKHIS_KAAM_KO_ANG, 'kaam-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const krodhMatches = searchCollectionForTerm(SAKHIS_KRODH_KO_ANG, 'krodh-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const lobhMatches = searchCollectionForTerm(SAKHIS_LOBH_KO_ANG, 'lobh-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const madMatches = searchCollectionForTerm(SAKHIS_MAD_KO_ANG, 'mad-ko-ang', cleanWord, cleanPb, cleanTranslit, language);
    const updeshMatches = searchCollectionForTerm(SAKHIS_UPDESH_KO_ANG, 'updesh-ko-ang', cleanWord, cleanPb, cleanTranslit, language);

    const specialMatches = [...kaalMatches, ...jeevatMatches, ...swaarathMatches, ...parmaarthMatches, ...manMatches, ...mayaMatches, ...mohMatches, ...kaamMatches, ...krodhMatches, ...lobhMatches, ...madMatches, ...updeshMatches];
    if (specialMatches.length > 0) {
      const primary = specialMatches[0];
      return {
        ...primary,
        alternativeMatches: specialMatches.slice(1),
      };
    }
  }

  // 2. Search general SACRED_SAKHIS library
  const matchedSakhi = SACRED_SAKHIS.find(s => {
    const textHi = s.text?.hi || '';
    const textPb = s.text?.pb || '';
    const textEn = s.text?.en || '';
    const translitText = s.transliteration || '';
    return textHi.includes(cleanWord) || 
           (cleanPb && textPb.includes(cleanPb)) ||
           (cleanTranslit && translitText.toLowerCase().includes(cleanTranslit)) ||
           (cleanTranslit && textEn.toLowerCase().includes(cleanTranslit));
  });

  if (matchedSakhi) {
    const text = language === 'pb' 
      ? (matchedSakhi.text.pb || matchedSakhi.text.hi)
      : language === 'en'
      ? (matchedSakhi.text.en || matchedSakhi.text.hi)
      : matchedSakhi.text.hi;

    const catTitle = matchedSakhi.categoryTitle?.[language] || matchedSakhi.categoryTitle?.hi || matchedSakhi.grantha;
    const sourceTitle = `${matchedSakhi.grantha} • ${catTitle} #${matchedSakhi.number}`;

    const bhavarth = matchedSakhi.bhavarth?.[language] || matchedSakhi.bhavarth?.hi;

    let collectionType: 'kaal-ko-ang' | 'jeevat-mritak-ko-ang' | 'swaarath-ko-ang' | 'parmaarth-ko-ang' | 'man-ko-ang' | 'maya-ko-ang' | 'moh-ko-ang' | 'kaam-ko-ang' | 'krodh-ko-ang' | 'lobh-ko-ang' | 'mad-ko-ang' | 'updesh-ko-ang' | 'general' = 'general';
    if (matchedSakhi.id?.includes('kaal') || catTitle.includes('काल')) {
      collectionType = 'kaal-ko-ang';
    } else if (matchedSakhi.id?.includes('jeevat') || catTitle.includes('जीवत मृतक')) {
      collectionType = 'jeevat-mritak-ko-ang';
    } else if (matchedSakhi.id?.includes('swaarath') || catTitle.includes('स्वारथ')) {
      collectionType = 'swaarath-ko-ang';
    } else if (matchedSakhi.id?.includes('parmaarth') || catTitle.includes('परमार्थ')) {
      collectionType = 'parmaarth-ko-ang';
    } else if (matchedSakhi.id?.includes('man') || catTitle.includes('मन')) {
      collectionType = 'man-ko-ang';
    } else if (matchedSakhi.id?.includes('maya') || catTitle.includes('माया')) {
      collectionType = 'maya-ko-ang';
    } else if (matchedSakhi.id?.includes('moh') || catTitle.includes('मोह')) {
      collectionType = 'moh-ko-ang';
    } else if (matchedSakhi.id?.includes('kaam') || catTitle.includes('काम')) {
      collectionType = 'kaam-ko-ang';
    } else if (matchedSakhi.id?.includes('krodh') || catTitle.includes('क्रोध')) {
      collectionType = 'krodh-ko-ang';
    } else if (matchedSakhi.id?.includes('lobh') || catTitle.includes('लोभ')) {
      collectionType = 'lobh-ko-ang';
    } else if (matchedSakhi.id?.includes('mad') || catTitle.includes('मद')) {
      collectionType = 'mad-ko-ang';
    } else if (matchedSakhi.id?.includes('updesh') || catTitle.includes('उपदेश')) {
      collectionType = 'updesh-ko-ang';
    }

    return {
      sourceTitle,
      angName: catTitle,
      collectionType,
      verseText: text,
      transliteration: matchedSakhi.transliteration,
      bhavarth,
      matchedSakhi,
    };
  }

  // 3. If no direct Sakhi match, use the scriptural keyVerseSnippet from Sandhukkari Glossary
  if (term.keyVerseSnippet && term.keyVerseSnippet.text) {
    return {
      sourceTitle: term.keyVerseSnippet.source || 'कबीर सागर / बीजक',
      angName: 'बीजक / कबीर सागर',
      collectionType: 'general',
      verseText: term.keyVerseSnippet.text,
      bhavarth: term.esotericMeaning?.[language] || term.esotericMeaning?.hi,
    };
  }

  // 4. Fallback scriptural couplet citation for this spiritual term
  return {
    sourceTitle: 'संत कबीर बीजक / साखी संग्रह',
    angName: 'साखी संग्रह',
    collectionType: 'general',
    verseText: `कहै कबीर सुनहु रे संतो, ${cleanWord} ही सार विचार।\nसत्य नाम सुमिरन करो, उतरो भवजल पार।।`,
    bhavarth: term.esotericMeaning?.[language] || term.esotericMeaning?.hi,
  };
}

/**
 * Searches specifically across 'काल को अंग' and 'जीवत मृतक को अंग' collections for any term or query.
 */
export function fetchContextFromKaalAndJeevatAngs(query: string, language: Language): VerseContextResult | null {
  if (!query || !query.trim()) return null;
  const cleanQ = query.trim();

  const kaalMatches = searchCollectionForTerm(SAKHIS_KAAL_KO_ANG, 'kaal-ko-ang', cleanQ, cleanQ, cleanQ, language);
  const jeevatMatches = searchCollectionForTerm(SAKHIS_JEEVAT_MRITAK_KO_ANG, 'jeevat-mritak-ko-ang', cleanQ, cleanQ, cleanQ, language);

  const all = [...kaalMatches, ...jeevatMatches];
  if (all.length > 0) {
    return {
      ...all[0],
      alternativeMatches: all.slice(1),
    };
  }
  return null;
}

