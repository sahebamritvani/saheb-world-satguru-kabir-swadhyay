import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  UserCircle, 
  Heart, 
  Share2,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  BookmarkCheck,
  Quote
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { shareAppUniversally } from '../utils/url';
import { sacredHaptics } from '../services/haptics';

interface CommunityBoardProps {
  language: Language;
  onClose?: () => void;
}

interface SacredReflection {
  id: string;
  authorName: string;
  category: 'sumiran' | 'sadhana' | 'philosophy' | 'compassion';
  text: {
    hi: string;
    pb: string;
    en: string;
  };
  quoteVani?: {
    hi: string;
    pb: string;
    en: string;
  };
  date: string;
  verifiedTitle: {
    hi: string;
    pb: string;
    en: string;
  };
  initialLikes: number;
}

const AUTHENTIC_REFLECTIONS: SacredReflection[] = [
  {
    id: 'vichar-1',
    authorName: 'सत्संग मण्डल (वाराणसी)',
    category: 'sumiran',
    text: {
      hi: 'सत्यनाम का सुमिरन केवल शब्दों का उच्चारण नहीं, अपितु सुरति और शब्द का आंतरिक संगम है। जब श्वास-श्वास में नाम समाता है, तब समस्त मानसिक विकार शांत हो जाते हैं।',
      pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕੇਵਲ ਸ਼ਬਦਾਂ ਦਾ ਉਚਾਰਨ ਨਹੀਂ, ਸਗੋਂ ਸੁਰਤ ਤੇ ਸ਼ਬਦ ਦਾ ਅੰਦਰੂਨੀ ਮਿਲਾਪ ਹੈ। ਜਦੋਂ ਹਰ ਸੁਆਸ ਵਿੱਚ ਨਾਮ ਵੱਸਦਾ ਹੈ, ਤਦ ਸਾਰੇ ਵਿਕਾਰ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੇ ਹਨ।',
      en: 'The remembrance of Satya Naam is not merely the recitation of syllables, but the inner communion of awareness and divine resonance. When name imbues every breath, all mental turmoil dissolves.',
    },
    quoteVani: {
      hi: 'माला फेरत जुग भया, फिरा न मन का फेर। कर का मनका डारि दे, मन का मनका फेर॥',
      pb: 'ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਯਾ, ਫਿਰਾ ਨ ਮਨ ਕਾ ਫੇਰ। ਕਰ ਕਾ ਮਨਕਾ ਡਾਰਿ ਦੇ, ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ॥',
      en: 'Ages passed counting prayer beads, yet the turns of the mind ceased not. Cast aside the beads in your hand, and turn the inner bead of your soul.',
    },
    date: 'अमृत वेला विचार',
    verifiedTitle: {
      hi: 'सत्यान्वेषी सत्संगी',
      pb: 'ਸਤਿਸੰਗੀ ਸਾਧਕ',
      en: 'Verified Seeker',
    },
    initialLikes: 108,
  },
  {
    id: 'vichar-2',
    authorName: 'कबीर चौरा शोध केंद्र',
    category: 'sadhana',
    text: {
      hi: 'दैनिक जीवन में सतगुरु के बताए १० सूत्रों का पालन ही वास्तविक साधना है। किसी जीव को कष्ट न देना, सत्य और संतोष को धारण करना ही आत्मा का वास्तविक श्रृंगार है।',
      pb: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਸਤਿਗੁਰੂ ਦੇ ਦੱਸੇ ੧੦ ਸੂਤਰਾਂ ਦੀ ਪਾਲਣਾ ਹੀ ਅਸਲ ਸਾਧਨਾ ਹੈ। ਕਿਸੇ ਜੀਵ ਨੂੰ ਦੁੱਖ ਨਾ ਦੇਣਾ, ਸੱਚ ਤੇ ਸੰਤੋਖ ਧਾਰਨ ਕਰਨਾ ਹੀ ਆਤਮਾ ਦਾ ਸੱਚਾ ਸ਼ਿੰਗਾਰ ਹੈ।',
      en: 'Living the 10 Sacred Sutras of Satguru in daily conduct is authentic sadhana. Causing no harm to any living being, and embracing truth and contentment, is the true adornment of the soul.',
    },
    quoteVani: {
      hi: 'दया कौन पर कीजिये, का पर निर्दय होय। सांई के सब जीव हैं, कीरी कुंजर दोय॥',
      pb: 'ਦਯਾ ਕੌਨ ਪਰ ਕੀਜੀਯੇ, ਕਾ ਪਰ ਨਿਰ੍ਦਯ ਹੋਯ। ਸਾਂਈ ਕੇ ਸਬ ਜੀਵ ਹੈਂ, ਕੀਰੀ ਕੁੰਜਰ ਦੋਯ॥',
      en: 'Unto whom should one bestow mercy, unto whom act ruthless? All creatures belong to the Divine Lord, from the tiny ant to the mighty elephant.',
    },
    date: 'नित्य साधना बोध',
    verifiedTitle: {
      hi: 'सत्संग मार्गदर्शक',
      pb: 'ਸਤਿਸੰਗ ਮਾਰਗਦਰਸ਼ਕ',
      en: 'Satsang Guide',
    },
    initialLikes: 95,
  },
  {
    id: 'vichar-3',
    authorName: 'मगहर तीर्थ वाचनालय',
    category: 'philosophy',
    text: {
      hi: 'कबीर साहेब की उलटबांसी बुद्धि को विस्मित करके अंतरात्मा को जगाने वाली कुंजी है। जब हम बाहर खोजने के बजाय भीतर शून्य में ध्यान लगाते हैं, तब परमात्मा का प्रत्यक्ष बोध होता है।',
      pb: 'ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਉਲਟਬਾਂਸੀ ਬੁੱਧੀ ਨੂੰ ਹੈਰਾਨ ਕਰਕੇ ਅੰਤਰ-ਆਤਮਾ ਨੂੰ ਜਗਾਉਣ ਵਾਲੀ ਕੁੰਜੀ ਹੈ। ਜਦੋਂ ਬਾਹਰ ਖੋਜਣ ਦੀ ਬਜਾਏ ਅੰਦਰ ਧਿਆਨ ਲਗਾਈਏ, ਤਦ ਪਰਮਾਤਮਾ ਦਾ ਸੱਚਾ ਬੋਧ ਹੁੰਦਾ ਹੈ।',
      en: 'Kabir Saheb’s Ulatbansi is the mystical key that bewilders external intellect to awaken the inner consciousness. Turning inward to the silent void reveals the Supreme Reality.',
    },
    quoteVani: {
      hi: 'कस्तूरी कुंडल बसै, मृग ढूंढ़े बन माहि। ऐसे घट-घट राम हैं, दुनिया देखै नाहिं॥',
      pb: 'ਕਸਤੂਰੀ ਕੁੰਡਲ ਬਸੈ, ਮ੍ਰਿਗ ਢੂੰਢ਼ੈ ਬਨ ਮਾਹਿ। ਐਸੇ ਘਟ-ਘਟ ਰਾਮ ਹੈਂ, ਦੁਨਿਯਾ ਦੇਖੈ ਨਾਹਿਂ॥',
      en: 'The musk dwells within the deer’s own navel, yet it searches frantically across the forest. Likewise the Divine resides within each heart, yet the world sees it not.',
    },
    date: 'सार-शब्द विमर्श',
    verifiedTitle: {
      hi: 'तत्व-जिज्ञासु',
      pb: 'ਤੱਤ-ਜਿਗਿਆਸੂ',
      en: 'Truth Inquirer',
    },
    initialLikes: 142,
  },
  {
    id: 'vichar-4',
    authorName: 'साधना धाम परिवार',
    category: 'compassion',
    text: {
      hi: 'प्रेम के बिना समस्त जप, तप और ज्ञान अधूरा है। जो हृदय सबके प्रति समभाव और करुणा रखता है, वही सतगुरु के पावन चरणों का सच्चा अधिकारी है।',
      pb: 'ਪ੍ਰੇਮ ਤੋਂ ਬਿਨਾਂ ਸਾਰੇ ਜਾਪ, ਤਪ ਤੇ ਗਿਆਨ ਅਧੂਰੇ ਹਨ। ਜਿਸ ਹਿਰਦੇ ਵਿੱਚ ਸਾਰਿਆਂ ਲਈ ਸਮਭਾਵ ਤੇ ਦਇਆ ਹੈ, ਉਹੀ ਸਤਿਗੁਰੂ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਦਾ ਸੱਚਾ ਅਧਿਕਾਰੀ ਹੈ।',
      en: 'Without pure love, all asceticism, recitation, and scholastic wisdom remain incomplete. A heart overflowing with equanimity and compassion is truly worthy of the Satguru’s grace.',
    },
    quoteVani: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय॥',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਯਾ ਨ ਕੋਯ। ਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਯ॥',
      en: 'The world perished reading scripture after scripture, yet none became truly wise. One who realizes the two and a half letters of Divine Love alone becomes the true sage.',
    },
    date: 'प्रेम-भक्ति धारा',
    verifiedTitle: {
      hi: 'पावन सेवक',
      pb: 'ਪਾਵਨ ਸੇਵਕ',
      en: 'Sacred Devotee',
    },
    initialLikes: 168,
  },
];

export const CommunityBoard: React.FC<CommunityBoardProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();
  const t = translations[language] || translations.hi;

  const [activeCategory, setActiveCategory] = useState<'all' | 'sumiran' | 'sadhana' | 'philosophy' | 'compassion'>('all');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [shareNotice, setShareNotice] = useState<string | null>(null);

  // Load liked posts from localStorage
  useEffect(() => {
    try {
      const storedLikes = localStorage.getItem('sahebworld_liked_reflections');
      if (storedLikes) {
        setLikedPosts(JSON.parse(storedLikes));
      }
      const initialCounts: Record<string, number> = {};
      AUTHENTIC_REFLECTIONS.forEach(r => {
        initialCounts[r.id] = r.initialLikes;
      });
      setLikeCounts(initialCounts);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  const handleToggleLike = (id: string) => {
    sacredHaptics.lightTap();
    setLikedPosts(prev => {
      const isCurrentlyLiked = !!prev[id];
      const updated = { ...prev, [id]: !isCurrentlyLiked };
      try {
        localStorage.setItem('sahebworld_liked_reflections', JSON.stringify(updated));
      } catch {}
      
      setLikeCounts(prevCounts => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 0) + (isCurrentlyLiked ? -1 : 1)
      }));

      return updated;
    });
  };

  const handleShareReflection = async (reflection: SacredReflection) => {
    sacredHaptics.lightTap();
    const text = `🙏 साहेब बंदगी साहेब! 🙏\n\n` +
      `🌸 ${reflection.authorName} (${reflection.date}):\n\n` +
      `"${reflection.text[language] || reflection.text.hi}"\n\n` +
      (reflection.quoteVani ? `📜 पावन वाणी:\n"${reflection.quoteVani[language] || reflection.quoteVani.hi}"\n\n` : '') +
      `📱 'साहेब वर्ल्ड • Saheb World' ऐप से साभार\nhttps://ais-pre-meux3g56fqgqmol3tohmrd-795050738320.asia-east1.run.app`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'साहेब वर्ल्ड • पावन सत्संग विचार',
          text,
        });
        setShareNotice(language === 'hi' ? '✓ विचार साझा किया गया' : '✓ Reflection shared');
      } else {
        await navigator.clipboard.writeText(text);
        setShareNotice(language === 'hi' ? '✓ विचार कॉपी हो गया! इसे WhatsApp पर साझा करें' : '✓ Copied to clipboard! Share on WhatsApp');
      }
    } catch {
      try {
        await navigator.clipboard.writeText(text);
        setShareNotice(language === 'hi' ? '✓ विचार कॉपी हो गया' : '✓ Copied');
      } catch {}
    }
    setTimeout(() => setShareNotice(null), 3000);
  };

  const filteredReflections = activeCategory === 'all'
    ? AUTHENTIC_REFLECTIONS
    : AUTHENTIC_REFLECTIONS.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-20 relative select-none">
      {/* Top Sacred Branding Bar */}
      <div 
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border py-2.5 sm:py-3 px-4 rounded-2xl shadow-xs text-center"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-base font-black tracking-widest font-serif block drop-shadow-xs"
        >
          {SACRED_BRANDING.header[language]}
        </span>
      </div>

      {/* Navigation & Header Bar */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
            {language === 'hi' ? 'साधना मंच (सत्संग विचार)' : language === 'pb' ? 'ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਵਿਚਾਰ)' : 'Sadhana Forum (Satsang Vichar)'}
          </span>
        </div>

        {onClose && (
          <button 
            onClick={onClose} 
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
            title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
          </button>
        )}
      </div>

      {/* Toast Notification */}
      {shareNotice && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-bold text-center shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{shareNotice}</span>
        </motion.div>
      )}

      {/* Header Banner */}
      <div className="text-center space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-2xs"
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{language === 'pb' ? 'ਪਾਵਨ ਸਤਿਸੰਗ ਵਿਚਾਰ ਮੰਚ' : language === 'en' ? 'Sacred Satsang Forum' : 'पावन सत्संग विचार मंच'}</span>
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight" style={{ color: theme.textPrimary }}>
          {language === 'pb' ? 'ਸਤਿਸੰਗ ਵਿਚਾਰ ਤੇ ਰੂਹਾਨੀ ਅਨੁਭੂਤੀਆਂ' : language === 'en' ? 'Satsang Discourses & Spiritual Insights' : 'सत्संग विचार एवं आध्यात्मिक अनुभूतियाँ'}
        </h2>
        <p className="text-xs sm:text-sm max-w-xl mx-auto opacity-75 font-serif" style={{ color: theme.textSecondary }}>
          {language === 'pb' 
            ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਸਿੱਖਿਆ, ਸ਼ੁੱਧ ਨਾਮ-ਸਿਮਰਨ ਅਤੇ ਸੱਚੀ ਸਾਧਨਾ ਨਾਲ ਜੁੜੇ ਪ੍ਰਮਾਣਿਤ ਅੰਮ੍ਰਿਤ ਵਿਚਾਰ।'
            : language === 'en'
            ? 'Verified spiritual reflections and divine insights anchored in Satguru Kabir Saheb’s timeless teachings.'
            : 'सतगुरु कबीर साहेब की पावन शिक्षा, शुद्ध नाम-सुमिरन एवं सच्ची साधना से जुड़े प्रामाणिक अमृत विचार।'}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
        {[
          { id: 'all', label: language === 'pb' ? 'ਸਾਰੇ ਵਿਚਾਰ' : language === 'en' ? 'All Reflections' : 'सर्व विचार' },
          { id: 'sumiran', label: language === 'pb' ? 'ਸਿਮਰਨ ਮਹਿਮਾ' : language === 'en' ? 'Sumiran' : 'सुमिरन महिमा' },
          { id: 'sadhana', label: language === 'pb' ? 'ਸਾਧਨਾ ਬੋਧ' : language === 'en' ? 'Sadhana' : 'साधना बोध' },
          { id: 'philosophy', label: language === 'pb' ? 'ਕਬੀਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Philosophy' : 'कबीर दर्शन' },
          { id: 'compassion', label: language === 'pb' ? 'ਪ੍ਰੇਮ ਤੇ ਦਇਆ' : language === 'en' ? 'Compassion' : 'प्रेम व दया' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveCategory(cat.id as any);
            }}
            style={{
              backgroundColor: activeCategory === cat.id ? theme.buttonPrimaryBg : theme.cardBg,
              color: activeCategory === cat.id ? theme.buttonPrimaryText : theme.textPrimary,
              borderColor: activeCategory === cat.id ? theme.buttonPrimaryBg : theme.cardBorder,
            }}
            className="px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif whitespace-nowrap shadow-2xs transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Reflections Feed */}
      <div className="space-y-4 pt-2">
        <AnimatePresence mode="popLayout">
          {filteredReflections.map((item, idx) => {
            const isLiked = !!likedPosts[item.id];
            const currentLikes = likeCounts[item.id] || item.initialLikes;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden backdrop-blur-md"
              >
                {/* Background Watermark Quote */}
                <div 
                  className="absolute -top-3 -right-2 text-8xl font-serif opacity-5 pointer-events-none select-none"
                  style={{ color: theme.sacredMaroon }}
                >
                  <Quote className="w-24 h-24" />
                </div>

                {/* Author & Verification Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <UserCircle className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-black font-serif" style={{ color: theme.textPrimary }}>
                          {item.authorName}
                        </span>
                        <span title="प्रामाणिक सत्संगी"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /></span>
                      </div>
                      <span className="text-[0.625rem] font-bold text-amber-700 dark:text-amber-400 font-serif">
                        {item.verifiedTitle[language] || item.verifiedTitle.hi} • {item.date}
                      </span>
                    </div>
                  </div>

                  <span className="text-[0.625rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                    {language === 'pb' ? 'ਪ੍ਰਮਾਣਿਤ' : language === 'en' ? 'Verified' : 'प्रामाणिक'}
                  </span>
                </div>

                {/* Reflection Body Text */}
                <p className="text-sm sm:text-base font-serif leading-relaxed" style={{ color: theme.textPrimary }}>
                  {item.text[language] || item.text.hi}
                </p>

                {/* Associated Sacred Verse */}
                {item.quoteVani && (
                  <div 
                    style={{ 
                      backgroundColor: theme.mode === 'mystic_dark' ? '#140F0A' : theme.stepActiveBg,
                      borderColor: theme.accentGold 
                    }}
                    className="p-3.5 rounded-2xl border-l-4 border shadow-2xs space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-[0.6875rem] font-bold text-amber-800 dark:text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਪਾਵਨ ਬਾਣੀ' : language === 'en' ? 'Satguru Kabir Sacred Bani' : 'सतगुरु कबीर पावन बाणी'}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif font-bold italic" style={{ color: theme.sacredMaroon }}>
                      {item.quoteVani[language] || item.quoteVani.hi}
                    </p>
                  </div>
                )}

                {/* Footer Actions (Like & Share) */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-600/15">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleToggleLike(item.id)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      style={{ color: isLiked ? '#DC2626' : theme.textSecondary }}
                      title={isLiked ? 'साधना नमन' : 'नमन करें'}
                    >
                      <div className={`p-1.5 rounded-full transition-colors ${isLiked ? 'bg-red-500/15' : 'hover:bg-amber-500/10'}`}>
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                      </div>
                      <span className="font-mono">{currentLikes}</span>
                    </button>

                    <button
                      onClick={() => handleShareReflection(item)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer text-amber-700 dark:text-amber-300"
                      title={language === 'hi' ? 'व्हाट्सएप पर शेयर करें' : 'Share'}
                    >
                      <div className="p-1.5 rounded-full hover:bg-amber-500/10">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <span className="font-serif hidden sm:inline">{language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share' : 'शेयर'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-[0.625rem] text-emerald-700 dark:text-emerald-400 font-serif font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{language === 'pb' ? 'ਪਾਵਨ ਵਿਚਾਰ' : language === 'en' ? 'Sacred Vani' : 'पावन सत्संग वाणी'}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
