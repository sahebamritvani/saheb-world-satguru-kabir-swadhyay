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
  | 'shabd'
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
  1108: {
    step1Concise: {
      hi: 'जो साधक अंतरंग में परम सत्य (सार-शब्द) का सच्चा अन्वेषक बनता है, वह संत जन धन्य है। सतगुरु कबीर साहेब फरमाते हैं कि जो सत्य-शब्द को अपने हृदय में दृढ़ता से धारण कर लेता है, उसका अमूल्य मानव जीवन कभी व्यर्थ नष्ट नहीं होता और न वह भवसागर में भटकता है।',
      pb: 'ਜਿਹੜਾ ਸਾਧਕ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਪਰਮ ਸਤਿ (ਸਾਰ-ਸ਼ਬਦ) ਦਾ ਸੱਚਾ ਖੋਜੀ ਬਣਦਾ ਹੈ, ਉਹ ਸੰਤ ਧੰਨ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੋ ਸਤਯ-ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਧਾਰਨ ਕਰ ਲੈਂਦਾ ਹੈ, ਉਸਦਾ ਅਮੋਲਕ ਜੀਵਨ ਕਦੇ ਭਟਕ ਕੇ ਵਿਅਰਥ ਨਸ਼ਟ ਨਹੀਂ ਹੁੰਦਾ।',
      en: 'Blessed is that noble seeker who becomes an earnest seeker of the Ultimate Living Word (Saar-Shabd). Satguru Kabir Saheb affirms that whoever firmly anchors the sacred Word within consciousness never wanders in vain nor is their precious human life squandered.',
    },
    step4WhyTaught: {
      hi: 'सतगुरु कबीर साहेब ने यह उपदेश इसलिए दिया क्योंकि अधिकांश लोग केवल बाहरी ग्रंथों, मंत्रों और कर्मकांडों के संग्रह में उलझे रहते हैं और भीतर गूँज रहे जीवित सत्य-शब्द (सार-शब्द) की खोज नहीं करते। साहेब चेतावनी देते हैं कि जब तक सुरति शब्द को दृढ़ता से नहीं पकड़ती, तब तक संसार के प्रपंचों और भ्रमों में अमूल्य जीवन व्यर्थ नष्ट (बिगोय) हो जाता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਹ ਉਪਦੇਸ਼ ਇਸ ਲਈ ਦਿੱਤਾ ਕਿਉਂਕਿ ਬਹੁਤੇ ਲੋਕ ਬਾਹਰੀ ਪੁਸਤਕਾਂ ਅਤੇ ਕਰਮਕਾਂਡਾਂ ਦੇ ਭਰਮ ਵਿੱਚ ਉਲਝੇ ਰਹਿੰਦੇ ਹਨ ਅਤੇ ਅੰਦਰ ਗੂੰਜਦੇ ਸੱਚੇ ਸਾਰ-ਸ਼ਬਦ ਦੀ ਖੋਜ ਨਹੀਂ ਕਰਦੇ। ਸਾਹੇਬ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਜਦੋਂ ਤੱਕ ਸੁਰਤ ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਨਹੀਂ ਫੜਦੀ, ਜੀਵਨ ਵਿਅਰਥ ਭਟਕਣਾ ਵਿੱਚ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb imparted this teaching because most people get lost collecting outer scriptures, dogmas, and ceremonies rather than investigating the living Saar-Shabd resonating within. He warns that unless inner awareness firmly grasps the Word, precious life dissolves into delusion and ruin.',
    },
    step4Drishtant: {
      hi: 'दैनिक जीवन का दृष्टांत: जैसे गहरे समुद्र में गोता लगाने वाला अनुभवी खोजी ही तलहटी से सच्चा मोती निकाल पाता है, जबकि किनारे पर कंकड़-पत्थर बटोरने वाले केवल खाली हाथ रहते हैं—उसी प्रकार जो साधक सतगुरु की वाणी और सत्यनाम को जीवन में गहराई से उतारता है, वह जीवन के किसी भी झंझावात या प्रलोभन में नहीं बहकता। जैसे किसी विशाल बाढ़ में किनारे की मजबूत रस्सी पकड़ने वाला सुरक्षित पार उतर जाता है, वैसे ही "गहि शब्द" करने वाला साधक काल और माया के थपेड़ों से सुरक्षित रहता है।',
      pb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਡੂੰਘੇ ਸਮੁੰਦਰ ਵਿੱਚ ਗੋਤਾ ਲਾਉਣ ਵਾਲਾ ਸੱਚਾ ਖੋਜੀ ਹੀ ਹੇਠੋਂ ਮੋਤੀ ਕੱਢ ਕੇ ਲਿਆਉਂਦਾ ਹੈ, ਜਦਕਿ ਕੰਢੇ ਤੇ ਬੈਠਣ ਵਾਲੇ ਹੱਥ ਮਲਦੇ ਰਹਿ ਜਾਂਦੇ ਹਨ—ਤਿਵੇਂ ਹੀ ਜੋ ਸਾਧਕ ਸਤਿਗੁਰੂ ਦੀ ਬਾਣੀ ਅਤੇ ਸਤਯਨਾਮ ਨੂੰ ਅੰਦਰ ਵਸਾਉਂਦਾ ਹੈ, ਉਹ ਕਦੇ ਭਟਕਦਾ ਨਹੀਂ। ਜਿਵੇਂ ਹੜ੍ਹ ਵਿੱਚ ਮਜ਼ਬੂਤ ਰੱਸਾ ਫੜਨ ਵਾਲਾ ਪਾਰ ਲੰਘ ਜਾਂਦਾ ਹੈ, ਤਿਵੇਂ ਸ਼ਬਦ ਨੂੰ ਫੜਨ ਵਾਲਾ ਮਾਇਆ ਦੇ ਝੱਖੜਾਂ ਤੋਂ ਬਚ ਜਾਂਦਾ ਹੈ।',
      en: 'Everyday Example: Just as a committed deep-sea diver plunges beneath the waves to retrieve precious pearls while casual onlookers collect worthless pebbles on the shore, the seeker who dives deep into the Satguru’s Word anchors life in unwavering truth. Like holding tightly to a sturdy lifeline amidst a raging flash flood, holding onto the Saar-Shabd keeps the soul anchored against worldly storms.',
    },
    step4MindAnalysis: {
      hi: 'मन एवं विवेक का विश्लेषण: मन स्वभाव से उथली बातों, विवादों और क्षणिक इच्छाओं में दौड़ता है। जब तक विवेक जागृत होकर मन को "खोजी" (शोधक) नहीं बनाता, तब तक ऊर्जा व्यर्थ बहती है। सत्य-शब्द का अनुसंधान मन की चंचलता को समाप्त कर सुरति को अंतर्मुख करता है।',
      pb: 'ਮਨ ਤੇ ਵਿਵੇਕ ਦੀ ਪਰਖ: ਮਨ ਸੁਭਾਅ ਤੋਂ ਹੀ ਬਾਹਰੀ ਬਹਿਸਾਂ ਤੇ ਇੱਛਾਵਾਂ ਪਿੱਛੇ ਦੌੜਦਾ ਹੈ। ਜਦੋਂ ਤੱਕ ਵਿਵੇਕ ਜਾਗ ਕੇ ਮਨ ਨੂੰ ਸੱਚਾ ਖੋਜੀ ਨਹੀਂ ਬਣਾਉਂਦਾ, ਊਰਜਾ ਵਿਅਰਥ ਜਾਂਦੀ ਹੈ। ਸਤਯ-ਸ਼ਬਦ ਦੀ ਖੋਜ ਮਨ ਦੀ ਭਟਕਣਾ ਮਿਟਾ ਕੇ ਸੁਰਤ ਨੂੰ ਅੰਤਰਮੁਖੀ ਕਰਦੀ ਹੈ।',
      en: 'Mind & Discernment Analysis: The untrained mind chases superficial gossip and worldly novelties. Until conscious discernment turns the mind into an earnest investigator ("Khoji"), spiritual energy dissipates. Investigating the living Word reins in restlessness and centers awareness inward.',
    },
    step6EsotericSymbols: {
      hi: '• "खोजी": कबीर पंथ सुरति-शब्द योग में "खोजी" केवल बौद्धिक चिंतक नहीं, बल्कि वह अंतर्मुखी अभ्यासी है जो श्वास-श्वास में सार-शब्द की पहचान करता है।\n• "शब्द" (सार-शब्द): यह वर्णनात्मक या अक्षरात्मक ध्वनि नहीं, बल्कि दसवें द्वार में गूँजने वाला अनादि, अक्रिय और अमर "निह-अक्षर" सत्य-तत्व है।\n• "गहि शब्द" (शब्द को पकड़ना): सुरति का मन और पंचेन्द्रियों के विकारों से सिमटकर त्रिकुटी-दसम द्वार के अंतरंग नाद में एकाग्र व तल्लीन हो जाना ही "शब्द गहिना" है।\n• "बिगोय न जाय": इसका अर्थ है कि काल, कर्म और माया के चक्रव्यूह से मुक्त होकर अमर लोक (सत्यलोक) में स्थायी प्रतिष्ठा प्राप्त करना—जहाँ जन्म-मरण का नाश हो जाता है।',
      pb: '• "ਖੋਜੀ": ਕਬੀਰ ਪੰਥ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਵਿੱਚ "ਖੋਜੀ" ਕੇਵਲ ਬੌਧਿਕ ਵਿਚਾਰਕ ਨਹੀਂ, ਸਗੋਂ ਉਹ ਅੰਤਰਮੁਖੀ ਸਾਧਕ ਹੈ ਜੋ ਸੁਆਸ-ਸੁਆਸ ਵਿੱਚ ਸਾਰ-ਸ਼ਬਦ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ।\n• "ਸ਼ਬਦ" (ਸਾਰ-ਸ਼ਬਦ): ਇਹ ਕੇਵਲ ਅੱਖਰੀ ਬੋਲ ਨਹੀਂ, ਸਗੋਂ ਦਸਵੇਂ ਦੁਆਰ ਵਿੱਚ ਗੂੰਜਦਾ ਅਨਾਦੀ, ਅਵਿਨਾਸ਼ੀ "ਨਿਹ-ਅੱਖਰ" ਸਤਯ-ਤੱਤ ਹੈ।\n• "ਗਹਿ ਸ਼ਬਦ": ਸੁਰਤ ਦਾ ਬਾਹਰੀ ਵਿਕਾਰਾਂ ਤੋਂ ਸਿਮਟ ਕੇ ਅੰਦਰੂਨੀ ਨਾਦ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਣਾ ਹੀ "ਸ਼ਬਦ ਗਹਿਣਾ" ਹੈ।\n• "ਬਿਗੋਇ ਨ ਜਾਇ": ਇਸਦਾ ਭਾਵ ਹੈ ਕਿ ਕਾਲ ਅਤੇ ਮਾਇਆ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਅਮਰਲੋਕ ਵਿੱਚ ਸਥਾਈ ਮੁਕਤੀ ਪ੍ਰਾਪਤ ਕਰਨੀ।',
      en: '• "Khoji" (Inner Investigator): In Surat-Shabd Yoga, the "Khoji" is not an armchair scholar, but an earnest meditator who recognizes the living pulse of truth within each breath.\n• "Shabd" (Saar-Shabd): Not ordinary spoken letters, but the uncreated, primordial "Nih-Akshar" resonance vibrantly alive at the Tenth Door.\n• "Gahi Shabd" (Grasping the Word): Withdrawing consciousness from outer senses to merge Surat fully into the inner divine sound current.\n• "Bigoy Na Jaay" (Never Ruined): Freedom from the cycles of time, karma, and rebirth—attaining permanent sanctuary in the eternal realm of Satlok.',
    },
    step6TattvaGyan: {
      hi: 'तत्व ज्ञान सूत्र: "सबद सबद बहु अंतरा, सार सबद चित लाय।" बाहरी शब्द केवल दिशा दिखाते हैं, किंतु अंतरंग सार-शब्द ही जीव को काल-जाल से मुक्त कराता है। जो शब्द को पकड़ता है, उसका जीवन कभी व्यर्थ नहीं जाता।',
      pb: 'ਤੱਤ-ਗਿਆਨ ਸੂਤਰ: "ਸਬਦ ਸਬਦ ਬਹੁ ਅੰਤਰਾ, ਸਾਰ ਸਬਦ ਚਿਤ ਲਾਇ।" ਬਾਹਰੀ ਸ਼ਬਦ ਕੇਵਲ ਰਾਹ ਦੱਸਦੇ ਹਨ, ਪਰ ਅੰਦਰੂਨੀ ਸਾਰ-ਸ਼ਬਦ ਹੀ ਜੀਵ ਨੂੰ ਕਾਲ ਤੋਂ ਮੁਕਤ ਕਰਦਾ ਹੈ। ਜੋ ਸ਼ਬਦ ਨੂੰ ਧਾਰਦਾ ਹੈ, ਉਸਦਾ ਜੀਵਨ ਅਮੋਲਕ ਬਣ ਜਾਂਦਾ ਹੈ।',
      en: 'Tattva Gyan Essence: "There are myriad outer words, but fix your consciousness upon the Essential Word (Saar Shabd)." Spoken words merely point the way; the inward living Word cuts the cords of Kaal and guarantees eternal spiritual fulfillment.',
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

  if (
    sakhi.category === 'shabd-ko-ang' ||
    /शब्द को अंग|खोजी|सार शब्द|सत्य शब्द|गहि शब्द|गुरु शब्द|शबद\b/.test(blob)
  ) {
    primaryTheme = 'shabd';
  } else if (/शीतल शब्द|कुटिल|बचन|वचन|वाणी|बानी|रसना|बोल|मीठा|मधुर/.test(blob)) {
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
  shabd: {
    whyHi: 'सतगुरु कबीर साहेब ने शब्द को अंग के अंतर्गत यह वाणी इसलिए फरमाई ताकि साधक बाहरी अक्षरों, वाद-विवाद और थोथे कर्मकांडों से ऊपर उठकर अपनी चेतना (सुरति) को शाश्वत एवं अविनाशी "सत्यनाम" सार-शब्द में स्थिर कर सके। केवल जीवित सतगुरु-शब्द ही काल के चक्र से रक्षा करता है।',
    whyPb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸ਼ਬਦ ਕੋ ਅੰਗ ਵਿੱਚ ਇਹ ਬਾਣੀ ਇਸ ਲਈ ਫ਼ਰਮਾਈ ਤਾਂ ਜੋ ਸਾਧਕ ਬਾਹਰੀ ਅੱਖਰਾਂ, ਬਹਿਸਾਂ ਤੇ ਕਰਮਕਾਂਡਾਂ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਅਵਿਨਾਸ਼ੀ "ਸਤਯਨਾਮ" ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਾ ਸਕੇ।',
    whyEn: 'Satguru Kabir Saheb revealed this verse in Shabd Ko Ang so the seeker rises above outward letters, bookish debate, and empty ritual to anchor consciousness (Surat) firmly in the eternal, uncreated "Satyanaam" Shabd—the sole refuge from Kaal.',
    drishtantHi: 'दैनिक जीवन का दृष्टांत: जैसे किसी गहरे समुद्र या तीव्र धारा में फँसा यात्री किनारे की मज़बूत रस्सी को पकड़कर सुरक्षित पार लग जाता है, वैसे ही संसार की अनिश्चितता और भय के बीच अंतरंग "सत्यनाम" शब्द को दृढ़ता से थामने वाला साधक अडिग रहता है।',
    drishtantPb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੀ ਉਦਾਹਰਨ: ਜਿਵੇਂ ਤੇਜ਼ ਵਹਾਅ ਵਿੱਚ ਫਸਿਆ ਮਨੁੱਖ ਮਜ਼ਬੂਤ ਰੱਸੇ ਨੂੰ ਫੜ ਕੇ ਪਾਰ ਲੱਗ ਜਾਂਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਸੰਸਾਰ ਦੀਆਂ ਉਲਝਣਾਂ ਵਿੱਚ ਅੰਦਰੂਨੀ "ਸਤਯਨਾਮ" ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜਨ ਵਾਲਾ ਸਾਧਕ ਅਡੋਲ ਰਹਿੰਦਾ ਹੈ।',
    drishtantEn: 'Everyday Example: Just as a traveler caught in a swift current reaches safety by gripping a sturdy lifeline, a seeker who anchors awareness in the inner "Satyanaam" Shabd remains unshaken amidst worldly turmoil.',
    mindHi: 'मन विश्लेषण: चंचल मन केवल वर्णों, तर्कों और बाहरी कथाओं में उलझना चाहता है; सार-शब्द की साधना मन के बिखराव को समेटकर सुरति को निज-घर की ओर मोड़ती है।',
    mindPb: 'ਮਨ ਦੀ ਪਰਖ: ਚੰਚਲ ਮਨ ਬਾਹਰੀ ਦਲੀਲਾਂ ਵਿੱਚ ਉਲਝਿਆ ਰਹਿੰਦਾ ਹੈ; ਸਾਰ-ਸ਼ਬਦ ਦੀ ਸਾਧਨਾ ਮਨ ਦੇ ਭਟਕਾਅ ਨੂੰ ਸਮੇਟ ਕੇ ਸੁਰਤ ਨੂੰ ਅੰਤਰਮੁਖੀ ਕਰਦੀ ਹੈ।',
    mindEn: 'Mind Analysis: The restless intellect prefers endless debate over inward stillness; anchoring in the Living Word gathers scattered attention back to its True Home.',
    esotericHi: 'आध्यात्मिक प्रतीक: कबीर साहेब के तत्वज्ञान में "शब्द" (सार-शब्द) कोई कंठ से बोला जाने वाला वर्ण नहीं, बल्कि दसवें द्वार में निरंतर गुंजायमान होने वाला अमर, निह-अक्षर "सत्यनाम" स्पंदन है जो सुरति को काल-माया के पाश से छुड़ाता है।',
    esotericPb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ: ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਤੱਤ-ਗਿਆਨ ਵਿੱਚ "ਸ਼ਬਦ" (ਸਾਰ-ਸ਼ਬਦ) ਕੇਵਲ ਬੋਲਣ ਵਾਲਾ ਅੱਖਰ ਨਹੀਂ, ਸਗੋਂ ਦਸਵੇਂ ਦੁਆਰ ਵਿੱਚ ਗੂੰਜਣ ਵਾਲਾ ਅਮਰ "ਸਤਯਨਾਮ" ਨਾਦ ਹੈ ਜੋ ਸੁਰਤ ਨੂੰ ਕਾਲ ਦੇ ਜਾਲ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।',
    esotericEn: 'Esoteric Symbolism: In Satguru Kabir Saheb’s philosophy, "Shabd" (Saar-Shabd) is not a spoken syllable—it is the eternal, uncreated "Satyanaam" resonance vibrating within the Tenth Door that liberates Surat from Kaal.',
    tattvaHi: 'तत्व ज्ञान: जो साधक अपनी सुरति को शाश्वत "सत्यनाम" शब्द में पिरो लेता है, वह जीते-जी काल-भय से मुक्त होकर अमर पद प्राप्त करता है।',
    tattvaPb: 'ਤੱਤ-ਗਿਆਨ: ਜੋ ਸਾਧਕ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਸਦੀਵੀ "ਸਤਯਨਾਮ" ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਾ ਲੈਂਦਾ ਹੈ, ਉਹ ਕਾਲ ਦੇ ਭੈਅ ਤੋਂ ਸਦਾ ਲਈ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
    tattvaEn: 'Tattva Gyan: Whoever anchors Surat in the eternal "Satyanaam" Shabd transcends the fear of time and attains the imperishable state.',
  },
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
    esotericHi: 'आध्यात्मिक प्रतीक: इस वाणी में "शब्द" या "बचन" केवल उच्चारित ध्वनि नहीं, बल्कि चित्त की तरंग है। जब साधक कटु तरंगों को रोककर "शीतल शब्द" (सत्यनाम-ध्वनि) में स्थित होता है, तब अंतरंग कमल खिल उठता है।',
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
    whyHi: 'सतगुरु कबीर साहेब ने गुरु-महिमा का वर्णन इसलिए किया ताकि साधक अंधविश्वास या भटकाव में न पड़े और समझे कि आत्म-ज्ञान बिना सतगुरु के मार्गदर्शन व सार-शब्द के पूर्ण नहीं होता।',
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
  const words = sakhi.wordMeanings?.[language] || sakhi.wordMeanings?.hi || [];
  const primaryWord = words.find((w) => w?.word && w?.meaning);
  const categoryTitle = sakhi.categoryTitle?.[language] || sakhi.categoryTitle?.hi || '';

  const whyBase =
    language === 'pb' ? tpl.whyPb : language === 'en' ? tpl.whyEn : tpl.whyHi;
  const keywordBridge = primaryWord
    ? language === 'pb'
      ? ` ਇਸ ਸਾਖੀ ਵਿੱਚ "${primaryWord.word}" (${primaryWord.meaning}) ਰਾਹੀਂ ਜੀਵਨ ਦੀ ਅੰਦਰੂਨੀ ਸੱਚਾਈ ਨੂੰ ਸਪੱਸ਼ਟ ਕੀਤਾ ਗਿਆ ਹੈ।`
      : language === 'en'
      ? ` Specifically, by highlighting "${primaryWord.word}" (${primaryWord.meaning}) in '${categoryTitle}', this Sakhi turns attention toward inner clarity.`
      : ` विशेष रूप से '${categoryTitle}' की इस साखी में "${primaryWord.word}" (${primaryWord.meaning}) के माध्यम से साधक को आत्म-जागृति का बोध कराया गया है।`
    : '';
  const whyTaught = contextNote
    ? `${whyBase}\n\n${contextNote}`
    : `${whyBase}${keywordBridge}`;

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

export interface AngSpiritualProfile {
  themeKey: ThemeKey;
  angTitle: string;
  angFocus: string;
  practiceDirective: string;
  meditationAnchor: string;
  reflectionLens: string;
  blessingPhrase: string;
}

const ANG_PROFILES: Record<
  ThemeKey,
  Record<
    Language,
    Omit<AngSpiritualProfile, 'themeKey' | 'angTitle'>
  >
> = {
  shabd: {
    hi: {
      angFocus: 'शाश्वत, निह-अक्षर "सत्यनाम" सार-शब्द में सुरति को दृढ़ता से स्थिर करना और काल-भ्रम से रक्षा पाना',
      practiceDirective: 'बाहरी वाद-विवाद व कर्मकांडों से ध्यान हटाकर आज प्रत्येक श्वास में सतगुरु-प्रदत्त "सत्यनाम" शब्द का अंतरंग आश्रय ग्रहण करें।',
      meditationAnchor: 'दसवें द्वार में निरंतर गूँजते अनादि "सत्यनाम" सार-शब्द में अपनी सुरति को एकाग्र कर अडिग विश्राम करें',
      reflectionLens: 'क्या मेरी चेतना बाहरी शब्दों व तर्कों में भटक रही है, या वह शाश्वत "सत्यनाम" शब्द में दृढ़ता से टिकी है?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपकी सुरति शाश्वत "सत्यनाम" शब्द में अडिग स्थित हो और काल-भय से सदा सुरक्षित रहे।',
    },
    pb: {
      angFocus: 'ਅਵਿਨਾਸ਼ੀ "ਸਤਯਨਾਮ" ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਸੁਰਤ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਟਿਕਾਉਣਾ ਅਤੇ ਕਾਲ ਦੇ ਭੈਅ ਤੋਂ ਬਚਣਾ',
      practiceDirective: 'ਬਾਹਰੀ ਬਹਿਸਾਂ ਤੇ ਦਿਖਾਵੇ ਤੋਂ ਹਟ ਕੇ ਅੱਜ ਹਰ ਸੁਆਸ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦੇ "ਸਤਯਨਾਮ" ਸ਼ਬਦ ਦਾ ਸਹਾਰਾ ਲਓ।',
      meditationAnchor: 'ਅੰਦਰੂਨੀ ਅਨਾਦੀ "ਸਤਯਨਾਮ" ਸ਼ਬਦ-ਧੁਨ ਵਿੱਚ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਅਡੋਲ ਟਿਕਾ ਕੇ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰੋ',
      reflectionLens: 'ਕੀ ਮੇਰੀ ਸੁਰਤ ਬਾਹਰੀ ਗੱਲਾਂ ਵਿੱਚ ਭਟਕ ਰਹੀ ਹੈ, ਜਾਂ ਸਦੀਵੀ "ਸਤਯਨਾਮ" ਸ਼ਬਦ ਵਿੱਚ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡੀ ਸੁਰਤ ਅਮਰ "ਸਤਯਨਾਮ" ਸ਼ਬਦ ਵਿੱਚ ਅਡਿੱਗ ਟਿਕੇ।',
    },
    en: {
      angFocus: 'Anchoring consciousness (Surat) firmly in the eternal, uncreated "Satyanaam" Shabd beyond rituals and Kaal',
      practiceDirective: 'Step back from outer arguments and rituals today, anchoring your attention steadily in the living Satyanaam Shabd.',
      meditationAnchor: 'Gather scattered thoughts inward and rest Surat steadily in the unbroken resonance of Satyanaam Shabd',
      reflectionLens: 'Is my awareness drifting in outer mental chatter, or is it anchored in the eternal Satyanaam Shabd?',
      blessingPhrase: 'May Satguru Kabir Saheb anchor your awareness eternally in the living Satyanaam Shabd, safe beyond fear and illusion.',
    },
  },
  'sweet-speech': {
    hi: {
      angFocus: 'वाणी में शीतलता, विनम्रता और अहंकार-त्याग द्वारा भीतर बसे प्रीतम का सम्मान करना',
      practiceDirective: 'प्रतिक्रिया देने से पहले तीन श्वास रुकें और कठिन परिस्थिति में भी केवल शीतल व सम्मानजनक शब्द बोलें।',
      meditationAnchor: 'हृदय-आकाश में शीतल शब्द की अमृत-तरंगों को अनुभव करते हुए भीतर के कटु अहं को शांत करें',
      reflectionLens: 'क्या आज मेरी वाणी ने किसी के मन को शीतलता पहुँचाई या मेरे अहंकार ने कठोर शब्द निकाले?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपकी वाणी में शीतल अमृत और हृदय में निरहंकार प्रेम सदैव प्रवाहित रहे।',
    },
    pb: {
      angFocus: 'ਬੋਲੀ ਵਿੱਚ ਸ਼ੀਤਲਤਾ, ਨਿਮਰਤਾ ਅਤੇ ਹੰਕਾਰ-ਤਿਆਗ ਰਾਹੀਂ ਅੰਦਰਲੇ ਪ੍ਰੀਤਮ ਦੀ ਕਦਰ ਕਰਨੀ',
      practiceDirective: 'ਬੋਲਣ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕ ਕੇ ਸੋਚੋ ਅਤੇ ਔਖੇ ਵੇਲੇ ਵੀ ਕੇਵਲ ਸ਼ੀਤਲ ਤੇ ਨਿਮਰ ਬਚਨ ਬੋਲੋ।',
      meditationAnchor: 'ਹਿਰਦੇ ਵਿੱਚ ਸ਼ੀਤਲ ਸ਼ਬਦ ਦੀ ਠੰਢਕ ਮਹਿਸੂਸ ਕਰਦਿਆਂ ਅੰਦਰਲੇ ਹੰਕਾਰ ਨੂੰ ਸ਼ਾਂਤ ਕਰੋ',
      reflectionLens: 'ਕੀ ਅੱਜ ਮੇਰੀ ਬੋਲੀ ਨੇ ਕਿਸੇ ਨੂੰ ਸ਼ਾਂਤੀ ਦਿੱਤੀ ਜਾਂ ਮੇਰੇ ਹੰਕਾਰ ਨੇ ਕੌੜੇ ਬੋਲ ਕੱਢੇ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡੀ ਬੋਲੀ ਵਿੱਚ ਸ਼ੀਤਲਤਾ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ ਨਿਮਰਤਾ ਸਦਾ ਬਣੀ ਰਹੇ।',
    },
    en: {
      angFocus: 'Cultivating cooling, gentle speech and humility to honor the Indwelling Beloved',
      practiceDirective: 'Pause for three calm breaths before replying today so every word carries healing rather than ego.',
      meditationAnchor: 'Feel the cooling wave of Shital Shabd calming inner friction and pride within the heart sanctuary',
      reflectionLens: 'Did my words today bring cooling peace to others, or did injured pride make them sharp?',
      blessingPhrase: 'May Satguru Kabir Saheb bless your speech with cooling grace and your heart with ego-free peace.',
    },
  },
  'ego-inner': {
    hi: {
      angFocus: 'बाहरी दोषारोपण छोड़कर भीतर छिपे अहंकार ("आपा") को पहचानना और निर्मल निरहंकारिता धारण करना',
      practiceDirective: 'आज दूसरों की त्रुटि गिनने की बजाय अपने क्रोध, श्रेष्ठता-बोध या तुलना के भाव को साक्षी बनकर शांत करें।',
      meditationAnchor: '"मैं-पन" और कर्तापन को श्वास के साथ विसर्जित कर हृदय में एक ही साहेब की उपस्थिति निहारें',
      reflectionLens: 'आज किस प्रसंग में मेरा "मैं" आहत हुआ और मैंने बाहर दोष मढ़कर अपने अहंकार को बचाया?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपके भीतर का "मैं-पन" गलकर विनम्रता और समदृष्टि में रूपांतरित हो।',
    },
    pb: {
      angFocus: 'ਬਾਹਰਲੇ ਦੋਸ਼ ਕੱਢਣ ਦੀ ਬਜਾਏ ਅੰਦਰਲੇ ਹੰਕਾਰ ("ਆਪਾ") ਨੂੰ ਪਛਾਣ ਕੇ ਨਿਮਰਤਾ ਧਾਰਨ ਕਰਨੀ',
      practiceDirective: 'ਅੱਜ ਦੂਜਿਆਂ ਦੀਆਂ ਕਮੀਆਂ ਗਿਣਨ ਦੀ ਥਾਂ ਆਪਣੇ ਹੰਕਾਰ ਅਤੇ ਗੁੱਸੇ ਨੂੰ ਸਾਖੀ-ਭਾਵ ਨਾਲ ਸ਼ਾਂਤ ਕਰੋ।',
      meditationAnchor: '"ਮੈਂ-ਪੁਣੇ" ਨੂੰ ਸੁਆਸਾਂ ਨਾਲ ਤਿਆਗ ਕੇ ਅੰਦਰ ਵਸਦੇ ਇੱਕੋ ਸਾਹੇਬ ਦੀ ਹਜ਼ੂਰੀ ਮਹਿਸੂਸ ਕਰੋ',
      reflectionLens: 'ਅੱਜ ਕਿਸ ਗੱਲ ਤੇ ਮੇਰਾ ਹੰਕਾਰ ਜਾਗਿਆ ਅਤੇ ਮੈਂ ਬਾਹਰ ਦੋਸ਼ ਲੱਭਣ ਲੱਗ ਪਿਆ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚੋਂ ਹੰਕਾਰ ਮਿਟੇ ਤੇ ਸੱਚੀ ਨਿਮਰਤਾ ਵਸੇ।',
    },
    en: {
      angFocus: 'Uncovering and dissolving inner ego rather than blaming external people or circumstances',
      practiceDirective: 'Whenever irritation arises today, turn the spotlight inward to notice pride instead of judging others.',
      meditationAnchor: 'Let go of self-importance with every exhalation until only silent humility remains inside',
      reflectionLens: 'Where did wounded pride make me defensive or quick to judge someone else today?',
      blessingPhrase: 'May Satguru Kabir Saheb melt away every trace of pride, awakening radiant humility within you.',
    },
  },
  guru: {
    hi: {
      angFocus: 'पूर्ण सतगुरु के शब्द-ज्ञान और विवेक-दृष्टि के प्रति अटल श्रद्धा व समर्पण',
      practiceDirective: 'किसी भी निर्णय से पहले अपनी मनमानी की बजाय सतगुरु की शिक्षा और सत्य-विवेक को प्राथमिकता दें।',
      meditationAnchor: 'हृदय-कमल में सतगुरु के शब्द-प्रकाश का ध्यान करते हुए पूर्ण शरणागति में स्थित हों',
      reflectionLens: 'क्या मैं अपने मन की चंचल इच्छाओं का अनुसरण कर रहा हूँ या सतगुरु के सत्य उपदेश की आज्ञा में चल रहा हूँ?',
      blessingPhrase: 'सतगुरु कबीर साहेब की पावन चरण-कृपा सदैव आपके मार्ग को सत्य-विवेक से आलोकित करती रहे।',
    },
    pb: {
      angFocus: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ-ਗਿਆਨ ਅਤੇ ਵਿਵੇਕ ਪ੍ਰਤੀ ਅਟੱਲ ਸ਼ਰਧਾ ਤੇ ਸਮਰਪਣ',
      practiceDirective: 'ਅੱਜ ਕਿਸੇ ਵੀ ਫ਼ੈਸਲੇ ਸਮੇਂ ਮਨਮੁਖੀ ਜ਼ਿੱਦ ਛੱਡ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਉਪਦੇਸ਼ ਨੂੰ ਅੱਗੇ ਰੱਖੋ।',
      meditationAnchor: 'ਹਿਰਦੇ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦੀ ਗਿਆਨ-ਜੋਤ ਦਾ ਧਿਆਨ ਧਰ ਕੇ ਨਿਮਰ ਸ਼ਰਧਾ ਵਿੱਚ ਟਿਕੋ',
      reflectionLens: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਦੀਆਂ ਇੱਛਾਵਾਂ ਪਿੱਛੇ ਚੱਲ ਰਿਹਾ ਹਾਂ ਜਾਂ ਸਤਿਗੁਰੂ ਦੇ ਹੁਕਮ ਦੀ ਪਾਲਣਾ ਕਰ ਰਿਹਾ ਹਾਂ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਪਾਰ ਮਿਹਰ ਤੁਹਾਡੇ ਜੀਵਨ ਨੂੰ ਸਦਾ ਸਹੀ ਮਾਰਗ ਤੇ ਚਲਾਏ।',
    },
    en: {
      angFocus: 'Wholehearted trust and surrender to the living wisdom-guidance of the true Satguru',
      practiceDirective: 'Before acting today, choose the Satguru’s timeless principle over impulsive personal preference.',
      meditationAnchor: 'Rest your awareness in grateful receptivity to the Satguru’s inner light dispelling doubt',
      reflectionLens: 'Am I following restless personal whims, or walking faithfully in the light of the Satguru’s teaching?',
      blessingPhrase: 'May the illuminating grace of Satguru Kabir Saheb guide every step of your inner journey.',
    },
  },
  naam: {
    hi: {
      angFocus: 'श्वास-प्रश्वास के साथ अविरत "सत्यनाम" स्मरण (अजपा सुमिरन) की जीवंत साधना',
      practiceDirective: 'दैनिक कार्यों के मध्य हर एक घंटे पर १ मिनट रुककर तीन बार मौन रूप से श्वास में "सत्यनाम" का सिमरन करें।',
      meditationAnchor: 'आती-जाती श्वास की लय में बिना होंठ हिलाए सहज "सत्यनाम" सुमिरन की डोर थामे रहें',
      reflectionLens: 'आज मेरे दिन का कितना समय व्यर्थ चिंताओं में गया और कितनी घड़ियाँ "सत्यनाम" स्मरण से पावन हुईं?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका प्रत्येक श्वास "सत्यनाम" के अमृतमय सुमिरन से सार्थक हो।',
    },
    pb: {
      angFocus: 'ਸੁਆਸ-ਸੁਆਸ ਨਿਰੰਤਰ "ਸਤਯਨਾਮ" ਸਿਮਰਨ (ਅਜਪਾ ਜਾਪ) ਦੀ ਸਜੀਵ ਸਾਧਨਾ',
      practiceDirective: 'ਰੋਜ਼ਾਨਾ ਕੰਮਾਂ ਦੇ ਵਿਚਕਾਰ ਰੁਕ ਕੇ ਕੁਝ ਪਲ ਸੁਆਸਾਂ ਨਾਲ ਮਾਨਸਿਕ "ਸਤਯਨਾਮ" ਸਿਮਰਨ ਜ਼ਰੂਰ ਕਰੋ।',
      meditationAnchor: 'ਆਉਂਦੇ-ਜਾਂਦੇ ਸੁਆਸਾਂ ਦੀ ਲੈਅ ਵਿੱਚ ਸਹਿਜ "ਸਤਯਨਾਮ" ਸਿਮਰਨ ਨਾਲ ਸੁਰਤ ਨੂੰ ਜੋੜੀ ਰੱਖੋ',
      reflectionLens: 'ਅੱਜ ਮੇਰੇ ਦਿਨ ਦਾ ਕਿੰਨਾ ਸਮਾਂ ਵਿਅਰਥ ਚਿੰਤਾਵਾਂ ਵਿੱਚ ਗਿਆ ਅਤੇ ਕਿੰਨਾ ਸਮਾਂ "ਸਤਯਨਾਮ" ਸਿਮਰਨ ਵਿੱਚ ਸਫਲ ਹੋਇਆ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਬਖਸ਼ਿਸ਼ ਨਾਲ ਤੁਹਾਡਾ ਹਰ ਸੁਆਸ "ਸਤਯਨਾਮ" ਸਿਮਰਨ ਨਾਲ ਸਫਲ ਹੋਵੇ।',
    },
    en: {
      angFocus: 'Unbroken breath-synchronized inner remembrance (Ajapa Simran) of Satyanaam',
      practiceDirective: 'Pause briefly between daily tasks to anchor three calm breaths in silent Satyanaam remembrance.',
      meditationAnchor: 'Ride each natural inhalation and exhalation with silent, loving awareness of Satyanaam',
      reflectionLens: 'How much of my attention today stayed anchored in Satyanaam versus scattered worry?',
      blessingPhrase: 'May every breath you take be sanctified with the peaceful remembrance of Satyanaam.',
    },
  },
  maya: {
    hi: {
      angFocus: 'माया, तृष्णा और नश्वर मोह के आकर्षण से ऊपर उठकर संतोष और विवेक में स्थित होना',
      practiceDirective: 'आज अनावश्यक तुलना, दिखावे या लोभ की एक इच्छा को पहचानकर संतोषपूर्वक त्याग दें।',
      meditationAnchor: 'बाह्य वस्तुओं से मन को समेटकर भीतर स्थित असीम संतोष और आत्म-ऐश्वर्य का अनुभव करें',
      reflectionLens: 'कौन-सी तृष्णा या दिखावे की चाह मुझे आज भीतर की शांति से दूर खींच रही है?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आप माया की चकाचौंध से अलिप्त रहकर संतोष-धन से समृद्ध रहें।',
    },
    pb: {
      angFocus: 'ਮਾਇਆ, ਤ੍ਰਿਸ਼ਨਾ ਅਤੇ ਨਾਸ਼ਵਾਨ ਮੋਹ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸੰਤੋਖ ਤੇ ਵਿਵੇਕ ਵਿੱਚ ਟਿਕਣਾ',
      practiceDirective: 'ਅੱਜ ਬੇਲੋੜੇ ਦਿਖਾਵੇ ਜਾਂ ਲਾਲਚ ਦੀ ਕਿਸੇ ਇੱਕ ਇੱਛਾ ਨੂੰ ਪਛਾਣ ਕੇ ਸੰਤੋਖ ਨਾਲ ਛੱਡ ਦਿਓ।',
      meditationAnchor: 'ਬਾਹਰਲੀਆਂ ਚੀਜ਼ਾਂ ਤੋਂ ਮਨ ਸਮੇਟ ਕੇ ਅੰਦਰਲੇ ਸੰਤੋਖ ਤੇ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰੋ',
      reflectionLens: 'ਕਿਹੜੀ ਤ੍ਰਿਸ਼ਨਾ ਜਾਂ ਦਿਖਾਵੇ ਦੀ ਚਾਹ ਮੈਨੂੰ ਅੱਜ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਤੋਂ ਦੂਰ ਖਿੱਚ ਰਹੀ ਹੈ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਸੀਂ ਮਾਇਆ ਦੇ ਪ੍ਰਭਾਵ ਤੋਂ ਨਿਰਲੇਪ ਤੇ ਸੰਤੋਖੀ ਰਹੋ।',
    },
    en: {
      angFocus: 'Rising above Maya, restless craving, and worldly attachment into quiet contentment',
      practiceDirective: 'Notice one unnecessary craving, comparison, or status urge today and release it with gratitude.',
      meditationAnchor: 'Withdraw attention from fleeting possessions and rest in the inexhaustible fullness within',
      reflectionLens: 'Which subtle craving or desire for validation is pulling me away from inner peace right now?',
      blessingPhrase: 'May Satguru Kabir Saheb bless your heart with fearless detachment and luminous contentment.',
    },
  },
  chetavani: {
    hi: {
      angFocus: 'जीवन और श्वासों की नश्वरता को समझकर आलस्य व टालमटोल त्यागना और आज ही जागृत होना',
      practiceDirective: '"कल करेंगे" का भ्रम छोड़कर आज ही क्षमा, सेवा और सत्यनाम साधना का आवश्यक कदम उठाएं।',
      meditationAnchor: 'प्रत्येक श्वास को अनमोल धरोहर मानकर वर्तमान क्षण में पूर्ण सजगता से स्थिर हों',
      reflectionLens: 'यदि समय अत्यंत सीमित है, तो मैं आज किस व्यर्थ विवाद को छोड़कर सबसे आवश्यक आध्यात्मिक कार्य करूँ?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका प्रत्येक क्षण जागृत हो और जीवन काल-जाल से पार उतरे।',
    },
    pb: {
      angFocus: 'ਜੀਵਨ ਤੇ ਸੁਆਸਾਂ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਸਮਝ ਕੇ ਆਲਸ ਤਿਆਗਣਾ ਅਤੇ ਅੱਜ ਹੀ ਸੱਚੇ ਮਾਰਗ ਤੇ ਲੱਗਣਾ',
      practiceDirective: '"ਕੱਲ੍ਹ ਕਰਾਂਗੇ" ਦਾ ਭਰਮ ਛੱਡ ਕੇ ਅੱਜ ਹੀ ਨਿਮਰਤਾ, ਸੇਵਾ ਅਤੇ ਸਤਯਨਾਮ ਸਾਧਨਾ ਦਾ ਕਦਮ ਚੁੱਕੋ।',
      meditationAnchor: 'ਹਰ ਸੁਆਸ ਨੂੰ ਅਮੋਲਕ ਦਾਤ ਸਮਝ ਕੇ ਇਸੇ ਪਲ ਅੰਦਰੂਨੀ ਜਾਗ੍ਰਿਤੀ ਵਿੱਚ ਟਿਕੋ',
      reflectionLens: 'ਜਦੋਂ ਸਮਾਂ ਸੀਮਿਤ ਹੈ, ਤਾਂ ਮੈਂ ਅੱਜ ਕਿਹੜੇ ਵਿਅਰਥ ਝਗੜੇ ਛੱਡ ਕੇ ਸੱਚੇ ਕਰਮ ਵਿੱਚ ਜੁੱਟਾਂ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡਾ ਹਰ ਪਲ ਜਾਗ੍ਰਿਤ ਤੇ ਸਫਲ ਰਹੇ।',
    },
    en: {
      angFocus: 'Heeding the brevity of mortal time to drop procrastination and awaken today',
      practiceDirective: 'Do not postpone goodness to tomorrow—practice forgiveness, kindness, and Simran today.',
      meditationAnchor: 'Honor this very breath as sacred and abide fully awake in the living present',
      reflectionLens: 'Knowing how fleeting every breath is, what petty distraction must I release right now?',
      blessingPhrase: 'May Satguru Kabir Saheb awaken your present moment with urgency, clarity, and fearlessness.',
    },
  },
  'satya-hypocrisy': {
    hi: {
      angFocus: 'बाहरी आडंबर और दिखावे से हटकर कथनी-करनी की एकता और हृदय के सत्य ("साँच") को जीना',
      practiceDirective: 'आज जो आदर्श आप बोलते हैं, बिना किसी प्रदर्शन या प्रशंसा की अपेक्षा के ठीक वैसा ही आचरण करें।',
      meditationAnchor: 'कपट और द्वैत विचारों को त्यागकर साक्षी परमात्मा के समक्ष पारदर्शी हृदय से टिकें',
      reflectionLens: 'मेरी कथनी और मेरी वास्तविक करनी के बीच आज कहाँ अंतर दिखाई दे रहा है?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपकी कथनी-करनी एक हो और हृदय में अखंड सत्य का वास हो।',
    },
    pb: {
      angFocus: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਨੂੰ ਛੱਡ ਕੇ ਕਹਿਣੀ ਤੇ ਕਰਨੀ ਦੀ ਏਕਤਾ ਅਤੇ ਦਿਲ ਦੀ ਸੱਚਾਈ ਨੂੰ ਜੀਊਣਾ',
      practiceDirective: 'ਅੱਜ ਜੋ ਸੱਚ ਤੁਸੀਂ ਬੋਲਦੇ ਹੋ, ਬਿਨਾਂ ਕਿਸੇ ਦਿਖਾਵੇ ਦੇ ਉਸੇ ਨੂੰ ਆਪਣੇ ਵਿਹਾਰ ਵਿੱਚ ਲਾਗੂ ਕਰੋ।',
      meditationAnchor: 'ਕਪਟ ਤੇ ਦੋਹਰੇਪਣ ਨੂੰ ਛੱਡ ਕੇ ਸਾਖੀ ਪ੍ਰਭੂ ਅੱਗੇ ਨਿਰਮਲ ਤੇ ਸੱਚੇ ਹਿਰਦੇ ਨਾਲ ਟਿਕੋ',
      reflectionLens: 'ਮੇਰੀ ਕਹਿਣੀ ਅਤੇ ਮੇਰੀ ਅਸਲ ਕਰਨੀ ਵਿਚਕਾਰ ਅੱਜ ਕਿੱਥੇ ਫ਼ਰਕ ਦਿਸ ਰਿਹਾ ਹੈ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡੀ ਕਹਿਣੀ ਤੇ ਕਰਨੀ ਵਿੱਚ ਸਦਾ ਸੱਚ ਦੀ ਏਕਤਾ ਰਹੇ।',
    },
    en: {
      angFocus: 'Replacing outward religious show with inner integrity and alignment of word and deed',
      practiceDirective: 'Let your quiet private actions today match the highest truth you speak aloud.',
      meditationAnchor: 'Drop every mask and rest before the Indwelling Witness in transparent honesty',
      reflectionLens: 'Where is there a gap today between what I profess spiritually and how I actually act?',
      blessingPhrase: 'May Satguru Kabir Saheb bless you with undivided honesty where speech and action shine as one.',
    },
  },
  satsang: {
    hi: {
      angFocus: 'सत्संग और साधु-विवेक द्वारा कुसंग से बचना तथा सार ग्रहण कर थोथा त्यागना',
      practiceDirective: 'आज निंदा, गपशप और नकारात्मक चर्चा से स्वयं को बचाकर सद्ग्रंथ स्वाध्याय व सज्जन-संग को चुनें।',
      meditationAnchor: 'हृदय में शांत संत-संगति और सत्य-विवेक की सुगंध को अनुभव करते हुए ध्यानस्थ हों',
      reflectionLens: 'आज मैंने किस संगति, संवाद या विचार को पोषित किया—सार-ग्राही सत्संग को या निंदा-कुसंग को?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका जीवन सज्जनों के सत्संग और हंस-विवेक से सदा महकता रहे।',
    },
    pb: {
      angFocus: 'ਸਤਿਸੰਗ ਤੇ ਸਾਧੂ-ਵਿਵੇਕ ਰਾਹੀਂ ਕੁਸੰਗਤ ਤੋਂ ਬਚਣਾ ਅਤੇ ਸਾਰ ਗ੍ਰਹਿਣ ਕਰਕੇ ਨਿੰਦਾ ਤਿਆਗਣੀ',
      practiceDirective: 'ਅੱਜ ਨਿੰਦਾ ਤੇ ਵਿਅਰਥ ਗੱਲਾਂ ਤੋਂ ਦੂਰ ਰਹਿ ਕੇ ਗੁਰਬਾਣੀ ਸਵਾਧਿਆਇ ਤੇ ਨੇਕ ਸੰਗਤ ਦੀ ਚੋਣ ਕਰੋ।',
      meditationAnchor: 'ਹਿਰਦੇ ਵਿੱਚ ਸ਼ਾਂਤ ਸਤਿਸੰਗ ਤੇ ਵਿਵੇਕ ਦੀ ਸੁਗੰਧ ਮਹਿਸੂਸ ਕਰਦਿਆਂ ਧਿਆਨ ਵਿੱਚ ਟਿਕੋ',
      reflectionLens: 'ਅੱਜ ਮੈਂ ਕਿਸ ਸੰਗਤ ਜਾਂ ਵਿਚਾਰ ਨੂੰ ਥਾਂ ਦਿੱਤੀ—ਸੱਚੇ ਸਤਿਸੰਗ ਨੂੰ ਜਾਂ ਨਿੰਦਾ-ਕੁਸੰਗਤ ਨੂੰ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡਾ ਜੀਵਨ ਸਦਾ ਸਤਿਸੰਗ ਤੇ ਹੰਸ-ਵਿਵੇਕ ਨਾਲ ਭਰਪੂਰ ਰਹੇ।',
    },
    en: {
      angFocus: 'Choosing uplifting Satsang and saintly discernment while avoiding gossip and negative company',
      practiceDirective: 'Step away from gossip and cynicism today; nourish your mind with sacred study and calm company.',
      meditationAnchor: 'Rest inwardly in the serene fragrance of Satsang where only Truth is welcomed',
      reflectionLens: 'What mental company did I keep today—truthful discernment or petty criticism?',
      blessingPhrase: 'May Satguru Kabir Saheb surround your heart with pure Satsang and swan-like discernment.',
    },
  },
  'prem-bhakti': {
    hi: {
      angFocus: 'शुष्क तर्क के बजाय निश्छल प्रेम, भक्ति और विनम्र समर्पण द्वारा प्रभु-मिलन का पथ अपनाना',
      practiceDirective: 'आज किसी व्यक्ति या कार्य से व्यवहार करते समय कठोर अधिकार के बजाय निस्वार्थ स्नेह और करुणा रखें।',
      meditationAnchor: 'हृदय-मंदिर में परमात्मा के प्रति असीम, शांत प्रेम व कृतज्ञता की लौ प्रज्वलित करें',
      reflectionLens: 'मेरी साधना केवल बौद्धिक जानकारी तक सीमित है या उसमें हृदय का निश्छल प्रेम भी जुड़ा है?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपके हृदय में निष्काम प्रेमा-भक्ति का अमृत झरता रहे।',
    },
    pb: {
      angFocus: 'ਸੁੱਕੇ ਤਰਕ ਦੀ ਥਾਂ ਨਿਰਛਲ ਪ੍ਰੇਮ, ਭਗਤੀ ਅਤੇ ਨਿਮਰ ਸਮਰਪਣ ਰਾਹੀਂ ਪ੍ਰਭੂ-ਮਿਲਾਪ ਦਾ ਰਾਹ ਅਪਣਾਉਣਾ',
      practiceDirective: 'ਅੱਜ ਹਰ ਰਿਸ਼ਤੇ ਤੇ ਕੰਮ ਵਿੱਚ ਹੰਕਾਰੀ ਹੱਕ ਦੀ ਬਜਾਏ ਨਿਸ਼ਕਾਮ ਪਿਆਰ ਤੇ ਸਤਿਕਾਰ ਰੱਖੋ।',
      meditationAnchor: 'ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਪ੍ਰਤੀ ਨਿਰਛਲ ਪ੍ਰੇਮ ਤੇ ਸ਼ੁਕਰਾਨੇ ਦੀ ਜੋਤ ਜਗਾ ਕੇ ਟਿਕੋ',
      reflectionLens: 'ਮੇਰੀ ਸਾਧਨਾ ਕੇਵਲ ਦਿਮਾਗੀ ਜਾਣਕਾਰੀ ਤੱਕ ਹੈ ਜਾਂ ਉਸ ਵਿੱਚ ਦਿਲ ਦਾ ਸੱਚਾ ਪ੍ਰੇਮ ਵੀ ਹੈ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚ ਨਿਰਛਲ ਪ੍ਰੇਮਾ-ਭਗਤੀ ਸਦਾ ਵਸੇ।',
    },
    en: {
      angFocus: 'Transcending dry intellect through wholehearted divine love and humble devotion',
      practiceDirective: 'Meet someone today not with insistence on control, but with quiet warmth and selfless goodwill.',
      meditationAnchor: 'Kindle silent gratitude and pure loving devotion inside the quiet center of your heart',
      reflectionLens: 'Has my spiritual path stayed purely intellectual, or is it alive with sincere humility and love?',
      blessingPhrase: 'May Satguru Kabir Saheb fill your heart with selfless devotion and the nectar of divine love.',
    },
  },
  compassion: {
    hi: {
      angFocus: 'समस्त प्राणियों में एक ही साहेब का अंश देखकर दया, अहिंसा, क्षमा और परोपकार का जीवन जीना',
      practiceDirective: 'आज बिना किसी स्वार्थ या प्रशंसा की चाह के किसी प्राणी या व्यक्ति की पीड़ा कम करने का कार्य करें।',
      meditationAnchor: 'हर जीव के भीतर चमकती एक ही परमात्म-ज्योति को नमन करते हुए करुणामय शांति में ठहरें',
      reflectionLens: 'आज मेरा व्यवहार किसी कमज़ोर प्राणी या व्यक्ति के प्रति कठोर तो नहीं रहा?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका हृदय दया, क्षमा और निस्वार्थ परोपकार का पावन धाम बने।',
    },
    pb: {
      angFocus: 'ਸਭ ਜੀਵਾਂ ਵਿੱਚ ਇੱਕੋ ਸਾਹੇਬ ਦੀ ਜੋਤ ਵੇਖ ਕੇ ਦਇਆ, ਅਹਿੰਸਾ, ਖਿਮਾ ਤੇ ਪਰਉਪਕਾਰ ਵਾਲਾ ਜੀਵਨ ਜੀਊਣਾ',
      practiceDirective: 'ਅੱਜ ਬਿਨਾਂ ਕਿਸੇ ਸਵਾਰਥ ਦੇ ਕਿਸੇ ਜੀਵ ਜਾਂ ਲੋੜਵੰਦ ਦਾ ਦੁੱਖ ਘਟਾਉਣ ਵਾਲਾ ਨੇਕ ਕੰਮ ਕਰੋ।',
      meditationAnchor: 'ਹਰ ਜੀਵ ਅੰਦਰ ਵਸਦੀ ਇੱਕੋ ਪ੍ਰਭੂ-ਜੋਤ ਨੂੰ ਸਿਜਦਾ ਕਰਦਿਆਂ ਕਰੁਣਾ ਤੇ ਸ਼ਾਂਤੀ ਵਿੱਚ ਟਿਕੋ',
      reflectionLens: 'ਅੱਜ ਮੇਰਾ ਵਿਹਾਰ ਕਿਸੇ ਕਮਜ਼ੋਰ ਜਾਂ ਬੇਜ਼ੁਬਾਨ ਜੀਵ ਪ੍ਰਤੀ ਕਠੋਰ ਤਾਂ ਨਹੀਂ ਰਿਹਾ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡਾ ਹਿਰਦਾ ਦਇਆ, ਖਿਮਾ ਅਤੇ ਪਰਉਪਕਾਰ ਨਾਲ ਸਦਾ ਖਿੜਿਆ ਰਹੇ।',
    },
    en: {
      angFocus: 'Seeing the One Light in all beings through active mercy, non-violence, and forgiveness',
      practiceDirective: 'Perform one quiet act of compassion or forgiveness today without expecting recognition.',
      meditationAnchor: 'Radiate gentle goodwill to every living being, recognizing the One Saheb dwelling in all',
      reflectionLens: 'Was there any moment today where impatience made me indifferent to another being’s feelings?',
      blessingPhrase: 'May Satguru Kabir Saheb make your life a sanctuary of compassion, forgiveness, and selfless service.',
    },
  },
  'yoga-ghat': {
    hi: {
      angFocus: 'बाहरी तीर्थों में भटकने की बजाय अपने ही घट-मंदिर में अनहद नाद और आत्म-प्रकाश का साक्षात्कार करना',
      practiceDirective: 'आज कुछ मिनट नेत्र मूँदकर बाहर की खोज रोकें और अपने भीतर स्थित शांति के स्रोत में ठहरें।',
      meditationAnchor: 'त्रिकुटी व दसम द्वार की ओर सुरति को केंद्रित कर घट के भीतर अनहद मौन का अनुभव करें',
      reflectionLens: 'क्या मैं शांति और ईश्वर को अब भी बाहरी वस्तुओं या स्थानों में ढूँढ रहा हूँ, जबकि वे मेरे भीतर हैं?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका घट-मंदिर अनहद प्रकाश और अंतरंग आनंद से आलोकित हो।',
    },
    pb: {
      angFocus: 'ਬਾਹਰਲੇ ਤੀਰਥਾਂ ਵਿੱਚ ਭਟਕਣ ਦੀ ਥਾਂ ਆਪਣੇ ਹੀ ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਅਨਹਦ ਨਾਦ ਤੇ ਆਤਮ-ਪ੍ਰਕਾਸ਼ ਦੀ ਪਛਾਣ ਕਰਨੀ',
      practiceDirective: 'ਅੱਜ ਕੁਝ ਪਲ ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਬਾਹਰਲੀ ਦੌੜ ਰੋਕੋ ਅਤੇ ਆਪਣੇ ਅੰਦਰਲੀ ਸ਼ਾਂਤੀ ਵਿੱਚ ਟਿਕੋ।',
      meditationAnchor: 'ਤ੍ਰਿਕੁਟੀ ਤੇ ਦਸਵੇਂ ਦੁਆਰ ਵੱਲ ਸੁਰਤ ਟਿਕਾ ਕੇ ਅੰਦਰੂਨੀ ਅਨਹਦ ਮੌਨ ਦਾ ਅਨੁਭਵ ਕਰੋ',
      reflectionLens: 'ਕੀ ਮੈਂ ਸ਼ਾਂਤੀ ਨੂੰ ਹਾਲੇ ਵੀ ਬਾਹਰ ਲੱਭ ਰਿਹਾ ਹਾਂ, ਜਦਕਿ ਅਸਲ ਖ਼ਜ਼ਾਨਾ ਮੇਰੇ ਆਪਣੇ ਘਟ ਵਿੱਚ ਹੈ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡਾ ਘਟ-ਮੰਦਿਰ ਅਨਹਦ ਪ੍ਰਕਾਸ਼ ਨਾਲ ਸਦਾ ਰੌਸ਼ਨ ਰਹੇ।',
    },
    en: {
      angFocus: 'Turning away from external searching to discover the inner light and Anhad resonance within the Ghat',
      practiceDirective: 'Take a few quiet minutes today to close outer eyes and seek contentment strictly within.',
      meditationAnchor: 'Focus awareness gently at the eye center (Trikuti) and listen to the silent inner stillness',
      reflectionLens: 'Where am I still chasing fulfillment outside myself when the true treasure already lives within?',
      blessingPhrase: 'May Satguru Kabir Saheb illuminate your inner temple with unstruck stillness and self-realization.',
    },
  },
  'mind-control': {
    hi: {
      angFocus: 'चंचल मन और कर्मों की प्रवृत्तियों को साक्षी भाव व विवेक से अनुशासित करना',
      practiceDirective: 'आज क्रोध, आवेग या व्यर्थ चिंता उठते ही तुरंत प्रतिक्रिया न देकर मन के दृष्टा (साक्षी) बनें।',
      meditationAnchor: 'मन के उठते-गिरते विचारों को शांत साक्षी भाव से देखते हुए सहज संतुलन में स्थिर हों',
      reflectionLens: 'आज मेरा मन मेरी चेतना का सेवक रहा, या उसने क्रोध-भय बनकर मुझ पर शासन किया?',
      blessingPhrase: 'सतगुरु कबीर साहेब की कृपा से आपका चंचल मन शांत होकर विवेकपूर्ण साक्षी भाव में स्थित हो।',
    },
    pb: {
      angFocus: 'ਚੰਚਲ ਮਨ ਦੀਆਂ ਬਿਰਤੀਆਂ ਨੂੰ ਸਾਖੀ-ਭਾਵ ਤੇ ਵਿਵੇਕ ਨਾਲ ਕਾਬੂ ਵਿੱਚ ਰੱਖਣਾ',
      practiceDirective: 'ਅੱਜ ਗੁੱਸਾ ਜਾਂ ਚਿੰਤਾ ਉੱਠਦੇ ਹੀ ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਦੇਣ ਦੀ ਬਜਾਏ ਮਨ ਦੇ ਸਾਖੀ ਬਣ ਕੇ ਰੁਕੋ।',
      meditationAnchor: 'ਮਨ ਦੇ ਵਿਚਾਰਾਂ ਨੂੰ ਸ਼ਾਂਤ ਸਾਖੀ-ਭਾਵ ਨਾਲ ਵੇਖਦੇ ਹੋਏ ਸਹਿਜ ਸੰਤੁਲਨ ਵਿੱਚ ਟਿਕੋ',
      reflectionLens: 'ਅੱਜ ਮੇਰਾ ਮਨ ਮੇਰਾ ਸੇਵਕ ਰਿਹਾ, ਜਾਂ ਉਸਨੇ ਗੁੱਸੇ ਤੇ ਭਟਕਣਾ ਰਾਹੀਂ ਮੇਰੇ ਤੇ ਰਾਜ ਕੀਤਾ?',
      blessingPhrase: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਨਾਲ ਤੁਹਾਡਾ ਮਨ ਸ਼ਾਂਤ ਤੇ ਵਿਵੇਕਸ਼ੀਲ ਬਣਿਆ ਰਹੇ।',
    },
    en: {
      angFocus: 'Disciplining the restless mind and habitual reactions through calm witness-awareness',
      practiceDirective: 'Notice emotional impulses before acting today, choosing witness-clarity over automatic reaction.',
      meditationAnchor: 'Watch passing thoughts like clouds across a quiet sky, remaining centered as the calm Witness',
      reflectionLens: 'Did I guide my mind wisely today, or did restless reactions carry me away?',
      blessingPhrase: 'May Satguru Kabir Saheb steady your mind in calm witness-awareness and inner mastery.',
    },
  },
};

export function getAngSpiritualProfile(sakhi: Sakhi, language: Language): AngSpiritualProfile {
  const { primaryTheme } = detectThemeAndSymbols(sakhi);
  const langKey: Language = language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi';
  const angTitle = sakhi.categoryTitle?.[langKey] || sakhi.categoryTitle?.hi || '';
  const profile = ANG_PROFILES[primaryTheme]?.[langKey] || ANG_PROFILES['mind-control'][langKey];

  return {
    themeKey: primaryTheme,
    angTitle,
    ...profile,
  };
}
