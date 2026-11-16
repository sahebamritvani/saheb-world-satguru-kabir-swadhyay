import { Language } from '../types';

export interface ChintanSeed {
  id: string;
  dayNumber: number;
  category: 'vivek' | 'surati' | 'man-nigrah' | 'sakshi' | 'sahaj-samadhi' | 'prem-samarpan' | 'amaratva' | 'anahat-naad' | 'paropkar';
  categoryTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  title: {
    hi: string;
    pb: string;
    en: string;
  };
  verse: {
    hi: string;
    pb: string;
    en: string;
  };
  coreTeaching: {
    hi: string;
    pb: string;
    en: string;
  };
  contemplationEssence: {
    hi: string;
    pb: string;
    en: string;
  };
  inquiryQuestions: {
    hi: string[];
    pb: string[];
    en: string[];
  };
  sadhanaSankalp: {
    hi: string;
    pb: string;
    en: string;
  };
  meditationGuide: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const DAINIK_CHINTAN_LIST: ChintanSeed[] = [
  {
    id: 'chintan-1',
    dayNumber: 1,
    category: 'sahaj-samadhi',
    categoryTitle: {
      hi: 'सहज समाधि चिंतन',
      pb: 'ਸਹਿਜ ਸਮਾਧੀ ਚਿੰਤਨ',
      en: 'Natural Equanimity (Sahaj Samadhi)'
    },
    title: {
      hi: 'साधो, सहज समाधि भली',
      pb: 'ਸਾਧੋ, ਸਹਿਜ ਸਮਾਧੀ ਭਲੀ',
      en: 'The Natural State of Effortless Meditation'
    },
    verse: {
      hi: 'साधो सहज समाधि भली।\nगुरु प्रताप जा दिन से जागी, दिन-दिन अधिक चली।।\nजहं-जहं डोलौं सो परिकरमा जो कछु करौं सो सेवा।\nजब सोवौं तब करौं दंडवत, पूजौं और न देवा।।\nकहौं सो नाम सुनौं सो सुमिरन, खावं पियौं सो पूजा।\nगिरह उजाड़ एक सम लेखौं, भाव मिटावौं दूजा।।\nआंख न मूंदौं कान न रूंधौं, तनिक कष्ट नहिं धारौं।\nखुले नैन पहिचानौं हंसि-हंसि, सुंदर रूप निहारौं।\nशबद निरंतर से मन लागा, मलिन वासना त्यागी।\nऊठत बैठत कबहुं न छूटै, ऐसी तारी लागी।।\nकह कबीर यह उनमनि रहनी, सो परगट करि गाई।\nदुख सुख से कोई परे परमपद, तेहि पद रहा समाई।।\n  साधो सहज समाधि भली।',
      pb: 'ਸਾਧੋ ਸਹਿਜ ਸਮਾਧੀ ਭਲੀ।\nਗੁਰੂ ਪ੍ਰਤਾਪ ਜਾ ਦਿਨ ਸੇ ਜਾਗੀ, ਦਿਨ-ਦਿਨ ਅਧਿਕ ਚਲੀ।।\nਜਹੰ-ਜਹੰ ਡੋਲੌਂ ਸੋ ਪਰਿਕਰਮਾ ਜੋ ਕਛੁ ਕਰੌਂ ਸੋ ਸੇਵਾ।\nਜਬ ਸੋਵੌਂ ਤਬ ਕਰੌਂ ਡੰਡਵਤ, ਪੂਜੌਂ ਔਰ ਨ ਦੇਵਾ।।\nਕਹੌਂ ਸੋ ਨਾਮ ਸੁਨੌਂ ਸੋ ਸੁਮਿਰਨ, ਖਾਵੰ ਪਿਯੌਂ ਸੋ ਪੂਜਾ।\nਗਿਰਹ ਉਜਾੜ ਏਕ ਸਮ ਲੇਖੌਂ, ਭਾਵ ਮਿਟਾਵੌਂ ਦੂਜਾ।।\nਆਂਖ ਨ ਮੂੰਦੌਂ ਕਾਨ ਨ ਰੂੰਧੌਂ, ਤਨਿਕ ਕਸ਼ਟ ਨਹਿਂ ਧਾਰੌਂ।\nਖੁਲੇ ਨੈਨ ਪਹਿਚਾਨੌਂ ਹੰਸਿ-ਹੰਸਿ, ਸੁੰਦਰ ਰੂਪ ਨਿਹਾਰੌਂ।\nਸ਼ਬਦ ਨਿਰੰਤਰ ਸੇ ਮਨ ਲਾਗਾ, ਮਲਿਨ ਵਾਸਨਾ ਤ੍ਯਾਗੀ।\nਊਠਤ ਬੈਠਤ ਕਬਹੁੰ ਨ ਛੂਟੈ, ਐਸੀ ਤਾਰੀ ਲਾਗੀ।।\nਕਹ ਕਬੀਰ ਯਹ ਉਨਮਨਿ ਰਹਨੀ, ਸੋ ਪਰਗਟ ਕਰਿ ਗਾਈ।\nਦੁਖ ਸੁਖ ਸੇ ਕੋਈ ਪਰੇ ਪਰਮਪਦ, ਤੇਹਿ ਪਦ ਰਹਾ ਸਮਾਈ।।\n  ਸਾਧੋ ਸਹਿਜ ਸਮਾਧੀ ਭਲੀ।',
      en: 'O seeker, sublime is the natural state of Sahaj Samadhi;\nEver since it awakened by Satguru’s grace, it deepens day by day.\nWherever I walk is holy circumambulation; whatever I do is sacred service.\nWhen I sleep, it is prostration in surrender; I worship no lesser gods or deities.\nWhatever I speak is the Holy Name; whatever I hear is remembrance; eating and drinking is worship.\nHome and forest wilderness I behold as one, eliminating all illusions of duality.\nI close not my eyes, nor shut my ears; I inflict no torment on the body.\nWith wide-open eyes and joy in my heart, I behold and adore the Divine in all.\nMy consciousness is attuned to the unbroken Word (Shabd); all worldly craving is shed.\nRising or sitting, this communion never breaks; such an eternal unshakeable absorption is struck!\nSays Satguru Kabir, this transcendent Unmani state I have openly sung;\nBeyond all joys and sorrows lies the Supreme Abode, and in that Realm my soul is merged.\n  O seeker, sublime is the natural state of Sahaj Samadhi.'
    },
    coreTeaching: {
      hi: 'सतगुरु कबीर साहेब जी फरमाते हैं कि सच्ची समाधि शरीर को कष्ट देने या आँख-कान बंद करने में नहीं, बल्कि संसार में रहते हुए हर कर्म को सतगुरु की सेवा और हर पल को साक्षात पूजा बना लेने में है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸੱਚੀ ਸਮਾਧੀ ਸਰੀਰ ਨੂੰ ਕਸ਼ਟ ਦੇਣ ਵਿਚ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਕੰਮ ਨੂੰ ਸਤਿਗੁਰੂ ਦੀ ਸੇਵਾ ਅਤੇ ਹਰ ਪਲ ਨੂੰ ਪੂਜਾ ਬਣਾ ਲੈਣ ਵਿਚ ਹੈ।',
      en: 'Satguru Kabir Saheb reveals that true Samadhi is not in punishing the physical body or fleeing the world, but in transforming every action into divine service and living continuously in God-consciousness.'
    },
    contemplationEssence: {
      hi: 'सतगुरु कबीर साहेब कहते हैं कि जब सुरति अखंड शब्द (सत्यनाम) से जुड़ जाती है, तो चलना परिक्रमा, बोलना नाम-जप, सोना दंडवत और खाना-पीना साक्षात पूजा बन जाता है। द्वैत का भाव मिट जाता है और साधक खुले नेत्रों से हर घट में प्रियतम साहेब का दीदार करते हुए सुख-दुःख से परे परमपद (उन्मनी अवस्था) में सदा के लिए लीन हो जाता है।',
      pb: 'ਜਦੋਂ ਸੁਰਤ ਸ਼ਬਦ ਨਾਲ ਜੁੜ ਜਾਂਦੀ ਹੈ, ਤੁਰਨਾ ਪਰਿਕਰਮਾ, ਬੋਲਣਾ ਸਿਮਰਨ ਅਤੇ ਖਾਣਾ ਪੀਣਾ ਪੂਜਾ ਬਣ ਜਾਂਦਾ ਹੈ। ਖੁੱਲ੍ਹੀਆਂ ਅੱਖਾਂ ਨਾਲ ਹਰ ਥਾਂ ਸਤਿਗੁਰੂ ਦਾ ਦੀਦਾਰ ਹੁੰਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb teaches that when inner consciousness unites with the eternal Shabd (Word), walking becomes pilgrimage, speech becomes hymn, sleep becomes surrender, and eating becomes holy communion. Duality vanishes, and with open eyes one beholds the Beloved in all, resting forever in the Supreme Unmani State.'
    },
    inquiryQuestions: {
      hi: [
        'क्या मैं अपने दैनिक कार्यों को बोझ समझकर करता हूँ, या सतगुरु साहेब की सेवा मानकर?',
        'क्या मेरी साधना केवल पूजा स्थल तक सीमित है या जीवन के हर क्षण में बहती है?',
        'आज के कर्मों में मैंने कितनी शांति, प्रेम और आनंद का अनुभव किया?'
      ],
      pb: [
        'ਕੀ ਮੈਂ ਆਪਣੇ ਕੰਮਾਂ ਨੂੰ ਬੋਝ ਸਮਝਦਾ ਹਾਂ ਜਾਂ ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਦੀ ਸੇਵਾ?',
        'ਕੀ ਮੇਰੀ ਸਾਧਨਾ ਸਿਰਫ ਪੂਜਾ ਰੂਮ ਤੱਕ ਹੈ ਜਾਂ ਹਰ ਪਲ ਵਿਚ ਹੈ?',
        'ਅੱਜ ਦੇ ਕੰਮਾਂ ਵਿਚ ਕਿੰਨੀ ਸ਼ਾਂਤੀ ਮਿਲੀ?'
      ],
      en: [
        'Do I perform my daily duties as a stressful chore, or as sacred devotional service to Satguru Saheb?',
        'Is my spiritual practice restricted to an altar, or infused into every waking moment?',
        'How much tranquility, love, and cheerfulness did I bring into my actions today?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं भोजन पकाने, काम करने और परिवार के साथ रहने को भी सतगुरु कबीर साहेब की प्रत्यक्ष पूजा मानकर करूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ਹਰ ਕੰਮ ਨੂੰ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪੂਜਾ ਮੰਨ ਕੇ ਕਰਾਂਗਾ।',
      en: 'Today, whether preparing food, working, or being with loved ones, I will perform every act as an offering to Satguru Kabir Saheb.'
    },
    meditationGuide: {
      hi: 'आँखें खुली रखें या बंद। अपने भीतर गहरी शांति का अनुभव करें। जो भी आवाज़ें आ रही हैं, उन्हें विरोध किए बिना इस ब्रह्मांडीय संगीत का हिस्सा मानें।',
      pb: 'ਅੰਦਰਲੀ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕਰੋ। ਜੋ ਵੀ ਆਵਾਜ਼ਾਂ ਸੁਣਾਈ ਦੇਣ, ਉਨ੍ਹਾਂ ਨੂੰ ਸ਼ਾਂਤੀ ਨਾਲ ਸਵੀਕਾਰ ਕਰੋ।',
      en: 'Rest in wide-open, effortless awareness. Allow all sounds and sensations to arise and dissolve without resistance.'
    }
  },
  {
    id: 'chintan-das-sutra',
    dayNumber: 2,
    category: 'vivek',
    categoryTitle: {
      hi: '१० सत्य वचन सूत्र चिंतन',
      pb: '੧੦ ਸਤਯ ਵਚਨ ਸੂਤਰ ਚਿੰਤਨ',
      en: '10 Divine Truth Sutras'
    },
    title: {
      hi: '१० सत्य वचन सूत्र (भावार्थ व गहराई से विश्लेषण)',
      pb: '੧੦ ਸਤਯ ਵਚਨ ਸੂਤਰ (ਗੂੜ੍ਹ ਅਰਥ ਤੇ ਵਿਸ਼ਲੇਸ਼ਣ)',
      en: '10 Eternal Truth Sutras (Deep Spiritual Analysis)'
    },
    verse: {
      hi: '🌹।।सत्यनाम।।🌹\n\n१. जीवन से भागो नहीं, जीवन में जागो।\n२. ईश्वर को मानो नहीं, ईश्वर को जानो।\n३. भक्ति को करो नहीं, स्वयं (खुद) को पहचानो।\n४. अपने को बाहर नहीं, अपने को भीतर खोजो।\n५. ईश्वर से नहीं, अपने कर्मों से डरो।\n६. अंधकार से डरो नहीं, अंधकार से लड़ो।\n७. चित्त में चिंता नहीं, चित्त में चिंतन करो।\n८. मन से हारो नहीं, मन में नमन व मनन करो।\n९. भरोसा दूसरों पर नहीं, भरोसा स्वयं पर करो।\n१०. स्वयं को गुरुर में नहीं, स्वयं को सरूर में रखो।\n\n।। साहेब बंदगी साहेब।।🙏',
      pb: '🌹।।ਸਤਯਨਾਮ।।🌹\n\n੧. ਜੀਵਨ ਤੋਂ ਭੱਜੋ ਨਹੀਂ, ਜੀਵਨ ਵਿੱਚ ਜਾਗੋ।\n੨. ਰੱਬ ਨੂੰ ਕੇਵਲ ਮੰਨੋ ਨਹੀਂ, ਰੱਬ ਨੂੰ ਜਾਣੋ ਤੇ ਅਨੁਭਵ ਕਰੋ।\n੩. ਭਗਤੀ ਨੂੰ ਸਿਰਫ਼ ਕਰੋ ਨਹੀਂ, ਆਪਣੇ ਆਪ (ਖ਼ੁਦ) ਨੂੰ ਪਛਾਣੋ।\n੪. ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਹਰ ਨਹੀਂ, ਅੰਦਰ ਖੋਜੋ।\n੫. ਰੱਬ ਤੋਂ ਨਹੀਂ, ਆਪਣੇ ਕਰਮਾਂ ਤੋਂ ਡਰੋ।\n੬. ਹਨੇਰੇ ਤੋਂ ਡਰੋ ਨਹੀਂ, ਹਨੇਰੇ ਨਾਲ ਲੜੋ।\n੭. ਮਨ ਵਿੱਚ ਚਿੰਤਾ ਨਹੀਂ, ਚਿੱਤ ਵਿੱਚ ਚਿੰਤਨ ਕਰੋ।\n੮. ਮਨ ਤੋਂ ਹਾਰੋ ਨਹੀਂ, ਮਨ ਵਿੱਚ ਨਮਨ ਤੇ ਮੰਨਨ ਕਰੋ।\n੯. ਭਰੋਸਾ ਦੂਜਿਆਂ ਤੇ ਨਹੀਂ, ਭਰੋਸਾ ਆਪਣੇ ਆਪ ਤੇ ਕਰੋ।\n੧੦. ਆਪਣੇ ਆਪ ਨੂੰ ਗੁਰੂਰ (ਹੰਕਾਰ) ਵਿੱਚ ਨਹੀਂ, ਸਤਿਗੁਰੂ ਦੇ ਸਰੂਰ ਵਿੱਚ ਰੱਖੋ।\n\n।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।🙏',
      en: '🌹।।Satyanaam।।🌹\n\n1. Do not flee from life, awaken within life.\n2. Do not blindly believe God, know and experience God.\n3. Do not reduce devotion to ritual, realize your true Inner Self.\n4. Do not search for Truth outside, seek within your heart.\n5. Do not fear God, fear bad karma and wrong deeds.\n6. Do not fear darkness, ignite wisdom and fight it.\n7. Keep no anxiety in mind, engage in divine contemplation.\n8. Do not surrender to mental weakness: bow in humility and reflect deeply.\n9. Do not depend on others, cultivate self-reliance.\n10. Dwell not in ego (gurur), rest in divine intoxication & humility (saroor).\n\n।। Saheb Bandagi Saheb ।।🙏'
    },
    coreTeaching: {
      hi: 'सतगुरु कबीर साहेब के यह १० सत्य वचन जीवन-रूपांतरण के सर्वोच्च सूत्र हैं। यह अंधविश्वास से विवेक, कर्मकाण्ड से आत्मज्ञान, और चिंताओं से सहज सरूर की ओर ले जाने वाली अमर साधना-यात्रा हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਇਹ ੧੦ ਸਤਯ ਵਚਨ ਆਤਮ-ਜਾਗ੍ਰਿਤੀ ਦੇ ਮਹਾਨ ਸੂਤਰ ਹਨ ਜੋ ਮਨੁੱਖ ਨੂੰ ਭਟਕਣਾ ਤੋਂ ਬਚਾ ਕੇ ਆਤਮ-ਗਿਆਨ ਵੱਲ ਲੈ ਜਾਂਦੇ ਹਨ।',
      en: 'These 10 Divine Truth Sutras derived from Satguru Kabir Saheb’s core wisdom serve as a powerful blueprint for self-realization, transforming anxiety into contemplation and ego into spiritual bliss.'
    },
    contemplationEssence: {
      hi: 'इन १० सूत्रों का क्रमबद्ध विश्लेषण दर्शाता है: १-२ पंक्तियाँ (जागृति व सत्य-बोध), ३-५ पंक्तियाँ (आत्मज्ञान व निष्काम कर्म की जिम्मेदारी), ६-८ पंक्तियाँ (साहस, चिंतन, नमन व मनन), ९-१० पंक्तियाँ (आत्मविश्वास व सहज गुरु-सरूर)। जब मन हारने लगे तो अहंकार छोड़कर नमन और मनन करें, यही जीवन-सुधार का सच्चा रहस्य है।',
      pb: 'ਇਹ ੧੦ ਸੂਤਰ ਮਨੁੱਖ ਨੂੰ ਹਰ ਹਾਲਾਤ ਵਿਚ ਸ਼ਾਂਤ, ਨਿਡਰ ਅਤੇ ਸਤਿਗੁਰੂ ਦੀ ਰਹਿਮਤ ਵਿਚ ਲੀਨ ਰਹਿਣ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੇ ਹਨ।',
      en: 'Sequential spiritual progression: Sutras 1-2 guide awakening and direct experience; 3-5 establish self-inquiry and karma responsibility; 6-8 instill courage, contemplation, and humility; 9-10 cultivate self-reliance and divine intoxication.'
    },
    inquiryQuestions: {
      hi: [
        'क्या मैं जीवन की परिस्थितियों से भाग रहा हूँ या उनमें जागकर साहेब का विधान स्वीकार कर रहा हूँ?',
        'जब मन में निराशा या डर आता है, तो क्या मैं मन से हार जाता हूँ या नमन व मनन करके समाधान खोजता हूँ?',
        'क्या मेरा जीवन अहंकार (गुरुर) में बीत रहा है या सतगुरु-नाम के सहज सरूर व आनंद में?'
      ],
      pb: [
        'ਕੀ ਮੈਂ ਹਾਲਾਤਾਂ ਤੋਂ ਭੱਜ ਰਿਹਾ ਹਾਂ ਜਾਂ ਜਾਗ ਕੇ ਸਾਹੇਬ ਦਾ ਭਾਣਾ ਮੰਨ ਰਿਹਾ ਹਾਂ?',
        'ਜਦੋਂ ਮਨ ਡੋਲਦਾ ਹੈ, ਕੀ ਮੈਂ ਨਮਨ ਤੇ ਮੰਨਨ ਕਰਦਾ ਹਾਂ?',
        'ਕੀ ਮੈਂ ਹਉਮੈ (ਗੁਰੁਰ) ਵਿਚ ਹਾਂ ਜਾਂ ਸਤਿਗੁਰੂ ਦੇ ਅਮ੍ਰਿਤ ਸਰੂਰ ਵਿਚ?'
      ],
      en: [
        'Am I fleeing life’s challenges or awakening to divine purpose within them?',
        'When mental turmoil strikes, do I collapse or pause to practice humility (naman) and contemplation (manan)?',
        'Am I living in egoistic pride (gurur) or resting in the sweet ecstasy of Satguru’s presence (saroor)?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं हर परिस्थिति में चिंता त्यागकर चिंतन करूँगा, दूसरों पर निर्भरता छोड़ स्वयं पर भरोसा रखूँगा, और गुरुर मिटाकर साहेब के सरूर में रहूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ਚਿੰਤਾ ਛੱਡ ਕੇ ਚਿੰਤਨ ਕਰਾਂਗਾ ਅਤੇ ਹਉਮੈ ਮਿਟਾ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਰੰਗ ਵਿਚ ਰਹਾਂਗਾ।',
      en: 'Today I will replace anxiety with contemplation, cultivate unshakable self-trust, and dissolve ego in divine joy.'
    },
    meditationGuide: {
      hi: 'शांत बैठें। इन १० सूत्रों का मन ही मन आवर्तन करें। सांस भरते समय "जागो व जानो" और सांस छोड़ते समय "नमन व सरूर" का अनुभव करें।',
      pb: 'ਸ਼ਾਂਤ ਬੈਠੋ। ਇਹਨਾਂ ੧੦ ਵਚਨਾਂ ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Sit in quiet reflection. Repeat these 10 Sutras mentally. Inhale "Awaken & Know", exhale "Humility & Divine Ecstasy".'
    }
  },
  {
    id: 'chintan-2',
    dayNumber: 2,
    category: 'sakshi',
    categoryTitle: {
      hi: 'साक्षी भाव चिंतन',
      pb: 'ਸਾਖੀ ਭਾਵ ਚਿੰਤਨ',
      en: 'Witness Consciousness'
    },
    title: {
      hi: 'मन के दृष्टा बनें, भोक्ता नहीं',
      pb: 'ਮਨ ਦੇ ਦ੍ਰਿਸ਼ਟਾ ਬਣੋ, ਭੋਗਤਾ ਨਹੀਂ',
      en: 'Be the Observer of Mind, Not the Indulger'
    },
    verse: {
      hi: 'कबीर मन पंछी भया, जहां मन तहां उड़ि जाय।\nजो जैसी संगति करै, सो तैसा फल पाय।।',
      pb: 'ਕਬੀਰ ਮਨ ਪੰਛੀ ਭਇਆ, ਜਹਾਂ ਮਨ ਤਹਾਂ ਉਡਿ ਜਾਇ।\nਜੋ ਜੈਸੀ ਸੰਗਤਿ ਕਰੈ, ਸੋ ਤੈਸਾ ਫਲ ਪਾਇ।।',
      en: 'Kabir, the mind is like a wild bird, flying in all directions;\nWhichever company it keeps, accordingly it reaps the fruit.'
    },
    coreTeaching: {
      hi: 'मन के विचारों से अपनी पहचान न जोड़ें; विचारों को आकाश में तैरते बादलों की भांति केवल साक्षी भाव से देखें।',
      pb: 'ਮਨ ਦੇ ਵਿਚਾਰਾਂ ਨਾਲ ਆਪਣੀ ਪਛਾਣ ਨਾ ਜੋੜੋ; ਵਿਚਾਰਾਂ ਨੂੰ ਆਕਾਸ਼ ਵਿਚ ਤੈਰਦੇ ਬੱਦਲਾਂ ਵਾਂਗ ਸਿਰਫ ਦੇਖੋ।',
      en: 'Do not attach your identity to mental thoughts; witness thoughts passing by like clouds in the open sky.'
    },
    contemplationEssence: {
      hi: 'जब भी क्रोध, चिंता या व्यग्रता उठे, तुरंत १ मिनट के लिए शांत होकर स्वयं से पूछें: "इस विचार को देखने वाला चेतन कौन है?" जो देख रहा है, वही आपका शाश्वत स्वरूप (साक्षी) है। विचार आते-जाते हैं, साक्षी सदा अचल रहता है।',
      pb: 'ਜਦੋਂ ਵੀ ਕ੍ਰੋਧ ਜਾਂ ਚਿੰਤਾ ਉੱਠੇ, ੧ ਮਿੰਟ ਸ਼ਾਂਤ ਹੋ ਕੇ ਪੁੱਛੋ: "ਇਸ ਵਿਚਾਰ ਨੂੰ ਦੇਖਣ ਵਾਲਾ ਚੇਤਨ ਕੌਣ ਹੈ?" ਜੋ ਦੇਖ ਰਿਹਾ ਹੈ, ਉਹੀ ਤੁਹਾਡਾ ਸੱਚਾ ਸਵਰੂਪ ਹੈ।',
      en: 'Whenever anger or anxiety arises, pause for 1 minute and contemplate: "Who is the conscious one observing this thought?" The witness is your true immortal self.'
    },
    inquiryQuestions: {
      hi: [
        'आज दिनभर में कौन से विचार या भावनाएं मुझे सबसे अधिक विचलित कर रही हैं?',
        'क्या मैं मन के सुख-दुःख के साथ बह जाता हूँ, या शांत रहकर उसे देख पाता हूँ?',
        'यदि मैं मन की तरंगों से परे साक्षी हूँ, तो भय का क्या औचित्य है?'
      ],
      pb: [
        'ਅੱਜ ਦਿਨ ਵਿੱਚ ਕਿਹੜੇ ਵਿਚਾਰ ਮੈਨੂੰ ਸਭ ਤੋਂ ਵੱਧ ਪਰੇਸ਼ਾਨ ਕਰ ਰਹੇ ਹਨ?',
        'ਕੀ ਮੈਂ ਮਨ ਦੇ ਸੁੱਖ-ਦੁੱਖ ਨਾਲ ਵਹਿ ਜਾਂਦਾ ਹਾਂ, ਜਾਂ ਸ਼ਾਂਤ ਰਹਿ ਕੇ ਦੇਖਦਾ ਹਾਂ?',
        'ਜੇਕਰ ਮੈਂ ਵਿਚਾਰਾਂ ਤੋਂ ਪਰੇ ਸਾਖੀ ਹਾਂ, ਤਾਂ ਡਰ ਦਾ ਕੀ ਕਾਰਨ ਹੈ?'
      ],
      en: [
        'Which restless thoughts or worries attempted to distract me today?',
        'Did I react impulsively to mind storms, or maintain centered awareness?',
        'If I am the eternal witness beyond thoughts, why should I harbor fear?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं हर २ घंटे में १ मिनट के लिए अपनी श्वास और विचारों को बिना किसी निर्णय के साक्षी भाव से देखूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ਹਰ ੨ ਘੰਟੇ ਬਾਅਦ ੧ ਮਿੰਟ ਲਈ ਸੁਆਸਾਂ ਅਤੇ ਵਿਚਾਰਾਂ ਨੂੰ ਸਾਖੀ ਭਾਵ ਨਾਲ ਦੇਖਾਂਗਾ।',
      en: 'Today, every 2 hours, I will pause for 1 minute to observe my breath and thoughts with non-judgmental witness awareness.'
    },
    meditationGuide: {
      hi: 'नेत्र बंद करें। श्वास के आने-जाने को देखें। मन में जो भी विचार आए, उससे लड़े नहीं; केवल कहें - "मैं यह विचार नहीं, मैं इसे जानने वाला प्रकाश हूँ।"',
      pb: 'ਅੱਖਾਂ ਬੰਦ ਕਰੋ। ਸੁਆਸਾਂ ਨੂੰ ਦੇਖੋ। ਵਿਚਾਰਾਂ ਨਾਲ ਲੜੋ ਨਾ; ਕਹੋ - "ਮੈਂ ਇਹ ਵਿਚਾਰ ਨਹੀਂ, ਮੈਂ ਇਸ ਨੂੰ ਜਾਣਨ ਵਾਲਾ ਪ੍ਰਕਾਸ਼ ਹਾਂ।"',
      en: 'Close your eyes. Observe the incoming and outgoing breath. Do not fight thoughts; gently affirm: "I am not this thought; I am the light that perceives it."'
    }
  },
  {
    id: 'chintan-2',
    dayNumber: 2,
    category: 'vivek',
    categoryTitle: {
      hi: 'विवेक चिंतन (सार-असार पारख)',
      pb: 'ਵਿਵੇਕ ਚਿੰਤਨ (ਸਾਰ-ਅਸਾਰ ਪਰਖ)',
      en: 'Discrimination of Truth'
    },
    title: {
      hi: 'हंस जैसी पारखी दृष्टि अपनाएं',
      pb: 'ਹੰਸ ਵਰਗੀ ਪਾਰਖੀ ਦ੍ਰਿਸ਼ਟੀ ਅਪਣਾਓ',
      en: 'Cultivate the Discerning Vision of the Swan'
    },
    verse: {
      hi: 'साधु ऐसा चाहिए, जैसा सूप सुभाय।\nसार-सार को गहि रहै, थोथा देइ उड़ाय।।',
      pb: 'ਸਾਧੂ ਐਸਾ ਚਾਹੀਏ, ਜੈਸਾ ਸੂਪ ਸੁਭਾਇ।\nਸਾਰ-ਸਾਰ ਕੋ ਗਹਿ ਰਹੈ, ਥੋਥਾ ਦੇਇ ਉੜਾਇ।।',
      en: 'A seeker should be like a winnowing basket in disposition;\nRetaining the solid grain of truth, discarding the empty chaff.'
    },
    coreTeaching: {
      hi: 'संसार में प्रशंसा, निंदा, लाभ, हानि के बीच केवल सत्य और परमात्मा के सार तत्व को ग्रहण करें; व्यर्थ बातों को मन से उड़ा दें।',
      pb: 'ਸੰਸਾਰ ਵਿਚ ਨਿੰਦਾ-ਉਸਤਤ ਵਿੱਚੋਂ ਕੇਵਲ ਸੱਚ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰੋ; ਵਿਅਰਥ ਗੱਲਾਂ ਨੂੰ ਮਨ ਵਿੱਚੋਂ ਕੱਢ ਦਿਓ।',
      en: 'Amid worldly praise, blame, profit, and loss, extract only pure truth; let all frivolous debris blow away.'
    },
    contemplationEssence: {
      hi: 'सूप केवल अनाज को रखता है और भूसे को उड़ा देता है। हमारा मन अक्सर उलटा करता है—दूसरों की त्रुटियों और व्यर्थ बातों को पकड़कर बैठ जाता है और आत्म-कल्याण के सार को भुला देता है। विवेक का अर्थ है—सत्य को चुनना और असत्य को छोड़ना।',
      pb: 'ਸਾਡਾ ਮਨ ਅਕਸਰ ਦੂਜਿਆਂ ਦੀਆਂ ਕਮੀਆਂ ਨੂੰ ਫੜ ਲੈਂਦਾ ਹੈ। ਵਿਵੇਕ ਦਾ ਅਰਥ ਹੈ ਸੱਚ ਨੂੰ ਚੁਣਨਾ ਅਤੇ ਵਿਅਰਥ ਨੂੰ ਛੱਡ ਦੇਣਾ।',
      en: 'The mind often clings to trivial flaws and grievances while discarding spiritual treasure. True Vivek is choosing the eternal substance over ephemeral drama.'
    },
    inquiryQuestions: {
      hi: [
        'आज मैंने कितना समय व्यर्थ की बातों, गपशप या नकारात्मक चिंतन में गंवाया?',
        'क्या मैं दूसरों के अवगुण देखने में व्यस्त हूँ, या अपने अंतर्मन को सुधार रहा हूँ?',
        'आज के दिन का सबसे मूल्यवान आध्यात्मिक सार क्या था जो मुझे जीवनभर याद रखना चाहिए?'
      ],
      pb: [
        'ਅੱਜ ਮੈਂ ਕਿੰਨਾ ਸਮਾਂ ਵਿਅਰਥ ਗੱਲਾਂ ਜਾਂ ਨਕਾਰਾਤਮਕ ਸੋਚ ਵਿੱਚ ਗੁਆਇਆ?',
        'ਕੀ ਮੈਂ ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਦੇਖ ਰਿਹਾ ਹਾਂ ਜਾਂ ਆਪਣੇ ਅੰਦਰ ਨੂੰ ਸੁਧਾਰ ਰਿਹਾ ਹਾਂ?',
        'ਅੱਜ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਆਤਮਿਕ ਸਬਕ ਕੀ ਸੀ?'
      ],
      en: [
        'How much precious time did I spend today on fruitless gossip or idle rumination?',
        'Am I occupied inspecting the faults of others, or purifying my own inner vessel?',
        'What is the core spiritual essence of today that will uplift my consciousness?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज किसी की भी निंदा या व्यर्थ चर्चा में भाग नहीं लूँगा। जहां भी असार बातचीत होगी, मौन रहकर सत्यनाम स्मरण करूँगा।',
      pb: 'ਅੱਜ ਕਿਸੇ ਦੀ ਨਿੰਦਾ ਵਿਚ ਹਿੱਸਾ ਨਹੀਂ ਲਵਾਂਗਾ। ਮੌਨ ਰਹਿ ਕੇ ਸਤਯਨਾਮ ਦਾ ਜਾਪ ਕਰਾਂਗਾ।',
      en: 'Today I will refrain from gossip and criticism. In idle environments, I will maintain inner silence and remember Satnaam.'
    },
    meditationGuide: {
      hi: 'हृदय में विवेक का श्वेत दीप प्रज्वलित महसूस करें। सांस भरते समय "सत्य व सार" को अंदर लें, सांस छोड़ते समय "व्यर्थ व असत्य" को विसर्जित करें।',
      pb: 'ਹਿਰਦੇ ਵਿਚ ਵਿਵੇਕ ਦਾ ਦੀਵਾ ਜਗਾਓ। ਸੁਆਸ ਲੈਂਦੇ ਹੋਏ "ਸੱਚ" ਅੰਦਰ ਲਓ, ਛੱਡਦੇ ਹੋਏ "ਵਿਅਰਥ" ਨੂੰ ਵਿਸਰਜਿਤ ਕਰੋ।',
      en: 'Visualize the pure flame of discrimination shining within your heart. Inhale truth and purity; exhale trivialities and illusion.'
    }
  },
  {
    id: 'chintan-3',
    dayNumber: 3,
    category: 'prem-samarpan',
    categoryTitle: {
      hi: 'प्रेम व समर्पण चिंतन',
      pb: 'ਪ੍ਰੇਮ ਤੇ ਸਮਰਪਣ ਚਿੰਤਨ',
      en: 'Sacred Love & Surrender'
    },
    title: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, प्रेम का ढाई आखर',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪ੍ਰੇਮ ਦਾ ਢਾਈ ਅੱਖਰ',
      en: 'Beyond Scriptures: The Sacred Essence of Divine Love'
    },
    verse: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय।।',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ।।',
      en: 'Reading countless volumes, the world passed away, yet none attained wisdom;\nWhoever realizes the two and a half letters of Divine Love becomes truly wise.'
    },
    coreTeaching: {
      hi: 'शास्त्रों की केवल बौद्धिक जानकारी से अहंकार बढ़ता है; हृदय में जब गुरु और समस्त सृष्टि के प्रति निष्काम प्रेम जागेगा, तभी सच्चा बोध होगा।',
      pb: 'ਕੇਵਲ ਕਿਤਾਬੀ ਗਿਆਨ ਨਾਲ ਹਉਮੈ ਵਧਦੀ ਹੈ; ਹਿਰਦੇ ਵਿਚ ਪ੍ਰੇਮ ਜਾਗੇਗਾ ਤਾਂ ਹੀ ਸੱਚਾ ਬੋਧ ਹੋਵੇਗਾ।',
      en: 'Intellectual scholarship often bloats the ego; only when unconditioned love awakens towards the Satguru and all living beings does true illumination dawn.'
    },
    contemplationEssence: {
      hi: 'प्रेम का अर्थ केवल भावना नहीं, बल्कि अपने अहम् को मिटाकर परमात्मा और उसके बनाए जीवों की सेवा में स्वयं को समर्पित कर देना है। जहां "मैं" है, वहां प्रेम नहीं; जहां प्रेम है, वहां "मैं" विलीन हो जाता है।',
      pb: 'ਪ੍ਰੇਮ ਦਾ ਅਰਥ ਹੈ ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਮਿਟਾ ਕੇ ਸੇਵਾ ਵਿਚ ਲੱਗਣਾ। ਜਿੱਥੇ ਹਉਮੈ ਹੈ, ਉੱਥੇ ਪ੍ਰੇਮ ਨਹੀਂ।',
      en: 'Love is the surrender of the ego. Where "I" rules, divine love cannot dwell; where divine love blooms, the petty "I" dissolves.'
    },
    inquiryQuestions: {
      hi: [
        'क्या मेरा ज्ञान मुझे विनम्र बना रहा है या मेरे अंदर बौद्धिक अहंकार उत्पन्न कर रहा है?',
        'आज मैंने किसी से बात करते समय कितनी करुणा, मिठास और प्रेम का अनुभव किया?',
        'सद्गुरु के प्रति मेरा समर्पण कितना सच्चा और निःस्वार्थ है?'
      ],
      pb: [
        'ਕੀ ਮੇਰਾ ਗਿਆਨ ਮੈਨੂੰ ਨਿਮਰ ਬਣਾ ਰਿਹਾ ਹੈ ਜਾਂ ਹਉਮੈ ਪੈਦਾ ਕਰ ਰਿਹਾ ਹੈ?',
        'ਅੱਜ ਮੈਂ ਦੂਜਿਆਂ ਨਾਲ ਗੱਲ ਕਰਦੇ ਸਮੇਂ ਕਿੰਨਾ ਪ੍ਰੇਮ ਮਹਿਸੂਸ ਕੀਤਾ?',
        'ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਮੇਰਾ ਸਮਰਪਣ ਕਿੰਨਾ ਸੱਚਾ ਹੈ?'
      ],
      en: [
        'Is my spiritual knowledge making me genuinely humble, or fueling pride?',
        'How much compassion, sweetness, and patience did I extend to others today?',
        'Is my devotion to the Satguru unconditional and free from worldly bargaining?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं जिससे भी मिलूँगा, उसके भीतर बैठे चेतन आत्मा को प्रणाम मानकर मधुरता और करुणा से व्यवहार करूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ਹਰ ਕਿਸੇ ਨਾਲ ਮਿਠਾਸ ਅਤੇ ਦਇਆ ਨਾਲ ਪੇਸ਼ ਆਵਾਂਗਾ।',
      en: 'Today I will greet everyone with heartfelt gentleness, acknowledging the divine spark residing within every being.'
    },
    meditationGuide: {
      hi: 'अंगुष्ठ प्रमाण हृदय गुहा में असीम प्रेम और प्रकाश का ध्यान करें। यह प्रेम धीरे-धीरे समस्त ब्रह्मांड के सभी जीवों तक फैल रहा है।',
      pb: 'ਹਿਰਦੇ ਵਿਚ ਅਥਾਹ ਪ੍ਰੇਮ ਦਾ ਧਿਆਨ ਕਰੋ। ਇਹ ਪ੍ਰੇਮ ਸਾਰੀ ਸ੍ਰਿਸ਼ਟੀ ਵਿਚ ਫੈਲ ਰਿਹਾ ਹੈ।',
      en: 'Rest in the heart space. Feel waves of unconditional divine love expanding outwards, blessing the entire universe.'
    }
  },
  {
    id: 'chintan-4',
    dayNumber: 4,
    category: 'man-nigrah',
    categoryTitle: {
      hi: 'मन-निग्रह चिंतन',
      pb: 'ਮਨ-ਨਿਗ੍ਰਹਿ ਚਿੰਤਨ',
      en: 'Mastering the Mind'
    },
    title: {
      hi: 'मन को सुमिरन की लगाम दें',
      pb: 'ਮਨ ਨੂੰ ਸਿਮਰਨ ਦੀ ਲਗਾਮ ਦਿਓ',
      en: 'Reining the Restless Mind with Sacred Remembrance'
    },
    verse: {
      hi: 'माला फेरत जुग भया, फिरा न मन का फेर।\nकर का मनका डारि दे, मन का मनका फेर।।',
      pb: 'ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਇਆ, ਫਿਰਾ ਨ ਮਨ ਕਾ ਫੇਰ।\nਕਰ ਕਾ ਮਨਕਾ ਡਾਰਿ ਦੇ, ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ।।',
      en: 'Ages passed turning wooden beads, yet the wandering mind remained unchanged;\nDrop the outer bead from hand, rotate the inner bead of pure consciousness.'
    },
    coreTeaching: {
      hi: 'बाहरी माला घुमाने से मन एकाग्र नहीं होता; मन के अंतर्मन को सत्यनाम और सत्य विचार में रमाना ही सच्ची भक्ति है।',
      pb: 'ਬਾਹਰੀ ਮਾਲਾ ਨਾਲ ਮਨ ਨਹੀਂ ਰੁਕਦਾ; ਮਨ ਦੇ ਅੰਦਰ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨਾ ਹੀ ਸੱਚੀ ਭਗਤੀ ਹੈ।',
      en: 'Mere mechanical counting of beads cannot still the mind; anchoring inner attention in the living Word (Satnaam) is true devotion.'
    },
    contemplationEssence: {
      hi: 'हाथ माला फेर रहा हो और मन दुकान, घर या चिंताओं में भटक रहा हो तो वह केवल पाखंड है। जब श्वास-श्वास में नाम का तार जुड़ जाए और हर सांस में साहेब की उपस्थिति का स्मरण हो, वही "मन का मनका" फेरना है।',
      pb: 'ਜਦੋਂ ਹਰ ਸੁਆਸ ਵਿਚ ਸਤਿਗੁਰੂ ਦਾ ਸਿਮਰਨ ਹੋਵੇ, ਉਹੀ ਮਨ ਦਾ ਅਸਲੀ ਮਣਕਾ ਫੇਰਨਾ ਹੈ।',
      en: 'When the hands turn rosary beads while thoughts wander in worldly trades, it is self-deception. Constant remembrance on every in-breath and out-breath is the true inner rosary.'
    },
    inquiryQuestions: {
      hi: [
        'जब मैं पूजा या सिमरन में बैठता हूँ, तो मेरा मन वास्तव में कहाँ होता है?',
        'क्या मेरी भक्ति केवल बाहरी दिखावे तक सीमित है या अंतर्मन में रूपांतरण ला रही है?',
        'आज कितनी सांसों में मैंने परमात्मा का सच्चा विस्मरण या स्मरण किया?'
      ],
      pb: [
        'ਜਦੋਂ ਮੈਂ ਸਿਮਰਨ ਵਿਚ ਬੈਠਦਾ ਹਾਂ, ਤਾਂ ਮੇਰਾ ਮਨ ਕਿੱਥੇ ਭਟਕਦਾ ਹੈ?',
        'ਕੀ ਮੇਰੀ ਭਗਤੀ ਦਿਖਾਵਾ ਹੈ ਜਾਂ ਅੰਦਰੂਨੀ ਬਦਲਾਅ ਲਿਆ ਰਹੀ ਹੈ?',
        'ਅੱਜ ਕਿੰਨੀਆਂ ਸਵਾਸਾਂ ਵਿਚ ਸਤਯਨਾਮ ਯਾਦ ਰਿਹਾ?'
      ],
      en: [
        'During prayer or meditation, where does my mind actually wander?',
        'Is my spiritual practice an external ritual, or a deep inner transformation?',
        'How often today did I practice conscious breathing with Satnaam remembrance?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज कार्य करते समय भी हर १० मिनट में ३ गहरी सांसें लूँगा और मन ही मन "सत्यनाम साहेब" दोहराऊँगा।',
      pb: 'ਅੱਜ ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਹਰ ੧੦ ਮਿੰਟ ਬਾਅਦ "ਸਤਯਨਾਮ ਸਾਹੇਬ" ਦਾ ਅੰਦਰੂਨੀ ਜਾਪ ਕਰਾਂਗਾ।',
      en: 'Today, amidst daily duties, I will pause every 10 minutes for 3 conscious breaths, mentally echoing "Satnaam Saheb".'
    },
    meditationGuide: {
      hi: 'श्वास लेते समय मन में "सत्य" और छोड़ते समय "नाम" का मौन जप करें। मन के भटकते ही धीरे से श्वास पर वापस लौट आएं।',
      pb: 'ਸੁਆਸ ਲੈਂਦੇ ਸਮੇਂ "ਸਤਿ" ਅਤੇ ਛੱਡਦੇ ਸਮੇਂ "ਨਾਮ" ਦਾ ਧਿਆਨ ਕਰੋ।',
      en: 'Mentally vibrate "Sat" on the in-breath and "Naam" on the out-breath. Gently escort the wandering mind back to the breath.'
    }
  },
  {
    id: 'chintan-5',
    dayNumber: 5,
    category: 'anahat-naad',
    categoryTitle: {
      hi: 'अनाहद नाद व शब्द योग',
      pb: 'ਅਨਹਦ ਨਾਦ ਤੇ ਸ਼ਬਦ ਯੋਗ',
      en: 'Unstruck Melody & Shabd Yoga'
    },
    title: {
      hi: 'अनहद बाजा बाजै, सुख सागर में न्हावै',
      pb: 'ਅਨਹਦ ਵਾਜਾ ਵਾਜੈ, ਸੁਖ ਸਾਗਰ ਵਿਚ ਨ੍ਹਾਵੈ',
      en: 'The Celestial Unstruck Melody: Bathing in the Ocean of Bliss'
    },
    verse: {
      hi: 'गगन घटा घहराणी साधो, गगन घटा घहराणी।\nपूरब पश्चिम उत्तर दक्षिण, चहुं दिसि बरसै पाणी।।\nअविगत से एक धुन प्रगटी, अनहद बाजा बाजा।\nकहै कबीर सुनो भाई साधो, अमरलोक का राजा।।',
      pb: 'ਗਗਨ ਘਟਾ ਘਹਰਾਣੀ ਸਾਧੋ, ਗਗਨ ਘਟਾ ਘਹਰਾਣੀ।\nਪੂਰਬ ਪੱਛਮ ਉੱਤਰ ਦੱਖਣ, ਚਹੁੰ ਦਿਸਿ ਬਰਸੈ ਪਾਣੀ।।\nਅਵਿਗਤ ਸੇ ਏਕ ਧੁਨ ਪ੍ਰਗਟੀ, ਅਨਹਦ ਵਾਜਾ ਵਾਜਾ।\nਕਹੈ ਕਬੀਰ ਸੁਨੋ ਭਾਈ ਸਾਧੋ, ਅਮਰਲੋਕ ਕਾ ਰਾਜਾ।।',
      en: 'The divine clouds thunder in the inner sky, O seeker!\nFrom all four directions, the nectarous rain of grace descends.\nFrom the Formless Realm a divine resonance arises, the unstruck melody resounds;\nSays Satguru Kabir, listen O seekers, behold the Sovereign of the Eternal Realm!'
    },
    coreTeaching: {
      hi: 'सतगुरु कबीर साहेब जी फरमाते हैं कि अपने अंतराकाश में अनहद नाद और सत्यनाम की अखंड धुन को सुनें। यह दिव्य नाद मन को समस्त सांसारिक वासनाओं से मुक्त कर अमरलोक से जोड़ देता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਅੰਦਰਲੇ ਆਕਾਸ਼ ਵਿਚ ਅਨਹਦ ਨਾਦ ਸੁਣੋ। ਇਹ ਪਾਵਨ ਧੁਨ ਮਨ ਨੂੰ ਵਿਕਾਰਾਂ ਤੋਂ ਮੁਕਤ ਕਰਦੀ ਹੈ।',
      en: 'Satguru Kabir Saheb teaches us to listen to the ceaseless unstruck resonance (Anahat Naad) within the inner firmament, which frees the soul from worldly bondage.'
    },
    contemplationEssence: {
      hi: 'जब साधक अपने कान, आँख और मन को बाहरी प्रपंचों से समेटकर अंतर्मुख होता है, तो त्रिकुटी के पार अखंड नाद की गूंज सुनाई देती है। यह सत्यनाम का जीवंत स्पंदन है जो आत्मा को परमानंद में सराबोर कर देता है।',
      pb: 'ਜਦੋਂ ਧਿਆਨ ਅੰਦਰ ਟਿਕਦਾ ਹੈ, ਅਨਹਦ ਨਾਦ ਸੁਣਾਈ ਦਿੰਦਾ ਹੈ ਜੋ ਆਤਮਾ ਨੂੰ ਪਰਮਾਨੰਦ ਨਾਲ ਭਰ ਦਿੰਦਾ ਹੈ।',
      en: 'When attention is withdrawn from external senses into inner stillness, the celestial vibration of Satnaam resounds, bathing the soul in boundless divine ecstasy.'
    },
    inquiryQuestions: {
      hi: [
        'क्या मैं दिनभर बाहरी शोर में खोया रहता हूँ या अपने भीतर के मौन नाद को भी सुनता हूँ?',
        'सत्यनाम सुमिरन करते समय मेरी सुरति कितनी गहरी उतरती है?',
        'क्या मैंने कभी आंतरिक शांति और शब्द के स्पंदन का अनुभव किया है?'
      ],
      pb: [
        'ਕੀ ਮੈਂ ਬਾਹਰੀ ਸ਼ੋਰ ਵਿਚ ਗੁਆਚਿਆ ਰਹਿੰਦਾ ਹਾਂ ਜਾਂ ਅੰਦਰੂਨੀ ਮੌਨ ਸੁਣਦਾ ਹਾਂ?',
        'ਸਤਯਨਾਮ ਸਿਮਰਨ ਵਿਚ ਮੇਰਾ ਧਿਆਨ ਕਿੰਨਾ ਡੂੰਘਾ ਉਤਰਦਾ ਹੈ?',
        'ਕੀ ਮੈਂ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ ਕੀਤਾ ਹੈ?'
      ],
      en: [
        'Do I remain lost in outer noise, or do I pause to tune into inner silence?',
        'How deeply does my consciousness absorb into the sacred vibration of Satnaam?',
        'Have I tasted the serene bliss of the celestial inner resonance?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं १५ मिनट दोनों कान बंद करके अपने अंतर्मन में गूंज रहे सूक्ष्म सत्यनाम नाद को सुनने का अभ्यास करूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ੧੫ ਮਿੰਟ ਅੰਦਰਲੇ ਸੂਖਮ ਨਾਦ ਨੂੰ ਸੁਣਨ ਦਾ ਅਭਿਆਸ ਕਰਾਂਗਾ।',
      en: 'Today I will dedicate 15 minutes of silent meditation to gently listen to the subtle inner resonance of Satnaam.'
    },
    meditationGuide: {
      hi: 'शांत बैठें। रीढ़ सीधी रखें। कानों के भीतर आ रहे अत्यंत सूक्ष्म, मधुर नाद (झिंगुर, वीणा या घंटी जैसी ध्वनि) पर सुरति को एकाग्र करें।',
      pb: 'ਸ਼ਾਂਤ ਬੈਠੋ। ਕੰਨਾਂ ਦੇ ਅੰਦਰ ਆ ਰਹੀ ਸੂਖਮ ਧੁਨੀ ਤੇ ਧਿਆਨ ਟਿਕਾਓ।',
      en: 'Sit upright in silence. Gently focus your hearing faculty on the subtle, sweet inner sound resonating within the crown of the head.'
    }
  },
  {
    id: 'chintan-6',
    dayNumber: 6,
    category: 'amaratva',
    categoryTitle: {
      hi: 'मृत्यु बोध व अमरत्व चिंतन',
      pb: 'ਮੌਤ ਬੋਧ ਤੇ ਅਮਰਤਾ ਚਿੰਤਨ',
      en: 'Impermanence & Immortality'
    },
    title: {
      hi: 'पानी केरा बुदबुदा, अस मानुस की जात',
      pb: 'ਪਾਣੀ ਕੇਰਾ ਬੁਦਬੁਦਾ, ਅਸ ਮਾਨੁਸ ਕੀ ਜਾਤ',
      en: 'The Water Bubble: Awakened Awareness of Impermanence'
    },
    verse: {
      hi: 'पानी केरा बुदबुदा, अस मानुस की जात।\nएक दिना छिप जाएगा, ज्यों तारा परभात।।',
      pb: 'ਪਾਣੀ ਕੇਰਾ ਬੁਦਬੁਦਾ, ਅਸ ਮਾਨੁਸ ਕੀ ਜਾਤ।\nਇਕ ਦਿਨਾ ਛਿਪ ਜਾਏਗਾ, ਜਿਉਂ ਤਾਰਾ ਪਰਭਾਤ।।',
      en: 'Like a bubble upon the water, such is the ephemeral human life;\nOne day it will vanish from sight, like morning stars before the dawn.'
    },
    coreTeaching: {
      hi: 'यह शरीर और सांसारिक वैभव क्षणभंगुर है; मृत्यु का स्मरण मनुष्य को व्यर्थ के मोह, अभिमान और पाप कर्मों से मुक्त करता है।',
      pb: 'ਇਹ ਸਰੀਰ ਅਤੇ ਸੰਸਾਰ ਨਾਸ਼ਵਾਨ ਹੈ; ਮੌਤ ਦੀ ਯਾਦ ਮਨੁੱਖ ਨੂੰ ਹਉਮੈ ਅਤੇ ਪਾਪਾਂ ਤੋਂ ਬਚਾਉਂਦੀ ਹੈ।',
      en: 'This physical body is transient like a dewdrop; mindful awareness of impermanence frees the soul from false pride and greed.'
    },
    contemplationEssence: {
      hi: 'जो जन्म लेता है, उसका अंत निश्चित है। परंतु जो जान लेता है कि शरीर नश्वर है और आत्मा अमर चेतन सत्ता है, वह मृत्यु के भय से मुक्त होकर इसी जीवन में मुक्ति का अनुभव करता है। आज का दिन आपको अंतिम दिन समझकर जीना चाहिए।',
      pb: 'ਜੋ ਜਾਣ ਲੈਂਦਾ ਹੈ ਕਿ ਸਰੀਰ ਨਾਸ਼ਵਾਨ ਹੈ ਅਤੇ ਆਤਮਾ ਅਮਰ ਹੈ, ਉਹ ਡਰ ਤੋਂ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'He who realizes that the body is perishable while the Soul is timeless and deathless becomes utterly fearless and attains liberation right now.'
    },
    inquiryQuestions: {
      hi: [
        'यदि आज मेरा इस संसार में अंतिम दिन हो, तो क्या मेरे मन में कोई पछतावा या बैर बचेगा?',
        'क्या मैं नश्वर वस्तुओं के लिए अपनी आत्मा की शांति का सौदा कर रहा हूँ?',
        'क्या मैंने आज किसी से क्षमा मांगी या किसी को क्षमा किया?'
      ],
      pb: [
        'ਜੇਕਰ ਅੱਜ ਮੇਰਾ ਆਖਰੀ ਦਿਨ ਹੋਵੇ, ਤਾਂ ਕੀ ਮੇਰੇ ਮਨ ਵਿਚ ਕੋਈ ਗਿਲਾ-ਸ਼ਿਕਵਾ ਰਹੇਗਾ?',
        'ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਚੀਜ਼ਾਂ ਪਿੱਛੇ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਗੁਆ ਰਿਹਾ ਹਾਂ?',
        'ਕੀ ਮੈਂ ਅੱਜ ਕਿਸੇ ਨੂੰ ਦਿਲੋਂ ਮੁਆਫ਼ ਕੀਤਾ?'
      ],
      en: [
        'If today were my final day on earth, would I hold onto any grudges or regrets?',
        'Am I trading my inner soul-peace for fleeting material trinkets?',
        'Have I forgiven everyone and sought forgiveness with a pure, light heart?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज मैं अपने सभी पुराने द्वेष और गिले-शिकवे त्याग दूँगा और सबको हृदय से क्षमा करके हल्का महसूस करूँगा।',
      pb: 'ਅੱਜ ਮੈਂ ਸਾਰੇ ਪੁਰਾਣੇ ਗਿਲੇ-ਸ਼ਿਕਵੇ ਮਿਟਾ ਕੇ ਸਭ ਨੂੰ ਮੁਆਫ਼ ਕਰਾਂਗਾ।',
      en: 'Today I release all past resentments, extending unconditional forgiveness to all souls to dwell in unburdened purity.'
    },
    meditationGuide: {
      hi: 'शरीर को शिथिल छोड़ दें। अनुभव करें कि शरीर मिट्टी से बना है और मिट्टी में मिल जाएगा। आप वह अमर साक्षी ज्योति हैं जो कभी नष्ट नहीं होती।',
      pb: 'ਸਰੀਰ ਨੂੰ ਢਿੱਲਾ ਛੱਡੋ। ਅਨੁਭਵ ਕਰੋ ਕਿ ਤੁਸੀਂ ਅਮਰ ਆਤਮਾ ਹੋ ਜੋ ਕਦੇ ਖ਼ਤਮ ਨਹੀਂ ਹੁੰਦੀ।',
      en: 'Relax the entire physical frame. Acknowledge that the body will return to dust, while your inner conscious light shines untouched for eternity.'
    }
  },
  {
    id: 'chintan-7',
    dayNumber: 7,
    category: 'surati',
    categoryTitle: {
      hi: 'सुरति-शब्द योग चिंतन',
      pb: 'ਸੁਰਤਿ-ਸ਼ਬਦ ਯੋਗ ਚਿੰਤਨ',
      en: 'Surati-Shabd Meditation'
    },
    title: {
      hi: 'कस्तूरी कुंडल बसै, मृग ढूंढै बन माहि',
      pb: 'ਕਸਤੂਰੀ ਕੁੰਡਲ ਬਸੈ, ਮ੍ਰਿਗ ਢੂੰਢੈ ਬਨ ਮਾਹਿ',
      en: 'Musk Resides Within the Navel: Turning Within'
    },
    verse: {
      hi: 'कस्तूरी कुंडल बसै, मृग ढूंढै बन माहि।\nऐसे घट-घट राम हैं, दुनिया देखै नाहिं।।',
      pb: 'ਕਸਤੂਰੀ ਕੁੰਡਲ ਬਸੈ, ਮ੍ਰਿਗ ਢੂੰਢੈ ਬਨ ਮਾਹਿ।\nਐਸੇ ਘਟ-ਘਟ ਰਾਮ ਹੈਂ, ਦੁਨੀਆ ਦੇਖੈ ਨਾਹਿਂ।।',
      en: 'The musk fragrance resides within the deer’s navel, yet it wanders the forest searching outside;\nLikewise, the Supreme Divine dwells within every heart, yet the world fails to perceive Him.'
    },
    coreTeaching: {
      hi: 'शांति, आनंद और परमात्मा को बाहर तीर्थों, जंगलों या सांसारिक भोगों में खोजने की आवश्यकता नहीं; अपनी सुरति (चेतना) को अंतर्मुख करें, वह आपके भीतर ही विराजमान है।',
      pb: 'ਪਰਮਾਤਮਾ ਨੂੰ ਬਾਹਰ ਲੱਭਣ ਦੀ ਲੋੜ ਨਹੀਂ; ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਅੰਦਰ ਮੋੜੋ, ਉਹ ਤੁਹਾਡੇ ਅੰਦਰ ਹੀ ਹੈ।',
      en: 'Joy, peace, and the Divine are not to be sought in distant lands or external senses; turn your consciousness inward, for He resides within your heart.'
    },
    contemplationEssence: {
      hi: 'जैसे कस्तूरी मृग अपनी ही नाभि की सुगंध को बाहर ढूंढता हुआ जंगलों में भटकता और कांटों से घायल होता है, वैसे ही मनुष्य अपनी आत्मा के अनंत आनंद को बाहर के क्षणिक विषयों में खोजकर दुखी होता है। जब ध्यान बाहर से मुड़कर भीतर टिकता है, तब सच्चा खजाना मिल जाता है।',
      pb: 'ਜਿਵੇਂ ਹਿਰਨ ਕਸਤੂਰੀ ਨੂੰ ਬਾਹਰ ਲੱਭਦਾ ਹੈ, ਇਨਸਾਨ ਵੀ ਖੁਸ਼ੀ ਨੂੰ ਬਾਹਰ ਲੱਭ ਰਿਹਾ ਹੈ। ਅਸਲ ਖ਼ਜ਼ਾਨਾ ਅੰਦਰ ਹੈ।',
      en: 'Just as the musk deer exhausts itself seeking its own fragrance in thorn bushes, humans search outside for joy and suffer. Turning awareness inward reveals the limitless inner treasure.'
    },
    inquiryQuestions: {
      hi: [
        'आज मैंने अपनी खुशी और शांति के लिए बाहरी परिस्थितियों या लोगों पर कितनी निर्भरता रखी?',
        'क्या मैं दिन में कुछ समय पूर्ण एकांत और अंतर्मुखता में बिताता हूँ?',
        'मेरे हृदय मंदिर में जो साहेब विराजमान हैं, क्या मैं उनके प्रति सजग हूँ?'
      ],
      pb: [
        'ਕੀ ਮੈਂ ਆਪਣੀ ਖੁਸ਼ੀ ਲਈ ਬਾਹਰੀ ਚੀਜ਼ਾਂ ਤੇ ਨਿਰਭਰ ਹਾਂ?',
        'ਕੀ ਮੈਂ ਰੋਜ਼ਾਨਾ ਕੁਝ ਸਮਾਂ ਅੰਦਰੂਨੀ ਇਕਾਂਤ ਵਿਚ ਬਿਤਾਉਂਦਾ ਹਾਂ?',
        'ਕੀ ਮੈਂ ਅੰਦਰ ਬੈਠੇ ਸਾਹੇਬ ਨੂੰ ਯਾਦ ਰੱਖਦਾ ਹਾਂ?'
      ],
      en: [
        'How much did I depend on external approval or circumstances for my peace today?',
        'Do I gift myself quiet moments of total inward contemplation each day?',
        'Am I mindful of the sacred Divine Presence residing in the shrine of my own heart?'
      ]
    },
    sadhanaSankalp: {
      hi: 'आज शाम को सोने से पहले १० मिनट मौन बैठकर अपनी सुरति को अंतर्मन में एकाग्र करूँगा।',
      pb: 'ਅੱਜ ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ ੧੦ ਮਿੰਟ ਮੌਨ ਬੈਠ ਕੇ ਅੰਦਰ ਧਿਆਨ ਲਗਾਵਾਂਗਾ।',
      en: 'Tonight before sleeping, I will sit in 10 minutes of pure silent stillness, resting my attention within.'
    },
    meditationGuide: {
      hi: 'दोनों भौंहों के मध्य (आज्ञा चक्र / त्रिकुटी) पर ध्यान एकाग्र करें। भीतर एक शांत, अमृतमयी ज्योति का दर्शन करें।',
      pb: 'ਦੋਵੇਂ ਭਰਵੱਟਿਆਂ ਦੇ ਵਿਚਕਾਰ ਧਿਆਨ ਟਿਕਾਓ। ਅੰਦਰ ਸ਼ਾਂਤ ਪ੍ਰਕਾਸ਼ ਦਾ ਅਨੁਭਵ ਕਰੋ।',
      en: 'Rest attention gently at the eyebrow center (Ajna Chakra). Visualize a calm, nectarous inner light pulsating with serenity.'
    }
  }
];

export const getTodayChintan = (date: Date = new Date()): ChintanSeed => {
  // Use day of year or day of month to rotate seamlessly
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const index = Math.abs(dayOfYear) % DAINIK_CHINTAN_LIST.length;
  return DAINIK_CHINTAN_LIST[index] || DAINIK_CHINTAN_LIST[0];
};

export const getChintanByCategory = (category: string): ChintanSeed[] => {
  if (!category || category === 'all') return DAINIK_CHINTAN_LIST;
  return DAINIK_CHINTAN_LIST.filter(c => c.category === category);
};
