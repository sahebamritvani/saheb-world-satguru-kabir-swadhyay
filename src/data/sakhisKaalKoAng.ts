import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_KAAL_KO_ANG: Sakhi[] = [
  {
    id: 'kaal-1',
    number: 1301,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧',
      en: 'Kaal Ko Ang - 1',
    },
    text: {
      hi: 'आस पास जोधा खडे, सबे बजावै गाल।\nमंझ महल ते ले चला, ऐसा परबल काल।।',
      pb: devanagariToGurmukhi('आस पास जोधा खडे, सबे बजावै गाल। मंझ महल ते ले चला, ऐसा परबल काल।।'),
      en: 'Aas paas jodha khade, sabe bajaavai gaal. Manjh mahal te le chala, aisa parbal kaal..'
    },
    transliteration: 'Aas paas jodha khade, sabe bajaavai gaal. Manjh mahal te le chala, aisa parbal kaal.',
    bhavarth: {
      hi: 'जीव की कैसी भी स्थिति या परिस्थिति हो, इससे काल पर कोई प्रभाव नहीं पड़ता। आस-पास चारों ओर शूरवीर योद्धा खड़े रहे और अपनी वीरता की डींगें हांकते रहे, परंतु जब काल सबके देखते ही देखते बीच महल से पकड़कर ले चला, तब किसी से कुछ न हो सका। वह ऐसा महाबली काल है।',
      pb: devanagariToGurmukhi('ਆਸ-ਪਾਸ ਸੂਰਬੀਰ ਖਲੋਤੇ ਰਹਿ ਗਏ ਅਤੇ ਆਪਣੀਆਂ ਡੀਂਗਾਂ ਮਾਰਦੇ ਰਹੇ, ਪਰ ਕਾਲ ਸਭ ਦੇ ਵੇਖਦਿਆਂ ਹੀ ਮਹਿਲ ਦੇ ਵਿਚਕਾਰੋਂ ਜੀਵ ਨੂੰ ਫੜ ਕੇ ਲੈ ਤੁਰਿਆ। ਅਜਿਹਾ ਬਲਵਾਨ ਇਹ ਕਾਲ ਹੈ।'),
      en: 'Surrounded by mighty warriors boasting of their strength, when the all-powerful Kal struck, it seized the soul right from the center of the palace. None could stop it; such is the invincible power of time and death.'
    },
    wordMeanings: {
      hi: [
        { word: 'बजावै गाल (Bajaavai gaal)', meaning: 'डींगें हांकना / व्यर्थ अहंकार करना' },
        { word: 'मंझ महल (Manjh mahal)', meaning: 'महल के बीच से / सुरक्षित स्थान से' },
        { word: 'परबल काल (Parbal kaal)', meaning: 'अति बलवान एवं अजेय मृत्यु' }
      ],
      pb: [
        { word: 'ਬਜਾਵੈ ਗਾਲ (Bajaavai gaal)', meaning: 'ਡੀਂਗਾਂ ਮਾਰਨਾ' },
        { word: 'ਮੰਝ ਮਹਿਲ (Manjh mahal)', meaning: 'ਮਹਿਲ ਦੇ ਵਿਚਕਾਰੋਂ' },
        { word: 'ਪਰਬਲ ਕਾਲ (Parbal kaal)', meaning: 'ਮਹਾਂਬਲੀ ਕਾਲ' }
      ],
      en: [
        { word: 'Bajaavai gaal', meaning: 'Boasting in vain' },
        { word: 'Manjh mahal', meaning: 'From the inner sanctum of the palace' },
        { word: 'Parbal kaal', meaning: 'Invincible, all-powerful Kal' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक सुरक्षा और धन-बल को अमरता का साधन समझ बैठा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਸਾਰਕ ਸੁਰੱਖਿਆ ਨੂੰ ਅਮਰਤਾ ਦਾ ਸਾਧਨ ਸਮਝ ਲਿਆ ਹੈ?'),
      en: 'Do I mistakenly believe worldly power and wealth can shield me from the ultimate truth of death?'
    },
    practicalApplication: {
      hi: 'सांसारिक सुरक्षा के झूठे अहंकार से मुक्त होकर सतगुरु के अविनाशी नाम का आश्रय लें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰਕ ਝੂਠੇ ਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਓਟ ਲਓ।'),
      en: 'Transcend false pride in earthly security; anchor in the Master’s eternal Naam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! काल के भय से केवल आपका पावन नाम ही रक्षा कर सकता है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਕੇਵਲ ਤੁਹਾਡਾ ਪਾਵਨ ਨਾਮ ਹੀ ਰੱਖਿਆ ਕਰ ਸਕਦਾ ਹੈ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Your holy Naam alone is my ultimate shield against the clutches of Kal.'
    },
    quiz: []
  },
  {
    id: 'kaal-2',
    number: 1302,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨',
      en: 'Kaal Ko Ang - 2',
    },
    text: {
      hi: 'जरा कुत्ता जोबन ससा, काल अहेरी नित्त।\nदो बैरी बिच झोंपड़ा, कुशल कहां सो मित्त।।',
      pb: devanagariToGurmukhi('जरा कुत्ता जोबन ससा, काल अहेरी नित्त। दो बैरी बिच झोंपड़ा, कुशल कहां सो मित्त।।'),
      en: 'Jara kutta joban sasa, kaal aheri nitt. Do bairi bich jhompada, kushal kahan so mitt..'
    },
    transliteration: 'Jara kutta joban sasa, kaal aheri nitt. Do bairi bich jhompada, kushal kahan so mitt.',
    bhavarth: {
      hi: 'वृद्धावस्था कुत्ते की भांति और युवावस्था खरगोश की भांति है। इसमें काल रूपी शिकारी ने यौवन-रूपी खरगोश पर, बुढ़ापे रूपी कुत्ते को नित्य अपने शिकार के लिए छोड़ा हुआ है। अब एक ओर बुढ़ापा और दूसरी ओर काल है। इन दो शत्रुओं के बीच में तुम्हारी यह देह रूपी झोंपड़ी है, अतः हे मित्र! यहां कुशल कहां संभव है।',
      pb: devanagariToGurmukhi('ਬੁਢਾਪਾ ਕੁੱਤੇ ਵਾਂਗ ਅਤੇ ਜਵਾਨੀ ਖਰਗੋਸ਼ ਵਾਂਗ ਹੈ। ਕਾਲ ਰੂਪੀ ਸ਼ਿਕਾਰੀ ਨੇ ਜਵਾਨੀ ਪਿੱਛੇ ਬੁਢਾਪਾ ਲਾਇਆ ਹੋਇਆ ਹੈ। ਦੋ ਵੈਰੀਆਂ ਵਿਚਕਾਰ ਤੇਰੀ ਝੁੱਗੀ ਹੈ, ਹੇ ਮਿੱਤਰ ਸੁੱਖ ਕਿੱਥੇ ਹੈ?'),
      en: 'Old age is like a hound and youth like a hare; Kal is the relentless hunter pursuing them daily. Between these two relentless adversaries sits the fragile hut of your body; how can there be lasting peace without devotion?'
    },
    wordMeanings: {
      hi: [
        { word: 'जरा (Jara)', meaning: 'वृद्धावस्था / बुढ़ापा' },
        { word: 'जोबन ससा (Joban sasa)', meaning: 'यौवन रूपी चपल खरगोश' },
        { word: 'अहेरी (Aheri)', meaning: 'शिकारी / बहेलिया' }
      ],
      pb: [
        { word: 'ਜਰਾ (Jara)', meaning: 'ਬੁਢਾਪਾ' },
        { word: 'ਸਸਾ (Sasa)', meaning: 'ਖਰਗੋਸ਼' },
        { word: 'ਅਹੇਰੀ (Aheri)', meaning: 'ਸ਼ਿਕਾਰੀ' }
      ],
      en: [
        { word: 'Jara', meaning: 'Old age' },
        { word: 'Joban sasa', meaning: 'Youth like a fleeting hare' },
        { word: 'Aheri', meaning: 'Hunter' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं यौवन के नशे में यह भूल गया हूं कि बुढ़ापा और मृत्यु निरंतर मेरे पीछे लगे हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਜਵਾਨੀ ਦੇ ਮਦ ਵਿੱਚ ਭੁੱਲ ਗਿਆ ਹਾਂ ਕਿ ਬੁਢਾਪਾ ਅਤੇ ਮੌਤ ਪਿੱਛੇ ਲੱਗੇ ਹਨ?'),
      en: 'Am I intoxicated by youth, forgetting that decay and time are hunting every passing breath?'
    },
    practicalApplication: {
      hi: 'युवावस्था रहते ही साधना और आत्म-कल्याण का दृढ़ संकल्प लें।',
      pb: devanagariToGurmukhi('ਜਵਾਨੀ ਰਹਿੰਦਿਆਂ ਹੀ ਭਜਨ-ਸਿਮਰਨ ਦਾ ਦ੍ਰਿੜ੍ਹ ਸੰਕਲਪ ਕਰੋ।'),
      en: 'Commit whole-heartedly to spiritual practice while vitality still remains.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे बुढ़ापे और काल के भय से उबारकर अमर पद प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਬੁਢਾਪੇ ਤੇ ਕਾਲ ਦੇ ਜਾਲ ਤੋਂ ਛੁਡਾ ਕੇ ਅਮਰ ਪਦ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from decay and death into Your eternal presence.'
    },
    quiz: []
  },
  {
    id: 'kaal-3',
    number: 1303,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩',
      en: 'Kaal Ko Ang - 3',
    },
    text: {
      hi: 'पात झरन्ता देखि के, हंसतीं, कूपलियां।\nहम चाले तुम चालियो, धीरी बापलियां।।',
      pb: devanagariToGurmukhi('पात झरन्ता देखि के, हंसतीं, कूपलियां। हम चाले तुम चालियो, धीरी बापलियां।।'),
      en: 'Paat jharanta dekhi ke, hansteen koopaliyan. Hum chaale tum chaaliyo, dheeri baapaliyan..'
    },
    transliteration: 'Paat jharanta dekhi ke, hansteen koopaliyan. Hum chaale tum chaaliyo, dheeri baapaliyan.',
    bhavarth: {
      hi: 'पतझड़ के मौसम में झड़ते हुए पत्तों को देखकर नई निकली कोमल कोंपलें हंसने लगीं। तब उन झड़ते हुए सूखे पत्तों ने कहा—"हे पगली कोंपलो! आज तुम हमें देखकर क्यों हंसती हो? हम तो अपना समय पूरा कर चल पड़े हैं। थोड़ा धीरज रखो, तुम्हें भी एक दिन हमारी तरह ही झड़ना पड़ेगा।"',
      pb: devanagariToGurmukhi('ਪੱਤੇ ਝੜਦੇ ਵੇਖ ਕੇ ਨਵੀਆਂ ਕਰੂੰਬਲਾਂ ਹੱਸਣ ਲੱਗੀਆਂ। ਸੁੱਕੇ ਪੱਤਿਆਂ ਨੇ ਕਿਹਾ—"ਹੇ ਭੋਲੀਓ! ਅੱਜ ਅਸੀਂ ਚੱਲੇ ਹਾਂ, ਕੱਲ੍ਹ ਨੂੰ ਤੁਹਾਡੀ ਵਾਰੀ ਵੀ ਆਵੇਗੀ, ਧੀਰਜ ਰੱਖੋ।"'),
      en: 'Seeing dry leaves fall, the tender new buds laughed. The falling leaves replied: "O naive buds, why do you laugh? We have finished our turn and depart; hold your patience, your turn too will soon come."'
    },
    wordMeanings: {
      hi: [
        { word: 'पात झरन्ता (Paat jharanta)', meaning: 'झड़ते हुए सूखे पत्ते / वृद्ध अवस्था' },
        { word: 'कूपलियां (Koopaliyan)', meaning: 'नई कोमल पत्तियां / युवावस्था' },
        { word: 'बापलियां (Baapaliyan)', meaning: 'भोली / पगली' }
      ],
      pb: [
        { word: 'ਪਾਤ ਝਰੰਤਾ (Paat jharanta)', meaning: 'ਝੜਦੇ ਪੱਤੇ' },
        { word: 'ਕੂਪਲੀਆਂ (Koopaliyan)', meaning: 'ਨਵੀਆਂ ਕਰੂੰਬਲਾਂ' }
      ],
      en: [
        { word: 'Paat jharanta', meaning: 'Falling leaves / aged stage' },
        { word: 'Koopaliyan', meaning: 'Fresh buds / young generation' },
        { word: 'Baapaliyan', meaning: 'Innocent / naive ones' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं दूसरों के बुढ़ापे और अंत को देखकर अपने जीवन की नश्वरता को समझ पा रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੂਜਿਆਂ ਦੇ ਅੰਤ ਨੂੰ ਵੇਖ ਕੇ ਆਪਣੀ ਨਾਸ਼ਵਾਨਤਾ ਨੂੰ ਸਮਝ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I reflect upon my own inevitable departure when witnessing the aging and death of others?'
    },
    practicalApplication: {
      hi: 'दूसरों की दुर्बलता पर हंसने के बजाय समय की कीमत समझकर सत्कर्म करें।',
      pb: devanagariToGurmukhi('ਸਮੇਂ ਦੀ ਕਦਰ ਕਰਕੇ ਸਤਿਸੰਗ ਅਤੇ ਭਗਤੀ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Value time and cultivate humility, knowing that physical life is ephemeral.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे संसार की क्षणभंगुरता का यथार्थ ज्ञान दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਦਾ ਸੱਚਾ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken in me the profound realization of life’s impermanence.'
    },
    quiz: []
  },
  {
    id: 'kaal-4',
    number: 1304,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪',
      en: 'Kaal Ko Ang - 4',
    },
    text: {
      hi: 'काल पाय जग ऊपजो, काल पाय सब जाय।\nकाल पाय सब बिनसिहैं, काल काल कह खाय।।',
      pb: devanagariToGurmukhi('काल पाय जग ऊपजो, काल पाय सब जाय। काल पाय सब बिनसिहैं, काल काल कह खाय।।'),
      en: 'Kaal paay jag oopjo, kaal paay sab jaay. Kaal paay sab binsihein, kaal kaal kah khaay..'
    },
    transliteration: 'Kaal paay jag oopjo, kaal paay sab jaay. Kaal paay sab binsihein, kaal kaal kah khaay.',
    bhavarth: {
      hi: 'काल के क्रमानुसार समय पाकर यह संसार उत्पन्न होता है, और समय के साथ ही सब मिटता चला जाता है। समय आने पर सब निश्चित रूप से नष्ट होगा, क्योंकि काल स्वयं अंततः सब कुछ खा जाता है। केवल अविनाशी परमात्मा का सत्य शब्द ही काल से परे है।',
      pb: devanagariToGurmukhi('ਸਮਾਂ ਪਾ ਕੇ ਸੰਸਾਰ ਪੈਦਾ ਹੁੰਦਾ ਹੈ ਅਤੇ ਸਮੇਂ ਨਾਲ ਹੀ ਸਭ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ। ਕਾਲ ਸਭ ਨੂੰ ਖਾ ਜਾਂਦਾ ਹੈ। ਕੇਵਲ ਸਤਯਨਾਮ ਹੀ ਅਮਰ ਹੈ।'),
      en: 'In time the universe arises, and in time all passes away. When the hour arrives, everything perishes; time devours even time itself. Only the eternal Truth remains.'
    },
    wordMeanings: {
      hi: [
        { word: 'काल पाय (Kaal paay)', meaning: 'समय के प्रभाव से / काल के चक्र में' },
        { word: 'बिनसिहैं (Binsihein)', meaning: 'नष्ट हो जाना / विलीन हो जाना' }
      ],
      pb: [
        { word: 'ਕਾਲ ਪਾਇ (Kaal paay)', meaning: 'ਸਮੇਂ ਅਨੁਸਾਰ' },
        { word: 'ਬਿਨਸਿਹੈਂ (Binsihein)', meaning: 'ਨਾਸ਼ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Kaal paay', meaning: 'Through the wheel of time' },
        { word: 'Binsihein', meaning: 'Perishes entirely' }
      ]
    },
    contemplation: {
      hi: 'जब सब कुछ काल के गाल में समा जाना है, तो मैं किस पदार्थ का अभिमान करूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਸਭ ਕੁਝ ਕਾਲ ਨੇ ਖਾ ਜਾਣਾ ਹੈ, ਤਾਂ ਮੈਂ ਕਿਸ ਗੱਲ ਦਾ ਹੰਕਾਰ ਕਰਾਂ?'),
      en: 'When all creation is swallowed by time, what worldly possession is worthy of pride?'
    },
    practicalApplication: {
      hi: 'परिवर्तनशील संसार से आसक्ति हटाकर अकाल पुरुष सतगुरु में निष्ठा रखें।',
      pb: devanagariToGurmukhi('ਨਾਸ਼ਵਾਨ ਸੰਸਾਰ ਦਾ ਮੋਹ ਤਿਆਗ ਕੇ ਅਕਾਲ ਸਤਿਗੁਰੂ ਨਾਲ ਜੁੜੋ।'),
      en: 'Detach from perishable realms and take shelter in the timeless Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल के बंधन से मुक्त कर अपने अभय चरणों में स्थान दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਬੰਧਨ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਪਣੀ ਓਟ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Liberate me from the bondage of Kal into Your fearless abode.'
    },
    quiz: []
  },
  {
    id: 'kaal-5',
    number: 1305,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ५',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੫',
      en: 'Kaal Ko Ang - 5',
    },
    text: {
      hi: 'मैं अकेल वह दो जना, सेरी नाहीं कोय।\nजो जम आगे ऊबरो, तो जरा बैरी होय।।',
      pb: devanagariToGurmukhi('मैं अकेल वह दो जना, सेरी नाहीं कोय। जो जम आगे ऊबरो, तो जरा बैरी होय।।'),
      en: 'Main akel vah do jana, seri naahin koy. Jo jam aage oobro, to jara bairi hoy..'
    },
    transliteration: 'Main akel vah do jana, seri naahin koy. Jo jam aage oobro, to jara bairi hoy.',
    bhavarth: {
      hi: 'जीवन का समय बीत गया, अब मैं अकेला हूं और वह काल दो रूपों में सामने खड़ा है। मेरा कोई संगी-साथी नहीं है। यदि किसी प्रकार मृत्यु (यम) से कुछ समय के लिए बच भी गया, तो वृद्धावस्था रूपी दूसरा शत्रु कष्ट देने को तैयार खड़ा है।',
      pb: devanagariToGurmukhi('ਮੈਂ ਇਕੱਲਾ ਹਾਂ ਅਤੇ ਕਾਲ ਦੋ ਰੂਪਾਂ ਵਿੱਚ ਖੜ੍ਹਾ ਹੈ। ਕੋਈ ਸਾਥੀ ਨਹੀਂ ਹੈ। ਜੇ ਮੌਤ ਤੋਂ ਬਚਾਂ ਤਾਂ ਬੁਢਾਪਾ ਵੈਰੀ ਬਣ ਕੇ ਦੁੱਖ ਦੇਣ ਨੂੰ ਤਿਆਰ ਹੈ।'),
      en: 'I stand alone with no earthly companion, while Kal faces me in dual guise. If I temporarily escape immediate death, old age stands ready as a ruthless enemy.'
    },
    wordMeanings: {
      hi: [
        { word: 'सेरी नाहीं कोय (Seri naahin koy)', meaning: 'कोई साथी या मददगार नहीं' },
        { word: 'जम आगे ऊबरो (Jam aage oobro)', meaning: 'मृत्यु से बच जाना' },
        { word: 'जरा बैरी (Jara bairi)', meaning: 'कष्टकारी बुढ़ापा रूपी शत्रु' }
      ],
      pb: [
        { word: 'ਸੇਰੀ (Seri)', meaning: 'ਸਾਥੀ / ਮਦਦਗਾਰ' },
        { word: 'ਜ਼ਰਾ ਬੈਰੀ (Jara bairi)', meaning: 'ਬੁਢਾਪਾ ਰੂਪੀ ਵੈਰੀ' }
      ],
      en: [
        { word: 'Seri naahin koy', meaning: 'None to accompany or aid' },
        { word: 'Jam aage oobro', meaning: 'Surviving death temporarily' },
        { word: 'Jara bairi', meaning: 'Old age as an adversary' }
      ]
    },
    contemplation: {
      hi: 'अंत समय में जब कोई सांसारिक सगा काम नहीं आएगा, तब मेरा सच्चा साथी कौन होगा?',
      pb: devanagariToGurmukhi('ਅੰਤ ਵੇਲੇ ਜਦੋਂ ਕੋਈ ਸੰਸਾਰਕ ਸਾਕ ਕੰਮ ਨਹੀਂ ਆਉਣਾ, ਤਾਂ ਮੇਰਾ ਸੱਚਾ ਸਾਥੀ ਕੌਣ ਹੋਵੇਗਾ?'),
      en: 'At life’s end when no relative can assist, who will be my true eternal companion?'
    },
    practicalApplication: {
      hi: 'संसार के मिथ्या संबंधों पर निर्भर न रहकर सतगुरु के नाम को अपना सच्चा संगी बनाएं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਦੇ ਝੂਠੇ ਰਿਸ਼ਤਿਆਂ ਦੀ ਥਾਂ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਨੂੰ ਸੱਚਾ ਸਾਥੀ ਬਣਾਓ।'),
      en: 'Make the Master’s sacred Name your true inner companion beyond all earthly ties.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अकेलेपन और संकट की घड़ी में आप ही मेरे एकमात्र रक्षक हैं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਔਖੀ ਘੜੀ ਵਿੱਚ ਤੁਸੀਂ ਹੀ ਮੇਰੇ ਇੱਕੋ-ਇੱਕ ਰੱਖਿਅਕ ਹੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! In the solitary hour of reckoning, You alone are my eternal protector.'
    },
    quiz: []
  },
  {
    id: 'kaal-6',
    number: 1306,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ६',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੬',
      en: 'Kaal Ko Ang - 6',
    },
    text: {
      hi: 'जो उगै सो आथवे, फूलै सो कुम्हिलाय।\nजो चूनै सो ढहि पड़े, जामै सो मरि जाय।।',
      pb: devanagariToGurmukhi('जो उगै सो आथवे, फूलै सो कुम्हिलाय। जो चूनै सो ढहि पड़े, जामै सो मरि जाय।।'),
      en: 'Jo ugai so aathve, phoolai so kumhilaay. Jo choonai so dhahi pade, jaamai so mari jaay..'
    },
    transliteration: 'Jo ugai so aathve, phoolai so kumhilaay. Jo choonai so dhahi pade, jaamai so mari jaay.',
    bhavarth: {
      hi: 'इस जगत में कुछ भी स्थायी नहीं है। जो उदय होता है, वह अस्त भी होता है। जो फूल खिलता है, वह मुरझाता भी है। जो भवन बनाया जाता है, वह एक दिन ढह पड़ता है और जो भी जन्म लेता है, वह निश्चित रूप से मरता है। यहां सब कुछ काल के अधीन है।',
      pb: devanagariToGurmukhi('ਜੋ ਉੱਗਦਾ ਹੈ ਉਹ ਡੁੱਬਦਾ ਹੈ, ਜੋ ਖਿੜਦਾ ਹੈ ਉਹ ਮੁਰਝਾਉਂਦਾ ਹੈ। ਜੋ ਬਣਦਾ ਹੈ ਉਹ ਢਹਿ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜੋ ਜੰਮਦਾ ਹੈ ਉਹ ਮਰਦਾ ਹੈ। ਸਭ ਕੁਝ ਕਾਲ ਦੇ ਅਧੀਨ ਹੈ।'),
      en: 'Whatever rises must set; whatever blossoms must wither. Whatever is erected must collapse, and whoever takes birth must die. Everything under the sun is subject to time.'
    },
    wordMeanings: {
      hi: [
        { word: 'आथवे (Aathve)', meaning: 'अस्त होना / ढल जाना' },
        { word: 'चूनै (Choonai)', meaning: 'चुनकर बनाया गया भवन या रचना' },
        { word: 'जामै (Jaamai)', meaning: 'जन्म लेना' }
      ],
      pb: [
        { word: 'ਆਥਵੇ (Aathve)', meaning: 'ਡੁੱਬਣਾ / ਅਸਤ ਹੋਣਾ' },
        { word: 'ਜਾਮੈ (Jaamai)', meaning: 'ਜਨਮ ਲੈਣਾ' }
      ],
      en: [
        { word: 'Aathve', meaning: 'Must set / decline' },
        { word: 'Choonai', meaning: 'Constructed' },
        { word: 'Jaamai', meaning: 'Born' }
      ]
    },
    contemplation: {
      hi: 'जब इस संसार की हर रचना का अंत तय है, तो मैं नश्वर सांसारिक उपलब्धियों पर क्यों इतराता हूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਹਰ ਚੀਜ਼ ਦਾ ਅੰਤ ਤੈਅ ਹੈ ਤਾਂ ਮੈਂ ਨਾਸ਼ਵਾਨ ਪ੍ਰਾਪਤੀਆਂ ਤੇ ਕਿਉਂ ਮਾਣ ਕਰਾਂ?'),
      en: 'Since every created thing is destined to end, why take pride in temporal achievements?'
    },
    practicalApplication: {
      hi: 'संसार की अनित्यता को समझकर अचल और अविनाशी आत्म-तत्व की खोज करें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਦੀ ਅਸਥਿਰਤਾ ਨੂੰ ਵੇਖ ਕੇ ਅਵਿਨਾਸ਼ੀ ਆਤਮ-ਤੱਤ ਦੀ ਭਾਲ ਕਰੋ।'),
      en: 'Recognize the transience of all forms and seek the eternal soul within.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे जन्म-मरण के इस नश्वर चक्र से पार उतारें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਜਨਮ-ਮਰਨ ਦੇ ਇਸ ਚੱਕਰ ਤੋਂ ਪਾਰ ਲੰਘਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Ferry me across this transient ocean of rising and falling forms.'
    },
    quiz: []
  },
  {
    id: 'kaal-7',
    number: 1307,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'काल को अंग - ७',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੭',
      en: 'Kaal Ko Ang - 7',
    },
    text: {
      hi: 'चाकी चली गुपाल की, सब जग पीसा झार।\nरुड़ा शब्द कबीर का, डारा पाट उघार।।',
      pb: devanagariToGurmukhi('चाकी चली गुपाल की, सब जग पीसा झार। रुड़ा शब्द कबीर का, डारा पाट उघार।।'),
      en: 'Chaaki chali gupaal ki, sab jag peesa jhaar. Ruda shabd Kabir ka, daara paat ughaar..'
    },
    transliteration: 'Chaaki chali gupaal ki, sab jag peesa jhaar. Ruda shabd Kabir ka, daara paat ughaar.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि काल और माया की चक्की निरंतर चल रही है जिसने सारे संसार को पीस डाला है। परंतु सद्गुरु का सच्चा शब्द-ज्ञान एक ऐसा ठोस रोड़ा (पत्थर) है जो चक्की में पिसता नहीं, बल्कि चक्की के दोनों पाटों को ही उखाड़ फेंकता है। सद्गुरु का शब्द काल से सर्वथा मुक्त है।',
      pb: devanagariToGurmukhi('ਕਾਲ-ਮਾਇਆ ਦੀ ਚੱਕੀ ਨੇ ਸਾਰਾ ਜਗਤ ਪੀਸ ਦਿੱਤਾ ਹੈ। ਪਰ ਕਬੀਰ ਸਾਹਿਬ ਦਾ ਸੱਚਾ ਸ਼ਬਦ ਅਜਿਹਾ ਪੱਕਾ ਰੋੜਾ ਹੈ ਜਿਸਨੇ ਚੱਕੀ ਦੇ ਪੁੜ ਹੀ ਉਖਾੜ ਦਿੱਤੇ।'),
      en: 'The grinder of time and illusion spins ceaselessly, crushing the whole world into dust. But the solid stone of Kabir’s True Word cannot be crushed—it unhinges the very millstones of Kal.'
    },
    wordMeanings: {
      hi: [
        { word: 'चाकी (Chaaki)', meaning: 'काल और माया रूपी चक्की' },
        { word: 'पीसा झार (Peesa jhaar)', meaning: 'सबको पीसकर नष्ट कर देना' },
        { word: 'रुड़ा शब्द (Ruda shabd)', meaning: 'सद्गुरु का ठोस, अविनाशी निर्णय-शब्द' },
        { word: 'पाट उघार (Paat ughaar)', meaning: 'चक्की के पाटों को उखाड़ देना / काल चक्र को तोड़ना' }
      ],
      pb: [
        { word: 'ਚਾਕੀ (Chaaki)', meaning: 'ਕਾਲ ਦੀ ਚੱਕੀ' },
        { word: 'ਰੁੜਾ ਸ਼ਬਦ (Ruda shabd)', meaning: 'ਸੱਚਾ ਪੱਕਾ ਸ਼ਬਦ' }
      ],
      en: [
        { word: 'Chaaki', meaning: 'Mill of Kal and Maya' },
        { word: 'Ruda shabd', meaning: 'Unbreakable rock of the Master’s Word' },
        { word: 'Paat ughaar', meaning: 'Unhinged the grinding millstones' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने काल की चक्की से बचने के लिए सद्गुरु के अविनाशी शब्द की ओट ली है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕਾਲ ਦੀ ਚੱਕੀ ਤੋਂ ਬਚਣ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਦੀ ਓਟ ਲਈ ਹੈ?'),
      en: 'Have I anchored myself in the unbreakable Word to escape the crushing mill of time?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के सार शब्द का निरंतर ध्यान कर जन्म-मरण के भय को समाप्त करें।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਸਾਰ ਸ਼ਬਦ ਦਾ ਨਿਰੰਤਰ ਧਿਆਨ ਧਰੋ।'),
      en: 'Meditate steadfastly upon the liberating Word to dissolve the terror of mortality.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके अविनाशी शब्द की महिमा अपरंपार है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਤੁਹਾਡੇ ਅਵਿਨਾਸ਼ੀ ਸ਼ਬਦ ਦੀ ਵਡਿਆਈ ਅਪਰੰਪਾਰ ਹੈ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Limitless is the liberating power of Your immortal Word.'
    },
    quiz: []
  },
  {
    id: 'kaal-8',
    number: 1308,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ८',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੮',
      en: 'Kaal Ko Ang - 8',
    },
    text: {
      hi: 'काल काल सब कोइ कहे, काल न चीन्हे कोय।\nजेती मन की कल्पना, काल कहावै सोय।।',
      pb: devanagariToGurmukhi('काल काल सब कोइ कहे, काल न चीन्हे कोय। जेती मन की कल्पना, काल कहावै सोय।।'),
      en: 'Kaal kaal sab koi kahe, kaal na cheenhe koy. Jeti man ki kalpana, kaal kahaavai soy..'
    },
    transliteration: 'Kaal kaal sab koi kahe, kaal na cheenhe koy. Jeti man ki kalpana, kaal kahaavai soy.',
    bhavarth: {
      hi: 'संसार के लोग समय अथवा मृत्यु को काल कहते हैं, परंतु वास्तविक काल को कोई नहीं पहचानता। वास्तव में मन के जितने भी संकल्प, विकल्प और सांसारिक वासनाएं हैं जिनमें जीव की सुरति फंसी है, वे सब ही वास्तविक काल हैं।',
      pb: devanagariToGurmukhi('ਕਾਲ-ਕਾਲ ਸਭ ਕਹਿੰਦੇ ਹਨ ਪਰ ਅਸਲ ਕਾਲ ਨੂੰ ਕੋਈ ਨਹੀਂ ਪਛਾਣਦਾ। ਮਨ ਦੀਆਂ ਜਿੰਨੀਆਂ ਕਲਪਨਾਵਾਂ ਤੇ ਵਾਸਨਾਵਾਂ ਹਨ, ਉਹੀ ਅਸਲ ਕਾਲ ਹਨ।'),
      en: 'Everyone speaks of Kal as outer death or time, but few recognize its true nature. All the projections, desires, and illusions of the restless mind are themselves Kal.'
    },
    wordMeanings: {
      hi: [
        { word: 'चीन्हे कोय (Cheenhe koy)', meaning: 'वास्तविक रूप में पहचानना' },
        { word: 'मन की कल्पना (Man ki kalpana)', meaning: 'मन के संकल्प-विकल्प और वासनाएं' }
      ],
      pb: [
        { word: 'ਚੀਨ੍ਹੇ (Cheenhe)', meaning: 'ਪਛਾਨਣਾ' },
        { word: 'ਕਲਪਨਾ (Kalpana)', meaning: 'ਮਨ ਦੇ ਸੰਕਲਪ ਤੇ ਵਾਸਨਾਵਾਂ' }
      ],
      en: [
        { word: 'Cheenhe koy', meaning: 'Recognize authentically' },
        { word: 'Man ki kalpana', meaning: 'Mental projections and illusions' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बाहर काल को ढूंढ रहा हूं, जबकि मेरे मन की वासनाएं ही मुझे बांधे हुए हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਾਹਰ ਕਾਲ ਲੱਭ ਰਿਹਾ ਹਾਂ ਜਦਕਿ ਮੇਰੀਆਂ ਵਾਸਨਾਵਾਂ ਹੀ ਕਾਲ ਹਨ?'),
      en: 'Do I fear an external monster of death while harboring Kal inside my own desires?'
    },
    practicalApplication: {
      hi: 'मन के व्यर्थ संकल्पों और कल्पनाओं को शांत कर साक्षी भाव में स्थित हों।',
      pb: devanagariToGurmukhi('ਮਨ ਦੇ ਵਿਅਰਥ ਸੰਕਲਪਾਂ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਆਤਮਾ ਵਿੱਚ ਟਿਕੋ।'),
      en: 'Still the mind’s restless imagination and rest in detached soul consciousness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मन की कल्पनाओं के जाल से छुड़ाकर सत्य स्वरूप में लीन करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਨ ਦੀਆਂ ਕਲਪਨਾਵਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸੱਚ ਵਿੱਚ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from mental illusions and anchor me in the Supreme Truth.'
    },
    quiz: []
  },
  {
    id: 'kaal-9',
    number: 1309,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ९',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੯',
      en: 'Kaal Ko Ang - 9',
    },
    text: {
      hi: 'काल फिरै सिर ऊपरे, हाथों धरी कमान।\nकहैं कबीर गहु नाम को, छोड़ सकल अभिमान।।',
      pb: devanagariToGurmukhi('काल फिरै सिर ऊपरे, हाथों धरी कमान। कहैं कबीर गहु नाम को, छोड़ सकल अभिमान।।'),
      en: 'Kaal phirai sir oopare, haathon dhari kamaan. Kahain Kabir gahu naam ko, chhod sakal abhimaan..'
    },
    transliteration: 'Kaal phirai sir oopare, haathon dhari kamaan. Kahain Kabir gahu naam ko, chhod sakal abhimaan.',
    bhavarth: {
      hi: 'अपने हाथों में धनुष-बाण लिए काल हर समय तुम्हारे सिर पर मंडरा रहा है, वह कभी भी प्रहार कर सकता है। कबीरजी कहते हैं कि समस्त अहंकार और झूठी ममता को त्यागकर केवल सतगुरु के अविनाशी सत्यनाम को दृढ़ता से पकड़ लो।',
      pb: devanagariToGurmukhi('ਕਾਲ ਹੱਥ ਵਿੱਚ ਕਮਾਣ ਫੜ ਕੇ ਸਿਰ ਉੱਤੇ ਮੰਡਰਾ ਰਿਹਾ ਹੈ। ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸਾਰਾ ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਾਮ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜ ਲਵੋ।'),
      en: 'Kal hovers over your head with bow drawn, ready to strike at any second. Kabir says: discard all worldly pride and seize the Master’s sacred Name with total devotion.'
    },
    wordMeanings: {
      hi: [
        { word: 'हाथों धरी कमान (Haathon dhari kamaan)', meaning: 'धनुष-बाण साधे तैयार खड़ा काल' },
        { word: 'गहु नाम को (Gahu naam ko)', meaning: 'सत्यनाम का दृढ़ आश्रय लेना' }
      ],
      pb: [
        { word: 'ਕਮਾਣ (Kamaan)', meaning: 'ਧਨੁੱਖ' },
        { word: 'ਗਹੁ ਨਾਮ ਕੋ (Gahu naam ko)', meaning: 'ਨਾਮ ਨੂੰ ਫੜਨਾ' }
      ],
      en: [
        { word: 'Haathon dhari kamaan', meaning: 'Bow ready in hand to strike' },
        { word: 'Gahu naam ko', meaning: 'Grasp the sacred Name' }
      ]
    },
    contemplation: {
      hi: 'क्या मुझे यह स्मरण रहता है कि किसी भी क्षण काल का बाण मेरे प्राण हर सकता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਨੂੰ ਯਾਦ ਰਹਿੰਦਾ ਹੈ ਕਿ ਕਿਸੇ ਵੀ ਪਲ ਕਾਲ ਦਾ ਤੀਰ ਵੱਜ ਸਕਦਾ ਹੈ?'),
      en: 'Do I remain constantly aware that the arrow of time can strike down my body at any moment?'
    },
    practicalApplication: {
      hi: 'प्रत्येक क्षण को मूल्यवान समझकर सत्यनाम सिमरन और भक्ति में लगाएं।',
      pb: devanagariToGurmukhi('ਹਰ ਸਾਹ ਨੂੰ ਅਮੋਲਕ ਜਾਣ ਕੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'Treasure each breath as priceless, dedicating it to devotion and remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल के बाण से बचाने वाला पावन नाम प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਤੀਰ ਤੋਂ ਬਚਾਉਣ ਵਾਲਾ ਨਾਮ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bless me with the sheltering Name that shields me from the arrow of death.'
    },
    quiz: []
  },
  {
    id: 'kaal-10',
    number: 1310,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १०',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੦',
      en: 'Kaal Ko Ang - 10',
    },
    text: {
      hi: 'जाय झरोखे सोवता, फूलना सेज बिछाय।\nसो अब कहूं दीखै नहीं, छिन में गयो बिलाय।।',
      pb: devanagariToGurmukhi('जाय झरोखे सोवता, फूलना सेज बिछाय। सो अब कहूं दीखै नहीं, छिन में गयो बिलाय।।'),
      en: 'Jaay jharokhe sovata, phoolna sej bichhaay. So ab kahoon deekhai nahin, chhin mein gayo bilaay..'
    },
    transliteration: 'Jaay jharokhe sovata, phoolna sej bichhaay. So ab kahoon deekhai nahin, chhin mein gayo bilaay.',
    bhavarth: {
      hi: 'जो राजा-महाराजा महलों के झरोखों में फूलों की कोमल सेज बिछाकर सुख से सोते थे, वे अब कहीं भी दिखाई नहीं देते। क्षण भर में काल ने उन्हें नष्ट कर दिया और वे विलीन हो गए। अतः सांसारिक ऐश्वर्य पर कभी घमंड न करो।',
      pb: devanagariToGurmukhi('ਜੋ ਮਹਿਲਾਂ ਦੇ ਝਰੋਖਿਆਂ ਵਿੱਚ ਫੁੱਲਾਂ ਦੀ ਸੇਜ ਤੇ ਸੌਂਦੇ ਸਨ, ਉਹ ਹੁਣ ਕਿਤੇ ਨਜ਼ਰ ਨਹੀਂ ਆਉਂਦੇ। ਪਲ ਵਿੱਚ ਕਾਲ ਉਹਨਾਂ ਨੂੰ ਲੈ ਗਿਆ।'),
      en: 'Those monarchs who slept on beds of blossoms in airy palace balconies are nowhere to be seen today. In a split second Kal erased them completely. Do not cling to fleeting luxury.'
    },
    wordMeanings: {
      hi: [
        { word: 'फूलना सेज (Phoolna sej)', meaning: 'फूलों की कोमल शय्या / विलासिता' },
        { word: 'छिन में गयो बिलाय (Chhin mein gayo bilaay)', meaning: 'क्षण भर में नष्ट हो जाना' }
      ],
      pb: [
        { word: 'ਫੂਲਨਾ ਸੇਜ (Phoolna sej)', meaning: 'ਫੁੱਲਾਂ ਦੀ ਸੇਜ' },
        { word: 'ਬਿਲਾਇ (Bilaay)', meaning: 'ਅਲੋਪ ਹੋ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Phoolna sej', meaning: 'Bed of flowers / luxury' },
        { word: 'Gayo bilaay', meaning: 'Vanished in an instant' }
      ]
    },
    contemplation: {
      hi: 'जब बड़े-बड़े सम्राटों के वैभव काल में समा गए, तो मेरी भौतिक सुख-सुविधाएं कब तक रहेंगी?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ-ਵੱਡੇ ਰਾਜਿਆਂ ਦਾ ਵੈਭਵ ਮਿਟ ਗਿਆ ਤਾਂ ਮੇਰਾ ਸੰਸਾਰਕ ਸੁੱਖ ਕਿੰਨਾ ਚਿਰ ਰਹੇਗਾ?'),
      en: 'When mighty emperors vanished without a trace, how long will my tiny comforts endure?'
    },
    practicalApplication: {
      hi: 'सुख-साधनों के प्रति आसक्ति रहित रहकर जीवन को सादगी और सेवा में लगाएं।',
      pb: devanagariToGurmukhi('ਭੋਗਾਂ ਦੀ ਲਾਲਸਾ ਛੱਡ ਕੇ ਸਾਦਾ ਜੀਵਨ ਤੇ ਪਰਉਪਕਾਰ ਕਰੋ।'),
      en: 'Live simply, untouched by luxury, directing vitality toward spiritual service.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे विलासिता के मोह से बचाकर अंतर्मुखी साधना प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਿਸ਼ੇ-ਵਿਲਾਸ ਤੋਂ ਬਚਾ ਕੇ ਆਤਮ ਸਾਧਨਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the snare of luxury and grant inner awakening.'
    },
    quiz: []
  },
  {
    id: 'kaal-11',
    number: 1311,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ११',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੧',
      en: 'Kaal Ko Ang - 11',
    },
    text: {
      hi: 'कबीर टुक टुक चोंघता, पल पल गई विहाय।\nजिव जंजाले पड़ि रहा, दिया दमामा आय।।',
      pb: devanagariToGurmukhi('कबीर टुक टुक चोंघता, पल पल गई विहाय। जिव जंजाले पड़ि रहा, दिया दमामा आय।।'),
      en: 'Kabir tuk tuk chonghta, pal pal gayi vihaay. Jiv janjaale padi raha, diya damaama aay..'
    },
    transliteration: 'Kabir tuk tuk chonghta, pal pal gayi vihaay. Jiv janjaale padi raha, diya damaama aay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह जीव टुकुर-टुकुर देखता रहा, सोच-विचार और भ्रम में पड़ा रहा और पल-पल करके सारी आयु यूं ही व्यर्थ बीत गई। यह जीव संसार के जंजाल में ही उलझा रह गया, तभी काल ने आकर प्रस्थान का नगाड़ा बजा दिया।',
      pb: devanagariToGurmukhi('ਜੀਵ ਇੱਧਰ-ਓਧਰ ਵੇਖਦਾ ਰਿਹਾ ਅਤੇ ਪਲ-ਪਲ ਕਰਕੇ ਸਾਰੀ ਉਮਰ ਬੀਤ ਗਈ। ਜੀਵ ਦੁਨਿਆਵੀ ਜੰਜਾਲਾਂ ਵਿੱਚ ਹੀ ਰਿਹਾ ਕਿ ਕਾਲ ਨੇ ਕੂਚ ਦਾ ਨਗਾਰਾ ਵਜਾ ਦਿੱਤਾ।'),
      en: 'Kabir says: gazing vacantly and hesitating in indecision, moments slipped away into a wasted life. The soul remained tangled in worldly snares until Kal sounded the final drum of departure.'
    },
    wordMeanings: {
      hi: [
        { word: 'चोंघता (Chonghta)', meaning: 'टकटकी लगाकर देखना / असमंजस में रहना' },
        { word: 'विहाय (Vihaay)', meaning: 'बीत जाना / समाप्त होना' },
        { word: 'दमामा (Damaama)', meaning: 'कूच का नगाड़ा / मृत्यु की घोषणा' }
      ],
      pb: [
        { word: 'ਵਿਹਾਇ (Vihaay)', meaning: 'ਬੀਤ ਜਾਣਾ' },
        { word: 'ਦਮਾਮਾ (Damaama)', meaning: 'ਨਗਾਰਾ' }
      ],
      en: [
        { word: 'Chonghta', meaning: 'Hesitating and gazing aimlessly' },
        { word: 'Vihaay', meaning: 'Passed away' },
        { word: 'Damaama', meaning: 'Kettledrum of death' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं आज के साधना कार्य को कल पर टालकर समय तो नहीं गंवा रहा?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਭਜਨ-ਬੰਦਗੀ ਨੂੰ ਕੱਲ੍ਹ ਤੇ ਟਾਲ ਕੇ ਸਮਾਂ ਗਵਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I postponing my spiritual awakening to tomorrow while my fleeting life drains away?'
    },
    practicalApplication: {
      hi: 'आलस्य और टालमटोल छोड़कर आज और अभी से गुरु-भक्ति में लग जाएं।',
      pb: devanagariToGurmukhi('ਸੁਸਤੀ ਛੱਡ ਕੇ ਅੱਜ ਹੀ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਜੁੱਟ ਜਾਓ।'),
      en: 'Abandon procrastination; engage wholeheartedly in devotion right now.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे समय की अनमोलता का बोध कराकर सत्संग में लगाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਮੇਂ ਦੀ ਕਦਰ ਕਰਵਾ ਕੇ ਸਤਿਸੰਗ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Instill in me urgency for devotion before the final drum sounds.'
    },
    quiz: []
  },
  {
    id: 'kaal-12',
    number: 1312,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १२',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੨',
      en: 'Kaal Ko Ang - 12',
    },
    text: {
      hi: 'काल जीव को ग्रासई, बहुत कह्यौ समुझाय।\nकहैं कबीर मैं क्या करूं, कोई नहिं पतियाय।।',
      pb: devanagariToGurmukhi('काल जीव को ग्रासई, बहुत कह्यौ समुझाय। कहैं कबीर मैं क्या करूं, कोई नहिं पतियाय।।'),
      en: 'Kaal jeev ko graasai, bahut kahyau samujhaay. Kahain Kabir main kya karoon, koi nahin patiyaay..'
    },
    transliteration: 'Kaal jeev ko graasai, bahut kahyau samujhaay. Kahain Kabir main kya karoon, koi nahin patiyaay.',
    bhavarth: {
      hi: 'सद्गुरु कबीरजी कहते हैं कि मैंने लोगों को बहुत प्रकार से समझाया कि यह शरीर काल का ग्रास है और इससे कोई बच नहीं सकता। परंतु मैं क्या करूं, इस सत्य पर कोई विश्वास नहीं करता और सब मोह-माया में अंधे बने रहते हैं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮੈਂ ਬਹੁਤ ਸਮਝਾਇਆ ਕਿ ਕਾਲ ਜੀਵ ਨੂੰ ਨਿਗਲ ਰਿਹਾ ਹੈ, ਪਰ ਕੋਈ ਭਰੋਸਾ ਨਹੀਂ ਕਰਦਾ, ਸਭ ਮੋਹ ਵਿੱਚ ਅੰਨ੍ਹੇ ਹੋਏ ਬੈਠੇ ਹਨ।'),
      en: 'Kabir laments: I have warned again and again that Kal is devouring life relentlessly, yet none heed my words or put faith in the Truth. They wander blindly in illusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'ग्रासई (Graasai)', meaning: 'निगलना / भक्षण करना' },
        { word: 'पतियाय (Patiyaay)', meaning: 'विश्वास करना / भरोसा करना' }
      ],
      pb: [
        { word: 'ਗ੍ਰਾਸਈ (Graasai)', meaning: 'ਨਿਗਲਣਾ' },
        { word: 'ਪਤਿਆਇ (Patiyaay)', meaning: 'ਭਰੋਸਾ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Graasai', meaning: 'Devours / swallows' },
        { word: 'Patiyaay', meaning: 'Believes / places trust' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सद्गुरु के सत्य वचनों पर पूर्ण विश्वास करके अपने आचरण में उतार रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਤਿਗੁਰੂ ਦੇ ਬਚਨਾਂ ਤੇ ਪੂਰਨ ਵਿਸ਼ਵਾਸ ਕਰਕੇ ਜੀਵਨ ਸੁਧਾਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I genuinely believe the Master’s urgent warnings and transform my life accordingly?'
    },
    practicalApplication: {
      hi: 'गुरु वाणी पर संदेह न कर अटूट निष्ठा के साथ आत्म-साधना में प्रवृत्त हों।',
      pb: devanagariToGurmukhi('ਗੁਰਬਾਣੀ ਤੇ ਸੰਦੇਹ ਨਾ ਕਰਕੇ ਅਟੁੱਟ ਸ਼ਰਧਾ ਨਾਲ ਭਜਨ ਕਰੋ।'),
      en: 'Trust the Master’s guidance without doubt and dedicate life to meditation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे आपके वचनों पर अडिग विश्वास और श्रद्धा प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਬਚਨਾਂ ਤੇ ਅਟੱਲ ਵਿਸ਼ਵਾਸ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me unwavering faith in Your liberating words.'
    },
    quiz: []
  },
  {
    id: 'kaal-13',
    number: 1313,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १३',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੩',
      en: 'Kaal Ko Ang - 13',
    },
    text: {
      hi: 'झूठे सुख को सुख कहै, मानत है मन मोद।\nजगत चबेना काल का, कछु मूठी कछू गोद।।',
      pb: devanagariToGurmukhi('झूठे सुख को सुख कहै, मानत है मन मोद। जगत चबेना काल का, कछु मूठी कछू गोद।।'),
      en: 'Jhoothe sukh ko sukh kahai, maanat hai man mod. Jagat chabena kaal ka, kachhu moothi kachhoo god..'
    },
    transliteration: 'Jhoothe sukh ko sukh kahai, maanat hai man mod. Jagat chabena kaal ka, kachhu moothi kachhoo god.',
    bhavarth: {
      hi: 'यह अज्ञानी जीव संसार के क्षणिक व झूठे सुख को सच्चा सुख मानकर मन ही मन फूला नहीं समाता। परंतु यह सारा संसार तो काल का चबेना (भुना हुआ दाना) है, जिसमें से कुछ जीव उसकी मुट्ठी में हैं और कुछ उसकी गोद में हैं, वह सबको एक-एक कर चबा रहा है।',
      pb: devanagariToGurmukhi('ਝੂਠੇ ਸੁੱਖ ਨੂੰ ਸੱਚਾ ਸਮਝ ਕੇ ਜੀਵ ਮਨ ਵਿੱਚ ਖੁਸ਼ ਹੁੰਦਾ ਹੈ। ਪਰ ਸਾਰਾ ਜਗਤ ਕਾਲ ਦਾ ਚਬੇਣਾ ਹੈ, ਕੁਝ ਉਸਦੀ ਮੁੱਠੀ ਵਿੱਚ ਹਨ ਤੇ ਕੁਝ ਗੋਦੀ ਵਿੱਚ।'),
      en: 'Humans celebrate transient, illusory pleasures, rejoicing in their minds. But this whole cosmos is just dry grain for Kal—some held in its fist, some in its lap, and all being chewed in turn.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन मोद (Man mod)', meaning: 'मन में व्यर्थ प्रसन्न होना' },
        { word: 'चबेना (Chabena)', meaning: 'भुने हुए चने या दाने जिन्हें चबाया जाता है' },
        { word: 'मूठी गोद (Moothi god)', meaning: 'पूरी तरह काल के चंगुल में होना' }
      ],
      pb: [
        { word: 'ਮਨ ਮੋਦ (Man mod)', meaning: 'ਮਨ ਦੀ ਖੁਸ਼ੀ' },
        { word: 'ਚਬੇਣਾ (Chabena)', meaning: 'ਚਬਾਉਣ ਵਾਲਾ ਦਾਣਾ' }
      ],
      en: [
        { word: 'Man mod', meaning: 'Delighting vainly in mind' },
        { word: 'Chabena', meaning: 'Parched grain to be chewed' },
        { word: 'Moothi god', meaning: 'Trapped in hand or lap ready to be consumed' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक सुखों को शाश्वत मानकर काल के मुख में बैठे होने की सच्चाई भूल गया हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਸਾਰਕ ਸੁੱਖਾਂ ਵਿੱਚ ਫਸ ਕੇ ਇਹ ਭੁੱਲ ਗਿਆ ਹਾਂ ਕਿ ਮੈਂ ਕਾਲ ਦੇ ਮੂੰਹ ਵਿੱਚ ਹਾਂ?'),
      en: 'Am I celebrating trivial worldly pleasures while sitting inside the very jaws of time?'
    },
    practicalApplication: {
      hi: 'क्षणभंगुर भोगों के मोह से ऊपर उठकर आत्मा के सच्चे आनंद (सत्यनाम) को खोजें।',
      pb: devanagariToGurmukhi('ਝੂਠੇ ਸੁੱਖਾਂ ਨੂੰ ਛੱਡ ਕੇ ਸੱਚੇ ਆਤਮਿਕ ਸੁੱਖ ਵੱਲ ਧਿਆਨ ਲਾਓ।'),
      en: 'Rise above fleeting delights and cultivate the immortal bliss of the soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल के चबाने से बचाकर अपने चरणों में अमर शरण दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਗ੍ਰਾਸ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਸ਼ਰਨ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from being devoured by Kal; shelter me at Your feet.'
    },
    quiz: []
  },
  {
    id: 'kaal-14',
    number: 1314,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १४',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੪',
      en: 'Kaal Ko Ang - 14',
    },
    text: {
      hi: 'चहुं दिस ठाढ़े सूरमा, हाथ लिये हथियार।\nसबही यह तन देखता, काल ले गया मार।।',
      pb: devanagariToGurmukhi('चहुं दिस ठाढ़े सूरमा, हाथ लिये हथियार। सबही यह तन देखता, काल ले गया मार।।'),
      en: 'Chahun dis thaadhe soorma, haath liye hathiyaar. Sabahee yeh tan dekhta, kaal le gaya maar..'
    },
    transliteration: 'Chahun dis thaadhe soorma, haath liye hathiyaar. Sabahee yeh tan dekhta, kaal le gaya maar.',
    bhavarth: {
      hi: 'चारों दिशाओं में बड़े-बड़े शूरवीर हाथों में घातक अस्त्र-शस्त्र लिए पहरे पर खड़े थे। परंतु यह सारी सुरक्षा धरी की धरी रह गई; सबके देखते ही देखते काल आया और इस शरीर को मारकर प्राण हर ले गया।',
      pb: devanagariToGurmukhi('ਚਾਰੇ ਪਾਸੇ ਹਥਿਆਰਬੰਦ ਸੂਰਬੀਰ ਪਹਿਰਾ ਦੇ ਰਹੇ ਸਨ, ਪਰ ਸਭ ਦੇ ਵੇਖਦਿਆਂ ਹੀ ਕਾਲ ਆਇਆ ਤੇ ਪ੍ਰਾਣ ਹਰ ਕੇ ਲੈ ਗਿਆ।'),
      en: 'Fierce warriors stood guard on all four sides holding deadly weapons. Yet all their defenses were futile; right before their eyes, Kal struck and carried away the breath of life.'
    },
    wordMeanings: {
      hi: [
        { word: 'ठाढ़े सूरमा (Thaadhe soorma)', meaning: 'पहरे पर खड़े वीर योद्धा' },
        { word: 'काल ले गया मार (Kaal le gaya maar)', meaning: 'मृत्यु ने प्राण हर लिए' }
      ],
      pb: [
        { word: 'ਠਾਢੇ ਸੂਰਮਾ (Thaadhe soorma)', meaning: 'ਖੜ੍ਹੇ ਸੂਰਬੀਰ' },
        { word: 'ਕਾਲ ਲੈ ਗਇਆ (Kaal le gaya)', meaning: 'ਮੌਤ ਲੈ ਗਈ' }
      ],
      en: [
        { word: 'Thaadhe soorma', meaning: 'Stationed armed warriors' },
        { word: 'Kaal le gaya maar', meaning: 'Kal struck and seized life' }
      ]
    },
    contemplation: {
      hi: 'जब कोई भौतिक अस्त्र-शस्त्र काल को नहीं रोक सकता, तो क्या मैंने आध्यात्मिक रक्षा कवच धारण किया है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਕੋਈ ਹਥਿਆਰ ਕਾਲ ਨੂੰ ਨਹੀਂ ਰੋਕ ਸਕਦਾ ਤਾਂ ਕੀ ਮੇਰੇ ਕੋਲ ਨਾਮ ਦਾ ਕਵਚ ਹੈ?'),
      en: 'When physical arms are helpless against death, have I donned the armor of the holy Word?'
    },
    practicalApplication: {
      hi: 'बाहरी सुरक्षा के भ्रम से निकलकर सत्यनाम की आध्यात्मिक ढाल धारण करें।',
      pb: devanagariToGurmukhi('ਸੱਚੇ ਨਾਮ ਦੀ ਢਾਲ ਧਾਰਨ ਕਰਕੇ ਨਿਰਭੈ ਹੋਵੋ।'),
      en: 'Discard false confidence in worldly protection; shelter in the shield of Naam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपकी कृपा ही मेरी एकमात्र अभेद्य ढाल है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਤੁਹਾਡੀ ਕਿਰਪਾ ਹੀ ਮੇਰੀ ਸੱਚੀ ਢਾਲ ਹੈ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Your divine grace alone is my impenetrable shield.'
    },
    quiz: []
  },
  {
    id: 'kaal-15',
    number: 1315,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १५',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੫',
      en: 'Kaal Ko Ang - 15',
    },
    text: {
      hi: 'चहुं दिस पाका कोट था, मन्दिर नगर मझार।\nखिरकी खिरकी पाहरु, गज बंधा दरबार।।',
      pb: devanagariToGurmukhi('चहुं दिस पाका कोट था, मन्दिर नगर मझार। खिरकी खिरकी पाहरु, गज बंधा दरबार।।'),
      en: 'Chahun dis paaka kot tha, mandir nagar majhaar. Khirki khirki paahru, gaj bandha darbaar..'
    },
    transliteration: 'Chahun dis paaka kot tha, mandir nagar majhaar. Khirki khirki paahru, gaj bandha darbaar.',
    bhavarth: {
      hi: 'चारों दिशाओं में सुदृढ़ पक्के परकोटे थे, भव्य महल नगर के मध्य में सुरक्षित था। हर खिड़की पर पहरेदार मुस्तैद थे और मुख्य द्वार पर विशाल हाथी बंधे थे। परंतु काल के विधान के आगे यह सब कुछ व्यर्थ हो गया और काल सबको लील गया।',
      pb: devanagariToGurmukhi('ਚਾਰੇ ਪਾਸੇ ਪੱਕਾ ਕਿਲ੍ਹਾ ਸੀ, ਵਿਚਕਾਰ ਮਹਿਲ ਸੀ, ਹਰ ਖਿੜਕੀ ਤੇ ਪਹਿਰੇਦਾਰ ਅਤੇ ਦਰਵਾਜ਼ੇ ਤੇ ਹਾਥੀ ਬੱਝੇ ਸਨ, ਪਰ ਕਾਲ ਅੱਗੇ ਕੁਝ ਨਾ ਚੱਲਿਆ।'),
      en: 'Surrounded by fortresses, dwelling in the city center with guards at every window and elephants at the palace gate—yet against the decree of Kal, all ramparts proved powerless.'
    },
    wordMeanings: {
      hi: [
        { word: 'पाका कोट (Paaka kot)', meaning: 'मजबूत पत्थर का परकोटा / किला' },
        { word: 'पाthru (Paahru)', meaning: 'पहरेदार / संतरी' },
        { word: 'गज बंधा दरबार (Gaj bandha darbaar)', meaning: 'द्वार पर बंधे हाथी / राजसी ऐश्वर्य' }
      ],
      pb: [
        { word: 'ਪਾਕਾ ਕੋਟ (Paaka kot)', meaning: 'ਪੱਕਾ ਕਿਲ੍ਹਾ' },
        { word: 'ਪਾਹਰੂ (Paahru)', meaning: 'ਪਹਿਰੇਦਾਰ' }
      ],
      en: [
        { word: 'Paaka kot', meaning: 'Impenetrable fort' },
        { word: 'Paahru', meaning: 'Sentinels on guard' },
        { word: 'Gaj bandha', meaning: 'Royal elephants stationed at the gate' }
      ]
    },
    contemplation: {
      hi: 'जब सुदृढ़ दुर्ग और हाथी भी राजाओं को काल से न बचा सके, तो मेरा यह मिट्टी का घर मुझे कैसे बचाएगा?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ ਕਿਲ੍ਹੇ ਵੀ ਰਾਜਿਆਂ ਨੂੰ ਨਾ ਬਚਾ ਸਕੇ ਤਾਂ ਮੇਰਾ ਕੱਚਾ ਸਰੀਰ ਕਿਵੇਂ ਬਚੇਗਾ?'),
      en: 'If stone citadels could not save kings from death, how can this fragile clay body protect me?'
    },
    practicalApplication: {
      hi: 'भौतिक दीवारों के बजाय अंतःकरण को सतगुरु के प्रेम और नाम से सुरक्षित करें।',
      pb: devanagariToGurmukhi('ਬਾਹਰੀ ਕੰਧਾਂ ਦੀ ਥਾਂ ਅੰਦਰੂਨੀ ਆਤਮਾ ਨੂੰ ਨਾਮ ਨਾਲ ਮਜ਼ਬੂਤ ਕਰੋ।'),
      en: 'Fortify your inner awareness with divine love rather than outer material wealth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल के अभेद्य चक्रव्यूह से छुड़ाकर मुक्ति धाम में पहुंचाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਛੁਡਾ ਕੇ ਮੁਕਤੀ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the labyrinth of Kal to Your realm of eternal freedom.'
    },
    quiz: []
  },
  {
    id: 'kaal-16',
    number: 1316,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १६',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੬',
      en: 'Kaal Ko Ang - 16',
    },
    text: {
      hi: 'हम जाने थे खायंगे, बहुत जिमीं बहु माल।\nज्यौं का त्यौं ही रह गया, पकड़ि ले गया काल।।',
      pb: devanagariToGurmukhi('हम जाने थे खायंगे, बहुत जिमीं बहु माल। ज्यौं का त्यौं ही रह गया, पकड़ि ले गया काल।।'),
      en: 'Hum jaane the khaayenge, bahut jimee bahu maal. Jyaun ka tyaun hee rah gaya, pakadi le gaya kaal..'
    },
    transliteration: 'Hum jaane the khaayenge, bahut jimee bahu maal. Jyaun ka tyaun hee rah gaya, pakadi le gaya kaal.',
    bhavarth: {
      hi: 'मनुष्य सोचता रहा कि मेरे पास बहुत जमीन-जायदाद है, अपार धन-दौलत है, मैं बैठकर मौज उड़ाऊंगा और सुख भोगूंगा। परंतु वह सब कुछ ज्यों-का-त्यों यहीं धरा रह गया और काल आकर उसे अचानक पकड़कर ले गया।',
      pb: devanagariToGurmukhi('ਅਸੀਂ ਸੋਚਦੇ ਸਾਂ ਕਿ ਬਹੁਤ ਜ਼ਮੀਨ ਤੇ ਮਾਲ ਹੈ, ਬੈਠ ਕੇ ਖਾਵਾਂਗੇ। ਪਰ ਸਭ ਕੁਝ ਇੱਥੇ ਹੀ ਪਿਆ ਰਹਿ ਗਿਆ ਤੇ ਕਾਲ ਫੜ ਕੇ ਲੈ ਗਿਆ।'),
      en: 'We imagined we possessed vast lands and endless wealth to feast upon in luxury. Yet every ounce of wealth remained behind untouched, while Kal came unannounced and dragged us away.'
    },
    wordMeanings: {
      hi: [
        { word: 'जिमीं (Jimee)', meaning: 'जमीन / संपत्ति' },
        { word: 'ज्यौं का त्यौं (Jyaun ka tyaun)', meaning: 'जैसा था वैसा ही धरा रह जाना' }
      ],
      pb: [
        { word: 'ਜਿਮੀਂ (Jimee)', meaning: 'ਜ਼ਮੀਨ' },
        { word: 'ਜਿਉਂ ਕਾ ਤਿਉਂ (Jyaun ka tyaun)', meaning: 'ਉਵੇਂ ਹੀ ਪਿਆ ਰਹਿਣਾ' }
      ],
      en: [
        { word: 'Jimee', meaning: 'Land and estates' },
        { word: 'Jyaun ka tyaun', meaning: 'Left entirely untouched behind' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी संपत्ति जोड़ने में इतना व्यस्त हूं कि जाने की तैयारी भूल गया हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਵੀ ਧਨ ਜੋੜਨ ਵਿੱਚ ਰੁੱਝ ਕੇ ਅਸਲ ਤਿਆਰੀ ਭੁੱਲ ਗਿਆ ਹਾਂ?'),
      en: 'Am I so absorbed in hoarding assets that I neglect preparation for the final journey?'
    },
    practicalApplication: {
      hi: 'धन-संपत्ति का सदुपयोग परोपकार और सेवा में करें, अंत समय केवल सत्कर्म साथ जाएंगे।',
      pb: devanagariToGurmukhi('ਧਨ ਦੀ ਵਰਤੋਂ ਸੇਵਾ ਵਿੱਚ ਕਰੋ, ਅੰਤ ਵੇਲੇ ਕੇਵਲ ਨੇਕ ਕੰਮ ਨਾਲ ਜਾਣਗੇ।'),
      en: 'Utilize worldly resources for charity and service; only righteous deeds accompany the soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे संग्रह के लोभ से मुक्त कर नाम रूपी अमर धन दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਲੋਭ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਨਾਮ ਧਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from greed and endow me with the eternal wealth of Naam.'
    },
    quiz: []
  },
  {
    id: 'kaal-17',
    number: 1317,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १७',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੭',
      en: 'Kaal Ko Ang - 17',
    },
    text: {
      hi: 'धरती करते एक पग, समुन्दर करते फाल।\nहाथों परबत तौलते, ते भी खाये काल।।',
      pb: devanagariToGurmukhi('धरती करते एक पग, समुन्दर करते फाल। हाथों परबत तौलते, ते भी खाये काल।।'),
      en: 'Dharati karte ek pag, samundar karte phaal. Haathon parbat taulte, te bhee khaaye kaal..'
    },
    transliteration: 'Dharati karte ek pag, samundar karte phaal. Haathon parbat taulte, te bhee khaaye kaal.',
    bhavarth: {
      hi: 'जो महाबली एक ही कदम में पूरी पृथ्वी नाप लेते थे, जो समुद्र को एक छलांग में लांघ जाते थे और जो हाथों पर विशाल पर्वतों को उठा लेते थे—इस सर्वग्रासी काल ने उन सभी बलवानों को भी एक दिन अपना ग्रास बना लिया।',
      pb: devanagariToGurmukhi('ਜੋ ਇੱਕ ਕਦਮ ਨਾਲ ਧਰਤੀ ਮਿਣਦੇ ਸਨ, ਸਮੁੰਦਰ ਟੱਪ ਜਾਂਦੇ ਸਨ ਅਤੇ ਹੱਥਾਂ ਤੇ ਪਹਾੜ ਤੋਲਦੇ ਸਨ, ਕਾਲ ਨੇ ਉਹਨਾਂ ਬਲਵਾਨਾਂ ਨੂੰ ਵੀ ਖਾ ਲਿਆ।'),
      en: 'Those legendary mighty figures who spanned the earth in a single step, leaped across oceans, or lifted mountains on their hands—even all of them were eventually swallowed by time.'
    },
    wordMeanings: {
      hi: [
        { word: 'एक पग (Ek pag)', meaning: 'एक कदम (वामन अवतार संदर्भ)' },
        { word: 'फाल (Phaal)', meaning: 'छलांग (हनुमान संदर्भ)' },
        { word: 'परबत तौलते (Parbat taulte)', meaning: 'पर्वत उठाना (गोवर्धन संदर्भ)' }
      ],
      pb: [
        { word: 'ਫਾਲ (Phaal)', meaning: 'ਛਲਾਂਗ' },
        { word: 'ਪਰਬਤ (Parbat)', meaning: 'ਪਹਾੜ' }
      ],
      en: [
        { word: 'Ek pag', meaning: 'A single stride' },
        { word: 'Phaal', meaning: 'A mighty leap' },
        { word: 'Parbat taulte', meaning: 'Weighing or lifting mountains' }
      ]
    },
    contemplation: {
      hi: 'जब अवतारी और सिद्ध महाबली भी काल के प्रभाव से परे न रहे, तो साधारण देह का क्या भरोसा?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ-ਵੱਡੇ ਬਲਵਾਨ ਨਾ ਬਚੇ ਤਾਂ ਸਾਡੀ ਸਾਧਾਰਨ ਦੇਹ ਦਾ ਕੀ ਭਰੋਸਾ?'),
      en: 'When miraculous heroes were consumed by time, how fragile is our ordinary mortal shell?'
    },
    practicalApplication: {
      hi: 'शारीरिक बल और सिद्धि के घमंड से बचकर सतगुरु के चरणों में दीन-हीन भाव से समर्पित रहें।',
      pb: devanagariToGurmukhi('ਤਾਕਤ ਦਾ ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨ ਫੜੋ।'),
      en: 'Cast off arrogance of physical power; surrender in humble surrender before the Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! काल-जाल से बचाने की शक्ति केवल आपके चरणों में है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਕਾਲ ਤੋਂ ਬਚਾਉਣ ਦੀ ਸ਼ਕਤੀ ਕੇਵਲ ਤੁਹਾਡੇ ਚਰਨਾਂ ਵਿੱਚ ਹੈ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliverance from Kal lies solely at Your holy feet.'
    },
    quiz: []
  },
  {
    id: 'kaal-18',
    number: 1318,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'काल को अंग - १८',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੮',
      en: 'Kaal Ko Ang - 18',
    },
    text: {
      hi: 'खुलि खेलो संसार में, बांधि न सक्कै कोय।\nघाट जगाती क्या करै, सिर पर पोट न होय।।',
      pb: devanagariToGurmukhi('खुलि खेलो संसार में, बांधि न सक्कै कोय। घाट जगाती क्या करै, सिर पर पोट न होय।।'),
      en: 'Khuli khelo sansaar mein, baandhi na sakkai koy. Ghaat jagaati kya karai, sir par pot na hoy..'
    },
    transliteration: 'Khuli khelo sansaar mein, baandhi na sakkai koy. Ghaat jagaati kya karai, sir par pot na hoy.',
    bhavarth: {
      hi: 'सद्गुरु के ज्ञान द्वारा मोह-माया से मुक्त होकर इस संसार में निडर और निष्काम विचरण करो, तुम्हें कोई नहीं बांध सकता। नदी के घाट पर कर (टैक्स) वसूलने वाला भी क्या करेगा, जब तुम्हारे सिर पर वासनाओं की कोई गठरी ही नहीं होगी।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਨਾਲ ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸੰਸਾਰ ਵਿੱਚ ਨਿਡਰ ਚੱਲੋ। ਜਦੋਂ ਸਿਰ ਤੇ ਵਾਸਨਾਵਾਂ ਦੀ ਪੰਡ ਹੀ ਨਹੀਂ, ਤਾਂ ਮਸੂਲੀਆ (ਜਮਰਾਜ) ਕੀ ਕਰੇਗਾ?'),
      en: 'Walk fearlessly in this world through the Master’s wisdom, and none can bind you. What can the toll-collector of death tax when you carry no bundle of worldly desires upon your head?'
    },
    wordMeanings: {
      hi: [
        { word: 'खुलि खेलो (Khuli khelo)', meaning: 'निर्भय व अनासक्त भाव से जीना' },
        { word: 'घाट जगाती (Ghaat jagaati)', meaning: 'नदी किनारे महसूल/टैक्स लेने वाला (यमदूत)' },
        { word: 'पोट (Pot)', meaning: 'गठरी / वासना और पाप-पुण्य का भार' }
      ],
      pb: [
        { word: 'ਜਗਾਤੀ (Jagaati)', meaning: 'ਟੈਕਸ ਲੈਣ ਵਾਲਾ' },
        { word: 'ਪੋਟ (Pot)', meaning: 'ਪੰਡ / ਬੋਝ' }
      ],
      en: [
        { word: 'Khuli khelo', meaning: 'Live fearlessly unattached' },
        { word: 'Ghaat jagaati', meaning: 'Ferry toll-collector / messenger of death' },
        { word: 'Pot', meaning: 'Bundle of worldly desires and karmas' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे सिर पर अभी भी सांसारिक इच्छाओं और चिंताओं का भारी बोझ लदा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਸਿਰ ਤੇ ਅਜੇ ਵੀ ਦੁਨਿਆਵੀ ਚਿੰਤਾਵਾਂ ਦਾ ਬੋਝ ਹੈ?'),
      en: 'Am I still carrying the heavy baggage of worldly anxieties and desires?'
    },
    practicalApplication: {
      hi: 'इच्छाओं का भार सतगुरु को समर्पित कर पूर्णतः निर्भार और निष्काम बनें।',
      pb: devanagariToGurmukhi('ਵਾਸਨਾਵਾਂ ਦਾ ਬੋਝ ਸਤਿਗੁਰੂ ਨੂੰ ਸੌਂਪ ਕੇ ਨਿਰਲੇਪ ਰਹੋ।'),
      en: 'Unload all burdens onto the Satguru and live in desireless lightness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे वासनाओं के बोझ से मुक्त कर निर्भय जीवन दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਚਿੰਤਾਵਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਨਿਡਰ ਪਦ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Unburden my soul from desires and grant me fearless liberation.'
    },
    quiz: []
  },
  {
    id: 'kaal-19',
    number: 1319,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - १९',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੧੯',
      en: 'Kaal Ko Ang - 19',
    },
    text: {
      hi: 'चलती चाकी देखि के, दिया कबीरा रोय।\nदो पाटन बिच आय के, साबुत गया न कोय।।',
      pb: devanagariToGurmukhi('चलती चाकी देखि के, दिया कबीरा रोय। दो पाटन बिच आय के, साबुत गया न कोय।।'),
      en: 'Chalti chaaki dekhi ke, diya Kabira roy. Do paatan bich aay ke, saabut gaya na koy..'
    },
    transliteration: 'Chalti chaaki dekhi ke, diya Kabira roy. Do paatan bich aay ke, saabut gaya na koy.',
    bhavarth: {
      hi: 'संसार में माया और काल रूपी चक्की के दो पाट—आकाश और पृथ्वी, सुख और दुःख, जन्म और मरण—को निरंतर चलते देखकर कबीरजी द्रवित हो उठे। इस चक्की के दो पाटों के बीच में पड़कर कोई भी जीव साबुत (अखंड) नहीं बच पाया, सब पिस गए। केवल कीली (सतगुरु के केंद्र) से जुड़ा जीव ही बचता है।',
      pb: devanagariToGurmukhi('ਚੱਲਦੀ ਚੱਕੀ ਵੇਖ ਕੇ ਕਬੀਰ ਜੀ ਰੋ ਪਏ ਕਿ ਦੋ ਪੁੜਾਂ ਦੇ ਵਿਚਕਾਰ ਆ ਕੇ ਕੋਈ ਵੀ ਸਾਬਤ ਨਹੀਂ ਬਚਿਆ। ਕੇਵਲ ਕਿੱਲੀ ਨਾਲ ਜੁੜਿਆ ਦਾਣਾ ਹੀ ਬਚਦਾ ਹੈ।'),
      en: 'Witnessing the revolving mill of earth and sky, birth and death, Kabir wept in compassion. Caught between these two grinding stones, none emerges whole—except the grain that clings to the central pivot of the Satguru.'
    },
    wordMeanings: {
      hi: [
        { word: 'चाकी (Chaaki)', meaning: 'संसार रूपी चक्की' },
        { word: 'दो पाटन (Do paatan)', meaning: 'चक्की के दो पाट / सुख-दुःख व जन्म-मरण' },
        { word: 'साबुत (Saabut)', meaning: 'अखंड / बिना पिसा हुआ' }
      ],
      pb: [
        { word: 'ਚਾਕੀ (Chaaki)', meaning: 'ਚੱਕੀ' },
        { word: 'ਸਾਬੁਤ (Saabut)', meaning: 'ਸਾਬਤ / ਅਖੰਡ' }
      ],
      en: [
        { word: 'Chaaki', meaning: 'The grinding mill of duality' },
        { word: 'Do paatan', meaning: 'The two millstones of life and death' },
        { word: 'Saabut', meaning: 'Whole / uncrushed' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी सुरति सतगुरु रूपी मध्य कीली से जुड़ी है जो मुझे पिसने से बचा सके?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਸੁਰਤਿ ਸਤਿਗੁਰੂ ਰੂਪੀ ਕਿੱਲੀ ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ?'),
      en: 'Is my spiritual attention anchored to the Master’s central pivot to escape destruction?'
    },
    practicalApplication: {
      hi: 'द्वंद्वों (सुख-दुःख) से अप्रभावित रहकर केवल सद्गुरु के सत्य नाम में लीन रहें।',
      pb: devanagariToGurmukhi('ਸੁੱਖ-ਦੁੱਖ ਤੋਂ ਨਿਰਲੇਪ ਰਹਿ ਕੇ ਨਾਮ ਵਿੱਚ ਜੁੜੋ।'),
      en: 'Stay equanimous amidst pleasure and pain by holding firmly to the center.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपनी पावन कीली से जोड़कर अखंड स्वरूप में स्थित करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜ ਕੇ ਸਾਬਤ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor me firmly to Your pivot that I may remain whole and uncrushed.'
    },
    quiz: []
  },
  {
    id: 'kaal-20',
    number: 1320,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २०',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੦',
      en: 'Kaal Ko Ang - 20',
    },
    text: {
      hi: 'मूसा डरपे काल सूं, कठिन काल का जोर।\nस्वर्ग भूमि पाताल में, जहां जाव तहं गोर।।',
      pb: devanagariToGurmukhi('मूसा डरपे काल सूं, कठिन काल का जोर। स्वर्ग भूमि पाताल में, जहां जाव तहं गोर।।'),
      en: 'Moosa darpe kaal soon, kathin kaal ka jor. Swarg bhoomi paataal mein, jahan jaav tahan gor..'
    },
    transliteration: 'Moosa darpe kaal soon, kathin kaal ka jor. Swarg bhoomi paataal mein, jahan jaav tahan gor.',
    bhavarth: {
      hi: 'काल का बल इतना प्रचंड और दुर्निवार है कि मूसा जैसे महान पैगंबर भी उससे भयभीत रहे। स्वर्ग, मृत्युलोक और पाताल—तीनों लोकों में आप जहां कहीं भी चले जाएं, वहां केवल कब्र और श्मशान ही मिलेगा। काल की सीमा से परे केवल सतगुरु का सत्यलोक ही है।',
      pb: devanagariToGurmukhi('ਕਾਲ ਦਾ ਜ਼ੋਰ ਇੰਨਾ ਕਠਿਨ ਹੈ ਕਿ ਮੂਸਾ ਵਰਗੇ ਪੈਗੰਬਰ ਵੀ ਕੰਬਦੇ ਸਨ। ਸਵਰਗ, ਧਰਤੀ ਜਾਂ ਪਾਤਾਲ, ਜਿੱਥੇ ਵੀ ਜਾਓ ਉੱਥੇ ਕਬਰ ਹੀ ਹੈ। ਕੇਵਲ ਸੱਚਖੰਡ ਹੀ ਅਮਰ ਹੈ।'),
      en: 'The might of Kal is so formidable that even prophets like Moses trembled before its decree. Whether in heaven, earth, or the underworld, graves await everywhere. Only the Satguru’s realm is beyond death.'
    },
    wordMeanings: {
      hi: [
        { word: 'मूसा (Moosa)', meaning: 'हजरत मूसा / पैगंबर' },
        { word: 'गोर (Gor)', meaning: 'कब्र / श्मशान / मृत्यु' }
      ],
      pb: [
        { word: 'ਗੋਰ (Gor)', meaning: 'ਕਬਰ' }
      ],
      en: [
        { word: 'Moosa', meaning: 'Prophet Moses' },
        { word: 'Gor', meaning: 'Grave / death' }
      ]
    },
    contemplation: {
      hi: 'जब तीनों लोकों में काल का ही राज्य है, तो मैं अमरलोक की प्राप्ति के लिए क्या कर रहा हूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਤਿੰਨਾਂ ਲੋਕਾਂ ਵਿੱਚ ਕਾਲ ਦਾ ਰਾਜ ਹੈ, ਤਾਂ ਮੈਂ ਅਮਰਲੋਕ ਲਈ ਕੀ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Since all three worlds are governed by Kal, what effort am I making to attain Amarlok?'
    },
    practicalApplication: {
      hi: 'तीनों लोकों की नश्वर कामनाओं को त्यागकर सतलोक के अमर नाम को भजें।',
      pb: devanagariToGurmukhi('ਤ੍ਰਿਲੋਕੀ ਮੋਹ ਤਿਆਗ ਕੇ ਸਤਿਲੋਕ ਦੀ ਪ੍ਰਾਪਤੀ ਲਈ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Renounce the desires of the three worlds and meditate upon the eternal Satyanaam.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे तीनों लोकों के काल चक्र से पार अमरलोक का मार्ग दिखाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਚੱਕਰ ਤੋਂ ਪਾਰ ਅਮਰਲੋਕ ਦੀ ਰਾਹ ਵਿਖਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guide my soul beyond the three worlds into Your eternal realm of immortality.'
    },
    quiz: []
  },
  {
    id: 'kaal-21',
    number: 1321,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २१',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੧',
      en: 'Kaal Ko Ang - 21',
    },
    text: {
      hi: 'जोबन सिकदारी तजी, चला निशान बजाय।\nसिर पर सेत सिरायचा, दिया बुढ़ापा आय।।',
      pb: devanagariToGurmukhi('जोबन सिकदारी तजी, चला निशान बजाय। सिर पर सेत सिरायचा, दिया बुढ़ापा आय।।'),
      en: 'Joban sikdaari taji, chala nishaan bajaay. Sir par set siraaycha, diya budhaapa aay..'
    },
    transliteration: 'Joban sikdaari taji, chala nishaan bajaay. Sir par set siraaycha, diya budhaapa aay.',
    bhavarth: {
      hi: 'समय के परिवर्तन के साथ इस शरीर की दशा देखो—मदमाते यौवन ने अपनी सरदारी त्याग दी और अपना झंडा फहराते हुए नगाड़ा बजाकर विदा हो गया। तभी बुढ़ापे ने आकर सिर पर सफेद शामियाना (श्वेत केश) तान दिया।',
      pb: devanagariToGurmukhi('ਜਵਾਨੀ ਆਪਣੀ ਸਰਦਾਰੀ ਛੱਡ ਕੇ ਨਿਸ਼ਾਨ ਵਜਾਉਂਦੀ ਚਲੀ ਗਈ। ਸਿਰ ਤੇ ਬੁਢਾਪੇ ਨੇ ਚਿੱਟੇ ਵਾਲਾਂ ਦਾ ਸ਼ਾਮਿਆਨਾ ਲਾ ਦਿੱਤਾ।'),
      en: 'Behold the shifting stages of life: youth resigned its chieftainship and marched away with flags flying. Promptly, old age arrived and pitched its white tent of gray hair upon the head.'
    },
    wordMeanings: {
      hi: [
        { word: 'सिकदारी (Sikdaari)', meaning: 'सरदारी / आधिपत्य / हुकूमत' },
        { word: 'निशान बजाय (Nishaan bajaay)', meaning: 'झंडा फहराते हुए प्रस्थान करना' },
        { word: 'सेत सिरायचा (Set siraaycha)', meaning: 'श्वेत शामियाना / सिर पर सफेद बाल' }
      ],
      pb: [
        { word: 'ਸਿਕਦਾਰੀ (Sikdaari)', meaning: 'ਸਰਦਾਰੀ' },
        { word: 'ਸੇਤ ਸਿਰਾਇਚਾ (Set siraaycha)', meaning: 'ਚਿੱਟਾ ਸ਼ਾਮਿਆਨਾ / ਚਿੱਟੇ ਵਾਲ' }
      ],
      en: [
        { word: 'Sikdaari', meaning: 'Chieftainship / supremacy' },
        { word: 'Set siraaycha', meaning: 'White canopy (gray hairs)' }
      ]
    },
    contemplation: {
      hi: 'सिर पर सफेद बाल आने के बाद भी क्या मेरी सांसारिक वासनाएं समाप्त हुई हैं?',
      pb: devanagariToGurmukhi('ਸਿਰ ਤੇ ਚਿੱਟੇ ਵਾਲ ਆਉਣ ਤੇ ਵੀ ਕੀ ਮੇਰੀਆਂ ਵਾਸਨਾਵਾਂ ਮੁੱਕੀਆਂ ਹਨ?'),
      en: 'Even after gray hairs crown my head, have my inner worldly cravings subsided?'
    },
    practicalApplication: {
      hi: 'वृद्धावस्था के संकेतों को काल की चेतावनी समझकर पूर्णतः साधना में लीन हो जाएं।',
      pb: devanagariToGurmukhi('ਬੁਢਾਪੇ ਨੂੰ ਚੇਤਾਵਨੀ ਜਾਣ ਕੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਭਜਨ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Regard the signs of aging as a sacred warning; devote remaining breaths to meditation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे देह के बुढ़ापे से नहीं, बल्कि आत्मा के जागरण से जोड़ें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਤਮਿਕ ਜਾਗ੍ਰਿਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken my immortal soul beyond the decay of physical years.'
    },
    quiz: []
  },
  {
    id: 'kaal-22',
    number: 1322,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २२',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੨',
      en: 'Kaal Ko Ang - 22',
    },
    text: {
      hi: 'बेटा जाये क्या हुआ, कहा बजावै थाल।\nआवन जावन होय रहा, ज्यों कीड़ी का नाल।।',
      pb: devanagariToGurmukhi('बेटा जाये क्या हुआ, कहा बजावै थाल। आवन जावन होय रहा, ज्यों कीड़ी का नाल।।'),
      en: 'Beta jaaye kya hua, kaha bajaavai thaal. Aavan jaavan hoy raha, jyon keedi ka naal..'
    },
    transliteration: 'Beta jaaye kya hua, kaha bajaavai thaal. Aavan jaavan hoy raha, jyon keedi ka naal.',
    bhavarth: {
      hi: 'पुत्र का जन्म हो गया तो इतना क्या हर्ष और यह थाली क्यों बजवा रहा है? इस संसार में जीवों का आना-जाना तो उसी प्रकार निरंतर लगा रहता है, जैसे चींटियों की कतार चलती रहती है। यहां न जन्म में हर्ष मनाने योग्य कुछ है और न मरण में शोक करने योग्य।',
      pb: devanagariToGurmukhi('ਪੁੱਤਰ ਜੰਮਿਆ ਤਾਂ ਕੀ ਹੋਇਆ, ਥਾਲ ਕਿਉਂ ਵਜਾਉਂਦੇ ਹੋ? ਜੀਵਾਂ ਦਾ ਆਉਣਾ-ਜਾਣਾ ਤਾਂ ਕੀੜੀਆਂ ਦੀ ਕਤਾਰ ਵਾਂਗ ਲਗਾਤਾਰ ਲੱਗਾ ਹੀ ਰਹਿੰਦਾ ਹੈ।'),
      en: 'A son was born, so why beat brass plates in celebration? The coming and going of souls in this world flows endlessly like a procession of ants. Neither birth nor death warrants delusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'बजावै थाल (Bajaavai thaal)', meaning: 'पुत्र जन्म पर थाली बजाकर उत्सव मनाना' },
        { word: 'कीड़ी का नाल (Keedi ka naal)', meaning: 'चींटियों की अविरल कतार / अंतहीन आवागमन' }
      ],
      pb: [
        { word: 'ਕੀੜੀ ਕਾ ਨਾਲ (Keedi ka naal)', meaning: 'ਕੀੜੀਆਂ ਦੀ ਕਤਾਰ' }
      ],
      en: [
        { word: 'Bajaavai thaal', meaning: 'Beating plates in birth celebrations' },
        { word: 'Keedi ka naal', meaning: 'An endless trail of ants' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक जन्म और संतानों के मोह में फंसकर अपने असली कल्याण को भूल गया हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਤਾਨ ਦੇ ਮੋਹ ਵਿੱਚ ਫਸ ਕੇ ਆਪਣੀ ਮੁਕਤੀ ਭੁੱਲ ਗਿਆ ਹਾਂ?'),
      en: 'Am I so ensnared by family ties that I forget the liberation of my own soul?'
    },
    practicalApplication: {
      hi: 'पारिवारिक कर्तव्यों को अनासक्त होकर निभाएं और जन्म-मरण के बंधन को समझें।',
      pb: devanagariToGurmukhi('ਫਰਜ਼ ਨਿਭਾਉਂਦੇ ਹੋਏ ਮੋਹ ਤੋਂ ਮੁਕਤ ਰਹੋ।'),
      en: 'Discharge duties with detachment, remembering the cycle of birth and death.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे जन्म-मरण के अंतहीन आवागमन से मुक्त कर निज धाम दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਵਾਗਵਨ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਨਿਜ ਧਾਮ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the wheel of transmigration into Your eternal peace.'
    },
    quiz: []
  },
  {
    id: 'kaal-23',
    number: 1323,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २३',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੩',
      en: 'Kaal Ko Ang - 23',
    },
    text: {
      hi: 'बालपन भोले गया, और जुवा महमंत।\nवृद्धपने आलस गयो, चला जरन्ते अन्त।।',
      pb: devanagariToGurmukhi('बालपन भोले गया, और जुवा महमंत। वृद्धपने आलस गयो, चला जरन्ते अन्त।।'),
      en: 'Baalpan bhole gaya, aur juva mehmant. Vriddhpane aalas gayo, chala jarante ant..'
    },
    transliteration: 'Baalpan bhole gaya, aur juva mehmant. Vriddhpane aalas gayo, chala jarante ant.',
    bhavarth: {
      hi: 'बचपन अज्ञान और भोलेपन में बीत गया, जवानी काम-भोग और मदमस्ती में नष्ट हो गई, और बुढ़ापा रोगों व आलस्य में कट गया। इस प्रकार संपूर्ण मानव जीवन व्यर्थ ही समाप्त हो गया और अंत समय में यह शरीर चिता पर जलने के लिए चल पड़ा।',
      pb: devanagariToGurmukhi('ਬਚਪਨ ਭੋਲੇਪਨ ਵਿੱਚ ਬੀਤਿਆ, ਜਵਾਨੀ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਗਵਾ ਲਈ, ਬੁਢਾਪਾ ਆਲਸ ਵਿੱਚ ਲੰਘ ਗਿਆ। ਸਾਰੀ ਉਮਰ ਵਿਅਰਥ ਗਈ ਤੇ ਅੰਤ ਵਿੱਚ ਚਿਤਾ ਤੇ ਸੜਨ ਤੁਰ ਪਿਆ।'),
      en: 'Childhood passed in naive ignorance, youth was squandered in passionate arrogance, and old age dragged on in ailments and lethargy. The entire human life vanished in vain, departing only to burn upon the pyre.'
    },
    wordMeanings: {
      hi: [
        { word: 'जुवा महमंत (Juva mehmant)', meaning: 'यौवन का मदमस्त अहंकार' },
        { word: 'जरन्ते अन्त (Jarante ant)', meaning: 'अंत में चिता की अग्नि में जलना' }
      ],
      pb: [
        { word: 'ਮਹਿਮੰਤ (Mehmant)', meaning: 'ਹੰਕਾਰੀ / ਮਸਤ' },
        { word: 'ਜਰੰਤੇ (Jarante)', meaning: 'ਸੜਨਾ' }
      ],
      en: [
        { word: 'Juva mehmant', meaning: 'Intoxication of youth' },
        { word: 'Jarante ant', meaning: 'Ending as ash upon the funeral pyre' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा जीवन भी व्यर्थ की अवस्थाओं में बीतकर अंत में पश्चाताप का कारण तो नहीं बनेगा?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਉਮਰ ਵੀ ਵਿਅਰਥ ਬੀਤ ਕੇ ਅੰਤ ਵਿੱਚ ਪਛਤਾਵਾ ਤਾਂ ਨਹੀਂ ਬਣੇਗੀ?'),
      en: 'Will my precious life slip through vanity only to end in agonizing regret upon the pyre?'
    },
    practicalApplication: {
      hi: 'जो भी शेष समय बचा है, उसे पूर्ण समर्पण से सतगुरु के भजन-सिमरन में लगाएं।',
      pb: devanagariToGurmukhi('ਜਿੰਨਾ ਸਮਾਂ ਬਾਕੀ ਹੈ, ਉਸਨੂੰ ਪੂਰਨ ਸਮਰਪਣ ਨਾਲ ਭਜਨ ਵਿੱਚ ਲਾਓ।'),
      en: 'Diligently devote whatever remaining breaths you have to divine remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे जीवन को व्यर्थ जलने से बचाकर भक्ति में सार्थक करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਨੂੰ ਸਾਰਥਕ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Redeem my remaining days that my life does not perish in vain.'
    },
    quiz: []
  },
  {
    id: 'kaal-24',
    number: 1324,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २४',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੪',
      en: 'Kaal Ko Ang - 24',
    },
    text: {
      hi: 'संसै काल शरीर में, विषम काल है दूर।\nजाको कोइ जानै नहीं, जारि करै सब धूर।।',
      pb: devanagariToGurmukhi('संसै काल शरीर में, विषम काल है दूर। जाको कोइ जानै नहीं, जारि करै सब धूर।।'),
      en: 'Sansai kaal shareer mein, visham kaal hai door. Jaako koi jaanai nahin, jaari karai sab dhoor..'
    },
    transliteration: 'Sansai kaal shareer mein, visham kaal hai door. Jaako koi jaanai nahin, jaari karai sab dhoor.',
    bhavarth: {
      hi: 'जिस भयंकर काल से सब डरते हैं, वह शारीरिक मृत्यु तो अभी संभवतः दूर है; परंतु उससे भी अधिक विकराल संशय (भ्रम व अज्ञान) रूपी काल इस शरीर के भीतर ही बैठा है। इसे कोई नहीं पहचानता, परंतु यह आंतरिक संशय ही जीवात्मा के सारे सत्कर्मों और ज्ञान को जलाकर राख कर देता है।',
      pb: devanagariToGurmukhi('ਜਿਸ ਮੌਤ ਤੋਂ ਸਭ ਡਰਦੇ ਹਨ ਉਹ ਸ਼ਾਇਦ ਦੂਰ ਹੈ, ਪਰ ਸੰਸੇ-ਭਰਮ ਦਾ ਕਾਲ ਅੰਦਰ ਹੀ ਬੈਠਾ ਹੈ। ਇਹ ਸਭ ਕੁਝ ਸਾੜ ਕੇ ਸੁਆਹ ਕਰ ਦਿੰਦਾ ਹੈ।'),
      en: 'The outer physical death that mortals fear may still be distant, but a far more venomous Kal—doubt and skepticism—dwells right within this body. Unrecognized by most, it burns all spiritual attainment to ashes.'
    },
    wordMeanings: {
      hi: [
        { word: 'संसै काल (Sansai kaal)', meaning: 'संशय / भ्रम / अविश्वास रूपी काल' },
        { word: 'विषम काल (Visham kaal)', meaning: 'भयंकर बाह्य मृत्यु' },
        { word: 'जारि करै सब धूर (Jaari karai sab dhoor)', meaning: 'जलाकर सब धूल/राख कर देना' }
      ],
      pb: [
        { word: 'ਸੰਸੈ (Sansai)', meaning: 'ਸ਼ੰਕਾ / ਭਰਮ' },
        { word: 'ਸਭ ਧੂਰ (Sab dhoor)', meaning: 'ਸੁਆਹ ਕਰ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Sansai kaal', meaning: 'The Kal of doubt and skepticism' },
        { word: 'Visham kaal', meaning: 'Dreadful external physical death' },
        { word: 'Jaari karai sab dhoor', meaning: 'Burns everything to dust' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर गुरु-वचनों और सत्य पर संशय का आंतरिक काल तो नहीं बैठा?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਗੁਰਬਾਣੀ ਪ੍ਰਤੀ ਕੋਈ ਭਰਮ ਜਾਂ ਸ਼ੰਕਾ ਤਾਂ ਨਹੀਂ?'),
      en: 'Does the inner serpent of skepticism and doubt burn away my peace and spiritual trust?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के सत्संग और निर्णय-ज्ञान से अपने समस्त संशयों को समूल नष्ट करें।',
      pb: devanagariToGurmukhi('ਸਤਿਸੰਗ ਰਾਹੀਂ ਆਪਣੇ ਸਾਰੇ ਭਰਮਾਂ ਨੂੰ ਦੂਰ ਕਰੋ।'),
      en: 'Eradicate all doubts through the decisive wisdom of the Satguru’s satsang.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे भीतर के संशय रूपी काल को अपने ज्ञान के प्रकाश से मिटा दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਅੰਦਰਲਾ ਸੰਸਾ ਮਿਟਾ ਕੇ ਨਿਹਚਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dissolve all inner doubts with the luminous light of Your wisdom.'
    },
    quiz: []
  },
  {
    id: 'kaal-25',
    number: 1325,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २५',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੫',
      en: 'Kaal Ko Ang - 25',
    },
    text: {
      hi: 'कबीर गाफिल क्यौं फिरै, क्या सोता घनघोर।\nतेरे सिराने जम खड़ा, ज्यूं अंधियारे चोर।।',
      pb: devanagariToGurmukhi('कबीर गाफिल क्यौं फिरै, क्या सोता घनघोर। तेरे सिराने जम खड़ा, ज्यूं अंधियारे चोर।।'),
      en: 'Kabir gaaphil kyaun phirai, kya sota ghanghor. Tere siraane jam khada, jyoon andhiyaare chor..'
    },
    transliteration: 'Kabir gaaphil kyaun phirai, kya sota ghanghor. Tere siraane jam khada, jyoon andhiyaare chor.',
    bhavarth: {
      hi: 'कबीरजी चेतावनी देते हैं कि हे अज्ञानी जीव! तू इतना लापरवाह होकर क्यों घूम रहा है और मोह की घनघोर नींद में क्यों सो रहा है? क्या तुझे ज्ञात नहीं कि तेरे सिरहाने पर यमराज (काल) चुपचाप ऐसे घात लगाकर खड़ा है, जैसे अंधेरे में चोर।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਹੇ ਗਾਫਿਲ ਜੀਵ! ਮੋਹ ਦੀ ਨੀਂਦ ਵਿੱਚ ਕਿਉਂ ਸੁੱਤਾ ਹੈਂ? ਤੇਰੇ ਸਿਰਹਾਣੇ ਕਾਲ ਇੰਝ ਖੜ੍ਹਾ ਹੈ ਜਿਵੇਂ ਹਨੇਰੇ ਵਿੱਚ ਚੋਰ।'),
      en: 'Kabir cries out: O negligent soul, why do you wander so heedlessly, slumbering deeply in delusion? Do you not see that death stands silently by your pillow, like a thief waiting in the dark?'
    },
    wordMeanings: {
      hi: [
        { word: 'गाफिल (Gaaphil)', meaning: 'लापरवाह / बेखबर' },
        { word: 'सोता घनघोर (Sota ghanghor)', meaning: 'अज्ञान और मोह की गहरी नींद में सोना' },
        { word: 'सिराने जम खड़ा (Siraane jam khada)', meaning: 'सिर पर काल का मंडराना' }
      ],
      pb: [
        { word: 'ਗਾਫਿਲ (Gaaphil)', meaning: 'ਬੇਪਰਵਾਹ' },
        { word: 'ਸਿਰਾਣੇ (Siraane)', meaning: 'ਸਿਰਹਾਣੇ' }
      ],
      en: [
        { word: 'Gaaphil', meaning: 'Heedless / negligent' },
        { word: 'Sota ghanghor', meaning: 'Deeply slumbering in ignorance' },
        { word: 'Siraane jam khada', meaning: 'Death lurking at the pillow' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मोह की नींद में सोकर यह भूल बैठा हूं कि काल किसी भी क्षण मुझे दबोच सकता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੋਹ ਦੀ ਨੀਂਦ ਵਿੱਚ ਕਾਲ ਦੀ ਮੌਜੂਦਗੀ ਨੂੰ ਭੁੱਲ ਗਿਆ ਹਾਂ?'),
      en: 'Am I sleeping so soundly in worldly infatuation that I forget death waiting by my pillow?'
    },
    practicalApplication: {
      hi: 'लापरवाही का त्याग कर हर पल जागृत रहें और सतगुरु की शरण में नाम सिमरन करें।',
      pb: devanagariToGurmukhi('ਗਾਫਿਲਪੁਣਾ ਛੱਡ ਕੇ ਸਦਾ ਸੁਚੇਤ ਰਹੋ ਅਤੇ ਨਾਮ ਜਪੋ।'),
      en: 'Cast off heedlessness, remain ever vigilant, and continuously remember the Divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मोह की गहरी नींद से जगाकर अपने सत्य प्रकाश से आलोकित करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ ਦੀ ਨੀਂਦ ਤੋਂ ਜਗਾ ਕੇ ਆਪਣੀ ਕਿਰਪਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken me from the deep stupor of delusion into Your holy light.'
    },
    quiz: []
  },
  {
    id: 'kaal-26',
    number: 1326,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २६',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੬',
      en: 'Kaal Ko Ang - 26',
    },
    text: {
      hi: 'जरा आय जोरा किया, नैनन दीन्हीं पीठ।\nआंखौ ऊपर आंगुली, वीष भरै पछ नीठ।।',
      pb: devanagariToGurmukhi('जरा आय जोरा किया, नैनन दीन्हीं पीठ। आंखौ ऊपर आंगुली, वीष भरै पछ नीठ।।'),
      en: 'Jara aay jora kiya, nainan deenhee peeth. Aankhau oopar aangulee, veesh bharai pachh neeth..'
    },
    transliteration: 'Jara aay jora kiya, nainan deenhee peeth. Aankhau oopar aangulee, veesh bharai pachh neeth.',
    bhavarth: {
      hi: 'वृद्धावस्था ने आकर अपना भीषण जोर दिखाया और दुर्बल देह की आंखों ने भी पीठ फेर ली अर्थात दृष्टि अत्यंत क्षीण हो गई। अब आंखों के ऊपर उंगलियों की छांव करने पर भी बहुत कठिनाई से थोड़ा-सा ही दिखाई पड़ता है। अतः जब तक इंद्रियां स्वस्थ हैं, तभी तक आत्म-कल्याण का साधन कर लो।',
      pb: devanagariToGurmukhi('ਬੁਢਾਪੇ ਨੇ ਜ਼ੋਰ ਕੀਤਾ ਅਤੇ ਅੱਖਾਂ ਨੇ ਸਾਥ ਛੱਡ ਦਿੱਤਾ। ਹੁਣ ਅੱਖਾਂ ਉੱਤੇ ਉਂਗਲਾਂ ਦੀ ਛਾਂ ਕਰਕੇ ਵੀ ਬਹੁਤ ਮੁਸ਼ਕਲ ਨਾਲ ਦਿਸਦਾ ਹੈ। ਵੇਲਾ ਰਹਿੰਦੇ ਭਜਨ ਕਰ ਲਵੋ।'),
      en: 'Old age arrives exerting its brute force, and the fading eyes turn their back—vision falters. Even shading the brow with fingers, one strains with great hardship to see a glimpse. Devote yourself while your faculties remain whole.'
    },
    wordMeanings: {
      hi: [
        { word: 'जोरा किया (Jora kiya)', meaning: 'अपना बल दिखाना / आधिपत्य जमाना' },
        { word: 'नैनन दीन्हीं पीठ (Nainan deenhee peeth)', meaning: 'आंखों की ज्योति समाप्त हो जाना' },
        { word: 'पछ नीठ (Pachh neeth)', meaning: 'अत्यंत कठिनाई से थोड़ा-सा देखना' }
      ],
      pb: [
        { word: 'ਜੋਰਾ ਕੀਤਾ (Jora kiya)', meaning: 'ਤਾਕਤ ਵਿਖਾਉਣਾ' },
        { word: 'ਨੈਨਨ ਪੀਠ (Nainan peeth)', meaning: 'ਅੱਖਾਂ ਦੀ ਰੌਸ਼ਨੀ ਘਟਣਾ' }
      ],
      en: [
        { word: 'Jora kiya', meaning: 'Exerted brute dominance' },
        { word: 'Nainan deenhee peeth', meaning: 'Eyes turned their back (sight failed)' },
        { word: 'Pachh neeth', meaning: 'Straining with difficulty to see' }
      ]
    },
    contemplation: {
      hi: 'जब इंद्रियां शिथिल हो जाएंगी तब साधना कठिन होगी, तो क्या मैं आज ही स्वस्थ रहते हुए परमात्मा से जुड़ रहा हूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਇੰਦਰੀਆਂ ਕਮਜ਼ੋਰ ਹੋ ਗਈਆਂ ਤਾਂ ਭਜਨ ਔਖਾ ਹੋਵੇਗਾ, ਕੀ ਮੈਂ ਅੱਜ ਹੀ ਪ੍ਰਭੂ ਨਾਲ ਜੁੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'When faculties decline, spiritual practice becomes arduous; am I devoting myself while healthy today?'
    },
    practicalApplication: {
      hi: 'स्वस्थ शरीर और इंद्रियों को केवल सांसारिक भोगों में व्यर्थ न गंवाएं, सत्संग और नाम सिमरन में लगाएं।',
      pb: devanagariToGurmukhi('ਸਵੱਸਥ ਦੇਹ ਨੂੰ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਵਿੱਚ ਨਾ ਗਵਾ ਕੇ ਸਤਿਸੰਗ ਵਿੱਚ ਲਾਓ।'),
      en: 'Utilize able faculties in selfless service and meditation before physical decline sets in.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी इंद्रियों के शिथिल होने से पहले मेरी सुरति को अपने पावन शब्द में स्थिर कर दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਇੰਦਰੀਆਂ ਦੇ ਥੱਕਣ ਤੋਂ ਪਹਿਲਾਂ ਮੇਰੀ ਸੁਰਤਿ ਨੂੰ ਆਪਣੇ ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor my consciousness in Your holy Word before the faculties of body wither.'
    },
    quiz: []
  },
  {
    id: 'kaal-27',
    number: 1327,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २७',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੭',
      en: 'Kaal Ko Ang - 27',
    },
    text: {
      hi: 'बिरिया बीती बल घटा, केस पलटि भये और।\nबिगरा काज संभारि लै, करि छूटन की ठौर।।',
      pb: devanagariToGurmukhi('बिरिया बीती बल घटा, केस पलटि भये और। बिगरा काज संभारि लै, करि छूटन की ठौर।।'),
      en: 'Biriya beetee bal ghataa, kes palati bhaye aur. Bigra kaaj sambhaari lai, kari chhootan kee thaur..'
    },
    transliteration: 'Biriya beetee bal ghata, kes palati bhaye aur. Bigra kaaj sambhari lai, kari chhootan kee thaur.',
    bhavarth: {
      hi: 'समय बीतता गया और उसी के साथ देह का बल भी घटता चला गया। जो काले-सुंदर बाल थे, वे सब सफेद हो गए, अतः अभी भी समय है, तू समझ ले। इस जीवन का बिगड़ा काज बनाने के लिए साधु-संतों की सत्संगति कर, तभी तेरा जीवन सफल हो सकता है।',
      pb: devanagariToGurmukhi('ਵੇਲਾ ਲੰਘਦਾ ਗਿਆ ਅਤੇ ਦੇਹ ਦਾ ਬਲ ਵੀ ਘਟਦਾ ਗਿਆ। ਸੁੰਦਰ ਕਾਲੇ ਕੇਸ ਚਿੱਟੇ ਹੋ ਗਏ। ਅਜੇ ਵੀ ਵੇਲਾ ਹੈ, ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਕਰਕੇ ਵਿਗੜੇ ਕਾਰਜ ਨੂੰ ਸੰਭਾਲ ਲੈ ਤਾਂ ਜੋ ਮੁਕਤੀ ਦਾ ਟਿਕਾਣਾ ਮਿਲ ਸਕੇ।'),
      en: 'Time has slipped away and bodily vigor has diminished; dark hair has turned gray. There is still time—heed the warning, mend your spiritual destiny through holy company, and secure your place of liberation.'
    },
    wordMeanings: {
      hi: [
        { word: 'बिरिया बीती (Biriya beetee)', meaning: 'समय व्यतीत हो गया' },
        { word: 'केस पलटि (Kes palati)', meaning: 'बाल सफेद हो जाना / वृद्धावस्था' },
        { word: 'छूटन की ठौर (Chhootan kee thaur)', meaning: 'भवबंधन से मुक्ति का ठिकाना / सद्गुरु शरण' }
      ],
      pb: [
        { word: 'ਬਿਰਿਆ ਬੀਤੀ (Biriya beetee)', meaning: 'ਸਮਾਂ ਬੀਤ ਗਿਆ' },
        { word: 'ਕੇਸ ਪਲਟਿ (Kes palati)', meaning: 'ਕੇਸ ਚਿੱਟੇ ਹੋ ਗਏ' },
        { word: 'ਛੂਟਨ ਕੀ ਠੌਰ (Chhootan kee thaur)', meaning: 'ਮੁਕਤੀ ਦਾ ਟਿਕਾਣਾ' }
      ],
      en: [
        { word: 'Biriya beetee', meaning: 'Time has passed away' },
        { word: 'Kes palati', meaning: 'Hair has turned gray (onset of senescence)' },
        { word: 'Chhootan kee thaur', meaning: 'Sanctuary of liberation from bondage' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं ढलती उम्र और सफेद बालों की चेतावनी को समझकर अपने बिगड़े काज को संभाल रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਉਮਰ ਦੇ ਢਲਣ ਦੀ ਚੇਤਾਵਨੀ ਨੂੰ ਸਮਝ ਕੇ ਆਪਣੇ ਕਾਰਜ ਸੰਭਾਲ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I heeding the sign of passing youth to mend my spiritual balance while breath remains?'
    },
    practicalApplication: {
      hi: 'विलंब न करें; आज ही संतों के वचनों को आचरण में उतारकर आत्म-कल्याण का मार्ग प्रशस्त करें।',
      pb: devanagariToGurmukhi('ਦੇਰੀ ਨਾ ਕਰੋ, ਅੱਜ ਹੀ ਸਤਿਸੰਗ ਨਾਲ ਜੁੜ ਕੇ ਜੀਵਨ ਨੂੰ ਸੁਧਾਰੋ।'),
      en: 'Do not procrastinate; cultivate holy association and spiritual vigilance today.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! ढलती आयु के साथ मेरे मन को सांसारिक मोह से हटाकर अपने चरण-कमलों में लीन कर लें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤਿ ਨੂੰ ਸੰਸਾਰ ਤੋਂ ਮੋੜ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜ ਲਵੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! As years advance, detach my soul from ephemeral desires and ground me in Your grace.'
    },
    quiz: []
  },
  {
    id: 'kaal-28',
    number: 1328,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २८',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੮',
      en: 'Kaal Ko Ang - 28',
    },
    text: {
      hi: 'ताजी छूटा सहर ते, कसबै पड़ी पुकार।\nदरवाजा जड़ाहि रहा, निकस गया असवार।।',
      pb: devanagariToGurmukhi('ताजी छूटा सहर ते, कसबै पड़ी पुकार। दरवाजा जड़ाहि रहा, निकस गया असवार।।'),
      en: 'Taajee chhoota sahar te, kasabai padee pukaar. Darwaajaa jadaahi rahaa, nikas gayaa aswaar..'
    },
    transliteration: 'Taajee chhoota sahar te, kasabai padee pukaar. Darwaaja jadahi rahaa, nikas gaya aswaar.',
    bhavarth: {
      hi: 'जैसे ही प्राण रूपी घोड़े पर जीव का सवारी रूपी शरीर शहर से निकला, वैसे ही इंद्रियों के स्थान रूपी बाजार में शोरगुल मच गया, परंतु नाक-कान-नेत्र आदि सभी दरवाजे तो ज्यों-के-त्यों जुड़े रह गए और वह सवार निकल गया और मृत देह खाली पड़ी रह गई।',
      pb: devanagariToGurmukhi('ਜਿਵੇਂ ਹੀ ਪ੍ਰਾਣ ਰੂਪੀ ਘੋੜੇ ਤੋਂ ਜੀਵ ਰੂਪੀ ਅਸਵਾਰ ਨਿਕਲਿਆ, ਇੰਦਰੀਆਂ ਦੇ ਬਾਜ਼ਾਰ ਵਿੱਚ ਰੌਲਾ ਪੈ ਗਿਆ। ਸਰੀਰ ਦੇ ਨੌਂ ਦਰਵਾਜ਼ੇ ਖੁੱਲ੍ਹੇ-ਖੜ੍ਹੇ ਰਹਿ ਗਏ ਅਤੇ ਸਵਾਰ ਨਿਕਲ ਗਿਆ।'),
      en: 'As the steed of prana bolted and the rider soul departed the citadel of the body, clamor arose across the marketplace of senses. The outer portals remained affixed in place, while the rider vanished, leaving behind an empty vessel.'
    },
    wordMeanings: {
      hi: [
        { word: 'ताजी (Taajee)', meaning: 'अरबी घोड़ा / तीव्र प्राण वायु' },
        { word: 'कसबै पड़ी पुकार (Kasabai padee pukaar)', meaning: 'इंद्रिय रूपी बस्ती व परिजनों में हाहाकार' },
        { word: 'असवार (Aswaar)', meaning: 'जीवात्मा / सवार' }
      ],
      pb: [
        { word: 'ਤਾਜੀ (Taajee)', meaning: 'ਤੇਜ਼ ਘੋੜਾ / ਪ੍ਰਾਣ' },
        { word: 'ਕਸਬੈ ਪੁਕਾਰ (Kasabai pukaar)', meaning: 'ਵਿਕਾਰਾਂ ਤੇ ਸਾਕ-ਸੰਬੰਧੀਆਂ ਦਾ ਰੌਲਾ' },
        { word: 'ਅਸਵਾਰ (Aswaar)', meaning: 'ਜੀਵ ਆਤਮਾ' }
      ],
      en: [
        { word: 'Taajee', meaning: 'Fleet steed (representing prana / vital breath)' },
        { word: 'Kasabai padee pukaar', meaning: 'Clamor in the township of senses and kinsmen' },
        { word: 'Aswaar', meaning: 'Rider (the indwelling jiva)' }
      ]
    },
    contemplation: {
      hi: 'जब इस देह के दरवाजे खुले ही रह जाने हैं और प्राण-सवार निकल जाना है, तो किस वस्तु का अभिमान है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਪ੍ਰਾਣ-ਅਸਵਾਰ ਨਿਕਲ ਜਾਣਾ ਹੈ ਅਤੇ ਸਰੀਰ ਖਾਲੀ ਰਹਿ ਜਾਣਾ ਹੈ, ਤਾਂ ਹੰਕਾਰ ਕਿਸ ਗੱਲ ਦਾ?'),
      en: 'When the rider inevitably flies and physical portals stand barren, what worldly identity can endure?'
    },
    practicalApplication: {
      hi: 'देह और इंद्रियों के क्षणिक सुखों के मोह से ऊपर उठकर आत्मा के नित्य कल्याण में ध्यान लगाएं।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਦੇ ਝੂਠੇ ਮੋਹ ਨੂੰ ਛੱਡ ਕੇ ਸੱਚੇ ਆਤਮਿਕ ਗਿਆਨ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Look beyond the transient outer fortress to honor the sacred journey of the conscious soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब यह प्राण-सवार देह से विदा हो, तब आपकी पावन स्मृति ही मेरा संबल बने। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਅੰਤ ਵੇਲੇ ਮੈਨੂੰ ਆਪਣਾ ਨਾਮ ਚੇਤੇ ਰੱਖਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! When the rider departs this earthly town, let Your divine remembrance be my eternal beacon.'
    },
    quiz: []
  },
  {
    id: 'kaal-29',
    number: 1329,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - २९',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੨੯',
      en: 'Kaal Ko Ang - 29',
    },
    text: {
      hi: 'पंथी ऊभा पंथ सिर, बगुचा बांधा पूंठ।\nमरना मुंह आगे खड़ा, जीवन का सब झूठ।।',
      pb: devanagariToGurmukhi('पंथी ऊभा पंथ सिर, बगुचा बांधा पूंठ। मरना मुंह आगे खड़ा, जीवन का सब झूठ।।'),
      en: 'Panthee oobhaa panth sir, baguchaa baandhaa poonth. Marna munh aage khadaa, jeevan kaa sab jhooth..'
    },
    transliteration: 'Panthee oobha panth sir, bagucha bandha poonth. Marna munh aage khada, jeevan ka sab jhooth.',
    bhavarth: {
      hi: 'यह जीव एक पथिक की भांति, माया-मोह की गठरी अपनी पीठ पर बांधे हुए, थका हुआ-सा जीवन पथ पर खड़ा हुआ है। इसके सम्मुख काल भी खड़ा है, ऐसी दशा में क्या आशा करें। यह जीवन झूठी कल्पना मात्र है।',
      pb: devanagariToGurmukhi('ਜੀਵ ਰੂਪੀ ਮੁਸਾਫ਼ਿਰ ਮਾਇਆ ਦੀ ਪੰਡ ਪਿੱਠ \'ਤੇ ਬੰਨ੍ਹ ਕੇ ਰਸਤੇ ਦੇ ਸਿਰੇ ਖਲੋਤਾ ਹੈ। ਮੂਹਰੇ ਮੌਤ ਖੜ੍ਹੀ ਹੈ, ਇਸ ਲਈ ਸੰਸਾਰਕ ਉਮੀਦਾਂ ਸਭ ਝੂਠ ਹਨ।'),
      en: 'Like a traveler stranded at the road’s end bearing a heavy bundle of attachment on his back, the soul stands while death looms right before its face. In such condition, all worldly attachment is an empty illusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'पंथी (Panthee)', meaning: 'मुसाफिर / संसार-पथ का पथिक' },
        { word: 'बगुचा (Baguchaa)', meaning: 'गठरी / वासनाओं व कर्मों का बोझ' },
        { word: 'पूंठ (Poonth)', meaning: 'पीठ पर' }
      ],
      pb: [
        { word: 'ਪੰਥੀ (Panthee)', meaning: 'ਰਾਹੀ / ਮੁਸਾਫ਼ਿਰ' },
        { word: 'ਬਗੁਚਾ (Baguchaa)', meaning: 'ਪੰਡ / ਗਠੜੀ' },
        { word: 'ਪੂੰਠ (Poonth)', meaning: 'ਪਿੱਠ ਉੱਤੇ' }
      ],
      en: [
        { word: 'Panthee', meaning: 'Wayfarer / pilgrim of mortal life' },
        { word: 'Baguchaa', meaning: 'Heavy bundle of worldly desires and baggage' },
        { word: 'Poonth', meaning: 'Upon the back' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं पीठ पर व्यर्थ की चिंताओं और तृष्णाओं का बगुचा बांधकर काल के सम्मुख खड़ा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੋਹ ਦੀ ਭਾਰੀ ਪੰਡ ਚੁੱਕ ਕੇ ਮੌਤ ਦੇ ਸਾਹਮਣੇ ਨਿਹੱਥਾ ਖੜ੍ਹਾ ਹਾਂ?'),
      en: 'Am I overburdened with worldly baggage while facing the immediate threshold of mortality?'
    },
    practicalApplication: {
      hi: 'अनावश्यक संग्रह, तृष्णा और चिंताओं की गठरी उतारकर चित्त को हल्का और निर्मल बनाएं।',
      pb: devanagariToGurmukhi('ਵਿਅਰਥ ਚਿੰਤਾਵਾਂ ਦੀ ਪੰਡ ਉਤਾਰ ਕੇ ਮਨ ਨੂੰ ਸਹਿਜ ਤੇ ਨਿਰਮਲ ਬਣਾਓ।'),
      en: 'Unload the unnecessary burdens of attachment; walk with light-hearted, selfless clarity.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वासनाओं की गठरी को अपने ज्ञान की कृपा से उतारकर मुझे निर्भय कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਵਾਸਨਾਵਾਂ ਦੀ ਪੰਡ ਨੂੰ ਦੂਰ ਕਰਕੇ ਮੈਨੂੰ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dissolve my heavy baggage of karmic desire with the lightness of Your truth.'
    },
    quiz: []
  },
  {
    id: 'kaal-30',
    number: 1330,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३०',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੦',
      en: 'Kaal Ko Ang - 30',
    },
    text: {
      hi: 'यह जीव आया दूर ते, जाना है बहु दूर।\nबिच के वासै बसि गया, काल रहा सिर पूर।।',
      pb: devanagariToGurmukhi('यह जीव आया दूर ते, जाना है बहु दूर। बिच के वासै बसि गया, काल रहा सिर पूर।।'),
      en: 'Yeh jeev aayaa door te, jaanaa hai bahu door. Bich ke vaasai basi gayaa, kaal rahaa sir poor..'
    },
    transliteration: 'Yeh jeev aaya door te, jana hai bahu door. Bich ke vaasai basi gaya, kaal raha sir poor.',
    bhavarth: {
      hi: 'इस जीव ने न जाने कितनी योनियों के दुख भोगकर इस मनुष्य योनि को प्राप्त किया है और इस आवागमन से मुक्त होने में न जाने उसे कितने समय की दूरी तय करनी पड़े, परंतु यह तो सांसारिक विषय-वासना में रम गया है और सिर पर काल भी मंडरा रहा है।',
      pb: devanagariToGurmukhi('ਇਹ ਜੀਵ ਬੜੀ ਲੰਮੀ ਯਾਤਰਾ ਤੋਂ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਭੋਗ ਕੇ ਆਇਆ ਹੈ ਅਤੇ ਅਜੇ ਬਹੁਤ ਦੂਰ ਜਾਣਾ ਹੈ। ਪਰ ਵਿਚਕਾਰਲੇ ਮੁਕਾਮ \'ਤੇ ਹੀ ਉਲਝ ਗਿਆ ਹੈ ਅਤੇ ਸਿਰ \'ਤੇ ਕਾਲ ਮੰਡਰਾ ਰਿਹਾ ਹੈ।'),
      en: 'The soul has journeyed from afar across endless transmigrations, and must travel yet further to reach its true home. Yet it settled in this midway inn of sensual delusion, while Kal hovers directly overhead.'
    },
    wordMeanings: {
      hi: [
        { word: 'दूर ते आया (Door te aaya)', meaning: 'चौरासी लाख योनियों का लंबा चक्कर' },
        { word: 'बिच के वासै (Bich ke vaasai)', meaning: 'संसार रूपी सराय / मध्यवर्ती पड़ाव' },
        { word: 'सिर पूर (Sir poor)', meaning: 'सिर पर पूर्णतया उपस्थित' }
      ],
      pb: [
        { word: 'ਦੂਰ ਤੇ ਆਇਆ (Door te aaya)', meaning: 'ਲੰਮੀ ਯਾਤਰਾ ਤੋਂ' },
        { word: 'ਬਿਚ ਕੇ ਵਾਸੈ (Bich ke vaasai)', meaning: 'ਵਿਚਕਾਰਲੀ ਸਰਾਂ ਵਿੱਚ' },
        { word: 'ਸਿਰ ਪੂਰ (Sir poor)', meaning: 'ਸਿਰ ਉੱਤੇ ਮੰਡਰਾਉਂਦਾ' }
      ],
      en: [
        { word: 'Door te aaya', meaning: 'Arrived from an immense cosmic journey' },
        { word: 'Bich ke vaasai', meaning: 'Settled in the intermediate resting inn' },
        { word: 'Sir poor', meaning: 'Hovering directly above the head' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं इस संसार रूपी सराय को ही अपना स्थायी घर समझकर अपनी मूल यात्रा को भूल गया हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਇਸ ਸੰਸਾਰ ਨੂੰ ਹੀ ਅਸਲੀ ਘਰ ਮੰਨ ਕੇ ਆਪਣਾ ਮੂਲ ਟੀਚਾ ਭੁੱਲ ਗਿਆ ਹਾਂ?'),
      en: 'Have I mistaken this midway rest stop for my permanent abode while Kal looms overhead?'
    },
    practicalApplication: {
      hi: 'संसार में एक यात्री की तरह रहें; किसी भी वस्तु में लिप्त न होकर अपने मूल लक्ष्य को स्मरण रखें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਮੁਸਾਫ਼ਿਰ ਵਾਂਗ ਰਹੋ, ਲਿਪਤ ਨਾ ਹੋਵੋ।'),
      en: 'Live in the world as a detached guest, remembering your true destination at Satlok.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस चौरासी के भटकाव से बचाकर अपने अविनाशी सत्यलोक का मार्ग दिखा दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸੱਚੇ ਘਰ ਦਾ ਰਸਤਾ ਵਿਖਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken my slumbering pilgrim spirit to journey home to the eternal realm.'
    },
    quiz: []
  },
  {
    id: 'kaal-31',
    number: 1331,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३१',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੧',
      en: 'Kaal Ko Ang - 31',
    },
    text: {
      hi: 'सब जग डरपैं काल सों, ब्रह्मा विश्नु महेस।\nसुर नर मुनि औ लोक सब, सात रसातल सेस।।',
      pb: devanagariToGurmukhi('सब जग डरपैं काल सों, ब्रह्मा विश्नु महेस। सुर नर मुनि औ लोक सब, सात रसातल सेस।।'),
      en: 'Sab jag darpain kaal son, brahmaa vishnu mahes. Sur nar muni au lok sab, saat rasaatal ses..'
    },
    transliteration: 'Sab jag darpain kaal son, brahma vishnu mahes. Sur nar muni au lok sab, saat rasatal ses.',
    bhavarth: {
      hi: 'काल तो काल है, उससे कौन नहीं डरता? यह सारा संसार ही काल से डरता है, क्या ब्रह्मा, क्या विष्णु और क्या महेश। यहां तक कि देवता, मनुष्य, मुनि तथा सात लोक और सातों-लोकों के तले रहने वाले शेषनाग भी इससे डरते हैं।',
      pb: devanagariToGurmukhi('ਸਾਰਾ ਸੰਸਾਰ ਕਾਲ ਤੋਂ ਡਰਦਾ ਹੈ, ਬ੍ਰਹਮਾ, ਵਿਸ਼ਨੂੰ, ਮਹੇਸ਼ ਵੀ ਕਾਲ ਦੇ ਅਧੀਨ ਹਨ। ਦੇਵਤੇ, ਮਨੁੱਖ, ਮੁਨੀ, ਸੱਤ ਲੋਕ ਅਤੇ ਪਾਤਾਲ ਦੇ ਸ਼ੇਸ਼ਨਾਗ ਵੀ ਇਸ ਦੇ ਭੈਅ ਹੇਠ ਹਨ।'),
      en: 'All creation trembles before Kal—Brahma, Vishnu, and Shiva alike. Celestial beings, mortals, ascetics, the seven planetary realms, and even Sheshnag of the nether regions are subject to the universal sway of time.'
    },
    wordMeanings: {
      hi: [
        { word: 'डरपैं काल सों (Darpain kaal son)', meaning: 'काल के भय से कंपित हैं' },
        { word: 'सुर नर मुनि (Sur nar muni)', meaning: 'देवता, मनुष्य एवं ऋषि-महर्षि' },
        { word: 'रसातल सेस (Rasaatal ses)', meaning: 'पाताल लोक के शेषनाग' }
      ],
      pb: [
        { word: 'ਡਰਪੈਂ (Darpain)', meaning: 'ਡਰਦੇ ਹਨ' },
        { word: 'ਸੁਰ ਨਰ ਮੁਨੀ (Sur nar muni)', meaning: 'ਦੇਵਤੇ, ਮਨੁੱਖ ਤੇ ਰਿਸ਼ੀ' },
        { word: 'ਰਸਾਤਲ ਸੇਸ (Rasaatal ses)', meaning: 'ਪਾਤਾਲ ਦੇ ਸ਼ੇਸ਼ਨਾਗ' }
      ],
      en: [
        { word: 'Darpain kaal son', meaning: 'Tremble under the authority of Kal' },
        { word: 'Sur nar muni', meaning: 'Demigods, humans, and venerable hermits' },
        { word: 'Rasaatal ses', meaning: 'Shesha dwelling in the subterranean realms' }
      ]
    },
    contemplation: {
      hi: 'जब त्रिदेव और देवता भी काल के वश में हैं, तो क्या केवल सतगुरु का सत्यनाम ही मुझे अभय कर सकता है?',
      pb: devanagariToGurmukhi('ਜਦ ਦੇਵਤੇ ਵੀ ਕਾਲ ਤੋਂ ਨਹੀਂ ਬਚ ਸਕੇ, ਤਾਂ ਕੀ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਬਿਨਾਂ ਕੋਈ ਹੋਰ ਓਟ ਹੈ?'),
      en: 'When cosmic creators are bound by time, where else can absolute sanctuary lie except in the Satguru?'
    },
    practicalApplication: {
      hi: 'सांसारिक देवताओं और पद-प्रतिष्ठा की मोह-माया छोड़ केवल अविनाशी सत्य परब्रह्म का सुमिरन करें।',
      pb: devanagariToGurmukhi('ਨਾਸ਼ਵਾਨ ਹਸਤੀਆਂ ਦੀ ਪੂਜਾ ਛੱਡ ਕੇ ਅਵਿਨਾਸ਼ੀ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Do not seek security in perishable hierarchies; seek the timeless refuge of the True Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! तीनों लोकों के काल से मुझे केवल आपकी कृपा और शरण ही मुक्त करा सकती है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਆਜ਼ਾਦ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the universal terror of Kal into Your transcendent harbor of peace.'
    },
    quiz: []
  },
  {
    id: 'kaal-32',
    number: 1332,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३२',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੨',
      en: 'Kaal Ko Ang - 32',
    },
    text: {
      hi: 'कबीर मन्दिर आपने, नित उठि करता आल।\nमरहट देखी डरपता, चौड़े दीया डाल।।',
      pb: devanagariToGurmukhi('कबीर मन्दिर आपने, नित उठि करता आल। मरहट देखी डरपता, चौड़े दीया डाल।।'),
      en: 'Kabeer mandir aapne, nit uthi kartaa aal. Marhat dekhee darptaa, chaude deeyaa daal..'
    },
    transliteration: 'Kabeer mandir aapne, nit uthi karta aal. Marhat dekhee darpta, chaude deeya daal.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जो अपने मंदिर (सुंदर भवनों) में नित्य उठकर आनंद विहार व विलास किया करते थे और श्मशान को देखकर डरते थे, उन्हें भी उस निर्दयी काल ने चौड़े मैदान में लाकर डाल दिया है, अतः यह सब देखकर यहां बचने की कोई आशा करना व्यर्थ है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੋ ਆਪਣੇ ਮਹਿਲਾਂ ਵਿੱਚ ਰੰਗ-ਰਲੀਆਂ ਮਨਾਉਂਦੇ ਸਨ ਅਤੇ ਸ਼ਮਸ਼ਾਨ ਵੇਖ ਕੇ ਡਰਦੇ ਸਨ, ਕਾਲ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਵੀ ਮੈਦਾਨ ਵਿੱਚ ਸੁਟ ਦਿੱਤਾ।'),
      en: 'Kabir observes that those who reveled daily within luxurious mansions and recoiled in fear at the sight of the cremation ground were eventually dragged by Kal into the open barren ground. Escaping it by material fortresses is impossible.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन्दिर आपने (Mandir aapne)', meaning: 'अपने सुंदर महल व भवन' },
        { word: 'करता आल (Kartaa aal)', meaning: 'आमोद-प्रमोद व विलास करना' },
        { word: 'मरहट (Marhat)', meaning: 'श्मशान भूमि' },
        { word: 'चौड़े दीया डाल (Chaude deeyaa daal)', meaning: 'श्मशान के खुले मैदान में फेंक दिया' }
      ],
      pb: [
        { word: 'ਮੰਦਿਰ ਆਪਣੇ (Mandir aapne)', meaning: 'ਆਪਣੇ ਮਹਿਲ' },
        { word: 'ਕਰਤਾ ਆਲ (Kartaa aal)', meaning: 'ਵਿਲਾਸ ਕਰਨਾ' },
        { word: 'ਮਰਹਟ (Marhat)', meaning: 'ਸ਼ਮਸ਼ਾਨ' },
        { word: 'ਚੌੜੇ ਦੀਯਾ ਡਾਲ (Chaude deeyaa daal)', meaning: 'ਖੁੱਲ੍ਹੇ ਸ਼ਮਸ਼ਾਨ ਵਿੱਚ ਸੁਟਿਆ' }
      ],
      en: [
        { word: 'Mandir aapne', meaning: 'In one’s luxurious palaces' },
        { word: 'Kartaa aal', meaning: 'Indulging in merriment and self-delusion' },
        { word: 'Marhat', meaning: 'Cremation ground' },
        { word: 'Chaude deeyaa daal', meaning: 'Cast out into the open funeral grounds' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने सुंदर घरों और सुख-साधनों में मग्न होकर श्मशान की अंतिम सच्चाई को भुला बैठा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਘਰ-ਬਾਰ ਦੇ ਸੁਖਾਂ ਵਿੱਚ ਮਸਤ ਹੋ ਕੇ ਅੰਤਿਮ ਸੱਚਾਈ ਨੂੰ ਭੁੱਲ ਗਿਆ ਹਾਂ?'),
      en: 'Do my cozy habitations blind me to the reality that all bodies ultimately rest in the open dust?'
    },
    practicalApplication: {
      hi: 'भवनों और संपत्तियों के मोह में न बंधें; सादगी और सत्य-साधना से हृदय को पवित्र रखें।',
      pb: devanagariToGurmukhi('ਧਨ-ਦੌਲਤ ਦੇ ਹੰਕਾਰ ਤੋਂ ਬਚ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਰਹੋ।'),
      en: 'Live without haughty pride in mansions or possessions; cherish spiritual humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब मुझे भी इस संसार के चौड़े मैदान में जाना हो, उससे पहले मुझे अपने नाम का अनमोल धन प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦਾ ਸੱਚਾ ਧਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before my earthly vessel returns to dust, grant me the eternal wealth of Your holy Name.'
    },
    quiz: []
  },
  {
    id: 'kaal-33',
    number: 1333,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३३',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੩',
      en: 'Kaal Ko Ang - 33',
    },
    text: {
      hi: 'निश्चय काल गरास हो, बहुत कहा समुझाय।\nकहैं कबीर मैं का कहूं, देखत ना पतियाय।।',
      pb: devanagariToGurmukhi('निश्चय काल गरास हो, बहुत कहा समुझाय। कहैं कबीर मैं का कहूं, देखत ना पतियाय।।'),
      en: 'Nishchay kaal garaas ho, bahut kahaa samujhaay. Kahain kabeer main kaa kahoon, dekhat naa patiyaay..'
    },
    transliteration: 'Nishchay kaal garaas ho, bahut kaha samujhay. Kahain kabeer main ka kahoon, dekhat na patiyay.',
    bhavarth: {
      hi: 'इसमें तनिक भी संदेह नहीं है, निश्चय ही यह सारा जगत काल का ग्रास हो जाएगा, यह मैंने बहुत अच्छे प्रकार से समझाकर कह दिया है। कबीरजी कहते हैं कि अब मैं इससे अधिक और क्या कहूं। लोगों को मरते हुए देखकर भी दूसरों को विश्वास नहीं होता।',
      pb: devanagariToGurmukhi('ਇਹ ਨਿਸ਼ਚੈ ਹੀ ਹੈ ਕਿ ਸਭ ਕਾਲ ਦਾ ਗ੍ਰਾਸ ਬਣਨਗੇ, ਮੈਂ ਬਹੁਤ ਸਮਝਾਇਆ ਹੈ। ਪਰ ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਲੋਕ ਅੱਖੀਂ ਵੇਖ ਕੇ ਵੀ ਵਿਸ਼ਵਾਸ ਨਹੀਂ ਕਰਦੇ।'),
      en: 'Undoubtedly all the world will be devoured as the morsel of Kal; I have explained this in countless ways. What more can I say, laments Kabir, when people see death with their own eyes yet refuse to awaken and believe?'
    },
    wordMeanings: {
      hi: [
        { word: 'काल गरास (Kaal garaas)', meaning: 'काल का ग्रास / निवाला' },
        { word: 'समुझाय (Samujhaay)', meaning: 'भली-भांति समझाकर' },
        { word: 'पतियाय (Patiyaay)', meaning: 'विश्वास करना / श्रद्धा लाना' }
      ],
      pb: [
        { word: 'ਕਾਲ ਗਰਾਸ (Kaal garaas)', meaning: 'ਕਾਲ ਦਾ ਨਿਵਾਲਾ' },
        { word: 'ਸਮੁਝਾਯ (Samujhaay)', meaning: 'ਸਮਝਾ ਕੇ' },
        { word: 'ਪਤਿਆਯ (Patiyaay)', meaning: 'ਯਕੀਨ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Kaal garaas', meaning: 'The consumable morsel of death' },
        { word: 'Samujhaay', meaning: 'Having explained repeatedly' },
        { word: 'Patiyaay', meaning: 'To believe, accept, or place faith' }
      ]
    },
    contemplation: {
      hi: 'दूसरों को संसार से जाते देखकर भी क्या मुझे यह भ्रम है कि मैं सदैव यहीं रहूंगा?',
      pb: devanagariToGurmukhi('ਦੂਜਿਆਂ ਨੂੰ ਜਾਂਦੇ ਵੇਖ ਕੇ ਵੀ ਕੀ ਮੈਨੂੰ ਭੁਲੇਖਾ ਹੈ ਕਿ ਮੈਂ ਸਦਾ ਇੱਥੇ ਰਹਾਂਗਾ?'),
      en: 'Witnessing so many departures daily, why does my ego pretend I am exempt from mortality?'
    },
    practicalApplication: {
      hi: 'दृष्टियों के भ्रम से जागें; संसार की नश्वरता को स्वीकार कर प्रतिदिन आत्म-चिंतन करें।',
      pb: devanagariToGurmukhi('ਅੱਖਾਂ ਖੋਲ੍ਹ ਕੇ ਸੱਚ ਨੂੰ ਪਛਾਣੋ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Acknowledge the brevity of earthly days; let this awareness inspire earnest devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी अज्ञानता का परदा हटाकर मुझे यथार्थ सत्य को स्वीकार करने की बुद्धि दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਸਲੀਅਤ ਨੂੰ ਵੇਖਣ ਤੇ ਮੰਨਣ ਦੀ ਬੁੱਧੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Pierce my veil of stubborn denial and grant me the courage of true realization.'
    },
    quiz: []
  },
  {
    id: 'kaal-34',
    number: 1334,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३४',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੪',
      en: 'Kaal Ko Ang - 34',
    },
    text: {
      hi: 'जारि बारि मिस्सी करै, मिस्सी करिहै छार।\nकहैं कबीर कोइला करै, फिर दे दे औतार।।',
      pb: devanagariToGurmukhi('जारि बारि मिस्सी करै, मिस्सी करिहै छार। कहैं कबीर कोइला करै, फिर दे दे औतार।।'),
      en: 'Jaari baari missee karai, missee karihai chhaar. Kahain kabeer koilaa karai, phir de de autaar..'
    },
    transliteration: 'Jaari baari missee karai, missee karihai chhaar. Kahain kabeer koila karai, phir de de autaar.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि काल और उसके अधीन अज्ञान शांत जीवन को जलाकर भस्म कर देता है, कोयला बना देता है और उसे भी फिर राख बना देता है। इस प्रकार तन-मन को पूर्णतया नष्ट करके वह जीव को बार-बार जन्म-मरण के चक्कर में डालता है।',
      pb: devanagariToGurmukhi('ਕਾਲ ਜੀਵ ਨੂੰ ਸਾੜ ਕੇ ਸੁਆਹ ਕਰ ਦਿੰਦਾ ਹੈ, ਕੋਲੇ ਵਾਂਗੂ ਬਾਲ ਕੇ ਮੁੜ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਵਿੱਚ ਧੱਕ ਦਿੰਦਾ ਹੈ।'),
      en: 'Kabir warns that Kal burns and reduces mortal existence to cinders, and from cinders to fine ash; having turned the being into coal, it repeatedly hurls the soul into repeated transmigratory incarnations.'
    },
    wordMeanings: {
      hi: [
        { word: 'जारि बारि (Jaari baari)', meaning: 'जला-भूनकर नष्ट करना' },
        { word: 'मिस्सी (Missee)', meaning: 'बारीक चूर्ण / कालिख' },
        { word: 'छार (Chhaar)', meaning: 'राख / भस्म' },
        { word: 'दे दे औतार (De de autaar)', meaning: 'बारम्बार नया जन्म देना' }
      ],
      pb: [
        { word: 'ਜਾਰਿ ਬਾਰਿ (Jaari baari)', meaning: 'ਸਾੜ ਕੇ' },
        { word: 'ਮਿੱਸੀ (Missee)', meaning: 'ਬਰੀਕ ਚੂਰਨ' },
        { word: 'ਛਾਰ (Chhaar)', meaning: 'ਸੁਆਹ' },
        { word: 'ਦੇ ਦੇ ਔਤਾਰ (De de autaar)', meaning: 'ਮੁੜ ਜਨਮ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Jaari baari', meaning: 'Burning and incinerating utterly' },
        { word: 'Missee', meaning: 'Fine black powder / soot' },
        { word: 'Chhaar', meaning: 'Ashes' },
        { word: 'De de autaar', meaning: 'Subjecting to endless cycles of reincarnation' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बार-बार जलकर राख होने और चौरासी में भटकने के इस चक्र से मुक्ति चाहता हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਇਸ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਤੋਂ ਸਦਾ ਲਈ ਛੁਟਕਾਰਾ ਪਾਉਣਾ ਚਾਹੁੰਦਾ ਹਾਂ?'),
      en: 'Do I yearn to be emancipated from this unending grinder of birth, dissolution, and rebirth?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के तत्व-ज्ञान का अमृत पीकर जन्म-मरण के अंतहीन ताप से अपनी आत्मा को शीतल करें।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਜਨਮ-ਮਰਨ ਦੀ ਅੱਗ ਨੂੰ ਸ਼ਾਂਤ ਕਰੋ।'),
      en: 'Quench the blazing fire of cyclic rebirth through the cool nectar of the Guru’s wisdom.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! चौरासी के इस प्रचंड भट्टी से मुझे निकालकर अपनी शीतल छाया में शरण दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਪਣੀ ਛਤਰ-ਛਾਇਆ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue my soul from the wheel of 8.4 million forms into Your eternal serenity.'
    },
    quiz: []
  },
  {
    id: 'kaal-35',
    number: 1335,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३५',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੫',
      en: 'Kaal Ko Ang - 35',
    },
    text: {
      hi: 'घाट जगाती धर्मराय, गुरुमुख ले पहिचान।\nछाप बिना गुरु नाम के, साकट रहा निदान।।',
      pb: devanagariToGurmukhi('घाट जगाती धर्मराय, गुरुमुख ले पहिचान। छाप बिना गुरु नाम के, साकट रहा निदान।।'),
      en: 'Ghaat jagaatee dharamraay, gurumukh le pahichaan. Chhaap binaa guru naam ke, saakat rahaa nidaan..'
    },
    transliteration: 'Ghaat jagaatee dharamraay, gurumukh le pahichaan. Chhaap bina guru naam ke, saakat raha nidaan.',
    bhavarth: {
      hi: 'हर जीव को घाट का चुंगी-कर धर्मराज को चुकाना पड़ता है। ऐसे में धर्मराज सदगुरु के प्रिय जनों को पहचान लेते हैं, परंतु जो सद्गुरु के नाम-ज्ञान के चिन्ह से रहित हैं, उन्हें अंत में यम के हाथों अवश्य ही पड़ना होता है।',
      pb: devanagariToGurmukhi('ਪਰਲੋਕ ਦੇ ਘਾਟ \'ਤੇ ਧਰਮਰਾਜ ਮਹਿਸੂਲੀਆ (ਚੂੰਗੀ ਲੈਣ ਵਾਲਾ) ਹੈ। ਉਹ ਗੁਰਮੁਖਾਂ ਨੂੰ ਪਛਾਣ ਕੇ ਲੰਘਾ ਦਿੰਦਾ ਹੈ, ਪਰ ਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਛਾਪ ਬਿਨਾਂ ਮਨਮੁਖ ਅਟਕ ਜਾਂਦਾ ਹੈ।'),
      en: 'At the cosmic crossing wharf, Dharamrai sits as the toll collector. He instantly recognizes the Gurumukh seekers stamped with the Satguru’s seal; but devoid of the True Name’s imprint, the worldly man is detained and penalized.'
    },
    wordMeanings: {
      hi: [
        { word: 'घाट जगाती (Ghaat jagaatee)', meaning: 'घाट पर चुंगी या टैक्स वसूलने वाला अधिकारी' },
        { word: 'गुरुमुख (Gurumukh)', meaning: 'सद्गुरु के वचनों पर चलने वाले सच्चे साधक' },
        { word: 'छाप (Chhaap)', meaning: 'सत्यनाम की आध्यात्मिक मोहर / पहचान' },
        { word: 'साकट (Saakat)', meaning: 'मायावी / गुरु-विमुख जीव' }
      ],
      pb: [
        { word: 'ਘਾਟ ਜਗਾਤੀ (Ghaat jagaatee)', meaning: 'ਮਹਿਸੂਲੀਆ / ਚੂੰਗੀ ਲੈਣ ਵਾਲਾ' },
        { word: 'ਗੁਰਮੁਖ (Gurumukh)', meaning: 'ਗੁਰੂ ਦਾ ਆਗਿਆਕਾਰੀ' },
        { word: 'ਛਾਪ (Chhaap)', meaning: 'ਨਾਮ ਦੀ ਮੋਹਰ' },
        { word: 'ਸਾਕਤ (Saakat)', meaning: 'ਮਨਮੁਖ / ਰੱਬ ਤੋਂ ਟੁੱਟਾ' }
      ],
      en: [
        { word: 'Ghaat jagaatee', meaning: 'Toll-collector stationed at the river crossing' },
        { word: 'Gurumukh', meaning: 'Devoted disciple aligned with the Satguru' },
        { word: 'Chhaap', meaning: 'Spiritual imprint / seal of the True Name' },
        { word: 'Saakat', meaning: 'Egoist separated from divine truth' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे अंतःकरण पर सद्गुरु के पावन नाम की छाप अंकित है, जो मुझे भवसागर पार करा सके?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਹਿਰਦੇ \'ਤੇ ਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਛਾਪ ਹੈ ਜੋ ਮੈਨੂੰ ਮੁਕਤੀ ਦਿਵਾ ਸਕੇ?'),
      en: 'Does my consciousness bear the authentic seal of the Guru’s Word to pass the cosmic toll?'
    },
    practicalApplication: {
      hi: 'सद्गुरु से दीक्षा व उपदेश लेकर अपने जीवन को सत्यनाम के अनुशासन में ढालें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਹੁਕਮ ਵਿੱਚ ਚੱਲ ਕੇ ਆਪਣੇ ਜੀਵਨ ਨੂੰ ਸਫਲ ਕਰੋ।'),
      en: 'Align your life with the Satguru’s instructions so the seal of devotion shines within.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपने पावन नाम की अविनाशी छाप मेरे हृदय पर लगा दीजिए, ताकि यमदूत मुझे छू भी न सकें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ \'ਤੇ ਆਪਣੇ ਨਾਮ ਦੀ ਮੋਹਰ ਲਾ ਦਿਓ ਤਾਂ ਜੋ ਮੈਂ ਨਿਰਭੈ ਹੋ ਜਾਵਾਂ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Imprint Your holy Name upon my heart so that no cosmic terror can bind me.'
    },
    quiz: []
  },
  {
    id: 'kaal-36',
    number: 1336,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३६',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੬',
      en: 'Kaal Ko Ang - 36',
    },
    text: {
      hi: 'ऐसे सांच न मानई, तिलकी देखो जोय।\nजारि बारि कोयला करै, जमता देखा सोय।।',
      pb: devanagariToGurmukhi('ऐसे सांच न मानई, तिलकी देखो जोय। जारि बारि कोयला करै, जमता देखा सोय।।'),
      en: 'Aise saanch na maan-ee, tilkee dekho joy. Jaari baari koylaa karai, jamtaa dekhaa soy..'
    },
    transliteration: 'Aise saanch na maan-ee, tilkee dekho joy. Jaari baari koyla karai, jamta dekha soy.',
    bhavarth: {
      hi: 'यदि विश्वास न हो और ऐसे सत्य को न मानते हो, तो तिल की लकड़ी को जलाकर देखो। उसे जला-बालकर राख कर देने के बाद भी पुनः अंकुरित होते देखा गया है, अर्थात नि:संदेह संशय-अज्ञान में जीव को जल-बलकर भी बार-बार जन्म-मरण में आना पड़ता है।',
      pb: devanagariToGurmukhi('ਜੇ ਇਸ ਸੱਚ \'ਤੇ ਯਕੀਨ ਨਹੀਂ ਤਾਂ ਤਿਲ ਦੇ ਬੂਟੇ ਨੂੰ ਵੇਖੋ, ਜਿਸ ਨੂੰ ਸਾੜ ਕੇ ਕੋਲਾ ਕਰ ਦਿੱਤਾ ਜਾਵੇ ਤਾਂ ਵੀ ਉਹ ਮੁੜ ਉੱਗ ਪੈਂਦਾ ਹੈ। ਜੀਵ ਵੀ ਵਾਸਨਾ ਕਾਰਨ ਵਾਰ-ਵਾਰ ਜੰਮਦਾ ਤੇ ਮਰਦਾ ਹੈ।'),
      en: 'If you refuse to believe this truth, look at the sesame stalk: even burned down to charcoal, it sprouts forth anew from its seed. Likewise, consumed by desire and ignorance, the unawakened soul is reborn relentlessly.'
    },
    wordMeanings: {
      hi: [
        { word: 'सांच न मानई (Saanch na maan-ee)', meaning: 'सत्य को स्वीकार नहीं करता' },
        { word: 'तिलकी (Tilkee)', meaning: 'तिल का पौधा / डंठल' },
        { word: 'जमता देखा सोय (Jamtaa dekhaa soy)', meaning: 'उसे पुनः अंकुरित होते देखा गया है' }
      ],
      pb: [
        { word: 'ਸਾਂਚ ਨ ਮਾਨਈ (Saanch na maan-ee)', meaning: 'ਸੱਚ ਨਹੀਂ ਮੰਨਦਾ' },
        { word: 'ਤਿਲਕੀ (Tilkee)', meaning: 'ਤਿਲ ਦਾ ਬੂਟਾ' },
        { word: 'ਜਮਤਾ (Jamtaa)', meaning: 'ਉੱਗਦਾ' }
      ],
      en: [
        { word: 'Saanch na maan-ee', meaning: 'Does not accept the plain truth' },
        { word: 'Tilkee', meaning: 'Sesame stalk' },
        { word: 'Jamtaa dekhaa soy', meaning: 'Observed to germinate and sprout again' }
      ]
    },
    contemplation: {
      hi: 'जब तक वासना का बीज जीवित है, तब तक क्या बार-बार जन्म लेने की विवशता बनी रहेगी?',
      pb: devanagariToGurmukhi('ਕੀ ਵਾਸਨਾਵਾਂ ਦੇ ਬੀਜ ਕਾਰਨ ਮੈਂ ਵੀ ਮੁੜ-ਮੁੜ ਜਨਮ ਲੈਣ ਲਈ ਮਜਬੂਰ ਹਾਂ?'),
      en: 'As long as the subtle seed of worldly craving survives, will I be repeatedly reborn?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के ब्रह्म-ज्ञान की अग्नि में वासनाओं के बीज को दग्ध कर दें ताकि पुनर्जन्म का अंकुर न फूटे।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਦੀ ਅਗਨੀ ਵਿੱਚ ਵਾਸਨਾਵਾਂ ਦੇ ਬੀਜ ਨੂੰ ਸਾੜ ਦਿਓ।'),
      en: 'Roast the seeds of craving in the fire of spiritual realization so they can never sprout again.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे कर्म-बंधनों और वासनाओं के बीज को समूल नष्ट कर मुझे परम पद प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਵਾਸਨਾਵਾਂ ਦੇ ਬੀਜ ਨੂੰ ਸਾੜ ਕੇ ਮੈਨੂੰ ਮੁਕਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Incinerate the seed-impressions of karma within me so I merge into freedom.'
    },
    quiz: []
  },
  {
    id: 'kaal-37',
    number: 1337,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३७',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੭',
      en: 'Kaal Ko Ang - 37',
    },
    text: {
      hi: 'माली आवत देखि के, कलियां करें पुकार।\nफूली फूली चुनि लई, काल हमारी बार।।',
      pb: devanagariToGurmukhi('माली आवत देखि के, कलियां करें पुकार। फूली फूली चुनि लई, काल हमारी बार।।'),
      en: 'Maalee aavat dekhi ke, kaliyaan karain pukaar. Phoolee phoolee chuni la-ee, kaal hamaaree baar..'
    },
    transliteration: 'Maali aavat dekhi ke, kaliyan karain pukaar. Phooli phooli chuni la-ee, kaal hamaari baar.',
    bhavarth: {
      hi: 'काल-रूप माली को आता हुआ देखकर, कलियां परस्पर पुकारने लगीं। जो-जो फूल खिल गए थे, उन सबको माली ने चुन लिया और कल जब हम भी फूल बनकर खिल जाएंगी, तो यह हमें भी चुन लेगा।',
      pb: devanagariToGurmukhi('ਕਾਲ ਰੂਪੀ ਮਾਲੀ ਨੂੰ ਆਉਂਦਾ ਵੇਖ ਕੇ ਕਲੀਆਂ ਰੌਲਾ ਪਾਉਣ ਲੱਗੀਆਂ ਕਿ ਜੋ ਫੁੱਲ ਖਿੜ ਗਏ ਸਨ ਉਨ੍ਹਾਂ ਨੂੰ ਤਾਂ ਮਾਲੀ ਨੇ ਤੋੜ ਲਿਆ ਹੈ, ਭਲਕੇ ਸਾਡੀ ਵੀ ਵਾਰੀ ਆਵੇਗੀ।'),
      en: 'Seeing the gardener (Kal) approaching, the young buds cried aloud: "He has plucked all the blossomed flowers today; tomorrow, when we bloom, it will be our turn to be gathered."'
    },
    wordMeanings: {
      hi: [
        { word: 'माली (Maalee)', meaning: 'काल रूपी बागवान / यमराज' },
        { word: 'कलियां (Kaliyaan)', meaning: 'युवा / नई पीढ़ी के जीव' },
        { word: 'फूली फूली (Phoolee phoolee)', meaning: 'प्रौढ़ व वृद्ध लोग जो संसार में खिल चुके' },
        { word: 'काल हमारी बार (Kaal hamaaree baar)', meaning: 'कल हमारी बारी आएगी' }
      ],
      pb: [
        { word: 'ਮਾਲੀ (Maalee)', meaning: 'ਕਾਲ ਰੂਪੀ ਮਾਲੀ' },
        { word: 'ਕਲੀਆਂ (Kaliyaan)', meaning: 'ਨਵੀਂ ਉਮਰ ਦੇ ਜੀਵ' },
        { word: 'ਫੂਲੀ ਫੂਲੀ (Phoolee phoolee)', meaning: 'ਖਿੜੇ ਹੋਏ ਫੁੱਲ / ਬਜ਼ੁਰਗ' },
        { word: 'ਕਾਲ ਹਮਾਰੀ ਬਾਰ (Kaal hamaaree baar)', meaning: 'ਕੱਲ੍ਹ ਸਾਡੀ ਵਾਰੀ ਹੈ' }
      ],
      en: [
        { word: 'Maalee', meaning: 'The Gardener (Kal / Time personified)' },
        { word: 'Kaliyaan', meaning: 'Buds (the youth / oncoming generation)' },
        { word: 'Phoolee phoolee', meaning: 'Blossomed flowers (mature, elderly souls)' },
        { word: 'Kaal hamaaree baar', meaning: 'Tomorrow shall be our appointed turn' }
      ]
    },
    contemplation: {
      hi: 'जब पूर्वजों और बड़ों को काल चुन चुका है, तो क्या मैं जानता हूं कि कल मेरी भी बारी निश्चित है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ-ਵਡੇਰੇ ਚਲੇ ਗਏ, ਤਾਂ ਕੀ ਮੈਨੂੰ ਇਹ ਅਹਿਸਾਸ ਹੈ ਕਿ ਅਗਲੀ ਵਾਰੀ ਮੇਰੀ ਹੈ?'),
      en: 'Seeing elders harvested like flowers before my eyes, do I live with the clarity that my turn approaches?'
    },
    practicalApplication: {
      hi: 'समय रहते भक्ति और परोपकार में जीवन लगाएं; अपनी बारी आने से पूर्व आत्म-कल्याण का संचय करें।',
      pb: devanagariToGurmukhi('ਵੇਲੇ ਸਿਰ ਸਤਿਸੰਗ ਕਰੋ ਅਤੇ ਨੇਕ ਕਰਮ ਕਮਾਓ।'),
      en: 'Act while life endures; gather the eternal fragrance of remembrance before the harvest.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब तक काल रूपी माली मुझे न चुने, तब तक मेरी हर सांस को अपने चरणों की सेवा में लगा दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਹਰ ਘੜੀ ਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਲਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before my turn arrives, let every fleeting moment be offered at Your holy feet.'
    },
    quiz: []
  },
  {
    id: 'kaal-38',
    number: 1338,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३८',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੮',
      en: 'Kaal Ko Ang - 38',
    },
    text: {
      hi: 'संसै काल शरीर में, जारि केर सब धूर।\nकाल से बांचै दास जन, जिन पै द्याल हजूर।।',
      pb: devanagariToGurmukhi('संसै काल शरीर में, जारि केर सब धूर। काल से बांचै दास जन, जिन पै द्याल हजूर।।'),
      en: 'Sansai kaal shareer mein, jaari ker sab dhoor. Kaal se baanchai daas jan, jin pai dyaal hazoor..'
    },
    transliteration: 'Sansai kaal shareer mein, jaari ker sab dhoor. Kaal se baanchai daas jan, jin pai dyaal hazoor.',
    bhavarth: {
      hi: 'संशय (अज्ञान) रूपी काल शरीर में रहकर, जीवन को अशांत, पीड़ित तथा सब कुछ जलाकर धूल कर देता है। इस अज्ञानरूपी काल से केवल वही दास-भक्त-जन बचते हैं, जिनके ऊपर सद्गुरु की विशेष दया-दृष्टि होती है, अर्थात जिन्होंने सद्गुरु की सेवा-सत्संगति से ज्ञानोपदेश प्राप्त किया है, वही इस संशय (काल) से बच पाता है।',
      pb: devanagariToGurmukhi('ਸੰਦੇਹ ਤੇ ਅਗਿਆਨ ਰੂਪੀ ਕਾਲ ਸਰੀਰ ਵਿੱਚ ਰਹਿ ਕੇ ਸਭ ਕੁਝ ਸਾੜ ਕੇ ਸੁਆਹ ਕਰ ਦਿੰਦਾ ਹੈ। ਕਾਲ ਤੋਂ ਸਿਰਫ਼ ਉਹੀ ਸੇਵਕ ਬਚਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਉੱਤੇ ਸਤਿਗੁਰੂ ਦਿਆਲ ਹੁੰਦੇ ਹਨ।'),
      en: 'The Kal of doubt and skepticism dwells within the bodily vessel, burning all peace to ashes. Only those humble servants escape its scourge upon whom the living Satguru showers His direct compassionate grace.'
    },
    wordMeanings: {
      hi: [
        { word: 'संसै काल (Sansai kaal)', meaning: 'संशय और अज्ञान रूपी आंतरिक काल' },
        { word: 'जारि केर सब धूर (Jaari ker sab dhoor)', meaning: 'जलाकर सब खाक कर देना' },
        { word: 'बांचै (Baanchai)', meaning: 'बचते हैं / सुरक्षित रहते हैं' },
        { word: 'द्याल हजूर (Dyaal hazoor)', meaning: 'साक्षात सद्गुरु की दया दृष्टि' }
      ],
      pb: [
        { word: 'ਸੰਸੈ ਕਾਲ (Sansai kaal)', meaning: 'ਸ਼ੰਕੇ ਦਾ ਕਾਲ' },
        { word: 'ਧੂਰ (Dhoor)', meaning: 'ਸੁਆਹ / ਮਿੱਟੀ' },
        { word: 'ਬਾਂਚੈ (Baanchai)', meaning: 'ਬਚਦੇ ਹਨ' },
        { word: 'ਦਿਆਲ ਹਜ਼ੂਰ (Dyaal hazoor)', meaning: 'ਸਤਿਗੁਰੂ ਦੀ ਮਿਹਰ' }
      ],
      en: [
        { word: 'Sansai kaal', meaning: 'The inner Kal of doubt and delusion' },
        { word: 'Jaari ker sab dhoor', meaning: 'Burns everything to fine dust' },
        { word: 'Baanchai', meaning: 'Are preserved and saved' },
        { word: 'Dyaal hazoor', meaning: 'Grace of the compassionate Master' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर संशय और अविश्वास रूपी काल मेरे आध्यात्मिक आनंद को जला रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਸ਼ੰਕਾ ਰੂਪੀ ਕਾਲ ਮੇਰੇ ਆਤਮਿਕ ਸੁਖ ਨੂੰ ਸਾੜ ਰਿਹਾ ਹੈ?'),
      en: 'Is the internal Kal of cynicism and doubt reducing my spiritual peace to ashes?'
    },
    practicalApplication: {
      hi: 'सद्गुरु की शरण और सत्संग में जाकर मन के समस्त संशयों का निवारण करें।',
      pb: devanagariToGurmukhi('ਸਤਿਸੰਗ ਨਾਲ ਜੁੜ ਕੇ ਸ਼ੰਕੇ ਦੂਰ ਕਰੋ।'),
      en: 'Surrender all intellectual doubts at the Satguru’s feet; anchor in unwavering faith.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपनी दया-दृष्टि से मेरे हृदय के संशय रूपी काल को भस्म कर सत्य का प्रकाश भर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪਣੀ ਰਹਿਮਤ ਨਾਲ ਮੇਰੇ ਮਨ ਦਾ ਸੰਸਾ ਦੂਰ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Let the sunlight of Your grace vanquish every shadow of doubt within me.'
    },
    quiz: []
  },
  {
    id: 'kaal-39',
    number: 1339,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ३९',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੩੯',
      en: 'Kaal Ko Ang - 39',
    },
    text: {
      hi: 'कबीर जीवन कुछ नहीं, खिन खारा खिन मीठ।\nकाल्हि अलहजा मारिया, आज मसाना दीठ।।',
      pb: devanagariToGurmukhi('कबीर जीवन कुछ नहीं, खिन खारा खिन मीठ। काल्हि अलहजा मारिया, आज मसाना दीठ।।'),
      en: 'Kabeer jeevan kuchh naheen, khin khaaraa khin meeth. Kaalhi alhajaa maariyaa, aaj masaanaa deeth..'
    },
    transliteration: 'Kabeer jeevan kuchh naheen, khin khaara khin meeth. Kaalhi alhaja maariya, aaj masaana deeth.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह जीवन भी क्या है, इसमें कुछ भी तो विशेष नहीं है। यहां सब कुछ खट्टा और कुछ मीठा-सा है (दुःख थोड़ा खट्टा और क्षणिक सुख मीठा-सा)। जिन्होंने कल रण-क्षेत्र में बड़े-बड़े वीर शत्रुओं को मार गिराया था, वे भी आज नहीं रहे। उन्हें आज श्मशान में जाकर पड़ा हुआ देख लो, अर्थात यहां सब कुछ सार-हीन है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਜੀਵਨ ਕੁਝ ਨਹੀਂ, ਪਲ ਵਿੱਚ ਖੱਟਾ ਤੇ ਪਲ ਵਿੱਚ ਮਿੱਠਾ ਹੈ। ਜਿਸ ਨੇ ਕੱਲ੍ਹ ਵੱਡੇ ਸੂਰਮਿਆਂ ਨੂੰ ਮਾਰਿਆ ਸੀ, ਅੱਜ ਉਹ ਆਪ ਮਸਾਣਾਂ ਵਿੱਚ ਸੜ ਰਿਹਾ ਹੈ।'),
      en: 'Kabir reflects: mortal life is trifling—one moment bitter sorrow, the next momentary sweetness. He who yesterday struck down fierce warriors in battle is seen today stretched lifeless in the cremation grounds. All worldly victory is hollow.'
    },
    wordMeanings: {
      hi: [
        { word: 'खिन खारा खिन मीठ (Khin khaara khin meeth)', meaning: 'एक पल कड़वा दुःख और एक पल मीठा सुख' },
        { word: 'अलहजा (Alhajaa)', meaning: 'अजेय शूरवीर / रणधीर योद्धा' },
        { word: 'मसाना दीठ (Masaanaa deeth)', meaning: 'श्मशान भूमि में पड़ा दिखाई दिया' }
      ],
      pb: [
        { word: 'ਖਿਨ ਖਾਰਾ ਖਿਨ ਮੀਠ (Khin khaara)', meaning: 'ਪਲ ਵਿੱਚ ਦੁੱਖ, ਪਲ ਵਿੱਚ ਸੁੱਖ' },
        { word: 'ਅਲਹਜਾ (Alhajaa)', meaning: 'ਵੱਡੇ ਸੂਰਬੀਰ' },
        { word: 'ਮਸਾਨਾ ਦੀਠ (Masaanaa deeth)', meaning: 'ਸ਼ਮਸ਼ਾਨ ਵਿੱਚ ਪਿਆ ਦਿੱਸਿਆ' }
      ],
      en: [
        { word: 'Khin khaara khin meeth', meaning: 'Fleeting swings between bitter pain and brief pleasure' },
        { word: 'Alhajaa', meaning: 'Mighty champion / undefeated warrior' },
        { word: 'Masaanaa deeth', meaning: 'Spotted lying cold in the cremation ground' }
      ]
    },
    contemplation: {
      hi: 'जब कल के अजेय योद्धा आज श्मशान की राख बन चुके हैं, तो मेरी छोटी-सी सफलताओं का क्या मूल्य है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ-ਵੱਡੇ ਸੂਰਮੇ ਮਿੱਟੀ ਹੋ ਗਏ, ਤਾਂ ਮੇਰੀਆਂ ਛੋਟੀਆਂ ਜਿੱਤਾਂ ਦਾ ਕੀ ਮੁੱਲ ਹੈ?'),
      en: 'When conquerors of empires turn to ashes overnight, what enduring worth has earthly pride?'
    },
    practicalApplication: {
      hi: 'जीत-हार और सुख-दुःख के द्वंद्व में समता धारण करें; स्थिर परमात्मा में ही संतोष खोजें।',
      pb: devanagariToGurmukhi('ਸੁੱਖ ਤੇ ਦੁੱਖ ਵਿੱਚ ਸਮਾਨ ਰਹੋ, ਨਾਮ ਵਿੱਚ ਜੁੜੋ।'),
      en: 'Cultivate equanimity amidst dualities of triumph and defeat; abide in constant awareness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस क्षणभंगुर संसार के झूठे विजय-उल्लास से ऊपर उठाकर अपने शाश्वत आनंद में लीन कर लें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚਾ ਆਤਮਿਕ ਸੁਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Lift me beyond illusory worldly victories into the eternal serenity of Your presence.'
    },
    quiz: []
  },
  {
    id: 'kaal-40',
    number: 1340,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४०',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੦',
      en: 'Kaal Ko Ang - 40',
    },
    text: {
      hi: 'कबीर पगरा दूर है, आय पहुंची सांझ।\nजन जन को मत राखतां, वेश्या रहि गई बांझ ।।',
      pb: devanagariToGurmukhi('कबीर पगरा दूर है, आय पहुंची सांझ। जन जन को मत राखतां, वेश्या रहि गई बांझ ।।'),
      en: 'Kabeer pagraa door hai, aay pahuchee saanjh. Jan jan ko mat raakhtaan, veshyaa rahi gayee baanjh..'
    },
    transliteration: 'Kabeer pagra door hai, aay pahuchee saanjh. Jan jan ko mat raakhtan, veshya rahi gayee baanjh.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि अभी तो जीवन-कल्याण की सफलता का लक्ष्य बहुत दूर है और शाम (वृद्धावस्था) आ पहुंची है। जिस प्रकार वेश्या के अनेक प्रेमी होने पर भी वह बांझ (पुत्रहीन) रह जाती है, उसी प्रकार जन-जन की मत-धारणाओं के मोह में पड़कर कल्याण साधन से रहित रह गया।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮੰਜ਼ਿਲ ਅਜੇ ਦੂਰ ਹੈ ਅਤੇ ਸ਼ਾਮ (ਬੁਢਾਪਾ) ਆ ਪਹੁੰਚੀ ਹੈ। ਜਿਵੇਂ ਹਰ ਇੱਕ ਦਾ ਮਨ ਰੱਖਣ ਵਾਲੀ ਵੇਸ਼ਵਾ ਔਲਾਦਹੀਣ ਰਹਿ ਜਾਂਦੀ ਹੈ, ਤਿਵੇਂ ਹਰ ਸੰਸਾਰੀ ਦਾ ਮੋਹ ਰੱਖਦਿਆਂ ਜੀਵ ਭਗਤੀ ਤੋਂ ਖਾਲੀ ਰਹਿ ਗਿਆ।'),
      en: 'Kabir warns: the destination of liberation is still distant, and the twilight of old age has fallen. Just as a courtesan pleasing myriad suitors ends up barren, the person pleasing everyone’s opinion ends up destitute of spiritual realization.'
    },
    wordMeanings: {
      hi: [
        { word: 'पगरा (Pagraa)', meaning: 'मंजिल / मुक्ति का मार्ग' },
        { word: 'आय पहुंची सांझ (Aay pahuchee saanjh)', meaning: 'वृद्धावस्था व अंतकाल का आगमन' },
        { word: 'जन जन को मत राखतां (Jan jan ko mat raakhtaan)', meaning: 'संसार के लोगों को खुश करने के फेर में पड़ना' },
        { word: 'बांझ रहि गई (Baanjh rahi gayee)', meaning: 'आध्यात्मिक फल या सिद्धि से शून्य रह जाना' }
      ],
      pb: [
        { word: 'ਪਗਰਾ (Pagraa)', meaning: 'ਮੰਜ਼ਿਲ' },
        { word: 'ਸਾਂਝ (Saanjh)', meaning: 'ਸ਼ਾਮ / ਬੁਢਾਪਾ' },
        { word: 'ਮਤ ਰਾਖਤਾਂ (Mat raakhtaan)', meaning: 'ਮਨ ਰੱਖਦਿਆਂ' },
        { word: 'ਬਾਂਝ (Baanjh)', meaning: 'ਖਾਲੀ-ਹੱਥ ਰਹਿ ਗਈ' }
      ],
      en: [
        { word: 'Pagraa', meaning: 'The spiritual path / final destination' },
        { word: 'Aay pahuchee saanjh', meaning: 'Twilight has descended (infirm old age)' },
        { word: 'Jan jan ko mat raakhtaan', meaning: 'Catering to the opinions of countless worldly minds' },
        { word: 'Baanjh rahi gayee', meaning: 'Remained barren without the fruit of realization' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संसार के लोगों को खुश करने में इतना उलझ गया हूं कि जीवन की सांझ आने पर भी मेरा आत्म-कल्याण अधूरा है?',
      pb: devanagariToGurmukhi('ਕੀ ਲੋਕਾਂ ਨੂੰ ਖੁਸ਼ ਕਰਨ ਦੇ ਚੱਕਰ ਵਿੱਚ ਮੇਰੀ ਆਤਮਿਕ ਮੰਜ਼ਿਲ ਪਿੱਛੇ ਰਹਿ ਗਈ ਹੈ?'),
      en: 'Have I squandered my life catering to social expectations, arriving empty-handed at life’s twilight?'
    },
    practicalApplication: {
      hi: 'लोक-लाज और जन-जन के मत-आग्रहों को छोड़कर एकनिष्ठ होकर सद्गुरु के सत्य-ज्ञान की साधना करें।',
      pb: devanagariToGurmukhi('ਲੋਕ-ਦਿਖਾਵਾ ਛੱਡ ਕੇ ਇੱਕ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਵਿੱਚ ਜੁੜੋ।'),
      en: 'Renounce empty social vanity; dedicate undivided focus to authentic self-realization.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जीवन की शाम ढलने से पहले मुझे अपने पावन धाम तक पहुंचाने की कृपा कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਮੰਜ਼ਿਲ ਨੂੰ ਆਪਣੇ ਗਿਆਨ ਨਾਲ ਸੁਗਮ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before night closes in, steer my wandering steps safely to Your eternal haven.'
    },
    quiz: []
  },
  {
    id: 'kaal-41',
    number: 1341,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४१',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੧',
      en: 'Kaal Ko Ang - 41',
    },
    text: {
      hi: 'काल हमारे संग है, कस जीवन की आस।\nदस दिन नाम संभार ले, जब लग पिंजर सांस।।',
      pb: devanagariToGurmukhi('काल हमारे संग है, कस जीवन की आस। दस दिन नाम संभार ले, जब लग पिंजर सांस।।'),
      en: 'Kaal hamaare sang hai, kas jeevan kee aas. Das din naam sambhaar le, jab lag pinjar saans..'
    },
    transliteration: 'Kaal hamare sang hai, kas jeevan kee aas. Das din naam sambhaar le, jab lag pinjar saans.',
    bhavarth: {
      hi: 'जब काल हमारे साथ लगा हुआ है, तो फिर कैसे जीवन की आशा करें। यह तो मिथ्या-मोह है। जब तक इस शरीर रूपी पिंजरे में श्वास है, तब तक ही अवसर है। जब तक काल तेरे शरीर से श्वास को खींच ले, उससे पूर्व ही तू सद्गुरु के नाम-ज्ञान का सुमिरन कर ले। सद्गुरु की कृपा से तेरे जीवन का कल्याण होगा।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਕਾਲ ਸਾਡੇ ਨਾਲ ਲੱਗਾ ਹੋਇਆ ਹੈ, ਤਾਂ ਜੀਵਨ ਦੀ ਝੂਠੀ ਆਸ ਕਿਉਂ? ਜਦੋਂ ਤੱਕ ਇਸ ਦੇਹ ਰੂਪੀ ਪਿੰਜਰੇ ਵਿੱਚ ਸਾਹ ਹਨ, ਕੁਝ ਦਿਨ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਸੰਭਾਲ ਲੈ।'),
      en: 'When Kal is our constant companion, why cling to false hopes of bodily longevity? While breath still lingers in this mortal cage, gather the jewel of the True Name before time expires.'
    },
    wordMeanings: {
      hi: [
        { word: 'काल संग है (Kaal sang hai)', meaning: 'मृत्यु हर क्षण हमारे साथ लगी हुई है' },
        { word: 'कस जीवन की आस (Kas jeevan kee aas)', meaning: 'इस नश्वर जीवन की क्या झूठी आशा' },
        { word: 'दस दिन (Das din)', meaning: 'जीवन के कुछ बचे हुए गिने-चुने दिन' },
        { word: 'पिंजर सांस (Pinjar saans)', meaning: 'शरीर रूपी पिंजरे में श्वास का आना-जाना' }
      ],
      pb: [
        { word: 'ਕਾਲ ਸੰਗ ਹੈ (Kaal sang hai)', meaning: 'ਕਾਲ ਨਾਲ ਹੈ' },
        { word: 'ਦਸ ਦਿਨ (Das din)', meaning: 'ਥੋੜ੍ਹੇ ਦਿਨ / ਬਾਕੀ ਉਮਰ' },
        { word: 'ਪਿੰਜਰ ਸਾਂਸ (Pinjar saans)', meaning: 'ਦੇਹ ਵਿੱਚ ਸਾਹ' }
      ],
      en: [
        { word: 'Kaal sang hai', meaning: 'Kal marches alongside us at every step' },
        { word: 'Kas jeevan kee aas', meaning: 'What ground is there for illusory hopes of longevity?' },
        { word: 'Das din', meaning: 'The few fleeting days remaining' },
        { word: 'Pinjar saans', meaning: 'Breath circulating within the ribcage' }
      ]
    },
    contemplation: {
      hi: 'जब तक शरीर के पिंजरे में श्वास चल रही है, क्या मैं हर सांस को सतगुरु के नाम-सिमरन में लगा रहा हूं?',
      pb: devanagariToGurmukhi('ਜਦ ਤੱਕ ਦੇਹ ਵਿੱਚ ਸਾਹ ਚੱਲਦੇ ਹਨ, ਕੀ ਮੈਂ ਹਰ ਸਾਹ ਨੂੰ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'While breath still stirs this mortal cage, am I dedicating every respiration to the Divine?'
    },
    practicalApplication: {
      hi: 'प्रत्येक श्वास को अनमोल मानकर व्यर्थ की बहसबाजी व चिंताओं से बचें; नाम-स्मरण में मन लगाएं।',
      pb: devanagariToGurmukhi('ਸਾਹਾਂ ਨੂੰ ਅਣਮੋਲ ਸਮਝ ਕੇ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Value every single breath as priceless; invest conscious awareness in the eternal Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब तक इस पिंजरे में मेरी अंतिम सांस रहे, मेरी सुरति केवल आपके नाम में रमी रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਰ ਸਾਹ ਵਿੱਚ ਆਪਣੀ ਯਾਦ ਵਸਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my awareness be soaked in Your holy Word until the final breath leaves this frame.'
    },
    quiz: []
  },
  {
    id: 'kaal-42',
    number: 1342,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४२',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੨',
      en: 'Kaal Ko Ang - 42',
    },
    text: {
      hi: 'टालै टूलै दिन गयो, ब्याज बढ़न्ता जाय।\nना हरि भजा न खत कटा, काल पहुंचा आय।।',
      pb: devanagariToGurmukhi('टालै टूलै दिन गयो, ब्याज बढ़न्ता जाय। ना हरि भजा न खत कटा, काल पहुंचा आय।।'),
      en: 'Taalai toolai din gayo, byaaj badhantaa jaay. Naa hari bhajaa na khat kataa, kaal pahunchaa aay..'
    },
    transliteration: 'Taalai toolai din gayo, byaaj badhanta jaay. Na hari bhaja na khat kata, kaal pahuncha aay.',
    bhavarth: {
      hi: 'इस मनुष्य जीवन का मूल प्रयोजन आवागमन से मुक्त होना है, परन्तु यूं ही टाल-मटोल (बहानेबाजी) में सब दिन व्यतीत हो गए। कुछ भी तो नहीं हो सका। और उल्टे सांसारिक कर्मों से दोष बढ़ता गया, न तो सांसारिक कर्मों से निबट पाए, न ही परमात्मा की साधना कर पाए और काल सिर पर आ पहुंचा।',
      pb: devanagariToGurmukhi('ਟਾਲ-ਮਟੋਲ ਕਰਦਿਆਂ ਦਿਨ ਲੰਘ ਗਏ ਅਤੇ ਪਾਪਾਂ ਤੇ ਕਰਮਾਂ ਦਾ ਵਿਆਜ ਵਧਦਾ ਗਿਆ। ਨਾ ਪ੍ਰਭੂ ਦੀ ਭਗਤੀ ਕੀਤੀ ਅਤੇ ਨਾ ਹੀ ਲੇਖੇ ਦਾ ਖਾਤਾ ਕੱਟਿਆ ਗਿਆ, ਅਤੇ ਕਾਲ ਸਿਰ \'ਤੇ ਆ ਪਹੁੰਚਿਆ।'),
      en: 'In endless procrastinations and excuses, the days slipped by while the karmic interest compounded. Neither was the Divine adored nor was the karmic ledger settled, and Kal arrived at the doorstep.'
    },
    wordMeanings: {
      hi: [
        { word: 'टालै टूलै (Taalai toolai)', meaning: 'टाल-मटोल करना / आलस्य में कल पर टालना' },
        { word: 'ब्याज बढ़न्ता जाय (Byaaj badhantaa jaay)', meaning: 'कर्मों और विकारों का ऋण निरंतर बढ़ना' },
        { word: 'खत कटा (Khat kataa)', meaning: 'कर्मों का खाता चुकता होना / मुक्ति मिलना' }
      ],
      pb: [
        { word: 'ਟਾਲੈ ਟੂਲੈ (Taalai toolai)', meaning: 'ਟਾਲਮਟੋਲ ਕਰਦਿਆਂ' },
        { word: 'ਵਿਆਜ ਵਧੰਤਾ (Byaaj badhanta)', meaning: 'ਕਰਮਾਂ ਦਾ ਕਰਜ਼ ਵਧਣਾ' },
        { word: 'ਖ਼ਤ ਕਟਾ (Khat kata)', meaning: 'ਹਿਸਾਬ ਚੁਕਤਾ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Taalai toolai', meaning: 'Procrastinating and making endless excuses' },
        { word: 'Byaaj badhantaa jaay', meaning: 'The interest on worldly debts keeps compounding' },
        { word: 'Khat kataa', meaning: 'The ledger of karmic accounts canceled and settled' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भक्ति और आत्म-सुधार को "कल करेंगे" कहकर टाल-मटोल में अपना अनमोल जीवन गंवा रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਭਜਨ-ਬੰਦਗੀ ਨੂੰ ਕੱਲ੍ਹ \'ਤੇ ਟਾਲ ਕੇ ਕਰਮਾਂ ਦਾ ਬੋਝ ਵਧਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I postponing spiritual practice until "tomorrow," letting karmic indebtedness swell?'
    },
    practicalApplication: {
      hi: 'आज और अभी से शुभ कर्म और ध्यान का अभ्यास शुरू करें; टालमटोल की घातक आदत को त्यागें।',
      pb: devanagariToGurmukhi('ਅੱਜ ਅਤੇ ਹੁਣੇ ਤੋਂ ਨਾਮ ਸਿਮਰਨ ਸ਼ੁਰੂ ਕਰੋ।'),
      en: 'Shatter the deadly illusion of procrastination; begin your spiritual practice this very instant.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे आलस्य और टाल-मटोल के स्वभाव को दूर कर मुझे तत्परता से नाम-सुमिरन करने का संकल्प दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਆਲਸ ਦੂਰ ਕਰਕੇ ਮੈਨੂੰ ਨਾਮ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Uproot the habit of delay within me; ignite vigilant devotion in my heart.'
    },
    quiz: []
  },
  {
    id: 'kaal-43',
    number: 1343,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४३',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੩',
      en: 'Kaal Ko Ang - 43',
    },
    text: {
      hi: 'फागुन आवत देखि के, मन झुरे बनराय।\nजिन डाली हम केलि किय, सोही बयारे जाय।।',
      pb: devanagariToGurmukhi('फागुन आवत देखि के, मन झुरे बनराय। जिन डाली हम केलि किय, सोही बयारे जाय।।'),
      en: 'Faagun aavat dekhi ke, man jhure banraay. Jin daalee hum keli kiya, sohee bayaare jaay..'
    },
    transliteration: 'Faagun aavat dekhi ke, man jhure banraay. Jin daali hum keli kiya, sohi bayaare jaay.',
    bhavarth: {
      hi: 'कालानुसार सुख व दुःख के अंतर्गत फागुन मास को आते हुए देखकर जंगल का महावन मन-ही-मन पश्चाताप व विलाप करने लगा - “जिन शाखाओं पर हम आनंद-क्रीड़ा करते थे, पतझर का मौसम आने से वे ही झड़ते-बिखरते जा रहे हैं। जीवन का अंतकाल पूर्व के सुखों को स्मरण कर दुःखी होता ही है।',
      pb: devanagariToGurmukhi('ਫੱਗਣ ਦੇ ਮਹੀਨੇ (ਪੱਤਝੜ) ਨੂੰ ਆਉਂਦਾ ਵੇਖ ਕੇ ਜੰਗਲ ਦਾ ਰਾਜਾ (ਬਨਰਾਇ) ਦੁਖੀ ਹੁੰਦਾ ਹੈ ਕਿ ਜਿਨ੍ਹਾਂ ਟਾਹਣੀਆਂ \'ਤੇ ਅਸੀਂ ਕਲੋਲਾਂ ਕਰਦੇ ਸਾਂ, ਉਹ ਹਵਾ ਨਾਲ ਸੁੱਕ ਕੇ ਝੜ ਰਹੀਆਂ ਹਨ।'),
      en: 'Seeing the month of Phagun (autumn / leaf-fall) approach, the forest monarch grieves in heart: "Those very boughs on which we played in joy are now being stripped away by the gusts." Remembering bygone pleasures brings grief at life’s close.'
    },
    wordMeanings: {
      hi: [
        { word: 'फागुन आवत (Faagun aavat)', meaning: 'पतझर का आगमन / बुढ़ापा' },
        { word: 'बनराय (Banraay)', meaning: 'जंगल का अधिपति / जीव' },
        { word: 'केलि किय (Keli kiya)', meaning: 'क्रीड़ा व विलास किया' },
        { word: 'बयारे जाय (Bayaare jaay)', meaning: 'काल रूपी तेज हवा से उड़ जाना' }
      ],
      pb: [
        { word: 'ਫਾਗੁਨ (Faagun)', meaning: 'ਪੱਤਝੜ ਦਾ ਮਹੀਨਾ' },
        { word: 'ਬਨਰਾਯ (Banraay)', meaning: 'ਜੰਗਲ ਦਾ ਰਾਜਾ' },
        { word: 'ਕੇਲਿ (Keli)', meaning: 'ਖੇਡਾਂ ਤੇ ਮੌਜਾਂ' },
        { word: 'ਬਯਾਰੇ ਜਾਯ (Bayaare jaay)', meaning: 'ਹਵਾ ਨਾਲ ਝੜ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Faagun aavat', meaning: 'The onset of Phagun (season of shedding leaves / old age)' },
        { word: 'Banraay', meaning: 'The lord of the forest / the embodied soul' },
        { word: 'Keli kiya', meaning: 'Played and indulged in merriment' },
        { word: 'Bayaare jaay', meaning: 'Scattered away by the gusts of time' }
      ]
    },
    contemplation: {
      hi: 'जब सांसारिक सुखों की डाली पतझर में बिखर जानी है, तो क्या मैं नित्य परमात्मा का आश्रय ले रहा हूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਸੰਸਾਰ ਦੇ ਸਾਰੇ ਸੁਖ ਪੱਤਝੜ ਵਾਂਗ ਝੜ ਜਾਣੇ ਹਨ, ਤਾਂ ਕੀ ਮੈਂ ਸਦਾ ਰਹਿਣ ਵਾਲੇ ਪ੍ਰਭੂ ਦਾ ਆਸਰਾ ਲਿਆ ਹੈ?'),
      en: 'When the branches of worldly indulgence will be stripped bare by winter gusts, where is my enduring shelter?'
    },
    practicalApplication: {
      hi: 'क्षणिक सांसारिक सुखों में आसक्त न हों; पतझर आने से पूर्व अक्षय आत्मानंद का अनुभव करें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰਕ ਮੋਹ ਨੂੰ ਛੱਡ ਕੇ ਅੰਮ੍ਰਿਤ ਨਾਮ ਦਾ ਆਨੰਦ ਲਵੋ।'),
      en: 'Do not base peace on ephemeral worldly springs; root in the perennial spring of consciousness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! सांसारिक पतझर के थपेड़ों से मुझे बचाकर अपने प्रेम के सदाबहार उपवन में स्थान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸਦਾਬਹਾਰ ਚਰਨਾਂ ਦੀ ਛਾਂ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guard my soul from the chill of worldly autumn and keep me ever green in Your love.'
    },
    quiz: []
  },
  {
    id: 'kaal-44',
    number: 1344,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४४',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੪',
      en: 'Kaal Ko Ang - 44',
    },
    text: {
      hi: 'हाथों परबत फाड़ते, समुन्दर घूट भराय।\nते मुनिवर धरती गले, का कोई गरब कराय।।',
      pb: devanagariToGurmukhi('हाथों परबत फाड़ते, समुन्दर घूट भराय। ते मुनिवर धरती गले, का कोई गरब कराय।।'),
      en: 'Haathon parbat faadte, samundar ghoot bharaay. Te munivar dharatee gale, kaa koee garab karaay..'
    },
    transliteration: 'Haathon parbat faadte, samundar ghoot bharaay. Te munivar dharati gale, ka koi garab karaay.',
    bhavarth: {
      hi: 'जो इतने अतुलनीय व बलशाली थे कि अपने हाथों से पर्वत फाड़ डालते थे (रावण) और विशाल समुद्र को एक ही घूंट में पी जाते थे (मुनि अगस्त्य), ऐसे श्रेष्ठ लोग भी इस धरती में गल-खप गए। ऐसे में फिर यहां किसी का अहंकार क्या करेगा? अर्थात किसी भी उपाय से काल से बचना असंभव है।',
      pb: devanagariToGurmukhi('ਜੋ ਹੱਥਾਂ ਨਾਲ ਪਹਾੜ ਪਾੜ ਸੁੱਟਦੇ ਸਨ ਅਤੇ ਸਮੁੰਦਰ ਨੂੰ ਇੱਕ ਘੁੱਟ ਵਿੱਚ ਪੀ ਜਾਂਦੇ ਸਨ, ਉਹ ਬਲਵਾਨ ਤੇ ਮੁਨੀ ਵੀ ਧਰਤੀ ਵਿੱਚ ਗਲ਼ ਕੇ ਸਮਾ ਗਏ। ਫਿਰ ਕੋਈ ਕਿਸ ਗੱਲ ਦਾ ਹੰਕਾਰ ਕਰੇ?'),
      en: 'Those mighty beings who could cleave mountains with bare hands or drink the vast ocean in a single sip have all crumbled into the earth. How can anyone then boast of earthly strength? No measure of physical might can resist Kal.'
    },
    wordMeanings: {
      hi: [
        { word: 'हाथों परबत फाड़ते (Haathon parbat)', meaning: 'हाथ से पहाड़ को विदीर्ण करने वाले महाबली' },
        { word: 'समुन्दर घूट भराय (Samundar ghoot)', meaning: 'समुद्र को पी जाने वाले ऋषि अगस्त्य' },
        { word: 'धरती गले (Dharatee gale)', meaning: 'मिट्टी में मिलकर खाक हो गए' },
        { word: 'गरब कराय (Garab karaay)', meaning: 'अहंकार या घमंड करना' }
      ],
      pb: [
        { word: 'ਪਰਬਤ ਫਾੜਤੇ (Parbat faadte)', meaning: 'ਪਹਾੜ ਪਾੜਨ ਵਾਲੇ' },
        { word: 'ਘੂਟ ਭਰਾਯ (Ghoot bharaay)', meaning: 'ਇੱਕ ਘੁੱਟ ਵਿੱਚ ਪੀਣਾ' },
        { word: 'ਗਲੇ (Gale)', meaning: 'ਮਿੱਟੀ ਵਿੱਚ ਸਮਾ ਗਏ' },
        { word: 'ਗਰਬ (Garab)', meaning: 'ਹੰਕਾਰ' }
      ],
      en: [
        { word: 'Haathon parbat faadte', meaning: 'Mighty colossi who could tear mountains asunder' },
        { word: 'Samundar ghoot bharaay', meaning: 'Those who drank the oceans in a single draught' },
        { word: 'Dharatee gale', meaning: 'Decayed and dissolved into the dust of earth' },
        { word: 'Garab karaay', meaning: 'Harbor vain pride or arrogance' }
      ]
    },
    contemplation: {
      hi: 'जब पर्वत फाड़ने और सागर पीने वाले महाबली काल के गाल में समा गए, तो मेरी दुर्बल देह का क्या घमंड?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਵੱਡੇ-ਵੱਡੇ ਬਲਸ਼ਾਲੀ ਧਰਤੀ ਵਿੱਚ ਸਮਾ ਗਏ, ਤਾਂ ਮੇਰੀ ਨਿਮਾਣੀ ਦੇਹ ਦਾ ਕੀ ਹੰਕਾਰ?'),
      en: 'When titans who split mountains melted into dust, what ground remains for my petty conceit?'
    },
    practicalApplication: {
      hi: 'बल, बुद्धि, और धन के अभिमान को त्यागकर परमेश्वर के सम्मुख दीन-भाव से समर्पण करें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਰਹੋ।'),
      en: 'Relinquish pride in physical prowess or intellect; walk with deep humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे समस्त सूक्ष्म और स्थूल अहंकार को मिटाकर मुझे अपने चरणों की धूल बना लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਹੰਕਾਰ ਮਿਟਾ ਕੇ ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਧੂੜ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Obliterate all ego within me and shelter me as the dust of Your feet.'
    },
    quiz: []
  },
  {
    id: 'kaal-45',
    number: 1345,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४५',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੫',
      en: 'Kaal Ko Ang - 45',
    },
    text: {
      hi: 'कबीर सब सुख राम है, औरहि दुख की रासि।\nसुर नर मुनि अरु असुर सुर, पड़े काल की फांसि ।।',
      pb: devanagariToGurmukhi('कबीर सब सुख राम है, औरहि दुख की रासि। सुर नर मुनि अरु असुर सुर, पड़े काल की फांसि ।।'),
      en: 'Kabeer sab sukh raam hai, aurahi dukh kee raasi. Sur nar muni aru asur sur, pade kaal kee faansi..'
    },
    transliteration: 'Kabeer sab sukh ram hai, aurahi dukh kee raasi. Sur nar muni aru asur sur, pade kaal kee faansi.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह सारा संसार अनेक दुःखों का भंडार है। यहां पर परम सुख-शांति केवल अविनाशी परमात्मा के सुमिरन-भजन में ही है, अन्यथा कहीं नहीं। सभी देवता, मनुष्य, मुनि और राक्षस आदि जो भी हुए हैं, वे अपना कर्मफल भोगते हुए काल के फंदे में ही फंसे हैं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸੱਚਾ ਸੁਖ ਸਿਰਫ਼ ਪ੍ਰਭੂ ਦੇ ਨਾਮ ਵਿੱਚ ਹੈ, ਬਾਕੀ ਸਭ ਦੁੱਖਾਂ ਦੀ ਰਾਸ ਹੈ। ਦੇਵਤੇ, ਮਨੁੱਖ, ਮੁਨੀ ਤੇ ਦੈਂਤ ਸਭ ਕਾਲ ਦੀ ਫਾਹੀ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹਨ।'),
      en: 'Kabir declares: all true bliss resides in the Divine Name alone; everything else is a heap of sorrow. Demigods, mortals, sages, and demons alike remain entangled in the inescapable noose of Kal.'
    },
    wordMeanings: {
      hi: [
        { word: 'दुख की रासि (Dukh kee raasi)', meaning: 'दुःखों का विशाल ढेर या खजाना' },
        { word: 'असुर सुर (Asur sur)', meaning: 'राक्षस और देवता' },
        { word: 'काल की फांसि (Kaal kee faansi)', meaning: 'मृत्यु और काल का फंदा' }
      ],
      pb: [
        { word: 'ਦੁੱਖ ਕੀ ਰਾਸਿ (Dukh kee raasi)', meaning: 'ਦੁੱਖਾਂ ਦਾ ਢੇਰ' },
        { word: 'ਸੁਰ ਅਸੁਰ (Sur asur)', meaning: 'ਦੇਵਤੇ ਤੇ ਰਾਖਸ਼' },
        { word: 'ਕਾਲ ਕੀ ਫਾਂਸਿ (Kaal kee faansi)', meaning: 'ਕਾਲ ਦੀ ਫਾਹੀ' }
      ],
      en: [
        { word: 'Dukh kee raasi', meaning: 'A mountain heap of sorrow and affliction' },
        { word: 'Asur sur', meaning: 'Demons and celestial beings' },
        { word: 'Kaal kee faansi', meaning: 'The relentless noose of Kal' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक वस्तुओं में सुख ढूंढ रहा हूं, जबकि वे केवल दुःखों की राशि और काल की फांस हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਵਸਤਾਂ ਵਿੱਚ ਸੁਖ ਲੱਭ ਰਿਹਾ ਹਾਂ ਜੋ ਕਿ ਦੁੱਖਾਂ ਦਾ ਕਾਰਨ ਹਨ?'),
      en: 'Am I seeking lasting bliss in mortal objects that are only aggregates of grief and traps of time?'
    },
    practicalApplication: {
      hi: 'केवल परमात्मा के नाम में ही परम विश्राम खोजें; संसार के प्रपंचों को दुःख का कारण समझकर अनासक्त रहें।',
      pb: devanagariToGurmukhi('ਕੇਵਲ ਸੱਚੇ ਨਾਮ ਵਿੱਚ ਸੁਖ ਲੱਭੋ ਅਤੇ ਸੰਸਾਰ ਤੋਂ ਨਿਰਲੇਪ ਰਹੋ।'),
      en: 'Seek fulfillment solely in the Divine Word; remain unattached to deceptive worldly delights.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! काल की इस महा-फांसी से मुझे केवल आपका अविनाशी नाम ही छुड़ा सकता है, अपनी शरण दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੀ ਫਾਹੀ ਤੋਂ ਕੱਟ ਕੇ ਆਪਣੇ ਨਾਮ ਦਾ ਸੁਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Sever the deadly noose of Kal with the sword of Your liberating Word.'
    },
    quiz: []
  },
  {
    id: 'kaal-46',
    number: 1346,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४६',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੬',
      en: 'Kaal Ko Ang - 46',
    },
    text: {
      hi: 'काची काया मन अथिर, थिर थिर करम करन्त।\nज्यौं ज्यौं नर निधड़क फिरै, त्यौं त्यौं काल हसन्त।।',
      pb: devanagariToGurmukhi('काची काया मन अथिर, थिर थिर करम करन्त। ज्यौं ज्यौं नर निधड़क फिरै, त्यौं त्यौं काल हसन्त।।'),
      en: 'Kaachee kaayaa man athir, thir thir karam karant. Jyaun jyaun nar nidhadak phirai, tyaun tyaun kaal hasant..'
    },
    transliteration: 'Kaachi kaaya man athir, thir thir karam karant. Jyaun jyaun nar nidhadak phirai, tyaun tyaun kaal hasant.',
    bhavarth: {
      hi: 'यह शरीर तो नाशवान (कच्ची मिट्टी का) है और इसके अंदर बहुत ही चंचल मन है। शारीरिक सुविधा और सुरक्षा के लिए लोग इस मन से बहुत से पक्के-स्थायी काम कर रहे हैं। इस प्रकार ऐसे प्रबंध होने से लोग मनमाने ढंग से जितना घूम-फिर रहे हैं, वैसे-वैसे ही काल इनकी अज्ञानता पर हंस रहा है।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਕੱਚਾ ਹੈ ਅਤੇ ਮਨ ਚੰਚਲ ਹੈ, ਪਰ ਮਨੁੱਖ ਪੱਕੇ-ਸਦਾ ਰਹਿਣ ਵਾਲੇ ਕੰਮਾਂ ਦੇ ਪ੍ਰਬੰਧ ਕਰਦਾ ਹੈ। ਜਿਵੇਂ-ਜਿਵੇਂ ਬੇਖ਼ੌਫ਼ ਹੋ ਕੇ ਘੁੰਮਦਾ ਹੈ, ਤਿਵੇਂ-ਤਿਵੇਂ ਕਾਲ ਉਸ ਦੀ ਮੂਰਖਤਾ \'ਤੇ ਹੱਸਦਾ ਹੈ।'),
      en: 'The body is unbaked fragile clay and the mind is restless and erratic, yet mortals scheme everlasting worldly projects. As humans strut about fearless and oblivious, Kal chuckles at their sheer delusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'काची काया (Kaachee kaayaa)', meaning: 'कच्ची मिट्टी का अत्यंत नश्वर शरीर' },
        { word: 'मन अथिर (Man athir)', meaning: 'अत्यंत चंचल और अस्थिर मन' },
        { word: 'थिर थिर करम (Thir thir karam)', meaning: 'सदा रहने वाले पक्के स्थायी कार्य' },
        { word: 'काल हसन्त (Kaal hasant)', meaning: 'काल मनुष्य की मूर्खता पर हंसता है' }
      ],
      pb: [
        { word: 'ਕਾਚੀ ਕਾਇਆ (Kaachee kaayaa)', meaning: 'ਕੱਚੀ ਮਿੱਟੀ ਦੀ ਦੇਹ' },
        { word: 'ਅਥਿਰ (Athir)', meaning: 'ਅਸਥਿਰ / ਚੰਚਲ' },
        { word: 'ਨਿਧੜਕ (Nidhadak)', meaning: 'ਬੇਪਰਵਾਹ' },
        { word: 'ਕਾਲ ਹਸੰਤ (Kaal hasant)', meaning: 'ਮੌਤ ਹੱਸਦੀ ਹੈ' }
      ],
      en: [
        { word: 'Kaachee kaayaa', meaning: 'Fragile vessel of unbaked clay' },
        { word: 'Man athir', meaning: 'Unsteady, fickle restless mind' },
        { word: 'Thir thir karam', meaning: 'Permanent plans made as if one lives forever' },
        { word: 'Kaal hasant', meaning: 'Kal laughs at the sheer absurdity' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं कच्ची देह और चंचल मन के साथ ऐसी योजनाएं बना रहा हूं, जिन पर काल हंस रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਨਾਲ ਸਦੀਵੀ ਯੋਜਨਾਵਾਂ ਬਣਾ ਕੇ ਕਾਲ ਦੇ ਹਾਸੇ ਦਾ ਪਾਤਰ ਬਣ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I busily architecting lifelong castles in the air while Kal smiles at my impending end?'
    },
    practicalApplication: {
      hi: 'संसार में आवश्यक कर्म करते हुए भी यह न भूलें कि शरीर क्षणभंगुर है; मुख्य ध्यान शाश्वत पर रखें।',
      pb: devanagariToGurmukhi('ਸਰੀਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਨੂੰ ਚੇਤੇ ਰੱਖ ਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Conduct duties diligently, but never forget the brittle fragility of the physical clay.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी कच्ची देह टूटने से पहले मुझे पक्के सत्यनाम का आश्रय दे दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੇ ਨਾਮ ਦਾ ਅਮਰ ਆਸਰਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before this earthen vessel shatters, anchor me in Your immutable Truth.'
    },
    quiz: []
  },
  {
    id: 'kaal-47',
    number: 1347,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४७',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੭',
      en: 'Kaal Ko Ang - 47',
    },
    text: {
      hi: 'कबीर पगरा दूर है, बीच पड़ी है रात।\nना जाने क्या होयगा, ऊगन्ता परभात।।',
      pb: devanagariToGurmukhi('कबीर पगरा दूर है, बीच पड़ी है रात। ना जाने क्या होयगा, ऊगन्ता परभात।।'),
      en: 'Kabeer pagraa door hai, beech padee hai raat. Naa jaane kyaa hoygaa, oogantaa parbhaat..'
    },
    transliteration: 'Kabeer pagra door hai, beech padee hai raat. Na jaane kya hoyga, ooganta parbhaat.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि अभी तुम्हारे लक्ष्य की सफलता (जीवन के कल्याण) का मार्ग बहुत ही दूर है और अभी अज्ञान मोह की अंधेरी रात भी बीच में ही पड़ी हुई है, परंतु काल का क्या भरोसा, न जाने कब क्या होगा? अतः प्रभात का सूर्य यानी ज्ञान का सूर्य उदय होने तक सावधान रहना चाहिए।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮੰਜ਼ਿਲ ਅਜੇ ਦੂਰ ਹੈ ਅਤੇ ਵਿਚਕਾਰ ਅਗਿਆਨਤਾ ਦੀ ਕਾਲੀ ਰਾਤ ਪਈ ਹੋਈ ਹੈ। ਸਵੇਰਾ ਹੋਣ \'ਤੇ ਕੀ ਬੀਤੇਗੀ, ਕੋਈ ਨਹੀਂ ਜਾਣਦਾ, ਇਸ ਲਈ ਜਾਗਦੇ ਰਹੋ।'),
      en: 'Kabir warns: the pilgrim goal is far away and a dark night of ignorance lies between. Who knows what fate shall strike before the dawn breaks? Therefore stay spiritually alert and vigilant.'
    },
    wordMeanings: {
      hi: [
        { word: 'पगरा दूर है (Pagraa door hai)', meaning: 'मुक्ति का पथ व गंतव्य अभी दूर है' },
        { word: 'बीच पड़ी है रात (Beech padee hai raat)', meaning: 'अज्ञान और मोह की काली रात' },
        { word: 'ऊगन्ता परभात (Oogantaa parbhaat)', meaning: 'प्रभात के ज्ञान-सूर्य का उदय' }
      ],
      pb: [
        { word: 'ਪਗਰਾ (Pagraa)', meaning: 'ਮੰਜ਼ਿਲ' },
        { word: 'ਬੀਚ ਪੜੀ ਰਾਤ (Beech padee raat)', meaning: 'ਅਗਿਆਨ ਦੀ ਰਾਤ' },
        { word: 'ਊਗੰਤਾ ਪਰਭਾਤ (Oogantaa parbhaat)', meaning: 'ਸਵੇਰ ਦਾ ਉੱਗਣਾ' }
      ],
      en: [
        { word: 'Pagraa door hai', meaning: 'The supreme threshold is still far off' },
        { word: 'Beech padee hai raat', meaning: 'A murky night of delusion spans the crossing' },
        { word: 'Oogantaa parbhaat', meaning: 'The rising sun of spiritual dawn' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अज्ञान की रात में सो रहा हूं, जबकि मृत्यु कभी भी प्रभात से पहले आ सकती है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੋਹ ਦੀ ਨੀਂਦ ਵਿੱਚ ਸੁੱਤਾ ਹਾਂ ਜਦਕਿ ਕਾਲ ਦਾ ਕੋਈ ਭਰੋਸਾ ਨਹੀਂ?'),
      en: 'Am I sleeping through the dark night of illusion when Kal can strike before morning breaks?'
    },
    practicalApplication: {
      hi: 'प्रमाद और आलस्य को त्यागकर आत्म-चेतना के दीपक को प्रज्वलित रखें; हर क्षण सजग रहें।',
      pb: devanagariToGurmukhi('ਆਲਸ ਤਿਆਗ ਕੇ ਗਿਆਨ ਦਾ ਦੀਵਾ ਜਗਾਓ।'),
      en: 'Awake from spiritual slumber; keep the lamp of watchful awareness burning through the night.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अज्ञान की इस अंधेरी रात में अपनी ज्ञान-ज्योति से मेरा मार्गदर्शन कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਜੀਵਨ ਵਿੱਚ ਗਿਆਨ ਦਾ ਸੂਰਜ ਚੜ੍ਹਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Illumine my path through the dark night of ignorance with Your divine light.'
    },
    quiz: []
  },
  {
    id: 'kaal-48',
    number: 1348,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४८',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੮',
      en: 'Kaal Ko Ang - 48',
    },
    text: {
      hi: 'जिनके नाम निशान है, तिन अटकावै कौन।\nपुरुष खजाना पाइया, मिटि गया आवा गौन।।',
      pb: devanagariToGurmukhi('जिनके नाम निशान है, तिन अटकावै कौन। पुरुष खजाना पाइया, मिटि गया आवा गौन।।'),
      en: 'Jinke naam nishaan hai, tin atkaavai kaun. Purush khajaanaa paaiyaa, miti gayaa aawaa gaun..'
    },
    transliteration: 'Jinke naam nishaan hai, tin atkaavai kaun. Purush khajana paaiya, miti gaya aawa gaun.',
    bhavarth: {
      hi: 'जिनके जीवन में सदगुरु के नाम-ज्ञान का ध्वज फहराता है, भला उन्हें कौन कहां रोक सकता है? अर्थात वे मुक्त हैं और उनका पथ भी खुला हुआ है। वे तो परम पुरुष परमात्मा के ज्ञान रूपी धन-भंडार को पाकर जन्म-मरण के बंधन से छूट जाते हैं अर्थात मोक्ष को प्राप्त कर लेते हैं।',
      pb: devanagariToGurmukhi('ਜਿਨ੍ਹਾਂ ਕੋਲ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਦਾ ਨਿਸ਼ਾਨ (ਝੰਡਾ/ਮੋਹਰ) ਹੈ, ਉਨ੍ਹਾਂ ਨੂੰ ਕਾਲ ਕਿਵੇਂ ਰੋਕ ਸਕਦਾ ਹੈ? ਉਨ੍ਹਾਂ ਨੇ ਪੂਰਨ ਪ੍ਰਭੂ ਦਾ ਅਮੁੱਲ ਖਜ਼ਾਨਾ ਪਾ ਲਿਆ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ-ਮਰਨ ਮਿਟ ਗਿਆ ਹੈ।'),
      en: 'Those who fly the sacred banner of the Satguru’s holy Name—who can possibly obstruct them? Having attained the supreme treasury of the Supreme Purusha, their cycles of coming and going are annihilated forever.'
    },
    wordMeanings: {
      hi: [
        { word: 'नाम निशान (Naam nishaan)', meaning: 'सत्यनाम का पावन ध्वज / मुहर' },
        { word: 'तिन अटकावै कौन (Tin atkaavai kaun)', meaning: 'उन्हें यमराज या काल कैसे रोक सकता है' },
        { word: 'पुरुष खजाना (Purush khajaanaa)', meaning: 'परम पुरुष परमात्मा का अमूल्य खजाना' },
        { word: 'आवा गौन (Aawaa gaun)', meaning: 'आवागमन / जन्म-मरण का चक्र' }
      ],
      pb: [
        { word: 'ਨਾਮ ਨਿਸ਼ਾਨ (Naam nishaan)', meaning: 'ਨਾਮ ਦਾ ਝੰਡਾ / ਚਿੰਨ੍ਹ' },
        { word: 'ਅਟਕਾਵੈ ਕੌਨ (Atkaavai kaun)', meaning: 'ਕੌਣ ਰੋਕ ਸਕਦਾ ਹੈ' },
        { word: 'ਪੁਰੁਸ਼ ਖ਼ਜ਼ਾਨਾ (Purush khajaana)', meaning: 'ਪ੍ਰਭੂ ਦਾ ਖ਼ਜ਼ਾਨਾ' },
        { word: 'ਆਵਾ ਗੌਨ (Aawa gaun)', meaning: 'ਜਨਮ-ਮਰਨ' }
      ],
      en: [
        { word: 'Naam nishaan', meaning: 'The emblem / standard of the Divine Name' },
        { word: 'Tin atkaavai kaun', meaning: 'Who can hinder or halt their ascent?' },
        { word: 'Purush khajaanaa', meaning: 'The inexhaustible treasure of the Supreme Soul' },
        { word: 'Aawaa gaun', meaning: 'Transmigration / the cycle of rebirth' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपने जीवन में सतगुरु के नाम का ध्वज फहराया है जो मुझे काल के चक्रव्यूह से पार निकाल सके?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਕੋਲ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦਾ ਨਿਸ਼ਾਨ ਹੈ ਜੋ ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਕਰੇ?'),
      en: 'Do I hold the sacred banner of the True Word to pass through the realms of Kal untouched?'
    },
    practicalApplication: {
      hi: 'सद्गुरु द्वारा प्रदत्त नाम-सुमिरन को ही अपना एकमात्र धन और सुरक्षा-कवच बनाएं।',
      pb: devanagariToGurmukhi('ਸਤਯਨਾਮ ਨੂੰ ਹੀ ਆਪਣਾ ਅਸਲੀ ਧਨ ਬਣਾਓ।'),
      en: 'Rely solely on the wealth of the holy Name as your invincible passport to freedom.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपने नाम का पावन निशान प्रदान कर आवागमन के भंवर से सदैव के लिए मुक्त कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦਾ ਖ਼ਜ਼ਾਨਾ ਬਖਸ਼ ਕੇ ਆਵਾਗਵਨ ਤੋਂ ਛੁਡਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the royal seal of Your holy Name and end my worldly wanderings.'
    },
    quiz: []
  },
  {
    id: 'kaal-49',
    number: 1349,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ४९',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੪੯',
      en: 'Kaal Ko Ang - 49',
    },
    text: {
      hi: 'तरुवर पात सों यौं कहै, सुनो पात इक बात।\nया घर याही रीति है, इक आवत इक जात।।',
      pb: devanagariToGurmukhi('तरुवर पात सों यौं कहै, सुनो पात इक बात। या घर याही रीति है, इक आवत इक जात।।'),
      en: 'Taruvar paat son yaun kahai, suno paat ik baat. Yaa ghar yaahee reeti hai, ik aavat ik jaat..'
    },
    transliteration: 'Taruvar paat son yaun kahai, suno paat ik baat. Ya ghar yaahi reeti hai, ik aavat ik jaat.',
    bhavarth: {
      hi: 'झड़ते हुए पत्ते को अपने से अलग होते देखकर एक वृक्ष ने उससे कहा हे पत्ते, उदास न हो। ध्यानपूर्वक मेरी बात सुन। हमारे इस घर-संसार में यही रीति है कि यहां एक आता है तो एक चला जाता है, अर्थात यहां पर कोई भी स्थायी नहीं है, आने-जाने का क्रम चलता ही रहता है।',
      pb: devanagariToGurmukhi('ਰੁੱਖ ਝੜਦੇ ਪੱਤੇ ਨੂੰ ਕਹਿੰਦਾ ਹੈ ਕਿ ਹੇ ਪੱਤੇ, ਦੁਖੀ ਨਾ ਹੋ! ਇਸ ਸੰਸਾਰ ਦੀ ਇਹੀ ਰੀਤ ਹੈ ਕਿ ਇੱਕ ਆਉਂਦਾ ਹੈ ਤੇ ਇੱਕ ਚਲਾ ਜਾਂਦਾ ਹੈ, ਇੱਥੇ ਕੋਈ ਸਦਾ ਨਹੀਂ ਰਹਿੰਦਾ।'),
      en: 'Seeing the withered leaf fall from its branch, the tree comforted it: "Listen, dear leaf! Such is the eternal custom of this worldly house—one comes and another goes; none stays here forever."'
    },
    wordMeanings: {
      hi: [
        { word: 'तरुवर (Taruvar)', meaning: 'महान वृक्ष / संसार' },
        { word: 'पात (Paat)', meaning: 'पत्ता / जीव' },
        { word: 'या घर याही रीति (Yaa ghar yaahee reeti)', meaning: 'इस संसार की यही शाश्वत व्यवस्था है' },
        { word: 'इक आवत इक जात (Ik aavat ik jaat)', meaning: 'आने-जाने का अविराम क्रम' }
      ],
      pb: [
        { word: 'ਤਰੁਵਰ (Taruvar)', meaning: 'ਰੁੱਖ' },
        { word: 'ਪਾਤ (Paat)', meaning: 'ਪੱਤਾ' },
        { word: 'ਯਾਹੀ ਰੀਤਿ (Yaahee reeti)', meaning: 'ਇਹੀ ਨੇਮ ਹੈ' },
        { word: 'ਆਵਤ ਜਾਤ (Aavat jaat)', meaning: 'ਆਉਣਾ ਤੇ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Taruvar', meaning: 'The great tree (symbolizing the universe)' },
        { word: 'Paat', meaning: 'The leaf (the embodied mortal)' },
        { word: 'Yaa ghar yaahee reeti', meaning: 'Such is the timeless law of this cosmos' },
        { word: 'Ik aavat ik jaat', meaning: 'One enters, another departs in endless succession' }
      ]
    },
    contemplation: {
      hi: 'जब संसार का नियम ही आना-जाना है, तो किसी के बिछुड़ने या नश्वरता पर शोक कैसा?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਸੰਸਾਰ ਦਾ ਨੇਮ ਹੀ ਆਉਣਾ-ਜਾਣਾ ਹੈ, ਤਾਂ ਵਿਅਰਥ ਰੋਣਾ ਕਿਸ ਗੱਲ ਦਾ?'),
      en: 'When universal law ordains that all must depart, why weep over natural transitions?'
    },
    practicalApplication: {
      hi: 'परिवर्तन और वियोग को सहज भाव से स्वीकार करें; जो नित्य और अविनाशी है, उसी से प्रेम करें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਨੂੰ ਸਮਝ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਪ੍ਰੀਤ ਪਾਓ।'),
      en: 'Accept departure and change with serene grace; anchor devotion in the imperishable.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आने-जाने के इस संसारी चक्र से ऊपर उठाकर मुझे अपने अविनाशी धाम में स्थिर कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਵਾਗਵਨ ਤੋਂ ਪਾਰ ਲੰਘਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Anchor me beyond the coming and going of leaves into the eternal roots of Truth.'
    },
    quiz: []
  },
  {
    id: 'kaal-50',
    number: 1350,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ५०',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੫੦',
      en: 'Kaal Ko Ang - 50',
    },
    text: {
      hi: 'पात झरन्ता यौं कहै, सुन तरुवर बन राय।\nअबके बिछड़े ना मिले, दूर पड़ेंगे जाय।।',
      pb: devanagariToGurmukhi('पात झरन्ता यौं कहै, सुन तरुवर बन राय। अबके बिछड़े ना मिले, दूर पड़ेंगे जाय।।'),
      en: 'Paat jharantaa yaun kahai, sun taruvar ban raay. Abke bichhade naa mile, door padenge jaay..'
    },
    transliteration: 'Paat jharanta yaun kahai, sun taruvar ban raay. Abke bichhde na mile, door padenge jaay.',
    bhavarth: {
      hi: 'वृक्ष से झड़ता हुआ पत्ता कहने लगा- हे विशाल वन के महान वृक्ष! यह समय का फेर है और हम विवशता के कारण बिछुड़ रहे हैं, परंतु अबकी बार बिछड़ने के बाद हम फिर कभी नहीं मिल पाएंगे। संभवतः कहीं दूर जा पड़ेंगे। यही दशा संसार के जीवों के बिछुड़ने की है।',
      pb: devanagariToGurmukhi('ਝੜਦਾ ਹੋਇਆ ਪੱਤਾ ਰੁੱਖ ਨੂੰ ਕਹਿੰਦਾ ਹੈ: ਹੇ ਬਨ ਦੇ ਰਾਜੇ! ਸੁਣ, ਹੁਣ ਜੋ ਅਸੀਂ ਵਿਛੜੇ ਹਾਂ, ਮੁੜ ਕੇ ਨਹੀਂ ਮਿਲਣਾ; ਪਤਾ ਨਹੀਂ ਹਵਾ ਸਾਨੂੰ ਕਿੰਨੀ ਦੂਰ ਲੈ ਜਾਵੇਗੀ। ਇਹੀ ਹਾਲ ਸੰਸਾਰੀ ਜੀਵਾਂ ਦਾ ਹੈ।'),
      en: 'The falling leaf replied: "Listen, O King of the forest! Once parted now, we shall never meet again on this branch; we shall be cast far, far away." Such is the irreversible parting of souls in this mortal world.'
    },
    wordMeanings: {
      hi: [
        { word: 'पात झरन्ता (Paat jharantaa)', meaning: 'वृक्ष से गिरता हुआ पत्ता' },
        { word: 'बन राय (Ban raay)', meaning: 'वन का राजा वृक्ष' },
        { word: 'अबके बिछड़े ना मिले (Abke bichhade naa mile)', meaning: 'एक बार वियोग होने पर पुनः मिलना असंभव' },
        { word: 'दूर पड़ेंगे जाय (Door padenge jaay)', meaning: 'अनजानी योनियों में भटक जाना' }
      ],
      pb: [
        { word: 'ਝਰੰਤਾ (Jharantaa)', meaning: 'ਝੜਦਾ ਹੋਇਆ' },
        { word: 'ਬਨ ਰਾਇ (Ban raay)', meaning: 'ਜੰਗਲ ਦਾ ਰਾਜਾ' },
        { word: 'ਬਿਛੜੇ ਨਾ ਮਿਲੇ (Bichhade na mile)', meaning: 'ਮੁੜ ਕੇ ਨਹੀਂ ਮਿਲਣਾ' },
        { word: 'ਦੂਰ ਪੜੇਂਗੇ (Door padenge)', meaning: 'ਦੂਰ ਜਾ ਪੈਣਾ' }
      ],
      en: [
        { word: 'Paat jharantaa', meaning: 'The falling, detaching leaf' },
        { word: 'Ban raay', meaning: 'Sovereign tree of the forest' },
        { word: 'Abke bichhade naa mile', meaning: 'Once severed, we shall never reunite on this branch' },
        { word: 'Door padenge jaay', meaning: 'Cast far into the unknown cosmic currents' }
      ]
    },
    contemplation: {
      hi: 'क्या मुझे यह भान है कि इस मानव-जन्म की शाखा से एक बार बिछुड़ने के बाद चौरासी में भटकना पड़ सकता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਨੂੰ ਪਤਾ ਹੈ ਕਿ ਮਨੁੱਖਾ ਦੇਹ ਛੁੱਟਣ ਤੋਂ ਬਾਅਦ ਮੁੜ ਕਦੋਂ ਇਹ ਅਵਸਰ ਮਿਲੇਗਾ?'),
      en: 'Do I realize that once severed from this human birth, who knows how far my soul will drift in the abyss?'
    },
    practicalApplication: {
      hi: 'इस मनुष्य जीवन के सुअवसर को व्यर्थ न गंवाएं; देह छूटने से पूर्व परमात्मा का साक्षात्कार करें।',
      pb: devanagariToGurmukhi('ਮਨੁੱਖਾ ਜਨਮ ਦੇ ਅਵਸਰ ਨੂੰ ਸਫਲ ਕਰੋ।'),
      en: 'Seize this rare human birth; unite with the Divine before the branch is irrevocably lost.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस चौरासी के दूर भटकाव से बचाकर अपने चरणों में सदा के लिए जोड़ लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਭਟਕਣ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੀ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Let not my soul be blown into distant storms; anchor me at Your sacred feet.'
    },
    quiz: []
  },
  {
    id: 'kaal-51',
    number: 1351,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ५१',
      pb: 'ਕਾਲ ਕੋ ਅੰग - ੫੧',
      en: 'Kaal Ko Ang - 51',
    },
    text: {
      hi: 'कुशल कुशल जो पूछता, जग में रहा न कोय।\nजरा मुई ना भय मुआ, कुशल कहां ते होय।।',
      pb: devanagariToGurmukhi('कुशल कुशल जो पूछता, जग में रहा न कोय। जरा मुई ना भय मुआ, कुशल कहां ते होय।।'),
      en: 'Kushal kushal jo poochhtaa, jag mein rahaa na koy. Jaraa muee naa bhay muaa, kushal kahaan te hoy..'
    },
    transliteration: 'Kushal kushal jo poochhta, jag mein raha na koy. Jara muee na bhay mua, kushal kahan te hoy.',
    bhavarth: {
      hi: 'परस्पर मिलने पर जो कुशल-क्षेम पूछता था और आज भी ऐसे ही ‘कुशल है, कुशल है\' कहकर पूछता है, तो भला जगत में कौन कुशल रहा है, क्योंकि विवेक-वैराग्य न होने से वृद्धावस्था तथा मृत्यु का भय मरा नहीं है। ऐसे में फिर कहां से कुशल रहा जा सकता है?',
      pb: devanagariToGurmukhi('ਜੋ ਹਰ ਮਿਲਣ ਵਾਲੇ ਤੋਂ \'ਸੁੱਖ-ਸਾਂਦ (ਕੁਸ਼ਲ)\' ਪੁੱਛਦਾ ਸੀ, ਅਸਲ ਵਿੱਚ ਜੱਗ ਵਿੱਚ ਕੋਈ ਕੁਸ਼ਲ ਨਹੀਂ ਰਿਹਾ। ਨਾ ਬੁਢਾਪਾ ਮਰਿਆ ਤੇ ਨਾ ਮੌਤ ਦਾ ਡਰ ਮੁੱਕਿਆ, ਫਿਰ ਕੁਸ਼ਲ ਕਿਵੇਂ ਹੋਵੇ?'),
      en: 'He who endlessly asked of everyone, "Are you well? Is all well?", found that none remains truly well in this mortal sphere. Neither did old age vanish nor did the dread of death die—whence then can genuine wellness come?'
    },
    wordMeanings: {
      hi: [
        { word: 'कुशल कुशल (Kushal kushal)', meaning: 'कुशल-क्षेम / हाल-चाल' },
        { word: 'जग में रहा न कोय (Jag mein rahaa na koy)', meaning: 'इस संसार में कोई भी स्थायी सुरक्षित नहीं रहा' },
        { word: 'जरा मुई ना (Jaraa muee naa)', meaning: 'न तो वृद्धावस्था टली' },
        { word: 'भय मुआ ना (Bhay muaa naa)', meaning: 'न ही काल का भय समाप्त हुआ' }
      ],
      pb: [
        { word: 'ਕੁਸ਼ਲ (Kushal)', meaning: 'ਸੁੱਖ-ਸਾਂਦ' },
        { word: 'ਰਹਾ ਨ ਕੋਯ (Raha na koy)', meaning: 'ਕੋਈ ਨਹੀਂ ਬਚਿਆ' },
        { word: 'ਜਰਾ (Jaraa)', meaning: 'ਬੁਢਾਪਾ' },
        { word: 'ਭਯ ਮੁਆ (Bhay mua)', meaning: 'ਡਰ ਮੁੱਕਿਆ' }
      ],
      en: [
        { word: 'Kushal kushal', meaning: 'Asking "Are you safe and well?"' },
        { word: 'Jag mein rahaa na koy', meaning: 'None in this world remained immune from decay' },
        { word: 'Jaraa muee naa', meaning: 'Senescence did not perish' },
        { word: 'Bhay muaa naa', meaning: 'Nor was the dread of mortality conquered' }
      ]
    },
    contemplation: {
      hi: 'जब तक काल और बुढ़ापे का भय जीवित है, क्या सांसारिक "कुशल-क्षेम" केवल एक भ्रम है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਤੱਕ ਮੌਤ ਦਾ ਡਰ ਹੈ, ਕੀ ਸੰਸਾਰੀ ਸੁੱਖ ਸੱਚਾ ਹੋ ਸਕਦਾ ਹੈ?'),
      en: 'Until the terror of death and infirmity is conquered through realization, can any greeting of "all is well" be true?'
    },
    practicalApplication: {
      hi: 'सच्ची कुशलता केवल सत्यनाम के सुमिरन और भय-मुक्ति में है; बाहरी सुख को पूर्ण न मानें।',
      pb: devanagariToGurmukhi('ਸੱਚੀ ਸੁੱਖ-ਸਾਂਦ ਸਿਰਫ਼ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਹੈ।'),
      en: 'True well-being is born only of transcendence over fear through the living Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल और जरा के भय से मुक्त कर अपनी नित्य कुशलता और शांति प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੌਤ ਦੇ ਡਰ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸੱਚੀ ਸ਼ਾਂਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me that genuine peace which transcends the dread of age and mortality.'
    },
    quiz: []
  },
  {
    id: 'kaal-52',
    number: 1352,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'काल को अंग - ५२',
      pb: 'ਕਾਲ ਕੋ ਅੰਗ - ੫੨',
      en: 'Kaal Ko Ang - 52',
    },
    text: {
      hi: 'बढ़ही आवत देखि के, तरुवर रुदन कराय।\nमैं अपंग संसै नहीं, पच्छी बसते आय।।',
      pb: devanagariToGurmukhi('बढ़ही आवत देखि के, तरुवर रुदन कराय। मैं अपंग संसै नहीं, पच्छी बसते आय।।'),
      en: 'Badhahee aavat dekhi ke, taruvar rudan karaay. Main apang sansai naheen, pachchhee baste aay..'
    },
    transliteration: 'Badhahee aavat dekhi ke, taruvar rudan karaay. Main apang sansai naheen, pachchhee baste aay.',
    bhavarth: {
      hi: 'काल रूपी बढ़ई को आता हुआ देखकर वृक्ष उदास होकर रोने लगा। मैं तो अपंग हूं, कहीं बचकर भाग नहीं सकता, अतः यह निश्चित ही मुझे काट लेगा। मेरी तो कोई बात नहीं, परंतु मेरे ऊपर इतने सारे पक्षी रहते हैं, उनका क्या होगा? इसी प्रकार सांसारिक जीव अपनों के मोह में दुःखी होता हुआ इस संसार से चला जाता है।',
      pb: devanagariToGurmukhi('ਕਾਲ ਰੂਪੀ ਤਰਖਾਣ ਨੂੰ ਆਉਂਦਾ ਵੇਖ ਕੇ ਰੁੱਖ ਰੋਣ ਲੱਗ ਪਿਆ: ਮੈਂ ਤਾਂ ਜੜ੍ਹ-ਅਪੰਗ ਹਾਂ, ਭੱਜ ਨਹੀਂ ਸਕਦਾ, ਮੈਨੂੰ ਤਾਂ ਕੱਟਿਆ ਹੀ ਜਾਣਾ ਹੈ; ਪਰ ਮੇਰੇ \'ਤੇ ਜੋ ਪੰਛੀ ਆਲ੍ਹਣੇ ਪਾ ਕੇ ਬੈਠੇ ਹਨ ਉਨ੍ਹਾਂ ਦਾ ਕੀ ਬਣੇਗਾ? ਜੀਵ ਵੀ ਪਰਿਵਾਰ ਦੇ ਮੋਹ ਵਿੱਚ ਰੋਂਦਾ ਤੁਰ ਜਾਂਦਾ ਹੈ।'),
      en: 'Seeing the carpenter (Kal) approaching with axe in hand, the tree wept: "I am immobile and cannot flee; no doubt he will fell me. Yet I grieve not for myself, but for the countless birds nesting upon my boughs—where shall they go?" Thus the mortal soul departs lamenting worldly attachments.'
    },
    wordMeanings: {
      hi: [
        { word: 'बढ़ही (Badhahee)', meaning: 'बढ़ई / कुल्हाड़ी लिए काल' },
        { word: 'तरुवर रुदन कराय (Taruvar rudan)', meaning: 'वृक्ष विलाप करता है / देह का मोह' },
        { word: 'अपंग (Apang)', meaning: 'असमर्थ / भाग न सकने वाला' },
        { word: 'पच्छी बसते (Pachchhee baste)', meaning: 'घोंसले बनाकर रहने वाले पक्षी / परिवार-कुटुंब' }
      ],
      pb: [
        { word: 'ਬੜ੍ਹਹੀ (Badhahee)', meaning: 'ਤਰਖਾਣ / ਕਾਲ' },
        { word: 'ਰੁਦਨ (Rudan)', meaning: 'ਰੋਣਾ / ਵਿਰਲਾਪ' },
        { word: 'ਅਪੰਗ (Apang)', meaning: 'ਬੇਵੱਸ' },
        { word: 'ਪੱਛੀ (Pachchhee)', meaning: 'ਪੰਛੀ / ਪਰਿਵਾਰ ਦੇ ਜੀਅ' }
      ],
      en: [
        { word: 'Badhahee', meaning: 'The carpenter (Kal wielding the axe of mortality)' },
        { word: 'Taruvar rudan', meaning: 'The tree weeping in anguish' },
        { word: 'Apang', meaning: 'Rooted, immobile, incapable of flight' },
        { word: 'Pachchhee baste', meaning: 'The resident birds (children, family, dependents)' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी काल के सम्मुख खड़े होकर परिजनों के मोह और चिंता में अपनी आत्मा के कल्याण को भूल रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਵੀ ਪਰਿਵਾਰ ਦੇ ਮੋਹ ਵਿੱਚ ਫਸ ਕੇ ਆਪਣੀ ਆਤਮਾ ਦਾ ਉਧਾਰ ਭੁੱਲ ਰਿਹਾ ਹਾਂ?'),
      en: 'Facing the axe of mortality, am I still paralyzed by worldly anxiety for dependents instead of seeking salvation?'
    },
    practicalApplication: {
      hi: 'सभी जीवों का रक्षक परमात्मा है; अपनों के मोह की व्यर्थ चिंता छोड़ आत्मा को परमात्मा में समर्पित करें।',
      pb: devanagariToGurmukhi('ਸਭ ਦਾ ਰਾਖਾ ਪ੍ਰਭੂ ਹੈ, ਮੋਹ ਛੱਡ ਕੇ ਨਾਮ ਜਪੋ।'),
      en: 'Trust all souls to the care of the Almighty; release anxious attachment and surrender to the Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब काल रूपी बढ़ई मेरे शरीर रूपी वृक्ष को काटे, उससे पूर्व मेरी सुरति को अपने अभय लोक में पहुंचा दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਪਣੀ ਗੋਦ ਵਿੱਚ ਲੈ ਲਵੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before the axe of Kal fells this mortal tree, harvest my soul into Your eternal abode.'
    },
    quiz: []
  }
];
