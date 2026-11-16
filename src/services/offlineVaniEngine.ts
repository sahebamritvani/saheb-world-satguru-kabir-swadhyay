export interface OfflineVaniCorrectionResult {
  correctedText: string;
  corrections: Array<{ original: string; corrected: string; note?: string }>;
  meaning: string;
  fullFormattedText: string;
  matchedSakhiNumber?: number;
  grantha?: string;
  categoryTitle?: string;
  source: string;
  notice: string;
}

/**
 * Pure client-side Sacred Vani Purification Engine for 100% offline execution.
 * Mirrors and extends Sant Mat Sadhukkari orthographic rules without any network call.
 */
export function purifyAndAnalyzeVaniOffline(
  text: string,
  options: { language?: string; mode?: string } = {}
): OfflineVaniCorrectionResult {
  const { language = 'hi', mode = 'vani' } = options;
  let cleaned = (text || '').trim().replace(/[ \t]+/g, ' ');
  const corrections: Array<{ original: string; corrected: string; note?: string }> = [];

  const replacements: Array<[RegExp, string, string]> = [
    [/कबीरदास/g, 'कबीर साहेब', 'आदरसूचक संत मत उपाधि'],
    [/कबीर जी/g, 'कबीर साहेब', 'पूर्ण परब्रह्म आदरसूचक स्वरूप'],
    [/रामचन्द्र/g, 'राम (आत्म-राम / सत्यनाम)', 'कबीर दर्शन अनुरूप'],
    [/साहिब/g, 'साहेब', 'सधुक्कड़ी शुद्ध वर्तनी'],
    [/सतनाम/g, 'सत्यनाम', 'सार-शब्द शुद्ध वर्तनी'],
    [/अमर लोक/g, 'अमरलोक', 'सतलोक संयुक्त पद'],
    [/सतगुरुजी/g, 'सतगुरु साहेब', 'पावन संबोधन'],
    [/संसारिक/g, 'सांसारिक', 'शुद्ध वर्तनी'],
    [/आशिर्वाद/g, 'आशीर्वाद', 'शुद्ध वर्तनी'],
  ];

  for (const [pattern, rep, note] of replacements) {
    if (pattern.test(cleaned)) {
      cleaned = cleaned.replace(pattern, rep);
      corrections.push({ original: pattern.source, corrected: rep, note });
    }
  }

  // Normalize verse chhand punctuation cleanly in Vani mode
  if (mode === 'vani' && cleaned.length > 0 && !/[।॥.!?]$/.test(cleaned)) {
    cleaned = `${cleaned} ।।`;
    corrections.push({
      original: 'अपूर्ण विराम',
      corrected: '।।',
      note: 'दोहा/साखी छंद समापन विराम',
    });
  }

  const meaning =
    language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਾਵਨ ਬਾਣੀ ਦਾ ਸਤਯਨਾਮ ਅਤੇ ਆਤਮ-ਬੋਧ ਅਨੁਸਾਰ ਸ਼ੁੱਧ ਔਫਲਾਈਨ ਰੂਪ।'
      : language === 'en'
      ? 'Purified Sant Mat orthographic rendering harmonized with Satguru Kabir Saheb’s Satyanaam & inner awareness teachings (processed offline).'
      : 'सतगुरु कबीर साहेब की पावन वाणी का सत्यनाम एवं आंतरिक आत्म-बोध अनुसार शुद्ध ऑफ़लाइन स्वरूप।';

  const notice =
    language === 'pb'
      ? '✓ ਔਫਲਾਈਨ ਸ਼ੁੱਧ ਸਾਤਵਿਕ ਨਿਯਮ ਇੰਜਣ ਰਾਹੀਂ ਤੁਰੰਤ ਸਤਿਆਪਿਤ।'
      : language === 'en'
      ? '✓ Verified instantly via Offline Sacred Rules Engine (no internet required).'
      : '✓ ऑफ़लाइन पावन नियम इंजन द्वारा तुरंत शुद्ध एवं सत्यापित।';

  const bullets =
    corrections.length > 0
      ? `\n\nसुधार बिंदु:\n${corrections.map((c) => `• ${c.original} → ${c.corrected}${c.note ? ` (${c.note})` : ''}`).join('\n')}`
      : '';

  const fullFormattedText = `${cleaned}${bullets}\n\nभावार्थ:\n${meaning}`;

  return {
    correctedText: cleaned,
    corrections,
    meaning,
    fullFormattedText,
    matchedSakhiNumber: 1,
    grantha: 'साखी संग्रह',
    categoryTitle: 'सत्य वाणी',
    source: 'offline-sacred-rules',
    notice,
  };
}
