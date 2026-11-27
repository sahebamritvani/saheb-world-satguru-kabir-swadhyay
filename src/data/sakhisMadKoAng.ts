import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_MAD_KO_ANG: Sakhi[] = [
  {
    id: 'mad-1',
    number: 1532,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - १',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੧',
      en: 'Mad Ko Ang - 1',
    },
    text: {
      hi: 'दीप कू झोला पवन है, नर को झोला नारि।\nज्ञानी झोला गर्व है, कहैं कबीर पुकारि।।',
      pb: 'ਦੀਪ ਕੂ ਝੋਲਾ ਪਵਨ ਹੈ, ਨਰ ਕੋ ਝੋਲਾ ਨਾਰਿ।\nਗਿਆਨੀ ਝੋਲਾ ਗਰਵ ਹੈ, ਕਹੈਂ ਕਬੀਰ ਪੁਕਾਰਿ।।',
      en: 'Deep koo jhola pawan hai, nar ko jhola naari. Gyaanee jhola garav hai, kahain kabeer pukaari..',
    },
    transliteration: 'Deep koo jhola pawan hai, nar ko jhola naari. Gyaanee jhola garav hai, kahain kabeer pukaari.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि दीपक को बुझाने वाली तेज पवन है और पुरुष को वासना के रंग में डुबोकर पतन की ओर अग्रसर करने वाली स्त्री है। पुरुष और स्त्री दोनों विषयगामी होने से एक-दूसरे को पतित करते हैं। ज्ञानी मनुष्य का सब ओर से विनाश करने वाला यह अहंकार ही है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਦੀਵੇ ਨੂੰ ਬੁਝਾਉਣ ਵਾਲਾ ਤੇਜ਼ ਝੱਖੜ ਪਵਨ ਹੈ, ਪਰ ਗਿਆਨੀ ਪੁਰਸ਼ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਵਿਨਾਸ਼ ਕਰਨ ਵਾਲਾ ਉਸ ਦਾ ਆਪਣਾ ਹੰਕਾਰ ਹੈ।',
      en: 'A gust of wind extinguishes a lamp; sensual indulgence leads mortals to downfall. Kabir proclaims that for a learned scholar or spiritual seeker, it is pride and arrogance that causes utter destruction.',
    },
    wordMeanings: {
      hi: [
        { word: 'झोला (Jhola)', meaning: 'विनाशकारी झोंका / आघात' },
        { word: 'गर्व (Garav)', meaning: 'अहंकार / घमंड / मद' }
      ],
      pb: [
        { word: 'ਝੋਲਾ (Jhola)', meaning: 'ਵਿਨਾਸ਼ਕਾਰੀ ਝੱਖੜ / ਆਘਾਤ' },
        { word: 'ਗਰਵ (Garav)', meaning: 'ਹੰਕਾਰ / ਗਰੂਰ' }
      ],
      en: [
        { word: 'Jhola', meaning: 'Destructive gust / Fatal shock' },
        { word: 'Garav', meaning: 'Pride / Egotism' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने ज्ञान या साधना के अहंकार में भरकर अपना ही पतन तो नहीं कर रहा हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਗਿਆਨ ਹੀ ਮੇਰੇ ਹੰਕਾਰ ਦਾ ਕਾਰਨ ਬਣ ਰਿਹਾ ਹੈ?',
      en: 'Is my spiritual knowledge becoming fuel for subtle pride, leading me toward self-destruction?'
    },
    practicalApplication: {
      hi: 'जितना ज्ञान बढ़े, उतनी ही अपनी नम्रता और निरहंकारिता में वृद्धि करें।',
      pb: 'ਗਿਆਨ ਵਧਣ ਨਾਲ ਆਪਣੀ ਨਿਮਰਤਾ ਵਧਾਓ।',
      en: 'As your knowledge grows, deepen your humility in equal measure.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे ज्ञानाभिमान से बचाकर निरहंकारी भक्ति भाव प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਹੰਕਾਰ ਤੋਂ ਬਚਾ ਕੇ ਨਿਮਰਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Deliver me from spiritual arrogance and anchor me in childlike humility.'
    },
    quiz: []
  },
  {
    id: 'mad-2',
    number: 1533,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - २',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੨',
      en: 'Mad Ko Ang - 2',
    },
    text: {
      hi: 'अभिमानी कुंजर भये, निज सिर लीन्हा भार।\nजम द्वारे जम कूटहीं, लोहा घड़े लुहार।।',
      pb: 'ਅਭਿਮਾਨੀ ਕੁੰਜਰ ਭਏ, ਨਿਜ ਸਿਰ ਲੀਨ੍ਹਾ ਭਾਰ।\nਜਮ ਦੁਆਰੇ ਜਮ ਕੂਟਹੀ, ਲੋਹਾ ਘੜੇ ਲੁਹਾਰ।।',
      en: 'Abhimaanee kunjar bhaye, nij sir leenha bhaar. Jam dwaare jam kootaheen, loha ghade luhaar..',
    },
    transliteration: 'Abhimaanee kunjar bhaye, nij sir leenha bhaar. Jam dwaare jam kootaheen, loha ghade luhaar.',
    bhavarth: {
      hi: 'अभिमानी लोग हाथी के समान मदमस्त बन गए और उन्होंने अहंता-ममता रूपी माया का भार अपने सिर पर उठा लिया। मृत्यु के द्वार पर वे यम रूपी वासना-विपत्ति से ऐसे कूटे (मारे) जाएंगे, जैसे लोहार लोहे को कूट-कूटकर गढ़ता है, अर्थात विभिन्न योनियों में वे अनेक कष्ट भोगेंगे।',
      pb: 'ਹੰਕਾਰੀ ਮਨੁੱਖ ਹਾਥੀ ਵਾਂਗ ਮਦਮਸਤ ਹੋ ਕੇ ਅਹੰਕਾਰ ਦਾ ਭਾਰ ਆਪਣੇ ਸਿਰ \'ਤੇ ਚੁੱਕ ਲੈਂਦੇ ਹਨ। ਯਮ ਦੇ ਦੁਆਰ \'ਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਇੰਝ ਕੁੱਟਿਆ ਜਾਂਦਾ ਹੈ ਜਿਵੇਂ ਲੁਹਾਰ ਲੋਹੇ ਨੂੰ ਕੁੱਟ-ਕੁੱਟ ਕੇ ਗੜ੍ਹਦਾ ਹੈ।',
      en: 'Arrogant souls become intoxicated like elephants, bearing the heavy burden of self-importance upon their heads. At the gates of death, they are hammered by Yama just as a blacksmith continuously beats iron upon an anvil.'
    },
    wordMeanings: {
      hi: [
        { word: 'कुंजर (Kunjar)', meaning: 'हाथी / मदमस्त प्राणी' },
        { word: 'कूटहीं (Kootaheen)', meaning: 'पीटते हैं / कूटते हैं' },
        { word: 'लुहार (Luhaar)', meaning: 'लोहे का काम करने वाला' }
      ],
      pb: [
        { word: 'ਕੁੰਜਰ (Kunjar)', meaning: 'ਹਾਥੀ' },
        { word: 'ਕੂਟਹੀ (Kootaheen)', meaning: 'ਕੁੱਟਦੇ ਹਨ' }
      ],
      en: [
        { word: 'Kunjar', meaning: 'Elephant' },
        { word: 'Kootaheen', meaning: 'Beaten / Hammered' },
        { word: 'Luhaar', meaning: 'Blacksmith' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी अहंकार का भारी बोझ सिर पर लादे यम-ताड़ना की ओर तो नहीं बढ़ रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਅਹੰਕਾਰ ਦਾ ਭਾਰ ਚੁੱਕ ਕੇ ਆਪਣੇ ਲਈ ਦੁੱਖ ਪੈਦਾ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I carrying the heavy anvil of pride on my head, paving the way for karmic retribution?'
    },
    practicalApplication: {
      hi: 'अहंकार के बोझ को सतगुरु के चरणों में अर्पित कर जीवन में सरलता और नम्रता लाएं।',
      pb: 'ਅਹੰਕਾਰ ਦਾ ਭਾਰ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਿਤ ਕਰ ਦਿਓ।',
      en: 'Lay down the burden of pride at the Satguru\'s feet and embrace simplicity.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरे अहंकार रूपी भार को हर कर मुझे हल्का व निष्काम बना दें।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੇਰੇ ਹੰਕਾਰ ਨੂੰ ਨਸ਼ਟ ਕਰੋ।',
      en: 'O Lord! Unburden my soul from pride and make me light and selfless.'
    },
    quiz: []
  },
  {
    id: 'mad-3',
    number: 1534,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - ३',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੩',
      en: 'Mad Ko Ang - 3',
    },
    text: {
      hi: 'अहं अगनि हिरदै जरै, गुरु सों चाहै मान।\nतिनका जम न्यौता दिया, हो हमरे मिहमान।।',
      pb: 'ਅਹੰ ਅਗਨਿ ਹਿਰਦੈ ਜਰੈ, ਗੁਰੂ ਸੋਂ ਚਾਹੈ ਮਾਨ।\nਤਿਨਕਾ ਜਮ ਨ੍ਯੌਤਾ ਦੀਆ, ਹੋ ਹਮਰੇ ਮਿਹਮਾਨ।।',
      en: 'Ahan agani hirdai jarai, guru son chaahai maan. Tinka jam nyauta deeya, ho hamre mihmaan..',
    },
    transliteration: 'Ahan agani hirdai jarai, guru son chaahai maan. Tinka jam nyauta deeya, ho hamre mihmaan.',
    bhavarth: {
      hi: 'अहंकार की आग हृदय में जल रही हो तो अहंकारी व्यक्ति गुरु से भी सम्मान चाहता है। ऐसे अभिमानी जनों को मृत्यु रूपी दुःख-संकटों एवं कुवासनाओं ने खुला निमंत्रण दे रखा है कि आओ तुम हमारे मेहमान बनो। अर्थात वे विपत्तियों में ही घिरे रहेंगे।',
      pb: 'ਜਿਸ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਅਹੰਕਾਰ ਦੀ ਅੱਗ ਬਲ ਰਹੀ ਹੋਵੇ, ਉਹ ਗੁਰੂ ਤੋਂ ਵੀ ਮਾਣ-ਸਤਿਕਾਰ ਚਾਹੁੰਦਾ ਹੈ। ਅਜਿਹੇ ਹੰਕਾਰੀ ਮਨੁੱਖਾਂ ਨੂੰ ਯਮਰਾਜ ਨੇ ਸੱਦਾ ਦਿੱਤਾ ਹੈ ਕਿ ਆਓ ਸਾਡੇ ਮਹਿਮਾਨ ਬਣੋ।',
      en: 'When the fire of pride burns within the heart, the vain seeker demands respect even from his Master. Yama (Death) extends an open invitation to such foolishly arrogant souls: Come, be my guest!'
    },
    wordMeanings: {
      hi: [
        { word: 'हिरदै (Hirdai)', meaning: 'हृदय में / अंतःकरण में' },
        { word: 'न्यौता (Nyauta)', meaning: 'निमंत्रण / बुलावा' },
        { word: 'मिहमान (Mihmaan)', meaning: 'अतिथि / मेहमान' }
      ],
      pb: [
        { word: 'ਹਿਰਦੈ (Hirdai)', meaning: 'ਦਿਲ ਵਿੱਚ' },
        { word: 'ਨ੍ਯੌਤਾ (Nyauta)', meaning: 'ਸੱਦਾ / ਨਿਮੰਤਰਨ' }
      ],
      en: [
        { word: 'Hirdai', meaning: 'In the heart' },
        { word: 'Nyauta', meaning: 'Invitation' },
        { word: 'Mihmaan', meaning: 'Guest' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं गुरु-दरबार या सत्संग में भी मान-प्रतिष्ठा की लालसा रखता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸਤਿਸੰਗ ਵਿੱਚ ਵੀ ਮਾਣ-ਸਤਿਕਾਰ ਦੀ ਇੱਛਾ ਰੱਖਦਾ ਹਾਂ?',
      en: 'Do I harbour expectations of honor and recognition even in the presence of the Satguru or holy congregation?'
    },
    practicalApplication: {
      hi: 'गुरु-दरबार में केवल दास-भाव और सेवा की भावना लेकर ही जाएं।',
      pb: 'ਗੁਰੂ ਦਰਬਾਰ ਵਿੱਚ ਸੇਵਕ ਬਣ ਕੇ ਜਾਓ।',
      en: 'Approach the Guru\'s presence purely as a humble servant seeking no ego-fulfillment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मान-बड़ाई की चाह से मुक्त कर दासानुदास की निर्मल भावना दें।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਦਾਸਾਂ ਦਾ ਦਾਸ ਬਣਾਓ।',
      en: 'O Satguru! Free me from cravings for honor and make me a humble servant of Your servants.'
    },
    quiz: []
  },
  {
    id: 'mad-4',
    number: 1535,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - ४',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੪',
      en: 'Mad Ko Ang - 4',
    },
    text: {
      hi: 'मद अभिमान न कीजिये, कहैं कबीर समुझाय।\nजा सिर अहं जु संचरे, पड़े चौरासी जाय।।',
      pb: 'ਮਦ ਅਭਿਮਾਨ ਨ ਕੀਜੀਏ, ਕਹੈਂ ਕਬੀਰ ਸਮੁਝਾਇ।\nਜਾ ਸਿਰ ਅਹੰ ਜੁ ਸੰਚਰੈ, ਪੜੇ ਚੌਰਾਸੀ ਜਾਇ।।',
      en: 'Mad abhimaan na keejiye, kahain kabeer samujhay. Ja sir ahan ju sancharai, pade chauraasee jay..',
    },
    transliteration: 'Mad abhimaan na keejiye, kahain kabeer samujhay. Ja sir ahan ju sancharai, pade chauraasee jay.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि इस मद-अहंकार को अपने पास न ठहरने दो। इसका भली-भांति त्याग कर दो। जिसके सिर (मस्तिष्क) में इस अहंकार का प्रवेश हो जाता है, वह अपनी सुध-बुध खोकर इस संसार रुपी चौरासी के चक्कर में जा पड़ता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਹੰਕਾਰ ਨਾ ਕਰੋ। ਜਿਸ ਦੇ ਸਿਰ ਵਿੱਚ ਹੰਕਾਰ ਸਮਾ ਜਾਂਦਾ ਹੈ, ਉਹ ਆਪਣੀ ਸੋਝੀ ਗੁਆ ਕੇ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਦੇ ਗੇੜ ਵਿੱਚ ਪੈ ਜਾਂਦਾ ਹੈ।',
      en: 'Kabir counselingly teaches: Do not entertain pride or conceit. Whoever allows arrogance to possess his mind loses all self-awareness and falls into the endless wheel of 8.4 million reincarnations.'
    },
    wordMeanings: {
      hi: [
        { word: 'संचरे (Sancharai)', meaning: 'प्रवेश करना / व्याप्त होना' },
        { word: 'चौरासी (Chauraasee)', meaning: '८४ लाख योनियों का चक्र' }
      ],
      pb: [
        { word: 'ਸੰਚਰੈ (Sancharai)', meaning: 'ਪ੍ਰਵੇਸ਼ ਕਰਨਾ' },
        { word: 'ਚੌਰਾਸੀ (Chauraasee)', meaning: '੮੪ ਲੱਖ ਜੂਨਾਂ' }
      ],
      en: [
        { word: 'Sancharai', meaning: 'Enters / Takes possession' },
        { word: 'Chauraasee', meaning: 'Cycle of 8.4 million transmigrations' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अहंकार के क्षणिक प्रलोभन में आकर पुनः चौरासी के भयानक चक्र में तो नहीं उलझ रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਹੰਕਾਰ ਕਰ ਕੇ ਜੂਨਾਂ ਦੇ ਗੇੜ ਵਿੱਚ ਪੈਣ ਦਾ ਰਸਤਾ ਚੁਣ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I inviting the painful cycle of rebirth by harboring transient arrogance?'
    },
    practicalApplication: {
      hi: 'अहंकार का विचार आते ही तुरंत अपने स्वरूप का स्मरण कर नम्रता धारण करें।',
      pb: 'ਹੰਕਾਰ ਨੂੰ ਛੱਡ ਕੇ ਨਿਮਰਤਾ ਅਪਣਾਓ।',
      en: 'The moment pride strikes, remember your true mortal nature and adopt profound humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे चौरासी के चक्र से बचाकर अपने पावन सत्यनाम में अभय पद दें।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਜੂਨਾਂ ਦੇ ਚੱਕਰ ਤੋਂ ਬਚਾਓ।',
      en: 'O Satguru! Deliver me from the cycle of transmigration and anchor me in Your eternal Word.'
    },
    quiz: []
  },
  {
    id: 'mad-5',
    number: 1536,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - ५',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੫',
      en: 'Mad Ko Ang - 5',
    },
    text: {
      hi: 'कबीर गर्व न कीजिये, रंक न हंसिये कोय।\nअजहूं नाव समुद्र में, ना जानौं क्या होय।।',
      pb: 'ਕਬੀਰ ਗਰਵ ਨ ਕੀਜੀਏ, ਰੰਕ ਨ ਹੰਸੀਏ ਕੋਇ।\nਅਜਹੂੰ ਨਾਵ ਸਮੁਦ੍ਰ ਮੈਂ, ਨਾ ਜਾਨੌਂ ਕ੍ਯਾ ਹੋਇ।।',
      en: 'Kabeer garav na keejiye, rank na hanseeye koy. Ajhoon naav samudr mein, na jaanon kya hoy..',
    },
    transliteration: 'Kabeer garav na keejiye, rank na hanseeye koy. Ajhoon naav samudr mein, na jaanon kya hoy.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि अपने तन, धन, बल एवं जाति-कुल का किसी भी प्रकार से अंहकार न करो और जो लोग दुःखी-दीन, हीन-जन हैं, उनकी हंसी न उड़ाओ। अभी तो तुम्हारी जीवन-नौका संसार के समुद्र के बीच में पड़ी हुई है, न जाने कब क्या हो जाए। न जाने कब कौन-सा संकट या तूफान आ जाए। और यह पार लगे या न लगे।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਕਦੇ ਵੀ ਆਪਣੇ ਧਨ, ਬਲ ਜਾਂ ਕੁੱਲ ਦਾ ਹੰਕਾਰ ਨਾ ਕਰੋ ਅਤੇ ਨਾ ਹੀ ਕਿਸੇ ਗਰੀਬ ਦਾ ਮਜ਼ਾਕ ਉਡਾਓ। ਅਜੇ ਤੁਹਾਡੀ ਜੀਵਨ-ਬੇੜੀ ਸੰਸਾਰ ਦੇ ਸਮੁੰਦਰ ਵਿੱਚ ਹੈ, ਪਤਾ ਨਹੀਂ ਕਦੋਂ ਕੇਹੜਾ ਤੂਫ਼ਾਨ ਆ ਜਾਵੇ।',
      en: 'Kabir warns: Never boast of your wealth, body, status, or lineage, nor laugh at the poor and helpless. Your life-boat is still navigating the stormy sea of existence—who knows what unexpected storm may strike next?'
    },
    wordMeanings: {
      hi: [
        { word: 'रंक (Rank)', meaning: 'निर्धन / गरीब / दीन' },
        { word: 'अजहूं (Ajhoon)', meaning: 'अभी तक / आज भी' },
        { word: 'समुद्र (Samudr)', meaning: 'संसार रूपी सागर' }
      ],
      pb: [
        { word: 'ਰੰਕ (Rank)', meaning: 'ਗਰੀਬ / ਕੰਗਾਲ' },
        { word: 'ਅਜਹੂੰ (Ajhoon)', meaning: 'ਅਜੇ ਵੀ' }
      ],
      en: [
        { word: 'Rank', meaning: 'Poor / Destitute person' },
        { word: 'Ajhoon', meaning: 'Even now / As yet' },
        { word: 'Samudr', meaning: 'Ocean of worldly existence' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं किसी की निर्धनता या लाचारी पर हंसकर अपने ही विनाश का बीज तो नहीं बो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਕਿਸੇ ਗਰੀਬ ਦਾ ਮਜ਼ਾਕ ਉਡਾ ਕੇ ਪਾਪ ਕਮਾ ਰਿਹਾ ਹਾਂ?',
      en: 'Do I make light of others\' poverty or weakness, forgetting that my own life-boat is still amidst unpredictable ocean waves?'
    },
    practicalApplication: {
      hi: 'दीन-दुखियों के प्रति करुणा और दया का भाव रखें, किसी का अनादर न करें।',
      pb: 'ਗਰੀਬਾਂ ਤੇ ਲੋੜਵੰਦਾਂ ਲਈ ਦਇਆ ਰੱਖੋ।',
      en: 'Treat the poor and distressed with compassion, never ridiculing anyone.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरी जीवन-नौका को संसार-सागर के तूफानों से बचाकर किनारे लगाएं।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੇਰੀ ਜੀਵਨ-ਬੇੜੀ ਨੂੰ ਪਾਰ ਲਗਾਓ।',
      en: 'O Lord! Steer my life-boat safely across the turbulent ocean of worldliness.'
    },
    quiz: []
  },
  {
    id: 'mad-6',
    number: 1537,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - ६',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੬',
      en: 'Mad Ko Ang - 6',
    },
    text: {
      hi: 'जहां आपा तहां आपदा, जहां संसै तहां सोग।\nकहैं कबीर कैसे मिटै, चारौं दीरघ रोग।।',
      pb: 'ਜਹਾਂ ਆਪਾ ਤਹਾਂ ਆਪਦਾ, ਜਹਾਂ ਸੰਸੈ ਤਹਾਂ ਸੋਗ।\nਕਹੈਂ ਕਬੀਰ ਕੈਸੇ ਮਿਟੈ, ਚਾਰੋਂ ਦੀਰਘ ਰੋਗ।।',
      en: 'Jahaan aapa tahaan aapda, jahaan sansai tahaan sog. Kahain kabeer kaise mitai, chaaron deeragh rog..',
    },
    transliteration: 'Jahaan aapa tahaan aapda, jahaan sansai tahaan sog. Kahain kabeer kaise mitai, chaaron deeragh rog.',
    bhavarth: {
      hi: 'जहां पर \'मैं\' का अहंकार होता है, वहां नाना प्रकार की विपत्तियां आती है। और जहां संशय (अज्ञान) होता है वहां महान शोक उत्पन्न होते हैं। सतगुरु कबीर साहेब फरमाते हैं कि सोचो और विचार करो। ये चारों कष्टदायी रोग \'मैं\', विपत्ति, अज्ञान और शोक कैसे मिटेंगे? इनसे कैसे छुटकारा होगा।',
      pb: 'ਜਿੱਥੇ ਹੰਕਾਰ (ਮੈਂ) ਹੈ, ਉੱਥੇ ਮੁਸੀਬਤਾਂ ਹਨ; ਜਿੱਥੇ ਭਰਮ-ਸੰਦੇਹ ਹੈ, ਉੱਥੇ ਸੋਗ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਨ੍ਹਾਂ ਚਾਰਾਂ ਵੱਡੇ ਰੋਗਾਂ (ਹੰਕਾਰ, ਆਪਦਾ, ਸੰਦੇਹ ਤੇ ਸੋਗ) ਦਾ ਨਾਸ ਕੇਵਲ ਸਤਯਨਾਮ ਸਿਮਰਨ ਨਾਲ ਹੀ ਹੋ ਸਕਦਾ ਹੈ।',
      en: 'Where self-centered ego exists, adversity strikes; where doubt lingers, grief follows. Kabir poses the profound question: How can these four deep-rooted chronic diseases—Ego, Adversity, Doubt, and Sorrow—be cured except through Satguru\'s wisdom?'
    },
    wordMeanings: {
      hi: [
        { word: 'आपा (Aapa)', meaning: 'अहंकार / \'मैं\' भाव' },
        { word: 'आपदा (Aapda)', meaning: 'विपत्ति / संकट' },
        { word: 'दीरघ रोग (Deeragh rog)', meaning: 'दीर्घकालिक भयंकर बीमारी' }
      ],
      pb: [
        { word: 'ਆਪਾ (Aapa)', meaning: 'ਹੰਕਾਰ / \'ਮੈਂ\' ਭਾਵ' },
        { word: 'ਆਪਦਾ (Aapda)', meaning: 'ਮੁਸੀਬਤ' },
        { word: 'ਦੀਰਘ ਰੋਗ (Deeragh rog)', meaning: 'ਵੱਡੀ ਬੀਮਾਰੀ' }
      ],
      en: [
        { word: 'Aapa', meaning: 'Selfish ego / \'I\'-ness' },
        { word: 'Aapda', meaning: 'Adversity / Calamity' },
        { word: 'Deeragh rog', meaning: 'Chronic severe disease' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं \'मैं\'-भाव को मिटाकर आत्म-ज्ञान द्वारा दुःख और संशय के रोगों से मुक्त हो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ \'ਮੈਂ\'-ਭਾਵ ਨੂੰ ਮਿਟਾ ਕੇ ਸ਼ਾਂਤੀ ਪ੍ਰਾਪਤ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I dissolving the \'I\'-ego to cure the chronic diseases of adversity, doubt, and grief?'
    },
    practicalApplication: {
      hi: 'अहंकार और संशय का त्याग कर सतगुरु के नाम-सिमरन में औसध रूपी शरण लें।',
      pb: 'ਹੰਕਾਰ ਤੇ ਭਰਮ ਛੱਡ ਕੇ ਨਾਮ ਦਾ ਆਸਰਾ ਲਵੋ।',
      en: 'Surrender ego and doubt, taking the Holy Name as the supreme medicine for soul healing.'
    },
    samarpanPrayer: {
      hi: 'हे वैद्यनाथ सतगुरु! मेरे अहंकार, संशय व शोक रूपी दीर्घ रोगों का निवारण कर मुझे अमर पद दें।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹੰਕਾਰ ਤੇ ਭਰਮ ਦੇ ਰੋਗ ਦੂਰ ਕਰੋ।',
      en: 'O Divine Physician Satguru! Cure my chronic diseases of ego and doubt, and bless me with eternal peace.'
    },
    quiz: []
  },
  {
    id: 'mad-7',
    number: 1538,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मद को अंग - ७',
      pb: 'ਮਦ ਕੋ ਅੰਗ - ੭',
      en: 'Mad Ko Ang - 7',
    },
    text: {
      hi: 'आपा सबही जात है, किया कराया सोय।\nआपा तजि हरि को भजै, लाखन मध्ये होय।।',
      pb: 'ਆਪਾ ਸਬਹੀ ਜਾਤ ਹੈ, ਕੀਆ ਕਰਾਇਆ ਸੋਇ।\nਆਪਾ ਤਜਿ ਹਰਿ ਕੋ ਭਜੈ, ਲਾਖਨ ਮਧ੍ਯੇ ਹੋਇ।।',
      en: 'Aapa sabhee jaat hai, keeya karaya soy. Aapa taji hari ko bhajai, laakhan madhye hoy..',
    },
    transliteration: 'Aapa sabhee jaat hai, keeya karaya soy. Aapa taji hari ko bhajai, laakhan madhye hoy.',
    bhavarth: {
      hi: 'यह दुष्ट-अहंकार एक ऐसा व्यवधान है, जिसके आने से पुण्य-धर्म-कर्म, अर्थात सब कुछ चला जाता है, जो अभी तक किया-कराया होता है, वह सब समाप्त हो जाता है। अहंकार को त्यागकर, अविनाशी-अंतर्यामी परमात्मा का ध्यान-भजन करने वाला लाखों में कोई एक साधक-भक्त होता है।',
      pb: 'ਹੰਕਾਰ ਆਉਂਦੇ ਹੀ ਮਨੁੱਖ ਦੀ ਸਾਰੀ ਪੁੰਨ-ਕਮਾਈ ਨਸ਼ਟ ਹੋ ਜਾਂਦੀ ਹੈ। ਹੰਕਾਰ ਨੂੰ ਛੱਡ ਕੇ ਅਬਿਨਾਸ਼ੀ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰਨ ਵਾਲਾ ਲੱਖਾਂ ਵਿੱਚੋਂ ਕੋਈ ਇੱਕ ਵਿਰਲਾ ਹੀ ਹੁੰਦਾ ਹੈ।',
      en: 'Ego is such a destructive force that its arrival wipes away all accumulated spiritual merit and good deeds. One who surrenders the ego and worships the Supreme Immortal Lord is one in a million.'
    },
    wordMeanings: {
      hi: [
        { word: 'आपा (Aapa)', meaning: 'अहंकार / घमंड' },
        { word: 'तजि (Taji)', meaning: 'त्याग कर / छोड़कर' },
        { word: 'लाखन मध्ये (Laakhan madhye)', meaning: 'लाखों में एक / दुर्लभ' }
      ],
      pb: [
        { word: 'ਆਪਾ (Aapa)', meaning: 'ਹੰਕਾਰ' },
        { word: 'ਤਜਿ (Taji)', meaning: 'ਛੱਡ ਕੇ' },
        { word: 'ਲਾਖਨ ਮਧ੍ਯੇ (Laakhan madhye)', meaning: 'ਲੱਖਾਂ ਵਿੱਚੋਂ ਇੱਕ' }
      ],
      en: [
        { word: 'Aapa', meaning: 'Ego / Selfish pride' },
        { word: 'Taji', meaning: 'Renouncing / Relinquishing' },
        { word: 'Laakhan madhye', meaning: 'One in a million / Exceedingly rare' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं उन दुर्लभ विरले साधकों की श्रेणी में आने का यत्न कर रहा हूँ जो अहंकार का त्याग कर निरहंकारी भजन करते हैं?',
      pb: 'ਕੀ ਮੈਂ ਹੰਕਾਰ ਛੱਡ ਕੇ ਸੱਚਾ ਭਗਤ ਬਣਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I striving to be among those rare souls who renounce all ego to offer pure, humble devotion?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन कर्ताभाव का त्याग कर हर सफलता का श्रेय परमेश्वर और गुरुदेव को ही दें।',
      pb: 'ਹਰ ਕੰਮ ਦਾ ਸਿਹਰਾ ਪਰਮਾਤਮਾ ਤੇ ਗੁਰੂ ਨੂੰ ਦਿਓ।',
      en: 'Relinquish the doership illusion and attribute all achievements to the grace of Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे अंतर्यामी साहेब! मेरे अहंकार को मिटाकर मुझे लाखों में एक सच्चा निरहंकारी अनन्य भक्त बनाएं। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਕੇ ਮੈਨੂੰ ਸੱਚਾ ਭਗਤ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Lord! Dissolve my ego and make me one of Your rare, genuinely humble devotees.'
    },
    quiz: []
  }
];
