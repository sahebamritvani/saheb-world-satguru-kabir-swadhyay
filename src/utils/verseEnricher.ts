import { GranthVerse } from '../data/granths/granthTypes';
import { Sakhi } from '../types';
import { hindiToPunjabiWordConverter } from '../services/transliteration';
import {
  buildStep4SatsangContent,
  deriveDistinctSpiritualEssence,
} from '../services/swadhyayContentEngine';

export function enrichVerseWith5Steps(verse: GranthVerse, angTitleHi: string = 'पावन वाणी'): GranthVerse {
  const hiLines = verse.lines?.hi || [];
  const hiBhavarth = typeof verse.bhavarth === 'string' ? verse.bhavarth : verse.bhavarth?.hi || '';
  const pbBhavarth = typeof verse.bhavarth === 'object' && verse.bhavarth?.pb ? verse.bhavarth.pb : hindiToPunjabiWordConverter(hiBhavarth);
  const enBhavarth = typeof verse.bhavarth === 'object' && verse.bhavarth?.en ? verse.bhavarth.en : hiBhavarth;

  const firstLine = hiLines[0] || hiBhavarth.substring(0, 30);

  const pseudoSakhi = {
    number: 0,
    text: {
      hi: hiLines.join('\n'),
      pb: verse.lines?.pb?.join('\n') || '',
      en: verse.lines?.en?.join('\n') || '',
    },
    bhavarth: { hi: hiBhavarth, pb: pbBhavarth, en: enBhavarth },
    categoryTitle: { hi: angTitleHi, pb: '', en: '' },
    category: angTitleHi,
    wordMeanings: { hi: [], pb: [], en: [] },
  } as unknown as Sakhi;

  // 1. Shabdarth / Word Meanings
  const rawWordMeanings = (verse as any).wordMeanings;
  const shabdarth = (verse.shabdarth && (verse.shabdarth.hi?.length || verse.shabdarth.pb?.length))
    ? verse.shabdarth
    : {
        hi: rawWordMeanings?.hi || [
          { word: 'सतगुरु', meaning: 'सत्य का बोध कराने वाले पूर्ण गुरु' },
          { word: 'सार-शब्द', meaning: 'अविनाशी परमात्मा का नाम एवं आत्म-ज्ञान' }
        ],
        pb: rawWordMeanings?.pb || [
          { word: hindiToPunjabiWordConverter('सतगुरु'), meaning: hindiToPunjabiWordConverter('सत्य का बोध कराने वाले पूर्ण गुरु') }
        ],
        en: rawWordMeanings?.en || [
          { word: 'Satguru', meaning: 'True spiritual Master who reveals divine Truth' }
        ]
      };

  // 2. Bhavarth
  const bhavarth = typeof verse.bhavarth === 'object' && verse.bhavarth.hi
    ? verse.bhavarth
    : { hi: hiBhavarth, pb: pbBhavarth, en: enBhavarth };

  // 3. Step 3: Contemplation (आत्म-मनन)
  const contemplation = verse.contemplation && verse.contemplation.hi
    ? verse.contemplation
    : {
        hi: `क्या मैं अपने दैनिक जीवन में "${firstLine}" की पावन शिक्षा का निष्ठा से चिंतन व पालन करता हूँ?`,
        pb: hindiToPunjabiWordConverter(`क्या मैं अपने दैनिक जीवन में "${firstLine}" की पावन शिक्षा का निष्ठा से चिंतन व पालन करता हूँ?`),
        en: `Do I contemplate and embody the holy wisdom of "${firstLine}" in my everyday life?`
      };

  // 4. Step 4: Practical Application (व्यावहारिक आचरण - theme-aware, zero static boilerplate)
  const practicalApplication = verse.practicalApplication && verse.practicalApplication.hi
    ? verse.practicalApplication
    : {
        hi: buildStep4SatsangContent(pseudoSakhi, 'hi').satsangWithDrishtant,
        pb: buildStep4SatsangContent(pseudoSakhi, 'pb').satsangWithDrishtant,
        en: buildStep4SatsangContent(pseudoSakhi, 'en').satsangWithDrishtant,
      };

  // 5. Step 5: Samarpan Prayer (समर्पण एवं पावन प्रार्थना)
  const samarpanPrayer = verse.samarpanPrayer && verse.samarpanPrayer.hi
    ? verse.samarpanPrayer
    : {
        hi: `हे परम पूज्य सतगुरु देव! आपकी असीम दया से मुझे सत्य का ज्ञान प्राप्त हो। आपके पावन चरणों में मेरा अनंत वंदन है।`,
        pb: hindiToPunjabiWordConverter(`हे परम पूज्य सतगुरु देव! आपकी असीम दया से मुझे सत्य का ज्ञान प्राप्त हो। आपके पावन चरणों में मेरा अनंत वंदन है।`),
        en: `O Satguru! By Your infinite grace, may pure spiritual wisdom awaken within me. My humble salutations at Your lotus feet.`
      };

  // 6. Spiritual Essence (आध्यात्मिक सार — never identical to bhavarth)
  const existingEssenceHi = verse.spiritualEssence?.hi;
  const existingEssencePb = verse.spiritualEssence?.pb;
  const existingEssenceEn = verse.spiritualEssence?.en;

  const spiritualEssence = {
    hi: deriveDistinctSpiritualEssence(hiLines.join(' '), hiBhavarth, existingEssenceHi, 'hi'),
    pb: deriveDistinctSpiritualEssence(hiLines.join(' '), hiBhavarth, existingEssencePb, 'pb'),
    en: deriveDistinctSpiritualEssence(hiLines.join(' '), hiBhavarth, existingEssenceEn, 'en'),
  };

  return {
    ...verse,
    shabdarth,
    bhavarth,
    contemplation,
    practicalApplication,
    samarpanPrayer,
    spiritualEssence
  };
}
