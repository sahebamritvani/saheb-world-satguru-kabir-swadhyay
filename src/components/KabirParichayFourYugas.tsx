import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Sun, 
  Crown, 
  ShieldCheck, 
  BookOpen, 
  Scroll, 
  Compass, 
  Volume2, 
  VolumeX, 
  X, 
  ChevronRight, 
  Layers, 
  Award,
  Heart,
  Quote,
  ArrowLeft,
  Flower2
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface KabirParichayFourYugasProps {
  language: Language;
  onClose?: () => void;
  onOpenSwadhyay?: () => void;
}

export type YugaKey = 'biography' | 'satya' | 'treta' | 'dvapara' | 'kali';

interface YugaData {
  key: YugaKey;
  yugaName: {
    hi: string;
    pb: string;
    en: string;
  };
  manifestationName: {
    hi: string;
    pb: string;
    en: string;
  };
  yearsSpan: {
    hi: string;
    pb: string;
    en: string;
  };
  avatarColor: string;
  accentBadge: string;
  appearanceSummary: {
    hi: string;
    pb: string;
    en: string;
  };
  keyEpisodes: Array<{
    title: { hi: string; pb: string; en: string };
    detail: { hi: string; pb: string; en: string };
    significance: { hi: string; pb: string; en: string };
  }>;
  scripturalEvidence: {
    verse: string;
    meaning: { hi: string; pb: string; en: string };
    source: string;
  };
  coreTeaching: {
    hi: string;
    pb: string;
    en: string;
  };
  fullBiography?: {
    hi: string[];
    pb: string[];
    en: string[];
  };
}

const FOUR_YUGAS_DATA: YugaData[] = [
  {
    key: 'biography',
    yugaName: {
      hi: 'जीवन परिचय (ਸਟੀਕ)',
      pb: 'ਜੀਵਨ ਪਰਿਚੈ (ਸਟੀਕ)',
      en: 'Life Introduction (Steek)',
    },
    manifestationName: {
      hi: 'भक्त शिरोमणि कबीर साहेब',
      pb: 'ਭਗਤ ਸ਼ਿਰੋਮਣੀ ਕਬੀਰ ਸਾਹੇਬ',
      en: 'Bhagat Shiromani Kabir Saheb',
    },
    yearsSpan: {
      hi: 'संवत् १४५५ — संवत् १५७५',
      pb: 'ਸੰਵਤ ੧੪੫੫ — ਸੰਵਤ ੧੫੭੫',
      en: '1398 CE — 1518 CE',
    },
    avatarColor: 'from-blue-600 to-indigo-800',
    accentBadge: 'bg-blue-500/20 text-blue-800 border-blue-500/40',
    appearanceSummary: {
      hi: 'कबीर जी भारत के प्रसिद्ध भक्तों में से एक हुए हैं। आपका जन्म संवत १४५५ को बनारस में हुआ। नीरू-नीमा जुलाहे द्वारा पालन हुआ। रामानंद जी से गुरु-दीक्षा ली। आपकी वाणी कबीर बीजक और श्री गुरु ग्रंथ साहिब में संकलित है।',
      pb: 'ਕਬੀਰ ਜੀ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਭਗਤਾਂ ਵਿਚੋਂ ਇਕ ਹੋਏ ਹਨ। ਆਪ ਜੀ ਦਾ ਜਨਮ ਸੰਮਤ ੧੪੫੫ ਨੂੰ ਬਨਾਰਸ ਵਿਚ ਹੋਇਆ। ਨੀਰੂ-ਨੀਮਾ ਜੁਲਾਹੇ ਨੇ ਆਪ ਜੀ ਨੂੰ ਪਾਲਿਆ। ਸਵਾਮੀ ਰਾਮਾਨੰਦ ਜੀ ਤੋਂ ਦੀਖਿਆ ਲਈ। ਆਪ ਜੀ ਦੀ ਬਾਣੀ ਕਬੀਰ ਬੀਜਕ ਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿਚ ਦਰਜ ਹੈ।',
      en: 'Kabir Ji was one of India\'s most renowned devotees. Born in 1398 CE in Banaras, he was raised by Neeru and Neema. He received initiation from Ramanand Ji. His divine words are preserved in Kabir Bijak and Sri Guru Granth Sahib.',
    },
    fullBiography: {
      hi: [
        'कबीर जी भारत के प्रसिद्ध भक्तों में से एक हुए हैं। आपका जन्म एक विधवा ब्राह्मणी के गर्भ से ज्येष्ठ सुदी १५ संवत १४५५ को बनारस में हुआ। इनकी माता ने इस नवजात बालक को बनारस के पास एक लहरतारा तालाब (नहर) के पास रख दिया। वहां से इस नवजात बालक को नीरू नामक जुलाहे ने उठा लिया और अपने घर ले आया। नीरू की पत्नी (नीमा) ने इसे अपने पुत्र के समान ही देख-भाल कर पाला।',
        'उपरांत समय के अनुसार इनका मुस्लिम मत के अनुसार कबीर नाम रखा गया और इस्लाम की शिक्षा दी गई। पर कबीर जी का स्वाभाविक ही झुकाव हिंदू मत की ओर था। जब जवान हुए तो इनका विवाह लोई नाम की स्त्री से हुआ। जिससे इनके घर एक पुत्र ने जन्म लिया, जिसका नाम कमाल रखा गया।',
        'कबीर जी ने उस समय के बनारस में प्रसिद्ध भक्त रामानंद जी से गुरु-दीक्षा और राम नाम का उपदेश लिया और वैष्णव मत ग्रहण किया। उस समय काशी विद्वानों का केंद्र होने के कारण कबीर जी को सभी मत-मतांतरों के नियम जानने और विद्वानों के साथ चर्चा करने का अच्छा समय मिल गया। जिसके कारण वे चतुर हो गए और फिर पूर्ण ज्ञानियों की संगत करके आप ब्रह्मज्ञानी की पदवी तक पहुँच गए और अपने अनेक साथियों को ज्ञान मार्ग दिखाया।',
        'बादशाह सिकंदर लोदी जब संवत १५४७ में बनारस आया तो कबीर जी को ईर्ष्यालु मुसलमानों ने बहुत कष्ट पहुँचाया। जिसका कुछ वर्णन कबीर जी ने अपने इस शब्द द्वारा किया है- "भुजा बांधि भिला करि डारिओ" (राग गोंड कबीर जी)।',
        'कबीर जी ने अपने अंतिम दिन मगहर (जिला गोरखपुर) में बिताए। वहीं आपका देहांत संवत १५७५ में हुआ।',
        'कबीर जी की वाणी का संग्रह इनके शिष्यों ने किया, इस संग्रह पोथी का नाम \'कबीर बीजक\' है, जिसे इनके एक धर्मदास चेले ने संवत १५२१ में लिखा था और रियासत रीवा में रखा हुआ है।',
        'कबीर जी की बहुत सारी वाणी शब्दों और श्लोकों में श्री गुरु ग्रंथ साहिब में दर्ज है, जिनकी कुल गिनती ५३४ है। इस पुस्तक में केवल आपके २४३ श्लोकों का ही सरल भाषा में टीका पाठकों को भेंट है। ये श्लोक श्री गुरु ग्रंथ साहिब जी के पन्ना १३६४ से आरंभ होते हैं।'
      ],
      pb: [
        'ਕਬੀਰ ਜੀ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਭਗਤਾਂ ਵਿਚੋਂ ਇਕ ਹੋਏ ਹਨ। ਆਪ ਜੀ ਦਾ ਜਨਮ ਇਕ ਵਿਧਵਾ ਬ੍ਰਾਹਮਣੀ ਦੇ ਉਦਰ ਤੋਂ ਜੇਠ ਸੁਦੀ ੧੫ ਸੰਮਤ ੧੪੫੫ ਨੂੰ ਬਨਾਰਸ ਵਿਚ ਹੋਇਆ। ਇਨ੍ਹਾਂ ਦੀ ਮਾਤਾ ਨੇ ਇਸ ਨਵੇਂ ਜਨਮੇ ਬਾਲਕ ਨੂੰ ਬਨਾਰਸ ਲਾਗੇ ਇਕ ਨਹਿਰ ਪਾਸ ਰੱਖ ਦਿੱਤਾ। ਉਥੋਂ ਇਸ ਨਵ-ਜੰਮੇ ਬਾਲਕ ਨੂੰ ਇਕ ਨੀਰੂ ਜੁਲਾਹੇ ਨੇ ਚੁੱਕ ਕੇ ਆਪਣੇ ਘਰ ਲੈ ਆਂਦਾ। ਨੀਰੂ ਦੀ ਇਸਤ੍ਰੀ ਨੇ ਇਸ ਨੂੰ ਆਪਣੇ ਪੁੱਤਰ ਸਮਾਨ ਹੀ ਦੇਖ ਭਾਲ ਕਰ ਕੇ ਪਾਲਿਆ।',
        'ਉਪਰੰਤ ਸਮੇਂ ਅਨੁਸਾਰ ਇਸ ਦਾ ਮੁਸਲਮਾਨੀ ਮੱਤ ਅਨੁਸਾਰ ਕਬੀਰ ਨਾਮ ਰਖਿਆ ਗਿਆ ਅਤੇ ਇਸਲਾਮ ਦੀ ਸਿਖਿਆ ਦਿੱਤੀ ਗਈ। ਪਰ ਕਬੀਰ ਜੀ ਦਾ ਸੁਭਾਵਕ ਹੀ ਝੁਕਾਉ ਹਿੰਦੂ ਮੱਤ ਵਲ ਸੀ। ਜਦ ਜਵਾਨ ਹੋਏ ਤਾਂ ਇਹਨਾਂ ਦਾ ਵਿਆਹ ਲੋਈ ਨਾਮ ਦੀ ਇਸਤ੍ਰੀ ਨਾਲ ਹੋਇਆ। ਜਿਸ ਤੋਂ ਇਹਨਾਂ ਦੇ ਘਰ ਇਕ ਪੁੱਤਰ ਨੇ ਜਨਮ ਲਿਆ, ਜਿਸ ਦਾ ਨਾਮ ਕਮਾਲਾ ਰਖਿਆ ਗਿਆ।',
        'ਕਬੀਰ ਜੀ ਨੇ ਉਸ ਸਮੇਂ ਦੇ ਬਨਾਰਸ ਵਿਚ ਪ੍ਰਸਿੱਧ ਭਗਤ ਰਾਮਾ ਨੰਦ ਜੀ ਤੋਂ ਗੁਰ-ਦੀਖਿਆ ਰਾਮ ਨਾਮ ਦਾ ਉਪਦੇਸ਼ ਲਿਆ ਅਤੇ ਵੈਸ਼ਨੋ ਮੱਤ ਗ੍ਰਹਿਣ ਕੀਤਾ। ਉਸ ਸਮੇਂ ਕਾਂਸ਼ੀ ਵਿਦਵਾਨਾਂ ਦਾ ਕੇਂਦਰ ਹੋਣ ਕਰਕੇ ਕਬੀਰ ਜੀ ਨੂੰ ਸਾਰੇ ਮਤ ਮਤਾਂਤਰਾਂ ਦੇ ਨਿਯਮ ਜਾਨਣ ਦਾ ਅਤੇ ਵਿਦਵਾਨਾਂ ਨਾਲ ਚਰਚਾ ਕਰਨ ਦਾ ਚੰਗਾ ਸਮਾਂ ਮਿਲ ਗਿਆ। ਜਿਸ ਕਰਕੇ ਚਤੁਰ ਹੋ ਗਏ ਅਤੇ ਫਿਰ ਪੂਰਨ ਗਿਆਨੀਆਂ ਦੀ ਸੰਗਤ ਕਰਕੇ ਆਪ ਜੀ ਬ੍ਰਹਮ ਗਿਆਨੀ ਦੀ ਪਦਵੀ ਨੂੰ ਪਹੁੰਚ ਗਏ ਅਤੇ ਆਪਣੇ ਅਨੇਕਾਂ ਸੰਗੀਆਂ ਨੂੰ ਗਿਆਨ ਮਾਰਗ ਦਰਸਾਇਆ।',
        'ਬਾਦਸ਼ਾਹ ਸਿਕੰਦਰ ਲੋਧੀ ਜਦ ਸੰਮਤ ੧੫੪੭ ਵਿਚ ਬਨਾਰਸ ਆਇਆ ਤਾਂ ਕਬੀਰ ਜੀ ਨੂੰ ਈਰਖਾਵਾਦੀ ਮੁਸਲਮਾਨਾਂ ਬਹੁਤ ਕਸ਼ਟ ਪਹੁੰਚਾਇਆ। ਜਿਸ ਦਾ ਕੁਝ ਵਰਣਨ ਕਬੀਰ ਜੀ ਨੇ ਆਪਣੇ ਇਸ ਸ਼ਬਦ ਦੁਆਰਾ ਕੀਤਾ ਹੈ- ਭੁਜਾ ਬਾਂਧਿ ਭਿਲਾ ਕਰਿ ਡਾਰਿਓ॥ (ਰਾਗ ਗੋਂਡ ਕਬੀਰ ਜੀ)',
        'ਕਬੀਰ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਲੇ ਦਿਨ ਮਗਹਰ ਜ਼ਿਲਾ ਗੋਰਖ ਪੁਰ ਜਾ ਬਤੀਤ ਕੀਤੇ। ਉਥੇ ਹੀ ਆਪ ਜੀ ਦਾ ਦੇਹਾਂਤ ਸੰਮਤ ੧੫੭੫ ਵਿਚ ਹੋਇਆ।',
        'ਕਬੀਰ ਜੀ ਦੀ ਬਾਣੀ ਦਾ ਸੰਗ੍ਰਹਿ ਇਹਨਾਂ ਦੇ ਚੇਲਿਆਂ ਨੇ ਕੀਤਾ, ਇਸ ਸੰਗ੍ਰਹਿ ਪੋਥੀ ਦਾ ਨਾਮ \'ਕਬੀਰ ਬੀਜਕ\' ਹੈ, ਜੋ ਇਸ ਦੇ ਇਕ ਧਰਮ ਦਾਸ ਚੇਲੇ ਨੇ ਸੰਮਤ ੧੫੨੧ ਵਿਚ ਲਿਖਿਆ ਸੀ ਅਤੇ ਰਿਆਸਤ ਰੀਵਾ ਵਿਚ ਰਖਿਆ ਹੋਇਆ ਹੈ।',
        'ਕਬੀਰ ਜੀ ਦੀ ਬਹੁਤ ਸਾਰੀ ਬਾਣੀ ਸ਼ਬਦਾਂ ਤੇ ਸਲੋਕਾਂ ਵਿਚ ਉਚਾਰਨ ਕੀਤੀ ਹੋਈ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿਚ ਦਰਜ ਹੈ, ਜਿਨ੍ਹਾਂ ਦੀ ਕੁਲ ਗਿਣਤੀ ੫੩੪ ਹੈ। ਇਸ ਪੁਸਤਕ ਵਿਚ ਕੇਵਲ ਆਪ ਜੀ ਦੇ ੨੪੩ ਸਲੋਕਾਂ ਦਾ ਹੀ ਸੁਖੈਨ ਭਾਸ਼ਾ ਵਿਚ ਟੀਕਾ ਪਾਠਕਾਂ ਦੀ ਭੇਟ ਹੈ। ਇਹ ਸਲੋਕ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪੰਨਾ ੧੩੬੪ ਤੋਂ ਆਰੰਭ ਹੁੰਦੇ ਹਨ।'
      ],
      en: [
        'Kabir Ji was one of the most famous devotees of India. He was born from the womb of a widow Brahmani on Jyeshtha Sudi 15, Samvat 1455 in Banaras. His mother left the newborn baby near a pond (Lahartara) close to Banaras. From there, a weaver named Neeru picked up the newborn and brought him home. Neeru\'s wife (Neema) raised him with the same care as her own son.',
        'Subsequently, according to the custom of the time, he was named Kabir in accordance with the Muslim faith and was given Islamic education. However, Kabir Ji naturally leaned towards the Hindu faith. When he grew up, he was married to a woman named Loi. From this marriage, a son was born in their house, who was named Kamal.',
        'Kabir Ji received Guru-Diksha (initiation) and the teaching of the Name of Ram from the famous devotee Ramanand Ji of Banaras at that time and adopted the Vaishnav path. Since Kashi was a center of scholars at that time, Kabir Ji got a good opportunity to learn the rules of all faiths and engage in discussions with scholars. Consequently, he became very wise, and through the company of perfect sages, he attained the status of a Brahm-Gyani (God-realized soul) and showed the path of knowledge to many of his companions.',
        'When Emperor Sikandar Lodi came to Banaras in Samvat 1547, jealous Muslims caused Kabir Ji a lot of suffering. Kabir Ji described some of this in his hymn: "Bhujā bāndhi bhilā kari dārio" (Raag Gond Kabir Ji).',
        'Kabir Ji spent his final days in Maghar, district Gorakhpur. He passed away there in Samvat 1575.',
        'The collection of Kabir Ji\'s words (Bani) was made by his disciples. The name of this collection is \'Kabir Bijak\', which was written by one of his disciples, Dharmadas, in Samvat 1521 and is kept in the state of Rewa.',
        'A lot of Kabir Ji\'s Bani is recorded in the form of hymns (Shabads) and couplets (Saloks) in Sri Guru Granth Sahib, totaling 534 entries. In this book, a simplified commentary of 243 of his Saloks is presented to the readers. These Saloks begin from page 1364 of Sri Guru Granth Sahib.'
      ]
    },
    keyEpisodes: [],
    scripturalEvidence: {
      verse: 'ਕਬੀਰ ਜੀ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਭਗਤਾਂ ਵਿਚੋਂ ਇਕ ਹੋਏ ਹਨ।',
      meaning: {
        hi: 'कबीर जी भारत के प्रसिद्ध भक्तों में से एक हुए हैं।',
        pb: 'ਕਬੀਰ ਜੀ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਭਗਤਾਂ ਵਿਚੋਂ ਇਕ ਹੋਏ ਹਨ।',
        en: 'Kabir Ji was one of the most famous devotees of India.',
      },
      source: 'ਜੀਵਨ ਪਰਿਚੈ (ਸਟੀਕ)',
    },
    coreTeaching: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय।',
      pb: 'ਪੋਥੀ ਪੜ੍ਹ-ਪੜ੍ਹ ਜੱਗ ਮੋਇਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ। ਢਾਈ ਅੱਖਰ ਪ੍ਰੇਮ ਦਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ।',
      en: 'Reading scriptures alone cannot liberate; only one who realizes the two and a half letters of Divine Love becomes truly wise.',
    },
  },
  {
    key: 'satya',
    yugaName: {
      hi: 'सत्ययुग (कृत युग)',
      pb: 'ਸਤਿਯੁਗ',
      en: 'Satya Yuga (Golden Age)',
    },
    manifestationName: {
      hi: 'सत सुकृत जी महाराज',
      pb: 'ਸਤ ਸੁਕ੍ਰਿਤ ਜੀ ਮਹਾਰਾਜ',
      en: 'Sat Sukrit Ji Maharaj',
    },
    yearsSpan: {
      hi: 'अवधि: १७,२८,००० वर्ष',
      pb: 'ਸਮਾਂ: ੧੭,੨੮,੦੦੦ ਸਾਲ',
      en: 'Duration: 1,728,000 Years',
    },
    avatarColor: 'from-amber-500 to-yellow-600',
    accentBadge: 'bg-amber-500/20 text-amber-800 border-amber-500/40',
    appearanceSummary: {
      hi: 'सत्ययुग में आदि अनादि परम पुरुष पूर्ण ब्रह्म सतगुरु कबीर साहेब "सत सुकृत" नाम से अमरलोक से अवतरित हुए। इस युग में तप, सत्य और पवित्रता का सर्वोच्च प्रभाव था। सतगुरु ने जीवों को काल निरंजन के कर्म-जाल से मुक्त करने हेतु सत्यनाम का प्रथम गुप्त रहस्य उद्घाटित किया।',
      pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਪੂਰਨ ਬ੍ਰਹਮ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਮਰਲੋਕ ਤੋਂ "ਸਤ ਸੁਕ੍ਰਿਤ" ਨਾਮ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ। ਉਨ੍ਹਾਂ ਨੇ ਜੀਵਾਂ ਨੂੰ ਕਾਲ ਦੇ ਕਰਮ-ਜਾਲ ਤੋਂ ਛੁਡਾਉਣ ਲਈ ਸਤਯਨਾਮ ਦਾ ਅਮਰ ਭੇਦ ਪ੍ਰਦਾਨ ਕੀਤਾ।',
      en: 'In Satya Yuga, Supreme Sat Purush manifested from Amar Lok under the holy name "Sat Sukrit". He revealed the pristine science of Satyanaam to free trapped souls from the cycle of Kaal Niranjan.',
    },
    keyEpisodes: [
      {
        title: {
          hi: 'महाराज मंधाता को सत्यनाम दीक्षा',
          pb: 'ਮਹਾਰਾਜ ਮੰਧਾਤਾ ਨੂੰ ਨਾਮ ਦੀਖਿਆ',
          en: 'Initiation of King Mandhata',
        },
        detail: {
          hi: 'चक्रवर्ती सम्राट मंधाता अत्यंत धर्मपरायण होते हुए भी आत्म-मुक्ति के यथार्थ भेद से अनभिज्ञ थे। सत सुकृत जी ने उन्हें दर्शन देकर तीनों लोकों की नश्वरता दिखाई और सत्यनाम का उपदेश दिया।',
          pb: 'ਚੱਕਰਵਰਤੀ ਰਾਜਾ ਮੰਧਾਤਾ ਨੂੰ ਸਤ ਸੁਕ੍ਰਿਤ ਜੀ ਨੇ ਤਿੰਨਾਂ ਲੋਕਾਂ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਸਮਝਾ ਕੇ ਸਤਯਨਾਮ ਦੀ ਅਮਰ ਦੀਖਿਆ ਬਖ਼ਸ਼ੀ।',
          en: 'Emperor Mandhata, though righteous, lacked the secret to eternal liberation. Sat Sukrit revealed the perishable nature of the three worlds and initiated him into Satyanaam.',
        },
        significance: {
          hi: 'राज-पाट से परे अमरलोक की अविनाशी संपदा की प्राप्ति।',
          pb: 'ਰਾਜਭਾਗ ਤੋਂ ਪਰੇ ਅਮਰਲੋਕ ਦੀ ਸੱਚੀ ਪ੍ਰਾਪਤੀ।',
          en: 'Realization that worldly kingdoms are dust before the eternal realm of Amarlok.',
        },
      },
      {
        title: {
          hi: 'काल निरंजन से प्रथम संवाद',
          pb: 'ਕਾਲ ਨਿਰੰਜਨ ਨਾਲ ਪਹਿਲਾ ਸੰਵਾਦ',
          en: 'First Divine Encounter with Kaal Niranjan',
        },
        detail: {
          hi: 'काल निरंजन ने जीवों को अपने २१ ब्रह्मांडों में रोकने का प्रयास किया। सत सुकृत जी ने वचन दिया कि जो हंस आत्मा सत्यनाम ग्रहण करेगी, उस पर काल का कोई अधिकार नहीं रहेगा।',
          pb: 'ਕਾਲ ਨਿਰੰਜਨ ਨੇ ਜੀਵਾਂ ਨੂੰ ਰੋਕਣ ਦਾ ਯਤਨ ਕੀਤਾ, ਪਰ ਸਤ ਸੁਕ੍ਰਿਤ ਜੀ ਨੇ ਫ਼ਰਮਾਇਆ ਕਿ ਸਤਯਨਾਮ ਵਾਲੇ ਹੰਸ ਉੱਤੇ ਕਾਲ ਦਾ ਕੋਈ ਵੱਸ ਨਹੀਂ।',
          en: 'Kaal attempted to hoard souls within his 21 universes, but Sat Sukrit declared that any soul sheltered by Satyanaam would effortlessly transcend Kaal\'s dominion.',
        },
        significance: {
          hi: 'हंसों की मुक्ति का सार्वकालिक अभय वचन।',
          pb: 'ਹੰਸਾਂ ਦੀ ਸਦੀਵੀ ਮੁਕਤੀ ਦਾ ਅਭੈ ਵਚਨ।',
          en: 'The eternal pledge of fearless liberation for genuine seekers.',
        },
      },
    ],
    scripturalEvidence: {
      verse: 'सत्ययुग में सत सुकृत कहलावा, मंधाता को अमर पद पावा।',
      meaning: {
        hi: 'सत्ययुग में सतगुरु कबीर साहेब "सत सुकृत" कहलाए और उन्होंने राजा मंधाता को अविनाशी पद प्रदान किया।',
        pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਸਤ ਸੁਕ੍ਰਿਤ ਅਖਵਾਏ ਅਤੇ ਮੰਧਾਤਾ ਨੂੰ ਅਮਰ ਪਦਵੀ ਬਖ਼ਸ਼ੀ।',
        en: 'In Satya Yuga, Satguru was known as Sat Sukrit and elevated King Mandhata to the deathless plane.',
      },
      source: 'कबीर सागर (सत्य कबीर कथा)',
    },
    coreTeaching: {
      hi: 'सत्य ही परम तप है, और सत्यपुरुष ही एकमात्र शरण हैं।',
      pb: 'ਸੱਚ ਹੀ ਸਭ ਤੋਂ ਉੱਚਾ ਤਪ ਹੈ, ਤੇ ਸਤਿਪੁਰੁਸ਼ ਹੀ ਇਕੋ ਓਟ ਹਨ।',
      en: 'Truth is the supreme penance, and Sat Purush is the sole eternal sanctuary.',
    },
  },
  {
    key: 'treta',
    yugaName: {
      hi: 'त्रेतायुग',
      pb: 'ਤ੍ਰੇਤਾ ਯੁਗ',
      en: 'Treta Yuga (Silver Age)',
    },
    manifestationName: {
      hi: 'मुनीन्द्र जी महाराज',
      pb: 'ਮੁਨੀਂਦਰ ਜੀ ਮਹਾਰਾਜ',
      en: 'Munindra Ji Maharaj',
    },
    yearsSpan: {
      hi: 'अवधि: १२,९६,००० वर्ष',
      pb: 'ਸਮਾਂ: ੧੨,੯੬,੦੦੦ ਸਾਲ',
      en: 'Duration: 1,296,000 Years',
    },
    avatarColor: 'from-orange-500 to-amber-700',
    accentBadge: 'bg-orange-500/20 text-orange-800 border-orange-500/40',
    appearanceSummary: {
      hi: 'त्रेतायुग में सतगुरु कबीर साहेब "मुनीन्द्र" नाम से ऋषि रूप में प्रकट हुए। इस युग में यज्ञ, मर्यादा और अनुष्ठानों की प्रधानता थी। मुनीन्द्र जी ने बाह्य कर्मकांडों के स्थान पर भीतरी अनहद शब्द और दया-धर्म की महत्ता प्रतिपादित की।',
      pb: 'ਤ੍ਰੇਤਾ ਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ "ਮੁਨੀਂਦਰ" ਨਾਮ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ। ਉਨ੍ਹਾਂ ਨੇ ਬਾਹਰੀ ਕਰਮਕਾਂਡਾਂ ਤੋਂ ਪਰੇ ਅੰਦਰੂਨੀ ਸ਼ਬਦ ਅਤੇ ਜੀਵ-ਦਇਆ ਦਾ ਮਾਰਗ ਦੱਸਿਆ।',
      en: 'In Treta Yuga, Satguru appeared as the revered ascetic "Munindra". Amidst widespread rituals and sacrificial rites, Munindra taught the primacy of the inner Anhad Naad and unconditional compassion.',
    },
    keyEpisodes: [
      {
        title: {
          hi: 'नल और नील को समुद्र पर पत्थर तैराने का रहस्य',
          pb: 'ਨਲ ਤੇ ਨੀਲ ਨੂੰ ਪੱਥਰ ਤੈਰਾਉਣ ਦਾ ਭੇਦ',
          en: 'Bestowing Floating Stone Formula to Nal & Neel',
        },
        detail: {
          hi: 'लक्ष्मण व राम जी की सेना जब लंका जाने हेतु समुद्र किनारे थी, तब नल-नील को मुनीन्द्र जी की कृपा और आशीर्वाद से जल पर पत्थर स्थिर रखने का अमर सामर्थ्य प्राप्त हुआ।',
          pb: 'ਸਮੁੰਦਰ \'ਤੇ ਪੁਲ ਬੰਨ੍ਹਣ ਸਮੇਂ ਨਲ-ਨੀਲ ਨੂੰ ਮੁਨੀਂਦਰ ਜੀ ਦੀ ਕ੍ਰਿਪਾ ਨਾਲ ਪੱਥਰਾਂ ਨੂੰ ਪਾਣੀ \'ਤੇ ਤੈਰਾਉਣ ਦਾ ਭੇਦ ਮਿਲਿਆ।',
          en: 'When building the bridge to Lanka, Nal and Neel were blessed by Sage Munindra with the divine vibrational power that allowed stones to defy gravity upon water.',
        },
        significance: {
          hi: 'सत्यनाम के प्रभाव से भारी से भारी पत्थर व जीव भी भवसागर पार हो जाते हैं।',
          pb: 'ਸਤਯਨਾਮ ਦੇ ਪ੍ਰਭਾਵ ਨਾਲ ਭਾਰੇ ਪੱਥਰ ਤੇ ਪਾਪੀ ਜੀਵ ਵੀ ਭਵਸਾਗਰ ਤਰ ਜਾਂਦੇ ਹਨ।',
          en: 'Symbolizes how even heavy worldly souls float effortlessly across the cosmic ocean via Satnaam.',
        },
      },
      {
        title: {
          hi: 'महारानी मंदोदरी व विभीषण संवाद',
          pb: 'ਮੰਦੋਦਰੀ ਤੇ ਵਿਭੀਸ਼ਣ ਨੂੰ ਆਤਮ-ਗਿਆਨ',
          en: 'Wisdom Imparted to Queen Mandodari & Vibhishana',
        },
        detail: {
          hi: 'रावण के अहंकार के बीच मुनीन्द्र जी ने लंका में महारानी मंदोदरी को सतगुरु का यथार्थ भेद दिया और विभीषण को सत्य-अहिंसा पर अडिग रहने का संकल्प कराया।',
          pb: 'ਮੁਨੀਂਦਰ ਜੀ ਨੇ ਲੰਕਾ ਵਿੱਚ ਮੰਦੋਦਰੀ ਅਤੇ ਵਿਭੀਸ਼ਣ ਨੂੰ ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ ਅਤੇ ਧਰਮ ਦਾ ਸੱਚਾ ਮਾਰਗ ਸਮਝਾਇਆ।',
          en: 'Amidst Ravana\'s pride, Munindra secretly enlightened Mandodari and strengthened Vibhishana\'s devotion to eternal truth and righteousness.',
        },
        significance: {
          hi: 'घोर अंधकार और आसुरी परिवेश में भी सत्य की ज्योति प्रज्वलित रहती है।',
          pb: 'ਹਨੇਰੇ ਵਿੱਚ ਵੀ ਸੱਚ ਦੀ ਜੋਤਿ ਸਦਾ ਬਲਦੀ ਰਹਿੰਦੀ ਹੈ।',
          en: 'The flame of Satnaam burns brightly even within the darkest material strongholds.',
        },
      },
    ],
    scripturalEvidence: {
      verse: 'त्रेता में मुनीन्द्र कहाई, नल-नील को सिद्धि कराई।',
      meaning: {
        hi: 'त्रेतायुग में कबीर साहेब "मुनीन्द्र" कहलाए और उन्होंने नल-नील को समुद्र पर पत्थर तैराने की सिद्धि प्रदान की।',
        pb: 'ਤ੍ਰੇਤਾ ਵਿੱਚ ਸਤਿਗੁਰੂ ਮੁਨੀਂਦਰ ਬਣੇ ਅਤੇ ਨਲ-ਨੀਲ ਨੂੰ ਸਿੱਧੀ ਬਖ਼ਸ਼ੀ।',
        en: 'In Treta Yuga, Kabir was known as Munindra, empowering Nal and Neel to conquer the ocean.',
      },
      source: 'कबीर सागर (अनुराग सागर)',
    },
    coreTeaching: {
      hi: 'अहंकार का सर्वनाश निश्चित है; केवल नाम-भक्ति ही जीव की सच्ची रक्षक है।',
      pb: 'ਹੰਕਾਰ ਦਾ ਨਾਸ਼ ਨਿਸ਼ਚਿਤ ਹੈ, ਸਿਰਫ਼ ਨਾਮ-ਭਗਤੀ ਹੀ ਰੱਖਿਅਕ ਹੈ।',
      en: 'Ego guarantees ruin; only steadfast devotion to Naam preserves the soul.',
    },
  },
  {
    key: 'dvapara',
    yugaName: {
      hi: 'द्वापरयुग',
      pb: 'ਦਵਾਪਰ ਯੁਗ',
      en: 'Dvapara Yuga (Bronze Age)',
    },
    manifestationName: {
      hi: 'करुणामय जी महाराज (सुपच सुदर्शन)',
      pb: 'ਕਰੁਣਾਮਯ ਜੀ ਮਹਾਰਾਜ (ਸੁਪਚ ਸੁਦਰਸ਼ਨ)',
      en: 'Karunamaya Ji Maharaj (Supach Sudarshan)',
    },
    yearsSpan: {
      hi: 'अवधि: ८,६४,००० वर्ष',
      pb: 'ਸਮਾਂ: ੮,੬੪,੦੦੦ ਸਾਲ',
      en: 'Duration: 864,000 Years',
    },
    avatarColor: 'from-rose-600 to-red-800',
    accentBadge: 'bg-rose-500/20 text-rose-800 border-rose-500/40',
    appearanceSummary: {
      hi: 'द्वापरयुग में सतगुरु कबीर साहेब "करुणामय" नाम से अवतरित हुए। इस युग में जब महाभारत युद्ध के पश्चात पांडवों ने पाप-प्रायश्चित हेतु राजसूय यज्ञ किया, तब करुणामय जी "सुपच सुदर्शन" के दीन-हीन रूप में पधारे और उन्होंने अहंकार का खंडन कर यज्ञ को पूर्ण सिद्ध किया।',
      pb: 'ਦਵਾਪਰ ਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ "ਕਰੁਣਾਮਯ" ਨਾਮ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ ਅਤੇ ਪਾਂਡਵਾਂ ਦੇ ਯੱਗ ਵਿੱਚ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਦੇ ਰੂਪ ਵਿੱਚ ਪਹੁੰਚ ਕੇ ਸੱਚੀ ਭਗਤੀ ਦਾ ਡੰਕਾ ਵਜਾਇਆ।',
      en: 'In Dvapara Yuga, Satguru appeared as "Karunamaya". During the Pandavas\' Rajasuya Yajna after the great war, he assumed the humble form of Supach Sudarshan to dissolve ritual pride and accept true devotion.',
    },
    keyEpisodes: [
      {
        title: {
          hi: 'पांडवों के राजसूय यज्ञ में दिव्य शंखनाद',
          pb: 'ਪਾਂਡਵਾਂ ਦੇ ਯੱਗ ਵਿੱਚ ਅਲੌਕਿਕ ਸ਼ੰਖਨਾਦ',
          en: 'Blowing the Celestial Conch at Pandavas\' Yajna',
        },
        detail: {
          hi: 'लाखों ऋषियों और मुनियों के भोजन करने पर भी भगवान श्रीकृष्ण का दिव्य शंख नहीं बजा। जब द्रौपदी और युधिष्ठिर ने अभिमान त्यागकर करुणामय जी (सुपच सुदर्शन) को आदरपूर्वक भोजन कराया, तब आकाश में स्वतः शंखनाद गूंज उठा।',
          pb: 'ਸਾਰੇ ਰਿਸ਼ੀਆਂ ਦੇ ਖਾਣ \'ਤੇ ਵੀ ਸ਼ੰਖ ਨਾ ਵੱਜਿਆ, ਪਰ ਜਦੋਂ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਜੀ ਨੇ ਪ੍ਰੇਮ ਨਾਲ ਗ੍ਰਾਸ ਲਿਆ ਤਾਂ ਸ਼ੰਖ ਆਪਣੇ ਆਪ ਗੂੰਜ ਉੱਠਿਆ।',
          en: 'Despite feeding thousands of kings and ascetics, Krishna\'s celestial conch remained silent. Only when Supach Sudarshan was fed with heartfelt humility did the conch trumpet throughout the heavens.',
        },
        significance: {
          hi: 'परमात्मा जाति, कुल या पाखंड से नहीं, केवल विशुद्ध प्रेम और दीनता से रीझते हैं।',
          pb: 'ਪਰਮਾਤਮਾ ਜਾਤ-ਪਾਤ ਨਾਲ ਨਹੀਂ, ਸੱਚੇ ਪ੍ਰੇਮ ਤੇ ਨਿਮਰਤਾ ਨਾਲ ਮਿਲਦੇ ਹਨ।',
          en: 'The Divine is never pleased by caste, wealth, or pomp, but only by unadulterated love and humility.',
        },
      },
      {
        title: {
          hi: 'इंद्रप्रस्थ में युधिष्ठिर को आत्म-बोध',
          pb: 'ਯੁਧਿਸ਼ਠਿਰ ਨੂੰ ਆਤਮ-ਗਿਆਨ',
          en: 'Enlightening King Yudhishthira at Indraprastha',
        },
        detail: {
          hi: 'करुणामय जी ने युधिष्ठिर को चेताया कि तीनों लोकों का राज्य भी माया का स्वप्न है। जब तक अमरलोक का सत्य शब्द प्राप्त न हो, जीव जन्म-मरण से छूट नहीं सकता।',
          pb: 'ਕਰੁਣਾਮਯ ਜੀ ਨੇ ਸਮਝਾਇਆ ਕਿ ਧਰਤੀ ਦਾ ਰਾਜ ਵੀ ਸੁਪਨਾ ਹੈ, ਸਿਰਫ਼ ਅਮਰਲੋਕ ਦਾ ਸਤਯਨਾਮ ਹੀ ਅਸਲੀ ਸੱਚ ਹੈ।',
          en: 'Karunamaya warned Yudhishthira that earthly dominion is but a fleeting dream; only the authentic word of Sat Purush ends the cycle of rebirth.',
        },
        significance: {
          hi: 'राज-सुख की तुलना में सत्यनाम की अनंत गरिमा।',
          pb: 'ਰਾਜ-ਭਾਗ ਨਾਲੋਂ ਸਤਯਨਾਮ ਦੀ ਬੇਅੰਤ ਮਹਿਮਾ।',
          en: 'The infinite majesty of Satyanaam compared to earthly authority.',
        },
      },
    ],
    scripturalEvidence: {
      verse: 'द्वापर में करुणामय नामा, सुपच सुदर्शन कियो संकामा।',
      meaning: {
        hi: 'द्वापरयुग में सतगुरु "करुणामय" कहलाए और सुपच सुदर्शन रूप में पांडवों के यज्ञ को सफल किया।',
        pb: 'ਦਵਾਪਰ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦਾ ਨਾਮ ਕਰੁਣਾਮਯ ਸੀ ਅਤੇ ਸੁਪਚ ਬਣ ਕੇ ਯੱਗ ਪੂਰਾ ਕੀਤਾ।',
        en: 'In Dvapara, Satguru was named Karunamaya, sanctifying the royal sacrifice as Supach Sudarshan.',
      },
      source: 'कबीर सागर (अमर मूल)',
    },
    coreTeaching: {
      hi: 'जाति-पांति और आडंबर व्यर्थ हैं; हृदय की दीनता ही मुक्ति का द्वार है।',
      pb: 'ਜਾਤ-ਪਾਤ ਵਿਅਰਥ ਹੈ, ਦਿਲ ਦੀ ਨਿਮਰਤਾ ਹੀ ਮੁਕਤੀ ਦਾ ਦੁਆਰ ਹੈ।',
      en: 'Caste and dogma are delusions; genuine humility of the heart is the gateway to grace.',
    },
  },
  {
    key: 'kali',
    yugaName: {
      hi: 'कलियुग (वर्तमान युग)',
      pb: 'ਕਲਿਯੁਗ',
      en: 'Kali Yuga (Iron / Present Age)',
    },
    manifestationName: {
      hi: 'सतगुरु कबीर साहेब',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ',
      en: 'Satguru Kabir Saheb',
    },
    yearsSpan: {
      hi: 'प्राकट्य संवत् १४५५ (सन १३९८) — मगहर गमन संवत् १५७५ (सन १५१८)',
      pb: 'ਪ੍ਰਗਟ ਕਾਲ: ਸੰਵਤ ੧੪੫੫ (੧੩੯੮ ਈ.) — ਮਗਹਰ ਗਮਨ: ਸੰਵਤ ੧੫੭੫ (੧੫੧੮ ਈ.)',
      en: 'Manifestation: 1398 CE (Samvat 1455) — Maghar: 1518 CE (120 Years)',
    },
    avatarColor: 'from-amber-600 to-red-900',
    accentBadge: 'bg-red-500/20 text-red-800 border-red-500/40',
    appearanceSummary: {
      hi: 'कलियुग के घोर अज्ञान, पाखंड और धार्मिक संकीर्णता में आदि पुरुष स्वयं "सतगुरु कबीर साहेब" के रूप में काशी के पावन लहरतारा सरोवर में नीले कमल पुष्प पर साक्षात अवतरित हुए। नीरू-नीमा जुलाहे द्वारा पालन हुआ। १२० वर्षों तक आपने संपूर्ण भारत में घूम-घूमकर सत्यनाम, जीव-दया और निर्गुण ब्रह्म की अमर ध्वजा फहराई। अंत में मगहर की तथाकथित "नरक भूमि" से सशरीर अमरलोक प्रस्थान किया, जहाँ चिता पर केवल सुगंधित पुष्प प्राप्त हुए।',
      pb: 'ਕਲਿਯੁਗ ਵਿੱਚ ਪੂਰਨ ਸਤਿਪੁਰੁਸ਼ ਕਾਸ਼ੀ ਦੇ ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਵਿੱਚ ਕੰਵਲ ਫੁੱਲ \'ਤੇ ਬਾਲਕ ਰੂਪ ਵਿੱਚ ਪ੍ਰਗਟ ਹੋਏ। ੧੨੦ ਸਾਲ ਸੱਚੇ ਨਾਮ ਦਾ ਪ੍ਰਚਾਰ ਕਰਕੇ ਮਗਹਰ ਤੋਂ ਅਮਰਲੋਕ ਗਏ ਜਿੱਥੇ ਦੇਹ ਦੀ ਥਾਂ ਸੁਗੰਧਿਤ ਫੁੱਲ ਮਿਲੇ।',
      en: 'In the dark age of Kali Yuga, Supreme Sat Purush directly manifested upon a blooming lotus at Lahartara Lake in Kashi. For 120 years, he fearlessly exposed superstition and ritualism, preaching pure Satyanaam. Departing from Maghar, his divine body dissolved into sweet-scented rose petals shared by Hindus and Muslims alike.',
    },
    keyEpisodes: [
      {
        title: {
          hi: 'लहरतारा सरोवर प्राकट्य एवं नीरू-नीमा का उद्धार',
          pb: 'ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਪ੍ਰਗਟ ਹੋਣਾ ਤੇ ਨੀਰੂ-ਨੀਮਾ',
          en: 'Divine Manifestation at Lahartara Pond',
        },
        detail: {
          hi: 'ज्येष्ठ पूर्णिमा की ब्रह्म मुहूर्त बेला में आकाश से एक परम ज्योति लहरतारा सरोवर के कमल पुष्प पर उतरी और सद्यजात बालक के रूप में शोभायमान हुई। निसंतान नीरू और नीमा उन्हें घर लाए।',
          pb: 'ਜੇਠ ਪੂਰਨਮਾਸ਼ੀ ਨੂੰ ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਆਕਾਸ਼ ਤੋਂ ਦਿਵਯ ਜੋਤਿ ਲਹਿਰਤਾਰਾ ਦੇ ਕੰਵਲ ਫੁੱਲ \'ਤੇ ਉੱਤਰੀ ਅਤੇ ਨੀਰੂ-ਨੀਮਾ ਉਨ੍ਹਾਂ ਨੂੰ ਘਰ ਲੈ ਆਏ।',
          en: 'On Jyeshtha Purnima at dawn, a beam of transcendent light descended from the heavens onto a lotus petal at Lahartara Lake, taking the form of an infant child.',
        },
        significance: {
          hi: 'कबीर साहेब का जन्म किसी गर्भ से नहीं, अपितु प्रत्यक्ष सत्यलोक से अवतरण था।',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਗਰਭ ਜੂਨ ਤੋਂ ਰਹਿਤ, ਸਿੱਧੇ ਅਮਰਲੋਕ ਤੋਂ ਆਏ।',
          en: 'Demonstrates that Kabir Saheb was beyond womb-birth, descending directly from the absolute.',
        },
      },
      {
        title: {
          hi: 'पंचगंगा घाट पर स्वामी रामानंद जी से गुरु मर्यादा',
          pb: 'ਸਵਾਮੀ ਰਾਮਾਨੰਦ ਜੀ ਤੋਂ ਗੁਰੂ ਮਰਯਾਦਾ',
          en: 'Upholding Guru Maryada with Swami Ramanand',
        },
        detail: {
          hi: 'ब्रह्म मुहूर्त में पंचगंगा घाट की सीढ़ियों पर बालक कबीर लेट गए। स्वामी रामानंद जी का चरण स्पर्श होते ही उनके मुख से "राम-राम" निकला, जिसे कबीर साहेब ने लोक-मर्यादा हेतु गुरु-मंत्र स्वीकार किया।',
          pb: 'ਪੰਚਗੰਗਾ ਘਾਟ \'ਤੇ ਸਵਾਮੀ ਰਾਮਾਨੰਦ ਜੀ ਦਾ ਚਰਨ ਲੱਗਣ \'ਤੇ "ਰਾਮ" ਸ਼ਬਦ ਨਿਕਲਿਆ, ਜਿਸਨੂੰ ਲੋਕ-ਸਿੱਖਿਆ ਲਈ ਗੁਰੂ-ਮੰਤਰ ਮੰਨਿਆ।',
          en: 'At Panchganga Ghat, Swami Ramanand accidentally stepped upon young Kabir in the pre-dawn darkness and uttered "Ram Ram", which Kabir adopted as the formal Guru mantra to teach worldly humility.',
        },
        significance: {
          hi: 'बिना गुरु के ज्ञान और मर्यादा संभव नहीं—संसार को यह पावन पाठ सिखाया।',
          pb: 'ਗੁਰੂ ਬਿਨਾਂ ਗਿਆਨ ਸੰਭਵ ਨਹੀਂ—ਸੰਸਾਰ ਨੂੰ ਮਰਯਾਦਾ ਸਿਖਾਈ।',
          en: 'Established the sacred principle that without a spiritual preceptor, true discernment remains incomplete.',
        },
      },
      {
        title: {
          hi: 'सिकंदर लोदी के अत्याचार एवं चमत्कार',
          pb: 'ਸਿਕੰਦਰ ਲੋਦੀ ਦੇ ਜ਼ੁਲਮ ਤੇ ਕ੍ਰਿਪਾ',
          en: 'Confrontations with Sultan Sikandar Lodi',
        },
        detail: {
          hi: 'सुल्तान सिकंदर लोदी ने कबीर साहेब पर जंजीरों में बांधकर गंगा में डुबोने, उन्मत्त हाथी के आगे फेंकने और दहकती आग में झोंकने के ५२ घोर कष्ट दिए, परंतु सतगुरु हर बार सकुशल प्रकट हुए। अंत में सुल्तान नतमस्तक हुआ।',
          pb: 'ਸਿਕੰਦਰ ਲੋਦੀ ਨੇ ਗੰਗਾ ਵਿੱਚ ਡੋਬਿਆ, ਮਸਤ ਹਾਥੀ ਸਾਹਮਣੇ ਸੁੱਟਿਆ, ਪਰ ਸਤਿਗੁਰੂ ਦਾ ਵਾਲ ਵੀ ਵਿੰਗਾ ਨਾ ਹੋਇਆ ਤੇ ਬਾਦਸ਼ਾਹ ਚਰਨੀਂ ਪਿਆ।',
          en: 'Sultan Sikandar Lodi subjected Kabir to 52 severe trials—chains in the Ganges, a maddened elephant, and blazing fires—yet Kabir emerged unharmed every time, ultimately humbling the emperor.',
        },
        significance: {
          hi: 'काल की कोई भी शक्ति सत्यपुरुष के तेज को पराजित नहीं कर सकती।',
          pb: 'ਕਾਲ ਦੀ ਕੋਈ ਸ਼ਕਤੀ ਸੱਚ ਨੂੰ ਹਰਾ ਨਹੀਂ ਸਕਦੀ।',
          en: 'No worldly sword or elemental force can vanquish the power of Truth.',
        },
      },
      {
        title: {
          hi: 'मगहर महाप्रयाण — देह का पुष्पों में रूपांतरण',
          pb: 'ਮਗਹਰ ਮਹਾਪ੍ਰਯਾਣ ਤੇ ਫੁੱਲਾਂ ਦੀ ਵਰਖਾ',
          en: 'Mahaprayana at Maghar — Transformation into Flowers',
        },
        detail: {
          hi: 'उस समय यह भ्रम था कि मगहर में मरने से गधा और काशी में मरने से स्वर्ग मिलता है। इस अंधविश्वास को तोड़ने कबीर साहेब मगहर पधारे। संवत् १५७५ में जब चादर हटाई गई, तो देह के स्थान पर सुगंधित पुष्प मिले जिन्हें हिंदू-मुस्लिम शिष्यों ने आपस में बांट लिया।',
          pb: 'ਅੰਧਵਿਸ਼ਵਾਸ ਤੋੜਨ ਲਈ ਮਗਹਰ ਗਏ। ਚਾਦਰ ਚੁੱਕਣ \'ਤੇ ਸਿਰਫ਼ ਖ਼ੁਸ਼ਬੂਦਾਰ ਫੁੱਲ ਮਿਲੇ ਜੋ ਹਿੰਦੂ-ਮੁਸਲਿਮ ਦੋਹਾਂ ਨੇ ਆਪਸ ਵਿੱਚ ਵੰਡੇ।',
          en: 'To shatter the myth that dying in Maghar leads to hell while Kashi guarantees heaven, Kabir walked to Maghar in his 120th year. When followers lifted his shroud, only fragrant flowers remained, equally divided between Hindus and Muslims.',
        },
        significance: {
          hi: 'सकल सृष्टि में एकता और देहातीत अमरता का शाश्वत प्रमाण।',
          pb: 'ਸਮੁੱਚੀ ਮਨੁੱਖਤਾ ਦੀ ਏਕਤਾ ਅਤੇ ਅਮਰਤਾ ਦਾ ਪਾਵਨ ਪ੍ਰਮਾਣ।',
          en: 'The ultimate proof that the soul is beyond caste, religion, and mortal decay.',
        },
      },
    ],
    scripturalEvidence: {
      verse: 'चारों युग में हम ही आए, कबीर नाम जग में प्रगटाए। काशी में हम प्रगट भये हैं, रामानन्द चेताये।',
      meaning: {
        hi: 'चारों युगों में हम ही अवतरित हुए और कलियुग में "कबीर" नाम से काशी में प्रकट होकर स्वामी रामानंद जी को चेताया।',
        pb: 'ਚਾਰਾਂ ਯੁਗਾਂ ਵਿੱਚ ਅਸੀਂ ਹੀ ਆਏ ਤੇ ਕਲਿਯੁਗ ਵਿੱਚ ਕਬੀਰ ਨਾਮ ਨਾਲ ਕਾਸ਼ੀ ਪ੍ਰਗਟ ਹੋਏ।',
        en: 'Across all four ages it is I who descended, manifesting in Kashi under the holy name Kabir.',
      },
      source: 'कबीर बीजक / कबीर सागर',
    },
    coreTeaching: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय।',
      pb: 'ਪੋਥੀ ਪੜ੍ਹ-ਪੜ੍ਹ ਜੱਗ ਮੋਇਆ, ਪੰਡਿਤ ਭਇਆ ਨ ਕੋਇ। ਢਾਈ ਅੱਖਰ ਪ੍ਰੇਮ ਦਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਇ।',
      en: 'Reading scriptures alone cannot liberate; only one who realizes the two and a half letters of Divine Love becomes truly wise.',
    },
  },
];

export const KabirParichayFourYugas: React.FC<KabirParichayFourYugasProps> = ({
  language,
  onClose,
  onOpenSwadhyay,
}) => {
  const { theme } = useAppTheme();
  const [selectedYugaKey, setSelectedYugaKey] = useState<YugaKey>('biography');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentYuga = FOUR_YUGAS_DATA.find((y) => y.key === selectedYugaKey) || FOUR_YUGAS_DATA[3];

  useEffect(() => {
    return () => {
      speechReciter.stop();
    };
  }, []);

  const handleYugaChange = (key: YugaKey) => {
    sacredHaptics.lightTap();
    setSelectedYugaKey(key);
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    }
  };

  const handleToggleSpeech = () => {
    sacredHaptics.lightTap();
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    } else {
      const narrative = `${currentYuga.manifestationName[language]}. ${currentYuga.yugaName[language]}. ${currentYuga.appearanceSummary[language]}. ${currentYuga.coreTeaching[language]}`;
      speechReciter.speak(narrative, language);
      setIsSpeaking(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6 pb-20 select-none"
    >
      {/* Header Container */}
      <div 
        style={{ 
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold 
        }}
        className="rounded-3xl border-2 shadow-xl p-5 sm:p-7 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                {language === 'pb' ? '।। ਅਖੰਡ ਸਤਿਪੁਰੁਸ਼ ਲੀਲਾ ।।' : language === 'en' ? '।। Eternal Sat Purush Manifestations ।।' : '।। अखंड आदि पुरुष लीला ।।'}
              </span>
              <span className="text-xs font-bold text-gray-500 font-mono">
                कबीर सागर प्रमाण
              </span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-4xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚੈ: ਚਾਰੇ ਯੁਗਾਂ ਦੀਆਂ ਪਾਵਨ ਲੀਲ੍ਹਾਵਾਂ' 
                : language === 'en' 
                ? 'Satguru Kabir Saheb: The Four Cosmic Yugas of Grace' 
                : 'सतगुरु कबीर साहेब परिचय: चारों युगों की पावन लीलाएँ'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-serif leading-relaxed">
              {language === 'pb'
                ? 'ਸਤਿਯੁਗ (ਸਤ ਸੁਕ੍ਰਿਤ), ਤ੍ਰੇਤਾ (ਮੁਨੀਂਦਰ ਜੀ), ਦਵਾਪਰ (ਕਰੁਣਾਮਯ ਜੀ) ਅਤੇ ਕਲਿਯੁਗ (ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ) ਦੇ ਅਮਰ ਅਵਤਾਰਾਂ ਦਾ ਪ੍ਰਮਾਣਿਕ ਦਰਸ਼ਨ।'
                : language === 'en'
                ? 'The timeless journey of the Supreme Sat Purush descending in Satya, Treta, Dvapara, and Kali Yuga to liberate souls.'
                : 'सत्ययुग (सत सुकृत), त्रेतायुग (मुनीन्द्र जी), द्वापरयुग (करुणामय जी) और कलियुग (सतगुरु कबीर साहेब) के अमर स्वरूपों का प्रामाणिक दर्शन।'}
            </p>

            {/* Sacred Identity Couplet Requested by User */}
            <div className="mt-4 p-3 rounded-2xl bg-amber-500/10 border-l-4 border-amber-600 italic">
              <p className="text-sm sm:text-base font-black font-serif text-amber-950 dark:text-amber-200">
                जाति हमारी आत्मा, प्राण हमारा नाम ।<br />
                अलख हमारा इष्ट, गगन हमारा ग्राम ।।
              </p>
              <p className="text-[10px] mt-1 font-bold text-amber-800 uppercase tracking-tighter">
                — {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ' : language === 'en' ? 'Satguru Kabir Saheb' : 'सतगुरु कबीर साहेब'}
              </p>
            </div>

            {/* Pragat Leela Mahima (Invocation Verses) */}
            <div 
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.accentGold }}
              className="mt-6 p-5 sm:p-6 rounded-3xl border-2 border-dashed relative overflow-hidden shadow-inner"
            >
              <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
                <Flower2 className="w-24 h-24" />
              </div>
              <h3 
                style={{ color: theme.sacredMaroon }}
                className="text-sm sm:text-base font-black font-serif mb-4 flex items-center gap-2 border-b pb-2"
              >
                <Sparkles className="w-5 h-5 text-amber-600" />
                {language === 'pb' ? '।। ਪ੍ਰਗਟ ਲੀਲ੍ਹਾ ਮਹਿਮਾ ਤੇ ਸਤਿਗੁਰੂ ਵੰਦਨਾ ।।' : language === 'en' ? '।। Glory of Manifestation & Adoration ।।' : '।। प्रकट लीला महिमा एवं सतगुरु वन्दना ।।'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਗਗਨ ਮੰਡਲ ਸੇ ਉਤਰੇ, ਸਤਿਗੁਰੂ ਸਤਯ ਕਬੀਰ।' : language === 'en' ? 'Gagan mandal se utare, Satguru Satya Kabir.' : 'गगन मंडल से उतरे, सतगुरु सत्य कबीर।'}<br />
                    {language === 'pb' ? 'ਜਲਜ ਮਾਂਹੀ ਪੌਢਨ ਕੀਏ, ਦੋਊ ਦਿਨਨ ਕੇ ਪੀਰ।।' : language === 'en' ? 'Jalaj manhi paudhan kiye, dou dinan ke peer..' : 'जलज मांही पौढन किये, दोउ दिनन के पीर।।'}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਕੈਸੇ ਚਮਕੇ ਦਾਮਿਨੀ, ਗਗਨ ਬੀਚ ਲਹਰਾਏ।' : language === 'en' ? 'Kaise chamke damini, gagan beech lahraye.' : 'कैसे चमके दामिनी, गगन बीच लहराए।'}<br />
                    {language === 'pb' ? 'ਐਸੇ ਹੀ ਸਦਗੁਰੂ ਨਜਰ, ਮੇਰੇ ਮਨ ਮੇਂ ਸਮਾਏ।।' : language === 'en' ? 'Aise hi Sadguru nazar, mere man mein samaye..' : 'ऐसे ही सद्गुरु नजर, मेरे मन में समाए।।'}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਨੀਮਾ ਜਲ ਪੀਨੇ ਗਈ, ਵਹਾਂ ਮਿਲੇ ਕਬੀਰ।' : language === 'en' ? 'Neema jal peene gayi, wahan mile Kabir.' : 'नीमा जल पीने गई, वहां मिले कबीर।'}<br />
                    {language === 'pb' ? 'ਅਚਰਜ ਦੇਖਿ ਡਰੀ ਮਹਾ, ਨੀਰੂ ਭਏ ਮਤਿਧੀਰ।।' : language === 'en' ? 'Achraj dekhi dari maha, Neeru bhaye matidheer..' : 'अचरज देखि डरी महा, नीरू भये मतिधीर।।'}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਮੁਲਕਾਈ ਅਗਮ ਲੋਕ ਕੀ, ਗਮ ਨਹੀਂ ਮੁਝਕੋ ਭਾਈ।' : language === 'en' ? 'Mulkai Agam Lok ki, gam nahin mujhko bhai.' : 'मुलकाई अगम लोक की, गम नहीं मुझको भाई।'}<br />
                    {language === 'pb' ? 'ਗੂਂਗੇ ਨੇ ਮਿਸ਼ਰੀ ਖਾਈ, ਪਰਮਾਨੰਦ ਗੁਰੂ ਚਰਣੋਂ ਮੇਂ ਕੋਟਿ-ਕੋਟਿ ਬਲ ਜਾਈ।।' : language === 'en' ? 'Gunge ne mishri khai, parmanand Guru charnon mein koti-koti bal jai..' : 'गूंगे ने मिश्री खाई, परमानंद गुरु चरणों में कोटि-कोटि बल जाई।।'}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਆਪਾ ਮੇਟ ਗੁਰੂ ਮੇਂ ਮਿਲਾ, ਸੂਰਤ ਸ਼ਬਦ ਮੇਂ ਮਗਨ।' : language === 'en' ? 'Aapa met Guru mein mila, surat shabd mein magan.' : 'आपा मेट गुरु में मिला, सूरत शब्द में मगन।'}<br />
                    {language === 'pb' ? 'ਗਗਨ ਮੰਡਲ ਮੇਂ ਜਾਕੇ ਸੁਨੋ, ਅਨਹਦ ਬਾਣੀ ਕੀ ਧੁਨ।।' : language === 'en' ? 'Gagan mandal mein jaake suno, anhad bani ki dhun..' : 'गगन मंडल में जाके सुनो, अनहद बाणी की धुन।।'}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-black leading-relaxed" style={{ color: theme.textPrimary }}>
                    {language === 'pb' ? 'ਸਾਧੂ ਸੰਤ ਸਬ ਮਿਲ ਕਹੈਂ, ਸੁਨੋ ਕਬੀਰ ਕੀ ਬਾਨੀ।' : language === 'en' ? 'Sadhu sant sab mil kahein, suno Kabir ki bani.' : 'साधु संत सब मिल कहैं, सुनो कबीर की बानी।'}<br />
                    {language === 'pb' ? 'ਜੋ ਕੋਈ ਇਸ ਪਦ ਕੋ ਭਜੈ, ਸੋਈ ਪੂਰਣ ਗਿਆਨੀ।।' : language === 'en' ? 'Jo koi is pad ko bhajaye, soi purna gyani..' : 'जो कोई इस पद को भजै, सोई पूर्ण ज्ञानी।।'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={handleToggleSpeech}
              style={{
                backgroundColor: isSpeaking ? '#EF4444' : theme.stepActiveBg,
                color: isSpeaking ? '#FFFFFF' : theme.sacredMaroon,
                borderColor: isSpeaking ? '#DC2626' : theme.accentGold,
              }}
              className="px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 cursor-pointer"
              title="युग गाथा सुनें (Listen Yuga Narration)"
            >
              {isSpeaking ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
              <span>{isSpeaking ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें') : (language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'गाथा सुनें')}</span>
            </button>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:scale-105 transition cursor-pointer shadow-xs"
                title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 5 Tabs Navigation */}
        <div className="mt-6 pt-4 border-t grid grid-cols-3 sm:grid-cols-5 gap-2" style={{ borderColor: theme.cardBorder }}>
          {FOUR_YUGAS_DATA.map((y) => {
            const isSelected = selectedYugaKey === y.key;
            return (
              <button
                key={y.key}
                type="button"
                onClick={() => handleYugaChange(y.key)}
                style={{
                  backgroundColor: isSelected ? theme.stepActiveBg : theme.bgSecondary,
                  borderColor: isSelected ? theme.accentGold : 'transparent',
                }}
                className={`p-2.5 sm:p-3 rounded-2xl border-2 text-left transition-all cursor-pointer relative shadow-2xs ${
                  isSelected ? 'ring-2 ring-amber-500/40 scale-[1.02]' : 'hover:scale-[1.01] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-500 font-mono truncate">
                    {y.key === 'biography' ? 'INTRO' : y.key.toUpperCase()}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping shrink-0" />
                  )}
                </div>
                <div 
                  style={{ color: isSelected ? theme.sacredMaroon : theme.textPrimary }}
                  className="font-black text-[10px] sm:text-xs font-serif line-clamp-1"
                >
                  {y.manifestationName[language]}
                </div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 truncate">
                  {y.yugaName[language]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Yuga Master Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentYuga.key}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.cardBorder,
          }}
          className="rounded-3xl border-2 shadow-xl p-5 sm:p-8 space-y-6"
        >
          {/* Avatar Hero Banner */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-r ${currentYuga.avatarColor} text-white shadow-lg space-y-3 relative overflow-hidden`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 font-bold uppercase tracking-wider">
                {currentYuga.yugaName[language]}
              </span>
              <span className="font-mono text-white/90 font-semibold text-[11px]">
                {currentYuga.yearsSpan[language]}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-white/80 font-serif">
                {language === 'pb' ? 'ਪਾਵਨ ਪ੍ਰਗਟ ਰੂਪ' : language === 'en' ? 'Divine Incarnation' : 'पावन प्रकट स्वरूप'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-wide text-white drop-shadow-md">
                {currentYuga.manifestationName[language]}
              </h2>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-white/95 max-w-3xl font-serif">
              {currentYuga.appearanceSummary[language]}
            </p>
          </div>

          {/* Biography Detailed Content if available */}
          {currentYuga.fullBiography && (
            <div className="space-y-4">
              <h3 
                style={{ color: theme.sacredMaroon }}
                className="text-base sm:text-lg font-black font-serif flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span>
                  {language === 'pb' ? 'ਵਿਸਥਾਰਪੂਰਵਕ ਜੀਵਨ ਪਰਿਚੈ' : language === 'en' ? 'Detailed Life Introduction' : 'विस्तृत जीवन परिचय'}
                </span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed font-serif text-gray-800 dark:text-gray-200">
                {currentYuga.fullBiography[language].map((para, i) => (
                  <p key={i} className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Key Episodes Grid */}
          {currentYuga.keyEpisodes.length > 0 && (
            <div className="space-y-3">
              <h3 
                style={{ color: theme.sacredMaroon }}
                className="text-base sm:text-lg font-black font-serif flex items-center gap-2"
              >
                <Crown className="w-5 h-5 text-amber-600" />
                <span>
                  {language === 'pb' ? 'ਪ੍ਰਮੁੱਖ ਪਾਵਨ ਲੀਲ੍ਹਾਵਾਂ ਤੇ ਪ੍ਰਸੰਗ' : language === 'en' ? 'Sacred Leelas & Significant Episodes' : 'प्रमुख पावन लीलाएँ एवं प्रसंग'}
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentYuga.keyEpisodes.map((ep, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderColor: theme.cardBorder,
                    }}
                    className="p-4 sm:p-5 rounded-2xl border space-y-2 hover:border-amber-500/50 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-800 text-xs font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 
                        style={{ color: theme.sacredMaroon }}
                        className="font-bold text-sm sm:text-base font-serif"
                      >
                        {ep.title[language]}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-sans pl-8">
                      {ep.detail[language]}
                    </p>
                    <div className="pl-8 pt-1 text-[11px] font-semibold text-amber-800 dark:text-amber-400 italic">
                      💡 {ep.significance[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scriptural Evidence & Core Teaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Sacred Verse Evidence */}
            <div 
              style={{ 
                backgroundColor: theme.stepActiveBg,
                borderColor: theme.accentGold 
              }}
              className="p-5 rounded-2xl border-2 space-y-2 relative"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
                <span className="flex items-center gap-1.5 font-serif">
                  <Quote className="w-4 h-4" />
                  <span>{language === 'pb' ? 'ਪਾਵਨ ਪ੍ਰਮਾਣ ਬਾਣੀ' : language === 'en' ? 'Scriptural Evidence' : 'पावन प्रमाण साखी'}</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-black/10 font-mono">
                  {currentYuga.scripturalEvidence.source}
                </span>
              </div>
              <p 
                style={{ color: theme.sacredMaroon }}
                className="text-sm sm:text-base font-serif font-black italic tracking-wide"
              >
                "{currentYuga.scripturalEvidence.verse}"
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-snug">
                {currentYuga.scripturalEvidence.meaning[language]}
              </p>
            </div>

            {/* Core Teaching Summary */}
            <div 
              style={{ 
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder 
              }}
              className="p-5 rounded-2xl border space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider font-serif">
                <Sparkles className="w-4 h-4" />
                <span>
                  {language === 'pb' ? 'ਯੁਗ ਦਾ ਮੂਲ ਉਪਦੇਸ਼' : language === 'en' ? 'Core Spiritual Essence' : 'युग का मूल अमर संदेश'}
                </span>
              </div>
              <p className="text-sm sm:text-base font-serif font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
                {currentYuga.coreTeaching[language]}
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 text-[11px] font-bold border border-emerald-500/30">
                  {language === 'pb' ? '✓ ਅਮਰਲੋਕ ਦਾ ਸਤਯਨਾਮ ਮਾਰਗ' : language === 'en' ? '✓ The Way to Amar Lok' : '✓ अमरलोक का सत्यनाम मार्ग'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Comparative Four Yugas Matrix Table */}
      <div 
        style={{ 
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder 
        }}
        className="rounded-3xl border shadow-xl p-5 sm:p-6 overflow-hidden space-y-4"
      >
        <h3 
          style={{ color: theme.sacredMaroon }}
          className="text-base sm:text-lg font-black font-serif flex items-center gap-2"
        >
          <Layers className="w-5 h-5 text-amber-600" />
          <span>
            {language === 'pb' ? 'ਚਾਰੇ ਯੁਗਾਂ ਦਾ ਤੁਲਨਾਤਮਿਕ ਸੰਖੇਪ' : language === 'en' ? 'Four Yugas Comparative Matrix' : 'चारों युगों का तुलनात्मक संक्षिप्त सार'}
          </span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr 
                style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
                className="border-b text-[11px] font-serif font-black uppercase text-amber-900 dark:text-amber-300"
              >
                <th className="p-3">युग (Yuga)</th>
                <th className="p-3">अवतार रूप (Manifestation)</th>
                <th className="p-3">प्रमुख शिष्य / प्रसंग</th>
                <th className="p-3">अमर साक्ष्य</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: theme.cardBorder }}>
              {FOUR_YUGAS_DATA.map((y) => (
                <tr 
                  key={y.key}
                  onClick={() => handleYugaChange(y.key)}
                  className={`hover:bg-amber-500/5 transition cursor-pointer ${
                    selectedYugaKey === y.key ? 'bg-amber-500/10 font-semibold' : ''
                  }`}
                >
                  <td className="p-3 font-bold">{y.yugaName[language]}</td>
                  <td className="p-3 text-amber-800 dark:text-amber-300 font-bold font-serif">{y.manifestationName[language]}</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    {y.keyEpisodes.length > 0 
                      ? y.keyEpisodes[0].title[language] 
                      : (language === 'pb' ? 'ਇਤਿਹਾਸਿਕ ਵੇਰਵਾ' : language === 'en' ? 'Historical Overview' : 'ऐतिहासिक विवरण')}
                  </td>
                  <td className="p-3 italic text-gray-500 font-serif">"{y.scripturalEvidence.verse.slice(0, 32)}..."</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
