import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_SWAARATH_KO_ANG: Sakhi[] = [
  {
    id: 'swaarath-1',
    number: 1361,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'स्वारथ को अंग - १',
      pb: 'ਸਵਾਰਥ ਕੋ ਅੰਗ - ੧',
      en: 'Swaarath Ko Ang - 1',
    },
    text: {
      hi: 'स्वारथ का सबको सगा, सारा ही जग जान।\nबिन स्वारथ आदर करै, सो नर चतुर सुजान।।',
      pb: devanagariToGurmukhi('स्वारथ का सबको सगा, सारा ही जग जान। बिन स्वारथ आदर करै, सो नर चतुर सुजान।।'),
      en: 'Swaarath kaa sabko sagaa, saaraa hee jag jaan. Bin swaarath aadar karai, so nar chatur sujaan..'
    },
    transliteration: 'Swaarath kaa sabko sagaa, saaraa hee jag jaan. Bin swaarath aadar karai, so nar chatur sujaan.',
    bhavarth: {
      hi: 'इस संसार में स्वार्थ के ही सब मित्र-संबंधी हैं और इस संसार में सब जगह स्वार्थ ही फैला हुआ है, परंतु जो बिना किसी स्वार्थ के सबका यथोचित मान-सम्मान करता है, वह श्रेष्ठ-बुद्धिमान व सज्जन मनुष्य होता है।',
      pb: devanagariToGurmukhi('ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਸਭ ਸਵਾਰਥ ਦੇ ਹੀ ਸਾਕ-ਸੰਬੰਧੀ ਹਨ। ਪਰ ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਸਵਾਰਥ ਦੇ ਸਭ ਦਾ ਆਦਰ-ਮਾਣ ਕਰਦਾ ਹੈ, ਉਹੀ ਅਸਲ ਵਿੱਚ ਸਿਆਣਾ ਤੇ ਗੁਣੀ ਮਨੁੱਖ ਹੈ।'),
      en: 'In this worldly realm, everyone is bound only by self-interest and selfish ties. Yet whoever accords genuine honor and love without personal motive is truly the wisest and noblest soul.'
    },
    wordMeanings: {
      hi: [
        { word: 'स्वारथ का सगा (Swaarath ka saga)', meaning: 'स्वार्थ व निजी लाभ के कारण बना मित्र या संबंधी' },
        { word: 'बिन स्वारथ (Bin swaarath)', meaning: 'बिना किसी लालच या अपेक्षा के / निष्काम भाव से' },
        { word: 'चतुर सुजान (Chatur sujaan)', meaning: 'परम विवेकी, श्रेष्ठ बुद्धिमान व आत्मज्ञानी' }
      ],
      pb: [
        { word: 'ਸਵਾਰਥ ਦਾ ਸਾਕ (Swaarath da saak)', meaning: 'ਮਤਲਬੀ ਰਿਸ਼ਤੇਦਾਰ' },
        { word: 'ਬਿਨ ਸਵਾਰਥ (Bin swaarath)', meaning: 'ਬਿਨਾਂ ਲਾਲਚ ਦੇ / ਨਿਸ਼ਕਾਮ' },
        { word: 'ਚਤੁਰ ਸੁਜਾਨ (Chatur sujaan)', meaning: 'ਸਿਆਣਾ ਤੇ ਬਿਬੇਕੀ' }
      ],
      en: [
        { word: 'Swaarath ka saga', meaning: 'A kinsman or friend bound solely by self-interest' },
        { word: 'Bin swaarath', meaning: 'Without selfish motive / unconditioned selflessness' },
        { word: 'Chatur sujaan', meaning: 'The truly discerning, wise, and spiritually enlightened soul' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे व्यवहार और संबंधों में कोई स्वार्थ छिपा है, या मैं निष्काम प्रेम का आचरण कर रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਰਿਸ਼ਤੇ ਨਿਸ਼ਕਾਮ ਪਿਆਰ \'ਤੇ ਆਧਾਰਿਤ ਹਨ ਜਾਂ ਕਿਸੇ ਸਵਾਰਥ \'ਤੇ?'),
      en: 'Are my relationships grounded in pure selfless love, or subtended by hidden expectations?'
    },
    practicalApplication: {
      hi: 'संसार में किसी से स्वार्थवश संबंध न बनाएं; सभी के प्रति निस्वार्थ सेवा, विनम्रता और सम्मान का भाव रखें।',
      pb: devanagariToGurmukhi('ਬਿਨਾਂ ਕਿਸੇ ਮਤਲਬ ਦੇ ਸਭ ਦਾ ਆਦਰ ਕਰੋ ਅਤੇ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਕਮਾਓ।'),
      en: 'Practice unconditional respect and selfless service towards all beings without seeking return.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे हृदय से स्वार्थ की भावना को मिटाकर निष्काम प्रेम और सेवा का पावन गुण प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਵਿੱਚੋਂ ਸਵਾਰਥ ਕੱਢ ਕੇ ਨਿਰਸਵਾਰਥ ਪ੍ਰੇਮ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Purge all selfishness from my heart and bless me with the jewel of unconditioned love.'
    },
    quiz: []
  },
  {
    id: 'swaarath-2',
    number: 1362,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'स्वारथ को अंग - २',
      pb: 'ਸਵਾਰਥ ਕੋ ਅੰਗ - ੨',
      en: 'Swaarath Ko Ang - 2',
    },
    text: {
      hi: 'स्वारथ कूं  स्वारथ मिले, पड़ि पड़ि लूंबा बूंब।\nनिस्प्रेही निरधार को, कोय न राखे झूंब।।',
      pb: devanagariToGurmukhi('स्वारथ कूं  स्वारथ मिले, पड़ि पड़ि लूंबा बूंब। निस्प्रेही निरधार को, कोय न राखे झूंब।।'),
      en: 'Swaarath koon swaarath mile, padi padi loombaa boomb. Nisprehee nirdhaar ko, koy na raakhe jhoomb..'
    },
    transliteration: 'Swaarath koon swaarath mile, padi padi loomba boomb. Nisprehee nirdhaar ko, koy na raakhe jhoomb.',
    bhavarth: {
      hi: 'अपने स्वार्थ को लेकर जब स्वार्थी लोग एक-दूसरे से मिलते हैं, तो वे आवश्यकता से अधिक चापलूसी व प्रशंसा करते हैं। उनका मिलन खुशी और दिखावे से जमकर होता है, परंतु जो निष्कामी-आधारहीन सज्जन पुरुष हैं, उनका संसार के स्वार्थी लोग वचन से भी सम्मान नहीं करते।',
      pb: devanagariToGurmukhi('ਸਵਾਰਥੀ ਲੋਕ ਜਦੋਂ ਆਪਸ ਵਿੱਚ ਮਿਲਦੇ ਹਨ ਤਾਂ ਖ਼ੁਸ਼ਾਮਦ ਤੇ ਦਿਖਾਵੇ ਦੀਆਂ ਡੀਂਗਾਂ ਮਾਰਦੇ ਹਨ, ਪਰ ਜੋ ਨਿਰਲੋਭ ਤੇ ਸੱਚੇ ਸੰਤ ਹਨ, ਉਨ੍ਹਾਂ ਦੀ ਸੰਸਾਰੀ ਲੋਕ ਜ਼ਰਾ ਵੀ ਕਦਰ ਨਹੀਂ ਕਰਦੇ।'),
      en: 'When selfish people meet other selfish people, they lavish excessive flattery and showy praise upon one another. But for the desireless, unpretentious devotee anchored only in God, worldly people have not even a kind word of respect.'
    },
    wordMeanings: {
      hi: [
        { word: 'लूंबा बूंब (Loombaa boomb)', meaning: 'झूठी चापलूसी, दिखावटी शोरगुल व अत्यधिक प्रशंसा' },
        { word: 'निस्प्रेही (Nisprehee)', meaning: 'तृष्णा-रहित, निष्काम व विरक्त सज्जन' },
        { word: 'निरधार (Nirdhaar)', meaning: 'संसार के आश्रय से मुक्त, केवल परमात्मा के भरोसे रहने वाला' },
        { word: 'राखे झूंब (Raakhe jhoomb)', meaning: 'तनिक भी आदर-सत्कार या स्थान देना' }
      ],
      pb: [
        { word: 'ਲੂੰਬਾ ਬੂੰਬ (Loombaa boomb)', meaning: 'ਝੂਠੀ ਖ਼ੁਸ਼ਾਮਦ ਤੇ ਰੌਲਾ' },
        { word: 'ਨਿਸਪ੍ਰੇਹੀ (Nisprehee)', meaning: 'ਨਿਸ਼ਕਾਮੀ / ਬੇਗਰਜ਼' },
        { word: 'ਨਿਰਧਾਰ (Nirdhaar)', meaning: 'ਬਿਨਾਂ ਸੰਸਾਰੀ ਆਸਰੇ ਦੇ' },
        { word: 'ਰਾਖੇ ਝੂੰਬ (Raakhe jhoomb)', meaning: 'ਥੋੜ੍ਹਾ ਵੀ ਮਾਣ ਦੇਣਾ' }
      ],
      en: [
        { word: 'Loombaa boomb', meaning: 'Hollow flattery, noisy adulation, and ostentatious praise' },
        { word: 'Nisprehee', meaning: 'Free from craving, desireless devotee' },
        { word: 'Nirdhaar', meaning: 'De-anchored from earthly dependencies, relying solely on the Divine' },
        { word: 'Raakhe jhoomb', meaning: 'Offer a particle of respect or shelter' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक चापलूसी और दिखावटी आवभगत की चाह रखता हूं, या निष्कामता में संतुष्ट हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੁਨਿਆਵੀ ਵਡਿਆਈਆਂ ਪਿੱਛੇ ਭੱਜਦਾ ਹਾਂ ਜਾਂ ਨਿਸ਼ਕਾਮਤਾ ਵਿੱਚ ਟਿਕਿਆ ਹਾਂ?'),
      en: 'Do I chase after the empty flattery of worldly circles, or rest content in desireless purity?'
    },
    practicalApplication: {
      hi: 'संसार की झूठी प्रशंसा और चापलूसी से दूर रहें; केवल सत्य और निष्कामता के मार्ग पर दृढ़ रहें।',
      pb: devanagariToGurmukhi('ਝੂਠੀ ਖ਼ੁਸ਼ਾਮਦ ਤੋਂ ਬਚੋ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਗਿਆਨ ਵਿੱਚ ਦ੍ਰਿੜ੍ਹ ਰਹੋ।'),
      en: 'Shun artificial social flattery; remain unperturbed and steadfast in divine truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! संसार के दिखावटी मान-अपमान से परे मुझे अपनी निष्काम भक्ति का वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਲੋਕ-ਦਿਖਾਵੇ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੀ ਸੱਚੀ ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the snare of worldly applause and establish me in pure devotion.'
    },
    quiz: []
  },
  {
    id: 'swaarath-3',
    number: 1363,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'स्वारथ को अंग - ३',
      pb: 'ਸਵਾਰਥ ਕੋ ਅੰਗ - ੩',
      en: 'Swaarath Ko Ang - 3',
    },
    text: {
      hi: 'माया कू माया मिले, कर कर लम्बे हाथ।\nनिस्प्रेही निरधार को, गाहक दीनानाथ।।',
      pb: devanagariToGurmukhi('माया कू माया मिले, कर कर लम्बे हाथ। निस्प्रेही निरधार को, गाहक दीनानाथ।।'),
      en: 'Maayaa koo maayaa mile, kar kar lambe haath. Nisprehee nirdhaar ko, gaahak deenaanaath..'
    },
    transliteration: 'Maayaa koo maayaa mile, kar kar lambe haath. Nisprehee nirdhaar ko, gaahak deenaanaath.',
    bhavarth: {
      hi: 'मायापति-से-मायापति अर्थात स्वार्थी-से-स्वार्थी, हाथ लंबे कर-करके आपस में मिलते हैं और दिखावटी प्रेम करते हैं, परंतु जो निष्कामी तथा परमार्थी आधारहीन पुरुष हैं, उन्हें चाहने वाला और अपनाने वाला दीन व विनम्र जनों का सतगुरु-स्वामी (परमात्मा) ही है।',
      pb: devanagariToGurmukhi('ਮਾਇਆਧਾਰੀ ਮਾਇਆਧਾਰੀ ਨੂੰ ਲੰਮੀਆਂ ਬਾਹਵਾਂ ਕਰਕੇ ਜੱਫੀਆਂ ਪਾ ਕੇ ਮਿਲਦੇ ਹਨ, ਪਰ ਜਿਸਦਾ ਕੋਈ ਦੁਨਿਆਵੀ ਆਸਰਾ ਨਹੀਂ ਅਤੇ ਜੋ ਨਿਸ਼ਕਾਮ ਹੈ, ਉਸਦਾ ਸੱਚਾ ਰਾਖਾ ਤੇ ਕਦਰਦਾਨ ਪ੍ਰਭੂ ਦੀਨਾਨਾਥ ਆਪ ਹੈ।'),
      en: 'Worldly wealth-chasers greet other wealthy opportunists with outstretched arms and showy embrace. But for the selfless, unattached seeker who has no earthly prop, the Supreme Lord of the Humble (Deenanath) is Himself the eternal patron.'
    },
    wordMeanings: {
      hi: [
        { word: 'माया कू माया मिले (Maayaa koo maayaa)', meaning: 'धनवान और स्वार्थी लोगों का परस्पर मिलना' },
        { word: 'लम्बे हाथ (Lambe haath)', meaning: 'दिखावटी आलिंगन व आवभगत' },
        { word: 'गाहक दीनानाथ (Gaahak deenaanaath)', meaning: 'दीनों के नाथ परमात्मा ही निष्काम जन के सच्चे कद्रदान व रक्षक हैं' }
      ],
      pb: [
        { word: 'ਮਾਇਆ ਕੂ ਮਾਇਆ (Maaya koo maaya)', meaning: 'ਧਨਾਢ ਆਪਸ ਵਿੱਚ ਮਿਲਦੇ ਹਨ' },
        { word: 'ਗਾਹਕ ਦੀਨਾਨਾਥ (Gaahak deenaanaath)', meaning: 'ਪ੍ਰਭੂ ਹੀ ਨਿਮਾਣਿਆਂ ਦਾ ਮਾਣ ਹੈ' }
      ],
      en: [
        { word: 'Maayaa koo maayaa mile', meaning: 'The worldly rich associate with fellow opportunists' },
        { word: 'Lambe haath', meaning: 'Outstretched arms of outward affection' },
        { word: 'Gaahak deenaanaath', meaning: 'The Lord of the Meek alone is the true purchaser and cherisher of the selfless' }
      ]
    },
    contemplation: {
      hi: 'जब स्वयं परमात्मा निष्कामी और निराधार भक्त के रक्षक हैं, तो क्या मुझे सांसारिक धनवानों के आश्रय की आवश्यकता है?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਪ੍ਰਭੂ ਆਪ ਨਿਸ਼ਕਾਮ ਜਨ ਦਾ ਰਾਖਾ ਹੈ, ਤਾਂ ਸੰਸਾਰੀ ਆਸਰਿਆਂ ਦੀ ਕੀ ਲੋੜ?'),
      en: 'When the Almighty Himself is the patron of the unpretentious, why look to worldly elites for validation?'
    },
    practicalApplication: {
      hi: 'संसार के अमीरों और प्रभावशाली लोगों के आगे हाथ फैलाने की बजाय केवल दीनानाथ परमात्मा पर विश्वास रखें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰੀ ਸਹਾਰਿਆਂ \'ਤੇ ਨਿਰਭਰ ਨਾ ਹੋਵੋ, ਕੇਵਲ ਪ੍ਰਭੂ \'ਤੇ ਭਰੋਸਾ ਰੱਖੋ।'),
      en: 'Do not seek patronage from worldly powers; place total reliance in the Divine Protector.'
    },
    samarpanPrayer: {
      hi: 'हे दीनानाथ सतगुरु! मेरा इस संसार में आपके सिवा कोई दूसरा आधार नहीं है, मुझे अपने चरणों में संभाले रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਦੀਨਾਨਾਥ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਤੁਹਾਡੇ ਬਿਨਾਂ ਕੋਈ ਆਸਰਾ ਨਹੀਂ, ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਵਿੱਚ ਥਾਂ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru, Protector of the Meek! You alone are my sole refuge; keep me anchored at Your feet.'
    },
    quiz: []
  },
  {
    id: 'swaarath-4',
    number: 1364,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'स्वारथ को अंग - ४',
      pb: 'ਸਵਾਰਥ ਕੋ ਅੰਗ - ੪',
      en: 'Swaarath Ko Ang - 4',
    },
    text: {
      hi: 'संसारी से प्रीतड़ी, सरै न एकौ काम।\nदुविधा से दोनों गये, माया मिली न राम।।',
      pb: devanagariToGurmukhi('संसारी से प्रीतड़ी, सरै न एकौ काम। दुविधा से दोनों गये, माया मिली न राम।।'),
      en: 'Sansaaree se preetadee, sarai na ekau kaam. Duvidhaa se donon gaye, maayaa milee na raam..'
    },
    transliteration: 'Sansaaree se preetadee, sarai na ekau kaam. Duvidhaa se donon gaye, maayaa milee na raam.',
    bhavarth: {
      hi: 'सांसारिकता और स्वार्थी मनुष्यों से प्रेम-संबंध रखने से, एक भी आत्म-कल्याण का शुभ कार्य सिद्ध नहीं होता। इससे तो संशय और दुविधा में पड़कर दोनों ओर से हाथ धोना पड़ता है—न तो भौतिक तृप्ति मिलती है और न ही परम पद (राम) की प्राप्ति होती है।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰੀ ਮੋਹ-ਮਮਤਾ ਨਾਲ ਕੋਈ ਵੀ ਆਤਮਿਕ ਕਾਰਜ ਰਾਸ ਨਹੀਂ ਆਉਂਦਾ। ਦੁਬਿਧਾ ਵਿੱਚ ਫਸਣ ਕਾਰਨ ਦੋਵੇਂ ਹੱਥੋਂ ਨਿਕਲ ਜਾਂਦੇ ਹਨ—ਨਾ ਮਾਇਆ ਦਾ ਸੱਚਾ ਸੁਖ ਮਿਲਦਾ ਹੈ ਤੇ ਨਾ ਹੀ ਰਾਮ (ਪ੍ਰਭੂ) ਮਿਲਦਾ ਹੈ।'),
      en: 'Clinging to worldly attachments and fickle mortals fulfills not a single noble spiritual purpose. Entangled in hesitation and double-mindedness, both are lost: neither does one find enduring worldly satisfaction nor the realization of God (Ram).'
    },
    wordMeanings: {
      hi: [
        { word: 'संसारी से प्रीतड़ी (Sansaaree se preetadee)', meaning: 'स्वार्थी व नाशवान सांसारिक जनों से मोह' },
        { word: 'सरै न एकौ काम (Sarai na ekau kaam)', meaning: 'एक भी आत्मिक व वास्तविक कार्य सिद्ध नहीं होता' },
        { word: 'दुविधा से दोनों गये (Duvidhaa se donon gaye)', meaning: 'संशय व असमंजस के कारण दोनों ओर से खाली हाथ रह जाना' }
      ],
      pb: [
        { word: 'ਸੰਸਾਰੀ ਪ੍ਰੀਤ (Sansaari preet)', meaning: 'ਦੁਨਿਆਵੀ ਮੋਹ' },
        { word: 'ਸਰੈ ਨ ਏਕੌ ਕਾਮ (Sarai na ekau kaam)', meaning: 'ਕੋਈ ਕਾਰਜ ਸਿੱਧ ਨਹੀਂ ਹੁੰਦਾ' },
        { word: 'ਦੁਬਿਧਾ (Duvidha)', meaning: 'ਭਰਮ / ਦੁਚਿੱਤੀ' }
      ],
      en: [
        { word: 'Sansaaree se preetadee', meaning: 'Attachment to the transient worldly sphere' },
        { word: 'Sarai na ekau kaam', meaning: 'Not a single vital purpose is accomplished' },
        { word: 'Duvidhaa se donon gaye', meaning: 'Caught in double-mindedness, both worlds slip away' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक मोह और आध्यात्मिक साधना के बीच दुविधा में फंसा हुआ हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੁਚਿੱਤੀ ਵਿੱਚ ਫਸ ਕੇ ਆਪਣਾ ਸਮਾਂ ਬਰਬਾਦ ਕਰ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I trapped in indecision between worldly desires and spiritual discipline, risking both?'
    },
    practicalApplication: {
      hi: 'असमंजस और दुविधा को त्यागें; एकनिष्ठ होकर परमात्मा और सतगुरु के मार्ग पर अग्रसर हों।',
      pb: devanagariToGurmukhi('ਦੁਬਿਧਾ ਛੱਡ ਕੇ ਇੱਕ ਪ੍ਰਭੂ ਦੇ ਰੰਗ ਵਿੱਚ ਰੰਗੇ ਜਾਓ।'),
      en: 'Shed hesitation and divided loyalty; commit wholly to the path of unalloyed spiritual truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे मन की समस्त दुविधाओं को मिटाकर मुझे अपनी एकनिष्ठ भक्ति और प्रेम प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਦੁਚਿੱਤੀ ਮਿਟਾ ਕੇ ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਵਿੱਚ ਲੀਨ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dissolve all duality and hesitation in my mind, and bestow undivided devotion.'
    },
    quiz: []
  },
  {
    id: 'swaarath-5',
    number: 1365,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'स्वारथ को अंग - ५',
      pb: 'ਸਵਾਰਥ ਕੋ ਅੰਗ - ੫',
      en: 'Swaarath Ko Ang - 5',
    },
    text: {
      hi: 'निज स्वारथ के कारनै, सेव करै संसार।\nबिन स्वारथ भक्ति करै, सो भावै करतार।।',
      pb: devanagariToGurmukhi('निज स्वारथ के कारनै, सेव करै संसार। बिन स्वारथ भक्ति करै, सो भावै करतार।।'),
      en: 'Nij swaarath ke kaarnai, sev karai sansaar. Bin swaarath bhakti karai, so bhaavai kartaar..'
    },
    transliteration: 'Nij swaarath ke kaarnai, sev karai sansaar. Bin swaarath bhakti karai, so bhaavai kartaar.',
    bhavarth: {
      hi: 'इस संसार में लोग अपने व्यक्तिगत स्वार्थ की सिद्धि के लिए ही एक-दूसरे की सेवा व चापलूसी करते हैं, परंतु जो बिना किसी फल की कामना या स्वार्थ के निष्काम भाव से सतगुरु परमात्मा की भक्ति करता है, वही परमात्मा को सच्चा प्रिय लगता है।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਲੋਕ ਆਪਣੇ ਨਿੱਜੀ ਸਵਾਰਥ ਲਈ ਸੇਵਾ ਕਰਦੇ ਹਨ, ਪਰ ਜੋ ਬਿਨਾਂ ਸਵਾਰਥ ਦੇ ਨਿਸ਼ਕਾਮ ਭਗਤੀ ਕਰਦਾ ਹੈ, ਉਹੀ ਪ੍ਰਭੂ ਕਰਤਾਰ ਨੂੰ ਭਾਉਂਦਾ (ਚੰਗਾ ਲੱਗਦਾ) ਹੈ।'),
      en: 'People serve and flatter in this world only to fulfill their own selfish aims. But one who engages in pure devotional practice without a trace of personal ambition or bargaining is dearly beloved to the Creator.'
    },
    wordMeanings: {
      hi: [
        { word: 'निज स्वारथ (Nij swaarath)', meaning: 'अपना व्यक्तिगत लाभ या स्वार्थ' },
        { word: 'सेव करै संसार (Sev karai sansaar)', meaning: 'संसार में की जाने वाली मतलबपरस्त सेवा' },
        { word: 'बिन स्वारथ भक्ति (Bin swaarath bhakti)', meaning: 'निष्काम, निष्कपट व अहैतुकी भक्ति' },
        { word: 'भावै करतार (Bhaavai kartaar)', meaning: 'परमेश्वर को अत्यंत प्रिय लगती है' }
      ],
      pb: [
        { word: 'ਨਿੱਜ ਸਵਾਰਥ (Nijj swaarath)', meaning: 'ਆਪਣਾ ਮਤਲਬ' },
        { word: 'ਬਿਨ ਸਵਾਰਥ ਭਗਤੀ (Bin swaarath bhakti)', meaning: 'ਨਿਸ਼ਕਾਮ ਬੰਦਗੀ' },
        { word: 'ਭਾਵੈ ਕਰਤਾਰ (Bhaavai kartaar)', meaning: 'ਪ੍ਰਭੂ ਨੂੰ ਪਸੰਦ ਆਉਂਦੀ ਹੈ' }
      ],
      en: [
        { word: 'Nij swaarath', meaning: 'One\'s personal gain or hidden motive' },
        { word: 'Sev karai sansaar', meaning: 'Service rendered in the world for opportunistic return' },
        { word: 'Bin swaarath bhakti', meaning: 'Selfless, unconditional, unbargaining devotion' },
        { word: 'Bhaavai kartaar', meaning: 'Pleasing and beloved to the Supreme Creator' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी पूजा-भक्ति किसी सांसारिक फल की मांग के लिए है, या वह शुद्ध निष्काम प्रेम है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਭਗਤੀ ਕਿਸੇ ਲਾਲਚ ਵਿੱਚ ਹੈ ਜਾਂ ਪ੍ਰਭੂ ਦੇ ਸੱਚੇ ਪਿਆਰ ਲਈ?'),
      en: 'Is my spiritual devotion transactional for earthly desires, or unconditional out of pure love?'
    },
    practicalApplication: {
      hi: 'भक्ति और सेवा में सौदेबाजी न करें; निष्काम भाव से सतगुरु की आज्ञा में चलें।',
      pb: devanagariToGurmukhi('ਭਗਤੀ ਵਿੱਚ ਸੌਦੇਬਾਜ਼ੀ ਨਾ ਕਰੋ, ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਕਰੋ।'),
      en: 'Transcend transactional devotion; offer selfless adoration free from bargaining.'
    },
    samarpanPrayer: {
      hi: 'हे करतार सतगुरु! मुझे निष्काम भक्ति का वरदान दीजिए ताकि मेरी कोई कामना न रहे, केवल आपकी प्रसन्नता ही मेरा लक्ष्य हो। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਕਰਤਾਰ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਸ਼ਕਾਮ ਭਗਤੀ ਬਖਸ਼ੋ ਤਾਂ ਜੋ ਮੈਂ ਸਦਾ ਤੁਹਾਡੀ ਰਜ਼ਾ ਵਿੱਚ ਰਹਾਂ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Creator Satguru! Grant me the boon of desireless devotion, so Your divine joy is my only purpose.'
    },
    quiz: []
  }
];
