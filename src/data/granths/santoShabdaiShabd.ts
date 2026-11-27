import { GranthVerse } from './granthTypes';

export interface MudraSoundInfo {
  shabdName: { hi: string; pb: string; en: string } | string;
  mudraName: { hi: string; pb: string; en: string } | string;
  bodyLocation: { hi: string; pb: string; en: string } | string;
  associatedRishiDeity: { hi: string; pb: string; en: string } | string;
  spiritualLevelAndTrap: { hi: string; pb: string; en: string } | string;
}

export const SANTO_SHABDAI_SHABD_VERSES: GranthVerse[] = [
  {
    id: 'ssss-refrain',
    type: 'pada',
    lines: {
      hi: [
        'संतो शब्दई शब्द बखाना ॥ टेक ॥',
        'शब्द फांस फँसा सब कोई, शब्द नहीं पहचाना ॥'
      ],
      pb: [
        'ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ ਬਖਾਨਾ ॥ ਟੇਕ ॥',
        'ਸ਼ਬਦ ਫਾਂਸ ਫੰਸਾ ਸਬ ਕੋਈ, ਸ਼ਬਦ ਨਹੀ ਪਹਚਾਨਾ ॥'
      ],
      en: [
        'Santo shabdai shabd bakhana. || Refrain ||',
        'Shabd phaans phansa sab koi, shabd nahi pehchana.'
      ]
    },
    bhavarth: {
      hi: 'हे सन्तों! संसार के सभी पण्डित, योगी व ध्यानी केवल काल के रचे वर्णनात्मक व आकाशीय शब्दों (नादों) का ही बखान करते हैं। उन काल-निर्मित शब्दों की फाँसी (माया-जाल) में पूरा संसार फँसा हुआ है, परंतु जो अक्षरों व ध्वनियों से पार परम पावन **निःअक्षर सत्यनाम** है, उसकी वास्तविक पहचान किसी को नहीं है। केवल सतगुरु के भेद से ही सत्यनाम की प्राप्ति होती है।',
      pb: 'ਹੇ ਸੰਤੋ! ਦੁਨੀਆ ਦੇ ਸਾਰੇ ਵਿਦਵਾਨ ਤੇ ਯੋਗੀ ਕੇਵਲ ਕਾਲ ਦੇ ਰਚੇ ਅੱਖਰੀ ਸ਼ਬਦਾਂ ਤੇ ਧੁਨਾਂ ਦਾ ਹੀ ਵਰਣਨ ਕਰਦੇ ਹਨ। ਸ਼ਬਦਾਂ ਦੀ ਇਸ ਫਾਹੀ ਵਿੱਚ ਸਭ ਫਸੇ ਹੋਏ ਹਨ, ਪਰ ਅੱਖਰਾਂ ਤੇ ਧੁਨਾਂ ਤੋਂ ਪਾਰ ਜੋ ਪਰਮ ਪਵਿੱਤਰ **ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ** ਹੈ, ਉਸਦੀ ਅਸਲੀ ਪਛਾਣ ਕਿਸੇ ਨੂੰ ਨਹੀਂ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਭੇਦ ਨਾਲ ਹੀ ਸਤਯਨਾਮ ਦੀ ਪ੍ਰਾਪਤੀ ਹੁੰਦੀ ਹੈ।',
      en: 'O Saints! Seekers and scholars across the world merely describe descriptive, temporal cosmic sounds. All souls remain entangled in this subtle snare of sounds, failing to recognize the True Unwritten, Eternal Word — the **Nih-Akshar Satyanaam** — which is realized only through the grace of the True Satguru.'
    },
    spiritualEssence: {
      hi: 'वर्णनात्मक/काल शब्दों तथा अमर निज-शब्द (निःअक्षर सत्यनाम) का भेद।',
      pb: 'ਅੱਖਰੀ ਸ਼ਬਦ ਤੇ ਅੱਖਰ-ਪਾਰ ਨਿਜ ਸ਼ਬਦ (ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ) ਦਾ ਭੇਦ।',
      en: 'Discerning descriptive temporal sounds from the Eternal Unwritten Word (Nih-Akshar Satyanaam).'
    }
  },
  {
    id: 'ssss-v1',
    type: 'pada',
    lines: {
      hi: [
        'प्रथमहिं ब्रह्म स्वं इच्छा ते, पाँचै शब्द उचारा ।',
        'सोहं, निरंजन, रंरकार, शक्ति और ओंकारा ॥ १ ॥'
      ],
      pb: [
        'ਪ੍ਰਥਮਹਿਂ ਬ੍ਰਹ੍ਮ ਸ੍ਵੰ ਇੱਛਾ ਤੇ, ਪਾਂਚੈ ਸ਼ਬਦ ਉਚਾਰਾ ।',
        'ਸੋਹੰ, ਨਿਰੰਜਨ, ਰੰਰਕਾਰ, ਸ਼ਕਤਿ ਅੌਰ ਓੰਕਾਰਾ ॥ ੧ ॥'
      ],
      en: [
        'Prathamahin brahm swan ichha te, paanchai shabd uchaara.',
        'Soham, niranjan, rarankaar, shakti aur omkaara. ||1||'
      ]
    },
    bhavarth: {
      hi: 'सृष्टि रचना के आरम्भ में काल-ब्रह्म (निरंजन) ने अपनी स्वेच्छा से पाँच धनात्मक शब्दों का विस्तार किया — सोहं, निरंजन, रंरकार, शक्ति और ओंकार। ये पाँचों शब्द काल के ब्रह्माण्ड की नींव हैं, जबकि अमर **सत्यनाम** इन सबसे परे सत्यलोक का सनातन आधार है।',
      pb: 'ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਦੇ ਆਰੰਭ ਵਿੱਚ ਕਾਲ-ਬ੍ਰਹਮ ਨੇ ਆਪਣੀ ਇੱਛਾ ਨਾਲ ੫ ਸ਼ਬਦ ਪ੍ਰਗਟ ਕੀਤੇ — ਸੋਹੰ, ਨਿਰੰਜਨ, ਰੰਰਕਾਰ, ਸ਼ਕਤੀ ਤੇ ਓਅੰਕਾਰ। ਇਹ ਪੰਜੇ ਸ਼ਬਦ ਕਾਲ ਦੇ ਬ੍ਰਹਿਮੰਡ ਦਾ ਆਧਾਰ ਹਨ, ਜਦਕਿ ਅਮਰ **ਸਤਯਨਾਮ** ਇਹਨਾਂ ਸਭ ਤੋਂ ਪਰੇ ਸੱਚਖੰਡ ਦਾ ਸਦੀਵੀ ਆਧਾਰ ਹੈ।',
      en: 'In the beginning of cosmic creation, Kaal Brahm manifested 5 primal sounds: Soham, Niranjan, Rarankar, Shakti, and Omkar. These 5 form the foundation of Kaal’s universe, whereas the eternal **Satyanaam** transcends them all in the realm of Truth.'
    },
    spiritualEssence: {
      hi: 'काल-ब्रह्म द्वारा रचित ५ मूल शब्द (निरंजन, ओंकार, सोहं, रंरकार, शक्ति)।',
      pb: 'ਕਾਲ-ਬ੍ਰਹਮ ਦੇ ੫ ਸ਼ਬਦ।',
      en: 'The 5 cosmic sounds manifested by Brahm.'
    }
  },
  {
    id: 'ssss-v2',
    type: 'pada',
    lines: {
      hi: [
        'पाँचै तत्व प्रकृति तीनों, गुण उपजाया ।',
        'लोक द्वीप चारों खान, चौरासी लख बनाया ॥ २ ॥'
      ],
      pb: [
        'ਪਾਂਚੈ ਤਤ੍ਵ ਪ੍ਰਕ੍ਰਿਤਿ ਤੀਨੋਂ, ਗੁਣ ਉਪਜਾਯਾ ।',
        'ਲੋਕ ਦ੍ਵੀਪ ਚਾਰੋਂ ਖਾਨ, ਚੌਰਾਸੀ ਲਖ ਬਨਾਯਾ ॥ ੨ ॥'
      ],
      en: [
        'Paanchai tatwa prakriti teenon, gun upjaaya.',
        'Lok deep chaaron khaan, chaurasi lakh banaaya. ||2||'
      ]
    },
    bhavarth: {
      hi: 'इन पाँच शब्दों के कम्पन से ५ तत्त्व (पृथ्वी, जल, अग्नि, वायु, आकाश), ३ गुण (सत्, रज, तम) और प्रकृति उत्पन्न हुई। इसी से समस्त लोक, द्वीप, चारों खानें (अण्डज, पिण्डज, उष्मज, स्थावर) और चौरासी लाख योनियों का चक्र बना। **सत्यनाम** के बिना जीव इसी चौरासी के जाल में भटकता रहता है।',
      pb: 'ਇਹਨਾਂ ਪੰਜਾਂ ਸ਼ਬਦਾਂ ਤੋਂ ੫ ਤੱਤ, ੩ ਗੁਣ ਤੇ ਪ੍ਰਕ੍ਰਿਤੀ ਪ੍ਰਗਟ ਹੋਈ, ਜਿਸ ਨਾਲ ਸਮਸਤ ਲੋਕ, ੪ ਖਾਣਾਂ ਤੇ ੮੪ ਲੱਖ ਜੂਨਾਂ ਦਾ ਚੱਕਰ ਬਣਿਆ। **ਸਤਯਨਾਮ** ਤੋਂ ਬਿਨਾਂ ਜੀਵ ਇਸੇ ਚੱਕਰ ਵਿੱਚ ਭਟਕਦਾ ਰਹਿੰਦਾ ਹੈ।',
      en: 'From these 5 sounds emerged the 5 elements, 3 gunas, 4 sources of life, and the vast cycle of 8.4 million species. Without the anchor of **Satyanaam**, the soul wanders endlessly in this cosmic wheel.'
    },
    spiritualEssence: {
      hi: 'त्रिगुण व पंचतत्त्व की उत्पत्ति और चौरासी लाख योनियों का विस्तार।',
      pb: '੮੪ ਲੱਖ ਜੂਨੀਆਂ ਦੀ ਰਚਨਾ।',
      en: 'Genesis of elements, gunas, and 8.4 million life-forms.'
    }
  },
  {
    id: 'ssss-v3',
    type: 'pada',
    lines: {
      hi: [
        'शब्दइ काल कलंदर कहिये, शब्दइ भर्म भुलाया ।',
        'पाँच शब्द की आशा में, सर्वस मूल गंवाया ॥ ३ ॥'
      ],
      pb: [
        'ਸ਼ਬਦਈ ਕਾਲ ਕਲੰਦਰ ਕਹਿਯੇ, ਸ਼ਬਦਈ ਭਰਮ ਭੁਲਾਯਾ ।',
        'ਪਾਂਚ ਸ਼ਬਦ ਕੀ ਆਸ਼ਾ ਮੇਂ, ਸਰਵਸ ਮੂਲ ਗੰਵਾਯਾ ॥ ੩ ॥'
      ],
      en: [
        'Shabdai kaal kalandar kahiye, shabdai bharm bhulaaya.',
        'Paanch shabd ki aasha mein, sarvas mool ganwaaya. ||3||'
      ]
    },
    bhavarth: {
      hi: 'यह पाँचों शब्द ही काल-कलंदर का फैलाया हुआ मायावी जाल हैं, जिन्होंने जीवों को भ्रम में डाल रखा है। इन पाँच शब्दों व नादों को ही मुक्ति मानकर जीवों ने अपना चेतन स्वरूप और सतपुरुष **सत्यनाम** की अमर पूँजी गँवा दी।',
      pb: 'ਇਹ ਪੰਜੇ ਸ਼ਬਦ ਕਾਲ ਕਲੰਦਰ ਦਾ ਮਾਇਆਵੀ ਜਾਲ ਹਨ, ਜਿਸਨੇ ਜੀਵਾਂ ਨੂੰ ਭਰਮ ਵਿੱਚ ਪਾਇਆ ਹੈ। ਇਹਨਾਂ ਨੂੰ ਹੀ ਮੁਕਤੀ ਮੰਨ ਕੇ ਜੀਵਾਂ ਨੇ ਆਪਣਾ ਨਿਜ-ਸਰੂਪ ਅਤੇ ਸਤਿਪੁਰਖ **ਸਤਯਨਾਮ** ਦੀ ਅਮਰ ਪੂੰਜੀ ਗੁਆ ਦਿੱਤੀ।',
      en: 'These 5 sounds are the grand illusion cast by Kaal. Mistaking these internal sounds for ultimate liberation, souls lost their eternal spiritual heritage of the Satpurush and **Satyanaam**.'
    },
    spiritualEssence: {
      hi: 'पाँच शब्दों की सीमा में भ्रमित होकर निज-पद गँवाना।',
      pb: 'ਪੰਜ ਸ਼ਬਦਾਂ ਦੀ ਭੂਲ।',
      en: 'The trap of clinging to lower cosmic sounds as the ultimate truth.'
    }
  },
  {
    id: 'ssss-v4',
    type: 'pada',
    lines: {
      hi: [
        'शब्दइ ब्रह्म प्रकाश मेंट के, बैठे मूंदे द्वारा ।',
        'शब्दइ निरगुण शब्दइ सरगुण, शब्दइ वेद पुकारा ॥ ४ ॥'
      ],
      pb: [
        'ਸ਼ਬਦਈ ਬ੍ਰਹ੍ਮ ਪ੍ਰਕਾਸ਼ ਮੈਂਟ ਕੇ, ਬੈਠੇ ਮੂੰਦੇ ਦ੍ਵਾਰਾ ।',
        'ਸ਼ਬਦਈ ਨਿਰਗੁਣ ਸ਼ਬਦਈ ਸਰਗੁਣ, ਸ਼ਬਦਈ ਵੇਦ ਪੁਕਾਰਾ ॥ ੪ ॥'
      ],
      en: [
        'Shabdai brahm prakaash ment ke, baithe moonde dwaara.',
        'Shabdai nirgun shabdai saragun, shabdai ved pukaara. ||4||'
      ]
    },
    bhavarth: {
      hi: 'साधक इन पाँच शब्दों के प्रकाश को ही अंतिम ब्रह्म मानकर नेत्र-द्वार मूंदकर बैठ जाते हैं। वेद भी इन्हीं शब्दों को सगुण और निर्गुण कहकर महिमा गाते हैं, परंतु परम पद **सत्यनाम** इन सगुण-निर्गुण सीमाओं से सर्वथा परे है।',
      pb: 'ਸਾਧਕ ਇਹਨਾਂ ਸ਼ਬਦਾਂ ਦੇ ਪ੍ਰਕਾਸ਼ ਨੂੰ ਹੀ ਅੰਤਿਮ ਬ੍ਰਹਮ ਮੰਨ ਕੇ ਅੱਖਾਂ ਮੀਟ ਕੇ ਬੈਠਦੇ ਹਨ। ਵੇਦ ਵੀ ਇਹਨਾਂ ਨੂੰ ਸਗੁਣ ਤੇ ਨਿਰਗੁਣ ਕਹਿ ਕੇ ਵਡਿਆਉਂਦੇ ਹਨ, ਪਰ ਪਰਮ ਪਦ **ਸਤਯਨਾਮ** ਇਹਨਾਂ ਸਭ ਸੀਮਾਵਾਂ ਤੋਂ ਪਰੇ ਹੈ।',
      en: 'Seekers close their inner sensory doors and immerse in the light of these sounds, mistaking them for the Supreme. Vedic scriptures extol them as Sargun and Nirgun, yet the Supreme State of **Satyanaam** lies beyond all attributes.'
    },
    spiritualEssence: {
      hi: 'सगुण-निर्गुण वेदवाणी की शब्द सीमा।',
      pb: 'ਸਗੁਣ-ਨਿਰਗੁਣ ਦੀ ਸੀਮਾ।',
      en: 'Limits of Sargun and Nirgun sound attributes.'
    }
  },
  {
    id: 'ssss-v5',
    type: 'pada',
    lines: {
      hi: [
        'शुद्ध ब्रह्म काया के भीतर, बैठ करे स्थाना ।',
        'ज्ञानी योगी पंडित औ सिद्ध, शब्द में उरझाना ॥ ५ ॥'
      ],
      pb: [
        'ਸ਼ੁੱਧ ਬ੍ਰਹ੍ਮ ਕਾਯਾ ਕੇ ਭੀਤਰ, ਬੈਠ ਕਰੇ ਸ੍ਥਾਨਾ ।',
        'ਗਿਆਨੀ ਯੋਗੀ ਪੰਡਿਤ ਅੌ ਸਿੱਧ, ਸ਼ਬਦ ਮੇਂ ਉਰਝਾਨਾ ॥ ੫ ॥'
      ],
      en: [
        'Shuddh brahm kaaya ke bheetar, baith kare sthaana.',
        'Gyaani yogi pandit au siddh, shabd mein urjhaana. ||5||'
      ]
    },
    bhavarth: {
      hi: 'शरीर के भीतर विभिन्न चक्रों पर विराजमान इन ध्वनियों को ही लोग शुद्ध ब्रह्म मान लेते हैं। बड़े-बड़े ज्ञानी, योगी, पण्डित और सिद्ध इन्हीं पाँच शब्दों के चक्रव्यूह में उलझ कर रह गए, क्योंकि उन्हें गुप्त **सत्यनाम** का भेद नहीं मिला।',
      pb: 'ਸਰੀਰ ਦੇ ਅੰਦਰ ਵੱਖ-ਵੱਖ ਚੱਕਰਾਂ ਤੇ ਧੁਨਾਂ ਨੂੰ ਹੀ ਲੋਕ ਸ਼ੁੱਧ ਬ੍ਰਹਮ ਮੰਨ ਲੈਂਦੇ ਹਨ। ਵੱਡੇ-ਵੱਡੇ ਗਿਆਨੀ, ਯੋਗੀ, ਪੰਡਿਤ ਤੇ ਸਿੱਧ ਇਹਨਾਂ ੫ ਸ਼ਬਦਾਂ ਵਿੱਚ ਹੀ ਉਲਝੇ ਰਹੇ ਕਿਉਂਕਿ ਉਹਨਾਂ ਨੂੰ ਗੁਪਤ **ਸਤਯਨਾਮ** ਦਾ ਭੇਦ ਨਹੀਂ ਮਿਲਿਆ।',
      en: 'Many mistake the sounds resonating within the body’s subtle centers as the ultimate pure Brahm. Scholars, yogis, and ascetics remained entangled here because they lacked the secret key of **Satyanaam**.'
    },
    spiritualEssence: {
      hi: 'योगियों, ज्ञानियों व सिद्धों का ५ शब्दों में अटकना।',
      pb: 'ਗਿਆਨੀਆਂ ਤੇ ਯੋਗੀਆਂ ਦਾ ਅਟਕਣਾ।',
      en: 'Entrapment of accomplished yogis within the 5 sounds.'
    }
  },
  {
    id: 'ssss-v6',
    type: 'pada',
    lines: {
      hi: [
        'पाँचइ शब्द पाँच हैं मुद्रा, काया बीच ठिकाना ।',
        'जो जिहसंक आराधन करता, सो तिहि करत बखाना ॥ ६ ॥'
      ],
      pb: [
        'ਪਾਂਚੈ ਸ਼ਬਦ ਪਾਂਚ ਹੈਂ ਮੁਦ੍ਰਾ, ਕਾਯਾ ਬੀਚ ਠਿਕਾਨਾ ।',
        'ਜੋ ਜਿਹਸੰਕ ਆਰਾਧਨ ਕਰਤਾ, ਸੋ ਤਿਹਿ ਕਰਤ ਬਖਾਨਾ ॥ ੬ ॥'
      ],
      en: [
        'Paanchai shabd paanch hain mudra, kaaya beech thikaana.',
        'Jo jihsank aaraadhan karta, so tihi karat bakhana. ||6||'
      ]
    },
    bhavarth: {
      hi: 'यह पाँचों शब्द शरीर में पाँच मुद्राओं (चांचरी, भूचरी, अगोचरी, खेचरी, उनमुनी) के साथ जुड़े हुए हैं। जो साधक जिस मुद्रा में सिद्ध होता है, वह उसी को सर्वोपरि बताता है, जबकि **सत्यनाम** का सुमिरन किसी शारीरिक मुद्रा का मोहताज नहीं, वह सहज सुरति का विषय है।',
      pb: 'ਇਹ ੫ ਸ਼ਬਦ ਸਰੀਰ ਵਿੱਚ ੫ ਮੁਦ੍ਰਾਵਾਂ ਨਾਲ ਜੁੜੇ ਹਨ। ਜੋ ਜਿਸ ਮੁਦ੍ਰਾ ਵਿੱਚ ਸਾਧਨਾ ਕਰਦਾ ਹੈ, ਉਹ ਉਸਨੂੰ ਹੀ ਸਰਵਉੱਚ ਦੱਸਦਾ ਹੈ, ਜਦਕਿ **ਸਤਯਨਾਮ** ਦਾ ਸਿਮਰਨ ਸਰੀਰਕ ਮੁਦ੍ਰਾਵਾਂ ਤੋਂ ਪਰੇ ਸਹਿਜ ਸੁਰਤਿ ਦਾ ਵਿਸ਼ਾ ਹੈ।',
      en: 'These 5 sounds correspond to 5 physical yogic mudras within the vessel. Practitioners extol whichever mudra they master, unaware that the divine contemplation of **Satyanaam** transcends all bodily postures.'
    },
    spiritualEssence: {
      hi: '५ शब्द व ५ मुद्राओं का शरीर में स्थान।',
      pb: '੫ ਸ਼ਬਦ ਤੇ ੫ ਮੁਦ੍ਰਾਵਾਂ।',
      en: 'Correspondence of 5 sounds and 5 mudras in the physical body.'
    }
  },
  {
    id: 'ssss-v7',
    type: 'pada',
    lines: {
      hi: [
        'शब्द निरंजन चांचरी मुद्रा, है नैनन के माँही ।',
        'ताको जाने गोरख योगी, महा तेज तप माँही ॥ ७ ॥'
      ],
      pb: [
        'ਸ਼ਬਦ ਨਿਰੰਜਨ ਚਾਂਚਰੀ ਮੁਦ੍ਰਾ, ਹੈ ਨੈਨਨ ਕੇ ਮਾਂਹੀ ।',
        'ਤਾਕੋ ਜਾਣੇ ਗੋਰਖ ਯੋਗੀ, ਮਹਾ ਤੇਜ ਤਪ ਮਾਂਹੀ ॥ ੭ ॥'
      ],
      en: [
        'Shabd niranjan chaanchari mudra, hai nainan ke maanhi.',
        'Taako jaane gorakh yogi, maha tej tap maanhi. ||7||'
      ]
    },
    bhavarth: {
      hi: 'प्रथम "निरंजन शब्द" और "चांचरी मुद्रा" का स्थान दोनों नेत्रों (आज्ञा चक्र) में है। गोरखनाथ जी ने घोर तपस्या द्वारा इसे साधा, किंतु यह भी काल-निरंजन का प्रथम दायरा है; पूर्ण मोक्ष केवल **सत्यनाम** की शरण से ही संभव है।',
      pb: 'ਪਹਿਲਾ "ਨਿਰੰਜਨ ਸ਼ਬਦ" ਤੇ "ਚਾਂਚਰੀ ਮੁਦ੍ਰਾ" ਦੋਹਾਂ ਨੈਣਾਂ (ਆਗਿਆ ਚੱਕਰ) ਵਿੱਚ ਹੈ। ਗੋਰਖਨਾਥ ਜੀ ਨੇ ਤਪੱਸਿਆ ਨਾਲ ਇਸਨੂੰ ਸਾਧਿਆ, ਪਰ ਇਹ ਵੀ ਕਾਲ ਦਾ ਪਹਿਲਾ ਦਾਇਰਾ ਹੈ; ਪੂਰਨ ਮੁਕਤੀ ਕੇਵਲ **ਸਤਯਨਾਮ** ਦੀ ਸ਼ਰਨ ਨਾਲ ਹੀ ਸੰਭਵ ਹੈ।',
      en: 'The 1st sound Niranjan and Chanchari Mudra dwell in the eyes (Agya Chakra). Yogi Gorakhnath mastered this through severe penance, yet this remains Kaal’s primary domain; true liberation is through **Satyanaam**.'
    },
    spiritualEssence: {
      hi: '१. निरंजन शब्द + चांचरी मुद्रा (स्थान: नेत्र / आज्ञा चक्र, गुरु: गोरखनाथ)।',
      pb: '੧. ਨਿਰੰਜਨ ਸ਼ਬਦ ਤੇ ਚਾਂਚਰੀ ਮੁਦ੍ਰਾ (ਗੋਰਖਨਾਥ)।',
      en: '1. Niranjan Sound & Chanchari Mudra (Location: Eyes, Master: Gorakhnath).'
    }
  },
  {
    id: 'ssss-v8',
    type: 'pada',
    lines: {
      hi: [
        'शब्द ओंकार भूचरी मुद्रा, त्रिकुटी है स्थाना ।',
        'व्यास देव ताहि पहिचाना, चांद सूर्य तिहि जाना ॥ ८ ॥'
      ],
      pb: [
        'ਸ਼ਬਦ ਓੰਕਾਰ ਭੂਚਰੀ ਮੁਦ੍ਰਾ, ਤ੍ਰਿਕੁਟੀ ਹੈ ਸ੍ਥਾਨਾ ।',
        'ਵ੍ਯਾਸ ਦੇਵ ਤਾਹਿ ਪਹਿਚਾਨਾ, ਚਾਂਦ ਸੂਰ੍ਯ ਤਿਹਿ ਜਾਣਾ ॥ ੮ ॥'
      ],
      en: [
        'Shabd omkaar bhoochari mudra, trikuti hai sthaana.',
        'Vyaas dev taahi pehchaana, chaand soorya tihi jaana. ||8||'
      ]
    },
    bhavarth: {
      hi: 'द्वितीय "ओंकार शब्द" और "भूचरी मुद्रा" का स्थान त्रिकुटी (सूर्य-चंद्र नाड़ी संगम) में है। महर्षि वेदव्यास जी ने इसे जाना, परंतु त्रिकुटी का ओंकार भी अक्षर-सीमा में है; निःअक्षर **सत्यनाम** इससे भी परे का धाम है।',
      pb: 'ਦੂਜਾ "ਓਅੰਕਾਰ ਸ਼ਬਦ" ਤੇ "ਭੂਚਰੀ ਮੁਦ੍ਰਾ" ਤ੍ਰਿਕੁਟੀ ਵਿੱਚ ਹੈ। ਮਹਾਰਿਸ਼ੀ ਵੇਦ ਵਿਆਸ ਜੀ ਨੇ ਇਸਨੂੰ ਜਾਣਿਆ, ਪਰ ਤ੍ਰਿਕੁਟੀ ਦਾ ਓਅੰਕਾਰ ਵੀ ਅੱਖਰੀ ਸੀਮਾ ਵਿੱਚ ਹੈ; ਨਿਃਅੱਖਰ **ਸਤਯਨਾਮ** ਇਸ ਤੋਂ ਪਰੇ ਦਾ ਧਾਮ ਹੈ।',
      en: 'The 2nd sound Omkar and Bhoochari Mudra reside in Trikuti. Realized by Maharishi Vyas, this represents cosmic mind, while the unwritten **Satyanaam** transcends Trikuti.'
    },
    spiritualEssence: {
      hi: '२. ओंकार शब्द + भूचरी मुद्रा (स्थान: त्रिकुटी, ऋषि: वेदव्यास)।',
      pb: '੨. ਓੰਕਾਰ ਸ਼ਬਦ ਤੇ ਭੂਚਰੀ ਮੁਦ੍ਰਾ (ਵੇਦਵਿਆਸ)।',
      en: '2. Omkar Sound & Bhoochari Mudra (Location: Trikuti, Sage: Vyas Dev).'
    }
  },
  {
    id: 'ssss-v9',
    type: 'pada',
    lines: {
      hi: [
        'सोहं शब्द अगोचरी मुद्रा, भंवर गुफा स्थाना ।',
        'शुकदेव मुनी ताहि पहिचाना, सुन अनहद को काना ॥ ९ ॥'
      ],
      pb: [
        'ਸੋਹੰ ਸ਼ਬਦ ਅਗੋਚਰੀ ਮੁਦ੍ਰਾ, ਭੰਵਰ ਗੁਫਾ ਸ੍ਥਾਨਾ ।',
        'ਸ਼ੁਕਦੇਵ ਮੁਨੀ ਤਾਹਿ ਪਹਿਚਾਨਾ, ਸੁਨ ਅਨਹਦ ਕੋ ਕਾਨਾ ॥ ੯ ॥'
      ],
      en: [
        'Soham shabd agochari mudra, bhanwar gupha sthaana.',
        'Shukdev muni taahi pehchaana, sun anhad ko kaana. ||9||'
      ]
    },
    bhavarth: {
      hi: 'तृतीय "सोहं शब्द" और "अगोचरी मुद्रा" भंवर गुफा में स्थित है। शुकदेव मुनि जी ने अनहद नाद के माध्यम से इसे पहचाना। यह सूक्ष्म सीमा है, परंतु अमर लोक की प्राप्ति केवल सतगुरु के **सत्यनाम** से होती है।',
      pb: 'ਤੀਜਾ "ਸੋਹੰ ਸ਼ਬਦ" ਤੇ "ਅਗੋਚਰੀ ਮੁਦ੍ਰਾ" ਭੰਵਰ ਗੁਫਾ ਵਿੱਚ ਹੈ। ਸ਼ੁਕਦੇਵ ਮੁਨੀ ਜੀ ਨੇ ਅਨਹਦ ਨਾਦ ਨਾਲ ਇਸਨੂੰ ਪਛਾਣਿਆ। ਪਰ ਸੱਚਖੰਡ ਦੀ ਪ੍ਰਾਪਤੀ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ **ਸਤਯਨਾਮ** ਨਾਲ ਹੁੰਦੀ ਹੈ।',
      en: 'The 3rd sound Soham and Agochari Mudra reside in Bhanwar Gupha, realized by Shukdev Muni. Yet true entry into the Eternal Abode requires the divine passport of **Satyanaam**.'
    },
    spiritualEssence: {
      hi: '३. सोहं शब्द + अगोचरी मुद्रा (स्थान: भंवर गुफा, मुनि: शुकदेव)।',
      pb: '੩. ਸੋਹੰ ਸ਼ਬਦ ਤੇ ਅਗੋਚਰੀ ਮੁਦ੍ਰਾ (ਸ਼ੁਕਦੇਵ)।',
      en: '3. Soham Sound & Agochari Mudra (Location: Bhanwar Gupha, Sage: Shukdev).'
    }
  },
  {
    id: 'ssss-v10',
    type: 'pada',
    lines: {
      hi: [
        'शब्द रंरकार खेचरी मुद्रा, दसवें द्वार ठिकाना ।',
        'ब्रह्मा विष्णु महेश आदि लो, रंरकार पहिचाना ॥ १० ॥'
      ],
      pb: [
        'ਸ਼ਬਦ ਰੰਰਕਾਰ ਖੇਚਰੀ ਮੁਦ੍ਰਾ, ਦਸਵੇਂ ਦ੍ਵਾਰ ਠਿਕਾਨਾ ।',
        'ਬ੍ਰਹ੍ਮਾ ਵਿਸ਼੍ਣੁ ਮਹੇਸ਼ ਆਦਿ ਲੋ, ਰੰਰਕਾਰ ਪਹਿਚਾਨਾ ॥ ੧੦ ॥'
      ],
      en: [
        'Shabd rarankaar khechari mudra, daswen dwaar thikaana.',
        'Brahma vishnu mahesh aadi lo, rarankaar pehchaana. ||10||'
      ]
    },
    bhavarth: {
      hi: 'चतुर्थ "रंरकार शब्द" और "खेचरी मुद्रा" का स्थान दसवें द्वार (शून्य) में है। ब्रह्मा, विष्णु, महेश आदि देवताओं ने रंरकार की साधना की। यह महाशून्य का छोर है, जिसके पार सतगुरु **सत्यनाम** की परम ज्योति प्रकाशित होती है।',
      pb: 'ਚੌਥਾ "ਰੰਰਕਾਰ ਸ਼ਬਦ" ਤੇ "ਖੇਚਰੀ ਮੁਦ੍ਰਾ" ਦਸਵੇਂ ਦੁਆਰ (ਸੁੰਨ) ਵਿੱਚ ਹੈ। ਬ੍ਰਹਮਾ, ਵਿਸ਼ਨੂੰ, ਮਹੇਸ਼ ਆਦਿ ਦੇਵਤਿਆਂ ਨੇ ਰੰਰਕਾਰ ਦੀ ਸਾਧਨਾ ਕੀਤੀ। ਇਸਦੇ ਪਾਰ ਸਤਿਗੁਰੂ **ਸਤਯਨਾਮ** ਦੀ ਪਾਵਨ ਜੋਤ ਜਗਦੀ ਹੈ।',
      en: 'The 4th sound Rarankar and Khechari Mudra reside at the 10th Door (Sunn), revered by Brahma, Vishnu, and Shiva. Beyond this void shines the eternal light of **Satyanaam**.'
    },
    spiritualEssence: {
      hi: '४. रंरकार शब्द + खेचरी मुद्रा (स्थान: दसवाँ द्वार, देव: त्रिदेव)।',
      pb: '੪. ਰੰਰਕਾਰ ਸ਼ਬਦ ਤੇ ਖੇਚਰੀ ਮੁਦ੍ਰਾ (ਤ੍ਰਿਦੇਵ)।',
      en: '4. Rarankar Sound & Khechari Mudra (Location: 10th Door, Deities: Trinity).'
    }
  },
  {
    id: 'ssss-v11',
    type: 'pada',
    lines: {
      hi: [
        'शक्ति शब्द ध्यान उनमुनी मुद्रा, बसे आकाश सनेही ।',
        'झिलमिल झिलमिल जोत दिखावे, जाने जनक विदेही ॥ ११ ॥'
      ],
      pb: [
        'ਸ਼ਕਤਿ ਸ਼ਬਦ ਧ੍ਯਾਨ ਉਨਮੁਨੀ ਮੁਦ੍ਰਾ, ਬਸੇ ਆਕਾਸ਼ ਸਨੇਹੀ ।',
        'ਝਿਲਮਿਲ ਝਿਲਮਿਲ ਜੋਤ ਦਿਖਾਵੇ, ਜਾਣੇ ਜਨਕ ਵਿਦੇਹੀ ॥ ੧੧ ॥'
      ],
      en: [
        'Shakti shabd dhyaan unmuni mudra, base aakaash snehi.',
        'Jhilmil jhilmil jot dikhaave, jaane janak videhi. ||11||'
      ]
    },
    bhavarth: {
      hi: 'पंचम "शक्ति शब्द" और "उनमुनी मुद्रा" सूक्ष्म गगन (ज्योति मण्डल) में वास करती है, जहाँ झिलमिल-झिलमिल दिव्य प्रकाश दिखाई देता है। राजा जनक विदेही ने इसे साधा। परंतु यह भी ज्योति मण्डल की सीमा है; निःअक्षर **सत्यनाम** ही जीव को पार अमर धाम ले जाता है।',
      pb: 'ਪੰਜਵਾਂ "ਸ਼ਕਤੀ ਸ਼ਬਦ" ਤੇ "ਉਨਮੁਨੀ ਮੁਦ੍ਰਾ" ਸੂਖਮ ਆਕਾਸ਼ (ਜੋਤੀ ਮੰਡਲ) ਵਿੱਚ ਹੈ, ਜਿੱਥੇ ਝਿਲਮਿਲ ਜੋਤ ਦਿਖਦੀ ਹੈ। ਰਾਜਾ ਜਨਕ ਵਿਦੇਹੀ ਨੇ ਇਸਨੂੰ ਸਾਧਿਆ। ਪਰ ਨਿਃਅੱਖਰ **ਸਤਯਨਾਮ** ਹੀ ਜੀਵ ਨੂੰ ਸੱਚੇ ਧਾਮ ਲੈ ਜਾਂਦਾ ਹੈ।',
      en: 'The 5th sound Shakti and Unmuni Mudra illuminate the astral firmament with shimmering light, mastered by King Janak Videhi. Yet beyond all inner light phenomena is the formless, unwritten **Satyanaam**.'
    },
    spiritualEssence: {
      hi: '५. शक्ति शब्द + उनमुनी मुद्रा (स्थान: सूक्ष्म गगन / ज्योति मण्डल, राजा जनक)।',
      pb: '੫. ਸ਼ਕਤੀ ਸ਼ਬਦ ਤੇ ਉਨਮੁਨੀ ਮੁਦ੍ਰਾ (ਰਾਜਾ ਜਨਕ)।',
      en: '5. Shakti Sound & Unmuni Mudra (Location: Astral Sky, Master: King Janak).'
    }
  },
  {
    id: 'ssss-v12',
    type: 'pada',
    lines: {
      hi: [
        'पाँच शब्द पाँच हैं मुद्रा, सो निश्चय कर जाना ।',
        'आगे पुरुष पुरान निःअक्षर, तिनकी खबर न जाना ॥ १२ ॥'
      ],
      pb: [
        'ਪਾਂਚ ਸ਼ਬਦ ਪਾਂਚ ਹੈਂ ਮੁਦ੍ਰਾ, ਸੋ ਨਿਸ਼੍ਚਯ ਕਰ ਜਾਨਾ ।',
        'ਆਗੇ ਪੁਰੁਸ਼ ਪੁਰਾਨ ਨਿਃਅਕਸ਼ਰ, ਤਿਨਕੀ ਖਬਰ ਨ ਜਾਨਾ ॥ ੧੨ ॥'
      ],
      en: [
        'Paanch shabd paanch hain mudra, so nishchay kar jaana.',
        'Aage purush puraan nih-akshar, tinki khabar na jaana. ||12||'
      ]
    },
    bhavarth: {
      hi: 'बड़े-बड़े मुनियों ने इन पाँच शब्दों और पाँच मुद्राओं को ही पूर्ण मोक्ष मानकर दृढ़ निश्चय कर लिया, परंतु इनके भी आगे जो आदि पुरुष, पुराण सनातन **निःअक्षर सत्यनाम** है, उसकी खबर किसी को नहीं मिली।',
      pb: 'ਵੱਡੇ-ਵੱਡੇ ਮੁਨੀਆਂ ਨੇ ਇਹਨਾਂ ੫ ਸ਼ਬਦਾਂ ਤੇ ਮੁਦ੍ਰਾਵਾਂ ਨੂੰ ਹੀ ਪੂਰਨ ਮੁਕਤੀ ਮੰਨ ਲਿਆ, ਪਰ ਇਹਨਾਂ ਤੋਂ ਪਰੇ ਜੋ ਸਨਾਤਨ **ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ** ਹੈ, ਉਸਦੀ ਖ਼ਬਰ ਕਿਸੇ ਨੂੰ ਨਾ ਮਿਲੀ।',
      en: 'Seekers anchored their faith in these 5 sounds and mudras, yet remained oblivious to the Ancient Eternal Being and the unwritten **Nih-Akshar Satyanaam** beyond them.'
    },
    spiritualEssence: {
      hi: '५ शब्द व मुद्राओं से परे आदि सनातन निःअक्षर पुरुष की अज्ञानता।',
      pb: 'ਨਿਃਅੱਖਰ ਪੁਰਖ ਦੀ ਅਗਿਆਨਤਾ।',
      en: 'Ignorance of the Eternal Unwritten Purush beyond the 5 sounds.'
    }
  },
  {
    id: 'ssss-v13',
    type: 'pada',
    lines: {
      hi: [
        'नौ नाथ चौरासी सिद्धि लो, पाँच शब्द में अटके ।',
        'मुद्रा साध रहे घट भीतर, फिर ओंधे मुख लटके ॥ १३ ॥'
      ],
      pb: [
        'ਨੌ ਨਾਥ ਚੌਰਾਸੀ ਸਿੱਧਿ ਲੋ, ਪਾਂਚ ਸ਼ਬਦ ਮੇਂ ਅਟਕੇ ।',
        'ਮੁਦ੍ਰਾ ਸਾਧ ਰਹੇ ਘਟ ਭੀਤਰ, ਫਿਰ ਓਂਧੇ ਮੁਖ ਲਟਕੇ ॥ ੧੩ ॥'
      ],
      en: [
        'Nau naath chaurasi siddhi lo, paanch shabd mein atke.',
        'Mudra saadh rahe ghat bheetar, phir ondhe mukh latke. ||13||'
      ]
    },
    bhavarth: {
      hi: 'नव नाथ और चौरासी सिद्ध भी इन्हीं पाँच शब्दों और आभ्यंतर मुद्राओं की साधना में अटके रहे। इस कारण मृत्यु के उपरांत वे आवागमन से मुक्त न हो सके और पुनः माता के गर्भ में औंधे मुख लटकना पड़ा। केवल **सत्यनाम** ही आवागमन को सदा के लिए मिटाता है।',
      pb: 'ਨੌ ਨਾਥ ਤੇ ੮੪ ਸਿੱਧ ਵੀ ਇਹਨਾਂ ੫ ਸ਼ਬਦਾਂ ਤੇ ਮੁਦ੍ਰਾਵਾਂ ਵਿੱਚ ਅਟਕੇ ਰਹੇ। ਇਸ ਲਈ ਉਹ ਜਨਮ-ਮਰਨ ਦੇ ਗੇੜ ਤੋਂ ਮੁਕਤ ਨਾ ਹੋ ਸਕੇ। ਕੇਵਲ **ਸਤਯਨਾਮ** ਹੀ ਚੌਰਾਸੀ ਦੇ ਗੇੜ ਨੂੰ ਸਦਾ ਲਈ ਮਿਟਾਉਂਦਾ ਹੈ।',
      en: 'Even the 9 Naths and 84 Siddhas remained confined within the 5 sounds. Failing to realize **Satyanaam**, they returned to the cycle of rebirth. Only **Satyanaam** liberates permanently.'
    },
    spiritualEssence: {
      hi: 'सिद्धों व नाथों का जन्म-मरण चक्र में पुनरागमन।',
      pb: 'ਸਿੱਧਾਂ ਤੇ ਨਾਥਾਂ ਦਾ ਜਨਮ-ਮਰਨ ਚੱਕਰ।',
      en: 'Return of Siddhas and Naths to the womb cycle.'
    }
  },
  {
    id: 'ssss-v14',
    type: 'pada',
    lines: {
      hi: [
        'पाँच शब्द पाँच है मुद्रा, लोक द्वीप यमजाला ।',
        'कहैं कबीर अक्षर के आगे, निःअक्षर उजियाला ॥ १४ ॥'
      ],
      pb: [
        'ਪਾਂਚ ਸ਼ਬਦ ਪਾਂਚ ਹੈ ਮੁਦ੍ਰਾ, ਲੋਕ ਦ੍ਵੀਪ ਯਮਜਾਲਾ ।',
        'ਕਹੈਂ ਕਬੀਰ ਅਕਸ਼ਰ ਕੇ ਆਗੇ, ਨਿਃਅਕਸ਼ਰ ਉਜਿਯਾਲਾ ॥ ੧੪ ॥'
      ],
      en: [
        'Paanch shabd paanch hai mudra, lok deep yamjaala.',
        'Kahain kabir akshar ke aage, nih-akshar ujiyaala. ||14||'
      ]
    },
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब स्पष्ट घोषणा करते हैं कि ये पाँचों शब्द, पाँचों मुद्राएँ और चौदह लोक-द्वीप सब काल-यम का बुना हुआ जाल हैं! क्षर (पिण्ड) और अक्षर (ब्रह्माण्ड) के भी आगे वह **निःअक्षर सत्यनाम** का परम अलौकिक उजियारा है, जिसे केवल सतगुरु भेद से ही प्राप्त किया जा सकता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ੫ ਸ਼ਬਦ, ੫ ਮੁਦ੍ਰਾਵਾਂ ਤੇ ਲੋਕ-ਦੀਪ ਸਭ ਯਮ ਦਾ ਜਾਲ ਹਨ! ਖ਼ਰ ਤੇ ਅੱਖਰ ਤੋਂ ਪਾਰ **ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ** ਦਾ ਅਮਰ ਪ੍ਰਕਾਸ਼ ਹੈ, ਜੋ ਸਤਿਗੁਰੂ ਕਿਰਪਾ ਨਾਲ ਹੀ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb proclaims: The 5 sounds and 5 mudras are the grand trap of Yam! Beyond all written letters and cosmic sounds shines the Supreme Illumination of **Nih-Akshar Satyanaam**!'
    },
    spiritualEssence: {
      hi: 'अक्षर (ब्रह्म) के पार परम निःअक्षर (सत्यनाम / सत्यपुरुष) की अमर प्राप्ति।',
      pb: 'ਅੱਖਰ ਤੋਂ ਪਾਰ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ।',
      en: 'Transcending Akshar to reach the Supreme Eternal Unwritten Realm of Nih-Akshar Satyanaam.'
    }
  }
];

export const MUDRA_SOUND_SUMMARY: MudraSoundInfo[] = [
  { 
    shabdName: { hi: "निरंजन (Niranjan)", pb: "ਨਿਰੰਜਨ (Niranjan)", en: "Niranjan" }, 
    mudraName: { hi: "चांचरी मुद्रा (Chanchari)", pb: "ਚਾਂਚਰੀ ਮੁਦ੍ਰਾ (Chanchari)", en: "Chanchari Mudra" }, 
    bodyLocation: { hi: "नयन / आज्ञा चक्र (Eyes)", pb: "ਨੈਣ / ਆਗਿਆ ਚੱਕਰ (Eyes)", en: "Eyes / Agya Chakra" }, 
    associatedRishiDeity: { hi: "गोरखनाथ योगी", pb: "ਗੋਰਖਨਾਥ ਜੋਗੀ", en: "Yogi Gorakhnath" }, 
    spiritualLevelAndTrap: { hi: "प्रथम शब्द - काल जाल", pb: "ਪਹਿਲਾ ਸ਼ਬਦ - ਕਾਲ ਜਾਲ", en: "1st Sound - Trap of Kaal" } 
  },
  { 
    shabdName: { hi: "ओंकार (Omkar)", pb: "ਓਅੰਕਾਰ (Omkar)", en: "Omkar" }, 
    mudraName: { hi: "भूचरी मुद्रा (Bhoochari)", pb: "ਭੂਚਰੀ ਮੁਦ੍ਰਾ (Bhoochari)", en: "Bhoochari Mudra" }, 
    bodyLocation: { hi: "त्रिकुटी (Trikuti)", pb: "ਤ੍ਰਿਕੁਟੀ (Trikuti)", en: "Trikuti" }, 
    associatedRishiDeity: { hi: "महर्षि व्यास देव जी", pb: "ਮਹਾਰਿਸ਼ੀ ਵਿਆਸ ਦੇਵ ਜੀ", en: "Maharishi Vyas Dev Ji" }, 
    spiritualLevelAndTrap: { hi: "द्वितीय शब्द - ब्रह्म लोक", pb: "ਦੂਜਾ ਸ਼ਬਦ - ਬ੍ਰਹਮ ਲੋਕ", en: "2nd Sound - Brahm Lok" } 
  },
  { 
    shabdName: { hi: "सोहं (Soham)", pb: "ਸੋਹੰ (Soham)", en: "Soham" }, 
    mudraName: { hi: "अगोचरी मुद्रा (Agochari)", pb: "ਅਗੋਚਰੀ ਮੁਦ੍ਰਾ (Agochari)", en: "Agochari Mudra" }, 
    bodyLocation: { hi: "भंवर गुफा (Bhanwar Gupha)", pb: "ਭੰਵਰ ਗੁਫਾ (Bhanwar Gupha)", en: "Bhanwar Gupha" }, 
    associatedRishiDeity: { hi: "शुकदेव मुनि जी", pb: "ਸ਼ੁਕਦੇਵ ਮੁਨੀ ਜੀ", en: "Shukdev Muni Ji" }, 
    spiritualLevelAndTrap: { hi: "तृतीय शब्द - सूक्ष्म नाद", pb: "ਤੀਜਾ ਸ਼ਬਦ - ਸੂਖਮ ਨਾਦ", en: "3rd Sound - Subtle Naad" } 
  },
  { 
    shabdName: { hi: "रंरकार (Rarankar)", pb: "ਰੰਰਕਾਰ (Rarankar)", en: "Rarankar" }, 
    mudraName: { hi: "खेचरी मुद्रा (Khechari)", pb: "ਖੇਚਰੀ ਮੁਦ੍ਰਾ (Khechari)", en: "Khechari Mudra" }, 
    bodyLocation: { hi: "दशम द्वार / शून्य (10th Door)", pb: "ਦਸਮ ਦੁਆਰ / ਸੁੰਨ (10th Door)", en: "10th Door / Sunn" }, 
    associatedRishiDeity: { hi: "त्रिदेव (ब्रह्मा, विष्णु, महेश)", pb: "ਤ੍ਰਿਦੇਵ (ਬ੍ਰਹਮਾ, ਵਿਸ਼ਨੂੰ, ਮਹੇਸ਼)", en: "Tridev (Brahma, Vishnu, Mahesh)" }, 
    spiritualLevelAndTrap: { hi: "चतुर्थ शब्द - शून्य लोक", pb: "ਚੌਥਾ ਸ਼ਬਦ - ਸੁੰਨ ਲੋਕ", en: "4th Sound - Sunn Lok" } 
  },
  { 
    shabdName: { hi: "शक्ति (Shakti)", pb: "ਸ਼ਕਤੀ (Shakti)", en: "Shakti" }, 
    mudraName: { hi: "उनमुनी मुद्रा (Unmuni)", pb: "ਉਨਮੁਨੀ ਮੁਦ੍ਰਾ (Unmuni)", en: "Unmuni Mudra" }, 
    bodyLocation: { hi: "गगन / सूक्ष्म आकाश (Astral Sky)", pb: "ਗਗਨ / ਸੂਖਮ ਅਕਾਸ਼ (Astral Sky)", en: "Gagan / Astral Sky" }, 
    associatedRishiDeity: { hi: "राजा जनक विदेही", pb: "ਰਾਜਾ ਜਨਕ ਵਿਦੇਹੀ", en: "King Janak Videhi" }, 
    spiritualLevelAndTrap: { hi: "पंचम शब्द - ज्योति मण्डल", pb: "ਪੰਜਵਾਂ ਸ਼ਬਦ - ਜੋਤੀ ਮੰਡਲ", en: "5th Sound - Jyoti Mandal" } 
  },
];
