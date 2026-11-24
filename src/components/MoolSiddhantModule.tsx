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
    const liveUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sahebworld.app';
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
        pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ "ਸਤਸੁਕ੍ਰਿਤ" ਨਾਮ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ। ਰਾਜਾ ਸੁਕ੍ਰਿਤ ਨੂੰ ਅਮਰ ਗਿਆਨ ਦਿੱਤਾ ਅਤੇ ਸਤਯਨਾਮ ਦੀ ਸ਼ਾਸ਼ਵਤ ਮਹਿਮਾ ਦਰਸਾਈ।',
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
        hi: 'कलियुग (कबीर साहेब)',
        pb: 'ਕਲਿਯੁਗ (ਕਬੀਰ ਸਾਹੇਬ)',
        en: 'Kaliyuga (Kabir Saheb)',
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
        hi: 'कलियुग में काशी के लहरतारा सरोवर में नीर-क्षीर कमल पर साक्षात "सद्गुरु कबीर साहेब" प्रकट हुए। धनी धर्मदास जी को वंश बयालीस का वरदान और संसार को सत्यनाम से मोक्ष का अटल मार्ग दिया।',
        pb: 'ਕਲਿਯੁਗ ਵਿੱਚ ਕਾਸ਼ੀ ਦੇ ਲਹਰਤਾਰਾ ਸਰੋਵਰ \'ਤੇ ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪ੍ਰਗਟ ਹੋਏ। ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਨੂੰ ਵੰਸ਼ ਬਤਾਲੀ ਦਾ ਵਰਦਾਨ ਅਤੇ ਸਤਯਨਾਮ ਰਾਹੀਂ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਦਿੱਤਾ।',
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
        hi: 'वृक्ष के मूल (जड़) को पकड़ने से पूरा वृक्ष फलित होता है, पर केवल डालियों को पकड़ने से सब व्यर्थ हो जाता है। कबीर साहेब कहते हैं, वही मनुष्य धन्य हैं जो मूल सत्यनाम से जुड़े रहते हैं।',
        pb: 'ਜੜ੍ਹ ਨੂੰ ਫੜਨ ਨਾਲ ਸਾਰਾ ਰੁੱਖ ਸਧਦਾ ਹੈ, ਡਾਲੀਆਂ ਫੜਨ ਨਾਲ ਸਭ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਕਹਿੰਦੇ ਹਨ, ਉਹੀ ਧੰਨ ਹਨ ਜੋ ਮੂਲ ਸਤਯਨਾਮ ਨਾਲ ਜੁੜੇ ਰਹਿੰਦੇ ਹਨ।',
        en: 'Holding the root nourishes the entire tree; grasping only the outer branches leads to ruin. Kabir says, blessed are those who stay anchored to the One Root.',
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
        hi: 'कबीर साहेब समझाते हैं कि केवल उस सत्यनाम रूपी धन का संग्रह करो जो परलोक में तुम्हारे काम आए। सिर पर सांसारिक धन-दौलत की गठरी लादकर किसी को भी संसार से जाते नहीं देखा गया।',
        pb: 'ਕਬੀਰ ਜੀ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਉਹ ਸਤਯਨਾਮ ਧਨ ਇਕੱਠਾ ਕਰੋ ਜੋ ਅੱਗੇ ਪਰਲੋਕ ਵਿੱਚ ਕੰਮ ਆਵੇ। ਸਿਰ \'ਤੇ ਦੌਲਤ ਦੀ ਪੰਡ ਚੁੱਕ ਕੇ ਕਿਸੇ ਨੂੰ ਵੀ ਸੰਸਾਰ ਤੋਂ ਜਾਂਦੇ ਨਹੀਂ ਦੇਖਿਆ।',
        en: 'Bhagat Kabir Ji teaches: amass only that wealth of Naam which shall accompany you in the hereafter; no one has ever been seen carrying worldly riches upon their head.',
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
      doha: 'एकै साधे सब सधै, सब साधै सब जाय। रहिमन मूलहिं सींचिबो, फूलै फलै अघाय॥',
      isCrossReference: true,
      source: {
        hi: 'रहीम दोहावली',
        pb: 'ਰਹੀਮ ਦੋਹਾਵਲੀ',
        en: 'Rahim Dohavali',
      },
      meaning: {
        hi: 'एक मूल (परमात्मा/सत्यनाम) को साध लेने से सब कुछ अपने आप सध जाता है; सबको अलग-अलग साधने से सब कुछ नष्ट हो जाता है। जैसे जड़ को सींचने से पूरा वृक्ष तृप्त होकर फूलता-फलता है।',
        pb: 'ਇੱਕ ਮੂਲ ਨੂੰ ਸਾਧਣ ਨਾਲ ਸਭ ਕੁਝ ਸਧ ਜਾਂਦਾ ਹੈ, ਸਭ ਨੂੰ ਵੱਖਰਾ ਸਾਧਣ ਨਾਲ ਸਭ ਚਲਾ ਜਾਂਦਾ ਹੈ। ਜਿਵੇਂ ਜੜ੍ਹ ਨੂੰ ਸਿੰਜਣ ਨਾਲ ਪੂਰਾ ਰੁੱਖ ਫੁੱਲਦਾ ਤੇ ਫਲਦਾ ਹੈ।',
        en: 'Nurturing the One Root fulfills everything; chasing everything leaves one with nothing. Rahim says, water the root, and branches, blossoms, and fruits flourish in abundance.',
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
    <div 
      style={{ 
        backgroundColor: isDarkMode ? '#17120E' : '#FDF8EE',
        color: isDarkMode ? '#F5EBE1' : '#2C1810' 
      }} 
      className="min-h-screen pb-20 selection:bg-amber-500 selection:text-white"
    >
      {/* Top-Center Sacred Banner */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#241A14' : '#FAF0DC',
          borderColor: 'rgba(217, 119, 6, 0.35)',
        }}
        className="border-b py-2 px-3 sm:px-4 flex items-center justify-center select-none"
      >
        <span
          style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
          className="text-base sm:text-lg font-black tracking-wide font-serif whitespace-nowrap text-center"
        >
          {SACRED_BRANDING.header[activeLang]}
        </span>
      </div>

      {/* Top Header Navigation Bar */}
      <header 
        style={{
          backgroundColor: isDarkMode ? 'rgba(26, 18, 14, 0.92)' : 'rgba(253, 248, 238, 0.92)',
          borderColor: '#D97706',
        }}
        className="sticky top-0 z-40 backdrop-blur-md border-b px-4 py-3 sm:px-6 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border border-amber-600/30 hover:bg-amber-500/10 transition-colors cursor-pointer flex items-center justify-center text-[#6B1D1D] dark:text-amber-400"
            title={activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : activeLang === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black tracking-widest text-[#D97706] uppercase">
                {activeLang === 'pb' ? 'ਮੂਲ ਸਿਧਾਂਤ' : activeLang === 'en' ? 'Core Principle' : 'मूल सिद्धांत'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/20">
                100% Offline
              </span>
            </div>
            <h1 
              style={{ color: '#6B1D1D' }} 
              className="text-base sm:text-lg font-serif font-black dark:text-amber-300 tracking-tight"
            >
              {activeLang === 'pb' ? 'ਇੱਕ ਸਤਯਨਾਮ ਤੋਂ ਸਭ ਸਧੈ' : activeLang === 'en' ? 'Master the One Satyanaam' : 'एक सत्यनाम से सब सधै'}
            </h1>
          </div>
        </div>

        {/* Language Selector Pills */}
        <div className="flex items-center gap-1 bg-amber-500/10 p-1 rounded-xl border border-amber-500/20">
          {(['hi', 'pb', 'en'] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveLang(lang);
                if (onSelectLanguage) onSelectLanguage(lang);
              }}
              className={`px-2.5 py-1 text-xs font-serif font-black rounded-lg transition-all cursor-pointer ${
                activeLang === lang
                  ? 'bg-[#6B1D1D] text-amber-50 shadow-xs'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/15'
              }`}
            >
              {lang === 'hi' ? 'हिंदी' : lang === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
            </button>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 space-y-7">
        
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
              <>Master the One Satyanaam, and everything in life falls into place;<br />Kabir says, without this One Root, the entire life goes in vain.</>
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
              : 'सद्गुरु कबीर साहेब का अटल आध्यात्मिक सिद्धांत: मूल रूपी सत्यनाम को सींचने से जीवन के समस्त फल-फूल (भक्ति, सुख, मुक्ति, शांति) स्वतः खिल उठते हैं।'}
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

          {/* SVG Inverted Tree Canvas with Multi-layered Light Animations */}
          <div className="bg-gradient-to-b from-amber-50/50 via-amber-100/20 to-transparent dark:from-stone-900/50 dark:to-transparent rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center">
            <svg viewBox="0 0 400 380" className="w-full max-w-md mx-auto overflow-visible select-none">
              <defs>
                <radialGradient id="rootHalo" cx="50%" cy="18%" r="55%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={isWatered ? "1" : "0.85"} />
                  <stop offset="40%" stopColor="#FEF08A" stopOpacity={isWatered ? "0.9" : "0.4"} />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#92400E" />
                  <stop offset="100%" stopColor="#3F1502" />
                </linearGradient>
                <linearGradient id="lightRayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#FDE047" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
                <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation={isWatered ? "8" : "3"} result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Radiant Pure White & Soft Golden Divine Light Rays shining downward */}
              <g opacity={isWatered ? "1" : "0.5"} className="transition-opacity duration-1000">
                <polygon points="200,45 130,220 170,220" fill="url(#lightRayGrad)" />
                <polygon points="200,45 170,240 210,240" fill="url(#lightRayGrad)" />
                <polygon points="200,45 230,220 270,220" fill="url(#lightRayGrad)" />
                <polygon points="200,45 100,190 140,190" fill="url(#lightRayGrad)" opacity="0.6" />
                <polygon points="200,45 260,190 300,190" fill="url(#lightRayGrad)" opacity="0.6" />
              </g>

              {/* Top Luminous Halo */}
              <circle cx="200" cy="55" r={isWatered ? "95" : "65"} fill="url(#rootHalo)" className="transition-all duration-1000" />

              {/* Top Label: Satyanaam Root */}
              <text x="200" y="22" textAnchor="middle" fill="#6B1D1D" fontWeight="900" fontSize="16" className="dark:fill-amber-300 font-serif tracking-wide drop-shadow-sm">
                {activeLang === 'pb' ? '॥ ਸਤਯਨਾਮ (ਮੂਲ) ॥' : activeLang === 'en' ? '॥ Satyanaam (Root) ॥' : '॥ सत्यनाम (मूल) ॥'}
              </text>

              {/* Intricate Glowing Roots Spreading Upward */}
              <g stroke={isWatered ? "#FFFFFF" : "#F59E0B"} strokeWidth={isWatered ? "3.5" : "2.5"} fill="none" filter="url(#glowShadow)" className="transition-all duration-700">
                <path d="M200,75 C190,50 160,35 125,28" />
                <path d="M200,75 C195,45 175,30 155,20" />
                <path d="M200,75 C200,45 200,25 200,15" />
                <path d="M200,75 C205,45 225,30 245,20" />
                <path d="M200,75 C210,50 240,35 275,28" />
                <path d="M185,65 C175,45 150,35 135,25" />
                <path d="M215,65 C225,45 250,35 265,25" />
              </g>

              {/* Majestic Inverted Banyan Trunk & Branches with 3D Depth */}
              <path d="M182,75 L218,75 L228,170 C245,190 275,215 285,235 C295,250 275,265 255,250 C235,235 220,200 210,185 L210,265 C210,280 190,280 190,265 L190,185 C180,200 165,235 145,250 C125,265 105,250 115,235 C125,215 155,190 172,170 Z" fill="url(#trunkGrad)" filter="url(#glowShadow)" />

              {/* Lush Multi-layered Downward Foliage (Clusters of Green Leaves) */}
              <g fill={isWatered ? "#16A34A" : "#15803D"} filter="url(#glowShadow)" className="transition-colors duration-700">
                <circle cx="125" cy="245" r="45" opacity="0.95" />
                <circle cx="275" cy="245" r="45" opacity="0.95" />
                <circle cx="160" cy="295" r="50" opacity="0.9" />
                <circle cx="240" cy="295" r="50" opacity="0.9" />
                <circle cx="200" cy="265" r="55" opacity="0.95" />
              </g>

              {/* Smooth Luminous Golden-White Energy Waves Flowing Down */}
              <g stroke="#FFFFFF" strokeWidth={isWatered ? "4" : "1.5"} strokeDasharray="8 6" fill="none" opacity={isWatered ? "1" : "0.3"} className="transition-all duration-1000 animate-pulse">
                <path d="M200,55 L200,180 L125,245" />
                <path d="M200,55 L200,180 L275,245" />
                <path d="M200,55 L200,265 L160,295" />
                <path d="M200,55 L200,265 L240,295" />
              </g>

              {/* Four Upright Readable Leaf Badges (Devotion, Happiness, Liberation, Peace) */}
              {fruitLabels.map((item, idx) => (
                <g key={idx} className="transition-transform duration-300 hover:scale-105">
                  <rect 
                    x={item.x - 42} 
                    y={item.y - 15} 
                    width="84" 
                    height="32" 
                    rx="16" 
                    fill={isWatered ? "#FEF08A" : "#FEF3C7"} 
                    stroke="#D97706" 
                    strokeWidth="2.5" 
                    filter="url(#glowShadow)" 
                  />
                  <text 
                    x={item.x} 
                    y={item.y + 5} 
                    textAnchor="middle" 
                    fill="#6B1D1D" 
                    fontWeight="900" 
                    fontSize="13" 
                    className="font-serif tracking-tight"
                  >
                    {item.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Peaceful Status Message & Gita/Bijak Wisdom Footer */}
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/12 border border-amber-500/30 text-center max-w-xl space-y-2">
              {isWatered && (
                <div className="p-2 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-serif font-black animate-pulse">
                  ✨ {activeLang === 'pb' ? 'ਇੱਕ ਸਤਯਨਾਮ ਨੂੰ ਸਾਧਣ ਨਾਲ ਭਗਤੀ, ਸੁੱਖ, ਮੁਕਤੀ ਅਤੇ ਸ਼ਾਂਤੀ ਆਪਣੇ ਆਪ ਪ੍ਰਾਪਤ ਹੁੰਦੇ ਹਨ।' : activeLang === 'en' ? 'By mastering the One Satyanaam, devotion, happiness, liberation, and peace are effortlessly attained.' : 'एक सत्यनाम को साधने से भक्ति, सुख, मुक्ति और शांति स्वतः प्राप्त होते हैं।'}
                </div>
              )}
              <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="font-bold text-[#D97706]">
                  {activeLang === 'pb' ? 'ਬੀਜਕ ਤੇ ਗੀਤਾ ਦਰਸ਼ਨ: ' : activeLang === 'en' ? 'Bijak & Gita Wisdom: ' : 'बीजक एवं गीता दर्शन: '}
                </span>
                {activeLang === 'pb'
                  ? '"ਊਰਧਵਮੂਲਮਧਃਸ਼ਾਖਮਸ਼ਵੱਥੰ ਪ੍ਰਾਹੁਰਵਯਯਮ" — ਜੜ੍ਹਾਂ ਸਤਯਨਾਮ ਪੁਰਸ਼ ਹਨ। ਜੜ੍ਹਾਂ ਨੂੰ ਸਿੰਜਣ ਨਾਲ ਭਗਤੀ, ਸੁੱਖ, ਮੁਕਤੀ ਅਤੇ ਸ਼ਾਂਤੀ ਦੇ ਫਲ ਸਹਿਜੇ ਹੀ ਪ੍ਰਾਪਤ ਹੁੰਦੇ ਹਨ।'
                  : activeLang === 'en'
                  ? '"Urdhvamulam Adhahshakham" — The roots dwell in Supreme Satyanaam. By watering the Root, the fruits of Bhakti, Happiness, Liberation, and Peace blossom effortlessly.'
                  : '"ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्" — जड़ें परम सत्यनाम पुरुष हैं। जड़ को सींचने से भक्ति, सुख, मुक्ति और शांति के चारों पावन फल स्वतः प्राप्त होते हैं।'}
              </p>
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
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਚਾਰੇ ਯੁਗਾਂ ਦੇ ਪਾਵਨ ਨਾਮ ਅਤੇ ਇੱਕ ਸਤਯਨਾਮ ਦਾ ਅਟੱਲ ਉਪਦੇਸ਼'
                  : activeLang === 'en'
                  ? 'Satguru Kabir Saheb\'s divine names and steadfast teaching across all four Yugas'
                  : 'सद्गुरु कबीर साहेब जी के चारों युगों के पावन नाम एवं एक सत्यनाम का अटल उपदेश'}
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
                  ? 'ਕਬੀਰ ਸਾਗਰ, ਬੀਜਕ, ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਤੇ ਰਹੀਮ ਦੋਹਾਵਲੀ ਦੇ ਅਟੱਲ ਪ੍ਰਮਾਣ'
                  : activeLang === 'en'
                  ? 'Nine canonical verses from Kabir Sagar, Bijak, SGGS, and Rahim Dohavali'
                  : 'कबीर सागर, बीजक, साखी संग्रह, श्री गुरु ग्रंथ साहिब एवं रहीम दोहावली के अटल प्रमाण'}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {activeLang === 'pb' ? '੯ ਦੋਹੇ' : activeLang === 'en' ? '9 Verses' : '९ दोहे'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dohasList.map((item) => {
              const isPlaying = playingDohaId === item.id;
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: isDarkMode ? '#221812' : '#FFFDF9',
                    borderColor: item.isCrossReference ? '#D97706' : 'rgba(217, 119, 6, 0.4)',
                  }}
                  className={`rounded-2xl border-2 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative overflow-hidden ${
                    item.isCrossReference ? 'ring-1 ring-amber-500/30' : ''
                  }`}
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Granth Source Badge & Actions */}
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        style={{ color: '#D97706' }} 
                        className="text-[11px] font-serif font-black tracking-wide truncate flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0" />
                        <span>{item.source[activeLang] || item.source.hi}</span>
                      </span>

                      {/* Right Action Icons: TTS & WhatsApp Share */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Audio / TTS Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleSpeech(item)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isPlaying
                              ? 'bg-amber-600 text-white border-amber-700'
                              : 'border-amber-500/30 hover:bg-amber-500/15 text-stone-700 dark:text-stone-300'
                          }`}
                          title={
                            isPlaying
                              ? activeLang === 'pb'
                                ? 'ਆਵਾਜ਼ ਰੋਕੋ'
                                : activeLang === 'en'
                                ? 'Stop Audio'
                                : 'ध्वनि रोकें'
                              : activeLang === 'pb'
                              ? 'ਬਾਣੀ ਸੁਣੋ'
                              : activeLang === 'en'
                              ? 'Listen Audio'
                              : 'वाणी श्रवण करें'
                          }
                        >
                          {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />}
                        </button>

                        {/* WhatsApp Share Button */}
                        <button
                          type="button"
                          onClick={() => handleShareDoha(item)}
                          className="p-1.5 rounded-lg border border-amber-500/30 hover:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 transition-colors cursor-pointer"
                          title={
                            activeLang === 'pb'
                              ? 'WhatsApp ਤੇ ਭੇਜੋ'
                              : activeLang === 'en'
                              ? 'Share on WhatsApp'
                              : 'WhatsApp पर भेजें'
                          }
                        >
                          {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Sacred Two-Line Doha Text */}
                    <p 
                      style={{ color: '#6B1D1D' }} 
                      className="font-serif font-black text-sm sm:text-base leading-relaxed dark:text-amber-300 whitespace-pre-line"
                    >
                      {formatCoupletString(item.doha)}
                    </p>

                    {/* Simple 2-Line Meaning in Active Language */}
                    <div className="p-3 rounded-xl bg-amber-500/8 border border-amber-500/15">
                      <p className="text-xs font-serif leading-relaxed text-stone-700 dark:text-stone-300">
                        <span className="font-bold text-[#D97706]">
                          {activeLang === 'pb' ? 'ਭਾਵਾਰਥ: ' : activeLang === 'en' ? 'Meaning: ' : 'भावार्थ: '}
                        </span>
                        {item.meaning[activeLang] || item.meaning.hi}
                      </p>
                    </div>
                  </div>

                  {/* Direct Navigation Button for Satyanaam Panacea (Supreme Panacea) */}
                  {item.id === 4 && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          sacredHaptics.mediumTap();
                          if (onNavigateView) onNavigateView('satyanaam-panacea');
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-amber-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-amber-400/40 flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                        <span>
                          {activeLang === 'pb' ? 'ਦਿਵਯ ਪ੍ਰਕਾਸ਼ ਅਨੁਭਵ ਕਰੋ (ਸਰਬ ਰੋਗ ਨਿਵਾਰਕ ਔਸ਼ਧੀ)' : activeLang === 'en' ? 'Experience Divine White Light (Supreme Panacea)' : 'दिव्य प्रकाश अनुभव करें (सर्व रोग निवारक औषधि)'}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
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

      </main>
    </div>
  );
};
