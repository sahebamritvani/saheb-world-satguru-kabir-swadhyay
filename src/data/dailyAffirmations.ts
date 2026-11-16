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
