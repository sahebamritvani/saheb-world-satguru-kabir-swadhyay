import { Sakhi, Language, WordMeaning, QuizQuestion } from '../types';

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
 * Shuffles options for a question using a deterministic permutation based on sakhi.number and question index.
 */
function randomizeQuestionOptions(q: QuizQuestion, sakhiNumber: number, qIdx: number): QuizQuestion {
  const origCorrectIdx = (typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < 4) ? q.correctIndex : 0;
  
  const permutation = [0, 1, 2, 3];
  for (let i = permutation.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }

  const targetCorrectIdx = permutation.indexOf(origCorrectIdx);

  const reorder = (arr?: string[], fallbackArr?: string[]) => {
    const source = (arr && arr.length > 0) ? arr : (fallbackArr && fallbackArr.length > 0) ? fallbackArr : [];
    const safeArr = [...source];
    const defaultFillers = ['सत्यनाम सुमिरन', 'सत्संग विवेक', 'आंतरिक वैराग्य', 'सतगुरु कृपा'];
    while (safeArr.length < 4) {
      safeArr.push(defaultFillers[safeArr.length % defaultFillers.length]);
    }
    return permutation.map(origPos => safeArr[origPos] || defaultFillers[origPos % 4]);
  };

  const reorderedHi = reorder(q.options.hi);
  const reorderedPb = reorder(q.options.pb, q.options.hi);
  const reorderedEn = reorder(q.options.en, q.options.hi);

  return {
    ...q,
    options: {
      hi: reorderedHi,
      pb: reorderedPb,
      en: reorderedEn,
    },
    correctIndex: targetCorrectIdx >= 0 ? targetCorrectIdx : 0
  };
}

/**
 * Generates the authentic 8-step traditional Swadhyay structure dynamically for any Sakhi
 */
export function getEightStepSwadhyayData(sakhi: Sakhi, language: Language): EightStepSwadhyayData {
  const isHi = language === 'hi';
  const isPb = language === 'pb';

  const categoryTitle = sakhi.categoryTitle[language] || sakhi.categoryTitle.hi;
  const originalCouplet = sakhi.text[language] || sakhi.text.hi;
  const originalBhavarth = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
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

  // 2. STEP 2: विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि (Context & Significance - Dynamically Tailored)
  const dynamicRelevance = originalContext || (
    isHi 
      ? `यह साखी सतगुरु कबीर साहेब के '${categoryTitle}' (साखी #${sakhi.number}) के अंतर्गत अंतःकरण को जाग्रत करने वाली विशिष्ट वाणी है। यह मन और इंद्रियों के विकारों को शांत कर साधक को 'सत्यनाम' के सच्चे आचरण की प्रेरणा देती है।`
      : isPb
      ? `ਇਹ ਸਾਖੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੇ '${categoryTitle}' (ਸਾਖੀ #${sakhi.number}) ਤਹਿਤ ਰੂਹਾਨੀ ਚੇਤਨਾ ਨੂੰ ਪ੍ਰਕਾਸ਼ਮਾਨ ਕਰਨ ਵਾਲੀ ਅਨਮੋਲ ਬਾਣੀ ਹੈ।`
      : `This sacred sakhi from '${categoryTitle}' (Sakhi #${sakhi.number}) serves as a divine beacon illuminating the practitioner's inner consciousness towards eternal Truth.`
  );

  const dynamicSignificance = isHi
    ? `सतगुरु कबीर साहेब की इस पावन साखी में "${originalCouplet.split('\n')[0]}" के माध्यम से जीवन के मूल सत्य को उजागर किया गया है। इसका स्वाध्याय साधक को बाह्य प्रपंचों से मुक्त कर आंतरिक चेतना से जोड़ता है।`
    : isPb
    ? `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਇਸ ਪਾਵਨ ਬਾਣੀ ਰਾਹੀਂ ਜੀਵ ਨੂੰ ਸੱਚੇ ਮਾਰਗ ਅਤੇ ਅੰਦਰੂਨੀ ਗਿਆਨ ਦੀ ਪ੍ਰਾਪਤੀ ਦਾ ਮਾਰਗ ਦਰਸਾਇਆ ਗਿਆ ਹੈ।`
    : `This specific verse reveals profound spiritual truth, guiding the seeker away from illusion and toward direct realization of the Inner Divine.`;

  const step2Context = {
    title: isHi ? '२. विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि' : isPb ? '੨. ਵਿਸ਼ਾ ਸੰਦਰਭ ਤੇ ਰੂਹਾਨੀ ਪਿੱਠਭੂਮੀ' : '2. Context & Spiritual Significance',
    subtitle: isHi ? 'सत्यनाम के पावन पथ पर इस साखी की प्रासंगिकता' : isPb ? 'ਸਤਯਨਾਮ ਦੇ ਪਾਵਨ ਮਾਰਗ ਤੇ ਇਸ ਸਾਖੀ ਦੀ ਸਾਰਥਕਤਾ' : 'Relevance on the Sacred Path of Satyanaam',
    relevanceText: dynamicRelevance,
    spiritualSignificance: dynamicSignificance,
    foundationNote: isHi
      ? `ग्रन्थ: ${sakhi.grantha} | अंग: ${categoryTitle} | साखी #${sakhi.number}`
      : isPb
      ? `ਗ੍ਰੰਥ: ${sakhi.grantha} | ਅੰਗ: ${categoryTitle} | ਸਾਖੀ #${sakhi.number}`
      : `Scripture: ${sakhi.grantha} | Section: ${categoryTitle} | Sakhi #${sakhi.number}`,
  };

  // 3. STEP 3: शब्दार्थ (Vocabulary - Richly populated)
  let wordsList = sakhi.wordMeanings[language] || sakhi.wordMeanings.hi || [];
  if (wordsList.length < 2) {
    wordsList = [
      { word: 'साँच / सत्य', meaning: isHi ? 'शाश्वत यथार्थ व सनातन धर्म' : 'Eternal reality and divine righteousness' },
      { word: 'सुमिरन', meaning: isHi ? 'श्वास-श्वास सत्यनाम का स्मरण' : 'Continuous breath-borne remembrance of Satyanaam' },
      { word: 'सतगुरु', meaning: isHi ? 'पूर्ण मोक्षदाता सतगुरु कबीर साहेब' : 'The Supreme Liberator Satguru Kabir Saheb' }
    ];
  }
  const step3Vocab = {
    title: isHi ? '३. शब्दार्थ' : isPb ? '੩. ਸ਼ਬਦਾਰਥ' : '3. Word Meanings & Glossary',
    subtitle: isHi ? 'साखी के कठिन शब्दों का सरल एवं आध्यात्मिक अर्थ' : isPb ? 'ਸਾਖੀ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ ਦਾ ਸਰਲ ਅਧਿਆਤਮਿਕ ਅਰਥ' : 'Literal and Esoteric Breakdown of Terms',
    words: wordsList,
    toggleLabelShow: isHi ? 'शब्दार्थ दिखाएं' : isPb ? 'ਸ਼ਬਦਾਰਥ ਦਿਖਾਓ' : 'Show Vocabulary',
    toggleLabelHide: isHi ? 'शब्दार्थ छिपाएं' : isPb ? 'ਸ਼ਬਦਾਰਥ ਛੁਪਾਓ' : 'Hide Vocabulary',
  };

  // 4. STEP 4: सरल भावार्थ / गहरा अध्ययन (सत्संग - Dynamically Tailored per Sakhi)
  const dynamicSatsangGyan = isHi
    ? `सतगुरु कबीर साहेब की इस अमूल्य साखी का केंद्रीय भाव यह है कि ${originalBhavarth}\n\n` +
      `🌸 इस पावन वाणी का गहरा आध्यात्मिक विश्लेषण:\n` +
      `• जीवन का यथार्थ बोध: संसारी मनुष्य भौतिक उपलब्धियों और क्षणिक संबंधों में सुख तलाशता है, किंतु सतगुरु कबीर साहेब हमें चेताते हैं कि जब तक चेतना सत्यनाम से नहीं जुड़ती, तब तक तृप्ति असंभव है।\n` +
      `• आचरण और निष्ठा: ${originalAction || 'साधक को अपने दैनिक कर्मों में सत्य, दया और नम्रता को प्राथमिकता देनी चाहिए।'}\n` +
      `• अंतर्मुखी साधना: बाहरी आडंबरों को छोड़कर जब हम अपने भीतर झाँकते हैं, तो हमें सतगुरु की अहैतुकी कृपा का अनुभव होता है।`
    : isPb
    ? `ਇਸ ਪਾਵਨ ਸਾਖੀ ਦਾ ਮੁੱਖ ਭਾਵ ਹੈ ਕਿ ${originalBhavarth}\n\nਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਮਾਇਆ ਦੇ ਪ੍ਰਭਾਵ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਹੀ ਜੀਵ ਅਮਰ ਪਦ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹੈ।`
    : `This sacred teaching explains that ${originalBhavarth} By reflecting deeply on this verse, the seeker cuts through mental illusions and anchors in pure awareness.`;

  const dynamicMindMaya = isHi
    ? `इस साखी (${sakhi.number}) के पावन संदेश के अनुसार, मन की चंचलता और माया के भ्रम तभी विनष्ट होते हैं जब साधक सतगुरु के वचनों को अपने जीवन की ढाल बनाता है।`
    : isPb
    ? `ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਮਨ ਦੀ ਚੰਚਲਤਾ ਅਤੇ ਮਾਇਆ ਦੇ ਭਰਮ ਤਦ ਹੀ ਨਸ਼ਟ ਹੁੰਦੇ ਹਨ ਜਦੋਂ ਜੀਵ ਸਤਿਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਧਾਰਨ ਕਰਦਾ ਹੈ।`
    : `According to this sakhi, mental restlessness and worldly illusions dissolve when one translates Satguru's living word into virtuous daily action.`;

  const step4Satsang = {
    title: isHi ? '४. सरल भावार्थ एवं गहरा अध्ययन (सत्संग)' : isPb ? '੪. ਸਰਲ ਭਾਵਾਰਥ ਅਤੇ ਗਹਿਰਾ ਅਧਿਐਨ (ਸਤਿਸੰਗ)' : '4. In-Depth Exegesis & Satsang Discourse',
    subtitle: isHi ? 'साखी की विस्तृत व्याख्या जो मन और माया के पार का बोध दे' : isPb ? 'ਸਾਖੀ ਦੀ ਵਿਸਥਾਰਪੂਰਵਕ ਵਿਆਖਿਆ ਜੋ ਮਨ ਅਤੇ ਮਾਇਆ ਤੋਂ ਪਰੇ ਦਾ ਬੋਧ ਕਰਵਾਏ' : 'Spiritual Discourse transcending Mind and Illusion',
    bhavarth: originalBhavarth,
    deepSatsangGyan: dynamicSatsangGyan,
    mindMayaAnalysis: dynamicMindMaya,
    unlockLabel: isHi ? 'सत्संग अध्ययन अनलॉक करें' : isPb ? 'ਸਤਿਸੰਗ ਅਧਿਐਨ ਅਨਲੌਕ ਕਰੋ' : 'Unlock Deep Satsang Insight',
  };

  // 5. STEP 5: आध्यात्मिक रहस्य (Spiritual Insight)
  const step5Insight = {
    title: isHi ? '५. मूल वाणी का विस्तृत आध्यात्मिक रहस्य' : isPb ? '੫. ਮੂਲ ਬਾਣੀ ਦਾ ਅਧਿਆਤਮਿਕ ਰਹੱਸ' : '5. Detailed Mool Vani Esoteric Secret',
    subtitle: isHi ? 'मूल साखी की वाणी के अनुसार गुप्त ब्रह्म-विधान' : isPb ? 'ਮੂਲ ਬਾਣੀ ਅਨੁਸਾਰ ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਭੇਦ' : 'Esoteric Decoding of Mool Vani',
    secretWisdom: isHi
      ? `📜 मूल वाणी: "${originalCouplet}"\n\n` +
        `🔑 आध्यात्मिक रहस्य: ${categoryTitle} के अंतर्गत यह साखी जीवात्मा को उसके निज स्वरूप का बोध कराती है। जब आप इस वाणी का मनन करते हैं, तो घट के भीतर सोया हुआ विवेक जागृत होता है।\n\n` +
        `✨ साधना संकेत: सतगुरु कबीर साहेब के वचनों को जीवन में उतारना ही सबसे बड़ी तपस्या है।`
      : `Mool Vani ("${originalCouplet}") Esoteric Secret: Releasing inner ego elevates consciousness into eternal Satyanaam awareness.`,
    anuragSagarEssence: isHi
      ? `कबीर सागर (अनुराग सागर) का प्रमाण: "शब्द हमारे जीव का, शब्द हमारे प्राण। शब्द ही निज रूप है, शब्दहिं श्री भगवान्।"`
      : `Anurag Sagar Citation: "The Word is our life breath; the Word is our true form."`,
    unlockLabel: isHi ? 'आध्यात्मिक रहस्य अनलॉक करें' : isPb ? 'ਅਧਿਆਤਮਿਕ ਰਹੱਸ ਅਨਲੌਕ ਕਰੋ' : 'Unlock Mystical Insight',
  };

  // 6. STEP 6: सत्यनाम गूँज और सूरत-योग साधना (Surat Shabad Yoga - Tailored per Sakhi)
  const step6SuratYoga = {
    title: isHi ? '६. सत्यनाम गूँज और सूरत-योग साधना' : isPb ? '੬. ਸਤਯਨਾਮ ਗੂੰਜ ਅਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ' : '6. Surat-Shabad Yoga & Satyanaam Resonance',
    subtitle: isHi ? `साखी #${sakhi.number} के भाव के अनुरूप सूरत और शब्द का संधान` : isPb ? `ਸਾਖੀ #${sakhi.number} ਅਨੁਸਾਰ ਸੁਰਤ ਅਤੇ ਸ਼ਬਦ ਦਾ ਅਭਿਆਸ` : `Contemplative Breath & Sound Alignment for Sakhi #${sakhi.number}`,
    suratFocusPrinciple: isHi
      ? `साखी #${sakhi.number} ("${originalCouplet.split('\n')[0]}") के इस पावन संदेश को ध्यान में रखते हुए अपनी सूरत को समस्त बाहरी विक્ષेपों से मुक्त कर अंतर्मुखी करें।`
      : isPb
      ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਇਸ ਪਾਵਨ ਸੰਦੇਸ਼ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦਿਆਂ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਅੰਦਰੂਨੀ ਪ੍ਰਕਾਸ਼ ਨਾਲ ਜੋੜੋ।`
      : `Reflecting upon Sakhi #${sakhi.number}, gather your attention inward and rest in the silent grace of Satyanaam.`,
    shabadAnahatVibration: isHi
      ? `श्वास-प्रश्वास की माला पर सत्यनाम का सिमरन करते हुए अनुभव करें कि सतगुरु का शब्द आपके अंतःकरण को पावन कर रहा है।`
      : isPb
      ? `ਸੁਆਸਾਂ ਦੀ ਮਾਲਾ ਉੱਤੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ ਅਤੇ ਮਹਿਸੂਸ ਕਰੋ ਕਿ ਸਤਿਗੁਰੂ ਦਾ ਸ਼ਬਦ ਤੁਹਾਡੇ ਹਿਰਦੇ ਨੂੰ ਪਵਿੱਤਰ ਕਰ ਰਿਹਾ ਹੈ।`
      : `Practice breath remembrance of Satyanaam, feeling the unbroken resonance of the Satguru within.`,
    innerChimeGuidance: [
      isHi ? `१. शांत आसन में बैठकर साखी #${sakhi.number} के इस मर्म का स्मरण करें: "${originalCouplet.split('\n')[0]}"` : `1. Sit in stillness and contemplate Sakhi #${sakhi.number}.`,
      isHi ? '२. श्वास लेते समय \'सत्य\' और छोड़ते समय \'नाम\' का मानसिक अजपा जाप करें।' : '2. Mentally vibrate "Sat" on inhalation and "Naam" on exhalation.',
      isHi ? '३. मन के सभी विकारों को त्यागकर पूर्ण समर्पण भाव में स्थित हो जाएं।' : '3. Release all mental turbulence into pure surrender.',
      isHi ? '४. अनहद शांति और आनंद का अनुभव करते हुए विश्राम करें।' : '4. Rest peacefully in the inner unstruck silence.'
    ],
    ghatMandirVisual: isHi ? `घट मंदिर में साखी #${sakhi.number} की पावन ज्योति` : `Inner Sanctum Illumination for Sakhi #${sakhi.number}`,
    sadhanaInstruction: isHi ? `साखी #${sakhi.number} के इस स्वाध्याय के पश्चात १५ मिनट मौन ध्यान करें।` : 'Practice 15 minutes of silent meditation following this study.',
  };

  // 7. STEP 7: चिंतन प्रश्न
  const step7Contemplation = {
    title: isHi ? '७. चिंतन प्रश्न (Self-Inquiry)' : isPb ? '੭. ਚਿੰਤਨ ਪ੍ਰਸ਼ਨ (ਆਤਮ-ਮੰਥਨ)' : '7. Contemplation & Probing Questions',
    subtitle: isHi ? 'साधक के अंतर्मुखी आत्म-मंथन हेतु विशेष प्रश्न' : 'Special Inquiry Prompts for this Sakhi',
    inquiryQuestions: [
      originalContemplation,
      isHi ? `साखी #${sakhi.number} के इस संदेश को मैं आज अपने जीवन में किस प्रकार आचरण में लाऊँगा?` : `How will I translate the teaching of Sakhi #${sakhi.number} into daily action today?`
    ],
    selfObservationGuide: isHi ? 'अपने उत्तर को साक्षी भाव से देखें।' : 'Observe your answers with objective clarity.',
    journalPrompt: isHi ? 'मेरा आज का संकल्प:' : 'My Resolution Today:',
  };

  // 8. STEP 8: साधना सूत्र
  const step8SadhanaSutra = {
    title: isHi ? '८. आज का साधना सूत्र एवं संकल्प' : isPb ? '੮. ਅੱਜ ਦਾ ਸਾਧਨਾ ਸੂਤਰ ਤੇ ਸੰਕਲਪ' : '8. Daily Sadhana Sutra & Pledge',
    subtitle: isHi ? 'इस साखी से प्राप्त होने वाला मुख्य व्यावहारिक सूत्र' : 'Core practical takeaway from this sakhi',
    dailySadhanaSutra: originalAction || (isHi ? 'सत्य, संयम और निरंतर नाम सिमरन ही जीवन का सच्चा आभूषण है।' : 'Truth, self-restraint, and continuous Simran are life\'s true adornment.'),
    sankalpPledge: originalPrayer || (isHi ? 'हे सतगुरु कबीर साहेब! मुझे इस साखी के मर्म पर अडिग रहने की शक्ति प्रदान करें।' : 'O Satguru Kabir Saheb, grant me the strength to abide firmly by this sacred teaching.'),
  };

  // 9. STEP 9: Quiz
  const defaultQuestions: QuizQuestion[] = sakhi.quiz || [
    {
      id: `q-${sakhi.id}-1`,
      question: {
        hi: `साखी #${sakhi.number} के अनुसार मनुष्य जीवन का सबसे बड़ा लक्ष्य क्या है?`,
        pb: `ਸਾਖੀ #${sakhi.number} ਅਨੁਸਾਰ ਮਨੁੱਖੀ ਜੀਵਨ ਦਾ ਅਸਲੀ ਟੀਚਾ ਕੀ ਹੈ?`,
        en: `According to Sakhi #${sakhi.number}, what is the supreme goal of human life?`
      },
      options: {
        hi: ['सतगुरु के चरणों में सत्यनाम सिमरन', 'संसारिक संग्रह', 'अहंकार प्रदर्शन', 'भौतिक भोग'],
        pb: ['ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਨਾਮ ਸਿਮਰਨ', 'ਦੁਨਿਆਵੀ ਇਕੱਠ', 'ਹੰਕਾਰ ਪ੍ਰਦਰਸ਼ਨ', 'ਭੌਤਿਕ ਭੋਗ'],
        en: ['Simran at the Satguru\'s feet', 'Worldly accumulation', 'Display of ego', 'Sensory indulgence']
      },
      correctIndex: 0,
      explanation: {
        hi: 'सतगुरु कबीर साहेब बारम्बार सत्यनाम सिमरन और निष्काम भक्ति को ही जीवन का एकमात्र सार बताते हैं।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਸਿਮਰਨ ਅਤੇ ਭਗਤੀ ਨੂੰ ਹੀ ਜੀਵਨ ਦਾ ਸਾਰ ਦੱਸਦੇ ਹਨ।',
        en: 'Satguru Kabir Saheb repeatedly emphasizes remembrance of the True Name as the sole essence of life.'
      }
    }
  ];

  const randomizedQuestions = defaultQuestions.map((q, qIdx) => randomizeQuestionOptions(q, sakhi.number, qIdx));

  const step9Quiz = {
    title: isHi ? '९. आध्यात्मिक प्रश्नोत्तरी (Self-Assessment)' : isPb ? '੯. ਅਧਿਆਤਮਕ ਪ੍ਰਸ਼ਨਾਵਲੀ' : '9. Spiritual Self-Assessment Quiz',
    subtitle: isHi ? 'अपने बोध की परख करें' : 'Test your understanding of this sakhi',
    instruction: isHi ? 'सही विकल्प चुनकर अपने आध्यात्मिक ज्ञान की जांच करें:' : 'Select the correct option:',
    questions: randomizedQuestions,
  };

  // 10. STEP 10: Blessing
  const step10Blessing = {
    title: isHi ? '१०. सतगुरु कबीर साहेब का दिव्य आशीर्वाद' : isPb ? '੧੦. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਦਾ ਅਸ਼ੀर्वाद' : '10. Satguru Kabir Saheb Blessing & Dedication',
    subtitle: isHi ? 'स्वाध्याय संपूर्णता पर गुरु वंदन' : 'Guruvandan upon completing Swadhyay',
    blessingVani: isHi ? 'साहेब मेरा एक है, दूजा कहै सो दोय।' : 'Saheb mera ek hai, dooja kahe so doy.',
    blessingMessage: originalPrayer || (isHi ? `सतगुरु कबीर साहेब की अहैतुकी कृपा से साखी #${sakhi.number} का यह स्वाध्याय आपके अंतःकरण को आलोकित करे।` : `May the study of Sakhi #${sakhi.number} illuminate your inner consciousness with divine grace.`),
    finalSalutation: '।।साहेब बंदगी साहेब।। • सत्यनाम',
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
