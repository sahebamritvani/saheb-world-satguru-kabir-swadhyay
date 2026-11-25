import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_MAAN_KO_ANG: Sakhi[] = [
  {
    id: 'maan-1',
    number: 1539,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧',
      en: 'Maan Ko Ang - 1',
    },
    text: {
      hi: 'प्रभुता को सब कोइ भजै, प्रभु को भजै न कोय।\nकहैं कबीर प्रभु को भजै, प्रभुता चेरी होय।।',
      pb: 'ਪ੍ਰਭੁਤਾ ਕੋ ਸਬ ਕੋਇ ਭਜੈ, ਪ੍ਰਭੁ ਕੋ ਭਜੈ ਨ ਕੋਇ।\nਕਹੈਂ ਕਬੀਰ ਪ੍ਰਭੁ ਕੋ ਭਜੈ, ਪ੍ਰਭੁਤਾ ਚੇਰੀ ਹੋਇ।।',
      en: 'Prabhuta ko sab koi bhajai, prabhu ko bhajai na koy. Kahain kabir prabhu ko bhajai, prabhuta cheri hoy..',
    },
    transliteration: 'Prabhuta ko sab koi bhajai, prabhu ko bhajai na koy. Kahain kabir prabhu ko bhajai, prabhuta cheri hoy.',
    bhavarth: {
      hi: 'सुख-वैभव रूपी अभिमान-शक्ति के मोहवश सभी पूजा-अर्चना करते हैं तथा उसको मन में याद करते रहते हैं, परंतु सबके स्वामी-अंतर्यामी परमात्मा का ध्यान-भजन कोई नहीं करता। कबीरजी कहते हैं कि यदि कोई चेतन-अविनाशी परमात्मा का ध्यान-भजन करे, तो यह प्रभुता भी उसकी दासी हो जाती है, अर्थात वह इसके मोह-बंधन से छूटकर, इसका भी स्वामी हो सकता है।',
      pb: 'ਸੁਖ-ਵੈਭਵ ਤੇ ਪ੍ਰਭੁਤਾ ਦੇ ਮੋਹ ਵਿੱਚ ਸਭ ਪੂਜਾ-ਅਰਚਨਾ ਕਰਦੇ ਹਨ, ਪਰ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕੋਈ ਨਹੀਂ ਕਰਦਾ। ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜੋ ਪਰਮਾਤਮਾ ਦਾ ਭਜਨ ਕਰਦਾ ਹੈ, ਪ੍ਰਭੁਤਾ ਉਸ ਦੀ ਦਾਸੀ ਬਣ ਜਾਂਦੀ ਹੈ।',
      en: 'Everyone worships and seeks worldly power and prestige, but no one truly adores the Supreme Master. Kabir says that if one earnestly worships the True Lord, worldly glory becomes a humble servant at their feet.',
    },
    wordMeanings: {
      hi: [
        { word: 'प्रभुता (Prabhuta)', meaning: 'वैभव / बड़प्पन / शक्ति / अधिकार' },
        { word: 'भजै (Bhajai)', meaning: 'स्मरण करना / भजना' },
        { word: 'चेरी (Cheri)', meaning: 'दासी / सेवि का' }
      ],
      pb: [
        { word: 'ਪ੍ਰਭੁਤਾ (Prabhuta)', meaning: 'ਵੈਭਵ / ਸ਼ਕਤੀ / ਵਡੱਪਣ' },
        { word: 'ਭਜੈ (Bhajai)', meaning: 'ਸਿਮਰਨ ਕਰਨਾ' },
        { word: 'ਚੇਰੀ (Cheri)', meaning: 'ਦਾਸੀ / ਸੇਵਿਕਾ' }
      ],
      en: [
        { word: 'Prabhuta', meaning: 'Worldly glory / Power / Majesty' },
        { word: 'Bhajai', meaning: 'To worship / Remembers' },
        { word: 'Cheri', meaning: 'Handmaid / Servant' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भक्ति प्रभु की प्राप्ति के लिए कर रहा हूँ या सांसारिक प्रतिष्ठा व वैभव प्राप्त करने के लिए?',
      pb: 'ਕੀ ਮੈਂ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਰੂਹਾਨੀ ਕਲਿਆਣ ਲਈ ਕਰ ਰਿਹਾ ਹਾਂ ਜਾਂ ਸੰਸਾਰਿਕ ਮਾਨ ਲਈ?',
      en: 'Am I seeking divine realization, or am I subtly using devotion to gain worldly status and power?'
    },
    practicalApplication: {
      hi: 'मान-बड़ाई की लालसा छोड़कर निष्काम भाव से सतगुरु साहेब की भक्ति में लीन रहें।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਦੀ ਚਾਹ ਛੱਡ ਕੇ ਨਿਸ਼ਕਾਮ ਹੋ ਕੇ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Renounce the desire for worldly status and dedicate your heart to selflessly worshiping the divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे मान-प्रतिष्ठा की चाह से मुक्त कर अपनी निश्छल भक्ति प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਡਿਆਈ ਦੀ ਚਾਹਤ ਤੋਂ ਮੁਕਤ ਕਰ ਕੇ ਆਪਣੀ ਨਾਮ-ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O True Master! Free me from the thirst for prestige, and bless me with pure, selfless devotion.'
    },
    quiz: []
  },
  {
    id: 'maan-2',
    number: 1540,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨',
      en: 'Maan Ko Ang - 2',
    },
    text: {
      hi: 'लघुता में प्रभुता बसै, प्रभुता से प्रभु दूर।\nकीड़ी सो मिसरी चुगै, हाथी के सिर धूर।।',
      pb: 'ਲਘੁਤਾ ਵਿੱਚ ਪ੍ਰਭੁਤਾ ਬਸੈ, ਪ੍ਰਭੁਤਾ ਸੇ ਪ੍ਰਭੁ ਦੂਰ।\nਕੀੜੀ ਸੋ ਮਿਸਰੀ ਚੁਗੈ, ਹਾਥੀ ਕੇ ਸਿਰ ਧੂਰ।।',
      en: 'Laghuta mein prabhuta basai, prabhuta se prabhu door. Keedi so misree chugai, haathi ke sir dhoor..',
    },
    transliteration: 'Laghuta mein prabhuta basai, prabhuta se prabhu door. Keedi so misree chugai, haathi ke sir dhoor.',
    bhavarth: {
      hi: 'दीनता (विनम्रता) में ही प्रभुत्व के सभी सद्गुण–दया, क्षमा, शील, संतोष तथा विवेक आदि होते हैं, जबकि मोहाभिमान की शक्ति से अंतर्यामी परमात्मा भी दूर होता है। जैसे चींटी तो मिश्री चुनकर खा जाती है, परंतु हाथी अपने सिर पर धूल ही डालता है। चींटी की लघुता में प्रभुता रूपी मिश्री का गुण है और हाथी के अहंकार में प्रभुता रूपी धूल का दुर्गुण है।',
      pb: 'ਨਿਮਰਤਾ ਵਿੱਚ ਹੀ ਪ੍ਰਭੂ ਦੇ ਸਾਰੇ ਗੁਣ ਵਸਦੇ ਹਨ, ਪਰ ਅਹੰਕਾਰ ਤੋਂ ਪ੍ਰਭੂ ਦੂਰ ਹੋ ਜਾਂਦਾ ਹੈ। ਜਿਵੇਂ ਛੋਟੀ ਕੀੜੀ ਮਿਸ਼ਰੀ ਚੁਗ ਕੇ ਖਾਂਦੀ ਹੈ, ਪਰ ਵੱਡਾ ਹਾਥੀ ਆਪਣੇ ਸਿਰ ਤੇ ਧੂੜ ਹੀ ਪਾਉਂਦਾ ਹੈ।',
      en: 'True greatness resides in humility, whereas pride drives God far away. The tiny ant tastes sweet sugar crystals, while the giant elephant pours dust upon its own head.',
    },
    wordMeanings: {
      hi: [
        { word: 'लघुता (Laghuta)', meaning: 'विनम्रता / दीनता / छोटापन' },
        { word: 'कीड़ी (Keedi)', meaning: 'चींटी' },
        { word: 'धूर (Dhoor)', meaning: 'धूल / गर्द' }
      ],
      pb: [
        { word: 'ਲਘੁਤਾ (Laghuta)', meaning: 'ਨਿਮਰਤਾ' },
        { word: 'ਕੀੜੀ (Keedi)', meaning: 'ਕੀੜੀ / ਚਿਉਂਟੀ' },
        { word: 'ਧੂਰ (Dhoor)', meaning: 'ਧੂੜ' }
      ],
      en: [
        { word: 'Laghuta', meaning: 'Humility / Smallness' },
        { word: 'Keedi', meaning: 'Ant' },
        { word: 'Dhoor', meaning: 'Dust' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने बड़प्पन के अहंकार में हाथी की भांति अपने ही सिर पर अशान्ति रूपी धूल डाल रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਅਹੰਕਾਰ ਵਿੱਚ ਆ ਕੇ ਆਪਣੇ ਰੂਹਾਨੀ ਜੀਵਨ ਨੂੰ ਖਰਾਬ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I, in my inflated sense of importance, acting like the elephant throwing dust upon its own head?'
    },
    practicalApplication: {
      hi: 'चींटी की भांति अत्यंत नम्र एवं लघु बनकर हरिनाम रूपी मीठी मिश्री का आनंद लें।',
      pb: 'ਕੀੜੀ ਵਾਂਗ ਨਿਮਰ ਬਣ ਕੇ ਨਾਮ ਦਾ ਆਨੰਦ ਲਵੋ।',
      en: 'Embrace ant-like humility so that you can gather the sweet nectar of Divine Truth.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे परम नम्रता एवं निरहंकारिता का वरदान दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਨਿਮਰਤਾ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Bless me with humility so that I may remain close to Your divine presence.'
    },
    quiz: []
  },
  {
    id: 'maan-3',
    number: 1541,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ३',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੩',
      en: 'Maan Ko Ang - 3',
    },
    text: {
      hi: 'मान बड़ाई कूकरी, सन्तन खेदी जान।\nपांडव जग पावन भया, सुपच बिराजै आन।।',
      pb: 'ਮਾਨ ਬੜਾਈ ਕੂਕਰੀ, ਸੰਤਨ ਖੇਦੀ ਜਾਨ।\nਪਾਂਡਵ ਜਗ ਪਾਵਨ ਭਇਆ, ਸੁਪਚ ਬਿਰਾਜੈ ਆਨ।।',
      en: 'Maan badai kookari, santan khedi jaan. Pandav jag paavan bhaya, supach birajai aan..',
    },
    transliteration: 'Maan badai kookari, santan khedi jaan. Pandav jag paavan bhaya, supach birajai aan.',
    bhavarth: {
      hi: 'मान-बड़ाई रूपी कुतिया को सामान्य जन नहीं जान सकते, परंतु संतों ने इसे जान-समझकर दूर भगा दिया। सहज-सरल स्वभाव वाले श्वपच भक्त पांडवों की यज्ञ-भूमि पर आ पधारे, तभी उनका यज्ञ पवित्र हुआ, अन्यथा किया-कराया सब कार्य अपवित्र एवं निरर्थक था।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਰੂਪੀ ਕੁੱਤੀ ਨੂੰ ਸੰਤਾਂ ਨੇ ਪਛਾਣ ਕੇ ਦੂਰ ਭਗਾ ਦਿੱਤਾ। ਪਾਂਡਵਾਂ ਦਾ ਯੱਗ ਉਦੋਂ ਹੀ ਪਵਿੱਤਰ ਤੇ ਸਫ਼ਲ ਹੋਇਆ ਜਦੋਂ ਨਿਮਰ ਭਗਤ ਸੁਪਚ (ਸੁਪਚ/ਸ਼ਵਪਚ) ਉੱਥੇ ਪਧਾਰੇ।',
      en: 'Worldly fame and pride are like a chasing bitch; saints recognize its danger and drive it away. The Pandavas’ royal sacrifice became holy and complete only when the humble devotee Supach graced their hall.',
    },
    wordMeanings: {
      hi: [
        { word: 'कूकरी (Kookari)', meaning: 'कुतिया' },
        { word: 'खेदी (Khedi)', meaning: 'भगा दिया / दूर कर दिया' },
        { word: 'सुपच (Supach)', meaning: 'श्वपच / अत्यंत नम्र भक्त (वाल्मीकि / सुदर्शन)' }
      ],
      pb: [
        { word: 'ਕੂਕਰੀ (Kookari)', meaning: 'ਕੁੱਤੀ' },
        { word: 'ਖੇਦੀ (Khedi)', meaning: 'ਭਗਾ ਦਿੱਤਾ' },
        { word: 'ਸੁਪਚ (Supach)', meaning: 'ਨਿਮਰ ਭਗਤ' }
      ],
      en: [
        { word: 'Kookari', meaning: 'Bitch / Hound' },
        { word: 'Khedi', meaning: 'Chased away / Driven off' },
        { word: 'Supach', meaning: 'The humble saintly devotee' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने बाहरी पद व प्रतिष्ठा के कारण किसी सच्चे नम्र भक्त का अनादर तो नहीं कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਅਹੰਕਾਰ ਵਿੱਚ ਆ ਕੇ ਕਿਸੇ ਸਾਧੂ ਭਗਤ ਦਾ ਨਿਰਾਦਰ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Does pride of status prevent me from recognizing the profound sanctity of a humble devotee?'
    },
    practicalApplication: {
      hi: 'जाति, पद या वैभव के मान का त्याग करके सभी भक्तों में प्रभु का स्वरूप देखें।',
      pb: 'ਜਾਤ-ਪਾਤ ਦਾ ਮਾਨ ਛੱਡ ਕੇ ਸਭ ਵਿੱਚ ਹਰਿ ਨੂੰ ਵੇਖੋ।',
      en: 'Cast off arrogance of lineage and status, and honor the holy spirit in every humble devotee.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे अहंकार से बचाकर संतों की चरण-धूलि स्वीकार करने की सदबुद्धि दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਸਾਧੂਆਂ ਦੀ ਚਰਨ-ਧੂੜ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Keep me safe from pride, and grant me the privilege of serving Your true devotees.'
    },
    quiz: []
  },
  {
    id: 'maan-4',
    number: 1542,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ४',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੪',
      en: 'Maan Ko Ang - 4',
    },
    text: {
      hi: 'बड़ा बड़ाई ना करै, बड़ा न बोलै बोल।\nहीरा मुख से ना कहै, लाख हमारा मोल।।',
      pb: 'ਬੜਾ ਬੜਾਈ ਨਾ ਕਰੈ, ਬੜਾ ਨ ਬੋਲੈ ਬੋਲ।\nਹੀਰਾ ਮੁਖ ਸੇ ਨਾ ਕਹੈ, ਲਾਖ ਹਮਾਰਾ ਮੋਲ।।',
      en: 'Bada badai na karai, bada na bolai bol. Heera mukh se na kahai, laakh hamara mol..',
    },
    transliteration: 'Bada badai na karai, bada na bolai bol. Heera mukh se na kahai, laakh hamara mol.',
    bhavarth: {
      hi: 'सज्जन पुरुष कभी भी अपनी मान-बड़ाई नहीं करते और न ही कभी अभिमान के बड़े बोल (निंदा वचन) बोलते हैं। जैसे कीमती हीरा कभी भी अपने मुंह से यह नहीं कहता कि मेरा मूल्य लाखों रुपये है। बड़े लोगों तथा मूल्यवान वस्तुओं का मोल समझदार व्यक्ति (जौहरी) ही जानता है।',
      pb: 'ਗੁਣੀ ਤੇ ਮਹਾਨ ਪੁਰਖ ਕਦੇ ਆਪਣੀ ਵਡਿਆਈ ਆਪ ਨਹੀਂ ਕਰਦੇ। ਜਿਵੇਂ ਹੀਰਾ ਕਦੇ ਆਪਣੇ ਮੂੰਹੋਂ ਨਹੀਂ ਕਹਿੰਦਾ ਕਿ ਮੇਰਾ ਮੁੱਲ ਲੱਖਾਂ ਰੁਪਏ ਹੈ।',
      en: 'Truly noble souls never boast of their own greatness, nor do they utter arrogant words. A diamond never declares with its own mouth that it is worth millions; its intrinsic worth is recognized by a skilled jeweler.',
    },
    wordMeanings: {
      hi: [
        { word: 'बड़ाई (Badai)', meaning: 'प्रशंसा / आत्म-श्लाघा' },
        { word: 'मोल (Mol)', meaning: 'मूल्य / कीमत' }
      ],
      pb: [
        { word: 'ਬੜਾਈ (Badai)', meaning: 'ਪ੍ਰਸ਼ੰਸਾ / ਵਡਿਆਈ' },
        { word: 'ਮੋਲ (Mol)', meaning: 'ਮੁੱਲ / ਕੀਮਤ' }
      ],
      en: [
        { word: 'Badai', meaning: 'Self-praise / Boasting' },
        { word: 'Mol', meaning: 'Value / Price' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी तारीफ खुद करने के लिए आतुर रहता हूँ या मौन साधना में विश्वास रखता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੀ ਵਡਿਆਈ ਆਪ ਕਰਨ ਦੀ ਭੁੱਲ ਕਰਦਾ ਹਾਂ?',
      en: 'Do I constantly seek self-glorification, or do I let my quiet virtues shine through authentic character?'
    },
    practicalApplication: {
      hi: 'आत्म-प्रशंसा का त्याग कर अपने सद्गुणों व चरित्र से जीवन को सुवासित करें।',
      pb: 'ਆਪਣੀ ਪ੍ਰਸ਼ੰਸਾ ਆਪ ਨਾ ਕਰੋ, ਨਾਮ-ਸਿਮਰਨ ਵਿੱਚ ਲੀਨ ਰਹੋ।',
      en: 'Avoid self-praise; let the genuine purity of your actions silently bear witness to your worth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे आत्म-श्लाघा की बीमारी से बचाकर गंभीर व नम्र बनाइए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਤਮ-ਪ੍ਰਸ਼ੰਸਾ ਤੋਂ ਮੁਕਤ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Save me from vanity and boasting, and make me humble and self-effacing.'
    },
    quiz: []
  },
  {
    id: 'maan-5',
    number: 1543,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ५',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੫',
      en: 'Maan Ko Ang - 5',
    },
    text: {
      hi: 'ऊंचे कुल के कारने, भूलि रहा संसार।\nतब कुल की क्या लाज है, जब तन होगा छार।।',
      pb: 'ਊਂਚੇ ਕੁਲ ਕੇ ਕਾਰਨੇ, ਭੂਲਿ ਰਹਾ ਸੰਸਾਰ।\nਤਬ ਕੁਲ ਕੀ ਕ੍ਯਾ ਲਾਜ ਹੈ, ਜਬ ਤਨ ਹੋਗਾ ਛਾਰ।।',
      en: 'Oonche kul ke kaarane, bhooli raha sansaar. Tab kul kee kya laaj hai, jab tan hoga chhaar..',
    },
    transliteration: 'Oonche kul ke kaarane, bhooli raha sansaar. Tab kul kee kya laaj hai, jab tan hoga chhaar.',
    bhavarth: {
      hi: 'उत्तम कुल के अभिमान में बहुत से लोग संसार को विस्मृत कर मोह-माया में फंसे घूमते रहते हैं। उन्हें आगे आने वाले समय का भी तनिक आभास नहीं होता, परंतु उन्हें विचार कर समझना चाहिए कि उनके ऊंचे कुल की तब क्या लज्जा रहेगी, जब यह सुंदर शरीर ही जलकर राख हो जाएगा, अतः कुलाभिमान त्याग कर सेवा-भक्ति-सत्संग में मन लगाना चाहिए।',
      pb: 'ਉੱਚੇ ਕੁਲ ਦੇ ਅਹੰਕਾਰ ਵਿੱਚ ਪੈ ਕੇ ਲੋਕ ਪਰਮਾਰਥ ਨੂੰ ਭੁੱਲ ਜਾਂਦੇ ਹਨ। ਪਰ ਜਦੋਂ ਇਹ ਸਰੀਰ ਸੜ ਕੇ ਸੁਆਹ ਹੋ ਜਾਵੇਗਾ, ਉਦੋਂ ਕੁਲ ਦਾ ਕੀ ਮਾਨ ਰਹਿ ਜਾਵੇਗਾ?',
      en: 'Engrossed in pride of noble birth and high lineage, people forget the purpose of existence. But what prestige will your family line retain when this mortal body turns into dust and ashes?'
    },
    wordMeanings: {
      hi: [
        { word: 'कुल (Kul)', meaning: 'वंश / परिवार / खानदान' },
        { word: 'छार (Chhaar)', meaning: 'राख / भस्म' }
      ],
      pb: [
        { word: 'ਕੁਲ (Kul)', meaning: 'ਖ਼ਾਨਦਾਨ / ਵੰਸ਼' },
        { word: 'ਛਾਰ (Chhaar)', meaning: 'ਸੁਆਹ / ਭਸਮ' }
      ],
      en: [
        { word: 'Kul', meaning: 'High lineage / Dynasty' },
        { word: 'Chhaar', meaning: 'Ashes / Dust' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने जन्म या उच्च वंश का घमंड करके सतगुरु की भक्ति से दूर तो नहीं हो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਉੱਚੀ ਜਾਤ ਦੇ ਅਹੰਕਾਰ ਵਿੱਚ ਪਰਮਾਤਮਾ ਤੋਂ ਦੂਰ ਹਾਂ?',
      en: 'Do I pride myself on high birth, forgetting that death reduces all physical forms to equal ashes?'
    },
    practicalApplication: {
      hi: 'वंश व जाति का झूठा अहंकार छोड़कर नाम-स्मरण और सेवा भाव अपनाएं।',
      pb: 'ਕੁਲ ਦਾ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਭਗਤੀ ਵਿੱਚ ਮਨ ਲਗਾਓ।',
      en: 'Discard pride of high birth and focus entirely on spiritual devotion and humble service.'
    },
    samarpanPrayer: {
      hi: 'हे दयालु साहेब! मुझे कुलाभिमान से मुक्त कर आपके चरणों की दास्य-भक्ति दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਕੁਲ-ਅਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਕਰ ਕੇ ਨਾਮ-ਸਿਮਰਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Benevolent Master! Deliver me from caste pride, and grant me eternal refuge at Your holy feet.'
    },
    quiz: []
  },
  {
    id: 'maan-6',
    number: 1544,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ६',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੬',
      en: 'Maan Ko Ang - 6',
    },
    text: {
      hi: 'बड़ी बिपति बड़ाई है, नन्हा करम से दूर।\nतारे सब न्यारे रहें, गहै चंद और सूर।।',
      pb: 'ਬੜੀ ਬਿਪਤਿ ਬੜਾਈ ਹੈ, ਨਨ੍ਹਾ ਕਰਮ ਸੇ ਦੂਰ।\nਤਾਰੇ ਸਬ ਨ੍ਯਾਰੇ ਰਹੈਂ, ਗਹੈ ਚੰਦ ਅੌਰ ਸੂਰ।।',
      en: 'Badi bipati badai hai, nanha karam se door. Taare sab nyaare rahain, gahai chand aur soor..',
    },
    transliteration: 'Badi bipati badai hai, nanha karam se door. Taare sab nyaare rahain, gahai chand aur soor.',
    bhavarth: {
      hi: 'यदि मान-बड़ाई बड़ी है, तो उसके ऊपर विपत्ति भी बहुत बड़ी आती है, जबकि दीनता रूपी लघुता के कर्म-आचरण से विपत्ति दूर ही रहती है। जैसे आकाश में सब तारागण तो न्यारे रह जाते हैं यानी बचे रह जाते हैं, लेकिन (बडे-बडे) चंद्रमा और सूर्य को ग्रहण लग जाता है, अतः मान-बडाई से दूर दीन-विनम्र भाव से ही रहना ही अच्छा है।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਬਹੁਤ ਵੱਡੀ ਬਿਪਤਾ ਹੈ, ਜਦਕਿ ਨਿਮਰਤਾ ਨਾਲ ਬਿਪਤਾ ਦੂਰ ਰਹਿੰਦੀ ਹੈ। ਆਕਾਸ਼ ਦੇ ਛੋਟੇ ਤਾਰੇ ਗ੍ਰਹਿਣ ਤੋਂ ਬਚੇ ਰਹਿੰਦੇ ਹਨ, ਪਰ ਵੱਡੇ ਸੂਰਜ ਤੇ ਚੰਦਰਮਾ ਨੂੰ ਗ੍ਰਹਿਣ ਲੱਗ ਜਾਂਦਾ ਹੈ।',
      en: 'Worldly fame brings immense calamity, whereas humble smallness keeps misfortune at bay. The tiny stars remain untouched in the sky, while the mighty sun and moon suffer eclipses.',
    },
    wordMeanings: {
      hi: [
        { word: 'बिपति (Bipati)', meaning: 'विपत्ति / संकट' },
        { word: 'न्यारे (Nyaare)', meaning: 'अलग / सुरक्षित / अछूते' },
        { word: 'गहै (Gahai)', meaning: 'पकड़ना / ग्रहण लगना' }
      ],
      pb: [
        { word: 'ਬਿਪਤਿ (Bipati)', meaning: 'ਮੁਸੀਬਤ / ਬਿਪਤਾ' },
        { word: 'ਨ੍ਯਾਰੇ (Nyaare)', meaning: 'ਵੱਖਰੇ / ਬਚੇ ਹੋਏ' },
        { word: 'ਗਹੈ (Gahai)', meaning: 'ਗ੍ਰਹਿਣ ਲੱਗਣਾ' }
      ],
      en: [
        { word: 'Bipati', meaning: 'Calamity / Misfortune' },
        { word: 'Nyaare', meaning: 'Untouched / Safe / Unaffected' },
        { word: 'Gahai', meaning: 'Eclipsed / Seized' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं प्रख्यात होने के मोह में बड़ी विपत्तियों को स्वयं आमंत्रित कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਵਡਿਆਈ ਦੀ ਚਾਹ ਵਿੱਚ ਮੁਸੀਬਤਾਂ ਸਹੇੜ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I courting major spiritual perils by seeking high visibility and worldly fame?'
    },
    practicalApplication: {
      hi: 'तारे की भांति शांत व अनाम रहकर प्रभु स्मरण में लीन रहें; दिखावे से बचें।',
      pb: 'ਤਾਰੇ ਵਾਂਗ ਨਿਮਰ ਰਹਿ ਕੇ ਭਗਤੀ ਕਰੋ, ਵਿਖਾਵੇ ਤੋਂ ਬਚੋ।',
      en: 'Live unobtrusively like a tiny star, quietly devoted to Truth away from toxic public spotlight.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे नाम और प्रसिद्धि के मोह-जाल से बचाकर सरल भक्त का जीवन प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਪ੍ਰਸਿੱਧੀ ਦੇ ਮੋਹ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Protect me from the snare of fame, and bless me with quiet simplicity.'
    },
    quiz: []
  },
  {
    id: 'maan-7',
    number: 1545,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ७',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੭',
      en: 'Maan Ko Ang - 7',
    },
    text: {
      hi: 'बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर।\nपंथी को छाया नहीं, फल लागे अति दूर।।',
      pb: 'ਬੜਾ ਹੁਆ ਤੋ ਕ੍ਯਾ ਹੁਆ, ਜੈਸੇ ਪੇੜ ਖਜੂਰ।\nਪੰਥੀ ਕੋ ਛਾਯਾ ਨਹੀਂ, ਫਲ ਲਾਗੇ ਅਤਿ ਦੂਰ।।',
      en: 'Bada hua to kya hua, jaise ped khajoor. Panthi ko chhaya nahin, phal laage ati door..',
    },
    transliteration: 'Bada hua to kya hua, jaise ped khajoor. Panthi ko chhaya nahin, phal laage ati door.',
    bhavarth: {
      hi: 'बड़ा हुआ तो क्या हुआ, ऐसे बड़ा होने से कोई लाभ नहीं, जैसे खजूर का बडा-लंबा वृक्ष। इससे पथिक को छाया तक नहीं मिलती और इसका फल बहुत उंचाई पर लगता है, जो सरलता से प्राप्त नहीं होता, अतः अभिमानवश ऐसा बड़ा होने से कोई लाभ नहीं होता।',
      pb: 'ਵੱਡਾ ਹੋਣ ਦਾ ਕੀ ਫ਼ਾਇਦਾ ਜੇਕਰ ਉਹ ਖਜੂਰ ਦੇ ਰੁੱਖ ਵਾਂਗ ਹੋਵੇ, ਜਿਸ ਦੀ ਨਾ ਤਾਂ ਰਾਹੀ ਨੂੰ ਛਾਂ ਮਿਲਦੀ ਹੈ ਅਤੇ ਫਲ ਵੀ ਬਹੁਤ ਉੱਚਾ ਲੱਗਦਾ ਹੈ।',
      en: 'What is the point of being tall or rich if you are like a date palm tree? It offers no shade to weary travelers, and its fruit hangs far beyond reach.',
    },
    wordMeanings: {
      hi: [
        { word: 'पंथी (Panthi)', meaning: 'राही / पथिक / यात्रि' },
        { word: 'अति दूर (Ati door)', meaning: 'बहुत ऊंचाई पर' }
      ],
      pb: [
        { word: 'ਪੰਥੀ (Panthi)', meaning: 'ਰਾਹੀ / ਯਾਤਰੀ' },
        { word: 'ਅਤਿ ਦੂਰ (Ati door)', meaning: 'ਬਹੁਤ ਉੱਚਾ' }
      ],
      en: [
        { word: 'Panthi', meaning: 'Traveler / Wayfarer' },
        { word: 'Ati door', meaning: 'Far away / Extremely high' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धन, पद या ज्ञान दूसरों के काम आ रहा है या मैं खजूर के वृक्ष की भांति उपयोगहीन हूँ?',
      pb: 'ਕੀ ਮੇਰੀ ਸਮਰੱਥਾ ਕਿਸੇ ਦੇ ਕੰਮ ਆ ਰਹੀ ਹੈ?',
      en: 'Is my wealth, position, or knowledge useful to anyone, or am I as aloof and unhelpful as a date palm?'
    },
    practicalApplication: {
      hi: 'छायादार और फलदार वृक्ष की भांति नम्र बनकर जरूरतमंदों की सेवा करें।',
      pb: 'ਪਰਉਪਕਾਰੀ ਬਣ ਕੇ ਸਭ ਦੀ ਸੇਵਾ ਕਰੋ।',
      en: 'Be like a fruitful shade tree—humble, accessible, and altruistically serving all living beings.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे परोपकारी एवं सेवाभावी हृदय प्रदान करें ताकि मेरा जीवन सार्थक हो। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਪਰਉਪਕਾਰੀ ਹਿਰਦਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Fill my heart with compassion so that my presence provides shelter and aid to others.'
    },
    quiz: []
  },
  {
    id: 'maan-8',
    number: 1546,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ८',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੮',
      en: 'Maan Ko Ang - 8',
    },
    text: {
      hi: 'कबीर अपने जीवते, ये दो बांता धोय।\nमान बड़ाई कारनै, अछता मूल न खोय।।',
      pb: 'ਕਬੀਰ ਅਪਨੇ ਜੀਵਤੇ, ਯੇ ਦੋ ਬਾੇਂਤਾ ਧੋਇ।\nਮਾਨ ਬੜਾਈ ਕਾਰਨੈ, ਅਛਤਾ ਮੂਲ ਨ ਖੋਇ।।',
      en: 'Kabir apne jeevate, ye do baanta dhoy. Maan badai kaaranai, achhata mool na khoy..',
    },
    transliteration: 'Kabir apne jeevate, ye do baanta dhoy. Maan badai kaaranai, achhata mool na khoy.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि अपने जीवन में ही मानस-मन से इन दो कलंकों (मान और बड़ाई) को धो डालो। इन क्षणिक मान-बड़ाई के लिए अक्षय-मोक्ष रूपी परम सुख को, मानवता के मूल लक्ष्य को यूं ही नष्ट मत करो।',
      pb: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਆਪਣੇ ਜਿਉਂਦੇ ਜੀਅ ਮਾਨ ਤੇ ਵਡਿਆਈ ਦੇ ਦੋਹਾਂ ਕਲੰਕਾਂ ਨੂੰ ਧੋ ਦੇਵੋ। ਥੋੜ੍ਹੀ ਜਿਹੀ ਵਡਿਆਈ ਲਈ ਆਪਣੀ ਰੂਹਾਨੀ ਪੂੰਜੀ ਨਾ ਗੁਆਓ।',
      en: 'Kabir advises: Wash away these two stains—pride and ego—while you are still alive. Do not squander your immortal soul’s eternal wealth for momentary worldly prestige.'
    },
    wordMeanings: {
      hi: [
        { word: 'बांता (Baanta)', meaning: 'बातें / कलंक / दुर्गुण (मान व बड़ाई)' },
        { word: 'अछता मूल (Achhata mool)', meaning: 'अक्षय वास्तविक पूंजी / मोक्ष / आत्म-धन' }
      ],
      pb: [
        { word: 'ਬਾੇਂਤਾ (Baanta)', meaning: 'ਕਲੰਕ / ਅਹੰਕਾਰ' },
        { word: 'ਅਛਤਾ ਮੂਲ (Achhata mool)', meaning: 'ਅਬਿਨਾਸ਼ੀ ਰੂਹਾਨੀ ਪੂੰਜੀ' }
      ],
      en: [
        { word: 'Baanta', meaning: 'Stains / Calumnies (Pride & Vanity)' },
        { word: 'Achhata mool', meaning: 'Unending core capital / Eternal soul wealth' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं क्षणभंगुर सांसारिक बड़ाई के चक्कर में अपनी आत्मिक पूंजी (सत्संग व नाम) गंवा रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਮਾਨ ਪਿੱਛੇ ਆਪਣੀ ਰੂਹਾਨੀ ਪੂੰਜੀ ਗੁਆ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I gambling away my eternal spiritual treasure for fleeting social praise?'
    },
    practicalApplication: {
      hi: 'जीवन रहते मान और बड़ाई की तृष्णा धोकर निष्काम गुरु-सेवा में लीन रहें।',
      pb: 'ਜੀਉਂਦੇ ਜੀਅ ਮਾਨ-ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰੋ।',
      en: 'Cleanse your heart of vanity while you have breath, and cherish the eternal treasure of Nam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे नाम-सिमरण में स्थिर कर मान-बड़ाई के कलंक से पूर्णतः स्वच्छ कर दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਾਮ ਵਿੱਚ ਲੀਨ ਕਰ ਕੇ ਨਿਰਮਲ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Purify my mind from vanity, and anchor my life in the immortal Truth.'
    },
    quiz: []
  },
  {
    id: 'maan-9',
    number: 1547,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ९',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੯',
      en: 'Maan Ko Ang - 9',
    },
    text: {
      hi: 'मान बड़ाई कूकरी, धर्मराय दरबार।\nदीन लकुटिया बाहिरै, सब जग खाया फार।।',
      pb: 'ਮਾਨ ਬੜਾਈ ਕੂਕਰੀ, ਧਰਮਰਾਇ ਦਰਬਾਰ।\nਦੀਨ ਲਕੁਟਿਯਾ ਬਾਹਿਰੈ, ਸਬ ਜਗ ਖਾਇਆ ਫਾਰ।।',
      en: 'Maan badai kookari, dharamraay darbaar. Deen lakutiya baahirai, sab jag khaya faar..',
    },
    transliteration: 'Maan badai kookari, dharamraay darbaar. Deen lakutiya baahirai, sab jag khaya faar.',
    bhavarth: {
      hi: 'मान-बड़ाई रूपी कुतिया यम रूपी कर्म-वासनाओं के द्वार पर रहती है। दीनता की लाठी से ही इसे धमकाया जा सकता है इसलिए इसने सारे संसार के लोगों को फाड़ खाया है, अर्थात विनम्रता के अभाव में उत्पन्न अभिमान सबको दुःख ही प्रदान करता है।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਧਰਮਰਾਜ ਦੇ ਦਰਬਾਰ ਦੀ ਕੁੱਤੀ ਵਾਂਗ ਹੈ। ਨਿਮਰਤਾ ਦੀ ਲਾਠੀ ਤੋਂ ਬਿਨਾਂ ਇਹ ਸਾਰੇ ਸੰਸਾਰ ਨੂੰ ਪਾੜ-ਪਾੜ ਕੇ ਖਾ ਜਾਂਦੀ ਹੈ।',
      en: 'Pride and vanity are like a fierce hound guarding Death’s court. Unless driven back with the stick of profound humility, it tears apart the souls of all worldly men.'
    },
    wordMeanings: {
      hi: [
        { word: 'दीन लकुटिया (Deen lakutiya)', meaning: 'दिनता / नम्रता रूपी लाठी' },
        { word: 'खाया फार (Khaya faar)', meaning: 'फाड़कर खा जाना / नष्ट कर देना' }
      ],
      pb: [
        { word: 'ਦੀਨ ਲਕੁਟਿਯਾ (Deen lakutiya)', meaning: 'ਨਿਮਰਤਾ ਦੀ ਲਾਠੀ' },
        { word: 'ਖਾਇਆ ਫਾਰ (Khaya faar)', meaning: 'ਪਾੜ ਕੇ ਖਾ ਲਿਆ' }
      ],
      en: [
        { word: 'Deen lakutiya', meaning: 'The staff of humility' },
        { word: 'Khaya faar', meaning: 'Torn to pieces / Devoured' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे पास यम रूपी वासना व अहंकार से बचने के लिए दीनता व नम्रता रूपी लाठी है?',
      pb: 'ਕੀ ਮੇਰੇ ਕੋਲ ਅਹੰਕਾਰ ਤੋਂ ਬਚਣ ਲਈ ਨਿਮਰਤਾ ਦੀ ਲਾਠੀ ਹੈ?',
      en: 'Do I hold fast to the staff of humility to ward off the devouring hound of pride?'
    },
    practicalApplication: {
      hi: 'अहंकार रूपी भयानक कुतिया से बचने के लिए सर्वदा नम्र एवं सहिष्णु बनें।',
      pb: 'ਅਹੰਕਾਰ ਤੋਂ ਬਚਣ ਲਈ ਹਮੇਸ਼ਾ ਨਿਮਰ ਬਣੇ ਰਹੋ।',
      en: 'Wield steady humility in all circumstances to guard your spirit against destructive pride.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मुझे दीनता की लाठी देकर इस अहंकारी मायावी कुतिया से रक्षा करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪ੍ਰਭੂ! ਮੈਨੂੰ ਨਿਮਰਤਾ ਬਖਸ਼ ਕੇ ਅਹੰਕਾਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Equip me with true humility, and protect my soul from the ferocity of ego.'
    },
    quiz: []
  },
  {
    id: 'maan-10',
    number: 1548,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १०',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੦',
      en: 'Maan Ko Ang - 10',
    },
    text: {
      hi: 'मान बड़ाई ऊरमी, ये जग का व्यवहार।\nदीन गरीबी बंदगी, सतगुरु का उपकार।।',
      pb: 'ਮਾਨ ਬੜਾਈ ਊਰਮੀ, ਯੇ ਜਗ ਕਾ ਬ੍ਯਵਹਾਰ।\nਦੀਨ ਗਰੀਬੀ ਬੰਦਗੀ, ਸਤਗੁਰੁ ਕਾ ਉਪਕਾਰ।।',
      en: 'Maan badai oorami, ye jag ka vyavhaar. Deen gareebi bandagi, satguru ka upkaar..',
    },
    transliteration: 'Maan badai oorami, ye jag ka vyavhaar. Deen gareebi bandagi, satguru ka upkaar.',
    bhavarth: {
      hi: 'जगत के व्यवहार से यह पूर्ण रूप से प्रमाणित है कि मान-बड़ाई सबके लिए बहुत ही दु:खदायी हैं। सद्गुरु की शरण में रहते हुए, उनके उपकार के फलस्वरूप दीनता, विनम्रता, सेवा, भक्ति आदि की जितनी भी मान्यताएं हैं, वे सभी सेवक-भक्तों को सुख देने वाली हैं।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਦੁੱਖ ਦੇਣ ਵਾਲੀਆਂ ਲਹਿਰਾਂ ਹਨ, ਜੋ ਸੰਸਾਰ ਦਾ ਸੁਭਾਅ ਹਨ। ਪਰ ਨਿਮਰਤਾ, ਗਰੀਬੀ ਤੇ ਬੰਦਗੀ ਸਤਿਗੁਰੂ ਦੀ ਮਹਾਨ ਕਿਰਪਾ ਨਾਲ ਹੀ ਮਿਲਦੀ ਹੈ।',
      en: 'Craving for honor and glory is the tumultuous wave of worldly life. But humility, spiritual poverty, and sacred worship are the rare blessings bestowed by the Satguru.'
    },
    wordMeanings: {
      hi: [
        { word: 'ऊरमी (Oorami)', meaning: 'तरंग / लहर / हलचल' },
        { word: 'दीन गरीबी (Deen gareebi)', meaning: 'नम्रता व निरहंकारिता' },
        { word: 'बंदगी (Bandagi)', meaning: 'सेवा व साहेब-भक्ति' }
      ],
      pb: [
        { word: 'ਊਰਮੀ (Oorami)', meaning: 'ਦੁੱਖ ਦੀ ਲਹਿਰ' },
        { word: 'ਦੀਨ ਗਰੀਬੀ (Deen gareebi)', meaning: 'ਨਿਮਰਤਾ' },
        { word: 'ਬੰਦਗੀ (Bandagi)', meaning: 'ਸਿਮਰਨ ਤੇ ਭਗਤੀ' }
      ],
      en: [
        { word: 'Oorami', meaning: 'Waves / Agitations of mind' },
        { word: 'Deen gareebi', meaning: 'Spiritual meekness and humility' },
        { word: 'Bandagi', meaning: 'Adoration / Prayerful devotion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक मान की लहरों में बह रहा हूँ या सतगुरु की कृपा से दीनता व बंदगी अपना रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰੂ ਕਿਰਪਾ ਨਾਲ ਨਿਮਰਤਾ ਵਿੱਚ ਲੀਨ ਹਾਂ?',
      en: 'Am I swept away by the worldly tide of prestige, or anchored in the Master’s grace of humble prayer?'
    },
    practicalApplication: {
      hi: 'सद्गुरु की असीम कृपा मानकर नम्रतापूर्वक बंदगी एवं सेवा में संलग्न रहें।',
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਮੰਨ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਨਾਮ ਜਪੋ।',
      en: 'Recognize humility and devotion as divine gifts from the Satguru, and practice them daily.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! आपकी कृपा से ही मुझे यह दीनता व भक्ति का पावन मार्ग प्राप्त हुआ है। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਦਾਸਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Graceful Master! I bow in gratitude for bestowing upon me the path of humility and prayer.'
    },
    quiz: []
  },
  {
    id: 'maan-11',
    number: 1549,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - ११',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੧',
      en: 'Maan Ko Ang - 11',
    },
    text: {
      hi: 'मान बड़ाई देखि कर, भक्ति करै संसार।\nजब देखै कछु हीनता, अवगुन धरै गंवार।।',
      pb: 'ਮਾਨ ਬੜਾਈ ਦੇਖਿ ਕਰ, ਭਗਤੀ ਕਰੈ ਸੰਸਾਰ।\nਜਬ ਦੇਖੈ ਕਛੁ ਹੀਨਤਾ, ਅਵਗੁਨ ਧਰੈ ਗੰਵਾਰ।।',
      en: 'Maan badai dekhi kar, bhakti karai sansaar. Jab dekhai kachhu heenata, avagun dharai ganvaar..',
    },
    transliteration: 'Maan badai dekhi kar, bhakti karai sansaar. Jab dekhai kachhu heenata, avagun dharai ganvaar.',
    bhavarth: {
      hi: 'संत-भक्तों की मान-बड़ाई देखकर सांसारिक मोह-माया में डूबे लोग भी उसकी प्राप्ति के लिए भक्ति की पंक्ति में खड़े हो जाते हैं, परंतु जैसे ही भक्ति के मार्ग में कोई उतार-चढ़ाव आता है, वे उसमें अवगुण निकालने लगते हैं। अपनी कमी को वे नहीं देखते।',
      pb: 'ਸੰਸਾਰੀ ਲੋਕ ਵਡਿਆਈ ਵੇਖ ਕੇ ਹੀ ਭਗਤੀ ਕਰਨ ਲੱਗਦੇ ਹਨ, ਪਰ ਜਦੋਂ ਕੋਈ ਕਮੀ ਜਾਂ ਕਸ਼ਟ ਵੇਖਦੇ ਹਨ ਤਾਂ ਮੂਰਖ ਬਣ ਕੇ ਦੋਸ਼ ਲਗਾਉਣ ਲੱਗਦੇ ਹਨ।',
      en: 'Swayed by external honor and prestige, foolish worldly people adopt devotion. But the moment trial, hardship, or lack of prestige appears, the ignorant turn away and find fault with the path.'
    },
    wordMeanings: {
      hi: [
        { word: 'हीनता (Heenata)', meaning: 'कमी / साधारणता / प्रतिकूलता' },
        { word: 'अवगुन धरै (Avagun dharai)', meaning: 'दोष निकालना / अवगुण देखना' },
        { word: 'गंवार (Ganvaar)', meaning: 'अज्ञानी / अमानुष' }
      ],
      pb: [
        { word: 'ਹੀਨਤਾ (Heenata)', meaning: 'ਘਾਟਾ / ਕਮੀ' },
        { word: 'ਅਵਗੁਨ (Avagun)', meaning: 'ਦੋਸ਼ ਲਗਾਉਣਾ' },
        { word: 'ਗੰਵਾਰ (Ganvaar)', meaning: 'ਮੂਰਖ / ਅਗਿਆਨੀ' }
      ],
      en: [
        { word: 'Heenata', meaning: 'Adversity / Lack of glory' },
        { word: 'Avagun dharai', meaning: 'Finds fault / Slanders' },
        { word: 'Ganvaar', meaning: 'Ignorant / Fools' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी भक्ति निष्काम एवं अडिग है या मैं केवल सुख व मान पाने की शर्त पर भक्ति कर रहा हूँ?',
      pb: 'ਕੀ ਮੇਰੀ ਭਗਤੀ ਨਿਸ਼ਕਾਮ ਹੈ?',
      en: 'Is my devotion unconditional, or do I only worship when I gain worldly status and comfort?'
    },
    practicalApplication: {
      hi: 'मान-अपमान और सुख-दुःख दोनों परिस्थितियों में एकसमान रहकर सतगुरु के नाम में लीन रहें।',
      pb: 'ਸੁਖ-ਦੁੱਖ ਵਿੱਚ ਇੱਕ ਸਮਾਨ ਰਹਿ ਕੇ ਭਗਤੀ ਕਰੋ।',
      en: 'Remain steadfast through praise and blame, knowing devotion is beyond material gain.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे भक्ति मार्ग में अडिग एवं निष्काम रहने की शक्ति प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਅਡੋਲ ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Grant me unwavering faith that stays true through all tides of life.'
    },
    quiz: []
  },
  {
    id: 'maan-12',
    number: 1550,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १२',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੨',
      en: 'Maan Ko Ang - 12',
    },
    text: {
      hi: 'बड़ा बड़ाई ना करे, छोटा बहु इतराय।\nज्यौं प्यादा फरजी भया, टेढ़ा टेढ़ा जाय।।',
      pb: 'ਬੜਾ ਬੜਾਈ ਨਾ ਕਰੇ, ਛੋਟਾ ਬਹੁ ਇਤਰਾਇ।\nਜ੍ਯੋਂ ਪ੍ਯਾਦਾ ਫਰਜੀ ਭਇਆ, ਟੇਢ਼ਾ ਟੇਢ਼ਾ ਜਾਇ।।',
      en: 'Bada badai na kare, chhota bahu itraay. Jyaon pyaada pharjee bhaya, tedha tedha jaay..',
    },
    transliteration: 'Bada badai na kare, chhota bahu itraay. Jyaon pyaada pharjee bhaya, tedha tedha jaay.',
    bhavarth: {
      hi: 'जो बुद्धिमान लोग होते हैं, वे कभी अपनी प्रशंसा नहीं करते, परंतु छोटी बुद्धि वाले लोग अभिमानवश इठलाते हुए घूमते हैं। जैसे यदि एक छोटा सिपाही मंत्री पद पा जाए, तो वह अभिमान में आकर टेढ़ा-टेढ़ा (अकड़कर) चलने लगता है।',
      pb: 'ਵੱਡੇ ਪੁਰਖ ਕਦੇ ਅਹੰਕਾਰ ਨਹੀਂ ਕਰਦੇ, ਪਰ ਛੋਟੀ ਬੁੱਧੀ ਵਾਲੇ ਥੋੜ੍ਹੀ ਜਿਹੀ ਵਡਿਆਈ ਪਾ ਕੇ ਇਠਲਾਉਂਦੇ ਹਨ। ਜਿਵੇਂ ਸ਼ਤਰੰਜ ਦਾ ਪਿਆਦਾ ਵਜ਼ੀਰ ਬਣਦੇ ਹੀ ਟੇਢਾ ਚੱਲਣ ਲੱਗਦਾ ਹੈ।',
      en: 'The truly great never boast, while the shallow strut arrogantly at the slightest gain. Just as a pawn in chess, upon becoming a queen, starts moving diagonally in crooked strides.'
    },
    wordMeanings: {
      hi: [
        { word: 'इतराय (Itraay)', meaning: 'इठलाना / घमंड करना' },
        { word: 'प्यादा (Pyaada)', meaning: 'सैनिक / सिपाही / शतरंज का मोहरा' },
        { word: 'फरजी (Pharjee)', meaning: 'वजीर / मंत्री' }
      ],
      pb: [
        { word: 'ਇਤਰਾਇ (Itraay)', meaning: 'ਅਹੰਕਾਰ ਕਰਨਾ' },
        { word: 'ਪ੍ਯਾਦਾ (Pyaada)', meaning: 'ਸ਼ਤਰੰਜ ਦਾ ਮੋਹਰਾ' },
        { word: 'ਫਰਜੀ (Pharjee)', meaning: 'ਵਜ਼ੀਰ' }
      ],
      en: [
        { word: 'Itraay', meaning: 'Struts arrogantly / Flaunts' },
        { word: 'Pyaada', meaning: 'Pawn' },
        { word: 'Pharjee', meaning: 'Queen / Minister in chess' }
      ]
    },
    contemplation: {
      hi: 'क्या थोड़े से अधिकार या पद मिलने पर मेरा व्यवहार भी प्यादे की भांति कुटिल व अहंकारी तो नहीं हो गया?',
      pb: 'ਕੀ ਮੈਂ ਅਹੁਦਾ ਪਾ ਕੇ ਅਹੰਕਾਰੀ ਹੋ ਰਿਹਾ ਹਾਂ?',
      en: 'When given a small measure of power or title, do I become crooked and arrogant like a promoted pawn?'
    },
    practicalApplication: {
      hi: 'पद, अधिकार या ज्ञान पाकर और अधिक नम्र व सरल बनें।',
      pb: 'ਅਹੁਦਾ ਪਾ ਕੇ ਹੋਰ ਨਿਮਰ ਬਣੋ।',
      en: 'When elevated in position or knowledge, deepen your humility and straightforward simplicity.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे पद के मद से बचाकर सदा विनम्र सेवक बनाए रखें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਅਹੰਕਾਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Save me from the intoxication of authority, and keep me humble.'
    },
    quiz: []
  },
  {
    id: 'maan-13',
    number: 1551,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १३',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੩',
      en: 'Maan Ko Ang - 13',
    },
    text: {
      hi: 'कंचन तजना सहज है, सहज तिरिया का नेह।\nमान बड़ाई ईरषा, दुरलभ तजनी येह।।',
      pb: 'ਕੰਚਨ ਤਜਨਾ ਸਹਜ ਹੈ, ਸਹਜ ਤਿਰਿਆ ਕਾ ਨੇਹ।\nਮਾਨ ਬੜਾਈ ਈਰਸ਼ਾ, ਦੁਰਲਭ ਤਜਨੀ ਯੇਹ।।',
      en: 'Kanchan tajana sahaj hai, sahaj tiriya ka neh. Maan badai eersha, duralabh tajanee yeh..',
    },
    transliteration: 'Kanchan tajana sahaj hai, sahaj tiriya ka neh. Maan badai eersha, duralabh tajanee yeh.',
    bhavarth: {
      hi: 'स्वर्ण-संपत्ति का त्याग सरल है और स्त्री का मोह त्यागना भी सरल ही है, परंतु इस संसार में सामान्य जनों के लिए मान, बड़ाई और ईर्ष्या का त्याग करना बहुत ही कठिन है। बिना सत्संगति और सद्गुरु की शरण के इनका त्याग संभव नहीं है।',
      pb: 'ਸੋਨਾ-ਚਾਂਦੀ ਤੇ ਕਾਮ-ਮੋਹ ਛੱਡਣਾ ਫਿਰ ਵੀ ਸੁਖਾਲਾ ਹੈ, ਪਰ ਮਾਨ, ਵਡਿਆਈ ਤੇ ਈਰਖਾ ਦਾ ਤਿਆਗ ਕਰਨਾ ਬਹੁਤ ਹੀ ਔਖਾ ਹੈ।',
      en: 'It is relatively easy to renounce gold and riches, and even family affection. But eradicating pride, prestige, and envy is extraordinarily difficult without divine wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'कंचन (Kanchan)', meaning: 'सोना / धन-संपत्ति' },
        { word: 'तिरिया (Tiriya)', meaning: 'स्त्री / मोह' },
        { word: 'दुरलभ (Duralabh)', meaning: 'अत्यंत कठिन' }
      ],
      pb: [
        { word: 'ਕੰਚਨ (Kanchan)', meaning: 'ਸੋਨਾ / ਧਨ' },
        { word: 'ਤਿਰਿਆ (Tiriya)', meaning: 'ਇਸਤਰੀ / ਪਰਿਵਾਰ' },
        { word: 'ਦੁਰਲਭ (Duralabh)', meaning: 'ਔਖਾ' }
      ],
      en: [
        { word: 'Kanchan', meaning: 'Gold / Wealth' },
        { word: 'Tiriya', meaning: 'Family / Worldly ties' },
        { word: 'Duralabh', meaning: 'Extremely rare / Very difficult' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने धन का त्याग करके भी सूक्ष्म रूप से मान और ईर्ष्या को अपने भीतर छिपा रखा है?',
      pb: 'ਕੀ ਮੇਰੇ ਅੰਦਰ ਅਜੇ ਵੀ ਮਾਨ ਤੇ ਈਰਖਾ ਬਾਕੀ ਹੈ?',
      en: 'Have I abandoned outward wealth while secretly harboring subtle pride and envy within?'
    },
    practicalApplication: {
      hi: 'सतगुरु की कृपा व सत्संग द्वारा अपने भीतर के सूक्ष्म मान व ईर्ष्या को समूल नष्ट करें।',
      pb: 'ਸਤਿਸੰਗ ਰਾਹੀਂ ਮਾਨ ਤੇ ਈਰਖਾ ਨੂੰ ਦੂਰ ਕਰੋ।',
      en: 'Root out subtle spiritual vanity through persistent satsang and devotion.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे मान, बड़ाई और ईर्ष्या के इस सूक्ष्म बंधन से मुक्त करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਈਰਖਾ ਤੇ ਮਾਨ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Deliver me from the deepest roots of subtle pride and envy.'
    },
    quiz: []
  },
  {
    id: 'maan-14',
    number: 1552,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १४',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੪',
      en: 'Maan Ko Ang - 14',
    },
    text: {
      hi: 'माया तजी तो क्या भया, मान तजा नहिं जाय।\nमान बड़े मुनिवर गले, मान सबन को खाय।।',
      pb: 'ਮਾਇਆ ਤਜੀ ਤੋ ਕ੍ਯਾ ਭਇਆ, ਮਾਨ ਤਜਾ ਨਹਿਂ ਜਾਇ।\nਮਾਨ ਬੜੇ ਮੁਨਿਵਰ ਗਲੇ, ਮਾਨ ਸਬਨ ਕੋ ਖਾਇ।।',
      en: 'Maya taji to kya bhaya, maan taja nahin jaay. Maan bade munivar gale, maan saban ko khaay..',
    },
    transliteration: 'Maya taji to kya bhaya, maan taja nahin jaay. Maan bade munivar gale, maan saban ko khaay.',
    bhavarth: {
      hi: 'धन-संपत्ति स्त्री उच्च पद आदि स्थुल माया का त्याग कर भी दिया तो बहुत बड़ी बात नहीं। सूक्ष्म रूप से मन में जो अभिमान है, उसका त्याग तो बहुत बड़ी बात है। इस अभिमान में बड़े-बड़े ऋषि-मुनि गल-मिट गए, यह दुष्ट अभिमान सबको खा जाता है।',
      pb: 'ਜੇਕਰ ਮਾਇਆ ਛੱਡ ਵੀ ਦਿੱਤੀ ਤਾਂ ਕੀ ਹੋਇਆ? ਮਾਨ-ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ ਕਰਨਾ ਅਤਿ ਔਖਾ ਹੈ। ਇਸ ਅਹੰਕਾਰ ਵਿੱਚ ਵੱਡੇ-ਵੱਡੇ ਮੁਨੀ ਵੀ ਨਸ਼ਟ ਹੋ ਗਏ।',
      en: 'Renouncing outer worldly wealth is not enough if pride remains unvanquished inside. Great ascetics and sages were ruined by pride, for ego devours everyone.'
    },
    wordMeanings: {
      hi: [
        { word: 'मुनिवर (Munivar)', meaning: 'बड़े-बड़े तपस्वी व मुनि' },
        { word: 'गले (Gale)', meaning: 'नष्ट हो गए / गल गए' }
      ],
      pb: [
        { word: 'ਮੁਨਿਵਰ (Munivar)', meaning: 'ਵੱਡੇ ਤਪਸਵੀ' },
        { word: 'ਗਲੇ (Gale)', meaning: 'ਨਸ਼ਟ ਹੋ ਗਏ' }
      ],
      en: [
        { word: 'Munivar', meaning: 'Great sages / Ascetics' },
        { word: 'Gale', meaning: 'Perished / Dissolved' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी साधना या त्याग में भी "मैं त्यागी हूँ" का सूक्ष्म अहंकार समाया हुआ है?',
      pb: 'ਕੀ ਮੇਰੇ ਅੰਦਰ ਤਿਆਗ ਦਾ ਅਹੰਕਾਰ ਹੈ?',
      en: 'Is there subtle pride in my renunciation that quietly whispers "I am spiritual"?'
    },
    practicalApplication: {
      hi: 'त्याग का भी घमंड न करके स्वयं को सतगुरु का तुच्छ सेवक समझें।',
      pb: 'ਤਿਆਗ ਦਾ ਅਹੰਕਾਰ ਨਾ ਕਰੋ, ਨਿਮਰ ਸੇਵਕ ਬਣੋ।',
      en: 'Do not take pride in renunciation itself; remain a humble, self-effacing servant of Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे सूक्ष्म अहंकार से बचाकर अपनी शरणागति में रखें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਹੰਕਾਰ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Guard my heart from subtle ego, and shelter me in Your refuge.'
    },
    quiz: []
  },
  {
    id: 'maan-15',
    number: 1553,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १५',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੫',
      en: 'Maan Ko Ang - 15',
    },
    text: {
      hi: 'काला मुख कर मान का, आदर लावो आग।\nमान बड़ाई छांड़ि के, रहौ नाम लौ आग।।',
      pb: 'ਕਾਲਾ ਮੁਖ ਕਰ ਮਾਨ ਕਾ, ਆਦਰ ਲਾਵੋ ਆਗ।\nਮਾਨ ਬੜਾਈ ਛਾਂੜਿ ਕੇ, ਰਹੌ ਨਾਮ ਲੌ ਆਗ।।',
      en: 'Kaala mukh kar maan ka, aadar laavo aag. Maan badai chhandi ke, rahau naam lau aag..',
    },
    transliteration: 'Kaala mukh kar maan ka, aadar laavo aag. Maan badai chhandi ke, rahau naam lau aag.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि हे जिज्ञासू सज्जनो! अभिमान के मुख को काला कर दो और जिस आदर की चाह-आसक्ति है, उसमें अग्नि लगा दो। इस प्रकार मान और बड़ाई को छोड़कर, सद्गुरु के नाम-ज्ञान के उपदेश में रमकर भक्ति के जीवन में स्थिर हो जाओ।',
      pb: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਅਹੰਕਾਰ ਦਾ ਮੂੰਹ ਕਾਲਾ ਕਰ ਦਿਓ ਅਤੇ ਆਦਰ ਦੀ ਚਾਹਤ ਨੂੰ ਅੱਗ ਲਗਾ ਦਿਓ। ਮਾਨ-ਵਡਿਆਈ ਛੱਡ ਕੇ ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਵੋ।',
      en: 'Kabir instructs: Blacken the face of pride and burn your desire for worldly honor! Forsake fame, and immerse yourself in the blazing light of Nam.'
    },
    wordMeanings: {
      hi: [
        { word: 'काला मुख (Kaala mukh)', meaning: 'तिरस्कार करना / त्यागना' },
        { word: 'आदर (Aadar)', meaning: 'सम्मान / प्रशंसा की चाह' },
        { word: 'लौ (Lau)', meaning: 'ध्यान / निष्ठा / लगन' }
      ],
      pb: [
        { word: 'ਕਾਲਾ ਮੁਖ (Kaala mukh)', meaning: 'ਤਿਆਗਣਾ' },
        { word: 'ਆਦਰ (Aadar)', meaning: 'ਮਾਨ ਦੀ ਚਾਹ' },
        { word: 'ਲੌ (Lau)', meaning: 'ਲਗਨ / ਭਗਤੀ' }
      ],
      en: [
        { word: 'Kaala mukh', meaning: 'Blacken the face / Renounce utterly' },
        { word: 'Aadar', meaning: 'Desire for worldly respect' },
        { word: 'Lau', meaning: 'Flame / Absorption of devotion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं लोगों से आदर पाने की कामना में भक्ति की ऊर्जा नष्ट कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਦਰ-ਮਾਨ ਦੀ ਚਾਹ ਵਿੱਚ ਭਗਤੀ ਗੁਆ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I burning up my spiritual devotion in pursuit of earthly respect and applause?'
    },
    practicalApplication: {
      hi: 'सम्मान पाने की इच्छा का त्याग कर एकांत में प्रभु-नाम का ध्यान करें।',
      pb: 'ਮਾਨ ਦੀ ਚਾਹਤ ਛੱਡ ਕੇ ਨਾਮ ਜਪੋ।',
      en: 'Set fire to the craving for worldly applause, and kindle the flame of inner Nam.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे मान-सम्मान की चाह से मुक्त कर अपने पावन नाम की अखंड लगन दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਨਾਮ ਦੀ ਲਗਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Saheb! Free me from craving respect, and kindle in me constant love for Nam.'
    },
    quiz: []
  },
  {
    id: 'maan-16',
    number: 1554,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १६',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੬',
      en: 'Maan Ko Ang - 16',
    },
    text: {
      hi: 'बग ध्यानी ज्ञानी घने, अरथी मिले अनेक।\nमान रहित कबीर कहैं, सो लाखन में एक।।',
      pb: 'ਬਗ ਧ੍ਯਾਨੀ ਗਿਆਨੀ ਘਨੇ, ਅਰਥੀ ਮਿਲੇ ਅਨੇਕ।\nਮਾਨ ਰਹਿਤ ਕਬੀਰ ਕਹੈਂ, ਸੋ ਲਾਖਨ ਮੈਂ ਏਕ।।',
      en: 'Bag dhyaani gyaani ghane, arathee mile anek. Maan rahit kabir kahain, so laakhan mein ek..',
    },
    transliteration: 'Bag dhyaani gyaani ghane, arathee mile anek. Maan rahit kabir kahain, so laakhan mein ek.',
    bhavarth: {
      hi: 'इस संसार में बगुले की भांति कपटी, दिखावटी ध्यान लगाने वाले, अधिक बोलने वाले ज्ञानी-अभिमानी तथा धन-संपत्ति बटोरने वाले तो बहुत मिलते हैं। कबीरजी कहते हैं कि मान से रहित सहज व सरल स्वभाव वाला गुणी व्यक्ति तो लाखों में कोई एक ही होता है।',
      pb: 'ਬਗੁਲੇ ਵਾਂਗ ਪਾਖੰਡੀ ਧਿਆਨ ਲਗਾਉਣ ਵਾਲੇ ਤੇ ਧਨ ਦੇ ਲੋਭੀ ਬਹੁਤ ਮਿਲਦੇ ਹਨ, ਪਰ ਅਹੰਕਾਰ ਤੋਂ ਰਹਿਤ ਨਿਮਰ ਪੁਰਖ ਲੱਖਾਂ ਵਿੱਚ ਕੋਈ ਇੱਕ ਹੁੰਦਾ ਹੈ।',
      en: 'The world is full of hypocritical meditators, proud talkers, and seekers of wealth. Kabir says that a truly humble person, free from ego, is one in a million.'
    },
    wordMeanings: {
      hi: [
        { word: 'बग ध्यानी (Bag dhyaani)', meaning: 'बगुला भगत / दिखावटी ध्यानी' },
        { word: 'अरथी (Arathee)', meaning: 'स्वार्थी / धन का अभिलाषी' },
        { word: 'मान रहित (Maan rahit)', meaning: 'अहंकार-शून्य / अत्यंत नम्र' }
      ],
      pb: [
        { word: 'ਬਗ ਧ੍ਯਾਨੀ (Bag dhyaani)', meaning: 'ਪਾਖੰਡੀ' },
        { word: 'ਅਰਥੀ (Arathee)', meaning: 'ਲੋਭੀ' },
        { word: 'ਮਾਨ ਰਹਿਤ (Maan rahit)', meaning: 'ਨਿਰ-ਅਹੰਕਾਰੀ' }
      ],
      en: [
        { word: 'Bag dhyaani', meaning: 'Heron-like meditator / Hypocrite' },
        { word: 'Arathee', meaning: 'Seeker of material wealth' },
        { word: 'Maan rahit', meaning: 'Free from pride / Totally humble' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा ध्यान व ज्ञान निष्कपटी है या बगुले की भांति दिखावटी है?',
      pb: 'ਕੀ ਮੇਰਾ ਧਿਆਨ ਨਿਰਮਲ ਹੈ ਜਾਂ ਵਿਖਾਵਾ ਹੈ?',
      en: 'Is my spiritual practice authentic and humble, or am I engaging in deceitful pretense?'
    },
    practicalApplication: {
      hi: 'दिखावे की भक्ति छोड़कर मान-रहित होकर सच्चे हृदय से सतगुरु की साधना करें।',
      pb: 'ਵਿਖਾਵਾ ਛੱਡ ਕੇ ਨਿਰ-ਅਹੰਕਾਰੀ ਬਣੋ।',
      en: 'Renounce hypocritical pretense; strive to become the rare soul who lives free of pride.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे मान-रहित निष्कपट साधक बनाकर अपने निज-ज्ञान से विभूषित करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਨਿਰ-ਅਹੰਕਾਰੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Transform me into a sincere, pride-free seeker worthy of Your grace.'
    },
    quiz: []
  },
  {
    id: 'maan-17',
    number: 1555,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १७',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੭',
      en: 'Maan Ko Ang - 17',
    },
    text: {
      hi: 'हाथी चढ़ि के जो फिरै, ऊपर चंवर ढुराय।\nलोग कहैं सुख भोगवै, सीधे दोजख जाय।।',
      pb: 'ਹਾਥੀ ਚੜ੍ਹਿ ਕੇ ਜੋ ਫਿਰੈ, ਊਪਰ ਚੰਵਰ ਢੁਰਾਇ।\nਲੋਗ ਕਹੈਂ ਸੁਖ ਭੋਗਵੈ, ਸੀਧੇ ਦੋਜਖ ਜਾਇ।।',
      en: 'Haathi chadhi ke jo phirai, oopar chanvar dhuraay. Log kahain sukh bhogavai, seedhe dojakha jaay..',
    },
    transliteration: 'Haathi chadhi ke jo phirai, oopar chanvar dhuraay. Log kahain sukh bhogavai, seedhe dojakha jaay.',
    bhavarth: {
      hi: 'जो व्यक्ति अभिमान के वश में होकर लोक-प्रदर्शन तथा प्रशंसा के मोह के लिए हाथी पर चढ़कर, चंवर ढुलाते हुए घूमते-फिरते हैं, उन्हें लोग सुख-भोगी समझते हैं, मगर वे अपने अहंकार से पतित होकर, महा-दुःखों की नारकीय यातना ही पाएंगे।',
      pb: 'ਜੋ ਅਹੰਕਾਰ ਵਿੱਚ ਆ ਕੇ ਹਾਥੀ ਤੇ ਚੜ੍ਹ ਕੇ ਚੌਰ ਢੁਲਾਉਂਦੇ ਹਨ, ਲੋਕ ਸਮਝਦੇ ਹਨ ਕਿ ਉਹ ਸੁਖੀ ਹਨ, ਪਰ ਉਹ ਅਹੰਕਾਰ ਕਾਰਨ ਸਿੱਧੇ ਦੋਜ਼ਖ਼ (ਨਰਕ/ਦੁੱਖ) ਵਿੱਚ ਜਾਂਦੇ ਹਨ।',
      en: 'Those who ride high on elephants with royal whisks fanning over them seem prosperous to onlookers, but their ego drags them straight into hellish suffering.'
    },
    wordMeanings: {
      hi: [
        { word: 'चंवर (Chanvar)', meaning: 'राजसी चंवर' },
        { word: 'दोजख (Dojakha)', meaning: 'नर्क / घोर दुःख' }
      ],
      pb: [
        { word: 'ਚੰਵਰ (Chanvar)', meaning: 'ਚੌਰ' },
        { word: 'ਦੋਜਖ (Dojakha)', meaning: 'ਨਰਕ / ਦੁੱਖ' }
      ],
      en: [
        { word: 'Chanvar', meaning: 'Royal ceremonial whisk' },
        { word: 'Dojakha', meaning: 'Hellish suffering / Misery' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक ठाट-बाट व सम्मान में ही अपने जीवन का परम लक्ष्य मान बैठा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸ਼ਾਨੋ-ਸ਼ੌਕਤ ਵਿੱਚ ਹੀ ਸੁਖ ਲੱਭ ਰਿਹਾ ਹਾਂ?',
      en: 'Do I mistake outer pomp and grand display for true spiritual happiness?'
    },
    practicalApplication: {
      hi: 'ऐश्वर्य व लोक-प्रदर्शन के अहंकार से दूर रहकर सादगी से प्रभु का भजन करें।',
      pb: 'ਸ਼ਾਨੋ-ਸ਼ੌਕਤ ਦਾ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਸਾਦਗੀ ਅਪਣਾਓ।',
      en: 'Do not be seduced by public honor and pomp; live simply in devotion.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे लोक-दिखावे और वैभव के अहंकार से बचाकर अपनी बंदगी में लीन रखें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਵਿਖਾਵੇ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Protect me from ostentation, and anchor me in simple, sincere worship.'
    },
    quiz: []
  },
  {
    id: 'maan-18',
    number: 1556,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १८',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੮',
      en: 'Maan Ko Ang - 18',
    },
    text: {
      hi: 'ऊंचा देखि न राचिये, ऊंचा पेड़ खजूर।\nपंखि न बैठे छांयड़े, फल लागा पै दूर।।',
      pb: 'ਊਂਚਾ ਦੇਖਿ ਨ ਰਾਚਿਯੇ, ਊਂਚਾ ਪੇੜ ਖਜੂਰ।\nਪੰਖਿ ਨ ਬੈਠੇ ਛਾਂਯੜੇ, ਫਲ ਲਾਗਾ ਪੈ ਦੂਰ।।',
      en: 'Ooncha dekhi na raachiye, ooncha ped khajoor. Pankhi na baithe chhaanyade, phal laaga pai door..',
    },
    transliteration: 'Ooncha dekhi na raachiye, ooncha ped khajoor. Pankhi na baithe chhaanyade, phal laaga pai door.',
    bhavarth: {
      hi: 'किसी की धन-संपत्ति और सुख-वैभव को देखकर उसे बहुत महान समझकर उसकी ओर आकर्षित नहीं होना चाहिए। जिस प्रकार ऊंचा तो खजूर का पेड़ भी है, परंतु उसके ऊंचा होने का कोई लाभ नहीं होता, उसकी इतनी भी छाया नहीं होती कि उसमें पक्षी भी बैठ सके और फल भी बहुत दूर लगता है। इस बड़प्पन का क्या लाभ!',
      pb: 'ਕਿਸੇ ਦੀ ਉੱਚੀ ਸ਼ਾਨ ਵੇਖ ਕੇ ਮੋਹਿਤ ਨਾ ਹੋਵੋ। ਖਜੂਰ ਦਾ ਰੁੱਖ ਵੀ ਉੱਚਾ ਹੁੰਦਾ ਹੈ, ਪਰ ਨਾ ਪੰਛੀ ਉਸ ਦੀ ਛਾਂ ਵਿੱਚ ਬੈਠਦੇ ਹਨ ਅਤੇ ਫਲ ਵੀ ਬਹੁਤ ਉੱਚਾ ਲੱਗਦਾ ਹੈ।',
      en: 'Do not be enchanted merely by high stature or worldly grandeur. A date palm is tall, yet birds find no shade under it, and its fruit hangs far out of reach.'
    },
    wordMeanings: {
      hi: [
        { word: 'राचिये (Raachiye)', meaning: 'मोहित होना / आसक्त होना' },
        { word: 'पंखि (Pankhi)', meaning: 'पक्षी' }
      ],
      pb: [
        { word: 'ਰਾਚਿਯੇ (Raachiye)', meaning: 'ਮੋਹਿਤ ਹੋਣਾ' },
        { word: 'ਪੰਖਿ (Pankhi)', meaning: 'ਪੰਛੀ' }
      ],
      en: [
        { word: 'Raachiye', meaning: 'Be fascinated / Enchanted' },
        { word: 'Pankhi', meaning: 'Birds' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं किसी के बाहरी ऊंचे पद या धन-दौलत से प्रभावित होकर आध्यात्मिक मूल्यों को तो नहीं भूल रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਬਾਹਰੀ ਵਡਿਆਈ ਵੇਖ ਕੇ ਗੁਰੂ-ਮਾਰਗ ਤੋਂ ਭਟਕ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I dazzled by worldly heights, forgetting that true greatness lies in compassion and shade?'
    },
    practicalApplication: {
      hi: 'सच्चे संतों की शरण लें जो छायादार बरगद की भांति शीतलता प्रदान करते हैं।',
      pb: 'ਸਾਧੂਆਂ ਦੀ ਸੰਗਤ ਕਰੋ ਜੋ ਨਿਮਰਤਾ ਤੇ ਸ਼ਾਂਤੀ ਦਿੰਦੇ ਹਨ।',
      en: 'Seek spiritual refuge in humble saints who offer shelter and genuine spiritual nourishment.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे सांसारिक चकाचौंध से बचाकर आत्म-ज्ञान में स्थिर करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਬਾਹਰੀ ਚਕਾਚੌਂਧ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Guru! Save me from outer illusions, and grant me inner discernment.'
    },
    quiz: []
  },
  {
    id: 'maan-19',
    number: 1557,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - १९',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੧੯',
      en: 'Maan Ko Ang - 19',
    },
    text: {
      hi: 'मान बड़ाई जगत में, कूकर की पहिचान।\nप्यार किये मुख चाटई, बैर किये तन हान।।',
      pb: 'ਮਾਨ ਬੜਾਈ ਜਗਤ ਮੈਂ, ਕੂਕਰ ਕੀ ਪਹਿਚਾਨ।\nਪ੍ਯਾਰ ਕਿਯੇ ਮੁਖ ਚਾਟਈ, ਬੈਰ ਕਿਯੇ ਤਨ ਹਾਨ।।',
      en: 'Maan badai jagat mein, kookar kee pahichaan. Pyaar kiye mukh chaatai, bair kiye tan haan..',
    },
    transliteration: 'Maan badai jagat mein, kookar kee pahichaan. Pyaar kiye mukh chaatai, bair kiye tan haan.',
    bhavarth: {
      hi: 'इस जगत में कुत्ते की पहचान उसके स्वभाव से होती है। यदि उसे सम्मान और प्यार दो तो वह मुंह तक चाटने लगता है और मारने पर काटने दौड़ता है। यही स्थिति अभिमानी मनुष्यों की भी है। यदि उन्हें सम्मान दो, तो वे सिर पर चढ़ जाते हैं और यदि ऐसा न करें तो वे शत्रु बन जाते हैं, अर्थात दोनों ही स्थितियों में वे ठीक नहीं हैं।',
      pb: 'ਮਾਨ-ਵਡਿਆਈ ਦੀ ਚਾਹ ਵਾਲੇ ਮਨੁੱਖ ਦਾ ਸੁਭਾਅ ਕੁੱਤੇ ਵਰਗਾ ਹੁੰਦਾ ਹੈ; ਪਿਆਰ ਕਰੋ ਤਾਂ ਮੂੰਹ ਚੱਟਦਾ ਹੈ, ਵੈਰ ਕਰੋ ਤਾਂ ਵੱਢਦਾ ਹੈ। ਅਹੰਕਾਰੀ ਤੋਂ ਦੂਰ ਰਹਿਣਾ ਹੀ ਭਲਾ ਹੈ।',
      en: 'The desire for praise and prestige reflects a unstable nature—like a dog that licks your face when caressed, but bites you when repulsed. Avoid prideful company.'
    },
    wordMeanings: {
      hi: [
        { word: 'कूकर (Kookar)', meaning: 'कुत्ता' },
        { word: 'तन हान (Tan haan)', meaning: 'शरीर को क्षति / काटना' }
      ],
      pb: [
        { word: 'ਕੂਕਰ (Kookar)', meaning: 'ਕੁੱਤਾ' },
        { word: 'ਤਨ ਹਾਨ (Tan haan)', meaning: 'ਸਰੀਰ ਨੂੰ ਨੁਕਸਾਨ' }
      ],
      en: [
        { word: 'Kookar', meaning: 'Dog' },
        { word: 'Tan haan', meaning: 'Harm to body / Biting' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन भी मान मिलने पर अति-प्रसन्न और अपमान मिलने पर हिंसक या क्रुद्ध तो नहीं हो जाता?',
      pb: 'ਕੀ ਮੇਰਾ ਮਨ ਮਾਨ-ਅਪਮਾਨ ਵਿੱਚ ਅਸਥਿਰ ਹੁੰਦਾ ਹੈ?',
      en: 'Does my mind fluctuate wildly between arrogance when praised and anger when criticized?'
    },
    practicalApplication: {
      hi: 'मान व अपमान दोनों से परे होकर समभाव में रहें और सतगुरु के नाम का आधार लें।',
      pb: 'ਮਾਨ ਤੇ ਅਪਮਾਨ ਦੋਹਾਂ ਵਿੱਚ ਸਮ-ਭਾਵ ਰੱਖੋ।',
      en: 'Cultivate mental poise beyond praise and blame, centered in spiritual wisdom.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु साहेब! मुझे मान-अपमान से परे समता का भाव प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਮ-ਭਾਵ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Bless me with equanimity that remains undisturbed by praise or insult.'
    },
    quiz: []
  },
  {
    id: 'maan-20',
    number: 1558,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २०',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੦',
      en: 'Maan Ko Ang - 20',
    },
    text: {
      hi: 'बड़ी बड़ाई ऊंट की, लादे जहं लग सांस।\nमुहकम सलिता लादि के, ऊपर चढ़े परास।।',
      pb: 'ਬੜੀ ਬੜਾਈ ਊਂਟ ਕੀ, ਲਾਦੇ ਜਹਂ ਲਗ ਸਾਂਸ।\nਮੁਹਕਮ ਸਲਿਤਾ ਲਾਦਿ ਕੇ, ਊਪਰ ਚੜ੍ਹੇ ਪਰਾਸ।।',
      en: 'Badi badai oont kee, laade jahan lag saans. Muhakam salita laadi ke, oopar chadhe paraas..',
    },
    transliteration: 'Badi badai oont kee, laade jahan lag saans. Muhakam salita laadi ke, oopar chadhe paraas.',
    bhavarth: {
      hi: 'ऊंट की बहुत बड़ाई की जाती है और वह सिर ऊपर उठाकर चलता है। इसलिए वह जीवन-भर बोझा ढोता रहता है। उसके ऊपर मजबूत सलिता (काठी) कसकर ऊपर से परास (ऊंट वाला) भी चढ़ लेता है। ऊंट अभिमान का प्रतीक है, जिसे मान-बड़ाई के कारण बोझ लादना पड़ता है।',
      pb: 'ਊਂਟ ਉੱਚਾ ਹੋਣ ਦਾ ਮਾਨ ਕਰਦਾ ਹੈ, ਇਸੇ ਲਈ ਜਿਉਂਦੇ ਜੀਅ ਭਾਰ ਢੋਂਦਾ ਰਹਿੰਦਾ ਹੈ। ਉਸ ਤੇ ਕਾਠੀ ਬੰਨ੍ਹ ਕੇ ਸਵਾਰ ਵੀ ਉੱਪਰ ਬੈਠ ਜਾਂਦਾ ਹੈ। ਅਹੰਕਾਰ ਦਾ ਅੰਤ ਭਾਰੀ ਦੁੱਖ ਹੈ।',
      en: 'The camel prides itself on its high posture, and consequently carries heavy loads until its last breath. Pride only brings endless burdens and suffering.'
    },
    wordMeanings: {
      hi: [
        { word: 'मुहकम (Muhakam)', meaning: 'मजबूत / कसकर' },
        { word: 'सलिता (Salita)', meaning: 'काठी / बोझा बाँधने का साधन' },
        { word: 'परास (Paraas)', meaning: 'ऊंट सवार / महावत' }
      ],
      pb: [
        { word: 'ਮੁਹਕਮ (Muhakam)', meaning: 'ਮਜ਼ਬੂਤ' },
        { word: 'ਸਲਿਤਾ (Salita)', meaning: 'ਕਾਠੀ' },
        { word: 'ਪਰਾਸ (Paraas)', meaning: 'ਊਂਟ ਦਾ ਸਵਾਰ' }
      ],
      en: [
        { word: 'Muhakam', meaning: 'Firm / Tightly bound' },
        { word: 'Salita', meaning: 'Saddle / Pack-saddle' },
        { word: 'Paraas', meaning: 'Rider / Camel driver' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी बड़प्पन के अहंकार में आकर चिंताओं एवं जिम्मेदारियों का अवांछित बोझ ढो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਅਹੰਕਾਰ ਵਿੱਚ ਚਿੰਤਾਵਾਂ ਦਾ ਭਾਰ ਢੋ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I bearing unnecessary mental burdens just to maintain an image of worldly importance?'
    },
    practicalApplication: {
      hi: 'अहंकार और बड़प्पन का बोझा उतारकर हलके-फुलके होकर भक्ति साधना में रमें।',
      pb: 'ਅਹੰਕਾਰ ਦਾ ਭਾਰ ਲਾਹ ਕੇ ਨਿਮਰ ਬਣੋ।',
      en: 'Shed the burden of pride; live lightly and freely in constant devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे अहंकार का भारी बोझ उतारकर निष्काम जीवन जीने की कृपा दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਅਹੰਕਾਰ ਦਾ ਭਾਰ ਲਾਹ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Lift the crushing burden of ego from my shoulders, and grant me spiritual rest.'
    },
    quiz: []
  },
  {
    id: 'maan-21',
    number: 1559,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २१',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੧',
      en: 'Maan Ko Ang - 21',
    },
    text: {
      hi: 'ऊंचा पानी ना टिकै, नीचे ही ठहराय।\nनीचा होय सो भरि पिये, ऊंच पियासा जाय।।',
      pb: 'ਊਂਚਾ ਪਾਨੀ ਨਾ ਟਿਕੈ, ਨੀਚੇ ਹੀ ਠਹਰਾਇ।\nਨੀਚਾ ਹੋਇ ਸੋ ਭਰਿ ਪਿਯੇ, ਊਂਚ ਪਿਯਾਸਾ ਜਾਇ।।',
      en: 'Ooncha paani na tikai, neeche hee thaharaay. Neecha hoy so bhari piye, oonch piyaasa jaay..',
    },
    transliteration: 'Ooncha paani na tikai, neeche hee thaharaay. Neecha hoy so bhari piye, oonch piyaasa jaay.',
    bhavarth: {
      hi: 'ऊंची भूमि (टीला) पर पानी कभी नहीं रुक पाता, वह नीची भूमि (गड्ढे) में ही जाकर रुकता है, जो अपने-आपको नीचा करेगा, वह अंजलि भरकर भर पेट पानी पीएगा, परंतु जो नीचा नहीं होगा, ऊंचा तना खड़ा रहेगा, वह तो प्यासा ही रह जाएगा, अतः उच्चाभिमान त्यागकर, दीनता-विनम्रता ग्रहण करो।',
      pb: 'ਉੱਚੀ ਥਾਂ ਤੇ ਪਾਣੀ ਕਦੇ ਨਹੀਂ ਟਿਕਦਾ, ਉਹ ਨੀਵੀਂ ਥਾਂ ਤੇ ਹੀ ਇਕੱਠਾ ਹੁੰਦਾ ਹੈ। ਜੋ ਨਿਮਰ (ਨੀਵਾਂ) ਹੁੰਦਾ ਹੈ, ਉਹੀ ਨਾਮ-ਅੰਮ੍ਰਿਤ ਰੱਜ ਕੇ ਪੀਂਦਾ ਹੈ, ਅਹੰਕਾਰੀ ਪਿਆਸਾ ਹੀ ਰਹਿ ਜਾਂਦਾ ਹੈ।',
      en: 'Water never stays on high ground; it flows down and gathers in low hollows. He who bends low drinks his fill of divine nectar, while the proud standing tall remain thirsty.'
    },
    wordMeanings: {
      hi: [
        { word: 'ऊंचा (Ooncha)', meaning: 'उच्च स्थान / अहंकार' },
        { word: 'नीचा (Neecha)', meaning: 'निम्न स्थान / नम्रता / दीनता' },
        { word: 'भरि पिये (Bhari piye)', meaning: 'भरपेट पीना / पूर्ण तृप्त होना' }
      ],
      pb: [
        { word: 'ਊਂਚਾ (Ooncha)', meaning: 'ਉੱਚੀ ਥਾਂ / ਅਹੰਕਾਰ' },
        { word: 'ਨੀਚਾ (Neecha)', meaning: 'ਨਿਮਰਤਾ' },
        { word: 'ਭਰਿ ਪਿਯੇ (Bhari piye)', meaning: 'ਰੱਜ ਕੇ ਪੀਣਾ' }
      ],
      en: [
        { word: 'Ooncha', meaning: 'High ground / Arrogance' },
        { word: 'Neecha', meaning: 'Low place / Humility' },
        { word: 'Bhari piye', meaning: 'Drinks to full satisfaction' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने अभिमान के कारण गुरु-कृपा व नाम-अमृत के रस से वंचित तो नहीं हो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਅਹੰਕਾਰ ਕਾਰਨ ਨਾਮ-ਅੰਮ੍ਰਿਤ ਤੋਂ ਵਾਂਝਾ ਹਾਂ?',
      en: 'Does my high stiffness prevent the refreshing waters of Grace from settling in my heart?'
    },
    practicalApplication: {
      hi: 'अत्यंत नम्र व झुके हुए बनकर सतगुरुदेव के ज्ञान-अमृत का रसपान करें।',
      pb: 'ਨਿਮਰ ਬਣ ਕੇ ਨਾਮ-ਅੰਮ੍ਰਿਤ ਦਾ ਰਸ ਲਵੋ।',
      en: 'Bend low in profound humility to drink deeply from the reservoir of Guru-Grace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु साहेब! मुझे नम्रता की गहराई प्रदान करें ताकि आपकी कृपा रूपी जल से मेरा हृदय सदा तृप्त रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਮਰਤਾ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Lower my pride so that Your divine grace may collect and overflow within me.'
    },
    quiz: []
  },
  {
    id: 'maan-22',
    number: 1560,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २२',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੨',
      en: 'Maan Ko Ang - 22',
    },
    text: {
      hi: 'बड़ा हुआ तो क्या हुआ, जोरे बड़ मति नांहि।\nजैसे फूल उजाड़ का, मिथ्या हो झड़ जांहि।।',
      pb: 'ਬੜਾ ਹੁਆ ਤੋ ਕ੍ਯਾ ਹੁਆ, ਜੋਰੇ ਬੜ ਮਤਿ ਨਾਂਹਿ।\nਜੈਸੇ ਫੂਲ ਉਜਾੜ ਕਾ, ਮਿਥ੍ਯਾ ਹੋ ਝੜ ਜਾਹਿ।।',
      en: 'Bada hua to kya hua, jore bad mati naahi. Jaise phool ujaad ka, mithya ho jhad jaahi..',
    },
    transliteration: 'Bada hua to kya hua, jore bad mati naahi. Jaise phool ujaad ka, mithya ho jhad jaahi.',
    bhavarth: {
      hi: 'धन-संपत्ति, जाति-कुल, विद्या-बल आदि को पाकर बड़ा होने से कोई लाभ नहीं, यदि विवेक विचार कर संत जनों से अपने मन को नहीं जोड़ा। जिस प्रकार किसी गहन जंगल में कोई फूल खिला और बिना किसी उपयोग में आए, व्यर्थ में झड़कर नष्ट हो गया, उसी प्रकार केवल अभिमानवश बड़ा होकर मर जाने में कोई बड़प्पन नहीं है।',
      pb: 'ਧਨ ਜਾਂ ਕੁਲ ਕਰਕੇ ਵੱਡਾ ਹੋਣ ਦਾ ਕੀ ਫ਼ਾਇਦਾ ਜੇਕਰ ਬੁੱਧੀ ਸ਼੍ਰੇਸ਼ਠ ਨਾ ਹੋਵੇ? ਉਹ ਤਾਂ ਉਜਾੜ ਵਿੱਚ ਖਿੜੇ ਉਸ ਫੁੱਲ ਵਾਂਗ ਹੈ, ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਕੰਮ ਆਏ ਵਿਅਰਥ ਹੀ ਝੜ ਜਾਂਦਾ ਹੈ।',
      en: 'What good is worldly stature if one lacks noble spiritual wisdom? It is like a flower blooming in a deserted wilderness—unappreciated, useless, and dropping away in vain.'
    },
    wordMeanings: {
      hi: [
        { word: 'जोरे (Jore)', meaning: 'जोड़ना / लगाना' },
        { word: 'उजाड़ (Ujaad)', meaning: 'गहन जंगल / निर्जन स्थान' },
        { word: 'मिथ्या (Mithya)', meaning: 'व्यर्थ / निष्फल' }
      ],
      pb: [
        { word: 'ਜੋਰੇ (Jore)', meaning: 'ਜੋੜਨਾ' },
        { word: 'ਉਜਾੜ (Ujaad)', meaning: 'ਜੰਗਲ' },
        { word: 'ਮਿਥ੍ਯਾ (Mithya)', meaning: 'ਵਿਅਰਥ' }
      ],
      en: [
        { word: 'Jore', meaning: 'To connect / Join' },
        { word: 'Ujaad', meaning: 'Wilderness / Deserted forest' },
        { word: 'Mithya', meaning: 'Futile / In vain' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा जीवन बिना प्रभु-ज्ञान व निष्काम सेवा के जंगल के फूल की भांति व्यर्थ ही बीत रहा है?',
      pb: 'ਕੀ ਮੇਰਾ ਜੀਵਨ ਵਿਅਰਥ ਬੀਤ ਰਿਹਾ ਹੈ?',
      en: 'Am I wasting my life like a wild flower in a deserted forest, offering no perfume of spiritual service?'
    },
    practicalApplication: {
      hi: 'अपने जीवन को सतगुरु के चरणों में समर्पित कर सद्गुणों व नाम-सुगंध से सुवासित करें।',
      pb: 'ਜੀਵਨ ਨੂੰ ਸਤਿਗੁਰੂ ਦੇ ਲੇਖੇ ਲਗਾਓ।',
      en: 'Dedicate your skills and intellect to holy service so your life blossoms with spiritual fragrance.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मेरे जीवन को निष्फल होने से बचाकर गुरु-भक्ति व सेवा में सार्थक करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪ੍ਰਭੂ! ਮੇਰਾ ਜੀਵਨ ਸਫ਼ਲ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Let my life not fade in vain; consecrate my mind and intellect in Your sacred service.'
    },
    quiz: []
  },
  {
    id: 'maan-23',
    number: 1561,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २३',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੩',
      en: 'Maan Ko Ang - 23',
    },
    text: {
      hi: 'मान तजा तो क्या भया, मन का मता न जाय।\nसंत बचन मानै नहीं, ताको हरि न सुहाय।।',
      pb: 'ਮਾਨ ਤਜਾ ਤੋ ਕ੍ਯਾ ਭਇਆ, ਮਨ ਕਾ ਮਤਾ ਨ ਜਾਇ।\nਸੰਤ ਬਚਨ ਮਾਨੈ ਨਹੀਂ, ਤਾਕੋ ਹਰਿ ਨ ਸੁਹਾਇ।।',
      en: 'Maan taja to kya bhaya, man ka mata na jaay. Sant bachan maanai nahin, taako hari na suhaay..',
    },
    transliteration: 'Maan taja to kya bhaya, man ka mata na jaay. Sant bachan maanai nahin, taako hari na suhaay.',
    bhavarth: {
      hi: 'चंचल मन अपनी मनमानी करता है। कामनाओं के वशीभूत होकर चारों दिशाओं में अपनी इच्छानुसार विचरण करता है। ऐसे में अभिमान के त्याग का क्या लाभ हुआ, अर्थात इसके त्याग से मन शांत होना चाहिए। जो व्यक्ति संत-गुरु के वचन-उपदेश को नहीं मानता, उसे सर्व घट-व्यापी, अंतर्यामी परमात्मा का ज्ञान-दर्शन भी नहीं सुहा सकता।',
      pb: 'ਜੇਕਰ ਮਾਨ ਛੱਡ ਵੀ ਦਿੱਤਾ ਪਰ ਮਨ ਦੀ ਮਨਮਰਜ਼ੀ ਨਾ ਗਈ, ਤਾਂ ਕੀ ਲਾਭ? ਜੋ ਸੰਤਾਂ ਦੇ ਬਚਨ ਨਹੀਂ ਮੰਨਦਾ, ਉਸ ਨੂੰ ਹਰਿ (ਨਾਮ) ਵੀ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੁੰਦਾ।',
      en: 'What good is abandoning pride if your willful mind still follows its own egoistic whims? He who does not obey the words of the saints can never find favor with the Supreme Lord.'
    },
    wordMeanings: {
      hi: [
        { word: 'मता (Mata)', meaning: 'मनमानी / जिद्दी संकल्प' },
        { word: 'सुहाय (Suhaay)', meaning: 'अच्छा लगना / प्राप्त होना' }
      ],
      pb: [
        { word: 'ਮਤਾ (Mata)', meaning: 'ਮਨਮਰਜ਼ੀ' },
        { word: 'ਸੁਹਾਇ (Suhaay)', meaning: 'ਪ੍ਰਾਪਤ ਹੋਣਾ / ਚੰਗਾ ਲੱਗਣਾ' }
      ],
      en: [
        { word: 'Mata', meaning: 'Willfulness / Egoistic inclination' },
        { word: 'Suhaay', meaning: 'Appealing / Attainable' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन के हठ व मनमानी को छोड़कर सतगुरु के वचनों का पालन कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਬਚਨ ਮੰਨ ਰਿਹਾ ਹਾਂ?',
      en: 'Have I truly surrendered my willful mind to the righteous instructions of the Satguru?'
    },
    practicalApplication: {
      hi: 'अपनी मनमुखी बुद्धि त्याग कर पूरी निष्ठा से गुरु-आज्ञा का पालन करें।',
      pb: 'ਮਨਮਤਿ ਛੱਡ ਕੇ ਗੁਰਮਤਿ ਅਪਣਾਓ।',
      en: 'Set aside self-willed stubbornness, and faithfully obey the sacred teachings of the Guru.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे मन की मनमानी से बचाकर सदा आपकी आज्ञा में चलने वाला शिष्य बनाएं। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਬਚਨਾਂ ਦਾ ਧਾਰਨੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Save me from self-will, and grant me the grace of joyful obedience to Your word.'
    },
    quiz: []
  },
  {
    id: 'maan-24',
    number: 1562,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २४',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੪',
      en: 'Maan Ko Ang - 24',
    },
    text: {
      hi: 'मान दिया मन हरषिया, अपमाने तन छीन।\nकहैं कबीर तब जानिये, माया में लौ लीन।।',
      pb: 'ਮਾਨ ਦਿਯਾ ਮਨ ਹਰਖਿਯਾ, ਅਪਮਾਨੇ ਤਨ ਛੀਨ।\nਕਹੈਂ ਕਬੀਰ ਤਬ ਜਾਨਿਯੇ, ਮਾਇਆ ਮੈਂ ਲੌ ਲੀਨ।।',
      en: 'Maan diya man harashiya, apamaane tan chheen. Kahain kabir tab jaaniye, maya mein lau leen..',
    },
    transliteration: 'Maan diya man harashiya, apamaane tan chheen. Kahain kabir tab jaaniye, maya mein lau leen.',
    bhavarth: {
      hi: 'जब किसी के सम्मान देने से मन हर्षित हो जाए, खुशी से फूला न समाए, परंतु अपमान के मिलने से यही मन शोकाकुल हो जाए, दुःख से भर जाए, तो कबीरजी कहते हैं कि अच्छी तरह जान लो, हमारा यह मन अर्थात ‘हम’ माया में डूबे हुए हैं। दूसरे शब्दों में हमें मान-अपमान दोनों से रहित होकर सेवा-भक्ति का जीवन जीना चाहिए।',
      pb: 'ਜਦੋਂ ਮਾਨ ਮਿਲਣ ਤੇ ਮਨ ਖ਼ੁਸ਼ ਹੁੰਦਾ ਹੈ ਅਤੇ ਅਪਮਾਨ ਨਾਲ ਮਨ ਦੁਖੀ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸਮਝ ਲਵੋ ਮਨ ਅਜੇ ਵੀ ਮਾਇਆ ਵਿੱਚ ਡੁੱਬਿਆ ਹੋਇਆ ਹੈ।',
      en: 'When praise makes your heart swell with joy, and insult leaves you crushed and grieving, know for certain—says Kabir—that your mind is still entangled in Maya.'
    },
    wordMeanings: {
      hi: [
        { word: 'हरषिया (Harashiya)', meaning: 'प्रसन्न होना / हर्षण' },
        { word: 'छीन (Chheen)', meaning: 'दुःखी / क्षीण / निराश' },
        { word: 'लौ लीन (Lau leen)', meaning: 'डूबा हुआ / आसक्त' }
      ],
      pb: [
        { word: 'ਹਰਖਿਯਾ (Harashiya)', meaning: 'ਖ਼ੁਸ਼ ਹੋਣਾ' },
        { word: 'ਛੀਨ (Chheen)', meaning: 'ਦੁਖੀ / ਨਿਰਾਸ਼' },
        { word: 'ਲੌ ਲੀਨ (Lau leen)', meaning: 'ਡੁੱਬਿਆ ਹੋਇਆ' }
      ],
      en: [
        { word: 'Harashiya', meaning: 'Elated / Gladdened' },
        { word: 'Chheen', meaning: 'Grieved / Weakened' },
        { word: 'Lau leen', meaning: 'Absorbed / Entangled' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन प्रशंसा मिलने पर फूल उठता है और निंदा मिलने पर उदास हो जाता है?',
      pb: 'ਕੀ ਮੈਂ ਮਾਨ-ਅਪਮਾਨ ਵਿੱਚ ਡੋਲਦਾ ਹਾਂ?',
      en: 'Does my emotional balance shatter whenever praise turns into criticism?'
    },
    practicalApplication: {
      hi: 'मान और अपमान दोनों स्थिति में समभाव रखकर माया के इस द्वंद्व से ऊपर उठें।',
      pb: 'ਮਾਨ-ਅਪਮਾਨ ਵਿੱਚ ਸਮ-ਭਾਵ ਰੱਖੋ।',
      en: 'Rise above the duality of praise and blame, anchoring yourself in eternal inner quietude.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे मान-अपमान के इस मायावी द्वंद्व से मुक्त कर निश्चल स्थिति प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਦਵੰਦਾਂ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Deliver me from the illusion of praise and blame, and fix my soul in peace.'
    },
    quiz: []
  },
  {
    id: 'maan-25',
    number: 1563,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २५',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੫',
      en: 'Maan Ko Ang - 25',
    },
    text: {
      hi: 'जौन मिला सो गुरु मिला, चेला मिला न कोय।\nचेला को चेला मिलै, तब कछु होय तो होय।।',
      pb: 'ਜੌਨ ਮਿਲਾ ਸੋ ਗੁਰੂ ਮਿਲਾ, ਚੇਲਾ ਮਿਲਾ ਨ ਕੋਇ।\nਚੇਲਾ ਕੋ ਚੇਲਾ ਮਿਲੈ, ਤਬ ਕਛੁ ਹੋਇ ਤੋ ਹੋਇ।।',
      en: 'Jaun mila so guru mila, chela mila na koy. Chela ko chela milai, tab kachhu hoy to hoy..',
    },
    transliteration: 'Jaun mila so guru mila, chela mila na koy. Chela ko chela milai, tab kachhu hoy to hoy.',
    bhavarth: {
      hi: 'इस संसार में अभिमानी लोग बहुत हैं। वे सदा गुरु-रूप में ही मिलते हैं, अर्थात हर कोई अपने आपको महान सिद्ध करना चाहता है। शिष्य भाव में आकर कोई नहीं मिलता, जो स्वयं भी सद्गुरु का शिष्य हो, उसे ऐसा ही जिज्ञासु शिष्य मिले, तभी ज्ञानकर्म की सिद्धि हो सकती है, अर्थात गुणग्राही को, गुणग्राही ही मिलना चाहिए।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਅਹੰਕਾਰ ਵਸ ਹਰ ਕੋਈ ਗੁਰੂ (ਵੱਡਾ) ਬਣ ਕੇ ਮਿਲਦਾ ਹੈ, ਸ਼ਿਸ਼ (ਚੇਲਾ) ਬਣ ਕੇ ਕੋਈ ਨਹੀਂ ਮਿਲਦਾ। ਜਦੋਂ ਸੱਚਾ ਸੇਵਕ ਸੱਚੇ ਸੇਵਕ ਨੂੰ ਮਿਲਦਾ ਹੈ, ਉਦੋਂ ਹੀ ਕਲਿਆਣ ਹੁੰਦਾ ਹੈ।',
      en: 'Every arrogant person you meet acts like a master; almost no one comes in humble discipleship. True spiritual progress happens only when a humble seeker meets another humble seeker.'
    },
    wordMeanings: {
      hi: [
        { word: 'गुरु मिला (Guru mila)', meaning: 'अहंकारी / उपदेशक बनने को आतुर' },
        { word: 'चेला (Chela)', meaning: 'नम्र जिज्ञासु / शिष्य भाव' }
      ],
      pb: [
        { word: 'ਗੁਰੂ ਮਿਲਾ (Guru mila)', meaning: 'ਅਹੰਕਾਰੀ' },
        { word: 'ਚੇਲਾ (Chela)', meaning: 'ਨਿਮਰ ਸਿੱਖ' }
      ],
      en: [
        { word: 'Guru mila', meaning: 'Meets as a self-important master' },
        { word: 'Chela', meaning: 'Humble disciple / Learner' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं दूसरों के सामने उपदेशक (गुरु) बनने का यत्न करता हूँ या सीखने वाला नम्र शिष्य बनता हूँ?',
      pb: 'ਕੀ ਮੇਰੇ ਅੰਦਰ ਸਿੱਖਣ ਵਾਲੀ ਨਿਮਰਤਾ ਹੈ?',
      en: 'Do I constantly try to preach like a master, or do I embody the receptive humility of a disciple?'
    },
    practicalApplication: {
      hi: 'अहंकार छोड़कर सदा सतगुरु का नम्र शिष्य (चेला) बनकर सत्संग का लाभ उठाएं।',
      pb: 'ਹਮੇਸ਼ਾ ਨਿਮਰ ਸਿੱਖ ਬਣ ਕੇ ਰਹੋ।',
      en: 'Always maintain the humble posture of a receptive learner in the presence of Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे जीवन भर आपका अनन्य, नम्र शिष्य बनाए रखें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਹਮੇਸ਼ਾ ਨਿਮਰ ਸੇਵਕ ਬਣਾ ਕੇ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Keep me forever as Your humble disciple, eager to learn and obey.'
    },
    quiz: []
  },
  {
    id: 'maan-26',
    number: 1564,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २६',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੬',
      en: 'Maan Ko Ang - 26',
    },
    text: {
      hi: 'लेने को हरिनाम है, देने को अंनदान।\nतरने को है दीनता, बूड़न को अभिमान।।',
      pb: 'ਲੇਨੇ ਕੋ ਹਰਿਨਾਮ ਹੈ, ਦੇਨੇ ਕੋ ਅੰਨਦਾਨ।\nਤਰਨੇ ਕੋ ਹੈ ਦੀਨਤਾ, ਬੂੜਨ ਕੋ ਅਭਿਮਾਨ।।',
      en: 'Lene ko harinaam hai, dene ko anmdaan. Tarane ko hai deenata, boodan ko abhimaan..',
    },
    transliteration: 'Lene ko harinaam hai, dene ko anmdaan. Tarane ko hai deenata, boodan ko abhimaan.',
    bhavarth: {
      hi: 'इस संसार में ग्रहण करने के लिए तो सद्गुरु के नाम-ज्ञान का सदुपदेश है। और किसी को देने के लिए सर्वोत्तम अन्न का दान है। इस भव-सागर से तरने के लिए दीनता ही सद्गुण है तथा डूब मरने के लिए अभिमान है, अतः जीवन-कल्याण के लिए अभिमान का त्याग करना चाहिए।',
      pb: 'ਲੈਣ ਲਈ ਹਰਿ-ਨਾਮ ਸ੍ਰੇਸ਼ਠ ਹੈ, ਦੇਣ ਲਈ ਅੰਨ ਦਾ ਦਾਨ ਸ੍ਰੇਸ਼ਠ ਹੈ। ਸੰਸਾਰ-ਸਮੁੰਦਰ ਤੋਂ ਤਰਨ ਲਈ ਨਿਮਰਤਾ ਹੈ ਅਤੇ ਡੁੱਬਣ ਲਈ ਅਹੰਕਾਰ ਹੈ।',
      en: 'To receive, the Supreme Name is best; to give, the gift of food is finest. To cross the ocean of existence, humility is your raft; to drown, pride is your stone.'
    },
    wordMeanings: {
      hi: [
        { word: 'अंनदान (Anmdaan)', meaning: 'अन्न का दान / सेवा' },
        { word: 'तरने को (Tarane ko)', meaning: 'भवसागर से पार होने का साधन' },
        { word: 'बूड़न को (Boodan ko)', meaning: 'डूब मरने का कारण' }
      ],
      pb: [
        { word: 'ਅੰਨਦਾਨ (Anmdaan)', meaning: 'ਅੰਨ ਦਾ ਦਾਨ' },
        { word: 'ਤਰਨੇ ਕੋ (Tarane ko)', meaning: 'ਪਾਰ ਲੰਘਣ ਲਈ' },
        { word: 'ਬੂੜਨ ਕੋ (Boodan ko)', meaning: 'ਡੁੱਬਣ ਲਈ' }
      ],
      en: [
        { word: 'Anmdaan', meaning: 'Charity of food / Nourishment' },
        { word: 'Tarane ko', meaning: 'Means to cross the ocean' },
        { word: 'Boodan ko', meaning: 'Cause of drowning / Ruin' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं तरने वाले साधन (दीनता व नाम) को अपना रहा हूँ या डुबाने वाले पत्थर (अभिमान) को ढो रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਤਰਨ ਵਾਲੀ ਨਿਮਰਤਾ ਅਪਣਾ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I boarding the raft of humility and Nam, or tying the heavy stone of pride around my neck?'
    },
    practicalApplication: {
      hi: 'नाम-स्मरण, सेवा-दान तथा अत्यंत दीनता धारण करके जीवन-कल्याण का मार्ग प्रशस्त करें।',
      pb: 'ਨਾਮ ਜਪੋ, ਸੇਵਾ ਕਰੋ ਤੇ ਨਿਮਰਤਾ ਧਾਰਨ ਕਰੋ।',
      en: 'Chant Nam, serve freely, and live with deep humility to easily cross life’s ocean.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे नाम-सुमिरन, अन्नदान एवं अटूट दीनता का वरदान प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਾਮ ਤੇ ਨਿਮਰਤਾ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Bless me with Nam devotion, selfless charity, and steadfast humility.'
    },
    quiz: []
  },
  {
    id: 'maan-27',
    number: 1565,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मान को अंग - २७',
      pb: 'ਮਾਨ ਕੋ ਅੰਗ - ੨੭',
      en: 'Maan Ko Ang - 27',
    },
    text: {
      hi: 'ऊंचे कुल में जनमिया, देह धरी अस्थूल।\nपार ब्रह्म को ना चढ़े, वास विहूना फूल।।',
      pb: 'ਊਂਚੇ ਕੁਲ ਮੈਂ ਜਨਮਿਯਾ, ਦੇਹ ਧਰੀ ਅਸਥੂਲ।\nਪਾਰ ਬ੍ਰਹ੍ਮ ਕੋ ਨਾ ਚੜ੍ਹੇ, ਵਾਸ ਵਿਹੂਨਾ ਫੂਲ।।',
      en: 'Oonche kul mein janamaniya, deh dharee asthool. Paar brahm ko na chadhe, vaas vihoona phool..',
    },
    transliteration: 'Oonche kul mein janamaniya, deh dharee asthool. Paar brahm ko na chadhe, vaas vihoona phool.',
    bhavarth: {
      hi: 'उत्तम कुल में जन्म लिया और बहुत ही सुंदर बलशाली शरीर भी प्राप्त कर लिया, परंतु इस सबका अभिमान व्यर्थ है, इसकी कोई सार्थकता नहीं है। जैसे सुगंधहीन सेमर आदि का फूल इष्टदेव पर नहीं चढ़ाया जाता, वैसे ही विवेक, विचार, विनय, शील आदि मानवीय सद्गुणों के बिना मनुष्य-जीवन व्यर्थ ही है।',
      pb: 'ਉੱਚੇ ਖ਼ਾਨਦਾਨ ਵਿੱਚ ਜਨਮ ਲਿਆ ਤੇ ਸੁੰਦਰ ਸਰੀਰ ਪਾਇਆ, ਪਰ ਜੇਕਰ ਅੰਦਰ ਨਾਮ ਤੇ ਗੁਣਾਂ ਦੀ ਸੁਗੰਧ ਨਹੀਂ, ਤਾਂ ਉਹ ਬਿਨਾਂ ਖ਼ੁਸ਼ਬੂ ਦੇ ਫੁੱਲ ਵਾਂਗ ਹੈ ਜੋ ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਨਹੀਂ ਚੜ੍ਹਾਇਆ ਜਾਂਦਾ।',
      en: 'Taking birth in a high family and having a strong physique are meaningless if devoid of spiritual virtue. Like a scentless flower that is rejected at God’s altar, a person without devotion is worthless.'
    },
    wordMeanings: {
      hi: [
        { word: 'अस्थूल (Asthool)', meaning: 'विशाल / बलशाली / सुंदर शरीर' },
        { word: 'बास विहूना (Baas vihoona)', meaning: 'सुगंध-हीन / गुण-हीन' }
      ],
      pb: [
        { word: 'ਅਸਥੂਲ (Asthool)', meaning: 'ਸੁੰਦਰ ਸਰੀਰ' },
        { word: 'ਵਾਸ ਵਿਹੂਨਾ (Baas vihoona)', meaning: 'ਖ਼ੁਸ਼ਬੂ ਤੋਂ ਬਿਨਾਂ' }
      ],
      en: [
        { word: 'Asthool', meaning: 'Strong or grand physical form' },
        { word: 'Baas vihoona', meaning: 'Scentless / Without spiritual fragrance' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा जीवन भक्ति, विनय व शील रूपी सुगंध से सुवासित है या मैं केवल सुगंधहीन फूल की भांति हूँ?',
      pb: 'ਕੀ ਮੇਰੇ ਅੰਦਰ ਭਗਤੀ ਦੀ ਖ਼ੁਸ਼ਬੂ ਹੈ?',
      en: 'Is my life filled with the divine perfume of devotion and humility, or am I like a scentless flower?'
    },
    practicalApplication: {
      hi: 'कुल व सौंदर्य का अभिमान छोड़कर भक्ति व सद्गुणों की सुगंध से जीवन को सुवासित करें।',
      pb: 'ਸਰੀਰ ਦਾ ਅਹੰਕਾਰ ਛੱਡ ਕੇ ਭਗਤੀ ਕਰੋ।',
      en: 'Abandon pride of birth and beauty; perfume your soul with devotion and holy character.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु साहेब! मेरे जीवन में भक्ति व विवेक रूपी पावन सुगंध भर दें ताकि मैं आपके चरणों में स्वीकार्य हो सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਜੀਵਨ ਨੂੰ ਨਾਮ ਦੀ ਖ਼ੁਸ਼ਬੂ ਨਾਲ ਭਰ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Fill my soul with the divine fragrance of Nam so that I may be offered at Your holy feet.'
    },
    quiz: []
  }
];
