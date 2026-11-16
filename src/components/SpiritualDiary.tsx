import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Bookmark, 
  Trash2, 
  Plus, 
  Download, 
  Calendar, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  X, 
  RotateCw, 
  FileText, 
  Mic, 
  MicOff, 
  Copy, 
  CheckCircle2, 
  Share2, 
  Search, 
  Grid, 
  List, 
  Tag, 
  Filter,
  Heart,
  Flame,
  Feather,
  Smile,
  Compass,
  Award,
  Sun,
  Flower2,
  Upload,
  BookOpen,
  Volume2,
  VolumeX,
  Quote
} from 'lucide-react';
import { DiaryEntry, GratitudeLogEntry, SiddhantNote, Language, SACRED_BRANDING } from '../types';
import { speechReciter } from '../services/audioDhun';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useVoiceInput } from '../services/speechRecognition';
import { sacredHaptics } from '../services/haptics';
import { FlowerBloomAnimation } from './FlowerBloomAnimation';
import { purifyAndAnalyzeVaniOffline } from '../services/offlineVaniEngine';

interface SpiritualDiaryProps {
  language: Language;
  onSelectSakhiNumber?: (num: number) => void;
  onClose?: () => void;
  initialText?: string;
  initialSakhiNumber?: number;
}

interface SpiritualMood {
  id: string;
  icon: string;
  label: { hi: string; pb: string; en: string };
  color: string;
}

const SPIRITUAL_MOODS: SpiritualMood[] = [
  { id: 'peaceful', icon: '🧘', label: { hi: 'शांत व एकाग्र', pb: 'ਸ਼ਾਂਤ ਤੇ ਇਕਾਗਰ', en: 'Peaceful' }, color: '#10B981' },
  { id: 'surrendered', icon: '🙇', label: { hi: 'गुरु शरणागत', pb: 'ਗੁਰੂ ਸ਼ਰਣਾਗਤ', en: 'Surrendered' }, color: '#F59E0B' },
  { id: 'detached', icon: '🍃', label: { hi: 'वैराग्य व पारख', pb: 'ਵੈਰਾਗ ਤੇ ਪਰਖ', en: 'Detached' }, color: '#8B5CF6' },
  { id: 'seeker', icon: '🔍', label: { hi: 'जिज्ञासु व खोजी', pb: 'ਜਿਗਿਆਸੂ ਤੇ ਖੋਜੀ', en: 'Seeker' }, color: '#3B82F6' },
  { id: 'blissful', icon: '✨', label: { hi: 'परमानंद', pb: 'ਪਰਮਾਨੰਦ', en: 'Blissful' }, color: '#EC4899' },
  { id: 'introspective', icon: '🕊️', label: { hi: 'आत्म-मंथन', pb: 'ਆਤਮ-ਮੰਥਨ', en: 'Introspective' }, color: '#14B8A6' },
];

const DAILY_PROMPTS = [
  {
    hi: 'आज मैंने किस विकार (क्रोध, अहंकार, लोभ) पर संयम रखा?',
    pb: 'ਅੱਜ ਮੈਂ ਕਿਹੜੇ ਵਿਕਾਰ (ਕ੍ਰੋਧ, ਹਉਮੈ, ਲੋਭ) ਤੇ ਸੰਜਮ ਰੱਖਿਆ?',
    en: 'Which egoic reaction or temptation did I mindfully overcome today?'
  },
  {
    hi: 'आज की साखी से मेरे दैनिक आचरण में क्या परिवर्तन आया?',
    pb: 'ਅੱਜ ਦੀ ਸਾਖੀ ਤੋਂ ਮੇਰੇ ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ ਵਿੱਚ ਕੀ ਤਬਦੀਲੀ ਆਈ?',
    en: 'How did today’s Sakhi transform my actions or thoughts?'
  },
  {
    hi: 'सतगुरु एवं प्रकृति के प्रति आज मेरी क्या हार्दिक कृतज्ञता है?',
    pb: 'ਸਤਿਗੁਰੂ ਅਤੇ ਕੁਦਰਤ ਪ੍ਰਤੀ ਅੱਜ ਮੇਰੀ ਕੀ ਸ਼ੁਕਰਗੁਜ਼ਾਰੀ ਹੈ?',
    en: 'What deep gratitude do I hold for Satguru and life today?'
  },
  {
    hi: 'आज श्वास-सिमरन और सत्यनाम ध्यान में क्या अनुभव हुआ?',
    pb: 'ਅੱਜ ਸਵਾਸ-ਸਿਮਰਨ ਅਤੇ ਸਤਯਨਾਮ ਧਿਆਨ ਵਿੱਚ ਕੀ ਅਨੁਭਵ ਹੋਇਆ?',
    en: 'What peace did I encounter during Naam Sumiran and breath meditation?'
  }
];

const GRATITUDE_SUGGESTIONS = [
  {
    field1: { hi: 'सतगुरु कृपा व सत्यनाम का पावन सान्निध्य', pb: 'ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਪਾਵਨ ਸਹਾਰਾ', en: 'Satguru’s divine grace and holy wisdom' },
    field2: { hi: 'श्वासों की अनमोल पूँजी व उत्तम स्वास्थ्य', pb: 'ਸਵਾਸਾਂ ਦੀ ਅਨਮੋਲ ਪੂੰਜੀ ਤੇ ਚੰਗੀ ਸਿਹਤ', en: 'The priceless gift of breath, health, and vitality' },
    field3: { hi: 'शांतिमय सत्संग, परिवार व प्रकृति का सौंदर्य', pb: 'ਸ਼ਾਂਤਮਈ ਸਤਿਸੰਗ, ਪਰਿਵਾਰ ਤੇ ਕੁਦਰਤ ਦੀ ਸੁੰਦਰਤਾ', en: 'Peaceful satsang, family love, and nature’s harmony' }
  },
  {
    field1: { hi: 'साखी स्वाध्याय से प्राप्त अंतर्दृष्टि व विवेक', pb: 'ਸਾਖੀ ਸਵਾਧਿਆਏ ਤੋਂ ਮਿਲੀ ਅੰਦਰੂਨੀ ਸੂਝ ਤੇ ਬਿਬੇਕ', en: 'Spiritual clarity and discernment gained from holy scriptures' },
    field2: { hi: 'प्रतिदिन का शुद्ध आहार, जल व सुरक्षा', pb: 'ਰੋਜ਼ਾਨਾ ਦਾ ਸ਼ੁੱਧ ਅਹਾਰ, ਜਲ ਤੇ ਰੱਖਿਆ', en: 'Daily pure nourishment, water, and shelter' },
    field3: { hi: 'अहंकार त्यागने व क्षमा करने का मिला अवसर', pb: 'ਹਉਮੈ ਤਿਆਗਣ ਤੇ ਮਾਫ਼ ਕਰਨ ਦਾ ਮਿਲਿਆ ਮੌਕਾ', en: 'The opportunity to forgive, let go of ego, and serve others' }
  }
];

export const SpiritualDiary: React.FC<SpiritualDiaryProps> = ({
  language,
  onSelectSakhiNumber,
  onClose,
  initialText,
  initialSakhiNumber,
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];

  // Active Main Section: 'journal' (आत्म-चिंतन) vs 'gratitude_log' (त्रिविध कृतज्ञता दैनिकी) vs 'siddhant_notes' (सिद्धांत विचार)
  const [activeSection, setActiveSection] = useState<'journal' | 'gratitude_log' | 'siddhant_notes'>('journal');

  // --- SIDDHANT NOTES STATE (HIGHLIGHTED SPIRITUAL PRINCIPLES) ---
  const [siddhantNotes, setSiddhantNotes] = useState<SiddhantNote[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_siddhant_notes');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return [
      {
        id: 'siddhant-seed-1',
        sakhiNumber: 1,
        grantha: 'Sakhi Sangrah',
        categoryTitle: language === 'pb' ? 'ਗੁਰੂ ਮਹਿਮਾ' : language === 'en' ? 'Guru Mahima' : 'गुरु महिमा',
        highlightedText: 'गुरु कुम्हार शिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट। अंतर हाथ सहार दै, बाहर बाहै चोट॥',
        reflectionNote: 'गुरु का अनुशासन बाहर से कठोर प्रतीत हो सकता है, परंतु भीतर से वे शिष्य के आत्म-कल्याण के लिए निरंतर संबल प्रदान करते हैं।',
        date: new Date().toISOString(),
        color: '#F59E0B',
        tags: ['गुरु महिमा', 'समर्पण']
      }
    ];
  });

  // Siddhant Notes Form State
  const [isAddingSiddhant, setIsAddingSiddhant] = useState(false);
  const [newSiddhantText, setNewSiddhantText] = useState('');
  const [newSiddhantSakhiNum, setNewSiddhantSakhiNum] = useState<string>('');
  const [newSiddhantReflection, setNewSiddhantReflection] = useState('');
  const [playingSiddhantId, setPlayingSiddhantId] = useState<string | null>(null);

  // --- SPIRITUAL JOURNAL ENTRIES STATE ---
  const [entries, setEntries] = useState<DiaryEntry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_diary_entries');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return [
      {
        id: 'initial-seed-1',
        sakhiNumber: 1,
        date: new Date().toISOString(),
        notes: 'गुरु कुम्हार शिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट। आज से अपने अहंकार को त्यागकर गुरु आज्ञा में चलने का संकल्प लिया।',
        categoryTag: language === 'hi' ? 'समर्पण' : language === 'pb' ? 'ਸਮਰਪਣ' : 'Surrender',
        mood: 'surrendered',
        gratitude: 'गुरु कृपा व पावन साखी का नित्य सान्निध्य मिलने हेतु अनंत आभार।',
        resolution: 'क्रोध पर संयम और सत्य वचन बोलने का नित्य अभ्यास।'
      },
    ];
  });

  // --- DEDICATED 3-POINT GRATITUDE LOG STATE ---
  const [gratitudeLogs, setGratitudeLogs] = useState<GratitudeLogEntry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_gratitude_logs');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return [
      {
        id: 'gratitude-seed-1',
        date: new Date().toISOString(),
        items: [
          language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਪਾਵਨ ਸਹਾਰਾ' : language === 'en' ? 'Satguru’s divine guidance and sacred wisdom' : 'सतगुरु कृपा व सत्यनाम का पावन सान्निध्य',
          language === 'pb' ? 'ਸਵਾਸਾਂ ਦੀ ਅਨਮੋਲ ਪੂੰਜੀ ਤੇ ਚੰਗੀ ਸਿਹਤ' : language === 'en' ? 'Priceless breath, life energy, and good health' : 'श्वासों की अनमोल पूँजी व उत्तम स्वास्थ्य',
          language === 'pb' ? 'ਸ਼ਾਂਤਮਈ ਸਤਿਸੰਗ, ਪਰਿਵਾਰ ਤੇ ਕੁਦਰਤ ਦੀ ਸੁੰਦਰਤਾ' : language === 'en' ? 'Peaceful satsang, family love, and today’s blessings' : 'शांतिमय सत्संग, परिवार व आज का मंगल अनुभव'
        ],
        tags: ['कृपा', 'श्वास', 'सत्संग']
      }
    ];
  });

  // 3-Point Gratitude Input Form States
  const [gratitudeItem1, setGratitudeItem1] = useState('');
  const [gratitudeItem2, setGratitudeItem2] = useState('');
  const [gratitudeItem3, setGratitudeItem3] = useState('');
  const [isAddingGratitude, setIsAddingGratitude] = useState(false);
  const [showBloomModal, setShowBloomModal] = useState(false);
  const [bloomModalInfo, setBloomModalInfo] = useState<{ title?: string; message?: string }>({});

  // Journal form states
  const [newNote, setNewNote] = useState(initialText || '');
  const [newSakhiNum, setNewSakhiNum] = useState<string>(initialSakhiNumber ? String(initialSakhiNumber) : '');
  const [selectedTag, setSelectedTag] = useState(t.defaultCategory);
  const [selectedMood, setSelectedMood] = useState<string>('peaceful');
  const [newGratitude, setNewGratitude] = useState('');
  const [newResolution, setNewResolution] = useState('');
  const [isAdding, setIsAdding] = useState(Boolean(initialText));
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isAutoCorrecting, setIsAutoCorrecting] = useState(false);
  const [exportToast, setExportToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Gallery & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterTag, setActiveFilterTag] = useState<string>('all');
  const [activeMoodFilter, setActiveMoodFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'gallery'>('gallery');

  // If initialText changes from props
  useEffect(() => {
    if (initialText) {
      setNewNote((prev) => (prev ? `${prev}\n\n${initialText}` : initialText));
      setIsAdding(true);
      setActiveSection('journal');
      if (initialSakhiNumber) {
        setNewSakhiNum(String(initialSakhiNumber));
      }
    }
  }, [initialText, initialSakhiNumber]);

  // Web Speech API Voice Input for Reflection Note
  const {
    isListening: isListeningNote,
    interimText: interimNote,
    error: voiceErrorNote,
    toggleListening: toggleListeningNote,
  } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      if (isFinal) {
        setNewNote((prev) => {
          const trimmed = prev.trim();
          return trimmed ? `${trimmed} ${text.trim()}` : text.trim();
        });
      }
    },
    continuous: true,
  });

  // Web Speech API Voice Inputs for 3 Gratitude fields
  const {
    isListening: isListeningG1,
    toggleListening: toggleListeningG1,
  } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      if (isFinal) {
        setGratitudeItem1((prev) => (prev.trim() ? `${prev.trim()} ${text.trim()}` : text.trim()));
      }
    },
    continuous: false,
  });

  const {
    isListening: isListeningG2,
    toggleListening: toggleListeningG2,
  } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      if (isFinal) {
        setGratitudeItem2((prev) => (prev.trim() ? `${prev.trim()} ${text.trim()}` : text.trim()));
      }
    },
    continuous: false,
  });

  const {
    isListening: isListeningG3,
    toggleListening: toggleListeningG3,
  } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      if (isFinal) {
        setGratitudeItem3((prev) => (prev.trim() ? `${prev.trim()} ${text.trim()}` : text.trim()));
      }
    },
    continuous: false,
  });

  // Web Speech API Voice Input for Search
  const {
    isListening: isListeningSearch,
    toggleListening: toggleListeningSearch,
  } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      setSearchQuery(text);
      if (isFinal) {
        sacredHaptics.lightTap();
      }
    },
    continuous: false,
  });

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_diary_entries', JSON.stringify(entries));
    }
  }, [entries]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_siddhant_notes', JSON.stringify(siddhantNotes));
    }
  }, [siddhantNotes]);

  // Listen for diary & siddhant updates from SwadhyayReader or external triggers
  useEffect(() => {
    const handleDiaryUpdated = () => {
      if (typeof window !== 'undefined') {
        try {
          const saved = localStorage.getItem('sahebworld_diary_entries');
          if (saved) {
            setEntries(JSON.parse(saved));
          }
        } catch {}
      }
    };

    const handleSiddhantUpdated = () => {
      if (typeof window !== 'undefined') {
        try {
          const savedSiddhant = localStorage.getItem('sahebworld_siddhant_notes');
          if (savedSiddhant) {
            setSiddhantNotes(JSON.parse(savedSiddhant));
          }
        } catch {}
      }
    };

    window.addEventListener('sahebworld_diary_updated', handleDiaryUpdated);
    window.addEventListener('sahebworld_siddhant_notes_updated', handleSiddhantUpdated);
    return () => {
      window.removeEventListener('sahebworld_diary_updated', handleDiaryUpdated);
      window.removeEventListener('sahebworld_siddhant_notes_updated', handleSiddhantUpdated);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_gratitude_logs', JSON.stringify(gratitudeLogs));
    }
  }, [gratitudeLogs]);

  // Calculate Streak
  const streakDays = useMemo(() => {
    const allDates = [
      ...entries.map(e => new Date(e.date).toDateString()),
      ...gratitudeLogs.map(g => new Date(g.date).toDateString()),
      ...siddhantNotes.map(s => new Date(s.date).toDateString())
    ];
    if (allDates.length === 0) return 0;
    const dates = Array.from(new Set(allDates));
    return dates.length;
  }, [entries, gratitudeLogs, siddhantNotes]);

  const filteredSiddhantNotes = useMemo(() => {
    if (!searchQuery.trim()) return siddhantNotes;
    const low = searchQuery.toLowerCase();
    return siddhantNotes.filter(
      (n) =>
        n.highlightedText.toLowerCase().includes(low) ||
        (n.reflectionNote && n.reflectionNote.toLowerCase().includes(low)) ||
        (n.categoryTitle && n.categoryTitle.toLowerCase().includes(low)) ||
        String(n.sakhiNumber).includes(low)
    );
  }, [siddhantNotes, searchQuery]);

  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchesQuery = !searchQuery.trim() || 
        item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.categoryTag && item.categoryTag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.gratitude && item.gratitude.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.resolution && item.resolution.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.sakhiNumber && String(item.sakhiNumber).includes(searchQuery));

      const matchesTag = activeFilterTag === 'all' || item.categoryTag === activeFilterTag;
      const matchesMood = activeMoodFilter === 'all' || item.mood === activeMoodFilter;

      return matchesQuery && matchesTag && matchesMood;
    });
  }, [entries, searchQuery, activeFilterTag, activeMoodFilter]);

  const filteredGratitudeLogs = useMemo(() => {
    if (!searchQuery.trim()) return gratitudeLogs;
    const low = searchQuery.toLowerCase();
    return gratitudeLogs.filter(g => 
      g.items.some(it => it.toLowerCase().includes(low))
    );
  }, [gratitudeLogs, searchQuery]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setExportToast({ message, type });
    setTimeout(() => {
      setExportToast(null);
    }, 4000);
  };

  const handleAddSiddhantNote = () => {
    if (!newSiddhantText.trim()) return;
    sacredHaptics.mediumTap();

    const sakhiNum = newSiddhantSakhiNum ? parseInt(newSiddhantSakhiNum, 10) : 1;
    const newNoteObj: SiddhantNote = {
      id: 'siddhant-' + Date.now(),
      sakhiNumber: isNaN(sakhiNum) ? 1 : sakhiNum,
      categoryTitle: language === 'pb' ? 'ਸਿਧਾਂਤ ਵਿਚਾਰ' : language === 'en' ? 'Siddhant Reflection' : 'सिद्धांत विचार',
      highlightedText: newSiddhantText.trim(),
      reflectionNote: newSiddhantReflection.trim() || undefined,
      date: new Date().toISOString(),
      color: '#F59E0B',
      tags: ['सिद्धांत', 'सत्यनाम']
    };

    const updated = [newNoteObj, ...siddhantNotes];
    setSiddhantNotes(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_siddhant_notes', JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('sahebworld_siddhant_notes_updated'));
    }

    setNewSiddhantText('');
    setNewSiddhantSakhiNum('');
    setNewSiddhantReflection('');
    setIsAddingSiddhant(false);
    sacredHaptics.successVibration();

    showToast(
      language === 'pb'
        ? '✓ ਸਿਧਾਂਤ ਨੋਟ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਗਿਆ!'
        : language === 'en'
        ? '✓ Siddhant Note saved successfully to Spiritual Diary!'
        : '✓ सिद्धांत विचार सफलतापूर्वक सुरक्षित किया गया!',
      'success'
    );
  };

  const handleDeleteSiddhantNote = (id: string) => {
    sacredHaptics.lightTap();
    const updated = siddhantNotes.filter(n => n.id !== id);
    setSiddhantNotes(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_siddhant_notes', JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('sahebworld_siddhant_notes_updated'));
    }
    showToast(
      language === 'pb' ? 'ਸਿਧਾਂਤ ਨੋਟ ਹਟਾ ਦਿੱਤਾ ਗਿਆ।' : language === 'en' ? 'Siddhant Note deleted.' : 'सिद्धांत विचार हटा दिया गया।',
      'info'
    );
  };

  const handlePlaySiddhantQuote = (note: SiddhantNote) => {
    sacredHaptics.lightTap();
    if (playingSiddhantId === note.id) {
      speechReciter.stop();
      setPlayingSiddhantId(null);
      return;
    }

    speechReciter.stop();
    setPlayingSiddhantId(note.id);
    const textToRead = `${note.highlightedText}. ${note.reflectionNote || ''}`;
    speechReciter.speak(
      textToRead,
      language,
      () => setPlayingSiddhantId(null),
      () => setPlayingSiddhantId(null)
    );
  };

  const handleCopySiddhantNote = async (note: SiddhantNote) => {
    sacredHaptics.lightTap();
    const text = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `✨ ${language === 'pb' ? 'ਸਿਧਾਂਤ ਸੂਤਰ' : language === 'en' ? 'Siddhant Reflection' : 'पावन सिद्धांत विचार'} (साखी #${note.sakhiNumber})\n\n` +
      `"${note.highlightedText}"\n` +
      `${note.reflectionNote ? `\n💡 आत्म-चिंतन: ${note.reflectionNote}\n` : ''}` +
      `\n📅 ${new Date(note.date).toLocaleDateString()}\n` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(note.id);
      setTimeout(() => setCopiedId(null), 2500);
      showToast(
        language === 'pb' ? '✓ ਸਿਧਾਂਤ ਨੋਟ ਕਲਿੱਪਬੋਰਡ ਵਿੱਚ ਕਾਪੀ ਹੋ ਗਿਆ!' :
        language === 'en' ? '✓ Siddhant Note copied to clipboard!' :
        '✓ सिद्धांत विचार क्लिपबोर्ड पर कॉपी हो गया!',
        'success'
      );
    } catch {}
  };

  const handleShareSiddhantNote = async (note: SiddhantNote) => {
    sacredHaptics.lightTap();
    const text = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `✨ ${language === 'pb' ? 'ਸਿਧਾਂਤ ਸੂਤਰ' : language === 'en' ? 'Siddhant Reflection' : 'पावन सिद्धांत विचार'} (साखी #${note.sakhiNumber})\n\n` +
      `"${note.highlightedText}"\n` +
      `${note.reflectionNote ? `\n💡 आत्म-चिंतन: ${note.reflectionNote}\n` : ''}` +
      `\n📅 ${new Date(note.date).toLocaleDateString()}\n` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `साखी #${note.sakhiNumber} सिद्धांत विचार`,
          text: text,
        });
        sacredHaptics.successVibration();
        return;
      } catch (err) {}
    }

    handleCopySiddhantNote(note);
  };

  const handleAddEntry = () => {
    if (!newNote.trim()) return;

    sacredHaptics.mediumTap();

    const newEntry: DiaryEntry = {
      id: 'diary-' + Date.now(),
      sakhiNumber: newSakhiNum ? parseInt(newSakhiNum, 10) : undefined,
      date: new Date().toISOString(),
      notes: newNote.trim(),
      categoryTag: selectedTag,
      mood: selectedMood,
      gratitude: newGratitude.trim() || undefined,
      resolution: newResolution.trim() || undefined,
    };

    setEntries([newEntry, ...entries]);
    setNewNote('');
    setNewGratitude('');
    setNewResolution('');
    setNewSakhiNum('');
    setIsAdding(false);
    sacredHaptics.successVibration();

    showToast(
      language === 'pb'
        ? '✓ ਆਤਮਿਕ ਜਰਨਲ ਪ੍ਰਵਿਸ਼ਟੀ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕੀਤੀ ਗਈ!'
        : language === 'en'
        ? '✓ Spiritual Journal entry saved successfully!'
        : '✓ आध्यात्मिक जर्नल प्रविष्टि सफलतापूर्वक सुरक्षित की गई!',
      'success'
    );
  };

  const handleSave3PointGratitude = () => {
    const item1 = gratitudeItem1.trim() || (language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਤੇ ਸਤਯਨਾਮ ਸਹਾਰਾ' : 'सतगुरु कृपा व सत्यनाम का सान्निध्य');
    const item2 = gratitudeItem2.trim() || (language === 'pb' ? 'ਸਵਾਸਾਂ ਦੀ ਅਨਮੋਲ ਪੂੰਜੀ ਤੇ ਜੀਵਨ' : 'श्वासों की अनमोल पूँजी व जीवन');
    const item3 = gratitudeItem3.trim() || (language === 'pb' ? 'ਸਤਿਸੰਗ ਤੇ ਅੱਜ ਦਾ ਮੰਗਲ ਅਨੁਭਵ' : 'सत्संग, सद्विचार व आज का मंगल अनुभव');

    const newLog: GratitudeLogEntry = {
      id: 'gratitude-' + Date.now(),
      date: new Date().toISOString(),
      items: [item1, item2, item3],
      tags: ['शुकराना', 'कृपा', 'आनंद']
    };

    setGratitudeLogs([newLog, ...gratitudeLogs]);

    // Also link as a diary entry
    const newDiaryFromGratitude: DiaryEntry = {
      id: 'diary-grat-' + Date.now(),
      date: new Date().toISOString(),
      notes: `[🌸 त्रिविध शुकराना]\n1. ${item1}\n2. ${item2}\n3. ${item3}`,
      categoryTag: language === 'hi' ? 'कृतज्ञता' : language === 'pb' ? 'ਸ਼ੁਕਰਾਨਾ' : 'Gratitude',
      mood: 'blissful',
      gratitude3: [item1, item2, item3],
    };
    setEntries([newDiaryFromGratitude, ...entries]);

    setGratitudeItem1('');
    setGratitudeItem2('');
    setGratitudeItem3('');
    setIsAddingGratitude(false);

    // Trigger Flower Bloom Animation & Haptics!
    sacredHaptics.petalShower();
    setBloomModalInfo({
      title: language === 'pb' ? 'ਸ਼ੁਕਰਾਨਾ ਪ੍ਰਵਾਨ ਹੋਇਆ • ਪਾਵਨ ਅਸੀਸ' : language === 'en' ? 'Gratitude Blossom • Divine Blessing' : 'त्रिविध कृतज्ञता समर्पण • पावन आशीष',
      message: language === 'pb'
        ? 'ਤੁਹਾਡਾ ਸ਼ੁਕਰਾਨਾ ਸਤਿਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਿਤ ਹੋਇਆ। ਧੰਨਵਾਦੀ ਹਿਰਦੇ ਵਿੱਚ ਹਮੇਸ਼ਾ ਸੁੱਖ ਤੇ ਸ਼ਾਂਤੀ ਖਿੜਦੀ ਹੈ।'
        : language === 'en'
        ? 'Your three offerings of gratitude have blossomed. In a thankful heart, divine peace ever abides.'
        : 'आपका त्रिविध शुकराना सतगुरु चरणों में समर्पित हुआ। कृतज्ञ हृदय में ही परमात्मा व अमर शांति का नित्य वास होता है।'
    });
    setShowBloomModal(true);
  };

  const handleApplyGratitudeSuggestion = (idx: number) => {
    sacredHaptics.lightTap();
    const sugg = GRATITUDE_SUGGESTIONS[idx % GRATITUDE_SUGGESTIONS.length];
    setGratitudeItem1(sugg.field1[language] || sugg.field1.hi);
    setGratitudeItem2(sugg.field2[language] || sugg.field2.hi);
    setGratitudeItem3(sugg.field3[language] || sugg.field3.hi);
  };

  const handleDeleteEntry = (id: string) => {
    sacredHaptics.lightTap();
    setEntries(entries.filter((e) => e.id !== id));
  };

  const handleDeleteGratitudeLog = (id: string) => {
    sacredHaptics.lightTap();
    setGratitudeLogs(gratitudeLogs.filter(g => g.id !== id));
  };

  const handleCopySingleEntry = async (item: DiaryEntry) => {
    sacredHaptics.lightTap();
    const moodObj = SPIRITUAL_MOODS.find(m => m.id === item.mood);
    const formatted = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `📅 ${new Date(item.date).toLocaleDateString()}\n` +
      `${moodObj ? `🧘 भाव: ${moodObj.icon} ${moodObj.label[language] || moodObj.label.hi}\n` : ''}` +
      `${item.sakhiNumber ? `📜 साखी #${item.sakhiNumber}\n` : ''}` +
      `🏷️ श्रेणी: ${item.categoryTag || t.defaultCategory}\n\n` +
      `✍️ आत्म-चिंतन:\n${item.notes}\n\n` +
      `${item.gratitude ? `🙏 कृतज्ञता:\n${item.gratitude}\n\n` : ''}` +
      `${item.resolution ? `🌱 नियम व संकल्प:\n${item.resolution}\n\n` : ''}` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedId(item.id);
      sacredHaptics.successVibration();
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const handleCopyGratitudeLog = async (log: GratitudeLogEntry) => {
    sacredHaptics.lightTap();
    const formatted = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `🌸 ${language === 'pb' ? 'ਤ੍ਰੈ-ਵਿਧ ਸ਼ੁਕਰਾਨਾ' : language === 'en' ? '3-Point Gratitude Log' : 'त्रिविध कृतज्ञता दैनिकी'}\n` +
      `📅 ${new Date(log.date).toLocaleDateString()}\n\n` +
      `1️⃣ सतगुरु कृपा: ${log.items[0]}\n` +
      `2️⃣ श्वास व जीवन: ${log.items[1]}\n` +
      `3️⃣ सत्संग व अनुभव: ${log.items[2]}\n\n` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedId(log.id);
      sacredHaptics.successVibration();
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const handleShareEntry = async (item: DiaryEntry) => {
    sacredHaptics.lightTap();
    const moodObj = SPIRITUAL_MOODS.find(m => m.id === item.mood);
    const formatted = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `📅 ${new Date(item.date).toLocaleDateString()}\n` +
      `${moodObj ? `🧘 भाव: ${moodObj.icon} ${moodObj.label[language] || moodObj.label.hi}\n` : ''}` +
      `${item.sakhiNumber ? `📜 साखी #${item.sakhiNumber}\n` : ''}` +
      `🏷️ श्रेणी: ${item.categoryTag || t.defaultCategory}\n\n` +
      `✍️ आत्म-चिंतन:\n${item.notes}\n\n` +
      `${item.gratitude ? `🙏 कृतज्ञता:\n${item.gratitude}\n\n` : ''}` +
      `${item.resolution ? `🌱 नियम व संकल्प:\n${item.resolution}\n\n` : ''}` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'pb' ? 'ਸਾਧਕ ਦੈਨਿਕੀ ਪ੍ਰਵਿਸ਼ਟੀ' : language === 'en' ? 'Spiritual Journal Entry' : 'साधक दैनिकी प्रविष्टि',
          text: formatted,
        });
        sacredHaptics.successVibration();
        return;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {}
      }
    }

    try {
      await navigator.clipboard.writeText(formatted);
      showToast(
        language === 'pb' ? '✓ ਨੋਟ ਕਲਿੱਪਬੋਰਡ ਵਿੱਚ ਕਾਪੀ ਹੋ ਗਿਆ!' :
        language === 'en' ? '✓ Note copied to clipboard for sharing!' :
        '✓ नोट शेयर करने के लिए क्लिपबोर्ड पर कॉपी हो गया!',
        'success'
      );
    } catch {}
  };

  const handleShareGratitudeLog = async (log: GratitudeLogEntry) => {
    sacredHaptics.lightTap();
    const formatted = `।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `🌸 ${language === 'pb' ? 'ਤ੍ਰੈ-ਵਿਧ ਸ਼ੁਕਰਾਨਾ' : language === 'en' ? '3-Point Gratitude Log' : 'त्रिविध कृतज्ञता दैनिकी'}\n` +
      `📅 ${new Date(log.date).toLocaleDateString()}\n\n` +
      `1️⃣ सतगुरु कृपा: ${log.items[0]}\n` +
      `2️⃣ श्वास व जीवन: ${log.items[1]}\n` +
      `3️⃣ सत्संग व अनुभव: ${log.items[2]}\n\n` +
      `।। ${SACRED_BRANDING.footer[language]} ।।`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'pb' ? 'ਸ਼ੁਕਰਾਨਾ ਪ੍ਰਵਿਸ਼ਟੀ' : language === 'en' ? 'Gratitude Log' : 'कृतज्ञता प्रविष्टि',
          text: formatted,
        });
        sacredHaptics.successVibration();
        return;
      } catch (err) {}
    }

    try {
      await navigator.clipboard.writeText(formatted);
      showToast(
        language === 'pb' ? '✓ ਸ਼ੁਕਰਾਨਾ ਕਲਿੱਪਬੋਰਡ ਵਿੱਚ ਕਾਪੀ ਹੋ ਗਿਆ!' :
        language === 'en' ? '✓ Gratitude copied for sharing!' :
        '✓ कृतज्ञता शेयर करने के लिए क्लिपबोर्ड पर कॉपी हो गया!',
        'success'
      );
    } catch {}
  };

  const handleExportDiary = () => {
    sacredHaptics.lightTap();
    if (entries.length === 0 && gratitudeLogs.length === 0) {
      showToast(
        language === 'pb' 
          ? 'ਜਰਨਲ ਵਿੱਚ ਅਜੇ ਕੋਈ ਪ੍ਰਵਿਸ਼ਟੀ ਨਹੀਂ ਹੈ।' 
          : language === 'en' 
          ? 'No journal entries available to export.' 
          : 'जर्नल में अभी कोई प्रविष्टि नहीं है।',
        'info'
      );
      return;
    }

    const formatted = entries
      .map((e, idx) => {
        const moodObj = SPIRITUAL_MOODS.find(m => m.id === e.mood);
        return `[प्रविष्टि #${idx + 1}]\n` +
          `• दिनांक: ${new Date(e.date).toLocaleString(language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US', { dateStyle: 'full', timeStyle: 'short' })}\n` +
          `${moodObj ? `• आंतरिक भाव: ${moodObj.icon} ${moodObj.label[language] || moodObj.label.hi}\n` : ''}` +
          `${e.sakhiNumber ? `• साखी संदर्भ: #${e.sakhiNumber}\n` : ''}` +
          `• श्रेणी: ${e.categoryTag || t.defaultCategory}\n` +
          `• आत्म-चिंतन:\n${e.notes}\n` +
          `${e.gratitude ? `• कृतज्ञता: ${e.gratitude}\n` : ''}` +
          `${e.resolution ? `• संकल्प: ${e.resolution}\n` : ''}`;
      })
      .join('\n------------------------------------------------------------\n\n');

    const formattedGratitude = gratitudeLogs
      .map((g, idx) => {
        return `[त्रिविध शुकराना #${idx + 1} - ${new Date(g.date).toLocaleDateString()}]\n` +
          `1. सतगुरु कृपा: ${g.items[0]}\n` +
          `2. श्वास व स्वास्थ्य: ${g.items[1]}\n` +
          `3. सत्संग व सद्विचार: ${g.items[2]}\n`;
      })
      .join('\n------------------------------------------------------------\n\n');

    const fullExport = `\uFEFF============================================================\n` +
      `               ।। ${SACRED_BRANDING.header[language]} ।।\n` +
      `      ${t.appTitle} — ${language === 'pb' ? 'ਆਤਮਿਕ ਜਰਨਲ ਤੇ ਸ਼ੁਕਰਾਨਾ' : language === 'en' ? 'Spiritual Journal & Gratitude Log' : 'आध्यात्मिक साधना जर्नल एवं कृतज्ञता'}\n` +
      `      निर्यात तिथि: ${new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US', { dateStyle: 'full' })}\n` +
      `      कुल प्रविष्टियां: ${entries.length} | कृतज्ञता लॉग्स: ${gratitudeLogs.length}\n` +
      `============================================================\n\n` +
      `--- [ १. आत्म-चिंतन नोट्स ] ---\n\n` +
      `${formatted}\n\n` +
      `--- [ २. त्रिविध कृतज्ञता दैनिकी ] ---\n\n` +
      `${formattedGratitude}\n\n` +
      `============================================================\n` +
      `               ।। ${SACRED_BRANDING.footer[language]} ।।\n` +
      `============================================================\n`;

    const blob = new Blob([fullExport], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SahebWorld_Spiritual_Journal_Backup_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    showToast(
      language === 'pb'
        ? `✓ ਆਤਮਿਕ ਜਰਨਲ ਤੇ ਸ਼ੁਕਰਾਨਾ ਬੈਕਅੱਪ ਟੈਕਸਟ ਫਾਈਲ ਡਾਊਨਲੋਡ ਹੋ ਗਈ!`
        : language === 'en'
        ? `✓ Spiritual Journal & Gratitude backup exported!`
        : `✓ आध्यात्मिक जर्नल व कृतज्ञता बैकअप फ़ाइल डाउनलोड हो गई!`,
      'success'
    );
  };

  const handleExportJson = () => {
    sacredHaptics.lightTap();
    const payload = {
      entries,
      gratitudeLogs,
      exportedAt: new Date().toISOString(),
      streakDays,
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `SahebWorld_Journal_Data_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();

    showToast(
      language === 'pb' ? '✓ JSON ਡਾਟਾ ਬੈਕਅੱਪ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ!' : language === 'en' ? '✓ JSON Data Backup Exported!' : '✓ JSON डेटा बैकअप डाउनलोड हो गया!',
      'success'
    );
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.entries && Array.isArray(json.entries)) {
          setEntries(json.entries);
          localStorage.setItem('sahebworld_diary_entries', JSON.stringify(json.entries));
        }
        if (json.gratitudeLogs && Array.isArray(json.gratitudeLogs)) {
          setGratitudeLogs(json.gratitudeLogs);
          localStorage.setItem('sahebworld_gratitude_logs', JSON.stringify(json.gratitudeLogs));
        }
        sacredHaptics.successVibration();
        showToast(
          language === 'pb' ? '✓ ਜਰਨਲ ਡਾਟਾ ਸਫਲਤਾਪੂਰਵਕ ਇੰਪੋਰਟ ਹੋ ਗਿਆ!' :
          language === 'en' ? '✓ Journal backup successfully imported!' :
          '✓ जर्नल बैकअप सफलतापूर्वक इम्पोर्ट हो गया!',
          'success'
        );
      } catch (err) {
        showToast(
          language === 'pb' ? 'ਅਵੈਧ JSON ਫਾਈਲ ਫਾਰਮੈਟ' :
          language === 'en' ? 'Invalid JSON file format' :
          'अमान्य JSON फ़ाइल प्रारूप',
          'info'
        );
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Strict Sacred Header Spelling */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2.5 px-4 text-center select-none rounded-2xl shadow-xs"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-lg sm:text-xl font-bold tracking-widest font-serif block"
        >
          {exactTop}
        </span>
      </div>

      {/* Main Journal & Gratitude Container */}
      <div
        id="spiritual-diary-container"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          color: theme.textPrimary,
        }}
        className="p-5 sm:p-7 rounded-3xl border shadow-xl space-y-6"
      >
        {/* Header with Stats & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5" style={{ borderColor: theme.cardBorder }}>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'pb' ? 'ਸਾਧਕ ਦੈਨਿਕੀ' : language === 'en' ? 'Spiritual Journal' : 'साधक दैनिकी व आत्म-चिंतन'}</span>
              </span>
              <span className="text-xs font-bold font-mono text-amber-700">
                🔥 {streakDays} {language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Days Active' : 'दिवस सक्रिय'}
              </span>
            </div>
            <h3 style={{ color: theme.sacredMaroon }} className="text-2xl sm:text-3xl font-black font-serif tracking-tight">
              {language === 'pb' ? 'ਆਤਮਿਕ ਜਰਨਲ ਤੇ ਸ਼ੁਕਰਾਨਾ' : language === 'en' ? 'Spiritual Journal & Gratitude Log' : 'आध्यात्मिक साधना जर्नल एवं कृतज्ञता'}
            </h3>
            <p className="text-xs sm:text-sm font-serif opacity-80" style={{ color: theme.textSecondary }}>
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀਆਂ ਸਾਖੀਆਂ ਦੇ ਆਧਾਰ ਤੇ ਰੋਜ਼ਾਨਾ ਆਤਮ-ਮੰਥਨ, ੩-ਵਾਰ ਸ਼ੁਕਰਾਨਾ ਤੇ ਸੰਕਲਪ ਦਰਜ ਕਰੋ।'
                : language === 'en'
                ? 'Record daily self-contemplation, 3-point gratitude log with blooming flowers, and sadhana resolutions.'
                : 'सतगुरु कबीर साहेब की साखियों पर आधारित नित्य आत्म-मंथन, त्रिविध कृतज्ञता दैनिकी व साधना संकल्प दर्ज करें।'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onClose && (
              <button
                onClick={onClose}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-xs active:scale-95"
                title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
              >
                <ArrowLeft size={14} />
                <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
              </button>
            )}

            <button
              id="export-diary-btn"
              onClick={handleExportDiary}
              title="Export Notes as Text"
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.textPrimary,
              }}
              className="px-3 py-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition hover:opacity-90 cursor-pointer shadow-2xs"
            >
              <Download className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Text</span>
            </button>

            <button
              id="export-json-btn"
              onClick={handleExportJson}
              title="Export as JSON Data File"
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition hover:opacity-90 cursor-pointer shadow-2xs"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>JSON</span>
            </button>

            <input 
              type="file" 
              ref={fileInputRef} 
              accept=".json" 
              onChange={handleImportJson} 
              className="hidden" 
            />
            <button
              id="import-json-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                fileInputRef.current?.click();
              }}
              title="Import JSON Backup File"
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition hover:opacity-90 cursor-pointer shadow-2xs"
            >
              <Upload className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਇੰਪੋਰਟ' : language === 'en' ? 'Import' : 'इम्पोर्ट'}</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Switcher: [📝 आत्म-चिंतन] vs [🌸 त्रिविध कृतज्ञता] vs [✨ सिद्धांत विचार] */}
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="p-1.5 rounded-2xl border flex items-center gap-1.5 max-w-xl shadow-xs flex-wrap sm:flex-nowrap"
        >
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveSection('journal');
            }}
            style={{
              backgroundColor: activeSection === 'journal' ? theme.sacredMaroon : 'transparent',
              color: activeSection === 'journal' ? '#FFFFFF' : theme.textPrimary,
            }}
            className="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold font-serif flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs whitespace-nowrap"
          >
            <Feather className="w-3.5 h-3.5 shrink-0" />
            <span>{language === 'pb' ? 'ਆਤਮ-ਚਿੰਤਨ' : language === 'en' ? 'Journal' : 'आत्म-चिंतन'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveSection('gratitude_log');
            }}
            style={{
              backgroundColor: activeSection === 'gratitude_log' ? theme.sacredMaroon : 'transparent',
              color: activeSection === 'gratitude_log' ? '#FFFFFF' : theme.textPrimary,
            }}
            className="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold font-serif flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs relative whitespace-nowrap"
          >
            <Flower2 className="w-3.5 h-3.5 text-pink-300 animate-pulse shrink-0" />
            <span>{language === 'pb' ? '੩-ਸ਼ੁਕਰਾਨਾ' : language === 'en' ? 'Gratitude' : 'त्रिविध शुकराना'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setActiveSection('siddhant_notes');
            }}
            style={{
              backgroundColor: activeSection === 'siddhant_notes' ? theme.sacredMaroon : 'transparent',
              color: activeSection === 'siddhant_notes' ? '#FFFFFF' : theme.textPrimary,
            }}
            className="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold font-serif flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs relative whitespace-nowrap"
          >
            <Quote className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>{language === 'pb' ? 'ਸਿਧਾਂਤ ਨੋਟਸ' : language === 'en' ? 'Siddhant Notes' : 'सिद्धांत विचार'}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold font-mono bg-amber-500/30 text-amber-200">
              {siddhantNotes.length}
            </span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: DEDICATED 3-POINT GRATITUDE LOG (त्रिविध कृतज्ञता दैनिकी) */}
        {/* ========================================================================= */}
        {activeSection === 'gratitude_log' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Top Banner with Flower Bloom Trigger CTA */}
            <div 
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.accentGold }}
              className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 relative overflow-hidden shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div 
                    style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center text-rose-600 shadow-2xs shrink-0"
                  >
                    <Flower2 className="w-6 h-6 animate-spin" style={{ animationDuration: '14s' }} />
                  </div>
                  <div>
                    <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-lg sm:text-xl">
                      {language === 'pb' ? 'ਅੱਜ ਦੀਆਂ ਤਿੰਨ ਸ਼ੁਕਰਾਨਾ ਦਾਤਾਂ (3 Things You Are Thankful For)' : language === 'en' ? 'Daily 3-Point Gratitude Log' : 'आज की तीन कृतज्ञता भेंटें (३ शुकराना)'}
                    </h4>
                    <p className="text-xs font-serif opacity-80" style={{ color: theme.textSecondary }}>
                      {language === 'pb'
                        ? 'ਸਤਿਗੁਰੂ, ਸਵਾਸ-ਸਿਹਤ ਤੇ ਅੱਜ ਦੇ ਮੰਗਲ ਅਨੁਭਵ ਲਈ ੩ ਸ਼ੁਕਰਾਨੇ ਲਿਖੋ ਅਤੇ ਖਿੜਦੇ ਫੁੱਲ ਦੀ ਅਸੀਸ ਪ੍ਰਾਪਤ ਕਰੋ।'
                        : language === 'en'
                        ? 'List 3 things you are deeply thankful for today and celebrate with an animated blooming flower.'
                        : 'सतगुरु कृपा, श्वास व जीवन के लिए ३ कृतज्ञता बिंदु लिखें और खिलते पुष्प की पावन आशीष पाएं।'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingGratitude(!isAddingGratitude)}
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer self-start sm:self-center shrink-0"
                >
                  {isAddingGratitude ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{isAddingGratitude ? (language === 'pb' ? 'ਸਮੇਟੋ' : 'समेटें') : (language === 'pb' ? '੩ ਸ਼ੁਕਰਾਨੇ ਦਰਜ ਕਰੋ' : '३ शुकराने दर्ज करें')}</span>
                </button>
              </div>

              {/* Gratitude Form */}
              {isAddingGratitude && (
                <div className="space-y-4 pt-3 border-t border-black/5 dark:border-white/5 animate-fadeIn">
                  {/* Suggestions Carousel */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-serif font-bold text-amber-700 flex items-center gap-1 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'pb' ? 'ਤਤਕਾਲ ਸੁਝਾਅ:' : 'त्वरित प्रेरणा सुझाव:'}</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleApplyGratitudeSuggestion(0)}
                        className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 text-[10px] font-bold hover:bg-amber-500/25 transition cursor-pointer"
                      >
                        {language === 'pb' ? 'ਸੁਝਾਅ ੧' : 'सुझाव १'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyGratitudeSuggestion(1)}
                        className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 text-[10px] font-bold hover:bg-amber-500/25 transition cursor-pointer"
                      >
                        {language === 'pb' ? 'ਸੁਝਾਅ ੨' : 'सुझाव २'}
                      </button>
                    </div>
                  </div>

                  {/* 1. First Gratitude Item */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">1</span>
                        <span>{language === 'pb' ? '੧. ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਤੇ ਆਤਮ-ਗਿਆਨ:' : language === 'en' ? '1. Satguru Grace & Wisdom:' : '१. सतगुरु कृपा व आध्यात्मिक ज्ञान:'}</span>
                      </label>
                      <button
                        type="button"
                        onClick={toggleListeningG1}
                        style={{ color: isListeningG1 ? '#EF4444' : theme.sacredMaroon }}
                        className="p-1 hover:scale-110 transition cursor-pointer"
                        title="Speak to dictate item 1"
                      >
                        {isListeningG1 ? <MicOff className="w-3.5 h-3.5 animate-bounce text-red-500" /> : <Mic className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={gratitudeItem1}
                      onChange={(e) => setGratitudeItem1(e.target.value)}
                      placeholder={isListeningG1 ? 'बोलें... सुन रहे हैं...' : (language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਤੇ ਸਤਯਨਾਮ ਸਹਾਰਾ...' : 'सतगुरु कृपा, सत्यनाम का ज्ञान व पावन वचनों का सान्निध्य...')}
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: isListeningG1 ? '#EF4444' : theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full p-2.5 rounded-xl border text-xs focus:outline-none font-serif shadow-2xs"
                    />
                  </div>

                  {/* 2. Second Gratitude Item */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-black">2</span>
                        <span>{language === 'pb' ? '੨. ਸਵਾਸ, ਸਿਹਤ ਤੇ ਜੀਵਨ ਊਰਜਾ:' : language === 'en' ? '2. Breath, Health & Vitality:' : '२. श्वास, स्वास्थ्य व जीवन शक्ति:'}</span>
                      </label>
                      <button
                        type="button"
                        onClick={toggleListeningG2}
                        style={{ color: isListeningG2 ? '#EF4444' : theme.sacredMaroon }}
                        className="p-1 hover:scale-110 transition cursor-pointer"
                        title="Speak to dictate item 2"
                      >
                        {isListeningG2 ? <MicOff className="w-3.5 h-3.5 animate-bounce text-red-500" /> : <Mic className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={gratitudeItem2}
                      onChange={(e) => setGratitudeItem2(e.target.value)}
                      placeholder={isListeningG2 ? 'बोलें... सुन रहे हैं...' : (language === 'pb' ? 'ਸਵਾਸਾਂ ਦੀ ਅਨਮੋਲ ਪੂੰਜੀ ਤੇ ਚੰਗੀ ਸਿਹਤ...' : 'श्वासों की अनमोल पूँजी, उत्तम स्वास्थ्य व परिवार का संबल...')}
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: isListeningG2 ? '#EF4444' : theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full p-2.5 rounded-xl border text-xs focus:outline-none font-serif shadow-2xs"
                    />
                  </div>

                  {/* 3. Third Gratitude Item */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">3</span>
                        <span>{language === 'pb' ? '੩. ਸਤਿਸੰਗ, ਨੇਕ ਕਰਮ ਤੇ ਅੱਜ ਦਾ ਮੰਗਲ ਅਨੁਭਵ:' : language === 'en' ? '3. Satsang & Daily Blessings:' : '३. सत्संग, सद्विचार व आज का मंगल अनुभव:'}</span>
                      </label>
                      <button
                        type="button"
                        onClick={toggleListeningG3}
                        style={{ color: isListeningG3 ? '#EF4444' : theme.sacredMaroon }}
                        className="p-1 hover:scale-110 transition cursor-pointer"
                        title="Speak to dictate item 3"
                      >
                        {isListeningG3 ? <MicOff className="w-3.5 h-3.5 animate-bounce text-red-500" /> : <Mic className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={gratitudeItem3}
                      onChange={(e) => setGratitudeItem3(e.target.value)}
                      placeholder={isListeningG3 ? 'बोलें... सुन रहे हैं...' : (language === 'pb' ? 'ਸ਼ਾਂਤਮਈ ਸਤਿਸੰਗ ਤੇ ਅੱਜ ਦਾ ਸੁੱਖ...' : 'शांतिमय सत्संग, दया भाव व आज आत्म-चिंतन का मिला पावन अवसर...')}
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: isListeningG3 ? '#EF4444' : theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full p-2.5 rounded-xl border text-xs focus:outline-none font-serif shadow-2xs"
                    />
                  </div>

                  {/* Submit Button with Flower Bloom Trigger */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSave3PointGratitude}
                      style={{
                        backgroundColor: theme.buttonPrimaryBg,
                        color: theme.buttonPrimaryText,
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                    >
                      <Flower2 className="w-4 h-4 text-pink-300 animate-pulse" />
                      <span>{language === 'pb' ? '🌸 ਸ਼ੁਕਰਾਨਾ ਸਮਰਪਿਤ ਕਰੋ (Flower Bloom)' : language === 'en' ? '🌸 Log 3 Gratitudes (Bloom Flower)' : '🌸 त्रिविध शुकराना समर्पित करें (पुष्प प्रफुल्लित)'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Gratitude Logs History Grid */}
            <div className="space-y-4">
              <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base flex items-center gap-2">
                <Flower2 className="w-4 h-4 text-pink-500" />
                <span>{language === 'pb' ? 'ਸ਼ੁਕਰਾਨਾ ਇਤਿਹਾਸ' : language === 'en' ? 'Gratitude Reflections History' : 'पावन कृतज्ञता इतिहास'}</span>
                <span className="text-xs font-mono font-bold text-amber-600">({filteredGratitudeLogs.length})</span>
              </h4>

              {filteredGratitudeLogs.length === 0 ? (
                <div className="p-8 text-center space-y-2 border border-dashed rounded-2xl" style={{ borderColor: theme.cardBorder }}>
                  <Flower2 className="w-8 h-8 mx-auto opacity-40 text-pink-500" />
                  <p style={{ color: theme.textSecondary }} className="text-xs font-serif">
                    {language === 'hi' ? 'अभी कोई कृतज्ञता प्रविष्टि नहीं है। ऊपर क्लिक करके आज के ३ शुकराने दर्ज करें।' : 'No gratitude logs yet. Click above to log your 3 daily gratitudes.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredGratitudeLogs.map((log) => (
                    <div
                      key={log.id}
                      style={{
                        backgroundColor: theme.bgSecondary,
                        borderColor: theme.cardBorder,
                      }}
                      className="p-5 rounded-2xl border-2 space-y-3.5 transition hover:shadow-md relative overflow-hidden flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider bg-rose-500/15 text-rose-800 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1">
                            <Flower2 className="w-3 h-3 text-rose-600" />
                            <span>{language === 'pb' ? '੩ ਸ਼ੁਕਰਾਨੇ' : language === 'en' ? '3 Gratitudes' : 'त्रिविध शुकराना'}</span>
                          </span>

                          <span style={{ color: theme.textMuted }} className="font-mono text-[10px] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(log.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US', { dateStyle: 'medium' })}</span>
                          </span>
                        </div>

                        {/* 3 Items */}
                        <div className="space-y-2 text-xs font-serif pt-1">
                          <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">1</span>
                            <span style={{ color: theme.textPrimary }}>{log.items[0]}</span>
                          </div>
                          <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">2</span>
                            <span style={{ color: theme.textPrimary }}>{log.items[1]}</span>
                          </div>
                          <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">3</span>
                            <span style={{ color: theme.textPrimary }}>{log.items[2]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="flex items-center justify-between pt-2 border-t text-[11px]" style={{ borderColor: theme.cardBorder }}>
                        <button
                          type="button"
                          onClick={() => {
                            sacredHaptics.petalShower();
                            setShowBloomModal(true);
                          }}
                          className="text-[10px] font-bold text-rose-700 dark:text-rose-300 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Flower2 className="w-3.5 h-3.5" />
                          <span>{language === 'pb' ? 'ਅਸੀਸ ਫੁੱਲ ਖਿੜਾਓ' : language === 'en' ? 'Bloom Blessing' : 'पुष्प दर्शन'}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleShareGratitudeLog(log)}
                            style={{ color: theme.textMuted }}
                            title="Share Gratitude Log"
                            className="p-1 hover:text-amber-600 transition cursor-pointer"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleCopyGratitudeLog(log)}
                            style={{ color: theme.textMuted }}
                            title="Copy Gratitude Log"
                            className="p-1 hover:text-amber-600 transition cursor-pointer"
                          >
                            {copiedId === log.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteGratitudeLog(log.id)}
                            style={{ color: theme.textMuted }}
                            title="Delete"
                            className="p-1 hover:text-red-600 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: SPIRITUAL JOURNAL REFLECTIONS & MOOD TRACKING */}
        {/* ========================================================================= */}
        {activeSection === 'journal' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Action Bar */}
            <div className="flex items-center justify-between gap-3">
              <span style={{ color: theme.sacredMaroon }} className="text-xs sm:text-sm font-black uppercase tracking-wider block font-serif">
                {language === 'pb' ? 'ਆਤਮ-ਚਿੰਤਨ ਤੇ ਸਤਿਸੰਗ ਨੋਟਸ' : language === 'en' ? 'Contemplation Notes' : 'आत्म-चिंतन एवं सत्संग विचार'}
              </span>

              <button
                id="open-add-diary-btn"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setIsAdding(!isAdding);
                }}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{isAdding ? (language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें') : (language === 'pb' ? 'ਨਵੀਂ ਪ੍ਰਵਿਸ਼ਟੀ' : language === 'en' ? 'New Journal Entry' : 'नया चिंतन लिखें')}</span>
              </button>
            </div>

            {/* Add Entry Form Card */}
            {isAdding && (
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-4 sm:p-6 rounded-2xl border-2 space-y-5 animate-fadeIn shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3" style={{ borderColor: theme.cardBorder }}>
                  <span style={{ color: theme.sacredMaroon }} className="text-xs sm:text-sm font-black uppercase tracking-wider block font-serif">
                    {language === 'pb' ? '✨ ਨਵਾਂ ਆਤਮਿਕ ਚਿੰਤਨ ਤੇ ਜਰਨਲ' : language === 'en' ? '✨ New Spiritual Journal Entry' : '✨ नया आध्यात्मिक चिंतन एवं साधक दैनिकी'}
                  </span>

                  {/* Speech-to-Text Primary Dictation Button */}
                  <button
                    type="button"
                    onClick={toggleListeningNote}
                    style={{
                      backgroundColor: isListeningNote ? '#EF4444' : theme.stepActiveBg,
                      color: isListeningNote ? '#FFFFFF' : theme.sacredMaroon,
                      borderColor: isListeningNote ? '#DC2626' : theme.accentGold,
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 ${
                      isListeningNote ? 'animate-pulse ring-2 ring-red-400' : 'hover:scale-105'
                    }`}
                    title={
                      isListeningNote
                        ? (language === 'pb' ? 'ਬੋਲਣਾ ਰੋਕੋ' : language === 'en' ? 'Stop Voice Recording' : 'बोलना रोकें')
                        : (language === 'pb' ? 'ਬੋਲ ਕੇ ਲਿਖੋ (Voice Input)' : language === 'en' ? 'Voice Input' : 'बोलकर लिखें (वॉइस इनपुट)')
                    }
                  >
                    {isListeningNote ? (
                      <>
                        <MicOff className="w-4 h-4 animate-bounce" />
                        <span>{language === 'pb' ? 'ਸੁਣ ਰਹੇ ਹਾਂ (ਬੋਲੋ)...' : language === 'en' ? 'Listening (Speak)...' : 'सुन रहे हैं (बोलें)...'}</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4 text-amber-700" />
                        <span>{language === 'pb' ? 'ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਨਾਲ ਬੋਲੋ' : language === 'en' ? 'Speak with Mic' : 'माइक से बोलकर लिखें'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Daily Prompts Quick Carousel */}
                <div className="space-y-2 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 font-serif flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'pb' ? 'ਅੱਜ ਦਾ ਪ੍ਰੇਰਣਾਦਾਇਕ ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Contemplation Prompt' : 'आज का आत्म-निरीक्षण प्रश्न'}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePromptIndex((prev) => (prev + 1) % DAILY_PROMPTS.length)}
                      className="text-[11px] font-bold text-amber-700 hover:underline cursor-pointer"
                    >
                      {language === 'pb' ? 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ ↻' : language === 'en' ? 'Next Prompt ↻' : 'दूसरा प्रश्न ↻'}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-amber-950 dark:text-amber-100">
                    "{DAILY_PROMPTS[activePromptIndex][language] || DAILY_PROMPTS[activePromptIndex].hi}"
                  </p>
                  <button
                    type="button"
                    onClick={() => setNewNote((prev) => (prev ? `${prev}\n\n${DAILY_PROMPTS[activePromptIndex][language] || DAILY_PROMPTS[activePromptIndex].hi}\n` : `${DAILY_PROMPTS[activePromptIndex][language] || DAILY_PROMPTS[activePromptIndex].hi}\n`))}
                    className="text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 px-2.5 py-1 rounded-lg transition cursor-pointer"
                  >
                    + {language === 'pb' ? 'ਨੋਟਸ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ' : language === 'en' ? 'Add to Notes' : 'नोट्स में शामिल करें'}
                  </button>
                </div>

                {/* Spiritual State / Mood Selector */}
                <div className="space-y-2">
                  <label style={{ color: theme.textSecondary }} className="text-xs font-bold block font-serif">
                    {language === 'pb' ? 'ਅੱਜ ਦਾ ਅੰਦਰੂਨੀ ਆਤਮਿਕ ਭਾਵ (Spiritual Mood):' : language === 'en' ? 'Current Spiritual State / Mood:' : 'आज का आंतरिक आध्यात्मिक भाव:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {SPIRITUAL_MOODS.map((m) => {
                      const isSelected = selectedMood === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setSelectedMood(m.id);
                          }}
                          style={{
                            backgroundColor: isSelected ? theme.stepActiveBg : theme.cardBg,
                            borderColor: isSelected ? m.color : theme.cardBorder,
                            color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                          }}
                          className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition cursor-pointer shadow-2xs hover:scale-105 ${
                            isSelected ? 'ring-2 ring-amber-400/40' : ''
                          }`}
                        >
                          <span className="text-xl">{m.icon}</span>
                          <span className="text-[11px] font-serif text-center">{m.label[language] || m.label.hi}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Category Tags */}
                <div className="space-y-2">
                  <label style={{ color: theme.textSecondary }} className="text-xs font-bold block font-serif">
                    {t.categoryLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.diaryTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setSelectedTag(tag);
                        }}
                        style={{
                          backgroundColor: selectedTag === tag ? theme.accentGold : theme.cardBg,
                          color: selectedTag === tag ? '#FFFFFF' : theme.textPrimary,
                          borderColor: theme.cardBorder,
                        }}
                        className="px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition shadow-2xs"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sakhi Reference (Optional) */}
                <div className="space-y-1">
                  <label style={{ color: theme.textSecondary }} className="text-xs font-serif font-bold">
                    {t.sakhiNumberOptional}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={newSakhiNum}
                    onChange={(e) => setNewSakhiNum(e.target.value)}
                    placeholder="उदा. 42"
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-32 p-2.5 rounded-xl border text-xs focus:outline-none font-mono"
                  />
                </div>

                {/* Main Reflection Textarea */}
                <div className="space-y-2 relative">
                  <div className="flex items-center justify-between flex-wrap gap-1.5">
                    <label style={{ color: theme.textSecondary }} className="text-xs font-serif font-bold">
                      {t.yourReflectionLabel} *
                    </label>

                    <button
                      type="button"
                      onClick={async () => {
                        if (!newNote.trim()) return;
                        setIsAutoCorrecting(true);
                        try {
                          if (typeof navigator !== 'undefined' && !navigator.onLine) {
                            const localResult = purifyAndAnalyzeVaniOffline(newNote, { language, mode: 'general' });
                            if (localResult.correctedText) setNewNote(localResult.correctedText);
                            return;
                          }
                          const response = await fetch('/api/auto-correct', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ text: newNote, language, mode: 'general' })
                          });
                          if (!response.ok) throw new Error('Offline fallback');
                          const data = await response.json();
                          if (data.correctedText) setNewNote(data.correctedText);
                        } catch {
                          const localResult = purifyAndAnalyzeVaniOffline(newNote, { language, mode: 'general' });
                          if (localResult.correctedText) setNewNote(localResult.correctedText);
                        } finally {
                          setIsAutoCorrecting(false);
                        }
                      }}
                      disabled={isAutoCorrecting || !newNote.trim()}
                      className="flex items-center gap-1 text-[10px] uppercase font-black text-amber-600 hover:text-amber-700 disabled:opacity-40 transition-colors cursor-pointer"
                    >
                      {isAutoCorrecting ? (
                        <RotateCw className="w-3 h-3 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3" />
                      )}
                      <span>{t.autoCorrectDiaryBtn}</span>
                    </button>
                  </div>

                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder={
                      isListeningNote
                        ? (language === 'pb' ? 'ਬੋਲੋ ਜੀ... ਤੁਹਾਡੇ ਸ਼ਬਦ ਦਰਜ ਹੋ ਰਹੇ ਹਨ...' : language === 'en' ? 'Listening... Speak your reflections...' : 'बोलें... आपकी वाणी से शब्द लिखे जा रहे हैं...')
                        : t.reflectionPlaceholder
                    }
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: isListeningNote ? '#EF4444' : theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-sm focus:outline-none resize-none h-32 transition-all font-serif ${
                      isListeningNote ? 'ring-2 ring-red-400/40' : ''
                    }`}
                  />

                  {/* Real-Time Interim Speech Transcript */}
                  {isListeningNote && (
                    <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-between text-xs text-amber-900 dark:text-amber-200 animate-fadeIn">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
                        <span className="font-semibold italic truncate">
                          {interimNote
                            ? `"${interimNote}..."`
                            : (language === 'pb'
                            ? 'ਹੁਣੇ ਬੋਲੋ... ਤੁਹਾਡੀ ਆਵਾਜ਼ ਲਿਖੀ ਜਾ ਰਹੀ ਹੈ'
                            : language === 'en'
                            ? 'Speak now... capturing your reflections'
                            : 'अब बोलें... आपके शब्द दर्ज किए जा रहे हैं')}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/30 text-amber-800 dark:text-amber-300 font-bold shrink-0">
                        {language === 'pb' ? 'ਪੰਜਾਬੀ' : language === 'en' ? 'English' : 'हिन्दी'} Voice
                      </span>
                    </div>
                  )}

                  {voiceErrorNote && (
                    <p className="text-xs text-red-500 italic mt-1">
                      {voiceErrorNote}
                    </p>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    id="save-new-diary-btn"
                    type="button"
                    onClick={handleAddEntry}
                    disabled={!newNote.trim()}
                    style={{
                      backgroundColor: theme.buttonPrimaryBg,
                      color: theme.buttonPrimaryText,
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-40 cursor-pointer flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.saveReflectionBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    style={{ color: theme.textMuted }}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium cursor-pointer hover:underline"
                  >
                    {t.cancelBtn}
                  </button>
                </div>
              </div>
            )}

            {/* Toolbar: Search, Mood Filter & Category Filters */}
            {entries.length > 0 && (
              <div className="space-y-3 pt-2 border-t" style={{ borderColor: theme.cardBorder }}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  {/* Voice-Enabled Search Bar */}
                  <div 
                    style={{ backgroundColor: theme.bgSecondary, borderColor: isListeningSearch ? '#EF4444' : theme.cardBorder }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border w-full sm:w-80 shadow-2xs transition-all ${
                      isListeningSearch ? 'ring-2 ring-red-400' : ''
                    }`}
                  >
                    <Search className="w-4 h-4 text-amber-600 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        isListeningSearch 
                          ? (language === 'pb' ? 'ਬੋਲੋ ਜੀ...' : language === 'en' ? 'Listening...' : 'बोलकर खोजें...')
                          : (language === 'hi' ? 'सत्संग विचार, कृतज्ञता व नोट्स खोजें...' : language === 'pb' ? 'ਸਤਿਸੰਗ ਵਿਚਾਰ ਤੇ ਨੋਟਸ ਖੋਜੋ...' : 'Search journal notes...')
                      }
                      style={{ color: theme.textPrimary }}
                      className="bg-transparent border-none text-xs focus:outline-none w-full font-serif"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="p-0.5 text-stone-400 hover:text-stone-600">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {/* Voice Search Button */}
                    <button
                      type="button"
                      onClick={toggleListeningSearch}
                      style={{
                        color: isListeningSearch ? '#EF4444' : theme.sacredMaroon,
                      }}
                      className="p-1 rounded-lg transition hover:scale-110 cursor-pointer shrink-0"
                      title="Speak to Search Journal"
                    >
                      {isListeningSearch ? <MicOff className="w-3.5 h-3.5 animate-bounce" /> : <Mic className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* View Mode Toggle */}
                  <div 
                    style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
                    className="flex items-center gap-1 p-1 rounded-xl border shrink-0 select-none"
                  >
                    <button
                      type="button"
                      onClick={() => setViewMode('gallery')}
                      style={{
                        backgroundColor: viewMode === 'gallery' ? theme.sacredMaroon : 'transparent',
                        color: viewMode === 'gallery' ? '#FFFFFF' : theme.textSecondary,
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition"
                    >
                      <Grid className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'गैलरी' : 'Gallery'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('list')}
                      style={{
                        backgroundColor: viewMode === 'list' ? theme.sacredMaroon : 'transparent',
                        color: viewMode === 'list' ? '#FFFFFF' : theme.textSecondary,
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition"
                    >
                      <List className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'सूची' : 'List'}</span>
                    </button>
                  </div>
                </div>

                {/* Category & Mood Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilterTag('all');
                      setActiveMoodFilter('all');
                    }}
                    style={{
                      backgroundColor: activeFilterTag === 'all' && activeMoodFilter === 'all' ? theme.accentGold : theme.cardBg,
                      color: activeFilterTag === 'all' && activeMoodFilter === 'all' ? '#FFFFFF' : theme.textPrimary,
                      borderColor: theme.cardBorder,
                    }}
                    className="px-3 py-1 rounded-xl border text-xs font-bold shrink-0 transition cursor-pointer shadow-2xs"
                  >
                    {language === 'hi' ? 'समस्त प्रविष्टियां' : language === 'pb' ? 'ਸਾਰੇ ਨੋਟਸ' : 'All Entries'} ({entries.length})
                  </button>

                  {/* Mood filters */}
                  {SPIRITUAL_MOODS.map((m) => {
                    const isSelected = activeMoodFilter === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setActiveMoodFilter(isSelected ? 'all' : m.id)}
                        style={{
                          backgroundColor: isSelected ? theme.stepActiveBg : theme.cardBg,
                          borderColor: isSelected ? m.color : theme.cardBorder,
                          color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                        }}
                        className="px-2.5 py-1 rounded-xl border text-xs font-semibold shrink-0 transition cursor-pointer flex items-center gap-1 shadow-2xs"
                      >
                        <span>{m.icon}</span>
                        <span>{m.label[language] || m.label.hi}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* List / Gallery of Journal Entries */}
            {entries.length === 0 ? (
              <div className="p-8 text-center space-y-2">
                <FileText style={{ color: theme.textMuted }} className="w-10 h-10 mx-auto opacity-50" />
                <p style={{ color: theme.textSecondary }} className="text-sm font-serif">
                  {t.noEntriesYet}
                </p>
              </div>
            ) : filteredEntries.length === 0 ? (
              <div className="p-8 text-center space-y-2 border border-dashed rounded-2xl" style={{ borderColor: theme.cardBorder }}>
                <Search style={{ color: theme.textMuted }} className="w-8 h-8 mx-auto opacity-40" />
                <p style={{ color: theme.textSecondary }} className="text-xs font-serif">
                  {language === 'hi' ? 'कोई प्रविष्टि नहीं मिली। कृपया खोज शब्द बदलें।' : 'No matching journal entries found.'}
                </p>
              </div>
            ) : (
              <div className="max-h-[60vh] overflow-y-auto pr-1">
                {viewMode === 'gallery' ? (
                  /* Gallery Grid Cards */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredEntries.map((item) => {
                      const moodObj = SPIRITUAL_MOODS.find(m => m.id === item.mood);
                      return (
                        <div
                          key={item.id}
                          style={{
                            backgroundColor: theme.bgSecondary,
                            borderColor: theme.cardBorder,
                          }}
                          className="p-4 sm:p-5 rounded-2xl border-2 space-y-3.5 transition hover:shadow-lg relative overflow-hidden flex flex-col justify-between group"
                        >
                          <div className="space-y-3">
                            {/* Header Badges */}
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span
                                  style={{
                                    backgroundColor: theme.accentGoldLight,
                                    color: theme.sacredMaroon,
                                  }}
                                  className="px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider border border-amber-400/30"
                                >
                                  {item.categoryTag || t.defaultCategory}
                                </span>

                                {moodObj && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-500/20 flex items-center gap-1">
                                    <span>{moodObj.icon}</span>
                                    <span>{moodObj.label[language] || moodObj.label.hi}</span>
                                  </span>
                                )}
                              </div>

                              {item.sakhiNumber && (
                                <span
                                  style={{ color: theme.accentGold }}
                                  className="font-bold text-[11px] cursor-pointer hover:underline shrink-0"
                                  onClick={() => onSelectSakhiNumber && onSelectSakhiNumber(item.sakhiNumber!)}
                                >
                                  📜 साखी #{item.sakhiNumber}
                                </span>
                              )}
                            </div>

                            {/* Note Content */}
                            <p style={{ color: theme.textPrimary }} className="text-sm leading-relaxed font-serif whitespace-pre-line">
                              "{item.notes}"
                            </p>

                            {/* Gratitude & Resolution details if present */}
                            {(item.gratitude || item.resolution) && (
                              <div className="space-y-1.5 pt-2 border-t border-black/5 dark:border-white/5 text-xs font-serif">
                                {item.gratitude && (
                                  <div className="flex items-start gap-1.5 text-rose-700 dark:text-rose-300">
                                    <Heart className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span className="text-[11px] leading-relaxed">
                                      <strong>कृतज्ञता:</strong> {item.gratitude}
                                    </span>
                                  </div>
                                )}
                                {item.resolution && (
                                  <div className="flex items-start gap-1.5 text-amber-700 dark:text-amber-300">
                                    <Flame className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span className="text-[11px] leading-relaxed">
                                      <strong>संकल्प:</strong> {item.resolution}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Footer Info & Actions */}
                          <div className="flex items-center justify-between pt-3 border-t text-[11px]" style={{ borderColor: theme.cardBorder }}>
                            <span style={{ color: theme.textMuted }} className="flex items-center gap-1 font-mono text-[10px]">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US', { dateStyle: 'medium' })}</span>
                            </span>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleShareEntry(item)}
                                style={{ color: theme.textMuted }}
                                title="Share Entry"
                                className="p-1 hover:text-amber-600 transition cursor-pointer"
                              >
                                <Share2 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleCopySingleEntry(item)}
                                style={{ color: theme.textMuted }}
                                title="Copy Entry"
                                className="p-1 hover:text-amber-600 transition cursor-pointer flex items-center gap-1 text-[10px]"
                              >
                                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>

                              <button
                                onClick={() => handleDeleteEntry(item.id)}
                                style={{ color: theme.textMuted }}
                                title={t.deleteEntry}
                                className="p-1 hover:text-red-600 transition cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Compact List View */
                  <div className="space-y-3">
                    {filteredEntries.map((item) => {
                      const moodObj = SPIRITUAL_MOODS.find(m => m.id === item.mood);
                      return (
                        <div
                          key={item.id}
                          style={{
                            backgroundColor: theme.bgSecondary,
                            borderColor: theme.borderOrnament,
                          }}
                          className="p-4 rounded-xl border space-y-2 transition hover:shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                style={{
                                  backgroundColor: theme.accentGoldLight,
                                  color: theme.sacredMaroon,
                                }}
                                className="px-2 py-0.5 rounded-md font-bold text-[11px]"
                              >
                                {item.categoryTag || t.defaultCategory}
                              </span>

                              {moodObj && (
                                <span className="text-xs">
                                  {moodObj.icon} {moodObj.label[language] || moodObj.label.hi}
                                </span>
                              )}

                              {item.sakhiNumber && (
                                <span
                                  style={{ color: theme.accentGold }}
                                  className="font-bold cursor-pointer hover:underline"
                                  onClick={() => onSelectSakhiNumber && onSelectSakhiNumber(item.sakhiNumber!)}
                                >
                                  {language === 'hi' ? 'साखी' : language === 'pb' ? 'ਸਾਖੀ' : 'Sakhi'} #{item.sakhiNumber}
                                </span>
                              )}

                              <span style={{ color: theme.textMuted }} className="flex items-center gap-1 font-mono text-[10px]">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(item.date).toLocaleDateString()}</span>
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => handleShareEntry(item)}
                                style={{ color: theme.textMuted }}
                                title="Share Entry"
                                className="p-1 hover:text-amber-600 transition cursor-pointer"
                              >
                                <Share2 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleCopySingleEntry(item)}
                                style={{ color: theme.textMuted }}
                                title="Copy Entry"
                                className="p-1 hover:text-amber-600 transition cursor-pointer"
                              >
                                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>

                              <button
                                onClick={() => handleDeleteEntry(item.id)}
                                style={{ color: theme.textMuted }}
                                title={t.deleteEntry}
                                className="p-1 hover:text-red-600 transition cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <p style={{ color: theme.textPrimary }} className="text-sm leading-relaxed font-serif whitespace-pre-line">
                            {item.notes}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: DEDICATED SIDDHANT NOTES (सिद्धांत विचार व पावन सूत्र) */}
        {/* ========================================================================= */}
        {activeSection === 'siddhant_notes' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3" style={{ borderColor: theme.cardBorder }}>
              <div>
                <span style={{ color: theme.sacredMaroon }} className="text-sm font-black uppercase tracking-wider block font-serif flex items-center gap-2">
                  <Quote className="w-4 h-4 text-amber-500" />
                  <span>{language === 'pb' ? 'ਸਿਧਾਂਤ ਵਿਚਾਰ ਤੇ ਪਾਵਨ ਸੂਤਰ' : language === 'en' ? 'Siddhant Notes & Sacred Principles' : 'सिद्धांत विचार एवं पावन सूत्र'}</span>
                </span>
                <p className="text-xs font-serif opacity-75 mt-0.5" style={{ color: theme.textSecondary }}>
                  {language === 'pb'
                    ? 'ਸਵਾਧਿਆਏ ਪਾਠ ਦੌਰਾਨ ਚੁਣੀਆਂ ਗਈਆਂ ਪੰਕਤੀਆਂ ਅਤੇ ਅੰਮ੍ਰਿਤ ਸਿਧਾਂਤ ਨੋਟਸ।'
                    : language === 'en'
                    ? 'Highlighted verses & sacred doctrinal principles saved from Swadhyay reader.'
                    : 'स्वाध्याय के समय हाइलाइट की गई पंक्तियाँ व साखी-बद्ध सिद्धांत विचार।'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setIsAddingSiddhant(!isAddingSiddhant);
                }}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-md hover:scale-105 active:scale-95 cursor-pointer self-start sm:self-auto"
              >
                {isAddingSiddhant ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{isAddingSiddhant ? (language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें') : (language === 'pb' ? 'ਨਵਾਂ ਸਿਧਾਂਤ' : language === 'en' ? 'Add Siddhant Note' : 'नया सिद्धांत जोड़ें')}</span>
              </button>
            </div>

            {/* Add Siddhant Note Form Card */}
            {isAddingSiddhant && (
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.accentGold }}
                className="p-4 sm:p-6 rounded-2xl border-2 space-y-4 animate-fadeIn shadow-sm"
              >
                <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{language === 'pb' ? '✨ ਨਵਾਂ ਸਿਧਾਂਤ ਸੂਤਰ ਦਰਜ ਕਰੋ' : language === 'en' ? '✨ Add Sacred Siddhant Note' : '✨ नया सिद्धांत सूत्र दर्ज करें'}</span>
                </h4>

                <div className="space-y-3">
                  <div>
                    <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif block mb-1">
                      {language === 'pb' ? 'ਸਿਧਾਂਤ ਪੰਕਤੀ / ਸੂਤਰ (Quote):' : language === 'en' ? 'Sacred Verse / Principle Quote:' : 'सिद्धांत पंक्ति / पावन सूत्र (Quote):'}
                    </label>
                    <textarea
                      rows={2}
                      value={newSiddhantText}
                      onChange={(e) => setNewSiddhantText(e.target.value)}
                      placeholder={language === 'pb' ? 'ਜਿਵੇਂ: ਗੁਰੂ ਕੁਮ੍ਹਾਰ ਸ਼ਿਸ਼ ਕੁੰਭ ਹੈ...' : language === 'en' ? 'e.g. Guru is the potter, disciple is the clay vessel...' : 'जैसे: गुरु कुम्हार शिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट...'}
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full p-3 rounded-xl border text-xs focus:outline-none font-serif shadow-2xs resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif block mb-1">
                        {language === 'pb' ? 'ਸਾਖੀ ਨੰਬਰ:' : language === 'en' ? 'Sakhi Number:' : 'साखी संख्या:'}
                      </label>
                      <input
                        type="number"
                        value={newSiddhantSakhiNum}
                        onChange={(e) => setNewSiddhantSakhiNum(e.target.value)}
                        placeholder="1"
                        min="1"
                        max="2000"
                        style={{
                          backgroundColor: theme.cardBg,
                          borderColor: theme.cardBorder,
                          color: theme.textPrimary,
                        }}
                        className="w-full p-2.5 rounded-xl border text-xs focus:outline-none font-serif font-mono shadow-2xs"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label style={{ color: theme.textSecondary }} className="text-xs font-bold font-serif block mb-1">
                        {language === 'pb' ? 'ਆਤਮ-ਚਿੰਤਨ / ਭਾਵ:' : language === 'en' ? 'Reflection / Realization:' : 'आत्म-चिंतन / आंतरिक भाव:'}
                      </label>
                      <input
                        type="text"
                        value={newSiddhantReflection}
                        onChange={(e) => setNewSiddhantReflection(e.target.value)}
                        placeholder={language === 'pb' ? 'ਇਸ ਪੰਕਤੀ ਤੋਂ ਕੀ ਸਿੱਖਿਆ ਮਿਲੀ...' : language === 'en' ? 'Key takeaway or practical reflection...' : 'इस सिद्धांत से जीवन में क्या धारण करना है...'}
                        style={{
                          backgroundColor: theme.cardBg,
                          borderColor: theme.cardBorder,
                          color: theme.textPrimary,
                        }}
                        className="w-full p-2.5 rounded-xl border text-xs focus:outline-none font-serif shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingSiddhant(false)}
                      style={{ backgroundColor: theme.cardBg, color: theme.textSecondary, borderColor: theme.cardBorder }}
                      className="px-4 py-2 rounded-xl border text-xs font-bold transition hover:opacity-80 cursor-pointer"
                    >
                      {language === 'pb' ? 'ਰੱਦ ਕਰੋ' : language === 'en' ? 'Cancel' : 'रद्द करें'}
                    </button>
                    <button
                      type="button"
                      onClick={handleAddSiddhantNote}
                      style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                      className="px-5 py-2 rounded-xl text-xs font-bold transition hover:scale-105 active:scale-95 shadow-sm cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{language === 'pb' ? 'ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save Siddhant' : 'सुरक्षित करें'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Siddhant Notes List */}
            <div className="space-y-4">
              {filteredSiddhantNotes.length === 0 ? (
                <div className="p-8 sm:p-10 text-center space-y-3 border-2 border-dashed rounded-3xl" style={{ borderColor: theme.cardBorder }}>
                  <Quote className="w-10 h-10 mx-auto opacity-30 text-amber-500" />
                  <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base">
                    {language === 'pb' ? 'ਕੋਈ ਸਿਧਾਂਤ ਨੋਟ ਨਹੀਂ ਮਿਲਿਆ' : language === 'en' ? 'No Siddhant Notes Found' : 'कोई सिद्धांत विचार नहीं मिला'}
                  </h4>
                  <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif max-w-md mx-auto">
                    {language === 'pb'
                      ? 'ਸਵਾਧਿਆਏ ਪੜ੍ਹਦੇ ਸਮੇਂ ਕਿਸੇ ਵੀ ਪੰਕਤੀ ਨੂੰ ਚੁਣੋ (Select/Highlight ਕਰੋ) ਅਤੇ "✨ ਸਿਧਾਂਤ ਨੋਟ" ਬਟਨ ਦਬਾ ਕੇ ਸਿੱਧਾ ਇੱਥੇ ਸੁਰੱਖਿਅਤ ਕਰੋ।'
                      : language === 'en'
                      ? 'Highlight any text while reading in Swadhyay and click "✨ Save to Siddhant Notes" in the popup to preserve it here with its Sakhi reference!'
                      : 'स्वाध्याय के दौरान किसी भी शब्द या पंक्ति को सिलेक्ट (Highlight) करें और पॉपअप से "✨ सिद्धांत विचार" चुनकर यहाँ साखी संदर्भ सहित सुरक्षित करें!'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSiddhantNotes.map((note) => (
                    <div
                      key={note.id}
                      style={{
                        backgroundColor: theme.bgSecondary,
                        borderColor: theme.accentGold,
                      }}
                      className="p-4 sm:p-5 rounded-2xl border-2 space-y-3.5 transition hover:shadow-lg relative overflow-hidden flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        {/* Header Badges & Sakhi Link */}
                        <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
                          <div className="flex items-center gap-2">
                            <span
                              style={{
                                backgroundColor: theme.accentGoldLight,
                                color: theme.sacredMaroon,
                              }}
                              className="px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider border border-amber-400/30 flex items-center gap-1"
                            >
                              <Quote size={10} className="text-amber-600" />
                              <span>{note.categoryTitle || (language === 'pb' ? 'ਸਿਧਾਂਤ' : 'सिद्धांत')}</span>
                            </span>

                            {note.sakhiNumber && (
                              <button
                                type="button"
                                onClick={() => {
                                  sacredHaptics.mediumTap();
                                  if (onSelectSakhiNumber) {
                                    onSelectSakhiNumber(note.sakhiNumber);
                                  }
                                }}
                                style={{
                                  backgroundColor: theme.stepActiveBg,
                                  borderColor: theme.accentGold,
                                  color: theme.sacredMaroon,
                                }}
                                className="px-2.5 py-0.5 rounded-full border text-[11px] font-black font-serif flex items-center gap-1 hover:scale-105 transition cursor-pointer shadow-2xs"
                                title={`Open Sakhi #${note.sakhiNumber}`}
                              >
                                <BookOpen size={11} className="text-amber-600" />
                                <span>{language === 'pb' ? `ਸਾਖੀ #${note.sakhiNumber} ਪੜ੍ਹੋ` : language === 'en' ? `Sakhi #${note.sakhiNumber}` : `साखी #${note.sakhiNumber} पढ़ें`}</span>
                              </button>
                            )}
                          </div>

                          <span style={{ color: theme.textMuted }} className="flex items-center gap-1 font-mono text-[10px]">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(note.date).toLocaleDateString()}</span>
                          </span>
                        </div>

                        {/* Highlighted Quote Box */}
                        <div 
                          style={{
                            backgroundColor: theme.cardBg,
                            borderColor: theme.borderOrnament,
                          }}
                          className="p-3 sm:p-3.5 rounded-xl border-l-4 border-l-amber-500 border space-y-1 shadow-2xs"
                        >
                          <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif font-bold italic leading-relaxed whitespace-pre-line">
                            "{note.highlightedText}"
                          </p>
                        </div>

                        {/* User Reflection Note */}
                        {note.reflectionNote && (
                          <div className="flex items-start gap-1.5 pt-1">
                            <span className="text-amber-500 font-bold text-xs shrink-0">💡</span>
                            <p style={{ color: theme.textSecondary }} className="text-xs font-serif leading-snug">
                              {note.reflectionNote}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between pt-2 border-t mt-2" style={{ borderColor: theme.cardBorder }}>
                        <div className="flex items-center gap-1.5">
                          {/* Play Quote Aloud Button */}
                          <button
                            type="button"
                            onClick={() => handlePlaySiddhantQuote(note)}
                            style={{
                              backgroundColor: playingSiddhantId === note.id ? theme.sacredMaroon : theme.cardBg,
                              color: playingSiddhantId === note.id ? '#FFFFFF' : theme.textPrimary,
                              borderColor: theme.accentGold,
                            }}
                            className="px-2.5 py-1 rounded-lg border text-[11px] font-bold font-serif flex items-center gap-1 transition cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                            title={playingSiddhantId === note.id ? 'Stop Speech' : 'Listen Quote Aloud'}
                          >
                            {playingSiddhantId === note.id ? (
                              <>
                                <VolumeX size={12} className="animate-spin text-amber-300" />
                                <span>{language === 'pb' ? 'ਬੰਦ' : language === 'en' ? 'Stop' : 'रोकें'}</span>
                              </>
                            ) : (
                              <>
                                <Volume2 size={12} className="text-amber-600" />
                                <span>{language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'सुनें'}</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleShareSiddhantNote(note)}
                            style={{ color: theme.textMuted }}
                            title="Share Siddhant Note"
                            className="p-1.5 hover:text-amber-600 transition cursor-pointer"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleCopySiddhantNote(note)}
                            style={{ color: theme.textMuted }}
                            title="Copy Quote"
                            className="p-1.5 hover:text-amber-600 transition cursor-pointer"
                          >
                            {copiedId === note.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteSiddhantNote(note.id)}
                            style={{ color: theme.textMuted }}
                            title="Delete"
                            className="p-1.5 hover:text-red-600 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Strict Sacred Footer Spelling */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-t py-2 px-4 text-center select-none rounded-2xl shadow-xs"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
        >
          {exactBottom}
        </span>
      </div>

      {/* Small Animated Flower Bloom Blessing Modal */}
      <FlowerBloomAnimation
        isOpen={showBloomModal}
        onClose={() => setShowBloomModal(false)}
        language={language}
        title={bloomModalInfo.title}
        message={bloomModalInfo.message}
      />

      {/* Export Toast Notification Banner */}
      {exportToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-[92%] p-4 rounded-2xl shadow-2xl border-2 flex items-center gap-3 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 border-amber-500/40 backdrop-blur-md animate-fadeIn">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
            <CheckCircle2 className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex-1 text-xs sm:text-sm font-medium font-serif leading-snug">
            {exportToast.message}
          </div>
          <button
            onClick={() => setExportToast(null)}
            className="p-1.5 rounded-lg hover:bg-amber-800/60 text-amber-300 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
