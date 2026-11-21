import { Sakhi, Language, WordMeaning } from '../types';
import { hindiToPunjabiWordConverter } from './transliteration';
import { ensureSatguruKabirSaheb } from '../utils/textSanitizer';

export interface CuratedStepDepth {
  step1Concise: { hi: string; pb: string; en: string };
  step4WhyTaught: { hi: string; pb: string; en: string };
  step4Drishtant: { hi: string; pb: string; en: string };
  step4MindAnalysis: { hi: string; pb: string; en: string };
  step6EsotericSymbols: { hi: string; pb: string; en: string };
  step6TattvaGyan: { hi: string; pb: string; en: string };
}

type ThemeKey =
  | 'sweet-speech'
  | 'ego-inner'
  | 'guru'
  | 'naam'
  | 'maya'
  | 'chetavani'
  | 'satya-hypocrisy'
  | 'satsang'
  | 'prem-bhakti'
  | 'compassion'
  | 'mind-control'
  | 'yoga-ghat';

/**
 * Handcrafted, spiritually rich content for featured Sakhis (e.g., Sakhi #1106)
 * guaranteeing zero overlap between Step 1, Step 4, and Step 6.
 */
const CURATED_SAKHI_DEPTH: Record<number, CuratedStepDepth> = {
  1106: {
    step1Concise: {
      hi: 'अपने मुख से सदा शीतल, मधुर और विनम्र वचन बोलने चाहिए तथा मन में कभी अहंकार नहीं लाना चाहिए। सतगुरु कबीर साहेब समझाते हैं कि तुम्हारा सच्चा प्रीतम (परमात्मा) भी तुम्हारे भीतर ही बसता है और तुम्हारा सबसे बड़ा शत्रु (अहंकार और कटु मन) भी तुम्हारे ही अंतःकरण में रहता है।',
      pb: 'ਆਪਣੇ ਮੁੱਖ ਤੋਂ ਸਦਾ ਸ਼ੀਤਲ, ਮਿੱਠੇ ਅਤੇ ਨਿਮਰ ਬਚਨ ਬੋਲਣੇ ਚਾਹੀਦੇ ਹਨ ਅਤੇ ਮਨ ਵਿੱਚ ਕਦੇ ਹੰਕਾਰ ਨਹੀਂ ਲਿਆਉਣਾ ਚਾਹੀਦਾ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਤੁਹਾਡਾ ਸੱਚਾ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਵੀ ਤੁਹਾਡੇ ਅੰਦਰ ਹੀ ਵਸਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ ਤੇ ਕੌੜਾ ਮਨ) ਵੀ ਤੁਹਾਡੇ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਰਹਿੰਦਾ ਹੈ।',
      en: 'Always speak cooling, gentle, and humble words, and never allow ego or arrogance to enter your heart. Satguru Kabir Saheb reveals that your Beloved Divine Friend and your greatest inner enemy (ego) both reside within your own self.',
    },
    step4WhyTaught: {
      hi: 'सतगुरु कबीर साहेब ने यह उपदेश इसलिए दिया क्योंकि मनुष्य प्रायः अपने दुख, अशांति और कलह का कारण बाहर के लोगों या परिस्थितियों को मान बैठता है। वे हमें बाहरी दोषारोपण से हटाकर अपने ही भीतर झाँकने की कला सिखाते हैं—जब हमारी वाणी में शीतलता और हृदय में निरहंकारता आती है, तभी भीतर छिपा शत्रु शांत होता है और अंतर्यामी साहेब का साक्षात्कार सुलभ होता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਹ ਉਪਦੇਸ਼ ਇਸ ਲਈ ਦਿੱਤਾ ਕਿਉਂਕਿ ਮਨੁੱਖ ਅਕਸਰ ਆਪਣੇ ਦੁੱਖਾਂ ਤੇ ਕਲੇਸ਼ ਦਾ ਕਾਰਨ ਬਾਹਰਲੇ ਲੋਕਾਂ ਨੂੰ ਮੰਨ ਲੈਂਦਾ ਹੈ। ਆਪ ਸਾਨੂੰ ਬਾਹਰਲੇ ਦੋਸ਼ ਕੱਢਣ ਦੀ ਬਜਾਏ ਆਪਣੇ ਅੰਦਰ ਝਾਕਣ ਦੀ ਜਾਚ ਸਿਖਾਉਂਦੇ ਹਨ—ਜਦੋਂ ਬੋਲੀ ਵਿੱਚ ਸ਼ੀਤਲਤਾ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ ਨਿਮਰਤਾ ਆਉਂਦੀ ਹੈ, ਤਦ ਹੀ ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ ਸ਼ਾਂਤ ਹੁੰਦਾ ਹੈ ਅਤੇ ਅਕਾਲ ਪੁਰਖ ਦਾ ਮਿਲਾਪ ਹੁੰਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb gave this teaching because human beings habitually blame outsiders or circumstances for their turmoil. He turns our gaze inward: only when our speech becomes cooling and our heart drops arrogance does the inner adversary quiet down, opening the door to the Indwelling Beloved.',
    },
    step4Drishtant: {
      hi: 'दैनिक जीवन का दृष्टांत: मान लीजिए किसी घर या कार्यालय में किसी बात पर तीखी बहस छिड़ जाए। यदि एक व्यक्ति क्रोध और "मैं ही सही हूँ" के अहं से कड़वा उत्तर दे, तो छोटी-सी चिंगारी भड़ककर संबंधों को जला देती है। किंतु यदि वही व्यक्ति क्षणभर रुककर शीतल और विनम्र शब्द बोले, तो सामने वाले का क्रोध भी पिघल जाता है। जैसे एक ही गिलास के भीतर आग बुझाने वाला शीतल जल भी हो सकता है और गंदगी भी—उसी प्रकार हमारे अपने मन रूपी घर में प्रेम रूपी अमृत भी है और अहंकार रूपी विष भी। चुनाव हमारा है कि हम किसे सींचते हैं।',
      pb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਮੰਨ ਲਓ ਘਰ ਜਾਂ ਕੰਮਕਾਜ ਵਿੱਚ ਕਿਸੇ ਗੱਲ ਉੱਤੇ ਤਿੱਖੀ ਬਹਿਸ ਸ਼ੁਰੂ ਹੋ ਜਾਵੇ। ਜੇਕਰ ਇੱਕ ਵਿਅਕਤੀ ਗੁੱਸੇ ਅਤੇ "ਮੈਂ ਹੀ ਸਹੀ ਹਾਂ" ਦੇ ਹੰਕਾਰ ਨਾਲ ਕੌੜਾ ਜਵਾਬ ਦੇਵੇ, ਤਾਂ ਨਿੱਕੀ ਜਿਹੀ ਚੰਗਿਆੜੀ ਭੜਕ ਕੇ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਸਾੜ ਦਿੰਦੀ ਹੈ। ਪਰ ਜੇਕਰ ਉਹੀ ਵਿਅਕਤੀ ਰੁਕ ਕੇ ਸ਼ੀਤਲ ਤੇ ਨਿਮਰ ਬੋਲ ਬੋਲੇ, ਤਾਂ ਦੂਜੇ ਦਾ ਗੁੱਸਾ ਵੀ ਪਿਘਲ ਜਾਂਦਾ ਹੈ। ਜਿਵੇਂ ਇੱਕੋ ਭਾਂਡੇ ਵਿੱਚ ਠੰਢਾ ਜਲ ਵੀ ਹੋ ਸਕਦਾ ਹੈ ਤੇ ਮੈਲ ਵੀ—ਇਵੇਂ ਹੀ ਸਾਡੇ ਮਨ ਵਿੱਚ ਪ੍ਰੇਮ ਰੂਪੀ ਅੰਮ੍ਰਿਤ ਵੀ ਹੈ ਅਤੇ ਹੰਕਾਰ ਰੂਪੀ ਜ਼ਹਿਰ ਵੀ।',
      en: 'Everyday Example: Imagine a tense disagreement at home or work. If one person replies harshly out of pride ("I am right"), a small spark burns the entire relationship. Yet if that same person pauses and responds with calm, respectful words, the other person’s anger melts away. Like one vessel capable of holding either cool water or poison, our own inner heart holds both ego (the enemy) and love (the Beloved)—the choice of what we nourish is ours.',
    },
    step4MindAnalysis: {
      hi: 'मन एवं अहंकार का विश्लेषण: कटु वाणी तभी निकलती है जब भीतर "अहं" घायल होता है। जब साधक किसी की बात पर तुरंत प्रतिक्रिया देने से पहले अपने श्वास और अभिमान को देख लेता है, तो वह भीतर बैठे "दुसमन" (अहंकार) को पहचानकर वहीं निष्क्रिय कर देता है।',
      pb: 'ਮਨ ਤੇ ਹੰਕਾਰ ਦੀ ਪਰਖ: ਕੌੜੇ ਬੋਲ ਉਦੋਂ ਹੀ ਨਿਕਲਦੇ ਹਨ ਜਦੋਂ ਅੰਦਰਲਾ "ਹੰਕਾਰ" ਜ਼ਖ਼ਮੀ ਹੁੰਦਾ ਹੈ। ਜਦੋਂ ਸਾਧਕ ਪ੍ਰਤੀਕਿਰਿਆ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਅਭਿਮਾਨ ਨੂੰ ਪਛਾਣ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਉਹ ਅੰਦਰ ਬੈਠੇ "ਦੁਸ਼ਮਣ" ਨੂੰ ਉੱਥੇ ਹੀ ਸ਼ਾਂਤ ਕਰ ਦਿੰਦਾ ਹੈ।',
      en: 'Mind & Ego Insight: Harsh words erupt only when inner ego feels threatened. Pausing to notice pride before reacting disarms the inner "enemy" on the spot.',
    },
    step6EsotericSymbols: {
      hi: '• "शीतल शब्द": यह केवल मीठी सांसारिक बोली ही नहीं, बल्कि सतगुरु से प्राप्त वह "सार-शब्द" और अनहद अमृतमयी वाणी है जो काम, क्रोध, लोभ, मोह और अहंकार रूपी पंचाग्नि को शांत कर घट को शीतल करती है।\n• "अहं" तथा "दुसमन भी तुझ माहिं": कबीर पंथ के तत्वज्ञान में "दुसमन" कोई बाहरी व्यक्ति नहीं, अपितु घट के भीतर बैठा अहंकार, चंचल मन और काल-माया की वृत्ति है जो जीवात्मा (सुरति) को सत्य से भटकाती है।\n• "तेरा प्रीतम तुझहि में": परम प्रियतम सतपुरुष और सतगुरु साहेब कहीं बाहर तीर्थ या आकाश में नहीं, बल्कि स्वयं साधक के अपने घट-मंदिर (हृदय तथा दसवें द्वार) में निरंतर विराजमान हैं।',
      pb: '• "ਸ਼ੀਤਲ ਸ਼ਬਦ": ਇਹ ਕੇਵਲ ਦੁਨਿਆਵੀ ਮਿੱਠੀ ਬੋਲੀ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਸਤਿਗੁਰੂ ਤੋਂ ਪ੍ਰਾਪਤ ਉਹ "ਸਾਰ-ਸ਼ਬਦ" ਅਤੇ ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਹੈ ਜੋ ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ, ਮੋਹ ਤੇ ਹੰਕਾਰ ਦੀ ਅੱਗ ਨੂੰ ਬੁਝਾ ਕੇ ਹਿਰਦੇ ਨੂੰ ਠੰਢਕ ਦਿੰਦੀ ਹੈ।\n• "ਅਹੰ" ਅਤੇ "ਦੁਸਮਨ ਭੀ ਤੁਝ ਮਾਹਿਂ": ਕਬੀਰ ਪੰਥ ਦੇ ਤੱਤ-ਗਿਆਨ ਵਿੱਚ "ਦੁਸ਼ਮਣ" ਕੋਈ ਬਾਹਰਲਾ ਮਨੁੱਖ ਨਹੀਂ, ਸਗੋਂ ਘਟ ਦੇ ਅੰਦਰ ਬੈਠਾ ਹੰਕਾਰ, ਚੰਚਲ ਮਨ ਅਤੇ ਕਾਲ-ਮਾਇਆ ਦੀ ਬਿਰਤੀ ਹੈ ਜੋ ਸੁਰਤ ਨੂੰ ਭਟਕਾਉਂਦੀ ਹੈ।\n• "ਤੇਰਾ ਪ੍ਰੀਤਮ ਤੁਝਹਿ ਮੇਂ": ਪਰਮ ਪ੍ਰੀਤਮ ਸਤਪੁਰੁਸ਼ ਤੇ ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਬਾਹਰ ਤੀਰਥਾਂ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਸਾਧਕ ਦੇ ਆਪਣੇ ਹੀ ਘਟ-ਮੰਦਿਰ (ਦਸਵੇਂ ਦੁਆਰ) ਵਿੱਚ ਸਦਾ ਵਿਰਾਜਮਾਨ ਹਨ।',
      en: '• "Shital Shabd" (Cooling Word): Beyond polite speech, this signifies the Satguru’s liberating Sar-Shabd and Anhad nectar that cools the five inner fires of lust, anger, greed, attachment, and ego.\n• "Aham" & "Dusman bhi tujh mahin" (Inner Enemy): In Kabir Panth tattva-gyan, the true enemy is never an outsider; it is inner ego, restless mind, and Kaal-Maya lurking inside one’s own consciousness.\n• "Tera Pritam tujhahi mein" (Beloved Within): The Supreme Beloved (Satpurush / Satguru) dwells inside your own Ghat-Mandir (heart sanctuary & Tenth Door)—revealed the moment "I-ness" dissolves.',
    },
    step6TattvaGyan: {
      hi: 'तत्व ज्ञान सूत्र: जहाँ "मैं" (अहं) खड़ा है वहाँ "प्रीतम" (परमात्मा) प्रकट नहीं होता; जैसे ही सुरति अहंकार छोड़कर शीतल शब्द में लीन होती है, उसी घट में शत्रु का नाश और प्रीतम का दर्शन एक साथ सिद्ध हो जाता है।',
      pb: 'ਤੱਤ-ਗਿਆਨ ਸੂਤਰ: ਜਿੱਥੇ "ਮੈਂ" (ਹੰਕਾਰ) ਖੜ੍ਹਾ ਹੈ ਉੱਥੇ "ਪ੍ਰੀਤਮ" ਪ੍ਰਗਟ ਨਹੀਂ ਹੁੰਦਾ; ਜਿਵੇਂ ਹੀ ਸੁਰਤ ਹੰਕਾਰ ਛੱਡ ਕੇ ਸ਼ੀਤਲ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਹੁੰਦੀ ਹੈ, ਉਸੇ ਘਟ ਵਿੱਚ ਦੁਸ਼ਮਣ ਦਾ ਨਾਸ਼ ਤੇ ਪ੍ਰੀਤਮ ਦੇ ਦਰਸ਼ਨ ਹੋ ਜਾਂਦੇ ਹਨ।',
      en: 'Tattva Gyan Core: Where "I" (ego) stands, the Beloved remains veiled; the instant Surat dissolves ego into the cooling Shabd, the inner foe vanishes and the Beloved shines within.',
    },
  },
};

function detectThemeAndSymbols(sakhi: Sakhi): {
  primaryTheme: ThemeKey;
  symbolsHi: string[];
  symbolsPb: string[];
  symbolsEn: string[];
} {
  const blob = [
    sakhi.text?.hi || '',
    sakhi.bhavarth?.hi || '',
    sakhi.categoryTitle?.hi || '',
    sakhi.category || '',
  ]
    .join(' ')
    .toLowerCase();

  let primaryTheme: ThemeKey = 'mind-control';

  if (/शीतल शब्द|कुटिल|बचन|वचन|वाणी|बानी|रसना|बोल|मीठा|मधुर/.test(blob)) {
    primaryTheme = 'sweet-speech';
  } else if (/प्रीतम तुझहि|दुसमन भी तुझ|अहं|अहंकार|आपा|अभिमान|मैं|रोड़ा|बुरा जो देखन/.test(blob)) {
    primaryTheme = 'ego-inner';
  } else if (/सतगुरु|सतिगुर|गुरु|गोविन्द|गोविंद|चेला|निगुरा|शब्द की.*चुम्बक/.test(blob)) {
    primaryTheme = 'guru';
  } else if (/सुमिरन|सिमरन|सत्यनाम|सार शब्द|नाम|श्वास|स्वांस|अजपा/.test(blob)) {
    primaryTheme = 'naam';
  } else if (/कस्तूरी|घट|भीतर|सुरति|अनहद|दसम|मानसरोवर|हंस|गगन/.test(blob)) {
    primaryTheme = 'yoga-ghat';
  } else if (/माया|तृष्णा|लोभ|लालच|कंचन|दाम|ठगिनी|मोह/.test(blob)) {
    primaryTheme = 'maya';
  } else if (/माटी|कुम्हार|काया|हाड़|हड्डी|काल|मरण|मरना|बुलबुला|मानुस जनम|चेतावनी/.test(blob)) {
    primaryTheme = 'chetavani';
  } else if (/साँच|सांच|सत्य|झूठ|पाखंड|पोथी|तीरथ|कथनी|करनी/.test(blob)) {
    primaryTheme = 'satya-hypocrisy';
  } else if (/साधु|संत|सत्संग|संगति|कुसंग|चंदन|सूप/.test(blob)) {
    primaryTheme = 'satsang';
  } else if (/प्रेम|प्रीत|विरह|बिरह|भक्ति|सूरा|शीश|ढाई आखर/.test(blob)) {
    primaryTheme = 'prem-bhakti';
  } else if (/दया|करुणा|अहिंसा|परोपकार|तरुवर|सरवर|जीव/.test(blob)) {
    primaryTheme = 'compassion';
  }

  const symbolsHi: string[] = [];
  const symbolsPb: string[] = [];
  const symbolsEn: string[] = [];

  const wordsHi = sakhi.wordMeanings?.hi || [];
  const wordsPb = sakhi.wordMeanings?.pb || [];
  const wordsEn = sakhi.wordMeanings?.en || [];

  wordsHi.slice(0, 4).forEach((w) => {
    symbolsHi.push(`• ${w.word}: आध्यात्मिक दृष्टि से यह "${w.meaning}" की ओर संकेत करता है जो साधक के अंतःकरण की अवस्था को दर्शाता है।`);
  });
  wordsPb.slice(0, 4).forEach((w) => {
    symbolsPb.push(`• ${w.word}: ਰੂਹਾਨੀ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ ਇਹ "${w.meaning}" ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ ਜੋ ਸਾਧਕ ਦੀ ਅੰਦਰੂਨੀ ਅਵਸਥਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।`);
  });
  wordsEn.slice(0, 4).forEach((w) => {
    symbolsEn.push(`• ${w.word}: Spiritually signifies "${w.meaning}", pointing to an inner state of consciousness within the seeker.`);
  });

  return { primaryTheme, symbolsHi, symbolsPb, symbolsEn };
}

/**
 * Generates crisp 2-3 sentence literal translation for Step 1 (सरल अर्थ)
 * cleanly separated from Step 4 Satsang and Step 6 Esoteric Symbolism.
 */
export function getStep1ConciseMeaning(sakhi: Sakhi, language: Language): string {
  const curated = CURATED_SAKHI_DEPTH[sakhi.number];
  if (curated) {
    return curated.step1Concise[language] || curated.step1Concise.hi;
  }

  const raw = (sakhi.bhavarth?.[language] || sakhi.bhavarth?.hi || '').trim();
  const clean = ensureSatguruKabirSaheb(raw);
  // Keep Step 1 crisp (max 2-3 natural sentences without sprawling commentary)
  const sentences = clean
    .split(/(?<=[।.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length <= 3) {
    return clean;
  }
  return sentences.slice(0, 3).join(' ');
}

interface ThemeTemplates {
  whyHi: string;
  whyPb: string;
  whyEn: string;
  drishtantHi: string;
  drishtantPb: string;
  drishtantEn: string;
  mindHi: string;
  mindPb: string;
  mindEn: string;
  esotericHi: string;
  esotericPb: string;
  esotericEn: string;
  tattvaHi: string;
  tattvaPb: string;
  tattvaEn: string;
}

const THEME_DEPTH_TEMPLATES: Record<ThemeKey, ThemeTemplates> = {
  'sweet-speech': {
    whyHi: 'सतगुरु कबीर साहेब ने यह वाणी इसलिए कही ताकि साधक समझ सके कि शब्दों में औषधि और अग्नि दोनों की शक्ति होती है। कठोर वचन मन और रिश्तों को जलाते हैं, जबकि शीतल वाणी चित्त को शांत कर सत्य ग्रहण करने योग्य बनाती है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਹ ਬਾਣੀ ਇਸ ਲਈ ਉਚਾਰੀ ਕਿਉਂਕਿ ਬੋਲਾਂ ਵਿੱਚ ਦਵਾਈ ਅਤੇ ਅੱਗ ਦੋਵਾਂ ਦੀ ਤਾਕਤ ਹੁੰਦੀ ਹੈ। ਕੌੜੇ ਬੋਲ ਮਨ ਤੇ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਸਾੜਦੇ ਹਨ, ਜਦਕਿ ਸ਼ੀਤਲ ਬੋਲੀ ਹਿਰਦੇ ਨੂੰ ਸ਼ਾਂਤ ਕਰਦੀ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb offered this teaching because words carry the power either to heal like medicine or burn like fire. Harsh speech agitates the mind, whereas gentle speech calms consciousness for spiritual awakening.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे तपती दोपहरी में प्यासे पथिक को ठंडा जल अमृत जैसा सुख देता है, वैसे ही तनाव या मतभेद के समय बोला गया एक शांत और सम्मानपूर्ण शब्द वर्षों की कड़वाहट को मिटा देता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਤਪਦੀ ਦੁਪਹਿਰ ਵਿੱਚ ਪਿਆਸੇ ਰਾਹੀ ਨੂੰ ਠੰਢਾ ਜਲ ਸੁੱਖ ਦਿੰਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਤਣਾਅ ਵੇਲੇ ਬੋਲਿਆ ਇੱਕ ਸ਼ਾਂਤ ਅਤੇ ਸਤਿਕਾਰ ਭਰਿਆ ਬੋਲ ਪੁਰਾਣੀ ਕੜਵਾਹਟ ਮਿਟਾ ਦਿੰਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as cool water revives a weary traveler under scorching sun, a single calm and respectful word during an argument dissolves long-standing bitterness.',
    mindHi: 'मन एवं वाणी विश्लेषण: जिह्वा वही बोलती है जो मन में संचित होता है; वाणी को संयमित रखने का अभ्यास सीधा मन के अहंकार को निर्बल करता है।',
    mindPb: 'ਮਨ ਤੇ ਬੋਲੀ ਦੀ ਪਰਖ: ਜ਼ੁਬਾਨ ਉਹੀ ਬੋਲਦੀ ਹੈ ਜੋ ਮਨ ਵਿੱਚ ਹੁੰਦਾ ਹੈ; ਬੋਲੀ ਉੱਤੇ ਸੰਜਮ ਰੱਖਣ ਨਾਲ ਮਨ ਦਾ ਹੰਕਾਰ ਆਪੇ ਘਟਦਾ ਹੈ।',
    mindEn: 'Mind & Speech Analysis: The tongue merely echoes what fills the heart; disciplining speech immediately weakens underlying pride and anger.',
    esotericHi: 'आध्यात्मिक प्रतीक: इस वाणी में "शब्द" या "बचन" केवल उच्चारित ध्वनि नहीं, बल्कि चित्त की तरंग है। जब साधक कटु तरंगों को रोककर "शीतल शब्द" (सतनाम-ध्वनि) में स्थित होता है, तब अंतरंग कमल खिल उठता है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਇਸ ਬਾਣੀ ਵਿੱਚ "ਸ਼ਬਦ" ਜਾਂ "ਬਚਨ" ਕੇਵਲ ਬਾਹਰੀ ਆਵਾਜ਼ ਨਹੀਂ, ਸਗੋਂ ਚਿੱਤ ਦੀ ਤਰੰਗ ਹੈ। ਕੌੜੀਆਂ ਤਰੰਗਾਂ ਰੋਕ ਕੇ "ਸ਼ੀਤਲ ਸ਼ਬਦ" (ਸਤਯਨਾਮ) ਵਿੱਚ ਟਿਕਣ ਨਾਲ ਅੰਦਰਲਾ ਪ੍ਰਕਾਸ਼ ਖਿੜਦਾ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: Here "Shabd" or speech signifies not just vocal sound, but the subtle vibration of consciousness. Stilling bitter mental waves reveals the cooling inner Naam.',
    tattvaHi: 'तत्व ज्ञान: वाणी की शुद्धता ही सुरति-शब्द योग की प्रथम सीढ़ी है; बिना शीतल स्वभाव के घट में सत्य का वास नहीं होता।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਬੋਲੀ ਦੀ ਪਵਿੱਤਰਤਾ ਹੀ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਦੀ ਪਹਿਲੀ ਪੌੜੀ ਹੈ; ਸ਼ੀਤਲ ਸੁਭਾਅ ਬਿਨਾਂ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਦਾ ਪ੍ਰਕਾਸ਼ ਨਹੀਂ ਹੁੰਦਾ।',
    tattvaEn: 'Tattva Gyan: Purity of speech is the threshold of Surat-Shabad Yoga; Truth settles only in a calm, non-reactive heart.',
  },
  'ego-inner': {
    whyHi: 'सतगुरु कबीर साहेब यह उपदेश देते हैं कि आध्यात्मिक प्रगति में सबसे बड़ी बाधा कोई बाहरी व्यक्ति नहीं, बल्कि हमारे भीतर बैठा "मैं-पन" और अभिमान है। जब तक यह अवरोध नहीं हटता, भीतर विराजमान परमात्मा का अनुभव नहीं होता।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਰੂਹਾਨੀ ਤਰੱਕੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡੀ ਰੁਕਾਵਟ ਕੋਈ ਬਾਹਰਲਾ ਨਹੀਂ, ਸਗੋਂ ਸਾਡੇ ਆਪਣੇ ਅੰਦਰ ਬੈਠਾ "ਮੈਂ-ਪੁਣਾ" ਤੇ ਹੰਕਾਰ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb reminds seekers that the true obstacle to awakening is never outside us—it is inner ego and self-centered pride veiling the Divine within.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जिस प्रकार सूर्य आकाश में चमकता हो पर हम अपनी ही आँखों के सामने हाथ रख लें तो अंधेरा दिखता है, उसी प्रकार परमात्मा घट के भीतर हैं पर "अहं" की आड़ उन्हें ढँक लेती है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਸੂਰਜ ਚਮਕਦਾ ਹੋਵੇ ਪਰ ਅਸੀਂ ਅੱਖਾਂ ਅੱਗੇ ਹੱਥ ਰੱਖ ਲਈਏ ਤਾਂ ਹਨੇਰਾ ਦਿਸਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਪ੍ਰਭੂ ਅੰਦਰ ਵਸਦੇ ਹਨ ਪਰ ਹੰਕਾਰ ਦਾ ਪਰਦਾ ਉਨ੍ਹਾਂ ਨੂੰ ਢੱਕ ਲੈਂਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as placing our own hand over our eyes blocks the bright sun, holding onto ego hides the Indwelling Presence that is already right inside us.',
    mindHi: 'अहंकार विश्लेषण: मन दूसरों की त्रुटियाँ तुरंत देखता है, पर अपने क्रोध, ईर्ष्या और श्रेष्ठता-बोध को छिपा लेता है—यही आंतरिक शत्रु है।',
    mindPb: 'ਹੰਕਾਰ ਦੀ ਪਰਖ: ਮਨ ਦੂਜਿਆਂ ਦੀਆਂ ਗਲਤੀਆਂ ਝੱਟ ਵੇਖਦਾ ਹੈ, ਪਰ ਆਪਣੇ ਗੁੱਸੇ ਤੇ ਈਰਖਾ ਨੂੰ ਲੁਕੋ ਲੈਂਦਾ ਹੈ—ਇਹੀ ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ ਹੈ।',
    mindEn: 'Ego Analysis: The mind swiftly spots flaws in others while disguising its own pride and resentment—that self-deception is the real adversary.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर साहेब के अनुसार "घट" एक देवालय है जहाँ दो शक्तियाँ कार्य करती हैं—ऊर्ध्वगामी सुरति (जो प्रीतम से मिलाती है) और बहिर्मुखी अहंकार/काल (जो जीव को द्वैत में फँसाता है)।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ "ਘਟ" ਇੱਕ ਮੰਦਿਰ ਹੈ ਜਿੱਥੇ ਦੋ ਸ਼ਕਤੀਆਂ ਹਨ—ਅੰਤਰਮੁਖੀ ਸੁਰਤ (ਜੋ ਪ੍ਰੀਤਮ ਨਾਲ ਮਿਲਾਉਂਦੀ ਹੈ) ਅਤੇ ਹੰਕਾਰ (ਜੋ ਜੀਵ ਨੂੰ ਭਟਕਾਉਂਦਾ ਹੈ)।',
    esotericEn: 'Esoteric Symbolism: The inner body (Ghat) is a sanctuary housing two forces: upward-turning Surat (leading to the Beloved) and outward ego/Kaal (binding the soul to duality).',
    tattvaHi: 'तत्व ज्ञान: अहंकार के विसर्जन का अर्थ स्वयं को हीन समझना नहीं, बल्कि कर्तापन त्यागकर सबमें एक ही साहेब के दर्शन करना है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਹੰਕਾਰ ਤਿਆਗਣ ਦਾ ਅਰਥ ਆਪਣੇ ਆਪ ਨੂੰ ਨੀਵਾਂ ਸਮਝਣਾ ਨਹੀਂ, ਸਗੋਂ ਕਰਤਾ-ਭਾਵ ਛੱਡ ਕੇ ਸਭ ਵਿੱਚ ਇੱਕੋ ਸਾਹੇਬ ਨੂੰ ਵੇਖਣਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Dissolving ego does not mean low self-worth; it means dropping selfish ownership and beholding the One Saheb in all.',
  },
  guru: {
    whyHi: 'सतगुरु कबीर साहेब ने गुरु-महिमा का वर्णन इसलिए किया ताकि साधक अंधविश्वास या भटकाव में न पड़े और समझे कि आत्म-ज्ञान बिना सद्गुरु के मार्गदर्शन व सार-शब्द के पूर्ण नहीं होता।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਗੁਰੂ-ਮਹਿਮਾ ਇਸ ਲਈ ਬਿਆਨ ਕੀਤੀ ਤਾਂ ਜੋ ਸਾਧਕ ਭਟਕਣਾ ਤੋਂ ਬਚੇ ਅਤੇ ਸਮਝੇ ਕਿ ਸੱਚੇ ਸਤਿਗੁਰੂ ਤੇ ਸਾਰ-ਸ਼ਬਦ ਬਿਨਾਂ ਆਤਮ-ਗਿਆਨ ਸੰਭਵ ਨਹੀਂ।',
    whyEn: 'Satguru Kabir Saheb reveals the necessity of a true Satguru so the seeker does not wander in blind guesswork, recognizing that spiritual sight opens through authentic guidance and the living Word.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे किसी अनजान नगर या घने जंगल में केवल नक्शा काफी नहीं होता, एक अनुभवी मार्गदर्शक हर मोड़ के खतरों से बचाकर सुरक्षित गंतव्य तक पहुँचा देता है—वैसे ही सतगुरु मन की भूलभुलैया से पार उतारते हैं।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਕਿਸੇ ਅਣਜਾਣ ਜੰਗਲ ਵਿੱਚ ਇਕੱਲਾ ਨਕਸ਼ਾ ਕਾਫ਼ੀ ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਤਜਰਬੇਕਾਰ ਰਾਹ-ਦਸੇਰਾ ਹਰ ਮੋੜ ਤੋਂ ਬਚਾ ਕੇ ਮੰਜ਼ਿਲ ਤੇ ਪਹੁੰਚਾਉਂਦਾ ਹੈ—ਤਿਵੇਂ ਹੀ ਸਤਿਗੁਰੂ ਜੀਵ ਨੂੰ ਪਾਰ ਲਾਉਂਦੇ ਹਨ।',
    drishtantEn: 'Everyday Example: Just as a traveler in an uncharted forest needs an experienced guide rather than guesswork, the Satguru steers the seeker safely past the illusions of the mind.',
    mindHi: 'मन विश्लेषण: अहंकारी मन किसी के अनुशासन में नहीं झुकना चाहता; सच्ची गुरु-भक्ति इसी हठ को विनम्रता और समर्पण में बदलती है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਹੰਕਾਰੀ ਮਨ ਕਿਸੇ ਦੇ ਅਨੁਸ਼ਾਸਨ ਅੱਗੇ ਝੁਕਣਾ ਨਹੀਂ ਚਾਹੁੰਦਾ; ਸੱਚੀ ਗੁਰੂ-ਭਗਤੀ ਇਸ ਜ਼ਿੱਦ ਨੂੰ ਨਿਮਰਤਾ ਵਿੱਚ ਬਦਲਦੀ ਹੈ।',
    mindEn: 'Mind Analysis: The proud intellect resists guidance; genuine reverence for the Guru transforms stubbornness into receptive humility.',
    esotericHi: 'आध्यात्मिक प्रतीक: यहाँ "गुरु" केवल देहधारी व्यक्ति नहीं, बल्कि वह चेतन शब्द-ज्ञान और विवेक-ज्योति है जो जीव के भीतर अज्ञान रूपी अंधकार को चीरकर अविनाशी साहेब से मिलाती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਇੱਥੇ "ਗੁਰੂ" ਕੇਵਲ ਸਰੀਰ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਉਹ ਚੇਤਨ ਸ਼ਬਦ-ਗਿਆਨ ਅਤੇ ਵਿਵੇਕ ਦੀ ਜੋਤ ਹੈ ਜੋ ਅੰਦਰਲੇ ਅਗਿਆਨ ਨੂੰ ਮਿਟਾ ਕੇ ਅਵਿਨਾਸ਼ੀ ਸਾਹੇਬ ਨਾਲ ਮਿਲਾਉਂਦੀ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Satguru" signifies the luminous Word-consciousness that pierces inner ignorance and unites individual awareness with the Imperishable Lord.',
    tattvaHi: 'तत्व ज्ञान: गुरु की आज्ञा और सत्यनाम का विश्वास—ये दोनों पंख मिलें तो हंस-जीव अमरलोक की उड़ान भरता है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਗੁਰੂ ਦਾ ਹੁਕਮ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਭਰੋਸਾ—ਇਨ੍ਹਾਂ ਦੋ ਖੰਭਾਂ ਨਾਲ ਹੀ ਹੰਸ-ਜੀਵ ਅਮਰਲੋਕ ਵੱਲ ਉਡਾਰੀ ਮਾਰਦਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Obedience to truth and trust in Satyanaam are the two wings lifting the soul beyond delusion.',
  },
  naam: {
    whyHi: 'सतगुरु कबीर साहेब ने सत्यनाम और श्वास-सुमिरन पर बारम्बार बल इसलिए दिया क्योंकि बाहरी कर्मकांड समय के साथ छूट जाते हैं, पर श्वास के साथ जुड़ा आंतरिक नाम ही मृत्यु और माया के भय से मुक्त करता है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਤਯਨਾਮ ਤੇ ਸੁਆਸ-ਸਿਮਰਨ ਉੱਤੇ ਜ਼ੋਰ ਇਸ ਲਈ ਦਿੱਤਾ ਕਿਉਂਕਿ ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਇੱਥੇ ਹੀ ਰਹਿ ਜਾਂਦੇ ਹਨ, ਪਰ ਸੁਆਸਾਂ ਨਾਲ ਜੁੜਿਆ ਸੱਚਾ ਨਾਮ ਹੀ ਭੈਅ ਤੋਂ ਮੁਕਤ ਕਰਦਾ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb emphasizes inner remembrance of Satyanaam because outer rituals remain temporary, whereas breath-anchored awareness liberates the soul from fear and forgetfulness.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे दिनभर व्यस्त रहने पर भी हम श्वास लेना नहीं भूलते, वैसे ही कार्य करते हुए भी भीतर सत्यनाम का स्मरण चलते रहना मन को तनाव और लालच से सुरक्षित रखता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਦਿਨ ਭਰ ਰੁੱਝੇ ਰਹਿਣ ਤੇ ਵੀ ਅਸੀਂ ਸਾਹ ਲੈਣਾ ਨਹੀਂ ਭੁੱਲਦੇ, ਤਿਵੇਂ ਹੀ ਕੰਮਕਾਜ ਕਰਦਿਆਂ ਅੰਦਰ ਨਾਮ ਸਿਮਰਨ ਚੱਲਦੇ ਰਹਿਣਾ ਮਨ ਨੂੰ ਤਣਾਅ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as we breathe effortlessly throughout a busy workday, subtle inner remembrance keeps the mind steady amid chaos and temptation.',
    mindHi: 'मन विश्लेषण: बिना नाम-स्मरण के मन खाली कमरे की तरह व्यर्थ चिंताओं से भर जाता है; सिमरन मन को एकाग्र आधार देता है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਸਿਮਰਨ ਤੋਂ ਬਿਨਾਂ ਮਨ ਬੇਅਰਥ ਚਿੰਤਾਵਾਂ ਨਾਲ ਭਰ ਜਾਂਦਾ ਹੈ; ਨਾਮ ਸਿਮਰਨ ਮਨ ਨੂੰ ਸਥਿਰ ਆਸਰਾ ਦਿੰਦਾ ਹੈ।',
    mindEn: 'Mind Analysis: Without an inner anchor, attention scatters into anxiety; steady Simran gathers fragmented energy into calm clarity.',
    esotericHi: 'आध्यात्मिक प्रतीक: "सार-शब्द" या "सत्यनाम" वर्णों में बंधा लौकिक मंत्र मात्र नहीं है, बल्कि वह अजपा, निह-अक्षर स्पंदन है जिसे सुरति श्वास और ध्यान के माध्यम से घट में अनुभव करती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: "ਸਾਰ-ਸ਼ਬਦ" ਜਾਂ "ਸਤਯਨਾਮ" ਕੇਵਲ ਅੱਖਰਾਂ ਦਾ ਜਾਪ ਨਹੀਂ, ਸਗੋਂ ਉਹ ਅਜਪਾ, ਨਿਹ-ਅੱਖਰ ਧੁਨ ਹੈ ਜਿਸ ਨੂੰ ਸੁਰਤ ਸੁਆਸ ਤੇ ਧਿਆਨ ਰਾਹੀਂ ਘਟ ਵਿੱਚ ਅਨੁਭਵ ਕਰਦੀ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Sar-Shabd" or Satyanaam is not a mere verbal syllable—it is the uncreated (Nih-Akshar) resonance experienced within when Surat stills the breath.',
    tattvaHi: 'तत्व ज्ञान: जो नाम श्वास से सुरति को जोड़कर काल के बंधन काटे, वही सतगुरु प्रदत्त सच्चा सत्यनाम है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਜੋ ਨਾਮ ਸੁਆਸਾਂ ਨਾਲ ਸੁਰਤ ਨੂੰ ਜੋੜ ਕੇ ਕਾਲ ਦੇ ਬੰਧਨ ਕੱਟੇ, ਉਹੀ ਸਤਿਗੁਰੂ ਦਾ ਬਖਸ਼ਿਆ ਸੱਚਾ ਸਤਯਨਾਮ ਹੈ।',
    tattvaEn: 'Tattva Gyan: The true Name is that living awareness which unites consciousness with the Eternal beyond time.',
  },
  maya: {
    whyHi: 'सतगुरु साहेब ने माया और तृष्णा के प्रति सावधान इसलिए किया ताकि साधक नश्वर धन, रूप और पद को ही जीवन का अंतिम लक्ष्य न मान बैठे और अपनी अमूल्य आत्म-चेतना को व्यर्थ न गँवाए।',
    whyPb: 'ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਨੇ ਮਾਇਆ ਤੇ ਤ੍ਰਿਸ਼ਨਾ ਤੋਂ ਸੁਚੇਤ ਇਸ ਲਈ ਕੀਤਾ ਤਾਂ ਜੋ ਮਨੁੱਖ ਨਾਸ਼ਵਾਨ ਧਨ-ਦੌਲਤ ਨੂੰ ਹੀ ਜੀਵਨ ਦਾ ਅਸਲੀ ਮਕਸਦ ਨਾ ਸਮਝ ਬੈਠੇ।',
    whyEn: 'Satguru Saheb warns against Maya and restless craving so seekers do not mistake fleeting wealth or status for life’s ultimate fulfillment.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे प्यास लगने पर कोई व्यक्ति समुद्र का खारा पानी पिए तो प्यास बुझने की बजाय और बढ़ती जाती है—ठीक वैसे ही लालच और दिखावे से मिला सुख मन को और अधिक अशांत करता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਪਿਆਸ ਲੱਗਣ ਤੇ ਕੋਈ ਸਮੁੰਦਰ ਦਾ ਖਾਰਾ ਪਾਣੀ ਪੀਵੇ ਤਾਂ ਪਿਆਸ ਬੁੱਝਣ ਦੀ ਥਾਂ ਹੋਰ ਵਧਦੀ ਹੈ—ਇਵੇਂ ਹੀ ਲਾਲਚ ਦਾ ਸੁੱਖ ਮਨ ਨੂੰ ਹੋਰ ਬੇਚੈਨ ਕਰਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Drinking salty seawater only intensifies thirst; likewise, chasing endless material craving leaves the heart emptier than before.',
    mindHi: 'मन विश्लेषण: माया वस्तुओं में नहीं, हमारे भीतर छिपे "और चाहिए" के असंतोष में वास करती है; संतोष आते ही माया पराजित होती है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਮਾਇਆ ਬਾਹਰਲੀਆਂ ਚੀਜ਼ਾਂ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਸਾਡੇ ਅੰਦਰਲੀ "ਹੋਰ ਚਾਹੀਦਾ" ਦੀ ਭੁੱਖ ਵਿੱਚ ਵਸਦੀ ਹੈ; ਸੰਤੋਖ ਆਉਂਦੇ ਹੀ ਮਾਇਆ ਹਾਰ ਜਾਂਦੀ ਹੈ।',
    mindEn: 'Mind Analysis: Maya is not external objects—it is the restless inner hunger for "more." The moment contentment awakens, illusion loses power.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर दर्शन में "माया" या "ठगिनी" मन की वह मोहिनी शक्ति है जो आत्मा को उसके मूल घर (सतलोक) की स्मृति से विमुख कर पाँच विषय-भोगों में भटकाती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਦਰਸ਼ਨ ਵਿੱਚ "ਮਾਇਆ" ਮਨ ਦੀ ਉਹ ਮੋਹਣੀ ਸ਼ਕਤੀ ਹੈ ਜੋ ਆਤਮਾ ਨੂੰ ਆਪਣੇ ਅਸਲ ਘਰ (ਸਤਲੋਕ) ਤੋਂ ਵਿਛੋੜ ਕੇ ਪੰਜ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਭਟਕਾਉਂਦੀ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: In Kabir philosophy, "Maya" denotes the deluding pull of sensory desires that makes the soul forget its immortal home.',
    tattvaHi: 'तत्व ज्ञान: संसार में रहकर भी कमल के पत्ते की तरह आसक्ति से अलिप्त रहना ही सच्चा त्याग है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਵੀ ਕਮਲ ਦੇ ਫੁੱਲ ਵਾਂਗ ਮੋਹ ਤੋਂ ਨਿਰਲੇਪ ਰਹਿਣਾ ਹੀ ਸੱਚਾ ਤਿਆਗ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Living responsibly in the world while remaining inwardly unattached, like a lotus on water, is true freedom.',
  },
  chetavani: {
    whyHi: 'सतगुरु कबीर साहेब ने समय और शरीर की नश्वरता की चेतावनी भय फैलाने के लिए नहीं, बल्कि आलस्य और घमंड तोड़कर आज ही सत्य कर्म व भक्ति में जुटने की प्रेरणा देने के लिए दी है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਮੇਂ ਤੇ ਸਰੀਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਦੀ ਚੇਤਾਵਨੀ ਡਰ ਪੈਦਾ ਕਰਨ ਲਈ ਨਹੀਂ, ਸਗੋਂ ਆਲਸ ਤੇ ਹੰਕਾਰ ਤੋੜ ਕੇ ਅੱਜ ਹੀ ਸੱਚੇ ਕਰਮ ਤੇ ਭਗਤੀ ਵਿੱਚ ਲੱਗਣ ਲਈ ਦਿੱਤੀ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb reminds us of mortality not to create gloom, but to awaken urgency—breaking procrastination and pride so we live meaningfully today.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे किसी विद्यार्थी को परीक्षा की तिथि याद दिलाई जाए तो वह टालमटोल छोड़कर तैयारी में लग जाता है, वैसे ही जीवन की सीमित साँसों का बोध हमें व्यर्थ के झगड़ों से बचाकर सद्कर्म सिखाता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਵਿਦਿਆਰਥੀ ਨੂੰ ਇਮਤਿਹਾਨ ਦੀ ਤਰੀਕ ਯਾਦ ਆਉਂਦੇ ਹੀ ਉਹ ਆਲਸ ਛੱਡ ਕੇ ਤਿਆਰੀ ਵਿੱਚ ਜੁੱਟ ਜਾਂਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਸੀਮਿਤ ਸੁਆਸਾਂ ਦੀ ਸਮਝ ਸਾਨੂੰ ਸੱਚੇ ਮਾਰਗ ਤੇ ਲਾਉਂਦੀ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as remembering an upcoming exam makes a student stop wasting time, recognizing life’s brevity inspires us to drop petty grudges and act wisely now.',
    mindHi: 'मन विश्लेषण: मन हमेशा "कल भजन करेंगे, कल सुधरेंगे" कहकर टालता है; चेतावनी साखी इसी "कल" के भ्रम को तोड़ती है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਮਨ ਹਮੇਸ਼ਾ "ਕੱਲ੍ਹ ਕਰਾਂਗੇ" ਕਹਿ ਕੇ ਟਾਲਦਾ ਰਹਿੰਦਾ ਹੈ; ਚੇਤਾਵਨੀ ਬਾਣੀ ਇਸੇ "ਕੱਲ੍ਹ" ਦੇ ਭਰਮ ਨੂੰ ਤੋੜਦੀ ਹੈ।',
    mindEn: 'Mind Analysis: The mind constantly postpones awakening to "tomorrow"; this warning shatters the illusion of endless delay.',
    esotericHi: 'आध्यात्मिक प्रतीक: "काया/माटी" पंचतत्त्व के नश्वर आवरण का प्रतीक है, और "काल" निरंतर क्षीण होते श्वासों का—इनके बीच अविनाशी केवल जागृत सुरति और सत्यनाम है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: "ਕਾਇਆ/ਮਾਟੀ" ਪੰਜ ਤੱਤਾਂ ਦੇ ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਅਤੇ "ਕਾਲ" ਘਟਦੇ ਸੁਆਸਾਂ ਦਾ—ਇਨ੍ਹਾਂ ਵਿਚਕਾਰ ਅਵਿਨਾਸ਼ੀ ਕੇਵਲ ਜਾਗ੍ਰਿਤ ਸੁਰਤ ਤੇ ਸਤਯਨਾਮ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Body/Clay" symbolizes the transient five-element vessel and "Kaal" the ticking away of breaths; only awakened Surat anchored in Truth endures.',
    tattvaHi: 'तत्व ज्ञान: जो आज इसी क्षण मन के विकारों पर विजय पाकर नाम से जुड़ता है, वह जीते-जी काल से निर्भय हो जाता है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਜੋ ਅੱਜ ਇਸੇ ਪਲ ਵਿਕਾਰਾਂ ਤੇ ਜਿੱਤ ਪਾ ਕੇ ਨਾਮ ਨਾਲ ਜੁੜਦਾ ਹੈ, ਉਹ ਜੀਂਦੇ-ਜੀਅ ਕਾਲ ਤੋਂ ਨਿਰਭੈ ਹੋ ਜਾਂਦਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: He who awakens in the present moment transcends the fear of death while still alive.',
  },
  'satya-hypocrisy': {
    whyHi: 'सतगुरु कबीर साहेब ने बाह्य आडंबर और दिखावे का खंडन इसलिए किया क्योंकि धर्म वेशभूषा, किताबी वाद-विवाद या रीति-रिवाजों में नहीं, बल्कि सच्चे आचरण और हृदय की निर्मलता में बसता है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਬਾਹਰੀ ਦਿਖਾਵੇ ਦਾ ਖੰਡਨ ਇਸ ਲਈ ਕੀਤਾ ਕਿਉਂਕਿ ਧਰਮ ਪਹਿਰਾਵੇ ਜਾਂ ਕਿਤਾਬੀ ਬਹਿਸ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਸੱਚੇ ਆਚਰਨ ਅਤੇ ਦਿਲ ਦੀ ਪਵਿੱਤਰਤਾ ਵਿੱਚ ਵਸਦਾ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb critiques outward show because true spirituality resides not in robes, hollow rituals, or bookish debate, but in lived honesty and a pure heart.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे किसी मिठाई की दुकान के बाहर सुंदर पोस्टर लगा हो पर भीतर मिठाई न हो तो भूख नहीं मिटती—उसी प्रकार केवल धर्म की बड़ी-बड़ी बातें करने से जीवन नहीं बदलता, आचरण में सत्य उतारना पड़ता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਕਿਸੇ ਦੁਕਾਨ ਦੇ ਬਾਹਰ ਸੁੰਦਰ ਤਸਵੀਰ ਲੱਗੀ ਹੋਵੇ ਪਰ ਅੰਦਰ ਮਠਿਆਈ ਨਾ ਹੋਵੇ ਤਾਂ ਭੁੱਖ ਨਹੀਂ ਮਿਟਦੀ—ਤਿਵੇਂ ਹੀ ਕੇਵਲ ਗੱਲਾਂ ਕਰਨ ਨਾਲ ਜੀਵਨ ਨਹੀਂ ਬਦਲਦਾ, ਸੱਚ ਅਮਲ ਵਿੱਚ ਲਿਆਉਣਾ ਪੈਂਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Reading a restaurant menu never satisfies hunger; similarly, quoting scriptures without living truthfulness and kindness leaves the soul empty.',
    mindHi: 'मन विश्लेषण: अहंकार धार्मिक दिखने में भी बड़ा सुख ढूँढ लेता है; सच्चा साधक कथनी से पहले अपनी करनी को तौलता है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਹੰਕਾਰ ਧਾਰਮਿਕ ਦਿਖਾਵੇ ਵਿੱਚ ਵੀ ਸੁੱਖ ਲੱਭ ਲੈਂਦਾ ਹੈ; ਸੱਚਾ ਸਾਧਕ ਕਹਿਣੀ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਕਰਨੀ ਨੂੰ ਪਰਖਦਾ ਹੈ।',
    mindEn: 'Mind Analysis: Ego loves appearing pious to earn applause; a genuine seeker weighs actions far above claims.',
    esotericHi: 'आध्यात्मिक प्रतीक: "साँच" (सत्य) हृदय की उस पारदर्शी अवस्था का प्रतीक है जहाँ भीतर का विचार और बाहर का व्यवहार एक हो जाएँ—क्योंकि कपट वाले घट में परमात्म-प्रकाश नहीं ठहरता।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: "ਸੱਚ" ਹਿਰਦੇ ਦੀ ਉਸ ਪਾਰਦਰਸ਼ੀ ਅਵਸਥਾ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਜਿੱਥੇ ਅੰਦਰਲਾ ਵਿਚਾਰ ਤੇ ਬਾਹਰਲਾ ਵਿਹਾਰ ਇੱਕ ਹੋ ਜਾਣ।',
    esotericEn: 'Esoteric Symbolism: "Saanch" (Truth) represents complete inner alignment where thought, speech, and deed are undivided—free from hidden deceit.',
    tattvaHi: 'तत्व ज्ञान: पाखंड से बाहर और सत्य से भीतर का द्वार खुलता है; साँचा हृदय ही साहेब का सच्चा सिंहासन है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਪਾਖੰਡ ਛੱਡਣ ਤੇ ਸੱਚ ਅਪਣਾਉਣ ਨਾਲ ਹੀ ਅੰਦਰਲਾ ਦਰਵਾਜ਼ਾ ਖੁੱਲ੍ਹਦਾ ਹੈ; ਸੱਚਾ ਹਿਰਦਾ ਹੀ ਸਾਹੇਬ ਦਾ ਤਖ਼ਤ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Dropping hypocrisy opens the inner gate; an honest heart is the true throne of the Divine.',
  },
  satsang: {
    whyHi: 'सतगुरु कबीर साहेब ने सत्संग और साधु-लक्षण का वर्णन इसलिए किया ताकि साधक जाने कि हमारी संगति ही हमारे विचारों और भविष्य का निर्माण करती है; सज्जनों का संग मन की मलिनता धो देता है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਤਿਸੰਗ ਤੇ ਸਾਧੂ ਦੇ ਗੁਣ ਇਸ ਲਈ ਦੱਸੇ ਤਾਂ ਜੋ ਸਾਧਕ ਸਮਝੇ ਕਿ ਸਾਡੀ ਸੰਗਤ ਹੀ ਸਾਡੇ ਵਿਚਾਰਾਂ ਅਤੇ ਜੀਵਨ ਦਾ ਨਿਰਮਾਣ ਕਰਦੀ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb highlights Satsang and saintly company because the company we keep shapes our thoughts, values, and spiritual destiny.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे इत्र की दुकान पर बैठने से बिना खरीदे भी वस्त्रों में सुगंध आ जाती है और कोयले की खान में कालिख लग जाती है, वैसे ही शांत व सद्गुणी संगति हमारे क्रोध और संदेह को स्वतः कम कर देती है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਅਤਰ ਦੀ ਦੁਕਾਨ ਤੇ ਬੈਠਣ ਨਾਲ ਕੱਪੜਿਆਂ ਵਿੱਚ ਖੁਸ਼ਬੂ ਆ ਜਾਂਦੀ ਹੈ, ਤਿਵੇਂ ਹੀ ਸ਼ਾਂਤ ਤੇ ਗੁਣਵਾਨ ਸੰਗਤ ਸਾਡੇ ਗੁੱਸੇ ਤੇ ਸ਼ੱਕ ਨੂੰ ਆਪੇ ਘਟਾ ਦਿੰਦੀ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as sitting in a perfume shop leaves fragrance on one’s clothes, spending time with calm, truthful people naturally elevates our own temperament.',
    mindHi: 'मन विश्लेषण: मन स्वभाव से ही आसपास के वातावरण का रंग पकड़ता है; इसलिए कुसंग से बचना और सूप जैसा सार-ग्राही बनना आवश्यक है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਮਨ ਸੁਭਾਅ ਤੋਂ ਹੀ ਆਲੇ-ਦੁਆਲੇ ਦਾ ਰੰਗ ਫੜਦਾ ਹੈ; ਇਸ ਲਈ ਕੁਸੰਗਤ ਤੋਂ ਬਚ ਕੇ ਚੰਗੇ ਗੁਣਾਂ ਨੂੰ ਅਪਣਾਉਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
    mindEn: 'Mind Analysis: The mind absorbs whatever mental atmosphere surrounds it; discernment in association protects inner clarity.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर वाणी में "साधु" या "संत" कोई संप्रदाय-विशेष नहीं, बल्कि वह जागृत विवेकी अवस्था है जो सूप की तरह सार (सत्यनाम) रखकर थोथा (अहं-विकार) उड़ा देती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਬਾਣੀ ਵਿੱਚ "ਸਾਧੂ" ਜਾਂ "ਸੰਤ" ਕੋਈ ਭੇਖ ਨਹੀਂ, ਸਗੋਂ ਉਹ ਜਾਗ੍ਰਿਤ ਵਿਵੇਕ ਹੈ ਜੋ ਛੱਜ ਵਾਂਗ ਸਾਰ (ਸਤਯਨਾਮ) ਰੱਖ ਕੇ ਥੋਥਾ (ਵਿਕਾਰ) ਉਡਾ ਦਿੰਦਾ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Sadhu" signifies awakened discernment—like a winnowing fan that preserves nourishing grain (Truth) and discards hollow chaff (ego and gossip).',
    tattvaHi: 'तत्व ज्ञान: बाहरी सत्संग तब सार्थक होता है जब मन भीतर के सत्य-तत्त्व के संग स्थिर हो जाए।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਬਾਹਰੀ ਸਤਿਸੰਗ ਉਦੋਂ ਸਫਲ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਮਨ ਅੰਦਰਲੇ ਸੱਚ ਨਾਲ ਜੁੜ ਜਾਵੇ।',
    tattvaEn: 'Tattva Gyan: Outer Satsang bears fruit when the mind learns to abide inwardly in truth.',
  },
  'prem-bhakti': {
    whyHi: 'सतगुरु कबीर साहेब ने प्रेम और समर्पण को सर्वोपरि इसलिए बताया क्योंकि केवल रूखा तर्क या शुष्क बुद्धि परमात्मा तक नहीं पहुँचती; जब हृदय में निष्काम प्रेम और विनम्र समर्पण जागता है तभी मिलन घटित होता है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਪ੍ਰੇਮ ਤੇ ਸਮਰਪਣ ਨੂੰ ਸਰਵੋਤਮ ਇਸ ਲਈ ਦੱਸਿਆ ਕਿਉਂਕਿ ਕੇਵਲ ਸੁੱਕੇ ਤਰਕ ਨਾਲ ਪ੍ਰਭੂ ਨਹੀਂ ਮਿਲਦਾ; ਨਿਰਛਲ ਪ੍ਰੇਮ ਨਾਲ ਹੀ ਮਿਲਾਪ ਹੁੰਦਾ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb elevates selfless love and surrender above dry intellectualism because reason alone cannot bridge duality—only pure devotion melts the barrier of ego.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे एक छोटा बच्चा किसी जटिल दर्शन को जाने बिना भी केवल निश्छल प्रेम से माता की गोद पा लेता है, वैसे ही अभिमान छोड़कर सरल हृदय से की गई भक्ति परमात्मा को सबसे प्रिय होती है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਨਿੱਕਾ ਬੱਚਾ ਬਿਨਾਂ ਕਿਸੇ ਵੱਡੇ ਤਰਕ ਦੇ ਕੇਵਲ ਨਿਸ਼ਕਾਮ ਪ੍ਰੇਮ ਨਾਲ ਮਾਂ ਦੀ ਗੋਦ ਪਾ ਲੈਂਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਸਰਲ ਹਿਰਦੇ ਦੀ ਭਗਤੀ ਪ੍ਰਭੂ ਨੂੰ ਸਭ ਤੋਂ ਪਿਆਰੀ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as a child trusts a mother’s embrace without philosophical complexity, wholehearted sincerity reaches Truth faster than prideful scholarship.',
    mindHi: 'मन विश्लेषण: सांसारिक मोह में "मेरा सुख" केंद्र में रहता है, जबकि आध्यात्मिक प्रेम में "अहंकार का समर्पण" और सबके लिए सद्भाव रहता है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਦੁਨਿਆਵੀ ਮੋਹ ਵਿੱਚ "ਮੇਰਾ ਸੁੱਖ" ਮੁੱਖ ਹੁੰਦਾ ਹੈ, ਜਦਕਿ ਰੂਹਾਨੀ ਪ੍ਰੇਮ ਵਿੱਚ ਹੰਕਾਰ ਦਾ ਤਿਆਗ ਅਤੇ ਸਭ ਦਾ ਭਲਾ ਹੁੰਦਾ ਹੈ।',
    mindEn: 'Mind Analysis: Worldly attachment demands "what do I get?", whereas spiritual love gladly surrenders ego.',
    esotericHi: 'आध्यात्मिक प्रतीक: "प्रेम गली" या "बिरह" उस आंतरिक तड़प का प्रतीक है जिसमें जीवात्मा अपने बिछड़े हुए मूल स्रोत सतपुरुष के लिए व्याकुल होकर संसार के क्षुद्र आकर्षणों से ऊपर उठती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: "ਪ੍ਰੇਮ ਗਲੀ" ਜਾਂ "ਬਿਰਹਾ" ਉਸ ਅੰਦਰੂਨੀ ਤੜਪ ਦਾ ਪ੍ਰਤੀਕ ਹੈ ਜਿਸ ਵਿੱਚ ਸੁਰਤ ਆਪਣੇ ਅਸਲ ਸਰੋਤ ਸਤਪੁਰੁਸ਼ ਦੇ ਮਿਲਾਪ ਲਈ ਦੁਨੀਆ ਦੇ ਛੋਟੇ ਮੋਹ ਤੋਂ ਉੱਪਰ ਉੱਠਦੀ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Prem Gali" (lane of love) and "Birah" represent the soul’s focused longing to return from separation into unity with the Source.',
    tattvaHi: 'तत्व ज्ञान: जहाँ द्वैत-अभिमान समाप्त हो और एकरस प्रेम बहे, वहीं भक्ति की चरम सिद्धि है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਜਿੱਥੇ ਦਵੈਤ-ਹੰਕਾਰ ਮੁੱਕ ਜਾਵੇ ਅਤੇ ਇੱਕ-ਰਸ ਪ੍ਰੇਮ ਵਹੇ, ਉੱਥੇ ਹੀ ਭਗਤੀ ਦੀ ਪੂਰਨਤਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Where duality dissolves into effortless love, devotion reaches fulfillment.',
  },
  compassion: {
    whyHi: 'सतगुरु कबीर साहेब ने दया, अहिंसा और परोपकार को धर्म का मूल इसलिए घोषित किया क्योंकि जो हृदय किसी प्राणी की पीड़ा देखकर द्रवित नहीं होता, उसमें ईश्वर का वास कभी प्रकट नहीं हो सकता।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਦਇਆ, ਅਹਿੰਸਾ ਅਤੇ ਪਰਉਪਕਾਰ ਨੂੰ ਧਰਮ ਦੀ ਜੜ੍ਹ ਇਸ ਲਈ ਦੱਸਿਆ ਕਿਉਂਕਿ ਜਿਸ ਹਿਰਦੇ ਵਿੱਚ ਜੀਵ-ਦਇਆ ਨਹੀਂ, ਉੱਥੇ ਪ੍ਰਭੂ ਦਾ ਵਾਸ ਨਹੀਂ ਹੋ ਸਕਦਾ।',
    whyEn: 'Satguru Kabir Saheb declares compassion, non-violence, and service to be the root of religion because a heart closed to others’ suffering cannot host divine truth.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे फलदार वृक्ष स्वयं धूप सहकर भी राहगीरों को छाया और मीठे फल देता है, वैसे ही सज्जन व्यक्ति अपने समय, श्रम और मीठे व्यवहार से दूसरों का बोझ हल्का करते हैं।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਫਲਦਾਰ ਰੁੱਖ ਆਪ ਧੁੱਪ ਸਹਿ ਕੇ ਵੀ ਰਾਹੀਆਂ ਨੂੰ ਛਾਂ ਤੇ ਫਲ ਦਿੰਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਭਲੇ ਮਨੁੱਖ ਆਪਣੇ ਸਹਿਯੋਗ ਤੇ ਮਿੱਠੇ ਵਿਹਾਰ ਨਾਲ ਦੂਜਿਆਂ ਦਾ ਦੁੱਖ ਵੰਡਾਉਂਦੇ ਹਨ।',
    drishtantEn: 'Everyday Example: Like a fruit tree that endures scorching heat yet offers shade and fruit to every passerby, a noble person eases others’ burdens without seeking applause.',
    mindHi: 'मन विश्लेषण: स्वार्थ मन को संकुचित और कठोर बनाता है; निस्वार्थ सेवा व दया हृदय को विशाल और शांत बनाती है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਸਵਾਰਥ ਮਨ ਨੂੰ ਤੰਗ ਤੇ ਕਠੋਰ ਬਣਾਉਂਦਾ ਹੈ; ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਤੇ ਦਇਆ ਹਿਰਦੇ ਨੂੰ ਵਿਸ਼ਾਲ ਤੇ ਸ਼ਾਂਤ ਕਰਦੀ ਹੈ।',
    mindEn: 'Mind Analysis: Selfishness shrinks consciousness into anxiety; selfless kindness expands the heart into peace.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर साहेब की दृष्टि में प्रत्येक जीव एक ही परमात्म-नूर का अंश है; अतः "जीव-दया" वास्तव में सर्वत्र विराजमान अपने ही प्रीतम की प्रत्यक्ष सेवा है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਹਰ ਜੀਵ ਵਿੱਚ ਇੱਕੋ ਪ੍ਰਭੂ ਦੀ ਜੋਤ ਹੈ; ਇਸ ਲਈ "ਜੀਵ-ਦਇਆ" ਅਸਲ ਵਿੱਚ ਹਰ ਥਾਂ ਵਸਦੇ ਆਪਣੇ ਪ੍ਰੀਤਮ ਦੀ ਹੀ ਸੇਵਾ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: Every living creature carries the same Divine Spark; therefore, universal compassion is direct worship of the Indwelling One.',
    tattvaHi: 'तत्व ज्ञान: जहाँ दया और क्षमा का वास है, वहाँ सत्य का सूर्य स्वयं चमक उठता है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਜਿੱਥੇ ਦਇਆ ਅਤੇ ਖਿਮਾ ਦਾ ਵਾਸ ਹੈ, ਉੱਥੇ ਸੱਚ ਦਾ ਸੂਰਜ ਆਪੇ ਚਮਕ ਪੈਂਦਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Wherever mercy and forgiveness dwell, the light of Truth shines effortlessly.',
  },
  'mind-control': {
    whyHi: 'सतगुरु कबीर साहेब ने मन की प्रवृत्तियों को समझाने वाली यह वाणी इसलिए दी क्योंकि संसार को जीतना सरल है, पर अपने ही चंचल और विकारी मन को वश में किए बिना वास्तविक शांति असंभव है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਮਨ ਨੂੰ ਸਮਝਾਉਣ ਵਾਲੀ ਇਹ ਬਾਣੀ ਇਸ ਲਈ ਦਿੱਤੀ ਕਿਉਂਕਿ ਦੁਨੀਆ ਨੂੰ ਜਿੱਤਣਾ ਸੌਖਾ ਹੈ, ਪਰ ਆਪਣੇ ਚੰਚਲ ਮਨ ਉੱਤੇ ਕਾਬੂ ਪਾਏ ਬਿਨਾਂ ਸੱਚੀ ਸ਼ਾਂਤੀ ਅਸੰਭਵ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb gave this counsel because outer achievements cannot bring peace until the restless, reactive mind itself is understood and mastered.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे एक अनियंत्रित नाव लहरों के सहारे कहीं भी टकरा सकती है पर पतवार सँभालने पर सुरक्षित किनारे लगती है, वैसे ही जागरूक विवेक और धैर्य से संभाला गया मन जीवन को सार्थक दिशा देता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਬਿਨਾਂ ਮਲਾਹ ਦੇ ਬੇੜੀ ਲਹਿਰਾਂ ਵਿੱਚ ਭਟਕਦੀ ਹੈ ਪਰ ਚੱਪੂ ਸੰਭਾਲਣ ਨਾਲ ਕਿਨਾਰੇ ਲੱਗ ਜਾਂਦੀ ਹੈ, ਤਿਵੇਂ ਹੀ ਵਿਵੇਕ ਨਾਲ ਸੰਭਾਲਿਆ ਮਨ ਜੀਵਨ ਨੂੰ ਸਹੀ ਦਿਸ਼ਾ ਦਿੰਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: An unsteered boat drifts into rocks, whereas steady hands at the rudder bring it safely home; mindful discernment guides the wandering mind toward calm.',
    mindHi: 'मन विश्लेषण: मन एक सेवक के रूप में अद्भुत है, पर स्वामी बनते ही क्रोध, भय और तुलना का जाल बुन देता है। साक्षी भाव ही इसकी लगाम है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਮਨ ਸੇਵਕ ਵਜੋਂ ਬਹੁਤ ਵਧੀਆ ਹੈ, ਪਰ ਮਾਲਕ ਬਣਦੇ ਹੀ ਗੁੱਸੇ ਤੇ ਤੁਲਨਾ ਦਾ ਜਾਲ ਬੁਣ ਦਿੰਦਾ ਹੈ। ਸਾਖੀ-ਭਾਵ ਹੀ ਇਸ ਦੀ ਲਗਾਮ ਹੈ।',
    mindEn: 'Mind Analysis: The mind makes a wonderful servant but a tyrannical master; quiet witness-awareness holds its reins.',
    esotericHi: 'आध्यात्मिक प्रतीक: इस वाणी के प्रतीकों में "मन" की बहिर्मुखी गति को समेटकर अंतरंग "सुरति" (ध्यान-चेतना) में रूपांतरित करने का योग-संकेत छिपा है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਇਸ ਬਾਣੀ ਦੇ ਪ੍ਰਤੀਕਾਂ ਵਿੱਚ ਬਾਹਰ ਭਟਕਦੇ "ਮਨ" ਨੂੰ ਸਮੇਟ ਕੇ ਅੰਦਰੂਨੀ "ਸੁਰਤ" ਵਿੱਚ ਟਿਕਾਉਣ ਦਾ ਯੋਗ-ਸੰਕੇਤ ਲੁਕਿਆ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: Within these symbols lies the yogic art of withdrawing scattered mental energy and gathering it into centered inner awareness (Surat).',
    tattvaHi: 'तत्व ज्ञान: मन के मरने (संकल्प-विकल्प शांत होने) पर ही आत्मा का निर्भय, सहज स्वरूप प्रकट होता है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਮਨ ਦੇ ਸੰਕਲਪ-ਵਿਕਲਪ ਸ਼ਾਂਤ ਹੋਣ ਤੇ ਹੀ ਆਤਮਾ ਦਾ ਨਿਰਭੈ ਤੇ ਸਹਿਜ ਸਰੂਪ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: When restless mental fabrication subsides, the fearless, natural state of the soul shines forth.',
  },
  'yoga-ghat': {
    whyHi: 'सतगुरु कबीर साहेब यह गहन रहस्य इसलिए खोलते हैं ताकि साधक बाहरी स्थानों और पहाड़ों-तीर्थों में भटकना बंद करे और जाने कि समस्त आध्यात्मिक खजाना व अनहद नाद स्वयं मनुष्य के घट के भीतर है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਇਹ ਗੂੜ੍ਹ ਭੇਦ ਇਸ ਲਈ ਖੋਲ੍ਹਦੇ ਹਨ ਤਾਂ ਜੋ ਸਾਧਕ ਬਾਹਰ ਤੀਰਥਾਂ ਵਿੱਚ ਭਟਕਣਾ ਬੰਦ ਕਰਕੇ ਸਮਝੇ ਕਿ ਸਾਰਾ ਅਧਿਆਤਮਕ ਖ਼ਜ਼ਾਨਾ ਤੇ ਅਨਹਦ ਨਾਦ ਆਪਣੇ ਹੀ ਘਟ ਦੇ ਅੰਦਰ ਹੈ।',
    whyEn: 'Satguru Kabir Saheb reveals this inner mystery so seekers stop searching endlessly in external landmarks and discover the living spiritual treasure within their own being.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे किसी व्यक्ति के घर के ही आँगन में मीठे जल का स्रोत छिपा हो और वह प्यास बुझाने को मीलों भटकता रहे—वैसे ही शांति और आनंद हमारे अपने भीतर हैं, केवल भीतर उतरने का अभ्यास चाहिए।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਕਿਸੇ ਦੇ ਆਪਣੇ ਘਰ ਵਿੱਚ ਹੀ ਮਿੱਠੇ ਪਾਣੀ ਦਾ ਸਰੋਤ ਹੋਵੇ ਪਰ ਉਹ ਪਿਆਸ ਬੁਝਾਉਣ ਲਈ ਬਾਹਰ ਭਟਕਦਾ ਫਿਰੇ—ਤਿਵੇਂ ਹੀ ਸ਼ਾਂਤੀ ਸਾਡੇ ਆਪਣੇ ਅੰਦਰ ਹੈ।',
    drishtantEn: 'Everyday Example: Like someone wandering miles for water while an untapped spring flows beneath their own courtyard, inner peace already exists within us awaiting quiet attention.',
    mindHi: 'मन विश्लेषण: इंद्रियों का स्वभाव सदा बाहर देखने का है; थोड़ी देर मौन बैठकर भीतर ध्यान टिकाना ही बहिर्मुखता को तोड़ता है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਇੰਦਰੀਆਂ ਦਾ ਸੁਭਾਅ ਸਦਾ ਬਾਹਰ ਵੇਖਣ ਦਾ ਹੈ; ਕੁਝ ਪਲ ਚੁੱਪ ਬੈਠ ਕੇ ਅੰਦਰ ਧਿਆਨ ਲਾਉਣਾ ਹੀ ਬਾਹਰਲੀ ਭਟਕਣਾ ਤੋੜਦਾ ਹੈ।',
    mindEn: 'Mind Analysis: The senses are conditioned to look outward; a few moments of silent inner stillness reverses that outward habit.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर योग-साधना में "घट-मंदिर", "कस्तूरी", "मानसरोवर" या "अनहद" मानव देह के भीतर स्थित त्रिकुटी व दसम द्वार के सूक्ष्म चेतन केंद्र हैं, जहाँ सुरति शब्द में लीन होती है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਯੋਗ-ਸਾਧਨਾ ਵਿੱਚ "ਘਟ-ਮੰਦਿਰ", "ਕਸਤੂਰੀ", "ਮਾਨਸਰੋਵਰ" ਜਾਂ "ਅਨਹਦ" ਮਨੁੱਖੀ ਸਰੀਰ ਦੇ ਅੰਦਰ ਤ੍ਰਿਕੁਟੀ ਤੇ ਦਸਵੇਂ ਦੁਆਰ ਦੇ ਸੂਖਮ ਕੇਂਦਰ ਹਨ, ਜਿੱਥੇ ਸੁਰਤ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਹੁੰਦੀ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: "Ghat-Mandir," "Musk," "Mansarovar," and "Anhad" point to subtle inner centers (Trikuti and the Tenth Door) where Surat merges into the Unstruck Sound.',
    tattvaHi: 'तत्व ज्ञान: घट से बाहर सब खोज है, और घट के भीतर पहुँचकर सुरति का शब्द में विलय ही अंतिम प्राप्ति है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਘਟ ਤੋਂ ਬਾਹਰ ਸਭ ਖੋਜ ਹੈ, ਪਰ ਘਟ ਦੇ ਅੰਦਰ ਪਹੁੰਚ ਕੇ ਸੁਰਤ ਦਾ ਸ਼ਬਦ ਵਿੱਚ ਸਮਾਉਣਾ ਹੀ ਅਸਲੀ ਪ੍ਰਾਪਤੀ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Outside the self is endless seeking; within the inner sanctum lies union with the Word.',
  },
};

export interface Step4DistinctContent {
  whyTaught: string;
  satsangWithDrishtant: string;
  mindMayaAnalysis: string;
}

/**
 * Generates Step 4 (गहरा सत्संग एवं व्यवहारिक व्याख्या) WITHOUT repeating Step 1's bhavarth
 * and completely removing generic boilerplate lines.
 */
export function buildStep4SatsangContent(sakhi: Sakhi, language: Language): Step4DistinctContent {
  const curated = CURATED_SAKHI_DEPTH[sakhi.number];
  const practical = (sakhi.practicalApplication?.[language] || sakhi.practicalApplication?.hi || '').trim();
  const contextNote = (sakhi.contextNote?.[language] || sakhi.contextNote?.hi || '').trim();

  if (curated) {
    const why = curated.step4WhyTaught[language] || curated.step4WhyTaught.hi;
    const drishtant = curated.step4Drishtant[language] || curated.step4Drishtant.hi;
    const mind = curated.step4MindAnalysis[language] || curated.step4MindAnalysis.hi;

    const actionFooter = practical
      ? language === 'pb'
        ? `\n\n• ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ: ${practical}`
        : language === 'en'
        ? `\n\n• Daily Practice: ${practical}`
        : `\n\n• व्यावहारिक आचरण: ${practical}`
      : '';

    return {
      whyTaught: ensureSatguruKabirSaheb(why),
      satsangWithDrishtant: ensureSatguruKabirSaheb(`${drishtant}${actionFooter}`),
      mindMayaAnalysis: ensureSatguruKabirSaheb(mind),
    };
  }

  const { primaryTheme } = detectThemeAndSymbols(sakhi);
  const tpl = THEME_DEPTH_TEMPLATES[primaryTheme];

  const whyBase =
    language === 'pb' ? tpl.whyPb : language === 'en' ? tpl.whyEn : tpl.whyHi;
  const whyTaught = contextNote
    ? `${whyBase}\n\n${contextNote}`
    : whyBase;

  const drishtant =
    language === 'pb' ? tpl.drishtantPb : language === 'en' ? tpl.drishtantEn : tpl.drishtantHi;
  const actionLine = practical
    ? language === 'pb'
      ? `\n\n• ਵਿਵਹਾਰਕ ਸੂਤਰ: ${practical}`
      : language === 'en'
      ? `\n\n• Daily Action: ${practical}`
      : `\n\n• दैनिक आचरण सूत्र: ${practical}`
    : '';

  const mindAnalysis =
    language === 'pb' ? tpl.mindPb : language === 'en' ? tpl.mindEn : tpl.mindHi;

  return {
    whyTaught: ensureSatguruKabirSaheb(whyTaught),
    satsangWithDrishtant: ensureSatguruKabirSaheb(`${drishtant}${actionLine}`),
    mindMayaAnalysis: ensureSatguruKabirSaheb(mindAnalysis),
  };
}

/**
 * Generates Step 6 (आध्यात्मिक रहस्य एवं तत्व ज्ञान) with inner esoteric/yogic meaning
 * of the couplet's symbols — NEVER repeating Step 1's bhavarth.
 */
export function buildStep6EsotericContent(sakhi: Sakhi, language: Language): string {
  const curated = CURATED_SAKHI_DEPTH[sakhi.number];
  if (curated) {
    const syms = curated.step6EsotericSymbols[language] || curated.step6EsotericSymbols.hi;
    const tattva = curated.step6TattvaGyan[language] || curated.step6TattvaGyan.hi;
    const header =
      language === 'pb'
        ? `🔑 ਅੰਦਰੂਨੀ ਪ੍ਰਤੀਕਾਂ ਦਾ ਗੂੜ੍ਹ ਭੇਦ (ਸਾਖੀ #${sakhi.number}):`
        : language === 'en'
        ? `🔑 Inner Esoteric Symbolism (Sakhi #${sakhi.number}):`
        : `🔑 प्रतीकों का सूक्ष्म एवं योगिक रहस्य (साखी #${sakhi.number}):`;
    return ensureSatguruKabirSaheb(`${header}\n\n${syms}\n\n✨ ${tattva}`);
  }

  const { primaryTheme, symbolsHi, symbolsPb, symbolsEn } = detectThemeAndSymbols(sakhi);
  const tpl = THEME_DEPTH_TEMPLATES[primaryTheme];

  const esotericBlock =
    language === 'pb' ? tpl.esotericPb : language === 'en' ? tpl.esotericEn : tpl.esotericHi;
  const tattvaBlock =
    language === 'pb' ? tpl.tattvaPb : language === 'en' ? tpl.tattvaEn : tpl.tattvaHi;
  const symbolLines =
    language === 'pb'
      ? symbolsPb
      : language === 'en'
      ? symbolsEn
      : symbolsHi;

  const header =
    language === 'pb'
      ? `🔑 ਅੰਦਰੂਨੀ ਪ੍ਰਤੀਕ ਤੇ ਤੱਤ-ਗਿਆਨ (ਸਾਖੀ #${sakhi.number}):`
      : language === 'en'
      ? `🔑 Esoteric & Yogic Symbolism (Sakhi #${sakhi.number}):`
      : `🔑 आध्यात्मिक रहस्य एवं तत्व-ज्ञान विश्लेषण (साखी #${sakhi.number}):`;

  const symbolHeading =
    language === 'pb'
      ? '\n\n🧩 ਇਸ ਸਾਖੀ ਦੇ ਪ੍ਰਮੁੱਖ ਸ਼ਬਦ-ਸੰਕੇਤ:'
      : language === 'en'
      ? '\n\n🧩 Key Inner Symbols in This Verse:'
      : '\n\n🧩 इस साखी के प्रमुख प्रतीक-संकेत:';

  const symbolSection = symbolLines.length > 0 ? `${symbolHeading}\n${symbolLines.join('\n')}` : '';

  const tattvaLabel =
    language === 'pb' ? '✨ ਤੱਤ-ਸਾਰ:' : language === 'en' ? '✨ Core Tattva Gyan:' : '✨ तत्व-ज्ञान सार:';

  return ensureSatguruKabirSaheb(
    `${header}\n\n${esotericBlock}${symbolSection}\n\n${tattvaLabel} ${tattvaBlock}`
  );
}

/**
 * Derives a distinct spiritual essence for Granth Library verses when a dataset has
 * copied bhavarth verbatim into spiritualEssence.
 */
export function deriveDistinctSpiritualEssence(
  verseTextHi: string,
  bhavarthHi: string,
  existingEssence: string | undefined,
  language: Language
): string {
  const normalizedBhavarth = (bhavarthHi || '').trim();
  const normalizedExisting = (existingEssence || '').trim();
  if (normalizedExisting && normalizedExisting !== normalizedBhavarth) {
    return language === 'pb'
      ? hindiToPunjabiWordConverter(normalizedExisting)
      : ensureSatguruKabirSaheb(normalizedExisting);
  }

  const pseudoSakhi = {
    number: 0,
    text: { hi: verseTextHi, pb: '', en: '' },
    bhavarth: { hi: normalizedBhavarth, pb: '', en: '' },
    categoryTitle: { hi: '', pb: '', en: '' },
    category: '',
    wordMeanings: { hi: [], pb: [], en: [] },
  } as unknown as Sakhi;

  const { primaryTheme } = detectThemeAndSymbols(pseudoSakhi);
  const tpl = THEME_DEPTH_TEMPLATES[primaryTheme];

  if (language === 'pb') {
    return ensureSatguruKabirSaheb(`${tpl.esotericPb} ${tpl.tattvaPb}`);
  }
  if (language === 'en') {
    return ensureSatguruKabirSaheb(`${tpl.esotericEn} ${tpl.tattvaEn}`);
  }
  return ensureSatguruKabirSaheb(`${tpl.esotericHi} ${tpl.tattvaHi}`);
}
