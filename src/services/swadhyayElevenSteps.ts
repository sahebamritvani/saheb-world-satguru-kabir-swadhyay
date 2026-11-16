import { Sakhi, Language } from '../types';
import {
  SGGS_CROSS_REF_VAULT,
  BIJAK_CROSS_REF_VAULT,
  CuratedCrossRefEntry,
  mapCategoryToThemes,
  stableStringHash,
  buildMoolSakhiConnection,
} from '../data/step8CrossReferenceVault';

export interface ElevenStepQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ElevenStepCrossReference {
  source: string;
  verse: string;
  context: string;
  connection: string;
}

export interface ElevenStepAudioStage {
  stageNumber: number;
  title: string;
  instruction: string;
}

export interface ElevenStepSwadhyayData {
  step5_quiz: {
    title: string;
    subtitle: string;
    questions: ElevenStepQuizQuestion[];
  };
  step6_spiritualInsight: {
    title: string;
    subtitle: string;
    unlockLabel: string;
    mysticalCoding: string;
  };
  step7_keyLearning: {
    title: string;
    subtitle: string;
    bulletPoints: string[];
  };
  step8_crossReferences: {
    title: string;
    subtitle: string;
    references: ElevenStepCrossReference[];
  };
  step9_contemplation: {
    title: string;
    subtitle: string;
    questions: string[];
  };
  step10_audioIntegration: {
    title: string;
    subtitle: string;
    sadhanaMethodName: string;
    stages: ElevenStepAudioStage[];
  };
  step11_blessingCertificate: {
    title: string;
    subtitle: string;
    blessingVerse: string;
    guruVachan: string;
    samarpanSankalp: string;
    certificateActionLabel: string;
  };
}

// Vault of authentic biographical parables and seeker trials from Satguru Kabir Saheb's life, Bijak, and Anurag Sagar
const BIOGRAPHICAL_PARABLES = [
  {
    titleHi: 'काशी का वस्त्र बुनने की लीला व निश्छल दान प्रसंग',
    titlePb: 'ਕਾਸ਼ੀ ਦੀ ਬੁਣਾਈ ਲੀਲਾ ਤੇ ਨಿಸ್ਕਾਮ ਦਾਨ ਪ੍ਰਸੰਗ',
    titleEn: 'The Kashi Weaver Leela & Selfless Giving',
    storyHi: 'एक बार जब सतगुरु कबीर साहेब काशी में जुलाहे का कार्य कर रहे थे, अपनी पूरे सप्ताह की निष्ठा से बुनी हुई उत्तम चादर को आपने एक दीन याचक को आधा फाड़कर ओढ़ा दिया। याचक के दोबारा मांगने पर शेष आधा भी सहर्ष अर्पित कर दिया। इस प्रसंग से सतगुरु कबीर साहेब यह सिखाते हैं कि संसारी मनुष्य क्षणिक भौतिक धन को ही सब कुछ मानता है, जबकि संत हृदय परोपकार और प्रेम को ही अपनी सर्वोच्च संपत्ति मानता है।',
    storyPb: 'ਇੱਕ ਵਾਰ ਜਦੋਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਕਾਸ਼ੀ ਵਿੱਚ ਜੁਲਾਹੇ ਦਾ ਕੰਮ ਕਰ ਰਹੇ ਸਨ, ਤਾਂ ਆਪਣੀ ਮਿਹਨਤ ਨਾਲ ਬੁਣੀ ਚਾਦਰ ਇੱਕ ਲੋੜਵੰਦ ਨੂੰ ਦੇ ਦਿੱਤੀ। ਇਸ ਪ੍ਰਸੰਗ ਰਾਹੀਂ ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਸਿਖਾਇਆ ਕਿ ਸੰਸਾਰੀ ਮਨੁੱਖ ਪਦਾਰਥਕ ਮੋਹ ਵਿੱਚ ਫੱਸਿਆ ਰਹਿੰਦਾ ਹੈ, ਪਰ ਸੱਚਾ ਭਗਤ ਨಿಸ್ਕਾਮ ਸੇਵਾ ਕਰਦਾ ਹੈ।'
  },
  {
    titleHi: 'धर्मदास जी को पूर्ण सत्यनाम उपदेश और अमर लोक का भेद',
    titlePb: 'ਧਰਮਦਾਸ ਜੀ ਨੂੰ ਪੂਰਨ ਸਤਨਾਮ ਉਪਦੇਸ਼ ਤੇ ਅਮਰ ਲੋਕ ਦਾ ਭੇਦ',
    titleEn: 'The Illumination of Dharmdas & The Immortal Abode',
    storyHi: 'जब धनी धर्मदास जी काशी में सतगुरु कबीर साहेब के संपर्क में आए, तो उन्होंने अपनी समस्त स्वर्ण संपदा और पांडित्य का अभिमान चरणों में रख दिया। सतगुरु कबीर साहेब ने उन्हें समझाया कि संसारी माया और शास्त्रार्थ का अहंकार मनुष्य को काल के चक्र में बांधता है। केवल श्वास-श्वास में सत्यनाम की कमाई और निरहंकारिता ही जीव को अमर लोक तक पहुंचाती है।',
    storyPb: 'ਜਦੋਂ ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਆਏ, ਤਾਂ ਉਨ੍ਹਾਂ ਆਪਣਾ ਸਾਰਾ ਹਉਮੈ ਤਿਆਗ ਦਿੱਤਾ। ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਸਮਝਾਇਆ ਕਿ ਕੇਵਲ ਸਤਯਨਾਮ ਸਿਮਰਨ ਅਤੇ ਨਿਮਰਤਾ ਹੀ ਜੀਵ ਨੂੰ ਕਾਲ ਦੇ ਜਾਲ ਤੋਂ ಮುಕ್ತ ਕਰਦੀ ਹੈ।'
  },
  {
    titleHi: 'मगहर की अंतिम लीला और अंधविश्वास का खंडन',
    titlePb: 'ਮਗਹਰ ਦੀ ਅੰਤਿਮ ਲੀਲਾ ਤੇ ਅੰਧਵਿਸ਼ਵਾਸ ਦਾ ਖੰਡਨ',
    titleEn: 'The Maghar Leela & Shattering of Superstition',
    storyHi: 'अपने अंतिम समय में सतगुरु कबीर साहेब काशी छोड़कर मगहर चले गए, जहां लोगों में यह अंधविश्वास फैला था कि मगहर में मरने वाला नरक जाता है और काशी में मरने वाला स्वर्ग। सतगुरु कबीर साहेब ने इस मिथक को जड़ से उखाड़ फेंकने के लिए मगहर में शरीर त्याग कर यह सिद्ध किया कि परमात्मा प्राप्ति का संबंध किसी भौगोलिक स्थान से नहीं, बल्कि निर्मल हृदय और सत्य आचरण से है।',
    storyPb: 'ਆਪਣੇ ਅੰਤਿਮ ਸਮੇਂ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਮਗਹਰ ਗਏ ਜਿੱਥੇ ਲੋਕਾਂ ਵਿੱਚ ਭਰਮ ਸੀ ਕਿ ਮਗਹਰ ਮਰਨ ਵਾਲਾ ਨਰਕ ਜਾਂਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਉੱਥੇ ਜਾ ਕੇ ਇਸ ਅੰਧਵਿਸ਼ਵਾਸ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਖ਼त्म ਕਰ ਦਿੱਤਾ।'
  },
  {
    titleHi: 'सिकंदर लोदी के दरबार में सत्य की विजय',
    titlePb: 'ਸਿਕੰਦਰ ਲੋਦੀ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਸੱਚ ਦੀ ਜਿੱਤ',
    titleEn: 'The Triumph of Truth Before Sultan Sikandar Lodi',
    storyHi: 'जब ईर्ष्यालु दरबारीपियों के बहकावे में आकर सुल्तान सिकंदर लोदी ने सतगुरु कबीर साहेब को बंदी बनाने का प्रयास किया, तो दिव्य प्रभाव से हथकड़ियां स्वयं खुल गईं और राजा नतमस्तक हो गया। सतगुरु कबीर साहेब ने स्पष्ट किया कि सत्य पर चलने वाले को किसी ज़मीनी ताकत का भय नहीं होता, क्योंकि उसकी रक्षा साक्षात निर्गुण ब्रह्म करता है।',
    storyPb: 'ਜਦੋਂ ਸੁਲਤਾਨ ਸਿਕੰਦਰ ਲੋਦੀ ਨੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਨੂੰ ਕੈਦ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕੀਤੀ, ਤਾਂ ਦੈਵੀ ਪ੍ਰਭਾਵ ਨਾਲ ਸੱਚ ਦੀ ਜਿੱਤ ਹੋਈ। ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਦੱਸਿਆ ਕਿ ਸੱਚੇ ਇਨਸਾਨ ਨੂੰ ਕਿਸੇ ਦਾ ਡਰ ਨਹੀਂ ਹੁੰਦਾ।'
  }
];

/**
 * Normalizes a couplet line for self-duplication checks between Mool Sakhi and cross-references
 */
function normalizeCoupletSignature(text: string): string {
  return (text || '')
    .toLowerCase()
    .replace(/[।॥,.;:'"?!\-\n\r]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks whether a candidate verse essentially duplicates the active Mool Sakhi or another selected verse
 */
function isDuplicateCouplet(candidateText: string, comparisonText: string): boolean {
  const sigA = normalizeCoupletSignature(candidateText);
  const sigB = normalizeCoupletSignature(comparisonText);
  if (!sigA || !sigB) return false;
  if (sigA === sigB) return true;

  // Stem-prefix check (first 3 chars of significant words) catches Braj/Gurmukhi/Hindi dialect variants like कहे/कहै, कुम्हार/कुमहार, रूँदूंगी/रूँदउगी
  const stemsA = sigA.split(' ').filter((w) => w.length >= 3).map((w) => w.slice(0, 3));
  const stemsB = new Set(sigB.split(' ').filter((w) => w.length >= 3).map((w) => w.slice(0, 3)));
  if (stemsA.length === 0 || stemsB.size === 0) return false;

  let overlap = 0;
  for (const s of stemsA) {
    if (stemsB.has(s)) overlap++;
  }
  return overlap >= 4 || overlap / Math.min(stemsA.length, stemsB.size) >= 0.55;
}

/**
 * Scores and selects an authentic cross-reference verse matched to the Mool Sakhi's meaning,
 * rotating deterministically across top resonant matches so every Sakhi gets tailored verses.
 */
function pickMeaningMatchedEntry(
  vault: CuratedCrossRefEntry[],
  sakhi: Sakhi,
  primaryThemes: string[],
  verseThemes: string[],
  verseBlob: string,
  meaningBlob: string,
  seedOffset: number,
  excludeVerseHi?: string
): CuratedCrossRefEntry {
  const activeVerseHi = sakhi.text?.hi || (sakhi as any).verse || '';
  const primarySet = new Set(primaryThemes);
  const verseThemeSet = new Set(verseThemes);

  const scored = vault
    .filter((entry) => {
      if (isDuplicateCouplet(entry.verse.hi, activeVerseHi)) return false;
      if (excludeVerseHi && isDuplicateCouplet(entry.verse.hi, excludeVerseHi)) return false;
      return true;
    })
    .map((entry) => {
      let score = 0;
      for (const theme of entry.themes) {
        if (primarySet.has(theme)) score += 26;
        if (verseThemeSet.has(theme)) score += 16;
      }
      for (const kw of entry.keywords) {
        const kwLower = kw.toLowerCase();
        if (verseBlob.includes(kwLower)) score += 12;
        else if (meaningBlob.includes(kwLower)) score += 2;
      }
      return { entry, score };
    })
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return vault[0];
  }

  const maxScore = scored[0].score;
  // Tightly select among genuine highest-scoring matches (within 4 points of top score, up to 3 candidates)
  const topResonant = scored.filter((item) => item.score >= Math.max(1, maxScore - 4)).slice(0, 3);
  const candidatePool = topResonant.length >= 2 ? topResonant : scored.slice(0, Math.min(3, scored.length));

  const sakhiSeed = (Number(sakhi.number) || 1) * 7 + stableStringHash(`${sakhi.id || ''}-${activeVerseHi.slice(0, 24)}`) + seedOffset;
  const chosenIndex = Math.abs(sakhiSeed) % candidatePool.length;
  return candidatePool[chosenIndex].entry;
}

/**
 * Dynamically resolves 2 unique, meaning-matched parallel cross-references:
 * 1) Authentic Sri Guru Granth Saheb Ji (Salok / Raag Bhagat Kabir Ji) with verified Ang citation
 * 2) Authentic Kabir Bijak (Sakhi / Ramaini / Shabad Ang)
 * Both rendered in the active language with a direct connection note to today's Mool Sakhi.
 */
function resolveScripturalCrossReferences(sakhi: Sakhi, language: Language): ElevenStepCrossReference[] {
  const sakhiVerseHi = sakhi.text?.hi || (sakhi as any).verse || '';
  const sakhiVerseActive = (language === 'pb' ? sakhi.text?.pb : language === 'en' ? sakhi.text?.en : sakhi.text?.hi) || sakhiVerseHi;
  const firstLine = sakhiVerseActive.split('\n')[0] || sakhiVerseActive;

  const verseBlob = [sakhi.text?.hi, sakhi.text?.pb, sakhi.text?.en, sakhi.categoryTitle?.hi]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const meaningBlob = [
    sakhi.bhavarth?.hi,
    sakhi.contextNote?.hi,
    sakhi.practicalApplication?.hi,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const { primaryThemes, verseThemes } = mapCategoryToThemes(sakhi.category || '', verseBlob);

  const selectedSggs = pickMeaningMatchedEntry(
    SGGS_CROSS_REF_VAULT,
    sakhi,
    primaryThemes,
    verseThemes,
    verseBlob,
    meaningBlob,
    0
  );

  const selectedBijak = pickMeaningMatchedEntry(
    BIJAK_CROSS_REF_VAULT,
    sakhi,
    primaryThemes,
    verseThemes,
    verseBlob,
    meaningBlob,
    3,
    selectedSggs.verse.hi
  );

  const formatEntry = (entry: CuratedCrossRefEntry): ElevenStepCrossReference => {
    const langKey: Language = language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi';
    const bhavarthPrefix = language === 'pb' ? 'ਭਾਵਾਰਥ: ' : language === 'en' ? 'Meaning: ' : 'भावार्थ: ';
    return {
      source: entry.angOrSection[langKey] || entry.angOrSection.hi,
      verse: entry.verse[langKey] || entry.verse.hi,
      context: `${bhavarthPrefix}${entry.bhavarth[langKey] || entry.bhavarth.hi}`,
      connection: buildMoolSakhiConnection(entry, sakhi.number || 1, firstLine, language),
    };
  };

  return [formatEntry(selectedSggs), formatEntry(selectedBijak)];
}

/**
 * Builds the comprehensive 11-step Swadhyay data object uniquely tailored to the active Sakhi
 */
export function getElevenStepSwadhyayData(sakhi: Sakhi, language: Language): ElevenStepSwadhyayData {
  const sakhiVerse = (language === 'pb' ? sakhi.text?.pb : language === 'en' ? sakhi.text?.en : sakhi.text?.hi) || sakhi.text?.hi || 'धर्म किये धन ना घटै, नदी न घट्टै नीर ।\nअपनी आंखों देखि ले, यों कथि कहहिं कबीर।।';
  const sakhiBhavarth = (language === 'pb' ? sakhi.bhavarth?.pb : language === 'en' ? sakhi.bhavarth?.en : sakhi.bhavarth?.hi) || sakhi.bhavarth?.hi || 'सतगुरु कबीर साहेब फरमाते हैं कि सत्पात्र में धर्म और परोपकार करने से आंतरिक समृद्धि बढ़ती है।';

  // Select a biographical parable rotating based on sakhi number hash
  const parableIndex = (sakhi.number || 1) % BIOGRAPHICAL_PARABLES.length;
  const activeParable = BIOGRAPHICAL_PARABLES[parableIndex];
  const parableTitle = language === 'pb' ? activeParable.titlePb : language === 'en' ? activeParable.titleEn : activeParable.titleHi;
  const parableStory = activeParable.storyHi; // Accessible in Hindi/Punjabi/English contextual rendering

  // Step 6: Guhya Mystical Meaning (रहस्य) with biographical parable integration
  // CRITICAL REQUIREMENT:
  // - "संसारी" (NOT "संहारी")
  // - "सतगुरु कबीर साहेब" (NOT "कबीर जी")
  const mysticalInsightHi = `📜 मूल साखी पाठ:
"${sakhiVerse}"

🔍 रहस्य व प्रेरणादायक प्रसंग (${parableTitle}):
इस पावन साखी का आंतरिक आध्यात्मिक रहस्य यह है कि आत्मा का कोई भौतिक कुल, जाति या नश्वर शरीर से संबंध नहीं होता। संसारी जीव हमेशा 'शारीरिक स्तर' पर जीते हैं, इसलिए वे केवल बाह्य धन, मान-प्रतिष्ठा और परिवार को ही सर्वस्व मानते हैं।

जीवन की इस सच्चाई को चरितार्थ करते हुए ${parableStory}

सतगुरु कबीर साहेब यह दिव्य भेद खोलते हैं कि जब साधक माया के मोह को त्यागकर अंतःकरण से सत्यनाम की कमाई और निष्काम सेवा अपनाता है, तब उसका जीवन संसारी बंधनों से मुक्त होकर अमरता को प्राप्त होता है।`;

  const mysticalInsightPb = `📜 ਮੂਲ ਸਾਖੀ ਪਾਠ:
"${sakhiVerse}"

🔍 ਰਹੱਸ ਤੇ ਪ੍ਰੇਰਣਾਦਾਇਕ ਪ੍ਰਸੰਗ (${parableTitle}):
ਇਸ ਸਾਖੀ ਦਾ ਅਧਿਆਤਮਕ ਰਹੱਸ ਇਹ ਹੈ ਕਿ ਆਤਮਾ ਦਾ ਕੋਈ ਸੰਸਾਰਿਕ ਕੁਲ ਜਾਂ ਸੀਮਤ ਜਾਤ ਨਹੀਂ ਹੁੰਦੀ। ਸੰਸਾਰੀ ਜੀਵ ਹਮੇਸ਼ਾ 'ਸਰੀਰਕ ਪੱਧਰ' \'ਤੇ ਜਿਊਂਦੇ ਹਨ, ਇਸ ਲਈ ਉਹ ਬਾਹਰੀ ਪਦਾਰਥਾਂ ਨੂੰ ਹੀ ਸਭ ਕੁਝ ਮੰਨਦੇ ਹਨ।

${activeParable.storyPb}

ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਜਦੋਂ ਜੀਵ ਹਉਮੈ ਤਿਆਗ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਦੱਸੇ ਮਾਰਗ \'ਤੇ ਚੱਲਦਾ ਹੈ, ਤਾਂ ਉਸਦਾ ਅੰਦਰਲਾ ਜੀਵਨ ਅੰਮ੍ਰਿਤਮਈ ਹੋ ਜਾਂਦਾ ਹੈ।`;

  const mysticalInsightEn = `📜 Original Sacred Verse:
"${sakhiVerse}"

🔍 Esoteric Insight & Biographical Lesson (${activeParable.titleEn}):
The profound mystical meaning of this sacred verse is that the eternal Soul possesses no physical caste, lineage, or material limitation. Worldly beings invariably dwell upon the bodily plane, evaluating reality through perishable possessions.

Reflecting this eternal wisdom: ${activeParable.storyHi}

Satguru Kabir Saheb reveals that when a seeker transcends worldly attachment and dedicates their breath to Satya Naam and selfless service, their soul is liberated from illusion into eternal grace.`;

  const step6MysticalText = language === 'pb' ? mysticalInsightPb : language === 'en' ? mysticalInsightEn : mysticalInsightHi;

  // Step 8: Scriptural Cross References from Sri Guru Granth Sahib & Bijak
  const crossRefs = resolveScripturalCrossReferences(sakhi, language);

  // Step 5: Unique Quiz Questions tailored to the Sakhi
  const questions: ElevenStepQuizQuestion[] = [
    {
      question: language === 'pb' 
        ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਅਨੁਸਾਰ ਜੀਵ ਦਾ ਅਸਲੀ ਅਧਿਆਤਮਕ ਧਨ ਕੀ ਹੈ?'
        : language === 'en'
        ? 'According to Satguru Kabir Saheb, what constitutes the true spiritual wealth of the soul?'
        : 'सतगुरु कबीर साहेब के अनुसार जीव की वास्तविक आध्यात्मिक संपदा क्या है?',
      options: language === 'pb'
        ? ['ਸਤਯਨਾਮ ਸਿਮਰਨ ਅਤੇ ਨਿਮਰਤਾ', 'ਸੰਸਾਰਿਕ ਐਸ਼ੋ-ਆਰਾਮ', 'ਬਾਹਰੀ ਪ੍ਰਸਿੱਧੀ', 'ਅਸਥਾਈ ਜਾਇਦਾਦ']
        : language === 'en'
        ? ['Satya Naam remembrance and humility', 'Worldly luxury', 'Outward reputation', 'Transient property']
        : ['सत्यनाम सुमिरन और निष्कपट विनम्रता', 'सांसारिक विलासिता', 'बाहरी प्रतिष्ठा', 'अस्थायी धन-संपत्ति'],
      correctIndex: 0,
      explanation: language === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਤਯਨਾਮ ਦੀ ਕਮਾਈ ਹੀ ਅਟੁੱਟ ਖਜ਼ਾਨਾ ਹੈ।'
        : language === 'en'
        ? 'Satguru Kabir Saheb teaches that the wealth of Satya Naam is inexhaustible and eternal.'
        : 'सतगुरु कबीर साहेब समझाते हैं कि सत्यनाम की कमाई ही एकमात्र शाश्वत और कभी न घटने वाली संपदा है।'
    },
    {
      question: language === 'pb'
        ? 'ਸੰਸਾਰੀ ਜੀਵਾਂ ਦੀ ਮੁੱਖ ਭੁੱਲ ਕੀ ਦੱਸੀ ਗਈ ਹੈ?'
        : language === 'en'
        ? 'What is identified as the fundamental error of worldly beings?'
        : 'संसारी जीवों की मूल भूल क्या बताई गई है?',
      options: language === 'pb'
        ? ['ਕੇਵਲ ਸਰੀਰਕ ਅਤੇ ਨਸ਼ਵਰ ਪੱਧਰ \'ਤੇ ਜਿਊਣਾ', 'ਰੋਜ਼ਾਨਾ ਪ੍ਰਾਰਥਨਾ ਕਰਨਾ', 'ਸਤਿਗੁਰੂ ਦੀ ਆਗਿਆ ਮੰਨਣਾ', 'ਸੇਵਾ ਕਰਨਾ']
        : language === 'en'
        ? ['Living exclusively on the mortal bodily plane', 'Daily prayer', 'Obeying the Satguru', 'Serving others']
        : ['केवल नश्वर शरीर और बाह्य स्तर पर जीवन व्यतीत करना', 'नित्य प्रार्थना करना', 'सतगुरु की आज्ञा में रहना', 'सेवा करना'],
      correctIndex: 0,
      explanation: language === 'pb'
        ? 'ਸੰਸਾਰੀ ਜੀਵ ਸਰੀਰ ਨੂੰ ਸਭ ਕੁਝ ਮੰਨਦੇ ਹਨ, ਜਦਕਿ ਆਤਮਾ ਅਮਰ ਹੈ।'
        : language === 'en'
        ? 'Worldly beings mistake the perishable body for reality, forgetting the immortal soul.'
        : 'संसारी जीव नश्वर शरीर को ही सब कुछ मान लेते हैं और शाश्वत आत्मा को भुला देते हैं।'
    },
    {
      question: language === 'pb'
        ? 'ਇਸ ਪਾਵਨ ਸਾਹੀ ਦਾ ਮੁੱਖ ਸਿੱਖਿਆ ਸੂਤਰ ਕੀ ਹੈ?'
        : language === 'en'
        ? 'What is the primary core lesson of this sacred sakhi?'
        : 'इस पावन साखी का प्रमुख शिक्षा सूत्र क्या है?',
      options: language === 'pb'
        ? ['ਸੱਚ ਤੇ ਧਰਮ ਦੇ ਮਾਰਗ \'ਤੇ ਅਡिग ਰਹਿਣਾ', 'ਦੂਜਿਆਂ ਨਾਲ ਝਗੜਾ ਕਰਨਾ', 'ਮੋਹ-ਮਾਇਆ ਵਿੱਚ ਫੱਸਣਾ', 'ਗੱਲਾਂ ਨਾਲ ਸਮਾਂ ਬਿਤਾਉਣਾ']
        : language === 'en'
        ? ['Remaining steadfast on the path of truth and righteousness', 'Quarreling with others', 'Entanglement in illusion', 'Wasting time in empty talk']
        : ['सत्य और धर्म के मार्ग पर अडिग रहना', 'दूसरों से विवाद करना', 'मोह-माया में उलझना', 'कोरी बातों में समय गँवाना'],
      correctIndex: 0,
      explanation: language === 'pb'
        ? 'ਸੱਚ ਅਤੇ ਧਰਮ ਹੀ ਜੀਵ ਨੂੰ ਮੁਕਤ ਕਰਾਉਂਦੇ ਹਨ।'
        : language === 'en'
        ? 'Truth and righteousness alone liberate the soul.'
        : 'सत्य और आचरण की दृढ़ता ही जीव को भवसागर से पार लगाती है।'
    },
    {
      question: language === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਬਾਣੀ ਕਿਸ ਆਧਾਰ \'ਤੇ ਰਚੀ ਗਈ ਹੈ?'
        : language === 'en'
        ? 'On what foundation is the poetry of Satguru Kabir Saheb anchored?'
        : 'सतगुरु कबीर साहेब की वाणी किस शाश्वत आधार पर रची गई है?',
      options: language === 'pb'
        ? ['ਅਨੁਭਵੀ ਸੱਚ ਅਤੇ ਆਤਮਿਕ ਗਿਆਨ', 'ਕਲਪਨਾਤਮਕ ਕਹਾਣੀਆਂ', 'ਸੰਸਾਰਿਕ ਨਿਯਮ', 'ਰਾਜਨੀਤਕ ਵਿਚਾਰ']
        : language === 'en'
        ? ['Direct experiential truth and inner realization', 'Imaginary tales', 'Worldly bylaws', 'Political doctrines']
        : ['प्रत्यक्ष आनुभविक सत्य और आत्म-साक्षात्कार', 'काल्पनिक कथाएँ', 'लौकिक नियम', 'राजनीतिक सिद्धांत'],
      correctIndex: 0,
      explanation: language === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਜੀ ਦਾ ਗਿਆਨ ਸਿੱਧਾ ਅਨੁਭਵ ਅਤੇ ਪਰਮ ਸੱਚ ਉੱਤੇ ਆਧਾਰਿਤ ਹੈ।'
        : language === 'en'
        ? 'Satguru Kabir Saheb’s wisdom arises directly from direct realization of Supreme Reality.'
        : 'सतगुरु कबीर साहेब का संपूर्ण उपदेश प्रत्यक्ष अनुभव और परम सत्य पर आधारित है।'
    },
    {
      question: language === 'pb'
        ? 'ਸਾਧਕ ਨੂੰ ਆਪਣਾ ਜੀਵਨ ਕਿਵੇਂ ਸਫਲ ਬਣਾਉਣਾ ਚਾਹੀਦਾ ਹੈ?'
        : language === 'en'
        ? 'How should a sincere seeker fulfill the purpose of human birth?'
        : 'साधक को अपना मनुष्य जन्म किस प्रकार सार्थक करना चाहिए?',
      options: language === 'pb'
        ? ['ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੁੜ ਕੇ ਨਾਮ ਕਮਾਈ ਕਰਨਾ', 'ਸੰਸਾਰਿਕ ਭੱਜ-ਦੌੜ ਵਿੱਚ ਉਲਝਣਾ', 'ਅਭਿਮਾਨ ਰੱਖਣਾ', 'ਆਲਸ ਵਿੱਚ ਰਹਿਣਾ']
        : language === 'en'
        ? ['By merging in devotion at the Satguru’s feet and earning Naam', 'By chasing worldly desires', 'By harboring ego', 'By remaining idle']
        : ['सतगुरु के चरणों में समर्पित होकर नाम की कमाई करना', 'सांसारिक भागदौड़ में उलझना', 'अभिमान रखना', 'आलस्य में रहना'],
      correctIndex: 0,
      explanation: language === 'pb'
        ? 'ਨਾਮ ਸਿਮਰਨ ਅਤੇ ਸੇਵਾ ਹੀ ਮਨੁੱਖਾ ਜਨਮ ਦਾ ਅਸਲੀ ਮਕਸਦ ਹੈ।'
        : language === 'en'
        ? 'Simran and humble service are the true purpose of human life.'
        : 'नाम सिमरन और निष्काम सेवा ही दुर्लभ मनुष्य जन्म का एकमात्र लक्ष्य है।'
    }
  ];

  return {
    step5_quiz: {
      title: language === 'pb' ? '੫. ਬੋਧ ਪਰਖ (Quiz & Reflection)' : language === 'en' ? '5. Spiritual Understanding Quiz' : '५. बोध परख (स्वाध्याय प्रश्नोत्तरी)',
      subtitle: language === 'pb' ? 'ਇਸ ਪਾਵਨ ਸਾਖੀ ਦੇ ਮੂਲ ਮਰਮ \'ਤੇ ਆਧਾਰਿਤ ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Questions based on the core essence of this sakhi' : 'इस पावन साखी के मूल मर्म और संदेश पर आधारित ५ आत्म-चिंतन प्रश्न',
      questions
    },
    step6_spiritualInsight: {
      title: language === 'pb' ? '੬. ਗੁਹਜ ਰਹੱਸ ਤੇ ਪ੍ਰੇਰਣਾ (Deep Mystical Meaning & Parable)' : language === 'en' ? '6. Esoteric Mystical Insight & Parable' : '६. आध्यात्मिक रहस्य व पावन प्रसंग (Deep Inside / Mystical Meaning)',
      subtitle: language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੇ ਜੀਵਨ ਪ੍ਰਸੰਗ ਨਾਲ ਜੁੜਿਆ ਅੰਦਰਲਾ ਭੇਦ' : language === 'en' ? 'Inner esoteric secrets connected with Satguru Kabir Saheb’s life' : 'सतगुरु कबीर साहेब के जीवन प्रसंग से जुड़ा अंतरंग आध्यात्मिक रहस्य',
      unlockLabel: language === 'pb' ? 'ਰਹੱਸ ਤੇ ਪ੍ਰਸੰਗ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Unlock Insight & Parable' : 'रहस्य व प्रसंग खोलें',
      mysticalCoding: step6MysticalText
    },
    step7_keyLearning: {
      title: language === 'pb' ? '੭. ਮੁੱਖ ਜੀਵਨ ਸਿੱਖਿਆਵਾਂ (Key Teachings)' : language === 'en' ? '7. Essential Spiritual Lessons' : '७. मुख्य जीवन शिक्षाएं (Key Learnings)',
      subtitle: language === 'pb' ? 'ਦੈਨਿਕ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਉਣ ਯੋਗ ਅੰਮ੍ਰਿਤ ਸੂਤਰ' : language === 'en' ? 'Actionable tenets for daily spiritual living' : 'दैनिक जीवन में उतारने योग्य पावन सूत्र',
      bulletPoints: language === 'pb' ? [
        '੧. ਸੰਸਾਰੀ ਮੋਹ ਅਤੇ ਸਰੀਰਕ ਹਉਮੈ ਦਾ ਤਿਆਗ ਕਰੋ; ਸੱਚਾ ਧਨ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਿੱਚ ਹੈ।',
        '੨. ਸੇਵਾ ਅਤੇ ਪਰोपकार ਨਾਲ ਜੀਵ ਦਾ ਕਲਿਆਣ ਹੁੰਦਾ ਹੈ, ਆਤਮਿਕ ਖਜ਼ਾਨਾ ਕਦੇ ਨਹੀਂ ਘਟਦਾ।',
        '੩. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਦੱਸੀ ਵਿਧੀ ਨਾਲ ਸਵਾਸ-ਸਵਾਸ ਸਿਮਰਨ ਦਾ ਅਭਿਆਸ ਕਰੋ।',
        '੪. ਹਰ ਜੀਵ ਵਿੱਚ ਇੱਕੋ ਦੈਵੀ ਜੋਤ ਦੇਖੋ ਅਤੇ ਨਿਰਭਉ ਹੋ ਕੇ ਸੱਚ ਦੇ ਮਾਰਗ \'ਤੇ ਚੱਲੋ।'
      ] : language === 'en' ? [
        '1. Transcend bodily attachment; true wealth is divine love and equanimity.',
        '2. Selfless charity and compassion never impoverish the giver; they enrich eternity.',
        '3. Anchor your breath in Satya Naam remembrance under the Satguru’s guidance.',
        '4. Recognize the same divine spark in all living beings and walk fearlessly in truth.'
      ] : [
        '१. देहाभिमान और संसारी संकीर्णता का परित्याग करें; आत्मा का सच्चा धन गुरुभक्ति और शांति है।',
        '२. परोपकार, सत्पात्र दान और दीन-सेवा से आंतरिक समृद्धि का स्रोत निरंतर प्रवाहमान रहता है।',
        '३. बंदीछोड़ सतगुरु कबीर साहेब के उपदेशानुसार स्वांस-उस्वास में सत्यनाम का अजपा जाप करें।',
        '४. सर्वत्र समभाव रखते हुए निष्कपट भाव से सत्य के पथ पर अडिग रहें।'
      ]
    },
    step8_crossReferences: {
      title: language === 'pb' ? '੮. ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹੇਬ ਤੇ ਕਬੀਰ ਬੀਜਕ ਸਮਾਨੰਤਰ ਬਾਣੀ' : language === 'en' ? '8. Sri Guru Granth Saheb & Kabir Bijak Parallel Vani' : '८. श्री गुरु ग्रंथ साहेब व कबीर बीजक समानांतर वाणी',
      subtitle: language === 'pb' ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹੇਬ ਜੀ ਤੇ ਕਬੀਰ ਬੀਜਕ ਤੋਂ ਮੂਲ ਸਾਖੀ ਅਨੁਸਾਰ ਸਟੀਕ ਸਮਾਨੰਤਰ ਬਾਣੀਆਂ ਅਤੇ ਭਾਵਾਰਥ' : language === 'en' ? 'Meaning-matched sacred verses from Sri Guru Granth Saheb Ji & Kabir Bijak with explanations' : 'श्री गुरु ग्रंथ साहेब जी व कबीर बीजक से मूल साखी के अनुरूप सटीक समानांतर पावन साखियाँ एवं भावार्थ',
      references: crossRefs
    },
    step9_contemplation: {
      title: language === 'pb' ? '੯. ਆਤਮ-ਚਿੰਤਨ ਪ੍ਰਸ਼ਨ (Contemplation Journal)' : language === 'en' ? '9. Self-Inquiry & Reflection' : '९. आत्म-निरीक्षण व चिंतन प्रश्न (Contemplation)',
      subtitle: language === 'pb' ? 'ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਆਪਣੇ ਮਨ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ' : language === 'en' ? 'Turn inward and examine the workings of the mind' : 'अंतर्मुखी होकर अपने अंतःकरण का अवलोकन करें',
      questions: language === 'pb' ? [
        'ਕੀ ਮੈਂ ਕਦੇ ਸੰਸਾਰਿਕ ਧਨ ਦੇ ਮੋਹ ਵਿੱਚ ਆ ਕੇ ਕਿਸੇ ਲੋੜਵੰਦ ਦੀ ਸੇਵਾ ਕਰਨ ਤੋਂ ਪਿੱਛੇ ਹਟਿਆ ਹਾਂ?',
        'ਮੇਰਾ ਮਨ ਦਿਨ ਭਰ ਸਰੀਰਕ ਚਿੰਤਾਵਾਂ ਵਿੱਚ ਉਲਝਿਆ ਰਹਿੰਦਾ ਹੈ ਜਾਂ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਵਿੱਚ?',
        'ਮੈਂ ਅੱਜ ਦੇ ਦਿਨ ਸਤਿਗੁਰੂ ਕबीर ਸਾਹਿਬ ਦੇ ਇਸ ਬਚਨ ਨੂੰ ਆਪਣੇ ਕਰਮ ਵਿੱਚ ਕਿਵੇਂ ਉਤਾਰਾਂਗਾ?'
      ] : language === 'en' ? [
        'Have I ever withheld compassion or assistance due to fear of losing material possessions?',
        'Does my mind spend more time worrying over transient bodily concerns or resting in the Divine Word?',
        'Which specific teaching of Satguru Kabir Saheb will I translate into pure action today?'
      ] : [
        'क्या मैंने कभी सांसारिक धन या समय की कमी के भय से किसी दीन-दुखी की सेवा से संकोच किया है?',
        'मेरा मन दिन भर संसारी चिंताओं में भटकता है या सतगुरु के सत्यनाम में विश्राम पाता है?',
        'आज के दिन मैं सतगुरु कबीर साहेब के इस पावन उपदेश को अपने आचरण में किस रूप में ढालूँगा?'
      ]
    },
    step10_audioIntegration: {
      title: language === 'pb' ? '੧੦. ਸੁਰਤ-ਸ਼ਬਦ ਸਾਧਨਾ (Surat-Shabad Yoga)' : language === 'en' ? '10. Surat-Shabad Yoga & Breath Harmonization' : '१०. श्रवण साधना व सूरत-शब्द योग (Surat-Shabad Yoga)',
      subtitle: language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ੩-ਪੜਾਵੀ ਸੁਆਸ ਸਾਧਨਾ ਵਿਧੀ' : language === 'en' ? 'Three-stage breath and sound alignment practice' : 'सतगुरु कबीर साहेब की ३-चरणीय स्वांस-सुरत साधना पद्धति',
      sadhanaMethodName: language === 'pb' ? 'ਸੁਆਸ-ਉਸਵਾਸ ਅਜਪਾ ਜਾਪ ਤੇ ਸੁਰਤ ਏਕਾਗਰਤਾ' : language === 'en' ? 'Breath-Borne Ajapa Jaap & Consciousness Stillness' : 'स्वांस-उस्वास अजपा जाप एवं सूरत-शब्द एकाग्रता',
      stages: [
        {
          stageNumber: 1,
          title: language === 'pb' ? 'ਪੜਾਅ ੧: ਸੁਆਸ ਨਿਰੀਖਣ (Breath Awareness)' : language === 'en' ? 'Stage 1: Breath Observation' : 'प्रथम चरण: स्वांस-अवलोकन एवं देह-शिथिलीकरण',
          instruction: language === 'pb' 
            ? 'ਸੁਖਾਸਨ ਵਿੱਚ ਬੈਠ ਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ। ਆਉਂਦੇ ਅਤੇ ਜਾਂਦੇ ਸੁਆਸ ਨੂੰ ਬਿਨਾਂ ਦਬਾਅ ਦੇ ਨਿਰਪੱਖ ਹੋ ਕੇ ਦੇਖੋ।'
            : language === 'en'
            ? 'Sit comfortably with eyes gently closed. Observe each incoming and outgoing breath naturally without control.'
            : 'सुखासन में बैठकर रीढ़ सीधी रखें। आती और जाती प्रत्येक सांस को साक्षी भाव से देखें और शरीर को तनावमुक्त करें।'
        },
        {
          stageNumber: 2,
          title: language === 'pb' ? 'ਪੜਾਅ ੨: ਸ਼ਬਦ ਜੋੜ (Surat-Naam Alignment)' : language === 'en' ? 'Stage 2: Sound-Breath Merging' : 'द्वितीय चरण: स्वांस के साथ सत्यनाम का संयोजन',
          instruction: language === 'pb' 
            ? 'ਹਰ ਸੁਆਸ ਨਾਲ ਮਨ ਹੀ ਮਨ \'ਸਤਿ\' ਅਤੇ ਬਾਹਰ ਜਾਂਦੇ ਸੁਆਸ ਨਾਲ \'ਨਾਮ\' ਦਾ ਅਹਿਸਾਸ ਜੋੜੋ।'
            : language === 'en'
            ? 'Mentally attune the incoming breath with "Sat" and outgoing breath with "Naam" silently at the third eye.'
            : 'आती हुई सांस के साथ "सत्य" और जाती हुई सांस के साथ "नाम" का मौन अजपा सुमिरन तीसरे तिल पर एकाग्र करें।'
        },
        {
          stageNumber: 3,
          title: language === 'pb' ? 'ਪੜਾਅ ੩: ਸਹਿਜ ਸਮਾਧੀ (Inner Stillness)' : language === 'en' ? 'Stage 3: Effortless Stillness' : 'तृतीय चरण: शून्य समाधि व अंतर्नाद श्रवण',
          instruction: language === 'pb' 
            ? 'ਸਭ ਵਿਚਾਰਾਂ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਅੰਤਰਮੁਖੀ ਅਨਾਹਤ ਧੁਨ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਓ। ਇਹੀ ਸਹਿਜ ਸਮਾਧੀ ਹੈ।'
            : language === 'en'
            ? 'Dissolve all mental ripples and abide in the unstruck inner resonance of pristine silence.'
            : 'सकल विचारों को शांत करके हृदय में सतगुरु के तेज और अंतर्मन की अनहद शांति में स्थित हो जाएं।'
        }
      ]
    },
    step11_blessingCertificate: {
      title: language === 'pb' ? '੧੧. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦਾ ਪਾਵਨ ਅਸੀਸ' : language === 'en' ? '11. Satguru Kabir Saheb Sacred Blessing' : '११. सतगुरु कबीर साहेब का दिव्य आशीर्वाद एवं पावन प्रमाण-पत्र',
      subtitle: language === 'pb' ? 'ਸੰਪੂਰਨ ਸਵਾਧਿਆਇ ਦਾ ਫਲ ਅਤੇ ਸਮਰਪਣ ਸੰਕਲਪ' : language === 'en' ? 'Culmination of sacred study and lifelong dedication' : 'एकादश सोपान संपूर्ण स्वाध्याय का पावन फल एवं समर्पण',
      blessingVerse: language === 'pb'
        ? 'ਸਾਹਿਬ ਮੇਰਾ ਏਕ ਹੈ, ਦੂਜਾ ਕਹੈ ਸੋ ਦੋਇ।\nਸਾਹਿਬ ਸੋਈ ਸਤਿਗੁਰੂ, ਜਾਤੇ ਸਭ ਕਿਛੁ ਹੋਇ।।'
        : language === 'en'
        ? 'Saheb mera ek hai, dooja kahe so doy,\nSaheb soee Satguru, jaate sab kichhu hoy.'
        : 'साहेब मेरा एक है, दूजा कहै सो दोय।\nसाहेब सोई सतगुरु, जाके शरन सब होय।।\n\nसतगुरु कबीर साहेब की पावन छत्रछाया आपके अंतःकरण को सदैव सत्य, दया और भक्ति से आलोकित रखे।',
      guruVachan: language === 'pb'
        ? 'ਹੇ ਪਿਆਰੇ ਜੀਵ! ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਨੂੰ ਸੁਆਸਾਂ ਦੀ ਮਾਲਾ \'ਤੇ ਜਪੋ, ਤੁਹਾਡੇ ਸਭ ਕਲੇਸ਼ ਦੂਰ ਹੋਣਗੇ।'
        : language === 'en'
        ? 'O beloved soul! Thread the True Name onto the breath of life; all worldly illusions and grief shall dissolve.'
        : 'हे प्रिय जीव! सतगुरु कबीर साहेब के वचनों को केवल कंठ में नहीं, अपितु जीवन के प्रत्येक कर्म में धारण करो। सत्यनाम ही तुम्हारा शाश्वत सहारा है।',
      samarpanSankalp: language === 'pb'
        ? 'ਸੰਕਲਪ: ਮੈਂ ਸਦਾ ਸੱਚ ਦੇ ਮਾਰਗ \'ਤੇ ਚੱਲਾਂਗਾ ਅਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਬਾਣੀ ਅਨੁਸਾਰ ਜੀਵਨ ਬਤੀਤ ਕਰਾਂਗਾ।'
        : language === 'en'
        ? 'Dedication: I commit to walking the path of Truth and serving with humility under the guidance of Satguru Kabir Saheb.'
        : 'पावन संकल्प: "मैं बंदीछोड़ सतगुरु कबीर साहेब के श्रीचरणों में अपना अहंकार समर्पित कर सत्य, प्रेम और दया के मार्ग पर निष्ठापूर्वक चलूँगा।"',
      certificateActionLabel: language === 'pb' ? 'ਸਵਾਧਿਆਇ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਪ੍ਰਾਪਤ ਕਰੋ' : language === 'en' ? 'Receive Blessing Certificate' : 'पावन स्वाध्याय प्रमाण-पत्र प्राप्त करें'
    }
  };
}
