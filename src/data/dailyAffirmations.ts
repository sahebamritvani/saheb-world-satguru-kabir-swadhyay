import { Language } from '../types';

export interface DailyAffirmation {
  id: string;
  category?: string;
  text: {
    hi: string;
    pb: string;
    en: string;
  };
  explanation?: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const dailyAffirmations: DailyAffirmation[] = [
  {
    id: '1',
    category: 'सत्यनाम शरण (Refuge in Naam)',
    text: {
      hi: 'मैं सत्यनाम के पावन प्रकाश और सतगुरु की अनन्य शरण में हूँ।',
      pb: 'ਮੈਂ ਸਤਯਨਾਮ ਦੇ ਪਾਵਨ ਪ੍ਰਕਾਸ਼ ਅਤੇ ਸਤਿਗੁਰੂ ਦੀ ਅਨੰਨ ਸ਼ਰਨ ਵਿੱਚ ਹਾਂ।',
      en: 'I dwell in the holy light of Satyanaam and the divine shelter of Satguru.'
    },
    explanation: {
      hi: 'सत्यनाम का स्मरण आत्मा को समस्त भयों से मुक्त कर परम शांति प्रदान करता है।',
      pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਆਤਮਾ ਨੂੰ ਸਾਰੇ ਡਰਾਂ ਤੋਂ ਮੁਕਤ ਕਰਕੇ ਪਰਮ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ।',
      en: 'Remembering Satyanaam frees the soul from all fears and imparts supreme tranquility.'
    }
  },
  {
    id: '2',
    category: 'हृदय शुद्धि (Pure Heart)',
    text: {
      hi: 'मेरा हृदय काम, क्रोध, लोभ और अहंकार से मुक्त होकर निर्मल हो रहा है।',
      pb: 'ਮੇਰਾ ਹਿਰਦਾ ਕਾਮ, ਕ੍ਰੋਧ, ਲੋਭ ਅਤੇ ਹਉਮੈ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਨਿਰਮਲ ਹੋ ਰਿਹਾ ਹੈ।',
      en: 'My heart is purified, releasing anger, greed, ego, and worldly attachment.'
    },
    explanation: {
      hi: 'निर्मल हृदय में ही परमात्मा का पावन दीदार और आत्म-साक्षात्कार संभव है।',
      pb: 'ਨਿਰਮਲ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਪਰਮਾਤਮਾ ਦਾ ਪਾਵਨ ਦੀਦਾਰ ਸੰਭਵ ਹੈ।',
      en: 'Only in a pure and humble heart does the divine eternal truth reveal itself.'
    }
  },
  {
    id: '3',
    category: 'आत्म-बोध (Soul Realization)',
    text: {
      hi: 'मैं देह नहीं, अविनाशी व साक्षी स्वरूप चेतन आत्मा हूँ।',
      pb: 'ਮੈਂ ਸਰੀਰ ਨਹੀਂ, ਅਵਿਨਾਸ਼ੀ ਤੇ ਸਾਖੀ ਸਰੂਪ ਚੇਤਨ ਆਤਮਾ ਹਾਂ।',
      en: 'I am not merely this physical body, but the imperishable, conscious soul.'
    },
    explanation: {
      hi: 'आत्म-बोध से मनुष्य संसार के नश्वर सुख-दुःख से ऊपर उठ जाता है।',
      pb: 'ਆਤਮ-ਬੋਧ ਨਾਲ ਮਨੁੱਖ ਸੰਸਾਰ ਦੇ ਸੁੱਖ-ਦੁੱਖ ਤੋਂ ਉੱਪਰ ਉੱਠ ਜਾਂਦਾ ਹੈ।',
      en: 'Through self-realization, one transcends the ephemeral dualities of joy and grief.'
    }
  },
  {
    id: '4',
    category: 'श्वास-सिमरन (Breath Awareness)',
    text: {
      hi: 'मेरा प्रत्येक श्वास सत्यनाम के शांत अजपा-जाप में रम रहा है।',
      pb: 'ਮੇਰਾ ਹਰ ਇੱਕ ਸਵਾਸ ਸਤਯਨਾਮ ਦੇ ਸ਼ਾਂਤ ਅਜਪਾ-ਜਾਪ ਵਿੱਚ ਲੀਨ ਹੋ ਰਿਹਾ ਹੈ।',
      en: 'Every breath I take flows into the effortless, silent vibration of Satyanaam.'
    },
    explanation: {
      hi: 'श्वासों का सदुपयोग ही मनुष्य जीवन का सबसे अनमोल और सच्चा खजाना है।',
      pb: 'ਸਵਾਸਾਂ ਦੀ ਸਹੀ ਸੰਭਾਲ ਹੀ ਮਨੁੱਖਾ ਜਨਮ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਖਜ਼ਾਨਾ ਹੈ।',
      en: 'Mindful breath is the most precious treasure given to human consciousness.'
    }
  },
  {
    id: '5',
    category: 'समर्पण व शुकराना (Humility & Gratitude)',
    text: {
      hi: 'जीवन में जो भी प्राप्त हुआ है, उस सबके लिए मैं सतगुरु के प्रति कृतज्ञ हूँ।',
      pb: 'ਜੀਵਨ ਵਿੱਚ ਜੋ ਕੁਝ ਵੀ ਮਿਲਿਆ ਹੈ, ਉਸ ਸਭ ਲਈ ਮੈਂ ਸਤਿਗੁਰੂ ਦਾ ਸ਼ੁਕਰਗੁਜ਼ਾਰ ਹਾਂ।',
      en: 'For every breath and blessing received in this life, my soul is deeply grateful to Satguru.'
    },
    explanation: {
      hi: 'शुकराने और विनम्रता के भाव से मन की सारी चिंताएं और विकार स्वतः मिट जाते हैं।',
      pb: 'ਸ਼ੁਕਰਾਨੇ ਤੇ ਨਿਮਰਤਾ ਨਾਲ ਮਨ ਦੀਆਂ ਸਾਰੀਆਂ ਚਿੰਤਾਵਾਂ ਦੂਰ ਹੋ ਜਾਂਦੀਆਂ ਹਨ।',
      en: 'Gratitude dissolves anxiety, filling the inner being with deep serene peace.'
    }
  },
  {
    id: '6',
    category: 'सत्य वचन (Truth & Speech)',
    text: {
      hi: 'मेरी वाणी सदैव कोमल, सत्य और सभी के लिए कल्याणकारी है।',
      pb: 'ਮੇਰੀ ਬੋਲੀ ਸਦਾ ਮਿੱਠੀ, ਸੱਚੀ ਅਤੇ ਸਭ ਦਾ ਭਲਾ ਮੰਗਣ ਵਾਲੀ ਹੈ।',
      en: 'My words are gentle, truthful, compassionate, and uplifting to all beings.'
    },
    explanation: {
      hi: 'ऐसी बानी बोलिए मन का आपा खोय, औरन को सीतल करै आपहु सीतल होय।',
      pb: 'ਐਸੀ ਬਾਣੀ ਬੋਲੀਏ ਮਨ ਕਾ ਆਪਾ ਖੋਇ, ਅਉਰਨ ਕੋ ਸੀਤਲ ਕਰੈ ਆਪਹੁ ਸੀਤਲ ਹੋਇ।',
      en: 'Speak gentle words free from ego, calming others and bringing peace to yourself.'
    }
  },
  {
    id: '7',
    category: 'धैर्य व क्षमा (Patience & Forgiveness)',
    text: {
      hi: 'मैं सबको क्षमा करता हूँ और अपने भीतर अगाध धैर्य व शांति धारण करता हूँ।',
      pb: 'ਮੈਂ ਸਭ ਨੂੰ ਮਾਫ਼ ਕਰਦਾ ਹਾਂ ਅਤੇ ਆਪਣੇ ਅੰਦਰ ਅਥਾਹ ਧੀਰਜ ਤੇ ਸ਼ਾਂਤੀ ਧਾਰਨ ਕਰਦਾ ਹਾਂ।',
      en: 'I forgive all beings unconditionally, cultivating deep patience and inner harmony.'
    },
    explanation: {
      hi: 'जहाँ दया तहाँ धर्म है, जहाँ लोभ तहाँ पाप। जहाँ क्रोध तहाँ काल है, जहाँ छिमा तहाँ आप।',
      pb: 'ਜਹਾਂ ਦਇਆ ਤਹਾਂ ਧਰਮ ਹੈ, ਜਹਾਂ ਲੋਭ ਤਹਾਂ ਪਾਪ। ਜਹਾਂ ਕ੍ਰੋਧ ਤਹਾਂ ਕਾਲ ਹੈ, ਜਹਾਂ ਛਿਮਾ ਤਹਾਂ ਆਪ।',
      en: 'Where there is forgiveness and compassion, the Divine presence naturally resides.'
    }
  },
  {
    id: '8',
    category: 'सहज साधना (Sahaj Living)',
    text: {
      hi: 'मैं अपने कर्तव्यों को निष्काम भाव और सत्य निष्ठा से पूरा कर रहा हूँ।',
      pb: 'ਮੈਂ ਆਪਣੇ ਫਰਜ਼ਾਂ ਨੂੰ ਨਿਸ਼ਕਾਮ ਭਾਵਨਾ ਅਤੇ ਸੱਚੀ ਲਗਨ ਨਾਲ ਪੂਰਾ ਕਰ ਰਿਹਾ ਹਾਂ।',
      en: 'I fulfill all my daily responsibilities with selfless dedication and integrity.'
    },
    explanation: {
      hi: 'हाथ काम में और सुरति सतगुरु के पावन नाम में — यही सहज योग है।',
      pb: 'ਹੱਥ ਕਾਰ ਵੱਲ ਤੇ ਸੁਰਤ ਕਰਤਾਰ ਵੱਲ — ਇਹੀ ਸਹਿਜ ਯੋਗ ਹੈ।',
      en: 'Hands engaged in selfless action while consciousness remains attuned to the Divine.'
    }
  },
  {
    id: '9',
    category: 'शूरवीरता एवं आत्म-बल (Spiritual Fortitude)',
    text: {
      hi: 'सत्य के मार्ग पर चलने के लिए मेरे भीतर असीम आत्म-बल और निर्भयता जागृत है।',
      pb: 'ਸੱਚ ਦੇ ਮਾਰਗ ਤੇ ਚੱਲਣ ਲਈ ਮੇਰੇ ਅੰਦਰ ਅਥਾਹ ਆਤਮ-ਬਲ ਅਤੇ ਨਿਰਭੈਤਾ ਜਾਗ੍ਰਿਤ ਹੈ।',
      en: 'Immense spiritual fortitude and divine courage awaken within me to walk the path of truth.'
    },
    explanation: {
      hi: 'सूरा सो पहचानिये, जु लड़े दीन के हेत। पुरजा पुरजा कटि मरै, कबहू न छाड़े खेत।',
      pb: 'ਸੂਰਾ ਸੋ ਪਹਿਚਾਨੀਐ, ਜੁ ਲਰੈ ਦੀਨ ਕੇ ਹੇਤ। ਪੁਰਜਾ ਪੁਰਜਾ ਕਟਿ ਮਰੈ, ਕਬਹੂ ਨ ਛਾਡੈ ਖੇਤ।',
      en: 'The true warrior fights for truth and compassion, never wavering from the battlefield of life.'
    }
  },
  {
    id: '10',
    category: 'पारखी विवेक (Discerning Wisdom)',
    text: {
      hi: 'मैं सार और असार का विवेकपूर्वक निर्णय कर केवल सत्य को ग्रहण करता हूँ।',
      pb: 'ਮੈਂ ਸਾਰ ਅਤੇ ਅਸਾਰ ਦਾ ਫੈਸਲਾ ਕਰਕੇ ਕੇਵਲ ਸੱਚ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹਾਂ।',
      en: 'With discerning wisdom, I distinguish essence from illusion and embrace pure truth.'
    },
    explanation: {
      hi: 'साधु ऐसा चाहिए जैसा सूप सुभाय। सार-सार को गहि रहै, थोथा देइ उड़ाय।',
      pb: 'ਸਾਧੂ ਐਸਾ ਚਾਹੀਐ ਜੈਸਾ ਸੂਪ ਸੁਭਾਇ। ਸਾਰ-ਸਾਰ ਕੋ ਗਹਿ ਰਹੈ, ਥੋਥਾ ਦੇਇ ਉਡਾਇ।',
      en: 'Discern like a winnowing basket: retain the wholesome grain of truth and discard empty chaff.'
    }
  },
  {
    id: '11',
    category: 'संतोष एवं तृष्णा-मुक्ति (Contentment)',
    text: {
      hi: 'मेरे भीतर परम संतोष का अमृत बह रहा है, सांसारिक तृष्णाएं शांत हो चुकी हैं।',
      pb: 'ਮੇਰੇ ਅੰਦਰ ਪਰਮ ਸੰਤੋਖ ਦਾ ਅੰਮ੍ਰਿਤ ਵਹਿ ਰਿਹਾ ਹੈ, ਸੰਸਾਰਕ ਤ੍ਰਿਸ਼ਨਾਵਾਂ ਸ਼ਾਂਤ ਹੋ ਗਈਆਂ ਹਨ।',
      en: 'The nectar of supreme contentment flows within me; all restless worldly cravings are pacified.'
    },
    explanation: {
      hi: 'गोधन गजधन बाजिधन और रतनधन खान। जब आवै संतोष धन, सब धन धूरि समान।',
      pb: 'ਗੋਧਨ ਗਜਧਨ ਬਾਜਿਧਨ ਔਰ ਰਤਨਧਨ ਖਾਨ। ਜਬ ਆਵੈ ਸੰਤੋਸ਼ ਧਨ, ਸਬ ਧਨ ਧੂਰਿ ਸਮਾਨ।',
      en: 'When the supreme wealth of contentment dawns, all worldly riches seem like dust.'
    }
  },
  {
    id: '12',
    category: 'परनिंदा त्याग व मौन (Freedom from Gossip)',
    text: {
      hi: 'मैं किसी की निंदा-आलोचना नहीं करता और अपने भीतर परम मौन का अनुभव करता हूँ।',
      pb: 'ਮੈਂ ਕਿਸੇ ਦੀ ਨਿੰਦਾ ਨਹੀਂ ਕਰਦਾ ਅਤੇ ਆਪਣੇ ਅੰਦਰ ਪਰਮ ਮੌਨ ਦਾ ਅਨੁਭਵ ਕਰਦਾ ਹਾਂ।',
      en: 'I refrain from criticism and slander, dwelling in pure inner silence.'
    },
    explanation: {
      hi: 'बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसे बुरा न कोय।',
      pb: 'ਬੁਰਾ ਜੋ ਦੇਖਨ ਮੈਂ ਚਲਾ, ਬੁਰਾ ਨ ਮਿਲਿਆ ਕੋਇ। ਜੋ ਦਿਲ ਖੋਜਾ ਆਪਣਾ, ਮੁਝਸੇ ਬੁਰਾ ਨ ਕੋਇ।',
      en: 'When looking within, one realizes self-purification is the true path, letting go of judgment.'
    }
  },
  {
    id: '13',
    category: 'निष्काम परमार्थ (Selfless Service)',
    text: {
      hi: 'मेरा प्रत्येक कर्म दीन-दुखियों की सेवा और सर्व-कल्याण की भावना से ओतप्रोत है।',
      pb: 'ਮੇਰਾ ਹਰ ਕਰਮ ਲੋੜਵੰਦਾਂ ਦੀ ਸੇਵਾ ਅਤੇ ਸਰਬੱਤ ਦੇ ਭਲੇ ਦੀ ਭਾਵਨਾ ਨਾਲ ਭਰਪੂਰ ਹੈ।',
      en: 'My actions are devoted to selfless service, kindness, and universal well-being.'
    },
    explanation: {
      hi: 'बृच्छ कबहुं नहिं फल भखै, नदी न संचै नीर। परमारथ के कारने, साधुन धरा सरीर।',
      pb: 'ਬ੍ਰਿਛ ਕਬਹੂੰ ਨਹਿ ਫਲ ਭਖੈ, ਨਦੀ ਨ ਸੰਚੈ ਨੀਰ। ਪਰਮਾਰਥ ਕੇ ਕਾਰਨੇ, ਸਾਧੁਨ ਧਰਾ ਸਰੀਰ।',
      en: 'Just as trees bear fruit and rivers flow for others, life is glorified through selfless charity.'
    }
  },
  {
    id: '14',
    category: 'समदृष्टि एवं निर्वैरता (Equanimity)',
    text: {
      hi: 'मैं घट-घट में एक ही आत्म-ज्योति देखता हूँ; मेरा किसी से कोई द्वेष नहीं है।',
      pb: 'ਮੈਂ ਹਰ ਇੱਕ ਘਟ ਵਿੱਚ ਇੱਕੋ ਆਤਮ-ਜੋਤ ਦੇਖਦਾ ਹਾਂ; ਮੇਰਾ ਕਿਸੇ ਨਾਲ ਕੋਈ ਵੈਰ ਨਹੀਂ ਹੈ।',
      en: 'I perceive the one divine light in every heart; I harbor malice towards none.'
    },
    explanation: {
      hi: 'घट-घट मेरा सांईयां, सूनी सेज न कोय। बलिहारी वा घट की, जा घट परगट होय।',
      pb: 'ਘਟ-ਘਟ ਮੇਰਾ ਸਾਈਆਂ, ਸੂਨੀ ਸੇਜ ਨ ਕੋਇ। ਬਲਿਹਾਰੀ ਵਾ ਘਟ ਕੀ, ਜਾ ਘਟ ਪਰਗਟ ਹੋਇ।',
      en: 'The Divine abides in every vessel; blessed is the heart where this oneness is realized.'
    }
  },
  {
    id: '15',
    category: 'काल-भय विमुक्ति (Fearlessness of Time)',
    text: {
      hi: 'सत्यनाम की नौका पर आरूढ़ होकर मैं काल और मृत्यु के भय से सर्वथा मुक्त हूँ।',
      pb: 'ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਤੇ ਸਵਾਰ ਹੋ ਕੇ ਮੈਂ ਕਾਲ ਤੇ ਮੌਤ ਦੇ ਡਰ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਕਤ ਹਾਂ।',
      en: 'Anchored upon the vessel of Satyanaam, I am entirely free from the fear of death.'
    },
    explanation: {
      hi: 'कबीर काल कुहाड़ा मारिगा, तूं परि रहु राम की लारि। राम नाम रस पीवणा, काहे को भरम विचारि।',
      pb: 'ਕਬੀਰ ਕਾਲ ਕੁਹਾੜਾ ਮਾਰਿਗਾ, ਤੂੰ ਪਰਿ ਰਹੁ ਰਾਮ ਕੀ ਲਾਰਿ। ਰਾਮ ਨਾਮ ਰਸ ਪੀਵਣਾ, ਕਾਹੇ ਕੋ ਭਰਮ ਵਿਚਾਰਿ।',
      en: 'Take steadfast shelter in the Truth; drink the nectar of Naam and fear no worldly illusion.'
    }
  },
  {
    id: '16',
    category: 'सुरति-शब्द योग (Inward Stillness)',
    text: {
      hi: 'मेरी सुरति चंचल विषयों से सिमटकर अंतर्मुखी होकर दिव्य अनहद में लीन हो रही है।',
      pb: 'ਮੇਰੀ ਸੁਰਤ ਚੰਚਲ ਵਿਸ਼ਿਆਂ ਤੋਂ ਸਿਮਟ ਕੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਅਨਹਦ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਹੋ ਰਹੀ ਹੈ।',
      en: 'My consciousness turns inward, merging into the unstruck celestial melody of the Soul.'
    },
    explanation: {
      hi: 'तन थिर मन थिर सुरति थिर, पलक न डिगै अंग। कबीर तहाँ समाधि है, अनहद बाजे रंग।',
      pb: 'ਤਨ ਥਿਰ ਮਨ ਥਿਰ ਸੁਰਤ ਥਿਰ, ਪਲਕ ਨ ਡਿਗੈ ਅੰਗ। ਕਬੀਰ ਤਹਾਂ ਸਮਾਧਿ ਹੈ, ਅਨਹਦ ਬਾਜੈ ਰੰਗ।',
      en: 'When body, mind, and consciousness are still, the soul enters effortless samadhi.'
    }
  },
  {
    id: '17',
    category: 'गुरु-चरणानुराग (Love for the Master)',
    text: {
      hi: 'मेरे रोम-रोम में सतगुरु के पावन चरणों का अनन्य प्रेम और श्रद्धा प्रवाहित है।',
      pb: 'ਮੇਰੇ ਰੋਮ-ਰੋਮ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਦਾ ਅਥਾਹ ਪ੍ਰੇਮ ਅਤੇ ਸ਼ਰਧਾ ਵਹਿ ਰਹੀ ਹੈ।',
      en: 'Every fiber of my being resonates with profound devotion and love for Satguru.'
    },
    explanation: {
      hi: 'गुरु गोविंद दोऊ खड़े, काके लागूं पायँ। बलिहारी गुरु आपने, गोविंद दियो बताय।',
      pb: 'ਗੁਰੂ ਗੋਵਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਇ। ਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਣੇ, ਗੋਵਿੰਦ ਦੀਓ ਬਤਾਇ।',
      en: 'Eternal salutations to the Master, through whose divine grace the supreme truth is revealed.'
    }
  },
  {
    id: '18',
    category: 'स्वाध्याय एवं आचारण शुद्धि (Living Wisdom)',
    text: {
      hi: 'मैं केवल शास्त्रों का वाचन नहीं करता, अपितु वचनों को अपने आचरण में जीता हूँ।',
      pb: 'ਮੈਂ ਕੇਵਲ ਬਾਣੀ ਪੜ੍ਹਦਾ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਉਸ ਨੂੰ ਆਪਣੇ ਰੋਜ਼ਾਨਾ ਅਮਲ ਵਿੱਚ ਜਿਊਂਦਾ ਹਾਂ।',
      en: 'I do not merely read holy scriptures; I embody the sacred word in daily action.'
    },
    explanation: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय।',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ। ਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ।',
      en: 'True wisdom is not scholarly pride, but the living practice of love, truth, and humility.'
    }
  },
  {
    id: '19',
    category: 'अहंकार विसर्जन (Dissolution of Ego)',
    text: {
      hi: 'मैं अपनी क्षुद्र अहं-भावना को विसर्जित कर परमात्मा की विशालता में विलीन हूँ।',
      pb: 'ਮੈਂ ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਮਿਟਾ ਕੇ ਪਰਮਾਤਮਾ ਦੀ ਵਿਸ਼ਾਲਤਾ ਵਿੱਚ ਲੀਨ ਹਾਂ।',
      en: 'Surrendering the petty ego, I dissolve peacefully into the vast ocean of Divine Light.'
    },
    explanation: {
      hi: 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं। सब अंधियारा मिटि गया, जब दीपक देख्या माहिं।',
      pb: 'ਜਬ ਮੈਂ ਥਾ ਤਬ ਹਰਿ ਨਹੀਂ, ਅਬ ਹਰਿ ਹੈਂ ਮੈਂ ਨਾਹਿਂ। ਸਬ ਅੰਧਿਆਰਾ ਮਿਟਿ ਗਇਆ, ਜਬ ਦੀਪਕ ਦੇਖਿਆ ਮਾਹਿਂ।',
      en: 'When the ego vanishes, the Divine alone remains; all darkness is dispelled by the inner lamp.'
    }
  },
  {
    id: '20',
    category: 'सहज आनंद एवं अचल शांति (Eternal Joy)',
    text: {
      hi: 'मेरा वास्तविक स्वरूप शाश्वत आनंद, अखंड शांति और ज्योतिर्मय सत्य है।',
      pb: 'ਮੇਰਾ ਅਸਲ ਸਰੂਪ ਸਦੀਵੀ ਆਨੰਦ, ਅਖੰਡ ਸ਼ਾਂਤੀ ਅਤੇ ਜੋਤੀ-ਸਰੂਪ ਸੱਚ ਹੈ।',
      en: 'My essential nature is eternal bliss, unwavering peace, and radiant truth.'
    },
    explanation: {
      hi: 'सहज सहज सब कोई कहै, सहज न चीन्है कोय। जा घट सहज समाइया, सोई मुक्त होय।',
      pb: 'ਸਹਿਜ ਸਹਿਜ ਸਬ ਕੋਈ ਕਹੈ, ਸਹਿਜ ਨ ਚੀਨ੍ਹੈ ਕੋਇ। ਜਾ ਘਟ ਸਹਿਜ ਸਮਾਇਆ, ਸੋਈ ਮੁਕਤ ਹੋਇ।',
      en: 'He who abides in effortless natural poise (Sahaj) attains supreme liberation.'
    }
  }
];

export const getDailyAffirmation = (language?: Language): DailyAffirmation => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = Math.abs(dayOfYear) % dailyAffirmations.length;
  return dailyAffirmations[index];
};

export const getRandomAffirmation = (excludeId?: string): DailyAffirmation => {
  const filtered = excludeId 
    ? dailyAffirmations.filter(a => a.id !== excludeId) 
    : dailyAffirmations;
  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index] || dailyAffirmations[0];
};
