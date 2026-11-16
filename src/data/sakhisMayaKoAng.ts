import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_MAYA_KO_ANG: Sakhi[] = [
  {
    id: 'maya-1',
    number: 1441,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧',
      en: 'Maya Ko Ang - 1',
    },
    text: {
      hi: 'या मारा जग भरमिया, सबको लगी उपाध।\nयहि तारन के कारनै, जग में आये साध।।',
      pb: devanagariToGurmukhi('या मारा जग भरमिया, सबको लगी उपाध। यहि तारन के कारनै, जग में आये साध।।'),
      en: 'Yaa maaraa jag bharamiyaa, sabko lagee upaadh. Yahi taaran ke kaaranai, jag mein aaye saadh..'
    },
    transliteration: 'Ya maara jag bharamiya, sabko lagi upaadh. Yahi taaran ke kaaranai, jag mein aaye saadh.',
    bhavarth: {
      hi: 'इस माया के मारे हुए जग के सभी जीव भ्रम में ही भटकते रहते हैं। सभी को यह मायापाधि लगी हुई है। माया के अधिक होने तथा न होने दोनों ही स्थितियों में जीव को दुःख होता है। इस माया से मुक्ति दिलाने के लिए ही, इस जगत में संत-जन प्रकट हुए हैं, अर्थात संतों की सत्संगति में जाकर उनके ज्ञान-प्रवचन को सुनकर ही इस माया-मोह से मुक्ति प्राप्त हो सकती है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੇ ਮਾਰੇ ਸਾਰੇ ਜੀਵ ਭਰਮ-ਭੁਲੇਖਿਆਂ ਵਿੱਚ ਭਟਕ ਰਹੇ ਹਨ। ਸਭ ਨੂੰ ਮਾਇਆ ਦਾ ਰੋਗ ਲੱਗਾ ਹੋਇਆ ਹੈ। ਇਸ ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਕਰਾਉਣ ਲਈ ਹੀ ਸੰਸਾਰ ਵਿੱਚ ਪੂਰੇ ਸੰਤ ਪ੍ਰਗਟ ਹੁੰਦੇ ਹਨ, ਜਿਨ੍ਹਾਂ ਦੀ ਸੰਗਤ ਨਾਲ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ।'),
      en: 'Deluded by the spell of Maya, mortals wander lost in endless cosmic confusion, afflicted by the fever of worldly attachment. It is solely to liberate souls from this illusion that enlightened Saints descend into this world to impart divine wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'या मारा (Yaa maaraa)', meaning: 'इस माया के द्वारा पीड़ित व भ्रमित' },
        { word: 'उपाध (Upaadh)', meaning: 'माया की उपाधि, विकार, मानसिक रोग व अशांति' },
        { word: 'यहि तारन के कारनै (Yahi taaran ke kaaranai)', meaning: 'जीवों को इस माया-सागर से पार उतारने के लिए' }
      ],
      pb: [
        { word: 'ਉਪਾਧ', meaning: 'ਰੋਗ / ਬਿਮਾਰੀ / ਭਟਕਣ' },
        { word: 'ਤਾਰਨ ਕੇ ਕਾਰਨੈ', meaning: 'ਪਾਰ ਲੰਘਾਉਣ ਲਈ' }
      ],
      en: [
        { word: 'Yaa maaraa', meaning: 'Afflicted and deceived by this illusory energy (Maya)' },
        { word: 'Upaadh', meaning: 'Mental affliction, duality, and restless craving' },
        { word: 'Taaran ke kaaranai', meaning: 'For the sole purpose of liberating and ferrying souls across' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया के भ्रम में उलझा हुआ हूँ, या संतों के ज्ञान से सत्य को पहचान रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੇ ਭਰਮ ਵਿੱਚ ਹਾਂ ਜਾਂ ਸੰਤਾਂ ਦੇ ਗਿਆਨ ਨਾਲ ਜੁੜਿਆ ਹਾਂ?'),
      en: 'Am I wandering in the illusions of Maya or seeking liberation through the wisdom of the Saints?'
    },
    practicalApplication: {
      hi: 'माया के नश्वर आकर्षणों से चित्त हटाकर नित्य संत-सत्संग व नाम-सिमरन की शरण लें।',
      pb: devanagariToGurmukhi('ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਕਰਕੇ ਮਾਇਆ ਦੇ ਭਰਮ ਮਿਟਾਓ।'),
      en: 'Seek the transformative company of holy Saints to dissolve the spell of illusion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस माया-उपाधि के महा-रोग से मुक्त कर अपने पावन ज्ञान का अमृत प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਜਾਲ ਤੋਂ ਛੁਡਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the afflictions of Maya and establish my soul in the light of Truth.'
    },
    quiz: []
  },
  {
    id: 'maya-2',
    number: 1442,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨',
      en: 'Maya Ko Ang - 2',
    },
    text: {
      hi: 'खान खरच बहु अन्तरा, मन में देख विचार।\nएक खवावै साधु को, एक मिलावै छार।।',
      pb: devanagariToGurmukhi('खान खरच बहु अन्तरा, मन में देख विचार। एक खवावै साधु को, एक मिलावै छार।।'),
      en: 'Khaan kharach bahu antraa, man mein dekh vichaar. Ek khavaavai saadhu ko, ek milaavai chhaar..'
    },
    transliteration: 'Khaan kharach bahu antara, man mein dekh vichaar. Ek khavaavai saadhu ko, ek milaavai chhaar.',
    bhavarth: {
      hi: 'मन में अच्छी प्रकार से सोच-विचारकर देखो। इस माया के संसार में खाने और खर्च करने में बड़ा भारी अंतर है। इसमें से एक तो अपने परिश्रम के धन से स्वयं का पोषण करता है तथा परमार्थ में साधु को सादर भेंट कर भोजन खिलाता है। दूसरा केवल अपने विषय-भोगों में खर्च करके उसे धूल में मिला देता है। स्वार्थ से परमार्थ बड़ा है, अतः सेवा-दान-परोपकार आदि सत्कर्मों में खर्च करने से लोक-परलोक का सुधार होता है।',
      pb: devanagariToGurmukhi('ਮਨ ਵਿੱਚ ਵਿਚਾਰ ਕੇ ਵੇਖੋ ਕਿ ਧਨ ਖਾਣ ਅਤੇ ਖਰਚਣ ਵਿੱਚ ਬੜਾ ਫਰਕ ਹੈ। ਇੱਕ ਇਨਸਾਨ ਸਾਧੂ-ਸੰਤਾਂ ਤੇ ਲੋੜਵੰਦਾਂ ਨੂੰ ਖੁਆ ਕੇ ਪਰਮਾਰਥ ਕਮਾਉਂਦਾ ਹੈ, ਦੂਜਾ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਵਿੱਚ ਖਰਚ ਕਰਕੇ ਸਭ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲਾ ਦਿੰਦਾ ਹੈ।'),
      en: 'Reflect deeply within your heart: there is a vast difference in how wealth is spent. One person utilizes resources to serve saintly souls and uplift the needy (earning spiritual merit), while another squanders it on fleeting indulgences, reducing everything to ashes.'
    },
    wordMeanings: {
      hi: [
        { word: 'खान खरच (Khaan kharach)', meaning: 'धन का उपभोग व खर्च करना' },
        { word: 'खवावै साधु को (Khavaavai saadhu ko)', meaning: 'संत-महात्माओं व जरूरतमंदों की सेवा में लगाना' },
        { word: 'मिलावै छार (Milaavai chhaar)', meaning: 'भोग-विलास में उड़ाकर धूल-राख में मिला देना' }
      ],
      pb: [
        { word: 'ਖਰਚ', meaning: 'ਧਨ ਦੀ ਵਰਤੋਂ' },
        { word: 'ਛਾਰ', meaning: 'ਸੁਆਹ / ਧੂੜ / ਮਿੱਟੀ' }
      ],
      en: [
        { word: 'Khaan kharach', meaning: 'Earning and spending material wealth' },
        { word: 'Milaavai chhaar', meaning: 'Reducing wealth to useless dust through sensory waste' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धन विषय-वासनाओं की धूल में मिल रहा है, या सेवा और परोपकार में लग रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਕਮਾਈ ਪਰਉਪਕਾਰ ਵਿੱਚ ਲੱਗ ਰਹੀ ਹੈ?'),
      en: 'Am I investing my resources in selfless service or squandering them in transient pleasures?'
    },
    practicalApplication: {
      hi: 'अपनी कमाई का एक अंश नित्य निष्काम सेवा, साधु-सत्कार और दीन-दुखियों की सहायता में लगाएं।',
      pb: devanagariToGurmukhi('ਨੇਕ ਕਮਾਈ ਵਿੱਚੋਂ ਪਰਉਪਕਾਰ ਅਤੇ ਸੇਵਾ ਕਰੋ।'),
      en: 'Sanctify material wealth by dedicating a portion to compassionate service and dharma.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपनी संपदा का उपयोग परोपकार और सेवा में करने की सद्बुद्धि प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੇਵਾ ਅਤੇ ਪਰਉਪਕਾਰ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bless me with the wisdom to use all worldly resources in the service of humanity and Truth.'
    },
    quiz: []
  },
  {
    id: 'maya-3',
    number: 1443,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩',
      en: 'Maya Ko Ang - 3',
    },
    text: {
      hi: 'मन मते माया तजी, यूं करि निकस बहार।\nलागि रहि जानी नहीं, भटकी भयो खुवार।।',
      pb: devanagariToGurmukhi('मन मते माया तजी, यूं करि निकस बहार। लागि रहि जानी नहीं, भटकी भयो खुवार।।'),
      en: 'Man mate maayaa tajee, yoon kari nikas bahaar. Laagi rahi jaanee naheen, bhatkee bhayo khuvaar..'
    },
    transliteration: 'Man mate maya taji, yoon kari nikas bahaar. Laagi rahi jaani nahin, bhatki bhayo khuvaar.',
    bhavarth: {
      hi: 'बिना सोचे-समझे तथा बिना ज्ञान-वैराग्य के अपनी मनमानी से माया को त्यागकर अपनी घर-गृहस्थी से बाहर निकल गए तथा साधु-संत का वेश धारण कर लिया, परंतु माया उनके साथ ही लगी रही और वे इसे समझ नहीं पाए, अर्थात उनके मन से माया की सूक्ष्म आसक्ति नहीं गई और वे व्यर्थ में भटक गए।',
      pb: devanagariToGurmukhi('ਬਿਨਾਂ ਸੱਚੇ ਗਿਆਨ ਦੇ ਮਨ ਦੀ ਮੌਜ ਵਿੱਚ ਘਰ-ਬਾਰ ਛੱਡ ਕੇ ਬਾਹਰ ਤਾਂ ਨਿਕਲ ਗਏ, ਪਰ ਮਾਇਆ ਦੀ ਸੂਖਮ ਪਕੜ ਅੰਦਰੋਂ ਨਾ ਗਈ। ਭੇਖ ਧਾਰ ਕੇ ਵੀ ਦਰ-ਦਰ ਭਟਕ ਕੇ ਖੁਆਰ ਹੁੰਦੇ ਰਹੇ।'),
      en: 'Driven merely by mental impulse without authentic discrimination, they abandoned their household and donned ascetic robes. Yet the subtle attachment of Maya clung secretly to their minds, leaving them wandering in disillusionment and misery.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन मते (Man mate)', meaning: 'मनमानी सनक या भावुकता के वश में' },
        { word: 'लागि रहि जानी नहीं (Laagi rahi jaanee naheen)', meaning: 'सूक्ष्म वासना मन में बनी रही जिसे पहचान न सके' },
        { word: 'भटकी भयो खुवार (Bhatkee bhayo khuvaar)', meaning: 'दिशाहीन भटककर अपमानित व दुखी होना' }
      ],
      pb: [
        { word: 'ਖੁਆਰ', meaning: 'ਦੁਖੀ / ਬੇਇੱਜ਼ਤ / ਭਟਕਿਆ ਹੋਇਆ' },
        { word: 'ਲਾਗਿ ਰਹਿ', meaning: 'ਅੰਦਰ ਚਿੰਬੜੀ ਰਹੀ' }
      ],
      en: [
        { word: 'Man mate', meaning: 'On a sudden mental whim without true wisdom' },
        { word: 'Laagi rahi', meaning: 'Subtle attachment remained invisibly attached' },
        { word: 'Khuvaar', meaning: 'Humiliated and ruined in outer wandering' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने केवल बाहरी त्याग किया है, या मेरे मन के भीतर से भी मान-बड़ाई की सूक्ष्म माया छूट चुकी है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਤਿਆਗ ਅੰਦਰੂਨੀ ਹੈ ਜਾਂ ਸਿਰਫ਼ ਬਾਹਰੀ ਦਿਖਾਵਾ?'),
      en: 'Is my detachment truly internal, or have I merely changed outer clothes while keeping inner desires?'
    },
    practicalApplication: {
      hi: 'स्थान या वेश बदलने से पहले मन के भीतर छुपी सूक्ष्म वासनाओं और अहंकार का त्याग करें।',
      pb: devanagariToGurmukhi('ਮਨ ਵਿੱਚੋਂ ਹੰਕਾਰ ਤੇ ਵਾਸਨਾਵਾਂ ਦਾ ਤਿਆਗ ਕਰੋ।'),
      en: 'Focus on inner dispassion rather than dramatic external renunciation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे दिखावटी त्याग से बचाकर अंतःकरण का सच्चा और निष्काम वैराग्य प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅੰਦਰੂਨੀ ਸੱਚਾ ਵੈਰਾਗ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Save me from hollow external renunciation and grant me profound inner purity.'
    },
    quiz: []
  },
  {
    id: 'maya-4',
    number: 1444,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪',
      en: 'Maya Ko Ang - 4',
    },
    text: {
      hi: 'कबीर माया जात है, सुनो शब्द निज मोर।\nसुखियों के घर साध जन, सूमों के घर चोर।।',
      pb: devanagariToGurmukhi('कबीर माया जात है, सुनो शब्द निज मोर। सुखियों के घर साध जन, सूमों के घर चोर।।'),
      en: 'Kabeer maayaa jaat hai, suno shabd nij mor. Sukhiyon ke ghar saadh jan, soomon ke ghar chor..'
    },
    transliteration: 'Kabeer maya jaat hai, suno shabd nij mor. Sukhiyon ke ghar saadh jan, soomon ke ghar chor.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जाती हुई माया सबको अपना यह संदेश देती है कि सब लोग ध्यान से मेरे वचनों को सुनो। उदार हृदय के सुखी सज्जनों के पास साधु-संत आते हैं। ऐसे में उनका सेवा-सत्कार मुझसे (माया से) ही होता है और उसका सुखद परिणाम उन्हें मिलता है, परंतु कंजूसों के घर में तो यदा-कदा चोर घुस आते हैं। उनके द्वारा मैं चुरा ली जाती हूं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜਾਂਦੀ ਹੋਈ ਮਾਇਆ ਕਹਿੰਦੀ ਹੈ ਕਿ ਮੇਰਾ ਬਚਨ ਸੁਣੋ: ਉਦਾਰ ਦਿਲ ਵਾਲਿਆਂ ਦੇ ਘਰ ਸੰਤ-ਸਾਧ ਆਉਂਦੇ ਹਨ ਜਿੱਥੇ ਮੈਂ ਸੇਵਾ ਵਿੱਚ ਲੱਗ ਕੇ ਸੁੱਖ ਦਿੰਦੀ ਹਾਂ, ਪਰ ਕੰਜੂਸਾਂ ਦੇ ਘਰ ਚੋਰ ਆ ਕੇ ਮੈਨੂੰ ਲੁੱਟ ਲੈ ਜਾਂਦੇ ਹਨ।'),
      en: 'Kabir reveals the parting proclamation of fleeting wealth: "Generous souls invite saints to their homes where I am honored in sacred service, but into the dens of misers break thieves who plunder me away without benefit."'
    },
    wordMeanings: {
      hi: [
        { word: 'माया जात है (Maayaa jaat hai)', meaning: 'माया तो निश्चित रूप से नष्ट होने वाली है' },
        { word: 'सुखियों के घर (Sukhiyon ke ghar)', meaning: 'उदार, संतुष्ट व परोपकारी सज्जनों के यहां' },
        { word: 'सूमों के घर (Soomon ke ghar)', meaning: 'कृपण, कंजूस व लोभी व्यक्तियों के यहां' }
      ],
      pb: [
        { word: 'ਸੂਮ', meaning: 'ਕੰਜੂਸ / ਲੋਭੀ' },
        { word: 'ਸੁਖੀਏ', meaning: 'ਉਦਾਰ ਤੇ ਸੰਤੋਖੀ' }
      ],
      en: [
        { word: 'Maayaa jaat hai', meaning: 'Wealth inevitably departs' },
        { word: 'Soomon ke ghar', meaning: 'In the houses of hoarding misers' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं कंजूस बनकर धन संचित कर रहा हूँ जो अंततः नष्ट होगा, या संतों और दीन-दुखियों की सेवा कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕੰਜੂਸ ਹਾਂ ਜਾਂ ਉਦਾਰ ਮਨ ਨਾਲ ਸੇਵਾ ਕਰਦਾ ਹਾਂ?'),
      en: 'Am I hoarding wealth as a miser for thieves and death, or consecrating it in selfless hospitality?'
    },
    practicalApplication: {
      hi: 'कृपणता त्यागें; जो भी साधन प्रभु ने दिए हैं, उन्हें संतों के सत्कार और समाज के कल्याण में लगाएं।',
      pb: devanagariToGurmukhi('ਕੰਜੂਸੀ ਛੱਡ ਕੇ ਲੋੜਵੰਦਾਂ ਦੀ ਸੇਵਾ ਕਰੋ।'),
      en: 'Open your hands in generous charity and hospitality before wealth slips away.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे कृपणता से मुक्त कर उदारता और निष्काम सेवा का पावन हृदय प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਖੁੱਲ੍ਹੇ ਦਿਲ ਨਾਲ ਸੇਵਾ ਕਰਨ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Cleanse my heart of miserliness and grant me a spirit of boundless generosity.'
    },
    quiz: []
  },
  {
    id: 'maya-5',
    number: 1445,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ५',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੫',
      en: 'Maya Ko Ang - 5',
    },
    text: {
      hi: 'कबीर माया पापिनी, लोभ भुलाया लोग।\nपूरी किनहुं न भोगिया, इसका यही बिजोग।।',
      pb: devanagariToGurmukhi('कबीर माया पापिनी, लोभ भुलाया लोग। पूरी किनहुं न भोगिया, इसका यही बिजोग।।'),
      en: 'Kabeer maayaa paapinee, lobh bhulaayaa log. Pooree kinhun na bhogiyaa, iskaa yahee bijog..'
    },
    transliteration: 'Kabeer maya paapini, lobh bhulaya log. Poori kinhun na bhogiya, iska yahi bijog.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह माया पापिनी है। इसने लोगों के मन पर लोभ का परदा डालकर अपने वशीभूत कर रखा है। यह ऐसी विचित्र है कि इसका कोई पूर्णतया उपभोग नहीं कर पाया, अर्थात इसे जितना भोगा, वह सब अधूरा ही रहा और यही इसका वियोग है। माया के अनंत भोग को संपूर्णतः न भोग पाने पर अतृप्त जीव, इसके वियोग का दुःख पाता है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਮਾਇਆ ਪਾਪਣ ਹੈ ਜਿਸਨੇ ਲੋਭ ਪਾ ਕੇ ਲੋਕਾਂ ਨੂੰ ਭੁਲੇਖੇ ਵਿੱਚ ਪਾਇਆ ਹੈ। ਕੋਈ ਵੀ ਇਸਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਹੀਂ ਭੋਗ ਸਕਿਆ; ਅਧੂਰੀ ਤ੍ਰਿਪਤੀ ਅਤੇ ਵਿਛੋੜੇ ਦਾ ਦੁੱਖ ਹੀ ਇਸਦਾ ਅੰਤ ਹੈ।'),
      en: 'Kabir warns that Maya is a cunning enchantress that ensnares mortals in the trap of greed. No one in cosmic history has ever enjoyed her pleasures to total fulfillment; leaving every craving unquenched, she ultimately abandons the soul in bitter sorrow.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया पापिनी (Maayaa paapinee)', meaning: 'आत्मा को परमात्मा से विमुख करने वाली माया' },
        { word: 'पूरी किनहुं न भोगिया (Pooree kinhun na bhogiyaa)', meaning: 'इसकी तृष्णा को कोई कभी पूरा नहीं भोग सका' },
        { word: 'बिजोग (Bijog)', meaning: 'वियोग, अपूर्णता और अतृप्ति का दुःख' }
      ],
      pb: [
        { word: 'ਲੋਭ ਭੁਲਾਇਆ', meaning: 'ਲਾਲਚ ਵਿੱਚ ਫਸਾਇਆ' },
        { word: 'ਬਿਜੋਗ', meaning: 'ਵਿਛੋੜਾ / ਅਧੂਰਾਪਣ' }
      ],
      en: [
        { word: 'Maayaa paapinee', meaning: 'The deceptive, sin-enticing power of illusion' },
        { word: 'Pooree kinhun na bhogiyaa', meaning: 'None could ever exhaust or fulfill its bottomless desires' },
        { word: 'Bijog', meaning: 'The agonizing sorrow of insatiable separation' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक भोगों से पूर्ण तृप्ति की मृगमरीचिका में अपनी चेतना को भटका रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੇ ਭੋਗਾਂ ਵਿੱਚ ਸੱਚਾ ਸੁੱਖ ਲੱਭ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I chasing the mirage of permanent satisfaction in impermanent worldly possessions?'
    },
    practicalApplication: {
      hi: 'यह समझें कि माया कभी तृप्त नहीं कर सकती; संतोष और नाम-सिमरन में ही सच्चा और शाश्वत आनंद है।',
      pb: devanagariToGurmukhi('ਸੰਤੋਖ ਧਾਰਨ ਕਰਕੇ ਨਾਮ ਵਿੱਚ ਸ਼ਾਂਤੀ ਲੱਭੋ।'),
      en: 'Embrace holy contentment (Santokh), recognizing that only the Divine brings true fulfillment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के लोभ और अतृप्त वियोग से बचाकर अपने पावन नाम का अविनाशी आनंद दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਭੁੱਖ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਨਾਮ ਰਸ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the insatiable thirst of Maya and quench my soul with the nectar of Your Name.'
    },
    quiz: []
  },
  {
    id: 'maya-6',
    number: 1446,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ६',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੬',
      en: 'Maya Ko Ang - 6',
    },
    text: {
      hi: 'कबीर माया पापिनी, फंद ले बैठी हाट।\nसब जग तो फंदै पड़ा, गया कबीरा काट।।',
      pb: devanagariToGurmukhi('कबीर माया पापिनी, फंद ले बैठी हाट। सब जग तो फंदै पड़ा, गया कबीरा काट।।'),
      en: 'Kabeer maayaa paapinee, phand le baithee haat. Sab jag to phandai padaa, gayaa Kabeeraa kaat..'
    },
    transliteration: 'Kabeer maya paapini, phand le baithi haat. Sab jag to phandai pada, gaya Kabeera kaat.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह माया तो बहुत भयंकर पापिन है। यह अपनी सुंदर विषय-भोग सामग्री को संसार रूपी बाजार में सजाए, सबको अपने जाल में फंसाने के लिए तैयार बैठी है। सत्संग से विमुख संसार के अज्ञानी जन तो इसके मोह-जाल में फंस गए, परंतु जिसने सद्गुरु के सुधामय ज्ञानोपदेश को ग्रहण किया, वह इसके बंधन को काटकर विमुक्त हो गया।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਮਾਇਆ ਪਾਪਣ ਸੰਸਾਰ ਰੂਪੀ ਹੱਟ \'ਤੇ ਮੋਹ ਦੀ ਫਾਹੀ ਲੈ ਕੇ ਬੈਠੀ ਹੈ। ਸਾਰਾ ਜਗਤ ਇਸਦੇ ਜਾਲ ਵਿੱਚ ਫਸ ਗਿਆ, ਪਰ ਕਬੀਰ (ਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ) ਇਸ ਫਾਹੀ ਨੂੰ ਕੱਟ ਕੇ ਪਾਰ ਲੰਘ ਗਿਆ।'),
      en: 'Kabir warns that this treacherous Maya sits in the global bazaar with a noose of desires ready to ensnare everyone. The heedless world got trapped in her net, but Kabir, armed with the sword of the Satguru’s wisdom, severed the cords and walked away free.'
    },
    wordMeanings: {
      hi: [
        { word: 'फंद ले बैठी हाट (Phand le baithee haat)', meaning: 'संसार के बाजार में प्रलोभनों का फंदा फैलाए बैठी है' },
        { word: 'सब जग तो फंदै पड़ा (Sab jag to phandai padaa)', meaning: 'अज्ञानी संसार उसके प्रलोभनों में जकड़ा गया' },
        { word: 'गया कबीरा काट (Gayaa Kabeeraa kaat)', meaning: 'सद्गुरु के ज्ञान से मोह-बंधन को काटकर मुक्त हो जाना' }
      ],
      pb: [
        { word: 'ਫੰਦ', meaning: 'ਫਾਹੀ / ਜਾਲ' },
        { word: 'ਹਾਟ', meaning: 'ਬਾਜ਼ਾਰ / ਦੁਕਾਨ' }
      ],
      en: [
        { word: 'Phand le baithee haat', meaning: 'Sitting in the marketplace setting snares of sensory temptation' },
        { word: 'Gayaa Kabeeraa kaat', meaning: 'Kabir severed the net of illusion with the sword of wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संसार के बाजार में माया के फंदे में फंसा हूँ, या सतगुरु के ज्ञान से बंधनों को काट चुका हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਹਾਂ ਜਾਂ ਗਿਆਨ ਨਾਲ ਮੁਕਤ ਹਾਂ?'),
      en: 'Am I entangled in the marketplace trap of Maya, or equipped with the Master’s sword of wisdom?'
    },
    practicalApplication: {
      hi: 'संसार के बाह्य आकर्षणों को माया का फंदा समझें; विवेक और वैराग्य से हर प्रलोभन को काटें।',
      pb: devanagariToGurmukhi('ਵਿਵੇਕ ਨਾਲ ਮਾਇਆ ਦੇ ਬੰਧਨ ਕੱਟੋ।'),
      en: 'Sever every sensory temptation with the sharp blade of discerning awareness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे वह ज्ञान-खड्ग प्रदान कीजिए जिससे मैं माया के इस महा-फंदे को काटकर आपके पावन धाम में मुक्त हो सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਗਿਆਨ ਦੀ ਤਲਵਾਰ ਬਖਸ਼ ਕੇ ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Arm me with the sword of discernment so I may sever the noose of Maya and dwell in freedom.'
    },
    quiz: []
  },
  {
    id: 'maya-7',
    number: 1447,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ७',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੭',
      en: 'Maya Ko Ang - 7',
    },
    text: {
      hi: 'छाडै बिन छुटै नहीं, छोड़न हारा राम।\nजीव जतन बहतरि करै, सरे न एकौ काम।।',
      pb: devanagariToGurmukhi('छाडै बिन छुटै नहीं, छोड़न हारा राम। जीव जतन बहतरि करै, सरे न एकौ काम।।'),
      en: 'Chhaadai bin chhutai naheen, chhodan haaraa Raam. Jeev jatan bahatari karai, sare na ekau kaam..'
    },
    transliteration: 'Chhaadai bin chhutai nahin, chhodan haara Raam. Jeev jatan bahatari karai, sare na ekau kaam.',
    bhavarth: {
      hi: 'यह माया बिना छोड़े तो छूटेगी नहीं। इसकी पकड़ बहुत ही सुदृढ़ है, जो तन-मन के बल से नहीं छूट सकती। इसे तो अविनाशी परमात्मा जैसा ही होकर छोड़ा जा सकता है। सांसारिक जीव ने बहुत प्रयत्न करके देख लिया, परंतु इसकी आसक्ति का त्याग किए बिना कार्य सिद्ध नहीं होता।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਨੂੰ ਅੰਦਰੋਂ ਤਿਆਗੇ ਬਿਨਾਂ ਮੁਕਤੀ ਨਹੀਂ ਮਿਲਦੀ। ਇਸਨੂੰ ਛੁਡਾਉਣ ਵਾਲਾ ਇੱਕੋ ਪ੍ਰਮਾਤਮਾ ਹੈ। ਜੀਵ ਲੱਖਾਂ ਜਤਨ ਕਰ ਲਵੇ, ਪਰ ਜਦ ਤੱਕ ਅੰਦਰੋਂ ਮੋਹ ਨਹੀਂ ਛੱਡਦਾ, ਕੋਈ ਕੰਮ ਰਾਸ ਨਹੀਂ ਆਉਂਦਾ।'),
      en: 'Maya cannot be dispelled without genuine inner renunciation; only alignment with the Supreme Reality grants total release. A mortal may execute dozens of intellectual stratagems, yet not a single spiritual purpose is accomplished until inner attachment is surrendered.'
    },
    wordMeanings: {
      hi: [
        { word: 'छाडै बिन छुटै नहीं (Chhaadai bin chhutai naheen)', meaning: 'हृदय से आसक्ति त्यागे बिना माया से मुक्ति संभव नहीं' },
        { word: 'छोड़न हारा राम (Chhodan haaraa Raam)', meaning: 'परमात्मा की कृपा और आत्म-समर्पण ही छुड़ाने में समर्थ है' },
        { word: 'जतन बहतरि (Jatan bahatari)', meaning: 'अनेक प्रकार के बाह्य उपाय व चालाकियां' }
      ],
      pb: [
        { word: 'ਬਹਤਰਿ ਜਤਨ', meaning: 'ਬਹੁਤ ਸਾਰੇ ਹੱਥ-ਕੰਡੇ' },
        { word: 'ਸਰੇ ਨ ਕਾਮ', meaning: 'ਕੋਈ ਕਾਰਜ ਸਫਲ ਨਾ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Chhaadai bin chhutai naheen', meaning: 'Freedom is impossible without radical inner release' },
        { word: 'Jatan bahatari', meaning: 'Countless clever manipulations and outer techniques' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं चालाकियों से मुक्ति खोज रहा हूँ, या अंतःकरण से माया की आसक्ति का पूर्ण त्याग कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਅੰਦਰੋਂ ਮੋਹ ਤਿਆਗਣ ਲਈ ਤਿਆਰ ਹਾਂ?'),
      en: 'Am I relying on clever mental techniques instead of surrendering genuine inner attachment?'
    },
    practicalApplication: {
      hi: 'बाहरी दिखावे छोड़ें; हृदय से "मेरा-तेरा" का भाव त्यागकर पूर्ण रूप से प्रभु-शरण में समर्पित हों।',
      pb: devanagariToGurmukhi('ਮੋਹ ਤਿਆਗ ਕੇ ਪ੍ਰਭੂ ਦੀ ਸ਼ਰਨ ਪਵੋ।'),
      en: 'Relinquish possessiveness of heart and take unreserved refuge in the Supreme.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया की आसक्ति को हृदय से त्यागने का आत्म-बल और आपकी अनन्य शरण प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਆਸਕਤੀ ਮਿਟਾ ਕੇ ਆਪਣੀ ਸ਼ਰਨ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the courage of true detachment and keep me anchored in Your sanctuary.'
    },
    quiz: []
  },
  {
    id: 'maya-8',
    number: 1448,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ८',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੮',
      en: 'Maya Ko Ang - 8',
    },
    text: {
      hi: 'माया छोड़न सब कहै, माया छोरि न जाय।\nछोरन की जो बात करु, बहुत तमाचा खाय।।',
      pb: devanagariToGurmukhi('माया छोड़न सब कहै, माया छोरि न जाय। छोरन की जो बात करु, बहुत तमाचा खाय।।'),
      en: 'Maayaa chhodan sab kahai, maayaa chhori na jaay. Chhoran kee jo baat karu, bahut tamaachaa khaay..'
    },
    transliteration: 'Maya chhodan sab kahai, maya chhori na jaay. Chhoran ki jo baat karu, bahut tamacha khaay.',
    bhavarth: {
      hi: 'माया के अवगुणों को बताते हुए उसे त्यागने की बात तो सब करते हैं, परंतु माया का त्याग नहीं किया जाता। इसे त्यागना इतना आसान नहीं है, जो इसको छोड़ने की केवल बात ही करते हैं, उनका कहना व्यर्थ है। वे इस माया के चक्कर में बहुत थपेड़े खाते हैं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਤਿਆਗਣ ਦੀਆਂ ਗੱਲਾਂ ਤਾਂ ਸਾਰੇ ਕਰਦੇ ਹਨ, ਪਰ ਸੱਚਮੁੱਚ ਮਾਇਆ ਛੱਡੀ ਨਹੀਂ ਜਾਂਦੀ। ਜੋ ਕੇਵਲ ਜ਼ਬਾਨੀ ਗੱਲਾਂ ਕਰਦੇ ਹਨ, ਉਹ ਮਾਇਆ ਦੇ ਹੱਥੋਂ ਬਹੁਤ ਥਪੇੜੇ (ਚੋਟਾਂ) ਖਾਂਦੇ ਹਨ।'),
      en: 'Everyone talks eloquently about renouncing Maya, yet very few can truly break her subtle grip. Those who merely boast of detachment with their lips while harboring latent desires end up suffering repeated blows and humiliations from her deceptive power.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया छोरि न जाय (Maayaa chhori na jaay)', meaning: 'केवल बातों से माया का त्याग नहीं होता' },
        { word: 'बहुत तमाचा खाय (Bahut tamaachaa khaay)', meaning: 'माया के प्रलोभनों व वासनाओं के भयंकर थपेड़े सहना' }
      ],
      pb: [
        { word: 'ਤਮਾਚਾ ਖਾਇ', meaning: 'ਥਪੇੜੇ / ਧੋਖੇ ਖਾਣਾ' }
      ],
      en: [
        { word: 'Chhori na jaay', meaning: 'Cannot be abandoned merely through casual talk' },
        { word: 'Tamaachaa khaay', meaning: 'Suffers painful blows from unexamined desires' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा वैराग्य केवल बातों का है, या मैंने अपने जीवन में वासनाओं को सचमुच वश में किया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਵੈਰਾਗ ਸੱਚਾ ਹੈ ਜਾਂ ਸਿਰਫ਼ ਗੱਲਾਂ ਦਾ?'),
      en: 'Is my renunciation merely verbal rhetoric or rooted in living spiritual discipline?'
    },
    practicalApplication: {
      hi: 'वैराग्य की बातें करने के स्थान पर मौन रहकर अपनी इंद्रियों और इच्छाओं पर सूक्ष्म संयम रखें।',
      pb: devanagariToGurmukhi('ਗੱਲਾਂ ਛੱਡ ਕੇ ਅਮਲੀ ਜੀਵਨ ਵਿੱਚ ਸੰਜਮ ਲਿਆਓ।'),
      en: 'Replace verbal claims of detachment with quiet, rigorous self-restraint.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे केवल बातों के वैराग्य से बचाकर क्रियात्मक साधना और वासना-मुक्ति का वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚਾ ਅਮਲੀ ਵੈਰਾਗ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Save me from hypocritical talk and grant me the strength of living, practical renunciation.'
    },
    quiz: []
  },
  {
    id: 'maya-9',
    number: 1449,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ९',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੯',
      en: 'Maya Ko Ang - 9',
    },
    text: {
      hi: 'माया सम नहिं मोहिनी, मन समान नहिं चोर।\nहरिजन सम नहिं पारखी, कोई न दीसे ओर।।',
      pb: devanagariToGurmukhi('माया सम नहिं मोहिनी, मन समान नहिं चोर। हरिजन सम नहिं पारखी, कोई न दीसे ओर।।'),
      en: 'Maayaa sam nahin mohinee, man samaan nahin chor. Harijan sam nahin paarakhee, koyee na deese or..'
    },
    transliteration: 'Maya sam nahin mohini, man samaan nahin chor. Harijan sam nahin paarakhi, koyi na deese or.',
    bhavarth: {
      hi: 'इस संसार में माया के समान कोई मोहने वाला नहीं है और मन के समान कोई चोर नहीं है। सद्गुरु के प्रियवर ज्ञान-उपदेशी तथा भक्ति-साधना करने वाले सेवक जनों के समान कोई पारखी (ज्ञानी) नहीं। इस प्रकार का ऐसा कोई और नहीं दिखाई देता।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਮਾਇਆ ਵਰਗੀ ਕੋਈ ਮੋਹਣੀ ਨਹੀਂ ਅਤੇ ਮਨ ਵਰਗਾ ਕੋਈ ਚੋਰ ਨਹੀਂ। ਪਰ ਪ੍ਰਭੂ ਦੇ ਸੱਚੇ ਭਗਤ (ਹਰਿਜਨ) ਵਰਗਾ ਕੋਈ ਗਿਆਨੀ-ਪਾਰਖੀ ਨਹੀਂ ਦਿਸਦਾ ਜੋ ਇਸ ਭੇਤ ਨੂੰ ਸਮਝ ਸਕੇ।'),
      en: 'There is no enchantress as bewitching as Maya, and no thief as cunning as the mind. Likewise, there is no master-evaluator (Parakhi) as discerning as the true devotee of the Lord, who alone unmasks their deception.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया सम मोहिनी (Maayaa sam mohinee)', meaning: 'माया के समान कोई सम्मोहित करने वाला नहीं' },
        { word: 'मन समान चोर (Man samaan chor)', meaning: 'मन के समान समय और चेतना चुराने वाला कोई डाकू नहीं' },
        { word: 'हरिजन सम पारखी (Harijan sam paarakhee)', meaning: 'सच्चे संत-भक्त जैसा कोई तत्त्वदर्शी व पारखी नहीं' }
      ],
      pb: [
        { word: 'ਮੋਹਿਨੀ', meaning: 'ਮੋਹ ਲੈਣ ਵਾਲੀ' },
        { word: 'ਪਾਰਖੀ', meaning: 'ਸੱਚ-ਝੂਠ ਨੂੰ ਪਰਖਣ ਵਾਲਾ ਗਿਆਨੀ' }
      ],
      en: [
        { word: 'Maayaa sam mohinee', meaning: 'No hypnotist as powerful as Maya' },
        { word: 'Man samaan chor', meaning: 'No thief as stealthy as the mind' },
        { word: 'Harijan sam paarakhee', meaning: 'No connoisseur of Truth as discerning as the devotee of God' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मन के छलावे और माया के सम्मोहन को संतों की पारखी दृष्टि से देख पा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਮਾਇਆ ਤੇ ਮਨ ਦੇ ਧੋਖੇ ਨੂੰ ਪਰਖ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I possess the discerning gaze of a saint to pierce through the illusions of Maya and the mind?'
    },
    practicalApplication: {
      hi: 'सद्गुरु की पारखी दृष्टि को अपनाएं; मन की हर चाल और माया के सम्मोहन को विवेक से परखें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੀ ਪਾਰਖੀ ਨਜ਼ਰ ਨਾਲ ਮਨ ਦੀਆਂ ਚਾਲਾਂ ਨੂੰ ਸਮਝੋ।'),
      en: 'Adopt the discriminating vision of the Master to discern truth from illusion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे वह पारखी विवेक प्रदान कीजिए जिससे मैं मोहिनी माया और चोर मन के धोखे से बच सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੀ ਪਰਖ ਅਤੇ ਵਿਵੇਕ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the supreme discernment of a true devotee to outsmart the thief within.'
    },
    quiz: []
  },
  {
    id: 'maya-10',
    number: 1450,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १०',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੦',
      en: 'Maya Ko Ang - 10',
    },
    text: {
      hi: 'माया जुगवे कौन गुन, अंत न आवै काज।\nसोई नाम जोगावहु, भये परमारथ साज।।',
      pb: devanagariToGurmukhi('माया जुगवे कौन गुन, अंत न आवै काज। सोई नाम जोगावहु, भये परमारथ साज।।'),
      en: 'Maayaa jugave kaun gun, ant na aavai kaaj. So-ee naam jogaavahu, bhaye parmaarath saaj..'
    },
    transliteration: 'Maya jugave kaun gun, ant na aavai kaaj. Soyi naam jogaavahu, bhaye parmaarth saaj.',
    bhavarth: {
      hi: 'इस माया का लोभवश संग्रह करने से कोई गुण-लाभ नहीं। यह अंत काल में किसी काम नहीं आती। इससे तो यही अच्छा है कि सद्गुरु के सदुपदेश तथा नाम-ज्ञान की साधना का संग्रह करें। इससे लोक-परलोक के लिए परमार्थी सुंदर सत्कर्म होंगे, जो सदैव सुखप्रद होंगे।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਨੂੰ ਜੋੜ-ਜੋੜ ਕੇ ਰੱਖਣ ਦਾ ਕੀ ਲਾਭ ਹੈ, ਜਦੋਂ ਇਹ ਅੰਤ ਵੇਲੇ ਕਿਸੇ ਕੰਮ ਨਹੀਂ ਆਉਣੀ? ਇਸ ਨਾਲੋਂ ਪ੍ਰਭੂ ਦੇ ਸਤਯਨਾਮ ਦੀ ਕਮਾਈ ਕਰੋ, ਜੋ ਪਰਮਾਰਥ ਦਾ ਸੱਚਾ ਸਾਧਨ ਹੈ।'),
      en: 'What virtue is there in accumulating hoards of material wealth when not a penny accompanies you at death? Instead, gather the enduring wealth of the holy Name, which serves as the supreme provision for spiritual liberation.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया जुगवे (Maayaa jugave)', meaning: 'माया व धन का लोभवश संचय करना' },
        { word: 'अंत न आवै काज (Ant na aavai kaaj)', meaning: 'मृत्यु के समय कोई सहायता नहीं करती' },
        { word: 'नाम जोगावहु (Naam jogaavahu)', meaning: 'सत्यनाम व भजन-सिमरन की कमाई का संग्रह करो' },
        { word: 'परमारथ साज (Parmaarath saaj)', meaning: 'आत्म-कल्याण व मोक्ष का सच्चा साधन' }
      ],
      pb: [
        { word: 'ਜੁਗਵੇ', meaning: 'ਸੰਭਾਲਣਾ / ਜੋੜਨਾ' },
        { word: 'ਪਰਮਾਰਥ ਸਾਜ', meaning: 'ਰੂਹਾਨੀ ਖਜ਼ਾਨਾ' }
      ],
      en: [
        { word: 'Maayaa jugave', meaning: 'Hoarding material possessions' },
        { word: 'Ant na aavai kaaj', meaning: 'Useless at the hour of death' },
        { word: 'Naam jogaavahu', meaning: 'Amass the divine wealth of the holy Name' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं ऐसी नश्वर माया जोड़ रहा हूँ जो छूट जाएगी, या सत्यनाम का अविनाशी धन एकत्र कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਮ ਦਾ ਸੱਚਾ ਧਨ ਜੋੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I accumulating perishable worldly coins or amassing the eternal treasure of the holy Name?'
    },
    practicalApplication: {
      hi: 'सांसारिक संग्रह की प्रवृत्ति कम करें; प्रतिदिन नाम-स्मरण और सेवा की सच्ची आध्यात्मिक पूंजी कमाएं।',
      pb: devanagariToGurmukhi('ਨਾਮ ਸਿਮਰਨ ਦਾ ਸੱਚਾ ਖਜ਼ਾਨਾ ਇਕੱਠਾ ਕਰੋ।'),
      en: 'Shift focus from hoarding perishable wealth to amassing spiritual capital through remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे नश्वर माया के मोह से छुड़ाकर अपने पावन नाम की सच्ची और अक्षय पूंजी प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਾਮ ਧਨ ਦਾ ਖਜ਼ਾਨਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the obsession of hoarding and enrich my soul with the eternal wealth of Your Name.'
    },
    quiz: []
  },
  {
    id: 'maya-11',
    number: 1451,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ११',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੧',
      en: 'Maya Ko Ang - 11',
    },
    text: {
      hi: 'कबीर या संसार की, झूठी माया मोह।\nजिहि घर जिता बधावना, तिहि घर तेता दोह।।',
      pb: devanagariToGurmukhi('कबीर या संसार की, झूठी माया मोह। जिहि घर जिता बधावना, तिहि घर तेता दोह।।'),
      en: 'Kabeer yaa sansaar kee, jhoothee maayaa moh. Jihi ghar jitaa badhaavanaa, tihi ghar tetaa doh..'
    },
    transliteration: 'Kabeer ya sansaar ki, jhoothi maya moh. Jihi ghar jita badhavana, tihi ghar teta doh.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि इस संसार के लोगों का यह माया-मोह झूठा है। सुख-वैभव रूपी यह माया जिस घर में जितनी अधिक होती है, इसकी प्रसन्नता जितनी अधिक होती है, वहां उतनी ही विपत्ति भी आती है। उस घर में आपसी वैर भाव तथा दुःख अधिक होते हैं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਸ ਸੰਸਾਰ ਦਾ ਮਾਇਆ-ਮੋਹ ਝੂਠਾ ਹੈ। ਜਿਸ ਘਰ ਵਿੱਚ ਜਿੰਨੀ ਮਾਇਆ ਅਤੇ ਵਧਾਈਆਂ ਦਾ ਦਿਖਾਵਾ ਹੁੰਦਾ ਹੈ, ਓਥੇ ਓਨਾ ਹੀ ਈਰਖਾ, ਕਲੇਸ਼ ਅਤੇ ਦੁੱਖ (ਦੋਹ) ਵੱਧ ਹੁੰਦਾ ਹੈ।'),
      en: 'Kabir declares that the attachments of this world are utterly illusory. In whichever household material wealth and ostentatious celebrations abound, equally deep strife, anxiety, jealousy, and misery inevitably arise.'
    },
    wordMeanings: {
      hi: [
        { word: 'बधावना (Badhaavanaa)', meaning: 'धन-वैभव व उत्सव की झूठी खुशियां' },
        { word: 'तेता दोह (Tetaa doh)', meaning: 'उतना ही क्लेश, दुःख और ईर्ष्या' }
      ],
      pb: [
        { word: 'ਬਧਾਵਨਾ', meaning: 'ਵਧਾਈਆਂ / ਖੁਸ਼ੀ ਦਾ ਦਿਖਾਵਾ' },
        { word: 'ਦੋਹ', meaning: 'ਦੁੱਖ / ਕਲੇਸ਼ / ਈਰਖਾ' }
      ],
      en: [
        { word: 'Badhaavanaa', meaning: 'Showy celebrations of material prosperity' },
        { word: 'Tetaa doh', meaning: 'Equal amount of inner sorrow, envy, and conflict' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भौतिक वैभव के बाहरी दिखावे में सुख मान रहा हूँ, जबकि वह आंतरिक अशांति का कारण है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਬਾਹਰੀ ਦਿਖਾਵੇ ਦੇ ਸੁੱਖ ਪਿੱਛੇ ਦੁਖੀ ਹੋ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I mistakenly equate lavish material display with genuine inner peace?'
    },
    practicalApplication: {
      hi: 'सादा जीवन और उच्च विचार अपनाएं; भौतिक आडंबरों से दूर रहकर संतोषी जीवन जीएं।',
      pb: devanagariToGurmukhi('ਸਾਦਾ ਜੀਵਨ ਜਿਊ ਕੇ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਰੱਖੋ।'),
      en: 'Embrace simplicity and contentment, avoiding the toxic anxieties of ostentation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सांसारिक आडंबरों के क्लेश से बचाकर सादगी और आत्म-संतोष का वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਦਗੀ ਅਤੇ ਸੰਤੋਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the deceptive glamor of worldly display and anchor me in divine simplicity.'
    },
    quiz: []
  },
  {
    id: 'maya-12',
    number: 1452,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १२',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੨',
      en: 'Maya Ko Ang - 12',
    },
    text: {
      hi: 'माया करक कदीम है, यह भव सागर माहिं।\nजंबुक रूपी जीव है, खैंचते ही महि जाहिं ।।',
      pb: devanagariToGurmukhi('माया करक कदीम है, यह भव सागर माहिं। जंबुक रूपी जीव है, खैंचते ही महि जाहिं ।।'),
      en: 'Maayaa karak kadeem hai, yeh bhav saagar maahin. Jambuk roopee jeev hai, khainchte hee mahi jaahin..'
    },
    transliteration: 'Maya karak kadeem hai, yeh bhav saagar maahin. Jambuk roopi jeev hai, khainchte hi mahi jaahin.',
    bhavarth: {
      hi: 'इस संसार-सागर में यह माया सूखी हड्डियों का बड़ा-सा ढेर है और विषयी अज्ञानी जीव सियार का रूप है। जीवन-भर उसे अपनी ओर खींचते-खींचते वे यूं ही मर जाते हैं, अर्थात इस माया के चक्कर में पड़े हुए जीव जीवन-पर्यन्त दुःख पाते हुए ही मृत्यु को प्राप्त होते हैं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਸਾਗਰ ਵਿੱਚ ਮਾਇਆ ਹੱਡੀਆਂ ਦਾ ਇੱਕ ਸੁੱਕਾ ਢੇਰ ਹੈ ਅਤੇ ਅਗਿਆਨੀ ਜੀਵ ਗਿੱਦੜ (ਜੰਬੁਕ) ਵਰਗਾ ਹੈ ਜੋ ਉਮਰ ਭਰ ਉਸਨੂੰ ਖਿੱਚਦਾ-ਖਿੱਚਦਾ ਖਾਲੀ ਹੱਥ ਮਰ ਜਾਂਦਾ ਹੈ।'),
      en: 'In this worldly ocean, Maya is like a heap of dry bones, and the deluded soul acts like a hungry jackal (Jambuk). Gnawing and pulling at meatless bones all its life, it perishes in exhaustion without ever tasting real nourishment.'
    },
    wordMeanings: {
      hi: [
        { word: 'करक कदीम (Karak kadeem)', meaning: 'सूखी अस्थियों/हड्डियों का पुराना ढेर' },
        { word: 'जंबुक रूपी जीव (Jambuk roopee jeev)', meaning: 'सियार/गीदड़ के समान तृष्णाग्रस्त जीव' },
        { word: 'खैंचते ही महि जाहिं (Khainchte hee mahi jaahin)', meaning: 'खींचते-खींचते धरती में समा जाना, व्यर्थ मर जाना' }
      ],
      pb: [
        { word: 'ਕਰਕ', meaning: 'ਸੁੱਕੀਆਂ ਹੱਡੀਆਂ' },
        { word: 'ਜੰਬੁਕ', meaning: 'ਗਿੱਦੜ' }
      ],
      en: [
        { word: 'Karak kadeem', meaning: 'An ancient pile of dry bones (hollow pleasures)' },
        { word: 'Jambuk', meaning: 'A jackal obsessively chewing dry bones' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सियार की भांति माया की सूखी हड्डियों को चबाकर अपना जीवन व्यर्थ गंवा रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੀਆਂ ਸੁੱਕੀਆਂ ਹੱਡੀਆਂ ਪਿੱਛੇ ਜੀਵਨ ਬਰਬਾਦ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I exhausting my soul chewing on the dry bones of worldly desires like a deluded jackal?'
    },
    practicalApplication: {
      hi: 'सांसारिक वासनाओं की नीरसता को पहचानें; सत्यनाम रूपी अमृत का पान कर आत्मा को तृप्त करें।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੀ ਨੀਰਸਤਾ ਛੱਡ ਕੇ ਨਾਮ-ਅੰਮ੍ਰਿਤ ਪੀਓ।'),
      en: 'Turn away from barren sensory pursuits to feast upon the nectar of the Satguru’s Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस सियार जैसी अंधी तृष्णा से बचाकर अपने नाम-अमृत का रसपान कराइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਭੁੱਖ ਤੋਂ ਬਚਾ ਕੇ ਨਾਮ ਦਾ ਅੰਮ੍ਰਿਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the jackal-like cravings of the ego and satisfy my soul with divine nectar.'
    },
    quiz: []
  },
  {
    id: 'maya-13',
    number: 1453,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १३',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੩',
      en: 'Maya Ko Ang - 13',
    },
    text: {
      hi: 'आंधी आई प्रेम की, ढही भरम की भीत।\nमाया टाटी उड़ि गई, लगी नाम सों प्रीत।।',
      pb: devanagariToGurmukhi('आंधी आई प्रेम की, ढही भरम की भीत। माया टाटी उड़ि गई, लगी नाम सों प्रीत।।'),
      en: 'Aandhee aayee prem kee, dhahee bharam kee bheet. Maayaa taatee udi gayee, lagee naam son preet..'
    },
    transliteration: 'Aandhi aayi prem ki, dhahi bharam ki bheet. Maya taati udi gayi, lagi naam son preet.',
    bhavarth: {
      hi: 'जब सद्गुरु के पावन प्रेम की आंधी आई, तो अज्ञान रूपी भ्रम की दीवार गिर गई और उस पर रखी माया-मोह की टाट उड़ गई, अर्थात माया-मोह का नाश हो गया और सद्गुरु के अविनाशी नाम-ज्ञान से प्रीत हो गई।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਸਤਿਗੁਰੂ ਦੇ ਪ੍ਰੇਮ ਦੀ ਹਨੇਰੀ ਆਈ ਤਾਂ ਭਰਮਾਂ ਦੀ ਕੰਧ ਢਹਿ ਪਈ ਅਤੇ ਮਾਇਆ ਦੀ ਛੱਪਰੀ (ਟਾਟੀ) ਉੱਡ ਗਈ। ਮਨ ਦੀ ਸੱਚੀ ਪ੍ਰੀਤ ਪ੍ਰਭੂ ਦੇ ਸਤਯਨਾਮ ਨਾਲ ਲੱਗ ਗਈ।'),
      en: 'When the tempest of divine love surged from the Satguru, the brittle wall of delusion collapsed, and the thatched screen of Maya was blown away forever. Now the soul is illuminated, bound in eternal love with the holy Name.'
    },
    wordMeanings: {
      hi: [
        { word: 'आंधी आई प्रेम की (Aandhee aayee prem kee)', meaning: 'सद्गुरु की अनन्य कृपा व दिव्य प्रेम का प्रचंड वेग' },
        { word: 'भरम की भीत (Bharam kee bheet)', meaning: 'अज्ञान और द्वैत की दीवार ढह जाना' },
        { word: 'माया टाटी उड़ि गई (Maayaa taatee udi gayee)', meaning: 'माया का कच्चा आवरण छिन्न-भिन्न हो जाना' }
      ],
      pb: [
        { word: 'ਭਰਮ ਕੀ ਭੀਤ', meaning: 'ਭਰਮਾਂ ਦੀ ਕੰਧ' },
        { word: 'ਟਾਟੀ', meaning: 'ਕੱਚੀ ਛੱਤ / ਪਰਦਾ' }
      ],
      en: [
        { word: 'Aandhee aayee prem kee', meaning: 'The storm of divine love swept through' },
        { word: 'Bharam kee bheet', meaning: 'The wall of delusion collapsed' },
        { word: 'Taatee udi gayee', meaning: 'The thatched screen of Maya was completely blown away' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर सद्गुरु के पावन प्रेम की वह आंधी उठी है जिसने माया और भ्रम के आवरण को उड़ा दिया हो?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਗੁਰੂ ਪ੍ਰੇਮ ਨਾਲ ਮਾਇਆ ਦਾ ਪਰਦਾ ਉੱਡ ਗਿਆ ਹੈ?'),
      en: 'Has the gale of divine love demolished the walls of doubt and blown away the veil of illusion?'
    },
    practicalApplication: {
      hi: 'सतगुरु के प्रेम में डूबें; प्रेम और भक्ति के जागरण से समस्त संशय और भ्रम स्वतः नष्ट हो जाते हैं।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਹੋ ਕੇ ਭਰਮ ਮਿਟਾਓ।'),
      en: 'Immerse deeply in love for the Master until every trace of worldly illusion vanishes.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! अपने पावन प्रेम की वह आंधी मेरे हृदय में प्रवाहित कीजिए जिससे मेरी माया की टाट उड़ जाए और केवल आपका नाम शेष रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਅੰਦਰ ਪ੍ਰੇਮ ਦਾ ਪ੍ਰਕਾਸ਼ ਕਰਕੇ ਭਰਮ ਮਿਟਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Let the tempest of Your divine love sweep through my soul and bind me forever to Your holy Name.'
    },
    quiz: []
  },
  {
    id: 'maya-14',
    number: 1454,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १४',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੪',
      en: 'Maya Ko Ang - 14',
    },
    text: {
      hi: 'झीनी माया जिन तजी, मोटी गई बिलाय।\nऐसे जन के निकट से, सब दुःख गये हिराय।।',
      pb: devanagariToGurmukhi('झीनी माया जिन तजी, मोटी गई बिलाय। ऐसे जन के निकट से, सब दुःख गये हिराय।।'),
      en: 'Jheenee maayaa jin tajee, motee gayee bilaay. Aise jan ke nikat se, sab dukh gaye hiraay..'
    },
    transliteration: 'Jheeni maya jin taji, moti gayi bilaay. Aise jan ke nikat se, sab dukh gaye hiraay.',
    bhavarth: {
      hi: 'जिन्होंने वासना-रूपी सूक्ष्म (झीनी) माया की आसक्ति का त्याग कर दिया, उनकी स्थूल (मोटी) माया का संबंध स्वयं ही नष्ट हो गया। फिर ऐसे सज्जन पुरुषों के दुःख समाप्त हो जाते हैं, अर्थात वे सर्वसुखी हो जाते हैं।',
      pb: devanagariToGurmukhi('ਜਿਨ੍ਹਾਂ ਨੇ ਮਨ ਵਿੱਚੋਂ ਸੂਖਮ (ਝੀਣੀ) ਮਾਇਆ ਦੀ ਵਾਸਨਾ ਤਿਆਗ ਦਿੱਤੀ, ਉਹਨਾਂ ਦੀ ਸਥੂਲ (ਮੋਟੀ) ਮਾਇਆ ਆਪੇ ਹੀ ਨਸ਼ਟ ਹੋ ਗਈ। ਅਜਿਹੇ ਗੁਰਮੁਖਾਂ ਦੇ ਨੇੜਿਓਂ ਸਾਰੇ ਦੁੱਖ ਸਦਾ ਲਈ ਗਾਇਬ ਹੋ ਜਾਂਦੇ ਹਨ।'),
      en: 'Those who have renounced subtle (Jheeni) Maya—the inner cravings for fame, pride, and praise—find that gross material attachments dissolve effortlessly. From the presence of such realized souls, all sorrows vanish forever.'
    },
    wordMeanings: {
      hi: [
        { word: 'झीनी माया (Jheenee maayaa)', meaning: 'सूक्ष्म वासनाएं, मान-बड़ाई, अहंकार, प्रतिष्ठा की चाह' },
        { word: 'मोटी गई बिलाय (Motee gayee bilaay)', meaning: 'स्थूल धन-संपदा की आसक्ति स्वतः नष्ट हो गई' },
        { word: 'दुःख गये हिराय (Dukh gaye hiraay)', meaning: 'समस्त त्रिताप व क्लेश सदा के लिए समाप्त हो गए' }
      ],
      pb: [
        { word: 'ਝੀਣੀ ਮਾਇਆ', meaning: 'ਸੂਖਮ ਮਾਇਆ / ਮਾਨ-ਵਡਿਆਈ' },
        { word: 'ਮੋਟੀ', meaning: 'ਸਥੂਲ ਧਨ-ਦੌਲਤ' },
        { word: 'ਹਿਰਾਇ', meaning: 'ਗੁਆਚ ਗਏ / ਮੁੱਕ ਗਏ' }
      ],
      en: [
        { word: 'Jheenee maayaa', meaning: 'Subtle Maya (desire for praise, spiritual ego, status)' },
        { word: 'Motee gayee bilaay', meaning: 'Gross physical attachments dissolve naturally' },
        { word: 'Dukh gaye hiraay', meaning: 'All miseries disappear without a trace' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने सूक्ष्म मान-बड़ाई और प्रशंसा की झीनी माया को भी हृदय से त्यागा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਵਡਿਆਈ ਦੀ ਸੂਖਮ ਮਾਇਆ ਤਿਆਗ ਦਿੱਤੀ ਹੈ?'),
      en: 'Have I eradicated the subtle Maya of seeking praise, validation, and status?'
    },
    practicalApplication: {
      hi: 'प्रशंसा और प्रतिष्ठा की चाह छोड़ें; जब सूक्ष्म वासना मिटती है तभी सच्चा आनंद प्राप्त होता है।',
      pb: devanagariToGurmukhi('ਮਾਨ-ਵਡਿਆਈ ਦੀ ਭੁੱਖ ਤਿਆਗੋ।'),
      en: 'Release the subtle appetite for recognition to experience deep, untroubled bliss.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे स्थूल और सूक्ष्म दोनों प्रकार की माया से मुक्त कर अखंड आत्म-शांति प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੂਖਮ ਮਾਇਆ ਦੇ ਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from both gross and subtle forms of illusion and establish me in pure serenity.'
    },
    quiz: []
  },
  {
    id: 'maya-15',
    number: 1455,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १५',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੫',
      en: 'Maya Ko Ang - 15',
    },
    text: {
      hi: 'सुकृत लागै साधु की, बादि विमुख की जाय।\nकै तो तल गाड़ी रहै, के कोय औरे खाय।।',
      pb: devanagariToGurmukhi('सुकृत लागै साधु की, बादि विमुख की जाय। कै तो तल गाड़ी रहै, के कोय औरे खाय।।'),
      en: 'Sukrit laagai saadhu kee, baadi vimukh kee jaay. Kai to tal gaadee rahai, ke koy aure khaay..'
    },
    transliteration: 'Sukrit laagai saadhu ki, baadi vimukh ki jaay. Kai to tal gaadi rahai, ke koy aure khaay.',
    bhavarth: {
      hi: 'साधु-संतों एवं सेवक-भक्तों का धन सदैव परोपकार व हित के सत्कर्मों में ही लगता है, परंतु गुरु से विमुख (निगुरों) जनों का धन व्यर्थ में चला जाता है। वह या तो भूमि में गड़ा रह जाता है या उसे कोई दूसरा ही लूटकर खाता है।',
      pb: devanagariToGurmukhi('ਸੰਤਾਂ ਦਾ ਧਨ ਸਦਾ ਨੇਕ ਕੰਮਾਂ (ਸੁਕ੍ਰਿਤ) ਵਿੱਚ ਲੱਗਦਾ ਹੈ, ਪਰ ਗੁਰੂ ਤੋਂ ਬੇਮੁਖਾਂ ਦਾ ਧਨ ਵਿਅਰਥ ਜਾਂਦਾ ਹੈ। ਜਾਂ ਤਾਂ ਉਹ ਜ਼ਮੀਨ ਵਿੱਚ ਦੱਬਿਆ ਰਹਿ ਜਾਂਦਾ ਹੈ ਜਾਂ ਕੋਈ ਹੋਰ ਖੋਹ ਕੇ ਖਾ ਜਾਂਦਾ ਹੈ।'),
      en: 'The wealth of saintly souls is consecrated in noble deeds and universal welfare (Sukrit), whereas the wealth of those turned away from the Satguru goes to complete waste: it either remains buried uselessly in the ground or is looted by strangers.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुकृत लागै (Sukrit laagai)', meaning: 'सत्कर्मों, परोपकार व सेवा में लगना' },
        { word: 'बादि विमुख की जाय (Baadi vimukh kee jaay)', meaning: 'गुरु-विमुख लोगों का धन व्यर्थ नष्ट हो जाना' },
        { word: 'तल गाड़ी रहै (Tal gaadee rahai)', meaning: 'जमीन में गड़ा हुआ लावारिस पड़ा रह जाना' }
      ],
      pb: [
        { word: 'ਸੁਕ੍ਰਿਤ', meaning: 'ਨੇਕ ਕਾਰਜ / ਭਲਾ ਕੰਮ' },
        { word: 'ਬਾਦਿ', meaning: 'ਵਿਅਰਥ' }
      ],
      en: [
        { word: 'Sukrit laagai', meaning: 'Employed in righteous and compassionate works' },
        { word: 'Baadi vimukh kee', meaning: 'Squandered uselessly by the godless' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धन सुकृत (सत्कर्मों) में लग रहा है, या व्यर्थ के प्रपंचों में नष्ट हो रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਕਮਾਈ ਸੁਕ੍ਰਿਤ ਵਿੱਚ ਲੱਗ ਰਹੀ ਹੈ?'),
      en: 'Is my earned wealth sanctified in benevolent works or doomed to be wasted?'
    },
    practicalApplication: {
      hi: 'अपने साधनों को सत्कर्मों और सेवा में लगाएं ताकि जीवन का प्रत्येक पल और संसाधन सार्थक हो।',
      pb: devanagariToGurmukhi('ਨੇਕ ਕੰਮਾਂ ਵਿੱਚ ਧਨ ਲਾ ਕੇ ਜੀਵਨ ਸਫਲ ਕਰੋ।'),
      en: 'Channel your earnings into benevolent, spiritual causes before they are lost.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे समस्त साधनों को अपने पावन सुकृत और जन-कल्याण के कार्यों में लगाने की कृपा कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨੇਕ ਕਮਾਈ ਨੂੰ ਸੇਵਾ ਵਿੱਚ ਲਾਉਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bless me so that every resource entrusted to me serves righteous and holy deeds.'
    },
    quiz: []
  },
  {
    id: 'maya-16',
    number: 1456,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १६',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੬',
      en: 'Maya Ko Ang - 16',
    },
    text: {
      hi: 'साधु ऐसा चाहिए, आई देई चलाय।\nदोस न लागै तासु को, शिर की टरै बलाय।।',
      pb: devanagariToGurmukhi('साधु ऐसा चाहिए, आई देई चलाय। दोस न लागै तासु को, शिर की टरै बलाय।।'),
      en: 'Saadhu aisaa chaahiye, aayee deyee chalaay. Dos na laagai taasu ko, shir kee tarai balaay..'
    },
    transliteration: 'Saadhu aisa chahiye, aayi deyi chalaay. Dos na laagai taasu ko, shir ki tarai balaay.',
    bhavarth: {
      hi: 'साधु को सेवा-पूजा में आए धन को फिर से धर्म-कर्म में लगा देना चाहिए। ऐसा करने से उन्हें माया के दोष (काम, क्रोध, लोभ, मद, मोह आदि) नहीं लगेंगे। इससे उस धन की चिंता की व्याधि भी टल जाएगी।',
      pb: devanagariToGurmukhi('ਸੱਚਾ ਸਾਧੂ ਅਜਿਹਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਜੋ ਆਈ ਹੋਈ ਮਾਇਆ ਨੂੰ ਤੁਰੰਤ ਪਰਉਪਕਾਰ ਵਿੱਚ ਅੱਗੇ ਚਲਾ ਦੇਵੇ। ਇਸ ਨਾਲ ਨਾ ਮਾਇਆ ਦਾ ਕੋਈ ਦੋਸ਼ ਲੱਗਦਾ ਹੈ ਅਤੇ ਸਿਰ ਦੀ ਬਲਾਅ (ਚਿੰਤਾ) ਵੀ ਟਲ ਜਾਂਦੀ ਹੈ।'),
      en: 'A true seeker or sadhu should be like a flowing river: passing along whatever offerings arrive straight into charitable and spiritual service. Thus untouched by the taint of hoarding, the burden and curse of wealth is averted.'
    },
    wordMeanings: {
      hi: [
        { word: 'आई देई चलाय (Aayee deyee chalaay)', meaning: 'आई हुई संपदा को तुरंत परोपकार में आगे बढ़ा देना' },
        { word: 'दोस न लागै (Dos na laagai)', meaning: 'माया का लोभ व विकार स्पर्श नहीं करता' },
        { word: 'शिर की टरै बलाय (Shir kee tarai balaay)', meaning: 'संग्रह और सुरक्षा की मानसिक चिंता से मुक्ति' }
      ],
      pb: [
        { word: 'ਦੇਈ ਚਲਾਇ', meaning: 'ਅੱਗੇ ਵੰਡ ਦੇਣਾ' },
        { word: 'ਸਿਰ ਕੀ ਬਲਾਇ', meaning: 'ਸਿਰ ਦੀ ਮੁਸੀਬਤ / ਚਿੰਤਾ' }
      ],
      en: [
        { word: 'Aayee deyee chalaay', meaning: 'Pass forward whatever comes into selfless circulation' },
        { word: 'Shir kee tarai balaay', meaning: 'Averts the curse and anxiety of hoarding' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं धन का संग्रह करके चिंता का बोझ बढ़ा रहा हूँ, या उसे परोपकार में प्रवाहित कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਧਨ ਦਾ ਸੰਗ੍ਰਹਿ ਕਰਦਾ ਹਾਂ ਜਾਂ ਪਰਉਪਕਾਰ ਵਿੱਚ ਲਾਉਂਦਾ ਹਾਂ?'),
      en: 'Am I hoarding wealth as a burden or circulating it freely in service of the needy?'
    },
    practicalApplication: {
      hi: 'धन को नदी के जल की भांति प्रवाहित रखें; संग्रह के स्थान पर दान और सेवा का आचरण करें।',
      pb: devanagariToGurmukhi('ਧਨ ਨੂੰ ਸੇਵਾ ਵਿੱਚ ਲਾ ਕੇ ਚਿੰਤਾ-ਮੁਕਤ ਰਹੋ।'),
      en: 'Keep resources flowing generously in charitable circulation to remain free from worry.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे निर्लिप्त भाव से संपत्ति का सदुपयोग करने और परोपकार में लगाने का पावन विवेक दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਰਲੇਪ ਰਹਿ ਕੇ ਸੇਵਾ ਕਰਨ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the unattached wisdom of a true sadhu who circulates blessings freely.'
    },
    quiz: []
  },
  {
    id: 'maya-17',
    number: 1457,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १७',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੭',
      en: 'Maya Ko Ang - 17',
    },
    text: {
      hi: 'मीठा सब कोय खात है, विष है लागै धाय।\nनीम न कोई पीवसी, सबै रोग मिट जाय।।',
      pb: devanagariToGurmukhi('मीठा सब कोय खात है, विष है लागै धाय। नीम न कोई पीवसी, सबै रोग मिट जाय।।'),
      en: 'Meethaa sab koy khaat hai, vish hai laagai dhaay. Neem na koyee peevsee, sabai rog mit jaay..'
    },
    transliteration: 'Meetha sab koy khaat hai, vish hai laagai dhaay. Neem na koyi peevasi, sabai rog mit jaay.',
    bhavarth: {
      hi: 'माया की विषय-सुख रूपी मिठाई को सभी खा लेते हैं, परंतु उसका परिणाम भयंकर विष के समान होता है। विवेक-वैराग्य की कठोर साधना रूपी नीम को कोई ग्रहण नहीं करता, जिससे जीवन के सभी रोग नष्ट हो जाते हैं, अर्थात जिसका परिणाम अमृत तुल्य होता है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੇ ਮਿੱਠੇ ਵਿਸ਼ੇ-ਭੋਗ ਸਾਰੇ ਦੌੜ-ਦੌੜ ਕੇ ਖਾਂਦੇ ਹਨ, ਭਾਵੇਂ ਉਹ ਜ਼ਹਿਰ ਵਾਂਗ ਮਾਰੂ ਹਨ। ਪਰ ਗਿਆਨ-ਵੈਰਾਗ ਦੇ ਕੌੜੇ ਨਿੰਮ ਨੂੰ ਕੋਈ ਨਹੀਂ ਪੀਂਦਾ, ਜਿਸ ਨਾਲ ਆਤਮਾ ਦੇ ਸਾਰੇ ਰੋਗ ਮਿਟ ਸਕਦੇ ਹਨ।'),
      en: 'Everyone rushes eagerly to devour the sweet delicacies of sensory pleasures, oblivious to the deadly poison hidden within. Yet none willingly drinks the bitter neem of spiritual discipline and self-restraint, which alone cures every chronic disease of the soul.'
    },
    wordMeanings: {
      hi: [
        { word: 'मीठा खात है (Meethaa khaat hai)', meaning: 'इंद्रियों के प्रिय भोगों का उपभोग करना' },
        { word: 'विष है लागै धाय (Vish hai laagai dhaay)', meaning: 'भोगों का अंततः विषैला व विनाशकारी परिणाम' },
        { word: 'नीम न कोई पीवसी (Neem na koyee peevsee)', meaning: 'कठिन साधना, संयम व विवेक को न अपनाना' }
      ],
      pb: [
        { word: 'ਬਿਖੁ / ਵਿਸ਼', meaning: 'ਜ਼ਹਿਰ' },
        { word: 'ਨੀਮ', meaning: 'ਨਿੰਮ / ਕੌੜੀ ਸਾਧਨਾ' }
      ],
      en: [
        { word: 'Meethaa khaat', meaning: 'Devouring sweet sensory indulgences' },
        { word: 'Vish laagai', meaning: 'Proves to be deadly poison in the end' },
        { word: 'Neem na peevasi', meaning: 'None drinks the bitter medicine of self-discipline' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं क्षणिक मीठे भोगों के विष में फंस रहा हूँ या साधना रूपी कल्याणकारी नीम को स्वीकार कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਿੱਠੇ ਭੋਗਾਂ ਦਾ ਜ਼ਹਿਰ ਖਾ ਰਿਹਾ ਹਾਂ ਜਾਂ ਨਾਮ ਦੀ ਕੌੜੀ ਦਵਾਈ?'),
      en: 'Am I indulging in poisonous sweet pleasures or taking the curative medicine of spiritual discipline?'
    },
    practicalApplication: {
      hi: 'क्षणिक स्वादों के प्रलोभन से बचें; संयम, तितिक्षा और गुरु-आज्ञा के अनुशासन को सहर्ष स्वीकार करें।',
      pb: devanagariToGurmukhi('ਸੰਜਮ ਅਤੇ ਅਨੁਸ਼ਾਸਨ ਨੂੰ ਗਲੇ ਲਗਾਓ।'),
      en: 'Embrace the bitter medicine of discipline to attain the sweet fruit of eternal health.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे विषय-सुखों के विष से बचाकर विवेक-वैराग्य के पावन अनुशासन को अपनाने की शक्ति दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਵਿਸ਼ਿਆਂ ਦੇ ਜ਼ਹਿਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me from the poisoned sweets of worldly desires and strengthen my resolve in spiritual practice.'
    },
    quiz: []
  },
  {
    id: 'maya-18',
    number: 1458,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १८',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੮',
      en: 'Maya Ko Ang - 18',
    },
    text: {
      hi: 'मोटी माया सब तजैं, झीनी तजी न जाय।\nपीर पैगम्बर औलिया, झीनी सबको खाय।।',
      pb: devanagariToGurmukhi('मोटी माया सब तजैं, झीनी तजी न जाय। पीर पैगम्बर औलिया, झीनी सबको खाय।।'),
      en: 'Motee maayaa sab tajain, jheenee tajee na jaay. Peer paigambar auliyaa, jheenee sabko khaay..'
    },
    transliteration: 'Moti maya sab tajain, jheeni taji na jaay. Peer paigambar auliya, jheeni sabko khaay.',
    bhavarth: {
      hi: 'इस मोहिनी माया का स्थूल स्वरूप यानी धन-संपत्ति, पुत्र-स्त्री, घर तथा सगे-संबंधी आदि का तो बहुत से लोग त्याग कर देते हैं, परंतु इसके सूक्ष्म रूप यानी यश, कीर्ति, मान-सम्मान, मान-मनौती एवं अन्य इसी प्रकार की कामनाओं का त्याग नहीं कर पाते। बस माया की यही सूक्ष्म आसक्ति पीर-पैगंबर व औलिया आदि सबको खा जाती है।',
      pb: devanagariToGurmukhi('ਧਨ-ਦੌਲਤ ਤੇ ਘਰ-ਬਾਰ ਵਰਗੀ ਸਥੂਲ (ਮੋਟੀ) ਮਾਇਆ ਤਾਂ ਬਹੁਤ ਲੋਕ ਛੱਡ ਦਿੰਦੇ ਹਨ, ਪਰ ਮਾਨ-ਵਡਿਆਈ ਤੇ ਪ੍ਰਸਿੱਧੀ ਦੀ ਸੂਖਮ (ਝੀਣੀ) ਮਾਇਆ ਛੱਡਣੀ ਬੜੀ ਔਖੀ ਹੈ। ਇਹ ਸੂਖਮ ਹੰਕਾਰ ਵੱਡੇ-ਵੱਡੇ ਪੀਰਾਂ-ਪੈਗੰਬਰਾਂ ਨੂੰ ਵੀ ਗ੍ਰਸ ਲੈਂਦਾ ਹੈ।'),
      en: 'Many abandon gross Maya—wealth, estates, and family ties. Yet subtle Maya—the craving for reputation, spiritual pride, and adulation—is rarely forsaken. This invisible snare consumes even renowned ascetics and holy figures.'
    },
    wordMeanings: {
      hi: [
        { word: 'मोटी माया (Motee maayaa)', meaning: 'स्थूल धन, परिवार व सांसारिक संपत्ति' },
        { word: 'झीनी माया (Jheenee maayaa)', meaning: 'सूक्ष्म अहंकार, मान-बड़ाई, आध्यात्मिक सिद्धि की चाह' },
        { word: 'झीनी सबको खाय (Jheenee sabko khaay)', meaning: 'सूक्ष्म वासना बड़े-बड़े साधकों को भी गिरा देती है' }
      ],
      pb: [
        { word: 'ਮੋਟੀ ਮਾਇਆ', meaning: 'ਸਥੂਲ ਧਨ-ਦੌਲਤ' },
        { word: 'ਝੀਣੀ', meaning: 'ਸੂਖਮ ਮਾਨ-ਵਡਿਆਈ' },
        { word: 'ਪੀਰ ਪੈਗੰਬਰ', meaning: 'ਵੱਡੇ-ਵੱਡੇ ਅਵਧੂਤ' }
      ],
      en: [
        { word: 'Motee maayaa', meaning: 'Gross material wealth and property' },
        { word: 'Jheenee maayaa', meaning: 'Subtle vanity, spiritual ego, and craving for fame' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर संन्यासी या ज्ञानी होने का सूक्ष्म अहंकार तो नहीं छिपा हुआ है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਧਾਰਮਿਕ ਹੰਕਾਰ ਜਾਂ ਵਡਿਆਈ ਦੀ ਭੁੱਖ ਹੈ?'),
      en: 'Am I harboring subtle spiritual ego and pride in my own piety or knowledge?'
    },
    practicalApplication: {
      hi: 'यश और कीर्ति की चाह से बचें; निष्काम और विनम्र रहकर प्रभु-भक्ति में लीन रहें।',
      pb: devanagariToGurmukhi('ਨਿਮਰਤਾ ਧਾਰਨ ਕਰਕੇ ਹੰਕਾਰ ਤੋਂ ਬਚੋ।'),
      en: 'Cultivate deep, unfeigned humility, renouncing the craving for spiritual applause.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मान-बड़ाई और सूक्ष्म अहंकार की झीनी माया से बचाकर पूर्ण निष्कामता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੂਖਮ ਹੰਕਾਰ ਤੋਂ ਬਚਾ ਕੇ ਨਿਮਰਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Purge my heart of the subtle hunger for praise and shelter me in true humility.'
    },
    quiz: []
  },
  {
    id: 'maya-19',
    number: 1459,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - १९',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੧੯',
      en: 'Maya Ko Ang - 19',
    },
    text: {
      hi: 'ऊंची डाली प्रेम की, हरिजन बैठा खाय।\nनीचे बैठी बाघिनी, गिर पड़े तिहि खाय।।',
      pb: devanagariToGurmukhi('ऊंची डाली प्रेम की, हरिजन बैठा खाय। नीचे बैठी बाघिनी, गिर पड़े तिहि खाय।।'),
      en: 'Oonchee daalee prem kee, Harijan baithaa khaay. Neeche baithee baaghinee, gir pade tihi khaay..'
    },
    transliteration: 'Oonchi daali prem ki, Harijan baitha khaay. Neeche baithi baaghini, gir pade tihi khaay.',
    bhavarth: {
      hi: 'पावन प्रेम रूपी वृक्ष की ऊंची डाल पर बैठा सद्गुरु का कोई प्रिय सेवक-भक्त सुख-शांति रूपी मधुर फल का स्वाद ले रहा है। उस वृक्ष के नीचे महा भयंकर माया रूपी सिंहनी बैठी हुई है। यदि वह गुरु-भक्ति से तनिक भी चूक कर नीचे गिर पड़ा, तो सिंहनी उसे दबोचकर खा जाएगी, अर्थात भक्ति-साधना में माया से सदैव सतर्क रहना चाहिए।',
      pb: devanagariToGurmukhi('ਪ੍ਰੇਮ-ਰੁੱਖ ਦੀ ਉੱਚੀ ਡਾਲ \'ਤੇ ਬੈਠਾ ਭਗਤ ਨਾਮ-ਰਸ ਮਾਣ ਰਿਹਾ ਹੈ। ਪਰ ਹੇਠਾਂ ਮਾਇਆ ਰੂਪੀ ਸ਼ੇਰਨੀ (ਬਾਘਿਨੀ) ਤਾੜ ਲਾਈ ਬੈਠੀ ਹੈ; ਜੇਕਰ ਸਾਧਕ ਤਿਲਕ ਕੇ ਡਿੱਗਿਆ ਤਾਂ ਝੱਟ ਦਬੋਚ ਲਵੇਗੀ। ਸਦਾ ਸੁਚੇਤ ਰਹੋ।'),
      en: 'Perched high upon the branch of divine love, the devotee tastes the sweet fruit of inner peace. Yet crouching below sits the ferocious tigress of Maya: should the seeker slip from vigilance and fall, she will instantly devour him.'
    },
    wordMeanings: {
      hi: [
        { word: 'ऊंची डाली प्रेम की (Oonchee daalee prem kee)', meaning: 'ईश्वरीय प्रेम और उच्च आध्यात्मिक अवस्था' },
        { word: 'नीचे बैठी बाघिनी (Neeche baithee baaghinee)', meaning: 'नीचे घात लगाकर बैठी भयंकर माया रूपी बाघिन' },
        { word: 'गिर पड़े तिहि खाय (Gir pade tihi khaay)', meaning: 'साधना से तनिक भी फिसलने पर माया द्वारा ग्रस लिया जाना' }
      ],
      pb: [
        { word: 'ਹਰਿਜਨ', meaning: 'ਪ੍ਰਭੂ ਦਾ ਭਗਤ' },
        { word: 'ਬਾਘਿਨੀ', meaning: 'ਸ਼ੇਰਨੀ / ਮਾਇਆ' }
      ],
      en: [
        { word: 'Oonchee daalee', meaning: 'The lofty bough of divine love' },
        { word: 'Baaghinee', meaning: 'The predatory tigress of Maya lurking below' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं साधना की ऊंचाई पर पहुंचकर भी माया के घात से सतर्क और सावधान हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਭਗਤੀ ਵਿੱਚ ਸਦਾ ਸੁਚੇਤ ਤੇ ਸਾਵਧਾਨ ਹਾਂ?'),
      en: 'Do I remain vigilant against spiritual complacency while enjoying high devotional states?'
    },
    practicalApplication: {
      hi: 'आध्यात्मिक उन्नति के समय भी कभी प्रमाद न करें; निरंतर गुरु-स्मरण से अपनी स्थिति को सुदृढ़ रखें।',
      pb: devanagariToGurmukhi('ਸਾਧਨਾ ਵਿੱਚ ਕਦੇ ਅਵੇਸਲੇ ਨਾ ਹੋਵੋ।'),
      en: 'Never let your guard down in spiritual practice; hold fast to the Guru’s lotus feet.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया-बाघिन के प्रहार से बचाकर अपनी पावन प्रेम-डाल पर सदा सुरक्षित रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਪਕੜ ਤੋਂ ਸਦਾ ਬਚਾ ਕੇ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Hold me secure upon the high branch of Your love and protect me from the jaws of Maya.'
    },
    quiz: []
  },
  {
    id: 'maya-20',
    number: 1460,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २०',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੦',
      en: 'Maya Ko Ang - 20',
    },
    text: {
      hi: 'माया सेती मति मिली, जो सोबरिया देहि।\nनारद से मुनिवर गले, क्याहि भरोसा तेहि।।',
      pb: devanagariToGurmukhi('माया सेती मति मिली, जो सोबरिया देहि। नारद से मुनिवर गले, क्याहि भरोसा तेहि।।'),
      en: 'Maayaa setee mati milee, jo sobariyaa dehi. Naarad se munivar gale, kyaahi bharosaa tehi..'
    },
    transliteration: 'Maya seti mati mili, jo sobariya dehi. Narad se munivar gale, kyahi bharosa tehi.',
    bhavarth: {
      hi: 'इस माया-मोह से सावधान रहो। इससे मत मिलो, चाहे यह कितनी भी सुंदर व स्वर्णिम देह वाली ही क्यों न हो। इसके चक्कर में पड़कर तो देवर्षि नारद जैसे श्रेष्ठ मुनि भी गल गए। फिर विचार करो कि तुम्हारा क्या होगा? अर्थात माया के संग-प्रभाव से बच पाना अति कठिन है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਨਾਲ ਕਦੇ ਮਨ ਨਾ ਲਾਓ, ਭਾਵੇਂ ਇਹ ਸੋਨੇ ਵਰਗੀ ਸੁੰਦਰ ਦੇਹ ਧਾਰ ਕੇ ਆਵੇ। ਇਸਦੇ ਮੋਹ ਵਿੱਚ ਨਾਰਦ ਵਰਗੇ ਮਹਾਨ ਤਪੱਸਵੀ ਵੀ ਭਟਕ ਗਏ, ਫਿਰ ਸਾਧਾਰਨ ਇਨਸਾਨ ਦਾ ਇਸ \'ਤੇ ਕੀ ਭਰੋਸਾ?'),
      en: 'Never forge intimacy with Maya, no matter how golden and alluring her forms appear. When illustrious sages like Narada were swept away by her enchantment, how can an ordinary mortal ever trust her deceptive allure?'
    },
    wordMeanings: {
      hi: [
        { word: 'सोबरिया देहि (Sobariyaa dehi)', meaning: 'सुवर्ण/सोने जैसी सुंदर व मनमोहक काया' },
        { word: 'नारद से मुनिवर गले (Naarad se munivar gale)', meaning: 'देवर्षि नारद जैसे ऋषि भी मोह में पिघल गए' },
        { word: 'क्याहि भरोसा तेहि (Kyaahi bharosaa tehi)', meaning: 'इस धोखेबाज माया पर कभी विश्वास नहीं करना चाहिए' }
      ],
      pb: [
        { word: 'ਸੋਬਰਿਆ ਦੇਹੀ', meaning: 'ਸੋਨੇ ਵਰਗੀ ਸੁੰਦਰ ਕਾਇਆ' },
        { word: 'ਮੁਨਿਵਰ ਗਲੇ', meaning: 'ਵੱਡੇ ਰਿਸ਼ੀ ਵੀ ਧੋਖਾ ਖਾ ਗਏ' }
      ],
      en: [
        { word: 'Sobariyaa dehi', meaning: 'A captivating form dazzling like gold' },
        { word: 'Naarad se munivar gale', meaning: 'Even great sages like Narada were captivated' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया के आकर्षक रूपों पर मोहित होकर अपने साधना-पथ से विचलित तो नहीं हो रहा?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੇ ਸੁੰਦਰ ਰੂਪਾਂ ਤੋਂ ਧੋਖਾ ਖਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I susceptible to being seduced by glamorous worldly illusions that tripped even great ascetics?'
    },
    practicalApplication: {
      hi: 'माया के किसी भी बाह्य सौंदर्य या आकर्षण पर भरोसा न करें; सर्वत्र प्रभु के निराकार सत्य को देखें।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੇ ਰੂਪਾਂ \'ਤੇ ਭਰੋਸਾ ਨਾ ਕਰੋ।'),
      en: 'Never trust external sensory glamor; anchor awareness in the immutable Divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के सम्मोहक आकर्षणों से बचाकर केवल अपने चरणों का पावन विश्वास प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਮੋਹ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me from the golden traps of Maya and keep my faith anchored only in You.'
    },
    quiz: []
  },
  {
    id: 'maya-21',
    number: 1461,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २१',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੧',
      en: 'Maya Ko Ang - 21',
    },
    text: {
      hi: 'माया दीपक नर पतंग, भ्रमि भ्रमि माहिं परन्त।\nकोई एक गुरु ज्ञानते, उबरे साधु सन्त।।',
      pb: devanagariToGurmukhi('माया दीपक नर पतंग, भ्रमि भ्रमि माहिं परन्त। कोई एक गुरु ज्ञानते, उबरे साधु सन्त।।'),
      en: 'Maayaa deepak nar patang, bhrami bhrami maahin parant. Koyee ek Guru gyaante, ubare saadhu sant..'
    },
    transliteration: 'Maya deepak nar patang, bhrami bhrami maahin parant. Koyi ek Guru gyaante, ubare saadhu sant.',
    bhavarth: {
      hi: 'माया तो जलते दीपक की लौ के समान है और मनुष्य उन पतंगों की तरह हैं, जो इसके मोह में उस पर मंडराते रहते हैं। इस प्रकार भ्रम में भ्रमित अज्ञानी मनुष्य इसके ऊपर पड़ते हैं। कोई विरला ही साधु-संत होगा, जो गुरु के सदुपदेश ज्ञान आचरण से इस माया के महा-मोह से उद्धार पाता है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਬਲਦੇ ਦੀਵੇ ਦੀ ਲਾਟ ਵਰਗੀ ਹੈ ਅਤੇ ਮਨੁੱਖ ਪਤੰਗੇ ਵਾਂਗ ਭਟਕ-ਭਟਕ ਕੇ ਇਸ ਵਿੱਚ ਸੜ ਮਰਦਾ ਹੈ। ਕੇਵਲ ਕੋਈ ਵਿਰਲਾ ਸਾਧੂ-ਸੰਤ ਹੀ ਗੁਰੂ ਦੇ ਬ੍ਰਹਮ-ਗਿਆਨ ਨਾਲ ਇਸ ਭਿਆਨਕ ਅੱਗ ਵਿੱਚੋਂ ਬਚ ਨਿਕਲਦਾ ਹੈ।'),
      en: 'Maya is the dazzling flame of a lamp and mortal humans are like mindless moths circling it in infatuation, plunging into the fire to be consumed. Only a rare, fortunate saint survives, redeemed by the liberating light of the Satguru’s wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया दीपक (Maayaa deepak)', meaning: 'दीपक की आकर्षक किंतु भस्म करने वाली लौ' },
        { word: 'नर पतंग (Nar patang)', meaning: 'मोहित होकर जल मरने वाला अज्ञानी जीव रूपी कीट' },
        { word: 'भ्रमि भ्रमि माहिं परन्त (Bhrami bhrami maahin parant)', meaning: 'भ्रम में बार-बार उसी ज्वाला में कूदना' },
        { word: 'उबरे साधु सन्त (Ubare saadhu sant)', meaning: 'सद्गुरु के ज्ञान से बच निकलना व मुक्त होना' }
      ],
      pb: [
        { word: 'ਪਤੰਗ', meaning: 'ਦੀਵੇ \'ਤੇ ਸੜਨ ਵਾਲਾ ਕੀੜਾ' },
        { word: 'ਉਬਰੇ', meaning: 'ਬਚ ਗਏ / ਪਾਰ ਲੰਘ ਗਏ' }
      ],
      en: [
        { word: 'Maayaa deepak', meaning: 'Maya the scorching, mesmerizing lamp flame' },
        { word: 'Nar patang', meaning: 'Mortals acting like doomed moths' },
        { word: 'Ubare saadhu sant', meaning: 'Rare saints escaped safely through the Guru’s wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं पतंगे की भांति माया के आकर्षक दीपक पर जलने के लिए दौड़ रहा हूँ, या गुरु-ज्ञान से सुरक्षित हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਪਤੰਗੇ ਵਾਂਗ ਮਾਇਆ ਦੇ ਦੀਵੇ \'ਤੇ ਸੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I fluttering like a doomed moth into the fire of sensory glamor or protected by Guru-wisdom?'
    },
    practicalApplication: {
      hi: 'सांसारिक आकर्षणों की ज्वाला से दूर रहें; गुरु-ज्ञान के शीतल प्रकाश में अपनी चेतना को स्थिर करें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਮਾਇਆ ਦੀ ਅੱਗ ਤੋਂ ਬਚੋ।'),
      en: 'Turn away from the scorching flame of desire to bask in the cool illumination of Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे पतंगे की भांति माया-दीपक में भस्म होने से बचाकर अपने ज्ञान के पावन प्रकाश में अमर कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਅੱਗ ਵਿੱਚੋਂ ਕੱਢ ਕੇ ਬਚਾ ਲਵੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue this moth-like soul from the flame of Maya and grant me immortal life in Your grace.'
    },
    quiz: []
  },
  {
    id: 'maya-22',
    number: 1462,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २२',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੨',
      en: 'Maya Ko Ang - 22',
    },
    text: {
      hi: 'करक पड़ा मैदान में, कुकुर मिले लख कोट।\nदावा कर लड़ि मुए, अन्त चले सब छोड़।।',
      pb: devanagariToGurmukhi('करक पड़ा मैदान में, कुकुर मिले लख कोट। दावा कर लड़ि मुए, अन्त चले सब छोड़।।'),
      en: 'Karak padaa maidaan mein, kukur mile lakh kot. Daawaa kar ladi mue, ant chale sab chhod..'
    },
    transliteration: 'Karak pada maidaan mein, kukur mile lakh kot. Daawa kar ladi mue, ant chale sab chhod.',
    bhavarth: {
      hi: 'माया-रूपी अस्थि पंजर मैदान में पड़ा हुआ है और लाखों-करोड़ों कुत्ते उसे अपना मानकर उस पर चिपटे हुए हैं। वे सब आपस में लड़ मरे, परंतु कुछ न पा सके। यही दशा संसार के अज्ञानी जनों की है, जो इस माया को अपना-अपना कहकर मरते हैं, परंतु उनके हाथ कुछ नहीं लगता। अंत में सब उदास होकर उसे छोड़-छाड़कर चल पड़ते हैं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਰੂਪੀ ਸੁੱਕੀਆਂ ਹੱਡੀਆਂ ਦਾ ਢੇਰ ਮੈਦਾਨ ਵਿੱਚ ਪਿਆ ਹੈ ਅਤੇ ਲੱਖਾਂ-ਕਰੋੜਾਂ ਕੁੱਤੇ (ਸੰਸਾਰੀ ਜੀਵ) ਆਪੋ-ਆਪਣਾ ਦਾਅਵਾ ਕਰਕੇ ਲੜ-ਮਰ ਰਹੇ ਹਨ। ਅੰਤ ਵਿੱਚ ਕੁਝ ਵੀ ਹੱਥ ਨਾ ਆਇਆ ਤੇ ਸਭ ਕੁਝ ਛੱਡ ਕੇ ਤੁਰ ਪਏ।'),
      en: 'A pile of dry bones lies in the open field, and millions of fighting dogs swarm over it claiming ownership. They tear each other apart in bitter rivalry, yet at death, every single one departs empty-handed, leaving the bones behind.'
    },
    wordMeanings: {
      hi: [
        { word: 'करक पड़ा (Karak padaa)', meaning: 'सूखी हड्डियों का ढेर (नश्वर माया)' },
        { word: 'कुकुर मिले लख कोट (Kukur mile lakh kot)', meaning: 'लाखों-करोड़ों तृष्णाग्रस्त संसारी जीव' },
        { word: 'दावा कर लड़ि मुए (Daawaa kar ladi mue)', meaning: 'मेरा-मेरा कहकर लड़-मरना' }
      ],
      pb: [
        { word: 'ਕੁਕੁਰ', meaning: 'ਕੁੱਤੇ / ਮਾਇਆਧਾਰੀ ਜੀਵ' },
        { word: 'ਲਖ ਕੋਟ', meaning: 'ਲੱਖਾਂ-ਕਰੋੜਾਂ' }
      ],
      en: [
        { word: 'Karak padaa', meaning: 'A dry skeleton lying in the field (worthless wealth)' },
        { word: 'Kukur', meaning: 'Fighting dogs (greedy worldly souls fighting over possessions)' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी संपत्ति और अधिकारों के लिए संसार के लोगों की तरह लड़कर अपना जीवन नष्ट कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਧਨ ਪਿੱਛੇ ਦੂਜਿਆਂ ਨਾਲ ਲੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I quarreling over perishable possessions that I will inevitably leave behind at death?'
    },
    practicalApplication: {
      hi: 'सांसारिक वाद-विवाद और "मेरा-तेरा" के झगड़ों से ऊपर उठें; प्रेम, शांति और स्वाध्याय में जीवन बिताएं।',
      pb: devanagariToGurmukhi('ਝਗੜੇ ਛੱਡ ਕੇ ਪ੍ਰੇਮ ਅਤੇ ਸ਼ਾਂਤੀ ਨਾਲ ਜੀਓ।'),
      en: 'Rise above contentious squabbles over property and live in tranquil harmony.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सांसारिक दावों और झगड़ों की मूर्खता से बचाकर अपने पावन प्रेम का वैराग्य दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਝਗੜਿਆਂ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the foolish greed of fighting over bones and grant me peace at Your feet.'
    },
    quiz: []
  },
  {
    id: 'maya-23',
    number: 1463,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २३',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੩',
      en: 'Maya Ko Ang - 23',
    },
    text: {
      hi: 'माया दोय प्रकार की, जो कोय जानै खाय।\nएक मिलावै राम को, एक नरक ले जाय।।',
      pb: devanagariToGurmukhi('माया दोय प्रकार की, जो कोय जानै खाय। एक मिलावै राम को, एक नरक ले जाय।।'),
      en: 'Maayaa doy prakaar kee, jo koy jaanai khaay. Ek milaavai Raam ko, ek narak le jaay..'
    },
    transliteration: 'Maya doy prakaar ki, jo koy jaanai khaay. Ek milaavai Raam ko, ek narak le jaay.',
    bhavarth: {
      hi: 'माया दो प्रकार की होती है, यदि कोई इसका सदुपयोग करे तो यह देव-संपदा के रूप में और यदि दुरुपयोग करे तो आसुरी-संपदा के रूप में प्रकट होती है। इसमें से एक के द्वारा सत्कर्म होता है तथा जीवन कल्याणकारी बनता है। दूसरी के द्वारा दुष्कर्म (काम, क्रोध, हिंसा आदि) फलीभूत होते हैं, जो जीवन को नरक में ले जाते हैं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੋ ਤਰ੍ਹਾਂ ਦੀ ਹੈ, ਜੇ ਕੋਈ ਇਸਦੀ ਸਹੀ ਵਰਤੋਂ ਜਾਣਦਾ ਹੋਵੇ: ਇੱਕ (ਵਿਦਿਆ/ਦੈਵੀ ਮਾਇਆ) ਪਰਮਾਤਮਾ ਨਾਲ ਮਿਲਾ ਦਿੰਦੀ ਹੈ, ਦੂਜੀ (ਅਵਿਦਿਆ/ਵਿਕਾਰਾਂ ਵਾਲੀ) ਨਰਕਾਂ ਵਿੱਚ ਧੱਕ ਦਿੰਦੀ ਹੈ।'),
      en: 'Maya manifests in two distinct modes for those who understand how to utilize her: Vidya-Maya (employed in righteousness, service, and devotion) leads to union with the Supreme Divine, while Avidya-Maya (squandered in lust, pride, and cruelty) plunges the soul into hell.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया दोय प्रकार की (Maayaa doy prakaar kee)', meaning: 'विद्या माया (कल्याणकारी) और अविद्या माया (बंधनकारी)' },
        { word: 'एक मिलावै राम को (Ek milaavai Raam ko)', meaning: 'सत्कर्मों और सेवा में लगी संपदा परमात्मा से मिलाती है' },
        { word: 'एक नरक ले जाय (Ek narak le jaay)', meaning: 'विषयों व पापों में लगी संपदा पतन कराती है' }
      ],
      pb: [
        { word: 'ਦੋਇ ਪ੍ਰਕਾਰ', meaning: 'ਦੋ ਤਰ੍ਹਾਂ ਦੀ' },
        { word: 'ਨਰਕ', meaning: 'ਦੁੱਖਾਂ ਤੇ ਪਾਪਾਂ ਦਾ ਖੂਹ' }
      ],
      en: [
        { word: 'Doy prakaar', meaning: 'Two distinct modes (beneficent vs binding)' },
        { word: 'Milaavai Raam ko', meaning: 'Unites with the Supreme Lord through selfless use' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने साधनों और सामर्थ्य को विद्या-माया (परमार्थ) में लगा रहा हूँ, या अविद्या-माया (भोग) में?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਮਾਇਆ ਰੱਬ ਨਾਲ ਜੋੜ ਰਹੀ ਹੈ ਜਾਂ ਨਰਕ ਵੱਲ ਲੈ ਜਾ ਰਹੀ ਹੈ?'),
      en: 'Am I utilizing my energy and wealth as Vidya-Maya toward God or Avidya-Maya toward downfall?'
    },
    practicalApplication: {
      hi: 'संपत्ति और बुद्धि का उपयोग केवल धर्म, सेवा, सत्य और नाम-सिमरन के विस्तार में करें।',
      pb: devanagariToGurmukhi('ਧਨ ਦੀ ਸਹੀ ਵਰਤੋਂ ਕਰਕੇ ਪ੍ਰਭੂ ਨਾਲ ਜੁੜੋ।'),
      en: 'Direct all material and mental resources toward sacred, life-elevating ends.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपनी माया का सदुपयोग करने की दिव्यता दीजिए ताकि मेरा जीवन परमात्मा के साक्षात्कार में लगे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਸਹੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਸੋਝੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the spiritual discernment to transform all worldly tools into instruments of divine service.'
    },
    quiz: []
  },
  {
    id: 'maya-24',
    number: 1464,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २४',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੪',
      en: 'Maya Ko Ang - 24',
    },
    text: {
      hi: 'माया का सुख चार दिन, कंह तूं गहे गंवार।\nसपने पायो राज धन, जात न लागे बार।।',
      pb: devanagariToGurmukhi('माया का सुख चार दिन, कंह तूं गहे गंवार। सपने पायो राज धन, जात न लागे बार।।'),
      en: 'Maayaa kaa sukh chaar din, kanh toon gahe ganvaar. Sapne paayo raaj dhan, jaat na laage baar..'
    },
    transliteration: 'Maya ka sukh chaar din, kanh toon gahe ganvaar. Sapne paayo raaj dhan, jaat na laage baar.',
    bhavarth: {
      hi: 'माया का क्षणिक सुख मात्र चार दिन (थोड़े समय) का ही है। अरे मूर्ख! तू इसे क्यों पकड़ता है? यह तो स्वप्न में पाए राज्य-धन-संपत्ति के समान है। इसके जाने में देर नहीं लगती, अर्थात जिस प्रकार स्वप्न देखते-देखते भंग हो जाता है और देखा हुआ भी सब खो जाता है, उसी प्रकार यह माया भी खो जाती है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦਾ ਸੁੱਖ ਕੇਵਲ ਚਾਰ ਦਿਨਾਂ ਦਾ ਹੈ, ਹੇ ਮੂਰਖ! ਤੂੰ ਇਸਨੂੰ ਕਿਉਂ ਜੱਫਾ ਮਾਰ ਰਿਹਾ ਹੈਂ? ਇਹ ਤਾਂ ਸੁਪਨੇ ਵਿੱਚ ਮਿਲੇ ਰਾਜ-ਭਾਗ ਵਾਂਗ ਹੈ, ਅੱਖ ਖੁੱਲ੍ਹਦਿਆਂ ਹੀ ਅਲੋਪ ਹੋਣ ਵਿੱਚ ਦੇਰ ਨਹੀਂ ਲੱਗਦੀ।'),
      en: 'The pleasure of Maya lasts only for a few fleeting days; why cling to it so foolishly? It is precisely like an empire gained within a midnight dream: the moment your eyes open, not a trace remains.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुख चार दिन (Sukh chaar din)', meaning: 'अत्यंत क्षणभंगुर व अल्पकालिक सुख' },
        { word: 'गहे गंवार (Gahe ganvaar)', meaning: 'हे अज्ञानी जीव! तू इसे क्यों पकड़ता है' },
        { word: 'सपने पायो राज धन (Sapne paayo raaj dhan)', meaning: 'स्वप्न में पाए गए मिथ्या राज्य-वैभव के समान' }
      ],
      pb: [
        { word: 'ਗੰਵਾਰ', meaning: 'ਮੂਰਖ / ਅਗਿਆਨੀ' },
        { word: 'ਬਾਰ ਨ ਲਾਗੇ', meaning: 'ਦੇਰ ਨਾ ਲੱਗਣੀ' }
      ],
      en: [
        { word: 'Sukh chaar din', meaning: 'Fleeting pleasure lasting only a brief moment' },
        { word: 'Sapne paayo raaj dhan', meaning: 'Like wealth and royalty experienced within a dream' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं स्वप्न के समान क्षणभंगुर सांसारिक सुखों को शाश्वत मानकर धोखा खा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੁਪਨੇ ਵਰਗੇ ਸੁੱਖਾਂ ਨੂੰ ਸੱਚ ਮੰਨ ਬੈਠਾ ਹਾਂ?'),
      en: 'Am I building my life upon the phantom dream-wealth of this transient world?'
    },
    practicalApplication: {
      hi: 'संसार को स्वप्नवत समझें; नश्वर सुखों में आसक्त होने के बजाय शाश्वत परमात्मा में चित्त लगाएं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਨੂੰ ਸੁਪਨਾ ਜਾਣ ਕੇ ਨਾਮ ਵਿੱਚ ਜੁੜੋ।'),
      en: 'View worldly wealth as a passing dream and anchor your soul in the unshakeable Divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस स्वप्नवत माया के भ्रम से जगाकर अपने शाश्वत सत्य का अविनाशी बोध दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੁਪਨੇ ਦੇ ਭਰਮ ਤੋਂ ਜਗਾ ਕੇ ਸੱਚਾ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken me from this worldly dream and reveal the eternal Reality beyond illusion.'
    },
    quiz: []
  },
  {
    id: 'maya-25',
    number: 1465,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २५',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੫',
      en: 'Maya Ko Ang - 25',
    },
    text: {
      hi: 'माया संचै संग्रहै, वह दिन जानै नांहि।\nसहस बरस की सब करैं , मरैं मुहूरत मांहि।।',
      pb: devanagariToGurmukhi('माया संचै संग्रहै, वह दिन जानै नांहि। सहस बरस की सब करैं , मरैं मुहूरत मांहि।।'),
      en: 'Maayaa sanchai sangrahai, vah din jaanai naanhi. Sahas baras kee sab karain, marain muhoorat maanhi..'
    },
    transliteration: 'Maya sanchai sangrahai, vah din jaanai naanhi. Sahas baras ki sab karain, marain muhoorat maanhi.',
    bhavarth: {
      hi: 'मोह के कारण लोग इस माया को जोड़-जोड़कर संग्रह करते हैं, परंतु उस दिन को नहीं जानते, जिस दिन मृत्यु को आना है। लोभवश हजारों वर्षों के उपभोग की माया का संग्रह कर लेते हैं, जैसे वे तब तक जीएंगे, परंतु सत्य यह है कि मृत्यु को आने में क्षण-भर की भी देर नहीं लगती।',
      pb: devanagariToGurmukhi('ਮੋਹ ਵੱਸ ਲੋਕ ਮਾਇਆ ਜੋੜ-ਜੋੜ ਕੇ ਇਕੱਠੀ ਕਰਦੇ ਹਨ, ਪਰ ਮੌਤ ਦੇ ਦਿਨ ਨੂੰ ਭੁੱਲ ਜਾਂਦੇ ਹਨ। ਯੋਜਨਾਵਾਂ ਹਜ਼ਾਰਾਂ ਸਾਲਾਂ ਦੀਆਂ ਬਣਾਉਂਦੇ ਹਨ, ਪਰ ਪਲ-ਮਾਤਰ (ਮੁਹੂਰਤ) ਵਿੱਚ ਹੀ ਪ੍ਰਾਣ ਨਿਕਲ ਜਾਂਦੇ ਹਨ।'),
      en: 'Deluded by greed, mortals hoard mountains of wealth while oblivious to the looming day of death. They prepare plans for a thousand years as if they were immortal, yet their life breath departs in the fraction of a single moment.'
    },
    wordMeanings: {
      hi: [
        { word: 'संचै संग्रहै (Sanchai sangrahai)', meaning: 'जोड़-जोड़कर इकट्ठा करना' },
        { word: 'सहस बरस की सब करैं (Sahas baras kee sab karain)', meaning: 'हजारों वर्षों की लंबी योजनाएं बनाना' },
        { word: 'मरैं मुहूरत मांहि (Marain muhoorat maanhi)', meaning: 'पल-भर में ही मृत्यु का ग्रास बन जाना' }
      ],
      pb: [
        { word: 'ਸਹਸ ਬਰਸ', meaning: 'ਹਜ਼ਾਰਾਂ ਸਾਲ' },
        { word: 'ਮੁਹੂਰਤ ਮਾਹਿ', meaning: 'ਇੱਕ ਪਲ ਵਿੱਚ' }
      ],
      en: [
        { word: 'Sanchai sangrahai', meaning: 'Greedily accumulating and stockpiling wealth' },
        { word: 'Sahas baras', meaning: 'Scheming for a thousand future years' },
        { word: 'Marain muhoorat', meaning: 'Perishing within a single fleeting heartbeat' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अनंत भविष्य की चिंता में माया जोड़ रहा हूँ, जबकि अगला श्वास भी निश्चित नहीं है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੌਤ ਨੂੰ ਭੁਲਾ ਕੇ ਹਜ਼ਾਰਾਂ ਸਾਲਾਂ ਦੀਆਂ ਚਿੰਤਾਵਾਂ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I stockpiling for a thousand years ahead when my very next breath is uncertain?'
    },
    practicalApplication: {
      hi: 'अनावश्यक संग्रह त्यागें; वर्तमान में जीकर हर क्षण को प्रभु-भजन और सत्कर्म में लगाएं।',
      pb: devanagariToGurmukhi('ਸੰਗ੍ਰਹਿ ਛੱਡ ਕੇ ਅੱਜ ਹੀ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Cease endless hoarding; invest the present moment in divine contemplation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे भविष्य के झूठे प्रपंचों से निकालकर वर्तमान क्षण में आपके नाम-सिमरन में लीन रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਾਲ ਦੇ ਡਰ ਤੋਂ ਬਚਾ ਕੇ ਅੱਜ ਹੀ ਨਾਮ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the delusion of endless future accumulation and anchor me in the sacred present.'
    },
    quiz: []
  },
  {
    id: 'maya-26',
    number: 1466,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २६',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੬',
      en: 'Maya Ko Ang - 26',
    },
    text: {
      hi: 'कबीर माया सांपिनी, जनता ही को खाय।\nऐसा मिला न गारुड़ी, पकड़ि पिटारे बांय।।',
      pb: devanagariToGurmukhi('कबीर माया सांपिनी, जनता ही को खाय। ऐसा मिला न गारुड़ी, पकड़ि पिटारे बांय।।'),
      en: 'Kabeer maayaa saampinee, jantaa hee ko khaay. Aisaa milaa na gaarudee, pakadi pitaare baany..'
    },
    transliteration: 'Kabeer maya saampini, janta hi ko khaay. Aisa mila na gaarudi, pakadi pitaare baany.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह माया बहुत ही विषैली सर्पिणी है। यह स्वजनों को ही खा जाती है। माया से पले जीव माया के ही बंधन में पड़ जाते हैं। कोई इसका विष झाड़ने वाला नहीं मिला, जो इसे पकड़कर ज्ञान रूपी पिटारे में बंद कर सके।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਮਾਇਆ ਇੱਕ ਜ਼ਹਿਰੀਲੀ ਸੱਪਣੀ (ਸਾਂਪਣੀ) ਹੈ ਜੋ ਆਪਣੇ ਪਾਲਣਹਾਰਾਂ ਨੂੰ ਹੀ ਡੱਸ ਕੇ ਖਾ ਜਾਂਦੀ ਹੈ। ਕੋਈ ਅਜਿਹਾ ਸਮਰੱਥ ਗਾਰੁੜੀ (ਮੰਤਰ-ਗਿਆਨੀ) ਨਾ ਮਿਲਿਆ ਜੋ ਇਸਨੂੰ ਫੜ ਕੇ ਗਿਆਨ ਦੇ ਪਟਾਰੇ ਵਿੱਚ ਬੰਦ ਕਰ ਦੇਵੇ।'),
      en: 'Kabir declares that Maya is a deadly venomous serpent (Saampini) that devours the very ones who nurture her. Rarely is found a sovereign snake-charmer (Garudi)—an enlightened master—who captures this serpent and locks her safely inside the basket of divine wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया सांपिनी (Maayaa saampinee)', meaning: 'विषैली सर्पिणी रूपी घातक माया' },
        { word: 'जनता ही को खाय (Jantaa hee ko khaay)', meaning: 'अपने पालने वाले मोहग्रस्त जीवों को ही नष्ट कर देती है' },
        { word: 'गारुड़ी (Gaarudee)', meaning: 'सर्प-विष का निवारक, ज्ञानी सद्गुरु' },
        { word: 'पकड़ि पिटारे बांय (Pakadi pitaare baany)', meaning: 'पकड़कर ज्ञान-विवेक के पिटारे में बंद कर देना' }
      ],
      pb: [
        { word: 'ਸਾਂਪਣੀ', meaning: 'ਜ਼ਹਿਰੀਲੀ ਸੱਪਣੀ' },
        { word: 'ਗਾਰੁੜੀ', meaning: 'ਸਪੇਰਾ / ਵਿਸ਼ ਮਿਟਾਉਣ ਵਾਲਾ ਮਹਾਂਪੁਰਖ' },
        { word: 'ਪਿਟਾਰੇ', meaning: 'ਟੋਕਰੀ / ਪਟਾਰਾ' }
      ],
      en: [
        { word: 'Maayaa saampinee', meaning: 'The venomous female serpent of illusion' },
        { word: 'Jantaa hee ko khaay', meaning: 'Devours the very beings who feed and cherish her' },
        { word: 'Gaarudee', meaning: 'Master snake-charmer (the enlightened Satguru)' },
        { word: 'Pitaare baany', meaning: 'Trapped inside the basket of divine discernment' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं जिस माया को पाल रहा हूँ, वह सर्पिणी की भांति मेरी ही आध्यात्मिक चेतना को तो नहीं डस रही?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਰੂਪੀ ਸੱਪਣੀ ਨੂੰ ਪਾਲ ਕੇ ਆਪਣੇ ਆਪ ਨੂੰ ਡੰਗਵਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I nurturing the venomous serpent of worldly illusion that will ultimately strike my own awareness?'
    },
    practicalApplication: {
      hi: 'सतगुरु रूपी सिद्ध गारुड़ी के ज्ञान-मंत्र की शरण लें; ज्ञान से ही माया-सर्पिणी वशीभूत होती है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ-ਮੰਤਰ ਨਾਲ ਮਾਇਆ ਨੂੰ ਕਾਬੂ ਕਰੋ।'),
      en: 'Take refuge in the Satguru, the supreme snake-charmer, to neutralize the venom of worldly illusion.'
    },
    samarpanPrayer: {
      hi: 'हे समर्थ सद्गुरु गारुड़ी! इस विषैली माया-सर्पिणी से मेरी रक्षा कीजिए और इसे अपने ज्ञान के पिटारे में वश में कर मुझे निर्भय कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ ਗਾਰੁੜੀ! ਮੈਨੂੰ ਮਾਇਆ-ਸੱਪਣੀ ਦੇ ਜ਼ਹਿਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O sovereign Satguru, divine Charmer! Protect me from the venomous strike of Maya and charm this mind with Your sacred Word.'
    },
    quiz: []
  },
  {
    id: 'maya-27',
    number: 1467,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २७',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੭',
      en: 'Maya Ko Ang - 27',
    },
    text: {
      hi: 'माया छाया एक सी, बिरला जानै कोय।\nभगता के पीछे फिरै, सनमुख भाजै सोय।।',
      pb: devanagariToGurmukhi('माया छाया एक सी, बिरला जानै कोय। भगता के पीछे फिरै, सनमुख भाजै सोय।।'),
      en: 'Maayaa chhaayaa ek see, birlaa jaanai koy. Bhagtaa ke peechhe phirai, sanmukh bhaajai soy..'
    },
    transliteration: 'Maya chhaya ek si, birla jaanai koy. Bhagta ke peechhe phirai, sanmukh bhaajai soy.',
    bhavarth: {
      hi: 'माया और वृक्ष की छाया दोनों एक समान हैं। इनके रहस्य को कोई विरला ज्ञानी ही समझ सकता है। यह माया उदार सेवक-भक्तों के पीछे-पीछे फिरती है और कंजूसों (निगुरों) के आगे-आगे दौड़ती जाती है, अर्थात वे इससे अतृप्त ही रहते हैं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਅਤੇ ਰੁੱਖ ਦੀ ਛਾਂ ਦੋਵੇਂ ਇੱਕੋ ਜਿਹੀਆਂ ਹਨ। ਇਸ ਭੇਤ ਨੂੰ ਕੋਈ ਵਿਰਲਾ ਹੀ ਜਾਣਦਾ ਹੈ। ਇਹ ਮਾਇਆ ਨਿਸ਼ਕਾਮ ਭਗਤਾਂ ਦੇ ਪਿੱਛੇ-ਪਿੱਛੇ ਦੌੜਦੀ ਹੈ ਅਤੇ ਲਾਲਚੀ ਲੋਕਾਂ ਦੇ ਅੱਗੇ-ਅੱਗੇ ਭੱਜਦੀ ਹੈ ਜਿਸ ਕਰਕੇ ਉਹ ਸਦਾ ਅਧੂਰੇ ਰਹਿੰਦੇ ਹਨ।'),
      en: 'Maya and a cast shadow behave identically, a secret comprehended only by rare sages: chase after your shadow with greed, and it flees ahead of you; turn your back toward the sun (the Supreme Lord), and the shadow follows obediently behind.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया छाया एक सी (Maayaa chhaayaa ek see)', meaning: 'माया और परछाईं का स्वभाव एक जैसा है' },
        { word: 'भगता के पीछे फिरै (Bhagtaa ke peechhe phirai)', meaning: 'निःस्पृह भक्तों की सेवा में स्वयं दासी बनकर आती है' },
        { word: 'सनमुख भाजै सोय (Sanmukh bhaajai soy)', meaning: 'लोभियों के आगे-आगे भागती है, हाथ नहीं आती' }
      ],
      pb: [
        { word: 'ਛਾਇਆ', meaning: 'ਪਰਛਾਵਾਂ' },
        { word: 'ਸਨਮੁਖ ਭਾਜੈ', meaning: 'ਅੱਗੇ-ਅੱਗੇ ਦੌੜਨਾ' }
      ],
      en: [
        { word: 'Maayaa chhaayaa', meaning: 'Maya and shadow share the same nature' },
        { word: 'Sanmukh bhaajai', meaning: 'Flees ahead when actively pursued' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं परछाईं के समान भागने वाली माया के पीछे दौड़ रहा हूँ या परमात्मा की ओर उन्मुख हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਪਰਛਾਵੇਂ ਵਾਂਗ ਭੱਜਦੀ ਮਾਇਆ ਪਿੱਛੇ ਦੌੜ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I chasing the elusive shadow of wealth or walking toward the Sun of divine Truth?'
    },
    practicalApplication: {
      hi: 'माया की तृष्णा त्यागें; जब मन सतगुरु-भक्ति में लीन होता है, तो आवश्यकताएं स्वतः पूरी हो जाती हैं।',
      pb: devanagariToGurmukhi('ਲਾਲਚ ਛੱਡ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Cease chasing after material illusions; anchor in Truth and necessity will follow effortlessly.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे छाया रूपी माया के पीछे भागने से बचाकर अपने पावन चरणों का अनन्य दास बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਭਟਕਣ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Stop my futile pursuit of worldly shadows and keep my face turned toward Your divine light.'
    },
    quiz: []
  },
  {
    id: 'maya-28',
    number: 1468,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २८',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੮',
      en: 'Maya Ko Ang - 28',
    },
    text: {
      hi: 'माया मन की मोहिनी, सुर नर रहे लुभाय।\nइन माया सब खाइया, माया कोय न खाय।।',
      pb: devanagariToGurmukhi('माया मन की मोहिनी, सुर नर रहे लुभाय। इन माया सब खाइया, माया कोय न खाय।।'),
      en: 'Maayaa man kee mohinee, sur nar rahe lubhaay. In maayaa sab khaaiyaa, maayaa koy na khaay..'
    },
    transliteration: 'Maya man ki mohini, sur nar rahe lubhaay. In maya sab khaaiya, maya koy na khaay.',
    bhavarth: {
      hi: 'यह माया मन को मोहने वाली है। देवता, मनुष्य आदि सभी इसके प्रलोभन में फंसते जा रहे हैं। इस माया ने सबको किसी-न-किसी प्रकार मारकर खाया है, परंतु इसको कोई नहीं खा सका, अर्थात इससे कोई नहीं जीत पाया।',
      pb: devanagariToGurmukhi('ਇਹ ਮਾਇਆ ਮਨ ਨੂੰ ਮੋਹ ਲੈਣ ਵਾਲੀ ਹੈ, ਦੇਵਤੇ ਤੇ ਮਨੁੱਖ ਸਭ ਇਸਦੇ ਲਾਲਚ ਵਿੱਚ ਫਸ ਗਏ। ਇਸ ਮਾਇਆ ਨੇ ਸਾਰਿਆਂ ਨੂੰ ਗ੍ਰਸ ਕੇ ਖਾ ਲਿਆ, ਪਰ ਇਸ ਮਾਇਆ ਨੂੰ ਕੋਈ ਨਾ ਜਿੱਤ ਸਕਿਆ।'),
      en: 'Maya is the bewitching enchantress of the mind; gods, celestial beings, and mortals alike are seduced by her charms. This Maya has consumed and destroyed everyone, yet none could ever overcome or consume her except through the grace of the Satguru.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन की मोहिनी (Man kee mohinee)', meaning: 'मन को सम्मोहित और वशीभूत करने वाली' },
        { word: 'सुर नर (Sur nar)', meaning: 'देवता और मनुष्य' },
        { word: 'माया कोय न खाय (Maayaa koy na khaay)', meaning: 'माया पर कोई सांसारिक बल से विजय प्राप्त नहीं कर सका' }
      ],
      pb: [
        { word: 'ਸੁਰ ਨਰ', meaning: 'ਦੇਵਤੇ ਅਤੇ ਮਨੁੱਖ' },
        { word: 'ਸਭ ਖਾਇਆ', meaning: 'ਸਭ ਨੂੰ ਨਿਗਲ ਲਿਆ' }
      ],
      en: [
        { word: 'Man kee mohinee', meaning: 'Enchantress of human consciousness' },
        { word: 'Sur nar', meaning: 'Gods and mortals alike' },
        { word: 'Koy na khaay', meaning: 'None could conquer her by worldly power' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने बुद्धि-बल से माया को जीतने का भ्रम पाले हूँ, या सद्गुरु की शरण में हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਤੋਂ ਬਿਨਾਂ ਮਾਇਆ ਨੂੰ ਜਿੱਤਣ ਦੀ ਭੁੱਲ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Do I mistakenly rely on intellectual pride to defeat Maya instead of seeking the Master’s grace?'
    },
    practicalApplication: {
      hi: 'माया के सम्मोहन को पहचानें; केवल सद्गुरु के नाम-सिमरन और कृपा से ही इस पर विजय संभव है।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਨਾਲ ਮਾਇਆ ਦੇ ਮੋਹ ਨੂੰ ਜਿੱਤੋ।'),
      en: 'Acknowledge the insurmountable power of illusion and seek refuge in the Satguru’s holy Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जिस मोहिनी माया ने देवों और मनुष्यों को ग्रस लिया, उससे मेरी रक्षा केवल आपकी कृपा ही कर सकती है। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹਿਨੀ ਮਾਇਆ ਦੇ ਪ੍ਰਭਾਵ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the universal enchantment of Maya through Your saving grace.'
    },
    quiz: []
  },
  {
    id: 'maya-29',
    number: 1469,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - २९',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੨੯',
      en: 'Maya Ko Ang - 29',
    },
    text: {
      hi: 'माया तो ठगनी भई, ठगत फिरै सब देस।\nजा ठग ने ठगनी ठगी, ता ठग को आदेस।।',
      pb: devanagariToGurmukhi('माया तो ठगनी भई, ठगत फिरै सब देस। जा ठग ने ठगनी ठगी, ता ठग को आदेस।।'),
      en: 'Maayaa to thaganee bhayee, thagat phirai sab des. Jaa thag ne thaganee thagee, taa thag ko aades..'
    },
    transliteration: 'Maya to thagani bhayi, thagat phirai sab des. Ja thag ne thagani thagi, ta thag ko aades.',
    bhavarth: {
      hi: 'यह बहुरूपिणी माया ठगनी बनकर, सभी देशों के लोगों को ठगती फिरती है और सब इसके द्वारा ठगे जाते हैं, परंतु जिस किसी ठग ने इस ठगिनी को भी ठग लिया हो, उस महान ठग को मेरा सादर प्रणाम है, अर्थात इस माया को ठगने वाला कोई संत महापुरुष ही हो सकता है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਇੱਕ ਮਹਾਂ-ਠਗਣੀ ਬਣ ਕੇ ਸਾਰੇ ਦੇਸ਼ਾਂ ਦੇ ਲੋਕਾਂ ਨੂੰ ਠੱਗਦੀ ਫਿਰਦੀ ਹੈ। ਪਰ ਜਿਸ ਬ੍ਰਹਮ-ਗਿਆਨੀ ਸੰਤ (ਸੱਚੇ ਠੱਗ) ਨੇ ਇਸ ਠਗਣੀ ਮਾਇਆ ਨੂੰ ਵੀ ਠੱਗ ਲਿਆ (ਕਾਬੂ ਕਰ ਲਿਆ), ਉਸ ਮਹਾਂਪੁਰਖ ਨੂੰ ਮੇਰਾ ਕੋਟਿ-ਕੋਟਿ ਪ੍ਰਣਾਮ ਹੈ।'),
      en: 'Maya is a master swindler roaming across every land to rob mortals of their spiritual awareness. But unto that supreme Master who outwitted and conquered this arch-swindler, I offer my deepest reverence and salutations.'
    },
    wordMeanings: {
      hi: [
        { word: 'ठगनी भई (Thaganee bhayee)', meaning: 'माया का कपटी और धोखेबाज स्वरूप' },
        { word: 'जा ठग ने ठगनी ठगी (Jaa thag ne thaganee thagee)', meaning: 'जिस आत्मज्ञानी संत ने माया के प्रपंच को वशीभूत कर लिया' },
        { word: 'ता ठग को आदेस (Taa thag ko aades)', meaning: 'उस समर्थ सद्गुरु को मेरा नमन व प्रणाम' }
      ],
      pb: [
        { word: 'ਠਗਣੀ', meaning: 'ਠੱਗੀ ਮਾਰਨ ਵਾਲੀ' },
        { word: 'ਆਦੇਸ', meaning: 'ਸਤਿਕਾਰ ਸਹਿਤ ਪ੍ਰਣਾਮ' }
      ],
      en: [
        { word: 'Thaganee', meaning: 'The master cosmic swindler' },
        { word: 'Thagani thagi', meaning: 'Outsmarted and tamed the illusion' },
        { word: 'Aades', meaning: 'Humble obeisance and salutations' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया द्वारा ठगा जा रहा हूँ या सद्गुरु के ज्ञान से माया को जीतने वाले संतों का संग कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਹੱਥੋਂ ਠੱਗਿਆ ਜਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I being fleeced by worldly illusions or seeking the company of the Master who conquered Maya?'
    },
    practicalApplication: {
      hi: 'माया के कपट को समझें; माया को जीतने वाले समर्थ सतगुरु के वचनों को अपने जीवन का आधार बनाएं।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੀ ਸੰਗਤ ਕਰਕੇ ਮਾਇਆ ਦੀ ਠੱਗੀ ਤੋਂ ਬਚੋ।'),
      en: 'Follow the guidance of the enlightened Master who mastered and disarmed worldly illusion.'
    },
    samarpanPrayer: {
      hi: 'हे समर्थ सद्गुरु! इस माया-ठगनी को जीतने वाले आप ही हैं; मुझे अपनी शरण में लेकर इस ठगी से बचा लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਠਗਣੀ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru, supreme Master! Unto You I bow, for You alone have conquered and subdued this cosmic swindler.'
    },
    quiz: []
  },
  {
    id: 'maya-30',
    number: 1470,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३०',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੦',
      en: 'Maya Ko Ang - 30',
    },
    text: {
      hi: 'माया माथे सींगड़ा, लम्बे नौ नौ हाथ।\nआगे मारै सींगड़ा, पाछै मारै लात।।',
      pb: devanagariToGurmukhi('माया माथे सींगड़ा, लम्बे नौ नौ हाथ। आगे मारै सींगड़ा, पाछै मारै लात।।'),
      en: 'Maayaa maathe seengadaa, lambe nau nau haath. Aage maarai seengadaa, paachhai maarai laat..'
    },
    transliteration: 'Maya maathe seengada, lambe nau nau haath. Aage maarai seengada, paachhai maarai laat.',
    bhavarth: {
      hi: 'माया के मस्तक पर अहंकार रूपी नौ-नौ हाथ के बहुत लम्बे सींग होते हैं। आते समय वह उन सींगों से सीने में टक्कर मारती है, जिससे अहंकार से सीना तन जाता है। जाते समय वह पीछे से लात मारती है, जिससे बहुत पश्चाताप तथा दुःख होता है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੇ ਮੱਥੇ \'ਤੇ ਹੰਕਾਰ ਦੇ ਲੰਮੇ-ਲੰਮੇ ਸਿੰਗ ਹਨ। ਜਦੋਂ ਇਹ ਆਉਂਦੀ ਹੈ ਤਾਂ ਅੱਗਿਓਂ ਸਿੰਗ ਮਾਰ ਕੇ ਮਨੁੱਖ ਨੂੰ ਹੰਕਾਰੀ ਬਣਾ ਦਿੰਦੀ ਹੈ, ਅਤੇ ਜਦੋਂ ਜਾਂਦੀ ਹੈ ਤਾਂ ਪਿੱਛਿਓਂ ਲੱਤ ਮਾਰ ਕੇ ਡੂੰਘੇ ਦੁੱਖ ਤੇ ਪਛਤਾਵੇ ਵਿੱਚ ਸੁੱਟ ਜਾਂਦੀ ਹੈ।'),
      en: 'Maya bears long, fierce horns of arrogance upon her forehead. Upon her arrival, she gores you in the chest with pride, making you haughty; upon her departure, she kicks you from behind into deep humiliation, regret, and sorrow.'
    },
    wordMeanings: {
      hi: [
        { word: 'माथे सींगड़ा (Maathe seengadaa)', meaning: 'माया का अहंकार रूपी विकराल सींग' },
        { word: 'आगे मारै सींगड़ा (Aage maarai seengadaa)', meaning: 'आते समय अहंकार और घमंड पैदा करना' },
        { word: 'पाछै मारै लात (Paachhai maarai laat)', meaning: 'जाते समय अत्यंत आघात, शोक और दुख देना' }
      ],
      pb: [
        { word: 'ਸੀਂਗੜਾ', meaning: 'ਸਿੰਗ / ਹੰਕਾਰ' },
        { word: 'ਲਾਤ ਮਾਰੈ', meaning: 'ਪਿੱਛਿਓਂ ਚੋਟ ਮਾਰਨਾ' }
      ],
      en: [
        { word: 'Maathe seengadaa', meaning: 'Long horns of pride upon her forehead' },
        { word: 'Aage maarai / Paachhai maarai', meaning: 'Strikes with arrogance upon arrival and kicks with grief upon departure' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संपत्ति के आने पर अहंकारी और उसके जाने पर दुखी होकर माया के दोनों प्रहार सह रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਧਨ ਆਉਣ \'ਤੇ ਹੰਕਾਰੀ ਤੇ ਜਾਣ \'ਤੇ ਦੁਖੀ ਹੁੰਦਾ ਹਾਂ?'),
      en: 'Do I swell with ego when wealth arrives and sink into misery when it leaves?'
    },
    practicalApplication: {
      hi: 'लाभ और हानि दोनों में समभाव रखें; न लाभ में अहंकार करें और न हानि में विलाप।',
      pb: devanagariToGurmukhi('ਸੁੱਖ-ਦੁੱਖ ਅਤੇ ਲਾਭ-ਹਾਨੀ ਵਿੱਚ ਸਮਦ੍ਰਿਸ਼ਟੀ ਰੱਖੋ।'),
      en: 'Maintain equanimity in both gain and loss, remaining detached from the double-edged sword of wealth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के अहंकार और वियोग के दोनों प्रहारों से बचाकर समत्व योग प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੁੱਖ-ਦੁੱਖ ਵਿੱਚ ਅਡੋਲ ਰਹਿਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Protect me from the horns of pride and the kick of despair, anchoring my soul in perfect equanimity.'
    },
    quiz: []
  },
  {
    id: 'maya-31',
    number: 1471,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३१',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੧',
      en: 'Maya Ko Ang - 31',
    },
    text: {
      hi: 'गुरु को चेला बीष दे, जो गांठी होय दाम।\nपूत पिता को मारसी, ये माया के काम।।',
      pb: devanagariToGurmukhi('गुरु को चेला बीष दे, जो गांठी होय दाम। पूत पिता को मारसी, ये माया के काम।।'),
      en: 'Guru ko chelaa beesh de, jo gaanthee hoy daam. Poot pitaa ko maarsee, ye maayaa ke kaam..'
    },
    transliteration: 'Guru ko chela beesh de, jo gaanthi hoy daam. Poot pita ko maarsi, ye maya ke kaam.',
    bhavarth: {
      hi: 'यदि गुरुदेव के पास अधिक धन-संपत्ति है, तो चेला गुरु को विष देकर मार डालता है। लोभवश कुछ शिष्य ऐसा कर जाते हैं और उस धन से मौज उड़ाते हैं। इसी प्रकार कुछ पुत्र भी लोभवश पिता को मारकर धन ले लेते हैं, यही इस पापिन माया का व्यवहार है।',
      pb: devanagariToGurmukhi('ਜੇ ਗੁਰੂ ਕੋਲ ਬਹੁਤ ਧਨ ਹੋਵੇ ਤਾਂ ਲਾਲਚੀ ਚੇਲਾ ਗੁਰੂ ਨੂੰ ਵੀ ਜ਼ਹਿਰ ਦੇ ਦਿੰਦਾ ਹੈ। ਪੁੱਤਰ ਪੈਸੇ ਦੇ ਲੋਭ ਵਿੱਚ ਪਿਤਾ ਦਾ ਕਤਲ ਕਰ ਦਿੰਦਾ ਹੈ। ਇਹ ਸਾਰੇ ਘਿਣਾਉਣੇ ਕਾਰਨਾਮੇ ਇਸ ਪਾਪਣ ਮਾਇਆ ਦੇ ਹੀ ਹਨ।'),
      en: 'Such is the corrupting malignancy of Maya: for the sake of wealth, an unfaithful disciple poisons the Guru, and a greedy son murders his own father. Worldly delusion destroys all sacred bonds of love and duty.'
    },
    wordMeanings: {
      hi: [
        { word: 'गांठी होय दाम (Gaanthee hoy daam)', meaning: 'पास में बहुत अधिक धन-संपत्ति होना' },
        { word: 'बीष दे (Beesh de)', meaning: 'विष/जहर देकर मार डालना' },
        { word: 'ये माया के काम (Ye maayaa ke kaam)', meaning: 'यह सब माया के लोभ और अंधकार का दुष्परिणाम है' }
      ],
      pb: [
        { word: 'ਬੀਖ / ਵਿਸ਼', meaning: 'ਜ਼ਹਿਰ' },
        { word: 'ਦਾਮ', meaning: 'ਪੈਸਾ / ਧਨ' }
      ],
      en: [
        { word: 'Gaanthee hoy daam', meaning: 'Possessing hoarded wealth' },
        { word: 'Ye maayaa ke kaam', meaning: 'Such are the heinous fruits of greed induced by Maya' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक स्वार्थ और धन के लोभ में पवित्र संबंधों और मर्यादाओं की उपेक्षा तो नहीं कर रहा?',
      pb: devanagariToGurmukhi('ਕੀ ਧਨ ਦਾ ਲਾਲਚ ਮੇਰੇ ਰਿਸ਼ਤਿਆਂ ਅਤੇ ਧਰਮ ਨੂੰ ਵਿਗਾੜ ਰਿਹਾ ਹੈ?'),
      en: 'Am I allowing the greed for money to erode sacred spiritual and familial bonds?'
    },
    practicalApplication: {
      hi: 'धन के लोभ को संबंधों और धर्म से ऊपर कभी न रखें; निष्कपट प्रेम और गुरु-भक्ति को सर्वोपरि मानें।',
      pb: devanagariToGurmukhi('ਪੈਸੇ ਦੇ ਲੋਭ ਤੋਂ ਬਚ ਕੇ ਨਿਰਸਵਾਰਥ ਪ੍ਰੇਮ ਕਰੋ।'),
      en: 'Never prioritize material gain over righteous conduct, devotion, and compassion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के इस अंधकारी लोभ से बचाकर अपने चरणों का निष्कपट प्रेम प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਲਾਲਚ ਦੇ ਪਾਪ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Purge all poison of greed from my heart and keep my devotion pure and uncorrupted.'
    },
    quiz: []
  },
  {
    id: 'maya-32',
    number: 1472,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३२',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੨',
      en: 'Maya Ko Ang - 32',
    },
    text: {
      hi: 'माया दासी सन्त की, साकट की शिर ताज।\nसाकट की सिर मानिनी, सन्तों सहेली लाज।।',
      pb: devanagariToGurmukhi('माया दासी सन्त की, साकट की शिर ताज। साकट की सिर मानिनी, सन्तों सहेली लाज।।'),
      en: 'Maayaa daasee sant kee, saakat kee shir taaj. Saakat kee sir maaninee, santon sahelee laaj..'
    },
    transliteration: 'Maya daasi sant ki, saakat ki shir taaj. Saakat ki sir maanini, santon saheli laaj.',
    bhavarth: {
      hi: 'साधु-संत माया के मोह में नहीं पड़ते, क्योंकि माया तो उनकी दासी होती है। अज्ञानी ही माया के लोभ में पड़ते हैं, इसलिए माया उनके सिर का ताज है। वह अज्ञानी-निगुरों के सिर पर बैठकर अपना शासन चलाती है और संतों के सामने विनम्रता से झुक जाती है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਸੰਤਾਂ ਦੀ ਨਿਮਾਣੀ ਦਾਸੀ ਹੈ, ਪਰ ਪ੍ਰਭੂ ਤੋਂ ਬੇਮੁਖ ਸਾਕਤਾਂ ਦੇ ਸਿਰ ਦਾ ਤਾਜ (ਮਾਲਕ) ਬਣ ਕੇ ਬੈਠੀ ਹੈ। ਸਾਕਤਾਂ ਦੇ ਸਿਰ \'ਤੇ ਹੰਕਾਰ ਬਣ ਕੇ ਹੁਕਮ ਚਲਾਉਂਦੀ ਹੈ ਅਤੇ ਸੰਤਾਂ ਅੱਗੇ ਸ਼ਰਮ ਨਾਲ ਦਾਸੀ ਬਣ ਕੇ ਝੁਕਦੀ ਹੈ।'),
      en: 'Maya is a humble handmaiden to saintly souls, yet sits as an arrogant crown upon the heads of worldly materialists (Saakats). She tyrannizes the egoist with vanity, while bowing respectfully in modest service before true saints.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया दासी सन्त की (Maayaa daasee sant kee)', meaning: 'संतों के आगे माया नम्र दासी बनकर रहती है' },
        { word: 'साकट (Saakat)', meaning: 'ईश्वर-विमुख, शक्तिहीन, अभिमानी संसारी' },
        { word: 'शिर ताज (Shir taaj)', meaning: 'सिर पर चढ़कर शासन करने वाली स्वामिनी' }
      ],
      pb: [
        { word: 'ਸਾਕਤ', meaning: 'ਰੱਬ ਤੋਂ ਬੇਮੁਖ / ਮਨਮੁਖ' },
        { word: 'ਦਾਸੀ', meaning: 'ਸੇਵਕਾ' }
      ],
      en: [
        { word: 'Daasee sant kee', meaning: 'Handmaiden to realized saints' },
        { word: 'Saakat', meaning: 'Materialistic egoist alienated from the Divine' },
        { word: 'Shir taaj', meaning: 'Ruling over the egoist as an oppressive master' }
      ]
    },
    contemplation: {
      hi: 'क्या माया मेरे सिर का ताज बनकर मुझ पर शासन कर रही है, या मैं संतों की तरह इसे अपनी दासी बना चुका हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮਾਇਆ ਮੇਰੇ \'ਤੇ ਹਕੂਮਤ ਕਰ ਰਹੀ ਹੈ ਜਾਂ ਮੇਰੀ ਦਾਸੀ ਹੈ?'),
      en: 'Is Maya sitting as a tyrant upon my head or serving as a humble servant to spiritual practice?'
    },
    practicalApplication: {
      hi: 'संत-मार्ग अपनाएं; जब आप अंतर्मुखी होकर परमात्मा से जुड़ेंगे तो माया स्वतः आपकी आज्ञाकारी दासी बनेगी।',
      pb: devanagariToGurmukhi('ਗੁਰਮੁਖ ਬਣ ਕੇ ਮਾਇਆ ਤੋਂ ਉੱਪਰ ਉੱਠੋ।'),
      en: 'Live in devotional detachment; when you serve God, worldly resources serve you.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे साकट की अज्ञानता से बचाकर अपने संतों की वह स्थिति दीजिए जहां माया दासी बनकर रहे। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਾਕਤਪਣ ਤੋਂ ਬਚਾ ਕੇ ਸੰਤਾਂ ਦਾ ਮਾਰਗ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Liberate me from the tyranny of Maya and grant me the sovereign detachment of a true saint.'
    },
    quiz: []
  },
  {
    id: 'maya-33',
    number: 1473,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३३',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੩',
      en: 'Maya Ko Ang - 33',
    },
    text: {
      hi: 'माया माया सब कहैं, माया लखै न कोय।\nजो मन से ना ऊतरे, माया कहिए सोय।।',
      pb: devanagariToGurmukhi('माया माया सब कहैं, माया लखै न कोय। जो मन से ना ऊतरे, माया कहिए सोय।।'),
      en: 'Maayaa maayaa sab kahain, maayaa lakhai na koy. Jo man se naa ootare, maayaa kahiye soy..'
    },
    transliteration: 'Maya maya sab kahain, maya lakhai na koy. Jo man se na ootare, maya kahiye soy.',
    bhavarth: {
      hi: 'माया-माया तो सब कहते रहते हैं, परंतु माया के वास्तविक स्वरूप को नहीं जानते व परखते। मन के ऊपर जिसकी गहन आसक्ति हो और जो मन से न उतरे, माया उसी को कहते हैं। मन की कल्पनाएं, मिथ्या-मान्यताएं तथा वासना आदि सब माया के ही क्षेत्र में आती हैं।',
      pb: devanagariToGurmukhi('ਮਾਇਆ-ਮਾਇਆ ਤਾਂ ਸਾਰੇ ਕਹਿੰਦੇ ਹਨ, ਪਰ ਇਸਦੇ ਅਸਲ ਭੇਤ ਨੂੰ ਕੋਈ ਨਹੀਂ ਸਮਝਦਾ। ਜੋ ਚੀਜ਼ ਮਨ ਵਿੱਚੋਂ ਨਾ ਨਿਕਲੇ (ਜਿਸਦੀ ਲਗਾਤਾਰ ਪਕੜ ਬਣੀ ਰਹੇ), ਅਸਲ ਵਿੱਚ ਉਹੀ ਮਾਇਆ ਹੈ।'),
      en: 'Everyone speaks casually about Maya, yet few perceive her true essence. Whatever obsession or craving refuses to leave the mind—that very psychological fixation is Maya. Maya is not external gold or mud, but the mind’s unyielding attachment.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया लखै न कोय (Maayaa lakhai na koy)', meaning: 'माया के वास्तविक सूक्ष्म रूप को कोई नहीं पहचानता' },
        { word: 'जो मन से ना ऊतरे (Jo man se naa ootare)', meaning: 'जो विचार, आसक्ति व कामना मन को निरंतर घेरे रहे' }
      ],
      pb: [
        { word: 'ਲਖੈ ਨ ਕੋਇ', meaning: 'ਕੋਈ ਨਹੀਂ ਸਮਝਦਾ' },
        { word: 'ਮਨ ਸੇ ਨਾ ਊਤਰੇ', meaning: 'ਮਨ ਵਿੱਚੋਂ ਨਾ ਨਿਕਲਣਾ' }
      ],
      en: [
        { word: 'Lakhai na koy', meaning: 'None discerns her subtle reality' },
        { word: 'Jo man se naa ootare', meaning: 'Whatever fixation refuses to dislodge from the heart' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे मन में कोई ऐसी सांसारिक चाह या विचार है जो मन से नहीं उतर रहा? वही मेरी माया है।',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਮਨ ਵਿੱਚ ਕੋਈ ਅਜਿਹੀ ਪਕੜ ਹੈ ਜੋ ਨਿਕਲ ਨਹੀਂ ਰਹੀ?'),
      en: 'What persistent attachment or obsession occupies my mind? That very fixation is my Maya.'
    },
    practicalApplication: {
      hi: 'बाहरी वस्तुओं को दोष देने के स्थान पर मन की आंतरिक आसक्तियों और आग्रहों को त्यागें।',
      pb: devanagariToGurmukhi('ਮਨ ਵਿੱਚੋਂ ਸੰਸਾਰਕ ਪਕੜਾਂ ਨੂੰ ਖ਼ਤਮ ਕਰੋ।'),
      en: 'Dislodge internal mental fixations rather than merely blaming external objects.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन से समस्त सांसारिक आग्रहों और सूक्ष्म माया को उतारकर केवल अपना सत्य स्वरूप स्थापित कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਵਿੱਚੋਂ ਮਾਇਆ ਦੀ ਪਕੜ ਕੱਢ ਕੇ ਆਪਣਾ ਨਾਮ ਵਸਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dislodge every stubborn illusion from my mind and establish Your divine presence within.'
    },
    quiz: []
  },
  {
    id: 'maya-34',
    number: 1474,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३४',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੪',
      en: 'Maya Ko Ang - 34',
    },
    text: {
      hi: 'कबीर माया मोहिनी, मांगी मिलै न हाथ।\nमना उतारी जूठ करु, लागी डोलै साथ।।',
      pb: devanagariToGurmukhi('कबीर माया मोहिनी, मांगी मिलै न हाथ। मना उतारी जूठ करु, लागी डोलै साथ।।'),
      en: 'Kabeer maayaa mohinee, maangee milai na haath. Manaa utaaree jooth karu, laagee dolai saath..'
    },
    transliteration: 'Kabeer maya mohini, maangi milai na haath. Mana utaari jooth karu, laagi dolai saath.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह माया सबका मन मोहने वाली है और मांगने से किसी के हाथ नहीं लगती, परंतु जो इसे झूठा समझकर मन से उतार फेंकता है, यह उसके पीछे-पीछे लगी रहती है, अर्थात मांगने पर भागती है और त्यागने पर उसके पास चली आती है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਮਾਇਆ ਮੰਗਣ \'ਤੇ ਹੱਥ ਨਹੀਂ ਆਉਂਦੀ, ਪਰ ਜਦੋਂ ਮਨੁੱਖ ਇਸਨੂੰ ਝੂਠੀ ਜਾਣ ਕੇ ਮਨੋਂ ਤਿਆਗ ਦਿੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਦਾਸੀ ਬਣ ਕੇ ਪਿੱਛੇ-ਪਿੱਛੇ ਤੁਰੀ ਫਿਰਦੀ ਹੈ।'),
      en: 'Kabir observes that this seductive Maya slips away when desperately begged for; yet the moment an enlightened soul discards her as worthless refuse from the heart, she obediently follows at their heels.'
    },
    wordMeanings: {
      hi: [
        { word: 'मांगी मिलै न हाथ (Maangee milai na haath)', meaning: 'मांगने और लोभ करने पर हाथ नहीं आती' },
        { word: 'जूठ करु मना उतारी (Jooth karu manaa utaaree)', meaning: 'झूठी व अपवित्र समझकर मन से निकाल फेंकना' },
        { word: 'लागी डोलै साथ (Laagee dolai saath)', meaning: 'पीछे-पीछे छाया बनकर साथ घूमती है' }
      ],
      pb: [
        { word: 'ਜੂਠ ਕਰੁ', meaning: 'ਝੂਠੀ ਤੇ ਤਿਆਗਣ ਯੋਗ ਜਾਣ ਕੇ' },
        { word: 'ਡੋਲੈ ਸਾਥ', meaning: 'ਨਾਲ-ਨਾਲ ਤੁਰੀ ਫਿਰਨਾ' }
      ],
      en: [
        { word: 'Maangee milai na', meaning: 'Eludes greedy craving' },
        { word: 'Jooth karu utaari', meaning: 'Cast off as worthless illusion from the mind' },
        { word: 'Laagee dolai saath', meaning: 'Follows subserviently behind' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया के लिए गिड़गिड़ा रहा हूँ, या इसे झूठी समझकर मन से मुक्त हो चुका हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਲਈ ਤਰਲੇ ਲੈ ਰਿਹਾ ਹਾਂ ਜਾਂ ਇਸ ਤੋਂ ਮੁਕਤ ਹਾਂ?'),
      en: 'Am I begging for material crumbs or living in the dignity of spiritual detachment?'
    },
    practicalApplication: {
      hi: 'सांसारिक वस्तुओं की याचना छोड़ें; अपनी चेतना को परमात्मा में तृप्त करें, आवश्यकताएं स्वतः पूरी होंगी।',
      pb: devanagariToGurmukhi('ਮੰਗਣਾ ਛੱਡ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਸੰਤੁਸ਼ਟ ਰਹੋ।'),
      en: 'Renounce desperate begging; rest in divine fulfillment and worldly needs will resolve themselves.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सांसारिक याचना से मुक्त कर अपने पावन नाम की सच्ची बेपरवाही और संतोष प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਬੇਪਰਵਾਹ ਸੰਤੋਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from the begging bowl of worldly desires and enrich me with divine contentment.'
    },
    quiz: []
  },
  {
    id: 'maya-35',
    number: 1475,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३५',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੫',
      en: 'Maya Ko Ang - 35',
    },
    text: {
      hi: 'कबीर माया बेसवा, दोनूं की इक जात।\nआंवत को आदर करैं, जात न बूझैं बात।।',
      pb: devanagariToGurmukhi('कबीर माया बेसवा, दोनूं की इक जात। आंवत को आदर करैं, जात न बूझैं बात।।'),
      en: 'Kabeer maayaa besavaa, donoon kee ik jaat. Aanvat ko aadar karain, jaat na boojhain baat..'
    },
    transliteration: 'Kabeer maya besawa, donoon ki ik jaat. Aanvat ko aadar karain, jaat na boojhain baat.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया और वेश्या दोनों एक ही प्रजाति की हैं, अर्थात दोनों का गुण-धर्म एक समान है। ये दोनों पहले तो लुभाकर लोगों का बहुत मान-सम्मान करती हैं, परंतु जाते समय उनसे बात भी नहीं करतीं।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਅਤੇ ਵੇਸਵਾ ਦੋਵਾਂ ਦਾ ਸੁਭਾਅ ਇੱਕੋ ਜਿਹਾ ਹੈ। ਆਉਂਦਿਆਂ ਤਾਂ ਬੜਾ ਆਦਰ-ਸਤਿਕਾਰ ਅਤੇ ਮੋਹ ਵਿਖਾਉਂਦੀਆਂ ਹਨ, ਪਰ ਜਾਂਦਿਆਂ ਮੂੰਹ ਵੀ ਨਹੀਂ ਲਾਉਂਦੀਆਂ।'),
      en: 'Kabir observes that Maya and a courtesan share identical characteristics: while approaching, they shower flattering attention and seductive welcome, but upon departing, they cast you aside coldly without speaking a word.'
    },
    wordMeanings: {
      hi: [
        { word: 'बेसवा (Besavaa)', meaning: 'वेश्या, स्वार्थी व चरित्रहीन प्रवृत्ति' },
        { word: 'दोनूं की इक जात (Donoon kee ik jaat)', meaning: 'दोनों का क्षणिक व धोखेबाज स्वभाव एक समान है' },
        { word: 'जात न बूझैं बात (Jaat na boojhain baat)', meaning: 'जाते समय तनिक भी परवाह या बात न करना' }
      ],
      pb: [
        { word: 'ਬੇਸਵਾ', meaning: 'ਵੇਸਵਾ' },
        { word: 'ਇਕ ਜਾਤ', meaning: 'ਇੱਕੋ ਜਿਹਾ ਸੁਭਾਅ' }
      ],
      en: [
        { word: 'Besavaa', meaning: 'A courtesan / fickle flatterer' },
        { word: 'Jaat na boojhain baat', meaning: 'Abandons ruthlessly without a parting word' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया के झूठे आदर-सत्कार में फंसकर अपने शाश्वत कल्याण को भूल रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮਾਇਆ ਦੇ ਝੂਠੇ ਸੁਆਗਤ ਤੋਂ ਧੋਖਾ ਖਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I being deceived by the flattering, temporary welcome of material fortune?'
    },
    practicalApplication: {
      hi: 'संपत्ति और प्रतिष्ठा के आने पर फूले न समाएं; यह जाने वाली है, अतः नित्य आत्म-ज्ञान में स्थिर रहें।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਦੇ ਆਉਣ-ਜਾਣ ਵਿੱਚ ਅਡੋਲ ਰਹੋ।'),
      en: 'Remain unswayed by the transient rise and fall of worldly fortunes.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस धोखेबाज माया के क्षणिक आदर से बचाकर अपने पावन प्रेम का सच्चा शरण दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਧੋਖੇ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the treacherous flattery of Maya and root me in Your eternal truth.'
    },
    quiz: []
  },
  {
    id: 'maya-36',
    number: 1476,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३६',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੬',
      en: 'Maya Ko Ang - 36',
    },
    text: {
      hi: 'कबीर माया मोहिनी, जैसी मीठी खांड।\nसद्गुरु की किरपा भई, नातर करती भांड।।',
      pb: devanagariToGurmukhi('कबीर माया मोहिनी, जैसी मीठी खांड। सद्गुरु की किरपा भई, नातर करती भांड।।'),
      en: 'Kabeer maayaa mohinee, jaisee meethee khaand. Sadguru kee kirpaa bhayee, naatar kartee bhaand..'
    },
    transliteration: 'Kabeer maya mohini, jaisi meethi khaand. Sadguru ki kirpa bhayi, naatar karati bhaand.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया मन को मोहने वाली है। जैसे मीठी खांड का मधुर स्वाद होता है, वैसे ही इसका भोग बहुत प्यारा लगता है। वह तो सद्गुरु की कृपा से हम बच गए, नहीं तो इसके चक्कर में अपने धर्म-कर्म को भूलकर भांड़ जैसे रह जाते।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਮਿੱਠੀ ਖੰਡ ਵਾਂਗ ਮਨਮੋਹਣੀ ਹੈ ਜੋ ਸ਼ੁਰੂ ਵਿੱਚ ਬੜੀ ਸਵਾਦ ਲੱਗਦੀ ਹੈ। ਇਹ ਤਾਂ ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਮਿਹਰ ਹੋਈ ਕਿ ਅਸੀਂ ਬਚ ਗਏ, ਨਹੀਂ ਤਾਂ ਇਹ ਸਾਨੂੰ ਨਚਾ ਕੇ ਭੰਡ (ਮਸਖ਼ਰਾ) ਬਣਾ ਛੱਡਦੀ।'),
      en: 'Kabir warns that Maya is enticing like sweet sugar candy, tasting delicious in the beginning. Were it not for the saving grace of the Satguru, she would have turned us into degraded buffoons (Bhaand), dancing shamefully to her tunes.'
    },
    wordMeanings: {
      hi: [
        { word: 'मीठी खांड (Meethee khaand)', meaning: 'मीठी शक्कर/खांड के समान स्वादिष्ट लगने वाले भोग' },
        { word: 'नातर करती भांड (Naatar kartee bhaand)', meaning: 'अन्यथा हमें विदूषक, भांड़ व उपहास का पात्र बना देती' }
      ],
      pb: [
        { word: 'ਖਾਂਡ', meaning: 'ਖੰਡ / ਸ਼ੱਕਰ' },
        { word: 'ਭਾਂਡ', meaning: 'ਮਸਖ਼ਰਾ / ਭੰਡ' }
      ],
      en: [
        { word: 'Meethee khaand', meaning: 'Sweet refined sugar' },
        { word: 'Naatar kartee bhaand', meaning: 'Otherwise would have reduced us to helpless buffoons' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सद्गुरु की कृपा को पहचानकर माया के मीठे प्रलोभनों से बच रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਮਾਇਆ ਦੇ ਮਿੱਠੇ ਜਾਲ ਤੋਂ ਬਚਿਆ ਹਾਂ?'),
      en: 'Am I relying on the Satguru’s protective grace to see through sweet sensory temptations?'
    },
    practicalApplication: {
      hi: 'जब भी कोई सांसारिक सुख बहुत मीठा लगे, तुरंत सतर्क हों और गुरु-स्मरण से अपने विवेक को जगाएं।',
      pb: devanagariToGurmukhi('ਸੁਆਦਾਂ ਦੇ ਲੋਭ ਵਿੱਚ ਨਾ ਫਸੋ।'),
      en: 'Whenever a worldly temptation tastes sweet, invoke the Master’s wisdom to stay unattached.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आपकी अनन्य कृपा ने ही मुझे माया की मीठी खांड के जाल से बचाया है; अपनी यह रक्षा सदा बनाए रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਆਪਣੀ ਮਿਹਰ ਨਾਲ ਮੈਨੂੰ ਮਾਇਆ ਤੋਂ ਸਦਾ ਬਚਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Your grace alone saved me from the sugar-coated trap of Maya; keep me forever under Your wing.'
    },
    quiz: []
  },
  {
    id: 'maya-37',
    number: 1477,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३७',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੭',
      en: 'Maya Ko Ang - 37',
    },
    text: {
      hi: 'माया संखा पदुम लौं, भक्ति बिहुन जो होय।\nजम लै ग्रासैं सो तेहि, नरक पड़े पुनि सोय।।',
      pb: devanagariToGurmukhi('माया संखा पदुम लौं, भक्ति बिहुन जो होय। जम लै ग्रासैं सो तेहि, नरक पड़े पुनि सोय।।'),
      en: 'Maayaa sankhaa padum laun, bhakti bihun jo hoy. Jam lai graasain so tehi, narak pade puni soy..'
    },
    transliteration: 'Maya sankha padum laun, bhakti bihun jo hoy. Jam lai graasain so tehi, narak pade puni soy.',
    bhavarth: {
      hi: 'भक्तिहीन व अज्ञानी मनुष्य के पास चाहे पद्म शंख तक हो, अर्थात कितनी भी वैभवशाली राशि क्यों न हो, परंतु उसे यम रूपी कुवासना, क्लेश-विपत्तियां आदि ग्रास लेंगे और फिर उसे भयंकर अधम योनियों के नरक में पड़ना होगा।',
      pb: devanagariToGurmukhi('ਜੇਕਰ ਮਨੁੱਖ ਕੋਲ ਸ਼ੰਖ-ਪਦਮ (ਅਰਬਾਂ-ਖਰਬਾਂ) ਜਿੰਨੀ ਬੇਅੰਤ ਦੌਲਤ ਵੀ ਹੋਵੇ, ਪਰ ਉਹ ਭਗਤੀ ਤੋਂ ਸੱਖਣਾ ਹੋਵੇ, ਤਾਂ ਜਮਦੂਤ ਉਸਨੂੰ ਗ੍ਰਸ ਲੈਂਦੇ ਹਨ ਅਤੇ ਉਹ ਨਰਕਾਂ ਦੇ ਭਾਰੀ ਦੁੱਖ ਭੋਗਦਾ ਹੈ।'),
      en: 'Even if a mortal commands treasures counting into billions (Shankh and Padam), yet remains devoid of true devotion (Bhakti), the messengers of Death (Yama) will swallow him whole and plunge his soul into agonizing hells.'
    },
    wordMeanings: {
      hi: [
        { word: 'संखा पदुम लौं (Sankhaa padum laun)', meaning: 'शंख और पद्म जैसी अपार अरबों-खरबों की संपदा' },
        { word: 'भक्ति बिहुन (Bhakti bihun)', meaning: 'प्रभु-भक्ति और गुरु-ज्ञान से शून्य' },
        { word: 'जम लै ग्रासैं (Jam lai graasain)', meaning: 'यमराज और काल के बंधनों में जकड़ा जाना' }
      ],
      pb: [
        { word: 'ਸੰਖਾ ਪਦੁਮ', meaning: 'ਬੇਅੰਤ ਖਜ਼ਾਨਾ' },
        { word: 'ਭਗਤੀ ਬਿਹੁਨ', meaning: 'ਭਗਤੀ ਤੋਂ ਬਿਨਾਂ' }
      ],
      en: [
        { word: 'Sankhaa padum', meaning: 'Incalculable billions in material wealth' },
        { word: 'Bhakti bihun', meaning: 'Devoid of spiritual devotion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भक्तिहीन होकर धन-वैभव के संग्रह को ही अपनी सुरक्षा मान रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਭਗਤੀ ਛੱਡ ਕੇ ਸਿਰਫ਼ ਧਨ ਜੋੜਨ ਵਿੱਚ ਲੱਗਾ ਹਾਂ?'),
      en: 'Do I mistakenly believe that material billions can protect a soul devoid of devotion?'
    },
    practicalApplication: {
      hi: 'धन-दौलत से अधिक भक्ति और नाम-सिमरन को मूल्यवान समझें; केवल भक्ति ही परलोक में साथ देती है।',
      pb: devanagariToGurmukhi('ਧਨ ਨਾਲੋਂ ਨਾਮ ਭਗਤੀ ਨੂੰ ਮਹੱਤਵ ਦਿਓ।'),
      en: 'Prize devotional surrender infinitely above worldly millions; only devotion redeems the soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अरबों-खरबों की नश्वर संपदा नहीं, केवल अपने पावन चरणों की अखंड भक्ति प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦੀ ਸੱਚੀ ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! I desire not billions of worldly coins, but the priceless jewel of Your holy devotion.'
    },
    quiz: []
  },
  {
    id: 'maya-38',
    number: 1478,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३८',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੮',
      en: 'Maya Ko Ang - 38',
    },
    text: {
      hi: 'कबीर माया मोहिनी, सब जग छाला छानि।\nकोइ एक साधु ऊबरा, तोडी कुल की कानि ।।',
      pb: devanagariToGurmukhi('कबीर माया मोहिनी, सब जग छाला छानि। कोइ एक साधु ऊबरा, तोडी कुल की कानि ।।'),
      en: 'Kabeer maayaa mohinee, sab jag chhaalaa chhaani. Koi ek saadhu oobaraa, todee kul kee kaani..'
    },
    transliteration: 'Kabeer maya mohini, sab jag chhaala chhaani. Koi ek saadhu oobara, todi kul ki kaani.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि यह माया मोहिनी है। सारे जगत को अपनी कामनाओं में फंसाकर लोभ रूपी कोल्हू में पीसती है, अर्थात इससे बचना बहुत ही कठिन है। इससे तो कोई विरला साधु-संत ही बच पाता है, जिसने अपनी कुल-मर्यादा तथा अभिमान को बिसार दिया हो।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਮੋਹਿਨੀ ਮਾਇਆ ਸਾਰੇ ਸੰਸਾਰ ਨੂੰ ਆਪਣੇ ਛਲ ਵਿੱਚ ਪੀਸ ਰਹੀ ਹੈ। ਕੇਵਲ ਕੋਈ ਵਿਰਲਾ ਸਾਧੂ ਹੀ ਇਸਤੋਂ ਬਚਿਆ ਹੈ, ਜਿਸਨੇ ਕੁਲ ਦਾ ਹੰਕਾਰ ਅਤੇ ਸੰਸਾਰੀ ਲੋਕ-ਲਾਜ ਤੋੜ ਕੇ ਸੱਚ ਅਪਣਾਇਆ।'),
      en: 'Kabir warns that enchanting Maya sifts and crushes the whole world in her sieve of desire. Only a rare saint escapes unharmed—one who has completely shattered the shackles of social pride, lineage vanity, and worldly convention.'
    },
    wordMeanings: {
      hi: [
        { word: 'छाला छानि (Chhaalaa chhaani)', meaning: 'छलनी में छानना, लोभ के कोल्हू में पीसना' },
        { word: 'ऊबरा (Oobaraa)', meaning: 'बच निकला, मुक्त हो गया' },
        { word: 'कुल की कानि (Kul kee kaani)', meaning: 'जाति, कुल और लोक-लाज का झूठा अहंकार' }
      ],
      pb: [
        { word: 'ਛਾਲਾ ਛਾਨਿ', meaning: 'ਛਾਣ ਕੇ ਪੀਹ ਦੇਣਾ' },
        { word: 'ਕੁਲ ਕੀ ਕਾਨਿ', meaning: 'ਖ਼ਾਨਦਾਨੀ ਹੰਕਾਰ / ਲੋਕ-ਲਾਜ' }
      ],
      en: [
        { word: 'Chhaalaa chhaani', meaning: 'Sifted and crushed in the sieve of delusion' },
        { word: 'Kul kee kaani', meaning: 'False pride of pedigree and social conformity' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं कुल, जाति और समाज के झूठे अहंकार में बंधकर माया से हार रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਕੁਲ ਦੇ ਹੰਕਾਰ ਕਾਰਨ ਭਗਤੀ ਤੋਂ ਦੂਰ ਹਾਂ?'),
      en: 'Am I trapped by social vanity and lineage pride at the expense of spiritual liberation?'
    },
    practicalApplication: {
      hi: 'जाति और कुल का अहंकार त्यागें; निष्कपट और निर्भय होकर सत्यनाम की साधना में लगें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਤੋੜ ਕੇ ਸੱਚੀ ਭਗਤੀ ਕਰੋ।'),
      en: 'Shatter the chains of social vanity and devote yourself courageously to Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे कुल-अभिमान और लोक-लाज के बंधनों से मुक्त कर अपने पावन चरणों का अनन्य प्रेमी बनाइए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕੁਲ ਦੇ ਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from lineage pride and establish my identity solely at Your lotus feet.'
    },
    quiz: []
  },
  {
    id: 'maya-39',
    number: 1479,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ३९',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੩੯',
      en: 'Maya Ko Ang - 39',
    },
    text: {
      hi: 'कबीर माया डाकिनी, सब काहू को खाय।\nदांत उपारूं पापिनी, सन्तो नियरै जाय।।',
      pb: devanagariToGurmukhi('कबीर माया डाकिनी, सब काहू को खाय। दांत उपारूं पापिनी, सन्तो नियरै जाय।।'),
      en: 'Kabeer maayaa daakinee, sab kaahoo ko khaay. Daant upaaroon paapinee, santon niyarai jaay..'
    },
    transliteration: 'Kabeer maya daakini, sab kaahu ko khaay. Daant upaaroon paapini, santo niyarai jaay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया महा-भयंकर डाकिनी है, जो खोज-खोजकर सबका भक्षण कर जाती है, परंतु यदि यह विरक्त साधु-संतों के निकट चली जाए, तो मैं इस महा-पापिनी के दांत उखाड़ लूंगा।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਇੱਕ ਭਿਆਨਕ ਡੈਣ (ਡਾਕਿਨੀ) ਹੈ ਜੋ ਹਰ ਕਿਸੇ ਨੂੰ ਖਾ ਜਾਂਦੀ ਹੈ। ਪਰ ਜੇ ਇਹ ਪੂਰੇ ਸੰਤਾਂ ਦੇ ਨੇੜੇ ਜਾਵੇ, ਤਾਂ ਮੈਂ (ਗਿਆਨ ਦੀ ਸ਼ਕਤੀ ਨਾਲ) ਇਸ ਪਾਪਣ ਦੇ ਦੰਦ ਹੀ ਉਖਾੜ ਦਿਆਂਗਾ।'),
      en: 'Kabir warns that Maya is a ravenous witch (Dakini) devouring everyone across the worlds. But should this sinister enchantress dare approach true saints, I shall tear out her poisonous fangs with the power of divine wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया डाकिनी (Maayaa daakinee)', meaning: 'सबको भक्षण करने वाली क्रूर पिशाचिनी/डायन' },
        { word: 'दांत उपारूं (Daant upaaroon)', meaning: 'ज्ञान के बल से उसके अहंकार और विषैले प्रभाव को नष्ट कर देना' },
        { word: 'सन्तो नियरै जाय (Santon niyarai jaay)', meaning: 'संतों के पास जाने पर निष्प्रभावी हो जाना' }
      ],
      pb: [
        { word: 'ਡਾਕਿਨੀ', meaning: 'ਡੈਣ' },
        { word: 'ਦਾਂਤ ਉਪਾਰੂੰ', meaning: 'ਦੰਦ ਉਖਾੜ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Daakinee', meaning: 'A predatory demoness/witch devouring souls' },
        { word: 'Daant upaaroon', meaning: 'Uproot her venomous fangs with divine wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया-डाकिनी के भय से मुक्त होने के लिए संतों की पावन छत्रछाया में शरण ले रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਤਾਂ ਦੀ ਸ਼ਰਨ ਲੈ ਕੇ ਮਾਇਆ ਤੋਂ ਨਿਰਭੈ ਹੋਇਆ ਹਾਂ?'),
      en: 'Am I taking refuge under the protective aura of the saints to disarm the witch of illusion?'
    },
    practicalApplication: {
      hi: 'संतों के सान्निध्य में रहें; संतों के ज्ञान के प्रभाव से माया की समस्त शक्ति नष्ट हो जाती है।',
      pb: devanagariToGurmukhi('ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਰਹਿ ਕੇ ਨਿਰਭੈ ਹੋਵੋ।'),
      en: 'Abide in the company of holy souls where worldly illusions lose all their power.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया-डाकिनी के चंगुल से बचाकर अपने पावन ज्ञान का अभय कवच प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੀ ਪਕੜ ਤੋਂ ਬਚਾ ਕੇ ਅਭੈ ਦਾਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Defang the predatory illusions of Maya and grant me fearless shelter in Your light.'
    },
    quiz: []
  },
  {
    id: 'maya-40',
    number: 1480,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४०',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੦',
      en: 'Maya Ko Ang - 40',
    },
    text: {
      hi: 'भूले थे संसार में, माया के संग आय।\nसतगुरु राह बताइया, फेरि मिलै तिहि जाय।।',
      pb: devanagariToGurmukhi('भूले थे संसार में, माया के संग आय। सतगुरु राह बताइया, फेरि मिलै तिहि जाय।।'),
      en: 'Bhoole the sansaar mein, maayaa ke sang aay. Satguru raah bataaiyaa, pheri milai tihi jaay..'
    },
    transliteration: 'Bhoole the sansaar mein, maya ke sang aay. Satguru raah bataiya, pheri milai tihi jaay.',
    bhavarth: {
      hi: 'हम तो इस माया-मोहिनी के कुसंग में फंसकर, इस संसार में सब कुछ विस्मृत कर चुके थे। सत्य-असत्य और उचित-अनुचित का हमें कोई ज्ञान नहीं रह गया था। सद्गुरु ने दया करके हमें सन्मार्ग बताया, फिर हम सतगुरु के परमात्म रूप से परिचित हुए।',
      pb: devanagariToGurmukhi('ਅਸੀਂ ਮਾਇਆ ਦੇ ਧੋਖੇ ਵਿੱਚ ਆ ਕੇ ਸੰਸਾਰ ਵਿੱਚ ਭਟਕ ਕੇ ਸਭ ਕੁਝ ਭੁੱਲ ਚੁੱਕੇ ਸਾਂ। ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਮਿਹਰ ਕਰਕੇ ਸੱਚਾ ਰਾਹ ਦੱਸਿਆ ਅਤੇ ਅਸੀਂ ਮੁੜ ਆਪਣੇ ਅਸਲ ਪ੍ਰਭੂ ਨਾਲ ਜਾ ਮਿਲੇ।'),
      en: 'Entangled in the company of Maya, we had completely lost our way in the worldly maze, blind to truth and falsehood. The compassionate Satguru illuminated the true path, guiding our souls back into reunion with the Supreme Divine.'
    },
    wordMeanings: {
      hi: [
        { word: 'भूले थे संसार में (Bhoole the sansaar mein)', meaning: 'माया के प्रभाव से आत्म-स्वरूप को भूलकर भटक रहे थे' },
        { word: 'सतगुरु राह बताइया (Satguru raah bataaiyaa)', meaning: 'सद्गुरु ने कृपा कर सत्य भक्ति का मार्ग दिखाया' },
        { word: 'फेरि मिलै तिहि जाय (Pheri milai tihi jaay)', meaning: 'पुनः अपने मूल परमात्म-स्वरूप में लीन हो गए' }
      ],
      pb: [
        { word: 'ਭੂਲੇ ਥੇ', meaning: 'ਭਟਕੇ ਹੋਏ ਸਾਂ' },
        { word: 'ਰਾਹ ਬਤਾਇਆ', meaning: 'ਸੱਚਾ ਮਾਰਗ ਦਰਸਾਇਆ' }
      ],
      en: [
        { word: 'Bhoole the sansaar mein', meaning: 'Lost in the labyrinth of worldly delusion' },
        { word: 'Satguru raah bataaiyaa', meaning: 'The True Master revealed the eternal path' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सद्गुरु द्वारा दिखाए गए सन्मार्ग पर चलकर अपने मूल परमात्म-स्वरूप की ओर बढ़ रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਗੁਰੂ ਦੇ ਦੱਸੇ ਸੱਚੇ ਰਾਹ \'ਤੇ ਤੁਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I faithfully walking the luminous path revealed by the Satguru toward divine reunion?'
    },
    practicalApplication: {
      hi: 'सद्गुरु के प्रति कृतज्ञ रहें; उनके बताए ज्ञान-मार्ग पर दृढ़ता और निष्ठा से प्रतिदिन आगे बढ़ें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਦਰਸਾਏ ਰਾਹ \'ਤੇ ਨਿਰੰਤਰ ਚੱਲੋ।'),
      en: 'Walk steadfastly upon the Master’s path, guided by daily remembrance and devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के भटकाव से निकालकर सत्य की राह दिखाने के लिए कोटि-कोटि धन्यवाद; अपने चरणों में सदा लीन रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚਾ ਰਾਹ ਵਿਖਾਉਣ ਲਈ ਧੰਨਵਾਦ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Endless gratitude for showing me the way out of worldly darkness into Your eternal light.'
    },
    quiz: []
  },
  {
    id: 'maya-41',
    number: 1481,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४१',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੧',
      en: 'Maya Ko Ang - 41',
    },
    text: {
      hi: 'माया काल की खानि है, धरै त्रिगुण विपरीत।\nजहां जाय तहं सुख नहीं, या माया की रीति।।',
      pb: devanagariToGurmukhi('माया काल की खानि है, धरै त्रिगुण विपरीत। जहां जाय तहं सुख नहीं, या माया की रीति।।'),
      en: 'Maayaa kaal kee khaani hai, dharai trigun vipreet. Jahaan jaay tahn sukh naheen, yaa maayaa kee reeti..'
    },
    transliteration: 'Maya kaal ki khaani hai, dharai trigun vipreet. Jahan jaay tahn sukh nahin, ya maya ki reeti.',
    bhavarth: {
      hi: 'माया काल रूपी अनेक कष्ट-विपत्तियों की खान है। यह त्रिगुणमयी विकराल रूप धारण करती है और जहां भी इसका वास होता है, वहां सुख नहीं रह पाता। बस यही माया की परम्परा व नीति है। माया के होने से वहां अहंकार पनपता है तथा अहंकार से अशांति की उत्पत्ति होती है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਕਾਲ ਅਤੇ ਦੁੱਖਾਂ ਦੀ ਖਾਣ ਹੈ, ਜੋ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੇ ਵਿਪਰੀਤ ਰੂਪ ਧਾਰਦੀ ਹੈ। ਜਿੱਥੇ ਵੀ ਇਹ ਜਾਂਦੀ ਹੈ ਓਥੇ ਸੁੱਖ ਟਿਕਣ ਨਹੀਂ ਦਿੰਦੀ; ਇਹੋ ਇਸ ਮਾਇਆ ਦੀ ਰੀਤ ਹੈ।'),
      en: 'Maya is the veritable mine of Death (Kal) and distress, manifesting in the turbulent play of the three Gunas (Sattva, Rajas, Tamas). Wherever she enters, true peace and joy vanish; such is her intrinsic nature—breeding arrogance and turmoil.'
    },
    wordMeanings: {
      hi: [
        { word: 'काल की खानि (Kaal kee khaani)', meaning: 'मृत्यु, क्लेश व विपत्तियों का मूल स्रोत' },
        { word: 'त्रिगुण विपरीत (Trigun vipreet)', meaning: 'तीनों गुणों (सत, रज, तम) का विकृत व बंधनकारी रूप' },
        { word: 'या माया की रीति (Yaa maayaa kee reeti)', meaning: 'माया का स्वभाव ही सुख को नष्ट करना है' }
      ],
      pb: [
        { word: 'ਕਾਲ ਕੀ ਖਾਨਿ', meaning: 'ਦੁੱਖਾਂ ਤੇ ਮੌਤ ਦੀ ਖਾਣ' },
        { word: 'ਰੀਤਿ', meaning: 'ਸੁਭਾਅ / ਨੀਤੀ' }
      ],
      en: [
        { word: 'Kaal kee khaani', meaning: 'The reservoir of mortality and sorrow' },
        { word: 'Trigun vipreet', meaning: 'The distorted agitation of the three Gunas' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया में सुख की आशा कर रहा हूँ जो स्वयं काल और दुःखों की खान है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੁੱਖਾਂ ਦੀ ਖਾਣ ਮਾਇਆ ਵਿੱਚ ਸੁੱਖ ਲੱਭ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I expecting joy from Maya when her very nature is the factory of sorrow?'
    },
    practicalApplication: {
      hi: 'माया की प्रकृति को समझें; भौतिक साधनों में सुख खोजने के बजाय आत्म-ज्ञान व प्रभु-भक्ति में सच्चा आनंद पाएं।',
      pb: devanagariToGurmukhi('ਸੱਚਾ ਸੁੱਖ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੱਭੋ।'),
      en: 'Recognize that true peace resides beyond the three Gunas in the unconditioned Divine.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे काल की खान रूपी त्रिगुणी माया से छुड़ाकर गुणातीत अखंड शांति प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਤ੍ਰਿਗੁਣੀ ਮਾਇਆ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਸ਼ਾਂਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the turbulent mine of Maya and anchor my soul in transcendent peace.'
    },
    quiz: []
  },
  {
    id: 'maya-42',
    number: 1482,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४२',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੨',
      en: 'Maya Ko Ang - 42',
    },
    text: {
      hi: 'जग हटवारा स्वाद ठग, माया वेश्या लाय।\nराम-राम गाढ़ा गहो, जनि जहु जनम गंवाय ।।',
      pb: devanagariToGurmukhi('जग हटवारा स्वाद ठग, माया वेश्या लाय। राम-राम गाढ़ा गहो, जनि जहु जनम गंवाय ।।'),
      en: 'Jag hatwaaraa swaad thag, maayaa veshyaa laay. Raam-Raam gaadhaa gaho, jani jahu janam ganvaay..'
    },
    transliteration: 'Jag hatwara swaad thag, maya veshya laay. Ram-Ram gaadha gaho, jani jahu janam ganvaay.',
    bhavarth: {
      hi: 'इस संसार रूपी बाजार में काम-रूपी इंद्रियों का स्वाद ही ठग है। इस वेश्या-रूपिणी माया ने विषय-भोगों की सामग्री चारों ओर सजा रखी है। इससे सावधान होकर अंतर्यामी राम के नाम-ज्ञान को गंभीरता से जीवन में उतार लो, अन्यथा यह मनुष्य-जन्म व्यर्थ हो जाएगा।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਇੱਕ ਹੱਟ (ਬਾਜ਼ਾਰ) ਹੈ ਜਿੱਥੇ ਇੰਦਰੀਆਂ ਦੇ ਸੁਆਦ ਠੱਗ ਬਣੇ ਬੈਠੇ ਹਨ ਅਤੇ ਮਾਇਆ ਵੇਸਵਾ ਵਾਂਗ ਵਿਸ਼ਿਆਂ ਦੀ ਦੁਕਾਨ ਸਜਾਈ ਬੈਠੀ ਹੈ। ਪ੍ਰਭੂ ਦੇ ਸਤਯਨਾਮ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜੋ, ਨਹੀਂ ਤਾਂ ਮਨੁੱਖਾ ਜਨਮ ਵਿਅਰਥ ਗਵਾ ਬੈਠੋਗੇ।'),
      en: 'This world is a bustling market where sensory appetites act as robbers and Maya sets up her bazaar of temptations like a courtesan. Hold fast with unwavering resolve unto the holy Name of the Lord, lest this priceless human incarnation be squandered forever.'
    },
    wordMeanings: {
      hi: [
        { word: 'हटवारा (Hatwaaraa)', meaning: 'हाट, बाजार, मेला' },
        { word: 'स्वाद ठग (Swaad thag)', meaning: 'इंद्रियों के क्षणिक भोग जो चेतना को लूट लेते हैं' },
        { word: 'गाढ़ा गहो (Gaadhaa gaho)', meaning: 'अटूट निष्ठा व दृढ़ता से पकड़ लो' },
        { word: 'जनि जहु जनम गंवाय (Jani jahu janam ganvaay)', meaning: 'मनुष्य जन्म को व्यर्थ मत गंवाओ' }
      ],
      pb: [
        { word: 'ਹਟਵਾਰਾ', meaning: 'ਬਾਜ਼ਾਰ / ਮੇਲਾ' },
        { word: 'ਗਾੜ੍ਹਾ ਗਹੋ', meaning: 'ਮਜ਼ਬੂਤੀ ਨਾਲ ਪਕੜੋ' }
      ],
      en: [
        { word: 'Hatwaaraa', meaning: 'The worldly marketplace' },
        { word: 'Swaad thag', meaning: 'The thief of sensory appetite' },
        { word: 'Gaadhaa gaho', meaning: 'Grasp firmly with unshakeable resolve' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संसार के बाजार में इंद्रियों के स्वाद में लुट रहा हूँ, या राम-नाम को दृढ़ता से पकड़े हुए हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਨਾਮ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜਿਆ ਹੈ?'),
      en: 'Am I being robbed by sensory tastes or holding fast to the unyielding anchor of the holy Name?'
    },
    practicalApplication: {
      hi: 'संसार के प्रलोभनों के बीच सजग रहें; प्रतिदिन नाम-स्मरण की दृढ़ता से अपने जीवन को सुरक्षित रखें।',
      pb: devanagariToGurmukhi('ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Grip the divine Name with unyielding firmness amidst all market temptations.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे इस संसार-हाट के स्वाद-ठगों से बचाकर अपने पावन नाम का दृढ़ आश्रय प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦਾ ਦ੍ਰਿੜ੍ਹ ਆਸਰਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Protect me from the sensory robbers of this worldly fair and anchor me firmly in Your Name.'
    },
    quiz: []
  },
  {
    id: 'maya-43',
    number: 1483,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४३',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੩',
      en: 'Maya Ko Ang - 43',
    },
    text: {
      hi: 'कबीर माया मोहिनी, मोहै जान सुजान।\nभागै हू छूटे नहीं, भरि भरि मारै बान।।',
      pb: devanagariToGurmukhi('कबीर माया मोहिनी, मोहै जान सुजान। भागै हू छूटे नहीं, भरि भरि मारै बान।।'),
      en: 'Kabeer maayaa mohinee, mohai jaan sujaan. Bhaagai hoo chhoote naheen, bhari bhari maarai baan..'
    },
    transliteration: 'Kabeer maya mohini, mohai jaan sujaan. Bhaagai hoo chhoote nahin, bhari bhari maarai baan.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया विचित्र प्रकार की मोहिनी है। इसने अच्छे-बुरे, ज्ञानी-अनपढ़ यानी सभी को किसी-न-किसी प्रकार से अपने मोह में जकड़ रखा है। लोभ रूपी बाणों को यह इस प्रकार खींच-तानकर मारती है कि भागने पर भी इससे कोई बच नहीं पाता।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਅਜਿਹੀ ਮੋਹਿਨੀ ਹੈ ਜੋ ਵੱਡੇ-ਵੱਡੇ ਵਿਦਵਾਨਾਂ ਤੇ ਸਿਆਣਿਆਂ ਨੂੰ ਵੀ ਮੋਹ ਲੈਂਦੀ ਹੈ। ਇਹ ਵਾਸਨਾਵਾਂ ਦੇ ਅਜਿਹੇ ਤਿੱਖੇ ਤੀਰ ਖਿੱਚ-ਖਿੱਚ ਕੇ ਮਾਰਦੀ ਹੈ ਕਿ ਭੱਜਣ \'ਤੇ ਵੀ ਕੋਈ ਇਸਤੋਂ ਬਚ ਨਹੀਂ ਪਾਉਂਦਾ।'),
      en: 'Kabir declares that Maya is an irresistible enchantress capable of bewitching even scholars and intellectuals (Jaan Sujaan). Drawing her bow to the fullest, she unleashes volleys of desire-arrows so penetrating that fleeing mortals cannot escape.'
    },
    wordMeanings: {
      hi: [
        { word: 'जान सुजान (Jaan sujaan)', meaning: 'विद्वान, बुद्धिमान और चतुर व्यक्ति' },
        { word: 'भरि भरि मारै बान (Bhari bhari maarai baan)', meaning: 'वासना और लोभ के तीक्ष्ण बाण खींच-खींचकर मारना' }
      ],
      pb: [
        { word: 'ਸੁਜਾਨ', meaning: 'ਸਿਆਣਾ / ਵਿਦਵਾਨ' },
        { word: 'ਬਾਨ', meaning: 'ਤੀਰ / ਬਾਣ' }
      ],
      en: [
        { word: 'Jaan sujaan', meaning: 'The wise, intelligent, and scholarly' },
        { word: 'Bhari bhari maarai baan', meaning: 'Unleashes fully drawn arrows of relentless desire' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल बुद्धि के बल पर माया के बाणों से बच सकता हूँ, या गुरु की कृपा-ढाल की आवश्यकता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਕੋਲ ਮਾਇਆ ਦੇ ਤੀਰਾਂ ਤੋਂ ਬਚਣ ਲਈ ਗੁਰੂ ਦੀ ਢਾਲ ਹੈ?'),
      en: 'Can mere intellectual cleverness shield me from Maya’s arrows without the Master’s protective grace?'
    },
    practicalApplication: {
      hi: 'बौद्धिक अहंकार छोड़ें; सद्गुरु के नाम और ज्ञान को ढाल बनाकर माया के बाणों से अपनी रक्षा करें।',
      pb: devanagariToGurmukhi('ਗੁਰੂ ਦੇ ਗਿਆਨ ਨੂੰ ਢਾਲ ਬਣਾਓ।'),
      en: 'Take shelter behind the shield of the Satguru’s holy Word against the arrows of passion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! माया के तीक्ष्ण बाणों से मेरी रक्षा कीजिए और अपने पावन चरणों की अभेद्य ढाल प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਤੀਰਾਂ ਤੋਂ ਬਚਾਉਣ ਵਾਲੀ ਢਾਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield my vulnerable heart from the fiery darts of worldly illusion.'
    },
    quiz: []
  },
  {
    id: 'maya-44',
    number: 1484,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४४',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੪',
      en: 'Maya Ko Ang - 44',
    },
    text: {
      hi: 'जिनको सांई रंग दिया, कबहुं न होय कुरंग।\nदिन-दिन बानी आगरी, चढ़े सवाया रंग।।',
      pb: devanagariToGurmukhi('जिनको सांई रंग दिया, कबहुं न होय कुरंग। दिन-दिन बानी आगरी, चढ़े सवाया रंग।।'),
      en: 'Jinko Saan-ee rang diyaa, kabahun na hoy kurang. Din-din baanee aagree, chadhe savaayaa rang..'
    },
    transliteration: 'Jinko Saan-i rang diya, kabahun na hoy kurang. Din-din baani aagri, chadhe savaaya rang.',
    bhavarth: {
      hi: 'जिनको सद्गुरु ने अपने पवित्र प्रेम (निर्मल ज्ञान) के रंग में रंग दिया, वे कभी भी रंगहीन - मैले (गुणहीन व अज्ञानी) नहीं हो सकते, क्योंकि प्रतिदिन उनके आगे गुरु की ज्ञान-वाणी होती है। इस प्रकार उन पर दिन-प्रतिदिन और भी अधिक प्रेम-भक्ति (ज्ञान प्राप्ति) का रंग चढ़ता जाता है।',
      pb: devanagariToGurmukhi('ਜਿਨ੍ਹਾਂ ਨੂੰ ਸਤਿਗੁਰੂ ਨੇ ਆਪਣੇ ਨਾਮ-ਪ੍ਰੇਮ ਦੇ ਸੱਚੇ ਰੰਗ ਵਿੱਚ ਰੰਗ ਦਿੱਤਾ, ਉਹ ਕਦੇ ਫਿੱਕੇ ਜਾਂ ਬਦਰੰਗ (ਕੁਰੰਗ) ਨਹੀਂ ਹੁੰਦੇ। ਗੁਰਬਾਣੀ ਦੇ ਵਿਚਾਰ ਨਾਲ ਉਹਨਾਂ \'ਤੇ ਦਿਨ-ਬ-ਦਿਨ ਸਵਾਇਆ (ਡੂੰਘਾ) ਰੰਗ ਚੜ੍ਹਦਾ ਜਾਂਦਾ ਹੈ।'),
      en: 'Those dyed in the fast, divine color of the Satguru’s love can never be discolored or fade into worldly grime. Guided daily by the Master’s illuminated Word, the brilliance of their spiritual devotion grows richer and brighter day by day.'
    },
    wordMeanings: {
      hi: [
        { word: 'सांई रंग दिया (Saan-ee rang diyaa)', meaning: 'सद्गुरु परमात्मा ने अपने प्रेम-रंग में रंग दिया' },
        { word: 'कबहुं न होय कुरंग (Kabahun na hoy kurang)', meaning: 'कभी भी फीका, मैला या बदरंग नहीं होता' },
        { word: 'बानी आगरी (Baanee aagree)', meaning: 'सद्गुरु की पावन ज्ञान-वाणी निरंतर आगे रहती है' },
        { word: 'चढ़े सवाया रंग (Chadhe savaayaa rang)', meaning: 'भक्ति और प्रेम का रंग दिन-प्रतिदिन और गहरा होता जाता है' }
      ],
      pb: [
        { word: 'ਕੁਰੰਗ', meaning: 'ਫਿੱਕਾ / ਬਦਰੰਗ' },
        { word: 'ਸਵਾਇਆ ਰੰਗ', meaning: 'ਹੋਰ ਗੂੜ੍ਹਾ ਤੇ ਚੋਖਾ ਰੰਗ' }
      ],
      en: [
        { word: 'Saan-ee rang diyaa', meaning: 'Dyed in the Lord’s immaculate love' },
        { word: 'Kabahun na hoy kurang', meaning: 'Never fades into worldly drabness' },
        { word: 'Chadhe savaayaa rang', meaning: 'Grows progressively deeper and more radiant daily' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सद्गुरु के पावन प्रेम-रंग में ऐसा रंगा है जो संसार की किसी भी माया से फीका नहीं पड़ता?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ \'ਤੇ ਗੁਰੂ ਦੇ ਨਾਮ ਦਾ ਪੱਕਾ ਰੰਗ ਚੜ੍ਹਿਆ ਹੈ?'),
      en: 'Is my heart saturated in the permanent dye of the Master’s love, immune to worldly fading?'
    },
    practicalApplication: {
      hi: 'नित्य गुरु-वाणी का स्वाध्याय करें; वाणी के निरंतर विचार से भक्ति का रंग प्रतिदिन और प्रगाढ़ होता है।',
      pb: devanagariToGurmukhi('ਨਿਤਨੇਮ ਨਾਲ ਗੁਰਬਾਣੀ ਦਾ ਵਿਚਾਰ ਕਰੋ।'),
      en: 'Immerse daily in the Satguru’s wisdom to deepen the fast dye of divine remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अपने पावन नाम के उस पक्के मजीठ रंग में रंग दीजिए जो कभी फीका न पड़े और दिन-प्रतिदिन सवाया हो। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸੱਚੇ ਪ੍ਰੇਮ ਰੰਗ ਵਿੱਚ ਰੰਗੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dye my soul in the unfading crimson of Your divine love, growing ever deeper with each breath.'
    },
    quiz: []
  },
  {
    id: 'maya-45',
    number: 1485,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४५',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੫',
      en: 'Maya Ko Ang - 45',
    },
    text: {
      hi: 'मैं जानूं हरिसू मिलूं , मो मन मोटी आस।\nहरि बिच डारै अन्तरा, माया बड़ी पिचास।।',
      pb: devanagariToGurmukhi('मैं जानूं हरिसू मिलूं , मो मन मोटी आस। हरि बिच डारै अन्तरा, माया बड़ी पिचास।।'),
      en: 'Main jaanoon Harisoo miloon, mo man motee aas. Hari bich daarai antraa, maayaa badee pichaas..'
    },
    transliteration: 'Main jaanoon Harisoo miloon, mo man moti aas. Hari bich daarai antara, maya badi pichaas.',
    bhavarth: {
      hi: 'मैं जानता-समझता था कि स्वाध्याय व साधना एवं सेवा-भक्ति से परमात्मा से मिलन हो जाएगा। ऐसा मेरे मन में बहुत आशा और विश्वास था, परंतु यह दुष्ट माया बड़ी भयंकर पिशाचिनी है। जीव इसके जाल में फंस जाता है। यह जीव के परमात्मा मिलन के मार्ग में रुकावट डाल देती है।',
      pb: devanagariToGurmukhi('ਮੇਰੇ ਮਨ ਵਿੱਚ ਵੱਡੀ ਆਸ ਸੀ ਕਿ ਮੈਂ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲ ਜਾਵਾਂਗਾ, ਪਰ ਇਹ ਮਾਇਆ ਬੜੀ ਭਿਆਨਕ ਪਿਸ਼ਾਚਨੀ ਹੈ ਜੋ ਜੀਵ ਅਤੇ ਪ੍ਰਮਾਤਮਾ ਦੇ ਵਿਚਕਾਰ ਵਿੱਥ (ਵਿਛੋੜਾ) ਪਾ ਦਿੰਦੀ ਹੈ।'),
      en: 'I harbored deep longing and great hope to merge with the Supreme Lord; yet this treacherous Maya acts like a fierce goblin (Pichaas), driving an agonizing wedge of duality and distraction between the soul and God.'
    },
    wordMeanings: {
      hi: [
        { word: 'मोटी आस (Motee aas)', meaning: 'परमात्मा से मिलन की उत्कट व दृढ़ आशा' },
        { word: 'डारै अन्तरा (Daarai antraa)', meaning: 'जीव और ईश्वर के बीच दूरी व पर्दा डाल देना' },
        { word: 'माया बड़ी पिचास (Maayaa badee pichaas)', meaning: 'माया अत्यंत भयंकर और दुष्ट पिशाचिनी है' }
      ],
      pb: [
        { word: 'ਅੰਤਰਾ', meaning: 'ਵਿੱਥ / ਦੂਰੀ / ਪਰਦਾ' },
        { word: 'ਪਿਚਾਸ', meaning: 'ਪਿਸ਼ਾਚਨੀ / ਚੁੜੇਲ' }
      ],
      en: [
        { word: 'Motee aas', meaning: 'High hopes and deep longing for divine union' },
        { word: 'Daarai antraa', meaning: 'Casts a barrier of separation between soul and God' },
        { word: 'Pichaas', meaning: 'A tormenting phantom / demonic obstacle' }
      ]
    },
    contemplation: {
      hi: 'क्या साधना के मार्ग पर माया मेरे और परमात्मा के बीच संशय और वासना का पर्दा डाल रही है?',
      pb: devanagariToGurmukhi('ਕੀ ਮਾਇਆ ਮੇਰੇ ਅਤੇ ਪ੍ਰਭੂ ਦੇ ਵਿਚਕਾਰ ਵਿੱਥ ਪਾ ਰਹੀ ਹੈ?'),
      en: 'Is subtle worldly illusion inserting a wedge of distraction between my soul and God?'
    },
    practicalApplication: {
      hi: 'साधना में आने वाली बाधाओं और विक्षेपों को पहचानें; अनन्य भाव से सतगुरु की शरण में टिके रहें।',
      pb: devanagariToGurmukhi('ਸਾਧਨਾ ਦੇ ਵਿਘਨਾਂ ਨੂੰ ਗੁਰੂ ਸ਼ਰਨ ਨਾਲ ਦੂਰ ਕਰੋ।'),
      en: 'Dissolve every barrier of distraction by clinging tightly to the Master’s lotus feet.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया-पिशाचिनी के इस अंतराल से बचाकर परमात्मा के साथ अभिन्न एकत्व प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਵਿੱਥ ਮਿਟਾ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Banish the phantom wedge of Maya and unite my soul inseparably with the Divine.'
    },
    quiz: []
  },
  {
    id: 'maya-46',
    number: 1486,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४६',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੬',
      en: 'Maya Ko Ang - 46',
    },
    text: {
      hi: 'माया तरुवर त्रिविधका, शोक दुख संताप ।\nशीतलता सुपनै नहीं, फल फीका तन ताप।।',
      pb: devanagariToGurmukhi('माया तरुवर त्रिविधका, शोक दुख संताप । शीतलता सुपनै नहीं, फल फीका तन ताप।।'),
      en: 'Maayaa taruvar trividhkaa, shok dukh santaap. Sheetaltaa supanai naheen, phal pheekaa tan taap..'
    },
    transliteration: 'Maya taruvar trividhka, shok dukh santaap. Sheetalta supanai nahin, phal pheeka tan taap.',
    bhavarth: {
      hi: 'यह त्रिगुणमयी माया तीन शाखाओं वाले महान वृक्ष के समान है, जो शोक, क्लेश तथा संताप के रूप में है। इसकी कल्पित छाया में सुख-शांति की शीतलता तो नाम-मात्र को भी नहीं है। इसका फल निरर्थक, स्वादहीन तथा शरीर में ताप-जलन उत्पन्न करने वाला है, अतः माया की आशा-तृष्णा करनी व्यर्थ है।',
      pb: devanagariToGurmukhi('ਮਾਇਆ ਤਿੰਨਾਂ ਗੁਣਾਂ ਵਾਲਾ ਅਜਿਹਾ ਜ਼ਹਿਰੀਲਾ ਰੁੱਖ ਹੈ ਜਿਸਦੀਆਂ ਸ਼ਾਖਾਵਾਂ ਸ਼ੋਕ, ਦੁੱਖ ਅਤੇ ਸੰਤਾਪ ਹਨ। ਇਸਦੀ ਛਾਂ ਵਿੱਚ ਸੁਪਨੇ ਵਿੱਚ ਵੀ ਠੰਢਕ ਨਹੀਂ ਮਿਲਦੀ; ਇਸਦਾ ਫਲ ਫਿੱਕਾ ਤੇ ਸਰੀਰ ਨੂੰ ਸਾੜਨ ਵਾਲਾ ਹੈ।'),
      en: 'Maya is a tree with three branches (the three Gunas) bearing sorrow, agony, and torment. In its illusory shade, coolness and peace cannot be found even in a dream; its fruit is tasteless and burns the body with spiritual fever.'
    },
    wordMeanings: {
      hi: [
        { word: 'तरुवर त्रिविधका (Taruvar trividhkaa)', meaning: 'त्रिगुणमयी (सत, रज, तम) तीन शाखाओं वाला वृक्ष' },
        { word: 'शोक दुख संताप (Shok dukh santaap)', meaning: 'त्रिताप और मानसिक अशांति' },
        { word: 'फल फीका तन ताप (Phal pheekaa tan taap)', meaning: 'स्वादहीन फल जो देह व मन में जलन पैदा करता है' }
      ],
      pb: [
        { word: 'ਤ੍ਰਿਵਿਧਕਾ', meaning: 'ਤਿੰਨਾਂ ਗੁਣਾਂ ਵਾਲਾ' },
        { word: 'ਤਨ ਤਾਪ', meaning: 'ਸਰੀਰਕ ਤੇ ਮਾਨਸਿਕ ਤਪਸ਼' }
      ],
      en: [
        { word: 'Taruvar trividhkaa', meaning: 'The three-branched tree of the Gunas' },
        { word: 'Sheetaltaa supanai naheen', meaning: 'No cooling peace even in a dream' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया रूपी तपन देने वाले विषैले वृक्ष के नीचे शांति और शीतलता खोज रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੁੱਖਾਂ ਦੇ ਰੁੱਖ ਮਾਇਆ ਹੇਠਾਂ ਸ਼ਾਂਤੀ ਲੱਭ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I looking for cooling peace beneath the scorching, three-branched tree of illusion?'
    },
    practicalApplication: {
      hi: 'माया-वृक्ष की छाया छोड़ें; सद्गुरु के नाम रूपी कल्पवृक्ष की शीतल छत्रछाया में आश्रय लें।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਸ਼ੀਤਲ ਛਾਂ ਵਿੱਚ ਆਓ।'),
      en: 'Abandon the burning shade of Maya to rest beneath the cooling arbor of the holy Name.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के इस शोक-संताप के वृक्ष से हटाकर अपने पावन नाम की शीतल छाया में शरण दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦੀ ਠੰਢਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Sheltered beneath the burning tree of illusion, I flee to the cool sanctuary of Your grace.'
    },
    quiz: []
  },
  {
    id: 'maya-47',
    number: 1487,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४७',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੭',
      en: 'Maya Ko Ang - 47',
    },
    text: {
      hi: 'माया मुई न मन मुआ, मरि मरि गया शरीर।\nआशा तृष्णा ना मुई, यौं कथि कहैं कबीर।।',
      pb: devanagariToGurmukhi('माया मुई न मन मुआ, मरि मरि गया शरीर। आशा तृष्णा ना मुई, यौं कथि कहैं कबीर।।'),
      en: 'Maayaa muee na man muaa, mari mari gayaa shareer. Aashaa trishnaa naa muee, yaun kathi kahain Kabeer..'
    },
    transliteration: 'Maya muyi na man mua, mari mari gaya shareer. Aasha trishna na muyi, yaun kathi kahain Kabeer.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि न तो माया-मोह मरा, न ही मन मरा तथा आशा-तृष्णा की भी मृत्यु नहीं हुई, बस केवल यह शरीर ही बार-बार मरता रहा। शरीर के बार-बार जन्म-मरण से सूक्ष्म रूप में उपस्थित माया, मन, आशा, तृष्णा भी इसके साथ रहे। इस प्रकार जीवन का उद्धार कैसे संभव हो सकता है?',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਨਾ ਮਾਇਆ ਮਰੀ, ਨਾ ਮਨ ਮਰਿਆ ਅਤੇ ਨਾ ਹੀ ਆਸ਼ਾ-ਤ੍ਰਿਸ਼ਨਾ ਮਰੀ; ਸਿਰਫ਼ ਇਹ ਸਰੀਰ ਹੀ ਵਾਰ-ਵਾਰ ਮਰਦਾ ਰਿਹਾ। ਜਦ ਤੱਕ ਤ੍ਰਿਸ਼ਨਾ ਨਹੀਂ ਮਰਦੀ, ਜਨਮ-ਮਰਨ ਦਾ ਗੇੜ ਕਿਵੇਂ ਮੁੱਕੇਗਾ?'),
      en: 'Kabir proclaims: Neither did Maya die, nor did the restless mind die, nor did insatiable craving perish—only the physical body died over and over through countless rebirths. Unless desires are slain through wisdom, cyclic transmigration never ends.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया मुई न मन मुआ (Maayaa muee na man muaa)', meaning: 'न माया का मोह समाप्त हुआ और न चंचल मन मरा' },
        { word: 'मरि मरि गया शरीर (Mari mari gayaa shareer)', meaning: 'केवल भौतिक देह बार-बार जन्मती और मरती रही' },
        { word: 'आशा तृष्णा ना मुई (Aashaa trishnaa naa muee)', meaning: 'सांसारिक वासनाएं और कामनाएं ज्यों-की-त्यों बनी रहीं' }
      ],
      pb: [
        { word: 'ਮੁਈ', meaning: 'ਮਰੀ / ਨਸ਼ਟ ਹੋਈ' },
        { word: 'ਤ੍ਰਿਸ਼ਨਾ', meaning: 'ਭੁੱਖ / ਲਾਲਚ' }
      ],
      en: [
        { word: 'Maayaa muee na', meaning: 'Maya never died' },
        { word: 'Mari mari gaya shareer', meaning: 'Only the physical body perished repeatedly' },
        { word: 'Aashaa trishnaa', meaning: 'Desire and craving remained immortal' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बार-बार देह बदलकर भी अपनी आशाओं और तृष्णाओं को अमर बनाए रख रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਤ੍ਰਿਸ਼ਨਾਵਾਂ ਨੂੰ ਮਿਟਾ ਕੇ ਮਨ ਨੂੰ ਸਾਧਿਆ ਹੈ?'),
      en: 'While bodies die repeatedly, am I keeping the roots of craving and delusion alive within?'
    },
    practicalApplication: {
      hi: 'देह के अंत से पहले अपनी आशा-तृष्णा को सतगुरु के ज्ञान से समाप्त करें; यही जीवन-मुक्ति है।',
      pb: devanagariToGurmukhi('ਜਿਊਂਦੇ-ਜੀਅ ਤ੍ਰਿਸ਼ਨਾ ਨੂੰ ਨਾਮ ਨਾਲ ਮਿਟਾਓ।'),
      en: 'Slay desires while still alive through the sword of spiritual awareness to end rebirth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन की आशा और तृष्णा को अपने पावन ज्ञान से मारकर मुझे जन्म-मरण के चक्र से मुक्त कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਆਸ਼ਾ-ਤ੍ਰਿਸ਼ਨਾ ਮਿਟਾ ਕੇ ਮੈਨੂੰ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Slay the thirst of craving within me and release my soul from the wheel of transmigration.'
    },
    quiz: []
  },
  {
    id: 'maya-48',
    number: 1488,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४८',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੮',
      en: 'Maya Ko Ang - 48',
    },
    text: {
      hi: 'माया मरि मन मारिया, राख्या अमर शरीर।\nआशा तृष्णा मारि के, थिर हैं रहैं कबीर।।',
      pb: devanagariToGurmukhi('माया मरि मन मारिया, राख्या अमर शरीर। आशा तृष्णा मारि के, थिर हैं रहैं कबीर।।'),
      en: 'Maayaa mari man maariyaa, raakhyaa amar shareer. Aashaa trishnaa maari ke, thir hain rahain Kabeer..'
    },
    transliteration: 'Maya mari man maariya, raakhya amar shareer. Aasha trishna maari ke, thir hain rahain Kabeer.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जब माया-मोह पूरी तरह नष्ट हो जाता है, तो मन स्वयं ही शांत हो जाता है, और सभी आशा-तृष्णा भी समाप्त हो जाती है। परिणामस्वरूप स्थिर पद की प्राप्ति होती है, अर्थात सहजस्वरूप की स्थिति बनती है। इस प्रकार इस शरीर के जीवित रहते हुए भी अमरत्व की प्राप्ति हो सकती है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਜਦੋਂ ਗਿਆਨ ਨਾਲ ਮਾਇਆ ਤੇ ਮਨ ਨੂੰ ਸਾਧ ਲਿਆ ਅਤੇ ਆਸ਼ਾ-ਤ੍ਰਿਸ਼ਨਾ ਨੂੰ ਮਿਟਾ ਦਿੱਤਾ, ਤਾਂ ਸੁਰਤਿ ਸਹਿਜ ਅਵਸਥਾ ਵਿੱਚ ਸਥਿਰ ਹੋ ਗਈ ਅਤੇ ਜਿਊਂਦੇ-ਜੀਅ ਅਮਰ ਪਦ ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ।'),
      en: 'Kabir declares: By vanquishing Maya, the turbulent mind was subdued; by slaying desire and craving, consciousness became permanently established in unshakeable stillness, attaining the immortal state of liberation while still in this living vessel.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया मरि मन मारिया (Maayaa mari man maariyaa)', meaning: 'माया का नाश होने पर मन का पूर्णतया वशीभूत हो जाना' },
        { word: 'राख्या अमर शरीर (Raakhyaa amar shareer)', meaning: 'आत्म-ज्ञान से जीवन्मुक्त व अमर पद प्राप्त करना' },
        { word: 'थिर हैं रहैं (Thir hain rahain)', meaning: 'सहज समाधि और अचल आत्म-स्थिति में लीन रहना' }
      ],
      pb: [
        { word: 'ਅਮਰ ਸਰੀਰ', meaning: 'ਜੀਵਨ-ਮੁਕਤ ਅਵਸਥਾ' },
        { word: 'ਥਿਰ ਰਹੈ', meaning: 'ਸਦਾ ਲਈ ਅਡੋਲ ਟਿਕ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Man maariyaa', meaning: 'The mind was conquered' },
        { word: 'Amar shareer', meaning: 'Preserved in immortal awareness / Jivanmukti' },
        { word: 'Thir hain rahain', meaning: 'Abides in eternal, unshakeable stillness' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने अपनी तृष्णाओं को मारकर मन को सहज और अचल आत्म-स्वरूप में स्थिर किया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਤ੍ਰਿਸ਼ਨਾ ਮਿਟਾ ਕੇ ਅਡੋਲ ਅਵਸਥਾ ਪਾਈ ਹੈ?'),
      en: 'Have I conquered desires to rest in the tranquil, immortal stillness of Self-realization?'
    },
    practicalApplication: {
      hi: 'वासनाओं को ज्ञान-खड्ग से काटें; जब कामनाएं मिटती हैं, तो आत्मा जीवित रहते हुए भी अमरत्व का अनुभव करती है।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਨਾਲ ਵਾਸਨਾਵਾਂ ਮਿਟਾ ਕੇ ਅਡੋਲ ਹੋਵੋ।'),
      en: 'Extinguish worldly cravings to experience the immortal peace of Jivanmukti here and now.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे आशा-तृष्णा को जीतने का आत्म-बल और आपकी सहज समाधि की अचल स्थिरता प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਹਿਜ ਸਮਾਧੀ ਦਾ ਅਮਰ ਪਦ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the power to conquer desires and abide in Your timeless peace.'
    },
    quiz: []
  },
  {
    id: 'maya-49',
    number: 1489,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ४९',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੪੯',
      en: 'Maya Ko Ang - 49',
    },
    text: {
      hi: 'मन ते माया ऊपजै, माया तिरगुण रूप।\nपांच तत्व के मेल में, बांधे सकल सरूप।।',
      pb: devanagariToGurmukhi('मन ते माया ऊपजै, माया तिरगुण रूप। पांच तत्व के मेल में, बांधे सकल सरूप।।'),
      en: 'Man te maayaa oopajai, maayaa tiragun roop. Paanch tatva ke mel mein, baandhe sakal saroop..'
    },
    transliteration: 'Man te maya oopajai, maya tiragun roop. Paanch tatva ke mel mein, baandhe sakal saroop.',
    bhavarth: {
      hi: 'माया मन से उत्पन्न होती है और मन मोहवश इसकी ओर आकर्षित होता है। यह तीन गुणों (सत, रज और तम) के रूप में है। इन्हीं गुणों के अनुसार कर्म होते हैं। पांच तत्त्वों (पृथ्वी, जल, अग्नि, वायु एवं आकाश) के मेल से ही इस मन-माया ने सम्पूर्ण देह-रूपों (जीवों) का निर्माण कर रखा है।',
      pb: devanagariToGurmukhi('ਮਨ ਤੋਂ ਹੀ ਮਾਇਆ ਪੈਦਾ ਹੁੰਦੀ ਹੈ ਅਤੇ ਮਾਇਆ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦਾ ਰੂਪ ਹੈ। ਪੰਜਾਂ ਤੱਤਾਂ ਦੇ ਮੇਲ ਨਾਲ ਇਸ ਮਨ-ਮਾਇਆ ਨੇ ਸਾਰੇ ਸਰੀਰਾਂ ਅਤੇ ਸੰਸਾਰ ਨੂੰ ਬੰਧਨਾਂ ਵਿੱਚ ਬੰਨ੍ਹਿਆ ਹੋਇਆ ਹੈ।'),
      en: 'Maya is projected from the desires of the mind, manifesting in the three Gunas (Sattva, Rajas, Tamas). By weaving together the five cosmic elements (Earth, Water, Fire, Air, Space), this mind-Maya fabricates and binds all physical forms in the universe.'
    },
    wordMeanings: {
      hi: [
        { word: 'मन ते माया ऊपजै (Man te maayaa oopajai)', meaning: 'मन के संकल्प-विकल्प से ही माया का विस्तार होता है' },
        { word: 'तिरगुण रूप (Tiragun roop)', meaning: 'सत, रज, तम त्रिगुणमयी प्रकृति' },
        { word: 'बांधे सकल सरूप (Baandhe sakal saroop)', meaning: 'पांच तत्वों के शरीर में समस्त जीवों को बांध रखा है' }
      ],
      pb: [
        { word: 'ਤਿਰਗੁਣ', meaning: 'ਤਿੰਨ ਗੁਣ (ਸਤੋ, ਰਜੋ, ਤਮੋ)' },
        { word: 'ਪਾਂਚ ਤੱਤ', meaning: 'ਪੰਜ ਮੂਲ ਤੱਤ' }
      ],
      en: [
        { word: 'Man te oopajai', meaning: 'Born of the projections of the mind' },
        { word: 'Baandhe sakal saroop', meaning: 'Binds all living forms within the five elements' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं यह समझ पा रहा हूँ कि मन की कल्पना ही इस त्रिगुणी माया और पंचतत्वीय बंधनों का मूल है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਮਝਦਾ ਹਾਂ ਕਿ ਮਨ ਹੀ ਮਾਇਆ ਦਾ ਮੂਲ ਹੈ?'),
      en: 'Do I realize that mental projection is the root architect of this entire illusory cosmos?'
    },
    practicalApplication: {
      hi: 'मन को साक्षी भाव से देखें; जब मन संकल्प-शून्य होता है तो माया का संपूर्ण प्रपंच स्वतः विलीन हो जाता है।',
      pb: devanagariToGurmukhi('ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਮਾਇਆ ਦੇ ਬੰਧਨ ਤੋੜੋ।'),
      en: 'Quiet the mind’s projections; when mental modifications cease, the web of Maya dissolves.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे मन और माया के इस पंचतत्वीय प्रपंच से ऊपर उठाकर अपने विशुद्ध आत्म-स्वरूप में लीन कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਪੰਜਾਂ ਤੱਤਾਂ ਦੇ ਬੰਧਨ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Elevate my consciousness above the five elements and anchor me in the pure Self.'
    },
    quiz: []
  },
  {
    id: 'maya-50',
    number: 1490,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ५०',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੫੦',
      en: 'Maya Ko Ang - 50',
    },
    text: {
      hi: 'कबीर माया मोहिनी, भई अंधियारी लोय।\nजो सोये सो मुसि गये, रहे वस्तु को रोय।।',
      pb: devanagariToGurmukhi('कबीर माया मोहिनी, भई अंधियारी लोय। जो सोये सो मुसि गये, रहे वस्तु को रोय।।'),
      en: 'Kabeer maayaa mohinee, bhayee andhiyaaree loy. Jo soye so musi gaye, rahe vastu ko roy..'
    },
    transliteration: 'Kabeer maya mohini, bhayi andhiyaari loy. Jo soye so musi gaye, rahe vastu ko roy.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया-मोहिनी गहन-अंधेरी रात्रि के समान सबके ऊपर छाई हुई है। जो इसके मोह के वशीभूत होकर मस्त निद्रा में सो गए, समझो वे मन के विकार (काम, क्रोध, लोभादि) रूपी डाकुओं द्वारा लूट लिए गए और जो वास्तविक अनमोल वस्तु सत्य-ज्ञान है, उससे वंचित होकर रोते ही रह गए।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮੋਹਿਨੀ ਮਾਇਆ ਘੁੱਪ ਹਨੇਰੀ ਰਾਤ ਬਣ ਕੇ ਛਾਈ ਹੋਈ ਹੈ। ਜੋ ਇਸ ਅਗਿਆਨਤਾ ਦੀ ਨੀਂਦ ਵਿੱਚ ਸੁੱਤੇ ਰਹੇ, ਉਹ ਵਿਕਾਰਾਂ ਹੱਥੋਂ ਲੁੱਟੇ ਗਏ ਅਤੇ ਨਾਮ ਰੂਪੀ ਅਸਲ ਵਸਤੂ ਗੁਆ ਕੇ ਰੋਂਦੇ ਹੀ ਰਹਿ ਗਏ।'),
      en: 'Kabir declares that enchanting Maya blankets the world like a pitch-black night. Those who slumber heedlessly in the sleep of ignorance are plundered by the bandits of passion, waking only to weep over the loss of their priceless spiritual treasure.'
    },
    wordMeanings: {
      hi: [
        { word: 'अंधियारी लोय (Andhiyaaree loy)', meaning: 'अज्ञान और मोह की घनी अंधेरी रात' },
        { word: 'मुसि गये (Musi gaye)', meaning: 'चोरों व विकारों द्वारा लूटे गए' },
        { word: 'वस्तु को रोय (Vastu ko roy)', meaning: 'आत्म-ज्ञान व सत्यनाम रूपी अनमोल वस्तु खोकर पश्चाताप करना' }
      ],
      pb: [
        { word: 'ਅੰਧਿਆਰੀ ਲੋਇ', meaning: 'ਹਨੇਰੀ ਰਾਤ' },
        { word: 'ਮੁਸਿ ਗਏ', meaning: 'ਲੁੱਟੇ ਗਏ' }
      ],
      en: [
        { word: 'Andhiyaaree loy', meaning: 'A pitch-black night of delusion' },
        { word: 'Musi gaye', meaning: 'Robbed of spiritual awareness by internal bandits' },
        { word: 'Vastu ko roy', meaning: 'Weeping in remorse over the lost treasure of Truth' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया की अंधेरी रात में सोकर अपने ज्ञान और चेतना का अनमोल धन लुटवा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਅਗਿਆਨਤਾ ਦੀ ਨੀਂਦ ਵਿੱਚ ਆਪਣਾ ਰੂਹਾਨੀ ਧਨ ਲੁਟਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I sleeping through the dark night of Maya while internal thieves plunder my awareness?'
    },
    practicalApplication: {
      hi: 'अज्ञान की निद्रा से जागें; निरंतर नाम-स्मरण का दीपक जलाकर अपनी आत्मिक चेतना को सुरक्षित रखें।',
      pb: devanagariToGurmukhi('ਸੁਚੇਤ ਹੋ ਕੇ ਨਾਮ ਦਾ ਦੀਵਾ ਜਗਾਓ।'),
      en: 'Awaken from spiritual slumber; ignite the lamp of mindfulness to guard the inner treasure.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया की घोर अंधेरी रात में जगाकर अपने ज्ञान का अखंड प्रकाश प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਗਿਆਨਤਾ ਦੀ ਨੀਂਦ ਤੋਂ ਜਗਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Awaken my slumbering soul and illuminate my heart with the inextinguishable lamp of Truth.'
    },
    quiz: []
  },
  {
    id: 'maya-51',
    number: 1491,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'माया को अंग - ५१',
      pb: 'ਮਾਇਆ ਕੋ ਅੰਗ - ੫੧',
      en: 'Maya Ko Ang - 51',
    },
    text: {
      hi: 'कबीर माया रूखड़ी, दो फल की दातार।\nखावत खरचत मुक्ति भय, संचत नरक दुवार।।',
      pb: devanagariToGurmukhi('कबीर माया रूखड़ी, दो फल की दातार। खावत खरचत मुक्ति भय, संचत नरक दुवार।।'),
      en: 'Kabeer maayaa rookhadee, do phal kee daataar. Khaavat kharchat mukti bhay, sanchat narak duvaar..'
    },
    transliteration: 'Kabeer maya rookhadi, do phal ki daataar. Khaavat kharchat mukti bhay, sanchat narak duvaar.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि माया रूपी यह वृक्ष दो फलों (परम सुख और चरम दुःख) को देने वाला है, जो इसे संतोषपूर्वक खाते हैं तथा सेवा-दान, परोपकार आदि पुण्य कर्मों में खर्च भी करते हैं, उन्हें परम सुख मिलता है, लेकिन जो लोग लोभवश इसका संचय करते हैं, उन्हें चरम दुःख रूपी नरक के द्वार में गिरना पड़ता है।',
      pb: devanagariToGurmukhi('ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਰੂਪੀ ਰੁੱਖੜੀ ਦੋ ਤਰ੍ਹਾਂ ਦੇ ਫਲ ਦਿੰਦੀ ਹੈ: ਜੋ ਇਸਨੂੰ ਸੰਤੋਖ ਨਾਲ ਖਾਂਦੇ ਅਤੇ ਪਰਉਪਕਾਰ-ਸੇਵਾ ਵਿੱਚ ਖਰਚਦੇ ਹਨ ਉਹ ਮੁਕਤੀ ਪਾਉਂਦੇ ਹਨ, ਪਰ ਜੋ ਲੋਭ ਵਿੱਚ ਇਸਨੂੰ ਜੋੜਦੇ ਹਨ ਉਹ ਨਰਕਾਂ ਦੇ ਦੁਆਰ \'ਤੇ ਡਿੱਗਦੇ ਹਨ।'),
      en: 'Kabir reveals that the tree of Maya yields two distinct fruits: those who partake of it with contentment and generously spend it in righteous charity and selfless service attain spiritual liberation; but those who hoard it in insatiable greed march straight to the gates of hell.'
    },
    wordMeanings: {
      hi: [
        { word: 'रूखड़ी (Rookhadee)', meaning: 'छोटा वृक्ष / पौधा' },
        { word: 'दो फल की दातार (Do phal kee daataar)', meaning: 'दो विपरीत फल (मुक्ति अथवा नरक) देने वाली' },
        { word: 'खावत खरचत मुक्ति भय (Khaavat kharchat mukti bhay)', meaning: 'संतोष से उपभोग व परोपकार में खर्च करने से मोक्ष' },
        { word: 'संचत नरक दुवार (Sanchat narak duvaar)', meaning: 'लोभवश संग्रह करने से नरक की प्राप्ति' }
      ],
      pb: [
        { word: 'ਰੂਖੜੀ', meaning: 'ਰੁੱਖ / ਪੌਦਾ' },
        { word: 'ਸੰਚਤ', meaning: 'ਜੋੜਨਾ / ਇਕੱਠਾ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Rookhadee', meaning: 'A tree / plant' },
        { word: 'Do phal kee daataar', meaning: 'Giver of two distinct fruits (liberation or downfall)' },
        { word: 'Sanchat narak duvaar', meaning: 'Hoarding leads straight to the gates of hell' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं माया का सदुपयोग परोपकार और सेवा में करके मुक्ति की ओर बढ़ रहा हूँ, या संग्रह करके नरक की ओर?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਧਨ ਦੀ ਵਰਤੋਂ ਪਰਉਪਕਾਰ ਵਿੱਚ ਕਰਕੇ ਮੁਕਤੀ ਦਾ ਫਲ ਪਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I cultivating the fruit of liberation through selfless service, or harvesting hell through greedy hoarding?'
    },
    practicalApplication: {
      hi: 'संपत्ति का संचय करने के बजाय उसे दीन-दुखियों की सेवा और धर्म-प्रचार में उदारतापूर्वक लगाएं।',
      pb: devanagariToGurmukhi('ਨੇਕ ਕੰਮਾਂ ਵਿੱਚ ਖੁੱਲ੍ਹੇ ਦਿਲ ਨਾਲ ਖਰਚ ਕਰੋ।'),
      en: 'Freely circulate wealth in benevolent and spiritual works to reap the harvest of liberation.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे माया के लोभ-संचय से बचाकर सेवा और परोपकार द्वारा मुक्ति-फल प्राप्त करने की सद्बुद्धि दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੇਵਾ ਅਤੇ ਪਰਉਪਕਾਰ ਦਾ ਸੱਚਾ ਦਾਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the sin of hoarding and grant me the wisdom to consecrate all resources in selfless service.'
    },
    quiz: []
  }
];
