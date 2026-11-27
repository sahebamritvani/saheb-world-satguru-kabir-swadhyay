import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_BHRAM_VIDHVANS_KO_ANG: Sakhi[] = [
  {
    id: 'bhram-1',
    number: 1631,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧',
      en: 'Bhram-Vidhvans Ko Ang - 1',
    },
    text: {
      hi: 'पाहन लै देवल रचा, मोटी मूरत माहिं।\nपिण्ड फूटि परबश रहै, सो लै तारे काहिं।।',
      pb: 'ਪਾਹਨ ਲੈ ਦੇਵਲ ਰਚਾ, ਮੋਟੀ ਮੂਰਤ ਮਾਹਿ।\nਪਿਂਡ ਫੂਟਿ ਪਰਬਸ਼ ਰਹੈ, ਸੋ ਲੈ ਤਾਰੇ ਕਾਹਿ।।',
      en: 'Paahan lai deval racha, motee moorat maahin. Pind phooti parabash rahai, so lai taare kaahin..',
    },
    transliteration: 'Paahan lai deval racha, motee moorat maahin. Pind phooti parabash rahai, so lai taare kaahin.',
    bhavarth: {
      hi: 'पत्थर लेकर मंदिर बनवाया और उसमें लाकर पत्थर की विशाल मूर्ति स्थापित कर दी। कुछ समय बाद वह पराधीन जड़-मूर्ति स्वयं ही एक दिन टूटकर मिट्टी में मिल गई, फिर भला वह किसी को क्या तारेगी?',
      pb: 'ਪੱਥਰ ਲੈ ਕੇ ਮੰਦਰ ਬਣਵਾਇਆ ਅਤੇ ਉਸ ਵਿੱਚ ਪੱਥਰ ਦੀ ਵੱਡੀ ਮੂਰਤੀ ਸਥਾਪਿਤ ਕਰ ਦਿੱਤੀ। ਕੁਝ ਸਮੇਂ ਬਾਅਦ ਉਹ ਨਿਰਭਰ ਮੂਰਤੀ ਆਪ ਹੀ ਟੁੱਟ ਕੇ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲ ਗਈ, ਫਿਰ ਉਹ ਕਿਸੇ ਹੋਰ ਦਾ ਉੱਧਾਰ ਕਿਵੇਂ ਕਰੇਗੀ?',
      en: 'Humanity builds a temple of stone and installs a massive stone idol inside. When that lifeless idol eventually crumbles into dust due to dependency on external elements, how can it rescue anyone from the ocean of existence?',
    },
    wordMeanings: {
      hi: [
        { word: 'पाहन (Paahan)', meaning: 'पत्थर / शिला' },
        { word: 'देवल (Deval)', meaning: 'मंदिर / देव स्थान' },
        { word: 'पिण्ड (Pind)', meaning: 'शरीर / मूर्ति का ढांचा / देह' },
        { word: 'परबश (Parabash)', meaning: 'पराधीन / दूसरों के वश में' }
      ],
      pb: [
        { word: 'ਪਾਹਨ (Paahan)', meaning: 'ਪੱਥਰ' },
        { word: 'ਦੇਵਲ (Deval)', meaning: 'ਮੰਦਰ' },
        { word: 'ਪਿਂਡ (Pind)', meaning: 'ਸਰੀਰ / ਢਾਂਚਾ' },
        { word: 'ਪਰਬਸ਼ (Parabash)', meaning: 'ਨਿਰਭਰ' }
      ],
      en: [
        { word: 'Paahan', meaning: 'Stone' },
        { word: 'Deval', meaning: 'Temple' },
        { word: 'Pind', meaning: 'Form / Entity / Structure' },
        { word: 'Parabash', meaning: 'Dependent / Powerless on its own' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अविनाशी चेतना परमात्मा की खोज स्वयं अपने घट में कर रहा हूँ, या केवल बाहरी जड़ पत्थरों में ही सत्य मान बैठा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸੱਚੇ ਰੱਬ ਨੂੰ ਆਪਣੇ ਅੰਦਰ ਲੱਭ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I searching for the eternal, living consciousness within my own soul, or am I searching for it in lifeless external structures?'
    },
    practicalApplication: {
      hi: 'बाहरी जड़ आडम्बरों से ऊपर उठकर, अपने हृदय में विराजमान चैतन्य परमात्मा का साक्षात्कार सत्य शब्द योग द्वारा करें।',
      pb: 'ਆਪਣੇ ਮਨ ਅੰਦਰ ਪਰਮਾਤਮਾ ਦਾ ਧਿਆਨ ਧਰੋ।',
      en: 'Look past external rituals; seek to connect with the living divine presence within your own heart.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मुझे बाहरी भ्रमों और अंधविश्वासों से मुक्त कर अपने भीतर की चैतन्य ज्योति का दर्शन कराएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ! ਮੈਨੂੰ ਬਾਹਰੀ ਭਰਮਾਂ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir! Relieve me of all superficial doubts and grant me the vision of the inner spiritual flame. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-2',
    number: 1632,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - २',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੨',
      en: 'Bhram-Vidhvans Ko Ang - 2',
    },
    text: {
      hi: 'कबीर पाहन पूजि के, होन चहत भव पार।\nभीजि पानि भेदै नदी, बूड़े जिन सिर भार।।',
      pb: 'ਕਬੀਰ ਪਾਹਨ ਪੂਜਿ ਕੇ, ਹੋਨ ਚਹਤ ਭਵ ਪਾਰ।\nਭੀਜਿ ਪਾਨਿ ਭੇਦੈ ਨਦੀ, ਬੂੜੇ ਜਿਨ ਸਿਰ ਭਾਰ।।',
      en: 'Kabir paahan pooji ke, hon chahat bhav paar. Bheeji paani bhedai nadee, boode jin sir bhaar..',
    },
    transliteration: 'Kabir paahan pooji ke, hon chahat bhav paar. Bheeji paani bhedai nadee, boode jin sir bhaar.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि पत्थर पूजकर जो संसार-सागर से पार होना चाहते हैं, ऐसे लोग संसार-नदी में प्रविष्ट होते ही अज्ञान-रूपी पानी व विषय वासनाओं से भीगकर, सिर पर रखे कर्मों व मन की कल्पना की गठरी के भारी होते-होते डूब मरते हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਪੱਥਰ ਪੂਜ ਕੇ ਜੋ ਸੰਸਾਰ ਸਾਗਰ ਤੋਂ ਪਾਰ ਹੋਣਾ ਚਾਹੁੰਦੇ ਹਨ, ਉਹ ਜੀਵ ਸੰਸਾਰ ਰੂਪੀ ਨਦੀ ਵਿੱਚ ਵੜਦਿਆਂ ਹੀ ਅਗਿਆਨਤਾ ਤੇ ਵਿਸ਼ੇ-ਵਾਸਨਾਵਾਂ ਦੇ ਭਾਰ ਨਾਲ ਡੁੱਬ ਜਾਂਦੇ ਹਨ।',
      en: 'Kabir reveals: Those who seek to cross the ocean of life by worshipping stone idols will sink. Drenched in the water of spiritual ignorance and carrying the heavy load of worldly desires and mental concepts on their heads, they go down in the midstream.',
    },
    wordMeanings: {
      hi: [
        { word: 'भेदै (Bhedai)', meaning: 'प्रवेश करना / प्रवेश होते ही' },
        { word: 'पानि (Paani)', meaning: 'अज्ञान रूपी पानी / जल' },
        { word: 'भार (Bhaar)', meaning: 'कर्मों और कल्पनाओं का भारी बोझ' }
      ],
      pb: [
        { word: 'ਭੇਦੈ (Bhedai)', meaning: 'ਵੜਨਾ / ਪ੍ਰਵੇਸ਼ ਕਰਨਾ' },
        { word: 'ਪਾਨਿ (Paani)', meaning: 'ਪਾਣੀ' },
        { word: 'ਭਾਰ (Bhaar)', meaning: 'ਕਰਮਾਂ ਦਾ ਭਾਰ' }
      ],
      en: [
        { word: 'Bhedai', meaning: 'To enter / Wade into' },
        { word: 'Paani', meaning: 'Water of ignorance / Worldly ocean' },
        { word: 'Bhaar', meaning: 'Heavy burden of karma and concepts' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने भी अपने सिर पर अहंकार, सांसारिक इच्छाओं और झूठे सिद्धांतों का भारी बोझ उठा रखा है, जिससे मैं भवसागर में डूब रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਸਿਰ \'ਤੇ ਚਿੰਤਾਵਾਂ ਦਾ ਭਾਰ ਚੁੱਕਿਆ ਹੋਇਆ ਹੈ?',
      en: 'Have I burdened my own mind with vanity and material desires, dragging my soul down in the current of worldly existence?'
    },
    practicalApplication: {
      hi: 'सतगुरु के उपदेशों द्वारा अपने मन के बोझ को हल्का करें; वासनाओं का त्याग कर बिल्कुल सरल बनें।',
      pb: 'ਮਨ ਦਾ ਭਾਰ ਹਲਕਾ ਕਰਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Lighten your mental baggage through the Guru’s teachings; abandon vanity and simplify your life.'
    },
    samarpanPrayer: {
      hi: 'हे करुणामयी सतगुरुदेव! मेरे सिर से अज्ञान और सांसारिक मोह का यह भारी बोझ हटा दीजिए ताकि मैं सहज ही पार हो सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪਰਮ ਦਿਆਲੂ ਗੁਰੂਦੇਵ! ਮੇਰਾ ਅਗਿਆਨਤਾ ਦਾ ਭਾਰ ਦੂਰ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Compassionate Master! Take the heavy luggage of material worries off my head, and float my soul safely across. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-3',
    number: 1633,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ३',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੩',
      en: 'Bhram-Vidhvans Ko Ang - 3',
    },
    text: {
      hi: 'अकिल बिहूना आदमी, जानै नहीं गंवार।\nजैसे कपि परबस पर्यो, नाचै घर घर द्वार।।',
      pb: 'ਅਕਿਲ ਬਿਹੂਨਾ ਆਦਮੀ, ਜਾਨੈ ਨਹੀਂ ਗਂਵਾਰ।\nਜੈਸੇ ਕਪਿ ਪਰਬਸ ਪਰ੍ਯੋ, ਨਾਚੈ ਘਰ ਘਰ ਦ੍ਵਾਰ।।',
      en: 'Akil bihoona aadmee, jaanai naheen ganvaar. Jaise kapi parabas paryo, naachai ghar ghar dvaar..',
    },
    transliteration: 'Akil bihoona aadmee, jaanai naheen ganvaar. Jaise kapi parabas paryo, naachai ghar ghar dvaar.',
    bhavarth: {
      hi: 'यह बुद्धिहीन, गंवार मनुष्य कुछ नहीं जानता। जिस प्रकार बंदर मदारी के वश में होकर घर-घर एवं द्वार-द्वार नाचता है, उसी प्रकार ही मताभिमानी अपने-अपने अहंकार के वश होकर संसार में भटकते रहते हैं।',
      pb: 'ਇਹ ਬੁੱਧੀਹੀਣ ਮਨੁੱਖ ਕੁਝ ਨਹੀਂ ਜਾਣਦਾ। ਜਿਵੇਂ ਬਾਂਦਰ ਮਦਾਰੀ ਦੇ ਵੱਸ ਵਿੱਚ ਪੈ ਕੇ ਘਰ-ਘਰ ਨੱਚਦਾ ਹੈ, ਉਵੇਂ ਹੀ ਅਗਿਆਨੀ ਜੀਵ ਆਪਣੇ ਮਨ ਦੇ ਹੰਕਾਰ ਦੇ ਵੱਸ ਪੈ ਕੇ ਸੰਸਾਰ ਵਿੱਚ ਭਟਕਦਾ ਫਿਰਦਾ ਹੈ।',
      en: 'The foolish, ignorant person knows nothing of reality. Just as a captured monkey dances door-to-door at the whim of its master, the egoistic soul wanders endlessly under the absolute command of its own mental illusions.',
    },
    wordMeanings: {
      hi: [
        { word: 'अकिल बिहूना (Akil bihoona)', meaning: 'बुद्धिहीन / विवेक रहित' },
        { word: 'कपि (Kapi)', meaning: 'बंदर / मर्कट' },
        { word: 'परबस (Parabas)', meaning: 'पराधीन / दूसरों के वश में' },
        { word: 'गंवार (Ganvaar)', meaning: 'अज्ञानी / मूर्ख व्यक्ति' }
      ],
      pb: [
        { word: 'ਅਕਿਲ ਬਿਹੂਨਾ (Akil bihoona)', meaning: 'ਬੁੱਧੀਹੀਣ' },
        { word: 'ਕਪਿ (Kapi)', meaning: 'ਬਾਂਦਰ' },
        { word: 'ਪਰਬਸ (Parabas)', meaning: 'ਨਿਰਭਰ / ਗੁਲਾਮ' },
        { word: 'ਗਂਵਾਰ (Ganvaar)', meaning: 'ਅਗਿਆਨੀ' }
      ],
      en: [
        { word: 'Akil bihoona', meaning: 'Devoid of intellect / Undiscriminating' },
        { word: 'Kapi', meaning: 'Monkey' },
        { word: 'Parabas', meaning: 'Dependent / Under control' },
        { word: 'Ganvaar', meaning: 'Ignorant / Rustic fool' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन भी वासनाओं और सांसारिक विचारों के हाथों में बंदर की तरह नाच रहा है, या मैं गुरु-ज्ञान से इस पर नियंत्रण पा चुका हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਮਨ ਮੈਨੂੰ ਆਪਣੇ ਇਸ਼ਾਰਿਆਂ \'ਤੇ ਨਚਾਉਂਦਾ ਹੈ?',
      en: 'Is my intellect dancing like a captured monkey to the tunes of material desires and temporary attractions?'
    },
    practicalApplication: {
      hi: 'मन के विकारों के वश में होना बंद करें; शांत होकर बुद्धि को सतगुरु की निर्मल शिक्षाओं में स्थिर करें।',
      pb: 'ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨੂੰ ਕਾਬੂ ਵਿੱਚ ਰੱਖੋ।',
      en: 'Refuse to be manipulated by passing thoughts; steady your focus in the deep wisdom of the Satguru.'
    },
    samarpanPrayer: {
      hi: 'हे प्राणदाता सतगुरु! मुझे चंचल वासनाओं के जाल से छुड़ाकर अपनी अविचल शरण प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਸੱਚੀ ਆਜ਼ਾਦੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Divine Master! Rescue me from the slavery of my own desires; anchor me in Your quiet freedom. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-4',
    number: 1634,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ४',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੪',
      en: 'Bhram-Vidhvans Ko Ang - 4',
    },
    text: {
      hi: 'पाहन पानी पूजि के, पचि मूआ संसार।\nभेद अलहदा रहि गया, भेदवन्त सो पार।।',
      pb: 'ਪਾਹਨ ਪਾਨੀ ਪੂਜਿ ਕੇ, ਪਚਿ ਮੂਆ ਸੰਸਾਰ।\nਭੇਦ ਅਲਹਦਾ ਰਹਿ ਗਯਾ, ਭੇਦਵਨ੍ਤ ਸੋ ਪਾਰ।।',
      en: 'Paahan paani pooji ke, pachi mooa sansaar. Bhed alahada rahi gaya, bhedavant so paar..',
    },
    transliteration: 'Paahan paani pooji ke, pachi mooa sansaar. Bhed alahada rahi gaya, bhedavant so paar.',
    bhavarth: {
      hi: 'पत्थर और पानी की पूजा करके सांसारिक जन व्यर्थ में ही मर मिटे । यथार्थ का रहस्य तो इससे पृथक है, सत्य का रहस्य जानने वाला ही भव-सागर पार होता है।',
      pb: 'ਪੱਥਰ ਅਤੇ ਪਾਣੀ ਦੀ ਪੂਜਾ ਕਰਕੇ ਸਾਰਾ ਸੰਸਾਰ ਵਿਅਰਥ ਹੀ ਨਸ਼ਟ ਹੋ ਰਿਹਾ ਹੈ। ਅਸਲ ਰਹੱਸ (ਪ੍ਰਮਾਤਮਾ ਦਾ ਗਿਆਨ) ਇਸ ਤੋਂ ਬਿਲਕੁਲ ਵੱਖਰਾ ਹੈ, ਜੋ ਇਸ ਭੇਦ ਨੂੰ ਜਾਣਦਾ ਹੈ, ਉਹੀ ਪਾਰ ਹੁੰਦਾ ਹੈ।',
      en: 'The world exhausts and destroys itself worshipping stones and bathing in outer waters. The absolute truth is completely distinct from these outer rituals; only the one who knows the inner mystery crosses over.',
    },
    wordMeanings: {
      hi: [
        { word: 'पचि मूआ (Pachi mooa)', meaning: 'व्यर्थ में खपकर मर जाना' },
        { word: 'अलहदा (Alahada)', meaning: 'अलग / भिन्न / पृथक' },
        { word: 'भेदवन्त (Bhedavant)', meaning: 'यथार्थ रहस्य जानने वाला साधक' }
      ],
      pb: [
        { word: 'ਪਚਿ ਮੂਆ (Pach mooa)', meaning: 'ਵਿਅਰਥ ਹੀ ਖ਼ਤਮ ਹੋ ਜਾਣਾ' },
        { word: 'ਅਲਹਦਾ (Alahada)', meaning: 'ਵੱਖਰਾ / ਜੁਦਾ' },
        { word: 'ਭੇਦਵਨ੍ਤ (Bhedavant)', meaning: 'ਰਹੱਸ ਨੂੰ ਜਾਣਨ ਵਾਲਾ' }
      ],
      en: [
        { word: 'Pachi mooa', meaning: 'Died struggling in vain / Wasted life' },
        { word: 'Alahada', meaning: 'Separate / Distinct / Beyond' },
        { word: 'Bhedavant', meaning: 'Knower of the deep inner mystery' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धर्म भी केवल बाहरी पूजा, अनुष्ठानों और पवित्र नदियों के स्नान तक ही सीमित है, या मैंने अंतरात्मा के गुप्त भेद को जाना है?',
      pb: 'ਕੀ ਮੈਂ ਰੱਬ ਦੀ ਅਸਲ ਹਸਤੀ ਨੂੰ ਪਛਾਣਿਆ ਹੈ?',
      en: 'Is my spiritual practice restricted to physical symbols, or have I discovered the direct connection with the inner Spirit?'
    },
    practicalApplication: {
      hi: 'बाहरी दिखावे और मत-मतांतरों को छोड़कर सतगुरु की शरण में अंतर्मुखी साधना (सूरत-शब्द योग) का अभ्यास करें।',
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਭਗਤੀ ਕਰੋ।',
      en: 'Look past sectarian debates and physical baths; engage in silent, introspective meditation on the inner Word.'
    },
    samarpanPrayer: {
      hi: 'हे यथार्थ ज्ञान प्रदाता सतगुरुदेव! मुझे कोरे बाह्य कर्मकांडों से छुड़ाकर सत्य रहस्य से अवगत कराएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੇ ਆਤਮਿਕ ਗਿਆਨ ਦਾ ਭੇਦ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Teacher! Release me from mechanical rituals and open my inner eye to Your absolute truth. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-5',
    number: 1635,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ५',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੫',
      en: 'Bhram-Vidhvans Ko Ang - 5',
    },
    text: {
      hi: 'पंख होत परबस पर्यो, सूवा के बुधि नाहिं।\nअकिल बिहूना आदमी, यों बन्धा जग माहिं।।',
      pb: 'ਪੰਖ ਹੋਤ ਪਰਬਸ ਪਰ੍ਯੋ, ਸੂਵਾ ਕੇ ਬੁਧਿ ਨਾਹਿਂ।\nਅਕਿਲ ਬਿਹੂਨਾ ਆਦਮੀ, ਯੋਂ ਬਨ੍ਧਾ ਜਗ ਮਾਹਿਂ।।',
      en: 'Pankh hot parabas paryo, soova ke budhi naahin. Akil bihoona aadmee, yon bandha jag maahin..',
    },
    transliteration: 'Pankh hot parabas paryo, soova ke budhi naahin. Akil bihoona aadmee, yon bandha jag maahin.',
    bhavarth: {
      hi: 'बुद्धिहीन ‘सुवा पक्षी\' पंखों के होते हुए भी अज्ञानवश दूसरों के बंधन में पड़ जाता है। इसी प्रकार बुद्धिहीन मूर्ख मनुष्य मोह-माया की अज्ञानता में फंसकर इस संसार के बंधन में पड़ा हुआ है, अर्थात सब कुछ कहते-सुनते हुए भी मोह के बंधन से मुक्त नहीं हो पाता है।',
      pb: 'ਬੁੱਧੀਹੀਣ ਤੋਤਾ ਖੰਭ ਹੁੰਦਿਆਂ ਹੋਇਆਂ ਵੀ ਅਗਿਆਨਤਾ ਕਾਰਨ ਪਿੰਜਰੇ ਵਿੱਚ ਕੈਦ ਹੋ ਜਾਂਦਾ ਹੈ। ਇਸੇ ਤਰ੍ਹਾਂ ਗਿਆਨ-ਹੀਣ ਮਨੁੱਖ ਵੀ ਸੰਸਾਰ ਦੇ ਮੋਹ-ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹੈ।',
      en: 'The undiscriminating parrot, despite having wings to fly, falls into captivity due to its own foolishness. Similarly, the human being, blessed with physical and intellectual capabilities, remains tightly bound in the cages of attachment and delusion.',
    },
    wordMeanings: {
      hi: [
        { word: 'सूवा (Soova)', meaning: 'तोता पक्षी / सुग्गा' },
        { word: 'बुधि नाहिं (Budhi naahin)', meaning: 'बुद्धि न होना / मूर्खता' },
        { word: 'परबस (Parabas)', meaning: 'कैद में होना / पराधीन' }
      ],
      pb: [
        { word: 'ਸੂਵਾ (Soova)', meaning: 'ਤੋਤਾ' },
        { word: 'ਬੁਧਿ ਨਾਹਿਂ (Budhi naahin)', meaning: 'ਬੁੱਧੀ ਦਾ ਨਾ ਹੋਣਾ' },
        { word: 'ਪਰਬਸ (Parabas)', meaning: 'ਗੁਲਾਮੀ / ਕੈਦ' }
      ],
      en: [
        { word: 'Soova', meaning: 'Parrot' },
        { word: 'Budhi naahin', meaning: 'Lacking intelligence / Undiscriminating' },
        { word: 'Parabas', meaning: 'Dependency / Captivity / Bondage' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे पास भी विवेक और स्वतंत्रता पाने के साधन हैं, फिर भी मैं जानबूझकर स्वयं को परिवार, समाज और वासनाओं के पिंजरे में बंद रखे हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਹੀ ਬਣਾਏ ਜਾਲ ਵਿੱਚ ਕੈਦ ਹਾਂ?',
      en: 'Blessed with intellect to soar high, do I voluntarily remain locked in the cages of petty worldly attachments?'
    },
    practicalApplication: {
      hi: 'मोह-माया के मानसिक बंधनों को काटकर अपने चैतन्य स्वरूप को पहचानें और निर्भय होकर सत्यपथ पर उड़ान भरें।',
      pb: 'ਮੋਹ ਦੇ ਪਿੰਜਰੇ ਵਿੱਚੋਂ ਨਿਕਲ ਕੇ ਮੁਕਤ ਹੋਵੋ।',
      en: 'Cut the psychological ties of attachment; spread your spiritual wings and fly in the open sky of truth.'
    },
    samarpanPrayer: {
      hi: 'हे दयासिंधु सतगुरुदेव! मुझे अज्ञान के इस लोह-पिंजरे से मुक्त कर अपने अमर लोक की ओर उड़ान भरने की सामर्थ्य दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਸਾਰ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਉੱਡਣਾ ਸਿਖਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Divine Master! Open the heavy doors of my illusion-cage; let my soul soar into the realm of absolute freedom. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-6',
    number: 1636,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ६',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੬',
      en: 'Bhram-Vidhvans Ko Ang - 6',
    },
    text: {
      hi: 'अकिल बिहूला सिंह ज्यों, गयों ससा के संग।\nअपनी प्रतिमा देखिके, कियो तन को भंग।।',
      pb: 'ਅਕਿਲ ਬਿਹੂਲਾ ਸਿਂਹ ਜ੍ਯੋਂ, ਗਯੋਂ ਸਸਾ ਕੇ ਸਂਗ।\nਅਪਨੀ ਪ੍ਰਤਿਮਾ ਦੇਖਿਕੇ, ਕਿਯੋਂ ਤਨ ਕੋ ਭਂਗ।।',
      en: 'Akil bihoola sinh jyaon, gayon sasa ke sang. Apanee pratima dekhike, kiyon tan ko bhang..',
    },
    transliteration: 'Akil bihoola sinh jyaon, gayon sasa ke sang. Apanee pratima dekhike, kiyon tan ko bhang.',
    bhavarth: {
      hi: 'जिस प्रकार बुद्धिहीन सिंह ने अहंकारवश खरगोश के साथ जाकर और कुएं के जल में अपनी परछाई देखकर उसमें कूदकर अपना शरीर नष्ट कर दिया, उसी प्रकार ही इन्सान भी मन के विकारों से माया के वशीभूत होकर अपना जन्म यूँ ही गवां देता हैं।',
      pb: 'ਜਿਵੇਂ ਬੁੱਧੀਹੀਣ ਸ਼ੇਰ ਨੇ ਖ਼ਰਗੋਸ਼ ਦੇ ਨਾਲ ਜਾ ਕੇ ਖੂਹ ਦੇ ਪਾਣੀ ਵਿੱਚ ਆਪਣਾ ਪਰਛਾਵਾਂ ਦੇਖਿਆ ਅਤੇ ਹੰਕਾਰ ਵਿੱਚ ਕੁੱਦ ਕੇ ਜਾਨ ਗੁਆ ਲਈ, ਉਵੇਂ ਹੀ ਮਨੁੱਖ ਵੀ ਭਰਮ ਦੇ ਖੂਹ ਵਿੱਚ ਡੁੱਬ ਕੇ ਜਨਮ ਗੁਆ ਲੈਂਦਾ ਹੈ।',
      en: 'Just as the foolish lion, blinded by its own rage and ego, followed the rabbit to the well and drowned after jumping at its own reflection in the water, the human being ruins their rare birth by reacting blindly to mental illusions and projected desires.',
    },
    wordMeanings: {
      hi: [
        { word: 'ससा (Sasa)', meaning: 'खरगोश / शशक' },
        { word: 'प्रतिमा (Pratima)', meaning: 'परछाई / प्रतिबिंब' },
        { word: 'तन को भंग (Tan ko bhang)', meaning: 'शरीर नष्ट करना / मृत्यु को प्राप्त होना' }
      ],
      pb: [
        { word: 'ਸਸਾ (Sasa)', meaning: 'ਖ਼ਰਗੋਸ਼' },
        { word: 'ਪ੍ਰਤਿਮਾ (Pratima)', meaning: 'ਪਰਛਾਵਾਂ' },
        { word: 'ਤਨ ਕੋ ਭਂਗ (Tan ko bhang)', meaning: 'ਜਾਨ ਗੁਆਉਣਾ' }
      ],
      en: [
        { word: 'Sasa', meaning: 'Rabbit' },
        { word: 'Pratima', meaning: 'Shadow / Reflection / Image' },
        { word: 'Tan ko bhang', meaning: 'Destruction of the physical body' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी अपने मन के क्रोध और अहंकार रूपी प्रतिबिंब से ही लड़कर अपनी अमूल्य ऊर्जा और जीवन को व्यर्थ कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਹੰਕਾਰ ਦੀ ਲੜਾਈ ਵਿੱਚ ਆਪਣੀ ਜਾਨ ਗੁਆ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I fighting paper tigers and mental reflections, wasting my rare life-energy in egoistic disputes?'
    },
    practicalApplication: {
      hi: 'मन के भ्रमों और क्रोध के आवेगों को साक्षी भाव से देखें; कुएँ में कूदने के बजाय शांतिपूर्वक सत्य का चिंतन करें।',
      pb: 'ਹੰਕਾਰ ਤੇ ਗੁੱਸੇ ਨੂੰ ਛੱਡ ਕੇ ਸ਼ਾਂਤ ਰਹੋ।',
      en: 'Observe the impulses of anger and ego objectively; step back from conflict and contemplate in stillness.'
    },
    samarpanPrayer: {
      hi: 'हे विवेक के सागर सतगुरु! मेरे भीतर के अज्ञान रूपी शेर को शांत कर मुझे सत्य की गहराइयों का बोध कराएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਅਸਲ ਆਪੇ ਦੀ ਪਛਾਣ ਕਰਵਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master of wisdom! Silence the raging lion of my ego; let me see reality clearly without distortions. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-7',
    number: 1637,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ७',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੭',
      en: 'Bhram-Vidhvans Ko Ang - 7',
    },
    text: {
      hi: 'कुबुधी को सूझै नहीं, उठि उठि देवल जाय।\nदिल देहरा को खबर नहीं, पाथर ते कह पाय।।',
      pb: 'ਕੁਬੁਧੀ ਕੋ ਸੂਝੈ ਨਹੀਂ, ਉਠਿ ਉਠਿ ਦੇਵਲ ਜਾਯ।\nਦਿਲ ਦੇਹਰਾ ਕੋ ਖਬਰ ਨਹੀਂ, ਪਾਥਰ ਤੇ ਕਹ ਪਾਯ।।',
      en: 'Kubudhee ko soojhai naheen, uthi uthi deval jaay. Dil dehara ko khabar naheen, paathar te kah paay..',
    },
    transliteration: 'Kubudhee ko soojhai naheen, uthi uthi deval jaay. Dil dehara ko khabar naheen, paathar te kah paay.',
    bhavarth: {
      hi: 'कुबुद्धि जीव को तो सूझता ही नहीं, वह तो नित्य उठ-उठकर मंदिर-मस्जिद में जाता है। उसको हृदय-मंदिर का पता नहीं है कि इसी में राम व रहीम विराजमान हैं। भला! ये लोग पत्थर की मूर्ति या मस्जिद में क्या कुछ पा सकते हैं!',
      pb: 'ਮੂਰਖ ਜੀਵ ਨੂੰ ਕੁਝ ਸਮਝ ਨਹੀਂ ਆਉਂਦਾ, ਉਹ ਰੋਜ਼ ਉੱਠ ਕੇ ਬਾਹਰੀ ਮੰਦਰਾਂ-ਮਸਜਿਦਾਂ ਵਿੱਚ ਜਾਂਦਾ ਹੈ। ਉਸਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਰੂਪੀ ਮੰਦਰ ਦੀ ਖ਼ਬਰ ਨਹੀਂ, ਜਿੱਥੇ ਸੱਚਾ ਪ੍ਰਮਾਤਮਾ ਵੱਸਦਾ ਹੈ। ਪੱਥਰਾਂ ਤੋਂ ਉਹ ਕੀ ਪ੍ਰਾਪਤ ਕਰੇਗਾ!',
      en: 'The foolish person lacks discrimination; they wake up daily and run to external temples or mosques. Ignorant of the inner shrine of their own heart where the Divine actually resides, what can they ever hope to gain from dead stone?',
    },
    wordMeanings: {
      hi: [
        { word: 'कुबुधी (Kubudhee)', meaning: 'दुर्बुद्धि / विपरीत बुद्धि वाला जीव' },
        { word: 'देहरा (Dehara)', meaning: 'हृदय रूपी पवित्र मंदिर' },
        { word: 'पाथर (Paathar)', meaning: 'पत्थर / शिला' }
      ],
      pb: [
        { word: 'ਕੁਬੁਧੀ (Kubudhee)', meaning: 'ਮੂਰਖ' },
        { word: 'ਦੇਹਰਾ (Dehara)', meaning: 'ਹਿਰਦਾ ਰੂਪੀ ਮੰਦਰ' },
        { word: 'ਪਾਥਰ (Paathar)', meaning: 'ਪੱਥਰ' }
      ],
      en: [
        { word: 'Kubudhee', meaning: 'Evil-minded / Foolish / Ignorant' },
        { word: 'Dehara', meaning: 'The temple of the inner heart' },
        { word: 'Paathar', meaning: 'Stone' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी परमात्मा को खोजने के लिए काशी-काबा या मंदिर-मस्जिद दौड़ रहा हूँ, जबकि वे मेरे अत्यंत निकट मेरे घट के भीतर ही हैं?',
      pb: 'ਕੀ ਮੈਂ ਰੱब ਨੂੰ ਬਾਹਰ ਲੱਭ ਰਿਹਾ ਹਾਂ ਜਦੋਂ ਕਿ ਉਹ ਮੇਰੇ ਅੰਦਰ ਹੈ?',
      en: 'Am I running to distant pilgrimage sites or stone structures to find the Divine, who resides closer than my own breath?'
    },
    practicalApplication: {
      hi: 'बाहरी खोज को समेटकर प्रतिदिन ध्यान-सुमिरन द्वारा अपने अंतःकरण को शुद्ध करें और हृदय-मंदिर में ही सतगुरु कबीर साहेब का दर्शन करें।',
      pb: 'ਮਨ ਦੇ ਅੰਦਰ ਝਾਤੀ ਮਾਰੋ ਅਤੇ ਭਗਤੀ ਕਰੋ।',
      en: 'Redirect your search inward; cleanse your own heart-temple through daily meditation and silent contemplation.'
    },
    samarpanPrayer: {
      hi: 'हे हृदय निवासी सतगुरुदेव! मुझे मेरे अंतर के मंदिर का मार्ग दिखाएँ ताकि मैं सदा आपकी आंतरिक सन्निधि में रहूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ ਦੇ ਮੰਦਰ ਦੇ ਦਰਸ਼ਨ ਕਰਵਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord of my heart! Reveal to me the golden pathway to my inner shrine, so I may rest forever in Your light. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-8',
    number: 1638,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ८',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੮',
      en: 'Bhram-Vidhvans Ko Ang - 8',
    },
    text: {
      hi: 'सिदक सूबरी बाहिरा, कहा हज्ज को जाय।\nजिनका दिल साबित नहीं, तिनको कहा खुदाय।।',
      pb: 'ਸਿਦਕ ਸੂਬਰੀ ਬਾਹਿਰਾ, ਕਹਾ ਹਜ੍ਜ ਕੋ ਜਾਯ।\nਜਿਨਕਾ ਦਿਲ ਸਾਬਿਤ ਨਹੀਂ, ਤਿਨਕੋ ਕਹਾ ਖੁਦਾਯ।।',
      en: 'Sidak soobaree baahira, kaha hajj ko jaay. Jinaka dil saabit naheen, tinko kaha khudaay..',
    },
    transliteration: 'Sidak soobaree baahira, kaha hajj ko jaay. Jinaka dil saabit naheen, tinko kaha khudaay.',
    bhavarth: {
      hi: 'जो व्यक्ति सच्चाई और संतोष से बिल्कुल अनभिज्ञ हैं, अर्थात सच्चाई और संतोष नहीं रखते तो फिर उनको हज के लिए जाने से कोई लाभ नहीं। जिनका दिल साफ नहीं है, उनको खुदा कहां मिलेगा।',
      pb: 'ਜੋ ਸੱਚਾਈ ਤੇ ਸੰਤੋਖ ਤੋਂ ਬਿਨਾਂ ਹਨ, ਉਹਨਾਂ ਦਾ ਹੱਜ \'ਤੇ ਜਾਣਾ ਵਿਅਰਥ ਹੈ। ਜਿਨ੍ਹਾਂ ਦਾ ਦਿਲ ਸਾਫ਼ ਤੇ ਦ੍ਰਿੜ੍ਹ ਨਹੀਂ, ਉਹਨਾਂ ਨੂੰ ਰੱਬ ਕਿੱਥੋਂ ਮਿਲੇਗਾ।',
      en: 'Those devoid of absolute honesty and deep contentment gain nothing from embarking on external holy pilgrimages (Hajj). For those whose hearts are not clean and faithful, how can the Divine ever manifest?',
    },
    wordMeanings: {
      hi: [
        { word: 'सिदक (Sidak)', meaning: 'सच्चाई / ईमानदारी / दृढ़ विश्वास' },
        { word: 'सूबरी (Soobaree)', meaning: 'संतोष / सब्र' },
        { word: 'साबित (Saabit)', meaning: 'साफ / पवित्र / विचलित न होने वाला' },
        { word: 'बाहिरा (Baahira)', meaning: 'बिना / शून्य' }
      ],
      pb: [
        { word: 'ਸਿਦਕ (Sidak)', meaning: 'ਸੱਚਾਈ / ਦ੍ਰਿੜ੍ਹਤਾ' },
        { word: 'ਸੂਬਰੀ (Soobaree)', meaning: 'ਸੰਤੋਖ / ਸਬਰ' },
        { word: 'ਸਾਬਿਤ (Saabit)', meaning: 'ਸਾਫ਼ / ਦ੍ਰਿੜ੍ਹ' },
        { word: 'ਬਾਹਿਰਾ (Baahira)', meaning: 'ਬਿਨਾਂ' }
      ],
      en: [
        { word: 'Sidak', meaning: 'Truthfulness / Faith / Sincerity' },
        { word: 'Soobaree', meaning: 'Contentment / Patience / Resignation' },
        { word: 'Saabit', meaning: 'Wholesome / Clean / Unblemished' },
        { word: 'Baahira', meaning: 'Devoid of / Lacking' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सत्य और संतोष से रहित है, फिर भी मैं धार्मिक यात्राओं के द्वारा मोक्ष की आशा कर रहा हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਦਿਲ ਸਾਫ਼ ਹੈ ਜਾਂ ਮੈਂ ਸਿਰਫ਼ ਦਿਖਾਵਾ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Is my heart empty of sincerity and compassion, even as I seek salvation through religious tours and pilgrimages?'
    },
    practicalApplication: {
      hi: 'पवित्र स्थलों की यात्रा करने से पहले अपने विचारों को सत्य, ईमानदारी और संतोष से शुद्ध करें; सच्चा काबा आपका निर्मल दिल है।',
      pb: 'ਆਪਣੇ ਦਿਲ ਨੂੰ ਸਾਫ਼ ਤੇ ਸੱਚਾ ਰੱਖੋ।',
      en: 'Before visiting any physical holy land, wash your mind with truth and patience; a pure heart is the true sanctuary.'
    },
    samarpanPrayer: {
      hi: 'हे निरंजन सतगुरु! मेरे मन को सत्य, संतोष और पवित्रता का दान दें ताकि मैं सदा आपके प्रकाश का अनुभव करूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪਰਮੇਸ਼ੁਰ! ਮੇਰੇ ਦਿਲ ਨੂੰ ਪਵਿੱਤਰ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord of Truth! Clothe my soul in sincerity and calm acceptance; let my heart be a pristine home for You. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-9',
    number: 1639,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ९',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੯',
      en: 'Bhram-Vidhvans Ko Ang - 9',
    },
    text: {
      hi: 'कबीर सालिगराम का, मोहिं भरोसा नाहिं।\nकाल कहर की चोट में, बिनसि जाय छिन माहिं।।',
      pb: 'ਕਬੀਰ ਸਾਲਿਗਰਾਮ ਕਾ, ਮੋਹਿਂ ਭਰੋਸਾ ਨਾਹਿਂ।\nਕਾਲ ਕਹਰ ਕੀ ਚੋਟ ਮੇਂ, ਬਿਨਸਿ ਜਾਯ ਛਿਨ ਮਾਹਿਂ।।',
      en: 'Kabir saaligaraam ka, mohin bharosa naahin. Kaal kahar kee chot mein, binasi jaay chhin maahin..',
    },
    transliteration: 'Kabir saaligaraam ka, mohin bharosa naahin. Kaal kahar kee chot mein, binasi jaay chhin maahin.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि पत्थर के शालिग्राम से कल्याण-प्राप्ति का बिल्कुल भी भरोसा नहीं है, क्योंकि वह तो काल की कठिन चोट से क्षण भर में नष्ट-भ्रष्ट हो जाएगा।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਪੱਥਰ ਦੇ ਸਾਲੀਗ੍ਰਾਮ \'ਤੇ ਮੈਨੂੰ ਕੋਈ ਭਰੋਸਾ ਨਹੀਂ, ਕਿਉਂਕਿ ਕਾਲ ਦੀ ਇੱਕ ਸੱਟ ਨਾਲ ਉਹ ਪਲ ਭਰ ਵਿੱਚ ਟੁੱਟ ਕੇ ਨਸ਼ਟ ਹੋ ਜਾਵੇਗਾ।',
      en: 'Satguru Kabir Saheb proclaims: I place no reliance on the stone Shali-gram for my salvation. If struck by the relentless hammer of Time, it will shatter into pieces in a single fraction of a second.',
    },
    wordMeanings: {
      hi: [
        { word: 'सालिगराम (Saaligaraam)', meaning: 'शालिग्राम / पत्थर की गोल पिंडी / मूर्ति' },
        { word: 'बिनसि (Binasi)', meaning: 'नष्ट हो जाना / टूट जाना' },
        { word: 'कहर (Kahar)', meaning: 'प्रलयंकारी / भयानक प्रहार' }
      ],
      pb: [
        { word: 'ਸਾਲਿਗਰਾਮ (Saaligaraam)', meaning: 'ਪੱਥਰ ਦੀ ਮੂਰਤੀ' },
        { word: 'ਬਿਨਸਿ (Binasi)', meaning: 'ਨਸ਼ਟ ਹੋਣਾ' },
        { word: 'ਕਹਰ (Kahar)', meaning: 'ਭਿਆਨਕ' }
      ],
      en: [
        { word: 'Saaligaraam', meaning: 'The sacred stone idol representing divinity' },
        { word: 'Binasi', meaning: 'Destroyed / Crumbled' },
        { word: 'Kahar', meaning: 'Havoc-wreaking / Relentless blow' }
      ]
    },
    contemplation: {
      hi: 'जो स्वयं समय और भौतिक प्रहारों से रक्षा नहीं कर सकता, मैं उस नश्वर वस्तु पर अपनी आत्मा की मुक्ति का भरोसा कैसे रख सकता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਨਾਸ਼ਵਾਨ ਚੀਜ਼ਾਂ ਵਿੱਚ ਅਮਰ ਪ੍ਰਮਾਤਮा ਲੱਭ ਰਿਹਾ ਹਾਂ?',
      en: 'How can I entrust the salvation of my immortal soul to a physical object that can easily be broken by physical force?'
    },
    practicalApplication: {
      hi: 'नश्वर सांसारिक प्रतीकों और मूर्तियों से मन हटाकर उस अविनाशी सत्यनाम को भजें, जिसे काल की चोट भी स्पर्श नहीं कर सकती।',
      pb: 'ਨਾਸ਼ਵਾਨ ਚੀਜ਼ਾਂ ਛੱਡ ਕੇ ਅਮਰ ਸਤਯਨਾਮ ਜਪੋ।',
      en: 'Turn your attention away from fragile symbols; connect with the timeless, unchangeable Word (Satyanaam).'
    },
    samarpanPrayer: {
      hi: 'हे काल-जयी सतगुरुदेव! मुझे उस अविनाशी और शाश्वत शब्द-ज्ञान का दान दें जिसे काल भी कभी नष्ट नहीं कर सकता। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਮਰ ਨਾਮ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O timeless Master! Grant me the immortal sound-current that remains untouched by death and destruction. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-10',
    number: 1640,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्संस को अंग - १०',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੦',
      en: 'Bhram-Vidhvans Ko Ang - 10',
    },
    text: {
      hi: 'पूजा सेवा नेम व्रत, गुड़ियन का सा खेल।\nजब लग पिव परसै नहीं, तब लग संसै मेल।।',
      pb: 'ਪੂਜਾ ਸੇਵਾ ਨੇਮ ਵ੍ਰਤ, ਗੁੜਿਯਨ ਕਾ ਸਾ ਖੇਲ।\nਜਬ ਲਗ ਪਿਵ ਪਰਸੈ ਨਹੀਂ, ਤਬ ਲਗ ਸੰਸੈ ਮੇਲ।।',
      en: 'Pooja seva nem vrat, gudiyan ka sa khel. Jab lag piv parasai naheen, tab lag sansai mel..',
    },
    transliteration: 'Pooja seva nem vrat, gudiyan ka sa khel. Jab lag piv parasai naheen, tab lag sansai mel.',
    bhavarth: {
      hi: 'पूजा-नमाज, मूर्ति की सेवा, नियम-व्रत सब कुंआरी कन्या के गुड़ियों के खेलों की भांति हैं। जब तक वह यथार्थ पति नहीं पाती, तब तक वह गुडियों से खेलती है। इसी प्रकार जब तक अविनाशी परमात्मा से मिलन नहीं होता, तब तक उपर्युक्त आडंबर ही सत्य प्रतीत होता है।',
      pb: 'ਪੂਜਾ, ਨੇਮ, ਤੇ ਵਰਤ ਰੱਖਣਾ ਬੱਚੀਆਂ ਦੇ ਗੁੱਡੀਆਂ ਦੇ ਖੇਡ ਵਰਗਾ ਹੈ। ਜਦੋਂ ਤੱਕ ਅਸਲ ਪਤੀ (ਪ੍ਰਮਾਤਮਾ) ਦਾ ਮਿਲਾਪ ਨਹੀਂ ਹੁੰਦਾ, ਉਦੋਂ ਤੱਕ ਜੀਵ ਇਹਨਾਂ ਖੇਡਾਂ (ਆਡੰਬਰਾਂ) ਵਿੱਚ ਰੁੱਝਿਆ ਰਹਿੰਦਾ ਹੈ।',
      en: 'Mechanical worship, physical rituals, and fasts are like a young girl playing with dolls. She plays with them until she meets her real husband. Similarly, until the soul meets the Eternal Beloved (Satpurush), it remains busy with superficial rituals.',
    },
    wordMeanings: {
      hi: [
        { word: 'गुड़ियन का खेल (Gudiyan ka khel)', meaning: 'बचकाना खेल / कृत्रिम मनोरंजन' },
        { word: 'पिव (Piv)', meaning: 'परमात्मा / यथार्थ प्रियतम' },
        { word: 'परसै नहीं (Parasai naheen)', meaning: 'स्पर्श न करना / मिलन न होना' },
        { word: 'संसै मेल (Sansai mel)', meaning: 'शंकाओं और भ्रमों का जमावड़ा' }
      ],
      pb: [
        { word: 'ਗੁੜਿਯਨ ਕਾ ਖੇਲ (Gudiyan ka khel)', meaning: 'ਗੁੱਡੀਆਂ ਦਾ ਖੇਡ / ਦਿਖਾਵਾ' },
        { word: 'ਪਿਵ (Piv)', meaning: 'ਪ੍ਰਮਾਤਮਾ / ਅਸਲ ਪਤੀ' },
        { word: 'ਪਰਸੈ ਨਹੀਂ (Parasai naheen)', meaning: 'ਮਿਲਾਪ ਨਾ ਹੋਣਾ' },
        { word: 'ਸੰਸੈ ਮੇਲ (Sansai mel)', meaning: 'ਸ਼ੰਕੇ ਅਤੇ ਭਰਮ' }
      ],
      en: [
        { word: 'Gudiyan ka khel', meaning: 'Doll-play / Childish games / Mock rituals' },
        { word: 'Piv', meaning: 'Beloved Lord / Real husband' },
        { word: 'Parasai naheen', meaning: 'Does not touch / Has not united' },
        { word: 'Sansai mel', meaning: 'The gathering of doubts and illusion' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी भक्ति भी गुड़ियों के खेल की भांति केवल कृत्रिम है, या मेरे भीतर प्रियतम सतगुरु से मिलने की तीव्र विरह-व्याकुलता जाग्रत हुई है?',
      pb: 'ਕੀ ਮੈਂ ਅਸਲ ਆਤਮਿਕ ਸੁੱਖ ਪਾਇਆ ਹੈ ਜਾਂ ਸਿਰਫ਼ ਦਿਖਾਵਾ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Is my devotion merely a set of mechanical acts, or is there a genuine, burning thirst to experience the divine presence within?'
    },
    practicalApplication: {
      hi: 'बाहरी बनावटी साधना को छोड़ें; अत्यंत व्याकुलता और सरल चित्त से सतगुरु के अमर शब्द-स्मरण में लीन हो जाएँ।',
      pb: 'ਖੇਡਾਂ ਛੱਡ ਕੇ ਅਸਲ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਹੋਵੋ।',
      en: 'Move beyond spiritual toys and mechanical rituals; surrender your heart to the direct experience of inner silence.'
    },
    samarpanPrayer: {
      hi: 'हे अविनाशी प्रियतम! मुझे इस कृत्रिम धार्मिक आडंबर से निकालकर अपने वास्तविक स्वरूप का साक्षात्कार करवाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸੱਚੇ ਪਤੀ ਪਰਮੇਸ਼ੁਰ! ਮੇਰੇ ਭਰਮ ਦੂਰ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Eternal Beloved! Lead me out of childish spiritual dramas and establish my soul in Your pure truth. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-11',
    number: 1641,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - ११',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੧',
      en: 'Bhram-Vidhvans Ko Ang - 11',
    },
    text: {
      hi: 'पाहन पूजै हरि मिलै, तो मैं पूजूं पहार।\nताते तो चक्की भली, पीसि खाय संसार।।',
      pb: 'ਪਾਹਨ ਪੂਜੈ ਹਰਿ ਮਿਲੈ, ਤੋ ਮੈਂ ਪੂਜੂੰ ਪਹਾਰ।\nਤਾਤੇ ਤੋ ਚੱਕੀ ਭਲੀ, ਪੀਸਿ ਖਾਇ ਸੰਸਾਰ।।',
      en: 'Paahan poojai hari milai, to main poojoon pahaar. Taate to chakkee bhalee, peesi khaay sansaar..',
    },
    transliteration: 'Paahan poojai hari milai, to main poojoon pahaar. Taate to chakkee bhalee, peesi khaay sansaar.',
    bhavarth: {
      hi: 'यदि मुझे पत्थर को पूजने से परमात्मा की प्राप्ति हो जाए, तो मैं पर्वत को पूजने लग जाऊं। पत्थर की मूर्ति पूजने से तो चक्की पूजना ज्यादा अच्छा है, जिसका पिसा अनाज संसार खाता है।',
      pb: 'ਜੇਕਰ ਪੱਥਰ ਪੂਜਣ ਨਾਲ ਪ੍ਰਮਾਤਮਾ ਮਿਲਦਾ ਹੋਵੇ, ਤਾਂ ਮੈਂ ਪਹਾੜ ਦੀ ਪੂਜਾ ਕਰਨ ਲੱਗ ਪਵਾਂ। ਉਸ ਮੂਰਤੀ ਨਾਲੋਂ ਤਾਂ ਆਟਾ ਪੀਹਣ ਵਾਲੀ ਚੱਕੀ ਚੰਗੀ ਹੈ, ਜਿਸਦਾ ਪੀਸਿਆ ਹੋਇਆ ਅਨਾਜ ਸਾਰਾ ਸੰਸਾਰ ਖਾਂदा ਹੈ।',
      en: 'If worshipping stone could lead to the Divine, I would gladly worship an entire mountain! Better than a stone idol is the humble household grinding-mill of stone, which grinds the grain that feeds the entire world.',
    },
    wordMeanings: {
      hi: [
        { word: 'पहार (Pahaar)', meaning: 'पर्वत / विशाल शैल समूह' },
        { word: 'ताते (Taate)', meaning: 'उससे तो / उसकी अपेक्षा' },
        { word: 'चक्की (Chakkee)', meaning: 'पत्थर की चक्की / पीसने का यंत्र' }
      ],
      pb: [
        { word: 'ਪਹਾਰ (Pahaar)', meaning: 'ਪਹਾੜ' },
        { word: 'ਤਾਤੇ (Taate)', meaning: 'ਉਸ ਨਾਲੋਂ' },
        { word: 'ਚੱਕੀ (Chakkee)', meaning: 'ਆਟਾ ਪੀਹਣ ਵਾਲੀ ਚੱਕੀ' }
      ],
      en: [
        { word: 'Pahaar', meaning: 'Mountain / Large rock' },
        { word: 'Taate', meaning: 'Compared to that / Than that' },
        { word: 'Chakkee', meaning: 'Stone grinding-mill' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धर्म व्यावहारिक जीवन और परोपकार से जुड़ा हुआ है, या केवल जड़ एवं निरर्थक पूजा पद्धतियों में ही खोया है?',
      pb: 'ਕੀ ਮੇਰੀ ਭਗਤੀ ਲੋਕਾਂ ਦੇ ਭਲੇ ਲਈ ਕੰਮ ਆਉਂਦੀ ਹੈ?',
      en: 'Does my spirituality translate into practical service and compassion, or is it wasted on lifeless, unproductive rituals?'
    },
    practicalApplication: {
      hi: 'अंधविश्वासों को त्यागकर कर्मठ और परोपकारी बनें; जड़ को पूजने के बजाय संसार के प्राणियों की सेवा करें जो साक्षात ईश्वर का रूप हैं।',
      pb: 'ਕਰਮਸ਼ੀਲ ਬਣੋ ਤੇ ਸੇਵਾ ਕਰੋ।',
      en: 'Eradicate blind beliefs; practice active, compassionate service to the living creations around you.'
    },
    samarpanPrayer: {
      hi: 'हे लोक कल्याणकारी सतगुरु साहेब! मुझे दिखावे की निरर्थक पूजा से मुक्त कर जीवों की निष्काम सेवा का वरदान दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਦਿਖਾਵੇ ਦੀ ਪੂਜਾ ਤੋਂ ਬਚਾ ਕੇ ਸੇਵਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Benevolent Master! Save me from hollow displays of worship; inspire me to serve Your creation with a pure heart. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-12',
    number: 1642,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १२',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੨',
      en: 'Bhram-Vidhvans Ko Ang - 12',
    },
    text: {
      hi: 'पाहन ही का देहरा, पाहन ही का देव।\nपूजन हारा आंधरा, क्यों करि मानै सेव।।',
      pb: 'ਪਾਹਨ ਹੀ ਕਾ ਦੇਹਰਾ, ਪਾਹਨ ਹੀ ਕਾ ਦੇਵ।\nਪੂਜਨ ਹਾਰਾ ਆਂਧਰਾ, ਕ੍ਯੋਂ ਕਰਿ ਮਾਨੈ ਸੇਵ।।',
      en: 'Paahan hee ka dehara, paahan hee ka dev. Poojan haara aandhara, kyon kari maanai sev..',
    },
    transliteration: 'Paahan hee ka dehara, paahan hee ka dev. Poojan haara aandhara, kyon kari maanai sev.',
    bhavarth: {
      hi: 'पत्थर का मंदिर और पत्थर का देवता तथा पूजने वाला भी अंधा अर्थात अविवेकी के समान है। फिर वह जड़ देवता इस सेवा को क्या स्वीकार करेगा? अर्थात अज्ञानता की ऐसी पूजा अर्थहीन होती है।',
      pb: 'ਪੱਥਰ ਦਾ ਮੰਦਰ ਹੈ, ਪੱਥਰ ਦੀ ਮੂਰਤੀ ਹੈ ਅਤੇ ਪੂਜਾ ਕਰਨ ਵਾਲਾ ਵੀ ਅਗਿਆਨਤਾ ਵਿੱਚ ਅੰਨ੍ਹਾ ਬਣਿਆ ਹੋਇਆ ਹੈ। ਫਿਰ ਉਹ ਨਿਰਜੀਵ ਪੱਥਰ ਉਸਦੀ ਸੇਵਾ ਨੂੰ ਕਿਵੇਂ ਸਵੀਕਾਰ ਕਰੇਗਾ?',
      en: 'The temple is of stone, the idol is of stone, and the worshipper is blind with spiritual ignorance. How can a lifeless, stone deity ever accept or acknowledge such service?',
    },
    wordMeanings: {
      hi: [
        { word: 'देहरा (Dehara)', meaning: 'मंदिर' },
        { word: 'आंधरा (Aandhara)', meaning: 'अंधा / विवेकहीन पुरुष' },
        { word: 'देव (Dev)', meaning: 'देवता / प्रतिमा' }
      ],
      pb: [
        { word: 'ਦੇਹਰਾ (Dehara)', meaning: 'ਮੰਦਰ' },
        { word: 'ਆਂਧਰਾ (Aandhara)', meaning: 'ਅੰਨ੍ਹਾ / ਅਗਿਆਨੀ' },
        { word: 'ਦੇਵ (Dev)', meaning: 'ਮੂਰਤੀ' }
      ],
      en: [
        { word: 'Dehara', meaning: 'Temple structure' },
        { word: 'Aandhara', meaning: 'Blind / Devoid of spiritual discrimination' },
        { word: 'Dev', meaning: 'Idol deity' }
      ]
    },
    contemplation: {
      hi: 'जब पूजक और पूज्य दोनों में ही चेतना का साक्षात्कार नहीं है, तो वह उपासना केवल अंधकार से अंधकार की ओर ले जाने वाली तो नहीं है?',
      pb: 'ਕੀ ਮੇਰੀ ਉਪਾਸਨਾ ਗਿਆਨ ਨਾਲ ਭਰਪੂਰ ਹੈ?',
      en: 'When both the seeker and the object of devotion lack conscious connection, is it not like a blind man leading another into the ditch?'
    },
    practicalApplication: {
      hi: 'अज्ञानता के अंधेपन को त्यागकर गुरु-ज्ञान की अंजन आँखों में लगाएं और अपने भीतर की ज्योति का साक्षात्कार करें।',
      pb: 'ਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਆਪਣੇ ਮਨ ਦੀਆਂ ਅੱਖਾਂ ਖੋਲ੍ਹੋ।',
      en: 'Apply the healing ointment of the Guru’s wisdom to your eyes; seek to perceive the living consciousness within.'
    },
    samarpanPrayer: {
      hi: 'हे ज्ञान-चक्षु प्रदाता सतगुरु! मेरे अज्ञान के अन्धकार को मिटाकर मुझे वास्तविक भक्ति का मर्म समझाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀਆਂ ਅਗਿਆਨਤਾ ਦੀਆਂ ਅੱਖਾਂ ਖੋਲ੍ਹੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Dispeller of spiritual blindness! Open my inner eyes to appreciate genuine, conscious devotion. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-13',
    number: 1643,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १३',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੩',
      en: 'Bhram-Vidhvans Ko Ang - 13',
    },
    text: {
      hi: 'आतम दृष्टि जानै नहीं, न्हावै प्रातः काल।\nलोकलाज लिया रहे, लागा भरम कपाल।।',
      pb: 'ਆਤਮ ਦ੍ਰਿਸ਼੍ਟਿ ਜਾਨੈ ਨਹੀਂ, ਨ੍ਹਾਵੈ ਪ੍ਰਾਤਃ ਕਾਲ।\nਲੋਕਲਾਜ ਲਿਯਾ ਰਹੇ, ਲਾਗਾ ਭਰਮ ਕਪਾਲ।।',
      en: 'Aatam drishti jaanai naheen, nhaavai praatah kaal. Lokalaaj liya rahe, laaga bharam kapaal..',
    },
    transliteration: 'Aatam drishti jaanai naheen, nhaavai praatah kaal. Lokalaaj liya rahe, laaga bharam kapaal.',
    bhavarth: {
      hi: 'जिस व्यक्ति में स्वरूप-ज्ञान की दृष्टि नहीं है और प्रातःकाल स्नान करते हैं। वे उसकी प्रकार है जिस प्रकार लोक की लज्जा लेकर बैठे हों और उनके सिर पर नाना प्रकार के भ्रम चढ़े हों।',
      pb: 'ਜਿਸ ਮਨੁੱਖ ਕੋਲ ਆਤਮਿਕ ਗਿਆਨ ਦੀ ਦ੍ਰਿਸ਼ਟੀ ਨਹੀਂ ਹੈ, ਉਹ ਸਵੇਰੇ-ਸਵੇਰੇ ਇਸ਼ਨਾਨ ਤਾਂ ਕਰਦਾ ਹੈ, ਪਰ ਉਹ ਕੇਵਲ ਦੁਨਿਆਵੀ ਦਿਖਾਵਾ ਹੀ ਹੈ। ਉਸਦੇ ਸਿਰ \'ਤੇ ਤਾਂ ਅਨੇਕਾਂ ਭਰਮ ਚੜ੍ਹੇ ਹੋਏ ਹਨ।',
      en: 'The person who lacks self-awareness and inner vision, yet meticulously bathes in freezing waters every morning, acts merely for social approval. Their head remains filled with endless illusions.',
    },
    wordMeanings: {
      hi: [
        { word: 'आतम दृष्टि (Aatam drishti)', meaning: 'आत्मज्ञान की दृष्टि / स्वरूप-ज्ञान' },
        { word: 'लोकलाज (Lokalaaj)', meaning: 'दिखावा / समाज का डर / सामाजिक प्रतिष्ठा' },
        { word: 'कपाल (Kapaal)', meaning: 'मस्तिष्क / सिर' }
      ],
      pb: [
        { word: 'ਆਤਮ ਦ੍ਰਿਸ਼੍ਟਿ (Aatam drishti)', meaning: 'ਆਤਮਿਕ ਸੋਝੀ' },
        { word: 'ਲੋਕਲਾਜ (Lokalaaj)', meaning: 'ਦੁਨਿਆਵੀ ਦਿਖਾਵਾ / ਸ਼ਰਮ' },
        { word: 'ਕਪਾਲ (Kapaal)', meaning: 'ਸਿਰ / ਮੱਥਾ' }
      ],
      en: [
        { word: 'Aatam drishti', meaning: 'Soul-consciousness / Inner self-vision' },
        { word: 'Lokalaaj', meaning: 'Social conformity / Fear of public opinion' },
        { word: 'Kapaal', meaning: 'Head / Forehead / Mind' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा स्नान केवल शरीर को साफ करने के लिए है, या मैंने ज्ञान और ध्यान के जल से अपने मन की मलिनता को भी धोया है?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਦੀ ਮੈਲ ਧੋਤੀ ਹੈ?',
      en: 'Am I focusing entirely on washing the physical body, while leaving the mind soiled with thoughts of pride and deceit?'
    },
    practicalApplication: {
      hi: 'केवल बाहरी शरीर के शुद्धिकरण में ही न उलझें; प्रतिदिन सतगुरु के वचनों के जल से मन को धोकर निर्मल करें।',
      pb: 'ਸਰੀਰ ਦੀ ਬਜਾਏ ਮਨ ਨੂੰ ਸਾਫ਼ ਕਰੋ।',
      en: 'Do not satisfy yourself with external cleanliness alone; wash your heart daily in the river of the Guru’s wisdom.'
    },
    samarpanPrayer: {
      hi: 'हे पावनकारी सतगुरुदेव! मेरे मन के सभी भ्रमों को धोकर मुझे अपने आत्मानुभव की पावन दृष्टि प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਦੇ ਭਰਮ ਧੋ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Purifying Master! Wash away the persistent illusions of my mind and gift me with pristine self-awareness. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-14',
    number: 1644,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १४',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੪',
      en: 'Bhram-Vidhvans Ko Ang - 14',
    },
    text: {
      hi: 'कबीर जेता आतमा, तेता सालिगराम।\nबोलनहारा पूजिये, नहिं पाहन सो काम।।',
      pb: 'ਕਬੀਰ ਜੇਤਾ ਆਤਮਾ, ਤੇਤਾ ਸਾਲਿਗਰਾਮ।\nਬੋਲਨਹਾਰਾ ਪੂਜਿਯੇ, ਨਹਿਂ ਪਾਹਨ ਸੋ ਕਾਮ।।',
      en: 'Kabir jeta aatama, teta saaligaraam. Bolanahaara poojiye, nahin paahan so kaam..',
    },
    transliteration: 'Kabir jeta aatama, teta saaligaraam. Bolanahaara poojiye, nahin paahan so kaam.',
    bhavarth: {
      hi: 'हे मनुष्यों! जितने प्राणी हैं, वे ही शालिग्राम-भगवान हैं। बोलने-डोलने वाले को पूजो अर्थात प्राणियों की सेवा करो, पत्थर-पूजने से कोई लाभ नहीं हो सकता।',
      pb: 'ਹੇ ਮਨੁੱਖੋ! ਜਿੰਨੇ ਵੀ ਜੀਵ ਹਨ, ਉਹੀ ਸੱਚੇ ਸਾਲੀਗ੍ਰਾਮ (ਪ੍ਰਮਾਤਮਾ) ਹਨ। ਜੋ ਬੋਲਦਾ-ਚੱਲਦਾ ਹੈ (ਜੀਵਤ ਪ੍ਰਾਣੀ) ਉਸਦੀ ਸੇਵਾ ਕਰੋ, ਪੱਥਰ ਦੀ ਪੂਜਾ ਕਰਨ ਨਾਲ ਕੁਝ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੋਣਾ।',
      en: 'O human beings! Every living being is a manifestation of the Divine Shali-gram. Serve and respect the living, speaking presence in all creatures; do not waste your devotion on static, lifeless stone.',
    },
    wordMeanings: {
      hi: [
        { word: 'जेता (Jeta)', meaning: 'जितने भी / समस्त' },
        { word: 'बोलनहारा (Bolanahaara)', meaning: 'बोलने-डोलने वाला / जीवित चैतन्य जीव' },
        { word: 'पाहन (Paahan)', meaning: 'पत्थर' }
      ],
      pb: [
        { word: 'ਜੇਤਾ (Jeta)', meaning: 'ਜਿੰਨੇ ਵੀ' },
        { word: 'ਬੋਲਨਹਾਰਾ (Bolanahaara)', meaning: 'ਬੋਲਣ ਵਾਲਾ / ਜੀਵਤ ਪ੍ਰਾਣੀ' },
        { word: 'ਪਾਹਨ (Paahan)', meaning: 'ਪੱਥਰ' }
      ],
      en: [
        { word: 'Jeta', meaning: 'As many as / All' },
        { word: 'Bolanahaara', meaning: 'The speaking, living, conscious entity' },
        { word: 'Paahan', meaning: 'Stone' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं मनुष्यों और जीवों के प्रति संवेदनहीन हूँ, फिर भी पत्थरों के सामने माथा टेककर धार्मिक होने का दावा कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਲੋਕਾਂ ਦੀ ਸੇਵਾ ਕਰਦਾ ਹਾਂ?',
      en: 'Am I cold and insensitive toward suffering humans, while bowing reverently before stone idols in search of piety?'
    },
    practicalApplication: {
      hi: 'पत्थर-पूजा के बजाय दीन-दुखियों की सेवा और मानवता का आदर करें; प्रत्येक जीव में साक्षात सतगुरु के अंश का दर्शन करें।',
      pb: 'ਜੀਵਤ ਪ੍ਰਾਣੀਆਂ ਦੀ ਸੇਵਾ ਕਰੋ।',
      en: 'Turn your attention toward helping living souls; appreciate and serve the spark of divine consciousness in all beings.'
    },
    samarpanPrayer: {
      hi: 'हे सर्वव्यापी सतगुरु साहेब! मुझे प्रत्येक जीव में आपके चैतन्य स्वरूप का दर्शन करने और निष्काम सेवा करने की बुद्धि दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸਭ ਜੀਵਾਂ ਵਿੱਚ ਤੇਰਾ ਰੂਪ ਵੇਖਣ ਦੀ ਦ੍ਰਿਸ਼ਟੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O All-Pervading Master! Grant me the eyes to see Your living presence in every creature and serve them selflessly. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-15',
    number: 1645,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १५',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੫',
      en: 'Bhram-Vidhvans Ko Ang - 15',
    },
    text: {
      hi: 'अकिल बिहूना आधंरा, गज फन्दे पडो आय।\nऐसे सब लग बंधिया, काहि कहूं समझाय।।',
      pb: 'ਅਕਿਲ ਬਿਹੂਨਾ ਆਧਂਰਾ, ਗਜ ਫਨ੍ਦੇ ਪਡੋ ਆਯ।\nਐਸੇ ਸਬ ਲਗ ਬਂਧਿਯਾ, ਕਾਹਿ ਕਹੂਂ ਸਮਝਾਯ।।',
      en: 'Akil bihoona aandhara, gaz phande pado aay. Aise sab lag bandhiya, kaahi kahoon samajhaay..',
    },
    transliteration: 'Akil bihoona aandhara, gaz phande pado aay. Aise sab lag bandhiya, kaahi kahoon samajhaay.',
    bhavarth: {
      hi: 'ज्ञान-बुद्धि के बिना प्रत्येक प्राणी आंख रहते हुए भी अंधे के समान है। बुद्धिहीन मदमस्त हाथी अपार शक्तिशाली होते हुए भी जाल में फंस जाता है। इसी प्रकार इस जग का प्रत्येक जीव अपने-अपने अभिमान से बंधा हुआ है। किस-किस को समझाऊं, अर्थात विवेक बिना जहां देखो, यही हाल है।',
      pb: 'ਗਿਆਨ ਤੋਂ ਬਿਨਾਂ ਮਨੁੱਖ ਅੱਖਾਂ ਹੁੰਦਿਆਂ ਵੀ ਅੰਨ੍ਹੇ ਵਰਗਾ ਹੈ। ਜਿਵੇਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹਾਥੀ ਆਪਣੀ ਬੇਸਮਝੀ ਕਾਰਨ ਜਾਲ ਵਿੱਚ ਫਸ ਜਾਂਦਾ ਹੈ, ਉਵੇਂ ਹੀ ਸੰਸਾਰ ਦੇ ਸਾਰੇ ਲੋਕ ਹੰਕਾਰ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹਨ।',
      en: 'Without wisdom and discrimination, humans are like blind men with eyes. Just as a mighty elephant gets caught in a flimsy paper-trap due to lack of discrimination, all souls in this world are bound by their own ego and illusions. How many can I make understand?',
    },
    wordMeanings: {
      hi: [
        { word: 'गज (Gaz)', meaning: 'हाथी' },
        { word: 'फन्दे (Phande)', meaning: 'जाल / गड्ढे / बंधन' },
        { word: 'अकिल बिहूना (Akil bihoona)', meaning: 'विवेकहीन / बुद्धि से रहित' }
      ],
      pb: [
        { word: 'ਗਜ (Gaz)', meaning: 'ਹਾਥੀ' },
        { word: 'ਫਨ੍ਦੇ (Phande)', meaning: 'ਜਾਲ' },
        { word: 'ਅਕਿਲ ਬਿਹੂਨਾ (Akil bihoona)', meaning: 'ਗਿਆਨ-ਹੀਣ' }
      ],
      en: [
        { word: 'Gaz', meaning: 'Elephant' },
        { word: 'Phande', meaning: 'Trap / Pit / Fetter' },
        { word: 'Akil bihoona', meaning: 'Undiscriminating / Lacking wisdom' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी अपनी अपार आत्मिक शक्तियों को भूलकर केवल तुच्छ सांसारिक वासनाओं और अहंकार के फंदे में फंसा बैठा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਵੀ ਕਿਸੇ ਭਰਮ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹਾਂ?',
      en: 'Forgetful of my vast spiritual heritage, am I letting myself be trapped by trivial material desires and emotional attachments?'
    },
    practicalApplication: {
      hi: 'मदमस्त हाथी की भांति वासनाओं के जाल में न फंसे; विवेक की आँखें खोलकर धोखे के गड्ढों से दूर रहें।',
      pb: 'ਵਾਸਨਾਵਾਂ ਦੇ ਜਾਲ ਤੋਂ ਬਚੋ ਅਤੇ ਸਾਵਧਾਨ ਰਹੋ।',
      en: 'Do not follow mindless temptations; keep the eye of spiritual discrimination open to avoid traps.'
    },
    samarpanPrayer: {
      hi: 'हे विवेक-दाता सतगुरु साहेब! मेरे अज्ञान के चश्मे को हटाकर मुझे जाल और मुक्ति के मार्ग का स्पष्ट अंतर समझाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੁਕਤੀ ਦਾ ਰਸਤਾ ਦਿਖਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Wise Guide! Dissolve the veil of my mental blindness; show me the clear distinction between bondage and freedom. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-16',
    number: 1646,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १६',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੬',
      en: 'Bhram-Vidhvans Ko Ang - 16',
    },
    text: {
      hi: 'लिखा पढ़ी में सब पड़े, यह गुन तजै न कोय।\nसबै पड़े भ्रम जाल में, डारा यह जिय खोय।।',
      pb: 'ਲਿਖਾ ਪੜ੍ਹੀ ਮੇਂ ਸਬ ਪੜੇ, ਯਹ ਗੁਨ ਤਜੈ ਨ ਕੋਯ।\nਸਬੈ ਪੜੇ ਭ੍ਰਮ ਜਾਲ ਮੇਂ, ਡਾਰਾ ਯਹ ਜਿਯ ਖੋਯ।।',
      en: 'Likha padhee mein sab pade, yah gun tajai na koy. Sabai pade bhram jaal mein, daara yah jiy khoy..',
    },
    transliteration: 'Likha padhee mein sab pade, yah gun tajai na koy. Sabai pade bhram jaal mein, daara yah jiy khoy.',
    bhavarth: {
      hi: 'ये सांसारिक लोग नाना प्रकार के ग्रंथों की भ्रमात्मक लिखी-पढ़ी बातों में पड़े हुए हैं, इस पक्षपात को कोई नहीं त्यागता। अतएव सबने भ्रम के जाल में पड़कर अपने अंतर के ज्ञान को खो डाला है।',
      pb: 'ਸਾਰੇ ਲੋਕ ਕਿਤਾਬੀ ਗਿਆਨ ਅਤੇ ਲਿਖਤੀ ਗੱਲਾਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹਨ, ਇਸ ਹੰਕਾਰ ਨੂੰ ਕੋਈ ਨਹੀਂ ਛੱਡਦਾ। ਸਾਰੇ ਭਰਮ ਵਿੱਚ ਪੈ ਕੇ ਆਪਣੀ ਆਤਮਾ ਦਾ ਅਸਲ ਗਿਆਨ ਗੁਆ ਚੁੱਕੇ ਹਨ।',
      en: 'Worldly scholars remain trapped in the theoretical arguments of scriptures; nobody abandons sectarian bias. Entangled in the web of bookish concepts, they have lost the direct, living experience of inner truth.',
    },
    wordMeanings: {
      hi: [
        { word: 'लिखा पढ़ी (Likha padhee)', meaning: 'किताबी ज्ञान / केवल शास्त्रार्थ' },
        { word: 'गुन (Gun)', meaning: 'पक्षपात / हठ / अहंकार' },
        { word: 'जिय (Jiy)', meaning: 'जीवात्मा / अंतरात्मा का ज्ञान' }
      ],
      pb: [
        { word: 'ਲਿਖਾ ਪੜ੍ਹੀ (Likha padhee)', meaning: 'ਕਿਤਾਬੀ ਪੜ੍ਹਾਈ' },
        { word: 'ਗੁਨ (Gun)', meaning: 'ਹੰਕਾਰ / ਹਠ' },
        { word: 'ਜਿਯ (Jiy)', meaning: 'ਆਤਮਾ ਦਾ ਗਿਆਨ' }
      ],
      en: [
        { word: 'Likha padhee', meaning: 'Bookish learning / Intellectual arguments' },
        { word: 'Gun', meaning: 'Sectarian bias / Stubborn ego' },
        { word: 'Jiy', meaning: 'Spirit / Inner self-knowledge' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा ज्ञान केवल धार्मिक ग्रंथों को रटने और बहस करने तक ही सीमित है, या मैंने अंतःकरण में सतगुरु कबीर साहेब के शब्द को महसूस किया है?',
      pb: 'ਕੀ ਮੇਰੀ ਪੜ੍ਹਾਈ ਸਿਰਫ਼ ਬਹਿਸ ਕਰਨ ਲਈ ਹੈ?',
      en: 'Is my spiritual knowledge merely an academic exercise of quotes and debates, or have I experienced the quiet transformation of the soul?'
    },
    practicalApplication: {
      hi: 'कोरे शुष्क ज्ञान और शास्त्रार्थ की बहसबाजी को छोड़ें; शांत मन से ध्यान और नाम-सुमिरन की व्यावहारिक साधना करें।',
      pb: 'ਕਿਤਾਬੀ ਬਹਿਸਾਂ ਛੱਡ ਕੇ ਭਗਤੀ ਕਰੋ।',
      en: 'Set aside dry theological arguments; devote your energy to practical, quiet meditation on the Word.'
    },
    samarpanPrayer: {
      hi: 'हे वास्तविक शब्द प्रदाता सतगुरु! मुझे कोरे किताबी ज्ञान के जाल से मुक्त कर प्रत्यक्ष अनुभव का रस प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਿਤਾਬੀ ਗਿਆਨ ਦੇ ਹੰਕਾਰ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Living Master! Rescue me from the trap of dry book-learning; bathe my soul in the direct nectar of experience. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-17',
    number: 1647,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १७',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੭',
      en: 'Bhram-Vidhvans Ko Ang - 17',
    },
    text: {
      hi: 'तुरक मसीत देहर हिन्दू, आप आप को धाय।\nअलख पुरुष घट भीतरे, ताका पार न पाय।।',
      pb: 'ਤੁਰਕ ਮਸੀਤ ਦੇਹਰ ਹਿਨ੍ਦੂ, ਆਪ ਆਪ ਕੋ ਧਾਯ।\nਅਲਖ ਪੁਰੁਸ਼ ਘਟ ਭੀਤਰੇ, ਤਾਕਾ ਪਾਰ ਨ ਪਾਯ।।',
      en: 'Turak maseet dehar hindoo, aap aap ko dhaay. Alakh purush ghat bheetare, taaka paar na paay..',
    },
    transliteration: 'Turak maseet dehar hindoo, aap aap ko dhaay. Alakh purush ghat bheetare, taaka paar na paay.',
    bhavarth: {
      hi: 'मुसलमान लोग मस्जिद में और हिन्दू लोग देवालय में ‘अपना-अपना\' करके दौड़ते हैं, परंतु अविनाशी विषय रहित चैतन्य पुरुष तो हृदय के भीतर ही स्थित है, उसका भेद कोई नहीं जानता।',
      pb: 'ਮੁਸਲਮਾਨ ਮਸਜਿਦ ਵੱਲ ਅਤੇ ਹਿੰਦੂ ਮੰਦਰ ਵੱਲ ਆਪਣੇ-ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ ਦੌੜਦੇ ਹਨ, ਪਰ ਅਲੱਖ ਪੁਰਖ (ਪ੍ਰਮਾਤਮਾ) ਤਾਂ ਹਿਰਦੇ ਦੇ ਅੰਦਰ ਹੀ ਬੈਠਾ ਹੈ। ਉਸਦਾ ਭੇਦ ਕੋਈ ਨਹੀਂ ਜਾਣਦਾ।',
      en: 'The Muslim runs to the mosque, and the Hindu runs to the temple, each claiming God for themselves. Yet the invisible, supreme Consciousness dwells quietly inside the heart-temple; nobody discovers its true inner path.',
    },
    wordMeanings: {
      hi: [
        { word: 'मसीत (Maseet)', meaning: 'मस्जिद / नमाज़ पढ़ने का स्थान' },
        { word: 'देहर (Dehar)', meaning: 'मंदिर / देवालय' },
        { word: 'अलख पुरुष (Alakh purush)', meaning: 'अविनाशी परमात्मा / सतपुरुष' },
        { word: 'घट (Ghat)', meaning: 'हृदय / अंतःकरण' }
      ],
      pb: [
        { word: 'ਮਸੀਤ (Maseet)', meaning: 'ਮਸਜਿਦ' },
        { word: 'ਦੇਹਰ (Dehar)', meaning: 'ਮੰਦਰ' },
        { word: 'ਅਲਖ ਪੁਰੁਸ਼ (Alakh purush)', meaning: 'ਅਬਿਨਾਸ਼ੀ ਪ੍ਰਮਾਤਮਾ' },
        { word: 'ਘਟ (Ghat)', meaning: 'ਹਿਰਦਾ' }
      ],
      en: [
        { word: 'Maseet', meaning: 'Mosque' },
        { word: 'Dehar', meaning: 'Temple / Shrine' },
        { word: 'Alakh purush', meaning: 'The unperceived, supreme Consciousness' },
        { word: 'Ghat', meaning: 'The inner heart / Vessel' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भी सांप्रदायिक दीवारों और मतभेदों में उलझकर परमात्मा को किसी खास इमारत में कैद मान रहा हूँ, जबकि वे मेरे घट में ही विराजमान हैं?',
      pb: 'ਕੀ ਮੈਂ ਰੱਬ ਨੂੰ ਹਿੰਦੂ-ਮੁਸਲਮਾਨ ਦੀਆਂ ਕੰਧਾਂ ਵਿੱਚ ਵੰਡਿਆ ਹੋਇਆ ਹੈ?',
      en: 'Have I confined the omnipresent Spirit to sectarian boxes and buildings, missing the divine presence in my own heart?'
    },
    practicalApplication: {
      hi: 'धार्मिक कट्टरता और भेद-भाव का त्याग करें; सभी संप्रदायों के प्रति मैत्री भाव रखकर अपनी साधना को अंतर्मुखी बनाएँ।',
      pb: 'ਧਾਰਮਿਕ ਵਿਤਕਰੇ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਭਗਤੀ ਕਰੋ।',
      en: 'Dissolve all sectarian prejudices; cultivate universal brotherhood and seek the Divine in silent meditation.'
    },
    samarpanPrayer: {
      hi: 'हे अलख पुरुष! मुझे सांप्रदायिक दीवारों से ऊपर उठाकर अपने हृदय-मंदिर में आपके पावन दर्शन करने की पात्रता दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਅਲੱਖ ਪੁਰਖ! ਮੈਨੂੰ ਸੱਚੀ ਸਾਂਝੀਵਾਲਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Invisible Lord! Lift me above sectarian divisions; let me realize Your quiet presence in the temple of my soul. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-18',
    number: 1648,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १८',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੮',
      en: 'Bhram-Vidhvans Ko Ang - 18',
    },
    text: {
      hi: 'जप तप दीखै थोथरा, तीरथ ब्रत विश्वास।\nसूवा सेमल सेइया, यों जग चला निरास।।',
      pb: 'ਜਪ ਤਪ ਦੀਖੈ ਥੋਥਰਾ, ਤੀਰਥ ਬ੍ਰਤ ਵਿਸ਼੍ਵਾਸ।\nਸੂਵਾ ਸੇਮਲ ਸੇਇਯਾ, ਯੋਂ ਜਗ ਚਲਾ ਨਿਰਾਸ।।',
      en: 'Jap tap deekhai thothara, teerath brat vishvaas. Soova semal seiya, yon jag chala niraas..',
    },
    transliteration: 'Jap tap deekhai thothara, teerath brat vishvaas. Soova semal seiya, yon jag chala niraas.',
    bhavarth: {
      hi: 'नाम-जप, पंचाग्नि-तापन आदि तप, तीर्थ, उपवास-रोजा आदि सब धर्म-कर्म छिछले दिखाई पड़ते हैं, जैसे सेमल के फल का सेवन करके सुग्गा निराश हो जाता है, वैसे ही उपर्युक्त आडंबरों में फंसे हुए लोग निराश होते हैं।',
      pb: 'ਬਾਹਰੀ ਜਪ-ਤਪ, ਤੀਰਥ ਯਾਤਰਾਵਾਂ ਤੇ ਵਰਤ ਰੱਖਣ ਦੇ ਨੇਮ ਸਭ ਖੋਖਲੇ ਹਨ। ਜਿਵੇਂ ਤੋਤਾ ਸੇਮਲ ਦੇ ਸੋਹਣੇ ਫਲ ਦੀ ਆਸ ਵਿੱਚ ਬੈਠਦਾ ਹੈ ਪਰ ਅੰਤ ਵਿੱਚ ਰੂੰ ਨਿਕਲਣ ਤੇ ਨਿਰਾਸ਼ ਹੁੰਦਾ ਹੈ, ਉਵੇਂ ਹੀ ਇਹ ਸੰਸਾਰ ਵੀ ਨਿਰਾਸ਼ ਹੁੰਦਾ ਹੈ।',
      en: 'Mechanical chants, torturous penances, pilgrimages, and dry fasts are hollow. Like a parrot waiting expectantly for the beautiful cotton-pod (semal) fruit only to find tasteless fluff, those devoted to outer shows depart from this life empty-handed.',
    },
    wordMeanings: {
      hi: [
        { word: 'थोथरा (Thothara)', meaning: 'खोखला / खाली / निरर्थक' },
        { word: 'सूवा (Soova)', meaning: 'तोता' },
        { word: 'सेमल (Semal)', meaning: 'सेमल का वृक्ष (जिसका फल पकने पर केवल रुई उड़ती है)' },
        { word: 'सेइया (Seiya)', meaning: 'प्रतीक्षा करना / सेवन करना' }
      ],
      pb: [
        { word: 'ਥੋਥਰਾ (Thothara)', meaning: 'ਖੋਖਲਾ / ਫੋਕਾ' },
        { word: 'ਸੂਵਾ (Soova)', meaning: 'ਤੋਤਾ' },
        { word: 'ਸੇਮਲ (Semal)', meaning: 'ਸੇਮਲ ਦਾ ਰੁੱਖ' },
        { word: 'ਸੇਇਯਾ (Seiya)', meaning: 'ਆਸ ਰੱਖਣੀ' }
      ],
      en: [
        { word: 'Thothara', meaning: 'Hollow / Empty / Devoid of essence' },
        { word: 'Soova', meaning: 'Parrot' },
        { word: 'Semal', meaning: 'Silk-cotton tree (yields tasteless cotton instead of edible fruit)' },
        { word: 'Seiya', meaning: 'Served / Expected / Clung to' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी धार्मिकता भी सेमल के सुंदर पर खोखले फल की भांति केवल आकर्षक बाहरी आडंबर है, जिसमें अंततः मुझे निराशा ही मिलेगी?',
      pb: 'ਕੀ ਮੈਂ ਕਿਸੇ ਨਿਰਾਸ਼ਾਜਨਕ ਰਸਤੇ \'ਤੇ ਤਾਂ ਨਹੀਂ ਚੱਲ ਰਿਹਾ?',
      en: 'Am I running after attractive but hollow religious rituals, like a parrot clinging to the silk-cotton flower only to find empty fluff?'
    },
    practicalApplication: {
      hi: 'दिखावे की साधना को छोड़कर, अंतरात्मा में सत्यनाम के शाश्वत रस का अनुभव करें जो कभी निराश नहीं करता।',
      pb: 'ਸੱਚੀ ਤੇ ਅੰਦਰੂਨੀ ਭਗਤੀ ਦਾ ਅਭਿਆਸ ਕਰੋ।',
      en: 'Shun attractive but hollow displays of piety; feed your soul on the sweet, living nectar of the inner Word.'
    },
    samarpanPrayer: {
      hi: 'हे शाश्वत फल दाता सतगुरु साहेब! मुझे इस संसार के खोखले सेमल-फलों से बचाकर अपनी पावन नाम-भक्ति का अमर फल प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੱਚੇ ਆਤਮਿਕ ਸੁੱਖ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master of real nectar! Rescue me from the empty attractions of showy rituals; fill my heart with Your sweet, holy Word. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'bhram-19',
    number: 1649,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'भ्रम-विध्वंस को अंग - १९',
      pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ - ੧੯',
      en: 'Bhram-Vidhvans Ko Ang - 19',
    },
    text: {
      hi: 'बिना वसीले चाकरी, बिना बुद्धि की देह।\nबिना ज्ञान का जोगना, फिरै लगाये खेह।।',
      pb: 'ਬਿਨਾ ਵਸੀਲੇ ਚਾਕਰੀ, ਬਿਨਾ ਬੁਦ੍ਧਿ ਕੀ ਦੇਹ।\nਬਿਨਾ ਗ੍ਯਾਨ ਕਾ ਜੋਗਨਾ, ਫਿਰੈ ਲਗਾਯੇ ਖੇਹ।।',
      en: 'Bina vaseele chaakee, bina buddhi kee deh. Bina gyaan ka jogana, phirai lagaaye kheh..',
    },
    transliteration: 'Bina vaseele chaakee, bina buddhi kee deh. Bina gyaan ka jogana, phirai lagaaye kheh.',
    bhavarth: {
      hi: 'जिस प्रकार बिना सहायता के नौकरी नहीं प्राप्त होती, बिना बुद्धि की यह मानव देह दो कौड़ी की है। उसी प्रकार बिना स्वरूप-ज्ञान के जोगी की तरह विचरण करना धूल लगाकर घूमना मात्र है।',
      pb: 'ਜਿਵੇਂ ਬਿਨਾਂ ਕਿਸੇ ਸਿਫ਼ਾਰਸ਼ (ਵਸੀਲੇ) ਦੇ ਨੌਕਰੀ ਨਹੀਂ ਮਿਲਦੀ ਅਤੇ ਬੁੱਧੀ ਤੋਂ ਬਿਨਾਂ ਸਰੀਰ ਬੇਕਾਰ ਹੈ, ਉਵੇਂ ਹੀ ਆਤਮਿਕ ਗਿਆਨ ਤੋਂ ਬਿਨਾਂ ਜੋਗੀ ਬਣ ਕੇ ਸਰੀਰ \'ਤੇ ਸੁਆਹ ਮਲ ਕੇ ਘੁੰਮਣਾ ਵਿਅਰਥ ਹੈ।',
      en: 'Just as employment cannot be secured without a proper recommendation, and a physical body without intellect is worthless—a yogi wandering about with ash smeared on their body without direct self-knowledge is performing a futile mime.',
    },
    wordMeanings: {
      hi: [
        { word: 'वसीले (Vaseele)', meaning: 'मदद / सहारा / जरिया / सिफारिश' },
        { word: 'चाकरी (Chaakee)', meaning: 'नौकरी / सेवा कार्य' },
        { word: 'जोगना (Jogana)', meaning: 'साधु / योगी भेष धारण करना' },
        { word: 'खेह (Kheh)', meaning: 'धूल / राख / भस्म' }
      ],
      pb: [
        { word: 'ਵਸੀਲੇ (Vaseele)', meaning: 'ਸਹਾਰਾ / ਸਿਫ਼ਾਰਸ਼' },
        { word: 'ਚਾਕਰੀ (Chaakee)', meaning: 'ਨੌਕਰੀ' },
        { word: 'ਜੋਗਨਾ (Jogana)', meaning: 'ਜੋਗੀ / ਸਾਧੂ' },
        { word: 'ਖੇਹ (Kheh)', meaning: 'ਸੁਆਹ / ਭਸਮ' }
      ],
      en: [
        { word: 'Vaseele', meaning: 'Helper / Means / Connection / Recommendation' },
        { word: 'Chaakee', meaning: 'Service / Job' },
        { word: 'Jogana', meaning: 'Ascetic monk / Yogi role' },
        { word: 'Kheh', meaning: 'Ashes / Dust / Soil' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा वैराग्य भी केवल सिर मुंडवाने, भस्म लगाने या विशिष्ट भेष धारण करने तक ही सीमित है, या मैंने अंतरात्मा में सत्य का साक्षात्कार किया है?',
      pb: 'ਕੀ ਮੈਂ ਵੀ ਸਿਰਫ਼ ਭੇਖ ਬਣਾ ਕੇ ਘੁੰਮ ਰਿਹਾ ਹਾਂ?',
      en: 'Is my spiritual dedication confined to smearing ash, wearing specific robes, or shaving my head, without actual inner conversion?'
    },
    practicalApplication: {
      hi: 'बाहरी आडम्बरों और भेष बदलने की क्रियाओं को छोड़ें; शांत होकर अपने मन को सतगुरु की निर्मल शरण में समर्पित करें।',
      pb: 'ਭੇਖ ਛੱਡ ਕੇ ਸੱਚੇ ਦਿਲ ਨਾਲ ਭਗਤੀ ਕਰੋ।',
      en: 'Renounce theatrical role-playing; dedicate your attention to silent, conscious, inward-seeking surrender.'
    },
    samarpanPrayer: {
      hi: 'हे सच्चिदानंद सतगुरु साहेब! मुझे बाहरी वेश-भूषा के आडंबरों से मुक्त कर अपने चरणों की सच्ची भक्ति और आंतरिक ज्ञान प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਸਲ ਆਤਮਿਕ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Lord! Free me from superficial displays of renunciation; bless me with genuine inner realization and love. Saheb Bandgi Saheb!'
    },
    quiz: []
  }
];
