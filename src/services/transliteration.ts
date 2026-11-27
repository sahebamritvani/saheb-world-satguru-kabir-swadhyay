/**
 * Devanagari to Gurmukhi / Punjabi Transliteration & Word Converter
 * Provides authentic, rule-based phonetic mapping for Kabir Vani, Ulatbaansi, and Sant Bhasha.
 */

// Consonants and Vowels mapping from Devanagari to Gurmukhi
const DEV_TO_GUR_MAP: Record<string, string> = {
  // Vowels (Independent)
  'अ': 'ਅ',
  'आ': 'ਆ',
  'इ': 'ਇ',
  'ई': 'ਈ',
  'उ': 'ਉ',
  'ऊ': 'ਊ',
  'ऋ': 'ਰਿ',
  'ए': 'ਏ',
  'ऐ': 'ਐ',
  'ओ': 'ਓ',
  'औ': 'ਔ',
  
  // Consonants
  'क': 'ਕ',
  'ख': 'ਖ',
  'ग': 'ਗ',
  'घ': 'ਘ',
  'ङ': 'ਙ',
  'च': 'ਚ',
  'छ': 'ਛ',
  'ज': 'ਜ',
  'झ': 'ਝ',
  'ञ': 'ਞ',
  'ट': 'ਟ',
  'ठ': 'ਠ',
  'ड': 'ਡ',
  'ढ': 'ਢ',
  'ण': 'ਣ',
  'त': 'ਤ',
  'थ': 'ਥ',
  'द': 'ਦ',
  'ध': 'ਧ',
  'न': 'ਨ',
  'प': 'ਪ',
  'फ': 'ਫ',
  'ब': 'ਬ',
  'भ': 'ਭ',
  'म': 'ਮ',
  'य': 'ਯ',
  'र': 'ਰ',
  'ल': 'ਲ',
  'व': 'ਵ',
  'श': 'ਸ਼',
  'ष': 'ਸ਼',
  'स': 'ਸ',
  'ह': 'ਹ',
  'क़': 'ਕ਼',
  'ख़': 'ਖ਼',
  'ग़': 'ਗ਼',
  'ज़': 'ਜ਼',
  'ड़': 'ੜ',
  'ढ़': 'ਢ',
  'फ़': 'ਫ਼',

  // Dependent Matras
  'ा': 'ਾ',
  'ि': 'ਿ',
  'ी': 'ੀ',
  'ु': 'ੁ',
  'ू': 'ੂ',
  'ृ': '੍ਰਿ',
  'े': 'ੇ',
  'ै': 'ੈ',
  'ो': 'ੋ',
  'ौ': 'ੌ',

  // Modifiers
  'ं': 'ਂ',
  'ँ': 'ਁ',
  'ः': 'ਃ',
  '्': '੍',

  // Numerals
  '०': '੦',
  '१': '੧',
  '२': '੨',
  '३': '੩',
  '४': '੪',
  '५': '੫',
  '६': '੬',
  '७': '੭',
  '८': '੮',
  '९': '੯',

  // Punctuation
  '।': '।',
  '॥': '॥',
};

// Common Sant Bhasha word substitutions for refined Gurmukhi/Punjabi readability
const WORD_TRANSLATIONS: Record<string, string> = {
  'सत्यनाम': 'ਸਤਯਨਾਮ',
  'सतनाम': 'ਸਤਯਨਾਮ',
  'सद्गुरु': 'ਸਤਿਗੁਰੂ',
  'सतगुरु': 'ਸਤਿਗੁਰੂ',
  'कबीर': 'ਕਬੀਰ',
  'साहेब': 'ਸਾਹੇਬ',
  'साहिब': 'ਸਾਹਿਬ',
  'उलटबांसियां': 'ਉਲਟਬਾਂਸੀਆਂ',
  'उलटबांसी': 'ਉਲਟਬਾਂਸੀ',
  'उलटबांसियों': 'ਉਲਟਬਾਂਸੀਆਂ',
  'अद्भुत': 'ਅਦਭੁਤ',
  'रहस्यमयी': 'ਰਹੱਸਮਈ',
  'रचनाएं': 'ਰਚਨਾਵਾਂ',
  'रचना': 'ਰਚਨਾ',
  'दिखने': 'ਦਿਖਣ',
  'असंभव': 'ਅਸੰਭਵ',
  'उल्टी': 'ਉਲਟੀ',
  'प्रतीत': 'ਪ੍ਰਤੀਤ',
  'आध्यात्मिक': 'ਅਧਿਆਤਮਕ',
  'दार्शनिक': 'ਦਾਰਸ਼ਨਿਕ',
  'अर्थ': 'ਅਰਥ',
  'गहरा': 'ਡੂੰਘਾ',
  'गहरे': 'ਡੂੰਘੇ',
  'लोक-मानस': 'ਲੋਕ-ਮਾਨਸ',
  'आंतरिक': 'ਅੰਦਰੂਨੀ',
  'योग-साधना': 'ਯੋਗ-ਸਾਧਨਾ',
  'योग': 'ਯੋਗ',
  'साधना': 'ਸਾਧਨਾ',
  'समझाने': 'ਸਮਝਾਉਣ',
  'विशिष्ट': 'ਵਿਲੱਖਣ',
  'शैली': 'ਸ਼ੈਲੀ',
  'प्रयोग': 'ਵਰਤੋਂ',
  'पहेलियों': 'ਬੁਝਾਰਤਾਂ',
  'पहेली': 'ਬੁਝਾਰਤ',
  'माध्यम': 'ਜ਼ਰੀਏ',
  'संसार': 'ਸੰਸਾਰ',
  'सत्य': 'ਸੱਚ',
  'अंतर्मुखी': 'ਅੰਤਰਮੁਖੀ',
  'भक्ति': 'ਭਗਤੀ',
  'मार्ग': 'ਮਾਰਗ',
  'दिखाया': 'ਦਿਖਾਇਆ',
  'छिपा': 'ਛੁਪਿਆ',
  'प्रसिद्ध': 'ਪ੍ਰਸਿੱਧ',
  'अनूठे': 'ਅਨੋਖੇ',
  'अत्यंत': 'ਬਹੁਤ ਹੀ',
  'सरल': 'ਸਰਲ',
  'साधक': 'ਸਾਧਕ',
  'भीतर': 'ਅੰਦਰ',
  'झांकने': 'ਝਾਕਣ',
  'गूढ़': 'ਗੂੜ੍ਹ',
  'विस्मयकारी': 'ਹੈਰਾਨੀਜਨਕ',
  'रस': 'ਰਸ',
  'भरी': 'ਭਰੀਆਂ',
  'वास्तविक': 'ਅਸਲੀ',
  'यौगिक': 'ਯੌਗਿਕ',
  'चेतना': 'ਚੇਤਨਾ',
  'बोध': 'ਬੋਧ',
  'ज्ञान': 'ਗਿਆਨ',
  'गुरु': 'ਗੁਰੂ',
  'चेला': 'ਚੇਲਾ',
  'सिंह': 'ਸ਼ੇਰ',
  'गाई': 'ਗਊ',
  'गाय': 'ਗਾਂ',
  'मन': 'ਮਨ',
  'इंद्रियां': 'ਇੰਦਰੀਆਂ',
  'इन्द्रियाँ': 'ਇੰਦਰੀਆਂ',
  'अहंकार': 'ਹੰਕਾਰ',
  'आत्मा': 'ਆਤਮਾ',
  'परमात्मा': 'ਪਰਮਾਤਮਾ',
  'माया': 'ਮਾਇਆ',
  'जीव': 'ਜੀਵ'
};

/**
 * Transliterates Devanagari text to Gurmukhi script directly
 */
export function devanagariToGurmukhi(devText: string): string {
  if (!devText) return '';

  let result = '';
  const len = devText.length;

  for (let i = 0; i < len; i++) {
    const char = devText[i];
    const nextChar = i + 1 < len ? devText[i + 1] : '';

    // Handle Nukta combinations if any
    const combo = char + nextChar;
    if (DEV_TO_GUR_MAP[combo]) {
      result += DEV_TO_GUR_MAP[combo];
      i++;
      continue;
    }

    if (DEV_TO_GUR_MAP[char] !== undefined) {
      result += DEV_TO_GUR_MAP[char];
    } else {
      result += char;
    }
  }

  // Refine Gurmukhi specific orthography:
  // Convert ੍ਯ at end of ligature or standard word patterns if needed
  return result;
}

/**
 * Translates/Converts Hindi spiritual text into authentic Punjabi (Gurmukhi)
 * Word-to-word translation with fallback to phonetically accurate transliteration.
 */
export function hindiToPunjabiWordConverter(hindiText: string): string {
  if (!hindiText) return '';

  // Process word-by-word preserving spaces, punctuation, linebreaks
  const tokenRegex = /(\p{L}+|[^\p{L}]+)/gu;
  const tokens = hindiText.match(tokenRegex) || [hindiText];

  const convertedTokens = tokens.map((token) => {
    // Check if it's a word
    if (/^\p{L}+$/u.test(token)) {
      // Direct dictionary lookup
      if (WORD_TRANSLATIONS[token]) {
        return WORD_TRANSLATIONS[token];
      }
      // Lowercase check
      const lower = token.toLowerCase();
      if (WORD_TRANSLATIONS[lower]) {
        return WORD_TRANSLATIONS[lower];
      }
      // Phonetic transliteration to Gurmukhi
      return devanagariToGurmukhi(token);
    }
    // Return punctuation / spaces as is (transliterating danda if needed)
    return token.replace(/।/g, '।').replace(/॥/g, '॥');
  });

  return convertedTokens.join('');
}

/**
 * Provides comprehensive translation of the sacred Ulatbaansi introductory text
 * in Hindi, Punjabi (Gurmukhi), and English.
 */
export const SACRED_ULATBAANSI_DESCRIPTIONS = {
  hi: `।। सत्यनाम ।।
सतगुरु कबीर साहेब की उलटबांसियां (Ulatbansian) उनकी वो अद्भुत और रहस्यमयी रचनाएं हैं जो दिखने में बिल्कुल असंभव या उल्टी प्रतीत होती हैं, लेकिन उनका आध्यात्मिक और दार्शनिक अर्थ बहुत गहरा होता है। सतगुरु कबीर साहेब ने लोक-मानस को झकझोरने और आंतरिक योग-साधना को समझाने के लिए इस विशिष्ट शैली का प्रयोग किया था। सतगुरु कबीर साहेब ने इन पहेलियों के माध्यम से संसार को सत्य, योग और अंतर्मुखी भक्ति का मार्ग दिखाया है। सतगुरु कबीर साहेब की इन उलटबांसियों में अंतर्मुखी साधना का पूरा मार्ग छिपा है। यहाँ कबीर साहेब की कुछ बेहद प्रसिद्ध, अनूठे और अत्यंत रहस्यमयी उलटबांसियाँ (Ulatbansian) उनके आध्यात्मिक अर्थ के साथ सरल अर्थों में दी गई हैं, जो साधक को भीतर झांकने पर मजबूर कर देती हैं। सतगुरु कबीर की उलटबांसी अत्यंत गूढ़, विस्मयकारी और आध्यात्मिक रस से भरी उलटबांसियां (Ulatbansian) उनके वास्तविक यौगिक अर्थ और एक गहरी चेतना का बोध कराती हैं।`,

  pb: `।। ਸਤਯਨਾਮ ।।
ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ (Ulatbansian) ਉਨ੍ਹਾਂ ਦੀਆਂ ਉਹ ਅਦਭੁਤ ਅਤੇ ਰਹੱਸਮਈ ਰਚਨਾਵਾਂ ਹਨ ਜੋ ਦਿਖਣ ਵਿੱਚ ਬਿਲਕੁਲ ਅਸੰਭਵ ਜਾਂ ਉਲਟੀਆਂ ਪ੍ਰਤੀਤ ਹੁੰਦੀਆਂ ਹਨ, ਪਰ ਉਨ੍ਹਾਂ ਦਾ ਅਧਿਆਤਮਕ ਅਤੇ ਦਾਰਸ਼ਨਿਕ ਅਰਥ ਬਹੁਤ ਡੂੰਘਾ ਹੁੰਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਲੋਕ-ਮਾਨਸ ਨੂੰ ਝੰਜੋੜਨ ਅਤੇ ਅੰਦਰੂਨੀ ਯੋਗ-ਸਾਧਨਾ ਨੂੰ ਸਮਝਾਉਣ ਲਈ ਇਸ ਵਿਲੱਖਣ ਸ਼ੈਲੀ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਸੀ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਨ੍ਹਾਂ ਬੁਝਾਰਤਾਂ ਦੇ ਜ਼ਰੀਏ ਸੰਸਾਰ ਨੂੰ ਸੱਚ, ਯੋਗ ਅਤੇ ਅੰਤਰਮੁਖੀ ਭਗਤੀ ਦਾ ਮਾਰਗ ਦਿਖਾਇਆ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਇਨ੍ਹਾਂ ਉਲਟਬਾਂਸੀਆਂ ਵਿੱਚ ਅੰਤਰਮੁਖੀ ਸਾਧਨਾ ਦਾ ਪੂਰਾ ਮਾਰਗ ਛੁਪਿਆ ਹੋਇਆ ਹੈ। ਇੱਥੇ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਕੁਝ ਬਹੁਤ ਪ੍ਰਸਿੱਧ, ਅਨੋਖੀਆਂ ਅਤੇ ਬਹੁਤ ਹੀ ਰਹੱਸਮਈ ਉਲਟਬਾਂਸੀਆਂ (Ulatbansian) ਉਨ੍ਹਾਂ ਦੇ ਅਧਿਆਤਮਕ ਅਰਥ ਦੇ ਨਾਲ ਸਰਲ ਅਰਥਾਂ ਵਿੱਚ ਦਿੱਤੀਆਂ ਗਈਆਂ ਹਨ, ਜੋ ਸਾਧਕ ਨੂੰ ਅੰਦਰ ਝਾਕਣ ਲਈ ਮਜ਼ਬੂਰ ਕਰ ਦਿੰਦੀਆਂ ਹਨ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਉਲਟਬਾਂਸੀ ਬਹੁਤ ਗੂੜ੍ਹ, ਹੈਰਾਨੀਜਨਕ ਅਤੇ ਅਧਿਆਤਮਕ ਰਸ ਨਾਲ ਭਰੀਆਂ ਉਲਟਬਾਂਸੀਆਂ (Ulatbansian) ਉਨ੍ਹਾਂ ਦੇ ਅਸਲੀ ਯੌਗਿਕ ਅਰਥ ਅਤੇ ਇੱਕ ਡੂੰਘੀ ਚੇਤਨਾ ਦਾ ਬੋਧ ਕਰਵਾਉਂਦੀਆਂ ਹਨ।`,

  en: `।। Satyanaam ।।
Satguru Kabir Saheb's Ulatbansian (Esoteric Inversion Riddles) are his astonishing and mystical creations that appear completely impossible or inverted on the surface, but carry profound spiritual and philosophical truths. Satguru Kabir Saheb utilized this unique literary and yogic style to shake humanity awake and illuminate inner spiritual practices. Through these sacred enigmas, he revealed the path of Truth, Yoga, and internalized devotion. In these paradoxes lies the complete roadmap of inner contemplation. Here, Kabir Saheb's most celebrated, unique, and deeply esoteric Ulatbansian are presented in clear terms alongside their spiritual significance, compelling seekers to gaze within. These profound paradoxes awaken seekers to their authentic yogic essence and elevated supreme consciousness.`
};
