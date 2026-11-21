/**
 * The Consolidated 5-Step Spiritual Discourse Engine Parser
 * Satguru Kabir Satyanaam Path-Pradarshak
 */

import { Sakhi, Language } from '../types';
import { sakhisDatabase } from '../data/sakhis';
import { formatCoupletString, ensureSatguruKabirSaheb } from '../utils/textSanitizer';
import { buildStep4SatsangContent } from './swadhyayContentEngine';

export interface Discourse5StepData {
  title: string;
  sakhiNumber?: number;
  categoryTitle: string;
  grantha: string;

  // Layer 1: विषय संदर्भ (Context)
  context: {
    title: string;
    relevanceText: string;
    spiritualSignificance: string;
    foundationNote: string;
  };

  // Layer 2: मूल वाणी (Original Text)
  originalText: {
    title: string;
    lines: string[];
    fullText: string;
    transliteration?: string;
  };

  // Layer 3: शब्दार्थ (Vocabulary)
  vocabulary: {
    title: string;
    words: { word: string; meaning: string }[];
  };

  // Layer 4: सत्यनाम केंद्रित दीप भावार्थ (Deep Bhavarth via Surat Shabad Yoga)
  deepBhavarth: {
    title: string;
    bhavarthSummary: string;
    suratShabadYogaGuidance: {
      suratFocus: string;
      anahatResonance: string;
      shabadVibration: string;
      mergingGuideline: string;
    };
  };

  // Layer 5: दैनिक चिंतन (Dainik Chintan)
  dainikChintan: {
    title: string;
    questions: [string, string];
    sadhanaPrompt: string;
  };
}

// Sant Bhasha Vocabulary Dictionary
const SANT_BHASHA_DICT: Record<string, { hi: string; pb: string; en: string }> = {
  'कबीर': { hi: 'सतगुरु कबीर साहेब जी (परम चेतना)', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ', en: 'Satguru Kabir Saheb (Supreme Consciousness)' },
  'साहिब': { hi: 'परमेश्वर, सर्वोपरि स्वामी', pb: 'ਪਰਮੇਸ਼ਵਰ, ਮਾਲਕ', en: 'The Supreme Master' },
  'सत्यनाम': { hi: 'सतगुरु का अमर एवं अनादि निज नाम', pb: 'ਸਤਿਗੁਰੂ ਦਾ ਅਮਰ ਨਿਜ ਨਾਮ', en: 'The Eternal Uncreated True Name' },
  'सतनाम': { hi: 'अविनाशी निज नाम शबद', pb: 'ਅਵਿਨਾਸ਼ੀ ਨਾਮ', en: 'The Imperishable True Vibration' },
  'सबद': { hi: 'अनाहत शबद ब्रह्म, गुरु उपदेश', pb: 'ਅਨਾਹਤ ਸ਼ਬਦ, ਗੁਰੂ ਉਪਦੇਸ਼', en: 'Unstruck Divine Sound Vibration' },
  'शब्द': { hi: 'अंतरिक्ष में गूंजता परम शबद', pb: 'ਅੰਦਰੂਨੀ ਸ਼ਬਦ ਧੁਨ', en: 'Inner Sacred Sound' },
  'सुरति': { hi: 'आत्मा की ध्यान-वृत्ति, सजग चेतना', pb: 'ਆਤਮਾ ਦੀ ਧਿਆਨ-ਵ੍ਰਿਤੀ', en: 'Soul’s Focused Attention / Awareness' },
  'निरति': { hi: 'सूक्ष्म दृष्टि, वैराग्य पूर्ण विवेक', pb: 'ਸੂਖਮ ਦ੍ਰਿਸ਼ਟੀ', en: 'Pure Discernment & Divine Vision' },
  'अनहद': { hi: 'बिना चोट के गूंजने वाला अनाहत नाद', pb: 'ਬਿਨਾਂ ਚੋਟ ਗੂੰਜਣ ਵਾਲੀ ਧੁਨ', en: 'Unstruck Eternal Vibration' },
  'हंसा': { hi: 'पवित्र जीवात्मा, विवेकशील साधक', pb: 'ਪਵਿੱਤਰ ਜੀਵਾਤਮਾ', en: 'Pure Enlightened Soul' },
  'हंस': { hi: 'मुक्त चेतना', pb: 'ਮੁਕਤ ਆਤਮਾ', en: 'Liberated Consciousness' },
  'गगन': { hi: 'दशम द्वार, ब्रह्मरंध्र आकाश', pb: 'ਦਸ਼ਮ ਦੁਆਰ, ਆਕਾਸ਼', en: 'Tenth Door / Higher Spiritual Realm' },
  'पवन': { hi: 'श्वास-प्रश्वास की धारा, प्राण शक्ति', pb: 'ਸੁਆਸਾਂ ਦੀ ਧਾਰਾ', en: 'Breath / Prana Energy' },
  'घट': { hi: 'मानव शरीर, अंतःकरण', pb: 'ਮਾਨਵ ਸਰੀਰ, ਅੰਦਰੂਨ', en: 'The Inner Vessel / Body Temple' },
  'कवल': { hi: 'हृदय कमल, अंतः चक्र', pb: 'ਹਿਰਦਾ ਕਮਲ', en: 'The Lotus Center of Consciousness' },
  'कमल': { hi: 'चेतना का पावन केंद्र', pb: 'ਚੇਤਨਾ ਦਾ ਕੇਂਦਰ', en: 'Lotus Center' },
  'गुरु': { hi: 'अज्ञान तिमिर का नाश करने वाले सतगुरु', pb: 'ਸਤਿਗੁਰੂ, ਗਿਆਨ ਦਾ ਦਾਤਾ', en: 'Satguru, Dispeller of Darkness' },
  'ज्ञान': { hi: 'आत्म-बोध, सत्य का प्रकाश', pb: 'ਆਤਮ-ਗਿਆਨ', en: 'Self-Realization & Truth' },
  'काल': { hi: 'समय, मृत्यु एवं भ्रम का जाल', pb: 'ਸਮਾਂ ਤੇ ਮੌਤ ਦਾ ਜਾਲ', en: 'Time, Illusion & Mortality' },
  'माया': { hi: 'त्रिगुणात्मक संसार का आकर्षण', pb: 'ਸੰਸਾਰੀ ਭਰਮ', en: 'Cosmic Illusion' },
  'बिसार्या': { hi: 'भूल गया, विस्मृत किया', pb: 'ਭੁੱਲ ਗਿਆ', en: 'Forgotten' },
  'अमर': { hi: 'मृत्यु से परे अविनाशी पद', pb: 'ਮੌਤ ਤੋਂ ਪਰੇ', en: 'Immortal Eternal Realm' },
  'सतलोक': { hi: 'सतगुरु साहेब का पावन निज धाम', pb: 'ਸਤਿਗੁਰੂ ਦਾ ਨਿਜ ਧਾਮ', en: 'The Imperishable Supreme Abode' },
  'पारस': { hi: 'लोहे को स्वर्ण बनाने वाला सतगुरु रूपी मणिरत्न', pb: 'ਪਾਰਸ ਮਣੀ', en: 'Philosopher’s Stone (Satguru Grace)' },
  'सोहं': { hi: 'वह परमात्मा ही मैं हूँ का बोध', pb: 'ਸੋਹੰ ਭਾਵ', en: 'I Am That Supreme Reality' },
  'अलख': { hi: 'जो चर्म चक्षुओं से न दिखे, अगम्य', pb: 'ਅਲਖ, ਅਦ੍ਰਿਸ਼ਟ', en: 'Unseen Supreme Light' },
  'निरंजन': { hi: 'संसार का मायावी रूप', pb: 'ਮਾਇਆ ਦਾ ਰੂਪ', en: 'Cosmic Illusion Engine' },
  'सुमिरन': { hi: 'सत्यनाम का निरंतर पावन स्मरण', pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ', en: 'Unceasing Remembrance of Satyanaam' },
  'भक्ति': { hi: 'सतगुरु के प्रति निष्काम प्रेमाभक्ति', pb: 'ਪ੍ਰੇਮਾ ਭਗਤੀ', en: 'Pure Unconditional Devotion' },
  'संग': { hi: 'सत्संग, साधु पुरुषों का साथ', pb: 'ਸਤਿਸੰਗਤਿ', en: 'Sacred Company of Truth' },
};

/**
 * Extracts key Sant Bhasha vocabulary terms from any text string
 */
export function extractSantVocabulary(
  text: string,
  lang: Language = 'hi'
): { word: string; meaning: string }[] {
  const words = text.split(/[\s,।॥!?,;:.'"\-–—()\[\]{}/\\]+/);
  const found: { word: string; meaning: string }[] = [];
  const seen = new Set<string>();

  for (const rawWord of words) {
    const cleanWord = rawWord.trim();
    if (!cleanWord || cleanWord.length < 2) continue;

    for (const [key, value] of Object.entries(SANT_BHASHA_DICT)) {
      if (cleanWord.includes(key) && !seen.has(key)) {
        seen.add(key);
        found.push({
          word: key,
          meaning: value[lang] || value.hi,
        });
      }
    }
  }

  // Fallback defaults if fewer than 2 vocabulary terms found
  if (found.length < 2) {
    if (!seen.has('सत्यनाम')) {
      found.push({
        word: 'सत्यनाम',
        meaning: SANT_BHASHA_DICT['सत्यनाम'][lang] || SANT_BHASHA_DICT['सत्यनाम'].hi,
      });
    }
    if (!seen.has('सुरति')) {
      found.push({
        word: 'सुरति',
        meaning: SANT_BHASHA_DICT['सुरति'][lang] || SANT_BHASHA_DICT['सुरति'].hi,
      });
    }
    if (!seen.has('सबद')) {
      found.push({
        word: 'सबद',
        meaning: SANT_BHASHA_DICT['सबद'][lang] || SANT_BHASHA_DICT['सबद'].hi,
      });
    }
  }

  return found.slice(0, 6);
}

/**
 * Main Discourse Engine Parser: Dynamic 5-Layer Builder
 */
export function parseSakhiInto5StepDiscourse(
  input: string | Sakhi,
  lang: Language = 'hi'
): Discourse5StepData {
  let sakhiObj: Sakhi | null = null;
  let rawText = '';
  let sakhiNum: number | undefined;
  let granthName = 'साखी संग्रह';
  let categoryName = 'सतगुरु महिमा एवं सत्यनाम';

  if (typeof input === 'object' && input !== null && 'text' in input) {
    sakhiObj = input as Sakhi;
    rawText = sakhiObj.text[lang] || sakhiObj.text.hi;
    sakhiNum = sakhiObj.number;
    granthName = sakhiObj.grantha || 'साखी संग्रह';
    categoryName =
      typeof sakhiObj.categoryTitle === 'object'
        ? sakhiObj.categoryTitle[lang] || sakhiObj.categoryTitle.hi
        : sakhiObj.category || 'सत्यनाम उपदेश';
  } else if (typeof input === 'string') {
    rawText = input.trim();
    // Try matching in existing sakhis database
    const matched = sakhisDatabase.find((s) =>
      s.text.hi.includes(rawText.slice(0, 15)) || rawText.includes(s.text.hi.slice(0, 15))
    );
    if (matched) {
      sakhiObj = matched;
      sakhiNum = matched.number;
      granthName = matched.grantha || 'साखी संग्रह';
      categoryName =
        typeof matched.categoryTitle === 'object'
          ? matched.categoryTitle[lang] || matched.categoryTitle.hi
          : matched.category || 'सत्यनाम उपदेश';
    }
  }

  // Split lines into strict 2 lines
  const formattedLines = formatCoupletString(rawText).split('\n');

  const extractedVocab = extractSantVocabulary(rawText, lang);

  // Labels based on language
  const titles = {
    hi: {
      engineTitle: 'सतगुरु कबीर सत्यनाम पथ-प्रदर्शक',
      step1: '१. विषय संदर्भ (Context)',
      step2: '२. मूल वाणी (Original Text)',
      step3: '३. शब्दार्थ (Vocabulary)',
      step4: '४. सत्यनाम केंद्रित दीप भावार्थ (Deep Bhavarth via Surat Shabad)',
      step5: '५. दैनिक चिंतन (Dainik Chintan)',
    },
    pb: {
      engineTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਤਯਨਾਮ ਪਥ-ਪ੍ਰਦਰਸ਼ਕ',
      step1: '੧. ਵਿਸ਼ਾ ਸੰਦਰਭ (Context)',
      step2: '੨. ਮੂਲ ਬਾਣੀ (Original Text)',
      step3: '੩. ਸ਼ਬਦਾਰਥ (Vocabulary)',
      step4: '੪. ਸਤਯਨਾਮ ਕੇਂਦਰਿਤ ਦੀਪ ਭਾਵਾਰਥ (Surat Shabad Yoga)',
      step5: '੫. ਰੋਜ਼ਾਨਾ ਚਿੰਤਨ (Dainik Chintan)',
    },
    en: {
      engineTitle: 'Satguru Kabir Satyanaam Path-Pradarshak',
      step1: '1. Context & Foundation (विषय संदर्भ)',
      step2: '2. Original Sacred Verse (मूल वाणी)',
      step3: '3. Vocabulary & Sant Terms (शब्दार्थ)',
      step4: '4. Deep Bhavarth (सत्यनाम केंद्रित दीप भावार्थ)',
      step5: '5. Daily Self-Inquiry (दैनिक चिंतन)',
    },
  }[lang] || {
    engineTitle: 'सतगुरु कबीर सत्यनाम पथ-प्रदर्शक',
    step1: '१. विषय संदर्भ (Context)',
    step2: '२. मूल वाणी (Original Text)',
    step3: '३. शब्दार्थ (Vocabulary)',
    step4: '४. सत्यनाम केंद्रित दीप भावार्थ',
    step5: '५. दैनिक चिंतन (Dainik Chintan)',
  };

  // Derive Context
  const contextData = {
    title: titles.step1,
    relevanceText:
      lang === 'pb'
        ? `ਇਹ ਪਾਵਨ ਸਾਖੀ '${categoryName}' ਅਧੀਨ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦੀ ਅਮ੍ਰਿਤ ਬਾਣੀ ਦਾ ਅੰਗ ਹੈ। ਇਹ ਜੀਵ ਨੂੰ ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਅਨਾਹਤ ਸਤਯਨਾਮ ਧੁਨ ਨਾਲ ਜੋੜਦੀ ਹੈ।`
        : lang === 'en'
        ? `This sacred verse under '${categoryName}' serves as an eternal divine beacon on the path of Satyanaam, elevating the soul above material illusions into pure uncreated sound.`
        : `यह पावन दोहा '${categoryName}' के अंतर्गत सतगुरु कबीर साहेब की अमृतवाणी का सार है। यह साधक को संसार के भ्रम से निकालकर अनहद सत्यनाम की शाश्वत ध्वनि से जोड़ने का पावन आधार प्रस्तुत करता है।`,
    spiritualSignificance:
      lang === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਆਤਮ-ਗਿਆਨ ਦੀ ਜੋਤ ਜਗਾ ਕੇ ਸੁਰਤ ਨੂੰ ਦਸ਼ਮ ਦੁਆਰ ਵਿੱਚ ਸਥਿਰ ਕਰਦੀ ਹੈ।'
        : lang === 'en'
        ? 'The Satguru’s word awakens inner spiritual illumination, anchoring the soul’s awareness in the Tenth Door.'
        : 'सतगुरु साहेब की वाणी अंतःकरण की मलीनता को धोकर सुरति को दसम द्वार की अनाहत शबद ध्वनि में लीन करती है।',
    foundationNote: sakhiNum ? `साखी संख्या: ${sakhiNum} • ${granthName}` : `पावन वाणी • ${granthName}`,
  };

  // Derive Deep Bhavarth (Why Taught + Practical Life Example + Mind Insight via Content Engine)
  const targetSakhiForDepth =
    sakhiObj ||
    ({
      number: sakhiNum || 0,
      text: { hi: rawText, pb: rawText, en: rawText },
      bhavarth: { hi: '', pb: '', en: '' },
      categoryTitle: { hi: categoryName, pb: categoryName, en: categoryName },
      category: categoryName,
      wordMeanings: { hi: [], pb: [], en: [] },
    } as unknown as Sakhi);
  const satsangDepth = buildStep4SatsangContent(targetSakhiForDepth, lang);

  const deepBhavarthData = {
    title: titles.step4,
    bhavarthSummary: ensureSatguruKabirSaheb(
      `${satsangDepth.whyTaught}\n\n${satsangDepth.satsangWithDrishtant}`
    ),
    suratShabadYogaGuidance: {
      suratFocus:
        lang === 'pb'
          ? '🧘 ਸੁਰਤ ਧਿਆਨ: ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਸੁਆਸਾਂ ਦੀ ਗਤੀ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਅਜਪਾ ਜਾਪ ਕਰੋ।'
          : lang === 'en'
          ? '🧘 Surat Attention: Gently draw awareness inward to the Tenth Door and observe the incoming/outgoing breath with Satyanaam.'
          : '🧘 सुरति ध्यान निर्देश: नेत्र मूँदकर दसम द्वार के निकट सुरति को केंद्रित करें और प्रत्येक श्वास के साथ सत्यनाम का अजपा जाप करें।',
      anahatResonance:
        lang === 'pb'
          ? '🔔 ਅਨਾਹਤ ਧੁਨ: ਬਾਹਰੀ ਸ਼ੋਰ ਨੂੰ ਭੁਲਾ ਕੇ ਅੰਦਰ ਗੂੰਜ ਰਹੀ ਸੂਖਮ ਅਨਾਹਤ ਧੁਨ ਸੁਣੋ।'
          : lang === 'en'
          ? '🔔 Uncreated Resonance: Silence outer mental noise and listen to the subtle uncreated Anahat chime echoing within.'
          : '🔔 अनहद शबद स्पंदन: मन के संकल्प-विकल्पों को शांत कर घट के भीतर निरंतर गूंज रही अनहद नाद ध्वनि का श्रवण करें।',
      shabadVibration:
        lang === 'pb'
          ? '🕊️ ਨਿਰਗੁਣ ਸ਼ਬਦ: ਚੇਤਨਾ ਨੂੰ ਸਤਿਗੁਰੂ ਦੇ ਅਮਰ ਸ਼ਬਦ ਵਿੱਚ ਅਭੇਦ ਕਰੋ।'
          : lang === 'en'
          ? '🕊️ Uncreated Vibration: Allow your individual consciousness to dissolve into the imperishable Shabad.'
          : '🕊️ अकर्ता भाव स्थिति: अहंकार का विसर्जन कर स्वयं को केवल दृष्टा भाव में स्थित रखें और चेतना को अमर शबद में लीन करें।',
      mergingGuideline:
        lang === 'pb'
          ? 'ੴ ਅਭੇਦ ਅਵਸਥਾ: ਸੁਰਤ ਤੇ ਸ਼ਬਦ ਦਾ ਮੇਲ ਹੀ ਸੱਚਾ ਆਤਮ-ਸਾਖਿਆਤਕਾਰ ਹੈ।'
          : lang === 'en'
          ? 'ੴ Unitive Consciousness: The dissolution of Surat into Shabad is the supreme goal of Kabir Vani.'
          : 'ੴ सुरति-शब्द समाधि: जब सुरति शबद में पूर्णतः समा जाती है, तब काल-माया का आवरण हटकर सतलोक निज धाम की प्राप्ति होती है।',
    },
  };

  // Derive Dainik Chintan
  const dainikChintanData = {
    title: titles.step5,
    questions: [
      lang === 'pb'
        ? '੧. ਕੀ ਅੱਜ ਮੈਂ ਦਿਨ ਭਰ ਦੇ ਕੰਮਾਂ ਦੇ ਨਾਲ-ਨਾਲ ਸੁਰਤ ਨੂੰ ਸਤਯਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਜੋੜੀ ਰੱਖਿਆ?'
        : lang === 'en'
        ? '1. Did I keep my inner Surat anchored in Satyanaam remembrance during today’s activities?'
        : '१. क्या आज मैंने दिनभर के कार्यों के बीच अपनी सुरति को सत्यनाम के अजपा सुमिरन में जोड़े रखा?',
      lang === 'pb'
        ? '੨. ਇਸ ਸਾਖੀ ਤੋਂ ਮਿਲੇ ਉਪਦੇਸ਼ ਨੂੰ ਮੈਂ ਆਪਣੇ ਅਹੰਕਾਰ ਅਤੇ ਵਾਸਨਾਵਾਂ ਨੂੰ ਮਿਟਾਉਣ ਲਈ ਕਿਵੇਂ ਲਾਗੂ ਕਰਾਂਗਾ?'
        : lang === 'en'
        ? '2. How can I practically apply this Satguru teaching to dissolve ego and cultivate inner silence today?'
        : '२. इस साखी के आध्यात्मिक संदेश को अपने अंतःकरण से अहंकार व वासनाओं के विसर्जन हेतु मैं किस प्रकार व्यावहारिक साधना में उतारूँगा?',
    ] as [string, string],
    sadhanaPrompt:
      lang === 'pb'
        ? 'ਅੱਜ ਦਾ ਸਾਧਨਾ ਸੰਕਲਪ ਲਿਖੋ...'
        : lang === 'en'
        ? 'Record your daily Sadhana reflection & pledge here...'
        : 'आज की साधना पर अपने अंतर्मन का विचार व संकल्प लिखें...',
  };

  return {
    title: titles.engineTitle,
    sakhiNumber: sakhiNum,
    categoryTitle: categoryName,
    grantha: granthName,
    context: contextData,
    originalText: {
      title: titles.step2,
      lines: formattedLines,
      fullText: rawText,
      transliteration: sakhiObj?.transliteration,
    },
    vocabulary: {
      title: titles.step3,
      words: extractedVocab,
    },
    deepBhavarth: deepBhavarthData,
    dainikChintan: dainikChintanData,
  };
}
