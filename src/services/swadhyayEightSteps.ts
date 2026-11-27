import { Sakhi, Language, WordMeaning, QuizQuestion } from '../types';
import type { SwadhyayAiResponsePayload } from './swadhyayElevenSteps';
import {
  buildStep4SatsangContent,
  buildStep6EsotericContent,
  getAngSpiritualProfile,
} from './swadhyayContentEngine';
import { SANDHUKKARI_GLOSSARY } from './sandhukkariGlossary';
import { buildFiveDimensionQuiz } from './quizGenerator';
import { hindiToPunjabiWordConverter } from './transliteration';

export interface EightStepCrossReference {
  granth: string;
  sourceChapter?: string;
  title: string;
  verse: string;
  explanation: string;
}

export interface EightStepSwadhyayData {
  step1_originalText: {
    title: string;
    subtitle: string;
    sakhiNumber: number;
    text: string;
    transliteration: string;
    categoryTitle: string;
    dhunAudioTitle: string;
  };
  step2_context: {
    title: string;
    subtitle: string;
    relevanceText: string;
    spiritualSignificance: string;
    foundationNote: string;
  };
  step3_vocabulary: {
    title: string;
    subtitle: string;
    words: WordMeaning[];
    toggleLabelShow: string;
    toggleLabelHide: string;
  };
  step4_bhavarthSatsang: {
    title: string;
    subtitle: string;
    bhavarth: string;
    deepSatsangGyan: string;
    mindMayaAnalysis: string;
    unlockLabel: string;
  };
  step5_spiritualInsight: {
    title: string;
    subtitle: string;
    secretWisdom: string;
    anuragSagarEssence: string;
    unlockLabel: string;
  };
  step6_suratShabadYoga: {
    title: string;
    subtitle: string;
    suratFocusPrinciple: string;
    shabadAnahatVibration: string;
    innerChimeGuidance: string[];
    ghatMandirVisual: string;
    sadhanaInstruction: string;
  };
  step7_contemplation: {
    title: string;
    subtitle: string;
    inquiryQuestions: string[];
    selfObservationGuide: string;
    journalPrompt: string;
  };
  step8_sadhanaSutra: {
    title: string;
    subtitle: string;
    dailySadhanaSutra: string;
    sankalpPledge: string;
  };
  step9_quiz: {
    title: string;
    subtitle: string;
    instruction: string;
    questions: QuizQuestion[];
  };
  step10_blessing: {
    title: string;
    subtitle: string;
    blessingVani: string;
    blessingMessage: string;
    finalSalutation: string;
  };
  step1_context?: any;
  step2_originalText?: any;
  step8_satguruBlessingSutra?: any;
}

/**
 * Generates the authentic 8-step/11-step base Swadhyay structure dynamically for any Sakhi
 * ensuring Step 1 (literal meaning), Step 4 (Why taught + Drishtant), and Step 6 (esoteric symbolism) are distinct.
 */
export function getEightStepSwadhyayData(sakhi: Sakhi, language: Language): EightStepSwadhyayData {
  const isHi = language === 'hi';
  const isPb = language === 'pb';

  const categoryTitle = sakhi.categoryTitle[language] || sakhi.categoryTitle.hi;
  const originalCouplet = sakhi.text[language] || sakhi.text.hi;
  const originalContemplation = sakhi.contemplation[language] || sakhi.contemplation.hi;
  const originalPrayer = sakhi.samarpanPrayer ? (sakhi.samarpanPrayer[language] || sakhi.samarpanPrayer.hi) : '';
  const originalAction = sakhi.practicalApplication ? (sakhi.practicalApplication[language] || sakhi.practicalApplication.hi) : '';
  const originalContext = sakhi.contextNote ? (sakhi.contextNote[language] || sakhi.contextNote.hi) : '';

  // 1. STEP 1: मूल पावन वाणी (Original Sacred Text)
  const step1Original = {
    title: isHi ? '१. मूल पावन वाणी' : isPb ? '੧. ਮੂਲ ਪਾਵਨ ਬਾਣੀ' : '1. Sacred Original Text (Mool Vani)',
    subtitle: isHi ? 'सतगुरु साहेब की अमृतवाणी का शुद्ध एवं प्रामाणिक पाठ' : isPb ? 'ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਜੀ ਦੀ ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਦਾ ਸ਼ੁੱਧ ਪਾਠ' : 'Authentic Couplet Recitation & Sacred Vibration',
    sakhiNumber: sakhi.number,
    text: originalCouplet,
    transliteration: sakhi.transliteration || '',
    categoryTitle,
    dhunAudioTitle: isHi ? '🎵 धुन: साहेब की अमृतवाणी' : isPb ? '🎵 ਧੁਨ: ਸਾਹੇਬ ਦੀ ਅੰਮ੍ਰਿਤ ਬਾਣੀ' : '🎵 Sound: Saheb Divine Melody',
  };

  const angProfile = getAngSpiritualProfile(sakhi, language);

  // 2. STEP 2: विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि
  const dynamicRelevance = originalContext || (
    isHi
      ? `यह साखी सतगुरु कबीर साहेब के '${categoryTitle}' (साखी #${sakhi.number}) के अंतर्गत अंतःकरण को जाग्रत करने वाली विशिष्ट वाणी है। इसका केंद्रीय उद्देश्य है — ${angProfile.angFocus}।`
      : isPb
      ? `ਇਹ ਸਾਖੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ '${categoryTitle}' (ਸਾਖੀ #${sakhi.number}) ਤਹਿਤ ਰੂਹਾਨੀ ਚੇਤਨਾ ਨੂੰ ਪ੍ਰਕਾਸ਼ਮਾਨ ਕਰਨ ਵਾਲੀ ਅਨਮੋਲ ਬਾਣੀ ਹੈ, ਜਿਸਦਾ ਮੂਲ ਉਦੇਸ਼ ਹੈ — ${angProfile.angFocus}।`
      : `This sacred sakhi from '${categoryTitle}' (Sakhi #${sakhi.number}) centers on ${angProfile.angFocus}.`
  );

  const primaryWordHint = (sakhi.wordMeanings[language] || sakhi.wordMeanings.hi || [])[0];
  const dynamicSignificance = isHi
    ? `सतगुरु कबीर साहेब फरमाते हैं कि '${categoryTitle}'${primaryWordHint ? ` एवं "${primaryWordHint.word}" (${primaryWordHint.meaning})` : ''} के मर्म द्वारा साधक का लक्ष्य ${angProfile.angFocus} है। इसका स्वाध्याय साधक को बाह्य प्रपंचों से मुक्त कर आंतरिक चेतना से जोड़ता है।`
    : isPb
    ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ '${categoryTitle}'${primaryWordHint ? ` ਅਤੇ "${primaryWordHint.word}" (${primaryWordHint.meaning})` : ''} ਰਾਹੀਂ ਜੀਵ ਦਾ ਮੁੱਖ ਮਾਰਗ ${angProfile.angFocus} ਹੈ।`
    : `Satguru Kabir Saheb proclaims through '${categoryTitle}'${primaryWordHint ? ` and "${primaryWordHint.word}" (${primaryWordHint.meaning})` : ''} the vital path of ${angProfile.angFocus}.`;

  const step2Context = {
    title: isHi ? '२. विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि' : isPb ? '੨. ਵਿਸ਼ਾ ਸੰਦਰਭ ਤੇ ਰੂਹਾਨੀ ਪਿੱਠਭੂਮੀ' : '2. Context & Spiritual Significance',
    subtitle: isHi ? 'सत्यनाम के पावन पथ पर इस साखी की प्रासंगिकता' : isPb ? 'ਸਤਯਨਾਮ ਦੇ ਪਾਵਨ ਮਾਰਗ ਤੇ ਇਸ ਸਾਖੀ ਦੀ ਸਾਰਥਕਤਾ' : 'Relevance on the Sacred Path of Satyanaam',
    relevanceText: dynamicRelevance,
    spiritualSignificance: dynamicSignificance,
    foundationNote: isHi
      ? `ग्रन्थ: ${sakhi.grantha} | अंग: ${categoryTitle} | साखी #${sakhi.number}`
      : isPb
      ? `ਗ੍ਰੰਥ: ${hindiToPunjabiWordConverter(sakhi.grantha)} | ਅੰਗ: ${categoryTitle} | ਸਾਖੀ #${sakhi.number}`
      : `Scripture: ${sakhi.grantha} | Section: ${categoryTitle} | Sakhi #${sakhi.number}`,
  };

  // 3. STEP 3: शब्दार्थ (Vocabulary)
  let wordsList = sakhi.wordMeanings[language] || sakhi.wordMeanings.hi || [];
  if (wordsList.length < 2) {
    const glossaryTerms = Object.values(SANDHUKKARI_GLOSSARY);
    const tokens = originalCouplet
      .replace(/[।॥,.;:'"?!\n\r]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length >= 2)
      .slice(0, 6);
    const derivedWords: WordMeaning[] = [];
    for (const tok of tokens) {
      const cleanTok = tok.trim();
      const matchedTerm = glossaryTerms.find(
        (term) =>
          term.word === cleanTok ||
          term.punjabi === cleanTok ||
          term.transliteration.toLowerCase() === cleanTok.toLowerCase() ||
          cleanTok.includes(term.word) ||
          cleanTok.includes(term.punjabi)
      );
      if (matchedTerm) {
        const langKey: Language = isPb ? 'pb' : isHi ? 'hi' : 'en';
        derivedWords.push({
          word: tok,
          meaning: matchedTerm.literalMeaning[langKey] || matchedTerm.esotericMeaning[langKey],
        });
      }
      if (derivedWords.length >= 5) break;
    }
    if (derivedWords.length >= 2) {
      wordsList = derivedWords;
    } else {
      wordsList = tokens.slice(0, 5).map((tok) => ({
        word: tok,
        meaning: isHi
          ? `'${categoryTitle}' के अंतर्गत (${angProfile.angFocus}) से जुड़ा पावन पद`
          : isPb
          ? `'${categoryTitle}' ਤਹਿਤ (${angProfile.angFocus}) ਨਾਲ ਜੁੜਿਆ ਪਾਵਨ ਸ਼ਬਦ`
          : `Sacred term within '${categoryTitle}' reflecting ${angProfile.angFocus}`,
      }));
    }
  }
  const step3Vocab = {
    title: isHi ? '३. शब्दार्थ' : isPb ? '੩. ਸ਼ਬਦਾਰਥ' : '3. Word Meanings & Glossary',
    subtitle: isHi ? 'साखी के कठिन शब्दों का सरल एवं आध्यात्मिक अर्थ' : isPb ? 'ਸਾਖੀ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ ਦਾ ਸਰਲ ਅਧਿਆਤਮਿਕ ਅਰਥ' : 'Accurate Literal and Spiritual Meanings',
    words: wordsList,
    toggleLabelShow: isHi ? 'शब्दार्थ दिखाएं' : isPb ? 'ਸ਼ਬਦਾਰਥ ਦਿਖਾਓ' : 'Show Vocabulary',
    toggleLabelHide: isHi ? 'शब्दार्थ छिपाएं' : isPb ? 'ਸ਼ਬਦਾਰਥ ਛੁਪਾਓ' : 'Hide Vocabulary',
  };

  // 4. STEP 4: गहरा सत्संग एवं व्यवहारिक व्याख्या (Why Kabir Saheb taught this + everyday Drishtant — zero copy-paste of Step 1!)
  const step4Depth = buildStep4SatsangContent(sakhi, language);

  const step4Satsang = {
    title: isHi ? '४. गहरा सत्संग एवं व्यवहारिक व्याख्या' : isPb ? '੪. ਗਹਿਰਾ ਸਤਿਸੰਗ ਤੇ ਵਿਵਹਾਰਕ ਵਿਆਖਿਆ' : '4. Deep Satsang & Practical Illustration',
    subtitle: isHi ? `सतगुरु कबीर साहेब ने साखी #${sakhi.number} क्यों कही व जीवन दृष्टांत` : isPb ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਾਖੀ #${sakhi.number} ਕਿਉਂ ਕਹੀ ਤੇ ਜੀਵਨ ਉਦਾਹਰਨ` : `Why Satguru Kabir Saheb Gave This Teaching & Everyday Example`,
    bhavarth: step4Depth.whyTaught,
    deepSatsangGyan: step4Depth.satsangWithDrishtant,
    mindMayaAnalysis: step4Depth.mindMayaAnalysis,
    unlockLabel: isHi ? 'सत्संग अध्ययन अनलॉक करें' : isPb ? 'ਸਤਿਸੰਗ ਅਧਿਐਨ ਅਨਲੌਕ ਕਰੋ' : 'Unlock Deep Satsang Insight',
  };

  // 5. STEP 5 (maps to Step 6 card): आध्यात्मिक रहस्य एवं तत्व ज्ञान (Inner yogic & esoteric symbols)
  const esotericWisdom = buildStep6EsotericContent(sakhi, language);
  const step5Insight = {
    title: isHi ? '५. आध्यात्मिक रहस्य एवं तत्व ज्ञान' : isPb ? '੫. ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਤੇ ਤੱਤ-ਗਿਆਨ' : '5. Inner Esoteric & Yogic Symbolism',
    subtitle: isHi ? 'मूल वाणी के प्रतीकों का गुप्त आध्यात्मिक अर्थ' : isPb ? 'ਮੂਲ ਬਾਣੀ ਦੇ ਪ੍ਰਤੀਕਾਂ ਦਾ ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਭੇਦ' : 'Inner Meaning of Symbols in This Verse',
    secretWisdom: esotericWisdom,
    anuragSagarEssence: isHi
      ? `ग्रंथ-संदर्भ: ${sakhi.grantha} · ${categoryTitle} (साखी #${sakhi.number})`
      : isPb
      ? `ਗ੍ਰੰਥ-ਸੰਦਰਭ: ${hindiToPunjabiWordConverter(sakhi.grantha)} · ${categoryTitle} (ਸਾਖੀ #${sakhi.number})`
      : `Scriptural Context: ${sakhi.grantha} · ${categoryTitle} (Sakhi #${sakhi.number})`,
    unlockLabel: isHi ? 'आध्यात्मिक रहस्य अनलॉक करें' : isPb ? 'ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਅਨਲੌਕ ਕਰੋ' : 'Unlock Mystical Insight',
  };

  // 6. STEP 6: सत्यनाम गूँज और सूरत-योग साधना
  const step6SuratYoga = {
    title: isHi ? '६. सत्यनाम गूँज और सूरत-योग साधना' : isPb ? '੬. ਸਤਯਨਾਮ ਗੂੰਜ ਅਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ' : '6. Surat-Shabad Yoga & Satyanaam Resonance',
    subtitle: isHi ? `साखी #${sakhi.number} ('${categoryTitle}') के भाव के अनुरूप सूरत और शब्द का संधान` : isPb ? `ਸਾਖੀ #${sakhi.number} ('${categoryTitle}') ਅਨੁਸਾਰ ਸੁਰਤ ਅਤੇ ਸ਼ਬਦ ਦਾ ਅਭਿਆਸ` : `Contemplative Breath & Sound Alignment for Sakhi #${sakhi.number}`,
    suratFocusPrinciple: isHi
      ? `साखी #${sakhi.number} ('${categoryTitle}') के केंद्रीय मर्म — ${angProfile.angFocus} — को हृदय में धारण कर ${angProfile.meditationAnchor}।`
      : isPb
      ? `ਸਾਖੀ #${sakhi.number} ('${categoryTitle}') ਦੇ ਕੇਂਦਰੀ ਭਾਵ — ${angProfile.angFocus} — ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਉਂਦਿਆਂ ${angProfile.meditationAnchor}।`
      : `Holding '${categoryTitle}' (${angProfile.angFocus}) at heart, ${angProfile.meditationAnchor}.`,
    shabadAnahatVibration: isHi
      ? `श्वास-प्रश्वास की माला पर "सत्यनाम" का सिमरन करते हुए '${categoryTitle}' के इस अभ्यास को जीएँ: ${angProfile.practiceDirective}`
      : isPb
      ? `ਸੁਆਸਾਂ ਦੀ ਮਾਲਾ ਉੱਤੇ "ਸਤਯਨਾਮ" ਦਾ ਸਿਮਰਨ ਕਰਦਿਆਂ '${categoryTitle}' ਦੇ ਇਸ ਅਭਿਆਸ ਨੂੰ ਅਪਣਾਓ: ${angProfile.practiceDirective}`
      : `Synchronize breath remembrance of Satyanaam with this Ang’s discipline: ${angProfile.practiceDirective}`,
    innerChimeGuidance: isHi
      ? [
          `१. शांत आसन में बैठकर '${categoryTitle}' के केंद्रीय भाव (${angProfile.angFocus}) का मौन स्मरण करें।`,
          '२. श्वास लेते समय "सत्य" और छोड़ते समय "नाम" का मानसिक अजपा जाप करें।',
          `३. ध्यान का आलंबन: ${angProfile.meditationAnchor}।`,
          '४. अनहद शांति और आनंद का अनुभव करते हुए सतगुरु चरणों में विश्राम करें।',
        ]
      : isPb
      ? [
          `੧. ਸ਼ਾਂਤ ਆਸਣ ਵਿੱਚ ਬੈਠ ਕੇ '${categoryTitle}' (${angProfile.angFocus}) ਦੇ ਪਾਵਨ ਭਾਵ ਦਾ ਮਨਨ ਕਰੋ।`,
          '੨. ਸੁਆਸ ਲੈਂਦੇ ਸਮੇਂ "ਸਤਿ" ਅਤੇ ਛੱਡਦੇ ਸਮੇਂ "ਨਾਮ" ਦਾ ਮਾਨਸਿਕ ਸਿਮਰਨ ਕਰੋ।',
          `੩. ਧਿਆਨ-ਬਿੰਦੂ: ${angProfile.meditationAnchor}।`,
          '੪. ਅੰਦਰੂਨੀ ਅਨਹਦ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰਦੇ ਹੋਏ ਵਿਸ਼ਰਾਮ ਕਰੋ।',
        ]
      : [
          `1. Sit in stillness and focus calmly on the essence of '${categoryTitle}': ${angProfile.angFocus}.`,
          '2. Mentally vibrate "Sat" on inhalation and "Naam" on exhalation.',
          `3. Meditation Anchor: ${angProfile.meditationAnchor}.`,
          '4. Rest peacefully in the inner unstruck silence.',
        ],
    ghatMandirVisual: isHi
      ? `घट मंदिर में साखी #${sakhi.number} की पावन ज्योति`
      : isPb
      ? `ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਸਾਖੀ #${sakhi.number} ਦੀ ਪਾਵਨ ਜੋਤ`
      : `Inner Sanctum Illumination for Sakhi #${sakhi.number}`,
    sadhanaInstruction: isHi
      ? `साखी #${sakhi.number} के इस स्वाध्याय के पश्चात १५ मिनट मौन ध्यान करें।`
      : isPb
      ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਇਸ ਸਵਾਧਿਆਇ ਤੋਂ ਬਾਅਦ ੧੫ ਮਿੰਟ ਮੌਨ ਧਿਆਨ ਕਰੋ।`
      : 'Practice 15 minutes of silent meditation following this study.',
  };

  // 7. STEP 7: चिंतन प्रश्न
  const step7Contemplation = {
    title: isHi ? '७. चिंतन प्रश्न (Self-Inquiry)' : isPb ? '੭. ਚਿੰਤਨ ਪ੍ਰਸ਼ਨ (ਆਤਮ-ਮੰਥਨ)' : '7. Contemplation & Probing Questions',
    subtitle: isHi
      ? 'साधक के अंतर्मुखी आत्म-मंथन हेतु विशेष प्रश्न'
      : isPb
      ? 'ਸਾਧਕ ਦੇ ਅੰਤਰਮੁਖੀ ਆਤਮ-ਮੰਥਨ ਲਈ ਖਾਸ ਸਵਾਲ'
      : 'Special Inquiry Prompts for this Sakhi',
    inquiryQuestions: [
      originalContemplation || angProfile.reflectionLens,
      angProfile.reflectionLens,
      isHi
        ? `साखी #${sakhi.number} ('${categoryTitle}') के संदेश को आज मैं किस प्रकार आचरण में लाऊँगा?`
        : isPb
        ? `ਸਾਖੀ #${sakhi.number} ('${categoryTitle}') ਦੇ ਸੰਦੇਸ਼ ਨੂੰ ਮੈਂ ਅੱਜ ਆਪਣੇ ਵਿਹਾਰ ਵਿੱਚ ਕਿਵੇਂ ਉਤਾਰਾਂਗਾ?`
        : `How will I translate Sakhi #${sakhi.number} (${categoryTitle}) into daily action today?`,
    ].filter((q, idx, arr) => q && arr.indexOf(q) === idx),
    selfObservationGuide: isHi
      ? 'अपने उत्तर को साक्षी भाव से देखें।'
      : isPb
      ? 'ਆਪਣੇ ਉੱਤਰ ਨੂੰ ਸਾਖੀ-ਭਾਵ ਨਾਲ ਬਿਨਾਂ ਪੱਖਪਾਤ ਦੇ ਵੇਖੋ।'
      : 'Observe your answers with honest, witness clarity.',
    journalPrompt: isHi
      ? 'मेरा आज का संकल्प:'
      : isPb
      ? 'ਮੇਰਾ ਅੱਜ ਦਾ ਸੰਕਲਪ:'
      : 'My Resolution Today:',
  };

  // 8. STEP 8: साधना सूत्र
  const step8SadhanaSutra = {
    title: isHi ? '८. आज का साधना सूत्र एवं संकल्प' : isPb ? '੮. ਅੱਜ ਦਾ ਸਾਧਨਾ ਸੂਤਰ ਤੇ ਸੰਕਲਪ' : '8. Daily Sadhana Sutra & Pledge',
    subtitle: isHi
      ? 'इस साखी से प्राप्त होने वाला मुख्य व्यावहारिक सूत्र'
      : isPb
      ? 'ਇਸ ਸਾਖੀ ਤੋਂ ਮਿਲਣ ਵਾਲਾ ਮੁੱਖ ਵਿਵਹਾਰਕ ਸੂਤਰ'
      : 'Core practical takeaway from this sakhi',
    dailySadhanaSutra: originalAction || angProfile.practiceDirective,
    sankalpPledge: originalPrayer || angProfile.blessingPhrase,
  };

  // 9. STEP 9: Five-dimension Quiz (synced via quizGenerator)
  const generatedHi = buildFiveDimensionQuiz(sakhi, 'hi');
  const generatedPb = buildFiveDimensionQuiz(sakhi, 'pb');
  const generatedEn = buildFiveDimensionQuiz(sakhi, 'en');

  // Keep options aligned per language using single-language active source when active, plus full trilingual structure
  const activeGen = isPb ? generatedPb : isHi ? generatedHi : generatedEn;
  const randomizedQuestions: QuizQuestion[] = activeGen.map((qActive, idx) => {
    const findById = (arr: typeof activeGen) => arr.find((item) => item.id === qActive.id) || arr[idx] || qActive;
    const qHi = findById(generatedHi);
    const qPb = findById(generatedPb);
    const qEn = findById(generatedEn);
    // Use active language's shuffled options & correctIndex as authoritative for active view
    return {
      id: qActive.id,
      question: {
        hi: qHi.question,
        pb: qPb.question,
        en: qEn.question,
      },
      options: {
        hi: (isHi ? qActive.options : qHi.options).map((o) => o.text),
        pb: (isPb ? qActive.options : qPb.options).map((o) => o.text),
        en: (!isHi && !isPb ? qActive.options : qEn.options).map((o) => o.text),
      },
      correctIndex: qActive.options.findIndex((o) => o.isCorrect) >= 0 ? qActive.options.findIndex((o) => o.isCorrect) : (qActive.correctIndex ?? 0),
      explanation: {
        hi: qHi.options.find((o) => o.isCorrect)?.feedback || qHi.explanation,
        pb: qPb.options.find((o) => o.isCorrect)?.feedback || qPb.explanation,
        en: qEn.options.find((o) => o.isCorrect)?.feedback || qEn.explanation,
      },
    };
  });

  const step9Quiz = {
    title: isHi ? '९. आध्यात्मिक प्रश्नोत्तरी (Self-Assessment)' : isPb ? '੯. ਅਧਿਆਤਮਕ ਪ੍ਰਸ਼ਨਾਵਲੀ' : '9. Spiritual Self-Assessment Quiz',
    subtitle: isHi
      ? 'अपने बोध की परख करें'
      : isPb
      ? 'ਇਸ ਸਾਖੀ ਦੀ ਸਮਝ ਦੀ ਪਰਖ ਕਰੋ'
      : 'Test your understanding of this sakhi',
    instruction: isHi
      ? 'सही विकल्प चुनकर अपने आध्यात्मिक ज्ञान की जांच करें:'
      : isPb
      ? 'ਸਹੀ ਵਿਕਲਪ ਚੁਣ ਕੇ ਆਪਣੇ ਅਧਿਆਤਮਿਕ ਬੋਧ ਦੀ ਜਾਂਚ ਕਰੋ:'
      : 'Select the correct option:',
    questions: randomizedQuestions,
  };

  // 10. STEP 10: Blessing
  const step10Blessing = {
    title: isHi ? '१०. सतगुरु कबीर साहेब का दिव्य आशीर्वाद' : isPb ? '੧੦. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਅਸ਼ੀਰਵਾਦ' : '10. Satguru Kabir Saheb Blessing & Dedication',
    subtitle: isHi
      ? 'स्वाध्याय संपूर्णता पर गुरु वंदन'
      : isPb
      ? 'ਸਵਾਧਿਆਇ ਸੰਪੂਰਨਤਾ ਉੱਤੇ ਗੁਰੂ ਵੰਦਨਾ'
      : 'Guruvandan upon completing Swadhyay',
    blessingVani: isHi
      ? 'साहेब मेरा एक है, दूजा कहै सो दोय।'
      : isPb
      ? 'ਸਾਹੇਬ ਮੇਰਾ ਏਕ ਹੈ, ਦੂਜਾ ਕਹੈ ਸੋ ਦੋਇ।'
      : 'Saheb mera ek hai, dooja kahe so doy.',
    blessingMessage: originalPrayer || angProfile.blessingPhrase,
    finalSalutation: isPb
      ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।। • ਸਤਯਨਾਮ'
      : '।।साहेब बंदगी साहेब।। • सत्यनाम',
  };

  return {
    step1_originalText: step1Original,
    step2_context: step2Context,
    step3_vocabulary: step3Vocab,
    step4_bhavarthSatsang: step4Satsang,
    step5_spiritualInsight: step5Insight,
    step6_suratShabadYoga: step6SuratYoga,
    step7_contemplation: step7Contemplation,
    step8_sadhanaSutra: step8SadhanaSutra,
    step9_quiz: step9Quiz,
    step10_blessing: step10Blessing,
  };
}

export function mergeAiIntoEightStepData(
  base: EightStepSwadhyayData,
  ai: SwadhyayAiResponsePayload | null,
  language: Language
): { data: EightStepSwadhyayData; multilingualWords: Record<Language, WordMeaning[]> | null } {
  if (!ai) {
    return { data: base, multilingualWords: null };
  }

  const multilingualWords: Record<Language, WordMeaning[]> | null =
    Array.isArray(ai.step3_wordMeanings) && ai.step3_wordMeanings.length > 0
      ? {
          hi: ai.step3_wordMeanings.map((w) => ({ word: w.wordHi, meaning: w.meaningHi })),
          pb: ai.step3_wordMeanings.map((w) => ({ word: w.wordPb, meaning: w.meaningPb })),
          en: ai.step3_wordMeanings.map((w) => ({ word: w.wordEn, meaning: w.meaningEn })),
        }
      : null;

  const activeWords = multilingualWords?.[language] || base.step3_vocabulary.words;

  return {
    data: {
      ...base,
      step2_context: {
        ...base.step2_context,
        relevanceText: ai.step2_context?.relevanceText || base.step2_context.relevanceText,
        spiritualSignificance: ai.step2_context?.spiritualSignificance || base.step2_context.spiritualSignificance,
      },
      step3_vocabulary: {
        ...base.step3_vocabulary,
        words: activeWords,
      },
      step4_bhavarthSatsang: {
        ...base.step4_bhavarthSatsang,
        bhavarth: ai.step4_bhavarth?.bhavarth || base.step4_bhavarthSatsang.bhavarth,
        deepSatsangGyan: ai.step4_bhavarth?.deepSatsangGyan || base.step4_bhavarthSatsang.deepSatsangGyan,
        mindMayaAnalysis: ai.step4_bhavarth?.mindMayaAnalysis || base.step4_bhavarthSatsang.mindMayaAnalysis,
      },
    },
    multilingualWords,
  };
}
