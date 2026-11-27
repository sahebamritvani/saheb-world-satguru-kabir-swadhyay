import React, { useState, useRef, useMemo, useEffect, Suspense, lazy } from 'react';
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
import { Language, SACRED_BRANDING } from '../types';
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

// SACRED KABIR SAGAR COSMIC HIERARCHY:
// अनामी लोक (अकह लोक) → अगम लोक → अलख लोक → सत्यलोक (अमरलोक) → भंवर गुफा → महासुन्न → पारब्रह्म (सुन्न) → त्रिकुटी → २१ ब्रह्मांड
export const SACRED_UNIVERSE_STAGES: UniverseAscentStage[] = [
  {
    id: 'stage-anami',
    stageNumber: 1,
    realmType: 'anamilok',
    title: {
      hi: 'अनामी लोक (अकह लोक — सर्वोच्च शिखर)',
      pb: 'ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਲੋਕ — ਸਰਵਉੱਚ ਸ਼ਿਖਰ)',
      en: 'Anami Lok (Akah Lok — Absolute Top)',
    },
    region: {
      hi: 'समस्त ब्रह्मांडों, अमरलोक और संपूर्ण अस्तित्व का सर्वोपरि अनादि शिखर',
      pb: 'ਸਮੂਹ ਸ੍ਰਿਸ਼ਟੀ ਅਤੇ ਸਾਰੇ ਲੋਕਾਂ ਦਾ ਸਰਵਉੱਚ ਅਨਾਦਿ ਸ਼ਿਖਰ',
      en: 'The Ultimate Timeless Apex of All Creation & Existence',
    },
    nature: {
      hi: 'जहाँ न कोई नाम है, न रूप, न रेखा, न द्वैत। यह सकल चेतना का मूल उद्गम स्थल है। परम पिता अनामी पुरुष (सतपुरुष सतगुरु कबीर साहेब का सर्वोच्च अनादि स्वरूप) यहाँ अखण्ड सच्चिदानंद में विराजमान हैं।',
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
    id: 'stage-agam',
    stageNumber: 2,
    realmType: 'satyaloka',
    title: {
      hi: 'अगम लोक (अगम पुरुष धाम)',
      pb: 'ਅਗਮ ਲੋਕ (ਅਗਮ ਪੁਰਸ਼ ਧਾਮ)',
      en: 'Agam Lok (Inaccessible Realm)',
    },
    region: {
      hi: 'अनामी लोक के ठीक नीचे परम अगम्य आध्यात्मिक क्षेत्र जहाँ केवल सार शब्द की डोर पहुँचती है',
      pb: 'ਅਨਾਮੀ ਲੋਕ ਤੋਂ ਹੇਠਾਂ ਪਰਮ ਗੂੜ੍ਹ ਖੇਤਰ ਜਿੱਥੇ ਸਾਰ ਸ਼ਬਦ ਦੀ ਡੋਰ ਪਹੁੰਚਦੀ ਹੈ',
      en: 'The Inaccessible Pinnacle Reached via Sar Shabad',
    },
    nature: {
      hi: 'अगम पुरुष का पावन धाम जहाँ केवल सतगुरु के सार शब्द की डोर द्वारा ही गमन संभव है। यहाँ की महिमा बुद्धि की कल्पना से भी परे है।',
      pb: 'ਅਗਮ ਪੁਰਸ਼ ਦਾ ਸਥਾਨ ਜਿੱਥੇ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਸਾਰ ਸ਼ਬਦ ਦੀ ਡੋਰ ਨਾਲ ਹੀ ਪਹੁੰਚਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
      en: 'The sacred abode of Agam Purush, traversed exclusively through the Satguru\'s Sar Shabad.',
    },
    kabirSagarVerse: {
      hi: 'अगम देश की अजब कहानी, जो जाने सोई पहचाने। सतगुरु कबीर साहेब अगम लखाया, आवागमन का कष्ट मिटाया॥',
      pb: 'ਅਗਮ ਦੇਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ, ਜੋ ਜਾਨੇ ਸੋਈ ਪਹਿਚਾਨੇ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਗਮ ਲਖਾਯਾ, ਆਵਾਗਮਨ ਕਾ ਕਸ਼ਟ ਮਿਟਾਯਾ॥',
      en: 'Wondrous is the realm of Agam; Satguru Kabir Saheb reveals this mystery and removes all suffering.',
    },
    soulExperience: {
      hi: 'हंस अगम अवस्था में तल्लीन होकर पूर्ण रूप से वासना-मुक्त और शांत हो जाता है।',
      pb: 'ਹੰਸ ਅਗਮ ਅਵਸਥਾ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸ਼ਾਂਤ ਤੇ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'The soul enters deep transcendental communion, completely free of any residual impression.',
    },
    unlockedWith: {
      hi: 'सार शब्द की अखंड डोर पर आरोहण।',
      pb: 'ਸਾਰ ਸ਼ਬਦ ਦੀ ਅਖੰਡ ਡੋਰ \'ਤੇ ਆਰੋਹਣ।',
      en: 'Ascension along the unbroken current of the Satguru\'s Sar Shabad.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (ज्ञान सागर): अगम लोक में सुरति ठहरते ही जन्म-मरण का बीज दग्ध हो जाता है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਅਗਮ ਲੋਕ ਵਿੱਚ ਸੁਰਤਿ ਟਿਕਣ ਨਾਲ ਜਨਮ-ਮਰਨ ਮੁੱਕ ਜਾਂਦਾ ਹੈ।',
      en: 'Kabir Sagar: As the attention rests in Agam Lok, the seeds of transmigration are destroyed.',
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
      hi: 'अगम लोक और सत्यलोक के मध्य स्थित अनिर्वचनीय दिव्य आध्यात्मिक मंडल',
      pb: 'ਅਗਮ ਲੋਕ ਤੇ ਸਤਯਲੋਕ ਦੇ ਵਿਚਕਾਰ ਅਲੌਕਿਕ ਆਧਿਆਤਮਿਕ ਮੰਡਲ',
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
    id: 'stage-satlok',
    stageNumber: 4,
    realmType: 'satyaloka',
    title: {
      hi: 'सत्यलोक / अमरलोक (सचखंड — सतपुरुष सतगुरु कबीर साहेब धाम)',
      pb: 'ਸਤਯਲੋਕ / ਅਮਰਲੋਕ (ਸੱਚਖੰਡ — ਸਤਿਪੁਰੁਸ਼ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਧਾਮ)',
      en: 'Satyalok / Amarlok (Sachkhand — Satguru Kabir Saheb)',
    },
    region: {
      hi: 'अमरलोक का मुख्य शाश्वत धाम — जहाँ एक-एक हंस का तेज करोड़ों सूर्यों से अधिक है',
      pb: 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਪ੍ਰਵੇਸ਼ ਧਾਮ — ਜਿੱਥੇ ਹੰਸ ਦਾ ਤੇਜ ਕ੍ਰੋੜਾਂ ਸੂਰਜਾਂ ਤੋਂ ਵੱਧ ਹੈ',
      en: 'The Eternal Abode of Satpurush Satguru Kabir Saheb',
    },
    nature: {
      hi: 'जहाँ न जन्म है, न मृत्यु, न काल, न माया, न कर्म। चारों ओर अमृत के मानसरोवर, कल्पवृक्ष और प्रेम का साम्राज्य है। सतपुरुष सतगुरु कबीर साहेब साक्षात विराजमान हैं।',
      pb: 'ਜਿੱਥੇ ਨਾ ਮੌਤ ਹੈ, ਨਾ ਮਾਇਆ, ਨਾ ਕਾਲ। ਸਤਿਪੁਰੁਸ਼ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਆਪ ਬਿਰਾਜਮਾਨ ਹਨ।',
      en: 'Free from birth, death, decay, and karma. Filled with wishing trees and lakes of nectar.',
    },
    kabirSagarVerse: {
      hi: 'कोटिन रवि जाके तेज प्रकाशा, हंसा करहिं अमृत का पासा। सत्य सतगुरु कबीर साहेब सुखदाई, अमर लोक में ज्योत जगाई॥',
      pb: 'ਕੋਟਿਨ ਰਵਿ ਜਾਕੇ ਤੇਜ ਪ੍ਰਕਾਸ਼ਾ, ਹੰਸਾ ਕਰਹਿਂ ਅੰਮ੍ਰਿਤ ਕਾ ਪਾਸਾ। ਸਤਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸੁਖਦਾਈ, ਅਮਰ ਲੋਕ ਮੇਂ ਜਯੋਤ ਜਗਾਈ॥',
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
      en: 'The eternal anchor of Satyanaam and unconditional grace of Satguru Kabir Saheb.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (अनुराग सागर): सत्यलोक में काल का कोई प्रवेश नहीं; यहाँ हंस सदैव अमर रहते हैं।',
      pb: 'ਕਬੀਰ ਸਾਗਰ (ਅਨੁਰਾਗ ਸਾਗਰ): ਸਤਯਲੋਕ ਵਿੱਚ ਕਾਲ ਦਾ ਕੋਈ ਦਾਖ਼ਲਾ ਨਹੀਂ।',
      en: 'Kabir Sagar: In Satyalok, Kaal has no power; souls dwell eternally immortal.',
    },
  },
  {
    id: 'stage-bhanwar',
    stageNumber: 5,
    realmType: 'transition',
    title: {
      hi: 'भंवर गुफा (सोहं लोक — मुरली नाद)',
      pb: 'ਭੰਵਰ ਗੁਫ਼ਾ (ਸੋਹੰ ਲੋਕ — ਮੁਰਲੀ ਨਾਦ)',
      en: 'Bhanwar Gupha (Soham Realm — Flute Melody)',
    },
    region: {
      hi: 'अमरलोक का प्रवेश द्वार — दिव्य मुरली नाद क्षेत्र',
      pb: 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਦੁਆਰ — ਮੁਰਲੀ ਨਾਦ ਖੇਤਰ',
      en: 'Entry Portal to Amarlok — Celestial Flute Zone',
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
      hi: 'महासुन्न (१६ शंख योजन का महाशून्य)',
      pb: 'ਮਹਾਸੁੰਨ (੧੬ ਸ਼ੰਖ ਯੋਜਨ ਦਾ ਮਹਾ-ਸ਼ੁੰਨ)',
      en: 'Mahasunna (The Great Celestial Void)',
    },
    region: {
      hi: 'सोलह शंख योजन का अगाध महाशून्य जिसे केवल सतगुरु का सत्यनाम पार कराता है',
      pb: '੧੬ ਸ਼ੰਖ ਯੋਜਨ ਦਾ ਗੰਭੀਰ ਖਲਾਅ ਜੋ ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਸਤਯਨਾਮ ਨਾਲ ਪਾਰ ਹੁੰਦਾ ਹੈ',
      en: '16 Shankh Yojanas Void Crossed via Satyanaam',
    },
    nature: {
      hi: 'यहाँ न सूर्य है, न चंद्रमा। चारों ओर अगाध नीरवता और शून्य है। सतगुरु का पावन सत्यनाम ही साधक का हाथ पकड़कर इस महाशून्य को पार कराता है।',
      pb: 'ਇੱਥੇ ਨਾ ਸੂਰਜ ਹੈ ਨਾ ਚੰਦ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦਾ ਸਤਯਨਾਮ ਹੀ ਇਸ ਮਹਾ-ਸ਼ੁੰਨ ਤੋਂ ਪਾਰ ਲੰਘਾਉਂਦਾ ਹੈ।',
      en: 'Where neither sun nor moon shines; crossed solely by holding the Satguru\'s Satyanaam.',
    },
    kabirSagarVerse: {
      hi: 'महाशून्य की घाटी भारी, गुरु बिनु पार न पावै कोई। सत्यनाम की नौका भारी, हंस पार उतरे सुखकारी॥',
      pb: 'ਮਹਾਸ਼ੁੰਨ ਕੀ ਘਾਟੀ ਭਾਰੀ, ਗੁਰੂ ਬਿਨੁ ਪਾਰ ਨ ਪਾਵੇ ਕੋਈ। ਸਤਯਨਾਮ ਕੀ ਨੌਕਾ ਭਾਰੀ, ਹੰਸ ਪਾਰ ਉਤਰੇ ਸੁਖਕਾਰੀ॥',
      en: 'Vast is the valley of Mahasunna; only the boat of Satyanaam carries the soul across.',
    },
    soulExperience: {
      hi: 'सतगुरु हंस का हाथ पकड़कर इस महाशून्य को पलक झपकते ही पार करा देते हैं।',
      pb: 'ਸਤਿਗੁਰੂ ਹੰਸ ਦੀ ਬਾਂਹ ਫੜ ਕੇ ਇਸ ਘਾਟੀ ਨੂੰ ਪਾਰ ਕਰਵਾਉਂਦੇ ਹਨ।',
      en: 'The living Satguru holds the soul\'s hand, carrying it across the vast void in an instant.',
    },
    unlockedWith: {
      hi: 'सतगुरु के प्रति अनन्य प्रेम व सत्यनाम सुमिरन।',
      pb: 'ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਪੂਰਨ ਸਮਰਪਣ ਤੇ ਸਤਯਨਾਮ ਸਿਮਰਨ।',
      en: 'Total surrender and Satyanaam contemplation through the Satguru.',
    },
    granthTeaching: {
      hi: 'कबीर सागर (हंस प्रबोध): बिना पूर्ण सतगुरु और सत्यनाम के महासुन्न को पार करना असंभव है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਪੂਰਨ ਸਤਿਗੁਰੂ ਤੇ ਸਤਯਨਾਮ ਤੋਂ ਬਿਨਾਂ ਮਹਾਸੁੰਨ ਪਾਰ ਕਰਨਾ ਅਸੰਭਵ ਹੈ।',
      en: 'Kabir Sagar: Without the Complete Satguru and Satyanaam, crossing Mahasunna is impossible.',
    },
  },
  {
    id: 'stage-parabrahm',
    stageNumber: 7,
    realmType: 'transition',
    title: {
      hi: 'पारब्रह्म (सुन्न एवं मानसरोवर)',
      pb: 'ਪਾਰਬ੍ਰਹਮ (ਸੁੰਨ ਤੇ ਮਾਨਸਰੋਵਰ)',
      en: 'Parabrahm (Sunn & Mansarovar)',
    },
    region: {
      hi: 'अक्षर पुरुष का सुन्न मंडल व पवित्र मानसरोवर स्नान क्षेत्र',
      pb: 'ਅਕਸ਼ਰ ਪੁਰਸ਼ ਦਾ ਸੁੰਨ ਮੰਡਲ ਤੇ ਪਵਿੱਤਰ ਮਾਨਸਰੋਵਰ ਇਸ਼ਨਾਨ ਖੇਤਰ',
      en: 'Sunn Plane of Akshar Purush & Sacred Mansarovar Pool',
    },
    nature: {
      hi: 'त्रिकुटी से ऊपर पारब्रह्म (सुन्न) मंडल स्थित है। यहाँ मानसरोवर के अमृत कुंड में स्नान कर जीवात्मा समस्त सूक्ष्म और कारण आवरणों को त्यागकर निर्मल हंस बन जाती है।',
      pb: 'ਤ੍ਰਿਕੁਟੀ ਤੋਂ ਉੱਪਰ ਪਾਰਬ੍ਰਹਮ (ਸੁੰਨ) ਮੰਡਲ ਹੈ। ਇੱਥੇ ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਕੇ ਆਤਮਾ ਨਿਰਮਲ ਹੰਸ ਬਣਦੀ ਹੈ।',
      en: 'Above Trikuti lies Parabrahm (Sunn), where bathing in Mansarovar cleanses causal sheaths and transforms the soul into a pure Hansa.',
    },
    kabirSagarVerse: {
      hi: 'मानसरोवर न्हाय के, हंसा भये सचेत। पाप-पुण्य सब दूर भये, निरमल भयो निकेत॥',
      pb: 'ਮਾਨਸਰੋਵਰ ਨ੍ਹਾਏ ਕੇ, ਹੰਸਾ ਭਏ ਸਚੇਤ। ਪਾਪ-ਪੁੰਨ ਸਬ ਦੂਰ ਭਏ, ਨਿਰਮਲ ਭਯੋ ਨਿਕੇਤ॥',
      en: 'By bathing in Mansarovar the Hansa awakens; all karmic stains wash away.',
    },
    soulExperience: {
      hi: 'करोड़ों जन्मों के सूक्ष्म संस्कार धुल जाते हैं और हंस का स्वरूप सौ सूर्यों के समान चमक उठता है।',
      pb: 'ਕਰੋੜਾਂ ਜਨਮਾਂ ਦੇ ਸੂਖਮ ਮੈਲ ਧੁਲ ਜਾਂਦੇ ਹਨ ਅਤੇ ਹੰਸ ਨਿਰਮਲ ਹੋ ਜਾਂਦਾ ਹੈ।',
      en: 'All subtle karmic impressions wash away and the soul radiates crystal purity.',
    },
    unlockedWith: {
      hi: 'त्रिकुटी के पार सुरति को सुन्न में स्थिर करना।',
      pb: 'ਤ੍ਰਿਕੁਟੀ ਤੋਂ ਪਾਰ ਸੁਰਤਿ ਨੂੰ ਸੁੰਨ ਵਿੱਚ ਟਿਕਾਉਣਾ।',
      en: 'Anchoring inner Surat in Sunn beyond Trikuti.',
    },
    granthTeaching: {
      hi: 'कबीर सागर: मानसरोवर में स्नान करते ही सूक्ष्म व कारण देह का मैल समाप्त होकर हंस आगे बढ़ता है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਮਾਨਸਰੋਵਰ ਵਿੱਚ ਇਸ਼ਨਾਨ ਨਾਲ ਆਤਮਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਿਰਮਲ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Kabir Sagar: Mansarovar purifies the soul of all subtle and causal coverings.',
    },
  },
  {
    id: 'stage-trikuti',
    stageNumber: 8,
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
    stageNumber: 9,
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
  const [stageDetailModalOpen, setStageDetailModalOpen] = useState(false);
  const [activeSubtleLevelModal, setActiveSubtleLevelModal] = useState<(typeof levels)[number] | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch {
          // Ignore unmount cleanup error
        }
        oscillatorRef.current = null;
      }
    };
  }, []);

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
    <div className="space-y-4 sm:space-y-6 pb-16 max-w-5xl mx-auto px-3 sm:px-6 py-2 sm:py-4 relative z-10 pointer-events-auto">
      {/* Top Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, #6B1800 0%, #8B2500 55%, #9A3412 100%)',
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
                {language === 'pb' ? '੧. ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਲੋਕ)' : language === 'en' ? '1. Anami Lok (Akah Lok)' : '१. अनामी लोक (अकह लोक)'}
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

          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 
          className="text-base sm:text-xl md:text-2xl font-black font-serif tracking-tight leading-snug px-1"
          style={{ color: theme.sacredMaroon }}
        >
          {language === 'pb' 
            ? 'ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਲੋਕ) → ਅਗਮ ਲੋਕ → ਅਲਖ ਲੋਕ → ਸਤਯਲੋਕ (ਅਮਰਲੋਕ) → ਭੰਵਰ ਗੁਫ਼ਾ → ਮਹਾਸੁੰਨ → ਪਾਰਬ੍ਰਹਮ (ਸੁੰਨ) → ਤ੍ਰਿਕੁਟੀ → ੨੧ ਬ੍ਰਹਿਮੰਡ' 
            : language === 'en' 
            ? 'Anami Lok (Akah Lok) → Agam Lok → Alakh Lok → Satyalok (Amarlok) → Bhanwar Gupha → Mahasunna → Parabrahm (Sunn) → Trikuti → 21 Brahmands' 
            : 'अनामी लोक (अकह लोक) → अगम लोक → अलख लोक → सत्यलोक (अमरलोक) → भंवर गुफा → महासुन्न → पारब्रह्म (सुन्न) → त्रिकुटी → २१ ब्रह्मांड'}
        </h1>
        
        <p className="text-xs sm:text-sm max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-serif leading-relaxed px-2">
          {language === 'pb'
            ? 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ ਪਾਵਨ ਸ੍ਰਿਸ਼ਟੀ ਕ੍ਰਮ: ਸਭ ਤੋਂ ਉੱਪਰ ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਲੋਕ), ਉਸ ਤੋਂ ਬਾਅਦ ਅਗਮ, ਅਲਖ, ਸਤਯਲੋਕ (ਅਮਰਲੋਕ), ਭੰਵਰ ਗੁਫ਼ਾ, ਮਹਾਸੁੰਨ, ਪਾਰਬ੍ਰਹਮ (ਸੁੰਨ), ਤ੍ਰਿਕੁਟੀ ਅਤੇ ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡ।'
            : language === 'en'
            ? 'Authentic Kabir Sagar order: Anami Lok (Akah Lok) at the supreme apex, followed by Agam Lok, Alakh Lok, Satyalok (Amarlok), Bhanwar Gupha, Mahasunna, Parabrahm (Sunn), Trikuti, and the 21 Brahmands of Kaal.'
            : 'कबीर सागर अनुसार पावन सृष्टि क्रम: सर्वोच्च शिखर अनामी लोक (अकह लोक), उसके उपरांत अगम लोक, अलख लोक, सत्यलोक (अमरलोक), भंवर गुफा, महासुन्न, पारब्रह्म (सुन्न), त्रिकुटी एवं काल के २१ ब्रह्मांड।'}
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
            className="p-1 rounded-2xl border-2 shadow-sm inline-flex gap-1 max-w-full flex-wrap sm:flex-nowrap justify-center backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveViewTab('visualizer');
              }}
              style={{
                backgroundColor: activeViewTab === 'visualizer' ? theme.buttonPrimaryBg : 'transparent',
                color: activeViewTab === 'visualizer' ? theme.buttonPrimaryText : theme.textPrimary,
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
              <span className="whitespace-nowrap">{language === 'pb' ? 'ਬ੍ਰਹਿਮੰਡ ਚੱਕਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Brahmand Chakra Darshan' : 'ब्रह्मांड चक्र दर्शन'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveViewTab('stages-list');
              }}
              style={{
                backgroundColor: activeViewTab === 'stages-list' ? theme.buttonPrimaryBg : 'transparent',
                color: activeViewTab === 'stages-list' ? theme.buttonPrimaryText : theme.textPrimary,
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
                backgroundColor: activeViewTab === 'subtle-levels' ? theme.buttonPrimaryBg : 'transparent',
                color: activeViewTab === 'subtle-levels' ? theme.buttonPrimaryText : theme.textPrimary,
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-serif transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">{language === 'pb' ? '੯ ਸੂਖਮ ਲੋਕ ਤੇ ਨਾਦ' : language === 'en' ? '9 Subtle Planes & Hz' : '९ सूक्ष्म लोक एवं नाद'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Active Naad Indicator (Shown ONLY when a Naad frequency is actively playing) */}
      {(playingFreq !== null || journeyActive) && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
          className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-2xl border shadow-xs text-xs font-serif"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Volume2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="truncate font-bold" style={{ color: theme.sacredMaroon }}>
              {language === 'pb'
                ? `ਅਨਹਦ ਨਾਦ ਧੁਨੀ ਚਾਲੂ: ${levels.find(l => l.id === playingFreq)?.frequency || ''}`
                : language === 'en'
                ? `Active Naad Frequency: ${levels.find(l => l.id === playingFreq)?.frequency || ''}`
                : `सक्रिय नाद ध्वनि: ${levels.find(l => l.id === playingFreq)?.frequency || ''}`}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setJourneyActive(false);
              stopFrequency();
            }}
            className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold cursor-pointer shrink-0 hover:bg-rose-700"
          >
            {language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें'}
          </button>
        </div>
      )}

      {/* TAB 1: Brahmand Chakra Darshan (Sunburst, Network & Tree Visualizer) */}
      {activeViewTab === 'visualizer' && (
        <div className="space-y-4 sm:space-y-6 relative z-20 pointer-events-auto">
          <div 
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="p-3 sm:p-5 rounded-3xl border-2 space-y-4 shadow-sm relative z-20 pointer-events-auto"
          >
            <Suspense fallback={<SacredLoader language={language} compact />}>
              <EChartsUniverseVisualizer
                externalSearchQuery={searchFilter}
                onSelectNode={(node) => {
                  const titleLower = node.title.toLowerCase();
                  const match = SACRED_UNIVERSE_STAGES.find(s => 
                    titleLower.includes(s.title.hi.toLowerCase()) ||
                    s.title.hi.toLowerCase().includes(titleLower) ||
                    titleLower.includes(s.title.pb.toLowerCase()) ||
                    titleLower.includes(s.title.en.toLowerCase())
                  );
                  if (match) {
                    setSelectedStageId(match.id);
                  }
                }}
              />
            </Suspense>
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
                  {filteredStages.length} {language === 'pb' ? 'ਮੰਡਲ' : language === 'en' ? 'Realms' : 'मंडल'}
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
                    <button
                      type="button"
                      key={stg.id}
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setSelectedStageId(stg.id);
                        setStageDetailModalOpen(true);
                      }}
                      style={{
                        backgroundColor: isSelected ? theme.stepActiveBg : theme.cardBg,
                        borderColor: isSelected ? (isAnami ? '#dc2626' : theme.accentGold) : theme.cardBorder,
                      }}
                      className={`relative z-10 pointer-events-auto touch-manipulation w-full text-left p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer shadow-2xs flex items-center justify-between gap-2.5 overflow-hidden ${
                        isSelected ? 'ring-2 ring-amber-500/40 shadow-md' : 'opacity-95 hover:opacity-100'
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
                          ? (language === 'pb' ? 'ਅਮਰਲੋਕ' : language === 'en' ? 'Amarlok' : 'अमरलोक') 
                          : isTransition 
                          ? (language === 'pb' ? 'ਪਾਰਬ੍ਰਹਮ' : language === 'en' ? 'Parabrahm' : 'पारब्रह्म') 
                          : (language === 'pb' ? '੨੧ ਬ੍ਰਹਿਮੰਡ' : language === 'en' ? '21 Brahmands' : '२१ ब्रह्मांड')}
                      </span>
                    </button>
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
                  className="rounded-3xl border-2 shadow-xl p-4 sm:p-6 space-y-3.5 overflow-hidden break-words backdrop-blur-md"
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
                backgroundColor: journeyActive ? theme.buttonPrimaryBg : theme.bgSecondary,
                borderColor: journeyActive ? theme.buttonPrimaryBg : theme.accentGold,
                color: journeyActive ? theme.buttonPrimaryText : theme.sacredMaroon
              }}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border-2 text-xs font-bold flex items-center gap-2 transition-all hover:shadow-md active:scale-95 shadow-sm cursor-pointer backdrop-blur-md"
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

          <div className="max-w-4xl mx-auto px-1 sm:px-2 relative z-20 pointer-events-auto space-y-3 sm:space-y-4">
            {levels.map((level) => {
              const isExpanded = expandedId === level.id;
              const isPlaying = playingFreq === level.id;
              const colors = getLevelColors(level.id);
              const isAnami = level.id === 1;
              const isSpiritualRealm = level.id <= 3;

              return (
                <div
                  key={level.id}
                  role="button"
                  tabIndex={0}
                  style={{ 
                    backgroundColor: theme.cardBg, 
                    borderColor: isExpanded ? (isAnami ? '#dc2626' : theme.accentGold) : theme.cardBorder,
                  }}
                  className={`relative z-20 pointer-events-auto touch-manipulation p-3.5 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer shadow-sm overflow-hidden break-words ${
                    isExpanded ? 'ring-2 ring-amber-500/40 shadow-md' : 'hover:border-amber-500/50'
                  }`}
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setExpandedId(level.id);
                    setActiveSubtleLevelModal(level);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      sacredHaptics.lightTap();
                      setExpandedId(level.id);
                      setActiveSubtleLevelModal(level);
                    }
                  }}
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
                              👑 {language === 'pb' ? 'ਸਰਵਉੱਚ ਸ਼ਿਖਰ' : language === 'en' ? 'Supreme Apex' : 'सर्वोच्च शिखर'}
                            </span>
                          ) : isSpiritualRealm ? (
                            <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-tighter bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border border-amber-300">
                              {language === 'pb' ? 'ਅਮਰਲੋਕ' : language === 'en' ? 'Amarlok' : 'अमरलोक'}
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
                            className="relative z-30 pointer-events-auto flex items-center gap-1 hover:underline cursor-pointer shrink-0 px-1.5 py-0.5 rounded-md bg-amber-500/10"
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

                  {isExpanded && (
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Centered Modal: Tab 2 Kabir Sagar Upadesh Detail Panel */}
      {stageDetailModalOpen && (
        <div
          onClick={() => setStageDetailModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 14px',
          }}
          className="bg-black/60 backdrop-blur-xs pointer-events-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '480px',
              maxHeight: 'calc(100dvh - 104px)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: theme.cardBg,
              borderColor: currentStage.realmType === 'anamilok' ? '#dc2626' : theme.accentGold,
            }}
            className="border-2 shadow-2xl font-serif"
          >
            {/* Pinned Header */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b shrink-0" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 block">
                  {language === 'pb' ? `ਪੜਾਅ ${currentStage.stageNumber}` : language === 'en' ? `Realm ${currentStage.stageNumber}` : `पड़ाव ${currentStage.stageNumber}`}
                </span>
                <h3 style={{ color: theme.sacredMaroon }} className="text-sm sm:text-base font-black leading-snug break-words">
                  {currentStage.title[language]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setStageDetailModalOpen(false)}
                className="p-1.5 rounded-full bg-black/10 dark:bg-white/10 hover:opacity-80 cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1 break-words">
              <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                📍 {currentStage.region[language]}
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t.realmNature}
                </span>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                  {currentStage.nature[language]}
                </p>
              </div>

              <div style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }} className="p-3 rounded-2xl border space-y-1">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ ਉਪਦੇਸ਼:' : language === 'en' ? 'Kabir Sagar Upadesh:' : 'कबीर सागर उपदेश:'}</span>
                </div>
                <p className="text-xs leading-snug font-medium text-amber-950 dark:text-amber-100">
                  {currentStage.granthTeaching[language]}
                </p>
              </div>

              <div style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }} className="p-3 rounded-2xl border space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {t.soulInternalState}
                </span>
                <p className="text-xs leading-snug">{currentStage.soulExperience[language]}</p>
              </div>

              <div style={{ borderColor: theme.accentGold }} className="p-3 rounded-2xl border-l-4 bg-amber-500/10 space-y-1">
                <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block">
                  {t.kabirSagarProof}
                </span>
                <p className="italic font-black text-xs text-amber-950 dark:text-amber-100 leading-relaxed">
                  "{currentStage.kabirSagarVerse[language]}"
                </p>
              </div>

              <div className="text-xs flex items-center justify-between gap-2 flex-wrap pt-1">
                <span className="text-gray-500 dark:text-gray-400">{t.liberationKey}</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">✓ {currentStage.unlockedWith[language]}</span>
              </div>
            </div>

            {/* Pinned Footer */}
            <div className="px-4 py-2.5 border-t flex justify-end shrink-0" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
              <button
                type="button"
                onClick={() => setStageDetailModalOpen(false)}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="px-4 py-1.5 rounded-xl font-bold text-xs cursor-pointer"
              >
                {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Centered Modal: Tab 3 Subtle Lok Kabir Sagar Upadesh Panel */}
      {activeSubtleLevelModal && (
        <div
          onClick={() => setActiveSubtleLevelModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 14px',
          }}
          className="bg-black/60 backdrop-blur-xs pointer-events-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '480px',
              maxHeight: 'calc(100dvh - 104px)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
            }}
            className="border-2 shadow-2xl font-serif"
          >
            {/* Pinned Header */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b shrink-0" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs text-white bg-amber-600 shrink-0">
                  {activeSubtleLevelModal.id}
                </span>
                <h3 style={{ color: theme.sacredMaroon }} className="text-sm sm:text-base font-black leading-snug break-words">
                  {activeSubtleLevelModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubtleLevelModal(null)}
                className="p-1.5 rounded-full bg-black/10 dark:bg-white/10 hover:opacity-80 cursor-pointer shrink-0"
                aria-label="Close Upadesh"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1 break-words">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-0.5">
                  {t.entityLabel}
                </span>
                <span className="font-bold" style={{ color: theme.textPrimary }}>{activeSubtleLevelModal.entity}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ ਉਪਦੇਸ਼:' : language === 'en' ? 'Kabir Sagar Upadesh:' : 'कबीर सागर उपदेश:'}
                </span>
                <p className="text-xs sm:text-sm leading-relaxed font-sans" style={{ color: theme.textSecondary }}>
                  {activeSubtleLevelModal.description}
                </p>
              </div>

              {activeSubtleLevelModal.vani && (
                <div className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 space-y-1">
                  <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block">
                    {t.vaniLabel}
                  </span>
                  <p className="italic font-bold text-xs leading-relaxed" style={{ color: theme.textPrimary }}>
                    {activeSubtleLevelModal.vani}
                  </p>
                </div>
              )}
            </div>

            {/* Pinned Footer */}
            <div className="px-4 py-2.5 border-t flex items-center justify-between gap-2 shrink-0" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
              <button
                type="button"
                onClick={() => playFrequency(activeSubtleLevelModal.frequency, activeSubtleLevelModal.id)}
                className="px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/15 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                style={{ color: theme.sacredMaroon }}
              >
                {playingFreq === activeSubtleLevelModal.id ? <VolumeX className="w-3.5 h-3.5 text-rose-600" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>
                  {playingFreq === activeSubtleLevelModal.id
                    ? (language === 'pb' ? 'ਨਾਦ ਰੋਕੋ' : language === 'en' ? 'Stop Naad' : 'नाद रोकें')
                    : `${t.listenFrequencyBtn} (${activeSubtleLevelModal.frequency})`}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSubtleLevelModal(null)}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="px-4 py-1.5 rounded-xl font-bold text-xs cursor-pointer"
              >
                {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
