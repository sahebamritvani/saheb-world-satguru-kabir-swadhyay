import { Sakhi, Language, WordMeaning, QuizQuestion } from '../types';
import type { SwadhyayAiResponsePayload } from './swadhyayElevenSteps';
import {
  buildStep4SatsangContent,
  buildStep6EsotericContent,
} from './swadhyayContentEngine';
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
    subtitle: isHi ? 'सतगुरु साहेब की अमृतवाणी का शुद्ध एवं प्रामाणिक पाठ' : isPb ? 'ਸਤਿਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦੀ ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਦਾ ਸ਼ੁੱਧ ਪਾਠ' : 'Authentic Couplet Recitation & Sacred Vibration',
    sakhiNumber: sakhi.number,
    text: originalCouplet,
    transliteration: sakhi.transliteration || '',
    categoryTitle,
    dhunAudioTitle: isHi ? '🎵 धुन: साहेब की अमृतवाणी' : isPb ? '🎵 ਧੁਨ: ਸਾਹੇਬ ਦੀ ਅੰਮ੍ਰਿਤ ਬਾਣੀ' : '🎵 Sound: Saheb Divine Melody',
  };

  // 2. STEP 2: विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि
  const dynamicRelevance = originalContext || (
    isHi
      ? `यह साखी सतगुरु कबीर साहेब के '${categoryTitle}' (साखी #${sakhi.number}) के अंतर्गत अंतःकरण को जाग्रत करने वाली विशिष्ट वाणी है। यह मन और इंद्रियों के विकारों को शांत कर साधक को 'सत्यनाम' के सच्चे आचरण की प्रेरणा देती है।`
      : isPb
      ? `ਇਹ ਸਾਖੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੇ '${categoryTitle}' (ਸਾਖੀ #${sakhi.number}) ਤਹਿਤ ਰੂਹਾਨੀ ਚੇਤਨਾ ਨੂੰ ਪ੍ਰਕਾਸ਼ਮਾਨ ਕਰਨ ਵਾਲੀ ਅਨਮੋਲ ਬਾਣੀ ਹੈ।`
      : `This sacred sakhi from '${categoryTitle}' (Sakhi #${sakhi.number}) illuminates the practitioner's inner consciousness toward living Truth.`
  );

  const dynamicSignificance = isHi
    ? `सतगुरु कबीर साहेब की इस पावन साखी में "${originalCouplet.split('\n')[0]}" के माध्यम से जीवन के मूल सत्य को उजागर किया गया है। इसका स्वाध्याय साधक को बाह्य प्रपंचों से मुक्त कर आंतरिक चेतना से जोड़ता है।`
    : isPb
    ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਇਸ ਪਾਵਨ ਬਾਣੀ ("${originalCouplet.split('\n')[0]}") ਰਾਹੀਂ ਜੀਵ ਨੂੰ ਅੰਦਰੂਨੀ ਗਿਆਨ ਅਤੇ ਸਹਿਜ ਜੀਵਨ ਦਾ ਮਾਰਗ ਦਰਸਾਇਆ ਗਿਆ ਹੈ।`
    : `Through "${originalCouplet.split('\n')[0]}", Satguru Kabir Saheb directs the seeker from outer illusion toward direct inner awareness.`;

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
    const tokens = originalCouplet
      .replace(/[।॥,.;:'"?!\n\r]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length >= 2)
      .slice(0, 5);
    wordsList = tokens.map((tok) => ({
      word: tok,
      meaning: isHi
        ? `साखी #${sakhi.number} ('${categoryTitle}') में प्रयुक्त पावन पद`
        : isPb
        ? `ਸਾਖੀ #${sakhi.number} ('${categoryTitle}') ਵਿੱਚ ਆਇਆ ਪਾਵਨ ਸ਼ਬਦ`
        : `Key term appearing in Sakhi #${sakhi.number} (${categoryTitle})`,
    }));
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
    subtitle: isHi ? `सतगुरु कबीर साहेब ने साखी #${sakhi.number} क्यों कही व जीवन दृष्टांत` : isPb ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਨੇ ਸਾਖੀ #${sakhi.number} ਕਿਉਂ ਕਹੀ ਤੇ ਜੀਵਨ ਉਦਾਹਰਨ` : `Why Satguru Kabir Saheb Gave This Teaching & Everyday Example`,
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
  const firstLine = originalCouplet.split('\n')[0] || originalCouplet;
  const step6SuratYoga = {
    title: isHi ? '६. सत्यनाम गूँज और सूरत-योग साधना' : isPb ? '੬. ਸਤਯਨਾਮ ਗੂੰਜ ਅਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ' : '6. Surat-Shabad Yoga & Satyanaam Resonance',
    subtitle: isHi ? `साखी #${sakhi.number} के भाव के अनुरूप सूरत और शब्द का संधान` : isPb ? `ਸਾਖੀ #${sakhi.number} ਅਨੁਸਾਰ ਸੁਰਤ ਅਤੇ ਸ਼ਬਦ ਦਾ ਅਭਿਆਸ` : `Contemplative Breath & Sound Alignment for Sakhi #${sakhi.number}`,
    suratFocusPrinciple: isHi
      ? `साखी #${sakhi.number} ("${firstLine}") के इस पावन संदेश को ध्यान में रखते हुए अपनी सूरत को समस्त बाहरी विक्षेपों से मुक्त कर अंतर्मुखी करें।`
      : isPb
      ? `ਸਾਖੀ #${sakhi.number} ("${firstLine}") ਦੇ ਇਸ ਪਾਵਨ ਸੰਦੇਸ਼ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦਿਆਂ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਨਾਲ ਜੋੜੋ।`
      : `Reflecting upon Sakhi #${sakhi.number} ("${firstLine}"), gather your attention inward and rest in the silent grace of Satyanaam.`,
    shabadAnahatVibration: isHi
      ? `श्वास-प्रश्वास की माला पर सत्यनाम का सिमरन करते हुए अनुभव करें कि सतगुरु का शब्द आपके अंतःकरण को पावन कर रहा है।`
      : isPb
      ? `ਸੁਆਸਾਂ ਦੀ ਮਾਲਾ ਉੱਤੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ ਅਤੇ ਮਹਿਸੂਸ ਕਰੋ ਕਿ ਸਤਿਗੁਰੂ ਦਾ ਸ਼ਬਦ ਤੁਹਾਡੇ ਹਿਰਦੇ ਨੂੰ ਪਵਿੱਤਰ ਕਰ ਰਿਹਾ ਹੈ।`
      : `Practice breath remembrance of Satyanaam, feeling the unbroken resonance of the Satguru within.`,
    innerChimeGuidance: isHi
      ? [
          `१. शांत आसन में बैठकर साखी #${sakhi.number} के इस मर्म का स्मरण करें: "${firstLine}"`,
          '२. श्वास लेते समय "सत्य" और छोड़ते समय "नाम" का मानसिक अजपा जाप करें।',
          '३. मन के सभी विकारों को त्यागकर पूर्ण समर्पण भाव में स्थित हो जाएं।',
          '४. अनहद शांति और आनंद का अनुभव करते हुए विश्राम करें।',
        ]
      : isPb
      ? [
          `੧. ਸ਼ਾਂਤ ਆਸਣ ਵਿੱਚ ਬੈਠ ਕੇ ਸਾਖੀ #${sakhi.number} ("${firstLine}") ਦਾ ਮਨਨ ਕਰੋ।`,
          '੨. ਸੁਆਸ ਲੈਂਦੇ ਸਮੇਂ "ਸਤਿ" ਅਤੇ ਛੱਡਦੇ ਸਮੇਂ "ਨਾਮ" ਦਾ ਮਾਨਸਿਕ ਸਿਮਰਨ ਕਰੋ।',
          '੩. ਮਨ ਦੇ ਸਾਰੇ ਵਿਕਾਰਾਂ ਤੇ ਹੰਕਾਰ ਨੂੰ ਛੱਡ ਕੇ ਨਿਮਰ ਸਮਰਪਣ ਭਾਵ ਵਿੱਚ ਟਿਕ ਜਾਓ।',
          '੪. ਅੰਦਰੂਨੀ ਅਨਹਦ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰਦੇ ਹੋਏ ਵਿਸ਼ਰਾਮ ਕਰੋ।',
        ]
      : [
          `1. Sit in stillness and contemplate Sakhi #${sakhi.number}: "${firstLine}"`,
          '2. Mentally vibrate "Sat" on inhalation and "Naam" on exhalation.',
          '3. Release all mental turbulence and ego into pure surrender.',
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
      originalContemplation,
      isHi
        ? `साखी #${sakhi.number} के इस संदेश को मैं आज अपने जीवन में किस प्रकार आचरण में लाऊँगा?`
        : isPb
        ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਇਸ ਸੰਦੇਸ਼ ਨੂੰ ਮੈਂ ਅੱਜ ਆਪਣੇ ਜੀਵਨ ਦੇ ਵਿਹਾਰ ਵਿੱਚ ਕਿਵੇਂ ਉਤਾਰਾਂਗਾ?`
        : `How will I translate the teaching of Sakhi #${sakhi.number} into daily action today?`,
    ],
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
    dailySadhanaSutra:
      originalAction ||
      (isHi
        ? 'सत्य, संयम और निरंतर नाम सिमरन ही जीवन का सच्चा आभूषण है।'
        : isPb
        ? 'ਸੱਚ, ਸੰਜਮ ਅਤੇ ਨਿਰੰਤਰ ਨਾਮ ਸਿਮਰਨ ਹੀ ਜੀਵਨ ਦਾ ਅਸਲੀ ਗਹਿਣਾ ਹੈ।'
        : "Truth, self-restraint, and continuous Simran are life's true adornment."),
    sankalpPledge:
      originalPrayer ||
      (isHi
        ? 'हे सतगुरु कबीर साहेब! मुझे इस साखी के मर्म पर अडिग रहने की शक्ति प्रदान करें।'
        : isPb
        ? 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਮੈਨੂੰ ਇਸ ਸਾਖੀ ਦੇ ਮਰਮ ਉੱਤੇ ਅਡਿੱਗ ਰਹਿਣ ਦੀ ਸ਼ਕਤੀ ਬਖਸ਼ੋ।'
        : 'O Satguru Kabir Saheb, grant me the strength to abide firmly by this sacred teaching.'),
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
    title: isHi ? '१०. सतगुरु कबीर साहेब का दिव्य आशीर्वाद' : isPb ? '੧੦. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦਾ ਅਸ਼ੀਰਵਾਦ' : '10. Satguru Kabir Saheb Blessing & Dedication',
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
    blessingMessage:
      originalPrayer ||
      (isHi
        ? `सतगुरु कबीर साहेब की अहैतुकी कृपा से साखी #${sakhi.number} का यह स्वाध्याय आपके अंतःकरण को आलोकित करे।`
        : isPb
        ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਪਾਰ ਕਿਰਪਾ ਨਾਲ ਸਾਖੀ #${sakhi.number} ਦਾ ਇਹ ਸਵਾਧਿਆਇ ਤੁਹਾਡੇ ਹਿਰਦੇ ਨੂੰ ਪ੍ਰਕਾਸ਼ਮਾਨ ਕਰੇ।`
        : `May the study of Sakhi #${sakhi.number} illuminate your inner consciousness with divine grace.`),
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
