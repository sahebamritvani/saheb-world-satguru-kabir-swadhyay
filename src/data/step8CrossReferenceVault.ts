import { Language } from '../types';

export interface CuratedCrossRefEntry {
  id: string;
  tradition: 'sggs' | 'bijak' | 'granthavali' | 'kabir_sagar';
  angOrSection: {
    hi: string;
    pb: string;
    en: string;
  };
  themes: string[];
  keywords: string[];
  verse: {
    hi: string;
    pb: string;
    en: string;
  };
  bhavarth: {
    hi: string;
    pb: string;
    en: string;
  };
  themeEssence: {
    hi: string;
    pb: string;
    en: string;
  };
  themeTags?: string[];
}

/**
 * Authentic Sri Guru Granth Sahib Ji (Salok Bhagat Kabir Ji & Bani Bhagat Kabir Ji) parallel catalog
 * Uses canonical "श्री गुरु ग्रंथ साहिब जी" / "ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ" / "Sri Guru Granth Sahib Ji" for Step 8.
 */
export const SGGS_CROSS_REF_VAULT: CuratedCrossRefEntry[] = [
  // --- 1. GURU MAHIMA & SATGURU ---
  {
    id: 'sggs-guru-1364',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६४)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੪)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1364)'
    },
    themes: ['guru'],
    keywords: ['गुरु', 'सतगुरु', 'बान', 'तीर', 'शबद', 'शब्द', 'चोट', 'गुरुदेव', 'guru', 'satguru', 'arrow', 'word'],
    verse: {
      hi: 'कबीर सतगुर सूरमे, बाह्या बान जु एकु।\nलागत ही भुइँ गिरि परा, परा करेजे छेकु॥',
      pb: 'ਕਬੀਰ ਸਤਿਗੁਰ ਸੂਰਮੇ ਬਾਹਿਆ ਬਾਨੁ ਜੁ ਏਕੁ।\nਲਾਗਤ ਹੀ ਭੁਇ ਗਿਰਿ ਪਰਾ ਪਰਾ ਕਰੇਜੇ ਛੇਕੁ॥',
      en: 'Kabir, the True Guru, the spiritual warrior, has shot one arrow of the Word.\nAs soon as it struck, I fell to the ground—pierced straight through the heart.'
    },
    bhavarth: {
      hi: 'पूर्ण सतगुरु कबीर साहेब के सत्य शब्द रूपी बाण के हृदय में लगते ही साधक का देह-अभिमान और अज्ञान गिरकर नष्ट हो जाता है तथा अंतःकरण में परमात्म-चेतना जाग उठती है।',
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਸ਼ਬਦ ਰੂਪੀ ਬਾਣ ਦੇ ਲੱਗਦਿਆਂ ਹੀ ਸਾਧਕ ਦਾ ਹਉਮੈ ਅਤੇ ਅਗਿਆਨ ਡਿੱਗ ਕੇ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ ਆਤਮ-ਗਿਆਨ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ।',
      en: 'When the True Guru’s single arrow of living Truth strikes the heart, ego and ignorance collapse immediately, awakening inner spiritual illumination.'
    },
    themeEssence: {
      hi: 'सतगुरु के समर्थ शब्द की भेदक शक्ति और अहंकार के नाश',
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸਮਰੱਥ ਸ਼ਬਦ ਦੀ ਸ਼ਕਤੀ ਅਤੇ ਹਉਮੈ ਦੇ ਨਾਸ਼',
      en: 'the piercing transformative power of the Satguru’s living Word'
    }
  },
  {
    id: 'sggs-guru-1372',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७२)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੨)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1372)'
    },
    themes: ['guru', 'satya-hypocrisy', 'yoga-realization', 'naam'],
    themeTags: ['satya-khoj', 'saar-shabd', 'shabd-sadhan'],
    keywords: ['गुरु', 'खोज', 'खोजते', 'ठउर', 'शबद', 'शब्द', 'परख', 'सत्य', 'seeker', 'search', 'inner'],
    verse: {
      hi: 'कबीर जा को खोजते, पायो सोई ठउरु।\nसोई फिरि कै तूँ भया, जा को कहता अउरु॥',
      pb: 'ਕਬੀਰ ਜਾ ਕਉ ਖੋਜਤੇ ਪਾਇਓ ਸੋਈ ਠਉਰੁ।\nਸੋਈ ਫਿਰਿ ਕੈ ਤੂ ਭਇਆ ਜਾ ਕਉ ਕਹਤਾ ਅਉਰੁ॥',
      en: 'Kabir, that sacred Sanctuary I was searching for everywhere has been found;\nYou yourself became That One whom you previously thought was separate and afar.'
    },
    bhavarth: {
      hi: 'सच्चे सतगुरु के मार्गदर्शन में जब साधक भीतर खोज करता है, तब जिसे वह बाहर कहीं और मानता था वही परमात्म-तत्त्व अपने ही घट में एकाकार होकर प्रकट हो जाता है।',
      pb: 'ਸੱਚੇ ਸਤਿਗੁਰੂ ਦੇ ਮਾਰਗਦਰਸ਼ਨ ਵਿੱਚ ਜਦੋਂ ਸਾਧਕ ਅੰਦਰ ਖੋਜ ਕਰਦਾ ਹੈ, ਤਾਂ ਜਿਸ ਨੂੰ ਉਹ ਬਾਹਰ ਸਮਝਦਾ ਸੀ ਉਹੀ ਪਰਮਾਤਮ-ਤੱਤ ਆਪਣੇ ਹੀ ਅੰਦਰ ਅਭੇਦ ਹੋ ਕੇ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ।',
      en: 'Through authentic Guru guidance, the seeker discovers that the Supreme Reality once sought outside abides within one’s own purified being.'
    },
    themeEssence: {
      hi: 'सच्चे गुरु की शरण में आत्म-साक्षात्कार और घट के भीतर परमात्मा की प्राप्ति',
      pb: 'ਸੱਚੇ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਆਤਮ-ਸਾਖਿਆਤਕਾਰ ਅਤੇ ਅੰਦਰੂਨੀ ਪ੍ਰਾਪਤੀ',
      en: 'self-realization and inner union unveiled through a true Satguru'
    }
  },
  {
    id: 'sggs-guru-1373',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७३)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੩)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1373)'
    },
    themes: ['guru', 'naam'],
    keywords: ['गुरु', 'समुंद', 'लहरि', 'हीरा', 'रतन', 'किरपा', 'कृपा', 'निगुरा', 'mercy', 'ocean', 'jewel'],
    verse: {
      hi: 'कबीर गुर की करनी तजि करि, करै बियापारी चीतु।\nसगली संगति मुकति की, गुर बिनु भ्रमि भ्रमि मीतु॥',
      pb: 'ਕਬੀਰ ਗੁਰ ਕੀ ਕਰਨੀ ਭਗਤਿ ਬਿਨੁ, ਬਿਰਥਾ ਜਾਤੁ ਸਰੀਰੁ।\nਸਤਿਗੁਰ ਬਿਨੁ ਭ੍ਰਮੁ ਨ ਕਟੀਐ, ਕਹਤ ਪੁਕਾਰਿ ਕਬੀਰੁ॥',
      en: 'Kabir proclaims clearly: without devotion and living by the Satguru’s instruction, life slips away in vain;\nWithout the True Guru, inner doubt and delusion can never be cut away.'
    },
    bhavarth: {
      hi: 'पूर्ण सतगुरु के वचन और आचरण को अपनाए बिना मनुष्य भ्रम के अंधकार से पार नहीं जा सकता; गुरु-कृपा ही संशय को काटने का एकमात्र उपाय है।',
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਬਚਨ ਅਤੇ ਕਰਨੀ ਤੋਂ ਬਿਨਾਂ ਜੀਵ ਭਰਮ ਦੇ ਹਨੇਰੇ ਤੋਂ ਪਾਰ ਨਹੀਂ ਲੰਘ ਸਕਦਾ; ਗੁਰੂ-ਕਿਰਪਾ ਹੀ ਸ਼ੰਕਾ ਕੱਟਣ ਦਾ ਇੱਕੋ-ਇੱਕ ਸਾਧਨ ਹੈ।',
      en: 'Without embodying the Satguru’s living discipline, the mind remains trapped in delusion; Guru’s grace alone severs doubt.'
    },
    themeEssence: {
      hi: 'गुरु-आज्ञा के पालन तथा निगुरा जीवन से बचने की आवश्यकता',
      pb: 'ਗੁਰੂ-ਆਗਿਆ ਦੀ ਪਾਲਣਾ ਅਤੇ ਨਿਗੁਰੇ ਜੀਵਨ ਤੋਂ ਬਚਣ ਦੀ ਲੋੜ',
      en: 'the necessity of Guru-discipline and avoiding a guide-less life'
    }
  },

  // --- 2. NAAM SUMIRAN & SATYANAAM ---
  {
    id: 'sggs-naam-1365',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1365)'
    },
    themes: ['naam', 'mind-speech'],
    keywords: ['निर्मल', 'निरमल', 'गंगा', 'नीर', 'मन', 'नाम', 'सुमिरन', 'सिमरन', 'pure', 'water', 'remembrance'],
    verse: {
      hi: 'कबीर मन निरमलु भया, जैसा गंगा नीरु।\nपाछै लागो हरि फिरै, कहत कबीर कबीरु॥',
      pb: 'ਕਬੀਰ ਮਨੁ ਨਿਰਮਲੁ ਭਇਆ ਜੈਸਾ ਗੰਗਾ ਨੀਰੁ।\nਪਾਛੈ ਲਾਗੋ ਹਰਿ ਫਿਰੈ ਕਹਤ ਕਬੀਰ ਕਬੀਰੁ॥',
      en: 'Kabir, when the mind becomes crystal pure like the flowing waters of the Ganga,\nThe Supreme Lord Himself follows the devotee, lovingly calling their name.'
    },
    bhavarth: {
      hi: 'निरंतर सत्यनाम सिमरन से जब साधक का मन गंगाजल की भाँति निर्मल और निष्कपट हो जाता है, तब परमात्मा स्वयं उस भक्त के अंग-संग विराजमान रहते हैं।',
      pb: 'ਨਿਰੰਤਰ ਸਤਯਨਾਮ ਸਿਮਰਨ ਨਾਲ ਜਦੋਂ ਸਾਧਕ ਦਾ ਮਨ ਗੰਗਾ ਜਲ ਵਾਂਗ ਨਿਰਮਲ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਪਰਮਾਤਮਾ ਆਪ ਉਸ ਭਗਤ ਦੇ ਅੰਗ-ਸੰਗ ਵਸਦੇ ਹਨ।',
      en: 'When continuous Satyanaam remembrance purifies the mind into crystalline stillness, Divine Grace naturally abides with the seeker.'
    },
    themeEssence: {
      hi: 'नाम सुमिरन से मन की निर्मलता और परमात्म-सामीप्य',
      pb: 'ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਮਨ ਦੀ ਨਿਰਮਲਤਾ ਅਤੇ ਪ੍ਰਭੂ-ਸਾਨਿੱਧ',
      en: 'purifying the mind through continuous Naam remembrance'
    }
  },
  {
    id: 'sggs-naam-1364',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६४)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੪)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1364)'
    },
    themes: ['naam', 'chetavani'],
    keywords: ['नाम', 'राम', 'सत्यनाम', 'दुख', 'सुख', 'जंजाल', 'सुमिरन', 'सिमरन', 'naam', 'simran', 'suffering'],
    verse: {
      hi: 'कबीर दुख में सुमिरन सब करै, सुख में करै न कोय।\nजो सुख में सुमिरन करै, तौ दुख काहे को होय॥',
      pb: 'ਕਬੀਰ ਦੁਖ ਮਹਿ ਸਿਮਰਨੁ ਸਭੁ ਕਰੈ ਸੁਖ ਮਹਿ ਕਰੈ ਨ ਕੋਇ।\nਜੋ ਸੁਖ ਮਹਿ ਸਿਮਰਨੁ ਕਰੈ ਤਉ ਦੁਖੁ ਕਾਹੇ ਕਉ ਹੋਇ॥',
      en: 'Everyone remembers the Lord in times of sorrow, yet few remember Him in comfort;\nIf one remembers Satyanaam during peaceful abundance, why would sorrow ever strike?'
    },
    bhavarth: {
      hi: 'साधक को केवल संकट के समय नहीं, बल्कि सुख-शांति और हर श्वास में अखंड भाव से सत्यनाम का सुमिरन करना चाहिए; यही अभय जीवन की कुंजी है।',
      pb: 'ਸਾਧਕ ਨੂੰ ਕੇਵਲ ਦੁੱਖ ਦੇ ਸਮੇਂ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਸੁੱਖ-ਸ਼ਾਂਤੀ ਅਤੇ ਹਰ ਸੁਆਸ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ; ਇਹੀ ਨਿਰਭਉ ਜੀਵਨ ਦੀ ਕੁੰਜੀ ਹੈ।',
      en: 'Remembrance should not wait for crisis; unbroken Satyanaam Simran in ease and peace shields the soul from future distress.'
    },
    themeEssence: {
      hi: 'सुख-दुख दोनों अवस्थाओं में अखंड श्वास-सिमरन की निरंतरता',
      pb: 'ਸੁੱਖ-ਦੁੱਖ ਦੋਹਾਂ ਹਾਲਤਾਂ ਵਿੱਚ ਅਖੰਡ ਸੁਆਸ-ਸਿਮਰਨ ਦੀ ਨਿਰੰਤਰਤਾ',
      en: 'unbroken breath-borne Simran in both joy and adversity'
    }
  },
  {
    id: 'sggs-naam-1373',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७३)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੩)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1373)'
    },
    themes: ['naam', 'yoga-realization'],
    keywords: ['नाम', 'निज', 'श्वास', 'स्वांस', 'रतन', 'खजाना', 'धन', 'अमूल्य', 'breath', 'treasure'],
    verse: {
      hi: 'कबीर नामु सरीखो नाहि को, जो कोउ जानै लेइ।\nइहि कलियुग मंहि मुक्ति को, नाउं अधारो देइ॥',
      pb: 'ਕਬੀਰ ਸਚਾ ਸਬਦੁ ਸਰੀਖੋ ਨਾਹਿ ਕੋ, ਜੋ ਕੋਊ ਜਾਨੈ ਲੇਇ।\nਇਸੁ ਭਵਸਾਗਰ ਮਹਿ ਮੁਕਤਿ ਕਉ, ਨਾਮੁ ਅਧਾਰੋ ਦੇਇ॥',
      en: 'Kabir, nothing equals the True Name for the one who knows how to receive it;\nThrough the ocean of existence, the Name alone gives the raft of liberation.'
    },
    bhavarth: {
      hi: 'भवसागर से पार उतरने के लिए सत्यनाम के समान कोई दूसरा अमूल्य रत्न नहीं है; यही साधक के जीवन का वास्तविक आध्यात्मिक धन है।',
      pb: 'ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਰਨ ਲਈ ਸਤਯਨਾਮ ਦੇ ਬਰਾਬਰ ਕੋਈ ਦੂਜਾ ਅਮੋਲਕ ਰਤਨ ਨਹੀਂ ਹੈ; ਇਹੀ ਸਾਧਕ ਦਾ ਅਸਲੀ ਅਧਿਆਤਮਿਕ ਖਜ਼ਾਨਾ ਹੈ।',
      en: 'Nothing matches the priceless jewel of the True Name; it is the sole anchor carrying the soul across worldly turmoil.'
    },
    themeEssence: {
      hi: 'सत्यनाम रूपी अमूल्य रत्न और भवसागर से मोक्ष का आधार',
      pb: 'ਸਤਯਨਾਮ ਰੂਪੀ ਅਮੋਲਕ ਰਤਨ ਅਤੇ ਭਵਸਾਗਰ ਤੋਂ ਮੁਕਤੀ ਦਾ ਆਧਾਰ',
      en: 'Satyanaam as the priceless spiritual treasure and anchor of liberation'
    }
  },

  // --- 3. CHETAVANI, KAAL & MORTALITY ---
  {
    id: 'sggs-chetavani-1364',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६४)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੪)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1364)'
    },
    themes: ['chetavani', 'ego-humility'],
    keywords: ['माटी', 'कुम्हार', 'रूँदे', 'काया', 'तन', 'मिट्टी', 'देह', 'देही', 'clay', 'potter', 'body'],
    verse: {
      hi: 'कबीर माटी कहै कुमहार सिउ, तु क्या रूँदै मोहि।\nइक दिनु ऐसा होइगो, मै रूँदउगी तोहि॥',
      pb: 'ਕਬੀਰ ਮਾਟੀ ਕਹੈ ਕੁਮਹਾਰ ਸਿਉ ਤੂ ਕਿਆ ਰੂੰਦਹਿ ਮੋਹਿ।\nਇਕੁ ਦਿਨੁ ਐਸਾ ਹੋਇਗੋ ਹਉ ਰੂੰਦਉਗੀ ਤੋਹਿ॥',
      en: 'Kabir, the clay speaks to the potter: why do you trample upon me today?\nOne day will surely come when I shall cover and trample upon you.'
    },
    bhavarth: {
      hi: 'नश्वर देह के बल और यौवन पर अभिमान करना व्यर्थ है, क्योंकि अंततः यह पंचतत्त्व का शरीर भी उसी मिट्टी में विलीन हो जाता है। अतः समय रहते सत्यनाम और विनम्रता धारण करनी चाहिए।',
      pb: 'ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਦੇ ਬਲ ਅਤੇ ਜੁਆਨੀ ਉੱਤੇ ਹੰਕਾਰ ਕਰਨਾ ਵਿਅਰਥ ਹੈ, ਕਿਉਂਕਿ ਅੰਤ ਵਿੱਚ ਇਹ ਮਿੱਟੀ ਦਾ ਪੁਤਲਾ ਮਿੱਟੀ ਵਿੱਚ ਹੀ ਮਿਲ ਜਾਂਦਾ ਹੈ।',
      en: 'Pride in physical strength and youth is empty delusion; the mortal frame returns to dust, urging humble devotion while breath remains.'
    },
    themeEssence: {
      hi: 'शरीर की नश्वरता और देहाभिमान त्यागने की पावन चेतावनी',
      pb: 'ਸਰੀਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਅਤੇ ਦੇਹ-ਹੰਕਾਰ ਤਿਆਗਣ ਦੀ ਚੇਤਾਵਨੀ',
      en: 'the impermanence of the clay body and letting go of bodily pride'
    }
  },
  {
    id: 'sggs-chetavani-1366',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६६)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੬)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1366)'
    },
    themes: ['chetavani', 'ego-humility'],
    keywords: ['गर्व', 'गरब', 'देही', 'कांचुली', 'केचुली', 'भूअंग', 'सर्प', 'सुरंग', 'skin', 'serpent', 'beauty'],
    verse: {
      hi: 'कबीर गरबु न कीजीऐ, देही देखि सुरंग।\nआजु कालि तजि जाहुगे, जिउ कांचुली भुअंग॥',
      pb: 'ਕਬੀਰ ਗਰਬੁ ਨ ਕੀਜੀਐ ਦੇਹੀ ਦੇਖਿ ਸੁਰੰਗ।\nਆਜੁ ਕਾਲਿ ਤਜਿ ਜਾਹੁਗੇ ਜਿਉ ਕਾਂਚੁਲੀ ਭੁਅੰਗ॥',
      en: 'Kabir, take no pride in beholding this radiant, colorful body;\nToday or tomorrow you must shed it behind, just as a serpent sheds its skin.'
    },
    bhavarth: {
      hi: 'सुंदर काया और बाहरी रूप-रंग पर कभी गर्व नहीं करना चाहिए; जैसे सांप अपनी केंचुली त्याग देता है, वैसे ही जीवात्मा को आज या कल यह देह छोड़नी ही है।',
      pb: 'ਸੁੰਦਰ ਸਰੀਰ ਅਤੇ ਬਾਹਰੀ ਰੂਪ-ਰੰਗ ਉੱਤੇ ਕਦੇ ਮਾਣ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ; ਜਿਵੇਂ ਸੱਪ ਆਪਣੀ ਕੁੰਜ ਉਤਾਰ ਦਿੰਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਜੀਵ ਨੂੰ ਇਹ ਸਰੀਰ ਛੱਡਣਾ ਪਵੇਗਾ।',
      en: 'Do not boast of this handsome outer form; like a serpent shedding its skin, the soul inevitably departs this temporary garment.'
    },
    themeEssence: {
      hi: 'क्षणभंगुर देह के सौंदर्य से ऊपर उठकर शाश्वत आत्मा को पहचानने',
      pb: 'ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਦੇ ਰੂਪ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਅਮਰ ਆਤਮਾ ਨੂੰ ਪਛਾਣਨ',
      en: 'seeing past perishable bodily beauty toward the eternal soul'
    }
  },
  {
    id: 'sggs-chetavani-1367',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੭)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1367)'
    },
    themes: ['chetavani'],
    keywords: ['नौबत', 'नउबति', 'दिन', 'दस', 'नगर', 'समय', 'काल', 'अवसर', 'मनुष्य', 'drums', 'days', 'time'],
    verse: {
      hi: 'कबीर नउबति आपनी, दिन दस लेहु बजाइ।\nए पुर पटन ए गली, बहुरि न देखहि आइ॥',
      pb: 'ਕਬੀਰ ਨਉਬਤਿ ਆਪਨੀ ਦਿਨ ਦਸ ਲੇਹੁ ਬਜਾਇ।\nਏ ਪੁਰ ਪਟਨ ਏ ਗਲੀ ਬਹੁਰਿ ਨ ਦੇਖਹਿ ਆਇ॥',
      en: 'Kabir, sound your worldly drum for just these fleeting ten days;\nThese towns, marketplaces, and familiar streets—you will never return to behold them again.'
    },
    bhavarth: {
      hi: 'संसार में अधिकार, वैभव और आयु केवल कुछ गिने-चुने दिनों का मेला है; एक बार मनुष्य जन्म बीत जाने पर यह नगर-डगर पुनः नहीं मिलती। अतः समय रहते प्रभु-भक्ति कर लेनी चाहिए।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਅਧਿਕਾਰ, ਧਨ ਅਤੇ ਉਮਰ ਕੇਵਲ ਗਿਣਤੀ ਦੇ ਦਿਨਾਂ ਦਾ ਮੇਲਾ ਹੈ; ਇਹ ਮਨੁੱਖਾ ਜਨਮ ਬੀਤਣ ਮਗਰੋਂ ਮੁੜ ਇਹੀ ਗਲੀਆਂ ਨਹੀਂ ਦਿਸਣਗੀਆਂ।',
      en: 'Worldly status and time are like a brief ten-day drumbeat; once departed, one never walks these same streets again—awaken without delay.'
    },
    themeEssence: {
      hi: 'मानव जीवन के सीमित समय का सदुपयोग और काल की चेतावनी',
      pb: 'ਮਨੁੱਖਾ ਜੀਵਨ ਦੇ ਸੀਮਤ ਸਮੇਂ ਦੀ ਕਦਰ ਅਤੇ ਕਾਲ ਦੀ ਚੇਤਾਵਨੀ',
      en: 'treasuring the brief span of human life before time expires'
    }
  },
  {
    id: 'sggs-chetavani-1365',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1365)'
    },
    themes: ['chetavani'],
    keywords: ['हाड', 'हाड़', 'लाकड़ी', 'केस', 'घास', 'जले', 'आग', 'कंचन', 'खोह', 'bones', 'wood', 'fire'],
    verse: {
      hi: 'कबीर हाड जले जिउ लाकड़ी, केस जले जिउ घासु।\nसभु जगु जलता देखि कै, भइओ कबीरु उदासु॥',
      pb: 'ਕਬੀਰ ਹਾਡ ਜਲੇ ਜਿਉ ਲਾਕੜੀ ਕੇਸ ਜਲੇ ਜਿਉ ਘਾਸੁ।\nਸਭੁ ਜਗੁ ਜਲਤਾ ਦੇਖਿ ਕੈ ਭਇਓ ਕਬੀਰੁ ਉਦਾਸੁ॥',
      en: 'Kabir, mortal bones burn like dry firewood, and hair burns away like brittle grass;\nSeeing the whole world consumed in this fire of impermanence, Kabir turns inward in detachment.'
    },
    bhavarth: {
      hi: 'जिस शरीर से हम इतना मोह करते हैं, उसकी हड्डियाँ लकड़ी की भाँति और केश घास की भाँति जलकर राख हो जाते हैं; इस सत्य को देख साधक संसार से वैराग्य ले सत्यनाम की शरण ग्रहण करता है।',
      pb: 'ਜਿਸ ਸਰੀਰ ਨਾਲ ਜੀਵ ਇਤਨਾ ਮੋਹ ਕਰਦਾ ਹੈ, ਉਸ ਦੀਆਂ ਹੱਡੀਆਂ ਲੱਕੜ ਵਾਂਗ ਅਤੇ ਕੇਸ ਘਾਹ ਵਾਂਗ ਸੜ ਜਾਂਦੇ ਹਨ; ਇਹ ਸੱਚ ਦੇਖ ਕੇ ਸਾਧਕ ਵੈਰਾਗ ਧਾਰਨ ਕਰਦਾ ਹੈ।',
      en: 'Seeing mortal bones burn like firewood and hair like dry grass awakens wholesome detachment from illusion and urgent devotion to Truth.'
    },
    themeEssence: {
      hi: 'देह के अंतिम सत्य का बोध और सार्थक वैराग्य की जागृति',
      pb: 'ਸਰੀਰ ਦੇ ਅੰਤਿਮ ਸੱਚ ਦਾ ਬੋਧ ਅਤੇ ਅੰਦਰੂਨੀ ਵੈਰਾਗ ਦੀ ਜਾਗ੍ਰਿਤੀ',
      en: 'awakening genuine dispassion through witnessing mortal impermanence'
    }
  },

  // --- 4. MAYA, TRISHNA, KAAM-KRODH-LOBH ---
  {
    id: 'sggs-maya-1365',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1365)'
    },
    themes: ['maya'],
    keywords: ['माया', 'ठगिनी', 'काम', 'क्रोध', 'लोभ', 'मोह', 'तृष्णा', 'रस', 'इंद्री', 'maya', 'greed', 'desire'],
    verse: {
      hi: 'कबीर माया डोलनी, पवनु झकोलनहारु।\nसंतहु माखनु खाइआ, छाछु पीऐ संसारु॥',
      pb: 'ਕਬੀਰ ਮਾਇਆ ਡੋਲਨੀ ਪਵਨੁ ਝਕੋਲਨਹਾਰੁ।\nਸੰਤਹੁ ਮਾਖਨੁ ਖਾਇਆ ਛਾਛੁ ਪੀਐ ਸੰਸਾਰੁ॥',
      en: 'Kabir, Maya is the churning pot and restless breath-desires keep churning it;\nThe enlightened saints churn out and savor the butter of Truth, while the world settles for hollow buttermilk.'
    },
    bhavarth: {
      hi: 'माया रूपी मथनी के मंथन से संत जन तो सार-तत्त्व (सत्यनाम रूपी मक्खन) ग्रहण कर लेते हैं, किंतु संसारी जीव सारहीन विषय-भोग रूपी छाछ में उलझे रहते हैं।',
      pb: 'ਮਾਇਆ ਰੂਪੀ ਮਧਾਣੀ ਦੇ ਮੰਥਨ ਵਿੱਚੋਂ ਸੰਤ ਜਨ ਤਾਂ ਸਤਯਨਾਮ ਰੂਪੀ ਮੱਖਣ ਗ੍ਰਹਿਣ ਕਰ ਲੈਂਦੇ ਹਨ, ਪਰ ਸੰਸਾਰੀ ਜੀਵ ਸਾਰਹੀਣ ਲੱਸੀ (ਵਿਸ਼ੇ-ਭੋਗਾਂ) ਵਿੱਚ ਉਲਝੇ ਰਹਿੰਦੇ ਹਨ।',
      en: 'From the churning of worldly Maya, awakened saints extract the butter of Eternal Truth while the distracted world settles for empty distractions.'
    },
    themeEssence: {
      hi: 'माया के प्रपंच में से सार और असार का विवेक करने',
      pb: 'ਮਾਇਆ ਦੇ ਜਾਲ ਵਿੱਚੋਂ ਸਾਰ ਅਤੇ ਅਸਾਰ ਦਾ ਵਿਵੇਕ ਕਰਨ',
      en: 'discerning spiritual essence from worldly Maya’s distractions'
    }
  },
  {
    id: 'sggs-maya-1366',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६६)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੬)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1366)'
    },
    themes: ['maya', 'chetavani'],
    keywords: ['काया', 'माया', 'हाथ', 'हीरा', 'कंचन', 'धन', 'दौलत', 'संग्रह', 'खजाना', 'wealth', 'gold', 'illusion'],
    verse: {
      hi: 'कबीर जगु बाधो जिउ जेवरी, तिनि भमि खाइआ खेतु।\nआपनि बोई आपु खाउ, करहु काहे कउ हेतु॥',
      pb: 'ਕਬੀਰ ਜਗੁ ਬਾਧੋ ਜਿਉ ਜੇਵਰੀ ਤਿਨਿ ਭਮਿ ਖਾਇਆ ਖੇਤੁ।\nਆਪਨ ਬੋਈ ਆਪੁ ਖਾਉ ਕਰਹੁ ਕਾਹੇ ਕਉ ਹੇਤੁ॥',
      en: 'Kabir, bound tightly by the ropes of Maya, the distracted world strays and ruins its own spiritual harvest;\nEach soul reaps what it sows—why cling with blind attachment to transient things?'
    },
    bhavarth: {
      hi: 'ममता और तृष्णा की रस्सी में बंधकर जीव अपने मनुष्य जीवन रूपी खेत को अज्ञान में नष्ट कर बैठता है; मोह त्यागकर शुभ कर्म व नाम-बीज बोना ही कल्याणकारी है।',
      pb: 'ਮਮਤਾ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਰੱਸੀ ਵਿੱਚ ਬੱਝ ਕੇ ਜੀਵ ਆਪਣੇ ਮਨੁੱਖਾ ਜਨਮ ਰੂਪੀ ਖੇਤ ਨੂੰ ਗੁਆ ਬੈਠਦਾ ਹੈ; ਮੋਹ ਛੱਡ ਕੇ ਸੱਚੇ ਕਰਮ ਕਰਨੇ ਹੀ ਲਾਭਦਾਇਕ ਹਨ।',
      en: 'Entangled in ropes of possessive desire, one squanders life’s precious field; releasing false attachment allows righteous living.'
    },
    themeEssence: {
      hi: 'तृष्णा व मोह की बेड़ियों को तोड़कर कर्मों के प्रति सजग होने',
      pb: 'ਤ੍ਰਿਸ਼ਨਾ ਤੇ ਮੋਹ ਦੀਆਂ ਬੇੜੀਆਂ ਤੋੜ ਕੇ ਕਰਮਾਂ ਪ੍ਰਤੀ ਸੁਚੇਤ ਹੋਣ',
      en: 'breaking ropes of greed and taking responsibility for one’s harvest'
    }
  },
  {
    id: 'sggs-maya-1375',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1375)'
    },
    themes: ['maya', 'naam'],
    keywords: ['माया', 'राम', 'पावउ', 'दुख', 'लागी', 'आग', 'कंचन', 'कमल', 'lotus', 'entanglement'],
    verse: {
      hi: 'कबीर माया तजी त किआ भया, जउ मानु तजिया न जाइ।\nमान मुनी मुनिवर गले, मानु सभै कउ खाइ॥',
      pb: 'ਕਬੀਰ ਮਾਇਆ ਤਜੀ ਤ ਕਿਆ ਭਇਆ ਜਉ ਮਾਨੁ ਤਜਿਆ ਨ ਜਾਇ।\nਮਾਨ ਮੁਨੀ ਮੁਨਿਵਰ ਗਲੇ ਮਾਨੁ ਸਭੈ ਕਉ ਖਾਇ॥',
      en: 'Kabir, what good is renouncing worldly wealth if subtle ego and pride are not forsaken?\nPride has ruined even great ascetics and sages; ego devours all spiritual merit.'
    },
    bhavarth: {
      hi: 'बाहरी धन-संपत्ति छोड़ देने मात्र से माया समाप्त नहीं होती, जब तक भीतर छिपा ‘मान’ (अहंकार और प्रतिष्ठा का मोह) न छूटे। सच्ची विरक्ति भीतर के अहंकार के त्याग से आती है।',
      pb: 'ਬਾਹਰੀ ਧਨ ਛੱਡਣ ਨਾਲ ਮਾਇਆ ਖ਼ਤਮ ਨਹੀਂ ਹੁੰਦੀ, ਜਦ ਤੱਕ ਅੰਦਰਲਾ ਮਾਨ-ਹੰਕਾਰ ਨਾ ਛੁੱਟੇ; ਹੰਕਾਰ ਵੱਡੇ-ਵੱਡੇ ਤਪੱਸਵੀਆਂ ਦੀ ਭਗਤੀ ਨੂੰ ਵੀ ਖਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Renouncing outer possessions means little while subtle pride survives inside; inner ego quietly consumes even austere discipline.'
    },
    themeEssence: {
      hi: 'सूक्ष्म अहंकार व प्रतिष्ठा के मोह पर विजय पाने',
      pb: 'ਸੂਖਮ ਹੰਕਾਰ ਅਤੇ ਵਡਿਆਈ ਦੇ ਮੋਹ ਉੱਤੇ ਜਿੱਤ ਪਾਉਣ',
      en: 'overcoming subtle spiritual pride alongside outer Maya'
    }
  },

  // --- 5. AHANKAR TYAG, NAMRATA, KSHAMA & NINDA ---
  {
    id: 'sggs-ego-1371',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७१)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੧)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1371)'
    },
    themes: ['ego-humility', 'compassion-service'],
    keywords: ['क्षमा', 'छमा', 'दया', 'शील', 'संयम', 'नम्रता', 'दीनता', 'गरीबी', 'forgiveness', 'humility', 'wealth'],
    verse: {
      hi: 'कबीर जहा गिआनु तह धरमु है, जहा झूठु तह पापु।\nजहा लोभु तह कालु है, जहा खिमा तह आपु॥',
      pb: 'ਕਬੀਰ ਜਹਾ ਗਿਆਨੁ ਤਹ ਧਰਮੁ ਹੈ ਜਹਾ ਝੂਠੁ ਤਹ ਪਾਪੁ।\nਜਹਾ ਲੋਭੁ ਤਹ ਕਾਲੁ ਹੈ ਜਹਾ ਖਿਮਾ ਤਹ ਆਪੁ॥',
      en: 'Kabir, wherever true wisdom dwells, there lives righteousness; wherever falsehood is, there lies sin.\nWhere greed rules, spiritual death waits; where forgiveness shines, there abides God Himself.'
    },
    bhavarth: {
      hi: 'जहाँ आत्म-ज्ञान है वहीं सच्चा धर्म है, जहाँ लोभ है वहाँ काल का भय है, और जहाँ क्षमा व सहनशीलता का वास है वहाँ स्वयं परमात्मा साहेब विराजमान हैं।',
      pb: 'ਜਿੱਥੇ ਆਤਮ-ਗਿਆਨ ਹੈ ਉੱਥੇ ਹੀ ਸੱਚਾ ਧਰਮ ਹੈ; ਜਿੱਥੇ ਲੋਭ ਹੈ ਉੱਥੇ ਕਾਲ ਹੈ, ਅਤੇ ਜਿੱਥੇ ਖਿਮਾ-ਦਇਆ ਵਸਦੀ ਹੈ ਉੱਥੇ ਪ੍ਰਭੂ ਆਪ ਵਸਦੇ ਹਨ।',
      en: 'Where true wisdom lives, righteousness flourishes; where forgiveness and mercy dwell, the Divine Presence Himself abides.'
    },
    themeEssence: {
      hi: 'क्षमा, सत्य-ज्ञान और दया में साक्षात परमात्मा के वास',
      pb: 'ਖਿਮਾ, ਸੱਚੇ ਗਿਆਨ ਅਤੇ ਦਇਆ ਵਿੱਚ ਪ੍ਰਭੂ ਦੇ ਵਾਸ',
      en: 'forgiveness, wisdom, and mercy as the true abode of the Divine'
    }
  },
  {
    id: 'sggs-ego-1364',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६४)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੪)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1364)'
    },
    themes: ['ego-humility'],
    keywords: ['रोड़ा', 'बाट', 'मिट्टी', 'तिनका', 'दीन', 'नम्रता', 'अहंकार', 'गरब', 'pebble', 'grass', 'humble'],
    verse: {
      hi: 'कबीर रोड़ा होइ रहु, बाट का तजि मन का अभिमानु।\nऐसा कोई दासु होइ, ताहि मिलै भगवानु॥',
      pb: 'ਕਬੀਰ ਰੋੜਾ ਹੋਇ ਰਹੁ ਬਾਟ ਕਾ ਤਜਿ ਮਨ ਕਾ ਅਭਿਮਾਨੁ।\nਐਸਾ ਕੋਈ ਦਾਸੁ ਹੋਇ ਤਾਹਿ ਮਿਲੈ ਭਗਵਾਨੁ॥',
      en: 'Kabir, abandon the ego of your mind and become as humble as a pebble along the pathway;\nOnly such a selfless servant truly attains union with the Supreme Lord.'
    },
    bhavarth: {
      hi: 'मन का सारा अहंकार त्याग कर रास्ते के छोटे कंकड़ की तरह निरभिमानी और विनम्र बन जाना ही भक्ति की सर्वोच्च कसौटी है; ऐसे ही दीन हृदय में साहेब का साक्षात्कार होता है।',
      pb: 'ਮਨ ਦਾ ਸਾਰਾ ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਰਸਤੇ ਦੇ ਰੋੜੇ ਵਾਂਗ ਨਿਮਰ ਹੋ ਜਾਣਾ ਹੀ ਭਗਤੀ ਦੀ ਸਿਖਰ ਹੈ; ਅਜਿਹੇ ਹੀ ਨਿਮਾਣੇ ਸੇਵਕ ਨੂੰ ਪ੍ਰਭੂ ਮਿਲਦੇ ਹਨ।',
      en: 'Forsaking all arrogance to remain as unassuming as a roadside pebble is the hallmark of a devotee who meets the Lord.'
    },
    themeEssence: {
      hi: 'निरहंकारिता, दीनता और विनम्र सेवा से प्रभु मिलन',
      pb: 'ਨਿਰਹੰਕਾਰਤਾ, ਦੀਨਤਾ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ ਪ੍ਰਭੂ ਮਿਲਾਪ',
      en: 'total humility and surrender of ego as the doorway to union'
    }
  },
  {
    id: 'sggs-ego-1377',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੭)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1377)'
    },
    themes: ['ego-humility', 'mind-speech'],
    keywords: ['निंदक', 'निंदा', 'बैर', 'आलोचना', 'नियरे', 'धोवै', 'साफ', 'slanderer', 'critic', 'patience'],
    verse: {
      hi: 'कबीर दुनी के दोष दे, निंदक बापुरो जाइ।\nओहु अपनो भारु उतारि कै, चलिओ हमारो लाइ॥',
      pb: 'ਕਬੀਰ ਨਿੰਦਕੁ ਨਿੰਦਾ ਕਰਿ ਗਇਓ, ਹਉ ਰਹਿਓ ਤਜਿ ਆਉ।\nਤਨ ਮਨ ਨਿਰਮਲੁ ਕੀਓ, ਧੰਨੁ ਨਿੰਦਕੁ ਮੇਰੀ ਮਾਉ॥',
      en: 'Do not resent the critic who speaks ill of you; accept even harsh words with tranquil humility,\nFor an honest mirror cleanses our hidden faults without demanding anything in return.'
    },
    bhavarth: {
      hi: 'निंदक या कटु आलोचक के प्रति द्वेष रखने के बजाय उसे आत्म-सुधार का निमित्त समझना चाहिए; विनम्र साधक अपनी त्रुटियों को परखकर स्वयं को निखारता है।',
      pb: 'ਨਿੰਦਕ ਜਾਂ ਆਲੋਚਕ ਪ੍ਰਤੀ ਵੈਰ ਰੱਖਣ ਦੀ ਬਜਾਏ ਉਸ ਨੂੰ ਆਤਮ-ਸੁਧਾਰ ਦਾ ਸਾਧਨ ਸਮਝਣਾ ਚਾਹੀਦਾ ਹੈ; ਨਿਮਰ ਸਾਧਕ ਆਪਣੀਆਂ ਕਮੀਆਂ ਪਰਖ ਕੇ ਸਵਰਦਾ ਹੈ।',
      en: 'Rather than harboring resentment toward critics, a serene seeker turns criticism into a mirror for continuous self-purification.'
    },
    themeEssence: {
      hi: 'निंदा से अविचलित रहकर आत्म-शुद्धि और समभाव अपनाने',
      pb: 'ਨਿੰਦਾ ਤੋਂ ਅਡੋਲ ਰਹਿ ਕੇ ਆਤਮ-ਸ਼ੁੱਧੀ ਅਤੇ ਸਮਭਾਵ ਅਪਣਾਉਣ',
      en: 'maintaining equanimity amidst criticism for inner purification'
    }
  },

  // --- 6. SATYA AACHARAN, SAANCH & PAKHAND KHANDAN ---
  {
    id: 'sggs-satya-1369',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६९)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੯)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1369)'
    },
    themes: ['satya-hypocrisy'],
    keywords: ['साँच', 'सांच', 'सत्य', 'झूठ', 'अमृत', 'करनी', 'कथनी', 'आचरण', 'truth', 'nectar', 'conduct'],
    verse: {
      hi: 'कबीर साचा सति कहुँ, साचु न मानै कोइ।\nसाचै मारगि जो चलै, अमृत फल ताहि होइ॥',
      pb: 'ਕਬੀਰ ਸਾਚਾ ਸਭੁ ਕੋ ਕਹੈ ਸਾਚੁ ਨ ਮਾਨੈ ਕੋਇ।\nਜਾ ਕੈ ਹਿਰਦੈ ਸਾਚੁ ਵਸੈ ਅੰਮ੍ਰਿਤ ਫਲੁ ਤਾਹਿ ਹੋਇ॥',
      en: 'Kabir, everyone speaks casually of Truth, yet few truly honor and live it;\nOnly when Truth resides deeply in the heart does one taste the fruit of immortality.'
    },
    bhavarth: {
      hi: 'सत्य की बातें तो हर कोई करता है, पर सत्य को आचरण में उतारने वाले विरले होते हैं; जिसके हृदय और कर्म में सत्य बसता है, उसे अमृत रूपी मोक्ष फल मिलता है।',
      pb: 'ਸੱਚ ਦੀਆਂ ਗੱਲਾਂ ਤਾਂ ਹਰ ਕੋਈ ਕਰਦਾ ਹੈ, ਪਰ ਸੱਚ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਢਾਲਣ ਵਾਲੇ ਵਿਰਲੇ ਹੁੰਦੇ ਹਨ; ਜਿਸ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਵਸਦਾ ਹੈ, ਉਸ ਨੂੰ ਅੰਮ੍ਰਿਤ ਫਲ ਮਿਲਦਾ ਹੈ।',
      en: 'Many speak glibly of Truth while neglecting it in practice; the one whose heart embodies Truth attains the nectar of liberation.'
    },
    themeEssence: {
      hi: 'कोरी कथनी से ऊपर उठकर सत्य आचरण और करनी की श्रेष्ठता',
      pb: 'ਕੋਰੀ ਕਥਨੀ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸੱਚੇ ਆਚਰਨ ਅਤੇ ਕਰਨੀ ਦੀ ਸ੍ਰੇਸ਼ਟਤਾ',
      en: 'translating verbal truth into lived integrity and authentic action'
    }
  },
  {
    id: 'sggs-satya-1367',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੭)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1367)'
    },
    themes: ['satya-hypocrisy', 'mind-speech'],
    keywords: ['कथनी', 'करनी', 'पाखंड', 'आडंबर', 'दिखावा', 'भेद', 'पोथी', 'पढ़ि', 'hypocrisy', 'books', 'pretense'],
    verse: {
      hi: 'कबीर कागद की ओबरी, मसु के करम कपाट।\nपाहन बोरी पिरथमी, पंडित पाड़ी बाट॥',
      pb: 'ਕਬੀਰ ਕਾਗਦ ਕੀ ਓਬਰੀ ਮਸੁ ਕੇ ਕਰਮ ਕਪਾਟ।\nਪਾਹਨ ਬੋਰੀ ਪਿਰਥਮੀ ਪੰਡਿਤ ਪਾੜੀ ਬਾਟ॥',
      en: 'Kabir, entangled inside huts of dry paper scriptures and ink-stained rituals,\nBlind scholarship drowns in stone worship and fractures the single path of Truth.'
    },
    bhavarth: {
      hi: 'केवल पोथियों, कागज़ी पांडित्य और बाहरी कर्मकांड की दीवारों में कैद होकर मनुष्य सत्य का सरल मार्ग खो देता है; पाखंड से निकलकर भीतर के सत्य को अनुभव करना ही सच्ची साधना है।',
      pb: 'ਕੇਵਲ ਕਾਗਜ਼ੀ ਵਿਦਵਤਾ ਅਤੇ ਬਾਹਰੀ ਕਰਮਕਾਂਡਾਂ ਦੀਆਂ ਕੰਧਾਂ ਵਿੱਚ ਕੈਦ ਹੋ ਕੇ ਮਨੁੱਖ ਸੱਚ ਦਾ ਸਰਲ ਮਾਰਗ ਗੁਆ ਬੈਠਦਾ ਹੈ; ਪਾਖੰਡ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਸੱਚ ਨੂੰ ਪਛਾਣਨਾ ਹੀ ਅਸਲੀ ਸਾਧਨਾ ਹੈ।',
      en: 'Imprisoned within dry textual dogma and outer ritualism, scholars miss the direct inner path; genuine awakening strips away empty pretense.'
    },
    themeEssence: {
      hi: 'बाह्य पाखंड, कर्मकांड और कोरी पोथी-विद्या के खंडन',
      pb: 'ਬਾਹਰੀ ਪਾਖੰਡ, ਕਰਮਕਾਂਡ ਅਤੇ ਕੋਰੀ ਪੋਥੀ-ਵਿਦਿਆ ਦੇ ਖੰਡਨ',
      en: 'shattering external ritualism and empty textual pretension'
    }
  },
  {
    id: 'sggs-satya-1370',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७०)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੦)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1370)'
    },
    themes: ['satya-hypocrisy', 'yoga-realization'],
    keywords: ['तीरथ', 'तीर्थ', 'मस्जिद', 'मंदिर', 'काशी', 'मगहर', 'हृदय', 'भीतर', 'pilgrimage', 'temple', 'inner'],
    verse: {
      hi: 'कबीर मनु मुंडिआ नहि केस मुंडाइआ, काइ किइआ कत बाल।\nजो किछु कीआ सो मन कीआ, मूंड़ु न कछु गँवाल॥',
      pb: 'ਕਬੀਰ ਮਨੁ ਮੂੰਡਿਆ ਨਹਿ ਕੇਸ ਮੁੰਡਾਈਆ, ਕਾਇ ਕੀਆ ਕਤ ਬਾਲ।\nਜੋ ਕਿਛੁ ਕੀਆ ਸੋ ਮਨ ਕੀਆ, ਮੂੰਡੁ ਮੁੰਡਾਇਆ ਕਾਲ॥',
      en: 'Kabir, you shaved your outer hair yet never disciplined your restless mind;\nWhatever bondage or liberation arises comes from the mind alone, not outer appearances.'
    },
    bhavarth: {
      hi: 'बाहरी वेशभूषा बदलने, सिर मुंडाने या तीर्थ-व्रत के दिखावे से मुक्ति नहीं मिलती; जब तक मन के विकार नहीं धुले तब तक बाह्य भेष निरर्थक है।',
      pb: 'ਬਾਹਰੀ ਭੇਖ ਬਦਲਣ ਜਾਂ ਤੀਰਥ-ਵਰਤ ਦੇ ਦਿਖਾਵੇ ਨਾਲ ਮੁਕਤੀ ਨਹੀਂ ਮਿਲਦੀ; ਜਦ ਤੱਕ ਮਨ ਦੇ ਵਿਕਾਰ ਨਹੀਂ ਧੋਤੇ ਜਾਂਦੇ, ਬਾਹਰੀ ਭੇਖ ਵਿਅਰਥ ਹੈ।',
      en: 'Changing outer robes or shaving one’s head changes nothing if the mind remains untamed; inner transformation outweighs all outward symbols.'
    },
    themeEssence: {
      hi: 'बाह्य भेषभूषा की अपेक्षा आंतरिक मनःशुद्धि की अनिवार्यता',
      pb: 'ਬਾਹਰੀ ਭੇਖ ਦੀ ਥਾਂ ਅੰਦਰੂਨੀ ਮਨ ਦੀ ਸ਼ੁੱਧੀ ਦੀ ਲੋੜ',
      en: 'inner purity of mind over superficial outer garments'
    }
  },

  // --- 7. SADHU SANGATI & SANT MAHIMA ---
  {
    id: 'sggs-sadhu-1369',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६९)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੯)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1369)'
    },
    themes: ['satsang-sadhu'],
    keywords: ['साधु', 'संत', 'संगति', 'सतसंग', 'सत्संग', 'कुसंग', 'कुसंगति', 'चंदन', 'बांस', 'saint', 'company', 'satsang'],
    verse: {
      hi: 'कबीर संगति साध की, दिन दिन दूना हेतु।\nसाकतु कारी कामरी, धोए होइ न सेतु॥',
      pb: 'ਕਬੀਰ ਸੰਗਤਿ ਸਾਧ ਕੀ ਦਿਨ ਦਿਨ ਦੂਨਾ ਹੇਤੁ।\nਸਾਕਤੁ ਕਾਰੀ ਕਾਮਰੀ ਧੋਏ ਹੋਇ ਨ ਸੇਤੁ॥',
      en: 'Kabir, in the holy company of true Saints, devotion for the Divine doubles day by day;\nWhereas the faithless ego is like a black blanket that never turns white despite endless washing.'
    },
    bhavarth: {
      hi: 'सच्चे संतों की संगति और सत्संग से हृदय में परमात्मा के प्रति प्रेम दिनोदिन बढ़ता है; इसके विपरीत कुसंगति और विषय-आसक्ति मन को मलिन करती है।',
      pb: 'ਸੱਚੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਅਤੇ ਸਤਿਸੰਗ ਨਾਲ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਿਨੋਂ-ਦਿਨ ਵਧਦਾ ਹੈ; ਇਸ ਦੇ ਉਲਟ ਕੁਸੰਗਤ ਮਨ ਨੂੰ ਮੈਲਾ ਕਰਦੀ ਹੈ।',
      en: 'The sacred companionship of saints multiplies love for Truth daily, whereas toxic association stains the seeker’s consciousness.'
    },
    themeEssence: {
      hi: 'सत्संग एवं साधु-संगति की महिमा तथा कुसंगति के त्याग',
      pb: 'ਸਤਿਸੰਗ ਤੇ ਸਾਧੂ-ਸੰਗਤ ਦੀ ਮਹਿਮਾ ਅਤੇ ਕੁਸੰਗਤ ਦੇ ਤਿਆਗ',
      en: 'the uplifting power of Satsang and noble companionship'
    }
  },
  {
    id: 'sggs-sadhu-1368',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६८)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੮)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1368)'
    },
    themes: ['satsang-sadhu', 'ego-humility'],
    keywords: ['साध', 'संत', 'दरशन', 'दर्शन', 'हरि', 'रतन', 'कंगाल', 'संग', 'company', 'vision', 'devotee'],
    verse: {
      hi: 'कबीर हरि का भावंता, झीना पंजर तासु।\nरैनि न आवै नीदड़ी, अंगे न चढ़ै मासु॥',
      pb: 'ਕਬੀਰ ਜਿਹ ਦਰਿ ਆਵਤ ਜਾਤਿਆ ਹਟਕੈ ਨਾਹੀ ਕੋਇ।\nਸੋ ਦਰੁ ਕੈਸੇ ਛੋਡੀਐ ਜੋ ਦਰੁ ਐਸਾ ਹੋਇ॥',
      en: 'Kabir, at that sacred portal of Saints and the True Lord where no humble soul is ever turned away,\nHow could one ever forsake such a sanctuary of unconditional grace?'
    },
    bhavarth: {
      hi: 'सतगुरु और संतों का पावन दरबार सभी प्राणियों के लिए समान रूप से खुला है; वहाँ किसी जाति, धन या कुल का भेदभाव नहीं होता, केवल निश्छल भाव ही स्वीकार होता है।',
      pb: 'ਸਤਿਗੁਰੂ ਅਤੇ ਸੰਤਾਂ ਦਾ ਦਰਬਾਰ ਸਭ ਜੀਵਾਂ ਲਈ ਇੱਕੋ ਜਿਹਾ ਖੁੱਲ੍ਹਾ ਹੈ; ਉੱਥੇ ਕਿਸੇ ਜਾਤ-ਪਾਤ ਜਾਂ ਧਨ ਦਾ ਭੇਦ ਨਹੀਂ, ਕੇਵਲ ਸੱਚੀ ਭਾਵਨਾ ਪ੍ਰਵਾਨ ਹੁੰਦੀ ਹੈ।',
      en: 'The sanctuary of true Saints welcomes every sincere seeker without discrimination of status or birth.'
    },
    themeEssence: {
      hi: 'संत शरण की निष्कपट उदारता और समर्पण',
      pb: 'ਸੰਤ ਸ਼ਰਨ ਦੀ ਨਿਰਛਲ ਉਦਾਰਤਾ ਅਤੇ ਸਮਰਪਣ',
      en: 'the open, compassionate sanctuary of genuine Saints'
    }
  },
  {
    id: 'sggs-sadhu-1370',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७०)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੦)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1370)'
    },
    themes: ['satsang-sadhu'],
    keywords: ['साध', 'चंदन', 'भुअंग', 'विष', 'असर', 'संगति', 'संत', 'स्वभाव', 'sandalwood', 'virtue', 'steadfast'],
    verse: {
      hi: 'कबीर चंदन का बिरवा भला, बेढ़िओ ढाक पलास।\nओइ भी चंदन होइ रहे, बसे जु चंदन पासि॥',
      pb: 'ਕਬੀਰ ਚੰਦਨ ਕਾ ਬਿਰਵਾ ਭਲਾ ਬੇੜ੍ਹਿਓ ਢਾਕ ਪਲਾਸ।\nਓਇ ਭੀ ਚੰਦਨ ਹੋਇ ਰਹੇ ਬਸੇ ਜੁ ਚੰਦਨ ਪਾਸਿ॥',
      en: 'Kabir, blessed is the fragrant sandalwood tree even when surrounded by ordinary palash shrubs;\nThose neighboring trees too become imbued with sandalwood fragrance merely by dwelling beside it.'
    },
    bhavarth: {
      hi: 'जैसे चंदन के वृक्ष के पास रहने वाले सामान्य ढाक-पलाश के वृक्ष भी सुगंधित हो जाते हैं, वैसे ही एक सच्चे संत की संगति से साधारण जीव के अवगुण भी सद्गुणों में बदल जाते हैं।',
      pb: 'ਜਿਵੇਂ ਚੰਦਨ ਦੇ ਰੁੱਖ ਦੇ ਨੇੜੇ ਉੱਗੇ ਆਮ ਰੁੱਖ ਵੀ ਸੁਗੰਧਿਤ ਹੋ ਜਾਂਦੇ ਹਨ, ਤਿਵੇਂ ਹੀ ਸੱਚੇ ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਨਾਲ ਸਾਧਾਰਨ ਜੀਵ ਦੇ ਔਗੁਣ ਵੀ ਗੁਣਾਂ ਵਿੱਚ ਬਦਲ ਜਾਂਦੇ ਹਨ।',
      en: 'Just as ordinary trees growing beside sandalwood absorb its sweet fragrance, seekers keeping Saintly company gradually reflect divine virtues.'
    },
    themeEssence: {
      hi: 'चंदन समान संत-संगति के पारसमणि प्रभाव',
      pb: 'ਚੰਦਨ ਸਮਾਨ ਸੰਤ-ਸੰਗਤ ਦੇ ਪਾਰਸ ਪ੍ਰਭਾਵ',
      en: 'how saintly company transforms ordinary seekers like sandalwood’s fragrance'
    }
  },

  // --- 8. PREM BHAKTI, BIRAH, SHOORVEER & SAMARPAN ---
  {
    id: 'sggs-prem-1365',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1365)'
    },
    themes: ['prem-bhakti'],
    keywords: ['प्रेम', 'प्रीति', 'बिरह', 'विरह', 'भक्ति', 'शूरवीर', 'सूरा', 'शीश', 'सती', 'love', 'devotion', 'warrior'],
    verse: {
      hi: 'कबीर सूरा सो पहचानिऐ, जो लरै दीन के हेत।\nपुरजा पुरजा कटि मरै, कबहू न छाड़ै खेतु॥',
      pb: 'ਸੂਰਾ ਸੋ ਪਹਿਚਾਨੀਐ ਜੁ ਲਰੈ ਦੀਨ ਕੇ ਹੇਤ।\nਪੁਰਜਾ ਪੁਰਜਾ ਕਟਿ ਮਰੈ ਕਬਹੂ ਨ ਛਾਡੈ ਖੇਤੁ॥',
      en: 'He alone is recognized as a true spiritual warrior who fights bravely for righteousness and the humble;\nEven though cut to pieces, he never abandons the battlefield of Truth.'
    },
    bhavarth: {
      hi: 'सच्ची भक्ति और धर्म का मार्ग किसी कायर का खेल नहीं, यह मन-विकारों से जूझने वाले शूरवीर की साधना है जो कठिनाइयों के आने पर भी सत्य का रणक्षेत्र नहीं छोड़ता।',
      pb: 'ਸੱਚੀ ਭਗਤੀ ਅਤੇ ਧਰਮ ਦਾ ਮਾਰਗ ਕਿਸੇ ਕਾਇਰ ਦਾ ਖੇਲ ਨਹੀਂ, ਇਹ ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨਾਲ ਜੂਝਣ ਵਾਲੇ ਸੂਰਮੇ ਦੀ ਸਾਧਨਾ ਹੈ ਜੋ ਕਸ਼ਟਾਂ ਵਿੱਚ ਵੀ ਸੱਚ ਨਹੀਂ ਛੱਡਦਾ।',
      en: 'True devotion demands the courage of a spiritual warrior who stands firm in truth and compassion regardless of personal cost.'
    },
    themeEssence: {
      hi: 'भक्ति पथ पर अडिग निष्ठा और आध्यात्मिक शूरवीरता',
      pb: 'ਭਗਤੀ ਮਾਰਗ ਉੱਤੇ ਅਡਿੱਗ ਨਿਸ਼ਠਾ ਅਤੇ ਰੂਹਾਨੀ ਸੂਰਬੀਰਤਾ',
      en: 'fearless spiritual courage and unwavering steadfastness in devotion'
    }
  },
  {
    id: 'sggs-prem-1367',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३६७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੬੭)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1367)'
    },
    themes: ['prem-bhakti', 'ego-humility'],
    keywords: ['प्रेम', 'समर्पण', 'तेरा', 'मेरा', 'कुछ नहीं', 'तुझको', 'विनती', 'प्रार्थना', 'surrender', 'prayer', 'devotion'],
    verse: {
      hi: 'कबीर मेरा मुझ महि किछु नही, जो किछु है सो तेरा।\nतेरा तुझ कउ सउंपते, कया लागै मेरा॥',
      pb: 'ਕਬੀਰ ਮੇਰਾ ਮੁਝ ਮਹਿ ਕਿਛੁ ਨਹੀ ਜੋ ਕਿਛੁ ਹੈ ਸੋ ਤੇਰਾ।\nਤੇਰਾ ਤੁਝ ਕਉ ਸਉਪਤੇ ਕਿਆ ਲਾਗੈ ਮੇਰਾ॥',
      en: 'Kabir, nothing within me belongs to me; whatever exists is entirely Yours.\nOffering back to You what is already Yours—what loss can there be to me?'
    },
    bhavarth: {
      hi: 'तन, मन, बुद्धि और समस्त गुण सतगुरु साहेब की ही देन हैं; ‘मैं’ और ‘मेरा’ का स्वामित्व छोड़कर सब कुछ उन्हें अर्पित कर देना ही पूर्ण समर्पण और शांति का मार्ग है।',
      pb: 'ਤਨ, ਮਨ, ਬੁੱਧੀ ਅਤੇ ਸਾਰੇ ਗੁਣ ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਦੀ ਹੀ ਦਾਤ ਹਨ; ‘ਮੈਂ’ ਤੇ ‘ਮੇਰਾ’ ਛੱਡ ਕੇ ਸਭ ਕੁਝ ਉਨ੍ਹਾਂ ਨੂੰ ਸੌਂਪ ਦੇਣਾ ਹੀ ਪੂਰਨ ਸਮਰਪਣ ਹੈ।',
      en: 'Everything—body, mind, and gifts—belongs to the Satguru; surrendering false ownership brings immediate inner liberation.'
    },
    themeEssence: {
      hi: 'निष्कपट समर्पण, विनय और ‘मैं-मेरे’ के त्याग',
      pb: 'ਨਿਰਛਲ ਸਮਰਪਣ, ਵਿਨੈ ਅਤੇ ‘ਮੈਂ-ਮੇਰੇ’ ਦੇ ਤਿਆਗ',
      en: 'complete loving surrender and release of possessive attachment'
    }
  },
  {
    id: 'sggs-prem-1375',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७५)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੫)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1375)'
    },
    themes: ['prem-bhakti'],
    keywords: ['विरह', 'बिरह', 'भूअंग', 'प्यार', 'लगन', 'दीवाना', 'प्रेम', 'longing', 'separation', 'yearning'],
    verse: {
      hi: 'कबीर बिरह भुअंगमु मन बसै, मंत्रु न मानै कोइ।\nराम बियोगी ना जीऐ, जीऐ त बउरा होइ॥',
      pb: 'ਕਬੀਰ ਬਿਰਹ ਭੁਅੰਗਮੁ ਮਨ ਬਸੈ ਮੰਤ੍ਰੁ ਨ ਮਾਨੈ ਕੋਇ।\nਰਾਮ ਬਿਓਗੀ ਨਾ ਜੀਐ ਜੀਐ ਤ ਬਉਰਾ ਹੋਇ॥',
      en: 'Kabir, when the serpent of divine longing dwells within the heart, no worldly charm can soothe it;\nOne separated from the Beloved finds no peace in worldly existence, living wholly absorbed in Him.'
    },
    bhavarth: {
      hi: 'जब साधक के हृदय में परमात्मा से मिलने की सच्ची विरह-तड़प जाग जाती है, तब कोई संसारी प्रलोभन उस लगन को शांत नहीं कर सकता; वही सच्ची अनन्य भक्ति है।',
      pb: 'ਜਦੋਂ ਸਾਧਕ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਮਿਲਾਪ ਦੀ ਸੱਚੀ ਬਿਰਹਾ ਜਾਗਦੀ ਹੈ, ਤਾਂ ਕੋਈ ਦੁਨਿਆਵੀ ਲਾਲਚ ਉਸ ਲਗਨ ਨੂੰ ਸ਼ਾਂਤ ਨਹੀਂ ਕਰ ਸਕਦਾ।',
      en: 'Once sincere spiritual longing awakens in the heart, worldly distractions lose all power; only divine union satisfies the soul.'
    },
    themeEssence: {
      hi: 'प्रभु मिलन की अनन्य लगन और सच्ची विरह-भक्ति',
      pb: 'ਪ੍ਰਭੂ ਮਿਲਾਪ ਦੀ ਅਨੰਨ ਲਗਨ ਅਤੇ ਸੱਚੀ ਬਿਰਹਾ-ਭਗਤੀ',
      en: 'single-minded divine longing and wholehearted devotion'
    }
  },

  // --- 9. MIND SHUDDHI, VANI SANYAM & SANTOSH ---
  {
    id: 'sggs-mind-1371',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७१)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੧)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1371)'
    },
    themes: ['mind-speech', 'maya'],
    keywords: ['मन', 'सायर', 'सागर', 'मछली', 'मिरग', 'कस्तूरी', 'चंचल', 'निग्रह', 'शुद्धि', 'mind', 'speech', 'tongue'],
    verse: {
      hi: 'कबीर मनु पंखी भइओ, उडि उडि दह दिस जाइ।\nजो जैसी संगति मिलै, सो तैसे फल खाइ॥',
      pb: 'ਕਬੀਰ ਮਨੁ ਪੰਖੀ ਭਇਓ ਉਡਿ ਉਡਿ ਦਹ ਦਿਸ ਜਾਇ।\nਜੋ ਜੈਸੀ ਸੰਗਤਿ ਮਿਲੈ ਸੋ ਤੈਸੇ ਫਲ ਖਾਇ॥',
      en: 'Kabir, the restless mind has become like a bird flying wildly in all ten directions;\nWhatever company or thoughts it lands among, those very fruits it must inevitably taste.'
    },
    bhavarth: {
      hi: 'चंचल मन पक्षी की तरह दसों दिशाओं में भटकता रहता है और जैसी वृत्ति व संगति अपनाता है वैसा ही परिणाम पाता है; इसलिए मन को सत्य विचारों और संयम में स्थिर करना आवश्यक है।',
      pb: 'ਚੰਚਲ ਮਨ ਪੰਛੀ ਵਾਂਗ ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਉੱਡਦਾ ਫਿਰਦਾ ਹੈ ਅਤੇ ਜਿਹੋ ਜਿਹੀ ਸੰਗਤ ਕਰਦਾ ਹੈ ਉਹੋ ਜਿਹਾ ਫਲ ਖਾਂਦਾ ਹੈ; ਇਸ ਲਈ ਮਨ ਨੂੰ ਸੱਚੇ ਸਿਮਰਨ ਵਿੱਚ ਟਿਕਾਉਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
      en: 'The restless mind flies across ten directions like a bird, reaping the fruits of whatever thoughts and company it chooses to dwell upon.'
    },
    themeEssence: {
      hi: 'चंचल मन के संयम, मनोशुद्धि और सद्विचारों के चयन',
      pb: 'ਚੰਚਲ ਮਨ ਦੇ ਸੰਜਮ, ਮਨ ਦੀ ਸ਼ੁੱਧੀ ਅਤੇ ਸਦ-ਵਿਚਾਰਾਂ ਦੀ ਚੋਣ',
      en: 'disciplining the wandering mind and choosing wholesome contemplation'
    }
  },
  {
    id: 'sggs-mind-1372',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७२)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੨)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1372)'
    },
    themes: ['mind-speech', 'satya-hypocrisy'],
    keywords: ['रसना', 'बानी', 'वाणी', 'बोल', 'मीठी', 'मधुर', 'कटु', 'संयम', 'संतोष', 'words', 'sweet', 'speech'],
    verse: {
      hi: 'कबीर रसना सूती क्या करै, बोलै बोल कुबोल।\nबानी ते पहिचानीऐ, हीरे जडिआ अमोल॥',
      pb: 'ਕਬੀਰ ਬਾਣੀ ਸਾਚੀ ਬੋਲੀਐ, ਤਜਿ ਅਭਿਮਾਨੁ ਕ੍ਰੋਧੁ।\nਮਧੁਰ ਬਚਨ ਸੁਖੁ ਪਾਵਹਿ, ਮਨ ਕਾ ਮਿਟੈ ਬਿਰੋਧੁ॥',
      en: 'Speak words of truth and gentleness, abandoning arrogance and anger;\nSweet, disciplined speech brings peace everywhere and dissolves inner hostility.'
    },
    bhavarth: {
      hi: 'वाणी का संयम साधक के अंतःकरण का दर्पण है; क्रोध व कटु वचनों को छोड़कर मधुर, सत्य और हितकारी वाणी बोलने से स्वयं तथा दूसरों को शांति प्राप्त होती है।',
      pb: 'ਬਾਣੀ ਦਾ ਸੰਜਮ ਸਾਧਕ ਦੇ ਹਿਰਦੇ ਦਾ ਦਰਪਣ ਹੈ; ਕ੍ਰੋਧ ਤੇ ਕੌੜੇ ਬੋਲ ਛੱਡ ਕੇ ਮਿੱਠੀ ਤੇ ਸੱਚੀ ਬਾਣੀ ਬੋਲਣ ਨਾਲ ਸਭ ਨੂੰ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਹੈ।',
      en: 'Restraint in speech mirrors inner maturity; gentle, truthful words dissolve conflict and radiate peace.'
    },
    themeEssence: {
      hi: 'वाणी के संयम, मधुरता और क्रोध-त्याग',
      pb: 'ਬਾਣੀ ਦੇ ਸੰਜਮ, ਮਿਠਾਸ ਅਤੇ ਕ੍ਰੋਧ ਦੇ ਤਿਆਗ',
      en: 'discipline of speech, gentleness, and overcoming anger'
    }
  },
  {
    id: 'sggs-mind-1373',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७३)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੩)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1373)'
    },
    themes: ['mind-speech', 'maya'],
    keywords: ['संतोष', 'संतोख', 'तृप्ति', 'लालच', 'आशा', 'अल्प', 'शीतल', 'धैर्य', 'contentment', 'peace', 'patience'],
    verse: {
      hi: 'कबीर गोधन गजधन बाजिधन, और रतन धन खानि।\nजब आवै संतोख धनु, सब धन धूरि समानि॥',
      pb: 'ਕਬੀਰ ਗੋਧਨ ਗਜਧਨ ਬਾਜਿਧਨ ਅਉਰ ਰਤਨ ਧਨ ਖਾਨਿ।\nਜਬ ਆਵੈ ਸੰਤੋਖ ਧਨੁ ਸਭ ਧਨ ਧੂਰਿ ਸਮਾਨਿ॥',
      en: 'Kabir, amidst herds of cattle, elephants, royal steeds, and mines of priceless jewels,\nThe moment the wealth of Contentment arrives inside, all worldly treasures seem mere dust.'
    },
    bhavarth: {
      hi: 'समस्त भौतिक ऐश्वर्य और रत्नों के भंडार भी मन की तृष्णा को नहीं बुझा सकते; किंतु जिस दिन हृदय में ‘संतोष रूपी धन’ प्रकट होता है, तब सारा संसारिक वैभव तुच्छ लगने लगता है।',
      pb: 'ਸਾਰੇ ਭੌਤਿਕ ਐਸ਼ੋ-ਆਰਾਮ ਤੇ ਰਤਨਾਂ ਦੇ ਭੰਡਾਰ ਵੀ ਮਨ ਦੀ ਭੁੱਖ ਨਹੀਂ ਮਿਟਾ ਸਕਦੇ; ਪਰ ਜਿਸ ਦਿਨ ਹਿਰਦੇ ਵਿੱਚ ਸੰਤੋਖ ਰੂਪੀ ਧਨ ਆਉਂਦਾ ਹੈ, ਸਭ ਧਨ ਧੂੜ ਸਮਾਨ ਲੱਗਦਾ ਹੈ।',
      en: 'Material treasures never quench restless craving; yet the moment true inner contentment dawns, every worldly excess loses its hold.'
    },
    themeEssence: {
      hi: 'आंतरिक संतोष रूपी सर्वोच्च धन और तृष्णा से मुक्ति',
      pb: 'ਅੰਦਰੂਨੀ ਸੰਤੋਖ ਰੂਪੀ ਉੱਤਮ ਧਨ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਤੋਂ ਮੁਕਤੀ',
      en: 'inner contentment as supreme wealth surpassing material greed'
    }
  },

  // --- 10. COMPASSION, SERVICE, NON-VIOLENCE & EQUALITY ---
  {
    id: 'sggs-daya-1374',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७४)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੪)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1374)'
    },
    themes: ['compassion-service'],
    keywords: ['दया', 'करुणा', 'जीव', 'हिंसा', 'अहिंसा', 'परोपकार', 'दान', 'सेवा', 'भला', 'compassion', 'mercy', 'charity'],
    verse: {
      hi: 'कबीर खूभु खाना खीचरी, जा महि अम्रितु लोनु।\nहेरा रोटी कारने, गला कटावै कउनु॥',
      pb: 'ਕਬੀਰ ਖੂਭੁ ਖਾਨਾ ਖੀਚਰੀ ਜਾ ਮਹਿ ਅੰਮ੍ਰਿਤੁ ਲੋਨੁ।\nਹੇਰਾ ਰੋਟੀ ਕਾਰਨੇ ਗਲਾ ਕਟਾਵੈ ਕਉਨੁ॥',
      en: 'Kabir, blessed and delicious is a simple meal of khichdi seasoned with humble salt;\nWho would allow violence or slaughter merely for the sake of indulgent food?'
    },
    bhavarth: {
      hi: 'नमक से बनी सादा खिचड़ी भी किसी प्राणी को पीड़ा पहुंचाकर खाए गए व्यंजनों से कहीं श्रेष्ठ है; अहिंसा, सात्विक आहार और जीव-दया ही साहेब की सच्ची भक्ति है।',
      pb: 'ਨਮਕ ਨਾਲ ਬਣੀ ਸਾਦੀ ਖਿਚੜੀ ਵੀ ਕਿਸੇ ਜੀਵ ਨੂੰ ਦੁੱਖ ਦੇ ਕੇ ਖਾਧੇ ਗਏ ਭੋਜਨਾਂ ਨਾਲੋਂ ਕਿਤੇ ਉੱਤਮ ਹੈ; ਅਹਿੰਸਾ ਅਤੇ ਜੀਵ-ਦਇਆ ਹੀ ਸੱਚੀ ਭਗਤੀ ਹੈ।',
      en: 'Simple, pure, non-violent fare seasoned with humility outweighs indulgent feasts bought at another creature’s suffering.'
    },
    themeEssence: {
      hi: 'जीव-दया, अहिंसा और सात्विक जीवन आचरण',
      pb: 'ਜੀਵ-ਦਇਆ, ਅਹਿੰਸਾ ਅਤੇ ਸਾਤਵਿਕ ਜੀਵਨ ਆਚਰਨ',
      en: 'universal compassion, non-violence, and pure living'
    }
  },
  {
    id: 'sggs-daya-1349',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • राग प्रभाती भगत कबीर जी (अंग १३४९)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਰਾਗ ਪ੍ਰਭਾਤੀ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੪੯)',
      en: 'Sri Guru Granth Sahib Ji • Raag Prabhati Bhagat Kabir Ji (Ang 1349)'
    },
    themes: ['compassion-service', 'yoga-realization'],
    keywords: ['नूर', 'एक', 'सब', 'मानव', 'जाति', 'समभाव', 'समान', 'एकता', 'कुदरत', 'light', 'equal', 'one'],
    verse: {
      hi: 'अवलि अलह नूरु उपाइआ, कुदरति के सभ बंदे।\nएक नूर ते सभु जगु उपजिआ, कउन भले को मंदे॥',
      pb: 'ਅਵਲਿ ਅਲਹ ਨੂਰੁ ਉਪਾਇਆ ਕੁਦਰਤਿ ਕੇ ਸਭ ਬੰਦੇ।\nਏਕ ਨੂਰ ਤੇ ਸਭੁ ਜਗੁ ਉਪਜਿਆ ਕਉਨ ਭਲੇ ਕੋ ਮੰਦੇ॥',
      en: 'First, the Supreme Creator manifested the Divine Light; all beings are expressions of that One Creation.\nFrom that single Light the entire universe sprang forth—who then is superior, and who inferior?'
    },
    bhavarth: {
      hi: 'समस्त प्राणी एक ही परमात्मा के दिव्य प्रकाश से उत्पन्न हुए हैं; अतः जाति, पंथ या ऊँच-नीच का भेद त्यागकर सभी के प्रति समभाव और करुणा रखना ही सत्य धर्म है।',
      pb: 'ਸਾਰੇ ਜੀਵ ਇੱਕੋ ਪਰਮਾਤਮਾ ਦੇ ਦੈਵੀ ਪ੍ਰਕਾਸ਼ ਤੋਂ ਪੈਦਾ ਹੋਏ ਹਨ; ਇਸ ਲਈ ਜਾਤ-ਪਾਤ ਜਾਂ ਉੱਚ-ਨੀਚ ਦਾ ਭੇਦ ਛੱਡ ਕੇ ਸਭ ਪ੍ਰਤੀ ਸਮਭਾਵ ਰੱਖਣਾ ਹੀ ਸੱਚਾ ਧਰਮ ਹੈ।',
      en: 'All creatures emerge from one primordial Light; dissolving pride of rank or division into equal respect is living Truth.'
    },
    themeEssence: {
      hi: 'समस्त सृष्टि में एक ही परमात्म-ज्योति के दर्शन और समभाव',
      pb: 'ਸਾਰੀ ਸ੍ਰਿਸ਼ਟੀ ਵਿੱਚ ਇੱਕੋ ਪ੍ਰਭੂ-ਜੋਤ ਦੇ ਦਰਸ਼ਨ ਅਤੇ ਸਮਭਾਵ',
      en: 'recognizing one Divine Light in all beings with universal equality'
    }
  },
  {
    id: 'sggs-daya-1377',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • सलोक भगत कबीर जी (अंग १३७७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੩੭੭)',
      en: 'Sri Guru Granth Sahib Ji • Salok Bhagat Kabir Ji (Ang 1377)'
    },
    themes: ['compassion-service', 'naam'],
    keywords: ['सेवा', 'दान', 'परोपकार', 'दीन', 'गरीब', 'भलाई', 'परमारथ', 'service', 'giving', 'welfare'],
    verse: {
      hi: 'कबीर संत न छाडै संतई, जउ कोटिक मिलहि असंत।\nमलिआगरु भुयंगम बेढिओ, त सीतलता न तजंत॥',
      pb: 'ਕਬੀਰ ਸੰਤੁ ਨ ਛਾਡੈ ਸੰਤਈ ਜਉ ਕੋਟਿਕ ਮਿਲਹਿ ਅਸੰਤ।\nਮਲਿਆਗਰੁ ਭੁਯੰਗਮ ਬੇਢਿਓ ਤ ਸੀਤਲਤਾ ਨ ਤਜੰਤ॥',
      en: 'Kabir, a true saint never forsakes saintly compassion even if surrounded by countless hostile souls;\nJust as sandalwood wrapped by venomous serpents never gives up its cooling balm.'
    },
    bhavarth: {
      hi: 'चाहे संसार में कितना भी विरोध या कठोर व्यवहार मिले, साधक को अपनी करुणा, शीतलता और परोपकार का स्वभाव कभी नहीं त्यागना चाहिए।',
      pb: 'ਭਾਵੇਂ ਸੰਸਾਰ ਵਿੱਚ ਕਿੰਨਾ ਵੀ ਵਿਰੋਧ ਕਿਉਂ ਨਾ ਮਿਲੇ, ਸਾਧਕ ਨੂੰ ਆਪਣੀ ਦਇਆ, ਸੀਤਲਤਾ ਅਤੇ ਪਰਉਪਕਾਰ ਦਾ ਸੁਭਾਅ ਕਦੇ ਨਹੀਂ ਛੱਡਣਾ ਚਾਹੀਦਾ।',
      en: 'Even amid opposition, a seeker remains steadfast in kindness and cooling compassion, never returning bitterness for bitterness.'
    },
    themeEssence: {
      hi: 'प्रतिकूल परिस्थिति में भी शीतलता, परोपकार और करुणा बनाए रखने',
      pb: 'ਔਖੇ ਹਾਲਾਤਾਂ ਵਿੱਚ ਵੀ ਸੀਤਲਤਾ, ਪਰਉਪਕਾਰ ਅਤੇ ਦਇਆ ਬਣਾਈ ਰੱਖਣ',
      en: 'preserving steady compassion and altruism under all circumstances'
    }
  },

  // --- 11. YOGA, SURAT-SHABAD, ANHAD NAAD & REALIZATION ---
  {
    id: 'sggs-yoga-1123',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • राग भैरउ भगत कबीर जी (अंग ११२३)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਰਾਗ ਭੈਰਉ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੧੧੨੩)',
      en: 'Sri Guru Granth Sahib Ji • Raag Bhairao Bhagat Kabir Ji (Ang 1123)'
    },
    themes: ['yoga-realization', 'naam'],
    keywords: ['कस्तूरी', 'मृग', 'हिरन', 'घट', 'भीतर', 'सुरति', 'शबद', 'अनहद', 'समाधि', 'आत्मा', 'deer', 'musk', 'within'],
    verse: {
      hi: 'कसतूरी कुंडलि बसै, मृग ढूँढै बन माहि।\nऐसे घटि घटि रामु है, दुनिया देखै नाहि॥',
      pb: 'ਕਸਤੂਰੀ ਕੁੰਡਲਿ ਬਸੈ ਮ੍ਰਿਗ ਢੂੰਢੈ ਬਨ ਮਾਹਿ।\nਐਸੇ ਘਟਿ ਘਟਿ ਰਾਮੁ ਹੈ ਦੁਨੀਆ ਦੇਖੈ ਨਾਹਿ॥',
      en: 'Just as fragrant musk rests within the deer’s own navel while it wanders the forest searching outside;\nSo does the Beloved Creator dwell within every heart, unseen by those looking outwardly.'
    },
    bhavarth: {
      hi: 'जिस प्रकार कस्तूरी अपनी ही नाभि में होते हुए भी मृग उसे जंगल में बाहर खोजता है, उसी प्रकार परम सत्य प्रत्येक जीव के घट के भीतर विराजमान है; केवल अंतर्मुखी दृष्टि से ही उसका अनुभव होता है।',
      pb: 'ਜਿਵੇਂ ਕਸਤੂਰੀ ਆਪਣੀ ਹੀ ਨਾਭੀ ਵਿੱਚ ਹੁੰਦਿਆਂ ਵੀ ਹਿਰਨ ਉਸ ਨੂੰ ਜੰਗਲ ਵਿੱਚ ਲੱਭਦਾ ਫਿਰਦਾ ਹੈ, ਤਿਵੇਂ ਪਰਮਾਤਮਾ ਆਪਣੇ ਹੀ ਅੰਦਰ ਵਸਦਾ ਹੈ; ਕੇਵਲ ਅੰਤਰਮੁਖੀ ਸੁਰਤ ਨਾਲ ਹੀ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।',
      en: 'The Creator resides within one’s own heart like hidden musk; turning attention inward through Surat-Shabad Yoga reveals the treasure within.'
    },
    themeEssence: {
      hi: 'बहिर्मुखी खोज त्यागकर घट के भीतर आत्म-साक्षात्कार करने',
      pb: 'ਬਾਹਰਲੀ ਭਟਕਣਾ ਛੱਡ ਕੇ ਘਟ ਦੇ ਅੰਦਰ ਆਤਮ-ਦਰਸ਼ਨ ਕਰਨ',
      en: 'turning from outward searching to direct inner awakening'
    }
  },
  {
    id: 'sggs-yoga-327',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • राग गउड़ी भगत कबीर जी (अंग ३२७)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਰਾਗ ਗਉੜੀ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੩੨੭)',
      en: 'Sri Guru Granth Sahib Ji • Raag Gauri Bhagat Kabir Ji (Ang 327)'
    },
    themes: ['yoga-realization', 'chetavani'],
    keywords: ['मरण', 'मरना', 'अमर', 'अमरलोक', 'आत्मा', 'जीव', 'मुक्ति', 'मोक्ष', 'अमृत', 'immortal', 'death', 'liberation'],
    verse: {
      hi: 'हम न मरहि मरिहै संसारु।\nहम कउ मिलिआ जीआवनहारु॥',
      pb: 'ਹਮ ਨ ਮਰਹਿ ਮਰਿਹੈ ਸੰਸਾਰੁ।\nਹਮ ਕਉ ਮਿਲਿਆ ਜੀਆਵਨਹਾਰੁ॥',
      en: 'I shall never truly die though this mortal world passes away;\nFor I have united with the Life-Giver of eternity within.'
    },
    bhavarth: {
      hi: 'सूरत-शब्द साधना द्वारा जो साधक अपने अविनाशी आत्म-स्वरूप और जीवनदाता सत्यनाम से जुड़ जाता है, वह जन्म-मरण के भय से मुक्त होकर अमर पद प्राप्त कर लेता है।',
      pb: 'ਸੁਰਤ-ਸ਼ਬਦ ਸਾਧਨਾ ਰਾਹੀਂ ਜੋ ਸਾਧਕ ਆਪਣੇ ਅਵਿਨਾਸ਼ੀ ਆਤਮ-ਸਰੂਪ ਅਤੇ ਸਤਯਨਾਮ ਨਾਲ ਜੁੜ ਜਾਂਦਾ ਹੈ, ਉਹ ਜਨਮ-ਮਰਨ ਦੇ ਭੈਅ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਅਮਰ ਪਦ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।',
      en: 'One anchored in the Immortal Word transcends fear of bodily death and awakens to imperishable spiritual life.'
    },
    themeEssence: {
      hi: 'जन्म-मरण से पार अविनाशी अमरलोक और आत्म-अमरता के बोध',
      pb: 'ਜਨਮ-ਮਰਨ ਤੋਂ ਪਾਰ ਅਵਿਨਾਸ਼ੀ ਅਮਰ ਪਦ ਅਤੇ ਆਤਮ-ਅਮਰਤਾ ਦੇ ਬੋਧ',
      en: 'transcending mortal fear through union with the Imperishable'
    }
  },
  {
    id: 'sggs-yoga-969',
    tradition: 'sggs',
    angOrSection: {
      hi: 'श्री गुरु ग्रंथ साहिब जी • राग रामकली भगत कबीर जी (अंग ९६९)',
      pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • ਰਾਗ ਰਾਮਕਲੀ ਭਗਤ ਕਬੀਰ ਜੀ (ਅੰਗ ੯੬੯)',
      en: 'Sri Guru Granth Sahib Ji • Raag Ramkali Bhagat Kabir Ji (Ang 969)'
    },
    themes: ['yoga-realization', 'naam'],
    keywords: ['अनहद', 'सुरति', 'निरति', 'गगन', 'सहज', 'समाधि', 'धुन', 'हंस', 'शून्य', 'unstruck', 'sahaj', 'stillness'],
    verse: {
      hi: 'सुंन मंडल महि घटु बसा, अनहद बाजै तूर।\nसंत अनहदि राते सदा, पाइआ निरंजनु पूरु॥',
      pb: 'ਸੁੰਨ ਮੰਡਲ ਮਹਿ ਘਟੁ ਬਸਾ ਅਨਹਦ ਬਾਜੈ ਤੂਰ।\nਸੰਤ ਅਨਹਦਿ ਰਾਤੇ ਸਦਾ ਪਾਇਆ ਨਿਰੰਜਨੁ ਪੂਰੁ॥',
      en: 'Deep within the silent inner realm resounds the unstruck divine melody;\nAbsorbed continually in that Anhad resonance, the awakened soul attains the Pure Infinite One.'
    },
    bhavarth: {
      hi: 'जब साधक बाह्य कोलाहल को शांत कर शून्य समाधि में सूरत को टिकाता है, तब भीतर अनहद नाद की दिव्य गूँज सुनाई देती है और निर्मल परमात्म-तत्त्व का साक्षात्कार होता है।',
      pb: 'ਜਦੋਂ ਸਾਧਕ ਬਾਹਰੀ ਸ਼ੋਰ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਸੁੰਨ ਸਮਾਧੀ ਵਿੱਚ ਸੁਰਤ ਟਿਕਾਉਂਦਾ ਹੈ, ਤਾਂ ਅੰਦਰ ਅਨਹਦ ਨਾਦ ਦੀ ਦੈਵੀ ਧੁਨ ਸੁਣਾਈ ਦਿੰਦੀ ਹੈ।',
      en: 'When outward distractions subside into Sahaj stillness, the unstruck inner resonance awakens direct experience of the Formless Truth.'
    },
    themeEssence: {
      hi: 'अनहद नाद, सूरत-योग और सहज समाधि के अंतर्नाद',
      pb: 'ਅਨਹਦ ਨਾਦ, ਸੁਰਤ-ਯੋਗ ਅਤੇ ਸਹਿਜ ਸਮਾਧੀ ਦੇ ਅੰਤਰ-ਨਾਦ',
      en: 'Surat-Shabad alignment and listening to the unstruck inner melody'
    }
  }
];

/**
 * Authentic Kabir Bijak (साखी, रमैनी व शब्द अंग) parallel catalog
 */
export const BIJAK_CROSS_REF_VAULT: CuratedCrossRefEntry[] = [
  // --- 1. GURU MAHIMA ---
  {
    id: 'bijak-guru-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • गुरुदेव को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Gurudev Ko Ang (Glory of Satguru)'
    },
    themes: ['guru'],
    keywords: ['गुरु', 'गोविंद', 'सतगुरु', 'पाँव', 'बलिहारी', 'परख', 'guru', 'govind', 'grace'],
    verse: {
      hi: 'गुरु गोविंद दोऊ खड़े, काके लागूँ पाय।\nबलिहारी गुरु आपने, गोविंद दियो बताय॥',
      pb: 'ਗੁਰੂ ਗੋਬਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਇ।\nਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਣੇ, ਗੋਬਿੰਦ ਦਿਓ ਬਤਾਇ॥',
      en: 'Both Guru and Govind stand before me; at whose feet should I bow first?\nI offer myself completely to my Satguru, who revealed the path to Govind Himself.'
    },
    bhavarth: {
      hi: 'परमात्मा तक पहुँचने की युक्ति और दृष्टि प्रदान करने वाले पूर्ण सतगुरु की महिमा सर्वोपरि है; बिना सच्चे गुरु के प्रभु-पहचान संभव नहीं।',
      pb: 'ਪਰਮਾਤਮਾ ਤੱਕ ਪਹੁੰਚਣ ਦੀ ਜੁਗਤ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀ ਬਖਸ਼ਣ ਵਾਲੇ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ ਸਭ ਤੋਂ ਉੱਚੀ ਹੈ; ਸੱਚੇ ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਪ੍ਰਭੂ ਦੀ ਪਛਾਣ ਅਸੰਭਵ ਹੈ।',
      en: 'The Satguru’s grace holds supreme honor because it is the living Guru who opens spiritual vision toward the Infinite.'
    },
    themeEssence: {
      hi: 'सतगुरु की सर्वोपरि महिमा और मोक्ष-पथ के प्रदाता रूप',
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਸਭ ਤੋਂ ਉੱਤਮ ਮਹਿਮਾ ਅਤੇ ਮੁਕਤੀ-ਮਾਰਗ ਦੇ ਦਾਤੇ ਰੂਪ',
      en: 'the supreme gratitude owed to the Satguru who reveals Truth'
    }
  },
  {
    id: 'bijak-guru-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • गुरु परख को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਗੁਰੂ ਪਰਖ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Guru Parakh Ko Ang'
    },
    themes: ['guru', 'satya-hypocrisy'],
    keywords: ['गुरु', 'अंधा', 'शिष्य', 'कूप', 'अंध', 'धोखा', 'लोभी', 'निगुरा', 'blind', 'well', 'false'],
    verse: {
      hi: 'जाका गुरु भी अंधला, चेला खरा निरंध।\nअंधै अंधा ठेलिया, दून्यूं कूप पड़ंत॥',
      pb: 'ਜਾਕਾ ਗੁਰੂ ਭੀ ਅੰਧਲਾ, ਚੇਲਾ ਖਰਾ ਨਿਰੰਧ।\nਅੰਧੈ ਅੰਧਾ ਠੇਲਿਆ, ਦੂਨਿਊਂ ਕੂਪ ਪੜੰਤ॥',
      en: 'When the teacher himself is spiritually blind and the disciple lacks discernment,\nOne blind soul pushes the other, and both tumble together into the pit of delusion.'
    },
    bhavarth: {
      hi: 'गुरु धारण करने से पूर्व आध्यात्मिक विवेक से परख अत्यंत आवश्यक है; यदि पथप्रदर्शक स्वयं माया व अहंकार के अंधकार में है, तो शिष्य का कल्याण नहीं हो सकता।',
      pb: 'ਗੁਰੂ ਧਾਰਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵਿਵੇਕ ਨਾਲ ਪਰਖ ਕਰਨੀ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ; ਜੇਕਰ ਮਾਰਗਦਰਸ਼ਕ ਆਪ ਅਗਿਆਨ ਵਿੱਚ ਹੈ ਤਾਂ ਸਿੱਖ ਦਾ ਕਲਿਆਣ ਨਹੀਂ ਹੋ ਸਕਦਾ।',
      en: 'Discernment before following any teacher is vital; a guide trapped in ego cannot lead another out of illusion.'
    },
    themeEssence: {
      hi: 'सच्चे और झूठे गुरु की विवेकपूर्ण परख',
      pb: 'ਸੱਚੇ ਅਤੇ ਝੂਠੇ ਗੁਰੂ ਦੀ ਵਿਵੇਕਪੂਰਨ ਪਰਖ',
      en: 'discerning genuine spiritual guidance from blind pretension'
    }
  },
  {
    id: 'bijak-guru-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • रमैनी प्रकरण',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਰਮੈਨੀ ਪ੍ਰਕਰਣ',
      en: 'Kabir Bijak • Ramaini Selection'
    },
    themes: ['guru', 'ego-humility'],
    keywords: ['सतगुरु', 'कुम्हार', 'शिष्य', 'घड़ा', 'चोट', 'गढ़ना', 'सुधार', 'potter', 'vessel', 'refinement'],
    verse: {
      hi: 'गुरु कुम्हार सिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट।\nअंतर हाथ सहार दै, बाहर बाहै चोट॥',
      pb: 'ਗੁਰੂ ਕੁਮ੍ਹਾਰ ਸਿਖ ਕੁੰਭ ਹੈ, ਗੜ੍ਹਿ ਗੜ੍ਹਿ ਕਾਢੈ ਖੋਟ।\nਅੰਤਰ ਹਾਥ ਸਹਾਰ ਦੈ, ਬਾਹਰ ਬਾਹੈ ਚੋਟ॥',
      en: 'The Guru is the master potter and the disciple is the raw earthen vessel being shaped carefully;\nSupporting gently from within with one hand while tapping away flaws from the outside.'
    },
    bhavarth: {
      hi: 'सतगुरु शिष्य के मन की खोट निकालने के लिए अनुशासन की चोट तो लगाते हैं, किंतु भीतर से अपनी करुणा का हाथ भी सदा संभाले रखते हैं ताकि साधक टूटने की बजाय निखर उठे।',
      pb: 'ਸਤਿਗੁਰੂ ਸਿੱਖ ਦੇ ਮਨ ਦੇ ਔਗੁਣ ਕੱਢਣ ਲਈ ਅਨੁਸ਼ਾਸਨ ਦੀ ਚੋਟ ਤਾਂ ਲਾਉਂਦੇ ਹਨ, ਪਰ ਅੰਦਰੋਂ ਆਪਣੀ ਕਿਰਪਾ ਦਾ ਹੱਥ ਸਦਾ ਸੰਭਾਲੀ ਰੱਖਦੇ ਹਨ।',
      en: 'Like a wise potter, the Satguru corrects outward flaws firmly while supporting the seeker’s spirit tenderly from within.'
    },
    themeEssence: {
      hi: 'सतगुरु की करुणामयी अनुशासन-लीला और शिष्य के निर्माण',
      pb: 'ਸਤਿਗੁਰੂ ਦੀ ਦਇਆਲੂ ਅਨੁਸ਼ਾਸਨ-ਲੀਲਾ ਅਤੇ ਸਿੱਖ ਦੇ ਨਿਰਮਾਣ',
      en: 'the Satguru’s tender inner support alongside firm character refinement'
    }
  },

  // --- 2. NAAM SUMIRAN ---
  {
    id: 'bijak-naam-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • सुमिरन को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਿਮਰਨ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Sumiran Ko Ang (Sacred Remembrance)'
    },
    themes: ['naam', 'yoga-realization'],
    themeTags: ['satya-khoj', 'saar-shabd', 'shabd-sadhan'],
    keywords: ['सुमिरन', 'सिमरन', 'सार', 'शब्द', 'खोजी', 'जंजाल', 'काल', 'नाम', 'सत्यनाम', 'remembrance', 'snare', 'essence'],
    verse: {
      hi: 'कबीर सुमिरन सार है, और सकल जंजाल।\nआदि अंत सब सोधिया, दूजा देख्या काल॥',
      pb: 'ਕਬੀਰ ਸਿਮਰਨ ਸਾਰ ਹੈ, ਔਰ ਸਕਲ ਜੰਜਾਲ।\nਆਦਿ ਅੰਤ ਸਭ ਸੋਧਿਆ, ਦੂਜਾ ਦੇਖਿਆ ਕਾਲ॥',
      en: 'Satguru Kabir Saheb proclaims: Remembrance of the True Name is the sole essence; all else is transient entanglement.\nSearching from beginning to end, everything apart from Naam belongs to passing time.'
    },
    bhavarth: {
      hi: 'समस्त ग्रंथों और जीवन अनुभवों का निचोड़ यही है कि एकमात्र सत्यनाम का सुमिरन ही सार है; शेष संसारिक प्रपंच समय के अधीन नष्ट हो जाने वाले जंजाल हैं।',
      pb: 'ਸਾਰੇ ਗ੍ਰੰਥਾਂ ਅਤੇ ਅਨੁਭਵ ਦਾ ਨਿਚੋੜ ਇਹੀ ਹੈ ਕਿ ਕੇਵਲ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਹੀ ਸਾਰ ਹੈ; ਬਾਕੀ ਸਭ ਦੁਨਿਆਵੀ ਭਟਕਣਾ ਸਮੇਂ ਦਾ ਜੰਜਾਲ ਹੈ।',
      en: 'Across all contemplation, Satyanaam remembrance stands as the eternal core; everything else dissolves into passing illusion.'
    },
    themeEssence: {
      hi: 'सकल जंजालों से ऊपर सत्यनाम सुमिरन के एकमात्र सार',
      pb: 'ਸਾਰੇ ਜੰਜਾਲਾਂ ਤੋਂ ਉੱਪਰ ਸਤਯਨਾਮ ਸਿਮਰਨ ਦੇ ਇੱਕੋ-ਇੱਕ ਸਾਰ',
      en: 'Naam Sumiran as the sole enduring essence amid transient worldly concerns'
    }
  },
  {
    id: 'bijak-naam-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • सुमिरन को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਿਮਰਨ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Sumiran Ko Ang'
    },
    themes: ['naam', 'satya-hypocrisy'],
    keywords: ['माला', 'मनका', 'फेरत', 'हाथ', 'कर', 'जीभ', 'मन', 'दस', 'दिशि', 'beads', 'rosary', 'distracted'],
    verse: {
      hi: 'माला फेरत जुग भया, फिरा न मन का फेर।\nकर का मनका डारि दे, मन का मनका फेर॥',
      pb: 'ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਇਆ, ਫਿਰਾ ਨ ਮਨ ਕਾ ਫੇਰ।\nਕਰ ਕਾ ਮਨਕਾ ਡਾਰਿ ਦੇ, ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ॥',
      en: 'Ages have passed turning wooden prayer beads, yet the restless turning of the mind never changed;\nSet aside the outer beads in your hand and turn the bead of your own inner mind.'
    },
    bhavarth: {
      hi: 'हाथ में माला गिनने से भक्ति नहीं होती यदि मन विषय-वासनाओं में भटकता रहे; वास्तविक सुमिरन मन की वृत्तियों को अंतर्मुखी कर सत्यनाम में एकाग्र करना है।',
      pb: 'ਹੱਥ ਵਿੱਚ ਮਾਲਾ ਗਿਣਨ ਨਾਲ ਭਗਤੀ ਨਹੀਂ ਹੁੰਦੀ ਜੇ ਮਨ ਬਾਹਰ ਭਟਕਦਾ ਰਹੇ; ਅਸਲੀ ਸਿਮਰਨ ਮਨ ਦੀਆਂ ਬਿਰਤੀਆਂ ਨੂੰ ਅੰਦਰ ਟਿਕਾਉਣਾ ਹੈ।',
      en: 'Counting physical beads accomplishes little while the mind wanders outwardly; genuine prayer redirects the heart inward.'
    },
    themeEssence: {
      hi: 'यांत्रिक दिखावे से हटकर आंतरिक मनः-सुमिरन की ओर मुड़ने',
      pb: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਤੋਂ ਹਟ ਕੇ ਅੰਦਰੂਨੀ ਮਨ-ਸਿਮਰਨ ਵੱਲ ਮੁੜਨ',
      en: 'turning from mechanical counting to authentic mental focus'
    }
  },
  {
    id: 'bijak-naam-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • शब्द प्रकरण',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸ਼ਬਦ ਪ੍ਰਕਰਣ',
      en: 'Kabir Bijak • Shabad Section'
    },
    themes: ['naam', 'yoga-realization'],
    keywords: ['श्वास', 'स्वांस', 'अजपा', 'बिना', 'रतन', 'मोल', 'सूना', 'सुमिरन', 'breath', 'priceless'],
    verse: {
      hi: 'कहै कबीर ते बड़भागी, स्वांस न खाली जाय।\nसत्यनाम घट में बसै, अमर लोक को पाय॥',
      pb: 'ਕਹੈ ਕਬੀਰ ਤੇ ਬਡਭਾਗੀ, ਸੁਆਸ ਨ ਖਾਲੀ ਜਾਇ।\nਸਤਯਨਾਮ ਘਟ ਮਹਿ ਬਸੈ, ਅਮਰ ਲੋਕ ਕਉ ਪਾਇ॥',
      en: 'Satguru Kabir Saheb affirms: blessed are those who never let a single breath slip away empty;\nAnchoring Satyanaam inside the heart carries the soul to the Immortal Abode.'
    },
    bhavarth: {
      hi: 'मनुष्य जीवन की प्रत्येक श्वास अमूल्य है; जो साधक सजग रहकर किसी भी श्वास को व्यर्थ न गँवाते हुए सत्यनाम का सिमरन करता है, वही अमर पद का अधिकारी होता है।',
      pb: 'ਮਨੁੱਖਾ ਜੀਵਨ ਦਾ ਹਰ ਸੁਆਸ ਅਮੋਲਕ ਹੈ; ਜੋ ਸਾਧਕ ਸੁਚੇਤ ਰਹਿ ਕੇ ਸੁਆਸ-ਸੁਆਸ ਸਤਯਨਾਮ ਸਿਮਰਦਾ ਹੈ, ਉਹੀ ਅਮਰ ਪਦ ਦਾ ਅਧਿਕਾਰੀ ਹੁੰਦਾ ਹੈ।',
      en: 'Every human breath is precious beyond measure; threading Satyanaam upon each breath elevates the soul toward immortality.'
    },
    themeEssence: {
      hi: 'श्वास-श्वास के अमूल्य सदुपयोग और अजपा स्मरण',
      pb: 'ਸੁਆਸ-ਸੁਆਸ ਦੀ ਅਮੋਲਕ ਕਦਰ ਅਤੇ ਅਜਪਾ ਸਿਮਰਨ',
      en: 'never wasting a breath without mindful remembrance of Satyanaam'
    }
  },

  // --- 3. CHETAVANI, KAAL & MORTALITY ---
  {
    id: 'bijak-chetavani-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • चेतावनी को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Chetavana Ko Ang (Spiritual Awakening)'
    },
    themes: ['chetavani'],
    keywords: ['रैन', 'रात', 'सोय', 'नींद', 'जाग', 'हीरा', 'कौड़ी', 'जन्म', 'sleep', 'wasted', 'diamond'],
    verse: {
      hi: 'रैन गँवाई सोय के, दिवस गँवाया खाय।\nहीरा जनम अमोल था, कौड़ी बदले जाय॥',
      pb: 'ਰੈਨ ਗੰਵਾਈ ਸੋਇ ਕੈ, ਦਿਵਸ ਗੰਵਾਇਆ ਖਾਇ।\nਹੀਰਾ ਜਨਮ ਅਮੋਲ ਥਾ, ਕਉਡੀ ਬਦਲੇ ਜਾਇ॥',
      en: 'You squandered the nights in heedless sleep and wasted the days merely eating and chasing pleasures;\nThis priceless diamond of human birth is slipping away for a worthless penny.'
    },
    bhavarth: {
      hi: 'मनुष्य जन्म कोहीरे के समान अमूल्य रत्न है; यदि जीवन का सारा समय केवल सोने, खाने और संसारी विषय-भोगों में ही बीत गया, तो यह अनमोल अवसर कौड़ी के मोल व्यर्थ चला जाएगा।',
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਹੀਰੇ ਵਰਗਾ ਅਮੋਲਕ ਰਤਨ ਹੈ; ਜੇ ਸਾਰਾ ਸਮਾਂ ਕੇਵਲ ਖਾਣ-ਪੀਣ ਅਤੇ ਸੌਣ ਵਿੱਚ ਹੀ ਬੀਤ ਗਿਆ ਤਾਂ ਇਹ ਅਨਮੋਲ ਮੌਕਾ ਕੌਡੀਆਂ ਦੇ ਭਾਅ ਵਿਅਰਥ ਜਾਵੇਗਾ।',
      en: 'Human birth is a rare diamond; spending all days and nights in mindless routine trades away liberation for trivial distractions.'
    },
    themeEssence: {
      hi: 'दुर्लभ हीरे जैसे मनुष्य जन्म को व्यर्थ न गँवाने की चेतावनी',
      pb: 'ਦੁਰਲੱਭ ਹੀਰੇ ਵਰਗੇ ਮਨੁੱਖਾ ਜਨਮ ਨੂੰ ਵਿਅਰਥ ਨਾ ਗੁਆਉਣ ਦੀ ਚੇਤਾਵਨੀ',
      en: 'awakening to the diamond-like value of human birth before it passes'
    }
  },
  {
    id: 'bijak-chetavani-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • काया चेतावनी अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਕਾਇਆ ਚੇਤਾਵਨੀ ਅੰਗ',
      en: 'Kabir Bijak • Kaya Chetavana Ang'
    },
    themes: ['chetavani', 'maya'],
    keywords: ['पानी', 'बुदबुदा', 'तारा', 'प्रभात', 'क्षणिक', 'अस्थायी', 'काया', 'मानुष', 'bubble', 'water', 'transient'],
    verse: {
      hi: 'पानी केरा बुदबुदा, अस मानुस की जात।\nदेखत ही छुप जायगा, ज्यों तारा परभात॥',
      pb: 'ਪਾਨੀ ਕੇਰਾ ਬੁਦਬੁਦਾ, ਅਸ ਮਾਨੁਸ ਕੀ ਜਾਤ।\nਦੇਖਤ ਹੀ ਛੁਪ ਜਾਇਗਾ, ਜਿਉਂ ਤਾਰਾ ਪਰਭਾਤ॥',
      en: 'Like a fragile bubble resting upon flowing water is the span of mortal life;\nIt vanishes in a moment before your very eyes, like a fading star at dawn.'
    },
    bhavarth: {
      hi: 'जल के बुलबुले और भोर के तारे के समान यह मानव जीवन क्षणभंगुर है; इसलिए कल पर टालने की बजाय आज ही सत्य, करुणा और नाम-सुमिरन आरंभ कर देना चाहिए।',
      pb: 'ਪਾਣੀ ਦੇ ਬੁਲਬੁਲੇ ਅਤੇ ਸਵੇਰ ਦੇ ਤਾਰੇ ਵਾਂਗ ਇਹ ਮਨੁੱਖੀ ਜੀਵਨ ਛਿਣ-ਭੰਗਰ ਹੈ; ਇਸ ਲਈ ਕੱਲ੍ਹ ਉੱਤੇ ਛੱਡਣ ਦੀ ਥਾਂ ਅੱਜ ਹੀ ਸੱਚ ਤੇ ਸਿਮਰਨ ਅਪਣਾਉਣਾ ਚਾਹੀਦਾ ਹੈ।',
      en: 'Mortal life vanishes as swiftly as a water bubble or morning star; hence sincerity and spiritual practice cannot wait for tomorrow.'
    },
    themeEssence: {
      hi: 'बुलबुले समान क्षणभंगुर जीवन में आलस्य त्यागने की प्रेरणा',
      pb: 'ਬੁਲਬੁਲੇ ਵਾਂਗ ਛਿਣ-ਭੰਗਰ ਜੀਵਨ ਵਿੱਚ ਆਲਸ ਤਿਆਗਣ ਦੀ ਪ੍ਰੇਰਣਾ',
      en: 'urgency of spiritual awakening given life’s bubble-like brevity'
    }
  },
  {
    id: 'bijak-chetavani-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • काल चेतावनी अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਕਾਲ ਚੇਤਾਵਨੀ ਅੰਗ',
      en: 'Kabir Bijak • Kaal Chetavana Ang'
    },
    themes: ['chetavani', 'ego-humility'],
    keywords: ['काल', 'आज', 'काल्ह', 'अब', 'तुरंत', 'अंतिम', 'मृत्यु', 'भूल', 'time', 'tomorrow', 'now'],
    verse: {
      hi: 'काल करै सो आज कर, आज करै सो अब।\nपल में परलय होयगी, बहुरि करैगो कब॥',
      pb: 'ਕਾਲ ਕਰੈ ਸੋ ਆਜ ਕਰ, ਆਜ ਕਰੈ ਸੋ ਅਬ।\nਪਲ ਮਹਿ ਪਰਲੈ ਹੋਇਗੀ, ਬਹੁਰਿ ਕਰੈਗੋ ਕਬ॥',
      en: 'What you plan to do tomorrow, accomplish today; what you intend today, do right now;\nIn a single instant life’s whole curtain may fall—when will you ever fulfill it then?'
    },
    bhavarth: {
      hi: 'शुभ कर्म, सेवा और सत्यनाम सिमरन को कभी भविष्य पर नहीं टालना चाहिए; जीवन का कोई भरोसा नहीं, अतः वर्तमान क्षण में ही जाग्रत हो जाना बुद्धिमानी है।',
      pb: 'ਸ਼ੁਭ ਕਰਮ, ਸੇਵਾ ਅਤੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਨੂੰ ਕਦੇ ਕੱਲ੍ਹ ਉੱਤੇ ਨਹੀਂ ਟਾਲਣਾ ਚਾਹੀਦਾ; ਜੀਵਨ ਦਾ ਕੋਈ ਭਰੋਸਾ ਨਹੀਂ, ਇਸ ਲਈ ਹੁਣੇ ਜਾਗਣਾ ਹੀ ਸਿਆਣਪ ਹੈ।',
      en: 'Good deeds, service, and devotion must never be postponed; awakening in the immediate present defeats procrastination.'
    },
    themeEssence: {
      hi: 'शुभ साधना को टालमटोल छोड़कर इसी क्षण आरंभ करने',
      pb: 'ਸ਼ੁਭ ਸਾਧਨਾ ਨੂੰ ਟਾਲਣ ਦੀ ਥਾਂ ਇਸੇ ਪਲ ਸ਼ੁਰੂ ਕਰਨ',
      en: 'acting immediately in truth without postponing till tomorrow'
    }
  },

  // --- 4. MAYA, TRISHNA & INDULGENCE ---
  {
    id: 'bijak-maya-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • माया को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਮਾਇਆ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Maya Ko Ang'
    },
    themes: ['maya'],
    keywords: ['भगती', 'कामिया', 'इन्द्री', 'स्वाद', 'हीरा', 'बादी', 'माया', 'वासना', 'भोग', 'sensory', 'lust', 'waste'],
    verse: {
      hi: 'भगती बिगाड़ी कामिया, इन्द्री करे सवादी।\nहीरा खोया हाथ थई, जनम गवाया बादी॥',
      pb: 'ਭਗਤੀ ਬਿਗਾੜੀ ਕਾਮੀਆ, ਇੰਦ੍ਰੀ ਕਰੇ ਸਵਾਦੀ।\nਹੀਰਾ ਖੋਇਆ ਹਾਥ ਤੇ, ਜਨਮ ਗਵਾਇਆ ਬਾਦੀ॥',
      en: 'Sensual cravings and unchecked indulgence ruined true devotion;\nThe precious jewel slipped right out of hand, wasting the entire human birth in futility.'
    },
    bhavarth: {
      hi: 'इंद्रियों के क्षणिक स्वाद और वासनाओं में फंसकर साधक अपनी भक्ति का अनमोल हीरा खो देता है; संयम और विवेक द्वारा ही माया के इस आकर्षण पर विजय प्राप्त होती है।',
      pb: 'ਇੰਦਰੀਆਂ ਦੇ ਪਲ-ਭਰ ਦੇ ਸਵਾਦ ਵਿੱਚ ਫੱਸ ਕੇ ਸਾਧਕ ਆਪਣੀ ਭਗਤੀ ਦਾ ਅਮੋਲਕ ਹੀਰਾ ਗੁਆ ਬੈਠਦਾ ਹੈ; ਸੰਜਮ ਅਤੇ ਵਿਵੇਕ ਨਾਲ ਹੀ ਮਾਇਆ ਉੱਤੇ ਜਿੱਤ ਮਿਲਦੀ ਹੈ।',
      en: 'Indulgence in fleeting sensory pleasures erodes spiritual strength; self-mastery protects the precious jewel of devotion.'
    },
    themeEssence: {
      hi: 'इंद्रिय-संयम बनाए रखने और विषय-भोग से भक्ति की रक्षा करने',
      pb: 'ਇੰਦਰੀ-ਸੰਜਮ ਰੱਖਣ ਅਤੇ ਵਿਸ਼ੇ-ਭੋਗਾਂ ਤੋਂ ਭਗਤੀ ਦੀ ਰੱਖਿਆ ਕਰਨ',
      en: 'guarding devotion through sensory restraint against fleeting indulgences'
    }
  },
  {
    id: 'bijak-maya-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • माया व तृष्णा अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਮਾਇਆ ਤੇ ਤ੍ਰਿਸ਼ਨਾ ਅੰਗ',
      en: 'Kabir Bijak • Maya & Trishna Ang'
    },
    themes: ['maya', 'satya-hypocrisy'],
    keywords: ['माया', 'ठगिनी', 'त्रिगुणा', 'मीठी', 'बानी', 'हाथ', 'डोरी', 'मोह', 'deceiver', 'illusions', 'attachment'],
    verse: {
      hi: 'माया महा ठगिनी हम जानी।\nतिरगुन फांस लिए कर डोलै, बोलै मधुरी बानी॥',
      pb: 'ਮਾਇਆ ਮਹਾ ਠਗਿਨੀ ਹਮ ਜਾਨੀ।\nਤਿਰਗੁਨ ਫਾਂਸ ਲੀਏ ਕਰ ਡੋਲੈ, ਬੋਲੈ ਮਧੁਰੀ ਬਾਣੀ॥',
      en: 'Now I have seen through Maya, the grand illusion that ensnares the world;\nCarrying the snare of the three gunas in hand, she deceives all with sweet, tempting promises.'
    },
    bhavarth: {
      hi: 'माया मीठे प्रलोभनों और मोह-ममता के बंधन से बुद्धिमानों को भी भ्रमित कर देती है; केवल सतगुरु की कृपा और विवेकशील साधक ही इसके छल को पहचानकर मुक्त रहता है।',
      pb: 'ਮਾਇਆ ਮਿੱਠੇ ਲਾਲਚਾਂ ਅਤੇ ਮੋਹ ਦੇ ਬੰਧਨਾਂ ਨਾਲ ਸਿਆਣਿਆਂ ਨੂੰ ਵੀ ਭਰਮਾ ਲੈਂਦੀ ਹੈ; ਕੇਵਲ ਸਤਿਗੁਰੂ-ਕਿਰਪਾ ਵਾਲਾ ਵਿਵੇਕੀ ਸਾਧਕ ਹੀ ਇਸ ਤੋਂ ਬਚਦਾ ਹੈ।',
      en: 'Maya wears tempting disguises of comfort and pride; only alert spiritual discernment sees through her snare.'
    },
    themeEssence: {
      hi: 'माया के मीठे छलावों को पहचानकर सतर्क रहने',
      pb: 'ਮਾਇਆ ਦੇ ਮਿੱਠੇ ਛਲਾਵਿਆਂ ਨੂੰ ਪਛਾਣ ਕੇ ਸੁਚੇਤ ਰਹਿਣ',
      en: 'recognizing Maya’s subtle temptations and staying spiritually alert'
    }
  },
  {
    id: 'bijak-maya-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • तृष्णा निवारण अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਤ੍ਰਿਸ਼ਨਾ ਨਿਵਾਰਣ ਅੰਗ',
      en: 'Kabir Bijak • Trishna Nivaran Ang'
    },
    themes: ['maya', 'mind-speech'],
    keywords: ['चाह', 'चिंता', 'परवाह', 'साह', 'शहनशाह', 'तृष्णा', 'धन', 'लोभ', 'desire', 'king', 'carefree'],
    verse: {
      hi: 'चाह गई चिंता मिटी, मनवा बेपरवाह।\nजिनको कछु नहिं चाहिये, वे साहन के साह॥',
      pb: 'ਚਾਹ ਗਈ ਚਿੰਤਾ ਮਿਟੀ, ਮਨਵਾ ਬੇਪਰਵਾਹ।\nਜਿਨ ਕਉ ਕਛੁ ਨਹਿ ਚਾਹੀਐ, ਵੇ ਸਾਹਨ ਕੇ ਸਾਹ॥',
      en: 'When selfish craving departs, anxious worry vanishes and the heart rests completely carefree;\nThose who desire nothing for egoic gain are the true sovereigns among emperors.'
    },
    bhavarth: {
      hi: 'चिंता की जड़ केवल अनावश्यक कामना है; जिस साधक की लालसा शांत हो जाती है और जो प्रभु की रज़ा में संतुष्ट रहता है, वह भीतर से शहंशाहों का भी शहंशाह बन जाता है।',
      pb: 'ਚਿੰਤਾ ਦੀ ਜੜ੍ਹ ਕੇਵਲ ਬੇਲੋੜੀ ਕਾਮਨਾ ਹੈ; ਜਿਸ ਸਾਧਕ ਦੀ ਤ੍ਰਿਸ਼ਨਾ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੀ ਹੈ ਉਹ ਅੰਦਰੋਂ ਸ਼ਹਿਨਸ਼ਾਹਾਂ ਦਾ ਸ਼ਹਿਨਸ਼ਾਹ ਬਣ ਜਾਂਦਾ ਹੈ।',
      en: 'Anxiety dies the moment restless craving subsides; wanting nothing selfishly grants sovereign inner freedom.'
    },
    themeEssence: {
      hi: 'कामना-त्याग से चिंता-मुक्त निर्भय अवस्था की प्राप्ति',
      pb: 'ਕਾਮਨਾ-ਤਿਆਗ ਨਾਲ ਚਿੰਤਾ-ਮੁਕਤ ਨਿਰਭਉ ਅਵਸਥਾ ਦੀ ਪ੍ਰਾਪਤੀ',
      en: 'inner sovereignty gained by releasing anxious craving'
    }
  },

  // --- 5. AHANKAR TYAG, NAMRATA, KSHAMA & NINDA ---
  {
    id: 'bijak-ego-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • आपा निवारण अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਆਪਾ ਨਿਵਾਰਣ ਅੰਗ',
      en: 'Kabir Bijak • Aapa Nivaran Ang (Dissolving Ego)'
    },
    themes: ['ego-humility'],
    keywords: ['मैं', 'हरि', 'अँधियारा', 'दीपक', 'आपा', 'अहंकार', 'गर्व', 'घमंड', 'ego', 'darkness', 'lamp'],
    verse: {
      hi: 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं।\nसब अँधियारा मिटि गया, जब दीपक देख्या माहिं॥',
      pb: 'ਜਬ ਮੈਂ ਥਾ ਤਬ ਹਰਿ ਨਹੀਂ, ਅਬ ਹਰਿ ਹੈਂ ਮੈਂ ਨਾਹਿ।\nਸਭ ਅੰਧਿਆਰਾ ਮਿਟਿ ਗਇਆ, ਜਬ ਦੀਪਕ ਦੇਖਿਆ ਮਾਹਿ॥',
      en: 'When ‘I’ (the ego) ruled inside, the Beloved was unseen; now the Beloved shines and ‘I’ is no more;\nAll inner darkness vanished instantly the moment I beheld the lamp within.'
    },
    bhavarth: {
      hi: 'अहंकार और परमात्मा एक ही हृदय में साथ-साथ नहीं रह सकते; ज्ञान का दीपक प्रज्वलित होते ही ‘मैंपन’ का अंधकार समाप्त होकर साहेब का प्रकाश प्रकट हो जाता है।',
      pb: 'ਹੰਕਾਰ ਅਤੇ ਪਰਮਾਤਮਾ ਇੱਕੋ ਹਿਰਦੇ ਵਿੱਚ ਇਕੱਠੇ ਨਹੀਂ ਵਸ ਸਕਦੇ; ਗਿਆਨ ਦਾ ਦੀਵਾ ਜਗਦਿਆਂ ਹੀ ‘ਮੈਂ’ ਦਾ ਹਨੇਰਾ ਮਿਟ ਕੇ ਪ੍ਰਭੂ-ਪ੍ਰਕਾਸ਼ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ।',
      en: 'Ego and Divine Presence cannot occupy the same heart; when the inner lamp of wisdom shines, small self-importance disappears.'
    },
    themeEssence: {
      hi: 'अहंकार के विसर्जन से घट में ज्ञान-दीपक के प्रकाश',
      pb: 'ਹੰਕਾਰ ਦੇ ਤਿਆਗ ਨਾਲ ਹਿਰਦੇ ਵਿੱਚ ਗਿਆਨ-ਦੀਵੇ ਦੇ ਪ੍ਰਕਾਸ਼',
      en: 'dissolving ego so the inner lamp of truth illuminates the heart'
    }
  },
  {
    id: 'bijak-ego-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • निंदा व सहनशीलता अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਨਿੰਦਾ ਤੇ ਸਹਿਣਸ਼ੀਲਤਾ ਅੰਗ',
      en: 'Kabir Bijak • Tolerance & Self-Purification Ang'
    },
    themes: ['ego-humility', 'mind-speech'],
    keywords: ['निंदक', 'नियरे', 'आंगन', 'कुटी', 'साबुन', 'पानी', 'निर्मल', 'स्वभाव', 'critic', 'soap', 'clean'],
    verse: {
      hi: 'निंदक नियरे राखिये, आँगन कुटी छवाय।\nबिन पानी साबुन बिना, निर्मल करे सुभाय॥',
      pb: 'ਨਿੰਦਕ ਨਿਅਰੇ ਰਾਖੀਐ, ਆਂਗਨ ਕੁਟੀ ਛਵਾਇ।\nਬਿਨ ਪਾਣੀ ਸਾਬੁਨ ਬਿਨਾ, ਨਿਰਮਲ ਕਰੇ ਸੁਭਾਇ॥',
      en: 'Keep your honest critic close at hand, even building a shelter in your courtyard;\nWithout water and without soap, they cleanse your nature to crystal purity.'
    },
    bhavarth: {
      hi: 'निंदा से क्रोधित होने की बजाय साधक को उसे अपने दोष सुधारने की निःशुल्क सेवा मानकर विनम्रता से स्वीकार करना चाहिए; इससे आचरण स्वयं निर्मल हो जाता है।',
      pb: 'ਨਿੰਦਾ ਤੋਂ ਗੁੱਸੇ ਹੋਣ ਦੀ ਬਜਾਏ ਸਾਧਕ ਨੂੰ ਆਪਣੇ ਔਗੁਣ ਸੁਧਾਰਨ ਦਾ ਸਾਧਨ ਸਮਝ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਸਵੀਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ; ਇਸ ਨਾਲ ਸੁਭਾਅ ਨਿਰਮਲ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'Treating criticism as free spiritual soap purifies character far deeper than flattery ever could.'
    },
    themeEssence: {
      hi: 'विनम्रता से निंदा को आत्म-शुद्धि का माध्यम बनाने',
      pb: 'ਨਿਮਰਤਾ ਨਾਲ ਨਿੰਦਾ ਨੂੰ ਆਤਮ-ਸ਼ੁੱਧੀ ਦਾ ਸਾਧਨ ਬਣਾਉਣ',
      en: 'transforming criticism into effortless self-purification through humility'
    }
  },
  {
    id: 'bijak-ego-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • क्षमा व शील अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਖਿਮਾ ਤੇ ਸੀਲ ਅੰਗ',
      en: 'Kabir Bijak • Kshama & Sheel Ang'
    },
    themes: ['ego-humility', 'compassion-service'],
    keywords: ['खोजने', 'बुरा', 'खोजा', 'दिल', 'मुझसा', 'आत्म', 'निरीक्षण', 'क्षमा', 'faults', 'heart', 'mirror'],
    verse: {
      hi: 'बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसा बुरा न कोय॥',
      pb: 'ਬੁਰਾ ਜੋ ਦੇਖਨ ਮੈਂ ਚਲਾ, ਬੁਰਾ ਨ ਮਿਲਿਆ ਕੋਇ।\nਜੋ ਦਿਲ ਖੋਜਾ ਆਪਨਾ, ਮੁਝਸਾ ਬੁਰਾ ਨ ਕੋਇ॥',
      en: 'I set out to search the world for wicked people, yet could not find a single one;\nWhen I finally looked deep inside my own heart, I saw no fault greater than my own.'
    },
    bhavarth: {
      hi: 'दूसरों में दोष गिनने की प्रवृत्ति अज्ञान का लक्षण है; जब साधक अंतर्मुखी होकर अपने मन की पड़ताल करता है, तब उसमें विनम्रता, क्षमा और सुधार का भाव स्वतः जाग उठता है।',
      pb: 'ਦੂਜਿਆਂ ਵਿੱਚ ਦੋਸ਼ ਲੱਭਣ ਦੀ ਆਦਤ ਅਗਿਆਨ ਦੀ ਨਿਸ਼ਾਨੀ ਹੈ; ਜਦੋਂ ਸਾਧਕ ਆਪਣੇ ਹੀ ਹਿਰਦੇ ਦੀ ਪੜਤਾਲ ਕਰਦਾ ਹੈ ਤਾਂ ਨਿਮਰਤਾ ਅਤੇ ਖਿਮਾ ਆਪੇ ਜਾਗ ਉੱਠਦੀ ਹੈ।',
      en: 'Looking outward breeds judgment, whereas looking honestly within cultivates deep humility and forgiveness toward others.'
    },
    themeEssence: {
      hi: 'पर-दोष दर्शन त्यागकर आत्म-निरीक्षण व विनम्रता अपनाने',
      pb: 'ਪਰ-ਦੋਸ਼ ਤਿਆਗ ਕੇ ਆਤਮ-ਨਿਰੀਖਣ ਅਤੇ ਨਿਮਰਤਾ ਅਪਣਾਉਣ',
      en: 'turning judgment inward for authentic self-examination and humility'
    }
  },

  // --- 6. SATYA AACHARAN & PAKHAND KHANDAN ---
  {
    id: 'bijak-satya-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • साँच को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਾਂਚ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Saanch Ko Ang (The Chapter of Truth)'
    },
    themes: ['satya-hypocrisy'],
    keywords: ['साँच', 'सांच', 'तप', 'झूठ', 'पाप', 'हिरदै', 'सत्य', 'आचरण', 'truth', 'austerity', 'sin'],
    verse: {
      hi: 'साँच बराबर तप नहीं, झूठ बराबर पाप।\nजाके हिरदै साँच है, ताके हिरदै आप॥',
      pb: 'ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ, ਝੂਠ ਬਰਾਬਰ ਪਾਪ।\nਜਾਕੇ ਹਿਰਦੈ ਸਾਂਚ ਹੈ, ਤਾਕੇ ਹਿਰਦੈ ਆਪ॥',
      en: 'No austerity equals living in Truth, and no transgression equals falsehood;\nWithin the heart where pure Truth resides, the Supreme Lord Himself dwells.'
    },
    bhavarth: {
      hi: 'कठिन बाह्य तपस्याओं से भी बड़ी साधना जीवन में सत्य और ईमानदारी धारण करना है; सत्यवादी और निष्कपट हृदय में परमात्मा स्वतः निवास करते हैं।',
      pb: 'ਕਠਿਨ ਬਾਹਰੀ ਤਪੱਸਿਆ ਨਾਲੋਂ ਵੀ ਵੱਡੀ ਸਾਧਨਾ ਜੀਵਨ ਵਿੱਚ ਸੱਚ ਅਤੇ ਇਮਾਨਦਾਰੀ ਧਾਰਨ ਕਰਨਾ ਹੈ; ਸੱਚੇ ਹਿਰਦੇ ਵਿੱਚ ਪਰਮਾਤਮਾ ਆਪ ਵਸਦੇ ਹਨ।',
      en: 'Integrity and truthfulness surpass all outward penances; the Divine abides naturally in an honest heart.'
    },
    themeEssence: {
      hi: 'सत्य को सर्वोच्च तप मानकर निष्कपट जीवन जीने',
      pb: 'ਸੱਚ ਨੂੰ ਸਭ ਤੋਂ ਵੱਡਾ ਤਪ ਮੰਨ ਕੇ ਨਿਰਛਲ ਜੀਵਨ ਜਿਊਣ',
      en: 'upholding Truth as the highest austerity and dwelling place of God'
    }
  },
  {
    id: 'bijak-satya-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • कथनी-करनी व पाखंड खंडन अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਕਥਨੀ-ਕਰਨੀ ਤੇ ਪਾਖੰਡ ਖੰਡਨ ਅੰਗ',
      en: 'Kabir Bijak • Kathani-Karani & Vivek Ang'
    },
    themes: ['satya-hypocrisy', 'prem-bhakti'],
    keywords: ['पोथी', 'पढ़ि', 'पंडित', 'ढाई', 'आखर', 'प्रेम', 'पढ़े', 'ज्ञान', 'books', 'scholar', 'love'],
    verse: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗੁ ਮੁਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ॥',
      en: 'The world exhausted itself reading countless volumes yet became no wiser;\nOne who deeply lives the two-and-a-half syllables of pure Divine Love becomes truly wise.'
    },
    bhavarth: {
      hi: 'केवल ग्रंथों को रटने और पांडित्य के प्रदर्शन से कोई ज्ञानी नहीं बनता; जब जीवन में निष्काम प्रेम, करुणा और सत्यनाम का अनुभव उतरता है तभी सच्चा बोध प्राप्त होता है।',
      pb: 'ਕੇਵਲ ਪੋਥੀਆਂ ਰਟਣ ਨਾਲ ਕੋਈ ਵਿਦਵਾਨ ਨਹੀਂ ਬਣਦਾ; ਜਦੋਂ ਜੀਵਨ ਵਿੱਚ ਪ੍ਰੇਮ, ਦਇਆ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਅਨੁਭਵ ਉੱਤਰਦਾ ਹੈ ਤਾਂ ਅਸਲੀ ਗਿਆਨ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।',
      en: 'Bookish erudition without love leaves the heart dry; lived compassion and devotion constitute true wisdom.'
    },
    themeEssence: {
      hi: 'शुष्क शास्त्रार्थ से ऊपर अनुभवजन्य प्रेम और आचरण की महत्ता',
      pb: 'ਖੁਸ਼ਕ ਵਿਦਵਤਾ ਤੋਂ ਉੱਪਰ ਅਨੁਭਵੀ ਪ੍ਰੇਮ ਅਤੇ ਆਚਰਨ ਦੀ ਮਹੱਤਤਾ',
      en: 'elevating lived love and spiritual experience over dry book learning'
    }
  },
  {
    id: 'bijak-satya-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • साखी संग्रह (घट-मंदिर विवेक)',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਾਖੀ ਸੰਗ੍ਰਹਿ (ਘਟ-ਮੰਦਰ ਵਿਵੇਕ)',
      en: 'Kabir Bijak • Sakhi Sangrah (Inner Temple Vivek)'
    },
    themes: ['satya-hypocrisy', 'yoga-realization'],
    keywords: ['तीर्थ', 'मूर्ति', 'पत्थर', 'पूजन', 'चक्की', 'मन', 'साँप', 'बामी', 'stone', 'idol', 'ritual'],
    verse: {
      hi: 'तीरथ करि करि जग मुआ, डूँघे पाणी न्हाय।\nरामहिं राम जपंतड़ां, काल घसीट्या जाय॥',
      pb: 'ਤੀਰਥ ਕਰਿ ਕਰਿ ਜਗੁ ਮੁਆ, ਡੂੰਘੇ ਪਾਣੀ ਨ੍ਹਾਇ।\nਅੰਤਰੁ ਮੈਲੁ ਨ ਉਤਰੈ, ਜੋ ਲਖ ਤੀਰਥ ਨ੍ਹਾਇ॥',
      en: 'People exhaust themselves wandering from pilgrimage to pilgrimage, bathing in deep waters;\nYet the inner stains of ego and greed never wash away through outer bathing alone.'
    },
    bhavarth: {
      hi: 'बाहरी तीर्थों में स्नान से केवल शरीर धुलता है, मन के मल (काम, क्रोध, अहंकार) नहीं छूटते; सच्चा तीर्थ सद्भाव और सत्यनाम सिमरन से अंतःकरण को शुद्ध करना है।',
      pb: 'ਬਾਹਰੀ ਤੀਰਥਾਂ ਵਿੱਚ ਨਹਾਉਣ ਨਾਲ ਕੇਵਲ ਸਰੀਰ ਧੁਪਦਾ ਹੈ, ਮਨ ਦੀ ਮੈਲ ਨਹੀਂ ਉੱਤਰਦੀ; ਸੱਚਾ ਤੀਰਥ ਸਤਯਨਾਮ ਸਿਮਰਨ ਨਾਲ ਹਿਰਦੇ ਨੂੰ ਪਵਿੱਤਰ ਕਰਨਾ ਹੈ।',
      en: 'Outer rituals cleanse only the skin, never ego or anger; true pilgrimage is purifying one’s own heart through remembrance and virtue.'
    },
    themeEssence: {
      hi: 'बाहरी आडंबर के स्थान पर अंतःकरण रूपी तीर्थ की शुद्धि',
      pb: 'ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਦੀ ਥਾਂ ਹਿਰਦੇ ਰੂਪੀ ਤੀਰਥ ਦੀ ਸ਼ੁੱਧੀ',
      en: 'inner purification of conscience over mechanical outer rituals'
    }
  },

  // --- 7. SADHU SANGATI & SANT MAHIMA ---
  {
    id: 'bijak-sadhu-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • साधु को अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਾਧੂ ਕੋ ਅੰਗ',
      en: 'Kabir Bijak • Sadhu Ko Ang (Glory of True Saints)'
    },
    themes: ['satsang-sadhu'],
    keywords: ['साधु', 'बड़भागी', 'दर्शन', 'अंक', 'पाप', 'संत', 'संगति', 'दर्शन', 'saint', 'vision', 'sins'],
    verse: {
      hi: 'कबीर दर्शन साध का, बड़े भाग दर्शाय।\nजो होवै सूली सजा, सो कांटे ही टरि जाय॥',
      pb: 'ਕਬੀਰ ਦਰਸ਼ਨ ਸਾਧ ਕਾ, ਬੜੇ ਭਾਗ ਦਰਸਾਇ।\nਜੋ ਹੋਵੈ ਸੂਲੀ ਸਜਾ, ਸੋ ਕਾਂਟੇ ਹੀ ਟਰਿ ਜਾਇ॥',
      en: 'Beholding a true Saint of God comes only by supreme good fortune;\nThrough their blessed company and counsel, severe karmic sorrows soften and pass like a minor thorn.'
    },
    bhavarth: {
      hi: 'सच्चे साधु-संतों के दर्शन और सत्संग से जीवन के बड़े से बड़े संकट और कर्म-संस्कार भी टल जाते हैं तथा साधक को सन्मार्ग की प्रेरणा मिलती है।',
      pb: 'ਸੱਚੇ ਸਾਧੂ-ਸੰਤਾਂ ਦੇ ਦਰਸ਼ਨ ਅਤੇ ਸਤਿਸੰਗ ਨਾਲ ਜੀਵਨ ਦੇ ਵੱਡੇ ਤੋਂ ਵੱਡੇ ਸੰਕਟ ਵੀ ਟਲ ਜਾਂਦੇ ਹਨ ਅਤੇ ਸਹੀ ਮਾਰਗ ਦੀ ਪ੍ਰੇਰਣਾ ਮਿਲਦੀ ਹੈ।',
      en: 'The grace-filled company of genuine Saints shields seekers from grave missteps and softens heavy karmic burdens.'
    },
    themeEssence: {
      hi: 'संत-दर्शन और सत्संग के मंगलकारी एवं रक्षक प्रभाव',
      pb: 'ਸੰਤ-ਦਰਸ਼ਨ ਅਤੇ ਸਤਿਸੰਗ ਦੇ ਕਲਿਆਣਕਾਰੀ ਪ੍ਰਭਾਵ',
      en: 'the redemptive, protective grace found in Saintly companionship'
    }
  },
  {
    id: 'bijak-sadhu-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • साधु लक्षण व संगति अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸਾਧੂ ਲੱਛਣ ਤੇ ਸੰਗਤ ਅੰਗ',
      en: 'Kabir Bijak • Sadhu Lakshan & Sangati Ang'
    },
    themes: ['satsang-sadhu', 'compassion-service'],
    keywords: ['साधु', 'सूप', 'सार', 'थौथा', 'विवेक', 'स्वभाव', 'संत', 'गुणी', 'winnowing', 'essence', 'grain'],
    verse: {
      hi: 'साधु ऐसा चाहिये, जैसा सूप सुभाय।\nसार-सार को गहि रहै, थोथा देई उड़ाय॥',
      pb: 'ਸਾਧੂ ਐਸਾ ਚਾਹੀਐ, ਜੈਸਾ ਸੂਪ ਸੁਭਾਇ।\nਸਾਰ-ਸਾਰ ਕਉ ਗਹਿ ਰਹੈ, ਥੋਥਾ ਦੇਈ ਉਡਾਇ॥',
      en: 'A true seeker and Saint should possess the nature of a winnowing fan:\nRetaining the solid, nourishing grain of Truth while gently blowing away useless chaff.'
    },
    bhavarth: {
      hi: 'विवेकशील साधक सूप की तरह दूसरों के गुणों और जीवन के आध्यात्मिक सार को तो ग्रहण कर लेता है, किंतु व्यर्थ के विवाद, निंदा और दोषों को उड़ाकर अलग कर देता है।',
      pb: 'ਵਿਵੇਕੀ ਸਾਧਕ ਛੱਜ ਵਾਂਗ ਗੁਣਾਂ ਅਤੇ ਅਧਿਆਤਮਿਕ ਸਾਰ ਨੂੰ ਤਾਂ ਗ੍ਰਹਿਣ ਕਰ ਲੈਂਦਾ ਹੈ, ਪਰ ਵਿਅਰਥ ਦੇ ਝਗੜਿਆਂ ਤੇ ਔਗੁਣਾਂ ਨੂੰ ਉਡਾ ਦਿੰਦਾ ਹੈ।',
      en: 'Wisdom acts like a winnowing fan—cherishing the nourishing essence of Truth while letting trivial disputes blow away.'
    },
    themeEssence: {
      hi: 'सूप समान विवेक से गुण व सार ग्रहण करने की संत-दृष्टि',
      pb: 'ਛੱਜ ਸਮਾਨ ਵਿਵੇਕ ਨਾਲ ਗੁਣ ਤੇ ਸਾਰ ਗ੍ਰਹਿਣ ਕਰਨ ਦੀ ਸੰਤ-ਦ੍ਰਿਸ਼ਟੀ',
      en: 'winnowing spiritual wisdom from trivial clutter with noble discernment'
    }
  },
  {
    id: 'bijak-sadhu-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • संगति व पारसमणि अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਸੰਗਤ ਤੇ ਪਾਰਸ ਅੰਗ',
      en: 'Kabir Bijak • Sangati Ang'
    },
    themes: ['satsang-sadhu', 'chetavani'],
    keywords: ['संगत', 'संगति', 'कुसंग', 'काजल', 'कोठरी', 'दाग', 'पवित्र', 'चंदन', 'soot', 'company', 'stain'],
    verse: {
      hi: 'कबीरा संगति साधु की, हरै और की ब्याधि।\nसंगति बुरी असाधु की, आठों पहर उपाधि॥',
      pb: 'ਕਬੀਰਾ ਸੰਗਤਿ ਸਾਧੁ ਕੀ, ਹਰੈ ਅਉਰ ਕੀ ਬਿਆਧਿ।\nਸੰਗਤਿ ਬੁਰੀ ਅਸਾਧੁ ਕੀ, ਆਠੋਂ ਪਹਰ ਉਪਾਧਿ॥',
      en: 'Kabir, the company of true Saints heals even deep-seated spiritual ailments;\nWhereas keeping bad, selfish company breeds endless restlessness day and night.'
    },
    bhavarth: {
      hi: 'सज्जनों और संतों की संगति मन के पुराने विकारों को दूर करके शांति देती है, जबकि कुसंगति से मनुष्य दिन के आठों पहर अशांति और तनाव में फंसा रहता है।',
      pb: 'ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਮਨ ਦੇ ਪੁਰਾਣੇ ਰੋਗ ਕੱਟ ਕੇ ਸ਼ਾਂਤੀ ਦਿੰਦੀ ਹੈ, ਜਦਕਿ ਕੁਸੰਗਤ ਅੱਠੇ ਪਹਿਰ ਅਸ਼ਾਂਤੀ ਅਤੇ ਦੁੱਖ ਦਿੰਦੀ ਹੈ।',
      en: 'Wise company heals chronic mental restlessness, whereas unwholesome company fuels continuous agitation.'
    },
    themeEssence: {
      hi: 'सुसंगति से मानसिक आरोग्य और कुसंगति से बचने की सीख',
      pb: 'ਸੁਸੰਗਤ ਨਾਲ ਆਤਮਿਕ ਅਰੋਗਤਾ ਅਤੇ ਕੁਸੰਗਤ ਤੋਂ ਬਚਣ ਦੀ ਸਿੱਖਿਆ',
      en: 'the healing serenity of wise company versus the turmoil of bad company'
    }
  },

  // --- 8. PREM BHAKTI & SAMARPAN ---
  {
    id: 'bijak-prem-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • प्रेम व समर्पण अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਪ੍ਰੇਮ ਤੇ ਸਮਰਪਣ ਅੰਗ',
      en: 'Kabir Bijak • Prem & Samarpan Ang'
    },
    themes: ['prem-bhakti', 'ego-humility'],
    keywords: ['प्रेम', 'गली', 'सांकरी', 'द्वै', 'दो', 'समाय', 'मैं', 'प्रीत', 'lane', 'narrow', 'two'],
    verse: {
      hi: 'प्रेम गली अति साँकरी, तामें दो न समाहिं।\nजब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं॥',
      pb: 'ਪ੍ਰੇਮ ਗਲੀ ਅਤਿ ਸਾਂਕਰੀ, ਤਾਮੇਂ ਦੋ ਨ ਸਮਾਹਿ।\nਜਬ ਮੈਂ ਥਾ ਤਬ ਹਰਿ ਨਹੀਂ, ਅਬ ਹਰਿ ਹੈਂ ਮੈਂ ਨਾਹਿ॥',
      en: 'The lane of Divine Love is exceedingly narrow—it cannot hold both ‘I’ and the Beloved together;\nEither small ego remains, or Satguru’s Love fills the heart completely.'
    },
    bhavarth: {
      hi: 'प्रभु-प्रेम का मार्ग अत्यंत सूक्ष्म और एकांत है; वहाँ अहंकार और प्रभु दोनों साथ नहीं समा सकते। आत्म-समर्पण ही सच्ची प्रेम-भक्ति की पहली शर्त है।',
      pb: 'ਪ੍ਰਭੂ-ਪ੍ਰੇਮ ਦਾ ਮਾਰਗ ਬਹੁਤ ਸੂਖਮ ਹੈ; ਇਸ ਵਿੱਚ ਹੰਕਾਰ ਅਤੇ ਪ੍ਰਭੂ ਦੋਵੇਂ ਇਕੱਠੇ ਨਹੀਂ ਸਮਾ ਸਕਦੇ। ਪੂਰਨ ਸਮਰਪਣ ਹੀ ਸੱਚੀ ਪ੍ਰੇਮ-ਭਗਤੀ ਹੈ।',
      en: 'The path of sacred Love leaves no room for selfish ego; surrender of ‘I’ opens space for total union.'
    },
    themeEssence: {
      hi: 'अहंकार शून्य अनन्य प्रेम-भक्ति और एकनिष्ठ समर्पण',
      pb: 'ਹੰਕਾਰ ਰਹਿਤ ਅਨੰਨ ਪ੍ਰੇਮ-ਭਗਤੀ ਅਤੇ ਇੱਕ-ਨਿਸ਼ਠ ਸਮਰਪਣ',
      en: 'non-dual loving devotion where ego yields entirely to Beloved'
    }
  },
  {
    id: 'bijak-prem-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • भगत शूरवीर अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਭਗਤ ਸੂਰਬੀਰ ਅੰਗ',
      en: 'Kabir Bijak • Shoorveer Bhakti Ang'
    },
    themes: ['prem-bhakti'],
    keywords: ['सीस', 'शीश', 'घर', 'प्रेम', 'खाला', 'धरती', 'भक्ति', 'साहस', 'head', 'courage', 'house'],
    verse: {
      hi: 'कबीर यह घर प्रेम का, खाला का घर नाहिं।\nसीस उतारे हाथ धरि, सो पैठे घर माहिं॥',
      pb: 'ਕਬੀਰ ਇਹੁ ਘਰੁ ਪ੍ਰੇਮ ਕਾ, ਖਾਲਾ ਕਾ ਘਰੁ ਨਾਹਿ।\nਸੀਸੁ ਉਤਾਰੇ ਹਾਥਿ ਧਰਿ, ਸੋ ਪੈਠੇ ਘਰ ਮਾਹਿ॥',
      en: 'Kabir, this is the sacred abode of Divine Love, not an easy playground for idle pride;\nOnly one who lays their ego-head upon their palm may enter this sanctuary.'
    },
    bhavarth: {
      hi: 'परमात्मा से सच्चा प्रेम केवल भावनात्मक बात नहीं, अपितु अहंकार रूपी शीश को उतारकर समर्पण करने की अदम्य हिम्मत और दृढ़ साधना है।',
      pb: 'ਪ੍ਰਭੂ ਨਾਲ ਸੱਚਾ ਪ੍ਰੇਮ ਕੋਈ ਸੌਖੀ ਗੱਲ ਨਹੀਂ, ਸਗੋਂ ਹੰਕਾਰ ਰੂਪੀ ਸਿਰ ਉਤਾਰ ਕੇ ਸਮਰਪਣ ਕਰਨ ਦੀ ਅਡਿੱਗ ਹਿੰਮਤ ਹੈ।',
      en: 'Entering the sanctuary of authentic devotion demands surrendering one’s pride completely.'
    },
    themeEssence: {
      hi: 'निष्कपट त्याग और दृढ़ संकल्प वाली प्रेम-भक्ति',
      pb: 'ਨਿਰਛਲ ਤਿਆਗ ਅਤੇ ਦ੍ਰਿੜ੍ਹ ਸੰਕਲਪ ਵਾਲੀ ਪ੍ਰੇਮ-ਭਗਤੀ',
      en: 'wholehearted commitment and ego-surrender required by real devotion'
    }
  },
  {
    id: 'bijak-prem-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • विनती व शरणागति अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਬੇਨਤੀ ਤੇ ਸ਼ਰਨਾਗਤੀ ਅੰਗ',
      en: 'Kabir Bijak • Vinti & Sharanagati Ang'
    },
    themes: ['prem-bhakti', 'compassion-service'],
    keywords: ['सांई', 'साईं', 'इतना', 'दीजिये', 'कुटुंब', 'साधु', 'भूखा', 'आरती', 'विनती', 'prayer', 'family'],
    verse: {
      hi: 'साँई इतना दीजिये, जा में कुटुम समाय।\nमैं भी भूखा ना रहूँ, साधु न भूखा जाय॥',
      pb: 'ਸਾਂਈ ਇਤਨਾ ਦੀਜੀਐ, ਜਾ ਮਹਿ ਕੁਟੁੰਬ ਸਮਾਇ।\nਮੈਂ ਭੀ ਭੂਖਾ ਨਾ ਰਹੂੰ, ਸਾਧੁ ਨ ਭੂਖਾ ਜਾਇ॥',
      en: 'O Sovereign Saheb, grant me just enough sustenance to care lovingly for my household;\nMay I never lack daily bread, and may no wandering Saint leave my door hungry.'
    },
    bhavarth: {
      hi: 'सच्चे साधक की प्रार्थना असीम धन-दौलत की नहीं, अपितु संतुलित निर्वाह और अतिथि-सत्कार व दीन-सेवा के सुअवसर की होती है। यही गृहस्थ-संतोष का आदर्श है।',
      pb: 'ਸੱਚੇ ਸਾਧਕ ਦੀ ਅਰਦਾਸ ਬੇਅੰਤ ਧਨ ਇਕੱਠਾ ਕਰਨ ਦੀ ਨਹੀਂ, ਸਗੋਂ ਸੰਤੁਲਿਤ ਗੁਜ਼ਾਰੇ ਅਤੇ ਸੰਤਾਂ-ਲੋੜਵੰਦਾਂ ਦੀ ਸੇਵਾ ਕਰਨ ਦੇ ਸੁਭਾਗ ਦੀ ਹੁੰਦੀ ਹੈ।',
      en: 'The seeker prays not for hoarding excess wealth, but for modest sufficiency paired with generous hospitality.'
    },
    themeEssence: {
      hi: 'विनम्र प्रार्थना, संतोष और अतिथि-सेवा के संतुलित आदर्श',
      pb: 'ਨਿਮਰ ਅਰਦਾਸ, ਸੰਤੋਖ ਅਤੇ ਸੇਵਾ ਦੇ ਸੰਤੁਲਿਤ ਆਦਰਸ਼',
      en: 'humble prayer uniting modest contentment with generous hospitality'
    }
  },

  // --- 9. MIND SHUDDHI, VANI SANYAM & SANTOSH ---
  {
    id: 'bijak-mind-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • वाणी व मन शुद्धि अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਬਾਣੀ ਤੇ ਮਨ ਸ਼ੁੱਧੀ ਅੰਗ',
      en: 'Kabir Bijak • Vani & Mind Purity Ang'
    },
    themes: ['mind-speech'],
    keywords: ['बानी', 'वाणी', 'तप', 'आपा', 'शीतल', 'सुख', 'मीठी', 'बोल', 'words', 'cool', 'gentle'],
    verse: {
      hi: 'ऐसी बानी बोलिये, मन का आपा खोय।\nऔरन को शीतल करै, आपहुँ शीतल होय॥',
      pb: 'ਐਸੀ ਬਾਣੀ ਬੋਲੀਐ, ਮਨ ਕਾ ਆਪਾ ਖੋਇ।\nਔਰਨ ਕਉ ਸੀਤਲ ਕਰੈ, ਆਪਹੁਂ ਸੀਤਲ ਹੋਇ॥',
      en: 'Speak such words that dissolve the ego of your own mind;\nBringing cooling peace to every listener while leaving your own heart serene.'
    },
    bhavarth: {
      hi: 'अहंकार रहित होकर मधुर व संवेदनशील वाणी बोलने से दूसरों के हृदय को भी ठंडक मिलती है और स्वयं के मन में भी अद्भुत शांति बनी रहती है।',
      pb: 'ਹੰਕਾਰ ਰਹਿਤ ਹੋ ਕੇ ਮਿੱਠੀ ਤੇ ਸੰਜਮ ਵਾਲੀ ਬਾਣੀ ਬੋਲਣ ਨਾਲ ਦੂਜਿਆਂ ਦੇ ਹਿਰਦੇ ਨੂੰ ਵੀ ਠੰਢਕ ਮਿਲਦੀ ਹੈ ਅਤੇ ਆਪਣੇ ਮਨ ਵਿੱਚ ਵੀ ਸ਼ਾਂਤੀ ਰਹਿੰਦੀ ਹੈ।',
      en: 'Speaking without ego turns conversation into a cooling balm for both speaker and listener alike.'
    },
    themeEssence: {
      hi: 'अहंकार-मुक्त मधुर वाणी से सर्वत्र शांति के संचार',
      pb: 'ਹੰਕਾਰ-ਰਹਿਤ ਮਿੱਠੀ ਬਾਣੀ ਨਾਲ ਸਭ ਪਾਸੇ ਸ਼ਾਂਤੀ ਦੇ ਸੰਚਾਰ',
      en: 'ego-free gentle speech radiating peace to self and others'
    }
  },
  {
    id: 'bijak-mind-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • मन बोध व विवेक अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਮਨ ਬੋਧ ਤੇ ਵਿਵੇਕ ਅੰਗ',
      en: 'Kabir Bijak • Man Bodh Ang (Mastering the Mind)'
    },
    themes: ['mind-speech', 'chetavani'],
    keywords: ['मन', 'मते', 'चाल', 'कुसंग', 'नियंत्रण', 'चंचल', 'बुद्धि', 'विवेक', 'mind', 'impulse', 'discipline'],
    verse: {
      hi: 'मन के मते न चालिये, मन के मते अनेक।\nजो मन पर असवार है, सो साधु कोइ एक॥',
      pb: 'ਮਨ ਕੇ ਮਤੇ ਨ ਚਾਲੀਐ, ਮਨ ਕੇ ਮਤੇ ਅਨੇਕ।\nਜੋ ਮਨ ਪਰ ਅਸਵਾਰ ਹੈ, ਸੋ ਸਾਧੁ ਕੋਇ ਏਕ॥',
      en: 'Never follow the fickle whims of the undisciplined mind, for its impulses run wild;\nRare indeed is the true Saint who rides firmly as master over the mind.'
    },
    bhavarth: {
      hi: 'मन पल-पल अपने संकल्प बदलता रहता है; मन के आवेगों का गुलाम बनने की बजाय विवेक और सत्यनाम द्वारा मन का स्वामी बनना ही सच्ची योग-साधना है।',
      pb: 'ਮਨ ਪਲ-ਪਲ ਆਪਣੇ ਖਿਆਲ ਬਦਲਦਾ ਰਹਿੰਦਾ ਹੈ; ਮਨ ਦੇ ਪਿੱਛੇ ਲੱਗਣ ਦੀ ਥਾਂ ਵਿਵੇਕ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਨਾਲ ਮਨ ਦਾ ਮਾਲਕ ਬਣਨਾ ਹੀ ਅਸਲੀ ਸਾਧਨਾ ਹੈ।',
      en: 'Following ever-shifting mental impulses brings regret; true spiritual mastery means guiding the mind rather than obeying its whims.'
    },
    themeEssence: {
      hi: 'मन के चंचल आवेगों के स्थान पर विवेक के शासन',
      pb: 'ਮਨ ਦੀਆਂ ਚੰਚਲ ਤਰੰਗਾਂ ਦੀ ਥਾਂ ਵਿਵੇਕ ਦੇ ਅਨੁਸ਼ਾਸਨ',
      en: 'mastering shifting mental impulses with awakened discernment'
    }
  },
  {
    id: 'bijak-mind-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • धीरज व कर्म सिद्धांत अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਧੀਰਜ ਤੇ ਕਰਮ ਸਿਧਾਂਤ ਅੰਗ',
      en: 'Kabir Bijak • Patience & Karma Ang'
    },
    themes: ['mind-speech', 'ego-humility'],
    keywords: ['धीरे', 'धैर्य', 'फल', 'माली', 'सींच', 'घड़ा', 'समय', 'सबर', 'patience', 'gardener', 'season'],
    verse: {
      hi: 'धीरे धीरे रे मना, धीरे सब कुछ होय।\nमाली सींचे सौ घड़ा, ऋतु आए फल होय॥',
      pb: 'ਧੀਰੇ ਧੀਰੇ ਰੇ ਮਨਾ, ਧੀਰੇ ਸਭ ਕੁਛ ਹੋਇ।\nਮਾਲੀ ਸੀਂਚੈ ਸੌ ਘੜਾ, ਰੁਤਿ ਆਏ ਫਲ ਹੋਇ॥',
      en: 'Be patient, O restless mind, everything unfolds gently in its proper time;\nEven if the gardener pours a hundred buckets of water, sweet fruit appears only when the season ripens.'
    },
    bhavarth: {
      hi: 'अधीरता और क्रोध से कार्य बिगड़ते हैं; साधक को धैर्य, निरंतर पुरुषार्थ और विश्वास के साथ अपने कर्तव्य रूपी पौधे को सींचते रहना चाहिए, समय आने पर अवश्य फल मिलता है।',
      pb: 'ਕਾਹਲੀ ਅਤੇ ਬੇਸਬਰੀ ਨਾਲ ਕੰਮ ਵਿਗੜਦੇ ਹਨ; ਸਾਧਕ ਨੂੰ ਧੀਰਜ ਅਤੇ ਲਗਾਤਾਰ ਮਿਹਨਤ ਨਾਲ ਆਪਣੀ ਸਾਧਨਾ ਨੂੰ ਸਿੰਜਦੇ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ।',
      en: 'Steady patience and sincere daily effort bring mature spiritual fruit in their rightful season.'
    },
    themeEssence: {
      hi: 'अधीरता त्यागकर धैर्य, सब्र और निरंतर साधना',
      pb: 'ਬੇਸਬਰੀ ਤਿਆਗ ਕੇ ਧੀਰਜ, ਸਬਰ ਅਤੇ ਨਿਰੰਤਰ ਸਾਧਨਾ',
      en: 'cultivating calm patience alongside steady spiritual effort'
    }
  },

  // --- 10. COMPASSION, PAROPKAR & SERVICE ---
  {
    id: 'bijak-daya-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • परोपकार व दया अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਪਰਉਪਕਾਰ ਤੇ ਦਇਆ ਅੰਗ',
      en: 'Kabir Bijak • Paropkar & Daya Ang'
    },
    themes: ['compassion-service'],
    keywords: ['वृक्ष', 'नदी', 'सरवर', 'संत', 'परोपकार', 'धन', 'दान', 'दया', 'tree', 'river', 'altruism'],
    verse: {
      hi: 'तरुवर सरवर संत जन, चौथे बरसे मेह।\nपरमारथ के कारणे, चारों धारी देह॥',
      pb: 'ਤਰੁਵਰ ਸਰਵਰ ਸੰਤ ਜਨ, ਚੌਥੇ ਬਰਸੈ ਮੇਹ।\nਪਰਮਾਰਥ ਕੇ ਕਾਰਨੇ, ਚਾਰੋਂ ਧਾਰੀ ਦੇਹ॥',
      en: 'Fruit-bearing trees, clear reservoirs, generous Saints, and the fourth—the rain clouds;\nAll four take visible form in this world solely for the selfless welfare of others.'
    },
    bhavarth: {
      hi: 'जैसे वृक्ष स्वयं फल नहीं खाते और नदी अपना जल स्वयं नहीं पीती, वैसे ही सच्चे संत और साधक का जीवन भी प्राणी-मात्र के कल्याण एवं निस्वार्थ सेवा के लिए समर्पित होता है।',
      pb: 'ਜਿਵੇਂ ਰੁੱਖ ਆਪਣੇ ਫਲ ਆਪ ਨਹੀਂ ਖਾਂਦੇ ਤੇ ਦਰਿਆ ਆਪਣਾ ਪਾਣੀ ਆਪ ਨਹੀਂ ਪੀਂਦੇ, ਤਿਵੇਂ ਸੱਚੇ ਸੰਤਾਂ ਦਾ ਜੀਵਨ ਦੂਜਿਆਂ ਦੀ ਭਲਾਈ ਲਈ ਹੁੰਦਾ ਹੈ।',
      en: 'Like trees, rivers, and rain clouds, authentic spiritual seekers dedicate their gifts to uplifting others.'
    },
    themeEssence: {
      hi: 'निस्वार्थ परोपकार और सर्वभूत कल्याण की संत-प्रकृति',
      pb: 'ਨਿਸਵਾਰਥ ਪਰਉਪਕਾਰ ਅਤੇ ਸਭ ਜੀਵਾਂ ਦੀ ਭਲਾਈ ਦੀ ਸੰਤ-ਬਿਰਤੀ',
      en: 'selfless altruism modeled after trees, rivers, and Saints'
    }
  },
  {
    id: 'bijak-daya-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • दान व दया प्रकरण',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਦਾਨ ਤੇ ਦਇਆ ਪ੍ਰਕਰਣ',
      en: 'Kabir Bijak • Charity & Mercy Ang'
    },
    themes: ['compassion-service', 'naam'],
    keywords: ['जल', 'बढ़े', 'नाव', 'घर', 'दाम', 'दोऊ', 'हाथ', 'उलीचिये', 'दान', 'boat', 'charity', 'wealth'],
    verse: {
      hi: 'पानी बाढ़े नाव में, घर में बाढ़े दाम।\nदोऊ हाथ उलीचिये, यही सयानो काम॥',
      pb: 'ਪਾਨੀ ਬਾਢੇ ਨਾਵ ਮਹਿ, ਘਰ ਮਹਿ ਬਾਢੇ ਦਾਮ।\nਦੋਊ ਹਾਥ ਉਲੀਚੀਐ, ਯਹੀ ਸਿਆਨੋ ਕਾਮ॥',
      en: 'When water floods inside a boat, and when excess wealth accumulates inside a home,\nBail both out with both hands generously—this alone is true wisdom.'
    },
    bhavarth: {
      hi: 'नाव में पानी भरने पर डूबने का भय रहता है, ठीक वैसे ही आवश्यकता से अधिक संग्रह में अहंकार व चिंता बढ़ती है; परोपकार व दीन-सेवा में धन लगाना ही सच्ची समझदारी है।',
      pb: 'ਕਿਸ਼ਤੀ ਵਿੱਚ ਪਾਣੀ ਭਰਨ ਨਾਲ ਡੁੱਬਣ ਦਾ ਖ਼ਤਰਾ ਹੁੰਦਾ ਹੈ, ਉਸੇ ਤਰ੍ਹਾਂ ਲੋੜ ਤੋਂ ਵੱਧ ਧਨ-ਸੰਗ੍ਰਹਿ ਹੰਕਾਰ ਵਧਾਉਂਦਾ ਹੈ; ਭਲਾਈ ਤੇ ਦਾਨ ਵਿੱਚ ਵੰਡਣਾ ਹੀ ਸਿਆਣਪ ਹੈ।',
      en: 'Just as bailing water saves a boat from sinking, sharing surplus generously protects the heart from greed.'
    },
    themeEssence: {
      hi: 'सत्पात्र दान और संग्रह-त्याग द्वारा आत्म-रक्षा',
      pb: 'ਸੱਚੇ ਦਾਨ ਅਤੇ ਲੋੜ ਤੋਂ ਵੱਧ ਸੰਗ੍ਰਹਿ ਦੇ ਤਿਆਗ ਦੀ ਸਿਆਣਪ',
      en: 'wise generosity that prevents spiritual sinking under hoarding'
    }
  },
  {
    id: 'bijak-daya-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • अहिंसा व करुणा अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਅਹਿੰਸਾ ਤੇ ਕਰੁਣਾ ਅੰਗ',
      en: 'Kabir Bijak • Ahimsa & Karuna Ang'
    },
    themes: ['compassion-service'],
    keywords: ['दया', 'धर्म', 'लोभ', 'पाप', 'क्रोध', 'काल', 'क्षमा', 'जीव', 'mercy', 'religion', 'forgiveness'],
    verse: {
      hi: 'जहाँ दया तहाँ धर्म है, जहाँ लोभ तहाँ पाप।\nजहाँ क्रोध तहाँ काल है, जहाँ क्षमा तहाँ आप॥',
      pb: 'ਜਹਾਂ ਦਇਆ ਤਹਾਂ ਧਰਮ ਹੈ, ਜਹਾਂ ਲੋਭ ਤਹਾਂ ਪਾਪ।\nਜਹਾਂ ਕ੍ਰੋਧ ਤਹਾਂ ਕਾਲ ਹੈ, ਜਹਾਂ ਖਿਮਾ ਤਹਾਂ ਆਪ॥',
      en: 'Wherever compassion lives, there dwells true Religion; where greed rules, there stands sin;\nWhere anger burns, spiritual death waits; where forgiveness shines, there abides the Lord.'
    },
    bhavarth: {
      hi: 'सच्चा धर्म किसी बाहरी कर्मकांड में नहीं, बल्कि प्रत्येक प्राणी के प्रति दया, क्षमा और प्रेम रखने में है; क्रोध और लोभ धर्म के सबसे बड़े शत्रु हैं।',
      pb: 'ਸੱਚਾ ਧਰਮ ਕਿਸੇ ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਜੀਵ ਪ੍ਰਤੀ ਦਇਆ, ਖਿਮਾ ਅਤੇ ਪ੍ਰੇਮ ਰੱਖਣ ਵਿੱਚ ਹੈ; ਕ੍ਰੋਧ ਤੇ ਲੋਭ ਧਰਮ ਦੇ ਵੱਡੇ ਵੈਰੀ ਹਨ।',
      en: 'Authentic spirituality is defined by living mercy and forgiveness, never by greed or anger.'
    },
    themeEssence: {
      hi: 'दया को ही धर्म और क्षमा को प्रभु-निवास मानने',
      pb: 'ਦਇਆ ਨੂੰ ਹੀ ਧਰਮ ਅਤੇ ਖਿਮਾ ਨੂੰ ਪ੍ਰਭੂ-ਨਿਵਾਸ ਮੰਨਣ',
      en: 'compassion as true dharma and forgiveness as divine presence'
    }
  },

  // --- 11. YOGA, GYANGUDRI & SURAT SHABAD ---
  {
    id: 'bijak-yoga-1',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • ज्ञान गुदड़ी व अनहद अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਗਿਆਨ ਗੁਦੜੀ ਤੇ ਅਨਹਦ ਅੰਗ',
      en: 'Kabir Bijak • Gyan Gudri & Anhad Ang'
    },
    themes: ['yoga-realization'],
    keywords: ['हद', 'बेहद', 'सूरत', 'सुरति', 'निरति', 'साध', 'अगम', 'मकान', 'boundary', 'boundless', 'surat'],
    verse: {
      hi: 'हद में चलें सो मानवा, बेहद चलें सो साध।\nहद बेहद दोनों तजे, ताका मता अगाध॥',
      pb: 'ਹਦ ਮਹਿ ਚਲੈ ਸੋ ਮਾਨਵਾ, ਬੇਹਦ ਚਲੈ ਸੋ ਸਾਧ।\nਹਦ ਬੇਹਦ ਦੋਨੋਂ ਤਜੈ, ਤਾਕਾ ਮਤਾ ਅਗਾਧ॥',
      en: 'Those who walk within ordinary boundaries are mortal beings; those who venture into the Boundless are true Saints;\nThose who transcend both limited and limitless duality attain fathomless spiritual depth.'
    },
    bhavarth: {
      hi: 'सामान्य लोग संसार की सीमाओं तक सीमित रहते हैं, किंतु आध्यात्मिक साधक सूरत-शब्द योग के माध्यम से स्थूल सीमाओं से पार अनहद असीम तत्त्व का अनुभव करते हैं।',
      pb: 'ਆਮ ਲੋਕ ਸੰਸਾਰ ਦੀਆਂ ਹੱਦਾਂ ਵਿੱਚ ਬੱਝੇ ਰਹਿੰਦੇ ਹਨ, ਪਰ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਦੇ ਸਾਧਕ ਸਾਰੀਆਂ ਸੀਮਾਵਾਂ ਤੋਂ ਪਾਰ ਬੇਹੱਦ ਸੱਚ ਦਾ ਅਨੁਭਵ ਕਰਦੇ ਹਨ।',
      en: 'True Saints transcend ordinary mental boundaries through inner absorption into the Infinite.'
    },
    themeEssence: {
      hi: 'सीमित मानसिक दायरों से पार ‘बेहद’ आत्म-चेतना में प्रवेश',
      pb: 'ਸੀਮਤ ਮਾਨਸਿਕ ਹੱਦਾਂ ਤੋਂ ਪਾਰ ‘ਬੇਹੱਦ’ ਆਤਮ-ਚੇਤਨਾ ਵਿੱਚ ਪ੍ਰਵੇਸ਼',
      en: 'rising beyond limited worldly perception into boundless inner consciousness'
    }
  },
  {
    id: 'bijak-yoga-2',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • आत्म-बोध व सार शब्द अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਆਤਮ-ਬੋਧ ਤੇ ਸਾਰ ਸ਼ਬਦ ਅੰਗ',
      en: 'Kabir Bijak • Atma-Bodh & Shabad Ang'
    },
    themes: ['yoga-realization', 'naam'],
    keywords: ['मोको', 'कहाँ', 'ढूँढे', 'पास', 'देवल', 'मस्जिद', 'खोज', 'सांस', 'seek', 'temple', 'breath'],
    verse: {
      hi: 'मोको कहाँ ढूँढे बंदे, मैं तो तेरे पास में।\nना मैं देवल ना मैं मस्जिद, ना काबे कैलास में॥',
      pb: 'ਮੋਕੋ ਕਹਾਂ ਢੂੰਢੇ ਬੰਦੇ, ਮੈਂ ਤੋ ਤੇਰੇ ਪਾਸ ਮਹਿ।\nਨਾ ਮੈਂ ਦੇਵਲ ਨਾ ਮੈਂ ਮਸਜਿਦ, ਨਾ ਕਾਬੇ ਕੈਲਾਸ ਮਹਿ॥',
      en: 'O seeker, where do you wander searching for Me? Behold, I am right beside you;\nI abide neither in stone temples nor distant shrines, but in the pure breath of sincerity.'
    },
    bhavarth: {
      hi: 'परमात्मा किसी एक स्थान, मंदिर या बाहरी तीर्थ में कैद नहीं हैं; वे प्रत्येक खोजने वाले के अपने ही हृदय और श्वासों में सदा उपस्थित हैं।',
      pb: 'ਪਰਮਾਤਮਾ ਕਿਸੇ ਇੱਕ ਮੰਦਰ, ਮਸਜਿਦ ਜਾਂ ਬਾਹਰੀ ਤੀਰਥ ਵਿੱਚ ਕੈਦ ਨਹੀਂ ਹਨ; ਉਹ ਹਰ ਖੋਜੀ ਦੇ ਆਪਣੇ ਹੀ ਹਿਰਦੇ ਅਤੇ ਸੁਆਸਾਂ ਵਿੱਚ ਸਦਾ ਮੌਜੂਦ ਹਨ।',
      en: 'The Beloved is never confined to distant stone monuments; Truth abides intimately within every seeking breath.'
    },
    themeEssence: {
      hi: 'बाहर भटकने के बजाय अपने ही अंतःकरण में साहेब की अनुभूति',
      pb: 'ਬਾਹਰ ਭਟਕਣ ਦੀ ਥਾਂ ਆਪਣੇ ਹੀ ਅੰਦਰ ਪ੍ਰਭੂ ਦੀ ਅਨੁਭੂਤੀ',
      en: 'discovering the Indwelling Presence inside rather than distant landmarks'
    }
  },
  {
    id: 'bijak-yoga-3',
    tradition: 'bijak',
    angOrSection: {
      hi: 'कबीर बीजक • हंस व अमरलोक अंग',
      pb: 'ਕਬੀਰ ਬੀਜਕ • ਹੰਸ ਤੇ ਅਮਰਲੋਕ ਅੰਗ',
      en: 'Kabir Bijak • Hans & Amarlok Ang'
    },
    themes: ['yoga-realization', 'guru'],
    keywords: ['पूरन', 'मनोरथ', 'हंस', 'अमरलोक', 'नीर', 'क्षीर', 'विवेक', 'सरोवर', 'swan', 'immortal', 'milk'],
    verse: {
      hi: 'हंसा तो मोती चुगै, मानसरोवर माहिं।\nऊँची उड़ान गगन में, विषै कीचर नहिं जाहिं॥',
      pb: 'ਹੰਸਾ ਤੋ ਮੋਤੀ ਚੁਗੈ, ਮਾਨਸਰੋਵਰ ਮਾਹਿ।\nਊਂਚੀ ਉਡਾਨ ਗਗਨ ਮਹਿ, ਵਿਸ਼ੈ ਕੀਚੜ ਨਹਿ ਜਾਹਿ॥',
      en: 'The awakened Hans-soul gathers radiant pearls of wisdom at the inner Mansarovar lake;\nSoaring gracefully into the inner sky, it never descends into worldly mire.'
    },
    bhavarth: {
      hi: 'जाग्रत आत्मा (हंस) नीर-क्षीर विवेक से संसार के कीचड़ में नहीं उलझती, बल्कि सतगुरु की कृपा से आंतरिक मानसरोवर में सत्यनाम रूपी मोती चुगती हुई अमरलोक की ओर अग्रसर होती है।',
      pb: 'ਜਾਗ੍ਰਿਤ ਆਤਮਾ (ਹੰਸ) ਸੱਚ-ਝੂਠ ਦੇ ਵਿਵੇਕ ਨਾਲ ਸੰਸਾਰ ਦੇ ਚਿੱਕੜ ਵਿੱਚ ਨਹੀਂ ਫਸਦੀ, ਸਗੋਂ ਅੰਦਰੂਨੀ ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਸਤਯਨਾਮ ਦੇ ਮੋਤੀ ਚੁਗਦੀ ਹੈ।',
      en: 'An awakened soul exercises Hans-discernment, nourishing itself on pure wisdom and rising above worldly distraction.'
    },
    themeEssence: {
      hi: 'हंस-विवेक द्वारा संसार के कीचड़ से ऊपर अमरलोक की ओर प्रस्थान',
      pb: 'ਹੰਸ-ਵਿਵੇਕ ਨਾਲ ਸੰਸਾਰ ਦੇ ਮੋਹ ਤੋਂ ਉੱਪਰ ਅਮਰਲੋਕ ਵੱਲ ਉਡਾਰੀ',
      en: 'spiritual discernment soaring like a swan toward the Immortal Abode'
    }
  }
];

/**
 * Authentic Kabir Granthavali (कबीर ग्रंथावली — अंग एवं साखी संग्रह) parallel catalog
 */
export const GRANTHAVALI_CROSS_REF_VAULT: CuratedCrossRefEntry[] = [
  {
    id: 'grantha-shabd-ko-ang-1108',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • शब्द को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਸ਼ਬਦ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Shabd Ko Ang'
    },
    themes: ['yoga-realization', 'naam', 'satya-hypocrisy'],
    themeTags: ['satya-khoj', 'saar-shabd', 'shabd-sadhan', 'shabd-ko-ang'],
    keywords: ['खोजी', 'सार शब्द', 'गहि', 'शब्द', 'सबद', 'बिगोय', 'काल', 'सत्य', 'अन्वेषक', 'truth', 'word', 'seeker', 'saar-shabd'],
    verse: {
      hi: 'सबद सबद बहु अंतरा, सार सबद चित लाय।\nकहैं कबीर जहाँ सार सबद, तहाँ काल न खाय॥',
      pb: 'ਸਬਦ ਸਬਦ ਬਹੁ ਅੰਤਰਾ, ਸਾਰ ਸਬਦ ਚਿਤ ਲਾਇ।\nਕਹੈਂ ਕਬੀਰ ਜਹਾਂ ਸਾਰ ਸਬਦ, ਤਹਾਂ ਕਾਲ ਨ ਖਾਇ॥',
      en: 'There are countless words in this world, yet anchor your consciousness in the Essential Word (Saar-Shabd);\nKabir proclaims: where the Saar-Shabd abides, Kaal (death and time) can never devour the soul.'
    },
    bhavarth: {
      hi: 'संसार में अनेक प्रकार के शब्द और ग्रंथ हैं, किंतु साधक को अपने चित्त को केवल सतगुरु प्रदत्त अविनाशी सार-शब्द में लीन करना चाहिए; क्योंकि जहाँ सार-शब्द का वास होता है, वहाँ काल और माया का प्रभाव समाप्त हो जाता है।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਅਨੇਕਾਂ ਸ਼ਬਦ ਤੇ ਪੁਸਤਕਾਂ ਹਨ, ਪਰ ਸਾਧਕ ਨੂੰ ਆਪਣਾ ਚਿੱਤ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਾਉਣਾ ਚਾਹੀਦਾ ਹੈ; ਜਿੱਥੇ ਸਾਰ-ਸ਼ਬਦ ਦਾ ਵਾਸ ਹੈ, ਉੱਥੇ ਕਾਲ ਤੇ ਮਾਇਆ ਦਾ ਕੋਈ ਜ਼ੋਰ ਨਹੀਂ ਚੱਲਦਾ।',
      en: 'Amid myriad external words and doctrines, anchor awareness exclusively in the Satguru’s living Saar-Shabd; where the Essential Word reigns, the destructive power of Kaal and illusion cannot touch the soul.'
    },
    themeEssence: {
      hi: 'सार-शब्द की पहचान और अंतरंग में शब्द को दृढ़ता से धारण करने',
      pb: 'ਸਾਰ-ਸ਼ਬਦ ਦੀ ਪਛਾਣ ਅਤੇ ਅੰਦਰੂਨੀ ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਧਾਰਨ ਕਰਨ',
      en: 'discerning and anchoring consciousness in the essential Saar-Shabd'
    }
  },
  {
    id: 'grantha-mind-speech-1',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • बचन-विवेक व मधुर वाणी अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਬਚਨ-ਵਿਵੇਕ ਤੇ ਮਧੁਰ ਬਾਣੀ ਅੰਗ',
      en: 'Kabir Granthavali • Vachan-Vivek & Sweet Speech Ang'
    },
    themes: ['mind-speech', 'ego-humility'],
    themeTags: ['sheetal-vani', 'madhur-vachan'],
    keywords: ['मधुर', 'बचन', 'वचन', 'शीतल', 'अहं', 'कटुक', 'रसना', 'बोल', 'sweet', 'speech', 'words'],
    verse: {
      hi: 'मधुर बचन है औषधी, कटुक बचन है तीर।\nश्रवन द्वार ह्वै संचरै, सालै सकल सरीर॥',
      pb: 'ਮਧੁਰ ਬਚਨ ਹੈ ਔਸ਼ਧੀ, ਕਟੁਕ ਬਚਨ ਹੈ ਤੀਰ।\nਸ੍ਰਵਣ ਦੁਆਰ ਹੁਐ ਸੰਚਰੈ, ਸਾਲੈ ਸਕਲ ਸਰੀਰ॥',
      en: 'Gentle words act as healing medicine, whereas harsh words pierce like sharp arrows;\nEntering through the doorway of the ears, bitter speech wounds the entire being.'
    },
    bhavarth: {
      hi: 'शीतल और मधुर वचन टूटे हृदयों को जोड़ने की औषधि हैं, जबकि अहंकार से निकले कटु वचन बाण के समान भीतर तक पीड़ा पहुँचाते हैं। अतः साधक को अपनी वाणी सदा संयत व मधुर रखनी चाहिए।',
      pb: 'ਸ਼ੀਤਲ ਤੇ ਮਿੱਠੇ ਬੋਲ ਟੁੱਟੇ ਦਿਲਾਂ ਨੂੰ ਜੋੜਨ ਦੀ ਦਵਾਈ ਹਨ, ਜਦੋਂ ਕਿ ਹੰਕਾਰ ਭਰੇ ਕੌੜੇ ਬੋਲ ਤੀਰ ਵਾਂਗ ਅੰਦਰ ਤੱਕ ਜ਼ਖ਼ਮੀ ਕਰਦੇ ਹਨ।',
      en: 'Calm, compassionate words heal relationships like medicine, while proud, harsh speech inflicts lasting inner wounds.'
    },
    themeEssence: {
      hi: 'औषधि समान मधुर-शीतल वचन और कटु अहंकारी वाणी के त्याग',
      pb: 'ਦਵਾਈ ਸਮਾਨ ਮਿੱਠੇ-ਸ਼ੀਤਲ ਬਚਨਾਂ ਅਤੇ ਕੌੜੀ ਹੰਕਾਰੀ ਬੋਲੀ ਦੇ ਤਿਆਗ',
      en: 'healing gentle speech versus arrow-like arrogant words'
    }
  },
  {
    id: 'grantha-ego-inner-2',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • विरह व अहं-विसर्जन अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਬਿਰਹਾ ਤੇ ਹੰਕਾਰ-ਤਿਆਗ ਅੰਗ',
      en: 'Kabir Granthavali • Ego-Dissolution & Inner Abode Ang'
    },
    themes: ['ego-humility', 'mind-speech', 'yoga-realization'],
    keywords: ['मैं', 'हरि', 'अहं', 'अहंकार', 'प्रीतम', 'दुसमन', 'माहिं', 'भीतर', 'गली', 'समाहिं', 'ego', 'within', 'beloved'],
    verse: {
      hi: 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं।\nप्रेम गली अति सांकरी, ता में दो न समाहिं॥',
      pb: 'ਜਬ ਮੈਂ ਥਾ ਤਬ ਹਰਿ ਨਹੀਂ, ਅਬ ਹਰਿ ਹੈਂ ਮੈਂ ਨਾਹਿਂ।\nਪ੍ਰੇਮ ਗਲੀ ਅਤਿ ਸਾਂਕਰੀ, ਤਾ ਮੇਂ ਦੋ ਨ ਸਮਾਹਿਂ॥',
      en: 'When "I" (ego) was present, the Beloved Hari was not seen; now Hari shines and "I" am gone.\nThe lane of divine love is exceedingly narrow—it cannot hold both ego and Truth together.'
    },
    bhavarth: {
      hi: 'जीव के अपने ही घट में परमात्मा भी हैं और अहंकार रूपी शत्रु भी; किंतु दोनों एक साथ नहीं रह सकते। जब ‘मैं’ और अभिमान मिटता है, तभी भीतर बसे प्रीतम का साक्षात्कार होता है।',
      pb: 'ਜੀਵ ਦੇ ਆਪਣੇ ਹੀ ਘਟ ਵਿੱਚ ਪਰਮਾਤਮਾ ਵੀ ਹਨ ਅਤੇ ਹੰਕਾਰ ਰੂਪੀ ਦੁਸ਼ਮਣ ਵੀ; ਪਰ ਦੋਵੇਂ ਇਕੱਠੇ ਨਹੀਂ ਰਹਿ ਸਕਦੇ। ਜਦੋਂ "ਮੈਂ" ਮਿਟਦੀ ਹੈ, ਤਦ ਹੀ ਅੰਦਰਲੇ ਪ੍ਰੀਤਮ ਦਾ ਮਿਲਾਪ ਹੁੰਦਾ ਹੈ।',
      en: 'Both ego and the Beloved cannot reign inside the heart simultaneously; dissolving pride unveils the Divine Friend already within.'
    },
    themeEssence: {
      hi: 'भीतर के ‘मैं’ (अहं-शत्रु) के मिटने पर अंतर्यामी प्रीतम के प्रकट होने',
      pb: 'ਅੰਦਰਲੇ ‘ਮੈਂ’ (ਹੰਕਾਰ-ਦੁਸ਼ਮਣ) ਦੇ ਮਿਟਣ ਨਾਲ ਅੰਤਰਜਾਮੀ ਪ੍ਰੀਤਮ ਦੇ ਪ੍ਰਗਟ ਹੋਣ',
      en: 'dissolving the inner enemy of ego so the Beloved shines within'
    }
  },
  {
    id: 'grantha-guru-3',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • गुरुदेव को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Gurudev Ko Ang'
    },
    themes: ['guru'],
    keywords: ['गुरु', 'सतगुरु', 'बीन', 'शब्द', 'बाण', 'दीया', 'चाँदना', 'अँधेरा', 'guru', 'light', 'darkness'],
    verse: {
      hi: 'सतगुरु की महिमा अनंत, अनंत किया उपगार।\nलोचन अनंत उघाड़िया, अनंत दिखावणहार॥',
      pb: 'ਸਤਿਗੁਰੂ ਕੀ ਮਹਿਮਾ ਅਨੰਤ, ਅਨੰਤ ਕੀਆ ਉਪਗਾਰ।\nਲੋਚਨ ਅਨੰਤ ਉਘਾੜਿਆ, ਅਨੰਤ ਦਿਖਾਵਣਹਾਰ॥',
      en: 'Infinite is the glory of the True Guru, infinite His selfless compassion;\nHe opens the infinite inner eye of wisdom and reveals the Limitless Truth.'
    },
    bhavarth: {
      hi: 'पूर्ण सतगुरु की कृपा की कोई सीमा नहीं है; वे शिष्य की बंद अंतर्दृष्टि खोलकर उसे घट के भीतर अनंत परमात्म-तत्त्व का प्रत्यक्ष दर्शन करा देते हैं।',
      pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਬੇਅੰਤ ਹੈ; ਉਹ ਸਾਧਕ ਦੀ ਅੰਦਰੂਨੀ ਦ੍ਰਿਸ਼ਟੀ ਖੋਲ੍ਹ ਕੇ ਅਨੰਤ ਸੱਚ ਦੇ ਦਰਸ਼ਨ ਕਰਵਾ ਦਿੰਦੇ ਹਨ।',
      en: 'The True Guru awakens boundless inner vision, unveiling eternal Reality directly inside the seeker.'
    },
    themeEssence: {
      hi: 'सतगुरु के अनंत उपकार और दिव्य ज्ञान-चक्षु खुलने',
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਅਨੰਤ ਉਪਕਾਰ ਅਤੇ ਗਿਆਨ-ਨੇਤਰ ਖੁੱਲ੍ਹਣ',
      en: 'the Satguru opening infinite spiritual sight within'
    }
  },
  {
    id: 'grantha-naam-4',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • सुमिरन को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਸਿਮਰਨ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Sumiran Ko Ang'
    },
    themes: ['naam', 'yoga-realization'],
    keywords: ['सुमिरन', 'नाम', 'भक्ति', 'सूरति', 'तार', 'अजपा', 'स्वास', 'बंसी', 'simran', 'naam', 'remembrance'],
    verse: {
      hi: 'सुमिरन मारग सहज का, सतगुरु दिया बताय।\nस्वांस-स्वांस जो सुमिरता, एक दिन मिलसी आय॥',
      pb: 'ਸਿਮਰਨ ਮਾਰਗ ਸਹਿਜ ਕਾ, ਸਤਿਗੁਰੂ ਦੀਆ ਬਤਾਇ।\nਸੁਆਸ-ਸੁਆਸ ਜੋ ਸਿਮਰਤਾ, ਇਕ ਦਿਨ ਮਿਲਸੀ ਆਇ॥',
      en: 'The Satguru has revealed the natural, effortless path of Naam remembrance;\nWhoever remembers with every breath inevitably meets the Beloved Truth.'
    },
    bhavarth: {
      hi: 'सत्यनाम सुमिरन कोई कठिन बाह्य कष्ट नहीं, बल्कि हर आती-जाती श्वास में सतगुरु के पावन नाम का सहज स्मरण है जो जीव को परमात्मा से मिला देता है।',
      pb: 'ਸਤਯਨਾਮ ਸਿਮਰਨ ਕੋਈ ਔਖਾ ਬਾਹਰੀ ਕਸ਼ਟ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਸੁਆਸ ਵਿੱਚ ਸਹਿਜ ਸਿਮਰਨ ਹੈ ਜੋ ਜੀਵ ਨੂੰ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾ ਦਿੰਦਾ ਹੈ।',
      en: 'Breath-borne Simran is the effortless bridge uniting daily consciousness with the Supreme.'
    },
    themeEssence: {
      hi: 'हर श्वास में सहज सत्यनाम सुमिरन की अविरल धारा',
      pb: 'ਹਰ ਸੁਆਸ ਵਿੱਚ ਸਹਿਜ ਸਤਯਨਾਮ ਸਿਮਰਨ ਦੀ ਨਿਰੰਤਰ ਧਾਰਾ',
      en: 'effortless breath-by-breath remembrance of Satyanaam'
    }
  },
  {
    id: 'grantha-chetavani-5',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • चेतावनी को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Chetavani Ko Ang'
    },
    themes: ['chetavani', 'maya'],
    keywords: ['काल', 'आज', 'कल', 'अवसर', 'मरना', 'माटी', 'देह', 'चिता', 'समय', 'death', 'time', 'tomorrow'],
    verse: {
      hi: 'काल्ह करै सो आज कर, आज करै सो अब।\nपल में परलै होयगी, बहुरि करैगो कब॥',
      pb: 'ਕਾਲ੍ਹ ਕਰੈ ਸੋ ਆਜ ਕਰ, ਆਜ ਕਰੈ ਸੋ ਅਬ।\nਪਲ ਮੇਂ ਪਰਲੈ ਹੋਇਗੀ, ਬਹੁਰਿ ਕਰੈਗੋ ਕਬ॥',
      en: 'What you plan for tomorrow, do today; what you intend today, accomplish right now;\nIn a single fleeting moment the world transforms—when else will you awaken?'
    },
    bhavarth: {
      hi: 'सत्यनाम भक्ति और शुभ कर्म को कभी कल पर नहीं टालना चाहिए; जीवन का क्षण अनिश्चित है, अतः इसी पल से जागरूक होकर साधना आरंभ करनी चाहिए।',
      pb: 'ਨਾਮ ਸਿਮਰਨ ਅਤੇ ਭਲਾਈ ਦੇ ਕੰਮ ਨੂੰ ਕਦੇ ਕੱਲ੍ਹ ਉੱਤੇ ਨਹੀਂ ਟਾਲਣਾ ਚਾਹੀਦਾ; ਜੀਵਨ ਦਾ ਭਰੋਸਾ ਨਹੀਂ, ਇਸ ਲਈ ਇਸੇ ਪਲ ਜਾਗ੍ਰਿਤ ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
      en: 'Spiritual awakening cannot be postponed until tomorrow; cherish the present breath for Truth.'
    },
    themeEssence: {
      hi: 'समय के अमूल्य मूल्य और तत्काल आत्म-जागरण',
      pb: 'ਸਮੇਂ ਦੀ ਅਨਮੋਲ ਕਦਰ ਅਤੇ ਤੁਰੰਤ ਆਤਮ-ਜਾਗ੍ਰਿਤੀ',
      en: 'urgency of awakening in the present moment without delay'
    }
  },
  {
    id: 'grantha-maya-6',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • माया को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਮਾਇਆ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Maya Ko Ang'
    },
    themes: ['maya'],
    keywords: ['माया', 'तृष्णा', 'धन', 'कंचन', 'मोह', 'पाप', 'लोभ', 'चाह', 'greed', 'desire', 'illusion'],
    verse: {
      hi: 'माया छाया एक सी, बिरला जाने कोय।\nभगता के पीछे फिरै, सनमुख भागे सोय॥',
      pb: 'ਮਾਇਆ ਛਾਇਆ ਏਕ ਸੀ, ਬਿਰਲਾ ਜਾਨੈ ਕੋਇ।\nਭਗਤਾ ਕੇ ਪੀਛੇ ਫਿਰੈ, ਸਨਮੁਖ ਭਾਗੈ ਸੋਇ॥',
      en: 'Worldly illusion behaves just like one’s own shadow—few understand its secret;\nChase it headlong and it flees ahead of you; walk toward Truth and it follows silently behind.'
    },
    bhavarth: {
      hi: 'जिस प्रकार छाया को पकड़ने दौड़ने पर वह दूर भागती है, उसी प्रकार तृष्णा के पीछे भागने से शांति नहीं मिलती; जो परमात्मा की ओर चलता है, माया स्वतः उसकी दासी बन जाती है।',
      pb: 'ਜਿਵੇਂ ਪਰਛਾਵੇਂ ਨੂੰ ਫੜਨ ਦੌੜਨ ਤੇ ਉਹ ਅੱਗੇ ਭੱਜਦਾ ਹੈ, ਤਿਵੇਂ ਮਾਇਆ ਪਿੱਛੇ ਭੱਜਣ ਨਾਲ ਸ਼ਾਂਤੀ ਨਹੀਂ ਮਿਲਦੀ; ਜੋ ਪ੍ਰਭੂ ਵੱਲ ਤੁਰਦਾ ਹੈ, ਸੰਸਾਰਿਕ ਪ੍ਰਬੰਧ ਆਪ ਸਹੀ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'Like chasing a shadow, pursuing greed endlessly brings fatigue; turning toward Truth puts worldly needs in harmony.'
    },
    themeEssence: {
      hi: 'माया रूपी छाया से निर्लिप्त होकर सत्य की ओर बढ़ने',
      pb: 'ਮਾਇਆ ਰੂਪੀ ਪਰਛਾਵੇਂ ਤੋਂ ਨਿਰਲੇਪ ਹੋ ਕੇ ਸੱਚ ਵੱਲ ਵਧਣ',
      en: 'seeing Maya as a fleeting shadow and walking toward Truth'
    }
  },
  {
    id: 'grantha-satya-7',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • सांच को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਸਾਂਚ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Sanch Ko Ang (Truthfulness)'
    },
    themes: ['satya-hypocrisy'],
    keywords: ['साँच', 'सांच', 'सत्य', 'झूठ', 'तप', 'हृदय', 'पाखंड', 'truth', 'honesty', 'hypocrisy'],
    verse: {
      hi: 'साँच बराबर तप नहीं, झूठ बराबर पाप।\nजाके हिरदै साँच है, ताके हिरदै आप॥',
      pb: 'ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ, ਝੂਠ ਬਰਾਬਰ ਪਾਪ।\nਜਾਕੇ ਹਿਰਦੈ ਸਾਂਚ ਹੈ, ਤਾਕੇ ਹਿਰਦੈ ਆਪ॥',
      en: 'No austerity equals living Truth; no darkness equals deceit.\nIn whose heart Truth abides purely, there dwells the Supreme Master Himself.'
    },
    bhavarth: {
      hi: 'बाहरी कष्टदायक तपस्याओं की अपेक्षा मन, वचन और कर्म की सच्चाई ही सबसे बड़ा तप है; निष्कपट सच्चे हृदय में परमात्मा स्वयं निवास करते हैं।',
      pb: 'ਬਾਹਰੀ ਤਪੱਸਿਆਵਾਂ ਨਾਲੋਂ ਮਨ, ਬਚਨ ਤੇ ਕਰਮ ਦੀ ਸੱਚਾਈ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਤਪ ਹੈ; ਨਿਰਛਲ ਸੱਚੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਆਪ ਵਸਦੇ ਹਨ।',
      en: 'Integrity of heart surpasses every outer penance; Truth opens the inner temple to Divine Presence.'
    },
    themeEssence: {
      hi: 'सर्वोच्च तप रूपी सत्य और अंतःकरण की निश्छलता',
      pb: 'ਸਰਵਉੱਚ ਤਪ ਰੂਪੀ ਸੱਚਾਈ ਅਤੇ ਹਿਰਦੇ ਦੀ ਨਿਰਛਲਤਾ',
      en: 'honesty and inner truth as the highest spiritual discipline'
    }
  },
  {
    id: 'grantha-satsang-8',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • साधु को अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਸਾਧੂ ਕੋ ਅੰਗ',
      en: 'Kabir Granthavali • Sadhu Ko Ang (Saintly Virtue)'
    },
    themes: ['satsang-sadhu', 'mind-speech'],
    keywords: ['साधु', 'संत', 'सूप', 'सार', 'थोंथा', 'संगति', 'सत्संग', 'saint', 'virtue', 'satsang'],
    verse: {
      hi: 'साधू ऐसा चाहिए, जैसा सूप सुभाय।\nसार-सार को गहि रहै, थोथा देई उड़ाय॥',
      pb: 'ਸਾਧੂ ਐਸਾ ਚਾਹੀਐ, ਜੈਸਾ ਸੂਪ ਸੁਭਾਇ।\nਸਾਰ-ਸਾਰ ਕਉ ਗਹਿ ਰਹੈ, ਥੋਥਾ ਦੇਈ ਉਡਾਇ॥',
      en: 'A true seeker should possess the serene nature of a winnowing basket:\nRetaining the nourishing grain of wisdom and gently letting empty chaff blow away.'
    },
    bhavarth: {
      hi: 'विवेकशील साधक सूप की तरह दूसरों के सद्गुण और सत्य के सार को ग्रहण करता है तथा निंदा-ईर्ष्या रूपी व्यर्थ भूसे को मन से बाहर उड़ा देता है।',
      pb: 'ਵਿਵੇਕਸ਼ੀਲ ਸਾਧਕ ਛੱਜ ਵਾਂਗ ਸੱਚ ਦੇ ਸਾਰ ਅਤੇ ਗੁਣਾਂ ਨੂੰ ਸੰਭਾਲ ਲੈਂਦਾ ਹੈ ਅਤੇ ਬੇਅਰਥ ਨਿੰਦਾ-ਬੁਰਾਈ ਨੂੰ ਉਡਾ ਦਿੰਦਾ ਹੈ।',
      en: 'True discernment retains spiritual substance and lets trivial gossip and negativity drift away.'
    },
    themeEssence: {
      hi: 'सूप समान सारग्राही विवेक और संत-स्वभाव',
      pb: 'ਛੱਜ ਸਮਾਨ ਸਾਰਗ੍ਰਾਹੀ ਵਿਵੇਕ ਅਤੇ ਸੰਤ-ਸੁਭਾਅ',
      en: 'discerning wisdom that keeps spiritual essence and drops trivia'
    }
  },
  {
    id: 'grantha-prem-9',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • प्रेम-भक्ति अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਪ੍ਰੇਮ-ਭਗਤੀ ਅੰਗ',
      en: 'Kabir Granthavali • Prem-Bhakti Ang'
    },
    themes: ['prem-bhakti', 'satya-hypocrisy'],
    keywords: ['पोथी', 'पढ़ि', 'ढाई', 'आखर', 'प्रेम', 'पंडित', 'ज्ञान', 'love', 'books', 'scholar'],
    verse: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ॥',
      en: 'The world exhausts itself reading endless volumes yet finds no true wisdom;\nWhoever masters the brief two-and-a-half letters of pure Love becomes genuinely wise.'
    },
    bhavarth: {
      hi: 'अहंकार बढ़ाने वाले कोरे किताबी ज्ञान से आत्म-साक्षात्कार नहीं होता; सब प्राणियों और सतगुरु से निश्छल प्रेम व करुणा का अनुभव ही वास्तविक ज्ञान है।',
      pb: 'ਹੰਕਾਰ ਵਧਾਉਣ ਵਾਲੇ ਕੋਰੇ ਕਿਤਾਬੀ ਗਿਆਨ ਨਾਲ ਆਤਮ-ਬੋਧ ਨਹੀਂ ਹੁੰਦਾ; ਸਗੋਂ ਸੱਚੇ ਪ੍ਰੇਮ ਤੇ ਦਇਆ ਦਾ ਅਨੁਭਵ ਹੀ ਅਸਲੀ ਗਿਆਨ ਹੈ।',
      en: 'Real wisdom is lived love and compassion, never dry bookish pride.'
    },
    themeEssence: {
      hi: 'कोरे पांडित्य से परे निष्कपट प्रेम-भक्ति की श्रेष्ठता',
      pb: 'ਕੋਰੀ ਵਿਦਵਤਾ ਤੋਂ ਪਰੇ ਨਿਰਛਲ ਪ੍ਰੇਮ-ਭਗਤੀ ਦੀ ਸ਼੍ਰੇਸ਼ਠਤਾ',
      en: 'living love surpassing dry scholarly accumulation'
    }
  },
  {
    id: 'grantha-daya-10',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • दया व समदृष्टि अंग',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਦਇਆ ਤੇ ਸਮਦ੍ਰਿਸ਼ਟੀ ਅੰਗ',
      en: 'Kabir Granthavali • Daya & Samadrishti Ang'
    },
    themes: ['compassion-service'],
    keywords: ['रहे', 'बुरा', 'भला', 'नदियाँ', 'वृक्ष', 'दया', 'क्षमा', 'सेवा', 'परोपकार', 'mercy', 'tree', 'good'],
    verse: {
      hi: 'रूखा सूखा खाय के, ठंडा पानी पीव।\nदेखि पराई चूपड़ी, मत ललचावै जीव॥',
      pb: 'ਰੂਖਾ ਸੂਖਾ ਖਾਇ ਕੇ, ਠੰਢਾ ਪਾਨੀ ਪੀਵ।\nਦੇਖਿ ਪਰਾਈ ਚੂਪੜੀ, ਮਤ ਲਲਚਾਵੈ ਜੀਵ॥',
      en: 'Eat your simple, honest bread peacefully and drink cool water with gratitude;\nBeholding another’s buttered feast, never let envy or greed stir your soul.'
    },
    bhavarth: {
      hi: 'संतोष, ईमानदारी की सादा जीविका और दूसरों के सुख को देखकर ईर्ष्या न करना—यही समता, करुणा और मानसिक शांति का सच्चा आधार है।',
      pb: 'ਸੰਤੋਖ, ਹੱਕ-ਹਲਾਲ ਦੀ ਸਾਦੀ ਕਮਾਈ ਅਤੇ ਦੂਜਿਆਂ ਦਾ ਸੁੱਖ ਦੇਖ ਕੇ ਈਰਖਾ ਨਾ ਕਰਨਾ ਹੀ ਸ਼ਾਂਤੀ ਤੇ ਦਇਆ ਦਾ ਆਧਾਰ ਹੈ।',
      en: 'Grateful simplicity and freedom from envy nourish peace and compassionate goodwill.'
    },
    themeEssence: {
      hi: 'सादा ईमानदार जीवन, संतोष और ईर्ष्या-रहित समभाव',
      pb: 'ਸਾਦਾ ਇਮਾਨਦਾਰ ਜੀਵਨ, ਸੰਤੋਖ ਅਤੇ ਈਰਖਾ-ਰਹਿਤ ਸਮਭਾਵ',
      en: 'contentment with honest simplicity and freedom from envy'
    }
  },
  {
    id: 'grantha-yoga-11',
    tradition: 'granthavali',
    angOrSection: {
      hi: 'कबीर ग्रंथावली • परचै को अंग (घट-अंतर दर्शन)',
      pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ • ਪਰਚੈ ਕੋ ਅੰਗ (ਘਟ-ਅੰਤਰ ਦਰਸ਼ਨ)',
      en: 'Kabir Granthavali • Parchai Ko Ang (Inner Realization)'
    },
    themes: ['yoga-realization', 'ego-humility'],
    keywords: ['नैनन', 'अंतर', 'आव', 'प्रीतम', 'घट', 'भीतर', 'सुरति', 'दर्पण', 'अनहद', 'eyes', 'within', 'mirror'],
    verse: {
      hi: 'नैनन की करि कोठरी, पुतली पलंग बिछाय।\nपलकों की चिक डारि के, पिय को लियौ रिझाय॥',
      pb: 'ਨੈਨਨ ਕੀ ਕਰਿ ਕੋਠਰੀ, ਪੁਤਲੀ ਪਲੰਗ ਬਛਾਇ।\nਪਲਕਾਂ ਕੀ ਚਿਕ ਡਾਰਿ ਕੇ, ਪਿਯ ਕਉ ਲੀਓ ਰਿਝਾਇ॥',
      en: 'Making the inner eyes a quiet sanctuary and spreading focus as the seat,\nDrawing the veil of stillness over the eyelids, the soul delights the Beloved within.'
    },
    bhavarth: {
      hi: 'बाहर भटकती दृष्टियों को भीतर मोड़कर जब साधक अपनी सुरति को शांत अंतर्मन में एकाग्र करता है, तब भीतर विराजमान प्रीतम साहेब स्वतः प्रसन्न होकर प्रकट होते हैं।',
      pb: 'ਬਾਹਰ ਭਟਕਦੀਆਂ ਨਜ਼ਰਾਂ ਨੂੰ ਅੰਦਰ ਮੋੜ ਕੇ ਜਦੋਂ ਸਾਧਕ ਸੁਰਤ ਨੂੰ ਸ਼ਾਂਤ ਹਿਰਦੇ ਵਿੱਚ ਟਿਕਾਉਂਦਾ ਹੈ, ਤਾਂ ਅੰਦਰ ਵਸਦੇ ਪ੍ਰੀਤਮ ਆਪ ਪ੍ਰਗਟ ਹੁੰਦੇ ਹਨ।',
      en: 'Turning the senses inward in silent meditation turns the heart into a sanctuary where the Beloved reveals Himself.'
    },
    themeEssence: {
      hi: 'अंतर्मुखी ध्यान द्वारा घट के भीतर प्रीतम-मिलन',
      pb: 'ਅੰਤਰਮੁਖੀ ਧਿਆਨ ਰਾਹੀਂ ਘਟ ਦੇ ਅੰਦਰ ਪ੍ਰੀਤਮ-ਮਿਲਾਪ',
      en: 'turning attention inward to commune with the Beloved in silence'
    }
  }
];

/**
 * Authentic Kabir Sagar / Anurag Sagar / Bodh Sagar (कबीर सागर) parallel catalog
 */
export const KABIR_SAGAR_CROSS_REF_VAULT: CuratedCrossRefEntry[] = [
  {
    id: 'sagar-speech-ego-1',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर (बोध सागर) • अमृत वाणी व निरहंकार संवाद',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਬੋਧ ਸਾਗਰ) • ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਤੇ ਨਿਰਹੰਕਾਰ ਸੰਵਾਦ',
      en: 'Kabir Sagar (Bodh Sagar) • Discourse on Cooling Speech & Inner Beloved'
    },
    themes: ['mind-speech', 'ego-humility', 'yoga-realization'],
    keywords: ['शीतल', 'शब्द', 'अहं', 'बचन', 'वचन', 'बानी', 'वाणी', 'प्रीतम', 'दुसमन', 'माहिं', 'घट', 'speech', 'ego', 'enemy', 'within'],
    verse: {
      hi: 'बचन संभालि के बोलिये, तजि अभिमान विकार।\nघट ही भीतर पीव हैं, घट ही काल दुवार॥',
      pb: 'ਬਚਨ ਸੰਭਾਲਿ ਕੇ ਬੋਲੀਐ, ਤਜਿ ਅਭਿਮਾਨ ਵਿਕਾਰ।\nਘਟ ਹੀ ਭੀਤਰ ਪੀਵ ਹੈਂ, ਘਟ ਹੀ ਕਾਲ ਦੁਆਰ॥',
      en: 'Guard every spoken word with care, shedding the blemish of arrogance;\nInside this very body-vessel abides the Beloved—and inside it too lurks the gate of egoic illusion.'
    },
    bhavarth: {
      hi: 'कबीर सागर में सतगुरु स्पष्ट करते हैं कि अमृत समान प्रियतम (सतपुरुष) भी जीव के घट में विराजमान हैं और अहंकार व क्रोध रूपी काल-शत्रु भी भीतर ही घात लगाए बैठा है; संयमित शीतल वाणी से ही भीतर शांति सधती है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ ਵਿੱਚ ਸਤਿਗੁਰੂ ਸਪੱਸ਼ਟ ਕਰਦੇ ਹਨ ਕਿ ਅੰਮ੍ਰਿਤ ਰੂਪ ਪ੍ਰੀਤਮ ਵੀ ਘਟ ਦੇ ਅੰਦਰ ਹਨ ਅਤੇ ਹੰਕਾਰ ਤੇ ਕ੍ਰੋਧ ਰੂਪੀ ਦੁਸ਼ਮਣ ਵੀ ਅੰਦਰ ਹੀ ਬੈਠਾ ਹੈ; ਸੰਜਮ ਭਰੀ ਸ਼ੀਤਲ ਬਾਣੀ ਨਾਲ ਹੀ ਅੰਦਰ ਸ਼ਾਂਤੀ ਵਸਦੀ ਹੈ।',
      en: 'Kabir Sagar illuminates the inner battlefield: both the Beloved Satpurush and ego’s deluding pull live inside the same human vessel, governed by humble, disciplined speech.'
    },
    themeEssence: {
      hi: 'संयमित-शीतल वचन और घट के भीतर ही प्रीतम व शत्रु के निवास',
      pb: 'ਸੰਜਮ ਭਰੇ ਸ਼ੀਤਲ ਬਚਨ ਅਤੇ ਘਟ ਦੇ ਅੰਦਰ ਹੀ ਪ੍ਰੀਤਮ ਤੇ ਦੁਸ਼ਮਣ ਦੇ ਨਿਵਾਸ',
      en: 'mindful gentle speech and recognizing both enemy and Beloved within'
    }
  },
  {
    id: 'sagar-guru-2',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर (अनुराग सागर) • धर्मदास संवाद व गुरु महिमा',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਅਨੁਰਾਗ ਸਾਗਰ) • ਧਰਮਦਾਸ ਸੰਵਾਦ ਤੇ ਗੁਰੂ ਮਹਿਮਾ',
      en: 'Kabir Sagar (Anurag Sagar) • Kabir–Dharmdas Dialogue on Satguru'
    },
    themes: ['guru', 'naam'],
    keywords: ['गुरु', 'सतगुरु', 'धर्मदास', 'हंस', 'परवाना', 'सारशब्द', 'भ्रम', 'guru', 'satguru', 'grace'],
    verse: {
      hi: 'सतगुरु सम कोइ नहिं हितकारी, काटैं भ्रम भव-फंद अपारी।\nसोहं पार गहै जो बांही, हंस उबारि अमरपुर जांही॥',
      pb: 'ਸਤਿਗੁਰੂ ਸਮ ਕੋਇ ਨਹਿਂ ਹਿਤਕਾਰੀ, ਕਾਟੈਂ ਭ੍ਰਮ ਭਵ-ਫੰਦ ਅਪਾਰੀ।\nਸੋਹੰ ਪਾਰ ਗਹੈ ਜੋ ਬਾਂਹੀ, ਹੰਸ ਉਬਾਰਿ ਅਮਰਪੁਰ ਜਾਂਹੀ॥',
      en: 'None in creation is a greater well-wisher than the True Guru, who severs countless snares of illusion;\nHolding the soul gently by the arm beyond all realms, He carries the awakened Hans to Amarlok.'
    },
    bhavarth: {
      hi: 'धनी धर्मदास जी से संवाद में सतगुरु कबीर साहेब बताते हैं कि जीव के अनंत जन्मों का भ्रम केवल पूर्ण सतगुरु के सार-शब्द और कृपा से ही कटता है।',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਨਾਲ ਸੰਵਾਦ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੀਵ ਦੇ ਭਰਮ ਕੇਵਲ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਸਾਰ-ਸ਼ਬਦ ਨਾਲ ਹੀ ਕੱਟੇ ਜਾਂਦੇ ਹਨ।',
      en: 'Only the Satguru’s living Sar-Shabd severs age-old delusion and escorts the soul homeward.'
    },
    themeEssence: {
      hi: 'धर्मदास संवाद में पूर्ण सतगुरु के जीवोद्धारक स्वरूप',
      pb: 'ਧਰਮਦਾਸ ਸੰਵਾਦ ਵਿੱਚ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਉਧਾਰਕ ਸਰੂਪ',
      en: 'the Satguru’s compassionate grace severing delusion for the soul'
    }
  },
  {
    id: 'sagar-naam-3',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर (ज्ञान प्रकाश बोध) • सार शब्द एवं सत्यनाम महिमा',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਗਿਆਨ ਪ੍ਰਕਾਸ਼ ਬੋਧ) • ਸਾਰ ਸ਼ਬਦ ਤੇ ਸਤਯਨਾਮ ਮਹਿਮਾ',
      en: 'Kabir Sagar • Glory of Sar-Shabd & Satyanaam'
    },
    themes: ['naam', 'yoga-realization', 'satya-hypocrisy'],
    themeTags: ['satya-khoj', 'saar-shabd', 'shabd-sadhan'],
    keywords: ['सार', 'शब्द', 'खोजी', 'सत्यनाम', 'निज', 'नाम', 'सुमिरन', 'सिमरन', 'काल', 'गहि', 'sar', 'shabd', 'naam'],
    verse: {
      hi: 'सार शब्द निज नाम अपारा, ता बिन जीव न उतरै पारा।\nअजर अमर सत्यनाम अधारा, सो सुमिरै उतरे भव-पारा॥',
      pb: 'ਸਾਰ ਸ਼ਬਦ ਨਿਜ ਨਾਮ ਅਪਾਰਾ, ਤਾ ਬਿਨ ਜੀਵ ਨ ਉਤਰੈ ਪਾਰਾ।\nਅਜਰ ਅਮਰ ਸਤਯਨਾਮ ਅਧਾਰਾ, ਸੋ ਸਿਮਰੈ ਉਤਰੇ ਭਵ-ਪਾਰਾ॥',
      en: 'Boundless is the True Essence-Word (Sar-Shabd); without it no soul crosses the ocean of rebirth.\nTaking shelter in the ageless, immortal Satyanaam, one crosses safely beyond illusion.'
    },
    bhavarth: {
      hi: 'कबीर सागर के अनुसार बाहरी जपों से भिन्न अविनाशी सत्यनाम और सार-शब्द का अंतर्मुखी सुमिरन ही जीवात्मा को भवसागर से पार लगाने वाला एकमात्र आधार है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ ਅਵਿਨਾਸ਼ੀ ਸਤਯਨਾਮ ਅਤੇ ਸਾਰ-ਸ਼ਬਦ ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਹੀ ਜੀਵਾਤਮਾ ਨੂੰ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਲਾਉਣ ਦਾ ਆਧਾਰ ਹੈ।',
      en: 'Among all practices, inward remembrance of the imperishable Satyanaam (Sar-Shabd) is the sole anchor of liberation.'
    },
    themeEssence: {
      hi: 'सार-शब्द व सत्यनाम की अद्वितीय मोक्षदायिनी शक्ति',
      pb: 'ਸਾਰ-ਸ਼ਬਦ ਤੇ ਸਤਯਨਾਮ ਦੀ ਅਦੁੱਤੀ ਮੁਕਤੀ-ਸ਼ਕਤੀ',
      en: 'the liberating strength of inward Sar-Shabd and Satyanaam'
    }
  },
  {
    id: 'sagar-chetavani-4',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर • जीव चेतावनी व काया नश्वरता प्रकरण',
      pb: 'ਕਬੀਰ ਸਾਗਰ • ਜੀਵ ਚੇਤਾਵਨੀ ਤੇ ਕਾਇਆ ਨਾਸ਼ਵਾਨਤਾ ਪ੍ਰਕਰਣ',
      en: 'Kabir Sagar • Jeev Chetavani & Awakening from Slumber'
    },
    themes: ['chetavani'],
    keywords: ['मानुस', 'देह', 'काल', 'अवसर', 'नींद', 'जाग', 'चेत', 'काया', 'human', 'awake', 'mortal'],
    verse: {
      hi: 'चेत अचेत गँवार मति, बीता जात अकाज।\nमानुस देही दुर्लभा, भजु साहेब सुरताज॥',
      pb: 'ਚੇਤ ਅਚੇਤ ਗੰਵਾਰ ਮਤਿ, ਬੀਤਾ ਜਾਤ ਅਕਾਜ।\nਮਾਨੁਸ ਦੇਹੀ ਦੁਰਲਭਾ, ਭਜੁ ਸਾਹੇਬ ਸੁਰਤਾਜ॥',
      en: 'Awaken from heedless slumber—this precious opportunity is slipping swiftly away;\nRare beyond measure is this human birth: turn inward and worship the Sovereign Saheb.'
    },
    bhavarth: {
      hi: 'अनमोल मानव देह बार-बार नहीं मिलती; व्यर्थ प्रपंचों में इसे गँवाने के बजाय समय रहते सत्यनाम और सत्कर्म में लगाना ही सच्ची बुद्धिमत्ता है।',
      pb: 'ਅਨਮੋਲ ਮਨੁੱਖੀ ਸਰੀਰ ਵਾਰ-ਵਾਰ ਨਹੀਂ ਮਿਲਦਾ; ਬੇਅਰਥ ਉਲਝਣਾਂ ਵਿੱਚ ਸਮਾਂ ਗੁਆਉਣ ਦੀ ਬਜਾਏ ਸਤਯਨਾਮ ਨਾਲ ਜੁੜਨਾ ਹੀ ਸਿਆਣਪ ਹੈ।',
      en: 'Human birth is rare and fleeting; use every breath purposefully for inner awakening rather than careless distraction.'
    },
    themeEssence: {
      hi: 'दुर्लभ मानव देह की सार्थकता और आलस्य से जागने',
      pb: 'ਦੁਰਲੱਭ ਮਨੁੱਖੀ ਜਨਮ ਦੀ ਸਾਰਥਕਤਾ ਅਤੇ ਅਲਸ ਤੋਂ ਜਾਗਣ',
      en: 'waking from spiritual heedlessness during this rare human life'
    }
  },
  {
    id: 'sagar-maya-5',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर (अनुराग सागर) • माया-विवेक व त्रिगुण परख',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਅਨੁਰਾਗ ਸਾਗਰ) • ਮਾਇਆ-ਵਿਵੇਕ ਤੇ ਤ੍ਰਿਗੁਣ ਪਰਖ',
      en: 'Kabir Sagar (Anurag Sagar) • Discernment Beyond Maya'
    },
    themes: ['maya', 'ego-humility'],
    keywords: ['माया', 'काल', 'फंद', 'तृष्णा', 'मोह', 'काम', 'क्रोध', 'लोभ', 'illusion', 'trap', 'greed'],
    verse: {
      hi: 'काम क्रोध मद लोभ सब, काल फंद के जाल।\nजो साधे गुरु-ज्ञान से, सो छूटे तत्काल॥',
      pb: 'ਕਾਮ ਕ੍ਰੋਧ ਮਦ ਲੋਭ ਸਭ, ਕਾਲ ਫੰਦ ਕੇ ਜਾਲ।\nਜੋ ਸਾਧੇ ਗੁਰੂ-ਗਿਆਨ ਸੇ, ਸੋ ਛੂਟੇ ਤਤਕਾਲ॥',
      en: 'Lust, anger, arrogance, and greed are all woven nets of deluding illusion;\nWhoever anchors attention in the Guru’s discerning wisdom steps free at once.'
    },
    bhavarth: {
      hi: 'बाहरी संसार से अधिक भीतर बैठे काम, क्रोध, अहंकार और लोभ ही जीव को बंधन में डालते हैं; विवेक और सत्यनाम से ही इन मानसिक विकारों से मुक्ति मिलती है।',
      pb: 'ਬਾਹਰੀ ਸੰਸਾਰ ਨਾਲੋਂ ਵੱਧ ਅੰਦਰ ਬੈਠੇ ਕਾਮ, ਕ੍ਰੋਧ, ਹੰਕਾਰ ਤੇ ਲੋਭ ਹੀ ਜੀਵ ਨੂੰ ਬੰਨ੍ਹਦੇ ਹਨ; ਗੁਰੂ-ਗਿਆਨ ਨਾਲ ਇਨ੍ਹਾਂ ਤੋਂ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ।',
      en: 'Desire, anger, arrogance, and greed bind consciousness from within; Satguru-wisdom breaks their hold immediately.'
    },
    themeEssence: {
      hi: 'काम, क्रोध, मद, लोभ रूपी आंतरिक बंधनों से विवेकपूर्ण मुक्ति',
      pb: 'ਕਾਮ, ਕ੍ਰੋਧ, ਹੰਕਾਰ ਤੇ ਲੋਭ ਰੂਪੀ ਅੰਦਰੂਨੀ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤੀ',
      en: 'breaking free from inner nets of anger, pride, and greed'
    }
  },
  {
    id: 'sagar-satya-6',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर • करणी व पाखंड खंडन प्रकरण',
      pb: 'ਕਬੀਰ ਸਾਗਰ • ਕਰਨੀ ਤੇ ਪਾਖੰਡ ਖੰਡਨ ਪ੍ਰਕਰਣ',
      en: 'Kabir Sagar • Authentic Practice Over Outer Pretense'
    },
    themes: ['satya-hypocrisy'],
    keywords: ['करनी', 'कथनी', 'पाखंड', 'सांच', 'सत्य', 'दिखावा', 'भेष', 'conduct', 'hypocrisy', 'truth'],
    verse: {
      hi: 'कथनी कथै तो क्या भया, करनी बिनु नहिं सार।\nसाँचे मन जो आचरै, सो पावै दीदार॥',
      pb: 'ਕਥਨੀ ਕਥੈ ਤੋ ਕਿਆ ਭਇਆ, ਕਰਨੀ ਬਿਨੁ ਨਹਿਂ ਸਾਰ।\nਸਾਂਚੇ ਮਨ ਜੋ ਆਚਰੈ, ਸੋ ਪਾਵੈ ਦੀਦਾਰ॥',
      en: 'What value lies in eloquent preaching if noble conduct is absent?\nOnly one who lives with a truthful, upright heart beholds inner realization.'
    },
    bhavarth: {
      hi: 'केवल बड़ी-बड़ी बातें बोलने या धार्मिक वेश बनाने से कुछ नहीं होता; जब कथनी और करनी एक हो जाती है तभी अंतःकरण में सत्य का दर्शन होता है।',
      pb: 'ਕੇਵਲ ਵੱਡੀਆਂ ਗੱਲਾਂ ਕਰਨ ਜਾਂ ਭੇਖ ਬਣਾਉਣ ਨਾਲ ਕੁਝ ਨਹੀਂ ਬਣਦਾ; ਜਦੋਂ ਕਥਨੀ ਤੇ ਕਰਨੀ ਇੱਕ ਹੁੰਦੀ ਹੈ ਤਦ ਹੀ ਸੱਚ ਦਾ ਦਰਸ਼ਨ ਹੁੰਦਾ ਹੈ।',
      en: 'Eloquent words without lived integrity hold no essence; pure conduct opens inner realization.'
    },
    themeEssence: {
      hi: 'कोरी कथनी के स्थान पर सत्य करनी व निश्छल आचरण',
      pb: 'ਕੋਰੀ ਕਥਨੀ ਦੀ ਥਾਂ ਸੱਚੀ ਕਰਨੀ ਤੇ ਨਿਰਛਲ ਆਚਰਨ',
      en: 'aligning honest daily conduct with spoken spiritual ideals'
    }
  },
  {
    id: 'sagar-satsang-7',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर • सतसंग एवं साधु लक्षण संवाद',
      pb: 'ਕਬੀਰ ਸਾਗਰ • ਸਤਿਸੰਗ ਤੇ ਸਾਧੂ ਲੱਛਣ ਸੰਵਾਦ',
      en: 'Kabir Sagar • Marks of Satsang & Noble Saints'
    },
    themes: ['satsang-sadhu', 'compassion-service'],
    keywords: ['साधु', 'संत', 'सत्संग', 'संगति', 'क्षमा', 'दया', 'शीतल', 'शील', 'saint', 'satsang', 'humble'],
    verse: {
      hi: 'साधु लच्छन जानि ले, शील क्षमा संतोष।\nनिर्मल हिरदै सबन सों, मिटै क्रोध मद रोष॥',
      pb: 'ਸਾਧੂ ਲੱਛਣ ਜਾਨਿ ਲੇ, ਸ਼ੀਲ ਖਿਮਾ ਸੰਤੋਖ।\nਨਿਰਮਲ ਹਿਰਦੈ ਸਭਨ ਸੋਂ, ਮਿਟੈ ਕ੍ਰੋਧ ਮਦ ਰੋਖ॥',
      en: 'Recognize the marks of a true Saint: gentle courtesy, forgiveness, and deep contentment;\nKeeping a pure heart toward everyone, all anger, pride, and bitterness dissolve.'
    },
    bhavarth: {
      hi: 'कबीर सागर बताता है कि सच्चा संत बाहरी पहचान से नहीं, बल्कि शील, क्षमा, संतोष, मीठे व्यवहार और क्रोध-रहित निर्मल हृदय से पहचाना जाता है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ ਦੱਸਦਾ ਹੈ ਕਿ ਸੱਚਾ ਸੰਤ ਬਾਹਰੀ ਭੇਖ ਨਾਲ ਨਹੀਂ, ਸਗੋਂ ਸ਼ੀਲ, ਖਿਮਾ, ਸੰਤੋਖ ਅਤੇ ਨਿਰਮਲ ਹਿਰਦੇ ਨਾਲ ਪਛਾਣਿਆ ਜਾਂਦਾ ਹੈ।',
      en: 'Genuine saintliness shines through humility, forgiveness, contentment, and an anger-free heart.'
    },
    themeEssence: {
      hi: 'शील, क्षमा, संतोष और क्रोध-रहित संत-स्वभाव',
      pb: 'ਸ਼ੀਲ, ਖਿਮਾ, ਸੰਤੋਖ ਅਤੇ ਕ੍ਰੋਧ-ਰਹਿਤ ਸੰਤ-ਸੁਭਾਅ',
      en: 'saintly qualities of gentleness, forgiveness, and serenity'
    }
  },
  {
    id: 'sagar-prem-8',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर • अनन्य प्रेमाभक्ति व समर्पण प्रकरण',
      pb: 'ਕਬੀਰ ਸਾਗਰ • ਅਨੰਨ ਪ੍ਰੇਮਾਭਗਤੀ ਤੇ ਸਮਰਪਣ ਪ੍ਰਕਰਣ',
      en: 'Kabir Sagar • Wholehearted Devotion & Surrender'
    },
    themes: ['prem-bhakti'],
    keywords: ['प्रेम', 'प्रीति', 'भक्ति', 'समर्पण', 'विनती', 'चरण', 'लगन', 'devotion', 'love', 'surrender'],
    verse: {
      hi: 'निष्कपट प्रेम हिये धरो, तजि चतुराई मान।\nदीन भाव सुमिरन करो, मिलै अमर निज थान॥',
      pb: 'ਨਿਸ਼ਕਪਟ ਪ੍ਰੇਮ ਹਿਯੇ ਧਰੋ, ਤਜਿ ਚਤੁਰਾਈ ਮਾਨ।\nਦੀਨ ਭਾਵ ਸਿਮਰਨ ਕਰੋ, ਮਿਲੈ ਅਮਰ ਨਿਜ ਥਾਨ॥',
      en: 'Cherish guileless love within your heart, letting go of clever pride and calculation;\nRemember the Lord in tender humility, and discover the eternal inner sanctuary.'
    },
    bhavarth: {
      hi: 'चतुराई और अभिमान के साथ भक्ति नहीं फलती; निष्कपट प्रेम और विनम्र समर्पण ही साधक को सतगुरु के अमर धाम तक पहुँचाता है।',
      pb: 'ਚਤੁਰਾਈ ਅਤੇ ਹੰਕਾਰ ਨਾਲ ਭਗਤੀ ਨਹੀਂ ਫਲਦੀ; ਨਿਰਛਲ ਪ੍ਰੇਮ ਤੇ ਨਿਮਰ ਸਮਰਪਣ ਹੀ ਸਾਧਕ ਨੂੰ ਅਮਰ ਧਾਮ ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ।',
      en: 'Clever pride blocks grace; guileless love and humility carry the seeker to eternal peace.'
    },
    themeEssence: {
      hi: 'चतुराई व मान त्यागकर निष्कपट प्रेमाभक्ति अपनाने',
      pb: 'ਚਤੁਰਾਈ ਤੇ ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਿਰਛਲ ਪ੍ਰੇਮਾਭਗਤੀ ਅਪਣਾਉਣ',
      en: 'guileless humility and wholehearted devotion free from ego'
    }
  },
  {
    id: 'sagar-daya-9',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर • जीव दया एवं अहिंसा महाधर्म',
      pb: 'ਕਬੀਰ ਸਾਗਰ • ਜੀਵ ਦਇਆ ਤੇ ਅਹਿੰਸਾ ਮਹਾਂਧਰਮ',
      en: 'Kabir Sagar • Universal Compassion & Non-Violence'
    },
    themes: ['compassion-service'],
    keywords: ['दया', 'जीव', 'अहिंसा', 'करुणा', 'सेवा', 'समता', 'परोपकार', 'compassion', 'ahimsa', 'service'],
    verse: {
      hi: 'जीव दया हिरदै बसै, समता राखै नित्य।\nसोई जन साहेब को प्यारा, निश्चय पावै सत्य॥',
      pb: 'ਜੀਵ ਦਇਆ ਹਿਰਦੈ ਬਸੈ, ਸਮਤਾ ਰਾਖੈ ਨਿੱਤ।\nਸੋਈ ਜਨ ਸਾਹੇਬ ਕਉ ਪਿਆਰਾ, ਨਿਸ਼ਚੈ ਪਾਵੈ ਸੱਤ॥',
      en: 'When compassion for all living beings dwells within and fairness guides every day,\nThat seeker becomes deeply dear to Saheb and surely realizes living Truth.'
    },
    bhavarth: {
      hi: 'हर प्राणी के प्रति दया, अहिंसा और समभाव रखना ही सतगुरु कबीर साहेब को सर्वाधिक प्रिय आचरण है; बिना करुणा के कोई भी साधना पूर्ण नहीं होती।',
      pb: 'ਹਰ ਜੀਵ ਪ੍ਰਤੀ ਦਇਆ, ਅਹਿੰਸਾ ਅਤੇ ਸਮਭਾਵ ਰੱਖਣਾ ਹੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਸਭ ਤੋਂ ਪਿਆਰਾ ਆਚਰਨ ਹੈ।',
      en: 'Active compassion and non-violence toward all beings form the heartbeat of authentic Kabir Panth practice.'
    },
    themeEssence: {
      hi: 'सर्वभूत दया, अहिंसा और समदृष्टि के पावन धर्म',
      pb: 'ਸਰਬ ਜੀਵ ਦਇਆ, ਅਹਿੰਸਾ ਅਤੇ ਸਮਦ੍ਰਿਸ਼ਟੀ ਦੇ ਪਾਵਨ ਧਰਮ',
      en: 'compassion, non-violence, and equal goodwill toward all beings'
    }
  },
  {
    id: 'sagar-yoga-10',
    tradition: 'kabir_sagar',
    angOrSection: {
      hi: 'कबीर सागर (स्वासं गुंजार बोध) • घट-मंदिर व सूरत-शब्द योग',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਸੁਆਸਾਂ ਗੁੰਜਾਰ ਬੋਧ) • ਘਟ-ਮੰਦਿਰ ਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ',
      en: 'Kabir Sagar • Ghat-Mandir & Surat-Shabd Yoga'
    },
    themes: ['yoga-realization', 'naam'],
    keywords: ['घट', 'सुरति', 'निरति', 'अनहद', 'अंतर', 'दसवें', 'ज्योति', 'प्रीतम', 'भीतर', 'surat', 'inner', 'temple'],
    verse: {
      hi: 'काया भीतर कोठड़ी, बाहर ढूँढै काय।\nदसम द्वार उघारि के, घट में लेहु लखाय॥',
      pb: 'ਕਾਇਆ ਭੀਤਰ ਕੋਠੜੀ, ਬਾਹਰ ਢੂੰਢੈ ਕਾਇ।\nਦਸਮ ਦੁਆਰ ਉਘਾਰਿ ਕੇ, ਘਟ ਮੇਂ ਲੇਹੁ ਲਖਾਇ॥',
      en: 'Within the chamber of this body shines the treasure—why wander seeking outside?\nOpening the inner Tenth Door of awareness, behold the Beloved inside your own heart.'
    },
    bhavarth: {
      hi: 'बाहरी स्थलों पर भटकने के बजाय अपनी सुरति को दशम द्वार की ओर मोड़ने पर साधक को अपने ही घट-मंदिर में अविनाशी ज्योति और अनहद शब्द का साक्षात्कार होता है।',
      pb: 'ਬਾਹਰ ਭਟਕਣ ਦੀ ਥਾਂ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਦਸਵੇਂ ਦੁਆਰ ਵੱਲ ਮੋੜਨ ਨਾਲ ਸਾਧਕ ਨੂੰ ਆਪਣੇ ਹੀ ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਅਨਹਦ ਸ਼ਬਦ ਦਾ ਦਰਸ਼ਨ ਹੁੰਦਾ ਹੈ।',
      en: 'Redirecting Surat inward toward the Tenth Door unveils the eternal inner sanctuary already present inside.'
    },
    themeEssence: {
      hi: 'बाहर की खोज छोड़कर घट-मंदिर में सूरत-शब्द साक्षात्कार',
      pb: 'ਬਾਹਰ ਦੀ ਭਾਲ ਛੱਡ ਕੇ ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਸੁਰਤ-ਸ਼ਬਦ ਦਰਸ਼ਨ',
      en: 'redirecting awareness into the inner temple via Surat-Shabd Yoga'
    }
  }
];

/**
 * Normalizes a Sakhi's category slug and verse text into primary + secondary theme buckets
 */
export function mapCategoryToThemes(
  category: string,
  verseTextBlob: string
): { primaryThemes: string[]; verseThemes: string[] } {
  const cat = (category || '').toLowerCase();
  const primary = new Set<string>();

  if (cat.includes('guru') || cat.includes('nigura') || cat.includes('shishya') || cat.includes('satguru')) primary.add('guru');
  if (cat.includes('naam') || cat.includes('satnam') || cat.includes('sumiran') || cat.includes('swas') || cat.includes('सिमरन') || cat.includes('सत्यनाम')) primary.add('naam');
  if (cat.includes('chetavani') || cat.includes('chetavni') || cat.includes('kaal') || cat.includes('nashwar') || cat.includes('samay') || cat.includes('manav') || cat.includes('manushya')) primary.add('chetavani');
  if (cat.includes('maya') || cat.includes('trishna') || cat.includes('kaam') || cat.includes('krodh') || cat.includes('lobh') || cat.includes('moh') || cat.includes('mad') || cat.includes('swaarath') || cat.includes('sansar') || cat.includes('vyasan')) primary.add('maya');
  if (cat.includes('ahankar') || cat.includes('dinata') || cat.includes('deenta') || cat.includes('namrata') || cat.includes('vinamrata') || cat.includes('aapa') || cat.includes('garv') || cat.includes('ninda') || cat.includes('kshama') || cat.includes('क्षमा') || cat.includes('शुकराना')) primary.add('ego-humility');
  if (cat.includes('satya') || cat.includes('saanch') || cat.includes('sanch') || cat.includes('pakhand') || cat.includes('bhram') || cat.includes('kathani') || cat.includes('karani') || cat.includes('kapat') || cat.includes('aacharan') || cat.includes('teerath') || cat.includes('सत्य')) primary.add('satya-hypocrisy');
  if (cat.includes('sadhu') || cat.includes('sant') || cat.includes('satsang') || cat.includes('sangat') || cat.includes('kusang')) primary.add('satsang-sadhu');
  if (cat.includes('prem') || cat.includes('bhakti') || cat.includes('birah') || cat.includes('samarpan') || cat.includes('shoor') || cat.includes('soorma') || cat.includes('vinti') || cat.includes('vinay') || cat.includes('aarti') || cat.includes('sandhya') || cat.includes('pativrata')) primary.add('prem-bhakti');
  if (cat.includes('man-') || cat.includes('chitt') || cat.includes('shuddhi') || cat.includes('vani') || cat.includes('santosh') || cat.includes('sanyam') || cat.includes('dhairya') || cat.includes('vivek') || cat.includes('karm') || cat.includes('sheel') || cat.includes('शुद्धि')) primary.add('mind-speech');
  if (cat.includes('daya') || cat.includes('karuna') || cat.includes('ahimsa') || cat.includes('paropkar') || cat.includes('paropkaar') || cat.includes('daan') || cat.includes('seva') || cat.includes('samata') || cat.includes('samta') || cat.includes('sarva-hit') || cat.includes('mitrata')) primary.add('compassion-service');
  if (cat.includes('gyan') || cat.includes('shabad') || cat.includes('shabd') || cat.includes('surati') || cat.includes('anahat') || cat.includes('antar') || cat.includes('sahaj') || cat.includes('param') || cat.includes('moksha') || cat.includes('mukti') || cat.includes('amar') || cat.includes('nirbhay') || cat.includes('hans') || cat.includes('aatma') || cat.includes('creation') || cat.includes('sarva') || cat.includes('बोध') || cat.includes('साधना')) primary.add('yoga-realization');

  // Detect strong thematic signals directly inside the Sakhi couplet text itself (never polluted by boilerplate)
  const verse = verseTextBlob.toLowerCase();
  const vThemes = new Set<string>();
  if (/सतगुरु|सतिगुर|गुर\b|गुरु|निगुरा|चेला|guru|satguru/.test(verse)) vThemes.add('guru');
  if (/सुमिरन|सिमरन|सुमिर|सिमरि|सत्यनाम|निज नाम|श्वास|स्वांस|simran|naam/.test(verse)) vThemes.add('naam');
  if (/माटी|कुम्हार|काया|देही|हाड़|हड्डी|चिता|काल\b|मरण|मृत्यु|रैन|नींद|बुलबुला|मानुस|जनम|जन्म|clay|mortal|bones/.test(verse)) vThemes.add('chetavani');
  if (/माया|ठगिनी|तृष्णा|लालच|लोभ|काम\b|क्रोध|मोह|विषय|इंद्री|कंचन|दाम\b|maya|greed|lust/.test(verse)) vThemes.add('maya');
  if (/अहं|अहंकार|अभिमान|गरब|गर्व|घमंड|मैंपन|आपा|निंदक|निंदा|दीन|रोड़ा|क्षमा|छमा|बुरा जो|दुसमन|ego|humble|critic|enemy/.test(verse)) vThemes.add('ego-humility');
  if (/साँच|सांच|सत्य\b|झूठ|पाखंड|दिखावा|पोथी|कागद|तीरथ|तीर्थ|कथनी|करनी|आडंबर|truth|books|hypocrisy/.test(verse)) vThemes.add('satya-hypocrisy');
  if (/साधु|साध\b|संत\b|सत्संग|संगति|संगत\b|कुसंग|चंदन|सूप|saint|satsang|company/.test(verse)) vThemes.add('satsang-sadhu');
  if (/प्रेम|प्रीत|प्रीतम|विरह|बिरह|भक्ति|शूरवीर|सूरा|शीश|सीस|समर्पण|साँई|साईं|विनती|love|devotion|surrender|beloved/.test(verse)) vThemes.add('prem-bhakti');
  if (/मन\b|चित्त|वाणी|बानी|शीतल|मधुर|बचन|वचन|कुटिल|रसना|संतोष|संतोख|धैर्य|धीरे|माली|संयम|विवेक|mind|speech|sweet|cooling|words|tongue|patience|contentment/.test(verse)) vThemes.add('mind-speech');
  if (/दया|करुणा|अहिंसा|हिंसा|परोपकार|परमारथ|दान|सेवा|तरुवर|सरवर|जीव\b|समभाव|compassion|charity|service/.test(verse)) vThemes.add('compassion-service');
  if (/सूरत|सुरति|शबद|शब्द|अनहद|घट\b|माहिं|तुझहि|कस्तूरी|मृग|हंस|अमरलोक|मुक्ति|मोक्ष|आत्मा|मरिहै|soul|unstruck|liberation|within/.test(verse)) vThemes.add('yoga-realization');

  // If the dataset tagged a broad umbrella 'chetavani' category but the couplet itself has specific themes (e.g., speech/ego/guru) and no mortality keywords, let verse themes lead
  if (primary.has('chetavani') && !vThemes.has('chetavani') && vThemes.size > 0) {
    primary.delete('chetavani');
    vThemes.forEach((t) => primary.add(t));
  }

  if (primary.size === 0 && vThemes.size === 0) {
    primary.add('satya-hypocrisy');
  } else if (primary.size === 0) {
    vThemes.forEach((t) => primary.add(t));
  }

  return {
    primaryThemes: Array.from(primary),
    verseThemes: Array.from(vThemes),
  };
}

/**
 * Generates deterministic non-negative integer hash from a string
 */
export function stableStringHash(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

/**
 * Builds the active-language connection explanation tying the parallel verse back to the Mool Sakhi
 */
export function buildMoolSakhiConnection(
  entry: CuratedCrossRefEntry,
  sakhiNumber: number,
  sakhiFirstLine: string,
  language: Language
): string {
  const snippet = sakhiFirstLine.replace(/[।॥,.;:'"\n\r]+/g, ' ').trim().slice(0, 72);
  let traditionName = '';
  if (entry.tradition === 'sggs') {
    traditionName =
      language === 'pb'
        ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ'
        : language === 'en'
        ? 'Sri Guru Granth Sahib Ji'
        : 'श्री गुरु ग्रंथ साहिब जी';
  } else if (entry.tradition === 'bijak') {
    traditionName =
      language === 'pb' ? 'ਕਬੀਰ ਬੀਜਕ' : language === 'en' ? 'Kabir Bijak' : 'कबीर बीजक';
  } else if (entry.tradition === 'granthavali') {
    traditionName =
      language === 'pb' ? 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ' : language === 'en' ? 'Kabir Granthavali' : 'कबीर ग्रंथावली';
  } else {
    traditionName =
      language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ' : language === 'en' ? 'Kabir Sagar' : 'कबीर सागर';
  }

  if (language === 'pb') {
    return `ਮੂਲ ਸਾਖੀ #${sakhiNumber} ਨਾਲ ਸਬੰਧ: "${snippet}..." ਦੇ ਮੁੱਖ ਭਾਵ ਵਾਂਗ ਹੀ ${traditionName} ਦੀ ਇਹ ਬਾਣੀ ਵੀ ${entry.themeEssence.pb} ਉੱਤੇ ਜ਼ੋਰ ਦਿੰਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਅੱਜ ਦੇ ਸਵਾਧਿਆਇ ਦਾ ਮੂਲ ਸੱਚ ਹੋਰ ਸਪੱਸ਼ਟ ਹੁੰਦਾ ਹੈ।`;
  }
  if (language === 'en') {
    return `Connection to Mool Sakhi #${sakhiNumber}: Paralleling "${snippet}...", this passage from ${traditionName} reinforces ${entry.themeEssence.en}, illuminating the core message of today's study.`;
  }
  return `मूल साखी #${sakhiNumber} से संबंध: "${snippet}..." के मुख्य भाव के अनुरूप ही ${traditionName} की यह पावन वाणी ${entry.themeEssence.hi} को पुष्ट करती है, जिससे आज के स्वाध्याय का गूढ़ मर्म और अधिक स्पष्ट होता है।`;
}
