import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_KARANI_KO_ANG: Sakhi[] = [
  {
    id: 'karani-1',
    number: 1599,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧',
      en: 'Karani Ko Ang - 1',
    },
    text: {
      hi: 'करनी गर्व निवारनी, मुक्ति स्वारथी सोय।\nकथनी तजि करनी करै, तब मुक्ताहल होय।।',
      pb: 'ਕਰਨੀ ਗਰਵ ਨਿਵਾਰਨੀ, ਮੁਕ੍ਤਿ ਸ੍ਵਾਰਥੀ ਸੋਇ।\nਕਥਨੀ ਤਜਿ ਕਰਨੀ ਕਰੈ, ਤਬ ਮੁਕ੍ਤਾਹਲ ਹੋਇ।।',
      en: 'Karanee garv nivaaranee, mukti swaarathi soy. Kathani taji karanee karai, tab muktaahal hoy..',
    },
    transliteration: 'Karanee garv nivaaranee, mukti swaarathi soy. Kathani taji karanee karai, tab muktaahal hoy.',
    bhavarth: {
      hi: 'मुक्ति जैसे स्वार्थ हित के लिए पवित्र करनी ही करनी चाहिए, परंतु उसका अहंकार त्यागकर मात्र कथनी करने का अवगुण छोड़ देना चाहिए। पवित्र करनी करने से ही मोक्ष की प्राप्ति हो सकती है।',
      pb: 'ਮੁਕਤੀ ਵਰਗੇ ਪਰਮਾਰਥ ਕੰਮ ਲਈ ਕਰਨੀ (ਚੰਗੇ ਅਮਲ) ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ, ਪਰ ਉਸ ਦਾ ਹੰਕਾਰ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ। ਕੇਵਲ ਗੱਲਾਂ ਛੱਡ ਕੇ ਜੋ ਕਰਨੀ ਕਰਦਾ ਹੈ, ਉਹੀ ਅਸਲ ਮੋਤੀ (ਮੁਕਤਾਹਲ) ਬਣਦਾ ਹੈ।',
      en: 'One must practice pure action for the sake of ultimate liberation, but without any pride. Giving up mere talking and adopting pure, humble practice makes one shine like a rare pearl.',
    },
    wordMeanings: {
      hi: [
        { word: 'गर्व निवारनी (Garv nivaaranee)', meaning: 'अहंकार को मिटाने वाली' },
        { word: 'मुक्ताहल (Muktaahal)', meaning: 'मोती / मुक्त आत्मा / श्रेष्ठ' }
      ],
      pb: [
        { word: 'ਗਰਵ ਨਿਵਾਰਨੀ (Garv nivaaranee)', meaning: 'ਅਹੰਕਾਰ ਦੂਰ ਕਰਨ ਵਾਲੀ' },
        { word: 'ਮੁਕ੍ਤਾਹਲ (Muktaahal)', meaning: 'ਮੋਤੀ / ਮੁਕਤ ਆਤਮਾ' }
      ],
      en: [
        { word: 'Garv nivaaranee', meaning: 'Ego-destroying / Humbling' },
        { word: 'Muktaahal', meaning: 'Pearl / Liberated soul / Sublime' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने सत्कर्मों (करनी) का भी घमंड करने लगा हूँ, जिससे मेरी साधना दूषित हो रही है?',
      pb: 'ਕੀ ਮੈਨੂੰ ਆਪਣੇ ਚੰਗੇ ਕੰਮਾਂ ਦਾ ਹੰਕਾਰ ਹੈ?',
      en: 'Do I take pride in my good deeds (actions), thereby polluting the purity of my practice?'
    },
    practicalApplication: {
      hi: 'बिना किसी मान व दिखावे के पूरी विनम्रता से सतगुरु साहेब की निष्काम भक्ति व सेवा करें।',
      pb: 'ਬਿਨਾਂ ਵਿਖਾਵੇ ਦੇ ਗੁਰੂ ਜੀ ਦੀ ਸੇਵਾ ਕਰੋ।',
      en: 'Engage in selfless service and meditation with complete humility, seeking no public applause.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे अहंकार-रहित पवित्र करनी का बल दें ताकि मेरा चित्त सदा निर्मल रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਹੰਕਾਰ ਰਹਿਤ ਕਰਨੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Bless me with the strength of ego-free action, keeping my heart forever spotless.'
    },
    quiz: []
  },
  {
    id: 'karani-2',
    number: 1600,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - २',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੨',
      en: 'Karani Ko Ang - 2',
    },
    text: {
      hi: 'कबीर करनी आपनी, कबहुं न निष्फल जाय।\nसात समुद्र आड़ा पड़े, मिलै अगाऊ आय।।',
      pb: 'ਕਬੀਰ ਕਰਨੀ ਆਪਨੀ, ਕਬਹੁੰ ਨ ਨਿਸ਼੍ਫਲ ਜਾਇ।\nਸਾਤ ਸਮੁਦ੍ਰ ਆੜਾ ਪੜੇ, ਮਿਲੈ ਅਗਾਊ ਆਇ।।',
      en: 'Kabir karanee aapanee, kabahun na nishphal jaay. Saat samudr aada padai, milai agaaoo aay..',
    },
    transliteration: 'Kabir karanee aapanee, kabahun na nishphal jaay. Saat samudr aada padai, milai agaaoo aay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि अपनी की हुई करनी का फल कभी भी निष्फल नहीं हो सकता। चाहे उसके रोक (आड़) में सात समुद्र ही क्यों न आ जाएं, परंतु उसका फल समय आने पर अवश्य ही प्राप्त होता है।',
      pb: 'ਕਬੀਰ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਆਪਣੀ ਕੀਤੀ ਹੋਈ ਕਰਨੀ ਦਾ ਫਲ ਕਦੇ ਵਿਅਰਥ ਨਹੀਂ ਜਾਂਦਾ। ਭਾਵੇਂ ਰੁਕਾਵਟ ਵਜੋਂ ਸੱਤ ਸਮੁੰਦਰ ਵੀ ਸਾਹਮਣੇ ਆ ਜਾਣ, ਪਰ ਕੀਤੇ ਦਾ ਫਲ ਸਮਾਂ ਆਉਣ ਤੇ ਅੱਗੇ ਆ ਕੇ ਜ਼ਰੂਰ ਮਿਲਦਾ ਹੈ।',
      en: 'Kabir says that the fruit of one\'s own actions is never lost or wasted. Even if seven oceans stand as barriers in between, the results of your actions will inevitably come forward to meet you when the time is ripe.',
    },
    wordMeanings: {
      hi: [
        { word: 'आड़ा पड़े (Aada padai)', meaning: 'बाधा बनना / रुकावट बनना' },
        { word: 'अगाऊ (Agaaoo)', meaning: 'आगे बढ़कर / स्वतः / सामने' }
      ],
      pb: [
        { word: 'ਆੜਾ ਪੜੇ (Aada padai)', meaning: 'ਰੁਕਾਵਟ ਬਣਨਾ' },
        { word: 'ਅਗਾਊ (Agaaoo)', meaning: 'ਅੱਗੇ ਆ ਕੇ / ਸਵੈ' }
      ],
      en: [
        { word: 'Aada padai', meaning: 'Stand as a barrier / Block' },
        { word: 'Agaaoo', meaning: 'In advance / Foremost / Naturally' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सत्कर्मों का तत्काल फल न पाकर निराश हो जाता हूँ, यह भूलकर कि कर्म का नियम अटूट है?',
      pb: 'ਕੀ ਮੈਂ ਨੇਕ ਕਰਮਾਂ ਦਾ ਫਲ ਜਲਦੀ ਨਾ ਮਿਲਣ ਤੇ ਨਿਰਾਸ਼ ਹੁੰਦਾ ਹਾਂ?',
      en: 'Do I lose heart when my good deeds do not yield instant results, forgetting that the law of karma is absolute?'
    },
    practicalApplication: {
      hi: 'फल की चिंता किए बिना निरंतर शुभ कार्य और गुरु-सुमिरन करते रहें, सही समय पर फल अवश्य मिलेगा।',
      pb: 'ਫਲ ਦੀ ਚਿੰਤਾ ਤੋਂ ਬਿਨਾਂ ਨੇਕ ਕੰਮ ਕਰਦੇ ਰਹੋ।',
      en: 'Persist in doing good and meditating on Nam without anxiety, knowing that no noble effort ever goes in vain.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे निष्काम भाव से निरंतर कर्तव्य पथ पर चलने का धैर्य प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'Hੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹेਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Give me the patience to perform my duty selflessly, trusting entirely in Your divine laws.'
    },
    quiz: []
  },
  {
    id: 'karani-3',
    number: 1601,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ३',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੩',
      en: 'Karani Ko Ang - 3',
    },
    text: {
      hi: 'श्रोता तो घरहीं नहीं, वक्ता बकै सो बाद।\nश्रोता वक्ता एक घर, तब कथनी का स्वाद।।',
      pb: 'ਸ੍ਰੋਤਾ ਤੋ ਘਰਹੀਂ ਨਹੀਂ, ਵਕ੍ਤਾ ਬਕੈ ਸੋ ਬਾਦ।\nਸ੍ਰੋਤਾ ਵਕ੍ਤਾ ਏਕ ਘਰ, ਤਬ ਕਥਨੀ ਕਾ ਸ੍ਵਾਦ।।',
      en: 'Srota to gharahin nahin, vakta bakai so baad. Srota vakta ek ghar, tab kathani ka swaad..',
    },
    transliteration: 'Srota to gharahin nahin, vakta bakai so baad. Srota vakta ek ghar, tab kathani ka swaad.',
    bhavarth: {
      hi: 'जब श्रोता ही ध्यानपूर्वक न सुनता हो, तो वक्ता का वक्तव्य बेकार है। जब श्रोता और वक्ता दोनों एक लक्ष्य में स्थिर हों, तभी उस कथनी के ज्ञान का स्वाद-रस प्राप्त हो सकता है। अच्छा श्रोता ही सटीक करनी द्वारा अच्छा वक्ता बने यही उत्तम मार्ग है।',
      pb: 'ਜਦੋਂ ਸੁਣਨ ਵਾਲਾ ਮਨੋਂ ਹਾਜ਼ਰ ਨਾ ਹੋਵੇ, ਤਾਂ ਸੁਣਾਉਣ ਵਾਲੇ ਦੀਆਂ ਗੱਲਾਂ ਵਿਅਰथ ਹਨ। ਜਦੋਂ ਸੁਣਨ ਤੇ ਸੁਣਾਉਣ ਵਾਲੇ ਦੋਵੇਂ ਇੱਕੋ ਭਾਵ ਵਿੱਚ ਲੀਨ ਹੋਣ, ਉਦੋਂ ਹੀ ਗਿਆਨ ਦਾ ਅਸਲ ਆਨੰਦ ਆਉਂਦਾ ਹੈ।',
      en: 'If the listener\'s mind is absent, the speaker\'s words are spent in vain. Only when the speaker and the listener are united in a single focused intent can the sweet essence of spiritual wisdom be experienced.',
    },
    wordMeanings: {
      hi: [
        { word: 'घरहीं नहीं (Gharahin nahin)', meaning: 'मन से उपस्थित न होना / अन्यत्र होना' },
        { word: 'बाद (Baad)', meaning: 'व्यर्थ / बेकार / वाद-विवाद' },
        { word: 'एक घर (Ek ghar)', meaning: 'एक लक्ष्य / एक विचार में एकाग्र होना' }
      ],
      pb: [
        { word: 'ਘਰਹੀਂ ਨਹੀਂ (Gharahin nahin)', meaning: 'ਮਨੋਂ ਹਾਜ਼ਰ ਨਾ ਹੋਣਾ' },
        { word: 'ਬਾਦ (Baad)', meaning: 'ਵਿਅਰਥ' },
        { word: 'ਏਕ ਘਰ (Ek ghar)', meaning: 'ਇੱਕੋ ਥਾਂ ਟਿਕਿਆ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Gharahin nahin', meaning: 'Not at home / Absent-minded' },
        { word: 'Baad', meaning: 'In vain / Waste' },
        { word: 'Ek ghar', meaning: 'In one house / Aligned in single focus' }
      ]
    },
    contemplation: {
      hi: 'सत्संग सुनते समय क्या मेरा मन एकाग्र व समर्पित रहता है, या वह सांसारिक विचारों में भटका रहता है?',
      pb: 'ਕੀ ਮੈਂ ਸਤਿਸੰਗ ਪੂਰੇ ਮਨ ਨਾਲ ਸੁਣਦਾ ਹਾਂ?',
      en: 'When listening to spiritual discourse, is my mind truly present, or does it wander in worldly lanes?'
    },
    practicalApplication: {
      hi: 'जब भी ज्ञान-चर्चा सुनें, अपने चंचल मन को रोककर पूरी श्रद्धा से केवल उपदेश पर ध्यान दें।',
      pb: 'ਗਿਆਨ ਦੀਆਂ ਗੱਲਾਂ ਧਿਆਨ ਨਾਲ ਸੁਣੋ ਅਤੇ ਜੀਵਨ ਵਿੱਚ ਉਤਾਰੋ।',
      en: 'Quiet your thoughts when receiving wisdom; receive the words with active, respectful attention.'
    },
    samarpanPrayer: {
      hi: 'हे दयालु देव! मुझे एक उत्तम व एकाग्र श्रोता बनने की सदबुद्धि प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੇਰੇ ਮਨ ਨੂੰ ਸਥਿਰਤਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Merciful Master! Grant me the quiet focus of an ideal listener so that Your words take root in my heart.'
    },
    quiz: []
  },
  {
    id: 'karani-4',
    number: 1602,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ४',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੪',
      en: 'Karani Ko Ang - 4',
    },
    text: {
      hi: 'श्रम ही ते सब कुछ बने, बिन श्रम मिले न काहि।\nसीधी अंगुली घी जम्मो, कबहूं निकसै नाहिं।।',
      pb: 'ਸ਼੍ਰਮ ਹੀ ਤੇ ਸਬ ਕੁਛ ਬਨੇ, ਬਿਨ ਸ਼੍ਰਮ ਮਿਲੇ ਨ ਕਾਹਿ।\nਸੀਧੀ ਅੰਗੁਲੀ ਘੀ ਜਮ੍ਮੋ, ਕਬਹੂੰ ਨਿਕਸੈ ਨਾਹਿਂ।।',
      en: 'Shram hee te sab kuchh bane, bin shram mile na kaahi. Seedhee angulee ghee jammo, kabahun nikasai naahin..',
    },
    transliteration: 'Shram hee te sab kuchh bane, bin shram mile na kaahi. Seedhee angulee ghee jammo, kabahun nikasai naahin.',
    bhavarth: {
      hi: 'परिश्रम से ही सब काम बनते हैं, बिना परिश्रम तो कहीं भी कुछ नहीं प्राप्त हो सकता। जमा हुआ घी सीधी उंगली से कभी नहीं निकलता।',
      pb: 'ਮਿਹਨਤ ਨਾਲ ਹੀ ਸਾਰੇ ਕੰਮ ਬਣਦੇ ਹਨ, ਬਿਨਾਂ ਮਿਹਨਤ ਦੇ ਕੁਝ ਨਹੀਂ ਮਿਲਦਾ। ਜੰਮਿਆ ਹੋਇਆ ਘਿਓ ਕਦੇ ਸਿੱਧੀ ਉਂਗਲ ਨਾਲ ਬਾਹਰ ਨਹੀਂ ਨਿਕਲਦਾ।',
      en: 'All achievements are born from diligent effort; without exertion, nothing is ever obtained. Frozen ghee can never be taken out of a container with a straight finger (it requires a bent, active finger/effort).',
    },
    wordMeanings: {
      hi: [
        { word: 'श्रम (Shram)', meaning: 'परिश्रम / उद्यम / पुरुषार्थ' },
        { word: 'काहि (Kaahi)', meaning: 'किसी को / कुछ भी' },
        { word: 'जम्मो (Jammo)', meaning: 'जमा हुआ' }
      ],
      pb: [
        { word: 'ਸ਼੍ਰਮ (Shram)', meaning: 'ਮਿਹਨਤ / ਉੱਦਮ' },
        { word: 'ਕਾਹਿ (Kaahi)', meaning: 'ਕਿਸੇ ਨੂੰ' },
        { word: 'ਜਮ੍ਮੋ (Jammo)', meaning: 'ਜੰਮਿਆ ਹੋਇਆ' }
      ],
      en: [
        { word: 'Shram', meaning: 'Effort / Diligence / Industry' },
        { word: 'Kaahi', meaning: 'To anyone / Anything' },
        { word: 'Jammo', meaning: 'Solidified / Frozen' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं पुरुषार्थ किए बिना ही आध्यात्मिक सफलता व मानसिक शांति की इच्छा रख रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਬਿਨਾਂ ਮਿਹਨਤ ਦੇ ਸਫ਼ਲਤਾ ਦੀ ਆਸ ਰੱਖਦਾ ਹਾਂ?',
      en: 'Am I expecting spiritual progress and inner peace without investing any sincere personal effort?'
    },
    practicalApplication: {
      hi: 'आलस्य का त्याग कर पूरी निष्ठा के साथ नित्य नाम-स्मरण और कर्तव्य कर्म में जुट जाएँ।',
      pb: 'ਆਲਸ ਛੱਡ ਕੇ ਨਾਮ ਜਪਣ ਦੀ ਮਿਹਨत ਕਰੋ।',
      en: 'Cast off spiritual laziness; bend your efforts toward regular meditation and selfless duties.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मुझे आलस्य रूपी दुर्गुण से बचाकर पुरुषार्थी व उत्साही साधक बनाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਉੱਦਮੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Deliver me from lethargy; inspire my soul with active enthusiasm and perseverance.'
    },
    quiz: []
  },
  {
    id: 'karani-5',
    number: 1603,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ५',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੫',
      en: 'Karani Ko Ang - 5',
    },
    text: {
      hi: 'जैसी मुख ते नीकसे, तैसी चालै नाहिं।\nमानुष नहीं वे श्वान गति, बांधे जमपुर जांहि।।',
      pb: 'ਜੈਸੀ ਮੁਖ ਤੇ ਨੀਕਸੇ, ਤੈਸੀ ਚਾਲੈ ਨਾਹਿਂ।\nਮਾਨੁਸ਼ ਨਹੀਂ ਵੇ ਸ਼੍ਵਾਨ ਗਤਿ, ਬਾਂਧੇ ਜਮਪੁਰ ਜਾਂਹਿ।।',
      en: 'Jaisee mukh te neekase, taisee chaalai naahin. Maanush nahin ve shwaan gati, baandhe jamapur jaahin..',
    },
    transliteration: 'Jaisee mukh te neekase, taisee chaalai naahin. Maanush nahin ve shwaan gati, baandhe jamapur jaahin.',
    bhavarth: {
      hi: 'भक्ति-ज्ञान की जिस प्रकार मीठी-मीठी बातें उनके मुंह से निकलती हैं, वैसा ही अनुकरण वे स्वयं नहीं करते, अर्थात उस प्रकार का उनका आचरण नहीं होता। वे मनुष्य न होकर कुत्ते के समान हैं। इस प्रकार के लोग वैसी ही काम-वासना में बंधकर महा-भयंकर मृत्यु के मुख में जाएंगे।',
      pb: 'ਜਿਹੋ ਜਿਹੀਆਂ ਚੰਗੀਆਂ ਗੱਲਾਂ ਮੂੰਹੋਂ ਬੋਲਦੇ ਹਨ, ਉਹੋ ਜਿਹਾ ਚਰਿੱਤਰ ਖੁਦ ਨਹੀਂ ਰੱਖਦੇ। ਉਹ ਮਨੁੱਖ ਨਹੀਂ ਸਗੋਂ ਕੁੱਤੇ ਵਰਗੇ ਹਨ ਅਤੇ ਅੰਤ ਵਿੱਚ ਜਮਪੁਰ (ਨਰਕ) ਜਾਣਗੇ।',
      en: 'Those who speak sweet spiritual words but do not walk their own talk are not true humans; they behave like dogs. Bound by their hidden desires, they fall headlong into spiritual ruin and death.',
    },
    wordMeanings: {
      hi: [
        { word: 'नीकसे (Neekase)', meaning: 'निकलना / बोलना' },
        { word: 'श्वान गति (Shwaan gati)', meaning: 'कुत्ते का स्वभाव / अशोभनीय आचरण' },
        { word: 'जमपुर (Jamapur)', meaning: 'यमलोक / नरक / घोर दुःख' }
      ],
      pb: [
        { word: 'ਨੀਕਸੇ (Neekase)', meaning: 'ਨਿਕਲਣਾ' },
        { word: 'ਸ਼੍ਵਾਨ ਗਤਿ (Shwaan gati)', meaning: 'ਕੁੱਤੇ ਵਰਗਾ ਸੁਭਾਅ' },
        { word: 'ਜੰਮਪੁਰ (Jamapur)', meaning: 'ਨਰਕ' }
      ],
      en: [
        { word: 'Neekase', meaning: 'Issues / Comes out' },
        { word: 'Shwaan gati', meaning: 'Dog-like nature / Undignified behavior' },
        { word: 'Jamapur', meaning: 'Death\'s realm / Region of suffering' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरी कथनी और करनी के बीच बड़ा फासला है, जिससे मेरा आचरण पतन की ओर जा रहा है?',
      pb: 'ਕੀ ਮੇਰੇ ਬੋਲ ਤੇ ਮੇਰਾ ਆਚਰਣ ਵੱਖ-ਵੱਖ ਹਨ?',
      en: 'Is there a wide gap between my spoken words and my daily conduct, leading my soul to degradation?'
    },
    practicalApplication: {
      hi: 'कथनी और करनी के भेद को मिटाएँ; जो कहें, उसे अपने जीवन में अवश्य कर के दिखाएँ।',
      pb: 'ਜੋ ਕਹੋ, ਉਹ ਖੁਦ ਵੀ ਕਰ ਕੇ ਦਿਖਾਓ।',
      en: 'Bridge the gap between your words and behavior; speak only what you genuinely live by.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे इस भयंकर दोगलेपन से बचाकर परम प्रामाणिकता प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'Hੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਕਥਨੀ-ਕਰਨੀ ਦੇ ਭੇਦ ਤੋਂ ਬਚਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Deliver me from the disease of hypocrisy, and bless my life with absolute authenticity.'
    },
    quiz: []
  },
  {
    id: 'karani-6',
    number: 1604,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ६',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੬',
      en: 'Karani Ko Ang - 6',
    },
    text: {
      hi: 'रहनी के मैदान में, कथनी आवै जाय।\nकथनी पीसै पीसना, रहनी अमल कमाय।।',
      pb: 'ਰਹਨੀ ਕੇ ਮੈਦਾਨ ਮੈਂ, ਕਥਨੀ ਆਵੈ ਜਾਇ।\nਕਥਨੀ ਪੀਸੈ ਪੀਸਨਾ, ਰਹਨੀ ਅਮਲ ਕਮਾਇ।।',
      en: 'Rahanee ke maidaan mein, kathani aavai jaay. Kathani peesai peesana, rahanee amal kamaay..',
    },
    transliteration: 'Rahanee ke maidaan mein, kathani aavai jaay. Kathani peesai peesana, rahanee amal kamaay.',
    bhavarth: {
      hi: 'जहां पवित्र रहनी (आचरण) का खुला क्षेत्र है, वहां कथनी स्वयं ही स्वाभाविक रूप से पहुंच जाती है। कथनी कथना तो पिसाई पीसने के समान है और रहनी रहना उस कथन-कमाई का जीवन में प्रयोग करना है।',
      pb: 'ਜਿੱਥੇ ਪਵਿੱਤਰ ਰਹਨੀ (ਸੱਚਾ ਆਚਰਣ) ਹੈ, ਉੱਥੇ ਕਥਨੀ ਆਪਣੇ ਆਪ ਆ ਜਾਂਦੀ ਹੈ। ਕੇਵਲ ਗੱਲਾਂ ਕਰਨਾ ਚੱਕੀ ਪੀਸਣ ਵਰਗਾ ਮੁਸ਼ਕਿਲ ਕੰਮ ਹੈ, ਪਰ ਰਹਿਣੀ ਰਹਿਣਾ ਅਸਲ ਸਫ਼ਲਤਾ ਹੈ।',
      en: 'In the field of noble living (pure conduct), mere talking has little significance. Speaking is like grinding flour over and over, while noble living is the actual earned wealth used in life.',
    },
    wordMeanings: {
      hi: [
        { word: 'रहनी (Rahanee)', meaning: 'आचरण / जीवन शैली / रहन-सहन' },
        { word: 'पीसै पीसना (Peesai peesana)', meaning: 'व्यर्थ का श्रम / निरर्थक अभ्यास' },
        { word: 'अमल कमाय (Amal kamaay)', meaning: 'अमल में लाना / अभ्यास करना' }
      ],
      pb: [
        { word: 'ਰਹਨੀ (Rahanee)', meaning: 'ਸੱਚਾ ਜੀਵਨ / ਆਚਰਣ' },
        { word: 'ਪੀਸੈ ਪੀਸਨਾ (Peesai peesana)', meaning: 'ਖਾਲੀ ਮਿਹਨਤ' },
        { word: 'ਅਮਲ ਕਮਾਇ (Amal kamaay)', meaning: 'ਕਮਾਈ ਕਰਨੀ / ਅਮਲ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Rahanee', meaning: 'Noble living / Pure character' },
        { word: 'Peesai peesana', meaning: 'Grinding the mill / Empty toil' },
        { word: 'Amal kamaay', meaning: 'Practicing / Implementing' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल "पीसना पीसने" की भांति शब्दों को रट रहा हूँ, या "रहनी" का सच्चा अमल कमा रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰਬਾਣੀ ਤੇ ਅਮਲ ਕਰ ਰਿਹਾ ਹਾਂ ਜਾਂ ਸਿਰਫ ਪੜ੍ਹ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I merely repeating spiritual quotes like an endless flour mill, or am I actually living those truths?'
    },
    practicalApplication: {
      hi: 'शास्त्रों के सिद्धांतों को केवल दोहराने की अपेक्षा उन्हें अपने दैनिक आचरण में ढालें।',
      pb: 'ਗੁਰੂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਨੂੰ ਆਪਣੇ ਜੀਵਨ ਵਿੱਚ ਢਾਲੋ।',
      en: 'Transcend academic repetition; quietly weave the sacred teachings into your daily interactions.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे केवल बातें करने वाले वक्ता से बचाकर "रहनी" का सच्चा साधक बनाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਉੱਤਮ ਰਹਣੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Release me from the trap of dry talk; make me a silent practitioner of noble living.'
    },
    quiz: []
  },
  {
    id: 'karani-7',
    number: 1605,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ७',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੭',
      en: 'Karani Ko Ang - 7',
    },
    text: {
      hi: 'करनी बिन कथनी कथै, अज्ञानी दिन रात।\nकूकर सम भूकत फिरै, सुनी सुनाई बात।।',
      pb: 'ਕਰਨੀ ਬਿਨ ਕਥਨੀ ਕਥੈ, ਅਗਿਆਨੀ ਦਿਨ ਰਾਤ।\nਕੂਕਰ ਸਮ ਭੂਕਤ ਫਿਰੈ, ਸੁਨੀ ਸੁਨਾਈ ਬਾਤ।।',
      en: 'Karanee bin kathani kathai, agyaanee din raat. Kookar sam bhookat phirai, sunee sunaace baat..',
    },
    transliteration: 'Karanee bin kathani kathai, agyaanee din raat. Kookar sam bhookat phirai, sunee sunaace baat.',
    bhavarth: {
      hi: 'बिना करनी किए अज्ञानी मनुष्य दिन-रात इधर-उधर कथनी करता हुआ विचरता है। वह ज्ञानी की भांति सुनी-सुनाई बातों को दूसरों के सामने इस प्रकार बोलता फिरता है, जैसे कुत्ता भौंक रहा हो।',
      pb: 'ਬਿਨਾਂ ਕਿਸੇ ਅਮਲ ਦੇ ਅਗਿਆਨੀ ਲੋਕ ਦਿਨ-ਰਾਤ ਉਪਦੇਸ਼ ਦਿੰਦੇ ਰਹਿੰਦੇ ਹਨ। ਉਹ ਸੁਣੀਆਂ-ਸੁਣਾਈਆਂ ਗੱਲਾਂ ਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਬੋਲਦੇ ਹਨ ਜਿਵੇਂ ਕੁੱਤਾ ਭੌਂਕ ਰਿਹਾ ਹੋਵੇ।',
      en: 'Without practicing, the ignorant talk day and night, parading borrowed knowledge. They wander around repeating second-hand spiritual truths like a dog barking aimlessly.',
    },
    wordMeanings: {
      hi: [
        { word: 'कूकर सम (Kookar sam)', meaning: 'कुत्ते के समान' },
        { word: 'भूकत फिरै (Bhookat phirai)', meaning: 'भौंकता फिरना / व्यर्थ बकना' }
      ],
      pb: [
        { word: 'ਕੂਕਰ ਸਮ (Kookar sam)', meaning: 'ਕੁੱਤੇ ਵਰਗਾ' },
        { word: 'ਭੂਕਤ ਫਿਰੈ (Bhookat phirai)', meaning: 'ਭੌਂਕਦੇ ਫਿਰਨਾ' }
      ],
      en: [
        { word: 'Kookar sam', meaning: 'Like a dog' },
        { word: 'Bhookat phirai', meaning: 'Barks around / Babbling in vain' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा धार्मिक उपदेश केवल सुनी-सुनाई बातों का प्रदर्शन मात्र है, जो दूसरों को निरर्थक प्रतीत होता है?',
      pb: 'ਕੀ ਮੇਰੀਆਂ ਗੱਲਾਂ ਸਿਰਫ ਨਕਲ ਹਨ?',
      en: 'Is my spiritual advice just a repeat of heard concepts, lacking the authentic weight of personal execution?'
    },
    practicalApplication: {
      hi: 'दूसरों को उपदेश देना बंद करें; जब तक स्वयं अनुभव न हो, तब तक मौन धारण करें।',
      pb: 'ਦੂਜਿਆਂ ਨੂੰ ਸਿਖਾਉਣ ਦੀ ਬਜਾਏ ਪਹਿਲਾਂ ਖੁਦ ਸਿੱਖੋ।',
      en: 'Halt the urge to advise; unless you have practiced a truth, preserve silent humility.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे व्यर्थ के वाद-विवाद व बकवास से बचाकर अंतर्मुखी साधना प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅੰਤਰਮੁਖੀ ਬਣਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Rescue me from shallow and noisy chatter; lead my soul into the quiet of inner meditation.'
    },
    quiz: []
  },
  {
    id: 'karani-8',
    number: 1606,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ८',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੮',
      en: 'Karani Ko Ang - 8',
    },
    text: {
      hi: 'जैसी करनी जासु की, तैसी भुगते सोय।\nबिन सतगुरु की भक्ति के, जनम जनम दुख होय।।',
      pb: 'ਜੈਸੀ ਕਰਨੀ ਜਾਸੁ ਕੀ, ਤੈਸੀ ਭੁਗਤੇ ਸੋਇ।\nਬਿਨ ਸਤਗੁਰੁ ਕੀ ਭਕ੍ਤਿ ਕੇ, ਜਨਮ ਜਨਮ ਦੁਖ ਹੋਇ।।',
      en: 'Jaisee karanee jaasu kee, taisee bhugate soy. Bin satguru kee bhakti ke, janam janam dukh hoy..',
    },
    transliteration: 'Jaisee karanee jaasu kee, taisee bhugate soy. Bin satguru kee bhakti ke, janam janam dukh hoy.',
    bhavarth: {
      hi: 'जिसकी जैसी करनी होती है, उसको वैसा ही फल भुगतना पड़ता. है। सद्गुरु की सेवा-भक्ति के बिना तो जन्म-जन्मांतर तक दुःख भोगना पड़ता है, अतः गुरु-भक्ति करके पवित्र करनी का ज्ञान प्राप्त करना चाहिए।',
      pb: 'ਜਿਸ ਵਰਗੇ ਕਿਸੇ ਦੇ ਕਰਮ ਹੁੰਦੇ ਹਨ, ਉਸਨੂੰ ਉਹੋ ਜਿਹਾ ਹੀ ਫਲ ਭੋਗਣਾ ਪੈਂਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਦੀ ਭਗਤੀ ਤੋਂ ਬਿਨਾਂ ਜਨਮ-ਜਨਮ ਤੱਕ ਦੁੱਖ ਭੋਗਣਾ ਪੈਂਦਾ ਹੈ।',
      en: 'As one sows, so shall they reap. Without the saving devotion and refuge of the Satguru, one continues to suffer from birth to birth; hence, seek holy shelter.',
    },
    wordMeanings: {
      hi: [
        { word: 'जासु की (Jaasu kee)', meaning: 'जिसकी' },
        { word: 'भुगते सोय (Bhugate soy)', meaning: 'वह स्वयं भोगता है' },
        { word: 'जनम जनम (Janam janam)', meaning: 'प्रत्येक जन्म में / बारंबार' }
      ],
      pb: [
        { word: 'ਜਾਸੁ ਕੀ (Jaasu kee)', meaning: 'ਜਿਸਦੀ' },
        { word: 'ਭੁਗਤੇ ਸੋਇ (Bhugate soy)', meaning: 'ਉਹੀ ਭੋਗਦਾ ਹੈ' },
        { word: 'ਜਨਮ ਜਨਮ (Janam janam)', meaning: 'ਹਰ ਜਨਮ ਵਿੱਚ' }
      ],
      en: [
        { word: 'Jaasu kee', meaning: 'Of whom' },
        { word: 'Bhugate soy', meaning: 'They themselves suffer / Experience' },
        { word: 'Janam janam', meaning: 'Birth after birth / Reincarnations' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सतगुरु की शरण में आकर अपने बुरे कर्मों के चक्रव्यूह से मुक्त होने की चेष्टा कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰੂ ਦੀ ਭਗਤੀ ਰਾਹੀਂ ਕਰਮਾਂ ਦੇ ਜਾਲ ਤੋਂ ਬਚ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I seeking the protective shelter of the Satguru to transcend the painful cycle of cause and effect?'
    },
    practicalApplication: {
      hi: 'सद्गुरु की अनन्य सेवा-भक्ति स्वीकार करें, जिससे आपके पूर्व संचित पाप नष्ट हो सकें।',
      pb: 'ਗੁਰੂ ਜੀ ਦੀ ਸ਼ਰਨ ਲੈ ਕੇ ਨਾਮ ਜਪੋ।',
      en: 'Adopt sincere devotion to the Satguru, which burns away accumulated karmic debts and purifies your actions.'
    },
    samarpanPrayer: {
      hi: 'हे कृपालु गुरुदेव! मुझे जन्म-जन्मांतर के दुखों से बचाकर अपनी पवित्र भक्ति में लीन कर लें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਕ੍ਰਿਪਾਲੂ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਪ੍ਰੇਮ-ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Merciful Guru! Save me from the endless cycle of suffering, and anchor me securely in Your holy devotion.'
    },
    quiz: []
  },
  {
    id: 'karani-9',
    number: 1607,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ९',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੯',
      en: 'Karani Ko Ang - 9',
    },
    text: {
      hi: 'करनी का रजमा नहीं, कथनी मेरु समान।\nकथता बकता मर गया, मूरख मूढ़ अजान।।',
      pb: 'ਕਰਨੀ ਕਾ ਰਜਮਾ ਨਹੀਂ, ਕਥਨੀ ਮੇਰੁ ਸਮਾਨ।\nਕਥਤਾ ਬਕਤਾ ਮਰਿ ਗਯਾ, ਮੂਰਖ ਮੂੜ੍ਹ ਅਜਾਨ।।',
      en: 'Karanee ka rajama naheen, kathani meru samaan. Kathata bakata mari gaya, moorakh moodh ajaan..',
    },
    transliteration: 'Karanee ka rajama naheen, kathani meru samaan. Kathata bakata mari gaya, moorakh moodh ajaan.',
    bhavarth: {
      hi: 'भक्ति भाव से पूर्ण पवित्र करनी रज-कण मात्र भी नहीं है और कथनी सुमेरु पर्वत के समान विशाल है। जाने कितने अज्ञानी व मूर्ख यूं ही कथते-बकते काल का शिकार हो गए।',
      pb: 'ਚੰਗੇ ਅਮਲ ਰੇਤ ਦੇ ਕਣ ਵਰਗੇ ਵੀ ਨਹੀਂ ਹਨ, ਪਰ ਗੱਲਾਂ ਸੁਮੇਰੁ ਪਰਬਤ ਵਰਗੀਆਂ ਉੱਚੀਆਂ ਹਨ। ਅਜਿਹੇ ਅਣਗਿਣਤ ਮੂਰਖ ਗੱਲਾਂ ਕਰਦੇ-ਕਰਦੇ ਮੌਤ ਦੇ ਮੂੰਹ ਵਿੱਚ ਚਲੇ ਗਏ।',
      en: 'Actual righteous practice is not even equivalent to a grain of dust, yet the boastful talk is grand as Mount Sumeru. Countless fools have perished, lost in empty words, without ever practicing.',
    },
    wordMeanings: {
      hi: [
        { word: 'रजमा (Rajama)', meaning: 'धूल का कण / अत्यंत सूक्ष्म' },
        { word: 'मेरु समान (Meru samaan)', meaning: 'सुमेरु पर्वत के समान विशाल' },
        { word: 'अजान (Ajaan)', meaning: 'अज्ञानी / बेखबर' }
      ],
      pb: [
        { word: 'ਰਜਮਾ (Rajama)', meaning: 'ਰੇਤ ਦਾ ਕਣ' },
        { word: 'ਮੇਰੁ ਸਮਾਨ (Meru samaan)', meaning: 'ਸੁਮੇਰੁ ਪਰਬਤ ਵਰਗਾ ਵੱਡਾ' },
        { word: 'ਅਜਾਨ (Ajaan)', meaning: 'ਅਗਿਆਨੀ' }
      ],
      en: [
        { word: 'Rajama', meaning: 'Grain of dust / Speck' },
        { word: 'Meru samaan', meaning: 'Massive as Mount Sumeru' },
        { word: 'Ajaan', meaning: 'Ignorant / Unaware' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा आचरण धूल के कण जितना छोटा और मेरी बातें पर्वत जैसी बड़ी हैं? मुझे इस विसंगति को दूर करना चाहिए।',
      pb: 'ਕੀ ਮੇਰੀਆਂ ਗੱਲਾਂ ਪਰਬਤ ਵਰਗੀਆਂ ਵੱਡੀਆਂ ਤੇ ਅਮਲ ਜ਼ੀਰੋ ਹਨ?',
      en: 'Are my words as massive as a mountain while my practice is invisible as a speck of dust?'
    },
    practicalApplication: {
      hi: 'अपनी कथनी का आकार छोटा करें और करनी को सुदृढ़ व महान बनाएँ।',
      pb: 'ਗੱਲਾਂ ਛੋਟੀਆਂ ਕਰੋ ਅਤੇ ਚੰਗੇ ਕਰਮ ਵੱਡੇ ਕਰੋ।',
      en: 'Shrink your verbal claims and expand your actual, quiet practice of compassion and Nam.'
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मेरे भीतर की बड़बोलेपन की बीमारी मिटाकर मुझे ठोस आचरण का साधक बनाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੇਰੀ ਕਥਨੀ ਘਟਾ ਕੇ ਮੇਰੀ ਕਰਨੀ ਵਧਾ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Deliver me from boastful words; establish me in quiet, solid spiritual practice.'
    },
    quiz: []
  },
  {
    id: 'karani-10',
    number: 1608,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १०',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੦',
      en: 'Karani Ko Ang - 10',
    },
    text: {
      hi: 'कबीर करनी क्या करै, जो गुरु नहीं सहाय।\nजिहि जिहि डारी पगु धरै, सों सों निंवनिंव जाय।।',
      pb: 'ਕਬੀਰ ਕਰਨੀ ਕ੍ਯਾ ਕਰੈ, ਜੋ ਗੁਰੁ ਨਹੀਂ ਸਹਾਇ।\nਜਿਹਿ ਜਿਹਿ ਡਾਰੀ ਪਗੁ ਧਰੈ, ਸੋਂ ਸੋਂ ਨਿੰਵਿਨਿੰਵ ਜਾਇ।।',
      en: 'Kabir karanee kya karai, jo guru nahin sahaay. Jihi jihi daaree pagu dharai, son son ninvaninv jaay..',
    },
    transliteration: 'Kabir karanee kya karai, jo guru nahin sahaay. Jihi jihi daaree pagu dharai, son son ninvaninv jaay.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि बिना ज्ञान की करनी का कोई महत्त्व नहीं। जब तक सद्गुरु सहायक नहीं होते, तब तक करनी नहीं की जा सकती, अर्थात सद्गुरु के ज्ञानोपदेश से आचरण में सुधार आता है। सद्गुरु के ज्ञान के बिना तो जिज्ञासु साधक जहां-जहां अपना पांव रखता है, वहां की डाली झुक झुक जाती है (सभी प्रयास निष्फल हो जाते हैं)। विभ्रांत जीव को सही दिशा में सन्मार्ग पर ले जाने वाले सद्गुरु ही हैं। उन्हीं की सहायता से जीवन की सब भूलें व अपराध मिट जाते हैं, अतः जिज्ञासु जनों को सद्गुरु की शरण में जाकर ज्ञानोपदेश प्राप्त करना चाहिए।',
      pb: 'ਗੁਰੂ ਦੀ ਸਹਾਇਤਾ ਤੇ ਗਿਆਨ ਤੋਂ ਬਿਨਾਂ ਕੀਤੀ ਕਰਨੀ ਵਿਅਰਥ ਹੈ। ਜਿਸ ਡਾਲੀ ਤੇ ਵੀ ਬਿਨਾਂ ਗੁਰੂ ਦੀ ਅਗਵਾਈ ਦੇ ਪੈਰ ਰੱਖੋਗੇ, ਉਹੀ ਡਾਲੀ ਲਿਫ਼ (ਝੁਕ) ਜਾਵੇਗੀ, ਭਾਵ ਸਾਰੇ ਯਤਨ ਅਸਫ਼ਲ ਰਹਿਣਗੇ।',
      en: 'What can personal action achieve without the guidance of the Guru? Whichever branch an unguided seeker steps on bends and breaks (all efforts fail). The Guru alone steers the soul in the right direction.',
    },
    wordMeanings: {
      hi: [
        { word: 'गुरु नहीं सहाय (Guru nahin sahaay)', meaning: 'यदि गुरु की सहायता / ज्ञान न हो' },
        { word: 'डारी (Daaree)', meaning: 'डाल / शाखा / साधन' },
        { word: 'निंवनिंव जाय (Ninvaninv jaay)', meaning: 'झुक-झुक जाना / टूट जाना / असफल होना' }
      ],
      pb: [
        { word: 'ਗੁਰੁ ਸਹਾਇ (Guru sahaay)', meaning: 'ਗੁਰੂ ਦੀ ਸਹਾਇਤਾ' },
        { word: 'ਡਾਰੀ (Daaree)', meaning: 'ਟਾਹਣੀ / ਸ਼ਾਖ਼ਾ' },
        { word: 'ਨਿੰਵਿਨਿੰਵ ਜਾਇ (Ninvaninv jaay)', meaning: 'ਝੁਕ-ਝੁਕ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Guru nahin sahaay', meaning: 'If the Guru is not assisting / guiding' },
        { word: 'Daaree', meaning: 'Branch / Pursuit / Means' },
        { word: 'Ninvaninv jaay', meaning: 'Bends down / Collapses / Fails' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं गुरु-आज्ञा व सत्संग के ज्ञान को दरकिनार करके अपनी मनमर्जी की हठ साधना कर रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗੁਰੂ ਦੀ ਅਗਵਾਈ ਤੋਂ ਬਿਨਾਂ ਭਗਤੀ ਕਰਨ ਦੀ ਭੁੱਲ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I foolishly attempting self-designed spiritual practices without surrendered obedience to the Guru?'
    },
    practicalApplication: {
      hi: 'अपनी हठ बुद्धि को त्यागकर सद्गुरु के वचनों को ही अपनी करनी व साधना का आधार बनाएँ।',
      pb: 'ਆਪਣੀ ਸਮਝ ਛੱਡ ਕੇ ਗੁਰੂ ਦੀ ਆਗਿਆ ਵਿੱਚ ਚੱਲੋ।',
      en: 'Cast off self-willed vanity; let the pure instructions of the Guru guide your path and action.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु साहेब! मुझे अपनी शरण में लेकर प्रत्येक कदम पर मेरा मार्गदर्शन करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਹਰ ਕਦਮ ਤੇ ਮੇਰਾ ਮਾਰਗਦਰਸ਼ਨ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Take my life under Your absolute care, and steady my feet at every single step.'
    },
    quiz: []
  },
  {
    id: 'karani-11',
    number: 1609,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - ११',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੧',
      en: 'Karani Ko Ang - 11',
    },
    text: {
      hi: 'चोर चोराई टूंबरी, गाड़े पानी मांहि।\nवह गाड़े तो ऊछलै, करनी छानी नाहिं।।',
      pb: 'ਚੋਰ ਚੋਹਾਈ ਟੂੰਬਰੀ, ਗਾੜੇ ਪਾਨੀ ਮਾਂਹਿ।\nਵਹ ਗਾੜੇ ਤੋ ਊਛਲੈ, ਕਰਨੀ ਛਾਨੀ ਨਾਹਿਂ।।',
      en: 'Chor choraace toonbaree, gaade paanee maahin. Vah gaade to oochhalai, karanee chhaanee naahin..',
    },
    transliteration: 'Chor choraace toonbaree, gaade paanee maahin. Vah gaade to oochhalai, karanee chhaanee naahin.',
    bhavarth: {
      hi: 'किसी चोर ने एक तुमड़ी (आभूषण) चुराई। वह छिपाने के लिए उसे पानी में गाड़ने लगा, परंतु जब वह तुमड़ी को गाड़ता था, तो वह पानी से उछलकर ऊपर आ जाती थी, क्योंकि उसने जो करनी की थी, वह छिपाए नहीं छिपती थी। इसी प्रकार यदि कोई वक्ता अपने बुरे आचरणों को अपनी कथनी में छिपाना चाहे तो छिपा नहीं सकता।',
      pb: 'ਚੋਰ ਨੇ ਚੋਰੀ ਕਰਕੇ ਤੂੰਬੜੀ ਨੂੰ ਪਾਣੀ ਵਿੱਚ ਦਬਾਉਣਾ ਚਾਹਿਆ, ਪਰ ਉਹ ਵਾਰ-ਵਾਰ ਉੱਪਰ ਉੱਛਲ ਕੇ ਆ ਜਾਂਦੀ ਸੀ। ਇਸੇ ਤਰ੍ਹਾਂ ਮੰਦੇ ਅਮਲ ਲੁਕਾਉਣ ਨਾਲ ਨਹੀਂ ਲੁਕਦੇ।',
      en: 'A thief stole a hollow gourd and tried to hide it by pushing it deep into water; but it kept bobbing back to the surface. Similarly, one\'s actual conduct and misdeeds can never remain hidden behind sweet, deceptive words.',
    },
    wordMeanings: {
      hi: [
        { word: 'टूंबरी (Toonbaree)', meaning: 'सूखी लौकी की तुमड़ी / हल्की खोखली वस्तु' },
        { word: 'ऊछलै (Oochhalai)', meaning: 'उछलकर ऊपर आ जाना' },
        { word: 'छानी (Chhaanee)', meaning: 'छिपी हुई / गुप्त' }
      ],
      pb: [
        { word: 'ਟੂੰਬਰੀ (Toonbaree)', meaning: 'ਤੂੰਬੜੀ / ਹੌਲੀ ਚੀਜ਼' },
        { word: 'ਊਛਲੈ (Oochhalai)', meaning: 'ਉੱਛਲ ਕੇ ਉੱਪਰ ਆਉਣਾ' },
        { word: 'ਛਾਨੀ (Chhaanee)', meaning: 'ਛੁਪੀ ਹੋਈ' }
      ],
      en: [
        { word: 'Toonbaree', meaning: 'Hollow gourd / Light object' },
        { word: 'Oochhalai', meaning: 'Bobs up / Leaps up' },
        { word: 'Chhaanee', meaning: 'Concealed / Hidden' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सोचता हूँ कि मेरा कपट या बुरा आचरण दूसरों की आँखों से छिपा रहेगा? आचरण कभी छिपाया नहीं जा सकता।',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮੰਦੇ ਕੰਮਾਂ ਨੂੰ ਲੁਕਾਉਣ ਦੀ ਭੁੱਲ ਕਰਦਾ ਹਾਂ?',
      en: 'Do I falsely imagine that my hypocritical actions can remain concealed behind pleasant conversation?'
    },
    practicalApplication: {
      hi: 'अपने जीवन को पूरी तरह पारदर्शी व ईमानदार बनाएँ; किसी भी प्रकार के कपटपूर्ण व्यवहार से दूर रहें।',
      pb: 'ਆਪਣੇ ਜੀਵਨ ਨੂੰ ਸਾਫ਼ ਤੇ ਪਾਰਦਰਸ਼ੀ ਬਣਾਓ।',
      en: 'Live a transparent and honest life; remember that character eventually reveals itself like a floating gourd.'
    },
    samarpanPrayer: {
      hi: 'हे अंतर्यामी साहेब! मेरे मन से समस्त छल-कपट मिटाकर मुझे सत्य व सरल आचरण प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੇਰੇ ਅੰਦਰੋਂ ਹਰ ਤਰ੍ਹਾਂ ਦੀ ਚਲਾਕੀ ਦੂਰ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O All-knowing Lord! Dissolve all pretense in me; grant me a clean, straightforward heart.'
    },
    quiz: []
  },
  {
    id: 'karani-12',
    number: 1610,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १२',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੨',
      en: 'Karani Ko Ang - 12',
    },
    text: {
      hi: 'करनी बिन कथनी कथै, गुरु पद लहै न सोय।\nबातों के पकवान से, धीरा नाहीं कोय।।',
      pb: 'ਕਰਨੀ ਬਿਨ ਕਥਨੀ ਕਥੈ, ਗੁਰੁ ਪਦ ਲਹੈ ਨ ਸੋਇ।\nਬਾਤੋਂ ਕੇ ਪਕਵਾਨ ਸੇ, ਧੀਰਾ ਨਾਹੀਂ ਕੋਇ।।',
      en: 'Karanee bin kathani kathai, guru pad lahai na soy. Baaton ke pakavaan se, dheera naahee koy..',
    },
    transliteration: 'Karanee bin kathani kathai, guru pad lahai na soy. Baaton ke pakavaan se, dheera naahee koy.',
    bhavarth: {
      hi: 'गुरु-भक्ति के आचरण बिना जो केवल कथनी करता है, वह गुरु-पद जैसी श्रेष्ठ स्थिति को कभी प्राप्त नहीं कर सकता। जिस प्रकार पकवान की वार्ता मात्र से कोई तृप्त नहीं हो सकता, अर्थात तृप्ति के लिए भोजन और उत्तम स्थिति के लिए आचरण अत्यंत आवश्यक है।',
      pb: 'ਕਰਨੀ ਤੋਂ ਬਿਨਾਂ ਗੱਲਾਂ ਕਰਨ ਵਾਲਾ ਕਦੇ ਉੱਚੇ ਗੁਰੂ-ਪਦ ਨੂੰ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਕੇਵਲ ਗੱਲਾਂ ਦੇ ਪਕਵਾਨ ਸੁਣਨ ਨਾਲ ਕਿਸੇ ਦੀ ਭੁੱਖ (ਪਿਆਸ) ਨਹੀਂ ਮਿੱਟਦੀ।',
      en: 'One who preaches without practicing can never attain the sublime state of the Guru. No one\'s hunger can ever be satisfied by a feast of mere spoken words.',
    },
    wordMeanings: {
      hi: [
        { word: 'गुरु पद (Guru pad)', meaning: 'श्रेष्ठ आत्मिक पद / पूज्य स्थिति' },
        { word: 'बातों के पकवान (Baaton ke pakavaan)', meaning: 'काल्पनिक भोजन / केवल चर्चा करना' },
        { word: 'धीरा (Dheera)', meaning: 'धैर्य / संतोष / पेट भरना' }
      ],
      pb: [
        { word: 'ਗੁਰੁ ਪਦ (Guru pad)', meaning: 'ਉੱਚਾ ਆਤਮਿਕ ਦਰਜਾ' },
        { word: 'ਪਕਵਾਨ (Pakavaan)', meaning: 'ਭੋਜਨ / ਮਿੱਠੀਆਂ ਗੱਲਾਂ' },
        { word: 'ਧੀਰਾ (Dheera)', meaning: 'ਸ਼ਾਂਤੀ / ਸੰਤੋਖ' }
      ],
      en: [
        { word: 'Guru pad', meaning: 'The exalted state of self-realization' },
        { word: 'Baaton ke pakavaan', meaning: 'Spoken feasts / Imaginary sweets' },
        { word: 'Dheera', meaning: 'Satisfied / Patient / Satiated' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं केवल शास्त्र ज्ञान की बड़ी-बड़ी चर्चाओं से आत्मिक शांति प्राप्त करना चाहता हूँ, जबकि मेरे मन में साधना का कोई आचरण नहीं है?',
      pb: 'ਕੀ ਮੈਂ ਗੱਲਾਂ ਦੇ ਪਕਵਾਨਾਂ ਨਾਲ ਆਪਣੀ ਰੂਹਾਨੀ ਭੁੱਖ ਮਿਟਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I trying to feed my spiritual hunger with spoken feasts, ignoring the actual work of meditation?'
    },
    practicalApplication: {
      hi: 'काल्पनिक ज्ञान-चर्चा छोड़कर वास्तविक रूप से सुमिरन एवं ध्यान की साधना में बैठें।',
      pb: 'ਗੱਲਾਂ ਦੀ ਬਜਾਏ ਨਾਮ-ਸਿਮਰਨ ਦਾ ਭੋਜਨ ਛਕੋ।',
      en: 'Sit in silent, real practice of Nam instead of wasting hours in theoretical, imaginary debates.'
    },
    samarpanPrayer: {
      hi: 'हे गुरुदेव! मुझे वचनों के इस बौद्धिक जाल से मुक्त कर आचरण रूपी अमृत रस प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੈਨੂੰ ਸੱਚਾ ਆਤਮਿਕ ਰਸ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Free me from the web of theoretical words; nourish my soul with actual practice and peace.'
    },
    quiz: []
  },
  {
    id: 'karani-13',
    number: 1611,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १३',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੩',
      en: 'Karani Ko Ang - 13',
    },
    text: {
      hi: 'मारग चलते जो गिरै, ताको नाहिं दोस।\nकहैं कबीर बैठा रहै, ता सिर करड़े कोस।।',
      pb: 'ਮਾਰਗ ਚਲਤੇ ਜੋ ਗਿਰੈ, ਤਾਕੋ ਨਾਹਿਂ ਦੋਸ।\nਕਹੈਂ ਕਬੀਰ ਬੈਠਾ ਰਹੈ, ਤਾ ਸਿਰ ਕਰੜੇ ਕੋਸ।।',
      en: 'Maarag chalate jo girai, taako naahin dos. Kahain kabir baitha rahai, ta sheesh karade kos..',
    },
    transliteration: 'Maarag chalate jo girai, taako naahin dos. Kahain kabir baitha rahai, ta sheesh karade kos.',
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि सन्मार्ग पर चलते हुए जो गिर भी जाए, तो इसमें उसका कोई दोष नहीं। महादोष तो उसका है, जो खाली बैठा रहता है और चलने का नाम नहीं लेता। उसके सिर पर तो मार्ग के सब कोस कठिन ही पड़ते हैं, अर्थात जब तक वह नहीं चलेगा, तब तक पूरा कठिन मार्ग उसके ऊपर शेष बना रहेगा।',
      pb: 'ਰਾਹ ਤੇ ਚੱਲਦਿਆਂ ਜੇ ਕੋਈ ਡਿੱਗ ਪਵੇ ਤਾਂ ਉਸਦਾ ਕੋਈ ਦੋਸ਼ ਨਹੀਂ। ਦੋਸ਼ ਤਾਂ ਉਸਦਾ ਹੈ ਜੋ ਬੈਠਾ ਹੀ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਚੱਲਦਾ ਹੀ ਨਹੀਂ। ਉਸ ਲਈ ਸਾਰਾ ਰਾਹ ਮੁਸ਼ਕਿਲ ਹੀ ਰਹਿੰਦਾ ਹੈ।',
      en: 'If one stumbles or falls while actively walking on the spiritual path, they are not to be blamed. The real failure belongs to the one who sits idle and refuses to walk; for them, the destination remains forever unreachable.',
    },
    wordMeanings: {
      hi: [
        { word: 'मारग (Maarag)', meaning: 'सत्य मार्ग / आध्यात्मिक पथ' },
        { word: 'करड़े कोस (Karade kos)', meaning: 'कठिन मार्ग की दूरी / भारी मुसीबत' },
        { word: 'बैठा रहै (Baitha rahai)', meaning: 'प्रयास न करना / आलसी बने रहना' }
      ],
      pb: [
        { word: 'ਮਾਰਗ (Maarag)', meaning: 'ਰਸਤਾ' },
        { word: 'ਕਰੜੇ ਕੋਸ (Karade kos)', meaning: 'ਔਖਾ ਸਫ਼ਰ / ਮੁਸ਼ਕਿਲ ਦੂਰੀ' },
        { word: 'ਬੈਠਾ ਰਹੈ (Baitha rahai)', meaning: 'ਉੱਦਮ ਨਾ ਕਰਨਾ' }
      ],
      en: [
        { word: 'Maarag', meaning: 'The holy path of truth' },
        { word: 'Karade kos', meaning: 'Arduous miles / Strenuous distance' },
        { word: 'Baitha rahai', meaning: 'Sits idle / Refuses to strive' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं भूलों और असफलताओं के डर से भक्ति मार्ग पर चलना ही बंद कर चुका हूँ? चलना सबसे उत्तम है।',
      pb: 'ਕੀ ਮੈਂ ਗਲਤੀਆਂ ਦੇ ਡਰ ਤੋਂ ਭਗਤੀ ਦੇ ਰਾਹ ਤੇ ਚੱਲਣਾ ਛੱਡ ਦਿੱਤਾ ਹੈ?',
      en: 'Am I avoiding the spiritual path out of fear of making mistakes, forgetting that staying idle is the greatest mistake?'
    },
    practicalApplication: {
      hi: 'असफलताओं से डरे बिना निरंतर साधना पथ पर आगे बढ़ें, प्रत्येक भूल से सीखकर पुनः उठ खड़े हों।',
      pb: 'ਡਿੱਗਣ ਦੇ ਡਰ ਤੋਂ ਬਿਨਾਂ ਗੁਰੂ ਦੇ ਰਾਹ ਤੇ ਚੱਲਦੇ ਰਹੋ।',
      en: 'Never fear failures; rise immediately with renewed resolve whenever you falter on the path.'
    },
    samarpanPrayer: {
      hi: 'हे दयालु साहेब! मुझे साधना पथ पर अडिगता व साहस प्रदान करें ताकि मैं कभी हताश न होऊँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹਿਬ! ਮੈਨੂੰ ਸਾਹਸ ਤੇ ਹਿੰਮਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Endow my soul with courage and resilience so that I never yield to despair or defeat.'
    },
    quiz: []
  },
  {
    id: 'karani-14',
    number: 1612,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १४',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੪',
      en: 'Karani Ko Ang - 14',
    },
    text: {
      hi: 'कैसा भी सामर्थ्य हो, बिन उद्यम दुख पाय।\nनिकट असन बिन कर चले, कैसे मुख में जाय।।',
      pb: 'ਕੈਸਾ ਭੀ ਸਾਮਰ੍ਥ੍ਯ ਹੋ, ਬਿਨ ਉਦ੍ਯਮ ਦੁਖ ਪਾਇ।\nਨਿਕਟ ਅਸਨ ਬਿਨ ਕਰ ਚਲੇ, ਕੈਸੇ ਮੁਖ ਮੈਂ ਜਾਇ।।',
      en: 'Kaisa bhee saamarthya ho, bin udyam dukh paay. Nikat asan bin kar chale, kaise mukh mein jaay..',
    },
    transliteration: 'Kaisa bhee saamarthya ho, bin udyam dukh paay. Nikat asan bin kar chale, kaise mukh mein jaay.',
    bhavarth: {
      hi: 'कैसा भी सामर्थ्य हो, बिन उद्यम दुख पाय। निकट असन बिन कर चले, कैसे मुख में जाय।।',
      pb: 'ਮਨੁੱਖ ਚਾਹੇ ਕਿੰਨਾ ਵੀ ਸ਼ਕਤੀਸ਼ਾਲੀ ਕਿਉਂ ਨਾ ਹੋਵੇ, ਬਿਨਾਂ ਮਿਹਨਤ ਦੇ ਦੁੱਖ ਹੀ ਪਾਉਂਦਾ ਹੈ। ਕੋਲ ਪਿਆ ਭੋਜਨ ਵੀ ਬਿਨਾਂ ਹੱਥ ਹਿਲਾਏ ਮੂੰਹ ਵਿੱਚ ਨਹੀਂ ਜਾਂਦਾ।',
      en: 'No matter how powerful or capable a person is, they will suffer without effort. Even food placed close by cannot reach one\'s mouth without moving the hand.',
    },
    wordMeanings: {
      hi: [
        { word: 'सामर्थ्य (Saamarthya)', meaning: 'शक्ति / योग्यता / बल' },
        { word: 'उद्यम (Udyam)', meaning: 'परिश्रम / प्रयास / उद्योग' },
        { word: 'असन (Asan)', meaning: 'भोजन / आहार' }
      ],
      pb: [
        { word: 'ਸਾਮਰ੍ਥ੍ਯ (Saamarthya)', meaning: 'ਸ਼ਕਤੀ / ਯੋਗਤਾ' },
        { word: 'ਉਦ੍ਯਮ (Udyam)', meaning: 'ਮਿਹਨਤ / ਯਤਨ' },
        { word: 'ਅਸਨ (Asan)', meaning: 'ਭੋਜਨ' }
      ],
      en: [
        { word: 'Saamarthya', meaning: 'Capacity / Strength / Capability' },
        { word: 'Udyam', meaning: 'Effort / Diligence / Industry' },
        { word: 'Asan', meaning: 'Food / Sustenance' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं यह सोचता हूँ कि मेरा पूर्व संचित भाग्य या योग्यता बिना किसी नवीन साधना के ही मुझे तार देगी?',
      pb: 'ਕੀ ਮੈਂ ਬਿਨਾਂ ਉੱਦਮ ਦੇ ਰੂਹਾਨੀ ਖੁਰਾਕ ਪਾਉਣੀ ਚਾਹੁੰਦਾ ਹਾਂ?',
      en: 'Am I expecting my latent potential or past destiny to save me without making any active efforts today?'
    },
    practicalApplication: {
      hi: 'प्रत्येक दिन को अमूल्य अवसर मानकर उत्साहपूर्वक सतगुरु के उपदेशों को अपनी करनी में लागू करें।',
      pb: 'ਹਰ ਰੋਜ਼ ਨਾਮ ਜਪਣ ਦਾ ਉੱਦਮ ਕਰੋ।',
      en: 'Seize every single day as a rare opportunity to actively put the Guru\'s teachings into practice.'
    },
    samarpanPrayer: {
      hi: 'हे प्रभु! मेरे भीतर पुरुषार्थ व सेवा-साधना का अखंड उत्साह जगाए रखें। साहेब बंदगी साहेब!',
      pb: 'ਹे ਸਾਹਿਬ! ਮੇਰੇ ਅੰਦਰ ਸੇਵਾ ਤੇ ਸਿਮਰਨ ਦਾ ਉਤਸ਼ਾਹ ਬਣਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Ignite in my soul a constant fire of spiritual enthusiasm and selfless industry.'
    },
    quiz: []
  },
  {
    id: 'karani-15',
    number: 1613,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १५',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੫',
      en: 'Karani Ko Ang - 15',
    },
    text: {
      hi: 'श्रम ही ते सब होत है, जो मन राखे धीर।\nश्रम ते खोदत कूप ज्यों, थल में प्रगटै नीर।।',
      pb: 'ਸ਼੍ਰਮ ਹੀ ਤੇ ਸਬ ਹੋਤ ਹੈ, ਜੋ ਮਨ ਰਾਖੇ ਧੀਰ।\nਸ਼੍ਰਮ ਤੇ ਖੋਦਤ ਕੂਪ ਜ੍ਯੋਂ, ਥਲ ਮੈਂ ਪ੍ਰਗਟੈ ਨੀਰ।।',
      en: 'Shram hee te sab hot hai, jo man raakhe dheer. Shram te khodat koop jyaon, thal mein pragatai neer..',
    },
    transliteration: 'Shram hee te sab hot hai, jo man raakhe dheer. Shram te khodat koop jyaon, thal mein pragatai neer.',
    bhavarth: {
      hi: 'परिश्रम से ही सब काम सफल व बिगड़े काम भी सुधर जाते हैं, लेकिन इसके लिए आवश्यक है कि मन में धैर्य रखें। जैसे परिश्रम से कुआं खोदने पर, पृथ्वी से पानी निकल आता है। जीवन में परिश्रम करने से अवश्य ही सफलता मिलती है।',
      pb: 'ਮਿਹਨਤ ਨਾਲ ਹੀ ਸਭ ਕੁਝ ਹੁੰਦਾ ਹੈ, ਜੇਕਰ ਮਨ ਵਿੱਚ ਧੀਰਜ ਰੱਖਿਆ ਜਾਵੇ। ਜਿਵੇਂ ਮਿਹਨਤ ਨਾਲ ਕੂਆਂ ਪੁੱਟਣ ਤੇ ਸੁੱਕੀ ਧਰਤੀ ਵਿੱਚੋਂ ਵੀ ਮਿੱਠਾ ਪਾਣੀ ਨਿਕਲ ਆਉਂਦਾ ਹੈ।',
      en: 'With patience and diligent effort, all goals are accomplished and errors corrected. Just as digging deep into the dry earth with persistent labor eventually yields pure, refreshing water.',
    },
    wordMeanings: {
      hi: [
        { word: 'कूप (Koop)', meaning: 'कुआँ' },
        { word: 'थल (Thal)', meaning: 'सूखी भूमि / रेगिस्तान' },
        { word: 'नीर (Neer)', meaning: 'जल / पानी' }
      ],
      pb: [
        { word: 'ਕੂਪ (Koop)', meaning: 'ਖੂਹ' },
        { word: 'ਥਲ (Thal)', meaning: 'ਧਰਤੀ / ਮੈਦਾਨ' },
        { word: 'ਨੀਰ (Neer)', meaning: 'ਪਾਣੀ' }
      ],
      en: [
        { word: 'Koop', meaning: 'Well' },
        { word: 'Thal', meaning: 'Dry land / Ground / Desert' },
        { word: 'Neer', meaning: 'Water' }
      ]
    },
    contemplation: {
      hi: 'क्या साधना में मेरी एकाग्रता और धैर्य की कमी है? जैसे कुआँ खोदने में धैर्य चाहिए, वैसे ही मन को वश में करने में चाहिए।',
      pb: 'ਕੀ ਮੇਰੇ ਅੰਦਰ ਭਗਤੀ ਲਈ ਸਬਰ ਤੇ ਧੀਰਜ ਹੈ?',
      en: 'Do I expect quick results in meditation, forgetting that taming the mind is like digging a deep well with steady patience?'
    },
    practicalApplication: {
      hi: 'हताश हुए बिना प्रतिदिन साधना करें; मन रूपी मरुस्थल से भी शांति का नीर अवश्य प्रकट होगा।',
      pb: 'ਧੀਰਜ ਨਾਲ ਰੋਜ਼ਾਨਾ ਪ੍ਰਭੂ ਦੀ ਬੰਦਗੀ ਕਰੋ।',
      en: 'Practice daily meditation with calm, peaceful persistence; the sweet waters of peace will surely surface.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे अटूट धैर्य व अविचल निष्ठा का वरदान प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਅਟੁੱਟ ਧੀਰਜ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Endow my soul with quiet, unshakeable patience and absolute consistency.'
    },
    quiz: []
  },
  {
    id: 'karani-16',
    number: 1614,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'करनी को अंग - १६',
      pb: 'ਕਰਨੀ ਕੋ ਅੰਗ - ੧੬',
      en: 'Karani Ko Ang - 16',
    },
    text: {
      hi: 'जब तू आया जगत में, लोग हंसे तू रोय।\nऐसी करनी ना करो, पीछे हंसे सब कोय।।',
      pb: 'ਜਬ ਤੂ ਆਯਾ ਜਗਤ ਮੈਂ, ਲੋਗ ਹੰਸੇ ਤੂ ਰੋਇ।\nਐਸੀ ਕਰਨੀ ਨਾ ਕਰੋ, ਪੀਛੇ ਹੰਸੇ ਸਬ ਕੋਇ।।',
      en: 'Jab too aaya jagat mein, log hanse too roy. Aisee karanee na karo, peechhe hanse sab koy..',
    },
    transliteration: 'Jab too aaya jagat mein, log hanse too roy. Aisee karanee na karo, peechhe hanse sab koy.',
    bhavarth: {
      hi: 'जब तू अपनी मां के गर्भ से पैदा हुआ तो तेरे आने की खुशी में सभी लोग प्रसन्न होते थे, हंसते थे, पर तू रोता था। अब ऐसी करनी मत करना कि तेरे मरने के बाद तेरे आचरण पर सब कोई हंसे, अर्थात ऐसी करनी करनी चाहिए, जिसे स्मरण कर सबकी आंखों में श्रद्धा और प्रेम के अश्रु भर आएं।',
      pb: 'ਜਦੋਂ ਤੂੰ ਜਗਤ ਵਿੱਚ ਆਇਆ ਸੀ, ਸਾਰੇ ਖ਼ੁਸ਼ ਸਨ ਪਰ ਤੂੰ ਰੋ ਰਿਹਾ ਸੀ। ਹੁਣ ਅਜਿਹੇ ਕਰਮ ਨਾ ਕਰੀਂ ਕਿ ਤੇਰੇ ਜਾਣ ਪਿੱਛੋਂ ਦੁਨੀਆ ਤੇਰੇ ਮੰਦੇ ਅਮਲਾਂ ਤੇ ਹੱਸੇ; ਅਜਿਹੇ ਕਰਮ ਕਰ ਕਿ ਸਭ ਦੇ ਦਿਲਾਂ ਵਿੱਚ ਤੇਰੇ ਲਈ ਸ਼ਰਧਾ ਹੋਵੇ।',
      en: 'When you arrived in this world, everyone laughed (celebrated) with joy while you cried. Live your life in such a noble manner that when you depart, everyone weeps with love while you depart with a smile.',
    },
    wordMeanings: {
      hi: [
        { word: 'जगत (Jagat)', meaning: 'संसार / दुनिया' },
        { word: 'ऐसी करनी (Aisee karanee)', meaning: 'श्रेष्ठ एवं परोपकारी आचरण' },
        { word: 'पीछे (Peechhe)', meaning: 'मृत्यु के बाद / जाने के पश्चात्' }
      ],
      pb: [
        { word: 'ਜਗਤ (Jagat)', meaning: 'ਸੰਸਾਰ' },
        { word: 'ਕਰਨੀ (Karanee)', meaning: 'ਚੰਗੇ ਅਮਲ / ਕਰਮ' },
        { word: 'ਪੀਛੇ (Peechhe)', meaning: 'ਜਾਣ ਤੋਂ ਬਾਅਦ' }
      ],
      en: [
        { word: 'Jagat', meaning: 'The world' },
        { word: 'Aisee karanee', meaning: 'Such sublime and noble actions' },
        { word: 'Peechhe', meaning: 'After departure / Post-death' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं जीवन भर ऐसे नेक कर्म कर रहा हूँ कि मेरे जाने के बाद संसार मुझे श्रद्धा और प्रेम से याद करे?',
      pb: 'ਕੀ ਮੇਰੇ ਕਰਮ ਅਜਿਹੇ ਹਨ ਕਿ ਮੇਰੇ ਜਾਣ ਪਿੱਛੋਂ ਸਭ ਦੇ ਦਿਲਾਂ ਵਿੱਚ ਸ਼ਰਧਾ ਹੋਵੇਗੀ?',
      en: 'Am I living such a pure, useful life that my departure will leave a legacy of love and inspiration?'
    },
    practicalApplication: {
      hi: 'सदा परोपकार, सेवा और साहेब-सुमिरन में जीवन व्यतीत करें; दूसरों के जीवन को सुखद बनाएँ।',
      pb: 'ਪਰਉਪਕਾਰ ਤੇ ਭਗਤੀ ਵਿੱਚ ਆਪਣਾ ਜੀਵਨ ਲਗਾਓ।',
      en: 'Dedicate your life to compassion, noble deeds, and meditation so your journey yields eternal value.'
    },
    samarpanPrayer: {
      hi: 'हे परम कृपालु सतगुरु साहेब! मुझे वह आचरण व करनी दीजिए जिससे मेरा यह जीवन और परलोक दोनों सुधर जाएँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਪਰਮ ਕ੍ਰਿਪਾਲੂ ਸਤਿਗੁਰੂ! ਮੇਰਾ ਲੋਕ-ਪਰਲੋਕ ਸਫ਼ਲ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Graceful Master! Bestow upon me such noble character that my presence here is a blessing, and my departure peaceful.'
    },
    quiz: []
  }
];
