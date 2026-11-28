import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  UserCircle,
  Heart,
  Share2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Quote,
  PlusCircle,
  Trash2,
  BookOpen,
  X,
  Save
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import {
  ADMIN_SLOTS_UPDATED_EVENT,
  getInjectedGranthChapters,
  hydrateAdminSlotsFromIndexedDB,
} from '../services/adminSlotInjectorStore';

interface CommunityBoardProps {
  language: Language;
  onClose?: () => void;
}

type ReflectionCategory = 'sumiran' | 'sadhana' | 'philosophy' | 'compassion' | 'jigyasa';

interface SacredReflection {
  id: string;
  authorName: string;
  category: ReflectionCategory;
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
  source?: 'curated' | 'injected' | 'personal';
}

interface StoredPersonalNote {
  id: string;
  authorName: string;
  category: ReflectionCategory;
  text: string;
  quoteVani?: string;
  date: string;
  createdAt: number;
}

const LIKES_STORAGE_KEY = 'sahebworld_liked_reflections';
const PERSONAL_NOTES_STORAGE_KEY = 'sahebworld_satsang_personal_notes';

const AUTHENTIC_REFLECTIONS: SacredReflection[] = [
  {
    id: 'vichar-1',
    authorName: 'सत्संग मण्डल (वाराणसी)',
    category: 'sumiran',
    text: {
      hi: 'सत्यनाम का सुमिरन केवल शब्दों का उच्चारण नहीं, अपितु सुरति और शब्द का आंतरिक संगम है। जब श्वास-श्वास में नाम समाता है, तब समस्त मानसिक विकार शांत हो जाते हैं।',
      pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕੇਵਲ ਸ਼ਬਦਾਂ ਦਾ ਉਚਾਰਨ ਨਹੀਂ, ਸਗੋਂ ਸੁਰਤ ਤੇ ਸ਼ਬਦ ਦਾ ਅੰਦਰੂਨੀ ਮਿਲਾਪ ਹੈ। ਜਦੋਂ ਹਰ ਸੁਆਸ ਵਿੱਚ ਨਾਮ ਵੱਸਦਾ ਹੈ, ਤਦ ਸਾਰੇ ਵਿਕਾਰ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੇ ਹਨ।',
      en: 'The remembrance of Satyanaam is not merely the recitation of syllables, but the inner communion of awareness and divine resonance. When name imbues every breath, all mental turmoil dissolves.',
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
    source: 'curated',
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
    source: 'curated',
  },
  {
    id: 'vichar-3',
    authorName: 'मगहर तीर्थ वाचनालय',
    category: 'philosophy',
    text: {
      hi: 'सतगुरु कबीर साहेब की उलटबांसी बुद्धि को विस्मित करके अंतरात्मा को जगाने वाली कुंजी है। जब हम बाहर खोजने के बजाय भीतर शून्य में ध्यान लगाते हैं, तब परमात्मा का प्रत्यक्ष बोध होता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਉਲਟਬਾਂਸੀ ਬੁੱਧੀ ਨੂੰ ਹੈਰਾਨ ਕਰਕੇ ਅੰਤਰ-ਆਤਮਾ ਨੂੰ ਜਗਾਉਣ ਵਾਲੀ ਕੁੰਜੀ ਹੈ। ਜਦੋਂ ਬਾਹਰ ਖੋਜਣ ਦੀ ਬਜਾਏ ਅੰਦਰ ਧਿਆਨ ਲਗਾਈਏ, ਤਦ ਪਰਮਾਤਮਾ ਦਾ ਸੱਚਾ ਬੋਧ ਹੁੰਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb’s Ulatbansi is the mystical key that bewilders external intellect to awaken the inner consciousness. Turning inward to the silent void reveals the Supreme Reality.',
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
    source: 'curated',
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
    source: 'curated',
  },
];

function buildInjectedCommunityReflections(): SacredReflection[] {
  const chapters = getInjectedGranthChapters('slot-30-community-board');
  if (!chapters || chapters.length === 0) return [];

  const entries: SacredReflection[] = [];
  chapters.forEach((ch, cIdx) => {
    ch.verses.forEach((v, vIdx) => {
      const hiMain = v.lines.hi.join('\n') || ch.description.hi || ch.title.hi;
      const pbMain = v.lines.pb.join('\n') || ch.description.pb || ch.title.pb;
      const enMain = v.lines.en.join('\n') || ch.description.en || ch.title.en;

      const hasQuote = Boolean(v.bhavarth?.hi || v.contemplation?.hi);
      entries.push({
        id: `slot30-inj-${ch.id || cIdx}-${vIdx}`,
        authorName: ch.title.hi || 'सत्संग संवाद संग्रह',
        category: 'jigyasa',
        text: {
          hi: hiMain,
          pb: pbMain,
          en: enMain,
        },
        quoteVani: hasQuote
          ? {
              hi: v.bhavarth?.hi || v.contemplation?.hi || '',
              pb: v.bhavarth?.pb || v.contemplation?.pb || '',
              en: v.bhavarth?.en || v.contemplation?.en || '',
            }
          : undefined,
        date: 'विशेष सत्संग संकलन (Slot #30)',
        verifiedTitle: {
          hi: 'सत्संग संवाद (स्व-जोड़ित)',
          pb: 'ਸਤਿਸੰਗ ਸੰਵਾਦ (ਸੰਕਲਿਤ)',
          en: 'Custom Satsang Entry',
        },
        initialLikes: 21,
        source: 'injected',
      });
    });
  });
  return entries;
}

export const CommunityBoard: React.FC<CommunityBoardProps> = ({ language }) => {
  const { theme, isDarkMode } = useAppTheme();

  const [activeCategory, setActiveCategory] = useState<'all' | ReflectionCategory>('all');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [shareNotice, setShareNotice] = useState<string | null>(null);

  // Offline Personal Satsang Notebook / Panthic Q&A State
  const [personalNotes, setPersonalNotes] = useState<StoredPersonalNote[]>([]);
  const [injectedReflections, setInjectedReflections] = useState<SacredReflection[]>(() =>
    buildInjectedCommunityReflections()
  );
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [noteAuthor, setNoteAuthor] = useState('');
  const [noteCategory, setNoteCategory] = useState<ReflectionCategory>('jigyasa');
  const [noteText, setNoteText] = useState('');
  const [noteQuote, setNoteQuote] = useState('');

  const syncInjectedEntries = useCallback(() => {
    setInjectedReflections(buildInjectedCommunityReflections());
  }, []);

  // Load liked posts, personal notes & hydrate Slot #30 offline from localStorage/IndexedDB
  useEffect(() => {
    try {
      const storedLikes = localStorage.getItem(LIKES_STORAGE_KEY);
      if (storedLikes) {
        setLikedPosts(JSON.parse(storedLikes));
      }
      const storedNotesRaw = localStorage.getItem(PERSONAL_NOTES_STORAGE_KEY);
      if (storedNotesRaw) {
        const parsedNotes = JSON.parse(storedNotesRaw);
        if (Array.isArray(parsedNotes)) {
          setPersonalNotes(parsedNotes);
        }
      }
    } catch {}

    hydrateAdminSlotsFromIndexedDB()
      .then(() => {
        syncInjectedEntries();
      })
      .catch(() => {});

    const handleSlotUpdate = (e: Event) => {
      const detail = (e as CustomEvent<{ slotId?: string }>).detail;
      if (!detail?.slotId || detail.slotId === 'all' || detail.slotId === 'slot-30-community-board') {
        syncInjectedEntries();
      }
    };
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotUpdate);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, handleSlotUpdate);
  }, [syncInjectedEntries]);

  const personalAsReflections: SacredReflection[] = useMemo(
    () =>
      personalNotes.map((n) => ({
        id: n.id,
        authorName:
          n.authorName.trim() ||
          (language === 'pb' ? 'ਨਿੱਜੀ ਸਤਿਸੰਗ ਨੋਟ' : language === 'en' ? 'Personal Satsang Note' : 'व्यक्तिगत सत्संग नोट'),
        category: n.category,
        text: {
          hi: n.text,
          pb: n.text,
          en: n.text,
        },
        quoteVani: n.quoteVani?.trim()
          ? {
              hi: n.quoteVani.trim(),
              pb: n.quoteVani.trim(),
              en: n.quoteVani.trim(),
            }
          : undefined,
        date: n.date,
        verifiedTitle: {
          hi: 'ऑफ़लाइन नोटबुक प्रविष्टि',
          pb: 'ਆਫ਼ਲਾਈਨ ਨੋਟਬੁੱਕ ਨੋਟ',
          en: 'Saved Offline Note',
        },
        initialLikes: 1,
        source: 'personal',
      })),
    [personalNotes, language]
  );

  const allReflections = useMemo(
    () => [...personalAsReflections, ...injectedReflections, ...AUTHENTIC_REFLECTIONS],
    [personalAsReflections, injectedReflections]
  );

  // Sync baseline like counts for any newly appearing reflections
  useEffect(() => {
    setLikeCounts((prev) => {
      const next = { ...prev };
      let changed = false;
      allReflections.forEach((r) => {
        if (typeof next[r.id] !== 'number') {
          next[r.id] = r.initialLikes;
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, [allReflections]);

  const handleToggleLike = (id: string, fallbackInitial: number) => {
    sacredHaptics.lightTap();
    setLikedPosts((prev) => {
      const isCurrentlyLiked = !!prev[id];
      const updated = { ...prev, [id]: !isCurrentlyLiked };
      try {
        localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updated));
      } catch {}

      setLikeCounts((prevCounts) => ({
        ...prevCounts,
        [id]: (prevCounts[id] ?? fallbackInitial) + (isCurrentlyLiked ? -1 : 1),
      }));

      return updated;
    });
  };

  const handleSavePersonalNote = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedText = noteText.trim();
    if (!cleanedText) return;

    sacredHaptics.lightTap();
    const dateStr = new Date().toLocaleDateString(
      language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN',
      { day: 'numeric', month: 'short', year: 'numeric' }
    );

    const newNote: StoredPersonalNote = {
      id: `satsang-note-${Date.now()}`,
      authorName: noteAuthor.trim(),
      category: noteCategory,
      text: cleanedText,
      quoteVani: noteQuote.trim() || undefined,
      date: dateStr,
      createdAt: Date.now(),
    };

    const nextNotes = [newNote, ...personalNotes];
    setPersonalNotes(nextNotes);
    try {
      localStorage.setItem(PERSONAL_NOTES_STORAGE_KEY, JSON.stringify(nextNotes));
    } catch {}

    setNoteText('');
    setNoteQuote('');
    setIsComposerOpen(false);
    setShareNotice(
      language === 'pb'
        ? '✓ ਤੁਹਾਡਾ ਸਤਿਸੰਗ ਨੋਟ ਡਿਵਾਈਸ ਤੇ ਆਫ਼ਲਾਈਨ ਸੁਰੱਖਿਅਤ ਹੋ ਗਿਆ'
        : language === 'en'
        ? '✓ Satsang note saved offline on your device'
        : '✓ आपका सत्संग नोट डिवाइस पर ऑफ़लाइन सुरक्षित हो गया'
    );
    setTimeout(() => setShareNotice(null), 3000);
  };

  const handleDeletePersonalNote = (id: string) => {
    sacredHaptics.lightTap();
    const nextNotes = personalNotes.filter((n) => n.id !== id);
    setPersonalNotes(nextNotes);
    try {
      localStorage.setItem(PERSONAL_NOTES_STORAGE_KEY, JSON.stringify(nextNotes));
    } catch {}
  };

  const handleShareReflection = async (reflection: SacredReflection) => {
    sacredHaptics.lightTap();
    const text =
      `🙏 साहेब बंदगी साहेब! 🙏\n\n` +
      `🌸 ${reflection.authorName} (${reflection.date}):\n\n` +
      `"${reflection.text[language] || reflection.text.hi}"\n\n` +
      (reflection.quoteVani
        ? `📜 पावन वाणी / समाधान:\n"${reflection.quoteVani[language] || reflection.quoteVani.hi}"\n\n`
        : '') +
      `📱 'साहेब वर्ल्ड • Saheb World' ऐप से साभार\nhttps://saheb-world-satguru-kabir-swadhyay.vercel.app/`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'साहेब वर्ल्ड • पावन सत्संग विचार',
          text,
        });
        setShareNotice(
          language === 'pb'
            ? '✓ ਵਿਚਾਰ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ'
            : language === 'en'
            ? '✓ Reflection shared'
            : '✓ विचार साझा किया गया'
        );
      } else {
        await navigator.clipboard.writeText(text);
        setShareNotice(
          language === 'pb'
            ? '✓ ਵਿਚਾਰ ਕਾਪੀ ਹੋਇਆ! ਵਟਸਐਪ ਤੇ ਸਾਂਝਾ ਕਰੋ'
            : language === 'en'
            ? '✓ Copied to clipboard! Share on WhatsApp'
            : '✓ विचार कॉपी हो गया! इसे WhatsApp पर साझा करें'
        );
      }
    } catch {
      try {
        await navigator.clipboard.writeText(text);
        setShareNotice(
          language === 'pb'
            ? '✓ ਵਿਚਾਰ ਕਾਪੀ ਹੋਇਆ'
            : language === 'en'
            ? '✓ Copied to clipboard'
            : '✓ विचार कॉपी हो गया'
        );
      } catch {}
    }
    setTimeout(() => setShareNotice(null), 3000);
  };

  const filteredReflections =
    activeCategory === 'all'
      ? allReflections
      : allReflections.filter((r) => r.category === activeCategory);

  const notebookNoticeText =
    language === 'pb'
      ? '🪷 ਇਹ ਆਫ਼ਲਾਈਨ ਨਿੱਜੀ ਸਤਿਸੰਗ ਨੋਟਬੁੱਕ ਅਤੇ ਪੰਥਕ ਜਿਗਿਆਸਾ-ਸਮਾਧਾਨ ਮੰਚ ਹੈ (ਤੁਹਾਡੇ ਵਿਚਾਰ ਤੁਹਾਡੇ ਡਿਵਾਈਸ ਤੇ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੇ ਹਨ)।'
      : language === 'en'
      ? '🪷 This is an offline personal Satsang notebook & Panthic Q&A forum (your reflections and notes remain safely stored on your device).'
      : '🪷 यह ऑफ़लाइन व्यक्तिगत सत्संग नोटबुक एवं पंथिक जिज्ञासा-समाधान मंच है (आपके विचार और सत्संग नोट्स पूर्णतः आपके डिवाइस पर सुरक्षित रहते हैं)।';

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-20 relative">
      {/* Offline Spiritual Notebook & Panthic Q&A Notice Banner (Top of Screen) */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: isDarkMode ? 'rgba(217, 119, 6, 0.14)' : '#FFFBEB',
          borderColor: '#D97706',
          color: isDarkMode ? '#FDE68A' : '#78350F',
        }}
        className="p-3.5 sm:p-4 rounded-2xl border-2 shadow-sm flex items-start gap-3"
      >
        <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm font-serif font-bold leading-relaxed">
          {notebookNoticeText}
        </p>
      </motion.div>

      {/* Navigation & Header Status + Add Note CTA */}
      <div className="flex flex-wrap items-center justify-between gap-2 py-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
            {language === 'hi'
              ? 'संत-मिलनी — साधना मंच (सत्संग संवाद)'
              : language === 'pb'
              ? 'ਸੰਤ-ਮਿਲਨੀ — ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਸੰਵਾਦ)'
              : 'Sant-Milani — Sadhana Forum'}
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            setIsComposerOpen((v) => !v);
          }}
          style={{
            backgroundColor: isComposerOpen ? theme.cardBg : theme.buttonPrimaryBg,
            color: isComposerOpen ? theme.textPrimary : theme.buttonPrimaryText,
            borderColor: theme.buttonPrimaryBg,
          }}
          className="px-3.5 py-2 rounded-xl border text-xs font-black font-serif flex items-center gap-1.5 shadow-sm hover:opacity-95 active:scale-95 transition cursor-pointer"
        >
          {isComposerOpen ? <X className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
          <span>
            {isComposerOpen
              ? language === 'pb'
                ? 'ਬੰਦ ਕਰੋ'
                : language === 'en'
                ? 'Close'
                : 'बंद करें'
              : language === 'pb'
              ? 'ਨਵਾਂ ਸਤਿਸੰਗ ਨੋਟ / ਜਿਗਿਆਸਾ ਲਿਖੋ'
              : language === 'en'
              ? 'Add Satsang Note / Q&A'
              : 'नया सत्संग नोट / जिज्ञासा लिखें'}
          </span>
        </button>
      </div>

      {/* Offline Personal Satsang Note / Panthic Q&A Composer */}
      <AnimatePresence>
        {isComposerOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSavePersonalNote}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.accentGold,
            }}
            className="p-4 sm:p-5 rounded-3xl border-2 shadow-md space-y-3 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-black font-serif" style={{ color: theme.sacredMaroon }}>
                {language === 'pb'
                  ? '📝 ਨਿੱਜੀ ਸਤਿਸੰਗ ਨੋਟਬੁੱਕ ਤੇ ਪੰਥਕ ਜਿਗਿਆਸਾ'
                  : language === 'en'
                  ? '📝 Personal Offline Satsang Notebook & Q&A'
                  : '📝 व्यक्तिगत ऑफ़लाइन सत्संग नोटबुक एवं जिज्ञासा-समाधान'}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                {language === 'pb' ? 'ਆਫ਼ਲਾਈਨ ਸੇਵ' : language === 'en' ? 'Saved Offline' : 'डिवाइस पर सुरक्षित'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={noteAuthor}
                onChange={(e) => setNoteAuthor(e.target.value)}
                placeholder={
                  language === 'pb'
                    ? 'ਸਾਧਕ ਦਾ ਨਾਮ / ਵਿਸ਼ਾ (ਵਿਕਲਪਿਕ)'
                    : language === 'en'
                    ? 'Seeker name / title (optional)'
                    : 'साधक का नाम / विषय (वैकल्पिक)'
                }
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
                className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500"
              />

              <select
                value={noteCategory}
                onChange={(e) => setNoteCategory(e.target.value as ReflectionCategory)}
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
                className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500 font-serif font-bold"
              >
                <option value="jigyasa">
                  {language === 'pb' ? 'ਪੰਥਕ ਜਿਗਿਆਸਾ-ਸਮਾਧਾਨ' : language === 'en' ? 'Panthic Q&A' : 'पंथिक जिज्ञासा-समाधान'}
                </option>
                <option value="sumiran">
                  {language === 'pb' ? 'ਸਿਮਰਨ ਮਹਿਮਾ' : language === 'en' ? 'Sumiran' : 'सुमिरन महिमा'}
                </option>
                <option value="sadhana">
                  {language === 'pb' ? 'ਸਾਧਨਾ ਬੋਧ' : language === 'en' ? 'Sadhana' : 'साधना बोध'}
                </option>
                <option value="philosophy">
                  {language === 'pb' ? 'ਕਬੀਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Philosophy' : 'कबीर दर्शन'}
                </option>
                <option value="compassion">
                  {language === 'pb' ? 'ਪ੍ਰੇਮ ਤੇ ਦਇਆ' : language === 'en' ? 'Compassion' : 'प्रेम व दया'}
                </option>
              </select>
            </div>

            <textarea
              required
              rows={3}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder={
                language === 'pb'
                  ? 'ਆਪਣਾ ਸਤਿਸੰਗ ਵਿਚਾਰ, ਅਨੁਭਵ ਜਾਂ ਪੰਥਕ ਜਿਗਿਆਸਾ-ਪ੍ਰਸ਼ਨ ਇੱਥੇ ਲਿਖੋ...'
                  : language === 'en'
                  ? 'Write your Satsang reflection, insight, or Panthic Q&A note here...'
                  : 'अपने सत्संग विचार, अनुभव या पंथिक जिज्ञासा व समाधान यहाँ लिखें...'
              }
              style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
              className="w-full p-3.5 rounded-2xl border text-xs sm:text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500 leading-relaxed"
            />

            <textarea
              rows={2}
              value={noteQuote}
              onChange={(e) => setNoteQuote(e.target.value)}
              placeholder={
                language === 'pb'
                  ? 'ਸੰਬੰਧਿਤ ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਾਣੀ / ਉੱਤਰ (ਵਿਕਲਪਿਕ)...'
                  : language === 'en'
                  ? 'Related Satguru Kabir Saheb Bani / Answer note (optional)...'
                  : 'संबद्ध सतगुरु कबीर वाणी / समाधान उत्तर (वैकल्पिक)...'
              }
              style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
              className="w-full p-3 rounded-2xl border text-xs sm:text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500 leading-relaxed"
            />

            <div className="flex justify-end gap-2">
              <button
                type="submit"
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-black font-serif flex items-center gap-1.5 shadow-md hover:opacity-95 active:scale-95 transition cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>
                  {language === 'pb'
                    ? 'ਡਿਵਾਈਸ ਤੇ ਸੁਰੱਖਿਅਤ ਕਰੋ'
                    : language === 'en'
                    ? 'Save Offline to Device'
                    : 'डिवाइस पर सुरक्षित करें'}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

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
            ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਸਿੱਖਿਆ, ਸ਼ੁੱਧ ਨਾਮ-ਸਿਮਰਨ ਅਤੇ ਸੱਚੀ ਸਾਧਨਾ ਨਾਲ ਜੁੜੇ ਪ੍ਰਮਾਣਿਤ ਅੰਮ੍ਰਿਤ ਵਿਚਾਰ।'
            : language === 'en'
            ? 'Verified spiritual reflections and divine insights anchored in Satguru Kabir Saheb’s timeless teachings.'
            : 'सतगुरु कबीर साहेब की पावन शिक्षा, शुद्ध नाम-सुमिरन एवं सच्ची साधना से जुड़े प्रामाणिक अमृत विचार।'}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
        {[
          { id: 'all', label: language === 'pb' ? 'ਸਾਰੇ ਵਿਚਾਰ' : language === 'en' ? 'All Reflections' : 'सर्व विचार' },
          { id: 'jigyasa', label: language === 'pb' ? 'ਜਿਗਿਆਸਾ-ਸਮਾਧਾਨ' : language === 'en' ? 'Panthic Q&A' : 'जिज्ञासा-समाधान' },
          { id: 'sumiran', label: language === 'pb' ? 'ਸਿਮਰਨ ਮਹਿਮਾ' : language === 'en' ? 'Sumiran' : 'सुमिरन महिमा' },
          { id: 'sadhana', label: language === 'pb' ? 'ਸਾਧਨਾ ਬੋਧ' : language === 'en' ? 'Sadhana' : 'साधना बोध' },
          { id: 'philosophy', label: language === 'pb' ? 'ਕਬੀਰ ਦਰਸ਼ਨ' : language === 'en' ? 'Philosophy' : 'कबीर दर्शन' },
          { id: 'compassion', label: language === 'pb' ? 'ਪ੍ਰੇਮ ਤੇ ਦਇਆ' : language === 'en' ? 'Compassion' : 'प्रेम व दया' },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveCategory(cat.id as 'all' | ReflectionCategory);
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
            const currentLikes = likeCounts[item.id] ?? item.initialLikes;
            const isPersonal = item.source === 'personal';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: Math.min(idx * 0.04, 0.25) }}
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden backdrop-blur-md select-text"
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
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <UserCircle className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-black font-serif truncate" style={{ color: theme.textPrimary }}>
                          {item.authorName}
                        </span>
                        <span title="प्रामाणिक सत्संगी">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </span>
                      </div>
                      <span className="text-[0.625rem] font-bold text-amber-700 dark:text-amber-400 font-serif block truncate">
                        {item.verifiedTitle[language] || item.verifiedTitle.hi} • {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[0.625rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                      {isPersonal
                        ? language === 'pb'
                          ? 'ਨਿੱਜੀ ਨੋਟ'
                          : language === 'en'
                          ? 'Personal'
                          : 'व्यक्तिगत नोट'
                        : language === 'pb'
                        ? 'ਪ੍ਰਮਾਣਿਤ'
                        : language === 'en'
                        ? 'Verified'
                        : 'प्रामाणिक'}
                    </span>
                    {isPersonal && (
                      <button
                        type="button"
                        onClick={() => handleDeletePersonalNote(item.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-500/10 transition cursor-pointer"
                        title={language === 'pb' ? 'ਹਟਾਓ' : language === 'en' ? 'Delete note' : 'नोट हटाएं'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Reflection Body Text */}
                <p className="text-sm sm:text-base font-serif leading-relaxed whitespace-pre-line" style={{ color: theme.textPrimary }}>
                  {item.text[language] || item.text.hi}
                </p>

                {/* Associated Sacred Verse / Resolution */}
                {item.quoteVani && (
                  <div
                    style={{
                      backgroundColor: theme.mode === 'mystic_dark' ? '#140F0A' : theme.stepActiveBg,
                      borderColor: theme.accentGold,
                    }}
                    className="p-3.5 rounded-2xl border-l-4 border shadow-2xs space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-[0.6875rem] font-bold text-amber-800 dark:text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {language === 'pb'
                          ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਪਾਵਨ ਬਾਣੀ'
                          : language === 'en'
                          ? 'Satguru Kabir Sacred Bani'
                          : 'सतगुरु कबीर पावन वाणी'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif font-bold italic whitespace-pre-line" style={{ color: theme.sacredMaroon }}>
                      {item.quoteVani[language] || item.quoteVani.hi}
                    </p>
                  </div>
                )}

                {/* Footer Actions (Like & Share) */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-600/15">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleToggleLike(item.id, item.initialLikes)}
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
                      type="button"
                      onClick={() => handleShareReflection(item)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer text-amber-700 dark:text-amber-300"
                      title={language === 'pb' ? 'ਵਟਸਐਪ ਤੇ ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share' : 'व्हाट्सएप पर शेयर करें'}
                    >
                      <div className="p-1.5 rounded-full hover:bg-amber-500/10">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <span className="font-serif hidden sm:inline">
                        {language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share' : 'शेयर'}
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-[0.625rem] text-emerald-700 dark:text-emerald-400 font-serif font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>
                      {language === 'pb' ? 'ਆਫ਼ਲਾਈਨ ਸੁਰੱਖਿਅਤ' : language === 'en' ? 'Offline Ready' : '१००% ऑफ़लाइन सुरक्षित'}
                    </span>
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
