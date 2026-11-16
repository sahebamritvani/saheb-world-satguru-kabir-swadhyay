import { MasterGranth } from './granthTypes';

const BIJAK_SECTIONS = [
  { title: 'बीजक महिमा', count: 1, type: 'mangal' },
  { title: 'रमैनी', count: 84, type: 'ramaini' },
  { title: 'सबद', count: 144, type: 'shabad' },
  { title: 'ज्ञान चौंतीसा', count: 7, type: 'pada' },
  { title: 'विप्रमतिसी', count: 3, type: 'pada' },
  { title: 'कहरा', count: 12, type: 'pada' },
  { title: 'बसन्त', count: 12, type: 'pada' },
  { title: 'चांचर', count: 2, type: 'pada' },
  { title: 'बेलि', count: 2, type: 'pada' },
  { title: 'बिरहुली', count: 1, type: 'pada' },
  { title: 'हिण्डौला', count: 3, type: 'pada' },
  { title: 'साखी', count: 353, type: 'sakhi' }
];

export const BIJAK_GRANTH: MasterGranth = {
  "id": "bijak-granth",
  "slug": "bijak",
  "title": {
    "hi": "बीजक ग्रंथ (मूल बानी)",
    "pb": "ਬੀਜਕ ਗ੍ਰੰਥ (ਮੂਲ ਬਾਣੀ)",
    "en": "Bijak Granth (Fundamental Verses)"
  },
  "shortTitle": {
    "hi": "बीजक",
    "pb": "ਬੀਜਕ",
    "en": "Bijak"
  },
  "subtitle": {
    "hi": "सतगुरु कबीर साहेब की प्रामाणिक एवं मूल विचारधारा का ग्रंथ",
    "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ",
    "en": "The Authoritative Compilation of Satguru Kabir's Core Philosophy"
  },
  "category": "mool-granth",
  "iconName": "Book",
  "bannerColor": "from-orange-700 to-red-800",
  "accentColor": "text-orange-700",
  "totalChapters": 12,
  "estimatedHours": {
    "hi": "३० घण्टे स्वाध्याय",
    "pb": "੩੦ ਘੰਟੇ ਅਧਿਐਨ",
    "en": "30 Hours Study"
  },
  "description": {
    "hi": "बीजक कबीर साहेब की सबसे प्रामाणिक रचना मानी जाती है। इसमें रमैनी, सबद और साखी के माध्यम से पाखण्ड खंडन, आत्मज्ञान और सत्य मार्ग का निरूपण है। इसमें कुल ६२४ पृष्ठों का सारगर्भित ज्ञान समाहित है।",
    "pb": "ਬੀਜਕ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਸਭ ਤੋਂ ਪ੍ਰਮਾਣਿਕ ਰਚਨਾ ਹੈ।",
    "en": "Bijak is widely regarded as the most authoritative record of Kabir's teachings, containing Ramaini, Shabad, and Sakhi aimed at dispelling illusions and revealing the Absolute Truth."
  },
  "chapters": BIJAK_SECTIONS.map((sec, idx) => ({
    "id": `bijak-sec-${idx + 1}`,
    "chapterNumber": idx + 1,
    "title": {
      "hi": `${idx + 1}. ${sec.title}`,
      "pb": `${idx + 1}. ${sec.title}`,
      "en": `${idx + 1}. ${sec.title}`
    },
    "subtitle": {
      "hi": `${sec.count} पृष्ठों/पदों का संग्रह`,
      "pb": `${sec.count} ਪੰਨਿਆਂ ਦਾ ਸੰਗ੍ਰਹਿ`,
      "en": `Collection across ${sec.count} pages/verses`
    },
    "description": {
      "hi": `बीजक का यह भाग '${sec.title}' विषय पर आधारित है। इसमें कुल ${sec.count} पृष्ठ/पद हैं।`,
      "pb": `ਬੀਜਕ ਦਾ ਇਹ ਭਾਗ '${sec.title}' ਬਾਰੇ ਦੱਸਦਾ ਹੈ।`,
      "en": `This section of Bijak focuses on '${sec.title}' and contains ${sec.count} pages/verses.`
    },
    "verses": sec.title === 'साखी' ? [
      {
        "id": "bijak-sakhi-1",
        "type": "sakhi",
        "lines": {
          "hi": ["साखी आँखि ज्ञान की, समुझि देखु मन माहिं।", "बिन साखी संसार का, झगड़ा छूटत नाहिं॥"],
          "pb": ["ਸਾਖੀ ਆਂਖਿ ਗਿਆਨ ਕੀ, ਸਮੁਝਿ ਦੇਖੁ ਮਨ ਮਾਹਿ।", "ਬਿਨ ਸਾਖੀ ਸੰਸਾਰ ਕਾ, ਝਗੜਾ ਛੂਟਤ ਨਾਹਿ॥"],
          "en": ["The Sakhi is the eye of wisdom, look and understand within your mind.", "Without the Sakhi, the conflicts of this world never cease."]
        },
        "bhavarth": {
          "hi": "साखी ज्ञान की आंख है। इसके बिना संसार के भ्रम और क्लेश दूर नहीं हो सकते।",
          "pb": "ਸਾਖੀ ਗਿਆਨ ਦੀ ਅੱਖ ਹੈ।",
          "en": "The Sakhi provides spiritual vision to overcome worldly illusions."
        }
      }
    ] : sec.title === 'रमैनी' ? [
      {
        "id": "bijak-ramaini-1",
        "type": "ramaini",
        "lines": {
          "hi": ["आदि रमैनी आत्म बोध, बूझै कोई संत।", "बिन बुझे भटकत फिरे, पावै नहीं अंत॥"],
          "pb": ["ਆਦਿ ਰਮੈਨੀ ਆਤਮ ਬੋਧ, ਬੂਝੈ ਕੋਈ ਸੰਤ।", "ਬਿਨ ਬੁਝੇ ਭਟਕਤ ਫਿਰੇ, ਪਾਵੈ ਨਹੀਂ ਅੰਤ॥"],
          "en": ["The original Ramaini is Self-knowledge, understood by few saints.", "Without understanding, one wanders endlessly without finding the end."]
        },
        "bhavarth": {
          "hi": "रमैनी का अर्थ आत्म-ज्ञान है। जो इसे नहीं समझता, वह संसार में भटकता रहता है।",
          "pb": "ਰਮੈਨੀ ਆਤਮ-ਗਿਆਨ ਹੈ।",
          "en": "Ramaini signifies Self-realization; without it, one is lost in the world."
        }
      }
    ] : sec.title === 'सबद' ? [
      {
        "id": "bijak-shabad-1",
        "type": "shabad",
        "lines": {
          "hi": ["मोको कहाँ ढूँढे रे बन्दे, मैं तो तेरे पास में।", "ना मैं देवल ना मैं मसजिद, ना काबे कैलास में॥"],
          "pb": ["ਮੋਕੋ ਕਹਾਂ ਢੂੰਢੇ ਰੇ ਬੰਦੇ, ਮੈਂ ਤੋ ਤੇਰੇ ਪਾਸ ਮੇਂ।", "ਨਾ ਮੈਂ ਦੇਵਲ ਨਾ ਮੈਂ ਮਸਜਿਦ, ਨਾ ਕਾਬੇ ਕੈਲਾਸ ਮੇਂ॥"],
          "en": ["Where do you seek Me, O servant? I am right beside you.", "I am not in the temple, nor in the mosque, neither in Kaaba nor Kailash."]
        },
        "bhavarth": {
          "hi": "ईश्वर बाहर के तीर्थों या मंदिरों में नहीं, बल्कि स्वयं के भीतर ही विद्यमान है।",
          "pb": "ਪਰਮਾਤਮਾ ਤੁਹਾਡੇ ਅੰਦਰ ਹੀ ਹੈ।",
          "en": "The Divine resides within, not in external religious structures."
        }
      }
    ] : Array.from({ length: sec.count }).map((_, vIdx) => ({
      "id": `bijak-sec-${idx + 1}-v${vIdx + 1}`,
      "type": sec.type as any,
      "lines": { "hi": [], "pb": [], "en": [] },
      "bhavarth": { "hi": "", "pb": "", "en": "" }
    }))
  }))
};
