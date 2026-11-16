/**
 * Sacred Sandhukkari Glossary & Text Highlighting Service
 * 
 * Provides authentic definitions, roots, and esoteric spiritual insights 
 * for ancient Sant Bhasha (Sandhukkari) words used across Satguru Kabir Saheb's 
 * holy scriptures (Kabir Sagar, Beejak, Granthavali, Shabdawali, Sakhi Sangrah).
 */

import { Language } from '../types';

export interface SandhukkariTerm {
  word: string; // Hindi / Devanagari standard
  punjabi: string; // Gurmukhi standard
  transliteration: string;
  category: 'metaphysics' | 'sadhana' | 'realms' | 'maya' | 'liberation' | 'divine';
  rootEtymology: {
    hi: string;
    pb: string;
    en: string;
  };
  literalMeaning: {
    hi: string;
    pb: string;
    en: string;
  };
  esotericMeaning: {
    hi: string;
    pb: string;
    en: string;
  };
  keyVerseSnippet?: {
    text: string;
    source: string;
  };
}

export const SANDHUKKARI_GLOSSARY: Record<string, SandhukkariTerm> = {
  'हंसा': {
    word: 'हंसा',
    punjabi: 'ਹੰਸਾ',
    transliteration: 'Hansa',
    category: 'liberation',
    rootEtymology: {
      hi: 'हंस पक्षी से व्युत्पन्न, जो नीर-क्षीर विवेक (दूध और पानी को पृथक करने) का प्रतीक है।',
      pb: 'ਹੰਸ ਪੰਛੀ ਤੋਂ, ਜੋ ਨੀਰ-ਖੀਰ ਵਿਵੇਕ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      en: 'Derived from swan, symbol of discernment separating milk from water.',
    },
    literalMeaning: {
      hi: 'पवित्र हंस पक्षी।',
      pb: 'ਪਵਿੱਤਰ ਹੰਸ ਪੰਛੀ।',
      en: 'The royal swan.',
    },
    esotericMeaning: {
      hi: 'शुद्ध जीवात्मा, जो संसार के मायाजाल और पाप-पुण्य से मुक्त होकर केवल सत्यनाम का सार ग्रहण करती है और अमरलोक की वासी बनती है।',
      pb: 'ਸ਼ੁੱਧ ਜੀਵ-ਆਤਮਾ ਜੋ ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸਤਯਨਾਮ ਦਾ ਸਾਰ ਗ੍ਰਹਿਣ ਕਰਦੀ ਹੈ।',
      en: 'The pure, liberated soul awakened from the trap of Maya, dwelling in eternal truth.',
    },
    keyVerseSnippet: {
      text: 'हंसा सोई जो नाम पहिचाने, काल जाल को दूर निवारै।\nकहै कबीर सुनहु रे संतो, अमर लोक में बासा पावै॥',
      source: 'कबीर सागर',
    },
  },
  'सुरति': {
    word: 'सुरति',
    punjabi: 'ਸੁਰਤਿ',
    transliteration: 'Surati',
    category: 'sadhana',
    rootEtymology: {
      hi: 'संस्कृत "स्मृति" अथवा भीतरी चेतना की एकाग्रता।',
      pb: 'ਅੰਦਰੂਨੀ ਆਤਮਿਕ ਚੇਤਨਾ ਅਤੇ ਧਿਆਨ।',
      en: 'Sanskrit Smriti; inner focused consciousness.',
    },
    literalMeaning: {
      hi: 'स्मृति, ध्यान या याद।',
      pb: 'ਯਾਦ, ਚੇਤਾ ਜਾਂ ਧਿਆਨ।',
      en: 'Memory, divine remembrance.',
    },
    esotericMeaning: {
      hi: 'अंतर्मुखी चेतना की धारा, जो बाह्य इन्द्रियों से सिमटकर त्रिकुटी व दसम द्वार की ओर आरोहण करती है और अनहद नाद से जुड़ती है।',
      pb: 'ਅੰਦਰੂਨੀ ਚੇਤਨਾ ਜੋ ਬਾਹਰੀ ਸੰਸਾਰ ਤੋਂ ਸਿਮਟ ਕੇ ਸੱਚੇ ਸ਼ਬਦ ਨਾਲ ਜੁੜਦੀ ਹੈ।',
      en: 'The upward-streaming soul consciousness ascending to unite with the Eternal Word.',
    },
    keyVerseSnippet: {
      text: 'सुरति समानी निरति में, अनहद बाजे ताल।\nकहै कबीर गगन मँझारि, निरखत रूप रसाल॥',
      source: 'बीजक (साखी)',
    },
  },
  'निरति': {
    word: 'निरति',
    punjabi: 'ਨਿਰਤਿ',
    transliteration: 'Nirati',
    category: 'sadhana',
    rootEtymology: {
      hi: 'संस्कृत "निवृत्ति" अथवा स्थिर दर्शन।',
      pb: 'ਸੁਰਤਿ ਦੀ ਸ਼ਬਦ ਵਿੱਚ ਪੱਕੀ ਸਥਿਰਤਾ।',
      en: 'Inner stability and steadfast spiritual absorption.',
    },
    literalMeaning: {
      hi: 'नृत्य या एकाग्रता की स्थिरता।',
      pb: 'ਸਥਿਰਤਾ, ਨਿਰਵ੍ਰਿੱਤੀ।',
      en: 'Inner stillness and divine contemplation.',
    },
    esotericMeaning: {
      hi: 'सुरति जब शब्द तक पहुँच जाती है, तो निरति उस प्रकाश और नाद में स्थिर होकर उसमें विलीन हो जाती है।',
      pb: 'ਜਦੋਂ ਸੁਰਤਿ ਸ਼ਬਦ ਵਿੱਚ ਪੂਰਨ ਤੌਰ \'ਤੇ ਸਮਾ ਕੇ ਲੀਨ ਹੋ ਜਾਵੇ।',
      en: 'The final steadfast anchor of consciousness becoming totally absorbed into the Divine Word.',
    },
    keyVerseSnippet: {
      text: 'सुरति ढूँढै शब्द को, निरति लहै प्रकाश।\nकहै कबीर ता दास का, अमर लोक में वास॥',
      source: 'साखी संग्रह',
    },
  },
  'अनहद': {
    word: 'अनहद',
    punjabi: 'ਅਨਹਦ',
    transliteration: 'Anhad / Anaahat',
    category: 'metaphysics',
    rootEtymology: {
      hi: 'अन + आहत (जो किसी आघात, घर्षण या आघात के बिना बजे)।',
      pb: 'ਅਨਾਹਤ, ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਚੋਟ ਦੇ ਵੱਜਦਾ ਹੈ।',
      en: 'Unstruck, vibration existing without physical friction.',
    },
    literalMeaning: {
      hi: 'अनाहत या सीमाहीन ध्वनि।',
      pb: 'ਬਿਨਾਂ ਰੁਕਾਵਟ ਵਾਲਾ ਅਨਾਹਤ ਨਾਦ।',
      en: 'Unbounded, uncreated spiritual melody.',
    },
    esotericMeaning: {
      hi: 'सत्यपुरुष का शाश्वत अमर नाद, जो ब्रह्मांड और अंतराकाश में निरंतर गूंज रहा है और जीवात्मा को अमरलोक का मार्ग दिखाता है।',
      pb: 'ਪਰਮ ਸਤਿਗੁਰੂ ਦਾ ਅੰਮ੍ਰਿਤ ਨਾਦ ਜੋ ਅੰਦਰੂਨੀ ਆਕਾਸ਼ ਵਿੱਚ ਸਦਾ ਗੂੰਜਦਾ ਹੈ।',
      en: 'The celestial unstruck divine vibration echoing throughout creation, guiding souls to Amarlok.',
    },
    keyVerseSnippet: {
      text: 'अनहद बाजा बजै गगन में, जहाँ दयालु का डेरा रे।\nकहै कबीर सुनहु रे संतो, मिट गया आवाफेरा रे॥',
      source: 'शब्दावली',
    },
  },
  'त्रिकुटी': {
    word: 'त्रिकुटी',
    punjabi: 'ਤ੍ਰਿਕੁਟੀ',
    transliteration: 'Trikuti',
    category: 'realms',
    rootEtymology: {
      hi: 'त्रि + कुटी (तीन नाड़ियों—इड़ा, पिंगला, सुषुम्ना का संगम स्थल)।',
      pb: 'ਤਿੰਨ ਨਾੜੀਆਂ ਦਾ ਸੰਗਮ (ਭ੍ਰੂਮੱਧ)।',
      en: 'Meeting point of the three subtle nadis.',
    },
    literalMeaning: {
      hi: 'भ्रूमध्य का भीतरी केंद्र।',
      pb: 'ਦੋਹਾਂ ਭਰਵੱਟਿਆਂ ਦੇ ਵਿਚਕਾਰਲਾ ਕੇਂਦਰ।',
      en: 'The third eye centre / brow nexus.',
    },
    esotericMeaning: {
      hi: 'भीतरी साधना का वह स्थान जहाँ ओंकार रूपी ब्रह्म का क्षेत्र है; कबीर साहेब साधक को इससे भी पार अमरलोक जाने का उपदेश देते हैं।',
      pb: 'ਅੰਦਰੂਨੀ ਓਂਕਾਰ ਦਾ ਮੰਡਲ, ਜਿਸ ਤੋਂ ਅੱਗੇ ਅਮਰਲੋਕ ਹੈ।',
      en: 'The astral realm of Omkar; the gateway beyond physical matter toward pure spiritual realms.',
    },
    keyVerseSnippet: {
      text: 'त्रिकुटी महल में झाँकिया, जहाँ ओंकार का बास।\nकहै कबीर गुरु कृपा से, पाया अमर प्रकाश॥',
      source: 'कबीर बीजक',
    },
  },
  'अमरलोक': {
    word: 'अमरलोक',
    punjabi: 'ਅਮਰਲੋਕ',
    transliteration: 'Amar Lok',
    category: 'realms',
    rootEtymology: {
      hi: 'अमर (जहाँ मृत्यु न हो) + लोक (धाम)।',
      pb: 'ਜਿੱਥੇ ਮੌਤ ਦਾ ਕੋਈ ਨਾਮ ਨਹੀਂ।',
      en: 'The Deathless Spiritual Abode.',
    },
    literalMeaning: {
      hi: 'अमर रहने का स्थान।',
      pb: 'ਅਮਰ ਰਹਿਣ ਵਾਲਾ ਧਾਮ।',
      en: 'The eternal dwelling.',
    },
    esotericMeaning: {
      hi: 'सत्यपुरुष कबीर साहेब का परम शाश्वत धाम (सत्यलोक), जो काल निरंजन के २१ ब्रह्मांडों और माया के तीनों गुणों से सर्वथा परे है।',
      pb: 'ਸਤਿਪੁਰੁਸ਼ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਪਰਮ ਸੱਚਾ ਧਾਮ, ਜੋ ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਤੋਂ ਪਰੇ ਹੈ।',
      en: 'The supreme unmanifest spiritual realm of Satguru Kabir, beyond the 21 universes of Kaal.',
    },
    keyVerseSnippet: {
      text: 'अमर लोक इक देश हमारा, जहाँ न काल न माया धारा।\nकहै कबीर सुनहु रे संतो, सो हमरा निज धामा रे॥',
      source: 'अनुराग सागर',
    },
  },
  'काल': {
    word: 'काल',
    punjabi: 'ਕਾਲ',
    transliteration: 'Kaal Niranjan',
    category: 'maya',
    rootEtymology: {
      hi: 'काल (समय, मृत्यु, क्षय करने वाला)।',
      pb: 'ਸਮਾਂ, ਮੌਤ ਜਾਂ ਸੰਸਾਰਿਕ ਚੱਕਰ।',
      en: 'Time, entropy, cosmic warden of birth and rebirth.',
    },
    literalMeaning: {
      hi: 'समय या मृत्यु।',
      pb: 'ਸਮਾਂ ਤੇ ਮੌਤ।',
      en: 'Time and death.',
    },
    esotericMeaning: {
      hi: 'इक्कीस ब्रह्मांडों का स्वामी ब्रह्म/निरंजन, जिसने जीवों को कर्म, पाप-पुण्य और ८४ लाख योनियों के आवागमन में बांध रखा है।',
      pb: '੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਦਾ ਹਾਕਮ ਜਿਸਨੇ ਜੀਵਾਂ ਨੂੰ ਕਰਮਾਂ ਤੇ ਜਨਮ-ਮਰਨ ਦੇ ਫੇਰ ਵਿੱਚ ਬੰਨ੍ਹਿਆ ਹੈ।',
      en: 'The negative universal force presiding over the 21 universes, keeping souls trapped in transmigration.',
    },
    keyVerseSnippet: {
      text: 'काल जाल में जग बँधा, नाहिं नाम का ज्ञान।\nकहै कबीर सत्यनाम बिन, फिर फिर आवन जान॥',
      source: 'कबीर साखी',
    },
  },
  'निरंजन': {
    word: 'निरंजन',
    punjabi: 'ਨਿਰੰਜਨ',
    transliteration: 'Niranjan',
    category: 'maya',
    rootEtymology: {
      hi: 'निर + अंजन (काजल या आकार से रहित, ज्योति स्वरूप)।',
      pb: 'ਜੋ ਬਾਹਰੀ ਅੱਖਾਂ ਨਾਲ ਨਾ ਦਿਸੇ।',
      en: 'Formless cosmic force, light without physical ink.',
    },
    literalMeaning: {
      hi: 'अदृश्य ज्योति स्वरूप।',
      pb: 'ਅਦ੍ਰਿਸ਼ ਜੋਤਿ।',
      en: 'The unmanifest astral ruler.',
    },
    esotericMeaning: {
      hi: 'काल पुरुष का सूक्ष्म स्वरूप जिसे ज्योति निरंजन कहा जाता है। सतगुरु कबीर साहेब स्पष्ट करते हैं कि निरंजन से परे सतपुरुष हैं।',
      pb: 'ਕਾਲ ਨਿਰੰਜਨ ਦਾ ਸੂਖਮ ਰੂਪ; ਸਤਿਪੁਰੁਸ਼ ਇਸ ਤੋਂ ਵੀ ਅੱਗੇ ਹਨ।',
      en: 'The astral governor Jyoti Niranjan; distinct from and subordinate to the Supreme Sat Purush.',
    },
    keyVerseSnippet: {
      text: 'निरंजन काल का जाल रचाया, तीन लोक जग मोहे।\nकहै कबीर सतपुरुष की शरण, पार कबीर ही होए॥',
      source: 'कबीर सागर',
    },
  },
  'गगन': {
    word: 'गगन',
    punjabi: 'ਗਗਨ',
    transliteration: 'Gagan',
    category: 'realms',
    rootEtymology: {
      hi: 'आकाश, सूक्ष्म अंतराकाश, दसम द्वार।',
      pb: 'ਅੰਦਰੂਨੀ ਆਕਾਸ਼ (ਦਸਮ ਦੁਆਰ)।',
      en: 'Inner heavens, subtle celestial space within.',
    },
    literalMeaning: {
      hi: 'आकाश या गगनमंडल।',
      pb: 'ਆਸਮਾਨ।',
      en: 'Sky, celestial dome.',
    },
    esotericMeaning: {
      hi: 'सहस्रार व दसम द्वार का भीतरी आध्यात्मिक आकाश जहाँ से अमृत की निरंतर वर्षा होती है।',
      pb: 'ਸੁਖਮਨਾ ਦੇ ਉੱਪਰਲਾ ਦਸਮ ਦੁਆਰ ਜਿੱਥੇ ਅੰਮ੍ਰਿਤ ਰਸ ਵਰ੍ਹਦਾ ਹੈ।',
      en: 'The internal firmament where the divine nectar drops continuously upon the meditating soul.',
    },
    keyVerseSnippet: {
      text: 'गगन मँझारि अम्रित झरै, सुरति करै तहँ बास।\nकहै कबीर बिन सतगुरु के, पूरै न मन की आस॥',
      source: 'साखी संग्रह',
    },
  },
  'पारस': {
    word: 'पारस',
    punjabi: 'ਪਾਰਸ',
    transliteration: 'Paaras',
    category: 'metaphysics',
    rootEtymology: {
      hi: 'स्पर्श मणि (जो लोहे को छूते ही स्वर्ण बना देती है)।',
      pb: 'ਸਪਰਸ਼ ਮਣੀ ਜੋ ਲੋਹੇ ਨੂੰ ਸੋਨਾ ਬਣਾਉਂਦੀ ਹੈ।',
      en: 'The philosopher\'s stone turning iron to gold.',
    },
    literalMeaning: {
      hi: 'पारस पत्थर।',
      pb: 'ਪਾਰਸ ਪੱਥਰ।',
      en: 'Touchstone.',
    },
    esotericMeaning: {
      hi: 'सतगुरु के चरण और उनका सत्य ज्ञान पारस से भी श्रेष्ठ हैं, क्योंकि पारस लोहे को केवल सोना बनाता है, परंतु सतगुरु शिष्य को अपने ही समान पारस बना देते हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਪਾਰਸ ਤੋਂ ਵੀ ਉੱਚੇ ਹਨ ਕਿਉਂਕਿ ਉਹ ਸਿੱਖ ਨੂੰ ਆਪਣੇ ਵਰਗਾ ਹੀ ਬਣਾ ਦਿੰਦੇ ਹਨ।',
      en: 'The Satguru whose holy touch transforms ordinary seekers into awakened masters.',
    },
    keyVerseSnippet: {
      text: 'पारस में अरु संत में, बड़ो अंतरो जान।\nवह लोहा कंचन करै, ये करै आप समान॥',
      source: 'साखी संग्रह',
    },
  },
  'सहज': {
    word: 'सहज',
    punjabi: 'ਸਹਜ',
    transliteration: 'Sahaj',
    category: 'sadhana',
    rootEtymology: {
      hi: 'सह (साथ) + ज (उत्पन्न) — जो आत्मा का मूल स्वाभाविक स्वभाव है।',
      pb: 'ਸੁਭਾਵਿਕ ਅਵਸਥਾ।',
      en: 'Innate, natural, effortlessly awakened.',
    },
    literalMeaning: {
      hi: 'सरल, स्वाभाविक, बिना हठ के।',
      pb: 'ਸੌਖਾ, ਸੁਭਾਵਿਕ।',
      en: 'Natural, spontaneous state.',
    },
    esotericMeaning: {
      hi: 'हठयोग और कठोर यातनाओं के बिना, निरंतर सत्यनाम सुमिरन द्वारा प्राप्त सहज समाधि।',
      pb: 'ਬਿਨਾਂ ਹਠਯੋਗ ਦੇ ਨਾਮ ਸਿਮਰਨ ਰਾਹੀਂ ਮਿਲਣ ਵਾਲੀ ਸੁਭਾਵਿਕ ਸਮਾਧੀ।',
      en: 'The sublime equilibrium where meditation happens spontaneously with every breath.',
    },
    keyVerseSnippet: {
      text: 'साधो सहज समाध भली।\nगुरु प्रताप जा दिन तें उपजी, दिन-दिन अधिक चली॥',
      source: 'शब्दावली',
    },
  },
  'शून्य': {
    word: 'शून्य',
    punjabi: 'ਸੁੰਨ / ਸੁੰਨਯ',
    transliteration: 'Shunya / Sunn',
    category: 'metaphysics',
    rootEtymology: {
      hi: 'रिक्तता अथवा सांसारिक प्रपंचों से परे की शांत अवस्था।',
      pb: 'ਵਿਚਾਰਾਂ ਤੋਂ ਮੁਕਤ ਪਰਮ ਸ਼ਾਂਤ ਅਵਸਥਾ।',
      en: 'Void, silence beyond conceptual thoughts.',
    },
    literalMeaning: {
      hi: 'शून्य या शांत मौन।',
      pb: 'ਖ਼ਾਲੀ ਜਾਂ ਸ਼ਾਂਤ।',
      en: 'Void / Zero.',
    },
    esotericMeaning: {
      hi: 'भौतिक सृष्टि के परे का वह मौन मंडल जहाँ मन की वृत्तियाँ समाप्त हो जाती हैं और आत्मा निज स्वरूप को पहचानती है।',
      pb: 'ਸੰਸਾਰਕ ਮਾਇਆ ਤੋਂ ਪਰੇ ਆਤਮਾ ਦਾ ਸ਼ਾਂਤ ਮੰਡਲ।',
      en: 'The profound transcendent stillness where mental chatter dissolves into pure awareness.',
    },
    keyVerseSnippet: {
      text: 'शून्य महल में सुरति लगाई, बाजे अनहद तूर।\nकहै कबीर सतगुरु कृपा से, प्रकटा आतम नूर॥',
      source: 'बीजक (साखी)',
    },
  },
  'महाशून्य': {
    word: 'महाशून्य',
    punjabi: 'ਮਹਾਸੁੰਨ',
    transliteration: 'Maha Shunya',
    category: 'realms',
    rootEtymology: {
      hi: 'महा + शून्य (ब्रह्मंडीय सीमाओं के परे का महा-विस्तार)।',
      pb: 'ਬ੍ਰਹਮੰਡਾਂ ਤੋਂ ਪਰੇ ਪਰਮ ਖਲਾਅ।',
      en: 'The Great Void between material creation and pure spiritual realms.',
    },
    literalMeaning: {
      hi: 'अति गहन शून्य।',
      pb: 'ਮਹਾ ਸੁੰਨ ਮੰਡਲ।',
      en: 'The Great Void.',
    },
    esotericMeaning: {
      hi: 'काल निरंजन के तीनों लोकों और ब्रह्मलोक के आगे का वह अंधकारमय मार्ग, जिसे केवल पूर्ण सतगुरु के सत्यनाम का प्रकाश ही पार करा सकता है।',
      pb: 'ਉਹ ਗੰਭੀਰ ਰਸਤਾ ਜਿਸਨੂੰ ਸਿਰਫ਼ ਸਤਿਗੁਰੂ ਦੇ ਸਤਯਨਾਮ ਨਾਲ ਪਾਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
      en: 'The deep zone crossing which requires the living light of the Satguru\'s true Naam.',
    },
    keyVerseSnippet: {
      text: 'महाशून्य की घाटी पार, सत्यनाम परकाश।\nकहै कबीर सतगुरु मिले, पूरे मन की आस॥',
      source: 'अनुराग सागर',
    },
  },
  'भंवरगुफा': {
    word: 'भंवरगुफा',
    punjabi: 'ਭੰਵਰ ਗੁਫ਼ਾ',
    transliteration: 'Bhanwar Gupha',
    category: 'realms',
    rootEtymology: {
      hi: 'भंवर (घूर्णन, चक्रवात जैसी तीव्र आकर्षण शक्ति) + गुफा (गूढ़ सूक्ष्म द्वार)।',
      pb: 'ਸੂਖਮ ਅਧਿਆਤਮਿਕ ਗੁਫ਼ਾ।',
      en: 'The whirling spiritual portal.',
    },
    literalMeaning: {
      hi: 'घूर्णन करती हुई सूक्ष्म गुफा।',
      pb: 'ਘੁੰਮਣਘੇਰੀ ਵਾਲੀ ਗੁਫ਼ਾ।',
      en: 'Whirling vortex cavern.',
    },
    esotericMeaning: {
      hi: 'महाशून्य के उपरांत सोहं लोक का प्रवेश द्वार, जहाँ मुरली की मनोहर अनहद ध्वनि गूंजती है और हंस आत्माएं विश्राम पाती हैं।',
      pb: 'ਸੋਹੰ ਮੰਡਲ ਦਾ ਦੁਆਰ ਜਿੱਥੇ ਅੰਮ੍ਰਿਤ ਬੰਸਰੀ ਵੱਜਦੀ ਹੈ।',
      en: 'The portal to the Soham realm, resonating with the celestial flute melody before entering Satyaloka.',
    },
    keyVerseSnippet: {
      text: 'भंवर गुफा में सोहं डोले, सुनिए मुरली तान।\nकहै कबीर हंसा तहाँ, पावे पद निर्भान॥',
      source: 'कबीर सागर',
    },
  },
  'सुषुपति': {
    word: 'सुषुपति',
    punjabi: 'ਸੁਖੋਪਤਿ',
    transliteration: 'Sushupti',
    category: 'sadhana',
    rootEtymology: {
      hi: 'जाग्रत, स्वप्न, सुषुप्ति और तुरीय—चेतना की चार अवस्थाएं।',
      pb: 'ਗੂੜ੍ਹੀ ਨੀਂਦ ਜਾਂ ਅਚੇਤਨਤਾ।',
      en: 'Deep sleep state, the third state of consciousness.',
    },
    literalMeaning: {
      hi: 'गाढ़ निद्रा।',
      pb: 'ਗੂੜ੍ਹੀ ਨੀਂਦ।',
      en: 'Deep sleep.',
    },
    esotericMeaning: {
      hi: 'संसार जब अज्ञान की सुषुप्ति (नींद) में सोता है, तब कबीर साहेब साधक को "तुरीय" (चौथे पद) में जागने का आदेश देते हैं।',
      pb: 'ਸੰਸਾਰੀ ਨੀਂਦ ਤੋਂ ਉੱਠ ਕੇ ਚੌਥੇ ਪਦ ਵਿੱਚ ਜਾਗਣਾ।',
      en: 'Transcendence beyond the three worldly states into Turiya, the fourth deathless plane.',
    },
    keyVerseSnippet: {
      text: 'सुषुपति सोवत जग फिरे, जागे नाम अधार।\nकहै कबीर सत्यनाम भज, उतरे भवजल पार॥',
      source: 'साखी संग्रह',
    },
  },
  'सुमिरे': {
    word: 'सुमिरे',
    punjabi: 'ਸੁਮਿਰੈ',
    transliteration: 'Sumire / Simran',
    category: 'sadhana',
    rootEtymology: {
      hi: 'संस्कृत "स्मरण" (हृदय में निरंतर ध्यान धारण करना)।',
      pb: 'ਸਿਮਰਨ ਕਰਨਾ।',
      en: 'Constant mindful remembrance.',
    },
    literalMeaning: {
      hi: 'याद करना या जपना।',
      pb: 'ਯਾਦ ਰੱਖਣਾ।',
      en: 'To remember continuously.',
    },
    esotericMeaning: {
      hi: 'श्वास-श्वास में बिना जिह्वा हिलाए सत्यनाम को सुरति में पिरोए रखना; यह कबीर पंथ का परम साधना साधन है।',
      pb: 'ਹਰ ਸੁਆਸ ਨਾਲ ਸਤਯਨਾਮ ਨੂੰ ਅੰਦਰ ਧਿਆਉਣਾ।',
      en: 'Chanting with every breath internally without tongue motion; the bedrock of Kabir Panth.',
    },
    keyVerseSnippet: {
      text: 'दुख में सुमिरन सब करे, सुख में करै न कोय।\nजो सुख में सुमिरन करै, तो दुख काहे को होय॥',
      source: 'साखी संग्रह',
    },
  },
  'अगम': {
    word: 'अगम',
    punjabi: 'ਅਗਮ',
    transliteration: 'Agam Lok',
    category: 'realms',
    rootEtymology: {
      hi: 'अ + गम (जहाँ मन, बुद्धि और इन्द्रियों का गमन न हो सके)।',
      pb: 'ਜਿੱਥੇ ਪਹੁੰਚਣਾ ਅਸੰਭਵ ਹੋਵੇ।',
      en: 'Inaccessible to mortal senses and worldly mind.',
    },
    literalMeaning: {
      hi: 'दुर्गम या अगम्य।',
      pb: 'ਅਪਹੁੰਚ।',
      en: 'Unapproachable by material intellect.',
    },
    esotericMeaning: {
      hi: 'सत्यलोक के ऊपर का अगम्य दिव्य धाम, जहाँ सतपुरुष की परम ज्योति का असीम विस्तार है।',
      pb: 'ਸਤਿਲੋਕ ਤੋਂ ਵੀ ਅੱਗੇ ਦਾ ਪਰਮ ਮੰਡਲ।',
      en: 'The transcendent realm above Satyaloka, accessible only through total surrender to the Satguru.',
    },
    keyVerseSnippet: {
      text: 'अगम अगोचर सतपुरुष, अमर लोक के भूप।\nकहै कबीर गुरु किरपा से, लखा अनोखा रूप॥',
      source: 'अनुराग सागर',
    },
  },
  'अलख': {
    word: 'अलख',
    punjabi: 'ਅਲਖ',
    transliteration: 'Alakh Lok',
    category: 'realms',
    rootEtymology: {
      hi: 'अ + लख (जिसे चर्मचक्षुओं या बुद्धि से लखा/देखा न जा सके)।',
      pb: 'ਜੋ ਵੇਖਿਆ ਨਾ ਜਾ ਸਕੇ।',
      en: 'Invisible, unseeable by mortal eyes.',
    },
    literalMeaning: {
      hi: 'अदृश्य, अलक्ष्य।',
      pb: 'ਅਦ੍ਰਿਸ਼ਟ।',
      en: 'Unperceivable.',
    },
    esotericMeaning: {
      hi: 'अगम लोक से भी ऊपर का वह परम पद जहाँ केवल अखंड प्रकाश और दिव्य चेतना की प्रधानता है।',
      pb: 'ਅਗਮ ਤੋਂ ਵੀ ਉੱਪਰਲਾ ਪਰਮ ਸ਼ੁੱਧ ਮੰਡਲ।',
      en: 'The sublime plane of invisible perfection preceding the final Anami Lok.',
    },
    keyVerseSnippet: {
      text: 'अलख निरंजन से परे, सतपुरुष निज धाम।\nकहै कबीर सोई हंसा पावे, जाके रटने सत्यनाम॥',
      source: 'कबीर साखी',
    },
  },
  'अनामी': {
    word: 'अनामी',
    punjabi: 'ਅਨਾਮੀ',
    transliteration: 'Anami Lok / Akath',
    category: 'realms',
    rootEtymology: {
      hi: 'अ + नाम (जिसका कोई सीमित नाम या रूप नहीं, जो अकथनीय है)।',
      pb: 'ਜਿਸਦਾ ਕੋਈ ਨਾਮ ਜਾਂ ਸੀਮਾ ਨਹੀਂ।',
      en: 'Nameless, unconditioned, absolute source.',
    },
    literalMeaning: {
      hi: 'बिना नाम का।',
      pb: 'ਬਿਨਾਂ ਨਾਮ ਵਾਲਾ।',
      en: 'The Nameless One.',
    },
    esotericMeaning: {
      hi: 'परम पुरुष का सर्वोच्च, अनिर्वचनीय धाम जिसे "राधास्वामी पद" अथवा "अकथ लोक" भी कहा जाता है; आत्मा का मूल उद्गम स्थल।',
      pb: 'ਸਭ ਤੋਂ ਉੱਚਾ ਪਰਮ ਧਾਮ, ਆਤਮਾ ਦਾ ਆਖ਼ਰੀ ਟਿਕਾਣਾ।',
      en: 'The supreme source of all universes and pure consciousness, beyond words and forms.',
    },
    keyVerseSnippet: {
      text: 'अनामी पद में हंसा बासा, जहा न आवन जान।\nकहै कबीर सोई घर हमारा, पावे पद निर्भान॥',
      source: 'कबीर सागर',
    },
  },
  'सुकृत': {
    word: 'सुकृत',
    punjabi: 'ਸੁਕ੍ਰਿਤ',
    transliteration: 'Sat Sukrit',
    category: 'divine',
    rootEtymology: {
      hi: 'सु (उत्कृष्ट) + कृत (कर्म/सृजन) अथवा सत्य पुरुष का प्रथम पावन स्वरूप।',
      pb: 'ਸਤਿਪੁਰੁਸ਼ ਦਾ ਸਤਿਯੁਗ ਵਾਲਾ ਅਵਤਾਰ।',
      en: 'Pure divine manifestation in Satya Yuga.',
    },
    literalMeaning: {
      hi: 'सत्कर्म अथवा सत्य स्वरूप।',
      pb: 'ਨੇਕ ਕਰਮ ਜਾਂ ਸੱਚਾ ਰੂਪ।',
      en: 'Pure good action; True manifestation.',
    },
    esotericMeaning: {
      hi: 'सत्ययुग में आदि पुरुष सतगुरु कबीर साहेब का प्रथम अवतार "सत सुकृत जी", जिन्होंने महाराज मंधाता को सत्यनाम का अमर ज्ञान दिया।',
      pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਪਾਵਨ ਰੂਪ।',
      en: 'The Satya Yuga manifestation of Satguru Kabir Saheb as "Sat Sukrit", initiating King Mandhata.',
    },
    keyVerseSnippet: {
      text: 'सत सुकृत की शरण में, मिटे सकल संताप।\nकहै कबीर सत्यनाम भज, छूटे पुण्य अरु पाप॥',
      source: 'कबीर सागर',
    },
  },
  'मुनीन्द्र': {
    word: 'मुनीन्द्र',
    punjabi: 'ਮੁਨੀਂਦਰ',
    transliteration: 'Munindra Ji',
    category: 'divine',
    rootEtymology: {
      hi: 'मुनियों में श्रेष्ठ अथवा त्रेतायुग का कबीर साहेब का अवतार रूप।',
      pb: 'ਤ੍ਰੇਤਾ ਯੁਗ ਦਾ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਸਰੂਪ।',
      en: 'The chief of sages; Treta Yuga manifestation of Kabir Saheb.',
    },
    literalMeaning: {
      hi: 'परम मुनि।',
      pb: 'ਮੁਨੀਂਦਰ ਮਹਾਰਾਜ।',
      en: 'Supreme Sage.',
    },
    esotericMeaning: {
      hi: 'त्रेतायुग में कबीर साहेब "मुनीन्द्र" नाम से प्रकट हुए और नल-नील को समुद्र पर पत्थर तैराने का अमर नाम रहस्य प्रदान किया।',
      pb: 'ਤ੍ਰੇਤਾ ਵਿੱਚ ਨਲ-ਨੀਲ ਨੂੰ ਪੱਥਰ ਤੈਰਾਉਣ ਦਾ ਸਤਯਨਾਮ ਭੇਦ ਦੇਣ ਵਾਲੇ ਸਤਿਗੁਰੂ।',
      en: 'The Treta Yuga manifestation who imparted the sacred floating stone formula to Nal and Neel for the ocean bridge.',
    },
    keyVerseSnippet: {
      text: 'मुनीन्द्र रूप धरि त्रेता आए, दीन्हा सत्यनाम ज्ञान।\nकहै कबीर सोई गुरु हमारे, काटे काल निधान॥',
      source: 'कबीर सागर',
    },
  },
  'करुणामय': {
    word: 'करुणामय',
    punjabi: 'ਕਰੁਣਾਮਯ',
    transliteration: 'Karunamaya Ji',
    category: 'divine',
    rootEtymology: {
      hi: 'करुणा से परिपूर्ण अथवा द्वापरयुग का कबीर साहेब का अवतार रूप।',
      pb: 'ਦਵਾਪਰ ਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦਾ ਰੂਪ।',
      en: 'Embodiment of compassionate grace in Dvapara Yuga.',
    },
    literalMeaning: {
      hi: 'दया और करुणा के सागर।',
      pb: 'ਦਇਆਵਾਨ।',
      en: 'Compassionate.',
    },
    esotericMeaning: {
      hi: 'द्वापरयुग में कबीर साहेब "करुणामय" नाम से आए और पांडवों के यज्ञ में सुपच सुदर्शन रूप में भोजन स्वीकार कर दिव्य शंखनाद किया।',
      pb: 'ਦਵਾਪਰ ਯੁਗ ਵਿੱਚ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਰੂਪ ਵਿੱਚ ਪਾਂਡਵਾਂ ਦੇ ਯੱਗ ਦਾ ਸ਼ੰਖ ਵਜਾਉਣ ਵਾਲੇ।',
      en: 'Dvapara Yuga form who blew the divine conch shell at the Pandavas\' Rajasuya Yajna as Supach Sudarshan.',
    },
    keyVerseSnippet: {
      text: 'करुणामय प्रभु द्वापर आए, मेटन भव दुख पीर।\nकहै कबीर सोई साहिब हमारे, समरथ गुरु गंभीर॥',
      source: 'ਕਬੀਰ ਸਾਗਰ',
    },
  },
  'बंकनाल': {
    word: 'बंकनाल',
    punjabi: 'ਬੰਕਨਾਲ',
    transliteration: 'Banknaal',
    category: 'sadhana',
    rootEtymology: {
      hi: 'बंक (टेढ़ा, वक्र) + नाल (मार्ग/नली)।',
      pb: 'ਵਿੰਗੀ ਨਾੜੀ ਜਾਂ ਰਸਤਾ।',
      en: 'Curved spinal channel.',
    },
    literalMeaning: {
      hi: 'टेढ़ी नली।',
      pb: 'ਵਿੰਗਾ ਰਸਤਾ।',
      en: 'Curved passage.',
    },
    esotericMeaning: {
      hi: 'सुषुम्ना नाड़ी का वह वक्र आध्यात्मिक मार्ग जिसे पार कर सुरति ब्रह्मरंध्र और दसम द्वार में प्रवेश करती है।',
      pb: 'ਦਸਮ ਦੁਆਰ ਵੱਲ ਜਾਣ ਵਾਲਾ ਗੁਪਤ ਮਾਰਗ।',
      en: 'The subtle curved conduit leading from the crown to the inner celestial realms.',
    },
    keyVerseSnippet: {
      text: 'बंकनाल के घाट पर, सुरति निरति का मेल।\nकहै कबीर सत्यनाम सों, खेलो निर्भय खेल॥',
      source: 'साखी संग्रह',
    },
  },
  'मानसरोवर': {
    word: 'मानसरोवर',
    punjabi: 'ਮਾਨਸਰੋਵਰ',
    transliteration: 'Mansarovar',
    category: 'realms',
    rootEtymology: {
      hi: 'मन + सरोवर (पवित्र अमृत कुंड)।',
      pb: 'ਅੰਦਰੂਨੀ ਅੰਮ੍ਰਿਤ ਸਰੋਵਰ।',
      en: 'Inner lake of nectar purification.',
    },
    literalMeaning: {
      hi: 'दिव्य सरोवर।',
      pb: 'ਪਵਿੱਤਰ ਸਰੋਵਰ।',
      en: 'Sacred lake.',
    },
    esotericMeaning: {
      hi: 'त्रिकुटी के आगे का वह पावन अमृत सरोवर जहाँ स्नान करते ही जीवात्मा के जन्म-जन्मांतरों के पाप-पुण्य और कर्मावरण धुल जाते हैं और वह निष्कलंक हंस बन जाती है।',
      pb: 'ਅੰਦਰੂਨੀ ਸਰੋਵਰ ਜਿੱਥੇ ਆਤਮਾ ਪਵਿੱਤਰ ਹੋ ਕੇ ਹੰਸ ਬਣਦੀ ਹੈ।',
      en: 'The divine reservoir of nectar where the soul bathes, shedding all karmic dust before entering the realm of the saints.',
    },
    keyVerseSnippet: {
      text: 'मानसरोवर सब भरे, हंसा चुगे मुक्ताहाल।\nकहै कबीर सत्यनाम भज, काटे यम का जाल॥',
      source: 'ਕਬੀਰ ਬੀਜਕ',
    },
  },
};

// Check if a given string contains any Sandhukkari glossary word
export function findSandhukkariTerms(text: string): SandhukkariTerm[] {
  if (!text) return [];
  const found: SandhukkariTerm[] = [];
  const checkedWords = new Set<string>();

  for (const [key, term] of Object.entries(SANDHUKKARI_GLOSSARY)) {
    if (text.includes(key) || text.includes(term.punjabi)) {
      if (!checkedWords.has(key)) {
        found.push(term);
        checkedWords.add(key);
      }
    }
  }

  return found;
}

// User Text Highlighter Types & Local Storage Service
export type HighlightColor = 'saffron' | 'green' | 'yellow';

export interface UserVerseHighlight {
  verseId: string | number;
  granthSlug: string;
  color: HighlightColor;
  timestamp: number;
}

const HIGHLIGHTS_STORAGE_KEY = 'sahebworld_user_highlights';

export const userHighlightService = {
  getAll(): Record<string, UserVerseHighlight> {
    if (typeof window === 'undefined') return {};
    try {
      const data = localStorage.getItem(HIGHLIGHTS_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  setHighlight(verseId: string | number, granthSlug: string, color: HighlightColor): void {
    if (typeof window === 'undefined') return;
    try {
      const all = this.getAll();
      const key = `${granthSlug}:${verseId}`;
      all[key] = {
        verseId,
        granthSlug,
        color,
        timestamp: Date.now(),
      };
      localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('Error saving highlight:', e);
    }
  },

  removeHighlight(verseId: string | number, granthSlug: string): void {
    if (typeof window === 'undefined') return;
    try {
      const all = this.getAll();
      const key = `${granthSlug}:${verseId}`;
      delete all[key];
      localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('Error removing highlight:', e);
    }
  },

  getHighlight(verseId: string | number, granthSlug: string): HighlightColor | null {
    const all = this.getAll();
    const item = all[`${granthSlug}:${verseId}`];
    return item ? item.color : null;
  },
};
