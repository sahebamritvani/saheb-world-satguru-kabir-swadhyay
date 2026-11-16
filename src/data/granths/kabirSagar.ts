import { MasterGranth } from './granthTypes';

const KABIR_SAGAR_BODHS = [
  { title: 'ज्ञान सागर', pages: 106 },
  { title: 'अनुराग सागर', pages: 164 },
  { title: 'अम्बु सागर', pages: 67 },
  { title: 'विवेक सागर', pages: 59 },
  { title: 'सर्वज्ञ सागर', pages: 21 },
  { title: 'ज्ञान प्रकाश', pages: 57 },
  { title: 'अमर सिंह बोध', pages: 24 },
  { title: 'बीर सिंह बोध', pages: 31 },
  { title: 'भोपाल बोध', pages: 11 },
  { title: 'जगजीवन बोध', pages: 40 },
  { title: 'गरूड़ बोध', pages: 43 },
  { title: 'हनुमान बोध', pages: 23 },
  { title: 'लक्ष्मण बोध', pages: 19 },
  { title: 'मोहम्मद बोध', pages: 18 },
  { title: 'कफिर बोध', pages: 6 },
  { title: 'सुल्तान बोध', pages: 91 },
  { title: 'निरंजन बोध', pages: 11 },
  { title: 'ज्ञान बोध', pages: 26 },
  { title: 'भवतारण बोध', pages: 21 },
  { title: 'मुक्ति बोध', pages: 18 },
  { title: 'चोका स्वरोदय बोध', pages: 12 },
  { title: 'कबीर बानी', pages: 67 },
  { title: 'कर्म बोध', pages: 27 },
  { title: 'अमरमूल', pages: 81 },
  { title: 'उग्र गीता', pages: 67 },
  { title: 'ज्ञान स्थिति बोध', pages: 70 },
  { title: 'छोटा संतोष बोध', pages: 5 },
  { title: 'बड़ा संतोष बोध', pages: 16 },
  { title: 'काया पांजी', pages: 7 },
  { title: 'पंच मुद्रा', pages: 44 },
  { title: 'जैन धर्म बोध', pages: 28 },
  { title: 'स्वसम वेद बोध', pages: 94 },
  { title: 'धर्म बोध', pages: 30 },
  { title: 'कमाल बोध', pages: 16 },
  { title: 'श्वास गुञ्जार', pages: 108 },
  { title: 'अगम निगम बोध', pages: 80 },
  { title: 'सुमिरन बोध -01', pages: 10 },
  { title: 'सुमिरन बोध -02', pages: 24 },
  { title: 'सुमिरन बोध -03', pages: 21 },
  { title: 'कबीर चरित्र बोध', pages: 100 },
  { title: 'गुरु महात्म्य बोध', pages: 14 },
  { title: 'जीव धर्म बोध', pages: 141 }
];

export const KABIR_SAGAR_GRANTH: MasterGranth = {
  "id": "kabir-sagar",
  "slug": "kabir-sagar",
  "title": {
    "hi": "सतगुरु कबीर साहेब का कबीर सागर ग्रंथ",
    "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਕਬੀਰ ਸਾਗਰ ਗ੍ਰੰਥ",
    "en": "Satguru Kabir Saheb's Kabir Sagar Granth"
  },
  "shortTitle": {
    "hi": "कबीर सागर",
    "pb": "ਕਬੀਰ ਸਾਗਰ",
    "en": "Kabir Sagar"
  },
  "subtitle": {
    "hi": "सत्यलोक, सृष्टि रचना, हंस उद्धार एवं सनातन आत्मज्ञान का ४२ बोधों वाला महासागर",
    "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ੪੨ ਬੋਧਾਂ ਦਾ ਮਹਾਸਾਗਰ",
    "en": "The Grand Ocean of 42 Divine Bodhs (Volumes) of Wisdom & Creation"
  },
  "category": "mool-granth",
  "iconName": "Sparkles",
  "bannerColor": "from-amber-600 to-orange-700",
  "accentColor": "text-amber-600",
  "totalChapters": 42,
  "estimatedHours": {
    "hi": "१००+ घण्टे स्वाध्याय",
    "pb": "੧੦੦+ ਘੰਟੇ ਅਧਿਐਨ",
    "en": "100+ Hours Study"
  },
  "description": {
    "hi": "कबीर सागर कबीर पंथ का सर्वोच्च आध्यात्मिक महाग्रन्थ है। इसमें ४२ बोधों (भागों) के माध्यम से सृष्टि उत्पत्ति, जीव उद्धार, और आत्मज्ञान के गूढ़ रहस्यों का वर्णन धर्मदास जी के संवाद के रूप में है। इसमें कुल १९१८ पृष्ठों का पावन ज्ञान समाहित है।",
    "pb": "ਕਬੀਰ ਸਾਗਰ ਕਬੀਰ ਪੰਥ ਦਾ ਸਭ ਤੋਂ ਮਹਾਨ ਅਧਿਆਤਮਕ ਗ੍ਰੰਥ ਹੈ, ਜਿਸ ਵਿੱਚ ੪੨ ਬੋਧ ਹਨ।",
    "en": "Kabir Sagar is the comprehensive spiritual encyclopedia of Kabir Panth, comprising 42 distinct Bodhs (volumes) covering cosmic creation, soul liberation, and divine wisdom across 1918 pages."
  },
  "chapters": KABIR_SAGAR_BODHS.map((bodh, idx) => ({
    "id": `ks-bodh-${idx + 1}`,
    "chapterNumber": idx + 1,
    "title": {
      "hi": `${idx + 1}. ${bodh.title}`,
      "pb": `${idx + 1}. ${bodh.title}`,
      "en": `${idx + 1}. ${bodh.title}`
    },
    "subtitle": {
      "hi": `${bodh.pages} पृष्ठों का पावन ज्ञान`,
      "pb": `${bodh.pages} ਪੰਨਿਆਂ ਦਾ ਪਾਵਨ ਗਿਆਨ`,
      "en": `Sacred knowledge across ${bodh.pages} pages`
    },
    "description": {
      "hi": `कबीर सागर का यह भाग '${bodh.title}' विषय पर विस्तृत प्रकाश डालता है। इसमें कुल ${bodh.pages} पृष्ठ हैं।`,
      "pb": `ਕਬੀਰ ਸਾਗਰ ਦਾ ਇਹ ਭਾਗ '${bodh.title}' ਬਾਰੇ ਵਿਸਤਾਰ ਵਿੱਚ ਦੱਸਦਾ ਹੈ।`,
      "en": `This volume of Kabir Sagar focuses on '${bodh.title}' and spans ${bodh.pages} pages.`
    },
    "verses": []
  }))
};
