import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_MOH_KO_ANG: Sakhi[] = [
  {
    id: 'moh-1',
    number: 1492,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - १',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੧',
      en: 'Moh Ko Ang - 1',
    },
    text: {
      hi: 'अष्ट सिद्धि नव निद्धि लौं, सबही मोह की खान।\nत्याग मोह की वासना, कहैं कबीर सुजान।।',
      pb: devanagariToGurmukhi('अष्ट सिद्धि नव निद्धि लौं, सबही मोह की खान। त्याग मोह की वासना, कहैं कबीर सुजान।।'),
      en: 'Asht siddhi nav niddhi laun, sabhee moh kee khaan. Tyaag moh kee vaasanaa, kahain Kabeer sujaan..'
    },
    transliteration: 'Asht siddhi nav niddhi laun, sabhee moh ki khaan. Tyaag moh ki vaasana, kahain Kabeer sujaan.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि संसार में जितनी अष्ट सिद्धियां तथा नौ निधियां हैं, वे सभी इस मोह का भंडार हैं। यह मोह बहुत जटिल है। इसका पूर्णतः त्याग करो, अर्थात भीतर तक गई इसकी सूक्ष्म वासना को भी नष्ट कर दो।',
      pb: devanagariToGurmukhi('ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸੰਸਾਰ ਵਿੱਚ ਅੱਠ ਸਿੱਧੀਆਂ ਅਤੇ ਨੌਂ ਨਿਧੀਆਂ ਸਭ ਮੋਹ ਦੀ ਖਾਣ ਹਨ। ਇਹ ਮੋਹ ਬਹੁਤ ਗੁੰਝਲਦਾਰ ਹੈ। ਇਸ ਦੀ ਸੂਖਮ ਵਾਸਨਾ ਦਾ ਵੀ ਅੰਦਰੋਂ ਮੁਕੰਮਲ ਤਿਆਗ ਕਰ ਦੇਵੋ।'),
      en: 'Satguru Kabir Saheb proclaims that all eight supernatural powers (Ashta Siddhis) and nine cosmic treasures (Nava Nidhis) are mines of deep delusion and attachment (Moh). Uproot even the subtle latent desire (Vasana) for them to attain supreme liberation.'
    },
    wordMeanings: {
      hi: [
        { word: 'अष्ट सिद्धि नव निद्धि (Asht siddhi nav niddhi)', meaning: 'आठों सिद्धियां और नौ निधियां (अलौकिक शक्तियां व सम्पदा)' },
        { word: 'मोह की खान (Moh kee khaan)', meaning: 'सांसारिक आसक्ति और मोह का गहरा भंडार' },
        { word: 'वासना (Vaasanaa)', meaning: 'भीतर दबी सूक्ष्म तृष्णा और आसक्ति' },
        { word: 'सुजान (Sujaan)', meaning: 'ज्ञानी, श्रेष्ठ, विवेकी पुरुष' }
      ],
      pb: [
        { word: 'ਮੋਹ ਕੀ ਖਾਨ', meaning: 'ਮੋਹ ਦਾ ਭੰਡਾਰ / ਖਾਣ' },
        { word: 'ਵਾਸਨਾ', meaning: 'ਸੂਖਮ ਖਿੱਚ / ਤ੍ਰਿਸ਼ਨਾ' },
        { word: 'ਸੁਜਾਨ', meaning: 'ਸਿਆਣਾ / ਵਿਵੇਕੀ ਪੁਰਸ਼' }
      ],
      en: [
        { word: 'Asht siddhi nav niddhi', meaning: 'The eight occult powers and nine celestial treasures' },
        { word: 'Moh kee khaan', meaning: 'The deep storehouse / mine of worldly attachment' },
        { word: 'Vaasanaa', meaning: 'Subtle psychological cravings and subconscious attachments' },
        { word: 'Sujaan', meaning: 'Wise, awakened seeker of truth' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं रिद्धि-सिद्धि और सांसारिक वैभव के मोह में उलझा हुआ हूँ, या आत्म-कल्याण के लिए इसका त्याग कर रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਰਿੱਧੀਆਂ-ਸਿੱਧੀਆਂ ਦੇ ਮੋਹ ਵਿੱਚ ਫਸਿਆ ਹਾਂ ਜਾਂ ਆਤਮਿਕ ਮੁਕਤੀ ਲਈ ਇਸਨੂੰ ਤਿਆਗ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I entangled in the glamorous allure of powers and possessions, or am I renouncing subtle attachments for spiritual liberation?'
    },
    practicalApplication: {
      hi: 'सिद्धियों और सांसारिक उपलब्धियों के अहंकार व आसक्ति से बचें; निष्काम भाव से सतगुरु की भक्ति करें।',
      pb: devanagariToGurmukhi('ਹੰਕਾਰ ਅਤੇ ਮੋਹ ਛੱਡ ਕੇ ਨਿਸ਼ਕਾਮ ਸਿਮਰਨ ਕਰੋ।'),
      en: 'Surpass the vanity of material and mystical acquisitions by grounding consciousness in egoless devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे अष्ट सिद्धि और नौ निधियों के मोह-जाल से बचाकर अपने निष्काम प्रेम का वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ ਦੀ ਖਾਣ ਤੋਂ ਛੁਡਾ ਕੇ ਸੱਚੀ ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Deliver me from the snare of worldly and occult attachments, and bless me with pure, unconditioned love for Truth.'
    },
    quiz: []
  },
  {
    id: 'moh-2',
    number: 1493,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - २',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੨',
      en: 'Moh Ko Ang - 2',
    },
    text: {
      hi: 'सुर नर मुनि सब फंसे, मृग त्रिस्ना जग मोह।\nमोह रूप संसार है, गिरे मोह निधि जोह।।',
      pb: devanagariToGurmukhi('सुर नर मुनि सब फंसे, मृग त्रिस्ना जग मोह। मोह रूप संसार है, गिरे मोह निधि जोह।।'),
      en: 'Sur nar muni sab phanse, mrig trisnaa jag moh. Moh roop sansaar hai, gire moh nidhi joh..'
    },
    transliteration: 'Sur nar muni sab phanse, mrig trisna jag moh. Moh roop sansaar hai, gire moh nidhi joh.',
    bhavarth: {
      hi: 'सुर, नर, मुनि, अर्थात सभी जीव, इस जग की मोह रूपी मृग-तृष्णा में बुरी तरह फंसे हुए हैं। यह सारा संसार ही मोह-रूप है और सभी इस मोह-समुद्र में गिरे हुए दिखाई पड़ते हैं, अर्थात किसी का कल्याण-कुशल नहीं है।',
      pb: devanagariToGurmukhi('ਦੇਵਤੇ, ਮਨੁੱਖ ਅਤੇ ਮੁਨੀ ਸਭ ਇਸ ਜਗਤ ਦੀ ਮੋਹ ਰੂਪੀ ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹਨ। ਇਹ ਸਾਰਾ ਸੰਸਾਰ ਹੀ ਮੋਹ ਸਰੂਪ ਹੈ ਅਤੇ ਸਭ ਇਸ ਮੋਹ ਦੇ ਸਮੁੰਦਰ ਵਿੱਚ ਡੁੱਬੇ ਪਏ ਹਨ।'),
      en: 'Gods, mortals, and ascetics are all ensnared in the mirage (Mrig-Trishna) of worldly attachment. This entire material realm is the embodiment of Moh, and all souls appear submerged in its treacherous ocean.'
    },
    wordMeanings: {
      hi: [
        { word: 'सुर नर मुनि (Sur nar muni)', meaning: 'देवता, मनुष्य और तपस्वी मुनिगण' },
        { word: 'मृग त्रिस्ना (Mrig trisnaa)', meaning: 'रेगिस्तान की मरीचिका, झूठा आभास / भ्रम' },
        { word: 'मोह निधि जोह (Moh nidhi joh)', meaning: 'मोह रूपी अथाह समुद्र में गिरे हुए दिखाई पड़ना' }
      ],
      pb: [
        { word: 'ਮ੍ਰਿਗ ਤ੍ਰਿਸਨਾ', meaning: 'ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ / ਝੂਠਾ ਛਲਾਵਾ' },
        { word: 'ਮੋਹ ਨਿਧਿ ਜੋਹ', meaning: 'ਮੋਹ ਦੇ ਸਾਗਰ ਵਿੱਚ ਡਿੱਗੇ ਵੇਖਣਾ' }
      ],
      en: [
        { word: 'Sur nar muni', meaning: 'Celestial beings, mortals, and contemplative ascetics' },
        { word: 'Mrig trisnaa', meaning: 'The desert mirage; illusory worldly thirst' },
        { word: 'Moh nidhi joh', meaning: 'Submerged and drowning in the boundless ocean of emotional delusion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं संसार के नश्वर सुखों को जल समझकर मृग-तृष्णा के पीछे तो नहीं भाग रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਸਾਰੀ ਭੋਗਾਂ ਦੀ ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ ਪਿੱਛੇ ਭਟਕ ਰਿਹਾ ਹਾਂ?'),
      en: 'Am I chasing after the fleeting mirage of worldly pleasures like a thirsty deer in the desert?'
    },
    practicalApplication: {
      hi: 'संसार को क्षणभंगुर समझें और नश्वर संबंधों के मोह से ऊपर उठकर अविनाशी सत्य में मन लगाएं।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਨੂੰ ਨਾਸ਼ਵੰਤ ਜਾਣ ਕੇ ਸੱਚੇ ਨਾਮ ਨਾਲ ਜੁੜੋ।'),
      en: 'Recognize the transience of all earthly illusions and anchor awareness in eternal Truth.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! इस जग-मोह की मृग-तृष्णा से मुझे बचाकर अपने शांत अमृत-सागर में शरण दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ-ਸਾਗਰ ਵਿੱਚ ਡੁੱਬਣ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Rescue me from the blinding mirage of delusion and shelter my soul in Your tranquil grace.'
    },
    quiz: []
  },
  {
    id: 'moh-3',
    number: 1494,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ३',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੩',
      en: 'Moh Ko Ang - 3',
    },
    text: {
      hi: 'अपना तो कोई नहीं, देखा ठोकि बजाय।\nअपना अपना क्या करै, मोह भरम लपटाय।।',
      pb: devanagariToGurmukhi('अपना तो कोई नहीं, देखा ठोकि बजाय। अपना अपना क्या करै, मोह भरम लपटाय।।'),
      en: 'Apnaa to koyee naheen, dekhaa thoki bajaay. Apnaa apnaa kyaa karai, moh bharam laptaay..'
    },
    transliteration: 'Apna to koi nahi, dekha thoki bajay. Apna apna kya karai, moh bharam laptay.',
    bhavarth: {
      hi: 'मैंने अच्छी तरह सोच-विचारकर देख लिया है और जांच-परख लिया है, निःसंदेह, इस संसार में कोई भी अपना नहीं है। फिर इस मोह के भ्रम-जाल में डूबकर, अपना-अपना क्या करते हो, अर्थात मोह करना व्यर्थ है, कुछ समय बाद इन सबसे बिछुड़ जाना है।',
      pb: devanagariToGurmukhi('ਮੈਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਪਰਖ ਕੇ ਵੇਖ ਲਿਆ ਹੈ ਕਿ ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਕੋਈ ਵੀ ਸਦਾ ਲਈ ਆਪਣਾ ਨਹੀਂ ਹੈ। ਫਿਰ ਮੋਹ ਦੇ ਭਰਮ ਵਿੱਚ ਫਸ ਕੇ "ਮੇਰਾ-ਮੇਰਾ" ਕਿਉਂ ਰੋਂਦੇ ਹੋ? ਸਭ ਤੋਂ ਵਿਛੜ ਜਾਣਾ ਹੈ।'),
      en: 'Having thoroughly examined and tested reality, I have realized beyond doubt that no one truly belongs to anyone in this ephemeral world. Why then cling in obsessive delusion crying "Mine, mine", when parting from everything is inevitable?'
    },
    wordMeanings: {
      hi: [
        { word: 'ठोकि बजाय (Thoki bajaay)', meaning: 'भली-भांति जांच-परखकर, पूर्ण निश्चय के साथ' },
        { word: 'मोह भरम लपटाय (Moh bharam laptaay)', meaning: 'मोह और भ्रम के जाल में बुरी तरह लिपटकर' }
      ],
      pb: [
        { word: 'ਠੋਕਿ ਬਜਾਯ', meaning: 'ਚੰਗੀ ਤਰ੍ਹਾਂ ਪਰਖ ਕੇ / ਤੋਲ ਕੇ' },
        { word: 'ਮੋਹ ਭਰਮ ਲਪਟਾਯ', meaning: 'ਮੋਹ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਣਾ' }
      ],
      en: [
        { word: 'Thoki bajaay', meaning: 'Having tested and verified thoroughly like striking a bell' },
        { word: 'Moh bharam laptaay', meaning: 'Clinging tightly in the illusory web of emotional attachment' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं उन सांसारिक संबंधों में "मेरा-मेरा" कर रहा हूँ जो अंततः बिछुड़ जाने वाले हैं?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਝੂਠੇ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਆਪਣਾ ਮੰਨ ਕੇ ਭਰਮ ਵਿੱਚ ਪਿਆ ਹਾਂ?'),
      en: 'Am I clinging possessively to transient worldly bonds that are destined to part?'
    },
    practicalApplication: {
      hi: 'परिवार व समाज में कर्तव्यों का पालन प्रेमपूर्वक करें, किंतु अंतर्मन में आसक्ति और "मेरा-तेरा" का भाव न रखें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰਕ ਫਰਜ਼ ਨਿਭਾਓ ਪਰ ਮੋਹ ਦੀ ਗੰਢ ਨਾ ਬੰਨ੍ਹੋ।'),
      en: 'Fulfill worldly duties lovingly without inner clinging or possessive delusion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे झूठे "अपनेपन" के भ्रम से निकालकर केवल आपके सत्य-चरणों का अनन्य दास बना लीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ ਦੇ ਭਰਮ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਆਪਣੀ ਸ਼ਰਨ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Liberate me from the delusion of false ownership and make me a devoted servant of Your divine Lotus Feet.'
    },
    quiz: []
  },
  {
    id: 'moh-4',
    number: 1495,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ४',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੪',
      en: 'Moh Ko Ang - 4',
    },
    text: {
      hi: 'मोह फंद सब फंदिया, कोय न सके निवार।\nकोई साधु जन पारखी, बिरला तत्व विचार।।',
      pb: devanagariToGurmukhi('मोह फंद सब फंदिया, कोय न सके निवार। कोई साधु जन पारखी, बिरला तत्व विचार।।'),
      en: 'Moh phand sab phandiyaa, koy na sake nivaar. Koyee saadhu jan paarakhee, birlaa tatva vichaar..'
    },
    transliteration: 'Moh phand sab phandiya, koy na sake nivaar. Koi saadhu jan paarkhi, birla tatva vichaar.',
    bhavarth: {
      hi: 'सतगुरु के सत्संग-ज्ञान के बिना इस संसार के लोग मोह के फंदे में फंसे हुए हैं। कोई इससे मुक्ति नहीं प्राप्त कर पाता। तत्त्वदर्शी-पारखी (विवेकी) कोई संत ही इससे मुक्ति प्राप्त कर सकता है।',
      pb: devanagariToGurmukhi('ਸਾਰੇ ਲੋਕ ਮੋਹ ਦੀ ਫਾਹੀ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹਨ ਅਤੇ ਕੋਈ ਇਸ ਤੋਂ ਛੁੱਟ ਨਹੀਂ ਸਕਦਾ। ਕੋਈ ਵਿਰਲਾ ਪਾਰਖੀ ਸੰਤ ਹੀ ਤੱਤ-ਗਿਆਨ ਦੇ ਵਿਚਾਰ ਨਾਲ ਇਸ ਤੋਂ ਮੁਕਤ ਹੁੰਦਾ ਹੈ।'),
      en: 'All beings are snared in the tight noose of Moh (attachment), and none can untie it by worldly means. Only a rare discerning Saint (Parakhi Sadhu), steeped in the contemplation of essential Truth, transcends its trap.'
    },
    wordMeanings: {
      hi: [
        { word: 'मोह फंद (Moh phand)', meaning: 'मोह की फांसी अथवा फंदा' },
        { word: 'निवार (Nivaar)', meaning: 'निवारण, दूर करना या मुक्ति पाना' },
        { word: 'पारखी (Paarakhee)', meaning: 'सत्य और असत्य की परख करने वाला विवेकी संत' },
        { word: 'तत्व विचार (Tatva vichaar)', meaning: 'मूल ब्रह्म-तत्त्व और आत्म-स्वरूप का चिंतन' }
      ],
      pb: [
        { word: 'ਮੋਹ ਫੰਦ', meaning: 'ਮੋਹ ਦੀ ਫਾਹੀ' },
        { word: 'ਪਾਰਖੀ', meaning: 'ਸੱਚ-ਝੂਠ ਨੂੰ ਪਰਖਣ ਵਾਲਾ' },
        { word: 'ਤੱਤ ਵਿਚਾਰ', meaning: 'ਆਤਮਿਕ ਸੱਚ ਦਾ ਚਿੰਤਨ' }
      ],
      en: [
        { word: 'Moh phand', meaning: 'The binding noose of emotional attachment' },
        { word: 'Nivaar', meaning: 'To dispel, untie, or liberate from' },
        { word: 'Paarakhee', meaning: 'Discerning saint who can distinguish Truth from illusion' },
        { word: 'Tatva vichaar', meaning: 'Deep contemplative inquiry into the ultimate Reality' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में पारखी संत का सत्संग और तत्त्व-विचार है जो मुझे मोह के फंदे से छुड़ा सके?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਕੋਲ ਪਾਰਖੀ ਸੰਤ ਦਾ ਗਿਆਨ ਹੈ ਜੋ ਮੈਨੂੰ ਮੋਹ ਦੀ ਫਾਹੀ ਤੋਂ ਛੁਡਾਵੇ?'),
      en: 'Do I seek the wisdom and discernment of an enlightened Saint to dissolve the noose of attachment?'
    },
    practicalApplication: {
      hi: 'प्रतिदिन सत्संग और तत्त्व-चिंतन करें ताकि विवेक जागृत हो और मोह की ग्रंथियां खुल सकें।',
      pb: devanagariToGurmukhi('ਰੋਜ਼ਾਨਾ ਸਤਿਸੰਗ ਕਰਕੇ ਵਿਵੇਕ ਜਗਾਓ।'),
      en: 'Engage daily in spiritual discourse and introspective discernment to dissolve the knots of delusion.'
    },
    samarpanPrayer: {
      hi: 'हे पारखी सतगुरु! अपनी तत्त्व-दृष्टि देकर मुझे इस मोह-फंदे से सदा के लिए मुक्त कर दीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਪਾਰਖੀ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ ਦੀ ਫਾਹੀ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O discerning Satguru! Bestow upon me Your piercing insight to sever the bonds of worldly attachment forever.'
    },
    quiz: []
  },
  {
    id: 'moh-5',
    number: 1496,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ५',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੫',
      en: 'Moh Ko Ang - 5',
    },
    text: {
      hi: 'अपना तो कोई नहिं, हम काहू के नांहि।\nपार पहूंची नाव जब, मिलि सब बिछुड़े जांहि।।',
      pb: devanagariToGurmukhi('अपना तो कोई नहिं, हम काहू के नांहि। पार पहूंची नाव जब, मिलि सब बिछुड़े जांहि।।'),
      en: 'Apnaa to koyee nahin, ham kaahoo ke naanhi. Paar pahoochee naav jab, mili sab bichhude jaanhi..'
    },
    transliteration: 'Apna to koi nahin, ham kaahu ke naahi. Paar pahunchi naav jab, mili sab bichhude jaanhi.',
    bhavarth: {
      hi: 'वास्तव में इस संसार में अपना कोई भी नहीं है और हम भी किसी के नहीं हैं, अर्थात यहां किसी से किसी प्रकार का मोह केवल एक माया जाल है। जिस प्रकार नाव में यात्री मिलकर बैठ जाते हैं और नदी पार पहुंचते ही सब बिछुड़ जाते हैं या अपने-अपने स्थान को चले जाते हैं, ठीक उसी प्रकार यह संसार भी मिलने-बिछुड़ने का स्थान है।',
      pb: devanagariToGurmukhi('ਸੱਚਮੁੱਚ ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਕੋਈ ਸਾਡਾ ਨਹੀਂ ਅਤੇ ਅਸੀਂ ਕਿਸੇ ਦੇ ਨਹੀਂ। ਜਿਵੇਂ ਬੇੜੀ ਵਿੱਚ ਮੁਸਾਫ਼ਰ ਇਕੱਠੇ ਬੈਠਦੇ ਹਨ ਅਤੇ ਪਾਰ ਪਹੁੰਚਦਿਆਂ ਹੀ ਵਿਛੜ ਜਾਂਦੇ ਹਨ, ਇਵੇਂ ਹੀ ਇਹ ਸੰਸਾਰ ਮਿਲਣ-ਵਿਛੜਨ ਦਾ ਅਸਥਾਈ ਟਿਕਾਣਾ ਹੈ।'),
      en: 'Truly, no one belongs to us in this world and we belong to no one; worldly attachment is merely a cosmic illusion. Just as fellow travelers sit together in a ferry boat and disperse to their own ways upon reaching the opposite shore, so too are all mortal unions momentary.'
    },
    wordMeanings: {
      hi: [
        { word: 'हम काहू के नांहि (Ham kaahoo ke naanhi)', meaning: 'हम भी किसी के स्थायी रूप से अपने नहीं हैं' },
        { word: 'पार पहूंची नाव (Paar pahoochee naav)', meaning: 'नदी पार तट पर नाव के पहुंचते ही' },
        { word: 'मिलि सब बिछुड़े जांहि (Mili sab bichhude jaanhi)', meaning: 'सारे सहयात्री बिछुड़ कर अपने-अपने मार्ग चले जाते हैं' }
      ],
      pb: [
        { word: 'ਕਾਹੂ ਕੇ ਨਾਂਹਿ', meaning: 'ਕਿਸੇ ਦੇ ਨਹੀਂ' },
        { word: 'ਬਿਛੁੜੇ ਜਾਂਹਿ', meaning: 'ਵਿੱਛੜ ਜਾਂਦੇ ਹਨ' }
      ],
      en: [
        { word: 'Ham kaahoo ke naanhi', meaning: 'We do not permanently belong to anyone either' },
        { word: 'Paar pahoochee naav', meaning: 'When the ferry reaches the farther bank' },
        { word: 'Mili sab bichhude jaanhi', meaning: 'All fellow travelers inevitably part and go their separate paths' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं इस जीवन को नाव की क्षणिक यात्रा समझकर अनासक्त भाव से जी रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਸੰਸਾਰ ਨੂੰ ਬੇੜੀ ਦਾ ਮੁਸਾਫ਼ਰਖਾਨਾ ਸਮਝ ਕੇ ਅਡੋਲ ਰਹਿੰਦਾ ਹਾਂ?'),
      en: 'Do I understand life as a brief ferry crossing and remain detached from transient companionship?'
    },
    practicalApplication: {
      hi: 'संसार में मुसाफिर की तरह रहें; कर्तव्यों को पूरा करें परंतु हृदय को केवल परमात्मा से जोड़ें।',
      pb: devanagariToGurmukhi('ਸੰਸਾਰ ਵਿੱਚ ਮੁਸਾਫ਼ਰ ਵਾਂਗ ਨਿਰਲੇਪ ਰਹੋ।'),
      en: 'Live in the world as a conscious traveler; discharge responsibilities dutifully while anchoring your heart in the Eternal.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! इस जीवन-नाव के एकमात्र सच्चे खेवनहार आप हैं। मुझे संसार के झूठे मोह से बचाकर भव-पार कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਇਸ ਭਵ-ਸਾਗਰ ਤੋਂ ਪਾਰ ਲੰਘਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! You are the true Helmsman of my life. Save me from deceptive attachments and ferry me across the ocean of delusion.'
    },
    quiz: []
  },
  {
    id: 'moh-6',
    number: 1497,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ६',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੬',
      en: 'Moh Ko Ang - 6',
    },
    text: {
      hi: 'जहं लगि सब संसार है, मिरग सबन को मोह।\nसुर नर नाग पाताल अरु, ऋषि मुनिवर सब जोह।।',
      pb: devanagariToGurmukhi('जहं लगि सब संसार है, मिरग सबन को मोह। सुर नर नाग पाताल अरु, ऋषि मुनिवर सब जोह।।'),
      en: 'Jahan lagi sab sansaar hai, mirag saban ko moh. Sur nar naag paataal aru, rishi munivar sab joh..'
    },
    transliteration: 'Jahan lagi sab sansaar hai, mirag saban ko moh. Sur nar naag pataal aru, rishi munivar sab joh.',
    bhavarth: {
      hi: 'सुर-असुर, नर, नाग-पाताल निवासी, ऋषि-मुनि तथा जहां तक इस संसार का विस्तार है, वहां तक सभी को मोह रूपी मृग ने अपने मोह-जाल में फंसा लिया है। मोह रूपी मृग-मारीच किसी-न-किसी रूप में सबके हृदय-वन में विचरता रहता है।',
      pb: devanagariToGurmukhi('ਜਿੱਥੋਂ ਤੱਕ ਇਸ ਸੰਸਾਰ ਦਾ ਪਸਾਰਾ ਹੈ, ਦੇਵਤੇ, ਮਨੁੱਖ, ਨਾਗ ਅਤੇ ਰਿਸ਼ੀ-ਮੁਨੀ ਸਭ ਮੋਹ ਰੂਪੀ ਹਿਰਨ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸੇ ਪਏ ਹਨ। ਇਹ ਮੋਹ ਸਭ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਘੁੰਮ ਰਿਹਾ ਹੈ।'),
      en: 'As far as this cosmos extends, celestial beings, humans, serpents of the netherworlds, and revered rishis are all trapped by the elusive golden deer of Moh. The illusion of attachment wanders incessantly through every heart.'
    },
    wordMeanings: {
      hi: [
        { word: 'मिरग सबन को मोह (Mirag saban ko moh)', meaning: 'मोह रूपी मायावी मृग (मरीचिका) ने सबको मोहित कर रखा है' },
        { word: 'नाग पाताल (Naag paataal)', meaning: 'पाताल लोक के नाग व समस्त प्राणी' },
        { word: 'सब जोह (Sab joh)', meaning: 'सभी को मोहग्रस्त देखा जा सकता है' }
      ],
      pb: [
        { word: 'ਮਿਰਗ ਮੋਹ', meaning: 'ਮੋਹ ਰੂਪੀ ਮਾਇਆਵੀ ਹਿਰਨ' },
        { word: 'ਸਭ ਜੋਹ', meaning: 'ਸਭ ਫਸੇ ਵੇਖੇ ਜਾ ਰਹੇ ਹਨ' }
      ],
      en: [
        { word: 'Mirag saban ko moh', meaning: 'The elusive deer of delusion that captivates all minds' },
        { word: 'Naag paataal', meaning: 'The underworld beings and all subtle realms' },
        { word: 'Sab joh', meaning: 'All are observed to be entangled without exception' }
      ]
    },
    contemplation: {
      hi: 'जब ऋषि-मुनि तक मोह के शिकार हो गए, तो क्या मैं सतर्क होकर सतगुरु के ज्ञान की रक्षा में हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੋਹ ਦੇ ਛਲਾਵੇ ਤੋਂ ਬਚਣ ਲਈ ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਵਿੱਚ ਜਾਗ ਰਿਹਾ ਹਾਂ?'),
      en: 'When even great sages fall prey to subtle delusion, am I vigilantly abiding under the Satguru’s spiritual protection?'
    },
    practicalApplication: {
      hi: 'अहंकार न करें कि मोह आपको नहीं छू सकता; निरंतर गुरु-शरण और आत्म-निरीक्षण में रहें।',
      pb: devanagariToGurmukhi('ਕਦੇ ਵੀ ਹੰਕਾਰ ਨਾ ਕਰੋ; ਸਦਾ ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਰਹੋ।'),
      en: 'Never assume immunity from subtle attachment; maintain continuous self-scrutiny under the Guru’s shelter.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! जब तीनों लोकों को मोह-मृग ने छल लिया है, तो मुझे अपने नाम-कवच में सुरक्षित रखिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਮੋਹ-ਮ੍ਰਿਗ ਦੇ ਛਲ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! When all realms are deceived by the illusory deer of delusion, enfold my consciousness within the shield of Your Holy Name.'
    },
    quiz: []
  },
  {
    id: 'moh-7',
    number: 1498,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ७',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੭',
      en: 'Moh Ko Ang - 7',
    },
    text: {
      hi: 'जब घट मोह समाइया, सबै भया अंधियार।\nनिर्मोह ज्ञान विचार के, साधु उतरे पार ।।',
      pb: devanagariToGurmukhi('जब घट मोह समाइया, सबै भया अंधियार। निर्मोह ज्ञान विचार के, साधु उतरे पार ।।'),
      en: 'Jab ghat moh samaaiyaa, sabai bhayaa andhiyaar. Nirmoh gyaan vichaar ke, saadhu utare paar..'
    },
    transliteration: 'Jab ghat moh samaiya, sabai bhaya andhiyaar. Nirmoh gyan vichaar ke, saadhu utre paar.',
    bhavarth: {
      hi: 'सांसारिक मोह जब हृदय में समा जाता है, तो चारों ओर अज्ञानता का अंधकार फैल जाता है। इस कारण जीव को कुछ नहीं सूझता। केवल मोह से मुक्त रहने वाले तथा ज्ञान-विचार से पूर्ण साधु-संत ही इस भव सागर से पार उतर सकते हैं।',
      pb: devanagariToGurmukhi('ਜਦੋਂ ਹਿਰਦੇ ਵਿੱਚ ਮੋਹ ਸਮਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਚਾਰੇ ਪਾਸੇ ਅਗਿਆਨਤਾ ਦਾ ਘੋਰ ਹਨੇਰਾ ਛਾ ਜਾਂਦਾ ਹੈ। ਸਿਰਫ਼ ਮੋਹ-ਰਹਿਤ ਅਤੇ ਗਿਆਨ-ਵਿਚਾਰ ਵਾਲੇ ਸੰਤ ਹੀ ਇਸ ਭਵ-ਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਰਦੇ ਹਨ।'),
      en: 'When worldly attachment enters the heart, total darkness of spiritual ignorance envelops the mind, blinding the soul. Only detached, desireless Saints (Nirmoh Sadhus), endowed with profound contemplative wisdom, cross beyond this mortal ocean.'
    },
    wordMeanings: {
      hi: [
        { word: 'घट (Ghat)', meaning: 'हृदय / अंतःकरण' },
        { word: 'सबै भया अंधियार (Sabai bhayaa andhiyaar)', meaning: 'सब ओर अज्ञान और भ्रम का अंधकार छा गया' },
        { word: 'निर्मोह (Nirmoh)', meaning: 'मोह और आसक्ति से रहित' },
        { word: 'उतरे पार (Utare paar)', meaning: 'भवसागर से तर कर मुक्ति पाना' }
      ],
      pb: [
        { word: 'ਘਟ', meaning: 'ਹਿਰਦਾ' },
        { word: 'ਸਬੈ ਭਯਾ ਅੰਧਿਆਰ', meaning: 'ਸਭ ਪਾਸੇ ਹਨੇਰਾ ਛਾ ਗਿਆ' },
        { word: 'ਨਿਰਮੋਹ', meaning: 'ਮੋਹ ਤੋਂ ਮੁਕਤ' }
      ],
      en: [
        { word: 'Ghat', meaning: 'Inner vessel; the spiritual heart' },
        { word: 'Sabai bhayaa andhiyaar', meaning: 'Total darkness of delusion engulfs awareness' },
        { word: 'Nirmoh', meaning: 'Free from emotional clinging and worldly delusion' },
        { word: 'Utare paar', meaning: 'Ferried across the turbulent ocean of births and deaths' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे अंतःकरण में मोह का अंधकार छाया है या निर्मोह ज्ञान का प्रकाश जल रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਮੋਹ ਦਾ ਹਨੇਰਾ ਹੈ ਜਾਂ ਗਿਆਨ ਦਾ ਦੀਵਾ?'),
      en: 'Is my inner consciousness clouded by the darkness of attachment, or illuminated by the light of detachment?'
    },
    practicalApplication: {
      hi: 'हृदय में मोह की छाया पड़ते ही ज्ञान-विचार और विवेक का दीपक जलाकर अंधकार को दूर करें।',
      pb: devanagariToGurmukhi('ਗਿਆਨ ਦੇ ਵਿਚਾਰ ਨਾਲ ਮੋਹ ਦੇ ਹਨੇਰੇ ਨੂੰ ਦੂਰ ਕਰੋ।'),
      en: 'Whenever attachment clouds the mind, immediately ignite the flame of spiritual inquiry and discernment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरे घट से मोह का घोर अंधकार मिटाकर निर्मोह आत्म-ज्ञान का सूर्य प्रकाशित कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਹਿਰਦੇ ਦਾ ਹਨੇਰਾ ਦੂਰ ਕਰਕੇ ਗਿਆਨ ਦਾ ਚਾਨਣ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Dispel the dense darkness of delusion from my heart and illuminate my soul with the radiant sun of detachment.'
    },
    quiz: []
  },
  {
    id: 'moh-8',
    number: 1499,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ८',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੮',
      en: 'Moh Ko Ang - 8',
    },
    text: {
      hi: 'काहु जुगति ना जानिया, किहि बिधि बचै सुखेत।\nनहिं बंदगी नहिं दीनता, नहिं साधु संग हेत।।',
      pb: devanagariToGurmukhi('काहु जुगति ना जानिया, किहि बिधि बचै सुखेत। नहिं बंदगी नहिं दीनता, नहिं साधु संग हेत।।'),
      en: 'Kaahu jugati naa jaaniyaa, kihi bidhi bachai sukhet. Nahin bandagee nahin deenataa, nahin saadhu sang het..'
    },
    transliteration: 'Kaahu jugti na jaaniya, kihi bidhi bachai sukhet. Nahin bandagi nahin deenta, nahin saadhu sang het.',
    bhavarth: {
      hi: 'जीवन रूपी खेती की किस प्रकार सुरक्षा की जाए, अर्थात कैसे इसका कल्याण हो सकता है? कोई भी इस युक्ति को नहीं जान सका, क्योंकि न तो किसी में सेवा का भाव है, न विनयपूर्ण दीनता और न ही संतों के सत्संग में प्रीति-रुचि है, अर्थात सभी मोह के वशीभूत होकर इसके जाल में फंसे हैं।',
      pb: devanagariToGurmukhi('ਜੀਵਨ ਰੂਪੀ ਚੰਗੀ ਖੇਤੀ ਨੂੰ ਕਿਵੇਂ ਬਚਾਇਆ ਜਾਵੇ, ਇਹ ਜੁਗਤ ਕਿਸੇ ਨੇ ਨਾ ਜਾਣੀ; ਕਿਉਂਕਿ ਨਾ ਕੋਈ ਬੰਦਗੀ ਕਰਦਾ ਹੈ, ਨਾ ਨਿਮਰਤਾ ਹੈ ਅਤੇ ਨਾ ਹੀ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਨਾਲ ਪ੍ਰੇਮ ਹੈ।'),
      en: 'None has discovered the true art of safeguarding the fertile field of human life (Sukhet). Lacking devotion (Bandagi), humility (Deenta), and genuine love for the company of Saints (Sadhu Sang Het), mortals remain hopelessly ensnared in delusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'जुगति (Jugati)', meaning: 'युक्ति, आध्यात्मिक उपाय या विवेकपूर्ण विधि' },
        { word: 'सुखेत (Sukhet)', meaning: 'उत्तम खेती, मानव जीवन रूपी धर्म-क्षेत्र' },
        { word: 'बंदगी (Bandagee)', meaning: 'प्रभु-भक्ति, वंदना, समर्पण' },
        { word: 'दीनता (Deenataa)', meaning: 'अहंकार-रहित विनम्रता व विनय' },
        { word: 'साधु संग हेत (Saadhu sang het)', meaning: 'संतों के सत्संग में निष्कपट प्रेम व रुचि' }
      ],
      pb: [
        { word: 'ਜੁਗਤਿ', meaning: 'ਤਰੀਕਾ / ਸਾਧਨ' },
        { word: 'ਸੁਖੇਤ', meaning: 'ਚੰਗੀ ਖੇਤੀ / ਮਨੁੱਖਾ ਜਨਮ' },
        { word: 'ਬੰਦਗੀ', meaning: 'ਭਗਤੀ / ਸਿਮਰਨ' },
        { word: 'ਦੀਨਤਾ', meaning: 'ਨਿਮਰਤਾ' }
      ],
      en: [
        { word: 'Jugati', meaning: 'Skillful spiritual method or practical technique' },
        { word: 'Sukhet', meaning: 'The fertile farm of human incarnation' },
        { word: 'Bandagee', meaning: 'Humble worship, prayer, and surrender' },
        { word: 'Deenataa', meaning: 'Meekness and utter freedom from ego' },
        { word: 'Saadhu sang het', meaning: 'Sincere affection and devotion for holy fellowship' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपनी जीवन रूपी खेती को बंदगी, दीनता और सत्संग से सींचकर मोह से बचा रहा हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੇ ਅੰਦਰ ਬੰਦਗੀ, ਨਿਮਰਤਾ ਅਤੇ ਸੰਤਾਂ ਦਾ ਪ੍ਰੇਮ ਹੈ?'),
      en: 'Am I protecting the sacred field of my human life through humble devotion, surrender, and holy company?'
    },
    practicalApplication: {
      hi: 'अहंकार त्यागकर विनम्र बनें, नित्य प्रभु-बंदगी करें और संतों के वचनों में अनन्य प्रीति रखें।',
      pb: devanagariToGurmukhi('ਨਿਮਰਤਾ ਧਾਰਨ ਕਰੋ ਅਤੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਵਿੱਚ ਪ੍ਰੇਮ ਰੱਖੋ।'),
      en: 'Embrace humility, cultivate steady devotion, and immerse your heart in holy fellowship.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मुझे सच्ची बंदगी, परम दीनता और साधु-संग का पावन प्रेम प्रदान कर इस जीवन-खेत को सफल कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਬੰਦਗੀ, ਨਿਮਰਤਾ ਅਤੇ ਸਤਿਸੰਗ ਦਾ ਦਾਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Bestow upon me true devotion, deep humility, and profound love for the company of the holy.'
    },
    quiz: []
  },
  {
    id: 'moh-9',
    number: 1500,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ९',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੯',
      en: 'Moh Ko Ang - 9',
    },
    text: {
      hi: 'मोह नदी विकराल है, कोई न उतरै पार।\nसतगुरु केवट साथ ले, हंस होय जम नार।।',
      pb: devanagariToGurmukhi('मोह नदी विकराल है, कोई न उतरै पार। सतगुरु केवट साथ ले, हंस होय जम नार।।'),
      en: 'Moh nadee vikraal hai, koyee na utarai paar. Satguru kevat saath le, hans hoy jam naar..'
    },
    transliteration: 'Moh nadi vikraal hai, koi na utre paar. Satguru kevat saath le, hans hoy jam naar.',
    bhavarth: {
      hi: 'मोह की यह नदी बहुत भयंकर है, इससे पार उतरना बहुत ही कठिन है। कोई भी इससे पार नहीं उतर पाता। केवल सतगुरु रूपी केवट को साथ लेकर, कोई हंस रूपी सेवक भक्त ही इससे पार उतर पाता है, अर्थात सतगुरु के ज्ञानोपदेश की नौका में बैठकर ही इससे पार उतरना संभव है।',
      pb: devanagariToGurmukhi('ਮੋਹ ਦੀ ਨਦੀ ਬੜੀ ਭਿਆਨਕ ਹੈ, ਇਸ ਤੋਂ ਕੋਈ ਪਾਰ ਨਹੀਂ ਲੰਘ ਸਕਦਾ। ਸਿਰਫ਼ ਸਤਿਗੁਰੂ ਰੂਪੀ ਮਲਾਹ ਦਾ ਸਾਥ ਲੈ ਕੇ ਹੀ ਹੰਸ ਰੂਪੀ ਗੁਰਮੁਖ ਜਮਦੂਤਾਂ ਦੇ ਜਾਲ ਤੋਂ ਬਚ ਕੇ ਪਾਰ ਲੰਘਦਾ ਹੈ।'),
      en: 'The river of Moh is terrifying and violent; none can cross it through worldly efforts. Only a pure swan-like soul (Hans), taking the Satguru as their divine boatman (Kevat), crosses safely beyond the clutches of death.'
    },
    wordMeanings: {
      hi: [
        { word: 'विकराल (Vikraal)', meaning: 'अत्यंत भयंकर, विकट और अगाध' },
        { word: 'सतगुरु केवट (Satguru kevat)', meaning: 'सतगुरु रूपी निपुण नाविक / मल्लाह' },
        { word: 'हंस (Hans)', meaning: 'नीर-क्षीर विवेकी, निष्पाप मुक्त आत्मा' },
        { word: 'जम नार (Jam naar)', meaning: 'यमराज की यातनाओं व मृत्यु-पाश से मुक्ति' }
      ],
      pb: [
        { word: 'ਵਿਕਰਾਲ', meaning: 'ਡਰਾਉਣੀ / ਭਿਆਨਕ' },
        { word: 'ਕੇਵਟ', meaning: 'ਮਲਾਹ' },
        { word: 'ਹੰਸ', meaning: 'ਸੱਚਾ ਗੁਰਮੁਖ ਜੀਵ' }
      ],
      en: [
        { word: 'Vikraal', meaning: 'Ferocious, tempestuous, and terrifying' },
        { word: 'Satguru kevat', meaning: 'The Satguru as the master ferryman' },
        { word: 'Hans', meaning: 'The pure, discriminating swan-soul' },
        { word: 'Jam naar', meaning: 'Transcending the snares of mortality and Yamraj' }
      ]
    },
    contemplation: {
      hi: 'क्या मैंने भवसागर की विकराल मोह-नदी से पार होने के लिए सतगुरु को अपना खेवनहार बना लिया है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਮੋਹ ਦੀ ਨਦੀ ਪਾਰ ਕਰਨ ਲਈ ਸਤਿਗੁਰੂ ਨੂੰ ਆਪਣਾ ਮਲਾਹ ਬਣਾਇਆ ਹੈ?'),
      en: 'Have I accepted the Satguru as my boatman to cross the terrifying river of attachment?'
    },
    practicalApplication: {
      hi: 'अपनी बुद्धि का अभिमान छोड़ें और जीवन की नौका सतगुरु के ज्ञान और वचनों के सुपुर्द कर दें।',
      pb: devanagariToGurmukhi('ਆਪਣੀ ਮੱਤ ਛੱਡ ਕੇ ਗੁਰੂ ਦੇ ਬਚਨਾਂ \'ਤੇ ਚੱਲੋ।'),
      en: 'Surrender self-will and place the steering wheel of life entirely in the Satguru’s guidance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु केवट! इस विकराल मोह-नदी के भंवर में मेरा हाथ पकड़ लीजिए और अपनी ज्ञान-नौका से मुझे पार उतारिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ ਮਲਾਹ! ਮੈਨੂੰ ਮੋਹ ਦੀ ਨਦੀ ਤੋਂ ਪਾਰ ਲੰਘਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O divine Helmsman Satguru! Hold my hand in the perilous whirlpools of Moh and steer my soul safely to the shores of liberation.'
    },
    quiz: []
  },
  {
    id: 'moh-10',
    number: 1501,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - १०',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੧੦',
      en: 'Moh Ko Ang - 10',
    },
    text: {
      hi: 'मोह सलिल की धार में, बहि गये गहिर गंभीर।\nसूक्ष्म मछली सुरति है, चढ़ती उल्टी नीर।।',
      pb: devanagariToGurmukhi('मोह सलिल की धार में, बहि गये गहिर गंभीर। सूक्ष्म मछली सुरति है, चढ़ती उल्टी नीर।।'),
      en: 'Moh salil kee dhaar mein, bahi gaye gahir gambheer. Sookshma machhlee surati hai, chadhatee ultee neer..'
    },
    transliteration: 'Moh salil ki dhaar mein, bahi gaye gahir gambhir. Sookshma machhli surati hai, chadhati ulti neer.',
    bhavarth: {
      hi: 'इस मोह रूपी जल के प्रबल प्रवाह में, बड़े-बड़े समझदार एवं धीर-वीर पुरुष बह गए, कोई इससे पार न पा सका, परंतु सूक्ष्म रूप में अंदर उपस्थित ध्यान-सुरति एक मछली की भांति है, जो निवृत्ति की दिशा में ऊपर की ओर चढ़ती जाती है। इससे साधक को आत्मस्वरूप-बोध होने पर, सांसारिक मोह समाप्त हो जाता है। बहते हुए जल प्रवाह में जैसे मछली विपरीत दिशा में तैर जाती है, वैसे ही चित्त-वृत्ति सांसारिक प्रवृत्ति से निवृत्ति की ओर अर्थात ध्यान-साधना में लीन हो जाती है। इससे साधक मोह से मुक्त हो जाता है।',
      pb: devanagariToGurmukhi('ਮੋਹ ਰੂਪੀ ਪਾਣੀ ਦੇ ਤੇਜ਼ ਵਹਾਅ ਵਿੱਚ ਵੱਡੇ-ਵੱਡੇ ਵਿਦਵਾਨ ਤੇ ਗੰਭੀਰ ਪੁਰਸ਼ ਰੁੜ੍ਹ ਗਏ। ਪਰ ਅੰਦਰਲੀ ਸੂਖਮ ਸੁਰਤ ਮੱਛੀ ਵਰਗੀ ਹੈ ਜੋ ਪਾਣੀ ਦੇ ਵਹਾਅ ਦੇ ਉਲਟ ਉੱਪਰ ਵੱਲ ਚੜ੍ਹਦੀ ਹੈ। ਜਦੋਂ ਸੁਰਤ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਚੜ੍ਹਦੀ ਹੈ ਤਾਂ ਮੋਹ ਖ਼ਤਮ ਹੋ ਜਾਂਦਾ ਹੈ।'),
      en: 'In the torrential current of Moh, even profound scholars and mighty souls are swept away. Yet subtle conscious awareness (Surati) is like a nimble fish that swims upstream against the rushing torrent. By reversing awareness inward in deep meditation, the seeker conquers worldly delusion.'
    },
    wordMeanings: {
      hi: [
        { word: 'सलिल (Salil)', meaning: 'जल / पानी' },
        { word: 'गहिर गंभीर (Gahir gambheer)', meaning: 'गंभीर, ज्ञानी व प्रतिष्ठित पुरुष' },
        { word: 'सूक्ष्म मछली सुरति (Sookshma machhlee surati)', meaning: 'मछली के समान अंतर्मुखी सूक्ष्म ध्यान-चेतना' },
        { word: 'चढ़ती उल्टी नीर (Chadhatee ultee neer)', meaning: 'प्रवाह की उल्टी दिशा (प्रवृत्ति से निवृत्ति) की ओर ऊपर चढ़ना' }
      ],
      pb: [
        { word: 'ਸਲਿਲ', meaning: 'ਪਾਣੀ / ਜਲ' },
        { word: 'ਸੁਰਤਿ', meaning: 'ਧਿਆਨ / ਅੰਦਰਲੀ ਚੇਤਨਾ' },
        { word: 'ਉਲਟੀ ਨੀਰ', meaning: 'ਪਾਣੀ ਦੇ ਵਹਾਅ ਦੇ ਉਲਟ' }
      ],
      en: [
        { word: 'Salil', meaning: 'Water; torrential stream' },
        { word: 'Gahir gambheer', meaning: 'Profound minds, stalwarts, and deep scholars' },
        { word: 'Sookshma machhlee surati', meaning: 'Conscious attention (Surati) moving gracefully like a subtle fish' },
        { word: 'Chadhatee ultee neer', meaning: 'Swimming upstream against worldly currents toward the transcendent source' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी सुरति संसार के बहाव में बह रही है या मछली की तरह अंतर्मुखी होकर ऊपर चढ़ रही है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੇਰੀ ਸੁਰਤ ਸੰਸਾਰ ਦੇ ਵਹਾਅ ਵਿੱਚ ਰੁੜ੍ਹ ਰਹੀ ਹੈ ਜਾਂ ਅੰਤਰਮੁਖੀ ਹੋ ਰਹੀ ਹੈ?'),
      en: 'Is my attention drifting along the downward worldly stream, or swimming upstream like a fish toward the inner heights of consciousness?'
    },
    practicalApplication: {
      hi: 'ध्यान-अभ्यास द्वारा सुरति को बाह्य विषयों से समेटकर अंतर्मुखी करें और आज्ञा चक्र की ओर एकाग्र करें।',
      pb: devanagariToGurmukhi('ਧਿਆਨ ਲਗਾ ਕੇ ਸੁਰਤ ਨੂੰ ਬਾਹਰੋਂ ਮੋੜ ਕੇ ਅੰਦਰ ਇਕਾਗਰ ਕਰੋ।'),
      en: 'Reverse outgoing senses through daily meditation and direct conscious focus upward into the inner sanctuary.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी सुरति को ऐसी मछली बना दीजिए जो मोह के प्रवाह को चीरकर आपके निज-धाम में प्रविष्ट हो सके। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਸੁਰਤ ਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਨਾਲ ਜੋੜੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Transform my awareness into a divine fish that swims upstream against all illusion to merge in Your eternal Abode.'
    },
    quiz: []
  },
  {
    id: 'moh-11',
    number: 1502,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - ११',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੧੧',
      en: 'Moh Ko Ang - 11',
    },
    text: {
      hi: 'कुरुक्षेत्र सब मेदिनी, खेती करै किसान।\nमोह मिरग सब चरि गया, आसन रहि खलिहान।।',
      pb: devanagariToGurmukhi('कुरुक्षेत्र सब मेदिनी, खेती करै किसान। मोह मिरग सब चरि गया, आसन रहि खलिहान।।'),
      en: 'Kurukshetra sab medinee, khetee karai kisaan. Moh mirag sab chari gayaa, aasan rahi khalihaan..'
    },
    transliteration: 'Kurukshetra sab medini, kheti karai kisaan. Moh mirag sab chari gaya, aasan rahi khalihaan.',
    bhavarth: {
      hi: 'इस समस्त संसार की पृथ्वी धर्म-कर्म का क्षेत्र है और जगत के सब जीव-रूप किसान हैं, जो अपने ज्ञान-विचार से अपनी कर्म रूपी खेती कर रहे हैं। मोह रूपी मृग परिश्रम से की गई सारी खेती को चर गया और जो पुण्य-सुख-शांति का फल मिलना था, उससे जीव वंचित रह गया, अतः मोह रूपी मृग को समाप्त कर देना ही उचित है।',
      pb: devanagariToGurmukhi('ਇਹ ਸਾਰੀ ਧਰਤੀ ਕਰਮ-ਖੇਤਰ ਹੈ ਅਤੇ ਜੀਵ ਕਿਸਾਨ ਹਨ ਜੋ ਕਰਮਾਂ ਦੀ ਖੇਤੀ ਕਰ ਰਹੇ ਹਨ। ਪਰ ਮੋਹ ਰੂਪੀ ਹਿਰਨ ਸਾਰੀ ਪੁੰਨ-ਖੇਤੀ ਚਰ ਗਿਆ ਅਤੇ ਖਲਿਆਣ ਖ਼ਾਲੀ ਰਹਿ ਗਿਆ। ਇਸ ਲਈ ਮੋਹ ਨੂੰ ਖ਼ਤਮ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।'),
      en: 'This entire earth is a field of karmic action (Kurukshetra) and mortals are the farmers tilling the soil of life. Yet the wild deer of Moh grazes away the entire harvest of virtues, leaving the threshing floor empty. Therefore, destroy the deer of attachment.'
    },
    wordMeanings: {
      hi: [
        { word: 'कुरुक्षेत्र (Kurukshetra)', meaning: 'कर्म और धर्म का युद्ध-क्षेत्र' },
        { word: 'मेदिनी (Medinee)', meaning: 'पृथ्वी / संसार' },
        { word: 'मोह मिरग (Moh mirag)', meaning: 'मोह रूपी अनियंत्रित मृग (आसक्ति)' },
        { word: 'खलिहान (Khalihaan)', meaning: 'अनाज रखने का स्थान, अंतिम साधना-फल' }
      ],
      pb: [
        { word: 'ਮੇਦਿਨੀ', meaning: 'ਧਰਤੀ' },
        { word: 'ਮੋਹ ਮਿਰਗ', meaning: 'ਮੋਹ ਰੂਪੀ ਹਿਰਨ' },
        { word: 'ਖਲਿਹਾਨ', meaning: 'ਖਲਿਆਣ / ਅਨਾਜ ਦਾ ਢੇਰ' }
      ],
      en: [
        { word: 'Kurukshetra', meaning: 'The battlefield / field of righteous action' },
        { word: 'Medinee', meaning: 'The earthly plane of existence' },
        { word: 'Moh mirag', meaning: 'The wild deer of emotional attachment' },
        { word: 'Khalihaan', meaning: 'The threshing floor where the spiritual harvest is gathered' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरे जप-तप और शुभ कर्मों की खेती को मोह रूपी मृग नष्ट तो नहीं कर रहा है?',
      pb: devanagariToGurmukhi('ਕੀ ਮੋਹ ਮੇਰੇ ਸ਼ੁਭ ਕਰਮਾਂ ਦੀ ਖੇਤੀ ਨੂੰ ਖਾ ਰਿਹਾ ਹੈ?'),
      en: 'Is the deer of attachment grazing away the spiritual merits and peace harvested through my devotion?'
    },
    practicalApplication: {
      hi: 'शुभ कर्म और साधना करते हुए मोह और आसक्ति से अपनी आध्यात्मिक पूंजी की रक्षा करें।',
      pb: devanagariToGurmukhi('ਆਪਣੀ ਸਾਧਨਾ ਨੂੰ ਮੋਹ ਤੋਂ ਬਚਾ ਕੇ ਰੱਖੋ।'),
      en: 'Guard your spiritual practice with mindfulness so attachment does not devour the fruits of devotion.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी साधना और जीवन की खेती को मोह-मृग से बचाकर अनंत शांति का फल प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਰੂਹਾਨੀ ਖੇਤੀ ਦੀ ਰੱਖਿਆ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Guard the harvest of my spiritual life against the destructive deer of delusion and grant me everlasting peace.'
    },
    quiz: []
  },
  {
    id: 'moh-12',
    number: 1503,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'मोह को अंग - १२',
      pb: 'ਮੋਹ ਕੋ ਅੰਗ - ੧੨',
      en: 'Moh Ko Ang - 12',
    },
    text: {
      hi: 'एक मोह के कारनै, भरत धरी दो देह।\nते नर कैसे छूटिहैं, जिनके बहुत सनेह।।',
      pb: devanagariToGurmukhi('एक मोह के कारनै, भरत धरी दो देह। ते नर कैसे छूटिहैं, जिनके बहुत सनेह।।'),
      en: 'Ek moh ke kaaranai, Bharat dharee do deh. Te nar kaise chhoothihain, jinke bahut saneh..'
    },
    transliteration: 'Ek moh ke kaaranai, Bharat dhari do deh. Te nar kaise chhutihain, jinke bahut saneh.',
    bhavarth: {
      hi: 'केवल एक मोह (मृग-छौने के प्रति आसक्ति) के कारण ही भरत मुनि को दो देह (मृग और फिर जड़भरत) धारण करनी पड़ी। ऐसे में जिनके बहुत सारे स्नेह-संबंध हैं और उनमें सबसे परस्पर मोह है, भला वे कैसे इस मोह-जाल से मुक्ति प्राप्त कर सकेंगे, अर्थात उन्हें कितनी देह धारण करनी पडेगी? अतः विचार कर विवेक भाव से मोह का त्याग कर देना चाहिए।',
      pb: devanagariToGurmukhi('ਸਿਰਫ਼ ਇੱਕ ਹਿਰਨ ਦੇ ਬੱਚੇ ਦੇ ਮੋਹ ਕਾਰਨ ਭਰਤ ਮੁਨੀ ਨੂੰ ਦੋ ਜਨਮ ਹੋਰ ਧਾਰਨ ਕਰਨੇ ਪਏ। ਜਿਨ੍ਹਾਂ ਦੇ ਅਣਗਿਣਤ ਸੰਸਾਰੀ ਮੋਹ-ਸਨੇਹ ਹਨ, ਉਹ ਕਿਵੇਂ ਮੁਕਤ ਹੋਣਗੇ? ਇਸ ਲਈ ਵਿਵੇਕ ਨਾਲ ਮੋਹ ਦਾ ਤਿਆਗ ਕਰੋ।'),
      en: 'For just a single lingering attachment to a young deer, the great ascetic Sage Bharat had to undergo two additional rebirths. How then can mortals, entangled in countless emotional attachments, ever hope to attain release? Therefore, renounce all delusive ties through spiritual wisdom.'
    },
    wordMeanings: {
      hi: [
        { word: 'भरत धरी दो देह (Bharat dharee do deh)', meaning: 'जड़भरत ऋषि को मृग-मोह के कारण दो अतिरिक्त जन्म लेने पड़े' },
        { word: 'सनेह (Saneh)', meaning: 'स्नेह, सांसारिक मोह और आसक्ति' },
        { word: 'ते नर कैसे छूटिहैं (Te nar kaise chhoothihain)', meaning: 'वे मनुष्य आवागमन के चक्र से कैसे मुक्त हो सकेंगे' }
      ],
      pb: [
        { word: 'ਭਰਤ ਧਰੀ ਦੋ ਦੇਹ', meaning: 'ਭਰਤ ਮੁਨੀ ਨੂੰ ਦੋ ਜਨਮ ਧਾਰਨੇ ਪਏ' },
        { word: 'ਸਨੇਹ', meaning: 'ਮੋਹ-ਮਾਇਆ ਦਾ ਪਿਆਰ' }
      ],
      en: [
        { word: 'Bharat dharee do deh', meaning: 'Sage Bharat was forced into two additional rebirths due to attachment' },
        { word: 'Saneh', meaning: 'Emotional entanglement, worldly affection, and clinging' },
        { word: 'Te nar kaise chhoothihain', meaning: 'How can such mortals ever escape the wheel of reincarnation?' }
      ]
    },
    contemplation: {
      hi: 'जब एक छोटे से मोह ने एक सिद्ध तपस्वी का मार्ग रोक दिया, तो क्या मैं अपने अनगिनत मोह-बंधनों के प्रति सजग हूँ?',
      pb: devanagariToGurmukhi('ਕੀ ਮੈਂ ਆਪਣੇ ਮੋਹ ਦੇ ਬੰਧਨਾਂ ਪ੍ਰਤੀ ਸੁਚੇਤ ਹਾਂ?'),
      en: 'When a single attachment obstructed a mighty sage, am I mindful of the countless emotional entanglements holding me back?'
    },
    practicalApplication: {
      hi: 'सभी सांसारिक संबंधों में राग-द्वेष से परे रहकर साक्षी भाव का अभ्यास करें।',
      pb: devanagariToGurmukhi('ਸਾਰੇ ਰਿਸ਼ਤਿਆਂ ਵਿੱਚ ਨਿਰਲੇਪ ਤੇ ਸਾਖੀ ਭਾਵ ਰੱਖੋ।'),
      en: 'Practice witnessing consciousness (Sakshi Bhav), loving all beings without possessive attachment.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! भरत मुनि जैसा मोह भी मुझे न बांध सके, ऐसी निर्मोह विवेक-दृष्टि और अपनी चरण-शरण प्रदान कीजिए। साहेब बंदगी साहेब!',
      pb: devanagariToGurmukhi('ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਰਮੋਹ ਵਿਵੇਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'),
      en: 'O Satguru! Grant me the unshakeable wisdom of detachment so that no worldly tie can impede my journey to Your Lotus Feet.'
    },
    quiz: []
  }
];
