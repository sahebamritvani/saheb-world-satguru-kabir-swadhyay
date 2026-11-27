import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Droplets, 
  Volume2, 
  VolumeX, 
  Share2, 
  Check, 
  ExternalLink, 
  Compass, 
  Radio, 
  BookOpen, 
  Heart,
  ChevronRight,
  Sun,
  Flame,
  Award,
  CircleDot
} from 'lucide-react';
import { Language, AppView, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { formatCoupletString } from '../utils/textSanitizer';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface MoolSiddhantModuleProps {
  language: Language;
  onClose: () => void;
  onNavigateView?: (view: AppView) => void;
  onSelectLanguage?: (lang: Language) => void;
}

interface DohaItem {
  id: number;
  doha: string;
  source: {
    hi: string;
    pb: string;
    en: string;
  };
  isCrossReference?: boolean;
  meaning: {
    hi: string;
    pb: string;
    en: string;
  };
}

export const MoolSiddhantModule: React.FC<MoolSiddhantModuleProps> = ({
  language,
  onClose,
  onNavigateView,
  onSelectLanguage,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [activeLang, setActiveLang] = useState<Language>(language);
  const [isWatered, setIsWatered] = useState(false);
  const [activeYugaIndex, setActiveYugaIndex] = useState(0);
  const [playingDohaId, setPlayingDohaId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    setActiveLang(language);
  }, [language]);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Web Audio offline divine chime when watering the root
  const playSacredWaterChime = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      // Frequencies corresponding to divine pentatonic chord: C5, E5, G5, B5, C6
      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.5];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } catch {}
  };

  const handleToggleWater = () => {
    sacredHaptics.mediumTap();
    playSacredWaterChime();
    setIsWatered((prev) => !prev);
  };

  // TTS speech recitation
  const handleToggleSpeech = (dohaItem: DohaItem) => {
    sacredHaptics.lightTap();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (playingDohaId === dohaItem.id) {
      window.speechSynthesis.cancel();
      setPlayingDohaId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingDohaId(dohaItem.id);

    const textToSpeak = `${dohaItem.doha}. ${dohaItem.meaning[activeLang] || dohaItem.meaning.hi}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    if (activeLang === 'pb') {
      utterance.lang = 'pa-IN';
    } else if (activeLang === 'en') {
      utterance.lang = 'en-IN';
    } else {
      utterance.lang = 'hi-IN';
    }

    utterance.rate = 0.88;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setPlayingDohaId(null);
    };
    utterance.onerror = () => {
      setPlayingDohaId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // WhatsApp Share for specific Doha
  const handleShareDoha = (dohaItem: DohaItem) => {
    sacredHaptics.lightTap();
    const liveUrl = typeof window !== 'undefined' ? window.location.origin : 'https://saheb-world-satguru-kabir-swadhyay.vercel.app/';
    const header = SACRED_BRANDING.header[activeLang] || SACRED_BRANDING.header.hi;
    const sourceLabel = activeLang === 'pb' ? 'ਸਰੋਤ' : activeLang === 'en' ? 'Source' : 'स्रोत';
    const meaningLabel = activeLang === 'pb' ? 'ਭਾਵਾਰਥ' : activeLang === 'en' ? 'Meaning' : 'भावार्थ';
    const openLabel =
      activeLang === 'pb'
        ? 'ਪਾਵਨ ਸਵਾਧਿਆਏ ਲਈ ਸਾਹੇਬ ਵਰਲਡ ਖੋਲ੍ਹੋ:'
        : activeLang === 'en'
        ? 'Explore full Swadhyay in Saheb World:'
        : 'पावन स्वाध्याय हेतु साहेब वर्ल्ड खोलें:';
    const footer = SACRED_BRANDING.footer[activeLang] || SACRED_BRANDING.footer.hi;

    const text = `${header}\n\n${formatCoupletString(dohaItem.doha)}\n\n📌 ${sourceLabel}: ${dohaItem.source[activeLang] || dohaItem.source.hi}\n\n📖 ${meaningLabel}: ${dohaItem.meaning[activeLang] || dohaItem.meaning.hi}\n\n👉 ${openLabel}\n${liveUrl}/#mool-siddhant\n\n${footer}`;

    if (navigator.share) {
      navigator.share({
        title:
          activeLang === 'pb'
            ? 'ਮੂਲ ਸਿਧਾਂਤ: ਇੱਕ ਸਤਯਨਾਮ ਤੋਂ ਸਭ ਸਧੈ'
            : activeLang === 'en'
            ? 'Core Principle: Master the One Satyanaam'
            : 'मूल सिद्धांत: एक सत्यनाम से सब सधै',
        text: text,
      }).catch(() => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      });
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }

    setCopiedId(dohaItem.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // 4 Yugas Data (Section C)
  const yugasData = [
    {
      yuga: {
        hi: 'सत्ययुग (सत्सुकृत)',
        pb: 'ਸਤਿਯੁਗ (ਸਤਸੁਕ੍ਰਿਤ)',
        en: 'Satyuga (Satsukrit)',
      },
      tagline: {
        hi: 'आदि सृष्टि बोध',
        pb: 'ਆਦਿ ਸ੍ਰਿਸ਼ਟੀ ਬੋਧ',
        en: 'Creation Dawn Realization',
      },
      message: {
        hi: 'सृष्टि के आरंभ से ही सत्यपुरुष और एक सत्यनाम की पहचान कराई।',
        pb: 'ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਆਰੰਭ ਤੋਂ ਹੀ ਸਤਿਪੁਰੁਸ਼ ਅਤੇ ਇੱਕ ਸਤਯਨਾਮ ਦੀ ਪਛਾਣ ਕਰਵਾਈ।',
        en: 'From the very dawn of creation, revealed Satpurush and the One Satyanaam.',
      },
      detail: {
        hi: 'सत्ययुग में सतगुरु कबीर साहेब "सत्सुकृत" नाम से अवतरित हुए। राजा सुकृत को अमर ज्ञान दिया और बताया कि संसार की उत्पत्ति से पूर्व भी केवल एक सत्यपुरुष और सत्यनाम ही अविनाशी था।',
        pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਸਤਗੁਰੂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ "ਸਤਸੁਕ੍ਰਿਤ" ਨਾਮ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ। ਰਾਜਾ ਸੁਕ੍ਰਿਤ ਨੂੰ ਅਮਰ ਗਿਆਨ ਦਿੱਤਾ ਅਤੇ ਸਤਯਨਾਮ ਦੀ ਸ਼ਾਸ਼ਵਤ ਮਹਿਮਾ ਦਰਸਾਈ।',
        en: 'In Satyuga, Satguru Kabir manifested as "Satsukrit", awakening King Sukrit to the immortal truth that before cosmos emerged, the One Satyanaam alone is eternal.',
      },
      badge: { hi: 'युग १', pb: 'ਯੁਗ ੧', en: 'Yuga 1' },
      color: 'from-amber-500 to-yellow-600',
    },
    {
      yuga: {
        hi: 'त्रेतायुग (मुनिन्द्र)',
        pb: 'ਤ੍ਰੇਤਾਯੁਗ (ਮੁਨਿੰਦ੍ਰ)',
        en: 'Tretayuga (Munindra)',
      },
      tagline: {
        hi: 'कर्मकांड निवारण',
        pb: 'ਕਰਮਕਾਂਡ ਨਿਵਾਰਣ',
        en: 'Beyond Ritualism',
      },
      message: {
        hi: 'कर्मकांडों से ऊपर उठकर केवल एक सत्यनाम के सुमिरन का मार्ग दिखाया।',
        pb: 'ਕਰਮਕਾਂਡਾਂ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਕੇਵਲ ਇੱਕ ਸਤਯਨਾਮ ਦੇ ਸੁਮਿਰਨ ਦਾ ਮਾਰਗ ਦਿਖਾਇਆ।',
        en: 'Rose above ritualism to illuminate the pure path of meditating on the One Satyanaam.',
      },
      detail: {
        hi: 'त्रेतायुग में "मुनिन्द्र साहेब" के रूप में पधारे। नल, नील, मंदोदरी और विभीषण को नामदान दिया तथा समुद्र पर पत्थर तैराने में सत्यनाम की अगाध शक्ति प्रकट की।',
        pb: 'ਤ੍ਰੇਤਾਯੁਗ ਵਿੱਚ "ਮੁਨਿੰਦ੍ਰ ਸਾਹੇਬ" ਦੇ ਰੂਪ ਵਿੱਚ ਪਧਾਰੇ। ਨਲ, ਨੀਲ ਅਤੇ ਵਿਭੀਸ਼ਣ ਨੂੰ ਨਾਮਦਾਨ ਦੇ ਕੇ ਸਤਯਨਾਮ ਦੀ ਅਥਾਹ ਸ਼ਕਤੀ ਪ੍ਰਗਟ ਕੀਤੀ।',
        en: 'In Tretayuga, manifested as "Munindra", initiating Nal, Neel, Mandodari, and Vibhishana into Satyanaam and demonstrating its supreme divine potency.',
      },
      badge: { hi: 'युग २', pb: 'ਯੁਗ ੨', en: 'Yuga 2' },
      color: 'from-orange-500 to-red-600',
    },
    {
      yuga: {
        hi: 'द्वापरयुग (करुणामय)',
        pb: 'ਦ੍ਵਾਪਰਯੁਗ (ਕਰੁਣਾਮਯ)',
        en: 'Dwaparyuga (Karunamay)',
      },
      tagline: {
        hi: 'पूर्ण शरणागति',
        pb: 'ਪੂਰਨ ਸ਼ਰਣਾਗਤੀ',
        en: 'Supreme Refuge',
      },
      message: {
        hi: 'अनेक भटकावों को छुड़ाकर एक पूर्ण परमात्मा की शरण में जोड़ा।',
        pb: 'ਅਨੇਕ ਭਟਕਾਵਾਂ ਤੋਂ ਛੁਡਾ ਕੇ ਇੱਕ ਪੂਰਨ ਪਰਮਾਤਮਾ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਜੋੜਿਆ।',
        en: 'Liberated souls from myriad illusions, uniting them in the refuge of the Supreme Lord.',
      },
      detail: {
        hi: 'द्वापरयुग में "करुणामय साहेब" के नाम से प्रकट होकर सुपच सुदर्शन (सुपच भगत) को सत्य भक्ति का अधिकारी बनाया और पाण्डवों के यज्ञ को सत्यनाम की कृपा से पूर्ण कराया।',
        pb: 'ਦ੍ਵਾਪਰਯੁਗ ਵਿੱਚ "ਕਰੁਣਾਮਯ ਸਾਹੇਬ" ਵਜੋਂ ਪ੍ਰਗਟ ਹੋ ਕੇ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਨੂੰ ਸੱਚੀ ਭਗਤੀ ਦਾ ਅਧਿਕਾਰੀ ਬਣਾਇਆ ਤੇ ਪਾਂਡਵਾਂ ਦੇ ਯੱਗ ਨੂੰ ਪੂਰਾ ਕਰਵਾਇਆ।',
        en: 'In Dwaparyuga as "Karunamay", blessed Supach Sudarshan, crowning the Pandavas\' great Yajna with the supreme grace of humble Satyanaam remembrance.',
      },
      badge: { hi: 'युग ३', pb: 'ਯੁਗ ੩', en: 'Yuga 3' },
      color: 'from-emerald-600 to-teal-700',
    },
    {
      yuga: {
        hi: 'कलियुग (सतगुरु कबीर साहेब)',
        pb: 'ਕਲਿਯੁਗ (ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ)',
        en: 'Kaliyuga (Satguru Kabir Saheb)',
      },
      tagline: {
        hi: 'परम सार शब्द',
        pb: 'ਪਰਮ ਸਾਰ ਸ਼ਬਦ',
        en: 'Ultimate Truth',
      },
      message: {
        hi: 'कहैं कबीर इस मूल (सत्यनाम) बिन सारा जीवन व्यर्थ है।',
        pb: 'ਕਹੈਂ ਕਬੀਰ ਇਸ ਮੂਲ (ਸਤਯਨਾਮ) ਬਿਨ ਸਾਰਾ ਜੀਵਨ ਵਿਅਰਥ ਹੈ।',
        en: 'Kabir proclaims: without this Root (Satyanaam), the entire life is in vain.',
      },
      detail: {
        hi: 'कलियुग में काशी के लहरतारा सरोवर में नीर-क्षीर कमल पर साक्षात "सतगुरु कबीर साहेब" प्रकट हुए। धनी धर्मदास जी को वंश बयालीस का वरदान और संसार को सत्यनाम से मोक्ष का अटल मार्ग दिया।',
        pb: 'ਕਲਿਯੁਗ ਵਿੱਚ ਕਾਸ਼ੀ ਦੇ ਲਹਰਤਾਰਾ ਸਰੋਵਰ \'ਤੇ ਸਤਗੁਰੂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪ੍ਰਗਟ ਹੋਏ। ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਨੂੰ ਵੰਸ਼ ਬਤਾਲੀ ਦਾ ਵਰਦਾਨ ਅਤੇ ਸਤਯਨਾਮ ਰਾਹੀਂ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਦਿੱਤਾ।',
        en: 'In Kaliyuga, manifested directly as "Satguru Kabir Saheb" upon the Lahartara lake in Kashi, gifting the Vansh Bayalis promise to Dhani Dharmadas and eternal salvation to humanity.',
      },
      badge: { hi: 'युग ४', pb: 'ਯੁਗ ੪', en: 'Yuga 4' },
      color: 'from-purple-600 to-indigo-800',
    },
  ];

  // 9 Pramanik Verses (Section D)
  const dohasList: DohaItem[] = [
    {
      id: 1,
      doha: 'कबीर सत्यनाम के सुमिरने, मिटे कर्म के लेख। सहजैं ही सतलोक जाहिं, जहाँ पुरुष अलेख॥',
      source: {
        hi: 'कबीर सागर',
        pb: 'ਕਬੀਰ ਸਾਗਰ',
        en: 'Kabir Sagar',
      },
      meaning: {
        hi: 'सत्यनाम का सुमिरन करने से जन्म-जन्मांतरों के कर्म-बंधन और भाग्य के अशुभ लेख मिट जाते हैं। जीव सहज ही सतलोक को प्राप्त होता है, जहाँ अगम-अगोचर अलेख पुरुष का निवास है।',
        pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨ ਨਾਲ ਜਨਮਾਂ-ਜਨਮਾਂ ਦੇ ਕਰਮਾਂ ਦੇ ਲੇਖ ਮਿਟ ਜਾਂਦੇ ਹਨ। ਜੀਵ ਸਹਿਜੇ ਹੀ ਸਤਲੋਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ, ਜਿੱਥੇ ਅਲੇਖ ਪੁਰਖ ਦਾ ਵਾਸਾ ਹੈ।',
        en: 'By remembering the sacred Satyanaam, the bindings of destiny and karmic accounts are erased. The soul effortlessly attains Satlok, the eternal abode of the Supreme Being.',
      },
    },
    {
      id: 2,
      doha: 'कबीर सत्यनाम सुमिर ले, यही सार है सार। और सकल जंजाल है, मत भटको संसार॥',
      source: {
        hi: 'कबीर साखी संग्रह',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
        en: 'Kabir Sakhi Sangrah',
      },
      meaning: {
        hi: 'हे मानव! केवल एक सत्यनाम का सुमिरन कर, यही समस्त ज्ञान और जीवन का मूल सार है। इसके अतिरिक्त संसार के सभी साधन केवल जंजाल और भटकाव हैं।',
        pb: 'ਹੇ ਜੀਵ! ਕੇਵਲ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰ, ਇਹੀ ਸਾਰਾ ਸਾਰ ਹੈ। ਬਾਕੀ ਸਭ ਦੁਨਿਆਵੀ ਜੰਜਾਲ ਹਨ, ਸੰਸਾਰ ਵਿੱਚ ਨਾ ਭਟਕ।',
        en: 'Meditate on Satyanaam alone, for that is the ultimate essence of essences; everything else in this world is mere entanglement.',
      },
    },
    {
      id: 3,
      doha: 'कबीर कोटि नाम संसार में, इनसे मुक्ति न होय। सत्यनाम मुक्ति का दाता, जाने विरला कोय॥',
      source: {
        hi: 'कबीर सागर - ज्ञान सागर',
        pb: 'ਕਬੀਰ ਸਾਗਰ - ਗਿਆਨ ਸਾਗਰ',
        en: 'Kabir Sagar (Gyan Sagar)',
      },
      meaning: {
        hi: 'संसार में करोड़ों नामों का उच्चारण होता है, किंतु उनसे परम मोक्ष की प्राप्ति नहीं होती। केवल सत्यनाम ही मुक्ति प्रदान करने वाला है, जिसे कोई विरला ही जानता है।',
        pb: 'ਸੰਸਾਰ ਵਿੱਚ ਕਰੋੜਾਂ ਨਾਮ ਹਨ ਪਰ ਉਨ੍ਹਾਂ ਨਾਲ ਮੁਕਤੀ ਨਹੀਂ ਹੁੰਦੀ। ਕੇਵਲ ਸਤਯਨਾਮ ਹੀ ਸੱਚੀ ਮੁਕਤੀ ਦਾ ਦਾਤਾ ਹੈ, ਜਿਸ ਨੂੰ ਕੋਈ ਵਿਰਲਾ ਹੀ ਪਛਾਣਦਾ ਹੈ।',
        en: 'Millions of names echo throughout the worldly realms, yet none can grant true liberation. Only Satyanaam is the giver of liberation, known only to rare seekers.',
      },
    },
    {
      id: 4,
      doha: 'सत्यनाम को सुमिर के, तर गये पतित अनेक। ताते कबहूँ न छोड़िये, सत्यनाम की टेक॥',
      source: {
        hi: 'कबीर साखी ग्रंथ',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਗ੍ਰੰਥ',
        en: 'Kabir Sakhi Granth',
      },
      meaning: {
        hi: 'सत्यनाम के पावन सुमिरन के प्रभाव से अनेक पापी और भटके हुए जीव भवसागर पार उतर गए। इसलिए जीवन में कभी भी सत्यनाम का आश्रय मत छोड़ो।',
        pb: 'ਸਤਯਨਾਮ ਦੇ ਪਵਿੱਤਰ ਸਿਮਰਨ ਨਾਲ ਅਨੇਕ ਭਟਕੇ ਹੋਏ ਜੀਵ ਤਰ ਗਏ। ਇਸ ਲਈ ਕਦੇ ਵੀ ਸਤਯਨਾਮ ਦਾ ਆਸਰਾ ਨਾ ਛੱਡੋ।',
        en: 'By reciting Satyanaam, countless fallen souls crossed the ocean of worldly existence. Therefore, never forsake the steadfast shelter of Satyanaam.',
      },
    },
    {
      id: 5,
      doha: 'कबीर एक न जाणिया, तो बहु जाण्या क्या होय। एक तें सब होत है, सब तें एक न होय॥',
      source: {
        hi: 'कबीर ग्रंथावली / बीजक',
        pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ / ਬੀਜਕ',
        en: 'Kabir Granthavali / Bijak',
      },
      meaning: {
        hi: 'यदि उस एक परम सत्य (सत्यनाम) को नहीं जाना, तो बहुत सारे शास्त्रों को जान लेने से क्या लाभ? उस एक मूल से सब कुछ सध जाता है, पर बाह्य शाखाओं को साधने से वह एक नहीं मिलता।',
        pb: 'ਜੇ ਇੱਕ ਸੱਚੇ ਪ੍ਰਭੂ ਨੂੰ ਨਾ ਜਾਣਿਆ, ਤਾਂ ਬਹੁਤ ਕੁਝ ਜਾਣ ਲੈਣ ਦਾ ਕੀ ਲਾਭ? ਉਸ ਇੱਕ ਤੋਂ ਸਭ ਕੁਝ ਹੁੰਦਾ ਹੈ, ਪਰ ਸਭ ਕੁਝ ਫੜਨ ਨਾਲ ਉਹ ਇੱਕ ਨਹੀਂ ਮਿਲਦਾ।',
        en: 'If you have not realized the One Supreme Truth, what is the use of knowing much else? From that One everything blossoms, but pursuing the many will never yield the One.',
      },
    },
    {
      id: 6,
      doha: 'मूल गहे ते सब गहे, डार गहे ते जाय। कह कबीर ते नर भये, जो रहे मूल लपटाय॥',
      source: {
        hi: 'कबीर साखी संग्रह',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
        en: 'Kabir Sakhi Sangrah',
      },
      meaning: {
        hi: 'वृक्ष के मूल (जड़) को पकड़ने से पूरा वृक्ष फलित होता है, पर केवल डालियों को पकड़ने से सब व्यर्थ हो जाता है। सतगुरु कबीर साहेब फरमाते हैं, वही मनुष्य धन्य हैं जो मूल सत्यनाम से जुड़े रहते हैं।',
        pb: 'ਜੜ੍ਹ ਨੂੰ ਫੜਨ ਨਾਲ ਸਾਰਾ ਰੁੱਖ ਸਧਦਾ ਹੈ, ਡਾਲੀਆਂ ਫੜਨ ਨਾਲ ਸਭ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ, ਉਹੀ ਧੰਨ ਹਨ ਜੋ ਮੂਲ ਸਤਯਨਾਮ ਨਾਲ ਜੁੜੇ ਰਹਿੰਦੇ ਹਨ।',
        en: 'Holding the root nourishes the entire tree; grasping only the outer branches leads to ruin. Satguru Kabir Saheb proclaims, blessed are those who stay anchored to the One Root.',
      },
    },
    {
      id: 7,
      doha: 'कबीर सो धन संचीऐ, जो आगै कउ होइ ॥ सीस चढ़ाए पोटली, ले जात न देखिओ कोइ ॥१५२॥',
      isCrossReference: true,
      source: {
        hi: 'श्री गुरु ग्रंथ साहिब (भगत कबीर जी, अंग १३७२, सलोक १५२)',
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ (ਭਗਤ ਕਬੀਰ ਜੀ, ਅੰਗ ੧੩੭੨, ਸਲੋਕ ੧੫੨)',
        en: 'Sri Guru Granth Sahib (Bhagat Kabir Ji, Ang 1372, Salok 152)',
      },
      meaning: {
        hi: 'सतगुरु कबीर साहेब समझाते हैं कि केवल उस सत्यनाम रूपी धन का संग्रह करो जो परलोक में तुम्हारे काम आए। सिर पर सांसारिक धन-दौलत की गठरी लादकर किसी को भी संसार से जाते नहीं देखा गया।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਉਹ ਸਤਯਨਾਮ ਧਨ ਇਕੱਠਾ ਕਰੋ ਜੋ ਅੱਗੇ ਪਰਲੋਕ ਵਿੱਚ ਕੰਮ ਆਵੇ। ਸਿਰ \'ਤੇ ਦੌਲਤ ਦੀ ਪੰਡ ਚੁੱਕ ਕੇ ਕਿਸੇ ਨੂੰ ਵੀ ਸੰਸਾਰ ਤੋਂ ਜਾਂਦੇ ਨਹੀਂ ਦੇਖਿਆ।',
        en: 'Satguru Kabir Saheb teaches: amass only that wealth of Naam which shall accompany you in the hereafter; no one has ever been seen carrying worldly riches upon their head.',
      },
    },
    {
      id: 8,
      doha: 'कउतकु कोड़ तमासिआ चिति न आवसु नाउ ॥ नानक कोड़ी नरक बराबरि उजड़ु सोई थाउ ॥२६॥',
      isCrossReference: true,
      source: {
        hi: 'श्री गुरु ग्रंथ साहिब (गुरु अर्जुन देव जी, अंग १४२६, सलोक २६)',
        pb: 'ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ (ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ, ਅੰਗ ੧੪੨੬, ਸਲੋਕ ੨੬)',
        en: 'Sri Guru Granth Sahib (Guru Arjan Dev Ji, Ang 1426, Salok 26)',
      },
      meaning: {
        hi: 'करोड़ों सांसारिक कौतुक और तमाशों के बीच यदि परमात्मा का पावन नाम हृदय में न आए, तो गुरु साहिब कहते हैं कि वह स्थान नर्क और उजाड़ श्मशान के समान है।',
        pb: 'ਕਰੋੜਾਂ ਰੰਗ-ਤਮਾਸ਼ਿਆਂ ਵਿੱਚ ਜੇ ਮਨ ਵਿੱਚ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਨਾ ਆਵੇ, ਤਾਂ ਨਾਨਕ ਜੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਉਹ ਥਾਂ ਨਰਕ ਬਰਾਬਰ ਉਜਾੜ ਹੈ।',
        en: 'Amidst millions of worldly pleasures and wonders, if the Divine Name does not dwell in the heart, Guru Arjan Dev Ji proclaims that place is barren like desolate hell.',
      },
    },
    {
      id: 9,
      doha: 'नावँ बरोबर कछु नहीं, ना कोई दीसै ओर।\nकहैं कबीर तिहुँ लोक में, सत्यनाम सिरमौर॥',
      isCrossReference: false,
      source: {
        hi: 'कबीर साखी संग्रह',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
        en: 'Kabir Sakhi Sangrah',
      },
      meaning: {
        hi: 'एक सत्यनाम के बराबर तीनों लोकों में कुछ भी नहीं है; सतगुरु कबीर साहेब स्पष्ट करते हैं कि समस्त साधनों, मंत्रों और सिद्धांतों में एक सत्यनाम ही सिरमौर एवं परम मूल है।',
        pb: 'ਇੱਕ ਸਤਯਨਾਮ ਦੇ ਬਰਾਬਰ ਤਿੰਨਾਂ ਲੋਕਾਂ ਵਿੱਚ ਕੁਝ ਵੀ ਨਹੀਂ ਹੈ; ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸਾਰੇ ਸਾਧਨਾਂ ਵਿੱਚ ਕੇਵਲ ਸਤਯਨਾਮ ਹੀ ਸਿਰਮੌਰ ਅਤੇ ਪਰਮ ਮੂਲ ਹੈ।',
        en: 'Nothing in all the three worlds equals the One Satyanaam; Satguru Kabir Saheb affirms that Satyanaam alone is the crowning crest and supreme Root of all existence.',
      },
    },
  ];

  // Dynamic fruit badges labels based on active language
  const fruitLabels = activeLang === 'pb' 
    ? [{ x: 120, y: 245, label: "ਭਗਤੀ" }, { x: 280, y: 245, label: "ਸੁੱਖ" }, { x: 155, y: 300, label: "ਮੁਕਤੀ" }, { x: 245, y: 300, label: "ਸ਼ਾਂਤੀ" }]
    : activeLang === 'en'
    ? [{ x: 110, y: 245, label: "Devotion" }, { x: 290, y: 245, label: "Happiness" }, { x: 150, y: 300, label: "Liberation" }, { x: 250, y: 300, label: "Peace" }]
    : [{ x: 120, y: 245, label: "भक्ति" }, { x: 280, y: 245, label: "सुख" }, { x: 155, y: 300, label: "मुक्ति" }, { x: 245, y: 300, label: "शांति" }];

  return (
    <div className="w-full space-y-7">
        
        {/* ========================================================================= */}
        {/* SECTION A — TOP CORE MOTTO CARD (Multilanguage)                           */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#241A14' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-lg relative overflow-hidden text-center"
        >
          {/* Subtle Golden Background Glow */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#D97706] text-xs font-serif font-black uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {activeLang === 'pb'
                ? '॥ ਸਤਯਨਾਮ ਪਰਮ ਮੂਲ ॥'
                : activeLang === 'en'
                ? '|| SATYANAAM · THE ETERNAL ROOT ||'
                : '॥ सत्यनाम परम मूल ॥'}
            </span>
          </div>

          <h2 
            style={{ color: '#6B1D1D' }} 
            className="text-xl sm:text-2xl md:text-3xl font-serif font-black dark:text-amber-300 leading-snug tracking-tight max-w-2xl mx-auto"
          >
            {activeLang === 'pb' && (
              <>ਸਤਯਨਾਮ ਨੂੰ ਸਾਧ ਲੈ, ਸਭ ਕੁਝ ਸਧਦਾ ਜਾਇ।<br />ਕਹੈਂ ਕਬੀਰ ਇਸ ਮੂਲ ਬਿਨ, ਸਾਰਾ ਜੀਵਨ ਜਾਇ॥</>
            )}
            {activeLang === 'en' && (
              <>Master the One Satyanaam, and everything in life falls into place;<br />Satguru Kabir Saheb proclaims, without this One Root, the entire life goes in vain.</>
            )}
            {activeLang === 'hi' && (
              <>सत्यनाम को साध ले, सब कुछ सधता जाय।<br />कहैं कबीर इस मूल बिन, सारा जीवन जाय॥</>
            )}
          </h2>

          <p className="text-xs sm:text-sm font-serif mt-3 text-stone-600 dark:text-stone-300 max-w-xl mx-auto leading-relaxed">
            {activeLang === 'pb'
              ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਅਟੱਲ ਰੂਹਾਨੀ ਸਿਧਾਂਤ: ਮੂਲ ਰੂਪੀ ਸਤਯਨਾਮ ਨੂੰ ਸਿੰਜਣ ਨਾਲ ਜੀਵਨ ਦੇ ਸਾਰੇ ਫਲ-ਫੁੱਲ ਸਹਿਜੇ ਹੀ ਖਿੜ ਉੱਠਦੇ ਹਨ।'
              : activeLang === 'en'
              ? 'The eternal core principle of Satguru Kabir Saheb: Nourishing the Root (Satyanaam) naturally causes every branch of peace, joy, and liberation to flourish.'
              : 'सतगुरु कबीर साहेब का अटल आध्यात्मिक सिद्धांत: मूल रूपी सत्यनाम को सींचने से जीवन के समस्त फल-फूल (भक्ति, सुख, मुक्ति, शांति) स्वतः खिल उठते हैं।'}
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION B — INTERACTIVE INVERTED TREE (ऊर्ध्व मूल वृक्ष)                    */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-lg space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌳</span>
                <h3 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-lg sm:text-xl dark:text-amber-300"
                >
                  {activeLang === 'pb' ? 'ਊਰਧਵ ਮੂਲ ਰੁੱਖ (ਅਲੌਕਿਕ ਦਰਸ਼ਨ)' : activeLang === 'en' ? 'The Inverted Cosmic Tree (Urdhva Moola)' : 'ऊर्ध्व मूल वृक्ष (अलौकिक दर्शन)'}
                </h3>
              </div>
              <p className="text-xs font-serif text-stone-600 dark:text-stone-400 mt-0.5">
                {activeLang === 'pb'
                  ? 'ਜੜ੍ਹਾਂ ਉੱਪਰ (ਸਤਯਨਾਮ ਮੂਲ) ਅਤੇ ਸ਼ਾਖਾਵਾਂ ਹੇਠਾਂ (ਸੰਸਾਰ ਵਿਸਤਾਰ)'
                  : activeLang === 'en'
                  ? 'Roots at the supreme top (Satyanaam), branches extending downward into life'
                  : 'जड़ें ऊपर (सत्यनाम मूल) और शाखाएँ नीचे (संसार विस्तार)'}
              </p>
            </div>

            {/* Interactive Water the Root Button */}
            <button
              type="button"
              onClick={handleToggleWater}
              className={`px-4 py-2.5 rounded-2xl font-serif font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 border ${
                isWatered
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-400/50 shadow-emerald-600/30 ring-2 ring-emerald-400/30'
                  : 'bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-amber-50 border-amber-400/40 hover:scale-105'
              }`}
            >
              <Droplets className={`w-4 h-4 ${isWatered ? 'animate-bounce text-emerald-200' : 'text-amber-300'}`} />
              <span>
                {isWatered 
                  ? (activeLang === 'pb' ? 'ਮੂਲ ਸਿੰਜਿਆ ਗਿਆ (ਪਾਵਨ ਪ੍ਰਕਾਸ਼)' : activeLang === 'en' ? 'Root Watered (Divine Glow)' : 'मूल सिंचित है (पावन प्रकाश)')
                  : (activeLang === 'pb' ? 'ਮੂਲ (ਸਤਯਨਾਮ) ਨੂੰ ਸਿੰਜੋ' : activeLang === 'en' ? 'Water the Root (Satyanaam)' : 'मूल (सत्यनाम) को सींचें')}
              </span>
            </button>
          </div>

          {/* SVG Inverted Tree Canvas: Warm High-Contrast Cream Container (#FDF8EE) */}
          <div
            style={{
              backgroundColor: isDarkMode ? '#1D1510' : '#FDF8EE',
              borderColor: '#D97706',
            }}
            className="rounded-2xl border p-3 sm:p-5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden"
          >
            {/* Soft ambient luminous white-gold radiance behind top roots */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-36 pointer-events-none transition-opacity duration-700"
              style={{
                background: isDarkMode
                  ? 'radial-gradient(ellipse at top center, rgba(255,255,255,0.28) 0%, rgba(251,191,36,0.18) 45%, transparent 75%)'
                  : 'radial-gradient(ellipse at top center, rgba(255,255,255,0.92) 0%, rgba(253,224,71,0.34) 48%, transparent 78%)',
                opacity: isWatered ? 1 : 0.85,
              }}
            />

            <svg
              viewBox="0 0 600 432"
              className="w-full max-w-2xl mx-auto h-auto max-h-[360px] overflow-visible select-none relative z-10"
              role="img"
              aria-label={activeLang === 'pb' ? 'ਊਰਧਵ ਮੂਲ ਰੁੱਖ — ਸਤਯਨਾਮ ਮੂਲ' : activeLang === 'en' ? 'Luminous Golden-Green Sacred Ashvattha Inverted Tree' : 'ऊर्ध्व मूल वृक्ष — सत्यनाम मूल और घने हरे पत्ते'}
            >
              <defs>
                {/* Top Radiant Pure White & Soft Golden Halo */}
                <radialGradient id="ashvatthaRootHalo" cx="50%" cy="15%" r="55%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="32%" stopColor="#FEF08A" stopOpacity={isWatered ? "0.95" : "0.78"} />
                  <stop offset="65%" stopColor="#F59E0B" stopOpacity={isWatered ? "0.42" : "0.24"} />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </radialGradient>

                {/* Descending White-Gold Divine Light Rays */}
                <linearGradient id="ashvatthaLightRay" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FDE047" stopOpacity={isWatered ? "0.48" : "0.3"} />
                  <stop offset="45%" stopColor="#FEF08A" stopOpacity={isWatered ? "0.24" : "0.14"} />
                  <stop offset="100%" stopColor="#84CC16" stopOpacity="0" />
                </linearGradient>

                {/* Golden-White Glowing Root Gradient (Crisp Amber-Gold on Cream + Luminous Core) */}
                <linearGradient id="ashvatthaRootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="45%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#92400E" />
                </linearGradient>

                {/* 3D Shaded Sacred Trunk Gradient */}
                <linearGradient id="ashvatthaTrunk3D" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B1806" />
                  <stop offset="28%" stopColor="#7C2D12" />
                  <stop offset="52%" stopColor="#B45309" />
                  <stop offset="76%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#2A0F03" />
                </linearGradient>

                {/* Deep Forest Shadow Foliage Gradient */}
                <radialGradient id="foliageDeepGrad" cx="50%" cy="60%" r="55%">
                  <stop offset="0%" stopColor="#14532D" />
                  <stop offset="65%" stopColor="#064E3B" />
                  <stop offset="100%" stopColor="#052E16" />
                </radialGradient>

                {/* Rich Mid Emerald Foliage Gradient */}
                <radialGradient id="foliageMidGrad" cx="50%" cy="35%" r="60%">
                  <stop offset="0%" stopColor={isWatered ? "#4ADE80" : "#22C55E"} />
                  <stop offset="55%" stopColor="#15803D" />
                  <stop offset="100%" stopColor="#14532D" />
                </radialGradient>

                {/* Sunlit Luminous Golden-Green Rim Gradient */}
                <linearGradient id="foliageGoldGreenGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#A3E635" stopOpacity="0.92" />
                  <stop offset="80%" stopColor="#16A34A" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#15803D" stopOpacity="1" />
                </linearGradient>

                {/* Golden Aura Behind Fruit Badges */}
                <radialGradient id="badgeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                </radialGradient>

                <filter id="luminousWhiteGoldGlow" x="-35%" y="-35%" width="170%" height="170%">
                  <feGaussianBlur stdDeviation={isWatered ? "5" : "3"} result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="canopySoftShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#14532D" floodOpacity="0.35" />
                </filter>
              </defs>

              {/* 1. Descending White & Golden Light Rays */}
              <g opacity={isWatered ? "0.95" : "0.75"} className="transition-opacity duration-700">
                <polygon points="300,48 75,295 160,295" fill="url(#ashvatthaLightRay)" />
                <polygon points="300,48 165,330 245,330" fill="url(#ashvatthaLightRay)" />
                <polygon points="300,48 255,345 345,345" fill="url(#ashvatthaLightRay)" />
                <polygon points="300,48 355,330 435,330" fill="url(#ashvatthaLightRay)" />
                <polygon points="300,48 440,295 525,295" fill="url(#ashvatthaLightRay)" />
              </g>

              {/* 2. Top Radiant White-Gold Halo */}
              <ellipse cx="300" cy="76" rx={isWatered ? "190" : "155"} ry={isWatered ? "82" : "68"} fill="url(#ashvatthaRootHalo)" className="transition-all duration-700" />

              {/* 3. Top Sacred Pill Label: ॥ सत्यनाम (मूल) ॥ */}
              <g transform="translate(300, 24)">
                <rect x="-118" y="-18" width="236" height="34" rx="17" fill="#FFFDF7" stroke="#D97706" strokeWidth="2.4" filter="url(#luminousWhiteGoldGlow)" />
                <text x="0" y="5.5" textAnchor="middle" fill="#6B1D1D" fontWeight="900" fontSize="16" className="font-serif tracking-wide">
                  {activeLang === 'pb' ? '॥ ਸਤਯਨਾਮ (ਮੂਲ) ॥' : activeLang === 'en' ? '॥ Satyanaam (Root) ॥' : '॥ सत्यनाम (मूल) ॥'}
                </text>
              </g>

              {/* 4. Intricate Glowing Top Roots Spreading Up into Divine Light (Crisp Gold-Brown on Cream) */}
              <g strokeLinecap="round" fill="none" filter="url(#luminousWhiteGoldGlow)">
                {/* Primary Thick Radiant Taproots */}
                <path d="M300,115 C295,86 270,66 225,52" stroke="url(#ashvatthaRootGrad)" strokeWidth="7" />
                <path d="M300,115 C305,86 330,66 375,52" stroke="url(#ashvatthaRootGrad)" strokeWidth="7" />
                <path d="M300,115 C298,84 300,62 300,43" stroke="#D97706" strokeWidth="8" />
                <path d="M300,115 C298,84 300,62 300,43" stroke="#FFFBEB" strokeWidth="3" />
                <path d="M286,112 C258,88 214,76 162,64" stroke="url(#ashvatthaRootGrad)" strokeWidth="5.2" />
                <path d="M314,112 C342,88 386,76 438,64" stroke="url(#ashvatthaRootGrad)" strokeWidth="5.2" />
                {/* Secondary Fine Root Tendrils */}
                <path d="M262,80 C235,66 205,54 185,46" stroke="#D97706" strokeWidth="3" />
                <path d="M338,80 C365,66 395,54 415,46" stroke="#D97706" strokeWidth="3" />
                <path d="M286,75 C275,56 262,48 248,42" stroke="#B45309" strokeWidth="2.8" />
                <path d="M314,75 C325,56 338,48 352,42" stroke="#B45309" strokeWidth="2.8" />
                <path d="M242,88 C210,82 175,80 145,76" stroke="#D97706" strokeWidth="2.4" />
                <path d="M358,88 C390,82 425,80 455,76" stroke="#D97706" strokeWidth="2.4" />
              </g>

              {/* Subtle Divine Sparkle Motes Around Top Roots */}
              <g fill="#FFFFFF" opacity={isWatered ? "0.95" : "0.65"}>
                <circle cx="195" cy="54" r="2.2" />
                <circle cx="405" cy="54" r="2.2" />
                <circle cx="255" cy="48" r="1.8" />
                <circle cx="345" cy="48" r="1.8" />
                <circle cx="155" cy="72" r="1.6" />
                <circle cx="445" cy="72" r="1.6" />
              </g>

              {/* 5. Deep Back Canopy Shadow Layer (Creates 3D Depth behind branches) */}
              <g fill="url(#foliageDeepGrad)" filter="url(#canopySoftShadow)">
                <path d="M110,280 C70,280 55,325 82,355 C68,388 102,422 148,412 C175,436 228,438 258,418 C286,442 325,442 350,418 C382,438 430,434 456,408 C498,418 532,382 518,350 C542,320 524,276 484,276 C456,238 398,236 364,256 C332,226 268,226 236,256 C202,236 140,238 110,280 Z" />
              </g>

              {/* 6. Rich 3D Textured Sacred Banyan/Ashvattha Trunk & Downward Branches */}
              <g>
                {/* Main Trunk & Sweeping Downward Boughs */}
                <path
                  d="M276,96 L324,96 C326,138 334,170 356,200 C385,232 438,248 474,282 C480,290 468,300 458,292 C422,262 372,248 338,224 C324,252 324,292 336,332 C340,342 324,348 318,338 C308,308 304,276 300,248 C296,276 292,308 282,338 C276,348 260,342 264,332 C276,292 276,252 262,224 C228,248 178,262 142,292 C132,300 120,290 126,282 C162,248 215,232 244,200 C266,170 274,138 276,96 Z"
                  fill="url(#ashvatthaTrunk3D)"
                />
                {/* Secondary Inner Branches */}
                <path d="M278,195 C255,222 222,256 196,298" stroke="#78350F" strokeWidth="11" strokeLinecap="round" fill="none" />
                <path d="M322,195 C345,222 378,256 404,298" stroke="#78350F" strokeWidth="11" strokeLinecap="round" fill="none" />
                {/* Bark Texture Highlights & Aerial Prop Roots (जटाएँ) */}
                <g stroke="#FEF3C7" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M294,108 C295,152 293,195 298,236" />
                  <path d="M312,115 C315,154 328,185 352,212" />
                  <path d="M286,122 C282,158 268,188 246,214" />
                </g>
                <g stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85">
                  <path d="M225,224 Q206,276 198,335" />
                  <path d="M375,224 Q394,276 402,335" />
                  <path d="M178,254 Q165,295 158,342" />
                  <path d="M422,254 Q435,295 442,342" />
                </g>
              </g>

              {/* 7. Lush Multi-Layered Green Ashvattha Foliage Clusters */}
              {/* Mid Emerald Leaf Clouds */}
              <g fill="url(#foliageMidGrad)">
                <ellipse cx="145" cy="312" rx="68" ry="48" />
                <ellipse cx="455" cy="312" rx="68" ry="48" />
                <ellipse cx="210" cy="364" rx="74" ry="52" />
                <ellipse cx="390" cy="364" rx="74" ry="52" />
                <ellipse cx="300" cy="348" rx="84" ry="58" />
                <ellipse cx="235" cy="278" rx="54" ry="38" />
                <ellipse cx="365" cy="278" rx="54" ry="38" />
              </g>

              {/* Sunlit Luminous Golden-Green Upper Leaf Highlights (Divine Light hitting the foliage!) */}
              <g fill="url(#foliageGoldGreenGrad)" opacity={isWatered ? "0.96" : "0.84"} className="transition-opacity duration-500">
                <path d="M104,292 C122,258 175,254 202,284 C172,276 135,278 104,292 Z" />
                <path d="M398,284 C425,254 478,258 496,292 C465,278 428,276 398,284 Z" />
                <path d="M204,268 C228,236 278,236 298,266 C272,254 232,254 204,268 Z" />
                <path d="M302,266 C322,236 372,236 396,268 C368,254 328,254 302,266 Z" />
                <path d="M238,314 C272,286 328,286 362,314 C326,302 274,302 238,314 Z" />
                <path d="M150,342 C182,316 228,318 248,346 C218,334 176,334 150,342 Z" />
                <path d="M352,346 C372,318 418,316 450,342 C424,334 382,334 352,346 Z" />
              </g>

              {/* Botanical Pointed Ashvattha (Peepal) Leaf Accents along Canopy Edges */}
              <g>
                {[
                  { x: 86, y: 314, r: -42, c: '#84CC16' },
                  { x: 108, y: 274, r: -25, c: '#A3E635' },
                  { x: 158, y: 256, r: -10, c: '#BEF264' },
                  { x: 222, y: 248, r: -8, c: '#A3E635' },
                  { x: 378, y: 248, r: 8, c: '#A3E635' },
                  { x: 442, y: 256, r: 10, c: '#BEF264' },
                  { x: 492, y: 274, r: 25, c: '#A3E635' },
                  { x: 514, y: 314, r: 42, c: '#84CC16' },
                  { x: 112, y: 382, r: -145, c: '#22C55E' },
                  { x: 185, y: 416, r: -165, c: '#4ADE80' },
                  { x: 300, y: 418, r: 180, c: '#4ADE80' },
                  { x: 415, y: 416, r: 165, c: '#4ADE80' },
                  { x: 488, y: 382, r: 145, c: '#22C55E' },
                ].map((leaf, i) => (
                  <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r})`}>
                    <path
                      d="M0,-14 C10,-6 11,6 0,14 C-11,6 -10,-6 0,-14 Z"
                      fill={leaf.c}
                      stroke="#14532D"
                      strokeWidth="1"
                      opacity="0.92"
                    />
                    <line x1="0" y1="-10" x2="0" y2="11" stroke="#FEF9C3" strokeWidth="0.9" opacity="0.7" />
                  </g>
                ))}
              </g>

              {/* 8. Flowing Luminous White-Gold Nectar Waves from Root to 4 Fruits */}
              <g
                stroke="#FFFFFF"
                strokeWidth={isWatered ? "3.5" : "1.8"}
                strokeDasharray="8 6"
                strokeLinecap="round"
                fill="none"
                opacity={isWatered ? "0.95" : "0.4"}
                className="transition-all duration-700 animate-pulse"
              >
                <path d="M300,82 C296,155 270,210 148,302" />
                <path d="M300,82 C304,155 330,210 452,302" />
                <path d="M300,82 C298,190 278,285 215,374" />
                <path d="M300,82 C302,190 322,285 385,374" />
              </g>

              {/* 9. Four Larger Crisp Upright Golden-Cream Badges (भक्ति, सुख, मुक्ति, शांति) */}
              {[
                { x: 144, y: 302, label: activeLang === 'pb' ? 'ਭਗਤੀ' : activeLang === 'en' ? 'Devotion' : 'भक्ति' },
                { x: 456, y: 302, label: activeLang === 'pb' ? 'ਸੁੱਖ' : activeLang === 'en' ? 'Happiness' : 'सुख' },
                { x: 212, y: 374, label: activeLang === 'pb' ? 'ਮੁਕਤੀ' : activeLang === 'en' ? 'Liberation' : 'मुक्ति' },
                { x: 388, y: 374, label: activeLang === 'pb' ? 'ਸ਼ਾਂਤੀ' : activeLang === 'en' ? 'Peace' : 'शांति' },
              ].map((item, idx) => (
                <g key={idx} className="transition-transform duration-300 hover:scale-105">
                  <circle cx={item.x} cy={item.y} r="58" fill="url(#badgeAura)" opacity={isWatered ? "0.95" : "0.7"} />
                  <rect
                    x={item.x - 58}
                    y={item.y - 22}
                    width="116"
                    height="44"
                    rx="22"
                    fill="#FDF8EE"
                    stroke="#D97706"
                    strokeWidth="2.8"
                  />
                  <rect
                    x={item.x - 53}
                    y={item.y - 17}
                    width="106"
                    height="34"
                    rx="17"
                    fill="none"
                    stroke="#FDE047"
                    strokeWidth="1.2"
                    opacity="0.9"
                  />
                  <text
                    x={item.x}
                    y={item.y + 6}
                    textAnchor="middle"
                    fill="#6B1D1D"
                    fontWeight="900"
                    fontSize="16"
                    className="font-serif tracking-tight"
                  >
                    {item.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* High-Contrast Cream Philosophy Footer Box (Zero dark-on-dark bug) */}
            <div
              style={{
                backgroundColor: isDarkMode ? '#261B14' : '#FDF8EE',
                borderColor: '#D97706',
              }}
              className="mt-4 p-5 rounded-2xl border text-center max-w-2xl space-y-3 shadow-sm"
            >
              {isWatered && (
                <div className="p-2.5 rounded-xl bg-emerald-600/15 border border-emerald-500/35 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-serif font-black animate-pulse">
                  ✨ {activeLang === 'pb' ? 'ਇੱਕ ਸਤਯਨਾਮ ਨੂੰ ਸਾਧਣ ਨਾਲ ਭਗਤੀ, ਸੁੱਖ, ਮੁਕਤੀ ਅਤੇ ਸ਼ਾਂਤੀ ਆਪਣੇ ਆਪ ਪ੍ਰਾਪਤ ਹੁੰਦੇ ਹਨ।' : activeLang === 'en' ? 'By mastering the One Satyanaam, devotion, happiness, liberation, and peace are effortlessly attained.' : 'एक सत्यनाम को साधने से भक्ति, सुख, मुक्ति और शांति स्वतः प्राप्त होते हैं।'}
                </div>
              )}
              
              <div className="space-y-2">
                <h4
                  style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                  className="font-serif font-black text-sm sm:text-base"
                >
                  {activeLang === 'pb' ? '✦ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਮੂਲ-ਦਰਸ਼ਨ (ਕਬੀਰ ਸਾਗਰ) ✦' : activeLang === 'en' ? '✦ Satguru Kabir Saheb\'s Core Philosophy (Kabir Sagar) ✦' : '✦ सतगुरु कबीर साहेब का मूल-दर्शन (कबीर सागर) ✦'}
                </h4>
                <p
                  style={{ color: isDarkMode ? '#FEF3C7' : '#451A03' }}
                  className="font-serif font-bold text-xs sm:text-sm whitespace-pre-line leading-relaxed"
                >
                  {activeLang === 'pb'
                    ? 'ਮੂਲ ਗਹੇ ਤੇ ਸਬ ਗਹੇ, ਡਾਰ ਗਹੇ ਤੇ ਜਾਇ।\nਕਹ ਕਬੀਰ ਤੇ ਨਰ ਭਏ, ਜੋ ਰਹੇ ਮੂਲ ਲਪਟਾਇ॥'
                    : activeLang === 'en'
                    ? 'Mool gahe te sab gahe, daar gahe te jaay.\nKah Kabir te nar bhaye, jo rahe mool laptaay.'
                    : 'मूल गहे ते सब गहे, डार गहे ते जाय।\nकह कबीर ते नर भये, जो रहे मूल लपटाय॥'}
                </p>
                <p
                  style={{ color: isDarkMode ? '#E7E5E4' : '#3F2312', borderColor: 'rgba(217, 119, 6, 0.28)' }}
                  className="text-xs sm:text-[13px] font-serif leading-relaxed pt-2 border-t"
                >
                  {activeLang === 'pb'
                    ? 'ਇਸ ਸ੍ਰਿਸ਼ਟੀ ਰੂਪੀ ਉਲਟੇ ਰੁੱਖ ਦੀਆਂ ਜੜ੍ਹਾਂ ਉੱਪਰ ਪਰਮ ਤੱਤ \'ਸਤਯਨਾਮ\' (ਮੂਲ) ਵਿੱਚ ਸਥਿਤ ਹਨ। ਕੇਵਲ ਇੱਕ ਸਤਯਨਾਮ ਰੂਪੀ ਜੜ੍ਹ ਨੂੰ ਸਿੰਜਣ ਨਾਲ ਭਗਤੀ, ਸੁੱਖ, ਮੁਕਤੀ ਅਤੇ ਸ਼ਾਂਤੀ ਦੇ ਚਾਰੇ ਪਾਵਨ ਫਲ ਆਪਣੇ ਆਪ ਪ੍ਰਾਪਤ ਹੁੰਦੇ ਹਨ।'
                    : activeLang === 'en'
                    ? 'The roots of this inverted cosmic tree dwell above in the Supreme Truth \'Satyanaam\' (the Root). Nourishing this sole Root of Satyanaam naturally yields all four divine fruits: Devotion, Happiness, Liberation, and Peace.'
                    : 'इस सृष्टि रूपी उल्टे वृक्ष की जड़ें ऊपर परम तत्व \'सत्यनाम\' (मूल) में स्थित हैं। केवल एक सत्यनाम रूपी जड़ को सींचने से भक्ति, सुख, मुक्ति और शांति के चारों पावन फल स्वतः प्राप्त होते हैं।'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION C — FOUR YUGAS TIMELINE (चारों युगों का शाश्वत संदेश)               */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-7 shadow-lg space-y-5"
        >
          <div className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" />
                <h3 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-lg sm:text-xl dark:text-amber-300"
                >
                  {activeLang === 'pb' ? 'ਚਾਰਾਂ ਯੁਗਾਂ ਦਾ ਸ਼ਾਸ਼ਵਤ ਸੰਦੇਸ਼' : activeLang === 'en' ? 'The Eternal Message of the Four Yugas' : 'चारों युगों का शाश्वत संदेश'}
                </h3>
              </div>
              <p className="text-xs font-serif text-stone-600 dark:text-stone-400 mt-0.5">
                {activeLang === 'pb'
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਾਰੇ ਯੁਗਾਂ ਦੇ ਪਾਵਨ ਨਾਮ ਅਤੇ ਇੱਕ ਸਤਯਨਾਮ ਦਾ ਅਟੱਲ ਉਪਦੇਸ਼'
                  : activeLang === 'en'
                  ? 'Satguru Kabir Saheb\'s divine names and steadfast teaching across all four Yugas'
                  : 'सतगुरु कबीर साहेब के चारों युगों के पावन नाम एवं एक सत्यनाम का अटल उपदेश'}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {activeLang === 'pb' ? '੪ ਯੁਗ' : activeLang === 'en' ? '4 Yugas' : '४ युग'}
            </span>
          </div>

          {/* 4 Yugas Interactive Step Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {yugasData.map((yugaItem, index) => {
              const isSelected = activeYugaIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setActiveYugaIndex(index);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-[#D97706] bg-amber-500/15 ring-2 ring-amber-500/30 shadow-md scale-[1.02]'
                      : 'border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#6B1D1D] text-amber-50">
                      {yugaItem.badge[activeLang] || yugaItem.badge.hi}
                    </span>
                    {isSelected && <CircleDot className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />}
                  </div>
                  <h4 
                    style={{ color: isSelected ? '#6B1D1D' : undefined }}
                    className="font-serif font-black text-xs sm:text-sm dark:text-amber-300 truncate"
                  >
                    {yugaItem.yuga[activeLang] || yugaItem.yuga.hi}
                  </h4>
                  <p className="text-[11px] font-serif text-amber-700 dark:text-amber-400 truncate mt-0.5">
                    {yugaItem.tagline[activeLang] || yugaItem.tagline.hi}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Yuga Detailed Showcase Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYugaIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: isDarkMode ? '#1B130E' : '#FAF4E8',
                borderColor: '#D97706',
              }}
              className="p-5 rounded-2xl border-2 space-y-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-serif font-black px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 shadow-xs">
                  {yugasData[activeYugaIndex].yuga[activeLang] || yugasData[activeYugaIndex].yuga.hi}
                </span>
                <span className="text-xs font-serif font-bold text-[#D97706]">
                  {yugasData[activeYugaIndex].tagline[activeLang] || yugasData[activeYugaIndex].tagline.hi}
                </span>
              </div>

              {/* Core Quote */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                <p 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-sm sm:text-base dark:text-amber-300 leading-relaxed"
                >
                  "{yugasData[activeYugaIndex].message[activeLang] || yugasData[activeYugaIndex].message.hi}"
                </p>
              </div>

              {/* Detail narrative */}
              <p className="text-xs sm:text-sm font-serif leading-relaxed text-stone-700 dark:text-stone-300">
                {yugasData[activeYugaIndex].detail[activeLang] || yugasData[activeYugaIndex].detail.hi}
              </p>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ========================================================================= */}
        {/* SECTION D — PRAMANIK VANI & CROSS-REFERENCE CARDS (9 Dohas)                */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h3 
                  style={{ color: '#6B1D1D' }} 
                  className="font-serif font-black text-lg sm:text-xl dark:text-amber-300"
                >
                  {activeLang === 'pb' ? 'ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ ਤੇ ਤੁਲਨਾਤਮਕ ਸ਼ਬਦ' : activeLang === 'en' ? 'Canonical Verses & Cross-References' : 'प्रमाणिक वाणी एवं तुलनात्मक शब्द'}
                </h3>
              </div>
              <p className="text-xs font-serif text-stone-600 dark:text-stone-400 mt-0.5">
                {activeLang === 'pb'
                  ? 'ਕਬੀਰ ਸਾਗਰ, ਬੀਜਕ, ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਅਤੇ ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ (ਭਗਤ ਕਬੀਰ ਬਾਣੀ) ਦੇ ਅਟੱਲ ਪ੍ਰਮਾਣ'
                  : activeLang === 'en'
                  ? 'Nine canonical verses from Kabir Sagar, Bijak, Sakhi Sangrah, and Sri Guru Granth Sahib'
                  : 'कबीर सागर, बीजक, साखी संग्रह एवं श्री गुरु ग्रंथ साहिब (भगत कबीर वाणी) के अटल प्रमाण'}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {activeLang === 'pb' ? '੯ ਦੋਹੇ' : activeLang === 'en' ? '9 Verses' : '९ दोहे'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dohasList.map((item) => (
              <div key={item.id} className="space-y-2">
                <UnifiedDohaCard
                  id={`mool-doha-${item.id}`}
                  verseNumber={item.id}
                  source={item.source[activeLang] || item.source.hi}
                  text={item.doha}
                  meaning={item.meaning[activeLang] || item.meaning.hi}
                  language={activeLang}
                  defaultExpandedMeaning={true}
                />
                {item.id === 4 && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        sacredHaptics.mediumTap();
                        if (onNavigateView) onNavigateView('satyanaam-panacea');
                      }}
                      className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-amber-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-amber-400/40 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                      <span>
                        {activeLang === 'pb' ? 'ਦਿਵਯ ਪ੍ਰਕਾਸ਼ ਅਨੁਭਵ ਕਰੋ (ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ ਔਸ਼ਧੀ)' : activeLang === 'en' ? 'Experience Divine White Light (Supreme Panacea)' : 'दिव्य प्रकाश अनुभव करें (सर्व रोग निवारक औषधि)'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION E — BOTTOM QUICK ACTION BUTTONS (3 Modules)                       */}
        {/* ========================================================================= */}
        <section 
          style={{
            backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
            borderColor: '#D97706',
          }}
          className="rounded-3xl border-2 p-5 sm:p-6 shadow-lg space-y-4 text-center"
        >
          <div className="space-y-1">
            <h4 
              style={{ color: '#6B1D1D' }} 
              className="font-serif font-black text-base sm:text-lg dark:text-amber-300"
            >
              {activeLang === 'pb' ? 'ਪਾਵਨ ਸਾਧਨਾ ਤੇ ਅਮਰਲੋਕ ਮਾਰਗ' : activeLang === 'en' ? 'Sacred Sadhana & Amar Lok Pathways' : 'पावन साधना एवं अमरलोक मार्ग'}
            </h4>
            <p className="text-xs font-serif text-stone-600 dark:text-stone-400">
              {activeLang === 'pb'
                ? 'ਇੱਕ ਸਤਯਨਾਮ ਦੇ ਸੁਮਿਰਨ ਨਾਲ ਸਿੱਧੇ ਜੁੜੇ ਸਾਹੇਬ ਵਰਲਡ ਦੇ ਪਾਵਨ ਮਾਡਿਊਲ'
                : activeLang === 'en'
                ? 'Directly explore Saheb World modules connected to the One Satyanaam'
                : 'एक सत्यनाम के सुमिरन से सीधे जुड़े साहेब वर्ल्ड के पावन मॉड्यूल्स'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Button 1: सत्यनाम पावन धुन सुनें */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.mediumTap();
                if (onNavigateView) onNavigateView('dhun');
              }}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-amber-400/40 flex items-center justify-center gap-2 group"
            >
              <Radio className="w-4 h-4 text-amber-300 group-hover:animate-pulse" />
              <span>
                {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ ਸੁਣੋ' : activeLang === 'en' ? 'Listen Satyanaam Dhun' : 'सत्यनाम पावन धुन सुनें'}
              </span>
            </button>

            {/* Button 2: १०८ मनकों की जप माला */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.mediumTap();
                if (onNavigateView) onNavigateView('mantra-tracker');
              }}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 text-emerald-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-emerald-400/40 flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 text-emerald-300 group-hover:rotate-45 transition-transform" />
              <span>
                {activeLang === 'pb' ? '੧੦੮ ਮਣਕਿਆਂ ਦੀ ਜਪ ਮਾਲਾ' : activeLang === 'en' ? '108 Beads Jaap Mala' : '१०८ मनकों की जप माला'}
              </span>
            </button>

            {/* Button 3: सत्यनाम व अमरलोक बोध */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.mediumTap();
                if (onNavigateView) onNavigateView('satya-naam');
              }}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-800 to-indigo-900 text-purple-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-purple-400/40 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
              <span>
                {activeLang === 'pb' ? 'ਸਤਯਨਾਮ ਤੇ ਅਮਰਲੋਕ ਬੋਧ' : activeLang === 'en' ? 'Satyanaam & Amar Lok' : 'सत्यनाम व अमरलोक बोध'}
              </span>
            </button>
          </div>
        </section>

    </div>
  );
};
