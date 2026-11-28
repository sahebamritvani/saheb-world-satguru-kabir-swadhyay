import { Language, NitnemSection, NitnemVersePair, Sakhi } from '../types';
import { SggsKabirVerse } from '../data/sggsKabirMetadata';
import { STARTER_SAKHIS, loadFullSakhisModule } from '../data/sakhiStarterData';
import { loadAllNitnemSections } from '../data/nitnemData';
import {
  getInjectedSakhis,
  getInjectedSggsVerses,
} from './adminSlotInjectorStore';
import type { KoshaEntry } from '../components/ShabdKosha';

export type AssistantTopicId =
  | 'satyanaam-mahima'
  | 'man-krodh-shanti'
  | 'satguru-sharan'
  | 'ahankar-tyag'
  | 'chouka-aarti-vidhi';

export interface QuickAssistantTopic {
  id: AssistantTopicId;
  label: {
    hi: string;
    pb: string;
    en: string;
  };
  query: {
    hi: string;
    pb: string;
    en: string;
  };
  guidance: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const QUICK_ASSISTANT_TOPICS: QuickAssistantTopic[] = [
  {
    id: 'satyanaam-mahima',
    label: {
      hi: 'सत्यनाम महिमा',
      pb: 'ਸਤਯਨਾਮ ਮਹਿਮਾ',
      en: 'Satyanaam Mahima',
    },
    query: {
      hi: 'सत्यनाम महिमा नाम सुमिरन',
      pb: 'ਸਤਯਨਾਮ ਸਿਮਰਨ ਨਾਮ ਮਹਿਮਾ',
      en: 'Satyanaam naam simran sumiran',
    },
    guidance: {
      hi: 'सतगुरु कबीर साहेब के अनुसार समस्त वेदों, तीर्थों और साधनाओं का परम सार "सत्यनाम" का अविरल आंतरिक सुमिरन है। श्वास-श्वास में सत्यनाम का स्मरण जीव को भवसागर से पार कर अमरलोक का अधिकारी बनाता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਸਾਰੀ ਸਾਧਨਾ ਦਾ ਮੂਲ ਸਾਰ "ਸਤਯਨਾਮ" ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਹੈ। ਹਰ ਸੁਆਸ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਜੀਵ ਨੂੰ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਕਰਦਾ ਹੈ।',
      en: 'According to Satguru Kabir Saheb, the supreme essence of all spiritual practice is continuous inner remembrance (Sumiran) of Satyanaam, carrying the soul beyond fear and illusion.',
    },
  },
  {
    id: 'man-krodh-shanti',
    label: {
      hi: 'मन व क्रोध शांति',
      pb: 'ਮਨ ਤੇ ਕ੍ਰੋਧ ਸ਼ਾਂਤੀ',
      en: 'Mind & Anger Peace',
    },
    query: {
      hi: 'मन क्रोध शांति धैर्य मीठी वाणी',
      pb: 'ਮਨ ਕ੍ਰੋਧ ਸ਼ਾਂਤੀ ਧੀਰਜ ਮਿੱਠੇ ਬੋਲ',
      en: 'mind anger peace patience sweet speech',
    },
    guidance: {
      hi: 'मन को शांत करने का सबसे सहज उपाय मीठी वाणी, क्षमा-भाव और अंतर्मुखी सुमिरन है। जहाँ क्षमा और विनम्रता होती है, वहाँ क्रोध रूपी अग्नि स्वयं बुझ जाती है।',
      pb: 'ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਸਹਿਜ ਉਪਾਅ ਮਿੱਠੇ ਬੋਲ, ਖਿਮਾ ਅਤੇ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਹੈ। ਜਿੱਥੇ ਖਿਮਾ ਅਤੇ ਨਿਮਰਤਾ ਹੁੰਦੀ ਹੈ, ਉੱਥੇ ਕ੍ਰੋਧ ਦੀ ਅੱਗ ਬੁਝ ਜਾਂਦੀ ਹੈ।',
      en: 'Inner peace blossoms through gentle speech, forgiveness, and mindful Sumiran. Where humility and patience dwell, the fire of anger naturally subsides.',
    },
  },
  {
    id: 'satguru-sharan',
    label: {
      hi: 'सतगुरु शरण',
      pb: 'ਸਤਿਗੁਰੂ ਸ਼ਰਨ',
      en: 'Satguru Sharan',
    },
    query: {
      hi: 'सतगुरु शरण गुरु महिमा कृपा चरण',
      pb: 'ਸਤਿਗੁਰੂ ਸ਼ਰਨ ਗੁਰੂ ਮਹਿਮਾ ਕਿਰਪਾ ਚਰਨ',
      en: 'Satguru guru grace refuge surrender',
    },
    guidance: {
      hi: 'बिना सतगुरु की कृपा और ज्ञान-दीपक के सत्य का मार्ग नहीं मिलता। सतगुरु ही संशय का अंधकार मिटाकर जीव को सत्यनाम और परमपद का बोध कराते हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਅਤੇ ਗਿਆਨ ਤੋਂ ਬਿਨਾਂ ਸੱਚ ਦਾ ਮਾਰਗ ਨਹੀਂ ਮਿਲਦਾ। ਸਤਿਗੁਰੂ ਹੀ ਭਰਮ ਦਾ ਹਨੇਰਾ ਮਿਟਾ ਕੇ ਸਤਯਨਾਮ ਦੀ ਸੋਝੀ ਬਖਸ਼ਦੇ ਹਨ।',
      en: 'Without the grace and guiding light of the Satguru, truth remains hidden. The Satguru dispels doubt and reveals the living path of Satyanaam.',
    },
  },
  {
    id: 'ahankar-tyag',
    label: {
      hi: 'अहंकार त्याग',
      pb: 'ਹੰਕਾਰ ਤਿਆਗ',
      en: 'Letting Go of Ego',
    },
    query: {
      hi: 'अहंकार अभिमान विनम्रता गरब मैं',
      pb: 'ਹੰਕਾਰ ਅਭਿਮਾਨ ਨਿਮਰਤਾ ਹਉਮੈ',
      en: 'ego pride humility surrender ahankar',
    },
    guidance: {
      hi: 'जब तक भीतर "मैं-पन" और अहंकार है, तब तक प्रभु और सतगुरु का प्रेम प्रकट नहीं होता। विनम्रता, सेवा और "हम" की हंस-वृत्ति अपनाकर अहंकार का सहज त्याग करें।',
      pb: 'ਜਦੋਂ ਤੱਕ ਅੰਦਰ ਹਉਮੈ ਅਤੇ ਹੰਕਾਰ ਹੈ, ਤਦ ਤੱਕ ਸਤਿਗੁਰੂ ਦਾ ਪ੍ਰੇਮ ਪ੍ਰਗਟ ਨਹੀਂ ਹੁੰਦਾ। ਨਿਮਰਤਾ ਅਤੇ ਸੇਵਾ ਨਾਲ ਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰੋ।',
      en: 'As long as "I-ness" and pride occupy the heart, divine grace has no room. Practicing humility, service, and gentle awareness dissolves the ego.',
    },
  },
  {
    id: 'chouka-aarti-vidhi',
    label: {
      hi: 'चौका-आरती विधि',
      pb: 'ਚੌਕਾ-ਆਰਤੀ ਵਿਧੀ',
      en: 'Chouka-Aarti Vidhi',
    },
    query: {
      hi: 'चौका आरती विधि नारियल तिलक सात्विक',
      pb: 'ਚੌਕਾ ਆਰਤੀ ਵਿਧੀ ਨਾਰੀਅਲ ਤਿਲਕ ਸਾਤਵਿਕ',
      en: 'chouka aarti vidhi coconut tilak sacred',
    },
    guidance: {
      hi: 'कबीर पंथ में चौका-आरती को "सात्विक यज्ञ" कहा गया है। शुद्ध स्थान पर चौका अंकित कर श्रीफल (नारियल), पान-सुपारी, घृत दीपक और मंगलाचरण सहित श्रद्धापूर्वक आरती की जाती है।',
      pb: 'ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਚੌਕਾ-ਆਰਤੀ ਨੂੰ "ਸਾਤਵਿਕ ਯੱਗ" ਕਿਹਾ ਗਿਆ ਹੈ। ਪਵਿੱਤਰ ਸਥਾਨ ਉੱਤੇ ਚੌਕਾ ਬਣਾ ਕੇ ਨਾਰੀਅਲ, ਪਾਨ-ਸੁਪਾਰੀ ਤੇ ਸ਼ੁੱਧ ਘਿਓ ਦੇ ਦੀਵੇ ਨਾਲ ਆਰਤੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      en: 'In Kabir Panth, Chouka Aarti is honored as the sacred Satvik Yajna — performed with inner purity, sacred floor rangoli, coconut (ego-surrender), pure ghee lamp, and Aarti.',
    },
  },
];

export interface SakhiSearchHit {
  sakhi: Sakhi;
  score: number;
}

export interface SggsSearchHit {
  verse: SggsKabirVerse;
  score: number;
}

export interface NitnemSearchHit {
  id: string;
  sectionId: string;
  sectionTitle: { hi: string; pb: string; en: string };
  lines: { hi: string[]; pb?: string[]; en?: string[] };
  bhavarth?: { hi: string; pb: string; en: string };
  score: number;
}

export interface ChoukaSearchHit {
  id: string;
  kind: 'qa' | 'step' | 'rule';
  title: { hi: string; pb: string; en: string };
  body: { hi: string; pb: string; en: string };
  score: number;
}

export interface GlossarySearchHit {
  entry: KoshaEntry;
  score: number;
}

export interface AssistantSearchResults {
  query: string;
  guidanceSummary: string;
  totalCount: number;
  sakhis: SakhiSearchHit[];
  sggs: SggsSearchHit[];
  nitnem: NitnemSearchHit[];
  choukaQa: ChoukaSearchHit[];
  glossary: GlossarySearchHit[];
}

interface IndexedVault {
  sakhis: Sakhi[];
  sggs: SggsKabirVerse[];
  nitnemSections: NitnemSection[];
  glossary: KoshaEntry[];
  choukaItems: Array<{
    id: string;
    kind: 'qa' | 'step' | 'rule';
    title: { hi: string; pb: string; en: string };
    body: { hi: string; pb: string; en: string };
  }>;
}

let cachedVault: IndexedVault | null = null;
let vaultLoadPromise: Promise<IndexedVault> | null = null;

/**
 * Synonyms & Life-Question Expansion Map (100% offline local intelligence)
 */
const SYNONYM_CLUSTERS: Array<{ triggers: string[]; expansions: string[] }> = [
  {
    triggers: ['सत्यनाम', 'ਸਤਯਨਾਮ', 'satyanaam', 'satnam', 'नाम', 'ਨਾਮ', 'naam', 'सुमिरन', 'सिमरन', 'ਸਿਮਰਨ', 'simran', 'sumiran', 'जाप', 'जप', 'mantra', 'मंत्र', 'शबद', 'सार'],
    expansions: ['सत्यनाम', 'नाम', 'सुमिरन', 'सिमरन', 'सार शब्द', 'ਸਤਯਨਾਮ', 'ਨਾਮ', 'ਸਿਮਰਨ', 'satyanaam', 'naam', 'simran', 'sumiran', 'chant', 'remembrance'],
  },
  {
    triggers: ['मन', 'ਮਨ', 'mind', 'अशांत', 'चंचल', 'चिंता', 'तनाव', 'stress', 'anxiety', 'worry', 'depression', 'peace', 'शांति', 'ਸ਼ਾਂਤੀ', 'calm', 'दुख', 'सुकून'],
    expansions: ['मन', 'शांति', 'धीरज', 'धैर्य', 'चंचल', 'विवेक', 'ਮਨ', 'ਸ਼ਾਂਤੀ', 'ਧੀਰਜ', 'mind', 'peace', 'calm', 'patience', 'steady', 'quiet'],
  },
  {
    triggers: ['क्रोध', 'ਕ੍ਰੋਧ', 'गुस्सा', 'anger', 'angry', 'mad', 'वाणी', 'बोल', 'कठोर', 'मीठी', 'क्षमा', 'forgive', 'speech', 'harsh'],
    expansions: ['क्रोध', 'कोप', 'वाणी', 'मीठी', 'शीतल', 'क्षमा', 'ਕ੍ਰੋਧ', 'ਮਿੱਠੇ', 'ਖਿਮਾ', 'anger', 'wrath', 'forgive', 'gentle', 'speech', 'sweet'],
  },
  {
    triggers: ['सतगुरु', 'गुरु', 'ਸਤਿਗੁਰੂ', 'ਗੁਰੂ', 'satguru', 'guru', 'master', 'teacher', 'शरण', 'चरण', 'बंदगी', 'कबीर', 'कृपा', 'grace', 'refuge'],
    expansions: ['सतगुरु', 'गुरु', 'कबीर', 'गोविंद', 'चरण', 'शरण', 'कृपा', 'बलिहारी', 'ਸਤਿਗੁਰੂ', 'ਗੁਰੂ', 'ਕਿਰਪਾ', 'satguru', 'guru', 'kabir', 'grace', 'master'],
  },
  {
    triggers: ['अहंकार', 'अभिमान', 'घमंड', 'मान', 'गर्व', 'मैं', 'हउमै', 'ਹੰਕਾਰ', 'ਹਉਮੈ', 'ego', 'pride', 'proud', 'arrogance', 'humility', 'विनम्रता', 'नम्रता', 'तिनका'],
    expansions: ['अहंकार', 'अभिमान', 'गरब', 'आपा', 'विनम्रता', 'नम्रता', 'दासन', 'ਹੰਕਾਰ', 'ਹਉਮੈ', 'ਨਿਮਰਤਾ', 'ego', 'pride', 'humility', 'humble', 'surrender'],
  },
  {
    triggers: ['चौका', 'आरती', 'विधि', 'नारियल', 'श्रीफल', 'तिलक', 'चंदन', 'दामाखेड़ा', 'पूनो', 'ਚੌਕਾ', 'ਆਰਤੀ', 'ਵਿਧੀ', 'chouka', 'aarti', 'vidhi', 'coconut', 'tilak', 'damakheda'],
    expansions: ['चौका', 'आरती', 'सात्विक', 'श्रीफल', 'नारियल', 'तिलक', 'पूनो', 'दामाखेड़ा', 'ਚੌਕਾ', 'ਆਰਤੀ', 'ਨਾਰੀਅਲ', 'chouka', 'aarti', 'vidhi', 'tilak', 'yajna'],
  },
  {
    triggers: ['माया', 'मोह', 'लोभ', 'लालच', 'पैसा', 'धन', 'संसार', 'ਮਾਇਆ', 'ਮੋਹ', 'ਲੋਭ', 'maya', 'illusion', 'greed', 'attachment', 'money', 'world'],
    expansions: ['माया', 'मोह', 'लोभ', 'कंचन', 'कामिनी', 'तृष्णा', 'ਮਾਇਆ', 'ਮੋਹ', 'ਲੋਭ', 'maya', 'illusion', 'greed', 'desire', 'attachment'],
  },
  {
    triggers: ['काल', 'मृत्यु', 'मौत', 'डर', 'भय', 'जीवन', 'ਮੌਤ', 'ਕਾਲ', 'ਡਰ', 'death', 'fear', 'kaal', 'time', 'life', 'mortality'],
    expansions: ['काल', 'मृत्यु', 'जम', 'यम', 'काया', 'माटी', 'ਕਾਲ', 'ਮੌਤ', 'ਕਾਇਆ', 'kaal', 'death', 'mortal', 'clay', 'fear'],
  },
  {
    triggers: ['सत्संग', 'साधु', 'संत', 'संगति', 'निंदक', 'दया', 'प्रेम', 'सेवा', 'ਸੰਗਤ', 'ਸਾਧੂ', 'ਦਇਆ', 'satsang', 'saint', 'company', 'love', 'compassion', 'critic'],
    expansions: ['साधु', 'संत', 'सत्संग', 'संगति', 'निंदक', 'दया', 'प्रेम', 'ਸੇਵਾ', 'ਸਾਧੂ', 'ਸਤਿਸੰਗ', 'saint', 'compassion', 'love', 'satsang', 'fellowship'],
  },
];

function normalizeText(str: string): string {
  return (str || '')
    .toLowerCase()
    .replace(/[।॥|.,!?;:'"()[\]{}🌹🪷🙏✨]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildExpandedTerms(rawQuery: string): {
  baseTerms: string[];
  expandedTerms: string[];
} {
  const normalized = normalizeText(rawQuery);
  const stopWords = new Set([
    'का', 'के', 'की', 'को', 'में', 'से', 'पर', 'है', 'हैं', 'हूँ', 'हो', 'और', 'या', 'क्या', 'कैसे', 'क्यों',
    'कब', 'करें', 'करने', 'वाला', 'लिए', 'नहीं', 'मेरा', 'मेरी', 'मेरे', 'हम', 'अपने', 'बताएं', 'बताओ',
    'ਦਾ', 'ਦੇ', 'ਦੀ', 'ਨੂੰ', 'ਵਿੱਚ', 'ਤੋਂ', 'ਉੱਤੇ', 'ਹੈ', 'ਹਨ', 'ਅਤੇ', 'ਕੀ', 'ਕਿਵੇਂ', 'ਲਈ',
    'the', 'is', 'am', 'are', 'to', 'of', 'in', 'for', 'how', 'what', 'why', 'when', 'do', 'does', 'a', 'an', 'my', 'i', 'me', 'about', 'with',
  ]);

  const rawTokens = normalized.split(' ').filter((w) => w.length >= 2 && !stopWords.has(w));
  const baseTerms = rawTokens.length > 0 ? rawTokens : (normalized ? [normalized] : []);

  const expandedSet = new Set<string>(baseTerms);
  for (const cluster of SYNONYM_CLUSTERS) {
    const matched = cluster.triggers.some(
      (t) => normalized.includes(t.toLowerCase()) || baseTerms.some((bt) => bt.includes(t.toLowerCase()))
    );
    if (matched) {
      cluster.expansions.forEach((exp) => expandedSet.add(exp.toLowerCase()));
    }
  }

  return {
    baseTerms,
    expandedTerms: Array.from(expandedSet),
  };
}

function scoreField(text: string, baseTerms: string[], expandedTerms: string[], weight: number): number {
  if (!text) return 0;
  const norm = text.toLowerCase();
  let score = 0;
  for (const term of baseTerms) {
    if (norm.includes(term)) score += 3 * weight;
  }
  for (const exp of expandedTerms) {
    if (norm.includes(exp)) score += 1 * weight;
  }
  return score;
}

export async function preloadOfflineScriptureVault(): Promise<IndexedVault> {
  if (cachedVault) return cachedVault;
  if (vaultLoadPromise) return vaultLoadPromise;

  vaultLoadPromise = (async () => {
    const [
      fullSakhiMod,
      sggsMod,
      injectedNitnem,
      prabhatMod,
      sandhyaMod,
      gayatriMod,
      poonamMod,
      chalisaMod,
      barahmasiMod,
      teesaMod,
      choukaMod,
      koshaMod,
    ] = await Promise.all([
      loadFullSakhisModule().catch(() => ({ sakhisDatabase: STARTER_SAKHIS })),
      import('../data/sggsKabirBaniData').catch(() => ({ SGGS_KABIR_VERSES_COLLECTION: [] as SggsKabirVerse[] })),
      loadAllNitnemSections().catch(() => [] as NitnemSection[]),
      import('../data/nitnem/prabhatPath').catch(() => ({ PRABHAT_PATH_SECTIONS: [] as NitnemSection[] })),
      import('../data/nitnem/sandhyaPath').catch(() => ({ SANDHYA_PATH_SECTIONS: [] as NitnemSection[] })),
      import('../data/nitnem/gayatriPath').catch(() => ({ GAYATRI_PATH_SECTIONS: [] as NitnemSection[] })),
      import('../data/nitnem/poonamMahatmya').catch(() => ({ POONAM_MAHATMYA_SECTIONS: [] as NitnemSection[] })),
      import('../data/nitnem/kabirChalisaVerses').catch(() => ({ KABIR_CHALISA_VERSES: [] as NitnemVersePair[] })),
      import('../data/nitnem/barahmasiVerses').catch(() => ({ BARAHMASI_VERSES: [] as NitnemVersePair[] })),
      import('../data/nitnem/teesaYantraVerses').catch(() => ({ TEESA_YANTRA_VERSES: [] as NitnemVersePair[] })),
      import('../components/ChoukaAartiVidhiModal').catch(() => ({ CHOUKA_SECTIONS: null, PANTHIC_QA_LIST: [] })),
      import('../components/ShabdKosha').catch(() => ({ GLOSSARY_DB: [] as KoshaEntry[] })),
    ]);

    // 1. Sakhis (deduped by id)
    const sakhiMap = new Map<string, Sakhi>();
    [
      ...STARTER_SAKHIS,
      ...(fullSakhiMod.sakhisDatabase || []),
      ...getInjectedSakhis(),
    ].forEach((s) => {
      if (s && s.id) sakhiMap.set(s.id, s);
    });
    const sakhis = Array.from(sakhiMap.values());

    // 2. SGGS Saloks & Shabads (deduped by id)
    const sggsMap = new Map<string, SggsKabirVerse>();
    [
      ...(sggsMod.SGGS_KABIR_VERSES_COLLECTION || []),
      ...getInjectedSggsVerses(),
    ].forEach((v) => {
      if (v && v.id) sggsMap.set(v.id, v);
    });
    const sggs = Array.from(sggsMap.values());

    // 3. Nitnem Gutka Saheb (combine injected + static sections + chalisa/barahmasi/teesa)
    const syntheticPathSections: NitnemSection[] = [];
    if ((chalisaMod.KABIR_CHALISA_VERSES || []).length > 0) {
      syntheticPathSections.push({
        id: 'kabir-chalisa-path',
        majorCategoryId: 'chalisa',
        title: {
          hi: '५. सतगुरु कबीर चालीसा पाठ',
          pb: '੫. ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ',
          en: '5. Satguru Kabir Chalisa Path',
        },
        totalVerses: chalisaMod.KABIR_CHALISA_VERSES.length,
        verses: chalisaMod.KABIR_CHALISA_VERSES,
      });
    }
    if ((barahmasiMod.BARAHMASI_VERSES || []).length > 0) {
      syntheticPathSections.push({
        id: 'barahmasi-path',
        majorCategoryId: 'barahmasi',
        title: {
          hi: '६. बारहमासी पाठ',
          pb: '੬. ਬਾਰਹਮਾਸੀ ਪਾਠ',
          en: '6. Barahmasi Path',
        },
        totalVerses: barahmasiMod.BARAHMASI_VERSES.length,
        verses: barahmasiMod.BARAHMASI_VERSES,
      });
    }
    if ((teesaMod.TEESA_YANTRA_VERSES || []).length > 0) {
      syntheticPathSections.push({
        id: 'teesa-yantra-path',
        majorCategoryId: 'teesa-yantra',
        title: {
          hi: '७. तीसा यंत्र पाठ',
          pb: '੭. ਤੀਸਾ ਯੰਤਰ ਪਾਠ',
          en: '7. Teesa Yantra Path',
        },
        totalVerses: teesaMod.TEESA_YANTRA_VERSES.length,
        verses: teesaMod.TEESA_YANTRA_VERSES,
      });
    }

    const nitnemMap = new Map<string, NitnemSection>();
    [
      ...(prabhatMod.PRABHAT_PATH_SECTIONS || []),
      ...(sandhyaMod.SANDHYA_PATH_SECTIONS || []),
      ...(gayatriMod.GAYATRI_PATH_SECTIONS || []),
      ...(poonamMod.POONAM_MAHATMYA_SECTIONS || []),
      ...syntheticPathSections,
      ...(injectedNitnem || []),
    ].forEach((sec) => {
      if (sec && sec.verses && sec.verses.length > 0) {
        nitnemMap.set(sec.id, sec);
      }
    });
    const nitnemSections = Array.from(nitnemMap.values());

    // 4. Chouka-Aarti Vidhi & Panthic Q&A
    const choukaItems: IndexedVault['choukaItems'] = [];
    if (Array.isArray(choukaMod.PANTHIC_QA_LIST)) {
      choukaMod.PANTHIC_QA_LIST.forEach((qa, idx) => {
        choukaItems.push({
          id: `chouka-qa-${idx}`,
          kind: 'qa',
          title: qa.q,
          body: qa.a,
        });
      });
    }
    if (choukaMod.CHOUKA_SECTIONS) {
      const hiSec = choukaMod.CHOUKA_SECTIONS.hi;
      const pbSec = choukaMod.CHOUKA_SECTIONS.pb;
      const enSec = choukaMod.CHOUKA_SECTIONS.en;

      choukaItems.push({
        id: 'chouka-intro',
        kind: 'rule',
        title: { hi: hiSec.introTitle, pb: pbSec.introTitle, en: enSec.introTitle },
        body: { hi: hiSec.introDesc, pb: pbSec.introDesc, en: enSec.introDesc },
      });

      hiSec.steps.forEach((st, idx) => {
        choukaItems.push({
          id: `chouka-step-${idx}`,
          kind: 'step',
          title: {
            hi: st.step,
            pb: pbSec.steps[idx]?.step || st.step,
            en: enSec.steps[idx]?.step || st.step,
          },
          body: {
            hi: st.desc,
            pb: pbSec.steps[idx]?.desc || st.desc,
            en: enSec.steps[idx]?.desc || st.desc,
          },
        });
      });

      choukaItems.push({
        id: 'chouka-rules',
        kind: 'rule',
        title: { hi: hiSec.rulesTitle, pb: pbSec.rulesTitle, en: enSec.rulesTitle },
        body: {
          hi: hiSec.rules.join(' • '),
          pb: pbSec.rules.join(' • '),
          en: enSec.rules.join(' • '),
        },
      });
    }

    // 5. Glossary Terms
    const glossary = Array.isArray(koshaMod.GLOSSARY_DB) ? koshaMod.GLOSSARY_DB : [];

    cachedVault = {
      sakhis,
      sggs,
      nitnemSections,
      glossary,
      choukaItems,
    };
    return cachedVault;
  })();

  return vaultLoadPromise;
}

/**
 * Generates contextual offline guidance banner based on matched topic or query keywords
 */
function resolveGuidanceSummary(
  query: string,
  language: Language,
  matchedCounts: { sakhis: number; sggs: number; nitnem: number; chouka: number; glossary: number }
): string {
  const norm = normalizeText(query);

  // Match quick topic first if closely aligned
  for (const topic of QUICK_ASSISTANT_TOPICS) {
    const labelNorm = normalizeText(topic.label[language] || topic.label.hi);
    if (norm === labelNorm || norm.includes(labelNorm)) {
      return topic.guidance[language] || topic.guidance.hi;
    }
  }

  // Theme-specific helpful guidance
  if (/(क्रोध|गुस्सा|मन|अशांत|anger|mind|peace|anxiety|ਕ੍ਰੋਧ|ਮਨ|ਸ਼ਾਂਤੀ)/i.test(norm)) {
    return QUICK_ASSISTANT_TOPICS[1].guidance[language] || QUICK_ASSISTANT_TOPICS[1].guidance.hi;
  }
  if (/(चौका|आरती|नारियल|तिलक|chouka|aarti|vidhi|ਚੌਕਾ|ਆਰਤੀ)/i.test(norm)) {
    return QUICK_ASSISTANT_TOPICS[4].guidance[language] || QUICK_ASSISTANT_TOPICS[4].guidance.hi;
  }
  if (/(अहंकार|अभिमान|घमंड|ego|pride|ਹੰਕਾਰ|ਹਉਮੈ)/i.test(norm)) {
    return QUICK_ASSISTANT_TOPICS[3].guidance[language] || QUICK_ASSISTANT_TOPICS[3].guidance.hi;
  }
  if (/(सत्यनाम|सुमिरन|सिमरन|satyanaam|simran|naam|ਸਤਯਨਾਮ|ਸਿਮਰਨ)/i.test(norm)) {
    return QUICK_ASSISTANT_TOPICS[0].guidance[language] || QUICK_ASSISTANT_TOPICS[0].guidance.hi;
  }
  if (/(सतगुरु|गुरु|शरण|satguru|guru|grace|ਸਤਿਗੁਰੂ|ਗੁਰੂ)/i.test(norm)) {
    return QUICK_ASSISTANT_TOPICS[2].guidance[language] || QUICK_ASSISTANT_TOPICS[2].guidance.hi;
  }

  const total =
    matchedCounts.sakhis +
    matchedCounts.sggs +
    matchedCounts.nitnem +
    matchedCounts.chouka +
    matchedCounts.glossary;

  if (total === 0) {
    if (language === 'pb') {
      return 'ਇਸ ਸ਼ਬਦ ਲਈ ਸਿੱਧਾ ਮੇਲ ਨਹੀਂ ਮਿਲਿਆ। ਉੱਪਰ ਦਿੱਤੇ ਵਿਸ਼ਿਆਂ ਵਿੱਚੋਂ ਚੁਣੋ ਜਾਂ ਸਤਯਨਾਮ, ਮਨ, ਕ੍ਰੋਧ, ਸਤਿਗੁਰੂ, ਹੰਕਾਰ, ਚੌਕਾ-ਆਰਤੀ ਆਦਿ ਲਿਖ ਕੇ ਖੋਜੋ।';
    }
    if (language === 'en') {
      return 'No exact match found for that phrase. Try one of the quick topic chips above or search terms like Satyanaam, mind, anger, Satguru, ego, or Chouka Aarti.';
    }
    return 'इस शब्द के लिए सीधा मिलान नहीं मिला। कृपया ऊपर दिए गए विषय चिप्स चुनें या "सत्यनाम", "मन", "क्रोध", "सतगुरु", "अहंकार", "माया" या "चौका-आरती" लिखकर खोजें।';
  }

  if (language === 'pb') {
    return `ਤੁਹਾਡੀ ਜਿਗਿਆਸਾ ਲਈ ਸਾਖੀਆਂ, SGGS ਬਾਣੀ, ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ, ਚੌਕਾ-ਆਰਤੀ ਅਤੇ ਸ਼ਬਦਕੋਸ਼ ਵਿੱਚੋਂ ${total} ਪ੍ਰਮਾਣਿਕ ਹਵਾਲੇ ਮਿਲੇ ਹਨ।`;
  }
  if (language === 'en') {
    return `Found ${total} authentic offline scripture references across Sakhis, SGGS Bani, Nitnem Gutka Saheb, Chouka-Aarti Q&A, and Shabd Kosha.`;
  }
  return `आपकी जिज्ञासा के लिए साखियों, SGGS वाणी, नितनेम गुटका साहेब, चौका-आरती एवं शब्दकोश में से ${total} प्रामाणिक संदर्भ खोजे गए हैं।`;
}

export async function searchOfflineScriptures(
  rawQuery: string,
  language: Language
): Promise<AssistantSearchResults> {
  const vault = await preloadOfflineScriptureVault();
  const trimmed = rawQuery.trim();

  if (!trimmed) {
    // Curated starter highlights when opened cleanly
    const featuredSakhis = vault.sakhis.slice(0, 6).map((sakhi, i) => ({
      sakhi,
      score: 100 - i,
    }));
    const featuredGlossary = vault.glossary.slice(0, 4).map((entry, i) => ({
      entry,
      score: 80 - i,
    }));
    const featuredChouka = vault.choukaItems.slice(0, 3).map((item, i) => ({
      ...item,
      score: 70 - i,
    }));

    return {
      query: '',
      guidanceSummary:
        language === 'pb'
          ? '🪷 ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਸਹਾਇਕ ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਫ਼ਲਾਈਨ ਹੈ। ਕੋਈ ਵੀ ਜੀਵਨ-ਪ੍ਰਸ਼ਨ, ਸ਼ਬਦ ਜਾਂ ਉੱਪਰ ਦਿੱਤਾ ਵਿਸ਼ਾ ਚੁਣੋ ਅਤੇ ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ ਪ੍ਰਾਪਤ ਕਰੋ।'
          : language === 'en'
          ? '🪷 Saheb Swadhyay Assistant works 100% offline. Ask a life question, enter any keyword, or tap a topic chip above for authentic scripture wisdom.'
          : '🪷 साहेब स्वाध्याय सहायक पूर्णतः ऑफ़लाइन कार्य करता है। कोई भी जीवन-प्रश्न या शब्द लिखें अथवा ऊपर दिए गए विषय चुनकर सतगुरु कबीर साहेब की प्रामाणिक वाणी और भावार्थ देखें।',
      totalCount: featuredSakhis.length + featuredGlossary.length + featuredChouka.length,
      sakhis: featuredSakhis,
      sggs: [],
      nitnem: [],
      choukaQa: featuredChouka,
      glossary: featuredGlossary,
    };
  }

  const { baseTerms, expandedTerms } = buildExpandedTerms(trimmed);

  // 1. Search Sakhis
  const sakhiHits: SakhiSearchHit[] = [];
  for (const sakhi of vault.sakhis) {
    let score = 0;
    score += scoreField(sakhi.text.hi, baseTerms, expandedTerms, 4);
    score += scoreField(sakhi.text.pb, baseTerms, expandedTerms, 4);
    score += scoreField(sakhi.text.en, baseTerms, expandedTerms, 3);
    score += scoreField(sakhi.transliteration || '', baseTerms, expandedTerms, 2);
    score += scoreField(sakhi.categoryTitle.hi, baseTerms, expandedTerms, 3);
    score += scoreField(sakhi.categoryTitle.pb, baseTerms, expandedTerms, 3);
    score += scoreField(sakhi.categoryTitle.en, baseTerms, expandedTerms, 3);
    score += scoreField(sakhi.bhavarth.hi, baseTerms, expandedTerms, 2);
    score += scoreField(sakhi.bhavarth.pb, baseTerms, expandedTerms, 2);
    score += scoreField(sakhi.bhavarth.en, baseTerms, expandedTerms, 2);
    score += scoreField(sakhi.contemplation?.hi || '', baseTerms, expandedTerms, 1.5);
    score += scoreField(sakhi.contemplation?.en || '', baseTerms, expandedTerms, 1.5);
    if (sakhi.themeTags?.length) {
      score += scoreField(sakhi.themeTags.join(' '), baseTerms, expandedTerms, 3);
    }
    if (String(sakhi.number) === trimmed) score += 40;
    if (score > 0) sakhiHits.push({ sakhi, score });
  }
  sakhiHits.sort((a, b) => b.score - a.score);

  // 2. Search SGGS Kabir Bani
  const sggsHits: SggsSearchHit[] = [];
  for (const verse of vault.sggs) {
    let score = 0;
    score += scoreField(verse.title.hi, baseTerms, expandedTerms, 3);
    score += scoreField(verse.title.pb, baseTerms, expandedTerms, 3);
    score += scoreField(verse.title.en, baseTerms, expandedTerms, 3);
    score += scoreField(verse.moolDevanagari.join(' '), baseTerms, expandedTerms, 3.5);
    score += scoreField(verse.moolGurmukhi.join(' '), baseTerms, expandedTerms, 3.5);
    score += scoreField(verse.moolRoman.join(' '), baseTerms, expandedTerms, 2.5);
    score += scoreField(verse.bhavarth.hi, baseTerms, expandedTerms, 2);
    score += scoreField(verse.bhavarth.pb, baseTerms, expandedTerms, 2);
    score += scoreField(verse.bhavarth.en, baseTerms, expandedTerms, 2);
    if (score > 0) sggsHits.push({ verse, score });
  }
  sggsHits.sort((a, b) => b.score - a.score);

  // 3. Search Nitnem Gutka Saheb
  const nitnemHits: NitnemSearchHit[] = [];
  for (const sec of vault.nitnemSections) {
    const secTitleScore =
      scoreField(sec.title.hi, baseTerms, expandedTerms, 2) +
      scoreField(sec.title.pb, baseTerms, expandedTerms, 2) +
      scoreField(sec.title.en, baseTerms, expandedTerms, 2);

    for (const v of sec.verses) {
      let score = secTitleScore;
      score += scoreField(v.lines.hi.join(' '), baseTerms, expandedTerms, 3.5);
      score += scoreField((v.lines.pb || []).join(' '), baseTerms, expandedTerms, 3.5);
      score += scoreField((v.lines.en || []).join(' '), baseTerms, expandedTerms, 2.5);
      score += scoreField(v.bhavarth?.hi || '', baseTerms, expandedTerms, 2);
      score += scoreField(v.bhavarth?.pb || '', baseTerms, expandedTerms, 2);
      score += scoreField(v.bhavarth?.en || '', baseTerms, expandedTerms, 2);
      if (score > 3) {
        nitnemHits.push({
          id: `${sec.id}-${v.id}`,
          sectionId: sec.id,
          sectionTitle: sec.title,
          lines: v.lines,
          bhavarth: v.bhavarth,
          score,
        });
      }
    }
  }
  nitnemHits.sort((a, b) => b.score - a.score);

  // 4. Search Chouka-Aarti Vidhi & Panthic Q&A
  const choukaHits: ChoukaSearchHit[] = [];
  for (const item of vault.choukaItems) {
    let score = 0;
    score += scoreField(item.title.hi, baseTerms, expandedTerms, 3.5);
    score += scoreField(item.title.pb, baseTerms, expandedTerms, 3.5);
    score += scoreField(item.title.en, baseTerms, expandedTerms, 3.5);
    score += scoreField(item.body.hi, baseTerms, expandedTerms, 2);
    score += scoreField(item.body.pb, baseTerms, expandedTerms, 2);
    score += scoreField(item.body.en, baseTerms, expandedTerms, 2);
    if (score > 0) {
      choukaHits.push({
        ...item,
        score,
      });
    }
  }
  choukaHits.sort((a, b) => b.score - a.score);

  // 5. Search Glossary Terms
  const glossaryHits: GlossarySearchHit[] = [];
  for (const entry of vault.glossary) {
    let score = 0;
    score += scoreField(entry.term.hi, baseTerms, expandedTerms, 5);
    score += scoreField(entry.term.pb, baseTerms, expandedTerms, 5);
    score += scoreField(entry.term.en, baseTerms, expandedTerms, 5);
    score += scoreField(entry.literalMeaning.hi, baseTerms, expandedTerms, 2);
    score += scoreField(entry.literalMeaning.pb, baseTerms, expandedTerms, 2);
    score += scoreField(entry.literalMeaning.en, baseTerms, expandedTerms, 2);
    score += scoreField(entry.mysticalMeaning.hi, baseTerms, expandedTerms, 1.5);
    score += scoreField(entry.mysticalMeaning.en, baseTerms, expandedTerms, 1.5);
    if (score > 0) glossaryHits.push({ entry, score });
  }
  glossaryHits.sort((a, b) => b.score - a.score);

  const topSakhis = sakhiHits.slice(0, 12);
  const topSggs = sggsHits.slice(0, 8);
  const topNitnem = nitnemHits.slice(0, 8);
  const topChouka = choukaHits.slice(0, 8);
  const topGlossary = glossaryHits.slice(0, 8);

  const totalCount =
    topSakhis.length +
    topSggs.length +
    topNitnem.length +
    topChouka.length +
    topGlossary.length;

  return {
    query: trimmed,
    guidanceSummary: resolveGuidanceSummary(trimmed, language, {
      sakhis: topSakhis.length,
      sggs: topSggs.length,
      nitnem: topNitnem.length,
      chouka: topChouka.length,
      glossary: topGlossary.length,
    }),
    totalCount,
    sakhis: topSakhis,
    sggs: topSggs,
    nitnem: topNitnem,
    choukaQa: topChouka,
    glossary: topGlossary,
  };
}
