import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_KRODH_KO_ANG: Sakhi[] = [
  {
    id: 'krodh-1',
    number: 1521,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - १',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੧',
      en: 'Krodh Ko Ang - 1',
    },
    text: {
      hi: 'कोटि करम लागे रहै, एक क्रोध की लार।\nकिया कराया सब गया, जब आया हंकार।।',
      pb: 'ਕੋਟਿ ਕਰਮ ਲਾਗੇ ਰਹੈ, ਏਕ ਕ੍ਰੋਧ ਕੀ ਲਾਰ।\nਕੀਆ ਕਰਾਇਆ ਸਬ ਗਇਆ, ਜਬ ਆਇਆ ਹੰਕਾਰ।।',
      en: 'Koti karam lage rahai, ek krodh kee laar. Keeya karaya sab gaya, jab aaya hankaar..',
    },
    transliteration: 'Koti karam lage rahai, ek krodh kee laar. Keeya karaya sab gaya, jab aaya hankaar.',
    bhavarth: {
      hi: 'क्रोध तो केवल एक ही होता है, परंतु उसके साथ करोड़ों पाप कर्म जुड़े रहते हैं। राग, द्वेष, ईष्र्या, मद, लोभ तथा मोह-माया आदि के अनगिनत दुष्कर्म-पापआदि क्रोध से ही उपजते हैं। मन में अहंकार के आते ही सारा पुण्य व धर्म-कर्म नष्ट हो जाता है। अहंकार स्वार्थ से प्रेरित होता है, अतः सभी कर्म भी सकाम होने से शुभ फलदायी नहीं होते।',
      pb: 'ਕ੍ਰੋਧ ਤਾਂ ਇਕ ਹੀ ਹੁੰਦਾ ਹੈ, ਪਰ ਉਸ ਨਾਲ ਕਰੋੜਾਂ ਪਾਪ ਕਰਮ ਜੁੜੇ ਰਹਿੰਦੇ ਹਨ। ਰਾਗ, ਦ੍ਵੇਸ਼, ਈਰਖਾ, ਲੋਭ ਤੇ ਮੋਹ-ਮਾਇਆ ਦੇ ਅਣਗਿਣਤ ਪਾਪ ਕ੍ਰੋਧ ਤੋਂ ਹੀ ਪੈਦਾ ਹੁੰਦੇ ਹਨ। ਅਹੰਕਾਰ ਆਉਂਦੇ ਹੀ ਸਾਰਾ ਪੁੰਨ ਤੇ ਧਰਮ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'Anger may seem like a single flaw, but millions of sins follow in its wake. Attachment, malice, envy, greed, and delusion all spring from anger. The moment pride enters the heart, all accumulated merit and righteous deeds are destroyed.',
    },
    wordMeanings: {
      hi: [
        { word: 'कोटि (Koti)', meaning: 'करोड़ों / अनगिनत' },
        { word: 'लार (Laar)', meaning: 'साथ / कतार / पंक्ति' },
        { word: 'हंकार (Hankaar)', meaning: 'अहंकार / घमंड' }
      ],
      pb: [
        { word: 'ਕੋਟਿ (Koti)', meaning: 'ਕਰੋੜਾਂ' },
        { word: 'ਲਾਰ (Laar)', meaning: 'ਨਾਲ / ਕਤਾਰ' },
        { word: 'ਹੰਕਾਰ (Hankaar)', meaning: 'ਅਹੰਕਾਰ' }
      ],
      en: [
        { word: 'Koti', meaning: 'Millions / Countless' },
        { word: 'Laar', meaning: 'Train / Sequence / Following' },
        { word: 'Hankaar', meaning: 'Ego / Pride' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं क्षणिक क्रोध के वशीभूत होकर अपने जीवन भर के पुण्य-कर्मों तथा साधना की पूंजी को नष्ट तो नहीं कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਪਲ ਭਰ ਦੇ ਕ੍ਰੋਧ ਵਿੱਚ ਆ ਕੇ ਆਪਣੀ ਰੂਹਾਨੀ ਪੂੰਜੀ ਗੁਆ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I allowing moments of anger to destroy the spiritual merit accumulated through lifelong devotion?'
    },
    practicalApplication: {
      hi: 'जब भी मन में क्रोध या अहंकार की ज्वाला जगे, तुरंत शांत होकर सतगुरु के नाम का स्मरण करें।',
      pb: 'ਜਦੋਂ ਵੀ ਕ੍ਰੋਧ ਆਵੇ, ਸ਼ਾਂਤ ਹੋ ਕੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Whenever anger or pride rises within, pause immediately and anchor your mind in quiet remembrance of Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे क्रोध तथा अहंकार से मुक्त कर शांत व क्षमाशील हृदय प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕ੍ਰੋਧ ਤੇ ਅਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਕਰ ਕੇ ਖਿਮਾਸ਼ੀਲ ਹਿਰਦਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Deliver me from anger and pride, and bless me with a forgiving and peaceful heart.'
    },
    quiz: []
  },
  {
    id: 'krodh-2',
    number: 1522,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - २',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੨',
      en: 'Krodh Ko Ang - 2',
    },
    text: {
      hi: 'गार अंगार क्रोध झल, निन्दा धूवां होय।\nइन तीनों को परिहरै, साधु कहावै सोय।।',
      pb: 'ਗਾਰ ਅੰਗਾਰ ਕ੍ਰੋਧ ਝਲ, ਨਿੰਦਾ ਧੂਵਾਂ ਹੋਇ।\nਇਨ ਤੀਨੋਂ ਕੋ ਪਰਿਹਰੈ, ਸਾਧੂ ਕਹਾਵੈ ਸੋਇ।।',
      en: 'Gaar angaar krodh jhal, ninda dhoovaan hoy. In teenon ko pariharai, sadhu kahavai soy..',
    },
    transliteration: 'Gaar angaar krodh jhal, ninda dhoovaan hoy. In teenon ko pariharai, sadhu kahavai soy.',
    bhavarth: {
      hi: 'मुख से निकली गाली अमर्यादित बातें अंगार स्वरूप है, क्रोध उसकी झलकती आंच (तपन) है और पर निंदा उठते हुए धुएं के समान है। इन तीनों का जो सर्वथा त्याग कर देता है, वही साधु कहलाता है। गाली, क्रोध और निंदा तीनों ही ऐसे भयंकर दुर्गुण हैं, जो मनुष्य के अपने लिए भी तथा दूसरों के लिए भी घातक सिद्ध होते हैं।',
      pb: 'ਮੂੰਹੋਂ ਨਿਕਲੀ ਗਾਲ਼ ਅੰਗਿਆਰ ਵਰਗੀ ਹੈ, ਕ੍ਰੋਧ ਉਸ ਦੀ ਬਲਦੀ ਭਾਫ਼ ਹੈ ਅਤੇ ਨਿੰਦਿਆ ਧੂੰਏਂ ਵਰਗੀ ਹੈ। ਜੋ ਇਨ੍ਹਾਂ ਤਿੰਨਾਂ ਦਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤਿਆਗ ਕਰ ਦਿੰਦਾ ਹੈ, ਉਹੀ ਅਸਲ ਸਾਧੂ ਅਖਵਾਉਂਦਾ ਹੈ।',
      en: 'Abusive language is like burning embers, anger is its scorching heat, and slander is the suffocating smoke. One who completely renounces these three deadly vices is truly called a saint.',
    },
    wordMeanings: {
      hi: [
        { word: 'गार (Gaar)', meaning: 'गाली / अपशब्द' },
        { word: 'झल (Jhal)', meaning: 'ज्वाला / आंच / तपन' },
        { word: 'परिहरै (Pariharai)', meaning: 'त्याग देना / दूर करना' }
      ],
      pb: [
        { word: 'ਗਾਰ (Gaar)', meaning: 'ਗਾਲ਼ / ਅਪਸ਼ਬਦ' },
        { word: 'ਝਲ (Jhal)', meaning: 'ਬਲਦੀ ਆਂਚ' },
        { word: 'ਪਰਿਹਰੈ (Pariharai)', meaning: 'ਛੱਡ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Gaar', meaning: 'Abusive words / Foul language' },
        { word: 'Jhal', meaning: 'Scorching flame / Heat' },
        { word: 'Pariharai', meaning: 'To completely renounce' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी वाणी में गाली, क्रोध की तपन या पर-निंदा का धुआं विद्यमान है?',
      pb: 'ਕੀ ਮੇਰੀ ਬੋਲੀ ਵਿੱਚ ਕ੍ਰੋਧ ਜਾਂ ਨਿੰਦਿਆ ਦਾ ਧੂੰਆਂ ਹੈ?',
      en: 'Do abusive words, scorching anger, or the smoke of slander taint my speech?'
    },
    practicalApplication: {
      hi: 'अपनी वाणी में मीठापन लाएं, न किसी को अपशब्द कहें और न ही किसी की निंदा सुनें।',
      pb: 'ਆਪਣੀ ਬੋਲੀ ਮਿੱਠੀ ਰੱਖੋ, ਕਿਸੇ ਨੂੰ ਗਾਲ਼ ਨਾ ਕੱਢੋ ਤੇ ਨਾ ਨਿੰਦਿਆ ਕਰੋ।',
      en: 'Speak with gentleness and warmth; refrain from foul language, outburst, and gossip.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरी रसना को मिठास और संयम प्रदान करें ताकि किसी का दिल न दुखे।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੇਰੀ ਰਸਨਾ ਨੂੰ ਮਿਠਾਸ ਬਖਸ਼ੋ।',
      en: 'O Lord! Sweeten my tongue with restraint and purity so that my words bring healing, not harm.'
    },
    quiz: []
  },
  {
    id: 'krodh-3',
    number: 1523,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - ३',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੩',
      en: 'Krodh Ko Ang - 3',
    },
    text: {
      hi: 'क्रोध अगनि घर घर बढ़ी, जलै सकल संसार।\nदीन लीन निज भक्त जो, तिनके निकट उबार।।',
      pb: 'ਕ੍ਰੋਧ ਅਗਨਿ ਘਰ ਘਰ ਬਢ਼ੀ, ਜਲੈ ਸਕਲ ਸੰਸਾਰ।\nਦੀਨ ਲੀਨ ਨਿਜ ਭਕ੍ਤ ਜੋ, ਤਿਨਕੇ ਨਿਕਟ ਉਬਾਰ।।',
      en: 'Krodh agani ghar ghar badhee, jalai sakal sansaar. Deen leen nij bhakt jo, tinke nikat ubaar..',
    },
    transliteration: 'Krodh agani ghar ghar badhee, jalai sakal sansaar. Deen leen nij bhakt jo, tinke nikat ubaar.',
    bhavarth: {
      hi: 'क्रोध की अग्नि घर-घर में प्रज्वलित होकर अपना दुष्प्रभाव दिखा रही है, यह प्रत्येक मानस-मन में सुलग रही है और इससे सारा संसार जल रहा है, परंतु जो विनम्र भक्त अपनी ज्ञान-भक्ति की साधना में लीन हैं, उनकी सत्संगति में ही उद्धार है, अर्थात इससे बचने का उपाय है।',
      pb: 'ਕ੍ਰੋਧ ਦੀ ਅੱਗ ਘਰ-ਘਰ ਵਿੱਚ ਬਲ ਰਹੀ ਹੈ ਅਤੇ ਸਾਰਾ ਸੰਸਾਰ ਇਸ ਵਿੱਚ ਸੜ ਰਿਹਾ ਹੈ। ਪਰ ਜੋ ਨਿਮਰ ਭਗਤ ਆਪਣੀ ਸਾਧਨਾ ਵਿੱਚ ਲੀਨ ਹਨ, ਉਨ੍ਹਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਹੀ ਇਸ ਤੋਂ ਬਚਾਅ ਤੇ ਉੱਧਾਰ ਹੈ।',
      en: 'The fire of anger rages in every household, scorching the entire world. Yet those humble devotees who are absorbed in sincere spiritual devotion offer a sanctuary where souls find salvation from this blaze.',
    },
    wordMeanings: {
      hi: [
        { word: 'सकल (Sakal)', meaning: 'समस्त / पूरा' },
        { word: 'दीन (Deen)', meaning: 'विनम्र / निरहंकारी' },
        { word: 'उबार (Ubaar)', meaning: 'उद्धार / बचाव / रक्षा' }
      ],
      pb: [
        { word: 'ਸਕਲ (Sakal)', meaning: 'ਸਾਰਾ' },
        { word: 'ਦੀਨ (Deen)', meaning: 'ਨਿਮਰ' },
        { word: 'ਉਬਾਰ (Ubaar)', meaning: 'ਬਚਾਅ / ਉੱਧਾਰ' }
      ],
      en: [
        { word: 'Sakal', meaning: 'All / Entire' },
        { word: 'Deen', meaning: 'Humble / Gentle' },
        { word: 'Ubaar', meaning: 'Salvation / Rescue' }
      ]
    },
    contemplation: {
      hi: 'संसार में फैली क्रोध की अग्नि से बचने के लिए क्या मैं संतों की विनम्र सत्संगति की शरण में हूँ?',
      pb: 'ਕੀ ਮੈਂ ਕ੍ਰੋਧ ਦੀ ਅੱਗ ਤੋਂ ਬਚਣ ਲਈ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਹਾਂ?',
      en: 'Am I seeking shelter in the cool shade of holy fellowship to escape the world\'s raging fires of anger?'
    },
    practicalApplication: {
      hi: 'सत्संगति में समय बिताएं और नम्रता को अपने जीवन का आभूषण बनाएं।',
      pb: 'ਸਤਿਸੰਗ ਵਿੱਚ ਸਮਾਂ ਬਿਤਾਓ ਤੇ ਨਿਮਰਤਾ ਅਪਣਾਓ।',
      en: 'Spend time in holy congregation and wear humility as your constant ornament.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! क्रोध की इस आग में जल रहे संसार में मुझे संतों का शीतल संबल प्रदान करें।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਤਾਂ ਦਾ ਸੀਤਲ ਆਸਰਾ ਬਖਸ਼ੋ।',
      en: 'O Satguru! Shield me from the world\'s anger and anchor me in the serene refuge of true saints.'
    },
    quiz: []
  },
  {
    id: 'krodh-4',
    number: 1524,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - ४',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੪',
      en: 'Krodh Ko Ang - 4',
    },
    text: {
      hi: 'यह जग कोठी काठ की, चहुंदिस लागी आग।\nभीतर रहै सो जलि मुये, साधु उबरे भाग।।',
      pb: 'ਯਹ ਜਗ ਕੋਠੀ ਕਾਠ ਕੀ, ਚਹੁੰਦਿਸ ਲਾਗੀ ਆਗ।\nਭੀਤਰ ਰਹੈ ਸੋ ਜਲਿ ਮੁਯੇ, ਸਾਧੂ ਉਬਰੇ ਭਾਗ।।',
      en: 'Yah jag kothee kaath kee, chahundis laagee aag. Bheetar rahai so jali muye, sadhu ubare bhaag..',
    },
    transliteration: 'Yah jag kothee kaath kee, chahundis laagee aag. Bheetar rahai so jali muye, sadhu ubare bhaag.',
    bhavarth: {
      hi: 'यह संसार काठ की कोठरी के समान है और इसमें चारों दिशाओं में क्रोध की अग्नि की लपटें उठ रही हैं, जो भी इसके भीतर रहेगा, वह जलकर मर जाएगा, परंतु साधु-संत इस संसार से भागकर (मोह-माया त्यागकर) बच गए, अर्थात इससे मुक्ति पा गए।',
      pb: 'ਇਹ ਸੰਸਾਰ ਕਾਠ (ਲੱਕੜ) ਦੀ ਕੋਠੜੀ ਵਾਂਗ ਹੈ ਜਿਸ ਵਿੱਚ ਚਾਰੇ ਪਾਸੇ ਅੱਗ ਲੱਗੀ ਹੋਈ ਹੈ। ਜੋ ਇਸ ਦੇ ਅੰਦਰ ਹੀ ਰਹੇਗਾ, ਉਹ ਸੜ ਕੇ ਮਰ ਜਾਵੇਗਾ; ਪਰ ਸਾਧੂ-ਸੰਤ ਮੋਹ-ਮਾਇਆ ਤਿਆਗ ਕੇ ਬਚ ਨਿਕਲੇ।',
      en: 'This worldly existence is like a wooden chamber engulfed in flames from all four sides. Whoever remains trapped inside perishes, but the wise saints escape by detaching from material illusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'काठ (Kaath)', meaning: 'लकड़ी' },
        { word: 'चहुंदिस (Chahundis)', meaning: 'चारों दिशाओं में' },
        { word: 'मुये (Muye)', meaning: 'मर जाते हैं' }
      ],
      pb: [
        { word: 'ਕਾਠ (Kaath)', meaning: 'ਲੱਕੜ' },
        { word: 'ਚਹੁੰਦਿਸ (Chahundis)', meaning: 'ਚਾਰੇ ਪਾਸੇ' }
      ],
      en: [
        { word: 'Kaath', meaning: 'Wood / Timber' },
        { word: 'Chahundis', meaning: 'In all four directions' },
        { word: 'Muye', meaning: 'Perish / Die' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं इस नश्वर संसार की वासना-अग्नि में जल रहा हूँ या संतों की भांति अनासक्त होकर उबर गया हूँ?',
      pb: 'ਕੀ ਮੈਂ ਇਸ ਸੰਸਾਰ ਦੀ ਤ੍ਰਿਸ਼ਨਾ-ਅੱਗ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹਾਂ?',
      en: 'Am I trapped in the burning house of worldly desires, or am I taking steps toward spiritual liberation?'
    },
    practicalApplication: {
      hi: 'संसार में रहते हुए भी कमल के पत्ते की भांति निर्लेप और शांत रहें।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹੋਏ ਕੰਵਲ ਦੇ ਫੁੱਲ ਵਾਂਗ ਨਿਰਲੇਪ ਰਹੋ।',
      en: 'Live in the world like a lotus flower upon water—completely unattached and pristine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे इस संसार रूपी काठ की जलती कोठरी से निकालकर सत्यनाम का पावन तट प्रदान करें।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਇਸ ਸੰਸਾਰ ਦੀ ਅੱਗ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਥਾਂ ਦਿਓ।',
      en: 'O Satguru! Lift me out of the burning chamber of illusion and seat me safely at Your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'krodh-5',
    number: 1525,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - ५',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੫',
      en: 'Krodh Ko Ang - 5',
    },
    text: {
      hi: 'जगत मांहि धोखा घना, अहं क्रोध अरु काल।\nपौरि पहुंचा मारिये, ऐसा जम का जाल ।।',
      pb: 'ਜਗਤ ਮਾਂਹਿ ਧੋਖਾ ਘਨਾ, ਅਹੰ ਕ੍ਰੋਧ ਅਰੁ ਕਾਲ।\nਪੌਿਰ ਪਹੁੰਚਾ ਮਾਰੀਏ, ਐਸਾ ਜਮ ਕਾ ਜਾਲ।।',
      en: 'Jagat maanhidhokha ghana, ahan krodh aru kaal. Pauri pahuncha maariye, aisa jam ka jaal..',
    },
    transliteration: 'Jagat maanhidhokha ghana, ahan krodh aru kaal. Pauri pahuncha maariye, aisa jam ka jaal.',
    bhavarth: {
      hi: 'अहंकार, क्रोध तथा काल-कल्पना से सांसारिक बंधनों में जकडे लोग बहुत अधिक धोखा खाते हैं। यह एक प्रकार का यम का जंजाल है, अतः इसे तो द्वार पर पहुंचते ही मार डालना चाहिए। जैसे ही कोई पाप-स्मरण या विकार मन में जगे, सावधान होकर संयम भाव से उसे नष्ट कर देना चाहिए।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਅਹੰਕਾਰ, ਕ੍ਰੋਧ ਅਤੇ ਕਾਲ ਦਾ ਬਹੁਤ ਵੱਡਾ ਧੋਖਾ ਹੈ। ਇਹ ਯਮਰਾਜ ਦਾ ਜਾਲ ਹੈ, ਇਸ ਲਈ ਜਿਵੇਂ ਹੀ ਇਹ ਮਨ ਦੇ ਦੁਆਰ \'ਤੇ ਆਵੇ, ਉਸੇ ਵੇਲੇ ਇਸ ਦਾ ਨਾਸ ਕਰ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।',
      en: 'The world is full of deception through ego, anger, and mortality. This is the deadly trap of Yama (Death); therefore, slay these negative impulses the very moment they arrive at the doorway of your mind.'
    },
    wordMeanings: {
      hi: [
        { word: 'घना (Ghana)', meaning: 'बहुत अधिक' },
        { word: 'पौरि (Pauri)', meaning: 'द्वार / देहरी' },
        { word: 'जम (Jam)', meaning: 'यमराज / मृत्यु' }
      ],
      pb: [
        { word: 'ਘਨਾ (Ghana)', meaning: 'ਬਹੁਤ ਜ਼ਿਆਦਾ' },
        { word: 'ਪੌਿਰ (Pauri)', meaning: 'ਦੁਆਰ' }
      ],
      en: [
        { word: 'Ghana', meaning: 'Immense / Abundant' },
        { word: 'Pauri', meaning: 'Threshold / Doorway' },
        { word: 'Jam', meaning: 'Yama / Messenger of Death' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन के द्वार पर पहरेदार बनकर क्रोध और अहंकार के विचार को प्रवेश करते ही समाप्त कर पाता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਦੇ ਦੁਆਰ \'ਤੇ ਜਾਗਰੂਕ ਹੋ ਕੇ ਕ੍ਰੋਧ ਨੂੰ ਰੋਕਦਾ ਹਾਂ?',
      en: 'Am I standing guard at the threshold of my mind, nipping negative thoughts in the bud before they take root?'
    },
    practicalApplication: {
      hi: 'जैसे ही मन में कोई क्रोध या ईर्ष्या का विचार उठे, विवेक का प्रयोग कर उसे तुरंत मिटा दें।',
      pb: 'ਜਿਵੇਂ ਹੀ ਕ੍ਰੋਧ ਦਾ ਵਿਚਾਰ ਆਵੇ, ਗਿਆਨ ਨਾਲ ਉਸ ਨੂੰ ਤੁਰੰਤ ਖ਼ਤਮ ਕਰ ਦਿਓ।',
      en: 'At the very first instant a spark of anger flares, use spiritual wisdom to extinguish it immediately.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे मन के द्वार पर विवेक का अखंड प्रहरी बनाएं ताकि कोई विकार भीतर न आ सके।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੇਰੇ ਮਨ ਨੂੰ ਗਿਆਨ ਦੀ ਜਾਗ੍ਰਿਤੀ ਬਖਸ਼ੋ।',
      en: 'O Lord! Establish unwavering mindfulness at the gates of my consciousness so no vice may enter.'
    },
    quiz: []
  },
  {
    id: 'krodh-6',
    number: 1526,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'क्रोध को अंग - ६',
      pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ - ੬',
      en: 'Krodh Ko Ang - 6',
    },
    text: {
      hi: 'दसौं दिसा में क्रोध की, उठी अपरबल आग।\nसीतल संगत साध की, तहां उबरिये भाग।।',
      pb: 'ਦਸੋਂ ਦਿਸਾ ਮੈਂ ਕ੍ਰੋਧ ਕੀ, ਉਠੀ ਅਪਰਬਲ ਆਗ।\nਸੀਤਲ ਸੰਗਤ ਸਾਧ ਕੀ, ਤਹਾਂ ਉਬਰੀਏ ਭਾਗ।।',
      en: 'Dasaun disa mein krodh kee, uthee aparbal aag. Seetal sangat sadh kee, tahaan ubareeye bhaag..',
    },
    transliteration: 'Dasaun disa mein krodh kee, uthee aparbal aag. Seetal sangat sadh kee, tahaan ubareeye bhaag.',
    bhavarth: {
      hi: 'जिधर देखो, उधर ही दसों दिशाओं में क्रोध की भयंकर ज्वाला दहक रही है। यदि कोई सुरक्षित स्थान दिखाई देता है, तो वह साधु-संतों की सत्संगति ही है, जो शीतल सुखदायी है, अतः भागकर वहां जाओ, वहीं पर तुम्हारा उद्धार हो सकता है।',
      pb: 'ਜਿੱਧਰ ਦੇਖੋ, ਉੱਧਰ ਹੀ ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਕ੍ਰੋਧ ਦੀ ਭਿਆਨਕ ਅੱਗ ਬਲ ਰਹੀ ਹੈ। ਜੇਕਰ ਕੋਈ ਸ਼ਾਂਤ ਤੇ ਸੀਤਲ ਥਾਂ ਹੈ ਤਾਂ ਉਹ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਹੀ ਹੈ, ਉੱਥੇ ਹੀ ਭੱਜ ਕੇ ਜਾਓ, ਉੱਥੇ ਹੀ ਤੁਹਾਡਾ ਬਚਾਅ ਹੈ।',
      en: 'In all ten directions, the ferocious fire of anger burns unchecked. The only cool and comforting refuge is the serene fellowship of true saints; flee there swiftly, for therein lies your salvation.'
    },
    wordMeanings: {
      hi: [
        { word: 'अपरबल (Aparbal)', meaning: 'अत्यंत प्रबल / शक्तिशाली' },
        { word: 'सीतल (Seetal)', meaning: 'शीतल / शांत / सुखदायी' },
        { word: 'तहां (Tahaan)', meaning: 'वहां' }
      ],
      pb: [
        { word: 'ਅਪਰਬਲ (Aparbal)', meaning: 'ਬਹੁਤ ਭਿਆਨਕ / ਤਾਕਤਵਰ' },
        { word: 'ਸੀਤਲ (Seetal)', meaning: 'ਠੰਢਾ / ਸ਼ਾਂਤ' }
      ],
      en: [
        { word: 'Aparbal', meaning: 'Immense / Unstoppable' },
        { word: 'Seetal', meaning: 'Cool / Soothing / Tranquil' },
        { word: 'Tahaan', meaning: 'There / In that place' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं क्रोध की तपिश से झुलसते मन को साधु-संगत के शीतल सरोवर में शांत कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਨੂੰ ਸੰਤਾਂ ਦੀ ਸੀਤਲ ਸੰਗਤ ਵਿੱਚ ਸ਼ਾਂਤ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I quenching my scorched mind in the cool, soothing waters of holy congregation?'
    },
    practicalApplication: {
      hi: 'दैनिक जीवन में संतों की वाणी, सत्संग और नाम-सिमरन में आश्रय लेकर परम शांति प्राप्त करें।',
      pb: 'ਰੋਜ਼ਾਨਾ ਸੰਤਾਂ ਦੀ ਬਾਣੀ ਤੇ ਨਾਮ-ਸਿਮਰਨ ਦਾ ਆਸਰਾ ਲਵੋ।',
      en: 'Take daily refuge in sacred teachings, satsang, and Holy Remembrance to attain abiding peace.'
    },
    samarpanPrayer: {
      hi: 'हे परम सतगुरु! मुझे साधु-संतों की शीतल संगत का निरंतर वरदान दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪਰਮ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਧੂ-ਸੰਗਤ ਦਾ ਸੀਤਲ ਆਸਰਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Satguru! Eternally bless me with the tranquil refuge of saintly fellowship.'
    },
    quiz: []
  }
];
