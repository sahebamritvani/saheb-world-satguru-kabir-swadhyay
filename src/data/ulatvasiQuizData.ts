import { UlatvasiQuestion } from './ulatvasiMetadata';
import { offlineScriptureCache } from '../services/offlineScriptureCache';

export * from './ulatvasiMetadata';

export const ULATVASI_CORE_QUESTIONS: UlatvasiQuestion[] = [
  {
    id: 'ub-1',
    number: 1,
    realm: 'kautuhal',
    realmTitle: { hi: 'कौतूहल (Curiosity)', pb: 'ਕੌਤਕ (Curiosity)', en: 'Curiosity' },
    title: { hi: '1. बरसे कंबल, भींजे पानी', pb: '1. ਬਰਸੇ ਕੰਬਲ, ਭੀਂਜੇ ਪਾਣੀ', en: '1. Blanket Rains, Water Gets Wet' },
    verse: {
      hi: '"एक अचम्भा देखा रे भाई, थारा सिंह चरावै गाई। पहले पूत पीछे भई माई, चेला के गुरु लागै पाई। जल की मछली तरुवर ब्याई, कुतवा को ले गई बिलाई। तले बलद ऊपर है गाड़ी, धरनी उलटि अकासै जाई। बरसै कम्बल भींजै पानी, कहै कबीर सोई संत ग्यानी॥"',
      pb: '"ਇਕ ਅਚੰਭਾ ਦੇਖਿਆ ਰੇ ਭਾਈ, ਥਾਰਾ ਸਿੰਘ ਚਰਾਵੈ ਗਾਈ। ਪਹਿਲੇ ਪੂਤ ਪਿੱਛੇ ਭਈ ਮਾਈ, ਚੇਲਾ ਕੇ ਗੁਰੂ ਲਾਗੈ ਪਾਈ।..."',
      en: '"An amazing wonder seen, oh brother: lion grazes the cow. Son born before mother, disciple touching guru\'s feet..."',
    },
    literalParadox: {
      hi: 'सिंह गाय चरा रहा है, बेटा पहले पैदा हुआ और माँ बाद में, मछली पेड़ पर बच्चे दे रही है, कंबल बरस रहा है जिससे पानी भीग रहा है।',
      pb: 'ਸਿੰਘ ਗਾਂ ਚਰਾ ਰਿਹਾ ਹੈ, ਪੁੱਤਰ ਪਹਿਲਾਂ ਅਤੇ ਮਾਂ ਬਾਅਦ ਵਿੱਚ ਪੈਦਾ ਹੋਈ, ਕੰਬਲ ਬਰਸ ਰਿਹਾ ਹੈ ਅਤੇ ਪਾਣੀ ਭਿੱਜ ਰਿਹਾ ਹੈ।',
      en: 'Lion grazes cow, son born before mother, blanket rains and water gets wet.',
    },
    clueHint: {
      hi: 'सिंह ज्ञान का प्रतीक है और गाय इंद्रियों की। कंबल परमात्मा की कृपा है।',
      pb: 'ਸਿੰਘ ਗਿਆਨ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਅਤੇ ਗਾਂ ਇੰਦਰੀਆਂ ਦੀ। ਕੰਬਲ ਪਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ ਹੈ।',
      en: 'Lion is Supreme Knowledge and Cow represents the senses. Blanket represents Divine Grace.',
    },
    symbols: [
      { symbol: 'सिंह (Lion)', meaning: { hi: 'आत्मज्ञान / साक्षी चेतना', pb: 'ਆਤਮ ਗਿਆਨ', en: 'Self-Knowledge / Witness' } },
      { symbol: 'गाय (Cow)', meaning: { hi: 'इंद्रियाँ / चंचल मन', pb: 'ਇੰਦਰੀਆਂ / ਮਨ', en: 'Senses / Restless Mind' } },
      { symbol: 'पूत / माई (Son / Mother)', meaning: { hi: 'आत्मा (सदा सनातन) और माया (जगत)', pb: 'ਆਤਮਾ ਅਤੇ ਮਾਇਆ', en: 'Soul and Illusion (Maya)' } },
      { symbol: 'कंबल / पानी (Blanket / Water)', meaning: { hi: 'प्रभु कृपा और शांत मन/बुद्धि', pb: 'ਕਿਰਪਾ ਅਤੇ ਮਨ', en: 'Divine Grace and Calm Mind' } },
    ],
    question: {
      hi: 'कबीर साहेब के अनुसार "बरसे कंबल भींजे पानी" का वास्तविक आध्यात्मिक अर्थ क्या है?',
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਅਨੁਸਾਰ "ਬਰਸੇ ਕੰਬਲ ਭੀਂਜੇ ਪਾਣੀ" ਦਾ ਅਸਲ ਅਧਿਆਤਮਕ ਅਰਥ ਕੀ ਹੈ?',
      en: 'According to Satguru Kabir, what is the true spiritual meaning of "The blanket rains and water gets wet"?',
    },
    options: {
      hi: [
        'परमात्मा की कृपा-वर्षा (कंबल) से जीव का मन रूपी जल आनंद से भीग जाता है',
        'ऊनी कंबल से बरसात का पानी रोकने का उपाय',
        'जंगल में बारिश होने से नदियों में बाढ़ आ जाना',
        'मछलियों का आकाश में उड़कर तैरना',
      ],
      pb: [
        'ਪਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ (ਕੰਬਲ) ਨਾਲ ਜੀਵ ਦਾ ਮਨ ਰੂਪੀ ਜਲ ਆਨੰਦ ਨਾਲ ਭਿੱਜ ਜਾਂਦਾ ਹੈ',
        'ਮੀਂਹ ਰੋਕਣ ਲਈ ਕੰਬਲ ਦੀ ਵਰਤੋਂ',
        'ਜੰਗਲ ਵਿੱਚ ਮੀਂਹ ਕਾਰਨ ਹੜ੍ਹ ਆਉਣਾ',
        'ਮੱਛੀਆਂ ਦਾ ਆਕਾਸ਼ ਵਿੱਚ ਉੱਡਣਾ',
      ],
      en: [
        'By the rain of Divine Grace (blanket), the soul-mind (water) is soaked in spiritual bliss',
        'Using woollen blankets to block heavy rain',
        'Flooding of rivers inside a dense forest',
        'Fishes learning to fly in the clouds',
      ],
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'ब्रह्मज्ञान द्वारा इंद्रिय-विजय का महात्म्य', pb: 'ਬ੍ਰਹਮਗਿਆਨ ਦੁਆਰਾ ਇੰਦਰੀਆਂ ਤੇ ਜਿੱਤ', en: 'Mastery over Senses via Self-Knowledge' },
      deepMeaning: {
        hi: 'यहाँ "पूत" आत्मा है जो माया ("माई") से पहले से विद्यमान है। जब ज्ञान रूपी सिंह मन रूपी गाय को वश में कर लेता है, तब परमात्मा की कृपा रूपी कंबल की वर्षा से जीव रूपी जल भीगकर तर हो जाता है।',
        pb: 'ਇੱਥੇ "ਪੂਤ" ਆਤਮਾ ਹੈ ਜੋ ਮਾਇਆ ("ਮਾਈ") ਤੋਂ ਪਹਿਲਾਂ ਮੌਜੂਦ ਹੈ। ਜਦੋਂ ਗਿਆਨ ਦਾ ਸਿੰਘ ਮਨ ਰੂਪੀ ਗਾਂ ਨੂੰ ਵੱਸ ਕਰਦਾ ਹੈ, ਤਦ ਕਿਰਪਾ ਨਾਲ ਮਨ ਭਿੱਜ ਜਾਂਦਾ ਹੈ।',
        en: 'Here "Son" is the eternal Soul existing before Maya ("Mother"). When Knowledge (Lion) subdues the senses (Cow), Divine Grace (Blanket) drenches the heart in bliss.',
      },
      kabirPhilosophy: {
        hi: 'संत वही ज्ञानी है जो संसार के उल्टे प्रवाह (माया मोह) से हटकर अंतर्मुखी सत्य में स्थित हो जाता है।',
        pb: 'ਸੰਤ ਉਹੀ ਗਿਆਨੀ ਹੈ ਜੋ ਸੰਸਾਰ ਦੇ ਉਲਟੇ ਵਹਾਅ ਤੋਂ ਹਟ ਕੇ ਅੰਤਰਮੁਖੀ ਸੱਚ ਵਿੱਚ ਸਥਿਰ ਹੋ ਜਾਂਦਾ ਹੈ।',
        en: 'The true mystic is one who reverses worldly outward flows into inner stillness.',
      },
      parakhiInsight: {
        hi: 'कबीर उलटबांसी के प्रथम और सर्वाधिक प्रसिद्ध पद के रूप में यह अज्ञान से ज्ञान की ओर उलटने की घोषणा करता है।',
        pb: 'ਉਲਟਬਾਂਸੀ ਦਾ ਇਹ ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ ਪਦ ਅਗਿਆਨ ਤੋਂ ਗਿਆਨ ਵੱਲ ਮੁੜਨ ਦਾ ਐਲਾਨ ਹੈ।',
        en: 'As the quintessential Ulatvasi verse, it announces the reversal from ignorance to illumination.',
      },
    },
    wisdomPoints: 100,
  },
  {
    id: 'ub-2',
    number: 2,
    realm: 'kautuhal',
    realmTitle: { hi: 'कौतूहल (Curiosity)', pb: 'ਕੌਤਕ (Curiosity)', en: 'Curiosity' },
    title: { hi: '2. नदिया डूबी लोटा, मछली चढ़ी खजूर', pb: '2. ਨਦੀਆ ਡੂਬੀ ਲੋਟਾ, ਮੱਛੀ ਚੜ੍ਹੀ ਖਜੂਰ', en: '2. River Drowns in Pot, Fish Climbs Palm' },
    verse: {
      hi: '"एक अचम्भा देखा रे भाई, मरे बैल कूं धरी उठाई। पानी के बीच अगनि जलाई, बिन बादर झड़ लागी भाई। नदिया डूबी लोटा माहीं, मछली चढ़ी खजूरा। कहे कबीर सुनो रे संतो, बिन जल भरिया पूरा॥"',
      pb: '"ਇਕ ਅਚੰਭਾ ਦੇਖਿਆ ਰੇ ਭਾਈ, ਮਰੇ ਬੈਲ ਕੂੰ ਧਰੀ ਉਠਾਈ। ਪਾਣੀ ਕੇ ਬੀਚ ਅਗਨਿ ਜਲਾਈ... ਨਦੀਆ ਡੂਬੀ ਲੋਟਾ ਮਾਹੀਂ, ਮੱਛੀ ਚੜ੍ਹੀ ਖਜੂਰਾ॥"',
      en: '"Saw a wonder, oh brother: dead ox lifted earth, fire lit inside water, river drowned inside a tiny pot, fish climbed palm tree..."',
    },
    literalParadox: {
      hi: 'एक छोटे से लोटे में पूरी विशाल नदी डूब गई, और जल की मछली ऊँचे खजूर के पेड़ पर चढ़ गई।',
      pb: 'ਇੱਕ ਛੋਟੇ ਜਿਹੇ ਲੋਟੇ ਵਿੱਚ ਪੂਰੀ ਨਦੀ ਡੁੱਬ ਗਈ ਅਤੇ ਮੱਛੀ ਖਜੂਰ ਦੇ ਦਰੱਖਤ ਉੱਤੇ ਚੜ੍ਹ ਗਈ।',
      en: 'An entire river drowned inside a small pot, and a fish climbed up a date palm tree.',
    },
    clueHint: {
      hi: 'लोटा मनुष्य का सीमित शरीर (घट) है और नदी अनंत मन की कामनाएं। खजूर ऊँचा शिखर (सुषुम्ना/सहस्रार) है।',
      pb: 'ਲੋਟਾ ਮਨੁੱਖ ਦਾ ਸਰੀਰ ਹੈ ਅਤੇ ਨਦੀ ਮਨ ਦੀਆਂ ਲਹਿਰਾਂ। ਖਜੂਰ ਉੱਚਾ ਅਧਿਆਤਮਕ ਸਿਖਰ ਹੈ।',
      en: 'Pot is the finite human body, River is infinite mind desires, and Palm tree is the highest spiritual summit.',
    },
    symbols: [
      { symbol: 'लोटा (Small Pot)', meaning: { hi: 'सीमित मानवीय काया (पिंड/शरीर)', pb: 'ਮਨੁੱਖੀ ਸਰੀਰ / ਹਿਰਦਾ ਘਟ', en: 'Human Body / Heart Vessel' } },
      { symbol: 'नदिया (River)', meaning: { hi: 'संसार सागर व अथाह विचार-प्रवाह', pb: 'ਸੰਸਾਰ ਸਾਗਰ / ਮਨ ਦੀਆਂ ਲਹਿਰਾਂ', en: 'Ocean of Thoughts & World' } },
      { symbol: 'मछली (Fish)', meaning: { hi: 'प्राण वायु / सुरति (चेतना)', pb: 'ਪ੍ਰਾਣ ਵਾਯੂ / ਸੁਰਤਿ', en: 'Vital Life Force / Consciousness' } },
      { symbol: 'खजूर (Palm Tree)', meaning: { hi: 'गगन मंडल / ब्रह्मरंध्र का ऊँचा शिखर', pb: 'ਗਗਨ ਮੰਡਲ / ਦਸਮ ਦੁਆਰ', en: 'Crown Center / Tenth Gate' } },
    ],
    question: {
      hi: '"मछली चढ़ी खजूरा" में खजूर के पेड़ पर चढ़ने वाली मछली किस आध्यात्मिक अनुभव का प्रतीक है?',
      pb: '"ਮੱਛੀ ਚੜ੍ਹੀ ਖਜੂਰਾ" ਵਿੱਚ ਮੱਛੀ ਕਿਸ ਅਧਿਆਤਮਕ ਅਨੁਭਵ ਦਾ ਪ੍ਰਤੀਕ ਹੈ?',
      en: 'In "Fish climbs the palm tree", what spiritual experience does the fish signify?',
    },
    options: {
      hi: [
        'साधक की चेतना (सुरति) का इंद्रियों के प्रवाह से ऊपर उठकर ब्रह्मरंध्र (सहस्रार) में स्थिर होना',
        'मछली का प्यास लगने पर पेड़ से फल तोड़ना',
        'समुद्र में बहुत ऊँची सुनामी लहर आना',
        'मिट्टी के बर्तन में पानी उबालना',
      ],
      pb: [
        'ਸਾਧਕ ਦੀ ਸੁਰਤਿ ਦਾ ਇੰਦਰੀਆਂ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਦਸਮ ਦੁਆਰ ਵਿੱਚ ਸਥਿਰ ਹੋਣਾ',
        'ਮੱਛੀ ਦਾ ਦਰੱਖਤ ਤੋਂ ਫਲ ਤੋੜਨਾ',
        'ਸਮੁੰਦਰ ਵਿੱਚ ਉੱਚੀ ਲਹਿਰ ਆਉਣਾ',
        'ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ ਵਿੱਚ ਪਾਣੀ ਗਰਮ ਕਰਨਾ',
      ],
      en: [
        'Ascent of consciousness (Surati) rising above senses to stabilize in the Tenth Gate (Sahasrara)',
        'A fish climbing up to eat date fruits',
        'A massive tsunami wave in the ocean',
        'Boiling river water in a clay vessel',
      ],
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'पिंड में ब्रह्मांड और प्राण-योग', pb: 'ਸਰੀਰ ਵਿੱਚ ਬ੍ਰਹਿਮੰਡ ਅਤੇ ਪ੍ਰਾਣ ਯੋਗ', en: 'Cosmos within Body & Ascent of Consciousness' },
      deepMeaning: {
        hi: 'मन की विराट नदी जब आत्म-संयम के छोटे घट (लोटे) में समाहित हो जाती है, तब साधक की सुरति रूपी मछली अधोगामी इंद्रियों से ऊपर उठकर मेरुदंड के शिखर (खजूर) पर पहुँच जाती है।',
        pb: 'ਜਦੋਂ ਮਨ ਦੀ ਵਿਸ਼ਾਲ ਨਦੀ ਸਰੀਰ ਰੂਪੀ ਛੋਟੇ ਘਟ ਵਿੱਚ ਸਿਮਟ ਜਾਂਦੀ ਹੈ, ਤਦ ਸੁਰਤਿ ਰੂਪੀ ਮੱਛੀ ਉੱਚੇ ਦਸਮ ਦੁਆਰ (ਖਜੂਰ) ਤੇ ਜਾ ਟਿਕਦੀ ਹੈ।',
        en: 'When the vast river of thoughts dissolves into the quiet inner heart (pot), consciousness ascends the spinal axis to the highest crown summit (palm tree).',
      },
      kabirPhilosophy: {
        hi: 'सारे ब्रह्मांड का रहस्य मनुष्य के इसी घट के भीतर निहित है; इसे बाहर खोजने की आवश्यकता नहीं।',
        pb: 'ਸਾਰੇ ਬ੍ਰਹਿਮੰਡ ਦਾ ਭੇਦ ਇਸੇ ਸਰੀਰ ਅੰਦਰ ਹੈ; ਬਾਹਰ ਭਟਕਣ ਦੀ ਲੋੜ ਨਹੀਂ।',
        en: 'The mystery of the entire cosmos resides inside this very human body.',
      },
      parakhiInsight: {
        hi: 'यह पद कुंडलिनी, सुरति-शब्द योग और आंतरिक नाद के गूढ़ अनुभवों की ओर संकेत करता है।',
        pb: 'ਇਹ ਪਦ ਸੁਰਤਿ-ਸ਼ਬਦ ਯੋਗ ਅਤੇ ਅੰਦਰੂਨੀ ਨਾਦ ਦੇ ਗੂੜ੍ਹ ਅਨੁਭਵਾਂ ਦਾ ਸੰਕੇਤ ਹੈ।',
        en: 'This verse points directly to the inner yoga of consciousness ascending beyond sensory gravity.',
      },
    },
    wisdomPoints: 100,
  },
  {
    id: 'ub-3',
    number: 3,
    realm: 'kautuhal',
    realmTitle: { hi: 'कौतूहल (Curiosity)', pb: 'ਕੌਤਕ (Curiosity)', en: 'Curiosity' },
    title: { hi: '3. बिन पग चले, बिन कर नाचे', pb: '3. ਬਿਨ ਪਗ ਚਲੇ, ਬਿਨ ਕਰ ਨਾਚੇ', en: '3. Walks Without Feet, Dances Without Hands' },
    verse: {
      hi: '"बिन पग चलै, सुनै बिन काना। कर बिनु करम करै बिधि नाना॥ आनन रहित सकल रस भोगी। बिनु बाणी बकता बड़ जोगी॥"',
      pb: '"ਬਿਨ ਪਗ ਚਲੈ, ਸੁਨੈ ਬਿਨ ਕਾਨਾ। ਕਰ ਬਿਨੁ ਕਰਮ ਕਰੈ ਬਿਧਿ ਨਾਨਾ॥"',
      en: '"Walks without feet, hears without ears, performs countless deeds without hands..."',
    },
    literalParadox: {
      hi: 'पैरों के बिना चलता है, कानों के बिना सुनता है, बिना हाथों के कार्य करता है और बिना मुँह के श्रेष्ठ वक्ता है।',
      pb: 'ਪੈਰਾਂ ਤੋਂ ਬਿਨਾਂ ਤੁਰਦਾ ਹੈ, ਕੰਨਾਂ ਤੋਂ ਬਿਨਾਂ ਸੁਣਦਾ ਹੈ ਅਤੇ ਹੱਥਾਂ ਤੋਂ ਬਿਨਾਂ ਕੰਮ ਕਰਦਾ ਹੈ।',
      en: 'Moves without feet, hears without ears, works without hands and speaks without mouth.',
    },
    clueHint: {
      hi: 'यह निराकार परम सत्ता (सत्यपुरुष/सतनाम) का वर्णन है जो बिना भौतिक इंद्रियों के सर्वव्यापी है।',
      pb: 'ਇਹ ਨਿਰਾਕਾਰ ਪਰਮ ਸੱਤਾ (ਸਤਪੁਰਸ਼) ਦਾ ਵਰਣਨ ਹੈ ਜੋ ਬਿਨਾਂ ਸਰੀਰਕ ਅੰਗਾਂ ਦੇ ਸਰਬ-ਵਿਆਪਕ ਹੈ।',
      en: 'Describes the Formless Supreme Being who is omnipresent beyond physical organs.',
    },
    symbols: [
      { symbol: 'बिन पग / बिन काना (Without Feet / Ears)', meaning: { hi: 'निराकार, सर्वव्यापी परमात्मा', pb: 'ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ', en: 'Formless Omnipresent God' } },
      { symbol: 'बिनु बाणी बकता (Speaker without Voice)', meaning: { hi: 'अनाहत नाद / मौन अंतर्ज्ञान', pb: 'ਅਨਹਦ ਨਾਦ / ਅੰਤਰ-ਗਿਆਨ', en: 'Unstruck Sound / Silent Wisdom' } },
    ],
    question: {
      hi: '"बिन पग चलै, सुनै बिन काना" पद किस परम सत्ता की ओर संकेत करता है?',
      pb: '"ਬਿਨ ਪਗ ਚਲੈ, ਸੁਨੈ ਬਿਨ ਕਾਨਾ" ਪਦ ਕਿਸ ਪਰਮ ਸੱਤਾ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ?',
      en: 'To which Supreme Reality does "Walks without feet, hears without ears" refer?',
    },
    options: {
      hi: [
        'निराकार, इंद्रियातीत परम सत्य (सत्यपुरुष / निर्गुण राम)',
        'कोई अदृश्य जादुई व्यक्ति',
        'यांत्रिक रोबोट या मशीन',
        'स्वप्न में दिखाई देने वाली छाया',
      ],
      pb: [
        'ਨਿਰਾਕਾਰ, ਇੰਦਰੀਆਂ ਤੋਂ ਪਰੇ ਪਰਮ ਸੱਚ (ਸਤਪੁਰਸ਼ / ਨਿਰਗੁਣ ਰਾਮ)',
        'ਕੋਈ ਅਦਿੱਖ ਜਾਦੂਗਰ',
        'ਮਸ਼ੀਨੀ ਰੋਬੋਟ',
        'ਸੁਪਨੇ ਦਾ ਪਰਛਾਵਾਂ',
      ],
      en: [
        'The Formless, Transcendent Absolute Truth (Nirguna Satpurush)',
        'An invisible magician',
        'A mechanical machine',
        'A shadow seen in dreams',
      ],
    },
    correctIndex: 0,
    mysticalUnveiling: {
      headline: { hi: 'निराकार सत्ता का सर्वव्यापी स्वरूप', pb: 'ਨਿਰਾਕਾਰ ਸੱਤਾ ਦਾ ਸਰਬ-ਵਿਆਪਕ ਸਰੂਪ', en: 'Omnipresence of the Formless Absolute' },
      deepMeaning: {
        hi: 'इंद्रियाँ सीमित हैं और भौतिक शरीर नश्वर है, किंतु परमात्मा निराकार होते हुए भी प्रत्येक कण में गतिशील और चैतन्य है। उसे आँखों से नहीं, केवल आत्मिक बोध से जाना जाता है।',
        pb: 'ਇੰਦਰੀਆਂ ਸੀਮਤ ਹਨ ਪਰ ਪਰਮਾਤਮਾ ਨਿਰਾਕਾਰ ਹੁੰਦਿਆਂ ਵੀ ਹਰ ਕਣ ਵਿੱਚ ਮੌਜੂਦ ਅਤੇ ਚੇਤੰਨ ਹੈ।',
        en: 'Senses are finite, whereas the Supreme Spirit transcends physical limitation while remaining fully aware in every atom.',
      },
      kabirPhilosophy: {
        hi: 'जहाँ शब्द, मन और इंद्रियाँ थक जाती हैं, वहाँ से सत्यनाम का निराकार अनुभव आरंभ होता है।',
        pb: 'ਜਿੱਥੇ ਸ਼ਬਦ ਅਤੇ ਇੰਦਰੀਆਂ ਰੁਕ ਜਾਂਦੀਆਂ ਹਨ, ਉੱਥੋਂ ਸਤਿਨਾਮ ਦਾ ਨਿਰਾਕਾਰ ਅਨੁਭਵ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।',
        en: 'Where speech and senses stop, the formless experience of Satyanaam begins.',
      },
      parakhiInsight: {
        hi: 'यह पद निर्गुण भक्ति और अद्वैत दर्शन का सुंदर उदाहरण है।',
        pb: 'ਇਹ ਪਦ ਨਿਰਗੁਣ ਭਗਤੀ ਅਤੇ ਅਦ੍ਵੈਤ ਦਰਸ਼ਨ ਦੀ ਸੁੰਦਰ ਮਿਸਾਲ ਹੈ।',
        en: 'This verse exemplifies Nirguna Bhakti and non-dual realization.',
      },
    },
    wisdomPoints: 100,
  },
];

type BatchLoader = () => Promise<UlatvasiQuestion[]>;

const BATCH_LOADERS: BatchLoader[] = [
  () => import('./ulatvasiBatch4To30').then((m) => m.ULATVASI_BATCH_4_TO_30),
  () => import('./ulatvasiBatch31To45').then((m) => m.ULATVASI_BATCH_31_TO_45),
  () => import('./ulatvasiBatch46To60').then((m) => m.ULATVASI_BATCH_46_TO_60),
  () => import('./ulatvasiBatch61To70').then((m) => m.ULATVASI_BATCH_61_TO_70),
  () => import('./ulatvasiBatch71To80').then((m) => m.ULATVASI_BATCH_71_TO_80),
  () => import('./ulatvasiBatch81To90').then((m) => m.ULATVASI_BATCH_81_TO_90),
  () => import('./ulatvasiBatch91To100').then((m) => m.ULATVASI_BATCH_91_TO_100),
  () => import('./ulatvasiBatch101To110').then((m) => m.ULATVASI_BATCH_101_TO_110),
  () => import('./ulatvasiBatch111To120').then((m) => m.ULATVASI_BATCH_111_TO_120),
  () => import('./ulatvasiBatch121To130').then((m) => m.ULATVASI_BATCH_121_TO_130),
  () => import('./ulatvasiBatch131To140').then((m) => m.ULATVASI_BATCH_131_TO_140),
  () => import('./ulatvasiBatch141To150').then((m) => m.ULATVASI_BATCH_141_TO_150),
  () => import('./ulatvasiBatch151To160').then((m) => m.ULATVASI_BATCH_151_TO_160),
  () => import('./ulatvasiBatch161To170').then((m) => m.ULATVASI_BATCH_161_TO_170),
  () => import('./ulatvasiBatch171To180').then((m) => m.ULATVASI_BATCH_171_TO_180),
  () => import('./ulatvasiBatch181To190').then((m) => m.ULATVASI_BATCH_181_TO_190),
  () => import('./ulatvasiBatch191To200').then((m) => m.ULATVASI_BATCH_191_TO_200),
  () => import('./ulatvasiBatch201To210').then((m) => m.ULATVASI_BATCH_201_TO_210),
  () => import('./ulatvasiBatch211To220').then((m) => m.ULATVASI_BATCH_211_TO_220),
  () => import('./ulatvasiBatch221To230').then((m) => m.ULATVASI_BATCH_221_TO_230),
  () => import('./ulatvasiBatch231To240').then((m) => m.ULATVASI_BATCH_231_TO_240),
  () => import('./ulatvasiBatch241To250').then((m) => m.ULATVASI_BATCH_241_TO_250),
];

const loadedBatchesMap = new Map<number, UlatvasiQuestion[]>();
let allUlatvasiPromise: Promise<UlatvasiQuestion[]> | null = null;

export async function loadUlatvasiBatch(batchIndex: number): Promise<UlatvasiQuestion[]> {
  if (loadedBatchesMap.has(batchIndex)) {
    return loadedBatchesMap.get(batchIndex)!;
  }
  const loader = BATCH_LOADERS[batchIndex];
  if (!loader) return [];
  const data = await loader();
  loadedBatchesMap.set(batchIndex, data);
  return data;
}

export async function loadAllUlatvasiDatabase(): Promise<UlatvasiQuestion[]> {
  if (!allUlatvasiPromise) {
    allUlatvasiPromise = (async () => {
      const batches = await Promise.all(BATCH_LOADERS.map((_, i) => loadUlatvasiBatch(i)));
      const full = [...ULATVASI_CORE_QUESTIONS, ...batches.flat()];
      offlineScriptureCache
        .cacheOpenedChapter('ulatvasi:core-batch-0', batches[0] || [], 'Ulatvasi Initial Batch')
        .catch(() => {});
      return full;
    })();
  }
  return allUlatvasiPromise;
}

export const ULATVASI_DATABASE: UlatvasiQuestion[] = ULATVASI_CORE_QUESTIONS;
