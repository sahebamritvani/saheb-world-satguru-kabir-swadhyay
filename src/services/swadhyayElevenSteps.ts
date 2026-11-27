import { Sakhi, Language, WordMeaning, SACRED_BRANDING } from '../types';
import {
  SGGS_CROSS_REF_VAULT,
  BIJAK_CROSS_REF_VAULT,
  GRANTHAVALI_CROSS_REF_VAULT,
  KABIR_SAGAR_CROSS_REF_VAULT,
  CuratedCrossRefEntry,
  mapCategoryToThemes,
  stableStringHash,
  buildMoolSakhiConnection,
} from '../data/step8CrossReferenceVault';
import { buildFiveDimensionQuiz, shuffleGeneratedQuiz, generateDistractorFeedback } from './quizGenerator';
import { buildStep6EsotericContent, getAngSpiritualProfile } from './swadhyayContentEngine';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface ElevenStepQuizQuestion {
  id: string;
  angle: string;
  questionText: string;
  question?: string;
  options: QuizOption[];
  correctIndex?: number;
  explanation?: string;
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

export interface SwadhyayCertificatePayload {
  topHeader: string;
  certificationStatement: string;
  highlightMoolSakhi: string;
  oneLineBlessing: string;
  footerBrand: string;
  bottomFooter: string;
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
    oneLineBlessing: string;
    certificateActionLabel: string;
  };
  certificateData?: SwadhyayCertificatePayload;
  isAiGenerated?: boolean;
}

export interface SwadhyayAiWordEntry {
  wordHi: string;
  meaningHi: string;
  wordPb: string;
  meaningPb: string;
  wordEn: string;
  meaningEn: string;
}

export interface SwadhyayAiResponsePayload {
  step2_context: {
    relevanceText: string;
    spiritualSignificance: string;
  };
  step3_wordMeanings: SwadhyayAiWordEntry[];
  step4_bhavarth: {
    bhavarth: string;
    deepSatsangGyan: string;
    mindMayaAnalysis: string;
  };
  step5_quiz: ElevenStepQuizQuestion[];
  step6_spiritualInsight: {
    mysticalCoding: string;
  };
  step7_keyLearning: string[];
  step8_crossReferences: ElevenStepCrossReference[];
  step9_contemplation: string[];
  step10_audioIntegration: {
    sadhanaMethodName: string;
    stages: ElevenStepAudioStage[];
  };
  step11_blessingCertificate: {
    blessingVerse: string;
    guruVachan: string;
    samarpanSankalp: string;
    oneLineBlessing: string;
  };
  certificateData: SwadhyayCertificatePayload;
}

function fisherYatesShuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function cleanQuizPrefix(raw: string): string {
  return (raw || '').replace(/^[✓✗✔✕❌]\s*[^!|।]+[!|।]\s*/, '').trim() || (raw || '').trim();
}

export function normalizeElevenStepQuizQuestion(
  rawQ: any,
  language: Language,
  qIdx: number,
  fallbackQuestion?: ElevenStepQuizQuestion
): ElevenStepQuizQuestion {
  const rawOptionsInput = Array.isArray(rawQ?.options) ? rawQ.options : [];
  const rawQuestionText =
    typeof rawQ?.questionText === 'string' && rawQ.questionText.trim()
      ? rawQ.questionText.trim()
      : typeof rawQ?.question === 'string' && rawQ.question.trim()
      ? rawQ.question.trim()
      : fallbackQuestion?.questionText || fallbackQuestion?.question || '';

  const extractedTexts: Array<{ text: string; isCorrect?: boolean; feedback?: string }> = [];
  for (let i = 0; i < 4; i++) {
    const item = rawOptionsInput[i];
    if (typeof item === 'string') {
      const txt = item.trim();
      if (txt) extractedTexts.push({ text: txt });
    } else if (item && typeof item === 'object') {
      const txt = String(item.text || item.label || item.option || '').trim();
      if (txt) {
        extractedTexts.push({
          text: txt,
          isCorrect: typeof item.isCorrect === 'boolean' ? item.isCorrect : undefined,
          feedback: typeof item.feedback === 'string' ? item.feedback.trim() : undefined,
        });
      }
    }
  }

  if (!rawQuestionText || extractedTexts.length < 4) {
    if (fallbackQuestion && Array.isArray(fallbackQuestion.options) && fallbackQuestion.options.length >= 4) {
      return fallbackQuestion;
    }
  }

  const padFallbackOpts = fallbackQuestion?.options || [];
  while (extractedTexts.length < 4) {
    const fbOpt = padFallbackOpts[extractedTexts.length];
    extractedTexts.push({
      text:
        fbOpt?.text ||
        (language === 'pb'
          ? `ਵਿਕਲਪ ${extractedTexts.length + 1}`
          : language === 'en'
          ? `Option ${extractedTexts.length + 1}`
          : `विकल्प ${extractedTexts.length + 1}`),
      isCorrect: false,
      feedback: fbOpt?.feedback,
    });
  }

  const objCorrectIdx = extractedTexts.findIndex((o) => o.isCorrect === true);
  const rawCorrectIdx =
    objCorrectIdx >= 0
      ? objCorrectIdx
      : typeof rawQ?.correctIndex === 'number' && rawQ.correctIndex >= 0 && rawQ.correctIndex < extractedTexts.length
      ? rawQ.correctIndex
      : 0;

  const baseExplanation = cleanQuizPrefix(
    (typeof rawQ?.explanation === 'string' && rawQ.explanation.trim()) ||
      extractedTexts[rawCorrectIdx]?.feedback ||
      fallbackQuestion?.explanation ||
      (language === 'pb'
        ? 'ਇਹ ਉੱਤਰ ਸਾਖੀ ਦੇ ਮੂਲ ਭਾਵ ਅਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਉਪਦੇਸ਼ ਨਾਲ ਸਹੀ ਮੇਲ ਖਾਂਦਾ ਹੈ।'
        : language === 'en'
        ? 'This answer directly aligns with the core spiritual message of this Sakhi.'
        : 'यह उत्तर इस साखी के मूल भाव और सतगुरु कबीर साहेब के पावन उपदेश के पूर्णतः अनुरूप है।')
  );

  const correctPrefix =
    language === 'pb' ? '✓ ਸਹੀ ਉੱਤਰ! ' : language === 'en' ? '✓ Correct Answer! ' : '✓ सही उत्तर! ';

  const normalizedOptions: QuizOption[] = extractedTexts.slice(0, 4).map((opt, idx) => {
    const isCorrect = idx === rawCorrectIdx;
    if (isCorrect) {
      const fb =
        opt.feedback && !opt.feedback.startsWith('✗') ? cleanQuizPrefix(opt.feedback) : baseExplanation;
      return {
        text: opt.text,
        isCorrect: true,
        feedback: fb.startsWith('✓') ? fb : `${correctPrefix}${fb}`,
      };
    }

    const existingWrongFb =
      opt.feedback && !opt.feedback.startsWith('✓') ? cleanQuizPrefix(opt.feedback) : '';
    const smartDistractor = generateDistractorFeedback(opt.text, language);
    return {
      text: opt.text,
      isCorrect: false,
      feedback: existingWrongFb ? `✗ ${existingWrongFb}` : smartDistractor,
    };
  });

  return {
    id: String(rawQ?.id || fallbackQuestion?.id || `sakhi-q-${qIdx + 1}`),
    angle: String(rawQ?.angle || fallbackQuestion?.angle || 'बोध परख'),
    questionText: rawQuestionText,
    question: rawQuestionText,
    options: normalizedOptions,
    correctIndex: rawCorrectIdx,
    explanation: baseExplanation,
  };
}

/**
 * Shuffles BOTH the order of quiz questions AND option positions (A, B, C, D) on every attempt.
 */
export function shuffleElevenStepQuiz(
  questions: ElevenStepQuizQuestion[],
  language: Language = 'hi'
): ElevenStepQuizQuestion[] {
  const normalized = questions.map((q, idx) => normalizeElevenStepQuizQuestion(q, language, idx));
  return shuffleGeneratedQuiz(normalized);
}

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

function isDuplicateCouplet(candidateText: string, comparisonText: string): boolean {
  const sigA = normalizeCoupletSignature(candidateText);
  const sigB = normalizeCoupletSignature(comparisonText);
  if (!sigA || !sigB) return false;
  if (sigA === sigB) return true;

  const stemsA = sigA
    .split(' ')
    .filter((w) => w.length >= 3)
    .map((w) => w.slice(0, 3));
  const stemsB = new Set(
    sigB
      .split(' ')
      .filter((w) => w.length >= 3)
      .map((w) => w.slice(0, 3))
  );
  if (stemsA.length === 0 || stemsB.size === 0) return false;

  let overlap = 0;
  for (const s of stemsA) {
    if (stemsB.has(s)) overlap++;
  }
  return overlap >= 4 || overlap / Math.min(stemsA.length, stemsB.size) >= 0.55;
}

function pickMeaningMatchedEntry(
  vault: CuratedCrossRefEntry[],
  sakhi: Sakhi,
  primaryThemes: string[],
  verseThemes: string[],
  verseBlob: string,
  meaningBlob: string,
  seedOffset: number,
  excludeVersesHi: string[] = []
): CuratedCrossRefEntry {
  const activeVerseHi = sakhi.text?.hi || '';
  const primarySet = new Set(primaryThemes);
  const verseThemeSet = new Set(verseThemes);
  const sakhiTags = new Set(sakhi.themeTags || []);

  const isSakhiShabdOrTruth =
    sakhiTags.has('satya-khoj') ||
    sakhiTags.has('saar-shabd') ||
    sakhiTags.has('shabd-sadhan') ||
    sakhi.category === 'shabd-ko-ang' ||
    /खोजी|सार शब्द|सत्य शब्द|गहि शब्द/.test(verseBlob);

  const isSakhiSpeech =
    !isSakhiShabdOrTruth &&
    (sakhiTags.has('sheetal-vani') ||
      sakhi.category === 'sweet-speech' ||
      /शीतल शब्द|कुटिल बचन|मधुर वाणी/.test(verseBlob));

  const scored = vault
    .filter((entry) => {
      if (isDuplicateCouplet(entry.verse.hi, activeVerseHi)) return false;
      for (const excluded of excludeVersesHi) {
        if (excluded && isDuplicateCouplet(entry.verse.hi, excluded)) return false;
      }
      return true;
    })
    .map((entry) => {
      let score = 0;

      // 1. Tag Intersection (Highest Priority: +120 per matching themeTag)
      const entryTags = entry.themeTags || [];
      for (const tag of entryTags) {
        if (sakhiTags.has(tag)) {
          score += 120;
        }
      }

      // 2. Prevent cross-contamination between Shabd/Truth verses and sweet-speech verses
      const isEntrySpeech =
        (entry.themeTags && entry.themeTags.includes('sheetal-vani')) ||
        ((entry.id.includes('speech') || entry.themes.includes('mind-speech')) &&
          !entry.keywords.some((k) => /खोजी|सार शब्द|गहि|सबद/.test(k)));

      if (isSakhiShabdOrTruth && isEntrySpeech) {
        score -= 250; // Heavily penalize sweet speech when the Sakhi is about Shabd / Truth
      } else if (isSakhiSpeech && !isEntrySpeech && !entry.themes.includes('mind-speech')) {
        score -= 100;
      }

      // 3. Keyword matches
      for (const kw of entry.keywords) {
        const kwLower = kw.toLowerCase();
        if (verseBlob.includes(kwLower)) score += 35;
        else if (meaningBlob.includes(kwLower)) score += 4;
      }

      // 4. Broad Theme matches
      for (const theme of entry.themes) {
        if (verseThemeSet.has(theme)) score += 30;
        if (primarySet.has(theme)) score += 14;
      }

      return { entry, score };
    })
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return vault[0];
  }

  const maxScore = scored[0].score;
  const topResonant = scored.filter((item) => item.score >= Math.max(1, maxScore - 6)).slice(0, 2);
  const candidatePool = topResonant.length >= 1 ? topResonant : scored.slice(0, Math.min(2, scored.length));

  const sakhiSeed =
    (Number(sakhi.number) || 1) * 7 +
    stableStringHash(`${sakhi.id || ''}-${activeVerseHi.slice(0, 24)}`) +
    seedOffset;
  const chosenIndex = Math.abs(sakhiSeed) % candidatePool.length;
  return candidatePool[chosenIndex].entry;
}

function resolveScripturalCrossReferences(sakhi: Sakhi, language: Language): ElevenStepCrossReference[] {
  const sakhiVerseHi = sakhi.text?.hi || '';
  const sakhiVerseActive =
    (language === 'pb' ? sakhi.text?.pb : language === 'en' ? sakhi.text?.en : sakhi.text?.hi) ||
    sakhiVerseHi;
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
    [selectedSggs.verse.hi]
  );

  const selectedGranthavali = pickMeaningMatchedEntry(
    GRANTHAVALI_CROSS_REF_VAULT,
    sakhi,
    primaryThemes,
    verseThemes,
    verseBlob,
    meaningBlob,
    5,
    [selectedSggs.verse.hi, selectedBijak.verse.hi]
  );

  const selectedKabirSagar = pickMeaningMatchedEntry(
    KABIR_SAGAR_CROSS_REF_VAULT,
    sakhi,
    primaryThemes,
    verseThemes,
    verseBlob,
    meaningBlob,
    7,
    [selectedSggs.verse.hi, selectedBijak.verse.hi, selectedGranthavali.verse.hi]
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

  return [
    formatEntry(selectedSggs),
    formatEntry(selectedBijak),
    formatEntry(selectedGranthavali),
    formatEntry(selectedKabirSagar),
  ];
}

/**
 * Generates a concise 1-line theme-based blessing strictly tailored to the completed Sakhi.
 */
export function buildThemeOneLineBlessing(sakhi: Sakhi, language: Language): string {
  const angProfile = getAngSpiritualProfile(sakhi, language);
  const prayer = sakhi.samarpanPrayer?.[language] || sakhi.samarpanPrayer?.hi || '';
  const firstPrayerSentence = prayer
    .replace(/साहेब बंदगी साहेब!?/gi, '')
    .replace(/Saheb Bandagi Saheb!?/gi, '')
    .split(/[।.!?\n]/)[0]
    ?.trim();

  if (firstPrayerSentence && firstPrayerSentence.length >= 16 && firstPrayerSentence.length <= 135) {
    return language === 'hi' && !firstPrayerSentence.endsWith('।')
      ? `${firstPrayerSentence}।`
      : firstPrayerSentence;
  }

  return angProfile.blessingPhrase;
}

/**
 * Builds 5 Sakhi-specific Quiz questions strictly from this Sakhi's own quiz entries,
 * wordMeanings, couplet lines, bhavarth, and practicalApplication — zero generic filler.
 */
function buildSakhiSpecificQuiz(sakhi: Sakhi, language: Language): ElevenStepQuizQuestion[] {
  return buildFiveDimensionQuiz(sakhi, language).map((q) => ({
    id: q.id,
    angle: q.angle,
    questionText: q.question,
    options: q.options,
  }));
}

/**
 * Builds instantaneous, 100% Sakhi-specific 11-step Swadhyay data with distinct steps (no Step 1/4/6 copy-paste).
 */
export function getElevenStepSwadhyayData(sakhi: Sakhi, language: Language): ElevenStepSwadhyayData {
  const sakhiVerse =
    (language === 'pb' ? sakhi.text?.pb : language === 'en' ? sakhi.text?.en : sakhi.text?.hi) ||
    sakhi.text?.hi ||
    '';
  const categoryTitle = sakhi.categoryTitle?.[language] || sakhi.categoryTitle?.hi || '';
  const contextNote = sakhi.contextNote?.[language] || sakhi.contextNote?.hi || '';
  const practical = sakhi.practicalApplication?.[language] || sakhi.practicalApplication?.hi || '';
  const contemplationPrompt = sakhi.contemplation?.[language] || sakhi.contemplation?.hi || '';
  const samarpanPrayer = sakhi.samarpanPrayer?.[language] || sakhi.samarpanPrayer?.hi || '';
  const words = sakhi.wordMeanings?.[language] || sakhi.wordMeanings?.hi || [];
  const firstLine = sakhiVerse.split('\n')[0]?.trim() || sakhiVerse;

  // Step 6: Esoteric & yogic decoding of symbols strictly for THIS Sakhi (zero repetition of Step 1)
  const step6MysticalText = buildStep6EsotericContent(sakhi, language);
  const angProfile = getAngSpiritualProfile(sakhi, language);

  // Step 7: 4 practical daily-life takeaways grounded in THIS Sakhi's Ang & wisdom
  const keyPoint1 = practical || angProfile.practiceDirective;

  const formatWordTakeaway = (
    w: { word: string; meaning: string },
    isSecondary: boolean
  ): string => {
    const isCautionary = /बिगोय|नष्ट|काल|भटकाव|अज्ञान|दोष|पाखंड|शत्रु|दुसमन|अहं|क्रोध|लोभ|विकार|मोह|झूठ|ruin|waste|perish|enemy|delusion|ignorance|pride/.test(
      `${w.word} ${w.meaning}`.toLowerCase()
    );

    if (isCautionary) {
      if (language === 'pb') {
        return `"${w.word}" (${w.meaning}) ਦੀ ਚੇਤਾਵਨੀ ਨੂੰ ਸਮਝ ਕੇ '${categoryTitle}' ਦੇ ਰਾਹ ਵਿੱਚ ਵਿਅਰਥ ਭਟਕਣ ਤੋਂ ਬਚੋ।`;
      }
      if (language === 'en') {
        return `Heed the warning of "${w.word}" (${w.meaning}) within '${categoryTitle}' to guard against spiritual delusion.`;
      }
      return `"${w.word}" (${w.meaning}) की चेतावनी को ध्यान में रखकर '${categoryTitle}' के पथ से भटकने से स्वयं को बचाएं।`;
    }

    if (language === 'pb') {
      return isSecondary
        ? `"${w.word}" (${w.meaning}) ਦੇ ਮਰਮ ਰਾਹੀਂ ${angProfile.angFocus} ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਦ੍ਰਿੜ੍ਹ ਕਰੋ।`
        : `ਪਾਵਨ ਸੰਕੇਤ "${w.word}" (${w.meaning}) ਨੂੰ ਅਪਣਾ ਕੇ ${angProfile.angFocus} ਵੱਲ ਕਦਮ ਵਧਾਓ।`;
    }
    if (language === 'en') {
      return isSecondary
        ? `Recognize "${w.word}" (${w.meaning}) as a direct call toward ${angProfile.angFocus}.`
        : `Embody "${w.word}" (${w.meaning}) to stay anchored in ${angProfile.angFocus}.`;
    }
    return isSecondary
      ? `साखी के प्रमुख संकेत "${w.word}" (${w.meaning}) को आचरण में उतारकर ${angProfile.angFocus} को पुष्ट करें।`
      : `साखी के पावन सूत्र "${w.word}" (${w.meaning}) द्वारा ${angProfile.angFocus} में अपने चित्त को स्थिर करें।`;
  };

  const keyPoint2 = words[0]
    ? formatWordTakeaway(words[0], false)
    : angProfile.practiceDirective;

  const keyPoint3 = words[1]
    ? formatWordTakeaway(words[1], true)
    : words[2]
    ? formatWordTakeaway(words[2], true)
    : contextNote ||
      (language === 'pb'
        ? `'${categoryTitle}' ਦਾ ਕੇਂਦਰੀ ਸਿਧਾਂਤ: ${angProfile.angFocus}।`
        : language === 'en'
        ? `Core Ang focus ('${categoryTitle}'): ${angProfile.angFocus}.`
        : `'${categoryTitle}' का केंद्रीय सूत्र: ${angProfile.angFocus}।`);

  const keyPoint4 =
    contemplationPrompt ||
    (language === 'pb'
      ? `ਨਿੱਤ ਅਭਿਆਸ (${categoryTitle}): ${angProfile.practiceDirective}`
      : language === 'en'
      ? `Daily Ang Commitment (${categoryTitle}): ${angProfile.practiceDirective}`
      : `दैनिक साधना सूत्र ('${categoryTitle}'): ${angProfile.practiceDirective}`);

  const bulletPoints =
    language === 'pb'
      ? [`੧. ${keyPoint1}`, `੨. ${keyPoint2}`, `੩. ${keyPoint3}`, `੪. ${keyPoint4}`]
      : language === 'en'
      ? [`1. ${keyPoint1}`, `2. ${keyPoint2}`, `3. ${keyPoint3}`, `4. ${keyPoint4}`]
      : [`१. ${keyPoint1}`, `२. ${keyPoint2}`, `३. ${keyPoint3}`, `४. ${keyPoint4}`];

  // Step 8: Authentic Scriptural Cross-References from 4 Granths
  const crossRefs = resolveScripturalCrossReferences(sakhi, language);

  // Step 9: 3 Self-Reflection questions based directly on THIS Sakhi's Ang & moral
  const reflectionQuestions =
    language === 'pb'
      ? [
          contemplationPrompt || angProfile.reflectionLens,
          angProfile.reflectionLens !== contemplationPrompt
            ? angProfile.reflectionLens
            : `'${categoryTitle}' (ਸਾਖੀ #${sakhi.number}) ਦੇ ਸਿਧਾਂਤ — ${angProfile.angFocus} — ਵਿੱਚ ਮੇਰੇ ਮਨ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਰੁਕਾਵਟ ਕੀ ਹੈ?`,
          `ਮੈਂ ਅੱਜ "${practical || angProfile.practiceDirective}" ਨੂੰ ਆਪਣੇ ਵਿਹਾਰ ਵਿੱਚ ਕਿਸ ਸਮੇਂ ਲਾਗੂ ਕਰਾਂਗਾ?`,
        ]
      : language === 'en'
      ? [
          contemplationPrompt || angProfile.reflectionLens,
          angProfile.reflectionLens !== contemplationPrompt
            ? angProfile.reflectionLens
            : `What inner habit resists '${categoryTitle}' (Sakhi #${sakhi.number}): ${angProfile.angFocus}?`,
          `When will I directly practice "${practical || angProfile.practiceDirective}" in my next real-life interaction?`,
        ]
      : [
          contemplationPrompt || angProfile.reflectionLens,
          angProfile.reflectionLens !== contemplationPrompt
            ? angProfile.reflectionLens
            : `'${categoryTitle}' (साखी #${sakhi.number}) के मूल लक्ष्य — ${angProfile.angFocus} — के मार्ग में मेरे मन की कौन-सी वृत्ति सबसे बड़ी बाधा बनती है?`,
          `आज मैं "${practical || angProfile.practiceDirective}" — इस सूत्र को अपने जीवन की किस परिस्थिति में तत्काल लागू करूँगा?`,
        ];

  const oneLineBlessing = buildThemeOneLineBlessing(sakhi, language);
  const questions = buildSakhiSpecificQuiz(sakhi, language);
  const qCount = questions.length;

  return {
    step5_quiz: {
      title:
        language === 'pb'
          ? '੫. ਬੋਧ ਪਰਖ (Quiz & Reflection)'
          : language === 'en'
          ? '5. Sakhi Understanding Quiz'
          : '५. बोध परख (साखी-विशेष प्रश्नोत्तरी)',
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਸ਼ਬਦਾਂ ਤੇ ਮਰਮ 'ਤੇ ਆਧਾਰਿਤ ${qCount} ਪ੍ਰਸ਼ਨ (ਹਰ ਵਾਰ ਨਵਾਂ ਕ੍ਰਮ)`
          : language === 'en'
          ? `${qCount} randomized MCQs testing the exact words and teaching of Sakhi #${sakhi.number}`
          : `साखी #${sakhi.number} के शब्दों, प्रतीकों व संदेश पर आधारित ${qCount} विशेष प्रश्न (क्रम परिवर्तित)`,
      questions,
    },
    step6_spiritualInsight: {
      title:
        language === 'pb'
          ? '੬. ਗੂੜ੍ਹ ਆਤਮਿਕ ਰਹੱਸ (Mystical Symbolism)'
          : language === 'en'
          ? '6. Mystical Meaning of Sakhi Symbols'
          : '६. आध्यात्मिक रहस्य (मूल साखी के प्रतीकों का मर्म)',
      subtitle:
        language === 'pb'
          ? `'${categoryTitle}' ਸਾਖੀ #${sakhi.number} ਦੇ ਪ੍ਰਤੀਕਾਂ ਦੀ ਅੰਦਰੂਨੀ ਵਿਆਖਿਆ`
          : language === 'en'
          ? `Inner decoding of the symbols in Sakhi #${sakhi.number} (${categoryTitle})`
          : `'${categoryTitle}' — साखी #${sakhi.number} के प्रतीकों की सूक्ष्म अंतर्दृष्टि`,
      unlockLabel:
        language === 'pb' ? 'ਰਹੱਸ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Unlock Mystical Insight' : 'रहस्य खोलें',
      mysticalCoding: step6MysticalText,
    },
    step7_keyLearning: {
      title:
        language === 'pb'
          ? '੭. ਮੁੱਖ ਵਿਵਹਾਰਕ ਸਿੱਖਿਆਵਾਂ (Key Learnings)'
          : language === 'en'
          ? '7. Four Practical Life Takeaways'
          : '७. मुख्य जीवन शिक्षाएं (साखी से प्राप्त ४ व्यावहारिक सूत्र)',
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} ਤੋਂ ਪ੍ਰਾਪਤ ੪ ਅਮਲੀ ਸੂਤਰ`
          : language === 'en'
          ? `4 daily-life takeaways derived strictly from Sakhi #${sakhi.number}`
          : `साखी #${sakhi.number} पर आधारित दैनिक आचरण के ४ सटीक सूत्र`,
      bulletPoints,
    },
    step8_crossReferences: {
      title:
        language === 'pb'
          ? '੮. ਸਮਾਨੰਤਰ ਗ੍ਰੰਥ ਪ੍ਰਮਾਣ (Parallel Vanis)'
          : language === 'en'
          ? '8. Authentic Parallel Scripture Cross-References'
          : '८. प्रामाणिक ग्रंथ समानांतर वाणियाँ (Step 8)',
      subtitle:
        language === 'pb'
          ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਕਬੀਰ ਬੀਜਕ, ਗ੍ਰੰਥਾਵਲੀ ਤੇ ਕਬੀਰ ਸਾਗਰ ਤੋਂ ਸਮਾਨ-ਭਾਵੀ ਬਾਣੀ'
          : language === 'en'
          ? 'Parallel Vanis from Sri Guru Granth Sahib Ji, Kabir Bijak, Granthavali & Kabir Sagar'
          : 'श्री गुरु ग्रंथ साहिब जी, कबीर बीजक, कबीर ग्रंथावली व कबीर सागर से समभाव वाणी',
      references: crossRefs,
    },
    step9_contemplation: {
      title:
        language === 'pb'
          ? '੯. ਆਤਮ-ਚਿੰਤਨ ਪ੍ਰਸ਼ਨ (Contemplation)'
          : language === 'en'
          ? '9. Self-Reflection Questions'
          : '९. आत्म-निरीक्षण व चिंतन प्रश्न (Contemplation)',
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਮਰਮ 'ਤੇ ਆਧਾਰਿਤ ੩ ਸਵਾਲ`
          : language === 'en'
          ? `3 self-inquiry questions rooted in the moral of Sakhi #${sakhi.number}`
          : `साखी #${sakhi.number} के नैतिक मर्म पर आधारित ३ चिंतन प्रश्न`,
      questions: reflectionQuestions,
    },
    step10_audioIntegration: {
      title:
        language === 'pb'
          ? '੧੦. ਸੁਰਤ-ਸ਼ਬਦ ਧਿਆਨ ਯੋਗ (Meditation)'
          : language === 'en'
          ? '10. Guided Meditation & Surat-Shabad Yoga'
          : '१०. ध्यान एवं सूरत-शब्द योग (Guided Meditation)',
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} (${categoryTitle}) ਅਨੁਸਾਰ ੩-ਪੜਾਵੀ ਧਿਆਨ ਅਭਿਆਸ`
          : language === 'en'
          ? `3-stage contemplation visualization aligned with Sakhi #${sakhi.number}`
          : `साखी #${sakhi.number} के केंद्रीय भाव के अनुरूप ३-चरणीय ध्यान-साधना`,
      sadhanaMethodName:
        language === 'pb'
          ? `${categoryTitle} — ਸੁਰਤ-ਸ਼ਬਦ ਤੇ ਸਤਯਨਾਮ ਅਨੁਭੂਤੀ`
          : language === 'en'
          ? `${categoryTitle} — Surat-Shabd & Satyanaam Practice`
          : `'${categoryTitle}' — सुरति-शब्द एवं सत्यनाम ध्यान`,
      stages: [
        {
          stageNumber: 1,
          title:
            language === 'pb'
              ? 'ਪੜਾਅ ੧: ਸਾਖੀ ਪਾਠ ਤੇ ਸਥਿਰਤਾ'
              : language === 'en'
              ? 'Stage 1: Anchoring the Ang Essence'
              : 'प्रथम चरण: अंग-भाव स्मरण व स्थिर आसन',
          instruction:
            language === 'pb'
              ? `ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਸਰੀਰ ਨੂੰ ਢਿੱਲਾ ਛੱਡੋ ਅਤੇ '${categoryTitle}' ਦੇ ਮੁੱਖ ਭਾਵ — ${angProfile.angFocus} — ਵਿੱਚ ਸ਼ਾਂਤੀ ਨਾਲ ਟਿਕੋ।`
              : language === 'en'
              ? `Close your eyes gently, relax the body, and center awareness on '${categoryTitle}': ${angProfile.angFocus}.`
              : `नेत्र बंद कर सुखासन में स्थिर हों और '${categoryTitle}' के केंद्रीय लक्ष्य — ${angProfile.angFocus} — में एकाग्र हों।`,
        },
        {
          stageNumber: 2,
          title:
            language === 'pb'
              ? 'ਪੜਾਅ ੨: ਭਾਵ-ਧਿਆਨ ਤੇ ਸੁਆਸ ਸਿਮਰਨ'
              : language === 'en'
              ? 'Stage 2: Theme Contemplation with Breath'
              : 'द्वितीय चरण: प्रतीक-चिंतन व स्वांस सत्यनाम',
          instruction:
            language === 'pb'
              ? `${angProfile.meditationAnchor}। ਹਰ ਆਉਂਦੇ-ਜਾਂਦੇ ਸੁਆਸ ਨਾਲ "${words[0]?.meaning || angProfile.angFocus}" ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਉਤਾਰੋ।`
              : language === 'en'
              ? `${angProfile.meditationAnchor}. With each calm breath, imbibe "${practical || angProfile.practiceDirective}".`
              : `${angProfile.meditationAnchor}। प्रत्येक श्वास में सत्यनाम का अनुभव करते हुए "${practical || angProfile.practiceDirective}" को अंतःकरण में धारण करें।`,
        },
        {
          stageNumber: 3,
          title:
            language === 'pb'
              ? 'ਪੜਾਅ ੩: ਨਿਰਵਿਕਲਪ ਸ਼ਾਂਤੀ ਤੇ ਸਮਰਪਣ'
              : language === 'en'
              ? 'Stage 3: Silent Inner Realization'
              : 'तृतीय चरण: मौन अनुभूति व सतगुरु समर्पण',
          instruction:
            language === 'pb'
              ? `ਸਭ ਸੰਦੇਹਾਂ ਨੂੰ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰਕੇ '${categoryTitle}' ਦੀ ਨਿਰਮਲ ਸ਼ਾਂਤੀ ਵਿੱਚ ਟਿਕ ਜਾਓ।`
              : language === 'en'
              ? `Release all mental chatter at the feet of Satguru Kabir Saheb and abide in the luminous stillness of '${categoryTitle}'.`
              : `समस्त विकार व संशय सतगुरु कबीर साहेब के चरणों में अर्पित कर '${categoryTitle}' के पावन सत्यनाम प्रकाश में विश्राम करें।`,
        },
      ],
    },
    step11_blessingCertificate: {
      title:
        language === 'pb'
          ? '੧੧. ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਅਸੀਸ ਤੇ ਪ੍ਰਮਾਣ-ਪੱਤਰ'
          : language === 'en'
          ? '11. Satguru Kabir Saheb Blessing & Completion Certificate'
          : '११. सतगुरु कबीर साहेब का पावन आशीर्वाद एवं प्रमाण-पत्र',
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} (${categoryTitle}) ਸ੍ਵਾਧਿਆਇ ਸੰਪੂਰਨਤਾ`
          : language === 'en'
          ? `Completion of 11-Step Study for Sakhi #${sakhi.number} (${categoryTitle})`
          : `साखी #${sakhi.number} (${categoryTitle}) एकादश-सोपान स्वाध्याय संपूर्णता`,
      blessingVerse: sakhiVerse
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(
          (l) =>
            l &&
            !/^[🌹\s।॥|/]*(?:सत्यनाम|सतनाम|ਸਤਯਨਾਮ|ਸਤਨਾਮ|satyanaam|satnaam|satnam)[🌹\s।॥|/]*$/i.test(l) &&
            !/^[🙏\s।॥|/]*(?:साहेब\s*बंदगी(?:\s*साहेब)?|ਸਾਹੇਬ\s*ਬੰਦਗੀ(?:\s*ਸਾਹੇਬ)?|saheb\s*banda?gi(?:\s*saheb)?)[🙏\s।॥|/]*$/i.test(l)
        )
        .join('\n')
        .replace(/\s*\/\/+\s*/g, ' ॥ '),
      guruVachan: samarpanPrayer || oneLineBlessing,
      samarpanSankalp:
        practical
          ? language === 'pb'
            ? `ਸੰਕਲਪ: ${practical}`
            : language === 'en'
            ? `Sacred Commitment: ${practical}`
            : `पावन संकल्प: ${practical}`
          : language === 'pb'
          ? `ਸੰਕਲਪ (${categoryTitle}): ${angProfile.practiceDirective}`
          : language === 'en'
          ? `Sacred Commitment (${categoryTitle}): ${angProfile.practiceDirective}`
          : `पावन संकल्प ('${categoryTitle}'): ${angProfile.practiceDirective}`,
      oneLineBlessing,
      certificateActionLabel:
        language === 'pb'
          ? 'ਸ੍ਵਾਧਿਆਇ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਪ੍ਰਾਪਤ ਕਰੋ'
          : language === 'en'
          ? 'View & Download Certificate'
          : 'पावन स्वाध्याय प्रमाण-पत्र प्राप्त करें',
    },
    certificateData: {
      topHeader: SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi,
      certificationStatement:
        language === 'pb'
          ? `ਇਹ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਕਿ [User Name] ਨੇ ਸਾਖੀ #${sakhi.number} ਦਾ ੧੧-ਚਰਣੀ ਸ੍ਵਾਧਿਆਇ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।`
          : language === 'en'
          ? `This certifies that [User Name] has successfully completed the 11-Step Swadhyay of Sakhi #${sakhi.number}.`
          : `यह प्रमाणित किया जाता है कि [User Name] ने साखी #${sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।`,
      highlightMoolSakhi: sakhiVerse,
      oneLineBlessing,
      footerBrand:
        language === 'pb'
          ? 'Saheb World App • ਪਾਵਨ ਸ੍ਵਾਧਿਆਇ ਮੰਚ'
          : language === 'en'
          ? 'Saheb World App • Sacred Swadhyay Sanctuary'
          : 'Saheb World App • पावन स्वाध्याय मंच',
      bottomFooter: SACRED_BRANDING.footer[language] || SACRED_BRANDING.footer.hi,
    },
    isAiGenerated: false,
  };
}

const aiSwadhyayCache = new Map<string, SwadhyayAiResponsePayload>();

export async function fetchAiElevenStepSwadhyay(params: {
  sakhi: Sakhi;
  language: Language;
  seekerName?: string;
  isDailySakhi?: boolean;
  attempt?: number;
  forceRefresh?: boolean;
}): Promise<{ payload: SwadhyayAiResponsePayload; fromCache: boolean }> {
  const { sakhi, language, seekerName = 'श्रद्धालु साधक', isDailySakhi = false, attempt = 1, forceRefresh = false } =
    params;
  const cacheKey = `${sakhi.id || sakhi.number}::${language}::${isDailySakhi ? 'daily' : 'std'}`;

  if (!forceRefresh && aiSwadhyayCache.has(cacheKey)) {
    const cached = aiSwadhyayCache.get(cacheKey)!;
    // Always re-shuffle quiz on every attempt via backend or local shuffler
    const reshuffledQuiz = await shuffleQuizViaBackend(cached.step5_quiz);
    return {
      payload: {
        ...cached,
        step5_quiz: reshuffledQuiz,
      },
      fromCache: true,
    };
  }

  const verse = sakhi.text?.[language] || sakhi.text?.hi || '';
  const bhavarth = sakhi.bhavarth?.[language] || sakhi.bhavarth?.hi || '';
  const categoryTitle = sakhi.categoryTitle?.[language] || sakhi.categoryTitle?.hi || '';

  const response = await fetch('/api/swadhyay-eleven-steps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sakhiNumber: sakhi.number,
      grantha: sakhi.grantha,
      categoryTitle,
      verse,
      bhavarth,
      wordMeanings: sakhi.wordMeanings?.[language] || sakhi.wordMeanings?.hi || [],
      contemplation: sakhi.contemplation?.[language] || sakhi.contemplation?.hi || '',
      contextNote: sakhi.contextNote?.[language] || sakhi.contextNote?.hi || '',
      practicalApplication: sakhi.practicalApplication?.[language] || sakhi.practicalApplication?.hi || '',
      language,
      seekerName,
      isDailySakhi,
      attempt,
    }),
  });

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    throw new Error(errBody?.error || `HTTP ${response.status}`);
  }

  const json = await response.json();
  if (!json?.data) {
    throw new Error('Invalid response structure from AI Swadhyay endpoint.');
  }

  const normalizedServerQuestions = Array.isArray(json.data.step5_quiz)
    ? json.data.step5_quiz.slice(0, 3).map((q: any, idx: number) =>
        normalizeElevenStepQuizQuestion(q, language, idx)
      )
    : [];
  const payload = {
    ...(json.data as SwadhyayAiResponsePayload),
    step5_quiz: normalizedServerQuestions,
  };
  aiSwadhyayCache.set(cacheKey, payload);
  return { payload, fromCache: false };
}

export async function shuffleQuizViaBackend(
  questions: ElevenStepQuizQuestion[],
  language: Language = 'hi'
): Promise<ElevenStepQuizQuestion[]> {
  const normalizedInput = questions.map((q, idx) =>
    normalizeElevenStepQuizQuestion(q, language, idx)
  );
  try {
    const res = await fetch('/api/swadhyay-quiz-shuffle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questions: normalizedInput }),
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.questions) && json.questions.length > 0) {
        return json.questions.map((q: any, idx: number) =>
          normalizeElevenStepQuizQuestion(q, language, idx, normalizedInput[idx])
        );
      }
    }
  } catch {
    // Offline fallback still shuffles questions and A/B/C/D options randomly
  }
  return shuffleElevenStepQuiz(normalizedInput, language);
}

export function extractMultilingualWordsFromAi(
  entries: SwadhyayAiWordEntry[] | undefined
): Record<Language, WordMeaning[]> | null {
  if (!Array.isArray(entries) || entries.length === 0) return null;
  return {
    hi: entries.map((e) => ({ word: e.wordHi, meaning: e.meaningHi })),
    pb: entries.map((e) => ({ word: e.wordPb, meaning: e.meaningPb })),
    en: entries.map((e) => ({ word: e.wordEn, meaning: e.meaningEn })),
  };
}

export function mergeAiIntoElevenStepData(
  base: ElevenStepSwadhyayData,
  ai: SwadhyayAiResponsePayload,
  language: Language
): ElevenStepSwadhyayData {
  const validCrossRefs =
    Array.isArray(ai.step8_crossReferences) && ai.step8_crossReferences.length >= 2
      ? ai.step8_crossReferences.slice(0, 4)
      : base.step8_crossReferences.references;

  const validQuestions =
    Array.isArray(ai.step5_quiz) && ai.step5_quiz.length > 0
      ? ai.step5_quiz.slice(0, 3).map((q, idx) =>
          normalizeElevenStepQuizQuestion(
            q,
            language,
            idx,
            base.step5_quiz.questions[idx] || base.step5_quiz.questions[0]
          )
        )
      : base.step5_quiz.questions;

  const validBullets =
    Array.isArray(ai.step7_keyLearning) && ai.step7_keyLearning.length >= 4
      ? ai.step7_keyLearning.slice(0, 4).map((pt, i) => {
          const clean = pt.replace(/^\s*[\d१२३४੧੨੩੪]+[.)]?\s*/, '');
          const prefix = language === 'pb' ? ['੧.', '੨.', '੩.', '੪.'][i] : language === 'en' ? `${i + 1}.` : ['१.', '२.', '३.', '४.'][i];
          return `${prefix} ${clean}`;
        })
      : base.step7_keyLearning.bulletPoints;

  const validContemplation =
    Array.isArray(ai.step9_contemplation) && ai.step9_contemplation.length >= 3
      ? ai.step9_contemplation.slice(0, 3)
      : base.step9_contemplation.questions;

  const validStages =
    Array.isArray(ai.step10_audioIntegration?.stages) && ai.step10_audioIntegration.stages.length >= 3
      ? ai.step10_audioIntegration.stages.slice(0, 3).map((s, idx) => ({
          stageNumber: s.stageNumber || idx + 1,
          title: s.title,
          instruction: s.instruction,
        }))
      : base.step10_audioIntegration.stages;

  return {
    ...base,
    step5_quiz: {
      ...base.step5_quiz,
      subtitle:
        language === 'pb'
          ? `ਸਾਖੀ #${base.step5_quiz.subtitle.match(/#\d+/)?.[0]?.slice(1) || ''} ਦੇ ਸ਼ਬਦਾਂ ਤੇ ਮਰਮ 'ਤੇ ਆਧਾਰਿਤ ${validQuestions.length} ਪ੍ਰਸ਼ਨ`
          : language === 'en'
          ? `${validQuestions.length} randomized MCQs testing the exact words and teaching of Sakhi #${base.step5_quiz.subtitle.match(/#\d+/)?.[0]?.slice(1) || ''}`
          : `साखी #${base.step5_quiz.subtitle.match(/#\d+/)?.[0]?.slice(1) || ''} के शब्दों, प्रतीकों व संदेश पर आधारित ${validQuestions.length} विशेष प्रश्न`,
      questions: validQuestions,
    },
    step6_spiritualInsight: {
      ...base.step6_spiritualInsight,
      mysticalCoding: ai.step6_spiritualInsight?.mysticalCoding || base.step6_spiritualInsight.mysticalCoding,
    },
    step7_keyLearning: {
      ...base.step7_keyLearning,
      bulletPoints: validBullets,
    },
    step8_crossReferences: {
      ...base.step8_crossReferences,
      references: validCrossRefs,
    },
    step9_contemplation: {
      ...base.step9_contemplation,
      questions: validContemplation,
    },
    step10_audioIntegration: {
      ...base.step10_audioIntegration,
      sadhanaMethodName: ai.step10_audioIntegration?.sadhanaMethodName || base.step10_audioIntegration.sadhanaMethodName,
      stages: validStages,
    },
    step11_blessingCertificate: {
      ...base.step11_blessingCertificate,
      blessingVerse: ai.step11_blessingCertificate?.blessingVerse || base.step11_blessingCertificate.blessingVerse,
      guruVachan: ai.step11_blessingCertificate?.guruVachan || base.step11_blessingCertificate.guruVachan,
      samarpanSankalp: ai.step11_blessingCertificate?.samarpanSankalp || base.step11_blessingCertificate.samarpanSankalp,
      oneLineBlessing:
        ai.step11_blessingCertificate?.oneLineBlessing ||
        ai.certificateData?.oneLineBlessing ||
        base.step11_blessingCertificate.oneLineBlessing,
    },
    certificateData: ai.certificateData || base.certificateData,
    isAiGenerated: true,
  };
}
