import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_MAN_KO_ANG: Sakhi[] = [
  {
    id: 'man-1',
    number: 1381,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - १',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੧',
      en: 'Man Ko Ang - 1',
    },
    text: {
      hi: 'कबीर यह मन मसखरा, कहूं तो मानै रोस।\nजा मारग साहेब मिलै, तहां न चालै कोस।।',
      pb: devanagariToGurmukhi('कबीर यह मन मसखरा, कहूं तो मानै रोस। जा मारग साहेब मिलै, तहां न चालै कोस।।'),
      en: 'Kabeer yeh man masakhraa, kahoon to maanai ros. Jaa maarag saahib milai, tahaan na chaalai kos..'
    },
    transliteration: 'Kabeer yeh man masakhra, kahoon to maanai ros. Ja maarag saahib milai, tahaan na chaalai kos.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि यह मन तो बहुत ही चुलबुला और मदमस्त है। यदि इसे कुछ समझाने का प्रयत्न करें तो यह बुरा मानता है तथा खिन्न हो उठता है। जिस भक्ति-साधना के मार्ग से अंतर्यामी परमात्मा का साक्षात्कार हो सकता है, उस ओर चलने को यह तैयार ही नहीं होता। मन को जितना जिस ओर से रोकने का प्रयास किया जाता है, यह दुःखी होकर उतना ही उसी ओर जाता है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਮਨ ਬੜਾ ਮਸਖ਼ਰਾ ਤੇ ਚੰਚਲ ਹੈ। ਜੇ ਇਸਨੂੰ ਸਮਝਾਈਏ ਤਾਂ ਗੁੱਸਾ ਕਰਦਾ ਹੈ। ਜਿਸ ਰਾਹ \'ਤੇ ਪ੍ਰਭੂ ਮਿਲਦੇ ਹਨ, ਓਧਰ ਇੱਕ ਕਦਮ ਵੀ ਨਹੀਂ ਤੁਰਦਾ।'),
      en: 'Kabir observes that this mind is a willful jester: admonish it, and it sulks with irritation. Towards the path where the Supreme Lord is realized, it refuses to walk even a single step, ever rebelling against restraint.'
    },
    wordMeanings: {
      hi: [
        { word: 'मसखरा (Masakhraa)', meaning: 'चंचल, नटखट व मनमाना आचरण करने वाला' },
        { word: 'मानै रोस (Maanai ros)', meaning: 'क्रोध या खिन्नता प्रकट करना' },
        { word: 'चालै कोस (Chaalai kos)', meaning: 'एक कोस भी आगे बढ़ना' }
      ],
      pb: [
        { word: 'ਮਸਖ਼ਰਾ (Masakhra)', meaning: 'ਚੰਚਲ ਤੇ ਨਖਰੇਬਾਜ਼' },
        { word: 'ਰੋਸ (Ros)', meaning: 'ਗੁੱਸਾ / ਨਾਰਾਜ਼ਗੀ' }
      ],
      en: [
        { word: 'Masakhraa', meaning: 'Wayward, teasing jester / undisciplined mind' },
        { word: 'Maanai ros', meaning: 'Takes offense, reacts with petulance' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सत्संग और ध्यान के मार्ग पर चलने से कतराता है और विषयों की ओर भागता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਭਗਤੀ ਦੇ ਰਾਹ ਤੋਂ ਭੱਜਦਾ ਹੈ?'),
      en: 'Does my mind resist spiritual discipline while eagerly running after transient sensations?'
    },
    practicalApplication: {
      hi: 'मन की हठधर्मिता को पहचानें; धैर्य और अभ्यास से इसे सतगुरु के नाम-सिमरन में लगाएं।',
      pb: devanagariToGurmukhi('ਧੀਰਜ ਨਾਲ ਮਨ ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'Patiently train the unruly mind through persistent meditation on the holy Name.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे चंचल मसखरे मन को अपने ज्ञान के अंकुश से वश में कर सन्मार्ग पर चलाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਚੰਚਲ ਮਨ ਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Restrain my wayward mind with Your wisdom and steer it toward truth.'
    },
    quiz: []
  },
  {
    id: 'man-2',
    number: 1382,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - २',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੨',
      en: 'Man Ko Ang - 2',
    },
    text: {
      hi: 'कुंभै बांधा जल रहै, जल बिन कुंभ न होय।\nज्ञानै बांधा मन रहै, मन बिनु ज्ञान न होय।।',
      pb: devanagariToGurmukhi('कुंभै बांधा जल रहै, जल बिन कुंभ न होय। ज्ञानै बांधा मन रहै, मन बिनु ज्ञान न होय।।'),
      en: 'Kumbhai baandhaa jal rahai, jal bin kumbh na hoy. Gyaanai baandhaa man rahai, man binu gyaan na hoy..'
    },
    transliteration: 'Kumbhai baandha jal rahai, jal bin kumbh na hoy. Gyaanai baandha man rahai, man binu gyaan na hoy.',
    bhavarth: {
      hi: 'घड़े की दीवारों के होने से ही उसमें जल स्थिर रहता है और जल के बिना केवल मिट्टी से घड़ा भी नहीं बन सकता, अर्थात दोनों के संयोग से ही दोनों हैं। इसी प्रकार यह चंचल मन ज्ञान के बंधन से ही शांत व स्थिर रहता है और इसी मन के बिना ज्ञान भी नहीं होता। संसार में जितना भी ज्ञान-विज्ञान दिखाई पड़ता है, उसका माध्यम यह मन ही है।',
      pb: devanagariToGurmukhi('ਘੜੇ ਦੇ ਸਹਾਰੇ ਹੀ ਪਾਣੀ ਟਿਕਦਾ ਹੈ ਅਤੇ ਪਾਣੀ ਬਿਨਾਂ ਘੜਾ ਨਹੀਂ ਬਣ ਸਕਦਾ। ਇਸੇ ਤਰ੍ਹਾਂ ਗਿਆਨ ਨਾਲ ਹੀ ਮਨ ਟਿਕਦਾ ਹੈ ਅਤੇ ਮਨ ਤੋਂ ਬਿਨਾਂ ਗਿਆਨ ਦੀ ਪ੍ਰਾਪਤੀ ਨਹੀਂ ਹੁੰਦੀ।'),
      en: 'Water is contained only by the earthen pitcher, yet without water the clay pitcher cannot be molded. Similarly, the restless mind is steadied only by spiritual knowledge (Gyan), while without the mind as instrument, knowledge cannot be realized.'
    },
    wordMeanings: {
      hi: [
        { word: 'कुंभै बांधा (Kumbhai baandhaa)', meaning: 'घड़े की परिधि में सुरक्षित व स्थिर' },
        { word: 'ज्ञानै बांधा (Gyaanai baandhaa)', meaning: 'तत्व-ज्ञान और विवेक द्वारा नियंत्रित' }
      ],
      pb: [
        { word: 'ਕੁੰਭ (Kumbh)', meaning: 'ਮਿੱਟੀ ਦਾ ਘੜਾ' },
        { word: 'ਗਿਆਨੈ ਬਾਂਧਾ (Gyaanai baandha)', meaning: 'ਗਿਆਨ ਨਾਲ ਬੱਝਿਆ ਹੋਇਆ' }
      ],
      en: [
        { word: 'Kumbhai baandhaa', meaning: 'Held securely within the clay pot' },
        { word: 'Gyaanai baandhaa', meaning: 'Restrained and stabilized by divine wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सतगुरु के तत्व-ज्ञान के घड़े में स्थिर है, या सांसारिक चंचलता में बह रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਵਿੱਚ ਟਿਕਿਆ ਹੈ?'),
      en: 'Is my mind contained within the vessel of spiritual wisdom, or spilling into restlessness?'
    },
    practicalApplication: {
      hi: 'विवेक और स्वाध्याय द्वारा मन को अनुशासित करें; ज्ञान के आधार से ही मन को एकाग्र बनाएं।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਤੇ ਸਵਾਧਿਆਏ ਨਾਲ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰੋ।'),
      en: 'Discipline the mind through sacred study; let discernment be its guiding vessel.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपने दिव्य ज्ञान के घड़े में मेरे चंचल मन को स्थिर कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਆਪਣੇ ਗਿਆਨ ਨਾਲ ਸ਼ਾਂਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor my fluctuating mind within the steady pitcher of Your divine wisdom.'
    },
    quiz: []
  },
  {
    id: 'man-3',
    number: 1383,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩',
      en: 'Man Ko Ang - 3',
    },
    text: {
      hi: 'मन चलतां तन भी चलै, ताते मन को घेर।\nतन मन दोऊ बसि करै, होय राई सुमेर।।',
      pb: devanagariToGurmukhi('मन चलतां तन भी चलै, ताते मन को घेर। तन मन दोऊ बसि करै, होय राई सुमेर।।'),
      en: 'Man chaltaan tan bhee chalai, taate man ko gher. Tan man do-oo basi karai, hoy raa-ee sumer..'
    },
    transliteration: 'Man chaltaan tan bhee chalai, taate man ko gher. Tan man do-oo basi karai, hoy raa-ee sumer.',
    bhavarth: {
      hi: 'मन से ही तन प्रभावित होता है। जब मन किसी विषय से आकर्षित होकर सक्रिय होता है, तो यह तन भी चलायमान हो जाता है, इसलिए सदैव मन को वश में रखना चाहिए। यदि तन और मन दोनों को वश में कर लिया जाए, तो इस थोड़े-से समय में होने वाली संयम-साधना का परिणाम-लाभ सुमेरु पर्वत के समान पाया जा सकता है।',
      pb: devanagariToGurmukhi('ਮਨ ਚੱਲਣ ਨਾਲ ਸਰੀਰ ਵੀ ਓਧਰ ਹੀ ਤੁਰ ਪੈਂਦਾ ਹੈ, ਇਸ ਲਈ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰੋ। ਜੇਕਰ ਤਨ ਅਤੇ ਮਨ ਦੋਵੇਂ ਵੱਸ ਵਿੱਚ ਹੋ ਜਾਣ, ਤਾਂ ਰਾਈ ਜਿੰਨੀ ਸਾਧਨਾ ਵੀ ਸੁਮੇਰ ਪਰਬਤ ਜਿੱਡਾ ਵੱਡਾ ਫਲ ਦਿੰਦੀ ਹੈ।'),
      en: 'When the mind wanders, the physical senses follow. Therefore encircle and rein in the mind. If both body and mind are mastered, even a mustard-seed of disciplined practice yields mountain-sized (Sumeru) spiritual fruit.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन को घेर (Man ko gher)', meaning: 'मन को चारों ओर से रोककर अंतर्मुखी करना' },
        { word: 'होय राई सुमेर (Hoy raa-ee sumer)', meaning: 'अल्प साधन का भी सुमेरु पर्वत समान महान फल मिलना' }
      ],
      pb: [
        { word: 'ਮਨ ਕੋ ਘੇਰ (Man ko gher)', meaning: 'ਮਨ ਨੂੰ ਰੋਕੋ' },
        { word: 'ਰਾਈ ਸੁਮੇਰ (Raa-ee sumer)', meaning: 'ਛੋਟੀ ਕੋਸ਼ਿਸ਼ ਦਾ ਵੱਡਾ ਫਲ' }
      ],
      en: [
        { word: 'Man ko gher', meaning: 'Encircle and restrain the wandering mind' },
        { word: 'Hoy raa-ee sumer', meaning: 'A tiny mustard-seed effort yields the monumental fruit of Mount Sumeru' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन को विषयों में भटकने से रोककर तन और मन दोनों पर संयम रख रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਤਨ ਤੇ ਮਨ ਦੋਹਾਂ ਨੂੰ ਸੰਜਮ ਵਿੱਚ ਰੱਖ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I checking the impulses of mind and body to reap the immense fruit of spiritual mastery?'
    },
    practicalApplication: {
      hi: 'इंद्रिय संयम और ध्यान के अभ्यास से मन को एकाग्र करें ताकि छोटी साधना भी महान सिद्धि दे सके।',
      pb: devanagariToGurmukhi('ਸੰਜਮ ਤੇ ਧਿਆਨ ਨਾਲ ਮਨ ਨੂੰ ਇਕਾਗਰ ਕਰੋ।'),
      en: 'Master bodily and mental impulses through daily meditation and ethical self-restraint.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे तन और मन दोनों को अपने पावन अनुशासन में स्थिर करने की शक्ति दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਤਨ-ਮਨ ਨੂੰ ਵੱਸ ਵਿੱਚ ਰੱਖਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Empower me to harmonize body and mind under Your divine guidance.'
    },
    quiz: []
  },
  {
    id: 'man-4',
    number: 1384,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪',
      en: 'Man Ko Ang - 4',
    },
    text: {
      hi: 'काया देवल मन धजा, विषय लहर फहराय।\nमन चलते देवल चले, ताका सरबस जाय।।',
      pb: devanagariToGurmukhi('काया देवल मन धजा, विषय लहर फहराय। मन चलते देवल चले, ताका सरबस जाय।।'),
      en: 'Kaayaa deval man dhajaa, vishay lahar fahraay. Man chalte deval chale, taakaa sarbas jaay..'
    },
    transliteration: 'Kaaya deval man dhaja, vishay lahar fahraay. Man chalte deval chale, taaka sarbas jaay.',
    bhavarth: {
      hi: 'यह शरीर मंदिर है। इसके ऊपर उन्मत्त मन की ध्वजा लगी हुई है, जो सांसारिक विषयों की वायु से लहर-लहर फहराती है। इस कारण यह मन चलायमान हो जाता है। फिर मन के साथ ही यह शरीर भी आवेग में आकर चलायमान हो जाता है। इस प्रकार मन के कारण ही जीव का सर्वस्व नष्ट हो जाता है।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਮੰਦਿਰ ਹੈ ਅਤੇ ਮਨ ਉਸ ਉੱਤੇ ਝੰਡਾ ਹੈ, ਜੋ ਵਿਕਾਰਾਂ ਦੀ ਹਵਾ ਨਾਲ ਲਹਿਰਾਉਂਦਾ ਹੈ। ਜਦੋਂ ਮਨ ਡੋਲਦਾ ਹੈ ਤਾਂ ਸਰੀਰ ਵੀ ਡੋਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜੀਵ ਦਾ ਸਭ ਕੁਝ ਲੁੱਟਿਆ ਜਾਂਦਾ ਹੈ।'),
      en: 'The body is a temple and the mind is its fluttering flag, whipped by the winds of sensual desire. When the flag wavers, the entire temple is destabilized, and the soul forfeits its spiritual treasure.'
    },
    wordMeanings: {
      hi: [
        { word: 'देवल (Deval)', meaning: 'मंदिर / देवालय' },
        { word: 'धजा (Dhajaa)', meaning: 'ध्वजा / पताका' },
        { word: 'विषय लहर (Vishay lahar)', meaning: 'इंद्रिय भोगों की चंचल तरंगें' },
        { word: 'सरबस जाय (Sarbas jaay)', meaning: 'आत्म-धन व सद्गुणों का सर्वस्व नष्ट हो जाना' }
      ],
      pb: [
        { word: 'ਦੇਵਲ (Deval)', meaning: 'ਮੰਦਿਰ' },
        { word: 'ਧਜਾ (Dhaja)', meaning: 'ਝੰਡਾ' },
        { word: 'ਸਰਬਸ (Sarbas)', meaning: 'ਸਭ ਕੁਝ' }
      ],
      en: [
        { word: 'Deval', meaning: 'Sacred temple / bodily shrine' },
        { word: 'Dhajaa', meaning: 'Flag atop the spire' },
        { word: 'Vishay lahar', meaning: 'Waves of sensual temptation' },
        { word: 'Sarbas jaay', meaning: 'The entire spiritual wealth is ruined' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन रूपी ध्वज विषयों की हवा में लहराकर मेरी देह रूपी मंदिर की शांति को भंग कर रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਵਿਕਾਰਾਂ ਦੀ ਹਵਾ ਵਿੱਚ ਡੋਲ ਰਿਹਾ ਹੈ?'),
      en: 'Is the flag of my mind agitated by worldly winds, shaking the sanctuary of my consciousness?'
    },
    practicalApplication: {
      hi: 'देह-मंदिर को विषय-विकारों से बचाएं; मन की चंचलता को नाम-स्मरण में स्थिर करें।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਤੋਂ ਬਚਾਓ।'),
      en: 'Guard the sanctuary of consciousness; steady the mind against tempting breezes through Naam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी देह रूपी मंदिर में अपने नाम का दीप प्रज्वलित कर मेरे मन की ध्वजा को स्थिर कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ-ਮੰਦਿਰ ਵਿੱਚ ਆਪਣਾ ਪ੍ਰਕਾਸ਼ ਕਰਕੇ ਮਨ ਨੂੰ ਟਿਕਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Illumine the temple of my soul and stabilize the flag of my mind in Your peace.'
    },
    quiz: []
  },
  {
    id: 'man-5',
    number: 1385,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫',
      en: 'Man Ko Ang - 5',
    },
    text: {
      hi: 'मेरे मन में परि गई, ऐसी एक दरार।\nफाटाफटिक पषान ज्यूं , मिलै न दूजी बार।।',
      pb: devanagariToGurmukhi('मेरे मन में परि गई, ऐसी एक दरार। फाटाफटिक पषान ज्यूं , मिलै न दूजी बार।।'),
      en: 'Mere man mein pari gayee, aisee ek daraar. Phaataafatik pashaan jyoon, milai na doojee baar..'
    },
    transliteration: 'Mere man mein pari gayee, aisee ek daraar. Phatafatik pashaan jyoon, milai na doojee baar.',
    bhavarth: {
      hi: 'राग-द्वेष के इस संसार में मन का विचलित होना तो सामान्य-सी बात है, परंतु इसके अंदर आए हुए संदेह आदि का मिटना बहुत ही दुष्कर है। किसी कारणवश मेरे मन में एक ऐसी संदेह रूपी दरार पड़ गई है, जो अब दूर नहीं हो सकती। जैसे पत्थर की चट्टान फटने पर दोबारा ठीक नहीं होती, ठीक उसी प्रकार फटा हुआ मन भी नहीं जुड़ सकता।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਮਨ ਦਾ ਡੋਲਣਾ ਆਮ ਹੈ, ਪਰ ਸ਼ੰਕੇ ਦੀ ਦਰਾਰ ਬੜੀ ਖ਼ਤਰਨਾਕ ਹੈ। ਜਿਵੇਂ ਪੱਥਰ ਇੱਕ ਵਾਰ ਫਟ ਜਾਵੇ ਤਾਂ ਮੁੜ ਨਹੀਂ ਜੁੜਦਾ, ਤਿਵੇਂ ਸ਼ੰਕੇ ਨਾਲ ਫਟਿਆ ਮਨ ਵੀ ਮੁਸ਼ਕਲ ਨਾਲ ਜੁੜਦਾ ਹੈ।'),
      en: 'In this world of polarities, doubts create catastrophic fractures within the mind. Once a crystal rock splinters, no craft can make it whole again; likewise, when faith fractures through suspicion, mending it is exceedingly difficult.'
    },
    wordMeanings: {
      hi: [
        { word: 'दरार (Daraar)', meaning: 'संदेह, अविश्वास व द्वेष की गहरी खाई' },
        { word: 'फाटाफटिक पषान (Phaataafatik pashaan)', meaning: 'टूटा हुआ स्फटिक मणि या पत्थर' }
      ],
      pb: [
        { word: 'ਦਰਾਰ (Daraar)', meaning: 'ਸ਼ੰਕੇ ਦੀ ਪਾਟ' },
        { word: 'ਪਸ਼ਾਨ (Pashaan)', meaning: 'ਪੱਥਰ' }
      ],
      en: [
        { word: 'Daraar', meaning: 'A fatal crack of doubt and suspicion' },
        { word: 'Phaataafatik pashaan', meaning: 'A fractured crystal stone' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे मन में सतगुरु अथवा सत्य के प्रति कोई सूक्ष्म संशय या दरार तो नहीं पनप रही?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਮਨ ਵਿੱਚ ਕੋਈ ਭਰਮ ਜਾਂ ਸ਼ੰਕਾ ਹੈ?'),
      en: 'Am I harboring subtle fissures of skepticism that threaten the integrity of my spiritual faith?'
    },
    practicalApplication: {
      hi: 'संशय को तुरंत सत्संग और विवेक से दूर करें; श्रद्धा और प्रेम को कभी खंडित न होने दें।',
      pb: devanagariToGurmukhi('ਸਤਿਸੰਗ ਨਾਲ ਮਨ ਦੇ ਸ਼ੰਕੇ ਦੂਰ ਕਰੋ।'),
      en: 'Heal nascent doubts through holy association; preserve the seamless crystal of faith.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन के समस्त संशयों और दरारों को मिटाकर मुझे अखंड विश्वास प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਵਿੱਚੋਂ ਸ਼ੰਕੇ ਕੱਢ ਕੇ ਅਟੁੱਟ ਭਰੋਸਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dissolve all fissures of skepticism within me and grant me wholehearted faith.'
    },
    quiz: []
  },
  {
    id: 'man-6',
    number: 1386,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ६',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੬',
      en: 'Man Ko Ang - 6',
    },
    text: {
      hi: 'पहिले यह मन काग था, करता जीवन घात।\nअब तो मन हंसा भया, मोती चुनि-चुनि खात।।',
      pb: devanagariToGurmukhi('पहिले यह मन काग था, करता जीवन घात। अब तो मन हंसा भया, मोती चुनि-चुनि खात।।'),
      en: 'Pahile yeh man kaag thaa, kartaa jeevan ghaat. Ab to man hansaa bhayaa, motee chuni-chuni khaat..'
    },
    transliteration: 'Pahile yeh man kaag thaa, kartaa jeevan ghaat. Ab to man hansa bhaya, motee chuni-chuni khaat.',
    bhavarth: {
      hi: 'पहले अज्ञानता की दशा में यह मन कौए की भांति था। इसका खान-पान, बोल-चाल तथा रंग-ढंग आदि सब अशुभ था। यह हिंसक था, इसलिए जीवों पर घात करता था, परंतु अब सत्संगति तथा सतगुरु के ज्ञानोपदेश से यह हंस समान हो गया है, अतः सहज-सरल तथा विवेकी भाव से दुर्गुणों को छोड़कर सद्गुण-ज्ञान रूपी मोतियों को ही चुन-चुनकर खाता है।',
      pb: devanagariToGurmukhi('ਪਹਿਲਾਂ ਇਹ ਮਨ ਕਾਂ ਵਾਂਗ ਗੰਦਗੀ ਖਾਂਦਾ ਅਤੇ ਦੂਜਿਆਂ ਨੂੰ ਦੁੱਖ ਦਿੰਦਾ ਸੀ। ਪਰ ਸਤਿਗੁਰੂ ਦੀ ਸੰਗਤ ਨਾਲ ਇਹ ਹੰਸ ਬਣ ਗਿਆ ਹੈ, ਜੋ ਸਿਰਫ਼ ਗਿਆਨ ਦੇ ਮੋਤੀ ਹੀ ਚੁਗਦਾ ਹੈ।'),
      en: 'Formerly in ignorance, this mind was like a crow—feeding on filth and causing injury. But by the grace of the Satguru’s holy company, it has transformed into a swan (Hansa), feeding purely on the selected pearls of divine wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'काग (Kaag)', meaning: 'कौआ / तामसिक व मलिन मन' },
        { word: 'हंसा भया (Hansaa bhayaa)', meaning: 'हंस बन गया / निर्मल, विवेकी व आत्मज्ञानी' },
        { word: 'मोती चुनि-चुनि खात (Motee chuni-chuni)', meaning: 'सद्गुणों, नाम-स्मरण व तत्व-ज्ञान का सेवन करना' }
      ],
      pb: [
        { word: 'ਕਾਗ (Kaag)', meaning: 'ਕਾਂ' },
        { word: 'ਹੰਸਾ (Hansa)', meaning: 'ਹੰਸ' },
        { word: 'ਮੋਤੀ ਚੁਨਿ (Moti chuni)', meaning: 'ਗਿਆਨ ਦੇ ਮੋਤੀ' }
      ],
      en: [
        { word: 'Kaag', meaning: 'Crow (symbol of impure, predatory instincts)' },
        { word: 'Hansaa bhayaa', meaning: 'Transformed into a pristine spiritual swan' },
        { word: 'Motee chuni-chuni khaat', meaning: 'Partaking selectively of the pearls of truth and virtues' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन दुर्गुणों की गंदगी छोड़कर हंस की भांति ज्ञान और सत्संग के मोती चुग रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਹੰਸ ਵਾਂਗ ਸੱਚਾਈ ਦੇ ਮੋਤੀ ਚੁਗ ਰਿਹਾ ਹੈ?'),
      en: 'Has my consciousness transformed from scavenger crow into the discerning swan of Truth?'
    },
    practicalApplication: {
      hi: 'निंदा, द्वेष और दुर्गुणों को त्यागकर केवल सतगुरु के पावन ज्ञान और सद्गुणों को ग्रहण करें।',
      pb: devanagariToGurmukhi('ਨਿੰਦਾ-ਚੁਗਲੀ ਛੱਡ ਕੇ ਗੁਣ ਗ੍ਰਹਿਣ ਕਰੋ।'),
      en: 'Reject negativity and gossip; feast exclusively upon the pearls of holy remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे कौवे जैसे मलिन मन को अपनी कृपा से परम हंस बना दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤਿ ਨੂੰ ਹੰਸ ਬਣਾ ਕੇ ਆਪਣੇ ਨਾਮ ਦੇ ਮੋਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Metamorphose my impure tendencies into the pristine discrimination of a Param Hans.'
    },
    quiz: []
  },
  {
    id: 'man-7',
    number: 1387,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ७',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੭',
      en: 'Man Ko Ang - 7',
    },
    text: {
      hi: 'कबीर मन परबत भया, अब मैं पाया जान।\nटांकी लागी प्रेम की, निकसी कंचन खान।।',
      pb: devanagariToGurmukhi('कबीर मन परबत भया, अब मैं पाया जान। टांकी लागी प्रेम की, निकसी कंचन खान।।'),
      en: 'Kabeer man parbat bhayaa, ab main paayaa jaan. Taankee laagee prem kee, niksee kanchan khaan..'
    },
    transliteration: 'Kabeer man parbat bhaya, ab main paaya jaan. Taanki laagee prem kee, niksee kanchan khaan.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि अब मैं अच्छी प्रकार जान व समझ गया हूं कि यह मन मोम की भांति मुलायम नहीं है। यह तो विशाल और सुदृढ़ पर्वत की भांति है। यदि इसमें सद्भाव-प्रेम की टांकी (छेनी) लगाई जाए तो इसके अंदर से सद्गुणों का स्वर्णिम भंडार निकल सकता है। प्रेम-भक्ति से मन आत्म-परायण हो जाता है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਮਨ ਪਹਾੜ ਵਰਗਾ ਪੱਕਾ ਹੈ। ਪਰ ਜਦੋਂ ਇਸ ਉੱਤੇ ਪ੍ਰੇਮ-ਭਗਤੀ ਦੀ ਛੈਣੀ ਲੱਗੀ ਤਾਂ ਇਸ ਵਿੱਚੋਂ ਸੋਨੇ ਦੀ ਖਾਣ (ਆਤਮ-ਗਿਆਨ) ਨਿਕਲ ਆਈ।'),
      en: 'Satguru Kabir Saheb proclaims: I have realized that the mind is like a rugged granite mountain. When struck with the chisel of divine love, it opens up to reveal an inexhaustible mine of pure spiritual gold.'
    },
    wordMeanings: {
      hi: [
        { word: 'परबत भया (Parbat bhayaa)', meaning: 'पहाड़ की तरह कठोर व दृढ़' },
        { word: 'टांकी प्रेम की (Taankee prem kee)', meaning: 'प्रेम-भक्ति रूपी छेनी का प्रहार' },
        { word: 'कंचन खान (Kanchan khaan)', meaning: 'स्वर्ण भंडार / विशुद्ध आत्म-ज्ञान' }
      ],
      pb: [
        { word: 'ਪਰਬਤ (Parbat)', meaning: 'ਪਹਾੜ' },
        { word: 'ਟਾਂਕੀ (Taanki)', meaning: 'ਛੈਣੀ' },
        { word: 'ਕੰਚਨ ਖਾਨ (Kanchan khaan)', meaning: 'ਸੋਨੇ ਦੀ ਖਾਣ' }
      ],
      en: [
        { word: 'Parbat bhayaa', meaning: 'Formidable like a mountain of stone' },
        { word: 'Taankee prem kee', meaning: 'The chisel of unconditioned divine love' },
        { word: 'Kanchan khaan', meaning: 'A subterranean mine of pure gold' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपने कठोर मन पर भक्ति और प्रेम की टांकी लगाकर भीतर छिपे आत्म-खजाने को खोजा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਪ੍ਰੇਮ ਨਾਲ ਮਨ ਦੇ ਅੰਦਰਲਾ ਸੋਨਾ ਲੱਭਿਆ ਹੈ?'),
      en: 'Have I applied the chisel of devotion to unlock the golden treasury of my inner Self?'
    },
    practicalApplication: {
      hi: 'कठोर अभ्यास और निष्काम प्रेम से मन के भीतर छिपी दिव्य शक्तियों और शांति को जागृत करें।',
      pb: devanagariToGurmukhi('ਪ੍ਰੇਮ-ਭਗਤੀ ਨਾਲ ਮਨ ਨੂੰ ਪਵਿੱਤਰ ਬਣਾਓ।'),
      en: 'Melt the stubborn granite of the ego through the persistent stroke of divine adoration.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपने अनन्य प्रेम की छेनी से मेरे मन के पाषाण को तराशकर भीतर से आत्म-ज्ञान का स्वर्ण प्रकट कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪਣੇ ਪ੍ਰੇਮ ਨਾਲ ਮੇਰੇ ਮਨ ਨੂੰ ਸੋਨਾ ਬਣਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Strike my rugged mind with Your chisel of love to unveil the golden truth within.'
    },
    quiz: []
  },
  {
    id: 'man-8',
    number: 1388,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ८',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੮',
      en: 'Man Ko Ang - 8',
    },
    text: {
      hi: 'काया कजरी बन अहै, मन कुंजर महमन्त।\nअंकुस ज्ञान रतन है, फेरै साधु सन्त।।',
      pb: devanagariToGurmukhi('काया कजरी बन अहै, मन कुंजर महमन्त। अंकुस ज्ञान रतन है, फेरै साधु सन्त।।'),
      en: 'Kaayaa kajree ban ahai, man kunjar mahamant. Ankus gyaan ratan hai, pherai saadhu sant..'
    },
    transliteration: 'Kaaya kajree ban ahai, man kunjar mahamant. Ankus gyaan ratan hai, pherai saadhu sant.',
    bhavarth: {
      hi: 'यह शरीर तो केले के वन (कजरी वन) के समान है। इसमें मन रूपी मस्त हाथी स्वच्छंद विचरण करता है। अनमोल ज्ञान-रतन रूपी सुदृढ़ अंकुश है। इसके द्वारा ही साधु-संत इस मन रूपी हाथी को वश में करते हैं, अर्थात इसे वश में कर स्वाध्याय-साधना में लगाते हैं।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਕੇਲਿਆਂ ਦੇ ਬਾਗ ਵਰਗਾ ਹੈ ਅਤੇ ਮਨ ਮਸਤ ਹਾਥੀ ਹੈ ਜੋ ਇਸਨੂੰ ਉਜਾੜਦਾ ਹੈ। ਗਿਆਨ ਰੂਪੀ ਰਤਨ ਹੀ ਉਹ ਅੰਕੁਸ਼ ਹੈ ਜਿਸ ਨਾਲ ਸੰਤ ਇਸ ਹਾਥੀ ਨੂੰ ਵੱਸ ਕਰਦੇ ਹਨ।'),
      en: 'The human body is like a lush banana grove, and the mind is a wild, intoxicated elephant rampaging through it. The diamond-hard goad of spiritual wisdom (Gyan) is the instrument by which saints tame and redirect this mighty beast.'
    },
    wordMeanings: {
      hi: [
        { word: 'कजरी बन (Kajree ban)', meaning: 'केले का कोमल व सघन वन' },
        { word: 'कुंजर महमन्त (Kunjar mahamant)', meaning: 'मदमस्त व उन्मत्त हाथी' },
        { word: 'अंकुस ज्ञान रतन (Ankus gyaan ratan)', meaning: 'तत्व-ज्ञान रूपी अनमोल अंकुश' }
      ],
      pb: [
        { word: 'ਕਜਰੀ ਬਨ (Kajri ban)', meaning: 'ਕੇਲਿਆਂ ਦਾ ਜੰਗਲ' },
        { word: 'ਕੁੰਜਰ (Kunjar)', meaning: 'ਹਾਥੀ' },
        { word: 'ਅੰਕੁਸ਼ (Ankush)', meaning: 'ਹਾਥੀ ਨੂੰ ਕਾਬੂ ਕਰਨ ਵਾਲਾ ਹਥਿਆਰ' }
      ],
      en: [
        { word: 'Kajree ban', meaning: 'Tender banana plantation' },
        { word: 'Kunjar mahamant', meaning: 'A wildly intoxicated elephant' },
        { word: 'Ankus gyaan ratan', meaning: 'The jewel-like goad of divine knowledge' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन मस्त हाथी की भांति मेरी साधना के उपवन को उजाड़ रहा है, या मैंने ज्ञान का अंकुश लगाया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨ ਰੂਪੀ ਹਾਥੀ \'ਤੇ ਗਿਆਨ ਦਾ ਅੰਕੁਸ਼ ਲਾਇਆ ਹੈ?'),
      en: 'Is my untamed mind trampling my spiritual garden, or controlled by the goad of wisdom?'
    },
    practicalApplication: {
      hi: 'सतगुरु के वचनों और निरंतर विवेक के अंकुश से मन की वासनाओं को नियंत्रित करें।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਦੇ ਅੰਕੁਸ਼ ਨਾਲ ਮਨ ਨੂੰ ਕਾਬੂ ਰੱਖੋ।'),
      en: 'Apply the firm goad of mindfulness whenever the mind strays toward unwholesome desires.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे उन्मत्त हाथी जैसे मन को अपने ज्ञान-अंकुश से साधकर अपनी सेवा में लगा लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਸਤ ਮਨ ਨੂੰ ਆਪਣੇ ਗਿਆਨ ਨਾਲ ਸੇਧ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Subdue the intoxicated elephant of my mind with the goad of Your sacred Word.'
    },
    quiz: []
  },
  {
    id: 'man-9',
    number: 1389,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ९',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੯',
      en: 'Man Ko Ang - 9',
    },
    text: {
      hi: 'बिना सीस का मिरग है, चहुं दिस चरने जाय।\nबांधि लाओ गुरुज्ञान सूं , राखो तत्व लगाय।।',
      pb: devanagariToGurmukhi('बिना सीस का मिरग है, चहुं दिस चरने जाय। बांधि लाओ गुरुज्ञान सूं , राखो तत्व लगाय।।'),
      en: 'Binaa sees kaa mirag hai, chahun dis charne jaay. Baandhi laao gurugyaan soon, raakho tatva lagaay..'
    },
    transliteration: 'Bina sees ka mirag hai, chahun dis charne jaay. Baandhi laao gurugyaan soon, raakho tatva lagaay.',
    bhavarth: {
      hi: 'मन रूपी मृग बहुत ही विचित्र है। यह बिना सिर का है, इसलिए किसी के पहचानने में नहीं आता। यह चारों दिशाओं में विचरण करता रहता है। इसे सतगुरु के ज्ञान-उपदेश की डोरी से बांधकर, अविनाशी आत्म-तत्त्व की ध्यान-साधना में लगाओ।',
      pb: devanagariToGurmukhi('ਮਨ ਬਿਨਾਂ ਸਿਰ ਦਾ ਅਜਿਹਾ ਹਿਰਨ ਹੈ ਜੋ ਚਾਰੇ ਪਾਸੇ ਦੌੜਦਾ ਹੈ। ਇਸਨੂੰ ਗੁਰੂ ਦੇ ਗਿਆਨ ਦੀ ਰੱਸੀ ਨਾਲ ਬੰਨ੍ਹ ਕੇ ਆਤਮ-ਤੱਤ ਦੇ ਸਿਮਰਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'The mind is a formless, headless deer roaming in all four directions undetected. Tether it securely with the cord of the Guru’s wisdom, and tether its attention firmly to the supreme Soul-Principle (Tatva).'
    },
    wordMeanings: {
      hi: [
        { word: 'बिना सीस का मिरग (Binaa sees kaa mirag)', meaning: 'अदृश्य व निराकार चंचल मन रूपी हिरण' },
        { word: 'राखो तत्व लगाय (Raakho tatva lagaay)', meaning: 'परमतत्व परमात्मा के ध्यान में स्थिर रखना' }
      ],
      pb: [
        { word: 'ਬਿਨਾ ਸੀਸ (Bina sees)', meaning: 'ਬਿਨਾਂ ਸਿਰ ਦਾ' },
        { word: 'ਤੱਤ (Tatva)', meaning: 'ਆਤਮ-ਤੱਤ / ਪ੍ਰਭੂ' }
      ],
      en: [
        { word: 'Binaa sees kaa mirag', meaning: 'A headless, invisible deer of mental wandering' },
        { word: 'Raakho tatva lagaay', meaning: 'Anchor firmly in the Supreme Reality' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन चारों दिशाओं में भटकने वाला अनियंत्रित मृग बन चुका है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਚਾਰੇ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਭਟਕ ਰਿਹਾ ਹੈ?'),
      en: 'Is my attention galloping unrestrained into all directions like a phantom deer?'
    },
    practicalApplication: {
      hi: 'गुरु-मंत्र और नाम-सिमरन की डोरी से मन को बांधकर अंतर्मुखी साधना में स्थिर करें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਨਾਮ ਨਾਲ ਮਨ ਨੂੰ ਬੰਨ੍ਹ ਕੇ ਟਿਕਾਓ।'),
      en: 'Tether the roaming attention to the inner sound of the holy Name.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे भटकते हुए मन रूपी मृग को अपनी ज्ञान-डोरी से बांधकर अपने पावन चरणों में बांध लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਭਟਕਦੀ ਸੁਰਤਿ ਨੂੰ ਆਪਣੇ ਨਾਮ ਨਾਲ ਬੰਨ੍ਹ ਲਵੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bind the wandering deer of my awareness and tie it fast to Your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'man-10',
    number: 1390,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - १०',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੧੦',
      en: 'Man Ko Ang - 10',
    },
    text: {
      hi: 'अपने अपने चोर को, सब कोय डारै मार।\nमेरा चोर मुझको मिलै, सरबस डारूं वार।।',
      pb: devanagariToGurmukhi('अपने अपने चोर को, सब कोय डारै मार। मेरा चोर मुझको मिलै, सरबस डारूं वार।।'),
      en: 'Apne apne chor ko, sab koy daarai maar. Meraa chor mujhko milai, sarbas daaroon vaar..'
    },
    transliteration: 'Apne apne chor ko, sab koy daarai maar. Mera chor mujhko milai, sarbas daaroon vaar.',
    bhavarth: {
      hi: 'संसार के सब लोग अपने-अपने चोर को मार डालने का प्रयास करते हैं, परंतु मेरा चोर मन है। यदि वह मुझे मिल जाए तो मैं उसे नहीं मारूंगा, बल्कि उसके ऊपर अपना सर्वस्व न्यौछावर कर दूंगा, अर्थात उसे प्रेम भाव से मित्र बनाकर अपने पास रखूँगा (उसे प्रभु-भक्ति में लगा दूंगा)।',
      pb: devanagariToGurmukhi('ਲੋਕ ਆਪਣੇ ਚੋਰਾਂ ਨੂੰ ਮਾਰਦੇ ਹਨ, ਪਰ ਮੇਰਾ ਚੋਰ ਇਹ ਮਨ ਹੈ। ਜੇ ਇਹ ਮੇਰੇ ਵੱਸ ਵਿੱਚ ਆ ਜਾਵੇ ਤਾਂ ਮੈਂ ਇਸ ਉੱਤੇ ਆਪਣਾ ਸਭ ਕੁਝ ਵਾਰ ਕੇ ਇਸਨੂੰ ਭਗਤੀ ਵਿੱਚ ਲਾ ਦਿਆਂਗਾ।'),
      en: 'Everyone seeks to destroy their external thief, but my thief is this very mind that steals my awareness. If I can apprehend this inner thief, I will not slay it, but shower all my love upon it to turn it into an ally of devotion.'
    },
    wordMeanings: {
      hi: [
        { word: 'मेरा चोर (Meraa chor)', meaning: 'चेतना और समय को चुराने वाला मन' },
        { word: 'सरबस डारूं वार (Sarbas daaroon vaar)', meaning: 'सर्वस्व न्योछावर कर मित्र बना लेना' }
      ],
      pb: [
        { word: 'ਚੋਰ (Chor)', meaning: 'ਮਨ' },
        { word: 'ਸਰਬਸ ਵਾਰੂੰ (Sarbas vaaroon)', meaning: 'ਸਭ ਕੁਝ ਨਿਛਾਵਰ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Meraa chor', meaning: 'My thief (the mind stealing spiritual awareness)' },
        { word: 'Sarbas daaroon vaar', meaning: 'Surrender all to transform the thief into a devoted friend' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मन से शत्रुता करने की बजाय उसे प्रेम और विवेक से परमात्मा का भक्त बना रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨ ਨੂੰ ਪ੍ਰਭੂ ਦਾ ਸੇਵਕ ਬਣਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I converting the thieving mind into a devoted servant of the Divine through love?'
    },
    practicalApplication: {
      hi: 'मन को कठोरता से दबाने के स्थान पर उसे ईश्वरीय प्रेम और मधुर कीर्तन में लगाकर सन्मार्ग पर लाएं।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਪ੍ਰੇਮ ਨਾਲ ਸਿਮਰਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'Enlist the mind as an ally by feeding it the sublime joy of divine love and service.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे इस चोर मन को पकड़कर अपने चरणों का अनन्य प्रेमी बना दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਆਪਣਾ ਸੱਚਾ ਪ੍ਰੇਮੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Apprehend my stealthy mind and turn it into a dedicated lover of Your Name.'
    },
    quiz: []
  },
  {
    id: 'man-31',
    number: 1411,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३१',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੧',
      en: 'Man Ko Ang - 31',
    },
    text: {
      hi: 'मन की घाली हो गई, मन की घाली जाउं ।\nसंग जो परी कुसंग के, हाटै हाट बिकाउं।।',
      pb: devanagariToGurmukhi('मन की घाली हो गई, मन की घाली जाउं । संग जो परी कुसंग के, हाटै हाट बिकाउं।।'),
      en: 'Man kee ghaalee ho gayee, man kee ghaalee jaa-un. Sang jo paree kusang ke, haatai haat bikaa-un..'
    },
    transliteration: 'Man ki ghaali ho gayi, man ki ghaali jaun. Sang jo pari kusang ke, haatai haat bikaun.',
    bhavarth: {
      hi: 'विषयों में आसक्त मन के जाल में पड़कर पहले ही आवागमन के चक्र में फंसा हुआ हूं और अब भी इसी मन के चक्कर में भटका हुआ हूं। विषय-भोगी मन-इंद्रियों की कुसंगति में पड़कर, संसार रूपी चौरासी के बाजार में दुकान-दुकान पर बिकता फिर रहा हूं। यह मन ही जन्म-जन्मांतर का कारण बना हुआ है।',
      pb: devanagariToGurmukhi('ਮਨ ਦੇ ਧੋਖੇ ਵਿੱਚ ਆ ਕੇ ਮੈਂ ਪਹਿਲਾਂ ਹੀ ਜਨਮ-ਮਰਨ ਦੇ ਚੱਕਰ ਵਿੱਚ ਪਿਆ ਹੋਇਆ ਹਾਂ। ਵਿਸ਼ਿਆਂ ਦੀ ਕੁਸੰਗਤ ਵਿੱਚ ਪੈ ਕੇ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਦੇ ਬਾਜ਼ਾਰ ਵਿੱਚ ਹਰ ਹੱਟ \'ਤੇ ਵਿਕ ਰਿਹਾ ਹਾਂ।'),
      en: 'Ensnared by the deceitful, sense-craving mind, I have already suffered the endless wheel of transmigration and still wander aimlessly. Falling into the bad company of unruly senses, I am sold from shop to shop in the worldly marketplace of rebirth.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन की घाली (Man kee ghaalee)', meaning: 'मन के भटकाव व धोखे में फंसा हुआ' },
        { word: 'हाटै हाट (Haatai haat)', meaning: 'चौरासी लाख योनियों की दुकान-दुकान पर' },
        { word: 'बिकाउं (Bikaa-un)', meaning: 'कर्म-बंधनों में बिकता हुआ, गुलाम बना हुआ' }
      ],
      pb: [
        { word: 'ਮਨ ਕੀ ਘਾਲੀ', meaning: 'ਮਨ ਦਾ ਠੱਗਿਆ ਹੋਇਆ' },
        { word: 'ਹਾਟੈ ਹਾਟ', meaning: 'ਹਰ ਦੁਕਾਨ \'ਤੇ (ਜੂਨਾਂ ਵਿੱਚ)' }
      ],
      en: [
        { word: 'Man kee ghaalee', meaning: 'Deceived and ruined by mental desires' },
        { word: 'Haatai haat bikaa-un', meaning: 'Bartered endlessly through the shops of eighty-four lakh species' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा जीवन मन और इंद्रियों की गुलामी में व्यतीत हो रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਜੀਵਨ ਮਨ ਦੀ ਗੁਲਾਮੀ ਵਿੱਚ ਜਾ ਰਿਹਾ ਹੈ?'),
      en: 'Am I enslaved by sensory impulses, sold to cyclic rebirth?'
    },
    practicalApplication: {
      hi: 'मन की कुसंगति को पहचानकर सतगुरु के पावन सत्संग और नाम-सिमरन की शरण लें।',
      pb: devanagariToGurmukhi('ਕੁਸੰਗਤ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਦਾ ਆਸਰਾ ਲਵੋ।'),
      en: 'Sever ties with mental delusions and anchor consciousness in holy Satsang.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस ठग मन के जाल से निकालकर अपने अभय चरणों में आश्रय दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਨ ਦੀ ਕੁਸੰਗਤ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the trap of the wayward mind and grant me shelter at Your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'man-32',
    number: 1412,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३२',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੨',
      en: 'Man Ko Ang - 32',
    },
    text: {
      hi: 'मन के मते न चालिये, छांड़ि जीव की बानि।\nकतवारी के सूत ज्यौं, उलटि अपूठा आनि।।',
      pb: devanagariToGurmukhi('मन के मते न चालिये, छांड़ि जीव की बानि। कतवारी के सूत ज्यौं, उलटि अपूठा आनि।।'),
      en: 'Man ke mate na chaaliye, chhaandi jeev kee baani. Katwaaree ke soot jyon, ulati apoothaa aani..'
    },
    transliteration: 'Man ke mate na chaliye, chhandi jeev ki bani. Katwari ke soot jyon, ulati apootha aani.',
    bhavarth: {
      hi: 'चंचल मन का कोई भी स्थिर मत नहीं होता, अतः इसके मत-पथ पर नहीं चलना चाहिए। इसकी जो अज्ञानतापूर्ण बुरी आदतें हैं, उन्हें स्वाध्याय-साधना से छुड़ाना चाहिए। जिस प्रकार सूत कातने वाली सूत को उल्टा लाकर बार-बार चरखे की पीउनी पर लपेटती रहती है, उसी प्रकार दौड़ते हुए मन को दुष्कामनाओं से बचाकर बार-बार भक्ति-साधना में लगाना चाहिए।',
      pb: devanagariToGurmukhi('ਮਨ ਦੇ ਕਹੇ \'ਤੇ ਨਾ ਚੱਲੋ ਅਤੇ ਇਸਦੀਆਂ ਭੈੜੀਆਂ ਆਦਤਾਂ ਤਿਆਗੋ। ਜਿਵੇਂ ਕੱਤਣ ਵਾਲੀ ਸੂਤ ਨੂੰ ਉਲਟਾ ਕੇ ਮੁੜ ਤਕਲੇ \'ਤੇ ਲਪੇਟਦੀ ਹੈ, ਤਿਵੇਂ ਮਨ ਨੂੰ ਸੰਸਾਰ ਤੋਂ ਮੋੜ ਕੇ ਭਗਤੀ ਵਿੱਚ ਲਾਓ।'),
      en: 'Never follow the whims of the fickle mind; renounce its habitual conditioning. Just as a spinner winds the unraveling thread back onto the spindle, repeatedly pull the wandering mind inward and anchor it in contemplation.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन के मते (Man ke mate)', meaning: 'मन के चंचल सुझावों व इच्छाओं के अनुसार' },
        { word: 'कतवारी (Katwaaree)', meaning: 'सूत कातने वाली स्त्री' },
        { word: 'उलटि अपूठा आनि (Ulati apoothaa aani)', meaning: 'बाहर से मोड़कर अंतर्मुख लौटा लाना' }
      ],
      pb: [
        { word: 'ਮਤੇ', meaning: 'ਸਲਾਹ ਜਾਂ ਇੱਛਾ' },
        { word: 'ਕਤਵਾਰੀ', meaning: 'ਕੱਤਣ ਵਾਲੀ' },
        { word: 'ਉਲਟਿ ਅਪੂਠਾ', meaning: 'ਵਾਪਸ ਮੋੜ ਕੇ ਅੰਦਰ ਲਿਆਉਣਾ' }
      ],
      en: [
        { word: 'Man ke mate', meaning: 'Following the dictates of the unbridled mind' },
        { word: 'Katwaaree', meaning: 'The spinner of thread' },
        { word: 'Ulati apoothaa aani', meaning: 'Reversing and drawing back inward' }
      ]
    },
    contemplation: {
      hi: 'जब मन विषयों की ओर भागता है, क्या मैं उसे विवेकपूर्वक वापस अंतर्मुख मोड़ पाता हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਭਟਕਦੇ ਮਨ ਨੂੰ ਵਾਪਸ ਨਾਮ ਵੱਲ ਮੋੜਦਾ ਹਾਂ?'),
      en: 'Do I possess the vigilance to reel back the straying mind onto the spindle of Truth?'
    },
    practicalApplication: {
      hi: 'मन की हर तरंग पर सतर्क रहें; जैसे ही यह भटके, प्राणायाम व नाम-स्मरण से इसे एकाग्र करें।',
      pb: devanagariToGurmukhi('ਮਨ ਭਟਕਣ \'ਤੇ ਤੁਰੰਤ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਇਸਨੂੰ ਟਿਕਾਓ।'),
      en: 'Whenever the mind wanders, gently guide it back to the sacred remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे वह आत्म-विवेक प्रदान कीजिए जिससे मैं अपने मन को सांसारिकता से मोड़कर आपके चरणों में जोड़ सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤਿ ਨੂੰ ਮਾਇਆ ਤੋਂ ਮੋੜ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the spiritual strength to reverse the outgoing mind toward Your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'man-33',
    number: 1413,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३३',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੩',
      en: 'Man Ko Ang - 33',
    },
    text: {
      hi: 'मन गोरख मन गोविंद, मन ही औघड़ सोय।\nजो मन राखै जतन करि, आपै करता होय।।',
      pb: devanagariToGurmukhi('मन गोरख मन गोविंद, मन ही औघड़ सोय। जो मन राखै जतन करि, आपै करता होय।।'),
      en: 'Man Gorakh man Govind, man hee aughad soy. Jo man raakhai jatan kari, aapai kartaa hoy..'
    },
    transliteration: 'Man Gorakh man Govind, man hi aughad soy. Jo man rakhai jatan kari, aapai karta hoy.',
    bhavarth: {
      hi: 'जीवन में यह मन इतना महत्त्वपूर्ण तथा प्रभावशाली है कि मन के कठोर तप से ही लोग गोरखनाथ जैसे योगी बन जाते हैं। मन के पराक्रम से ही लोग भगवान तक कहलाते हैं और इस मन की दशा से ही औघड़ बन जाते हैं, जो अपने मन को वशीभूत करके स्वाध्याय-साधना के यत्न में करता है, वह स्वयं ही अपना कर्ता (स्वामी) होता है।',
      pb: devanagariToGurmukhi('ਇਹ ਮਨ ਹੀ ਯੋਗੀ ਗੋਰਖਨਾਥ ਬਣਦਾ ਹੈ, ਇਹੋ ਪ੍ਰਮਾਤਮਾ ਦਾ ਰੂਪ ਅਤੇ ਇਹੋ ਅਵਧੂਤ ਬਣਦਾ ਹੈ। ਜੋ ਜਤਨ ਕਰਕੇ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰ ਲੈਂਦਾ ਹੈ, ਉਹ ਆਪ ਹੀ ਆਪਣਾ ਮਾਲਕ (ਸੁਤੰਤਰ) ਹੋ ਜਾਂਦਾ ਹੈ।'),
      en: 'The mind holds supreme creative potential: through its discipline one becomes a yogi like Gorakhnath, a realized soul (Govind), or an ascetic. Whoever masterfully restrains and refines the mind becomes the sovereign master of their destiny.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन गोरख (Man Gorakh)', meaning: 'मन के नियमन से सिद्ध योगी पद' },
        { word: 'मन गोविंद (Man Govind)', meaning: 'मन की दिव्यता से परमात्मा का साक्षात्कार' },
        { word: 'आपै करता होय (Aapai kartaa hoy)', meaning: 'स्वयं का स्वामी व मुक्त आत्मा बन जाना' }
      ],
      pb: [
        { word: 'ਮਨ ਗੋਰਖ', meaning: 'ਸਿੱਧ ਯੋਗੀ' },
        { word: 'ਕਰਤਾ ਹੋਇ', meaning: 'ਆਪਣਾ ਸੁਆਮੀ ਬਣਨਾ' }
      ],
      en: [
        { word: 'Man Gorakh', meaning: 'Attaining yogic mastery through mental discipline' },
        { word: 'Aapai kartaa hoy', meaning: 'Becoming the sovereign master of consciousness' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन का स्वामी बन चुका हूँ, या मन मेरा स्वामी बना हुआ है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਦਾ ਮਾਲਕ ਹਾਂ ਜਾਂ ਗੁਲਾਮ?'),
      en: 'Am I the sovereign master of my mind or its passive servant?'
    },
    practicalApplication: {
      hi: 'मन की ऊर्जा को व्यर्थ की बहसों से हटाकर आत्म-चिंतन व सद्कर्मों में लगाएं।',
      pb: devanagariToGurmukhi('ਮਨ ਦੀ ਸ਼ਕਤੀ ਨੂੰ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲਾਓ।'),
      en: 'Channel mental willpower into inward stillness and spiritual realization.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन को ऐसी दिव्यता दीजिए कि यह वासनाओं को जीतकर ब्रह्म-स्वरूप में लीन हो जाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਸੱਚਾ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Purify my mind until it reflects the uncontaminated radiance of the Divine.'
    },
    quiz: []
  },
  {
    id: 'man-34',
    number: 1414,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३४',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੪',
      en: 'Man Ko Ang - 34',
    },
    text: {
      hi: 'यह मन हरि चरणे चला, माया-मोह से छूट।\nबेहद माहीं घर किया, काल रहा शिर कूट।।',
      pb: devanagariToGurmukhi('यह मन हरि चरणे चला, माया-मोह से छूट। बेहद माहीं घर किया, काल रहा शिर कूट।।'),
      en: 'Yeh man Hari charane chalaa, maayaa-moh se chhoot. Behad maaheen ghar kiyaa, kaal rahaa shir koot..'
    },
    transliteration: 'Yeh man Hari charane chala, maya-moh se chhoot. Behad maaheen ghar kiya, kaal raha shir koot.',
    bhavarth: {
      hi: 'माया-मोह के बंधन से छूटकर, अब यह मन सतगुरु परमात्मा की शरण में चला गया है। सतगुरु की कृपा से इसने आत्म-स्वरूप को पहचानकर उसे अपना घर बना लिया है, अर्थात अंतर्मुखी होकर ध्यान में स्थिर हो गया है। अब काल भी अपना सिर पटकता रहेगा, किंतु वह भी इसका कुछ नहीं बिगाड़ सकता।',
      pb: devanagariToGurmukhi('ਮਾਇਆ-ਮੋਹ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਜਦੋਂ ਮਨ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਟਿਕ ਗਿਆ ਅਤੇ ਬੇਅੰਤ ਅਸੀਮ ਸੱਚ ਵਿੱਚ ਘਰ ਬਣਾ ਲਿਆ, ਤਾਂ ਕਾਲ ਵੀ ਸਿਰ ਪਿੱਟਦਾ ਰਹਿ ਗਿਆ ਪਰ ਕੁਝ ਵਿਗਾੜ ਨਾ ਸਕਿਆ।'),
      en: 'Liberated from illusion and worldly infatuation, the mind has surrendered at the feet of the Lord. Settling permanently into the boundless realm of the Infinite, even Death (Kal) beats its head in futile helplessness.'
    },
    wordMeanings: {
      hi: [
        { word: 'हरि चरणे (Hari charane)', meaning: 'परमात्मा व सतगुरु की पावन शरण में' },
        { word: 'बेहद माहीं (Behad maaheen)', meaning: 'सीमारेखा-रहित असीम परब्रह्म में' },
        { word: 'शिर कूट (Shir koot)', meaning: 'लाचार होकर सिर पटकना, असमर्थ रह जाना' }
      ],
      pb: [
        { word: 'ਬੇਹਦ ਮਾਹੀਂ', meaning: 'ਅਸੀਮ ਪ੍ਰਭੂ ਵਿੱਚ' },
        { word: 'ਸਿਰ ਕੂਟ', meaning: 'ਬੇਵੱਸ ਹੋ ਕੇ ਸਿਰ ਪਿੱਟਣਾ' }
      ],
      en: [
        { word: 'Hari charane', meaning: 'At the sanctuary of the Divine' },
        { word: 'Behad maaheen', meaning: 'In the boundless Infinite Realm' },
        { word: 'Shir koot', meaning: 'Kal strikes its head in defeated frustration' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी चेतना सीमित संसार से उठकर असीम परमतत्व में विश्राम पा चुकी है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਸੁਰਤਿ ਅਸੀਮ ਪ੍ਰਭੂ ਵਿੱਚ ਟਿਕ ਗਈ ਹੈ?'),
      en: 'Has my soul found eternal abode in the boundless Infinite beyond Kal?'
    },
    practicalApplication: {
      hi: 'संसार के नश्वर आकर्षणों से चित्त हटाकर शाश्वत सत्यनाम के ध्यान में निवास बनाएं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਛੱਡ ਕੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।'),
      en: 'Dwell uninterruptedly in the boundless grace of the Satguru to transcend mortality.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन को अपने असीम पावन धाम में सदा के लिए स्थिर कर काल के भय से मुक्त कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਥਾਂ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Establish my mind in Your boundless sanctuary and dissolve all fear of death.'
    },
    quiz: []
  },
  {
    id: 'man-35',
    number: 1415,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३५',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੫',
      en: 'Man Ko Ang - 35',
    },
    text: {
      hi: 'जेती लहर समुद्र की, तेती मन की दौर।\nसहजै हीरा नीपजे, जो मन आवै ठौर।।',
      pb: devanagariToGurmukhi('जेती लहर समुद्र की, तेती मन की दौर। सहजै हीरा नीपजे, जो मन आवै ठौर।।'),
      en: 'Jeeti lahar samudra kee, teeti man kee daur. Sahajai heeraa neepaje, jo man aavai thaur..'
    },
    transliteration: 'Jeti lahar samudra ki, teti man ki daur. Sahajai heera neepaje, jo man aavai thaur.',
    bhavarth: {
      hi: 'समुद्र की जितनी अनगिनत लहरें व तरंगें हैं, उतनी ही मन की कामनाओं की दौड़ है। यदि मन किसी प्रकार अपने आप शांत हो जाए, तो सहज भाव से ज्ञान रूपी अनमोल हीरे की प्राप्ति निश्चित ही है। इस जगत में सब परमात्मा के ज्ञान के अभाव में ही दुःखी और अशांत हैं। वह ज्ञान मन के शांत होने पर ही सुलभ होता है।',
      pb: devanagariToGurmukhi('ਜਿੰਨੀਆਂ ਸਮੁੰਦਰ ਵਿੱਚ ਲਹਿਰਾਂ ਹਨ, ਓਨੀ ਹੀ ਮਨ ਦੀਆਂ ਇੱਛਾਵਾਂ ਦੀ ਦੌੜ ਹੈ। ਜੇਕਰ ਮਨ ਸ਼ਾਂਤ ਹੋ ਕੇ ਟਿਕ ਜਾਵੇ, ਤਾਂ ਸਹਿਜੇ ਹੀ ਆਤਮ-ਗਿਆਨ ਦਾ ਅਣਮੁੱਲਾ ਹੀਰਾ ਪ੍ਰਾਪਟ ਹੋ ਜਾਂਦਾ ਹੈ।'),
      en: 'As boundless as the rolling waves of the ocean, so endless are the restless desires of the mind. If the mind comes to rest in divine stillness, the priceless diamond of divine wisdom naturally manifests.'
    },
    wordMeanings: {
      hi: [
        { word: 'जेती लहर (Jeeti lahar)', meaning: 'जितनी लहरें समुद्र में उठती हैं' },
        { word: 'मन की दौर (Man kee daur)', meaning: 'मन की अनियंत्रित इच्छाओं की दौड़' },
        { word: 'सहजै हीरा नीपजे (Sahajai heeraa neepaje)', meaning: 'सहज ध्यान में ज्ञान रूपी रत्न प्रकट होता है' },
        { word: 'मन आवै ठौर (Man aavai thaur)', meaning: 'मन का अपने मूल स्वरूप में स्थिर हो जाना' }
      ],
      pb: [
        { word: 'ਦੌਰ', meaning: 'ਭਟਕਣ / ਦੌੜ' },
        { word: 'ਠੌਰ', meaning: 'ਸਥਿਰ ਟਿਕਾਣਾ' },
        { word: 'ਹੀਰਾ ਨੀਪਜੇ', meaning: 'ਗਿਆਨ ਰਤਨ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ' }
      ],
      en: [
        { word: 'Jeeti lahar', meaning: 'As many as the ocean waves' },
        { word: 'Heeraa neepaje', meaning: 'The priceless gem of enlightenment is yielded' },
        { word: 'Aavai thaur', meaning: 'Comes to profound stillness at its source' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन समुद्र की तरंगों की भांति इच्छाओं में दौड़ रहा है, या अंतर्मुखी होकर शांत है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਲਹਿਰਾਂ ਵਾਂਗ ਭਟਕ ਰਿਹਾ ਹੈ ਜਾਂ ਟਿਕਿਆ ਹੋਇਆ ਹੈ?'),
      en: 'Is my mind surging restlessly like ocean waves or anchored in pristine stillness?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन एकांत में ध्यान का अभ्यास करें; विचारों की लहरें शांत होने पर ही आत्म-ज्ञान प्रकट होता है।',
      pb: devanagariToGurmukhi('ਧਿਆਨ ਲਾ ਕੇ ਮਨ ਦੀਆਂ ਲਹਿਰਾਂ ਸ਼ਾਂਤ ਕਰੋ।'),
      en: 'Cultivate deep meditative silence; only in still waters can the jewel of Truth be found.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन की चंचल तरंगों को शांत कर मुझे सहज समाधि का अमूल्य हीरा प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਦੀ ਭਟਕਣ ਮਿਟਾ ਕੇ ਸਹਿਜ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Calm the tumultuous waves of my mind and reveal the radiant diamond of pure Self-knowledge.'
    },
    quiz: []
  },
  {
    id: 'man-36',
    number: 1416,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३६',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੬',
      en: 'Man Ko Ang - 36',
    },
    text: {
      hi: 'मन पंखी बिन पंख का, जहां तहां उड़ि जाय।\nमन भावे ताको मिले, घट में आन समाय।।',
      pb: devanagariToGurmukhi('मन पंखी बिन पंख का, जहां तहां उड़ि जाय। मन भावे ताको मिले, घट में आन समाय।।'),
      en: 'Man pankhee bin pankh kaa, jahaan tahaan udi jaay. Man bhaave taako mile, ghat mein aan samaay..'
    },
    transliteration: 'Man pankhi bin pankh ka, jahan tahan udi jaay. Man bhave taako mile, ghat mein aan samaay.',
    bhavarth: {
      hi: 'मन रूपी यह पक्षी तो बिना पंखों का है, किंतु फिर भी यह इतना विचित्र है कि बिना पंखों के ही यह यहां-वहां उड़ता रहता है। किसी से भी मिलकर ये तुरंत ही अपने घट या शरीर में समा जाता है।',
      pb: devanagariToGurmukhi('ਮਨ ਇੱਕ ਅਜਿਹਾ ਅਦਭੁਤ ਪੰਛੀ ਹੈ ਜੋ ਬਿਨਾਂ ਖੰਭਾਂ ਦੇ ਹੀ ਦੂਰ-ਦੂਰ ਉੱਡ ਜਾਂਦਾ ਹੈ। ਜਿਸਨੂੰ ਚਾਹੁੰਦਾ ਹੈ ਮਿਲ ਕੇ ਝੱਟ ਸਰੀਰ ਦੇ ਅੰਦਰ ਵਾਪਸ ਸਮਾ ਜਾਂਦਾ ਹੈ।'),
      en: 'The mind is a wingless bird possessing miraculous speed, flying anywhere in an instant across time and space. Seeking whatever it fancies, it returns swiftly to reside within the bodily vessel.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन पंखी (Man pankhee)', meaning: 'मन रूपी पक्षी' },
        { word: 'बिन पंख का (Bin pankh kaa)', meaning: 'बिना पंखों के ही तीव्र गति से उड़ने वाला' },
        { word: 'घट में आन समाय (Ghat mein aan samaay)', meaning: 'क्षण-भर में शरीर में लौट आना' }
      ],
      pb: [
        { word: 'ਪੰਖੀ', meaning: 'ਪੰਛੀ' },
        { word: 'ਘਟ', meaning: 'ਸਰੀਰ / ਹਿਰਦਾ' }
      ],
      en: [
        { word: 'Man pankhee', meaning: 'The bird of the mind' },
        { word: 'Bin pankh kaa', meaning: 'Wingless yet traveling instantaneously' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन पलक झपकते ही दूर-दराज के संकल्प-विकल्पों में उड़ जाता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਪਲ ਵਿੱਚ ਦੂਰ-ਦੁਰਾਡੇ ਭਟਕ ਜਾਂਦਾ ਹੈ?'),
      en: 'Does my attention fly instantaneously into distant illusions without physical movement?'
    },
    practicalApplication: {
      hi: 'मन की इस तीव्र गति को समझकर इसे सांसारिक कल्पनाओं के बजाय सतगुरु के नाम-सिमरन में लगाएं।',
      pb: devanagariToGurmukhi('ਮਨ ਦੀ ਗਤੀ ਨੂੰ ਸਿਮਰਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'Harness the mind’s swift flight toward the contemplation of divine virtues.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे इस बिना पंखों के उड़ने वाले मन-पक्षी को अपने पावन शब्द के पिंजरे में सुरक्षित कर लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਚੰਚਲ ਸੁਰਤਿ ਨੂੰ ਆਪਣੇ ਨਾਮ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shelter this wingless bird of my mind in the sacred sanctuary of Your holy Word.'
    },
    quiz: []
  },
  {
    id: 'man-37',
    number: 1417,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३७',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੭',
      en: 'Man Ko Ang - 37',
    },
    text: {
      hi: 'कबीर बैरी सबल है, एक जीव रिपु पांच।\nअपने-अपने स्वाद को, बहुत नचावै नाच।।',
      pb: devanagariToGurmukhi('कबीर बैरी सबल है, एक जीव रिपु पांच। अपने-अपने स्वाद को, बहुत नचावै नाच।।'),
      en: 'Kabeer bairee sabal hai, ek jeev ripu paanch. Apne-apne swaad ko, bahut nachaavai naach..'
    },
    transliteration: 'Kabeer bairi sabal hai, ek jeev ripu paanch. Apne-apne swaad ko, bahut nachaavai naach.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि शत्रु बहुत ही शक्तिमान है। इस एक जीव के पीछे पांच शत्रु (पांच ज्ञानेंद्रियां—नाक, कान, आंख, जिह्वा एवं त्वचा) लगे हुए हैं। ये सब विभिन्न प्रकार का स्वाद पाने के लिए जीव को बहुत नाच नचवाते हैं, अर्थात बहुत दुःखी करते हैं।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਵੈਰੀ ਬੜਾ ਤਾਕਤਵਰ ਹੈ। ਇਕੱਲੇ ਜੀਵ ਦੇ ਪਿੱਛੇ ਪੰਜ ਵੈਰੀ (ਪੰਜ ਇੰਦਰੀਆਂ) ਲੱਗੇ ਹੋਏ ਹਨ, ਜੋ ਆਪੋ-ਆਪਣੇ ਸੁਆਦ ਲਈ ਜੀਵ ਨੂੰ ਬਹੁਤ ਨਚਾਉਂਦੇ (ਦੁਖੀ ਕਰਦੇ) ਹਨ।'),
      en: 'Kabir warns that the enemy is exceedingly formidable: against this solitary soul stand five relentless adversaries (the five senses). Demanding their individual gratifications, they make the helpless soul dance in anguish.'
    },
    wordMeanings: {
      hi: [
        { word: 'बैरी सबल (Bairee sabal)', meaning: 'शक्तिशाली और कपटी शत्रु' },
        { word: 'रिपु पांच (Ripu paanch)', meaning: 'पांच ज्ञानेंद्रियां (शब्द, स्पर्श, रूप, रस, गंध)' },
        { word: 'बहुत नचावै नाच (Bahut nachaavai naach)', meaning: 'इच्छाओं की पूर्ति हेतु दर-दर भटकाना व दुखी करना' }
      ],
      pb: [
        { word: 'ਰਿਪੁ ਪਾਂਚ', meaning: 'ਪੰਜ ਗਿਆਨ ਇੰਦਰੀਆਂ' },
        { word: 'ਨਚਾਵੈ ਨਾਚ', meaning: 'ਬੇਵੱਸ ਕਰਕੇ ਨਚਾਉਣਾ' }
      ],
      en: [
        { word: 'Bairee sabal', meaning: 'The formidable adversary' },
        { word: 'Ripu paanch', meaning: 'The five sensory enemies' },
        { word: 'Nachaavai naach', meaning: 'Compelling the soul to dance to sensory appetites' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं पांच ज्ञानेंद्रियों के क्षणिक स्वादों के पीछे भागकर अपनी अमूल्य चेतना को खो रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਪੰਜ ਇੰਦਰੀਆਂ ਦੇ ਸੁਆਦਾਂ ਪਿੱਛੇ ਭਟਕ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I being driven into exhaustion by the relentless appetites of the five senses?'
    },
    practicalApplication: {
      hi: 'इंद्रियों के आहार पर विवेक का पहरा रखें; सतगुरु के ज्ञान से इन पांचों को वशीभूत करें।',
      pb: devanagariToGurmukhi('ਇੰਦਰੀਆਂ ਦੇ ਭੋਗਾਂ \'ਤੇ ਸੰਜਮ ਰੱਖੋ।'),
      en: 'Restrain the sensory gates with dispassion and spiritual discipline.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! इन पांच बलवान शत्रुओं के प्रहार से मेरी रक्षा कीजिए और मेरी सुरति को स्थिर कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਪੰਜਾਂ ਵਿਕਾਰਾਂ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me from the onslaught of the five sensory foes through Your grace.'
    },
    quiz: []
  },
  {
    id: 'man-38',
    number: 1418,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३८',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੮',
      en: 'Man Ko Ang - 38',
    },
    text: {
      hi: 'कबीर लहरि समुद्र की, केतो आवै जांहि।\nबलिहारी वा दास की, उलटि समावै मांहि ।।',
      pb: devanagariToGurmukhi('कबीर लहरि समुद्र की, केतो आवै जांहि। बलिहारी वा दास की, उलटि समावै मांहि ।।'),
      en: 'Kabeer lahari samudra kee, keto aavai jaanhi. Balihaaree waa daas kee, ulati samaavai maanhi..'
    },
    transliteration: 'Kabeer lahari samudra ki, keto aavai jaanhi. Balihari wa daas ki, ulati samaavai maanhi.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि समुद्र की असंख्य चंचल लहरों के समान मनोवृत्तियां होती हैं, जो लहरों की भांति आती-जाती रहती हैं, जिन्हें रोकना व पकड़ना बहुत ही कठिन है, लेकिन सतगुरु का प्यारा दास-भक्त धन्य है, जो इन्हें उलटकर निज स्वरूप में लीन कर लेता है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਮੁੰਦਰ ਦੀਆਂ ਲਹਿਰਾਂ ਵਾਂਗ ਮਨ ਦੀਆਂ ਅਣਗਿਣਤ ਬਿਰਤੀਆਂ ਆਉਂਦੀਆਂ-ਜਾਂਦੀਆਂ ਰਹਿੰਦੀਆਂ ਹਨ। ਪਰ ਧੰਨ ਹੈ ਉਹ ਗੁਰਮੁਖ ਸੇਵਕ ਜੋ ਇਹਨਾਂ ਨੂੰ ਅੰਦਰ ਵੱਲ ਉਲਟਾ ਕੇ ਆਤਮ-ਸਰੂਪ ਵਿੱਚ ਸਮਾ ਲੈਂਦਾ ਹੈ।'),
      en: 'Kabir observes that thoughts surge and recede like countless waves upon the sea. Blessed is that devoted servant who reverses the tide of thoughts inward, dissolving all fluctuations into the silent depths of the Self.'
    },
    wordMeanings: {
      hi: [
        { word: 'लहरि समुद्र की (Lahari samudra kee)', meaning: 'मन में उठने वाली अनगिनत संकल्प-विकल्प की तरंगें' },
        { word: 'बलिहारी वा दास की (Balihaaree waa daas kee)', meaning: 'उस आत्मज्ञानी भक्त पर न्योछावर हूँ' },
        { word: 'उलटि समावै मांहि (Ulati samaavai maanhi)', meaning: 'वृत्तियों को अंतर्मुखी कर निज स्वरूप में विलीन करना' }
      ],
      pb: [
        { word: 'ਬਲਿਹਾਰੀ', meaning: 'ਸਦਕੇ ਜਾਣਾ / ਕੁਰਬਾਨ ਹੋਣਾ' },
        { word: 'ਉਲਟਿ ਸਮਾਵੈ', meaning: 'ਅੰਦਰ ਵੱਲ ਮੋੜ ਕੇ ਲੀਨ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Lahari samudra kee', meaning: 'Waves of the ocean (mental modifications)' },
        { word: 'Ulati samaavai maanhi', meaning: 'Reversing attention inward into the inner sanctuary' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मानसिक संकल्प-विकल्पों में बह जाता हूं या उन्हें साक्षी भाव से अपने भीतर लीन कर लेता हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨ ਦੀਆਂ ਲਹਿਰਾਂ ਵਿੱਚ ਵਹਿ ਜਾਂਦਾ ਹਾਂ ਜਾਂ ਅੰਤਰਮੁਖ ਹੁੰਦਾ ਹਾਂ?'),
      en: 'Do I get swept away by mental ripples, or do I dissolve them in inner stillness?'
    },
    practicalApplication: {
      hi: 'विचारों से उलझने के स्थान पर उनके साक्षी बनें; साक्षी भाव से समस्त वृत्तियां स्वतः शांत हो जाती हैं।',
      pb: devanagariToGurmukhi('ਸਾਖੀ ਭਾਵ ਧਾਰਨ ਕਰਕੇ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰੋ।'),
      en: 'Practice witnessing thoughts without reaction until the mental sea grows tranquil.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अंतर्मुखी वृत्ति की वह युक्ति प्रदान कीजिए जिससे मैं चित्त की तरंगों को आपके स्वरूप में लीन कर सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਬਿਰਤੀਆਂ ਨੂੰ ਆਪਣੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the mystical art of turning consciousness inward to rest in Your light.'
    },
    quiz: []
  },
  {
    id: 'man-39',
    number: 1419,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ३९',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੩੯',
      en: 'Man Ko Ang - 39',
    },
    text: {
      hi: 'बात बनाई जग ठग्यो, मन परमोधा नांहि।\nकहैं कबीर मन ले गया, लख चौरासी मांहि।।',
      pb: devanagariToGurmukhi('बात बनाई जग ठग्यो, मन परमोधा नांहि। कहैं कबीर मन ले गया, लख चौरासी मांहि।।'),
      en: 'Baat banaayee jag thagyo, man parmodhaa naanhi. Kahain Kabeer man le gayaa, lakh chauraasee maanhi..'
    },
    transliteration: 'Baat banayi jag thagyo, man parmodha naanhi. Kahain Kabeer man le gaya, lakh chaurasi maanhi.',
    bhavarth: {
      hi: 'मृदुल और मनोहारी बातें बनाकर जग को ठगते रहे, परंतु अपने मन को ज्ञानोपदेश से शांत नहीं किया। सतगुरु कबीर साहेब फरमाते हैं कि ऐसे अज्ञानी जनों का अशांत मन उन्हें संसार की चौरासी लाख योनियों में भटका गया।',
      pb: devanagariToGurmukhi('ਮਿੱਠੀਆਂ ਗੱਲਾਂ ਬਣਾ ਕੇ ਦੁਨੀਆ ਨੂੰ ਤਾਂ ਠੱਗ ਲਿਆ, ਪਰ ਆਪਣੇ ਮਨ ਨੂੰ ਗਿਆਨ ਨਾਲ ਨਹੀਂ ਸਮਝਾਇਆ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹੋ ਕਾਬੂ ਨਾ ਆਇਆ ਮਨ ਜੀਵ ਨੂੰ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਵਿੱਚ ਧੱਕ ਲੈ ਗਿਆ।'),
      en: 'Crafting sweet, deceptive words, hypocrites delude the world while leaving their own minds utterly untamed. Satguru Kabir Saheb proclaims that this unpurified mind drags the soul right into the wheel of eighty-four lakh species of rebirth.'
    },
    wordMeanings: {
      hi: [
        { word: 'बात बनाई (Baat banaayee)', meaning: 'दिखावे की विद्वता व चिकनी-चुपड़ी बातें करना' },
        { word: 'मन परमोधा नांहि (Man parmodhaa naanhi)', meaning: 'स्वयं के मन को ज्ञान व विवेक से नहीं सुधारा' },
        { word: 'लख चौरासी मांहि (Lakh chauraasee maanhi)', meaning: 'चौरासी लाख योनियों के आवागमन में' }
      ],
      pb: [
        { word: 'ਪਰਮੋਧਾ ਨਾਂਹਿ', meaning: 'ਸਮਝਾਇਆ ਜਾਂ ਸੁਧਾਰਿਆ ਨਹੀਂ' },
        { word: 'ਲਖ ਚੌਰਾਸੀ', meaning: 'ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ' }
      ],
      en: [
        { word: 'Baat banaayee', meaning: 'Fabricating clever rhetoric to impress others' },
        { word: 'Man parmodhaa naanhi', meaning: 'Failed to discipline and enlighten one’s own mind' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आध्यात्मिक आचरण केवल दूसरों को उपदेश देने तक सीमित है, या मैंने स्वयं के मन को साधा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਿਰਫ਼ ਗੱਲਾਂ ਹੀ ਕਰਦਾ ਹਾਂ ਜਾਂ ਮਨ ਨੂੰ ਵੀ ਸਾਧਿਆ ਹੈ?'),
      en: 'Is my spiritual life mere outward eloquence, or have I genuinely purified my inner mind?'
    },
    practicalApplication: {
      hi: 'दिखावे और वाक्-चातुर्य को त्यागें; सर्वप्रथम अपने अंतःकरण को निष्कपट और निर्मल बनाएं।',
      pb: devanagariToGurmukhi('ਦਿਖਾਵਾ ਛੱਡ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਸ਼ੁੱਧ ਕਰੋ।'),
      en: 'Abandon spiritual pretensions and focus wholeheartedly on inner purification.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे कपट और वाक्-विलास से बचाकर अंतःकरण की सच्ची निष्कपटता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਦਿਖਾਵੇ ਤੋਂ ਬਚਾ ਕੇ ਸੱਚਾ ਹਿਰਦਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Cleanse me of pretense and grant me genuine purity of heart.'
    },
    quiz: []
  },
  {
    id: 'man-40',
    number: 1420,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४०',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੦',
      en: 'Man Ko Ang - 40',
    },
    text: {
      hi: 'कबीर यह गत अटपटी, चटपट लखी न जाय।\nजो मन की खटपट मिटै, अधर भये ठहराय।।',
      pb: devanagariToGurmukhi('कबीर यह गत अटपटी, चटपट लखी न जाय। जो मन की खटपट मिटै, अधर भये ठहराय।।'),
      en: 'Kabeer yeh gat atpatee, chatpat lakhee na jaay. Jo man kee khatpat mitai, adhar bhaye thaharaay..'
    },
    transliteration: 'Kabeer yeh gat atpati, chatpat lakhi na jaay. Jo man ki khatpat mitai, adhar bhaye thaharaay.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि ज्ञान की यह स्थिति बहुत ही अनोखी है, जो कहने में भी कठिन है तथा जिसे शीघ्र-अति-शीघ्र देखा भी नहीं जा सकता। यदि मन का संदेह दूर होकर यह एकाग्र हो जाए, तो सत्य स्वरूपी अविनाशी परमात्मा का मार्ग मिल जाता है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਆਤਮ-ਗਿਆਨ ਦੀ ਇਹ ਦਸ਼ਾ ਬੜੀ ਅਨੋਖੀ ਹੈ, ਜੋ ਜਲਦਬਾਜ਼ੀ ਵਿੱਚ ਸਮਝ ਨਹੀਂ ਆਉਂਦੀ। ਜੇਕਰ ਮਨ ਦੇ ਸੰਸੇ-ਖਟਪਟ ਮਿਟ ਜਾਣ ਤਾਂ ਸੁਰਤਿ ਸਹਿਜੇ ਹੀ ਨਿਰਾਧਾਰ ਬ੍ਰਹਮ ਵਿੱਚ ਟਿਕ ਜਾਂਦੀ ਹੈ।'),
      en: 'Satguru Kabir Saheb proclaims that this mystical state of Self-realization is profound and subtle, not perceived through hasty impatience. When the restless clamor and doubt of the mind subside, consciousness is established in the unconditioned Divine.'
    },
    wordMeanings: {
      hi: [
        { word: 'गत अटपटी (Gat atpatee)', meaning: 'अनोखी व गूढ़ आध्यात्मिक स्थिति' },
        { word: 'चटपट लखी न जाय (Chatpat lakhee na jaay)', meaning: 'जल्दबाजी में अनुभव नहीं की जा सकती' },
        { word: 'मन की खटपट (Man kee khatpat)', meaning: 'मन के संशय, भ्रम और द्वंद्व' },
        { word: 'अधर ठहराय (Adhar thaharaay)', meaning: 'निराधार, अगम्य परमतत्व में स्थिर हो जाना' }
      ],
      pb: [
        { word: 'ਅਟਪਟੀ', meaning: 'ਗੂੜ੍ਹੀ ਤੇ ਅਨੋਖੀ' },
        { word: 'ਖਟਪਟ', meaning: 'ਸੰਸੇ ਤੇ ਬੇਚੈਨੀ' },
        { word: 'ਅਧਰ', meaning: 'ਨਿਰਾਕਾਰ ਪ੍ਰਭੂ' }
      ],
      en: [
        { word: 'Gat atpatee', meaning: 'Profound mystical condition' },
        { word: 'Khatpat', meaning: 'Inner conflict, restlessness, and doubts' },
        { word: 'Adhar thaharaay', meaning: 'Resting in the unconditioned, transcendent Reality' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे मन की संशय भरी खटपट शांत हो चुकी है ताकि परमात्मा का प्रकाश दिख सके?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਮਨ ਦੇ ਸੰਸੇ ਸ਼ਾਂਤ ਹੋ ਗਏ ਹਨ?'),
      en: 'Has the inner friction of doubt ceased so that the unconditioned light can shine?'
    },
    practicalApplication: {
      hi: 'जल्दबाजी व अधीरता छोड़ें; धैर्यपूर्वक नित्य स्वाध्याय व नाम-सिमरन द्वारा मन के द्वंद्व मिटाएं।',
      pb: devanagariToGurmukhi('ਧੀਰਜ ਨਾਲ ਨਾਮ ਸਿਮਰਨ ਕਰਕੇ ਮਨ ਨੂੰ ਟਿਕਾਓ।'),
      en: 'Patiently dissolve mental agitations through steady devotion and quietude.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे चित्त के समस्त संशयों व खटपट को मिटाकर मुझे अधर पद में स्थिरता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਸੰਸੇ ਮਿਟਾ ਕੇ ਮੈਨੂੰ ਸੱਚੇ ਨਾਮ ਵਿੱਚ ਟਿਕਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Eradicate the conflicts of my mind and anchor my consciousness in transcendent peace.'
    },
    quiz: []
  },
  {
    id: 'man-41',
    number: 1421,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४१',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੧',
      en: 'Man Ko Ang - 41',
    },
    text: {
      hi: 'मनुवा तू क्यों बावरा, तेरी सुध क्यों खोय।\nमौत आय सिर पर खडी, ढलते बेर न होय।।',
      pb: devanagariToGurmukhi('मनुवा तू क्यों बावरा, तेरी सुध क्यों खोय। मौत आय सिर पर खडी, ढलते बेर न होय।।'),
      en: 'Manuvaa too kyon baawaraa, teree sudh kyon khoy. Maut aay sir par khadee, dhalte ber na hoy..'
    },
    transliteration: 'Manuva tu kyon bawara, teri sudh kyon khoy. Maut aay sir par khadi, dhalte ber na hoy.',
    bhavarth: {
      hi: 'अरे मन! तू क्यों पागल हो गया है? क्यों तेरी सूझ-बूझ खो गई है? तुझे तनिक भी होश नहीं है। अब तो मृत्यु भी सिर पर आ खड़ी हुई है। ऐसे में इस शरीर के नष्ट होने में तनिक भी समय नहीं लगेगा व परमात्मा का मार्ग मिलने से वंचित रह जायेगा।',
      pb: devanagariToGurmukhi('ਹੇ ਮੂਰਖ ਮਨ! ਤੂੰ ਕਿਉਂ ਬਾਵਲਾ ਹੋ ਕੇ ਆਪਣੀ ਹੋਸ਼ ਗਵਾ ਬੈਠਾ ਹੈਂ? ਮੌਤ ਸਿਰ \'ਤੇ ਖੜ੍ਹੀ ਹੈ, ਜੀਵਨ ਦਾ ਸੂਰਜ ਢਲਦਿਆਂ ਜ਼ਰਾ ਵੀ ਦੇਰ ਨਹੀਂ ਲੱਗਣੀ।'),
      en: 'O foolish mind! Why have you lost all sanity and awareness? Death is already standing above your head; like the setting sun, this fragile physical life will disappear without a moment’s notice.'
    },
    wordMeanings: {
      hi: [
        { word: 'बावरा (Baawaraa)', meaning: 'पागल, विवेकहीन, अज्ञानी' },
        { word: 'सुध क्यों खोय (Sudh kyon khoy)', meaning: 'होश व आत्म-जागृति क्यों गंवा दी' },
        { word: 'ढलते बेर न होय (Dhalte ber na hoy)', meaning: 'जीवन समाप्त होने में पल-भर का भी समय नहीं लगता' }
      ],
      pb: [
        { word: 'ਬਾਵਰਾ', meaning: 'ਕਮਲਾ / ਪਾਗਲ' },
        { word: 'ਢਲਤੇ ਬੇਰ', meaning: 'ਸਮਾਂ ਬੀਤਣ ਲੱਗਿਆਂ' }
      ],
      en: [
        { word: 'Baawaraa', meaning: 'Crazed, delirious with worldly delusion' },
        { word: 'Dhalte ber na hoy', meaning: 'It takes no time for the sun of life to set' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मृत्यु की अनिवार्यता को भूलकर संसार के व्यर्थ प्रपंचों में समय नष्ट कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੌਤ ਨੂੰ ਭੁਲਾ ਕੇ ਸਮਾਂ ਬਰਬਾਦ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I oblivious to the certainty of death, wasting precious breaths on fleeting trivia?'
    },
    practicalApplication: {
      hi: 'आलस्य और असावधानी को त्यागें; हर श्वास को अनमोल मानकर भजन-सुमिरन में लगाएं।',
      pb: devanagariToGurmukhi('ਸੁਚੇਤ ਹੋ ਕੇ ਹਰ ਸਵਾਸ ਨਾਲ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Awaken from spiritual slumber and utilize every remaining breath in holy remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे बावरे मन को जगाकर काल के भय से सावधान कीजिए और नाम की लगन लगाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਸੁੱਤੇ ਮਨ ਨੂੰ ਜਗਾ ਕੇ ਆਪਣੇ ਨਾਮ ਵਿੱਚ ਲਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken my delirious mind to the reality of time and anchor me in eternal Truth.'
    },
    quiz: []
  },
  {
    id: 'man-42',
    number: 1422,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४२',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੨',
      en: 'Man Ko Ang - 42',
    },
    text: {
      hi: 'मनुवां तो पंछी भया, उड़िके चला अकास।\nऊपर ही ते गिर पड़ा, मन माया के पास।।',
      pb: devanagariToGurmukhi('मनुवां तो पंछी भया, उड़िके चला अकास। ऊपर ही ते गिर पड़ा, मन माया के पास।।'),
      en: 'Manuvaan to panchhee bhayaa, udike chalaa akaas. Oopar hee te gir padaa, man maayaa ke paas..'
    },
    transliteration: 'Manuva to panchhi bhaya, udike chala akaas. Oopar hi te gir pada, man maya ke paas.',
    bhavarth: {
      hi: 'मन पक्षी के रूप में, कामना रूपी गगन में ऊंची उड़ान भरकर चल पड़ता है, लेकिन जैसे ही इसे माया का सुहावना दृश्य नीचे की ओर दिखता है, यह ऊपर से ही उसके पास गिर पड़ता है। मन का माया-मोह से आकर्षण ऐसा ही होता है।',
      pb: devanagariToGurmukhi('ਮਨ ਪੰਛੀ ਬਣ ਕੇ ਆਕਾਸ਼ ਵਿੱਚ ਉੱਚੀਆਂ ਉਡਾਰੀਆਂ ਮਾਰਦਾ ਹੈ, ਪਰ ਜਿਉਂ ਹੀ ਹੇਠਾਂ ਮਾਇਆ ਦਾ ਚੋਗਾ ਦਿਸਦਾ ਹੈ, ਉੱਪਰੋਂ ਹੀ ਡਿੱਗ ਪੈਂਦਾ ਹੈ। ਮਾਇਆ ਦਾ ਖਿੱਚ ਮਨ ਨੂੰ ਹੇਠਾਂ ਸੁੱਟ ਦਿੰਦਾ ਹੈ।'),
      en: 'The mind takes flight like a soaring bird into the high sky of noble intentions, yet the moment it catches sight of alluring worldly bait below, it crashes straight down into the trap of Maya.'
    },
    wordMeanings: {
      hi: [
        { word: 'मनुवां पंछी भया (Manuvaan panchhee bhayaa)', meaning: 'मन पक्षी के समान उड़ान भरता है' },
        { word: 'उड़िके चला अकास (Udike chalaa akaas)', meaning: 'आकाश में ऊंची उड़ान भरने लगा' },
        { word: 'ऊपर ही ते गिर पड़ा (Oopar hee te gir padaa)', meaning: 'माया के प्रलोभन में ऊंचाई से नीचे गिर जाना' }
      ],
      pb: [
        { word: 'ਅਕਾਸ', meaning: 'ਆਕਾਸ਼' },
        { word: 'ਗਿਰ ਪੜਾ', meaning: 'ਹੇਠਾਂ ਡਿੱਗ ਗਿਆ' }
      ],
      en: [
        { word: 'Panchhee bhayaa', meaning: 'Became a soaring bird' },
        { word: 'Gir padaa', meaning: 'Plummeted down into the snare of worldly desires' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन साधना में ऊपर उठने के बाद पुनः संसार के तुच्छ आकर्षणों में गिर पड़ता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਉੱਚੀ ਉਡਾਰੀ ਤੋਂ ਬਾਅਦ ਮੁੜ ਮਾਇਆ ਵਿੱਚ ਡਿੱਗਦਾ ਹੈ?'),
      en: 'Do I let sensory temptations pull down my spiritual aspirations?'
    },
    practicalApplication: {
      hi: 'सदा सतर्क रहें; आध्यात्मिक प्रगति के समय माया के सूक्ष्म प्रलोभनों से सावधान रहकर गुरु-आज्ञा में रहें।',
      pb: devanagariToGurmukhi('ਸਾਧਨਾ ਵੇਲੇ ਮਾਇਆ ਦੇ ਧੋਖੇ ਤੋਂ ਸਦਾ ਸੁਚੇਤ ਰਹੋ।'),
      en: 'Maintain unwavering vigilance even when flying high in devotional practice.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन-पक्षी को माया के आकर्षण से बचाकर अपने पावन चरणों के गगन में स्थिर रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤਿ ਨੂੰ ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guard the bird of my attention so it never plummets into the snares of illusion.'
    },
    quiz: []
  },
  {
    id: 'man-43',
    number: 1423,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४३',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੩',
      en: 'Man Ko Ang - 43',
    },
    text: {
      hi: 'मनुवा तो फूला फिरै, कहे जो करूं धरम।\nकोटि करम सिर पर चढ़े, चेति न देखै मरम।।',
      pb: devanagariToGurmukhi('मनुवा तो फूला फिरै, कहे जो करूं धरम। कोटि करम सिर पर चढ़े, चेति न देखै मरम।।'),
      en: 'Manuvaa to phoolaa phirai, kahe jo karoon dharam. Koti karam sir par chadhe, cheti na dekhai maram..'
    },
    transliteration: 'Manuva to phoola phirai, kahe jo karoon dharam. Koti karam sir par chadhe, cheti na dekhai maram.',
    bhavarth: {
      hi: 'विभिन्न मत-मतांतरों में पड़कर यह अभिमानी मन फूला-फूला-सा घूमता-फिरता है और कहता है कि मैं बहुत धर्म-कर्म कर रहा हूं, लेकिन यह अज्ञानी इस रहस्य को नहीं समझता कि इसके सिर पर करोड़ों कर्मों का भार चढ़ा हुआ है।',
      pb: devanagariToGurmukhi('ਮਨ ਹੰਕਾਰ ਨਾਲ ਫੁੱਲਿਆ ਫਿਰਦਾ ਹੈ ਕਿ ਮੈਂ ਬੜੇ ਧਰਮ-ਕਰਮ ਕਰ ਰਿਹਾ ਹਾਂ। ਪਰ ਅਗਿਆਨੀ ਇਹ ਭੇਤ ਨਹੀਂ ਵੇਖਦਾ ਕਿ ਸਿਰ \'ਤੇ ਕਰੋੜਾਂ ਪਾਪਾਂ-ਕਰਮਾਂ ਦਾ ਬੋਝ ਚੜ੍ਹਿਆ ਹੋਇਆ ਹੈ।'),
      en: 'The egotistical mind struts about puffed with religious pride, boasting of performing pious rituals, completely blind to the reality that a mountain of millions of karmic debts still weighs heavily upon its head.'
    },
    wordMeanings: {
      hi: [
        { word: 'फूला फिरै (Phoolaa phirai)', meaning: 'अहंकार में इतराना या गर्व करना' },
        { word: 'कोटि करम (Koti karam)', meaning: 'करोड़ों कर्मों का संचित भार' },
        { word: 'चेति न देखै मरम (Cheti na dekhai maram)', meaning: 'आत्म-बोध व सत्य के रहस्य को नहीं पहचानता' }
      ],
      pb: [
        { word: 'ਫੂਲਾ ਫਿਰੈ', meaning: 'ਹੰਕਾਰ ਵਿੱਚ ਫੁੱਲਿਆ' },
        { word: 'ਕੋਟਿ ਕਰਮ', meaning: 'ਕਰੋੜਾਂ ਕਰਮਾਂ ਦਾ ਭਾਰ' }
      ],
      en: [
        { word: 'Phoolaa phirai', meaning: 'Strutting inflated with spiritual pride' },
        { word: 'Koti karam', meaning: 'Millions of unredeemed karmic imprints' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बाह्य कर्मकांडों के अहंकार में फंसा हुआ हूँ, जबकि हृदय में काम-क्रोध के संस्कार ज्यों-के-त्यों हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਧਾਰਮਿਕ ਹੰਕਾਰ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹਾਂ?'),
      en: 'Am I harboring self-righteous religious pride while karmic baggage remains unresolved?'
    },
    practicalApplication: {
      hi: 'धार्मिक अहंकार का त्याग करें; निष्कपट भाव से सतगुरु की शरण में जाकर कर्म-मुक्ति प्राप्त करें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਨਿਰਮਾਣ ਭਾਵ ਨਾਲ ਭਗਤੀ ਕਰੋ।'),
      en: 'Shed spiritual ego; seek the redeeming grace of the Satguru in absolute humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे धार्मिक अहंकार को नष्ट कर मुझे अपने पावन नाम की सच्ची निष्कामता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਕੇ ਨਿਮਰਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shatter my religious pride and bestow upon me the purity of true humility.'
    },
    quiz: []
  },
  {
    id: 'man-44',
    number: 1424,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४४',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੪',
      en: 'Man Ko Ang - 44',
    },
    text: {
      hi: 'मन दाता मन लालची, मन राजा मन रंक।\nजो यह मन गुरु सो मिलै, तो गुरु मिले निसंक।।',
      pb: devanagariToGurmukhi('मन दाता मन लालची, मन राजा मन रंक। जो यह मन गुरु सो मिलै, तो गुरु मिले निसंक।।'),
      en: 'Man daataa man laalchee, man raajaa man rank. Jo yeh man Guru so milai, to Guru mile nisank..'
    },
    transliteration: 'Man daata man laalchi, man raja man rank. Jo yeh man Guru so milai, to Guru mile nisank.',
    bhavarth: {
      hi: 'यह मन दया भाव के कारण दानी तथा कंजूस भाव के कारण लालची, निर्भीकता और पुरुषार्थ के कारण राजा और भयभीत तथा हीन भाव से गरीब बन जाता है। यदि यह मन गुरु से मिलने का शुभ संकल्प ले, तो निःसंदेह इसे सतगुरु का दर्शन व मिलन प्राप्त हो जाता है।',
      pb: devanagariToGurmukhi('ਇਹ ਮਨ ਹੀ ਦਾਨੀ ਹੈ, ਇਹੋ ਲਾਲਚੀ; ਇਹੋ ਰਾਜਾ ਹੈ ਅਤੇ ਇਹੋ ਕੰਗਾਲ। ਜੇਕਰ ਇਹ ਮਨ ਪੂਰੀ ਸ਼ਰਧਾ ਨਾਲ ਗੁਰੂ ਨਾਲ ਜੁੜ ਜਾਵੇ, ਤਾਂ ਬਿਨਾਂ ਸ਼ੱਕ ਪੂਰੇ ਸਤਿਗੁਰੂ ਦੀ ਪ੍ਰਾਪਤੀ ਹੋ ਜਾਂਦੀ ਹੈ।'),
      en: 'The mind shifts states instantly: generous or miserly, king or beggar, fearless or terrified. If this very mind sincerely resolves to surrender unto the Satguru, it doubtlessly attains divine union with the Master.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन दाता मन लालची (Man daataa man laalchee)', meaning: 'मन के विभिन्न गुण व अवस्थाएं' },
        { word: 'मन राजा मन रंक (Man raajaa man rank)', meaning: 'मन ही वैभवशाली राजा और दरिद्र भिखारी बनता है' },
        { word: 'गुरु मिले निसंक (Guru mile nisank)', meaning: 'निसंदेह पूर्ण सतगुरु की प्राप्ति होना' }
      ],
      pb: [
        { word: 'ਦਾਤਾ / ਲਾਲਚੀ', meaning: 'ਦਾਨੀ / ਲੋਭੀ' },
        { word: 'ਰੰਕ', meaning: 'ਗਰੀਬ / ਕੰਗਾਲ' },
        { word: 'ਨਿਸੰਕ', meaning: 'ਬਿਨਾਂ ਕਿਸੇ ਸ਼ੱਕ ਦੇ' }
      ],
      en: [
        { word: 'Daataa / Laalchee', meaning: 'Giver or hoarder depending on inner state' },
        { word: 'Raajaa / Rank', meaning: 'Emperor or pauper in mental attitude' },
        { word: 'Nisank', meaning: 'Beyond all doubt; assuredly' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन संसार के अभावों और प्रलोभनों में भटक रहा है, या सतगुरु की शरण में लग चुका है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਟਿਕਿਆ ਹੈ?'),
      en: 'Is my mind vacillating between worldly roles or surrendered at the feet of the Satguru?'
    },
    practicalApplication: {
      hi: 'मन की चंचलता को समझें और इसे एकाग्र कर गुरु-सेवा व सत्यनाम-सिमरन में समर्पित करें।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਗੁਰੂ ਸੇਵਾ ਵਿੱਚ ਸਮਰਪਿਤ ਕਰੋ।'),
      en: 'Direct all mental faculties with steadfast devotion toward the holy Master.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे चंचल मन को अपनी शरण में लेकर मुझे अपने निसंदेह दर्शन का पावन वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਆਪਣੀ ਚਰਨ ਛੋਹ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor my fluctuating mind in the certainty of Your divine communion.'
    },
    quiz: []
  },
  {
    id: 'man-45',
    number: 1425,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४५',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੫',
      en: 'Man Ko Ang - 45',
    },
    text: {
      hi: 'मन फाटै बायक बुरे, मिटै सगाई साक।\nजैसे दूध तिवास को, उलटि हुआ जो आक।।',
      pb: devanagariToGurmukhi('मन फाटै बायक बुरे, मिटै सगाई साक। जैसे दूध तिवास को, उलटि हुआ जो आक।।'),
      en: 'Man phaatai baayak bure, mitai sagaayee saak. Jaise doodh tiwaas ko, ulati huaa jo aak..'
    },
    transliteration: 'Man phaatai baayak bure, mitai sagayee saak. Jaise doodh tiwas ko, ulati hua jo aak.',
    bhavarth: {
      hi: 'यह मन जब फट जाता है, तो अपने को अच्छी शिक्षा व ज्ञान-विचार देने वाले भी बुरे लगने लगते हैं और सारे प्रेम संबंध नष्ट हो जाते हैं, सब कुछ प्रभावहीन हो जाता है। ऐसी दशा हो जाती है, जैसे रखा हुआ दूध बिगड़कर आक के दूध के समान विषैला व कड़वा हो गया हो।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਮਨ ਫਟ (ਵਿਗੜ) ਜਾਂਦਾ ਹੈ ਤਾਂ ਹਿਤੈਸ਼ੀਆਂ ਦੇ ਚੰਗੇ ਬਚਨ ਵੀ ਕੌੜੇ ਲੱਗਦੇ ਹਨ ਅਤੇ ਸਾਰੇ ਰਿਸ਼ਤੇ ਟੁੱਟ ਜਾਂਦੇ ਹਨ। ਜਿਵੇਂ ਬਾਸੀ ਦੁੱਧ ਫਟ ਕੇ ਅੱਕ ਦੇ ਜ਼ਹਿਰੀਲੇ ਦੁੱਧ ਵਰਗਾ ਬਣ ਜਾਂਦਾ ਹੈ।'),
      en: 'When the mind becomes sour and corrupted by malice, even the benevolent advice of well-wishers sounds repulsive and all sacred bonds dissolve, just as spoiled milk turns as bitter and poisonous as the sap of the calotropis (Aak) weed.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन फाटै (Man phaatai)', meaning: 'मन में द्वेष, कटुता व विकार उत्पन्न होना' },
        { word: 'बायक बुरे (Baayak bure)', meaning: 'हितकारी वचन भी कड़वे व बुरे लगना' },
        { word: 'तिवास को दूध (Tiwaas ko doodh)', meaning: 'बासी व बिगड़ा हुआ फटा दूध' },
        { word: 'आक (Aak)', meaning: 'मदार/आक का विषैला व कड़वा दूध' }
      ],
      pb: [
        { word: 'ਬਾਇਕ', meaning: 'ਬਚਨ / ਉਪਦੇਸ਼' },
        { word: 'ਤਿਵਾਸ', meaning: 'ਬਾਸੀ / ਰੱਖਿਆ ਹੋਇਆ' },
        { word: 'ਆਕ', meaning: 'ਅੱਕ ਦਾ ਜ਼ਹਿਰੀਲਾ ਰਸ' }
      ],
      en: [
        { word: 'Man phaatai', meaning: 'The mind curdles with resentment and malice' },
        { word: 'Baayak bure', meaning: 'Beneficial counsel feels unbearable' },
        { word: 'Aak', meaning: 'Poisonous milky sap of the calotropis plant' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे मन में किसी के प्रति कटुता या द्वेष तो नहीं आ गया, जिससे गुरु-वचन भी कड़वे लगने लगें?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਮਨ ਵਿੱਚ ਕੋਈ ਕੁੜੱਤਣ ਜਾਂ ਈਰਖਾ ਹੈ?'),
      en: 'Has bitterness curdled my heart, causing divine counsel to feel unwelcome?'
    },
    practicalApplication: {
      hi: 'मन में द्वेष और कटुता को न पनपने दें; क्षमा, प्रेम और मधुर वाणी से संबंधों व अंतःकरण को पावन रखें।',
      pb: devanagariToGurmukhi('ਖਿਮਾ ਅਤੇ ਪ੍ਰੇਮ ਨਾਲ ਮਨ ਨੂੰ ਨਿਰਮਲ ਰੱਖੋ।'),
      en: 'Heal resentment through forgiveness and sweet devotional humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन को कटुता और द्वेष के विष से बचाकर प्रेम और भक्ति के अमृत से परिपूर्ण कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰੇਮ ਦਾ ਅੰਮ੍ਰਿਤ ਭਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Cleanse my heart of poisonous malice and fill it with the nectar of divine love.'
    },
    quiz: []
  },
  {
    id: 'man-46',
    number: 1426,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४६',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੬',
      en: 'Man Ko Ang - 46',
    },
    text: {
      hi: 'मन पांचों के बस पड़ा, मन के बस नहिं पांच।\nजित देखूं तित दौं लगी, जित भागूं तित आंच।।',
      pb: devanagariToGurmukhi('मन पांचों के बस पड़ा, मन के बस नहिं पांच। जित देखूं तित दौं लगी, जित भागूं तित आंच।।'),
      en: 'Man paanchon ke bas padaa, man ke bas nahin paanch. Jit dekhoon tit daun lagee, jit bhaagoon tit aanch..'
    },
    transliteration: 'Man paanchon ke bas pada, man ke bas nahin paanch. Jit dekhoon tit daun lagi, jit bhagoon tit aanch.',
    bhavarth: {
      hi: 'मन पांचों ज्ञानेंद्रियों अथवा इनके पांचों विषयों के अधीन है, परंतु मन के वश में ये पांचों नहीं हैं। जिधर भी देखता हूँ उधर ही विषयों की आग लगी हुई है और इससे बचने के लिए जिधर भी दौड़ता हूं, वहीं पर आंच सताने लगती है।',
      pb: devanagariToGurmukhi('ਮਨ ਪੰਜਾਂ ਇੰਦਰੀਆਂ ਦੇ ਵੱਸ ਵਿੱਚ ਪਿਆ ਹੈ, ਪਰ ਇਹ ਪੰਜੇ ਮਨ ਦੇ ਵੱਸ ਵਿੱਚ ਨਹੀਂ ਹਨ। ਜਿੱਧਰ ਵੇਖਦਾ ਹਾਂ ਵਿਸ਼ਿਆਂ ਦੀ ਅੱਗ ਲੱਗੀ ਹੋਈ ਹੈ, ਜਿੱਥੇ ਵੀ ਭੱਜਦਾ ਹਾਂ ਓਥੇ ਹੀ ਸੇਕ ਸਤਾਉਂਦਾ ਹੈ।'),
      en: 'The mind is trapped under the dominion of the five senses, while powerless to control them. Wherever I gaze, the forest fire of sensory craving blazes; wherever I flee, the scorching heat pursues me.'
    },
    wordMeanings: {
      hi: [
        { word: 'पांचों के बस पड़ा (Paanchon ke bas padaa)', meaning: 'पांचों ज्ञानेंद्रियों का दास बन जाना' },
        { word: 'दौं लगी (Daun lagee)', meaning: 'दावानल, विषयों की भयंकर आग लगी होना' },
        { word: 'जित भागूं तित आंच (Jit bhaagoon tit aanch)', meaning: 'संसार में कहीं भी भागने पर तृष्णा की तपन मिलना' }
      ],
      pb: [
        { word: 'ਦੌਂ ਲਗੀ', meaning: 'ਜੰਗਲ ਦੀ ਅੱਗ ਲੱਗੀ ਹੋਣਾ' },
        { word: 'ਆਂਚ', meaning: 'ਤਪਸ਼ / ਸੇਕ' }
      ],
      en: [
        { word: 'Paanchon ke bas', meaning: 'Enslaved by the five senses' },
        { word: 'Daun lagee', meaning: 'A wildfire of desires is raging everywhere' },
        { word: 'Aanch', meaning: 'Scorching heat of unfulfilled cravings' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक वासनाओं की दावानल से बचने के लिए सतगुरु के ज्ञान-जल की शरण ले रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਤੋਂ ਬਚਣ ਲਈ ਨਾਮ ਦਾ ਆਸਰਾ ਲਿਆ ਹੈ?'),
      en: 'Am I taking refuge in the cooling waters of the holy Name amidst this sensory blaze?'
    },
    practicalApplication: {
      hi: 'संसार में शांति ढूंढने के बजाय अंतर्मुखी होकर सतगुरु के नाम-सिमरन के शीतल सरोवर में विश्राम पाएं।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਨਾਲ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਬੁਝਾਓ।'),
      en: 'Quench the fire of sensory craving by plunging into the nectar of the Satguru’s Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इन पांचों विषयों की भयंकर अग्नि से बचाकर अपने पावन नाम की शीतल छाया प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਿਕਾਰਾਂ ਦੀ ਅੱਗ ਤੋਂ ਬਚਾ ਕੇ ਸ਼ਾਂਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the raging fire of the senses and shelter me under the cool canopy of Your grace.'
    },
    quiz: []
  },
  {
    id: 'man-47',
    number: 1427,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४७',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੭',
      en: 'Man Ko Ang - 47',
    },
    text: {
      hi: 'मन के मारे बन गये, बन तजि बस्ती मांहि।\nकहैं कबीर क्या कीजिये, यह मन ठहरै नाहिं।।',
      pb: devanagariToGurmukhi('मन के मारे बन गये, बन तजि बस्ती मांहि। कहैं कबीर क्या कीजिये, यह मन ठहरै नाहिं।।'),
      en: 'Man ke maare ban gaye, ban taji bastee maanhi. Kahain Kabeer kyaa keejiye, yeh man thaharai naahin..'
    },
    transliteration: 'Man ke maare ban gaye, ban taji basti maanhi. Kahain Kabeer kya kijiye, yeh man thaharai naahin.',
    bhavarth: {
      hi: 'मन से हारकर, परेशान होकर हम वन में गए, परंतु वहां भी यही स्थिति रही, अतः जंगल त्यागकर फिर अपने गांव-बस्ती में आ गए। सतगुरु कबीर साहेब फरमाते हैं कि हम क्या करें? यह मन बहुत ही प्रबल है, यह कहीं भी स्थिर नहीं रह पाता।',
      pb: devanagariToGurmukhi('ਮਨ ਤੋਂ ਦੁਖੀ ਹੋ ਕੇ ਜੰਗਲ ਚਲੇ ਗਏ, ਪਰ ਓਥੇ ਵੀ ਮਨ ਨਾ ਟਿਕਿਆ ਤਾਂ ਮੁੜ ਬਸਤੀ ਵਿੱਚ ਆ ਗਏ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਕੀ ਕਰੀਏ, ਇਹ ਮਨ ਬਾਹਰੀ ਥਾਵਾਂ ਬਦਲਣ ਨਾਲ ਸ਼ਾਂਤ ਨਹੀਂ ਹੁੰਦਾ।'),
      en: 'Harassed by the mind, seekers flee into the wilderness, yet finding no peace there, they return to the town. Kabir remarks: What can mere external renunciation do when the untamed mind refuses to be still anywhere?'
    },
    wordMeanings: {
      hi: [
        { word: 'मन के मारे (Man ke maare)', meaning: 'मन के उपद्रव व अशांति से तंग आकर' },
        { word: 'बन गये (Ban gaye)', meaning: 'जंगल या एकांत में भाग जाना' },
        { word: 'मन ठहरै नाहिं (Man thaharai naahin)', meaning: 'बाहरी स्थान बदलने से मन स्थिर नहीं होता' }
      ],
      pb: [
        { word: 'ਬਨ', meaning: 'ਜੰਗਲ' },
        { word: 'ਬਸਤੀ', meaning: 'ਸ਼ਹਿਰ / ਪਿੰਡ' }
      ],
      en: [
        { word: 'Man ke maare', meaning: 'Tormented and exhausted by the restless mind' },
        { word: 'Man thaharai naahin', meaning: 'The mind finds no stillness through external changes of place' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं स्थान बदलने से शांति खोज रहा हूं, जबकि शांति केवल अंतर्मुखी मन के स्थिर होने पर ही मिलती है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਾਹਰੀ ਤਿਆਗ ਵਿੱਚ ਸ਼ਾਂਤੀ ਲੱਭ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I seek tranquility by changing geographical locations instead of conquering the inner mind?'
    },
    practicalApplication: {
      hi: 'बाहरी संन्यास के स्थान पर आंतरिक संन्यास अपनाएं; जहां भी रहें, मन को नाम-सिमरन में स्थिर रखें।',
      pb: devanagariToGurmukhi('ਘਰ-ਬਾਰ ਛੱਡਣ ਦੀ ਥਾਂ ਮਨ ਦੇ ਵਿਕਾਰ ਛੱਡੋ।'),
      en: 'Practice inward renunciation right where you are through continuous mindfulness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे बाहरी भटकाव से निकालकर अपने अंतःकरण में अचल स्थिरता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਭਟਕਦੇ ਮਨ ਨੂੰ ਅੰਦਰੂਨੀ ਟਿਕਾਓ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from outward fleeing and grant me unwavering stillness within.'
    },
    quiz: []
  },
  {
    id: 'man-48',
    number: 1428,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४८',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੮',
      en: 'Man Ko Ang - 48',
    },
    text: {
      hi: 'निहचिन्त होय के गुरु भजै, मन में राखै सांच।\nइन पांचौं को बसि करै, ताहि न आवै आंच।।',
      pb: devanagariToGurmukhi('निहचिन्त होय के गुरु भजै, मन में राखै सांच। इन पांचौं को बसि करै, ताहि न आवै आंच।।'),
      en: 'Nihchint hoy ke Guru bhajai, man mein raakhai saanch. In paanchon ko basi karai, taahi na aavai aanch..'
    },
    transliteration: 'Nihchint hoy ke Guru bhajai, man mein rakhai saanch. In paanchon ko basi karai, taahi na aavai aanch.',
    bhavarth: {
      hi: 'संसार के विषयों से निश्चिंत होकर गुरु की सेवा-भक्ति करनी चाहिए तथा दुर्भावनाओं को त्यागकर मन में परम सत्य को धारण करना चाहिए। पांचों प्रबल ज्ञानेन्द्रियों को अपने अधीन कर लेने से कभी भी किसी संताप की आंच नहीं लगती।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰਕ ਚਿੰਤਾਵਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸਤਿਗੁਰੂ ਦਾ ਸਿਮਰਨ ਕਰੋ ਅਤੇ ਮਨ ਵਿੱਚ ਸੱਚ ਧਾਰਨ ਕਰੋ। ਜੋ ਪੰਜਾਂ ਇੰਦਰੀਆਂ ਨੂੰ ਕਾਬੂ ਕਰ ਲੈਂਦਾ ਹੈ, ਉਸਨੂੰ ਦੁੱਖਾਂ ਦੀ ਤਪਸ਼ ਕਦੇ ਨਹੀਂ ਛੂੰਹਦੀ।'),
      en: 'Devote yourself wholeheartedly to the Satguru, free from worldly anxieties, establishing pristine Truth within the heart. Whoever masters the five senses remains completely untouched by the scorching fires of suffering.'
    },
    wordMeanings: {
      hi: [
        { word: 'निहचिन्त होय (Nihchint hoy)', meaning: 'सांसारिक चिंताओं व प्रपंचों से मुक्त होकर' },
        { word: 'मन में राखै सांच (Man mein raakhai saanch)', meaning: 'हृदय में सत्य और निष्कपटता धारण करना' },
        { word: 'ताहि न आवै आंच (Taahi na aavai aanch)', meaning: 'उसे किसी प्रकार का दुःख या संताप स्पर्श नहीं कर सकता' }
      ],
      pb: [
        { word: 'ਨਿਹਚਿੰਤ', meaning: 'ਚਿੰਤਾ-ਮੁਕਤ' },
        { word: 'ਸਾਂਚ', meaning: 'ਸੱਚ' },
        { word: 'ਆਂਚ ਨ ਆਵੈ', meaning: 'ਕੋਈ ਦੁੱਖ ਨਾ ਪਹੁੰਚਣਾ' }
      ],
      en: [
        { word: 'Nihchint hoy', meaning: 'Carefree and unburdened by worldly anxieties' },
        { word: 'Raakhai saanch', meaning: 'Preserves unvarnished Truth in the heart' },
        { word: 'Taahi na aavai aanch', meaning: 'Not even a spark of misery can touch him' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं चिंताओं को सतगुरु के चरणों में समर्पित करके सत्य और संयम में जीवन जी रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਿਸ਼ਚਿੰਤ ਹੋ ਕੇ ਗੁਰੂ ਦੇ ਨਾਮ ਨਾਲ ਜੁੜਿਆ ਹਾਂ?'),
      en: 'Am I living in carefree serenity, anchored in truth while governing the five senses?'
    },
    practicalApplication: {
      hi: 'संसार की व्यर्थ चिंताओं को त्यागें; नित्य नियम से गुरु-भक्ति व सत्य आचरण का पालन करें।',
      pb: devanagariToGurmukhi('ਸੱਚਾ ਆਚਰਨ ਰੱਖ ਕੇ ਗੁਰੂ ਦੀ ਭਗਤੀ ਕਰੋ।'),
      en: 'Surrender all worries to the Master and maintain strict truthfulness and sense-control.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे चिंता-मुक्त हृदय और सत्य की शक्ति दीजिए ताकि मैं पांचों इंद्रियों को जीतकर आपके पावन आनंद में रह सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਹਚਿੰਤ ਭਗਤੀ ਅਤੇ ਸੱਚ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bless me with carefree devotion and the shield of Truth against all tribulations.'
    },
    quiz: []
  },
  {
    id: 'man-49',
    number: 1429,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ४९',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੪੯',
      en: 'Man Ko Ang - 49',
    },
    text: {
      hi: 'मन मुरीद संसार है, गुरु मुरीद कोय साध।\nजो माने गुरु बचन को, ताका मता अगाध ।।',
      pb: devanagariToGurmukhi('मन मुरीद संसार है, गुरु मुरीद कोय साध। जो माने गुरु बचन को, ताका मता अगाध ।।'),
      en: 'Man mureed sansaar hai, Guru mureed koy saadh. Jo maane Guru bachan ko, taakaa mataa agaadh..'
    },
    transliteration: 'Man murid sansaar hai, Guru murid koy saadh. Jo maane Guru bachan ko, taaka mata agaadh.',
    bhavarth: {
      hi: 'यह समस्त संसार मन का दास है, अर्थात जैसा मन चाहता है, यहां के लोग वैसा ही करते हैं, परंतु सतगुरु के दास तो कोई विरले ही साधु-संत होते हैं, जो गुरु के सदुपदेश-ज्ञान प्रवचन को मानता है, उसका मत अथाह गंभीर होता है।',
      pb: devanagariToGurmukhi('ਸਾਰਾ ਸੰਸਾਰ ਮਨ ਦਾ ਗੁਲਾਮ (ਮੁਰੀਦ) ਹੈ, ਪਰ ਗੁਰੂ ਦਾ ਸੱਚਾ ਸੇਵਕ ਕੋਈ ਵਿਰਲਾ ਸਾਧੂ ਹੁੰਦਾ ਹੈ। ਜੋ ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਸਿਰ-ਮੱਥੇ ਮੰਨਦਾ ਹੈ, ਉਸਦੀ ਆਤਮਿਕ ਸਮਝ ਅਥਾਹ ਗੰਭੀਰ ਹੁੰਦੀ ਹੈ।'),
      en: 'The whole world is a disciple and slave of the fickle mind (Man-mureed), whereas a true disciple of the Satguru (Guru-mureed) is exceedingly rare. Whoever faithfully obeys the Master’s sacred word attains an unfathomable depth of spiritual wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन मुरीद (Man mureed)', meaning: 'मन का गुलाम, मनमानी करने वाला संसारी' },
        { word: 'गुरु मुरीद (Guru mureed)', meaning: 'सतगुरु की आज्ञा व ज्ञान पर चलने वाला सच्चा साधक' },
        { word: 'मता अगाध (Mataa agaadh)', meaning: 'गंभीर, अथाह और सर्वोच्च आत्म-ज्ञान' }
      ],
      pb: [
        { word: 'ਮਨ ਮੁਰੀਦ', meaning: 'ਮਨਮੁਖ / ਮਨ ਦਾ ਗੁਲਾਮ' },
        { word: 'ਗੁਰੂ ਮੁਰੀਦ', meaning: 'ਗੁਰਮੁਖ / ਗੁਰੂ ਦਾ ਸਿੱਖ' },
        { word: 'ਅਗਾਧ', meaning: 'ਅਥਾਹ ਡੂੰਘਾ' }
      ],
      en: [
        { word: 'Man mureed', meaning: 'A slave to mental desires (Manmukh)' },
        { word: 'Guru mureed', meaning: 'A devoted disciple aligned with the Master (Gurmukh)' },
        { word: 'Mataa agaadh', meaning: 'Unfathomable and profound understanding' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मन के कहे अनुसार आचरण करता हूँ (मनमुरीद), या सतगुरु के वचनों को शिरोधार्य करता हूँ (गुरुमुरीद)?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨਮੁਖ ਹਾਂ ਜਾਂ ਗੁਰਮੁਖ?'),
      en: 'Am I a slave to my whims (Man-mureed) or a surrendered disciple of the Satguru (Guru-mureed)?'
    },
    practicalApplication: {
      hi: 'मन की चंचलता को छोड़कर सतगुरु के प्रत्येक वचन व आज्ञा को अपने जीवन का सर्वोच्च नियम बनाएं।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਓ।'),
      en: 'Surrender all personal opinions to the supreme wisdom of the Master’s teachings.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मनमुरीदी की अज्ञानता से बचाकर अपने चरणों का सच्चा गुरुमुरीद बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣਾ ਸੱਚਾ ਗੁਰਮੁਖ ਸੇਵਕ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Transform me from a slave of the mind into a steadfast devotee of Your Word.'
    },
    quiz: []
  },
  {
    id: 'man-50',
    number: 1430,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५०',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੦',
      en: 'Man Ko Ang - 50',
    },
    text: {
      hi: 'मन ही को परमोधिये, मन ही को उपदेस।\nजो यह मन को बसि करै, सीष होय सब देस।।',
      pb: devanagariToGurmukhi('मन ही को परमोधिये, मन ही को उपदेस। जो यह मन को बसि करै, सीष होय सब देस।।'),
      en: 'Man hee ko parmodhiye, man hee ko upades. Jo yeh man ko basi karai, seesh hoy sab des..'
    },
    transliteration: 'Man hi ko parmodhiye, man hi ko upades. Jo yeh man ko basi karai, seesh hoy sab des.',
    bhavarth: {
      hi: 'मन को ही अपना शिष्य-सेवक बनाना चाहिए और इसे ही ज्ञान-उपदेश देना चाहिए, अर्थात अन्य जनों को छोड़कर सर्वप्रथम अपने मन को ज्ञान-विचार से दीक्षित कर पवित्र बनाना उचित है। इस प्रकार जो मन को अपने वश में कर लेता है, सारा संसार ही उसका शिष्य हो जाता है।',
      pb: devanagariToGurmukhi('ਪਹਿਲਾਂ ਆਪਣੇ ਹੀ ਮਨ ਨੂੰ ਸਮਝਾਓ ਅਤੇ ਇਸਨੂੰ ਹੀ ਉਪਦੇਸ਼ ਦਿਓ। ਜੋ ਆਪਣੇ ਮਨ ਨੂੰ ਵੱਸ ਵਿੱਚ ਕਰ ਲੈਂਦਾ ਹੈ, ਸਾਰਾ ਸੰਸਾਰ ਹੀ ਉਸਦਾ ਸਤਿਕਾਰ ਕਰਦਾ ਅਤੇ ਸਿੱਖਿਆ ਲੈਂਦਾ ਹੈ।'),
      en: 'First instruct, counsel, and reform your own mind before offering advice to others. Whoever conquers and disciplines their own mind commands the natural reverence and discipleship of the entire world.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन को परमोधिये (Man ko parmodhiye)', meaning: 'अपने ही मन को ज्ञान से प्रबुद्ध करना' },
        { word: 'मन ही को उपदेस (Man hee ko upades)', meaning: 'औरों के बजाय पहले स्वयं के मन को शिक्षा देना' },
        { word: 'सीष होय सब देस (Seesh hoy sab des)', meaning: 'सारा जगत उसका शिष्य व आदरणीय बन जाता है' }
      ],
      pb: [
        { word: 'ਪਰਮੋਧੀਏ', meaning: 'ਸਮਝਾਉਣਾ / ਗਿਆਨਵਾਨ ਕਰਨਾ' },
        { word: 'ਸੀਖ ਹੋਇ', meaning: 'ਸਿੱਖਿਆ ਲੈਣਾ / ਚੇਲਾ ਬਣਨਾ' }
      ],
      en: [
        { word: 'Man ko parmodhiye', meaning: 'Enlighten and instruct your own mind' },
        { word: 'Seesh hoy sab des', meaning: 'The whole world becomes a learner at your feet' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं दूसरों को सुधारने में लगा हूँ, या अपने मन को ज्ञान और विवेक से दीक्षित कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੂਜਿਆਂ ਨੂੰ ਉਪਦੇਸ਼ ਦਿੰਦਾ ਹਾਂ ਜਾਂ ਆਪਣੇ ਮਨ ਨੂੰ ਸੁਧਾਰਦਾ ਹਾਂ?'),
      en: 'Do I waste energy lecturing others, or do I diligently reform my own mind?'
    },
    practicalApplication: {
      hi: 'आत्म-निरीक्षण करें; जब भी दूसरों में दोष दिखे, पहले अपने मन की शुद्धि पर ध्यान केंद्रित करें।',
      pb: devanagariToGurmukhi('ਦੂਜਿਆਂ ਦੇ ਨੁਕਸ ਕੱਢਣ ਦੀ ਥਾਂ ਆਪਣੇ ਮਨ ਨੂੰ ਸੁਧਾਰੋ।'),
      en: 'Turn the gaze inward; master your own mind before guiding anyone else.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपने मन को वश में करने का बल और विवेक दीजिए ताकि मेरा जीवन स्वतः सत्य का दर्पण बने। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਮਨ ਨੂੰ ਸਾਧਣ ਦੀ ਸਮਰੱਥਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Empower me to conquer my own mind and embody Your teachings in silent action.'
    },
    quiz: []
  },
  {
    id: 'man-51',
    number: 1431,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५१',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੧',
      en: 'Man Ko Ang - 51',
    },
    text: {
      hi: 'चिन्ता चित्त बिसारिये, फिर बूझिये नहिं आन।\nइन्द्री पसारा मेटिये, सहज मिलै भगवान।।',
      pb: devanagariToGurmukhi('चिन्ता चित्त बिसारिये, फिर बूझिये नहिं आन। इन्द्री पसारा मेटिये, सहज मिलै भगवान।।'),
      en: 'Chintaa chitt bisaariye, phir boojhiye nahin aan. Indree pasaaraa metiye, sahaj milai Bhagavaan..'
    },
    transliteration: 'Chinta chitt bisariye, phir boojhiye nahin aan. Indri pasaara metiye, sahaj milai Bhagwan.',
    bhavarth: {
      hi: 'चिंता, भय, शोक करने से अशांति बढ़ती है, अतः अपने चित्त से चिंता को समाप्त कर दो और अपने मन को समस्त आन उपासनाओं से हटा लो। स्वयं में जो इंद्रियों का विषयों से विचरण करता है, उसे पूर्णतया समाप्त कर देने से परमात्मा सहज भाव से ही मिल जाते हैं।',
      pb: devanagariToGurmukhi('ਚਿੱਤ ਵਿੱਚੋਂ ਚਿੰਤਾ ਨੂੰ ਕੱਢ ਦਿਓ ਅਤੇ ਹੋਰ ਭਰਮ-ਭੁਲੇਖੇ ਛੱਡ ਦਿਓ। ਇੰਦਰੀਆਂ ਦੇ ਬਾਹਰੀ ਪਸਾਰੇ ਨੂੰ ਸਮੇਟ ਲਵੋ, ਤਾਂ ਸਹਿਜੇ ਹੀ ਪਰਮਾਤਮਾ ਦਾ ਮਿਲਾਪ ਹੋ ਜਾਵੇਗਾ।'),
      en: 'Eradicate all anxiety and worry from the heart; abandon secondary superstitions and delusions. Contract the outgoing sensory expansion inward, and the Supreme Lord will be realized in natural, effortless communion.'
    },
    wordMeanings: {
      hi: [
        { word: 'चिन्ता बिसारिये (Chintaa bisaariye)', meaning: 'चित्त से समस्त चिंताओं और भय को त्याग देना' },
        { word: 'बूझिये नहिं आन (Boojhiye nahin aan)', meaning: 'अन्य किसी भी मिथ्या प्रपंच की ओर ध्यान न देना' },
        { word: 'इन्द्री पसारा मेटिये (Indree pasaaraa metiye)', meaning: 'इंद्रियों के बाह्य फैलाव को अंतर्मुखी कर लेना' },
        { word: 'सहज मिलै भगवान (Sahaj milai Bhagavaan)', meaning: 'सहज भाव से परमात्मा का साक्षात्कार होना' }
      ],
      pb: [
        { word: 'ਬਿਸਾਰੀਏ', meaning: 'ਭੁਲਾ ਦਿਓ / ਤਿਆਗੋ' },
        { word: 'ਇੰਦਰੀ ਪਸਾਰਾ', meaning: 'ਇੰਦਰੀਆਂ ਦਾ ਬਾਹਰੀ ਫੈਲਾਅ' },
        { word: 'ਸਹਿਜ', meaning: 'ਕੁਦਰਤੀ / ਸੁਭਾਵਿਕ' }
      ],
      en: [
        { word: 'Chintaa bisaariye', meaning: 'Cast away all mental anxiety' },
        { word: 'Indree pasaaraa metiye', meaning: 'Withdraw the sensory projection from external objects' },
        { word: 'Sahaj milai', meaning: 'Effortlessly reveals the Supreme Divine' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा चित्त व्यर्थ चिंताओं और इंद्रियों के बाह्य पसारे में उलझा है या अंतर्मुखी होकर शांत है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਚਿੰਤਾਵਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਅੰਤਰਮੁਖ ਹੋਇਆ ਹੈ?'),
      en: 'Have I retracted the outward dispersion of my senses to experience effortless divine stillness?'
    },
    practicalApplication: {
      hi: 'चिंताओं को छोड़ें; ध्यान में इंद्रियों की ऊर्जा को समेटकर आज्ञा चक्र में एकाग्र करें।',
      pb: devanagariToGurmukhi('ਚਿੰਤਾ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਧਿਆਨ ਵਿੱਚ ਜੁੜੋ।'),
      en: 'Withdraw mental energy from sensory objects into the tranquil core of the heart.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे चित्त की चिंता मिटाकर और इंद्रियों के पसारे को समेटकर मुझे सहज ब्रह्म-साक्षात्कार प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਚਿੰਤਾਵਾਂ ਮਿਟਾ ਕੇ ਸਹਿਜ ਆਨੰਦ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dissolve my anxieties and gather my scattered senses into Your serene presence.'
    },
    quiz: []
  },
  {
    id: 'man-52',
    number: 1432,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५२',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੨',
      en: 'Man Ko Ang - 52',
    },
    text: {
      hi: 'कोटि करमकर पलक में, या मन विषया स्वाद।\nसतगुरु शब्द न मानहीं, जनम गंवाय बाद ।।',
      pb: devanagariToGurmukhi('कोटि करमकर पलक में, या मन विषया स्वाद। सतगुरु शब्द न मानहीं, जनम गंवाय बाद ।।'),
      en: 'Koti karamkar palak mein, yaa man vishayaa swaad. Satguru shabd na maanheen, janam ganvaay baad..'
    },
    transliteration: 'Koti karamkar palak mein, ya man vishaya swaad. Satguru shabd na maanheen, janam ganvaay baad.',
    bhavarth: {
      hi: 'यह अज्ञानी मन, विषयों के स्वाद में पड़कर पल-भर में ही करोड़ों दुष्कर्म कर डालता है। यह सतगुरु के ज्ञान-उपदेश को भी स्वीकार नहीं करता और व्यर्थ में ही सारा जीवन गंवा देता है, अर्थात संसार के झंझटों में पड़कर जीवन का सारा समय निकल जाता है।',
      pb: devanagariToGurmukhi('ਵਿਸ਼ਿਆਂ ਦੇ ਸੁਆਦ ਵਿੱਚ ਪੈ ਕੇ ਇਹ ਮਨ ਪਲ ਵਿੱਚ ਹੀ ਕਰੋੜਾਂ ਮਾੜੇ ਕਰਮ ਕਰ ਬੈਠਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਨੂੰ ਮੰਨਦਾ ਨਹੀਂ ਅਤੇ ਅਨਮੋਲ ਮਨੁੱਖਾ ਜਨਮ ਵਿਅਰਥ ਗਵਾ ਲੈਂਦਾ ਹੈ।'),
      en: 'Chasing the momentary taste of sensory pleasures, the reckless mind accumulates millions of karmic bondages in an instant. Refusing to heed the Satguru’s word, it squanders the priceless human birth in vain.'
    },
    wordMeanings: {
      hi: [
        { word: 'कोटि करम (Koti karam)', meaning: 'करोड़ों दुष्कर्म व बंधनकारी संस्कार' },
        { word: 'विषया स्वाद (Vishayaa swaad)', meaning: 'इंद्रियों के क्षणिक भोगों का स्वाद' },
        { word: 'जनम गंवाय बाद (Janam ganvaay baad)', meaning: 'अमूल्य मानव जीवन को व्यर्थ ही नष्ट कर देना' }
      ],
      pb: [
        { word: 'ਪਲਕ ਮੇਂ', meaning: 'ਅੱਖ ਦੇ ਫੋਰ ਵਿੱਚ' },
        { word: 'ਬਾਦ', meaning: 'ਵਿਅਰਥ / ਫਜ਼ੂਲ' }
      ],
      en: [
        { word: 'Koti karam', meaning: 'Millions of binding actions' },
        { word: 'Vishayaa swaad', meaning: 'The fleeting taste of sensory indulgences' },
        { word: 'Janam ganvaay baad', meaning: 'Squandering human incarnation uselessly' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं क्षणिक सांसारिक स्वाद के लिए अपने अनमोल जीवन और सतगुरु के वचनों की उपेक्षा कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੁਆਦਾਂ ਪਿੱਛੇ ਅਨਮੋਲ ਜੀਵਨ ਗਵਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I risking my spiritual liberation for transient sensory gratification?'
    },
    practicalApplication: {
      hi: 'मन के तात्कालिक प्रलोभनों को नकारें; सतगुरु के पावन शब्द को अपने जीवन का मार्गदर्शक बनाएं।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਨੂੰ ਮੰਨ ਕੇ ਜੀਵਨ ਸਫਲ ਕਰੋ।'),
      en: 'Reject instant gratification and anchor daily choices in the Satguru’s sacred Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन को विषयों के स्वाद से हटाकर अपने पावन शब्द के रस में लीन कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸ਼ਬਦ ਦਾ ਰਸ ਬਖਸ਼ੋ ਤਾਂ ਜੋ ਜਨਮ ਸਫਲ ਹੋਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Save me from squandering this birth; grant me the sublime taste of Your holy Word.'
    },
    quiz: []
  },
  {
    id: 'man-53',
    number: 1433,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५३',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੩',
      en: 'Man Ko Ang - 53',
    },
    text: {
      hi: 'कागद केरी नावरी, पानी केरी गंग।\nकहैं कबीर कैसे तिरै, पांच कुसंगी संग।।',
      pb: devanagariToGurmukhi('कागद केरी नावरी, पानी केरी गंग। कहैं कबीर कैसे तिरै, पांच कुसंगी संग।।'),
      en: 'Kaagad keree naawaree, paanee keree Gang. Kahain Kabeer kaise tirai, paanch kusangee sang..'
    },
    transliteration: 'Kagad keri nawari, paani keri Gang. Kahain Kabeer kaise tirai, paanch kusangi sang.',
    bhavarth: {
      hi: 'नाशवान तन-मन रूपी यह कागज की नाव, संसार के विषयों के जल-प्रवाह में पड़ी हुई है। सतगुरु कबीर साहेब फरमाते हैं कि भला यह कैसे पार लग सकती है, जब इसके ऊपर पांच कुसंगी (पांच विकार) इसे डुबोने के लिए बैठे हुए हैं।',
      pb: devanagariToGurmukhi('ਕਾਗਜ਼ ਦੀ ਕੱਚੀ ਬੇੜੀ ਹੈ ਅਤੇ ਭਿਆਨਕ ਪਾਣੀ ਦਾ ਵਹਾਅ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਕਿਵੇਂ ਪਾਰ ਲੰਘੇਗੀ ਜਦੋਂ ਇਸ ਵਿੱਚ ਪੰਜ ਕੁਸੰਗੀ ਵਿਕਾਰ ਬੈਠੇ ਹੋਏ ਹਨ?'),
      en: 'This fragile mortal frame is a paper boat floating upon the torrential river of worldly desires. Kabir asks: How can it ever reach the other shore when five destructive companions (the five senses/vices) are aboard weighing it down into the deep?'
    },
    wordMeanings: {
      hi: [
        { word: 'कागद केरी नावरी (Kaagad keree naawaree)', meaning: 'कागज की कमजोर, क्षणभंगुर नाव रूपी देह' },
        { word: 'पानी केरी गंग (Paanee keree Gang)', meaning: 'संसार रूपी गहरा और प्रचंड जल-प्रवाह' },
        { word: 'पांच कुसंगी संग (Paanch kusangee sang)', meaning: 'पांच विकारी साथियों (काम, क्रोध, लोभ, मोह, अहंकार) के साथ' }
      ],
      pb: [
        { word: 'ਨਾਵਰੀ', meaning: 'ਛੋਟੀ ਬੇੜੀ / ਕਿਸ਼ਤੀ' },
        { word: 'ਕੁਸੰਗੀ', meaning: 'ਬੁਰੀ ਸੰਗਤ ਵਾਲੇ ਵਿਕਾਰ' }
      ],
      en: [
        { word: 'Kaagad keree naawaree', meaning: 'A brittle paper boat (the mortal body)' },
        { word: 'Paanch kusangee', meaning: 'The five vicious companions (sensory passions)' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी कमजोर कागजी नाव को पांच विकारों के साथ भवसागर में डुबो रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਕਾਗਜ਼ ਦੀ ਬੇੜੀ ਪੰਜਾਂ ਵਿਕਾਰਾਂ ਨਾਲ ਡੁੱਬ ਰਹੀ ਹੈ?'),
      en: 'Is the fragile paper boat of my life sinking under the weight of five toxic sensory vices?'
    },
    practicalApplication: {
      hi: 'सतगुरु के सत्यनाम रूपी सुदृढ़ जहाज का आश्रय लें; तभी यह जीव भवसागर को पार कर सकता है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦਾ ਜਹਾਜ਼ ਫੜ ਕੇ ਪਾਰ ਲੰਘੋ।'),
      en: 'Board the indestructible ship of the Satguru’s holy Name to cross the worldly ocean.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी इस कागजी नाव को इन पांच कुसंगियों से बचाकर अपने ज्ञान के जहाज पर चढ़ा लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਲੰਘਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue my fragile paper boat from sinking and ferry me across the ocean of delusion.'
    },
    quiz: []
  },
  {
    id: 'man-54',
    number: 1434,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५४',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੪',
      en: 'Man Ko Ang - 54',
    },
    text: {
      hi: 'इन पांचौं से बंधिया, फिर फिर धरै शरीर।\nजो यह पांचौं बसि करै, सोई लागै तीर।।',
      pb: devanagariToGurmukhi('इन पांचौं से बंधिया, फिर फिर धरै शरीर। जो यह पांचौं बसि करै, सोई लागै तीर।।'),
      en: 'In paanchon se bandhiyaa, phir phir dharai shareer. Jo yeh paanchon basi karai, so-ee laagai teer..'
    },
    transliteration: 'In paanchon se bandhiya, phir phir dharai shareer. Jo yeh paanchon basi karai, soyi laagai teer.',
    bhavarth: {
      hi: 'इन पांचों ज्ञानेंद्रियों के विषयों में बंधकर ही, इस जीव को बार-बार शरीर धारण करना पड़ता है। जो इन पांचों की आसक्ति त्यागकर इन्हें वश में कर लेता है, वही भव-सागर से पार होकर निर्विघ्न मोक्ष को प्राप्त करता है।',
      pb: devanagariToGurmukhi('ਇਹਨਾਂ ਪੰਜਾਂ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਬੱਝ ਕੇ ਜੀਵ ਵਾਰ-ਵਾਰ ਜਨਮ ਲੈਂਦਾ ਹੈ। ਜੋ ਇਹਨਾਂ ਪੰਜਾਂ ਨੂੰ ਵੱਸ ਵਿੱਚ ਕਰ ਲੈਂਦਾ ਹੈ, ਉਹੀ ਭਵਸਾਗਰ ਦੇ ਕੰਢੇ (ਮੁਕਤੀ) ਲੱਗਦਾ ਹੈ।'),
      en: 'Bound tightly by the five senses, the soul takes birth in body after body across endless lifetimes. Only the one who subjugates these five reaches the safe shore of eternal liberation.'
    },
    wordMeanings: {
      hi: [
        { word: 'पांचौं से बंधिया (Paanchon se bandhiyaa)', meaning: 'पांचों ज्ञानेंद्रियों के मोह-जाल में जकड़ा हुआ' },
        { word: 'फिर फिर धरै शरीर (Phir phir dharai shareer)', meaning: 'बार-बार जन्म और मृत्यु के चक्र में पड़ना' },
        { word: 'सोई लागै तीर (So-ee laagai teer)', meaning: 'वही भवसागर के पार किनारे (मोक्ष) पहुंचता है' }
      ],
      pb: [
        { word: 'ਫਿਰ ਫਿਰ ਧਰੈ', meaning: 'ਮੁੜ-ਮੁੜ ਜਨਮ ਲੈਣਾ' },
        { word: 'ਲਾਗੈ ਤੀਰ', meaning: 'ਕੰਢੇ ਲੱਗਣਾ / ਮੁਕਤ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Paanchon se bandhiyaa', meaning: 'Shackled by the five senses' },
        { word: 'Laagai teer', meaning: 'Reaches the opposite shore of divine liberation' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी इंद्रियों के वशीभूत होकर पुनः जन्म-मरण के चक्र की तैयारी कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਇੰਦਰੀਆਂ ਦੇ ਵੱਸ ਹੋ ਕੇ ਜਨਮ-ਮਰਨ ਵਿੱਚ ਫਸ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I tightening the chains of rebirth by indulging unchecked sensory cravings?'
    },
    practicalApplication: {
      hi: 'इंद्रिय-संयम का अभ्यास करें; प्रतिदिन ध्यान और सिमरन से अपनी ऊर्जा को अंतर्मुखी बनाएं।',
      pb: devanagariToGurmukhi('ਇੰਦਰੀਆਂ ਨੂੰ ਕਾਬੂ ਕਰਕੇ ਭਗਤੀ ਵਿੱਚ ਲਾਓ।'),
      en: 'Subdue the senses through continuous inner remembrance and arrive at liberation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इन पांचों इंद्रियों के बंधनों से मुक्त कर भवसागर के पार किनारे लगा दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਪੰਜਾਂ ਬੰਧਨਾਂ ਤੋਂ ਛੁਡਾ ਕੇ ਮੁਕਤੀ ਦਾ ਕੰਢਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Unshackle me from the five senses and guide me safely to the shore of eternal freedom.'
    },
    quiz: []
  },
  {
    id: 'man-55',
    number: 1435,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५५',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੫',
      en: 'Man Ko Ang - 55',
    },
    text: {
      hi: 'मन पंछी तब लगि उडै, विषय वासना मांहि।\nज्ञान बाज की झपट में, जब लगि आवै नांहि।।',
      pb: devanagariToGurmukhi('मन पंछी तब लगि उडै, विषय वासना मांहि। ज्ञान बाज की झपट में, जब लगि आवै नांहि।।'),
      en: 'Man panchhee tab lagi udai, vishaya vaasanaa maanhi. Gyaan baaj kee jhapat mein, jab lagi aavai naanhi..'
    },
    transliteration: 'Man panchhi tab lagi udai, vishaya vasana maanhi. Gyaan baaj ki jhapat mein, jab lagi aavai naanhi.',
    bhavarth: {
      hi: 'मन रूपी पक्षी तब तक विषय-वासना के अंदर उड़ता रहता है, जब तक यह ज्ञान-रूपी बाज की पकड़ में नहीं आता। ज्ञान के क्षेत्र में आ जाने पर मन की अज्ञानता समाप्त हो जाती है और ज्ञान के परम सुख का अनुभव होता है, अर्थात मन सांसारिक विषयों से विमुख होकर अंतर्मुखी हो जाता है।',
      pb: devanagariToGurmukhi('ਮਨ ਰੂਪੀ ਪੰਛੀ ਓਦੋਂ ਤੱਕ ਵਿਸ਼ੇ-ਵਾਸਨਾਵਾਂ ਵਿੱਚ ਉੱਡਦਾ ਰਹਿੰਦਾ ਹੈ, ਜਦੋਂ ਤੱਕ ਗੁਰੂ ਦੇ ਗਿਆਨ ਰੂਪੀ ਬਾਜ਼ ਦੇ ਪੰਜੇ ਵਿੱਚ ਨਹੀਂ ਆ ਜਾਂਦਾ। ਗਿਆਨ ਮਿਲਦਿਆਂ ਹੀ ਮਨ ਦੀਆਂ ਭਟਕਣਾਂ ਮੁੱਕ ਜਾਂਦੀਆਂ ਹਨ।'),
      en: 'The bird of the mind continues to wander freely in the skies of worldly indulgence only until it is decisively swooped upon and captured in the talons of the Hawk of divine Wisdom (Gyaan Baaj).'
    },
    wordMeanings: {
      hi: [
        { word: 'मन पंछी (Man panchhee)', meaning: 'मन रूपी चंचल पक्षी' },
        { word: 'विषय वासना मांहि (Vishaya vaasanaa maanhi)', meaning: 'भोग-विलास और सांसारिक इच्छाओं के आकाश में' },
        { word: 'ज्ञान बाज (Gyaan baaj)', meaning: 'सतगुरु का तीक्ष्ण और शक्तिशाली ब्रह्म-ज्ञान रूपी बाज' }
      ],
      pb: [
        { word: 'ਗਿਆਨ ਬਾਜ', meaning: 'ਸਤਿਗੁਰੂ ਦਾ ਗਿਆਨ ਰੂਪੀ ਬਾਜ਼' },
        { word: 'ਝਪਟ', meaning: 'ਪੰਜੇ ਵਿੱਚ ਫੜਨਾ' }
      ],
      en: [
        { word: 'Man panchhee', meaning: 'The restless bird of the mind' },
        { word: 'Gyaan baaj', meaning: 'The sovereign hawk of spiritual Enlightenment' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन अभी भी वासनाओं के आकाश में भटक रहा है, या सतगुरु के ज्ञान-बाज की पकड़ में आ चुका है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਕਾਬੂ ਆਇਆ ਹੈ?'),
      en: 'Has my wandering mind been captured by the transformative power of divine wisdom?'
    },
    practicalApplication: {
      hi: 'सतगुरु के ज्ञान-वचनों का गहन मनन करें; ज्ञान का प्रकाश होते ही मन की वासनाएं स्वतः समाप्त हो जाती हैं।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਦੇ ਵਿਚਾਰ ਨਾਲ ਮਨ ਦੀਆਂ ਵਾਸਨਾਵਾਂ ਮਿਟਾਓ।'),
      en: 'Surrender mental cravings to the penetrating discernment of spiritual wisdom.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपने ज्ञान रूपी बाज से मेरे चंचल मन-पक्षी को पकड़कर वासनाओं से मुक्त कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪਣੇ ਗਿਆਨ ਦੇ ਬਾਜ਼ ਨਾਲ ਮੇਰੇ ਮਨ ਨੂੰ ਸਾਧੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Let the hawk of Your supreme wisdom capture my wayward mind and turn it toward Truth.'
    },
    quiz: []
  },
  {
    id: 'man-56',
    number: 1436,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५६',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੬',
      en: 'Man Ko Ang - 56',
    },
    text: {
      hi: 'मन नहिं मारा करि सका, न मन पांच प्रहारि।\nसील सांच सरधा नहीं, अजहुं इन्द्रि उघारि।।',
      pb: devanagariToGurmukhi('मन नहिं मारा करि सका, न मन पांच प्रहारि। सील सांच सरधा नहीं, अजहुं इन्द्रि उघारि।।'),
      en: 'Man nahin maaraa kari sakaa, na man paanch prahaari. Seel saanch sardhaa naheen, ajahun indri ughaari..'
    },
    transliteration: 'Man nahin maara kari saka, na man paanch prahari. Seel saanch sardha nahin, ajahun indri ughari.',
    bhavarth: {
      hi: 'जीव इस उन्मत्त मन को मारकर अपने वश में नहीं कर सका और न ही इन पांच ज्ञानेन्द्रियों के प्रहार को रोकने में समर्थ हो सका, अर्थात ये अपने जिन पांच-विषयों की ओर दौड़ती हैं, उनसे रोक नहीं पाया। हृदय में विनम्रता, सत्य तथा श्रद्धा भी नहीं है। इसी कारण इंद्रियां नग्न (स्वच्छंद) होकर विचरण करती हैं।',
      pb: devanagariToGurmukhi('ਨਾ ਤਾਂ ਮਨ ਨੂੰ ਵੱਸ ਕਰ ਸਕਿਆ ਅਤੇ ਨਾ ਹੀ ਪੰਜਾਂ ਇੰਦਰੀਆਂ ਦੇ ਹਮਲੇ ਨੂੰ ਰੋਕ ਸਕਿਆ। ਹਿਰਦੇ ਵਿੱਚ ਸ਼ੀਲ, ਸੱਚ ਅਤੇ ਸ਼ਰਧਾ ਵੀ ਨਹੀਂ ਹੈ, ਇਸੇ ਲਈ ਇੰਦਰੀਆਂ ਬੇਲਗਾਮ ਭਟਕ ਰਹੀਆਂ ਹਨ।'),
      en: 'The seeker neither disciplined the wild mind nor repelled the assault of the five sensory cravings. Lacking moral purity (Sheel), Truth (Saanch), and reverent faith (Shardha), the senses roam unrestrained in shameless indulgence.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन नहिं मारा (Man nahin maaraa)', meaning: 'मन के विकारों को नष्ट नहीं कर सका' },
        { word: 'पांच प्रहारि (Paanch prahaari)', meaning: 'पांचों ज्ञानेंद्रियों के आक्रमण को रोकना' },
        { word: 'सील सांच सरधा (Seel saanch sardhaa)', meaning: 'सदाचार, सत्यनिष्ठा और गुरु-श्रद्धा' },
        { word: 'इन्द्रि उघारि (Indri ughaari)', meaning: 'इंद्रियों का स्वच्छंद, नग्न व अनियंत्रित हो जाना' }
      ],
      pb: [
        { word: 'ਸੀਲ ਸਾਂਚ ਸਰਧਾ', meaning: 'ਸ਼ੀਲ, ਸੱਚ ਤੇ ਸ਼ਰਧਾ' },
        { word: 'ਉਘਾਰਿ', meaning: 'ਬੇਲਗਾਮ / ਖੁੱਲ੍ਹੇ-ਆਮ' }
      ],
      en: [
        { word: 'Man nahin maaraa', meaning: 'Failed to conquer mental desires' },
        { word: 'Seel saanch sardhaa', meaning: 'Moral virtue, unyielding Truth, and deep faith' },
        { word: 'Indri ughaari', meaning: 'Senses running wild without restraint' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में शील, सत्य और श्रद्धा की कमी है जिसके कारण इंद्रियां स्वच्छंद हो रही हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਅਤੇ ਸ਼ਰਧਾ ਦੀ ਕਮੀ ਹੈ?'),
      en: 'Am I lacking the foundation of virtue, truth, and faith needed to tame the senses?'
    },
    practicalApplication: {
      hi: 'हृदय में शील (सदाचार), सत्य और अटूट गुरु-श्रद्धा धारण करें; ये ही इंद्रियों को वश में करने के अस्त्र हैं।',
      pb: devanagariToGurmukhi('ਸ਼ੀਲ ਤੇ ਸੱਚ ਧਾਰਨ ਕਰਕੇ ਇੰਦਰੀਆਂ ਨੂੰ ਸੰਜਮ ਵਿੱਚ ਰੱਖੋ।'),
      en: 'Clothe the soul in virtue, truthfulness, and reverence to bridle the wild senses.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे शील, सत्य और श्रद्धा का पावन आभूषण प्रदान कीजिए ताकि मेरी इंद्रियां सन्मार्ग पर चलें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚ, ਸ਼ੀਲ ਅਤੇ ਸ਼ਰਧਾ ਦਾ ਦਾਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the divine virtues of purity, truth, and faith to subdue all sensory impulses.'
    },
    quiz: []
  },
  {
    id: 'man-57',
    number: 1437,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५७',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੭',
      en: 'Man Ko Ang - 57',
    },
    text: {
      hi: 'दौड़त दौड़त दौड़िया, जेती मन की दौर।\nदौड़ि थके मन थिर भया, वस्तु ठौर की ठौर।।',
      pb: devanagariToGurmukhi('दौड़त दौड़त दौड़िया, जेती मन की दौर। दौड़ि थके मन थिर भया, वस्तु ठौर की ठौर।।'),
      en: 'Daudat daudat daudiyaa, jeetee man kee daur. Daudi thake man thir bhayaa, vastu thaur kee thaur..'
    },
    transliteration: 'Daudat daudat daudiya, jeti man ki daur. Daudi thake man thir bhaya, vastu thaur ki thaur.',
    bhavarth: {
      hi: 'जहां तक मन की कल्पनाएं थीं, वहां तक बहुत दौड़ लगाई, परंतु सब कुछ व्यर्थ गया। जब दौड़ते-दौड़ते थक गया और मन शांत-स्थिर हुआ, तो पता चला कि जिसके लिए अब तक दौड़ होती रही, वह अनमोल वस्तु तो सहज भाव से प्राप्त हो सकती है अर्थात परमात्मा का मार्ग सुलभ व सहज है परन्तु जीव मन की मार के कारण अन्यत्र दौड़ता फिरता है।',
      pb: devanagariToGurmukhi('ਜਿੱਥੋਂ ਤੱਕ ਮਨ ਦੀ ਦੌੜ ਸੀ ਬਹੁਤ ਭੱਜ-ਦੌੜ ਕੀਤੀ। ਜਦੋਂ ਭੱਜ ਕੇ ਥੱਕ ਗਿਆ ਅਤੇ ਮਨ ਸ਼ਾਂਤ ਹੋਇਆ, ਤਾਂ ਪਤਾ ਲੱਗਾ ਕਿ ਅਸਲ ਪ੍ਰਭੂ ਤਾਂ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਹਾਜ਼ਰ-ਨਾਜ਼ਰ ਸੀ।'),
      en: 'The soul ran frantically as far and wide as mental imagination could stretch. When exhausted with outward running the mind finally came to rest, it discovered that the priceless treasure was right here at home within the heart all along.'
    },
    wordMeanings: {
      hi: [
        { word: 'जेती मन की दौर (Jeetee man kee daur)', meaning: 'जहां तक मन की इच्छाओं व कल्पनाओं का विस्तार था' },
        { word: 'मन थिर भया (Man thir bhayaa)', meaning: 'मन जब शांत, एकाग्र और अंतर्मुख हुआ' },
        { word: 'वस्तु ठौर की ठौर (Vastu thaur kee thaur)', meaning: 'परमात्मा रूपी अनमोल वस्तु अपने ही हृदय में प्राप्त हो गई' }
      ],
      pb: [
        { word: 'ਦੌੜਿ ਥਕੇ', meaning: 'ਭੱਜ ਕੇ ਥੱਕ ਗਿਆ' },
        { word: 'ਠੌਰ ਕੀ ਠੌਰ', meaning: 'ਆਪਣੀ ਹੀ ਥਾਂ \'ਤੇ (ਹਿਰਦੇ ਅੰਦਰ)' }
      ],
      en: [
        { word: 'Jeetee man kee daur', meaning: 'As far as mental ambition could race' },
        { word: 'Man thir bhayaa', meaning: 'When the mind became profoundly still' },
        { word: 'Vastu thaur kee thaur', meaning: 'The divine treasure was right where it always was—within' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बाहर की दौड़-धूप छोड़कर अपने हृदय में विराजमान परमात्मा को अनुभव कर पा रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਾਹਰੀ ਭਟਕਣ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਪ੍ਰਭੂ ਨੂੰ ਪਛਾਣਿਆ ਹੈ?'),
      en: 'Have I ceased the outward chase to realize the divine presence resting in my own heart?'
    },
    practicalApplication: {
      hi: 'बाहरी खोज छोड़कर शांत बैठें; अंतर्मुखी ध्यान में ही आत्म-साक्षात्कार का परम धन सुलभ है।',
      pb: devanagariToGurmukhi('ਬਾਹਰੀ ਭਟਕਣ ਛੱਡ ਕੇ ਅੰਤਰਧਿਆਨ ਹੋਵੋ।'),
      en: 'Halt all outward frantic seeking and uncover the timeless presence within.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी समस्त बाहरी दौड़ों को शांत कर मुझे अपने हृदय-मंदिर में आपका पावन दर्शन कराइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਭਟਕਣ ਮਿਟਾ ਕੇ ਅੰਦਰੂਨੀ ਦਰਸ਼ਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Quiet all outward restless running and reveal Your radiant presence within my heart.'
    },
    quiz: []
  },
  {
    id: 'man-58',
    number: 1438,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५८',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੮',
      en: 'Man Ko Ang - 58',
    },
    text: {
      hi: 'मन अपना समुझाय ले, आया गाफिल होय।\nबिन समुझे उठि जायेगा, फोकट फेरा तोय।।',
      pb: devanagariToGurmukhi('मन अपना समुझाय ले, आया गाफिल होय। बिन समुझे उठि जायेगा, फोकट फेरा तोय।।'),
      en: 'Man apnaa samujhaay le, aayaa gaaphil hoy. Bin samujhe uthi jaayegaa, phokat pheraa toy..'
    },
    transliteration: 'Man apna samujhaay le, aaya gaaphil hoy. Bin samujhe uthi jaayega, phokat phera toy.',
    bhavarth: {
      hi: 'हे मानव! तू अपने मन को समझा ले, इसे शांत करके अपने वश में कर ले। इस अनमोल मनुष्य-जीवन को भूल-भुलैया में मत डाल, अतः सावधान हो जा। होश में आ, नहीं तो बिना भक्ति-ज्ञान व साधना के तू यूं ही इस संसार से विदा हो जाएगा और मनुष्य देह में आने का तेरा प्रयोजन व्यर्थ हो जाएगा। ऐसा अवसर फिर मिलना कठिन है।',
      pb: devanagariToGurmukhi('ਹੇ ਇਨਸਾਨ! ਆਪਣੇ ਮਨ ਨੂੰ ਗਿਆਨ ਨਾਲ ਸਮਝਾ ਲੈ, ਤੂੰ ਬੇਪਰਵਾਹ ਹੋ ਕੇ ਆਇਆ ਹੈਂ। ਜੇ ਬਿਨਾਂ ਸੋਝੀ ਦੇ ਤੁਰ ਗਿਆ ਤਾਂ ਤੇਰਾ ਇਹ ਮਨੁੱਖਾ ਜਨਮ ਦਾ ਫੇਰਾ ਬਿਲਕੁਲ ਵਿਅਰਥ ਹੋ ਜਾਵੇਗਾ।'),
      en: 'O human soul! Admonish and enlighten your own mind; you have arrived here utterly heedless and asleep. If you depart without realizing Self and Truth, this entire earthly journey will have been a hollow, wasted round of transmigration.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन समुझाय ले (Man samujhaay le)', meaning: 'मन को विवेक और ज्ञान से दीक्षित कर लेना' },
        { word: 'गाफिल होय (Gaaphil hoy)', meaning: 'असावधान, अज्ञानी, बेपरवाह बनकर' },
        { word: 'फोकट फेरा (Phokat pheraa)', meaning: 'व्यर्थ का आवागमन, मनुष्य जीवन की निरर्थक बर्बादी' }
      ],
      pb: [
        { word: 'ਗਾਫਿਲ', meaning: 'ਬੇਪਰਵਾਹ / ਅਵੇਸਲਾ' },
        { word: 'ਫੋਕਟ ਫੇਰਾ', meaning: 'ਵਿਅਰਥ ਗੇੜਾ / ਬੇਮਤਲਬ ਫੇਰੀ' }
      ],
      en: [
        { word: 'Gaaphil hoy', meaning: 'Heedless and spiritually asleep' },
        { word: 'Phokat pheraa', meaning: 'A futile and wasted round of worldly existence' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मनुष्य जीवन के परम उद्देश्य को भूलकर गाफिल अवस्था में जीवन व्यतीत कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਨੁੱਖਾ ਜਨਮ ਦਾ ਮਕਸਦ ਭੁੱਲ ਕੇ ਗਾਫਿਲ ਹਾਂ?'),
      en: 'Am I sleepwalking through this precious human incarnation without fulfilling its divine purpose?'
    },
    practicalApplication: {
      hi: 'गाफिलपन छोड़ें; आज ही से नित्य स्वाध्याय, सत्संग और नाम-सिमरन में लगकर जीवन को सार्थक बनाएं।',
      pb: devanagariToGurmukhi('ਅਵੇਸਲਾਪਨ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Cast off spiritual negligence; utilize this rare incarnation for Self-realization.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे गाफिल मन को जगाकर मुझे भक्ति का सच्चा मार्ग दिखाइए ताकि मेरा यह फेरा सफल हो। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਅਵੇਸਲੇ ਮਨ ਨੂੰ ਜਗਾ ਕੇ ਜਨਮ ਸਫਲ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken my heedless soul and ensure that this precious human journey yields eternal liberation.'
    },
    quiz: []
  },
  {
    id: 'man-59',
    number: 1439,
    grantha: 'Sakhi Sangrah',
    category: 'chitt-shuddhi',
    categoryTitle: {
      hi: 'मन को अंग - ५९',
      pb: 'ਮਨ ਕੋ ਅੰਗ - ੫੯',
      en: 'Man Ko Ang - 59',
    },
    text: {
      hi: 'मन के हारे हार है, मन के जीते जीत।\nकहैं कबीर गुरु पाइये, मन ही के प्रतीत।।',
      pb: devanagariToGurmukhi('मन के हारे हार है, मन के जीते जीत। कहैं कबीर गुरु पाइये, मन ही के प्रतीत।।'),
      en: 'Man ke haare haar hai, man ke jeete jeet. Kahain Kabeer Guru paaiye, man hee ke parteet..'
    },
    transliteration: 'Man ke haare haar hai, man ke jeete jeet. Kahain Kabeer Guru paaiye, man hi ke parteet.',
    bhavarth: {
      hi: 'जहां पर मन उदास होकर अपनी हार स्वीकार कर लेता है, वहां उसकी हार ही होती है और जहां पर मन साहस और उत्साह से भरकर जीत की ओर अग्रसर होता है, वहां जीत ही प्राप्त होती है। सतगुरु कबीर साहेब फरमाते हैं कि यदि मन में सच्ची श्रद्धा और सुदृढ़ विश्वास हो तो निश्चित ही समर्थ सतगुरु का दर्शन-मिलन होता है।',
      pb: devanagariToGurmukhi('ਮਨ ਦੇ ਹਾਰਨ ਨਾਲ ਹੀ ਹਾਰ ਹੁੰਦੀ ਹੈ ਅਤੇ ਮਨ ਦੇ ਜਿੱਤਣ ਨਾਲ ਹੀ ਸੱਚੀ ਜਿੱਤ ਹੁੰਦੀ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਨ ਵਿੱਚ ਸੱਚੀ ਸ਼ਰਧਾ ਤੇ ਦ੍ਰਿੜ੍ਹ ਭਰੋਸਾ ਹੋਵੇ ਤਾਂ ਪੂਰੇ ਸਤਿਗੁਰੂ ਦੀ ਪ੍ਰਾਪਤੀ ਹੋ ਜਾਂਦੀ ਹੈ।'),
      en: 'Defeat lies only in yielding to the dejection of the mind, and victory is won when the mind is conquered through divine resolve. Kabir proclaims: When the mind is anchored in unwavering faith (Parteet), one attains direct union with the Supreme Satguru.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन के हारे हार (Man ke haare haar)', meaning: 'मन के हताश होने से जीवन में पराजय' },
        { word: 'मन के जीते जीत (Man ke jeete jeet)', meaning: 'मन को वश में करने से समस्त संसार पर विजय' },
        { word: 'मन ही के प्रतीत (Man hee ke parteet)', meaning: 'मन में दृढ़ विश्वास, निष्ठा और अटूट श्रद्धा होना' }
      ],
      pb: [
        { word: 'ਜੀਤੇ ਜੀਤ', meaning: 'ਮਨ ਜਿੱਤਣ ਨਾਲ ਜਿੱਤ' },
        { word: 'ਪ੍ਰਤੀਤ', meaning: 'ਸੱਚਾ ਭਰੋਸਾ / ਸ਼ਰਧਾ' }
      ],
      en: [
        { word: 'Man ke haare haar', meaning: 'Surrendering to mental defeat is true defeat' },
        { word: 'Man ke jeete jeet', meaning: 'Conquering the mind is absolute victory' },
        { word: 'Parteet', meaning: 'Steadfast faith and unshakeable conviction' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा विश्वास सतगुरु और सत्यनाम में इतना सुदृढ़ है कि मन की कोई भी निराशा मुझे विचलित नहीं कर सकती?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਗੁਰੂ \'ਤੇ ਅਟੁੱਟ ਭਰੋਸਾ ਹੈ?'),
      en: 'Is my faith in the Satguru and Truth steadfast enough to conquer any mental despair?'
    },
    practicalApplication: {
      hi: 'निराशा और संशय को त्यागें; अटूट श्रद्धा और आत्मविश्वास के साथ मन को जीतकर परम लक्ष्य की ओर बढ़ें।',
      pb: devanagariToGurmukhi('ਦ੍ਰਿੜ੍ਹ ਭਰੋਸੇ ਨਾਲ ਮਨ ਨੂੰ ਜਿੱਤ ਕੇ ਭਗਤੀ ਦੇ ਰਾਹ \'ਤੇ ਤੁਰੋ।'),
      en: 'Cultivate unshakeable faith in the Master; win the inner war of the mind.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अटूट श्रद्धा और विश्वास की वह शक्ति दीजिए जिससे मैं अपने मन को जीतकर आपके पावन चरणों में अमर पद प्राप्त कर सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਟੁੱਟ ਪ੍ਰਤੀਤ ਅਤੇ ਮਨ ਜਿੱਤਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the unyielding faith to conquer my mind and attain eternal refuge at Your holy feet.'
    },
    quiz: []
  }
];
