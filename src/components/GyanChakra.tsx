import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  RotateCw, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Bookmark, 
  Share2, 
  Check, 
  CheckCircle2, 
  ArrowLeft, 
  Layers, 
  Info, 
  Flame, 
  Heart, 
  Shield, 
  Feather, 
  Compass, 
  Sliders, 
  Grid, 
  CircleDot,
  Search,
  X
} from 'lucide-react';
import { AATMA_16_BHUSHAN, Bhushan } from '../data/aatmaBhushan';
import { Language, SiddhantNote, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { sacredHaptics } from '../services/haptics';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { formatCoupletString } from '../utils/textSanitizer';

export interface BhushanExtended extends Bhushan {
  pillarId: 'truth' | 'love' | 'renunciation' | 'wisdom';
  pillarTitle: { hi: string; pb: string; en: string };
  pillarColor: string;
  order: number;
  relationship: {
    hi: string;
    pb: string;
    en: string;
  };
  dailyPractice: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const PILLARS_CONFIG = [
  {
    id: 'truth',
    title: {
      hi: '१. सत्य व आचरण स्तम्भ',
      pb: '੧. ਸਤ ਤੇ ਆਚਰਣ ਸਤੰਭ',
      en: '1. Pillar of Truth & Conduct'
    },
    color: '#D97706',
    bg: 'rgba(217, 119, 6, 0.12)',
    range: [1, 2, 3, 4]
  },
  {
    id: 'love',
    title: {
      hi: '२. प्रेम व करुणा स्तम्भ',
      pb: '੨. ਪ੍ਰੇਮ ਤੇ ਦਇਆ ਸਤੰਭ',
      en: '2. Pillar of Divine Love & Mercy'
    },
    color: '#E11D48',
    bg: 'rgba(225, 29, 72, 0.12)',
    range: [5, 6, 7, 8]
  },
  {
    id: 'renunciation',
    title: {
      hi: '३. त्याग व वैराग्य स्तम्भ',
      pb: '੩. ਤਿਆਗ ਤੇ ਵੈਰਾਗ ਸਤੰਭ',
      en: '3. Pillar of Detachment & Peace'
    },
    color: '#4F46E5',
    bg: 'rgba(79, 70, 229, 0.12)',
    range: [9, 10, 11, 12]
  },
  {
    id: 'wisdom',
    title: {
      hi: '४. विवेक व आत्म-बोध स्तम्भ',
      pb: '੪. ਵਿਵੇਕ ਤੇ ਆਤਮ-ਬੋਧ ਸਤੰਭ',
      en: '4. Pillar of Discernment & Realization'
    },
    color: '#0D9488',
    bg: 'rgba(13, 148, 136, 0.12)',
    range: [13, 14, 15, 16]
  }
];

export const ENRICHED_16_BHUSHAN: BhushanExtended[] = AATMA_16_BHUSHAN.map((b, idx) => {
  const num = idx + 1;
  let pillarId: 'truth' | 'love' | 'renunciation' | 'wisdom' = 'truth';
  let pillarTitle = PILLARS_CONFIG[0].title;
  let pillarColor = '#D97706';

  if (num >= 1 && num <= 4) {
    pillarId = 'truth';
    pillarTitle = PILLARS_CONFIG[0].title;
    pillarColor = ['#D97706', '#EA580C', '#B45309', '#F59E0B'][idx];
  } else if (num >= 5 && num <= 8) {
    pillarId = 'love';
    pillarTitle = PILLARS_CONFIG[1].title;
    pillarColor = ['#E11D48', '#F43F5E', '#BE123C', '#FB7185'][idx - 4];
  } else if (num >= 9 && num <= 12) {
    pillarId = 'renunciation';
    pillarTitle = PILLARS_CONFIG[2].title;
    pillarColor = ['#4F46E5', '#6366F1', '#3730A3', '#818CF8'][idx - 8];
  } else {
    pillarId = 'wisdom';
    pillarTitle = PILLARS_CONFIG[3].title;
    pillarColor = ['#0D9488', '#059669', '#10B981', '#14B8A6'][idx - 12];
  }

  const relationships: Record<string, { hi: string; pb: string; en: string }> = {
    saty: {
      hi: 'सत्य जीवन की नींव है। बिना सत्य के संतोष और धैर्य की प्राप्ति असंभव है। यह प्रथम द्वार है।',
      pb: 'ਸੱਚ ਜੀਵਨ ਦੀ ਨੀਂਹ ਹੈ। ਬਿਨਾਂ ਸੱਚ ਦੇ ਸੰਤੋਖ ਤੇ ਧੀਰਜ ਦੀ ਪ੍ਰਾਪਤੀ ਅਸੰਭਵ ਹੈ। ਇਹ ਪਹਿਲਾ ਦੁਆਰ ਹੈ।',
      en: 'Truth is the foundational bedrock. Without truth, contentment and patience cannot blossom.'
    },
    santosh: {
      hi: 'सत्य से संतोष प्रकट होता है, जिससे मन की तृष्णा समाप्त होकर प्रेम और धीरज के अंकुर फूटते हैं।',
      pb: 'ਸੱਚ ਤੋਂ ਸੰਤੋਖ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਮਨ ਦੀ ਤ੍ਰਿਸ਼ਨਾ ਮੁੱਕ ਕੇ ਪ੍ਰੇਮ ਤੇ ਧੀਰਜ ਉਪਜਦਾ ਹੈ।',
      en: 'Truth yields contentment, ending unending cravings and allowing divine love to take root.'
    },
    prem: {
      hi: 'संतोषी हृदय में ही परमात्मा व समस्त सृष्टि के प्रति निष्कपट ढाई आखर प्रेम का प्राकट्य होता है।',
      pb: 'ਸੰਤੋਖੀ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਪ੍ਰਭੂ ਅਤੇ ਸਮੁੱਚੀ ਸ੍ਰਿਸ਼ਟੀ ਪ੍ਰਤੀ ਨਿਰਪੱਖ ਢਾਈ ਅੱਖਰ ਪ੍ਰੇਮ ਉਪਜਦਾ ਹੈ।',
      en: 'Only in a contented heart can unconditional Divine Love embrace all living souls.'
    },
    dhairya: {
      hi: 'प्रेम की कसौटी धीरज है। जब साधना में उतार-चढ़ाव आते हैं, तब धीरज आत्मा को डिगने नहीं देता।',
      pb: 'ਪ੍ਰੇਮ ਦੀ ਕਸੌਟੀ ਧੀਰਜ ਹੈ। ਜਦੋਂ ਸਾਧਨਾ ਵਿੱਚ ਔਖਿਆਈਆਂ ਆਉਂਦੀਆਂ ਹਨ, ਤਦ ਧੀਰਜ ਆਤਮਾ ਨੂੰ ਥਿੜਕਣ ਨਹੀਂ ਦਿੰਦਾ।',
      en: 'Patience is the endurance of divine love, keeping the soul steadfast through all trials.'
    },
    nirdosh: {
      hi: 'धीरज व प्रेम से मन के समस्त विकार धुल जाते हैं और आत्मा गंगा नीर की भांति निर्दोष हो जाती है।',
      pb: 'ਧੀਰਜ ਤੇ ਪ੍ਰੇਮ ਨਾਲ ਮਨ ਦੇ ਸਾਰੇ ਵਿਕਾਰ ਧੁਲ ਜਾਂਦੇ ਹਨ ਅਤੇ ਆਤਮਾ ਗੰਗਾ ਜਲ ਵਾਂਗ ਨਿਰਦੋਸ਼ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Purified through love and patience, the mind washes away impurities, attaining pure innocence.'
    },
    daya: {
      hi: 'निर्दोष आत्मा प्रत्येक जीव में परमात्मा की ज्योति देखकर स्वभाविक रूप से दया भाव से भर जाती है।',
      pb: 'ਨਿਰਦੋਸ਼ ਆਤਮਾ ਹਰ ਜੀਵ ਵਿੱਚ ਪ੍ਰਭੂ ਦੀ ਜੋਤ ਦੇਖ ਕੇ ਸੁਭਾਵਿਕ ਤੌਰ \'ਤੇ ਦਇਆ ਨਾਲ ਭਰ ਜਾਂਦੀ ਹੈ।',
      en: 'An innocent soul sees the Supreme Light in every living creature, radiating boundless mercy.'
    },
    kshama: {
      hi: 'दयालु हृदय में ही क्षमा का वास होता है। क्षमा से काल और क्रोध का बंधन सदा के लिए टूट जाता है।',
      pb: 'ਦਇਆਵਾਨ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਖਿਮਾ ਵੱਸਦੀ ਹੈ। ਖਿਮਾ ਨਾਲ ਕਾਲ ਅਤੇ ਕ੍ਰੋਧ ਦਾ ਬੰਧਨ ਸਦਾ ਲਈ ਟੁੱਟ ਜਾਂਦਾ ਹੈ।',
      en: 'Mercy births supreme forgiveness, dissolving malice and freeing the soul from karmic anger.'
    },
    sheel: {
      hi: 'क्षमा व दया से परिपूर्ण साधक में उच्चतम शील व उत्तम चरित्र का दिव्य तेज प्रकट होता है।',
      pb: 'ਖਿਮਾ ਤੇ ਦਇਆ ਨਾਲ ਭਰਪੂਰ ਸਾਧਕ ਵਿੱਚ ਉੱਚਤਮ ਸ਼ੀਲ ਤੇ ਚੰਗੇ ਚਰਿੱਤਰ ਦਾ ਨੂਰ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ।',
      en: 'Forgiveness and compassion culminate in impeccable character and unbroken humility.'
    },
    nishkaam: {
      hi: 'शीलवान साधक कर्मों के फल की लालसा त्यागकर पूर्णतः निष्काम भाव से सतगुरु सेवा में रत रहता है।',
      pb: 'ਸ਼ੀਲਵਾਨ ਸਾਧਕ ਫਲਾਂ ਦੀ ਲਾਲਸਾ ਤਿਆਗ ਕੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਿਸ਼ਕਾਮ ਹੋ ਕੇ ਸਤਿਗੁਰੂ ਸੇਵਾ ਵਿੱਚ ਲੱਗਦਾ ਹੈ।',
      en: 'A noble soul acts without selfish desires, offering every deed as selfless dedication.'
    },
    tyag: {
      hi: 'निष्काम भाव अहंकार के बीज को भस्म करता है, जिससे सूक्ष्म त्याग और समर्पण सिद्ध होता है।',
      pb: 'ਨਿਸ਼ਕਾਮ ਭਾਵ ਹਉਮੈ ਦੇ ਬੀਜ ਨੂੰ ਸਾੜ ਦਿੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਸੂਖਮ ਤਿਆਗ ਤੇ ਸਮਰਪਣ ਸਿੱਧ ਹੁੰਦਾ ਹੈ।',
      en: 'Desireless action destroys the ego, elevating the soul to true spiritual sacrifice.'
    },
    vairagya: {
      hi: 'त्याग से संसार की असारता समझ आती है और चित्त में निर्मल, अखंड वैराग्य जागृत होता है।',
      pb: 'ਤਿਆਗ ਨਾਲ ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਸਮਝ ਆਉਂਦੀ ਹੈ ਅਤੇ ਚਿੱਤ ਵਿੱਚ ਅਖੰਡ ਵੈਰਾਗ ਜਾਗਦਾ ਹੈ।',
      en: 'True renunciation reveals worldly illusion, anchoring the intellect in supreme detachment.'
    },
    shanti: {
      hi: 'वैराग्य से वासनाओं का तूफान शांत होता है और अंतःकरण में असीम, अखंड शांति की स्थापना होती है।',
      pb: 'ਵੈਰਾਗ ਨਾਲ ਵਾਸਨਾਵਾਂ ਦਾ ਤੂਫ਼ਾਨ ਥੰਮ੍ਹਦਾ ਹੈ ਅਤੇ ਅੰਦਰ ਅਸੀਮ, ਅਖੰਡ ਸ਼ਾਂਤੀ ਦੀ ਸਥਾਪਨਾ ਹੁੰਦੀ ਹੈ।',
      en: 'Detachment calms the storms of desire, instilling profound and unshakeable inner peace.'
    },
    'nij-dharm': {
      hi: 'परम शांति में स्थित होकर आत्मा अपने मूल स्वरूप और सत्यलोक के निज धर्म को पहचानती है।',
      pb: 'ਪਰਮ ਸ਼ਾਂਤੀ ਵਿੱਚ ਸਥਿਰ ਹੋ ਕੇ ਆਤਮਾ ਆਪਣੇ ਅਸਲ ਸਰੂਪ ਅਤੇ ਸਤਿਲੋਕ ਦੇ ਨਿੱਜ ਧਰਮ ਨੂੰ ਪਛਾਣਦੀ ਹੈ।',
      en: 'In deep stillness, the soul awakens to its primal identity and eternal spiritual duty.'
    },
    maitri: {
      hi: 'निज धर्म के बोध से "एक नूर ते सब जग उपज्या" का मैत्री भाव और सर्व-समभाव जागृत होता है।',
      pb: 'ਨਿੱਜ ਧਰਮ ਦੇ ਬੋਧ ਨਾਲ "ਏਕ ਨੂਰ ਤੇ ਸਭੁ ਜਗੁ ਉਪਜਿਆ" ਦਾ ਮੈਤਰੀ ਭਾਵ ਅਤੇ ਸਮਾਨਤਾ ਜਾਗਦੀ ਹੈ।',
      en: 'Soul-consciousness reveals universal oneness, seeing all creation as one divine family.'
    },
    gyaan: {
      hi: 'मैत्री भाव से संकीर्णता मिटती है और सतगुरु का सत्य ज्ञान व सारशब्द का भेद हृदय में उतरता है।',
      pb: 'ਮੈਤਰੀ ਭਾਵ ਨਾਲ ਤੰਗਦਿਲੀ ਮਿਟਦੀ ਹੈ ਅਤੇ ਸਤਿਗੁਰੂ ਦਾ ਸੱਚਾ ਗਿਆਨ ਤੇ ਸਾਰਸ਼ਬਦ ਹਿਰਦੇ ਵਿੱਚ ਉਤਰਦਾ ਹੈ।',
      en: 'Universal fellowship clears dogma, allowing true esoteric knowledge and Saar Shabd to shine.'
    },
    vivek: {
      hi: 'ज्ञान की पराकाष्ठा "विवेक" है—हंस बुद्धि जो असत्य (नीर) को छोड़ सत्य (क्षीर) को ग्रहण कर मोक्ष पाती है।',
      pb: 'ਗਿਆਨ ਦੀ ਸਿਖਰ "ਵਿਵੇਕ" ਹੈ—ਹੰਸ ਬੁੱਧੀ ਜੋ ਝੂਠ ਨੂੰ ਛੱਡ ਕੇ ਸੱਚ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰਕੇ ਮੁਕਤੀ ਪਾਉਂਦੀ ਹੈ।',
      en: 'Vivek is the supreme swan discernment, separating eternal truth from illusion to attain Satlok.'
    }
  };

  const practices: Record<string, { hi: string; pb: string; en: string }> = {
    saty: {
      hi: 'दिनभर में अपने विचारों और वाणी की समीक्षा करें; किसी भी परिस्थिति में असत्य का सहारा न लें।',
      pb: 'ਦਿਨ ਭਰ ਆਪਣੇ ਵਿਚਾਰਾਂ ਤੇ ਬੋਲਾਂ ਦੀ ਪਰਖ ਕਰੋ; ਕਿਸੇ ਵੀ ਹਾਲਤ ਵਿੱਚ ਝੂਠ ਦਾ ਸਹਾਰਾ ਨਾ ਲਓ।',
      en: 'Review your speech daily; uphold honesty in words and thoughts regardless of circumstances.'
    },
    santosh: {
      hi: 'जो प्राप्त है उसमें प्रसन्न रहें; दूसरों से तुलना करने की वृत्ति को त्यागें।',
      pb: 'ਜੋ ਮਿਲਿਆ ਹੈ ਉਸ ਵਿੱਚ ਖੁਸ਼ ਰਹੋ; ਦੂਜਿਆਂ ਨਾਲ ਮੁਕਾਬਲਾ ਕਰਨ ਦੀ ਆਦਤ ਛੱਡੋ।',
      en: 'Rejoice in what you have today; release the urge to compare your journey with others.'
    },
    prem: {
      hi: 'प्रत्येक व्यक्ति से कटुता मिटाकर प्रेमपूर्वक व्यवहार करें; हृदय में वैर-भाव न रखें।',
      pb: 'ਹਰ ਕਿਸੇ ਨਾਲ ਕੁੜੱਤਣ ਮਿਟਾ ਕੇ ਪਿਆਰ ਨਾਲ ਵਰਤੋ; ਹਿਰਦੇ ਵਿੱਚ ਵੈਰ ਨਾ ਰੱਖੋ।',
      en: 'Treat every person with warmth; let love replace irritation and resentment.'
    },
    dhairya: {
      hi: 'क्रोध या उद्वेग आने पर ५ मिनट मौन रहें और सत्यनाम स्मरण करें।',
      pb: 'ਗੁੱਸਾ ਆਉਣ \'ਤੇ ੫ ਮਿੰਟ ਚੁੱਪ ਰਹੋ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।',
      en: 'When impatience strikes, pause for 5 minutes of silence with Satyanaam remembrance.'
    },
    nirdosh: {
      hi: 'मन में किसी के प्रति ईर्ष्या या कपट न आने दें; चित्त को बालक जैसा निष्पाप रखें।',
      pb: 'ਮਨ ਵਿੱਚ ਕਿਸੇ ਪ੍ਰਤੀ ਈਰਖਾ ਜਾਂ ਧੋਖਾ ਨਾ ਆਉਣ ਦਿਓ; ਮਨ ਨੂੰ ਬੱਚੇ ਵਾਂਗ ਨਿਰਮਲ ਰੱਖੋ।',
      en: 'Guard the mind against malice and jealousy; keep the heart pure as a child.'
    },
    daya: {
      hi: 'किसी भूखे, पशु-पक्षी या दुःखी जीव की निःस्वार्थ सेवा या सहायता करें।',
      pb: 'ਕਿਸੇ ਭੁੱਖੇ, ਪੰਛੀ-ਜਾਨਵਰ ਜਾਂ ਦੁਖੀ ਜੀਵ ਦੀ ਨਿਰਸਵਾਰਥ ਸੇਵਾ ਜਾਂ ਮਦਦ ਕਰੋ।',
      en: 'Extend selfless help or food to a suffering being, bird, or animal today.'
    },
    kshama: {
      hi: 'जिसने आपका अहित किया हो, उसे मन से क्षमा कर उसके कल्याण की प्रार्थना करें।',
      pb: 'ਜਿਸਨੇ ਤੁਹਾਡਾ ਬੁਰਾ ਕੀਤਾ ਹੋਵੇ, ਉਸਨੂੰ ਮਨੋਂ ਮੁਆਫ਼ ਕਰਕੇ ਉਸਦੀ ਭਲਾਈ ਦੀ ਅਰਦਾਸ ਕਰੋ।',
      en: 'Forgive anyone who wronged you; pray for their upliftment and peace.'
    },
    sheel: {
      hi: 'अपनी वाणी में मिठास, स्वभाव में विनम्रता और आचरण में मर्यादा बनाए रखें।',
      pb: 'ਆਪਣੀ ਬੋਲੀ ਵਿੱਚ ਮਿਠਾਸ, ਸੁਭਾਅ ਵਿੱਚ ਨਿਮਰਤਾ ਅਤੇ ਚਾਲ-ਚਲਣ ਵਿੱਚ ਮਰਯਾਦਾ ਰੱਖੋ।',
      en: 'Maintain humility in speech, grace in demeanor, and sacred discipline in conduct.'
    },
    nishkaam: {
      hi: 'आज का एक सत्कर्म केवल परमात्मा की प्रसन्नता हेतु करें, बिना किसी प्रशंसा की आशा के।',
      pb: 'ਅੱਜ ਦਾ ਇੱਕ ਨੇਕ ਕੰਮ ਸਿਰਫ਼ ਪ੍ਰਭੂ ਦੀ ਪ੍ਰਸੰਨਤਾ ਲਈ ਕਰੋ, ਬਿਨਾਂ ਕਿਸੇ ਸ਼ੋਭਾ ਦੀ ਆਸ ਦੇ।',
      en: 'Perform one good deed purely for spiritual devotion, seeking zero praise.'
    },
    tyag: {
      hi: 'अपने \'मैं\' और \'अहंकार\' का त्याग करें; हर सफलता का श्रेय सतगुरु को अर्पित करें।',
      pb: 'ਆਪਣੀ \'ਮੈਂ\' ਅਤੇ ਹਉਮੈ ਨੂੰ ਤਿਆਗੋ; ਹਰ ਕਾਮਯਾਬੀ ਦਾ ਸਿਹਰਾ ਸਤਿਗੁਰੂ ਨੂੰ ਅਰਪਣ ਕਰੋ।',
      en: 'Surrender the egoistic "I"; dedicate every achievement to the grace of Satguru.'
    },
    vairagya: {
      hi: 'संसार में रहते हुए कमल के पत्ते की भांति जल से अछूते रहें; अनावश्यक मोह कम करें।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹੋਏ ਕੰਵਲ ਦੇ ਫੁੱਲ ਵਾਂਗ ਨਿਰਲੇਪ ਰਹੋ; ਫ਼ਜ਼ੂਲ ਮੋਹ ਘਟਾਓ।',
      en: 'Live like a lotus in water—unaffected by worldly drama and unnecessary attachments.'
    },
    shanti: {
      hi: 'शोरगुल और विवादों से दूर रहकर प्रतिदिन १५ मिनट एकांत ध्यान का अभ्यास करें।',
      pb: 'ਰੌਲੇ-ਰੱਪੇ ਤੇ ਝਗੜਿਆਂ ਤੋਂ ਦੂਰ ਰਹਿ ਕੇ ਰੋਜ਼ਾਨਾ ੧੫ ਮਿੰਟ ਇਕਾਂਤ ਧਿਆਨ ਕਰੋ।',
      en: 'Spend 15 minutes in quiet solitary meditation, resting in the eternal calm within.'
    },
    'nij-dharm': {
      hi: 'परम शांति में स्थित होकर आत्मा अपने मूल स्वरूप और सत्यलोक के निज धर्म को पहचानती है।',
      pb: 'ਪਰਮ ਸ਼ਾਂਤੀ ਵਿੱਚ ਸਥਿਰ ਹੋ ਕੇ ਆਤਮਾ ਆਪਣੇ ਅਸਲ ਸਰੂਪ ਅਤੇ ਸਤਿਲੋਕ ਦੇ ਨਿੱਜ ਧਰਮ ਨੂੰ ਪਛਾਣਦੀ ਹੈ।',
      en: 'In deep stillness, the soul awakens to its primal identity and eternal spiritual duty.'
    },
    maitri: {
      hi: 'निज धर्म के बोध से "एक नूर ते सब जग उपज्या" का मैत्री भाव और सर्व-समभाव जागृत होता है।',
      pb: 'ਨਿੱਜ ਧਰਮ ਦੇ ਬੋਧ ਨਾਲ "ਏਕ ਨੂਰ ਤੇ ਸਭੁ ਜਗੁ ਉਪਜਿਆ" ਦਾ ਮੈਤਰੀ ਭਾਵ ਅਤੇ ਸਮਾਨਤਾ ਜਾਗਦੀ ਹੈ।',
      en: 'Soul-consciousness reveals universal oneness, seeing all creation as one divine family.'
    },
    gyaan: {
      hi: 'मैत्री भाव से संकीर्णता मिटती है और सतगुरु का सत्य ज्ञान व सारशब्द का भेद हृदय में उतरता है।',
      pb: 'ਮੈਤਰੀ ਭਾਵ ਨਾਲ ਤੰਗਦਿਲੀ ਮਿਟਦੀ ਹੈ ਅਤੇ ਸਤਿਗੁਰੂ ਦਾ ਸੱਚਾ ਗਿਆਨ ਤੇ ਸਾਰਸ਼ਬਦ ਹਿਰਦੇ ਵਿੱਚ ਉਤਰਦਾ ਹੈ।',
      en: 'Universal fellowship clears dogma, allowing true esoteric knowledge and Saar Shabd to shine.'
    },
    vivek: {
      hi: 'ज्ञान की पराकाष्ठा "विवेक" है—हंस बुद्धि जो असत्य (नीर) को छोड़ सत्य (क्षीर) को ग्रहण कर मोक्ष पाती है।',
      pb: 'ਗਿਆਨ ਦੀ ਸਿਖਰ "ਵਿਵੇਕ" ਹੈ—ਹੰਸ ਬੁੱਧੀ ਜੋ ਝੂਠ ਨੂੰ ਛੱਡ ਕੇ ਸੱਚ ਨੂੰ ਗ੍ਰਹਿਣ ਕਰਕੇ ਮੁਕਤੀ ਪਾਉਂਦੀ ਹੈ।',
      en: 'Vivek is the supreme swan discernment, separating eternal truth from illusion to attain Satlok.'
    }
  };

  return {
    ...b,
    order: num,
    pillarId,
    pillarTitle,
    pillarColor,
    relationship: relationships[b.id] || {
      hi: 'यह गुण आत्मा को शुद्ध कर सत्यलोक गमन के योग्य बनाता है।',
      pb: 'ਇਹ ਗੁਣ ਆਤਮਾ ਨੂੰ ਸ਼ੁੱਧ ਕਰਕੇ ਸਤਿਲੋਕ ਜਾਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ।',
      en: 'This virtue purifies the soul, preparing it for ascension to Satlok.'
    },
    dailyPractice: practices[b.id] || {
      hi: 'इस गुण का नित्य जीवन में मन, वचन और कर्म से पालन करें।',
      pb: 'ਇਹ ਗੁਣ ਦੀ ਨਿੱਤ ਜੀਵਨ ਵਿੱਚ ਮਨ, ਬੋਲ ਤੇ ਕਰਮ ਨਾਲ ਪਾਲਣਾ ਕਰੋ।',
      en: 'Practice this jewel in your daily life through thoughts, words, and actions.'
    }
  };
});

interface GyanChakraProps {
  language: Language;
  onClose?: () => void;
  onSelectBhushan?: (bhushan: BhushanExtended) => void;
  onSaveToDiary?: (notes: string, sakhiNumber?: number) => void;
  onOpenDeepSearch?: (query: string) => void;
}

export const GyanChakra: React.FC<GyanChakraProps> = ({
  language,
  onClose,
  onSelectBhushan,
  onSaveToDiary,
  onOpenDeepSearch
}) => {
  const { theme } = useAppTheme();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewLayout, setViewLayout] = useState<'chakra' | 'cards' | 'journey'>('chakra');
  const [savedToast, setSavedToast] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const autoSpinTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 3D Wheel drag rotation & tilt state
  const [wheelRotation, setWheelRotation] = useState<number>(0);
  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; rot: number }>({ x: 0, y: 0, rot: 0 });

  const handleTouchOrMouseDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY, rot: wheelRotation };
  };

  const handleTouchOrMouseMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - dragStartRef.current.x;
    const dy = clientY - dragStartRef.current.y;
    setWheelRotation(dragStartRef.current.rot + dx * 0.4);
    setTiltX(-dy * 0.04);
    setTiltY(dx * 0.04);
  };

  const handleTouchOrMouseUp = () => {
    isDraggingRef.current = false;
    setTiltX(0);
    setTiltY(0);
  };

  const currentBhushan = ENRICHED_16_BHUSHAN[selectedIndex];

  // Language helper
  const t = (obj: any) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['hi'] || obj['en'] || '';
  };

  // Filtered bhushans
  const filteredBhushans = useMemo(() => {
    return ENRICHED_16_BHUSHAN.filter((b) => {
      const matchPillar = selectedPillarFilter === 'all' || b.pillarId === selectedPillarFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchPillar;

      const matchName = 
        (b.name.hi && b.name.hi.toLowerCase().includes(q)) ||
        (b.name.pb && b.name.pb.toLowerCase().includes(q)) ||
        (b.name.en && b.name.en.toLowerCase().includes(q));
      const matchDef = 
        (b.definition.hi && b.definition.hi.toLowerCase().includes(q)) ||
        (b.definition.pb && b.definition.pb.toLowerCase().includes(q)) ||
        (b.definition.en && b.definition.en.toLowerCase().includes(q));
      const matchSakhi = b.sakhi.text.toLowerCase().includes(q);

      return matchPillar && (matchName || matchDef || matchSakhi);
    });
  }, [selectedPillarFilter, searchQuery]);

  // Handle select segment with subtle ambient sound trigger
  const handleSelectSegment = (index: number) => {
    sacredHaptics.lightTap();
    satyanaamAudio.playStepCompletionChime();
    setSelectedIndex(index);
    if (onSelectBhushan) {
      onSelectBhushan(ENRICHED_16_BHUSHAN[index]);
    }
  };

  // Step Next / Prev
  const handleNext = () => {
    sacredHaptics.lightTap();
    satyanaamAudio.playStepCompletionChime();
    setSelectedIndex((prev) => (prev + 1) % ENRICHED_16_BHUSHAN.length);
  };

  const handlePrev = () => {
    sacredHaptics.lightTap();
    satyanaamAudio.playStepCompletionChime();
    setSelectedIndex((prev) => (prev - 1 + ENRICHED_16_BHUSHAN.length) % ENRICHED_16_BHUSHAN.length);
  };

  // Auto-Spin Tour
  useEffect(() => {
    if (isAutoSpinning) {
      autoSpinTimerRef.current = setInterval(() => {
        setSelectedIndex((prev) => (prev + 1) % ENRICHED_16_BHUSHAN.length);
      }, 4500);
    } else if (autoSpinTimerRef.current) {
      clearInterval(autoSpinTimerRef.current);
      autoSpinTimerRef.current = null;
    }
    return () => {
      if (autoSpinTimerRef.current) {
        clearInterval(autoSpinTimerRef.current);
      }
    };
  }, [isAutoSpinning]);

  // Speech Recitation
  const handleToggleSpeech = () => {
    sacredHaptics.mediumTap();
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
      return;
    }

    const b = currentBhushan;
    const nameText = t(b.name);
    const defText = t(b.definition);
    const sakhiText = b.sakhi.text;
    const meaningText = b.sakhi.meaning;
    const relText = t(b.relationship);

    const fullSpeech = `${nameText}. ${defText}. पावन साखी: ${sakhiText}. साखी का भावार्थ: ${meaningText}. आध्यात्मिक संबंध: ${relText}`;

    setIsSpeaking(true);
    speechReciter.speak(
      fullSpeech,
      language,
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );
  };

  // Save to Spiritual Diary & Siddhant Notes
  const handleSaveToDiaryLocal = () => {
    sacredHaptics.successVibration();
    const b = currentBhushan;
    const noteId = `siddhant-bhushan-${b.id}-${Date.now()}`;
    const sakhiNum = b.order;

    const siddhantObj: SiddhantNote = {
      id: noteId,
      sakhiNumber: sakhiNum,
      grantha: 'Kabir Sagar (Aatma Bhushan)',
      categoryTitle: t(b.name),
      highlightedText: `${t(b.name)}: ${b.sakhi.text}`,
      reflectionNote: `[${t(b.pillarTitle)}] ${t(b.definition)}\n\nसंबंध: ${t(b.relationship)}\n\nनित्य अभ्यास: ${t(b.dailyPractice)}`,
      date: new Date().toISOString(),
      color: b.pillarColor,
      tags: ['16 भूषण', 'ज्ञान-चक्र', b.pillarId]
    };

    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('sahebworld_siddhant_notes');
        const existing: SiddhantNote[] = saved ? JSON.parse(saved) : [];
        localStorage.setItem('sahebworld_siddhant_notes', JSON.stringify([siddhantObj, ...existing]));

        const diarySaved = localStorage.getItem('sahebworld_diary_entries');
        const diaryExisting = diarySaved ? JSON.parse(diarySaved) : [];
        const diaryEntry = {
          id: noteId,
          sakhiNumber: sakhiNum,
          date: new Date().toISOString(),
          notes: `[आत्मा के १६ भूषण - ज्ञान चक्र: ${t(b.name)}]\n\nमूल साखी: ${b.sakhi.text}\n\nभावार्थ: ${b.sakhi.meaning}\n\nआध्यात्मिक रहस्य: ${t(b.relationship)}\n\nदैनिक साधना: ${t(b.dailyPractice)}`,
          categoryTag: 'ज्ञान चक्र भूषण',
          mood: 'illuminated',
          gratitude: `${t(b.name)} के दिव्य गुण का संकल्प लिया।`,
          resolution: `${t(b.dailyPractice)}`
        };
        localStorage.setItem('sahebworld_diary_entries', JSON.stringify([diaryEntry, ...diaryExisting]));

        window.dispatchEvent(new CustomEvent('sahebworld_siddhant_notes_updated'));
        window.dispatchEvent(new CustomEvent('sahebworld_diary_updated'));
      } catch (err) {
        console.error(err);
      }
    }

    if (onSaveToDiary) {
      onSaveToDiary(
        `[ज्ञान चक्र - ${t(b.name)}]\n${b.sakhi.text}\n${b.sakhi.meaning}`,
        b.order
      );
    }

    setSavedToast(t(b.name));
    setTimeout(() => setSavedToast(null), 3500);
  };

  // Share Bhushan
  const handleShare = async () => {
    sacredHaptics.lightTap();
    const b = currentBhushan;
    const shareText = `${SACRED_BRANDING.header[language]}\n\n✨ आत्मा के १६ भूषण (ज्ञान-चक्र) ✨\n\n💎 ${b.order}. ${t(b.name)}\n📍 ${t(b.pillarTitle)}\n\n📜 पावन साखी:\n"${formatCoupletString(b.sakhi.text)}"\n\n🌸 भावार्थ: ${b.sakhi.meaning}\n\n💡 आध्यात्मिक रहस्य:\n${t(b.relationship)}\n\n🌱 दैनिक साधना अभ्यास:\n${t(b.dailyPractice)}\n\n${SACRED_BRANDING.footer[language]}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `ज्ञान-चक्र: ${t(b.name)}`,
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 3000);
      }
    } catch {
      await navigator.clipboard.writeText(shareText);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      } else if (e.key === ' ') {
        setIsAutoSpinning((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute SVG Segment Arc Path
  const totalSegments = 16;
  const anglePerSegment = 360 / totalSegments;
  const center = 300;
  const innerRadius = 130;
  const outerRadius = 265;

  const createSegmentPath = (index: number) => {
    const startAngle = index * anglePerSegment - 90;
    const endAngle = (index + 1) * anglePerSegment - 90;
    const padAngle = 0.8;

    const sRad = ((startAngle + padAngle) * Math.PI) / 180;
    const eRad = ((endAngle - padAngle) * Math.PI) / 180;

    const x1 = center + innerRadius * Math.cos(sRad);
    const y1 = center + innerRadius * Math.sin(sRad);
    const x2 = center + outerRadius * Math.cos(sRad);
    const y2 = center + outerRadius * Math.sin(sRad);
    const x3 = center + outerRadius * Math.cos(eRad);
    const y3 = center + outerRadius * Math.sin(eRad);
    const x4 = center + innerRadius * Math.cos(eRad);
    const y4 = center + innerRadius * Math.sin(eRad);

    const largeArc = endAngle - startAngle - 2 * padAngle > 180 ? 1 : 0;

    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1} Z`;
  };

  const getSegmentCenterCoords = (index: number) => {
    const midAngle = (index + 0.5) * anglePerSegment - 90;
    const midRad = (midAngle * Math.PI) / 180;
    const midRadius = (innerRadius + outerRadius) / 2;
    return {
      x: center + midRadius * Math.cos(midRad),
      y: center + midRadius * Math.sin(midRad),
      angle: midAngle
    };
  };

  return (
    <div 
      className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-6 transition-colors duration-300"
      style={{ color: theme.textPrimary }}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {savedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border text-sm font-bold backdrop-blur-md"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: '#10B981',
              color: '#065F46'
            }}
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-bounce" />
            <span>
              {language === 'pb' ? `"${savedToast}" ਸਿਧਾਂਤ ਨੋਟਸ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਗਿਆ!` : 
               language === 'en' ? `"${savedToast}" saved to Siddhant Notes!` : 
               `"${savedToast}" सिद्धांत विचार में सुरक्षित किया गया!`}
            </span>
          </motion.div>
        )}
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border text-sm font-bold backdrop-blur-md bg-amber-50 border-amber-400 text-amber-900"
          >
            <Check className="w-5 h-5 text-amber-600" />
            <span>
              {language === 'pb' ? 'ਪਾਵਨ ਸੰਦੇਸ਼ ਕਲਿੱਪਬੋਰਡ \'ਤੇ ਕਾਪੀ ਹੋ ਗਿਆ!' : 
               language === 'en' ? 'Sacred wisdom copied to clipboard!' : 
               'पावन संदेश क्लिपबोर्ड पर कॉपी हो गया!'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header & Navigation Bar inside Clean Cream/Off-White Rounded Card Container (#FFFDF7) */}
      <div 
        className="p-5 sm:p-6 rounded-3xl border-2 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          backgroundColor: '#FFFDF7',
          borderColor: '#D97706',
        }}
      >
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">☸️</span>
              <h1 className="text-xl sm:text-2xl font-black font-serif tracking-tight text-[#6B1D1D]">
                {language === 'pb' ? 'ਗਿਆਨ-ਚੱਕਰ : ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ' : 
                 language === 'en' ? 'Gyan-Chakra: 16 Jewels of the Soul' : 
                 'ज्ञान-चक्र • आत्मा के 16 भूषण'}
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-serif font-semibold text-amber-900/90 mt-1">
              {language === 'pb' ? 'ਇੱਕ ਸਤਯਨਾਮ ਨੂੰ ਸਾਧਣ ਨਾਲ ਆਤਮਾ ਦੇ ਇਹ ੧੬ ਅਲੌਕਿਕ ਗਹਿਣੇ ਆਪਣੇ ਆਪ ਪ੍ਰਗਟ ਹੁੰਦੇ ਹਨ।' : 
               language === 'en' ? 'By mastering the One Satyanaam, these 16 divine ornaments naturally blossom within the soul.' : 
               'एक सत्यनाम को साधने से आत्मा के ये १६ अलौकिक आभूषण स्वतः प्रस्फुटित होते हैं।'}
            </p>
          </div>
        </div>

        {/* Action Controls & Layout Switcher */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
          {/* View Mode Switcher */}
          <div 
            className="flex items-center p-1 rounded-2xl border backdrop-blur-md"
            style={{ backgroundColor: '#FAF0DC', borderColor: '#D97706' }}
          >
            <button
              type="button"
              onClick={() => { sacredHaptics.lightTap(); setViewLayout('chakra'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewLayout === 'chakra' ? 'shadow-xs scale-102' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: viewLayout === 'chakra' ? '#6B1D1D' : 'transparent',
                color: viewLayout === 'chakra' ? '#FEF3C7' : '#2C1810'
              }}
            >
              <CircleDot className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਚੱਕਰ' : language === 'en' ? 'Chakra Wheel' : 'चक्र दर्शन'}</span>
            </button>
            <button
              type="button"
              onClick={() => { sacredHaptics.lightTap(); setViewLayout('cards'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewLayout === 'cards' ? 'shadow-xs scale-102' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: viewLayout === 'cards' ? '#6B1D1D' : 'transparent',
                color: viewLayout === 'cards' ? '#FEF3C7' : '#2C1810'
              }}
            >
              <Grid className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਸੂਚੀ' : language === 'en' ? 'Cards Grid' : 'ग्रिड सूची'}</span>
            </button>
            <button
              type="button"
              onClick={() => { sacredHaptics.lightTap(); setViewLayout('journey'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewLayout === 'journey' ? 'shadow-xs scale-102' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: viewLayout === 'journey' ? '#6B1D1D' : 'transparent',
                color: viewLayout === 'journey' ? '#FEF3C7' : '#2C1810'
              }}
            >
              <Compass className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਸਾਧਨਾ ਪਥ' : language === 'en' ? 'Path Journey' : 'साधना सोपान'}</span>
            </button>
          </div>

          {/* Auto Spin / Play Button */}
          <button
            type="button"
            onClick={() => {
              sacredHaptics.mediumTap();
              setIsAutoSpinning((prev) => !prev);
            }}
            className="px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            style={{
              backgroundColor: isAutoSpinning ? '#6B1D1D' : '#FFFDF7',
              borderColor: '#D97706',
              color: isAutoSpinning ? '#FEF3C7' : '#6B1D1D'
            }}
            title={isAutoSpinning ? 'Pause Auto Tour' : 'Start Auto Tour'}
          >
            {isAutoSpinning ? <Pause className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline font-serif">
              {isAutoSpinning ? 
                (language === 'pb' ? 'ਯਾਤਰਾ ਰੋਕੋ' : language === 'en' ? 'Pause Tour' : 'भ्रमण रोकें') : 
                (language === 'pb' ? 'ਸਵੈ-ਚਾਲਿਤ ਯਾਤਰਾ' : language === 'en' ? 'Auto Tour' : 'स्वचालित परिक्रमा')}
            </span>
          </button>
        </div>
      </div>

      {/* 4 Pillars Filter Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => { sacredHaptics.lightTap(); setSelectedPillarFilter('all'); }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer backdrop-blur-md ${
            selectedPillarFilter === 'all' ? 'shadow-xs ring-2 ring-amber-400' : 'opacity-75 hover:opacity-100'
          }`}
          style={{
            backgroundColor: selectedPillarFilter === 'all' ? '#6B1D1D' : '#FFFDF7',
            borderColor: '#D97706',
            color: selectedPillarFilter === 'all' ? '#FEF3C7' : '#2C1810'
          }}
        >
          {language === 'pb' ? 'ਸਾਰੇ ੧੬ ਭੂਸ਼ਣ (੧੬/੧੬)' : language === 'en' ? 'All 16 Jewels (16/16)' : 'समग्र 16 भूषण (16/16)'}
        </button>

        {PILLARS_CONFIG.map((pillar) => (
          <button
            key={pillar.id}
            type="button"
            onClick={() => { sacredHaptics.lightTap(); setSelectedPillarFilter(pillar.id); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
              selectedPillarFilter === pillar.id ? 'shadow-xs ring-2' : 'opacity-75 hover:opacity-100'
            }`}
            style={{
              backgroundColor: selectedPillarFilter === pillar.id ? pillar.color : '#FFFDF7',
              borderColor: pillar.color,
              color: selectedPillarFilter === 'active' || selectedPillarFilter === pillar.id ? '#FFFFFF' : '#2C1810'
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedPillarFilter === pillar.id ? '#FFFFFF' : pillar.color }} />
            <span>{t(pillar.title)}</span>
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: THE INTERACTIVE 3D SACRED WHEEL (3D चक्र दर्शन)                      */}
      {/* ========================================================================= */}
      {viewLayout === 'chakra' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left / Center Column: Interactive 3D Circular Chakra Canvas */}
          <div 
            className="lg:col-span-6 xl:col-span-6 rounded-3xl border p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md"
            style={{ 
              backgroundColor: theme.cardBg, 
              borderColor: theme.borderOrnament,
              boxShadow: theme.cardShadow,
              perspective: '1000px'
            }}
          >
            {/* Background Sacred Mandala Glow */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none animate-pulse"
              style={{
                background: `radial-gradient(circle at center, ${currentBhushan.pillarColor} 0%, transparent 70%)`
              }}
            />

            {/* Circular 3D Chakra SVG Container with Touch/Mouse Drag */}
            <div 
              className="w-full max-w-[480px] aspect-square relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseDown={(e) => handleTouchOrMouseDown(e.clientX, e.clientY)}
              onMouseMove={(e) => handleTouchOrMouseMove(e.clientX, e.clientY)}
              onMouseUp={handleTouchOrMouseUp}
              onMouseLeave={handleTouchOrMouseUp}
              onTouchStart={(e) => handleTouchOrMouseDown(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchMove={(e) => handleTouchOrMouseMove(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchEnd={handleTouchOrMouseUp}
            >
              <svg 
                viewBox="0 0 600 600" 
                className="w-full h-full drop-shadow-xl transition-transform duration-100 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
                }}
              >
                <defs>
                  {/* Glowing 3D Filter */}
                  <filter id="glow3D" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="60%" stopColor="#FEF3C7" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </radialGradient>
                  <radialGradient id="centerAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Spinning Wheel Group */}
                <g 
                  style={{
                    transformOrigin: `${center}px ${center}px`,
                    transform: `rotate(${wheelRotation}deg)`,
                    transition: isDraggingRef.current ? 'none' : 'transform 0.3s ease-out'
                  }}
                >
                  {/* Outer Decorative Orbit Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r={outerRadius + 10}
                    fill="none"
                    stroke={theme.borderOrnament}
                    strokeWidth="2"
                    strokeDasharray="4 6"
                    opacity="0.6"
                  />

                  {/* Outer Golden Border Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r={outerRadius}
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="3"
                    opacity="0.4"
                  />

                  {/* The 16 3D Petals / Segments */}
                  {ENRICHED_16_BHUSHAN.map((bhushan, index) => {
                    const isSelected = selectedIndex === index;
                    const isFilteredIn = selectedPillarFilter === 'all' || bhushan.pillarId === selectedPillarFilter;
                    const pathD = createSegmentPath(index);
                    const { x, y } = getSegmentCenterCoords(index);

                    return (
                      <g 
                        key={bhushan.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectSegment(index);
                        }}
                        className="cursor-pointer transition-transform duration-300 group"
                        style={{ opacity: isFilteredIn ? 1 : 0.25 }}
                      >
                        {/* Segment Arc Path with 3D Pop-out Elevation */}
                        <path
                          d={pathD}
                          fill={isSelected ? '#FEF3C7' : `${bhushan.pillarColor}28`}
                          stroke={isSelected ? '#FFFFFF' : bhushan.pillarColor}
                          strokeWidth={isSelected ? 4 : 1.5}
                          filter={isSelected ? 'url(#glow3D)' : undefined}
                          className="transition-all duration-300 hover:brightness-110"
                          style={{
                            transform: isSelected ? 'translateZ(20px) scale(1.03)' : 'translateZ(0px) scale(1)',
                            transformOrigin: `${center}px ${center}px`
                          }}
                        />

                        {/* Segment Label / Number (Counter-rotated so numbers stay perfectly upright) */}
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={isSelected ? '#6B1D1D' : theme.textPrimary}
                          fontSize={isSelected ? '16' : '13'}
                          fontWeight={isSelected ? '900' : '700'}
                          fontFamily="serif"
                          className="pointer-events-none select-none drop-shadow-sm"
                          transform={`rotate(${-wheelRotation} ${x} ${y})`}
                        >
                          {bhushan.order}
                        </text>

                        {/* Highlight Ring around active segment */}
                        {isSelected && (
                          <circle
                            cx={x}
                            cy={y}
                            r="19"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="2.5"
                            strokeDasharray="3 3"
                            className="animate-spin-slow pointer-events-none"
                            transform={`rotate(${-wheelRotation} ${x} ${y})`}
                          />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Inner Quadrants Ring */}
                <circle
                  cx={center}
                  cy={center}
                  r={innerRadius}
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  opacity="0.5"
                />

                {/* Center 3D Hub: Luminous Golden-White Lotus Medallion Displaying Satyanaam */}
                <circle cx={center} cy={center} r="120" fill="url(#centerAura)" className="animate-pulse" />
                <circle cx={center} cy={center} r="100" fill="#FFFDF7" stroke="#F59E0B" strokeWidth="4" filter="url(#glow3D)" />
                <circle cx={center} cy={center} r="90" fill="url(#hubGradient)" opacity="0.4" />

                {/* Center Content: Upright Satyanaam Medallion */}
                <g className="select-none pointer-events-none">
                  <text
                    x={center}
                    y={center - 32}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="24"
                  >
                    🪷
                  </text>

                  <text
                    x={center}
                    y={center - 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#6B1D1D"
                    fontSize="16"
                    fontWeight="900"
                    fontFamily="serif"
                  >
                    {language === 'pb' ? '॥ ਸਤਯਨਾਮ ॥' : language === 'en' ? '|| Satyanaam ||' : '॥ सत्यनाम ॥'}
                  </text>

                  <text
                    x={center}
                    y={center + 22}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#92400E"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="serif"
                  >
                    {t(currentBhushan.name)}
                  </text>

                  <text
                    x={center}
                    y={center + 38}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#D97706"
                    fontSize="9"
                    fontWeight="800"
                  >
                    {language === 'pb' ? `ਭੂਸ਼ਣ ${currentBhushan.order}/੧੬` : 
                     language === 'en' ? `Jewel ${currentBhushan.order}/16` : 
                     `भूषण ${currentBhushan.order}/16`}
                  </text>
                </g>
              </svg>
            </div>

            {/* Quick Segment Slider / Traverser */}
            <div className="w-full mt-4 pt-4 border-t flex items-center justify-between gap-2" style={{ borderColor: theme.borderOrnament }}>
              <button
                type="button"
                onClick={handlePrev}
                style={{
                  backgroundColor: '#FEF3C7',
                  borderColor: '#D97706',
                  color: '#6B1D1D'
                }}
                className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-bold" style={{ color: '#6B1D1D' }}>
                  {currentBhushan.order}. {t(currentBhushan.name)}
                </span>
                <div className="text-[10px]" style={{ color: theme.textSecondary }}>
                  {t(currentBhushan.pillarTitle)}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                style={{
                  backgroundColor: '#FEF3C7',
                  borderColor: '#D97706',
                  color: '#6B1D1D'
                }}
                className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ' : language === 'en' ? 'Next' : 'अगला'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Explanation & Relationship Panel */}
          <div 
            className="lg:col-span-6 xl:col-span-6 rounded-3xl border p-5 sm:p-7 shadow-sm space-y-5 relative backdrop-blur-md"
            style={{ 
              backgroundColor: theme.cardBg, 
              borderColor: theme.borderOrnament,
              boxShadow: theme.cardShadow 
            }}
          >
            {/* Header Badge & Action Icons */}
            <div className="flex items-start justify-between gap-3 border-b pb-4" style={{ borderColor: theme.borderOrnament }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span 
                    className="px-2.5 py-0.5 rounded-lg text-xs font-bold text-white shadow-xs"
                    style={{ backgroundColor: currentBhushan.pillarColor }}
                  >
                    #{currentBhushan.order} • {t(currentBhushan.pillarTitle)}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight" style={{ color: theme.sacredMaroon }}>
                  {t(currentBhushan.name)}
                </h2>
              </div>

              {/* Action Buttons: Audio, Diary, Share, Deep Search */}
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {/* View Related Sakhis Button */}
                {onOpenDeepSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      onOpenDeepSearch(t(currentBhushan.name).split(' ')[0]);
                    }}
                    className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xs"
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon
                    }}
                    title="View Related Sakhis in Deep Search"
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">{language === 'pb' ? 'ਸੰਬੰਧਿਤ ਸਾਖੀਆਂ' : language === 'en' ? 'Related Sakhis' : 'संबंधित साखियां'}</span>
                  </button>
                )}

                {/* Audio Recitation Button */}
                <button
                  type="button"
                  onClick={handleToggleSpeech}
                  className="p-2 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: isSpeaking ? theme.buttonPrimaryBg : theme.stepActiveBg,
                    borderColor: isSpeaking ? theme.buttonPrimaryBg : theme.cardBorder,
                    color: isSpeaking ? theme.buttonPrimaryText : theme.sacredMaroon
                  }}
                  title={isSpeaking ? 'Stop Speech' : 'Listen with Web Speech API'}
                >
                  {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* Save to Siddhant Notes Button */}
                <button
                  type="button"
                  onClick={handleSaveToDiaryLocal}
                  className="p-2 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: theme.stepActiveBg,
                    borderColor: theme.cardBorder,
                    color: theme.sacredMaroon
                  }}
                  title="Save to Siddhant Notes & Spiritual Diary"
                >
                  <Bookmark className="w-5 h-5" />
                </button>

                {/* Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: theme.stepActiveBg,
                    borderColor: theme.cardBorder,
                    color: theme.sacredMaroon
                  }}
                  title="Share Sacred Teaching"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 1. Definition (परिभाषा) */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: currentBhushan.pillarColor }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'pb' ? 'ਆਤਮਿਕ ਅਰਥ ਤੇ ਪਰਿਭਾਸ਼ਾ' : language === 'en' ? 'Spiritual Definition' : 'आत्मिक अर्थ व परिभाषा'}</span>
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: theme.textPrimary }}>
                {t(currentBhushan.definition)}
              </p>
            </div>

            {/* 2. Relationship in Gyan-Chakra (ज्ञान चक्र में अंतर्संबंध) */}
            <div 
              className="p-4 rounded-2xl border space-y-1.5"
              style={{
                backgroundColor: `${currentBhushan.pillarColor}0A`,
                borderColor: `${currentBhushan.pillarColor}33`
              }}
            >
              <div className="text-xs font-bold flex items-center gap-1.5" style={{ color: currentBhushan.pillarColor }}>
                <Compass className="w-4 h-4" />
                <span>
                  {language === 'pb' ? 'ਗਿਆਨ-ਚੱਕਰ ਵਿੱਚ ਅੰਤਰ-ਸੰਬੰਧ (Spiritual Interconnection)' : 
                   language === 'en' ? 'Position & Interconnection in the Chakra' : 
                   'ज्ञान-चक्र में आध्यात्मिक अंतर्संबंध (Spiritual Interconnection)'}
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                {t(currentBhushan.relationship)}
              </p>
            </div>

            {/* 3. Authentic Kabir Sakhi (पावन कबीर साखी) */}
            <div 
              className="p-4 sm:p-5 rounded-2xl border space-y-2 relative overflow-hidden"
              style={{
                backgroundColor: theme.stepActiveBg,
                borderColor: theme.cardBorder
              }}
            >
              <div className="flex items-center justify-between text-xs font-bold" style={{ color: theme.sacredMaroon }}>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>{language === 'pb' ? 'ਪ੍ਰਮਾਣਿਕ ਸਾਖੀ' : language === 'en' ? 'Authentic Kabir Sakhi' : 'पावन कबीर साखी'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    speechReciter.speak(currentBhushan.sakhi.text, language);
                    sacredHaptics.lightTap();
                  }}
                  className="text-[11px] flex items-center gap-1 hover:underline cursor-pointer text-amber-700"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਸਾਖੀ ਸੁਣੋ' : language === 'en' ? 'Play Verse' : 'साखी श्रवण'}</span>
                </button>
              </div>

              <div className="font-serif font-bold text-base sm:text-lg text-amber-950 italic whitespace-pre-line">
                "{formatCoupletString(currentBhushan.sakhi.text)}"
              </div>

              <div className="text-xs sm:text-sm text-neutral-700 pt-1 border-t border-amber-500/15">
                <span className="font-bold text-amber-900">{language === 'pb' ? 'ਭਾਵਾਰਥ: ' : language === 'en' ? 'Meaning: ' : 'भावार्थ: '}</span>
                {currentBhushan.sakhi.meaning}
              </div>
            </div>

            {/* 4. Leela Katha (प्रेरक ऐतिहासिक प्रसंग) */}
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>{language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਜੀਵਨ ਲੀਲਾ ਪ੍ਰਸੰਗ' : language === 'en' ? 'Historical Leela Narrative' : 'सतगुरु कबीर जीवन लीला प्रसंग'}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-justify opacity-90" style={{ color: theme.textSecondary }}>
                {t(currentBhushan.katha)}
              </p>
            </div>

            {/* 5. Daily Sadhana Practice (दैनिक साधना संकल्प) */}
            <div 
              className="p-3.5 rounded-2xl border flex items-start gap-3"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: '#10B981',
                boxShadow: '0 2px 10px -2px rgba(16, 185, 129, 0.1)'
              }}
            >
              <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-700 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                  {language === 'pb' ? 'ਦੈਨਿਕ ਸਾਧਨਾ ਸੰਕਲਪ' : language === 'en' ? 'Daily Sadhana Practice Resolution' : 'दैनिक साधना संकल्प अभ्यास'}
                </span>
                <p className="text-xs sm:text-sm font-serif leading-relaxed" style={{ color: theme.textPrimary }}>
                  {t(currentBhushan.dailyPractice)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: CARDS GRID VIEW */}
      {/* ========================================================================= */}
      {viewLayout === 'cards' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBhushans.map((bhushan, index) => {
            const isSelected = selectedIndex === bhushan.order - 1;

            return (
              <motion.div
                key={bhushan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
                onClick={() => {
                  handleSelectSegment(bhushan.order - 1);
                  setViewLayout('chakra');
                }}
                className="p-4 sm:p-5 rounded-3xl border-2 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-3 relative overflow-hidden group"
                style={{
                  backgroundColor: isSelected ? '#FEF3C7' : theme.cardBg,
                  borderColor: isSelected ? '#D97706' : theme.cardBorder,
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(217, 119, 6, 0.2)' : theme.cardShadow
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-2.5 py-0.5 rounded-lg text-xs font-bold text-white shadow-xs"
                      style={{ backgroundColor: bhushan.pillarColor }}
                    >
                      #{bhushan.order}
                    </span>
                    <span className="text-[11px] font-bold opacity-75" style={{ color: theme.textSecondary }}>
                      {t(bhushan.pillarTitle).split(' ')[3] || ''}
                    </span>
                  </div>

                  <h3 className="text-lg font-black font-serif group-hover:text-amber-700 transition-colors" style={{ color: theme.sacredMaroon }}>
                    {t(bhushan.name)}
                  </h3>

                  <p className="text-xs line-clamp-3 leading-relaxed opacity-90" style={{ color: theme.textPrimary }}>
                    {t(bhushan.definition)}
                  </p>
                </div>

                <div className="pt-2 border-t flex items-center justify-between text-xs font-bold" style={{ borderColor: theme.borderOrnament, color: bhushan.pillarColor }}>
                  <span>{language === 'pb' ? 'ਚੱਕਰ ਵਿੱਚ ਵੇਖੋ' : language === 'en' ? 'View in Wheel' : 'चक्र में देखें'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: PATH JOURNEY VIEW (साधना सोपान)                                     */}
      {/* ========================================================================= */}
      {viewLayout === 'journey' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'pb' ? 'ਆਤਮਾ ਦਾ ਸਤਲੋਕ ਆਰੋਹਣ ਪਥ (੧੬ ਸੋपान)' : 
               language === 'en' ? 'The 16-Step Ascent Path to Satlok' : 
               'आत्मा का सत्यलोक आरोहण पथ (16 साधना सोपान)'}
            </h2>
            <p className="text-xs sm:text-sm" style={{ color: theme.textSecondary }}>
              {language === 'pb' ? 'ਸਤਗੁਰੂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੁਆਰਾ ਦਰਸਾਏ ਗਏ ੧੬ ਅਧਿਆਤਮਕ ਕਦਮਾਂ ਦੀ ਲੜੀਵਾਰ ਯਾਤਰਾ' : 
               language === 'en' ? 'Sequential spiritual journey through the 16 divine stages taught by Satguru Kabir' : 
               'सतगुरु कबीर साहेब द्वारा दर्शाये गए 16 आध्यात्मिक सोपानों की क्रमबद्ध मार्गदर्शिका'}
            </p>
          </div>

          <div className="relative border-l-2 ml-4 sm:ml-8 pl-4 sm:pl-8 space-y-8" style={{ borderColor: '#D97706' }}>
            {ENRICHED_16_BHUSHAN.map((bhushan, index) => (
              <motion.div
                key={bhushan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="relative space-y-2"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute -left-[25px] sm:-left-[41px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-black shadow-md text-white"
                  style={{ backgroundColor: bhushan.pillarColor, borderColor: '#FFFDF7' }}
                >
                  {bhushan.order}
                </div>

                <div 
                  className="p-5 rounded-3xl border-2 shadow-sm space-y-3"
                  style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-lg text-xs font-bold text-white shadow-xs"
                      style={{ backgroundColor: bhushan.pillarColor }}
                    >
                      {t(bhushan.pillarTitle)}
                    </span>
                    <span className="text-xs font-serif opacity-75" style={{ color: theme.textSecondary }}>
                      {language === 'pb' ? `ਸੋपान ${bhushan.order} / ੧੬` : language === 'en' ? `Step ${bhushan.order} of 16` : `सोपान ${bhushan.order} / 16`}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                    {t(bhushan.name)}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed" style={{ color: theme.textPrimary }}>
                    {t(bhushan.definition)}
                  </p>

                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm font-serif italic text-amber-950">
                    "{formatCoupletString(bhushan.sakhi.text)}"
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        handleSelectSegment(bhushan.order - 1);
                        setViewLayout('chakra');
                      }}
                      style={{
                        backgroundColor: '#FEF3C7',
                        borderColor: '#D97706',
                        color: '#6B1D1D'
                      }}
                      className="px-4 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                    >
                      <span>{language === 'pb' ? 'ਚੱਕਰ ਵਿੱਚ ਵੇਖੋ' : language === 'en' ? 'Open in Wheel' : 'चक्र दर्शन में देखें'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
