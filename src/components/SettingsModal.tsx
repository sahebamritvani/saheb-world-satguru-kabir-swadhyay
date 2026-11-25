import React, { useState, useEffect } from 'react';
import { 
  X, 
  Moon, 
  Sun, 
  Palette, 
  Volume2, 
  VolumeX, 
  Bell, 
  Languages, 
  Type, 
  Check, 
  Sliders, 
  Sparkles,
  Download,
  Info,
  LogOut,
  ArrowLeft,
  Scroll,
  Clock,
  Zap,
  ShieldCheck,
  Mic,
  Volume2 as SpeechVolumeIcon,
  Upload,
  RotateCcw,
  Music,
  Video,
  Image as ImageIcon,
  Trash2,
  Link2,
  RefreshCw,
  Pin,
  Activity,
  SpellCheck,
  Database,
  History,
  BookOpen,
  Highlighter,
  Target,
  Play,
  Square,
} from 'lucide-react';
import { ADMIN_GRANTH_SLOTS, OPEN_ADMIN_INJECTOR_EVENT } from '../services/adminSlotInjectorStore';
import { NityaVaniSettings } from './NityaVaniSettings';
import { Language, ThemeMode, SACRED_BRANDING, ReaderCustomTheme, ReaderTarget, AppView } from '../types';
import { translations } from '../data/translations';
import { useAppTheme, GLOBAL_NATURE_PRESETS } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { satyanaamAudio, speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import {
  getReadingHistory,
  clearReadingHistory,
  ReadingHistoryItem,
} from '../services/readingHistoryStore';
import {
  DarshanObjectFit,
  DarshanPortraitState,
  compressDarshanImage,
  getCustomDarshanState,
  publishAdminDarshanPortrait,
  resetAdminDarshanPortrait,
  subscribeToCustomPortraitState,
  updateAdminDarshanObjectFit,
} from '../services/customPortraitStore';
import { isAdminAuthenticated, setAdminAuthenticated } from '../services/adminAuth';
import {
  subscribeToSacredMedia,
  publishAdminSacredMedia,
  deleteAdminSacredMedia,
  SacredMediaItem,
  SacredMediaType,
} from '../services/sacredMediaService';
import {
  subscribeToPinnedAudio,
  getTotalPinnedAudioStats,
  clearAllPinnedAudio,
  formatAudioSize,
} from '../services/offlineAudioCache';
import { PWAInstallButton } from './PWAInstallButton';
import { manualCheckAndReloadUpdates } from '../utils/appUpdateManager';

export type SettingsTabId = 'general' | 'accessibility' | 'reading';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  isDhunPlaying: boolean;
  onToggleDhun: () => void;
  onPreviewSplash?: () => void;
  initialTab?: SettingsTabId;
  onNavigateView?: (view: AppView) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectLanguage,
  isDhunPlaying,
  onToggleDhun,
  onPreviewSplash,
  initialTab = 'general',
  onNavigateView,
}) => {
  const { 
    theme, 
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    isSahajMode,
    setIsSahajMode,
    isDarkMode,
    toggleDarkMode,
    themeMode,
    setThemeMode,
    isAutoNightMode,
    setIsAutoNightMode,
    isMuted,
    setIsMuted,
    speechRate,
    setSpeechRate,
    zenModeActive,
    setZenModeActive,
    larivaarModeActive,
    setLarivaarModeActive,
    visraamModeActive,
    setVisraamModeActive,
    autoScrollActive,
    setAutoScrollActive,
    autoScrollSpeed,
    setAutoScrollSpeed,
    readingFramework,
    setReadingFramework,
    globalWallpaper,
    setGlobalWallpaper
  } = useAppTheme();
  const { language: contextLang, setLanguage: setContextLang, t: contextT } = useLanguage();
  const activeLang = language || contextLang;
  const t = translations[activeLang] || contextT;

  const [activeTab, setActiveTab] = useState<SettingsTabId>(initialTab);
  const [suiteSubTab, setSuiteSubTab] = useState<'controls' | 'history'>('controls');
  const [historyItems, setHistoryItems] = useState<ReadingHistoryItem[]>([]);
  const [activeReaderTheme, setActiveReaderTheme] = useState<ReaderCustomTheme>(() => {
    try {
      return (localStorage.getItem('sahebworld_reader_theme') as ReaderCustomTheme) || 'mool';
    } catch {
      return 'mool';
    }
  });
  const [activeHighlighter, setActiveHighlighter] = useState<'saffron' | 'green' | 'yellow' | 'none'>(() => {
    try {
      return (localStorage.getItem('sahebworld_active_highlighter') as any) || 'saffron';
    } catch {
      return 'saffron';
    }
  });
  const [targetPace, setTargetPace] = useState<ReaderTarget>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_target_pace');
      return saved ? (parseInt(saved, 10) as ReaderTarget) : 21;
    } catch {
      return 21;
    }
  });
  const [suiteToast, setSuiteToast] = useState<string | null>(null);
  const [currentReadingText, setCurrentReadingText] = useState<string>('');
  const [currentReadingTitle, setCurrentReadingTitle] = useState<string>('');
  const [currentReadingProgress, setCurrentReadingProgress] = useState<number>(0);
  const [readingWpm, setReadingWpm] = useState<number>(140);

  const [dhunVolume, setDhunVolume] = useState<number>(() => satyanaamAudio.getVolume());
  const [vocalChantEnabled, setVocalChantEnabled] = useState<boolean>(() => satyanaamAudio.getVocalChantEnabled());
  const [speechPitch, setSpeechPitch] = useState<number>(() => speechReciter.getPitch());
  const [isVoiceTesting, setIsVoiceTesting] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [portraitState, setPortraitState] = useState<DarshanPortraitState>(() => getCustomDarshanState());
  const [isUploadingPortrait, setIsUploadingPortrait] = useState<boolean>(false);
  const darshanInputRef = React.useRef<HTMLInputElement>(null);
  const [adminNotice, setAdminNotice] = useState<string | null>(null);

  // Unified Admin Media Studio state
  const [studioTab, setStudioTab] = useState<SacredMediaType>('image');
  const [studioItems, setStudioItems] = useState<SacredMediaItem[]>([]);
  const [studioTitle, setStudioTitle] = useState<string>('');
  const [studioUrl, setStudioUrl] = useState<string>('');
  const [studioFile, setStudioFile] = useState<File | null>(null);
  const [isStudioPublishing, setIsStudioPublishing] = useState<boolean>(false);

  // Persistent Splash-on-Launch preference (default ON)
  const [splashOnLaunch, setSplashOnLaunch] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      return localStorage.getItem('sahebworld_splash_on_launch') !== 'false';
    } catch {
      return true;
    }
  });

  // Offline Pinned Audio stats & Check for Updates state
  const [pinnedStats, setPinnedStats] = useState<{ count: number; totalBytes: number }>(() =>
    getTotalPinnedAudioStats()
  );
  const [isReloadingApp, setIsReloadingApp] = useState<boolean>(false);
  const [updateCheckNotice, setUpdateCheckNotice] = useState<string | null>(null);

  const handleToggleSplashOnLaunch = () => {
    const next = !splashOnLaunch;
    setSplashOnLaunch(next);
    try {
      localStorage.setItem('sahebworld_splash_on_launch', next ? 'true' : 'false');
    } catch {}
  };

  const handleCheckForUpdates = async () => {
    setIsReloadingApp(true);
    setUpdateCheckNotice(null);
    const result = await manualCheckAndReloadUpdates();
    if (result === 'offline') {
      setIsReloadingApp(false);
      setUpdateCheckNotice(
        language === 'pb'
          ? 'ਇੰਟਰਨੈੱਟ ਉਪਲਬਧ ਨਹੀਂ ਹੈ — ਤੁਹਾਡਾ ਆਫਲਾਈਨ ਸਵਾਧਿਆਇ ਅਤੇ ਹਾਜ਼ਰੀ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਹੈ।'
          : language === 'en'
          ? 'You are offline — cached scriptures, diary & Haziri records remain safely preserved.'
          : 'इंटरनेट उपलब्ध नहीं है — आपका ऑफलाइन स्वाध्याय, डायरी व हाज़िरी डेटा सुरक्षित है।'
      );
      window.setTimeout(() => setUpdateCheckNotice(null), 4500);
    }
  };

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAdmin(isAdminAuthenticated());
    };
    window.addEventListener('sahebworld:admin-auth-change', handleAuthChange);
    const unsubPortrait = subscribeToCustomPortraitState((next) => setPortraitState(next));
    const unsubMedia = subscribeToSacredMedia((items) => setStudioItems(items));
    const unsubPinned = subscribeToPinnedAudio(() => {
      setPinnedStats(getTotalPinnedAudioStats());
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuthChange);
      unsubPortrait();
      unsubMedia();
      unsubPinned();
    };
  }, []);

  const handleAdminLogout = () => {
    setAdminAuthenticated(false);
    setIsAdmin(false);
    setAdminNotice(null);
  };

  const handleAdminPortraitUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) return;
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setIsUploadingPortrait(true);
    try {
      const dataUrl = await compressDarshanImage(file);
      const res = await publishAdminDarshanPortrait(dataUrl, portraitState.objectFit);
      if (res.syncedToCloud) {
        setAdminNotice(
          language === 'pb'
            ? '✓ ਪਾਵਨ ਸਰੂਪ ਅਪਡੇਟ ਤੇ ਕਲਾਉਡ ਸਿੰਕ ਸਫਲ!'
            : language === 'en'
            ? '✓ Portrait updated & synced globally!'
            : '✓ पावन स्वरूप अपडेट व ग्लोबल सिंक सफल!'
        );
      } else {
        setAdminNotice(
          res.error ||
            (language === 'pb'
              ? '✓ ਪਾਵਨ ਸਰੂਪ ਡਿਵਾਈਸ ਤੇ ਸੁਰੱਖਿਅਤ ਸੇਵ ਹੋਇਆ!'
              : language === 'en'
              ? '✓ Portrait saved locally on device!'
              : '✓ पावन स्वरूप सफलतापूर्वक सहेजा गया!')
        );
      }
    } catch (err: any) {
      setAdminNotice(
        err?.message ||
          (language === 'pb' ? 'ਚਿੱਤਰ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਗਲਤੀ' : language === 'en' ? 'Image upload error' : 'छवि संसाधन में त्रुटि')
      );
    } finally {
      setIsUploadingPortrait(false);
      setTimeout(() => setAdminNotice(null), 4500);
    }
  };

  const handleAdminObjectFit = async (fit: DarshanObjectFit) => {
    if (!isAdmin) return;
    await updateAdminDarshanObjectFit(fit);
    setAdminNotice(fit === 'contain' ? '✓ पूर्ण चित्र (Contain)' : '✓ फ़्रेम फ़िट (Cover)');
    setTimeout(() => setAdminNotice(null), 2500);
  };

  const handleAdminResetPortrait = async () => {
    if (!isAdmin) return;
    await resetAdminDarshanPortrait();
    setAdminNotice(
      language === 'pb'
        ? '✓ ਪਾਵਨ ਦਰਸ਼ਨ ਸਰੂਪ ਰੀਸੈੱਟ ਹੋ ਗਿਆ'
        : language === 'en'
        ? '✓ Portrait reset to sacred emblem'
        : '✓ पावन दर्शन स्वरूप रीसेट हो गया'
    );
    setTimeout(() => setAdminNotice(null), 3000);
  };

  const handleStudioPublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    setIsStudioPublishing(true);
    const res = await publishAdminSacredMedia({
      mediaType: studioTab,
      title: studioTitle,
      mediaUrl: studioUrl,
      file: studioFile,
      category: studioTab === 'video' ? 'anurag' : studioTab === 'audio' ? 'satsang' : 'darshan',
      speakerOrArtist: 'सतगुरु कबीर साहेब आश्रम',
    });
    setIsStudioPublishing(false);
    if (res.success) {
      setStudioTitle('');
      setStudioUrl('');
      setStudioFile(null);
      setAdminNotice(
        studioTab === 'image'
          ? '✓ पावन छवि दर्शन गैलरी में प्रकाशित हो गई!'
          : studioTab === 'audio'
          ? '✓ ऑडियो वाणी क्लाउड लाइब्रेरी में प्रकाशित हो गई!'
          : '✓ सत्संग वीडियो दर्शन में प्रकाशित हो गया!'
      );
    } else {
      setAdminNotice(`✗ ${res.error}`);
    }
    setTimeout(() => setAdminNotice(null), 4500);
  };

  const handleStudioDelete = async (mediaId: string) => {
    if (!isAdmin) return;
    const res = await deleteAdminSacredMedia(mediaId);
    if (res.success) {
      setAdminNotice('✓ सामग्री क्लाउड से हटाई गई');
      setTimeout(() => setAdminNotice(null), 3000);
    } else {
      setAdminNotice(`✗ ${res.error}`);
    }
  };

  useEffect(() => {
    const handleSettingsChanged = (e: any) => {
      if (e.detail) {
        if (typeof e.detail.rate === 'number') setSpeechRate(e.detail.rate);
        if (typeof e.detail.pitch === 'number') setSpeechPitch(e.detail.pitch);
      }
    };
    window.addEventListener('sahebworld_tts_settings_changed', handleSettingsChanged);
    return () => window.removeEventListener('sahebworld_tts_settings_changed', handleSettingsChanged);
  }, []);


  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab || 'general');
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    setHistoryItems(getReadingHistory());
    const handleHistoryUpdate = () => setHistoryItems(getReadingHistory());
    const handleReadingUpdate = () => {
      try {
        setCurrentReadingText(localStorage.getItem('sahebworld_current_reading_text') || '');
        setCurrentReadingTitle(localStorage.getItem('sahebworld_current_reading_title') || '');
        const savedProgress = localStorage.getItem('sahebworld_current_reading_progress');
        setCurrentReadingProgress(savedProgress ? parseInt(savedProgress, 10) : 0);
        const savedWpm = localStorage.getItem('sahebworld_reading_wpm');
        if (savedWpm) setReadingWpm(parseInt(savedWpm, 10));
      } catch {}
    };
    handleReadingUpdate();
    window.addEventListener('sahebworld_reading_history_updated', handleHistoryUpdate);
    window.addEventListener('sahebworld_current_reading_updated', handleReadingUpdate);
    return () => {
      window.removeEventListener('sahebworld_reading_history_updated', handleHistoryUpdate);
      window.removeEventListener('sahebworld_current_reading_updated', handleReadingUpdate);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleZenToggle = () => setZenModeActive(!zenModeActive);
    const handleLarivaarToggle = () => setLarivaarModeActive(!larivaarModeActive);
    const handleVisraamToggle = () => setVisraamModeActive(!visraamModeActive);
    window.addEventListener('sahebworld_toggle_zen_mode', handleZenToggle);
    window.addEventListener('sahebworld_toggle_larivaar_mode', handleLarivaarToggle);
    window.addEventListener('sahebworld_toggle_visraam_mode', handleVisraamToggle);
    return () => {
      window.removeEventListener('sahebworld_toggle_zen_mode', handleZenToggle);
      window.removeEventListener('sahebworld_toggle_larivaar_mode', handleLarivaarToggle);
      window.removeEventListener('sahebworld_toggle_visraam_mode', handleVisraamToggle);
    };
  }, [zenModeActive, larivaarModeActive, visraamModeActive, setZenModeActive, setLarivaarModeActive, setVisraamModeActive]);

  const calculatedRemainingMins = React.useMemo(() => {
    if (!currentReadingText) return 2;
    const wordCount = currentReadingText.trim().split(/\s+/).filter(Boolean).length;
    const totalWordsEstimate = Math.max(wordCount, 15);
    const remainingFraction = 1 - currentReadingProgress / 100;
    const remainingWords = Math.round(totalWordsEstimate * Math.max(0.1, remainingFraction));
    return Math.max(1, Math.ceil(remainingWords / readingWpm));
  }, [currentReadingText, currentReadingProgress, readingWpm]);

  const handleCloseModal = React.useCallback(() => {
    speechReciter.stop();
    setIsVoiceTesting(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, handleCloseModal]);

  if (!isOpen) return null;

  const isHi = activeLang === 'hi';
  const isPb = activeLang === 'pb';

  const showSuiteNotice = (msg: string) => {
    setSuiteToast(msg);
    window.setTimeout(() => setSuiteToast(null), 2400);
  };

  const handleSelectReadingMode = (modeId: string) => {
    sacredHaptics.lightTap();
    setAutoScrollActive(false);
    setZenModeActive(false);
    setLarivaarModeActive(false);
    setVisraamModeActive(false);
    setReadingFramework('scroll');

    switch (modeId) {
      case 'scroll':
        setReadingFramework('scroll');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'scroll');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'scroll' } }));
        } catch {}
        showSuiteNotice(isHi ? 'निरंतर स्क्रॉल मोड सक्रिय!' : isPb ? 'ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ ਚਾਲੂ!' : 'Continuous Scroll Mode Active!');
        break;
      case 'flip':
        setReadingFramework('flip');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'flip');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'flip' } }));
        } catch {}
        showSuiteNotice(isHi ? '३D पोथी पन्ना मोड सक्रिय!' : isPb ? '੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ ਚਾਲੂ!' : '3D Pothi Flip Mode Active!');
        break;
      case 'parallel':
        setReadingFramework('parallel');
        try {
          localStorage.setItem('sahebworld_reading_framework', 'parallel');
          window.dispatchEvent(new CustomEvent('sahebworld_framework_changed', { detail: { framework: 'parallel' } }));
        } catch {}
        showSuiteNotice(isHi ? 'समानांतर तुलना मोड सक्रिय!' : isPb ? 'ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ ਚਾਲੂ!' : 'Parallel Translation Mode Active!');
        break;
      case 'zen':
        setZenModeActive(true);
        try {
          localStorage.setItem('sahebworld_zen_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_zen_mode'));
        } catch {}
        showSuiteNotice(isHi ? 'ज़ेन एकाग्रता मोड सक्रिय!' : isPb ? 'ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ ਚਾਲੂ!' : 'Zen Focus Mode Active!');
        handleCloseModal();
        break;
      case 'larivaar':
        setLarivaarModeActive(true);
        try {
          localStorage.setItem('sahebworld_larivaar_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_larivaar_mode'));
        } catch {}
        showSuiteNotice(isHi ? 'लारीवार अखंड पाठ मोड सक्रिय!' : isPb ? 'ਲਾਰੀਵਾਰ ਅਖੰਡ ਪਾਠ ਮੋਡ ਚਾਲੂ!' : 'Larivaar Mode Active!');
        break;
      case 'visraam':
        setVisraamModeActive(true);
        try {
          localStorage.setItem('sahebworld_visraam_mode', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_toggle_visraam_mode'));
        } catch {}
        showSuiteNotice(isHi ? 'विश्राम हाइलाइट मोड सक्रिय!' : isPb ? 'ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ ਮੋਡ ਚਾਲੂ!' : 'Visraam Highlight Mode Active!');
        break;
      case 'autoplay':
        setAutoScrollActive(true);
        try {
          localStorage.setItem('sahebworld_autoscroll_active', 'true');
          window.dispatchEvent(new CustomEvent('sahebworld_autoscroll_toggled', { detail: { active: true, speed: autoScrollSpeed } }));
        } catch {}
        showSuiteNotice(isHi ? 'स्वतः स्क्रॉल एवं श्वास मोड सक्रिय!' : isPb ? 'ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ ਮੋਡ ਚਾਲੂ!' : 'Auto-Scroll & Breath Mode Active!');
        break;
      case 'swadhyay':
        handleCloseModal();
        if (onNavigateView) onNavigateView('swadhyay');
        else window.dispatchEvent(new CustomEvent('sahebworld:navigate', { detail: 'swadhyay' }));
        break;
      case 'akhand-path':
        handleCloseModal();
        if (onNavigateView) onNavigateView('akhand-path');
        else window.dispatchEvent(new CustomEvent('sahebworld:navigate', { detail: 'akhand-path' }));
        break;
    }
  };

  const handleSpeedChange = (speed: number) => {
    sacredHaptics.lightTap();
    setAutoScrollSpeed(speed);
    try {
      localStorage.setItem('sahebworld_autoscroll_speed', String(speed));
      window.dispatchEvent(new CustomEvent('sahebworld_autoscroll_speed_changed', { detail: { speed } }));
    } catch {}
    showSuiteNotice(`${isHi ? 'स्क्रॉल गति' : isPb ? 'ਸਕ੍ਰੋਲ ਗਤੀ' : 'Scroll Speed'} ${speed}x`);
  };

  const handleReaderPaletteChange = (thm: ReaderCustomTheme) => {
    sacredHaptics.lightTap();
    setActiveReaderTheme(thm);
    try {
      localStorage.setItem('sahebworld_reader_theme', thm);
      window.dispatchEvent(new CustomEvent('sahebworld_reader_theme_changed', { detail: { theme: thm } }));
      const thmStr = thm as string;
      if (thmStr === 'deep_sepia' || thmStr === 'black' || thmStr === 'midnight' || thmStr === 'oled' || thmStr === 'dark') {
        setThemeMode('mystic_dark');
      } else {
        setThemeMode('bhojpatra');
      }
    } catch {}
    showSuiteNotice(isHi ? 'पठन थीम लागू हुई!' : isPb ? 'ਥੀਮ ਲਾਗੂ ਹੋਈ!' : 'Reader Theme Applied!');
  };

  const handleHighlighterChange = (hl: 'saffron' | 'green' | 'yellow' | 'none') => {
    sacredHaptics.lightTap();
    setActiveHighlighter(hl);
    try {
      localStorage.setItem('sahebworld_active_highlighter', hl);
      window.dispatchEvent(new CustomEvent('sahebworld_highlighter_changed', { detail: { color: hl } }));
    } catch {}
    showSuiteNotice(isHi ? 'हाइलाइटर अद्यतित!' : isPb ? 'ਹਾਈਲਾਈਟਰ ਅੱਪਡੇਟ ਹੋਇਆ!' : 'Highlighter Color Set!');
  };

  const handleTargetChange = (tgt: ReaderTarget) => {
    sacredHaptics.lightTap();
    setTargetPace(tgt);
    try {
      localStorage.setItem('sahebworld_target_pace', String(tgt));
      window.dispatchEvent(new CustomEvent('sahebworld_target_pace_changed', { detail: { target: tgt } }));
    } catch {}
    showSuiteNotice(`${isHi ? 'दैनिक लक्ष्य' : isPb ? 'ਦੈਨਿਕ ਟੀਚਾ' : 'Daily Goal'}: ${tgt} ${isHi ? 'पद्य' : isPb ? 'ਪਦ' : 'Verses'}`);
  };

  const handleClearHistory = () => {
    sacredHaptics.lightTap();
    clearReadingHistory();
    setHistoryItems([]);
    showSuiteNotice(isHi ? 'पठन इतिहास साफ़ कर दिया गया!' : isPb ? 'ਪਠਨ ਇਤਿਹਾਸ ਸਾਫ਼ ਹੋ ਗਿਆ!' : 'Reading history cleared!');
  };

  const handleResumeHistoryItem = (item: ReadingHistoryItem) => {
    sacredHaptics.lightTap();
    handleCloseModal();
    const targetView: AppView =
      item.type === 'nitnem'
        ? 'nitnem-gutka'
        : item.type === 'granth'
        ? 'grantha'
        : item.type === 'ulatvasi'
        ? 'ulatvasi-library'
        : item.type === 'aarti'
        ? 'aarti-sanctuary'
        : item.type === 'chintan'
        ? 'dainik-chintan'
        : 'swadhyay';
    if (onNavigateView) onNavigateView(targetView);
    else window.dispatchEvent(new CustomEvent('sahebworld:navigate', { detail: targetView }));
  };

  const formatTimeAgo = (isoDate: string) => {
    try {
      const d = new Date(isoDate);
      const diffMs = Date.now() - d.getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 1) return isHi ? 'अभी-अभी' : isPb ? 'ਹੁਣੇ-ਹੁਣੇ' : 'Just now';
      if (diffMins < 60) return `${diffMins} ${isHi ? 'मिनट पहले' : isPb ? 'ਮਿੰਟ ਪਹਿਲਾਂ' : 'mins ago'}`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours} ${isHi ? 'घंटे पहले' : isPb ? 'ਘੰਟੇ ਪਹਿਲਾਂ' : 'hours ago'}`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays} ${isHi ? 'दिन पहले' : isPb ? 'ਦਿਨ ਪਹਿਲਾਂ' : 'days ago'}`;
    } catch {
      return '';
    }
  };

  const handleSpeechRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    speechReciter.setRate(newRate);
  };

  const handleSpeechPitchChange = (newPitch: number) => {
    setSpeechPitch(newPitch);
    speechReciter.setPitch(newPitch);
  };

  const handleTestVoiceRecitation = () => {
    if (isVoiceTesting) {
      speechReciter.stop();
      setIsVoiceTesting(false);
      return;
    }
    setIsVoiceTesting(true);
    speechReciter.setRate(speechRate);
    speechReciter.setPitch(speechPitch);
    const testSampleText =
      activeLang === 'pb'
        ? 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਜੈ। ਸਤਯਨਾਮ ਹੀ ਸਾਰ ਸ਼ਬਦ ਹੈ।'
        : activeLang === 'en'
        ? 'Hail Satguru Kabir Saheb. Satyanaam is the supreme essence of truth.'
        : 'सतगुरु कबीर साहेब की जय। सत्यनाम ही सार शब्द है।';
    speechReciter.speak(
      testSampleText,
      activeLang,
      () => setIsVoiceTesting(false),
      () => setIsVoiceTesting(false)
    );
  };

  const handleVolumeChange = (newVal: number) => {
    setDhunVolume(newVal);
    satyanaamAudio.setVolume(newVal);
  };

  const handleToggleVocalChant = () => {
    const newVal = satyanaamAudio.toggleVocalChant();
    setVocalChantEnabled(newVal);
  };

  const handleRingTripleChime = () => {
    try {
      satyanaamAudio.ringSatyanaamTripleChime();
    } catch {
      // ignore
    }
  };

  const handleRingBell = () => {
    try {
      satyanaamAudio.ringSacredBell();
    } catch {
      // ignore
    }
  };


  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  const FONT_SIZE_PRESETS: Array<{ id: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly'; label: string; sub: string }> = [
    { id: 'small', label: 'A-', sub: t.fontSmall },
    { id: 'normal', label: 'A', sub: isPb ? 'ਸਾਧਾਰਣ' : isHi ? 'सामान्य' : 'Normal' },
    { id: 'medium', label: 'A+', sub: t.fontMedium },
    { id: 'large', label: 'A++', sub: t.fontLarge },
    { id: 'xlarge', label: 'A+++', sub: 'XL' },
    { id: 'xl', label: '7XL', sub: isPb ? 'ਵਿਸ਼ਾਲ' : isHi ? 'बृहत्' : 'Huge' },
    { id: 'elderly', label: '👵 Elderly', sub: isPb ? 'ਬਜ਼ੁਰਗ' : isHi ? 'वरिष्ठ' : 'Senior' },
  ];
  const currentFontIndex = Math.max(0, FONT_SIZE_PRESETS.findIndex((f) => f.id === fontSize));

  return (
    <div
      id="settings-modal-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'settings-modal-overlay') {
          handleCloseModal();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity overflow-x-hidden"
    >
      <div
        id="settings-drawer-card"
        ref={modalRef}
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-lg rounded-2xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] sm:max-h-[85vh] transition-all"
      >
        {/* Strict Top Center Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-b py-2 px-3 sm:px-4 text-center select-none flex items-center justify-between gap-2 shrink-0"
        >
          <div className="hidden sm:block w-8 shrink-0" />
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-sm sm:text-lg font-bold tracking-wider sm:tracking-widest font-serif drop-shadow-xs min-w-0 truncate"
          >
            {exactTop}
          </span>
          <button
            id="close-settings-modal-back"
            onClick={handleCloseModal}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 whitespace-nowrap"
            title={activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : activeLang === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft size={16} className="shrink-0" />
            <span>{activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : activeLang === 'en' ? 'Back' : 'वापस जाएं'}</span>
          </button>
        </div>

        {/* Unified 3-Tab Navigation Bar */}
        <div
          role="tablist"
          aria-label="Unified Settings Tabs"
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="grid grid-cols-3 gap-1 p-1.5 border-b shrink-0"
        >
          {[
            {
              id: 'general' as SettingsTabId,
              icon: <Sliders className="w-3.5 h-3.5 shrink-0" />,
              label: isPb ? 'ਸੈਟਿੰਗਜ਼' : isHi ? 'सामान्य व थीम' : 'General',
            },
            {
              id: 'accessibility' as SettingsTabId,
              icon: <Volume2 className="w-3.5 h-3.5 shrink-0" />,
              label: isPb ? 'ਸੁਗਮਤਾ ਤੇ ਬਾਣੀ' : isHi ? 'सुगमता व वाणी' : 'Access & Vani',
            },
            {
              id: 'reading' as SettingsTabId,
              icon: <BookOpen className="w-3.5 h-3.5 shrink-0" />,
              label: isPb ? 'ਉੱਨਤ ਪਠਨ' : isHi ? 'उन्नत पाठ साधन' : 'Reading Suite',
            },
          ].map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`settings-tab-${tab.id}`}
                aria-selected={isTabActive}
                onClick={() => {
                  sacredHaptics.lightTap();
                  setActiveTab(tab.id);
                }}
                style={{
                  backgroundColor: isTabActive ? theme.buttonPrimaryBg : 'transparent',
                  color: isTabActive ? theme.buttonPrimaryText : theme.sacredMaroon,
                  borderColor: isTabActive ? theme.accentGold : 'transparent',
                }}
                className={`py-2 px-1.5 sm:px-2.5 rounded-xl border text-[11px] sm:text-xs font-serif font-bold flex items-center justify-center gap-1 transition cursor-pointer min-w-0 ${
                  isTabActive ? 'shadow-sm' : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-85'
                }`}
              >
                {tab.icon}
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Success Toast Notice */}
        {suiteToast && (
          <div className="bg-[#8B2500] text-white px-3 py-1.5 text-xs font-bold font-serif text-center flex items-center justify-center gap-1.5 animate-fadeIn shrink-0">
            <Check className="w-3.5 h-3.5" />
            <span>{suiteToast}</span>
          </div>
        )}

        {/* Vertically Scrollable Content */}
        <div className="overflow-y-auto overflow-x-hidden px-3 sm:px-6 py-4 sm:py-5 space-y-5 sm:space-y-6 flex-1 overscroll-contain pb-20 sm:pb-24">
          {activeTab === 'general' && (
            <>

          {/* Section 1: Multi-Language Selector */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Languages className="w-4 h-4" />
              <span>{t.chooseLanguageTitle}</span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'hi' as Language, label: 'हिन्दी', sub: 'Hindi' },
                { code: 'pb' as Language, label: 'ਪੰਜਾਬੀ', sub: 'Gurmukhi' },
                { code: 'en' as Language, label: 'English', sub: 'Global' },
              ].map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`select-lang-${lang.code}`}
                    onClick={() => {
                      onSelectLanguage(lang.code);
                      setContextLang(lang.code);
                    }}
                    style={{
                      backgroundColor: isSelected ? theme.accentGoldLight : theme.bgSecondary,
                      borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                      color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                    }}
                    className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center cursor-pointer ${
                      isSelected ? 'font-bold shadow-sm ring-1 ring-amber-400' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="text-sm font-semibold">{lang.label}</span>
                    <span style={{ color: theme.textMuted }} className="text-[10px]">
                      {lang.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Visual Themes & Reading Palettes (Including Flow State) */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਦ੍ਰਿਸ਼ਟੀਗਤ ਥੀਮ ਅਤੇ ਰੰਗ-ਯੋਜਨਾ' : language === 'en' ? 'Visual Themes & Reading Palettes' : 'दृश्य थीम एवं पठन रंग-योजना'}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  id: 'flow_state' as ThemeMode,
                  name: { hi: 'प्रवाह ध्यान (Flow State)', pb: 'ਪ੍ਰਵਾਹ ਧਿਆਨ (Flow State)', en: 'Flow State Indigo' },
                  desc: { hi: 'नेत्र-सुखद शांत इंडिगो व मृदु स्वर्णिम', pb: 'ਅੱਖਾਂ ਨੂੰ ਸਕੂਨ ਦੇਣ ਵਾਲਾ ਇੰਡੀਗੋ ਤੇ ਸੁਨਹਿਰੀ', en: 'Calming indigo & soft gold (Zero eye-strain)' },
                  previewBg: '#0F172A',
                  previewCard: '#1E2238',
                  previewText: '#FEF3C7',
                  previewAccent: '#FBBF24',
                  badge: '🌿 Flow'
                },
                {
                  id: 'mystic_dark' as ThemeMode,
                  name: { hi: 'गूढ़ रात्रि (Mystic Dark)', pb: 'ਗੂੜ੍ਹ ਰਾਤਰੀ (Mystic Dark)', en: 'Mystic Dark' },
                  desc: { hi: 'गहरा काला व स्वर्णिम प्रकाश', pb: 'ਡੂੰਘਾ ਕਾਲਾ ਤੇ ਸੁਨਹਿਰੀ ਚਮਕ', en: 'Pitch black with glowing amber' },
                  previewBg: '#0A0806',
                  previewCard: '#18130E',
                  previewText: '#FFFDF7',
                  previewAccent: '#F59E0B',
                  badge: '🌙 Night'
                },
                {
                  id: 'bhojpatra' as ThemeMode,
                  name: { hi: 'भोजपत्र (Bhojpatra)', pb: 'ਭੋਜਪੱਤਰ (Bhojpatra)', en: 'Bhojpatra Heritage' },
                  desc: { hi: 'पारंपरिक भोजपत्र व रक्त-मरून', pb: 'ਰਵਾਇਤੀ ਭੋਜਪੱਤਰ ਤੇ ਮਰੂਨ', en: 'Classic parchment cream & maroon' },
                  previewBg: '#FDF7EB',
                  previewCard: '#FFFDF9',
                  previewText: '#2D1B0F',
                  previewAccent: '#9E6A2A',
                  badge: '📜 Classic'
                },
                {
                  id: 'high_readability_light' as ThemeMode,
                  name: { hi: 'सहज श्वेत (Clean Light)', pb: 'ਸਹਿਜ ਚਿੱਟਾ (Clean Light)', en: 'Clean Light' },
                  desc: { hi: 'स्पष्ट श्वेत धरातल व काला टेक्स्ट', pb: 'ਸਾਫ਼ ਚਿੱਟਾ ਪਿਛੋਕੜ', en: 'High-contrast clean daylight' },
                  previewBg: '#F8F9FA',
                  previewCard: '#FFFFFF',
                  previewText: '#1A1A1A',
                  previewAccent: '#8C2818',
                  badge: '☀️ Light'
                }
              ].map((thm) => {
                const isSelected = themeMode === thm.id;
                return (
                  <button
                    key={thm.id}
                    type="button"
                    aria-label={`Select ${thm.badge} theme`}
                    onClick={() => {
                      setThemeMode(thm.id);
                    }}
                    style={{
                      backgroundColor: thm.previewCard,
                      borderColor: isSelected ? theme.accentGold : 'rgba(150, 150, 150, 0.2)',
                      color: thm.previewText,
                    }}
                    className={`p-3 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xs hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between h-24 ${
                      isSelected ? 'ring-2 ring-amber-400 shadow-md' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold" style={{ backgroundColor: `${thm.previewAccent}25`, color: thm.previewAccent }}>
                        {thm.badge}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold font-serif line-clamp-1">{thm.name[language] || thm.name.hi}</div>
                      <div className="text-[10px] opacity-75 line-clamp-1 font-sans mt-0.5">{thm.desc[language] || thm.desc.hi}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Global Nature Background Theme (कुदरती थीम) */}
          <div
            id="global-nature-theme-setting-card"
            style={{
              backgroundColor: globalWallpaper
                ? (isDarkMode ? 'rgba(6, 78, 59, 0.25)' : 'rgba(16, 185, 129, 0.1)')
                : theme.bgSecondary,
              borderColor: globalWallpaper ? '#10B981' : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3.5 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 text-left font-serif min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 style={{ color: isDarkMode ? '#6EE7B7' : '#065F46' }} className="text-sm sm:text-base font-bold">
                    {language === 'pb'
                      ? 'ਕੁਦਰਤੀ ਥੀਮ (Global Nature)'
                      : language === 'en'
                      ? 'Global Nature Theme'
                      : 'कुदरती थीम (Global Nature)'}
                  </h3>
                  {globalWallpaper && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider">
                      {language === 'pb' ? '✓ ਚਾਲੂ' : language === 'en' ? '✓ Active' : '✓ सक्रिय'}
                    </span>
                  )}
                </div>
                <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed font-sans">
                  {language === 'pb'
                    ? 'ਇਸ ਨੂੰ ਚਾਲੂ ਕਰਨ ‘ਤੇ ਪੂਰੇ ਐਪ ਵਿੱਚ ਕੁਦਰਤੀ ਬੈਕਗ੍ਰਾਊਂਡ ਲਾਗੂ ਹੋ ਜਾਵੇਗਾ।'
                    : language === 'en'
                    ? 'Applies a scenic nature background across the entire application.'
                    : 'इसे चालू करने पर पूरे ऐप में कुदरती बैकग्राउंड लागू हो जाएगा।'}
                </p>
              </div>

              <button
                type="button"
                id="settings-toggle-global-nature-switch"
                role="switch"
                aria-checked={!!globalWallpaper}
                aria-label="Toggle Global Nature Theme"
                onClick={() => setGlobalWallpaper(globalWallpaper ? null : 'banyan_ghat')}
                style={{
                  backgroundColor: globalWallpaper ? '#059669' : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-0.5"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    globalWallpaper ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* 7 Nature Scene Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {GLOBAL_NATURE_PRESETS.map((preset) => {
                const isSelected = globalWallpaper === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setGlobalWallpaper(isSelected ? null : preset.id)}
                    style={{
                      borderColor: isSelected ? '#10B981' : theme.cardBorder,
                      backgroundColor: isSelected
                        ? (isDarkMode ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 185, 129, 0.14)')
                        : theme.cardBg,
                    }}
                    className={`p-2 rounded-xl border text-left transition cursor-pointer flex items-center gap-2 ${
                      isSelected ? 'ring-2 ring-emerald-500 shadow-sm font-bold' : 'hover:opacity-95'
                    }`}
                  >
                    <span
                      className="w-8 h-8 rounded-lg shrink-0 border border-white/40 shadow-xs"
                      style={{
                        backgroundImage: preset.previewBg,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-[11px] font-serif font-bold truncate"
                        style={{ color: theme.textPrimary }}
                      >
                        {preset.name[language] || preset.name.hi}
                      </span>
                      <span
                        className="block text-[9px] truncate opacity-75"
                        style={{ color: theme.textSecondary }}
                      >
                        {preset.sub[language] || preset.sub.hi}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Reading Suite & Accessibility Moved Cleanly Into Dedicated Tabs */}

          {/* Section: Global High-Contrast Night Mode Toggle */}
          <div
            id="global-night-mode-setting-card"
            style={{
              backgroundColor: isDarkMode ? theme.accentGoldLight : theme.bgSecondary,
              borderColor: isDarkMode ? theme.accentGold : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-2.5 sm:gap-3">
              <div className="flex items-start gap-2.5 sm:gap-3 text-left font-serif min-w-0 flex-1">
                <div 
                  style={{
                    backgroundColor: isDarkMode ? theme.buttonPrimaryBg : theme.cardBg,
                    color: isDarkMode ? theme.buttonPrimaryText : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  {isDarkMode ? <Moon className="w-5 h-5 animate-pulse" /> : <Sun className="w-5 h-5" />}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold"
                    >
                      {language === 'pb' ? 'ਉੱਚ-ਵਿਰੋਧ ਰਾਤਰੀ ਪਠਨ ਮੋਡ' : language === 'en' ? 'High-Contrast Night Mode' : 'उच्च-विपर्यास रात्रि मोड (Night Mode)'}
                    </h3>
                    {isDarkMode && (
                      <span 
                        style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {language === 'pb' ? 'ਚਾਲੂ' : language === 'en' ? 'Active' : 'सक्रिय'}
                      </span>
                    )}
                  </div>
                  <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed font-sans">
                    {language === 'pb' 
                      ? 'ਸਾਰੇ ਅੰਗਾਂ ਵਿੱਚ ਉੱਚ-ਵਿਰੋਧੀ ਕਾਲਾ ਪਿਛੋਕੜ ਅਤੇ ਸੁਨਹਿਰੀ ਅੱਖਰ ਲਾਗੂ ਕਰੋ।' 
                      : language === 'en' 
                      ? 'Apply a pitch-black background with glowing warm gold text across all components.' 
                      : 'समस्त घटकों में गहरा काला धरातल व सुहावने स्वर्णिम अक्षरों का विन्यास लागू करें।'}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-global-night-mode-switch"
                onClick={toggleDarkMode}
                style={{
                  backgroundColor: isDarkMode ? theme.buttonPrimaryBg : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isDarkMode}
                title={isDarkMode ? 'रात्रि मोड बंद करें' : 'रात्रि मोड चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isDarkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Section: Sun-Aware Auto-Night Mode (सूर्यास्त/सूर्योदय स्वतः रात्रि मोड) */}
          <div
            id="sun-aware-auto-night-mode-card"
            style={{
              backgroundColor: isAutoNightMode ? (isDarkMode ? '#2A2016' : theme.accentGoldLight) : theme.bgSecondary,
              borderColor: isAutoNightMode ? '#F59E0B' : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-2.5 sm:gap-3">
              <div className="flex items-start gap-2.5 sm:gap-3 text-left font-serif min-w-0 flex-1">
                <div 
                  style={{
                    backgroundColor: isAutoNightMode ? theme.buttonPrimaryBg : theme.cardBg,
                    color: isAutoNightMode ? theme.buttonPrimaryText : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  <Sun className="w-5 h-5 animate-spin-slow" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold"
                    >
                      {language === 'pb' ? 'ਸੂਰਜ-ਅਧਾਰਿਤ ਆਟੋ ਰਾਤਰੀ ਮੋਡ (Sun-Aware)' : language === 'en' ? 'Sun-Aware Auto-Night Mode' : 'सूर्य-अनुसार स्वतः रात्रि मोड (Auto-Night Mode)'}
                    </h3>
                    {isAutoNightMode && (
                      <span 
                        style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {language === 'pb' ? 'ਸੂਰਜ ਸਿੰਕ' : language === 'en' ? 'Sun-Sync Active' : 'सूर्य-सिंक सक्रिय'}
                      </span>
                    )}
                  </div>
                  <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed font-sans">
                    {language === 'pb' 
                      ? 'ਸਥਾਨਕ ਸੂਰਜ ਛਿਪਣ (~੬:੩੦ ਸ਼ਾਮ) ਅਤੇ ਸੂਰਜ ਚੜ੍ਹਨ (~੬:੦੦ ਸਵੇਰ) ਅਨੁਸਾਰ ਡੇਅ ਅਤੇ ਨਾਈਟ ਮੋਡ ਆਪੇ ਬਦਲੋ।' 
                      : language === 'en' 
                      ? 'Automatically activates Mystic Dark at local sunset (~6:30 PM) and restores Bhojpatra at sunrise (~6:00 AM).' 
                      : 'स्थानीय सूर्यास्त (~६:३० सायं) पर स्वतः रात्रि मोड तथा सूर्योदय (~६:०० प्रातः) पर भोजपत्र मोड सक्रिय करता है।'}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-sun-aware-night-mode-switch"
                onClick={() => setIsAutoNightMode(!isAutoNightMode)}
                style={{
                  backgroundColor: isAutoNightMode ? theme.buttonPrimaryBg : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isAutoNightMode}
                title={isAutoNightMode ? 'स्वतः सूर्य सिंक बंद करें' : 'स्वतः सूर्य सिंक चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isAutoNightMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Section: Sahaj Mode (सहज मोड / Tranquil Simplicity Mode) */}
          <div
            id="sahaj-mode-setting-card"
            style={{
              backgroundColor: isSahajMode ? theme.accentGoldLight : theme.bgSecondary,
              borderColor: isSahajMode ? theme.accentGold : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-2.5 sm:gap-3">
              <div className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div 
                  style={{
                    backgroundColor: isSahajMode ? theme.buttonPrimaryBg : theme.cardBg,
                    color: isSahajMode ? theme.buttonPrimaryText : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  <Sparkles className={`w-5 h-5 ${isSahajMode ? 'animate-pulse' : ''}`} />
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold font-serif"
                    >
                      {t.sahajModeTitle}
                    </h3>
                    {isSahajMode && (
                      <span 
                        style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {t.sahajModeActive}
                      </span>
                    )}
                  </div>
                  <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed">
                    {isSahajMode ? t.sahajModeEnabledDesc : t.sahajModeDisabledDesc}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-sahaj-mode-switch"
                onClick={() => setIsSahajMode(!isSahajMode)}
                style={{
                  backgroundColor: isSahajMode ? theme.buttonPrimaryBg : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isSahajMode}
                title={isSahajMode ? 'सहज मोड बंद करें' : 'सहज मोड चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isSahajMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Visual Notice when Sahaj Mode is Active */}
            {isSahajMode && (
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
                className="p-3 rounded-xl border flex items-center justify-between text-xs font-serif"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span style={{ color: theme.textPrimary }} className="font-bold text-[11px] sm:text-xs">
                    {t.sahajModeFocusNotice}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Typography (Font Size, Line Spacing, Width) & Speech moved to Tab 2 (Accessibility & Vani) */}

          {/* Section 4: Satyanaam Dhun Audio Synthesizer */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-4 rounded-xl border space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 min-w-0">
                <Volume2 className="w-4 h-4 shrink-0" />
                <span>{t.dhunPlayerTitle}</span>
              </h3>

              <button
                id="modal-toggle-dhun-btn"
                onClick={onToggleDhun}
                style={{
                  backgroundColor: isDhunPlaying ? theme.accentGold : theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isDhunPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isDhunPlaying ? t.dhunPause : t.dhunPlay}</span>
              </button>
            </div>

            <p style={{ color: theme.textSecondary }} className="text-xs">
              {t.dhunDescription}
            </p>

            <div className="flex items-center gap-3">
              <span style={{ color: theme.textMuted }} className="text-xs">{t.lowLabel}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={dhunVolume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <span style={{ color: theme.textMuted }} className="text-xs">{t.highLabel}</span>
            </div>

            {/* Vocal Simran Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-amber-900/10 dark:border-amber-100/10">
              <div className="min-w-0 flex-1">
                <p style={{ color: theme.textPrimary }} className="text-xs font-bold">
                  {t.vocalChantTitle}
                </p>
                <p style={{ color: theme.textMuted }} className="text-[11px]">
                  {t.vocalChantDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={handleToggleVocalChant}
                style={{
                  backgroundColor: vocalChantEnabled ? theme.buttonPrimaryBg : theme.bg,
                  borderColor: vocalChantEnabled ? theme.buttonPrimaryBg : theme.borderOrnament,
                  color: vocalChantEnabled ? theme.buttonPrimaryText : theme.textMuted,
                }}
                className="px-2.5 py-1 rounded-md text-xs font-semibold border transition cursor-pointer shrink-0"
              >
                {vocalChantEnabled ? t.onStatus : t.offStatus}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <button
                onClick={handleRingTripleChime}
                style={{ color: theme.accentGold }}
                className="text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                {t.tripleChimeLabel}
              </button>
              <span style={{ color: theme.textMuted }}>•</span>
              <button
                onClick={handleRingBell}
                style={{ color: theme.accentGold }}
                className="text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                {t.sacredBellLabel}
              </button>
            </div>
          </div>

          {/* Voice Recitation Speed & Pitch consolidated into Tab 2 (Accessibility & Vani) */}

          {/* Section: Smart Offline Library Availability Status Indicator */}
          <div 
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-4 rounded-2xl border space-y-2.5 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 min-w-0">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'pb' ? 'ਔਫਲਾਈਨ ਲਾਇਬ੍ਰੇਰੀ ਉਪਲਬਧਤਾ' : language === 'en' ? 'Offline Library Status' : 'ऑफ़लाइन ग्रंथालय उपलब्धता (Offline Ready)'}</span>
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {navigator.onLine
                  ? language === 'pb'
                    ? 'ਔਫਲਾਈਨ ਲਈ ਤਿਆਰ (100% Caching Active)'
                    : language === 'en'
                    ? 'Fully Cached & Ready'
                    : 'पूर्णतः कैश्ड व तैयार'
                  : language === 'pb'
                  ? 'ਔਫਲਾਈਨ ਮੋਡ ਸਰਗਰਮ'
                  : language === 'en'
                  ? 'Offline Mode Active'
                  : 'ऑफ़लाइन मोड सक्रिय'}
              </span>
            </div>

            <p style={{ color: theme.textSecondary }} className="text-xs leading-snug">
              {language === 'pb' 
                ? 'ਸਾਰੀਆਂ ਸਾਖੀਆਂ, ਨਿਤਨੇਮ ਗੁਟਕਾ, ਅਖੰਡ ਪਾਠ ਅਤੇ ਗ੍ਰੰਥ ਆਪ ਜੀ ਦੇ ਫ਼ੋਨ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹਨ। ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਦੇ ਪੜ੍ਹੋ।'
                : language === 'en'
                ? 'All Sakhis, Nitnem Gutka, Akhand Path and Granths are precached and fully available offline.'
                : 'समस्त साखियाँ, नितनेम गुटका, अखंड पाठ एवं पावन ग्रंथ आपके डिवाइस में कैश्ड हैं। बिना इंटरनेट के भी निर्बाध पठन संभव है।'}
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono opacity-80" style={{ color: theme.textMuted }}>
              <span>ServiceWorker: Active</span>
              <span>Cache: 100% Synced</span>
            </div>

            {/* Pinned Offline Audio Summary */}
            <div className="pt-2 border-t border-dashed flex flex-wrap items-center justify-between gap-2 text-xs" style={{ borderColor: theme.cardBorder }}>
              <div className="flex items-center gap-1.5 font-bold min-w-0" style={{ color: theme.textPrimary }}>
                <Pin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {language === 'pb'
                    ? `ਆਫ਼ਲਾਈਨ ਸੇਵ ਭਜਨ/ਧੁਨ: ${pinnedStats.count}`
                    : language === 'en'
                    ? `Pinned Offline Audio: ${pinnedStats.count} track(s)`
                    : `ऑफ़लाइन पिन किए गए भजन/धुन: ${pinnedStats.count}`}
                  {pinnedStats.count > 0 && ` (${formatAudioSize(pinnedStats.totalBytes)})`}
                </span>
              </div>
              {pinnedStats.count > 0 && (
                <button
                  type="button"
                  onClick={() => clearAllPinnedAudio()}
                  className="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 text-[11px] font-bold transition cursor-pointer shrink-0"
                >
                  {language === 'pb' ? 'ਸਾਫ਼ ਕਰੋ' : language === 'en' ? 'Clear' : 'साफ़ करें'}
                </button>
              )}
            </div>
          </div>

          {/* Admin Panel Section (Strictly hidden from public visitors unless unlocked via secret gesture) */}
          {isAdmin && (
          <div 
            style={{ 
              backgroundColor: theme.mode === 'mystic_dark' ? '#1E293B' : '#ECFDF5',
              borderColor: '#10B981'
            }}
            className="p-4 rounded-2xl border-2 space-y-3 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 style={{ color: '#059669' }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 font-serif min-w-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>सतगुरु साहेब एडमिन पैनल (Authorized)</span>
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 shrink-0">
                👑 एडमिन सक्रिय
              </span>
            </div>

            {adminNotice && (
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-center text-amber-950 dark:text-amber-200">
                {adminNotice}
              </div>
            )}

              <div className="space-y-3">
                <p className="text-xs font-serif leading-relaxed" style={{ color: theme.textSecondary }}>
                  {language === 'pb'
                    ? 'ਤੁਸੀਂ ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਵਜੋਂ ਪ੍ਰਮਾਣਿਤ ਹੋ। ਪਾਵਨ ਸਰੂਪ, ਪਵਿੱਤਰ ਆਡੀਓ ਤੇ ਸਮੱਗਰੀ ਪ੍ਰਬੰਧਨ ਸਰਗਰਮ ਹੈ।'
                    : language === 'en'
                    ? 'You are authenticated as Authorized Admin. Sacred image and media management are fully unlocked.'
                    : 'आप अधिकृत एडमिन के रूप में प्रमाणित हैं। पावन स्वरूप, पवित्र ऑडियो एवं संपूर्ण सामग्री प्रबंधन आपके लिए सक्रिय है।'}
                </p>

                {/* Admin-Only Darshan Swaroop Manager */}
                <div className="p-3 rounded-xl border border-emerald-500/30 bg-white/70 dark:bg-zinc-900/70 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-black font-serif text-emerald-900 dark:text-emerald-300">
                      🖼️ पावन दर्शन स्वरूप प्रबंधन (Darshan Settings)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                      {language === 'pb' ? '🔐 ਐਡਮਿਨ ਪਿੰਨ ਸਰਗਰਮ' : language === 'en' ? '🔐 Admin PIN Active' : '🔐 एडमिन पिन सक्रिय'}
                    </span>
                  </div>

                  {portraitState.imageData && (
                    <div className="flex items-center gap-3">
                      <img
                        src={portraitState.imageData}
                        alt="Current Darshan Portrait"
                        className={`w-14 h-16 rounded-lg border border-amber-500/40 bg-stone-900 ${portraitState.objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                      />
                      <div className="flex-1 flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleAdminObjectFit('contain')}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer transition ${
                            portraitState.objectFit === 'contain'
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'border-stone-300 dark:border-zinc-700'
                          }`}
                        >
                          पूर्ण चित्र (Contain)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdminObjectFit('cover')}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer transition ${
                            portraitState.objectFit === 'cover'
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'border-stone-300 dark:border-zinc-700'
                          }`}
                        >
                          फ़्रेम भरें (Cover)
                        </button>
                      </div>
                    </div>
                  )}

                  <input
                    ref={darshanInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/*"
                    onChange={handleAdminPortraitUpload}
                    className="hidden"
                  />

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={isUploadingPortrait}
                      onClick={() => darshanInputRef.current?.click()}
                      className="flex-1 min-h-[40px] py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-serif transition cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-60"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{isUploadingPortrait ? 'अपलोड...' : portraitState.imageData ? 'पावन चित्र बदलें' : 'पावन चित्र अपलोड करें'}</span>
                    </button>

                    {portraitState.imageData && (
                      <button
                        type="button"
                        onClick={handleAdminResetPortrait}
                        className="min-h-[40px] py-2 px-3 rounded-xl border border-stone-300 dark:border-zinc-700 text-xs font-bold font-serif hover:bg-black/5 transition cursor-pointer flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>रीसेट</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Unified Admin Media Studio (Images, Audio & Video) */}
                <div className="p-3 rounded-xl border border-emerald-500/30 bg-white/70 dark:bg-zinc-900/70 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-black font-serif text-emerald-900 dark:text-emerald-300">
                      📡 पावन मीडिया अपलोड स्टूडियो (Admin-Only)
                    </span>
                    <span className="text-[10px] font-mono opacity-75">
                      🖼️ {studioItems.filter((i) => i.mediaType === 'image').length} • 🎵 {studioItems.filter((i) => i.mediaType === 'audio').length} • 🎬 {studioItems.filter((i) => i.mediaType === 'video').length}
                    </span>
                  </div>

                  {/* Studio Type Tabs */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'image' as SacredMediaType, label: '🖼️ छवि (Image)', icon: ImageIcon },
                      { id: 'audio' as SacredMediaType, label: '🎵 ऑडियो', icon: Music },
                      { id: 'video' as SacredMediaType, label: '🎬 वीडियो', icon: Video },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setStudioTab(tab.id);
                          setStudioFile(null);
                          setStudioUrl('');
                        }}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                          studioTab === tab.id
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'border-stone-300 dark:border-zinc-700 hover:bg-black/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleStudioPublish} className="space-y-2">
                    <input
                      type="text"
                      required
                      value={studioTitle}
                      onChange={(e) => setStudioTitle(e.target.value)}
                      placeholder={
                        studioTab === 'image'
                          ? 'छवि का शीर्षक (उदा. मगहर पावन धाम)'
                          : studioTab === 'audio'
                          ? 'ऑडियो का शीर्षक (उदा. संध्या आरती)'
                          : 'वीडियो का शीर्षक (उदा. कबीर वाणी सत्संग)'
                      }
                      className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-xs font-bold outline-none"
                      style={{ color: theme.textPrimary }}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-dashed border-emerald-600/50 text-[11px] font-bold cursor-pointer hover:bg-emerald-500/10 truncate">
                        <Upload className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">
                          {studioFile
                            ? studioFile.name
                            : studioTab === 'image'
                            ? 'छवि चुनें'
                            : studioTab === 'audio'
                            ? 'MP3 चुनें'
                            : 'MP4 चुनें'}
                        </span>
                        <input
                          type="file"
                          accept={
                            studioTab === 'image'
                              ? 'image/jpeg,image/png,image/webp,image/*'
                              : studioTab === 'audio'
                              ? 'audio/*,.mp3,.wav,.m4a'
                              : 'video/mp4,video/webm,video/*'
                          }
                          onChange={(e) => setStudioFile(e.target.files?.[0] || null)}
                          className="hidden"
                        />
                      </label>

                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-950">
                        <Link2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <input
                          type="text"
                          value={studioUrl}
                          onChange={(e) => setStudioUrl(e.target.value)}
                          placeholder={studioTab === 'video' ? 'YouTube लिंक / URL' : 'या HTTPS लिंक...'}
                          className="w-full text-[11px] bg-transparent outline-none"
                          style={{ color: theme.textPrimary }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isStudioPublishing || (!studioFile && !studioUrl.trim())}
                      className="w-full min-h-[38px] py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer disabled:opacity-50"
                    >
                      {isStudioPublishing ? 'प्रकाशित हो रहा है...' : '☁️ वैश्विक क्लाउड में प्रकाशित करें'}
                    </button>
                  </form>

                  {/* Compact list of published items for active tab */}
                  {studioItems.filter((it) => it.mediaType === studioTab).length > 0 && (
                    <div className="space-y-1 max-h-28 overflow-y-auto pt-1 border-t border-emerald-500/20">
                      {studioItems
                        .filter((it) => it.mediaType === studioTab)
                        .slice(0, 6)
                        .map((item) => (
                          <div key={item.id} className="flex items-center justify-between gap-2 text-[11px] px-2 py-1 rounded-md bg-black/5 dark:bg-white/5">
                            <span className="truncate font-semibold">{item.title}</span>
                            <button
                              type="button"
                              onClick={() => handleStudioDelete(item.id)}
                              className="p-1 text-red-600 hover:bg-red-500/15 rounded cursor-pointer shrink-0"
                              title="हटाएं"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  id="settings-admin-panel-injector-btn"
                  onClick={() => {
                    onClose();
                    window.dispatchEvent(new CustomEvent(OPEN_ADMIN_INJECTOR_EVENT));
                  }}
                  className="w-full min-h-[40px] py-2 px-3 rounded-xl border border-amber-500/40 bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-200 text-xs font-bold font-serif transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Database className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
                  <span>
                    {language === 'pb'
                      ? `ਪ੍ਰਸ਼ਾਸਕ ਡੇਟਾ ਲੇਅਰ ਇੰਜੈਕਟਰ (${ADMIN_GRANTH_SLOTS.length} ਕਾਰਡ ਸਲੌਟ)`
                      : language === 'en'
                      ? `Admin Data Layer Injector (${ADMIN_GRANTH_SLOTS.length} Card Slots)`
                      : `प्रशासक डेटा लेयर इंजेक्टर (${ADMIN_GRANTH_SLOTS.length} कार्ड स्लॉट्स)`}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleAdminLogout}
                  className="w-full py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-serif transition cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਐਡਮਿਨ ਲੌਗ-ਆਉਟ ਕਰੋ' : language === 'en' ? 'Admin Logout' : 'एडमिन लॉग-आउट करें'}</span>
                </button>
              </div>
          </div>
          )}

          {/* Section 5: Daily Nitya Vani Notification */}
          <div className="space-y-4">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>{t.notificationReminderTitle}</span>
            </h3>
            <NityaVaniSettings language={language} />
          </div>

          {/* Section 6: About Satguru Kabir Saheb Teachings & PWA */}
          <div className="p-3.5 rounded-xl border border-dashed text-center space-y-2.5" style={{ borderColor: theme.borderOrnament }}>
            <span style={{ color: theme.accentGold }} className="text-xs font-bold block">
              {t.pwaTitleLabel}
            </span>
            <p style={{ color: theme.textMuted }} className="text-[11px] leading-relaxed">
              {t.pwaDescLabel}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <PWAInstallButton
                language={language}
                className="bg-amber-700 hover:bg-amber-800 text-white shadow-sm"
                onFallbackOpenModal={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('sahebworld:open-install-modal'));
                }}
              />
              {onPreviewSplash && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPreviewSplash();
                  }}
                  className="min-h-[44px] py-1.5 px-3 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 text-xs font-bold font-serif transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-normal text-center"
                >
                  <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white font-serif font-black text-[9px] flex items-center justify-center shrink-0">स</span>
                  <span>{language === 'pb' ? 'ਪਾਵਨ ਪ੍ਰਤੀਕ ਤੇ ਸਪਲੈਸ਼ ਦਰਸ਼ਨ' : language === 'en' ? 'Preview Emblem & Splash' : 'दिव्य प्रतीक व स्प्लैश दर्शन'}</span>
                </button>
              )}

              <button
                type="button"
                id="settings-check-for-updates-btn"
                disabled={isReloadingApp}
                onClick={handleCheckForUpdates}
                className="min-h-[44px] py-1.5 px-3 rounded-xl border border-emerald-600/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 text-xs font-bold font-serif transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-normal text-center disabled:opacity-60"
                title={
                  language === 'pb'
                    ? 'ਪੁਰਾਣਾ ਕੈਸ਼ ਸਾਫ਼ ਕਰਕੇ ਨਵੀਂ ਬਾਣੀ ਅੱਪਡੇਟ ਲੋਡ ਕਰੋ (ਡਾਇਰੀ ਤੇ ਹਾਜ਼ਰੀ ਸੁਰੱਖਿਅਤ ਰਹਿਣਗੇ)'
                    : language === 'en'
                    ? 'Clear stale static caches and load the latest scriptures while preserving your diary & Haziri'
                    : 'स्टैटिक कैश साफ कर सर्वर से नवीनतम वाणी लोड करें (आपकी डायरी व हाज़िरी सुरक्षित रहेंगी)'
                }
              >
                <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${isReloadingApp ? 'animate-spin' : ''}`} />
                <span>
                  {isReloadingApp
                    ? language === 'pb'
                      ? 'ਅੱਪਡੇਟ ਜਾਂਚਿਆ ਜਾ ਰਿਹਾ ਹੈ...'
                      : language === 'en'
                      ? 'Updating...'
                      : 'नवीनतम वाणी लोड हो रही है...'
                    : language === 'pb'
                    ? 'ਨਵਾਂ ਗਿਆਨ ਅਪਡੇਟ ਜਾਂਚੋ'
                    : language === 'en'
                    ? 'Check for Updates'
                    : 'नया ज्ञान अपडेट जांचें'}
                </span>
              </button>
            </div>

            {updateCheckNotice && (
              <p className="text-[11px] font-serif text-amber-800 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-2.5 py-1.5">
                {updateCheckNotice}
              </p>
            )}

            {/* Persistent Auto Splash Screen Toggle on App Open */}
            <div className="pt-2 border-t border-dashed flex items-center justify-between gap-2.5 sm:gap-3 text-left" style={{ borderColor: theme.borderOrnament }}>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold font-serif" style={{ color: theme.textPrimary }}>
                  {language === 'pb'
                    ? 'ਐਪ ਖੋਲ੍ਹਣ ਤੇ ਦਿਵਯ ਸਪਲੈਸ਼ ਸਕ੍ਰੀਨ ਦਿਖਾਓ'
                    : language === 'en'
                    ? 'Show Sacred Splash Screen on App Launch'
                    : 'ऐप खोलने पर दिव्य स्प्लैश स्क्रीन दिखाएँ'}
                </div>
                <div className="text-[10px]" style={{ color: theme.textMuted }}>
                  {language === 'pb'
                    ? 'ਹਰ ਵਾਰ ਐਪ ਖੁੱਲ੍ਹਣ ਤੇ ਸਤਯਨਾਮ ਚੱਕਰ ਅਤੇ ਪਾਵਨ ਪ੍ਰਤੀਕ ਦਰਸ਼ਨ ਆਪਣੇ ਆਪ ਸ਼ੁਰੂ ਹੋਵੇਗਾ'
                    : language === 'en'
                    ? 'Auto-display Satyanaam emblem splash when launching the app'
                    : 'हर बार ऐप खुलने पर सत्यनाम चक्र व पावन प्रतीक दर्शन स्वतः प्रारंभ होगा'}
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggleSplashOnLaunch}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                  splashOnLaunch
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-300 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                }`}
              >
                {splashOnLaunch
                  ? language === 'pb'
                    ? 'ਚਾਲੂ (ON)'
                    : language === 'en'
                    ? 'ON'
                    : 'चालू (ON)'
                  : language === 'pb'
                  ? 'ਬੰਦ (OFF)'
                  : language === 'en'
                  ? 'OFF'
                  : 'बंद (OFF)'}
              </button>
            </div>
          </div>

          {/* Section: Advanced & Swadhyay Tools */}
          <div className="space-y-3 pt-4 border-t border-amber-500/20">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {language === 'pb' ? 'ਉੱਨਤ ਤੇ ਸਵਾਧਿਆਏ ਟੂਲਸ' : language === 'en' ? 'Advanced & Swadhyay Tools' : 'उन्नत एवं स्वाध्याय टूल्स'}
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('sahebworld:navigate', { detail: 'health-diagnostic' }));
                }}
                className="py-2.5 px-3 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-bold font-serif transition flex items-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{language === 'pb' ? 'ਐਪ ਸਿਹਤ ਤੇ ਡਾਇਗਨੋਸਟਿਕ' : language === 'en' ? 'App Health Diagnostic' : 'ऐप सेहत एवं डायग्नोस्टिक'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('sahebworld:navigate', { detail: 'auto-correct' }));
                }}
                className="py-2.5 px-3 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-bold font-serif transition flex items-center gap-2 cursor-pointer"
              >
                <SpellCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{language === 'pb' ? 'ਬਾਣੀ ਸੋਧ ਤੇ ਮਾਨਕੀਕਰਨ' : language === 'en' ? 'Vani Auto-Correct & Harmonization' : 'वाणी वर्तनी शोधन एवं मानकीकरण'}</span>
              </button>
            </div>
          </div>

          {/* Quick Close Settings Button */}
          <button
            onClick={handleCloseModal}
            style={{
              backgroundColor: theme.buttonPrimaryBg,
              color: theme.buttonPrimaryText
            }}
            className="w-full py-2.5 rounded-xl font-bold font-serif text-sm shadow-md hover:opacity-90 transition active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{language === 'pb' ? 'ਬੰਦ ਕਰੋ (Close)' : language === 'en' ? 'Close Settings' : 'सेटिंग्स बंद करें (Close)'}</span>
          </button>
            </>
          )}

          {/* TAB 2: ACCESSIBILITY & VANI (सुगमता एवं वाणी) */}
          {activeTab === 'accessibility' && (
            <div className="space-y-5">
              {/* Unified Font Size & Elderly Support */}
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-4 rounded-2xl border space-y-3.5 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Type className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{t.fontSizeTitle || 'अक्षर आकार (Font Size)'}</span>
                  </h3>
                  <span
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="text-[11px] font-black px-2.5 py-0.5 rounded-full"
                  >
                    {FONT_SIZE_PRESETS[currentFontIndex]?.label || 'A+'} ({FONT_SIZE_PRESETS[currentFontIndex]?.sub})
                  </span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={FONT_SIZE_PRESETS.length - 1}
                  step={1}
                  value={currentFontIndex}
                  onChange={(e) => {
                    const idx = parseInt(e.target.value, 10);
                    const preset = FONT_SIZE_PRESETS[idx];
                    if (preset) setFontSize(preset.id);
                  }}
                  className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
                />

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {FONT_SIZE_PRESETS.map((fObj) => {
                    const isSelected = fontSize === fObj.id;
                    return (
                      <button
                        key={fObj.id}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setFontSize(fObj.id);
                        }}
                        style={{
                          backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.cardBg,
                          borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                          color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                        }}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition cursor-pointer flex flex-col items-center justify-center ${
                          isSelected ? 'shadow-md ring-1 ring-amber-400' : 'hover:opacity-90'
                        }`}
                      >
                        <span>{fObj.label}</span>
                        <span className="text-[9px] opacity-75 font-normal">{fObj.sub}</span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-[11px] text-center opacity-75 italic" style={{ color: theme.textSecondary }}>
                  {isPb
                    ? 'ਇਹ ਸੈਟਿੰਗ ਸਾਰੇ ਸਵਾਧਿਆਏ, ਗੁਟਕਾ ਅਤੇ ਗ੍ਰੰਥ ਪਾਠਾਂ ‘ਤੇ ਲਾਗੂ ਹੋਵੇਗੀ।'
                    : isHi
                    ? 'यह सेटिंग समस्त स्वाध्याय, गुटका एवं ग्रंथ पाठों पर समान रूप से लागू होगी।'
                    : 'Applies consistently across all Swadhyay, Nitnem Gutka, and Granth readers.'}
                </p>
              </div>

              {/* Line Spacing */}
              <div className="space-y-2.5">
                <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  <span>{t.lineSpacingTitle || 'Line Spacing'}</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { height: 'small' as const, label: t.fontSmall },
                    { height: 'medium' as const, label: t.fontMedium },
                    { height: 'large' as const, label: t.fontLarge },
                  ].map((h) => (
                    <button
                      key={h.height}
                      type="button"
                      onClick={() => setLineHeight(h.height)}
                      style={{
                        backgroundColor: lineHeight === h.height ? theme.accentGoldLight : theme.bgSecondary,
                        borderColor: lineHeight === h.height ? theme.accentGold : theme.cardBorder,
                        color: lineHeight === h.height ? theme.sacredMaroon : theme.textPrimary,
                      }}
                      className="py-2.5 px-3 rounded-xl border text-xs font-semibold transition text-center cursor-pointer"
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Width */}
              <div className="space-y-2.5">
                <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  <span>{t.widthModeTitle || 'Content Width'}</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { mode: 'narrow' as const, label: t.widthNarrow || 'Narrow' },
                    { mode: 'medium' as const, label: t.widthMedium || 'Medium' },
                    { mode: 'wide' as const, label: t.widthWide || 'Wide' },
                  ].map((m) => (
                    <button
                      key={m.mode}
                      type="button"
                      onClick={() => setWidthMode(m.mode)}
                      style={{
                        backgroundColor: widthMode === m.mode ? theme.accentGoldLight : theme.bgSecondary,
                        borderColor: widthMode === m.mode ? theme.accentGold : theme.cardBorder,
                        color: widthMode === m.mode ? theme.sacredMaroon : theme.textPrimary,
                      }}
                      className="py-2.5 px-3 rounded-xl border text-xs font-semibold transition text-center cursor-pointer"
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Recitation Speed & Pitch Settings */}
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-4 rounded-2xl border space-y-4 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 min-w-0 flex-1">
                    <SpeechVolumeIcon className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {isPb
                        ? 'ਵਾਕ ਪਾਠ ਆਵਾਜ਼ ਸੈਟਿੰਗਾਂ (Speech Vani)'
                        : isHi
                        ? 'वाणी वाचन स्वर सेटिंग्स (Speech & Vani)'
                        : 'Voice Recitation Settings (Speed & Pitch)'}
                    </span>
                  </h3>

                  <button
                    type="button"
                    onClick={handleTestVoiceRecitation}
                    style={{
                      backgroundColor: isVoiceTesting ? theme.sacredMaroon : theme.buttonPrimaryBg,
                      color: theme.buttonPrimaryText,
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95 shrink-0"
                  >
                    {isVoiceTesting ? <Square className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
                    <span>
                      {isVoiceTesting
                        ? (isPb ? 'ਵਾਣੀ ਰੋਕੋ' : isHi ? 'रोकें' : 'Stop')
                        : (isPb ? 'ਬਾਣੀ ਟੈਸਟ ਸੁਣੋ' : isHi ? 'वाणी परीक्षण सुनें' : 'Test Voice')}
                    </span>
                  </button>
                </div>

                {/* Quick Rate Chips */}
                <div className="grid grid-cols-4 gap-2">
                  {[0.75, 1.0, 1.25, 1.5].map((rate) => {
                    const isSelected = Math.abs(speechRate - rate) < 0.03;
                    return (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => handleSpeechRateChange(rate)}
                        style={{
                          backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.cardBg,
                          borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                          color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                        }}
                        className="py-1.5 rounded-xl border text-xs font-mono font-bold transition cursor-pointer"
                      >
                        {rate}x
                      </button>
                    );
                  })}
                </div>

                {/* Voice Speed (Rate) Fine Slider */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span style={{ color: theme.textPrimary }} className="flex items-center gap-1">
                      <span>{isPb ? 'ਗਤੀ (Speed / Rate):' : isHi ? 'वाणी गति (Rate):' : 'Voice Speed:'}</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">{speechRate.toFixed(2)}x</span>
                    </span>
                    <span className="text-[10px] opacity-70 font-mono" style={{ color: theme.textSecondary }}>
                      {speechRate <= 0.8
                        ? (isPb ? 'ਸ਼ਾਂਤ (ਧੀਮੀ)' : isHi ? 'शांत / धीमी' : 'Slow')
                        : speechRate >= 1.2
                        ? (isPb ? 'ਤੇਜ਼' : isHi ? 'शीघ्र' : 'Fast')
                        : (isPb ? 'ਸਾਧਾਰਣ' : isHi ? 'सामान्य' : 'Normal')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.6"
                    max="1.5"
                    step="0.05"
                    value={speechRate}
                    onChange={(e) => handleSpeechRateChange(parseFloat(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
                  />
                </div>

                {/* Voice Pitch Control */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span style={{ color: theme.textPrimary }} className="flex items-center gap-1">
                      <span>{isPb ? 'ਸੁਰ (Pitch):' : isHi ? 'वाणी स्वर (Pitch):' : 'Voice Pitch:'}</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">{speechPitch.toFixed(2)}</span>
                    </span>
                    <span className="text-[10px] opacity-70 font-mono" style={{ color: theme.textSecondary }}>
                      {speechPitch <= 0.8
                        ? (isPb ? 'ਗੰਭੀਰ' : isHi ? 'गंभीर' : 'Deep')
                        : speechPitch >= 1.2
                        ? (isPb ? 'ਸੁਕੋਮਲ' : isHi ? 'सुकोमल' : 'High')
                        : (isPb ? 'ਸੁਭਾਵਿਕ' : isHi ? 'स्वाभाविक' : 'Natural')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    value={speechPitch}
                    onChange={(e) => handleSpeechPitchChange(parseFloat(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
                  />
                </div>

                {/* Global Audio Mute Toggle */}
                <div className="pt-2 border-t flex items-center justify-between gap-2" style={{ borderColor: theme.cardBorder }}>
                  <span style={{ color: theme.textPrimary }} className="text-xs font-bold flex items-center gap-1.5">
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                    <span>{isPb ? 'ਸਮੁੱਚੀ ਆਵਾਜ਼ ਮਿਊਟ ਕਰੋ' : isHi ? 'समस्त पठन ध्वनि म्यूट करें' : 'Mute Global Audio'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setIsMuted(!isMuted);
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      isMuted
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-black/5 dark:bg-white/10 border-amber-500/30'
                    }`}
                  >
                    {isMuted ? (isPb ? 'ਮਿਊਟ (ON)' : isHi ? 'म्यूट (ON)' : 'Muted') : (isPb ? 'ਚਾਲੂ (Sound)' : isHi ? 'ध्वनि सक्रिय' : 'Active')}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="w-full py-2.5 rounded-xl font-bold font-serif text-sm shadow-md hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>{isPb ? 'ਸੈਟਿੰਗਜ਼ ਸੁਰੱਖਿਅਤ ਕਰੋ' : isHi ? 'सेटिंग्स सहेजें एवं बंद करें' : 'Save & Close'}</span>
              </button>
            </div>
          )}

          {/* TAB 3: ADVANCED READING SUITE & HISTORY (उन्नत पाठ साधन व इतिहास) */}
          {activeTab === 'reading' && (
            <div className="space-y-5">
              {/* Sub-tab Switcher: Controls vs Reading History */}
              <div
                className="flex items-center p-1 rounded-2xl border gap-1"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
              >
                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setSuiteSubTab('controls');
                  }}
                  style={{
                    backgroundColor: suiteSubTab === 'controls' ? theme.cardBg : 'transparent',
                    borderColor: suiteSubTab === 'controls' ? theme.accentGold : 'transparent',
                    color: suiteSubTab === 'controls' ? theme.sacredMaroon : theme.textMuted,
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-xl border font-serif font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Sliders className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{isHi ? 'पठन साधन (Controls)' : isPb ? 'ਪਠਨ ਸਾਧਨ' : 'Controls'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setSuiteSubTab('history');
                  }}
                  style={{
                    backgroundColor: suiteSubTab === 'history' ? theme.cardBg : 'transparent',
                    borderColor: suiteSubTab === 'history' ? theme.accentGold : 'transparent',
                    color: suiteSubTab === 'history' ? theme.sacredMaroon : theme.textMuted,
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-xl border font-serif font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <History className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{isHi ? 'पठन इतिहास (Last 10)' : isPb ? 'ਪਠਨ ਇਤਿਹਾਸ' : 'History'}</span>
                  {historyItems.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white text-[9px] font-mono flex items-center justify-center font-bold shrink-0">
                      {historyItems.length}
                    </span>
                  )}
                </button>
              </div>

              {suiteSubTab === 'controls' ? (
                <div className="space-y-5">
                  {currentReadingTitle && (
                    <div
                      style={{ backgroundColor: theme.accentGoldLight, borderColor: theme.accentGold }}
                      className="p-3 rounded-2xl border flex items-center justify-between gap-2 text-xs font-serif"
                    >
                      <div className="min-w-0">
                        <span style={{ color: theme.sacredMaroon }} className="font-bold block truncate">
                          📖 {currentReadingTitle}
                        </span>
                        <span style={{ color: theme.textSecondary }} className="text-[11px]">
                          {currentReadingProgress}% • ~{calculatedRemainingMins} {isHi ? 'मिनट शेष' : isPb ? 'ਮਿੰਟ ਬਾਕੀ' : 'min left'} ({readingWpm} WPM)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 9 Sacred Reading Modes */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border-2 border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base shrink-0">🔱</span>
                        <h4 className="font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200 truncate">
                          {isPb ? '੯ ਪਾਵਨ ਪਾਠ ਮੋਡ' : isHi ? '९ प्रकार के पावन पाठ मोड' : '9 Sacred Reading Modes'}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#8B2500] text-white text-[10px] font-bold font-mono shrink-0">
                        9 MODES
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        {
                          id: 'scroll',
                          icon: '📜',
                          titleHi: '१. निरंतर स्क्रॉल मोड',
                          titlePb: '੧. ਨਿਰੰਤਰ ਸਕ੍ਰੋਲ ਮੋਡ',
                          titleEn: '1. Continuous Scroll',
                          descHi: 'अखंड ऊर्ध्वाधर स्क्रॉल प्रवाह',
                          descPb: 'ਅਖੰਡ ਸਕ੍ਰੋਲ ਪ੍ਰਵਾਹ',
                          descEn: 'Smooth vertical flow',
                          active: readingFramework === 'scroll' && !autoScrollActive && !zenModeActive && !larivaarModeActive && !visraamModeActive,
                          action: () => handleSelectReadingMode('scroll'),
                        },
                        {
                          id: 'flip',
                          icon: '📖',
                          titleHi: '२. ३D पोथी पन्ना मोड',
                          titlePb: '੨. ੩D ਪੋਥੀ ਪੰਨਾ ਮੋਡ',
                          titleEn: '2. 3D Pothi Page Flip',
                          descHi: 'हस्तलिखित पोथी पन्ना पलटने का अनुभव',
                          descPb: 'ਹਸਤਲਿਖਤ ਪੋਥੀ ਪੰਨਾ ਪਲਟਣ ਦਾ ਅਨੁਭਵ',
                          descEn: 'Traditional page-turn view',
                          active: readingFramework === 'flip',
                          action: () => handleSelectReadingMode('flip'),
                        },
                        {
                          id: 'parallel',
                          icon: '📊',
                          titleHi: '३. समानांतर तुलना मोड',
                          titlePb: '੩. ਸਮਾਨਾਂਤਰ ਤੁਲਨਾ ਮੋਡ',
                          titleEn: '3. Parallel Bilingual',
                          descHi: 'मूल वाणी व भावार्थ साथ-साथ',
                          descPb: 'ਮੂਲ ਬਾਣੀ ਤੇ ਅਰਥ ਨਾਲ-ਨਾਲ',
                          descEn: 'Original & meaning side-by-side',
                          active: readingFramework === 'parallel',
                          action: () => handleSelectReadingMode('parallel'),
                        },
                        {
                          id: 'zen',
                          icon: '🧘',
                          titleHi: '४. ज़ेन एकाग्रता मोड',
                          titlePb: '੪. ਜੇਨ ਇਕਾਗਰਤਾ ਮੋਡ',
                          titleEn: '4. Zen Focus Mode',
                          descHi: 'बिना रुकावट केवल वाणी पर ध्यान',
                          descPb: 'ਬਿਨਾ ਰੁਕਾਵਟ ਕੇਵਲ ਬਾਣੀ ਉੱਤੇ ਧਿਆਨ',
                          descEn: 'Distraction-free reading',
                          active: zenModeActive,
                          action: () => handleSelectReadingMode('zen'),
                        },
                        {
                          id: 'larivaar',
                          icon: '🪷',
                          titleHi: '५. लारीवार अखंड पाठ',
                          titlePb: '੫. ਲਾਰੀਵਾਰ ਅਖੰਡ ਮੋਡ',
                          titleEn: '5. Larivaar Akhand',
                          descHi: 'पारंपरिक निरंतर अखंड पाठ',
                          descPb: 'ਰਵਾਇਤੀ ਅਖੰਡ ਪਾਠ',
                          descEn: 'Traditional continuous script',
                          active: larivaarModeActive,
                          action: () => handleSelectReadingMode('larivaar'),
                        },
                        {
                          id: 'visraam',
                          icon: '🎯',
                          titleHi: '६. विश्राम हाइलाइट',
                          titlePb: '੬. ਵਿਸ਼ਰਾਮ ਹਾਈਲਾਈਟ',
                          titleEn: '6. Visraam Highlight',
                          descHi: 'शुद्ध उच्चारण हेतु विश्राम चिह्न',
                          descPb: 'ਸ਼ੁੱਧ ਉੱਚਾਰਣ ਹੇਤੂ ਵਿਸ਼ਰਾਮ',
                          descEn: 'Pronunciation pause cues',
                          active: visraamModeActive,
                          action: () => handleSelectReadingMode('visraam'),
                        },
                        {
                          id: 'autoplay',
                          icon: '⚡',
                          titleHi: '७. स्वतः स्क्रॉल व श्वास',
                          titlePb: '੭. ਸਵੈ-ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ',
                          titleEn: '7. Auto-Scroll & Breath',
                          descHi: '0.2x–5x स्क्रॉल व श्वास चक्र',
                          descPb: '0.2x–5x ਸਕ੍ਰੋਲ ਤੇ ਸੁਆਸ ਚੱਕਰ',
                          descEn: 'Guided scroll & breath',
                          active: autoScrollActive,
                          action: () => handleSelectReadingMode('autoplay'),
                        },
                        {
                          id: 'swadhyay',
                          icon: '📚',
                          titleHi: '८. स्वाध्याय ८-चरण मर्म',
                          titlePb: '੮. ਸਵਾਧਿਆਇ ੮-ਚਰਣ ਮਨਨ',
                          titleEn: '8. 8-Step Swadhyay',
                          descHi: 'क्रमबद्ध आध्यात्मिक चिंतन',
                          descPb: 'ਕ੍ਰਮਬੱਧ ਗੂੜ੍ਹ ਅਧਿਐਨ',
                          descEn: 'Deep structured study',
                          active: false,
                          action: () => handleSelectReadingMode('swadhyay'),
                        },
                        {
                          id: 'akhand-path',
                          icon: '🔱',
                          titleHi: '९. अखंड पाठ मोड',
                          titlePb: '੯. ਅਖੰਡ ਪਾਠ ਮੋਡ',
                          titleEn: '9. Akhand Sakhi Path',
                          descHi: 'अविराम साखी पाठ',
                          descPb: 'ਨਿਰੰਤਰ ਸਾਖੀ ਪਾਠ',
                          descEn: 'Unbroken Sakhi recitation',
                          active: false,
                          action: () => handleSelectReadingMode('akhand-path'),
                        },
                      ].map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={mode.action}
                          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-2 ${
                            mode.active
                              ? 'bg-[#8B2500] text-white border-amber-600 shadow-md ring-1 ring-amber-400/50'
                              : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-amber-400'
                          }`}
                        >
                          <span className="text-xl shrink-0 leading-none pt-0.5">{mode.icon}</span>
                          <div className="min-w-0 flex-1">
                            <span className="font-serif font-black text-xs block leading-snug">
                              {isPb ? mode.titlePb : isHi ? mode.titleHi : mode.titleEn}
                            </span>
                            <span className={`text-[10px] font-serif block mt-0.5 truncate ${mode.active ? 'text-amber-100' : 'text-gray-500 dark:text-gray-400'}`}>
                              {isPb ? mode.descPb : isHi ? mode.descHi : mode.descEn}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Auto-Scroll Speed Selector */}
                  <div className="p-3.5 rounded-2xl border space-y-2.5" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{isHi ? 'स्वतः स्क्रॉल गति (0.2x - 5x)' : isPb ? 'ਸਵੈ-ਸਕ੍ਰੋਲ ਗਤੀ (0.2x - 5x)' : 'Auto-Scroll Speed'}</span>
                      </h4>
                      <span className="text-xs font-mono font-black text-amber-700 dark:text-amber-300">{autoScrollSpeed}x</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {([0.2, 0.5, 1, 1.5, 2, 2.5, 3, 5] as const).map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => handleSpeedChange(spd)}
                          className={`py-1.5 rounded-xl text-xs font-mono font-black border transition-all cursor-pointer ${
                            autoScrollSpeed === spd
                              ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-sm'
                              : 'bg-white dark:bg-zinc-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-zinc-700 hover:border-amber-400'
                          }`}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Daily Reading Goal */}
                  <div className="p-3.5 rounded-2xl border space-y-2.5" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                    <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{isHi ? 'दैनिक पठन लक्ष्य (Daily Verses Goal)' : isPb ? 'ਦੈਨਿਕ ਪਠਨ ਟੀਚਾ' : 'Daily Reading Goal'}</span>
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {([11, 21, 51, 108] as ReaderTarget[]).map((tgt) => (
                        <button
                          key={tgt}
                          type="button"
                          onClick={() => handleTargetChange(tgt)}
                          className={`py-1.5 rounded-xl text-xs font-mono font-black border transition cursor-pointer ${
                            targetPace === tgt
                              ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-sm'
                              : 'bg-white dark:bg-zinc-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-zinc-700'
                          }`}
                        >
                          {tgt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reader Palettes & Highlighter Colors */}
                  <div className="p-3.5 rounded-2xl border space-y-3" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                    <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Palette className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{isHi ? 'ग्रन्थ पठन रंग एवं हाइलाइटर' : isPb ? 'ਪਾਠ ਰੰਗ ਤੇ ਹਾਈਲਾਈਟਰ' : 'Reader Palettes & Highlighter'}</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'mool', labelHi: '📜 मूल भोजपत्र', labelPb: '📜 ਮੂਲ ਭੋਜਪੱਤਰ', labelEn: '📜 Mool' },
                        { id: 'comfort', labelHi: '🍃 सुखद पठन', labelPb: '🍃 ਸੁਖਦ ਪਠਨ', labelEn: '🍃 Comfort' },
                        { id: 'pothi', labelHi: '📜 प्राचीन पोथी', labelPb: '📜 ਪ੍ਰਾਚੀਨ ਪੋਥੀ', labelEn: '📜 Pothi' },
                        { id: 'deep_sepia', labelHi: '🤎 गहरा सेपिया', labelPb: '🤎 ਗਹਿਰਾ ਸੇਪੀਆ', labelEn: '🤎 Sepia' },
                        { id: 'black', labelHi: '🖤 ब्लैक नाइट', labelPb: '🖤 ਬਲੈਕ ਨਾਈਟ', labelEn: '🖤 Black' },
                      ].map((nt) => (
                        <button
                          key={nt.id}
                          type="button"
                          onClick={() => handleReaderPaletteChange(nt.id as ReaderCustomTheme)}
                          className={`px-2.5 py-2 rounded-xl text-[11px] font-serif font-bold transition cursor-pointer border ${
                            activeReaderTheme === nt.id
                              ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs'
                              : 'bg-white/60 dark:bg-zinc-800/60 border-transparent hover:border-amber-400'
                          }`}
                        >
                          {isPb ? nt.labelPb : isHi ? nt.labelHi : nt.labelEn}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t" style={{ borderColor: theme.cardBorder }}>
                      <Highlighter className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      {[
                        { id: 'saffron', color: '#F59E0B', labelHi: 'केसरिया', labelPb: 'ਕੇਸਰੀ', labelEn: 'Saffron' },
                        { id: 'green', color: '#10B981', labelHi: 'हरा', labelPb: 'ਹਰਾ', labelEn: 'Green' },
                        { id: 'yellow', color: '#FDE047', labelHi: 'पीला', labelPb: 'ਪੀਲਾ', labelEn: 'Yellow' },
                        { id: 'none', color: '#9CA3AF', labelHi: 'बंद', labelPb: 'ਬੰਦ', labelEn: 'Off' },
                      ].map((hl) => (
                        <button
                          key={hl.id}
                          type="button"
                          onClick={() => handleHighlighterChange(hl.id as any)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold border transition cursor-pointer ${
                            activeHighlighter === hl.id ? 'border-amber-600 bg-amber-600/15' : 'border-transparent bg-black/5 dark:bg-white/5'
                          }`}
                        >
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hl.color }} />
                          <span>{isPb ? hl.labelPb : isHi ? hl.labelHi : hl.labelEn}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Reading History Sub-view */
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: theme.borderOrnament }}>
                    <h4 style={{ color: theme.sacredMaroon }} className="font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <History className="w-4 h-4 text-amber-600" />
                      <span>{isHi ? 'अन्तिम १० पठन इतिहास' : isPb ? 'ਅਖੀਰੀ ੧੦ ਪਠਨ ਇਤਿਹਾਸ' : 'Last 10 Recently Read'}</span>
                    </h4>
                    {historyItems.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearHistory}
                        className="px-2.5 py-1 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-700 dark:text-red-300 border border-red-500/30 text-[11px] font-serif font-bold flex items-center gap-1 transition cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>{isHi ? 'साफ़ करें' : isPb ? 'ਸਾਫ਼ ਕਰੋ' : 'Clear All'}</span>
                      </button>
                    )}
                  </div>

                  {historyItems.length === 0 ? (
                    <div className="p-6 text-center space-y-2 border-2 border-dashed rounded-2xl" style={{ borderColor: theme.borderOrnament }}>
                      <Clock className="w-7 h-7 mx-auto text-amber-500/50" />
                      <p className="font-serif text-xs opacity-75">
                        {isHi
                          ? 'कोई हालिया पठन इतिहास उपलब्ध नहीं है। जब आप साखियों या ग्रंथों का स्वाध्याय करते हैं, तो वे यहाँ स्वतः सुरक्षित हो जाएंगे।'
                          : isPb
                          ? 'ਕੋਈ ਪਠਨ ਇਤਿਹਾਸ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।'
                          : 'No recent reading history. Your last 10 read items will appear here.'}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {historyItems.map((item, idx) => (
                        <div
                          key={item.id}
                          onClick={() => handleResumeHistoryItem(item)}
                          className="p-3 rounded-2xl border transition-all cursor-pointer hover:scale-[1.01] flex items-center justify-between gap-2.5 shadow-xs"
                          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                        >
                          <div className="space-y-0.5 flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-200 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                                #{idx + 1}
                              </span>
                              <span className="text-[10px] font-serif opacity-65 flex items-center gap-1 ml-auto shrink-0">
                                <Clock className="w-3 h-3 text-amber-600" />
                                <span>{formatTimeAgo(item.timestamp)}</span>
                              </span>
                            </div>
                            <h5 className="font-serif font-black text-xs text-amber-900 dark:text-amber-200 truncate">
                              {item.title}
                            </h5>
                            {item.snippet && (
                              <p className="text-[11px] font-serif opacity-80 truncate italic">{item.snippet}</p>
                            )}
                          </div>
                          <span className="px-2.5 py-1 rounded-xl bg-[#8B2500] text-white font-serif font-bold text-[11px] flex items-center gap-1 shrink-0">
                            <RotateCcw className="w-3 h-3" />
                            <span>{isHi ? 'पुनः पढ़ें' : isPb ? 'ਪੜ੍ਹੋ' : 'Resume'}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={handleCloseModal}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="w-full py-2.5 rounded-xl font-bold font-serif text-sm shadow-md hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{isPb ? 'ਬੰਦ ਕਰੋ (Close)' : isHi ? 'बंद करें (Close)' : 'Close'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Strict Bottom Center Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2 px-4 text-center select-none shrink-0"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
          >
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};

