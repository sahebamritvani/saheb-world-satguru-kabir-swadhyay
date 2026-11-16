import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_NINDA_KO_ANG: Sakhi[] = [
  {
    id: 'ninda-1',
    number: 1566,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧',
      en: 'Ninda Ko Ang - 1',
    },
    text: {
      hi: 'निन्दक दूर न कीजिये, कीजै आदर मान।\nनिर्मल तन मन सब करै, बके आन ही आन।।',
      pb: 'ਨਿੰਦਕ ਦੂਰ ਨ ਕੀਜੀਏ, ਕੀਜੈ ਆਦਰ ਮਾਨ।\nਨਿਰਮਲ ਤਨ ਮਨ ਸਬ ਕਰੈ, ਬਕੇ ਆਨ ਹੀ ਆਨ।।',
      en: 'Nindak door na keejiye, keejai aadar maan. Nirmal tan man sab karai, bake aan hee aan..',
    },
    transliteration: 'Nindak door na keejiye, keejai aadar maan. Nirmal tan man sab karai, bake aan hee aan.',
    bhavarth: {
      hi: 'अपने निंदक को कभी दूर नहीं करना चाहिए, बल्कि उसका आदर-सत्कार करना चाहिए। वह आपके आचरण के विषय में उल्टा-सीधा बक-बककर, आपके तन-मन व वचन को शुद्ध करेगा।',
      pb: 'ਆਪਣੀ ਨਿੰਦਾ ਕਰਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਦੂਰ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ, ਸਗੋਂ ਉਸਦਾ ਆਦਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਉਹ ਤੁਹਾਡੇ ਬਾਰੇ ਉਲਟਾ-ਸਿੱਧਾ ਬੋਲ ਕੇ ਤੁਹਾਡੇ ਤਨ ਅਤੇ ਮਨ ਨੂੰ ਸ਼ੁੱਧ ਕਰਦਾ ਹੈ।',
      en: 'Never drive away your critic; instead, welcome and respect them. By continuously speaking ill of your conduct, they clean and purify your body, mind, and speech without any cost.',
    },
    wordMeanings: {
      hi: [
        { word: 'निन्दक (Nindak)', meaning: 'निंदा करने वाला / आलोचक' },
        { word: 'आन ही आन (Aan hee aan)', meaning: 'उल्टा-सीधा / विभिन्न बातें' },
        { word: 'बके (Bake)', meaning: 'बोलना / बकना' }
      ],
      pb: [
        { word: 'ਨਿੰਦਕ (Nindak)', meaning: 'ਨਿੰਦਾ ਕਰਨ ਵਾਲਾ' },
        { word: 'ਆਨ ਹੀ ਆਨ (Aan hee aan)', meaning: 'ਉਲਟਾ-ਸਿੱਧਾ' },
        { word: 'ਬਕੇ (Bake)', meaning: 'ਬੋਲਣਾ' }
      ],
      en: [
        { word: 'Nindak', meaning: 'Slanderer / Critic' },
        { word: 'Aan hee aan', meaning: 'Randomly / Unrelated things / Ill-words' },
        { word: 'Bake', meaning: 'Prattles / Speaks' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने निंदकों से नाराज हो जाता हूँ, या उनके वचनों को आत्म-सुधार का साधन मानता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਨਿੰਦਕਾਂ ਤੋਂ ਗੁੱਸੇ ਹੁੰਦਾ ਹਾਂ ਜਾਂ ਉਹਨਾਂ ਤੋਂ ਸਿੱਖਦਾ ਹਾਂ?',
      en: 'Do I get angry at my critics, or do I use their harsh feedback as a tool for self-purification?'
    },
    practicalApplication: {
      hi: 'निंदक की बातों पर उत्तेजित न होकर अपने भीतर के दोषों को खोजें और शांत रहें।',
      pb: 'ਨਿੰਦਕ ਦੀਆਂ ਗੱਲਾਂ ਤੇ ਗੁੱਸਾ ਨਾ ਕਰੋ, ਸ਼ਾਂਤ ਰਹਿ ਕੇ ਆਪਣੇ ਗੁਣ ਵੇਖੋ।',
      en: 'Instead of reacting to criticism, remain peaceful and inspect your own character objectively.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे निंदा व प्रशंसा से ऊपर उठकर निष्कपट व शांत मन से रहने की शक्ति प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿੰਦਾ-ਉਸਤਤ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸ਼ਾਂਤ ਰਹਿਣ ਦੀ ਸ਼ਕਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Divine Master! Grant me the strength to rise above both praise and blame, keeping my heart forever peaceful.'
    },
    quiz: []
  },
  {
    id: 'ninda-2',
    number: 1567,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - २',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੨',
      en: 'Ninda Ko Ang - 2',
    },
    text: {
      hi: 'निन्दक तो है नाक बिन, निसदिन विष्ठा खाय।\nगुन छाड़े अवगुन गहै, तिसका यही सुभाय।।',
      pb: 'ਨਿੰਦਕ ਤੋ ਹੈ ਨਾਕ ਬਿਨ, ਨਿਸਦਿਨ ਵਿਸ਼੍ਠਾ ਖਾਇ।\nਗੁਨ ਛਾੜੇ ਅਵਗੁਨ ਗਹੈ, ਤਿਸਕਾ ਯਹੀ ਸੁਭਾਇ।।',
      en: 'Nindak to hai naak bin, nisadin vishtha khaay. Gun chhaade avagun gahai, tisaka yahee subhaay..',
    },
    transliteration: 'Nindak to hai naak bin, nisadin vishtha khaay. Gun chhaade avagun gahai, tisaka yahee subhaay.',
    bhavarth: {
      hi: 'निंदक नाकरहित होता है, वह रात-दिन पराए लोगों के दोष रूपी मल को खाता है। वह लोगों के सद्गुणों को त्यागकर केवल दुर्गुणों को ही ग्रहण करता है, उसका यही स्वभाव बन जाता है।',
      pb: 'ਨਿੰਦਕ ਨੱਕ ਤੋਂ ਬਿਨਾਂ ਹੁੰਦਾ ਹੈ, ਉਹ ਦਿਨ-ਰਾਤ ਦੂਜਿਆਂ ਦੇ ਦੋਸ਼ ਰੂਪੀ ਮਲ ਨੂੰ ਖਾਂਦਾ ਹੈ। ਉਹ ਚੰਗੇ ਗੁਣਾਂ ਨੂੰ ਛੱਡ ਕੇ ਕੇਵਲ ਔਗੁਣਾਂ ਨੂੰ ਹੀ ਫੜਦਾ ਹੈ।',
      en: 'A slanderer is like one without a nose (shameless), feeding day and night on the filth of others\' faults. By abandoning virtues and consuming only vices, they degrade their own nature.',
    },
    wordMeanings: {
      hi: [
        { word: 'नाक बिन (Naak bin)', meaning: 'बिना नाक के / निर्लज्ज' },
        { word: 'विष्ठा (Vishtha)', meaning: 'मल / गंदगी / दोष' },
        { word: 'गहै (Gahai)', meaning: 'पकड़ना / ग्रहण करना' }
      ],
      pb: [
        { word: 'ਨਾਕ ਬਿਨ (Naak bin)', meaning: 'ਬਿਨਾਂ ਨੱਕ ਤੋਂ / ਬੇਸ਼ਰਮ' },
        { word: 'ਵਿਸ਼੍ਠਾ (Vishtha)', meaning: 'ਗੰਦਗੀ / ਦੋਸ਼' },
        { word: 'ਗਹੈ (Gahai)', meaning: 'ਗ੍ਰਹਿਣ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Naak bin', meaning: 'Without nose / Shameless' },
        { word: 'Vishtha', meaning: 'Filth / Excrement / Faults' },
        { word: 'Gahai', meaning: 'To grasp / Seize' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन भी कभी दूसरों के सद्गुणों को छोड़कर केवल उनके अवगुणों की चर्चा करने में तो नहीं लग जाता?',
      pb: 'ਕੀ ਮੇਰਾ ਮਨ ਵੀ ਕਿਸੇ ਦੇ ਔਗੁਣਾਂ ਵੱਲ ਆਕਰਸ਼ਿਤ ਹੁੰਦਾ ਹੈ?',
      en: 'Does my mind ever slip into the habit of ignoring the virtues of others and focusing solely on their flaws?'
    },
    practicalApplication: {
      hi: 'मधुमक्खी की तरह केवल गुणों रूपी सुगंधित फूलों को ग्रहण करें, निंदक की तरह गंदगी पर न बैठें।',
      pb: 'ਚੰਗੇ ਗੁਣਾਂ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰੋ, ਦੂਜਿਆਂ ਦੀ ਬੁਰਾਈ ਸੁਣਨ ਅਤੇ ਕਰਨ ਤੋਂ ਬਚੋ।',
      en: 'Like a honeybee, collect only the sweet essence of goodness, rather than gathering filth.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मेरे हृदय को सर्वथा निर्मल रखें ताकि मैं सदा दूसरों में शुभ व कल्याणकारी सद्गुण ही देखूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਦੂਜਿਆਂ ਦੇ ਗੁਣ ਵੇਖਣ ਵਾਲੀ ਨਜ਼ਰ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Keep my vision pure so that I may focus entirely on the good and beautiful in everyone.'
    },
    quiz: []
  },
  {
    id: 'ninda-3',
    number: 1568,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ३',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੩',
      en: 'Ninda Ko Ang - 3',
    },
    text: {
      hi: 'अड़सठ तीरथ निन्दक न्हाई, देह पलोसे मैल न जाई।\nछप्पन कोटि धरती फिरि आवै, तो भी निन्दक नरकहिं जावे।।',
      pb: 'ਅੜਸਠ ਤੀਰਥ ਨਿੰਦਕ ਨ੍ਹਾਈ, ਦੇਹ ਪਲੋਸੇ ਮੈਲ ਨ ਜਾਈ।\nਛੱਪਨ ਕੋਟਿ ਧਰਤੀ ਫਿਰਿ ਆਵੈ, ਤੋ ਭੀ ਨਿੰਦਕ ਨਰਕਹਿਂ ਜਾਵੈ।।',
      en: 'Adasath teerath nindak nhaai, deh palose mail na jaai. Chhappan koti dharatee phiri aavai, to bhee nindak narakahin jaave..',
    },
    transliteration: 'Adasath teerath nindak nhaai, deh palose mail na jaai. Chhappan koti dharatee phiri aavai, to bhee nindak narakahin jaave.',
    bhavarth: {
      hi: 'यदि निंदक अड़सठ तीर्थों में शरीर को मल-मलकर स्नान करे, तो भी उसके मन का मैल नहीं जा सकता। पृथ्वी की चाहे वह छप्पन करोड़ बार परिक्रमा कर आए, तो भी पराए की निंदा करने वाला नरक में ही स्थान प्राप्त करेगा।',
      pb: 'ਜੇਕਰ ਨਿੰਦਕ ਅਠਾਹਠ ਤੀਰਥਾਂ ਤੇ ਇਸ਼ਨਾਨ ਕਰ ਲਵੇ, ਤਾਂ ਵੀ ਉਸਦੇ ਮਨ ਦੀ ਮੈਲ ਨਹੀਂ ਜਾਂਦੀ। ਭਾਵੇਂ ਉਹ ਧਰਤੀ ਦੀ ਕਰੋੜਾਂ ਵਾਰ ਪਰਕਰਮਾ ਕਰ ਆਵੇ, ਫਿਰ ਵੀ ਨਰਕ ਵਿੱਚ ਹੀ ਜਾਵੇਗਾ।',
      en: 'Even if a slanderer bathes at all the sixty-eight holy pilgrimage sites, rubbing their body clean, their inner filth remains. Though they traverse the earth millions of times, they cannot escape hellish torment.',
    },
    wordMeanings: {
      hi: [
        { word: 'अड़सठ तीरथ (Adasath teerath)', meaning: '६८ हिंदू पवित्र तीर्थस्थल' },
        { word: 'देह पलोसे (Deh palose)', meaning: 'मल-मलकर शरीर धोना' },
        { word: 'नरकहिं (Narakahin)', meaning: 'नरक / भारी दुःख में' }
      ],
      pb: [
        { word: 'ਅੜਸਠ ਤੀਰਥ (Adasath teerath)', meaning: '੬੮ ਪਵਿੱਤਰ ਤੀਰਥ' },
        { word: 'ਦੇਹ ਪਲੋਸੇ (Deh palose)', meaning: 'ਮਲ-ਮਲ ਕੇ ਸਰੀਰ ਧੋਣਾ' },
        { word: 'ਨਰਕਹਿਂ (Narakahin)', meaning: 'ਨਰਕ ਵਿੱਚ' }
      ],
      en: [
        { word: 'Adasath teerath', meaning: 'The 68 holy pilgrimages' },
        { word: 'Deh palose', meaning: 'Rubbing / Massaging the body' },
        { word: 'Narakahin', meaning: 'Into hell / Ultimate misery' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल बाहरी धार्मिक आडम्बरों या तीर्थयात्राओं से मन को शुद्ध मान रहा हूँ, जबकि हृदय में दूसरों की निंदा भरी है?',
      pb: 'ਕੀ ਮੇਰੀਆਂ ਧਾਰਮਿਕ ਯਾਤਰਾਵਾਂ ਵਿਅਰਥ ਹਨ ਜੇਕਰ ਮੇਰੇ ਮਨ ਵਿੱਚ ਦੂਜਿਆਂ ਪ੍ਰਤੀ ਨਫ਼ਰਤ ਹੈ?',
      en: 'Am I relying on superficial religious rituals while harboring malice and slander in my heart?'
    },
    practicalApplication: {
      hi: 'मन की शुद्धि के लिए दूसरों की बुराई करने से पूरी तरह दूर रहें; यही वास्तविक तीर्थ स्नान है।',
      pb: 'ਮਨ ਨੂੰ ਸਾਫ਼ ਰੱਖਣ ਲਈ ਕਿਸੇ ਦੀ ਬੁਰਾਈ ਨਾ ਕਰੋ, ਇਹ ਹੀ ਅਸਲ ਤੀਰਥ ਹੈ।',
      en: 'The truest pilgrimage is to cleanse the mind of gossip and maintain Goodwill toward all.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरे मन को निर्मल ज्ञान से भर दीजिए ताकि बाह्य आडम्बरों के स्थान पर मैं शुद्ध आत्म-चिंतन पा सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੇਰੇ ਹਿਰਦੇ ਨੂੰ ਸ਼ੁੱਧ ਤੇ ਪਵਿੱਤਰ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹेਬ!',
      en: 'O Lord! Wash away my inner impurities and anchor my soul in pure truth, beyond vain rituals.'
    },
    quiz: []
  },
  {
    id: 'ninda-4',
    number: 1569,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ४',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੪',
      en: 'Ninda Ko Ang - 4',
    },
    text: {
      hi: 'सातों सागर मैं फिरा, जम्बू द्वीप दै पीठ।\nपर निन्दा नाहीं करे, सो कोइ बिरला दीठ।।',
      pb: 'ਸਾਤੋਂ ਸਾਗਰ ਮੈਂ ਫਿਰਾ, ਜਮ੍ਬੂ ਦ੍ਵੀਪ ਦੈ ਪੀਠ।\nਪਰ ਨਿੰਦਾ ਨਾਹੀਂ ਕਰੇ, ਸੋ ਕੋਇ ਬਿਰਲਾ ਦੀਠ।।',
      en: 'Saaton saagar mai phira, jamboo dweep dai peeth. Par ninda naahee kare, so koi birala deeth..',
    },
    transliteration: 'Saaton saagar mai phira, jamboo dweep dai peeth. Par ninda naahee kare, so koi birala deeth.',
    bhavarth: {
      hi: 'जंबू द्वीप के आगे सातों समुद्रों से घिरी हुई सारी पृथ्वी पर मैं घूम चुका हूं, परंतु पराए लोगों की निंदा जो न करता हो, ऐसा कोई विरला ही दिखाई पड़ता है।',
      pb: 'ਮੈਂ ਸਾਰੇ ਸੰਸਾਰ ਵਿੱਚ ਅਤੇ ਸੱਤਾਂ ਸਮੁੰਦਰਾਂ ਵਿੱਚ ਘੁੰਮ ਚੁੱਕਾ ਹਾਂ, ਪਰ ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਨਾ ਕਰਨ ਵਾਲਾ ਕੋਈ ਵਿਰਲਾ ਹੀ ਮਨੁੱਖ ਵੇਖਣ ਨੂੰ ਮਿਲਦਾ ਹੈ।',
      en: 'I have traveled across the vast earth and navigated the seven seas; yet, finding a rare soul who absolutely never indulges in slandering others is incredibly difficult.',
    },
    wordMeanings: {
      hi: [
        { word: 'जम्बू द्वीप (Jamboo dweep)', meaning: 'प्राचीन भारत / संपूर्ण ज्ञात पृथ्वी' },
        { word: 'बिरला (Birala)', meaning: 'लाखों में कोई एक / असाधारण' },
        { word: 'दीठ (Deeth)', meaning: 'दिखाई देना / दर्शन होना' }
      ],
      pb: [
        { word: 'ਜਮ੍ਬੂ ਦ੍ਵੀਪ (Jamboo dweep)', meaning: 'ਧਰਤੀ' },
        { word: 'ਬਿਰਲਾ (Birala)', meaning: 'ਕੋਈ ਵਿਰਲਾ / ਲੱਖਾਂ ਵਿੱਚ ਇੱਕ' },
        { word: 'ਦੀਠ (Deeth)', meaning: 'ਦਿਖਾਈ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Jamboo dweep', meaning: 'The ancient continent / Complete earth' },
        { word: 'Birala', meaning: 'One in a million / Extremely rare' },
        { word: 'Deeth', meaning: 'Seen / Met' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं उस दुर्लभ ‘बिरले’ संतों की श्रेणी में आता हूँ जो पर-निंदा के महापाप से सर्वथा मुक्त हैं?',
      pb: 'ਕੀ ਮੈਂ ਉਹਨਾਂ ਲੋਕਾਂ ਵਿੱਚੋਂ ਹਾਂ ਜੋ ਕਿਸੇ ਦੀ ਬੁਰਾਈ ਨਹੀਂ ਕਰਦੇ?',
      en: 'Am I among those exceptionally rare souls who have completely transcended the urge to speak ill of others?'
    },
    practicalApplication: {
      hi: 'इस कठिन संसार में स्वयं को पर-निंदा की अग्नि से बचाकर उस परम शांत ‘बिरले’ साधु की भांति बनें।',
      pb: 'ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਕਰਨ ਦੀ ਆਦਤ ਨੂੰ ਤਿਆਗ ਕੇ ਸ਼ਾਂਤ ਰਹੋ।',
      en: 'Vow to never slander, entering the sacred state of the rare saint who sees no fault in others.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु साहेब! मुझे वह अनमोल दृष्टि प्रदान करें कि मेरी जिह्वा से कभी किसी की निंदा न हो। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਜ਼ੁਬਾਨ ਨੂੰ ਨਿੰਦਾ ਦੇ ਪਾਪ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Bless my tongue with purity so that it never utters a single word of slander.'
    },
    quiz: []
  },
  {
    id: 'ninda-5',
    number: 1570,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ५',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੫',
      en: 'Ninda Ko Ang - 5',
    },
    text: {
      hi: 'माखी गहै कुवास को, फूल वास नहिं लेयं।\nमधुमाखी हैं साधु जन, पुष्प बास चित देयं।।',
      pb: 'ਮਾਖੀ ਗਹੈ ਕੁਵਾਸ ਕੋ, ਫੂਲ ਵਾਸ ਨਹਿਂ ਲੇਯਂ।\nਮਧੁਮਾਖੀ ਹੈਂ ਸਾਧੁ ਜਨ, ਪੁਸ਼੍ਪ ਬਾਸ ਚਿਤ ਦੇਯਂ।।',
      en: 'Maakhee gahai kuvaas ko, phool vaas nahin leyand. Madhumaakhee hain sadhu jan, pushp baas chit deyand..',
    },
    transliteration: 'Maakhee gahai kuvaas ko, phool vaas nahin leyand. Madhumaakhee hain sadhu jan, pushp baas chit deyand.',
    bhavarth: {
      hi: 'पर-निंदक रूपी मक्खियां दूसरे की दोष रूपी दुर्गंध को ही ग्रहण करती हैं, सद्गुण रूपी फूल की सुगंध नहीं ले पाती, परंतु संत जन मधुमक्खियों के समान गुणग्राही होते हैं, वे दूसरे के सद्गुण रूपी पुष्प-वास पर ही ध्यान देते हैं।',
      pb: 'ਆਮ ਮੱਖੀ ਗੰਦਗੀ ਦੀ ਬਦਬੂ ਵੱਲ ਜਾਂਦੀ ਹੈ, ਫੁੱਲਾਂ ਦੀ ਖ਼ੁਸ਼ਬੂ ਨਹੀਂ ਲੈਂਦੀ, ਪਰ ਸਾਧੂ ਪੁਰਖ ਸ਼ਹਿਦ ਦੀ ਮੱਖੀ ਵਰਗੇ ਹੁੰਦੇ ਹਨ ਜੋ ਕੇਵਲ ਫੁੱਲਾਂ ਦੇ ਗੁਣਾਂ ਨੂੰ ਹੀ ਲੈਂਦੇ ਹਨ।',
      en: 'A slanderer is like a common fly, attracted only to offensive smells (faults) while ignoring the fragrance of flowers (virtues). In contrast, saintly souls are like honeybees, focusing only on the sweet virtues of others.',
    },
    wordMeanings: {
      hi: [
        { word: 'माखी (Maakhee)', meaning: 'साधारण मक्खी / निंदक' },
        { word: 'कुवास (Kuvaas)', meaning: 'दुर्गंध / गंदगी / दोष' },
        { word: 'मधुमाखी (Madhumaakhee)', meaning: 'शहद की मक्खी / गुणग्राही संत' }
      ],
      pb: [
        { word: 'ਮਾਖੀ (Maakhee)', meaning: 'ਆਮ ਮੱਖੀ' },
        { word: 'ਕੁਵਾਸ (Kuvaas)', meaning: 'ਗੰਦਗੀ / ਬਦਬੂ' },
        { word: 'ਮਧੁਮਾਖੀ (Madhumaakhee)', meaning: 'ਸ਼ਹਿਦ ਦੀ ਮੱਖੀ' }
      ],
      en: [
        { word: 'Maakhee', meaning: 'Common fly / Gossip monger' },
        { word: 'Kuvaas', meaning: 'Foul odor / Flaws' },
        { word: 'Madhumaakhee', meaning: 'Honeybee / Virtual saint' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा व्यवहार गंदगी पर बैठने वाली मक्खी जैसा है, या फूलों से मधु इकट्ठा करने वाली मधुमक्खी जैसा?',
      pb: 'ਕੀ ਮੇਰੀ ਰੁਚੀ ਲੋਕਾਂ ਦੇ ਦੋਸ਼ ਲੱਭਣ ਵਿੱਚ ਹੈ ਜਾਂ ਗੁਣ ਲੱਭਣ ਵਿੱਚ?',
      en: 'Is my behavior like that of a common fly seeking garbage, or a honeybee gathering nectar from flowers?'
    },
    practicalApplication: {
      hi: 'दूसरों की चर्चा करते समय उनकी केवल अच्छाइयों और सद्गुणों को ही उजागर करें।',
      pb: 'ਦੂਜਿਆਂ ਦੀਆਂ ਕੇਵਲ ਚੰਗੀਆਂ ਗੱਲਾਂ ਹੀ ਸਵੀਕਾਰ ਕਰੋ।',
      en: 'Make it a rule to highlight and speak only of the beautiful virtues present in others.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे मधुमक्खी की भांति गुणग्राही बना दीजिए ताकि मेरा हृदय सदा आपकी प्रेम-सुगंध से भरा रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਕੇਵਲ ਚੰਗੇ ਗੁਣ ਗ੍ਰਹਿਣ ਕਰਨ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Bless me with the honeybee\'s vision, to gather only the sweet nectar of virtues wherever I go.'
    },
    quiz: []
  },
  {
    id: 'ninda-6',
    number: 1571,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ६',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੬',
      en: 'Ninda Ko Ang - 6',
    },
    text: {
      hi: 'कंचन को तजबो सहल, सहल त्रिया को नेह।\nनिन्दा केरो त्यागबो, बड़ा कठिन है येह।।',
      pb: 'ਕੰਚਨ ਕੋ ਤਜਬੋ ਸਹਲ, ਸਹਲ ਤ੍ਰਿਯਾ ਕੋ ਨੇਹ।\nਨਿੰਦਾ ਕੇਰੋ ਤ੍ਯਾਗਬੋ, ਬੜਾ ਕਠਿਨ ਹੈ ਯੇਹ।।',
      en: 'Kanchan ko tajabo sahal, sahal triya ko neh. Ninda kero tyagabo, bada kathin hai yeh..',
    },
    transliteration: 'Kanchan ko tajabo sahal, sahal triya ko neh. Ninda kero tyagabo, bada kathin hai yeh.',
    bhavarth: {
      hi: 'अधिक संपत्ति एवं स्त्री का मोह त्यागकर साधु वेष धारण कर लेना सहज है, परंतु पराए लोगों की निंदा का परित्याग करना, बड़ा ही कठिन है। विरला पुरुष ही इसका त्याग कर सकता है।',
      pb: 'ਸੋਨਾ ਛੱਡਣਾ ਸੌਖਾ ਹੈ ਅਤੇ ਪਰਿਵਾਰ ਦਾ ਮੋਹ ਛੱਡਣਾ ਵੀ ਸੌਖਾ ਹੈ, ਪਰ ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਕਰਨਾ ਛੱਡਣਾ ਬਹੁਤ ਹੀ ਕਠਿਨ ਹੈ।',
      en: 'It is relatively easy to renounce physical gold and earthly attachments; but giving up the habit of gossiping and slandering others is extraordinarily difficult.',
    },
    wordMeanings: {
      hi: [
        { word: 'कंचन (Kanchan)', meaning: 'सोना / अत्यधिक धन' },
        { word: 'नेह (Neh)', meaning: 'मोह / प्रेम' },
        { word: 'केरो (Kero)', meaning: 'का / की' }
      ],
      pb: [
        { word: 'ਕੰਚਨ (Kanchan)', meaning: 'ਸੋਨਾ' },
        { word: 'ਨੇਹ (Neh)', meaning: 'ਮੋਹ' },
        { word: 'ਕੇਰੋ (Kero)', meaning: 'ਦਾ' }
      ],
      en: [
        { word: 'Kanchan', meaning: 'Gold / Material fortune' },
        { word: 'Neh', meaning: 'Affection / Attachment' },
        { word: 'Kero', meaning: 'Of' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपनी जीवन-साधना में बड़े-बड़े बाहरी त्याग तो कर दिए हैं, पर निंदा जैसी सूक्ष्म बुराई का त्याग नहीं कर पाया?',
      pb: 'ਕੀ ਮੇਰੀ ਰੂਹਾਨੀ ਸਾਧਨਾ ਨਿੰਦਾ ਦੇ ਤਿਆਗ ਤੋਂ ਬਿਨਾਂ ਅਧੂਰੀ ਹੈ?',
      en: 'Have I successfully renounced physical desires while still holding on to the subtle addiction of criticizing others?'
    },
    practicalApplication: {
      hi: 'जब भी किसी की बुराई करने का विचार मन में आए, मौन हो जाएँ या प्रभु के नाम का जाप शुरू कर दें।',
      pb: 'ਜਦੋਂ ਕਿਸੇ ਦੀ ਬੁਰਾਈ ਕਰਨ ਦਾ ਖਿਆਲ ਆਵੇ, ਤਾਂ ਮੌਨ ਹੋ ਜਾਵੋ।',
      en: 'Whenever the impulse to gossip arises, choose silence or shift your mind to divine remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! इस निंदा रूपी सूक्ष्म वासना से मेरी रक्षा करें और मुझे परम पवित्रता प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਨਿੰਦਾ ਕਰਨ ਦੀ ਆਦਤ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Deliver my consciousness from this deep-seated habit of gossip, and keep me pure.'
    },
    quiz: []
  },
  {
    id: 'ninda-7',
    number: 1572,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ७',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੭',
      en: 'Ninda Ko Ang - 7',
    },
    text: {
      hi: 'जो कोई निन्दै साध को, संकट आवै सोय।\nनरक जाये जन्मै मरै, मुक्ति कबहुं नहिं होय।।',
      pb: 'ਜੋ ਕੋਈ ਨਿੰਦੈ ਸਾਧ ਕੋ, ਸੰਕਟ ਆਵੈ ਸੋਇ।\nਨਰਕ ਜਾਏ ਜਨ੍ਮੈ ਮਰੈ, ਮੁਕ੍ਤਿ ਕਬਹੁੰ ਨਹਿਂ ਹੋਇ।।',
      en: 'Jo koi nindai saadh ko, sankat aavai soy. Narak jaaye janmai marai, mukti kabahun nahin hoy..',
    },
    transliteration: 'Jo koi nindai saadh ko, sankat aavai soy. Narak jaaye janmai marai, mukti kabahun nahin hoy.',
    bhavarth: {
      hi: 'जो व्यक्ति संतों की निंदा करता है उसके ऊपर अवश्य ही संकट आ जाता है। वह नीच योनि रूपी नरक में पड़ता है और बारंबार जन्म लेता है और मरता है। इस आचरण के कारण उसकी मुक्ति कभी नहीं हो सकती।',
      pb: 'ਜੋ ਮਨੁੱਖ ਸੰਤਾਂ ਦੀ ਨਿੰਦਾ ਕਰਦਾ ਹੈ, ਉਸ ਉੱਤੇ ਵੱਡੀ ਬਿਪਤਾ ਆਉਂਦੀ ਹੈ। ਉਹ ਨਰਕ ਭੋਗਦਾ ਹੈ ਅਤੇ ਜਨਮ-ਮਰਨ ਦੇ ਚੱਕਰ ਵਿੱਚ ਫਸਿਆ ਰਹਿੰਦਾ ਹੈ।',
      en: 'One who slanders holy saints invites severe distress. They fall into the hell of low rebirths, revolving in the endless cycle of birth and death without ever attaining liberation.',
    },
    wordMeanings: {
      hi: [
        { word: 'साध (Saadh)', meaning: 'संत / पवित्र पुरुष' },
        { word: 'संकट (Sankat)', meaning: 'भारी कष्ट / दुख' },
        { word: 'मुक्ति (Mukti)', meaning: 'मोक्ष / आवागमन से छुटकारा' }
      ],
      pb: [
        { word: 'ਸਾਧ (Saadh)', meaning: 'ਸੰਤ / ਭਗਤ' },
        { word: 'ਸੰਕਟ (Sankat)', meaning: 'ਮੁਸੀਬਤ' },
        { word: 'ਮੁਕ੍ਤਿ (Mukti)', meaning: 'ਮੋਕਸ਼' }
      ],
      en: [
        { word: 'Saadh', meaning: 'Saintly soul / Pure devotee' },
        { word: 'Sankat', meaning: 'Calamity / Severe suffering' },
        { word: 'Mukti', meaning: 'Liberation / Release from rebirths' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं जाने-अनजाने में किसी सच्चे महात्मा या साधु पुरुष की निंदा करके अपने विनाश का मार्ग तो प्रशस्त नहीं कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਕਿਸੇ ਭਗਤ ਦੀ ਨਿੰਦਾ ਕਰਕੇ ਰੂਹਾਨੀ ਨੁਕਸਾਨ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I unknowingly inviting spiritual downfall by criticizing a genuine seeker or saint?'
    },
    practicalApplication: {
      hi: 'साधु जनों का सर्वदा सम्मान करें; यदि उनकी कोई बात समझ न आए, तो भी उनकी निंदा न करें।',
      pb: 'ਸੰਤਾਂ ਦਾ ਆਦਰ ਕਰੋ, ਕਿਸੇ ਦੀ ਵੀ ਬੁਰਾਈ ਕਰਨ ਤੋਂ ਬਚੋ।',
      en: 'Always revere saintly seekers; even if you fail to comprehend their ways, abstain from judgment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे संतों के प्रति अगाध श्रद्धा व आदर भाव प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਧੂਆਂ ਪ੍ਰਤੀ ਸ਼ਰਧਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Divine Guide! Anchor my heart in profound respect and love for those who walk the path of Truth.'
    },
    quiz: []
  },
  {
    id: 'ninda-8',
    number: 1573,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ८',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੮',
      en: 'Ninda Ko Ang - 8',
    },
    text: {
      hi: 'आपन को न सराहिये, और न कहिये रंक।\nक्या जानो केहि रुखतर, कूरा रोय करंक।।',
      pb: 'ਆਪਨ ਕੋ ਨ ਸਰਾਹਿਯੇ, ਅੌਰ ਨ ਕਹਿਯੇ ਰੰਕ।\nਕ੍ਯਾ ਜਾਨੋ ਕੇਹਿ ਰੁਖਤਰ, ਕੂਰਾ ਰੋਇ ਕਰੰਕ।।',
      en: 'Aapan ko na saraahiye, aur na kahiye rank. Kya jaano kehi rukhatar, koora roy karank..',
    },
    transliteration: 'Aapan ko na saraahiye, aur na kahiye rank. Kya jaano kehi rukhatar, koora roy karank.',
    bhavarth: {
      hi: 'अपनी प्रशंसा करके दूसरे को दरिद्र मत कहो। कौन जाने कि कब समय रूपी वृक्ष के नीचे कुरा करंक हो जाए, अर्थात मूर्ख मनुष्य के सिर पर मुकुट आ जाए।',
      pb: 'ਆਪਣੀ ਵਡਿਆਈ ਆਪ ਨਾ ਕਰੋ ਅਤੇ ਕਿਸੇ ਗਰੀਬ ਨੂੰ ਨੀਵਾਂ ਨਾ ਦਿਖਾਓ। ਕੌਣ ਜਾਣਦਾ ਹੈ ਕੱਲ੍ਹ ਨੂੰ ਸਮਾਂ ਕੀ ਖੇਡ ਖੇਡੇ।',
      en: 'Do not sing your own praises while labeling others as poor or wretched. Who knows what fortune\'s wheel may bring under the tree of time? A beggar today may rise to wear a crown tomorrow.',
    },
    wordMeanings: {
      hi: [
        { word: 'रंक (Rank)', meaning: 'गरीब / हीन व्यक्ति' },
        { word: 'रुखतर (Rukhatar)', meaning: 'समय रूपी वृक्ष / परिस्थिति' },
        { word: 'कूरा करंक (Koora karank)', meaning: 'कूड़ा-करकट / तुच्छ वस्तु का मूल्यवान हो जाना' }
      ],
      pb: [
        { word: 'ਰੰਕ (Rank)', meaning: 'ਗਰੀਬ / ਕੰਗਾਲ' },
        { word: 'ਰੁਖਤਰ (Rukhatar)', meaning: 'ਸਮੇਂ ਦਾ ਬਦਲਾਵ' },
        { word: 'ਕੂਰਾ ਕਰੰਕ (Koora karank)', meaning: 'ਤੁੱਛ ਚੀਜ਼ ਦਾ ਮਹਾਨ ਬਣ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Rank', meaning: 'Beggar / Destitute' },
        { word: 'Rukhatar', meaning: 'The tree of time / Conditions' },
        { word: 'Koora karank', meaning: 'Rubbish becoming a crown / Destiny reversal' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने वर्तमान ऐश्वर्य या ज्ञान के घमंड में किसी कमजोर व असहाय का उपहास उड़ा रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਅਹੰਕਾਰ ਵਿੱਚ ਕਿਸੇ ਕਮਜ਼ੋਰ ਦਾ ਮਜ਼ਾਕ ਉਡਾ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I mocking someone\'s current poverty or ignorance, forgetting how rapidly destiny can change?'
    },
    practicalApplication: {
      hi: 'सभी को समान आदर दें; समय की परिवर्तनशीलता को समझकर सदा विनम्र रहें।',
      pb: 'ਸਭ ਦਾ ਸਤਿਕਾਰ ਕਰੋ ਅਤੇ ਨਿਮਰ ਬਣੋ।',
      en: 'Treat everyone with equal dignity, remembering that the wheel of time spares no one\'s pride.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे वह समझ दीजिए कि मैं कभी अपने भाग्य का घमंड न करूँ और सभी प्राणियों का सम्मान करूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਅਹੰਕਾਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Keep me free from vanity of fortune, and fill my heart with respect for all.'
    },
    quiz: []
  },
  {
    id: 'ninda-9',
    number: 1574,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ९',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੯',
      en: 'Ninda Ko Ang - 9',
    },
    text: {
      hi: 'दोष पराया देखि के, चले हसन्त हसन्त।\nअपने चित्त न आवई, जिनको आदि न अन्त।।',
      pb: 'ਦੋਸ਼ ਪਰਾਯਾ ਦੇਖਿ ਕੇ, ਚਲੇ ਹਸਨ੍ਤ ਹਸਨ੍ਤ।\nਅਪਨੇ ਚਿਤ੍ਤ ਨ ਆਵਈ, ਜਿਨਕੋ ਆਦਿ ਨ ਅਨ੍ਤ।।',
      en: 'Dosh paraaya dekhi ke, chale hasant hasant. Apane chitt na aavaee, jinako aadi na ant..',
    },
    transliteration: 'Dosh paraaya dekhi ke, chale hasant hasant. Apane chitt na aavaee, jinako aadi na ant.',
    bhavarth: {
      hi: 'निंदक लोग पराए लोगों के दोषों को देखकर हंस-हंसकर चलते हैं। अपने अंतःकरण के दोषों को नहीं देखते, जिनका कि कोई भी अंत नहीं है।',
      pb: 'ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਵੇਖ ਕੇ ਨਿੰਦਕ ਹੱਸਦੇ ਹੋਏ ਜਾਂਦੇ ਹਨ, ਪਰ ਆਪਣੇ ਅੰਦਰ ਦੇ ਅਣਗਿਣਤ ਦੋਸ਼ਾਂ ਨੂੰ ਉਹ ਕਦੇ ਨਹੀਂ ਵੇਖਦੇ।',
      en: 'Critics walk about laughing and mocking when they spot faults in others. Yet, they remain blind to the countless defects residing in their own hearts.',
    },
    wordMeanings: {
      hi: [
        { word: 'चित्त न आवई (Chitt na aavaee)', meaning: 'मन में न आना / याद न रहना' },
        { word: 'आदि न अन्त (Aadi na ant)', meaning: 'अनगिनत / जिसका कोई ओर-छोर न हो' }
      ],
      pb: [
        { word: 'ਚਿਤ੍ਤ ਨ ਆਵਈ (Chitt na aavaee)', meaning: 'ਖਿਆਲ ਵਿੱਚ ਨਾ ਆਉਣਾ' },
        { word: 'ਆਦਿ ਨ ਅਨ੍ਤ (Aadi na ant)', meaning: 'ਬੇਅੰਤ ਦੋਸ਼' }
      ],
      en: [
        { word: 'Chitt na aavaee', meaning: 'Never crosses the mind / Blind to' },
        { word: 'Aadi na ant', meaning: 'Without beginning or end / Infinite flaws' }
      ]
    },
    contemplation: {
      hi: 'जब मैं दूसरों की कमियाँ देखता हूँ, तो क्या मैं उसी समय अपने भीतर के अगणित दोषों का अवलोकन करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਦੂਜਿਆਂ ਦੇ ਦੋਸ਼ ਵੇਖਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਅੰਦਰ ਝਾਤੀ ਮਾਰਦਾ ਹਾਂ?',
      en: 'When I am tempted to mock another\'s weakness, do I reflect on the boundless flaws in my own heart?'
    },
    practicalApplication: {
      hi: 'दूसरों पर हँसना छोड़कर अपना आत्म-विश्लेषण करें और स्वयं को सुधारने में जुटें।',
      pb: 'ਦੂਜਿਆਂ ਦੀ ਬਜਾਏ ਆਪਣੇ ਮਨ ਦੇ ਦੋਸ਼ਾਂ ਨੂੰ ਦੂਰ ਕਰੋ।',
      en: 'Turn your critical eye inward, transforming mock laughter into constructive self-correction.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे मेरे स्वयं के अवगुण दिखाकर उन्हें नष्ट करने की प्रेरणा व शक्ति दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਆਪਣੇ ਮਨ ਨੂੰ ਸੁਧਾਰਨ ਦੀ ਸਮਰੱਥਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Shine Your light on my own shortcomings so that I may work to dissolve them.'
    },
    quiz: []
  },
  {
    id: 'ninda-10',
    number: 1575,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १०',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੦',
      en: 'Ninda Ko Ang - 10',
    },
    text: {
      hi: 'आपन को न सराहिये, पर निन्दिये न कोय।\nचढ़ना लम्बा धौहरा, ना जाने क्या होय।।',
      pb: 'ਆਪਨ ਕੋ ਨ ਸਰਾਹਿਯੇ, ਪਰ ਨਿਨ੍ਦਿਯੇ ਨ ਕੋਇ।\nਚਢ਼ਨਾ ਲਮ੍ਬਾ ਧੌਹਰਾ, ਨਾ ਜਾਨੇ ਕ੍ਯਾ ਹੋਇ।।',
      en: 'Aapan ko na saraahiye, par nindiye na koy. Chadhana lamba dhauhara, na jaane kya hoy..',
    },
    transliteration: 'Aapan ko na saraahiye, par nindiye na koy. Chadhana lamba dhauhara, na jaane kya hoy.',
    bhavarth: {
      hi: 'अपनी प्रशंसा और दूसरे की निंदा कभी न करो, क्योंकि अभी तुम्हें आचरण व व्यवहार के ऊंचे स्तंभ पर चढ़ना है, न जाने भविष्य में क्या हो।',
      pb: 'ਆਪਣੀ ਵਡਿਆਈ ਅਤੇ ਦੂਜੇ ਦੀ ਨਿੰਦਾ ਕਦੇ ਨਾ ਕਰੋ, ਕਿਉਂਕਿ ਹਾਲੇ ਜੀਵਨ ਦਾ ਉੱਚਾ ਸਫ਼ਰ ਤੈਅ ਕਰਨਾ ਬਾਕੀ ਹੈ, ਕੱਲ੍ਹ ਨੂੰ ਕੀ ਹੋ ਜਾਵੇ ਕੋਈ ਨਹੀਂ ਜਾਣਦਾ।',
      en: 'Never praise yourself or slander another. You still have a high and steep path of moral conduct to climb, and who knows what slips or trials await you in the future?',
    },
    wordMeanings: {
      hi: [
        { word: 'पर निन्दिये (Par nindiye)', meaning: 'दूसरों की बुराई करना' },
        { word: 'लम्बा धौहरा (Lamba dhauhara)', meaning: 'ऊंचा महल / आचरण का ऊंचा स्तंभ' }
      ],
      pb: [
        { word: 'ਪਰ ਨਿਨ੍ਦਿਯੇ (Par nindiye)', meaning: 'ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ' },
        { word: 'ਲਮ੍ਬਾ ਧੌਹਰਾ (Lamba dhauhara)', meaning: 'ਉੱਚਾ ਮਹਿਲ' }
      ],
      en: [
        { word: 'Par nindiye', meaning: 'Slandering others' },
        { word: 'Lamba dhauhara', meaning: 'Tall tower / High spiritual ascension' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने आप को बहुत श्रेष्ठ मानकर दूसरों को तुच्छ समझ रहा हूँ, जबकि जीवन का आध्यात्मिक शिखर अभी बहुत दूर है?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਆਪ ਨੂੰ ਸੰਪੂਰਨ ਮੰਨ ਕੇ ਅਹੰਕਾਰ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I assuming spiritual security too early, forgetting how steep and slippery the remaining climb is?'
    },
    practicalApplication: {
      hi: 'अपने मन में सदैव विनयशीलता बनाए रखें और किसी की भूल पर अहंकार न करें।',
      pb: 'ਮਨ ਵਿੱਚ ਨਿਮਰਤਾ ਰੱਖੋ ਅਤੇ ਕਦੇ ਹੰਕਾਰ ਨਾ ਕਰੋ।',
      en: 'Maintain steadfast humility, knowing that spiritual slip-ups can happen to anyone who becomes arrogant.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे इस लंबी साधना यात्रा में गिरने से बचाइए और सदा दीन व सावधान रखिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਧਨਾ ਦੇ ਮਾਰਗ ਤੇ ਸੰਭਾਲ ਕੇ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Steady my feet on this long climb, and protect me from the delusion of self-righteousness.'
    },
    quiz: []
  },
  {
    id: 'ninda-11',
    number: 1576,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - ११',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੧',
      en: 'Ninda Ko Ang - 11',
    },
    text: {
      hi: 'निन्दक मेरा जनि मरो, जीवो आदि जुगादि।\nकबीर सतगुरु पाइये, निन्दक के परसादि।।',
      pb: 'ਨਿੰਦਕ ਮੇਰਾ ਜਨਿ ਮਰੋ, ਜੀਵੋ ਆਦਿ ਜੁਗਾਦਿ।\nਕਬੀਰ ਸਤਗੁਰੁ ਪਾਈਯੇ, ਨਿੰਦਕ ਕੇ ਪਰਸਾਦਿ।।',
      en: 'Nindak mera jani maro, jeevo aadi jugaadi. Kabir satguru paaiye, nindak ke parasaadi..',
    },
    transliteration: 'Nindak mera jani maro, jeevo aadi jugaadi. Kabir satguru paaiye, nindak ke parasaadi.',
    bhavarth: {
      hi: 'हे मेरे निंदक! तुम मत मरो, बल्कि युग-युग तक जीयो। हे मनुष्यों! तुम निंदक व्यवहार से होने वाली कृपा से ही यथार्थ सद्गुरु को पा सकते हो।',
      pb: 'ਹੇ ਮੇਰੇ ਨਿੰਦਕ! ਤੂੰ ਕਦੇ ਨਾ ਮਰ, ਸਗੋਂ ਜੁੱਗਾਂ-ਜੁੱਗਾਂ ਤੱਕ ਜਿਊਂਦਾ ਰਹਿ। ਤੇਰੀ ਨਿੰਦਾ ਕਾਰਨ ਹੀ ਮੇਰਾ ਹੰਕਾਰ ਟੁੱਟਦਾ ਹੈ ਅਤੇ ਮੈਨੂੰ ਸਤਿਗੁਰੂ ਮਿਲਦੇ ਹਨ।',
      en: 'May my slanderer never die; let them live from age to age! For it is through the ego-shattering grace of their criticism that one is driven to find the True Master.',
    },
    wordMeanings: {
      hi: [
        { word: 'जनि मरो (Jani maro)', meaning: 'मत मरो / जीवित रहो' },
        { word: 'आदि जुगादि (Aadi jugaadi)', meaning: 'सदा-सदा के लिए / युगों-युगों तक' },
        { word: 'परसादि (Parasaadi)', meaning: 'प्रसाद से / कृपा से' }
      ],
      pb: [
        { word: 'ਜਨਿ ਮਰੋ (Jani maro)', meaning: 'ਨਾ ਮਰੇ' },
        { word: 'ਆਦਿ ਜੁਗਾਦਿ (Aadi jugaadi)', meaning: 'ਹਮੇਸ਼ਾ ਲਈ' },
        { word: 'ਪਰਸਾਦਿ (Parasadi)', meaning: 'ਕਿਰਪਾ ਨਾਲ' }
      ],
      en: [
        { word: 'Jani maro', meaning: 'Do not die' },
        { word: 'Aadi jugaadi', meaning: 'Since beginning of time / Eternally' },
        { word: 'Parasaadi', meaning: 'By the grace / Benefit' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने निंदकों को शत्रु समझता हूँ, या उन्हें अपनी बुराइयों को नष्ट करने वाला निःशुल्क सेवक मानता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਨਿੰਦਕ ਨੂੰ ਆਪਣਾ ਸੱਚਾ ਹਮਦਰਦ ਸਮਝਦਾ ਹਾਂ?',
      en: 'Do I view critics as enemies, or do I realize they are selfless servants breaking down my pride?'
    },
    practicalApplication: {
      hi: 'निंदक के प्रति कृतज्ञ रहें क्योंकि वे हमारे अहंकार को तोड़कर हमें गुरु-शरण की ओर प्रेरित करते हैं।',
      pb: 'ਨਿੰਦਕਾਂ ਦਾ ਧੰਨਵਾਦ ਕਰੋ ਕਿਉਂਕਿ ਉਹ ਸਾਡਾ ਅਹੰਕਾਰ ਤੋੜਦੇ ਹਨ।',
      en: 'Be grateful to critics; their friction rubs away your rough egoistic edges, making you fit for Grace.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरे मन में निंदकों के प्रति भी क्षमा व करुणा का वास रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਨਿੰਦਕਾਂ ਪ੍ਰਤੀ ਵੀ ਦਇਆ ਭਾਵ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Bless my heart with infinite compassion so that I feel only kindness toward my slanders.'
    },
    quiz: []
  },
  {
    id: 'ninda-12',
    number: 1577,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १२',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੨',
      en: 'Ninda Ko Ang - 12',
    },
    text: {
      hi: 'कबीर निन्दक मरि गया, अब क्या कहिये जाय।\nऐसा कोई ना मिला, बीड़ा लेय उठाय।।',
      pb: 'ਕਬੀਰ ਨਿੰਦਕ ਮਰਿ ਗਯਾ, ਅਬ ਕ੍ਯਾ ਕਹਿਯੇ ਜਾਇ।\nਐਸਾ ਕੋਈ ਨਾ ਮਿਲਾ, ਬੀੜਾ ਲੇਇ ਉਠਾਇ।।',
      en: 'Kabir nindak mari gaya, ab kya kahiye jaay. Aisa koi na mila, beeda ley uthaay..',
    },
    transliteration: 'Kabir nindak mari gaya, ab kya kahiye jaay. Aisa koi na mila, beeda ley uthaay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जो मेरा निंदक था, वह मर गया, क्या कहा जाए? ऐसा कोई नहीं मिलता कि वह फिर से मेरी निंदा करने का बीड़ा उठा ले।',
      pb: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮੇਰੀ ਨਿੰਦਾ ਕਰਨ ਵਾਲਾ ਚਲਾ ਗਿਆ ਹੈ, ਹੁਣ ਉਸਦੀ ਥਾਂ ਕੋਈ ਅਜਿਹਾ ਨਹੀਂ ਮਿਲ ਰਿਹਾ ਜੋ ਮੇਰੀ ਨਿੰਦਾ ਕਰਨ ਦਾ ਬੀੜਾ ਚੁੱਕੇ।',
      en: 'Kabir says: My slanderer has passed away, and what is there to say now? I find no one else willing to take up the heavy task of guarding and criticizing my conduct.',
    },
    wordMeanings: {
      hi: [
        { word: 'मरि गया (Mari gaya)', meaning: 'मृत्यु हो जाना / दूर चले जाना' },
        { word: 'बीड़ा लेय (Beeda ley)', meaning: 'दायित्व उठाना / संकल्प करना' }
      ],
      pb: [
        { word: 'ਮਰਿ ਗਯਾ (Mari gaya)', meaning: 'ਚਲਾ ਗਿਆ' },
        { word: 'ਬੀੜਾ ਲੇਇ (Beeda ley)', meaning: 'ਜ਼ਿੰਮੇਵਾਰੀ ਚੁੱਕਣੀ' }
      ],
      en: [
        { word: 'Mari gaya', meaning: 'Died / Departed' },
        { word: 'Beeda ley', meaning: 'Accepting the challenge / Responsibility' }
      ]
    },
    contemplation: {
      hi: 'क्या मुझे अपने आलोचकों के दूर जाने पर प्रसन्नता होती है, या मैं उनकी अनुपस्थिति में आत्म-समीक्षा की कमी महसूस करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਆਲੋਚਕਾਂ ਦੀ ਕਮੀ ਮਹਿਸੂਸ ਕਰਦਾ ਹਾਂ?',
      en: 'Do I rejoice when critics go away, or do I realize I have lost an invaluable mirror for self-scrutiny?'
    },
    practicalApplication: {
      hi: 'आलोचना की अनुपस्थिति में भी स्वयं ही अपने कर्मों का कड़ा परीक्षण करते रहें।',
      pb: 'ਆਲੋਚਕਾਂ ਤੋਂ ਬਿਨਾਂ ਵੀ ਆਪਣੀ ਨਿਗਰਾਨੀ ਆਪ ਕਰੋ।',
      en: 'In the absence of external critics, hold yourself to an even higher standard of self-examination.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे ऐसी चेतना दीजिए कि मैं किसी बाहरी आलोचक के बिना भी सदा सत्य मार्ग पर बना रहूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੇਰੇ ਅੰਦਰ ਸਵੈ-ਸੁਧਾਰ ਦੀ ਪ੍ਰੇਰਨਾ ਬਣਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Awaken my inner conscience so that I remain naturally aligned with Truth even without a critic.'
    },
    quiz: []
  },
  {
    id: 'ninda-13',
    number: 1578,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १३',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੩',
      en: 'Ninda Ko Ang - 13',
    },
    text: {
      hi: 'निन्दक एकहु मति मिलै, पापी मिलै हजार।\nइस निन्दक के शीश पर, लाख पाप का भार।।',
      pb: 'ਨਿੰਦਕ ਏਕਹੁ ਮਤਿ ਮਿਲੈ, ਪਾਪੀ ਮਿਲੈ ਹਜ਼ਾਰ।\nਇਸ ਨਿੰਦਕ ਕੇ ਸ਼ੀਸ਼ ਪਰ, ਲਾਖ ਪਾਪ ਕਾ ਭਾਰ।।',
      en: 'Nindak ekahu mati milai, paapee milai hajaar. Is nindak ke sheesh par, laakh paap ka bhaar..',
    },
    transliteration: 'Nindak ekahu mati milai, paapee milai hajaar. Is nindak ke sheesh par, laakh paap ka bhaar.',
    bhavarth: {
      hi: 'संसार में अन्य प्रकार के चाहे हजारों पापी मिलें, परंतु एक भी पर-निंदक से भेंट न हो, क्योंकि एक पर-निंदक के शीश पर, लाखों पाप का बोझ रहता है।',
      pb: 'ਭਾਵੇਂ ਹਜ਼ਾਰਾਂ ਪਾਪੀ ਮਿਲ ਜਾਣ ਪਰ ਕੋਈ ਨਿੰਦਕ ਨਾ ਮਿਲੇ, ਕਿਉਂਕਿ ਨਿੰਦਕ ਦੇ ਸਿਰ ਤੇ ਦੂਜਿਆਂ ਦੇ ਲੱਖਾਂ ਪਾਪਾਂ ਦਾ ਭਾਰ ਹੁੰਦਾ ਹੈ।',
      en: 'Let me meet thousands of ordinary sinners, but not a single backbiting slanderer! For a slanderer carries the crushing weight of a million sins belonging to those they criticize.',
    },
    wordMeanings: {
      hi: [
        { word: 'एकहु मति मिलै (Ekahu mati milai)', meaning: 'एक भी न मिले' },
        { word: 'शीश पर (Sheesh par)', meaning: 'मस्तिष्क पर / सिर पर' },
        { word: 'पाप का भार (Paap ka bhaar)', meaning: 'कर्मों का संचित बोझ' }
      ],
      pb: [
        { word: 'ਏਕਹੁ ਮਤਿ ਮਿਲੈ (Ekahu mati milai)', meaning: 'ਇੱਕ ਵੀ ਨਾ ਮਿਲੇ' },
        { word: 'ਸ਼ੀਸ਼ ਪਰ (Sheesh par)', meaning: 'ਸਿਰ ਉੱਤੇ' },
        { word: 'ਪਾਪ ਕਾ ਭਾਰ (Paap ka bhaar)', meaning: 'ਪਾਪਾਂ ਦਾ ਬੋਝ' }
      ],
      en: [
        { word: 'Ekahu mati milai', meaning: 'May I never meet even one' },
        { word: 'Sheesh par', meaning: 'Upon the head' },
        { word: 'Paap ka bhaar', meaning: 'The heavy burden of sins' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं दूसरों की निंदा करके उनके पापों का भारी बोझा अपने सिर पर तो नहीं लाद रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਦੂਜਿਆਂ ਦੀ ਬੁਰਾਈ ਕਰਕੇ ਉਹਨਾਂ ਦੇ ਪਾਪ ਆਪਣੇ ਸਿਰ ਲੈ ਰਿਹਾ ਹਾਂ?',
      en: 'By gossiping and judging others, am I foolishly transferring their bad karma onto my own head?'
    },
    practicalApplication: {
      hi: 'अपने मन को शांत रखने के लिए दूसरों के व्यक्तिगत पापों व भूलों की चर्चा करना तुरंत बंद करें।',
      pb: 'ਦੂਜਿਆਂ ਦੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਦਖਲ ਦੇਣਾ ਬੰਦ ਕਰੋ, ਆਪਣੀ ਸੰਭਾਲ ਕਰੋ।',
      en: 'Guard your tongue strictly; never carry the unnecessary weight of other people\'s faults.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मेरी बुद्धि को सदा पवित्र रखें ताकि मैं पर-निंदा के इस भयानक पाप जाल से बचा रहूँ। साहेब बंदगी साहेब!',
      pb: 'Hੇ ਪ੍ਰਭੂ! ਮੇਰੀ ਬੁੱਧੀ ਨੂੰ ਪਵਿੱਤਰ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Protect my consciousness from the trap of gossip, and keep my spiritual record clear.'
    },
    quiz: []
  },
  {
    id: 'ninda-14',
    number: 1579,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १४',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੪',
      en: 'Ninda Ko Ang - 14',
    },
    text: {
      hi: 'निन्दक से कुत्ता भला, हट कर माडै रार।\nकुत्ते से क्रोधी बुरा, गुरु दिलावै गार।।',
      pb: 'ਨਿੰਦਕ ਸੇ ਕੁਤ੍ਤਾ ਭਲਾ, ਹਟ ਕਰ ਮਾਡੈ ਰਾਰ।\nਕੁਤ੍ਤੇ ਸੇ ਕ੍ਰੋਧੀ ਬੁਰਾ, ਗੁਰੁ ਦਿਲਾਵੈ ਗਾਰ।।',
      en: 'Nindak se kutta bhala, hat kar maadai raar. Kutte se krodhee bura, guru dilaavai gaar..',
    },
    transliteration: 'Nindak se kutta bhala, hat kar maadai raar. Kutte se krodhee bura, guru dilaavai gaar.',
    bhavarth: {
      hi: 'निंदक से तो कुत्ता कहीं अच्छा है, जो दूर हटकर भौंकता रहता है। कुत्ते से ज्यादा क्रोधी निंदक बुरा है, क्योंकि वह गुरु को भी गाली दिलवाता है।',
      pb: 'ਨਿੰਦਕ ਨਾਲੋਂ ਕੁੱਤਾ ਚੰਗਾ ਹੈ ਜੋ ਦੂਰ ਰਹਿ ਕੇ ਲੜਦਾ ਹੈ, ਪਰ ਕੁੱਤੇ ਨਾਲੋਂ ਉਹ ਕ੍ਰੋਧੀ ਨਿੰਦਕ ਮਾੜਾ ਹੈ ਜੋ ਗੁਰੂ ਜੀ ਦੀ ਵੀ ਨਿੰਦਾ ਕਰਦਾ ਹੈ।',
      en: 'A dog is better than a backbiter, for it barks openly and from a distance. But worse than a dog is an angry slanderer, whose toxic rage spares not even the Master.',
    },
    wordMeanings: {
      hi: [
        { word: 'माडै रार (Maadai raar)', meaning: 'झगड़ा करना / भौंकना' },
        { word: 'गार (Gar)', meaning: 'गाली / निंदा शब्द' }
      ],
      pb: [
        { word: 'ਮਾਡੈ ਰਾਰ (Maadai raar)', meaning: 'ਲੜਾਈ ਕਰਨਾ' },
        { word: 'ਗਾਰ (Gar)', meaning: 'ਅਪਸ਼ਬਦ / ਗਾਲ਼' }
      ],
      en: [
        { word: 'Maadai raar', meaning: 'Picks a fight / Barks' },
        { word: 'Gar', meaning: 'Abuse / Slanderous words' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने क्रोध और निंदा के आवेग में आकर अपने पूज्य गुरुजनों के प्रति भी मर्यादा खो बैठता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁੱਸੇ ਵਿੱਚ ਆ ਕੇ ਮਰਿਆਦਾ ਭੁੱਲ ਜਾਂਦਾ ਹਾਂ?',
      en: 'Does anger ever cloud my judgment so much that I lose respect for my elders and spiritual guides?'
    },
    practicalApplication: {
      hi: 'अपने क्रोध पर पूर्ण नियंत्रण रखें और किसी भी स्थिति में गुरुजनों के सम्मान को ठेस न पहुँचाएँ।',
      pb: 'ਆਪਣੇ ਗੁੱਸੇ ਤੇ ਕਾਬੂ ਰੱਖੋ ਅਤੇ ਗੁਰੂ ਪ੍ਰਤੀ ਸ਼ਰਧਾ ਬਣਾਈ ਰੱਖੋ।',
      en: 'Master your anger; ensure your words always reflect deep reverence for truth and teachers.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे क्षमा, सहनशीलता और अगाध विनयशीलता का दान दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਸ਼ਾਂਤੀ ਤੇ ਧੀਰਜ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Bless my heart with patience, tolerance, and unwavering devotion to Your guidance.'
    },
    quiz: []
  },
  {
    id: 'ninda-15',
    number: 1580,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १५',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੫',
      en: 'Ninda Ko Ang - 15',
    },
    text: {
      hi: 'निन्दक तो है नाक बिन, सोहै नकटों माहिं।\nसाधू जन गुरु भक्त जो, तिनमें सोहै नाहिं।।',
      pb: 'ਨਿੰਦਕ ਤੋ ਹੈ ਨਾਕ ਬਿਨ, ਸੋਹੈ ਨਕਟੋਂ ਮਾਹਿਂ।\nਸਾਧੂ ਜਨ ਗੁਰੁ ਭਕ੍ਤ ਜੋ, ਤਿਨਮੈਂ ਸੋਹੈ ਨਾਹਿਂ।।',
      en: 'Nindak to hai naak bin, sohai nakaton maahin. Sadhoo jan guru bhakt jo, tinamen sohai naahin..',
    },
    transliteration: 'Nindak to hai naak bin, sohai nakaton maahin. Sadhoo jan guru bhakt jo, tinamen sohai naahin.',
    bhavarth: {
      hi: 'दूसरों की निंदा करने वाला बिना नाक का (निर्लज्ज) है, अतः वह नकटों में ही शोभा पाता है। संत-भक्त के बीच में उसकी कोई शोभा नहीं होती।',
      pb: 'ਨਿੰਦਕ ਬਿਨਾਂ ਨੱਕ (ਬੇਸ਼ਰਮ) ਤੋਂ ਹੁੰਦਾ ਹੈ, ਉਹ ਕੇਵਲ ਬੇਸ਼ਰਮਾਂ ਵਿੱਚ ਹੀ ਸ਼ੋਭਦਾ ਹੈ। ਸਾਧੂਆਂ ਅਤੇ ਗੁਰੂ ਭਗਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਉਸਦੀ ਕੋਈ ਥਾਂ ਨਹੀਂ ਹੁੰਦੀ।',
      en: 'A slanderer is shameless, fit only for the company of the degraded. They have no place and find no appreciation in the assembly of saints and true devotees.',
    },
    wordMeanings: {
      hi: [
        { word: 'नकटों (Nakaton)', meaning: 'बिना नाक वाले / निर्लज्ज लोग' },
        { word: 'सोहै नाहिं (Sohai naahin)', meaning: 'शोभा न पाना / आदर न मिलना' }
      ],
      pb: [
        { word: 'ਨਕਟੋਂ (Nakaton)', meaning: 'ਬੇਸ਼ਰਮ ਲੋਕ' },
        { word: 'ਸੋਹੈ ਨਾਹਿਂ (Sohai naahin)', meaning: 'ਸੋਹਣਾ ਨਾ ਲੱਗਣਾ' }
      ],
      en: [
        { word: 'Nakaton', meaning: 'The noseless / Degraded / Shameless' },
        { word: 'Sohai naahin', meaning: 'Does not fit / Finds no respect' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संतों व सत्संगियों की पावन संगति के योग्य आचरण कर रहा हूँ, या निंदकों की भांति निर्लज्ज बन रहा हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਸੁਭਾਅ ਸਾਧੂ ਸੰਗਤ ਦੇ ਯੋਗ ਹੈ?',
      en: 'Does my behavior make me worthy of the company of pure souls, or am I acting shamelessly like a gossip?'
    },
    practicalApplication: {
      hi: 'निंदकों की कुसंगति का पूर्णतः परित्याग कर केवल भक्तों व संतों के सत्संग में समय बिताएँ।',
      pb: 'ਬੁਰੇ ਲੋਕਾਂ ਦੀ ਸੰਗਤ ਛੱਡ ਕੇ ਸਾਧ-ਸੰਗਤ ਕਰੋ।',
      en: 'Avoid the company of chronic critics and seek the uplifting association of devotees.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे सदा संतों के पावन समाज में रहने और उनके जैसा निर्मल बनने का सौभाग्य प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਸਾਧੂਆਂ ਦੀ ਸੰਗਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Keep my heart aligned with saintly virtues, allowing me to sit in holy fellowship.'
    },
    quiz: []
  },
  {
    id: 'ninda-16',
    number: 1581,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १६',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੬',
      en: 'Ninda Ko Ang - 16',
    },
    text: {
      hi: 'काहूँ को नहिं निन्दिये, चाहे जैसा होय।\nफिर फिर ताको बन्दिये, साधु लच्छ है सोय।।',
      pb: 'ਕਾਹੂ ਕੋ ਨਹਿਂ ਨਿਨ੍ਦਿਯੇ, ਚਾਹੇ ਜੈਸਾ ਹੋਇ।\nਫਿਰ ਫਿਰ ਤਾਕੋ ਬਨ੍ਦਿਯੇ, ਸਾਧੁ ਲਚ੍ਛ ਹੈ ਸੋਇ।।',
      en: 'Kaahoon ko nahin nindiye, chaahe jaisa hoy. Phir phiri taako bandiye, sadhu lachha hai soy..',
    },
    transliteration: 'Kaahoon ko nahin nindiye, chaahe jaisa hoy. Phir phiri taako bandiye, sadhu lachha hai soy.',
    bhavarth: {
      hi: 'चाहे कोई कैसा भी क्यों न हो, किंतु उसकी निंदा नहीं करनी चाहिए, बल्कि उसके गुणों की तारीफ ही करनी चाहिए। यह लक्षण उत्तम साधु का है।',
      pb: 'ਕਿਸੇ ਦੀ ਵੀ ਨਿੰਦਾ ਨਾ ਕਰੋ, ਚਾਹੇ ਉਹ ਕਿਹੋ ਜਿਹਾ ਵੀ ਹੋਵੇ। ਵਾਰ-ਵਾਰ ਉਸਦੇ ਚੰਗੇ ਗੁਣਾਂ ਦੀ ਪ੍ਰਸ਼ੰਸा ਕਰੋ, ਇਹ ਹੀ ਸਾਧੂ ਦੇ ਲੱਛਣ ਹਨ।',
      en: 'Do not slander anyone, no matter who they are or how they behave. Instead, repeatedly praise and bow to the good in them—this is the true mark of a saint.',
    },
    wordMeanings: {
      hi: [
        { word: 'बन्दिये (Bandiye)', meaning: 'वंदन करना / सम्मान करना' },
        { word: 'लच्छ (Lachha)', meaning: 'लक्षण / गुण' }
      ],
      pb: [
        { word: 'ਬਨ੍ਦਿਯੇ (Bandiye)', meaning: 'ਆਦਰ ਕਰਨਾ' },
        { word: 'ਲਚ੍ਛ (Lachha)', meaning: 'ਲੱਛਣ' }
      ],
      en: [
        { word: 'Bandiye', meaning: 'Revere / Bow to / Praise' },
        { word: 'Lachha', meaning: 'Characteristics / Traits' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं किसी के भी अवगुणों से परे हटकर उनके भीतर छिपे हुए देवत्व व गुणों की वंदना कर पाता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸਭ ਦੇ ਅੰਦਰ ਚੰਗਿਆਈ ਵੇਖਦਾ ਹਾਂ?',
      en: 'Am I able to look past a person\'s outer faults and salute the divine spark within them?'
    },
    practicalApplication: {
      hi: 'सभी मनुष्यों में कोई न कोई अच्छाई अवश्य ढूँढें और केवल उसी की सराहना करें।',
      pb: 'ਸਭ ਦੇ ਗੁਣਾਂ ਦੀ ਪ੍ਰਸ਼ੰਸਾ ਕਰੋ, ਦੋਸ਼ਾਂ ਵੱਲ ਧਿਆਨ ਨਾ ਦਿਓ।',
      en: 'Find at least one good quality in every person you meet and genuinely appreciate it.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे वह समदृष्टि दें जिससे मैं संपूर्ण सृष्टि में केवल आपका ही पावन स्वरूप देखूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਭ ਵਿੱਚ ਰੱਬ ਵੇਖਣ ਵਾਲੀ ਨਜ਼ਰ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O True Master! Bless me with the vision of oneness, seeing Your divine presence in all.'
    },
    quiz: []
  },
  {
    id: 'ninda-17',
    number: 1582,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १७',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੭',
      en: 'Ninda Ko Ang - 17',
    },
    text: {
      hi: 'जौ तू सेवक गुरुन का, निन्दा की तज बान।\nनिन्दक नेरे आय जब, कर आदर सनमान।।',
      pb: 'ਜੌ ਤੂ ਸੇਵਕ ਗੁਰੁਨ ਕਾ, ਨਿੰਦਾ ਕੀ ਤਜ ਬਾਨ।\nਨਿੰਦਕ ਨੇਰੇ ਆਇ ਜਬ, ਕਰ ਆਦਰ ਸਨਮਾਨ।।',
      en: 'Jau too sevak guruna ka, ninda kee taj baan. Nindak nere aai jab, kar aadar sanmaan..',
    },
    transliteration: 'Jau too sevak guruna ka, ninda kee taj baan. Nindak nere aai jab, kar aadar sanmaan.',
    bhavarth: {
      hi: 'यदि तुम श्रेष्ठ गुरुजनों के सेवक हो तो निंदा करने का स्वभाव त्याग दो और निंदा करने वाला जब तुम्हारे निकट आए तो उसका आदर-सम्मान करो।',
      pb: 'ਜੇਕਰ ਤੁਸੀਂ ਗੁਰੂ ਦੇ ਸੱਚੇ ਸੇਵਕ ਹੋ, ਤਾਂ ਨਿੰਦਾ ਕਰਨ ਦੀ ਆਦਤ ਛੱਡੋ। ਜਦੋਂ ਕੋਈ ਨਿੰਦਕ ਆਵੇ ਤਾਂ ਉਸਦਾ ਵੀ ਸਤਿਕਾਰ ਕਰੋ।',
      en: 'If you are a true disciple of the Master, renounce the habit of criticism. When a critic approaches you, welcome and honor them with kindness.',
    },
    wordMeanings: {
      hi: [
        { word: 'तज बान (Taj baan)', meaning: 'आदत का परित्याग करना' },
        { word: 'नेरे (Nere)', meaning: 'निकट / पास' }
      ],
      pb: [
        { word: 'ਤਜ ਬਾਨ (Taj baan)', meaning: 'ਆਦਤ ਛੱਡਣੀ' },
        { word: 'ਨੇਰੇ (Nere)', meaning: 'ਨੇੜੇ / ਕੋਲ' }
      ],
      en: [
        { word: 'Taj baan', meaning: 'Give up the habit' },
        { word: 'Nere', meaning: 'Near / Close' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आचरण गुरु-सेवक के अनुकूल है, या मैं निंदक के आने पर क्रोध व कटुता प्रकट करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਸਿੱਖ ਵਾਂਗ ਸ਼ਾਂਤ ਤੇ ਨਿਮਰ ਹਾਂ?',
      en: 'Does my response to critics reflect the calm maturity of a dedicated disciple?'
    },
    practicalApplication: {
      hi: 'आलोचक के आने पर विचलित न हों; उनके साथ अत्यंत शिष्टता व आदर के साथ व्यवहार करें।',
      pb: 'ਨਿੰਦਕਾਂ ਨਾਲ ਵੀ ਚੰਗਾ ਤੇ ਨਿਮਰਤਾ ਭਰਿਆ ਵਿਵਹਾਰ ਕਰੋ।',
      en: 'Remain completely undisturbed; treat even your loudest critic with polite dignity.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे अपने चरणों का ऐसा सच्चा सेवक बनाइए जो शत्रु को भी आदर दे सके। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਸੱਚਾ ਸੇਵਕ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Model my heart into that of a true servant who responds to malice with gentle respect.'
    },
    quiz: []
  },
  {
    id: 'ninda-18',
    number: 1583,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १८',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੮',
      en: 'Ninda Ko Ang - 18',
    },
    text: {
      hi: 'तिनका कबहुं न निन्दिये, पांव तले जो होय।\nकबहूं उड़ि आंखों परै, पीर घनेरी होय।।',
      pb: 'ਤਿਨਕਾ ਕਬਹੁਂ ਨ ਨਿੰਦਿਯੇ, ਪਾਂਵ ਤਲੇ ਜੋ ਹੋਇ।\nਕਬਹੂੰ ਉੜਿ ਆਂਖੋਂ ਪਰੈ, ਪੀਰ ਘਨੇਰੀ ਹੋਇ।।',
      en: 'Tinaka kabahun na nindiye, paanv tale jo hoy. Kabahun udi aankhon parai, peer ghaneree hoy..',
    },
    transliteration: 'Tinaka kabahun na nindiye, paanv tale jo hoy. Kabahun udi aankhon parai, peer ghaneree hoy.',
    bhavarth: {
      hi: 'पैर के नीचे पड़े हुए तिनके की भी कभी निंदा नहीं करनी चाहिए। यदि वह उड़कर कभी आंख में पड़ जाए, तो वह बहुत पीड़ादायक होता है।',
      pb: 'ਪੈਰਾਂ ਹੇਠਲੇ ਤਿਨਕੇ ਨੂੰ ਵੀ ਤੁੱਛ ਸਮਝ ਕੇ ਨਿੰਦਾ ਨਾ ਕਰੋ, ਜੇਕਰ ਉਹ ਉੱਡ ਕੇ ਅੱਖ ਵਿੱਚ ਪੈ ਜਾਵੇ ਤਾਂ ਬਹੁਤ ਦਰਦ ਦਿੰਦਾ ਹੈ।',
      en: 'Never look down upon or criticize even a tiny blade of grass lying under your feet. If it flies up and falls into your eye, it causes intense pain.',
    },
    wordMeanings: {
      hi: [
        { word: 'तिनका (Tinaka)', meaning: 'घास का छोटा टुकड़ा / तुच्छ व्यक्ति' },
        { word: 'पांव तले (Paanv tale)', meaning: 'पैरों के नीचे / हीन स्थिति में' },
        { word: 'पीर घनेरी (Peer ghaneree)', meaning: 'अत्यधिक पीड़ा / तीव्र कष्ट' }
      ],
      pb: [
        { word: 'ਤਿਨਕਾ (Tinaka)', meaning: 'ਤਿਣਕਾ / ਤੁੱਛ ਚੀਜ਼' },
        { word: 'ਪਾਂਵ ਤਲੇ (Paanv tale)', meaning: 'ਪੈਰਾਂ ਹੇਠ' },
        { word: 'ਪੀਰ ਘਨੇਰੀ (Peer ghaneree)', meaning: 'ਬਹੁਤ ਦਰਦ' }
      ],
      en: [
        { word: 'Tinaka', meaning: 'Straw / Tiny blade of grass / Lowly person' },
        { word: 'Paanv tale', meaning: 'Under the feet / Subjugated' },
        { word: 'Peer ghaneree', meaning: 'Extreme pain / Intense suffering' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं किसी भी साधारण या हीन समझे जाने वाले प्राणी को तुच्छ मानकर उसका अनादर कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਕਿਸੇ ਕਮਜ਼ੋਰ ਨੂੰ ਤੁੱਛ ਸਮਝਣ ਦੀ ਭੁੱਲ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I looking down on someone small or weak, forgetting that the smallest creature can cause massive pain if disturbed?'
    },
    practicalApplication: {
      hi: 'संसार के सबसे छोटे जीव का भी कभी अपमान न करें; सभी के प्रति अत्यंत दयालु रहें।',
      pb: 'ਕਿਸੇ ਵੀ ਛੋਟੇ ਜੀਵ ਦਾ ਅਪਮਾਨ ਨਾ ਕਰੋ, ਸਭ ਤੇ ਦਇਆ ਕਰੋ।',
      en: 'Never demean the weak or small; hold a heart of kindness toward every creature.'
    },
    samarpanPrayer: {
      hi: 'हे करुणामयी साहेब! मुझे प्रत्येक प्राणी के प्रति विनम्र व संवेदनशील बनने का गुण प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਹਰ ਜੀਵ ਤੇ ਦਇਆ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Compassionate Master! Awaken my heart to value and respect the smallest of Your creations.'
    },
    quiz: []
  },
  {
    id: 'ninda-19',
    number: 1584,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'निन्दा को अंग - १९',
      pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ - ੧੯',
      en: 'Ninda Ko Ang - 19',
    },
    text: {
      hi: 'निन्दक नियरे राखिये, आंगन कुटी छवाय।\nबिन पानी साबुन बिना, निरमल करे सुभाय।।',
      pb: 'ਨਿੰਦਕ ਨਿਯਰੇ ਰਾਖਿਯੇ, ਆਂਗਨ ਕੁਟੀ ਛਵਾਇ।\nਬਿਨ ਪਾਨੀ ਸਾਬੁਨ ਬਿਨਾ, ਨਿਰਮਲ ਕਰੇ ਸੁਭਾਇ।।',
      en: 'Nindak niyare raakhiye, aangan kutee chhavaay. Bin paanee saabun bina, niramal kare subhaay..',
    },
    transliteration: 'Nindak niyare raakhiye, aangan kutee chhavaay. Bin paanee saabun bina, niramal kare subhaay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि निंदक को अपने आंगन में मकान बनवाकर सदैव पास में रखे, क्योंकि वह बिना साबुन-पानी के ही आपका स्वभाव निर्मल करता रहेगा।',
      pb: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਨਿੰਦਕ ਨੂੰ ਹਮੇਸ਼ਾ ਆਪਣੇ ਨੇੜੇ ਰੱਖੋ, ਕਿਉਂਕਿ ਉਹ ਬਿਨਾਂ ਪਾਣੀ ਤੇ ਸਾਬਣ ਦੇ ਹੀ ਤੁਹਾਡੇ ਸੁਭਾਅ ਨੂੰ ਸਾਫ਼ ਕਰਦਾ ਰਹਿੰਦਾ ਹੈ।',
      en: 'Keep your critic close to you, even building a cottage for them in your courtyard! For they wash away your inner blemishes and purify your character without water or soap.',
    },
    wordMeanings: {
      hi: [
        { word: 'नियरे (Niyare)', meaning: 'निकट / पास में' },
        { word: 'कुटी छवाय (Kutee chhavaay)', meaning: 'कुटिया बनवाकर / आश्रय देकर' },
        { word: 'सुभाय (Subhaay)', meaning: 'स्वभाव / अंतःकरण' }
      ],
      pb: [
        { word: 'ਨਿਯਰੇ (Niyare)', meaning: 'ਕੋਲ / ਨੇੜੇ' },
        { word: 'ਕੁਟੀ ਛਵਾਇ (Kutee chhavaay)', meaning: 'ਕੁਟੀਆ ਪਾ ਕੇ' },
        { word: 'ਸੁਭਾਇ (Subhaay)', meaning: 'ਸੁਭਾਅ' }
      ],
      en: [
        { word: 'Niyare', meaning: 'Very close / Near' },
        { word: 'Kutee chhavaay', meaning: 'Erecting a cottage / Giving shelter' },
        { word: 'Subhaay', meaning: 'Inherent nature / Heart' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी कमियों को उजागर करने वाले सच्चे आलोचकों की कद्र करता हूँ, या केवल झूठी प्रशंसा करने वालों से घिरा रहना चाहता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਝੂਠੀ ਪ੍ਰਸ਼ੰਸਾ ਕਰਨ ਵਾਲਿਆਂ ਨਾਲੋਂ ਸੱਚੇ ਆਲੋਚਕ ਦੀ ਕਦਰ ਕਰਦਾ ਹਾਂ?',
      en: 'Do I appreciate sincere critics who expose my flaws, or do I prefer the comforting lies of flatterers?'
    },
    practicalApplication: {
      hi: 'निंदक के प्रति कभी दुर्भावना न रखें; उनकी आलोचना को अपने चरित्र को मांजने का अनमोल अवसर समझें।',
      pb: 'ਨਿੰਦਕਾਂ ਤੋਂ ਕਦੇ ਨਫ਼ਰਤ ਨਾ ਕਰੋ, ਉਹਨਾਂ ਤੋਂ ਸਿੱਖ ਕੇ ਸੁਭਾਅ ਨਿਰਮਲ ਕਰੋ।',
      en: 'Value your critics; treat their feedback as a free cleansing bath for your spiritual journey.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे इतनी नम्रता व सहनशीलता प्रदान करें कि मैं सदा निंदक को अपना शुभचिंतक मान सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਹਿਣਸ਼ੀਲਤਾ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Grant me the profound patience to welcome my critics as guardians of my spiritual growth.'
    },
    quiz: []
  }
];
