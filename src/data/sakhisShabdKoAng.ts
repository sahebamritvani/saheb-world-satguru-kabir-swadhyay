import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_SHABD_KO_ANG: Sakhi[] = [
  {
    id: 'shabd-1',
    number: 1101,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧',
      en: 'Shabd Ko Ang - 1',
    },
    text: {
      hi: 'सार शब्द जानै बिना, जिव परलै में जाय।\nकाया माया थिर नहीं, शब्द लेह अरथाय।।',
      pb: devanagariToGurmukhi('सार शब्द जानै बिना, जिव परलै में जाय। काया माया थिर नहीं, शब्द लेह अरथाय।।'),
      en: 'Sar shabd janai bina, jiv parlai mein jay. Kaya maya thir nahi, shabd leh arthay..'
    },
    transliteration: 'Sar shabd janai bina, jiv parlai mein jay. Kaya maya thir nahi, shabd leh arthay.',
    bhavarth: {
      hi: 'परम सत्य सार शब्द के बिना, यह जीव प्रलय-प्रवाह (मृत्यु-चक्र) में पड़ जाता है। इसका शरीर तथा धन-संपत्ति दोनों ही स्थिर नहीं हैं, अर्थात ये अस्थायी तथा नाशवान हैं, अतः निर्णय शब्द ज्ञान के यथार्थ अर्थ को भली-भांति समझ लेना चाहिए तथा काया-माया का मोह त्याग देना चाहिए।',
      pb: devanagariToGurmukhi('ਸਾਰ ਸ਼ਬਦ ਜਾਣੇ ਬਿਨਾਂ ਜੀਵ ਪ੍ਰलय ਵਿੱਚ ਪੈਂਦਾ ਹੈ। ਕਾਇਆ ਅਤੇ ਮਾਇਆ ਸਥਿਰ ਨਹੀਂ ਹਨ, ਸ਼ਬਦ ਦਾ ਅਰਥ ਸਮਝ ਕੇ ਮੋਹ ਤਿਆਗ ਦਿਓ।'),
      en: 'Without knowing the Supreme Truth (Sar Shabd), the soul falls into the cycle of dissolution. Body and wealth are impermanent; understand the true meaning of the Word.'
    },
    wordMeanings: {
      hi: [
        { word: 'सार शब्द (Sar shabd)', meaning: 'परम सत्य व मुक्तिप्रद नाम' },
        { word: 'परलै (Parlai)', meaning: 'प्रलय / मृत्यु चक्र' },
        { word: 'अरथाय (Arthay)', meaning: 'अर्थ सहित भली-भांति समझना' }
      ],
      pb: [
        { word: 'ਸਾਰ ਸ਼ਬਦ (Sar shabd)', meaning: 'ਪਰਮ ਸੱਚ' },
        { word: 'ਪਰਲੈ (Parlai)', meaning: 'ਮੌਤ ਦਾ ਚੱਕਰ' }
      ],
      en: [
        { word: 'Sar shabd', meaning: 'Supreme liberating Word' },
        { word: 'Parlai', meaning: 'Dissolution / death cycle' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने नाशवान काया-माया का मोह छोड़कर सार शब्द को पहचाना है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਮਾਇਆ ਦਾ ਮੋਹ ਛੱਡ ਕੇ ਸਾਰ ਸ਼ਬਦ ਨੂੰ ਪਛਾਣਿਆ ਹੈ?'),
      en: 'Have I transcended transient attachments to anchor in the Supreme Word?'
    },
    practicalApplication: {
      hi: 'बाहरी दिखावे से हटकर सार शब्द के सिमरन में ध्यान लगाएं।',
      pb: devanagariToGurmukhi('ਸਾਰ ਸ਼ਬਦ ਦੇ ਸਿਮਰਨ ਵਿੱਚ ਧਿਆਨ ਲਾਓ।'),
      en: 'Focus your mind on the inner contemplation of the liberating Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सार शब्द की अटूट पहचान दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਰ ਸ਼ਬਦ ਦੀ ਸੋਝੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the realization of the true Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-2',
    number: 1102,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - २',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨',
      en: 'Shabd Ko Ang - 2',
    },
    text: {
      hi: 'यही बड़ाई शब्द की, जैसे चुम्बक भाय।\nबिना शब्द नहिं ऊबरै, केता करै उपाय।।',
      pb: devanagariToGurmukhi('यही बड़ाई शब्द की, जैसे चुम्बक भाय। बिना शब्द नहिं ऊबरै, केता करै उपाय।।'),
      en: 'Yahi barai shabd ki, jese chumbak bhay. Bina shabd nahi ubarai, keta karai upay..'
    },
    transliteration: 'Yahi barai shabd ki, jese chumbak bhay. Bina shabd nahi ubarai, keta karai upay.',
    bhavarth: {
      hi: 'सतगुरु के बताये शब्द की महिमा चुंबक एवं लोहे के समान है, अर्थात जैसे चुंबक दूर से लोहे को अपनी ओर आकर्षित कर लेता है, वैसे ही सार शब्द मुमुक्षुओं को अपनी ओर खींचकर मोह-माया से दूर कर देता है। अविनाशी परमात्मा के सार शब्द के बिना कल्याण नहीं हो सकता, चाहे कितने भी उपाय किए जाएं।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਦੀ ਮਹਿਮਾ ਚੁੰਬਕ ਵਰਗੀ ਹੈ। ਸ਼ਬਦ ਬਿਨਾਂ ਜੀਵ ਕਦੇ ਨਹੀਂ ਉਬਰ ਸਕਦਾ, ਭਾਵੇਂ ਕਿੰਨੇ ਵੀ ਉਪਾਅ ਕਰ ਲਵੇ।'),
      en: 'The glory of the Satguru’s word is like a magnet. Without the liberating Word, no one can cross over the ocean of existence, despite any number of efforts.'
    },
    wordMeanings: {
      hi: [
        { word: 'चुम्बक (Chumbak)', meaning: 'चुंबक / आकर्षित करने वाला' },
        { word: 'ऊबरै (Ubarai)', meaning: 'उद्धार होना / पार होना' }
      ],
      pb: [
        { word: 'ਚੁੰਬਕ (Chumbak)', meaning: 'ਚੁੰਬਕ' },
        { word: 'ਉਬਰੈ (Ubarai)', meaning: 'ਪਾਰ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Chumbak', meaning: 'Magnet' },
        { word: 'Ubarai', meaning: 'Cross over / liberated' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सतगुरु के शब्द की ओर चुंबक की तरह खिंचता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਵੱਲ ਖਿੱਚਿਆ ਜਾਂਦਾ ਹੈ?'),
      en: 'Is my mind irresistibly drawn toward the Satguru’s word like iron to a magnet?'
    },
    practicalApplication: {
      hi: 'नियमित रूप से गुरु वाणी और शब्द का ध्यान करें।',
      pb: devanagariToGurmukhi('ਨਿਯਮਿਤ ਗੁਰੂ ਬਾਣੀ ਦਾ ਧਿਆਨ ਕਰੋ।'),
      en: 'Regularly meditate upon the Master’s teachings.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपका शब्द मेरे मन को अपनी ओर खींचे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪ ਦਾ ਸ਼ਬਦ ਮੇਰੇ ਮਨ ਨੂੰ ਖਿੱਚੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May your divine Word draw my consciousness inward.'
    },
    quiz: []
  },
  {
    id: 'shabd-3',
    number: 1103,
    grantha: 'Sakhi Sangrah',
    category: 'vani-sanyam',
    categoryTitle: {
      hi: 'शब्द को अंग - ३',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩',
      en: 'Shabd Ko Ang - 3',
    },
    text: {
      hi: 'कुटिल वचन सबतें बुरा, जारि करै सब छार।\nसाधु वचन जल रूप है, बरसै अमृत धार।।',
      pb: devanagariToGurmukhi('कुटिल वचन सबतें बुरा, जारि करै सब छार। साधु वचन जल रूप है, बरसै अमृत धार।।'),
      en: 'Kutil vachan sabten bura, jari karai sab chhar. Sadhu vachan jal rup hai, barsai amrit dhar..'
    },
    transliteration: 'Kutil vachan sabten bura, jari karai sab chhar. Sadhu vachan jal rup hai, barsai amrit dhar.',
    bhavarth: {
      hi: 'दुष्ट लोगों के कड़वे व तीखे वचन सबसे बुरे होते हैं। वे शरीर को जलाकर राख कर देते हैं, अर्थात उनसे सबके हृदय अशांत तथा भाव दग्ध हो जाते हैं, परंतु साधु-संतों के वचन शीतल जल के समान होते हैं, जो अमृत की धारा बनकर बरसते हैं।',
      pb: devanagariToGurmukhi('ਕੁਟਿਲ ਬਚਨ ਸਭ ਤੋਂ ਮਾੜੇ ਹਨ ਜੋ ਸਾੜ ਕੇ ਸੁਆਹ ਕਰ ਦਿੰਦੇ ਹਨ। ਸੰਤਾਂ ਦੇ ਬਚਨ ਅੰਮ੍ਰਿਤ ਦੀ ਧਾਰਾ ਵਾਂਗ ਸ਼ੀਤਲ ਹੁੰਦੇ ਹਨ।'),
      en: 'Harsh and crooked words are the worst; they burn everything to ashes. But the words of saints are like cooling water, showering streams of nectar.'
    },
    wordMeanings: {
      hi: [
        { word: 'जारि (Jari)', meaning: 'जलाना / दग्ध करना' },
        { word: 'छार (Chhar)', meaning: 'राख / धूल' }
      ],
      pb: [
        { word: 'ਜਾਰਿ (Jari)', meaning: 'ਸਾੜਨਾ' },
        { word: 'ਛਾਰ (Chhar)', meaning: 'ਸੁਆਹ' }
      ],
      en: [
        { word: 'Jari', meaning: 'Burn' },
        { word: 'Chhar', meaning: 'Ash' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी वाणी दूसरों को शांति देती है या जलाती है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਬੋਲੀ ਦੂਜਿਆਂ ਨੂੰ ਸ਼ਾਂਤੀ ਦਿੰਦੀ ਹੈ?'),
      en: 'Does my speech bring peace or burn others with harshness?'
    },
    practicalApplication: {
      hi: 'कड़वे वचनों का त्याग कर मधुर वाणी बोलें।',
      pb: devanagariToGurmukhi('ਕੌੜੇ ਬਚਨ ਛੱਡ ਕੇ ਮਿੱਠੀ ਬੋਲੀ ਬੋਲੋ।'),
      en: 'Forsake bitter words and speak with grace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी में अमृत घोल दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਮਿੱਠੀ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Infuse my speech with sweetness and compassion.'
    },
    quiz: []
  },
  {
    id: 'shabd-4',
    number: 1104,
    grantha: 'Sakhi Sangrah',
    category: 'vani-sanyam',
    categoryTitle: {
      hi: 'शब्द को अंग - ४',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੪',
      en: 'Shabd Ko Ang - 4',
    },
    text: {
      hi: 'कुटिल बचन नहिं बोलिये, शीतल बैन ले चीन्हि।\nगंगा जल शीतल भया, परबत फोड़ तीन्हि।।',
      pb: devanagariToGurmukhi('कुटिल बचन नहिं बोलिये, शीतल बैन ले चीन्हि। गंगा जल शीतल भया, परबत फोड़ तीन्हि।।'),
      en: 'Kutil bachan nahin boliye, shital bain le chhinhi. Ganga jal shital bhaya, parbat phod tinhi..'
    },
    transliteration: 'Kutil bachan nahin boliye, shital bain le chhinhi. Ganga jal shital bhaya, parbat phod tinhi.',
    bhavarth: {
      hi: 'कभी भी कड़वे व तीखे वचन नहीं बोलने चाहिए। शीतल व मधुर वचनों को समझो-परखो तथा उन्हीं का प्रयोग करो। पावन-शीतल गंगा जल को देखो! उस शीतल जल ने पर्वत फोड़कर अपना मार्ग बना लिया है, अर्थात मधुर वचनों द्वारा हम कठोर हृदय वाले व्यक्ति से भी अपना कार्य सिद्ध कर सकते हैं।',
      pb: devanagariToGurmukhi('ਕੁਟਿਲ ਬਚਨ ਨਾ ਬੋਲੋ। ਸ਼ੀਤਲ ਗੰਗਾ ਜਲ ਨੇ ਵੀ ਪਹਾੜ ਪਾੜ ਕੇ ਆਪਣਾ ਰਸਤਾ ਬਣਾ ਲਿਆ ਹੈ, ਮਿੱਠੇ ਬੋਲਾਂ ਵਿੱਚ ਅਪਾਰ ਤਾਕਤ ਹੈ।'),
      en: 'Never speak harsh words; recognize and use cooling, sweet speech. See how cooling Ganges water carves its way through solid mountains.'
    },
    wordMeanings: {
      hi: [
        { word: 'बैन (Bain)', meaning: 'वचन / वाणी' },
        { word: 'चीन्हि (Chhinhi)', meaning: 'पहचानकर / समझकर' }
      ],
      pb: [
        { word: 'ਬੈਨ (Bain)', meaning: 'ਬਚਨ' },
        { word: 'ਚੀਂਹਿ (Chhinhi)', meaning: 'ਪਛਾਣ ਕੇ' }
      ],
      en: [
        { word: 'Bain', meaning: 'Words / speech' },
        { word: 'Chhinhi', meaning: 'Recognizing' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी मधुर वाणी से कठोर परिस्थितियों को सहज बना सकता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਮਿੱਠੇ ਬੋਲਾਂ ਨਾਲ ਮੁਸ਼ਕਿਲਾਂ ਹੱਲ ਕਰ ਸਕਦਾ ਹਾਂ?'),
      en: 'Can I soften difficult situations through gentle persistence and sweet speech?'
    },
    practicalApplication: {
      hi: 'कठोर उत्तर देने के स्थान पर शांत और मधुर वाणी का प्रयोग करें।',
      pb: devanagariToGurmukhi('ਸ਼ਾਂਤ ਅਤੇ ਮਿੱਠੀ ਬੋਲੀ ਵਰਤੋ।'),
      en: 'Respond with calm and soothing words rather than aggression.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे शीतल और विनम्र वाणी प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਮਰ ਬੋਲੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me gentle and humble speech.'
    },
    quiz: []
  },
  {
    id: 'shabd-5',
    number: 1105,
    grantha: 'Sakhi Sangrah',
    category: 'vani-sanyam',
    categoryTitle: {
      hi: 'शब्द को अंग - ५',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੫',
      en: 'Shabd Ko Ang - 5',
    },
    text: {
      hi: 'खोद खाद धरती सहै, काट कूट बनराय।\nकुटिल बचन साधु सहै, और से सहा न जाय।।',
      pb: devanagariToGurmukhi('खोद खाद धरती सहै, काट कूट बनराय। कुटिल बचन साधु सहै, और से सहा न जाय।।'),
      en: 'Khod khad dharti sahai, kat kut banray. Kutil vachan sadhu sahai, aur se saha na jay..'
    },
    transliteration: 'Khod khad dharti sahai, kat kut banray. Kutil vachan sadhu sahai, aur se saha na jay.',
    bhavarth: {
      hi: 'सहनशील धरती को कितना भी खोदो, यह सब सह लेती है। पेड़ों को काटो-चीरो, जंगल सब सह लेते हैं। इसी प्रकार दुर्जनों के कठोर व कड़वे वचनों को केवल साधु-संत ही सहन कर पाते हैं, सामान्य जन से वह सहन नहीं होते।',
      pb: devanagariToGurmukhi('ਧਰਤੀ ਪੁੱਟਣ ਅਤੇ ਦਰੱਖਤ ਵੱਢਣ ਦਾ ਦੁੱਖ ਸਹਾਰਦੀ ਹੈ। ਇਵੇਂ ਹੀ ਕੌੜੇ ਬਚਨ ਕੇਵਲ ਸਾਧੂ ਹੀ ਸਹਾਰ ਸਕਦੇ ਹਨ, ਆਮ ਲੋਕਾਂ ਤੋਂ ਨਹੀਂ ਸਹਾਰੇ ਜਾਂਦੇ।'),
      en: 'Earth endures being dug up, trees endure being chopped. Similarly, only true saints can endure cruel and harsh words; ordinary people cannot.'
    },
    wordMeanings: {
      hi: [
        { word: 'बनराय (Banray)', meaning: 'वन / पेड़-पौधे' },
        { word: 'सहै (Sahai)', meaning: 'सहन करना' }
      ],
      pb: [
        { word: 'ਬਨਰਾਏ (Banray)', meaning: 'ਜੰਗਲ / ਰੁੱਖ' },
        { word: 'ਸਹੈ (Sahai)', meaning: 'ਸਹਿਣਾ' }
      ],
      en: [
        { word: 'Banray', meaning: 'Forest / trees' },
        { word: 'Sahai', meaning: 'Endure' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में संतों जैसी सहनशीलता और क्षमा का भाव है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਵਿੱਚ ਸੰਤਾਂ ਵਰਗੀ ਸਹਿਣਸ਼ੀਲਤਾ ਹੈ?'),
      en: 'Do I possess the forbearance and patience characteristic of saints?'
    },
    practicalApplication: {
      hi: 'अपमान या कड़वी बातों को शांति से सहन करना सीखें।',
      pb: devanagariToGurmukhi('ਕੌੜੀਆਂ ਗੱਲਾਂ ਨੂੰ ਸ਼ਾਂਤੀ ਨਾਲ ਸਹਿਣਾ ਸਿੱਖੋ।'),
      en: 'Learn to absorb harsh remarks with equanimity.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे हृदय में असीम सहनशीलता भर दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਸਹਿਣਸ਼ੀਲਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Fill my heart with boundless patience.'
    },
    quiz: []
  },
  {
    id: 'shabd-6',
    number: 1106,
    grantha: 'Sakhi Sangrah',
    category: 'vani-sanyam',
    categoryTitle: {
      hi: 'शब्द को अंग - ६',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੬',
      en: 'Shabd Ko Ang - 6',
    },
    text: {
      hi: 'शीतल शब्द उचारिये, अहं आनिये नाहिं।\nतेरा प्रीतम तुझहि में, दुसमन भी तुझ माहिं।।',
      pb: devanagariToGurmukhi('शीतल शब्द उचारिये, अहं आनिये नाहिं। तेरा प्रीतम तुझहि में, दुसमन भी तुझ माहिं।।'),
      en: 'Shital shabd uchariye, aham aniye nahi. Tera pritam tujhahi mein, dusman bhi tujh mahin..'
    },
    transliteration: 'Shital shabd uchariye, aham aniye nahi. Tera pritam tujhahi mein, dusman bhi tujh mahin.',
    bhavarth: {
      hi: 'अपने मुख से सदा शीतल व विनम्र वचन बोलने चाहिए तथा मन में कभी अहंकार नहीं लाना चाहिए। सतगुरु कबीर साहेब समझाते हैं कि तुम्हारा सच्चा प्रीतम (परमात्मा) भी तुम्हारे भीतर ही बसता है और तुम्हारा सबसे बड़ा शत्रु (अहंकार और कटुता) भी तुम्हारे अपने ही अंतःकरण में रहता है।',
      pb: 'ਆਪਣੇ ਮੁੱਖ ਤੋਂ ਸਦਾ ਸ਼ੀਤਲ, ਮਿੱਠੇ ਅਤੇ ਨਿਮਰ ਬਚਨ ਬੋਲਣੇ ਚਾਹੀਦੇ ਹਨ ਅਤੇ ਮਨ ਵਿੱਚ ਕਦੇ ਹੰਕਾਰ ਨਹੀਂ ਲਿਆਉਣਾ ਚਾਹੀਦਾ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਤੁਹਾਡਾ ਸੱਚਾ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਵੀ ਤੁਹਾਡੇ ਅੰਦਰ ਹੀ ਵਸਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ ਤੇ ਕੌੜਾਪਣ) ਵੀ ਤੁਹਾਡੇ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਰਹਿੰਦਾ ਹੈ।',
      en: 'Always speak cooling, gentle, and humble words, and let no ego enter your heart. Your Beloved Divine Friend and your greatest inner enemy (arrogance and bitterness) both reside within your own self.'
    },
    wordMeanings: {
      hi: [
        { word: 'शीतल शब्द (Shital shabd)', meaning: 'मधुर, शांत और अहंकार-रहित वाणी (तथा अनहद सार-शब्द)' },
        { word: 'अहं (Aham)', meaning: 'अहंकार / मैं-पन व घमंड' },
        { word: 'प्रीतम (Pritam)', meaning: 'परम प्रियतम परमात्मा / घट में बसे सतगुरु' },
        { word: 'दुसमन (Dusman)', meaning: 'अंतःकरण का शत्रु — अहंकार, क्रोध एवं चंचल मन' },
        { word: 'तुझ माहिं (Tujh mahin)', meaning: 'तुम्हारे अपने ही घट (अंतःकरण) के भीतर' }
      ],
      pb: [
        { word: 'ਸ਼ੀਤਲ ਸ਼ਬਦ (Shital shabd)', meaning: 'ਮਿੱਠੀ, ਸ਼ਾਂਤ ਅਤੇ ਹੰਕਾਰ-ਰਹਿਤ ਬੋਲੀ (ਅਤੇ ਅਨਹਦ ਸਾਰ-ਸ਼ਬਦ)' },
        { word: 'ਅਹੰ (Aham)', meaning: 'ਹੰਕਾਰ / ਮੈਂ-ਪੁਣਾ ਤੇ ਘਮੰਡ' },
        { word: 'ਪ੍ਰੀਤਮ (Pritam)', meaning: 'ਪਰਮ ਪ੍ਰੀਤਮ ਪ੍ਰਮਾਤਮਾ / ਘਟ ਵਿੱਚ ਵਸਦਾ ਮਿੱਤਰ' },
        { word: 'ਦੁਸਮਨ (Dusman)', meaning: 'ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ — ਹੰਕਾਰ, ਗੁੱਸਾ ਤੇ ਚੰਚਲ ਮਨ' },
        { word: 'ਤੁਝ ਮਾਹਿਂ (Tujh mahin)', meaning: 'ਤੁਹਾਡੇ ਆਪਣੇ ਹੀ ਹਿਰਦੇ (ਘਟ) ਦੇ ਅੰਦਰ' }
      ],
      en: [
        { word: 'Shital shabd', meaning: 'Cooling, gentle speech & inner soothing Word' },
        { word: 'Aham', meaning: 'Ego / arrogance / "I-ness"' },
        { word: 'Pritam', meaning: 'The Indwelling Beloved / Satpurush within' },
        { word: 'Dusman', meaning: 'Inner adversary — pride, anger & restless mind' },
        { word: 'Tujh mahin', meaning: 'Within your own heart (Ghat)' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने भीतर छुपे अहंकार रूपी शत्रु को पहचानकर वाणी में शीतलता ला रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਅੰਦਰ ਲੁਕੇ ਹੰਕਾਰ ਰੂਪੀ ਦੁਸ਼ਮਣ ਨੂੰ ਪਛਾਣ ਕੇ ਬੋਲੀ ਵਿੱਚ ਸ਼ੀਤਲਤਾ ਲਿਆ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I recognizing the inner enemy of ego and bringing gentleness into my words today?'
    },
    practicalApplication: {
      hi: 'आज संवाद में अहं का त्याग करें और तनाव की स्थिति में भी शीतल, विनम्र शब्दों का प्रयोग करें।',
      pb: 'ਅੱਜ ਗੱਲਬਾਤ ਵਿੱਚ ਹੰਕਾਰ ਛੱਡ ਕੇ ਤਣਾਅ ਵੇਲੇ ਵੀ ਸ਼ੀਤਲ ਤੇ ਨਿਮਰ ਬੋਲ ਬੋਲੋ।',
      en: 'Drop ego in conversations today and choose calm, respectful words even under pressure.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मेरे घट से अहं रूपी शत्रु को मिटाकर केवल प्रेम और शीतल शब्द बसाएं। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚੋਂ ਹੰਕਾਰ ਰੂਪੀ ਦੁਸ਼ਮਣ ਮਿਟਾ ਕੇ ਕੇਵਲ ਪ੍ਰੇਮ ਤੇ ਸ਼ੀਤਲ ਸ਼ਬਦ ਵਸਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir Saheb! Dissolve the inner enemy of ego and fill my heart with love and cooling speech.'
    },
    quiz: [
      {
        id: 'q-1106-1',
        question: {
          hi: 'साखी #११०६ ("शीतल शब्द उचारिये, अहं आनिये नाहिं") का केंद्रीय जीवन संदेश क्या है?',
          pb: 'ਸਾਖੀ #੧੧੦੬ ("ਸ਼ੀਤਲ ਸ਼ਬਦ ਉਚਾਰੀਏ, ਅਹੰ ਆਨੀਏ ਨਾਹਿਂ") ਦਾ ਮੁੱਖ ਜੀਵਨ ਸੰਦੇਸ਼ ਕੀ ਹੈ?',
          en: 'What is the core practical life message of Sakhi #1106?'
        },
        options: {
          hi: [
            'सदा विनम्र और शीतल वाणी बोलना तथा मन में अहंकार का प्रवेश न होने देना',
            'केवल एकांत में मौन व्रत धारण कर दूसरों से संवाद पूरी तरह बंद कर देना',
            'अपने सम्मान की रक्षा के लिए विरोधियों को कठोर शब्दों से उत्तर देना',
            'केवल बाहरी ग्रंथों के कठिन शब्दों को कंठस्थ करके शास्त्रार्थ करना'
          ],
          pb: [
            'ਸਦਾ ਨਿਮਰ ਤੇ ਸ਼ੀਤਲ ਬੋਲੀ ਬੋਲਣੀ ਅਤੇ ਮਨ ਵਿੱਚ ਹੰਕਾਰ ਨਾ ਆਉਣ ਦੇਣਾ',
            'ਕੇਵਲ ਇਕਾਂਤ ਵਿੱਚ ਮੌਨ ਵਰਤ ਰੱਖ ਕੇ ਸਭ ਨਾਲ ਗੱਲਬਾਤ ਬੰਦ ਕਰ ਦੇਣੀ',
            'ਆਪਣੀ ਸ਼ਾਨ ਬਚਾਉਣ ਲਈ ਵਿਰੋਧੀਆਂ ਨੂੰ ਤਿੱਖੇ ਬੋਲਾਂ ਵਿੱਚ ਜਵਾਬ ਦੇਣਾ',
            'ਬਾਹਰੀ ਪੁਸਤਕਾਂ ਦੇ ਔਖੇ ਸ਼ਬਦ ਯਾਦ ਕਰਕੇ ਬਹਿਸਾਂ ਵਿੱਚ ਜਿੱਤ ਪ੍ਰਾਪਤ ਕਰਨੀ'
          ],
          en: [
            'Speak calmly and humbly at all times while keeping arrogance out of the heart',
            'Stop speaking to others altogether by taking a vow of total silence in isolation',
            'Respond firmly with sharp words whenever someone challenges your dignity',
            'Memorize complex verses merely to win philosophical debates'
          ]
        },
        correctIndex: 0,
        explanation: {
          hi: 'सतगुरु कबीर साहेब स्पष्ट करते हैं कि मीठी, शीतल वाणी और निरहंकार भाव ही मनुष्य के अंतःकरण को शांति और प्रीतम की अनुभूति के योग्य बनाते हैं।',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਿੱਠੀ, ਸ਼ੀਤਲ ਬੋਲੀ ਅਤੇ ਨਿਮਰਤਾ ਹੀ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਪ੍ਰਭੂ-ਮਿਲਾਪ ਦੇ ਯੋਗ ਬਣਾਉਂਦੇ ਹਨ।',
          en: 'Satguru Kabir Saheb teaches that cooling speech paired with freedom from ego prepares the heart for inner peace.'
        }
      },
      {
        id: 'q-1106-2',
        question: {
          hi: 'सतगुरु कबीर साहेब के अनुसार मनुष्य का सबसे बड़ा शत्रु ("दुसमन") और सबसे प्यारा मित्र ("प्रीतम") कहाँ निवास करते हैं?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ ਅਤੇ ਸਭ ਤੋਂ ਪਿਆਰਾ ਮਿੱਤਰ ("ਪ੍ਰੀਤਮ") ਕਿੱਥੇ ਵਸਦੇ ਹਨ?',
          en: 'According to Satguru Kabir Saheb, where do one’s greatest enemy ("Dusman") and dearest Beloved ("Pritam") reside?'
        },
        options: {
          hi: [
            'बाहर के समाज और मित्रों के बीच',
            'स्वयं मनुष्य के अपने ही अंतःकरण (घट) के भीतर',
            'केवल तीर्थ स्थलों और ग्रंथों के पन्नों में',
            'भाग्य और ग्रहों की चाल में'
          ],
          pb: [
            'ਬਾਹਰਲੇ ਸਮਾਜ ਅਤੇ ਦੋਸਤਾਂ-ਮਿੱਤਰਾਂ ਦੇ ਵਿਚਕਾਰ',
            'ਮਨੁੱਖ ਦੇ ਆਪਣੇ ਹੀ ਅੰਦਰਲੇ ਹਿਰਦੇ (ਘਟ) ਦੇ ਅੰਦਰ',
            'ਕੇਵਲ ਤੀਰਥ ਅਸਥਾਨਾਂ ਅਤੇ ਗ੍ਰੰਥਾਂ ਦੇ ਪੰਨਿਆਂ ਵਿੱਚ',
            'ਕਿਸਮਤ ਅਤੇ ਗ੍ਰਹਿਆਂ ਦੀ ਚਾਲ ਦੇ ਅੰਦਰ'
          ],
          en: [
            'Outwardly among society, neighbors, and social circles',
            'Within one’s very own inner heart and consciousness (Ghat)',
            'Solely inside distant pilgrimage shrines and sacred pages',
            'In external destiny and the movement of planets'
          ]
        },
        correctIndex: 1,
        explanation: {
          hi: '"तेरा प्रीतम तुझहि में, दुसमन भी तुझ माहिं" — सतगुरु समझाते हैं कि परमात्मा रूपी प्रीतम और अहंकार/कटुता रूपी शत्रु, दोनों हमारे अपने ही भीतर विद्यमान हैं।',
          pb: '"ਤੇਰਾ ਪ੍ਰੀਤਮ ਤੁਝਹਿ ਮੇਂ, ਦੁਸਮਨ ਭੀ ਤੁਝ ਮਾਹਿਂ" — ਸਤਿਗੁਰੂ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਅਤੇ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ) ਦੋਵੇਂ ਸਾਡੇ ਅੰਦਰ ਹੀ ਹਨ।',
          en: 'Both the Divine Beloved and the inner enemy of ego reside right inside one’s own heart.'
        }
      },
      {
        id: 'q-1106-3',
        question: {
          hi: 'दैनिक व्यवहार: यदि कोई सहकर्मी या परिजन बिना कारण क्रोध में कड़वी बात कह दे, तो इस साखी के अनुसार साधक को कैसा आचरण करना चाहिए?',
          pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ: ਜੇ ਕੋਈ ਸਾਥੀ ਜਾਂ ਪਰਿਵਾਰਕ ਮੈਂਬਰ ਗੁੱਸੇ ਵਿੱਚ ਕੌੜੀ ਗੱਲ ਕਹਿ ਦੇਵੇ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਸਾਧਕ ਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
          en: 'Daily Scenario: If a colleague or relative speaks harshly in anger, how should a seeker respond according to this Sakhi?'
        },
        options: {
          hi: [
            'तुरंत उतनी ही कठोर भाषा में प्रतिउत्तर देकर अपना पक्ष साबित करना चाहिए',
            'मन के आवेश और अहं को रोककर शांत व शीतल वाणी से संवाद संभालना चाहिए',
            'उस व्यक्ति से आजीवन के लिए मन में वैर और बदला रखने का निश्चय करना चाहिए',
            'सबके सामने उस व्यक्ति की पिछली गलतियाँ गिनाकर उसे लज्जित करना चाहिए'
          ],
          pb: [
            'ਤੁਰੰਤ ਉਹੀ ਕੌੜੀ ਬੋਲੀ ਵਿੱਚ ਜਵਾਬ ਦੇ ਕੇ ਆਪਣਾ ਪੱਖ ਸਹੀ ਸਾਬਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ',
            'ਮਨ ਦੇ ਜੋਸ਼ ਤੇ ਹੰਕਾਰ ਨੂੰ ਰੋਕ ਕੇ ਸ਼ਾਂਤ ਅਤੇ ਸ਼ੀਤਲ ਬੋਲਾਂ ਨਾਲ ਗੱਲ ਸੰਭਾਲਣੀ ਚਾਹੀਦੀ ਹੈ',
            'ਉਸ ਵਿਅਕਤੀ ਨਾਲ ਸਾਰੀ ਉਮਰ ਲਈ ਮਨ ਵਿੱਚ ਵੈਰ ਅਤੇ ਬਦਲਾ ਰੱਖ ਲੈਣਾ ਚਾਹੀਦਾ ਹੈ',
            'ਸਭ ਦੇ ਸਾਹਮਣੇ ਉਸ ਦੀਆਂ ਪੁਰਾਣੀਆਂ ਗਲਤੀਆਂ ਗਿਣਾ ਕੇ ਉਸ ਨੂੰ ਸ਼ਰਮਿੰਦਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ'
          ],
          en: [
            'Immediately fire back in equally sharp words to prove superiority',
            'Restrain inner ego and reply with calm, cooling words that defuse tension',
            'Hold silent resentment forever while planning subtle retaliation later',
            'Publicly list all their past mistakes so everyone sees they are wrong'
          ]
        },
        correctIndex: 1,
        explanation: {
          hi: 'कटुता का उत्तर कटुता से देने पर भीतर का शत्रु (अहंकार) जीत जाता है; शीतल शब्द बोलने से विवाद शांत होता है।',
          pb: 'ਕੌੜੇ ਬੋਲ ਦਾ ਜਵਾਬ ਕੌੜੇ ਬੋਲ ਨਾਲ ਦੇਣ ਤੇ ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ) ਜਿੱਤ ਜਾਂਦਾ ਹੈ; ਸ਼ੀਤਲ ਬੋਲ ਵਿਵਾਦ ਨੂੰ ਸ਼ਾਂਤ ਕਰਦੇ ਹਨ।',
          en: 'Answering bitterness with bitterness lets ego win; cooling speech calms conflict.'
        }
      },
      {
        id: 'q-1106-4',
        question: {
          hi: 'कारण और परिणाम: वाणी में कटुता और हृदय में "अहं" (अहंकार) को पोषित करने का आध्यात्मिक परिणाम क्या होता है?',
          pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਬੋਲੀ ਵਿੱਚ ਕੜਵਾਹਟ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ "ਅਹੰ" (ਹੰਕਾਰ) ਪਾਲਣ ਦਾ ਅਧਿਆਤਮਕ ਨਤੀਜਾ ਕੀ ਹੁੰਦਾ ਹੈ?',
          en: 'Cause & Effect: What is the spiritual consequence of nourishing harsh speech and inner ego?'
        },
        options: {
          hi: [
            'बाहरी समाज में व्यक्ति सदैव बहुत लोकप्रिय और सम्माननीय बन जाता है',
            'भीतर विराजमान प्रीतम (परमात्मा) से दूरी बढ़ती है और अंतर्मन अशांत हो जाता है',
            'आत्म-चिंतन और ध्यान की गहराई अपने आप तीव्र हो जाती है',
            'मनुष्य को किसी भी सत्संग या आत्म-निरीक्षण की आवश्यकता नहीं रहती'
          ],
          pb: [
            'ਬਾਹਰਲੇ ਸਮਾਜ ਵਿੱਚ ਮਨੁੱਖ ਹਮੇਸ਼ਾ ਹਰਮਨਪਿਆਰਾ ਅਤੇ ਸਨਮਾਨਿਤ ਬਣ ਜਾਂਦਾ ਹੈ',
            'ਅੰਦਰ ਵਸਦੇ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਨਾਲੋਂ ਦੂਰੀ ਵਧਦੀ ਹੈ ਤੇ ਮਨ ਅਸ਼ਾਂਤ ਹੁੰਦਾ ਹੈ',
            'ਆਤਮ-ਚਿੰਤਨ ਅਤੇ ਧਿਆਨ ਦੀ ਡੂੰਘਾਈ ਆਪਣੇ ਆਪ ਤੇਜ਼ ਹੋ ਜਾਂਦੀ ਹੈ',
            'ਮਨੁੱਖ ਨੂੰ ਕਿਸੇ ਸਤਿਸੰਗ ਜਾਂ ਆਤਮ-ਪੜਚੋਲ ਦੀ ਲੋੜ ਨਹੀਂ ਰਹਿੰਦੀ'
          ],
          en: [
            'One automatically earns deep trust and lasting harmony with everyone',
            'It creates inner restlessness and veils awareness of the Indwelling Beloved',
            'Concentration in meditation effortlessly deepens on its own',
            'The seeker no longer needs Satsang or self-discipline'
          ]
        },
        correctIndex: 1,
        explanation: {
          hi: 'जहाँ अहंकार और कड़वाहट पनपती है, वहाँ हृदय संकीर्ण हो जाता है; अहं ही घट में बसे साहेब की अनुभूति को रोकता है।',
          pb: 'ਜਿੱਥੇ ਹੰਕਾਰ ਤੇ ਕੜਵਾਹਟ ਵਧਦੇ ਹਨ, ਉੱਥੇ ਦਿਲ ਤੰਗ ਹੋ ਜਾਂਦਾ ਹੈ; ਹੰਕਾਰ ਹੀ ਅੰਦਰ ਵਸਦੇ ਸਾਹੇਬ ਦੇ ਦਰਸ਼ਨ ਰੋਕਦਾ ਹੈ।',
          en: 'Where pride and bitterness grow, ego acts as the veil hiding awareness of the Divine inside.'
        }
      },
      {
        id: 'q-1106-5',
        question: {
          hi: '"शब्द को अंग" के तत्व ज्ञान के अनुसार "शीतल शब्द" की साधना घट-मंदिर में किस प्रकार आत्म-बोध कराती है?',
          pb: '"ਸ਼ਬਦ ਕੋ ਅੰਗ" ਦੇ ਤੱਤ-ਗਿਆਨ ਅਨੁਸਾਰ "ਸ਼ੀਤਲ ਸ਼ਬਦ" ਦੀ ਸਾਧਨਾ ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਕਿਸ ਤਰ੍ਹਾਂ ਆਤਮ-ਬੋਧ ਕਰਵਾਉਂਦੀ ਹੈ?',
          en: 'In "Shabd Ko Ang" philosophy, how does practicing "Shital Shabd" awaken realization within the Ghat-Mandir?'
        },
        options: {
          hi: [
            'यह बाहरी मंत्रों की संख्या गिनकर स्वर्ग में स्थान आरक्षित कराती है',
            'यह पंचाग्नि (काम, क्रोध आदि) को शांत कर सुरति को अहंकार-मुक्त करके प्रीतम से मिलाती है',
            'यह केवल सांसारिक वाद-विवाद में तर्क जीतने की कला सिखाती है',
            'यह दूसरों के दोष खोजकर उनकी आलोचना करने की प्रेरणा देती है'
          ],
          pb: [
            'ਇਹ ਬਾਹਰੀ ਗਿਣਤੀ ਦੇ ਜਾਪ ਨਾਲ ਸਵਰਗ ਵਿੱਚ ਥਾਂ ਪੱਕੀ ਕਰਵਾਉਂਦੀ ਹੈ',
            'ਇਹ ਪੰਜ ਵਿਕਾਰਾਂ ਦੀ ਅੱਗ ਨੂੰ ਠੰਢਾ ਕਰਕੇ ਸੁਰਤ ਨੂੰ ਹੰਕਾਰ-ਮੁਕਤ ਕਰਕੇ ਪ੍ਰੀਤਮ ਨਾਲ ਮਿਲਾਉਂਦੀ ਹੈ',
            'ਇਹ ਕੇਵਲ ਦੁਨਿਆਵੀ ਬਹਿਸ ਵਿੱਚ ਤਰਕ ਜਿੱਤਣ ਦੀ ਕਲਾ ਸਿਖਾਉਂਦੀ ਹੈ',
            'ਇਹ ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਲੱਭ ਕੇ ਉਨ੍ਹਾਂ ਦੀ ਆਲੋਚਨਾ ਕਰਨ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੀ ਹੈ'
          ],
          en: [
            'By accumulating counted external chants to reserve a place in heaven',
            'By cooling the five inner passions and freeing Surat from ego to meet the Beloved within',
            'By sharpening clever arguments to prevail in intellectual debates',
            'By training the eye to point out flaws in others’ practice'
          ]
        },
        correctIndex: 1,
        explanation: {
          hi: 'कबीर पंथ में "शीतल शब्द" वाणी के संयम से आरंभ होकर अनहद सार-शब्द में सुरति के लीन होने तक जाता है।',
          pb: 'ਕਬੀਰ ਪੰਥ ਵਿੱਚ "ਸ਼ੀਤਲ ਸ਼ਬਦ" ਬੋਲੀ ਦੇ ਸੰਜਮ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਅਨਹਦ ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਸੁਰਤ ਦੇ ਸਮਾਉਣ ਤੱਕ ਜਾਂਦਾ ਹੈ।',
          en: 'In Kabir Panth philosophy, "Shital Shabd" cools inner turmoil and unites Surat with the Beloved within.'
        }
      }
    ]
  },
  {
    id: 'shabd-7',
    number: 1107,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ७',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੭',
      en: 'Shabd Ko Ang - 7',
    },
    text: {
      hi: 'शब्द कहै सो कीजिये, बहुतक गुरु लबार।\nअपने अपने लाभ को, ठौर ठौर बटपार।।',
      pb: devanagariToGurmukhi('शब्द कहै सो कीजिये, बहुतक गुरु लबार। अपने अपने लाभ को, ठौर ठौर बटपार।।'),
      en: 'Shabd kahai so kijiye, bahutak guru labar. Apne apne labh ko, thour thour batpar..'
    },
    transliteration: 'Shabd kahai so kijiye, bahutak guru labar. Apne apne labh ko, thour thour batpar.',
    bhavarth: {
      hi: 'जो उचित है और निर्णय-शब्दों से कहा जाता है, उसी के अनुसार कर्म करो। ढोंगी और झूठे गुरु बहुत हैं जो अपने स्वार्थ व लाभ के लिए जगह-जगह ठगते फिरते हैं।',
      pb: devanagariToGurmukhi('ਜੋ ਸੱਚਾ ਸ਼ਬਦ ਕਹੇ ਉਹੀ ਕਰੋ। ਦੁਨੀਆ ਵਿੱਚ ਬਹੁਤ ਛਲ਼ੀ ਗੁਰੂ ਬੈਠੇ ਹਨ ਜੋ ਆਪਣੇ ਸਵਾਰਥ ਲਈ ਠੱਗੀ ਕਰਦੇ ਹਨ।'),
      en: 'Follow what the true Word commands. There are many false and deceptive teachers roaming about, plundering people for their own selfish gains.'
    },
    wordMeanings: {
      hi: [
        { word: 'लबार (Labar)', meaning: 'झूठा / ढोंगी' },
        { word: 'बटपार (Batpar)', meaning: 'ठग / लुटेरा' }
      ],
      pb: [
        { word: 'ਲਬਾਰ (Labar)', meaning: 'ਝੂਠਾ' },
        { word: 'ਬਟਪਾਰ (Batpar)', meaning: 'ਠੱਗ / ਲੁਟੇਰਾ' }
      ],
      en: [
        { word: 'Labar', meaning: 'Deceptive / false' },
        { word: 'Batpar', meaning: 'Highway robber / fraud' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं ढोंगियों से बचकर सच्चे सतगुरु के मार्ग पर चल रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੱਚੇ ਮਾਰਗ ਉੱਤੇ ਚੱਲ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I discerning true spiritual guidance from deceptive frauds?'
    },
    practicalApplication: {
      hi: 'सतगुरु कबीर साहेब के निर्णय ज्ञान को ही अपने जीवन का आधार बनाएं।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਨੂੰ ਆਧਾਰ ਬਣਾਓ।'),
      en: 'Anchor your life firmly in the authentic teachings of the Master.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे कपटी लोगों से बचाए रखें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਛਲ-ਕਪਟ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Protect me from false influences.'
    },
    quiz: []
  },
  {
    id: 'shabd-8',
    number: 1108,
    grantha: 'Sakhi Sangrah',
    category: 'shabd-ko-ang',
    themeTags: ['satya-khoj', 'saar-shabd', 'shabd-sadhan'],
    categoryTitle: {
      hi: 'शब्द को अंग - ८',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੮',
      en: 'Shabd Ko Ang - 8',
    },
    text: {
      hi: 'खोजी हुआ शब्द का, धन्य सन्त जन सोय।\nकहैं कबीर गहि शब्द को, कबहु न जाय बिगोय।।',
      pb: 'ਖੋਜੀ ਹੂਆ ਸ਼ਬਦ ਕਾ, ਧੰਨ ਸੰਤ ਜਨ ਸੋਇ।\nਕਹੈਂ ਕਬੀਰ ਗਹਿ ਸ਼ਬਦ ਕੋ, ਕਬਹੂ ਨ ਜਾਇ ਬਿਗੋਇ॥',
      en: 'Khoji hua shabd ka, dhanya sant jan soy.\nKahein Kabir gahi shabd ko, kabahu na jay bigoy..'
    },
    transliteration: 'Khoji hua shabd ka, dhanya sant jan soy. Kahein Kabir gahi shabd ko, kabahu na jay bigoy.',
    bhavarth: {
      hi: 'जो साधक परम सत्य (सार-शब्द) का सच्चा अन्वेषक बनकर उसे अंतःकरण में धारण करता है, वह संत जन धन्य है। सतगुरु कबीर साहेब कहते हैं कि जो सत्य-शब्द को मजबूती से पकड़ लेता है, उसका अमूल्य जीवन कभी व्यर्थ नष्ट नहीं होता और वह भ्रम में नहीं भटकता।',
      pb: 'ਜਿਹੜਾ ਸਾਧਕ ਪਰਮ ਸਤਿ (ਸਾਰ-ਸ਼ਬਦ) ਦਾ ਸੱਚਾ ਖੋਜੀ ਬਣ ਕੇ ਉਸ ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਉਂਦਾ ਹੈ, ਉਹ ਸੰਤ ਧੰਨ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੋ ਸਤਯ-ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜ ਲੈਂਦਾ ਹੈ, ਉਸਦਾ ਅਮੋਲਕ ਜੀਵਨ ਕਦੇ ਭਟਕ ਕੇ ਵਿਅਰਥ ਨਸ਼ਟ ਨਹੀਂ ਹੁੰਦਾ।',
      en: 'Blessed is that saintly seeker who investigates the Ultimate Truth (Saar-Shabd) and anchors it within. Satguru Kabir Saheb affirms that whoever firmly holds onto the living Word never goes astray nor is their precious human life wasted.'
    },
    wordMeanings: {
      hi: [
        { word: 'खोजी (Khoji)', meaning: 'सत्य का अन्वेषक / शोधक' },
        { word: 'गहि (Gahi)', meaning: 'दृढ़ता से पकड़ना / अंतःकरण में धारण करना' },
        { word: 'बिगोय (Bigoy)', meaning: 'नष्ट होना / अज्ञान में व्यर्थ भटकना' }
      ],
      pb: [
        { word: 'ਖੋਜੀ (Khoji)', meaning: 'ਸੱਚ ਦਾ ਖੋਜੀ / ਅਨਵੇਸ਼ਕ' },
        { word: 'ਗਹਿ (Gahi)', meaning: 'ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜਨਾ / ਧਾਰਨ ਕਰਨਾ' },
        { word: 'ਬਿਗੋਇ (Bigoy)', meaning: 'ਨਸ਼ਟ ਹੋਣਾ / ਭਟਕਣਾ' }
      ],
      en: [
        { word: 'Khoji', meaning: 'Truth-seeker / spiritual investigator' },
        { word: 'Gahi', meaning: 'To grasp firmly / to embody deeply' },
        { word: 'Bigoy', meaning: 'To be ruined / to go astray in delusion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बाहरी दिखावे छोड़कर अपने अंतर्मन में अविनाशी सार-शब्द का सच्चा खोजी बन पाया हूँ?',
      pb: 'ਕੀ ਮੈਂ ਬਾਹਰੀ ਵਿਖਾਵੇ ਛੱਡ ਕੇ ਆਪਣੇ ਅੰਦਰ ਸਾਰ-ਸ਼ਬਦ ਦਾ ਸੱਚਾ ਖੋਜੀ ਬਣ ਸਕਿਆ ਹਾਂ?',
      en: 'Am I moving beyond outer rituals to become a genuine inner seeker of the eternal Word?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन संतों की वाणी का मनन करना और हर विचार को सत्य व विवेक की कसौटी पर परखना।',
      pb: 'ਰੋਜ਼ਾਨਾ ਸੰਤਾਂ ਦੀ ਬਾਣੀ ਦਾ ਚਿੰਤਨ ਕਰਨਾ ਅਤੇ ਹਰ ਵਿਚਾਰ ਨੂੰ ਸੱਚ ਤੇ ਵਿਵੇਕ ਦੀ ਕਸੌਟੀ ਤੇ ਪਰਖਣਾ।',
      en: 'Contemplate the saints’ wisdom daily, testing every thought and action against truth and discernment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मुझे सार-शब्द को दृढ़ता से धारण करने का विवेक और निष्ठा प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਮੈਨੂੰ ਸਾਰ-ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਧਾਰਨ ਕਰਨ ਦਾ ਵਿਵੇਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir Saheb! Bless me with the steadfast discernment to hold firmly to the sacred Word. Saheb Bandagi Saheb!'
    },
    quiz: []
  },
  {
    id: 'shabd-9',
    number: 1109,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ९',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੯',
      en: 'Shabd Ko Ang - 9',
    },
    text: {
      hi: 'सीतलता तब जानिये, समता रहै समाय।\nविष छोड़े निरबिस रहै, सब दिन दूखा जाय।।',
      pb: devanagariToGurmukhi('सीतलता तब जानिये, समता रहै समाय। विष छोड़े निरबिस रहै, सब दिन दूखा जाय।।'),
      en: 'Sitalta tab janiye, samta rahai samay. Vish chhode nirbis rahai, sab din dukha jay..'
    },
    transliteration: 'Sitalta tab janiye, samta rahai samay. Vish chhode nirbis rahai, sab din dukha jay.',
    bhavarth: {
      hi: 'अपने अंदर शीतलता की उपस्थिति तब जानो, जब तन, मन, वचन तथा कर्म समता के आचरण में समाहित हो जाएं। विषय-विकारों के विष को त्यागकर निर्विकार बने रहो।',
      pb: devanagariToGurmukhi('ਸ਼ੀਤਲਤਾ ਉਦੋਂ ਜਾਣੋ ਜਦੋਂ ਮਨ ਵਿੱਚ ਸਮਤਾ ਹੋਵੇ। ਵਿਸ਼ਿਆਂ ਦਾ ਜ਼ਹਿਰ ਛੱਡ ਕੇ ਨਿਰਵਿਕਾਰ ਰਹੋ।'),
      en: 'Know that true inner coolness has arrived when equanimity pervades your being. Abandoning the poison of worldly cravings, remain pure and untainted.'
    },
    wordMeanings: {
      hi: [
        { word: 'समता (Samta)', meaning: 'समानता / समभाव' },
        { word: 'निरबिस (Nirbis)', meaning: 'विष-रहित / विकार-मुक्त' }
      ],
      pb: [
        { word: 'ਸਮਤਾ (Samta)', meaning: 'ਸਮਭਾਵ' },
        { word: 'ਨਿਰਬਿਸ (Nirbis)', meaning: 'ਜ਼ਹਿਰ ਰਹਿਤ' }
      ],
      en: [
        { word: 'Samta', meaning: 'Equanimity' },
        { word: 'Nirbis', meaning: 'Poison-free / pure' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सुख-दुःख में समभाव और शीतलता बनाए रखता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਸੁਖ-ਦੁੱਖ ਵਿੱਚ ਸਮਾਨ ਰਹਿੰਦਾ ਹੈ?'),
      en: 'Does my mind maintain equanimity across pleasure and pain?'
    },
    practicalApplication: {
      hi: 'प्रतिकूल परिस्थितियों में भी शांत और संयमित रहें।',
      pb: devanagariToGurmukhi('ਔਖੇ ਸਮੇਂ ਵੀ ਸ਼ਾਂਤ ਰਹੋ।'),
      en: 'Stay calm and balanced even amidst turbulent life events.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे समता और शीतलता का वरदान दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਮਭਾਵ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bless me with unshakeable equanimity.'
    },
    quiz: []
  },
  {
    id: 'shabd-10',
    number: 1110,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १०',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੦',
      en: 'Shabd Ko Ang - 10',
    },
    text: {
      hi: 'करक गड़न दुरजन बचन, रहै सन्त जन टारि।\nबिजुली परै समुद्र में, कहा सकेगी जारि।।',
      pb: devanagariToGurmukhi('करक गड़न दुरजन बचन, रहै सन्त जन टारि। बिजुली परै समुद्र में, कहा सकेगी जारि।।'),
      en: 'Karak gadan durjan vachan, rahai sant jan tari. Bijuli parai samudra mein, kaha sakegi jari..'
    },
    transliteration: 'Karak gadan durjan vachan, rahai sant jan tari. Bijuli parai samudra mein, kaha sakegi jari.',
    bhavarth: {
      hi: 'अभिमानी दुष्टों के वचन शरीर में घुसकर चुभने वाले कांटे के समान होते हैं, परंतु संत-जन उन्हें सहन कर टाल देते हैं। जैसे समुद्र पर बिजली गिरने से भी समुद्र नहीं जलता, वैसे ही संतों पर दुष्टों के वचनों का प्रभाव नहीं होता।',
      pb: devanagariToGurmukhi('ਦੁਰਜਨਾਂ ਦੇ ਕੌੜੇ ਬਚਨ ਚੁਭਦੇ ਹਨ ਪਰ ਸੰਤ ਉਨ੍ਹਾਂ ਨੂੰ ਟਾਲ ਦਿੰਦੇ ਹਨ। ਜਿਵੇਂ ਸਮੁੰਦਰ ਉੱਤੇ ਬਿਜਲੀ ਡਿੱਗਣ ਨਾਲ ਸਮੁੰਦਰ ਨਹੀਂ ਸੜਦਾ।'),
      en: 'Harsh words of wicked people pierce like thorns, but saints shrug them off. Just as lightning striking the vast ocean cannot burn it.'
    },
    wordMeanings: {
      hi: [
        { word: 'करक गड़न (Karak gadan)', meaning: 'चुभना / पीड़ा देना' },
        { word: 'जारि (Jari)', meaning: 'जलना / जलाना' }
      ],
      pb: [
        { word: 'ਕਦਕ (Karak)', meaning: 'ਚੁਭਣਾ' },
        { word: 'ਜਾਰਿ (Jari)', meaning: 'ਸਾੜਨਾ' }
      ],
      en: [
        { word: 'Karak gadan', meaning: 'Piercing / stinging' },
        { word: 'Jari', meaning: 'Burn' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं दुष्टों की कटु बातों को समुद्र की तरह अपने में समाकर शांत कर लेता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕੌੜੀਆਂ ਗੱਲਾਂ ਨੂੰ ਸਮੁੰਦਰ ਵਾਂਗ ਸਹਾਰ ਲੈਂਦਾ ਹਾਂ?'),
      en: 'Do I absorb harsh criticisms like the ocean absorbs lightning without disturbance?'
    },
    practicalApplication: {
      hi: 'दूसरों की कटु आलोचनाओं से आहत न हों।',
      pb: devanagariToGurmukhi('ਆਲੋਚਨਾ ਤੋਂ ਦੁਖੀ ਨਾ ਹੋਵੋ।'),
      en: 'Do not let external criticism disturb your inner peace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा हृदय विशाल और सहनशील बने। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਹਿਰਦਾ ਵਿਸ਼ਾਲ ਬਣੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Make my heart vast and resilient.'
    },
    quiz: []
  },
  {
    id: 'shabd-11',
    number: 1111,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ११',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੧',
      en: 'Shabd Ko Ang - 11',
    },
    text: {
      hi: 'कुबुधि कमानी चढ़ि रही, कुटिल वचन के तीर।\nभरि भरि मारे कान में, सालै सकल सरीर।।',
      pb: devanagariToGurmukhi('कुबुधि कमानी चढ़ि रही, कुटिल वचन के तीर। भरि भरि मारे कान में, सालै सकल सरीर।।'),
      en: 'Kubudhi kamani chadhib rahi, kutil vachan ke tir. Bhari bhari mare kan mein, salai sakal sarir..'
    },
    transliteration: 'Kubudhi kamani chadhib rahi, kutil vachan ke tir. Bhari bhari mare kan mein, salai sakal sarir.',
    bhavarth: {
      hi: 'अभिमानी-दुर्जन अपनी कुबुद्धि रूपी कमान पर कड़वे वचनों के तीर चढ़ाकर सबके कानों में मारते हैं। उनके वे बाण हृदय में प्रवेश कर सारे शरीर को पीड़ा पहुंचाते हैं।',
      pb: devanagariToGurmukhi('ਮੂਰਖ ਲੋਕ ਕੁਬੁੱਧੀ ਦੀ ਕਮਾਨ ਉੱਤੇ ਕੌੜੇ ਬਚਨਾਂ ਦੇ ਤੀਰ ਚੜ੍ਹਾ ਕੇ ਕੰਨਾਂ ਵਿੱਚ ਮਾਰਦੇ ਹਨ ਜੋ ਸਾਰੇ ਸਰੀਰ ਨੂੰ ਪੀੜਾ ਦਿੰਦੇ ਹਨ।'),
      en: 'The wicked mount arrows of harsh words on the bow of their perverted intellect, shooting them into people’s ears and paining their entire being.'
    },
    wordMeanings: {
      hi: [
        { word: 'कमानी (Kamani)', meaning: 'धनुष की कमान' },
        { word: 'सालै (Salai)', meaning: 'पीड़ा देना / चुभना' }
      ],
      pb: [
        { word: 'ਕਮਾਨੀ (Kamani)', meaning: 'ਕਮਾਨ' },
        { word: 'ਸਾਲੈ (Salai)', meaning: 'ਪੀੜ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Kamani', meaning: 'Bow' },
        { word: 'Salai', meaning: 'Cause pain / pierce' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अनजाने में किसी को कटु वचनों से पीड़ा तो नहीं दे रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕਿਸੇ ਨੂੰ ਕੌੜੇ ਬਚਨਾਂ ਨਾਲ ਦੁੱਖ ਤਾਂ ਨਹੀਂ ਦੇ ਰਿਹਾ?'),
      en: 'Do I ever unintentionally cause pain to others through careless speech?'
    },
    practicalApplication: {
      hi: 'दूसरों के प्रति प्रेमपूर्ण और मीठी वाणी का ही प्रयोग करें।',
      pb: devanagariToGurmukhi('ਸਭ ਨਾਲ ਮਿੱਠੀ ਬੋਲੀ ਬੋਲੋ।'),
      en: 'Always choose words that heal rather than wound.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी कभी किसी को आहत न करे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਨਾ ਦੇਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my words never bring pain to anyone.'
    },
    quiz: []
  },
  {
    id: 'shabd-12',
    number: 1112,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - १२',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੨',
      en: 'Shabd Ko Ang - 12',
    },
    text: {
      hi: 'सोई शब्द निज सार है, जो गुरु दिया बताय।\nबलिहारी वा गुरुन की, सीष बियोग न जाय।।',
      pb: devanagariToGurmukhi('सोई शब्द निज सार है, जो गुरु दिया बताय। बलिहारी वा गुरुन की, सीष बियोग न जाय।।'),
      en: 'Soi shabd nij sar hai, jo guru diya batay. Balihari va gurun ki, sish biyog na jay..'
    },
    transliteration: 'Soi shabd nij sar hai, jo guru diya batay. Balihari va gurun ki, sish biyog na jay.',
    bhavarth: {
      hi: 'संसार में बहुत से शब्द हैं, परंतु जो सार शब्द हमें सद्गुरु के द्वारा प्राप्त होता है, वही सत्य है। उस गुरु की बलिहारी है, जिसकी दी हुई शिक्षा कभी व्यर्थ नहीं जाती।',
      pb: devanagariToGurmukhi('ਵਹੀ ਸ਼ਬਦ ਸਾਰ ਹੈ ਜੋ ਸਤਿਗੁਰੂ ਨੇ ਦੱਸਿਆ ਹੈ। ਉਸ ਗੁਰੂ ਤੋਂ ਬਲਿਹਾਰ ਹਾਂ ਜਿਸ ਦੀ ਸਿੱਖਿਆ ਕਦੇ ਵਿਅਰਥ ਨਹੀਂ ਜਾਂਦੀ।'),
      en: 'That alone is the true essence which the Satguru has revealed. Blessed is the Master whose sacred teachings never leave the soul.'
    },
    wordMeanings: {
      hi: [
        { word: 'निज सार (Nij sar)', meaning: 'अपना वास्तविक सार / सत्य' },
        { word: 'सीष (Sish)', meaning: 'शिक्षा / उपदेश' }
      ],
      pb: [
        { word: 'ਨਿਜ ਸਾਰ (Nij sar)', meaning: 'ਅਸਲ ਸਾਰ' },
        { word: 'ਸੀਖ (Sish)', meaning: 'ਸਿੱਖਿਆ' }
      ],
      en: [
        { word: 'Nij sar', meaning: 'True inner essence' },
        { word: 'Sish', meaning: 'Teaching / instruction' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने गुरु के दिए गए सार शब्द को अपने जीवन का आधार बनाया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਨੂੰ ਜੀਵਨ ਦਾ ਆਧਾਰ ਬਣਾਇਆ ਹੈ?'),
      en: 'Have I made the Master’s teachings the foundational pillar of my life?'
    },
    practicalApplication: {
      hi: 'नियमित रूप से गुरु की दी हुई शिक्षाओं का स्मरण करें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਯਾਦ ਰੱਖੋ।'),
      en: 'Keep the Master’s instructions alive in your daily consciousness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपकी शिक्षा मेरे रोम-रोम में बस जाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪ ਦੀ ਸਿੱਖਿਆ ਮੇਰੇ ਅੰਦਰ ਵੱਸ ਜਾਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May your sacred teaching permeate my entire being.'
    },
    quiz: []
  },
  {
    id: 'shabd-13',
    number: 1113,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १३',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੩',
      en: 'Shabd Ko Ang - 13',
    },
    text: {
      hi: 'सीखे सुनै विचार ले, ताहि शब्द सुख देय।\nबिना समझै शब्द गहै, कछु न लोहा लेय।।',
      pb: devanagariToGurmukhi('सीखे सुनै विचार ले, ताहि शब्द सुख देय। बिना समझै शब्द गहै, कछु न लोहा लेय।।'),
      en: 'Sikhe sunai vichar le, tahi shabd sukh dey. Bina samajhai shabd gahai, kachhu na loha ley..'
    },
    transliteration: 'Sikhe sunai vichar le, tahi shabd sukh dey. Bina samajhai shabd gahai, kachhu na loha ley.',
    bhavarth: {
      hi: 'जो व्यक्ति सत्य के शब्दों को सुनता, सीखता और विचार करता है, उसके लिए शब्द सुखदायी होता है, परंतु जो बिना समझे रटता है, उसे कोई लाभ नहीं मिलता।',
      pb: devanagariToGurmukhi('ਜਿਹੜਾ ਵਿਅਕਤੀ ਸ਼ਬਦ ਨੂੰ ਸੁਣ ਕੇ ਵਿਚਾਰਦਾ ਹੈ, ਉਸ ਨੂੰ ਸੁਖ ਮਿਲਦਾ ਹੈ। ਬਿਨਾਂ ਸਮਝੇ ਰਟਣ ਨਾਲ ਕੋਈ ਲਾਭ ਨਹੀਂ ਹੁੰਦਾ।'),
      en: 'One who listens, learns, and contemplates upon the Word finds true peace. One who merely repeats words without understanding gains nothing.'
    },
    wordMeanings: {
      hi: [
        { word: 'विचार ले (Vichar le)', meaning: 'चिंतन करना' },
        { word: 'गहै (Gahai)', meaning: 'ग्रहण करना' }
      ],
      pb: [
        { word: 'ਵਿਚਾਰ ਲੈ (Vichar le)', meaning: 'ਚਿੰਤਨ ਕਰਨਾ' },
        { word: 'ਗਹੈ (Gahai)', meaning: 'ਫੜਨਾ / ਗ੍ਰਹਿਣ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Vichar le', meaning: 'Contemplate' },
        { word: 'Gahai', meaning: 'Grasp / absorb' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं वचनों को केवल सुनता हूँ या गहराई से विचार करता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਚਨਾਂ ਉੱਤੇ ਗਹਿਰਾਈ ਨਾਲ ਵਿਚਾਰ ਕਰਦਾ ਹਾਂ?'),
      en: 'Do I merely listen to teachings or deeply contemplate their essence?'
    },
    practicalApplication: {
      hi: 'सत्संग के वचनों को विचार कर अपने आचरण में उतारें।',
      pb: devanagariToGurmukhi('ਸਤਸੰਗ ਦੇ ਬਚਨਾਂ ਨੂੰ ਵਿਚਾਰ ਕੇ ਅਪਣਾਓ।'),
      en: 'Reflect thoroughly upon spiritual discourses before applying them.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे ज्ञान की गहरी समझ प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਗਿਆਨ ਦੀ ਡੂੰਘੀ ਸਮਝ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me profound discernment and understanding.'
    },
    quiz: []
  },
  {
    id: 'shabd-14',
    number: 1114,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १४',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੪',
      en: 'Shabd Ko Ang - 14',
    },
    text: {
      hi: 'काल फिरै सिर ऊपरै, जीवहि नजरि न आय।\nकहैं कबीर गुरु शब्द गहि, जम से जीव बचाय।।',
      pb: devanagariToGurmukhi('काल फिरै सिर ऊपरै, जीवहि नजरि न आय। कहैं कबीर गुरु शब्द गहि, जम से जीव बचाय।।'),
      en: 'Kal phirai sir uperai, jivi najari na ay. Kahein Kabir guru shabd gahi, jam se jiv bachay..'
    },
    transliteration: 'Kal phirai sir uperai, jivi najari na ay. Kahein Kabir guru shabd gahi, jam se jiv bachay.',
    bhavarth: {
      hi: 'काल (मृत्यु) सिर के ऊपर मंडराता रहता है, परंतु अज्ञानी जीवों को दिखाई नहीं पड़ता। कबीरजी कहते हैं कि गुरु के शब्द-ज्ञान को पकड़कर जीव मृत्यु के भय और चक्र से बच जाता है।',
      pb: devanagariToGurmukhi('ਮੌਤ ਸਿਰ ਉੱਤੇ ਫਿਰ ਰਹੀ ਹੈ ਪਰ ਜੀਵ ਨੂੰ ਦਿਖਾਈ ਨਹੀਂ ਦਿੰਦੀ। ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਗੁਰੂ ਦਾ ਸ਼ਬਦ ਫੜ ਕੇ ਜੀਵ ਕਾਲ ਤੋਂ ਬਚ ਜਾਂਦਾ ਹੈ।'),
      en: 'Death hovers constantly overhead, yet ignorant souls do not see it. Kabir says: Clinging to the Guru’s Word saves the soul from the clutches of time and death.'
    },
    wordMeanings: {
      hi: [
        { word: 'काल (Kal)', meaning: 'मृत्यु / समय का चक्र' },
        { word: 'जम (Jam)', meaning: 'यमराज / मृत्यु का भय' }
      ],
      pb: [
        { word: 'ਕਾਲ (Kal)', meaning: 'ਮੌਤ' },
        { word: 'ਜਮ (Jam)', meaning: 'ਮੌਤ ਦਾ ਭੈਅ' }
      ],
      en: [
        { word: 'Kal', meaning: 'Death / Time' },
        { word: 'Jam', meaning: 'Agent of death / fear' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं जीवन की नश्वरता को समझकर गुरु के शब्द की शरण में हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੌਤ ਨੂੰ ਯਾਦ ਰੱਖ ਕੇ ਗੁਰੂ ਸ਼ਰਨ ਵਿੱਚ ਹਾਂ?'),
      en: 'Am I mindful of life’s transient nature and safely sheltered in the Guru’s Word?'
    },
    practicalApplication: {
      hi: 'नश्वरता का स्मरण रखते हुए नित्य भजन और सुमिरन करें।',
      pb: devanagariToGurmukhi('ਜੀਵਨ ਦੀ ਨਸ਼ਵਰਤਾ ਨੂੰ ਸਮਝ ਕੇ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Keep the reality of mortal existence in mind while dedicating yourself to prayer.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके शब्द से मेरा काल-भय मिट जाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪ ਦੇ ਸ਼ਬਦ ਨਾਲ ਮੇਰਾ ਡਰ ਮਿਟ ਜਾਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May your Word dissolve all my fear of death.'
    },
    quiz: []
  },
  {
    id: 'shabd-15',
    number: 1115,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १५',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੫',
      en: 'Shabd Ko Ang - 15',
    },
    text: {
      hi: 'जंत्र मंत्र सब झूठ है, मति भरमो जग कोय।\nसार शब्द जानै बिना, कागा हंस न होय।।',
      pb: devanagariToGurmukhi('जंत्र मंत्र सब झूठ है, मति भरमो जग कोय। सार शब्द जानै बिना, कागा हंस न होय।।'),
      en: 'Jantra mantra sab jhooth hai, mati bharmo jag koy. Sar shabd janai bina, kaga hans na hoy..'
    },
    transliteration: 'Jantra mantra sab jhooth hai, mati bharmo jag koy. Sar shabd janai bina, kaga hans na hoy.',
    bhavarth: {
      hi: 'यंत्र-मंत्र एवं टोना-टोटका आदि सब मिथ्या हैं। इनमें मत भरमो। सार शब्द (ब्रह्म ज्ञान) के बिना कभी भी कौआ (विषय-विकारी जीव) हंस (पवित्र संत) नहीं हो सकता।',
      pb: devanagariToGurmukhi('ਯੰਤਰ-ਮੰਤਰ ਸਭ ਝੂਠ ਹਨ, ਭਰਮ ਵਿੱਚ ਨਾ ਪਵੋ। ਸਾਰ ਸ਼ਬਦ ਜਾਣੇ ਬਿਨਾਂ ਕਾਂ ਕਦੇ ਹੰਸ ਨਹੀਂ ਬਣ ਸਕਦਾ।'),
      en: 'All magical rituals and mechanical mantras are false; do not let the world be deluded. Without knowing the Supreme Word, a crow (impure soul) cannot become a swan (pure soul).'
    },
    wordMeanings: {
      hi: [
        { word: 'जंत्र मंत्र (Jantra mantra)', meaning: 'बाहरी कर्मकांड व जादू-टोना' },
        { word: 'कागा हंस (Kaga hans)', meaning: 'विकारी जीव और पवित्र संत' }
      ],
      pb: [
        { word: 'ਜੰਤਰ ਮੰਤਰ (Jantra mantra)', meaning: 'ਕਰਮਕਾਂਡ' },
        { word: 'ਕਾਂ ਹੰਸ (Kaga hans)', meaning: 'ਵਿਕਾਰੀ ਅਤੇ ਸੰਤ' }
      ],
      en: [
        { word: 'Jantra mantra', meaning: 'Ritualistic charms and spells' },
        { word: 'Kaga hans', meaning: 'Crow (impure) and Swan (pure)' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा विश्वास बाहरी आडंबरों में है या भीतर के सार शब्द पर?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਵਿਸ਼ਵਾਸ ਬਾਹਰੀ ਪਖੰਡ ਵਿੱਚ ਹੈ ਜਾਂ ਸਾਰ ਸ਼ਬਦ ਵਿੱਚ?'),
      en: 'Does my faith rest in external rituals or the inner transformative Word?'
    },
    practicalApplication: {
      hi: 'कर्मकांडों से ऊपर उठकर आत्मिक भजन और साधना पर ध्यान दें।',
      pb: devanagariToGurmukhi('ਪਖੰਡਾਂ ਨੂੰ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਸਾਧਨਾ ਕਰੋ।'),
      en: 'Rise above mechanical rituals and focus on authentic inner devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे सारे भरम और पाखंड समाप्त हों। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਸਾਰੇ ਭਰਮ ਮਿਟ ਜਾਣ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Eradicate all illusions and superficial beliefs from my mind.'
    },
    quiz: []
  },
  {
    id: 'shabd-16',
    number: 1116,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १६',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੬',
      en: 'Shabd Ko Ang - 16',
    },
    text: {
      hi: 'कर्म फंद जग फंदिया, जप तप पूजा ध्यान।\nजाहि शब्द ते मुक्ति होय, सो न परा पहिचान।।',
      pb: devanagariToGurmukhi('कर्म फंद जग फंदिया, जप तप पूजा ध्यान। जाहि शब्द ते मुक्ति होय, सो न परा पहिचान।।'),
      en: 'Karma phand jag phandiya, jap tap puja dhyan. Jahi shabd te mukti hoy, so n para pahichan..'
    },
    transliteration: 'Karma phand jag phandiya, jap tap puja dhyan. Jahi shabd te mukti hoy, so n para pahichan.',
    bhavarth: {
      hi: 'संसार कर्म-कामनाओं के फंदे में फंसा है। कोई जप-तप में लगा है, कोई पूजा-ध्यान कर रहा है, परंतु जिस सत्य शब्द से मुक्ति मिलती है, उसे वे पहचान नहीं पाए।',
      pb: devanagariToGurmukhi('ਜਗਤ ਕਰਮਾਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਹੈ। ਕੋਈ ਜਪ-ਤਪ ਕਰ ਰਿਹਾ ਹੈ, ਪਰ ਜਿਸ ਸ਼ਬਦ ਨਾਲ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ, ਉਸ ਨੂੰ ਕੋਈ ਨਹੀਂ ਪਛਾਣ ਸਕਿਆ।'),
      en: 'The world is trapped in the net of ritualistic karma, japa, and penance. But that liberating Word which grants true moksha remains unrecognized by them.'
    },
    wordMeanings: {
      hi: [
        { word: 'कर्म फंद (Karma phand)', meaning: 'कर्मकांडों का जाल' },
        { word: 'पहिचान (Pahichan)', meaning: 'बोध / पहचान' }
      ],
      pb: [
        { word: 'ਕਰਮ ਫੰਦ (Karma phand)', meaning: 'ਕਰਮਾਂ ਦਾ ਜਾਲ' },
        { word: 'ਪਛਾਣ (Pahichan)', meaning: 'ਸੋਝੀ' }
      ],
      en: [
        { word: 'Karma phand', meaning: 'Net of karmic rituals' },
        { word: 'Pahichan', meaning: 'Realization / recognition' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल बाहरी अनुष्ठानों में उलझा हूँ या सत्य शब्द को पा लिया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਾਹਰੀ ਕਰਮਕਾਂਡਾਂ ਵਿੱਚ ਹਾਂ ਜਾਂ ਸੱਚੇ ਸ਼ਬਦ ਨੂੰ ਪਾਇਆ ਹੈ?'),
      en: 'Am I entangled in superficial rituals or have I realized the liberating Word?'
    },
    practicalApplication: {
      hi: 'कर्मकांडों से परे जाकर सतगुरु के ज्ञान को अपने भीतर अनुभव करें।',
      pb: devanagariToGurmukhi('ਕਰਮਕਾਂਡਾਂ ਤੋਂ ਉੱਤੇ ਉੱਠ ਕੇ ਗਿਆਨ ਪ੍ਰਾਪਤ ਕਰੋ।'),
      en: 'Look beyond outward ceremonies to experience the inner realization.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मुक्तिदाता शब्द की पहचान कराएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੁਕਤੀ ਦਾਤਾ ਸ਼ਬਦ ਦੀ ਪਛਾਣ ਕਰਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Reveal to me the true liberating Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-17',
    number: 1117,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १७',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੭',
      en: 'Shabd Ko Ang - 17',
    },
    text: {
      hi: 'शब्द जु ऐसा बोलिये, तन का आपा खोय।\nऔरन को शीतल करे, आपन को सुख होय।।',
      pb: devanagariToGurmukhi('शब्द जु ऐसा बोलिये, तन का आपा खोय। औरन को शीतल करे, आपन को सुख होय।।'),
      en: 'Shabd ju aisa boliye, tan ka aapa khoy. Auran ko shital kare, aapan ko sukh hoy..'
    },
    transliteration: 'Shabd ju aisa boliye, tan ka aapa khoy. Auran ko shital kare, aapan ko sukh hoy.',
    bhavarth: {
      hi: 'अपने अहंकार को त्यागकर ऐसे मधुर शब्द बोलो, जिनसे दूसरों का हृदय भी शीतल हो जाए और अपने आपको भी सुख मिले। दूसरों को सुख देने से स्वयं को सुख मिलता है।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਅਜਿਹੇ ਮਿੱਠੇ ਬੋਲ ਬੋਲੋ ਜੋ ਦੂਜਿਆਂ ਨੂੰ ਵੀ ਸ਼ਾਂਤੀ ਦੇਣ ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਵੀ ਸੁਖ ਮਿਲੇ।'),
      en: 'Speak such words after shedding your ego that they cool and comfort others while filling your own heart with supreme joy.'
    },
    wordMeanings: {
      hi: [
        { word: 'आपा (Aapa)', meaning: 'अहंकार / मैं-पन' },
        { word: 'शीतल (Shital)', meaning: 'शांत / सुखद' }
      ],
      pb: [
        { word: 'ਆਪਾ (Aapa)', meaning: 'ਹੰਕਾਰ' },
        { word: 'ਸ਼ੀਤਲ (Shital)', meaning: 'ਸ਼ਾਂਤ' },
      ],
      en: [
        { word: 'Aapa', meaning: 'Ego / self' },
        { word: 'Shital', meaning: 'Cool / soothing' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी बोलचाल दूसरों के जीवन में शीतलता और आनंद लाती है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਬੋਲੀ ਦੂਜਿਆਂ ਨੂੰ ਸੁਖ ਦਿੰਦੀ ਹੈ?'),
      en: 'Do my words bring comfort and joy to everyone around me?'
    },
    practicalApplication: {
      hi: 'आज दिनभर विनम्रता और मिठास के साथ संवाद करें।',
      pb: devanagariToGurmukhi('ਨਿਮਰਤਾ ਅਤੇ ਮਿਠਾਸ ਨਾਲ ਗੱਲਬਾਤ ਕਰੋ।'),
      en: 'Communicate throughout the day with gentleness and warmth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी में ऐसी मिठास भर दें जो सबको शांति दे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਵਿੱਚ ਮਿਠਾਸ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Imbue my speech with sweetness that brings peace to all.'
    },
    quiz: []
  },
  {
    id: 'shabd-18',
    number: 1118,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १८',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੮',
      en: 'Shabd Ko Ang - 18',
    },
    text: {
      hi: 'जिहि शब्दे दुख ना लगे, सोई शब्द उचार।\nतपत मिटी सीतल भया, सोई शब्द ततसार।।',
      pb: devanagariToGurmukhi('जिहि शब्दे दुख ना लगे, सोई शब्द उचार। तपत मिटी सीतल भया, सोई शब्द ततसार।।'),
      en: 'Jihi shabde dukh na lage, soi shabd uchar. Tapat miti sital bhaya, soi shabd tatsar..'
    },
    transliteration: 'Jihi shabde dukh na lage, soi shabd uchar. Tapat miti sital bhaya, soi shabd tatsar.',
    bhavarth: {
      hi: 'जिस शब्द के बोलने से किसी को कष्ट न हो, वैसे ही शब्द का उच्चारण करो। जिससे तपता हुआ उदास मन भी शीतल हो जाए, वही सत्य का गंभीर न्यायपूर्ण शब्द है।',
      pb: devanagariToGurmukhi('ਜਿਸ ਸ਼ਬਦ ਨਾਲ ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਨਾ ਲੱਗੇ, ਵਹੀ ਬੋਲੋ। ਜਿਸ ਨਾਲ ਤਪਦਾ ਮਨ ਸ਼ਾਂਤ ਹੋ ਜਾਵੇ, ਵਹੀ ਅਸਲ ਤੱਤ-ਸਾਰ ਹੈ।'),
      en: 'Speak only those words that cause no pain to anyone. That which cools a burning, restless mind is the true essence of wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'तपत (Tapat)', meaning: 'जलना / संताप' },
        { word: 'ततसार (Tatsar)', meaning: 'मूल तत्व / सत्य' }
      ],
      pb: [
        { word: 'ਤਪਤ (Tapat)', meaning: 'ਸੰਤਾਪ' },
        { word: 'ਤੱਤਸਾਰ (Tatsar)', meaning: 'ਅਸਲ ਤੱਤ' }
      ],
      en: [
        { word: 'Tapat', meaning: 'Burning anguish / restlessness' },
        { word: 'Tatsar', meaning: 'True essence' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे वचन दूसरों के संताप को मिटाने वाले हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਬਚਨ ਦੂਜਿਆਂ ਦਾ ਦੁੱਖ ਮਿਟਾਉਂਦੇ ਹਨ?'),
      en: 'Do my words soothe and heal the anguish of those in distress?'
    },
    practicalApplication: {
      hi: 'दुखी जनों को सांत्वना देने वाले और प्रेमपूर्ण शब्द कहें।',
      pb: devanagariToGurmukhi('ਦੁਖੀਆਂ ਨੂੰ ਦਿਲਾਸਾ ਦੇਣ ਵਾਲੇ ਬਚਨ ਕਹੋ।'),
      en: 'Offer comforting and healing words to those who suffer.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे शब्द सबके दुखों को हरने वाले हों। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਬਚਨ ਦੁੱਖ ਹਰਨ ਵਾਲੇ ਹੋਣ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my words be a balm for the suffering.'
    },
    quiz: []
  },
  {
    id: 'shabd-19',
    number: 1119,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - १९',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੧੯',
      en: 'Shabd Ko Ang - 19',
    },
    text: {
      hi: 'कागा काको धन हरै, कोयल काको देत।\nमीठा शब्द सुनाय के, जग अपनो करि लेत।।',
      pb: devanagariToGurmukhi('कागा काको धन हरै, कोयल काको देत। मीठा शब्द सुनाय के, जग अपनो करि लेत।।'),
      en: 'Kaga kako dhan harai, koyal kako det. Meetha shabd sunay ke, jag apno kari let..'
    },
    transliteration: 'Kaga kako dhan harai, koyal kako det. Meetha shabd sunay ke, jag apno kari let.',
    bhavarth: {
      hi: 'कौआ किसका धन चुराता है और कोयल किसको क्या देती है? वह केवल मीठे शब्द सुनाकर ही सारे जग को अपना बना लेती है, जबकि कौआ अपनी कड़वी बोली से सबको दुखी करता है।',
      pb: devanagariToGurmukhi('ਕਾਂ ਕਿਸ ਦਾ ਧਨ ਚੁਰਾਉਂਦਾ ਹੈ ਅਤੇ ਕੋਇਲ ਕਿਸ ਨੂੰ ਕੀ ਦਿੰਦੀ ਹੈ? ਮਿੱਠੀ ਬੋਲੀ ਨਾਲ ਕੋਇਲ ਸਭ ਦਾ ਮਿਲ ਲੈਂਦੀ ਹੈ।'),
      en: 'Does the crow steal anyone’s wealth, or does the cuckoo give anyone riches? Yet by singing sweet notes, the cuckoo wins the heart of the entire world.'
    },
    wordMeanings: {
      hi: [
        { word: 'कागा (Kaga)', meaning: 'कौआ' },
        { word: 'कोयल (Koyal)', meaning: 'कोयल / मधुर भाषी' }
      ],
      pb: [
        { word: 'ਕਾਗਾ (Kaga)', meaning: 'ਕਾਂ' },
        { word: 'ਕੋਇਲ (Koyal)', meaning: 'ਕੋਇਲ' }
      ],
      en: [
        { word: 'Kaga', meaning: 'Crow' },
        { word: 'Koyal', meaning: 'Cuckoo' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी मधुर वाणी से सभी को अपना बना रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੀ ਮਿੱਠੀ ਬੋਲੀ ਨਾਲ ਸਭ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹਾਂ?'),
      en: 'Do I win hearts through the gentle sweetness of my speech?'
    },
    practicalApplication: {
      hi: 'कड़वाहट छोड़कर सदा स्नेह और मिठास से बात करें।',
      pb: devanagariToGurmukhi('ਕੌੜਾਪਣ ਛੱਡ ਕੇ ਪਿਆਰ ਨਾਲ ਗੱਲ ਕਰੋ।'),
      en: 'Discard harshness and speak with affectionate sweetness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी को कोयल जैसी मधुरता प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਵਿੱਚ ਮਿਠਾਸ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant my speech the sweetness of the cuckoo.'
    },
    quiz: []
  },
  {
    id: 'shabd-20',
    number: 1120,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - २०',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੦',
      en: 'Shabd Ko Ang - 20',
    },
    text: {
      hi: 'शब्द पाय सुरति राखहि, सो पहुंचै दरबार।\nकहैं कबीर तहां देखिये, बैठा पुरुष हमार।।',
      pb: devanagariToGurmukhi('शब्द पाय सुरति राखहि, सो पहुंचै दरबार। कहैं कबीर तहां देखिये, बैठा पुरुष हमार।।'),
      en: 'Shabd pay surati rakhahi, so pahunchai darbar. Kahein Kabir tahan dekhiye, baitha purush hamar..'
    },
    transliteration: 'Shabd pay surati rakhahi, so pahunchai darbar. Kahein Kabir tahan dekhiye, baitha purush hamar.',
    bhavarth: {
      hi: 'सतगुरु से सच्चे शब्द को पाकर, जिसने अपनी चित्त-वृत्तियों को शांत कर लिया व सुरति को शब्द में रमा लिया, वही अंतर्मुखी होकर परमात्मा के दरबार में पहुंचता है। कबीरजी कहते हैं कि वहां पर हम सबके स्वामी सत्पुरुष के दर्शन होते हैं।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਤੋਂ ਸੱਚਾ ਸ਼ਬਦ ਪਾ ਕੇ ਜਿਸ ਨੇ ਸੁਰਤ ਟਿਕਾ ਲਈ, ਉਹ ਪ੍ਰਭੂ ਦੇ ਦਰਬਾਰ ਤੱਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ। ਉੱਥੇ ਸਤਿਪੁਰਸ਼ ਦੇ ਦਰਸ਼ਨ ਹੁੰਦੇ ਹਨ।'),
      en: 'Having received the true Word from the Master and anchoring consciousness therein, the seeker reaches the divine court and beholds the Supreme Lord.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुरति (Surati)', meaning: 'चित्त की एकाग्रता / ध्यान' },
        { word: 'पुरुष हमार (Purush hamar)', meaning: 'सत्पुरुष / परमात्मा' }
      ],
      pb: [
        { word: 'ਸੁਰਤਿ (Surati)', meaning: 'ਧਿਆਨ / ਇਕਾਗਰਤਾ' },
        { word: 'ਪੁਰਸ਼ ਹਮਾਰ (Purush hamar)', meaning: 'ਸਤਿਪੁਰਸ਼' }
      ],
      en: [
        { word: 'Surati', meaning: 'Conscious attention / focus' },
        { word: 'Purush hamar', meaning: 'Supreme Lord / Satpurush' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी सुरति सतगुरु के शब्द में ली होकर अंतर्मुखी हो रही है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਸੁਰਤ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਹੋ ਰਹੀ ਹੈ?'),
      en: 'Is my consciousness absorbed in the Satguru’s Word?'
    },
    practicalApplication: {
      hi: 'ध्यान और सिमरन के माध्यम से अपनी सुरति को शब्द में जोड़े रखें।',
      pb: devanagariToGurmukhi('ਧਿਆਨ ਅਤੇ ਸਿਮਰਨ ਰਾਹੀਂ ਸੁਰਤ ਨੂੰ ਸ਼ਬਦ ਨਾਲ ਜੋੜੋ।'),
      en: 'Anchor your attention in the inner Word through meditation and remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी सुरति आपके चरणों और शब्द में सदा लीन रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤ ਆਪ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਰਹੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Let my consciousness be forever absorbed in your divine Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-21',
    number: 1121,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २१',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੧',
      en: 'Shabd Ko Ang - 21',
    },
    text: {
      hi: 'शब्द बराबर धन नहीं, जो कोय जानै बोल।\nहीरा तो दामों मिलैं, सब्दहि मोल न तौल।।',
      pb: devanagariToGurmukhi('शब्द बराबर धन नहीं, जो कोय जानै बोल। हीरा तो दामों मिलैं, सब्दहि मोल न तौल।।'),
      en: 'Shabd barabar dhan nahi, jo koy janai bol. Hira to damo milain, sabdahi mol n tol..'
    },
    transliteration: 'Shabd barabar dhan nahi, jo koy janai bol. Hira to damo milain, sabdahi mol n tol.',
    bhavarth: {
      hi: 'यदि कोई बोलने की उचित विधि जानता हो तो शब्द के बराबर संपूर्ण संसार में कोई धन नहीं है। हीरा मूल्यवान पदार्थ होते हुए भी दामों में मिल जाता है, परंतु उत्तम शब्दों का कोई भी मोल-भाव नहीं है।',
      pb: devanagariToGurmukhi('ਜੇ ਕੋਈ ਬੋਲਣਾ ਜਾਣੇ ਤਾਂ ਸ਼ਬਦ ਵਰਗਾ ਕੋਈ ਧਨ ਨਹੀਂ। ਹੀਰਾ ਮਿਲ ਜਾਂਦਾ ਹੈ ਪਰ ਸ਼ਬਦ ਦਾ ਕੋਈ ਮੁੱਲ ਨਹੀਂ।'),
      en: 'There is no wealth equal to the Word if one knows how to speak it. Diamonds have a price, but the true Word is priceless.'
    },
    wordMeanings: {
      hi: [
        { word: 'सब्दहि (Sabdahi)', meaning: 'उत्तम शब्द / नाम' },
        { word: 'मोल न तौल (Mol n tol)', meaning: 'अनमोल' }
      ],
      pb: [
        { word: 'ਸਬਦਹਿ (Sabdahi)', meaning: 'ਸ਼ਬਦ' },
        { word: 'ਮੋਲ (Mol)', meaning: 'ਮੁੱਲ' }
      ],
      en: [
        { word: 'Sabdahi', meaning: 'The Word' },
        { word: 'Mol n tol', meaning: 'Priceless / beyond measure' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी वाणी के अमूल्य धन को पहचानता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੀ ਬੋਲੀ ਦੇ ਮੁੱਲ ਨੂੰ ਸਮਝਦਾ ਹਾਂ?'),
      en: 'Do I recognize the priceless value of true speech?'
    },
    practicalApplication: {
      hi: 'शब्दों का प्रयोग अत्यंत सोच-समझकर और पवित्रता से करें।',
      pb: devanagariToGurmukhi('ਸ਼ਬਦਾਂ ਦੀ ਵਰਤੋਂ ਸੋਚ-ਸਮਝ ਕੇ ਕਰੋ।'),
      en: 'Use words with utmost reverence and mindfulness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अमूल्य शब्द-धन की समझ दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸ਼ਬਦ-ਧਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the supreme wealth of your Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-22',
    number: 1122,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - २२',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੨',
      en: 'Shabd Ko Ang - 22',
    },
    text: {
      hi: 'सन्त सन्तोषी सर्वदा, शब्दहिं भेद विचार।\nसतगुरु के परताप ते, सहज सील मतसार।।',
      pb: devanagariToGurmukhi('सन्त सन्तोषी सर्वदा, शब्दहिं भेद विचार। सतगुरु के परताप ते, सहज सील मतसार।।'),
      en: 'Sant santoshi sarvada, sabdhin bhed vichar. Satguru ke partap te, sahaj seel matsar..'
    },
    transliteration: 'Sant santoshi sarvada, sabdhin bhed vichar. Satguru ke partap te, sahaj seel matsar.',
    bhavarth: {
      hi: 'सत्य के सार-शब्दों का अर्थ-रहस्य विचारकर, साधु-संत सदैव संतोषी भाव में रहते हैं। सद्गुरु की कृपा और आशीर्वाद से वे स्वाभाविक रूप से शील-मत को धारण किए रहते हैं।',
      pb: devanagariToGurmukhi('ਸੰਤ ਹਮੇਸ਼ਾ ਸੰਤੋਖੀ ਰਹਿੰਦੇ ਹਨ ਕਿਉਂਕਿ ਉਹ ਸ਼ਬਦ ਦਾ ਭੇਦ ਜਾਣਦੇ ਹਨ। ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਉਨ੍ਹਾਂ ਦਾ ਸੁਭਾਅ ਸ਼ੀਲ ਹੁੰਦਾ ਹੈ।'),
      en: 'Contemplating the mystery of the Word, saints remain ever content. By the grace of the Satguru, they naturally embody virtuous character.'
    },
    wordMeanings: {
      hi: [
        { word: 'संतोषी (Santoshi)', meaning: 'संतोषी / तृप्त' },
        { word: 'शील मतसार (Seel matsar)', meaning: 'शीलनयुक्त श्रेष्ठ आचरण' }
      ],
      pb: [
        { word: 'ਸੰਤੋਸ਼ੀ (Santoshi)', meaning: 'ਸੰਤੋਖੀ' },
        { word: 'ਸ਼ੀਲ ਮਤਸਾਰ (Seel matsar)', meaning: 'ਸ਼੍ਰੇਸ਼ਟ ਆਚਰਣ' }
      ],
      en: [
        { word: 'Santoshi', meaning: 'Content' },
        { word: 'Seel matsar', meaning: 'Virtuous character' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन गुरु की कृपा से संतोष और शील से परिपूर्ण है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਮਨ ਸੰਤੋਖ ਨਾਲ ਭਰਿਆ ਹੈ?'),
      en: 'Is my heart filled with contentment and virtue through the Master’s grace?'
    },
    practicalApplication: {
      hi: 'जीवन में संतोष और सदाचार का पालन करें।',
      pb: devanagariToGurmukhi('ਜੀਵਨ ਵਿੱਚ ਸੰਤੋਖ ਧਾਰਨ ਕਰੋ।'),
      en: 'Practice contentment and noble conduct in daily life.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सच्चा संतोष और शील प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਤੋਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me abiding peace and contentment.'
    },
    quiz: []
  },
  {
    id: 'shabd-23',
    number: 1123,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २३',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੩',
      en: 'Shabd Ko Ang - 23',
    },
    text: {
      hi: 'जिभ्या जिन बस में करी, तिन बस कियो जहान।\nनहिं तो औगुन ऊपजे, कहि सब संत सुजान।।',
      pb: devanagariToGurmukhi('जिभ्या जिन बस में करी, तिन बस कियो जहान। नहिं तो औगुन ऊपजे, कहि सब संत सुजान।।'),
      en: 'Jibhya jin bas mein kari, tin bas kiyo jahan. Nahin to augun oupje, kahi sab sant sujan..'
    },
    transliteration: 'Jibhya jin bas mein કરી, tin bas kiyo jahan. Nahin to augun oupje, kahi sab sant sujan.',
    bhavarth: {
      hi: 'जिसने अपनी जिह्वा को वश में कर लिया, समझो उसने समस्त संसार को वश में कर लिया। ऐसा न करने से तन-मन में अवगुण उत्पन्न होते हैं, ऐसा सभी विवेकी संत कहते हैं।',
      pb: devanagariToGurmukhi('ਜਿਸ ਨੇ ਜੀਭ ਨੂੰ ਕਾਬੂ ਕਰ ਲਿਆ, ਉਸ ਨੇ ਸਾਰਾ ਜਗਤ ਜਿੱਤ ਲਿਆ। ਜੀਭ ਕਾਬੂ ਨਾ ਹੋਣ ਤੇ ਔਗੁਣ ਪੈਦਾ ਹੁੰਦੇ ਹਨ।'),
      en: 'One who has mastered the tongue has mastered the entire world. Otherwise, countless faults arise, as all wise saints declare.'
    },
    wordMeanings: {
      hi: [
        { word: 'जिभ्या (Jibhya)', meaning: 'जीह्वा / वाणी' },
        { word: 'सुजान (Sujan)', meaning: 'ज्ञानी / विवेकी' }
      ],
      pb: [
        { word: 'ਜਿਭਿਆ (Jibhya)', meaning: 'ਜੀਭ' },
        { word: 'ਸੁਜਾਨ (Sujan)', meaning: 'ਸਿਆਣੇ ਸੰਤ' }
      ],
      en: [
        { word: 'Jibhya', meaning: 'Tongue' },
        { word: 'Sujan', meaning: 'Wise / enlightened' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा अपनी वाणी और जिह्वा पर पूर्ण नियंत्रण है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਆਪਣੀ ਬੋਲੀ ਉੱਤੇ ਕਾਬੂ ਹੈ?'),
      en: 'Do I exercise vigilant self-control over my speech?'
    },
    practicalApplication: {
      hi: 'व्यर्थ या कड़वी बातें बोलने से बचें।',
      pb: devanagariToGurmukhi('ਫਜ਼ੂਲ ਅਤੇ ਕੌੜੀ ਬੋਲੀ ਤੋਂ ਬਚੋ।'),
      en: 'Refrain from idle chatter and harsh remarks.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी जिह्वा को नियंत्रण में रखें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਜੀਭ ਨੂੰ ਕਾਬੂ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guard my tongue from careless words.'
    },
    quiz: []
  },
  {
    id: 'shabd-24',
    number: 1124,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २४',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੪',
      en: 'Shabd Ko Ang - 24',
    },
    text: {
      hi: 'लागी लागी क्या करै, लागत रही लगार।\nलागी तबही जानिये, निकसी जाय दुसार।।',
      pb: devanagariToGurmukhi('लागी लागी क्या करै, लागत रही लगार। लागी तबही जानिये, निकसी जाय दुसार।।'),
      en: 'Lagi lagi kya karai, lagat rahi lagar. Lagi tabhi janiye, nikasi jay dusar..'
    },
    transliteration: 'Lagi lagi kya karai, lagat rahi lagar. Lagi tabhi janiye, nikasi jay dusar.',
    bhavarth: {
      hi: 'इस संसार में पग-पग पर ठोकरें लगती हैं, परंतु गुरु-ज्ञान की सच्ची लगन या चोट तभी सफल समझो, जब अंदर के सारे विकार और द्वैध भाव हमेशा के लिए निकल जाएं।',
      pb: devanagariToGurmukhi('ਭਗਤੀ ਦੀ ਸੱਚੀ ਲਗਨ ਉਦੋਂ ਹੀ ਸਫਲ ਹੈ ਜਦੋਂ ਅੰਦਰੋਂ ਸਾਰੇ ਵਿਕਾਰ ਅਤੇ ਦੁਵਿਧਾ ਬਾਹਰ ਨਿਕਲ ਜਾਵੇ।'),
      en: 'True devotion and spiritual impact are known only when all inner dualities and impurities are completely eradicated.'
    },
    wordMeanings: {
      hi: [
        { word: 'लगार (Lagar)', meaning: 'निरंतर लगना / ठोकर' },
        { word: 'दुसार (Dusar)', meaning: 'द्वैध / विकार' }
      ],
      pb: [
        { word: 'ਲਗਾਰ (Lagar)', meaning: 'ਲਗਾਤਾਰ' },
        { word: 'ਦੁਸਾਰ (Dusar)', meaning: 'ਦੁਵਿਧਾ' }
      ],
      en: [
        { word: 'Lagar', meaning: 'Continuous impact' },
        { word: 'Dusar', meaning: 'Dualism / impurity' }
      ]
    },
    contemplation: {
      hi: 'क्या सतगुरु के ज्ञान से मेरे अंदर के विकार समाप्त हो रहे हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਗਿਆਨ ਨਾਲ ਮੇਰੇ ਵਿਕਾਰ ਮਿਟ ਰਹੇ ਹਨ?'),
      en: 'Are my inner impurities being cleansed by the Master’s wisdom?'
    },
    practicalApplication: {
      hi: 'ज्ञान को आचरण में उतारकर आंतरिक शुद्धि करें।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਨੂੰ ਅਪਣਾ ਕੇ ਅੰਦਰੋਂ ਸ਼ੁੱਧ ਹੋਵੋ।'),
      en: 'Apply teachings practically to achieve deep inner purification.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे सभी आंतरिक विकार नष्ट हों। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਸਾਰੇ ਵਿਕਾਰ ਮਿਟ ਜਾਣ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Purify my inner consciousness completely.'
    },
    quiz: []
  },
  {
    id: 'shabd-25',
    number: 1125,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - २५',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੫',
      en: 'Shabd Ko Ang - 25',
    },
    text: {
      hi: 'हरिजन सोई जानिये, जिव्हा कहैं न मार।\nआठ पहर चितवन रहै, गुरु का ज्ञान विचार।।',
      pb: devanagariToGurmukhi('हरिजन सोई जानिये, जिव्हा कहैं न मार। आठ पहर चितवन रहै, गुरु का ज्ञान विचार।।'),
      en: 'Harijan soi janiye, jivha kahain n mar. Aath pahar chitwan rahai, guru ka gyan vichar..'
    },
    transliteration: 'Harijan soi janiye, jivha kahain n mar. Aath pahar chitwan rahai, guru ka gyan vichar.',
    bhavarth: {
      hi: 'परमात्मा-प्रेमी संतजन उसी को जानो जो अपनी जीभ से कभी किसी को मारने या कष्ट देने की बात नहीं कहता। वह तो आठों पहर सद्गुरु के ज्ञान-विचारों में ही ध्यान लगाए रहता है।',
      pb: devanagariToGurmukhi('ਅਸਲ ਹਰੀਜਨ ਉਹ ਹੈ ਜੋ ਕਦੇ ਕਿਸੇ ਨੂੰ ਮਾਰਨ ਜਾਂ ਦੁੱਖ ਦੇਣ ਦੀ ਗੱਲ ਨਹੀਂ ਕਰਦਾ। ਉਹ ਅੱਠੇ ਪਹਿਰ ਗੁਰੂ ਦੇ ਗਿਆਨ ਵਿੱਚ ਮਗਨ ਰਹਿੰਦਾ ਹੈ।'),
      en: 'Know a true devotee of God as one who never utters cruel words of harm. Day and night, their consciousness remains absorbed in the Guru’s wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'हरिजन (Harijan)', meaning: 'संत / भक्त' },
        { word: 'चितवन (Chitwan)', meaning: 'ध्यान / स्मरण' }
      ],
      pb: [
        { word: 'ਹਰੀਜਨ (Harijan)', meaning: 'ਸੰਤ / ਭਗਤ' },
        { word: 'ਚਿਤਵਨ (Chitwan)', meaning: 'ਧਿਆਨ' }
      ],
      en: [
        { word: 'Harijan', meaning: 'Devotee of God' },
        { word: 'Chitwan', meaning: 'Contemplation / focus' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आचरण एक सच्चे हरिजन की भांति अहिंसक और प्रेमपूर्ण है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਸੁਭਾਅ ਪ੍ਰੇਮ ਭਰਿਆ ਹੈ?'),
      en: 'Does my behavior reflect the gentle, non-violent nature of a true devotee?'
    },
    practicalApplication: {
      hi: 'सभी जीवों से प्रेम और सद्भाव से पेश आएं।',
      pb: devanagariToGurmukhi('ਸਭ ਜੀਵਾਂ ਨਾਲ ਪਿਆਰ ਕਰੋ।'),
      en: 'Treat all living beings with kindness and compassion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सच्चा हरिजन बनाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚਾ ਭਗਤ ਬਣਾਓ। ਸਾਹੇਬ ਬੰदਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Make me a true and devoted seeker.'
    },
    quiz: []
  },
  {
    id: 'shabd-26',
    number: 1126,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २६',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੬',
      en: 'Shabd Ko Ang - 26',
    },
    text: {
      hi: 'टीला टीली ढाहि के, फोरि करै मैदान।\nसमझ सका करता चलै, सोई शब्द निरबान।।',
      pb: devanagariToGurmukhi('टीला टीली ढाहि के, फोरि करै मैदान। समझ सका करता चलै, सोई शब्द निरबान।।'),
      en: 'Teela teeli dhahi ke, phori karai maidan. Samajh saka karta chalai, soi shabd nirban..'
    },
    transliteration: 'Teela teeli dhahi ke, phori karai maidan. Samajh saka karta chalai, soi shabd nirban.',
    bhavarth: {
      hi: 'राग-द्वेष एवं ऊंच-नीच का भेदभाव मिटाकर, अहंकार रूपी टीलों को तोड़-फोड़कर जो जीवन रूपी मैदान को समतल बना देता है, वही मुक्त निर्बन्ध ठोस शब्द-ज्ञान है।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਦੇ ਟਿੱਲਿਆਂ ਨੂੰ ਢਾਹ ਕੇ ਮੈਦਾਨ ਵਾਂਗ ਬਰਾਬਰ ਕਰਨ ਵਾਲਾ ਗਿਆਨ ਹੀ ਮੁਕਤੀਦਾਤਾ ਨਿਰਬਾਣ ਸ਼ਬਦ ਹੈ।'),
      en: 'Demolishing mounds of ego and making the terrain flat by removing prejudices is the true liberating Word.'
    },
    wordMeanings: {
      hi: [
        { word: 'टीला (Teela)', meaning: 'अहंकार के ऊंचे टीले' },
        { word: 'निरबान (Nirban)', meaning: 'निर्वाण / मुक्ति' }
      ],
      pb: [
        { word: 'ਟੀਲਾ (Teela)', meaning: 'ਹੰਕਾਰ ਦੇ ਟਿੱਲੇ' },
        { word: 'ਨਿਰਬਾਣ (Nirban)', meaning: 'ਮੁਕਤੀ' }
      ],
      en: [
        { word: 'Teela', meaning: 'Mounds of ego' },
        { word: 'Nirban', meaning: 'Liberation / Nirvana' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपने भीतर के अहंकार और ऊंच-नीच के भेदभाव को मिटाया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਅੰਦਰੋਂ ਹੰਕਾਰ ਮਿਟਾਇਆ ਹੈ?'),
      en: 'Have I dismantled the mounds of ego and prejudice within myself?'
    },
    practicalApplication: {
      hi: 'समभाव और विनम्रता के साथ सभी को समान समझें।',
      pb: devanagariToGurmukhi('ਸਭ ਨੂੰ ਬਰਾਬਰ ਸਮਝੋ।'),
      en: 'Practice equality and humility toward everyone.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा अहंकार ढाहकर मुझे सहज बनाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਹੰਕਾਰ ਮਿਟਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Flatten my ego and grant me simplicity.'
    },
    quiz: []
  },
  {
    id: 'shabd-27',
    number: 1127,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २७',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੭',
      en: 'Shabd Ko Ang - 27',
    },
    text: {
      hi: 'शब्द दुराया ना दुरै, कहूं जु ढोल बजाय।\nजो जन होवै जौहरी, लेहैं सीस चढ़ाय।।',
      pb: devanagariToGurmukhi('शब्द दुराया ना दुरै, कहूं जु ढोल बजाय। जो जन होवै जौहरी, लेहैं सीस चढ़ाय।।'),
      en: 'Shabd duraya na durai, kahun ju dhol bajay. Jo jan hovai jauhari, lehain siis chadhay..'
    },
    transliteration: 'Shabd duraya na durai, kahun ju dhol bajay. Jo jan hovai jauhari, lehain siis chadhay.',
    bhavarth: {
      hi: 'यथार्थ सत्य शब्द किसी के छिपाने से नहीं छिप सकता। जो विवेकी जौहरी (पारखी) संत होता है, वह उस सत्य शब्द को सादर शीश झुकाकर स्वीकार करता है।',
      pb: devanagariToGurmukhi('ਸੱਚਾ ਸ਼ਬਦ ਛੁਪਾਇਆ ਨਹੀਂ ਛੁਪਦਾ। ਜਿਹੜਾ ਪਾਰਖੂ (ਜੌਹਰੀ) ਹੁੰਦਾ ਹੈ, ਉਹ ਇਸ ਨੂੰ ਸਿਰ ਮੱਥੇ ਲੈਂਦਾ ਹੈ।'),
      en: 'The true Word cannot be concealed, even if proclaimed with beat of drums. The true connoisseur (jauhari) accepts it with deep reverence upon their head.'
    },
    wordMeanings: {
      hi: [
        { word: 'दुराया (Duraya)', meaning: 'छिपाना' },
        { word: 'जौहरी (Jauhari)', meaning: 'पारखी / ज्ञानी' }
      ],
      pb: [
        { word: 'ਦੁਰਾਇਆ (Duraya)', meaning: 'ਛੁਪਾਉਣਾ' },
        { word: 'ਜੌਹਰੀ (Jauhari)', meaning: 'ਪਾਰਖੂ' },
      ],
      en: [
        { word: 'Duraya', meaning: 'Hide / conceal' },
        { word: 'Jauhari', meaning: 'Connoisseur / jewel-tester' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सत्य शब्द की परख करने वाला सच्चा जौहरी हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੱਚੇ ਸ਼ਬਦ ਨੂੰ ਪਰਖਣ ਵਾਲਾ ਹਾਂ?'),
      en: 'Am I a true connoisseur capable of recognizing the genuine jewel of Truth?'
    },
    practicalApplication: {
      hi: 'सत्य ज्ञान को पहचानकर उसे पूर्ण आदर के साथ जीवन में अपनाएं।',
      pb: devanagariToGurmukhi('ਸੱਚੇ ਗਿਆਨ ਨੂੰ ਆਦਰ ਨਾਲ ਅਪਣਾਓ।'),
      en: 'Embrace true spiritual wisdom with utmost reverence.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सत्य की परख करने की बुद्धि दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚ ਦੀ ਪਛਾਣ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the discernment to recognize Truth.'
    },
    quiz: []
  },
  {
    id: 'shabd-28',
    number: 1128,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २८',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੮',
      en: 'Shabd Ko Ang - 28',
    },
    text: {
      hi: 'शब्द शब्द सब कोय कहै, शब्द का करो विचार।\nएक शब्द शीतल करै, एक शब्द दे जार।।',
      pb: devanagariToGurmukhi('शब्द शब्द सब कोय कहै, शब्द का करो विचार। एक शब्द शीतल करै, एक शब्द दे जार।।'),
      en: 'Shabd shabd sab koy kahai, shabd ka karo vichar. Ek shabd shital karai, ek shabd de jar..'
    },
    transliteration: 'Shabd shabd sab koy kahai, shabd ka karo vichar. Ek shabd shital karai, ek shabd de jar.',
    bhavarth: {
      hi: 'शब्द-शब्द तो हर कोई कहता है, परंतु उसके अर्थ पर विचार करना चाहिए। एक शब्द हृदय को शीतल कर देता है और एक शब्द अंतर्मन को जलाकर भस्म कर देता है।',
      pb: devanagariToGurmukhi('ਹਰ ਕੋਈ ਸ਼ਬਦ-ਸ਼ਬਦ ਆਖਦਾ ਹੈ ਪਰ ਵਿਚਾਰ ਕਰੋ। ਇੱਕ ਸ਼ਬਦ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ ਅਤੇ ਇੱਕ ਸ਼ਬਦ ਸਾੜ ਦਿੰਦਾ ਹੈ।'),
      en: 'Everyone speaks of words, but one must contemplate their power. One word brings soothing peace, while another burns the heart to ashes.'
    },
    wordMeanings: {
      hi: [
        { word: 'जार (Jar)', meaning: 'जलाना / संताप देना' },
        { word: 'विचार (Vichar)', meaning: 'गंभीर चिंतन' }
      ],
      pb: [
        { word: 'ਜਾਰ (Jar)', meaning: 'ਸਾੜਨਾ' },
        { word: 'ਵਿਚਾਰ (Vichar)', meaning: 'ਸੋਚ-ਵਿچار' },
      ],
      en: [
        { word: 'Jar', meaning: 'Burn / scorch' },
        { word: 'Vichar', meaning: 'Contemplation' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने बोले जाने वाले शब्दों के प्रभाव के प्रति जागरूक हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਬੋਲੇ ਸ਼ਬਦਾਂ ਪ੍ਰਤੀ ਸੁਚੇਤ ਹਾਂ?'),
      en: 'Am I mindful of the impact of the words I choose to speak?'
    },
    practicalApplication: {
      hi: 'हमेशा दूसरों को शीतलता और शांति देने वाले शब्दों का चयन करें।',
      pb: devanagariToGurmukhi('ਹਮੇਸ਼ਾ ਸ਼ਾਂਤੀ ਦੇਣ ਵਾਲੇ ਸ਼ਬਦ ਬੋਲੋ।'),
      en: 'Always select words that soothe and uplift others.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी से कभी किसी को संताप न मिले। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਨਾ ਦੇਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my words never cause anguish to anyone.'
    },
    quiz: []
  },
  {
    id: 'shabd-29',
    number: 1129,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - २९',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੨੯',
      en: 'Shabd Ko Ang - 29',
    },
    text: {
      hi: 'रैन तिमिर नासत भयो, जबही भानु उगाय।\nसार शब्द के जानते, करम भरम मिटि जाय।।',
      pb: devanagariToGurmukhi('रैन तिमिर नासत भयो, जबही भानु उगाय। सार शब्द के जानते, करम भरम मिटि जाय।।'),
      en: 'Rain timir nasat bhayo, jabhi bhanu ngay. Sar shabd ke jante, karam bharm miti jay..'
    },
    transliteration: 'Rain timir nasat bhayo, jabhi bhanu ngay. Sar shabd ke jante, karam bharm miti jay.',
    bhavarth: {
      hi: 'प्रातःकाल सूर्य के उदय होते ही रात्रि का अंधकार नष्ट हो जाता है। इसी प्रकार सार-शब्द को जानने से सारे कर्म-भ्रम और संशय हमेशा के लिए मिट जाते हैं।',
      pb: devanagariToGurmukhi('ਜਿਵੇਂ ਸੂਰਜ ਚੜ੍ਹਨ ਨਾਲ ਹਨੇਰਾ ਮਿਟ ਜਾਂਦਾ ਹੈ, ਇਵੇਂ ਹੀ ਸਾਰ ਸ਼ਬਦ ਨੂੰ ਜਾਣਨ ਨਾਲ ਸਾਰੇ ਕਰਮ-ਭਰਮ ਮਿਟ ਜਾਂਦੇ ਹਨ।'),
      en: 'Just as night’s darkness vanishes at sunrise, knowing the Supreme Word dispels all karmic illusions and doubts completely.'
    },
    wordMeanings: {
      hi: [
        { word: 'रैन तिमिर (Rain timir)', meaning: 'रात का अंधकार' },
        { word: 'भानु (Bhanu)', meaning: 'सूर्य' }
      ],
      pb: [
        { word: 'ਰੈਨ ਤਿਮਿਰ (Rain timir)', meaning: 'ਰਾਤ ਦਾ ਹਨੇਰਾ' },
        { word: 'ਭਾਨੂ (Bhanu)', meaning: 'ਸੂਰਜ' }
      ],
      en: [
        { word: 'Rain timir', meaning: 'Darkness of night' },
        { word: 'Bhanu', meaning: 'Sun' }
      ]
    },
    contemplation: {
      hi: 'क्या ज्ञान के सूर्य से मेरे जीवन का अज्ञान अंधकार मिट रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਗਿਆਨ ਦੇ ਸੂਰਜ ਨਾਲ ਅੰਧੇਰਾ ਮਿਟ ਰਿਹਾ ਹੈ?'),
      en: 'Is the sun of true knowledge dispelling the darkness of ignorance in my life?'
    },
    practicalApplication: {
      hi: 'सतगुरु के ज्ञान के प्रकाश में अपने जीवन की दिशा तय करें।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਦੇ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਜੀਵਨ ਬਤੀਤ ਕਰੋ।'),
      en: 'Let the light of the Master’s wisdom guide your daily path.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! ज्ञान का प्रकाश मेरे भीतर सदा जगमगाता रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਗਿਆਨ ਦਾ ਪ੍ਰਕਾਸ਼ ਬਣਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦगी ਸਾਹੇਬ!'),
      en: 'O Satguru! Keep the inner light of wisdom ever shining brightly.'
    },
    quiz: []
  },
  {
    id: 'shabd-30',
    number: 1130,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३०',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੦',
      en: 'Shabd Ko Ang - 30',
    },
    text: {
      hi: 'सहज तराजू आनि कै, सब रस देखा तोलि।\nसब रस मांहीं जीभ रस, जु कोय जानै बोलि।।',
      pb: devanagariToGurmukhi('सहज तराजू आनि कै, सब रस देखा तोलि। सब रस मांहीं जीभ रस, जु कोय जानै बोलि।।'),
      en: 'Sahaj taraju ani kai, sab ras dekha toli. Sab ras manhi jibh ras, ju koy janai boli..'
    },
    transliteration: 'Sahaj taraju ani kai, sab ras dekha toli. Sab ras manhi jibh ras, ju koy janai boli.',
    bhavarth: {
      hi: 'हमने सब रसों को सहज ज्ञान की तराजू पर तौलकर देख लिया है। यदि कोई शीतल-मधुर शब्द बोलना जानता हो, तो सब रसों में जीभ का रस (मधुर वाणी) सबसे श्रेष्ठ व भारी होता है।',
      pb: devanagariToGurmukhi('ਅਸੀਂ ਸਾਰੇ ਰਸਾਂ ਨੂੰ ਤੋਲ ਕੇ ਵੇਖ ਲਿਆ ਹੈ। ਜੇ ਕੋਈ ਮਿੱਠਾ ਬੋਲਣਾ ਜਾਣੇ, ਤਾਂ ਜੀਭ ਦਾ ਰਸ (ਮਿੱਠੀ ਬੋਲੀ) ਸਭ ਤੋਂ ਉੱਤਮ ਹੈ।'),
      en: 'We have weighed all worldly pleasures on the scale of wisdom. If one knows how to speak sweetly, the sweetness of the tongue surpasses all other joys.'
    },
    wordMeanings: {
      hi: [
        { word: 'तोलि (Toli)', meaning: 'तोलकर परखना' },
        { word: 'जीभ रस (Jibh ras)', meaning: 'मधुर वाणी का आनंद' }
      ],
      pb: [
        { word: 'ਤੋਲਿ (Toli)', meaning: 'ਤੋਲ ਕੇ ਵੇਖਣਾ' },
        { word: 'ਜੀਭ ਰਸ (Jibh ras)', meaning: 'ਬੋਲੀ ਦਾ ਆਨੰਦ' }
      ],
      en: [
        { word: 'Toli', meaning: 'Weighed / tested' },
        { word: 'Jibh ras', meaning: 'Sweetness of speech' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी मधुर वाणी से दूसरों को आनंदित करता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੀ ਬੋਲੀ ਨਾਲ ਖੁਸ਼ੀ ਦਿੰਦਾ ਹਾਂ?'),
      en: 'Do I share the supreme joy of gentle and loving speech with others?'
    },
    practicalApplication: {
      hi: 'मीठी और हितकारी वाणी का ही निरंतर अभ्यास करें।',
      pb: devanagariToGurmukhi('ਮਿੱਠੀ ਅਤੇ ਹਿੱਤਕਾਰੀ ਬੋਲੀ ਬੋਲੋ।'),
      en: 'Practice speaking sweet and uplifting words consistently.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी में मधुर रस का संचार करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਮਿੱਠੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Infuse my speech with the nectar of divine sweetness.'
    },
    quiz: []
  },
  {
    id: 'shabd-31',
    number: 1131,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३१',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੧',
      en: 'Shabd Ko Ang - 31',
    },
    text: {
      hi: 'मुख आवै सोई कहै, बोलै नहीं विचार।\nहते पराई आतमा, जीभ बांधि तलवार।।',
      pb: devanagariToGurmukhi('मुख आवै सोई कहै, बोलै नहीं विचार। हते पराई आतमा, जीभ बांधि तलवार।।'),
      en: 'Mukh avai soi kahai, bolai nahi vichar. Hate parai atama, jibhh bandhi talwar..'
    },
    transliteration: 'Mukh avai soi kahai, bolai nahi vichar. Hate parai atama, jibhh bandhi talwar.',
    bhavarth: {
      hi: 'कुछ अविवेकी लोग बिना सोचे-विचारें मुंह में जो आता है बोल देते हैं। वे अपनी जीभ पर तलवार बांधकर दूसरों की आत्मा को आहत करते रहते हैं।',
      pb: devanagariToGurmukhi('ਕੁਝ ਲੋਕ ਬਿਨਾਂ ਸੋਚੇ ਜੋ ਮੂੰਹ ਵਿੱਚ ਆਵੇ ਬੋਲ ਦਿੰਦੇ ਹਨ। ਉਹ ਆਪਣੀ ਜੀਭ ਉੱਤੇ ਤਲਵਾਰ ਬੰਨ੍ਹ ਕੇ ਦੂਜਿਆਂ ਦਾ ਦਿਲ ਦੁਖਾਉਂਦੇ ਹਨ।'),
      en: 'Some foolish people speak whatever comes to their mouth without thought. With the sword of a sharp tongue tied to their mouth, they wound the souls of others.'
    },
    wordMeanings: {
      hi: [
        { word: 'हते (Hate)', meaning: 'आहत करना / मारना' },
        { word: 'आतमा (Atama)', meaning: 'हृदय / आत्मा' }
      ],
      pb: [
        { word: 'ਹਤੇ (Hate)', meaning: 'ਜ਼ਖਮੀ ਕਰਨਾ' },
        { word: 'ਆਤਮਾ (Atama)', meaning: 'ਹਿਰਦਾ' }
      ],
      en: [
        { word: 'Hate', meaning: 'Wound / hurt' },
        { word: 'Atama', meaning: 'Heart / soul' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं कभी बिना विचारे बोलकर दूसरों की भावनाओं को ठेस तो नहीं पहुंचाता?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਿਨਾਂ ਸੋਚੇ ਬੋਲ ਕੇ ਕਿਸੇ ਦਾ ਦਿਲ ਤਾਂ ਨਹੀਂ ਦੁਖਾਉਂਦਾ?'),
      en: 'Do I ever hurt others through unthinking and reckless speech?'
    },
    practicalApplication: {
      hi: 'बोलने से पहले हमेशा वचनों के परिणाम पर विचार करें।',
      pb: devanagariToGurmukhi('ਬੋਲਣ ਤੋਂ ਪਹਿਲਾਂ ਹਮੇਸ਼ਾ ਵਿਚਾਰ ਕਰੋ।'),
      en: 'Pause and reflect on the consequences of your words before speaking.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी से कभी किसी को ठेस न लगे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਨਾ ਦੇਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guard my lips so I never wound anyone with my words.'
    },
    quiz: []
  },
  {
    id: 'shabd-32',
    number: 1132,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - ३२',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੨',
      en: 'Shabd Ko Ang - 32',
    },
    text: {
      hi: 'शब्द न करै मुलाहिजा, शब्द फिरै चहुं धार।\nआपा पर जब चीन्हिया, तब गुरु सिष ब्यवहार।।',
      pb: devanagariToGurmukhi('शब्द न करै मुलाहिजा, शब्द फिरै चहुं धार। आपा पर जब चीन्हिया, तब गुरु सिष ब्यवहार।।'),
      en: 'Shabd n karai mulahija, shabd phirai chahun dhar. Aapa par jab chhinhiya, तब guru sish byavahar..'
    },
    transliteration: 'Shabd n karai mulahija, shabd phirai chahun dhar. Aapa par jab chhinhiya, tab guru sish byavahar.',
    bhavarth: {
      hi: 'सत्य का शब्द किसी का लिहाज नहीं करता, वह चारों दिशाओं में स्वतंत्र रूप से प्रवाहित होता है। जब अपने और पराए का भेद मिट जाता है, तब सच्चा गुरु-शिष्य का व्यवहार स्थापित होता है।',
      pb: devanagariToGurmukhi('ਸੱਚ ਦਾ ਸ਼ਬਦ ਕਿਸੇ ਦਾ ਲਿਹਾਜ਼ ਨਹੀਂ ਕਰਦਾ, ਇਹ ਚਾਰੇ ਪਾਸੇ ਫੈਲਦਾ ਹੈ। ਜਦੋਂ ਆਪਣਾ-ਪਰਾਇਆ ਮਿਟ ਜਾਵੇ, ਤਦ ਸੱਚਾ ਗੁਰੂ-ਚੇਲਾ ਸੰਬੰਧ ਬਣਦਾ ਹੈ।'),
      en: 'The Word of Truth shows favor to none and flows freely in all directions. When the distinction of self and other dissolves, true Guru-disciple communion begins.'
    },
    wordMeanings: {
      hi: [
        { word: 'मुलाहिजा (Mulahija)', meaning: 'संकोच / लिहाज' },
        { word: 'आपा पर (Aapa par)', meaning: 'अपना और पराया' }
      ],
      pb: [
        { word: 'ਮੁਲਾਹਿਜਾ (Mulahija)', meaning: 'ਲਿਹਾਜ਼' },
        { word: 'ਆਪਾ ਪਰ (Aapa par)', meaning: 'ਆਪਣਾ-ਪਰਾਇਆ' }
      ],
      en: [
        { word: 'Mulahija', meaning: 'Hesitation / favoritism' },
        { word: 'Aapa par', meaning: 'Self and other' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा समर्पण गुरु के प्रति निष्पक्ष और पूर्ण है?',
      pb: devanagariToGurmukhi('ਕੀ ਗੁਰੂ ਪ੍ਰਤੀ मेरा ਸਮਰਪਣ ਪੂਰਨ ਹੈ?'),
      en: 'Is my surrender to the Master impartial and absolute?'
    },
    practicalApplication: {
      hi: 'गुरु के वचनों को बिना किसी संकोच या पक्षपात के जीवन में उतारें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਨਿਸ਼ਪੱਖ ਹੋ ਕੇ ਅਪਣਾਓ।'),
      en: 'Embrace the Master’s teachings with unbiased and open devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपके शब्द के आगे मेरा अहंकार मिट जाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪ ਦੇ ਸ਼ਬਦ ਅੱਗੇ ਮੇਰਾ ਹੰਕਾਰ ਮਿਟ ਜਾਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my ego dissolve before the majesty of your Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-33',
    number: 1133,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३३',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੩',
      en: 'Shabd Ko Ang - 33',
    },
    text: {
      hi: 'शब्द खोजि मन बस कर, सहज जोग है येह।\nसत्त शब्द निज सार है, यह तो झूठी देह।।',
      pb: devanagariToGurmukhi('शब्द खोजि मन बस कर, सहज जोग है येह। सत्त शब्द निज सार है, यह तो झूठी देह।।'),
      en: 'Shabd khoji man bas kar, sahaj jog hai yeh. Satt shabd nij sar hai, yeh to jhuthi deh..'
    },
    transliteration: 'Shabd khoji man bas kar, sahaj jog hai yeh. Satt shabd nij sar hai, yeh to jhuthi deh.',
    bhavarth: {
      hi: 'सत्य शब्द की खोज कर मन को वश में करना ही सहज योग है। सत्य शब्द ही वास्तविक सार है, जबकि यह शरीर तो नश्वर और नाशवान है।',
      pb: devanagariToGurmukhi('ਸ਼ਬਦ ਨੂੰ ਖੋਜ ਕੇ ਮਨ ਨੂੰ ਕਾਬੂ ਕਰਨਾ ਹੀ ਅਸਲ ਸਹਿਜ ਯੋਗ ਹੈ। ਸੱਚਾ ਸ਼ਬਦ ਹੀ ਸਾਰ ਹੈ, ਸਰੀਰ ਤਾਂ ਨਾਸ਼ਵਾਨ ਹੈ।'),
      en: 'Searching for the true Word and subduing the mind is true Sahaj Yoga. The eternal Word is the true essence; this body is merely fleeting.'
    },
    wordMeanings: {
      hi: [
        { word: 'सहज जोग (Sahaj jog)', meaning: 'स्वाभाविक ध्यान व योग' },
        { word: 'निज सार (Nij sar)', meaning: 'वास्तविक तत्व' }
      ],
      pb: [
        { word: 'ਸਹਿਜ ਜੋਗ (Sahaj jog)', meaning: 'ਸਹਿਜ ਧਿਆਨ' },
        { word: 'ਨਿਜ ਸਾਰ (Nij sar)', meaning: 'ਅਸਲ ਤੱਤ' }
      ],
      en: [
        { word: 'Sahaj jog', meaning: 'Spontaneous union / meditation' },
        { word: 'Nij sar', meaning: 'True inner essence' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं नाशवान शरीर के मोह से ऊपर उठकर सत्य शब्द में ध्यान लगा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਤੋਂ ਉੱਤੇ ਉੱਠ ਕੇ ਸ਼ਬਦ ਵਿੱਚ ਧਿਆਨ ਲਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I rising above attachment to the physical body to meditate on the eternal Word?'
    },
    practicalApplication: {
      hi: 'नियमित रूप से सहज ध्यान और शब्द का अभ्यास करें।',
      pb: devanagariToGurmukhi('ਨਿਯਮਿਤ ਸਹਿਜ ਧਿਆਨ ਕਰੋ।'),
      en: 'Practice meditation upon the inner Word regularly.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा मन आपके सत्य शब्द में लीन रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਮਨ ਆਪ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਰਹੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Keep my mind absorbed eternally in your true Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-34',
    number: 1134,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३४',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੪',
      en: 'Shabd Ko Ang - 34',
    },
    text: {
      hi: 'जिह्वा में अमृत बसै, जो कोइ जानै बोल।\nविष बासुकि का ऊतरे, जिन्हा तनै हिलोल।।',
      pb: devanagariToGurmukhi('जिह्वा में अमृत बसै, जो कोइ जानै बोल। विष बासुकि का ऊतरे, जिन्हा तनै हिलोल।।'),
      en: 'Jihva mein amrit basai, jo koy janai bol. Vish basuki ka utare, jinha tanai hilol..'
    },
    transliteration: 'Jihva mein amrit basai, jo koy janai bol. Vish basuki ka utare, jinha tanai hilol.',
    bhavarth: {
      hi: 'यदि कोई बोलना जानता हो तो जिह्वा में अमृत का वास है। मीठे और शीतल वचनों के प्रभाव से वासुकि नाग जैसे जहरीले और अहंकारी जीवों का विष भी उतर जाता है।',
      pb: devanagariToGurmukhi('ਜੇ ਕੋਈ ਬੋਲਣਾ ਜਾਣੇ ਤਾਂ ਜੀਭ ਵਿੱਚ ਅੰਮ੍ਰਿਤ ਵੱਸਦਾ ਹੈ। ਮਿੱਠੇ ਬੋਲਾਂ ਨਾਲ ਵੱਡੇ ਤੋਂ ਵੱਡੇ ਜ਼ਹਿਰੀਲੇ ਸੁਭਾਅ ਵੀ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੇ ਹਨ।'),
      en: 'If one knows how to speak, nectar dwells upon the tongue. Soothing words can neutralize even the venom of the mighty serpent Vasuki.'
    },
    wordMeanings: {
      hi: [
        { word: 'वासुकि (Basuki)', meaning: 'पौराणिक जहरीला नाग / क्रोधी व्यक्ति' },
        { word: 'हिलोल (Hilol)', meaning: 'लहर / प्रभाव' }
      ],
      pb: [
        { word: 'ਵਾਸੁਕਿ (Basuki)', meaning: 'ਜ਼ਹਿਰੀਲਾ ਸੱਪ' },
        { word: 'ਹਿਲੋਲ (Hilol)', meaning: 'ਪ੍ਰਭਾਵ' }
      ],
      en: [
        { word: 'Basuki', meaning: 'Mythical serpent / venomous ego' },
        { word: 'Hilol', meaning: 'Wave / soothing effect' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी वाणी में क्रोधी स्वभाव को शांत करने की शीतलता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਬੋਲੀ ਗੁੱਸੇ ਨੂੰ ਸ਼ਾਂਤ ਕਰ ਸਕਦੀ ਹੈ?'),
      en: 'Does my speech possess the cooling grace to pacify anger in others?'
    },
    practicalApplication: {
      hi: 'क्रोध के उत्तर में हमेशा शांत और प्रेमपूर्ण वचनों का प्रयोग करें।',
      pb: devanagariToGurmukhi('ਕ੍ਰੋਧ ਦੇ ਜਵਾਬ ਵਿੱਚ ਪਿਆਰ ਨਾਲ ਬੋਲੋ।'),
      en: 'Respond to anger and hostility with calming, gracious words.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी में अमृतमयी शीतलता प्रदान करें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਵਿੱਚ ਅੰਮ੍ਰਿਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Infuse my speech with healing nectar.'
    },
    quiz: []
  },
  {
    id: 'shabd-35',
    number: 1135,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३५',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੫',
      en: 'Shabd Ko Ang - 35',
    },
    text: {
      hi: 'सार शब्द निज जानि के, जिन कीन्ही परतीति।\nकाग कुमत तजि हंस है, चले सु भौजल जीति।।',
      pb: devanagariToGurmukhi('सार शब्द निज जानि के, जिन कीन्ही परतीति। काग कुमत तजि हंस है, चले सु भौजल जीति।।'),
      en: 'Sar shabd nij jani ke, jin kinhi pariti. Kag kumat taji hans hai, chale su bhaujal jiti..'
    },
    transliteration: 'Sar shabd nij jani ke, jin kinhi pariti. Kag kumat taji hans hai, chale su bhaujal jiti.',
    bhavarth: {
      hi: 'सार शब्द को अपना जानकर जिस पर भक्त ने पूर्ण विश्वास (प्रतीत) किया, उसने कौए जैसी कुबुद्धि को त्यागकर हंस जैसी पवित्रता प्राप्त की और भवसागर को जीत लिया।',
      pb: devanagariToGurmukhi('ਸਾਰ ਸ਼ਬਦ ਨੂੰ ਸੱਚਾ ਜਾਣ ਕੇ ਜਿਸ ਨੇ ਸ਼ਰਧਾ ਰੱਖੀ, ਉਸ ਨੇ ਕਾਂ ਵਰਗੀ ਬੁੱਧੀ ਛੱਡ ਕੇ ਹੰਸ ਬਣ ਕੇ ਸੰਸਾਰ ਸਾਗਰ ਨੂੰ ਜਿੱਤ ਲਿਆ।'),
      en: 'Recognizing the Supreme Word and placing full faith in it, the seeker sheds the crow-like mind to become a pure swan, successfully crossing the ocean of existence.'
    },
    wordMeanings: {
      hi: [
        { word: 'परतीति (Pariti)', meaning: 'श्रद्धा / विश्वास' },
        { word: 'भौजल (Bhaujal)', meaning: 'भवसागर / संसार' }
      ],
      pb: [
        { word: 'ਪਰਤੀਤਿ (Pariti)', meaning: 'ਸ਼ਰਧਾ / ਵਿਸ਼ਵਾਸ' },
        { word: 'ਭੌਜਲ (Bhaujal)', meaning: 'ਸੰਸਾਰ ਸਾਗਰ' }
      ],
      en: [
        { word: 'Pariti', meaning: 'Faith / conviction' },
        { word: 'Bhaujal', meaning: 'Ocean of worldly illusion' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा विश्वास सतगुरु के सार शब्द पर अडिग है?',
      pb: devanagariToGurmukhi('ਕੀ मेरा ਵਿਸ਼ਵਾਸ ਸਾਰ ਸ਼ਬਦ ਉੱਤੇ ਪੱਕਾ ਹੈ?'),
      en: 'Is my faith in the Satguru’s liberating Word unshakeable?'
    },
    practicalApplication: {
      hi: 'पूर्ण श्रद्धा के साथ नाम सिमरन और सत्संग में जीवन बिताएं।',
      pb: devanagariToGurmukhi('ਪੂਰੀ ਸ਼ਰਧਾ ਨਾਲ ਸਿमरਨ ਕਰੋ।'),
      en: 'Devote your life to remembrance and practice with unwavering faith.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा विश्वास आपके चरणों में सदा अटल रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਵਿਸ਼ਵਾਸ ਅਟਲ ਰਹੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Keep my faith steadfast at your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'shabd-36',
    number: 1136,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३६',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੬',
      en: 'Shabd Ko Ang - 36',
    },
    text: {
      hi: 'शब्द सम्हारे बोलिये, शब्द के हाथ न पांव।\nएक शब्द औषधि करे, एक शब्द करे घाव।।',
      pb: devanagariToGurmukhi('शब्द सम्हारे बोलिये, शब्द के हाथ न पांव। एक शब्द औषधि करे, एक शब्द करे घाव।।'),
      en: 'Shabd samhare boliye, shabd ke hath n paon. Ek shabd aushadhi kare, ek shabd kare ghav..'
    },
    transliteration: 'Shabd samhare boliye, shabd ke hath n paon. Ek shabd aushadhi kare, ek shabd kare ghav.',
    bhavarth: {
      hi: 'शब्दों को बहुत संभालकर बोलना चाहिए, क्योंकि शब्दों के हाथ-पांव नहीं होते। एक मधुर शब्द घाव पर औषधि का काम करता है और एक कठोर शब्द गहरा घाव बना देता है।',
      pb: devanagariToGurmukhi('ਸ਼ਬਦ ਸੋਚ-ਸਮਝ ਕੇ ਬੋਲੋ। ਇੱਕ ਸ਼ਬਦ ਦਵਾਈ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਇੱਕ ਸ਼ਬਦ ਗੰਭੀਰ ਜ਼ਖ਼ਮ ਦੇ ਦਿੰਦਾ ਹੈ।'),
      en: 'Choose your words with great care, for words have no hands or feet. One word acts as healing medicine, while another inflicts a deep wound.'
    },
    wordMeanings: {
      hi: [
        { word: 'सम्हारे (Samhare)', meaning: 'संभलकर / सोच-समझकर' },
        { word: 'औषधि (Aushadhi)', meaning: 'दवा / मरहम' }
      ],
      pb: [
        { word: 'ਸੰਭਾਲ ਕੇ (Samhal ke)', meaning: 'ਸੋਚ ਕੇ' },
        { word: 'ਔਸ਼ਧੀ (Aushadhi)', meaning: 'ਦਵਾਈ' }
      ],
      en: [
        { word: 'Samhare', meaning: 'Carefully / mindfully' },
        { word: 'Aushadhi', meaning: 'Medicine / balm' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने वचनों को औषधि की तरह ही उपयोग करता हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਬੋਲ ਦਵਾਈ ਵਾਂਗ ਕੰਮ ਕਰਦੇ ਹਨ?'),
      en: 'Do I use my words as a healing balm rather than a weapon?'
    },
    practicalApplication: {
      hi: 'हमेशा दूसरों के दिलों को जोड़ने वाले और राहत देने वाले शब्द बोलें।',
      pb: devanagariToGurmukhi('ਦਿਲਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੇ ਸ਼ਬਦ ਬੋਲੋ।'),
      en: 'Always speak words that heal, reconcile, and uplift.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी वाणी को मरहम और औषधि बनाएं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਬੋਲੀ ਨੂੰ ਮਰਮ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Make my speech a healing balm for all.'
    },
    quiz: []
  },
  {
    id: 'shabd-37',
    number: 1137,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - ३७',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੭',
      en: 'Shabd Ko Ang - 37',
    },
    text: {
      hi: 'शब्द गुरु का शब्द है, काया का गुरु काय।\nभक्ति करै नित शब्द की, सतगुरु यौं समुझाय।।',
      pb: devanagariToGurmukhi('शब्द गुरु का शब्द है, काया का गुरु काय। भक्ति करै नित शब्द की, सतगुरु यौं समुझाय।।'),
      en: 'Shabd guru ka shabd hai, kaya ka guru kay. Bhakti karai nit shabd ki, satguru yon samujhay..'
    },
    transliteration: 'Shabd guru ka shabd hai, kaya ka guru kay. Bhakti karai nit shabd की, satguru yon samujhay.',
    bhavarth: {
      hi: 'सत्य शब्द ही असली गुरु का रूप है, जबकि शरीर का गुरु भौतिक शरीर है। सद्गुरु समझाते हैं कि नित्य प्रति उस अविनाशी शब्द की ही भक्ति करो, जिससे उद्धार हो सके।',
      pb: devanagariToGurmukhi('ਸੱਚਾ ਸ਼ਬਦ ਹੀ ਗੁਰੂ ਹੈ। ਸਤਿਗੁਰੂ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਨਿੱਤ ਦਿਨ ਉਸੇ ਅਵਿਨਾਸ਼ੀ ਸ਼ਬਦ ਦੀ ਭਗਤੀ ਕਰੋ।'),
      en: 'The Word alone is the true Guru, while the physical body has a bodily teacher. The Satguru instructs us to engage daily in devotion to the eternal Word.'
    },
    wordMeanings: {
      hi: [
        { word: 'काया का गुरु (Kaya ka guru)', meaning: 'भौतिक शरीर या देह-अभिमान' },
        { word: 'नित शब्द (Nit shabd)', meaning: 'निरंतर नाम-भजन' }
      ],
      pb: [
        { word: 'ਕਾਇਆ ਕਾ ਗੁਰੂ (Kaya ka guru)', meaning: 'ਸਰੀਰਕ ਗੁਰੂ' },
        { word: 'ਨਿੱਤ ਸ਼ਬਦ (Nit shabd)', meaning: 'ਨਿਰੰਤਰ ਨਾਮ' }
      ],
      en: [
        { word: 'Kaya ka guru', meaning: 'Physical body teacher' },
        { word: 'Nit shabd', meaning: 'Constant inner Word' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा ध्यान देह से उठकर आंतरिक शब्द-भक्ति में लगा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਧਿਆਨ ਸਰੀਰ ਤੋਂ ਉੱਤੇ ਉੱਠ ਕੇ ਸ਼ਬਦ ਵਿੱਚ ਹੈ?'),
      en: 'Has my attention risen above the physical body to absorb in inner Word-devotion?'
    },
    practicalApplication: {
      hi: 'देह-अभिमान छोड़कर निरंतर शब्द-सुमिरन में जीवन बिताएं।',
      pb: devanagariToGurmukhi('ਸਰੀਰਕ ਅਭਿਮਾਨ ਛੱਡ ਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Relinquish body-identification and immerse yourself in constant remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी निष्ठा आपके पावन शब्द में सदा बनी रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸ਼ਰਧਾ ਸ਼ਬਦ ਵਿੱਚ ਬਣੀ ਰਹੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Keep my devotion anchored forever in your sacred Word.'
    },
    quiz: []
  },
  {
    id: 'shabd-38',
    number: 1138,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'शब्द को अंग - ३८',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੮',
      en: 'Shabd Ko Ang - 38',
    },
    text: {
      hi: 'शब्द उपदेस जु मैं कहुं, जु कोय मानै संत।\nकहैं कबीर विचार के, ताहि मिलावौं कंत।।',
      pb: devanagariToGurmukhi('शब्द उपदेस जु मैं कहुं, जु कोय मानै संत। कहैं कबीर विचार के, ताहि मिलावौं कंत।।'),
      en: 'Shabd updes ju main kahun, ju koy manai sant. Kahein Kabir vichar ke, tahi milavoun kant..'
    },
    transliteration: 'Shabd updes ju main kahun, ju koy manai sant. Kahein Kabir vichar ke, tahi milavoun kant.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जिस परम सत्य के गंभीर शब्द-ज्ञान का उपदेश मैं देता हूं, यदि उसे कोई संत-भक्त स्वीकार कर आचरण करे, तो मैं उसे उसके प्रियतम परमात्मा (कंत) से मिला देता हूं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜਿਹੜਾ ਸੰਤ ਮੇਰੇ ਇਸ ਸ਼ਬਦ ਉਪਦੇਸ਼ ਨੂੰ ਮੰਨ ਕੇ ਆਚਰਣ ਕਰੇ, ਮੈਂ ਉਸ ਨੂੰ ਪਰਮਾਤਮਾ (ਕੰਤ) ਨਾਲ ਮਿਲਾ ਦਿੰਦਾ ਹਾਂ।'),
      en: 'Kabir declares: Whichever sincere seeker accepts and lives by this profound Word-instruction, I shall unite them with their Supreme Beloved Lord.'
    },
    wordMeanings: {
      hi: [
        { word: 'संत (Sant)', meaning: 'सत्य का आचरण करने वाला' },
        { word: 'कंत (Kant)', meaning: 'प्रियतम / परमात्मा' }
      ],
      pb: [
        { word: 'ਸੰਤ (Sant)', meaning: 'ਭਗਤ' },
        { word: 'ਕੰਤ (Kant)', meaning: 'ਪ੍ਰਭੂ ਪਤੀ' }
      ],
      en: [
        { word: 'Sant', meaning: 'True seeker / saint' },
        { word: 'Kant', meaning: 'Beloved Lord' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु के उपदेश को पूर्ण निष्ठा से अपने जीवन में उतार रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਨੂੰ ਪੂਰੀ ਸ਼ਰਧਾ ਨਾਲ ਮੰਨਦਾ ਹਾਂ?'),
      en: 'Am I faithfully living out the Satguru’s instructions in my daily journey?'
    },
    practicalApplication: {
      hi: 'सतगुरु के वचनों को शिरोधार्य कर पूर्ण समर्पण के साथ साधना करें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਸਿਰ ਮੱਥੇ ਮੰਨ ਕੇ ਸਾਧਨਾ ਕਰੋ।'),
      en: 'Cherish the Master’s words as supreme guidance and practice devotedly.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपका उपदेश मेरा मार्गदर्शक बने और मुझे प्रियतम से मिलाए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪ ਦਾ ਉਪਦੇਸ਼ ਮੈਨੂੰ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾਵੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May your divine instruction unite my soul with the Beloved.'
    },
    quiz: []
  },
  {
    id: 'shabd-39',
    number: 1139,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ३९',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੩੯',
      en: 'Shabd Ko Ang - 39',
    },
    text: {
      hi: 'बोलै बोल विचार के, बैठे ठौर संभारि।\nकहैं कबीर ता दास को, कबहु न आवै हारि।।',
      pb: devanagariToGurmukhi('बोलै बोल विचार के, बैठे ठौर संभारि। कहैं कबीर ता दास को, कबहु न आवै हारि।।'),
      en: 'Bolai bol vichar ke, baithe thour sambhari. Kahein Kabir ta das ko, kabahu n avai hari..'
    },
    transliteration: 'Bolai bol vichar ke, baithe thour sambhari. Kahein Kabir ta das ko, kabahu n avai hari.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जो वाणी का महत्त्व जानता है, समयानुसार सोच-विचारकर बोलता है और सूझ-बूझ से संभलकर आचरण करता है, ऐसा दास-भक्त कभी किसी से नहीं हार सकता।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜਿਹੜਾ ਵਿਅਕਤੀ ਸੋਚ-ਸਮਝ ਕੇ ਬੋਲਦਾ ਹੈ ਅਤੇ ਮਰਿਆਦਾ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ, ਉਹ ਕਦੇ ਹਾਰਦਾ ਨਹੀਂ।'),
      en: 'Kabir says: One who speaks with careful reflection and maintains wise decorum in all places never experiences defeat in life.'
    },
    wordMeanings: {
      hi: [
        { word: 'ठौर संभारि (Thour sambhari)', meaning: 'उचित स्थान व मर्यादा का ध्यान रखना' },
        { word: 'हारि (Hari)', meaning: 'पराजय / असफलता' }
      ],
      pb: [
        { word: 'ਸੰਭਲ ਕੇ (Sambhal ke)', meaning: 'ਮਰਿਆਦਾ ਵਿੱਚ ਰਹਿ ਕੇ' },
        { word: 'ਹਾਰਿ (Hari)', meaning: 'ਹਾਰ' }
      ],
      en: [
        { word: 'Thour sambhari', meaning: 'Maintaining proper decorum' },
        { word: 'Hari', meaning: 'Defeat / failure' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आचरण और संवाद संयमित और विवेकपूर्ण है?',
      pb: devanagariToGurmukhi('ਕੀ मेरा ਬੋਲਣਾ ਅਤੇ ਵਿਹਾਰ ਸੰਜਮ ਵਾਲਾ ਹੈ?'),
      en: 'Is my behavior and communication tempered with wisdom and restraint?'
    },
    practicalApplication: {
      hi: 'हर परिस्थिति में सोच-समझकर शालीनता के साथ आचरण करें।',
      pb: devanagariToGurmukhi('ਹਰ ਹਾਲਤ ਵਿੱਚ ਸੰਜਮ ਅਤੇ ਸ਼ਾਲੀਨਤਾ ਰੱਖੋ।'),
      en: 'Maintain grace, dignity, and mindfulness in all circumstances.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे विवेकपूर्ण वाणी और संयमित स्वभाव दें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਿਵੇਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me discerning speech and a balanced temperament.'
    },
    quiz: []
  },
  {
    id: 'shabd-40',
    number: 1140,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'शब्द को अंग - ४०',
      pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ - ੪੦',
      en: 'Shabd Ko Ang - 40',
    },
    text: {
      hi: 'एक शब्द सुख खानि है, एक शब्द दुख रासि।\nएक शब्द बन्धन कटै, एक शब्द गल फांसि।।',
      pb: devanagariToGurmukhi('एक शब्द सुख खानि है, एक शब्द दुख रासि। एक शब्द बन्धन कटै, एक शब्द गल फांसि।।'),
      en: 'Ek shabd sukh khani hai, ek shabd dukh rasi. Ek shabd bandhan katai, ek shabd gal phansi..'
    },
    transliteration: 'Ek shabd sukh khani hai, ek shabd dukh rasi. Ek shabd bandhan katai, ek shabd gal phansi.',
    bhavarth: {
      hi: 'स्नेह और समता का एक शब्द सभी सुखों का भंडार है, तथा कटुता का एक शब्द दुखों का ढेर है। सत्य-ज्ञान का ठोस शब्द सभी सांसारिक बंधन काट देता है, और कठोर शब्द गले की फांसी बन जाता है।',
      pb: devanagariToGurmukhi('ਇੱਕ ਸ਼ਬਦ ਸੁੱਖਾਂ ਦੀ ਖਾਣ ਹੈ ਅਤੇ ਇੱਕ ਸ਼ਬਦ ਦੁੱਖਾਂ ਦਾ ਪਹਾੜ ਹੈ। ਸੱਚਾ ਸ਼ਬਦ ਬੰਧਨ ਕੱਟਦਾ ਹੈ ਅਤੇ ਕੌੜਾ ਸ਼ਬਦ ਗਲ ਦੀ ਫਾਹੀ ਬਣਦਾ ਹੈ।'),
      en: 'One word is a mine of happiness, while another is a heap of sorrow. The word of Truth cuts all worldly bonds, whereas harsh speech becomes a noose around the neck.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुख खानि (Sukh khani)', meaning: 'सुखों की खान / खजाना' },
        { word: 'गल फांसि (Gal phansi)', meaning: 'गले की फांसी / विनाशकारी बंधन' }
      ],
      pb: [
        { word: 'ਸੁੱਖ ਖਾਨਿ (Sukh khani)', meaning: 'ਸੁੱਖਾਂ ਦਾ ਖਜ਼ਾਨਾ' },
        { word: 'ਗਲ ਫਾਸੀ (Gal phansi)', meaning: 'ਗਲ ਦੀ ਫਾਹੀ' }
      ],
      en: [
        { word: 'Sukh khani', meaning: 'Mine of happiness' },
        { word: 'Gal phansi', meaning: 'Noose around the neck' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे शब्द मुक्ति और प्रेम का संदेश देते हैं या बंधन का?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਸ਼ਬਦ ਮੁਕਤੀ ਦਿੰਦੇ ਹਨ ਜਾਂ ਬੰਧਨ?'),
      en: 'Do my words liberate through love or bind through harshness?'
    },
    practicalApplication: {
      hi: 'हमेशा प्रेम, दया और सत्य के मुक्तिप्रद शब्दों का ही चयन करें।',
      pb: devanagariToGurmukhi('ਹਮੇਸ਼ਾ ਪ੍ਰੇਮ ਅਤੇ ਸੱਚ ਦੇ ਸ਼ਬਦ ਬੋਲੋ।'),
      en: 'Always choose liberating words rooted in love, truth, and compassion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे शब्द सबके लिए मुक्ति का मार्ग बनें। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਸ਼ਬਦ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਬਣਨ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! May my words be a vehicle of liberation for all.'
    },
    quiz: []
  }
];

