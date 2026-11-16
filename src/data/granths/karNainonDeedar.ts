import { GranthVerse } from './granthTypes';

export interface KamalLevelInfo {
  verseNo: number;
  name: string;
  petalsOrStage: string;
  deityOrSound: string;
  mantraOrWord: string;
  spiritualMeaning: string;
}

export const KAR_NAINON_DEEDAR_VERSES: GranthVerse[] = [
  {
    id: 'knd-refrain',
    type: 'pada',
    lines: {
      hi: [
        'कर नैनों दीदार महल में प्यारा है ॥ टेक ॥'
      ],
      pb: [
        'ਕਰ ਨੈਨੋ ਦੀਦਾਰ ਮਹਲ ਮੇਂ ਪ੍ਯਾਰਾ ਹੈ ॥ ਟੇਕ ॥'
      ],
      en: [
        'Kar nainon deedar mahal mein pyara hai || Refrain ||'
      ]
    },
    bhavarth: {
      hi: 'हे चेतन जीव! अपनी अंतर्मुखी दिव्य दृष्टि (सुरति-निरति) से अपने ही शरीर-रूपी महल के भीतर उस परम प्रिय सतपुरुष परमात्मा का अपरोक्ष साक्षात्कार करो।',
      pb: 'ਹੇ ਜੀਵ! ਆਪਣੀ ਅੰਤਰਮੁਖੀ ਦ੍ਰਿਸ਼ਟੀ ਨਾਲ ਆਪਣੇ ਸਰੀਰ ਰੂਪੀ ਮਹਲ ਦੇ ਅੰਦਰ ਪਰਮ ਪਿਆਰੇ ਪ੍ਰਭੂ ਦਾ ਦੀਦਾਰ ਕਰੋ।',
      en: 'O Soul! Behold with your inner subtle vision that Supreme Beloved dwelling within the inner palace of your own physical body.'
    },
    spiritualEssence: {
      hi: 'परमात्मा बाहर मंदिरों या तीरथों में नहीं, घट के भीतर घट-घट वासी है।',
      pb: 'ਪ੍ਰਭੂ ਬਾਹਰ ਨਹੀਂ, ਸਰੀਰ ਦੇ ਅੰਦਰ ਹੀ ਵਿਰਾਜਮਾਨ ਹੈ।',
      en: 'The Divine Source resides not outside, but within the inner sanctum of consciousness.'
    }
  },
  {
    id: 'knd-v1',
    type: 'pada',
    lines: {
      hi: [
        'काम क्रोध मद लोभ बिसारो, सील संतोष क्षमा सत धारो ।',
        'मद्य मांस मिथ्या तज डारो, हो ज्ञान घोड़े असवार, भरम से न्यारा है ॥ १ ॥'
      ],
      pb: [
        'ਕਾਮ ਕ੍ਰੋਧ ਮਦ ਲੋਭ ਬਿਸਾਰੋ, ਸੀਲ ਸੰਤੋਸ਼ ਛਮਾ ਸਤ ਧਾਰੋ ।',
        'ਮਦ੍ਯ ਮਾਂਸ ਮਿਥ੍ਯਾ ਤਜ ਡਾਰੋ, ਹੋ ਗਿਆਨ ਘੋੜੇ ਅਸਵਾਰ, ਭਰਮ ਸੇ ਨ੍ਯਾਰਾ ਹੈ ॥ ੧ ॥'
      ],
      en: [
        'Kaam krodh mada lobh bisaro, seel santosh kshama sat dharo.',
        'Mady maans mithya taj daro, ho gyaan ghode aswaar, bharam se nyara hai. ||1||'
      ]
    },
    bhavarth: {
      hi: 'साधना के प्रथम चरण में काम, क्रोध, अहंकार और लोभ का त्याग करो। शील, संतोष, क्षमा और सत्य के सद्गुणों को धारण करो। शराब, मांस और असत्य भाषण छोड़ दो। ज्ञान के घोड़े पर सवार होकर समस्त भ्रम-जंजालों से पृथक हो जाओ।',
      pb: 'ਕਾਮ, ਕ੍ਰੋਧ, ਹੰਕਾਰ ਤੇ ਲੋਭ ਤਿਆਗੋ। ਸੀਲ, ਸੰਤੋਖ, ਛਮਾ ਤੇ ਸੱਚ ਅਪਣਾਓ। ਗਿਆਨ ਦੇ ਘੋੜੇ ਤੇ ਸਵਾਰ ਹੋ ਕੇ ਭਰਮ ਤੋਂ ਵੱਖ ਹੋ ਜਾਓ।',
      en: 'Renounce lust, anger, pride and greed. Adopt purity, contentment, forgiveness, and truth. Ride the steed of divine wisdom and transcend all illusions.'
    },
    spiritualEssence: {
      hi: 'आंतरिक यात्रा हेतु नैतिक पवित्रता व ज्ञान-विवेक प्राथमिक योग्यता है।',
      pb: 'ਅੰਦਰੂਨੀ ਯਾਤਰਾ ਲਈ ਨੈਤਿਕ ਪਵਿੱਤਰਤਾ ਪਹਿਲੀ ਸ਼ਰਤ ਹੈ।',
      en: 'Moral purity and dispassion form the fundamental prerequisite for inner meditation.'
    }
  },
  {
    id: 'knd-v2',
    type: 'pada',
    lines: {
      hi: [
        'धोती नेती वस्ती पाओ, आसन पद्म जुगत से लाओ ।',
        'कुंभक कर रेचक करवाओ, पहले मूल सुधार कारज हो सारा है ॥ २ ॥'
      ],
      pb: [
        'ਧੋਤੀ ਨੇਤੀ ਵਸਤੀ ਪਾਓ, ਆਸਨ ਪਦ੍ਮ ਜੁਗਤ ਸੇ ਲਾਓ ।',
        'ਕੁੰਭਕ ਕਰ ਰੇਚਕ ਕਰਵਾਓ, ਪਹਲੇ ਮੂਲ ਸੁਧਾਰ ਕਾਰਜ ਹੋ ਸਾਰਾ ਹੈ ॥ ੨ ॥'
      ],
      en: [
        'Dhoti neti vasti paao, aasan padma jugat se laao.',
        'Kumbhak kar rechak karwaao, pahle mool sudhaar kaaraj ho saara hai. ||2||'
      ]
    },
    bhavarth: {
      hi: 'षटकर्म (धोती, नेती, वस्ती) और पद्मासन की युक्ति से नाड़ी शोधन करो। प्राणायाम में कुंभक और रेचक के अभ्यास से सर्वप्रथम मूलाधार चक्र (मूल) को साधो, जिससे संपूर्ण साधना-कार्य सिद्ध होता है।',
      pb: 'ਸ਼ਟਕਰਮ ਤੇ ਆਸਨ ਦੀ ਜੁਗਤ ਨਾਲ ਸਰੀਰ ਸੁਧਾਰੋ। ਪ੍ਰਾਣਾਯਾਮ ਨਾਲ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਮੂਲਾਧਾਰ ਚੱਕਰ ਨੂੰ ਸਾਧੋ।',
      en: 'Purify the physical channels through yogic cleansings and steady posture. By pranayama, master the Mooladhara base chakra first.'
    },
    spiritualEssence: {
      hi: 'शरीर और श्वास के नियमन से मूलाधार में सोई कुण्डलिनी चेतना जागृत होती है।',
      pb: 'ਸਾਸ-ਗ੍ਰਾਸ ਦੀ ਸਾਧਨਾ ਨਾਲ ਚੇਤਨਾ ਜਾਗ੍ਰਿਤ ਹੁੰਦੀ ਹੈ।',
      en: 'Regulation of breath and physical stillness awakens dormant spiritual energy at the base.'
    }
  },
  {
    id: 'knd-v3',
    type: 'pada',
    lines: {
      hi: [
        'मूल कँवल दल चतुर बखानो, किलंग (क्लीं) जाप लाल रंग मानो ।',
        'देव गनेश तहँ रोपा थानो, रिद्धि सिद्धि चँवर दुलारा है ॥ ३ ॥'
      ],
      pb: [
        'ਮੂਲ ਕੰਵਲ ਦਲ ਚਤੁਰ ਬਖਾਨੋ, ਕਿਲੰਗ (ਕਲੀਂ) ਜਾਪ ਲਾਲ ਰੰਗ ਮਾਨੋ ।',
        'ਦੇਵ ਗਨੇਸ਼ ਤਹੰ ਰੋਪਾ ਥਾਨੋ, ਰਿੱਧੀ ਸਿੱਧੀ ਚੰਵਰ ਦੁਲਾਰਾ ਹੈ ॥ ੩ ॥'
      ],
      en: [
        'Mool kanwal dal chatur bakhano, kilang (kling) jaap laal rang maano.',
        'Dev ganesh tahan ropa thaano, riddhi siddhi chanwar dulaara hai. ||3||'
      ]
    },
    bhavarth: {
      hi: 'प्रथम मूलाधार चक्र चार पंखुड़ियों (चतुर्दल) वाला लाल रंग का कमल है, जिसका मूल मंत्र "क्लीं" (किलंग) है। यहाँ श्री गणेश जी का स्थान है और ऋद्धि-सिद्धि इनके चरणों में चंवर ढुलवाती हैं।',
      pb: 'ਪਹਿਲਾ ਮੂਲਾਧਾਰ ਚੱਕਰ ਚਾਰ ਪੰਖੜੀਆਂ ਵਾਲਾ ਲਾਲ ਕਮਲ ਹੈ। ਇੱਥੇ ਗਣੇਸ਼ ਜੀ ਦਾ ਨਿਵਾਸ ਹੈ।',
      en: 'The first lotus at the base is four-petaled, crimson red, ruled by Lord Ganesh with "Kling" seed mantra.'
    },
    spiritualEssence: {
      hi: '१. मूलाधार चक्र (४ दल कमल, गणेश जी, क्लीं मंत्र, लाल वर्ण)।',
      pb: '੧. ਮੂਲਾਧਾਰ ਚੱਕਰ (੪ ਦਲ, ਗਣੇਸ਼ ਜੀ)।',
      en: '1. Mooladhara Chakra (4 petals, Lord Ganesh, Red).'
    }
  },
  {
    id: 'knd-v4',
    type: 'pada',
    lines: {
      hi: [
        'स्वाद चक्र षट्दल बिस्तारो, ब्रह्मा सावित्री रूप निहारो ।',
        'उलट नागिनी का सिर मारो, तहाँ शब्द ओंकारा है ॥ ४ ॥'
      ],
      pb: [
        'ਸ੍ਵਾਦ ਚਕ੍ਰ ਼ਟਦਲ ਬਿਸਤਾਰੋ, ਬ੍ਰਹ੍ਮਾ ਸਾਵਿਤ੍ਰੀ ਰੂਪ ਨਿਹਾਰੋ ।',
        'ਉਲਟ ਨਾਗਿਨੀ ਕਾ ਸਿਰ ਮਾਰੋ, ਤਹਾਂ ਸ਼ਬਦ ਓੰਕਾਰਾ ਹੈ ॥ ੪ ॥'
      ],
      en: [
        'Swaad chakra shatdal bistaro, brahma savitri roop nihaaro.',
        'Ulat nagini ka sir maaro, tahan shabd omkaara hai. ||4||'
      ]
    },
    bhavarth: {
      hi: 'द्वितीय स्वाधिष्ठान (स्वाद) चक्र छः पंखुड़ियों (षट्दल) का कमल है, जहाँ ब्रह्मा जी और सावित्री जी का रूप सुशोभित है। यहाँ कुण्डलिनी (नागिनी) का मुख ऊपर की ओर मोड़कर ओंकार (ओम) ध्वनि का अनुभव होता है।',
      pb: 'ਦੂਜਾ ਸਵਾਧਿਸ਼ਠਾਨ ਚੱਕਰ ਛੇ ਪੰਖੜੀਆਂ ਵਾਲਾ ਹੈ। ਇੱਥੇ ਬ੍ਰਹਮਾ-ਸਾਵਿਤ੍ਰੀ ਅਤੇ ਓੰਕਾਰ ਸ਼ਬਦ ਹੈ।',
      en: 'The second Swadishthan chakra has 6 petals, abode of Brahma and Savitri, resonating with the sound of Omkar.'
    },
    spiritualEssence: {
      hi: '२. स्वाधिष्ठान चक्र (६ दल कमल, ब्रह्मा-सावित्री, ओंकार ध्वनि)।',
      pb: '੨. ਸਵਾਧਿਸ਼ਠਾਨ ਚੱਕਰ (੬ ਦਲ, ਬ੍ਰਹਮਾ-ਸਾਵਿਤ੍ਰੀ)।',
      en: '2. Swadishthan Chakra (6 petals, Lord Brahma & Savitri).'
    }
  },
  {
    id: 'knd-v5',
    type: 'pada',
    lines: {
      hi: [
        'नाभि अष्टकँवल दल साजा, श्वेत सिंहासन विष्णु बिराजा ।',
        'हिरिंग (ह्रीं) जाप तासु मुख गाजा, लछमी शिव आधारा है ॥ ५ ॥'
      ],
      pb: [
        'ਨਾਭੀ ਅਸ਼ਟਕੰਵਲ ਦਲ ਸਾਜਾ, ਸ਼ਵੇਤ ਸਿੰਹਾਸਨ ਵਿਸ਼ਣੂ ਬਿਰਾਜਾ ।',
        'ਹਿਰਿੰਗ (ਹਰੀਂ) ਜਾਪ ਤਾਸੁ ਮੁਖ ਗਾਜਾ, ਲਛਮੀ ਸ਼ਿਵ ਆਧਾਰਾ ਹੈ ॥ ੫ ॥'
      ],
      en: [
        'Naabhi ashtakanwal dal saaja, shwet singhasan vishnu biraaja.',
        'Hiring (hring) jaap taasu mukh gaaja, lachhmi shiv aadhaara hai. ||5||'
      ]
    },
    bhavarth: {
      hi: 'तृतीय नाभि चक्र आठ पंखुड़ियों (अष्टदल) का कमल है, जहाँ श्वेत सिंहासन पर भगवान विष्णु विराजमान हैं। यहाँ "ह्रीं" (हिरिंग) नाम का जाप गूंजता है और लक्ष्मी जी सेवा में रहती हैं।',
      pb: 'ਤੀਜਾ ਨਾਭੀ ਚੱਕਰ ਅੱਠ ਪੰਖੜੀਆਂ ਦਾ ਕਮਲ ਹੈ, ਜਿੱਥੇ ਵਿਸ਼ਨੂੰ ਜੀ ਅਤੇ ਲਕਸ਼ਮੀ ਜੀ ਬਿਰਾਜਮਾਨ ਹਨ।',
      en: 'The third Nabhi Manipur chakra is 8-petaled, white throne of Lord Vishnu and Lakshmi with "Hring" vibration.'
    },
    spiritualEssence: {
      hi: '३. मणिपुर/नाभि चक्र (८ दल कमल, विष्णु-लक्ष्मी, ह्रीं जाप)।',
      pb: '੩. ਨਾਭੀ ਚੱਕਰ (੮ ਦਲ, ਵਿਸ਼ਨੂੰ-ਲਕਸ਼ਮੀ)।',
      en: '3. Nabhi Manipur Chakra (8 petals, Lord Vishnu).'
    }
  },
  {
    id: 'knd-v6',
    type: 'pada',
    lines: {
      hi: [
        'द्वादश कँवल हृदय के माहीं, जग गौर शिव ध्यान लगाई ।',
        'सोहं शब्द तहाँ धुन छाई, गण करैं जैजैकारा है ॥ ६ ॥'
      ],
      pb: [
        'ਦ੍ਵਾਦਸ਼ ਕੰਵਲ ਹ੍ਰਿਦਯ ਕੇ ਮਾਹੀਂ, ਜਗ ਗੌਰ ਸ਼ਿਵ ਧ੍ਯਾਨ ਲਗਾਈ ।',
        'ਸੋਹੰ ਸ਼ਬਦ ਤਹਾਂ ਧੁਨ ਛਾਈ, ਗਣ ਕਰੈਂ ਜੈਜੈਕਾਰਾ ਹੈ ॥ ੬ ॥'
      ],
      en: [
        'Dwadas kanwal hriday ke maahin, jag gaur shiv dhyaan lagaai.',
        'Soham shabd tahan dhun chhaai, gan karain jaijaikaara hai. ||6||'
      ]
    },
    bhavarth: {
      hi: 'चतुर्थ अनाहत/हृदय चक्र १२ पंखुड़ियों का कमल है। यहाँ शिव-पार्वती (गौर) ध्यानलीन हैं। यहाँ सूक्ष्म "सोहं" शब्द की अलौकिक ध्वनि छा जाती है और शिवगण जयजयकार करते हैं।',
      pb: 'ਚੌਥਾ ਹਿਰਦਾ ਚੱਕਰ ੧੨ ਪੰਖੜੀਆਂ ਦਾ ਹੈ। ਇੱਥੇ ਸ਼ਿਵ-ਗੌਰੀ ਅਤੇ ਸੋਹੰ ਸ਼ਬਦ ਦੀ ਧੁਨ ਗੂੰਜਦੀ ਹੈ।',
      en: 'The fourth Anahata Heart chakra has 12 petals, realm of Shiva & Parvati, echoing with the subtle sound of Soham.'
    },
    spiritualEssence: {
      hi: '४. अनाहत/हृदय चक्र (१२ दल कमल, शिव-गौरी, सोहं शब्द)।',
      pb: '੪. ਹਿਰਦਾ ਚੱਕਰ (੧੨ ਦਲ, ਸ਼ਿਵ-ਪਾਰਵਤੀ)।',
      en: '4. Anahata Heart Chakra (12 petals, Shiva & Parvati).'
    }
  },
  {
    id: 'knd-v7',
    type: 'pada',
    lines: {
      hi: [
        'षोड़श दल कँवल कंठ के माहीं, ता मध्य बसे अविद्या बाई ।',
        'हरि हर ब्रह्मा चँवर दुराई, जहाँ श्रींगनाम उचारा है ॥ ७ ॥'
      ],
      pb: [
        'ਸ਼ੋੜਸ਼ ਦਲ ਕੰਵਲ ਕੰਠ ਕੇ ਮਾਹੀਂ, ਤਾ ਮਧ੍ਯ ਬਸੇ ਅਵਿਦ੍ਯਾ ਬਾਈ ।',
        'ਹਰਿ ਹਰ ਬ੍ਰਹ੍ਮਾ ਚੰਵਰ ਦੁਰਾਈ, ਜਹਾਂ ਸ਼੍ਰੀੰਗਨਾਮ ਉਚਾਰਾ ਹੈ ॥ ੭ ॥'
      ],
      en: [
        'Shodash dal kanwal kanth ke maahin, taa madhya base avidya baai.',
        'Hari har brahma chanwar duraai, jahan shringnaam uchaara hai. ||7||'
      ]
    },
    bhavarth: {
      hi: 'पंचम विशुद्ध/कंठ चक्र १६ पंखुड़ियों का कमल है, जहाँ आद्या शक्ति (अविद्या/माया देवी) का निवास है। यहाँ ब्रह्मा, विष्णु, महेश सेवा में हैं और "श्रीं" (श्रींग) नाम का उच्चारण होता है।',
      pb: 'ਪੰਜਵਾਂ ਕੰਠ ਚੱਕਰ ੧੬ ਪੰਖੜੀਆਂ ਦਾ ਹੈ, ਜਿੱਥੇ ਆਦਿ ਮਾਇਆ ਦਾ ਨਿਵਾਸ ਹੈ।',
      en: 'The fifth Vishuddha Throat chakra is 16-petaled, abode of Adya Shakti, resonating with Shring mantra.'
    },
    spiritualEssence: {
      hi: '५. विशुद्ध/कंठ चक्र (१६ दल कमल, माया देवी, श्रीं नाम)।',
      pb: '੫. ਕੰਠ ਚੱਕਰ (੧੬ ਦਲ, ਅਵਿਦਿਆ/ਮਾਇਆ)।',
      en: '5. Vishuddha Throat Chakra (16 petals, Adya Shakti).'
    }
  },
  {
    id: 'knd-v8',
    type: 'pada',
    lines: {
      hi: [
        'ता पर कंज कँवल है भाई, बग भौंरा दुइ रूप लखाई ।',
        'निज मन करत तहाँ ठकुराई, सो नैनन के पिछवारा है ॥ ८ ॥'
      ],
      pb: [
        'ਤਾ ਪਰ ਕੰਜ ਕੰਵਲ ਹੈ ਭਾਈ, ਬਗ ਭੌਂਰਾ ਦੁਇ ਰੂਪ ਲਖਾਈ ।',
        'ਨਿਜ ਮਨ ਕਰਤ ਤਹਾਂ ਠੁਕ੍ਰਾਈ, ਸੋ ਨੈਨਨ ਕੇ ਪਿਛਵਾਰਾ ਹੈ ॥ ੮ ॥'
      ],
      en: [
        'Taa par kanj kanwal hai bhaai, bag bhaura dui roop lakhaai.',
        'Nij man karat tahan thukraai, so nainan ke pachhwaara hai. ||8||'
      ]
    },
    bhavarth: {
      hi: 'छठा आज्ञा चक्र (कंज कमल / दो दल) दोनों आंखों के पीछे स्थित है। यहाँ बगुला (कपट) और भौंरा (सच्चा अनुरागी) दो रूप प्रकट होते हैं। यहाँ निज मन अपनी चौधराहट करता है।',
      pb: 'ਛੇਵਾਂ ਆਗਿਆ ਚੱਕਰ (ਦੋ ਦਲ) ਅੱਖਾਂ ਦੇ ਪਿੱਛੇ ਹੈ। ਇੱਥੇ ਬਗਲਾ ਅਤੇ ਭੌਰਾ ਰੂਪ ਦਿਸਦਾ ਹੈ।',
      en: 'The sixth Agya chakra (2 petals) behind the eyes, where the subtle mind reigns and tests the seeker.'
    },
    spiritualEssence: {
      hi: '६. आज्ञा चक्र (२ दल कंज कमल, नेत्रों के पीछे, निज मन स्थान)।',
      pb: '੬. ਆਗਿਆ ਚੱਕਰ (੨ ਦਲ, ਅੱਖਾਂ ਦੇ ਪਿੱਛੇ)।',
      en: '6. Agya Chakra (2 petals, behind the eyes).'
    }
  },
  {
    id: 'knd-v9',
    type: 'pada',
    lines: {
      hi: [
        'कँवलन भेद किया निरवारा, यह सब रचना पिण्ड मंझारा ।',
        'सतसंग कर सतगुरु सिर धारा, वह सत्यनाम उचारा है ॥ ९ ॥'
      ],
      pb: [
        'ਕੰਵਲਨ ਭੇਦ ਕਿਯਾ ਨਿਰਵਾਰਾ, ਯਹ ਸਬ ਰਚਨਾ ਪਿੰਡ ਮੰਝਾਰਾ ।',
        'ਸਤਸੰਗ ਕਰ ਸਤਗੁਰੁ ਸਿਰ ਧਾਰਾ, ਵਹ ਸਤ੍ਯਨਾਮ ਉਚਾਰਾ ਹੈ ॥ ੯ ॥'
      ],
      en: [
        'Kanwalan bhed kiya nirwaara, yah sab rachna pind manjhaara.',
        'Satsang kar satguru sir dhaara, vah satyanaam uchaara hai. ||9||'
      ]
    },
    bhavarth: {
      hi: 'यह छः कमलों (चक्रों) का भेद स्थूल शरीर (पिण्ड) के भीतर की रचना है। सत्संग करके सतगुरु के वचनों को शीश पर धारण करो और सतगुरु द्वारा प्रदत्त पावन सत्यनाम का सुमिरन करो।',
      pb: 'ਇਹ ਛੇ ਚੱਕਰਾਂ ਦੀ ਰਚਨਾ ਸਰੀਰ (ਪਿੰਡ) ਦੇ ਅੰਦਰ ਹੈ। ਸਤਿਗੁਰੂ ਦੇ ਸਤਸੰਗ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਜਾਪ ਕਰੋ।',
      en: 'These six chakras belong to the physical body (Pind). By Satsang and Satguru’s grace, cling to the holy Satyanaam.'
    },
    spiritualEssence: {
      hi: 'पिण्ड (शरीर) के ६ चक्रों की सीमा और सतगुरु-शरण की अनिवार्यता।',
      pb: 'ਪਿੰਡ ਦੇ ੬ ਚੱਕਰਾਂ ਦੀ ਸੀਮਾ।',
      en: 'Boundary of the 6 physical chakras and the vital need for Satguru.'
    }
  },
  {
    id: 'knd-v10',
    type: 'pada',
    lines: {
      hi: [
        'आँख कान मुख बंद कराओ, अनहद झींगा शब्द सुनाओ ।',
        'दोनों तिल एकतार मिलाओ, तब देखो गुलजारा है ॥ १० ॥'
      ],
      pb: [
        'ਆੰਖ ਕਾਨ ਮੁਖ ਬੰਦ ਕਰਾਓ, ਅਨਹਦ ਝੀਂਗਾ ਸ਼ਬਦ ਸੁਨਾਓ ।',
        'ਦੋਨੋਂ ਤਿਲ ਏਕਤਾਰ ਮਿਲਾਓ, ਤਬ ਦੇਖੋ ਗੁਲਜਾਰਾ ਹੈ ॥ ੧੦ ॥'
      ],
      en: [
        'Aankh kaan mukh band karaao, anhad jhinga shabd sunaao.',
        'Donon til ektaar milaao, tab dekho guljaara hai. ||10||'
      ]
    },
    bhavarth: {
      hi: 'आंख, कान और मुख के नौ द्वारों के बाहरी विषयों को बंद करके अंतर में अनहद झींगुर शब्द सुनो। दोनों आंखों की पुतलियों (तिलों) को नुक्ते पर एकाग्र करके मिलाओ, तब अंतर का अलौकिक गुलजार (प्रकाश-मंडल) प्रकट होता है।',
      pb: 'ਅੱਖਾਂ, ਕੰਨ ਤੇ ਮੁੱਖ ਬੰਦ ਕਰਕੇ ਅੰਦਰ ਅਨਹਦ ਸ਼ਬਦ ਸੁਣੋ। ਦੋਵੇਂ ਤਿਲ ਇਕਾਗਰ ਕਰਕੇ ਪ੍ਰਕਾਸ਼ ਵੇਖੋ।',
      en: 'Close outer senses, listen to the inner subtle Unhad melody, focus both pupils at the center point to behold the inner light.'
    },
    spiritualEssence: {
      hi: 'मुद्रा साधना व एकाग्रता से अंतर में अनहद नाद व अलौकिक प्रकाश का प्रकटीकरण।',
      pb: 'ਅੰਤਰਧਿਆਨ ਨਾਲ ਅਨਹਦ ਨਾਦ ਦਾ ਸੁਣਨਾ।',
      en: 'Withdrawal of outer senses revealing the inner sound and brilliant aura.'
    }
  },
  {
    id: 'knd-v11',
    type: 'pada',
    lines: {
      hi: [
        'चंद सूर एकै घर लाओ, सुषमन सेती ध्यान लगाओ ।',
        'त्रिवेणी के संग समाओ, भोर उतर चल पारा है ॥ ११ ॥'
      ],
      pb: [
        'ਚੰਦ ਸੂਰ ਏਕੈ ਘਰ ਲਾਓ, ਸੁਸ਼ਮਨ ਸੇਤੀ ਧ੍ਯਾਨ ਲਗਾਓ ।',
        'ਤ੍ਰਿਵੇਣੀ ਕੇ ਸੰਗ ਸਮਾਓ, ਭੋਰ ਉਤਰ ਚਲ ਪਾਰਾ ਹੈ ॥ ੧੧ ॥'
      ],
      en: [
        'Chand soor ekai ghar laao, sushman seti dhyaan lagaao.',
        'Triveni ke sang samaao, bhor utar chal paara hai. ||11||'
      ]
    },
    bhavarth: {
      hi: 'इड़ा (चंद्र) और पिंगला (सूर्य) स्वर को सम करके मध्य नाड़ी सुषुम्णा में ध्यान लगाओ। जहाँ तीन धाराओं का संगम (त्रिवेणी) है, उसमें समा जाओ और इस भवसागर को पार कर जाओ।',
      pb: 'ਇੜਾ ਤੇ ਪਿੰਗਲਾ ਨਾੜੀ ਨੂੰ ਸਮ ਕਰਕੇ ਸੁਖਮਨਾ ਨਾੜੀ ਵਿੱਚ ਧਿਆਨ ਲਗਾਓ ਅਤੇ ਤ੍ਰਿਵੇਣੀ ਦੇ ਸੰਗਮ ਵਿੱਚ ਸਮਾ ਜਾਓ।',
      en: 'Harmonize Ida and Pingala into the central Sushumna canal, submerge in the Triveni confluence to cross the ocean of existence.'
    },
    spiritualEssence: {
      hi: 'सुषुम्णा नाड़ी व त्रिवेणी संगम में सुरति का प्रवेश।',
      pb: 'ਸੁਖਮਨਾ ਨਾੜੀ ਵਿੱਚ ਸੁਰਤ ਦਾ ਪਰਵੇਸ਼।',
      en: 'Entry of consciousness into the central Sushumna pathway and Triveni.'
    }
  },
  {
    id: 'knd-v12',
    type: 'pada',
    lines: {
      hi: [
        'घंटा संख सुनो धुन दोई, सहस कँवल दल जगमग होई ।',
        'ता मध्य करता निरखो सोई, बंकनाल धस पारा है ॥ १२ ॥'
      ],
      pb: [
        'ਘੰਟਾ ਸ਼ੰਖ ਸੁਨੋ ਧੁਨ ਦੋਈ, ਸਹਸ ਕੰਵਲ ਦਲ ਜਗਮਗ ਹੋਈ ।',
        'ਤਾ ਮਧ੍ਯ ਕਰਤਾ ਨਿਰਖੋ ਸੋਈ, ਬੰਕਨਾਲ ਧਸ ਪਾਰਾ ਹੈ ॥ ੧੨ ॥'
      ],
      en: [
        'Ghanta sankh suno dhun doi, sahas kanwal dal jagmag hoi.',
        'Taa madhya karta nirkho soi, banknaal dhas paara hai. ||12||'
      ]
    },
    bhavarth: {
      hi: 'सहस्रार चक्र (सहस्र दल कमल) में घण्टा और शंख की मंगल धुन गूंजती है और दिव्य प्रकाश जगमगाता है। उसके मध्य में रचनाकार को निहारकर बंकनाल (सूक्ष्म टेढ़े मार्ग) में प्रवेश कर पार हो जाओ।',
      pb: 'ਸਹਸਰਾਰ ਚੱਕਰ ਵਿੱਚ ਘੰਟਾ ਤੇ ਸ਼ੰਖ ਦੀ ਧੁਨ ਗੂੰਜਦੀ ਹੈ। ਪ੍ਰਕਾਸ਼ ਵੇਖ ਕੇ ਬੰਕਨਾਲ ਦੇ ਮਾਰਗ ਤੋਂ ਅੱਗੇ ਵਧੋ।',
      en: 'At Sahasrar (1000-petaled lotus), hear the chime of bells and conch shell amid radiant light, then penetrate through Banknal.'
    },
    spiritualEssence: {
      hi: 'सहस्रार चक्र (१००० दल कमल, घण्टा व शंख ध्वनि, बंकनाल मार्ग)।',
      pb: 'ਸਹਸਰਾਰ ਚੱਕਰ (੧੦੦੦ ਦਲ ਕਮਲ, ਘੰਟਾ-ਸ਼ੰਖ ਧੁਨ)।',
      en: 'Sahasrar Chakra (1000 petals, bell and conch sound, Banknal pass).'
    }
  },
  {
    id: 'knd-v13',
    type: 'pada',
    lines: {
      hi: [
        'डाकिन शाकिन बहु किलकारें, जम किंकर धर्मदूत हकारें ।',
        'सत्यनाम सुन भागें सारे, जब सतगुरु नाम उचारा है ॥ १३ ॥'
      ],
      pb: [
        'ਡਾਕਿਨ ਸ਼ਾਕਿਨ ਬਹੁ ਕਿਲਕਾਰੈਂ, ਜਮ ਕਿੰਕਰ ਧਰਮਦੂਤ ਹਕਾਰੈਂ ।',
        'ਸਤ੍ਯਨਾਮ ਸੁਨ ਭਾਗੈਂ ਸਾਰੇ, ਜਬ ਸਤਗੁਰੁ ਨਾਮ ਉਚਾਰਾ ਹੈ ॥ ੧੩ ॥'
      ],
      en: [
        'Daakin shaakin bahu kilkaaren, jam kinkar dharmdoot hakaaren.',
        'Satyanaam sun bhaagen saare, jab satguru naam uchaara hai. ||13||'
      ]
    },
    bhavarth: {
      hi: 'मार्ग में डाकिनी, शाकिनी (मानसिक विक्षेप) और यमदूत/काल के दूत डराते हैं, परंतु जैसे ही सतगुरु द्वारा प्राप्त "सत्यनाम" का उच्चारण किया जाता है, ये सभी भयभीत होकर भाग जाते हैं।',
      pb: 'ਰਾਹ ਵਿੱਚ ਡਾਕਿਨੀ-ਸ਼ਾਕਿਨੀ ਤੇ ਜਮਦੂਤ ਡਰਾਉਂਦੇ ਹਨ, ਪਰ ਸਤਯਨਾਮ ਸੁਣ ਕੇ ਸਭ ਭੱਜ ਜਾਂਦੇ ਹਨ।',
      en: 'Inner obstacles and fears vanish instantly when the holy Satyanaam given by the Satguru is invoked.'
    },
    spiritualEssence: {
      hi: 'सतगुरु के सत्यनाम की सामर्थ्य से यम व विघ्नों का पलायन।',
      pb: 'ਸਤਯਨਾਮ ਦੇ ਜਾਪ ਨਾਲ ਸਾਰੇ ਭੈਅ ਦੂਰ ਹੁੰਦੇ ਹਨ।',
      en: 'Satyanaam dispels all inner negative forces and spiritual terrors.'
    }
  },
  {
    id: 'knd-v14',
    type: 'pada',
    lines: {
      hi: [
        'गगन मंडल विच उर्धमुख कुआँ, गुरुमुख साधू भर भर पीया ।',
        'निगुरा प्यास मरे बिन कीया, जा के हिये अंधियारा है ॥ १४ ॥'
      ],
      pb: [
        'ਗਗਨ ਮੰਡਲ ਵਿਚ ਉਰਧਮੁਖ ਕੁਆਂ, ਗੁਰੁਮੁਖ ਸਾਧੂ ਭਰ ਭਰ ਪੀਯਾ ।',
        'ਨਿਗੁਰਾ ਪ੍ਯਾਸ ਮਰੇ ਬਿਨ ਕੀਯਾ, ਜਾ ਕੇ ਹਿਯੇ ਅੰਧਿਯਾਰਾ ਹੈ ॥ ੧੪ ॥'
      ],
      en: [
        'Gagan mandal vich urdhmukh kuaan, gurumukh sadhu bhar bhar peeya.',
        'Nigura pyaas mare bin keeya, ja ke hiye andhiyaara hai. ||14||'
      ]
    },
    bhavarth: {
      hi: 'गगन मण्डल (शून्य देश) में उलटा कुआं (अमृत का कुण्ड) है, जहाँ से गुरुमुख साधक भर-भरकर अमरस पीते हैं। परंतु जो बिना गुरु (निगुरा) है, वह अज्ञान के अंधकार में प्यासा ही रह जाता है।',
      pb: 'ਅਕਾਸ਼ ਮੰਡਲ ਵਿੱਚ ਅੰਮ੍ਰਿਤ ਦਾ ਖੂਹ ਹੈ ਜਿੱਥੋਂ ਗੁਰਮੁਖ ਅੰਮ੍ਰਿਤ ਪੀਂਦੇ ਹਨ, ਪਰ ਨਿਗੁਰਾ ਪਿਆਸਾ ਰਹਿ ਜਾਂਦਾ ਹੈ।',
      en: 'In the sky of consciousness lies the inverted well of nectar; Gurumukhs drink deeply, while the guruless remain parched.'
    },
    spiritualEssence: {
      hi: 'गगन मण्डल का अमृत कुण्ड व गुरु की शरण बिना असंभवता।',
      pb: 'ਅੰਮ੍ਰਿਤ ਰਸ ਦੀ ਪ੍ਰਾਪਤੀ।',
      en: 'Inverted fountain of Nectar in the higher firmament accessible only via Guru.'
    }
  },
  {
    id: 'knd-v15',
    type: 'pada',
    lines: {
      hi: [
        'त्रिकुटी महल में विद्या सारा, घनहर गरजें बजे नगारा ।',
        'लाल बरन सूरज उजियारा, चतुर कँवल मंझार शब्द ओंकारा है ॥ १५ ॥'
      ],
      pb: [
        'ਤ੍ਰਿਕੁਟੀ ਮਹਲ ਮੇਂ ਵਿਦ੍ਯਾ ਸਾਰਾ, ਘਨਹਰ ਗਰਜੈਂ ਬਜੇ ਨਗਾਰਾ ।',
        'ਲਾਲ ਬਰਨ ਸੂਰਜ ਉਜਿਯਾਰਾ, ਚਤੁਰ ਕੰਵਲ ਮੰਝਾਰ ਸ਼ਬਦ ਓੰਕਾਰਾ ਹੈ ॥ ੧੫ ॥'
      ],
      en: [
        'Trikuti mahal mein vidya saara, ghanhar garjen baje nagaara.',
        'Laal baran sooraj ujicyaara, chatur kanwal manjhaardabd omkaara hai. ||15||'
      ]
    },
    bhavarth: {
      hi: 'त्रिकुटी (ब्रह्म लोक) में समस्त पराविद्या का भंडार है। यहाँ बादलों की गर्जना और नगाड़े की गूंज सुनाई देती है। लाल रंग के सूर्य का महान प्रकाश है और चार पंखुड़ियों के कमल के मध्य ओंकार शब्द गूंजता है।',
      pb: 'ਤ੍ਰਿਕੁਟੀ ਵਿੱਚ ਬੱਦਲਾਂ ਦੀ ਗਰਜ ਤੇ ਨਗਾਰੇ ਵੱਜਦੇ ਹਨ। ਲਾਲ ਸੂਰਜ ਦਾ ਚਾਨਣ ਤੇ ਓੰਕਾਰ ਦੀ ਧੁਨ ਹੈ।',
      en: 'Trikuti realm shines with red sun brilliance, thunderous drums, and 4-petaled lotus with Omkar vibration.'
    },
    spiritualEssence: {
      hi: 'त्रिकुटी / ब्रह्म स्थान (४ दल कमल, लाल सूर्य प्रकाश, ओंकार ध्वनि, नगाड़ा नाद)।',
      pb: 'ਤ੍ਰਿਕੁਟੀ ਮੰਡਲ (ਓੰਕਾਰ ਸ਼ਬਦ)।',
      en: 'Trikuti Realm (4 petals, red sun, Omkar sound, kettle drum resonance).'
    }
  },
  {
    id: 'knd-v16',
    type: 'pada',
    lines: {
      hi: [
        'साध सोई जिन यह गढ़ लीना, नौ दरवाजे परगट चीन्हा ।',
        'दसवाँ खोल जाय जिन दीन्हा, जहाँ कुंभकरन रहा मारा है ॥ १६ ॥'
      ],
      pb: [
        'ਸਾਧ ਸੋਈ ਜਿਨ ਯਹ ਗੜ੍ਹ ਲੀਨਾ, ਨੌ ਦਰਵਾਜੇ ਪਰਗਟ ਚੀਨ੍ਹਾ ।',
        'ਦਸਵਾਂ ਖੋਲ ਜਾਯ ਜਿਨ ਦੀਨ੍ਹਾ, ਜਹਾਂ ਕੁੰਭਕਰਨ ਰਹਾ ਮਾਰਾ ਹੈ ॥ ੧੬ ॥'
      ],
      en: [
        'Saadh soi jin yah gadh leena, nau darwaaje pargat cheenha.',
        'Daswaan khol jaay jin deenha, jahan kumbhkaran raha maara hai. ||16||'
      ]
    },
    bhavarth: {
      hi: 'सच्चा साधु वही है जिसने शरीर रूपी इस किले को जीत लिया है। नौ द्वारों से सुरति समेटकर दसवां द्वार (दशम द्वार) खोल दिया है, जहाँ मन रूपी कुंभकरण निष्प्राण हो जाता है।',
      pb: 'ਸੱਚਾ ਸਾਧੂ ਉਹ ਹੈ ਜਿਸਨੇ ਨੌਂ ਦਰਵਾਜ਼ੇ ਲੰਘ ਕੇ ਦਸਵਾਂ ਦੁਆਰ ਖੋਲ੍ਹ ਲਿਆ ਹੈ।',
      en: 'True saint is he who conquers this bodily fort, closes 9 gates and unlocks the 10th Door (Dasam Dwar).'
    },
    spiritualEssence: {
      hi: 'दशम द्वार (दसवां द्वार) का उद्घाटन व मन का लय।',
      pb: 'ਦਸਵਾਂ ਦੁਆਰ ਖੋਲ੍ਹਣਾ।',
      en: 'Opening of the Tenth Door (Dasam Dwar) overcoming ego.'
    }
  },
  {
    id: 'knd-v17',
    type: 'pada',
    lines: {
      hi: [
        'आगे सेत सुन्न है भाई, मानसरोवर पैठ अन्हाई ।',
        'हंसन मिल हंसा होइ जाई, मिलै जो अमी अहारा है ॥ १७ ॥'
      ],
      pb: [
        'ਆਗੇ ਸ਼ਵੇਤ ਸੁੰਨ ਹੈ ਭਾਈ, ਮਾਨਸਰੋਵਰ ਪੈਠ ਅਨ੍ਹਾਈ ।',
        'ਹੰਸਨ ਮਿਲ ਹੰਸਾ ਹੋਇ ਜਾਈ, ਮਿਲੈ ਜੋ ਅਮੀ ਅਹਾਰਾ ਹੈ ॥ ੧੭ ॥'
      ],
      en: [
        'Aage set sunn hai bhaai, maansarovar paith anhaai.',
        'Hansan mil hansa hoi jaai, milai jo ami ahaara hai. ||17||'
      ]
    },
    bhavarth: {
      hi: 'आगे श्वेत शून्य (परपार स्थान) है, जहाँ मानसरोवर तीर्थ में आत्मा स्नान करती है। वहाँ मुक्त हंसों में मिलकर स्वयं हंस हो जाती है और अमर फल (अमृत) का आहार करती है।',
      pb: 'ਅੱਗੇ ਸ਼ਵੇਤ ਸੁੰਨ ਮੰਡਲ ਹੈ ਜਿੱਥੇ ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਕੇ ਆਤਮਾ ਅੰਮ੍ਰਿਤ ਦਾ ਆਹਾਰ ਕਰਦੀ ਹੈ।',
      en: 'Beyond lies the Pure White Sunn region and Mansarovar lake, where the soul bathes and feeds on divine nectar.'
    },
    spiritualEssence: {
      hi: 'श्वेत शून्य व मानसरोवर (परम हंस पद व अमराहार)।',
      pb: 'ਮਾਨਸਰੋਵਰ ਤੇ ਸ਼ਵੇਤ ਸੁੰਨ ਮੰਡਲ।',
      en: 'Par-Par White Sunn and the celestial Lake Mansarovar.'
    }
  },
  {
    id: 'knd-v18',
    type: 'pada',
    lines: {
      hi: [
        'किंगरी सारंग बजै सितारा, अच्छर ब्रह्म सुन्न दरबारा ।',
        'द्वादश भानु हंस उजियारा, खटदल कँवल मंझार शब्द रारंकारा है ॥ १८ ॥'
      ],
      pb: [
        'ਕਿੰਗਰੀ ਸਾਰੰਗ ਬਜੈ ਸਿਤਾਰਾ, ਅੱਛਰ ਬ੍ਰਹ੍ਮ ਸੁੰਨ ਦਰਬਾਰਾ ।',
        'ਦ੍ਵਾਦਸ਼ ਭਾਨੁ ਹੰਸ ਉਜਿਯਾਰਾ, ਖਟਦਲ ਕੰਵਲ ਮੰਝਾਰ ਸ਼ਬਦ ਰਾਰੰਕਾਰਾ ਹੈ ॥ ੧੮ ॥'
      ],
      en: [
        'Kingari saarang bajai sitaara, achhar brahm sunn darbaara.',
        'Dwadas bhaanu hans ujicyaara, khatdal kanwal manjhaardabd rarankaara hai. ||18||'
      ]
    },
    bhavarth: {
      hi: 'शून्य दरबार में अक्षर ब्रह्म का स्थान है, जहाँ सारंगी और सितार की अलौकिक धुने बजती हैं। यहाँ प्रत्येक हंस १२ सूर्यों जैसा प्रकाशमान है। ६ पंखुड़ियों वाले कमल में "रारंकार" शब्द गूंजता है।',
      pb: 'ਸੁੰਨ ਦਰਬਾਰ ਵਿੱਚ ਅੱਖਰ ਬ੍ਰਹਮ ਦਾ ਨਿਵਾਸ ਹੈ। ਇੱਥੇ ਸਿਤਾਰ ਦੀ ਧੁਨ ਤੇ ਰਾਰੰਕਾਰ ਸ਼ਬਦ ਹੈ।',
      en: 'Sunn Darbar of Achhar Brahm, ringing with Sarangi and Sitar, 6-petaled lotus echoing with Rarankar sound.'
    },
    spiritualEssence: {
      hi: 'शून्य मंडल / अक्षर ब्रह्म (६ दल कमल, १२ सूर्य प्रकाश, रारंकार शब्द, सितार नाद)।',
      pb: 'ਸੁੰਨ ਮੰਡਲ (ਰਾਰੰਕਾਰ ਸ਼ਬਦ)।',
      en: 'Sunn Mandal / Achhar Brahm (6 petals, 12 Sun brilliance, Rarankar sound).'
    }
  },
  {
    id: 'knd-v19',
    type: 'pada',
    lines: {
      hi: [
        'महासुन्न सिन्ध विषम घाटी, बिन सतगुरु पावै नहीं बाटी ।',
        'व्याघ्र सिंह सरप बहु काटी, तहाँ सहज अचिंत पसारा है ॥ १९ ॥'
      ],
      pb: [
        'ਮਹਾਸੁੰਨ ਸਿੰਧ ਵਿਸ਼ਮ ਘਾਟੀ, ਬਿਨ ਸਤਗੁਰ ਪਾਵੈ ਨਹੀ ਬਾਟੀ ।',
        'ਵ੍ਯਾਘ੍ਰ ਸਿੰਘ ਸਰਪ ਬਹੁ ਕਾਟੀ, ਤਹਾਂ ਸਹਜ ਅਚਿੰਤ ਪਸਾਰਾ ਹੈ ॥ ੧੯ ॥'
      ],
      en: [
        'Mahasunn sindh visham ghaati, bin satguru paavai nahi baati.',
        'Byaaghr singh sarap bahu kaati, tahan sahaj achint pasaara hai. ||19||'
      ]
    },
    bhavarth: {
      hi: 'आगे महाशून्य (घोर अंधकारमय घाटी) है, जिसे बिना सतगुरु की कृपा मार्गदर्शक के पार नहीं किया जा सकता। यहाँ अज्ञान रूपी बाघ, सिंह व सर्पों का भय है, पर सतगुरु के साथ सहज अचिंत का विस्तार है।',
      pb: 'ਮਹਾਸੁੰਨ ਦੀ ਘਾਟੀ ਬਿਨਾਂ ਸਤਿਗੁਰੂ ਦੇ ਪਾਰ ਨਹੀਂ ਹੁੰਦੀ। ਇੱਥੇ ਅਚਿੰਤ ਦਾ ਪਸਾਰਾ ਹੈ।',
      en: 'Great Abyss of Mahasunn cannot be traversed without Satguru, leading into the serene expanse of Sahaj Achint.'
    },
    spiritualEssence: {
      hi: 'महाशून्य (घोर अंधकारमय शून्य पार क्षेत्र जहाँ केवल सतगुरु की ज्योति मार्ग दिखाती है)।',
      pb: 'ਮਹਾਸੁੰਨ ਮੰਡਲ।',
      en: 'Mahasunn (Impenetrable void traversed solely by Satguru Light).'
    }
  },
  {
    id: 'knd-v20',
    type: 'pada',
    lines: {
      hi: [
        'अष्टदल कँवल पारब्रह्म भाई, दाहिने द्वादश अचिंत रहाई ।',
        'बायें दस दल सहज समाई, यूँ कँवलन निरवारा है ॥ २० ॥'
      ],
      pb: [
        'ਅਸ਼ਟਦਲ ਕੰਵਲ ਪਾਰਬ੍ਰਹ੍ਮ ਭਾਈ, ਦਾਹਿਨੇ ਦ੍ਵਾਦਸ਼ ਅਚਿੰਤ ਰਹਾਈ ।',
        'ਬਾਏਂ ਦਸ ਦਲ ਸਹਜ ਸਮਾਈ, ਯੂੰ ਕੰਵਲਨ ਨਿਰਵਾਰਾ ਹੈ ॥ ੨੦ ॥'
      ],
      en: [
        'Ashtdal kanwal paarbrahm bhaai, daahine dwadas achint rahaai.',
        'Baayen das dal sahaj samaai, yoon kanwalan nirwaara hai. ||20||'
      ]
    },
    bhavarth: {
      hi: 'पारब्रह्म स्थान ८ पंखुड़ियों का कमल है। इसके दाहिने १२ पंखुड़ियों का अचिंत लोक है और बायें १० पंखुड़ियों का सहज लोक समाया हुआ है। इस प्रकार कमलों का यह अलौकिक निरवार (विस्तार) है।',
      pb: 'ਪਾਰਬ੍ਰਹਮ ਸਥਾਨ ੮ ਪੰਖੜੀਆਂ ਦਾ ਕਮਲ ਹੈ, ਜਿੱਥੇ ਅਚਿੰਤ ਤੇ ਸਹਿਜ ਲੋਕ ਦਾ ਨਿਵਾਸ ਹੈ।',
      en: 'Parbrahm region features an 8-petaled lotus, flanked by 12-petaled Achint on the right and 10-petaled Sahaj on the left.'
    },
    spiritualEssence: {
      hi: 'पारब्रह्म लोक (८ दल कमल, दाहिने १२ दल अचिंत, बायें १० दल सहज)।',
      pb: 'ਪਾਰਬ੍ਰਹਮ ਮੰਡਲ।',
      en: 'Parbrahm Region (8 petals flanked by Achint & Sahaj).'
    }
  },
  {
    id: 'knd-v21',
    type: 'pada',
    lines: {
      hi: [
        'पाँच ब्रह्म पाँचों अण्ड बीनो, पाँच ब्रह्म निःअक्षर चीन्हो ।',
        'चार मुकाम गुप्त तहँ कीन्हो, जा मध्य बंदीवान पुरुष दरबारा है ॥ २१ ॥'
      ],
      pb: [
        'ਪਾਂਚ ਬ੍ਰਹ੍ਮ ਪਾਂਚੋਂ ਅੰਡ ਬੀਨੋ, ਪਾਂਚ ਬ੍ਰਹ੍ਮ ਨਿਃਅਕਸ਼ਰ ਚੀਨ੍ਹੋ ।',
        'ਚਾਰ ਮੁਕਾਮ ਗੁਪਤ ਤਹੰ ਕੀਨ੍ਹੋ, ਜਾ ਮਧ੍ਯ ਬੰਦੀਵਾਨ ਪੁਰੁਸ਼ ਦਰਬਾਰਾ ਹੈ ॥ ੨੧ ॥'
      ],
      en: [
        'Paanch brahm paanchon and beeno, paanch brahm nih-akshar cheenho.',
        'Chaar mukaam gupt tahan keenho, ja madhya bandeewaan purush darbaara hai. ||21||'
      ]
    },
    bhavarth: {
      hi: 'यहाँ ५ ब्रह्म (पिण्ड/अण्ड के रचयिता) और निःअक्षर ब्रह्म का भेद जाना जाता है। चार गुप्त मुकामों के पार वह बंदीवान लोक है, जहाँ माया के आवरण से परे सत्यपुरुष का पावन दरबार है।',
      pb: 'ਇੱਥੇ ਪੰਜ ਬ੍ਰਹਮ ਤੇ ਨਿਃਅੱਖਰ ਦਾ ਭੇਦ ਮਿਲਦਾ ਹੈ। ਗੁਪਤ ਚਾਰ ਮੁਕਾਮਾਂ ਪਾਰ ਸਤਿਪੁਰਖ ਦਾ ਦਰਬਾਰ ਹੈ।',
      en: 'Transcending the 5 Brahms and Nih-Akshar lies the secret hidden realms leading to the Court of the Supreme Sovereign.'
    },
    spiritualEssence: {
      hi: '५ ब्रह्म व निःअक्षर का पार भेद तथा चार गुप्त मुकाम।',
      pb: 'ਨਿਃਅੱਖਰ ਬ੍ਰਹਮ ਦਾ ਭੇਦ।',
      en: 'Discriminating the 5 Brahms and Nih-Akshar.'
    }
  },
  {
    id: 'knd-v22',
    type: 'pada',
    lines: {
      hi: [
        'दो परबत के संधि निहारो, भँवर गुफा ते संत पुकारो ।',
        'हंसा करते केल अपारो, तहाँ गुरन दरबारा है ॥ २२ ॥'
      ],
      pb: [
        'ਦੋ ਪਰਬਤ ਕੇ ਸੰਧਿ ਨਿਹਾਰੋ, ਭੰਵਰ ਗੁਫਾ ਤੇ ਸੰਤ ਪੁਕਾਰੋ ।',
        'ਹੰਸਾ ਕਰਤੇ ਕੇਲ ਅਪਾਰੋ, ਤਹਾਂ ਗੁਰਨ ਦਰਬਾਰਾ ਹੈ ॥ ੨੨ ॥'
      ],
      en: [
        'Do parbat ke sandhi nihaaro, bhanwar gupha te sant pukaaro.',
        'Hansa karte kel apaaro, tahan guran darbaara hai. ||22||'
      ]
    },
    bhavarth: {
      hi: 'दो पर्वतों के बीच भंवर गुफा का पावन स्थान है। यहाँ संत पुकारते हैं, हंस आत्माएँ अपार आनंद-क्रीड़ा करती हैं और सतगुरुओं का दरबार सुशोभित है।',
      pb: 'ਦੋ ਪਹਾੜਾਂ ਦੇ ਵਿਚਕਾਰ ਭੰਵਰ ਗੁਫਾ ਹੈ ਜਿੱਥੇ ਸਤਿਗੁਰੂ ਦਾ ਦਰਬਾਰ ਤੇ ਹੰਸ ਆਤਮਾਵਾਂ ਦਾ ਅਨੰਦ ਹੈ।',
      en: 'Between two peaks lies Bhanwar Gupha, where divine souls revel in supreme bliss at the Master’s court.'
    },
    spiritualEssence: {
      hi: 'भंवर गुफा (दो पर्वतों की संधि, सोहं मुरली धुन व गुरु दरबार)।',
      pb: 'ਭੰਵਰ ਗੁਫਾ ਮੰਡਲ।',
      en: 'Bhanwar Gupha (Whirling Cave, Divine Melody).'
    }
  },
  {
    id: 'knd-v23',
    type: 'pada',
    lines: {
      hi: [
        'सहस अठासी दीप रचाये, हीरे पन्ने महल जड़ाये ।',
        'मुरली बजत अखंड सदाये, तहाँ सोहं झुनकारा है ॥ २३ ॥'
      ],
      pb: [
        'ਸਹਸ ਅਠਾਸੀ ਦੀਪ ਰਚਾਏ, ਹੀਰੇ ਪੰਨੇ ਮਹਲ ਜੜਾਏ ।',
        'ਮੁਰਲੀ ਬਜਤ ਅਖੰਡ ਸਦਾਏ, ਤਹਾਂ ਸੋਹੰ ਝੁਨਕਾਰਾ ਹੈ ॥ ੨੩ ॥'
      ],
      en: [
        'Sahas athaasi deep rachaaye, heere panne mahal jadaaye.',
        'Murali bajat akhand sadaaye, tahan soham jhunkaara hai. ||23||'
      ]
    },
    bhavarth: {
      hi: 'भंवर गुफा में ८८,००० अमरापुरी द्वीप रचे हैं, जहाँ हीरे व पन्नों से जड़े महल हैं। यहाँ अखंड रूप से बांसुरी (मुरली) बजती है और "सोहं-सोहं" की मधुर धुन गूंजती है।',
      pb: 'ਇੱਥੇ ੮੮,੦੦੦ ਦੀਪ ਅਤੇ ਹੀਰੇ-ਪੰਨਿਆਂ ਦੇ ਮਹਲ ਹਨ। ਸਦਾ ਅਖੰਡ ਮੁਰਲੀ ਤੇ ਸੋਹੰ ਦੀ ਧੁਨ ਵੱਜਦੀ ਹੈ।',
      en: 'In Bhanwar Gupha abide 88,000 islands with jeweled palaces, where the eternal Flute plays with endless "Soham" resonance.'
    },
    spiritualEssence: {
      hi: '८८,००० अमरापुरी द्वीप व अखंड मुरली सोहं नाद।',
      pb: '੮੮,੦੦੦ ਦੀਪ ਤੇ ਅਖੰਡ ਮੁਰਲੀ।',
      en: '88,000 Eternal Islands and Flute Melody.'
    }
  },
  {
    id: 'knd-v24',
    type: 'pada',
    lines: {
      hi: [
        'सोहं हद्द तजी जब भाई, सत्त लोक की हद पुनि आई ।',
        'उठत सुगंध महा अधिकाई, जा को वार न पारा है ॥ २४ ॥'
      ],
      pb: [
        'ਸੋਹੰ ਹੱਦ ਤਜੀ ਜਬ ਭਾਈ, ਸੱਤ ਲੋਕ ਕੀ ਹਦ ਪੁਨਿ ਆਈ ।',
        'ਉਠਤ ਸੁਗੰਧ ਮਹਾ ਅਧਿਕਾਈ, ਜਾ ਕੋ ਵਾਰ ਨ ਪਾਰਾ ਹੈ ॥ ੨੪ ॥'
      ],
      en: [
        'Soham hadd taji jab bhaai, satt lok ki had puni aai.',
        'Utat sugandh maha adhikaai, ja ko waar na paara hai. ||24||'
      ]
    },
    bhavarth: {
      hi: "जब सोहं (काल/माया की अंतिम सीमा) की हद को पार कर जाते हैं, तब अमर 'सत्त लोक' (सचखंड) की पावन सीमा प्रारंभ होती है। यहाँ से असीम और अलौकिक आध्यात्मिक सुगंध उठती है।",
      pb: 'ਜਦੋਂ ਸੋਹੰ ਦੀ ਹੱਦ ਲੰਘਦੇ ਹਾਂ ਤਾਂ ਸੱਚਖੰਡ (ਸੱਤ ਲੋਕ) ਦੀ ਹੱਦ ਆਉਂਦੀ ਹੈ, ਜਿੱਥੇ ਅਪਾਰ ਸੁਗੰਧ ਹੈ।',
      en: 'Crossing the boundary of Soham, one enters the holy realm of Satt Lok (Sachkhand), filled with infinite divine fragrance.'
    },
    spiritualEssence: {
      hi: 'सत्त लोक (सचखंड) प्रवेश - सोहं सीमा पार व अलौकिक सुवास।',
      pb: 'ਸੱਤ ਲੋਕ (ਸੱਚਖੰਡ) ਪ੍ਰਵੇਸ਼।',
      en: 'Entering Satt Lok (Sachkhand) beyond Soham limits.'
    }
  },
  {
    id: 'knd-v25',
    type: 'pada',
    lines: {
      hi: [
        'षोड़श भानु हंस को रूपा, बीना सत धुन बजै अनूपा ।',
        'हंसा करते चँवर सिर भूपा, सत्त पुरुष दरबारा है ॥ २५ ॥'
      ],
      pb: [
        'ਸ਼ੋੜਸ਼ ਭਾਨੁ ਹੰਸ ਕੋ ਰੂਪਾ, ਬੀਨਾ ਸਤ ਧੁਨ ਬਜੈ ਅਨੂਪਾ ।',
        'ਹੰਸਾ ਕਰਤੇ ਚੰਵਰ ਸਿਰ ਭੂਪਾ, ਸੱਤ ਪੁਰੁਸ਼ ਦਰਬਾਰਾ ਹੈ ॥ ੨੫ ॥'
      ],
      en: [
        'Shodash bhaanu hans ko roopa, beena sat dhun bajai anoopa.',
        'Hansa karte chanwar sir bhoopa, satt purush darbaara hai. ||25||'
      ]
    },
    bhavarth: {
      hi: "सत्त लोक में प्रत्येक मुक्तात्मा (हंस) का रूप १६ सूर्यों के समान दिव्य तेजस्वी है। यहाँ सत-बीणा की अनुपम ध्वनि बजती है और मुक्त हंस परम सम्राट 'सत्य पुरुष' के सिर पर चंवर झुलाते हैं।",
      pb: 'ਸੱਤ ਲੋਕ ਵਿੱਚ ਹਰ ਹੰਸ ੧੬ ਸੂਰਜਾਂ ਵਰਗਾ ਤਪਦਾ ਹੈ। ਸਤਿਬੀਣਾ ਦੀ ਧੁਨ ਵੱਜਦੀ ਹੈ ਤੇ ਸਤਿਪੁਰਖ ਦਾ ਦਰਬਾਰ ਹੈ।',
      en: 'In Satt Lok, each Hansa glows with the light of 16 Suns; Sat-Beena plays as liberated souls serve Satt Purush.'
    },
    spiritualEssence: {
      hi: 'सत्य पुरुष दरबार, १६ सूर्य तेजस्वी हंस व सत-बीणा नाद।',
      pb: 'ਸਤਿਪੁਰਖ ਦਰਬਾਰ।',
      en: 'Court of Satt Purush, 16-Sun radiant souls and Sat-Veena music.'
    }
  },
  {
    id: 'knd-v26',
    type: 'pada',
    lines: {
      hi: [
        'कोटिन भानु उदय जो होई, एते ही पुनि चंद्र लखोई ।',
        'पुरुष रोम सम एक न होई, ऐसा पुरुष दीदारा है ॥ २६ ॥'
      ],
      pb: [
        'ਕੋਟਿਨ ਭਾਨੁ ਉਦਯ ਜੋ ਹੋਈ, ਏਤੇ ਹੀ ਪੁਨਿ ਚੰਦ੍ਰ ਲਖੋਈ ।',
        'ਪੁਰੁਸ਼ ਰੋਮ ਸਮ ਏਕ ਨ ਹੋਈ, ਐਸਾ ਪੁਰੁਸ਼ ਦੀਦਾਰਾ ਹੈ ॥ ੨੬ ॥'
      ],
      en: [
        'Kotin bhaanu uday jo hoi, ete hee puni chandr lakhoi.',
        'Purush rom sam ek na hoi, aisa purush deedara hai. ||26||'
      ]
    },
    bhavarth: {
      hi: 'यदि एक साथ करोड़ों सूर्य उदित हो जाएँ और उतने ही चंद्रमा भी चमकने लगें, तो भी वे परम पुरुष (सत्य पुरुष) के शरीर के एक रोम छिद्र की आभा की बराबरी नहीं कर सकते! ऐसा अलौकिक व अनुपम पुरुष-दीदार है।',
      pb: 'ਕਰੋੜਾਂ ਸੂਰਜ ਤੇ ਚੰਦਰਮਾ ਮਿਲ ਕੇ ਵੀ ਸਤਿਪੁਰਖ ਦੇ ਇੱਕ ਵਾਲ ਦੀ ਰੋਸ਼ਨੀ ਦਾ ਮੁਕਾਬਲਾ ਨਹੀਂ ਕਰ ਸਕਦੇ।',
      en: 'If millions of suns and moons shone simultaneously, they could not match the radiance of a single hair of the Supreme Being.'
    },
    spiritualEssence: {
      hi: 'परम पुरुष (सत्य पुरुष) का कोटि-सूर्य से भी परे अलौकिक रूप दीदार।',
      pb: 'ਸਤਿਪੁਰਖ ਦਾ ਅਪਾਰ ਦੀਦਾਰ।',
      en: 'Incomparable light of Supreme Being exceeding millions of suns.'
    }
  },
  {
    id: 'knd-v27',
    type: 'pada',
    lines: {
      hi: [
        'आगे अलख लोक है भाई, अलख पुरुष की तहाँ ठकुराई ।',
        'अरबन सूर रोम सम नाहीं, ऐसा अलख निहारा है ॥ २७ ॥'
      ],
      pb: [
        'ਆਗੇ ਅਲਖ ਲੋਕ ਹੈ ਭਾਈ, ਅਲਖ ਪੁਰੁਸ਼ ਕੀ ਤਹਾਂ ਠਕੁਰਾਈ ।',
        'ਅਰਬਨ ਸੂਰ ਰੋਮ ਸਮ ਨਾਹੀ, ਐਸਾ ਅਲਖ ਨਿਹਾਰਾ ਹੈ ॥ ੨੭ ॥'
      ],
      en: [
        'Aage alakh lok hai bhaai, alakh purush ki tahan thukraai.',
        'Arban soor rom sam naahin, aisa alakh nihaara hai. ||27||'
      ]
    },
    bhavarth: {
      hi: "सत्त लोक से भी आगे 'अलख लोक' है, जहाँ 'अलख पुरुष' की सम्प्रभुता है। अरबों सूर्यों का प्रकाश भी उनके एक रोम की बराबरी नहीं कर सकता, ऐसा अलख दर्शन है।",
      pb: 'ਅੱਗੇ ਅਲਖ ਲੋਕ ਹੈ ਜਿੱਥੇ ਅਲਖ ਪੁਰਖ ਦਾ ਰਾਜ ਹੈ। ਅਰਬਾਂ ਸੂਰਜ ਵੀ ਉਹਨਾਂ ਅੱਗੇ ਫਿੱਕੇ ਹਨ।',
      en: 'Beyond Satt Lok lies Alakh Lok governed by Alakh Purush, exceeding the light of billions of suns.'
    },
    spiritualEssence: {
      hi: 'अलख लोक (अरबों सूर्य प्रकाश, अलख पुरुष स्वरूप)।',
      pb: 'ਅਲਖ ਲੋਕ।',
      en: 'Alakh Lok (Billion-sun luminosity, Alakh Purush).'
    }
  },
  {
    id: 'knd-v28',
    type: 'pada',
    lines: {
      hi: [
        'ता पर अगम महल इक साजा, अगम पुरुष ताहि को राजा ।',
        'खरबन सूर रोम इक लाजा, ऐसा अगम अपारा है ॥ २८ ॥'
      ],
      pb: [
        'ਤਾ ਪਰ ਅਗਮ ਮਹਲ ਇਕ ਸਾਜਾ, ਅਗਮ ਪੁਰੁਸ਼ ਤਾਹਿ ਕੋ ਰਾਜਾ ।',
        'ਖਰਬਨ ਸੂਰ ਰੋਮ ਇਕ ਲਾਜਾ, ਐਸਾ ਅਗਮ ਅਪਾਰਾ ਹੈ ॥ ੨੮ ॥'
      ],
      en: [
        'Taa par agam mahal ik saaja, agam purush taahi ko raaja.',
        'Kharban soor rom ik laaja, aisa agam apaara hai. ||28||'
      ]
    },
    bhavarth: {
      hi: "उसके ऊपर 'अगम महल' रचा हुआ है, जिसके सम्राट 'अगम पुरुष' हैं। खरबों सूर्यों का प्रकाश भी उनके एक रोम के सम्मुख लज्जित हो जाता है। ऐसा असीम अपार अगम पद है।",
      pb: 'ਉਸਦੇ ਉੱਪਰ ਅਗਮ ਮਹਲ ਹੈ ਜਿੱਥੇ ਖਰਬਾਂ ਸੂਰਜਾਂ ਦਾ ਪ੍ਰਕਾਸ਼ ਅਗਮ ਪੁਰਖ ਅੱਗੇ ਫਿੱਕਾ ਪੈ ਜਾਂਦਾ ਹੈ।',
      en: 'Above stands Agam Mahal governed by Agam Purush, before whose single hair trillions of suns hide in shadow.'
    },
    spiritualEssence: {
      hi: 'अगम महल (खरबों सूर्य प्रकाश, अगम पुरुष स्वरूप)।',
      pb: 'ਅਗਮ ਮਹਲ।',
      en: 'Agam Mahal (Trillion-sun luminosity, Agam Purush).'
    }
  },
  {
    id: 'knd-v29',
    type: 'pada',
    lines: {
      hi: [
        'ता पर अकह लोक है भाई, पुरुष अनामी तहाँ रहाई ।',
        'जो पहुँचा जानेगा वाही, कहन सुनन से न्यारा है ॥ २९ ॥'
      ],
      pb: [
        'ਤਾ ਪਰ ਅਕਹ ਲੋਕ ਹੈ ਭਾਈ, ਪੁਰੁਸ਼ ਅਨਾਮੀ ਤਹਾਂ ਰਹਾਈ ।',
        'ਜੋ ਪਹੁੰਚਾ ਜਾਨੇਗਾ ਵਾਹੀ, ਕਹਨ ਸੁਨਨ ਸੇ ਨ੍ਯਾਰਾ ਹੈ ॥ ੨੯ ॥'
      ],
      en: [
        'Taa par akah lok hai bhaai, purush anaami tahan rahaai.',
        'Jo pahuncha jaanega vaahi, kahan sunan se nyara hai. ||29||'
      ]
    },
    bhavarth: {
      hi: "उन सबसे ऊपर 'अकह लोक' (अनामी देश) है, जहाँ स्वयं 'अनामी पुरुष' (परम अनामी पद) विराजमान हैं। जो साधक सतगुरु कृपा से वहाँ तक पहुँचता है, वही इसे जानता है। यह वाणी और मन के कहने-सुनने से परे है।",
      pb: 'ਸਭ ਤੋਂ ਉੱਪਰ ਅਕਹ ਲੋਕ (ਅਨਾਮੀ ਧਾਮ) ਹੈ ਜਿੱਥੇ ਅਨਾਮੀ ਪੁਰਖ ਹਨ। ਇਹ ਕਥਨ ਤੋਂ ਪਰੇ ਹੈ।',
      en: 'At the apex abides Akah Lok (Anami Dham) home of Anami Purush — beyond speech, mind, and description.'
    },
    spiritualEssence: {
      hi: 'अकह लोक / अनामी धाम (परम अनामी पुरुष, शब्द पार निज-पद)।',
      pb: 'ਅਕਹ ਲੋਕ (ਅਨਾਮੀ ਧਾਮ)।',
      en: 'Akah Lok / Anami Dham (The Supreme Unnamable Absolute).'
    }
  },
  {
    id: 'knd-v30',
    type: 'pada',
    lines: {
      hi: [
        'काया भेद किया निरवारा, यह सब रचना पिण्ड मंझारा ।',
        'माया अविगत जाल पसारा, सो कारीगर भारा है ॥ ३० ॥'
      ],
      pb: [
        'ਕਾਯਾ ਭੇਦ ਕਿਯਾ ਨਿਰਵਾਰਾ, ਯਹ ਸਬ ਰਚਨਾ ਪਿੰਡ ਮੰਝਾਰਾ ।',
        'ਮਾਇਆ ਅਵਿਗਤ ਜਾਲ ਪਸਾਰਾ, ਸੋ ਕਾਰੀਗਰ ਭਾਰਾ ਹੈ ॥ ੩੦ ॥'
      ],
      en: [
        'Kaaya bhed kiya nirwaara, yah sab rachna pind manjhaara.',
        'Maaya avigat jaal pasaara, so kaarigar bhaara hai. ||30||'
      ]
    },
    bhavarth: {
      hi: 'यह संपूर्ण काया-भेद और अंतर के कमलों की रचना पिण्ड (शरीर) और ब्रह्माण्ड के भीतर का सूक्ष्म नक्शा है। माया ने अत्यंत चतुर कारीगरी से यह सूक्ष्म जाल पसारा हुआ है।',
      pb: 'ਇਹ ਸਾਰਾ ਕਾਇਆ-ਭੇਦ ਸਰੀਰ ਤੇ ਬ੍ਰਹਮਾਂਡ ਦਾ ਨਕਸ਼ਾ ਹੈ ਜੋ ਮਾਇਆ ਨੇ ਬਣਾਇਆ ਹੈ।',
      en: 'This bodily map reveals how lower levels are structured within Pind and And by subtle illusion.'
    },
    spiritualEssence: {
      hi: 'काया-भेद का सूक्ष्म रहस्य व माया की कारीगरी।',
      pb: 'ਕਾਇਆ ਭੇਦ ਦਾ ਮਾਇਆ ਜਾਲ।',
      en: 'Exposing the body-cosmos map and Maya’s architecture.'
    }
  },
  {
    id: 'knd-v31',
    type: 'pada',
    lines: {
      hi: [
        'आदि माया कीन्ही चतुराई, झूठी बाजी पिण्ड दिखाई ।',
        'अविगत रचन रची अण्ड माहीं, ता का प्रतिबिंब डारा है ॥ ३१ ॥'
      ],
      pb: [
        'ਆਦਿ ਮਾਇਆ ਕੀਨ੍ਹੀ ਚਤੁਰਾਈ, ਝੂਠੀ ਬਾਜੀ ਪਿੰਡ ਦਿਖਾਈ ।',
        'ਅਵਿਗਤ ਰਚਨ ਰਚੀ ਅੰਡ ਮਾਹੀ, ਤਾ ਕਾ ਪ੍ਰਤਿਬੰਬ ਡਾਰਾ ਹੈ ॥ ੩੧ ॥'
      ],
      en: [
        'Aadi maaya keenhi chaturaai, jhoothi baaji pind dikhaai.',
        'Avigat rachan rachi and maahin, taa ka pratibimb daara hai. ||31||'
      ]
    },
    bhavarth: {
      hi: 'आदि माया ने अपनी चतुराई से पिण्ड (शरीर) में ब्रह्माण्ड का प्रतिबिंब डालकर यह झूठा खेल दिखाया है, ताकि जीव इसी में उलझा रहे।',
      pb: 'ਆਦਿ ਮਾਇਆ ਨੇ ਅੰਡ ਦਾ ਪ੍ਰਤਿਬਿੰਬ ਪਿੰਡ ਵਿੱਚ ਪਾ ਕੇ ਜੀਵ ਨੂੰ ਭੁਲਾਇਆ ਹੈ।',
      en: 'Aadi Maya cleverly projected the cosmic reflection into the physical body so souls remain spellbound.'
    },
    spiritualEssence: {
      hi: 'अण्ड का प्रतिबिंब पिण्ड में होने का गुप्त रहस्य।',
      pb: 'ਅੰਡ ਦਾ ਅਕਸ ਪਿੰਡ ਵਿੱਚ।',
      en: 'Reflection of cosmos inside physical body.'
    }
  },
  {
    id: 'knd-v32',
    type: 'pada',
    lines: {
      hi: [
        'शब्द बिहंगम चाल हमारी, कहैं कबीर सतगुरु दइ तारी ।',
        'खुले कपाट शब्द झुनकारी, पिण्ड अण्ड के पार सो देस हमारा है ॥ ३२ ॥'
      ],
      pb: [
        'ਸ਼ਬਦ ਬਿਹੰਗਮ ਚਾਲ ਹਮਾਰੀ, ਕਹੈਂ ਕਬੀਰ ਸਤਗੁਰ ਦਇ ਤਾਰੀ ।',
        'ਖੁਲੇ ਕਪਾਟ ਸ਼ਬਦ ਝੁਨਕਾਰੀ, ਪਿੰਡ ਅੰਡ ਕੇ ਪਾਰ ਸੋ ਦੇਸ ਹਮਾਰਾ ਹੈ ॥ ੩੨ ॥'
      ],
      en: [
        'Shabd bihangam chaal hamaari, kahain kabir satgur dai taari.',
        'Khule kapaat shabd jhunkaari, pind and ke paar so des hamaara hai. ||32||'
      ]
    },
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फ़रमाते हैं कि हमारी चाल "विहंगम चाल" (पक्षियों जैसी सीधे आकाश मार्ग की सीधी उड़ान) है! सतगुरु ने अपनी दया से पार होने की ताली (कुंजी) दे दी है। जब अंतर के किवाड़ खुलते हैं और शब्द की झंकार उठती है, तब जीव पिण्ड और अण्ड के पार अपने वास्तविक निज-देश (सत्त लोक/अनामी पद) पहुँच जाता है।',
      pb: 'ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਾਡੀ ਚਾਲ ਵਿਹੰਗਮ ਚਾਲ (ਸਿੱਧੀ ਉਡਾਰੀ) ਹੈ। ਪਿੰਡ ਤੇ ਅੰਡ ਤੋਂ ਪਾਰ ਹੀ ਸਾਡਾ ਅਸਲੀ ਨਿਜ ਘਰ (ਸੱਤ ਲੋਕ) ਹੈ।',
      en: 'Satguru Kabir Saheb proclaims: Our path is Bihangam Chaal (direct bird-like soaring flight)! Satguru unlocked the inner gates — beyond Pind and And lies our Eternal Homeland Satt Lok!'
    },
    spiritualEssence: {
      hi: 'विहंगम चाल (सीधी शब्द साधना) द्वारा पिण्ड व अण्ड के पार निज-देश सत्त लोक की प्राप्ति।',
      pb: 'ਵਿਹੰਗਮ ਚਾਲ ਦੁਆਰਾ ਪਿੰਡ ਤੇ ਅੰਡ ਤੋਂ ਪਾਰ ਨਿਜ ਘਰ ਪਹੁੰਚਣਾ।',
      en: 'Bihangam Chaal: Direct flight beyond physical and astral cosmos to the Soul’s Eternal Abode Satt Lok.'
    }
  }
];

export const KAMAL_STAGES_SUMMARY: KamalLevelInfo[] = [
  { verseNo: 3, name: "मूलाधार चक्र (Mooladhara)", petalsOrStage: "४ दल कमल (लाल)", deityOrSound: "श्री गणेश जी / ऋद्धि-सिद्धि", mantraOrWord: "क्लीं (Kilang)", spiritualMeaning: "आधार चक्र - संयम व शुद्धि" },
  { verseNo: 4, name: "स्वाधिष्ठान चक्र (Swadishthan)", petalsOrStage: "६ दल कमल", deityOrSound: "ब्रह्मा जी व सावित्री जी", mantraOrWord: "ओंकार (ओम)", spiritualMeaning: "सृष्टि चक्र - काम-वासना विजय" },
  { verseNo: 5, name: "मणिपुर/नाभि चक्र (Nabhi Manipur)", petalsOrStage: "८ दल कमल (श्वेत सिंहासन)", deityOrSound: "भगवान विष्णु व लक्ष्मी जी", mantraOrWord: "ह्रीं (Hiring)", spiritualMeaning: "पालन चक्र - संतोष व समता" },
  { verseNo: 6, name: "अनाहत/हृदय चक्र (Anahata Hriday)", petalsOrStage: "१२ दल कमल", deityOrSound: "भगवान शिव व पार्वती जी", mantraOrWord: "सोहं (Soham)", spiritualMeaning: "हृदय कमल - प्रेम व भक्ति" },
  { verseNo: 7, name: "विशुद्ध/कंठ चक्र (Vishuddha Kanth)", petalsOrStage: "१६ दल कमल", deityOrSound: "आद्या शक्ति (अविद्या)", mantraOrWord: "श्रीं (Shring)", spiritualMeaning: "कंठ कमल - वाक् शुद्धि व विवेक" },
  { verseNo: 8, name: "आज्ञा चक्र (Agya Chakra / Kanj)", petalsOrStage: "२ दल कमल (नेत्रों के पीछे)", deityOrSound: "निज मन स्थान (बग-भौंरा)", mantraOrWord: "मनन व सुरति-निरति", spiritualMeaning: "तृतीय नेत्र स्थान - अंतर्मुखता" },
  { verseNo: 10, name: "दशम द्वार प्रविष्ट (10th Door Entrance)", petalsOrStage: "दोनों तिल एकाग्रता", deityOrSound: "अनहद झींगुर नाद", mantraOrWord: "अंतर प्रकाश मंडल", spiritualMeaning: "नौ द्वारों से परे सुरति खिंचाव" },
  { verseNo: 11, name: "सुषुम्णा व त्रिवेणी (Sushumna & Triveni)", petalsOrStage: "इड़ा-पिंगला साम्य", deityOrSound: "गंगा-यमुना-सरस्वती संगम", mantraOrWord: "त्रिवेणी धारा", spiritualMeaning: "मध्य मार्ग में सुरति का विलय" },
  { verseNo: 12, name: "सहस्रार / सहस्र दल (Sahasrar)", petalsOrStage: "१००० दल कमल", deityOrSound: "घण्टा व शंख दिव्य धुन", mantraOrWord: "बंकनाल (Banknal)", spiritualMeaning: "सहस्रार प्रकाश व ज्योति दर्शन" },
  { verseNo: 15, name: "त्रिकुटी महल (Trikuti)", petalsOrStage: "४ दल कमल (लाल सूर्य)", deityOrSound: "घनहर गर्जन व नगाड़ा नाद", mantraOrWord: "ओंकार (Omkar)", spiritualMeaning: "ब्रह्म पद - ज्ञान व पराविद्या" },
  { verseNo: 17, name: "श्वेत शून्य व मानसरोवर (Set Sunn)", petalsOrStage: "अमराहार हंस पद", deityOrSound: "मानसरोवर अमरस स्नान", mantraOrWord: "अमृत आहार", spiritualMeaning: "परमहंस पद - पाप-पुण्य से मुक्ति" },
  { verseNo: 18, name: "शून्य दरबार (Achhar Brahm Sunn)", petalsOrStage: "६ दल कमल (१२ सूर्य रूप)", deityOrSound: "सारंगी व सितार नाद", mantraOrWord: "रारंकार (Rarankar)", spiritualMeaning: "अक्षर ब्रह्म लोक - निर्मल चेतना" },
  { verseNo: 19, name: "महाशून्य (Mahasunn)", petalsOrStage: "अंधकारमय महाघाटी", deityOrSound: "सतगुरु दीपक ज्योति प्रकाश", mantraOrWord: "सहज अचिंत", spiritualMeaning: "महाशून्य पार - केवल सतगुरु बल" },
  { verseNo: 20, name: "पारब्रह्म लोक (Paarbrahm)", petalsOrStage: "८ दल कमल (१२ अचिंत + १० सहज)", deityOrSound: "अचिंत व सहज समाधि", mantraOrWord: "पारब्रह्म पद", spiritualMeaning: "पारब्रह्म - त्रिगुण परे" },
  { verseNo: 22, name: "भंवर गुफा (Bhanwar Gupha)", petalsOrStage: "दो पर्वतों की संधि (८८,००० दीप)", deityOrSound: "अखंड सोहं मुरली नाद", mantraOrWord: "सोहं झुनकार", spiritualMeaning: "भंवर गुफा - गुरु दरबार" },
  { verseNo: 24, name: "सत्त लोक / सचखंड (Satt Lok)", petalsOrStage: "असीम सुगंधित दिव्य लोक", deityOrSound: "सत बीणा अनुपम नाद", mantraOrWord: "सत्यनाम (Satyanaam)", spiritualMeaning: "अमर लोक - १६ सूर्य तेजस्वी हंस" },
  { verseNo: 27, name: "अलख लोक (Alakh Lok)", petalsOrStage: "अरबों सूर्य प्रकाश", deityOrSound: "अलख पुरुष की ठकुराई", mantraOrWord: "अलख (Alakh)", spiritualMeaning: "अलख पद - मन-बुद्धि परे" },
  { verseNo: 28, name: "अगम महल (Agam Mahal)", petalsOrStage: "खरबों सूर्य प्रकाश", deityOrSound: "अगम पुरुष का सिंहासन", mantraOrWord: "अगम (Agam)", spiritualMeaning: "अगम पद - अनंत महिमा" },
  { verseNo: 29, name: "अकह लोक / अनामी देश (Anami Dham)", petalsOrStage: "सर्वोच्च निज-धाम (अकथ्य)", deityOrSound: "परम अनामी पुरुष", mantraOrWord: "अनामी (Anami)", spiritualMeaning: "अंतिम परम पद - विहंगम चाल की पूर्णता" }
];
