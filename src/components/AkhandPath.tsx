import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Eye, 
  Type, 
  BookOpen, 
  ArrowLeft,
  X,
  Share2,
  Download,
  Copy,
  Check,
  Filter,
  Shuffle,
  FileText,
  ChevronDown
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { translations, getLocalizedGranthaName } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { formatCoupletString, ensureSatguruKabirSaheb, matchCoupletWordToGlossary } from '../utils/textSanitizer';
import { PaginationControls } from './PaginationControls';

interface AkhandPathProps {
  sakhis: Sakhi[];
  language: Language;
  onSelectSakhi: (sakhi: Sakhi) => void;
  onOpenBlessing: () => void;
  onClose?: () => void;
}

export const AkhandPath: React.FC<AkhandPathProps> = ({
  sakhis,
  language,
  onSelectSakhi,
  onOpenBlessing,
  onClose,
}) => {
  const { theme, speechRate: speed, setSpeechRate: setSpeed } = useAppTheme();
  const t = translations[language];

  // --- CATEGORIES STATE ---
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Compute distinct categories with localized titles and counts
  const categories = useMemo(() => {
    const map = new Map<string, { id: string; title: string; count: number }>();
    sakhis.forEach((s) => {
      const catId = s.category || 'other';
      const catTitle = s.categoryTitle[language] || s.categoryTitle.hi || catId;
      if (!map.has(catId)) {
        map.set(catId, { id: catId, title: catTitle, count: 1 });
      } else {
        map.get(catId)!.count++;
      }
    });
    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [sakhis, language]);

  // Filter sakhis based on selected category
  const filteredSakhis = useMemo(() => {
    if (selectedCategory === 'all') return sakhis;
    return sakhis.filter((s) => s.category === selectedCategory);
  }, [sakhis, selectedCategory]);

  const SAKHIS_PER_PAGE = 25;
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const targetPage = Math.floor(activeIndex / SAKHIS_PER_PAGE) + 1;
    setCurrentPage((prev) => (prev === targetPage ? prev : targetPage));
  }, [activeIndex]);

  const totalPages = Math.max(1, Math.ceil(filteredSakhis.length / SAKHIS_PER_PAGE));

  const paginatedSakhis = useMemo(() => {
    const start = (currentPage - 1) * SAKHIS_PER_PAGE;
    return filteredSakhis.slice(start, start + SAKHIS_PER_PAGE);
  }, [filteredSakhis, currentPage]);

  const handleAkhandPageChange = (page: number) => {
    sacredHaptics.lightTap();
    setCurrentPage(page);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- CONTINUOUS AUTO-SCROLL STATES ---
  const [continuousScroll, setContinuousScroll] = useState(false);
  const [continuousSpeed, setContinuousSpeed] = useState<'1x' | '1.5x' | '2x'>('1x');

  // --- REFRESH BUTTON OPTIMIZATION STATES ---
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshToast, setRefreshToast] = useState<string | null>(null);

  // --- TEXT SHARING EXPORT STATES ---
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportScope, setExportScope] = useState<'current' | 'all'>('current');
  const [exportCopied, setExportCopied] = useState(false);
  const [itemCopiedId, setItemCopiedId] = useState<string | null>(null);

  // --- SADHANA READING FEATURES STATES ---
  const [readingTheme, setReadingTheme] = useState<'default' | 'sepia' | 'oled' | 'contrast'>('default');
  const { fontSize, setFontSize } = useAppTheme();
  const [localFontSize, setLocalFontSize] = useState<'small' | 'medium' | 'large' | 'xl'>('medium');

  // Synchronize local states with global context settings
  useEffect(() => {
    if (fontSize === 'small') {
      setLocalFontSize('small');
    } else if (fontSize === 'medium') {
      setLocalFontSize('medium');
    } else if (fontSize === 'large') {
      setLocalFontSize('large');
    } else if (fontSize === 'xlarge') {
      setLocalFontSize('xl');
    }
  }, [fontSize]);

  const handleSetLocalFontSize = (size: 'small' | 'medium' | 'large' | 'xl') => {
    setLocalFontSize(size);
    if (size === 'small') {
      setFontSize('small');
    } else if (size === 'medium') {
      setFontSize('medium');
    } else if (size === 'large') {
      setFontSize('large');
    } else if (size === 'xl') {
      setFontSize('xlarge');
    }
  };
  const [focusRuler, setFocusRuler] = useState<boolean>(false);
  const [selectedGlossaryKey, setSelectedGlossaryKey] = useState<{ type: 'data'; sakhiId: string; index: number } | null>(null);

  // Derive active glossary word from key and current language
  const activeGlossaryItem = React.useMemo(() => {
    if (!selectedGlossaryKey) return null;
    const sakhiItem = sakhis.find(s => s.id === selectedGlossaryKey.sakhiId) || filteredSakhis[activeIndex];
    if (!sakhiItem) return null;
    const list = sakhiItem.wordMeanings[language] || sakhiItem.wordMeanings.hi || [];
    const item = list[selectedGlossaryKey.index] || null;
    return item ? { ...item, sakhi: sakhiItem } : null;
  }, [selectedGlossaryKey, language, sakhis, filteredSakhis, activeIndex]);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // --- FRAMER MOTION SWIPE GESTURE NAVIGATION FOR BANI VERSES ---
  const handleFramerMotionDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.2;
    
    // Prioritize horizontal swipe over vertical scroll
    if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) return;

    // Swipe Left (Go to Next Verse)
    if ((info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold)) {
      if (activeIndex < filteredSakhis.length - 1) {
        if (isPlaying) {
          handlePlaySingleSakhi(activeIndex + 1);
        } else {
          setActiveIndex(prev => prev + 1);
        }
        sacredHaptics.lightTap();
      }
    } 
    // Swipe Right (Go to Previous Verse)
    else if ((info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold)) {
      if (activeIndex > 0) {
        if (isPlaying) {
          handlePlaySingleSakhi(activeIndex - 1);
        } else {
          setActiveIndex(prev => prev - 1);
        }
        sacredHaptics.lightTap();
      }
    }
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Font sizes map
  const fontSizes = {
    small: 'text-base sm:text-lg',
    medium: 'text-lg sm:text-xl',
    large: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl md:text-4xl',
  };

  // Reading Theme styles resolver
  const rc = {
    bg: readingTheme === 'sepia' ? '#FAF4E8' : readingTheme === 'oled' ? '#000000' : readingTheme === 'contrast' ? '#ECEFF1' : theme.bg,
    cardBg: readingTheme === 'sepia' ? '#FFFDF9' : readingTheme === 'oled' ? '#121212' : readingTheme === 'contrast' ? '#FFFFFF' : theme.cardBg,
    text: readingTheme === 'sepia' ? '#2E1C0C' : readingTheme === 'oled' ? '#E5E7EB' : readingTheme === 'contrast' ? '#1C2833' : theme.textPrimary,
    textSecondary: readingTheme === 'sepia' ? '#6B4C2C' : readingTheme === 'oled' ? '#9CA3AF' : readingTheme === 'contrast' ? '#566573' : theme.textSecondary,
    textMuted: readingTheme === 'sepia' ? '#967654' : readingTheme === 'oled' ? '#6B7280' : readingTheme === 'contrast' ? '#7F8C8D' : theme.textMuted,
    accent: readingTheme === 'sepia' ? '#B87828' : readingTheme === 'oled' ? '#E2B16F' : readingTheme === 'contrast' ? '#117A65' : theme.accentGold,
    accentLight: readingTheme === 'sepia' ? '#FBE8C8' : readingTheme === 'oled' ? '#1E293B' : readingTheme === 'contrast' ? '#E8F8F5' : theme.accentGoldLight,
    maroon: readingTheme === 'sepia' ? '#8C2818' : readingTheme === 'oled' ? '#F87171' : readingTheme === 'contrast' ? '#922B21' : theme.sacredMaroon,
    border: readingTheme === 'sepia' ? '#E4D5BE' : readingTheme === 'oled' ? '#262626' : readingTheme === 'contrast' ? '#BDC3C7' : theme.cardBorder,
    borderOrnament: readingTheme === 'sepia' ? '#D9C19E' : readingTheme === 'oled' ? '#374151' : readingTheme === 'contrast' ? '#BDC3C7' : theme.borderOrnament,
    stepActive: readingTheme === 'sepia' ? '#F5E4C4' : readingTheme === 'oled' ? '#1E1B18' : readingTheme === 'contrast' ? '#D5F5E3' : theme.stepActiveBg,
  };

  // Explicit Close Handler that halts audio recitation, dhun, timers, and returns to daily view
  const handleClose = useCallback(() => {
    speechReciter.stop();
    satyanaamAudio.stopDhun();
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setIsAmbientPlaying(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Keyboard shortcut: Escape key closes Akhand Path
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !showExportModal && !selectedGlossaryKey) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, showExportModal, selectedGlossaryKey]);

  // Recitation logic targeting filteredSakhis
  const reciteActiveSakhi = (index: number, currentSpeed?: number) => {
    if (index >= filteredSakhis.length) {
      setIsPlaying(false);
      onOpenBlessing();
      return;
    }

    const currentSakhi = filteredSakhis[index];
    if (!currentSakhi) return;

    const bhavarthHeading = language === 'hi' ? 'भावार्थ' : language === 'pb' ? 'ਅਰਥ' : 'Meaning';
    const textToRead = `${currentSakhi.text[language]} । ${bhavarthHeading} । ${currentSakhi.bhavarth[language]}`;
    const effectiveSpeed = currentSpeed !== undefined ? currentSpeed : speed;

    speechReciter.setRate(effectiveSpeed);
    speechReciter.speak(
      textToRead,
      language,
      () => {
        // Dynamic pause based on chosen reading speed
        const pauseDelay = effectiveSpeed <= 0.8 ? 1600 : effectiveSpeed >= 1.05 ? 750 : 1100;
        timerRef.current = window.setTimeout(() => {
          setActiveIndex((prev) => {
            const nextIdx = prev + 1;
            if (nextIdx < filteredSakhis.length) {
              reciteActiveSakhi(nextIdx, effectiveSpeed);
            } else {
              setIsPlaying(false);
              onOpenBlessing();
            }
            return nextIdx;
          });
        }, pauseDelay);
      },
      () => {
        setIsPlaying(false);
      }
    );
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      speechReciter.stop();
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsPlaying(false);
      const toastMsg = language === 'hi'
        ? 'स्वर-पाठ विराम (Paused)'
        : language === 'pb'
        ? 'ਪਾਠ ਵਿਰਾਮ (Paused)'
        : 'Recitation paused';
      setRefreshToast(toastMsg);
      setTimeout(() => setRefreshToast(null), 2000);
    } else {
      setIsPlaying(true);
      reciteActiveSakhi(activeIndex, speed);
      const toastMsg = language === 'hi'
        ? 'स्वर-पाठ आरंभ हो रहा है (Recitation Playing)...'
        : language === 'pb'
        ? 'ਪਾਠ ਸ਼ੁਰੂ ਹੋ ਰਿਹਾ ਹੈ...'
        : 'Recitation started...';
      setRefreshToast(toastMsg);
      setTimeout(() => setRefreshToast(null), 2200);
    }
  };

  const handleStopVoice = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    speechReciter.stop();
    setIsPlaying(false);
    const stopMsg = language === 'hi'
      ? 'स्वर-पाठ / आवाज़ पूर्णतः रोक दी गई है (Voice Stopped)'
      : language === 'pb'
      ? 'ਪਾਠ ਦੀ ਆਵਾਜ਼ ਰੋਕ ਦਿੱਤੀ ਗਈ ਹੈ (Voice Stopped)'
      : 'Voice recitation stopped';
    setRefreshToast(stopMsg);
    setTimeout(() => setRefreshToast(null), 2500);
  };

  const handlePlaySingleSakhi = (index: number) => {
    if (isPlaying && activeIndex === index) {
      handleStopVoice();
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    speechReciter.stop();
    setActiveIndex(index);
    setIsPlaying(true);
    reciteActiveSakhi(index, speed);
  };

  const handleToggleAmbient = () => {
    if (isAmbientPlaying) {
      satyanaamAudio.stopDhun();
      setIsAmbientPlaying(false);
    } else {
      satyanaamAudio.setLanguage(language);
      satyanaamAudio.setVolume(0.12);
      satyanaamAudio.startDhun();
      setIsAmbientPlaying(true);
    }
  };

  // Optimized Refresh / Reset Handler with animation and visual toast
  const handleRefreshPath = () => {
    setIsRefreshing(true);
    speechReciter.stop();
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(0);
    setIsPlaying(false);
    setContinuousScroll(false);

    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const toastMsg = language === 'hi' 
      ? 'अखंड पाठ आरंभ से पुनः ताज़ा किया गया (साखी #1)' 
      : language === 'pb' 
      ? 'ਅਖੰਡ ਪਾਠ ਆਰੰਭ ਤੋਂ ਤਾਜ਼ਾ ਕੀਤਾ ਗਿਆ (ਸਾਖੀ #1)' 
      : 'Akhand Path refreshed to beginning (Sakhi #1)';
    setRefreshToast(toastMsg);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);

    setTimeout(() => {
      setRefreshToast(null);
    }, 3000);
  };

  // Random Sakhi jump helper
  const handleRandomSakhiJump = () => {
    if (filteredSakhis.length === 0) return;
    speechReciter.stop();
    setIsPlaying(false);
    const randIdx = Math.floor(Math.random() * filteredSakhis.length);
    setActiveIndex(randIdx);
    
    const toastMsg = language === 'hi'
      ? `यादृच्छिक साखी #${filteredSakhis[randIdx].number} पर पहुंचे`
      : language === 'pb'
      ? `ਬੇਤਰਤੀਬ ਸਾਖੀ #${filteredSakhis[randIdx].number} ਤੇ ਪਹੁੰਚੇ`
      : `Jumped to Sakhi #${filteredSakhis[randIdx].number}`;
    setRefreshToast(toastMsg);
    setTimeout(() => setRefreshToast(null), 2500);
  };

  // Category switch handler
  const handleSelectCategory = (catId: string) => {
    if (selectedCategory === catId) return;
    speechReciter.stop();
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setContinuousScroll(false);
    setSelectedCategory(catId);
    setActiveIndex(0);

    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll active card perfectly centered inside the overflow container smoothly
  useEffect(() => {
    if (autoScroll && activeCardRef.current && containerRef.current) {
      const container = containerRef.current;
      const card = activeCardRef.current;
      
      const containerHeight = container.clientHeight;
      const cardHeight = card.offsetHeight;
      const cardTop = card.offsetTop;
      const containerTop = container.offsetTop;
      
      const targetScrollTop = cardTop - containerTop - (containerHeight / 2) + (cardHeight / 2);
      
      container.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: 'smooth',
      });
    }
  }, [activeIndex, autoScroll]);

  // Continuous hands-free slow scrolling logic
  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;
    if (!container || !continuousScroll) return;

    const speedPixelsPerFrame = 
      continuousSpeed === '1x' ? 0.22 : 
      continuousSpeed === '1.5x' ? 0.44 : 0.77;

    const scrollStep = () => {
      if (!container || !continuousScroll) return;
      container.scrollTop += speedPixelsPerFrame;
      
      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 6) {
        setContinuousScroll(false);
        return;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [continuousScroll, continuousSpeed]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      speechReciter.stop();
      satyanaamAudio.stopDhun();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChangeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    speechReciter.setRate(newSpeed);

    const speedName = 
      newSpeed === 0.75 ? (language === 'hi' ? 'शांत (0.75x)' : language === 'pb' ? 'ਸ਼ਾਂਤ (0.75x)' : 'Slow / Meditative (0.75x)') :
      newSpeed === 0.9 ? (language === 'hi' ? 'मानक (0.9x)' : language === 'pb' ? 'ਮਿਆਰੀ (0.9x)' : 'Standard (0.9x)') :
      (language === 'hi' ? 'द्रुत (1.1x)' : language === 'pb' ? 'ਤੇਜ਼ (1.1x)' : 'Fast (1.1x)');

    if (isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      speechReciter.stop();
      reciteActiveSakhi(activeIndex, newSpeed);
      const toastMsg = language === 'hi'
        ? `पठन गति बदलकर ${speedName} की गई (स्वर-पाठ जारी)`
        : language === 'pb'
        ? `ਪਾਠ ਦੀ ਗਤੀ ਬਦਲ ਕੇ ${speedName} ਕੀਤੀ ਗਈ`
        : `Reading speed set to ${speedName}`;
      setRefreshToast(toastMsg);
      setTimeout(() => setRefreshToast(null), 2200);
    } else {
      const toastMsg = language === 'hi'
        ? `पठन गति: ${speedName} निर्धारित। सुनने के लिए '▶ पाठ आरंभ करें' दबाएं।`
        : language === 'pb'
        ? `ਪਾਠ ਦੀ ਗਤੀ: ${speedName} ਨਿਰਧਾਰਿਤ। ਸੁਣਨ ਲਈ '▶ ਪਾਠ ਆਰੰਭ ਕਰੋ' ਦਬਾਓ।`
        : `Reading speed: ${speedName} set. Press '▶ Play Recitation' to listen.`;
      setRefreshToast(toastMsg);
      setTimeout(() => setRefreshToast(null), 3000);
    }
  };

  // --- TEXT SHARING EXPORT GENERATION HELPERS ---
  const currentActiveSakhi = filteredSakhis[activeIndex] || filteredSakhis[0] || sakhis[0];

  const generateExportText = (scope: 'current' | 'all') => {
    const sList = scope === 'current' ? [currentActiveSakhi] : filteredSakhis;
    const activeCatObj = categories.find((c) => c.id === selectedCategory);
    const catName = selectedCategory === 'all' 
      ? (language === 'hi' ? 'समस्त साखी संग्रह' : language === 'pb' ? 'ਸਮੁੱਚਾ ਸਾਖੀ ਸੰਗ੍ਰਹਿ' : 'Complete Sakhi Collection')
      : (activeCatObj?.title || selectedCategory);

    let text = `${exactTop}\n`;
    text += `${language === 'hi' ? 'सतगुरु कबीर साहेब अखंड पाठ' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਖੰਡ ਪਾਠ' : 'Satguru Kabir Saheb Akhand Path'} - ${catName}\n`;
    text += `========================================================\n\n`;

    sList.forEach((s) => {
      text += `[#${s.number}] ${s.categoryTitle[language] || s.categoryTitle.hi}\n`;
      text += `--------------------------------------------------------\n`;
      text += `${s.text[language]}\n\n`;
      if (s.transliteration) {
        text += `"${s.transliteration}"\n\n`;
      }
      text += `${language === 'hi' ? '।। भावार्थ ।।' : language === 'pb' ? '।। ਭਾਵਾਰਥ ।।' : '|| Spiritual Meaning ||'}\n`;
      text += `${s.bhavarth[language]}\n\n`;
      text += `${language === 'hi' ? '।। आत्म-चिंतन ।।' : language === 'pb' ? '।। ਆਤਮ-ਚਿੰਤਨ ।।' : '|| Contemplation ||'}\n`;
      text += `${s.contemplation[language]}\n\n`;
      text += `--------------------------------------------------------\n\n`;
    });

    text += `========================================================\n`;
    text += `${exactBottom}\n`;
    text += `${language === 'hi' ? 'साहेब वर्ल्ड - सतगुरु कबीर साहेब स्वाध्याय ऐप' : language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਐਪ' : 'Saheb World - Satguru Kabir Saheb Swadhyay'}\n`;

    return text;
  };

  const handleCopyExportText = async () => {
    const text = generateExportText(exportScope);
    try {
      await navigator.clipboard.writeText(text);
      setExportCopied(true);
      setTimeout(() => setExportCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShareExport = async () => {
    const text = generateExportText(exportScope);
    const title = `Saheb World - Akhand Path (${exportScope === 'current' ? `Sakhi #${currentActiveSakhi.number}` : `${filteredSakhis.length} Sakhis`})`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    handleCopyExportText();
  };

  const handleDownloadTextFile = () => {
    const text = generateExportText(exportScope);
    const filename = exportScope === 'current' 
      ? `kabir_sakhi_${currentActiveSakhi.number}.txt` 
      : `kabir_akhand_path_${selectedCategory}_${filteredSakhis.length}.txt`;
    
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleQuickCopySakhi = async (s: Sakhi, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${exactTop}\n[#${s.number}] ${s.categoryTitle[language]}\n${s.text[language]}\n\n।। भावार्थ ।।\n${s.bhavarth[language]}\n\n${exactBottom}`;
    try {
      await navigator.clipboard.writeText(text);
      setItemCopiedId(s.id);
      setTimeout(() => setItemCopiedId(null), 2500);
    } catch {
      // ignore
    }
  };

  // Clickable dynamic word meanings glossary matching inside the continuous stream feed
  const renderInteractiveCouplet = (sakhiItem: Sakhi, isMainActive: boolean) => {
    const text = sakhiItem.text[language];
    const formatted = formatCoupletString(text);
    const lines = formatted.split('\n');
    const wordBreakdown = sakhiItem.wordMeanings[language] || sakhiItem.wordMeanings.hi || [];

    return (
      <div className="space-y-2 relative">
        {isMainActive && focusRuler && (
          <div 
            style={{ backgroundColor: rc.accentLight, borderColor: rc.accent }}
            className="absolute left-1 right-1 h-12 top-1/2 -translate-y-1/2 pointer-events-none rounded border-y border-dashed opacity-35 animate-pulse z-0"
          />
        )}

        {lines.map((line, lIdx) => {
          const words = line.split(/(\s+)/);
          return (
            <div key={lIdx} className="flex flex-wrap justify-center items-center gap-y-1 relative z-10">
              {words.map((word, wIdx) => {
                const cleanWord = word.trim().replace(/[।॥,.\s]/g, '');
                const glossaryKey = cleanWord 
                  ? (() => {
                      const foundIndex = matchCoupletWordToGlossary(cleanWord, wordBreakdown);
                      return foundIndex !== -1 ? { type: 'data' as const, sakhiId: sakhiItem.id, index: foundIndex } : null;
                    })()
                  : null;

                if (glossaryKey) {
                  return (
                    <button
                      type="button"
                      key={wIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGlossaryKey(glossaryKey);
                      }}
                      style={{
                        borderColor: rc.accent,
                        color: rc.maroon,
                      }}
                      className="cursor-pointer font-serif font-black border-b-2 border-dashed hover:opacity-80 transition px-0.5 rounded-sm hover:bg-amber-500/10 inline-block focus:outline-none focus:ring-1 focus:ring-amber-400"
                    >
                      {word}
                    </button>
                  );
                }

                return (
                  <span key={wIdx} style={{ color: rc.maroon }} className="font-serif font-bold inline-block">
                    {word}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const fLabels = {
    hi: {
      theme: 'थीम',
      themeMool: 'मूल',
      themePothi: 'पोथी',
      themeOled: 'ब्लैक',
      themeEye: 'नेत्र',
      font: 'फ़ॉन्ट',
      marker: 'पंक्ति गाइड',
      bgDhun: 'पृष्ठभूमि धुन',
      glossaryHeader: '।। पावन शब्दार्थ रहस्य ।।',
      close: 'बंद करें (दैनिक दर्शन)',
      closeShort: 'बंद करें',
      allCategories: 'सभी अंग (साखियाँ)',
      categoryFilter: 'श्रेणी / अंग चुनें',
      textExport: 'पाठ निर्यात',
      refreshTip: 'पाठ पुनः आरंभ करें (साखी #1)',
      shuffleTip: 'यादृच्छिक साखी पर जाएं',
      displayedCount: 'प्रदर्शित साखियाँ',
      clearFilter: 'फ़िल्टर हटाएं',
    },
    pb: {
      theme: 'ਥੀਮ',
      themeMool: 'ਮੂਲ',
      themePothi: 'ਪੋਥੀ',
      themeOled: 'ਬਲੈਕ',
      themeEye: 'ਨੇਤਰ',
      font: 'ਫੌਂਟ',
      marker: 'ਪੰਕਤੀ ਗਾਈਡ',
      bgDhun: 'ਪਿਛੋਕੜ ਧੁਨ',
      glossaryHeader: '।। ਪਾਵਨ ਸ਼ਬਦਾਰਥ ਰਹੱਸ ।।',
      close: 'ਬੰਦ ਕਰੋ (ਰੋਜ਼ਾਨਾ ਦਰਸ਼ਨ)',
      closeShort: 'ਬੰਦ ਕਰੋ',
      allCategories: 'ਸਾਰੇ ਅੰਗ (ਸਾਖੀਆਂ)',
      categoryFilter: 'ਸ਼੍ਰੇਣੀ / ਅੰਗ ਚੁਣੋ',
      textExport: 'ਪਾਠ ਨਿਰਯਾਤ',
      refreshTip: 'ਪਾਠ ਦੁਬਾਰਾ ਆਰੰਭ ਕਰੋ (ਸਾਖੀ #1)',
      shuffleTip: 'ਬੇਤਰਤੀਬ ਸਾਖੀ ਤੇ ਜਾਓ',
      displayedCount: 'ਦਿਖਾਈਆਂ ਸਾਖੀਆਂ',
      clearFilter: 'ਫਿਲਟਰ ਹਟਾਓ',
    },
    en: {
      theme: 'Theme',
      themeMool: 'App',
      themePothi: 'Parch',
      themeOled: 'OLED',
      themeEye: 'Contrast',
      font: 'Font',
      marker: 'Eye Guide',
      bgDhun: 'Ambient',
      glossaryHeader: '|| Sacred Word Glossary ||',
      close: 'Close (Daily View)',
      closeShort: 'Close',
      allCategories: 'All Categories (Angs)',
      categoryFilter: 'Filter by Category',
      textExport: 'Export Text',
      refreshTip: 'Refresh to start (Sakhi #1)',
      shuffleTip: 'Random Sakhi Jump',
      displayedCount: 'Displayed Sakhis',
      clearFilter: 'Clear Filter',
    }
  };

  const fl = fLabels[language] || fLabels.hi;

  return (
    <div
      id="akhand-path-container"
      style={{
        backgroundColor: rc.cardBg,
        borderColor: rc.border,
        color: rc.text,
      }}
      className="rounded-2xl border shadow-xl overflow-hidden flex flex-col transition-all duration-300 relative mx-auto w-full max-w-7xl"
    >
      {/* Akhand Path Header Controls */}
      <div
        style={{
          backgroundColor: rc.bg,
          borderColor: rc.border,
        }}
        className="p-4 sm:p-5 border-b space-y-4 sticky top-14 z-20 backdrop-blur-md shadow-xs"
      >
        {/* Top Header Row with Title, Primary Actions & Explicit Close Button */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex-1 min-w-[240px]">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold font-serif" style={{ color: rc.text }}>
                {t.akhandPathTitle}
              </h2>
              <span 
                style={{ backgroundColor: rc.accentLight, color: rc.maroon }}
                className="px-2 py-0.5 rounded-full text-[11px] font-bold"
              >
                {filteredSakhis.length} {language === 'pb' ? 'ਸਾਖੀਆਂ' : language === 'en' ? 'Sakhis' : 'साखियाँ'}
              </span>
            </div>
            <p style={{ color: rc.textSecondary }} className="text-xs sm:text-sm">
              {t.akhandPathSubtitle}
            </p>
          </div>

        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <button 
              type="button"
              onClick={() => {
                const msg = language === 'pb' 
                  ? `ਸਮਸਤ ੩੭੫ ਸਾਖੀਆਂ (੧-੩੧ ਬੈਚ) ਆਟੋ-ਕਰੈਕਟ ਤਕਨਾਲੋਜੀ ਦੁਆਰਾ ਸ਼ੁੱਧ ਪਾਠ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।`
                  : language === 'en'
                  ? `All 375 Sakhis auto-corrected & verified in pure text format.`
                  : `समस्त ३७५ साखियाँ (१-३१ बैच) ऑटो-करेक्ट तकनीक द्वारा शुद्ध पाठ रूप में परिमार्जित हैं।`;
                setRefreshToast(msg);
                setTimeout(() => setRefreshToast(null), 4000);
              }}
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#059669', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 shadow-2xs hover:bg-emerald-500/25 transition cursor-pointer"
              title="सभी साखियाँ ऑटो-करेक्ट एवं शुद्ध देवनागरी/गुरूमुखी रूप में सत्यापित हैं"
            >
              <Sparkles className="w-3 h-3 text-emerald-600 animate-pulse" />
              <span>{language === 'pb' ? 'ਸੁੱਧ ਪਾਠ' : language === 'en' ? 'Auto-Correct' : 'ऑटो-करेक्ट'}</span>
            </button>
          </div>

          {/* Primary Action Buttons Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Play/Pause Button */}
            <button
              id="toggle-akhand-path-btn"
              type="button"
              onClick={handleTogglePlay}
              style={{
                backgroundColor: isPlaying ? rc.accent : rc.maroon,
                color: '#FFFFFF',
              }}
              className="px-4 sm:px-5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition cursor-pointer active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? t.pauseRecitation : t.playRecitation}</span>
            </button>

            {/* DEDICATED STOP VOICE BUTTON */}
            <button
              id="stop-voice-akhand-path-btn"
              type="button"
              onClick={handleStopVoice}
              title={language === 'hi' ? 'स्वर-पाठ / आवाज़ पूर्णतः रोकें' : language === 'pb' ? 'ਪਾਠ ਦੀ ਆਵਾਜ਼ ਰੋਕੋ' : 'Stop voice recitation completely'}
              style={{
                backgroundColor: isPlaying ? 'rgba(239, 68, 68, 0.12)' : rc.cardBg,
                borderColor: isPlaying ? '#EF4444' : rc.border,
                color: isPlaying ? '#DC2626' : rc.textSecondary,
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-xs ${
                isPlaying ? 'hover:bg-red-600 hover:text-white hover:border-red-600 animate-pulse' : 'hover:border-red-400 hover:text-red-500'
              }`}
            >
              <VolumeX className="w-4 h-4 text-red-500" />
              <span>{language === 'hi' ? 'स्वर-पाठ रोकें' : language === 'pb' ? 'ਆਵਾਜ਼ ਰੋਕੋ' : 'Stop Voice'}</span>
            </button>

            {/* OPTIMIZED REFRESH BUTTON (Resets cleanly to beginning with spin animation & toast) */}
            <button
              id="reset-akhand-path-btn"
              type="button"
              onClick={handleRefreshPath}
              disabled={isRefreshing}
              title={fl.refreshTip}
              style={{
                backgroundColor: rc.cardBg,
                borderColor: rc.border,
                color: rc.text,
              }}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border text-xs hover:border-amber-500/60 transition cursor-pointer flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
            >
              <RotateCcw className={`w-4 h-4 text-amber-600 dark:text-amber-400 transition-transform ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline font-semibold">{language === 'hi' ? 'ताज़ा करें' : language === 'pb' ? 'ਤਾਜ਼ਾ ਕਰੋ' : 'Refresh'}</span>
            </button>

            {/* Random Sakhi Jump */}
            <button
              id="shuffle-akhand-path-btn"
              type="button"
              onClick={handleRandomSakhiJump}
              title={fl.shuffleTip}
              style={{
                backgroundColor: rc.cardBg,
                borderColor: rc.border,
                color: rc.textSecondary,
              }}
              className="p-2 rounded-xl border text-xs hover:border-amber-500/50 transition cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            {/* TEXT SHARING EXPORT BUTTON */}
            <button
              id="export-akhand-path-btn"
              type="button"
              onClick={() => setShowExportModal(true)}
              title={fl.textExport}
              style={{
                backgroundColor: rc.accentLight,
                borderColor: rc.accent,
                color: rc.maroon,
              }}
              className="px-3 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition shadow-xs hover:opacity-90 cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4 text-amber-700 dark:text-amber-300" />
              <span className="inline">{fl.textExport}</span>
            </button>

          </div>
        </div>

        {/* Transient Refresh / Action Notification Toast */}
        {refreshToast && (
          <div
            style={{ backgroundColor: rc.stepActive, borderColor: rc.accent, color: rc.maroon }}
            className="py-1.5 px-3 rounded-lg border text-xs font-semibold text-center animate-fadeIn shadow-xs flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>{refreshToast}</span>
          </div>
        )}

        {/* SAKHI CATEGORIES FILTER BAR (Allows filtering Akhand Path by Sacred Angs / Themes) */}
        <div className="pt-2 border-t space-y-2" style={{ borderColor: rc.borderOrnament }}>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold" style={{ color: rc.textSecondary }}>
              <Filter className="w-3.5 h-3.5 text-amber-600" />
              <span>{fl.categoryFilter}:</span>
            </div>

            {/* Quick dropdown for all categories */}
            <div className="flex items-center gap-1">
              <select
                value={selectedCategory}
                onChange={(e) => handleSelectCategory(e.target.value)}
                style={{
                  backgroundColor: rc.cardBg,
                  borderColor: rc.border,
                  color: rc.text,
                }}
                className="px-2.5 py-1 rounded-lg border text-xs font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="all">
                  {fl.allCategories} ({sakhis.length})
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title} ({cat.count})
                  </option>
                ))}
              </select>

              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  title={fl.clearFilter}
                  style={{ color: rc.maroon }}
                  className="px-2 py-1 rounded text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex items-center gap-0.5"
                >
                  <X className="w-3 h-3" />
                  <span className="text-[11px]">{fl.clearFilter}</span>
                </button>
              )}
            </div>
          </div>

          {/* Horizontal scrollable category pill chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              type="button"
              onClick={() => handleSelectCategory('all')}
              style={{
                backgroundColor: selectedCategory === 'all' ? rc.maroon : rc.cardBg,
                color: selectedCategory === 'all' ? '#FFFFFF' : rc.textSecondary,
                borderColor: selectedCategory === 'all' ? rc.maroon : rc.border,
              }}
              className="px-3 py-1 rounded-full border font-bold text-[11px] whitespace-nowrap transition cursor-pointer shadow-2xs"
            >
              {language === 'hi' ? 'सभी' : language === 'pb' ? 'ਸਾਰੇ' : 'All'} ({sakhis.length})
            </button>

            {categories.slice(0, 12).map((cat) => {
              const isCatActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  style={{
                    backgroundColor: isCatActive ? rc.accent : rc.cardBg,
                    color: isCatActive ? '#FFFFFF' : rc.text,
                    borderColor: isCatActive ? rc.accent : rc.border,
                  }}
                  className={`px-3 py-1 rounded-full border text-[11px] whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${
                    isCatActive ? 'font-bold shadow-2xs' : 'font-medium hover:border-amber-400/50'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span 
                    style={{
                      backgroundColor: isCatActive ? 'rgba(255,255,255,0.25)' : rc.accentLight,
                      color: isCatActive ? '#FFFFFF' : rc.maroon,
                    }}
                    className="px-1.5 py-0.2 rounded-full text-[9px] font-black"
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Playback Settings Controls (Speed & AutoScroll) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-3 border-t" style={{ borderColor: rc.borderOrnament }}>
          <div className="flex flex-wrap items-center gap-2">
            <span style={{ color: rc.textSecondary }} className="flex items-center gap-1 font-medium">
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.readingSpeed}:</span>
            </span>
            {/* Playback Speed Slider */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border" style={{ borderColor: rc.border, backgroundColor: rc.bg }}>
              <span className="text-xs font-bold" style={{ color: rc.text }}>{speed.toFixed(1)}x</span>
              <input
                type="range"
                min="0.2"
                max="5.0"
                step="0.1"
                value={speed}
                onChange={(e) => handleChangeSpeed(parseFloat(e.target.value))}
                className="w-32 h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Quick Stop Voice / Play Indicator in speed bar */}
            {isPlaying ? (
              <button
                type="button"
                onClick={handleStopVoice}
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  borderColor: '#EF4444',
                  color: '#DC2626',
                }}
                className="px-2.5 py-1 rounded-lg border font-bold text-xs flex items-center gap-1 transition cursor-pointer hover:bg-red-500 hover:text-white"
                title={language === 'pb' ? 'ਆਵਾਜ਼ ਬੰਦ ਕਰੋ' : language === 'en' ? 'Stop voice' : 'आवाज़ बंद करें'}
              >
                <VolumeX className="w-3 h-3 text-red-600" />
                <span>{language === 'hi' ? 'आवाज़ रोकें' : language === 'pb' ? 'ਆਵਾਜ਼ ਰੋਕੋ' : 'Stop Voice'}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleTogglePlay()}
                style={{
                  backgroundColor: rc.accentLight,
                  borderColor: rc.accent,
                  color: rc.maroon,
                }}
                className="px-2.5 py-1 rounded-lg border font-bold text-xs flex items-center gap-1 transition cursor-pointer hover:opacity-90"
                title={language === 'pb' ? 'ਪਾਠ ਸੁਣੋ' : language === 'en' ? 'Start voice recitation' : 'स्वर-पाठ शुरू करें'}
              >
                <Play className="w-3 h-3 text-amber-700" />
                <span>{language === 'hi' ? 'पाठ सुनें' : language === 'pb' ? 'ਪਾਠ ਸੁਣੋ' : 'Listen'}</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Standard Auto-Center on recitation */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoScroll}
                onChange={(e) => setAutoScroll(e.target.checked)}
                className="rounded accent-amber-600 cursor-pointer"
              />
              <span style={{ color: rc.textSecondary }}>{t.autoScrollLabel}</span>
            </label>

            {/* Continuous slow hands-free scrolling with custom speed settings */}
            <div className="flex items-center gap-2 border-l pl-3 border-dashed" style={{ borderColor: rc.borderOrnament }}>
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={continuousScroll}
                  onChange={(e) => setContinuousScroll(e.target.checked)}
                  className="rounded accent-amber-600 cursor-pointer"
                />
                <span className="font-bold text-amber-700 dark:text-amber-400">
                  {language === 'pb' ? 'ਸਵੈ-ਚਾਲਿਤ ਸਕ੍ਰੌਲ:' : language === 'hi' ? 'स्व-चालित स्क्रॉल:' : 'Continuous Scroll:'}
                </span>
              </label>

              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-amber-400/10">
                {(['1x', '1.5x', '2x'] as const).map((spVal) => (
                  <button
                    key={spVal}
                    type="button"
                    onClick={() => setContinuousSpeed(spVal)}
                    style={{
                      backgroundColor: continuousSpeed === spVal ? rc.accent : 'transparent',
                      color: continuousSpeed === spVal ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className={`px-2 py-0.5 rounded font-black text-[10px] cursor-pointer transition-all ${
                      continuousSpeed === spVal ? 'scale-105 shadow-sm' : 'hover:bg-black/5'
                    }`}
                  >
                    {spVal}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sadhana Comfort Toolbar (Themes, Font Sizes, Guide, Ambient Dhun) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t" style={{ borderColor: rc.borderOrnament }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1">
              <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1 text-xs">
                <Eye className="w-3.5 h-3.5" />
                <span>{fl.theme}:</span>
              </span>
              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-amber-400/10">
                {[
                  { id: 'default', label: fl.themeMool },
                  { id: 'sepia', label: fl.themePothi },
                  { id: 'oled', label: fl.themeOled },
                  { id: 'contrast', label: fl.themeEye }
                ].map(tObj => (
                  <button
                    key={tObj.id}
                    type="button"
                    onClick={() => setReadingTheme(tObj.id as any)}
                    style={{
                      backgroundColor: readingTheme === tObj.id ? rc.accent : 'transparent',
                      color: readingTheme === tObj.id ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className="px-2 py-0.5 rounded font-bold text-[10px] cursor-pointer"
                  >
                    {tObj.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span style={{ color: rc.textSecondary }} className="font-bold flex items-center gap-1 text-xs">
                <Type className="w-3.5 h-3.5" />
                <span>{fl.font}:</span>
              </span>
              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-amber-400/10">
                {['small', 'medium', 'large', 'xl'].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setLocalFontSize(size as any)}
                    style={{
                      backgroundColor: localFontSize === size ? rc.accent : 'transparent',
                      color: localFontSize === size ? '#FFFFFF' : rc.textSecondary,
                    }}
                    className="px-1.5 py-0.5 rounded font-black text-[10px] uppercase cursor-pointer"
                  >
                    {size === 'small' ? 'A-' : size === 'medium' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFocusRuler(!focusRuler)}
              style={{
                backgroundColor: focusRuler ? rc.accent : 'transparent',
                color: focusRuler ? '#FFFFFF' : rc.textSecondary,
                borderColor: rc.border,
              }}
              className="px-2 py-1 rounded-lg border font-bold text-[10px] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            >
              <span>{fl.marker}</span>
            </button>

            <button
              type="button"
              onClick={handleToggleAmbient}
              style={{
                backgroundColor: isAmbientPlaying ? rc.accent : 'transparent',
                color: isAmbientPlaying ? '#FFFFFF' : rc.textSecondary,
                borderColor: rc.border,
              }}
              className="px-2 py-1 rounded-lg border font-bold text-[10px] flex items-center gap-1 cursor-pointer transition hover:bg-black/5"
            >
              <Volume2 className="w-3 h-3" />
              <span>{fl.bgDhun}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Glossary Popup inside Continuous Stream */}
      {activeGlossaryItem && (
        <div className="p-4 mx-4 my-2 rounded-2xl border-2 shadow-xl animate-fadeIn relative z-30 text-center space-y-2 bg-amber-500/10 border-amber-500/40">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: rc.accent }}>
            {fl.glossaryHeader}
          </div>
          <div className="font-serif font-black text-xl" style={{ color: rc.maroon }}>
            {activeGlossaryItem.word}
          </div>
          <p className="text-sm leading-relaxed font-serif" style={{ color: rc.text }}>
            {activeGlossaryItem.meaning}
          </p>

          {/* Cross-language word correspondence */}
          {selectedGlossaryKey?.type === 'data' && activeGlossaryItem.sakhi && (
            <div className="flex flex-wrap justify-center items-center gap-2 pt-1 text-[11px]">
              {language !== 'pb' && activeGlossaryItem.sakhi.wordMeanings.pb?.[selectedGlossaryKey.index] && (
                <span className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif">
                  ਪੰਜਾਬੀ: <strong className="font-bold">{activeGlossaryItem.sakhi.wordMeanings.pb[selectedGlossaryKey.index].word}</strong>
                </span>
              )}
              {language !== 'en' && activeGlossaryItem.sakhi.wordMeanings.en?.[selectedGlossaryKey.index] && (
                <span className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-sans">
                  EN: <strong className="font-bold">{activeGlossaryItem.sakhi.wordMeanings.en[selectedGlossaryKey.index].word}</strong>
                </span>
              )}
              {language !== 'hi' && activeGlossaryItem.sakhi.wordMeanings.hi?.[selectedGlossaryKey.index] && (
                <span className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif">
                  हिन्दी: <strong className="font-bold">{activeGlossaryItem.sakhi.wordMeanings.hi[selectedGlossaryKey.index].word}</strong>
                </span>
              )}
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => setSelectedGlossaryKey(null)}
              style={{
                backgroundColor: rc.accent,
                color: '#FFFFFF',
              }}
              className="px-4 py-1.5 rounded-lg text-xs font-bold mt-1.5 cursor-pointer hover:opacity-90 transition"
            >
              {fl.closeShort}
            </button>
          </div>
        </div>
      )}

      {/* Continuous Scrolling Feed of Sakhis with Gesture Support */}
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleFramerMotionDragEnd}
        className="p-4 sm:p-6 space-y-6 flex-1 min-h-[65vh] overflow-y-auto divide-y touch-pan-y"
        style={{ borderColor: rc.borderOrnament }}
      >
        {filteredSakhis.length === 0 ? (
          <div className="py-12 text-center space-y-2">
            <p className="text-base font-semibold" style={{ color: rc.textSecondary }}>
              {language === 'hi' ? 'इस श्रेणी में कोई साखी उपलब्ध नहीं है।' : language === 'pb' ? 'ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਸਾਖੀ ਨਹੀਂ ਹੈ।' : 'No Sakhis found in this category.'}
            </p>
            <button
              onClick={() => handleSelectCategory('all')}
              className="px-4 py-2 rounded-xl font-bold text-xs bg-[#8B2500] text-white cursor-pointer"
            >
              {fl.allCategories}
            </button>
          </div>
        ) : (
          <>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredSakhis.length}
            pageSize={SAKHIS_PER_PAGE}
            onPageChange={handleAkhandPageChange}
            language={language}
            itemLabel={{ hi: 'साखी', pb: 'ਸਾਖੀ', en: 'Sakhis' }}
          />
          {paginatedSakhis.map((sakhi, idx) => {
            const globalIdx = (currentPage - 1) * SAKHIS_PER_PAGE + idx;
            const isActive = activeIndex === globalIdx;

            return (
              <div
                key={sakhi.id}
                ref={isActive ? activeCardRef : null}
                id={`akhand-sakhi-${globalIdx}`}
                onClick={() => setActiveIndex(globalIdx)}
                style={{
                  backgroundColor: isActive ? rc.stepActive : 'transparent',
                  borderColor: isActive ? rc.accent : 'transparent',
                }}
                className={`pt-6 first:pt-0 rounded-xl transition-all duration-300 p-4 cursor-pointer ${
                  isActive ? 'border-2 shadow-md' : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        backgroundColor: rc.accentLight,
                        color: rc.maroon,
                      }}
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                    >
                      #{sakhi.number}
                    </span>
                    <span style={{ color: rc.textSecondary }} className="text-xs font-medium">
                      {getLocalizedGranthaName(sakhi.grantha, language)} • {sakhi.categoryTitle[language]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quick Copy Couplet Button */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickCopySakhi(sakhi, e)}
                      title={language === 'hi' ? 'साखी कॉपी करें' : language === 'pb' ? 'ਸਾਖੀ ਕਾਪੀ ਕਰੋ' : 'Copy Sakhi'}
                      style={{
                        color: itemCopiedId === sakhi.id ? '#16A34A' : rc.textSecondary,
                      }}
                      className="p-1 rounded hover:bg-black/5 transition cursor-pointer text-xs flex items-center gap-1"
                    >
                      {itemCopiedId === sakhi.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-[10px] text-green-600 font-bold">{language === 'pb' ? 'ਕਾਪੀ ਹੋਇਆ' : language === 'en' ? 'Copied' : 'कॉपी हुआ'}</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isActive && (
                      <span
                        style={{ color: rc.accent }}
                        className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 animate-pulse"
                      >
                        <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                        <span>{t.activeCouplet}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive Word Couplet displaying in proper Font Sizes */}
                <div
                  style={{ color: rc.maroon }}
                  className={`font-serif leading-relaxed text-center my-3 transition-all ${fontSizes[localFontSize]}`}
                >
                  {renderInteractiveCouplet(sakhi, isActive)}
                </div>

                {/* Bhavarth Box */}
                <div
                  style={{
                    backgroundColor: rc.cardBg,
                    borderColor: rc.border,
                  }}
                  className="p-3.5 rounded-xl border mt-3 text-xs sm:text-sm leading-relaxed font-serif"
                >
                  <span style={{ color: rc.accent }} className="font-bold block mb-1">
                    {t.bhavarthLabel}
                  </span>
                  <p style={{ color: rc.text }} className="mb-2">{ensureSatguruKabirSaheb(sakhi.bhavarth[language])}</p>
                  <div className="mt-1.5 pt-1.5 border-t border-dashed flex items-center justify-between text-[11px] font-serif opacity-85" style={{ borderColor: rc.border }}>
                    <span style={{ color: rc.accent }} className="font-bold">
                      {language === 'pb' ? '🌹 ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ' : language === 'en' ? '🌹 Satguru Kabir Saheb' : '🌹 सतगुरु कबीर साहेब'}
                    </span>
                    <span className="text-[10px] font-mono italic">Satyanaam Vani</span>
                  </div>
                </div>

                {/* Action Link to Swadhyay Reader & Text Share & Listen */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2">
                  <div className="flex items-center gap-2">
                    {/* Individual Sakhi Voice Play / Stop button */}
                    <button
                      type="button"
                      onClick={() => handlePlaySingleSakhi(globalIdx)}
                      title={isActive && isPlaying ? (language === 'pb' ? 'ਆਵਾਜ਼ ਰੋਕੋ' : language === 'en' ? 'Stop voice' : 'आवाज़ रोकें') : (language === 'pb' ? 'ਇਹ ਸਾਖੀ ਤੇ ਭਾਵਾਰਥ ਸੁਣੋ' : language === 'en' ? 'Listen to this sakhi' : 'यह साखी और भावार्थ सुनें')}
                      style={{
                        backgroundColor: isActive && isPlaying ? '#EF4444' : rc.cardBg,
                        color: isActive && isPlaying ? '#FFFFFF' : rc.maroon,
                        borderColor: isActive && isPlaying ? '#EF4444' : rc.border,
                      }}
                      className="px-2.5 py-1 rounded-lg border text-xs font-bold hover:opacity-90 cursor-pointer flex items-center gap-1 transition active:scale-95 shadow-2xs"
                    >
                      {isActive && isPlaying ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>{language === 'hi' ? 'आवाज़ रोकें' : language === 'pb' ? 'ਆਵਾਜ਼ ਰੋਕੋ' : 'Stop Voice'}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>{language === 'hi' ? 'साखी सुनें' : language === 'pb' ? 'ਸਾਖੀ ਸੁਣੋ' : 'Listen'}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(globalIdx);
                        setShowExportModal(true);
                        setExportScope('current');
                      }}
                      style={{ color: rc.textSecondary }}
                      className="text-xs font-medium hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{language === 'hi' ? 'टेक्स्ट शेयर' : language === 'pb' ? 'ਟੈਕਸਟ ਸ਼ੇਅਰ' : 'Share Text'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectSakhi(sakhi)}
                    style={{ color: rc.accent }}
                    className="text-xs font-bold hover:underline cursor-pointer flex items-center gap-1 focus:outline-none"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t.readSakhiBtn} →</span>
                  </button>
                </div>
              </div>
            );
          })}
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredSakhis.length}
            pageSize={SAKHIS_PER_PAGE}
            onPageChange={handleAkhandPageChange}
            language={language}
            itemLabel={{ hi: 'साखी', pb: 'ਸਾਖੀ', en: 'Sakhis' }}
          />
          </>
        )}
      </motion.div>

      {/* TEXT SHARING EXPORT MODAL */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
            }}
            className="w-full max-w-lg rounded-2xl border shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.cardBorder }}>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {language === 'hi' ? 'साखी पाठ निर्यात व शेयर' : language === 'pb' ? 'ਸਾਖੀ ਪਾਠ ਨਿਰਯਾਤ ਅਤੇ ਸ਼ੇਅਰ' : 'Export & Share Sacred Text'}
                  </h3>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>
                    {language === 'hi' ? 'पवित्र साखियों को टेक्स्ट के रूप में डाउनलोड अथवा साझा करें' : language === 'pb' ? 'ਪਵਿੱਤਰ ਸਾਖੀਆਂ ਨੂੰ ਟੈਕਸਟ ਵਜੋਂ ਡਾਊਨਲੋਡ ਜਾਂ ਸਾਂਝਾ ਕਰੋ' : 'Export or share sacred couplets as clean text'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scope Selection: Current Active Sakhi vs. All Filtered Sakhis */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.textSecondary }}>
                {language === 'hi' ? 'निर्यात की जाने वाली सामग्री' : language === 'pb' ? 'ਨਿਰਯਾਤ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਸਮੱਗਰੀ' : 'Export Scope'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setExportScope('current')}
                  style={{
                    backgroundColor: exportScope === 'current' ? theme.accentGoldLight : theme.bgSecondary,
                    borderColor: exportScope === 'current' ? theme.accentGold : theme.cardBorder,
                    color: exportScope === 'current' ? theme.sacredMaroon : theme.textPrimary,
                  }}
                  className="p-2.5 rounded-xl border text-xs font-bold transition text-center cursor-pointer"
                >
                  {language === 'hi' ? `वर्तमान साखी (#${currentActiveSakhi.number})` : language === 'pb' ? `ਮੌਜੂਦਾ ਸਾਖੀ (#${currentActiveSakhi.number})` : `Current Sakhi (#${currentActiveSakhi.number})`}
                </button>

                <button
                  type="button"
                  onClick={() => setExportScope('all')}
                  style={{
                    backgroundColor: exportScope === 'all' ? theme.accentGoldLight : theme.bgSecondary,
                    borderColor: exportScope === 'all' ? theme.accentGold : theme.cardBorder,
                    color: exportScope === 'all' ? theme.sacredMaroon : theme.textPrimary,
                  }}
                  className="p-2.5 rounded-xl border text-xs font-bold transition text-center cursor-pointer"
                >
                  {language === 'hi' ? `समस्त साखियाँ (${filteredSakhis.length})` : language === 'pb' ? `ਸਾਰੀਆਂ ਸਾਖੀਆਂ (${filteredSakhis.length})` : `All Sakhis (${filteredSakhis.length})`}
                </button>
              </div>
            </div>

            {/* Live Text Preview Box */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'टेक्स्ट पूर्वावलोकन' : language === 'pb' ? 'ਟੈਕਸਟ ਝਲਕ' : 'Text Preview'}
                </span>
                {exportCopied && (
                  <span className="text-green-600 font-bold flex items-center gap-1 animate-fadeIn">
                    <Check className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'सफलतापूर्वक कॉपी हुआ!' : language === 'pb' ? 'ਸਫਲਤਾਪੂਰਵਕ ਕਾਪੀ ਹੋਇਆ!' : 'Copied to Clipboard!'}</span>
                  </span>
                )}
              </div>
              <textarea
                readOnly
                value={generateExportText(exportScope)}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full h-36 p-3 rounded-xl border font-mono text-xs focus:outline-none resize-none select-all"
              />
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              {/* Copy to Clipboard */}
              <button
                type="button"
                onClick={handleCopyExportText}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="p-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                {exportCopied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                <span>{exportCopied ? (language === 'hi' ? 'कॉपी हो गया' : 'Copied') : (language === 'hi' ? 'टेक्स्ट कॉपी करें' : language === 'pb' ? 'ਕਾਪੀ ਕਰੋ' : 'Copy Text')}</span>
              </button>

              {/* Native / WhatsApp Share */}
              <button
                type="button"
                onClick={handleNativeShareExport}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>{language === 'hi' ? 'शेयर करें' : language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : 'Share'}</span>
              </button>

              {/* Download .txt File */}
              <button
                type="button"
                onClick={handleDownloadTextFile}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                  color: theme.textPrimary,
                }}
                className="p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>{language === 'hi' ? 'फ़ाइल डाउनलोड (.txt)' : language === 'pb' ? 'ਫਾਈਲ ਡਾਊਨਲੋਡ' : 'Download .txt'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
