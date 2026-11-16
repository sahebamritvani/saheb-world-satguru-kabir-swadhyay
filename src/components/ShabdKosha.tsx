import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookMarked, 
  Search, 
  Sparkles, 
  ExternalLink, 
  Copy, 
  Check, 
  Sun, 
  Feather, 
  Layers, 
  Filter,
  ArrowRight,
  ArrowLeft,
  X,
  Scroll,
  Volume2,
  Quote,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { 
  fetchVerseContextForTerm, 
  fetchContextFromKaalAndJeevatAngs, 
  VerseContextResult 
} from '../services/glossaryContextResolver';
import { speechReciter } from '../services/audioDhun';

interface ShabdKoshaProps {
  language: Language;
  onClose?: () => void;
  onOpenSwadhyay?: (query: string) => void;
  onOpenBlessing?: (title?: string, msg?: string) => void;
}

interface KoshaEntry {
  id: string;
  term: {
    pb: string;
    hi: string;
    en: string;
  };
  category: 'yoga-inner' | 'metaphor' | 'satguru' | 'mind-maya' | 'conduct' | 'chetavani' | 'updesh' | 'bhakti-prema' | 'chitt-shuddhi';
  literalMeaning: {
    pb: string;
    hi: string;
    en: string;
  };
  mysticalMeaning: {
    pb: string;
    hi: string;
    en: string;
  };
  exampleSakhi: {
    text: string;
    source: string;
  };
  associatedAng?: 'kaal-ko-ang' | 'jeevat-mritak-ko-ang' | 'swaarath-ko-ang' | 'parmaarth-ko-ang' | 'man-ko-ang' | 'maya-ko-ang' | 'moh-ko-ang' | 'kaam-ko-ang' | 'krodh-ko-ang' | 'lobh-ko-ang';
}

const GLOSSARY_DB: KoshaEntry[] = [
  {
    id: 'kaal-aheri',
    term: {
      pb: 'ਕਾਲ ਅਹੇਰੀ',
      hi: 'काल अहेरी',
      en: 'Kaal Aheri (Time the Hunter)'
    },
    category: 'mind-maya',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਕਾਲ ਰੂਪੀ ਸ਼ਿਕਾਰੀ ਜੋ ਜੀਵ ਦੀ ਘਾਤ ਵਿੱਚ ਬੈਠਾ ਹੈ।',
      hi: 'समय अथवा मृत्यु रूपी शिकारी जो निरंतर घात लगाए बैठा है।',
      en: 'Time as the relentless hunter waiting in ambush for the soul.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਬੁਢਾਪਾ ਕੁੱਤੇ ਦੀ ਨਿਆਈਂ ਅਤੇ ਜਵਾਨੀ ਖ਼ਰਗੋਸ਼ ਦੀ ਨਿਆਈਂ ਹੈ। ਕਾਲ ਰੂਪੀ ਸ਼ਿਕਾਰੀ ਨੇ ਇਸ ਜੀਵ ਰੂਪੀ ਝੌਂਪੜੀ ਨੂੰ ਦੋਹਾਂ ਵੈਰੀਆਂ ਵਿਚਕਾਰ ਘੇਰ ਰੱਖਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਬਿਨਾਂ ਇਸ ਤੋਂ ਕੋਈ ਨਹੀਂ ਬਚ ਸਕਦਾ।',
      hi: 'कबीर साहेब के अनुसार वृद्धावस्था कुत्ते की भांति और युवावस्था खरगोश की भांति है। काल रूपी शिकारी ने यौवन पर बुढ़ापे को शिकार हेतु छोड़ा है। दोनों शत्रुओं के बीच मनुष्य की झोंपड़ी है, अतः सतगुरु के सत्यनाम बिना रक्षा असंभव है।',
      en: 'In Kabir Saheb\'s mystical warning, old age is like a hound and youth like a rabbit, with Kal the hunter pursuing the fragile body. Only refuge in the Satguru and Satnaam bestows deliverance.'
    },
    exampleSakhi: {
      text: 'जरा कुत्ता जोबन ससा, काल अहेरी नित्त।\nदो बैरी बिच झोंपड़ा, कुशल कहां सो मित्त।।',
      source: 'साखी संग्रह · काल को अंग - २'
    }
  },
  {
    id: 'jeevat-mritak',
    term: {
      pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ',
      hi: 'जीवत मृतक',
      en: 'Jeevat Mritak (Living Dead / Egoless State)'
    },
    category: 'conduct',
    associatedAng: 'jeevat-mritak-ko-ang',
    literalMeaning: {
      pb: 'ਜਿਉਂਦੇ ਜੀਅ ਮਰਿਆ ਹੋਇਆ (ਅਹੰਕਾਰ ਰਹਿਤ)।',
      hi: 'जीते-जी मृतक की भांति वासना और अहंकार से मुक्त।',
      en: 'Dying while alive; complete ego-death and detachment.'
    },
    mysticalMeaning: {
      pb: 'ਸਰੀਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਹੀ ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਸੰਸਾਰਿਕ ਕਾਮਨਾਵਾਂ, ਵਿਸ਼ੇ-ਵਾਸਨਾਵਾਂ ਅਤੇ ਅਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਦੇਣਾ। ਜੋ ਮਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਮਾਰ ਲੈਂਦਾ ਹੈ, ਉਹ ਜਨਮ-ਮਰਨ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਅਜਰ-ਅਮਰ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'जीते-जी ही अपनी समस्त इच्छाओं, वासनाओं और अहंकार को मार देना। शारीरिक मृत्यु से पहले ही जो अहंता से मर लेता है, वह परमतत्व में लीन होकर अजर-अमर हो जाता है।',
      en: 'The transcendent station of living death: extinguishing selfish desires, ego, and worldly pride while in the body, thereby attaining immortality before physical death.'
    },
    exampleSakhi: {
      text: 'जीवन में मरना भला, जो मरि जानै कोय।\nमरना पहिले जो मरै, अजर अमर सो होय।।',
      source: 'साखी संग्रह · जीवत मृतक को अंग - १'
    }
  },
  {
    id: 'jara',
    term: {
      pb: 'ਜਰਾ (ਬੁਢਾਪਾ)',
      hi: 'जरा (वृद्धावस्था / बुढ़ापा)',
      en: 'Jara (Decay & Old Age)'
    },
    category: 'mind-maya',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਸਰੀਰ ਦਾ ਬਿਰਧ ਹੋਣਾ, ਜੀਰਣ-ਸ਼ੀਰਣ ਅਵਸਥਾ।',
      hi: 'शरीर का शिथिल व वृद्ध होना, बुढ़ापा।',
      en: 'Physical decay, decrepitude, senility.'
    },
    mysticalMeaning: {
      pb: 'ਕਾਲ ਦਾ ਪ੍ਰਥਮ ਦੂਤ ਜੋ ਦੇਹ ਦੇ ਬਲ, ਤੇਜ ਅਤੇ ਇੰਦਰੀਆਂ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਹਰ ਲੈਂਦਾ ਹੈ। ਜੀਵ ਜਦ ਤੱਕ ਬੁਢਾਪੇ ਦੀ ਲਾਚਾਰੀ ਵਿੱਚ ਨਹੀਂ ਘਿਰਦਾ, ਤਦ ਤੱਕ ਸਤਿਗੁਰੂ ਦੇ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'काल का वह अग्रदूत जो शरीर की शक्ति, रूप और इंद्रियों को क्षीण कर देता है। कबीर साहेब चेतावनी देते हैं कि मृत्यु और जरा के दोहरे संकट से पहले ही सत्यनाम का अवलंब ले लें।',
      en: 'The herald of Kal that gradually robs the physical vessel of vitality; urging the seeker to awaken to Truth before bodily decrepitude strikes.'
    },
    exampleSakhi: {
      text: 'मैं अकेल वह दो जना, सेरी नाहीं कोय।\nजो जम आगे ऊबरो, तो जरा बैरी होय।।',
      source: 'साखी संग्रह · काल को अंग - ५'
    }
  },
  {
    id: 'paat-kupaliyan',
    term: {
      pb: 'ਪਾਤ ਤੇ ਕਰੂੰਬਲਾਂ',
      hi: 'पात व कूपलियां',
      en: 'Paat & Kupaliyan (Falling Leaves & Young Shoots)'
    },
    category: 'metaphor',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਝੜਦੇ ਸੁੱਕੇ ਪੱਤੇ ਅਤੇ ਨਵੀਆਂ ਨਿਕਲੀਆਂ ਕੋਮਲ ਕਰੂੰਬਲਾਂ।',
      hi: 'झड़ते हुए सूखे पत्ते और पेड़ की नई निकली कोमल कोंपलें।',
      en: 'Withered falling leaves and tender new shoots.'
    },
    mysticalMeaning: {
      pb: 'ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਦਾ ਚਰਮ ਪ੍ਰਤੀਕ। ਪੱਤਝੜ ਵਿੱਚ ਝੜ ਰਹੇ ਪੱਤੇ ਨਵੀਂ ਪੀੜ੍ਹੀ ਦੀਆਂ ਹੱਸਦੀਆਂ ਕਰੂੰਬਲਾਂ ਨੂੰ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਅਸੀਂ ਆਪਣਾ ਸਮਾਂ ਪੂਰਾ ਕਰ ਚੱਲੇ ਹਾਂ, ਧੀਰਜ ਰੱਖੋ, ਕੱਲ੍ਹ ਨੂੰ ਤੁਹਾਡਾ ਵੀ ਇਹੀ ਸਮਾਂ ਆਉਣਾ ਹੈ।',
      hi: 'संसार की क्षणभंगुरता व काल-प्रवाह का मार्मिक रूपक। पतझर के मौसम में गिरते सूखे पत्ते हंसती नई कोंपलों को चेतावनी देते हैं कि हमारा समय बीत गया, थोड़ा धैर्य रखो, कल तुम्हें भी इसी मार्ग पर चलना पड़ेगा।',
      en: 'The poignant allegory of mortality: withered leaves falling from branches admonish the mocking green sprouts that they too must soon depart when their season concludes.'
    },
    exampleSakhi: {
      text: 'पात झरन्ता देखि के, हंसतीं, कूपलियां।\nहम चाले तुम चालियो, धीरी बापलियां।।',
      source: 'साखी संग्रह · काल को अंग - ३'
    }
  },
  {
    id: 'pinjar-saans',
    term: {
      pb: 'ਪਿੰਜਰ ਸਾਸ',
      hi: 'पिंजर सांस',
      en: 'Pinjar Saans (Breath in the Body Cage)'
    },
    category: 'yoga-inner',
    associatedAng: 'jeevat-mritak-ko-ang',
    literalMeaning: {
      pb: 'ਸਰੀਰ ਰੂਪੀ ਹੱਡੀਆਂ ਦੇ ਪਿੰਜਰੇ ਵਿੱਚ ਪ੍ਰਾਣਾਂ ਦਾ ਚੱਲਣਾ।',
      hi: 'देह रूपी अस्थि-पिंजर में चलता हुआ श्वास।',
      en: 'The fragile breath moving within the skeletal body cage.'
    },
    mysticalMeaning: {
      pb: 'ਵਿਵੇਕੀ ਸੰਤ ਮਨ ਨੂੰ ਮਰਿਆ ਦੇਖ ਕੇ ਵੀ ਕਦੀ ਅਵੇਸਲੇ ਨਹੀਂ ਹੁੰਦੇ। ਜਦੋਂ ਤੱਕ ਦੇਹ ਵਿੱਚ ਆਖਰੀ ਸਾਹ ਚੱਲਦਾ ਹੈ, ਤਦ ਤੱਕ ਮਨ ਦੇ ਧੋਖੇ ਤੋਂ ਸਾਵਧਾਨ ਰਹਿਣਾ ਲਾਜ਼ਮੀ ਹੈ ਕਿਉਂਕਿ ਮੌਕਾ ਪਾਉਂਦਿਆਂ ਹੀ ਮਨ ਮੁੜ ਚੰਚਲ ਹੋ ਸਕਦਾ ਹੈ।',
      hi: 'विवेकी संत मन को मृतक देखकर भी तब तक सतर्क रहते हैं जब तक शरीर में श्वास विद्यमान है। असावधान होने पर मन पुनः विषय-वासनाओं में भटक सकता है।',
      en: 'The awakened sage never lets down spiritual vigilance against the mind\'s cunning deceptions as long as breath pulses within the mortal frame.'
    },
    exampleSakhi: {
      text: 'मन को मिरतक देखि के, मति माने विश्वास।\nसाधु तहां लौं भय करे, जौ लौ पिंजर सांस।।',
      source: 'साखी संग्रह · जीवत मृतक को अंग - २'
    }
  },
  {
    id: 'samrath-satguru',
    term: {
      pb: 'ਸਮਰਥ ਸਤਿਗੁਰੂ',
      hi: 'समरथ सद्गुरु',
      en: 'Samrath Satguru (All-Powerful Master)'
    },
    category: 'satguru',
    associatedAng: 'jeevat-mritak-ko-ang',
    literalMeaning: {
      pb: 'ਸਰਬ-ਸ਼ਕਤੀਮਾਨ, ਰੱਖਿਅਕ ਸੱਚੇ ਗੁਰੂ।',
      hi: 'सर्व-समर्थ, रक्षक व उद्धारक सद्गुरु।',
      en: 'The all-powerful, compassionate True Master.'
    },
    mysticalMeaning: {
      pb: 'ਜੋ ਜੀਵ ਸੰਸਾਰਿਕ ਤ੍ਰਿਸ਼ਨਾਵਾਂ ਦਾ ਤਿਆਗ ਕਰਕੇ ਜਿਉਂਦੇ-ਜੀਅ ਮਰਿਆ ਹੋ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਹੁੰਦਾ ਹੈ, ਉਸਦਾ ਰੱਖਿਅਕ ਆਪ ਸਮਰਥ ਸਤਿਗੁਰੂ ਬਣਦਾ ਹੈ ਅਤੇ ਉਸਨੂੰ ਕੋਈ ਦੁੱਖ ਨਹੀਂ ਪਹੁੰਚ ਸਕਦਾ।',
      hi: 'संसार की वासनाओं का त्याग कर जो शिष्य जीवित-मृतक की निष्कामता में सद्गुरु के समर्पित हो जाता है, समर्थ सद्गुरु स्वयं उसकी रक्षा कर काल के भय से मुक्त करते हैं।',
      en: 'The Supreme Spiritual Master who personally guards and liberates the disciple who has relinquished mundane cravings and ego.'
    },
    exampleSakhi: {
      text: 'जीवत मिरतक होय रहै, तजै खलक की आस।\nरच्छक समरथ सद्गुरु, मति दुख पावै दास।।',
      source: 'साखी संग्रह · जीवत मृतक को अंग - ४'
    }
  },
  {
    id: 'maali-kaliyan',
    term: {
      pb: 'ਮਾਲੀ ਤੇ ਕਲੀਆਂ',
      hi: 'माली व कलियां',
      en: 'Maali & Kaliyan (The Gardener Kal & Buds)'
    },
    category: 'metaphor',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਬਾਗ ਦਾ ਮਾਲੀ ਅਤੇ ਪੌਦਿਆਂ ਦੀਆਂ ਨਵੀਆਂ ਕਲੀਆਂ।',
      hi: 'बगीचे का माली और पौधों की नन्हीं कलियां।',
      en: 'The approaching gardener and young flower buds.'
    },
    mysticalMeaning: {
      pb: 'ਕਾਲ ਰੂਪੀ ਮਾਲੀ ਨੂੰ ਆਉਂਦਾ ਵੇਖ ਕੇ ਨਵੀਆਂ ਕਲੀਆਂ ਪੁਕਾਰਦੀਆਂ ਹਨ ਕਿ ਖਿੜੇ ਹੋਏ ਫੁੱਲਾਂ (ਬਜ਼ੁਰਗਾਂ) ਨੂੰ ਤਾਂ ਮਾਲੀ ਨੇ ਚੁਣ ਲਿਆ ਹੈ, ਭਲਕੇ ਸਾਡੀ ਵੀ ਵਾਰੀ ਆਵੇਗੀ। ਇਹ ਜੀਵਨ ਦੀ ਨਿਸ਼ਚਿਤ ਮੌਤ ਦਾ ਡੂੰਘਾ ਸੰਦੇਸ਼ ਹੈ।',
      hi: 'काल-रूपी माली को आता देख कलियां चेतती हैं कि जो फूल खिल चुके थे उन्हें माली चुन चुका, कल हमारी बारी है। संसार में सभी का समय निश्चित है, अतः वर्तमान में ही प्रभु-सुमिरन करें।',
      en: 'The impending reality of mortality: seeing the gardener Kal harvest mature blooms, the young buds realize that tomorrow shall inevitably be their turn.'
    },
    exampleSakhi: {
      text: 'माली आवत देखि के, कलियां करें पुकार।\nफूली फूली चुनि लई, काल हमारी बार।।',
      source: 'साखी संग्रह · काल को अंग - ३७'
    }
  },
  {
    id: 'kaachi-kaaya',
    term: {
      pb: 'ਕਾਚੀ ਕਾਇਆ',
      hi: 'काची काया',
      en: 'Kaachi Kaaya (Fragile Clay Vessel)'
    },
    category: 'chetavani',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਕੱਚੀ ਮਿੱਟੀ ਦੀ ਬਣੀ ਨਾਸ਼ਵਾਨ ਦੇਹ।',
      hi: 'कच्ची मिट्टी का अत्यंत क्षणभंगुर व नाशवान शरीर।',
      en: 'The unbaked, fragile vessel of mortal flesh.'
    },
    mysticalMeaning: {
      pb: 'ਮਨੁੱਖ ਦਾ ਸਰੀਰ ਕੱਚਾ ਹੈ ਅਤੇ ਮਨ ਚੰਚਲ ਹੈ, ਪਰ ਉਹ ਸਦਾ ਰਹਿਣ ਵਾਲੇ ਪੱਕੇ ਕੰਮਾਂ ਦੀਆਂ ਯੋਜਨਾਵਾਂ ਬਣਾਉਂਦਾ ਹੈ। ਜਿਵੇਂ-ਜਿਵੇਂ ਮਨੁੱਖ ਬੇਪਰਵਾਹ ਹੋ ਕੇ ਘੁੰਮਦਾ ਹੈ, ਕਾਲ ਉਸਦੀ ਅਗਿਆਨਤਾ \'ਤੇ ਹੱਸਦਾ ਹੈ।',
      hi: 'नाशवान कच्ची देह और चंचल मन के बावजूद मनुष्य संसार में अमरता के भ्रम में अहंकार करता है, जिस पर काल हंसता है। सद्गुरु इस भ्रम को तोड़कर शाश्वत सत्य से जोड़ते हैं।',
      en: 'The illusion of permanence: mortals harbor endless worldly attachments within a brittle clay body while Kal smiles at their heedlessness.'
    },
    exampleSakhi: {
      text: 'काची काया मन अथिर, थिर थिर करम करन्त।\nज्यौं ज्यौं नर निधड़क फिरै, त्यौं त्यौं काल हसन्त।।',
      source: 'साखी संग्रह · काल को अंग - ४६'
    }
  },
  {
    id: 'badhahee-taruvar',
    term: {
      pb: 'ਬੜ੍ਹਹੀ ਤੇ ਤਰੁਵਰ',
      hi: 'बढ़ही व तरुवर',
      en: 'Badhahee & Taruvar (The Carpenter Kal & Tree)'
    },
    category: 'metaphor',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਕੁਹਾੜੀ ਲੈ ਕੇ ਆਇਆ ਤਰਖਾਣ ਅਤੇ ਰੁੱਖ ਦਾ ਵਿਰਲਾਪ।',
      hi: 'कुल्हाड़ी लिए बढ़ई और वृक्ष का विलाप।',
      en: 'The carpenter arriving with an axe and the weeping tree.'
    },
    mysticalMeaning: {
      pb: 'ਕਾਲ ਰੂਪੀ ਵਢਣਹਾਰ ਨੂੰ ਆਉਂਦਾ ਵੇਖ ਕੇ ਰੁੱਖ ਰੋਂਦਾ ਹੈ ਕਿ ਮੈਨੂੰ ਤਾਂ ਕੱਟਿਆ ਜਾਣਾ ਹੀ ਹੈ, ਪਰ ਮੇਰੇ ਆਸਰੇ ਬੈਠੇ ਪੰਛੀਆਂ (ਪਰਿਵਾਰ) ਦਾ ਕੀ ਹੋਵੇਗਾ? ਇਹ ਸੰਸਾਰੀ ਜੀਵ ਦੇ ਪਰਿਵਾਰਕ ਮੋਹ ਦਾ ਚਿੱਤਰਣ ਹੈ।',
      hi: 'काल रूपी बढ़ई को देखकर शरीर रूपी वृक्ष अपनों के मोह में विलाप करता है। कबीर साहेब मोह-बंधन को त्यागकर सर्व-समर्थ परमात्मा पर पूर्ण विश्वास की सीख देते हैं।',
      en: 'The soul facing death laments for its dependents like the felled tree weeping for nesting birds, highlighting the tragedy of earthly attachment.'
    },
    exampleSakhi: {
      text: 'बढ़ही आवत देखि के, तरुवर रुदन कराय।\nमैं अपंग संसै नहीं, पच्छी बसते आय।।',
      source: 'साखी संग्रह · काल को अंग - ५२'
    }
  },
  {
    id: 'taajee-aswaar',
    term: {
      pb: 'ਤਾਜੀ ਤੇ ਅਸਵਾਰ',
      hi: 'ताजी व असवार',
      en: 'Taajee & Aswaar (Prana Steed & The Soul Rider)'
    },
    category: 'metaphor',
    associatedAng: 'kaal-ko-ang',
    literalMeaning: {
      pb: 'ਤੇਜ਼ ਦੌੜਦਾ ਅਰਬੀ ਘੋੜਾ ਅਤੇ ਉਸਦਾ ਅਸਵਾਰ।',
      hi: 'तीव्र गति का घोड़ा और उसका घुड़सवार।',
      en: 'The galloping steed of life breath and its rider.'
    },
    mysticalMeaning: {
      pb: 'ਪ੍ਰਾਣਾਂ ਦਾ ਘੋੜਾ ਛੁੱਟਦਿਆਂ ਹੀ ਜੀਵ ਰੂਪੀ ਸਵਾਰ ਸਰੀਰ ਵਿੱਚੋਂ ਨਿਕਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਨੌਂ ਦਰਵਾਜ਼ੇ ਖੁੱਲ੍ਹੇ ਰਹਿ ਜਾਂਦੇ ਹਨ। ਇਹ ਦੇਹ ਦੀ ਬੇਵੱਸੀ ਦਾ ਸੰਦੇਸ਼ ਦਿੰਦਾ ਹੈ।',
      hi: 'प्राण रूपी घोड़ा छूटते ही जीवात्मा रूपी सवार देह को त्याग देता है। इंद्रियों के द्वार खुले रह जाते हैं और खाली देह पड़ी रह जाती है।',
      en: 'When the steed of vital breath departs, the soul leaves the citadel while all physical gates remain frozen in place.'
    },
    exampleSakhi: {
      text: 'ताजी छूटा सहर ते, कसबै पड़ी पुकार।\nदरवाजा जड़ाहि रहा, निकस गया असवार।।',
      source: 'साखी संग्रह · काल को अंग - २८'
    }
  },
  {
    id: 'swaarath-saga',
    term: {
      pb: 'ਸਵਾਰਥ ਦਾ ਸਾਕ',
      hi: 'स्वारथ का सगा',
      en: 'Swaarath Ka Saga (Worldly Self-Interest)'
    },
    category: 'updesh',
    associatedAng: 'swaarath-ko-ang',
    literalMeaning: {
      pb: 'ਆਪਣੇ ਮਤਲਬ ਅਤੇ ਨਿੱਜੀ ਲਾਭ ਲਈ ਬਣਿਆ ਸਾਕ-ਸੰਬੰਧੀ।',
      hi: 'स्वार्थ व व्यक्तिगत लाभ के कारण बना मित्र या संबंधी।',
      en: 'Kinship or friendship forged purely out of self-interest.'
    },
    mysticalMeaning: {
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਸਭ ਰਿਸ਼ਤੇ ਸਵਾਰਥ ਦੀ ਨੀਂਹ \'ਤੇ ਟਿਕੇ ਹਨ। ਪਰ ਜੋ ਮਨੁੱਖ ਬਿਨਾਂ ਕਿਸੇ ਸਵਾਰਥ ਦੇ ਸਭ ਦਾ ਆਦਰ-ਸਤਿਕਾਰ ਕਰਦਾ ਹੈ, ਉਹ ਹੀ ਸੱਚਾ ਬਿਬੇਕੀ ਤੇ ਸੁਜਾਨ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਨਿਸ਼ਕਾਮ ਪ੍ਰੇਮ ਦੀ ਪ੍ਰੇਰਣਾ ਦਿੰਦੇ ਹਨ।',
      hi: 'संसार में अधिकांश संबंध स्वार्थ की पूर्ति पर आधारित हैं। कबीर साहेब कहते हैं कि जो बिना किसी स्वार्थ या लाभ की चाह के सभी का यथोचित आदर-सत्कार करता है, वही सच्चा चतुर व सुजान साधक है।',
      en: 'The universal reality of transactional worldly ties: true spiritual wisdom shines in the seeker who honors all beings unconditionally without self-serving motives.'
    },
    exampleSakhi: {
      text: 'स्वारथ का सबको सगा, सारा ही जग जान।\nबिन स्वारथ आदर करै, सो नर चतुर सुजान।।',
      source: 'साखी संग्रह · स्वारथ को अंग - १'
    }
  },
  {
    id: 'nisprehee-nirdhaar',
    term: {
      pb: 'ਨਿਸਪ੍ਰੇਹੀ ਨਿਰਧਾਰ',
      hi: 'निस्प्रेही निरधार',
      en: 'Nisprehee Nirdhaar (The Desireless Seeker)'
    },
    category: 'updesh',
    associatedAng: 'swaarath-ko-ang',
    literalMeaning: {
      pb: 'ਕਾਮਨਾ-ਰਹਿਤ ਅਤੇ ਸੰਸਾਰੀ ਆਸਰੇ ਤੋਂ ਮੁਕਤ ਪਰਮਾਰਥੀ ਜਨ।',
      hi: 'तृष्णा-रहित, निष्कामी और सांसारिक सहारे से मुक्त साधक।',
      en: 'The desireless seeker freed from worldly attachments and earthly props.'
    },
    mysticalMeaning: {
      pb: 'ਜਿੱਥੇ ਮਾਇਆਧਾਰੀ ਲੋਕ ਆਪਸ ਵਿੱਚ ਦਿਖਾਵੇ ਦੀਆਂ ਜੱਫੀਆਂ ਪਾਉਂਦੇ ਹਨ, ਉੱਥੇ ਨਿਸ਼ਕਾਮੀ ਤੇ ਨਿਰਧਾਰ ਭਗਤ ਦਾ ਸੱਚਾ ਗਾਹਕ ਤੇ ਰੱਖਿਅਕ ਦੀਨਾਨਾਥ ਪਰਮਾਤਮਾ ਆਪ ਬਣਦਾ ਹੈ।',
      hi: 'संसार के स्वार्थी धनवान आपस में दिखावटी आलिंगन करते हैं, किंतु जिस निष्काम साधक का कोई सांसारिक आधार नहीं होता, उसका सच्चा रक्षक व कद्रदान स्वयं दीनानाथ परमात्मा होता है।',
      en: 'While opportunists flatter each other with showy affection, the unpretentious, desireless soul anchored only in Truth is personally cherished and sustained by God.'
    },
    exampleSakhi: {
      text: 'माया कू माया मिले, कर कर लम्बे हाथ।\nनिस्प्रेही निरधार को, गाहक दीनानाथ।।',
      source: 'साखी संग्रह · स्वारथ को अंग - ३'
    }
  },
  {
    id: 'bin-swaarath-bhakti',
    term: {
      pb: 'ਬਿਨ ਸਵਾਰਥ ਭਗਤੀ',
      hi: 'बिन स्वारथ भक्ति',
      en: 'Bin Swaarath Bhakti (Unconditioned Devotion)'
    },
    category: 'bhakti-prema',
    associatedAng: 'swaarath-ko-ang',
    literalMeaning: {
      pb: 'ਬਿਨਾਂ ਕਿਸੇ ਫਲ ਦੀ ਇੱਛਾ ਜਾਂ ਲਾਲਚ ਦੇ ਕੀਤੀ ਗਈ ਬੰਦਗੀ।',
      hi: 'बिना किसी सांसारिक फल की कामना के निष्काम भक्ति।',
      en: 'Devotional surrender offered without commercial bargaining or selfish desire.'
    },
    mysticalMeaning: {
      pb: 'ਸੰਸਾਰੀ ਜੀਵ ਆਪਣੇ ਨਿੱਜੀ ਸਵਾਰਥ ਲਈ ਸੇਵਾ ਕਰਦੇ ਹਨ, ਪਰ ਜੋ ਸਾਧਕ ਬਿਨਾਂ ਸਵਾਰਥ ਦੇ ਪ੍ਰਭੂ ਦੇ ਸੱਚੇ ਪਿਆਰ ਵਿੱਚ ਭਗਤੀ ਕਰਦਾ ਹੈ, ਉਹੀ ਕਰਤਾਰ ਨੂੰ ਸਭ ਤੋਂ ਵੱਧ ਭਾਉਂਦਾ ਹੈ।',
      hi: 'संसार में सभी सेवाएं स्वार्थ के अधीन होती हैं। केवल वही भक्ति परमात्मा को प्रसन्न करती है जो बिना किसी मांग, सौदेबाजी या स्वार्थ के निष्काम भाव से की जाती है।',
      en: 'Pure devotion untainted by transactional motives: service in the world is usually self-serving, but desireless adoration alone finds favor with the Creator.'
    },
    exampleSakhi: {
      text: 'निज स्वारथ के कारनै, सेव करै संसार।\nबिन स्वारथ भक्ति करै, सो भावै करतार।।',
      source: 'साखी संग्रह · स्वारथ को अंग - ५'
    }
  },
  {
    id: 'parmaarath-ratan',
    term: {
      pb: 'ਪਰਮਾਰਥ ਪਾਕੋ ਰਤਨ',
      hi: 'परमारथ पाको रतन',
      en: 'Parmaarath Paako Ratan (Altruism The Infallible Jewel)'
    },
    category: 'updesh',
    associatedAng: 'parmaarth-ko-ang',
    literalMeaning: {
      pb: 'ਪਰਉਪਕਾਰ ਅਤੇ ਸੱਚੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਰੂਪੀ ਅਸਲੀ ਹੀਰਾ।',
      hi: 'परोपकार व निस्वार्थ सेवा रूपी सच्चा, अमूल्य और पक्का रत्न।',
      en: 'The genuine, unblemished diamond of altruistic service and universal welfare.'
    },
    mysticalMeaning: {
      pb: 'ਜਿਸ ਨਾਲ ਸਭ ਦਾ ਭਲਾ ਹੋਵੇ ਉਹ ਪਰਮਾਰਥ ਸੱਚਾ ਰਤਨ ਹੈ, ਇਸ ਤੋਂ ਕਦੇ ਮੂੰਹ ਨਾ ਮੋੜੋ। ਸਵਾਰਥ ਸੇਂਬਲ ਦੇ ਫੁੱਲ ਵਾਂਗ ਧੋਖਾ ਦੇਣ ਵਾਲਾ ਹੈ, ਪਰ ਪਰਮਾਰਥ ਆਤਮਿਕ ਮੁਕਤੀ ਦਾ ਅਸਲ ਮਾਰਗ ਹੈ।',
      hi: 'कबीर साहेब कहते हैं कि परमार्थ को पक्का रत्न समझकर कभी इससे विमुख न हों। स्वार्थ सेमल के फल-हीन और गंध-हीन फूल की भांति मिथ्या आकर्षण है, जबकि परमार्थ आत्म-कल्याण का शाश्वत साधन है।',
      en: 'Regard altruism as a pure diamond from which one must never turn away. Selfishness is hollow like the silk-cotton flower, while selfless benevolence leads to divine realization.'
    },
    exampleSakhi: {
      text: 'परमारथ पाको रतन, कबहुं न दीजै पीठ।\nस्वारथ सेमन फूल है, कली अपूठी पीठ।।',
      source: 'साखी संग्रह · परमार्थ को अंग - ३'
    }
  },
  {
    id: 'peepal-parmaarath',
    term: {
      pb: 'ਪੀਪਲ ਪਰਮਾਰਥ',
      hi: 'पीपल परमारथ',
      en: 'Peepal Parmaarath (The Sheltering Tree of Benevolence)'
    },
    category: 'metaphor',
    associatedAng: 'parmaarth-ko-ang',
    literalMeaning: {
      pb: 'ਸਦਾ ਹਰੀ-ਭਰੀ ਸ਼ੀਤਲ ਛਾਂ ਦੇਣ ਵਾਲਾ ਪਿੱਪਲ ਦਾ ਰੁੱਖ।',
      hi: 'सदा शीतल छाया और जीवनदायिनी शांति देने वाला पीपल का विशाल वृक्ष।',
      en: 'The sacred, ever-sheltering Peepal tree giving cool relief to all travelers.'
    },
    mysticalMeaning: {
      pb: 'ਸਵਾਰਥ ਸੁੱਕੀ ਲੱਕੜ ਵਾਂਗ ਕੰਡੇ ਵਾਂਗ ਦੁਖਦਾਈ ਹੈ, ਪਰ ਪਰਮਾਰਥ ਪਿੱਪਲ ਦੇ ਰੁੱਖ ਵਾਂਗ ਹੈ ਜੋ ਸਭ ਨੂੰ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ ਅਤੇ ਸੁਖਾਂ ਦੇ ਸਾਗਰ ਪਰਮਾਤਮਾ ਦਾ ਮੂਲ ਹੈ।',
      hi: 'स्वार्थ की शुष्कता कांटे के समान चुभने वाली होती है, जबकि परमार्थ पीपल के छायादार वृक्ष के समान है जो प्राणी-मात्र को शीतलता प्रदान कर सुख के सागर परमात्मा से जोड़ता है।',
      en: 'Selfishness is a dry, thorn-like stick that wounds; Parmaarth is the benevolent Peepal tree, fountainhead of peace and shelter for all weary souls.'
    },
    exampleSakhi: {
      text: 'स्वारथ सूका लाकड़ा, छांह बिहूना सूल।\nपीपल परमारथ भजो, सुख सागर को मूल ।।',
      source: 'साखी संग्रह · परमार्थ को अंग - ६'
    }
  },
  {
    id: 'jas-rahai',
    term: {
      pb: 'ਜਗ ਮੇਂ ਜਸ ਰਹੈ',
      hi: 'जग में जस रहै',
      en: 'Jag Mein Jas Rahai (Enduring Glory of Good Deeds)'
    },
    category: 'updesh',
    associatedAng: 'parmaarth-ko-ang',
    literalMeaning: {
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਸਿਰਫ਼ ਨੇਕ ਕਮਾਈ ਅਤੇ ਪਰਉਪਕਾਰ ਦੀ ਕੀਰਤੀ ਸਦਾ ਰਹਿੰਦੀ ਹੈ।',
      hi: 'संसार में अंततः केवल सत्कर्मों का यश व परोपकार ही अमर रहता है।',
      en: 'The immortal legacy of good deeds and selfless assistance.'
    },
    mysticalMeaning: {
      pb: 'ਅੰਤ ਵੇਲੇ ਨਾ ਧਨ ਰਹਿਣਾ ਹੈ ਨਾ ਜਵਾਨੀ ਨਾ ਘਰ-ਬਾਰ। ਸੰਸਾਰ ਵਿੱਚ ਸਿਰਫ਼ ਪਰਉਪਕਾਰ ਦਾ ਨੇਕ ਜੱਸ ਰਹਿੰਦਾ ਹੈ, ਇਸ ਲਈ ਜਿਊਂਦੇ-ਜੀਅ ਕਿਸੇ ਲੋੜਵੰਦ ਦਾ ਭਲਾ ਕਰਨਾ ਹੀ ਜੀਵਨ ਦੀ ਸਾਰਥਕਤਾ ਹੈ।',
      hi: 'अंतकाल में धन, यौवन और ठिकाना कुछ भी साथ नहीं जाएगा। केवल परोपकार का पवित्र यश शेष रहेगा, अतः हर मनुष्य को प्रतिदिन किसी न किसी की निःस्वार्थ भलाई करनी चाहिए।',
      en: 'Neither wealth, nor youth, nor earthly mansions shall accompany the soul at death; only the fragrance of benevolent deeds endures. Therefore, serve and uplift others daily.'
    },
    exampleSakhi: {
      text: 'धन रहै न जोबन रहै, रहै न गांव न ठांव।\nकबीर जग में जस रहै, करिदे किसी का काम।।',
      source: 'साखी संग्रह · परमार्थ को अंग - ८'
    }
  },
  {
    id: 'man-masakhra',
    term: {
      pb: 'ਮਨ ਮਸਖ਼ਰਾ',
      hi: 'मन मसखरा',
      en: 'Man Masakhra (The Wayward Jester Mind)'
    },
    category: 'chitt-shuddhi',
    associatedAng: 'man-ko-ang',
    literalMeaning: {
      pb: 'ਚੰਚਲ, ਨਖਰੇਬਾਜ਼ ਅਤੇ ਮਨਮਾਨੀ ਕਰਨ ਵਾਲਾ ਮਨ।',
      hi: 'चंचल, नटखट और मनमानी करने वाला मन।',
      en: 'The petulant, wayward jester mind resisting discipline.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਮਨ ਬੜਾ ਮਸਖ਼ਰਾ ਹੈ; ਜੇ ਇਸਨੂੰ ਸੱਚੇ ਰਾਹ \'ਤੇ ਲਾਈਏ ਤਾਂ ਇਹ ਰੁੱਸ ਜਾਂਦਾ ਹੈ। ਜਿੱਥੇ ਪ੍ਰਭੂ ਮਿਲਦੇ ਹਨ, ਓਧਰ ਕਦਮ ਨਹੀਂ ਚੁੱਕਦਾ। ਇਸਨੂੰ ਗਿਆਨ ਤੇ ਨਾਮ ਦੇ ਅੰਕੁਸ਼ ਨਾਲ ਹੀ ਸਾਧਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
      hi: 'कबीरजी कहते हैं कि यह मन मसखरे के समान चंचल है; समझाने पर रूठता है और जिस मार्ग पर प्रभु मिलते हैं, उधर एक कदम भी नहीं चलता। इसे केवल सतगुरु के विवेक-अंकुश से ही सन्मार्ग पर लगाया जा सकता है।',
      en: 'The mind acts like a willful jester: rebuke it and it sulks, refuse to tread where God resides. Only the Master’s goad of wisdom can tame it.'
    },
    exampleSakhi: {
      text: 'कबीर यह मन मसखरा, कहूं तो मानै रोस।\nजा मारग साहिब मिलै, तहां न चालै कोस।।',
      source: 'साखी संग्रह · मन को अंग - १'
    }
  },
  {
    id: 'kumbhai-jal',
    term: {
      pb: 'ਕੁੰਭੈ ਬਾਂਧਾ ਜਲ',
      hi: 'कुंभै बांधा जल',
      en: 'Kumbhai Baandha Jal (Mind Contained by Wisdom)'
    },
    category: 'chitt-shuddhi',
    associatedAng: 'man-ko-ang',
    literalMeaning: {
      pb: 'ਘੜੇ ਦੇ ਸਹਾਰੇ ਰੁਕਿਆ ਹੋਇਆ ਪਾਣੀ ਅਤੇ ਪਾਣੀ ਬਿਨਾਂ ਘੜੇ ਦੀ ਅਣਹੋਂਦ।',
      hi: 'घड़े में स्थिर जल और जल के सहयोग से बना घड़ा।',
      en: 'Water stabilized within an earthen pot and the pot shaped by water.'
    },
    mysticalMeaning: {
      pb: 'ਜਿਵੇਂ ਘੜਾ ਪਾਣੀ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਤਿਵੇਂ ਹੀ ਗੁਰੂ ਦਾ ਬ੍ਰਹਮ-ਗਿਆਨ ਚੰਚਲ ਮਨ ਨੂੰ ਕਾਬੂ ਵਿੱਚ ਰੱਖਦਾ ਹੈ। ਮਨ ਬਿਨਾਂ ਗਿਆਨ ਦਾ ਅਨੁਭਵ ਨਹੀਂ ਹੋ ਸਕਦਾ ਅਤੇ ਗਿਆਨ ਬਿਨਾਂ ਮਨ ਟਿਕ ਨਹੀਂ ਸਕਦਾ।',
      hi: 'जैसे घड़े के होने से जल स्थिर रहता है, वैसे ही सतगुरु के ज्ञान से चंचल मन शांत और स्थिर होता है। ज्ञान और मन का यह संबंध आत्म-साधना का रहस्य है।',
      en: 'As water is held firm by the earthen vessel, so is the turbulent mind stabilized by divine wisdom. Mind without wisdom wanders; wisdom without mind cannot be expressed.'
    },
    exampleSakhi: {
      text: 'कुंभै बांधा जल रहै, जल बिन कुंभ न होय।\nज्ञानै बांधा मन रहै, मन बिनु ज्ञान न होय।।',
      source: 'साखी संग्रह · मन को अंग - २'
    }
  },
  {
    id: 'man-mirag',
    term: {
      pb: 'ਬਿਨਾ ਸੀਸ ਕਾ ਮਿਰਗ',
      hi: 'बिना सीस का मिरग',
      en: 'Bina Sees Ka Mirag (The Headless Deer Mind)'
    },
    category: 'metaphor',
    associatedAng: 'man-ko-ang',
    literalMeaning: {
      pb: 'ਬਿਨਾਂ ਸਿਰ ਵਾਲਾ ਅਦ੍ਰਿਸ਼ਟ ਹਿਰਨ ਜੋ ਚਾਰੇ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਦੌੜਦਾ ਹੈ।',
      hi: 'बिना सिर का अदृश्य हिरण जो चारों दिशाओं में चरने जाता है।',
      en: 'The headless, formless phantom deer galloping across the horizons.'
    },
    mysticalMeaning: {
      pb: 'ਮਨ ਇੱਕ ਅਜਿਹਾ ਅਦ੍ਰਿਸ਼ਟ ਹਿਰਨ ਹੈ ਜੋ ਬਿਨਾਂ ਸਿਰ ਦਾ ਹੋਣ ਕਰਕੇ ਪਕੜ ਵਿੱਚ ਨਹੀਂ ਆਉਂਦਾ ਅਤੇ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਵੱਲ ਦੌੜਦਾ ਹੈ। ਇਸਨੂੰ ਗੁਰੂ ਦੇ ਗਿਆਨ ਦੀ ਰੱਸੀ ਨਾਲ ਬੰਨ੍ਹ ਕੇ ਸਤਯਨਾਮ ਦੇ ਤੱਤ ਵਿੱਚ ਜੋੜਨਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'मन रूपी मृग निराकार और अदृश्य है, जो चारों दिशाओं में वासनाओं की ओर भागता है। इसे केवल सद्गुरु के ज्ञान-उपदेश की डोरी से बांधकर अविनाशी आत्म-तत्त्व में स्थिर किया जा सकता है।',
      en: 'The mind is an elusive, headless deer running into sensory pastures. Tether it firmly with the cord of the Guru’s wisdom to the Supreme Truth.'
    },
    exampleSakhi: {
      text: 'बिना सीस का मिरग है, चहुं दिस चरने जाय।\nबांधी लावो गुरुज्ञान सूं, राखो तत्व लगाय।।',
      source: 'साखी संग्रह · मन को अंग - ९'
    }
  },
  {
    id: 'man-chor',
    term: {
      pb: 'ਚੋਰ ਮਨ',
      hi: 'चोर मन',
      en: 'Chor Man (The Mind Thief Befriended)'
    },
    category: 'chitt-shuddhi',
    associatedAng: 'man-ko-ang',
    literalMeaning: {
      pb: 'ਚੇਤਨਾ ਅਤੇ ਸਮੇਂ ਨੂੰ ਚੋਰੀ ਕਰਨ ਵਾਲਾ ਅੰਦਰੂਨੀ ਚੋਰ।',
      hi: 'चेतना और समय को चुराने वाला आंतरिक चोर मन।',
      en: 'The stealthy internal thief that steals awareness and divine remembrance.'
    },
    mysticalMeaning: {
      pb: 'ਲੋਕ ਬਾਹਰੀ ਚੋਰਾਂ ਨੂੰ ਮਾਰਦੇ ਹਨ, ਪਰ ਸਾਧਕ ਦਾ ਚੋਰ ਉਸਦਾ ਆਪਣਾ ਮਨ ਹੈ। ਜਦੋਂ ਇਹ ਕਾਬੂ ਵਿੱਚ ਆ ਜਾਵੇ, ਤਾਂ ਇਸਨੂੰ ਮਾਰਨ ਦੀ ਥਾਂ ਪ੍ਰੇਮ ਨਾਲ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲਾਉਣਾ ਚਾਹੀਦਾ ਹੈ।',
      hi: 'संसार में सब अपने चोर को मारते हैं, किंतु आध्यात्मिक साधक का चोर उसका मन है। जब वह पकड़ में आए तो उसे दण्ड देने के बजाय प्रेम और समर्पण से प्रभु-भक्ति में लगा देना चाहिए।',
      en: 'The world destroys outer thieves, but the true seeker captures the inner mind-thief and transforms it through love into a devoted servant of God.'
    },
    exampleSakhi: {
      text: 'अपने अपने चोर को, सब कोय डारै मार।\nमेरा चोर मुझको मिलै, सरबस डारूं वार।।',
      source: 'साखी संग्रह · मन को अंग - १०'
    }
  },
  {
    id: 'maya-deepak',
    term: {
      pb: 'ਮਾਇਆ ਦੀਪਕ ਨਰ ਪਤੰਗ',
      hi: 'माया दीपक नर पतंग',
      en: 'Maya Deepak Nar Patang (The Flame of Maya & Human Moth)'
    },
    category: 'metaphor',
    associatedAng: 'maya-ko-ang',
    literalMeaning: {
      pb: 'ਦੀਵੇ ਦੀ ਬਲਦੀ ਲਾਟ ਅਤੇ ਉਸ \'ਤੇ ਸੜ ਮਰਨ ਵਾਲਾ ਪਤੰਗਾ।',
      hi: 'दीपक की आकर्षक ज्वाला और उस पर जल मरने वाला पतंगा।',
      en: 'The mesmerizing flame of a lamp and the doomed moth drawn to its incineration.'
    },
    mysticalMeaning: {
      pb: 'ਮਾਇਆ ਬਲਦੀ ਲਾਟ ਵਰਗੀ ਹੈ ਜਿਸਦੇ ਮੋਹ ਵਿੱਚ ਅਗਿਆਨੀ ਮਨੁੱਖ ਪਤੰਗੇ ਵਾਂਗ ਭਟਕ-ਭਟਕ ਕੇ ਸੜ ਮਰਦਾ ਹੈ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਬ੍ਰਹਮ-ਗਿਆਨ ਨਾਲ ਹੀ ਕੋਈ ਵਿਰਲਾ ਸਾਧਕ ਇਸ ਭਿਆਨਕ ਮੋਹ-ਅੱਗ ਤੋਂ ਬਚ ਕੇ ਮੁਕਤ ਹੁੰਦਾ ਹੈ।',
      hi: 'माया जलते दीपक की लौ के समान आकर्षक किंतु भस्मकारी है। अज्ञानी मनुष्य पतंगे की तरह बार-बार उसी में जलकर नष्ट होते हैं। केवल सद्गुरु के विवेक-ज्ञान से ही साधक इस मोह से उद्धार पाता है।',
      en: 'Maya is a scorching lamp flame and worldly mortals are like infatuated moths plunging to their destruction. Only the light of the Satguru’s wisdom saves the soul from this fatal attraction.'
    },
    exampleSakhi: {
      text: 'माया दीपक नर पतंग, भ्रमि भ्रमि माहिं परन्त।\nकोई एक गुरु ज्ञानते, उबरे साधु सन्त।।',
      source: 'साखी संग्रह · माया को अंग - २१'
    }
  },
  {
    id: 'moti-jheeni-maya',
    term: {
      pb: 'ਮੋਟੀ ਮਾਇਆ ਤੇ ਝੀਣੀ ਮਾਇਆ',
      hi: 'मोटी माया व झीनी माया',
      en: 'Moti Maya & Jheeni Maya (Gross & Subtle Illusion)'
    },
    category: 'chetavani',
    associatedAng: 'maya-ko-ang',
    literalMeaning: {
      pb: 'ਸਥੂਲ ਧਨ-ਦੌਲਤ (ਮੋਟੀ) ਅਤੇ ਸੂਖਮ ਮਾਨ-ਵਡਿਆਈ ਤੇ ਹੰਕਾਰ (ਝੀਣੀ ਮਾਇਆ)।',
      hi: 'स्थूल सांसारिक धन-संपत्ति (मोटी) और सूक्ष्म मान-बड़ाई, प्रतिष्ठा व अहंकार (झीनी माया)।',
      en: 'Gross physical possessions (Moti) versus subtle spiritual pride and desire for praise (Jheeni).'
    },
    mysticalMeaning: {
      pb: 'ਸਥੂਲ ਧਨ-ਦੌਲਤ ਤਾਂ ਬਹੁਤ ਲੋਕ ਤਿਆਗ ਦਿੰਦੇ ਹਨ, ਪਰ ਪ੍ਰਸਿੱਧੀ, ਮਾਨ-ਸਨਮਾਨ ਅਤੇ ਧਾਰਮਿਕ ਵਡਿਆਈ ਦੀ ਸੂਖਮ ਮਾਇਆ ਛੱਡਣੀ ਅਤਿਅੰਤ ਕਠਿਨ ਹੈ। ਜਦੋਂ ਤੱਕ ਝੀਣੀ ਮਾਇਆ ਨਹੀਂ ਛੁੱਟਦੀ, ਪੂਰਨ ਮੁਕਤੀ ਸੰਭਵ ਨਹੀਂ।',
      hi: 'धन-दौलत रूपी मोटी माया का त्याग तो अनेक साधक कर लेते हैं, किंतु यश, प्रतिष्ठा और आध्यात्मिक अहंकार रूपी झीनी (सूक्ष्म) माया को छोड़ना अत्यंत कठिन है। जब सूक्ष्म वासना छूटती है, तभी समस्त दुखों का अंत होता है।',
      en: 'Gross wealth is easily abandoned, but subtle Maya—the thirst for fame, recognition, and spiritual pride—is the most dangerous trap. True liberation occurs only when subtle vanity dissolves.'
    },
    exampleSakhi: {
      text: 'मोटी माया सब तजैं, झीनी तजी न जाय।\nपीर पैगम्बर औलिया, झीनी सबको खाय।।',
      source: 'साखी संग्रह · माया को अंग - १८'
    }
  },
  {
    id: 'maya-saampini',
    term: {
      pb: 'ਮਾਇਆ ਸਾਂਪਣੀ',
      hi: 'माया सांपिनी',
      en: 'Maya Saampini (The Venomous Serpent Maya)'
    },
    category: 'metaphor',
    associatedAng: 'maya-ko-ang',
    literalMeaning: {
      pb: 'ਜ਼ਹਿਰੀਲੀ ਸੱਪਣੀ ਜੋ ਆਪਣੇ ਪਾਲਣਹਾਰ ਨੂੰ ਹੀ ਡੰਗ ਮਾਰਦੀ ਹੈ।',
      hi: 'विषैली नागिन जो अपने पालने वाले को ही डस लेती है।',
      en: 'A venomous serpent that strikes and devours the very one who feeds it.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਮਾਇਆ ਨੂੰ ਇੱਕ ਜ਼ਹਿਰੀਲੀ ਸੱਪਣੀ ਆਖਦੇ ਹਨ ਜੋ ਮੋਹ ਕਰਨ ਵਾਲੇ ਜੀਵਾਂ ਦੀ ਚੇਤਨਾ ਨੂੰ ਹੀ ਡੱਸ ਕੇ ਮਾਰ ਦਿੰਦੀ ਹੈ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਰੂਪੀ ਸਮਰੱਥ ਗਾਰੁੜੀ (ਸਪੇਰਾ) ਹੀ ਇਸਨੂੰ ਗਿਆਨ ਦੇ ਪਟਾਰੇ ਵਿੱਚ ਬੰਨ੍ਹ ਸਕਦਾ ਹੈ।',
      hi: 'माया अत्यंत विषैली सर्पिणी है जो अपने पोषक अज्ञानी जीवों को ही डस लेती है। केवल समर्थ सद्गुरु रूपी गारुड़ी (विष-निवारक) ही अपने दिव्य ज्ञान-मंत्र से इसे वश में कर पिटारे में बंद कर सकते हैं।',
      en: 'Maya is a deadly serpent devouring those who foster her attachments. Only the Satguru—the sovereign snake-charmer—neutralizes her poison and locks her inside the basket of divine wisdom.'
    },
    exampleSakhi: {
      text: 'कबीर माया सांपिनी, जनता ही को खाय।\nऐसा मिला न गारुड़ी, पकड़ि पिटारे बांय।।',
      source: 'साखी संग्रह · माया को अंग - २६'
    }
  },
  {
    id: 'maya-paapini',
    term: {
      pb: 'ਮਾਇਆ ਪਾਪਣੀ ਫੰਦ',
      hi: 'माया पापिनी फंद',
      en: 'Maya Paapini Phand (The Siren Snare in the Global Bazaar)'
    },
    category: 'chetavani',
    associatedAng: 'maya-ko-ang',
    literalMeaning: {
      pb: 'ਸੰਸਾਰ ਦੇ ਬਾਜ਼ਾਰ ਵਿੱਚ ਮੋਹ ਦੀ ਫਾਹੀ ਲੈ ਕੇ ਬੈਠੀ ਪਾਪਣ ਮਾਇਆ।',
      hi: 'संसार रूपी हाट में मोह का फंदा बिछाए बैठी पापिनी माया।',
      en: 'The enchantress sitting in the worldly marketplace with a noose of desires.'
    },
    mysticalMeaning: {
      pb: 'ਮਾਇਆ ਸੰਸਾਰਕ ਹੱਟ \'ਤੇ ਭੋਗ-ਵਿਲਾਸਾਂ ਦਾ ਜਾਲ ਵਿਛਾ ਕੇ ਬੈਠੀ ਹੈ ਜਿਸ ਵਿੱਚ ਸਾਰਾ ਸੰਸਾਰ ਫਸ ਗਿਆ। ਪਰ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਗਿਆਨ ਦੀ ਕਿਰਪਾਨ ਨਾਲ ਕਬੀਰ ਸਾਹਿਬ ਨੇ ਇਸ ਫਾਹੀ ਨੂੰ ਕੱਟ ਕੇ ਅਮਰ ਪਦ ਪਾਇਆ।',
      hi: 'संसार रूपी बाजार में माया अपनी भोग-सामग्री का जाल फैलाए बैठी है। अज्ञानी जन इसके फंदे में फंस जाते हैं, किंतु सद्गुरु के ज्ञानोपदेश से विवेकवान साधक इस बंधन को काटकर मुक्त हो जाता है।',
      en: 'Sitting in the bazaar of worldly life, Maya sets snares of sensory temptation. The heedless world gets caught, but the seeker armed with the Master’s wisdom severs the trap and walks free.'
    },
    exampleSakhi: {
      text: 'कबीर माया पापिनी, फंद ले बैठी हाट।\nसब जग तो फंदै पड़ा, गया कबीरा काट।।',
      source: 'साखी संग्रह · माया को अंग - ६'
    }
  },
  {
    id: 'moh-khan',
    term: {
      pb: 'ਮੋਹ ਕੀ ਖਾਨ',
      hi: 'मोह की खान',
      en: 'Moh Ki Khaan (The Storehouse of Worldly Attachment)'
    },
    category: 'chetavani',
    associatedAng: 'moh-ko-ang',
    literalMeaning: {
      pb: 'ਅੱਠ ਸਿੱਧੀਆਂ ਤੇ ਨੌਂ ਨਿਧੀਆਂ ਸਮੇਤ ਸਮੁੱਚੀ ਸੰਸਾਰਕ ਆਸਕਤੀ ਦੀ ਖਾਣ।',
      hi: 'अष्ट सिद्धियां, नौ निधियां और समस्त सांसारिक वासनाओं का गहरा भंडार।',
      en: 'The deep reservoir of attachments, including supernatural powers and earthly treasures.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਰਿੱਧੀਆਂ-ਸਿੱਧੀਆਂ ਵੀ ਮੋਹ ਦੀ ਖਾਣ ਹਨ। ਜਦ ਤੱਕ ਅੰਦਰਲੀ ਸੂਖਮ ਵਾਸਨਾ ਨੂੰ ਨਹੀਂ ਤਿਆਗਿਆ ਜਾਂਦਾ, ਤਦ ਤੱਕ ਸੱਚੀ ਆਤਮ-ਮੁਕਤੀ ਸੰਭਵ ਨਹੀਂ।',
      hi: 'कबीर साहेब सावधान करते हैं कि अलौकिक सिद्धियां भी मोह की खान हैं। जब तक अंतःकरण से सूक्ष्म वासना का भी क्षय नहीं होता, तब तक सच्चा आत्म-कल्याण असंभव है।',
      en: 'Kabir warns that even subtle psychic powers and material riches are mere mines of delusion. Total surrender requires extinguishing the very roots of latent desire (Vasana).'
    },
    exampleSakhi: {
      text: 'अष्ट सिद्धि नव निद्धि लौं, सबही मोह की खान।\nत्याग मोह की वासना, कहैं कबीर सुजान।।',
      source: 'साखी संग्रह · मोह को अंग - १'
    }
  },
  {
    id: 'mrig-trishna-moh',
    term: {
      pb: 'ਮ੍ਰਿਗ ਤ੍ਰਿਸਨਾ ਜਗ ਮੋਹ',
      hi: 'मृग तृष्णा जग मोह',
      en: 'Mrig Trishna Moh (The Mirage of Worldly Attachment)'
    },
    category: 'metaphor',
    associatedAng: 'moh-ko-ang',
    literalMeaning: {
      pb: 'ਮਾਰੂਥਲ ਵਿੱਚ ਪਾਣੀ ਦਾ ਭਰਮ ਪੈਦਾ ਕਰਨ ਵਾਲੀ ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ ਵਰਗਾ ਸੰਸਾਰਕ ਮੋਹ।',
      hi: 'रेगिस्तान में जल का भ्रम उत्पन्न करने वाली मरीचिका के समान झूठा सांसारिक मोह।',
      en: 'Worldly delusion acting like a desert mirage that endlessly lures the thirsty soul.'
    },
    mysticalMeaning: {
      pb: 'ਦੇਵਤੇ, ਮਨੁੱਖ ਤੇ ਰਿਸ਼ੀ-ਮੁਨੀ ਸਭ ਇਸ ਮੋਹ ਰੂਪੀ ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ ਦੇ ਸਾਗਰ ਵਿੱਚ ਡੁੱਬੇ ਹੋਏ ਹਨ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਗਿਆਨ ਨਾਲ ਹੀ ਇਸ ਭਰਮ ਤੋਂ ਮੁਕਤੀ ਸੰਭਵ ਹੈ।',
      hi: 'देवता, मनुष्य तथा तपस्वी मुनिगण भी इस जग-मोह की मृग-तृष्णा में फंसे हैं। केवल पारखी संत के तत्त्व-विचार और सतगुरु-कृपा से ही इस महा-जाल से उद्धार संभव है।',
      en: 'Mortals and celestial beings alike are bewildered by the mirage of emotional clinging. Only the touch of the True Master dispels this cosmic illusion.'
    },
    exampleSakhi: {
      text: 'सुर नर मुनि सब फंसे, मृग त्रिस्ना जग मोह।\nमोह रूप संसार है, गिरे मोह निधि जोह।।',
      source: 'साखी संग्रह · मोह को अंग - २'
    }
  },
  {
    id: 'surati-machhli',
    term: {
      pb: 'ਸੁਰਤਿ ਮੱਛਲੀ ਉਲਟੀ ਨੀਰ',
      hi: 'सुरति मछली उल्टी नीर',
      en: 'Surati Machhli Ulti Neer (Consciousness Ascending Upstream)'
    },
    category: 'yoga-inner',
    associatedAng: 'moh-ko-ang',
    literalMeaning: {
      pb: 'ਪਾਣੀ ਦੇ ਤੇਜ਼ ਵਹਾਅ ਦੇ ਉਲਟ ਉੱਪਰ ਵੱਲ ਚੜ੍ਹਨ ਵਾਲੀ ਮੱਛੀ ਵਰਗੀ ਸੂਖਮ ਸੁਰਤ।',
      hi: 'प्रबल जल-प्रवाह के विपरीत ऊपर की ओर तैरने वाली मछली के समान अंतर्मुखी ध्यान-सुरति।',
      en: 'Subtle conscious attention that reverses outward flow and ascends upstream against the current.'
    },
    mysticalMeaning: {
      pb: 'ਜਿੱਥੇ ਵੱਡੇ-ਵੱਡੇ ਵਿਦਵਾਨ ਮੋਹ ਦੇ ਹੜ੍ਹ ਵਿੱਚ ਰੁੜ੍ਹ ਜਾਂਦੇ ਹਨ, ਉੱਥੇ ਧਿਆਨ-ਅਭਿਆਸੀ ਦੀ ਸੁਰਤ ਮੱਛੀ ਵਾਂਗ ਉਲਟੀ ਦਿਸ਼ਾ (ਪ੍ਰਵਿਰਤੀ ਤੋਂ ਨਿਵਿਰਤੀ) ਵਿੱਚ ਚੜ੍ਹ ਕੇ ਨਿਰਮੋਹ ਪਦ ਪਾ ਲੈਂਦੀ ਹੈ।',
      hi: 'मोह के वेग में धीर-गंभीर पुरुष भी बह जाते हैं, परंतु साधक की अंतर्मुखी सुरति मछली की भांति संसार के प्रवाह के विपरीत चढ़कर आत्म-स्वरूप में लीन हो जाती है।',
      en: 'While scholars are swept away by the torrent of delusion, the seeker’s refined consciousness (Surati) swims upstream against external distractions into the inner sanctuary of peace.'
    },
    exampleSakhi: {
      text: 'मोह सलिल की धार में, बहि गये गहिर गंभीर।\nसूक्ष्म मछली सुरति है, चढ़ती उल्टी नीर।।',
      source: 'साखी संग्रह · मोह को अंग - १०'
    }
  },
  {
    id: 'satguru-kevat',
    term: {
      pb: 'ਸਤਿਗੁਰੂ ਕੇਵਟ (ਮਲਾਹ)',
      hi: 'सतगुरु केवट (मल्लाह)',
      en: 'Satguru Kevat (The Divine Helmsman Ferrying Across Delusion)'
    },
    category: 'satguru',
    associatedAng: 'moh-ko-ang',
    literalMeaning: {
      pb: 'ਭਿਆਨਕ ਨਦੀ ਵਿੱਚੋਂ ਬੇੜੀ ਪਾਰ ਲੰਘਾਉਣ ਵਾਲਾ ਮਲਾਹ।',
      hi: 'विकराल नदी के भंवरों से नाव को पार उतारने वाला निपुण केवट या नाविक।',
      en: 'The expert ferryman who navigates the boat safely through turbulent waters.'
    },
    mysticalMeaning: {
      pb: 'ਮੋਹ ਦੀ ਨਦੀ ਅਤਿਅੰਤ ਵਿਕਰਾਲ ਹੈ। ਇਸ ਤੋਂ ਇਕੱਲਿਆਂ ਪਾਰ ਲੰਘਣਾ ਅਸੰਭਵ ਹੈ। ਜਦੋਂ ਜੀਵ ਸਤਿਗੁਰੂ ਨੂੰ ਆਪਣਾ ਕੇਵਟ ਬਣਾ ਲੈਂਦਾ ਹੈ, ਤਦ ਹੰਸ ਬਣ ਕੇ ਜਮ ਦੇ ਫੰਦੇ ਤੋਂ ਪਾਰ ਹੋ ਜਾਂਦਾ ਹੈ।',
      hi: 'मोह की नदी अत्यंत भयावह है जिससे कोई स्वयं पार नहीं हो सकता। केवल सद्गुरु रूपी केवट का आश्रय लेकर हंस रूपी विवेकवान भक्त ही मृत्यु और आवागमन से पार उतर पाता है।',
      en: 'The river of attachment is too stormy to cross alone. With Satguru as the master boatman, the discriminating swan-soul sails across the jaws of death into liberation.'
    },
    exampleSakhi: {
      text: 'मोह नदी विकराल है, कोई न उतरै पार।\nसतगुरु केवट साथ ले, हंस होय जम नार।।',
      source: 'साखी संग्रह · मोह को अंग - ९'
    }
  },
  {
    id: 'kaami-krodhi-soorma',
    term: {
      pb: 'ਕਾਮੀ ਕ੍ਰੋਧੀ ਲਾਲਚੀ ਸੂਰਮਾ',
      hi: 'कामी क्रोधी लालची सूरमा',
      en: 'Kaami Krodhi Soorma (The Spiritual Warrior Overcoming Passions)'
    },
    category: 'conduct',
    associatedAng: 'kaam-ko-ang',
    literalMeaning: {
      pb: 'ਕਾਮ, ਕ੍ਰੋਧ ਅਤੇ ਲੋਭ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਜਾਤ-ਪਾਤ ਦਾ ਹੰਕਾਰ ਮਿਟਾਉਣ ਵਾਲਾ ਸੱਚਾ ਸੂਰਬੀਰ।',
      hi: 'काम, क्रोध और लोभ का त्याग कर जाति-कुल का अहंकार मिटाने वाला शूरवीर साधक।',
      en: 'The brave spiritual warrior who dissolves lust, wrath, greed, and ancestral pride.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਵਿਕਾਰਾਂ ਵਿੱਚ ਫਸੇ ਮਨੁੱਖਾਂ ਤੋਂ ਭਗਤੀ ਨਹੀਂ ਹੋ ਸਕਦੀ। ਭਗਤੀ ਕੇਵਲ ਉਹੀ ਸੂਰਮਾ ਕਰਦਾ ਹੈ ਜੋ ਅੰਦਰੂਨੀ ਕਾਮ-ਕ੍ਰੋਧ ਅਤੇ ਬਾਹਰੀ ਜਾਤ-ਪਾਤ ਦੇ ਹੰਕਾਰ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮਿਟਾ ਦੇਵੇ।',
      hi: 'कामी, क्रोधी और लालची व्यक्ति भक्ति नहीं कर सकते। भक्ति वही शूरवीर कर सकता है जो आत्म-संयम साधकर कुल, वर्ण और जाति के मिथ्या अभिमान को तिलांजलि दे दे।',
      en: 'True devotion cannot take root in minds obsessed with lust, wrath, or wealth. It demands a spiritual hero who slays internal passions and discards all social and caste arrogance.'
    },
    exampleSakhi: {
      text: 'कामी क्रोधी लालची, इनते भक्ति न होय।\nभक्ति करै कोय सूरमा, जाति बरन कुल खोय।।',
      source: 'साखी संग्रह · काम को अंग - १'
    }
  },
  {
    id: 'kaam-naam-dwandva',
    term: {
      pb: 'ਜਹਾਂ ਕਾਮ ਤਹਾਂ ਨਾਮ ਨਹਿਂ',
      hi: 'जहां काम तहां नाम नहिं',
      en: 'Jahaan Kaam Tahaan Naam Nahin (Sun and Night Metaphor)'
    },
    category: 'chetavani',
    associatedAng: 'kaam-ko-ang',
    literalMeaning: {
      pb: 'ਜਿਵੇਂ ਸੂਰਜ ਅਤੇ ਰਾਤ ਇੱਕੋ ਥਾਂ ਨਹੀਂ ਰਹਿ ਸਕਦੇ, ਤਿਵੇਂ ਕਾਮ ਅਤੇ ਸਤਯਨਾਮ ਇਕੱਠੇ ਨਹੀਂ ਰਹਿ ਸਕਦੇ।',
      hi: 'जैसे सूर्य और रात्रि एक स्थान पर नहीं रह सकते, वैसे ही वासना और सत्यनाम का सह-अस्तित्व असंभव है।',
      en: 'Just as daylight and dark night cannot occupy the same space, lust and the Holy Name cannot coexist in one heart.'
    },
    mysticalMeaning: {
      pb: 'ਕਾਮ-ਵਾਸਨਾ ਅੰਧਕਾਰ ਹੈ ਅਤੇ ਸਤਿਗੁਰੂ ਦਾ ਨਾਮ ਪਰਮ ਚਾਨਣ ਹੈ। ਜਦ ਤੱਕ ਹਿਰਦੇ ਵਿੱਚੋਂ ਕਾਮ ਦੀ ਰਾਤ ਨਹੀਂ ਮਿਟਦੀ, ਤਦ ਤੱਕ ਨਾਮ ਦਾ ਸੂਰਜ ਪ੍ਰਗਟ ਨਹੀਂ ਹੋ ਸਕਦਾ।',
      hi: 'काम-वासना अज्ञान का अंधकार है और गुरु-नाम दिव्य प्रकाश। जब तक अंतःकरण से काम की कल्पना भी नहीं मिटती, तब तक परमात्मा के सत्यनाम का उदय नहीं होता।',
      en: 'Lust is dense ignorance and the Divine Name is supreme illumination. Until the night of sensual desire is purged, the blazing sun of truth cannot rise within.'
    },
    exampleSakhi: {
      text: 'जहां काम तहां नाम नहिं, तहां नाम नहिं काम।\nदोनों कबहू ना मिलै, रवि रजनी इक ठाम।।',
      source: 'साखी संग्रह · काम को अंग - ११'
    }
  },
  {
    id: 'kaam-kahar-asvaar',
    term: {
      pb: 'ਕਾਮ ਕਹਰ ਅਸਵਾਰ',
      hi: 'काम कहर असवार',
      en: 'Kaam Kahar Asvaar (The Fierce Horseman of Lust)'
    },
    category: 'metaphor',
    associatedAng: 'kaam-ko-ang',
    literalMeaning: {
      pb: 'ਕਾਮ ਦਾ ਕਹਿਰ ਜੋ ਜ਼ਾਲਮ ਘੁੜਸਵਾਰ ਵਾਂਗ ਸਭ ਨੂੰ ਮਾਰਦਾ ਫਿਰਦਾ ਹੈ।',
      hi: 'काम-वासना रूपी क्रूर घुड़सवार जो समस्त जीवों पर वेग से प्रहार करता है।',
      en: 'Lust depicted as a ferocious horseman riding ruthlessly across creation.'
    },
    mysticalMeaning: {
      pb: 'ਕਾਮ ਦੇ ਕਹਿਰ ਅੱਗੇ ਵੱਡੇ-ਵੱਡੇ ਰਿਸ਼ੀ-ਮੁਨੀ ਵੀ ਢਹਿ-ਢੇਰੀ ਹੋ ਗਏ। ਇਸ ਤੋਂ ਸਿਰਫ਼ ਉਹੀ ਵਿਰਲਾ ਭਗਤ ਬਚਦਾ ਹੈ ਜਿਸਨੂੰ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਦਾ ਅਮੋਲਕ ਸਹਾਰਾ ਪ੍ਰਾਪਤ ਹੋਵੇ।',
      hi: 'काम-वासना के विनाशकारी आक्रमण से सामान्य जन ही नहीं, ऋषि-मुनि भी व्याकुल हो जाते हैं। इससे केवल वही भक्त बच पाता है जिसे सद्गुरु के सत्यनाम का अमोघ कवच प्राप्त हो।',
      en: 'Before the furious onslaught of carnal passion, even celebrated sages stumble. Only a rare devotee anchored in the Satguru’s Holy Name remains untouchable and victorious.'
    },
    exampleSakhi: {
      text: 'काम कहर असवार है, सबको मारै धाय।\nकोई एक हरिजन ऊबरा, जाके नाम सहाय।।',
      source: 'साखी संग्रह · काम को अंग - ९'
    }
  },
  {
    id: 'krodh-laar',
    term: {
      pb: 'ਕਰੋੜ ਕਰਮ ਕ੍ਰੋਧ ਦੀ ਲਾਰ',
      hi: 'कोटि करम क्रोध की लार',
      en: 'Koti Karam Krodh Ki Laar (Train of Sins Following Anger)'
    },
    category: 'mind-maya',
    associatedAng: 'krodh-ko-ang',
    literalMeaning: {
      pb: 'ਇਕੱਲੇ ਕ੍ਰੋਧ ਦੇ ਪਿੱਛੇ ਕਰੋੜਾਂ ਪਾਪਾਂ ਦੀ ਕਤਾਰ ਲੱਗੀ ਰਹਿੰਦੀ ਹੈ।',
      hi: 'क्रोध तो अकेला दिखाई देता है, परंतु उसके पीछे करोड़ों पाप कर्मों की अटूट पंक्ति बंधी रहती है।',
      en: 'Anger appears singular, but behind it follows an unbroken train of millions of sins.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹਿਬ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਕ੍ਰੋਧ ਨਾਲ ਰਾਗ, ਦ੍ਵੇਸ਼, ਹੰਕਾਰ ਅਤੇ ਈਰਖਾ ਦੇ ਸਾਰੇ ਪਾਪ ਉਪਜਦੇ ਹਨ। ਅਹੰਕਾਰ ਦੇ ਆਉਂਦੇ ਹੀ ਮਨੁੱਖ ਦੀ ਸਾਰੀ ਪੁੰਨ-ਕਮਾਈ ਸੁਆਹ ਹੋ ਜਾਂਦੀ ਹੈ।',
      hi: 'क्रोध राग, द्वेष, ईर्ष्या और अहंकार की जननी है। जैसे ही मन में अहंकार और क्रोध का प्रवेश होता है, मनुष्य के जीवन भर के पुण्य-कर्म जलकर भस्म हो जाते हैं।',
      en: 'Anger gives birth to malice, envy, pride, and illusion. The moment anger and pride enter the heart, a lifetime of accumulated spiritual merit is turned to ashes.'
    },
    exampleSakhi: {
      text: 'कोटि करम लागे रहै, एक क्रोध की लार।\nकिया कराया सब गया, जब आया हंकार।।',
      source: 'साखी संग्रह · क्रोध को अंग - १'
    }
  },
  {
    id: 'krodh-seetal-sangat',
    term: {
      pb: 'ਸੀਤਲ ਸੰਗਤ ਸਾਧ ਦੀ',
      hi: 'सीतल संगत साध की',
      en: 'Seetal Sangat Sadh Ki (Tranquil Refuge of the Saints)'
    },
    category: 'satguru',
    associatedAng: 'krodh-ko-ang',
    literalMeaning: {
      pb: 'ਕ੍ਰੋਧ ਦੀ ਬਲਦੀ ਅੱਗ ਵਿੱਚ ਸਾਧੂ-ਸੰਤਾਂ ਦੀ ਸੰਗਤ ਹੀ ਪਰਮ ਸੀਤਲ ਅਤੇ ਸ਼ਾਂਤੀ ਦੇਣ ਵਾਲੀ ਹੈ।',
      hi: 'क्रोध की ज्वाला में झुलसती दुनिया में साधु-संतों की सत्संगति ही परम शीतल और संताप-हारिणी है।',
      en: 'Amidst a world scorching in the fires of anger, the fellowship of true saints is the ultimate cool and soothing refuge.'
    },
    mysticalMeaning: {
      pb: 'ਦਸਾਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਕ੍ਰੋਧ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਦੀ ਅੱਗ ਬਲ ਰਹੀ ਹੈ। ਇਸ ਅੱਗ ਤੋਂ ਬਚਣ ਦਾ ਇੱਕੋ-ਇੱਕ ਉਪਾਅ ਸੰਤਾਂ ਦੀ ਨਿਮਰ ਅਤੇ ਸੀਤਲ ਸੰਗਤ ਵਿੱਚ ਸਰਨ ਲੈਣਾ ਹੈ।',
      hi: 'समस्त संसार क्रोध और वासना की अग्नि में जल रहा है। इस संताप से रक्षा का एकमात्र उपाय सतगुरु व साधु पुरुषों की शीतल सत्संगति में शरण लेना है।',
      en: 'In all ten directions, the fire of anger burns unchecked. The soul finds safe, cooling deliverance only by taking refuge in the peaceful sanctuary of holy saints.'
    },
    exampleSakhi: {
      text: 'दसौं दिसा में क्रोध की, उठी अपरबल आग।\nसीतल संगत साध की, तहां उबरिये भाग।।',
      source: 'साखी संग्रह · क्रोध को अंग - ६'
    }
  },
  {
    id: 'anhad-naad',
    term: {
      pb: 'ਅਨਹਦ ਨਾਦ',
      hi: 'अनहद नाद',
      en: 'Anhad Naad (Unstruck Sound)'
    },
    category: 'yoga-inner',
    literalMeaning: {
      pb: 'ਬਿਨਾਂ ਕਿਸੇ ਚੋਟ ਜਾਂ ਆਘਾਤ ਦੇ ਪੈਦਾ ਹੋਣ ਵਾਲੀ ਆਵਾਜ਼।',
      hi: 'बिना किसी आघात या दो वस्तुओं के टकराए बिना उत्पन्न होने वाली ध्वनि।',
      en: 'Sound generated without striking two physical objects; the primordial unstruck resonance.'
    },
    mysticalMeaning: {
      pb: 'ਅੰਦਰੂਨੀ ਬ੍ਰਹਮੰਡੀ ਧੁਨੀ, ਜੋ ਦਸਵੇਂ ਦੁਆਰ ਵਿੱਚ ਸਦਾ ਗੂੰਜ ਰਹੀ ਹੈ। ਧਿਆਨ ਦੀ ਗਹਿਰਾਈ ਵਿੱਚ ਜਦੋਂ ਬਾਹਰੀ ਇੰਦਰੀਆਂ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੀਆਂ ਹਨ, ਤਾਂ ਇਹ ਪਰਮ ਪਵਿੱਤਰ ਓਂਕਾਰ/ਸਤਯਨਾਮ ਧੁਨੀ ਸੁਣਾਈ ਦਿੰਦੀ ਹੈ।',
      hi: 'दशम द्वार में अनवरत गूंजने वाली आंतरिक दिव्य ध्वनि। ध्यान की पराकाष्ठा में जब बाह्य इंद्रियां शांत होती हैं, तब यह दिव्य ओंकार/सत्यनाम नाद सुनाई देता है।',
      en: 'The eternal divine vibration resonating within the tenth door of consciousness, heard when the senses turn inward in profound meditation.'
    },
    exampleSakhi: {
      text: 'ਗਗਨ ਮੰਡਲ ਮੇਂ ਗਾਜੈ ਨਾਦ, ਸੁਨਿ ਅਨਹਦ ਕਾ ਧ੍ਯਾਨ ਧਰੈ ।',
      source: 'ਕਬੀਰ ਬੀਜਕ · ਰਮੈਣੀ'
    }
  },
  {
    id: 'surati',
    term: {
      pb: 'ਸੁਰਤਿ',
      hi: 'सुरति',
      en: 'Surati (Awakened Inner Consciousness)'
    },
    category: 'yoga-inner',
    literalMeaning: {
      pb: 'ਯਾਦ, ਸੁਧ-ਬੁੱਧ, ਜਾਂ ਧਿਆਨ ਦੀ ਇਕਾਗਰਤਾ।',
      hi: 'स्मृति, सुध-बुध अथवा चेतना की एकाग्रता।',
      en: 'Memory, conscious awareness, or faculty of deep inner attention.'
    },
    mysticalMeaning: {
      pb: 'ਜੀਵ-ਆਤਮਾ ਦੀ ਉਹ ਅੰਦਰੂਨੀ ਚੇਤਨਾ ਜੋ ਸੰਸਾਰਿਕ ਵਿਸ਼ਿਆਂ ਤੋਂ ਮੁੜ ਕੇ ਅੰਦਰੂਨੀ ਸ਼ਬਦ (ਨਾਮ) ਨਾਲ ਜੁੜਦੀ ਹੈ। ਸੁਰਤਿ ਦਾ ਸ਼ਬਦ ਵਿੱਚ ਲੀਨ ਹੋਣਾ ਹੀ ਸੱਚਾ ਯੋਗ ਹੈ।',
      hi: 'जीवात्मा की वह दिव्य चेतना जो सांसारिक विषयों से हटकर आंतरिक शब्द (नाम) से संयुक्त होती है। "सुरति-शब्द योग" ही मुक्ति का सर्वोच्च साधन है।',
      en: 'The soul\'s divine faculty of inner hearing and consciousness that detaches from outer stimuli to merge into the sacred Word.'
    },
    exampleSakhi: {
      text: 'ਸੁਰਤਿ ਸਮਾਨੀ ਸਬਦ ਮੇਂ, ਜਬ ਪਾਯਾ ਦੀਦਾਰ ।',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਪਰਚਾ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'nirati',
    term: {
      pb: 'ਨਿਰਤਿ',
      hi: 'निरति',
      en: 'Nirati (Inner Divine Vision)'
    },
    category: 'yoga-inner',
    literalMeaning: {
      pb: 'ਨਿਰਖਣਾ, ਵੇਖਣਾ, ਜਾਂ ਪਰਖਣਾ।',
      hi: 'देखना, परखना अथवा दृष्टि की स्थिरता।',
      en: 'Faculty of inner sight, perception, and spiritual discrimination.'
    },
    mysticalMeaning: {
      pb: 'ਆਤਮਾ ਦੀ ਅੰਦਰੂਨੀ ਅੱਖ (ਦਿਵਯ ਨੇਤਰ), ਜੋ ਸੁਰਤਿ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਜਾਣ ਤੋਂ ਬਾਅਦ ਪਰਮ ਪ੍ਰਕਾਸ਼ (ਨੂਰ) ਦਾ ਦਰਸ਼ਨ ਕਰਦੀ ਹੈ ਅਤੇ ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ।',
      hi: 'आत्मा का आंतरिक दिव्य नेत्र जो नाद के साथ-साथ परम दिव्य ज्योति का साक्षात्कार करता है और चंचलता से मुक्त होकर स्थिर होता है।',
      en: 'The awakened third eye of the soul that beholds the uncreated Divine Light and stabilizes the mind in bliss.'
    },
    exampleSakhi: {
      text: 'ਸੁਰਤਿ ਨਿਰਤਿ ਦੋਊ ਮਿਲਿ ਰਹੈ, ਤਬ ਪਾਵੈ ਸੁਖ ਧਾਮ ।',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੁਮਿਰਨ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'trikuti',
    term: {
      pb: 'ਤ੍ਰਿਕੁਟੀ',
      hi: 'त्रिकुटी',
      en: 'Trikuti (The Tri-Junction of Inner Sight)'
    },
    category: 'yoga-inner',
    literalMeaning: {
      pb: 'ਤਿੰਨਾਂ ਰੇਖਾਵਾਂ ਜਾਂ ਨਾੜੀਆਂ ਦਾ ਸੰਗਮ।',
      hi: 'तीन रेखाओं अथवा नाड़ियों का मिलन स्थल।',
      en: 'The confluence of three sacred subtle channels (Ida, Pingala, Sushumna).'
    },
    mysticalMeaning: {
      pb: 'ਦੋਹਾਂ ਅੱਖਾਂ ਅਤੇ ਭਰਵੱਟਿਆਂ ਦੇ ਵਿਚਕਾਰਲਾ ਸੂਖਮ ਅਸਥਾਨ (ਆਗਿਆ ਚੱਕਰ/ਅੰਦਰੂਨੀ ਸੰਗਮ), ਜਿੱਥੇ ਇੜਾ, ਪਿੰਗਲਾ ਅਤੇ ਸੁਖਮਨਾ ਮਿਲਦੀਆਂ ਹਨ। ਇੱਥੋਂ ਹੀ ਅੰਮ੍ਰਿਤ ਦਾ ਸਰੋਤ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।',
      hi: 'भृकुटि के मध्य का वह सूक्ष्म आध्यात्मिक केंद्र जहां इड़ा, पिंगला और सुषुम्ना का संगम होता है। यहीं से अंतर-चेतना का उच्चतर लोक प्रारंभ होता है।',
      en: 'The mystical third-eye junction between the eyebrows where inner spiritual ascent transitions into higher dimensions of divine light.'
    },
    exampleSakhi: {
      text: 'ਤ੍ਰਿਕੁਟੀ ਮਹਿਲ ਮੇਂ ਬਸੈ ਪਿਯਾਰਾ, ਜਹਾਂ ਅਨਹਦ ਕੀ ਝਨਕਾਰ ।',
      source: 'ਕਬੀਰ ਸ਼ਬਦਾਵਲੀ'
    }
  },
  {
    id: 'sushumna',
    term: {
      pb: 'ਸੁਖਮਨਾ (ਸੁਸ਼ੁਮਨਾ)',
      hi: 'सुखमन (सुषुम्ना)',
      en: 'Sukhmana / Sushumna'
    },
    category: 'yoga-inner',
    literalMeaning: {
      pb: 'ਸੁੱਖ ਦੇਣ ਵਾਲੀ ਨਾੜੀ।',
      hi: 'सुख प्रदान करने वाली मध्य नाड़ी।',
      en: 'The central subtle meridian that bestows transcendent tranquility.'
    },
    mysticalMeaning: {
      pb: 'ਰੀੜ੍ਹ ਦੀ ਹੱਡੀ ਦੇ ਵਿਚਕਾਰਲੀ ਸੂਖਮ ਅਧਿਆਤਮਿਕ ਨਾੜੀ। ਜਦੋਂ ਪ੍ਰਾਣ ਖੱਬੀ (ਇੜਾ) ਅਤੇ ਸੱਜੀ (ਪਿੰਗਲਾ) ਤੋਂ ਹਟ ਕੇ ਵਿਚਕਾਰਲੀ ਸੁਖਮਨਾ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰਦੇ ਹਨ, ਤਾਂ ਸਹਜ ਸਮਾਧੀ ਲੱਗਦੀ ਹੈ।',
      hi: 'इड़ा और पिंगला के मध्य स्थित वह पावन आध्यात्मिक मार्ग जिससे प्राण ऊपर उठकर ब्रह्मरंध्र में प्रवेश करते हैं और समाधि सिद्ध होती है।',
      en: 'The central spiritual conduit running through the spinal subtle axis through which the awakened soul ascends toward liberation.'
    },
    exampleSakhi: {
      text: 'ਇੜਾ ਪਿੰਗਲਾ ਸੁਖਮਨ ਨਾਰੀ, ਤਾਹੀ ਮੇਂ ਪ੍ਰਭੁ ਰੰਗ ਬਿਹਾਰੀ ॥',
      source: 'ਕਬੀਰ ਬੀਜਕ · ਸਾਖੀ'
    }
  },
  {
    id: 'hans',
    term: {
      pb: 'ਹੰਸ',
      hi: 'हंस',
      en: 'Hans (The Pure Liberated Soul)'
    },
    category: 'metaphor',
    literalMeaning: {
      pb: 'ਇਕ ਪਵਿੱਤਰ ਚਿੱਟਾ ਪੰਛੀ ਜੋ ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ।',
      hi: 'एक श्वेत पक्षी जो दूध और पानी को पृथक कर देता है।',
      en: 'The sacred swan that separates milk from water and pecks only upon pearls.'
    },
    mysticalMeaning: {
      pb: 'ਉਹ ਪਵਿੱਤਰ, ਨਿਰਮਲ ਅਤੇ ਜਾਗਰੂਕ ਆਤਮਾ ਜੋ ਸੰਸਾਰਿਕ ਮਾਇਆ (ਪਾਣੀ) ਵਿੱਚੋਂ ਸੱਚ (ਦੁੱਧ) ਨੂੰ ਵੱਖ ਕਰਨਾ ਜਾਣਦੀ ਹੈ ਅਤੇ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਦੀ ਥਾਂ ਨਾਮ-ਮੋਤੀ ਚੁਗਦੀ ਹੈ।',
      hi: 'सत्य-असत्य का विवेक रखने वाली पवित्र जीवात्मा जो संसार के प्रपंचों को छोड़कर केवल सत्यनाम रूपी मोती को ग्रहण करती है।',
      en: 'The spiritually awakened soul gifted with supreme discernment, picking the pearls of divine Truth while untouched by mundane delusions.'
    },
    exampleSakhi: {
      text: 'ਹੰਸਾ ਸਰਵਰ ਛੋਡਿ ਕੈ, ਕਹੂੰ ਨ ਜਾਸੀ ਧਾਇ । ਮੁਕਤਾਹਲ ਮੁਕਤਾ ਚੁਗੈ, ਪੇਟ ਭਰੇ ਮਨ ਭਾਇ ॥',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਹੰਸ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'bagula',
    term: {
      pb: 'ਬਗੁਲਾ',
      hi: 'बगुला',
      en: 'Bagula (The Hypocritical Mind)'
    },
    category: 'metaphor',
    literalMeaning: {
      pb: 'ਇਕ ਚਿੱਟਾ ਪੰਛੀ ਜੋ ਮੱਛੀਆਂ ਫੜਨ ਲਈ ਇਕ ਲੱਤ \'ਤੇ ਖੜ੍ਹਦਾ ਹੈ।',
      hi: 'जल का एक पक्षी जो ध्यान की मुद्रा बनाकर मछली का शिकार करता है।',
      en: 'The heron that stands on one leg pretending to meditate while awaiting prey.'
    },
    mysticalMeaning: {
      pb: 'ਉਹ ਪਖੰਡੀ ਮਨੁੱਖ ਜੋ ਬਾਹਰੋਂ ਤਾਂ ਚਿੱਟੇ ਕੱਪੜੇ ਪਾ ਕੇ ਸਾਧੂ ਜਾਂ ਭਗਤ ਬਣਦਾ ਹੈ, ਪਰ ਅੰਦਰੋਂ ਵਿਸ਼ੇ-ਵਿਕਾਰਾਂ ਅਤੇ ਦੂਜਿਆਂ ਦੇ ਨੁਕਸਾਨ ਦੀ ਤਾਕ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ।',
      hi: 'धार्मिक आडंबर करने वाला पाखंडी जो बाह्य रूप से शांत और तपस्वी दिखता है किंतु भीतर से स्वार्थ, लोभ और वासनाओं से भरा रहता है।',
      en: 'A metaphor for the religious hypocrite who affects serene external piety while harboring deceit, greed, and lust within.'
    },
    exampleSakhi: {
      text: 'ਕਬੀਰ ਬਗੁਲਾ ਏਕ ਪਗ, ਧਰੇ ਬੈਠਾ ਧਿਆਨ । ਕਬਹੂੰ ਨ ਹੰਸ ਸਮਾਨ ਹੋਇ, ਮਨ ਮੇਂ ਮੀਨ ਗੁਮਾਨ ॥',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਭੇਖ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'kasturi-mrig',
    term: {
      pb: 'ਕਸਤੂਰੀ ਮ੍ਰਿਗ',
      hi: 'कस्तूरी मृग',
      en: 'Kasturi Mrig (The Musk Deer)'
    },
    category: 'metaphor',
    literalMeaning: {
      pb: 'ਹਿਰਨ ਜਿਸਦੀ ਨਾਭੀ ਵਿੱਚ ਸੁਗੰਧਿਤ ਕਸਤੂਰੀ ਹੁੰਦੀ ਹੈ।',
      hi: 'वह हिरन जिसकी नाभि में सुगंधित कस्तूरी विद्यमान होती है।',
      en: 'The deer whose own navel contains the celestial fragrant musk.'
    },
    mysticalMeaning: {
      pb: 'ਇਨਸਾਨ ਦਾ ਪ੍ਰਤੀਕ, ਜੋ ਆਪਣੇ ਅੰਦਰ ਵੱਸਦੇ ਪਰਮਾਤਮਾ ਤੋਂ ਅਣਜਾਣ ਹੋ ਕੇ ਬਾਹਰ ਜੰਗਲਾਂ, ਮੰਦਰਾਂ ਅਤੇ ਤੀਰਥਾਂ ਵਿੱਚ ਰੱਬ ਨੂੰ ਲੱਭਦਾ ਫਿਰਦਾ ਹੈ।',
      hi: 'अज्ञानी मनुष्य का रूपक, जो अपने ही अंतःकरण में विराजमान परमात्मा को न पहचानकर बाहर जंगलों, तीर्थों और कर्मकांडों में खोजता भटकता है।',
      en: 'A metaphor for human ignorance: wandering the outer world seeking the Divine who secretly dwells within the seeker\'s own heart.'
    },
    exampleSakhi: {
      text: 'ਕਸਤੂਰੀ ਕੁੰਡਲਿ ਬਸੈ, ਮ੍ਰਿਗ ਢੂੰਢੈ ਬਨ ਮਾਹਿ । ਐਸੇ ਘਟ ਘਟ ਰਾਮ ਹੈ, ਦੁਨੀਆ ਦੇਖੈ ਨਾਹਿ ॥',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਕਸਤੂਰੀ ਮ੍ਰਿਗ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'bijak',
    term: {
      pb: 'ਬੀਜਕ',
      hi: 'बीजक',
      en: 'Bijak (The Secret Spiritual Map)'
    },
    category: 'satguru',
    literalMeaning: {
      pb: 'ਗੁਪਤ ਖਜ਼ਾਨੇ ਦਾ ਨਕਸ਼ਾ ਜਾਂ ਸੂਚੀ-ਪੱਤਰ।',
      hi: 'गुप्त खजाने का गुप्त नक्शा, बीज-रूप दस्तावेज या सूची।',
      en: 'A secret chart or cipher that reveals hidden buried treasure.'
    },
    mysticalMeaning: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ ਦਾ ਮੁੱਖ ਗ੍ਰੰਥ, ਜੋ ਮਨੁੱਖੀ ਆਤਮਾ ਨੂੰ ਕਾਲ-ਮਾਇਆ ਦੇ ਜਾਲ ਵਿੱਚੋਂ ਕੱਢ ਕੇ ਅੰਦਰਲੇ ਅਮਰ ਆਤਮ-ਖਜ਼ਾਨੇ ਦਾ ਸੱਚਾ ਭੇਤ ਦੱਸਦਾ ਹੈ।',
      hi: 'कबीर साहेब की प्रमाणिक मूल वाणी का पवित्र ग्रंथ जो संसार रूपी भूलभुलैया में छिपे हुए आत्म-धन का मार्ग प्रकाशित करता है।',
      en: 'The foundational holy scripture of Kabir Saheb that discloses the encrypted spiritual treasure of liberation and inner realization.'
    },
    exampleSakhi: {
      text: 'ਬੀਜਕ ਬਿਤ ਬਤਾਵਈ, ਜੋ ਧਨ ਗੁਪਤਾ ਹੋਇ । ਸਬਦ ਬਤਾਵੈ ਜੀਵ ਕੋ, ਬੂਝੈ ਬਿਰਲਾ ਕੋਇ ॥',
      source: 'ਕਬੀਰ ਬੀਜਕ · ਸਾਖੀ ੧'
    }
  },
  {
    id: 'saar-shabad',
    term: {
      pb: 'ਸਾਰ ਸ਼ਬਦ',
      hi: 'सार शब्द',
      en: 'Saar Shabad (The Essence Word)'
    },
    category: 'satguru',
    literalMeaning: {
      pb: 'ਸਭ ਤੋਂ ਸ੍ਰੇਸ਼ਠ, ਤੱਤ-ਰੂਪ ਅਤੇ ਅਸਲੀ ਸ਼ਬਦ।',
      hi: 'समस्त शब्दों का मूल, तत्व-रूप और अविनाशी परम शब्द।',
      en: 'The primordial, unperishable essence of the divine Word.'
    },
    mysticalMeaning: {
      pb: 'ਉਹ ਅਕੱਥ ਅਤੇ ਅਨਾਹਤ ਸਤਯਨਾਮ ਜੋ ਬੋਲਣ ਅਤੇ ਲਿਖਣ ਤੋਂ ਪਰ੍ਹੇ ਹੈ। ਇਹ ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਅੰਤਰ-ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਗਟ ਹੁੰਦਾ ਹੈ ਅਤੇ ਜੀਵ ਨੂੰ ਕਾਲ-ਚੱਕਰ ਤੋਂ ਸਦਾ ਲਈ ਮੁਕਤ ਕਰ ਦਿੰਦਾ ਹੈ।',
      hi: 'अविनाशी सत्यनाम जो वर्णों और अक्षरों की सीमा से परे है। सतगुरु की कृपा से अंतःकरण में प्रकट होकर यह आत्मा को जन्म-मरण के चक्र से मुक्त कर देता है।',
      en: 'The transcendent Word beyond letters and vocalization that liberates the soul from the wheel of transmigration by the grace of the Satguru.'
    },
    exampleSakhi: {
      text: 'ਸਾਰ ਸਬਦ ਜਾਨੈ ਬਿਨਾ, ਕਾਗਾ ਹੰਸ ਨ ਹੋਇ ।',
      source: 'ਕਬੀਰ ਸਾਗਰ · ਗਿਆਨ ਸਾਗਰ'
    }
  },
  {
    id: 'kaal-niranjan',
    term: {
      pb: 'ਕਾਲ / ਨਿਰੰਜਨ',
      hi: 'काल / निरंजन',
      en: 'Kaal / Niranjan'
    },
    category: 'mind-maya',
    literalMeaning: {
      pb: 'ਸਮਾਂ, ਮੌਤ, ਜਾਂ ਮਾਇਆ ਦਾ ਸੂਖਮ ਸੁਆਮੀ।',
      hi: 'समय, मृत्यु अथवा तीन लोकों का स्वामी।',
      en: 'Time, cosmic ruler of the three perishable realms.'
    },
    mysticalMeaning: {
      pb: 'ਤਿੰਨਾਂ ਲੋਕਾਂ ਦਾ ਨਿਆਮਕ ਜੋ ਜੀਵਾਂ ਨੂੰ ਕਰਮਾਂ ਦੇ ਜਾਲ ਅਤੇ ਆਵਾਗਵਨ (ਜਨਮ-ਮਰਨ) ਵਿੱਚ ਉਲਝਾਈ ਰੱਖਦਾ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਜੀਵ ਨੂੰ ਇਸ ਕਾਲ ਦੇ ਜਾਲ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸਤਿਲੋਕ (ਅਮਰ ਲੋਕ) ਜਾਣ ਦੀ ਸਿੱਖਿਆ ਦਿੰਦੇ ਹਨ।',
      hi: 'ब्रह्मांड का वह नियम जो जीवों को कर्म-बंधन और पुनर्जन्म के चक्र में बांधे रखता है। कबीर साहेब इस काल-जाल से परे अमर सत्यलोक जाने का मार्ग बताते हैं।',
      en: 'The cosmic entity of time and karma that binds embodied souls within the mortal cycle until liberated by the True Word.'
    },
    exampleSakhi: {
      text: 'ਕਾਲ ਪਾਯ ਜਗ ਉਪਜੈ, ਕਾਲ ਪਾਯ ਬਿਨਸਾਇ । ਕਬੀਰ ਸੋਈ ਨਿਬਹੈ, ਜੋ ਸਬਦ ਸਮਾਇ ॥',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਕਾਲ ਕੋ ਅੰਗ'
    }
  },
  {
    id: 'ulatbaasi',
    term: {
      pb: 'ਉਲਟ-ਬਾਂਸੀ',
      hi: 'उलटबांसी',
      en: 'Ulatbaasi (Inverted Mystical Paradox)'
    },
    category: 'satguru',
    literalMeaning: {
      pb: 'ਉਲਟੀ ਕਹੀ ਗਈ ਗੱਲ ਜਾਂ ਵਿਰੋਧਾਭਾਸੀ ਬਾਣੀ।',
      hi: 'उल्टी कही गई बात, विरोधाभासी रहस्यमयी काव्य-शैली।',
      en: 'Inverted, paradoxical mystical verse designed to shatter ordinary conceptual logic.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਰਹੱਸਮਈ ਸ਼ੈਲੀ (ਜਿਵੇਂ: "ਇਕ ਅਚੰਭਾ ਦੇਖਿਆ ਰੇ ਭਾਈ, ਠਾਢਾ ਸਿੰਘ ਚਰਾਵੈ ਗਾਈ") ਜਿਸਦਾ ਬਾਹਰੀ ਅਰਥ ਅਸੰਭਵ ਲੱਗਦਾ ਹੈ, ਪਰ ਅੰਦਰੂਨੀ ਅਧਿਆਤਮਿਕ ਅਰਥ ਵਿੱਚ ਮਨ, ਆਤਮਾ ਅਤੇ ਇੰਦਰੀਆਂ ਦੇ ਉਲਟਣ ਦਾ ਗੂੜ੍ਹ ਭੇਤ ਹੁੰਦਾ ਹੈ।',
      hi: 'कबीर साहेब की वह गूढ़ शैली जिसका शाब्दिक अर्थ असंभव प्रतीत होता है, किंतु आध्यात्मिक दृष्टि से वह मन को विषयों से उलटकर अंतर्मुखी करने का रहस्य समझाती है।',
      en: 'Mystical paradoxical allegories (e.g. "A tree rooted in the sky") that shock linear logic to awaken the inward eye toward spiritual reversal.'
    },
    exampleSakhi: {
      text: 'ਕਬੀਰਾ ਖੜਾ ਬਜ਼ਾਰ ਮੇਂ, ਮਾਂਗੈ ਸਬਕੀ ਖੈਰ । ਨਾ ਕਾਹੂ ਸੇ ਦੋਸਤੀ, ਨਾ ਕਾਹੂ ਸੇ ਬੈਰ ॥',
      source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਉਲਟਬਾਂਸੀ'
    }
  },
  {
    id: 'sahaj',
    term: {
      pb: 'ਸਹਜ',
      hi: 'सहज',
      en: 'Sahaj (Natural Spiritual State)'
    },
    category: 'conduct',
    literalMeaning: {
      pb: 'ਸੁਭਾਵਿਕ, ਸਰਲ, ਜਾਂ ਬਿਨਾਂ ਕਿਸੇ ਕਠਿਨ ਹੱਠ-ਕਰਮ ਦੇ।',
      hi: 'स्वाभाविक, सरल अथवा बिना किसी कृत्रिम हठ के।',
      en: 'Spontaneous, effortless, natural state of being.'
    },
    mysticalMeaning: {
      pb: 'ਬਿਨਾਂ ਸਰੀਰ ਨੂੰ ਕਸ਼ਟ ਦਿੱਤੇ ਜਾਂ ਦਿਖਾਵਾ ਕੀਤੇ, ਸੰਸਾਰ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਹੀ ਮਨ ਦਾ ਪਰਮਾਤਮਾ ਨਾਲ ਸਹਿਜੇ ਹੀ ਜੁੜ ਜਾਣਾ। "ਸਹਜ ਸਮਾਧੀ" ਸਭ ਤੋਂ ਉੱਚੀ ਅਵਸਥਾ ਹੈ।',
      hi: 'कठोर हठयोग या पाखंड के बिना, गृहस्थ व कर्म करते हुए स्वाभाविक रूप से मन का परमात्मा में लीन रहना ही "सहज समाधि" है।',
      en: 'The effortless communion of the soul with the Divine in the midst of daily living, without extreme mortification or artificial pretense.'
    },
    exampleSakhi: {
      text: 'ਸਾਧੋ, ਸਹਜ ਸਮਾਧਿ ਭਲੀ । ਸਾਂਈਂ ਸੋ ਮਿਲਨ ਕੀ ਰੀਤਿ ਨਿਰਾਲੀ ॥',
      source: 'ਕਬੀਰ ਪਦਾਵਲੀ'
    }
  },
  {
    id: 'bandagi',
    term: {
      pb: 'ਬੰਦਗੀ (ਸਾਹੇਬ ਬੰਦਗੀ)',
      hi: 'बंदगी (साहेब बंदगी)',
      en: 'Bandagi (Egoless Salutation)'
    },
    category: 'conduct',
    literalMeaning: {
      pb: 'ਸੇਵਾ, ਗੁਲਾਮੀ, ਜਾਂ ਨਿਮਰਤਾ ਸਹਿਤ ਪ੍ਰਣਾਮ।',
      hi: 'प्रणाम, आत्म-समर्पण अथवा अभिवादन।',
      en: 'Humble bowing, reverent greeting, and surrender of the ego.'
    },
    mysticalMeaning: {
      pb: 'ਕਬੀਰ ਪੰਥ ਦਾ ਪਵਿੱਤਰ ਅਭਿਵਾਦਨ। ਜਦੋਂ ਇੱਕ ਸਾਧਕ ਦੂਜੇ ਸਾਧਕ ਦੇ ਅੰਦਰ ਵੱਸਦੀ ਦਿਵਯ ਜੋਤਿ (ਸਾਹੇਬ) ਨੂੰ ਨਤਮਸਤਕ ਹੋ ਕੇ ਆਪਣਾ ਅਹੰਕਾਰ ਮਿਟਾ ਦਿੰਦਾ ਹੈ, ਤਾਂ ਉਸਨੂੰ "ਸਾਹੇਬ ਬੰਦਗੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'कबीर पंथ का परम पावन अभिवादन। प्रत्येक प्राणी के अंतःकरण में विराजमान चैतन्य सत्यस्वरूप साहेब को शीश झुकाकर अहंकार विसर्जन करना ही "साहेब बंदगी" है।',
      en: 'The sacred greeting of Kabir followers acknowledging the divine Satguru dwelling within the heart of every soul while dissolving the ego.'
    },
    exampleSakhi: {
      text: 'ਬੰਦਾ ਸੋਈ ਜੋ ਬੰਦਗੀ ਕਰੈ, ਗਰਬ ਗੁਮਾਨ ਨ ਆਨੈ ।',
      source: 'ਕਬੀਰ ਬੀਜਕ · ਸਬਦ'
    }
  }
];

export const ShabdKosha: React.FC<ShabdKoshaProps> = ({
  language,
  onClose,
  onOpenSwadhyay,
  onOpenBlessing
}) => {
  const { theme } = useAppTheme();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Expand to Context state
  const [expandedContextId, setExpandedContextId] = useState<string | null>(null);
  const [contextResults, setContextResults] = useState<Record<string, VerseContextResult>>({});
  const [activeTooltip, setActiveTooltip] = useState<{
    entry: KoshaEntry;
    context: VerseContextResult;
    rect: { top: number; left: number; bottom: number; right: number };
  } | null>(null);

  const categories = [
    { id: 'all', label: { pb: 'ਸਾਰੇ ਸ਼ਬਦ (All)', hi: 'समस्त शब्द (सभी)', en: 'All Terms' } },
    { id: 'kaal-jeevat', label: { pb: 'ਕਾਲ ਤੇ ਜੀਵਤ ਮ੍ਰਿਤਕ ਅੰਗ', hi: 'काल व जीवत मृतक अंग', en: 'Kaal & Jeevat Mritak Angs' } },
    { id: 'mind-maya', label: { pb: 'ਮਨ, ਮਾਇਆ ਤੇ ਕਾਲ', hi: 'मन, माया एवं काल', en: 'Mind, Maya & Time' } },
    { id: 'conduct', label: { pb: 'ਆਚਰਣ ਤੇ ਜੀਵਤ ਮ੍ਰਿਤਕ', hi: 'आचरण व जीवत-मृतक', en: 'Conduct & Ego-Death' } },
    { id: 'yoga-inner', label: { pb: 'ਅੰਦਰੂਨੀ ਸਾਧਨਾ ਤੇ ਯੋਗ', hi: 'आंतरिक साधना व योग', en: 'Inner Sadhana & Yogic' } },
    { id: 'metaphor', label: { pb: 'ਰੂਹਾਨੀ ਪ੍ਰਤੀਕ (Metaphors)', hi: 'आध्यात्मिक प्रतीक', en: 'Mystical Metaphors' } },
    { id: 'satguru', label: { pb: 'ਸਤਿਗੁਰੂ ਤੇ ਬਾਣੀ', hi: 'सतगुरु एवं वाणी', en: 'Satguru & Truth' } }
  ];

  const handleCopy = (entry: KoshaEntry) => {
    const text = `।। ${entry.term[language]} ।।\n\nਸ਼ਾਬਦਿਕ ਅਰਥ: ${entry.literalMeaning[language]}\nਰੂਹਾਨੀ ਅਰਥ: ${entry.mysticalMeaning[language]}\nਉਦਾਹਰਣ ਸਾਖੀ:\n"${entry.exampleSakhi.text}"\n(${entry.exampleSakhi.source})\n\n।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।`;
    navigator.clipboard.writeText(text);
    setCopiedId(entry.id);
    sacredHaptics.lightTap();
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getResolvedContext = (entry: KoshaEntry): VerseContextResult => {
    if (contextResults[entry.id]) {
      return contextResults[entry.id];
    }
    const res = fetchVerseContextForTerm(
      {
        word: entry.term.hi,
        punjabi: entry.term.pb,
        transliteration: entry.term.en,
        esotericMeaning: {
          hi: entry.mysticalMeaning.hi,
          pb: entry.mysticalMeaning.pb,
          en: entry.mysticalMeaning.en,
        },
        literalMeaning: {
          hi: entry.literalMeaning.hi,
          pb: entry.literalMeaning.pb,
          en: entry.literalMeaning.en,
        },
        keyVerseSnippet: {
          text: entry.exampleSakhi.text,
          source: entry.exampleSakhi.source,
        },
      },
      language,
      true
    );
    setContextResults(prev => ({ ...prev, [entry.id]: res }));
    return res;
  };

  const handleToggleContext = (entry: KoshaEntry) => {
    sacredHaptics.lightTap();
    if (expandedContextId === entry.id) {
      setExpandedContextId(null);
    } else {
      getResolvedContext(entry);
      setExpandedContextId(entry.id);
    }
  };

  const handleTermTap = (e: React.MouseEvent, entry: KoshaEntry) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    const rect = e.currentTarget.getBoundingClientRect();
    const ctx = getResolvedContext(entry);
    setActiveTooltip({
      entry,
      context: ctx,
      rect: {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
      }
    });
  };

  const handleSpeakVerse = (text: string) => {
    sacredHaptics.lightTap();
    speechReciter.speak(text, language);
  };

  const filteredEntries = GLOSSARY_DB.filter(entry => {
    let matchesCat = activeCategory === 'all';
    if (activeCategory === 'kaal-jeevat') {
      matchesCat = entry.associatedAng !== undefined || entry.id.includes('kaal') || entry.id.includes('mritak');
    } else if (activeCategory !== 'all') {
      matchesCat = entry.category === activeCategory;
    }

    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      entry.term.pb.toLowerCase().includes(q) ||
      entry.term.hi.toLowerCase().includes(q) ||
      entry.term.en.toLowerCase().includes(q) ||
      entry.mysticalMeaning[language].toLowerCase().includes(q) ||
      entry.literalMeaning[language].toLowerCase().includes(q) ||
      entry.exampleSakhi.text.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-6 space-y-6">
      {/* Standardized Sacred Top Bar (Satyanaam ONLY) */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Top Banner */}
      <div 
        className="p-5 sm:p-7 rounded-3xl border shadow-md relative overflow-hidden"
        style={{ 
          backgroundColor: theme.stepActiveBg, 
          borderColor: theme.accentGold 
        }}
      >
        {/* Navigation & Close Button Header Bar */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-amber-200/50 mb-3">
          <div className="flex items-center gap-2">
            {onClose && (
              <button
                onClick={() => {
                  sacredHaptics.lightTap();
                  onClose();
                }}
                className="p-2 rounded-xl bg-amber-100/80 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-amber-200 transition flex items-center gap-1.5 text-xs font-bold font-serif cursor-pointer shadow-xs"
                title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
                </span>
              </button>
            )}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300">
              <BookMarked className="w-4 h-4 text-amber-700" />
              <span>
                {language === 'pb' ? 'ਸੰਧੁੱਕੜੀ ਸ਼ਬਦਕੋਸ਼' : language === 'en' ? 'Sacred Kabir Lexicon' : 'संधुक्कड़ी शब्दकोश'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === 'pb' ? 'ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਅਰਥ' : language === 'en' ? 'Mystical Terminology' : 'गूढ़ आध्यात्मिक अर्थ'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਕੋਸ਼ (ਸੰਧੁੱਕੜੀ ਸ਼ਬਦਾਰਥ)' 
                : language === 'en' 
                ? 'Satguru Kabir Shabd-Amrit Kosha (Mystical Glossary)' 
                : 'सतगुरु कबीर शब्द-अमृत कोश (संधुक्कड़ी शब्दार्थ)'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl font-medium">
              {language === 'pb'
                ? 'ਕਬੀਰ ਬਾਣੀ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਗੂੜ੍ਹ ਰਹੱਸਮਈ ਸ਼ਬਦਾਂ—ਜਿਵੇਂ ਅਨਹਦ ਨਾਦ, ਸੁਰਤਿ-ਨਿਰਤਿ, ਤ੍ਰਿਕੁਟੀ, ਹੰਸ, ਬੀਜਕ—ਦਾ ਪਾਵਨ ਸਰਲ ਅਰਥ।'
                : language === 'en'
                ? 'Mystical exposition of esoteric terms in Satguru Kabir Saheb\'s verses: Anhad Naad, Surati, Trikuti, Hans, and Bijak.'
                : 'सतगुरु कबीर वाणी के गूढ़ आध्यात्मिक शब्दों—जैसे अनहद नाद, सुरति-निरति, त्रिकुटी, हंस, बीजक—का सरल एवं प्रामाणिक भावार्थ।'}
            </p>
          </div>

          <div className="text-xs font-bold text-amber-900 dark:text-amber-300 font-serif shrink-0">
            {filteredEntries.length} {language === 'pb' ? 'ਸ਼ਬਦ ਉਪਲਬਧ' : language === 'en' ? 'Terms' : 'शब्द उपलब्ध'}
          </div>
        </div>
      </div>

      {/* Search Bar & Categories */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'pb'
                ? 'ਸ਼ਬਦ ਜਾਂ ਅਰਥ ਖੋਜੋ (ਜਿਵੇਂ: ਅਨਹਦ, ਸੁਰਤਿ, ਹੰਸ, ਬੀਜਕ)...'
                : 'शब्द अथवा अर्थ खोजें (जैसे: अनहद, सुरति, हंस, बीजक)...'
            }
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-amber-50/70 dark:bg-stone-900/40 rounded-2xl border border-amber-200/50">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sacredHaptics.lightTap();
                  setActiveCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-amber-100/60'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEntries.map((entry, idx) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            className="p-5 rounded-3xl border shadow-xs space-y-3.5 flex flex-col justify-between"
            style={{ 
              backgroundColor: theme.cardBg, 
              borderColor: theme.cardBorder 
            }}
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-2 border-b pb-2.5 border-stone-100 dark:border-stone-800">
                <div 
                  onClick={(e) => handleTermTap(e, entry)}
                  className="cursor-pointer group"
                  title={language === 'pb' ? 'ਟੂਲਟਿਪ ਤੇ ਮੂਲ ਸੰਦਰਭ ਵੇਖੋ' : 'टूलटिप व मूल संदर्भ देखें (Tap for Tooltip & Context)'}
                >
                  <h3 
                    style={{ color: theme.sacredMaroon }}
                    className="text-lg font-black font-serif tracking-tight group-hover:underline flex items-center gap-1.5"
                  >
                    <span>{language === 'pb' ? entry.term.pb : entry.term.hi}</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 opacity-60 group-hover:opacity-100 transition" />
                  </h3>
                  <span className="text-[11px] text-stone-500 font-sans font-medium">
                    {entry.term.en}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(entry)}
                  className="p-1.5 rounded-xl text-stone-500 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-stone-800 transition cursor-pointer"
                  title="Copy Entry"
                >
                  {copiedId === entry.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Literal Meaning */}
              <div className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                <span className="font-bold text-stone-800 dark:text-stone-200 mr-1.5">
                  {language === 'pb' ? 'ਸ਼ਾਬਦਿਕ ਅਰਥ:' : language === 'en' ? 'Literal Meaning:' : 'शाब्दिक अर्थ:'}
                </span>
                {entry.literalMeaning[language]}
              </div>

              {/* Mystical Meaning */}
              <div 
                className="p-3.5 rounded-2xl border space-y-1"
                style={{ 
                  backgroundColor: theme.stepActiveBg,
                  borderColor: theme.accentGold 
                }}
              >
                <div className="flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-amber-700" />
                  <span 
                    style={{ color: theme.sacredMaroon }}
                    className="text-[11px] font-black uppercase tracking-wider font-serif"
                  >
                    {language === 'pb' ? 'ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਅਰਥ' : language === 'en' ? 'Esoteric Spiritual Meaning' : 'गूढ़ आध्यात्मिक अर्थ'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 font-serif leading-relaxed">
                  {entry.mysticalMeaning[language]}
                </p>
              </div>

              {/* Example Sakhi */}
              <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-stone-900/50 border border-amber-200/50 text-center space-y-1">
                <p 
                  style={{ color: theme.sacredMaroon }}
                  className="text-xs font-bold font-serif leading-relaxed"
                >
                  "{entry.exampleSakhi.text}"
                </p>
                <div className="text-[10px] text-stone-500 font-serif">
                  {entry.exampleSakhi.source}
                </div>
              </div>

              {/* ==========================================================
                  EXPAND TO CONTEXT: ORIGINAL VERSE FROM KAAL / JEEVAT MRITAK ANG
                 ========================================================== */}
              <div className="pt-2 border-t border-amber-500/20">
                <button
                  type="button"
                  onClick={() => handleToggleContext(entry)}
                  style={{
                    backgroundColor: expandedContextId === entry.id ? 'rgba(217, 119, 6, 0.16)' : 'rgba(217, 119, 6, 0.08)',
                    color: theme.sacredMaroon,
                    borderColor: 'rgba(217, 119, 6, 0.3)',
                  }}
                  className="w-full py-2 px-3 rounded-2xl border text-xs font-bold flex items-center justify-between hover:bg-amber-500/20 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Scroll className="w-4 h-4 text-amber-700" />
                    <span>
                      {expandedContextId === entry.id
                        ? (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਸੰਦਰਭ ਸਮੇਟੋ' : language === 'en' ? 'Collapse Context' : 'मूल वाणी संदर्भ समेटें')
                        : (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਸੰਦਰਭ ਵੇਖੋ (Expand to Context)' : language === 'en' ? 'Expand to Context (Source Verse)' : 'मूल वाणी संदर्भ देखें (Expand to Context)')}
                    </span>
                  </div>
                  {expandedContextId === entry.id ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-amber-600" />}
                </button>

                <AnimatePresence>
                  {expandedContextId === entry.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2.5 p-3.5 rounded-2xl border bg-amber-500/10 border-amber-500/30 space-y-2.5 text-left"
                    >
                      {(() => {
                        const ctx = getResolvedContext(entry);
                        return (
                          <>
                            <div className="flex items-center justify-between gap-1 text-[11px] font-mono font-bold text-amber-800 dark:text-amber-300">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <Quote className="w-3.5 h-3.5 text-amber-600" />
                                <span>{ctx.sourceTitle}</span>
                                {ctx.collectionType === 'kaal-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                                    {language === 'pb' ? '🚩 ਕਾਲ ਕੋ ਅੰਗ' : language === 'en' ? '🚩 Kaal Ko Ang' : '🚩 काल को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'jeevat-mritak-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                                    {language === 'pb' ? '🌿 ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ' : language === 'en' ? '🌿 Jeevat Mritak Ko Ang' : '🌿 जीवत मृतक को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'swaarath-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
                                    {language === 'pb' ? '💎 ਸਵਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? '💎 Swaarath Ko Ang' : '💎 स्वारथ को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'parmaarth-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-violet-500/20 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                                    {language === 'pb' ? '🌸 ਪਰਮਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? '🌸 Parmaarth Ko Ang' : '🌸 परमार्थ को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'man-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30">
                                    {language === 'pb' ? '🧠 ਮਨ ਕੋ ਅੰਗ' : language === 'en' ? '🧠 Man Ko Ang' : '🧠 मन को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'maya-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                                    {language === 'pb' ? '✨ ਮਾਇਆ ਕੋ ਅੰਗ' : language === 'en' ? '✨ Maya Ko Ang' : '✨ माया को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'moh-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                                    {language === 'pb' ? '⛓️ ਮੋਹ ਕੋ ਅੰਗ' : language === 'en' ? '⛓️ Moh Ko Ang' : '⛓️ मोह को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'kaam-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-red-600/20 text-red-900 dark:text-red-300 border border-red-600/30">
                                    {language === 'pb' ? '🔥 ਕਾਮ ਕੋ ਅੰਗ' : language === 'en' ? '🔥 Kaam Ko Ang' : '🔥 काम को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'krodh-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-orange-600/20 text-orange-900 dark:text-orange-300 border border-orange-600/30">
                                    {language === 'pb' ? '⚡ ਕ੍ਰੋਧ ਕੋ ਅੰਗ' : language === 'en' ? '⚡ Krodh Ko Ang' : '⚡ क्रोध को अंग'}
                                  </span>
                                )}
                                {ctx.collectionType === 'lobh-ko-ang' && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-yellow-600/20 text-yellow-900 dark:text-yellow-300 border border-yellow-600/30">
                                    {language === 'pb' ? '💰 ਲੋਭ ਕੋ ਅੰਗ' : language === 'en' ? '💰 Lobh Ko Ang' : '💰 लोभ को अंग'}
                                  </span>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => handleSpeakVerse(ctx.verseText)}
                                className="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center gap-1 transition cursor-pointer"
                                title="मूल वाणी श्रवण करें"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-serif">{language === 'pb' ? 'ਸਰਵਣ' : language === 'en' ? 'Listen' : 'श्रवण'}</span>
                              </button>
                            </div>

                            {/* Verse Text Couplet */}
                            <div className="p-3 rounded-xl bg-white/80 dark:bg-black/40 border border-amber-500/25">
                              <p className="font-serif font-black text-xs sm:text-sm leading-relaxed text-amber-950 dark:text-amber-100 whitespace-pre-line text-center italic">
                                "{ctx.verseText}"
                              </p>
                              {ctx.transliteration && language === 'en' && (
                                <p className="text-[10px] font-sans text-stone-500 dark:text-stone-400 text-center mt-1">
                                  {ctx.transliteration}
                                </p>
                              )}
                            </div>

                            {/* Spiritual Context Bhavarth */}
                            {ctx.bhavarth && (
                              <div className="text-[11px] font-serif leading-relaxed text-stone-700 dark:text-stone-300 space-y-1">
                                <span className="font-bold text-amber-800 dark:text-amber-400 block text-[10px] uppercase tracking-wider">
                                  ✨ {language === 'pb' ? 'ਗੂੜ੍ਹ ਅਰਥ ਤੇ ਸੰਦਰਭ:' : language === 'en' ? 'Spiritual Context:' : 'गूढ़ आध्यात्मिक संदर्भ व भाव:'}
                                </span>
                                <p className="italic">
                                  {ctx.bhavarth}
                                </p>
                              </div>
                            )}

                            {/* Study in Swadhyay button */}
                            {onOpenSwadhyay && (
                              <button
                                type="button"
                                onClick={() => onOpenSwadhyay(entry.term.hi)}
                                className="w-full py-1.5 px-3 rounded-xl text-[11px] font-bold bg-amber-600 text-white hover:bg-amber-700 transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>{language === 'pb' ? 'ਇਸ ਸਾਖੀ ਦਾ ਸਵਾਧਿਆਏ ਕਰੋ' : language === 'en' ? 'Contemplate in Swadhyay' : 'इस साखी का स्वाध्याय करें'}</span>
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Actions */}
            {onOpenSwadhyay && (
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-end">
                <button
                  onClick={() => onOpenSwadhyay(entry.term.hi)}
                  className="text-[11px] font-bold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'pb' ? 'ਸਵਾਧਿਆਏ ਵਿੱਚ ਖੋਜੋ' : language === 'en' ? 'Search in Swadhyay' : 'स्वाध्याय में खोजें'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Close / Back Button */}
      {onClose && (
        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={() => {
              sacredHaptics.lightTap();
              onClose();
            }}
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="px-6 py-2.5 rounded-2xl border font-bold text-xs hover:scale-105 transition flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
          </button>
        </div>
      )}

      {/* ==========================================================
          SMART TOOLTIP POPOVER WITH 'EXPAND TO CONTEXT' IN SHABDKOSHA
         ========================================================== */}
      <AnimatePresence>
        {activeTooltip && (
          <div 
            className="fixed inset-0 z-[180] pointer-events-auto bg-black/30 backdrop-blur-[2px] flex items-center justify-center p-4"
            onClick={() => setActiveTooltip(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.accentGold,
                color: theme.textPrimary,
                boxShadow: '0 20px 50px -8px rgba(180, 83, 9, 0.4), 0 10px 25px rgba(0,0,0,0.15)',
              }}
              className="w-full max-w-lg rounded-3xl border-2 p-5 sm:p-6 shadow-2xl overflow-y-auto max-h-[88vh] space-y-4 text-left relative"
            >
              {/* Tooltip Header */}
              <div className="flex items-center justify-between gap-3 border-b pb-3 border-amber-500/20">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                    {language === 'pb' ? 'ਸੰਧੁੱਕੜੀ ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Sacred Glossary' : 'संधुक्कड़ी शब्दार्थ'}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-amber-700/80 dark:text-amber-400/80">
                    {activeTooltip.entry.term.en}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSpeakVerse(`${activeTooltip.entry.term.hi}. ${activeTooltip.entry.literalMeaning[language]}. ${activeTooltip.entry.mysticalMeaning[language]}`)}
                    className="p-1.5 rounded-lg hover:bg-amber-500/15 text-amber-700 dark:text-amber-300 transition cursor-pointer"
                    title="उच्चारण सुनें"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(null)}
                    className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-stone-500 dark:text-stone-400 transition cursor-pointer"
                    title="बंद करें"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Term Title & Transliteration */}
              <div>
                <h3 
                  style={{ color: theme.sacredMaroon }}
                  className="text-xl sm:text-2xl font-black font-serif tracking-tight"
                >
                  {language === 'pb' ? activeTooltip.entry.term.pb : activeTooltip.entry.term.hi}
                </h3>
                <p className="text-xs text-stone-500 font-sans mt-0.5">
                  {activeTooltip.entry.term.en}
                </p>
              </div>

              {/* Meanings */}
              <div className="space-y-2 text-xs sm:text-sm font-serif">
                <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-stone-900/40 border border-amber-200/40">
                  <span className="font-bold text-stone-800 dark:text-stone-200 mr-1.5">
                    {language === 'pb' ? 'ਸ਼ਾਬਦਿਕ ਅਰਥ:' : language === 'en' ? 'Literal:' : 'शाब्दिक अर्थ:'}
                  </span>
                  <span className="text-stone-700 dark:text-stone-300">
                    {activeTooltip.entry.literalMeaning[language]}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <span className="font-bold text-amber-900 dark:text-amber-200 block text-xs uppercase tracking-wider mb-1">
                    ✨ {language === 'pb' ? 'ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਅਰਥ:' : language === 'en' ? 'Esoteric Meaning:' : 'गूढ़ आध्यात्मिक अर्थ:'}
                  </span>
                  <p className="text-stone-900 dark:text-stone-100 font-semibold leading-relaxed">
                    {activeTooltip.entry.mysticalMeaning[language]}
                  </p>
                </div>
              </div>

              {/* EXPAND TO CONTEXT: DIRECT ORIGINAL SCRIPTURAL SOURCE VERSE */}
              <div className="p-4 rounded-2xl border-2 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/40 space-y-3">
                <div className="flex items-center justify-between gap-1 text-[11px] font-mono font-bold text-amber-800 dark:text-amber-300">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Quote className="w-3.5 h-3.5 text-amber-600" />
                    <span>{activeTooltip.context.sourceTitle}</span>
                    {activeTooltip.context.collectionType === 'kaal-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                        {language === 'pb' ? '🚩 ਕਾਲ ਕੋ ਅੰਗ' : language === 'en' ? '🚩 Kaal Ko Ang' : '🚩 काल को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'jeevat-mritak-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                        {language === 'pb' ? '🌿 ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ' : language === 'en' ? '🌿 Jeevat Mritak Ko Ang' : '🌿 जीवत मृतक को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'swaarath-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
                        {language === 'pb' ? '💎 ਸਵਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? '💎 Swaarath Ko Ang' : '💎 स्वारथ को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'parmaarth-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-violet-500/20 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                        {language === 'pb' ? '🌸 ਪਰਮਾਰਥ ਕੋ ਅੰਗ' : language === 'en' ? '🌸 Parmaarth Ko Ang' : '🌸 परमार्थ को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'man-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30">
                        {language === 'pb' ? '🧠 ਮਨ ਕੋ ਅੰਗ' : language === 'en' ? '🧠 Man Ko Ang' : '🧠 मन को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'maya-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                        {language === 'pb' ? '✨ ਮਾਇਆ ਕੋ ਅੰਗ' : language === 'en' ? '✨ Maya Ko Ang' : '✨ माया को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'moh-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-500/30">
                        {language === 'pb' ? '⛓️ ਮੋਹ ਕੋ ਅੰਗ' : language === 'en' ? '⛓️ Moh Ko Ang' : '⛓️ मोह को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'kaam-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-red-600/20 text-red-900 dark:text-red-300 border border-red-600/30">
                        {language === 'pb' ? '🔥 ਕਾਮ ਕੋ ਅੰਗ' : language === 'en' ? '🔥 Kaam Ko Ang' : '🔥 काम को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'krodh-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-orange-600/20 text-orange-900 dark:text-orange-300 border border-orange-600/30">
                        {language === 'pb' ? '⚡ ਕ੍ਰੋਧ ਕੋ ਅੰਗ' : language === 'en' ? '⚡ Krodh Ko Ang' : '⚡ क्रोध को अंग'}
                      </span>
                    )}
                    {activeTooltip.context.collectionType === 'lobh-ko-ang' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-serif font-black bg-yellow-600/20 text-yellow-900 dark:text-yellow-300 border border-yellow-600/30">
                        {language === 'pb' ? '💰 ਲੋਭ ਕੋ ਅੰਗ' : language === 'en' ? '💰 Lobh Ko Ang' : '💰 लोभ को अंग'}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSpeakVerse(activeTooltip.context.verseText)}
                    className="p-1 rounded-md hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center gap-1 transition cursor-pointer"
                    title="मूल वाणी श्रवण करें"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-serif">{language === 'pb' ? 'ਸਰਵਣ' : language === 'en' ? 'Listen' : 'श्रवण'}</span>
                  </button>
                </div>

                {/* Original Couplet Verse */}
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-black/50 border border-amber-500/30 shadow-xs">
                  <p className="font-serif font-black text-sm sm:text-base leading-relaxed text-amber-950 dark:text-amber-100 whitespace-pre-line text-center italic">
                    "{activeTooltip.context.verseText}"
                  </p>
                  {activeTooltip.context.transliteration && language === 'en' && (
                    <p className="text-[11px] font-sans text-stone-500 dark:text-stone-400 text-center mt-1.5">
                      {activeTooltip.context.transliteration}
                    </p>
                  )}
                </div>

                {/* Spiritual Context Bhavarth */}
                {activeTooltip.context.bhavarth && (
                  <div className="text-xs font-serif leading-relaxed text-stone-700 dark:text-stone-300 space-y-1">
                    <span className="font-bold text-amber-800 dark:text-amber-400 block text-[10px] uppercase tracking-wider">
                      ✨ {language === 'pb' ? 'ਮੂਲ ਅੰਗ ਸੰਦਰਭ ਤੇ ਰਹੱਸ:' : language === 'en' ? 'Original Source Context:' : 'मूल अंग संदर्भ व आध्यात्मिक भाव:'}
                    </span>
                    <p className="italic leading-relaxed">
                      {activeTooltip.context.bhavarth}
                    </p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-2">
                {onOpenSwadhyay && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTooltip(null);
                      onOpenSwadhyay(activeTooltip.entry.term.hi);
                    }}
                    className="flex-1 py-2 px-3 rounded-2xl text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === 'pb' ? 'ਸਵਾਧਿਆਏ ਵਿੱਚ ਖੋਜੋ' : language === 'en' ? 'Open in Swadhyay' : 'स्वाध्याय में खोजें'}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setActiveTooltip(null)}
                  className="py-2 px-4 rounded-2xl text-xs font-bold border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                >
                  {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
