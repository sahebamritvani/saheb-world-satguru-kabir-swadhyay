import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Share2, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  Compass, 
  HeartHandshake,
  Bookmark,
  WifiOff,
  Maximize2,
  Minimize2,
  HelpCircle,
  Eye,
  EyeOff,
  Type,
  Bell,
  BellOff,
  Palette,
  Check,
  Copy,
  FileText,
  Timer,
  Download,
  Image as ImageIcon,
  X,
  Play,
  Pause,
  FastForward,
  RotateCcw,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  Award,
  ShieldCheck,
  Layers,
  Scroll,
  RotateCw,
  XCircle,
  ArrowLeft,
  Columns,
  Sliders,
  SlidersHorizontal,
  Quote
} from 'lucide-react';
import { Sakhi, Language, StudyStep, SACRED_BRANDING, ReaderCustomTheme, SiddhantNote, AccessibilitySettings, ReaderFontSize } from '../types';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { translations, formatSakhiShareText, getLocalizedGranthaName } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { sakhisDatabase } from '../data/sakhis';
import { formatCoupletString, ensureSatguruKabirSaheb, enrichBhavarthWithNihAkshar, matchCoupletWordToGlossary } from '../utils/textSanitizer';
import { QuoteCardModal } from './QuoteCardModal';
import { getEightStepSwadhyayData, mergeAiIntoEightStepData } from '../services/swadhyayEightSteps';
import {
  getElevenStepSwadhyayData,
  ElevenStepSwadhyayData,
  SwadhyayAiResponsePayload,
  fetchAiElevenStepSwadhyay,
  mergeAiIntoElevenStepData,
  shuffleQuizViaBackend,
  normalizeElevenStepQuizQuestion,
  ElevenStepQuizQuestion,
} from '../services/swadhyayElevenSteps';
import { getStep1ConciseMeaning } from '../services/swadhyayContentEngine';
import { SwadhyayCertificateModal } from './SwadhyayCertificateModal';
import { DiscourseEngine } from './DiscourseEngine';
import { sacredHaptics } from '../services/haptics';
import { AmbientSoundPlayer } from './AmbientSoundPlayer';
import { getAppUrlSync } from '../utils/url';
import { ReadingModeSelector } from './ReadingModeSelector';
import { PothiFlipBook, PothiPageData } from './PothiFlipBook';
import { useAutoScroll } from '../hooks/useAutoScroll';
import confetti from 'canvas-confetti';
import { SANDHUKKARI_GLOSSARY, SandhukkariTerm } from '../services/sandhukkariGlossary';
import { SmartGlossaryTooltip } from './SmartGlossaryTooltip';
import { SmartGlossaryText } from './SmartGlossaryText';
import { SandhukkariGlossaryModal } from './SandhukkariGlossaryModal';
import { SmartGlossingToolModal } from './SmartGlossingToolModal';
import { AccessibilityModal } from './AccessibilityModal';
import { ZenElevenStepsViewer } from './ZenElevenStepsViewer';

interface SwadhyayReaderProps {
  sakhi: Sakhi;
  language: Language;
  onOpenBlessing: (title?: string, message?: string) => void;
  onSaveToDiary: (reflectionNotes: string) => void;
  onStartQuiz: () => void;
  onChangeLanguage?: (lang: Language) => void;
  onSelectSakhi?: (sakhi: Sakhi) => void;
  onClose?: () => void;
}

// Global Sacred Esoteric Spiritual Glossary for Kabeer Path
const SACRED_GLOSSARY_OVERRIDE: Record<string, Record<Language, { word: string; meaning: string }>> = {
  'ਸੁਰਤਿ': {
    pb: { word: 'ਸੁਰਤਿ-ਨਿਰਤਿ', meaning: 'ਸੁਰਤਿ (ਆਤਮਿਕ ਸੁਰਤ/ਚੇਤਨਾ) ਅਤੇ ਨਿਰਤਿ (ਉਸ ਚੇਤਨਾ ਦਾ ਸੱਚੇ ਸਤਯਨਾਮ ਸ਼ਬਦ ਵਿੱਚ ਸਥਿਰ ਹੋ ਜਾਣਾ)। ਇਹ ਸਿਮਰਨ ਦਾ ਸਰਵਉੱਚ ਗੂੜ੍ਹ ਅਨੁਭਵ ਹੈ।' },
    hi: { word: 'सुरति-निरति', meaning: 'सुरति (आत्मिक चेतना) और निरति (उस चेतना का सत्य शब्द में विलीन होकर स्थिर हो जाना)। यह सत्यनाम स्मरण की सर्वोच्च दिव्य अवस्था है।' },
    en: { word: 'Surati-Nirati', meaning: 'Surati (spiritual consciousness) & Nirati (perfect absorption into the Eternal Sound). The highest state of Satyanaam meditation.' }
  },
  'सुरति': {
    pb: { word: 'ਸੁਰਤਿ-ਨਿਰਤਿ', meaning: 'ਸੁਰਤਿ (ਆਤਮਿਕ ਸੁਰਤ/ਚੇਤਨਾ) ਅਤੇ ਨਿਰਤਿ (ਉਸ ਚੇਤਨਾ ਦਾ ਸੱਚੇ ਸਤਯਨਾਮ ਸ਼ਬਦ ਵਿੱਚ ਸਥਿਰ ਹੋ ਜਾਣਾ)। ਇਹ ਸਿਮਰਨ ਦਾ ਸਰਵਉੱਚ ਗੂੜ੍ਹ ਅਨੁਭਵ ਹੈ।' },
    hi: { word: 'सुरति-निरति', meaning: 'सुरति (आत्मिक चेतना) और निरति (उस चेतना का सत्य शब्द में विलीन होकर स्थिर हो जाना)। यह सत्यनाम स्मरण की सर्वोच्च दिव्य अवस्था है।' },
    en: { word: 'Surati-Nirati', meaning: 'Surati (spiritual consciousness) & Nirati (perfect absorption into the Eternal Sound). The highest state of Satyanaam meditation.' }
  },
  'ਨਿਰਤਿ': {
    pb: { word: 'ਸੁਰਤਿ-ਨਿਰਤਿ', meaning: 'ਸੁਰਤਿ (ਆਤਮਿਕ ਸੁਰਤ/ਚੇਤਨਾ) ਅਤੇ ਨਿਰਤਿ (ਉਸ ਚੇਤਨਾ ਦਾ ਸੱਚੇ ਸਤਯਨਾਮ ਸ਼ਬਦ ਵਿੱਚ ਸਥਿਰ ਹੋ ਜਾਣਾ)। ਇਹ ਸਿਮਰਨ ਦਾ ਸਰਵਉੱਚ ਗੂੜ੍ਹ ਅਨੁਭਵ ਹੈ।' },
    hi: { word: 'सुरति-निरति', meaning: 'सुरति (आत्मिक चेतना) और निरति (उस चेतना का सत्य शब्द में विलीन होकर स्थिर हो जाना)। यह सत्यनाम स्मरण की सर्वोच्च दिव्य अवस्था है।' },
    en: { word: 'Surati-Nirati', meaning: 'Surati (spiritual consciousness) & Nirati (perfect absorption into the Eternal Sound). The highest state of Satyanaam meditation.' }
  },
  'निरति': {
    pb: { word: 'ਸੁਰਤਿ-ਨਿਰਤਿ', meaning: 'ਸੁਰਤਿ (ਆਤਮਿਕ ਸੁਰਤ/ਚੇਤਨਾ) ਅਤੇ ਨਿਰਤਿ (ਉਸ ਚੇਤਨਾ ਦਾ ਸੱਚੇ ਸਤਯਨਾਮ ਸ਼ਬਦ ਵਿੱਚ ਸਥਿਰ ਹੋ ਜਾਣਾ)। ਇਹ ਸਿਮਰਨ ਦਾ ਸਰਵਉੱਚ ਗੂੜ੍ਹ ਅਨੁਭਵ ਹੈ।' },
    hi: { word: 'सुरति-निरति', meaning: 'सुरति (आत्मिक चेतना) और निरति (उस चेतना का सत्य शब्द में विलीन होकर स्थिर हो जाना)। यह सत्यनाम स्मरण की सर्वोच्च दिव्य अवस्था है।' },
    en: { word: 'Surati-Nirati', meaning: 'Surati (spiritual consciousness) & Nirati (perfect absorption into the Eternal Sound). The highest state of Satyanaam meditation.' }
  },
  'ਅਨਹਦ': {
    pb: { word: 'ਅਨਹਦ ਨਾਦ', meaning: 'ਅਨਾਹਤ ਨਾਦ, ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਚੋਟ ਜਾਂ ਭੌਤਿਕ ਸਾਧਨ ਦੇ ਅੰਦਰੂਨੀ ਆਕਾਸ਼ ਵਿੱਚ ਸਦਾ ਗੂੰਜਦਾ ਰਹਿੰਦਾ ਹੈ। ਇਹ ਪਰਮ ਸਤਿਗੁਰੂ ਦਾ ਅੰਮ੍ਰਿਤ ਨਾਦ ਹੈ।' },
    hi: { word: 'अनहद नाद', meaning: 'अनाहत नाद, जो बिना किसी आघात या भौतिक साधन के भीतर स्वतः गुंजायमान रहता है। यह सतगुरु का पावन अमृत नाद है।' },
    en: { word: 'Anhad Naad', meaning: 'Anhad (Unstruck Melody) — the eternal spiritual vibration echoing within the soul, free from physical friction.' }
  },
  'अनहद': {
    pb: { word: 'ਅਨਹਦ ਨਾਦ', meaning: 'ਅਨਾਹਤ ਨਾਦ, ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਚੋਟ ਜਾਂ ਭੌਤਿਕ ਸਾਧਨ ਦੇ ਅੰਦਰੂਨੀ ਆਕาਸ਼ ਵਿੱਚ ਸਦਾ ਗੂੰਜਦਾ ਰਹਿੰਦਾ ਹੈ। ਇਹ ਪਰਮ ਸਤਿਗੁਰੂ ਦਾ ਅੰਮ੍ਰਿਤ ਨਾਦ ਹੈ।' },
    hi: { word: 'अनहद नाद', meaning: 'अनाहत नाद, जो बिना किसी आघात या भौतिक साधन के भीतर स्वतः गुंजायमान रहता है। यह सतगुरु का पावन अमृत नाद है।' },
    en: { word: 'Anhad Naad', meaning: 'Anhad (Unstruck Melody) — the eternal spiritual vibration echoing within the soul, free from physical friction.' }
  },
  'ਗਗਨ': {
    pb: { word: 'ਗਗਨ (ਦਸਮ ਦੁਆਰ)', meaning: 'ਅੰਦਰੂਨੀ ਆਕਾਸ਼ ਜਾਂ ਸੁਖਮਨਾ ਦੇ ਉੱਪਰਲਾ ਦਸਮ ਦੁਆਰ, ਜਿੱਥੇ ਆਤਮਾ ਸੱਚੇ ਸ਼ਬਦ ਨਾਲ ਇੱਕਮਿਕ ਹੋ ਕੇ ਅੰਮ੍ਰਿਤ ਰਸ ਦਾ ਪਾਨ ਕਰਦੀ ਹੈ।' },
    hi: { word: 'गगन (दसम द्वार)', meaning: 'भीतरी असीम आकाश या दसम द्वार, जहाँ जीवात्मा सत्य शब्द से मिलकर निरंतर परमात्मा के अमृत रस का पान करती है।' },
    en: { word: 'Gagan (Inner Heavens)', meaning: 'Gagan (Inner Heavens / Dasam Dwar) — the spiritual zenith within where the soul drinks the nectar of Satyanaam.' }
  },
  'गगन': {
    pb: { word: 'ਗਗਨ (ਦਸਮ ਦੁਆਰ)', meaning: 'ਅੰਦਰੂਨੀ ਆਕਾਸ਼ ਜਾਂ ਸੁਖਮਨਾ ਦੇ ਉੱਪਰਲਾ ਦਸਮ ਦੁਆਰ, ਜਿੱਥੇ ਆਤਮਾ ਸੱਚੇ ਸ਼ਬਦ ਨਾਲ ਇੱਕਮਿਕ ਹੋ ਕੇ ਅੰਮ੍ਰਿਤ ਰਸ ਦਾ ਪਾਨ ਕਰਦੀ ਹੈ।' },
    hi: { word: 'गगन (दसम द्वार)', meaning: 'भीतरी असीम आकाश या दसम द्वार, जहाँ जीवात्मा सत्य शब्द से मिलकर निरंतर परमात्मा के अमृत रस का पान करती है।' },
    en: { word: 'Gagan (Inner Heavens)', meaning: 'Gagan (Inner Heavens / Dasam Dwar) — the spiritual zenith within where the soul drinks the nectar of Satyanaam.' }
  },
  'ਤ੍ਰਿਕੁਟੀ': {
    pb: { word: 'ਤ੍ਰਿਕੁਟੀ', meaning: 'ਦੋਹਾਂ ਭਰਵੱਟਿਆਂ ਦੇ ਵਿਚਕਾਰਲਾ ਸਥਾਨ ਜਿੱਥੇ ਇੜਾ, ਪਿੰਗਲਾ ਅਤੇ ਸੁਖਮਨਾ ਨਾੜੀਆਂ ਮਿਲਦੀਆਂ ਹਨ; ਇਹ ਅੰਦਰੂਨੀ ਸਾਧਨਾ ਦਾ ਮਹੱਤਵਪੂਰਨ ਕੇਂਦਰ ਹੈ।' },
    hi: { word: 'त्रिकुटी', meaning: 'भ्रूमध्य (दोनों भौहों के बीच का भीतरी केंद्र) जहाँ इड़ा, पिंगला और सुषुम्ना नाड़ियां मिलती हैं; आंतरिक साधना और एकाग्रता का पवित्र मार्ग।' },
    en: { word: 'Trikuti', meaning: 'Trikuti — the confluence of the three primary inner energy channels (Ida, Pingla, Sushumna); a profound focus center.' }
  },
  'त्रिकुटी': {
    pb: { word: 'ਤ੍ਰਿਕੁਟੀ', meaning: 'ਦੋਹਾਂ ਭਰਵੱਟਿਆਂ ਦੇ ਵਿਚਕਾਰਲਾ ਸਥਾਨ ਜਿੱਥੇ ਇੜਾ, ਪਿੰਗਲਾ ਅਤੇ ਸੁਖਮਨਾ ਨਾੜੀਆਂ ਮਿਲਦੀਆਂ ਹਨ; ਇਹ ਅੰਦਰੂਨੀ ਸਾਧਨਾ ਦਾ ਮਹੱਤਵਪੂਰਨ ਕੇਂਦਰ ਹੈ।' },
    hi: { word: 'त्रिकुटी', meaning: 'भ्रूमध्य (दोनों भौहों के बीच का भीतरी केंद्र) जहाँ इड़ा, पिंगला और सुषुम्ना नाड़ियां मिलती हैं; आंतरिक साधना और एकाग्रता का पवित्र मार्ग।' },
    en: { word: 'Trikuti', meaning: 'Trikuti — the confluence of the three primary inner energy channels (Ida, Pingla, Sushumna); a profound focus center.' }
  },
  'ਸੁਖਮਨਾ': {
    pb: { word: 'ਸੁਖਮਨਾ', meaning: 'ਕੇਂਦਰੀ ਪ੍ਰਾਣ ਨਾੜੀ ਜਿਸ ਰਾਹੀਂ ਚੇਤਨਾ ਸੰਸਾਰਿਕ ਵਿਚਾਰਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਉੱਪਰ ਵੱਲ ਉੱਠਦੀ ਹੈ ਅਤੇ ਦਸਮ ਦੁਆਰ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰਦੀ ਹੈ।' },
    hi: { word: 'सुषुम्ना', meaning: 'केंद्रीय प्राण नाड़ी जिसके माध्यम से साधक की चेतना सांसारिक विचारों से मुक्त होकर ऊपर दसम द्वार की ओर गमन करती है।' },
    en: { word: 'Sukhmana (Sushumna)', meaning: 'Sukhmana (Sushumna) — the central spiritual channel through which divine consciousness ascends to the absolute realm.' }
  },
  'सुषुम्ना': {
    pb: { word: 'ਸੁਖਮਨਾ', meaning: 'ਕੇਂਦਰੀ ਪ੍ਰਾਣ ਨਾੜੀ ਜਿਸ ਰਾਹੀਂ ਚੇਤਨਾ ਸੰਸਾਰਿਕ ਵਿਚਾਰਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਉੱਪਰ ਵੱਲ ਉੱਠਦੀ ਹੈ ਅਤੇ ਦਸਮ ਦੁਆਰ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰਦੀ ਹੈ।' },
    hi: { word: 'सुषुम्ना', meaning: 'केंद्रीय प्राण नाड़ी जिसके माध्यम से साधक की चेतना सांसारिक विचारों से मुक्त होकर ऊपर दसम द्वार की ओर गमन करती है।' },
    en: { word: 'Sukhmana (Sushumna)', meaning: 'Sukhmana (Sushumna) — the central spiritual channel through which divine consciousness ascends to the absolute realm.' }
  }
};

export const SwadhyayReader: React.FC<SwadhyayReaderProps> = ({
  sakhi,
  language,
  onOpenBlessing,
  onSaveToDiary,
  onStartQuiz,
  onChangeLanguage,
  onSelectSakhi,
  onClose,
}) => {
  const { 
    theme, 
    themeMode,
    setThemeMode,
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    fontFamily,
    setFontFamily,
    zenModeActive: isZenMode,
    setZenModeActive: setIsZenMode,
    larivaarModeActive: isLarivaarMode,
    setLarivaarModeActive: setIsLarivaarMode,
    visraamModeActive: isVisraamHighlightEnabled,
    setVisraamModeActive: setIsVisraamHighlightEnabled,
    autoScrollActive: isAkhandScrollActive,
    setAutoScrollActive: setIsAkhandScrollActive,
    autoScrollSpeed: globalAutoScrollSpeed,
    setAutoScrollSpeed,
    globalWallpaper
  } = useAppTheme();
  const { language: contextLang, t: contextT } = useLanguage();
  const lang = language || contextLang;
  const t = translations[lang] || contextT;
  const activeFontClass = fontFamily === 'sans' ? 'font-sans' : 'font-serif';
  const activeFontStyle: React.CSSProperties = {
    fontFamily:
      fontFamily === 'sans'
        ? '"Noto Sans Devanagari", "Noto Sans Gurmukhi", "Mukta", ui-sans-serif, system-ui, sans-serif'
        : '"Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, Cambria, serif',
  };

  // 2 Reference Sakhis (संदर्भ साखियाँ) rotating daily for comparative deep study
  const referenceSakhis = React.useMemo(() => {
    if (!sakhisDatabase || sakhisDatabase.length === 0) return [];
    
    // Calculate today's epoch day for daily shifting rotation
    const today = new Date();
    const localEpochDay = Math.floor(
      (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / (1000 * 60 * 60 * 24)
    );

    const availableSakhis = sakhisDatabase.filter((s) => s.number !== sakhi.number);
    if (availableSakhis.length < 2) return availableSakhis;

    // Deterministic daily shifting index based on today's epoch day and current sakhi number
    const seed = Math.abs(localEpochDay + sakhi.number * 7);
    const idx1 = seed % availableSakhis.length;
    let idx2 = (idx1 + 1 + (seed % 3)) % availableSakhis.length;
    if (idx2 === idx1) idx2 = (idx1 + 1) % availableSakhis.length;

    return [availableSakhis[idx1], availableSakhis[idx2]];
  }, [sakhi.number]);

  // Global app layout states
  const [currentStep, setCurrentStep] = useState<StudyStep>(() => {
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem(`sahebworld_step_sakhi_${sakhi.number}`);
      if (savedStep) {
        return parseInt(savedStep, 10) as StudyStep;
      }
    }
    return 1;
  });
  const [currentReadingMode, setCurrentReadingMode] = useState<string>('swadhyay');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPlayingVerseOnly, setIsPlayingVerseOnly] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [isPathCopied, setIsPathCopied] = useState(false);
  const [ttsRate, setTtsRate] = useState<number>(() => speechReciter.getRate());
  const [quickReflection, setQuickReflection] = useState('');
  const [reflectionSavedToast, setReflectionSavedToast] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [zenViewTab, setZenViewTab] = useState<'moolvani' | 'elevensteps'>('moolvani');

  // --- TEXT SELECTION, SIDDHANT NOTES & LINE HIGHLIGHTING STATES ---
  const [selectedPhrase, setSelectedPhrase] = useState<string>('');
  const [siddhantSavedToast, setSiddhantSavedToast] = useState<{ phrase: string; noteId: string } | null>(null);
  const [siddhantHighlights, setSiddhantHighlights] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`sahebworld_siddhant_phrases_sakhi_${sakhi.number}`);
        return saved ? JSON.parse(saved) : [];
      } catch {}
    }
    return [];
  });

  const [lineHighlights, setLineHighlights] = useState<Record<number, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`sahebworld_line_highlights_sakhi_${sakhi.number}`);
        return saved ? JSON.parse(saved) : {};
      } catch {}
    }
    return {};
  });
  const [activeLinePalette, setActiveLinePalette] = useState<number | null>(null);

  // Re-sync highlights when sakhi changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`sahebworld_siddhant_phrases_sakhi_${sakhi.number}`);
        setSiddhantHighlights(saved ? JSON.parse(saved) : []);
        const savedLine = localStorage.getItem(`sahebworld_line_highlights_sakhi_${sakhi.number}`);
        setLineHighlights(savedLine ? JSON.parse(savedLine) : {});
      } catch {}
    }
    setSelectedPhrase('');
    setIsPlayingVerseOnly(false);
  }, [sakhi.number]);

  useEffect(() => {
    return () => {
      speechReciter.stop();
    };
  }, []);

  // --- ACCESSIBILITY & SPEECH SYNTHESIS SETTINGS STATE ---
  const [accessibilityConfig, setAccessibilityConfig] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('sahebworld_accessibility_settings');
        if (saved) return JSON.parse(saved);
      } catch {}
      const savedRate = localStorage.getItem('sahebworld_reciter_rate');
      const savedPitch = localStorage.getItem('sahebworld_reciter_pitch');
      return {
        speechRate: savedRate ? parseFloat(savedRate) : 0.9,
        speechPitch: savedPitch ? parseFloat(savedPitch) : 1.0,
        speechVolume: 1.0,
        highlightCurrentVerse: true,
        autoScrollOnSpeech: true,
      };
    }
    return {
      speechRate: 0.9,
      speechPitch: 1.0,
      speechVolume: 1.0,
      highlightCurrentVerse: true,
      autoScrollOnSpeech: true,
    };
  });
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [activePlayingStanzaKey, setActivePlayingStanzaKey] = useState<string | null>(null);

  const updateAccessibilitySettings = (updates: Partial<AccessibilitySettings>) => {
    const updated = { ...accessibilityConfig, ...updates };
    setAccessibilityConfig(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_accessibility_settings', JSON.stringify(updated));
      if (updates.speechRate !== undefined) {
        speechReciter.setRate(updates.speechRate);
        setTtsRate(updates.speechRate);
      }
      if (updates.speechPitch !== undefined) {
        speechReciter.setPitch(updates.speechPitch);
      }
    }
  };

  // Play Stanza with Language-Appropriate Web Speech API
  const handlePlayStanza = (textToRead: string, stanzaKey: string) => {
    sacredHaptics.lightTap();
    if (activePlayingStanzaKey === stanzaKey) {
      speechReciter.stop();
      setActivePlayingStanzaKey(null);
      setIsSpeaking(false);
      setIsPlayingVerseOnly(false);
      return;
    }

    speechReciter.stop();
    setActivePlayingStanzaKey(stanzaKey);
    setIsSpeaking(true);
    setIsPlayingVerseOnly(stanzaKey === 'verse');
    speechReciter.setRate(accessibilityConfig.speechRate);
    speechReciter.setPitch(accessibilityConfig.speechPitch);

    speechReciter.speak(
      textToRead,
      language,
      () => {
        setActivePlayingStanzaKey(null);
        setIsSpeaking(false);
        setIsPlayingVerseOnly(false);
      },
      () => {
        setActivePlayingStanzaKey(null);
        setIsSpeaking(false);
        setIsPlayingVerseOnly(false);
      }
    );
  };

  // Handle Play Verse Only (reads current sakhi verse aloud via Web Speech API)
  const handlePlayVerseOnly = () => {
    const verseText = sakhi.text[language] || sakhi.text.hi;
    handlePlayStanza(verseText, 'verse');
  };

  // Handle text selection check for words / phrases in Sakhi
  const handleTextSelectionCheck = () => {
    if (typeof window === 'undefined') return;
    const sel = window.getSelection();
    if (sel && sel.toString().trim().length > 1) {
      const text = sel.toString().trim();
      if (text.length <= 250) {
        setSelectedPhrase(text);
      }
    }
  };

  // Save selected word or phrase as Siddhant Note into Spiritual Diary
  const handleSaveSiddhantNote = (phraseToSave?: string, customReflection?: string) => {
    const phrase = (phraseToSave || selectedPhrase || '').trim();
    if (!phrase) return;

    sacredHaptics.successVibration();
    const entryId = 'siddhant-' + Date.now();

    // 1. Dedicated SiddhantNote model
    const siddhantNoteObj: SiddhantNote = {
      id: entryId,
      sakhiNumber: sakhi.number,
      grantha: sakhi.grantha,
      categoryTitle: sakhi.categoryTitle[language] || sakhi.categoryTitle.hi,
      highlightedText: phrase,
      reflectionNote: (customReflection || quickReflection || '').trim() || `${language === 'pb' ? '[ਸਾਖੀ #' : language === 'en' ? '[Sakhi #' : '[साखी संख्या '}${sakhi.number}]: ${sakhi.categoryTitle[language] || sakhi.categoryTitle.hi}`,
      date: new Date().toISOString(),
      color: '#F59E0B',
      tags: [sakhi.categoryTitle[language] || sakhi.categoryTitle.hi, 'सिद्धांत']
    };

    // 2. Full Spiritual Diary entry
    const newEntry = {
      id: entryId,
      sakhiNumber: sakhi.number,
      date: new Date().toISOString(),
      notes: `${language === 'pb' ? '[ਸਿਧਾਂਤ ਸੂਤਰ]' : language === 'en' ? '[Siddhant Excerpt]' : '[सिद्धांत सूत्र]'}: "${phrase}"\n\n${language === 'pb' ? '[ਮੂਲ ਸਾਖੀ]' : language === 'en' ? '[Original Sakhi]' : '[मूल साखी]'}: ${sakhi.text[language] || sakhi.text.hi}\n\n${language === 'pb' ? '[ਭਾਵਾਰਥ]' : language === 'en' ? '[Bhavarth]' : '[भावार्थ]'}: ${sakhi.bhavarth[language] || sakhi.bhavarth.hi}`,
      categoryTag: language === 'pb' ? 'ਸਿਧਾਂਤ ਨੋਟ' : language === 'en' ? 'Siddhant Note' : 'सिद्धांत नोट',
      mood: 'introspective',
      gratitude: language === 'pb' ? `ਸਾਖੀ ਨੰਬਰ ${sakhi.number} ਤੋਂ ਅੰਮ੍ਰਿਤ ਸਿਧਾਂਤ ਸੂਤਰ ਗ੍ਰਹਿਣ ਕੀਤਾ।` : language === 'en' ? `Received sacred Siddhant reflection from Sakhi #${sakhi.number}.` : `साखी संख्या ${sakhi.number} से पावन सिद्धांत सूत्र ग्रहण किया।`,
      resolution: language === 'pb' ? `ਇਸ ਸਿਧਾਂਤ ਨੂੰ ਨਿੱਤ ਜੀਵਨ ਤੇ ਵਿਹਾਰ ਵਿੱਚ ਉਤਾਰਨਾ।` : language === 'en' ? `Put this Siddhant principle into daily life action.` : `इस सिद्धांत को नित्य जीवन व आचरण में उतारना।`
    };

    if (typeof window !== 'undefined') {
      try {
        // Save to dedicated Siddhant Notes storage
        const savedSiddhant = localStorage.getItem('sahebworld_siddhant_notes');
        const existingSiddhant: SiddhantNote[] = savedSiddhant ? JSON.parse(savedSiddhant) : [];
        localStorage.setItem('sahebworld_siddhant_notes', JSON.stringify([siddhantNoteObj, ...existingSiddhant]));

        // Save to general Spiritual Diary
        const saved = localStorage.getItem('sahebworld_diary_entries');
        const existing = saved ? JSON.parse(saved) : [];
        const updated = [newEntry, ...existing];
        localStorage.setItem('sahebworld_diary_entries', JSON.stringify(updated));

        const nextPhrases = Array.from(new Set([...siddhantHighlights, phrase]));
        setSiddhantHighlights(nextPhrases);
        localStorage.setItem(`sahebworld_siddhant_phrases_sakhi_${sakhi.number}`, JSON.stringify(nextPhrases));
        
        // Notify any open listeners
        window.dispatchEvent(new CustomEvent('sahebworld_siddhant_notes_updated'));
        window.dispatchEvent(new CustomEvent('sahebworld_diary_updated'));
      } catch (err) {
        console.error('Error saving Siddhant Note:', err);
      }
    }

    setSiddhantSavedToast({ phrase, noteId: entryId });
    setSelectedPhrase('');
    setTimeout(() => setSiddhantSavedToast(null), 5000);
  };

  // --- AUDIO NARRATION MODE STATE ---
  const [narrationMode, setNarrationMode] = useState<'couplet' | 'couplet_bhavarth' | 'full'>('couplet_bhavarth');

  const handleSetLineHighlight = (lineIndex: number, color: string) => {
    sacredHaptics.lightTap();
    const next = { ...lineHighlights };
    if (color === 'clear' || color === 'none' || next[lineIndex] === color) {
      delete next[lineIndex];
    } else {
      next[lineIndex] = color;
    }
    setLineHighlights(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`sahebworld_line_highlights_sakhi_${sakhi.number}`, JSON.stringify(next));
    }
  };

  const handleClearAllLineHighlights = () => {
    sacredHaptics.lightTap();
    setLineHighlights({});
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`sahebworld_line_highlights_sakhi_${sakhi.number}`);
    }
  };

  const handleSetTtsRate = (newRate: number) => {
    setTtsRate(newRate);
    speechReciter.setRate(newRate);
  };

  const handleCopyPathUrl = async () => {
    const baseUrl = getAppUrlSync();
    const fullShareUrl = `${baseUrl}?sakhi=${sakhi.number}`;
    try {
      await navigator.clipboard.writeText(fullShareUrl);
      setIsPathCopied(true);
      setTimeout(() => setIsPathCopied(false), 2500);
      sacredHaptics.lightTap();
    } catch {
      setIsPathCopied(true);
      setTimeout(() => setIsPathCopied(false), 2500);
    }
  };

  // --- SADHANA READING FEATURES STATES ---
  const [isPageFlipMode, setIsPageFlipMode] = useState<boolean>(false);
  const [pageFlipIndex, setPageFlipIndex] = useState<number>(0);
  const [showReadingStyleSelector, setShowReadingStyleSelector] = useState<boolean>(false);
  const [showSwipeHelp, setShowSwipeHelp] = useState<boolean>(false);
  const [quizCurrentIdx, setQuizCurrentIdx] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});
  const [quizAttempt, setQuizAttempt] = useState<number>(1);
  const [showRomanTransliteration, setShowRomanTransliteration] = useState<boolean>(false);
  const [aiSwadhyayPayload, setAiSwadhyayPayload] = useState<SwadhyayAiResponsePayload | null>(null);
  const [isAiEnriching, setIsAiEnriching] = useState<boolean>(false);
  const [aiQuizOverride, setAiQuizOverride] = useState<ElevenStepQuizQuestion[] | null>(null);

  // Memoized pages for 3D Pothi Flip Book Mode
  const pothiPages: PothiPageData[] = React.useMemo(() => {
    if (!sakhi) return [];
    
    const lineHi = sakhi.text?.hi || '';
    const linePb = sakhi.text?.pb || '';
    const lineEn = sakhi.text?.en || '';
    
    const hiLines = lineHi.split('\n').filter(Boolean);
    const pbLines = linePb.split('\n').filter(Boolean);
    const enLines = lineEn.split('\n').filter(Boolean);

    return [{
      id: sakhi.id || String(sakhi.number),
      angNumber: 1,
      granthTitle: getLocalizedGranthaName(sakhi.grantha, language),
      chapterTitle: `${language === 'pb' ? 'ਸਾਖੀ' : language === 'en' ? 'Sakhi' : 'साखी'} #${sakhi.number}`,
      originalLines: {
        hi: hiLines,
        pb: pbLines.length ? pbLines : undefined,
        en: enLines.length ? enLines : undefined
      },
      shabdarth: sakhi.wordMeanings?.[language]?.map(m => ({ word: m.word, meaning: m.meaning })) || [],
      bhavarth: sakhi.bhavarth ? {
        hi: sakhi.bhavarth.hi,
        pb: sakhi.bhavarth.pb,
        en: sakhi.bhavarth.en
      } : undefined
    }];
  }, [sakhi, language]);

  const handleModeSelect = (modeId: string) => {
    setCurrentReadingMode(modeId);
    sacredHaptics.lightTap();
    switch (modeId) {
      case 'scroll':
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        setShowMoolvani(true);
        break;
      case 'pothi':
        setIsPageFlipMode(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        break;
      case 'parallel':
        setIsPageFlipMode(false);
        setShowMoolvani(true);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        break;
      case 'zen':
        setIsZenMode(true);
        setIsPageFlipMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        break;
      case 'larivaar':
        setIsLarivaarMode(true);
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        break;
      case 'visraam':
        setIsVisraamHighlightEnabled(true);
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsAkhandScrollActive(false);
        break;
      case 'autoplay':
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(true);
        break;
      case 'swadhyay':
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(false);
        setShowMoolvani(true);
        setTimeout(() => {
          const card1 = document.getElementById('eightstep-card-1');
          if (card1) {
            card1.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        break;
      case 'akhand':
        setIsPageFlipMode(false);
        setIsZenMode(false);
        setIsLarivaarMode(false);
        setIsVisraamHighlightEnabled(false);
        setIsAkhandScrollActive(true);
        setScrollSpeed('1.5x');
        break;
      default:
        break;
    }
  };
  const [readingTheme, setReadingTheme] = useState<'default' | 'sepia' | 'oled' | 'contrast' | 'flow_state'>(() => {
    if (typeof window !== 'undefined') {
      const thm = localStorage.getItem('sahebworld_reader_theme');
      if (thm === 'flow_state' || thm === 'flow') {
        return 'flow_state';
      } else if (thm === 'deep_sepia' || thm === 'sepia' || thm === 'pothi') {
        return 'sepia';
      } else if (thm === 'black' || thm === 'midnight' || thm === 'oled') {
        return 'oled';
      } else if (thm === 'netra' || thm === 'comfort') {
        return 'contrast';
      }
    }
    return themeMode === 'flow_state' ? 'flow_state' : 'default';
  });

  const changeReadingTheme = (newTheme: 'default' | 'sepia' | 'oled' | 'contrast' | 'flow_state') => {
    setReadingTheme(newTheme);
    const mapping: Record<string, string> = {
      default: 'mool',
      sepia: 'sepia',
      oled: 'black',
      flow_state: 'flow_state',
      contrast: 'netra'
    };
    const mappedThm = mapping[newTheme];
    try {
      localStorage.setItem('sahebworld_reader_theme', mappedThm);
      window.dispatchEvent(new CustomEvent('sahebworld_reader_theme_changed', { detail: { theme: mappedThm } }));
    } catch {}

    if (newTheme === 'oled') {
      setThemeMode('mystic_dark');
    } else if (newTheme === 'flow_state') {
      setThemeMode('flow_state');
    } else {
      setThemeMode('bhojpatra');
    }
  };
  const [localFontSize, setLocalFontSize] = useState<ReaderFontSize>(fontSize);

  const prevSakhi = React.useMemo(() => {
    if (!sakhisDatabase) return null;
    const currentIndex = sakhisDatabase.findIndex((s) => s.number === sakhi.number);
    if (currentIndex > 0) return sakhisDatabase[currentIndex - 1];
    return null;
  }, [sakhi.number]);

  const nextSakhi = React.useMemo(() => {
    if (!sakhisDatabase) return null;
    const currentIndex = sakhisDatabase.findIndex((s) => s.number === sakhi.number);
    if (currentIndex >= 0 && currentIndex < sakhisDatabase.length - 1) return sakhisDatabase[currentIndex + 1];
    return null;
  }, [sakhi.number]);

  // --- FRAMER MOTION SWIPE GESTURE NAVIGATION FOR SEQUENTIAL SAKHIS ---
  const [swipeDirection, setSwipeDirection] = useState<number>(0);
  const [swipeToast, setSwipeToast] = useState<{ direction: 'left' | 'right'; sakhiNum: number } | null>(null);

  const handleFramerMotionDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 45;
    const velocityThreshold = 0.15;
    
    // Swipe Left (Next Sakhi)
    if ((info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) && nextSakhi) {
      sacredHaptics.lightTap();
      setSwipeDirection(-1);
      setSwipeToast({ direction: 'left', sakhiNum: nextSakhi.number });
      setTimeout(() => setSwipeToast(null), 1200);
      onSelectSakhi?.(nextSakhi);
    } 
    // Swipe Right (Prev Sakhi)
    else if ((info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) && prevSakhi) {
      sacredHaptics.lightTap();
      setSwipeDirection(1);
      setSwipeToast({ direction: 'right', sakhiNum: prevSakhi.number });
      setTimeout(() => setSwipeToast(null), 1200);
      onSelectSakhi?.(prevSakhi);
    }
  };

  useEffect(() => {
    if (!isZenMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZenMode(false);
        setCurrentReadingMode('swadhyay');
        setSelectedGlossaryKey(null);
        if (typeof document !== 'undefined' && document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZenMode]);

  // --- 8-STEP TRADITIONAL SWADHYAY STATES ---
  const [showEightStepVocab, setShowEightStepVocab] = useState<boolean>(true);
  const [showEightStepContemplation, setShowEightStepContemplation] = useState<boolean>(true);
  const [unlockedSatsang, setUnlockedSatsang] = useState<boolean>(true);
  const [unlockedInsight, setUnlockedInsight] = useState<boolean>(true);
  const [showBhavarth, setShowBhavarth] = useState<boolean>(true);
  const [showMoolvani, setShowMoolvani] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_show_moolvani');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  const handleToggleMoolvani = () => {
    sacredHaptics.lightTap();
    setShowMoolvani((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('sahebworld_show_moolvani', String(next));
      }
      return next;
    });
  };

  // Ensure Moolvani is prominent in Elderly Mode
  useEffect(() => {
    if (fontSize === 'elderly' && !showMoolvani) {
      setShowMoolvani(true);
    }
  }, [fontSize]);

  const [maxUnlockedStep, setMaxUnlockedStep] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sahebworld_max_unlocked_step_sakhi_${sakhi.number}`);
      return saved ? parseInt(saved, 10) : 1;
    }
    return 1;
  });

  const [maxUnlockedEightStep, setMaxUnlockedEightStep] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sahebworld_max_unlocked_eight_step_sakhi_${sakhi.number}`);
      return saved ? parseInt(saved, 10) : 1;
    }
    return 1;
  });

  // Smooth scroll spy: dynamically updates currentStep indicator as reader scrolls through the 10 Swadhyay cards
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = id.match(/eightstep-card-(\d+)/);
            if (match) {
              const step = parseInt(match[1], 10) as StudyStep;
              setCurrentStep(step);
              try {
                localStorage.setItem(`sahebworld_step_sakhi_${sakhi.number}`, String(step));
              } catch {}
            }
          }
        });
      },
      {
        rootMargin: '-15% 0px -40% 0px',
        threshold: 0.15
      }
    );

    for (let i = 1; i <= 11; i++) {
      const el = document.getElementById(`eightstep-card-${i}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sakhi.number, maxUnlockedEightStep]);

  const handleUnlockNextStep = () => {
    const next = currentStep + 1;
    if (next <= 5) {
      if (next > maxUnlockedStep) {
        setMaxUnlockedStep(next);
        if (typeof window !== 'undefined') {
          localStorage.setItem(`sahebworld_max_unlocked_step_sakhi_${sakhi.number}`, String(next));
        }
      }
      setCurrentStep(next as StudyStep);
      sacredHaptics.lightTap();
      try {
        satyanaamAudio.playStepCompletionChime();
        satyanaamAudio.ringSacredBell();
      } catch (e) {}
      scrollSwadhyayIntoView();
    }
  };

  const handleUnlockNextEightStep = (stepNum: number) => {
    const next = stepNum + 1;
    if (next <= 11) {
      if (next > maxUnlockedEightStep) {
        setMaxUnlockedEightStep(next);
        if (typeof window !== 'undefined') {
          localStorage.setItem(`sahebworld_max_unlocked_eight_step_sakhi_${sakhi.number}`, String(next));
          window.dispatchEvent(new Event('sahebworld_step_updated'));
        }
      }
      sacredHaptics.divineBlessing();
      try {
        satyanaamAudio.playStepCompletionChime();
        satyanaamAudio.ringSacredBell();
      } catch (e) {}
      
      setTimeout(() => {
        const nextCard = document.getElementById(`eightstep-card-${next}`);
        if (nextCard) {
          nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  // Swipe Gesture Navigation (Swipe Left = Next Step, Swipe Right = Previous Step)
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        // Swipe Left -> Next Step (Only if unlocked)
        if (currentStep < 11) {
          const next = (currentStep + 1) as StudyStep;
          if (next <= maxUnlockedEightStep) {
            setCurrentStep(next);
            sacredHaptics.lightTap();
          }
        }
      } else {
        // Swipe Right -> Previous Step
        if (currentStep > 1) {
          const prev = (currentStep - 1) as StudyStep;
          setCurrentStep(prev);
          sacredHaptics.lightTap();
        }
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Background AI 11-Step Dynamic Swadhyay Enrichment per Sakhi & Language
  useEffect(() => {
    let cancelled = false;
    setQuizCurrentIdx(0);
    setQuizAnswers({});
    setQuizSubmitted({});
    setAiQuizOverride(null);
    setAiSwadhyayPayload(null);

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return;
    }

    setIsAiEnriching(true);
    const savedSeekerName =
      typeof window !== 'undefined' ? localStorage.getItem('sahebworld_seeker_name') || undefined : undefined;

    fetchAiElevenStepSwadhyay({
      sakhi,
      language,
      seekerName: savedSeekerName,
      attempt: quizAttempt,
    })
      .then(({ payload }) => {
        if (!cancelled) {
          setAiSwadhyayPayload(payload);
        }
      })
      .catch(() => {
        // Offline / unconfigured key falls back gracefully to deterministic Sakhi-grounded data
      })
      .finally(() => {
        if (!cancelled) {
          setIsAiEnriching(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [sakhi.id, sakhi.number, language]);

  // Compute authentic 8-step + 11-step data for current sakhi and language (with AI merge)
  const mergedEight = React.useMemo(() => {
    const base = getEightStepSwadhyayData(sakhi, language);
    return mergeAiIntoEightStepData(base, aiSwadhyayPayload, language);
  }, [sakhi, language, aiSwadhyayPayload]);

  const eightStepData = mergedEight.data;
  const aiWordsMultilingual = mergedEight.multilingualWords;

  const elevenStepData = React.useMemo(() => {
    const base = getElevenStepSwadhyayData(sakhi, language);
    const merged = aiSwadhyayPayload ? mergeAiIntoElevenStepData(base, aiSwadhyayPayload, language) : base;
    if (aiQuizOverride && aiQuizOverride.length > 0) {
      return {
        ...merged,
        step5_quiz: {
          ...merged.step5_quiz,
          questions: aiQuizOverride,
        },
      };
    }
    return merged;
  }, [sakhi, language, aiSwadhyayPayload, aiQuizOverride, quizAttempt]);

  const handleReshuffleQuizAttempt = async () => {
    sacredHaptics.lightTap();
    setQuizAnswers({});
    setQuizSubmitted({});
    setQuizCurrentIdx(0);
    const currentQuestions = elevenStepData.step5_quiz.questions.slice(0, 5);
    const reshuffled = await shuffleQuizViaBackend(currentQuestions, language);
    setAiQuizOverride(reshuffled);
    setQuizAttempt((prev) => prev + 1);
  };

  // Synchronize local states with global context settings
  useEffect(() => {
    setLocalFontSize(fontSize);
  }, [fontSize]);

  const handleSetLocalFontSize = (size: ReaderFontSize) => {
    setLocalFontSize(size);
    setFontSize(size);
  };

  const getLineHeightClass = (lh: 'small' | 'medium' | 'large') => {
    switch (lh) {
      case 'small': return 'leading-[1.7]';
      case 'medium': return 'leading-[1.95]';
      case 'large': return 'leading-[2.2]';
      default: return 'leading-[1.95]';
    }
  };

  const getWidthClass = (mode: 'narrow' | 'medium' | 'wide') => {
    switch (mode) {
      case 'narrow': return 'max-w-3xl';
      case 'medium': return 'max-w-5xl';
      case 'wide': return 'max-w-7xl';
      default: return 'max-w-7xl';
    }
  };

  const scrollSwadhyayIntoView = () => {
    const container = document.getElementById('swadhyay-reader-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // If the top of the container is already within a comfortable reading range (40px to 220px),
      // we do not scroll at all! This maintains perfect focus and reading rhythm.
      if (rect.top >= 40 && rect.top <= 220) {
        return;
      }
      
      const yOffset = -90; 
      const y = rect.top + scrollTop + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollSpeed = `${globalAutoScrollSpeed}x` as any;
  const setScrollSpeed = (speedStr: string) => {
    const val = parseFloat(speedStr.replace('x', ''));
    setAutoScrollSpeed(val);
  };
  const zenContainerRef = useRef<HTMLDivElement>(null);
  const speedMultiplierMap: Record<string, number> = {
    '0.2x': 0.2,
    '0.5x': 0.5,
    '0.75x': 0.75,
    '1x': 1.0,
    '1.5x': 1.5,
    '2x': 2.0,
    '2.5x': 2.5,
    '3x': 3.0,
    '5x': 5.0
  };

  useAutoScroll({
    containerRef: isZenMode ? zenContainerRef : null,
    isActive: isAkhandScrollActive,
    speedMultiplier: typeof globalAutoScrollSpeed === 'number' && globalAutoScrollSpeed > 0 ? globalAutoScrollSpeed : (speedMultiplierMap[scrollSpeed] || 1.0),
    isPageFlipMode: isPageFlipMode,
    onPageFlipNext: () => {
      setPageFlipIndex((prev) => {
        if (prev >= pothiPages.length - 1) {
          setIsAkhandScrollActive(false);
          return prev;
        }
        return prev + 1;
      });
    },
    onComplete: () => {
      setIsAkhandScrollActive(false);
    }
  });

  const [focusRuler, setFocusRuler] = useState<boolean>(false);
  const [selectedGlossaryKey, setSelectedGlossaryKey] = useState<{ type: 'data'; index: number } | { type: 'override'; key: string } | null>(null);

  // Smart Glossing State for non-intrusive tooltip and full detail modal
  const [activeSmartTerm, setActiveSmartTerm] = useState<SandhukkariTerm | null>(null);
  const [smartTooltipTargetRect, setSmartTooltipTargetRect] = useState<DOMRect | null>(null);
  const [fullSmartModalTerm, setFullSmartModalTerm] = useState<SandhukkariTerm | null>(null);
  const [showSmartGlossingTool, setShowSmartGlossingTool] = useState<boolean>(false);

  // Helper to match a word from couplet text to Sandhukkari Glossary
  const findSandhukkariTerm = React.useCallback((word: string): SandhukkariTerm | null => {
    const cleanWord = word.trim().replace(/[।॥,.\s()]/g, '');
    if (!cleanWord || cleanWord.length < 2) return null;

    if (SANDHUKKARI_GLOSSARY[cleanWord]) return SANDHUKKARI_GLOSSARY[cleanWord];

    // Search by word, punjabi, or transliteration
    const allTerms = Object.values(SANDHUKKARI_GLOSSARY);
    for (const term of allTerms) {
      if (term.word === cleanWord || term.punjabi === cleanWord || term.transliteration.toLowerCase() === cleanWord.toLowerCase()) {
        return term;
      }
      if (cleanWord.includes(term.word) || term.word.includes(cleanWord) || cleanWord.includes(term.punjabi) || term.punjabi.includes(cleanWord)) {
        if (term.word.length >= 3 || term.punjabi.length >= 3) {
          return term;
        }
      }
    }
    return null;
  }, []);

  // Derive the active glossary item based on current language and selected key
  const activeGlossaryItem = React.useMemo(() => {
    if (!selectedGlossaryKey) return null;
    if (selectedGlossaryKey.type === 'override') {
      const entry = SACRED_GLOSSARY_OVERRIDE[selectedGlossaryKey.key];
      return entry ? (entry[language] || entry.hi || entry.en) : null;
    }
    const langList = sakhi.wordMeanings?.[language];
    if (langList && langList[selectedGlossaryKey.index]) {
      return langList[selectedGlossaryKey.index];
    }
    const fallbackList = sakhi.wordMeanings?.hi || sakhi.wordMeanings?.pb || sakhi.wordMeanings?.en || [];
    return fallbackList[selectedGlossaryKey.index] || null;
  }, [selectedGlossaryKey, language, sakhi.wordMeanings]);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(false);

  // --- SACRED BREATHING CYCLES STATE ---
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold-out'>('inhale');
  const [breathingMuted, setBreathingMuted] = useState<boolean>(true);

  // --- UPGRADED STUDY & REFLECTION TOOLS STATES ---
  const [isBellEnabled, setIsBellEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_bell_enabled');
      return saved !== 'false'; // Default to true
    }
    return true;
  });

  const [highlightColor, setHighlightColor] = useState<'none' | 'gold' | 'saffron' | 'emerald'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sahebworld_highlight_sakhi_${sakhi.number}`);
      return (saved as any) || 'none';
    }
    return 'none';
  });

  const [stickyNote, setStickyNote] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sahebworld_note_sakhi_${sakhi.number}`);
      return saved || '';
    }
    return '';
  });

  const [dailyGoal, setDailyGoal] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_daily_goal_mins');
      return saved ? parseInt(saved, 10) : 0; // Default: none
    }
    return 0;
  });

  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [goalCompleted, setGoalCompleted] = useState<boolean>(false);

  // --- OFFLINE & BOOKMARK SYSTEM ---
  const [isOffline, setIsOffline] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !navigator.onLine;
    }
    return false;
  });

  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_sakhi_bookmarks');
      const list: number[] = saved ? JSON.parse(saved) : [];
      return list.includes(sakhi.number);
    } catch {
      return false;
    }
  });

  const [bookmarkToastMessage, setBookmarkToastMessage] = useState<string | null>(null);

  // Sync isBookmarked state when sakhi changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sahebworld_sakhi_bookmarks');
      const list: number[] = saved ? JSON.parse(saved) : [];
      setIsBookmarked(list.includes(sakhi.number));
    } catch {
      setIsBookmarked(false);
    }
  }, [sakhi.number]);

  // Online/Offline tracking
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Listen for global reading suite events (TTS, Highlight, Theme)
  useEffect(() => {
    const handleToggleTtsEvent = () => {
      handleToggleSpeech();
    };

    const handleHighlighterEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.color) {
        const color = customEvent.detail.color;
        if (color === 'saffron') {
          handleSaveHighlight('saffron');
        } else if (color === 'green') {
          handleSaveHighlight('emerald');
        } else if (color === 'yellow') {
          handleSaveHighlight('gold');
        } else {
          handleSaveHighlight('none');
        }
      }
    };

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.theme) {
        const thm = customEvent.detail.theme;
        if (thm === 'deep_sepia' || thm === 'sepia' || thm === 'pothi') {
          changeReadingTheme('sepia');
        } else if (thm === 'black' || thm === 'midnight' || thm === 'oled') {
          changeReadingTheme('oled');
        } else if (thm === 'netra' || thm === 'comfort') {
          changeReadingTheme('contrast');
        } else {
          changeReadingTheme('default');
        }
      }
    };

    const handleFrameworkEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      const fw = customEvent.detail?.framework;
      if (fw) {
        setIsPageFlipMode(fw === 'flip');
        if (fw === 'parallel') {
          setShowMoolvani(true);
        }
      }
    };


    const handleToggleVisraamEvent = () => {
      setIsVisraamHighlightEnabled(!isVisraamHighlightEnabled);
    };

    const handleAutoScrollToggled = (e: any) => {
      if (e.detail?.active !== undefined) {
        setIsAkhandScrollActive(e.detail.active);
      } else {
        setIsAkhandScrollActive(!isAkhandScrollActive);
      }
      if (e.detail?.speed) {
        setAutoScrollSpeed(e.detail.speed);
      }
    };

    window.addEventListener('sahebworld_autoscroll_toggled', handleAutoScrollToggled);
    window.addEventListener('sahebworld_toggle_tts', handleToggleTtsEvent);
    window.addEventListener('sahebworld_highlighter_changed', handleHighlighterEvent);
    window.addEventListener('sahebworld_reader_theme_changed', handleThemeEvent);
    window.addEventListener('sahebworld_framework_changed', handleFrameworkEvent as EventListener);
    
    return () => {
      window.removeEventListener('sahebworld_autoscroll_toggled', handleAutoScrollToggled);
      window.removeEventListener('sahebworld_toggle_tts', handleToggleTtsEvent);
      window.removeEventListener('sahebworld_highlighter_changed', handleHighlighterEvent);
      window.removeEventListener('sahebworld_reader_theme_changed', handleThemeEvent);
      window.removeEventListener('sahebworld_framework_changed', handleFrameworkEvent as EventListener);
    };
  }, [sakhi, language, isSpeaking, ttsRate, isZenMode, isLarivaarMode, isVisraamHighlightEnabled, isAkhandScrollActive, globalAutoScrollSpeed]);

  // Sync active reading state to localStorage for the global Reading Time / Progress calculations
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activeText = `${sakhi.text[language] || sakhi.text.hi} ${sakhi.bhavarth[language] || sakhi.bhavarth.hi}`;
      const activeTitle = `${language === 'pb' ? 'ਸਾਖੀ ਸੰਖਿਆ' : language === 'en' ? 'Sakhi No.' : 'साखी संख्या'} ${sakhi.number}`;
      const totalSteps = 10;
      const progressPercent = Math.round((currentStep / totalSteps) * 100);

      localStorage.setItem('sahebworld_current_reading_text', activeText);
      localStorage.setItem('sahebworld_current_reading_title', activeTitle);
      localStorage.setItem('sahebworld_current_reading_progress', String(progressPercent));
      window.dispatchEvent(new CustomEvent('sahebworld_current_reading_updated'));
    }
  }, [sakhi, currentStep, language, maxUnlockedEightStep]);

  const handleToggleBookmark = () => {
    sacredHaptics.lightTap();
    try {
      const saved = localStorage.getItem('sahebworld_sakhi_bookmarks');
      let list: number[] = saved ? JSON.parse(saved) : [];
      let nextState = false;
      if (list.includes(sakhi.number)) {
        list = list.filter((n) => n !== sakhi.number);
        nextState = false;
      } else {
        list.push(sakhi.number);
        nextState = true;
      }
      localStorage.setItem('sahebworld_sakhi_bookmarks', JSON.stringify(list));
      setIsBookmarked(nextState);

      const toastMsg = nextState
        ? (language === 'pb' ? 'ਸਾਖੀ ਬੁੱਕਮਾਰਕ ਕੀਤੀ ਗਈ!' : language === 'en' ? 'Sakhi bookmarked successfully!' : 'साखी सफलतापूर्वक बुकमार्क की गई!')
        : (language === 'pb' ? 'ਬੁੱਕਮਾਰਕ ਹਟਾਇਆ ਗਿਆ!' : language === 'en' ? 'Sakhi removed from bookmarks!' : 'साखी बुकमार्क से हटाई गई!');

      setBookmarkToastMessage(toastMsg);
      setTimeout(() => setBookmarkToastMessage(null), 2500);
    } catch (e) {
      console.error(e);
    }
  };
  const [showImageGenerator, setShowImageGenerator] = useState<boolean>(false);
  const [lastReadSakhiNo, setLastReadSakhiNo] = useState<number | null>(null);
  const [isAutoCorrecting, setIsAutoCorrecting] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  // Save current step reading progress to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`sahebworld_step_sakhi_${sakhi.number}`, String(currentStep));
    }
  }, [currentStep, sakhi.number]);

  // Automated, serene breathing cycle loop for Step 3 Contemplation
  useEffect(() => {
    if (currentStep !== 3) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        if (prev === 'exhale') return 'hold-out';
        return 'inhale';
      });
    }, 4000); // 4 seconds per phase for peaceful deep breathing

    return () => clearInterval(interval);
  }, [currentStep]);

  // Synchronize state when sakhi changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem(`sahebworld_step_sakhi_${sakhi.number}`);
      setCurrentStep(savedStep ? (parseInt(savedStep, 10) as StudyStep) : 1);

      const savedMaxFive = localStorage.getItem(`sahebworld_max_unlocked_step_sakhi_${sakhi.number}`);
      setMaxUnlockedStep(savedMaxFive ? parseInt(savedMaxFive, 10) : 1);

      const savedMaxTen = localStorage.getItem(`sahebworld_max_unlocked_eight_step_sakhi_${sakhi.number}`);
      setMaxUnlockedEightStep(savedMaxTen ? parseInt(savedMaxTen, 10) : 1);

      const savedHighlight = localStorage.getItem(`sahebworld_highlight_sakhi_${sakhi.number}`);
      setHighlightColor((savedHighlight as any) || 'none');

      const savedNote = localStorage.getItem(`sahebworld_note_sakhi_${sakhi.number}`);
      setStickyNote(savedNote || '');

      try {
        const savedLineHighlights = localStorage.getItem(`sahebworld_line_highlights_sakhi_${sakhi.number}`);
        setLineHighlights(savedLineHighlights ? JSON.parse(savedLineHighlights) : {});
      } catch {
        setLineHighlights({});
      }

      // Record this sakhi as the last read
      const currentLast = localStorage.getItem('sahebworld_last_sakhi_id');
      if (currentLast && parseInt(currentLast, 10) !== sakhi.number) {
        setLastReadSakhiNo(parseInt(currentLast, 10));
      }
      localStorage.setItem('sahebworld_last_sakhi_id', String(sakhi.number));
    }
  }, [sakhi.number]);

  // Handle countdown timer logic
  useEffect(() => {
    if (dailyGoal > 0 && !goalCompleted) {
      setTimerSecondsLeft(dailyGoal * 60);
      setIsTimerActive(true);
    } else {
      setIsTimerActive(false);
      setTimerSecondsLeft(0);
    }
  }, [dailyGoal, goalCompleted]);

  useEffect(() => {
    if (isTimerActive && timerSecondsLeft > 0) {
      timerRef.current = window.setTimeout(() => {
        setTimerSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsTimerActive(false);
            setGoalCompleted(true);
            handleGoalCompletionCelebration();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isTimerActive, timerSecondsLeft]);

  const handleGoalCompletionCelebration = () => {
    try {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.55 }
      });
    } catch {}

    if (isBellEnabled) {
      try {
        satyanaamAudio.playStepCompletionChime();
        satyanaamAudio.ringSacredBell();
      } catch {
        // Safe fallthrough
      }
    }
    // Open the gorgeous Rose Petal Shower celebration modal
    onOpenBlessing(
      language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਪਾਠ ਟੀਚਾ ਪੂਰਨ!' : language === 'hi' ? 'दैनिक पाठ लक्ष्य पूर्ण!' : 'Daily Reading Goal Completed!',
      language === 'pb' 
        ? `ਆਪ ਜੀ ਨੇ ਅੱਜ ਦਾ ${dailyGoal} ਮਿੰਟ ਦਾ ਸਵੈ-ਅਧਿਐਨ ਲਕਸ਼ ਸਫ਼ਲਤਾਪੂਰਵਕ ਪੂਰਾ ਕਰ ਲਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਕਿਰਪਾ ਆਪ ਜੀ ਉੱਤੇ ਸਦਾ ਬਣੀ ਰਹੇ!`
        : language === 'hi'
        ? `आपने आज का ${dailyGoal} मिनट का स्वाध्याय लक्ष्य सफलतापूर्वक पूर्ण कर लिया है। सतगुरु कबीर साहेब की पावन छत्रछाया आप पर सदा बनी रहे!`
        : `You have successfully completed your daily ${dailyGoal}-minute Swadhyay goal. May Satguru Kabir Saheb's grace guide you always!`
    );
  };

  const handleToggleBell = () => {
    const newVal = !isBellEnabled;
    setIsBellEnabled(newVal);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_bell_enabled', String(newVal));
    }
    if (newVal) {
      try {
        satyanaamAudio.ringSacredBell();
      } catch {
        // Safe
      }
    }
  };

  const handleSaveHighlight = (color: 'none' | 'gold' | 'saffron' | 'emerald') => {
    setHighlightColor(color);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`sahebworld_highlight_sakhi_${sakhi.number}`, color);
    }
    if (isBellEnabled) {
      try { satyanaamAudio.ringSacredBell(); } catch {}
    }
  };

  const handleSaveStickyNote = (val: string) => {
    setStickyNote(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`sahebworld_note_sakhi_${sakhi.number}`, val);
    }
  };

  const handleSaveNoteToDiary = () => {
    if (!stickyNote.trim()) return;
    onSaveToDiary(stickyNote.trim());
    setReflectionSavedToast(true);
    setTimeout(() => setReflectionSavedToast(false), 3000);
    if (isBellEnabled) {
      try { satyanaamAudio.ringSacredBell(); } catch {}
    }
  };

  // Sync ambient sound cleanup
  useEffect(() => {
    return () => {
      // Ensure we stop the ambient sound loop if started in this reading container
      if (isAmbientPlaying) {
        satyanaamAudio.stopDhun();
      }
    };
  }, [isAmbientPlaying]);

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  const stepMeta = [
    {
      step: 1 as StudyStep,
      title: t.step1Title,
      subtitle: t.step1Subtitle,
      icon: BookOpen,
    },
    {
      step: 2 as StudyStep,
      title: t.step2Title,
      subtitle: t.step2Subtitle,
      icon: Lightbulb,
    },
    {
      step: 3 as StudyStep,
      title: t.step3Title,
      subtitle: t.step3Subtitle,
      icon: Compass,
    },
    {
      step: 4 as StudyStep,
      title: t.step4Title,
      subtitle: t.step4Subtitle,
      icon: CheckCircle2,
    },
    {
      step: 5 as StudyStep,
      title: t.step5Title,
      subtitle: t.step5Subtitle,
      icon: HeartHandshake,
    },
  ];

  // Font size classes resolver
  const fontSizes: Record<string, string> = {
    small: 'text-lg sm:text-xl sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    normal: 'text-xl sm:text-2xl sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    medium: 'text-2xl sm:text-3xl sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    large: 'text-[1.65rem] sm:text-4xl sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    xlarge: 'text-3xl sm:text-5xl font-bold sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    xl: 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
    elderly: 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-[1.85] sm:leading-[2] sacred-verse-typography [word-break:keep-all] [overflow-wrap:break-word] break-words',
  };

  // Strictly enforce Night Mode theme variables (background colors, text contrast, and gold accents)
  const isNightTheme = themeMode === 'mystic_dark' || readingTheme === 'oled';
  const isFlowTheme = themeMode === 'flow_state' || readingTheme === 'flow_state';

  // Theme configuration computed for specific reading modes
  const hasWp = !!globalWallpaper;
  const rc = {
    bg: isFlowTheme
      ? (hasWp ? 'rgba(15, 23, 42, 0.72)' : '#0F172A')
      : readingTheme === 'sepia'
      ? (hasWp ? 'rgba(250, 244, 232, 0.80)' : '#FAF4E8')
      : isNightTheme
      ? (hasWp ? 'rgba(10, 8, 6, 0.72)' : '#0A0806')
      : readingTheme === 'contrast'
      ? (hasWp ? 'rgba(236, 239, 241, 0.84)' : '#ECEFF1')
      : theme.bg,
    cardBg: isFlowTheme
      ? (hasWp ? 'rgba(30, 34, 56, 0.76)' : '#1E2238')
      : readingTheme === 'sepia'
      ? (hasWp ? 'rgba(255, 253, 249, 0.86)' : '#FFFDF9')
      : isNightTheme
      ? (hasWp ? 'rgba(24, 19, 14, 0.76)' : '#18130E')
      : readingTheme === 'contrast'
      ? (hasWp ? 'rgba(255, 255, 255, 0.88)' : '#FFFFFF')
      : theme.cardBg,
    text: isFlowTheme ? '#FEF3C7' : readingTheme === 'sepia' ? '#2E1C0C' : isNightTheme ? '#FFFDF7' : readingTheme === 'contrast' ? '#1C2833' : theme.textPrimary,
    textSecondary: isFlowTheme ? '#FDE68A' : readingTheme === 'sepia' ? '#6B4C2C' : isNightTheme ? '#FDE68A' : readingTheme === 'contrast' ? '#566573' : theme.textSecondary,
    textMuted: isFlowTheme ? '#CBD5E1' : readingTheme === 'sepia' ? '#7D5E3C' : isNightTheme ? '#E2D9C8' : readingTheme === 'contrast' ? '#5D6D7E' : theme.textMuted,
    accent: isFlowTheme ? '#FBBF24' : readingTheme === 'sepia' ? '#B87828' : isNightTheme ? '#F59E0B' : readingTheme === 'contrast' ? '#117A65' : theme.accentGold,
    accentLight: isFlowTheme ? 'rgba(49, 46, 129, 0.75)' : readingTheme === 'sepia' ? 'rgba(251, 232, 200, 0.80)' : isNightTheme ? 'rgba(45, 32, 18, 0.80)' : readingTheme === 'contrast' ? '#E8F8F5' : theme.accentGoldLight,
    maroon: isFlowTheme ? '#FDE68A' : readingTheme === 'sepia' ? '#8C2818' : isNightTheme ? '#FEF3C7' : readingTheme === 'contrast' ? '#922B21' : theme.sacredMaroon,
    border: isFlowTheme ? 'rgba(251, 191, 36, 0.35)' : readingTheme === 'sepia' ? '#E4D5BE' : isNightTheme ? 'rgba(253, 230, 138, 0.25)' : readingTheme === 'contrast' ? '#BDC3C7' : theme.cardBorder,
    borderOrnament: isFlowTheme ? 'rgba(251, 191, 36, 0.45)' : readingTheme === 'sepia' ? '#D9C19E' : isNightTheme ? 'rgba(253, 230, 138, 0.35)' : readingTheme === 'contrast' ? '#BDC3C7' : theme.borderOrnament,
    stepActive: isFlowTheme
      ? (hasWp ? 'rgba(40, 37, 89, 0.78)' : '#282559')
      : readingTheme === 'sepia'
      ? (hasWp ? 'rgba(245, 228, 196, 0.82)' : '#F5E4C4')
      : isNightTheme
      ? (hasWp ? 'rgba(42, 32, 22, 0.78)' : '#2A2016')
      : readingTheme === 'contrast'
      ? '#D5F5E3'
      : theme.stepActiveBg,
  };

  const handleToggleSpeech = (customText?: string) => {
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speechReciter.setRate(ttsRate);

      let narrationText = customText;
      if (!narrationText) {
        const couplet = sakhi.text[language] || sakhi.text.hi;
        const bhavarth = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
        const contemplation = sakhi.contemplation[language] || sakhi.contemplation.hi;

        if (narrationMode === 'couplet') {
          narrationText = couplet;
        } else if (narrationMode === 'couplet_bhavarth') {
          narrationText = `${couplet}। भावार्थ: ${bhavarth}`;
        } else {
          narrationText = `${couplet}। भावार्थ: ${bhavarth}। आत्म चिंतन: ${contemplation}`;
        }
      }

      speechReciter.speak(
        narrationText,
        language,
        () => setIsSpeaking(false),
        () => setIsSpeaking(false)
      );
    }
  };

  const handleToggleAmbient = () => {
    if (isAmbientPlaying) {
      satyanaamAudio.stopDhun();
      setIsAmbientPlaying(false);
    } else {
      satyanaamAudio.setLanguage(language);
      satyanaamAudio.setVolume(0.15); // soft low ambient focus volume
      satyanaamAudio.startDhun();
      setIsAmbientPlaying(true);
    }
  };

  const handleShare = async () => {
    const shareText = formatSakhiShareText(
      sakhi.text[language],
      sakhi.bhavarth[language],
      sakhi.contemplation[language],
      language,
      sakhi.number
    );

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${translations[language].appName} - Sakhi #${sakhi.number}`,
          text: shareText,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleSaveReflection = () => {
    if (!quickReflection.trim()) return;
    onSaveToDiary(quickReflection.trim());
    setQuickReflection('');
    setReflectionSavedToast(true);
    setTimeout(() => setReflectionSavedToast(false), 3000);
  };

  const renderUnlockNextButton = (stepNum: number) => {
    if (maxUnlockedEightStep === stepNum && stepNum < 11) {
      return (
        <div className="pt-3 border-t flex justify-end animate-pulse mt-2" style={{ borderColor: rc.border }}>
          <button
            type="button"
            onClick={() => handleUnlockNextEightStep(stepNum)}
            style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
            className="px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-102 active:scale-95 transition"
          >
            <span>
              {language === 'pb'
                ? `ਚਰਨ ${stepNum} ਪੂਰਾ ਕਰੋ (ਅਗਲਾ ਚਰਨ ਅਨਲੌਕ ਕਰੋ)`
                : language === 'en'
                ? `Complete Step ${stepNum} (Unlock Step ${stepNum + 1})`
                : `चरण ${stepNum} पूरा करें (अगला चरण अनलॉक करें)`}
            </span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      );
    }
    return null;
  };

  const renderUnlockNextFiveStepButton = (stepNum: number) => {
    if (maxUnlockedStep === stepNum && stepNum < 5) {
      return (
        <div className="pt-3 border-t flex justify-end animate-pulse mt-2" style={{ borderColor: rc.border }}>
          <button
            type="button"
            onClick={handleUnlockNextStep}
            style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
            className="px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-102 active:scale-95 transition"
          >
            <span>
              {language === 'pb'
                ? `ਚਰਨ ${stepNum} ਪੂਰਾ ਕਰੋ (ਅਗਲਾ ਚਰਨ ਅਨਲੌਕ ਕਰੋ)`
                : language === 'en'
                ? `Complete Step ${stepNum} (Unlock Step ${stepNum + 1})`
                : `चरण ${stepNum} पूरा करें (अगला चरण अनलॉक करें)`}
            </span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      );
    }
    return null;
  };

  const renderLockedStepCard = (stepNum: number) => {
    return (
      <div
        id={`eightstep-card-${stepNum}`}
        style={{ backgroundColor: rc.bg, borderColor: rc.border }}
        className="p-6 rounded-2xl border border-dashed flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden bg-opacity-75 min-h-[120px]"
      >
        <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
          <Lock className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h4 style={{ color: rc.maroon }} className="font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {language === 'pb'
                ? `ਚਰਨ ${stepNum} (ਲੌਕ ਹੈ)`
                : language === 'en'
                ? `Step ${stepNum} (Locked)`
                : `चरण ${stepNum} (लॉक है)`}
            </span>
          </h4>
          <p className="text-xs sm:text-sm font-serif font-bold text-amber-800 dark:text-amber-300">
            {language === 'pb'
              ? `ਅਗਲੇ ਵਿੱਚ ਜਾਣ ਲਈ ਪਹਿਲਾਂ ਇਸ ਚਰਨ ਨੂੰ ਪੂਰਾ ਕੀਜੀਏ।`
              : language === 'en'
              ? `To go to the next step, please complete this step first.`
              : `अगले में जाने के लिए पहले इस चरण को पूरा कीजिए।`}
          </p>
          <p className="text-[0.6875rem] font-serif" style={{ color: rc.textMuted }}>
            {language === 'pb'
              ? `(ਚਰਨ ${stepNum} ਅਨਲੌਕ ਕਰਨ ਲਈ ਪਹਿਲਾਂ ਚਰਨ ${stepNum - 1} ਪੂਰਾ ਕਰੋ)`
              : language === 'en'
              ? `(To unlock Step ${stepNum}, complete Step ${stepNum - 1} first)`
              : `(चरण ${stepNum} अनलॉक करने के लिए पहले चरण ${stepNum - 1} पूरा करें)`}
          </p>
        </div>
      </div>
    );
  };

  const wordBreakdown = sakhi.wordMeanings[language] || sakhi.wordMeanings.hi || [];

  // Split couplet into interactive clickable words matching the glossary dictionary
  const renderInteractiveCouplet = (text: string) => {
    const formatted = formatCoupletString(text);
    const lines = formatted.split('\n');
    const hasAnyHighlight = Object.keys(lineHighlights).length > 0;

    const highlightStyles: Record<string, { bg: string; border: string; text: string; badge: string; name: string }> = {
      saffron: {
        bg: 'bg-amber-100/90 dark:bg-amber-950/80',
        border: 'border-amber-500 border-l-4 border-l-amber-600 shadow-sm',
        text: 'text-amber-950 dark:text-amber-100',
        badge: 'bg-amber-500 text-white',
        name: 'केसरिया (Saffron Gold)',
      },
      emerald: {
        bg: 'bg-emerald-100/90 dark:bg-emerald-950/80',
        border: 'border-emerald-500 border-l-4 border-l-emerald-600 shadow-sm',
        text: 'text-emerald-950 dark:text-emerald-100',
        badge: 'bg-emerald-600 text-white',
        name: 'मरकत (Emerald Green)',
      },
      rose: {
        bg: 'bg-rose-100/90 dark:bg-rose-950/80',
        border: 'border-rose-500 border-l-4 border-l-rose-600 shadow-sm',
        text: 'text-rose-950 dark:text-rose-100',
        badge: 'bg-rose-600 text-white',
        name: 'शाही (Royal Rose)',
      },
      sky: {
        bg: 'bg-sky-100/90 dark:bg-sky-950/80',
        border: 'border-sky-500 border-l-4 border-l-sky-600 shadow-sm',
        text: 'text-sky-950 dark:text-sky-100',
        badge: 'bg-sky-600 text-white',
        name: 'नीलम (Sky Blue)',
      },
    };

    return (
      <div 
        className="sakhi-two-line-doha-block swadhyay-reader-container reader-container-root space-y-3 relative select-none"
        onMouseUp={handleTextSelectionCheck}
        onTouchEnd={handleTextSelectionCheck}
      >
        {/* Play-Verse Button & Line Highlighting Toolbar Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[0.6875rem] px-3 py-2 bg-amber-500/10 dark:bg-amber-400/10 rounded-2xl border border-amber-500/20">
          <div className="flex items-center gap-2">
            {/* Dedicated Play-Verse Button (Reads Current Sakhi Verse Aloud using Web Speech API) */}
            <button
              type="button"
              onClick={handlePlayVerseOnly}
              style={{
                backgroundColor: isPlayingVerseOnly ? '#8B2500' : theme.buttonPrimaryBg,
                color: isPlayingVerseOnly ? '#FFFFFF' : theme.buttonPrimaryText,
              }}
              className="px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm hover:opacity-90 active:scale-95 transition cursor-pointer"
              title={
                language === 'pb'
                  ? 'ਕੇਵਲ ਦੋਹਾ ਪਾਠ ਸੁਣੋ (Web Speech API)'
                  : language === 'en'
                  ? 'Play current Sakhi verse aloud'
                  : 'केवल साखी दोहा का पाठ सुनें (Web Speech API)'
              }
            >
              {isPlayingVerseOnly ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                  <span>{language === 'pb' ? 'ਦੋਹਾ ਰੋਕੋ' : language === 'en' ? 'Stop Verse' : 'दोहा रोकें'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'pb' ? 'ਪਵਿੱਤਰ ਦੋਹਾ ਸੁਣੋ' : language === 'en' ? 'Play Verse' : 'पावन दोहा सुनें'}</span>
                </>
              )}
            </button>

            <span className="hidden sm:inline-block text-[0.6875rem] font-medium text-amber-800 dark:text-amber-200">
              {language === 'pb'
                ? 'ਕਿਸੇ ਵੀ ਸ਼ਬਦ ਜਾਂ ਵਾਕੰਸ਼ ਨੂੰ ਚੁਣ ਕੇ ਸਿਧਾਂਤ ਨੋਟ ਬਣਾਓ'
                : language === 'en'
                ? 'Select phrase to save as Siddhant Note'
                : 'किसी भी शब्द या अंश को चुनकर सिद्धांत नोट बनाएं'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {siddhantHighlights.length > 0 && (
              <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-200 font-mono font-bold">
                {siddhantHighlights.length} {language === 'pb' ? 'ਸਿਧਾਂਤ' : language === 'en' ? 'Siddhant' : 'सिद्धांत'}
              </span>
            )}
            {hasAnyHighlight && (
              <button
                type="button"
                onClick={handleClearAllLineHighlights}
                className="text-[0.625rem] px-2 py-0.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition font-bold cursor-pointer"
              >
                {language === 'pb' ? 'ਸਭ ਹਟਾਓ' : language === 'en' ? 'Clear Lines' : 'रेखांकन हटाएं'}
              </button>
            )}
          </div>
        </div>

        {/* Selected Phrase Toolbar: Save as Siddhant Note in Spiritual Diary */}
        {selectedPhrase && (
          <div className="p-2.5 bg-gradient-to-r from-amber-500/15 via-amber-600/15 to-amber-700/15 border border-amber-500/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-2 animate-fadeIn shadow-xs">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-amber-950 dark:text-amber-100 min-w-0 max-w-full">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 animate-pulse" />
              <span className="truncate">"{selectedPhrase}"</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleSaveSiddhantNote()}
                className="px-3.5 py-1.5 bg-[#8B2500] hover:bg-[#7C1D00] text-white rounded-xl text-xs font-bold font-serif flex items-center gap-1.5 shadow-sm hover:scale-102 active:scale-95 transition cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>
                  {language === 'pb'
                    ? 'ਸਿਧਾਂਤ ਨੋਟ ਵਜੋਂ ਸੁਰੱਖਿਅਤ ਕਰੋ'
                    : language === 'en'
                    ? 'Save as Siddhant Note'
                    : 'सिद्धांत नोट के रूप में सहेजें'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPhrase('')}
                className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-gray-500 cursor-pointer"
                title="Cancel selection"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Siddhant Saved Notification Toast */}
        {siddhantSavedToast && (
          <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-between gap-2 text-xs font-serif text-emerald-950 dark:text-emerald-100 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold truncate">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="truncate">
                {language === 'pb'
                  ? `ਸਿਧਾਂਤ ਨੋਟ ਆਤਮਿਕ ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਿਆ (ਸਾਖੀ #${sakhi.number})!`
                  : language === 'en'
                  ? `Saved as Siddhant Note in Spiritual Diary (Sakhi #${sakhi.number})!`
                  : `सिद्धांत नोट आध्यात्मिक दैनिकी में सहेज लिया गया (साखी #${sakhi.number})!`}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSaveToDiary(`[सिद्धांत सूत्र]: "${siddhantSavedToast.phrase}"`)}
              className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[0.6875rem] hover:bg-emerald-700 transition cursor-pointer shrink-0"
            >
              {language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਦੇਖੋ' : language === 'en' ? 'Open Diary' : 'दैनिकी में देखें'}
            </button>
          </div>
        )}

        {focusRuler && (
          <div 
            style={{ backgroundColor: rc.accentLight, borderColor: rc.accent }}
            className="absolute left-1 right-1 h-12 top-1/2 -translate-y-1/2 pointer-events-none rounded border-y border-dashed opacity-35 animate-pulse z-0"
          />
        )}
        
        {lines.map((line, lIdx) => {
          const activeColorKey = lineHighlights[lIdx];
          const activeStyle = activeColorKey ? highlightStyles[activeColorKey] : null;
          const processedLine = isLarivaarMode ? line.replace(/\s+/g, '') : line;
          const words = processedLine.split(/(\s+)/);

          return (
            <div
              key={lIdx}
              style={{
                direction: 'ltr',
                textAlign: 'center',
              }}
              className={`group relative transition-all duration-200 rounded-2xl p-3 sm:p-4 border reader-selectable-line select-text ${
                activeStyle
                  ? `${activeStyle.bg} ${activeStyle.border}`
                  : 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              {/* Top Action Bar for Line: Badge + Line Label on left, Copy & Theme on right */}
              <div className="flex items-center justify-between border-b border-amber-500/10 pb-1.5 mb-2.5 text-xs select-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-[0.625rem] font-bold font-serif opacity-60" style={{ color: rc.textSecondary }}>
                    {language === 'pb' ? `ਪੰਕਤੀ ${lIdx + 1}` : language === 'en' ? `Line ${lIdx + 1}` : `चरण ${lIdx + 1}`}
                  </span>
                  {activeColorKey && (
                    <span className={`text-[0.5625rem] font-black px-2 py-0.5 rounded-full shadow-xs ${activeStyle?.badge}`}>
                      ✨ {language === 'pb' ? 'ਹਾਈਲਾਈਟਡ' : language === 'en' ? 'Highlighted' : 'रंगीन पावन पंक्ति'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(line);
                      sacredHaptics.lightTap();
                      setCopiedToast(true);
                      setTimeout(() => setCopiedToast(false), 2000);
                    }}
                    className="px-2 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 hover:bg-amber-500/20 border border-amber-500/30 shadow-2xs hover:scale-105 transition cursor-pointer flex items-center gap-1 text-[0.6875rem] font-bold"
                    title={language === 'pb' ? 'ਇਹ ਪੰਕਤੀ ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy Line' : 'यह पंक्ति कॉपी करें'}
                    aria-label="Copy line"
                  >
                    <Copy className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    <span style={{ color: rc.maroon }}>{language === 'pb' ? 'ਕਾਪੀ' : language === 'en' ? 'Copy' : 'कॉपी'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveLinePalette(activeLinePalette === lIdx ? null : lIdx)}
                    className="px-2 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 hover:bg-amber-500/20 border border-amber-500/30 shadow-2xs hover:scale-105 transition cursor-pointer flex items-center gap-1 text-[0.6875rem] font-bold"
                    title={language === 'pb' ? 'ਰੰਗ/ਹਾਇਲਾਈਟ' : language === 'en' ? 'Highlight Color' : 'रंग/हाइलाइट'}
                    aria-label="Toggle highlight palette"
                  >
                    <Palette className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    <span style={{ color: rc.maroon }}>{language === 'pb' ? 'ਰੰਗ' : language === 'en' ? 'Theme' : 'रंग'}</span>
                  </button>
                </div>
              </div>

              {/* Color Palette Popover for line */}
              {activeLinePalette === lIdx && (
                <div className="my-2 p-2.5 rounded-xl bg-white dark:bg-[#1A140E] border border-amber-500/40 shadow-xl flex items-center justify-center gap-2 animate-fadeIn z-30">
                  <span className="text-[0.625rem] font-bold text-amber-950 dark:text-amber-100">
                    {language === 'hi' ? 'रंग चुनें:' : language === 'pb' ? 'ਰੰਗ ਚੁਣੋ:' : 'Color:'}
                  </span>
                  {(['saffron', 'emerald', 'rose', 'sky'] as const).map((colorKey) => (
                    <button
                      key={colorKey}
                      type="button"
                      onClick={() => {
                        handleSetLineHighlight(lIdx, colorKey);
                        setActiveLinePalette(null);
                      }}
                      className={`w-6 h-6 rounded-full border-2 transition cursor-pointer transform hover:scale-110 shadow-xs ${
                        colorKey === 'saffron' ? 'bg-amber-300 border-amber-500' :
                        colorKey === 'emerald' ? 'bg-emerald-300 border-emerald-500' :
                        colorKey === 'rose' ? 'bg-rose-300 border-rose-500' :
                        'bg-sky-300 border-sky-500'
                      }`}
                      title={highlightStyles[colorKey].name}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      handleSetLineHighlight(lIdx, 'clear');
                      setActiveLinePalette(null);
                    }}
                    className="px-2 py-0.5 rounded-lg text-[0.625rem] font-bold bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 cursor-pointer"
                  >
                    {language === 'pb' ? 'ਹਟਾਓ' : language === 'en' ? 'Remove' : 'हटाएं'}
                  </button>
                </div>
              )}

              {/* Line Words Rendering with Text Selection enabled */}
              <div className={`flex flex-wrap items-center gap-y-1.5 leading-[1.8] sm:leading-[1.9] select-text ${
                language === 'pb' ? 'justify-end' : 'justify-center'
              }`}>
                {words.map((word, wIdx) => {
                  const cleanWord = word.trim().replace(/[।॥,.\s()]/g, '');
                  let glossaryKey: { type: 'data'; index: number } | { type: 'override'; key: string } | null = null;
                  
                  const cleanLower = cleanWord.toLowerCase();
                  const overrideKey = Object.keys(SACRED_GLOSSARY_OVERRIDE).find(key => 
                    cleanWord.includes(key) || 
                    key.includes(cleanWord) ||
                    SACRED_GLOSSARY_OVERRIDE[key].hi.word.includes(cleanWord) ||
                    SACRED_GLOSSARY_OVERRIDE[key].pb.word.includes(cleanWord) ||
                    SACRED_GLOSSARY_OVERRIDE[key].en.word.toLowerCase().includes(cleanLower)
                  );

                  if (overrideKey) {
                    glossaryKey = { type: 'override', key: overrideKey };
                  } else if (cleanWord) {
                    const foundIndex = matchCoupletWordToGlossary(cleanWord, wordBreakdown);
                    if (foundIndex !== -1) {
                      glossaryKey = { type: 'data', index: foundIndex };
                    }
                  }

                  const sandhukkariTerm = findSandhukkariTerm(cleanWord);
                  const isSpiritualTerm = Boolean(sandhukkariTerm || glossaryKey);
                  const isSiddhantHighlighted = cleanWord.length > 1 && siddhantHighlights.some(ph => ph.includes(cleanWord) || (cleanWord.length > 3 && ph.toLowerCase().includes(cleanWord.toLowerCase())));
                  const isVisraamWord = isVisraamHighlightEnabled && ['कहै', 'कबीर', 'सुन', 'मन', 'भाई', 'साहेब', 'सतगुरु', 'नाम', 'ज्ञान', 'जीव', 'काल', 'माया', 'सुनि', 'ਸੁਣ', 'ਮਨ', 'ਸਤਿਗੁਰ'].some(p => cleanWord.includes(p));
                  const visraamStyle = isVisraamWord ? 'bg-amber-500/25 text-amber-950 dark:text-amber-100 ring-2 ring-amber-500/60 rounded px-1 font-black shadow-2xs' : '';

                  if (isSpiritualTerm) {
                    return (
                      <button
                        type="button"
                        key={wIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          sacredHaptics.lightTap();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setSmartTooltipTargetRect(rect);

                          if (sandhukkariTerm) {
                            setActiveSmartTerm(sandhukkariTerm);
                          } else if (glossaryKey) {
                            const meaningItem = glossaryKey.type === 'override' 
                              ? SACRED_GLOSSARY_OVERRIDE[glossaryKey.key][language] 
                              : (wordBreakdown[glossaryKey.index] || null);
                            if (meaningItem) {
                              const syntheticTerm: SandhukkariTerm = {
                                word: meaningItem.word,
                                punjabi: sakhi.wordMeanings.pb?.[glossaryKey.type === 'data' ? glossaryKey.index : 0]?.word || meaningItem.word,
                                transliteration: cleanWord,
                                category: 'sadhana',
                                rootEtymology: { hi: 'संत वाणी मूल शब्द', pb: 'ਸੰਤ ਬਾਣੀ ਮੂਲ ਸ਼ਬਦ', en: 'Spiritual Sant Bhasha term' },
                                literalMeaning: { hi: meaningItem.meaning, pb: meaningItem.meaning, en: meaningItem.meaning },
                                esotericMeaning: { hi: meaningItem.meaning, pb: meaningItem.meaning, en: meaningItem.meaning },
                              };
                              setActiveSmartTerm(syntheticTerm);
                            }
                          }
                          if (glossaryKey) {
                            setSelectedGlossaryKey(glossaryKey);
                          }
                        }}
                        style={{
                          ...activeFontStyle,
                          borderColor: rc.accent,
                          color: activeStyle ? undefined : rc.maroon,
                        }}
                        className={`cursor-pointer ${activeFontClass} font-bold border-b-2 border-dotted hover:bg-amber-500/15 transition px-0.5 rounded inline-block whitespace-nowrap align-baseline focus:outline-none focus:ring-1 focus:ring-amber-400 select-text ${
                          isSiddhantHighlighted ? 'bg-amber-300/80 dark:bg-amber-700/70 text-amber-950 dark:text-amber-50 ring-1 ring-amber-500/60 rounded px-1' : ''
                        } ${visraamStyle} ${activeStyle ? activeStyle.text : ''}`}
                        title={
                          isVisraamWord
                            ? `${word} - विश्राम स्थल (Pause)`
                            : isSiddhantHighlighted
                            ? (language === 'pb' ? `ਸਿਧਾਂਤ ਨੋਟ (ਆਤਮਿਕ ਡਾਇਰੀ ਨਾਲ ਜੁੜਿਆ): ${word}` : language === 'en' ? `Siddhant Note: ${word}` : `सिद्धांत नोट (दैनिकी से सम्बद्ध): ${word}`)
                            : (language === 'pb' ? `ਸਾਹਿਤਕ ਅਰਥ: ${word} (ਟੈਪ ਕਰੋ)` : language === 'en' ? `Spiritual Term: ${word} (Tap to view definition)` : `साहित्य शब्दार्थ: ${word} (टैप करें)`)
                        }
                      >
                        <span>{word}</span>
                        {isVisraamWord && <span className="text-[0.625rem] text-amber-600 dark:text-amber-400 font-black ml-0.5 inline-block select-none">॥</span>}
                        {!isVisraamWord && <span className="text-[0.5625rem] opacity-70 text-amber-600 dark:text-amber-400 ml-0.5 inline-block select-none">✦</span>}
                      </button>
                    );
                  }

                  return (
                    <span 
                      key={wIdx} 
                      style={{ ...activeFontStyle, color: activeStyle ? undefined : rc.maroon }} 
                      className={`${activeFontClass} font-bold inline-block select-text ${
                        isSiddhantHighlighted ? 'bg-amber-300/80 dark:bg-amber-700/70 text-amber-950 dark:text-amber-50 ring-1 ring-amber-500/60 rounded px-1' : ''
                      } ${visraamStyle} ${activeStyle ? activeStyle.text : ''}`}
                      title={
                        isVisraamWord
                          ? `${word} - विश्राम स्थल (Pause)`
                          : isSiddhantHighlighted
                          ? (language === 'pb' ? `ਸਿਧਾਂਤ ਨੋਟ: ${word}` : language === 'en' ? `Siddhant Note: ${word}` : `सिद्धांत नोट: ${word}`)
                          : undefined
                      }
                    >
                      {word}
                      {isVisraamWord && <span className="text-[0.625rem] text-amber-600 dark:text-amber-400 font-black ml-0.5">॥</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Multilingual UI titles for custom features
  const fLabels = {
    hi: {
      theme: 'थीम',
      themeMool: 'मूल',
      themePothi: 'पोथी',
      themeOled: 'ब्लैक',
      themeFlow: 'प्रवाह (Flow)',
      themeEye: 'नेत्र',
      font: 'फ़ॉन्ट',
      marker: 'पंक्ति गाइड',
      bgDhun: 'पृष्ठभूमि धुन',
      exitZen: 'सामान्य स्क्रीन (वापस आएं)',
      glossaryHeader: '।। पावन शब्दार्थ रहस्य ।।',
      close: 'बंद करें',
      zenModeBtn: 'जेन एकाग्रता',
      reflectionTitle: 'साधना चिंतन लेखन',
      contextHeading: 'साखी संदर्भ एवं मूल ध्वनि',
      bhavarthHeading: 'गहन आध्यात्मिक भावार्थ',
      listenRecitation: 'श्रवण',
      pauseRecitation: 'विश्राम',
      stepCountLabel: 'चरण',
      reflectionPlaceholder: 'अपने आध्यात्मिक अनुभव व विचार यहाँ लिखें...'
    },
    pb: {
      theme: 'ਥੀਮ',
      themeMool: 'ਮੂਲ',
      themePothi: 'ਪੋਥੀ',
      themeOled: 'ਬਲੈਕ',
      themeFlow: 'ਪ੍ਰਵਾਹ (Flow)',
      themeEye: 'ਨੇਤਰ',
      font: 'ਫੌਂਟ',
      marker: 'ਪੰਕਤੀ ਗਾਈਡ',
      bgDhun: 'ਪਿਛੋਕੜ ਧੁਨ',
      exitZen: 'ਆਮ ਸਕ੍ਰੀਨ (ਵਾਪਸ ਆਓ)',
      glossaryHeader: '।। ਪਾਵਨ ਸ਼ਬਦਾਰਥ ਰਹੱਸ ।।',
      close: 'ਬੰਦ ਕਰੋ',
      zenModeBtn: 'ZEN ਇਕਾਗਰਤਾ',
      reflectionTitle: 'ਸਾਧਨਾ ਚਿੰਤਨ ਲੇਖਨ',
      contextHeading: 'ਸਾਖੀ ਸੰਦਰਭ ਅਤੇ ਮੂਲ ਧੁਨੀ',
      bhavarthHeading: 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ',
      listenRecitation: 'ਸਰਵਣ',
      pauseRecitation: 'ਵਿਸ਼ਰਾਮ',
      stepCountLabel: 'ਚਰਣ',
      reflectionPlaceholder: 'ਆਪਣੇ ਅਨੁਭਵ ਇੱਥੇ ਲਿਖੋ...'
    },
    en: {
      theme: 'Theme',
      themeMool: 'App',
      themePothi: 'Parch',
      themeOled: 'OLED',
      themeFlow: 'Flow',
      themeEye: 'Contrast',
      font: 'Font',
      marker: 'Eye Guide',
      bgDhun: 'Ambient',
      exitZen: 'Normal Screen (Return)',
      glossaryHeader: '|| Sacred Word Glossary ||',
      close: 'Close',
      zenModeBtn: 'Zen Focus',
      reflectionTitle: 'Spiritual Notes',
      contextHeading: 'Context & Original Couplet Recitation',
      bhavarthHeading: 'Deep Spiritual Meaning (Bhavarth)',
      listenRecitation: 'Listen',
      pauseRecitation: 'Pause',
      stepCountLabel: 'Step',
      reflectionPlaceholder: 'Write your inner reflections and spiritual insights here...'
    }
  };

  const fl = fLabels[language] || fLabels.hi;

  if (isPageFlipMode) {
    return (
      <div className="w-full h-screen z-50 bg-white dark:bg-zinc-950">
        <PothiFlipBook
          pages={pothiPages}
          initialPage={pageFlipIndex}
          granthName={getLocalizedGranthaName(sakhi.grantha, language)}
          language={language}
          onLanguageChange={onChangeLanguage}
          themeMode={readingTheme === 'sepia' ? 'pothi' : readingTheme === 'oled' ? 'dark' : 'classic'}
          fontSize={fontSize === 'xlarge' ? 'xlarge' : fontSize === 'large' ? 'large' : fontSize === 'small' ? 'small' : 'normal'}
          onFontSizeChange={(size) => {
            const mapped: Record<string, 'small' | 'medium' | 'large' | 'xl'> = {
              small: 'small',
              normal: 'medium',
              large: 'large',
              xlarge: 'xl'
            };
            handleSetLocalFontSize(mapped[size] || 'medium');
          }}
          onPageChange={(idx) => setPageFlipIndex(idx)}
          onClose={() => {
            setIsPageFlipMode(false);
            setCurrentReadingMode('swadhyay');
          }}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        id="swadhyay-reader-container"
        style={{
          backgroundColor: rc.cardBg,
          borderColor: rc.border,
          color: rc.text,
        }}
        className={`rounded-2xl border backdrop-blur-md shadow-lg overflow-x-hidden flex flex-col transition-all duration-300 mx-auto w-full relative ${getWidthClass(widthMode)}`}
      >
      {/* 👈 👉 Swipe Gestures Floating Feedback */}
      {swipeToast && (
        <div 
          style={{ backgroundColor: rc.stepActive, borderColor: rc.accent, color: rc.maroon }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl border-2 backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-bold font-serif animate-bounce"
        >
          {swipeToast.direction === 'left' ? (
            <>
              <span>{language === 'pb' ? 'ਅਗਲੀ ਸਾਖੀ' : language === 'en' ? 'Next Sakhi' : 'अगली साखी'} #{swipeToast.sakhiNum}</span>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </>
          ) : (
            <>
              <ChevronLeft className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਪਿਛਲੀ ਸਾਖੀ' : language === 'en' ? 'Previous Sakhi' : 'पिछली साखी'} #{swipeToast.sakhiNum}</span>
            </>
          )}
        </div>
      )}

      {/* ⚠️ Offline Warning Toast */}
      {isOffline && (
        <div className="bg-amber-600/15 border-b border-amber-600/30 text-amber-900 dark:text-amber-200 px-4 py-2 text-xs font-serif font-bold text-center flex items-center justify-center gap-2 animate-fadeIn">
          <WifiOff className="w-4 h-4 text-amber-600 animate-pulse" />
          <span>
            {language === 'pb'
              ? 'ਤੁਸੀਂ ਆਫ਼ਲਾਈਨ ਹੋ। ਕੁਝ ਕਲਾਊਡ-ਸਿੰਕ ਕੀਤੇ ਫੀਚਰ ਸੀਮਿਤ ਹੋ ਸਕਦੇ ਹਨ।'
              : language === 'en'
              ? 'You are reading offline. Some cloud-synced features might be limited.'
              : 'आप ऑफ़लाइन स्वाध्याय कर रहे हैं। कुछ क्लाउड-सिंक्ड और संवादात्मक साधन सीमित हो सकते हैं।'}
          </span>
        </div>
      )}

      {/* 11-Step Progress Bar & Stepper Tabs */}
      <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex justify-between text-[0.625rem] font-bold mb-1.5 opacity-60">
          <span>{language === 'hi' ? '११-चरणीय स्वाध्याय प्रगति' : language === 'pb' ? '੧੧-ਚਰਨੀ ਸੁਆਧਿਆਇ ਪ੍ਰਗਤੀ' : '11-Step Swadhyay Progress'}</span>
          <span>{currentStep} / 11</span>
        </div>
        <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 11) * 100}%` }}
          />
        </div>

        {/* 11-Step Stepper Navigation Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 pt-2.5">
          {[
            { num: 1, label: language === 'pb' ? '੧. ਬਾਣੀ ਤੇ ਸਰਲ ਅਰਥ' : language === 'en' ? '1. Verse & Meaning' : '१. वाणी व सरल अर्थ' },
            { num: 2, label: language === 'pb' ? '੨. ਸੰਦਰਭ' : language === 'en' ? '2. Context' : '२. संदर्भ' },
            { num: 3, label: language === 'pb' ? '੩. ਸ਼ਬਦਾਰਥ' : language === 'en' ? '3. Vocab' : '३. शब्दार्थ' },
            { num: 4, label: language === 'pb' ? '੪. ਗਹਿਰਾ ਸਤਿਸੰਗ' : language === 'en' ? '4. Deep Satsang' : '४. गहरा सत्संग' },
            { num: 5, label: language === 'pb' ? '੫. ਕਵਿਜ਼' : language === 'en' ? '5. Quiz' : '५. बोध प्रश्न' },
            { num: 6, label: language === 'pb' ? '੬. ਤੱਤ-ਰਹੱਸ' : language === 'en' ? '6. Esoteric' : '६. रहस्य व तत्व' },
            { num: 7, label: language === 'pb' ? '੭. ਸਿੱਖਿਆ' : language === 'en' ? '7. Learning' : '७. मुख्य शिक्षा' },
            { num: 8, label: language === 'pb' ? '੮. ੪ ਗ੍ਰੰਥ ਪ੍ਰਮਾਣ' : language === 'en' ? '8. 4 Granths' : '८. ४ ग्रंथ प्रमाण' },
            { num: 9, label: language === 'pb' ? '੯. ਚਿੰਤਨ' : language === 'en' ? '9. Inquiry' : '९. चिंतन' },
            { num: 10, label: language === 'pb' ? '੧੦. ਯੋਗ' : language === 'en' ? '10. Yoga' : '१०. श्रवण/योग' },
            { num: 11, label: language === 'pb' ? '੧੧. ਆਸ਼ੀਰਵਾਦ' : language === 'en' ? '11. Blessing' : '११. आशीर्वाद' },
          ].map((st) => {
            const isUnlocked = st.num <= maxUnlockedEightStep;
            const isCurrent = currentStep === st.num;
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => {
                  if (isUnlocked) {
                    setCurrentStep(st.num as StudyStep);
                    sacredHaptics.lightTap();
                    const el = document.getElementById(`eightstep-card-${st.num}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                disabled={!isUnlocked}
                className={`min-h-[40px] sm:min-h-[30px] px-3 sm:px-2.5 py-1.5 sm:py-1 rounded-xl sm:rounded-lg text-[0.6875rem] sm:text-[0.625rem] font-bold font-serif whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${
                  isCurrent
                    ? 'bg-[#8B2500] text-white shadow-xs scale-[1.03]'
                    : isUnlocked
                    ? 'bg-amber-500/10 text-amber-900 dark:text-amber-200 hover:bg-amber-500/20'
                    : 'bg-stone-200/50 dark:bg-stone-800/50 text-stone-400 cursor-not-allowed opacity-50'
                }`}
              >
                {!isUnlocked && <Lock className="w-2.5 h-2.5" />}
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🔖 Bookmark Success Toast */}
      {bookmarkToastMessage && (
        <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-bold font-serif text-center flex items-center justify-center gap-2 animate-fadeIn shadow-inner">
          <Check className="w-4 h-4 text-white animate-pulse" />
          <span>{bookmarkToastMessage}</span>
        </div>
      )}

      {/* --- SADHANA READING MODE TOOLBAR --- */}
      <div
        style={{
          backgroundColor: rc.bg,
          borderColor: rc.border,
        }}
        className="px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-3 text-xs"
      >
        {/* Left Side: Theme, Font Size, Line Spacing, Font Face & Width Controls */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{fl.theme}:</span>
            </span>
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/15 flex-wrap gap-0.5">
              {[
                { id: 'default', label: fl.themeMool },
                { id: 'flow_state', label: fl.themeFlow },
                { id: 'sepia', label: fl.themePothi },
                { id: 'oled', label: fl.themeOled },
                { id: 'contrast', label: fl.themeEye }
              ].map(tObj => (
                <button
                  key={tObj.id}
                  type="button"
                  onClick={() => changeReadingTheme(tObj.id as any)}
                  style={{
                    backgroundColor: readingTheme === tObj.id ? rc.accent : 'transparent',
                    color: readingTheme === tObj.id ? '#FFFFFF' : rc.textSecondary,
                  }}
                  className="min-h-[38px] sm:min-h-[28px] px-2.5 sm:px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md font-bold text-[0.6875rem] sm:text-[0.625rem] transition cursor-pointer"
                >
                  {tObj.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              <span>{fl.font}:</span>
            </span>
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/15 gap-0.5">
              {['small', 'medium', 'large', 'xl', 'elderly'].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSetLocalFontSize(size as any)}
                  style={{
                    backgroundColor: localFontSize === size || (size === 'medium' && localFontSize === 'normal') ? rc.accent : 'transparent',
                    color: localFontSize === size || (size === 'medium' && localFontSize === 'normal') ? '#FFFFFF' : rc.textSecondary,
                  }}
                  className="min-h-[38px] sm:min-h-[28px] px-2.5 sm:px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md font-black text-[0.6875rem] sm:text-[0.625rem] uppercase transition cursor-pointer"
                >
                  {size === 'small' ? 'A-' : size === 'medium' ? 'A' : size === 'large' ? 'A+' : size === 'xl' ? 'A++' : '👵 A+++'}
                </button>
              ))}
            </div>
          </div>

          {/* Line Spacing (पंक्ति अंतराल) Controls */}
          <div className="flex items-center gap-1.5">
            <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1">
              <span>{language === 'pb' ? 'ਲਾਈਨ:' : language === 'en' ? 'Spacing:' : 'अंतराल:'}</span>
            </span>
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/15 gap-0.5">
              {[
                { id: 'small' as const, label: language === 'pb' ? 'ਘੱਟ' : language === 'en' ? 'Tight' : 'कम' },
                { id: 'medium' as const, label: language === 'pb' ? 'ਸੰਤੁਲਿਤ' : language === 'en' ? 'Balanced' : 'संतुलित' },
                { id: 'large' as const, label: language === 'pb' ? 'ਖੁੱਲ੍ਹਾ' : language === 'en' ? 'Airy' : 'खुला' },
              ].map(lhObj => (
                <button
                  key={lhObj.id}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setLineHeight(lhObj.id);
                  }}
                  style={{
                    backgroundColor: lineHeight === lhObj.id ? rc.accent : 'transparent',
                    color: lineHeight === lhObj.id ? '#FFFFFF' : rc.textSecondary,
                  }}
                  className="min-h-[38px] sm:min-h-[28px] px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md font-bold text-[0.6875rem] sm:text-[0.625rem] transition cursor-pointer"
                >
                  {lhObj.label}
                </button>
              ))}
            </div>
          </div>

          {/* Devanagari / Gurmukhi Font Style (Serif vs Sans) */}
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/15">
            {[
              { id: 'serif' as const, label: language === 'pb' ? 'ਪਾਰੰਪਰਿਕ' : language === 'en' ? 'Serif' : 'ग्रंथ' },
              { id: 'sans' as const, label: language === 'pb' ? 'ਸਰਲ' : language === 'en' ? 'Sans' : 'सरल' },
            ].map(ff => (
              <button
                key={ff.id}
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setFontFamily(ff.id);
                }}
                style={{
                  backgroundColor: fontFamily === ff.id ? rc.accent : 'transparent',
                  color: fontFamily === ff.id ? '#FFFFFF' : rc.textSecondary,
                }}
                className="min-h-[38px] sm:min-h-[28px] px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md font-bold text-[0.6875rem] sm:text-[0.625rem] transition cursor-pointer"
                title={ff.id === 'serif' ? 'Noto Serif Devanagari / Traditional' : 'Mukta / Noto Sans Clean'}
              >
                {ff.label}
              </button>
            ))}
          </div>

          {/* Spacious Granth Width Controls */}
          <div className="flex items-center gap-1.5">
            <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1">
              <Columns className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਵਿਸਤਾਰ:' : language === 'en' ? 'Canvas:' : 'विस्तार:'}</span>
            </span>
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/15">
              {[
                { id: 'wide', label: language === 'pb' ? 'ਵਿਸ਼ਾਲ (7XL)' : language === 'en' ? 'Spacious 7XL' : 'विशाल (7XL)' },
                { id: 'medium', label: language === 'pb' ? 'ਮੱਧਮ' : language === 'en' ? 'Medium' : 'मध्यम' },
              ].map(wObj => (
                <button
                  key={wObj.id}
                  type="button"
                  onClick={() => setWidthMode(wObj.id as any)}
                  style={{
                    backgroundColor: widthMode === wObj.id ? rc.accent : 'transparent',
                    color: widthMode === wObj.id ? '#FFFFFF' : rc.textSecondary,
                  }}
                  className="min-h-[38px] sm:min-h-[28px] px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md font-bold text-[0.6875rem] sm:text-[0.625rem] transition cursor-pointer"
                >
                  {wObj.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Guides & Zen Toggles */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Smart Reading Countdown Timer Widget */}
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-lg px-2 py-1 border border-amber-400/10" title="Daily Swadhyay Reading Goal">
            <Timer className={`w-3.5 h-3.5 ${isTimerActive ? 'animate-spin text-amber-500' : 'text-neutral-400'}`} />
            <select
              value={dailyGoal}
              onChange={(e) => {
                const mins = parseInt(e.target.value, 10);
                setDailyGoal(mins);
                setGoalCompleted(false);
                if (typeof window !== 'undefined') {
                  localStorage.setItem('sahebworld_daily_goal_mins', String(mins));
                }
              }}
              style={{ color: rc.text }}
              className="bg-transparent font-bold text-[0.625rem] focus:outline-none cursor-pointer max-w-[70px] sm:max-w-none"
            >
              <option value="0">{language === 'pb' ? 'ਟੀਚਾ ਚੁਣੋ' : language === 'en' ? 'Select Goal' : 'लक्ष्य चुनें'}</option>
              <option value="1">1 {language === 'pb' ? 'ਮਿੰਟ (ਪਰੀਖਣ)' : language === 'en' ? 'min (Test)' : 'मिनट (टेस्ट)'}</option>
              <option value="5">5 {language === 'pb' ? 'ਮਿੰਟ' : language === 'en' ? 'min' : 'मिनट'}</option>
              <option value="15">15 {language === 'pb' ? 'ਮਿੰਟ' : language === 'en' ? 'min' : 'मिनट'}</option>
              <option value="30">30 {language === 'pb' ? 'ਮਿੰਟ' : language === 'en' ? 'min' : 'मिनट'}</option>
            </select>

            {isTimerActive && timerSecondsLeft > 0 && (
              <span className="font-mono text-[0.625rem] font-bold text-amber-600 pl-1">
                {Math.floor(timerSecondsLeft / 60)}:{(timerSecondsLeft % 60).toString().padStart(2, '0')}
              </span>
            )}
            {goalCompleted && (
              <span className="text-[0.625rem] font-black text-emerald-600 animate-pulse pl-1">
                ✓ {language === 'pb' ? 'ਪੂਰਾ!' : language === 'en' ? 'Done!' : 'पूर्ण!'}
              </span>
            )}
          </div>

          {/* 100% Offline Ambient Sound Player for Deep Focus */}
          <AmbientSoundPlayer language={language} variant="compact" />

          {/* Akhand Scroll Toggle */}
          <button
            type="button"
            onClick={() => {
              const nextVal = !isAkhandScrollActive;
              setIsAkhandScrollActive(nextVal);
              setCurrentReadingMode(nextVal ? 'autoplay' : 'swadhyay');
            }}
            style={{
              backgroundColor: isAkhandScrollActive ? rc.accent : 'transparent',
              color: isAkhandScrollActive ? '#FFFFFF' : rc.textSecondary,
              borderColor: rc.border,
            }}
            className="px-2 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            title="Auto-Scroll"
          >
            {isAkhandScrollActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isAkhandScrollActive ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'रोकें') : (language === 'pb' ? 'ਸਵੈ-ਸਕਰੋਲ' : language === 'en' ? 'Auto-Scroll' : 'स्वतः स्क्रॉल')}</span>
          </button>

            {/* Speed Control - Always show if scrollable mode */}
            {(isAkhandScrollActive || isPageFlipMode) && (
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg border" style={{ borderColor: rc.border, backgroundColor: rc.bg }}>
                <span className="text-[0.625rem] font-bold" style={{ color: rc.text }}>{scrollSpeed}</span>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={parseFloat(scrollSpeed.replace('x', ''))}
                  onChange={(e) => setScrollSpeed(`${e.target.value}x` as any)}
                  className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            )}

          {/* Temple Bell Toggle Button */}
          <button
            type="button"
            onClick={handleToggleBell}
            style={{
              backgroundColor: isBellEnabled ? rc.accentLight : 'transparent',
              borderColor: isBellEnabled ? rc.accent : rc.border,
              color: isBellEnabled ? rc.maroon : rc.textSecondary,
            }}
            className="p-1.5 rounded-lg border transition hover:bg-black/5 flex items-center justify-center cursor-pointer"
            title={language === 'pb' ? 'ਘੰਟੀ ਆਵਾਜ਼ (ਚਾਲੂ/ਬੰਦ)' : language === 'en' ? 'Temple Bell Sound (On/Off)' : 'मंदिर घंटी (चालू/बंद)'}
          >
            {isBellEnabled ? <Bell className="w-3.5 h-3.5 animate-bounce" /> : <BellOff className="w-3.5 h-3.5 text-neutral-400" />}
          </button>

          {/* Focus Ruler */}
          <button
            type="button"
            onClick={() => setFocusRuler(!focusRuler)}
            style={{
              backgroundColor: focusRuler ? rc.accent : 'transparent',
              color: focusRuler ? '#FFFFFF' : rc.textSecondary,
              borderColor: rc.border,
            }}
            className="px-2 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            title="Focus Reading Guide Line"
          >
            <span>{fl.marker}</span>
          </button>

          {/* Ambient Sound */}
          <button
            type="button"
            onClick={handleToggleAmbient}
            style={{
              backgroundColor: isAmbientPlaying ? rc.accent : 'transparent',
              color: isAmbientPlaying ? '#FFFFFF' : rc.textSecondary,
              borderColor: rc.border,
            }}
            className="px-2 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            title="Background Low-Volume Tanpura Ambient Sound"
          >
            <Volume2 className="w-3 h-3" />
            <span>{fl.bgDhun}</span>
          </button>

          {/* Copy Direct Shareable Link Button */}
          <button
            type="button"
            onClick={handleCopyPathUrl}
            style={{
              backgroundColor: isPathCopied ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
              borderColor: isPathCopied ? '#22C55E' : rc.border,
              color: isPathCopied ? '#166534' : rc.textSecondary,
            }}
            className="px-2.5 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            title={language === 'hi' ? 'साखी का सीधा शेयर लिंक कॉपी करें' : language === 'pb' ? 'ਸਾਖੀ ਦਾ ਸਿੱਧਾ ਲਿੰਕ ਕਾਪੀ ਕਰੋ' : 'Copy Direct Sakhi Link'}
          >
            {isPathCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-amber-600" />}
            <span>{isPathCopied ? (language === 'hi' ? 'लिंक कॉपी हुआ!' : language === 'pb' ? 'ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!' : 'Copied!') : (language === 'hi' ? 'लिंक कॉपी करें' : language === 'pb' ? 'ਲਿੰਕ ਕਾਪੀ ਕਰੋ' : 'Copy Link')}</span>
          </button>

          {/* Smart Glossing Tool Button */}
          <button
            type="button"
            onClick={() => setShowSmartGlossingTool(true)}
            style={{
              backgroundColor: rc.accentLight,
              color: rc.maroon,
              borderColor: rc.accent,
            }}
            className="px-2.5 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
            title={language === 'pb' ? 'ਸਮਾਰਟ ਸ਼ਬਦਾਵਲੀ ਟੂਲ (Smart Glossing Tool)' : language === 'en' ? 'Smart Glossing Tool' : 'स्मार्ट शब्दावली टूल (Smart Glossing Tool)'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>{language === 'pb' ? 'ਸ਼ਬਦਾਰਥ ਟੂਲ' : language === 'en' ? 'Smart Glossary' : 'शब्दावली टूल'}</span>
          </button>

          {/* Accessibility & Speech Synthesis Settings Button */}
          <button
            type="button"
            onClick={() => setShowAccessibilityModal(true)}
            style={{
              backgroundColor: rc.accentLight,
              color: rc.maroon,
              borderColor: rc.accent,
            }}
            className="px-2.5 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
            title={language === 'pb' ? 'ਸੁਗਮਤਾ ਤੇ ਵਾਚਨ ਸੈਟਿੰਗਾਂ (Accessibility & Speech)' : language === 'en' ? 'Accessibility & Speech Settings' : 'सुगमता एवं वाचन सेटिंग्स (Accessibility & Speech)'}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'pb' ? 'ਸੁਗਮਤਾ' : language === 'en' ? 'Accessibility' : 'सुगमता व वाणी'}</span>
          </button>

          {/* Zen Mode & Fullscreen Button */}
          <button
            type="button"
            onClick={() => {
              setIsZenMode(true);
              setCurrentReadingMode('zen');
              if (typeof document !== 'undefined' && !document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
              }
              window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: true } }));
            }}
            style={{
              backgroundColor: rc.accent,
              color: '#FFFFFF',
            }}
            className="px-2.5 py-1 rounded-lg font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-sm"
          >
            <Maximize2 className="w-3 h-3" />
            <span>{fl.zenModeBtn}</span>
          </button>

          {/* Reading Styles Button */}
          <button
            type="button"
            onClick={() => setShowReadingStyleSelector(!showReadingStyleSelector)}
            style={{
              backgroundColor: showReadingStyleSelector ? rc.accent : rc.accentLight,
              color: showReadingStyleSelector ? '#FFFFFF' : rc.maroon,
              borderColor: rc.accent,
            }}
            className="px-2.5 py-1 rounded-lg border font-bold text-[0.625rem] flex items-center gap-1 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-sm"
            title={language === 'pb' ? 'ਪਾਠ ਮੋਡ ਚੁਣੋ' : language === 'en' ? 'Reading Style Selector' : 'पठन मोड चुनें'}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'pb' ? 'ਪਾਠ ਮੋਡ' : language === 'en' ? 'Reading Style' : 'पठन मोड'}</span>
          </button>

          {/* Quick Language Switcher */}
          <div 
            className="flex items-center rounded-lg p-0.5 border shadow-2xs" 
            style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
            role="group"
            aria-label="Reader Language"
          >
            {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
              const isSelected = language === lng;
              const label = lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN';
              return (
                <button
                  key={lng}
                  type="button"
                  id={`swadhyay-toolbar-lang-${lng}`}
                  onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                  style={{
                    backgroundColor: isSelected ? rc.accent : 'transparent',
                    color: isSelected ? '#FFFFFF' : rc.maroon,
                  }}
                  className="px-2 py-0.5 rounded text-[0.625rem] font-bold transition hover:opacity-90 cursor-pointer"
                  title={lng === 'hi' ? 'हिन्दी (Devanagari)' : lng === 'pb' ? 'ਪੰਜਾਬੀ (Gurmukhi)' : 'English (Roman)'}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Moolvani Visibility Preference Toggle in Toolbar */}
          <button
            type="button"
            id="swadhyay-toolbar-toggle-moolvani"
            onClick={handleToggleMoolvani}
            style={{
              backgroundColor: showMoolvani ? rc.accentLight : rc.bg,
              borderColor: rc.borderOrnament,
              color: rc.maroon,
            }}
            className="px-2.5 py-1 rounded-xl border font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:border-amber-500 transition shadow-2xs"
            title={showMoolvani ? 'मूलवाणी छिपाएं' : 'मूलवाणी दिखाएं'}
          >
            <Scroll className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">
              {showMoolvani
                ? (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ' : language === 'en' ? 'Moolvani' : 'मूलवाणी')
                : (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਛੁਪੀ' : language === 'en' ? 'Moolvani Off' : 'मूलवाणी बंद')}
            </span>
            <span className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ${showMoolvani ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-600'}`}>
              <span className={`h-3 w-3 rounded-full bg-white shadow-xs transition-transform duration-200 ${showMoolvani ? 'translate-x-3' : 'translate-x-0'}`} />
            </span>
          </button>

        </div>
      </div>

      {/* Smart Reading Progress Session Resume Banner */}
      {lastReadSakhiNo && lastReadSakhiNo !== sakhi.number && (
        <div
          style={{ backgroundColor: rc.accentLight, borderColor: rc.accent }}
          className="mx-4 mt-4 p-3 rounded-xl border border-dashed flex items-center justify-between gap-3 text-xs animate-fadeIn"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700 animate-pulse" />
            <span style={{ color: rc.maroon }} className="font-semibold">
              {language === 'pb' 
                ? `ਪਿਛਲਾ ਅਧੂਰਾ ਪਾਠ: ਸਾਖੀ #${lastReadSakhiNo} 'ਤੇ ਵਾਪਸ ਜਾਓ` 
                : `पिछला अधूरा पाठ: साखी #${lastReadSakhiNo} पर वापस जाएं`}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              // Locate the Sakhi in database and trigger parent view jump
              const found = sakhisDatabase.find(s => s.number === lastReadSakhiNo);
              if (found) {
                // To simulate click / load
                window.location.reload();
                localStorage.setItem('sahebworld_last_sakhi_id', String(lastReadSakhiNo));
              }
            }}
            style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
            className="px-3 py-1 rounded-lg font-bold transition hover:opacity-95 text-[0.625rem] cursor-pointer"
          >
            {language === 'pb' ? 'ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? 'Resume' : 'शुरू करें'}
          </button>
        </div>
      )}

      {showReadingStyleSelector && (
        <div 
          style={{ backgroundColor: rc.bg, borderColor: rc.border }}
          className="mx-4 mt-4 p-4 rounded-2xl border-2 space-y-4 animate-slideDown z-20"
        >
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-amber-500/20">
            <h3 className="font-serif font-black text-xs sm:text-sm" style={{ color: rc.maroon }}>
              {language === 'pb' ? '☬ ਅੱਠ ਵਿਲੱਖਣ ਪਾਠ ਪ੍ਰਣਾਲੀਆਂ' : language === 'en' ? '8 Sacred Reading Modes' : '८ विशिष्ट पठन प्रणालियाँ (Select Reading Mode):'}
            </h3>
            <button 
              onClick={() => setShowReadingStyleSelector(false)} 
              className="text-xs font-bold opacity-60 hover:opacity-100 cursor-pointer"
              style={{ color: rc.text }}
            >
              ✕
            </button>
          </div>
          <ReadingModeSelector
            currentMode={currentReadingMode}
            onModeSelect={handleModeSelect}
            language={language}
          />
        </div>
      )}

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sakhi.number}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="p-4 sm:p-6 space-y-6"
        >
          {/* Sakhi Identification & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4" style={{ borderColor: rc.border }}>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span
                style={{ backgroundColor: rc.accentLight, color: rc.maroon }}
                className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                {getLocalizedGranthaName(sakhi.grantha, language)} • {sakhi.categoryTitle[language]}
              </span>
              <span style={{ color: rc.textSecondary }} className="text-xs font-semibold">
                {language === 'pb' ? `ਸਾਖੀ #${sakhi.number}` : language === 'en' ? `Sakhi #${sakhi.number}` : `साखी #${sakhi.number}`}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif" style={{ color: rc.text }}>
              {t.stepsHeaderTitle}
            </h2>
          </div>

          {/* 📊 Visual Reading Progress Circular Gauge */}
          <div className="flex items-center gap-2 bg-amber-500/5 px-3 py-1.5 rounded-2xl border" style={{ borderColor: rc.borderOrnament }}>
            <svg className="w-10 h-10 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="20"
                cy="20"
                r="16"
                className="text-stone-200 dark:text-stone-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Foreground progress circle */}
              <circle
                cx="20"
                cy="20"
                r="16"
                style={{
                  strokeDasharray: 2 * Math.PI * 16,
                  strokeDashoffset: 2 * Math.PI * 16 * (1 - (currentStep / 11)),
                  color: rc.accent,
                }}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                className="transition-all duration-500"
              />
            </svg>
            <div className="text-left font-serif">
              <span className="text-[0.625rem] block opacity-60 font-serif leading-none">
                {language === 'hi' ? 'स्वाध्याय प्रगति' : language === 'pb' ? 'ਪਾਠ ਪ੍ਰਗਤੀ' : 'Reading Progress'}
              </span>
              <span className="text-xs font-bold leading-none" style={{ color: rc.maroon }}>
                {currentStep}/11 {language === 'hi' ? 'चरण' : language === 'pb' ? 'ਚਰਨ' : 'Steps'} ({Math.round((currentStep / 11) * 100)}%)
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Sacred Quote Image Card Exporter Button */}
            <button
              onClick={() => setShowImageGenerator(true)}
              style={{
                backgroundColor: rc.bg,
                borderColor: rc.borderOrnament,
                color: rc.text,
              }}
              className="p-2.5 rounded-xl border transition shadow-sm hover:opacity-90 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title={language === 'pb' ? 'ਪਾਵਨ ਸਾਖੀ ਕਾਰਡ ਬਣਾਓ' : language === 'en' ? 'Create Sacred Quote Card' : 'पावन साखी कार्ड बनाएं'}
            >
              <ImageIcon className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="hidden sm:inline">{language === 'pb' ? 'ਪਾਵਨ ਕਾਰਡ' : language === 'en' ? 'Quote Card' : 'साखी कार्ड'}</span>
            </button>

            <div 
              className="flex items-center border rounded-xl overflow-hidden shadow-sm p-0.5"
              style={{ backgroundColor: isSpeaking ? rc.accent : rc.bg, borderColor: rc.borderOrnament }}
            >
              <button
                id="listen-couplet-btn"
                onClick={() => handleToggleSpeech()}
                title="Listen Couplet Recitation with TTS"
                style={{
                  color: isSpeaking ? '#FFFFFF' : rc.text,
                }}
                className="px-2.5 py-1.5 transition hover:opacity-90 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-red-300 animate-pulse" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                <span className="hidden sm:inline">{isSpeaking ? fl.pauseRecitation : fl.listenRecitation}</span>
              </button>

              <select
                value={ttsRate}
                onChange={(e) => handleSetTtsRate(parseFloat(e.target.value))}
                style={{ color: isSpeaking ? '#FFFFFF' : rc.text }}
                className="text-[0.625rem] font-black px-1.5 py-1 cursor-pointer focus:outline-none border-l border-amber-400/30 bg-transparent"
                title="Text-to-Speech Speed"
              >
                <option value="0.75" className="bg-white text-black">0.75x</option>
                <option value="1" className="bg-white text-black">1.0x</option>
                <option value="1.25" className="bg-white text-black">1.25x</option>
                <option value="1.5" className="bg-white text-black">1.5x</option>
              </select>
            </div>

            <button
              id="share-sakhi-btn"
              onClick={handleShare}
              title={t.shareSakhiBtn}
              style={{
                backgroundColor: rc.bg,
                borderColor: rc.borderOrnament,
                color: rc.text,
              }}
              className="p-2.5 rounded-xl border transition shadow-sm hover:opacity-90 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'hi' ? 'टेक्स्ट शेयर' : language === 'pb' ? 'ਟੈਕਸਟ ਸ਼ੇਅਰ' : 'Share Text'}</span>
            </button>

            {/* 🔖 Sacred Bookmark Toggle Button */}
            <button
              id="bookmark-sakhi-btn"
              onClick={handleToggleBookmark}
              title={
                isBookmarked
                  ? language === 'pb'
                    ? 'ਬੁੱਕਮਾਰਕ ਹਟਾਓ'
                    : language === 'en'
                    ? 'Remove Bookmark'
                    : 'बुकमार्क हटाएं'
                  : language === 'pb'
                  ? 'ਸਾਖੀ ਬੁੱਕਮਾਰਕ ਕਰੋ'
                  : language === 'en'
                  ? 'Bookmark Sakhi'
                  : 'साखी बुकमार्क करें'
              }
              style={{
                backgroundColor: isBookmarked ? rc.accentLight : rc.bg,
                borderColor: rc.borderOrnament,
                color: isBookmarked ? rc.maroon : rc.text,
              }}
              className="p-2.5 rounded-xl border transition shadow-sm hover:opacity-90 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span className="hidden sm:inline">
                {isBookmarked
                  ? (language === 'hi' ? 'बुकमार्क किया' : language === 'pb' ? 'ਬੁੱਕਮਾਰਕਡ' : 'Bookmarked')
                  : (language === 'hi' ? 'बुकमार्क' : language === 'pb' ? 'ਬੁੱਕਮਾਰਕ' : 'Bookmark')}
              </span>
            </button>

            <button
              id="reader-download-card-btn"
              onClick={() => setShowImageGenerator(true)}
              title={language === 'hi' ? 'साखी फ़ोटो कार्ड / टेक्स्ट कार्ड' : language === 'pb' ? 'ਸਾਖੀ ਫੋਟੋ ਕਾਰਡ / ਟੈਕਸਟ ਕਾਰਡ' : 'Sakhi Card / Share'}
              style={{
                backgroundColor: rc.accent,
                borderColor: rc.borderOrnament,
                color: '#FFFFFF',
              }}
              className="p-2.5 rounded-xl border transition shadow-sm hover:opacity-95 flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'hi' ? 'फ़ोटो कार्ड' : language === 'pb' ? 'ਫੋਟੋ ਕਾਰਡ' : 'Image Card'}</span>
            </button>
          </div>
        </div>

        {/* Copy confirmation toast */}
        {copiedToast && (
          <div
            style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
            className="p-2.5 rounded-xl text-center text-xs font-semibold shadow-md animate-fadeIn"
          >
            {t.shareCopiedToast}
          </div>
        )}

        {/* Dynamic Mode Content Rendering */}
            <div className="space-y-6 animate-fadeIn">
            {/* STEP 1: मूल पावन वाणी (Original Text) */}
            <div
              id="eightstep-card-1"
              style={{
                backgroundColor: 
                  highlightColor === 'gold' ? (readingTheme === 'oled' ? '#2A2408' : '#FEF9E7') :
                  highlightColor === 'saffron' ? (readingTheme === 'oled' ? '#2D1E0C' : '#FDF2E9') :
                  highlightColor === 'emerald' ? (readingTheme === 'oled' ? '#0C231A' : '#E8F8F5') :
                  rc.bg,
                borderColor: rc.accent,
              }}
              className="p-5 sm:p-8 rounded-3xl border-2 text-center relative overflow-hidden shadow-md space-y-5 animate-fadeIn"
            >
              <div className="flex flex-wrap items-center justify-between border-b pb-3 gap-2" style={{ borderColor: rc.borderOrnament }}>
                <span style={{ color: rc.accent }} className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>{eightStepData.step1_originalText.title}</span>
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Moolvani Visibility Toggle Switch */}
                  <button
                    type="button"
                    onClick={handleToggleMoolvani}
                    style={{
                      backgroundColor: showMoolvani ? rc.accentLight : rc.cardBg,
                      borderColor: rc.accent,
                      color: rc.maroon,
                    }}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 shadow-2xs hover:opacity-90 cursor-pointer transition"
                    title={showMoolvani ? 'मूलवाणी छिपाएं' : 'मूलवाणी दिखाएं'}
                  >
                    <Scroll className="w-3.5 h-3.5 text-amber-600" />
                    <span>
                      {showMoolvani
                        ? (language === 'pb' ? '📜 ਮੂਲ ਬਾਣੀ ਆਨ' : language === 'en' ? '📜 Moolvani On' : '📜 मूलवाणी ऑन')
                        : (language === 'pb' ? '📜 ਮੂਲ ਬਾਣੀ ਆਫ਼' : language === 'en' ? '📜 Moolvani Off' : '📜 मूलवाणी बंद')}
                    </span>
                    <span className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ${showMoolvani ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-600'}`}>
                      <span className={`h-3 w-3 rounded-full bg-white shadow-xs transition-transform duration-200 ${showMoolvani ? 'translate-x-3' : 'translate-x-0'}`} />
                    </span>
                  </button>

                  {/* Social Sharing Image Card Button */}
                  <button
                    type="button"
                    onClick={() => setShowImageGenerator(true)}
                    style={{
                      backgroundColor: rc.accentLight,
                      borderColor: rc.accent,
                      color: rc.maroon,
                    }}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:opacity-90 cursor-pointer"
                    title="Generate and Share Beautiful Image Card"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'hi' ? 'सोशल शेयर कार्ड' : language === 'pb' ? 'ਸੋਸ਼ਲ ਸ਼ੇਅਰ ਕਾਰਡ' : 'Share Image Card'}</span>
                  </button>

                  {/* Audio Narration Controls */}
                  <div className="flex items-center gap-1 p-0.5 rounded-xl border" style={{ backgroundColor: rc.cardBg, borderColor: rc.accent }}>
                    <button
                      type="button"
                      onClick={() => handleToggleSpeech()}
                      style={{ backgroundColor: isSpeaking ? rc.accent : 'transparent', color: isSpeaking ? '#FFFFFF' : rc.maroon }}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-red-200 animate-pulse" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
                      <span>
                        {isSpeaking
                          ? language === 'hi'
                            ? 'विश्राम'
                            : language === 'pb'
                            ? 'ਰੋਕੋ'
                            : 'Pause'
                          : language === 'hi'
                          ? 'ऑडियो पाठ'
                          : language === 'pb'
                          ? 'ਆਡੀਓ ਪਾਠ'
                          : 'Audio Narration'}
                      </span>
                    </button>

                    <select
                      value={narrationMode}
                      onChange={(e) => setNarrationMode(e.target.value as any)}
                      style={{ color: rc.text }}
                      className="text-[0.625rem] font-bold px-1.5 py-1 cursor-pointer focus:outline-none border-l border-amber-500/20 bg-transparent"
                      title={language === 'pb' ? 'ਆਡੀਓ ਵਿਸਤਾਰ' : language === 'en' ? 'Audio Narration Scope' : 'ऑडियो पाठ विस्तार'}
                    >
                      <option value="couplet" className="bg-white text-black">
                        {language === 'pb' ? 'ਕੇਵਲ ਸਾਖੀ' : language === 'en' ? 'Couplet Only' : 'केवल साखी'}
                      </option>
                      <option value="couplet_bhavarth" className="bg-white text-black">
                        {language === 'pb' ? 'ਸਾਖੀ + ਭਾਵਾਰਥ' : language === 'en' ? 'Couplet + Meaning' : 'साखी + भावार्थ'}
                      </option>
                      <option value="full" className="bg-white text-black">
                        {language === 'pb' ? 'ਸੰਪੂਰਨ ਪਾਠ' : language === 'en' ? 'Full Study' : 'संपूर्ण पाठ'}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Visually Separated Parchment Typography Block for Moolvani with motion.div fade-in */}
              <AnimatePresence mode="wait">
                {showMoolvani ? (
                  <motion.div
                    key={`step1-moolvani-on-${sakhi.number}-${language}`}
                    initial={{ opacity: 0, y: 10, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.99 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative my-4 p-3.5 xs:p-5 sm:p-8 rounded-3xl border-2 bg-gradient-to-br from-[#fbf6e9] via-[#f7ebd4] to-[#f2dfbf] dark:from-[#2c241c] dark:via-[#221b14] dark:to-[#1a140f] border-[#d6ba8d]/90 dark:border-[#735732]/90 shadow-md shadow-amber-900/5 dark:shadow-black/50 space-y-4 ring-2 ring-amber-600/20 max-w-full overflow-hidden"
                  >
                    {/* Antique Parchment Corner Flourishes */}
                    <div className="absolute top-2.5 left-3 text-amber-700/30 dark:text-amber-500/30 text-xs font-serif select-none">✦</div>
                    <div className="absolute top-2.5 right-3 text-amber-700/30 dark:text-amber-500/30 text-xs font-serif select-none">✦</div>
                    <div className="absolute bottom-2.5 left-3 text-amber-700/30 dark:text-amber-500/30 text-xs font-serif select-none">✦</div>
                    <div className="absolute bottom-2.5 right-3 text-amber-700/30 dark:text-amber-500/30 text-xs font-serif select-none">✦</div>

                    {/* Distinct Label Badge for Original Moolvani (Golden Sacred Header) */}
                    <div className="flex items-center justify-between gap-2 border-b border-amber-800/15 dark:border-amber-400/15 pb-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6875rem] font-serif font-black bg-amber-700/15 text-amber-950 dark:text-amber-200 border border-amber-700/30 uppercase tracking-widest shadow-2xs">
                        <Scroll className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                        <span>{language === 'pb' ? '☬ ਮੂਲ ਪਾਵਨ ਬਾਣੀ (ਪਵਿੱਤਰ ਦੋਹਾ)' : language === 'en' ? '☬ Sacred Original Couplet' : '☬ मूल पावन वाणी (पवित्र दोहा)'}</span>
                      </span>
                      <span className="text-[0.625rem] font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-600/20">
                        #{sakhi.number}
                      </span>
                    </div>

                    {/* Refined Parchment Typography Block */}
                    <div 
                      className={`${fontSizes[localFontSize]} ${getLineHeightClass(lineHeight)} ${activeFontClass} font-bold sm:font-black text-center drop-shadow-2xs select-none max-w-full`}
                      style={{
                        ...activeFontStyle,
                        color: (isNightTheme || isFlowTheme)
                          ? (fontSize === 'elderly' ? '#FFFFFF' : '#FFFDF5')
                          : (fontSize === 'elderly' ? '#1A0E04' : '#38200b'),
                      }}
                    >
                      {renderInteractiveCouplet(sakhi.text[language] || sakhi.text.hi)}
                    </div>

                    {/* Roman Transliteration: automatically shown in English mode, toggled in Hindi/Punjabi */}
                    {sakhi.transliteration && (language === 'en' || showRomanTransliteration) && (
                      <div className="pt-2.5 border-t border-amber-700/20 dark:border-amber-500/20 text-xs sm:text-sm font-sans italic text-stone-700 dark:text-stone-300 text-center select-text">
                        "{sakhi.transliteration}"
                      </div>
                    )}
                    {sakhi.transliteration && language !== 'en' && (
                      <div className="pt-1 flex justify-center">
                        <button
                          type="button"
                          onClick={() => setShowRomanTransliteration((prev) => !prev)}
                          className="px-2.5 py-0.5 rounded-full text-[0.6875rem] font-serif font-semibold border border-amber-700/25 bg-amber-500/10 text-amber-900 dark:text-amber-200 hover:bg-amber-500/20 transition cursor-pointer"
                        >
                          {showRomanTransliteration
                            ? (language === 'pb' ? 'ਰੋਮਨ ਉਚਾਰਨ ਛੁਪਾਓ' : 'रोमन उच्चारण छिपाएं')
                            : (language === 'pb' ? 'ਰੋਮਨ ਉਚਾਰਨ ਦਿਖਾਓ' : 'रोमन उच्चारण देखें')}
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step1-moolvani-off-${sakhi.number}-${language}`}
                    initial={{ opacity: 0, y: 10, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.99 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="py-8 px-4 text-center text-xs sm:text-sm text-stone-500 dark:text-stone-400 italic border-2 border-dashed border-amber-500/30 rounded-2xl bg-amber-500/5 font-serif space-y-2"
                  >
                    <EyeOff className="w-6 h-6 mx-auto text-amber-600/70 mb-1" />
                    <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                      {language === 'pb' ? '।। ਮੂਲ ਬਾਣੀ ਛੁਪਾਈ ਗਈ ਹੈ ।।' : language === 'en' ? '|| Moolvani Text Hidden ||' : '।। मूलवाणी दृष्टि से छिपाई गई है ।।'}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md mx-auto">
                      {language === 'pb'
                        ? 'ਤੁਸੀਂ ਕੇਵਲ ਵਿਆਖਿਆ ਅਤੇ ਅਰਥ \'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰ ਰਹੇ ਹੋ। ਮੂਲ ਬਾਣੀ ਦੇਖਣ ਲਈ ਉੱਪਰ ਦਿੱਤਾ ਬਟਨ ਦਬਾਓ।'
                        : language === 'en'
                        ? 'You are focusing solely on the verse explanation and satsang discourse. Click above to show Moolvani.'
                        : 'आप केवल व्याख्या एवं अर्थ पर ध्यान केंद्रित कर रहे हैं। मूलवाणी पुनः देखने हेतु ऊपर बटन दबाएं।'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* DISTINCT CLEAR SEPARATOR WITH EMBEDDED TRANSLATIONS CARD (MOBILE OPTIMIZED) */}
              <div className="mt-4 pt-4 border-t-2 border-dashed border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                    <span className="text-xs font-serif font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                      {language === 'pb' ? 'ਪਾਵਨ ਟੀਕਾ ਤੇ ਅਰਥ (ਸਰਲ ਭਾਸ਼ਾ)' : language === 'en' ? 'Sacred Meaning & Translation' : 'पावन अर्थ व टीका (सरल अनुवाद)'}
                    </span>
                  </div>
                  {/* Quick Translation Language Badges */}
                  <div className="flex items-center gap-1">
                    {(['hi', 'pb', 'en'] as Language[]).map((lng) => (
                      <button
                        key={lng}
                        type="button"
                        onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                        className={`px-2 py-0.5 rounded-md text-[0.625rem] font-bold font-serif transition cursor-pointer border ${
                          language === lng
                            ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                            : 'bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 border-emerald-500/20 hover:bg-emerald-500/20'
                        }`}
                      >
                        {lng === 'hi' ? 'हिन्दी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Translation Display Box with Distinct Background and Border */}
                <div 
                  style={{
                    backgroundColor: (isNightTheme || isFlowTheme) ? '#112218' : readingTheme === 'sepia' ? '#F3F8F1' : '#F0FDF4',
                    borderColor: (isNightTheme || isFlowTheme) ? '#059669' : '#10B981'
                  }}
                  className="p-4 sm:p-5 rounded-2xl border text-left shadow-xs space-y-2 relative"
                >
                  <p style={activeFontStyle} className={`text-sm sm:text-base ${getLineHeightClass(lineHeight)} sacred-meaning-typography ${activeFontClass} text-stone-800 dark:text-stone-100 font-medium select-text`}>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                      {language === 'pb' ? 'ਸਰਲ ਅਰਥ:' : language === 'en' ? 'Simple Translation:' : 'सरल अर्थ:'}
                    </span>
                    {getStep1ConciseMeaning(sakhi, language)}
                  </p>
                </div>
              </div>

              {/* Interactive Word Meaning Popup Card (Standard Reader Mode) */}
              {activeGlossaryItem && (
                <div 
                  style={{ 
                    backgroundColor: rc.cardBg, 
                    borderColor: rc.accent, 
                    color: rc.text 
                  }}
                  className="my-3 p-4 rounded-2xl border-2 shadow-lg animate-fadeIn text-center space-y-2 relative max-w-xl mx-auto"
                >
                  <div className="flex items-center justify-between border-b pb-2 gap-2" style={{ borderColor: rc.border }}>
                    <div className="text-[0.6875rem] font-bold uppercase tracking-widest text-left" style={{ color: rc.accent }}>
                      {fl.glossaryHeader}
                    </div>

                    {/* Language Switch Tabs inside Word Card */}
                    <div className="flex items-center gap-1">
                      {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                        const isCur = language === lng;
                        return (
                          <button
                            key={lng}
                            type="button"
                            onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                            style={{
                              backgroundColor: isCur ? rc.accent : rc.bg,
                              color: isCur ? '#FFFFFF' : rc.maroon,
                              borderColor: rc.border,
                            }}
                            className="px-2 py-0.5 rounded text-[0.625rem] font-bold border transition cursor-pointer hover:opacity-90"
                          >
                            {lng === 'hi' ? 'हिन्दी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setSelectedGlossaryKey(null)}
                        className="p-1 rounded-full hover:bg-black/10 transition cursor-pointer ml-1"
                        style={{ color: rc.textSecondary }}
                        title={fl.close}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className={`${activeFontClass} font-black text-xl`} style={{ ...activeFontStyle, color: rc.maroon }}>
                    {activeGlossaryItem.word}
                  </div>

                  <p className={`text-sm leading-relaxed ${activeFontClass}`} style={{ ...activeFontStyle, color: rc.text }}>
                    {activeGlossaryItem.meaning}
                  </p>

                  {/* Word equivalents in other languages for true word-to-word comparison */}
                  {selectedGlossaryKey?.type === 'data' && (
                    <div className="flex flex-wrap justify-center items-center gap-2 pt-1 text-[0.6875rem]">
                      {language !== 'pb' && sakhi.wordMeanings.pb?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('pb')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif cursor-pointer hover:bg-amber-500/20 transition flex items-center gap-1"
                          title="Switch to Punjabi word"
                        >
                          <span style={{ color: rc.textSecondary }}>ਪੰਜਾਬੀ:</span>
                          <span className="font-bold" style={{ color: rc.maroon }}>{sakhi.wordMeanings.pb[selectedGlossaryKey.index].word}</span>
                        </button>
                      )}
                      {language !== 'en' && sakhi.wordMeanings.en?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('en')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-sans cursor-pointer hover:bg-amber-500/20 transition flex items-center gap-1"
                          title="Switch to English word"
                        >
                          <span style={{ color: rc.textSecondary }}>EN:</span>
                          <span className="font-bold" style={{ color: rc.maroon }}>{sakhi.wordMeanings.en[selectedGlossaryKey.index].word}</span>
                        </button>
                      )}
                      {language !== 'hi' && sakhi.wordMeanings.hi?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('hi')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif cursor-pointer hover:bg-amber-500/20 transition flex items-center gap-1"
                          title="Switch to Hindi word"
                        >
                          <span style={{ color: rc.textSecondary }}>हिन्दी:</span>
                          <span className="font-bold" style={{ color: rc.maroon }}>{sakhi.wordMeanings.hi[selectedGlossaryKey.index].word}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {renderUnlockNextButton(1)}
            </div>

            {/* STEP 2: विषय संदर्भ एवं आध्यात्मिक पृष्ठभूमि (Context) */}
            {maxUnlockedEightStep < 2 ? renderLockedStepCard(2) : (
              <div
                id="eightstep-card-2"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-3 shadow-xs animate-fadeIn"
              >
                <div className="flex flex-wrap items-center justify-between border-b pb-2.5 gap-2" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <span>{eightStepData.step2_context.title}</span>
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    {/* Play Context Stanza Button */}
                    <button
                      type="button"
                      onClick={() => handlePlayStanza(`${eightStepData.step2_context.title}. ${eightStepData.step2_context.relevanceText}. ${eightStepData.step2_context.spiritualSignificance}`, 'step-2')}
                      style={{
                        backgroundColor: activePlayingStanzaKey === 'step-2' ? rc.maroon : rc.bg,
                        color: activePlayingStanzaKey === 'step-2' ? '#FFFFFF' : rc.maroon,
                        borderColor: rc.borderOrnament,
                      }}
                      className="px-2.5 py-1 rounded-xl border text-[0.6875rem] font-bold font-serif flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
                      title="Play Context Verse"
                    >
                      {activePlayingStanzaKey === 'step-2' ? <VolumeX size={13} className="animate-spin text-amber-300" /> : <Volume2 size={13} className="text-amber-600" />}
                      <span>
                        {activePlayingStanzaKey === 'step-2'
                          ? language === 'pb'
                            ? 'ਰੋਕੋ'
                            : language === 'en'
                            ? 'Stop'
                            : 'रोकें'
                          : language === 'pb'
                          ? 'ਸੁਣੋ'
                          : language === 'en'
                          ? 'Listen'
                          : 'पाठ सुनें'}
                      </span>
                    </button>

                    <span style={{ color: rc.accent }} className="text-xs font-bold font-mono bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {eightStepData.step2_context.foundationNote}
                    </span>
                  </div>
                </div>
                <p style={{ ...activeFontStyle, color: rc.text }} className={`text-sm sm:text-base ${getLineHeightClass(lineHeight)} sacred-meaning-typography ${activeFontClass}`}>
                  {eightStepData.step2_context.relevanceText}
                </p>
                <p style={{ ...activeFontStyle, color: rc.textSecondary }} className={`text-xs italic bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 ${activeFontClass}`}>
                  ✨ {eightStepData.step2_context.spiritualSignificance}
                </p>
                {renderUnlockNextButton(2)}
              </div>
            )}

            {/* STEP 3: शब्दार्थ (Vocabulary) */}
            {maxUnlockedEightStep < 3 ? renderLockedStepCard(3) : (
              <div
                id="eightstep-card-3"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-3 shadow-xs animate-fadeIn"
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b pb-3" style={{ borderColor: rc.border }}>
                  <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
                    <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                      <Type className="w-5 h-5 text-amber-600 shrink-0" />
                      <span>{eightStepData.step3_vocabulary.title}</span>
                    </h3>
                    
                    {/* Toggle Button on Mobile Top Row */}
                    <button
                      type="button"
                      onClick={() => setShowEightStepVocab(!showEightStepVocab)}
                      style={{ backgroundColor: rc.accentLight, color: rc.maroon }}
                      className="px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-90 transition sm:hidden"
                    >
                      {showEightStepVocab ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      <span>{showEightStepVocab ? eightStepData.step3_vocabulary.toggleLabelHide : eightStepData.step3_vocabulary.toggleLabelShow}</span>
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                    {/* Play Vocabulary Stanza Button */}
                    <button
                      type="button"
                      onClick={() => handlePlayStanza(eightStepData.step3_vocabulary.words.map((w, idx) => `${idx + 1}. ${w.word}: ${w.meaning}`).join('. '), 'step-3')}
                      style={{
                        backgroundColor: activePlayingStanzaKey === 'step-3' ? rc.maroon : rc.bg,
                        color: activePlayingStanzaKey === 'step-3' ? '#FFFFFF' : rc.maroon,
                        borderColor: rc.borderOrnament,
                      }}
                      className="px-2.5 py-1 rounded-xl border text-[0.6875rem] font-bold font-serif flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
                      title="Play Vocabulary Stanza"
                    >
                      {activePlayingStanzaKey === 'step-3' ? <VolumeX size={13} className="animate-spin text-amber-300" /> : <Volume2 size={13} className="text-amber-600" />}
                      <span>
                        {activePlayingStanzaKey === 'step-3'
                          ? language === 'pb'
                            ? 'ਰੋਕੋ'
                            : language === 'en'
                            ? 'Stop'
                            : 'रोकें'
                          : language === 'pb'
                          ? 'ਸ਼ਬਦਾਰਥ ਸੁਣੋ'
                          : language === 'en'
                          ? 'Listen Glossary'
                          : 'शब्दार्थ सुनें'}
                      </span>
                    </button>

                    {/* Step 3 Direct Language Switcher Tabs */}
                    <div className="flex items-center rounded-lg p-0.5 border shadow-2xs" style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }}>
                      {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                        const isCur = language === lng;
                        return (
                          <button
                            key={lng}
                            type="button"
                            onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                            style={{
                              backgroundColor: isCur ? rc.accent : 'transparent',
                              color: isCur ? '#FFFFFF' : rc.maroon,
                            }}
                            className="px-2 py-0.5 rounded text-[0.625rem] font-bold transition hover:opacity-90 cursor-pointer"
                          >
                            {lng === 'hi' ? 'हिन्दी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowEightStepVocab(!showEightStepVocab)}
                      style={{ backgroundColor: rc.accentLight, color: rc.maroon }}
                      className="px-3 py-1 rounded-xl text-xs font-bold hidden sm:flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
                    >
                      {showEightStepVocab ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      <span>{showEightStepVocab ? eightStepData.step3_vocabulary.toggleLabelHide : eightStepData.step3_vocabulary.toggleLabelShow}</span>
                    </button>
                  </div>
                </div>

                {showEightStepVocab && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 animate-fadeIn">
                    {eightStepData.step3_vocabulary.words.map((item, idx) => (
                      <div
                        key={idx}
                        style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
                        className="p-3.5 rounded-xl border flex flex-col text-xs space-y-1.5 transition hover:shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span style={{ ...activeFontStyle, color: rc.maroon }} className={`${activeFontClass} font-black text-sm sm:text-base`}>
                            {item.word}
                          </span>
                          <span className="text-[0.625rem] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold">
                            #{idx + 1}
                          </span>
                        </div>
                        <p style={{ ...activeFontStyle, color: rc.text }} className={`text-xs sm:text-sm ${getLineHeightClass(lineHeight)} sacred-meaning-typography ${activeFontClass}`}>
                          {item.meaning}
                        </p>
                        {/* Word-to-word cross-lingual correspondence tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[0.625rem] border-t border-amber-500/10">
                          {language !== 'pb' && (aiWordsMultilingual?.pb?.[idx] || sakhi.wordMeanings.pb?.[idx]) && (
                            <span 
                              onClick={() => onChangeLanguage && onChangeLanguage('pb')}
                              className="px-1.5 py-0.5 rounded bg-amber-500/5 hover:bg-amber-500/15 cursor-pointer font-serif border border-amber-500/10"
                              title="ਪੰਜਾਬੀ ਵਿੱਚ ਦੇਖੋ"
                            >
                              ਪੰਜਾਬੀ: <strong className="font-bold">{(aiWordsMultilingual?.pb?.[idx] || sakhi.wordMeanings.pb[idx]).word}</strong>
                            </span>
                          )}
                          {language !== 'en' && (aiWordsMultilingual?.en?.[idx] || sakhi.wordMeanings.en?.[idx]) && (
                            <span 
                              onClick={() => onChangeLanguage && onChangeLanguage('en')}
                              className="px-1.5 py-0.5 rounded bg-amber-500/5 hover:bg-amber-500/15 cursor-pointer font-sans border border-amber-500/10"
                              title="View in English"
                            >
                              EN: <strong className="font-bold">{(aiWordsMultilingual?.en?.[idx] || sakhi.wordMeanings.en[idx]).word} — {(aiWordsMultilingual?.en?.[idx] || sakhi.wordMeanings.en[idx]).meaning}</strong>
                            </span>
                          )}
                          {language !== 'hi' && (aiWordsMultilingual?.hi?.[idx] || sakhi.wordMeanings.hi?.[idx]) && (
                            <span 
                              onClick={() => onChangeLanguage && onChangeLanguage('hi')}
                              className="px-1.5 py-0.5 rounded bg-amber-500/5 hover:bg-amber-500/15 cursor-pointer font-serif border border-amber-500/10"
                              title="हिन्दी में देखें"
                            >
                              हिन्दी: <strong className="font-bold">{(aiWordsMultilingual?.hi?.[idx] || sakhi.wordMeanings.hi[idx]).word}</strong>
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {renderUnlockNextButton(3)}
              </div>
            )}

            {/* STEP 4: सरल भावार्थ एवं गहरा अध्ययन (सत्संग) */}
            {maxUnlockedEightStep < 4 ? renderLockedStepCard(4) : (
              <div
                id="eightstep-card-4"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-4 shadow-xs animate-fadeIn"
              >
                <div className="flex flex-wrap items-center justify-between border-b pb-2.5 gap-2" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                    <span>{eightStepData.step4_bhavarthSatsang.title}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {/* Play Bhavarth Button */}
                    <button
                      type="button"
                      onClick={() => handlePlayStanza(`${eightStepData.step4_bhavarthSatsang.bhavarth}. ${eightStepData.step4_bhavarthSatsang.deepSatsangGyan}`, 'step-4')}
                      style={{
                        backgroundColor: activePlayingStanzaKey === 'step-4' ? rc.maroon : rc.cardBg,
                        color: activePlayingStanzaKey === 'step-4' ? '#FFFFFF' : rc.maroon,
                        borderColor: rc.borderOrnament,
                      }}
                      className="px-2.5 py-1 rounded-xl border text-[0.6875rem] font-bold font-serif flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
                      title="Play Bhavarth Stanza"
                    >
                      {activePlayingStanzaKey === 'step-4' ? <VolumeX size={13} className="animate-spin text-amber-300" /> : <Volume2 size={13} className="text-amber-600" />}
                      <span>
                        {activePlayingStanzaKey === 'step-4'
                          ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें')
                          : (language === 'pb' ? 'ਸਤਿਸੰਗ ਸੁਣੋ' : language === 'en' ? 'Listen Satsang' : 'सत्संग सुनें')}
                      </span>
                    </button>

                    {/* Moolvani Visibility Toggle Switch */}
                    <button
                      type="button"
                      onClick={handleToggleMoolvani}
                      style={{ backgroundColor: showMoolvani ? rc.accentLight : rc.cardBg, color: rc.maroon }}
                      className="px-2.5 py-1 rounded-lg text-[0.625rem] font-bold cursor-pointer transition flex items-center gap-1.5 border border-amber-500/20 hover:border-amber-500"
                      title={showMoolvani ? 'मूलवाणी छिपाएं' : 'मूलवाणी दिखाएं'}
                    >
                      <Scroll className="w-3 h-3 text-amber-600" />
                      <span>
                        {showMoolvani
                          ? (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ' : language === 'en' ? 'Moolvani' : 'मूलवाणी')
                          : (language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਛੁਪੀ' : language === 'en' ? 'Moolvani Off' : 'मूलवाणी बंद')}
                      </span>
                      <span className={`inline-flex h-3.5 w-6 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ${showMoolvani ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-600'}`}>
                        <span className={`h-2.5 w-2.5 rounded-full bg-white shadow-xs transition-transform duration-200 ${showMoolvani ? 'translate-x-2.5' : 'translate-x-0'}`} />
                      </span>
                    </button>

                    {/* Satsang Visibility Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowBhavarth(!showBhavarth)}
                      style={{ backgroundColor: showBhavarth ? rc.accentLight : rc.cardBg, color: rc.maroon }}
                      className="px-2.5 py-1 rounded-lg text-[0.625rem] font-bold cursor-pointer transition flex items-center gap-1 border border-amber-500/20"
                    >
                      {showBhavarth ? <Eye className="w-3 h-3 text-amber-600" /> : <EyeOff className="w-3 h-3 text-stone-400" />}
                      <span>
                        {showBhavarth
                          ? (language === 'pb' ? 'ਵਿਆਖਿਆ ਛੁਪਾਓ' : language === 'en' ? 'Hide Discourse' : 'व्याख्या छिपाएं')
                          : (language === 'pb' ? 'ਵਿਆਖਿਆ ਦਿਖਾਓ' : language === 'en' ? 'Show Discourse' : 'व्याख्या दिखाएं')}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUnlockedSatsang(!unlockedSatsang)}
                      style={{ backgroundColor: unlockedSatsang ? rc.accentLight : rc.stepActive, color: rc.maroon }}
                      className="px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-amber-400/30"
                    >
                      {unlockedSatsang ? <Unlock className="w-3.5 h-3.5 text-amber-700" /> : <Lock className="w-3.5 h-3.5" />}
                      <span>{unlockedSatsang ? (language === 'pb' ? 'ਅਨਲੌਕ ਕੀਤਾ' : language === 'en' ? 'Unlocked' : 'अनलॉक किया') : eightStepData.step4_bhavarthSatsang.unlockLabel}</span>
                    </button>
                  </div>
                </div>

                {unlockedSatsang && (
                  <div className="space-y-4 pt-1">
                    {/* VISUALLY SEPARATED MOOLVANI BLOCK WITH PARCHMENT STYLING AND FADE-IN */}
                    <AnimatePresence mode="wait">
                      {showMoolvani ? (
                        <motion.div
                          key={`step4-moolvani-on-${sakhi.number}-${language}`}
                          initial={{ opacity: 0, y: 8, scale: 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.99 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="relative p-5 sm:p-6 rounded-2xl border-2 bg-gradient-to-br from-[#fbf6e9] via-[#f7ebd4] to-[#f2dfbf] dark:from-[#2c241c] dark:via-[#221b14] dark:to-[#1a140f] border-[#d6ba8d]/80 dark:border-[#735732]/80 space-y-2 text-center shadow-md shadow-amber-900/5 ring-1 ring-inset ring-[#e8d2a7]/30"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[0.625rem] font-serif font-black bg-amber-600/15 text-amber-950 dark:text-amber-200 border border-amber-600/30 uppercase tracking-widest">
                              <Scroll className="w-3 h-3 text-amber-700 dark:text-amber-400" />
                              <span>{language === 'pb' ? 'ਮੂਲ ਬਾਣੀ (ਪਵਿੱਤਰ ਪਾਠ)' : language === 'en' ? 'Original Moolvani' : 'मूलवाणी (पावन गुरु-पाठ)'}</span>
                            </span>
                          </div>
                          <div style={activeFontStyle} className={`${activeFontClass} font-black text-lg sm:text-xl text-[#38200b] dark:text-[#f7e7ce] leading-relaxed`}>
                            {renderInteractiveCouplet(sakhi.text[language] || sakhi.text.hi)}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`step4-moolvani-off-${sakhi.number}-${language}`}
                          initial={{ opacity: 0, y: 8, scale: 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.99 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="py-3 px-3 text-center text-xs text-stone-500 italic border border-dashed border-amber-500/20 rounded-xl bg-amber-500/5 font-serif"
                        >
                          {language === 'pb' ? '।। ਮੂਲ ਬਾਣੀ ਛੁਪਾਈ ਗਈ ਹੈ ।।' : language === 'en' ? '|| Moolvani Text Hidden ||' : '।। मूलवाणी छिपा दी गई है ।।'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* VISUALLY SEPARATED HINDI EXPLANATION / BHAVARTH BLOCK WITH FADE-IN */}
                    <AnimatePresence mode="wait">
                      {showBhavarth ? (
                        <motion.div
                          key={`step4-bhavarth-on-${sakhi.number}-${language}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="p-4 sm:p-5 rounded-2xl border bg-amber-50/40 dark:bg-stone-900/30 border-amber-500/20 space-y-2"
                        >
                          <div className="flex items-center gap-2 border-b border-amber-500/20 pb-1.5">
                            <BookOpen className="w-4 h-4 text-amber-700" />
                            <span className="text-xs font-serif font-black uppercase tracking-wider text-amber-900 dark:text-amber-300">
                              {language === 'pb'
                                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਹ ਉਪਦੇਸ਼ ਕਿਉਂ ਦਿੱਤਾ:'
                                : language === 'en'
                                ? 'Why Satguru Kabir Saheb Gave This Teaching:'
                                : 'सतगुरु कबीर साहेब ने यह उपदेश क्यों दिया:'}
                            </span>
                          </div>
                          <div style={{ ...activeFontStyle, color: rc.text }} className={`text-sm sm:text-base leading-relaxed ${activeFontClass} font-semibold pt-1`}>
                            <SmartGlossaryText text={eightStepData.step4_bhavarthSatsang.bhavarth} language={language} />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`step4-bhavarth-off-${sakhi.number}-${language}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="py-3 px-3 text-center text-xs text-stone-500 italic border border-dashed border-amber-500/20 rounded-xl bg-amber-500/5 font-serif"
                        >
                          {language === 'pb' ? '।। ਸਤਿਸੰਗ ਵਿਆਖਿਆ ਛੁਪੀ ਹੋਈ ਹੈ ।।' : language === 'en' ? '|| Satsang Discourse is Hidden ||' : '।। सत्संग व्याख्या छिपी हुई है ।।'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }} className="p-4 rounded-xl border space-y-2.5">
                      <h4 style={{ color: rc.accent }} className="text-xs font-black uppercase tracking-wider">
                        {language === 'pb'
                          ? '।। ਜੀਵਨ ਉਦਾਹਰਨ ਤੇ ਵਿਵਹਾਰਕ ਸਤਿਸੰਗ ।।'
                          : language === 'en'
                          ? '|| Everyday Illustration & Satsang Reflection ||'
                          : '।। दैनिक जीवन दृष्टांत एवं व्यवहारिक सत्संग ।।'}
                      </h4>
                      <div style={{ ...activeFontStyle, color: rc.textSecondary }} className={`text-sm leading-relaxed ${activeFontClass} whitespace-pre-line`}>
                        <SmartGlossaryText text={eightStepData.step4_bhavarthSatsang.deepSatsangGyan} language={language} />
                      </div>
                      <p style={{ ...activeFontStyle, color: rc.textMuted }} className={`text-xs italic pt-2 border-t border-dashed border-stone-300 ${activeFontClass}`}>
                        {eightStepData.step4_bhavarthSatsang.mindMayaAnalysis}
                      </p>
                    </div>
                  </div>
                )}
                {renderUnlockNextButton(4)}
              </div>
            )}

            {/* STEP 5: बोध प्रश्न (Comprehension Questions / Quiz) */}
            {maxUnlockedEightStep < 5 ? renderLockedStepCard(5) : (
              <div
                id="eightstep-card-5"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.accent }}
                className="p-6 rounded-3xl border-2 space-y-5 shadow-xl animate-fadeIn"
              >
                <div className="text-center space-y-1">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <h3 style={{ color: rc.maroon }} className="text-lg sm:text-xl font-black font-serif flex items-center justify-center gap-2">
                      <Lightbulb className="w-6 h-6 text-amber-600" />
                      <span>{elevenStepData.step5_quiz.title}</span>
                    </h3>
                    <button
                      type="button"
                      onClick={handleReshuffleQuizAttempt}
                      className="px-2.5 py-1 rounded-lg border border-amber-500/35 bg-amber-500/10 hover:bg-amber-500/20 text-[0.6875rem] font-serif font-bold flex items-center gap-1 cursor-pointer transition"
                      style={{ color: rc.maroon }}
                      title={language === 'pb' ? 'ਪ੍ਰਸ਼ਨ ਅਤੇ ਵਿਕਲਪ ਮੁੜ-ਕ੍ਰਮਬੱਧ ਕਰੋ' : language === 'en' ? 'Shuffle question & option order' : 'प्रश्न एवं विकल्पों का क्रम बदलें'}
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>{language === 'pb' ? 'ਨਵਾਂ ਕ੍ਰਮ' : language === 'en' ? 'Shuffle Quiz' : 'क्रम बदलें'}</span>
                    </button>
                  </div>
                  <p style={{ color: rc.textSecondary }} className="text-xs italic">{elevenStepData.step5_quiz.subtitle}</p>
                  {isAiEnriching && (
                    <p className="text-[0.6875rem] font-serif text-amber-700 dark:text-amber-300 animate-pulse">
                      ✨ {language === 'pb' ? 'ਸਾਖੀ ਅਨੁਸਾਰ AI ਸਵਾਧਿਆਇ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...' : language === 'en' ? 'Generating bespoke Sakhi insights...' : 'साखी के अनुरूप दिव्य AI स्वाध्याय तैयार हो रहा है...'}
                    </p>
                  )}
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-center justify-between text-xs font-bold px-1" style={{ color: rc.textSecondary }}>
                    <span>{language === 'pb' ? `ਪ੍ਰਸ਼ਨ ${quizCurrentIdx + 1} / 5` : language === 'en' ? `Question ${quizCurrentIdx + 1} of 5` : `प्रश्न ${quizCurrentIdx + 1} / 5`}</span>
                    <div className="flex gap-1">
                      {elevenStepData.step5_quiz.questions.slice(0, 5).map((_, qDotIdx) => (
                        <button
                          key={qDotIdx}
                          onClick={() => setQuizCurrentIdx(qDotIdx)}
                          className={`w-6 h-2 rounded-full transition cursor-pointer ${
                            quizCurrentIdx === qDotIdx ? 'bg-amber-600 scale-105' : 'bg-amber-500/20 hover:bg-amber-500/40'
                          }`}
                          title={`Question ${qDotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {(() => {
                    const qList = elevenStepData.step5_quiz.questions.slice(0, 5);
                    const rawQ = qList[quizCurrentIdx] || qList[0];
                    const q = normalizeElevenStepQuizQuestion(rawQ, language, quizCurrentIdx);
                    const selectedOptIdx = quizAnswers[quizCurrentIdx];
                    const isSubmitted = quizSubmitted[quizCurrentIdx];
                    const optionsList = q.options;
                    const optionLabels = ['A', 'B', 'C', 'D'];
                    const correctIdx = optionsList.findIndex((o) => o.isCorrect);
                    const correctOpt = correctIdx >= 0 ? optionsList[correctIdx] : optionsList[0];

                    return (
                      <div className="space-y-4 bg-white/70 dark:bg-zinc-800/70 p-5 rounded-2xl border border-amber-500/20 shadow-xs">
                        <p className={`text-sm font-bold ${activeFontClass} leading-relaxed`} style={{ ...activeFontStyle, color: rc.text }}>
                          {quizCurrentIdx + 1}. {q.questionText || q.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {optionsList.map((opt, oIdx) => {
                            let btnStyle = { borderColor: rc.border, backgroundColor: rc.bg };
                            let labelColor = rc.maroon;
                            if (isSubmitted) {
                              if (opt.isCorrect) {
                                btnStyle = { borderColor: '#16a34a', backgroundColor: 'rgba(22, 163, 74, 0.1)' };
                                labelColor = '#16a34a';
                              } else if (selectedOptIdx === oIdx) {
                                btnStyle = { borderColor: '#dc2626', backgroundColor: 'rgba(220, 38, 38, 0.1)' };
                                labelColor = '#dc2626';
                              }
                            } else if (selectedOptIdx === oIdx) {
                              btnStyle = { borderColor: rc.accent, backgroundColor: rc.accentLight };
                            }

                            return (
                              <button
                                key={oIdx}
                                type="button"
                                disabled={isSubmitted}
                                onClick={() => {
                                  sacredHaptics.lightTap();
                                  setQuizAnswers({ ...quizAnswers, [quizCurrentIdx]: oIdx });
                                  setQuizSubmitted({ ...quizSubmitted, [quizCurrentIdx]: true });
                                }}
                                className="p-3 rounded-xl border text-xs text-left transition flex items-start gap-2.5 cursor-pointer hover:shadow-xs"
                                style={btnStyle}
                              >
                                <span className="font-bold px-1.5 py-0.5 rounded text-[0.625rem] bg-amber-100 dark:bg-amber-900/50" style={{ color: labelColor }}>
                                  ({optionLabels[oIdx]})
                                </span>
                                <span className={`flex-1 ${activeFontClass} leading-snug`} style={{ ...activeFontStyle, color: rc.text }}>{opt.text}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isSubmitted && (() => {
                          const selectedOpt = optionsList[selectedOptIdx];
                          const rawFeedback = selectedOpt?.feedback || '';
                          const cleanSelectedFeedback =
                            rawFeedback.replace(/^[✓✗✔✕❌]\s*[^!|।:]+[!|।:]\s*/, '').trim() || rawFeedback;
                          const rawCorrectExplanation =
                            q.explanation || correctOpt?.feedback || cleanSelectedFeedback;
                          const cleanCorrectExplanation =
                            rawCorrectExplanation.replace(/^[✓✗✔✕❌]\s*[^!|।:]+[!|।:]\s*/, '').trim() || rawCorrectExplanation;

                          return (
                            <div
                              style={activeFontStyle}
                              className={`p-3.5 rounded-xl text-xs ${activeFontClass} space-y-2 animate-fadeIn ${
                                selectedOpt?.isCorrect
                                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200'
                              }`}
                            >
                              <p className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                                {selectedOpt?.isCorrect
                                  ? (language === 'pb' ? '✓ ਸਹੀ ਉੱਤਰ!' : language === 'en' ? '✓ Correct Answer!' : '✓ सही उत्तर!')
                                  : (language === 'pb' ? '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ' : language === 'en' ? '✗ Incorrect Option' : '✗ यह विकल्प सही नहीं है')}
                              </p>

                              {selectedOpt?.isCorrect ? (
                                <p className="leading-relaxed opacity-95">
                                  <strong className="font-black">
                                    {language === 'pb' ? 'ਸਹੀ ਉੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Correct Answer Analysis: ' : 'सही उत्तर का विश्लेषण: '}
                                  </strong>
                                  {cleanSelectedFeedback}
                                </p>
                              ) : (
                                <div className="space-y-2">
                                  <p className="leading-relaxed opacity-95">
                                    <strong className="font-black">
                                      {language === 'pb' ? 'ਗ਼ਲਤ ਉੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Why This Option Is Incorrect: ' : 'गलत उत्तर का विश्लेषण: '}
                                    </strong>
                                    {cleanSelectedFeedback}
                                  </p>
                                  {correctOpt && (
                                    <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-950 dark:text-emerald-100 space-y-1">
                                      <p className="font-black">
                                        ✓ {language === 'pb' ? 'ਸਹੀ ਉੱਤਰ' : language === 'en' ? 'Correct Answer' : 'सही उत्तर'} ({optionLabels[correctIdx >= 0 ? correctIdx : 0]}): {correctOpt.text}
                                      </p>
                                      {cleanCorrectExplanation && cleanCorrectExplanation !== cleanSelectedFeedback && (
                                        <p className="opacity-95 leading-relaxed">
                                          <strong className="font-bold">
                                            {language === 'pb' ? 'ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Explanation: ' : 'विश्लेषण: '}
                                          </strong>
                                          {cleanCorrectExplanation}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            disabled={quizCurrentIdx === 0}
                            onClick={() => { sacredHaptics.lightTap(); setQuizCurrentIdx((prev) => Math.max(0, prev - 1)); }}
                            className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-40 cursor-pointer"
                            style={{ borderColor: rc.border, backgroundColor: rc.bg, color: rc.maroon }}
                          >
                            ← {language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}
                          </button>
                          
                          <span className="text-[0.6875rem] font-bold" style={{ color: rc.textSecondary }}>
                            {language === 'pb'
                              ? `ਸਵਾਲ ${quizCurrentIdx + 1} / 5`
                              : language === 'en'
                              ? `Q ${quizCurrentIdx + 1} of 5`
                              : `प्रश्न ${quizCurrentIdx + 1} / 5`}
                          </span>

                          <button
                            type="button"
                            disabled={quizCurrentIdx >= 4}
                            onClick={() => { sacredHaptics.lightTap(); setQuizCurrentIdx((prev) => Math.min(4, prev + 1)); }}
                            className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-40 cursor-pointer"
                            style={{ borderColor: rc.border, backgroundColor: rc.accentLight, color: rc.maroon }}
                          >
                            {language === 'pb' ? 'ਅਗਲਾ' : language === 'en' ? 'Next' : 'अगला'} →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                {renderUnlockNextButton(5)}
              </div>
            )}

            {/* STEP 6: आध्यात्मिक रहस्य (Spiritual Insight) */}
            {maxUnlockedEightStep < 6 ? renderLockedStepCard(6) : (
              <div
                id="eightstep-card-6"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-3 shadow-xs animate-fadeIn"
              >
                <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <span>{elevenStepData.step6_spiritualInsight.title}</span>
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handlePlayStanza(elevenStepData.step6_spiritualInsight.mysticalCoding, 'step-6')}
                      style={{
                        backgroundColor: activePlayingStanzaKey === 'step-6' ? rc.maroon : rc.bg,
                        color: activePlayingStanzaKey === 'step-6' ? '#FFFFFF' : rc.maroon,
                        borderColor: rc.borderOrnament,
                      }}
                      className="px-2.5 py-1 rounded-xl border text-[0.6875rem] font-bold font-serif flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 transition shadow-2xs"
                      title="Play Spiritual Insight"
                    >
                      {activePlayingStanzaKey === 'step-6' ? <VolumeX size={13} className="animate-spin text-amber-300" /> : <Volume2 size={13} className="text-amber-600" />}
                      <span>
                        {activePlayingStanzaKey === 'step-6'
                          ? language === 'pb'
                            ? 'ਰੋਕੋ'
                            : language === 'en'
                            ? 'Stop'
                            : 'रोकें'
                          : language === 'pb'
                          ? 'ਰਹੱਸ ਸੁਣੋ'
                          : language === 'en'
                          ? 'Listen Insight'
                          : 'रहस्य सुनें'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUnlockedInsight(!unlockedInsight)}
                      style={{ backgroundColor: unlockedInsight ? rc.accentLight : rc.stepActive, color: rc.maroon }}
                      className="px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-amber-400/30"
                    >
                      {unlockedInsight ? <Unlock className="w-3.5 h-3.5 text-amber-700" /> : <Lock className="w-3.5 h-3.5" />}
                      <span>{unlockedInsight ? (language === 'pb' ? 'ਅਨਲੌਕ ਕੀਤਾ' : language === 'en' ? 'Unlocked' : 'अनलॉक किया') : elevenStepData.step6_spiritualInsight.unlockLabel}</span>
                    </button>
                  </div>
                </div>

                {unlockedInsight && (
                  <div className="space-y-3 pt-1 animate-fadeIn">
                    <p style={{ ...activeFontStyle, color: rc.text }} className={`text-sm sm:text-base leading-relaxed ${activeFontClass} whitespace-pre-line`}>
                      {elevenStepData.step6_spiritualInsight.mysticalCoding}
                    </p>
                  </div>
                )}
                {renderUnlockNextButton(6)}
              </div>
            )}

            {/* STEP 7: मुख्य शिक्षा (Core Lesson) */}
            {maxUnlockedEightStep < 7 ? renderLockedStepCard(7) : (
              <div
                id="eightstep-card-7"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-3 shadow-xs animate-fadeIn"
              >
                <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <span>{elevenStepData.step7_keyLearning.title}</span>
                  </h3>
                  <span style={{ color: rc.textSecondary }} className="text-xs font-serif italic">
                    {elevenStepData.step7_keyLearning.subtitle}
                  </span>
                </div>

                <div className="space-y-2 pt-1 animate-fadeIn">
                  {elevenStepData.step7_keyLearning.bulletPoints.map((pt, ptIdx) => (
                    <div
                      key={ptIdx}
                      style={{ ...activeFontStyle, backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm ${activeFontClass} font-bold text-amber-950 dark:text-amber-100 leading-relaxed`}
                    >
                      {pt}
                    </div>
                  ))}
                </div>
                {renderUnlockNextButton(7)}
              </div>
            )}

            {/* STEP 8: संबंधित वाणियाँ (Cross-references) */}
            {maxUnlockedEightStep < 8 ? renderLockedStepCard(8) : (
              <div
                id="eightstep-card-8"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.accent }}
                className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-xl animate-fadeIn"
              >
                <div className="flex flex-wrap items-center justify-between border-b pb-3 gap-2" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2 [word-break:keep-all] [overflow-wrap:break-word]">
                    <Scroll className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>{elevenStepData.step8_crossReferences.title}</span>
                  </h3>
                  <span style={{ color: rc.textSecondary }} className="text-xs font-serif italic [word-break:keep-all] [overflow-wrap:break-word]">
                    {elevenStepData.step8_crossReferences.subtitle}
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  {elevenStepData.step8_crossReferences.references.map((ref, rIdx) => (
                    <div
                      key={rIdx}
                      style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
                      className="p-4 sm:p-5 rounded-2xl border space-y-3 text-left"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div style={{ color: rc.accent }} className="text-xs sm:text-sm font-bold font-serif tracking-wide [word-break:keep-all] [overflow-wrap:break-word]">
                          📜 {ref.source}
                        </div>
                        <span className="text-[0.625rem] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20 shrink-0">
                          {rIdx + 1} / {elevenStepData.step8_crossReferences.references.length}
                        </span>
                      </div>
                      <p style={{ ...activeFontStyle, color: rc.maroon }} className={`text-sm sm:text-base ${activeFontClass} font-bold italic whitespace-pre-line leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]`}>
                        {ref.verse}
                      </p>
                      <p style={{ ...activeFontStyle, color: rc.text }} className={`text-xs sm:text-sm ${activeFontClass} leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]`}>
                        {ref.context}
                      </p>
                      {ref.connection && (
                        <p
                          style={{ ...activeFontStyle, color: rc.textSecondary, borderColor: rc.border }}
                          className={`text-xs sm:text-sm ${activeFontClass} leading-relaxed pt-2.5 border-t [word-break:keep-all] [overflow-wrap:break-word]`}
                        >
                          {ref.connection}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {renderUnlockNextButton(8)}
              </div>
            )}

            {/* STEP 9: चिंतन प्रश्न (Contemplation) — [दिखाएं / छिपाएं] */}
            {maxUnlockedEightStep < 9 ? renderLockedStepCard(9) : (
              <div
                id="eightstep-card-9"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-5 rounded-2xl border space-y-4 shadow-xs animate-fadeIn"
              >
                <div className="flex items-center justify-between">
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-600" />
                    <span>{elevenStepData.step9_contemplation.title}</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowEightStepContemplation(!showEightStepContemplation)}
                    style={{ backgroundColor: rc.accentLight, color: rc.maroon }}
                    className="px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
                  >
                    {showEightStepContemplation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    <span>
                      {showEightStepContemplation
                        ? (language === 'pb' ? 'ਛੁਪਾਓ' : language === 'en' ? 'Hide' : 'छिपाएं')
                        : (language === 'pb' ? 'ਦਿਖਾਓ' : language === 'en' ? 'Show' : 'दिखाएं')}
                    </span>
                  </button>
                </div>

                {showEightStepContemplation && (
                  <div className="space-y-3 pt-1 animate-fadeIn">
                    <div className="space-y-2">
                      {elevenStepData.step9_contemplation.questions.map((q, qIdx) => (
                        <div
                          key={qIdx}
                          style={{ ...activeFontStyle, backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
                          className={`p-3 rounded-xl border text-xs sm:text-sm ${activeFontClass} font-bold text-amber-950 dark:text-amber-100`}
                        >
                          ❓ {q}
                        </div>
                      ))}
                    </div>

                    <div style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }} className="p-4 rounded-xl border space-y-2">
                      <label style={{ color: rc.textSecondary }} className="text-xs font-bold block">
                        {language === 'pb' ? 'ਅਪਣਾ ਸਤਿਸੰਗ ਅਨੁਭਵ ਤੇ ਵਿਚਾਰ ਲਿਖੋ:' : language === 'en' ? 'Write your personal journal reflection:' : 'अपना सत्संग अनुभव व आत्म-निरीक्षण लिखें:'}
                      </label>
                      <textarea
                        value={quickReflection}
                        onChange={(e) => setQuickReflection(e.target.value)}
                        placeholder={fl.reflectionPlaceholder}
                        style={{ ...activeFontStyle, backgroundColor: rc.cardBg, borderColor: rc.border, color: rc.text }}
                        className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 h-20 resize-none ${activeFontClass}`}
                      />
                      <button
                        id="save-eightstep-reflection-btn"
                        onClick={handleSaveReflection}
                        disabled={!quickReflection.trim()}
                        style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                        className="px-4 py-2 rounded-xl text-xs font-bold transition disabled:opacity-40 cursor-pointer"
                      >
                        {t.saveReflectionBtn}
                      </button>
                      {reflectionSavedToast && (
                        <span style={{ color: rc.accent }} className="text-xs font-bold ml-2">
                          ✓ {t.reflectionSavedToast}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {renderUnlockNextButton(9)}
              </div>
            )}

            {/* STEP 10: श्रवण साधना व सूरत-शब्द योग (Audio Integration & 3-Stage Breathing) */}
            {maxUnlockedEightStep < 10 ? renderLockedStepCard(10) : (
              <div
                id="eightstep-card-10"
                style={{ backgroundColor: rc.cardBg, borderColor: rc.accent }}
                className="p-6 rounded-3xl border-2 space-y-4 shadow-xl animate-fadeIn text-left"
              >
                <div className="flex flex-wrap items-center justify-between border-b pb-2.5 gap-2" style={{ borderColor: rc.border }}>
                  <h3 style={{ color: rc.maroon }} className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-amber-600 animate-pulse" />
                    <span>{elevenStepData.step10_audioIntegration.title}</span>
                  </h3>
                  <span style={{ color: rc.textSecondary }} className="text-xs font-serif italic">
                    {elevenStepData.step10_audioIntegration.subtitle}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
                  <h4 style={{ ...activeFontStyle, color: rc.maroon }} className={`text-sm font-bold ${activeFontClass}`}>
                    🌸 {elevenStepData.step10_audioIntegration.sadhanaMethodName}
                  </h4>
                </div>

                <div className="space-y-3 pt-1">
                  {elevenStepData.step10_audioIntegration.stages.map((stg) => (
                    <div
                      key={stg.stageNumber}
                      style={{ backgroundColor: rc.bg, borderColor: rc.borderOrnament }}
                      className="p-4 rounded-2xl border space-y-1.5"
                    >
                      <h5 style={{ ...activeFontStyle, color: rc.maroon }} className={`font-bold text-xs sm:text-sm ${activeFontClass} flex items-center gap-2`}>
                        <span className="w-5 h-5 rounded-full bg-[#8B2500] text-white flex items-center justify-center text-[0.625rem] font-mono">
                          {stg.stageNumber}
                        </span>
                        <span>{stg.title}</span>
                      </h5>
                      <p style={{ ...activeFontStyle, color: rc.text }} className={`text-xs sm:text-sm ${activeFontClass} leading-relaxed pl-7`}>
                        {stg.instruction}
                      </p>
                    </div>
                  ))}
                </div>
                {renderUnlockNextButton(10)}
              </div>
            )}

            {/* STEP 11: सतगुरु कबीर साहेब का आशीर्वाद प्राप्त करें (Blessing & Sacred Certificate) */}
            {maxUnlockedEightStep < 11 ? renderLockedStepCard(11) : (
              <div
                id="eightstep-card-11"
                style={{ backgroundColor: rc.stepActive, borderColor: rc.accent }}
                className="p-6 sm:p-8 rounded-3xl border-2 text-center space-y-5 shadow-2xl animate-fadeIn relative overflow-hidden"
              >
                <div className="space-y-1">
                  <span className="text-xs font-serif font-black tracking-widest uppercase text-amber-600 block">
                    {language === 'pb'
                      ? '।।ਸਤਯਨਾਮ।। • ੧੧ਵਾਂ ਅੰਤਿਮ ਪਾਵਨ ਸੋਪਾਨ'
                      : language === 'en'
                      ? '|| Satyanaam || • 11th Final Sacred Step'
                      : '।।सत्यनाम।। • ११वाँ अन्तिम पावन सोपान'}
                  </span>
                  <h3 style={{ color: rc.maroon }} className="text-xl sm:text-2xl md:text-3xl font-black font-serif flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                    <span>{elevenStepData.step11_blessingCertificate.title}</span>
                  </h3>
                  <p style={{ color: rc.textSecondary }} className="text-xs sm:text-sm font-serif italic">
                    {elevenStepData.step11_blessingCertificate.subtitle}
                  </p>
                </div>

                {/* Blessing Verse Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 shadow-inner">
                  <p style={{ ...activeFontStyle, color: rc.maroon }} className={`text-base sm:text-xl ${activeFontClass} font-black italic whitespace-pre-line leading-relaxed`}>
                    {elevenStepData.step11_blessingCertificate.blessingVerse}
                  </p>
                </div>

                {/* Guru Vachan */}
                <div style={{ ...activeFontStyle, backgroundColor: rc.cardBg, borderColor: rc.border }} className={`p-4 rounded-2xl border text-xs sm:text-sm ${activeFontClass} space-y-2 text-left sm:text-center leading-relaxed`}>
                  <p style={{ color: rc.text }} className="font-bold">
                    {elevenStepData.step11_blessingCertificate.guruVachan}
                  </p>
                  <p style={{ color: rc.maroon }} className="text-xs sm:text-sm font-black italic pt-1">
                    {elevenStepData.step11_blessingCertificate.samarpanSankalp}
                  </p>
                  <p style={{ color: rc.maroon }} className="text-base font-black tracking-widest pt-1 text-center">
                    ।।साहेब बंदगी साहेब।।
                  </p>
                </div>

                {/* Action Buttons: Confetti + Blessing + Certificate Modal */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      try {
                        confetti({
                          particleCount: 200,
                          spread: 120,
                          origin: { y: 0.6 }
                        });
                      } catch {}
                      setShowCertificateModal(true);
                      onOpenBlessing(
                        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਅਸੀਸ ਤੇ ਸਮਰਪਣ' : language === 'en' ? 'Satguru Blessing & Dedication' : 'सतगुरु आशीर्वाद एवं समर्पण',
                        elevenStepData.step11_blessingCertificate.guruVachan
                      );
                    }}
                    style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                    className="px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Award className="w-5 h-5 text-amber-200" />
                    <span>{elevenStepData.step11_blessingCertificate.certificateActionLabel}</span>
                  </button>

                  <button
                    onClick={() => {
                      try {
                        confetti({
                          particleCount: 150,
                          spread: 100,
                          origin: { y: 0.6 }
                        });
                      } catch {}
                      onOpenBlessing(
                        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਅਸੀਸ ਤੇ ਸਮਰਪਣ' : language === 'en' ? 'Satguru Blessing & Dedication' : 'सतगुरु आशीर्वाद एवं समर्पण',
                        elevenStepData.step11_blessingCertificate.samarpanSankalp
                      );
                    }}
                    style={{
                      backgroundColor: rc.bg,
                      borderColor: rc.borderOrnament,
                      color: rc.maroon,
                    }}
                    className="px-5 py-3 rounded-2xl border font-bold text-sm hover:border-amber-500 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <HeartHandshake className="w-4 h-4 text-amber-600" />
                    <span>
                      {language === 'pb' ? 'ਸਵਾਧਿਆਏ ਸਮਰਪਣ ਕਰੋ' : language === 'en' ? 'Complete Swadhyay' : 'स्वाध्याय समर्पण करें'}
                    </span>
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* Sequential Next / Previous Sakhi Gesture Navigation Bar */}
          <div 
            style={{ backgroundColor: rc.bg, borderColor: rc.border }}
            className="p-3.5 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs font-serif"
          >
            {prevSakhi ? (
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSwipeDirection(1);
                  onSelectSakhi?.(prevSakhi);
                }}
                style={{ backgroundColor: rc.cardBg, borderColor: rc.accent, color: rc.maroon }}
                className="px-3.5 py-2 rounded-xl border shadow-sm flex items-center gap-1.5 font-bold hover:scale-105 transition cursor-pointer"
                title="Previous Sakhi (Swipe Right)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? `ਪਿਛਲੀ #${prevSakhi.number}` : language === 'en' ? `Prev #${prevSakhi.number}` : `पिछली साखी #${prevSakhi.number}`}</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2 text-[0.6875rem] opacity-75 font-serif mx-auto relative group">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>
                {language === 'pb' 
                  ? '👈 ਸਵਾਈਪ ਕਰੋ (ਅਗਲੀ/ਪਿਛਲੀ ਸਾਖੀ) 👉' 
                  : language === 'en' 
                  ? '👈 Swipe left / right to navigate Sakhis 👉' 
                  : '👈 स्वाइप करके अगली/पिछली साखी पढ़ें 👉'}
              </span>
              <button
                type="button"
                onClick={() => setShowSwipeHelp(true)}
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ml-1 text-amber-600 flex items-center justify-center"
                title="Swipe Gesture Help Guide"
              >
                <HelpCircle className="w-3.5 h-3.5" />
              </button>
            </div>

            {nextSakhi ? (
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSwipeDirection(-1);
                  onSelectSakhi?.(nextSakhi);
                }}
                style={{ backgroundColor: rc.cardBg, borderColor: rc.accent, color: rc.maroon }}
                className="px-3.5 py-2 rounded-xl border shadow-sm flex items-center gap-1.5 font-bold hover:scale-105 transition cursor-pointer"
                title="Next Sakhi (Swipe Left)"
              >
                <span>{language === 'pb' ? `ਅਗਲੀ #${nextSakhi.number}` : language === 'en' ? `Next #${nextSakhi.number}` : `अगली साखी #${nextSakhi.number}`}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>
        </motion.div>
      </AnimatePresence>

    </div>

      {/* =======================================================
          FULLSCREEN DISTRACTION-FREE READING OVERLAY (FOCUS MODE)
         ======================================================= */}
      {isZenMode && (
        <div
          ref={zenContainerRef}
          style={{ backgroundColor: rc.bg }}
          className="fixed inset-0 z-[100] overflow-y-auto flex flex-col justify-between p-4 sm:p-8 select-none transition-all duration-500 animate-fadeIn"
        >
          {/* Distraction-Free Header Bar - Compact sticky top bar with prominent Return CTA */}
          <div className="sticky top-0 z-30 flex items-center justify-between gap-2 border-b py-2 px-1 backdrop-blur-md min-h-[52px]" style={{ borderColor: rc.border, backgroundColor: rc.bg }}>
            <div className="flex items-center gap-2 min-w-0">
              <span
                style={{ backgroundColor: rc.accentLight, color: rc.maroon, borderColor: rc.accent }}
                className="px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide border shadow-xs flex items-center gap-1 truncate"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{language === 'pb' ? 'ਨਿਰਵਿਕਲਪ ਸਵਾਧਿਆਏ' : language === 'en' ? 'Zen Focus Mode' : 'जेन एकाग्रता स्वाध्याय'}</span>
              </span>
              <span className="text-xs font-bold opacity-75 hidden md:inline whitespace-nowrap" style={{ color: rc.textSecondary }}>
                {getLocalizedGranthaName(sakhi.grantha, language)} • #{sakhi.number}
              </span>
            </div>

            {/* Embedded Compact Toggles + Always-Visible Top Return Button */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="hidden sm:flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-1 border border-amber-400/20">
                <Type className="w-3.5 h-3.5 mr-1 ml-1 text-amber-700 shrink-0" />
                {['small', 'medium', 'large', 'xl', 'elderly'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSetLocalFontSize(size as any)}
                    style={{
                      backgroundColor: localFontSize === size ? rc.accent : 'transparent',
                      color: localFontSize === size ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className="px-2 py-1 rounded-lg font-black text-xs uppercase transition cursor-pointer"
                    title={`Font Size: ${size}`}
                  >
                    {size === 'small' ? 'A-' : size === 'medium' ? 'A' : size === 'large' ? 'A+' : size === 'xl' ? 'A++' : 'A+++'}
                  </button>
                ))}
              </div>

              <div className="hidden lg:flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-1 border border-amber-400/20">
                {[
                  { id: 'default', label: fl.themeMool },
                  { id: 'flow_state', label: fl.themeFlow },
                  { id: 'sepia', label: fl.themePothi },
                  { id: 'oled', label: fl.themeOled },
                  { id: 'contrast', label: fl.themeEye },
                ].map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => changeReadingTheme(th.id as any)}
                    style={{
                      backgroundColor: readingTheme === th.id ? rc.accent : 'transparent',
                      color: readingTheme === th.id ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className="px-2 py-1 rounded-lg text-xs font-bold transition cursor-pointer"
                  >
                    {th.label}
                  </button>
                ))}
              </div>

              {/* Serif vs Sans Font Style Toggle in Zen Mode */}
              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-1 border border-amber-400/20">
                {[
                  { id: 'serif' as const, label: language === 'pb' ? 'ਪਾਰੰਪਰਿਕ' : language === 'en' ? 'Serif' : 'ग्रंथ' },
                  { id: 'sans' as const, label: language === 'pb' ? 'ਸਰਲ' : language === 'en' ? 'Sans' : 'सरल' },
                ].map((ff) => (
                  <button
                    key={ff.id}
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setFontFamily(ff.id);
                    }}
                    style={{
                      backgroundColor: fontFamily === ff.id ? rc.accent : 'transparent',
                      color: fontFamily === ff.id ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className="px-2 py-1 rounded-lg text-xs font-bold transition cursor-pointer"
                    title={ff.id === 'serif' ? 'Noto Serif / Traditional' : 'Mukta / Noto Sans Clean'}
                  >
                    {ff.label}
                  </button>
                ))}
              </div>

              {/* Exit Focus Mode Button — Guaranteed Top-Visible & 44px Touch Target */}
              <button
                type="button"
                onClick={() => {
                  setIsZenMode(false);
                  setCurrentReadingMode('swadhyay');
                  setSelectedGlossaryKey(null);
                  if (typeof document !== 'undefined' && document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                  }
                  window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
                }}
                style={{
                  backgroundColor: rc.maroon,
                  color: '#FFFFFF',
                }}
                className="min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer hover:opacity-90 active:scale-95 transition whitespace-nowrap shrink-0"
                title="Exit Focus Mode (Esc)"
              >
                <Minimize2 className="w-4 h-4 shrink-0" />
                <span>{fl.exitZen}</span>
              </button>
            </div>
          </div>

          {/* Central Focus Scripture Display - Spacious Grand Granth Canvas */}
          <div className="flex-1 flex flex-col justify-center max-w-5xl lg:max-w-6xl mx-auto my-6 sm:my-8 space-y-6 sm:space-y-8 w-full relative px-2 sm:px-6">
            {/* Prev / Next Navigation Floating Arrows inside Focus Mode */}
            <div className="flex items-center justify-between w-full absolute -top-2 left-0 right-0 pointer-events-none px-2 z-20">
              {prevSakhi ? (
                <button
                  type="button"
                  onClick={() => onSelectSakhi?.(prevSakhi)}
                  style={{ backgroundColor: rc.cardBg, borderColor: rc.accent, color: rc.maroon }}
                  className="pointer-events-auto p-2 sm:px-3 sm:py-1.5 rounded-2xl border shadow-lg flex items-center gap-1 text-xs font-bold hover:scale-105 transition cursor-pointer"
                  title={language === 'pb' ? 'ਪਿਛਲੀ ਸਾਖੀ' : language === 'en' ? 'Previous Sakhi' : 'पिछली साखी'}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {language === 'pb' ? `ਸਾਖੀ #${prevSakhi.number}` : language === 'en' ? `Sakhi #${prevSakhi.number}` : `साखी #${prevSakhi.number}`}
                  </span>
                </button>
              ) : <div />}

              {nextSakhi ? (
                <button
                  type="button"
                  onClick={() => onSelectSakhi?.(nextSakhi)}
                  style={{ backgroundColor: rc.cardBg, borderColor: rc.accent, color: rc.maroon }}
                  className="pointer-events-auto p-2 sm:px-3 sm:py-1.5 rounded-2xl border shadow-lg flex items-center gap-1 text-xs font-bold hover:scale-105 transition cursor-pointer"
                  title={language === 'pb' ? 'ਅਗਲੀ ਸਾਖੀ' : language === 'en' ? 'Next Sakhi' : 'अगली साखी'}
                >
                  <span className="hidden sm:inline">
                    {language === 'pb' ? `ਸਾਖੀ #${nextSakhi.number}` : language === 'en' ? `Sakhi #${nextSakhi.number}` : `साखी #${nextSakhi.number}`}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : <div />}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={sakhi.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-center space-y-4 pt-8"
              >
                {/* Zen Mode View Mode Switcher Tabs */}
                <div className="flex items-center justify-center gap-2 py-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setZenViewTab('moolvani')}
                    style={{
                      backgroundColor: zenViewTab === 'moolvani' ? rc.accent : rc.cardBg,
                      color: zenViewTab === 'moolvani' ? '#FFFFFF' : rc.maroon,
                      borderColor: rc.accent,
                    }}
                    className="px-4 py-2 rounded-2xl border text-xs font-serif font-black shadow-sm transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Scroll className="w-4 h-4" />
                    <span>{language === 'pb' ? '📜 ਮੂਲ ਬਾਣੀ ਤੇ ਬੋਧ' : language === 'en' ? '📜 Mool Vani & Insight' : '📜 मूलवाणी व बोध'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setZenViewTab('elevensteps')}
                    style={{
                      backgroundColor: zenViewTab === 'elevensteps' ? rc.accent : rc.cardBg,
                      color: zenViewTab === 'elevensteps' ? '#FFFFFF' : rc.maroon,
                      borderColor: rc.accent,
                    }}
                    className="px-4 py-2 rounded-2xl border text-xs font-serif font-black shadow-sm transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Compass className="w-4 h-4" />
                    <span>{language === 'pb' ? '🧭 ੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ' : language === 'en' ? '🧭 All 11 Swadhyay Steps' : '🧭 सम्पूर्ण ११-चरणीय स्वाध्याय'}</span>
                  </button>
                </div>

                {zenViewTab === 'elevensteps' ? (
                  <div className="text-left py-2 max-w-5xl mx-auto w-full">
                    <div className="p-4 mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center text-xs font-serif font-bold text-amber-900 dark:text-amber-200">
                      {language === 'pb' ? '✨ ਨਿਰਵਿਕਲਪ ਧਿਆਨ ਵਿੱਚ ਸਾਰੇ ੧੧ ਚਰਣ' : language === 'en' ? '✨ All 11 Swadhyay Steps in Zen Focus Mode' : '✨ जेन एकाग्रता मोड में सभी ११ स्वाध्याय सोपान'}
                    </div>
                    <ZenElevenStepsViewer
                      sakhi={sakhi}
                      language={language}
                      eightStepData={eightStepData}
                      elevenStepData={elevenStepData}
                      rc={rc}
                      readingTheme={readingTheme}
                      onSaveToDiary={onSaveToDiary}
                      onOpenCertificate={() => setShowCertificateModal(true)}
                      handlePlayStanza={handlePlayStanza}
                      activePlayingStanzaKey={activePlayingStanzaKey}
                      onExitZen={() => setIsZenMode(false)}
                      onReshuffleQuiz={handleReshuffleQuizAttempt}
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={handleToggleMoolvani}
                        style={{
                          backgroundColor: showMoolvani ? rc.accentLight : rc.cardBg,
                          borderColor: rc.accent,
                          color: rc.maroon,
                        }}
                        className="px-3.5 py-1 rounded-full text-xs font-serif font-black border flex items-center gap-1.5 shadow-2xs hover:opacity-90 cursor-pointer transition"
                        title={showMoolvani ? 'मूलवाणी छिपाएं' : 'मूलवाणी दिखाएं'}
                      >
                        <Scroll className="w-3.5 h-3.5 text-amber-600" />
                        <span>
                          {showMoolvani
                            ? (language === 'pb' ? '📜 ਮੂਲ ਬਾਣੀ (ਪਵਿੱਤਰ ਪਾਠ)' : language === 'en' ? '📜 Original Moolvani' : '📜 मूलवाणी (पावन गुरु-पाठ)')
                            : (language === 'pb' ? '📜 ਮੂਲ ਬਾਣੀ ਦਿਖਾਓ' : language === 'en' ? '📜 Show Moolvani' : '📜 मूलवाणी दिखाएं')}
                        </span>
                      </button>
                    </div>

              {/* Primary Doha / Couplet Box with Parchment Styling & motion.div Fade-in */}
              <AnimatePresence mode="wait">
                {showMoolvani ? (
                  <motion.div
                    key={`focus-moolvani-on-${sakhi.number}-${language}`}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={activeFontStyle}
                    className={`${fontSizes[localFontSize]} ${getLineHeightClass(lineHeight)} ${activeFontClass} p-3.5 xs:p-5 sm:p-10 rounded-3xl border-2 border-[#d6ba8d]/80 dark:border-[#735732]/80 bg-gradient-to-br from-[#fbf6e9] via-[#f7ebd4] to-[#f2dfbf] dark:from-[#2c241c] dark:via-[#221b14] dark:to-[#1a140f] text-[#38200b] dark:text-[#fffdf5] shadow-2xl relative transition-all duration-300 font-bold sm:font-black ring-1 ring-inset ring-[#e8d2a7]/40 dark:ring-[#4a3a24]/40 max-w-full overflow-hidden`}
                  >
                    {/* Antique Corner Flourishes */}
                    <div className="absolute top-3 left-4 text-amber-700/30 text-sm font-serif select-none">✦</div>
                    <div className="absolute top-3 right-4 text-amber-700/30 text-sm font-serif select-none">✦</div>
                    <div className="absolute bottom-3 left-4 text-amber-700/30 text-sm font-serif select-none">✦</div>
                    <div className="absolute bottom-3 right-4 text-amber-700/30 text-sm font-serif select-none">✦</div>

                    {renderInteractiveCouplet(sakhi.text[language] || sakhi.text.hi)}
                  </motion.div>
                ) : (
                  <motion.div
                    key={`focus-moolvani-off-${sakhi.number}-${language}`}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="p-8 rounded-3xl border-2 border-dashed border-amber-500/30 bg-amber-500/5 text-center font-serif text-sm italic space-y-1"
                  >
                    <p className="font-bold text-amber-800 dark:text-amber-300">
                      {language === 'pb' ? '।। ਮੂਲ ਬਾਣੀ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ ਛੁਪਾਈ ਗਈ ਹੈ ।।' : language === 'en' ? '|| Moolvani Text Hidden ||' : '।। मूलवाणी दृष्टि से छिपाई गई है ।।'}
                    </p>
                    <p className="text-xs text-stone-500">
                      {language === 'pb' ? 'ਮੂਲ ਬਾਣੀ ਵੇਖਣ ਲਈ ਉੱਪਰ ਦਿੱਤਾ ਬਟਨ ਦਬਾਓ' : language === 'en' ? 'Click above to toggle Moolvani visibility' : 'मूलवाणी देखने हेतु ऊपर बटन दबाएं'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Word Meanings Popup in Focus Mode */}
              {activeGlossaryItem && (
                <div
                  style={{
                    backgroundColor: rc.cardBg,
                    borderColor: rc.accent,
                    color: rc.text,
                  }}
                  className="p-4 rounded-2xl border-2 shadow-2xl animate-scaleUp text-center relative z-30 space-y-2 max-w-md mx-auto"
                >
                  <div className="flex items-center justify-between border-b pb-1.5 gap-2" style={{ borderColor: rc.border }}>
                    <div className="text-[0.625rem] font-bold uppercase tracking-widest text-left" style={{ color: rc.accent }}>
                      {fl.glossaryHeader}
                    </div>
                    {/* Multilingual language switcher in Zen Mode */}
                    <div className="flex items-center gap-1">
                      {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                        const isCur = language === lng;
                        return (
                          <button
                            key={lng}
                            type="button"
                            onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                            style={{
                              backgroundColor: isCur ? rc.accent : rc.bg,
                              color: isCur ? '#FFFFFF' : rc.maroon,
                              borderColor: rc.border,
                            }}
                            className="px-2 py-0.5 rounded text-[0.625rem] font-bold border transition cursor-pointer hover:opacity-90"
                          >
                            {lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setSelectedGlossaryKey(null)}
                        className="p-1 rounded-full hover:bg-black/10 transition cursor-pointer ml-1"
                        style={{ color: rc.textSecondary }}
                        title={fl.close}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className={`${activeFontClass} font-black text-xl`} style={{ ...activeFontStyle, color: rc.maroon }}>
                    {activeGlossaryItem.word}
                  </div>
                  <p className={`text-sm leading-relaxed ${activeFontClass}`} style={{ ...activeFontStyle, color: rc.text }}>
                    {activeGlossaryItem.meaning}
                  </p>

                  {/* Cross-lingual word correspondence */}
                  {selectedGlossaryKey?.type === 'data' && (
                    <div className="flex flex-wrap justify-center items-center gap-2 pt-1 text-[0.6875rem]">
                      {language !== 'pb' && sakhi.wordMeanings.pb?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('pb')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif cursor-pointer hover:bg-amber-500/20 transition"
                        >
                          ਪੰਜਾਬੀ: <strong className="font-bold">{sakhi.wordMeanings.pb[selectedGlossaryKey.index].word}</strong>
                        </button>
                      )}
                      {language !== 'en' && sakhi.wordMeanings.en?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('en')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-sans cursor-pointer hover:bg-amber-500/20 transition"
                        >
                          EN: <strong className="font-bold">{sakhi.wordMeanings.en[selectedGlossaryKey.index].word}</strong>
                        </button>
                      )}
                      {language !== 'hi' && sakhi.wordMeanings.hi?.[selectedGlossaryKey.index] && (
                        <button
                          type="button"
                          onClick={() => onChangeLanguage && onChangeLanguage('hi')}
                          className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif cursor-pointer hover:bg-amber-500/20 transition"
                        >
                          हिन्दी: <strong className="font-bold">{sakhi.wordMeanings.hi[selectedGlossaryKey.index].word}</strong>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

            {/* Deep Meaning / Bhavarth & Contemplation in Focus Mode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-4.5 rounded-2xl border space-y-1.5 shadow-sm"
              >
                <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: rc.accent }}>
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>{fl.bhavarthHeading}:</span>
                </div>
                <div style={{ ...activeFontStyle, color: rc.text }} className={`text-sm sm:text-base ${activeFontClass} sacred-meaning-typography ${getLineHeightClass(lineHeight)}`}>
                  <SmartGlossaryText text={enrichBhavarthWithNihAkshar(getStep1ConciseMeaning(sakhi, language), language)} language={language} />
                </div>
              </div>

              <div
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
                className="p-4.5 rounded-2xl border space-y-1.5 shadow-sm"
              >
                <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: rc.accent }}>
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>{language === 'pb' ? 'ਚਿੰਤਨ-ਸੂਤਰ' : language === 'en' ? 'Contemplation' : 'चिंतन सूत्र'}:</span>
                </div>
                <blockquote style={{ ...activeFontStyle, color: rc.text, borderColor: rc.accent }} className={`text-sm sm:text-base ${activeFontClass} sacred-meaning-typography ${getLineHeightClass(lineHeight)} italic border-l-3 pl-3`}>
                  "{sakhi.contemplation[language]}"
                </blockquote>
              </div>
            </div>
          </>
          )}
          </motion.div>
        </AnimatePresence>
      </div>

          {/* Immersive Audio & Exit Controls Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t" style={{ borderColor: rc.border }}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleAmbient}
                style={{
                  backgroundColor: isAmbientPlaying ? rc.accent : rc.cardBg,
                  color: isAmbientPlaying ? '#FFFFFF' : rc.textSecondary,
                  borderColor: rc.border,
                }}
                className="p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-xs"
              >
                <Volume2 className="w-4 h-4" />
                <span>{fl.bgDhun}</span>
              </button>

              <button
                type="button"
                onClick={() => handleToggleSpeech()}
                style={{
                  backgroundColor: isSpeaking ? rc.accent : rc.cardBg,
                  color: isSpeaking ? '#FFFFFF' : rc.text,
                  borderColor: rc.border,
                }}
                className="p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-xs"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
                <span>
                  {isSpeaking
                    ? language === 'pb'
                      ? 'ਮੌਨ'
                      : language === 'en'
                      ? 'Mute'
                      : 'मौन'
                    : language === 'pb'
                    ? 'ਪਾਠ ਸੁਣੋ'
                    : language === 'en'
                    ? 'Listen'
                    : 'पाठ सुनें'}
                </span>
              </button>

              <div className="flex items-center gap-1 ml-2">
                <button
                  type="button"
                  onClick={() => setIsAkhandScrollActive(!isAkhandScrollActive)}
                  style={{
                    backgroundColor: isAkhandScrollActive ? rc.accent : rc.cardBg,
                    color: isAkhandScrollActive ? '#FFFFFF' : rc.textSecondary,
                    borderColor: rc.border,
                  }}
                  className="p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-xs"
                  title="Auto-Scroll"
                >
                  {isAkhandScrollActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="hidden xs:inline">{isAkhandScrollActive ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'रोकें') : (language === 'pb' ? 'ਸਵੈ-ਸਕਰੋਲ' : language === 'en' ? 'Auto-Scroll' : 'स्वतः स्क्रॉल')}</span>
                </button>

                {isAkhandScrollActive && (
                  <select
                    value={scrollSpeed}
                    onChange={(e) => setScrollSpeed(e.target.value as any)}
                    style={{ color: rc.text, borderColor: rc.border, backgroundColor: rc.bg }}
                    className="p-2 rounded-xl border font-bold text-xs cursor-pointer focus:outline-none shadow-xs"
                  >
                    {['0.2x', '0.5x', '0.75x', '1x', '1.5x', '2x', '2.5x', '3x', '5x'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                )}
              </div>

              {/* Zen Mode Language Switcher */}
              <div 
                className="flex items-center rounded-xl p-0.5 border shadow-xs ml-2" 
                style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
              >
                {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                  const isCur = language === lng;
                  return (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => onChangeLanguage && onChangeLanguage(lng)}
                      style={{
                        backgroundColor: isCur ? rc.accent : 'transparent',
                        color: isCur ? '#FFFFFF' : rc.textSecondary,
                      }}
                      className="px-2 py-1 rounded-lg text-xs font-bold transition cursor-pointer hover:opacity-90"
                      title={lng === 'hi' ? 'हिन्दी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                    >
                      {lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsZenMode(false);
                setCurrentReadingMode('swadhyay');
                setSelectedGlossaryKey(null);
                if (typeof document !== 'undefined' && document.fullscreenElement) {
                  document.exitFullscreen().catch(() => {});
                }
                window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
              }}
              style={{
                backgroundColor: rc.accent,
                color: '#FFFFFF',
              }}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg hover:opacity-95 transition cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
              <span>{fl.exitZen}</span>
            </button>
          </div>
        </div>
      )}
      {/* =======================================================
          SACRED QUOTE IMAGE CARD GENERATOR MODAL (MOBILE OPTIMIZED)
         ======================================================= */}
      <QuoteCardModal
        isOpen={showImageGenerator}
        onClose={() => setShowImageGenerator(false)}
        sakhi={sakhi}
        initialLanguage={language}
        onLanguageChange={onChangeLanguage}
        isBellEnabled={isBellEnabled}
      />

      {/* Smart Non-intrusive Glossary Tooltip */}
      <SmartGlossaryTooltip
        term={activeSmartTerm}
        targetRect={smartTooltipTargetRect}
        onClose={() => {
          setActiveSmartTerm(null);
          setSmartTooltipTargetRect(null);
        }}
        onOpenFullModal={(term) => {
          setActiveSmartTerm(null);
          setFullSmartModalTerm(term);
        }}
        onSelectSakhi={onSelectSakhi}
        language={language}
      />

      {/* Full Sandhukkari Word Detail Modal (when user clicks 'View Details' in the tooltip) */}
      <SandhukkariGlossaryModal
        term={fullSmartModalTerm}
        isOpen={Boolean(fullSmartModalTerm)}
        onClose={() => setFullSmartModalTerm(null)}
        language={language}
      />

      {/* Dedicated Smart Glossing Explorer Tool Modal */}
      <SmartGlossingToolModal
        isOpen={showSmartGlossingTool}
        onClose={() => setShowSmartGlossingTool(false)}
        language={language}
      />

      <AccessibilityModal
        isOpen={showAccessibilityModal}
        onClose={() => setShowAccessibilityModal(false)}
        language={language}
      />

      {/* ℹ️ Non-Intrusive Swipe Gesture Help Overlay */}
      {showSwipeHelp && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-[110]" onClick={() => setShowSwipeHelp(false)}>
          <div 
            style={{ backgroundColor: rc.cardBg, borderColor: rc.accent }}
            className="w-full max-w-sm rounded-3xl p-5 border-2 shadow-2xl space-y-4 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 border-b border-amber-500/10">
              <div className="flex items-center gap-1.5 font-serif font-black text-sm" style={{ color: rc.maroon }}>
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{language === 'pb' ? 'ਸਵਾਈਪ ਗਾਈਡ' : language === 'en' ? 'Swipe Gestures Guide' : 'स्वाइप (Swipe) संचालन मार्गदर्शिका'}</span>
              </div>
              <button onClick={() => setShowSwipeHelp(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                ✕
              </button>
            </div>
            
            <div className="space-y-3.5 text-xs font-serif leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="text-lg">👈</span>
                <div>
                  <h4 className="font-bold" style={{ color: rc.text }}>
                    {language === 'pb' ? 'ਅਗਲੀ ਸਾਖੀ (ਖੱਬੇ ਪਾਸੇ ਸਵਾਈਪ):' : language === 'en' ? 'Next Sakhi (Swipe Left):' : 'अगली साखी (बाएँ स्वाइप करें):'}
                  </h4>
                  <p style={{ color: rc.textSecondary }}>
                    {language === 'pb' ? 'ਸਕ੍ਰੀਨ ਨੂੰ ਖੱਬੇ ਪਾਸੇ ਖਿੱਚਣ ਨਾਲ ਅਗਲੀ ਸਾਖੀ ਖੁੱਲ੍ਹੇਗੀ।' : language === 'en' ? 'Drag screen left to open the next spiritual Sakhi.' : 'स्क्रीन को बाएँ की ओर खींचने या सरकाने पर अगली साखी होगी।'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-lg">👉</span>
                <div>
                  <h4 className="font-bold" style={{ color: rc.text }}>
                    {language === 'pb' ? 'ਪਿਛਲੀ ਸਾਖੀ (ਸੱਜੇ ਪਾਸੇ ਸਵਾਈਪ):' : language === 'en' ? 'Previous Sakhi (Swipe Right):' : 'पिछली साखी (दाएँ स्वाइप करें):'}
                  </h4>
                  <p style={{ color: rc.textSecondary }}>
                    {language === 'pb' ? 'ਸਕ੍ਰੀਨ ਨੂੰ ਸੱਜੇ ਪਾਸੇ ਖਿੱਚਣ ਨਾਲ ਪਿਛਲੀ ਸਾਖੀ ਖੁੱਲ੍ਹੇਗੀ।' : language === 'en' ? 'Drag screen right to open the previous spiritual Sakhi.' : 'स्क्रीन को दाएँ की ओर खींचने या सरकाने पर पिछली साखी होगी।'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-lg">↕️</span>
                <div>
                  <h4 className="font-bold" style={{ color: rc.text }}>
                    {language === 'pb' ? 'ਸਕਰੋਲ ਕਰਨਾ (ਉੱਪਰ/ਹੇਠਾਂ):' : language === 'en' ? 'Vertical Scroll (Up/Down):' : 'ऊर्ध्वाधर स्क्रॉल (ऊपर/नीचे):'}
                  </h4>
                  <p style={{ color: rc.textSecondary }}>
                    {language === 'pb' ? 'ਪਾਠ ਦੇ ਗੂੜ੍ਹ ਰਹੱਸ ਪੜ੍ਹਨ ਲਈ ਉੱਪਰ-ਹੇਠਾਂ ਆਰਾਮ ਨਾਲ ਸਕਰੋਲ ਕਰੋ।' : language === 'en' ? 'Scroll up and down freely to read word meanings and deep spiritual essence.' : 'वाणी के शब्दार्थ और भावार्थ को सहजता से पढ़ने के लिए सामान्य रूप से ऊपर-नीचे स्क्रॉल करें।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button 
                onClick={() => setShowSwipeHelp(false)} 
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="w-full py-2 rounded-xl text-xs font-bold transition hover:opacity-95 cursor-pointer shadow-sm"
              >
                {language === 'pb' ? 'ਸਮਝ ਲਿਆ' : language === 'en' ? 'Got It' : 'ठीक है, समझ गए'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📜 11th Step Sacred Swadhyay Blessing Certificate Modal */}
      <SwadhyayCertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        sakhi={sakhi}
        language={language}
        themeBlessing={elevenStepData.step11_blessingCertificate.oneLineBlessing}
      />
    </div>
  );
};
