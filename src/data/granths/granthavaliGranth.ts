import { MasterGranth } from './granthTypes';
import { GRANTHAVALI_CROSS_REF_VAULT } from '../step8CrossReferenceVault';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';
import { devanagariToGurmukhi } from '../../services/transliteration';

function vaultEntryToGranthVerse(entry: (typeof GRANTHAVALI_CROSS_REF_VAULT)[number]) {
  const hiLines = entry.verse.hi.split('\n').filter(Boolean);
  const pbLines = entry.verse.pb
    ? entry.verse.pb.split('\n').filter(Boolean)
    : hiLines.map((l) => devanagariToGurmukhi(l));
  const enLines = entry.verse.en ? entry.verse.en.split('\n').filter(Boolean) : hiLines;

  return enrichVerseWith5Steps(
    {
      id: entry.id,
      type: 'sakhi',
      lines: {
        hi: hiLines,
        pb: pbLines,
        en: enLines,
      },
      bhavarth: entry.bhavarth,
      spiritualEssence: entry.themeEssence,
    },
    entry.angOrSection.hi
  );
}

const byIds = (ids: string[]) =>
  GRANTHAVALI_CROSS_REF_VAULT.filter((e) => ids.includes(e.id)).map(vaultEntryToGranthVerse);

export const GRANTHAVALI_GRANTH: MasterGranth = {
  id: 'kabir-granthavali-granth',
  slug: 'granthavali',
  title: {
    hi: 'कबीर ग्रंथावली (प्रामाणिक संकलन)',
    pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ (ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ)',
    en: 'Kabir Granthavali (Canonical Collection)',
  },
  shortTitle: {
    hi: 'कबीर ग्रंथावली',
    pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ',
    en: 'Kabir Granthavali',
  },
  subtitle: {
    hi: 'साखी, पद एवं रमैनी प्रकरण — ५ पावन अंग संग्रह',
    pb: 'ਸਾਖੀ, ਪਦ ਤੇ ਰਮੈਣੀ ਪ੍ਰਕਰਣ — ੫ ਪਾਵਨ ਅੰਗ ਸੰਗ੍ਰਹਿ',
    en: 'Sakhis, Padas & Ramaini Sections — 5 Sacred Angs',
  },
  category: 'mool-granth',
  iconName: 'Scroll',
  bannerColor: 'from-amber-700 to-stone-800',
  accentColor: 'text-amber-700',
  totalChapters: 5,
  estimatedHours: {
    hi: '१८ घण्टे स्वाध्याय',
    pb: '੧੮ ਘੰਟੇ ਅਧਿਐਨ',
    en: '18 Hours Study',
  },
  description: {
    hi: 'कबीर ग्रंथावली सतगुरु कबीर साहेब के गुरुदेव, सुमिरन, सांच, प्रेम-भक्ति एवं मन-निवारण अंगों का प्रामाणिक संकलन है। प्रशासक डेटा इंजेक्टर (स्लॉट #4) द्वारा अतिरिक्त अध्याय भी जोड़े जा सकते हैं।',
    pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਗੁਰੂਦੇਵ, ਸਿਮਰਨ, ਸਾਂਚ ਤੇ ਪ੍ਰੇਮ-ਭਗਤੀ ਅੰਗਾਂ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ ਹੈ।',
    en: 'Kabir Granthavali preserves canonical teachings across Gurudev, Sumiran, Sanch, Prem-Bhakti, and Mind Mastery sections, with Admin Slot #4 expansion support.',
  },
  chapters: [
    {
      id: 'granthavali-ang-1',
      chapterNumber: 1,
      title: {
        hi: '१. गुरुदेव एवं शब्द को अंग',
        pb: '੧. ਗੁਰੂਦੇਵ ਤੇ ਸ਼ਬਦ ਕੋ ਅੰਗ',
        en: '1. Gurudev & Shabd Ko Ang',
      },
      subtitle: {
        hi: 'सतगुरु की अनंत महिमा एवं सार-शब्द बोध',
        pb: 'ਸਤਿਗੁਰੂ ਦੀ ਅਨੰਤ ਮਹਿਮਾ ਤੇ ਸਾਰ-ਸ਼ਬਦ ਬੋਧ',
        en: 'Infinite Glory of the Satguru & Essential Word',
      },
      description: {
        hi: 'पूर्ण सतगुरु की कृपा से ज्ञान-नेत्र खुलने तथा सार-शब्द में चित्त स्थिर करने का उपदेश।',
        pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਗਿਆਨ-ਨੇਤਰ ਖੁੱਲ੍ਹਣ ਅਤੇ ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਣ ਦਾ ਉਪਦੇਸ਼।',
        en: 'Teachings on awakening spiritual vision through the Satguru and anchoring in Saar-Shabd.',
      },
      verses: byIds(['grantha-guru-3', 'grantha-shabd-ko-ang-1108']),
    },
    {
      id: 'granthavali-ang-2',
      chapterNumber: 2,
      title: {
        hi: '२. सुमिरन एवं परचै को अंग',
        pb: '੨. ਸਿਮਰਨ ਤੇ ਪਰਚੈ ਕੋ ਅੰਗ',
        en: '2. Sumiran & Parchai Ko Ang',
      },
      subtitle: {
        hi: 'श्वास-श्वास सत्यनाम स्मरण व घट-अंतर दर्शन',
        pb: 'ਸੁਆਸ-ਸੁਆਸ ਸਤਯਨਾਮ ਸਿਮਰਨ ਤੇ ਘਟ-ਅੰਤਰ ਦਰਸ਼ਨ',
        en: 'Breath-borne Remembrance & Inner Sanctuary Vision',
      },
      description: {
        hi: 'सहज सत्यनाम सुमिरन एवं अंतर्मुखी ध्यान द्वारा घट में प्रीतम दर्शन।',
        pb: 'ਸਹਿਜ ਸਤਯਨਾਮ ਸਿਮਰਨ ਅਤੇ ਅੰਤਰਮੁਖੀ ਧਿਆਨ ਰਾਹੀਂ ਘਟ ਵਿੱਚ ਪ੍ਰੀਤਮ ਦਰਸ਼ਨ।',
        en: 'Effortless remembrance of Satyanaam and turning the inner gaze toward the Beloved.',
      },
      verses: byIds(['grantha-naam-4', 'grantha-yoga-11']),
    },
    {
      id: 'granthavali-ang-3',
      chapterNumber: 3,
      title: {
        hi: '३. सांच एवं चेतावनी को अंग',
        pb: '੩. ਸਾਂਚ ਤੇ ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
        en: '3. Sanch & Chetavani Ko Ang',
      },
      subtitle: {
        hi: 'परम सत्य का तप और समय की अमूल्य चेतावनी',
        pb: 'ਪਰਮ ਸੱਚ ਦਾ ਤਪ ਅਤੇ ਸਮੇਂ ਦੀ ਅਨਮੋਲ ਚੇਤਾਵਨੀ',
        en: 'Truthfulness as Supreme Austerity & Urgency of Awakening',
      },
      description: {
        hi: 'निष्कपट सत्य को सर्वोच्च साधना मानने और आज ही सतकर्म आरंभ करने की प्रेरणा।',
        pb: 'ਨਿਰਛਲ ਸੱਚ ਨੂੰ ਸਰਵਉੱਚ ਤਪ ਮੰਨਣ ਅਤੇ ਤੁਰੰਤ ਜਾਗ੍ਰਿਤੀ ਦੀ ਪ੍ਰੇਰਣਾ।',
        en: 'Living truth as the highest penance and awakening without procrastination.',
      },
      verses: byIds(['grantha-satya-7', 'grantha-chetavani-5']),
    },
    {
      id: 'granthavali-ang-4',
      chapterNumber: 4,
      title: {
        hi: '४. प्रेम-भक्ति, दया एवं साधु को अंग',
        pb: '੪. ਪ੍ਰੇਮ-ਭਗਤੀ, ਦਇਆ ਤੇ ਸਾਧੂ ਕੋ ਅੰਗ',
        en: '4. Prem-Bhakti, Daya & Sadhu Ko Ang',
      },
      subtitle: {
        hi: 'निष्कपट प्रेम, संतोष, समदृष्टि और संत-विवेक',
        pb: 'ਨਿਰਛਲ ਪ੍ਰੇਮ, ਸੰਤੋਖ, ਸਮਦ੍ਰਿਸ਼ਟੀ ਤੇ ਸੰਤ-ਵਿਵੇਕ',
        en: 'Pure Love, Contentment & Saintly Discernment',
      },
      description: {
        hi: 'सूप जैसा सारग्राही विवेक, कोरे पांडित्य से परे प्रेम और ईर्ष्या-रहित संतोष।',
        pb: 'ਛੱਜ ਵਰਗਾ ਵਿਵੇਕ, ਕਿਤਾਬੀ ਹੰਕਾਰ ਤੋਂ ਪਰੇ ਪ੍ਰੇਮ ਅਤੇ ਸੰਤੋਖ।',
        en: 'Discerning wisdom, lived love above dry scholarship, and grateful simplicity.',
      },
      verses: byIds(['grantha-prem-9', 'grantha-satsang-8', 'grantha-daya-10']),
    },
    {
      id: 'granthavali-ang-5',
      chapterNumber: 5,
      title: {
        hi: '५. बचन-विवेक, माया एवं अहं-विसर्जन अंग',
        pb: '੫. ਬਚਨ-ਵਿਵੇਕ, ਮਾਇਆ ਤੇ ਹੰਕਾਰ-ਤਿਆਗ ਅੰਗ',
        en: '5. Sweet Speech, Maya & Ego-Dissolution Ang',
      },
      subtitle: {
        hi: 'मधुर वाणी, निर्लिप्तता एवं अहंकार का विसर्जन',
        pb: 'ਮਧੁਰ ਬਾਣੀ, ਨਿਰਲੇਪਤਾ ਤੇ ਹੰਕਾਰ ਦਾ ਤਿਆਗ',
        en: 'Healing Words, Detachment from Illusion & Ego Surrender',
      },
      description: {
        hi: 'अहंकार त्यागकर प्रेम की सांकरी गली में प्रवेश और मधुर-शीतल वचनों का अभ्यास।',
        pb: 'ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਪ੍ਰੇਮ ਗਲੀ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਅਤੇ ਮਿੱਠੇ-ਸ਼ੀਤਲ ਬਚਨਾਂ ਦਾ ਅਭਿਆਸ।',
        en: 'Releasing ego in the narrow lane of devotion and practicing gentle, healing speech.',
      },
      verses: byIds(['grantha-ego-inner-2', 'grantha-mind-speech-1', 'grantha-maya-6']),
    },
  ],
};
