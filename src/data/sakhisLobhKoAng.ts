import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_LOBH_KO_ANG: Sakhi[] = [
  {
    id: 'lobh-1',
    number: 1527,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'लोभ को अंग - १',
      pb: 'ਲੋਭ ਕੋ ਅੰਗ - ੧',
      en: 'Lobh Ko Ang - 1',
    },
    text: {
      hi: 'बहुत जतन करि कीजिये, सब फल जाय नसाय।\nकबीर संचै सूम धन, अन्त चोर ले जाय।।',
      pb: 'ਬਹੁਤ ਜਤਨ ਕਰਿ ਕੀਜੀਏ, ਸਬ ਫਲ ਜਾਇ ਨਸਾਇ।\nਕਬੀਰ ਸੰਚੈ ਸੂਮ ਧਨ, ਅੰਤ ਚੋਰ ਲੈ ਜਾਇ।।',
      en: 'Bahut jatan kari keejiye, sab phal jay nasay. Kabir sanchai soom dhan, ant chor le jay..',
    },
    transliteration: 'Bahut jatan kari keejiye, sab phal jay nasay. Kabir sanchai soom dhan, ant chor le jay.',
    bhavarth: {
      hi: 'बहुत यत्न-उद्योग से संचित किए गए धन का सब फल अंत में नष्ट ही हो जाता है। सतगुरु कबीर साहेब फरमाते हैं कि कंजूस व्यक्ति लोभ करके जीवन-भर धन जोड़ता रहता है और अंत में उस धन को चोर-लुटेरे ले जाते हैं।',
      pb: 'ਬਹੁਤ ਜਤਨ ਕਰ ਕੇ ਇਕੱਠੇ ਕੀਤੇ ਧਨ ਦਾ ਸਾਰਾ ਫਲ ਅੰਤ ਵਿੱਚ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਕੰਜੂਸ ਮਨੁੱਖ ਲੋਭ ਕਰ ਕੇ ਉਮਰ ਭਰ ਧਨ ਜੋੜਦਾ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਅੰਤ ਵਿੱਚ ਉਸ ਧਨ ਨੂੰ ਚੋਰ-ਡਾਕੂ ਲੈ ਜਾਂਦੇ ਹਨ।',
      en: 'All the fruit of wealth gathered through painstaking effort is ultimately lost. Satguru Kabir Saheb proclaims the miser hoards riches out of greed all his life, only for thieves and plunderers to carry it away in the end.',
    },
    wordMeanings: {
      hi: [
        { word: 'जतन (Jatan)', meaning: 'यत्न / प्रयास / उपाय' },
        { word: 'संचै (Sanchai)', meaning: 'संग्रह करना / जोड़ना' },
        { word: 'सूम (Soom)', meaning: 'कंजूस / लोभी' }
      ],
      pb: [
        { word: 'ਜਤਨ (Jatan)', meaning: 'ਯਤਨ / ਕੋਸ਼ਿਸ਼' },
        { word: 'ਸੰਚੈ (Sanchai)', meaning: 'ਇਕੱਠਾ ਕਰਨਾ' },
        { word: 'ਸੂਮ (Soom)', meaning: 'ਕੰਜੂਸ' }
      ],
      en: [
        { word: 'Jatan', meaning: 'Painstaking effort / Industry' },
        { word: 'Sanchai', meaning: 'To hoard / Accumulate' },
        { word: 'Soom', meaning: 'Miser / Greedy person' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सांसारिक धन जोड़ने में ही अपना अमूल्य समय व्यतीत कर रहा हूँ जो अंततः यहीं छूट जाएगा?',
      pb: 'ਕੀ ਮੈਂ ਕੇਵਲ ਧਨ ਜੋੜਨ ਵਿੱਚ ਲੱਗਾ ਹੋਇਆ ਹਾਂ ਜੋ ਅੰਤ ਵਿੱਚ ਇੱਥੇ ਹੀ ਰਹਿ ਜਾਵੇਗਾ?',
      en: 'Am I squandering my precious life accumulating perishable wealth that will ultimately be left behind?'
    },
    practicalApplication: {
      hi: 'अपने न्यायपूर्वक कमाए धन का सदुपयोग सेवा, सत्संग और परमार्थ कर्मों में करें।',
      pb: 'ਆਪਣੀ ਕਮਾਈ ਦਾ ਸਦਉਪਯੋਗ ਪਰਮਾਰਥ ਤੇ ਸੇਵਾ ਵਿੱਚ ਕਰੋ।',
      en: 'Utilize your hard-earned wealth for selfless service, holy fellowship, and noble deeds.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे लोभ और तृष्णा से बचाकर संतोष और निष्काम भक्ति का वरदान दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਲੋਭ ਤੋਂ ਬਚਾ ਕੇ ਸੰਤੋਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Save me from greed and discontent, and bless me with contentment and selfless devotion.'
    },
    quiz: []
  },
  {
    id: 'lobh-2',
    number: 1528,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'लोभ को अंग - २',
      pb: 'ਲੋਭ ਕੋ ਅੰਗ - ੨',
      en: 'Lobh Ko Ang - 2',
    },
    text: {
      hi: 'बीर औंधी खोपड़ी, कबहूं धापै नांहि।\nतीन लोक की सम्पदा, कब आवै घर मांहि।।',
      pb: 'ਬੀਰ ਔਂਧੀ ਖੋਪੜੀ, ਕਬਹੂੰ ਧਾਪੈ ਨਾਂਹਿ।\nਤੀਨ ਲੋਕ ਕੀ ਸਮ੍ਪਦਾ, ਕਬ ਆਵੈ ਘਰ ਮਾਂਹਿ।।',
      en: 'Beer aundhee khoparee, kabahoon dhaapai naanti. Teen lok kee sampada, kab aavai ghar maanti..',
    },
    transliteration: 'Beer aundhee khoparee, kabahoon dhaapai naanti. Teen lok kee sampada, kab aavai ghar maanti.',
    bhavarth: {
      hi: 'मनुष्य की यह उल्टी खोपड़ी इस प्रकार की है, जो कभी भी धन से तृप्त नहीं होती, बल्कि इसकी तृष्णा और भी बढ़ती जाती है। लोभी व्यक्ति हर समय यही सोचता रहता है कि तीनों लोकों की संपत्ति कब हमारे घर आ जाए।',
      pb: 'ਮਨੁੱਖ ਦੀ ਇਹ ਉਲਟੀ ਖੋਪੜੀ ਕਦੇ ਵੀ ਧਨ ਨਾਲ ਰੱਜਦੀ ਨਹੀਂ, ਸਗੋਂ ਇਸ ਦੀ ਤ੍ਰਿਸ਼ਨਾ ਹੋਰ ਵਧਦੀ ਜਾਂਦੀ ਹੈ। ਲੋਭੀ ਮਨੁੱਖ ਹਰ ਵੇਲੇ ਇਹੋ ਸੋਚਦਾ ਰਹਿੰਦਾ ਹੈ ਕਿ ਤਿੰਨਾਂ ਲੋਕਾਂ ਦੀ ਦੌਲਤ ਕਦੋਂ ਸਾਡੇ ਘਰ ਆ ਜਾਵੇ।',
      en: 'Human desire is like an inverted, insatiable skull that is never satisfied by wealth; its craving only multiplies. The greedy person constantly muses: When will the riches of all three worlds belong to me?'
    },
    wordMeanings: {
      hi: [
        { word: 'औंधी (Aundhee)', meaning: 'उल्टी / विकृत' },
        { word: 'धापै (Dhaapai)', meaning: 'तृप्त होना / अघाना' },
        { word: 'सम्पदा (Sampada)', meaning: 'संपत्ति / धन-दौलत' }
      ],
      pb: [
        { word: 'ਔਂਧੀ (Aundhee)', meaning: 'ਉਲਟੀ' },
        { word: 'ਧਾਪੈ (Dhaapai)', meaning: 'ਰੱਜਣਾ / ਤ੍ਰਿਪਤ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Aundhee', meaning: 'Inverted / Perverted' },
        { word: 'Dhaapai', meaning: 'To be satisfied / Satiated' },
        { word: 'Sampada', meaning: 'Wealth / Riches' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन सांसारिक वस्तुओं के पीछे भागकर अतृप्त तृष्णा की आग में जल रहा है?',
      pb: 'ਕੀ ਮੇਰੀ ਤ੍ਰਿਸ਼ਨਾ ਕਦੇ ਖ਼ਤਮ ਹੋ ਰਹੀ ਹੈ ਜਾਂ ਵਧਦੀ ਹੀ ਜਾ ਰਹੀ ਹੈ?',
      en: 'Is my mind caught in an endless loop of craving where more wealth only breeds greater desire?'
    },
    practicalApplication: {
      hi: 'जो प्राप्त है उसे पर्याप्त मानकर विचारपूर्वक संतोष धन का अभ्यास करें।',
      pb: 'ਜੋ ਮਿਲਿਆ ਹੈ ਉਸ ਵਿੱਚ ਸੰਤੋਖ ਰੱਖੋ।',
      en: 'Practice contentment with what you have, recognizing that contentment is the true treasure.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरी अनियंत्रित तृष्णा को शांत कर मुझे सहज राम-नाम का अमृत प्रदान करें।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੇਰੀ ਤ੍ਰਿਸ਼ਨਾ ਨੂੰ ਸ਼ਾਂਤ ਕਰੋ।',
      en: 'O Lord! Calm my restless desires and quench my soul with the nectar of Your Holy Name.'
    },
    quiz: []
  },
  {
    id: 'lobh-3',
    number: 1529,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'लोभ को अंग - ३',
      pb: 'ਲੋਭ ਕੋ ਅੰਗ - ੩',
      en: 'Lobh Ko Ang - 3',
    },
    text: {
      hi: 'जब मन लागा लोभ सों, गया विषय में भोय।\nकहैं कबीर विचार के, केहि प्रकार धन होय।।',
      pb: 'ਜਬ ਮਨ ਲਾਗਾ ਲੋਭ ਸੋਂ, ਗਇਆ ਵਿਸ਼ੈ ਮੈਂ ਭੋਇ।\nਕਹੈਂ ਕਬੀਰ ਵਿਚਾਰ ਕੇ, ਕੇਹਿ ਪ੍ਰਕਾਰ ਧਨ ਹੋਇ।।',
      en: 'Jab man laaga lobh son, gaya vishai mein bhoy. Kahain kabeer vichaar ke, kehi prakaar dhan hoy..',
    },
    transliteration: 'Jab man laaga lobh son, gaya vishai mein bhoy. Kahain kabeer vichaar ke, kehi prakaar dhan hoy.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब विचारकर समझाते हुए कहते हैं कि जब मनुष्य का मन धन के लोभ में आसक्त हो जाता है, तो वह विषयों के चक्कर में फंसकर स्वयं को विस्मृत कर दिन-रात बस यही सोचता रहता है कि किस प्रकार धन का संग्रह हो।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਵੀਚਾਰ ਕੇ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਜਦੋਂ ਮਨੁੱਖ ਦਾ ਮਨ ਲੋਭ ਵਿੱਚ ਫਸ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਉਹ ਵਿਕਾਰਾਂ ਵਿੱਚ ਡੁੱਬ ਕੇ ਦਿਨ-ਰਾਤ ਬਸ ਇਹੋ ਸੋਚਦਾ ਰਹਿੰਦਾ ਹੈ ਕਿ ਕਿਸ ਤਰ੍ਹਾਂ ਧਨ ਇਕੱਠਾ ਕੀਤਾ ਜਾਵੇ।',
      en: 'Kabir reflects and explains that when a person\'s mind becomes addicted to greed, it sinks into worldly attachments, forgetting self-realization and endlessly obsessing over how to acquire more riches.'
    },
    wordMeanings: {
      hi: [
        { word: 'भोय (Bhoy)', meaning: 'डूबना / लीन होना' },
        { word: 'केहि प्रकार (Kehi prakaar)', meaning: 'किस तरह से / किस उपाय से' }
      ],
      pb: [
        { word: 'ਭੋਇ (Bhoy)', meaning: 'ਡੁੱਬ ਜਾਣਾ' },
        { word: 'ਕੇਹਿ ਪ੍ਰਕਾਰ (Kehi prakaar)', meaning: 'ਕਿਸ ਤਰੀਕੇ ਨਾਲ' }
      ],
      en: [
        { word: 'Bhoy', meaning: 'Sunk / Absorbed' },
        { word: 'Kehi prakaar', meaning: 'By what means / By what method' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा चिंतन दिन-रात केवल भौतिक धन कमाने में ही अटका रहता है या परमात्मा के सिमरन में भी समय लगता है?',
      pb: 'ਕੀ ਮੇਰਾ ਧਿਆਨ ਦਿਨ-ਰਾਤ ਕੇਵਲ ਮਾਇਆ ਵਿੱਚ ਹੀ ਲੱਗਾ ਰਹਿੰਦਾ ਹੈ?',
      en: 'Is my thought process perpetually occupied with earning worldly wealth, leaving no room for Divine remembrance?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन कुछ समय लोभ के विचारों से हटकर आत्म-चिंतन और गुरुवाणी के स्वाध्याय में लगाएं।',
      pb: 'ਰੋਜ਼ਾਨਾ ਕੁਝ ਸਮਾਂ ਕੱਢ ਕੇ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Divert a portion of your daily focus away from material gain toward inner reflection and sacred study.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरा मन भौतिक प्रपंचों से हटकर आपके अमर नाम-धन में लीन हो।',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਆਪਣੇ ਨਾਮ ਨਾਲ ਜੋੜੋ।',
      en: 'O Satguru! Detach my mind from worldly greed and anchor it in Your eternal wealth of Holy Name.'
    },
    quiz: []
  },
  {
    id: 'lobh-4',
    number: 1530,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'लोभ को अंग - ४',
      pb: 'ਲੋਭ ਕੋ ਅੰਗ - ੪',
      en: 'Lobh Ko Ang - 4',
    },
    text: {
      hi: 'सूम थैली अरु श्वान भग, दोनों एक समान।\nघालत में सुख ऊपजै, काढ़त निकसै प्रान।।',
      pb: 'ਸੂਮ ਥੈਲੀ ਅਰੁ ਸ਼ਵਾਨ ਭਗ, ਦੋਨੋਂ ਏਕ ਸਮਾਨ।\nਘਾਲਤ ਮੈਂ ਸੁਖ ਊਪਜੈ, ਕਾਢਤ ਨਿਕਸੈ ਪ੍ਰਾਨ।।',
      en: 'Soom thailee aru shwaan bhag, dono ek samaan. Ghaalat mein sukh oopjai, kaadhat niksai praan..',
    },
    transliteration: 'Soom thailee aru shwaan bhag, dono ek samaan. Ghaalat mein sukh oopjai, kaadhat niksai praan.',
    bhavarth: {
      hi: 'लोभी और कंजूस व्यक्ति की थैली तथा श्वान की योनि की प्रकृति—ये दोनों ही एक समान हैं। लोभी और कंजूस व्यक्ति को अपनी थैली में धन डालते हुए तो बहुत ही सुख मिलता है, परंतु उसमें से बाहर निकालते हुए ऐसा लगता है, जैसे अब उसके प्राण ही निकल जाएंगे।',
      pb: 'ਕੰਜੂਸ ਦੀ ਧਨ-ਥੈਲੀ ਦਾ ਸੁਭਾਅ ਅਜੀਬ ਹੈ। ਉਸ ਵਿੱਚ ਧਨ ਪਾਉਂਦੇ ਹੋਏ ਤਾਂ ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਹੁੰਦੀ ਹੈ, ਪਰ ਜਦੋਂ ਉਸ ਵਿੱਚੋਂ ਧਨ ਬਾਹਰ ਕੱਢਣਾ ਪਵੇ ਤਾਂ ਲੱਗਦਾ ਹੈ ਜਿਵੇਂ ਪ੍ਰਾਣ ਹੀ ਨਿਕਲ ਜਾਣਗੇ।',
      en: 'The purse of a miser operates on an agonizing nature: putting wealth into it brings great delight, but spending or giving it away feels as painful as losing life itself.'
    },
    wordMeanings: {
      hi: [
        { word: 'घालत (Ghaalat)', meaning: 'डालने पर / जमा करने पर' },
        { word: 'काढ़त (Kaadhat)', meaning: 'निकालने पर / खर्च करने पर' }
      ],
      pb: [
        { word: 'ਘਾਲਤ (Ghaalat)', meaning: 'ਪਾਉਣ ਵੇਲੇ' },
        { word: 'ਕਾਢਤ (Kaadhat)', meaning: 'ਕੱਢਣ ਵੇਲੇ' }
      ],
      en: [
        { word: 'Ghaalat', meaning: 'While putting in / Depositing' },
        { word: 'Kaadhat', meaning: 'While taking out / Spending' }
      ]
    },
    contemplation: {
      hi: 'क्या मुझे परमार्थ और सेवा में दान करते समय कष्ट होता है?',
      pb: 'ਕੀ ਮੈਨੂੰ ਦਾਨ ਜਾਂ ਸੇਵਾ ਕਰਦੇ ਹੋਏ ਤਕਲੀਫ਼ ਹੁੰਦੀ ਹੈ?',
      en: 'Do I feel reluctance or anguish when giving to charity or supporting worthy causes?'
    },
    practicalApplication: {
      hi: 'सत्पात्र को दान देने और परोपकार में प्रसन्नतापूर्वक हाथ खोलकर योगदान करें।',
      pb: 'ਖ਼ੁਸ਼ੀ-ਖ਼ੁਸ਼ੀ ਲੋੜਵੰਦਾਂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਦਾਨ ਕਰੋ।',
      en: 'Cultivate joy in open-handed giving and supporting those in need.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरे भीतर की कंजूसी मिटाकर मुझे उदार और सेवाभावी बनाएं।',
      pb: 'ਹੇ ਸਾਹੇਬ! ਮੈਨੂੰ ਉਦਾਰ ਚਿੱਤ ਬਣਾਓ।',
      en: 'O Lord! Eradicate stinginess from my heart and bless me with generous, loving spirit.'
    },
    quiz: []
  },
  {
    id: 'lobh-5',
    number: 1531,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'लोभ को अंग - ५',
      pb: 'ਲੋਭ ਕੋ ਅੰਗ - ੫',
      en: 'Lobh Ko Ang - 5',
    },
    text: {
      hi: 'जोगी जंगम सेवड़ा, ज्ञानी गुनी अपार।\nषट दरशन से क्या बनै, एक लोभ की लार।।',
      pb: 'ਜੋਗੀ ਜੰਗਮ ਸੇਵੜਾ, ਗਿਆਨੀ ਗੁਨੀ ਅਪਾਰ।\nਸ਼ਟ ਦਰਸ਼ਨ ਸੇ ਕ੍ਯਾ ਬਨੈ, ਏਕ ਲੋਭ ਕੀ ਲਾਰ।।',
      en: 'Jogi jangam sevra, gyaani guni apaar. Shat darshan se kya banai, ek lobh kee laar..',
    },
    transliteration: 'Jogi jangam sevra, gyaani guni apaar. Shat darshan se kya banai, ek lobh kee laar.',
    bhavarth: {
      hi: 'लोभ का क्षेत्र असीमित है, जिससे बच पाना बहुत ही कठिन है। योगी, जंगम, जैनी, ज्ञानी, गुणवान, विद्वान तथा षट-दर्शन आदि के सभी लोगों द्वारा इस अकेले लोभ के चक्कर में पड़ जाने से कुछ नहीं बन पाएगा।',
      pb: 'ਜੋਗੀ, ਜੰਗਮ, ਜੈਨੀ, ਗਿਆਨੀ, ਗੁਣੀ ਅਤੇ ਛੇ ਦਰਸ਼ਨਾਂ ਦੇ ਵਿਦਵਾਨ ਵੀ ਜੇਕਰ ਇੱਕੋ ਲੋਭ ਦੇ ਚੱਕਰ ਵਿੱਚ ਪੈ ਜਾਣ, ਤਾਂ ਉਨ੍ਹਾਂ ਦੀ ਸਾਰੀ ਸਾਧਨਾ ਨਿਰਰਥਕ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Yogis, wandering ascetics, scholars, intellectuals, and followers of all six schools of philosophy—if they fall into the single trap of greed, all their learning and asceticism come to naught.'
    },
    wordMeanings: {
      hi: [
        { word: 'जंगम (Jangam)', meaning: 'शैवागम के भ्रमणकारी साधु' },
        { word: 'सेवड़ा (Sevra)', meaning: 'श्वेतांबर जैन साधु' },
        { word: 'षट दरशन (Shat darshan)', meaning: 'छह वैदिक दर्शन शास्त्र' }
      ],
      pb: [
        { word: 'ਜੰਗਮ (Jangam)', meaning: 'ਘੁੰਮਣ ਵਾਲੇ ਸਾਧੂ' },
        { word: 'ਸ਼ਟ ਦਰਸ਼ਨ (Shat darshan)', meaning: 'ਛੇ ਧਾਰਮਿਕ ਦਰਸ਼ਨ' }
      ],
      en: [
        { word: 'Jangam', meaning: 'Wandering ascetic monks' },
        { word: 'Sevra', meaning: 'Jain ascetic monks' },
        { word: 'Shat darshan', meaning: 'Six classical schools of Indian philosophy' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी विद्वत्ता या साधना के बावजूद लोभ-वासना की सूक्ष्म बेड़ी में बंधा तो नहीं हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗਿਆਨ ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਵੀ ਲੋਭ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਿਆ ਹਾਂ?',
      en: 'Despite my learning or practice, am I still subtly entangled in the web of subtle greed?'
    },
    practicalApplication: {
      hi: 'ज्ञान के साथ-साथ लोभ के पूर्ण त्याग का अभ्यास करें, यही वास्तविक सिद्धता है।',
      pb: 'ਗਿਆਨ ਨਾਲ ਲੋਭ ਦਾ ਤਿਆਗ ਕਰੋ।',
      en: 'Combine true spiritual knowledge with complete detachment from greed for genuine perfection.'
    },
    samarpanPrayer: {
      hi: 'हे परम सतगुरु! मुझे लोभ की सूक्ष्म लार से बचाकर निर्मल ज्ञान का प्रकाश दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪਰਮ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਲੋਭ ਤੋਂ ਬਚਾ ਕੇ ਸੱਚਾ ਗਿਆਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Supreme Satguru! Protect me from the subtle coils of greed and grant me the pure light of Wisdom.'
    },
    quiz: []
  }
];
