import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_PARMAARTH_KO_ANG: Sakhi[] = [
  {
    id: 'parmaarth-1',
    number: 1371,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - १',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੧',
      en: 'Parmaarth Ko Ang - 1',
    },
    text: {
      hi: 'आप स्वारथी मेदिनी, भक्ति स्वारथी दास।\nकबीर जन परमार्थी, डारी तन की आस ।।',
      pb: devanagariToGurmukhi('आप स्वारथी मेदिनी, भक्ति स्वारथी दास। कबीर जन परमार्थी, डारी तन की आस ।।'),
      en: 'Aap swaarathi medinee, bhakti swaarathi daas. Kabeer jan parmaarthee, daaree tan kee aas..'
    },
    transliteration: 'Aap swaarathi medini, bhakti swaarathi daas. Kabeer jan parmaarthi, daari tan kee aas.',
    bhavarth: {
      hi: 'जिस प्रकार पृथ्वी स्वार्थवश स्वतः सबको अपनी ओर आकर्षित कर खींच लेती है, उसी प्रकार भक्ति के वेश में दास-भक्त सबको अपनी ओर झुकाने का प्रयास करते हैं। कबीरजी कहते हैं कि परमार्थी पुरुष अपने तन की भी आशा, दूसरों का कल्याण करने के कारण त्याग देते हैं।',
      pb: devanagariToGurmukhi('ਜਿਵੇਂ ਧਰਤੀ ਸਭ ਨੂੰ ਆਪਣੇ ਵੱਲ ਖਿੱਚਦੀ ਹੈ, ਤਿਵੇਂ ਹੀ ਭਗਤੀ ਦੇ ਭੇਖ ਵਿੱਚ ਵੀ ਕਈ ਸਵਾਰਥ ਸਾਧਦੇ ਹਨ। ਪਰ ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸੱਚਾ ਪਰਮਾਰਥੀ ਜਨ ਦੂਜਿਆਂ ਦੇ ਕਲਿਆਣ ਲਈ ਆਪਣੀ ਦੇਹ ਦੀ ਆਸ ਵੀ ਤਿਆਗ ਦਿੰਦਾ ਹੈ।'),
      en: 'Just as the earth naturally pulls everything toward itself, many seekers pursue devotion with hidden self-interest. Kabir proclaims that the genuine altruistic sage renounces even attachment to their own physical body for the spiritual liberation of others.'
    },
    wordMeanings: {
      hi: [
        { word: 'मेदिनी (Medinee)', meaning: 'पृथ्वी / धरती' },
        { word: 'भक्ति स्वारथी (Bhakti swaarathi)', meaning: 'भक्ति में भी अपना निजी स्वार्थ ढूंढने वाले' },
        { word: 'परमार्थी (Parmaarthee)', meaning: 'दूसरों के सच्चे कल्याण व आत्मोद्धार में रत संत' },
        { word: 'डारी तन की आस (Daaree tan kee aas)', meaning: 'शरीर के सुख और मोह का पूर्ण त्याग कर देना' }
      ],
      pb: [
        { word: 'ਮੇਦਿਨੀ (Medini)', meaning: 'ਧਰਤੀ' },
        { word: 'ਭਗਤੀ ਸਵਾਰਥੀ (Bhakti swaarathi)', meaning: 'ਮਤਲਬੀ ਭਗਤ' },
        { word: 'ਪਰਮਾਰਥੀ (Parmaarthi)', meaning: 'ਨਿਸ਼ਕਾਮ ਪਰਉਪਕਾਰੀ' },
        { word: 'ਡਾਰੀ ਤਨ ਕੀ ਆਸ (Daari tan ki aas)', meaning: 'ਸਰੀਰ ਦਾ ਮੋਹ ਤਿਆਗ ਦਿੱਤਾ' }
      ],
      en: [
        { word: 'Medinee', meaning: 'The earth / terrestrial gravity' },
        { word: 'Bhakti swaarathi', meaning: 'Those seeking devotional returns for selfish gain' },
        { word: 'Parmaarthee', meaning: 'The truly benevolent and altruistic servant of humanity' },
        { word: 'Daaree tan kee aas', meaning: 'Surrendered all bodily identification and self-preservation' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा जीवन केवल अपने देह-सुख तक सीमित है, या मैं दूसरों के कल्याण के लिए निस्वार्थ समर्पित हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਜੀਵਨ ਸਿਰਫ਼ ਆਪਣੇ ਸਰੀਰਕ ਸੁਖਾਂ ਲਈ ਹੈ ਜਾਂ ਦੂਜਿਆਂ ਦੇ ਭਲੇ ਲਈ?'),
      en: 'Is my life confined to personal bodily comfort, or dedicated to the higher welfare of all beings?'
    },
    practicalApplication: {
      hi: 'स्वार्थ-केन्द्रित संकीर्णता से ऊपर उठें; तन, मन और वाणी से जरूरतमंदों व जीवों की निःस्वार्थ सेवा करें।',
      pb: devanagariToGurmukhi('ਸਵਾਰਥ ਛੱਡ ਕੇ ਪਰਉਪਕਾਰ ਦੇ ਕਾਰਜਾਂ ਵਿੱਚ ਲੱਗੋ।'),
      en: 'Transcend self-centered concerns; engage in unconditioned service for universal welfare.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे परमार्थ का पावन हृदय प्रदान कीजिए ताकि मैं अपने देह-अहंकार को भूलकर परोपकार में लग सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੇ ਪਰਉਪਕਾਰ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me a heart of pure altruism that rejoices in selfless service without bodily attachment.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-2',
    number: 1372,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - २',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੨',
      en: 'Parmaarth Ko Ang - 2',
    },
    text: {
      hi: 'प्रीत रीत सब अर्थ की, परमारथ की नाहिं।\nकहैं कबीर परमारथी, बिरला कोई कलि माहिं।।',
      pb: devanagariToGurmukhi('प्रीत रीत सब अर्थ की, परमारथ की नाहिं। कहैं कबीर परमारथी, बिरला कोई कलि माहिं।।'),
      en: 'Preet reet sab arth kee, parmaarath kee naahin. Kahain kabeer parmaarthee, birlaa koee kali maahin..'
    },
    transliteration: 'Preet reet sab arth kee, parmaarath kee naahin. Kahain kabeer parmaarthee, birla koyi kali maahin.',
    bhavarth: {
      hi: 'इस जगत में जितनी भी प्रीत की रीत हैं, सब धन से, स्वार्थ से जुड़ी हुई हैं। परमार्थ से उनका कोई संबंध नहीं है। कबीरजी कहते हैं कि आज के इस कलि-काल (भौतिक युग) में विरला ही कोई परमार्थी पुरुष होगा, जो स्वार्थ और माया-मोह के बंधन में न फंसा हुआ हो।',
      pb: devanagariToGurmukhi('ਜਗਤ ਵਿੱਚ ਸਾਰਾ ਪਿਆਰ-ਪ੍ਰੇਮ ਧਨ ਅਤੇ ਮਤਲਬ ਦਾ ਹੈ, ਪਰਮਾਰਥ ਦਾ ਨਹੀਂ। ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਸ ਕਲਜੁਗ ਵਿੱਚ ਕੋਈ ਵਿਰਲਾ ਹੀ ਨਿਰਸਵਾਰਥ ਪਰਉਪਕਾਰੀ ਮਨੁੱਖ ਹੈ।'),
      en: 'All worldly conventions of love and friendship are anchored in material gain (arth) and selfishness, not in selfless truth. Kabir observes that in this iron age (Kali Yuga), exceedingly rare is the truly altruistic soul who remains untainted by worldly self-interest.'
    },
    wordMeanings: {
      hi: [
        { word: 'प्रीत रीत (Preet reet)', meaning: 'संसार में प्रेम का दिखावटी व्यवहार या नियम' },
        { word: 'अर्थ की (Arth kee)', meaning: 'धन, संपत्ति व निजी स्वार्थ से प्रेरित' },
        { word: 'कलि माहिं (Kali maahin)', meaning: 'कलिकाल में / वर्तमान भौतिक युग में' },
        { word: 'बिरला (Birlaa)', meaning: 'करोड़ों में कोई एक दुर्लभ साधक' }
      ],
      pb: [
        { word: 'ਪ੍ਰੀਤ ਰੀਤ (Preet reet)', meaning: 'ਪਿਆਰ ਦਾ ਦਿਖਾਵਾ' },
        { word: 'ਅਰਥ ਕੀ (Arth ki)', meaning: 'ਮਾਇਆ ਤੇ ਮਤਲਬ ਦੀ' },
        { word: 'ਕਲਿ ਮਾਹਿਂ (Kali maahin)', meaning: 'ਕਲਜੁਗ ਵਿੱਚ' },
        { word: 'ਬਿਰਲਾ (Birla)', meaning: 'ਕੋਈ ਦੁਰਲੱਭ' }
      ],
      en: [
        { word: 'Preet reet', meaning: 'Worldly conventions of affection and association' },
        { word: 'Arth kee', meaning: 'Driven by wealth, utility, and self-advantage' },
        { word: 'Kali maahin', meaning: 'In this materialistic age' },
        { word: 'Birlaa', meaning: 'Exceedingly rare, one in millions' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा प्रेम किसी लाभ पर निर्भर है, या मैं कलिकाल के इस प्रवाह से अलग होकर सच्चा परमार्थी बन पा रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਪ੍ਰੀਤ ਬਿਨਾਂ ਕਿਸੇ ਮਤਲਬ ਦੇ ਨਿਰਮਲ ਹੈ?'),
      en: 'Is my love conditional on material return, or can I embody the rare purity of true altruism?'
    },
    practicalApplication: {
      hi: 'भौतिक लेन-देन के आधार पर संबंध न बनाएं; सतगुरु के प्रेम को आदर्श मानकर निष्कपट जीवन जीएं।',
      pb: devanagariToGurmukhi('ਮਤਲਬੀ ਸੰਬੰਧਾਂ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਨਿਰਸਵਾਰਥ ਸਨੇਹ ਰੱਖੋ।'),
      en: 'Elevate your interactions above transactional benefit; express genuine, unseeking goodwill.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! कलिकाल के इस स्वार्थ-प्रवाह से मुझे बचाकर अपने निस्वार्थ प्रेम में रंग दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਲਜੁਗੀ ਸਵਾਰਥ ਤੋਂ ਬਚਾ ਕੇ ਸੱਚਾ ਪਰਮਾਰਥ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Shield me from the selfish tide of this age and imbue my soul with unconditional grace.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-3',
    number: 1373,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ३',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੩',
      en: 'Parmaarth Ko Ang - 3',
    },
    text: {
      hi: 'परमारथ पाको रतन, कबहुं न दीजै पीठ।\nस्वारथ सेमन फूल है, कली अपूठी पीठ।।',
      pb: devanagariToGurmukhi('परमारथ पाको रतन, कबहुं न दीजै पीठ। स्वारथ सेमन फूल है, कली अपूठी पीठ।।'),
      en: 'Parmaarath paako ratan, kabahun na deejai peeth. Swaarath seman phool hai, kalee apoothee peeth..'
    },
    transliteration: 'Parmaarath paako ratan, kabahun na deejai peeth. Swaarath seman phool hai, kali apoothi peeth.',
    bhavarth: {
      hi: 'जिससे सबको सुख प्राप्त हो, ऐसे परमार्थ को पक्का रत्न समझो। यह अनमोल है और इससे कभी भी पीठ न फेरो। स्वार्थ तो सेमल के फूल के समान सुंदर होता है, परंतु उसमें सुगंध नहीं होती और उसकी कली भी उल्टी ओर खिलती है (असार सिद्ध होती है)।',
      pb: devanagariToGurmukhi('ਪਰਮਾਰਥ ਅਸਲ ਹੀਰਾ-ਰਤਨ ਹੈ, ਇਸ ਤੋਂ ਕਦੇ ਮੂੰਹ ਨਾ ਮੋੜੋ। ਸਵਾਰਥ ਸੇਂਬਲ ਦੇ ਫੁੱਲ ਵਰਗਾ ਹੈ, ਜੋ ਵੇਖਣ ਨੂੰ ਸੋਹਣਾ ਪਰ ਅੰਦਰੋਂ ਬੇ-ਸੁਗੰਧ ਅਤੇ ਉਲਟਾ (ਨਿਸਫਲ) ਹੁੰਦਾ ਹੈ।'),
      en: 'Regard altruistic righteousness (Parmaarth) as a genuine, infallible diamond—never turn your back upon it. Selfishness is like the flashy flower of the Semal tree: attractive to the eye, yet scentless and hollow, opening in reverse to yield only disappointment.'
    },
    wordMeanings: {
      hi: [
        { word: 'पाको रतन (Paako ratan)', meaning: 'सच्चा व मूल्यवान रत्न / अविनाशी कल्याण' },
        { word: 'दीजै पीठ (Deejai peeth)', meaning: 'विमुख होना या मुंह मोड़ना' },
        { word: 'सेमन फूल (Seman phool)', meaning: 'सेमल का आकर्षक लेकिन गंधहीन व फल-रहित फूल' },
        { word: 'अपूठी पीठ (Apoothee peeth)', meaning: 'उल्टी दिशा में विकसित होना / धोखा देना' }
      ],
      pb: [
        { word: 'ਪਾਕੋ ਰਤਨ (Paako ratan)', meaning: 'ਅਸਲੀ ਹੀਰਾ' },
        { word: 'ਦੀਜੈ ਪੀਠ (Deejai peeth)', meaning: 'ਮੂੰਹ ਮੋੜਨਾ' },
        { word: 'ਸੇਮਨ ਫੂਲ (Seman phool)', meaning: 'ਸੇਂਬਲ ਦਾ ਫੁੱਲ' },
        { word: 'ਅਪੂਠੀ (Apoothi)', meaning: 'ਉਲਟੀ' }
      ],
      en: [
        { word: 'Paako ratan', meaning: 'A pure, authentic, unblemished jewel' },
        { word: 'Deejai peeth', meaning: 'Turn one’s back upon / abandon' },
        { word: 'Seman phool', meaning: 'The silk-cotton tree flower (alluring yet devoid of fragrance or edible fruit)' },
        { word: 'Apoothee peeth', meaning: 'Blossoming inversely, ending in disillusionment' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं स्वार्थ रूपी सेमल के खोखले फूलों के आकर्षण में फंसकर परमार्थ रूपी पक्के रत्न को भूल रहा हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸਵਾਰਥ ਦੇ ਝੂਠੇ ਰੰਗਾਂ ਵਿੱਚ ਫਸ ਕੇ ਪਰਮਾਰਥ ਦੇ ਸੱਚੇ ਰਤਨ ਨੂੰ ਛੱਡ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I seduced by the deceptive blossoms of selfishness while neglecting the infallible jewel of altruism?'
    },
    practicalApplication: {
      hi: 'दिखावटी और क्षणिक लाभों के पीछे न भागें; परोपकार और सत्य-साधना के अनमोल रत्न को अपने जीवन में धारण करें।',
      pb: devanagariToGurmukhi('ਦਿਖਾਵੇ ਦੇ ਲਾਭਾਂ ਨੂੰ ਛੱਡ ਕੇ ਸੱਚੇ ਪਰਉਪਕਾਰ ਨੂੰ ਧਾਰਨ ਕਰੋ।'),
      en: 'Do not pursue superficial ephemeral advantages; anchor your life in the enduring diamond of goodness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे परमार्थ रूपी पक्के रत्न की परख दीजिए ताकि मैं सेमल रूपी स्वार्थ के धोखे से बच सकूं। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੇ ਰਤਨ ਦੀ ਪਛਾਣ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me spiritual discernment so I cling to the diamond of Parmaarth and bypass worldly illusions.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-4',
    number: 1374,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ४',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੪',
      en: 'Parmaarth Ko Ang - 4',
    },
    text: {
      hi: 'सुख के संगी स्वारथी, दुख में रहते दूर।\nकहैं कबीर परमारथी, दुख सुख सदा हजूर ।।',
      pb: devanagariToGurmukhi('सुख के संगी स्वारथी, दुख में रहते दूर। कहैं कबीर परमारथी, दुख सुख सदा हजूर ।।'),
      en: 'Sukh ke sangee swaarathi, dukh mein rahte door. Kahain kabeer parmaarthee, dukh sukh sadaa hazoor..'
    },
    transliteration: 'Sukh ke sangee swaarathi, dukh mein rahte door. Kahain kabeer parmaarthee, dukh sukh sada hazoor.',
    bhavarth: {
      hi: 'संसार के सभी स्वार्थी लोग केवल सुख में ही साथ रहते हैं और दुःख के समय साथ छोड़ जाते हैं। कबीरजी कहते हैं कि परमार्थी पुरुष ही केवल सच्चे सहयोगी तथा सद्भाव वाले हैं, जो सुख-दुःख दोनों में सदैव साथ रहते हैं।',
      pb: devanagariToGurmukhi('ਸਵਾਰਥੀ ਲੋਕ ਸਿਰਫ਼ ਸੁੱਖ ਵੇਲੇ ਸਾਥੀ ਬਣਦੇ ਹਨ ਅਤੇ ਦੁੱਖ ਵੇਲੇ ਦੂਰ ਨੱਠ ਜਾਂਦੇ ਹਨ। ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸੱਚੇ ਪਰਉਪਕਾਰੀ ਸੰਤ ਸੁੱਖ ਅਤੇ ਦੁੱਖ ਦੋਵਾਂ ਵਿੱਚ ਸਦਾ ਨਾਲ ਖਲੋਂਦੇ ਹਨ।'),
      en: 'Opportunistic people stand by you only during sunny days of pleasure and prosperity, fleeing when hardship arrives. Kabir reveals that the altruistic saints alone are true companions, remaining present and supportive through both joy and sorrow alike.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुख के संगी (Sukh ke sangee)', meaning: 'केवल सुख-समृद्धि के समय साथ देने वाले मतलबी लोग' },
        { word: 'सदा हजूर (Sadaa hazoor)', meaning: 'प्रत्येक परिस्थिति में साक्षात उपस्थित व सहायक' }
      ],
      pb: [
        { word: 'ਸੁੱਖ ਕੇ ਸੰਗੀ (Sukh ke sangee)', meaning: 'ਸਿਰਫ਼ ਸੁੱਖ ਦੇ ਸਾਥੀ' },
        { word: 'ਸਦਾ ਹਜ਼ੂਰ (Sada hazoor)', meaning: 'ਸਦਾ ਹਾਜ਼ਰ-ਨਾਜ਼ਰ' }
      ],
      en: [
        { word: 'Sukh ke sangee', meaning: 'Fair-weather companions who stay only during prosperity' },
        { word: 'Sadaa hazoor', meaning: 'Eternally present and supportive in all circumstances' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल सुख के समय दूसरों का साथ देता हूं, या संकट में भी एक सच्चे परमार्थी की तरह खड़ा रहता हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਦੁੱਖਾਂ ਵੇਲੇ ਵੀ ਦੂਜਿਆਂ ਦਾ ਸਹਾਰਾ ਬਣਦਾ ਹਾਂ?'),
      en: 'Am I merely a fair-weather friend, or do I embody the steadfast solace of an authentic benefactor?'
    },
    practicalApplication: {
      hi: 'अपनों व पराए के संकट काल में आगे बढ़कर सहायता करें; सुख-दुःख में समान भाव से साथ निभाएं।',
      pb: devanagariToGurmukhi('ਮੁਸੀਬਤ ਵੇਲੇ ਦੂਜਿਆਂ ਦੀ ਮਦਦ ਕਰੋ।'),
      en: 'Extend your supportive hand especially during others\' adversity; be a rock of compassionate presence.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! आप ही मेरे सुख-दुःख के नित्य सच्चे साथी हैं, मुझे भी दूसरों के प्रति निष्काम सहयोगी बना दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਤੁਸੀਂ ਮੇਰੇ ਸਦਾ ਦੇ ਸਾਥੀ ਹੋ, ਮੈਨੂੰ ਵੀ ਸੇਵਾਦਾਰ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! You are my eternal guardian through all seasons; make me a steadfast servant to all.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-5',
    number: 1375,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ५',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੫',
      en: 'Parmaarth Ko Ang - 5',
    },
    text: {
      hi: 'जो कोय करे सो स्वारथी, अरस परस गुन देत।\nबिन किया करै सो सुरमा, परमारथ के हेत।।',
      pb: devanagariToGurmukhi('जो कोय करे सो स्वारथी, अरस परस गुन देत। बिन किया करै सो सुरमा, परमारथ के हेत।।'),
      en: 'Jo koy kare so swaarathi, aras paras gun det. Bin kiyaa karai so surmaa, parmaarath ke het..'
    },
    transliteration: 'Jo koy kare so swaarathi, aras paras gun det. Bin kiya karai so surma, parmaarath ke het.',
    bhavarth: {
      hi: 'दूसरों से लेन-देन के व्यवहार के लिए जो कोई भी व्यक्ति कुछ करता है, वह तो केवल परस्पर जुड़े स्वार्थ का संबंध है। उसमें दोनों ओर से जो भी प्रयास किए जाते हैं, वे केवल अपनी ही भलाई के लिए होते हैं, परंतु जो बिना किसी कारण के निष्काम भाव से परमार्थ हित के लिए सत्कर्म करता है, वास्तव में वही सच्चा शूरवीर कहलाता है।',
      pb: devanagariToGurmukhi('ਜੋ ਲੈਣ-ਦੇਣ ਜਾਂ ਬਦਲੇ ਦੀ ਆਸ ਨਾਲ ਕੁਝ ਕਰਦਾ ਹੈ ਉਹ ਸਵਾਰਥੀ ਹੈ। ਪਰ ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਮੰਗ ਜਾਂ ਅਹਿਸਾਨ ਦੇ ਨਿਰਸਵਾਰਥ ਭਲੇ ਲਈ ਕੰਮ ਕਰਦਾ ਹੈ, ਉਹੀ ਅਸਲ ਸੂਰਬੀਰ ਯੋਧਾ ਹੈ।'),
      en: 'Whatever is done on terms of mutual exchange or reciprocity is merely transactional self-interest. But whoever acts purely for the spiritual uplifting of others without preceding favor or expected reward—he alone is the true spiritual champion (Surma).'
    },
    wordMeanings: {
      hi: [
        { word: 'अरस परस (Aras paras)', meaning: 'आपसी लेन-देन व बदले की भावना' },
        { word: 'गुन देत (Gun det)', meaning: 'उपकार के बदले उपकार का व्यवहार' },
        { word: 'बिन किया करै (Bin kiyaa karai)', meaning: 'बिना किसी पूर्व उपकार या स्वार्थ के स्वतः सहायता करना' },
        { word: 'सुरमा (Surmaa)', meaning: 'सच्चा आध्यात्मिक वीर / शूरवीर' }
      ],
      pb: [
        { word: 'ਅਰਸ ਪਰਸ (Aras paras)', meaning: 'ਆਪਸੀ ਲੈਣ-ਦੇਣ' },
        { word: 'ਬਿਨ ਕੀਯਾ ਕਰੈ (Bin kiya karai)', meaning: 'ਬਿਨਾਂ ਗਰਜ਼ ਦੇ ਸੇਵਾ' },
        { word: 'ਸੁਰਮਾ (Surma)', meaning: 'ਸੂਰਮਾ / ਬਹਾਦਰ' }
      ],
      en: [
        { word: 'Aras paras', meaning: 'Reciprocal give-and-take / conditional exchange' },
        { word: 'Bin kiyaa karai', meaning: 'Bestowing unconditional grace without prior obligation' },
        { word: 'Surmaa', meaning: 'The supreme spiritual hero of selflessness' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा परोपकार किसी पूर्व उपकार के बदले में है, या मैं बिना किसी अपेक्षा के सहज कृपा बरसाने वाला शूरवीर हूं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਨੇਕੀ ਬਿਨਾਂ ਕਿਸੇ ਸ਼ਰਤ ਦੇ ਹੈ?'),
      en: 'Is my goodness transactional reciprocity, or do I radiate unconditional kindness like a true spiritual warrior?'
    },
    practicalApplication: {
      hi: 'उपकार के बदले उपकार करने की सीमा से आगे बढ़कर, अनजाने और अयोग्य को भी प्रेम और सहायता प्रदान करें।',
      pb: devanagariToGurmukhi('ਬਿਨਾਂ ਕਿਸੇ ਬਦਲੇ ਦੀ ਉਮੀਦ ਦੇ ਨੇਕੀ ਕਰੋ।'),
      en: 'Transcend transactional kindness; pour forth selfless benevolence upon friend and stranger alike.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सच्चे शूरवीर की भांति अहैतुकी और निष्काम परमार्थ करने का आत्म-बल दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਰਸਵਾਰਥ ਸੇਵਾ ਦਾ ਆਤਮਿਕ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me the spiritual fortitude of a true warrior to serve without conditions.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-6',
    number: 1376,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ६',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੬',
      en: 'Parmaarth Ko Ang - 6',
    },
    text: {
      hi: 'स्वारथ सूका लाकड़ा, छांह बिहूना सूल।\nपीपल परमारथ भजो, सुख सागर को मूल ।।',
      pb: devanagariToGurmukhi('स्वारथ सूका लाकड़ा, छांह बिहूना सूल। पीपल परमारथ भजो, सुख सागर को मूल ।।'),
      en: 'Swaarath sookaa laakadaa, chhaanh bihoonaa sool. Peepal parmaarath bhajo, sukh saagar ko mool..'
    },
    transliteration: 'Swaarath sooka laakada, chhaanh bihoona sool. Peepal parmaarath bhajo, sukh saagar ko mool.',
    bhavarth: {
      hi: 'स्वार्थ तो सूखी लकड़ी के समान है, जिससे न तो छाया मिलती है और न ही कोई सुख, बल्कि वह कांटे के समान दुःख देने वाली होती है, परंतु परमार्थ सदाबहार छायादार पीपल के वृक्ष के समान है, जो सदैव सबको सुख और शांति प्रदान करने वाला है, अतः परमार्थ-मार्ग का सभी को अनुसरण करना चाहिए।',
      pb: devanagariToGurmukhi('ਸਵਾਰਥ ਸੁੱਕੀ ਲੱਕੜ ਵਾਂਗ ਹੈ, ਜਿਸਦੀ ਨਾ ਕੋਈ ਛਾਂ ਹੈ ਅਤੇ ਜੋ ਕੰਡੇ ਵਾਂਗ ਚੁੱਭਦੀ ਹੈ। ਪਰ ਪਰਮਾਰਥ ਹਰੇ-ਭਰੇ ਪਿੱਪਲ ਦੇ ਰੁੱਖ ਵਾਂਗ ਹੈ ਜੋ ਸਦਾ ਸੁਖਾਂ ਦਾ ਸਾਗਰ ਅਤੇ ਸ਼ਾਂਤੀ ਦਾ ਮੂਲ ਹੈ।'),
      en: 'Selfishness is like a barren, dry stick: devoid of shade, sharp as a thorn, yielding only pain. Altruism (Parmaarth) is like the benevolent Peepal tree: ever providing cool shade and shelter, the very fountainhead of the ocean of bliss.'
    },
    wordMeanings: {
      hi: [
        { word: 'सूका लाकड़ा (Sookaa laakadaa)', meaning: 'सूखी हुई बेजान लकड़ी / रसहीन स्वार्थ' },
        { word: 'छांह बिहूना सूल (Chhaanh bihoonaa sool)', meaning: 'छाया-रहित और कांटे की तरह चुभने वाला' },
        { word: 'पीपल परमारथ (Peepal parmaarath)', meaning: 'सदा शीतल छाया देने वाला पीपल रूपी परमार्थ' },
        { word: 'सुख सागर को मूल (Sukh saagar ko mool)', meaning: 'समस्त आनंद व शांति का मूल स्रोत' }
      ],
      pb: [
        { word: 'ਸੂਕਾ ਲਾਕੜਾ (Sooka laakada)', meaning: 'ਸੁੱਕੀ ਲੱਕੜ' },
        { word: 'ਛਾਂਹ ਬਿਹੂਨਾ ਸੂਲ (Chhaanh bihoona sool)', meaning: 'ਛਾਂ ਤੋਂ ਬਿਨਾਂ ਕੰਡਾ' },
        { word: 'ਪੀਪਲ ਪਰਮਾਰਥ (Peepal parmaarath)', meaning: 'ਛਾਂਦਾਰ ਪਿੱਪਲ ਵਰਗਾ ਪਰਉਪਕਾਰ' },
        { word: 'ਸੁਖ ਸਾਗਰ (Sukh saagar)', meaning: 'ਸੁੱਖਾਂ ਦਾ ਸਮੁੰਦਰ' }
      ],
      en: [
        { word: 'Sookaa laakadaa', meaning: 'A dry, dead branch yielding no life' },
        { word: 'Chhaanh bihoonaa sool', meaning: 'Shadeless and piercing like a thorn' },
        { word: 'Peepal parmaarath', meaning: 'The sheltering sacred Peepal of altruistic benevolence' },
        { word: 'Sukh saagar ko mool', meaning: 'The ultimate source and root of the ocean of joy' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा स्वभाव सूखी कांटेदार लकड़ी की तरह दूसरों को कष्ट देता है, या पीपल की तरह सबको शीतलता प्रदान करता है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰਾ ਆਚਰਣ ਪਿੱਪਲ ਦੇ ਰੁੱਖ ਵਾਂਗ ਸਭ ਨੂੰ ਠੰਢਕ ਦਿੰਦਾ ਹੈ?'),
      en: 'Is my nature like a dry thorn piercing others, or like the holy Peepal showering peaceful shelter?'
    },
    practicalApplication: {
      hi: 'स्वार्थ की शुष्कता छोड़कर जीवन को परोपकार, क्षमा और उदारता के पीपल-वृक्ष जैसा बनाएं।',
      pb: devanagariToGurmukhi('ਜੀਵਨ ਨੂੰ ਪਰਉਪਕਾਰੀ ਅਤੇ ਦਿਆਲੂ ਬਣਾਓ।'),
      en: 'Cast off the prickly dryness of selfishness; cultivate the sheltering benevolence of the Peepal tree.'
    },
    samarpanPrayer: {
      hi: 'हे सुख सागर सतगुरु! मुझे परमार्थ के शीतल पीपल की छांव में रखकर मेरे जीवन को भी परोपकारी बना दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸੁੱਖਾਂ ਦੇ ਸਾਗਰ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਪਰਮਾਰਥੀ ਜੀਵਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru, Ocean of Joy! Shelter me under the sacred shade of Your truth and make my life a blessing to all.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-7',
    number: 1377,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ७',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੭',
      en: 'Parmaarth Ko Ang - 7',
    },
    text: {
      hi: 'मरूं पर मांगू नहीं, अपने तन के काज।\nपरमारथ के कारनै, मोहि न आवै लाज।।',
      pb: devanagariToGurmukhi('मरूं पर मांगू नहीं, अपने तन के काज। परमारथ के कारनै, मोहि न आवै लाज।।'),
      en: 'Maroon par maangoo naheen, apne tan ke kaaj. Parmaarath ke kaarnai, mohi na aavai laaj..'
    },
    transliteration: 'Maroon par maangoo naheen, apne tan ke kaaj. Parmaarath ke kaarnai, mohi na aavai laaj.',
    bhavarth: {
      hi: 'जीव को प्रेरणा देने के लिए साहेब कहते हैं कि अपने तन अथवा जीवन निर्वाह के लिए मैं चाहे मर जाऊं, परंतु कभी भी किसी से कुछ नहीं मांगूंगा, लेकिन परमार्थ के कारण मांगने में मुझे किसी भी प्रकार की लाज नहीं आती। किसी भी रूप में मुझे न तो कोई भय है, न संदेह और न ही कोई लज्जा है, अर्थात जिस किसी उपाय से परमार्थ हो सकता है, वह मैं अवश्य ही करूंगा।',
      pb: devanagariToGurmukhi('ਆਪਣੀ ਦੇਹ ਜਾਂ ਨਿੱਜੀ ਲੋੜਾਂ ਲਈ ਮੈਂ ਮਰ ਜਾਵਾਂਗਾ ਪਰ ਕਦੀ ਕਿਸੇ ਅੱਗੇ ਹੱਥ ਨਹੀਂ ਫੈਲਾਵਾਂਗਾ; ਪਰ ਦੂਜਿਆਂ ਦੇ ਭਲੇ (ਪਰਮਾਰਥ) ਲਈ ਮੰਗਣ ਵਿੱਚ ਮੈਨੂੰ ਕੋਈ ਸ਼ਰਮ ਜਾਂ ਝਿਜਕ ਨਹੀਂ ਆਉਂਦੀ।'),
      en: 'Kabir declares: for my own bodily sustenance, I would rather perish than beg from anyone; yet for the noble cause of Parmaarth (universal welfare), I feel not the slightest shame or hesitation in seeking resources for the good of all.'
    },
    wordMeanings: {
      hi: [
        { word: 'मरूं पर मांगू नहीं (Maroon par maangoo naheen)', meaning: 'स्वयं के लिए प्राण त्यागना स्वीकार है पर याचना नहीं' },
        { word: 'तन के काज (Tan ke kaaj)', meaning: 'अपने शारीरिक सुख व व्यक्तिगत आवश्यकताओं के लिए' },
        { word: 'मोहि न आवै लाज (Mohi na aavai laaj)', meaning: 'परोपकार के लिए मुझे कोई संकोच या लज्जा नहीं' }
      ],
      pb: [
        { word: 'ਮਰੂੰ ਪਰ ਮਾਂਗੂ ਨਹੀਂ (Maroon par maangoo naheen)', meaning: 'ਆਪਣੇ ਲਈ ਕਦੀ ਨਾ ਮੰਗਣਾ' },
        { word: 'ਤਨ ਕੇ ਕਾਜ (Tan ke kaaj)', meaning: 'ਸਰੀਰ ਦੀਆਂ ਲੋੜਾਂ ਲਈ' },
        { word: 'ਲਾਜ (Laaj)', meaning: 'ਸ਼ਰਮ / ਸੰਕੋਚ' }
      ],
      en: [
        { word: 'Maroon par maangoo naheen', meaning: 'Would rather die than beg for personal needs' },
        { word: 'Tan ke kaaj', meaning: 'For physical survival or individual desires' },
        { word: 'Mohi na aavai laaj', meaning: 'I have no hesitation or false pride when serving universal welfare' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे भीतर व्यक्तिगत याचना का त्याग और परमार्थ के लिए सर्वस्व अर्पण करने का साहस है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਪਰਮਾਰਥ ਲਈ ਬਿਨਾਂ ਸ਼ਰਮ ਸੇਵਾ ਕਰਨ ਦਾ ਹੌਂਸਲਾ ਹੈ?'),
      en: 'Do I possess the dignity of self-reliance for personal needs, coupled with uninhibited zeal for universal welfare?'
    },
    practicalApplication: {
      hi: 'व्यक्तिगत स्वार्थ के लिए कभी दीन न बनें; धर्म, सेवा और परमार्थ के पवित्र कार्यों के लिए निर्भय होकर आगे बढ़ें।',
      pb: devanagariToGurmukhi('ਸਵਾਰਥ ਲਈ ਨਾ ਮੰਗੋ, ਪਰਮਾਰਥ ਲਈ ਸਭ ਕੁਝ ਵਾਰ ਦਿਓ।'),
      en: 'Live with self-respect for personal needs, but step forward fearlessly and tirelessly for charitable causes.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे व्यक्तिगत वासनाओं से मुक्त कर केवल परमार्थ और सत्य-प्रचार के लिए समर्पित सेवक बना दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸੱਚੇ ਪਰਮਾਰਥ ਦਾ ਸੇਵਕ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Free me from personal craving and make me an undaunted servant of Your divine mission.'
    },
    quiz: []
  },
  {
    id: 'parmaarth-8',
    number: 1378,
    grantha: 'Sakhi Sangrah',
    category: 'updesh',
    categoryTitle: {
      hi: 'परमार्थ को अंग - ८',
      pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ - ੮',
      en: 'Parmaarth Ko Ang - 8',
    },
    text: {
      hi: 'धन रहै न जोबन रहै, रहै न गांव न ठांव।\nकबीर जग में जस रहै, करिदे किसी का काम।।',
      pb: devanagariToGurmukhi('धन रहै न जोबन रहै, रहै न गांव न ठांव। कबीर जग में जस रहै, करिदे किसी का काम।।'),
      en: 'Dhan rahai na joban rahai, rahai na gaanv na thaanv. Kabeer jag mein jas rahai, karide kisee kaa kaam..'
    },
    transliteration: 'Dhan rahai na joban rahai, rahai na gaanv na thaanv. Kabeer jag mein jas rahai, karide kisee ka kaam.',
    bhavarth: {
      hi: 'अंत काल में हमारे पास न तो धन रहेगा और न ही यह यौवन और न ही अपना ये गांव रहेगा और न अपने रहने का स्थान, अर्थात हमारे पास कुछ भी नहीं होगा। कबीरजी कहते हैं कि इस जगत में केवल शुभ-कर्म रूपी यश रहेगा, अतः सदैव परमार्थ के सत्कर्मों में रत रहना चाहिए।',
      pb: devanagariToGurmukhi('ਅੰਤ ਵੇਲੇ ਨਾ ਧਨ ਰਹਿਣਾ ਹੈ, ਨਾ ਜਵਾਨੀ, ਨਾ ਇਹ ਪਿੰਡ ਅਤੇ ਨਾ ਕੋਈ ਟਿਕਾਣਾ। ਕਬੀਰ ਸਾਹਿਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਸੰਸਾਰ ਵਿੱਚ ਸਿਰਫ਼ ਪਰਉਪਕਾਰ ਦਾ ਨੇਕ ਜੱਸ (ਕੀਰਤੀ) ਹੀ ਰਹਿੰਦਾ ਹੈ, ਇਸ ਲਈ ਕਿਸੇ ਲੋੜਵੰਦ ਦਾ ਕੰਮ ਸੰਵਾਰ ਦਿਓ।'),
      en: 'At the end of life, neither wealth nor youth will remain, nor your native village, nor your earthly dwelling. Kabir proclaims: only the noble fragrance of good deeds and selfless service (Jas) endures in this world—therefore do good and serve someone in need.'
    },
    wordMeanings: {
      hi: [
        { word: 'जोबन (Joban)', meaning: 'युवावस्था / शारीरिक बल' },
        { word: 'ठांव (Thaanv)', meaning: 'रहने का स्थान / ठिकाना' },
        { word: 'जस रहै (Jas rahai)', meaning: 'सत्कर्मों का पवित्र यश व कीर्ति अमर रहती है' },
        { word: 'करिदे किसी का काम (Karide kisee kaa kaam)', meaning: 'निस्वार्थ भाव से किसी की भलाई व कार्य सिद्ध करना' }
      ],
      pb: [
        { word: 'ਜੋਬਨ (Joban)', meaning: 'ਜਵਾਨੀ' },
        { word: 'ਠਾਂਵ (Thaanv)', meaning: 'ਟਿਕਾਣਾ' },
        { word: 'ਜਸ (Jas)', meaning: 'ਨੇਕ ਨਾਮੀ / ਕੀਰਤੀ' },
        { word: 'ਕਿਸੇ ਕਾ ਕਾਮ (Kise ka kaam)', meaning: 'ਕਿਸੇ ਦਾ ਭਲਾ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Joban', meaning: 'Youth and vitality' },
        { word: 'Thaanv', meaning: 'Earthly dwelling / abode' },
        { word: 'Jas rahai', meaning: 'The immortal glory of noble service endures' },
        { word: 'Karide kisee kaa kaam', meaning: 'Help someone selflessly and fulfill their need' }
      ]
    },
    contemplation: {
      hi: 'जब धन, यौवन और घर-द्वार सब छूट जाना है, तो क्या मैं दूसरों की भलाई करके अमर यश संजो रहा हूं?',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਸਭ ਕੁਝ ਇੱਥੇ ਹੀ ਰਹਿ ਜਾਣਾ ਹੈ, ਤਾਂ ਕੀ ਮੈਂ ਨੇਕ ਕਰਮ ਕਮਾ ਰਿਹਾ ਹਾਂ?'),
      en: 'When wealth, youth, and dwelling shall all dissolve, am I gathering the immortal fragrance of selfless deeds?'
    },
    practicalApplication: {
      hi: 'धन और यौवन के अहंकार से बचें; हर दिन किसी न किसी की निःस्वार्थ सहायता करके जीवन को सार्थक बनाएं।',
      pb: devanagariToGurmukhi('ਹਰ ਰੋਜ਼ ਕਿਸੇ ਲੋੜਵੰਦ ਦੀ ਮਦਦ ਕਰੋ।'),
      en: 'Do not be proud of wealth or youth; make every single day meaningful by serving someone in need.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी देह और धन छूटने से पहले मुझे निरंतर परमार्थ और सेवा में रत रहने का आशीर्वाद दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਦਾ ਪਰਉਪਕਾਰ ਵਿੱਚ ਲੱਗੇ ਰਹਿਣ ਦੀ ਕਿਰਪਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Before my earthly vessel perishes, anchor me in continuous selfless service and truth.'
    },
    quiz: []
  }
];
