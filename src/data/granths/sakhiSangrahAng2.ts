import { GranthVerse } from './granthTypes';
import { devanagariToGurmukhi } from '../../services/transliteration';

export const SAKHI_SANGRAH_ANG_2_VERSES: GranthVerse[] = [
  {
    id: 'ang-2-v1',
    type: 'sakhi',
    lines: {
      hi: [
        'सचुपाया सुख ऊपजा, दिल दरिया भरपुर।',
        'सकल पाप सहजे गया, सतगुरु मिले हजूर।।'
      ],
      pb: [
        devanagariToGurmukhi('सचुपाया सुख ऊपजा, दिल दरिया भरपुर।'),
        devanagariToGurmukhi('सकल पाप सहजे गया, सतगुरु मिले हजूर।।')
      ],
      en: [
        'SachuPaya Sukh Oopaja, Dil Dariya Bharpur.',
        'Sakal Paap Sahaje Gaya, Satguru Mile Hajoor.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सचुपाया', meaning: 'सत्य की प्राप्ति, आत्मबोध' },
        { word: 'दिल दरिया', meaning: 'हृदय रूपी सागर' },
        { word: 'सहजे', meaning: 'स्वाभाविक रूप से, बिना किसी प्रयास के' },
        { word: 'हजूर', meaning: 'प्रत्यक्ष रूप से सामने, पूर्ण रूपेण' }
      ],
      pb: [
        { word: 'सचुपाया', meaning: 'ਸੱਚ ਦੀ ਪ੍ਰਾਪਤੀ' },
        { word: 'दिल दरिया', meaning: 'ਹਿਦਾਇਤ ਸਾਗਰ' },
        { word: 'सहजे', meaning: 'ਸਹਿਜ ਸੁਭਾਅ' },
        { word: 'हजूर', meaning: 'ਹਜ਼ੂਰ, ਪ੍ਰਤੱਖ' }
      ],
      en: [
        { word: 'SachuPaya', meaning: 'Attainment of Truth' },
        { word: 'Dil Dariya', meaning: 'Ocean of Heart' },
        { word: 'Sahaje', meaning: 'Effortlessly / Naturally' },
        { word: 'Hajoor', meaning: 'In divine presence' }
      ]
    },
    bhavarth: {
      hi: 'जब सद्गुरु हुजूर साहेब पूर्ण रूप से मिले और उनका ज्ञान ग्रहण किया, तो सत्य का साक्षात्कार हुआ। फलस्वरूप अनन्त सुख-सागर से हृदय परिपूर्ण हो गया जो ढेर सारे दुष्कर्मों का पाप था, वह सहज ही नष्ट हो गया, अर्थात ज्ञान होने से सत्य कर्म होने लगे।',
      pb: devanagariToGurmukhi('जब सद्गुरु हुजूर साहेब पूर्ण रूप से मिले और उनका ज्ञान ग्रहण किया, तो सत्य का साक्षात्कार हुआ। फलस्वरूप अनन्त सुख-सागर से हृदय परिपूर्ण हो गया जो ढेर सारे दुष्कर्मों का पाप था, वह सहज ही नष्ट हो गया, अर्थात ज्ञान होने से सत्य कर्म होने लगे।'),
      en: 'When the true Satguru met in complete grace and His wisdom was absorbed, truth was realized, filling the heart with infinite peace and dissolving all past negative karma effortlessly.'
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में पूर्ण सतगुरु के ज्ञान से अज्ञान का अंधकार मिटकर परम सुख उत्पन्न हुआ है?',
      pb: devanagariToGurmukhi('क्या मेरे जीवन में पूर्ण सतगुरु के ज्ञान से अज्ञान का अंधकार मिटकर परम सुख उत्पन्न हुआ है?'),
      en: 'Has the wisdom of the true Satguru dispelled the darkness of ignorance and awakened infinite peace in my heart?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के वचनों का प्रतिदिन मनन करें और अपने जीवन को निष्पाप एवं सेवामय बनाएं।',
      pb: devanagariToGurmukhi('सद्गुरु के वचनों का प्रतिदिन मनन करें और अपने जीवन को निष्पाप एवं सेवामय बनाएं।'),
      en: 'Contemplate the teachings of the Satguru daily and live a life of purity and dedicated service.'
    },
    samarpanPrayer: {
      hi: 'हे सद्गुरु! आपकी शरण पाकर मेरे सारे संताप और पाप विनष्ट हो गए हैं। मेरा जीवन आपके चरणों में समर्पित है।',
      pb: devanagariToGurmukhi('हे सद्गुरु! आपकी शरण पाकर मेरे सारे संताप और पाप विनष्ट हो गए हैं। मेरा जीवन आपके चरणों में समर्पित है।'),
      en: 'O Satguru! Having found Your shelter, all my sorrows and sins have vanished. My life is dedicated to Your lotus feet.'
    },
    spiritualEssence: {
      hi: 'सद्गुरु की संगति और ज्ञान से ही हृदय में अनन्त आनंद और पवित्रता प्रकट होती है।',
      pb: devanagariToGurmukhi('सद्गुरु की संगति और ज्ञान से ही हृदय में अनन्त आनंद और पवित्रता प्रकट होती है।'),
      en: 'True bliss and inner purity awaken only through the grace and association of the Satguru.'
    }
  },
  {
    id: 'ang-2-v2',
    type: 'sakhi',
    lines: {
      hi: [
        'चारि खानि में भरमता, कबहु न लगता पार।',
        'सो फेरा सब मिटि गया, सतगुरु के उपकार।।'
      ],
      pb: [
        devanagariToGurmukhi('चारि खानि में भरमता, कबहु न लगता पार।'),
        devanagariToGurmukhi('सो फेरा सब मिटि गया, सतगुरु के उपकार।।')
      ],
      en: [
        'Chari Khani Mein Bharamata, Kabahu Na Lagata Paar.',
        'So Phera Sab Miti Gaya, Satguru Ke Upakar.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'चारि खानि', meaning: 'चार खानें (अंडज, स्वेदज, उद्भिज्ज, जरायुज)' },
        { word: 'भरमता', meaning: 'भटकता हुआ' },
        { word: 'फेरा', meaning: 'जन्म-मरण का चक्कर' },
        { word: 'उपकार', meaning: 'दया, कृपा' }
      ],
      pb: [
        { word: 'चारि खानि', meaning: 'ਚਾਰ ਖਾਣੀਆਂ (ਜਨਮ ਸਰੋਤ)' },
        { word: 'भरमता', meaning: 'ਭਟਕਦਾ ਹੋਇਆ' },
        { word: 'फेरा', meaning: 'ਜਨਮ ਮਰਨ ਦਾ ਚੱਕਰ' },
        { word: 'उपकार', meaning: 'ਕ੍ਰਿਪਾ, ਅਹਿਸਾਨ' }
      ],
      en: [
        { word: 'Chari Khani', meaning: 'Four sources of creation' },
        { word: 'Bharamata', meaning: 'Wandering' },
        { word: 'Phera', meaning: 'Cycle of birth and death' },
        { word: 'Upakar', meaning: 'Divine grace / Blessing' }
      ]
    },
    bhavarth: {
      hi: 'चार खानियों में भटकता हुआ यह जीव कभी भी पार नहीं लग सकता। रहट की तरह चक्कर लगाता हुआ यूं ही घूमता रहता है। सद्गुरु के मिलने पर उनके दया-उपकार और ज्ञान द्वारा भ्रम-जंजाल से मुक्त हो सकता है।',
      pb: devanagariToGurmukhi('चार खानियों में भटकता हुआ यह जीव कभी भी पार नहीं लग सकता। रहट की तरह चक्कर लगाता हुआ यूं ही घूमता रहता है। सद्गुरु के मिलने पर उनके दया-उपकार और ज्ञान द्वारा भ्रम-जंजाल से मुक्त हो सकता है।'),
      en: 'Wandering endlessly through the four forms of creation, the soul can never cross the ocean of samsara on its own. It is only by the supreme grace and wisdom of the Satguru that the endless cycle of birth and death is broken.'
    },
    contemplation: {
      hi: 'क्या मैं चौरासी लाख योनियों और आवागमन के फेरे से मुक्ति पाने के लिए सतगुरु के चरणों में लीन हूँ?',
      pb: devanagariToGurmukhi('क्या मैं चौरासी लाख योनियों और आवागमन के फेरे से मुक्ति पाने के लिए सतगुरु के चरणों में लीन हूँ?'),
      en: 'Am I anchored in the Satguru to transcend the endless cycle of worldly wanderings?'
    },
    practicalApplication: {
      hi: 'सांसारिक मोह-माया के चक्करों से बचकर अपना ध्यान सतगुरु के चरणों और नाम-सिमरन में लगाएं।',
      pb: devanagariToGurmukhi('सांसारिक मोह-माया के चक्करों से बचकर अपना ध्यान सतगुरु के चरणों और नाम-सिमरन में लगाएं।'),
      en: 'Withdraw from worldly illusions and focus your mind on the Satguru and divine remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! आपकी कृपा से ही मेरे जन्म-मरण के बंधन और चौरासी के फेरे कटे हैं। कोटि-कोटि प्रणाम।',
      pb: devanagariToGurmukhi('हे सतगुरुदेव! आपकी कृपा से ही मेरे जन्म-मरण के बंधन और चौरासी के फेरे कटे हैं। कोटि-कोटि प्रणाम।'),
      en: 'O Satguru! By Your grace alone have my bonds of birth and death been severed. Salutations to You.'
    },
    spiritualEssence: {
      hi: 'सद्गुरु का उपकार ही जीव को भवसागर और आवागमन के चक्र से मुक्त कराता है।',
      pb: devanagariToGurmukhi('सद्गुरु का उपकार ही जीव को भवसागर और आवागमन के चक्र से मुक्त कराता है।'),
      en: 'The grace of the Satguru alone liberates the soul from the wheel of transmigration.'
    }
  },
  {
    id: 'ang-2-v3',
    type: 'sakhi',
    lines: {
      hi: [
        'जग में युक्ति अनूप है, साधु संग गुरु ज्ञान।',
        'तामे निपट अनूप है, सतगुरु लागा कान।।'
      ],
      pb: [
        devanagariToGurmukhi('जग में युक्ति अनूप है, साधु संग गुरु ज्ञान।'),
        devanagariToGurmukhi('तामे निपट अनूप है, सतगुरु लागा कान।।')
      ],
      en: [
        'Jag Mein Yukti Anoop Hai, Sadhu Sang Guru Gyan.',
        'Tame Nipat Anoop Hai, Satguru Laga Kaan.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'युक्ति अनूप', meaning: 'अद्भुत उपाय' },
        { word: 'साधु संग', meaning: 'संतों की संगति' },
        { word: 'निपट', meaning: 'अत्यंत श्रेष्ठ' },
        { word: 'लागा कान', meaning: 'ध्यानपूर्वक सुनना, आज्ञा मानना' }
      ],
      pb: [
        { word: 'युक्ति अनूप', meaning: 'ਅਨੂਪਮ ਉਪਾਇ' },
        { word: 'साधु संग', meaning: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ' },
        { word: 'निपट', meaning: 'ਅਤਿਅੰਤ ਉੱਤਮ' },
        { word: 'लागा कान', meaning: 'ਧਿਆਨ ਨਾਲ ਸੁਣਨਾ' }
      ],
      en: [
        { word: 'Yukti Anoop', meaning: 'Peerless method' },
        { word: 'Sadhu Sang', meaning: 'Company of saints' },
        { word: 'Nipat', meaning: 'Extremely / Most' },
        { word: 'Laga Kaan', meaning: 'Attentive listening' }
      ]
    },
    bhavarth: {
      hi: 'क्लेशों से मुक्त होने के लिए इस संसार में सबसे अनूठी युक्ति है, संत-महात्माओं की संगति और गुरु का ज्ञान। परंतु उनमें भी सबसे सुंदर बात यह है कि सद्गुरु के वचनों पर कान दो, अर्थात उनके ज्ञान-प्रवचन का अनुकरण करो।',
      pb: devanagariToGurmukhi('क्लेशों से मुक्त होने के लिए इस संसार में सबसे अनूठी युक्ति है, संत-महात्माओं की संगति और गुरु का ज्ञान। परंतु उनमें भी सबसे सुंदर बात यह है कि सद्गुरु के वचनों पर कान दो, अर्थात उनके ज्ञान-प्रवचन का अनुकरण करो।'),
      en: 'The most peerless method in this world is the association of saints and the wisdom of the Guru. Above all, the greatest blessing is to listen attentively and follow the teachings of the Satguru.'
    },
    contemplation: {
      hi: 'क्या मैं संतों की संगति और सतगुरु के वचनों को अपने जीवन का आधार बनाता हूँ?',
      pb: devanagariToGurmukhi('क्या मैं संतों की संगति और सतगुरु के वचनों को अपने जीवन का आधार बनाता हूँ?'),
      en: 'Do I make the company of saints and the words of the Satguru the foundation of my life?'
    },
    practicalApplication: {
      hi: 'सत्संग में नियमित भाग लें और सतगुरु के वचनों को एकाग्र होकर सुनें व आचरण में उतारें।',
      pb: devanagariToGurmukhi('सत्संग में नियमित भाग लें और सतगुरु के वचनों को एकाग्र होकर सुनें व आचरण में उतारें।'),
      en: 'Attend satsang regularly, listen attentively to the Satguru’s words, and put them into practice.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मुझे सतगुरु की वाणी सुनने और उस पर पूर्ण श्रद्धा रखने की मति प्रदान करें।',
      pb: devanagariToGurmukhi('हे प्रभु! मुझे सतगुरु की वाणी सुनने और उस पर पूर्ण श्रद्धा रखने की मति प्रदान करें।'),
      en: 'O Lord! Grant me the wisdom to listen to the Satguru’s voice and hold unwavering faith in it.'
    },
    spiritualEssence: {
      hi: 'सतगुरु के वचनों में ही जीवन के सभी दुखों से मुक्ति पाने की अचूक कुंजी छिपी है।',
      pb: devanagariToGurmukhi('सतगुरु के वचनों में ही जीवन के सभी दुखों से मुक्ति पाने की अचूक कुंजी छिपी है।'),
      en: 'The infallible key to freedom from all sorrow lies within the words of the Satguru.'
    }
  },
  {
    id: 'ang-2-v4',
    type: 'sakhi',
    lines: {
      hi: [
        'बिन सद्गुरु बाचै नहीं, फिर बूड़ै भव मांहि।',
        'भौसागर की त्रास से, सतगुरु पकड़े बाहिं।।'
      ],
      pb: [
        devanagariToGurmukhi('बिन सद्गुरु बाचै नहीं, फिर बूड़ै भव मांहि।'),
        devanagariToGurmukhi('भौसागर की त्रास से, सतगुरु पकड़े बाहिं।।')
      ],
      en: [
        'Bin Satguru Baachai Nahi, Phir Buudai Bhav Maahi.',
        'Bhavsagar Ki Traas Se, Satguru Pakade Baahin.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'बाचै', meaning: 'बच पाता है' },
        { word: 'बूड़ै', meaning: 'डूबता है' },
        { word: 'भौसागर', meaning: 'संसार रूपी समुद्र' },
        { word: 'त्रास', meaning: 'भय, संकट' },
        { word: 'बाहिं', meaning: 'बाँह, हाथ' }
      ],
      pb: [
        { word: 'बाचै', meaning: 'ਬਚਦਾ ਹੈ' },
        { word: 'बूड़ै', meaning: 'ਡੁੱਬਦਾ ਹੈ' },
        { word: 'भौसागर', meaning: 'ਸੰਸਾਰ ਸਾਗਰ' },
        { word: 'त्रास', meaning: 'ਭੈਅ, ਡਰ' },
        { word: 'बाहिं', meaning: 'ਬਾਂਹ' }
      ],
      en: [
        { word: 'Baachai', meaning: 'Saved / Escapes' },
        { word: 'Buudai', meaning: 'Sinks' },
        { word: 'Bhavsagar', meaning: 'Ocean of worldly existence' },
        { word: 'Traas', meaning: 'Fear / Terror' },
        { word: 'Baahin', meaning: 'Arm / Hand' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु की सहायता के बिना जीव बच नहीं सकता, फिर इस संसार-सागर में डूब जाएगा। इस भव-सागर की विकराल-भयावह स्थिति (जन्म-मरण के दुःख-संताप आदि) से केवल दयालु सद्गुरु ही बांह पकड़कर बचा सकते हैं।',
      pb: devanagariToGurmukhi('सद्गुरु की सहायता के बिना जीव बच नहीं सकता, फिर इस संसार-सागर में डूब जाएगा। इस भव-सागर की विकराल-भयावह स्थिति (जन्म-मरण के दुःख-संताप आदि) से केवल दयालु सद्गुरु ही बांह पकड़कर बचा सकते हैं।'),
      en: 'Without the Satguru, the soul cannot be saved and will drown in the ocean of worldly illusions. From the terrifying storms of this phenomenal ocean, only the compassionate Satguru rescues us by holding our hand.'
    },
    contemplation: {
      hi: 'क्या मैं अपने जीवन की नैया को पार लगाने के लिए सतगुरु का दामन मजबूती से थामे हूँ?',
      pb: devanagariToGurmukhi('क्या मैं अपने जीवन की नैया को पार लगाने के लिए सतगुरु का दामन मजबूती से थामे हूँ?'),
      en: 'Am I firmly holding onto the Satguru to navigate the boat of my life safely across?'
    },
    practicalApplication: {
      hi: 'संकट या मोह के क्षणों में सतगुरु का स्मरण करें और उनकी शरण में पूर्ण समर्पण रखें।',
      pb: devanagariToGurmukhi('संकट या मोह के क्षणों में सतगुरु का स्मरण करें और उनकी शरण में पूर्ण समर्पण रखें।'),
      en: 'In times of trial or illusion, remember the Satguru and place your complete surrender at His feet.'
    },
    samarpanPrayer: {
      hi: 'हे दयालु सतगुरु! इस भव-सागर के भंवर से केवल आप ही मेरी बाँह पकड़कर बाहर निकाल सकते हैं। रक्षा कीजिए।',
      pb: devanagariToGurmukhi('हे दयालु सतगुरु! इस भव-सागर के भंवर से केवल आप ही मेरी बाँह पकड़कर बाहर निकाल सकते हैं। रक्षा कीजिए।'),
      en: 'O Compassionate Satguru! You alone can pull me out of the whirlpool of this world by holding my hand. Protect me.'
    },
    spiritualEssence: {
      hi: 'सतगुरु ही भवसागर से पार लगाने वाले एकमात्र सच्चे कर्णधार हैं।',
      pb: devanagariToGurmukhi('सतगुरु ही भवसागर से पार लगाने वाले एकमात्र सच्चे कर्णधार हैं।'),
      en: 'The Satguru is the sole true helmsman who carries us safely across the ocean of existence.'
    }
  },
  {
    id: 'ang-2-v5',
    type: 'sakhi',
    lines: {
      hi: [
        'चित चोखा मन निरमला, बुधि उत्तम मति धीर।',
        'सो धोखा नहिं बिरहहीं, सतगुरु मिले कबीर।।'
      ],
      pb: [
        devanagariToGurmukhi('चित चोखा मन निरमला, बुधि उत्तम मति धीर।'),
        devanagariToGurmukhi('सो धोखा नहिं बिरहहीं, सतगुरु मिले कबीर।।')
      ],
      en: [
        'Chit Chokha Man Nirmala, Budhi Uttam Mati Dheer.',
        'So Dhokha Nahi Birahahi, Satguru Mile Kabir.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'चित चोखा', meaning: 'शुद्ध और पवित्र चित्त' },
        { word: 'मन निरमला', meaning: 'मल-रहित निर्मल मन' },
        { word: 'मति धीर', meaning: 'धैर्यवान बुद्धि' },
        { word: 'बिरहहीं', meaning: 'कभी भी' }
      ],
      pb: [
        { word: 'चित चोखा', meaning: 'ਸੁੱਚਾ ਚਿੱਤ' },
        { word: 'मन निरमला', meaning: 'ਨਿਰਮਲ ਮਨ' },
        { word: 'मति धीर', meaning: 'ਧੀਰਜਵਾਨ ਮੱਤ' },
        { word: 'बिरहहीं', meaning: 'ਕਦੇ ਵੀ ਨਹੀਂ' }
      ],
      en: [
        { word: 'Chit Chokha', meaning: 'Pure consciousness' },
        { word: 'Man Nirmala', meaning: 'Spotless mind' },
        { word: 'Mati Dheer', meaning: 'Steadfast intellect' },
        { word: 'Birahahi', meaning: 'Never / At all' }
      ]
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जिन जिज्ञासु भक्तों को पूर्ण सद्गुरु मिल जाते हैं, उनका चित्त सुंदर, मन निर्मल हो जाता है और वे उत्तम बुद्धि वाले, धैर्यवान तथा साहसी बन जाते हैं। फिर वे कभी भी किसी कपट-प्रपंच में पड़कर धोखा नहीं खा सकते, वे सही निश्चय वाले बन जाते हैं। सद्गुरु की कृपा से ही इस भव सागर से पार उतरने का मार्ग मिल सकता है।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि जिन जिज्ञासु भक्तों को पूर्ण सद्गुरु मिल जाते हैं, उनका चित्त सुंदर, मन निर्मल हो जाता है और वे उत्तम बुद्धि वाले, धैर्यवान तथा साहसी बन जाते हैं। फिर वे कभी भी किसी कपट-प्रपंच में पड़कर धोखा नहीं खा सकते, वे सही निश्चय वाले बन जाते हैं। सद्गुरु की कृपा से ही इस भव सागर से पार उतरने का मार्ग मिल सकता है।'),
      en: 'Kabir Ji says: Those seekers who find a true Satguru attain pure consciousness, a spotless mind, noble intellect, and steadfast patience. They are never deceived by worldly illusions again.'
    },
    contemplation: {
      hi: 'क्या मेरे मन और चित्त में सतगुरु के ज्ञान से पवित्रता और स्थिरता आई है?',
      pb: devanagariToGurmukhi('क्या मेरे मन और चित्त में सतगुरु के ज्ञान से पवित्रता और स्थिरता आई है?'),
      en: 'Has purity and steadfastness entered my mind and heart through the wisdom of the Satguru?'
    },
    practicalApplication: {
      hi: 'अपने मन के विकारों को दूर कर धैर्य और विवेक को अपने जीवन का आभूषण बनाएं।',
      pb: devanagariToGurmukhi('अपने मन के विकारों को दूर कर धैर्य और विवेक को अपने जीवन का आभूषण बनाएं।'),
      en: 'Purify your mind of impurities and make patience and spiritual discrimination your ornaments.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन के सभी मैल और भ्रम दूर करके मुझे निर्मल और स्थिर बुद्धि प्रदान करें।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरे मन के सभी मैल और भ्रम दूर करके मुझे निर्मल और स्थिर बुद्धि प्रदान करें।'),
      en: 'O Satguru! Wash away all mental impurities and illusions, granting me a pure and steadfast intellect.'
    },
    spiritualEssence: {
      hi: 'पूर्ण गुरु की प्राप्ति से मन निर्मल और बुद्धि दिव्य हो जाती है, जिससे सभी भ्रम समाप्त हो जाते हैं।',
      pb: devanagariToGurmukhi('पूर्ण गुरु की प्राप्ति से मन निर्मल और बुद्धि दिव्य हो जाती है, जिससे सभी भ्रम समाप्त हो जाते हैं।'),
      en: 'Meeting a true master purifies the mind and enlightens the intellect, dissolving all delusions.'
    }
  },
  {
    id: 'ang-2-v6',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु मेरा शूरमा, तकि तकि मारै तीर।',
        'लागे पन भागे नहीं, ऐसा दास कबीर।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु मेरा शूरमा, तकि तकि मारै तीर।'),
        devanagariToGurmukhi('लागे पन भागे नहीं, ऐसा दास कबीर।।')
      ],
      en: [
        'Satguru Mera Shurama, Taki Taki Maarai Teer.',
        'Laage Pan Bhaage Nahi, Aisa Das Kabir.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'शूरमा', meaning: 'वीर योद्धा' },
        { word: 'तकि तकि', meaning: 'लक्ष्य साधकर' },
        { word: 'तीर', meaning: 'ज्ञान के बाण (वचन)' },
        { word: 'लागे पन', meaning: 'चोट लगने पर भी' }
      ],
      pb: [
        { word: 'शूरमा', meaning: 'ਸੂਰਮਾ ਯੋਧਾ' },
        { word: 'तकि तकि', meaning: 'ਨਿਸ਼ਾਨਾ ਬੰਨ੍ਹ ਕੇ' },
        { word: 'तीर', meaning: 'ਗਿਆਨ ਦੇ ਤੀਰ' },
        { word: 'लागे पन', meaning: 'ਚੋਟ ਲੱਗਣ ’ਤੇ ਵੀ' }
      ],
      en: [
        { word: 'Shurama', meaning: 'Valiant warrior' },
        { word: 'Taki Taki', meaning: 'Aiming precisely' },
        { word: 'Teer', meaning: 'Arrows of wisdom' },
        { word: 'Laage Pan', meaning: 'Even when struck' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु सच्चे शूरवीर हैं, इसमें कोई संदेह नहीं। वे शिष्य की अज्ञानता पर ज्ञान-रूपी तीरों (शब्दों) को मारते हैं। कबीरजी कहते हैं कि शिष्य-सेवक को इन वारों (चोटों) को प्रेम से सहना चाहिए, भागना नहीं चाहिए।',
      pb: devanagariToGurmukhi('सद्गुरु सच्चे शूरवीर हैं, इसमें कोई संदेह नहीं। वे शिष्य की अज्ञानता पर ज्ञान-रूपी तीरों (शब्दों) को मारते हैं। कबीरजी कहते हैं कि शिष्य-सेवक को इन वारों (चोटों) को प्रेम से सहना चाहिए, भागना नहीं चाहिए।'),
      en: 'The Satguru is a true valiant warrior who precisely shoots arrows of wisdom at our ignorance. Kabir says that a true disciple lovingly endures these piercing truths without fleeing.'
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु के तीखे और सच्चे वचनों को अपनी अहंकार-मुक्ति के लिए प्रेम से स्वीकार करता हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सतगुरु के तीखे और सच्चे वचनों को अपनी अहंकार-मुक्ति के लिए प्रेम से स्वीकार करता हूँ?'),
      en: 'Do I lovingly accept the piercing and true words of the Satguru for the destruction of my ego?'
    },
    practicalApplication: {
      hi: 'सतगुरु या संतों द्वारा दी गई जीवन-सुधार की आलोचना या शिक्षा को बुरा न मानकर आदर से ग्रहण करें।',
      pb: devanagariToGurmukhi('सतगुरु या संतों द्वारा दी गई जीवन-सुधार की आलोचना या शिक्षा को बुरा न मानकर आदर से ग्रहण करें।'),
      en: 'Accept corrective advice from the master or saints without offense, treating it as healing grace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके ज्ञान के बाण मेरे अहंकार को भेदकर मुझे शुद्ध कर दें। मैं आपके चरणों में स्थिर रहूं।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपके ज्ञान के बाण मेरे अहंकार को भेदकर मुझे शुद्ध कर दें। मैं आपके चरणों में स्थिर रहूं।'),
      en: 'O Satguru! Let Your arrows of wisdom pierce my ego and purify me. May I remain steadfast at Your feet.'
    },
    spiritualEssence: {
      hi: 'सतगुरु के प्रहार अहंकार को मिटाने और आत्मा को जाग्रत करने वाले दिव्य तीर होते हैं।',
      pb: devanagariToGurmukhi('सतगुरु के प्रहार अहंकार को मिटाने और आत्मा को जाग्रत करने वाले दिव्य तीर होते हैं।'),
      en: 'The master’s piercing words are divine arrows that destroy ego and awaken the soul.'
    }
  },
  {
    id: 'ang-2-v7',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु महिमा अनंत है, अनंत किया उपकार।',
        'लोचन अनंत उघारिया, अनंत दिखावन हार।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु महिमा अनंत है, अनंत किया उपकार।'),
        devanagariToGurmukhi('लोचन अनंत उघारिया, अनंत दिखावन हार।।')
      ],
      en: [
        'Satguru Mahima Anant Hai, Anant Kiya Upakar.',
        'Lochan Anant Ughaariya, Anant Dikhavan Haar.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'अनंत', meaning: 'असीम, जिसकी कोई सीमा न हो' },
        { word: 'लोचन', meaning: 'नेत्र, ज्ञान चक्षु' },
        { word: 'उघारिया', meaning: 'खोल दिए' },
        { word: 'दिखावन हार', meaning: 'परमात्मा के दर्शन कराने वाले' }
      ],
      pb: [
        { word: 'अनंत', meaning: 'ਅਸੀਮ' },
        { word: 'लोचन', meaning: 'ਨੇਤਰ, ਗਿਆਨ ਚੱਖੂ' },
        { word: 'उघारिया', meaning: 'ਖੋਲ੍ਹ ਦਿੱਤੇ' },
        { word: 'दिखावन हार', meaning: 'ਪ੍ਰਮਾਤਮਾ ਦੇ ਦਰਸ਼ਨ ਕਰਾਉਣ ਵਾਲੇ' }
      ],
      en: [
        { word: 'Anant', meaning: 'Infinite / Boundless' },
        { word: 'Lochan', meaning: 'Eyes / Inner vision' },
        { word: 'Ughaariya', meaning: 'Opened' },
        { word: 'Dikhavan Haar', meaning: 'Revealer of the infinite divine' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु की महिमा का कोई पारावार नहीं है। वह तो अनंत और अगम है। सद्गुरु ने हमारे जिज्ञासु मन पर जो उपकार किया है, वह भी अनंत है, उसकी कोई सीमा नहीं है। उन्होंने आत्म-साक्षात्कार की हमें अनंत ज्ञान-दृष्टि प्रदान की है।',
      pb: devanagariToGurmukhi('सद्गुरु की महिमा का कोई पारावार नहीं है। वह तो अनंत और अगम है। सद्गुरु ने हमारे जिज्ञासु मन पर जो उपकार किया है, वह भी अनंत है, उसकी कोई सीमा नहीं है। उन्होंने आत्म-साक्षात्कार की हमें अनंत ज्ञान-दृष्टि प्रदान की है।'),
      en: 'The glory of the Satguru is boundless, and His blessings are infinite. He has opened our inner eyes of divine vision and revealed the infinite Lord to us.'
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु द्वारा प्रदान की गई अनंत ज्ञान-दृष्टि और उपकार के प्रति कृतज्ञ हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सतगुरु द्वारा प्रदान की गई अनंत ज्ञान-दृष्टि और उपकार के प्रति कृतज्ञ हूँ?'),
      en: 'Am I deeply grateful for the infinite spiritual vision and grace bestowed upon me by the Satguru?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन सतगुरु की असीम कृपा को याद करते हुए उनके प्रति कृतज्ञता और प्रेम भाव बनाए रखें।',
      pb: devanagariToGurmukhi('प्रतिदिन सतगुरु की असीम कृपा को याद करते हुए उनके प्रति कृतज्ञता और प्रेम भाव बनाए रखें।'),
      en: 'Remember the boundless grace of the Satguru daily, cultivating deep gratitude and love.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! आपके अनंत उपकारों का बदला मैं कभी नहीं चुका सकता। मेरा शत-शत नमन है।',
      pb: devanagariToGurmukhi('हे सतगुरुदेव! आपके अनंत उपकारों का बदला मैं कभी नहीं चुका सकता। मेरा शत-शत नमन है।'),
      en: 'O Satguru! I can never repay Your infinite blessings. Salutations to You again and again.'
    },
    spiritualEssence: {
      hi: 'सतगुरु की महिमा और उनके द्वारा दी गई आत्मिक दृष्टि असीम व अनंत है।',
      pb: devanagariToGurmukhi('सतगुरु की महिमा और उनके द्वारा दी गई आत्मिक दृष्टि असीम व अनंत है।'),
      en: 'The glory of the Satguru and the inner vision He gifts us are boundless and eternal.'
    }
  },
  {
    id: 'ang-2-v8',
    type: 'sakhi',
    lines: {
      hi: [
        'यह सतगुरु उपदेश है, जो माने परतीत।',
        'करम भरम सब त्यागि के, चलै सो भव जल जीत।।'
      ],
      pb: [
        devanagariToGurmukhi('यह सतगुरु उपदेश है, जो माने परतीत।'),
        devanagariToGurmukhi('करम भरम सब त्यागि के, चलै सो भव जल जीत।।')
      ],
      en: [
        'Yah Satguru Upadesh Hai, Jo Maane Pareet.',
        'Karam Bharam Sab Tyagi Ke, Chalai So Bhav Jal Jeet.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'परतीत', meaning: 'विश्वास, श्रद्धा' },
        { word: 'भरम', meaning: 'भ्रम, संशय' },
        { word: 'भव जल', meaning: 'संसार रूपी जल' },
        { word: 'जीत', meaning: 'विजय प्राप्त करना, तर जाना' }
      ],
      pb: [
        { word: 'परतीत', meaning: 'ਭਰੋਸਾ, ਸ਼ਰਧਾ' },
        { word: 'भरम', meaning: 'ਭਰਮ, ਸ਼ੰਕਾ' },
        { word: 'भव जल', meaning: 'ਸੰਸਾਰ ਸਾਗਰ' },
        { word: 'जीत', meaning: 'ਜਿੱਤ ਪ੍ਰਾਪਤ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Pareet', meaning: 'Faith / Trust' },
        { word: 'Bharam', meaning: 'Illusion / Doubt' },
        { word: 'Bhav Jal', meaning: 'Ocean of worldly existence' },
        { word: 'Jeet', meaning: 'Conquer / Cross over' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु के उपदेशानुसार चलने वाला जिज्ञासु शिष्य, सब कर्म-भ्रम को त्यागकर इस संसार-सागर से तर जाता है। यही सद्गुरु का सार उपदेश है, जो इस पर विश्वास करता है और उसे सच मानता है, वह निश्चय ही मोक्ष का अधिकारी है।',
      pb: devanagariToGurmukhi('सद्गुरु के उपदेशानुसार चलने वाला जिज्ञासु शिष्य, सब कर्म-भ्रम को त्यागकर इस संसार-सागर से तर जाता है। यही सद्गुरु का सार उपदेश है, जो इस पर विश्वास करता है और उसे सच मानता है, वह निश्चय ही मोक्ष का अधिकारी है।'),
      en: 'Those who have unwavering faith in the Satguru’s teachings abandon all ritualistic delusions and doubts, successfully conquering and crossing over the ocean of worldly existence.'
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु के उपदेशों पर अटूट विश्वास रखकर सभी पाखंडों और भ्रमों से मुक्त हो पाया हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सतगुरु के उपदेशों पर अटूट विश्वास रखकर सभी पाखंडों और भ्रमों से मुक्त हो पाया हूँ?'),
      en: 'Have I freed myself from all rituals and doubts by placing unwavering faith in the Satguru’s instructions?'
    },
    practicalApplication: {
      hi: 'संसार के दिखावटी कर्मकांडों और भ्रमों को छोड़कर शुद्ध गुरु-ज्ञान का पालन करें।',
      pb: devanagariToGurmukhi('संसार के दिखावटी कर्मकांडों और भ्रमों को छोड़कर शुद्ध गुरु-ज्ञान का पालन करें।'),
      en: 'Abandon superficial rituals and worldly illusions, following pure spiritual wisdom.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके उपदेश पर पूर्ण विश्वास करके मैं भवसागर से पार उतर जाऊँ, ऐसी कृपा करें।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपके उपदेश पर पूर्ण विश्वास करके मैं भवसागर से पार उतर जाऊँ, ऐसी कृपा करें।'),
      en: 'O Satguru! Grant me the grace to cross the ocean of existence through absolute faith in Your teachings.'
    },
    spiritualEssence: {
      hi: 'सतगुरु के उपदेश पर श्रद्धा रखने से सभी कर्म-भ्रम नष्ट हो जाते हैं और मुक्ति मिल जाती है।',
      pb: devanagariToGurmukhi('सतगुरु के उपदेश पर श्रद्धा रखने से सभी कर्म-भ्रम नष्ट हो जाते हैं और मुक्ति मिल जाती है।'),
      en: 'Faith in the Satguru’s instructions destroys all karmic illusions and brings ultimate liberation.'
    }
  },
  {
    id: 'ang-2-v9',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु शरण न आवहीं, फिरि फिरि होय अकाज।',
        'जीव खोय सब जायेंगे, काल तिहूं पुर राज।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु शरण न आवहीं, फिरि फिरि होय अकाज।'),
        devanagariToGurmukhi('जीव खोय सब जायेंगे, काल तिहूं पुर राज।।')
      ],
      en: [
        'Satguru Sharan Na Aavahi, Phiri Phiri Hoy Akaaj.',
        'Jeev Khoy Sab Jaayenge, Kaal Tihu Pur Raaj.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'अकाज', meaning: 'अकार्य, नुकसान, व्यर्थ होना' },
        { word: 'जीव खोय', meaning: 'मूल मनुष्य जन्म को व्यर्थ गँवा देना' },
        { word: 'तिहूं पुर', meaning: 'तीनों लोक (स्वर्ग, म्रत्यु, पाताल)' },
        { word: 'काल', meaning: 'मृत्यु, समय, महाकाल' }
      ],
      pb: [
        { word: 'अकाज', meaning: 'ਅਕਾਰਥ, ਨੁਕਸਾਨ' },
        { word: 'जीव खोय', meaning: 'ਮਨੁੱਖਾ ਜਨਮ ਗੁਆ ਦੇਣਾ' },
        { word: 'तिहूं पुर', meaning: 'ਤਿੰਨੇ ਲੋਕ' },
        { word: 'काल', meaning: 'ਮੌਤ, ਕਾਲ' }
      ],
      en: [
        { word: 'Akaaj', meaning: 'Ruination / Waste' },
        { word: 'Jeev Khoy', meaning: 'Losing human life in vain' },
        { word: 'Tihu Pur', meaning: 'Three worlds' },
        { word: 'Kaal', meaning: 'Death / Time' }
      ]
    },
    bhavarth: {
      hi: 'जो जन सद्गुरु की शरण में नहीं आते, उनकी बार-बार हानि होती है। बिगड़ी को बनाने वाले अर्थात जीवन के क्लेशों को मिटाने वाले तो सद्गुरु ही हैं। जो उनकी शरण में नहीं आते, वे यूं ही नष्ट हो जाते हैं, क्योंकि तीनों लोकों में काल (मृत्यु) का राज्य है।',
      pb: devanagariToGurmukhi('जो जन सद्गुरु की शरण में नहीं आते, उनकी बार-बार हानि होती है। बिगड़ी को बनाने वाले अर्थात जीवन के क्लेशों को मिटाने वाले तो सद्गुरु ही हैं। जो उनकी शरण में नहीं आते, वे यूं ही नष्ट हो जाते हैं, क्योंकि तीनों लोकों में काल (मृत्यु) का राज्य है।'),
      en: 'Those who do not take refuge in the Satguru suffer ruin again and again, wasting their precious life, because death and illusion reign supreme across all three worlds.'
    },
    contemplation: {
      hi: 'क्या मैं काल और माया के प्रभाव से बचने के लिए सतगुरु की शरण में पूरी तरह सुरक्षित हूँ?',
      pb: devanagariToGurmukhi('क्या मैं काल और माया के प्रभाव से बचने के लिए सतगुरु की शरण में पूरी तरह सुरक्षित हूँ?'),
      en: 'Am I safely anchored in the refuge of the Satguru to escape the clutches of time and illusion?'
    },
    practicalApplication: {
      hi: 'दुर्लभ मनुष्य जन्म को व्यर्थ न जाने दें और सतगुरु की शरण में रहकर अपना आध्यात्मिक कल्याण करें।',
      pb: devanagariToGurmukhi('दुर्लभ मनुष्य जन्म को व्यर्थ न जाने दें और सतगुरु की शरण में रहकर अपना आध्यात्मिक कल्याण करें।'),
      en: 'Do not waste this rare human birth; remain in the refuge of the Satguru to attain spiritual fulfillment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मैं काल के भय और संसार के बंधनों से छूटने के लिए आपकी पावन शरण में आया हूँ।',
      pb: devanagariToGurmukhi('हे सतगुरु! मैं काल के भय और संसार के बंधनों से छूटने के लिए आपकी पावन शरण में आया हूँ।'),
      en: 'O Satguru! I have taken refuge at Your sacred feet to transcend the fear of death and worldly bondage.'
    },
    spiritualEssence: {
      hi: 'सतगुरु की शरण के बिना तीनों लोकों में काल के चक्र से छुटकारा पाना असंभव है।',
      pb: devanagariToGurmukhi('सतगुरु की शरण के बिना तीनों लोकों में काल के चक्र से छुटकारा पाना असंभव है।'),
      en: 'Without the refuge of the Satguru, escaping the cycle of death across the three worlds is impossible.'
    }
  },
  {
    id: 'ang-2-v10',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु सम को है सगा, साधु सम को दात।',
        'हरि समान को है हितु, हरिजन सम को जात।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु सम को है सगा, साधु सम को दात।'),
        devanagariToGurmukhi('हरि समान को है हितु, हरिजन सम को जात।।')
      ],
      en: [
        'Satguru Sam Ko Hai Saga, Sadhu Sam Ko Daat.',
        'Hari Samaan Ko Hai Hitu, Harijan Sam Ko Jaat.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सगा', meaning: 'अपना संबंधी, हितैषी' },
        { word: 'दात', meaning: 'दाता, सब कुछ देने वाला' },
        { word: 'हितु', meaning: 'शुभचिंतक, प्रेमी' },
        { word: 'हरिजन', meaning: 'परमात्मा के प्यारे संत' }
      ],
      pb: [
        { word: 'सगा', meaning: 'ਸਕਾ ਸਬੰਧੀ' },
        { word: 'दात', meaning: 'ਦਾਤਾ' },
        { word: 'हितु', meaning: 'ਹਿਤੈਸ਼ੀ' },
        { word: 'हरिजन', meaning: 'ਪ੍ਰਭੂ ਦੇ ਪਿਆਰੇ' }
      ],
      en: [
        { word: 'Saga', meaning: 'True relative / Kin' },
        { word: 'Daat', meaning: 'Greatest giver / Benefactor' },
        { word: 'Hitu', meaning: 'Well-wisher / Lover' },
        { word: 'Harijan', meaning: 'Saint of God' }
      ]
    },
    bhavarth: {
      hi: 'इस संसार में सद्गुरु के समान अपना सगा-संबंधी भला कौन हो सकता है? अर्थात कोई नहीं। सभी नाते-रिश्ते स्वार्थ के हैं। साधु-संत के समान कोई दानी नहीं है। श्री हरि के समान जीव का कोई हितैषी भी नहीं है। हरि-जन (परमात्मा के भक्त) के समान भला कोई उत्तम जाति अथवा समाज कहां-कौन हो सकता है, अर्थात कहीं कोई नहीं।',
      pb: devanagariToGurmukhi('इस संसार में सद्गुरु के समान अपना सगा-संबंधी भला कौन हो सकता है? अर्थात कोई नहीं। सभी नाते-रिश्ते स्वार्थ के हैं। साधु-संत के समान कोई दानी नहीं है। श्री हरि के समान जीव का कोई हितैषी भी नहीं है। हरि-जन (परमात्मा के भक्त) के समान भला कोई उत्तम जाति अथवा समाज कहां-कौन हो सकता है, अर्थात कहीं कोई नहीं।'),
      en: 'Who in this world is a truer relative than the Satguru? Who is a greater giver than a saint? Who is a truer well-wisher than God, and what higher nobility is there than a true devotee of God?'
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक संबंधों से ऊपर उठकर सतगुरु और संतों के पावन प्रेम को सर्वोपरि मानता हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सांसारिक संबंधों से ऊपर उठकर सतगुरु और संतों के पावन प्रेम को सर्वोपरि मानता हूँ?'),
      en: 'Do I value the divine love of the Satguru and saints above all transient worldly relationships?'
    },
    practicalApplication: {
      hi: 'स्वार्थी संबंधों की अपेक्षा सतगुरु और संत-महात्माओं की संगति को अपने जीवन का सच्चा धन समझें।',
      pb: devanagariToGurmukhi('स्वार्थी संबंधों की अपेक्षा सतगुरु और संत-महात्माओं की संगति को अपने जीवन का सच्चा धन समझें।'),
      en: 'Value the company of the Satguru and saints far above selfish worldly connections as your true treasure.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आप ही मेरे माता-पिता, सखा और सब कुछ हैं। आपके अलावा मेरा कोई अन्य नहीं है।',
      pb: devanagariToGurmukhi('हे सतगुरु! आप ही मेरे माता-पिता, सखा और सब कुछ हैं। आपके अलावा मेरा कोई अन्य नहीं है।'),
      en: 'O Satguru! You are my true parent, friend, and everything. I have no other refuge beside You.'
    },
    spiritualEssence: {
      hi: 'सतगुरु और संत ही इस संसार में जीव के सबसे बड़े और सच्चे हितैषी हैं।',
      pb: devanagariToGurmukhi('सतगुरु और संत ही इस संसार में जीव के सबसे बड़े और सच्चे हितैषी हैं।'),
      en: 'The Satguru and saints are the greatest and truest well-wishers of the soul in this universe.'
    }
  },
  {
    id: 'ang-2-v11',
    type: 'sakhi',
    lines: {
      hi: [
        'कबीर समुझा कहत है, पानी थाह बताय।',
        'ताकूं सतगुरु का करे, जो औघट डूबे जाय।।'
      ],
      pb: [
        devanagariToGurmukhi('कबीर समुझा कहत है, पानी थाह बताय।'),
        devanagariToGurmukhi('ताकूं सतगुरु का करे, जो औघट डूबे जाय।।')
      ],
      en: [
        'Kabir Samujha Kahat Hai, Paani Thaah Batay.',
        'Taaku Satguru Ka Kare, Jo Oughat Doobe Jaay.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'समुझा कहत है', meaning: 'समझदारी और अनुभव से कहना' },
        { word: 'थाह', meaning: 'गहराई, सही रास्ता' },
        { word: 'औघट', meaning: 'गलत और दुर्गम मार्ग' },
        { word: 'का करे', meaning: 'क्या कर सकता है (बेबस)' }
      ],
      pb: [
        { word: 'समुझा कहत है', meaning: 'ਸਮਝਾ ਕੇ ਕਹਿਣਾ' },
        { word: 'थाह', meaning: 'ਡੂੰਘਾਈ, ਸਹੀ ਰਾਹ' },
        { word: 'औघट', meaning: 'ਔਘੜ ਰਸਤਾ' },
        { word: 'का करे', meaning: 'ਕੀ ਕਰ ਸਕਦਾ ਹੈ' }
      ],
      en: [
        { word: 'Samujha Kahat', meaning: 'Speaking with realization' },
        { word: 'Thaah', meaning: 'Depth / Right path' },
        { word: 'Oughat', meaning: 'Wrong or dangerous path' },
        { word: 'Ka Kare', meaning: 'What can be done' }
      ]
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि कोई समझा हुआ व्यक्ति ही अपनी जानी हुई बात कहता है और वही पानी की गहराई बता सकता है, परंतु उसकी बात न मानकर कोई जहां घाट न हो, पानी में डूबकर मर जाए, तो इसमें कोई क्या करे? इसी प्रकार यदि कोई सद्गुरु की शिक्षा न ग्रहण कर, जग में ठोकरें खाकर मरे, तो इसका कोई उपाय नहीं है।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि कोई समझा हुआ व्यक्ति ही अपनी जानी हुई बात कहता है और वही पानी की गहराई बता सकता है, परंतु उसकी बात न मानकर कोई जहां घाट न हो, पानी में डूबकर मर जाए, तो इसमें कोई क्या करे? इसी प्रकार यदि कोई सद्गुरु की शिक्षा न ग्रहण कर, जग में ठोकरें खाकर मरे, तो इसका कोई उपाय नहीं है।'),
      en: 'Kabir says: The wise guide points out the exact depth and the safe path. But if someone stubbornly ignores the warning and plunges into dangerous waters, what can even the Satguru do for them?'
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु के मार्गदर्शन और चेतावनियों को मानकर अपने जीवन की नाव सुरक्षित चला रहा हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सतगुरु के मार्गदर्शन और चेतावनियों को मानकर अपने जीवन की नाव सुरक्षित चला रहा हूँ?'),
      en: 'Am I steering my life safely by following the guidance and warnings of the Satguru?'
    },
    practicalApplication: {
      hi: 'अपनी मनमानी छोड़कर सतगुरु के दिखाए मार्ग और विवेकपूर्ण शिक्षा का पूर्ण पालन करें।',
      pb: devanagariToGurmukhi('अपनी मनमानी छोड़कर सतगुरु के दिखाए मार्ग और विवेकपूर्ण शिक्षा का पूर्ण पालन करें।'),
      en: 'Let go of stubborn self-will and strictly follow the path and wise instructions of the Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी मति को अपनी शरण में स्थिर रखें ताकि मैं कभी भी भूलकर गलत मार्ग पर न भटकूँ।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरी मति को अपनी शरण में स्थिर रखें ताकि मैं कभी भी भूलकर गलत मार्ग पर न भटकूँ।'),
      en: 'O Satguru! Keep my intellect anchored in Your shelter so I may never stray onto a dangerous path.'
    },
    spiritualEssence: {
      hi: 'गुरु की चेतावनी की उपेक्षा करके मनमानी करने वाला जीव स्वयं अपने विनाश का कारण बनता है।',
      pb: devanagariToGurmukhi('गुरु की चेतावनी की उपेक्षा करके मनमानी करने वाला जीव स्वयं अपने विनाश का कारण बनता है।'),
      en: 'Those who ignore the master’s guidance and follow their own stubborn mind bring about their own ruin.'
    }
  },
  {
    id: 'ang-2-v12',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु सम कोई नहीं, सात दीप नौ खण्ड।',
        'तीन लोक न पाइये, अरु इक-इस ब्रह्मण्ड।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु सम कोई नहीं, सात दीप नौ खण्ड।'),
        devanagariToGurmukhi('तीन लोक न पाइये, अरु इक-इस ब्रह्मण्ड।।')
      ],
      en: [
        'Satguru Sam Koi Nahi, Saat Deep Nau Khand.',
        'Teen Lok Na Paiye, Aru Ik-Is Brahmand.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सात दीप नौ खण्ड', meaning: 'संपूर्ण भूगोल और पृथ्वी' },
        { word: 'तीन लोक', meaning: 'स्वर्ग, मृत्यु, पाताल' },
        { word: 'इक्कीस ब्रह्मांड', meaning: 'समस्त ब्रह्मांड' },
        { word: 'सम कोई नहीं', meaning: 'समान दूसरा कोई नहीं है' }
      ],
      pb: [
        { word: 'सात दीप नौ खण्ड', meaning: 'ਸੰਪੂਰਨ ਧਰਤੀ' },
        { word: 'तीन लोक', meaning: 'ਤਿੰਨੇ ਲੋਕ' },
        { word: 'इक्कीस ब्रह्मांड', meaning: 'ਸਮੁੱਚੇ ਬ੍ਰਹਿਮੰਡ' },
        { word: 'सम कोई नहीं', meaning: 'ਸਮਾਨ ਕੋਈ ਨਹੀਂ' }
      ],
      en: [
        { word: 'Saat Deep Nau Khand', meaning: 'All islands and continents' },
        { word: 'Teen Lok', meaning: 'Three worlds' },
        { word: 'Brahmand', meaning: 'All universes' },
        { word: 'Sam Koi Nahi', meaning: 'None equals' }
      ]
    },
    bhavarth: {
      hi: 'इस संसार में सद्गुरु के समान कोई नहीं है। सातों द्वीप, नौ खंडों, तीनों लोकों और इक्कीस ब्रह्मांडों में भी सद्गुरु के समान दूसरा कोई नहीं है, अर्थात सद्गुरु की महिमा सर्वोपरि है। उनके ज्ञानोपदेश से जगत का जो उपकार होता है, वह किसी अन्य से नहीं हो सकता।',
      pb: devanagariToGurmukhi('इस संसार में सद्गुरु के समान कोई नहीं है। सातों द्वीप, नौ खंडों, तीनों लोकों और इक्कीस ब्रह्मांडों में भी सद्गुरु के समान दूसरा कोई नहीं है, अर्थात सद्गुरु की महिमा सर्वोपरि है। उनके ज्ञानोपदेश से जगत का जो उपकार होता है, वह किसी अन्य से नहीं हो सकता।'),
      en: 'Across the seven continents, the nine regions, the three worlds, and all universes, there is no one equal to the Satguru. His glory and benevolence are supreme and peerless.'
    },
    contemplation: {
      hi: 'क्या मैं यह पहचान पाया हूँ कि सर्वसृष्टि में सतगुरु का स्थान सबसे सर्वोच्च और अद्वितीय है?',
      pb: devanagariToGurmukhi('क्या मैं यह पहचान पाया हूँ कि सर्वसृष्टि में सतगुरु का स्थान सबसे सर्वोच्च और अद्वितीय है?'),
      en: 'Do I recognize that in all of creation, the place of the Satguru is supreme and peerless?'
    },
    practicalApplication: {
      hi: 'सतगुरु को सर्वोच्च सत्ता मानकर उनकी आज्ञा को अपने जीवन का शिरोधार्य बनाएं।',
      pb: devanagariToGurmukhi('सतगुरु को सर्वोच्च सत्ता मानकर उनकी आज्ञा को अपने जीवन का शिरोधार्य बनाएं।'),
      en: 'Hold the Satguru as the supreme authority and make His command the guiding light of your life.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! तीनों लोकों में आपके समान उपकारी और दयालु अन्य कोई नहीं है। मेरा प्रणाम स्वीकार हो।',
      pb: devanagariToGurmukhi('हे सतगुरुदेव! तीनों लोकों में आपके समान उपकारी और दयालु अन्य कोई नहीं है। मेरा प्रणाम स्वीकार हो।'),
      en: 'O Satguru! There is none in all three worlds as compassionate and benevolent as You. Accept my salutations.'
    },
    spiritualEssence: {
      hi: 'समस्त ब्रह्मांडों में सतगुरु की महिमा और उनका उपकार सर्वोपरि है।',
      pb: devanagariToGurmukhi('समस्त ब्रह्मांडों में सतगुरु की महिमा और उनका उपकार सर्वोपरि है।'),
      en: 'Across all universes, the glory and grace of the Satguru reign supreme.'
    }
  },
  {
    id: 'ang-2-v13',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु सांचा शूरमा, नख शिख मारा पूर।',
        'बाहिर घाव न दीखई, अन्तर चकनाचूर।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु सांचा शूरमा, नख शिख मारा पूर।'),
        devanagariToGurmukhi('बाहिर घाव न दीखई, अन्तर चकनाचूर।।')
      ],
      en: [
        'Satguru Saancha Shurama, Nakh Shikh Maara Poor.',
        'Baahir Ghaav Na Deekhai, Antar Chakanaachoor.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'नख शिख', meaning: 'नखों से शिखा तक (सिर से पैर तक)' },
        { word: 'मारा पूर', meaning: 'पूर्ण रूप से वार करना' },
        { word: 'बाहिर घाव', meaning: 'शरीर पर बाहरी चोट' },
        { word: 'अन्तर', meaning: 'भीतर, हृदय में अहंकार' }
      ],
      pb: [
        { word: 'नख शिख', meaning: 'ਨਹੁਂ ਤੋਂ ਸਿਖਰ ਤੱਕ' },
        { word: 'मारा पूर', meaning: 'ਪੂਰਾ ਵਾਰ ਕਰਨਾ' },
        { word: 'बाहिर घाव', meaning: 'ਬਾਹਰੀ ਜ਼ਖ਼ਮ' },
        { word: 'अन्तर', meaning: 'ਅੰਦਰ, ਹਿਰਦੇ ਵਿੱਚ' }
      ],
      en: [
        { word: 'Nakh Shikh', meaning: 'From head to toe' },
        { word: 'Maara Poor', meaning: 'Struck completely' },
        { word: 'Baahir Ghaav', meaning: 'External wound' },
        { word: 'Antar', meaning: 'Within / In the heart' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु सच्चे शूरवीर हैं, उनका कोई शत्रु नहीं है और न ही वे कहीं युद्ध करने जाते हैं। वे अपने प्रिय शिष्य की नख से शिखा तक की बुराइयों को दूर करने के लिए, अपने ज्ञान रूपी शब्द बाण से हृदय को चूर-चूर कर देते हैं, लेकिन बाहर से उसके घाव दिखाई नहीं पड़ते।',
      pb: devanagariToGurmukhi('सद्गुरु सच्चे शूरवीर हैं, उनका कोई शत्रु नहीं है और न ही वे कहीं युद्ध करने जाते हैं। वे अपने प्रिय शिष्य की नख से शिखा तक की बुराइयों को दूर करने के लिए, अपने ज्ञान रूपी शब्द बाण से हृदय को चूर-चूर कर देते हैं, लेकिन बाहर से उसके घाव दिखाई नहीं पड़ते।'),
      en: 'The true Satguru is a spiritual warrior who strikes our ego completely from head to toe. There are no external physical wounds, but our inner pride and illusion are shattered into pieces.'
    },
    contemplation: {
      hi: 'क्या सतगुरु के ज्ञान ने मेरे भीतर के अहंकार और विकारों को पूरी तरह से तोड़ दिया है?',
      pb: devanagariToGurmukhi('क्या सतगुरु के ज्ञान ने मेरे भीतर के अहंकार और विकारों को पूरी तरह से तोड़ दिया है?'),
      en: 'Has the master’s wisdom completely shattered the inner ego and impurities within me?'
    },
    practicalApplication: {
      hi: 'अपने अहंकार और दुर्गुणों को मिटाने के लिए सतगुरु के ज्ञान को अपने अंतःकरण में उतरने दें।',
      pb: devanagariToGurmukhi('अपने अहंकार और दुर्गुणों को मिटाने के लिए सतगुरु के ज्ञान को अपने अंतःकरण में उतरने दें।'),
      en: 'Allow the Satguru’s wisdom to penetrate your innermost heart to eradicate ego and vices.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे भीतर के अहंकार को पूरी तरह नष्ट कर दें ताकि केवल आपकी ज्योति शेष रहे।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरे भीतर के अहंकार को पूरी तरह नष्ट कर दें ताकि केवल आपकी ज्योति शेष रहे।'),
      en: 'O Satguru! Completely shatter my inner ego so that only Your divine light remains within.'
    },
    spiritualEssence: {
      hi: 'सतगुरु बिना किसी बाहरी चोट के आंतरिक अहंकार को चकनाचूर कर देते हैं।',
      pb: devanagariToGurmukhi('सतगुरु बिना किसी बाहरी चोट के आंतरिक अहंकार को चकनाचूर कर देते हैं।'),
      en: 'The Satguru shatters our inner ego without leaving any external scars, transforming our soul.'
    }
  },
  {
    id: 'ang-2-v14',
    type: 'sakhi',
    lines: {
      hi: [
        'केते पढि गुनि पचि मुए, योग यज्ञ तप लाय।',
        'बिन सतगुरु पावै नहीं, कोटिन करे उपाय।।'
      ],
      pb: [
        devanagariToGurmukhi('केते पढि गुनि पचि मुए, योग यज्ञ तप लाय।'),
        devanagariToGurmukhi('बिन सतगुरु पावै नहीं, कोटिन करे उपाय।।')
      ],
      en: [
        'Kete Padhi Guni Pachi Mue, Yog Yagya Tap Laay.',
        'Bin Satguru Paavai Nahi, Kotin Kare Upaay.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'पचि मुए', meaning: 'थक-हार कर मर गए' },
        { word: 'योग यज्ञ तप', meaning: 'हठयोग, अनुष्ठान और तपस्या' },
        { word: 'कोटिन', meaning: 'करोड़ों' },
        { word: 'उपाय', meaning: 'यतन, साधन' }
      ],
      pb: [
        { word: 'पचि मुए', meaning: 'ਥੱਕ ਹਾਰ ਕੇ ਮਰ ਗਏ' },
        { word: 'योग यज्ञ तप', meaning: 'ਯੋਗ, ਤਪੱਸਿਆ' },
        { word: 'कोटिन', meaning: 'ਕਰോੜਾਂ' },
        { word: 'उपाय', meaning: 'ਉਪਾਇ' }
      ],
      en: [
        { word: 'Pachi Mue', meaning: 'Wasted away striving' },
        { word: 'Yog Yagya Tap', meaning: 'Yoga, rituals and austerities' },
        { word: 'Kotin', meaning: 'Millions of' },
        { word: 'Upaay', meaning: 'Efforts / Methods' }
      ]
    },
    bhavarth: {
      hi: 'कितने ही लोग शास्त्रों को पढ़ते-गुनते यूं ही मर गए, कितने ही योग-क्रिया करने वाले, यज्ञ करने वाले तथा तप-व्रत करने वाले हार-थककर समाप्त हो गए, परंतु बिना सद्गुरु के आत्म-बोध एवं परम-शांति प्राप्त नहीं हो सकती, चाहे कोई करोड़ों उपाय करे, फिर भी उसे सद्गुरु के बिना आध्यात्मिक ज्ञान प्राप्त नहीं हो सकता।',
      pb: devanagariToGurmukhi('कितने ही लोग शास्त्रों को पढ़ते-गुनते यूं ही मर गए, कितने ही योग-क्रिया करने वाले, यज्ञ करने वाले तथा तप-व्रत करने वाले हार-थककर समाप्त हो गए, परंतु बिना सद्गुरु के आत्म-बोध एवं परम-शांति प्राप्त नहीं हो सकती, चाहे कोई करोड़ों उपाय करे, फिर भी उसे सद्गुरु के बिना आध्यात्मिक ज्ञान प्राप्त नहीं हो सकता।'),
      en: 'Millions have worn themselves out reading scriptures, performing yoga, sacrifices, and austerities, but true self-realization can never be attained without the Satguru, no matter how many millions of other efforts one makes.'
    },
    contemplation: {
      hi: 'क्या मैं यह समझ चुका हूँ कि बाहरी कर्मकांडों और ग्रंथों के बिना सतगुरु की कृपा के मोक्ष असंभव है?',
      pb: devanagariToGurmukhi('क्या मैं यह समझ चुका हूँ कि बाहरी कर्मकांडों और ग्रंथों के बिना सतगुरु की कृपा के मोक्ष असंभव है?'),
      en: 'Do I realize that without the grace of the Satguru, mere external rituals and study are futile?'
    },
    practicalApplication: {
      hi: 'केवल बाहरी तप और ग्रंथों के अध्ययन में उलझने के बजाय पूर्ण सतगुरु की शरण और उनकी सेवा को अपनाएं।',
      pb: devanagariToGurmukhi('केवल बाहरी तप और ग्रंथों के अध्ययन में उलझने के बजाय पूर्ण सतगुरु की शरण और उनकी सेवा को अपनाएं।'),
      en: 'Instead of getting entangled in external austerities, take refuge in a true master and serve Him.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! शास्त्रों और तपस्या के भ्रम से बचाकर मुझे अपनी पावन शरण में आश्रय दें।',
      pb: devanagariToGurmukhi('हे सतगुरु! शास्त्रों और तपस्या के भ्रम से बचाकर मुझे अपनी पावन शरण में आश्रय दें।'),
      en: 'O Satguru! Save me from the illusion of mere rituals and austerities, sheltering me at Your sacred feet.'
    },
    spiritualEssence: {
      hi: 'करोड़ों तप और ग्रंथों के पठन से भी जो शांति नहीं मिलती, वह सतगुरु की एक बूंद कृपा से मिल जाती है।',
      pb: devanagariToGurmukhi('करोड़ों तप और ग्रंथों के पठन से भी जो शांति नहीं मिलती, वह सतगुरु की एक बूंद कृपा से मिल जाती है।'),
      en: 'The peace that millions of austerities cannot yield is attained instantly through the Satguru’s grace.'
    }
  },
  {
    id: 'ang-2-v15',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु की मानै नहीं, अपनी कहै बनाय।',
        'कहैं कबीर क्या कीजिए, और मता मन माय।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु की मानै नहीं, अपनी कहै बनाय।'),
        devanagariToGurmukhi('कहैं कबीर क्या कीजिए, और मता मन माय।।')
      ],
      en: [
        'Satguru Ki Maanai Nahi, Apni Kahai Banaay.',
        'Kahai Kabir Kya Kijiye, Aur Mata Man Maay.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'मानै नहीं', meaning: 'आज्ञा का पालन न करना' },
        { word: 'अपनी कहै', meaning: 'अपनी मनमानी चलाना' },
        { word: 'मता', meaning: 'मत, विचार, जिद' },
        { word: 'मन माय', meaning: 'मन की अपनी ही मर्जी' }
      ],
      pb: [
        { word: 'मानै नहीं', meaning: 'ਹੁਕਮ ਨਾ ਮੰਨਣਾ' },
        { word: 'अपनी कहै', meaning: 'ਆਪਣੀ ਮਨਮਾਨੀ ਕਰਨਾ' },
        { word: 'मता', meaning: 'ਮੱਤ, ਵਿਚਾਰ' },
        { word: 'मन माय', meaning: 'ਮਨ ਦੀ ਜਿੱਦ' }
      ],
      en: [
        { word: 'Maanai Nahi', meaning: 'Does not obey' },
        { word: 'Apni Kahai', meaning: 'Follows self-will' },
        { word: 'Mata', meaning: 'Opinion / Stubbornness' },
        { word: 'Man Maay', meaning: 'In the clutches of mind' }
      ]
    },
    bhavarth: {
      hi: 'जो सद्गुरु के ज्ञानोपदेश को नहीं मानता, उनकी आज्ञा का पालन नहीं करता और उल्टी-सीधी बातें बोलता है, कबीरजी कहते हैं कि उसके सुधार का कोई उपाय नहीं है। वह चंचल मन के अधीन होकर कुछ और ही विचारों का हो गया है। गुरु-सेवा और उनकी आज्ञा से अलग हुए व्यक्ति का कभी भी कल्याण नहीं हो सकता।',
      pb: devanagariToGurmukhi('जो सद्गुरु के ज्ञानोपदेश को नहीं मानता, उनकी आज्ञा का पालन नहीं करता और उल्टी-सीधी बातें बोलता है, कबीरजी कहते हैं कि उसके सुधार का कोई उपाय नहीं है। वह चंचल मन के अधीन होकर कुछ और ही विचारों का हो गया है। गुरु-सेवा और उनकी आज्ञा से अलग हुए व्यक्ति का कभी भी कल्याण नहीं हो सकता।'),
      en: 'Those who do not obey the instructions of the Satguru and instead follow their own stubborn self-will are caught in the traps of their own mind. Kabir says, what can be done with such self-willed souls?'
    },
    contemplation: {
      hi: 'क्या मैं अपने मन की जिद छोड़कर सतगुरु की प्रत्येक आज्ञा को अपने जीवन में शिरोधार्य करता हूँ?',
      pb: devanagariToGurmukhi('क्या मैं अपने मन की जिद छोड़कर सतगुरु की प्रत्येक आज्ञा को अपने जीवन में शिरोधार्य करता हूँ?'),
      en: 'Do I surrender my stubborn self-will and embrace every command of the Satguru?'
    },
    practicalApplication: {
      hi: 'मनमानी छोड़कर सतगुरु और संतों की आज्ञा में रहना ही सच्चे शिष्य का धर्म है।',
      pb: devanagariToGurmukhi('मनमानी छोड़कर सतगुरु और संतों की आज्ञा में रहना ही सच्चे शिष्य का धर्म है।'),
      en: 'Abandon self-will and live strictly in accordance with the instructions of the master.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन की सभी जिदों और विकारों को समाप्त कर मुझे अपनी आज्ञाकारी संतान बनाएं।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरे मन की सभी जिदों और विकारों को समाप्त कर मुझे अपनी आज्ञाकारी संतान बनाएं।'),
      en: 'O Satguru! Eradicate all stubbornness from my mind and make me a truly obedient disciple.'
    },
    spiritualEssence: {
      hi: 'गुरु की आज्ञा का उल्लंघन करने वाला और मनमानी करने वाला कभी कल्याण नहीं पा सकता।',
      pb: devanagariToGurmukhi('गुरु की आज्ञा का उल्लंघन करने वाला और मनमानी करने वाला कभी कल्याण नहीं पा सकता।'),
      en: 'Those who disobey the master and follow their own mind can never attain spiritual salvation.'
    }
  },
  {
    id: 'ang-2-v16',
    type: 'sakhi',
    lines: {
      hi: [
        'मनहिं दिया निज सब दिया, मन के संग शरीर।',
        'अब देवे को क्या रहा, यों कथि कहहिं कबीर।।'
      ],
      pb: [
        devanagariToGurmukhi('मनहिं दिया निज सब दिया, मन के संग शरीर।'),
        devanagariToGurmukhi('अब देवे को क्या रहा, यों कथि कहहिं कबीर।।')
      ],
      en: [
        'Manahi Diya Nij Sab Kiya, Man Ke Sang Sareer.',
        'Ab Deve Ko Kya Raha, Yo Kathy Kahhi Kabir.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'मनहिं दिया', meaning: 'मन समर्पित करना' },
        { word: 'निज सब', meaning: 'अपना सर्वस्व' },
        { word: 'मन के संग शरीर', meaning: 'मन के साथ तन भी समर्पित' },
        { word: 'कथि कहहिं', meaning: 'कबीरजी कहते हैं' }
      ],
      pb: [
        { word: 'मनहिं दिया', meaning: 'ਮਨ ਸਮਰਪਣ ਕਰਨਾ' },
        { word: 'निज सब', meaning: 'ਸਰਵਸ੍ਵ' },
        { word: 'मन के संग शरीर', meaning: 'ਤਨ-ਮਨ ਸਮਰਪਣ' },
        { word: 'कथि कहहिं', meaning: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ' }
      ],
      en: [
        { word: 'Manahi Diya', meaning: 'Surrendering the mind' },
        { word: 'Nij Sab', meaning: 'Everything' },
        { word: 'Man Ke Sang Sareer', meaning: 'Body follows the surrendered mind' },
        { word: 'Kathy Kahhi', meaning: 'So says Kabir' }
      ]
    },
    bhavarth: {
      hi: 'जब शिष्य ने सद्गुरु को मन समर्पित कर दिया तो समझो सब कुछ दे दिया, क्योंकि मन के साथ ही शरीर भी है, इसलिए वह भी मन के साथ ही समर्पित हो गया। तन-मन के द्वारा ही सब कार्य होते हैं, अतः वे सब भी सदगुरु को ही अर्पित हो गए। कबीरजी कहते हैं कि अब देने को शेष रहा ही क्या।',
      pb: devanagariToGurmukhi('जब शिष्य ने सद्गुरु को मन समर्पित कर दिया तो समझो सब कुछ दे दिया, क्योंकि मन के साथ ही शरीर भी है, इसलिए वह भी मन के साथ ही समर्पित हो गया। तन-मन के द्वारा ही सब कार्य होते हैं, अतः वे सब भी सदगुरु को ही अर्पित हो गए। कबीरजी कहते हैं कि अब देने को शेष रहा ही क्या।'),
      en: 'When a disciple surrenders their mind to the Satguru, they have surrendered everything, for the body follows where the mind goes. With mind and body dedicated, what else remains to be given?'
    },
    contemplation: {
      hi: 'क्या मैंने अपना तन, मन और संपूर्ण जीवन सतगुरु के चरणों में पूर्ण रूप से समर्पित कर दिया है?',
      pb: devanagariToGurmukhi('क्या मैंने अपना तन, मन और संपूर्ण जीवन सतगुरु के चरणों में पूर्ण रूप से समर्पित कर दिया है?'),
      en: 'Have I completely surrendered my mind, body, and entire life at the lotus feet of the Satguru?'
    },
    practicalApplication: {
      hi: 'अपने हर कर्म, विचार और इच्छा को सतगुरु की सेवा और प्रसन्नता के प्रति समर्पित कर दें।',
      pb: devanagariToGurmukhi('अपने हर कर्म, विचार और इच्छा को सतगुरु की सेवा और प्रसन्नता के प्रति समर्पित कर दें।'),
      en: 'Dedicate every action, thought, and desire to the service and pleasure of the Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा मन और शरीर दोनों आपके चरणों में अर्पित हैं। अब मेरा कुछ भी अपना नहीं है।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरा मन और शरीर दोनों आपके चरणों में अर्पित हैं। अब मेरा कुछ भी अपना नहीं है।'),
      en: 'O Satguru! Both my mind and body are offered at Your feet. Nothing of mine remains separate.'
    },
    spiritualEssence: {
      hi: 'मन और शरीर का सतगुरु को पूर्ण समर्पण ही सच्ची दीक्षा और भक्ति का शिखर है।',
      pb: devanagariToGurmukhi('मन और शरीर का सतगुरु को पूर्ण समर्पण ही सच्ची दीक्षा और भक्ति का शिखर है।'),
      en: 'The complete surrender of mind and body to the Satguru is the peak of true devotion.'
    }
  },
  {
    id: 'ang-2-v17',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु तो सतभाव है, जो अस भेद बताय।',
        'धन्य शीष धन भाग तिहिं, जो ऐसी सुधि पाय।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु तो सतभाव है, जो अस भेद बताय।'),
        devanagariToGurmukhi('धन्य शीष धन भाग तिहिं, जो ऐसी सुधि पाय।।')
      ],
      en: [
        'Satguru To Satbhav Hai, Jo As Bhed Batay.',
        'Dhanya Sheesh Dhan Bhaag Tihi, Jo Aisi Sudhi Paay.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सतभाव', meaning: 'सत्य का स्वरूप' },
        { word: 'भेद', meaning: 'रहस्य, ब्रह्म ज्ञान' },
        { word: 'धन्य शीष', meaning: 'धन्य है मस्तक (शिर)' },
        { word: 'सुधि पाय', meaning: 'ऐसी ज्ञान-सुधि प्राप्त करना' }
      ],
      pb: [
        { word: 'सतभाव', meaning: 'ਸਤਿ ਦਾ ਸਰੂਪ' },
        { word: 'भेद', meaning: 'ਰਹੱਸ, ਗਿਆਨ' },
        { word: 'धन्य शीष', meaning: 'ਧੰਨ ਸਿਰ' },
        { word: 'सुधि पाय', meaning: 'ਗਿਆਨ ਪ੍ਰਾਪਤ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Satbhav', meaning: 'Embodiment of truth' },
        { word: 'Bhed', meaning: 'Secret / Divine mystery' },
        { word: 'Dhanya Sheesh', meaning: 'Blessed is the head' },
        { word: 'Sudhi Pay', meaning: 'Obtaining such divine awareness' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु स्वयं सत्य-स्वरूप हैं और सत्य का रहस्य बताने वाले हैं। वह शिष्य धन्य है और उसका भाग्य भी धन्य है, जो ऐसे सद्गुरु को पाकर अपने स्वरूप का ज्ञान पा लेता है। इस भौतिक-जगत में माया-मोह को पार करके अपने स्वरूप की अनुभूति करना बहुत ही कठिन है।',
      pb: devanagariToGurmukhi('सद्गुरु स्वयं सत्य-स्वरूप हैं और सत्य का रहस्य बताने वाले हैं। वह शिष्य धन्य है और उसका भाग्य भी धन्य है, जो ऐसे सद्गुरु को पाकर अपने स्वरूप का ज्ञान पा लेता है। इस भौतिक-जगत में माया-मोह को पार करके अपने स्वरूप की अनुभूति करना बहुत ही कठिन है।'),
      en: 'The Satguru is the embodiment of truth who reveals the ultimate divine mystery. Blessed is the head and fortunate is the destiny of one who receives such supreme wisdom.'
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु द्वारा बताए गए सत्य के मार्ग पर चलकर अपने अभाग्य को सौभाग्य में बदल पाया हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सतगुरु द्वारा बताए गए सत्य के मार्ग पर चलकर अपने अभाग्य को सौभाग्य में बदल पाया हूँ?'),
      en: 'Have I transformed my destiny by walking the path of truth revealed by the Satguru?'
    },
    practicalApplication: {
      hi: 'पूर्ण सद्गुरु की प्राप्ति को अपने जीवन का सबसे बड़ा सौभाग्य समझकर निरंतर उनका संग करें।',
      pb: devanagariToGurmukhi('पूर्ण सद्गुरु की प्राप्ति को अपने जीवन का सबसे बड़ा सौभाग्य समझकर निरंतर उनका संग करें।'),
      en: 'Cherish the attainment of a true master as your greatest fortune and remain in His company.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपका मिलना मेरे पूर्वजन्मों का बड़ा सौभाग्य है। मेरा मस्तक सदा आपके चरणों में झुका रहे।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपका मिलना मेरे पूर्वजन्मों का बड़ा सौभाग्य है। मेरा मस्तक सदा आपके चरणों में झुका रहे।'),
      en: 'O Satguru! Finding You is my greatest fortune. May my head ever bow in reverence at Your feet.'
    },
    spiritualEssence: {
      hi: 'सत्य के स्वरूप सतगुरु को पाकर आत्म-ज्ञान प्राप्त करने वाला शिष्य सबसे भाग्यशाली है।',
      pb: devanagariToGurmukhi('सत्य के स्वरूप सतगुरु को पाकर आत्म-ज्ञान प्राप्त करने वाला शिष्य सबसे भाग्यशाली है।'),
      en: 'Blessed are those who attain self-realization by finding the embodiment of truth in the Satguru.'
    }
  },
  {
    id: 'ang-2-v18',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु हमसों रीझि कै, कह्यौ एक परसंग।',
        'बरषै बादल प्रेम को, भींजि गयो सब अंग।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु हमसों रीझि कै, कह्यौ एक परसंग।'),
        devanagariToGurmukhi('बरषै बादल प्रेम को, भींजि गयो सब अंग।।')
      ],
      en: [
        'Satguru Hamso Reejhi Kai, Kahyo Ek Parasang.',
        'Barsai Baadal Prem Ko, Bheenji Gayo Sab Ang.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'रीझि कै', meaning: 'प्रसन्न होकर' },
        { word: 'परसंग', meaning: 'प्रसंग, आध्यात्मिक वचन' },
        { word: 'बरषै बादल', meaning: 'प्रेम की वर्षा होना' },
        { word: 'भींजि गयो', meaning: 'भीग जाना, सराबोर होना' }
      ],
      pb: [
        { word: 'रीझि कै', meaning: 'ਪ੍ਰਸੰਨ ਹੋ ਕੇ' },
        { word: 'परसंग', meaning: 'ਪ੍ਰਸੰਗ, ਉਪਦੇਸ਼' },
        { word: 'बरषै बादल', meaning: 'ਪ੍ਰੇਮ ਦੀ ਵਰਖਾ' },
        { word: 'भींजि गयो', meaning: 'ਭਿੱਜ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Reejhi Kai', meaning: 'Being pleased' },
        { word: 'Parasang', meaning: 'Spiritual discourse' },
        { word: 'Barsai Baadal', meaning: 'Clouds of love raining' },
        { word: 'Bheenji Gayo', meaning: 'Drenched completely' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु ने प्रसन्न होकर, एक ऐसा प्रसंग कहा कि उसका शब्दों में वर्णन नहीं किया जा सकता। उससे हृदय में प्रेम के बादल घुमड़कर बरसने लगे, संपूर्ण तन रोमांचित हो गया तथा अंग-अंग भीग गया। सद्गुरु का वह अलौकिक प्रसंग, आत्म-साक्षात्कार की साधना ही है, जिसको जानकर जिज्ञासु भक्त खुशी से फूले नहीं समाते।',
      pb: devanagariToGurmukhi('सद्गुरु ने प्रसन्न होकर, एक ऐसा प्रसंग कहा कि उसका शब्दों में वर्णन नहीं किया जा सकता। उससे हृदय में प्रेम के बादल घुमड़कर बरसने लगे, संपूर्ण तन रोमांचित हो गया तथा अंग-अंग भीग गया। सद्गुरु का वह अलौकिक प्रसंग, आत्म-साक्षात्कार की साधना ही है, जिसको जानकर जिज्ञासु भक्त खुशी से फूले नहीं समाते।'),
      en: 'Being pleased, the Satguru imparted a transcendent secret discourse. Clouds of divine love began to rain in the heart, drenching every fiber of our being in ecstatic bliss.'
    },
    contemplation: {
      hi: 'क्या मैंने कभी सतगुरु के पावन वचनों से अपने हृदय में प्रेम और आनंद की वर्षा का अनुभव किया है?',
      pb: devanagariToGurmukhi('क्या मैंने कभी सतगुरु के पावन वचनों से अपने हृदय में प्रेम और आनंद की वर्षा का अनुभव किया है?'),
      en: 'Have I ever experienced the torrential rain of divine love in my heart through the master’s words?'
    },
    practicalApplication: {
      hi: 'सतगुरु के वचनों को अपने भीतर उतारकर भक्ति और प्रेम के आनंद में सराबोर रहें।',
      pb: devanagariToGurmukhi('सतगुरु के वचनों को अपने भीतर उतारकर भक्ति और प्रेम के आनंद में सराबोर रहें।'),
      en: 'Absorb the master’s words deep within and immerse yourself in the ecstasy of divine love.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपनी कृपा की ऐसी फुहार मुझ पर बरसाएं कि मेरा रोम-रोम आपके प्रेम में भीग जाए।',
      pb: devanagariToGurmukhi('हे सतगुरु! अपनी कृपा की ऐसी फुहार मुझ पर बरसाएं कि मेरा रोम-रोम आपके प्रेम में भीग जाए।'),
      en: 'O Satguru! Shower Your grace upon me so that every pore of my being is drenched in Your love.'
    },
    spiritualEssence: {
      hi: 'सतगुरु की कृपा से मिलने वाला आध्यात्मिक प्रसंग हृदय को प्रेम और आनंद से भर देता है।',
      pb: devanagariToGurmukhi('सतगुरु की कृपा से मिलने वाला आध्यात्मिक प्रसंग हृदय को प्रेम और आनंद से भर देता है।'),
      en: 'The divine discourse bestowed by the Satguru fills the heart with supreme love and ecstasy.'
    }
  },
  {
    id: 'ang-2-v19',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु मिला जु जानिये, ज्ञान उजाला होय।',
        'भ्रम का भांडा तोड़ि करि, रहै निराला होय।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु मिला जु जानिये, ज्ञान उजाला होय।'),
        devanagariToGurmukhi('भ्रम का भांडा तोड़ि करि, रहै निराला होय।।')
      ],
      en: [
        'Satguru Mila Ju Jaaniye, Gyan Ujaala Hoy.',
        'Bharam Ka Bhaanda Todi Kari, Rehai Niraala Hoy.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'ज्ञान उजाला', meaning: 'आंतरिक प्रकाश, बोध' },
        { word: 'भांडा', meaning: 'भ्रम या अज्ञान का बर्तन' },
        { word: 'तोड़ि करि', meaning: 'नष्ट करके' },
        { word: 'निराला', meaning: 'सबसे अलग, मुक्त, अलिप्त' }
      ],
      pb: [
        { word: 'ज्ञान उजाला', meaning: 'ਗਿਆਨ ਦਾ ਪ੍ਰਕਾਸ਼' },
        { word: 'भांडा', meaning: 'ਭਰਮ ਦਾ ਭਾਂਡਾ' },
        { word: 'तोड़ि करि', meaning: 'ਤੋੜ ਕੇ' },
        { word: 'निराला', meaning: 'ਨਿਰਾਲਾ, ਮੁਕਤ' }
      ],
      en: [
        { word: 'Gyan Ujaala', meaning: 'Light of knowledge' },
        { word: 'Bhaanda', meaning: 'Vessel of illusion' },
        { word: 'Todi Kari', meaning: 'Shattering' },
        { word: 'Niraala', meaning: 'Unique / Detached' }
      ]
    },
    bhavarth: {
      hi: 'सद्गुरु का मिलना तब ही जानो, जब अंतर्मन में ज्ञान का उजाला हो जाए, अर्थात अपने अंतःकरण का अज्ञान रूपी अंधकार नष्ट हो जाए। अपने अंदर जो भ्रम है, उसका विनाश करके ही हम अपने अद्भुत स्वरूप को प्राप्त कर सकते हैं। जब तक हृदय में संशय-भ्रम रहते हैं, तब तक आत्म-दर्शन नहीं होता।',
      pb: devanagariToGurmukhi('सद्गुरु का मिलना तब ही जानो, जब अंतर्मन में ज्ञान का उजाला हो जाए, अर्थात अपने अंतःकरण का अज्ञान रूपी अंधकार नष्ट हो जाए। अपने अंदर जो भ्रम है, उसका विनाश करके ही हम अपने अद्भुत स्वरूप को प्राप्त कर सकते हैं। जब तक हृदय में संशय-भ्रम रहते हैं, तब तक आत्म-दर्शन नहीं होता।'),
      en: 'Recognize that you have truly met the Satguru when the inner light of knowledge dawns, shattering the vessel of doubt and illusion, leaving the soul pure, detached, and free.'
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में सतगुरु के मिलने से ज्ञान का प्रकाश फैला है और सारे भ्रम टूटे हैं?',
      pb: devanagariToGurmukhi('क्या मेरे जीवन में सतगुरु के मिलने से ज्ञान का प्रकाश फैला है और सारे भ्रम टूटे हैं?'),
      en: 'Has the light of wisdom dawned and all illusions shattered in my life upon meeting the Satguru?'
    },
    practicalApplication: {
      hi: 'अपने मन के संशयों और भ्रमों को ज्ञान के प्रकाश से दूर करें और संसार में अलिप्त रहें।',
      pb: devanagariToGurmukhi('अपने मन के संशयों और भ्रमों को ज्ञान के प्रकाश से दूर करें और संसार में अलिप्त रहें।'),
      en: 'Dispel all mental doubts and illusions with the light of wisdom, remaining detached in the world.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे भीतर ज्ञान का ऐसा सूर्य चमकाएं कि अज्ञान का हर एक भ्रम हमेशा के लिए मिट जाए।',
      pb: devanagariToGurmukhi('हे सतगुरु! मेरे भीतर ज्ञान का ऐसा सूर्य चमकाएं कि अज्ञान का हर एक भ्रम हमेशा के लिए मिट जाए।'),
      en: 'O Satguru! Kindle the sun of wisdom within me so that every shadow of illusion is forever destroyed.'
    },
    spiritualEssence: {
      hi: 'सद्गुरु की प्राप्ति से अज्ञान का अंधकार मिटता है और ज्ञान का प्रकाश जीव को निराला बना देता है।',
      pb: devanagariToGurmukhi('सद्गुरु की प्राप्ति से अज्ञान का अंधकार मिटता है और ज्ञान का प्रकाश जीव को निराला बना देता है।'),
      en: 'Meeting the Satguru dispels ignorance and fills the soul with the unique light of liberation.'
    }
  },
  {
    id: 'ang-2-v20',
    type: 'sakhi',
    lines: {
      hi: [
        'पाछे लागे जाय था, लोक वेद के साथ।',
        'पैंडे में सतगुरु मिले, दीपक दीन्हा हाथ।।'
      ],
      pb: [
        devanagariToGurmukhi('पाछे लागे जाय था, लोक वेद के साथ।'),
        devanagariToGurmukhi('पैंडे में सतगुरु मिले, दीपक दीन्हा हाथ।।')
      ],
      en: [
        'Paache Laage Jaay Tha, Lok Ved Ke Saath.',
        'Painde Mein Satguru Mile, Deepak Deenha Haath.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'लोक वेद', meaning: 'सांसारिक रीति-रिवाज और परंपराएं' },
        { word: 'पाछे लागे जाय था', meaning: 'अंधानुकरण कर रहा था' },
        { word: 'पैंडे में', meaning: 'मार्ग में, रास्ते में' },
        { word: 'दीपक दीन्हा हाथ', meaning: 'ज्ञान का प्रकाश देना' }
      ],
      pb: [
        { word: 'लोक वेद', meaning: 'ਸੰਸਾਰਕ ਰੀਤੀ-ਰਿਵਾਜ' },
        { word: 'पाछे लागे जाय था', meaning: 'ਅੰਧਾਨੁਕਰਣ ਕਰ ਰਿਹਾ ਸੀ' },
        { word: 'पैंडे में', meaning: 'ਰਸਤੇ ਵਿੱਚ' },
        { word: 'दीपक दीन्हा हाथ', meaning: 'ਗਿਆਨ ਦਾ ਦੀਵਾ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Lok Ved', meaning: 'Worldly traditions and customs' },
        { word: 'Paache Laage', meaning: 'Blindly following' },
        { word: 'Painde Mein', meaning: 'On the path / journey' },
        { word: 'Deepak Deenha', meaning: 'Placed the lamp of wisdom in hand' }
      ]
    },
    bhavarth: {
      hi: 'अज्ञानता में बिना सोचे-समझें सांसारिक मान्यताओं के पीछे लगा हुआ जा रहा था, अपना अनमोल समय यूं ही नष्ट कर रहा था, तभी रास्ते में सद्गुरु के दर्शन हुए। उन्होंने ज्ञान का दीपक हाथ में थमा दिया, जिससे सांसारिक मोह का अंधकार दूर हो गया।',
      pb: devanagariToGurmukhi('अज्ञानता में बिना सोचे-समझें सांसारिक मान्यताओं के पीछे लगा हुआ जा रहा था, अपना अनमोल समय यूं ही नष्ट कर रहा था, तभी रास्ते में सद्गुरु के दर्शन हुए। उन्होंने ज्ञान का दीपक हाथ में थमा दिया, जिससे सांसारिक मोह का अंधकार दूर हो गया।'),
      en: 'I was blindly following worldly traditions and rituals, wasting my life, when upon my path I met the Satguru. He placed the brilliant lamp of spiritual wisdom in my hand, dispelling all darkness.'
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक अंधानुकरण को छोड़कर सतगुरु द्वारा दिए गए ज्ञान के दीपक से अपना मार्ग रोशन कर रहा हूँ?',
      pb: devanagariToGurmukhi('क्या मैं सांसारिक अंधानुकरण को छोड़कर सतगुरु द्वारा दिए गए ज्ञान के दीपक से अपना मार्ग रोशन कर रहा हूँ?'),
      en: 'Have I abandoned blind traditions and illuminated my path with the lamp of wisdom given by the Satguru?'
    },
    practicalApplication: {
      hi: 'अंधविश्वासों और रूढ़ियों को त्यागकर सतगुरु के बताए ज्ञान-मार्ग पर चलें।',
      pb: devanagariToGurmukhi('अंधविश्वासों और रूढ़ियों को त्यागकर सतगुरु के बताए ज्ञान-मार्ग पर चलें।'),
      en: 'Discard blind superstitions and walk steadfastly on the path of wisdom shown by the master.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपने मेरे हाथ में ज्ञान का दीपक थामकर मुझे सही मार्ग दिखाया है। आपका कोटि-कोटि धन्यवाद।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपने मेरे हाथ में ज्ञान का दीपक थामकर मुझे सही मार्ग दिखाया है। आपका कोटि-कोटि धन्यवाद।'),
      en: 'O Satguru! You placed the lamp of wisdom in my hand and showed me the right path. Endless thanks to You.'
    },
    spiritualEssence: {
      hi: 'सतगुरु जीवन की भटकन के मार्ग में ज्ञान का दीपक देकर अंधकार को दूर कर देते हैं।',
      pb: devanagariToGurmukhi('सतगुरु जीवन की भटकन के मार्ग में ज्ञान का दीपक देकर अंधकार को दूर कर देते हैं।'),
      en: 'The Satguru dispels the darkness of wandering life by placing the lamp of knowledge in our hands.'
    }
  },
  {
    id: 'ang-2-v21',
    type: 'sakhi',
    lines: {
      hi: [
        'जेहि खोजत ब्रह्मा थके, सुर नर मुनि अरु देव।',
        'कहैं कबीर सुन साधवा, करु सतगुरु की सेव।।'
      ],
      pb: [
        devanagariToGurmukhi('जेहि खोजत ब्रह्मा थके, सुर नर मुनि अरु देव।'),
        devanagariToGurmukhi('कहैं कबीर सुन साधवा, करु सतगुरु की सेव।।')
      ],
      en: [
        'Jehi Khojat Brahma Thake, Sur Nar Muni Aru Dev.',
        'Kahai Kabir Sun Saadhva, Karu Satguru Ki Sev.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'जेहि खोजत', meaning: 'जिसे खोजते-खोजते' },
        { word: 'सुर नर मुनि', meaning: 'देवता, मनुष्य और मुनिगण' },
        { word: 'थके', meaning: 'हार गए, असमर्थ हो गए' },
        { word: 'साधवा', meaning: 'हे साधु-संतो, जिज्ञासुओं' },
        { word: 'सेव', meaning: 'सेवा और शरण' }
      ],
      pb: [
        { word: 'जेहि खोजत', meaning: 'ਜਿਸ ਨੂੰ ਲੱਭਦਿਆਂ' },
        { word: 'सुर नर मुनि', meaning: 'ਦੇਵਤੇ, ਮਨੁੱਖ ਤੇ ਮੁਨੀ' },
        { word: 'थके', meaning: 'ਥੱਕ ਗਏ' },
        { word: 'साधवा', meaning: 'ਹੇ ਸਾਧੂ-ਸੰਤੋ' },
        { word: 'सेव', meaning: 'ਸੇਵਾ' }
      ],
      en: [
        { word: 'Jehi Khojat', meaning: 'Whom searching' },
        { word: 'Sur Nar Muni', meaning: 'Gods, humans and sages' },
        { word: 'Thake', meaning: 'Grew weary / Failed' },
        { word: 'Saadhva', meaning: 'O seeker / saint' },
        { word: 'Sev', meaning: 'Service / Devotion' }
      ]
    },
    bhavarth: {
      hi: 'जिसे खोजते-खोजते ब्रह्माजी थक गए, सुर, नर, मुनि तथा देवता सभी थक गए परंतु पार न पा सके। कबीरजी कहते हैं कि हे साधो! सदगुरु की सेवा करो, तुम्हें मोक्ष सरलता से प्राप्त हो जाएगा। बिना सद्गुरु की सेवा के उसे अर्थात मोक्ष को कोई नहीं पा सकता।',
      pb: devanagariToGurmukhi('जिसे खोजते-खोजते ब्रह्माजी थक गए, सुर, नर, मुनि तथा देवता सभी थक गए परंतु पार न पा सके। कबीरजी कहते हैं कि हे साधो! सदगुरु की सेवा करो, तुम्हें मोक्ष सरलता से प्राप्त हो जाएगा। बिना सद्गुरु की सेवा के उसे अर्थात मोक्ष को कोई नहीं पा सकता।'),
      en: 'Whom Brahma, gods, sages, and mortals searched for in vain, Kabir says: O seeker, serve and take refuge in the Satguru, for without serving the Satguru, none can attain supreme liberation.'
    },
    contemplation: {
      hi: 'क्या मैं यह समझ पाया हूँ कि ब्रह्मा और देवताओं के लिए भी दुर्लभ परमात्मा सतगुरु की सेवा से सहज मिल जाता है?',
      pb: devanagariToGurmukhi('क्या मैं यह समझ पाया हूँ कि ब्रह्मा और देवताओं के लिए भी दुर्लभ परमात्मा सतगुरु की सेवा से सहज मिल जाता है?'),
      en: 'Do I realize that the Supreme Lord, difficult even for gods to find, is attained easily through serving the Satguru?'
    },
    practicalApplication: {
      hi: 'सर्वोच्च परमात्मा को पाने के लिए पूर्ण सतगुरु की सेवा और सत्संग को अपने जीवन का मुख्य लक्ष्य बनाएं।',
      pb: devanagariToGurmukhi('सर्वोच्च परमात्मा को पाने के लिए पूर्ण सतगुरु की सेवा और सत्संग को अपने जीवन का मुख्य लक्ष्य बनाएं।'),
      en: 'Make the service and devotion of the Satguru the primary goal of your life to attain the Supreme Lord.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपकी सेवा ही समस्त तीर्थों और व्रतों से बढ़कर है। मुझे अपनी निष्काम सेवा का दान दें।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपकी सेवा ही समस्त तीर्थों और व्रतों से बढ़कर है। मुझे अपनी निष्काम सेवा का दान दें।'),
      en: 'O Satguru! Service at Your feet is greater than all pilgrimages. Grant me the boon of selfless service.'
    },
    spiritualEssence: {
      hi: 'जिसे देवता और मुनि भी नहीं पा सके, वह परम पद सतगुरु की सेवा से सहज प्राप्त हो जाता है।',
      pb: devanagariToGurmukhi('जिसे देवता और मुनि भी नहीं पा सके, वह परम पद सतगुरु की सेवा से सहज प्राप्त हो जाता है।'),
      en: 'The supreme state unattainable by gods and sages is effortlessly reached through the Satguru.'
    }
  },
  {
    id: 'ang-2-v22',
    type: 'sakhi',
    lines: {
      hi: [
        'सतगुरु मिले जु सब मिले, न तो मिला न कोय।',
        'मात-पिता सुत बांधवा, ये तो घर घर होय।।'
      ],
      pb: [
        devanagariToGurmukhi('सतगुरु मिले जु सब मिले, न तो मिला न कोय।'),
        devanagariToGurmukhi('मात-पिता सुत बांधवा, ये तो घर घर होय।।')
      ],
      en: [
        'Satguru Mile Ju Sab Mile, Na To Mila Na Koy.',
        'Maat-Pita Sut Baandhava, Ye To Ghar Ghar Hoy.'
      ]
    },
    shabdarth: {
      hi: [
        { word: 'सुत बांधवा', meaning: 'पुत्र और भाई-बंधु' },
        { word: 'घर घर होय', meaning: 'हर परिवार में मिल जाते हैं' },
        { word: 'सब मिले', meaning: 'सब कुछ प्राप्त हो गया' },
        { word: 'न तो मिला', meaning: 'कुछ भी नहीं मिला' }
      ],
      pb: [
        { word: 'सुत बांधवा', meaning: 'ਪੁੱਤਰ ਅਤੇ ਭਰਾ-ਬੰਧੂ' },
        { word: 'घर घर होय', meaning: 'ਘਰ-ਘਰ ਮਿਲਦੇ ਹਨ' },
        { word: 'सब मिले', meaning: 'ਸਭ ਕੁਝ ਮਿਲ ਗਿਆ' },
        { word: 'न तो मिला', meaning: 'ਕੁਝ ਨਹੀਂ ਮਿਲਿਆ' }
      ],
      en: [
        { word: 'Sut Baandhava', meaning: 'Sons and relatives' },
        { word: 'Ghar Ghar Hoy', meaning: 'Found in every home' },
        { word: 'Sab Mile', meaning: 'Everything is attained' },
        { word: 'Na Koy', meaning: 'Nothing is gained' }
      ]
    },
    bhavarth: {
      hi: 'यदि सद्गुरु मिल गए तो मानो सब कुछ मिल गया, फिर कुछ मिलना शेष नहीं रहा। यदि सद्गुरु नहीं मिले तो समझो कुछ नहीं मिला, क्योंकि माता-पिता, पुत्र और भाई तो घर-घर में होते हैं। ये सांसारिक नाते सभी को सुलभ हैं, परंतु सद्गुरु की प्राप्ति दुर्लभ है।',
      pb: devanagariToGurmukhi('यदि सद्गुरु मिल गए तो मानो सब कुछ मिल गया, फिर कुछ मिलना शेष नहीं रहा। यदि सद्गुरु नहीं मिले तो समझो कुछ नहीं मिला, क्योंकि माता-पिता, पुत्र और भाई तो घर-घर में होते हैं। ये सांसारिक नाते सभी को सुलभ हैं, परंतु सद्गुरु की प्राप्ति दुर्लभ है।'),
      en: 'If you find the Satguru, you have found everything, and nothing more remains to be attained. If you do not find the Satguru, you have gained nothing, for parents, sons, and relatives are found in every home.'
    },
    contemplation: {
      hi: 'क्या मैं यह समझ पाया हूँ कि सतगुरु की प्राप्ति ही इस जीवन की सबसे बड़ी और अंतिम उपलब्धि है?',
      pb: devanagariToGurmukhi('क्या मैं यह समझ पाया हूँ कि सतगुरु की प्राप्ति ही इस जीवन की सबसे बड़ी और अंतिम उपलब्धि है?'),
      en: 'Do I realize that attaining the Satguru is the greatest and ultimate achievement of this life?'
    },
    practicalApplication: {
      hi: 'सांसारिक रिश्तों से ऊपर उठकर सतगुरु की पावन प्राप्ति को अपने जीवन का सर्वोपरि लक्ष्य बनाएं।',
      pb: devanagariToGurmukhi('सांसारिक रिश्तों से ऊपर उठकर सतगुरु की पावन प्राप्ति को अपने जीवन का सर्वोपरि लक्ष्य बनाएं।'),
      en: 'Rise above worldly relationships and make finding the Satguru the supreme goal of your existence.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके मिलने से मेरा जीवन धन्य हो गया है। अब मुझे संसार की और कोई चाह नहीं है।',
      pb: devanagariToGurmukhi('हे सतगुरु! आपके मिलने से मेरा जीवन धन्य हो गया है। अब मुझे संसार की और कोई चाह नहीं है।'),
      en: 'O Satguru! My life is blessed by meeting You. I have no other worldly desire left.'
    },
    spiritualEssence: {
      hi: 'सतगुरु की प्राप्ति ही समस्त पावन उपलब्धियों का सार है, इसके बिना सब कुछ अधूरा है।',
      pb: devanagariToGurmukhi('सतगुरु की प्राप्ति ही समस्त पावन उपलब्धियों का सार है, इसके बिना सब कुछ अधूरा है।'),
      en: 'Attaining the Satguru is the essence of all spiritual achievements; without Him, all else is empty.'
    }
  }
];
