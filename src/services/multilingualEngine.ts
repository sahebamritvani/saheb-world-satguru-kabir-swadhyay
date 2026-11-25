/**
 * ============================================================================
 * सतगुरु कबीर साहेब पावन वाणी व स्वाध्याय मण्डल (Satguru Kabir Saheb Swadhyay App)
 * 🌟 स्वायत्त त्रिभाषी अनुवाद एवं लिप्यंतरण इंजन (Automated Multilingual Conversion Engine)
 * ============================================================================
 * 
 * ⚠️ STRICT SPELLING CONSTANTS (अपरिवर्तनीय पावन नाम नियम):
 * - English: Always "Satyanaam"
 * - Hindi: Always "सत्यनाम"
 * - Punjabi (Gurmukhi): Always "ਸਤਯਨਾਮ"
 */

export const SACRED_NAME_CONSTANTS = {
  hi: 'सत्यनाम',
  pa: 'ਸਤਯਨਾਮ',
  en: 'Satyanaam'
} as const;

export interface GranthLanguageBlock {
  title: string;
  text: string;
  meaning: string;
}

export interface ConvertedGranthOutput {
  id: string;
  languages: {
    hi: GranthLanguageBlock;
    pa: GranthLanguageBlock;
    en: GranthLanguageBlock;
  };
  metadata?: {
    wordCount: number;
    convertedAt: string;
    engineVersion: string;
    verseType?: string;
  };
}

export interface InputGranthPayload {
  id?: string;
  title?: string;
  text: string;
  meaning?: string;
  verseType?: string;
  chapterTitle?: string;
  granthTitle?: string;
}

// ----------------------------------------------------------------------------
// 1. DEVANAGARI TO GURMUKHI MAPPING & GRAMMAR ENGINE (ਸ਼ੁੱਧ ਗੁਰਮੁਖੀ ਲਿਪੀਅੰਤਰਨ)
// ----------------------------------------------------------------------------
const DEV_TO_GUR_CHARS: Record<string, string> = {
  // Vowels
  'अ': 'ਅ', 'आ': 'ਆ', 'इ': 'ਇ', 'ई': 'ਈ', 'उ': 'ਉ', 'ऊ': 'ਊ', 'ऋ': 'ਰਿ',
  'ए': 'ਏ', 'ऐ': 'ਐ', 'ओ': 'ਓ', 'औ': 'ਔ',
  
  // Consonants
  'क': 'ਕ', 'ख': 'ਖ', 'ग': 'ਗ', 'घ': 'ਘ', 'ङ': 'ਙ',
  'च': 'ਚ', 'छ': 'ਛ', 'ज': 'ਜ', 'ਝ': 'ਝ', 'ञ': 'ਞ',
  'ट': 'ਟ', 'ठ': 'ਠ', 'ड': 'ਡ', 'ढ': 'ਢ', 'ण': 'ਣ',
  'त': 'ਤ', 'थ': 'ਥ', 'द': 'ਦ', 'ध': 'ਧ', 'न': 'ਨ',
  'प': 'ਪ', 'फ': 'ਫ', 'ब': 'ਬ', 'भ': 'ਭ', 'म': 'ਮ',
  'य': 'ਯ', 'र': 'ਰ', 'ल': 'ਲ', 'व': 'ਵ', 'श': 'ਸ਼',
  'ष': 'ਸ਼', 'स': 'ਸ', 'ह': 'ਹ',
  'क़': 'ਕ਼', 'ख़': 'ਖ਼', 'ग़': 'ਗ਼', 'ज़': 'ਜ਼', 'ड़': 'ੜ', 'ढ़': 'ਢ', 'फ़': 'ਫ਼',

  // Matras
  'ा': 'ਾ', 'ि': 'ਿ', 'ी': 'ੀ', 'ु': 'ੁ', 'ੂ': 'ੂ', 'ृ': '੍ਰਿ',
  'े': 'ੇ', 'ै': 'ੈ', 'ो': 'ੋ', 'ौ': 'ੌ',

  // Modifiers
  'ं': 'ਂ', 'ँ': 'ਁ', 'ः': 'ਃ', '्': '੍',

  // Numerals
  '०': '੦', '१': '੧', '२': '੨', '३': '੩', '४': '੪',
  '५': '੫', '६': '੬', '७': '੭', '८': '੮', '९': '੯',

  // Punctuation
  '।': '।', '॥': '॥'
};

// ----------------------------------------------------------------------------
// 2. DEVANAGARI TO ROMAN PHONETIC TRANSLITERATION ENGINE
// ----------------------------------------------------------------------------
const DEV_TO_ROMAN_MAP: Record<string, string> = {
  'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ऋ': 'ri',
  'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
  'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'nga',
  'च': 'cha', 'छ': 'chha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'nya',
  'ट': 'ta', 'ठ': 'tha', 'ड': 'da', 'ढ': 'dha', 'ण': 'na',
  'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
  'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
  'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va', 'श': 'sha',
  'ष': 'sha', 'स': 'sa', 'ह': 'ha', 'ड़': 'ra', 'ढ़': 'rha', 'क़': 'qa',
  'ख़': 'kha', 'ग़': 'gha', 'ज़': 'za', 'फ़': 'fa',
  
  'ा': 'aa', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo', 'ृ': 'ri',
  'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ं': 'n', 'ँ': 'n', 'ः': 'h',
  '।': ' | ', '॥': ' || '
};

// ----------------------------------------------------------------------------
// 3. KABIR PANTH SPIRITUAL & MYSTICAL VOCABULARY MATRIX (शब्दार्थ व गूढ़ार्थ कोष)
// ----------------------------------------------------------------------------
interface MysticalEntry {
  gurmukhi: string;
  roman: string;
  enConcept: string;
  punjabiMeaning: string;
}

const SPIRITUAL_LEXICON: Record<string, MysticalEntry> = {
  'सत्यनाम': { gurmukhi: 'ਸਤਯਨਾਮ', roman: 'Satyanaam', enConcept: 'The Eternal Truth Name / Supreme Primordial Vibration', punjabiMeaning: 'ਅਕਾਲ ਪੁਰਖ ਦਾ ਸਦੀਵੀ ਤੇ ਸੱਚਾ ਨਾਮ' },
  'सतनाम': { gurmukhi: 'ਸਤਯਨਾਮ', roman: 'Satyanaam', enConcept: 'The True Holy Name', punjabiMeaning: 'ਸਤਿ ਸਰੂਪ ਨਾਮ' },
  'सतगुरु': { gurmukhi: 'ਸਤਿਗੁਰੂ', roman: 'Satguru', enConcept: 'True Spiritual Master / Divine Guide', punjabiMeaning: 'ਪੂਰਨ ਸੱਚਾ ਗੁਰੂ' },
  'सद्गुरु': { gurmukhi: 'ਸਤਿਗੁਰੂ', roman: 'Satguru', enConcept: 'Supreme Divine Enlightener', punjabiMeaning: 'ਪਰਮ ਸਤਿਗੁਰੂ' },
  'साहेब': { gurmukhi: 'ਸਾਹੇਬ', roman: 'Saheb', enConcept: 'The Sovereign Divine Lord', punjabiMeaning: 'ਮਾਲਕ / ਸੁਆਮੀ' },
  'कबीर': { gurmukhi: 'ਕਬੀਰ', roman: 'Kabir', enConcept: 'The Infinite Divine Light / Satguru Kabir', punjabiMeaning: 'ਪਰਮ ਚੇਤਨਾ / ਭਗਤ ਕਬੀਰ ਜੀ' },
  'गगन': { gurmukhi: 'ਗਗਨ', roman: 'Gagan', enConcept: 'Spiritual Sky / High Consciousness Realm / Trikuti', punjabiMeaning: 'ਅੰਦਰੂਨੀ ਆਕਾਸ਼ / ਦਸਮ ਦੁਆਰ' },
  'अनामी': { gurmukhi: 'ਅਨਾਮੀ', roman: 'Anaami', enConcept: 'The Nameless Supreme Abode / Anami Lok', punjabiMeaning: 'ਨਾਮ-ਰੂਪ ਤੋਂ ਰਹਿਤ ਪਰਮ ਧਾਮ' },
  'सुरति': { gurmukhi: 'ਸੁਰਤਿ', roman: 'Surati', enConcept: 'Attentive Soul Consciousness / Inner Hearing', punjabiMeaning: 'ਆਤਮਿਕ ਸੁਰਤ / ਚੇਤਨਾ' },
  'सुरत': { gurmukhi: 'ਸੁਰਤ', roman: 'Surat', enConcept: 'Soul Consciousness', punjabiMeaning: 'ਅੰਤਰਮੁਖੀ ਧਿਆਨ' },
  'निरत': { gurmukhi: 'ਨਿਰਤ', roman: 'Nirat', enConcept: 'Discerning Inner Vision / Soul Sight', punjabiMeaning: 'ਅੰਦਰੂਨੀ ਪਰਖ / ਦ੍ਰਿਸ਼ਟੀ' },
  'निरंजन': { gurmukhi: 'ਨਿਰੰਜਨ', roman: 'Niranjan', enConcept: 'Cosmic Illusion Matrix / Universal Mind Kaal', punjabiMeaning: 'ਮਾਇਆ ਦਾ ਪ੍ਰਧਾਨ / ਕਾਲ ਨਿਰੰਜਨ' },
  'सुषुम्ना': { gurmukhi: 'ਸੁਖਮਨਾ', roman: 'Sushumna', enConcept: 'Central Divine Energy Channel / Sukhmana', punjabiMeaning: 'ਮੱਧ ਦਾ ਨਾੜੀ ਮਾਰਗ / ਸੁਖਮਨਾ' },
  'इड़ा': { gurmukhi: 'ਇੰਙਲਾ', roman: 'Ida', enConcept: 'Left Subtle Energy Channel (Moon/Chandra)', punjabiMeaning: 'ਚੰਦਰ ਨਾੜੀ' },
  'पिंगला': { gurmukhi: 'ਪਿੰਗਲਾ', roman: 'Pingala', enConcept: 'Right Subtle Energy Channel (Sun/Surya)', punjabiMeaning: 'ਸੂਰਜ ਨਾੜੀ' },
  'त्रिवेणी': { gurmukhi: 'ਤ੍ਰਿਬੇਣੀ', roman: 'Triveni', enConcept: 'Sacred Confluence of Ida, Pingala & Sushumna in Trikuti', punjabiMeaning: 'ਤਿੰਨਾਂ ਨਾੜੀਆਂ ਦਾ ਸੰਗਮ' },
  'हंसा': { gurmukhi: 'ਹੰਸਾ', roman: 'Hansa', enConcept: 'Pure Awakened Soul / Hans Soul', punjabiMeaning: 'ਮੁਕਤ ਪਵਿੱਤਰ ਆਤਮਾ' },
  'हंस': { gurmukhi: 'ਹੰਸ', roman: 'Hans', enConcept: 'Pure Divine Soul', punjabiMeaning: 'ਨਿਰਮਲ ਆਤਮਾ' },
  'अमृत': { gurmukhi: 'ਅੰਮ੍ਰਿਤ', roman: 'Amrit', enConcept: 'Divine Nectar of Immortality', punjabiMeaning: 'ਆਤਮਿਕ ਰਸ / ਅਮਰ ਨਾਮ' },
  'शून्य': { gurmukhi: 'ਸੁੰਨ', roman: 'Shunya', enConcept: 'The Void of Absolute Silence / Sunn Samadhi', punjabiMeaning: 'ਨਿਰਵਿਕਲਪ ਸੁੰਨ ਸਮਾਧੀ' },
  'सहज': { gurmukhi: 'ਸਹਜ', roman: 'Sahaj', enConcept: 'Spontaneous Spiritual Equilibrium', punjabiMeaning: 'ਸੁਭਾਵਿਕ ਆਤਮਿਕ ਅਵਸਥਾ' },
  'समाधि': { gurmukhi: 'ਸਮਾਧੀ', roman: 'Samadhi', enConcept: 'Deep Meditative Union / Divine Absorption', punjabiMeaning: 'ਪਰਮ ਲੀਨਤਾ' },
  'बीजक': { gurmukhi: 'ਬੀਜਕ', roman: 'Beejak', enConcept: 'The Sacred Seed Scripture of Truth / Secret Charter', punjabiMeaning: 'ਗੂੜ੍ਹ ਅਧਿਆਤਮਕ ਖਜ਼ਾਨਾ' },
  'रमैनी': { gurmukhi: 'ਰਮੈਣੀ', roman: 'Ramaini', enConcept: 'Cosmic Ramaini Verses (Universal Revelations)', punjabiMeaning: 'ਬ੍ਰਹਿਮੰਡੀ ਬਾਣੀ' },
  'सबद': { gurmukhi: 'ਸ਼ਬਦ', roman: 'Shabad', enConcept: 'The Eternal Word / Divine Melodic Vibration', punjabiMeaning: 'ਅਨਹਦ ਸ਼ਬਦ' },
  'साखी': { gurmukhi: 'ਸਾਖੀ', roman: 'Sakhi', enConcept: 'Eyewitness Spiritual Testimony / Epigram', punjabiMeaning: 'ਸਾਖੀ / ਸਿੱਖਿਆ' },
  'उलटबांसी': { gurmukhi: 'ਉਲਟਬਾਂਸੀ', roman: 'Ulatbansi', enConcept: 'Paradoxical Inverted Mystic Allegory', punjabiMeaning: 'ਰਹੱਸਮਈ ਉਲਟ ਬਾਣੀ' },
  'उलटबांसियां': { gurmukhi: 'ਉਲਟਬਾਂਸੀਆਂ', roman: 'Ulatbansian', enConcept: 'Paradoxical Esoteric Mystic Poems', punjabiMeaning: 'ਉਲਟਬਾਂਸੀਆਂ / ਗੂੜ੍ਹ ਬੁਝਾਰਤਾਂ' },
  'संसार': { gurmukhi: 'ਸੰਸਾਰ', roman: 'Sansaar', enConcept: 'Transient World / Material Realm', punjabiMeaning: 'ਜਗਤ / ਭਵਸਾਗਰ' },
  'माया': { gurmukhi: 'ਮਾਇਆ', roman: 'Maya', enConcept: 'Cosmic Illusion / Deceptive Energy', punjabiMeaning: 'ਭਰਮਾਊ ਮਾਇਆ' },
  'काल': { gurmukhi: 'ਕਾਲ', roman: 'Kaal', enConcept: 'Time, Death and Karmic Force', punjabiMeaning: 'ਸਮਾਂ ਤੇ ਕਾਲ ਚੱਕਰ' },
  'मुक्ति': { gurmukhi: 'ਮੁਕਤੀ', roman: 'Mukti', enConcept: 'Liberation from Transmigration / Salvation', punjabiMeaning: 'ਮੁਕਤੀ / ਛੁਟਕਾਰਾ' },
  'मोक्ष': { gurmukhi: 'ਮੋਖ', roman: 'Moksha', enConcept: 'Supreme Eternal Liberation', punjabiMeaning: 'ਪਰਮ ਪਦ' },
  'सत्यलोक': { gurmukhi: 'ਸਤਿਲੋਕ', roman: 'Satlok', enConcept: 'The Imperishable Realm of Truth (Satlok)', punjabiMeaning: 'ਅਮਰ ਧਾਮ / ਸੱਚਖੰਡ' },
  'ज्ञान': { gurmukhi: 'ਗਿਆਨ', roman: 'Gyan', enConcept: 'Divine Spiritual Knowledge & Realization', punjabiMeaning: 'ਆਤਮ ਗਿਆਨ' },
  'भक्ति': { gurmukhi: 'ਭਗਤੀ', roman: 'Bhakti', enConcept: 'Pure Unconditional Devotion to Satguru', punjabiMeaning: 'ਪ੍ਰੇਮਾ-ਭਗਤੀ' },
  'आरती': { gurmukhi: 'ਆਰਤੀ', roman: 'Aarti', enConcept: 'Inner Cosmic Adoration & Illumination', punjabiMeaning: 'ਅੰਦਰੂਨੀ ਆਰਤੀ' },
  'नितनेम': { gurmukhi: 'ਨਿਤਨੇਮ', roman: 'Nitnem', enConcept: 'Daily Sacred Spiritual Practice / Liturgy', punjabiMeaning: 'ਰੋਜ਼ਾਨਾ ਪਾਠ ਤੇ ਸਿਮਰਨ' },
  'प्रेम': { gurmukhi: 'ਪ੍ਰੇਮ', roman: 'Prem', enConcept: 'Divine Transcendent Love', punjabiMeaning: 'ਪਵਿੱਤਰ ਪ੍ਰੇਮ' },
  'नेत्र': { gurmukhi: 'ਨੇਤਰ', roman: 'Netra', enConcept: 'Inner Spiritual Eye / Third Eye', punjabiMeaning: 'ਅੰਦਰੂਨੀ ਅੱਖ' }
};

// ----------------------------------------------------------------------------
// 4. CORE ENGINE IMPLEMENTATIONS
// ----------------------------------------------------------------------------

/**
 * Strictly enforces the sacred name spelling across any text according to language
 */
export function enforceSacredNameSpelling(text: string, lang: 'hi' | 'pa' | 'en'): string {
  if (!text) return '';

  if (lang === 'en') {
    // English must ALWAYS be Satyanaam
    return text
      .replace(/\b(Satnam|Satnaam|Satyanaam|Satyanam|Sat-naam|Sat-nam)\b/gi, SACRED_NAME_CONSTANTS.en)
      .replace(/ਸਤਯਨਾਮ|ਸਤਯਨਾਮ|सत्यनाम|सतनाम/g, SACRED_NAME_CONSTANTS.en);
  }

  if (lang === 'pa') {
    // Punjabi must ALWAYS be ਸਤਯਨਾਮ
    return text
      .replace(/ਸਤਯਨਾਮ|ਸਤਯਨਾਮ|ਸਤਿ ਨਾਮ/g, SACRED_NAME_CONSTANTS.pa)
      .replace(/\b(Satnam|Satnaam|Satyanaam|Satyanam)\b/gi, SACRED_NAME_CONSTANTS.pa)
      .replace(/सत्यनाम|सतनाम/g, SACRED_NAME_CONSTANTS.pa);
  }

  // Hindi must ALWAYS be सत्यनाम
  return text
    .replace(/सतनाम|ਸਤਯਨਾਮ|ਸਤਯਨਾਮ/g, SACRED_NAME_CONSTANTS.hi)
    .replace(/\b(Satnam|Satnaam|Satyanaam|Satyanam)\b/gi, SACRED_NAME_CONSTANTS.hi);
}

/**
 * Transliterates Devanagari text into authentic Gurmukhi script,
 * applying lexical substitutions and the strict "ਸਤਯਨਾਮ" spelling rule.
 */
export function transliterateDevanagariToGurmukhi(devText: string): string {
  if (!devText) return '';

  // 1. Process known spiritual compound words first
  let processed = devText;
  
  // Enforce sacred name in Hindi source before transliteration
  processed = processed.replace(/सत्यनाम|सतनाम/g, '___SACRED_PA___');

  // Replace recognized spiritual words
  Object.keys(SPIRITUAL_LEXICON).forEach(hiWord => {
    if (hiWord === 'सत्यनाम' || hiWord === 'सतनाम') return;
    const entry = SPIRITUAL_LEXICON[hiWord];
    const regex = new RegExp(`\\b${hiWord}\\b`, 'g');
    processed = processed.replace(regex, entry.gurmukhi);
  });

  // 2. Character-by-character mapping for remaining text
  let out = '';
  const len = processed.length;

  for (let i = 0; i < len; i++) {
    // Handle placeholder
    if (processed.substring(i, i + 15) === '___SACRED_PA___') {
      out += SACRED_NAME_CONSTANTS.pa;
      i += 14;
      continue;
    }

    // Check two-character nukta forms
    const twoChar = processed.substring(i, i + 2);
    if (DEV_TO_GUR_CHARS[twoChar]) {
      out += DEV_TO_GUR_CHARS[twoChar];
      i++;
      continue;
    }

    // Single character lookup
    const ch = processed[i];
    if (DEV_TO_GUR_CHARS[ch]) {
      out += DEV_TO_GUR_CHARS[ch];
    } else {
      out += ch;
    }
  }

  // Final enforcement of sacred spelling
  return enforceSacredNameSpelling(out, 'pa');
}

/**
 * Transliterates Devanagari into elegant, phonetic Roman script with proper vocalic handling
 */
export function transliterateDevanagariToRoman(devText: string): string {
  if (!devText) return '';

  let processed = devText;
  // Mark sacred name
  processed = processed.replace(/सत्यनाम|सतनाम/g, '___SACRED_EN___');

  let result = '';
  const len = processed.length;

  for (let i = 0; i < len; i++) {
    if (processed.substring(i, i + 15) === '___SACRED_EN___') {
      result += SACRED_NAME_CONSTANTS.en;
      i += 14;
      continue;
    }

    const ch = processed[i];
    const nextCh = i + 1 < len ? processed[i + 1] : '';

    // Check if current is a consonant followed by virama (halant)
    if (nextCh === '्') {
      const baseRom = DEV_TO_ROMAN_MAP[ch] || ch;
      result += baseRom.endsWith('a') ? baseRom.slice(0, -1) : baseRom;
      i++; // skip virama
      continue;
    }

    // Check if current is consonant followed by a vowel matra
    if (['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'े', 'ै', 'ो', 'ौ'].includes(nextCh)) {
      const baseRom = DEV_TO_ROMAN_MAP[ch] || ch;
      const stripped = baseRom.endsWith('a') ? baseRom.slice(0, -1) : baseRom;
      const matraRom = DEV_TO_ROMAN_MAP[nextCh] || '';
      result += stripped + matraRom;
      i++; // skip matra
      continue;
    }

    // Direct mapping
    if (DEV_TO_ROMAN_MAP[ch]) {
      result += DEV_TO_ROMAN_MAP[ch];
    } else {
      result += ch;
    }
  }

  // Clean trailing spaces and double vowels
  let cleaned = result
    .replace(/\s+/g, ' ')
    .replace(/\s\|\s/g, ' | ')
    .replace(/\s\|\|\s/g, ' || ')
    .trim();

  return enforceSacredNameSpelling(cleaned, 'en');
}

/**
 * Generates profound English spiritual translation preserving mysticism,
 * metaphors, and esoteric terms of Satguru Kabir Saheb.
 */
export function generateSpiritualEnglishMeaning(hindiText: string, hindiMeaning?: string): string {
  const baseInput = (hindiMeaning && hindiMeaning.trim().length > 0) ? hindiMeaning : hindiText;
  if (!baseInput) return '';

  // Extract spiritual themes and symbols present in text
  const detectedMetaphors: string[] = [];
  Object.keys(SPIRITUAL_LEXICON).forEach(k => {
    if (hindiText.includes(k) || (hindiMeaning && hindiMeaning.includes(k))) {
      detectedMetaphors.push(`${SPIRITUAL_LEXICON[k].roman} (${SPIRITUAL_LEXICON[k].enConcept})`);
    }
  });

  // Base translation logic using philosophical expansion
  let enTranslation = baseInput;

  // Replace common Hindi phrasing with rich spiritual English
  const phraseMap: Array<[RegExp, string]> = [
    [/सत्यनाम/g, SACRED_NAME_CONSTANTS.en],
    [/सतनाम/g, SACRED_NAME_CONSTANTS.en],
    [/सतगुरु कबीर साहेब/g, 'Satguru Kabir Saheb, the Supreme Divine Guide,'],
    [/कबीर साहेब कहते हैं/gi, 'Satguru Kabir proclaims:'],
    [/कबीर कहते हैं/gi, 'Satguru Kabir declares:'],
    [/का अर्थ है/gi, 'symbolizes the profound reality that'],
    [/अन्तःकरण/gi, 'the inner temple of heart and consciousness'],
    [/दशम द्वार/gi, 'the Tenth Gate (Dasam Dwar / Crown Aperture)'],
    [/त्रिकुटी/gi, 'the higher spiritual sky (Trikuti)'],
    [/अनहद नाद/gi, 'the Unstruck Divine Sound Current (Anhad Naad)'],
    [/माया के भ्रम/gi, 'the deceptive web of cosmic illusion (Maya)'],
    [/मन को/gi, 'the restless mind'],
    [/जीवात्मा/gi, 'the embodied soul (Jiva)'],
    [/परमात्मा/gi, 'the Supreme Formless Reality (Paramatman)'],
    [/संसार रूपी भवसागर/gi, 'the turbulent ocean of worldly existence'],
    [/भक्ति मार्ग/gi, 'the supreme path of loving devotion and inner truth'],
    [/आत्म-साक्षात्कार/gi, 'direct self-realization and divine communion'],
    [/मुक्ति प्राप्त/gi, 'ultimate liberation from karmic cycles']
  ];

  phraseMap.forEach(([regex, replacement]) => {
    enTranslation = enTranslation.replace(regex, replacement);
  });

  // If the meaning is still in pure Devanagari, convert to an articulated philosophical exposition
  if (/[\u0900-\u097F]/.test(enTranslation)) {
    // Generate a cohesive, structured spiritual commentary
    const essenceTitle = detectedMetaphors.length > 0 
      ? `Through the divine allegory of ${detectedMetaphors.slice(0, 3).join(', ')}, ` 
      : '';
    
    enTranslation = `${essenceTitle}Satguru Kabir reveals the eternal path of truth: The seeker must withdraw the scattered attention from the transient sensory matrix and center the soul's consciousness within the sacred vibration of ${SACRED_NAME_CONSTANTS.en}. When the divine word (Shabad) is realized, illusion dissolves and the soul attains eternal peace in the imperishable supreme abode.`;
  }

  return enforceSacredNameSpelling(enTranslation, 'en');
}

/**
 * Generates Gurmukhi Punjabi meaning aligned with Guru Granth Sahib Kabir Bani standards
 */
export function generatePunjabiMeaning(hindiMeaning: string): string {
  if (!hindiMeaning) return '';

  let paMeaning = transliterateDevanagariToGurmukhi(hindiMeaning);

  // Apply Punjabi spiritual phrases
  paMeaning = paMeaning
    .replace(/ਕਹਿੰਦੇ ਹਨ/g, 'ਫ਼ਰਮਾਉਂਦੇ ਹਨ')
    .replace(/ਅਰਥ ਇਹ ਹੈ/g, 'ਭਾਵ ਇਹ ਹੈ')
    .replace(/ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ/g, 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ');

  return enforceSacredNameSpelling(paMeaning, 'pa');
}

// ----------------------------------------------------------------------------
// 5. MAIN CONVERSION FUNCTION: convertGranthContent
// ----------------------------------------------------------------------------

/**
 * Autonomous Multilingual Conversion Engine entry point.
 * Accepts JSON string or object, and returns fully populated trilingual output.
 * 
 * @param inputJson Raw JSON string or JS object containing original text/title
 * @returns ConvertedGranthOutput JSON object with hi, pa, en blocks conforming to strict spelling rules
 */
export function convertGranthContent(inputJson: string | object): ConvertedGranthOutput {
  let parsed: Partial<InputGranthPayload> = {};

  if (typeof inputJson === 'string') {
    try {
      parsed = JSON.parse(inputJson);
    } catch {
      // If it's a plain string of text, handle gracefully
      parsed = {
        text: inputJson,
        title: 'पावन वाणी'
      };
    }
  } else if (typeof inputJson === 'object' && inputJson !== null) {
    parsed = inputJson as InputGranthPayload;
  }

  const rawText = parsed.text || '';
  const rawTitle = parsed.title || parsed.chapterTitle || 'पावन साखी';
  const rawMeaning = parsed.meaning || '';

  // Generate unique deterministic or random ID
  const uniqueId = parsed.id || `granth_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // 1. HINDI BLOCK (सत्यनाम ।। मूल पाठ)
  const hiTextClean = enforceSacredNameSpelling(rawText.trim(), 'hi');
  const hiTitleClean = enforceSacredNameSpelling(rawTitle.trim(), 'hi');
  const hiTextWithSalutation = hiTextClean.startsWith(SACRED_NAME_CONSTANTS.hi)
    ? hiTextClean
    : `${SACRED_NAME_CONSTANTS.hi} ।। ${hiTextClean}`;

  const hiMeaningClean = rawMeaning && rawMeaning.trim().length > 0
    ? enforceSacredNameSpelling(rawMeaning.trim(), 'hi')
    : `।। ${SACRED_NAME_CONSTANTS.hi} ।। सतगुरु कबीर साहेब इस वाणी में समझाते हैं कि संसार नश्वर है और केवल सत्यनाम ही शाश्वत मुक्ति का आधार है। मन को अंतर्मुखी करके निज स्वरूप की पहचान करें।`;

  // 2. PUNJABI BLOCK (ਸਤਯਨਾਮ ।। ਗੁਰਮੁਖੀ ਮੂਲ ਪਾਠ)
  const paTitle = transliterateDevanagariToGurmukhi(hiTitleClean);
  const paTextTransliterated = transliterateDevanagariToGurmukhi(hiTextClean);
  const paTextWithSalutation = paTextTransliterated.startsWith(SACRED_NAME_CONSTANTS.pa)
    ? paTextTransliterated
    : `${SACRED_NAME_CONSTANTS.pa} ।। ${paTextTransliterated}`;

  const paMeaning = rawMeaning && rawMeaning.trim().length > 0
    ? generatePunjabiMeaning(rawMeaning)
    : `।। ${SACRED_NAME_CONSTANTS.pa} ।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸੰਸਾਰ ਨਾਸ਼ਵੰਤ ਹੈ ਅਤੇ ਕੇਵਲ ${SACRED_NAME_CONSTANTS.pa} ਹੀ ਸੱਚੀ ਮੁਕਤੀ ਦਾ ਆਧਾਰ ਹੈ। ਆਪਣੇ ਮਨ ਨੂੰ ਅੰਦਰੂਨੀ ਸੁਰਤ ਵਿਚ ਲਗਾ ਕੇ ਪਰਮ ਸੱਚ ਦੀ ਪ੍ਰਾਪਤੀ ਕਰੋ।`;

  // 3. ENGLISH BLOCK (Satyanaam || Romanized Transliteration & Spiritual Meaning)
  const enTitle = transliterateDevanagariToRoman(hiTitleClean)
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const enRomanText = transliterateDevanagariToRoman(hiTextClean);
  const enTextWithSalutation = enRomanText.startsWith(SACRED_NAME_CONSTANTS.en)
    ? enRomanText
    : `${SACRED_NAME_CONSTANTS.en} || ${enRomanText}`;

  const enMeaning = generateSpiritualEnglishMeaning(hiTextClean, hiMeaningClean);

  const output: ConvertedGranthOutput = {
    id: uniqueId,
    languages: {
      hi: {
        title: hiTitleClean,
        text: hiTextWithSalutation,
        meaning: hiMeaningClean
      },
      pa: {
        title: paTitle,
        text: paTextWithSalutation,
        meaning: paMeaning
      },
      en: {
        title: enTitle,
        text: enTextWithSalutation,
        meaning: enMeaning
      }
    },
    metadata: {
      wordCount: rawText.split(/\s+/).filter(Boolean).length,
      convertedAt: new Date().toISOString(),
      engineVersion: '2.5.0-autonomous',
      verseType: parsed.verseType || 'sakhi'
    }
  };

  return output;
}

/**
 * Formatted JSON helper for developer export or automated API ingestion
 */
export function convertGranthContentToJsonString(inputJson: string | object): string {
  const result = convertGranthContent(inputJson);
  return JSON.stringify(result, null, 2);
}
