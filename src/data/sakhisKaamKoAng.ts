import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_KAAM_KO_ANG: Sakhi[] = [
  {
    id: 'kaam-1',
    number: 1504,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧',
      en: 'Kaam Ko Ang - 1',
    },
    text: {
      hi: 'कामी क्रोधी लालची, इनते भक्ति न होय।\nभक्ति करै कोय सूरमा, जाति बरन कुल खोय।।',
      pb: devanagariToGurmukhi('कामी क्रोधी लालची, इनते भक्ति न होय। भक्ति करै कोय सूरमा, जाति बरन कुल खोय।।'),
      en: 'Kaamee krodhee laalchee, inte bhakti na hoy. Bhakti karai koy soormaa, jaati baran kul khoy..'
    },
    transliteration: 'Kaami krodhi laalchi, inte bhakti na hoy. Bhakti karai koy soorma, jaati baran kul khoy.',
    bhavarth: {
      hi: 'कामुक व्यक्ति विषयों में लवलीन रहता है, क्रोधी आग की भांति जलता-भुनता रहता है तथा लालची प्रतिक्षण धन बटोरने के चक्कर में लगा रहता है। इन तीनों प्रकार के व्यक्तियों से भक्ति नहीं हो सकती, क्योंकि भक्ति संयम-साधना के साथ कोई शूरवीर-परमार्थी पुरुष ही कर सकता है, जो अपनी जाति, वर्ण, कुल-गोत्र आदि के अभिमान का त्याग कर देता है।',
      pb: devanagariToGurmukhi('ਕਾਮੀ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਗ੍ਰਸਤ ਰਹਿੰਦਾ ਹੈ, ਕ੍ਰੋਧੀ ਸੜਦਾ-ਬਲਦਾ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਲਾਲਚੀ ਧਨ ਪਿੱਛੇ ਭੱਜਦਾ ਹੈ। ਇਹਨਾਂ ਤਿੰਨਾਂ ਤੋਂ ਸੱਚੀ ਭਗਤੀ ਨਹੀਂ ਹੋ ਸਕਦੀ। ਭਗਤੀ ਉਹੀ ਸੂਰਮਾ ਕਰ ਸਕਦਾ ਹੈ ਜੋ ਜਾਤ-ਪਾਤ ਅਤੇ ਕੁਲ ਦਾ ਹੰਕਾਰ ਤਿਆਗ ਦੇਵੇ।'),
      en: 'The lustful remains obsessed with sensory desires, the wrathful burns in fury, and the greedy hoards material wealth. Genuine devotion cannot blossom in such souls. Devotion demands a spiritual warrior (Soorma) who fearlessly renounces all pride of caste, status, and lineage.'
    },
    wordMeanings: {
      hi: [
        { word: 'कामी क्रोधी लालची (Kaamee krodhee laalchee)', meaning: 'वासना, क्रोध और लोभ के वशीभूत रहने वाले मनुष्य' },
        { word: 'सूरमा (Soormaa)', meaning: 'इंद्रियों और विकारों को जीतने वाला आध्यात्मिक शूरवीर' },
        { word: 'जाति बरन कुल खोय (Jaati baran kul khoy)', meaning: 'जाति, वर्ण और कुल-प्रतिष्ठा का मिथ्या अहंकार मिटाकर' }
      ],
      pb: [
        { word: 'ਸੂਰਮਾ', meaning: 'ਵਿਕਾਰਾਂ ਨੂੰ ਜਿੱਤਣ ਵਾਲਾ ਜੋਧਾ' },
        { word: 'ਜਾਤਿ ਬਰਨ ਕੁਲ ਖੋਯ', meaning: 'ਕੁਲ-ਜਾਤ ਦਾ ਹੰਕਾਰ ਤਿਆਗਣਾ' }
      ],
      en: [
        { word: 'Kaamee krodhee laalchee', meaning: 'The lustful, the wrathful, and the avaricious' },
        { word: 'Soormaa', meaning: 'Spiritual warrior conquering inner passions' },
        { word: 'Jaati baran kul khoy', meaning: 'Shedding the conceit of caste, lineage, and social pride' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर काम, क्रोध या लोभ की छाया है जो मुझे निश्छल भक्ति से रोक रही है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਕਾਮ, ਕ੍ਰੋਧ ਜਾਂ ਲਾਲਚ ਭਗਤੀ ਵਿੱਚ ਰੁਕਾਵਟ ਬਣ ਰਿਹਾ ਹੈ?'),
      en: 'Are subtle traces of lust, anger, or greed hindering my path to genuine devotion?'
    },
    practicalApplication: {
      hi: 'जाति और प्रतिष्ठा का दंभ त्यागकर शूरवीर साधक की भांति विकारों पर संयम रखें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਵਿਕਾਰਾਂ \'ਤੇ ਕਾਬੂ ਪਾਓ।'),
      en: 'Eradicate false social pride and bravely tame the senses through disciplined devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम, क्रोध और लोभ के बंधनों से मुक्त कर एक सच्चा आध्यात्मिक सूरमा बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ-ਕ੍ਰੋਧ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸੱਚਾ ਸੂਰਮਾ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from lust, anger, and greed, and fortify my soul with the valor of a true spiritual warrior.'
    },
    quiz: []
  },
  {
    id: 'kaam-2',
    number: 1505,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - २',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੨',
      en: 'Kaam Ko Ang - 2',
    },
    text: {
      hi: 'सहकामी दीपक दसा, सीखे तेल निवास।\nकबीर हीरा सन्त जन, सहजै सदा प्रकाश।।',
      pb: devanagariToGurmukhi('सहकामी दीपक दसा, सीखे तेल निवास। कबीर हीरा सन्त जन, सहजै सदा प्रकाश।।'),
      en: 'Sahkaamee deepak dasaa, seekhe tel nivaas. Kabeer heeraa sant jan, sahjai sadaa prakaash..'
    },
    transliteration: 'Sahkaami deepak dasa, seekhe tel nivaas. Kabeer heera sant jan, sahjai sada prakaash.',
    bhavarth: {
      hi: 'काम-वासना के वशीभूत होकर विषयों का कुसंग करने वाले मनुष्य की दशा इस प्रकार के जलते हुए दीपक के समान हो जाती है, जो अपने आधारभूत तेल को भी चूस लेता है, जिससे वह आलोकित होता है। कबीरजी कहते हैं कि संत जन हीरे के समान होते हैं, जिनका सदा ही निज स्वाभाविक प्रकाश होता है, अतः वे अपने ज्ञान-प्रकाश से जिज्ञासु जनों के हृदय को प्रकाशित करते हैं।',
      pb: devanagariToGurmukhi('ਕਾਮੀ ਪੁਰਸ਼ ਦੀ ਹਾਲਤ ਦੀਵੇ ਵਰਗੀ ਹੈ ਜੋ ਚਾਨਣ ਦੇਣ ਵਾਲੇ ਆਪਣੇ ਹੀ ਤੇਲ ਨੂੰ ਸੁਕਾ ਲੈਂਦਾ ਹੈ। ਪਰ ਸੰਤ ਜਨ ਹੀਰੇ ਵਰਗੇ ਹਨ ਜੋ ਸਹਿਜ ਸੁਭਾਅ ਸਦਾ ਆਤਮਿਕ ਗਿਆਨ ਦਾ ਚਾਨਣ ਵੰਡਦੇ ਹਨ।'),
      en: 'The condition of a lustful person is like a flickering oil lamp that consumes its own vital fuel to stay lit. But holy Saints are like self-luminous diamonds, radiating pure, effortless spiritual light eternally without depletion.'
    },
    wordMeanings: {
      hi: [
        { word: 'सहकामी (Sahkaamee)', meaning: 'काम-वासना व विषय-भोगों से युक्त संसारी व्यक्ति' },
        { word: 'दीपक दसा (Deepak dasaa)', meaning: 'दीपक जैसी स्थिति जो अपने ही जीवन-रस रूपी तेल को जला डालती है' },
        { word: 'सहजै सदा प्रकाश (Sahjai sadaa prakaash)', meaning: 'सहज रूप से निरंतर आत्म-प्रकाश से दैदीप्यमान' }
      ],
      pb: [
        { word: 'ਦੀਪਕ ਦਸਾ', meaning: 'ਦੀਵੇ ਵਰਗੀ ਹਾਲਤ' },
        { word: 'ਸਹਜੈ ਸਦਾ ਪ੍ਰਕਾਸ਼', meaning: 'ਸਦਾ ਆਪਣੀ ਰੌਸ਼ਨੀ ਵਿੱਚ ਚਮਕਣਾ' }
      ],
      en: [
        { word: 'Sahkaamee', meaning: 'A person driven by sensory lust and desires' },
        { word: 'Deepak dasaa', meaning: 'State of an oil lamp consuming its own vital sustenance' },
        { word: 'Sahjai sadaa prakaash', meaning: 'Effortlessly radiating self-existent divine luminescence' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं काम-वासना में अपनी जीवन-ऊर्जा का क्षय कर रहा हूँ, या संतों के संग से हीरे जैसा आत्म-प्रकाश पा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੀ ਊਰਜਾ ਕਾਮ ਵਿੱਚ ਨਸ਼ਟ ਕਰ ਰਿਹਾ ਹਾਂ ਜਾਂ ਸੰਤਾਂ ਦੇ ਗਿਆਨ ਨਾਲ ਚਮਕ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I exhausting my vital life energy in sensory lust, or awakening to self-luminous wisdom in the company of Saints?'
    },
    practicalApplication: {
      hi: 'प्राण-शक्ति और ओज का संचय करें; काम-विकार से बचकर संतों की ज्ञान-ज्योति से जीवन को आलोकित करें।',
      pb: devanagariToGurmukhi('ਆਪਣੀ ਆਤਮਿਕ ਊਰਜਾ ਸੰਭਾਲੋ ਅਤੇ ਗਿਆਨ ਦਾ ਚਾਨਣ ਪਾਓ।'),
      en: 'Conserve vital energy and illuminate your inner consciousness through holy fellowship.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे दीपक के समान जलने से बचाकर संत-हीरे का अखंड और सहज प्रकाश प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਹੀਰੇ ਵਰਗਾ ਸਹਿਜ ਗਿਆਨ-ਪ੍ਰਕਾਸ਼ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Save me from exhausting my vital essence and bless me with the eternal luminescence of the diamond-souled Saints.'
    },
    quiz: []
  },
  {
    id: 'kaam-3',
    number: 1506,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ३',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੩',
      en: 'Kaam Ko Ang - 3',
    },
    text: {
      hi: 'काम क्रोध मद लोभ की, जब लग घट में खान।\nकबीर मूरख पंडिता, दोनों एक समान।।',
      pb: devanagariToGurmukhi('काम क्रोध मद लोभ की, जब लग घट में खान। कबीर मूरख पंडिता, दोनों एक समान।।'),
      en: 'Kaam krodh mad lobh kee, jab lag ghat mein khaan. Kabeer moorakh panditaa, donon ek samaan..'
    },
    transliteration: 'Kaam krodh mad lobh ki, jab lag ghat mein khaan. Kabeer moorakh pandita, donon ek samaan.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि काम, क्रोध, लोभ, मद एवं मोह आदि दुर्गुणों से, जब तक हृदय भरा हुआ है, तब तक मूर्ख और पंडित दोनों एक समान हैं, अर्थात जिसने भक्ति-ज्ञान से इन दुर्गुणों को अपने हृदय से दूर कर दिया, वही पंडित है और जिसने इसका त्याग नहीं किया, वह मूर्ख है।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਤੱਕ ਹਿਰਦੇ ਵਿੱਚ ਕਾਮ, ਕ੍ਰੋਧ, ਹੰਕਾਰ ਅਤੇ ਲੋਭ ਦੀ ਖਾਣ ਭਰੀ ਹੋਈ ਹੈ, ਤਦ ਤੱਕ ਮੂਰਖ ਅਤੇ ਪੰਡਿਤ ਦੋਵੇਂ ਬਰਾਬਰ ਹਨ। ਜੋ ਵਿਕਾਰਾਂ ਨੂੰ ਮਿਟਾਉਂਦਾ ਹੈ ਉਹੀ ਅਸਲੀ ਪੰਡਿਤ ਹੈ।'),
      en: 'As long as the vessel of the heart is a mine of lust, wrath, pride, and greed, the illiterate fool and the learned scholar stand on the exact same plane. Only one who purifies the heart through spiritual wisdom is truly learned.'
    },
    wordMeanings: {
      hi: [
        { word: 'घट में खान (Ghat mein khaan)', meaning: 'हृदय के भीतर विकारों का भंडार' },
        { word: 'मद (Mad)', meaning: 'अहंकार, घमंड व नशा' },
        { word: 'मूरख पंडिता (Moorakh panditaa)', meaning: 'अज्ञानी और शास्त्र-ज्ञानी दोनों' }
      ],
      pb: [
        { word: 'ਘਟ ਮੇਂ ਖਾਨ', meaning: 'ਹਿਰਦੇ ਵਿੱਚ ਵਿਕਾਰਾਂ ਦਾ ਭੰਡਾਰ' },
        { word: 'ਮਦ', meaning: 'ਹੰਕਾਰ / ਘਮੰਡ' }
      ],
      en: [
        { word: 'Ghat mein khaan', meaning: 'A repository of vices harbored within the heart' },
        { word: 'Mad', meaning: 'Arrogance, intoxication of ego' },
        { word: 'Moorakh panditaa', meaning: 'The fool and the book-learned scholar' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल पुस्तकीय ज्ञान का अभिमान कर रहा हूँ, जबकि भीतर काम-क्रोध की खान बैठी है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਿਰਫ਼ ਕਿਤਾਬੀ ਗਿਆਨ ਵਿੱਚ ਹਾਂ ਜਾਂ ਹਿਰਦਾ ਵੀ ਪਵਿੱਤਰ ਕੀਤਾ ਹੈ?'),
      en: 'Am I merely intellectually learned while the mine of lust and pride remains untouched inside my heart?'
    },
    practicalApplication: {
      hi: 'शास्त्रीय पांडित्य के अहंकार से बचें; अंतर्मन को काम, क्रोध और लोभ से खाली करके निर्मल बनाएं।',
      pb: devanagariToGurmukhi('ਪੰਡਿਤਾਈ ਦਾ ਹੰਕਾਰ ਛੱਡ ਕੇ ਹਿਰਦੇ ਨੂੰ ਸ਼ੁੱਧ ਕਰੋ।'),
      en: 'Transcend academic arrogance and purify the inner sanctuary of all passions and greed.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे घट से काम, क्रोध, मद और लोभ की खान को समूल नष्ट कर मुझे सच्चे आत्म-ज्ञान का अधिकारी बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚੋਂ ਵਿਕਾਰਾਂ ਦੀ ਖਾਣ ਮਿਟਾ ਕੇ ਨਿਰਮਲ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Uproot the mine of lust, anger, pride, and greed from my heart and establish the throne of purity.'
    },
    quiz: []
  },
  {
    id: 'kaam-4',
    number: 1507,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ४',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੪',
      en: 'Kaam Ko Ang - 4',
    },
    text: {
      hi: 'बुन्द खिरी नर नारि की, जैसी आतम घात।\nअज्ञानी मानै नहीं, येहि बात उत्पात।।',
      pb: devanagariToGurmukhi('बुन्द खिरी नर नारि की, जैसी आतम घात। अज्ञानी मानै नहीं, येहि बात उत्पात।।'),
      en: 'Bund khiree nar naari kee, jaisee aatam ghaat. Agyaanee maanai naheen, yehi baat utpaat..'
    },
    transliteration: 'Bund khiri nar nari ki, jaisi aatam ghaat. Agyani maanai nahi, yehi baat utpaat.',
    bhavarth: {
      hi: 'नारी-पुरुष के मिलन से रज-वीर्य के स्खलित हो जाने पर, दोनों ही आत्म हत्यारे के समान अनुभव करते हुए पश्चाताप में डूब जाते हैं, परंतु अज्ञानी लोग मानते ही नहीं। वे समझकर पहले ही अपना सुधार नहीं करते, बस यही उलझन की बात है। काम के आवेग में कामी स्वयं को भूल जाता है और बाद में पछताता है।',
      pb: devanagariToGurmukhi('ਕਾਮ-ਵਾਸਨਾ ਵਿੱਚ ਵੀਰਯ ਅਤੇ ਰਜ ਦੇ ਨਾਸ਼ ਹੋਣ ਨਾਲ ਆਤਮ-ਘਾਤ ਵਰਗਾ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ, ਪਰ ਅਗਿਆਨੀ ਮਨੁੱਖ ਪਹਿਲਾਂ ਨਹੀਂ ਸਮਝਦੇ। ਕਾਮ ਦੇ ਵੇਗ ਵਿੱਚ ਸੁਰਤ ਗਵਾ ਬੈਠਦੇ ਹਨ ਤੇ ਬਾਅਦ ਵਿੱਚ ਪਛਤਾਉਂਦੇ ਹਨ।'),
      en: 'The reckless dissipation of vital life-force in sensory indulgence is akin to self-destruction (spiritual suicide). Yet the heedless ignore this warning; overpowered by blind passion, they forget themselves only to drown in subsequent regret.'
    },
    wordMeanings: {
      hi: [
        { word: 'बुन्द खिरी (Bund khiree)', meaning: 'प्राण-शक्ति व वीर्य-बिंदु का क्षरण होना' },
        { word: 'आतम घात (Aatam ghaat)', meaning: 'आत्महत्या के समान आत्मिक व शारीरिक पतन' },
        { word: 'उत्पात (Utpaat)', meaning: 'विनाशकारी उपद्रव, भारी भूल या संकट' }
      ],
      pb: [
        { word: 'ਬੁੰਦ ਖਿਰੀ', meaning: 'ਵੀਰਯ ਅਤੇ ਊਰਜਾ ਦਾ ਨਾਸ਼' },
        { word: 'ਆਤਮ ਘਾਤ', meaning: 'ਆਪਣਾ ਹੀ ਨੁਕਸਾਨ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Bund khiree', meaning: 'Dissipation of the vital reproductive seed / subtle energy' },
        { word: 'Aatam ghaat', meaning: 'Spiritual and physical self-annihilation' },
        { word: 'Utpaat', meaning: 'Catastrophic ruin and spiritual havoc' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं काम के क्षणिक आवेग में अपनी अमूल्य जीवन-शक्ति का आत्मघात कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕਾਮ ਦੇ ਵੇਗ ਵਿੱਚ ਆਪਣੀ ਜੀਵਨ-ਊਰਜਾ ਬਰਬਾਦ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I recklessly squandering my divine vital energy for momentary sensory impulses?'
    },
    practicalApplication: {
      hi: 'ब्रह्मचर्य और ओज का संरक्षण करें; काम-विकारों से ऊपर उठकर योग और ध्यान में ऊर्जा का उत्थान करें।',
      pb: devanagariToGurmukhi('ਬ੍ਰਹਮਚਰਯ ਧਾਰਨ ਕਰੋ ਅਤੇ ਧਿਆਨ ਵਿੱਚ ਊਰਜਾ ਲਗਾਓ।'),
      en: 'Practice celibate self-restraint and transmute vital energy upward through deep meditation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे संयम और ब्रह्मचर्य की शक्ति प्रदान कीजिए ताकि मैं आत्म-पतन से बचकर सत्य-पथ पर स्थिर रहूँ। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਜਮ ਅਤੇ ਆਤਮਿਕ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me pristine self-mastery to preserve my sacred vital energy for highest awakening.'
    },
    quiz: []
  },
  {
    id: 'kaam-5',
    number: 1508,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ५',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੫',
      en: 'Kaam Ko Ang - 5',
    },
    text: {
      hi: 'कामी लज्जा ना करै, मांहीं अहलाद।\nनींद न मांगै साथरा, भूख न मांगै स्वाद।।',
      pb: devanagariToGurmukhi('कामी लज्जा ना करै, मांहीं अहलाद। नींद न मांगै साथरा, भूख न मांगै स्वाद।।'),
      en: 'Kaamee lajjaa naa karai, maanheen ahlaad. Neend na maangai saathraa, bhookh na maangai svaad..'
    },
    transliteration: 'Kaami lajja na karai, maanhi ahlaad. Neend na maangai saathra, bhookh na maangai swaad.',
    bhavarth: {
      hi: 'प्रतिक्षण काम-वासना में डूबा रहने वाला तथा इसी हीन कर्म में मस्ती मनाने वाला यह कामांध व्यक्ति उसी प्रकार लज्जा नहीं करता, जिस प्रकार अधिक नींद के आने पर किसी पलंग-बिस्तर की आवश्यकता नहीं होती और बहुत अधिक भूख लगने पर स्वादिष्ट पदार्थ की कोई बात नहीं होती, केवल सोने और खाने का मन होता है।',
      pb: devanagariToGurmukhi('ਕਾਮ-ਅੰਨ੍ਹਾ ਮਨੁੱਖ ਸ਼ਰਮ-ਹਯਾ ਨਹੀਂ ਰੱਖਦਾ। ਜਿਵੇਂ ਗੂੜ੍ਹੀ ਨੀਂਦ ਆਉਣ \'ਤੇ ਬਿਸਤਰੇ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਭੁੱਖ ਲੱਗਣ \'ਤੇ ਸਵਾਦ ਨਹੀਂ ਵੇਖਿਆ ਜਾਂਦਾ, ਇਵੇਂ ਕਾਮੀ ਮਨੁੱਖ ਸਿਰਫ਼ ਭੋਗ ਵਿੱਚ ਅੰਨ੍ਹਾ ਹੋ ਜਾਂਦਾ ਹੈ।'),
      en: 'Blinded by passion, the lustful person sheds all modesty and self-respect. Just as deep slumber requires no soft mattress and ravenous hunger cares not for gourmet taste, so too does lust obliterate all discernment and shame.'
    },
    wordMeanings: {
      hi: [
        { word: 'मांहीं अहलाद (Maanheen ahlaad)', meaning: 'मन ही मन कामुक वासना में आनंदित होना' },
        { word: 'साथरा (Saathraa)', meaning: 'बिस्तर, बिछौना या शय्या' },
        { word: 'लज्जा ना करै (Lajjaa naa karai)', meaning: 'लाज-शर्म और सामाजिक मर्यादा को भूल जाना' }
      ],
      pb: [
        { word: 'ਸਾਥਰਾ', meaning: 'ਬਿਸਤਰਾ / ਵਿਛੌਣਾ' },
        { word: 'ਮਾਂਹੀ ਅਹਲਾਦ', meaning: 'ਮਨ ਹੀ ਮਨ ਖ਼ੁਸ਼ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Maanheen ahlaad', meaning: 'Secretly rejoicing in sensory infatuation' },
        { word: 'Saathraa', meaning: 'Bedding or soft mattress' },
        { word: 'Lajjaa naa karai', meaning: 'Losing all shame, modesty, and righteous judgment' }
      ]
    },
    contemplation: {
      hi: 'क्या काम-वासना मेरे विवेक और मर्यादा को नष्ट तो नहीं कर रही है?',
      pb: devanagariToGurmukhi('ਕੀ ਕਾਮ ਮੇਰੀ ਸੋਚ-ਸਮਝ ਅਤੇ ਮਰਯਾਦਾ ਨੂੰ ਖ਼ਤਮ ਕਰ ਰਿਹਾ ਹੈ?'),
      en: 'Is carnal desire eroding my spiritual discernment and moral dignity?'
    },
    practicalApplication: {
      hi: 'इंद्रिय-आवेगों को विवेक की कसौटी पर कसें और मन को मर्यादा तथा धर्म में स्थिर रखें।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਮਰਯਾਦਾ ਅਤੇ ਧਰਮ ਵਿੱਚ ਰੱਖੋ।'),
      en: 'Anchor the mind firmly in righteousness and spiritual discernment to master base urges.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम-अंधता से बचाकर आत्म-मर्यादा और पवित्र विवेक का कवच प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ-ਅੰਨ੍ਹੇਪਣ ਤੋਂ ਬਚਾ ਕੇ ਪਵਿੱਤਰ ਵਿਵੇਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me from the blinding stupor of lust and bestow upon me pure discernment and divine dignity.'
    },
    quiz: []
  },
  {
    id: 'kaam-6',
    number: 1509,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ६',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੬',
      en: 'Kaam Ko Ang - 6',
    },
    text: {
      hi: 'कहता हूं कहि जात हूं, मानै नहीं गंवार।\nबैरागी गिरही कहा, कामी वार न पार।।',
      pb: devanagariToGurmukhi('कहता हूं कहि जात हूं, मानै नहीं गंवार। बैरागी गिरही कहा, कामी वार न पार।।'),
      en: 'Kahtaa hoon kahi jaat hoon, maanai naheen ganvaar. Bairaagee girhee kahaa, kaamee vaar na paar..'
    },
    transliteration: 'Kahta hoon kahi jaat hoon, maanai nahi ganwaar. Bairaagi girhi kaha, kaami waar na paar.',
    bhavarth: {
      hi: 'पहले भी बहुत कुछ कह दिया है, फिर कहता हूं और कहते हुए जाता हूं, फिर भी अज्ञानी लोग मेरी बात को नहीं मानते। चाहे कोई साधु वैरागी के वेश में हो या गृहस्थ के वेश में, किसी भी रूप में कामी मनुष्य का कहीं ठिकाना नहीं है, अर्थात उसका उद्धार नहीं हो सकता।',
      pb: devanagariToGurmukhi('ਮੈਂ ਵਾਰ-ਵਾਰ ਸਮਝਾ ਰਿਹਾ ਹਾਂ ਪਰ ਅਗਿਆਨੀ ਮੰਨਦੇ ਨਹੀਂ। ਚਾਹੇ ਕੋਈ ਸੰਨਿਆਸੀ-ਵੈਰਾਗੀ ਹੋਵੇ ਜਾਂ ਗ੍ਰਹਿਸਥੀ, ਜੇਕਰ ਉਹ ਕਾਮੀ ਹੈ ਤਾਂ ਉਸਦਾ ਕੋਈ ਪਾਰ-ਉਤਾਰਾ ਨਹੀਂ ਹੋ ਸਕਦਾ।'),
      en: 'I have proclaimed it repeatedly and proclaim it still, yet the foolish heed not: whether one dons the robes of a renuncient (Bairagi) or lives as a householder (Grihasthi), if lust dominates the mind, there is neither shore nor salvation for them.'
    },
    wordMeanings: {
      hi: [
        { word: 'गंवार (Ganvaar)', meaning: 'अज्ञानी, चेतना-विहीन मूर्ख जीव' },
        { word: 'बैरागी गिरही (Bairaagee girhee)', meaning: 'त्यागी संन्यासी अथवा पारिवारिक गृहस्थ' },
        { word: 'वार न पार (Vaar na paar)', meaning: 'न इस पार का न उस पार का, उद्धार से वंचित' }
      ],
      pb: [
        { word: 'ਗੰਵਾਰ', meaning: 'ਅਗਿਆਨੀ / ਮੂਰਖ' },
        { word: 'ਵਾਰ ਨ ਪਾਰ', meaning: 'ਕੋਈ ਟਿਕਾਣਾ ਜਾਂ ਮੁਕਤੀ ਨਹੀਂ' }
      ],
      en: [
        { word: 'Ganvaar', meaning: 'Ignorant and heedless person' },
        { word: 'Bairaagee girhee', meaning: 'Renunciate ascetic or domestic householder' },
        { word: 'Vaar na paar', meaning: 'Bereft of salvation, having neither shore nor refuge' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने केवल वेश बदला है या सचमुच भीतर से काम-वासना का त्याग किया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਿਰਫ਼ ਬਾਹਰੀ ਭੇਖ ਬਦਲਿਆ ਹੈ ਜਾਂ ਅੰਦਰੋਂ ਕਾਮ ਵੀ ਤਿਆਗਿਆ ਹੈ?'),
      en: 'Have I merely altered my external guise, or truly conquered internal lust?'
    },
    practicalApplication: {
      hi: 'बाहरी दिखावे को छोड़ें; चाहे गृहस्थ हों या साधक, अंतःकरण से काम-विकारों का उन्मूलन करें।',
      pb: devanagariToGurmukhi('ਬਾਹਰੀ ਦਿਖਾਵਾ ਛੱਡ ਕੇ ਅੰਦਰੋਂ ਵਿਕਾਰ ਮਿਟਾਓ।'),
      en: 'Shun outward pretense; whether living as a householder or ascetic, genuinely purge lust from within.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे भेष के अहंकार से बचाकर काम-मुक्त पवित्र जीवन जीने की कृपा प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਪਵਿੱਤਰ ਜੀਵਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the vanity of outward appearances and sanctify my heart with true inner purity.'
    },
    quiz: []
  },
  {
    id: 'kaam-7',
    number: 1510,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ७',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੭',
      en: 'Kaam Ko Ang - 7',
    },
    text: {
      hi: 'कामी कुत्ता तीस दिन, अन्तर होय उदास।\nकामी नर कुत्ता सदा, छह रितु बारह मास ।।',
      pb: devanagariToGurmukhi('कामी कुत्ता तीस दिन, अन्तर होय उदास। कामी नर कुत्ता सदा, छह रितु बारह मास ।।'),
      en: 'Kaamee kuttaa tees din, antar hoy udaas. Kaamee nar kuttaa sadaa, chhah ritu baarah maas..'
    },
    transliteration: 'Kaami kutta tees din, antar hoy udaas. Kaami nar kutta sada, chhah ritu baarah maas.',
    bhavarth: {
      hi: 'कुत्ता बारह महीनों में केवल तीस दिन ही काम-वासना के वशीभूत रहता है, फिर वह इससे उदास होकर दूर रहता है, परंतु कामी व्यक्ति तो ऐसा भ्रष्ट और पतित है कि वह बारह महीने की छह ऋतुओं में सदैव काम-वासना में डूबा रहता है।',
      pb: devanagariToGurmukhi('ਕੁੱਤਾ ਵੀ ਸਾਲ ਵਿੱਚ ਸਿਰਫ਼ ਤੀਹ ਦਿਨ ਕਾਮ ਵਿੱਚ ਹੁੰਦਾ ਹੈ ਅਤੇ ਬਾਕੀ ਸਮਾਂ ਉਦਾਸ ਰਹਿੰਦਾ ਹੈ। ਪਰ ਕਾਮੀ ਮਨੁੱਖ ਸਾਰਾ ਸਾਲ ਛੇ ਰੁੱਤਾਂ ਅਤੇ ਬਾਰਾਂ ਮਹੀਨੇ ਕਾਮ-ਵਾਸਨਾ ਵਿੱਚ ਹੀ ਗ਼ਲਤਾਨ ਰਹਿੰਦਾ ਹੈ।'),
      en: 'Even an animal like a dog is seized by carnal instinct for only thirty days in a year, remaining detached the rest of the time. But the chronically lustful human is so fallen that they remain consumed by carnal desires through all six seasons and twelve months.'
    },
    wordMeanings: {
      hi: [
        { word: 'तीस दिन (Tees din)', meaning: 'वर्ष के केवल सीमित तीस दिन (प्राकृतिक ऋतु)' },
        { word: 'अन्तर होय उदास (Antar hoy udaas)', meaning: 'शेष समय वासना से विरक्त व शांत रहना' },
        { word: 'छह रितु बारह मास (Chhah ritu baarah maas)', meaning: 'वर्ष भर निरंतर प्रत्येक क्षण' }
      ],
      pb: [
        { word: 'ਤੀਸ ਦਿਨ', meaning: 'ਸਿਰਫ਼ ਤੀਹ ਦਿਨ' },
        { word: 'ਛਹ ਰਿਤੁ ਬਾਰਹ ਮਾਸ', meaning: 'ਸਾਰਾ ਸਾਲ ਹਰ ਵੇਲੇ' }
      ],
      en: [
        { word: 'Tees din', meaning: 'Only thirty days in the natural seasonal cycle' },
        { word: 'Antar hoy udaas', meaning: 'Remaining indifferent and calm during the rest of the year' },
        { word: 'Chhah ritu baarah maas', meaning: 'Incessantly through all six seasons and twelve months' }
      ]
    },
    contemplation: {
      hi: 'क्या मनुष्य योनि पाकर भी मैं पशुओं से भी अधिक काम-वासना का दास बना हुआ हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨੁੱਖ ਹੋ ਕੇ ਵੀ ਪਸ਼ੂਆਂ ਨਾਲੋਂ ਵੱਧ ਕਾਮ ਦਾ ਗ਼ੁਲਾਮ ਹਾਂ?'),
      en: 'Having attained precious human birth, am I living more enslaved to carnal impulses than animals?'
    },
    practicalApplication: {
      hi: 'मानव जीवन की गरिमा को पहचानें; मानसिक विचारों को सत्संग और नाम-सिमरन से पवित्र रखें।',
      pb: devanagariToGurmukhi('ਮਨੁੱਖਾ ਜਨਮ ਦੀ ਕਦਰ ਜਾਣ ਕੇ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Honor the dignity of human birth; elevate your mind above carnal bondage through sacred remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे निरंतर काम-विकारों में जलने से बचाकर अपने शांत व पावन नाम का अमृत रस दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ-ਵਾਸਨਾ ਤੋਂ ਛੁਡਾ ਕੇ ਨਾਮ ਦਾ ਅੰਮ੍ਰਿਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the ceaseless fire of carnal obsession and quench my soul with the nectar of Your Holy Name.'
    },
    quiz: []
  },
  {
    id: 'kaam-8',
    number: 1511,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ८',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੮',
      en: 'Kaam Ko Ang - 8',
    },
    text: {
      hi: 'कामी अमी न भावई, विष को लेवै सोध।\nकुबुधि न भाजै जीव की, भावै ज्यौं परमोध।।',
      pb: devanagariToGurmukhi('कामी अमी न भावई, विष को लेवै सोध। कुबुधि न भाजै जीव की, भावै ज्यौं परमोध।।'),
      en: 'Kaamee amee na bhaavayee, vish ko levai sodh. Kubudhi na bhaajai jeev kee, bhaavai jyaun paramodh..'
    },
    transliteration: 'Kaami ami na bhaavai, vish ko levai sodh. Kubudhi na bhaajai jeev ki, bhaavai jyaun paramodh.',
    bhavarth: {
      hi: 'कामी मनुष्य को सदाचार व ब्रह्मचर्य रूपी अमृत कभी अच्छा नहीं लगता। वह तो सदा काम-वासना रूपी विष को ही खोजता रहता है। आचरणहीन व अज्ञानी मनुष्य की कुबुद्धि दूर नहीं होती, चाहे उसे कितना भी ज्ञानोपदेश करो।',
      pb: devanagariToGurmukhi('ਕਾਮੀ ਮਨੁੱਖ ਨੂੰ ਗਿਆਨ-ਅੰਮ੍ਰਿਤ ਚੰਗਾ ਨਹੀਂ ਲੱਗਦਾ, ਉਹ ਸਦਾ ਵਿਕਾਰਾਂ ਦਾ ਜ਼ਹਿਰ ਹੀ ਭਾਲਦਾ ਹੈ। ਭਾਵੇਂ ਉਸਨੂੰ ਕਿੰਨਾ ਵੀ ਸਮਝਾਓ, ਉਸਦੀ ਖੋਟੀ ਮੱਤ ਦੂਰ ਨਹੀਂ ਹੁੰਦੀ।'),
      en: 'The lustful person has no taste for the nectar of divine virtue; they constantly seek the lethal poison of carnal indulgence. Their corrupted intellect remains perverse despite receiving countless spiritual discourses.'
    },
    wordMeanings: {
      hi: [
        { word: 'अमी न भावई (Amee na bhaavayee)', meaning: 'सद्ज्ञान व ब्रह्मचर्य रूपी अमृत अच्छा नहीं लगता' },
        { word: 'विष को लेवै सोध (Vish ko levai sodh)', meaning: 'विषय-भोग रूपी हलाहल विष को ही ढूंढता रहता है' },
        { word: 'परमोध (Paramodh)', meaning: 'प्रबोध, ज्ञानोपदेश या सत्संग-शिक्षा' }
      ],
      pb: [
        { word: 'ਅਮੀ ਨ ਭਾਵਈ', meaning: 'ਅੰਮ੍ਰਿਤ ਚੰਗਾ ਨਹੀਂ ਲੱਗਦਾ' },
        { word: 'ਵਿਸ਼', meaning: 'ਜ਼ਹਿਰ' },
        { word: 'ਪਰਮੋਧ', meaning: 'ਉਪਦੇਸ਼ / ਸਿੱਖਿਆ' }
      ],
      en: [
        { word: 'Amee na bhaavayee', meaning: 'Has no appreciation for the nectar of divine truth' },
        { word: 'Vish ko levai sodh', meaning: 'Constantly hunts for the toxic poison of worldly vices' },
        { word: 'Paramodh', meaning: 'Spiritual counsel, preaching, and awakened guidance' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सत्संग के अमृत को छोड़कर विषय-भोग के विष की ओर आकर्षित होता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਸਤਿਸੰਗ ਛੱਡ ਕੇ ਵਿਕਾਰਾਂ ਵੱਲ ਜਾਂਦਾ ਹੈ?'),
      en: 'Does my mind ignore the divine nectar of Satsang while chasing the poisonous mirage of carnal indulgence?'
    },
    practicalApplication: {
      hi: 'कुबुद्धि का त्याग करें; सत्संग के उपदेशों को केवल सुनें नहीं, बल्कि आचरण में ढालें।',
      pb: devanagariToGurmukhi('ਖੋਟੀ ਮੱਤ ਛੱਡ ਕੇ ਗੁਰੂ ਦੇ ਬਚਨ ਕਮਾਓ।'),
      en: 'Shed perversity of mind; do not merely listen to holy teachings, but embody them in daily conduct.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी कुबुद्धि को नष्ट कर मुझे अपने पावन ज्ञान-अमृत का रसिया बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਖੋਟੀ ਮੱਤ ਦੂਰ ਕਰਕੇ ਅੰਮ੍ਰਿਤ ਨਾਮ ਦੀ ਪ੍ਰੀਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Eradicate my crooked intellect and instill in my heart a pure thirst for the nectar of Truth.'
    },
    quiz: []
  },
  {
    id: 'kaam-9',
    number: 1512,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ९',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੯',
      en: 'Kaam Ko Ang - 9',
    },
    text: {
      hi: 'काम कहर असवार है, सबको मारै धाय।\nकोई एक हरिजन ऊबरा, जाके नाम सहाय।।',
      pb: devanagariToGurmukhi('काम कहर असवार है, सबको मारै धाय। कोई एक हरिजन ऊबरा, जाके नाम सहाय।।'),
      en: 'Kaam kahar asvaar hai, sabko maarai dhaay. Koyee ek harijan oobaraa, jaake naam sahaay..'
    },
    transliteration: 'Kaam kahar aswaar hai, sabko maarai dhaay. Koi ek harijan oobra, jaake naam sahaay.',
    bhavarth: {
      hi: 'यह काम-वासना रूपी प्रबल राक्षस सबके सिर पर सवार है और सबको दौड़-दौड़कर, भरमाकर मार रहा है। इससे तो सद्गुरु का कोई प्रिय-भक्त ही बच पाता है, जिसे सद्गुरु के नाम-ज्ञान का सहारा प्राप्त हो, अर्थात जिसने श्रद्धा-भाव से भक्ति-साधना की हो।',
      pb: devanagariToGurmukhi('ਕਾਮ ਦਾ ਕਹਿਰ ਸਭ ਉੱਤੇ ਸਵਾਰ ਹੈ ਅਤੇ ਇਹ ਸਭ ਨੂੰ ਦੌੜ-ਦੌੜ ਕੇ ਮਾਰ ਰਿਹਾ ਹੈ। ਇਸ ਤੋਂ ਸਿਰਫ਼ ਉਹੀ ਸੱਚਾ ਭਗਤ ਬਚਦਾ ਹੈ ਜਿਸਦਾ ਸਹਾਰਾ ਸਤਿਗੁਰੂ ਦਾ ਨਾਮ ਹੈ।'),
      en: 'Lust rides furiously like a wrathful horseman, hunting down and destroying mortals everywhere. Only a rare devotee of the Divine escapes its wrath—one who is anchored in the impenetrable fortress of the Satguru’s Holy Name.'
    },
    wordMeanings: {
      hi: [
        { word: 'कहर असवार (Kahar asvaar)', meaning: 'विनाशकारी क्रूर घुड़सवार की भांति सवार' },
        { word: 'धाय (Dhaay)', meaning: 'दौड़कर, झपटकर या वेगपूर्वक' },
        { word: 'ऊबरा (Oobaraa)', meaning: 'बच निकला, मुक्त हो गया' },
        { word: 'नाम सहाय (Naam sahaay)', meaning: 'सत्यनाम व गुरु-कृपा का अवलंब' }
      ],
      pb: [
        { word: 'ਕਹਰ ਅਸਵਾਰ', meaning: 'ਜ਼ਾਲਮ ਘੁੜਸਵਾਰ ਵਾਂਗ ਸਵਾਰ' },
        { word: 'ਊਬਰਾ', meaning: 'ਬਚ ਨਿਕਲਿਆ' },
        { word: 'ਨਾਮ ਸਹਾਯ', meaning: 'ਨਾਮ ਦਾ ਆਸਰਾ' }
      ],
      en: [
        { word: 'Kahar asvaar', meaning: 'A catastrophic rider mounted fiercely on the soul' },
        { word: 'Dhaay', meaning: 'Charging swiftly to strike and slaughter' },
        { word: 'Oobaraa', meaning: 'Rescued, survived, delivered from destruction' },
        { word: 'Naam sahaay', meaning: 'Protected by the shield of the Satguru’s Holy Name' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे पास काम के भयंकर आक्रमण से बचने के लिए सद्गुरु के नाम का सच्चा कवच है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਕੋਲ ਕਾਮ ਦੇ ਹਮਲੇ ਤੋਂ ਬਚਣ ਲਈ ਨਾਮ ਦਾ ਸਹਾਰਾ ਹੈ?'),
      en: 'Do I possess the invincible shield of the Satguru’s Holy Name to withstand the fierce assault of lust?'
    },
    practicalApplication: {
      hi: 'जब भी काम-विकार मन में उठे, तत्काल नाम-स्मरण और गुरु-ध्यान की शरण लें।',
      pb: devanagariToGurmukhi('ਵਿਕਾਰ ਆਉਣ \'ਤੇ ਤੁਰੰਤ ਨਾਮ ਸਿਮਰੋ।'),
      en: 'The moment carnal thoughts arise, immediately seek refuge in continuous remembrance of the Holy Name.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! काम के इस कहर से मेरी रक्षा कीजिए और अपने पावन नाम को मेरा एकमात्र सहायक बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ ਦੇ ਕਹਿਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Protect me from the fury of lust and let Your Holy Name be my eternal sanctuary.'
    },
    quiz: []
  },
  {
    id: 'kaam-10',
    number: 1513,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १०',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੦',
      en: 'Kaam Ko Ang - 10',
    },
    text: {
      hi: 'भग भोगै भग ऊपजै, भगते बचै न कोय।\nकहैं कबीर भगते बचै, भक्त कहावै सोय।।',
      pb: devanagariToGurmukhi('भग भोगै भग ऊपजै, भगते बचै न कोय। कहैं कबीर भगते बचै, भक्त कहावै सोय।।'),
      en: 'Bhag bhogai bhag oopjai, bhagte bachai na koy. Kahain Kabeer bhagte bachai, bhakt kahaavai soy..'
    },
    transliteration: 'Bhag bhogai bhag oopjai, bhagte bachai na koy. Kahain Kabeer bhagte bachai, bhakt kahaavai soy.',
    bhavarth: {
      hi: 'जिस प्रकार काम-वासना को भोगा जाता है, उसी प्रकार फिर काम-वासना द्वारा जन्म धारण करना पड़ता है। इस विषय-भोग के जन्म-मरण से कोई बच नहीं पाता। कबीरजी कहते हैं कि जो विषय-वासना से बचता है, वही श्रेष्ठ परम भक्त कहलाता है।',
      pb: devanagariToGurmukhi('ਜਿਵੇਂ ਕਾਮ-ਵਾਸਨਾ ਭੋਗੀ ਜਾਂਦੀ ਹੈ, ਉਸੇ ਤਰ੍ਹਾਂ ਫਿਰ ਜਨਮ-ਮਰਨ ਦੇ ਚੱਕਰ ਵਿੱਚ ਪੈਣਾ ਪੈਂਦਾ ਹੈ। ਇਸ ਤੋਂ ਕੋਈ ਬਚ ਨਹੀਂ ਸਕਦਾ। ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜੋ ਇਸ ਵਾਸਨਾ ਤੋਂ ਬਚ ਜਾਵੇ, ਉਹੀ ਅਸਲੀ ਭਗਤ ਹੈ।'),
      en: 'Indulging in carnal desires perpetuates the endless wheel of rebirth through the womb. None can escape the cycle of transmigration through sensory indulgence. Kabir declares that only one who transcends carnal passion is truly worthy of being called a true devotee (Bhakt).'
    },
    wordMeanings: {
      hi: [
        { word: 'भग भोगै (Bhag bhogai)', meaning: 'काम-वासना व योनि-सुख में लिप्त होना' },
        { word: 'भग ऊपजै (Bhag oopjai)', meaning: 'पुनः गर्भ में जन्म लेना व चौरासी में भटकना' },
        { word: 'भक्त कहावै सोय (Bhakt kahaavai soy)', meaning: 'वही वास्तविक निष्कलंक भक्त कहलाता है' }
      ],
      pb: [
        { word: 'ਭੋਗੈ', meaning: 'ਵਾਸਨਾ ਵਿੱਚ ਫਸਣਾ' },
        { word: 'ਊਪਜੈ', meaning: 'ਦੁਬਾਰਾ ਜਨਮ ਲੈਣਾ' },
        { word: 'ਭਗਤ ਕਹਾਵੈ', meaning: 'ਸੱਚਾ ਭਗਤ ਅਖਵਾਉਂਦਾ ਹੈ' }
      ],
      en: [
        { word: 'Bhag bhogai', meaning: 'Indulging in carnal and sensual desires' },
        { word: 'Bhag oopjai', meaning: 'Forced into cyclic rebirth through the womb' },
        { word: 'Bhakt kahaavai soy', meaning: 'He alone is acclaimed as an authentic devotee of the Divine' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं समझ रहा हूँ कि काम-वासना ही बार-बार जन्म और मरण के चक्र का मूल कारण है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਜਾਣਦਾ ਹਾਂ ਕਿ ਕਾਮ ਹੀ ਬਾਰ-ਬਾਰ ਜੰਮਣ-ਮਰਨ ਦਾ ਮੂਲ ਕਾਰਨ ਹੈ?'),
      en: 'Do I realize that carnal attachment is the root cause binding souls to repeated births and deaths?'
    },
    practicalApplication: {
      hi: 'जन्म-मरण के बंधन को काटने के लिए काम-वासना से विरक्त होकर विशुद्ध भक्ति का मार्ग अपनाएं।',
      pb: devanagariToGurmukhi('ਜਨਮ-ਮਰਨ ਕੱਟਣ ਲਈ ਕਾਮ ਤਿਆਗ ਕੇ ਸੱਚੀ ਭਗਤੀ ਕਰੋ।'),
      en: 'Sever the bonds of transmigration by rising above carnal desires into unalloyed devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम-वासना के जन्म-मरण चक्र से छुड़ाकर अपने शाश्वत निज-धाम में स्थान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the cycle of rebirth born of lust and grant me an eternal dwelling in Your Divine Abode.'
    },
    quiz: []
  },
  {
    id: 'kaam-11',
    number: 1514,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - ११',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੧',
      en: 'Kaam Ko Ang - 11',
    },
    text: {
      hi: 'जहां काम तहां नाम नहिं, तहां नाम नहिं काम।\nदोनों कबहू ना मिलै, रवि रजनी इक ठाम।।',
      pb: devanagariToGurmukhi('जहां काम तहां नाम नहिं, तहां नाम नहिं काम। दोनों कबहू ना मिलै, रवि रजनी इक ठाम।।'),
      en: 'Jahaan kaam tahaan naam nahin, tahaan naam nahin kaam. Donon kabahoo naa milai, ravi rajnee ik thaam..'
    },
    transliteration: 'Jahan kaam tahan naam nahin, tahan naam nahin kaam. Donon kabahu na milai, ravi rajni ik thaam.',
    bhavarth: {
      hi: 'जहां काम का वास है अथवा काम की कल्पना है, वहां सद्गुरु का नाम-ज्ञान नहीं हो सकता और जहां सदगुरु-स्वामी का नाम-ज्ञान नहीं, वहीं पर काम का वास है। जिस प्रकार सूर्य और रात्रि एक स्थान पर नहीं रह सकते, उसी प्रकार ये दोनों भी एक साथ नहीं रह सकते।',
      pb: devanagariToGurmukhi('ਜਿੱਥੇ ਕਾਮ-ਵਾਸਨਾ ਹੈ ਉੱਥੇ ਸਤਿਗੁਰੂ ਦਾ ਨਾਮ ਨਹੀਂ ਹੋ ਸਕਦਾ ਅਤੇ ਜਿੱਥੇ ਨਾਮ ਹੈ ਉੱਥੇ ਕਾਮ ਨਹੀਂ ਰਹਿ ਸਕਦਾ। ਜਿਵੇਂ ਸੂਰਜ ਅਤੇ ਰਾਤ ਕਦੇ ਇੱਕ ਥਾਂ ਇਕੱਠੇ ਨਹੀਂ ਹੋ ਸਕਦੇ, ਇਵੇਂ ਇਹ ਦੋਵੇਂ ਇਕੱਠੇ ਨਹੀਂ ਰਹਿ ਸਕਦੇ।'),
      en: 'Where lust resides, the divine Holy Name cannot dwell; and where the Holy Name shines, lust ceases to exist. Just as the blazing sun and pitch-black night can never coexist in the same place, so too can passion and sacred devotion never share the same heart.'
    },
    wordMeanings: {
      hi: [
        { word: 'जहां काम तहां नाम नहिं (Jahaan kaam tahaan naam nahin)', meaning: 'वासना और सत्यनाम परस्पर विरोधी हैं' },
        { word: 'रवि रजनी (Ravi rajnee)', meaning: 'सूर्य और रात्रि' },
        { word: 'इक ठाम (Ik thaam)', meaning: 'एक ही स्थान पर' }
      ],
      pb: [
        { word: 'ਰਵਿ ਰਜਨੀ', meaning: 'ਸੂਰਜ ਅਤੇ ਰਾਤ' },
        { word: 'ਇਕ ਠਾਮ', meaning: 'ਇੱਕੋ ਥਾਂ' }
      ],
      en: [
        { word: 'Jahaan kaam tahaan naam nahin', meaning: 'Lust and the Divine Name are mutually exclusive' },
        { word: 'Ravi rajnee', meaning: 'The sun and the night' },
        { word: 'Ik thaam', meaning: 'In the very same abode / location' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं एक साथ काम और नाम दोनों को साधने का झूठा प्रयास तो नहीं कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕਾਮ ਅਤੇ ਨਾਮ ਦੋਹਾਂ ਨੂੰ ਇੱਕੋ ਵੇਲੇ ਰੱਖਣ ਦਾ ਭਰਮ ਪਾਲ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I harboring the delusion that lust and divine devotion can peacefully coexist within me?'
    },
    practicalApplication: {
      hi: 'हृदय से काम-वासना के अंधकार को पूरी तरह निकालें ताकि सत्यनाम का सूर्य उदित हो सके।',
      pb: devanagariToGurmukhi('ਕਾਮ ਦਾ ਹਨੇਰਾ ਕੱਢੋ ਤਾਂ ਜੋ ਨਾਮ ਦਾ ਸੂਰਜ ਚੜ੍ਹੇ।'),
      en: 'Banish the darkness of carnal thoughts entirely so the radiant sun of the Holy Name can dawn in your soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे हृदय में नाम का ऐसा सूर्य प्रकाशित कीजिए जिससे काम की रात्रि सदा के लिए मिट जाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਅੰਦਰ ਨਾਮ ਦਾ ਸੂਰਜ ਜਗਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Ignite the blazing sun of Your Holy Name in my heart to dispel the night of lust forever.'
    },
    quiz: []
  },
  {
    id: 'kaam-12',
    number: 1515,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १२',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੨',
      en: 'Kaam Ko Ang - 12',
    },
    text: {
      hi: 'तन मन लज्जा ना रहे, काम बान उर साल।\nएक काम सब वश किए, सुर नर मुनि बेहाल।।',
      pb: devanagariToGurmukhi('तन मन लज्जा ना रहे, काम बान उर साल। एक काम सब वश किए, सुर नर मुनि बेहाल।।'),
      en: 'Tan man lajjaa naa rahe, kaam baan ur saal. Ek kaam sab vash kiye, sur nar muni behaal..'
    },
    transliteration: 'Tan man lajja na rahe, kaam baan ur saal. Ek kaam sab vash kiye, sur nar muni behaal.',
    bhavarth: {
      hi: 'जिसके हृदय को काम-वासना के बाणों ने घायल कर डाला हो, उस पीड़ित व्यक्ति को तन-मन की भी लज्जा नहीं रहती। वह कामातुर हो जाता है। इस एक प्रबल काम ने सभी को अपने वशीभूत कर रखा है और उससे देवता, असुर, मनुष्य यहां तक कि मुनि भी बहुत व्याकुल रहते हैं।',
      pb: devanagariToGurmukhi('ਜਿਸਦੇ ਹਿਰਦੇ ਵਿੱਚ ਕਾਮ ਦਾ ਤੀਰ ਵੱਜਦਾ ਹੈ ਉਸਨੂੰ ਤਨ-ਮਨ ਦੀ ਕੋਈ ਸ਼ਰਮ ਨਹੀਂ ਰਹਿੰਦੀ। ਇਸ ਇਕੱਲੇ ਕਾਮ ਨੇ ਦੇਵਤੇ, ਮਨੁੱਖ ਅਤੇ ਮੁਨੀ ਸਭ ਨੂੰ ਵਿਆਕੁਲ ਤੇ ਬੇਵੱਸ ਕਰ ਰੱਖਿਆ ਹੈ।'),
      en: 'When the piercing arrow of lust strikes the heart, all bodily modesty and mental dignity vanish. This single formidable passion has subjugated all realms, leaving gods, mortals, and great sages utterly helpless and distressed.'
    },
    wordMeanings: {
      hi: [
        { word: 'काम बान (Kaam baan)', meaning: 'काम-वासना रूपी तीक्ष्ण बाण' },
        { word: 'उर साल (Ur saal)', meaning: 'हृदय में चुभना व विदीर्ण करना' },
        { word: 'बेहाल (Behaal)', meaning: 'व्याकुल, असहाय और संकटग्रस्त' }
      ],
      pb: [
        { word: 'ਕਾਮ ਬਾਨ', meaning: 'ਕਾਮ ਦਾ ਤੀਰ' },
        { word: 'ਉਰ ਸਾਲ', meaning: 'ਹਿਰਦੇ ਨੂੰ ਵਿੰਨ੍ਹਣਾ' },
        { word: 'ਬੇਹਾਲ', meaning: 'ਬੇਵੱਸ / ਦੁਖੀ' }
      ],
      en: [
        { word: 'Kaam baan', meaning: 'The sharp, toxic arrow of carnal infatuation' },
        { word: 'Ur saal', meaning: 'Piercing and tormenting the inner heart' },
        { word: 'Behaal', meaning: 'Distressed, agitated, and powerless' }
      ]
    },
    contemplation: {
      hi: 'जब बड़े-बड़े मुनि भी काम-बाण से व्याकुल हो गए, तो क्या मैं सतगुरु के ध्यान का कवच पहनकर सुरक्षित हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਕੋਲ ਕਾਮ ਦੇ ਤੀਰ ਤੋਂ ਬਚਣ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਧਿਆਨ ਦੀ ਢਾਲ ਹੈ?'),
      en: 'When even celebrated sages were struck down by lust’s arrow, am I securely shielded by the armor of the Satguru’s grace?'
    },
    practicalApplication: {
      hi: 'कुदृष्टि और विषय-वार्ता से दूर रहें; सतगुरु के ध्यान-कवच से अपने हृदय को सुरक्षित रखें।',
      pb: devanagariToGurmukhi('ਮਾੜੀ ਸੰਗਤ ਤੋਂ ਬਚੋ ਅਤੇ ਗੁਰੂ-ਧਿਆਨ ਵਿੱਚ ਰਹੋ।'),
      en: 'Avoid impure sights and sensual conversations; protect your heart within the citadel of the Master’s meditation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! काम-बाण के प्रहार से मेरे हृदय की रक्षा कीजिए और मुझे अपने चरणों में अभय दान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ-ਬਾਣ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield my vulnerable heart from the venomous arrows of lust and shelter me at Your divine feet.'
    },
    quiz: []
  },
  {
    id: 'kaam-13',
    number: 1516,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १३',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੩',
      en: 'Kaam Ko Ang - 13',
    },
    text: {
      hi: 'कामी तो निरभय भया, करै न काहूं संक।\nइन्द्री केरे बसि पड़ा, भूगते नरक निसंक।।',
      pb: devanagariToGurmukhi('कामी तो निरभय भया, करै न काहूं संक। इन्द्री केरे बसि पड़ा, भूगते नरक निसंक।।'),
      en: 'Kaamee to nirbhay bhayaa, karai na kaahoon sank. Indree kere basi padaa, bhoogate narak nisank..'
    },
    transliteration: 'Kaami to nirbhay bhaya, karai na kaahu sank. Indri kere basi pada, bhugte narak nisank.',
    bhavarth: {
      hi: 'काम-वासना के वशीभूत हुआ व्यक्ति लज्जाहीन होने पर किसी का भय नहीं खाता, वह निर्भीक हो जाता है। अपने विषय में वह किसी पर कोई शंका भी नहीं करता। वह तो केवल अपनी इंद्रियों के वश में हुआ लोक-परलोक में अनेक प्रकार के कष्ट-रोगों का घोर नरक ही भुगतता रहता है।',
      pb: devanagariToGurmukhi('ਕਾਮ ਵਿੱਚ ਅੰਨ੍ਹਾ ਹੋਇਆ ਮਨੁੱਖ ਬੇਸ਼ਰਮ ਹੋ ਕੇ ਕਿਸੇ ਦਾ ਡਰ ਨਹੀਂ ਮੰਨਦਾ। ਉਹ ਇੰਦਰੀਆਂ ਦੇ ਵੱਸ ਪੈ ਕੇ ਨਿਸੰਕੋਚ ਨਰਕਾਂ ਦੇ ਦੁੱਖ ਅਤੇ ਰੋਗ ਭੋਗਦਾ ਹੈ।'),
      en: 'Subjugated by lust, a person brazenly loses all healthy fear and shame, acting heedlessly without hesitation. Fully enslaved by sensory urges, they inevitably suffer the agony of physical disease and the tortures of spiritual hell.'
    },
    wordMeanings: {
      hi: [
        { word: 'निरभय भया (Nirbhay bhayaa)', meaning: 'लज्जाहीन होकर निर्लज्ज व उद्दंड हो जाना' },
        { word: 'इन्द्री केरे बसि पड़ा (Indree kere basi padaa)', meaning: 'इंद्रिय-वासनाओं का दास बन जाना' },
        { word: 'नरक निसंक (Narak nisank)', meaning: 'निसंदेह घोर नरक व दारुण कष्टों को भोगना' }
      ],
      pb: [
        { word: 'ਨਿਰਭਯ ਭਯਾ', meaning: 'ਬੇਸ਼ਰਮ ਹੋ ਜਾਣਾ' },
        { word: 'ਨਰਕ ਨਿਸੰਕ', meaning: 'ਬਿਨਾਂ ਸ਼ੱਕ ਨਰਕਾਂ ਦੇ ਦੁੱਖ ਝੱਲਣਾ' }
      ],
      en: [
        { word: 'Nirbhay bhayaa', meaning: 'Shamelessly audacious without moral restraint' },
        { word: 'Indree kere basi padaa', meaning: 'Utterly enslaved by physical sensory impulses' },
        { word: 'Narak nisank', meaning: 'Unquestionably suffering the excruciating agonies of hell' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं इंद्रियों की क्षणिक तृप्ति के लिए नरक तुल्य अशांति और रोगों को तो नहीं आमंत्रित कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਇੰਦਰੀਆਂ ਦੇ ਸਵਾਦ ਲਈ ਨਰਕਾਂ ਦੇ ਦੁੱਖ ਸਹੇੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I trading lasting peace and soul-health for momentary sensory indulgence that invites suffering?'
    },
    practicalApplication: {
      hi: 'इंद्रियों के दास बनने के बजाय उनके स्वामी बनें; विवेक और संयम को अपना मार्गदर्शक बनाएं।',
      pb: devanagariToGurmukhi('ਇੰਦਰੀਆਂ ਦੇ ਮਾਲਕ ਬਣੋ, ਗ਼ੁਲਾਮ ਨਹੀਂ।'),
      en: 'Become the sovereign master of your senses rather than their helpless slave.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इंद्रिय-वासनाओं के नरक से निकालकर अपने पावन चरणों का सच्चा संकोच और मर्यादा प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਇੰਦਰੀਆਂ ਦੀ ਗ਼ੁਲਾਮੀ ਤੋਂ ਛੁਡਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the hell of sensory slavery and anchor my soul in divine virtue.'
    },
    quiz: []
  },
  {
    id: 'kaam-14',
    number: 1517,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १४',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੪',
      en: 'Kaam Ko Ang - 14',
    },
    text: {
      hi: 'दीपक सुन्दर देखि करि, जरि जरि मरे पतंग।\nबढ़ी लहर जो विषय की, जरत न मोरै अंग।।',
      pb: devanagariToGurmukhi('दीपक सुन्दर देखि करि, जरि जरि मरे पतंग। बढ़ी लहर जो विषय की, जरत न मोरै अंग।।'),
      en: 'Deepak sundar dekhi kari, jari jari mare patang. Badhee lahar jo vishay kee, jarat na morai ang..'
    },
    transliteration: 'Deepak sundar dekhi kari, jari jari mare patang. Badhi lahar jo vishay ki, jarat na morai ang.',
    bhavarth: {
      hi: 'जलते दीपक की सुंदर-लुभावनी लौ को देखकर, पतंगे जल-जलकर मर जाते हैं। इसी प्रकार विषय-वासना का प्रबल प्रवाह बढ़ जाने पर, काम वासना में डूबे मनुष्य, दारुण कष्ट भोगते हुए भी उस विषय-वासना को नहीं त्यागते।',
      pb: devanagariToGurmukhi('ਦੀਵੇ ਦੀ ਸੋਹਣੀ ਲਾਟ ਵੇਖ ਕੇ ਪਤੰਗਾ ਸੜ-ਸੜ ਕੇ ਮਰ ਜਾਂਦਾ ਹੈ। ਇਵੇਂ ਹੀ ਜਦੋਂ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਦੀ ਲਹਿਰ ਚੜ੍ਹਦੀ ਹੈ ਤਾਂ ਕਾਮੀ ਮਨੁੱਖ ਤੜਫਦਾ ਹੋਇਆ ਵੀ ਆਪਣੇ ਆਪ ਨੂੰ ਪਿੱਛੇ ਨਹੀਂ ਹਟਾਉਂਦਾ।'),
      en: 'Enamored by the alluring flame of a lamp, the moth plunges into the fire and burns to death. In the same manner, when the surge of sensory lust sweeps over a mortal, they persistently burn in its agony without pulling themselves away.'
    },
    wordMeanings: {
      hi: [
        { word: 'जरि जरि मरे पतंग (Jari jari mare patang)', meaning: 'दीपक की लौ में जल-जलकर पतंगों का प्राण त्यागना' },
        { word: 'लहर विषय की (Lahar vishay kee)', meaning: 'काम-वासना व भोगों की तीव्र उत्तेजक तरंग' },
        { word: 'जरत न मोरै अंग (Jarat na morai ang)', meaning: 'जलते हुए भी पीछे नहीं हटता, आसक्ति नहीं छोड़ता' }
      ],
      pb: [
        { word: 'ਜਰਿ ਜਰਿ ਮਰੇ', meaning: 'ਸੜ-ਸੜ ਕੇ ਮਰਨਾ' },
        { word: 'ਜਰਤ ਨ ਮੋਰੈ ਅੰਗ', meaning: 'ਸੜਦਾ ਹੋਇਆ ਵੀ ਪਿੱਛੇ ਨਾ ਹਟਣਾ' }
      ],
      en: [
        { word: 'Jari jari mare patang', meaning: 'The moth burning repeatedly to its doom in the flame' },
        { word: 'Lahar vishay kee', meaning: 'The surging, blinding tide of sensory passions' },
        { word: 'Jarat na morai ang', meaning: 'Refusing to step back even while being scorched alive' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी पतंगे की भांति विषय-सुख के आकर्षक दीपक में जलकर आत्म-विनाश तो नहीं कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਪਤੰਗੇ ਵਾਂਗ ਵਿਕਾਰਾਂ ਦੀ ਅੱਗ ਵਿੱਚ ਸੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I, like a moth, blindly hurling myself into the fatal flame of sensory infatuation?'
    },
    practicalApplication: {
      hi: 'विषयों के क्षणिक आकर्षण से दूर हटें; पतंगे की गलती से सीख लेकर आत्म-कल्याण के मार्ग पर चलें।',
      pb: devanagariToGurmukhi('ਵਿਕਾਰਾਂ ਦੀ ਅੱਗ ਤੋਂ ਆਪਣੇ ਆਪ ਨੂੰ ਪਿੱਛੇ ਮੋੜੋ।'),
      en: 'Step back from tempting sensory fires; learn from the tragedy of the moth and protect your soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे विषय-वासना की अग्नि में पतंगा बनने से बचाकर अपने शीतल प्रेम-सरोवर में स्नान कराइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਾਸਨਾ ਦੀ ਅੱਗ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Save me from burning as a moth in the fire of passion, and immerse my soul in the cool waters of Your divine love.'
    },
    quiz: []
  },
  {
    id: 'kaam-15',
    number: 1518,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १५',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੫',
      en: 'Kaam Ko Ang - 15',
    },
    text: {
      hi: 'भक्ति बिगाड़ी कामिया, इन्द्रिन केरे स्वाद।\nहीरा खोया हाथ सों, जनम गंवाय बाद।।',
      pb: devanagariToGurmukhi('भक्ति बिगाड़ी कामिया, इन्द्रिन केरे स्वाद। हीरा खोया हाथ सों, जनम गंवाय बाद।।'),
      en: 'Bhakti bigaadee kaamiyaa, indrin kere svaad. Heeraa khoyaa haath son, janam ganvaay baad..'
    },
    transliteration: 'Bhakti bigaadi kaamiya, indrin kere swaad. Heera khoya haath son, janam ganwaay baad.',
    bhavarth: {
      hi: 'इंद्रियों की कामासक्ति के कारण विषय-भोगों के स्वाद में पड़कर, मूर्ख-कामी मनुष्यों ने कल्याणमयी भक्ति को ही बिगाड़ दिया। अनमोल ज्ञान रूपी हीरे को खोकर, मनुष्य-जीवन व्यर्थ में ही गंवा दिया, अर्थात जो समय पवित्र सद्ज्ञान को पाने का था, वह विषय-भोगादि में ही गंवा दिया।',
      pb: devanagariToGurmukhi('ਇੰਦਰੀਆਂ ਦੇ ਸਵਾਦ ਵਿੱਚ ਪੈ ਕੇ ਕਾਮੀ ਮਨੁੱਖਾਂ ਨੇ ਅਮੋਲਕ ਭਗਤੀ ਨੂੰ ਵਿਗਾੜ ਦਿੱਤਾ। ਹੱਥੋਂ ਹੀਰਾ ਗਵਾ ਕੇ ਇਹ ਮਨੁੱਖਾ ਜਨਮ ਵਿਅਰਥ ਗੁਆ ਲਿਆ।'),
      en: 'Lured by the petty tastes of the senses, lustful mortals corrupt the purity of sublime devotion. Dropping the priceless diamond of divine realization from their hands, they squander the precious boon of human birth in vain.'
    },
    wordMeanings: {
      hi: [
        { word: 'भक्ति बिगाड़ी (Bhakti bigaadee)', meaning: 'पवित्र भक्ति-साधना को कलंकित व नष्ट कर दिया' },
        { word: 'हीरा खोया हाथ सों (Heeraa khoyaa haath son)', meaning: 'आत्म-ज्ञान और मुक्ति रूपी अमूल्य रत्न हाथ से खो दिया' },
        { word: 'जनम गंवाय बाद (Janam ganvaay baad)', meaning: 'दुर्लभ मानव जन्म को व्यर्थ और निरर्थक गंवा दिया' }
      ],
      pb: [
        { word: 'ਭਗਤੀ ਬਿਗਾੜੀ', meaning: 'ਭਗਤੀ ਦਾ ਨਾਸ ਕਰ ਦਿੱਤਾ' },
        { word: 'ਹੀਰਾ ਖੋਯਾ', meaning: 'ਅਮੋਲਕ ਰਤਨ ਗਵਾਇਆ' },
        { word: 'ਬਾਦ', meaning: 'ਵਿਅਰਥ / ਫ਼ਜ਼ੂਲ' }
      ],
      en: [
        { word: 'Bhakti bigaadee', meaning: 'Corrupted and destroyed the sanctifying power of devotion' },
        { word: 'Heeraa khoyaa haath son', meaning: 'Lost the priceless jewel of self-realization from one’s grasp' },
        { word: 'Janam ganvaay baad', meaning: 'Wasted this rare human birth in absolute futility' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं इंद्रियों के क्षणिक स्वाद के लिए मानव जीवन रूपी अनमोल हीरे को गंवा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਥੋੜ੍ਹੇ ਜਿਹੇ ਸਵਾਦ ਲਈ ਹੀਰੇ ਵਰਗਾ ਜਨਮ ਗਵਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I dropping the diamond of human birth for the fleeting, trivial tastes of the senses?'
    },
    practicalApplication: {
      hi: 'मनुष्य जन्म के मूल्य को समझें; विषय-भोगों के लालच से बचकर समय को भक्ति और ज्ञान-अर्जन में लगाएं।',
      pb: devanagariToGurmukhi('ਮਨੁੱਖਾ ਜਨਮ ਦੇ ਹੀਰੇ ਦੀ ਕਦਰ ਕਰਕੇ ਭਗਤੀ ਕਰੋ।'),
      en: 'Value the diamond of human birth; redirect every precious moment away from sensory indulgence into devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इंद्रियों के तुच्छ स्वाद से बचाकर अपनी पावन भक्ति का अनमोल हीरा प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਭਗਤੀ ਦਾ ਸੱਚਾ ਹੀਰਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the petty pleasures of the senses and endow my soul with the priceless gem of true devotion.'
    },
    quiz: []
  },
  {
    id: 'kaam-16',
    number: 1519,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १६',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੬',
      en: 'Kaam Ko Ang - 16',
    },
    text: {
      hi: 'कामी का गुरु कामिनी, लोभी का गुरु दाम।\nकबीर का गुरु सन्त है, संतन का गुरु राम।।',
      pb: devanagariToGurmukhi('कामी का गुरु कामिनी, लोभी का गुरु दाम। कबीर का गुरु सन्त है, संतन का गुरु राम।।'),
      en: 'Kaamee kaa guru kaaminee, lobhee kaa guru daam. Kabeer kaa guru sant hai, santan kaa guru Raam..'
    },
    transliteration: 'Kaami ka guru kaamini, lobhi ka guru daam. Kabeer ka guru sant hai, santan ka guru Raam.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि काम-वासना में डूबा व्यक्ति कुमार्गी होता है। उसके ऊपर प्रतिक्षण विषयासक्ति छाई रहती है, अतः उसका सब कुछ उसकी भोग्या कामिनी ही होती है। लोभी व्यक्ति प्रतिक्षण धन में ही ध्यान लगाए रहता है, अतः उसका स्वामी धन-संपत्ति (माया) ही है। सामान्य जनों को सदुपदेश यानी ज्ञान प्रदान करने वाले संत ही उनके गुरु हैं तथा भक्ति-ज्ञान से पूर्ण संतों का सद्गुरु अंतर्यामी अविनाशी परमात्मा है, जिसमें वे सदा स्थिर रहते हैं।',
      pb: devanagariToGurmukhi('ਕਾਮੀ ਦਾ ਗੁਰੂ ਕਾਮਣੀ (ਇਸਤਰੀ/ਭੋਗ) ਹੈ, ਲੋਭੀ ਦਾ ਗੁਰੂ ਧਨ-ਦੌਲਤ ਹੈ। ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸਾਡਾ ਗੁਰੂ ਪੂਰਾ ਸੰਤ ਹੈ ਅਤੇ ਸੰਤਾਂ ਦਾ ਗੁਰੂ ਅਕਾਲ ਪੁਰਖ ਪ੍ਰਮਾਤਮਾ ਹੈ।'),
      en: 'For the lustful, their guiding master is carnal infatuation; for the greedy, their deity is money. But Kabir proclaims: my master is the enlightened Saint, and the supreme Master of the Saints is the eternal, omnipresent Lord (Raam).'
    },
    wordMeanings: {
      hi: [
        { word: 'कामिनी (Kaaminee)', meaning: 'काम-वासना का विषय, भोग्या स्त्री / आकर्षण' },
        { word: 'दाम (Daam)', meaning: 'धन, दौलत, रुपया-पैसा' },
        { word: 'कबीर का गुरु सन्त (Kabeer kaa guru sant)', meaning: 'कबीर के गुरु आत्म-ज्ञानी सत्य-सद्गुरु हैं' },
        { word: 'संतन का गुरु राम (Santan kaa guru Raam)', meaning: 'संतों के आराध्य अंतर्यामी पूर्ण ब्रह्म परमात्मा हैं' }
      ],
      pb: [
        { word: 'ਕਾਮਿਨੀ', meaning: 'ਕਾਮ-ਵਾਸਨਾ ਦੀ ਵਸਤੂ' },
        { word: 'ਦਾਮ', meaning: 'ਧਨ-ਦੌਲਤ' },
        { word: 'ਸੰਤਨ ਕਾ ਗੁਰੂ ਰਾਮ', meaning: 'ਸੰਤਾਂ ਦਾ ਗੁਰੂ ਪ੍ਰਮਾਤਮਾ ਹੈ' }
      ],
      en: [
        { word: 'Kaaminee', meaning: 'Object of carnal infatuation and sensual obsession' },
        { word: 'Daam', meaning: 'Money, worldly wealth, currency' },
        { word: 'Kabeer kaa guru sant', meaning: 'Kabir’s master is the enlightened True Saint' },
        { word: 'Santan kaa guru Raam', meaning: 'The Master of the Saints is the Supreme Immanent Lord' }
      ]
    },
    contemplation: {
      hi: 'मेरा वास्तविक गुरु कौन है—काम, धन या फिर सत्य-सद्गुरु?',
      pb: devanagariToGurmukhi('ਮੇਰਾ ਅਸਲੀ ਗੁਰੂ ਕੌਣ ਹੈ—ਕਾਮ, ਧਨ ਜਾਂ ਪੂਰਾ ਸਤਿਗੁਰੂ?'),
      en: 'Who truly governs my mind—carnal passion, wealth, or the enlightened True Master?'
    },
    practicalApplication: {
      hi: 'कामिनी और कंचन की गुलामी छोड़ें; सच्चे संतों की शरण लेकर परमात्मा से नाता जोड़ें।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੀ ਗ਼ੁਲਾਮੀ ਛੱਡ ਕੇ ਪੂਰੇ ਸੰਤਾਂ ਦੀ ਸ਼ਰਨ ਲਵੋ।'),
      en: 'Renounce bondage to lust and wealth; take refuge in the holy Saints to merge with the Divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम और दाम के बंधन से छुड़ाकर संतों और राम के पावन चरणों में सदा के लिए समर्पित कर लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਅਤੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the clutches of lust and money, and unite my heart with the holy Saints and the Divine.'
    },
    quiz: []
  },
  {
    id: 'kaam-17',
    number: 1520,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काम को अंग - १७',
      pb: 'ਕਾਮ ਕੋ ਅੰਗ - ੧੭',
      en: 'Kaam Ko Ang - 17',
    },
    text: {
      hi: 'कामी क्रोधी लालची, इनते भक्ति न होय।\nभक्ति करै कोय सूरमा, जाति बरन कुल खोय।।',
      pb: devanagariToGurmukhi('कामी क्रोधी लालची, इनते भक्ति न होय। भक्ति करै कोय सूरमा, जाति बरन कुल खोय।।'),
      en: 'Kaamee krodhee laalchee, inte bhakti na hoy. Bhakti karai koy soormaa, jaati baran kul khoy..'
    },
    transliteration: 'Kaami krodhi laalchi, inte bhakti na hoy. Bhakti karai koy soorma, jaati baran kul khoy.',
    bhavarth: {
      hi: 'कामुक व्यक्ति विषयों में लवलीन रहता है, क्रोधी आग की भांति जलता-भुनता रहता है तथा लालची प्रतिक्षण धन बटोरने के चक्कर में लगा रहता है। इन तीनों प्रकार के व्यक्तियों से भक्ति नहीं हो सकती, क्योंकि भक्ति संयम-साधना के साथ कोई शूरवीर-परमार्थी पुरुष ही कर सकता है, जो अपनी जाति, वर्ण, कुल-गोत्र आदि के अभिमान का त्याग कर देता है।',
      pb: devanagariToGurmukhi('ਕਾਮੀ, ਕ੍ਰੋਧੀ ਅਤੇ ਲਾਲਚੀ ਮਨੁੱਖਾਂ ਤੋਂ ਸੱਚੀ ਭਗਤੀ ਨਹੀਂ ਹੋ ਸਕਦੀ। ਭਗਤੀ ਕੇਵਲ ਉਹੀ ਸੂਰਮਾ ਕਰਦਾ ਹੈ ਜੋ ਜਾਤ-ਪਾਤ, ਵਰਣ ਅਤੇ ਕੁਲ ਦਾ ਹੰਕਾਰ ਖ਼ਤਮ ਕਰ ਦੇਵੇ।'),
      en: 'Lust, wrath, and greed render true devotion impossible. Divine love can only be practiced by a spiritual warrior (Soorma) who fearlessly obliterates all pride of caste, color, and ancestral lineage.'
    },
    wordMeanings: {
      hi: [
        { word: 'सूरमा (Soormaa)', meaning: 'मन और इंद्रियों को जीतने वाला शूरवीर साधक' },
        { word: 'जाति बरन कुल खोय (Jaati baran kul khoy)', meaning: 'जाति, वर्ण और कुल-मर्यादा के अहंकार का पूर्ण विसर्जन' }
      ],
      pb: [
        { word: 'ਸੂਰਮਾ', meaning: 'ਸੱਚਾ ਜੋਧਾ' },
        { word: 'ਜਾਤਿ ਬਰਨ ਕੁਲ ਖੋਯ', meaning: 'ਹੰਕਾਰ ਮਿਟਾਉਣਾ' }
      ],
      en: [
        { word: 'Soormaa', meaning: 'Heroic spiritual warrior conquering base passions' },
        { word: 'Jaati baran kul khoy', meaning: 'Completely dissolving the conceit of caste, social status, and ancestry' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने भीतर के शूरवीर को जगाकर काम, क्रोध, लोभ और जातीय अहंकार से ऊपर उठने को तैयार हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੂਰਮਾ ਬਣ ਕੇ ਵਿਕਾਰਾਂ ਅਤੇ ਹੰਕਾਰ ਨੂੰ ਜਿੱਤਣ ਲਈ ਤਿਆਰ ਹਾਂ?'),
      en: 'Am I ready to awaken the spiritual warrior within and vanquish lust, wrath, greed, and ego?'
    },
    practicalApplication: {
      hi: 'भक्ति को जीवन का परम ध्येय बनाएं; आंतरिक विकारों और बाह्य अहंकार दोनों पर विजय प्राप्त करें।',
      pb: devanagariToGurmukhi('ਭਗਤੀ ਨੂੰ ਮੁੱਖ ਰੱਖ ਕੇ ਸਾਰੇ ਵਿਕਾਰਾਂ \'ਤੇ ਜਿੱਤ ਪਾਓ।'),
      en: 'Make devotion your supreme life goal; conquer inner vices and external ego through disciplined surrender.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम, क्रोध और लोभ के बंधनों से छुड़ाकर सच्चा शूरवीर-भक्त बना लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚਾ ਸੂਰਮਾ ਭਗਤ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the bonds of passion and greed, and crown my soul with the fearless victory of true devotion.'
    },
    quiz: []
  }
];
