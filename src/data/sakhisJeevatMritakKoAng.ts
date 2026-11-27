import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_JEEVAT_MRITAK_KO_ANG: Sakhi[] = [
  {
    id: 'jeevat-mritak-1',
    number: 1201,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - १',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੧',
      en: 'Jeevat Mritak Ko Ang - 1',
    },
    text: {
      hi: 'जीवन में मरना भला, जो मरि जानै कोय।\nमरना पहिले जो मरै, अजर अमर सो होय।।',
      pb: devanagariToGurmukhi('जीवन में मरना भला, जो मरि जानै कोय। मरना पहिले जो मरै, अजर अमर सो होय।।'),
      en: 'Jeevan mein marna bhala, jo mari janai koy. Marna pahile jo marai, ajar amar so hoy..'
    },
    transliteration: 'Jeevan mein marna bhala, jo mari janai koy. Marna pahile jo marai, ajar amar so hoy.',
    bhavarth: {
      hi: 'जीते-जी ही मरना अच्छा है, यदि कोई मरना जानता हो अर्थात अपनी सभी इच्छाओं-कामनाओं को मार देना अच्छा है। इस प्रकार मरने से पहले ही जो मर लेता है, वह अजर-अमर हो जाता है।',
      pb: devanagariToGurmukhi('ਜਿਊਂਦੇ ਜੀਅ ਹੀ ਮਰਨਾ ਚੰਗਾ ਹੈ ਜੇਕਰ ਕੋਈ ਮਰਨਾ ਜਾਣਦਾ ਹੋਵੇ, ਭਾਵ ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਕਾਮਨਾਵਾਂ ਨੂੰ ਮਾਰ ਦੇਵੇ। ਇਸ ਤਰ੍ਹਾਂ ਮਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜੋ ਮਰ ਜਾਂਦਾ ਹੈ, ਉਹ ਅਜਰ-ਅਮਰ ਹੋ ਜਾਂਦਾ ਹੈ।'),
      en: 'It is noble to die while still alive, if one knows how to die—meaning extinguishing all ego and worldly desires. One who dies before physical death attains immortality.'
    },
    wordMeanings: {
      hi: [
        { word: 'मरि जानै (Mari janai)', meaning: 'जीते-जी अहंकार व वासनाओं का त्याग करना' },
        { word: 'अजर अमर (Ajar amar)', meaning: 'मृत्यु और काल के चक्र से सर्वथा मुक्त' }
      ],
      pb: [
        { word: 'ਮਰਿ ਜਾਨੈ (Mari janai)', meaning: 'ਅਹੰਕਾਰ ਤੇ ਵਾਸਨਾ ਦਾ ਤਿਆਗ' },
        { word: 'ਅਜਰ ਅਮਰ (Ajar amar)', meaning: 'ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਮੁਕਤ' }
      ],
      en: [
        { word: 'Mari janai', meaning: 'Dying to ego and desires' },
        { word: 'Ajar amar', meaning: 'Ageless and immortal' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपनी अहंता और वासनाओं को जीते-जी समाप्त किया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੀ ਹਉਮੈ ਅਤੇ ਵਾਸਨਾਵਾਂ ਨੂੰ ਜਿਊਂਦੇ ਜੀਅ ਮਾਰਿਆ ਹੈ?'),
      en: 'Have I surrendered my worldly ego before physical death approaches?'
    },
    practicalApplication: {
      hi: 'संसार में रहते हुए भी निष्काम और निरहंकार भाव से कर्तव्य निभाएं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹੋਏ ਨਿਸ਼ਕਾਮ ਅਤੇ ਨਿਰਹੰਕਾਰ ਭਾਵ ਨਾਲ ਜੀਵਨ ਬਤੀਤ ਕਰੋ।'),
      en: 'Live in the world with desireless detachment, free from pride.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे जीते-जी अहंकार मिटाने की कला सिखाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਜਿਊਂਦੇ ਜੀਅ ਹਉਮੈ ਮਿਟਾਉਣ ਦੀ ਕਲਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Teach me the art of dissolving the ego while alive.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-2',
    number: 1202,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - २',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੨',
      en: 'Jeevat Mritak Ko Ang - 2',
    },
    text: {
      hi: 'मन को मिरतक देखि के, मति माने विश्वास।\nसाधु तहां लौं भय करे, जौ लौ पिंजर सांस।।',
      pb: devanagariToGurmukhi('मन को मिरतक देखि के, मति माने विश्वास। साधु तहां लौं भय करे, जौ लौ पिंजर सांस।।'),
      en: 'Man ko mirtak dekhi ke, mati mane vishwas. Sadhu tahan laun bhay kare, jau lau pinjar saans..'
    },
    transliteration: 'Man ko mirtak dekhi ke, mati mane vishwas. Sadhu tahan laun bhay kare, jau lau pinjar saans.',
    bhavarth: {
      hi: 'मन को मृतक देखकर, यह विश्वास नहीं करना चाहिए कि वह अब धोखा नहीं देगा, असावधान होने पर वह पुनः चंचल हो सकता है, इसलिए विवेकी संत मन से तब तक भय रखकर सावधान रहते हैं, जब तक शरीर में श्वास रहता है।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਮਰਿਆ ਹੋਇਆ ਵੇਖ ਕੇ ਭਰੋਸਾ ਨਾ ਕਰੋ। ਬੇਧਿਆਨੀ ਹੋਣ ਤੇ ਇਹ ਮੁੜ ਜਾਗ ਸਕਦਾ ਹੈ, ਇਸ ਲਈ ਸੰਤ ਆਖਰੀ ਸਾਹ ਤੱਕ ਸੁਚੇਤ ਰਹਿੰਦੇ ਹਨ।'),
      en: 'Do not trust the mind just because it seems subdued; upon negligence it awakens again. Wise saints remain vigilantly watchful as long as breath remains in the body.'
    },
    wordMeanings: {
      hi: [
        { word: 'मिरतक (Mirtak)', meaning: 'मृत / शांत / दबा हुआ मन' },
        { word: 'पिंजर सांस (Pinjar saans)', meaning: 'शरीर में प्राण या श्वास' }
      ],
      pb: [
        { word: 'ਮਿਰਤਕ (Mirtak)', meaning: 'ਮਰਿਆ ਹੋਇਆ ਜਾਂ ਸ਼ਾਂਤ ਮਨ' },
        { word: 'ਪਿੰਜਰ ਸਾਂਸ (Pinjar saans)', meaning: 'ਸਰੀਰ ਵਿੱਚ ਸਵਾਸ' }
      ],
      en: [
        { word: 'Mirtak', meaning: 'Dead or subdued mind' },
        { word: 'Pinjar saans', meaning: 'Breath in the body vessel' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन की शांति पर अति-विश्वास करके असावधान तो नहीं हो गया?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਉੱਤੇ ਭਰੋਸਾ ਕਰਕੇ ਅਵੇਸਲਾ ਤਾਂ ਨਹੀਂ ਹੋ ਗਿਆ?'),
      en: 'Am I overly confident about controlling my mind, risking negligence?'
    },
    practicalApplication: {
      hi: 'हर समय सजग व साक्षी भाव में रहकर मन के विकारों पर दृष्टि रखें।',
      pb: devanagariToGurmukhi('ਹਰ ਵੇਲੇ ਜਾਗਰੂਕ ਰਹਿ ਕੇ ਮਨ ਦੇ ਸੰਕਲਪਾਂ ਨੂੰ ਵੇਖੋ।'),
      en: 'Stay continually mindful and watchful of the mind’s subtle fluctuations.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे निरंतर मन की चंचलता से सावधान रखें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਦਾ ਮਨ ਦੀਆਂ ਚਾਲਾਂ ਤੋਂ ਸੁਚੇਤ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Keep me ever alert to the deceptive tricks of the mind.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-3',
    number: 1203,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ३',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੩',
      en: 'Jeevat Mritak Ko Ang - 3',
    },
    text: {
      hi: 'जब लग आश शरीर की, मिरतक हुआ न जाय।\nकाया माया मन तजै, चौड़े रहा बजाय।।',
      pb: devanagariToGurmukhi('जब लग आश शरीर की, मिरतक हुआ न जाय। काया माया मन तजै, चौड़े रहा बजाय।।'),
      en: 'Jab lag aash shareer ki, mirtak hua na jaay. Kaya maya man tajai, chaude raha bajaay..'
    },
    transliteration: 'Jab lag aash shareer ki, mirtak hua na jaay. Kaya maya man tajai, chaude raha bajaay.',
    bhavarth: {
      hi: 'जब तक शरीर की आशा और आसक्ति है, तब तक कोई जीव मृतक दशा को प्राप्त नहीं हो सकता। यह तो शरीर का मोह और मन की वासना को त्यागकर सत्संग के मैदान में विराजने पर ही सम्भव है।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਤੱਕ ਦੇਹ ਦੀ ਆਸਾ ਤੇ ਮੋਹ ਹੈ, ਓਦੋਂ ਤੱਕ ਮ੍ਰਿਤਕ ਦਸ਼ਾ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੋ ਸਕਦੀ। ਕਾਇਆ-ਮਾਇਆ ਤਿਆਗ ਕੇ ਹੀ ਸੱਚ ਦੇ ਮੈਦਾਨ ਵਿੱਚ ਡਟਿਆ ਜਾ ਸਕਦਾ ਹੈ।'),
      en: 'As long as attachment to the body remains, one cannot attain the state of being dead to the world. Only by discarding body and illusion can one boldly proclaim truth.'
    },
    wordMeanings: {
      hi: [
        { word: 'आश शरीर की (Aash shareer ki)', meaning: 'देह का मोह व शारीरिक सुखों की इच्छा' },
        { word: 'चौड़े रहा बजाय (Chaude raha bajaay)', meaning: 'खुले मैदान में निडर होकर सत्य पर अडिग रहना' }
      ],
      pb: [
        { word: 'ਆਸ ਸਰੀਰ ਕੀ (Aash shareer ki)', meaning: 'ਦੇਹ ਦਾ ਮੋਹ' },
        { word: 'ਚੌੜੇ ਰਹਾ ਬਜਾਇ (Chaude raha bajaay)', meaning: 'ਨਿਡਰ ਹੋ ਕੇ ਸੱਚ ਤੇ ਕਾਇਮ ਰਹਿਣਾ' }
      ],
      en: [
        { word: 'Aash shareer ki', meaning: 'Attachment to bodily comforts' },
        { word: 'Chaude raha bajaay', meaning: 'Boldly declaring truth in the open' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन देह और भौतिक पदार्थों के मोह में जकड़ा हुआ है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਦੇਹ ਦੇ ਮੋਹ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹੈ?'),
      en: 'Am I still trapped in excessive attachment to physical comfort?'
    },
    practicalApplication: {
      hi: 'शरीर को केवल प्रभु भक्ति का साधन समझें, आसक्ति का केंद्र नहीं।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਨੂੰ ਕੇਵਲ ਭਗਤੀ ਦਾ ਸਾਧਨ ਸਮਝੋ, ਮੋਹ ਦਾ ਨਹੀਂ।'),
      en: 'Treat the physical form only as an instrument of devotion, not ego.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे देहाध्यास से मुक्त कर आत्म-बोध प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਦੇਹ ਅਭਿਮਾਨ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਤਮ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from bodily attachment and grant soul awareness.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-4',
    number: 1204,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ४',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੪',
      en: 'Jeevat Mritak Ko Ang - 4',
    },
    text: {
      hi: 'जीवत मिरतक होय रहै, तजै खलक की आस।\nरच्छक समरथ सतगुरु, मति दुख पावै दास।।',
      pb: devanagariToGurmukhi('जीवत मिरतक होय रहै, तजै खलक की आस। रच्छक समरथ सतगुरु, मति दुख पावै दास।।'),
      en: 'Jeevat mirtak hoy rahai, tajai khalak ki aas. Rachhak samrath Satguru, mati dukh paavai daas..'
    },
    transliteration: 'Jeevat mirtak hoy rahai, tajai khalak ki aas. Rachhak samrath Satguru, mati dukh paavai daas.',
    bhavarth: {
      hi: 'संसार की आशा त्यागकर, जीते-जी मर जाए (सब अहंकार को त्याग दें)। हे शिष्य! संसार की कामनाओं में पड़कर तू क्यों दुःखी होता है? समर्थ सतगुरु ही तेरे रक्षक हैं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਦੀ ਆਸਾ ਤਿਆਗ ਕੇ ਜਿਊਂਦੇ ਜੀਅ ਮਰ ਜਾਓ। ਹੇ ਸੇਵਕ! ਸੰਸਾਰਕ ਦੁੱਖਾਂ ਵਿੱਚ ਨਾ ਪਓ, ਸਮਰੱਥ ਸਤਿਗੁਰੂ ਹੀ ਤੇਰੇ ਰੱਖਿਅਕ ਹਨ।'),
      en: 'Live dead to the world, renouncing expectations from worldly people. O disciple, do not suffer in earthly desires; the omnipotent Satguru is your supreme protector.'
    },
    wordMeanings: {
      hi: [
        { word: 'खलक की आस (Khalak ki aas)', meaning: 'संसार और सांसारिक लोगों से अपेक्षा' },
        { word: 'रच्छक समरथ (Rachhak samrath)', meaning: 'सर्वसमर्थ रक्षक सतगुरु' }
      ],
      pb: [
        { word: 'ਖਲਕ ਕੀ ਆਸ (Khalak ki aas)', meaning: 'ਸੰਸਾਰ ਤੋਂ ਆਸਾ' },
        { word: 'ਰੱਛਕ ਸਮਰਥ (Rachhak samrath)', meaning: 'ਸਭ ਕੁਝ ਕਰਨ ਯੋਗ ਸਤਿਗੁਰੂ' }
      ],
      en: [
        { word: 'Khalak ki aas', meaning: 'Hopes pinned on worldly beings' },
        { word: 'Rachhak samrath', meaning: 'All-powerful protector Satguru' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी आशा संसार पर टिकी है या सतगुरु की शरण पर?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਆਸ ਸੰਸਾਰ ਉੱਤੇ ਹੈ ਜਾਂ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਤੇ?'),
      en: 'Are my hopes anchored in temporal mortals or the all-capable Satguru?'
    },
    practicalApplication: {
      hi: 'संसार से अपेक्षाएं समाप्त कर संपूर्ण समर्पण सतगुरु के चरणों में करें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰਕ ਆਸ ਛੱਡ ਕੇ ਪੂਰਨ ਸਮਰਪਣ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਕਰੋ।'),
      en: 'Release worldly expectations and surrender wholly to the Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे समर्थ सतगुरु! आप ही मेरे सच्चे रक्षक हैं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਮਰੱਥ ਸਤਿਗੁਰੂ! ਤੁਸੀਂ ਹੀ ਮੇਰੇ ਸੱਚੇ ਰੱਖਿਅਕ ਹੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O all-powerful Satguru! You alone are my eternal protector.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-5',
    number: 1205,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ५',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੫',
      en: 'Jeevat Mritak Ko Ang - 5',
    },
    text: {
      hi: 'पांचों इन्द्रिय छठा मन, सम संगत सूचंत।\nकहैं कबीर जग क्या करे, सातों गांठ निश्चिन्त।।',
      pb: devanagariToGurmukhi('पांचों इन्द्रिय छठा मन, सम संगत सूचंत। कहैं कबीर जग क्या करे, सातों गांठ निश्चिन्त।।'),
      en: 'Panchon indriya chhatha man, sam sangat soochant. Kahain Kabir jag kya kare, saaton ganth nishchint..'
    },
    transliteration: 'Panchon indriya chhatha man, sam sangat soochant. Kahain Kabir jag kya kare, saaton ganth nishchint.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि आंख, नाक, कान, जिह्वा तथा त्वचा इन पांचों ज्ञानेंद्रियों तथा छठे मन को सातवें सत्य चेतन स्वरूप में जिन्होंने स्वयं को जोड़ लिया है, ऐसे स्वरूपरत विवेकी को मन वासना रूपी यमराज क्या करेगा, उपर्युक्त सातों गांठें निश्चित हैं।',
      pb: devanagariToGurmukhi('ਪੰਜ ਇੰਦਰੀਆਂ ਅਤੇ ਛੇਵਾਂ ਮਨ, ਜਿਨ੍ਹਾਂ ਨੇ ਸਤਿਸੰਗ ਅਤੇ ਆਤਮ-ਸਰੂਪ ਵਿੱਚ ਜੋੜ ਲਏ, ਸੰਸਾਰ ਉਹਨਾਂ ਦਾ ਕੀ ਵਿਗਾੜ ਸਕਦਾ ਹੈ? ਉਹ ਸਦਾ ਨਿਸ਼ਚਿੰਤ ਰਹਿੰਦੇ ਹਨ।'),
      en: 'Satguru Kabir Saheb proclaims: one who unifies the five senses and the sixth element—the mind—into the seventh supreme consciousness, what harm can the world do to them? All knots of bondage are undone.'
    },
    wordMeanings: {
      hi: [
        { word: 'सम संगत (Sam sangat)', meaning: 'सत्य स्वरूप व सत्संग में एकाग्रता' },
        { word: 'सातों गांठ (Saaton ganth)', meaning: 'पांच इंद्रियां, मन व अहंकार के समस्त बंधन' }
      ],
      pb: [
        { word: 'ਸਮ ਸੰਗਤ (Sam sangat)', meaning: 'ਸਤਿਸੰਗ ਅਤੇ ਸਮਤਾ' },
        { word: 'ਸਾਤੋਂ ਗਾਂਠ (Saaton ganth)', meaning: 'ਸਮਸਤ ਮੋਹ ਦੇ ਬੰਧਨ' }
      ],
      en: [
        { word: 'Sam sangat', meaning: 'Equanimous union in Truth' },
        { word: 'Saaton ganth', meaning: 'Knots of five senses, mind, and ego' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी इंद्रियां और मन परमात्मा के सत्य स्वरूप में लीन हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀਆਂ ਇੰਦਰੀਆਂ ਅਤੇ ਮਨ ਪ੍ਰਭੂ ਦੇ ਸੱਚ ਵਿੱਚ ਲੀਨ ਹਨ?'),
      en: 'Are my senses and mind unified in the tranquility of pure consciousness?'
    },
    practicalApplication: {
      hi: 'इंद्रियों के भटकाव को रोककर अपनी सुरति को सत्यनाम में स्थिर करें।',
      pb: devanagariToGurmukhi('ਇੰਦਰੀਆਂ ਦੇ ਭਟਕਾਵ ਨੂੰ ਰੋਕ ਕੇ ਸੁਰਤਿ ਨੂੰ ਸਤਯਨਾਮ ਵਿੱਚ ਟਿਕਾਓ।'),
      en: 'Restrain outer wandering of senses and anchor awareness in Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी इंद्रियों और मन को अपने पावन शब्द में जोड़ लें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਇੰਦਰੀਆਂ ਤੇ ਮਨ ਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜ ਲਵੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Unite my mind and senses in Your eternal Word.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-6',
    number: 1206,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ६',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੬',
      en: 'Jeevat Mritak Ko Ang - 6',
    },
    text: {
      hi: 'भक्त मरे क्या रोइये, जो अपने घर जाय।\nरोइये साकट बापुरे, हाटों हाट बिकाय।।',
      pb: devanagariToGurmukhi('भक्त मरे क्या रोइये, जो अपने घर जाय। रोइये साकट बापुरे, हाटों हाट बिकाय।।'),
      en: 'Bhakt mare kya roiye, jo apne ghar jaay. Roiye saakat baapure, haaton haat bikaay..'
    },
    transliteration: 'Bhakt mare kya roiye, jo apne ghar jaay. Roiye saakat baapure, haaton haat bikaay.',
    bhavarth: {
      hi: 'जिसने अपने कल्याण रूपी अविनाशी घर को प्राप्त कर लिया, ऐसे संत भक्त के शरीर त्यागने पर क्यों विलाप करते हो? बेचारे अभक्त-अज्ञानियों के मरने पर रोओ, जो मरकर पुनः चौरासी के बाजार में बिकने जा रहे हैं।',
      pb: devanagariToGurmukhi('ਭਗਤ ਦੇ ਮਰਨ ਤੇ ਕਿਉਂ ਰੋਂਦੇ ਹੋ ਜੋ ਆਪਣੇ ਅਸਲ ਅਮਰ ਘਰ ਚਲਾ ਗਿਆ? ਰੋਣਾ ਹੈ ਤਾਂ ਉਸ ਸਾਕਤ-ਅਗਿਆਨੀ ਲਈ ਰੋਵੋ ਜੋ ਮੁੜ ਚੌਰਾਸੀ ਦੇ ਬਜ਼ਾਰ ਵਿੱਚ ਵਿਕਣ ਜਾ ਰਿਹਾ ਹੈ।'),
      en: 'Why weep when a true devotee departs, for they return to their eternal home? Weep instead for the worldly materialist, who departs only to be sold again in the marketplace of 84 lakh rebirths.'
    },
    wordMeanings: {
      hi: [
        { word: 'अपने घर जाय (Apne ghar jaay)', meaning: 'अमरलोक / निज धाम की प्राप्ति' },
        { word: 'साकट बापुरे (Saakat baapure)', meaning: 'ईश्वर-विमुख अज्ञानी जीव' },
        { word: 'हाटों हाट बिकाय (Haaton haat bikaay)', meaning: 'चौरासी लाख योनियों में भटकना' }
      ],
      pb: [
        { word: 'ਆਪਣੇ ਘਰ (Apne ghar)', meaning: 'ਸੱਚਾ ਨਿਜ ਧਾਮ' },
        { word: 'ਸਾਕਤ ਬਾਪੁਰੇ (Saakat baapure)', meaning: 'ਰੱਬ ਤੋਂ ਬੇਮੁਖ ਅਗਿਆਨੀ' }
      ],
      en: [
        { word: 'Apne ghar jaay', meaning: 'Returning to eternal divine abode' },
        { word: 'Saakat baapure', meaning: 'The pitiable worldly materialist' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा लक्ष्य आवागमन से छूटकर अपने निज अविनाशी धाम पहुंचना है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨੋਰਥ ਚੌਰਾਸੀ ਤੋਂ ਛੁੱਟ ਕੇ ਨਿਜ ਘਰ ਪਹੁੰਚਣਾ ਹੈ?'),
      en: 'Is my sole spiritual goal returning to my pristine spiritual home?'
    },
    practicalApplication: {
      hi: 'संसार के जन्म-मरण के भय को त्यागकर सत्य भक्ति में लीन रहें।',
      pb: devanagariToGurmukhi('ਜਨਮ-ਮਰਨ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸੱਚੀ ਭਗਤੀ ਕਰੋ।'),
      en: 'Live fearlessly in divine devotion, overcoming fear of birth and death.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे चौरासी के चक्र से निकालकर निज धाम में स्थान दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਚੌਰਾਸੀ ਤੋਂ ਬਚਾ ਕੇ ਨਿਜ ਧਾਮ ਦੀ ਓਟ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the cycle of rebirths to Your eternal home.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-7',
    number: 1207,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ७',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੭',
      en: 'Jeevat Mritak Ko Ang - 7',
    },
    text: {
      hi: 'अजहूं तेरा सब मिटै, जो जग मानै हार।\nघर में झगरा होत है, सो घर डारो जार।।',
      pb: devanagariToGurmukhi('अजहूं तेरा सब मिटै, जो जग मानै हार। घर में झगरा होत है, सो घर डारो जार।।'),
      en: 'Ajahun tera sab mitai, jo jag maanai haar. Ghar mein jhagra hot hai, so ghar daaro jaar..'
    },
    transliteration: 'Ajahun tera sab mitai, jo jag maanai haar. Ghar mein jhagra hot hai, so ghar daaro jaar.',
    bhavarth: {
      hi: 'आज तेरा भी संकट मिट सकता है, यदि संसार से हार मानकर निराभिमानी हो जाए। तुम्हारे अहंकार रूपी घर में जो काम-क्रोधादि का झगड़ा हो रहा है, उसे ज्ञान की अग्नि से जला डालो।',
      pb: devanagariToGurmukhi('ਅੱਜ ਵੀ ਤੇਰੇ ਸਾਰੇ ਕਲੇਸ਼ ਮਿਟ ਸਕਦੇ ਹਨ ਜੇ ਤੂੰ ਸੰਸਾਰ ਅੱਗੇ ਹੰਕਾਰ ਛੱਡ ਕੇ ਹਾਰ ਮੰਨ ਲਵੇਂ। ਜਿਸ ਘਰ ਵਿੱਚ ਕਾਮ-ਕ੍ਰੋਧ ਦਾ ਝਗੜਾ ਹੈ, ਉਸ ਹਉਮੈ ਦੇ ਘਰ ਨੂੰ ਗਿਆਨ ਦੀ ਅੱਗ ਨਾਲ ਸਾੜ ਦੇ।'),
      en: 'Even today all your distress can vanish if you accept defeat to the world and let go of ego. The inner house where passions quarrel—burn that house of pride with wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'मानै हार (Maanai haar)', meaning: 'अहंकार और स्पर्धा का त्याग करना' },
        { word: 'डारो जार (Daaro jaar)', meaning: 'ज्ञान की अग्नि में भस्म कर देना' }
      ],
      pb: [
        { word: 'ਮਾਨੈ ਹਾਰ (Maanai haar)', meaning: 'ਹਉਮੈ ਛੱਡਣਾ' },
        { word: 'ਡਾਰੋ ਜਾਰ (Daaro jaar)', meaning: 'ਸਾੜ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Maanai haar', meaning: 'Accepting humility, dropping rivalry' },
        { word: 'Daaro jaar', meaning: 'Incinerate in the fire of spiritual wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने भीतर काम, क्रोध और अहंकार के झगड़े को समाप्त करने को तैयार हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਅੰਦਰੋਂ ਕਾਮ-ਕ੍ਰੋਧ ਦੇ ਝਗੜੇ ਨੂੰ ਖਤਮ ਕਰਨ ਲਈ ਤਿਆਰ ਹਾਂ?'),
      en: 'Am I willing to burn down the burning house of inner conflict and pride?'
    },
    practicalApplication: {
      hi: 'बहस और अहंकार से बचकर क्षमा और विवेक का आश्रय लें।',
      pb: devanagariToGurmukhi('ਬਹਿਸ ਅਤੇ ਹਉਮੈ ਤੋਂ ਬਚ ਕੇ ਨਿਮਰਤਾ ਧਾਰਨ ਕਰੋ।'),
      en: 'Avoid arguments and ego battles; embrace humility and discernment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे भीतर की अहंता को ज्ञान के प्रकाश से भस्म कर दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਹਉਮੈ ਨੂੰ ਗਿਆਨ ਦੇ ਪ੍ਰਕਾਸ਼ ਨਾਲ ਭਸਮ ਕਰ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Burn away my inner ego with the radiant light of wisdom.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-8',
    number: 1208,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ८',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੮',
      en: 'Jeevat Mritak Ko Ang - 8',
    },
    text: {
      hi: 'मैं मेरा घर जालिया, लिया पलीता हाथ।\nजो घर जारो आपना, चलो हमारे साथ।।',
      pb: devanagariToGurmukhi('मैं मेरा घर जालिया, लिया पलीता हाथ। जो घर जारो आपना, चलो हमारे साथ।।'),
      en: 'Main mera ghar jaaliya, liya paleeta haath. Jo ghar jaaro aapna, chalo hamaare saath..'
    },
    transliteration: 'Main mera ghar jaaliya, liya paleeta haath. Jo ghar jaaro aapna, chalo hamaare saath.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि शरीर में जो मैं-मेरापन की अहंता-ममता हो रही है, उसे ज्ञान की आग-बत्ती हाथ में लेकर जला डालो। अपने अहंकार-रूपी घर को जलाकर ही तुम मेरे संगी बन सकते हो।',
      pb: devanagariToGurmukhi('ਮੈਂ ਆਪਣੀ ਹਉਮੈ-ਮਮਤਾ ਦਾ ਘਰ ਗਿਆਨ ਦੀ ਮਸ਼ਾਲ ਲੈ ਕੇ ਸਾੜ ਦਿੱਤਾ ਹੈ। ਜਿਹੜਾ ਆਪਣਾ ਹੰਕਾਰ ਦਾ ਘਰ ਸਾੜ ਸਕਦਾ ਹੈ, ਉਹੀ ਸਾਡੇ ਨਾਲ ਚੱਲੇ।'),
      en: 'Satguru Kabir Saheb proclaims: I have burnt down the house of "I and mine" with the torch of spiritual wisdom in hand. Only one ready to burn their ego-house can walk on this path with me.'
    },
    wordMeanings: {
      hi: [
        { word: 'पलीता (Paleeta)', meaning: 'आग की मशाल / ज्ञान रूपी ज्योति' },
        { word: 'घर जालिया (Ghar jaaliya)', meaning: 'मैं-मेरी की अहंता को जलाकर नष्ट करना' }
      ],
      pb: [
        { word: 'ਪਲੀਤਾ (Paleeta)', meaning: 'ਮਸ਼ਾਲ / ਗਿਆਨ ਦੀ ਜੋਤ' },
        { word: 'ਘਰ ਜਾਲਿਆ (Ghar jaaliya)', meaning: 'ਹਉਮੈ ਦਾ ਨਾਸ਼ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Paleeta', meaning: 'Torch / flame of spiritual awakening' },
        { word: 'Ghar jaaliya', meaning: 'Burnt down the abode of ego' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु के साथ चलने के लिए अपनी मैं-मेरी को त्यागने को तैयार हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਤਿਗੁਰੂ ਦੇ ਮਾਰਗ ਤੇ ਚੱਲਣ ਲਈ ਮੈਂ-ਮੇਰੀ ਛੱਡਣ ਲਈ ਤਿਆਰ ਹਾਂ?'),
      en: 'Am I ready to relinquish all self-centred identity to walk with the Master?'
    },
    practicalApplication: {
      hi: 'अहंकार और स्वार्थ को त्यागकर निःस्वार्थ सेवा और भक्ति करें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਨੂੰ ਤਿਆਗ ਕੇ ਨਿਰਸੁਆਰਥ ਸੇਵਾ ਕਰੋ।'),
      en: 'Relinquish selfishness and dedicate action to selfless service.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे आपके सत्य मार्ग पर चलने की सामर्थ्य दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸੱਚੇ ਮਾਰਗ ਤੇ ਚੱਲਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the courage to walk Your fearless path of truth.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-9',
    number: 1209,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ९',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੯',
      en: 'Jeevat Mritak Ko Ang - 9',
    },
    text: {
      hi: 'मैं जानूं मन मरि गया, मरि के हुआ भूत।\nमूये पीछे उठि लगा, ऐसा मेरा पूत।।',
      pb: devanagariToGurmukhi('मैं जानूं मन मरि गया, मरि के हुआ भूत। मूये पीछे उठि लगा, ऐसा मेरा पूत।।'),
      en: 'Main jaanoon man mari gaya, mari ke hua bhoot. Mooye peechhe uthi laga, aisa mera poot..'
    },
    transliteration: 'Main jaanoon man mari gaya, mari ke hua bhoot. Mooye peechhe uthi laga, aisa mera poot.',
    bhavarth: {
      hi: 'भूलवश मैंने यह जाना था कि मेरा मन मर गया, परंतु वह तो मरकर प्रेत बन मेरे पीछे लगा रहा, ऐसा यह मेरा मन जिद्दी बालक की तरह है।',
      pb: devanagariToGurmukhi('ਮੈਂ ਸੋਚਿਆ ਸੀ ਕਿ ਮਨ ਮਰ ਗਿਆ ਹੈ, ਪਰ ਇਹ ਤਾਂ ਮਰ ਕੇ ਭੂਤ ਬਣ ਕੇ ਮੇਰੇ ਪਿੱਛੇ ਪੈ ਗਿਆ। ਇਹ ਮਨ ਅਜਿਹਾ ਜ਼ਿੱਦੀ ਪੁੱਤਰ ਹੈ।'),
      en: 'I thought my mind was dead, but having died it became a ghost haunting me! Such is this mind, like an obstinate unruly child.'
    },
    wordMeanings: {
      hi: [
        { word: 'मरि के हुआ भूत (Mari ke hua bhoot)', meaning: 'दबकर पुनः सूक्ष्म रूप से विकराल हो जाना' },
        { word: 'ऐसा मेरा पूत (Aisa mera poot)', meaning: 'जिद्दी और हठी मन' }
      ],
      pb: [
        { word: 'ਭੂਤ (Bhoot)', meaning: 'ਪ੍ਰੇਤ / ਸੂਖਮ ਰੂਪ ਵਿੱਚ ਮਗਰ ਪੈਣਾ' },
        { word: 'ਪੂਤ (Poot)', meaning: 'ਜ਼ਿੱਦੀ ਬੱਚਾ' }
      ],
      en: [
        { word: 'Mari ke hua bhoot', meaning: 'Revived as a haunting ghost' },
        { word: 'Aisa mera poot', meaning: 'Like a headstrong stubborn child' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन दबे हुए सूक्ष्म संस्कारों से पुनः मुझे भटकाता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਲੁਕੇ ਹੋਏ ਸੰਸਕਾਰਾਂ ਰਾਹੀਂ ਮੈਨੂੰ ਮੁੜ ਭਟਕਾਉਂਦਾ ਹੈ?'),
      en: 'Does my mind resurface in subtle forms to entrap my awareness?'
    },
    practicalApplication: {
      hi: 'मन को दबाएं नहीं, बल्कि सतगुरु के ज्ञान और नाम सिमरन से रूपांतरित करें।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਦਬਾਓ ਨਾ, ਸਗੋਂ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਨਾਲ ਸ਼ਾਂਤ ਕਰੋ।'),
      en: 'Do not merely suppress the mind; sublimate it through the Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! इस चंचल मन को अपने चरणों में स्थिर कर दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਇਸ ਚੰਚਲ ਮਨ ਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਟਿਕਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor this restless mind eternally in Your grace.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-10',
    number: 1210,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - १०',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੧੦',
      en: 'Jeevat Mritak Ko Ang - 10',
    },
    text: {
      hi: 'शब्द विचारी जो चले, गुरुमुख होय निहाल।\nकाम क्रोध व्यापै नहीं, कबहूं न ग्रासै काल।।',
      pb: devanagariToGurmukhi('शब्द विचारी जो चले, गुरुमुख होय निहाल। काम क्रोध व्यापै नहीं, कबहूं न ग्रासै काल।।'),
      en: 'Shabd vichaari jo chale, gurumukh hoy nihaal. Kaam krodh vyaapai nahin, kabahun na graasai kaal..'
    },
    transliteration: 'Shabd vichaari jo chale, gurumukh hoy nihaal. Kaam krodh vyaapai nahin, kabahun na graasai kaal.',
    bhavarth: {
      hi: 'गुरुमुख शब्दों को विचारकर जो व्यक्ति आचरण करता है, वह कृतार्थ हो जाता है उसको काम-क्रोध जैसे सांसारिक क्लेश नहीं सताते और वह कभी कामनाओं के मोह में नहीं पड़ता।',
      pb: devanagariToGurmukhi('ਜਿਹੜਾ ਗੁਰਮੁਖ ਸ਼ਬਦ ਦਾ ਵਿਚਾਰ ਕਰਕੇ ਚਲਦਾ ਹੈ, ਉਹ ਨਿਹਾਲ ਹੋ ਜਾਂਦਾ ਹੈ। ਕਾਮ-ਕ੍ਰੋਧ ਉਸਨੂੰ ਨਹੀਂ ਸਤਾਉਂਦੇ ਅਤੇ ਕਾਲ ਉਸਨੂੰ ਕਦੇ ਨਹੀਂ ਗ੍ਰਸਦਾ।'),
      en: 'One who walks by contemplating the Satguru’s Word becomes joyous and fulfilled. Lust and wrath can never afflict them, nor can death or Kal ever consume them.'
    },
    wordMeanings: {
      hi: [
        { word: 'शब्द विचारी (Shabd vichaari)', meaning: 'सतगुरु के निर्णय-शब्द का मनन करने वाला' },
        { word: 'गुरुमुख होय निहाल (Gurumukh hoy nihaal)', meaning: 'गुरु-आज्ञाकारी शिष्य जो परमानंद पाता है' },
        { word: 'ग्रासै काल (Graasai kaal)', meaning: 'काल और मृत्यु के गाल में पड़ना' }
      ],
      pb: [
        { word: 'ਸ਼ਬਦ ਵਿਚਾਰੀ (Shabd vichaari)', meaning: 'ਗੁਰਬਾਣੀ ਦਾ ਵਿਚਾਰ ਕਰਨ ਵਾਲਾ' },
        { word: 'ਨਿਹਾਲ (Nihaal)', meaning: 'ਪਰਮ ਅਨੰਦਿਤ' }
      ],
      en: [
        { word: 'Shabd vichaari', meaning: 'One meditating on the sacred Word' },
        { word: 'Hoy nihaal', meaning: 'Attains supreme spiritual bliss' },
        { word: 'Graasai kaal', meaning: 'Devoured by Kal / time' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आचरण सतगुरु के वचनों और शब्द के विचार के अनुसार है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਜੀਵਨ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਅਨੁਸਾਰ ਚੱਲ ਰਿਹਾ ਹੈ?'),
      en: 'Is my daily living aligned with the contemplative wisdom of the Word?'
    },
    practicalApplication: {
      hi: 'दिन-प्रतिदिन के व्यवहार में गुरु-शब्द को मार्गदर्शक बनाएं।',
      pb: devanagariToGurmukhi('ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ ਵਿੱਚ ਗੁਰੂ-ਸ਼ਬਦ ਨੂੰ ਮਾਰਗਦਰਸ਼ਕ ਬਣਾਓ।'),
      en: 'Let the Master’s sacred Word guide every decision and action.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काम-क्रोध से मुक्त कर शब्द में लीन रखें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਮ-ਕ੍ਰੋਧ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from passions and keep me absorbed in the Word.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-11',
    number: 1211,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - ११',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੧੧',
      en: 'Jeevat Mritak Ko Ang - 11',
    },
    text: {
      hi: 'सूर सती का सहज है, घड़ी इक का घमसान।\nमरै न जीवै मरजिवा, धमकत रहे मसान।।',
      pb: devanagariToGurmukhi('सूर सती का सहज है, घड़ी इक का घमसान। मरै न जीवै मरजिवा, धमकत रहे मसान।।'),
      en: 'Soor sati ka sahaj hai, ghadi ik ka ghamsaan. Marai na jeevai marjiwa, dhamkat rahe masaan..'
    },
    transliteration: 'Soor sati ka sahaj hai, ghadi ik ka ghamsaan. Marai na jeevai marjiwa, dhamkat rahe masaan.',
    bhavarth: {
      hi: 'शूरवीर और सती का जीवन-मरण सरल है, एक ही घड़ी का उनका युद्ध है, परंतु मृतक दशा साधक को न मरना है न जीना है, बल्कि काम, क्रोधादि को ज्ञान के श्मशान में रात-दिन जलाकर भस्म करते रहना है।',
      pb: devanagariToGurmukhi('ਸੂਰਬੀਰ ਅਤੇ ਸਤੀ ਦਾ ਜੰਗ ਇੱਕ ਘੜੀ ਦਾ ਹੈ, ਪਰ ਜਿਊਂਦੇ-ਜੀਅ ਮਰਨ ਵਾਲੇ ਸਾਧਕ ਦਾ ਯੁੱਧ ਨਿਰੰਤਰ ਹੈ, ਜਿੱਥੇ ਕਾਮ-ਕ੍ਰੋਧ ਨੂੰ ਗਿਆਨ ਦੇ ਸ਼ਮਸ਼ਾਨ ਵਿੱਚ ਹਰ ਰੋਜ਼ ਸਾੜਨਾ ਪੈਂਦਾ ਹੈ।'),
      en: 'The battle of the warrior or sati is quick, lasting only a brief moment. But the true spiritual seeker who dies while living fights constantly, incinerating passions daily in the cremation ground of wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'घड़ी इक का घमसान (Ghadi ik ka ghamsaan)', meaning: 'क्षण भर का युद्ध या बलिदान' },
        { word: 'मरजिवा (Marjiwa)', meaning: 'जीते-जी वासनाओं को मारने वाला साधक' },
        { word: 'धमकत रहे मसान (Dhamkat rahe masaan)', meaning: 'निरंतर ज्ञान की अग्नि में विकारों को भस्म करना' }
      ],
      pb: [
        { word: 'ਮਰਜੀਵਾ (Marjiwa)', meaning: 'ਜਿਊਂਦੇ ਜੀਅ ਮਰਨ ਵਾਲਾ' },
        { word: 'ਮਸਾਨ (Masaan)', meaning: 'ਗਿਆਨ ਦਾ ਸ਼ਮਸ਼ਾਨ' }
      ],
      en: [
        { word: 'Ghamsaan', meaning: 'Fierce brief clash' },
        { word: 'Marjiwa', meaning: 'One living after dying to self' },
        { word: 'Dhamkat rahe masaan', meaning: 'Constantly burning vices in wisdom’s pyre' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं प्रतिदिन अपने विकारों और वासनाओं से लड़कर उन्हें भस्म कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਿੱਤ ਆਪਣੇ ਵਿਕਾਰਾਂ ਨਾਲ ਲੜ ਕੇ ਉਹਨਾਂ ਨੂੰ ਸਾੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I persevering daily in burning away my inner defects through awareness?'
    },
    practicalApplication: {
      hi: 'आध्यात्मिक साधना को निरंतर बनाए रखें, यह एक दिन की नहीं बल्कि आजीवन की निष्ठा है।',
      pb: devanagariToGurmukhi('ਸਾਧਨਾ ਨੂੰ ਜੀਵਨ ਭਰ ਦਾ ਨਿਰੰਤਰ ਅਭਿਆਸ ਬਣਾਓ।'),
      en: 'Maintain steady spiritual devotion as a lifelong discipline.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे निष्काम साधक बनकर विकारों को जीतने की शक्ति दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਿਕਾਰਾਂ ਨੂੰ ਜਿੱਤਣ ਦਾ ਅਟੁੱਟ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the spiritual strength to conquer all inner vices.'
    },
    quiz: []
  },
  {
    id: 'jeevat-mritak-12',
    number: 1212,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'जीवत मृतक को अंग - १२',
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ - ੧੨',
      en: 'Jeevat Mritak Ko Ang - 12',
    },
    text: {
      hi: 'कबीर मिरतक देखकर, मति धारो विश्वास।\nकबहूं जागै भूत ह्वै, करै पिंड का नाश।।',
      pb: devanagariToGurmukhi('कबीर मिरतक देखकर, मति धारो विश्वास। कबहूं जागै भूत ह्वै, करै पिंड का नाश।।'),
      en: 'Kabir mirtak dekhkar, mati dharo vishwas. Kabahun jaagai bhoot hvai, karai pind ka naash..'
    },
    transliteration: 'Kabir mirtak dekhkar, mati dharo vishwas. Kabahun jaagai bhoot hvai, karai pind ka naash.',
    bhavarth: {
      hi: 'हे साधक! मन को शांत देखकर इस पर विश्वास कर निर्भय मत बनो, अन्यथा वह तुम्हारे परमार्थ में मिलकर जाग्रत होगा और तुम्हें प्रपंच में डालकर पतित कर देगा।',
      pb: devanagariToGurmukhi('ਹੇ ਸਾਧਕ! ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਵੇਖ ਕੇ ਇਸ ਤੇ ਅੰਨ੍ਹਾ ਵਿਸ਼ਵਾਸ ਨਾ ਕਰ, ਨਹੀਂ ਤਾਂ ਇਹ ਮੁੜ ਭੂਤ ਬਣ ਕੇ ਜਾਗੇਗਾ ਅਤੇ ਤੇਰੇ ਅਧਿਆਤਮਿਕ ਜੀਵਨ ਦਾ ਨਾਸ਼ ਕਰ ਦੇਵੇਗਾ।'),
      en: 'O seeker! Do not place blind faith in the mind merely because it appears quiet; at any moment it can awaken like an evil spirit and wreck your spiritual life.'
    },
    wordMeanings: {
      hi: [
        { word: 'मति धारो विश्वास (Mati dharo vishwas)', meaning: 'मन पर कभी अंधा भरोसा न करना' },
        { word: 'पिंड का नाश (Pind ka naash)', meaning: 'साधना व आध्यात्मिक जीवन का विनाश' }
      ],
      pb: [
        { word: 'ਮਤਿ ਧਾਰੋ ਵਿਸ਼ਵਾਸ (Mati dharo vishwas)', meaning: 'ਮਨ ਤੇ ਭਰੋਸਾ ਨਾ ਕਰਨਾ' },
        { word: 'ਪਿੰਡ ਦਾ ਨਾਸ਼ (Pind da naash)', meaning: 'ਸਾਧਨਾ ਦਾ ਨੁਕਸਾਨ' }
      ],
      en: [
        { word: 'Mati dharo vishwas', meaning: 'Never trust the deceptive mind blindly' },
        { word: 'Pind ka naash', meaning: 'Destruction of spiritual attainment' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मन की चालाकियों से हमेशा सावधान रहता हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨ ਦੀਆਂ ਚਾਲਾਕੀਆਂ ਤੋਂ ਸਦਾ ਸੁਚੇਤ ਰਹਿੰਦਾ ਹਾਂ?'),
      en: 'Am I perpetually cautious against the deceptiveness of the mind?'
    },
    practicalApplication: {
      hi: 'हर परिस्थिति में सतगुरु के ज्ञान और नाम स्मरण का सहारा लें।',
      pb: devanagariToGurmukhi('ਹਰ ਹਾਲਤ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਓਟ ਲਓ।'),
      en: 'Rely solely on the Satguru’s guidance and continuous remembrance of Naam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मन के भ्रमजाल से सदा सुरक्षित रखें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਨ ਦੇ ਭਰਮਜਾਲ ਤੋਂ ਸਦਾ ਬਚਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me forever from the illusory snare of the mind.'
    },
    quiz: []
  }
];
