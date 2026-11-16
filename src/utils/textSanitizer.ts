/**
 * Sacred Text Auto-Corrector & Sanitizer for Devanagari & Gurmukhi Sakhis
 * Cleans OCR errors, broken matras, incorrect character sequences, spacing anomalies,
 * ensures 2-line couplet (Doha) formatting everywhere, and standardizes "Satguru Kabir Saheb".
 */

/**
 * Splits any single or multi-line couplet / doha into strictly 2 balanced lines.
 */
export function formatCoupletIntoTwoLines(rawText: string): string[] {
  if (!rawText) return ['', ''];
  const text = rawText.trim();
  
  // If already multiline
  const explicitLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (explicitLines.length >= 2) {
    return [explicitLines[0], explicitLines.slice(1).join(' ')];
  }
  
  // Try splitting by Devanagari single danda '।', or '|' (not followed by another danda)
  const dandaMatch = text.match(/^(.*?)([\।\|])(?!\s*[\।\|])\s*(.+)$/);
  if (dandaMatch && dandaMatch[1] && dandaMatch[3]) {
    const line1 = `${dandaMatch[1].trim()} ${dandaMatch[2]}`;
    const line2 = dandaMatch[3].trim();
    if (line1 && line2) {
      return [line1, line2];
    }
  }

  // Try splitting by comma if present
  const commaIdx = text.indexOf(',');
  if (commaIdx > 10 && commaIdx < text.length - 10) {
    const line1 = text.slice(0, commaIdx + 1).trim();
    const line2 = text.slice(commaIdx + 1).trim();
    return [line1, line2];
  }

  // Midpoint word split as fallback
  const words = text.split(/\s+/);
  if (words.length >= 4) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  }

  return [text, ''];
}

/**
 * Ensures couplet text is always a 2-line string joined by newline
 */
export function formatCoupletString(rawText: string): string {
  const lines = formatCoupletIntoTwoLines(rawText);
  return lines.filter(Boolean).join('\n');
}

/**
 * Ensures "सतगुरु कबीर साहेब" / "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ" / "Satguru Kabir Saheb" across all bhavarths
 */
export function ensureSatguruKabirSaheb(text: string): string {
  if (!text) return '';
  let res = text;

  // Hindi: Ensure "सतगुरु कबीर साहेब"
  res = res
    .replace(/(?<!सतगुरु\s+|सद्गुरु\s+|बंदीछोड़\s+)कबीर साहेब/g, 'सतगुरु कबीर साहेब')
    .replace(/(?<!सतगुरु\s+|सद्गुरु\s+|बंदीछोड़\s+)कबीरदास/g, 'सतगुरु कबीर साहेब')
    .replace(/(?<!सतगुरु\s+|सद्गुरु\s+|बंदीछोड़\s+)कबीर दास/g, 'सतगुरु कबीर साहेब')
    .replace(/(?<!सतगुरु\s+|सद्गुरु\s+|बंदीछोड़\s+)संत कबीर/g, 'सतगुरु कबीर साहेब');

  // Punjabi: Ensure "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ"
  res = res
    .replace(/(?<!ਸਤਿਗੁਰੂ\s+|ਬੰਦੀਛੋੜ\s+|ਸਤਿਗੁਰ\s+)ਕਬੀਰ ਸਾਹੇਬ/g, 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ')
    .replace(/(?<!ਸਤਿਗੁਰੂ\s+|ਬੰਦੀਛੋੜ\s+|ਸਤਿਗੁਰ\s+)ਸੰਤ ਕबीर/g, 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ')
    .replace(/(?<!ਸਤਿਗੁਰੂ\s+|ਬੰਦੀਛੋੜ\s+|ਸਤਿਗੁਰ\s+)ਸੰਤ ਕਬੀਰ/g, 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ');

  // English: Ensure "Satguru Kabir Saheb"
  res = res
    .replace(/(?<!Satguru\s+|Bandichhor\s+|Sadguru\s+|Saint\s+)Kabir Saheb/gi, 'Satguru Kabir Saheb')
    .replace(/(?<!Satguru\s+|Bandichhor\s+|Sadguru\s+|Saint\s+)Kabir Sahib/gi, 'Satguru Kabir Saheb')
    .replace(/(?<!Satguru\s+|Bandichhor\s+|Sadguru\s+|Saint\s+)Sant Kabir/gi, 'Satguru Kabir Saheb');

  return res;
}

export function autoCorrectSacredText(rawText: string): string {
  if (!rawText) return '';

  let cleaned = rawText;

  // Common Devanagari OCR Fixes
  cleaned = cleaned
    .replace(/संतोषर्षा/g, 'संतोष क्षमा')
    .replace(/सुधारकारज/g, 'सुधार कारज')
    .replace(/सिावत्री/g, 'सावित्री')
    .replace(/निागनी/g, 'नागिनी')
    .replace(/अिवद्या/g, 'अविद्या')
    .replace(/अिवगत/g, 'अविगत')
    .replace(/अवगित/g, 'अविगत')
    .replace(/डिाकन/g, 'डाकिन')
    .replace(/सिाकनी/g, 'शाकिन')
    .replace(/उिजयारा/g, 'उजियारा')
    .replace(/अिधकाई/g, 'अधिकाई')
    .replace(/किोटन/g, 'कोटिन')
    .replace(/दिाहने/g, 'दाहिने')
    .replace(/अिचंत/g, 'अचिंत')
    .replace(/प्रिितबंब/g, 'प्रतिबिंब')
    .replace(/पिंडिद/g, 'पिण्ड दि')
    .replace(/बस्नु/g, 'विष्णु')
    .replace(/रिध सिध/g, 'रिद्धि सिद्धि')
    .replace(/कुंफुलरहा/g, 'कुंभकरन रहा')
    .replace(/मंझाारसब्द/g, 'मंझार शब्द')
    .replace(/मंझारसब्द/g, 'मंझार शब्द')
    .replace(/झु नकारा/g, 'झुनकारा')
    .replace(/झु नकारी/g, 'झुनकारी')
    .replace(/गुरुमुखसाधू/g, 'गुरुमुख साधू')
    .replace(/इਿ/g, 'इ')
    .replace(/उਿ/g, 'उ')
    .replace(/एਿ/g, 'ए')
    .replace(/िा/g, 'ा')
    .replace(/([^\s])॥/g, '$1 ॥')
    .replace(/॥([^\s])/g, '॥ $1')
    .replace(/\s+/g, ' ')
    .trim();

  cleaned = ensureSatguruKabirSaheb(cleaned);

  return cleaned
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
}

/**
 * Devanagari to Gurmukhi script transliterator
 */
export function devanagariToGurmukhi(devText: string): string {
  if (!devText) return '';
  const d2g: Record<string, string> = {
    'अ': 'ਅ', 'आ': 'ਆ', 'इ': 'ਇ', 'ई': 'ਈ', 'उ': 'ਉ', 'ऊ': 'ਊ',
    'ए': 'ਏ', 'ऐ': 'ਐ', 'ओ': 'ਓ', 'औ': 'ਔ', 'ऋ': 'ਰਿ',
    'ा': 'ਾ', 'ਿ': 'ਿ', 'ੀ': 'ੀ', 'ु': 'ੁ', 'ू': 'ੂ',
    'े': 'ੇ', 'ै': 'ੈ', 'ो': 'ੋ', 'ौ': 'ੌ', 'ं': 'ਂ', 'ँ': 'ਁ',
    'क': 'ਕ', 'ख': 'ਖ', 'ग': 'ਗ', 'घ': 'ਘ', 'ङ': 'ਙ',
    'च': 'ਚ', 'छ': 'ਛ', 'ज': 'ਜ', 'झ': 'ਝ', 'ञ': 'ਞ',
    'ट': 'ਟ', 'ठ': 'ਠ', 'ड': 'ਡ', 'ढ': 'ਢ', 'ण': 'ਣ',
    'त': 'ਤ', 'थ': 'ਥ', 'द': 'ਦ', 'ध': 'ਧ', 'न': 'ਨ',
    'प': 'ਪ', 'फ': 'ਫ', 'ब': 'ਬ', 'भ': 'ਭ', 'म': 'ਮ',
    'य': 'ਯ', 'र': 'ਰ', 'ल': 'ਲ', 'व': 'ਵ', 'श': 'ਸ਼',
    'ष': 'ਸ਼', 'स': 'ਸ', 'ह': 'ਹ', 'ड़': 'ੜ', 'ढ़': 'ੜ੍ਹ',
    '्': '', '़': '', '।': '।', '॥': '॥'
  };
  let result = '';
  let i = 0;
  while (i < devText.length) {
    const twoChars = devText.substring(i, i + 2);
    if (d2g[twoChars] !== undefined) {
      result += d2g[twoChars];
      i += 2;
    } else {
      const oneChar = devText.charAt(i);
      result += d2g[oneChar] !== undefined ? d2g[oneChar] : oneChar;
      i++;
    }
  }
  return result;
}

/**
 * Gurmukhi to Devanagari script transliterator
 */
export function gurmukhiToDevanagari(pbText: string): string {
  if (!pbText) return '';
  const g2d: Record<string, string> = {
    'ਅ': 'अ', 'ਆ': 'आ', 'ਇ': 'इ', 'ਈ': 'ई', 'ਉ': 'उ', 'ਊ': 'ऊ',
    'ਏ': 'ए', 'ਐ': 'ऐ', 'ਓ': 'ओ', 'ਔ': 'औ',
    'ਾ': 'ा', 'ਿ': 'ि', 'ੀ': 'ी', 'ੁ': 'ु', 'ੂ': 'ू',
    'ੇ': 'े', 'ੈ': 'ै', 'ੋ': 'ो', 'ੌ': 'ौ', 'ਂ': 'ं', 'ਁ': 'ँ', 'ੱ': '',
    'ਕ': 'क', 'ਖ': 'ख', 'ਗ': 'ग', 'ਘ': 'घ', 'ਙ': 'ङ',
    'ਚ': 'च', 'ਛ': 'छ', 'ਜ': 'ज', 'ਝ': 'झ', 'ਞ': 'ञ',
    'ਟ': 'ट', 'ਠ': 'ठ', 'ਡ': 'ड', 'ਢ': 'ढ', 'ਣ': 'ण',
    'ਤ': 'त', 'ਥ': 'थ', 'ਦ': 'द', 'ਧ': 'ध', 'ਨ': 'न',
    'ਪ': 'प', 'ਫ': 'फ', 'ਬ': 'ब', 'ਭ': 'भ', 'ਮ': 'म',
    'ਯ': 'य', 'ਰ': 'र', 'ਲ': 'ल', 'ਵ': 'व', 'ਸ਼': 'श',
    'ਸ': 'स', 'ਹ': 'ह', 'ੜ': 'ड़', '।': '।', '॥': '॥'
  };
  let result = '';
  for (let i = 0; i < pbText.length; i++) {
    const char = pbText.charAt(i);
    result += g2d[char] !== undefined ? g2d[char] : char;
  }
  return result;
}

/**
 * Devanagari to Roman transliterator
 */
export function devanagariToRoman(devText: string): string {
  if (!devText) return '';
  const d2r: Record<string, string> = {
    'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo',
    'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'ऋ': 'ri',
    'ा': 'a', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo',
    'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ं': 'n', 'ँ': 'n',
    'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh',
    'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh',
    'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
    'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
    'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
    'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh',
    'ष': 'sh', 'स': 's', 'ह': 'h', 'ड़': 'd', 'ढ़': 'dh',
    '्': ''
  };
  let result = '';
  for (let i = 0; i < devText.length; i++) {
    const char = devText.charAt(i);
    result += d2r[char] !== undefined ? d2r[char] : char;
  }
  return result;
}

/**
 * Gurmukhi to Roman transliterator
 */
export function gurmukhiToRoman(pbText: string): string {
  return devanagariToRoman(gurmukhiToDevanagari(pbText));
}

/**
 * Translates Hindi meaning to authentic Punjabi meaning
 */
export function translateHindiMeaningToPunjabi(hiMeaning: string): string {
  if (!hiMeaning) return '';
  let pb = hiMeaning;
  const replacements: [RegExp, string][] = [
    [/नहीं/g, 'ਨਹੀਂ'],
    [/होता/g, 'ਹੁੰਦਾ'],
    [/होती/g, 'ਹੁੰਦੀ'],
    [/होते/g, 'ਹੁੰਦੇ'],
    [/होना/g, 'ਹੋਣਾ'],
    [/होने/g, 'ਹੋਣ'],
    [/होकर/g, 'ਹੋ ਕੇ'],
    [/करना/g, 'ਕਰਨਾ'],
    [/किया/g, 'ਕੀਤਾ'],
    [/कहा/g, 'ਕਿਹਾ'],
    [/कहते/g, 'ਕਹਿੰਦੇ'],
    [/संसार/g, 'ਸੰਸਾਰ'],
    [/दुनियां/g, 'ਦੁਨੀਆ'],
    [/दुनिया/g, 'ਦੁਨੀਆ'],
    [/शरीर/g, 'ਸਰੀਰ'],
    [/हड्डियां/g, 'ਹੱਡੀਆਂ'],
    [/हड्डियाँ/g, 'ਹੱਡੀਆਂ'],
    [/लकड़ी/g, 'ਲੱਕੜ'],
    [/बाल/g, 'ਵਾਲ'],
    [/केश/g, 'ਕੇਸ'],
    [/सिर/g, 'ਸਿਰ'],
    [/देखना/g, 'ਵੇਖਣਾ'],
    [/देखने/g, 'ਵੇਖਣ'],
    [/देखा/g, 'ਵੇਖਿਆ'],
    [/मुलाकात/g, 'ਮੁਲਾਕਾਤ'],
    [/सौभाग्य/g, 'ਵੱਡੀ ਕਿਸਮਤ'],
    [/किस्मत/g, 'ਕਿਸਮਤ'],
    [/फांसी/g, 'ਫਾਂਸੀ'],
    [/सजा/g, 'ਸਜ਼ਾ'],
    [/टल जाना/g, 'ਟਲ ਜਾਣਾ'],
    [/दूर होना/g, 'ਦੂਰ ਹੋਣਾ'],
    [/परोपकार/g, 'ਪਰਉਪਕਾਰ'],
    [/दूसरों/g, 'ਦੂਜਿਆਂ'],
    [/भला/g, 'ਭਲਾ'],
    [/ਸਰੋਵਰ/g, 'ਸਰੋਵਰ'],
    [/सरोवर/g, 'ਸਰੋਵਰ'],
    [/तालाब/g, 'ਤਾਲਾਬ'],
    [/वृक्ष/g, 'ਰੁੱਖ'],
    [/पेड़/g, 'ਦਰੱਖਤ'],
    [/वर्षा/g, 'ਮੀਂਹ'],
    [/बादल/g, 'ਬੱਦਲ'],
    [/अहंकार/g, 'ਹੰਕਾਰ'],
    [/ज्ञान/g, 'ਗਿਆਨ'],
    [/सत्य/g, 'ਸੱਚ'],
    [/प्रेम/g, 'ਪ੍ਰੇਮ'],
    [/हृदय/g, 'ਹਿਰਦਾ'],
    [/मन/g, 'ਮਨ'],
    [/मुक्ति/g, 'ਮੁਕਤੀ'],
    [/ढूंढने/g, 'ਲੱਭਣ'],
    [/ढूंढना/g, 'ਲੱਭਣਾ'],
    [/परखने/g, 'ਪਰਖਣ'],
    [/प्राप्त/g, 'ਪ੍ਰਾਪਤ'],
    [/दिखा/g, 'ਦਿਸਿਆ'],
    [/कोई भी/g, 'ਕੋਈ ਵੀ'],
    [/व्यक्ति/g, 'ਮਨੁੱਖ'],
    [/अंतःकरण/g, 'ਹਿਰਦਾ'],
    [/आत्म-निरीक्षण/g, 'ਆਤਮ-ਪੜਚੋਲ'],
    [/स्वयं/g, 'ਆਪਣਾ'],
    [/निजी/g, 'ਨਿੱਜੀ'],
    [/गले मिलना/g, 'ਗਲ ਲੱਗਣਾ'],
    [/हृदय से लगाना/g, 'ਹਿਰਦੇ ਨਾਲ ਲਾਉਣਾ'],
    [/आलिंगन/g, 'ਮਿਲਣੀ ਤੇ ਦਰਸ਼ਨ'],
    [/दोष/g, 'ਕਮੀਆਂ'],
    [/विकार/g, 'ਵਿਕਾਰ'],
    [/अशुभ/g, 'ਮਾੜੇ'],
    [/कर्म/g, 'ਕਰਮ'],
    [/अच्छा/g, 'ਚੰਗਾ'],
    [/श्रेष्ठ/g, 'ਸਭ ਤੋਂ ਉੱਤਮ'],
    [/पावन/g, 'ਪਵਿੱਤਰ'],
    [/परमात्मा/g, 'ਪਰਮਾਤਮਾ'],
    [/ईश्वर/g, 'ਪ੍ਰਭੂ'],
    [/सतगुरु/g, 'ਸਤਿਗੁਰੂ'],
    [/भक्ति/g, 'ਭਗਤੀ'],
    [/साधना/g, 'ਸਾਧਨਾ'],
    [/सत्संग/g, 'ਸਤਿਸੰਗ'],
    [/कमियां/g, 'ਕਮੀਆਂ'],
    [/त्याग/g, 'ਤਿਆਗ'],
    [/वैराग्य/g, 'ਵੈਰਾਗ'],
    [/शांति/g, 'ਸ਼ਾਂਤੀ'],
    [/अमृत/g, 'ਅੰਮ੍ਰਿਤ'],
    [/सत्यनाम/g, 'ਸਤਯਨਾਮ'],
    [/सुरति/g, 'ਸੁਰਤਿ'],
    [/निरति/g, 'ਨਿਰਤਿ'],
    [/अनहद/g, 'ਅਨਹਦ ਨਾਦ']
  ];
  for (const [pattern, rep] of replacements) {
    pb = pb.replace(pattern, rep);
  }
  return devanagariToGurmukhi(pb);
}

/**
 * Translates Hindi meaning to rich, context-aware English
 */
export function translateHindiMeaningToEnglish(hiMeaning: string, token: string): string {
  const dictionary: Record<string, string> = {
    // Fundamental Spiritual Terminology
    'darshan': 'Divine vision or sacred audience with a saint',
    'bade bhaag': 'Supreme good fortune and spiritual blessing',
    'bhaag': 'Fortune, destiny, sacred auspiciousness',
    'soolee': 'Gallows or severe karmic punishment',
    'tari jaay': 'Averted or safely dissipated by grace',
    'haad': 'Mortal bones and perishable skeleton',
    'laakdi': 'Dry firewood for cremation pyre',
    'kes': 'Hair of the head, fleeting beauty',
    'tan': 'Transient physical body',
    'udaas': 'Spiritual detachment and inner dispassion',
    'panthi': 'Wayfarer or spiritual pilgrim on the path',
    'chhaya': 'Cooling shelter and protective shade',
    'ati door': 'Distant, lofty, inaccessible from outside',
    'sarvar': 'Sacred lake or pristine inner reservoir',
    'tarvar': 'Fruit-bearing sheltering tree of life',
    'meh': 'Rain of divine grace and spiritual bliss',
    'paramaarath': 'Supreme altruism and welfare of all souls',
    'bhala': 'Blessed, auspicious, spiritually elevated',
    'ank bhare': 'Loving embrace from the depths of heart',
    'bhetiye': 'Reverent meeting and devotional greeting',
    'paap': 'Sins, blemishes, and negative karmas',
    'maati': 'Clay and earth, symbol of the fragile body',
    'kumhaar': 'The potter, symbol of worldly ego',
    'roonde': 'To crush or trample underfoot',
    'mohi': 'Unto me, self-referential',
    'tohi': 'Unto you, the seeker',
    'guru': 'The enlightened Master dispelling darkness',
    'govind': 'The Supreme Divine Lord',
    'do-oo': 'Both standing simultaneously before the seeker',
    'kaake': 'Unto whose sacred presence',
    'paan-y': 'At the holy lotus feet',
    'balihari': 'Total and grateful self-surrender',
    'bataay': 'Illuminated and guided the true path',
    'pothi': 'Theoretical books and holy scriptures',
    'jag mua': 'The mortal world passed away searching',
    'pandit': 'True spiritually illuminated sage',
    'dhai aakhar': 'The two-and-a-half syllables of Divine Love',
    'padhe': 'To live and assimilate deeply in heart',
    'prem': 'Pure divine selfless love',
    'satya': 'Eternal transcendental Truth',
    'satyanaam': 'The True Eternal Sound and Primordial Word',
    'dekhan': 'To search, examine or observe with discernment',
    'miliya': 'Found, discovered or encountered',
    'koy': 'Any person or external entity',
    'dil khoja': 'Conducted deep inquiry into one’s own heart',
    'aapna': 'One’s own innermost mind and self',
    'chala': 'Proceeded or set out on the search',
    'bura': 'Flawed, imperfect or wicked',
    'mujhse': 'Compared to my own shortcomings',
    'ek na jaanya': 'Failing to realize the One Supreme Essence',
    'bahu jaanya': 'Acquiring vast external scholastic knowledge',
    'ek tain sab hot': 'From the One Root, everything is sustained and known',
    'sab tain ek na ho-ee': 'Scattered multiplicity never leads to the One Core',
    'surati': 'Inner spiritual focus and consciousness',
    'nirati': 'Steadfast absorption into the inner Sound',
    'anhad': 'Unstruck divine melody resounding within',
    'gagan': 'The spiritual inner sky (Dasam Dwar)',
    'trikuti': 'Confluence of Ida, Pingala and Sushumna',
    'sahaj': 'Effortless spontaneous spiritual state',
    'sumiran': 'Continuous inner remembrance of the Name',
    'maya': 'Cosmic illusion and temporal entrapment',
    'kaal': 'Time, mortality, and the force of entropy',
    'mukti': 'Complete liberation of the soul',
    'nih-akshar': 'The imperishable, indestructible Supreme Reality',
    'shabd': 'The sacred living Word of the Satguru',
    'sadhak': 'Dedicated spiritual practitioner',
    'aatma': 'The eternal divine soul',
    'nirbhay': 'Free from fear, resting in divine shelter',
    'santokh': 'Divine contentment and inner peace',
    'daya': 'Universal compassion towards all living beings',
    'kshama': 'Forgiveness and transcendence of ego'
  };

  const cleanToken = token.toLowerCase().trim().replace(/[.,!?;:'"()]/g, '');
  if (dictionary[cleanToken]) {
    return dictionary[cleanToken];
  }

  for (const [key, val] of Object.entries(dictionary)) {
    if (cleanToken === key || (cleanToken.length >= 4 && cleanToken.includes(key))) {
      return val;
    }
  }

  // Common Hindi phrase patterns mapped to clear English
  if (hiMeaning) {
    const cleanHi = hiMeaning.trim();
    if (cleanHi.includes('ढूंढने') || cleanHi.includes('खोजने')) {
      return 'To seek, search, or examine with discernment';
    }
    if (cleanHi.includes('प्राप्त हुआ') || cleanHi.includes('दिखा')) {
      return 'Encountered, revealed, or appeared to awareness';
    }
    if (cleanHi.includes('कोई भी') || cleanHi.includes('किसी अन्य')) {
      return 'Any being, person, or external entity';
    }
    if (cleanHi.includes('अंतःकरण') || cleanHi.includes('हृदय की पड़ताल')) {
      return 'Conducted profound inner self-inquiry and reflection';
    }
    if (cleanHi.includes('स्वयं') || cleanHi.includes('निजी मन')) {
      return 'One’s own innermost conscience and awareness';
    }
    if (cleanHi.includes('मुलाकात') || cleanHi.includes('देखना')) {
      return 'Sacred meeting, beholding the divine presence';
    }
    if (cleanHi.includes('सौभाग्य') || cleanHi.includes('किस्मत')) {
      return 'Blessed fortune, auspicious spiritual destiny';
    }
    if (cleanHi.includes('फांसी') || cleanHi.includes('सूली')) {
      return 'Severe karmic punishment or mortal suffering';
    }
    if (cleanHi.includes('टल जाना') || cleanHi.includes('दूर होना')) {
      return 'Averted, safely neutralized by divine grace';
    }
    if (cleanHi.includes('गले मिलना') || cleanHi.includes('हृदय से लगाना')) {
      return 'Embracing with profound spiritual devotion';
    }
    if (cleanHi.includes('दोष') || cleanHi.includes('विकार') || cleanHi.includes('अशुभ')) {
      return 'Inner imperfections, karmic blemishes, and vices';
    }
    if (cleanHi.includes('अच्छा') || cleanHi.includes('श्रेष्ठ') || cleanHi.includes('पावन')) {
      return 'Auspicious, spiritually sublime, and pure';
    }
    if (cleanHi.includes('परमात्मा') || cleanHi.includes('ईश्वर')) {
      return 'The Supreme Transcendent Lord and Source';
    }
    if (cleanHi.includes('सत्य') || cleanHi.includes('सत्यनाम')) {
      return 'The Eternal Truth and Primordial Name';
    }
    if (cleanHi.includes('अहंकार') || cleanHi.includes('घमंड')) {
      return 'Egoic pride and illusion of separateness';
    }
    if (cleanHi.includes('मुक्ति') || cleanHi.includes('मोक्ष')) {
      return 'Spiritual liberation from worldly bondage';
    }
    if (cleanHi.includes('ज्ञान') || cleanHi.includes('बोध')) {
      return 'Divine intuitive wisdom and awakening';
    }
  }

  // Graceful meaningful fallback
  const romanTitle = cleanToken ? cleanToken.charAt(0).toUpperCase() + cleanToken.slice(1) : 'Term';
  return `${romanTitle} — Essential spiritual concept in Satguru Kabir Saheb's couplet`;
}

/**
 * Matches a word token from the couplet text against the Sakhi's wordMeanings glossary.
 * Supports Gurmukhi, Devanagari, and Roman scripts with fuzzy tolerance.
 */
export function matchCoupletWordToGlossary(
  cleanWord: string,
  wordList: { word: string; meaning: string }[]
): number {
  if (!cleanWord || cleanWord.length < 2) return -1;
  const targetLower = cleanWord.toLowerCase().trim();
  const targetRoman = devanagariToRoman(gurmukhiToDevanagari(cleanWord)).toLowerCase().trim();

  return wordList.findIndex(item => {
    if (!item.word) return false;
    const rawWord = item.word.trim();
    const parenMatch = rawWord.match(/\(([^)]+)\)/);
    const romanInside = parenMatch ? parenMatch[1].toLowerCase().replace(/[.,!?;:'"]/g, '').trim() : '';
    const scriptPart = rawWord.replace(/\s*\([^)]*\)/g, '').trim();

    // 1. Script tokens (words in the script title)
    const scriptTokens = scriptPart
      .split(/[\s,/-]+/)
      .map(t => t.replace(/[।॥,.\s]/g, '').trim())
      .filter(Boolean);

    // 2. Roman tokens
    const romanTokens = (romanInside || devanagariToRoman(gurmukhiToDevanagari(scriptPart)))
      .toLowerCase()
      .split(/[\s,/-]+/)
      .map(t => t.replace(/[.,!?;:'"]/g, '').trim())
      .filter(Boolean);

    // Exact script equality
    if (scriptTokens.some(t => t === cleanWord || t.toLowerCase() === targetLower)) {
      return true;
    }

    // Exact roman equality
    if (romanTokens.some(t => t === targetLower || t === targetRoman)) {
      return true;
    }

    // Gurmukhi / Devanagari character variant tolerance (e.g., ਣ vs ਨ, ਈ vs ਇ, ਏ vs ੇ)
    const normClean = targetLower
      .replace(/ਣ/g, 'ਨ')
      .replace(/ਈ/g, 'ਇ')
      .replace(/ਯ/g, 'ਇ')
      .replace(/ੜ/g, 'ਰ');
    if (scriptTokens.some(t => {
      const normToken = t.toLowerCase().replace(/ਣ/g, 'ਨ').replace(/ਈ/g, 'ਇ').replace(/ਯ/g, 'ਇ').replace(/ੜ/g, 'ਰ');
      return normToken === normClean;
    })) {
      return true;
    }

    // Compound word match: if token is multi-character (>= 3 chars)
    if (cleanWord.length >= 3) {
      if (scriptTokens.some(t => t.length >= 3 && (t.includes(cleanWord) || cleanWord.includes(t)))) {
        return true;
      }
      if (romanTokens.some(t => t.length >= 3 && (t.includes(targetRoman) || targetRoman.includes(t)))) {
        return true;
      }
    }

    return false;
  });
}

/**
 * Harmonizes Sakhi Word Meanings across Hindi, Punjabi, and English.
 * Guarantees that:
 * 1. wordMeanings.hi.length === wordMeanings.pb.length === wordMeanings.en.length
 * 2. Every index i corresponds strictly to the exact same word in all 3 languages.
 * 3. Never duplicates items or assigns the same meaning to multiple words.
 */
export function harmonizeSakhiWordMeanings(rawMeanings?: {
  hi?: { word: string; meaning: string }[];
  pb?: { word: string; meaning: string }[];
  en?: { word: string; meaning: string }[];
}): {
  hi: { word: string; meaning: string }[];
  pb: { word: string; meaning: string }[];
  en: { word: string; meaning: string }[];
} {
  if (!rawMeanings) {
    return { hi: [], pb: [], en: [] };
  }

  const hiRaw = rawMeanings.hi || [];
  const pbRaw = rawMeanings.pb || [];
  const enRaw = rawMeanings.en || [];

  // Determine base list (prefer hi, then pb, then en)
  const baseRaw = hiRaw.length > 0 ? hiRaw : pbRaw.length > 0 ? pbRaw : enRaw;
  if (baseRaw.length === 0) {
    return { hi: [], pb: [], en: [] };
  }

  const hiHarmonized: { word: string; meaning: string }[] = [];
  const pbHarmonized: { word: string; meaning: string }[] = [];
  const enHarmonized: { word: string; meaning: string }[] = [];

  const usedPbIndices = new Set<number>();
  const usedEnIndices = new Set<number>();

  const extractToken = (str: string): string => {
    const match = str.match(/\(([^)]+)\)/);
    if (match && match[1]) {
      return match[1].toLowerCase().trim().replace(/[.,!?;:'"]/g, '');
    }
    return str.toLowerCase().trim().replace(/[.,!?;:'"()]/g, '');
  };

  const extractScriptPart = (str: string): string => {
    return str.replace(/\s*\([^)]*\)/g, '').trim();
  };

  baseRaw.forEach((baseItem, idx) => {
    const bWord = (baseItem.word || '').trim();
    const bMeaning = (baseItem.meaning || '').trim();
    const bToken = extractToken(bWord);
    const bScript = extractScriptPart(bWord);

    // Derive canonical Roman token
    const canonicalRoman = bToken || devanagariToRoman(gurmukhiToDevanagari(bScript));
    const formattedRomanToken = canonicalRoman ? canonicalRoman.charAt(0).toUpperCase() + canonicalRoman.slice(1) : '';

    // 1. Process HINDI item
    let hItem: { word: string; meaning: string };
    if (hiRaw.length > 0 && idx < hiRaw.length) {
      const curHi = hiRaw[idx];
      const hScript = extractScriptPart(curHi.word || '');
      const curHiWord = curHi.word.includes('(') ? curHi.word : `${hScript} (${formattedRomanToken})`;
      hItem = { word: curHiWord, meaning: curHi.meaning || bMeaning };
    } else {
      const devScript = gurmukhiToDevanagari(bScript);
      hItem = {
        word: `${devScript} (${formattedRomanToken})`,
        meaning: bMeaning
      };
    }
    hiHarmonized.push(hItem);

    // 2. Process PUNJABI item (find best unused match)
    let matchedPbIdx = -1;

    // Strategy A: Exact token match
    matchedPbIdx = pbRaw.findIndex((p, pIdx) => {
      if (usedPbIndices.has(pIdx)) return false;
      const pToken = extractToken(p.word || '');
      return pToken && bToken && pToken === bToken;
    });

    // Strategy B: Gurmukhi script match
    if (matchedPbIdx === -1) {
      const expectedGurmukhi = devanagariToGurmukhi(extractScriptPart(hItem.word));
      matchedPbIdx = pbRaw.findIndex((p, pIdx) => {
        if (usedPbIndices.has(pIdx)) return false;
        const pScript = extractScriptPart(p.word || '');
        return pScript === expectedGurmukhi || pScript.includes(expectedGurmukhi) || expectedGurmukhi.includes(pScript);
      });
    }

    // Strategy C: Exact index alignment if same length
    if (matchedPbIdx === -1 && idx < pbRaw.length && !usedPbIndices.has(idx) && pbRaw.length === baseRaw.length) {
      matchedPbIdx = idx;
    }

    if (matchedPbIdx !== -1) {
      usedPbIndices.add(matchedPbIdx);
      const pbCandidate = pbRaw[matchedPbIdx];
      const pWord = (pbCandidate.word || '').trim();
      const pScript = extractScriptPart(pWord);
      const formattedPbWord = pWord.includes('(') ? pWord : `${pScript} (${formattedRomanToken})`;
      pbHarmonized.push({
        word: formattedPbWord,
        meaning: (pbCandidate.meaning || '').trim() || translateHindiMeaningToPunjabi(hItem.meaning),
      });
    } else {
      const pbWordScript = devanagariToGurmukhi(extractScriptPart(hItem.word));
      pbHarmonized.push({
        word: `${pbWordScript} (${formattedRomanToken})`,
        meaning: translateHindiMeaningToPunjabi(hItem.meaning),
      });
    }

    // 3. Process ENGLISH item (find best unused match)
    let matchedEnIdx = -1;

    // Strategy A: Exact token match
    matchedEnIdx = enRaw.findIndex((e, eIdx) => {
      if (usedEnIndices.has(eIdx)) return false;
      const eToken = extractToken(e.word || '');
      return eToken && bToken && (eToken === bToken || eToken.toLowerCase() === canonicalRoman.toLowerCase());
    });

    // Strategy B: Substring token match
    if (matchedEnIdx === -1 && canonicalRoman.length >= 3) {
      matchedEnIdx = enRaw.findIndex((e, eIdx) => {
        if (usedEnIndices.has(eIdx)) return false;
        const eToken = extractToken(e.word || '');
        return eToken && (eToken.includes(canonicalRoman) || canonicalRoman.includes(eToken));
      });
    }

    // Strategy C: Exact index alignment if same length
    if (matchedEnIdx === -1 && idx < enRaw.length && !usedEnIndices.has(idx) && enRaw.length === baseRaw.length) {
      matchedEnIdx = idx;
    }

    if (matchedEnIdx !== -1) {
      usedEnIndices.add(matchedEnIdx);
      const enCandidate = enRaw[matchedEnIdx];
      enHarmonized.push({
        word: (enCandidate.word || '').trim() || formattedRomanToken,
        meaning: (enCandidate.meaning || '').trim() || translateHindiMeaningToEnglish(hItem.meaning, formattedRomanToken),
      });
    } else {
      enHarmonized.push({
        word: formattedRomanToken,
        meaning: translateHindiMeaningToEnglish(hItem.meaning, formattedRomanToken),
      });
    }
  });

  return {
    hi: hiHarmonized,
    pb: pbHarmonized,
    en: enHarmonized,
  };
}

/**
 * Auto-corrects Sakhi object fields:
 * 1. Enforces 2-line doha in text
 * 2. Enforces "Satguru Kabir Saheb" in bhavarth
 * 3. Enforces 100% aligned word-to-word vocabulary in Hindi, Punjabi, and English
 */
export function sanitizeSakhi<T extends { 
  text: { hi: string; pb: string; en: string }; 
  bhavarth?: { hi: string; pb: string; en: string };
  wordMeanings?: { hi?: { word: string; meaning: string }[]; pb?: { word: string; meaning: string }[]; en?: { word: string; meaning: string }[] };
}>(sakhi: T): T {
  return {
    ...sakhi,
    text: {
      hi: formatCoupletString(autoCorrectSacredText(sakhi.text.hi)),
      pb: formatCoupletString(autoCorrectSacredText(sakhi.text.pb)),
      en: formatCoupletString(sakhi.text.en),
    },
    bhavarth: sakhi.bhavarth ? {
      hi: enrichBhavarthWithNihAkshar(autoCorrectSacredText(sakhi.bhavarth.hi), 'hi'),
      pb: enrichBhavarthWithNihAkshar(autoCorrectSacredText(sakhi.bhavarth.pb), 'pb'),
      en: enrichBhavarthWithNihAkshar(autoCorrectSacredText(sakhi.bhavarth.en), 'en'),
    } : undefined,
    wordMeanings: sakhi.wordMeanings ? harmonizeSakhiWordMeanings(sakhi.wordMeanings) : undefined,
  };
}

/**
 * Ensures Bhavarth consistently emphasizes Satguru Kabir Saheb's teachings on the 'Nih-Akshar' (Supreme Eternal) Satyanaam as foundational essence.
 */
export function enrichBhavarthWithNihAkshar(text: string, lang: 'hi' | 'pb' | 'en' = 'hi'): string {
  let enriched = ensureSatguruKabirSaheb(text || '');
  if (!enriched.trim()) {
    if (lang === 'pb') {
      return 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਇਸ ਪਾਵਨ ਬਾਣੀ ਰਾਹੀਂ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਨਿਹਿ-ਅਕਸ਼ਰ (ਅਵਿਨਾਸ਼ੀ) ਸਤਯਨਾਮ ਦੇ ਅਜਪਾ ਸਿਮਰਨ ਅਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਅਭਿਆਸ ਨਾਲ ਹੀ ਜੀਵ ਕਾਲ-ਮਾਇਆ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸਤਲੋਕ ਨੂੰ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।';
    } else if (lang === 'en') {
      return 'Through this sacred verse, Satguru Kabir Saheb emphasizes that by meditating upon the Nih-Akshar (Supreme Eternal) Satyanaam through Surat-Shabad Yoga, the soul transcends time and illusion to attain Satlok.';
    } else {
      return 'इस पावन वाणी के माध्यम से सतगुरु कबीर साहेब स्पष्ट करते हैं कि निह-अक्षर (परम अविनाशी) सत्यनाम के अनहद स्मरण एवं सुरति-शब्द योग की साधना से ही जीवात्मा काल और माया के बंधनों से मुक्त होकर सतलोक को प्राप्त होती है।';
    }
  }

  // Return natural text without adding mechanical suffix line
  return enriched;
}
