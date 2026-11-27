import { GranthVerse } from './granthTypes';
import { devanagariToGurmukhi } from '../../services/transliteration';

export const SAKHI_SANGRAH_ANG_8_VERSES: GranthVerse[] = [
  {
    id: 'ang-8-v1',
    type: 'sakhi',
    lines: {
      hi: [
        'मांगन मरण समान है, तोहि दई मैं सीख।',
        'कहैं कबीर समुझाय के, मति कोई मांगै भीख।।'
      ],
      pb: [
        devanagariToGurmukhi('मांगन मरण समान है, तोहि दई मैं सीख।'),
        devanagariToGurmukhi('कहैं कबीर समुझाय के, मति कोई मांगै भीख।।')
      ],
      en: [
        'Maangan maran samaan hai, tohi daee main seekh.',
        'Kahain kabeer samujhaay ke, mati koee maangai bheekh.'
      ]
    },
    bhavarth: {
      hi: 'मांगना या दूसरों के सामने हाथ फैलाना मृत्यु के समान है। यह मैं तुम्हें शिक्षा दे रहा हूं। सतगुरु कबीर साहेब फरमाते हैं कि तुम सीख समझ लो और कभी भी किसी से भीख न मांगो, अर्थात जो भीख मांगता है, वह बहुत ही अधम कार्य करता है।',
      pb: devanagariToGurmukhi('मांगना या दूसरों के सामने हाथ फैलाना मृत्यु के समान है। सतगुरु कबीर साहेब फरमाते हैं कि तुम सीख समझ लो और कभी भी किसी से भीख न मांगो।'),
      en: 'Begging or extending one’s hand in entreaty before others is equivalent to spiritual death. Kabir imparts this wise counsel: understand this truth and never resort to begging.'
    }
  },
  {
    id: 'ang-8-v2',
    type: 'sakhi',
    lines: {
      hi: [
        'अनमांगा उत्तम कहा, मध्यम मांगि जो लेय।।',
        'कहैं कबीर निकृष्टि सो, पर घर धरना देय।।'
      ],
      pb: [
        devanagariToGurmukhi('अनमांगा उत्तम कहा, मध्यम मांगि जो लेय।।'),
        devanagariToGurmukhi('कहैं कबीर निकृष्टि सो, पर घर धरना देय।।')
      ],
      en: [
        'Anamaanga uttam kaha, madhyam maangi jo ley.',
        'Kahain kabeer nikrishti so, par ghar dharna dey.'
      ]
    },
    bhavarth: {
      hi: 'बिना मांगे ही यदि मिल जाए, तो वह सर्वोत्तम है, परंतु यदि मांगने पर मिलता है, तो वह मध्यम श्रेणी की बात है। सतगुरु कबीर साहेब फरमाते हैं कि यदि किसी के घर जाकर धरना देकर हठपूर्वक मांगा जाए तो यह अधम (महापाप) है। यह बहुत ही हीनता की बात है।',
      pb: devanagariToGurmukhi('बिना मांगे ही यदि मिल जाए तो वह सर्वोत्तम है, परंतु मांगने पर मिले तो मध्यम है। यदि किसी के घर धरना देकर हठपूर्वक मांगा जाए तो वह नीच कार्य है।'),
      en: 'That which comes unsolicited is highest and purest; that which comes upon asking is mediocre; but demanding or coercing at another’s doorstep is the lowest and most despicable.'
    }
  },
  {
    id: 'ang-8-v3',
    type: 'sakhi',
    lines: {
      hi: [
        'सहज मिलै सो दूध है, मांगि मिलै सो पानि।',
        'कहैं कबीर वह रक्त है, जामें ऐंचातानि।।'
      ],
      pb: [
        devanagariToGurmukhi('सहज मिलै सो दूध है, मांगि मिलै सो पानि।'),
        devanagariToGurmukhi('कहैं कबीर वह रक्त है, जामें ऐंचातानि।।')
      ],
      en: [
        'Sahaj milai so doodh hai, maangi milai so paani.',
        'Kahain kabeer vah rakt hai, jaamen aainchaataani.'
      ]
    },
    bhavarth: {
      hi: 'जो बिना मांगे सहज भाव से मिल जाए, वह तो दूध के समान सर्वोत्तम है, परंतु जो मांगने पर मिले, वह पानी के समान है, अर्थात वह मध्यम है। सतगुरु कबीर साहेब फरमाते हैं कि वह तो रक्त के समान है, जो खींचातानी से मिले, किसी को कष्ट देकर या हटपूर्वक मिले।',
      pb: devanagariToGurmukhi('जो बिना मांगे सहज भाव से मिले वह दूध के समान है, जो मांगने पर मिले वह पानी के समान है, और जो खींचातानी व कष्ट से मिले वह रक्त के समान है।'),
      en: 'What comes naturally without asking is like nourishing milk; what comes upon asking is like plain water; but what comes through pressure and struggle is like blood.'
    }
  },
  {
    id: 'ang-8-v4',
    type: 'sakhi',
    lines: {
      hi: [
        'उदर समाता मांग ले, ताको नाहिं दोष।',
        'कहैं कबीर अधिका गहै, ताकी गति न मोष।।'
      ],
      pb: [
        devanagariToGurmukhi('उदर समाता मांग ले, ताको नाहिं दोष।'),
        devanagariToGurmukhi('कहैं कबीर अधिका गहै, ताकी गति न मोष।।')
      ],
      en: [
        'Udar samaata maang ley, taako naahin dosh.',
        'Kahain kabeer adhika gahai, taakee gati na mosh.'
      ]
    },
    bhavarth: {
      hi: 'साधू यदि उदर-पूर्ति के लिए मांगता है, तो उसका दोष नहीं लगता। सतगुरु कबीर साहेब फरमाते हैं कि मांगकर संग्रह करने वाले की गति नहीं होती, अर्थात उसे मोक्ष की प्राप्ति नहीं हो सकती।',
      pb: devanagariToGurmukhi('यदि साधु केवल उदर-पूर्ति के लिए भिक्षा मांगता है तो उसका दोष नहीं है। परंतु मांगकर संग्रह करने वाले की सद्गति या मुक्ति नहीं हो सकती।'),
      en: 'A mendicant asking solely to satisfy basic hunger incurs no fault. But Kabir warns that one who begs to hoard and accumulate wealth can never attain spiritual liberation.'
    }
  },
  {
    id: 'ang-8-v5',
    type: 'sakhi',
    lines: {
      hi: [
        'आब गया आदर गया, नैनन गया सनेह।',
        'यह तीनों तबही गये, जबहिं कहा कछु देह ।।'
      ],
      pb: [
        devanagariToGurmukhi('आब गया आदर गया, नैनन गया सनेह।'),
        devanagariToGurmukhi('यह तीनों तबही गये, जबहिं कहा कछु देह ।।')
      ],
      en: [
        'Aab gaya aadar gaya, nainan gaya saneh.',
        'Yah teenon tabhee gaye, jabahin kaha kachhu dey.'
      ]
    },
    bhavarth: {
      hi: 'अपनी शोभा मर्यादा चली गई, मान-सम्मान भी गया और आंखों से प्रेम भी चला गया। ये तीनों तभी गए जब कहा कि कुछ दे, अर्थात जैसे ही किसी से कुछ मांगने का आग्रह या निवेदन करते हैं, तो अपनी दृष्टि में भी हीनता का अनुभव करते हैं और दूसरों की दृष्टि में भी, अतः ‘भिक्षा मांगना\' त्याज्य है।',
      pb: devanagariToGurmukhi('आदर-सम्मान, गरिमा और स्नेहमयी दृष्टि - ये तीनों उसी क्षण नष्ट हो जाते हैं जब कोई किसी के आगे मांगने का हाथ फैलाता है।'),
      en: 'Dignity, honor, and affectionate regard vanish the very moment one utters the words "give me something." Begging diminishes self-respect and the esteem of others.'
    }
  },
  {
    id: 'ang-8-v6',
    type: 'sakhi',
    lines: {
      hi: [
        'उदर समाता अन्न ले, तनहि समाता चीर।',
        'अधिकहिं संग्रह ना करै, तिसका नाम फकीर।।'
      ],
      pb: [
        devanagariToGurmukhi('उदर समाता अन्न ले, तनहि समाता चीर।'),
        devanagariToGurmukhi('अधिकहिं संग्रह ना करै, तिसका नाम फकीर।।')
      ],
      en: [
        'Udar samaata ann ley, tanahi samaata cheer.',
        'Adhikahin sangrah na karai, tisaka naam phakeer.'
      ]
    },
    bhavarth: {
      hi: 'उदर-पूर्ति के लिए भोजन ले और शरीर निर्वाह के लिए वस्त्रादि ले, जो जीवन के लिए जरूरी है, परंतु लोभवश जो अधिक का संग्रह नहीं करता, उसी का नाम फकीर है, वही विरक्त-वैरागी संत है।',
      pb: devanagariToGurmukhi('केवल उतना अन्न ले जिससे भूख मिटे और उतना वस्त्र ले जिससे शरीर ढके। जो अधिक का संग्रह नहीं करता, वही सच्चा फकीर व संत है।'),
      en: 'One who accepts food only to quench hunger and cloth only to cover the body, refusing to hoard out of greed, is a true ascetic and holy saint.'
    }
  },
  {
    id: 'ang-8-v7',
    type: 'sakhi',
    lines: {
      hi: [
        'मांगन गये सो मर रहे, मरै जु मांगन जांहि।',
        'तिनतें पहले वे मरे, होत करत हैं नाहिं।।'
      ],
      pb: [
        devanagariToGurmukhi('मांगन गये सो मर रहे, मरै जु मांगन जांहि।'),
        devanagariToGurmukhi('तिनतें पहले वे मरे, होत करत हैं नाहिं।।')
      ],
      en: [
        'Maangan gaye so mar rahe, marai ju maangan jaanhi.',
        'Tinaten pahale ve mare, hot karat hain naahin.'
      ]
    },
    bhavarth: {
      hi: 'जो किसी के यहां कुछ मांगने गया, तो समझो वह मर गया, परंतु इन मांगने वालों से पहले वे मर गए, जिन्होंने सब कुछ होते हुए भी देने से इनकार कर दिया। कोई अपने पास आकर कुछ मांगे, याचना करे, यदि हमारे पास है, तो हमें दे देना चाहिए। यही हमारी ज्ञान-भक्ति का प्रमाण है।',
      pb: devanagariToGurmukhi('जो मांगने गए वे तो मृतक समान हैं, परंतु उनसे पहले वे मर गए जिन्होंने होते हुए भी देने से इंकार कर दिया। यदि क्षमता हो तो याचक को अवश्य देना चाहिए।'),
      en: 'Those who go to beg are spiritually dead, but spiritually dead even before them are those who refuse to give despite possessing the means to help.'
    }
  },
  {
    id: 'ang-8-v8',
    type: 'sakhi',
    lines: {
      hi: [
        'अजहूं तेरा सब मिटै, जो मानै गुरु सीख।',
        'जब लग तू घर में रहे, मति कहं मांगे भीख।।'
      ],
      pb: [
        devanagariToGurmukhi('अजहूं तेरा सब मिटै, जो मानै गुरु सीख।'),
        devanagariToGurmukhi('जब लग तू घर में रहे, मति कहं मांगे भीख।।')
      ],
      en: [
        'Ajahoon tera sab mitai, jo maanai guru seekh.',
        'Jab lag too ghar mein rahe, mati kahan maange bheekh.'
      ]
    },
    bhavarth: {
      hi: 'आज भी तेरे सब दु:ख-दोष दूर हो सकते हैं, यदि तू गुरु-महाराज की शिक्षा-उपदेश को मान ले । चाहे तेरा सब कुछ नष्ट हो जाए, परंतु जब तक तू घर में रहे, गृहस्थी में रहे, तब तक कहीं भी जाकर भिक्षा मत मांग। सतगुरु की आज्ञा है कि कुछ भी हो, परंतु कहीं भी जाकर मांगने के लिए हाथ नहीं फैलाना चाहिए।',
      pb: devanagariToGurmukhi('यदि तू गुरु की सीख मान ले तो आज भी तेरे सब दोष दूर हो सकते हैं। जब तक तू गृहस्थ में है, कभी भी मांगने के लिए हाथ मत फैला।'),
      en: 'All your afflictions can cease today if you heed the Guru’s wisdom. As long as you dwell in householder life, never extend your hand to beg under any circumstance.'
    }
  }
];
