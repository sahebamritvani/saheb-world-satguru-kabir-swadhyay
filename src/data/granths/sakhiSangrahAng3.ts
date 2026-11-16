import { GranthVerse } from './granthTypes';
import { SAKHIS_BATCH_39 } from '../sakhisBatch39';
import { devanagariToGurmukhi } from '../../services/transliteration';

export const SAKHI_SANGRAH_ANG_3_VERSES: GranthVerse[] = SAKHIS_BATCH_39
  .filter(s => s.category === 'guru-parakh-ko-ang')
  .map((sakhi, idx) => {
    const rawLinesHi = sakhi.text.hi ? sakhi.text.hi.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const rawLinesPb = sakhi.text.pb ? sakhi.text.pb.split('\n').map(l => l.trim()).filter(Boolean) : rawLinesHi.map(l => devanagariToGurmukhi(l));
    const rawLinesEn = sakhi.text.en ? sakhi.text.en.split('\n').map(l => l.trim()).filter(Boolean) : rawLinesHi;

    return {
      id: `ang-3-v${idx + 1}`,
      type: 'sakhi' as const,
      lines: {
        hi: rawLinesHi,
        pb: rawLinesPb,
        en: rawLinesEn
      },
      shabdarth: {
        hi: sakhi.wordMeanings?.hi || [],
        pb: sakhi.wordMeanings?.pb || [],
        en: sakhi.wordMeanings?.en || []
      },
      bhavarth: {
        hi: sakhi.bhavarth.hi,
        pb: sakhi.bhavarth.pb || devanagariToGurmukhi(sakhi.bhavarth.hi),
        en: sakhi.bhavarth.en || sakhi.bhavarth.hi
      },
      contemplation: sakhi.contemplation ? {
        hi: sakhi.contemplation.hi,
        pb: sakhi.contemplation.pb || devanagariToGurmukhi(sakhi.contemplation.hi),
        en: sakhi.contemplation.en || sakhi.contemplation.hi
      } : undefined,
      practicalApplication: sakhi.practicalApplication ? {
        hi: sakhi.practicalApplication.hi,
        pb: sakhi.practicalApplication.pb || devanagariToGurmukhi(sakhi.practicalApplication.hi),
        en: sakhi.practicalApplication.en || sakhi.practicalApplication.hi
      } : undefined,
      samarpanPrayer: sakhi.samarpanPrayer ? {
        hi: sakhi.samarpanPrayer.hi,
        pb: sakhi.samarpanPrayer.pb || devanagariToGurmukhi(sakhi.samarpanPrayer.hi),
        en: sakhi.samarpanPrayer.en || sakhi.samarpanPrayer.hi
      } : undefined
    };
  });
