import React, { useState, useRef, useMemo, Suspense, lazy } from 'react';
import { AnhadNaadVisualizer } from './AnhadNaadVisualizer';
import { SacredLoader } from './SacredLoader';

const EChartsUniverseVisualizer = lazy(() =>
  import('./EChartsUniverseVisualizer').then((m) => ({ default: m.EChartsUniverseVisualizer }))
);
import { 
  Compass, 
  ChevronRight, 
  ChevronDown, 
  Music, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  RotateCcw,
  Search,
  BookOpen,
  X,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface UniverseMapProps {
  language: Language;
  onClose?: () => void;
}

export interface UniverseAscentStage {
  id: string;
  stageNumber: number;
  realmType: 'anamilok' | 'satyaloka' | 'transition' | 'kaal';
  title: { hi: string; pb: string; en: string };
  region: { hi: string; pb: string; en: string };
  nature: { hi: string; pb: string; en: string };
  kabirSagarVerse: { hi: string; pb: string; en: string };
  soulExperience: { hi: string; pb: string; en: string };
  unlockedWith: { hi: string; pb: string; en: string };
  granthTeaching: { hi: string; pb: string; en: string };
}

// SACRED COSMIC HIERARCHY: ANAMI LOK (ABSOLUTE TOP) ➔ SATLOK ➔ ALAKH LOK ➔ AGAM LOK ➔ INTERMEDIATE ➔ 21 BRAHMANDS
export const SACRED_UNIVERSE_STAGES: UniverseAscentStage[] = [
  {
    id: 'stage-anami',
    stageNumber: 1,
    realmType: 'anamilok',
    title: {
      hi: 'अनामी लोक (अकह धाम — सर्वोच्च शिखर / सबसे ऊपर)',
      pb: 'ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਧਾਮ — ਸਰਵਉੱਚ ਸ਼ਿਖਰ / ਸਭ ਤੋਂ ਉੱਪਰ)',
      en: 'Anami Lok (The Supreme Nameless Pinnacle / Absolute Top)',
    },
    region: {
      hi: 'समस्त ब्रह्मांडों, अमरलोक और संपूर्ण अस्तित्व का सर्वोपरि अनादि शिखर (सबसे ऊपर)',
      pb: 'ਸਮੂਹ ਸ੍ਰਿਸ਼ਟੀ ਅਤੇ ਸਾਰੇ ਲੋਕਾਂ ਦਾ ਸਰਵਉੱਚ ਅਨਾਦਿ ਸ਼ਿਖਰ (ਸਭ ਤੋਂ ਉੱਪਰ)',
      en: 'The Ultimate Timeless Apex of All Creation & Existence',
    },
    nature: {
      hi: 'जहाँ न कोई नाम है, न रूप, न रेखा, न द्वैत। यह सकल चेतना का मूल उद्गम स्थल है। परम पिता अनामी पुरुष (सतपुरुष कबीर साहेब का सर्वोच्च अनादि स्वरूप) यहाँ अखण्ड सच्चिदानंद में विराजमान हैं।',
      pb: 'ਜਿੱਥੇ ਨਾ ਨਾਮ ਹੈ ਨਾ ਰੂਪ, ਸਿਰਫ਼ ਅਖੰਡ ਨਿਰਮਲ ਚੇਤਨਾ ਅਤੇ ਅਕਹ ਸੁੱਖ ਦਾ ਮਹਾਂ-ਸਾਗਰ ਹੈ।',
      en: 'Beyond name, form, attribute, or duality. The boundless ocean of unconditioned light and silence.',
    },
    kabirSagarVerse: {
      hi: 'अलख अगम की सीमा नाहीं, अनामी पुरुष तहाँ समानी। जहाँ न सूरज चाँद न पानी, अनामी पुरुष की अजब कहानी॥',
      pb: 'ਅਲਖ ਅਗਮ ਕੀ ਸੀਮਾ ਨਾਹੀਂ, ਅਨਾਮੀ ਪੁਰਸ਼ ਤਹਾਂ ਸਮਾਨੀ। ਜਹਾਂ ਨ ਸੂਰਜ ਚਾਂਦ ਨ ਪਾਨੀ, ਅਨਾਮੀ ਪੁਰਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ॥',
      en: 'Boundless are Alakh and Agam; the Nameless Purush is absorbed in the supreme beyond.',
    },
    soulExperience: {
      hi: 'परम कैवल्य मोक्ष — आत्मा अनामी पुरुष में पूर्णतः लीन होकर अमर, अखंड सच्चिदानंद स्वरूप बन जाती है।',
      pb: 'ਪਰਮ ਕੈਵਲਯ ਮੁਕਤੀ — ਆਤਮਾ ਅਨਾਮੀ ਪੁਰਸ਼ ਵਿੱਚ ਲੀਨ ਹੋ ਕੇ ਸਦਾ ਲਈ ਅਮਰ ਤੇ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Supreme Kaivalya Moksha — the soul completely dissolves into the Nameless Absolute.',
    },
    unlockedWith: {
      hi: 'परम पद में सहज विलीनीकरण एवं सतगुरु की चरम कृपा।',
      pb: 'ਪਰਮ ਪਦ ਵਿੱਚ ਸਹਿਜ ਸਮਾਧੀ ਤੇ ਸਤਿਗੁਰੂ ਦੀ ਪੂਰਨ ਦਇਆ।',
      en: 'Spontaneous dissolution into the Nameless Absolute through Supreme Grace.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (अमर सुख निधान): अनामी लोक ही समस्त हंसों का मूल उद्गम व अंतिम विश्राम स्थल है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਅਨਾਮੀ ਲੋਕ ਹੀ ਸਮੂਹ ਹੰਸਾਂ ਦਾ ਮੂਲ ਸੋਮਾ ਅਤੇ ਅੰਤਿਮ ਵਿਸ਼ਰਾਮ ਹੈ।',
      en: 'Kabir Sagar: Anami Lok is the original fountainhead and final resting place of all souls.',
    },
  },
  {
    id: 'stage-satlok',
    stageNumber: 2,
    realmType: 'satyaloka',
    title: {
      hi: 'सत्यलोक / सचखंड (सतपुरुष कबीर साहेब धाम)',
      pb: 'ਸਤਯਲੋਕ / ਸੱਚਖੰਡ (ਸਤਿਪੁਰੁਸ਼ ਕਬੀਰ ਸਾਹੇਬ ਧਾਮ)',
      en: 'Satlok / Satyaloka (Sachkhand - Satpurush Kabir Saheb)',
    },
    region: {
      hi: 'अमरलोक का मुख्य शाश्वत धाम — जहाँ एक-एक हंस का तेज करोड़ों सूर्यों से अधिक है',
      pb: 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਪ੍ਰਵੇਸ਼ ਧਾਮ — ਜਿੱਥੇ ਹੰਸ ਦਾ ਤੇਜ ਕ੍ਰੋੜਾਂ ਸੂਰਜਾਂ ਤੋਂ ਵੱਧ ਹੈ',
      en: 'The Eternal Abode of Satpurush Kabir Saheb',
    },
    nature: {
      hi: 'जहाँ न जन्म है, न मृत्यु, न काल, न माया, न कर्म। चारों ओर अमृत के मानसरोवर, कल्पवृक्ष और प्रेम का साम्राज्य है। सतपुरुष कबीर साहेब साक्षात विराजमान हैं।',
      pb: 'ਜਿੱਥੇ ਨਾ ਮੌਤ ਹੈ, ਨਾ ਮਾਇਆ, ਨਾ ਕਾਲ। ਸਤਿਪੁਰੁਸ਼ ਕਬੀਰ ਸਾਹੇਬ ਆਪ ਬਿਰਾਜਮਾਨ ਹਨ।',
      en: 'Free from birth, death, decay, and karma. Filled with wishing trees and lakes of nectar.',
    },
    kabirSagarVerse: {
      hi: 'कोटिन रवि जाके तेज प्रकाशा, हंसा करहिं अमृत का पासा। सत्य कबीर साहेब सुखदाई, अमर लोक में ज्योत जगाई॥',
      pb: 'ਕੋਟਿਨ ਰਵਿ ਜਾਕੇ ਤੇਜ ਪ੍ਰਕਾਸ਼ਾ, ਹੰਸਾ ਕਰਹਿਂ ਅੰਮ੍ਰਿਤ ਕਾ ਪਾਸਾ। ਸਤਿ ਕਬੀਰ ਸਾਹੇਬ ਸੁਖਦਾਈ, ਅਮਰ ਲੋਕ ਮੇਂ ਜਯੋਤ ਜਗਾਈ॥',
      en: 'Millions of suns are surpassed by its radiance; the Hansas dwell in nectar.',
    },
    soulExperience: {
      hi: 'हंस सतपुरुष के चरणों में मिलकर तद्रूप हो जाता है। "कबीर हम ही हैं, हम ही कबीर।"',
      pb: 'ਹੰਸ ਸਤਿਪੁਰੁਸ਼ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਲੀਨ ਹੋ ਕੇ ਇੱਕਮਿਕ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'The soul merges into the Supreme Father in absolute unity.',
    },
    unlockedWith: {
      hi: 'सत्यनाम का अखंड सुमिरन एवं सतगुरु की परम कृपा।',
      pb: 'ਸਤਯਨਾਮ ਦਾ ਅਖੰਡ ਸਿਮਰਨ ਤੇ ਗੁਰੂ ਕ੍ਰਿਪਾ।',
      en: 'The eternal anchor of Satyanaam and unconditional grace of Satguru Kabir.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (अनुराग सागर): सत्यलोक में काल का कोई प्रवेश नहीं; यहाँ हंस सदैव अमर रहते हैं।',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਅਨੁਰਾਗ ਸਾਗਰ): ਸਤਯਲੋਕ ਵਿੱਚ ਕਾਲ ਦਾ ਕੋਈ ਦਾਖ਼ਲਾ ਨਹੀਂ।',
      en: 'Kabir Sagar: In Satlok, Kaal has no power; souls dwell eternally immortal.',
    },
  },
  {
    id: 'stage-alakh',
    stageNumber: 3,
    realmType: 'satyaloka',
    title: {
      hi: 'अलख लोक (अलख पुरुष धाम)',
      pb: 'ਅਲਖ ਲੋਕ (ਅਲਖ ਪੁਰਸ਼ ਮੰਡਲ)',
      en: 'Alakh Lok (Incomprehensible Plane)',
    },
    region: {
      hi: 'सत्यलोक के साथ जुड़ा अनिर्वचनीय दिव्य आध्यात्मिक मंडल',
      pb: 'ਸਤਯਲੋਕ ਨਾਲ ਜੁੜਿਆ ਅਲੌਕਿਕ ਆਧਿਆਤਮਿਕ ਮੰਡਲ',
      en: 'The Transcendent Spiritual Plane of Alakh Purush',
    },
    nature: {
      hi: 'जो मन-बुद्धि और वाणी की सीमा से परे है। यहाँ अलख पुरुष का अनिर्वचनीय, दिव्य और प्रकाशमान तेज व्याप्त है।',
      pb: 'ਜੋ ਮਨ-ਬੁੱਧੀ ਦੀ ਸੀਮਾ ਤੋਂ ਪਰੇ ਹੈ; ਅਲਖ ਪੁਰਸ਼ ਦਾ ਦਿਵਯ ਮੰਡਲ।',
      en: 'Beyond mental constructs and speech; the pristine, unconditioned realm of Alakh Purush.',
    },
    kabirSagarVerse: {
      hi: 'अलख अगम की महिमा भारी, जहँ सुरत पहुंचे निर्विकारी। कहत कबीर सोई पद पावै, जो निज नाम सुरति ठहरावै॥',
      pb: 'ਅਲਖ ਅਗਮ ਕੀ ਮਹਿਮਾ ਭਾਰੀ, ਜਹੰ ਸੁਰਤ ਪਹੁੰਚੇ ਨਿਰਵਿਕਾਰੀ। ਕਹਤ ਕਬੀਰ ਸੋਈ ਪਦ ਪਾਵੇ, ਜੋ ਨਿਜ ਨਾਮ ਸੁਰਤਿ ਠਹਰਾਵੇ॥',
      en: 'Great is the glory of Alakh, where the detached soul arrives by anchoring in Satyanaam.',
    },
    soulExperience: {
      hi: 'आत्मा अलख निर्मल चेतना में डूबकर असीम शांति का अनुभव करती है।',
      pb: 'ਆਤਮਾ ਅਲਖ ਨਿਰਮਲ ਚੇਤਨਾ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'The soul dissolves into pristine, pure consciousness of infinite tranquility.',
    },
    unlockedWith: {
      hi: 'अलख ध्यान एवं सूक्ष्म सुरति एकाग्रता।',
      pb: 'ਅਲਖ ਧਿਆਨ ਤੇ ਸੂਖਮ ਸੁਰਤਿ ਦੀ ਇਕਾਗਰਤਾ।',
      en: 'Subtle attention merging into transcendental stillness.',
    },
    granthTeaching: {
      hi: 'कबीर बीजक व सागर: अलख पद की प्राप्ति केवल सार शब्द के यथार्थ बोध से होती है।',
      pb: 'ਕਬੀਰ ਬੀਜਕ: ਅਲਖ ਪਦ ਦੀ ਪ੍ਰਾਪਤੀ ਸਾਰ ਸ਼ਬਦ ਨਾਲ ਹੀ ਸੰਭਵ ਹੈ।',
      en: 'Kabir Bijak: The realm of Alakh is attained through authentic realization of Sar Shabad.',
    },
  },
  {
    id: 'stage-agam',
    stageNumber: 4,
    realmType: 'satyaloka',
    title: {
      hi: 'अगम लोक (अगम पुरुष धाम)',
      pb: 'ਅਗਮ ਲੋਕ (ਅਗਮ ਪੁਰਸ਼ ਧਾਮ)',
      en: 'Agam Lok (Inaccessible Realm)',
    },
    region: {
      hi: 'परम अगम्य आध्यात्मिक क्षेत्र जहाँ केवल सार शब्द की डोर पहुँचती है',
      pb: 'ਪਰਮ ਗੂੜ੍ਹ ਖੇਤਰ ਜਿੱਥੇ ਸਾਰ ਸ਼ਬਦ ਦੀ ਡੋਰ ਪਹੁੰਚਦੀ ਹੈ',
      en: 'The Inaccessible Pinnacle Reached via Sar Shabad',
    },
    nature: {
      hi: 'अगम पुरुष का पावन धाम जहाँ केवल सार शब्द की डोर द्वारा ही गमन संभव है। यहाँ की महिमा बुद्धि की कल्पना से भी परे है।',
      pb: 'ਅਗਮ ਪੁਰਸ਼ ਦਾ ਸਥਾਨ ਜਿੱਥੇ ਕੇਵਲ ਸਾਰ ਸ਼ਬਦ ਦੀ ਡੋਰ ਨਾਲ ਹੀ ਪਹੁੰਚਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
      en: 'The sacred abode of Agam Purush, traversed exclusively through Sar Shabad.',
    },
    kabirSagarVerse: {
      hi: 'अगम देश की अजब कहानी, जो जाने सोई पहचाने। कबीर साहेब अगम लखाया, आवागमन का कष्ट मिटाया॥',
      pb: 'ਅਗਮ ਦੇਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ, ਜੋ ਜਾਨੇ ਸੋਈ ਪਹਿਚਾਨੇ। ਕਬੀਰ ਸਾਹੇਬ ਅਗਮ ਲਖਾਯਾ, ਆਵਾਗਮਨ ਕਾ ਕਸ਼ਟ ਮਿਟਾਯਾ॥',
      en: 'Wondrous is the realm of Agam; Kabir reveals this mystery and removes all suffering.',
    },
    soulExperience: {
      hi: 'हंस अगम अवस्था में तल्लीन होकर पूर्ण रूप से वासना-मुक्त और शांत हो जाता है।',
      pb: 'ਹੰਸ ਅਗਮ ਅਵਸਥਾ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸ਼ਾਂਤ ਤੇ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'The soul enters deep transcendental communion, completely free of any residual impression.',
    },
    unlockedWith: {
      hi: 'सार शब्द की अखंड डोर पर आरोहण।',
      pb: 'ਸਾਰ ਸ਼ਬਦ ਦੀ ਅਖੰਡ ਡੋਰ \'ਤੇ ਆਰੋਹਣ।',
      en: 'Ascension along the unbroken current of the Master’s Sar Shabad.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (ज्ञान सागर): अगम लोक में सुरति ठहरते ही जन्म-मरण का बीज दग्ध हो जाता है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਅਗਮ ਲੋਕ ਵਿੱਚ ਸੁਰਤਿ ਟਿਕਣ ਨਾਲ ਜਨਮ-ਮਰਨ ਮੁੱਕ ਜਾਂਦਾ ਹੈ।',
      en: 'Kabir Sagar: As the attention rests in Agam Lok, the seeds of transmigration are destroyed.',
    },
  },
  {
    id: 'stage-bhanwar',
    stageNumber: 5,
    realmType: 'transition',
    title: {
      hi: 'भंवर गुफा एवं सोहं लोक (मुरली नाद)',
      pb: 'ਭੰਵਰ ਗੁਫ਼ਾ ਤੇ ਸੋਹੰ ਲੋਕ (ਮੁਰਲੀ ਨਾਦ)',
      en: 'Bhanwar Gupha & Soham Realm (Flute Melody)',
    },
    region: {
      hi: 'अमरलोक का प्रवेश द्वार — दिव्य मुरली नाद क्षेत्र',
      pb: 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਦੁਆਰ — ਮੁਰਲੀ ਨਾਦ ਖੇਤਰ',
      en: 'Entry Portal to Satyaloka — Celestial Flute Zone',
    },
    nature: {
      hi: 'यहाँ निरंतर अमृतमयी मुरली की धुन गूंजती है। हंस आत्माएं यहाँ तृप्त होकर परम आनंद में झूमती हैं।',
      pb: 'ਇੱਥੇ ਅੰਮ੍ਰਿਤ ਬੰਸਰੀ ਦੀ ਧੁਨ ਸਦਾ ਵੱਜਦੀ ਹੈ। ਹੰਸ ਪਰਮ ਆਨੰਦ ਵਿੱਚ ਝੂਮਦੇ ਹਨ।',
      en: 'Resonates with the celestial flute melody; souls dance in blissful ecstasy before the gates of Truth.',
    },
    kabirSagarVerse: {
      hi: 'भंवर गुफा में मुरली बाजे, सोहं लोक सुहावन हो। हंस मगन भए देखि रूप को, अमर लोक सिधावन हो॥',
      pb: 'ਭੰਵਰ ਗੁਫ਼ਾ ਮੇਂ ਮੁਰਲੀ ਬਾਜੇ, ਸੋਹੰ ਲੋਕ ਸੁਹਾਵਨ ਹੋ। ਹੰਸ ਮਗਨ ਭਏ ਦੇਖਿ ਰੂਪ ਕੋ, ਅਮਰ ਲੋਕ ਸਿਧਾਵਨ ਹੋ॥',
      en: 'The flute plays in Bhanwar Gupha, and the Soham world is pleasant.',
    },
    soulExperience: {
      hi: 'आत्मा को अपनी अमरता का पूर्ण साक्षात्कार होता है; काल का भय सदा के लिए समाप्त हो जाता है।',
      pb: 'ਆਤਮਾ ਨੂੰ ਆਪਣੀ ਸਦੀਵੀ ਅਮਰਤਾ ਦਾ ਪੂਰਾ ਅਨੁਭਵ ਹੁੰਦਾ ਹੈ।',
      en: 'The soul experiences its immortal origin; all fear of death and rebirth vanishes forever.',
    },
    unlockedWith: {
      hi: 'अनहद मुरली नाद में एकाकार होना।',
      pb: 'ਅਨਹਦ ਮੁਰਲੀ ਨਾਦ ਵਿੱਚ ਲੀਨਤਾ।',
      en: 'Absorption into the transcendent unstruck flute melody.',
    },
    granthTeaching: {
      hi: 'कबीर सागर: भंवर गुफा की मुरली धुन सुनते ही जीवात्मा काल के बंधनों को पूरी तरह भूल जाती है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਭੰਵਰ ਗੁਫ਼ਾ ਦੀ ਧੁਨ ਨਾਲ ਕਾਲ ਦੇ ਬੰਧਨ ਟੁੱਟ ਜਾਂਦੇ ਹਨ।',
      en: 'Kabir Sagar: The heavenly flute removes all attachment to the material worlds.',
    },
  },
  {
    id: 'stage-mahasunna',
    stageNumber: 6,
    realmType: 'transition',
    title: {
      hi: 'महा-सुन्न (Maha Sunna) एवं मानसरोवर',
      pb: 'ਮਹਾਂ-ਸੁੰਨ (Maha Sunna) ਤੇ ਮਾਨਸਰੋਵਰ',
      en: 'The Great Void (Maha Sunna) & Mansarovar',
    },
    region: {
      hi: 'सोलह शंख योजन का अगाध अंधकार व पारब्रह्म का पावन क्षेत्र',
      pb: '੧੬ ਸ਼ੰਖ ਯੋਜਨ ਦਾ ਗੰਭੀਰ ਖਲਾਅ ਤੇ ਪਾਰਬ੍ਰਹਮ ਖੇਤਰ',
      en: '16 Shankh Yojanas Void & Parabrahm Cleansing',
    },
    nature: {
      hi: 'यहाँ न सूर्य है, न चंद्रमा। मानसरोवर में स्नान कर आत्मा समस्त सूक्ष्म शरीरों को त्यागकर निर्मल हंस बन जाती है। सतगुरु का सत्यनाम ही इसे पार कराता है।',
      pb: 'ਇੱਥੇ ਨਾ ਸੂਰਜ ਹੈ ਨਾ ਚੰਦ। ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਕੇ ਆਤਮਾ ਨਿਰਮਲ ਹੰਸ ਬਣਦੀ ਹੈ।',
      en: 'The soul sheds causal sheaths in Mansarovar, guided solely by the Master\'s Name.',
    },
    kabirSagarVerse: {
      hi: 'मानसरोवर न्हाय के, हंसा भये सचेत। महाशून्य की घाटी भारी, गुरु बिनु पार न पावै कोई॥',
      pb: 'ਮਾਨਸਰੋਵਰ ਨ੍ਹਾਏ ਕੇ, ਹੰਸਾ ਭਏ ਸਚੇਤ। ਮਹਾਸ਼ੁੰਨ ਕੀ ਘਾਟੀ ਭਾਰੀ, ਗੁਰੂ ਬਿਨੁ ਪਾਰ ਨ ਪਾਵੇ ਕੋਈ॥',
      en: 'By bathing in Mansarovar the Hansa awakens; the vast void is crossed only with the Satguru.',
    },
    soulExperience: {
      hi: 'सतगुरु हंस का हाथ पकड़कर इस महाशून्य को पलक झपकते ही पार करा देते हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਹੰਸ ਦੀ ਬਾਂਹ ਫੜ ਕੇ ਇਸ ਘਾਟੀ ਨੂੰ ਪਾਰ ਕਰਵਾਉਂਦੇ ਹਨ।',
      en: 'The living master holds the soul\'s hand, carrying it across the vast void in an instant.',
    },
    unlockedWith: {
      hi: 'सतगुरु के प्रति अनन्य प्रेम व पूर्ण समर्पण।',
      pb: 'ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਪੂਰਨ ਸਮਰਪਣ।',
      en: 'Total surrender and unconditional love for the Supreme Master.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (हंस प्रबोध): मानसरोवर में स्नान करते ही करोड़ों जन्मों के सूक्ष्म मैल धुल जाते हैं।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਆਤਮਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਿਰਮਲ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Kabir Sagar: Mansarovar purifies the soul of all subtle and causal karmas.',
    },
  },
  {
    id: 'stage-trikuti',
    stageNumber: 7,
    realmType: 'transition',
    title: {
      hi: 'त्रिकुटी (ब्रह्म लोक / ओंकार धाम)',
      pb: 'ਤ੍ਰਿਕੁਟੀ (ਬ੍ਰਹਮ ਲੋਕ / ਓਂਕਾਰ ਧਾਮ)',
      en: 'Trikuti (Omkar Plane / Brahma Lok)',
    },
    region: {
      hi: '२१ ब्रह्मांड की सूक्ष्म सीमा — लाल गगन व ओंकार नाद क्षेत्र',
      pb: '੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਦੀ ਸੂਖਮ ਹੱਦ — ਲਾਲ ਗਗਨ ਤੇ ਓਂਕਾਰ ਨਾਦ',
      en: 'The subtle boundary of the 21 Universes & Omkar Vibration',
    },
    nature: {
      hi: 'यहाँ ज्योति निरंजन (काल) का सूक्ष्म साम्राज्य समाप्त होता है। ओंकार का नाद यहीं तक है; इसके पार काल का कोई अधिकार नहीं।',
      pb: 'ਇੱਥੇ ਜੋਤਿ ਨਿਰੰਜਨ (ਕਾਲ) ਦੀ ਹਕੂਮਤ ਖ਼ਤਮ ਹੁੰਦੀ ਹੈ। ਓਂਕਾਰ ਦਾ ਨਾਦ ਇੱਥੇ ਤੱਕ ਹੀ ਹੈ।',
      en: 'The apex of Kaal Niranjan\'s territory and the domain of Omkar vibration.',
    },
    kabirSagarVerse: {
      hi: 'त्रिकुटी महल में बादल गरजे, लाल गगन विच सुरत बिराजे। ओंकार शब्द की धुन भारी, काल पुरुष की हद विस्तारी॥',
      pb: 'ਤ੍ਰਿਕੁਟੀ ਮਹਲ ਮੇਂ ਬਾਦਲ ਗਰਜੇ, ਲਾਲ ਗਗਨ ਵਿਚ ਸੁਰਤ ਬਿਰਾਜੇ॥',
      en: 'In Trikuti the clouds roar; Omkar marks the boundary of Kaal Purush.',
    },
    soulExperience: {
      hi: 'आत्मा काल के सूक्ष्म जालों (ओंकार व त्रिगुण) को पहचानकर उनसे विदा लेती है।',
      pb: 'ਆਤਮਾ ਕਾਲ ਦੇ ਸੂਖਮ ਜਾਲਾਂ ਨੂੰ ਪਛਾਣ ਕੇ ਅੱਗੇ ਨਿਕਲਦੀ ਹੈ।',
      en: 'The soul clearly discerns the invisible boundary of cosmic mind and bids farewell to Kaal.',
    },
    unlockedWith: {
      hi: 'सार शब्द (सत्यनाम) का अचूक भेद।',
      pb: 'ਸਾਰ ਸ਼ਬਦ (ਸਤਯਨਾਮ) ਦਾ ਗੂੜ੍ਹ ਭੇਦ।',
      en: 'The authentic Sar Shabad (True Name) which Kaal cannot imitate.',
    },
    granthTeaching: {
      hi: 'कबीर साखी संग्रह: ओंकार केवल त्रिकुटी तक है, सत्यनाम अमरलोक का अखंड शब्द है।',
      pb: 'ਕਬੀਰ ਸਾਖੀ: ਓਂਕਾਰ ਤ੍ਰਿਕੁਟੀ ਤੱਕ ਹੀ ਹੈ, ਸਤਯਨਾਮ ਅਮਰਲੋਕ ਦਾ ਸ਼ਬਦ ਹੈ।',
      en: 'Kabir Sakhi: Omkar belongs to Trikuti; Satyanaam is the eternal word of Amarlok.',
    },
  },
  {
    id: 'stage-brahmands',
    stageNumber: 8,
    realmType: 'kaal',
    title: {
      hi: 'काल के २१ ब्रह्मांड (स्वर्ग, मृत्युलोक, पाताल)',
      pb: 'ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡ (ਸਵਰਗ, ਮਾਤਲੋਕ, ਪਾਤਾਲ)',
      en: '21 Brahmands of Kaal (Heaven, Earth, Nether)',
    },
    region: {
      hi: 'पाताल (७ लोक), मृत्युलोक (पृथ्वी - ८४ लाख योनियाँ), स्वर्ग एवं देवलोक',
      pb: 'ਪਾਤਾਲ (੭ ਮੰਡਲ), ਮਾਤ-ਲੋਕ (ਧਰਤੀ - ੮੪ ਲੱਖ ਜੂਨਾਂ), ਸਵਰਗ ਤੇ ਦੇਵਲੋਕ',
      en: 'Nether (7 Patala), Earth (8.4 Million Species), and Astral Heavens',
    },
    nature: {
      hi: 'त्रिगुणी माया (सतो, रजो, तमो), सुख-दुख, पाप-पुण्य और जन्म-मरण का नश्वर चक्र। यहाँ जीवात्मा काल के जाल में बंधी भटकती है।',
      pb: 'ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੀ ਮਾਇਆ, ਸੁੱਖ-ਦੁੱਖ ਅਤੇ ਜਨਮ-ਮਰਨ ਦਾ ਚੱਕਰ।',
      en: 'Governed by the three Gunas, karma, and rebirth. The soul is entangled until meeting the Satguru.',
    },
    kabirSagarVerse: {
      hi: 'इक्कीस ब्रह्मांड काल का पसारा, ताके पार अमरपुर धारा। मानुष जन्म दुर्लभ है, मिले न बारम्बार॥',
      pb: 'ਇੱਕੀਸ ਬ੍ਰਹਿਮੰਡ ਕਾਲ ਕਾ ਪਸਾਰਾ, ਤਾਕੇ ਪਾਰ ਅਮਰਪੁਰ ਧਾਰਾ। ਮਾਨੁਸ਼ ਜਨਮ ਦੁਰਲੱਭ ਹੈ, ਮਿਲੇ ਨ ਬਾਰਮਬਾਰ॥',
      en: 'The twenty-one universes are the expanse of Kaal; beyond them flows the eternal stream of Amarlok.',
    },
    soulExperience: {
      hi: 'मानव शरीर में सतगुरु की शरण पाकर सत्यनाम सुमिरन द्वारा काल जाल से मुक्ति प्राप्त होती है।',
      pb: 'ਮਨੁੱਖ ਜਨਮ ਵਿੱਚ ਸੱਚੇ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈ ਕੇ ਸਤਯਨਾਮ ਰਾਹੀਂ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ।',
      en: 'Awakening in human birth to find the Satguru and cross the ocean of transmigration.',
    },
    unlockedWith: {
      hi: 'सत्यनाम सुमिरन एवं पूर्ण सतगुरु से नाम-दीक्षा।',
      pb: 'ਸਤਯਨਾਮ ਸਿਮਰਨ ਅਤੇ ਸੱਚੇ ਗੁਰੂ ਤੋਂ ਨਾਮ ਦੀਖਿਆ।',
      en: 'Initiation into Satyanaam and contemplation with every breath.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (सृष्टि रचना): काल निरंजन ने तपस्या करके २१ ब्रह्मांड प्राप्त किए और जीवों को भ्रम में रखा।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਕਾਲ ਨਿਰੰਜਨ ਨੇ ਤਪ ਕਰਕੇ ੨੧ ਬ੍ਰਹਿਮੰਡ ਲਏ ਅਤੇ ਜੀਵਾਂ ਨੂੰ ਭਰਮਾਇਆ।',
      en: 'Kabir Sagar: Kaal Niranjan obtained the 21 universes and trapped souls in karmic illusion.',
    },
  },
];

export const UniverseMap: React.FC<UniverseMapProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();
  const t = translations[language];
  const levels = t.universeLevels;

  // View toggle: 'visualizer' (ECharts Sunburst & Hierarchy) vs 'stages-list' (8 Sacred Stages Breakdown) vs 'subtle-levels' (9 Subtle Planes & Hz)
  const [activeViewTab, setActiveViewTab] = useState<'visualizer' | 'stages-list' | 'subtle-levels'>('visualizer');
  
  // Search query filter for universe hierarchy teachings
  const [searchFilter, setSearchFilter] = useState<string>('');
  
  // Selected stage
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-anami'); // Anami Lok (Absolute Top) by default

  const [expandedId, setExpandedId] = useState<number | null>(1); // Anami Lok expanded by default
  const [playingFreq, setPlayingFreq] = useState<number | null>(null);
  const [journeyActive, setJourneyActive] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const stopFrequency = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (e) {
        // Safe handle
      }
      oscillatorRef.current = null;
    }
    setPlayingFreq(null);
  };

  const playFrequency = (freqStr: string, id: number) => {
    sacredHaptics.lightTap();
    if (playingFreq === id) {
      stopFrequency();
      return;
    }

    stopFrequency();

    const freq = parseFloat(freqStr.replace(' Hz', ''));
    if (isNaN(freq)) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    
    oscillatorRef.current = osc;
    gainNodeRef.current = gain;
    setPlayingFreq(id);
  };

  const startJourney = () => {
    sacredHaptics.divineBlessing();
    if (journeyActive) {
      setJourneyActive(false);
      stopFrequency();
      return;
    }

    setJourneyActive(true);
    setExpandedId(9);

    const runStepFixed = (step: number) => {
      setExpandedId(step);
      const levelData = levels.find(l => l.id === step);
      if (levelData) {
        playFrequency(levelData.frequency, step);
      }

      if (step > 1) {
        setTimeout(() => {
          setJourneyActive(prev => {
            if (prev) {
              runStepFixed(step - 1);
              return true;
            }
            return false;
          });
        }, 5000);
      } else {
        setTimeout(() => {
          setJourneyActive(false);
          stopFrequency();
        }, 5000);
      }
    };

    runStepFixed(9);
  };

  const getLevelColors = (id: number) => {
    switch (id) {
      case 1: return { bg: 'bg-red-500/20', text: 'text-red-950 dark:text-red-200', border: 'border-red-500' };
      case 2: return { bg: 'bg-orange-500/20', text: 'text-orange-950 dark:text-orange-200', border: 'border-orange-500' };
      case 3: return { bg: 'bg-amber-500/20', text: 'text-amber-950 dark:text-amber-200', border: 'border-amber-500' };
      case 4: return { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-900 dark:text-indigo-200', border: 'border-indigo-300' };
      case 5: return { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-200', border: 'border-gray-400' };
      case 6: return { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-900 dark:text-red-200', border: 'border-red-300' };
      case 7: return { bg: 'bg-yellow-50 dark:bg-yellow-950/30', text: 'text-yellow-900 dark:text-yellow-200', border: 'border-yellow-300' };
      case 8: return { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-900 dark:text-green-200', border: 'border-green-300' };
      case 9: return { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-900 dark:text-rose-200', border: 'border-rose-300' };
      default: return { bg: 'bg-gray-50 dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-200', border: 'border-gray-200' };
    }
  };

  // Filtered Stages based on search query
  const filteredStages = useMemo(() => {
    const q = searchFilter.trim().toLowerCase();
    if (!q) return SACRED_UNIVERSE_STAGES;
    return SACRED_UNIVERSE_STAGES.filter((stg) => {
      const title = stg.title[language] || stg.title.hi;
      const desc = stg.nature[language] || stg.nature.hi;
      const teaching = stg.granthTeaching[language] || stg.granthTeaching.hi;
      const region = stg.region[language] || stg.region.hi;
      return (
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        teaching.toLowerCase().includes(q) ||
        region.toLowerCase().includes(q)
      );
    });
  }, [language, searchFilter]);

  const currentStage = SACRED_UNIVERSE_STAGES.find(s => s.id === selectedStageId) || SACRED_UNIVERSE_STAGES[0];

  const resetEntireMap = () => {
    sacredHaptics.lightTap();
    setSelectedStageId('stage-anami');
    setExpandedId(1);
    setSearchFilter('');
    stopFrequency();
    setJourneyActive(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-16 select-none max-w-5xl mx-auto px-3 sm:px-6 py-2 sm:py-4">
      {/* Standardized Sacred Top Bar */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-3 select-none flex items-center justify-center overflow-hidden min-h-[40px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-xs sm:text-base font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Top Banner */}
      <div 
        style={{ 
          background: `linear-gradient(135deg, ${theme.sacredMaroon}, ${theme.accentGold})`,
          borderColor: theme.accentGold 
        }}
        className="rounded-3xl p-4 sm:p-6 text-white shadow-xl relative overflow-hidden border-2 mb-4"
      >
        <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 pointer-events-none">✨</div>
        
        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest border border-white/30 font-mono">
                {t.kabirSagarBrahmandDarshan}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-red-600/80 text-[10px] font-bold border border-red-300 font-serif">
                {language === 'pb' ? '੧. ਅਨਾਮੀ ਲੋਕ (ਸਰਵਉੱਚ)' : language === 'en' ? '1. Anami Lok (Absolute Top)' : '१. अनामी लोक (सर्वोच्च शिखर)'}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black font-serif truncate">
              {t.tabUniverseMap}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={resetEntireMap}
              className="px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold font-serif transition-all flex items-center gap-1 cursor-pointer border border-white/30 active:scale-95"
              title="Reset View to Anami Lok"
            >
              <RotateCcw size={13} />
              <span className="hidden xs:inline text-[11px]">{language === 'pb' ? 'ਰੀਸੈੱਟ' : language === 'en' ? 'Reset' : 'रीसेट'}</span>
            </button>

            {onClose && (
              <button 
                type="button"
                onClick={onClose} 
                className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer border border-white/30 active:scale-95"
                title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 
          className="text-xl sm:text-3xl font-black font-serif tracking-tight leading-tight px-1"
          style={{ color: theme.sacredMaroon }}
        >
          {language === 'pb' 
            ? 'ਬ੍ਰਹਿਮੰਡ ਦਰਸ਼ਨ: ਅਨਾਮੀ ਲੋਕ (ਸਭ ਤੋਂ ਉੱਪਰ) ➔ ਸਤਯਲੋਕ ➔ ਅਲਖ ➔ ਅਗਮ ➔ ੨੧ ਬ੍ਰਹਿਮੰਡ' 
            : language === 'en' 
            ? 'Cosmic Hierarchy: Anami Lok (Top) ➔ Satlok ➔ Alakh ➔ Agam ➔ 21 Brahmands' 
            : 'ब्रह्मांड दर्शन: अनामी लोक (सबसे ऊपर) ➔ सत्यलोक ➔ अलख ➔ अगम ➔ २१ ब्रह्मांड'}
        </h1>
        
        <p className="text-xs sm:text-sm max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-serif leading-relaxed px-2">
          {language === 'pb'
            ? 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ: ਸਭ ਤੋਂ ਉੱਪਰ ਅਨਾਮੀ ਲੋਕ, ਫਿਰ ਸਤਯਲੋਕ, ਅਲਖ ਲੋਕ, ਅਗਮ ਲੋਕ, ਮਾਨਸਰੋਵਰ ਤੇ ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਦਾ ਪ੍ਰਮਾਣਿਕ ਚਿਤਰਣ।'
            : language === 'en'
            ? 'Based on Kabir Sagar: Anami Lok placed at the absolute top, followed by Satlok, Alakh Lok, Agam Lok, and the 21 Brahmands.'
            : 'कबीर सागर अनुसार: सबसे ऊपर अनामी लोक, उसके उपरांत सत्यलोक, अलख लोक, अगम लोक, भंवर गुफा, महा-सुन्न एवं काल के २१ ब्रह्मांडों का प्रामाणिक क्रम।'}
        </p>

        {/* Global Search Filter Input for Teachings & Granth Sections */}
        <div className="pt-2 max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-amber-600 dark:text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ ਉਪਦੇਸ਼ ਜਾਂ ਮੰਡਲ ਖੋਜੋ (ਅਨਾਮੀ, ਸਤਯਲੋਕ, ਮਾਨਸਰੋਵਰ)...' : language === 'en' ? 'Search teaching or realm (Anami, Satlok, Mansarovar)...' : 'कबीर सागर उपदेश या मंडल खोजें (अनामी, सत्यलोक, मानसरोवर)...'}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="w-full pl-10 pr-9 py-2 rounded-2xl border-2 text-xs sm:text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs placeholder-gray-400"
            />
            {searchFilter && (
              <button
                type="button"
                onClick={() => setSearchFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                title="Clear Search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="pt-1 flex justify-center w-full overflow-x-auto pb-1">
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="p-1 rounded-2xl border-2 shadow-sm inline-flex gap-1 max-w-full flex-wrap sm:flex-nowrap justify-center"
          >
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveViewTab('visualizer');
              }}
              style={{
                backgroundColor: activeViewTab === 'visualizer' ? theme.sacredMaroon : 'transparent',
                color: activeViewTab === 'visualizer' ? '#FFFFFF' : theme.textPrimary,
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
              <span className="whitespace-nowrap">{language === 'pb' ? 'ਈ-ਚਾਰਟਸ ਸਨਬਰਸਟ' : language === 'en' ? 'ECharts Sunburst' : 'ई-चार्ट्स सनबर्स्ट'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveViewTab('stages-list');
              }}
              style={{
                backgroundColor: activeViewTab === 'stages-list' ? theme.sacredMaroon : 'transparent',
                color: activeViewTab === 'stages-list' ? '#FFFFFF' : theme.textPrimary,
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">{language === 'pb' ? 'ਮੰਡਲ ਉਪਦੇਸ਼ ਵਿਸਥਾਰ' : language === 'en' ? 'Sacred Realms Detail' : 'मंडल उपदेश विस्तार'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveViewTab('subtle-levels');
              }}
              style={{
                backgroundColor: activeViewTab === 'subtle-levels' ? theme.sacredMaroon : 'transparent',
                color: activeViewTab === 'subtle-levels' ? '#FFFFFF' : theme.textPrimary,
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">{language === 'pb' ? '੯ ਸੂਖਮ ਲੋਕ ਤੇ ਨਾਦ' : language === 'en' ? '9 Subtle Planes & Hz' : '९ सूक्ष्म लोक एवं नाद'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: Apache ECharts Sunburst Chart Visualizer with Search Filter */}
      {activeViewTab === 'visualizer' && (
        <div className="space-y-4 sm:space-y-6">
          <div 
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="p-3 sm:p-5 rounded-3xl border-2 space-y-4 shadow-sm"
          >
            <Suspense fallback={<SacredLoader language={language} compact />}>
              <EChartsUniverseVisualizer
                externalSearchQuery={searchFilter}
                onSelectNode={(node) => {
                  const match = SACRED_UNIVERSE_STAGES.find(s => 
                    node.title.toLowerCase().includes(s.title.hi.toLowerCase()) ||
                    s.title.hi.toLowerCase().includes(node.title.toLowerCase())
                  );
                  if (match) {
                    setSelectedStageId(match.id);
                  }
                }}
              />
            </Suspense>

            <AnhadNaadVisualizer isActive={true} />
          </div>
        </div>
      )}

      {/* TAB 2: Sacred Realms Detail (Anami Lok Top -> Satlok -> Alakh -> Agam -> Brahmands) */}
      {activeViewTab === 'stages-list' && (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* Left Column: List of Stages */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <h3 
                  style={{ color: theme.sacredMaroon }}
                  className="text-xs sm:text-base font-black font-serif flex items-center gap-2 truncate"
                >
                  <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    {language === 'pb' ? 'ਸ੍ਰਿਸ਼ਟੀ ਮੰਡਲ ਕ੍ਰਮ (ਅਨਾਮੀ ਲੋਕ ਸਭ ਤੋਂ ਉੱਪਰ)' : language === 'en' ? 'Cosmic Hierarchy (Anami Lok at Top)' : 'सृष्टि मंडल क्रम (अनामी लोक सबसे ऊपर)'}
                  </span>
                </h3>
                <span className="text-[10px] font-bold text-red-600 dark:text-red-400 font-serif">
                  {filteredStages.length} {language === 'pb' ? 'ਮੰਡਲ' : 'मंडल'}
                </span>
              </div>

              <div className="space-y-2">
                {filteredStages.map((stg) => {
                  const isSelected = selectedStageId === stg.id;
                  const isAnami = stg.realmType === 'anamilok';
                  const isSatyaloka = stg.realmType === 'satyaloka';
                  const isTransition = stg.realmType === 'transition';

                  let badgeColor = 'bg-red-500/10 text-red-800 dark:text-red-300 border-red-500/20';
                  if (isAnami) badgeColor = 'bg-red-600 text-white border-red-700 font-black shadow-xs';
                  else if (isSatyaloka) badgeColor = 'bg-amber-500/20 text-amber-800 dark:text-amber-200 border-amber-500/40';
                  else if (isTransition) badgeColor = 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/20';

                  return (
                    <div
                      key={stg.id}
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setSelectedStageId(stg.id);
                      }}
                      style={{
                        backgroundColor: isSelected ? theme.stepActiveBg : theme.cardBg,
                        borderColor: isSelected ? (isAnami ? '#dc2626' : theme.accentGold) : theme.cardBorder,
                      }}
                      className={`p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer shadow-2xs flex items-center justify-between gap-2.5 overflow-hidden ${
                        isSelected ? 'ring-2 ring-amber-500/40 scale-[1.01] shadow-md' : 'hover:scale-[1.005] opacity-90 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
                        <div 
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border ${
                            isAnami
                              ? 'bg-red-600 text-white border-red-700 shadow-sm'
                              : isSatyaloka 
                              ? 'bg-amber-500 text-white border-amber-600 shadow-sm' 
                              : isTransition 
                              ? 'bg-indigo-600 text-white border-indigo-700' 
                              : 'bg-black/10 text-gray-700 dark:text-gray-200 border-black/15'
                          }`}
                        >
                          {stg.stageNumber}
                        </div>
                        <div className="min-w-0 flex-1 overflow-hidden">
                          <h4 
                            style={{ color: isSelected ? theme.sacredMaroon : theme.textPrimary }}
                            className="font-bold text-xs sm:text-sm font-serif truncate"
                          >
                            {stg.title[language]}
                          </h4>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate">
                            {stg.region[language]}
                          </span>
                        </div>
                      </div>

                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${badgeColor}`}>
                        {isAnami
                          ? (language === 'pb' ? '👑 ਸਰਵਉੱਚ ਸ਼ਿਖਰ' : language === 'en' ? '👑 Absolute Top' : '👑 सर्वोच्च शिखर')
                          : isSatyaloka 
                          ? (language === 'pb' ? 'ਅਮਰਲੋਕ' : language === 'en' ? 'Amar Lok' : 'अमरलोक') 
                          : isTransition 
                          ? (language === 'pb' ? 'ਪਾਰਬ੍ਰਹਮ' : language === 'en' ? 'Parabrahm' : 'पारब्रह्म') 
                          : (language === 'pb' ? '੨੧ ਬ੍ਰਹਿਮੰਡ' : language === 'en' ? '21 Brahmands' : '२१ ब्रह्मांड')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Stage Detail Inspector Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: currentStage.realmType === 'anamilok' ? '#dc2626' : theme.accentGold,
                  }}
                  className="rounded-3xl border-2 shadow-xl p-4 sm:p-6 space-y-3.5 overflow-hidden break-words"
                >
                  <div className="border-b pb-2.5 space-y-1" style={{ borderColor: theme.cardBorder }}>
                    <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[10px] font-bold border border-amber-500/30">
                        {language === 'pb' ? `ਪੜਾਅ ${currentStage.stageNumber}` : language === 'en' ? `Realm ${currentStage.stageNumber}` : `पड़ाव ${currentStage.stageNumber}`}
                      </span>
                      <span className="font-mono text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                        {currentStage.realmType === 'anamilok' ? '👑 ABSOLUTE APEX' : currentStage.realmType.toUpperCase()}
                      </span>
                    </div>
                    <h3 
                      style={{ color: theme.sacredMaroon }}
                      className="text-base sm:text-xl font-black font-serif leading-tight break-words"
                    >
                      {currentStage.title[language]}
                    </h3>
                    <p className="text-xs text-amber-700 dark:text-amber-400 font-medium break-words">
                      📍 {currentStage.region[language]}
                    </p>
                  </div>

                  {/* Nature / Description */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-serif">
                      {t.realmNature}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans break-words">
                      {currentStage.nature[language]}
                    </p>
                  </div>

                  {/* Granth Teaching Section */}
                  <div 
                    style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                    className="p-3 rounded-2xl border space-y-1 break-words"
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 font-serif">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>{language === 'pb' ? 'ਗ੍ਰੰਥ ਉਪਦੇਸ਼ ਮਰਮ:' : language === 'en' ? 'Granth Section Teaching:' : 'ग्रंथ उपदेश मर्म:'}</span>
                    </div>
                    <p className="text-xs font-serif leading-snug font-medium text-amber-950 dark:text-amber-100 break-words">
                      {currentStage.granthTeaching[language]}
                    </p>
                  </div>

                  {/* Soul State */}
                  <div 
                    style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                    className="p-3 rounded-2xl border space-y-1 break-words"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 font-serif">
                      {t.soulInternalState}
                    </span>
                    <p className="text-xs font-serif leading-snug break-words">
                      {currentStage.soulExperience[language]}
                    </p>
                  </div>

                  {/* Scriptural Verse */}
                  <div 
                    style={{ borderColor: theme.accentGold }}
                    className="p-3 rounded-2xl border-l-4 bg-amber-500/10 space-y-1 break-words"
                  >
                    <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 font-serif block">
                      {t.kabirSagarProof}
                    </span>
                    <p className="font-serif italic font-black text-xs text-amber-950 dark:text-amber-100 break-words leading-relaxed">
                      "{currentStage.kabirSagarVerse[language]}"
                    </p>
                  </div>

                  {/* Gateway Key */}
                  <div className="pt-1 flex items-center justify-between gap-2 flex-wrap text-xs">
                    <span className="text-gray-500 dark:text-gray-400 font-serif">{t.liberationKey}</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 font-serif break-words">
                      ✓ {currentStage.unlockedWith[language]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 9 Subtle Celestial Planes & Sound Frequencies */}
      {activeViewTab === 'subtle-levels' && (
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={startJourney}
              style={{ 
                backgroundColor: journeyActive ? theme.accentGold : theme.bgSecondary,
                borderColor: theme.accentGold,
                color: journeyActive ? '#FFFFFF' : theme.sacredMaroon
              }}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border-2 text-xs font-bold flex items-center gap-2 transition-all hover:shadow-md active:scale-95 shadow-sm cursor-pointer"
            >
              {journeyActive ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Sparkles className="w-4 h-4" />}
              <span>{journeyActive ? t.stopJourneyBtn : t.startJourneyBtn}</span>
            </button>
            {journeyActive && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 animate-pulse font-serif">
                {t.journeyDesc}
              </span>
            )}
          </div>

          <div className="max-w-4xl mx-auto px-1 sm:px-2 relative space-y-3 sm:space-y-4">
            {levels.map((level) => {
              const isExpanded = expandedId === level.id;
              const isPlaying = playingFreq === level.id;
              const colors = getLevelColors(level.id);
              const isAnami = level.id === 1;
              const isSpiritualRealm = level.id <= 3;

              return (
                <div
                  key={level.id}
                  style={{ 
                    backgroundColor: theme.cardBg, 
                    borderColor: isExpanded ? (isAnami ? '#dc2626' : theme.accentGold) : theme.cardBorder,
                  }}
                  className={`p-3.5 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer shadow-sm overflow-hidden break-words ${
                    isExpanded ? 'ring-2 ring-amber-500/40 shadow-md' : 'hover:border-amber-500/50'
                  }`}
                  onClick={() => setExpandedId(isExpanded ? null : level.id)}
                >
                  <div className="flex items-center justify-between gap-2.5 sm:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 overflow-hidden">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${colors.bg} ${colors.border}`}>
                        <span className="font-bold text-xs">{level.id}</span>
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <h3 className="text-sm sm:text-lg font-bold font-serif truncate" style={{ color: theme.textPrimary }}>
                            {level.title}
                          </h3>
                          {isAnami ? (
                            <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase tracking-tighter bg-red-600 text-white">
                              👑 सर्वोच्च शिखर
                            </span>
                          ) : isSpiritualRealm ? (
                            <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-tighter bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border border-amber-300">
                              Amar Lok
                            </span>
                          ) : null}
                        </div>
                        <div className="flex items-center gap-2.5 text-xs font-bold flex-wrap" style={{ color: theme.accentGold }}>
                          <span className="truncate">{level.entity}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              playFrequency(level.frequency, level.id);
                            }}
                            className="flex items-center gap-1 hover:underline cursor-pointer shrink-0"
                          >
                            {isPlaying ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                            <span className={isPlaying ? 'text-rose-500' : ''}>{level.frequency}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-400 shrink-0">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t space-y-2.5 overflow-hidden break-words" style={{ borderColor: theme.cardBorder }}>
                          <p className="text-xs sm:text-sm leading-relaxed break-words" style={{ color: theme.textSecondary }}>
                            {level.description}
                          </p>

                          {level.vani && (
                            <div className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 font-serif italic text-xs font-bold break-words leading-relaxed">
                              "{level.vani}"
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
