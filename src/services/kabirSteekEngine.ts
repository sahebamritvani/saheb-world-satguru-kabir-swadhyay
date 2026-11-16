/**
 * Kabir Steek, Context & Tap-to-Mean Engine
 * 
 * Provides:
 * 1. Steek / Teeka (सटीक व विचार): Deep contextual interpretation, satire analysis, esoteric secrets, and sadhana keys.
 * 2. Sandhukkari Tap-to-Mean tokenizer for highlighting & tapping ancient Sant Bhasha / Khichdi words.
 * 3. Accurate English Translations alongside Gurmukhi and Devanagari text.
 */

import { Language, NitnemVersePair } from '../types';
import { SANDHUKKARI_GLOSSARY, SandhukkariTerm } from './sandhukkariGlossary';

export interface VerseSteekCommentary {
  contextAndSatire: {
    hi: string;
    pb: string;
    en: string;
  };
  esotericSecret: {
    hi: string;
    pb: string;
    en: string;
  };
  sadhanaApplication: {
    hi: string;
    pb: string;
    en: string;
  };
  englishTranslation: string;
  keySadhukariTerms: SandhukkariTerm[];
}

// Specialized Steek repository for sacred Nitnem Gutka & Kabir Bani
export const NITNEM_STEEK_DATA: Record<string, Partial<VerseSteekCommentary>> = {
  // Morning Mangalacharan & Vandana
  'prabhat-mangalacharan': {
    contextAndSatire: {
      hi: 'कबीर साहेब का यह मंगलाचरण बाह्य आडंबरों और पाखंडों पर गहरा कटाक्ष है। साहेब स्पष्ट करते हैं कि ईश्वर किसी तीर्थ, पत्थर या मूर्ति में नहीं, बल्कि जीवात्मा के भीतर ही सत्यनाम के रूप में विद्यमान है।',
      pb: "ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦਾ ਇਹ ਮੰਗਲਾਚਰਨ ਬਾਹਰੀ ਕਰਮ-ਕਾਂਡਾਂ 'ਤੇ ਚੋਟ ਕਰਦਾ ਹੈ। ਪ੍ਰਭੂ ਬਾਹਰੀ ਤੀਰਥਾਂ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਜੀਵ ਦੇ ਅੰਦਰ ਹੀ ਵਸਦਾ ਹੈ।",
      en: 'Kabir Saheb opens with a piercing critique of external rituals and empty dogmas. True Divinity dwells not in outward pilgrimages or idols, but within the soul as the True Name.'
    },
    esotericSecret: {
      hi: 'मंगलाचरण का वास्तविक अर्थ है अंतरात्मा में सत्यपुरुष के "अनहद शब्द" का जागरण। जब साधक का मन संसार से हटकर सतगुरु के चरणों में लीन होता है, तभी वास्तविक मंगल की प्राप्ति होती है।',
      pb: 'ਅੰਦਰੂਨੀ ਅਨਹਦ ਸ਼ਬਦ ਨਾਲ ਜੁੜਨਾ ਹੀ ਅਸਲ ਮੰਗਲਾਚਰਨ ਹੈ।',
      en: 'The true Mangalacharan is the awakening of the Unstruck Sound (Anhad Shabad) in the inner sky of consciousness.'
    },
    sadhanaApplication: {
      hi: 'प्रातःकाल उठकर सांसारिक चिंताओं से मुक्त होकर ५ मिनट "सत्यनाम" का मौन सिमरन करें और सतगुरु को अपना सर्वस्व समर्पित करें।',
      pb: 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਉੱਠ ਕੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ ਅਤੇ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਧਾਰਨ ਕਰੋ।',
      en: 'Begin the dawn by relinquishing worldly anxieties and meditating upon Satyanaam in quiet devotion.'
    }
  },
  'prabhat-aarambh-vandana': {
    contextAndSatire: {
      hi: 'यहाँ साहेब मिथ्या गुरुओं (जो केवल वेशभूषा और धन के लोभी हैं) की पोल खोलते हुए सच्चे पूर्ण सतगुरु की महिमा बताते हैं, जो भवसागर से पार उतारने का सामर्थ्य रखते हैं।',
      pb: 'ਇੱਥੇ ਸਾਹਿਬ ਝੂਠੇ ਭੇਖੀ ਗੁਰੂਆਂ ਦਾ ਖੰਡਨ ਕਰਦੇ ਹੋਏ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ।',
      en: 'Kabir Saheb dismantles pretender gurus who trade in outer garb and wealth, revealing the glory of the True Enlightened Master who liberates the soul.'
    },
    esotericSecret: {
      hi: 'सतगुरु कोई हाड़-मांस का शरीर नहीं, बल्कि वह साक्षात "शब्द स्वरूप" हैं। उनका ध्यान करने से जीवात्मा काल-जाल और चौरासी के चक्रव्यूह से मुक्त हो जाती है।',
      pb: 'ਸਤਿਗੁਰੂ ਦੇਹ ਨਹੀਂ ਸਗੋਂ ਅਮਰ ਸ਼ਬਦ ਸਵਰੂਪ ਹਨ।',
      en: 'The Satguru is not merely physical form, but the Embodiment of the Divine Word (Shabad Swaroop).'
    },
    sadhanaApplication: {
      hi: 'वंदना करते समय अहंकार और "मैं"-भाव का पूर्ण त्याग कर सतगुरु की चरण-शरण में स्वयं को सौंपें।',
      pb: 'ਵੰਦਨਾ ਸਮੇਂ ਹਉਮੈ ਦਾ ਤਿਆਗ ਕਰ ਕੇ ਗੁਰੂ ਸ਼ਰਨ ਵਿੱਚ ਆਓ।',
      en: 'Recite with complete surrender of ego, seeking the protective grace of the Master.'
    }
  },
  'sandhya-aarti': {
    contextAndSatire: {
      hi: 'थाल में दीपक सजाकर की जाने वाली भौतिक आरती पर कबीर साहेब का व्यंग्य: सारा ब्रह्मांड जब निरंतर परमात्मा की आरती उतार रहा है, तो मनुष्य पीतल के दीपक से किसे प्रकाशित करेगा?',
      pb: 'ਬਾਹਰੀ ਦੀਵਿਆਂ ਵਾਲੀ ਆਰਤੀ ਦਾ ਖੰਡਨ: ਸਮੁੱਚੀ ਕਾਇਨਾਤ ਜਿਸ ਪ੍ਰਭੂ ਦੀ ਆਰਤੀ ਕਰ ਰਹੀ ਹੈ, ਉਸਨੂੰ ਦੀਵੇ ਦੀ ਕੀ ਲੋੜ?',
      en: 'Satirical insight on outer plate-and-lamp rituals: When the entire cosmos performs eternal Aarti with celestial suns, what can a mortal lamp illumine?'
    },
    esotericSecret: {
      hi: 'सहज आरती अंतराकाश (गगन मंडल) में हो रही है—जहाँ सुरति रूपी बाती और प्रेम रूपी घृत से सत्यनाम की अखंड ज्योति प्रज्वलित होती है।',
      pb: 'ਅੰਦਰੂਨੀ ਗਗਨ ਮੰਡਲ ਵਿੱਚ ਪ੍ਰੇਮ ਦੀ ਜੋਤ ਜਗਾਉਣਾ ਹੀ ਅਸਲ ਆਰਤੀ ਹੈ।',
      en: 'True Aarti takes place in the inner sanctum where pure devotion ignites the unquenchable flame of Satyanaam.'
    },
    sadhanaApplication: {
      hi: 'संध्या समय नेत्र बंद कर दोनों भृकुटियों के मध्य ध्यान टिकाएँ और भीतर गूंज रहे अनहद नाद का श्रवण करें।',
      pb: 'ਸ਼ਾਮ ਸਮੇਂ ਅੰਦਰੂਨੀ ਧਿਆਨ ਲਗਾਓ ਅਤੇ ਅਨਹਦ ਸ਼ਬਦ ਦਾ ਆਨੰਦ ਲਵੋ।',
      en: 'At twilight, close outer eyes, center awareness between the eyebrows, and listen to the inner unstruck symphony.'
    }
  }
};

/**
 * Derives or retrieves complete Steek Commentary for any Nitnem verse / Sakhi.
 */
export function getVerseSteekCommentary(
  verse: NitnemVersePair,
  sectionId: string,
  sectionTitle: string,
  lang: Language
): VerseSteekCommentary {
  const customSteek = NITNEM_STEEK_DATA[sectionId] || {};
  const verseTextHindi = verse.lines.hi.join(' ');
  const verseTextPunjabi = verse.lines.pb ? verse.lines.pb.join(' ') : verseTextHindi;
  const verseTextEnglish = verse.lines.en ? verse.lines.en.join(' ') : verseTextHindi;

  // Extract relevant Sandhukkari glossary terms present in this verse
  const matchedTerms: SandhukkariTerm[] = [];
  const termKeys = Object.keys(SANDHUKKARI_GLOSSARY);
  for (const key of termKeys) {
    const term = SANDHUKKARI_GLOSSARY[key];
    if (
      verseTextHindi.includes(key) ||
      verseTextPunjabi.includes(term.punjabi) ||
      (verseTextEnglish && verseTextEnglish.toLowerCase().includes(term.transliteration.toLowerCase()))
    ) {
      if (!matchedTerms.some(t => t.word === term.word)) {
        matchedTerms.push(term);
      }
    }
  }

  // Fallback / dynamic esoteric commentary based on verse themes & Kabir philosophy
  const defaultContextAndSatire = {
    hi: customSteek.contextAndSatire?.hi || 
      `कबीर साहेब की यह वाणी साधक को संसार के नश्वर प्रपंच, माया के मोह और झूठे पाखंडों से सावधान करती है। साहेब दो टूक सत्य कहते हैं कि बिना आत्म-पहचान और सतगुरु के ज्ञान के मनुष्य जीवन व्यर्थ बीत जाता है।`,
    pb: customSteek.contextAndSatire?.pb ||
      `ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਦਾ ਇਹ ਬਚਨ ਸੰਸਾਰ ਦੀ ਮਾਇਆ ਅਤੇ ਝੂਠੇ ਮੋਹ ਤੋਂ ਜਾਗਰੂਕ ਕਰਦਾ ਹੈ। ਆਤਮ-ਗਿਆਨ ਤੋਂ ਬਿਨਾਂ ਮਨੁੱਖਾ ਜੀਵਨ ਅਧੂਰਾ ਹੈ।`,
    en: customSteek.contextAndSatire?.en ||
      `Kabir Saheb cuts through worldly illusions, religious hypocrisy, and the attachment to the transient body, awakening the soul to its eternal truth.`
  };

  const defaultEsotericSecret = {
    hi: customSteek.esotericSecret?.hi ||
      `गूढ़ रहस्य: यह पद जीवात्मा (हंस) को काल निरंजन के बंधन से मुक्त होकर अमरलोक की ओर आरोहण करने का गुप्त संकेत देता है। श्वास-श्वास में नाम का सुमिरन ही इस भवसागर का बेड़ा पार लगाता है।`,
    pb: customSteek.esotericSecret?.pb ||
      `ਗੂੜ੍ਹ ਭੇਦ: ਇਹ ਪਾਵਨ ਪਦ ਜੀਵ-ਆਤਮਾ ਨੂੰ ਮਾਇਆ ਤੋਂ ਛੁਟਕਾਰਾ ਪਾ ਕੇ ਪਰਮ ਧਾਮ ਵੱਲ ਵਧਣ ਦਾ ਮਾਰਗ ਦਰਸਾਉਂਦਾ ਹੈ।`,
    en: customSteek.esotericSecret?.en ||
      `Esoteric Secret: This verse unlocks the inner science of soul liberation (Hansa Pad) from the web of Kaal-Maya through unbroken remembrance of the True Name.`
  };

  const defaultSadhanaApplication = {
    hi: customSteek.sadhanaApplication?.hi ||
      `साधना सूत्र: वाणी को केवल कंठ से न दोहराएँ, बल्कि इसके भाव को अंतःकरण में उतारें। दिनभर कर्म करते हुए भीतर 'सत्यनाम' की अखंड सुरति बनाए रखें।`,
    pb: customSteek.sadhanaApplication?.pb ||
      `ਸਾਧਨਾ ਕੁੰਜੀ: ਬਾਣੀ ਨੂੰ ਸਿਰਫ ਪੜ੍ਹੋ ਨਾ, ਸਗੋਂ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਓ ਅਤੇ ਹਰ ਸਾਹ ਨਾਲ ਸਿਮਰਨ ਕਰੋ।`,
    en: customSteek.sadhanaApplication?.en ||
      `Practical Sadhana: Do not merely chant the words; imbibe their essence into your consciousness and maintain remembrance (Surati) throughout daily tasks.`
  };

  // English translation derivation
  const englishTranslation = verse.bhavarth?.en || 
    (verse.lines.en ? verse.lines.en.join(' ') : 'Sacred divine verse of Satguru Kabir Saheb revealing the path of Truth and inner liberation.');

  return {
    contextAndSatire: defaultContextAndSatire,
    esotericSecret: defaultEsotericSecret,
    sadhanaApplication: defaultSadhanaApplication,
    englishTranslation,
    keySadhukariTerms: matchedTerms
  };
}

/**
 * Tokenize a line of text for Sadhukari Tap-to-Mean interactive highlights.
 */
export interface TextToken {
  text: string;
  isSandhukkari: boolean;
  term?: SandhukkariTerm;
}

export function tokenizeVerseLine(line: string, lang: Language): TextToken[] {
  if (!line) return [];

  // Build list of all Sadhukari words
  const termsList = Object.values(SANDHUKKARI_GLOSSARY);
  
  // Sort terms by length descending to match compound words first
  termsList.sort((a, b) => b.word.length - a.word.length);

  const tokens: TextToken[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    let matched = false;

    for (const term of termsList) {
      const matchWord = lang === 'pb' ? term.punjabi : term.word;
      const translitMatch = term.transliteration;

      if (
        remaining.startsWith(matchWord) ||
        (lang === 'en' && remaining.toLowerCase().startsWith(translitMatch.toLowerCase()))
      ) {
        const matchedLength = (lang === 'en' && remaining.toLowerCase().startsWith(translitMatch.toLowerCase()))
          ? translitMatch.length
          : matchWord.length;

        const matchedSub = remaining.substring(0, matchedLength);
        tokens.push({
          text: matchedSub,
          isSandhukkari: true,
          term
        });
        remaining = remaining.substring(matchedLength);
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Find index of next potential whitespace or punctuation to group normal words
      const nextChar = remaining[0];
      // Append to previous non-sandhukkari token if available
      const lastToken = tokens[tokens.length - 1];
      if (lastToken && !lastToken.isSandhukkari) {
        lastToken.text += nextChar;
      } else {
        tokens.push({
          text: nextChar,
          isSandhukkari: false
        });
      }
      remaining = remaining.substring(1);
    }
  }

  return tokens;
}
