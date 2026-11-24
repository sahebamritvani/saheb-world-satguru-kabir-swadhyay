import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, 
  BookOpen, 
  HelpCircle, 
  Scroll, 
  Library, 
  Bookmark, 
  Music, 
  Settings, 
  Sliders,
  Languages, 
  Volume2, 
  VolumeX,
  Sparkles,
  Mic,
  CalendarDays,
  Target,
  Music2,
  Compass,
  Menu,
  X,
  ArrowLeft,
  Activity,
  Search,
  Timer,
  MessageSquare,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  Feather,
  RefreshCw,
  RotateCcw,
  Smartphone,
  Download,
  ExternalLink,
  CheckCircle2,
  Check,
  Atom,
  Share2, 
  Info,
  Layers,
  Trophy,
  Image as ImageIcon,
  History,
  ShieldCheck,
  Lock,
  TrendingUp,
  SpellCheck,
  QrCode,
  Copy,
  MapPin,
  Wifi,
  WifiOff,
  Crown,
  Play,
  Flame,
  BookMarked,
  Flower2,
  Star,
  Maximize2,
  Minimize2,
  Database
} from 'lucide-react';
import { OPEN_ADMIN_INJECTOR_EVENT } from '../services/adminSlotInjectorStore';
import { isAdminAuthenticated } from '../services/adminAuth';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { Language, AppView, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { AboutDisclaimerModal, AboutDisclaimerSection } from './AboutDisclaimerModal';
import { KarNainonDeedarModal } from './KarNainonDeedarModal';
import { SantoShabdaiShabdModal } from './SantoShabdaiShabdModal';
import { AdvancedReadingSuiteModal } from './AdvancedReadingSuiteModal';
import { LanguageDiagnostics } from './LanguageDiagnostics';
import { AdminLoginModal } from './AdminLoginModal';

import { sacredHaptics } from '../services/haptics';
import { 
  useAppTheme, 
  StyledAppContainer, 
  SacredHeaderContainer, 
  SacredFooterContainer 
} from '../theme/ThemeContext';
import {
  getAppUrlSync,
  getAppUrlAsync,
  getInstallHandoffUrl,
  getAndroidChromeIntentUrl,
  shareAppUniversally,
  getSharePayloadText,
  getWhatsAppShareUrl,
} from '../utils/url';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';
import { PWAInstallButton } from './PWAInstallButton';
import { GitHubApkCard } from './GitHubApkCard';
import { isCapacitorAndroid, registerAndroidBackHandler } from '../services/capacitorBridge';

interface LayoutProps {
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenSettings: () => void;
  onOpenBlessing: () => void;
  isDhunPlaying: boolean;
  onToggleDhun: () => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  currentView,
  onSelectView,
  language,
  onSelectLanguage,
  onOpenSettings,
  onOpenBlessing,
  isDhunPlaying,
  onToggleDhun,
  children,
}) => {
  const { theme, isDarkMode, isSahajMode, setIsSahajMode, globalWallpaper } = useAppTheme();
  const t = translations[language] || translations.hi;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const brandTapTimestampsRef = useRef<number[]>([]);

  const handleHeaderBrandTap = () => {
    const now = Date.now();
    const recentTaps = brandTapTimestampsRef.current.filter((ts) => now - ts <= 3000);
    recentTaps.push(now);
    brandTapTimestampsRef.current = recentTaps;

    if (recentTaps.length >= 5) {
      brandTapTimestampsRef.current = [];
      sacredHaptics.mediumTap();
      setShowAdminLoginModal(true);
      return;
    }

    onSelectView('daily');
  };

  useEffect(() => {
    const syncAdmin = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', syncAdmin);
    window.addEventListener('storage', syncAdmin);
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', syncAdmin);
      window.removeEventListener('storage', syncAdmin);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    const handleCustomFullscreen = (e: any) => {
      if (typeof e.detail?.isFullscreen === 'boolean') {
        setIsFullscreen(e.detail.isFullscreen);
      } else {
        setIsFullscreen(prev => !prev);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    window.addEventListener('sahebworld:fullscreen-change', handleCustomFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      window.removeEventListener('sahebworld:fullscreen-change', handleCustomFullscreen);
    };
  }, []);

  const toggleAppFullscreen = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(true);
      window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: true } }));
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      setIsFullscreen(false);
      window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
      document.exitFullscreen().catch(() => {});
    }
  };

  const exitAppFullscreen = () => {
    setIsFullscreen(false);
    window.dispatchEvent(new CustomEvent('sahebworld:fullscreen-change', { detail: { isFullscreen: false } }));
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const [showScrollControls, setShowScrollControls] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // 🎙️ Voice-Controlled Navigation States
  const [isListeningVoice, setIsListeningVoice] = useState<boolean>(false);
  const [voiceToast, setVoiceToast] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      const rec = new SpeechRecognitionAPI();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US';

      rec.onstart = () => {
        setIsListeningVoice(true);
        sacredHaptics.lightTap();
      };

      rec.onend = () => {
        setIsListeningVoice(false);
      };

      rec.onerror = (e: any) => {
        console.warn('Speech recognition notice:', e?.error || e);
        setIsListeningVoice(false);
      };

      rec.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript.toLowerCase().trim();
        console.log('Voice Command received:', resultText);
        
        let matchedView: AppView | null = null;
        let speechConfirmText = '';

        // English commands
        if (resultText.includes('kabir sagar') || resultText.includes('granth') || resultText.includes('lib') || resultText.includes('sagar')) {
          matchedView = 'grantha';
          speechConfirmText = language === 'pb' ? 'ਗ੍ਰੰਥਾਵਲੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...' : language === 'hi' ? 'कबीर सागर ग्रन्थावली खोल रहा हूँ...' : 'Opening Kabir Sagar...';
        } else if (resultText.includes('daily sakhi') || resultText.includes('daily') || resultText.includes('sakhi')) {
          matchedView = 'daily';
          speechConfirmText = language === 'pb' ? 'ਦੈਨਿਕ ਸਾਖੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...' : language === 'hi' ? 'दैनिक पावन साखी खोल रहा हूँ...' : 'Opening Daily Sakhi...';
        } else if (resultText.includes('swadhyay') || resultText.includes('study') || resultText.includes('reader')) {
          matchedView = 'swadhyay';
          speechConfirmText = language === 'pb' ? 'ਸਵਾਧਿਆਏ ਪਾਠ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...' : language === 'hi' ? 'स्वाध्याय खोल रहा हूँ...' : 'Opening Swadhyay...';
        } else if (resultText.includes('nitnem') || resultText.includes('gutka') || resultText.includes('pothi')) {
          matchedView = 'nitnem-gutka';
          speechConfirmText = language === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ...' : language === 'hi' ? 'नितनेम गुटका साहेब खोल रहा हूँ...' : 'Opening Nitnem Gutka...';
        } else if (resultText.includes('diary') || resultText.includes('journal')) {
          matchedView = 'diary';
          speechConfirmText = language === 'pb' ? 'ਆਤਮਿਕ ਡਾਇਰੀ...' : language === 'hi' ? 'आत्मिक डायरी खोल रहा हूँ...' : 'Opening Spiritual Diary...';
        } else if (resultText.includes('audio') || resultText.includes('music') || resultText.includes('shabad') || resultText.includes('dhun') || resultText.includes('bhajan')) {
          matchedView = 'audio-library';
          speechConfirmText = language === 'pb' ? 'ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ...' : language === 'hi' ? 'ऑडियो लाइब्रेरी खोल रहा हूँ...' : 'Opening Audio Library...';
        }

        // Hindi commands
        else if (resultText.includes('कबीर सागर') || resultText.includes('ग्रंथ') || resultText.includes('ग्रन्थ') || resultText.includes('सागर')) {
          matchedView = 'grantha';
          speechConfirmText = 'कबीर सागर ग्रन्थावली खोल रहा हूँ...';
        } else if (resultText.includes('दैनिक साखी') || resultText.includes('साखी') || resultText.includes('डेली साखी')) {
          matchedView = 'daily';
          speechConfirmText = 'दैनिक पावन साखी खोल रहा हूँ...';
        } else if (resultText.includes('स्वाध्याय')) {
          matchedView = 'swadhyay';
          speechConfirmText = 'स्वाध्याय खोल रहा हूँ...';
        } else if (resultText.includes('नितनेम') || resultText.includes('गुटका') || resultText.includes('गुटका साहेब') || resultText.includes('गुटका साहिब')) {
          matchedView = 'nitnem-gutka';
          speechConfirmText = 'नितनेम गुटका साहेब खोल रहा हूँ...';
        } else if (resultText.includes('डायरी')) {
          matchedView = 'diary';
          speechConfirmText = 'आत्मिक डायरी खोल रहा हूँ...';
        } else if (resultText.includes('ऑडियो') || resultText.includes('शब्द') || resultText.includes('भजन') || resultText.includes('धुन')) {
          matchedView = 'audio-library';
          speechConfirmText = 'ऑडियो लाइब्रेरी खोल रहा हूँ...';
        }

        // Punjabi commands
        else if (resultText.includes('ਕਬੀਰ ਸਾਗਰ') || resultText.includes('ਗ੍ਰੰਥ') || resultText.includes('ਗਰੰਥ') || resultText.includes('ਸਾਗਰ')) {
          matchedView = 'grantha';
          speechConfirmText = 'ਗ੍ਰੰਥਾਵਲੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        } else if (resultText.includes('ਦੈਨਿਕ ਸਾਖੀ') || resultText.includes('ਸਾਖੀ') || resultText.includes('ਡੇਲੀ ਸਾਖੀ')) {
          matchedView = 'daily';
          speechConfirmText = 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        } else if (resultText.includes('ਸਵਾਧਿਆਏ') || resultText.includes('ਸਵਾਧਿਆਇ')) {
          matchedView = 'swadhyay';
          speechConfirmText = 'ਸਵਾਧਿਆਏ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        } else if (resultText.includes('ਨਿਤਨੇਮ') || resultText.includes('ਗੁਟਕਾ') || resultText.includes('ਗੁਟਕਾ ਸਾਹੇਬ') || resultText.includes('ਗੁਟਕਾ ਸਾਹਿਬ')) {
          matchedView = 'nitnem-gutka';
          speechConfirmText = 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        } else if (resultText.includes('ਡਾਇਰੀ')) {
          matchedView = 'diary';
          speechConfirmText = 'ਡਾਇਰੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        } else if (resultText.includes('ਆਡੀਓ') || resultText.includes('ਸ਼ਬਦ') || resultText.includes('ਭਜਨ') || resultText.includes('ਧੁਨ')) {
          matchedView = 'audio-library';
          speechConfirmText = 'ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ ਖੋਲ੍ਹ ਰਿਹਾ ਹਾਂ...';
        }

        if (matchedView) {
          sacredHaptics.successVibration();
          onSelectView(matchedView);
          showVoiceToast(`🎙️ "${resultText}" ➜ ${speechConfirmText}`);
        } else {
          sacredHaptics.quizIncorrect();
          showVoiceToast(
            language === 'pb'
              ? `🎙️ "${resultText}" (ਕਮਾਂਡ ਸਮਝ ਨਹੀਂ ਆਈ)`
              : language === 'hi'
              ? `🎙️ "${resultText}" (कमांड समझ नहीं आई)`
              : `🎙️ "${resultText}" (Unknown command)`
          );
        }
      };

      recognitionRef.current = rec;
    }
  }, [language]);

  const toggleVoiceListening = () => {
    if (!recognitionRef.current) {
      showVoiceToast(
        language === 'pb'
          ? "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਆਵਾਜ਼ ਨਿਯੰਤਰਣ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ ਹੈ।"
          : language === 'hi'
          ? "आपका ब्राउज़र आवाज़ नियंत्रण का समर्थन नहीं करता है।"
          : "Voice recognition is not supported in this browser."
      );
      return;
    }

    if (isListeningVoice) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch {
        recognitionRef.current.stop();
      }
    }
  };

  const showVoiceToast = (msg: string) => {
    setVoiceToast(msg);
    setTimeout(() => setVoiceToast(null), 3500);
  };

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [aboutModalSection, setAboutModalSection] = useState<AboutDisclaimerSection | null>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (path === '/privacy-policy' || hash.includes('privacy') || params.get('privacy') === '1') {
        return 'privacy';
      }
      if (path === '/guide' || hash.includes('guide') || params.get('guide') === '1') {
        return 'guide';
      }
    }
    return null;
  });
  const [showKarNainonDeedarModal, setShowKarNainonDeedarModal] = useState(false);
  const [showSantoShabdaiShabdModal, setShowSantoShabdaiShabdModal] = useState(false);
  const [showReadingSuiteModal, setShowReadingSuiteModal] = useState(false);
  const [showLanguageDiagnostics, setShowLanguageDiagnostics] = useState(false);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [isAppCopied, setIsAppCopied] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [ratingGiven, setRatingGiven] = useState(false);
  const [installFeedbackToast, setInstallFeedbackToast] = useState<string | null>(null);
  const [dismissedBottomInstallBar, setDismissedBottomInstallBar] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('sahebworld_dismiss_install_bar') === '1';
    } catch {
      return false;
    }
  });
  const isOnline = useOnlineStatus();
  const {
    isInstallable,
    isInstalled: pwaStandalone,
    isIOS: isIOSDevice,
    isAndroid: isAndroidDevice,
    isInIframe: pwaInIframe,
    isOfflineReady,
    isManifestVerified,
    hasInstallIntent,
    install: triggerPWAInstall,
  } = usePWAInstall();

  useEffect(() => {
    const handleOpenSuite = () => setShowReadingSuiteModal(true);
    window.addEventListener('sahebworld_open_advanced_reading_suite', handleOpenSuite);
    return () => window.removeEventListener('sahebworld_open_advanced_reading_suite', handleOpenSuite);
  }, []);

  useEffect(() => {
    const handleOpenAboutSection = (e: Event) => {
      const detail = (e as CustomEvent<{ section?: AboutDisclaimerSection }>).detail;
      if (detail?.section) {
        setAboutModalSection(detail.section);
      }
    };
    const handleOpenKarNainon = () => setShowKarNainonDeedarModal(true);
    const handleOpenSantoShabdai = () => setShowSantoShabdaiShabdModal(true);

    window.addEventListener('sahebworld_open_about_modal', handleOpenAboutSection);
    window.addEventListener('sahebworld_open_kar_nainon_deedar', handleOpenKarNainon);
    window.addEventListener('sahebworld_open_santo_shabdai_shabd', handleOpenSantoShabdai);
    return () => {
      window.removeEventListener('sahebworld_open_about_modal', handleOpenAboutSection);
      window.removeEventListener('sahebworld_open_kar_nainon_deedar', handleOpenKarNainon);
      window.removeEventListener('sahebworld_open_santo_shabdai_shabd', handleOpenSantoShabdai);
    };
  }, []);

  const [shareFallbackBanner, setShareFallbackBanner] = useState<{ whatsappUrl: string } | null>(null);

  const handleShareApp = async () => {
    sacredHaptics.lightTap();
    try {
      const res = await shareAppUniversally(language);
      if (res.method === 'clipboard') {
        setIsAppCopied(true);
        setShareFallbackBanner({ whatsappUrl: res.whatsappUrl });
        setTimeout(() => setIsAppCopied(false), 3000);
        setTimeout(() => setShareFallbackBanner(null), 8000);
      }
    } catch (err) {
      console.warn('Share app notice:', err);
      const fallbackWa = getWhatsAppShareUrl(language);
      setIsAppCopied(true);
      setShareFallbackBanner({ whatsappUrl: fallbackWa });
      setTimeout(() => setIsAppCopied(false), 3000);
      setTimeout(() => setShareFallbackBanner(null), 8000);
    }
  };

  // Bar 2 Moveable Drag & Scroll State
  const bar2ScrollRef = useRef<HTMLDivElement>(null);
  const [isDraggingBar2, setIsDraggingBar2] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const [bar2MovedDistance, setBar2MovedDistance] = useState(0);
  const [bar2CanScrollLeft, setBar2CanScrollLeft] = useState(false);
  const [bar2CanScrollRight, setBar2CanScrollRight] = useState(true);

  // Check scroll bounds of Bar 2
  const updateBar2ScrollBounds = () => {
    if (!bar2ScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = bar2ScrollRef.current;
    setBar2CanScrollLeft(scrollLeft > 6);
    setBar2CanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  };

  useEffect(() => {
    updateBar2ScrollBounds();
    window.addEventListener('resize', updateBar2ScrollBounds);
    return () => window.removeEventListener('resize', updateBar2ScrollBounds);
  }, []);

  const handleBar2MouseDown = (e: React.MouseEvent) => {
    if (!bar2ScrollRef.current) return;
    setIsDraggingBar2(true);
    setBar2MovedDistance(0);
    setDragStartX(e.pageX - bar2ScrollRef.current.offsetLeft);
    setDragScrollLeft(bar2ScrollRef.current.scrollLeft);
  };

  const handleBar2TouchStart = (e: React.TouchEvent) => {
    if (!bar2ScrollRef.current || e.touches.length === 0) return;
    setIsDraggingBar2(true);
    setBar2MovedDistance(0);
    setDragStartX(e.touches[0].pageX - bar2ScrollRef.current.offsetLeft);
    setDragScrollLeft(bar2ScrollRef.current.scrollLeft);
  };

  const handleBar2TouchMove = (e: React.TouchEvent) => {
    if (!isDraggingBar2 || !bar2ScrollRef.current || e.touches.length === 0) return;
    const x = e.touches[0].pageX - bar2ScrollRef.current.offsetLeft;
    const walk = (x - dragStartX) * 1.5;
    setBar2MovedDistance(Math.abs(walk));
    bar2ScrollRef.current.scrollLeft = dragScrollLeft - walk;
    updateBar2ScrollBounds();
  };

  const handleBar2TouchEnd = () => {
    setIsDraggingBar2(false);
    updateBar2ScrollBounds();
  };

  const handleBar2Wheel = (e: React.WheelEvent) => {
    if (!bar2ScrollRef.current) return;
    if (e.deltaY !== 0 && e.deltaX === 0) {
      bar2ScrollRef.current.scrollLeft += e.deltaY;
      updateBar2ScrollBounds();
    }
  };

  // Global mousemove and mouseup listeners for uninterrupted smooth dragging
  useEffect(() => {
    if (!isDraggingBar2) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!bar2ScrollRef.current) return;
      const x = e.pageX - bar2ScrollRef.current.offsetLeft;
      const walk = (x - dragStartX) * 1.5;
      setBar2MovedDistance(Math.abs(walk));
      bar2ScrollRef.current.scrollLeft = dragScrollLeft - walk;
      updateBar2ScrollBounds();
    };

    const handleGlobalMouseUp = () => {
      setIsDraggingBar2(false);
      updateBar2ScrollBounds();
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDraggingBar2, dragStartX, dragScrollLeft]);

  const scrollBar2 = (direction: 'left' | 'right' | 'start' | 'center' | 'end') => {
    if (!bar2ScrollRef.current) return;
    const el = bar2ScrollRef.current;
    if (direction === 'start') {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === 'center') {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: maxScroll / 2, behavior: 'smooth' });
    } else if (direction === 'end') {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      const amount = direction === 'left' ? -260 : 260;
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }
    setTimeout(updateBar2ScrollBounds, 320);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
    };

    const handleOpenInstallModal = () => {
      setShowInstallModal(true);
    };

    const handleShareAppEvent = () => {
      handleShareApp();
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('sahebworld:open-install-modal', handleOpenInstallModal);
    window.addEventListener('sahebworld:share-app', handleShareAppEvent);

    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      setIsAppInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('sahebworld:open-install-modal', handleOpenInstallModal);
      window.removeEventListener('sahebworld:share-app', handleShareAppEvent);
    };
  }, [language]);

  // Android Capacitor hardware back button support
  useEffect(() => {
    return registerAndroidBackHandler(() => {
      if (showInstallModal) {
        setShowInstallModal(false);
        return true;
      }
      if (aboutModalSection) {
        setAboutModalSection(null);
        return true;
      }
      if (showKarNainonDeedarModal) {
        setShowKarNainonDeedarModal(false);
        return true;
      }
      if (showSantoShabdaiShabdModal) {
        setShowSantoShabdaiShabdModal(false);
        return true;
      }
      if (showReadingSuiteModal) {
        setShowReadingSuiteModal(false);
        return true;
      }
      if (showLanguageDiagnostics) {
        setShowLanguageDiagnostics(false);
        return true;
      }
      if (showRateModal) {
        setShowRateModal(false);
        return true;
      }
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
        return true;
      }
      if (currentView !== 'daily') {
        onSelectView('daily');
        return true;
      }
      return false;
    });
  }, [
    showInstallModal,
    aboutModalSection,
    showKarNainonDeedarModal,
    showSantoShabdaiShabdModal,
    showReadingSuiteModal,
    showLanguageDiagnostics,
    showRateModal,
    isSidebarOpen,
    currentView,
    onSelectView,
  ]);

  const isRunningInIframe = pwaInIframe;

  const handleInstallClick = async () => {
    sacredHaptics.lightTap();
    if (isInstallable) {
      const accepted = await triggerPWAInstall();
      if (accepted) {
        setIsAppInstalled(true);
        setInstallFeedbackToast(
          language === 'pb' ? '✓ ਐਪ ਤੁਹਾਡੇ ਫੋਨ ਵਿੱਚ ਇੰਸਟਾਲ ਹੋ ਰਹੀ ਹੈ...' : language === 'en' ? '✓ Installing app...' : '✓ ऐप आपके फोन में इनस्टॉल हो रही है...'
        );
        setTimeout(() => {
          setShowInstallModal(false);
          setInstallFeedbackToast(null);
        }, 2500);
        return;
      }
    }
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult?.outcome === 'accepted') {
          setIsAppInstalled(true);
          setDeferredPrompt(null);
          setInstallFeedbackToast(
            language === 'pb' ? '✓ ਐਪ ਤੁਹਾਡੇ ਫੋਨ ਵਿੱਚ ਇੰਸਟਾਲ ਹੋ ਰਹੀ ਹੈ...' : language === 'en' ? '✓ Installing app...' : '✓ ऐप आपके फोन में इनस्टॉल हो रही है...'
          );
          setTimeout(() => {
            setShowInstallModal(false);
            setInstallFeedbackToast(null);
          }, 2500);
          return;
        }
      } catch (e) {
        console.warn('Install prompt error:', e);
      }
    }
    setShowInstallModal(true);
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Detect scroll position to show scroll up / scroll down buttons (hide in dedicated readers like nitnem-gutka)
  useEffect(() => {
    const handleScroll = () => {
      if (currentView === 'nitnem-gutka' || currentView === 'grantha') {
        setShowScrollControls(false);
        return;
      }
      const rootEl = document.getElementById('root');
      const scrollY = (rootEl ? rootEl.scrollTop : 0) || window.scrollY || window.pageYOffset;
      const scrollHeight = (rootEl ? rootEl.scrollHeight : 0) || document.documentElement.scrollHeight;
      const clientHeight = (rootEl ? rootEl.clientHeight : 0) || document.documentElement.clientHeight;

      // Show scroll controls if page has scrollable content
      setShowScrollControls(scrollHeight > clientHeight + 150);
      setIsAtBottom(scrollY + clientHeight >= scrollHeight - 60);
    };

    const rootEl = document.getElementById('root');
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (rootEl) {
      rootEl.addEventListener('scroll', handleScroll, { passive: true });
    }
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rootEl) {
        rootEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentView]);

  const scrollToTop = () => {
    sacredHaptics.lightTap();
    const scrollOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };
    
    // Comprehensive cross-browser / cross-container scroll to top
    window.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    
    const rootEl = document.getElementById('root');
    if (rootEl) rootEl.scrollTo(scrollOptions);

    // Fallback if smooth is not supported or behaving weirdly
    setTimeout(() => {
      if (window.scrollY > 0) window.scrollTo(0, 0);
      if (rootEl && rootEl.scrollTop > 0) rootEl.scrollTop = 0;
    }, 500);
  };

  const scrollToBottom = () => {
    sacredHaptics.lightTap();
    const rootEl = document.getElementById('root');
    const scrollHeight = rootEl ? rootEl.scrollHeight : document.documentElement.scrollHeight;
    const scrollOptions: ScrollToOptions = { top: scrollHeight, behavior: 'smooth' };
    
    window.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    if (rootEl) rootEl.scrollTo(scrollOptions);
  };

  const scrollSegmentUp = () => {
    sacredHaptics.lightTap();
    const scrollAmount = -450;
    const scrollOptions: ScrollToOptions = { top: scrollAmount, behavior: 'smooth' };
    
    // Check which element is actually scrollable
    const rootEl = document.getElementById('root');
    if (rootEl && rootEl.scrollHeight > rootEl.clientHeight) {
      rootEl.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      document.documentElement.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollSegmentDown = () => {
    sacredHaptics.lightTap();
    const scrollAmount = 450;
    const scrollOptions: ScrollToOptions = { top: scrollAmount, behavior: 'smooth' };
    
    // Check which element is actually scrollable
    const rootEl = document.getElementById('root');
    if (rootEl && rootEl.scrollHeight > rootEl.clientHeight) {
      rootEl.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      document.documentElement.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSectionCollapse = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  interface SidebarSection {
    id: string;
    numberPrefix: string;
    title: {
      hi: string;
      pb: string;
      en: string;
    };
    icon: React.ComponentType<{ className?: string }>;
    items: Array<{
      view: AppView;
      label: {
        hi: string;
        pb: string;
        en: string;
      };
      icon: React.ComponentType<{ className?: string }>;
      badge?: {
        hi: string;
        pb: string;
        en: string;
      };
      isDhunSpecial?: boolean;
    }>;
  }

  const sidebarSections: SidebarSection[] = [
    // १. पावन ग्रन्थालय एवं नित्य पाठ
    {
      id: 'section-granths-nitnem',
      numberPrefix: '१.',
      title: {
        hi: 'पावन ग्रन्थालय एवं नित्य पाठ',
        pb: 'ਪਾਵਨ ਗ੍ਰੰਥਾਵਲੀ ਤੇ ਨਿਤਨੇਮ ਪਾਠ',
        en: 'Sacred Granths & Nitnem Prayers',
      },
      icon: BookOpen,
      items: [
        {
          view: 'mool-siddhant' as AppView,
          label: {
            hi: 'मूल सिद्धांत (एक सत्यनाम से सब सधै)',
            pb: 'ਮੂਲ ਸਿਧਾਂਤ (ਇੱਕ ਸਤਯਨਾਮ ਤੋਂ ਸਭ ਸਧੈ)',
            en: 'Core Principle (Master the One Satyanaam)',
          },
          icon: Sparkles,
          badge: { hi: 'अटल मूल', pb: 'ਅਟੱਲ ਮੂਲ', en: 'Core' },
        },
        {
          view: 'divine-darshan' as AppView,
          label: {
            hi: 'सतगुरु कबीर साहेब दिव्य पावन दर्शन',
            pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ',
            en: 'Satguru Kabir Saheb Divine Sacred Darshan',
          },
          icon: Sparkles,
          badge: { hi: 'पावन दर्शन', pb: 'ਪਾਵਨ ਦਰਸ਼ਨ', en: 'Darshan' },
        },
        {
          view: 'grantha',
          label: {
            hi: 'समग्र ग्रन्थालय (बीजक, कबीर सागर, साखी)',
            pb: 'ਸਮੁੱਚੀ ਗ੍ਰੰਥਾਵਲੀ (ਬੀਜਕ, ਕਬੀਰ ਸਾਗਰ, ਸਾਖੀ)',
            en: 'Sacred Granths (Bijak, Kabir Sagar)',
          },
          icon: Library,
          badge: { hi: 'सर्व ग्रन्थ', pb: 'ਸਾਰੇ ਗ੍ਰੰਥ', en: 'All' },
        },
        {
          view: 'aarti-sanctuary',
          label: {
            hi: 'अलौकिक संध्या आरती एवं प्रभात गान',
            pb: 'ਅਲੌਕਿਕ ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ',
            en: 'Evening Aarti & Morning Chants',
          },
          icon: Flame,
        },
        {
          view: 'akhand-path',
          label: {
            hi: 'अखंड साखी पाठ (अविराम श्रवण)',
            pb: 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ (ਨਿਰੰਤਰ ਸ਼੍ਰਵਣ)',
            en: 'Akhand Sakhi Path',
          },
          icon: BookOpen,
          badge: { hi: 'अखंड पाठ', pb: 'ਅਖੰਡ ਪਾਠ', en: 'Akhand' },
        },
        {
          view: 'satya-naam' as AppView,
          label: {
            hi: 'सत्यनाम एवं सारशब्द',
            pb: 'ਸਤਯਨਾਮ ਅਤੇ ਸਾਰਸ਼ਬਦ',
            en: 'Satya Naam & Saar Shabd',
          },
          icon: Atom,
          badge: { hi: 'परम मोक्ष', pb: 'ਪਰਮ ਮੋਕਸ਼', en: 'Moksha' },
        },
        {
          view: 'aatma-bhushan' as AppView,
          label: {
            hi: 'आत्मा के १६ भूषण',
            pb: 'ਆਤਮਾ ਦੇ ੧੬ ਭੂਸ਼ਣ',
            en: '16 Attributes of Soul',
          },
          icon: Sparkles,
          badge: { hi: 'आत्मा श्रृंगार', pb: 'ਆਤਮਾ ਸ਼ਿੰਗਾਰ', en: 'Virtues' },
        },
        {
          view: 'nitnem-gutka' as AppView,
          label: {
            hi: 'नितनेम गुटका साहेब (नित्य पाठ)',
            pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ (ਨਿਤ ਪਾਠ)',
            en: 'Nitnem Gutka Saheb (Daily Prayers)',
          },
          icon: BookOpen,
          badge: { hi: 'नितनेम', pb: 'ਨਿਤਨੇਮ', en: 'Nitnem' },
        },
        {
          view: 'sggs-kabir-bani' as AppView,
          label: {
            hi: 'श्री गुरु ग्रंथ साहिब एवं सतगुरु कबीर साहेब वाणी',
            pb: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬਾਣੀ',
            en: 'Sri Guru Granth Sahib & Satguru Kabir Saheb Bani',
          },
          icon: Sparkles,
          badge: { hi: 'SGGS वाणी', pb: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ', en: 'SGGS' },
        },
        {
          view: 'hukamnama' as AppView,
          label: {
            hi: 'पावन दैनिक हुकमनामा (12 AM स्वतः परिवर्तन)',
            pb: 'ਪਾਵਨ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ (ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ)',
            en: 'Daily Hukamnama (Guru Granth Sahib)',
          },
          icon: Scroll,
          badge: { hi: 'हुकमनामा', pb: 'ਹੁਕਮਨਾਮਾ', en: 'Hukamnama' },
        },
        {
          view: 'nature-wallpaper' as AppView,
          label: {
            hi: 'कुदरत वॉलपेपर जनरेटर',
            pb: 'ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਜਨਰੇਟਰ',
            en: 'Nature Wallpaper Engine',
          },
          icon: ImageIcon,
          badge: { hi: 'वॉलपेपर', pb: 'ਵਾਲਪੇਪਰ', en: 'HD' },
        },
        {
          view: 'vani-card-maker' as AppView,
          label: {
            hi: 'कबीर वाणी कार्ड मेकर',
            pb: 'ਕਬੀਰ ਬਾਣੀ ਕਾਰਡ ਮੇਕਰ',
            en: 'Kabir Vani Card Maker',
          },
          icon: Sparkles,
          badge: { hi: 'कार्ड स्टूडियो', pb: 'ਕਾਰਡ ਸਟੂਡੀਓ', en: 'Studio' },
        },
        {
          view: 'daily',
          label: {
            hi: 'दैनिक पावन साखी (आज का अमृत वचन)',
            pb: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ (ਅੱਜ ਦਾ ਅੰਮ੍ਰਿਤ ਬਚਨ)',
            en: 'Daily Pawan Sakhi',
          },
          icon: Sun,
        },
        {
          view: 'das-sutra' as AppView,
          label: {
            hi: 'सतगुरु कबीर साहेब के १० पावन सूत्र',
            pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ੧੦ ਪਾਵਨ ਸੂਤਰ',
            en: 'Satguru Kabir Saheb 10 Sacred Sutras',
          },
          icon: Scroll,
          badge: { hi: '१० सूत्र', pb: '੧੦ ਸੂਤਰ', en: '10 Sutras' },
        },
        {
          view: 'dainik-chintan',
          label: {
            hi: 'दैनिक चिंतन एवं मनन',
            pb: 'ਦੈਨਿਕ ਚਿੰਤਨ ਤੇ ਮਨਨ',
            en: 'Daily Contemplation',
          },
          icon: Compass,
        },
      ],
    },

    // २. साधना, सिमरन एवं पावन धुन
    {
      id: 'section-sadhana-simran-dhun',
      numberPrefix: '२.',
      title: {
        hi: 'साधना, सिमरन एवं पावन धुन',
        pb: 'ਸਾਧਨਾ, ਸਿਮਰਨ ਤੇ ਪਾਵਨ ਧੁਨ',
        en: 'Sadhana, Simran & Sacred Dhun',
      },
      icon: Volume2,
      items: [
        {
          view: 'dhun',
          label: {
            hi: 'सत्यनाम पावन धुन',
            pb: 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ',
            en: 'Satyanaam Sacred Dhun',
          },
          icon: Volume2,
          isDhunSpecial: true,
          badge: { hi: 'पावन धुन', pb: 'ਪਾਵਨ ਧੁਨ', en: 'Dhun' },
        },
        {
          view: 'mantra-tracker',
          label: {
            hi: 'नाम-सिमरन आवर्तन (जप माला काउंटर)',
            pb: 'ਨਾਮ-ਸਿਮਰਨ (ਮਾਲਾ ਜਾਪ ਕਾਊਂਟਰ)',
            en: 'Simran & Jaap Counter',
          },
          icon: RotateCcw,
        },
        {
          view: 'meditation-timer',
          label: {
            hi: 'सुमिरन टाइमर एवं आत्म-ध्यान',
            pb: 'ਸੁਮਿਰਨ ਟਾਈਮਰ ਤੇ ਆਤਮ-ਧਿਆਨ',
            en: 'Sumiran & Meditation Timer',
          },
          icon: Timer,
        },
        {
          view: 'spiritual-discipline',
          label: {
            hi: 'पंचामृत नेम एवं साधना ट्रैकर',
            pb: 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਸਾਧਨਾ ਟਰੈਕਰ',
            en: 'Panchamrit Vows Tracker',
          },
          icon: ShieldCheck,
        },
        {
          view: 'satvik-sankalp' as AppView,
          label: {
            hi: 'नशामुक्ति एवं सात्विक संकल्प ट्रैकर',
            pb: 'ਨਸ਼ਾਮੁਕਤੀ ਤੇ ਸਾਤਵਿਕ ਸੰਕਲਪ ਟਰੈਕਰ',
            en: 'De-addiction & Satvik Sankalp',
          },
          icon: ShieldCheck,
          badge: { hi: 'संकल्प', pb: 'ਸੰਕਲਪ', en: 'Vows' },
        },
        {
          view: 'growth-dashboard',
          label: {
            hi: 'आध्यात्मिक स्वाध्याय एवं साधना डैशबोर्ड',
            pb: 'ਸਾਧਨਾ ਪ੍ਰਗਤੀ ਡੈਸ਼ਬੋਰਡ',
            en: 'Spiritual Growth Dashboard',
          },
          icon: TrendingUp,
          badge: { hi: 'प्रगति', pb: 'ਪ੍ਰਗਤੀ', en: 'Growth' },
        },
        {
          view: 'sadhana-goals',
          label: {
            hi: 'दैनिक साधना लक्ष्य एवं संकल्प',
            pb: 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟੀਚੇ',
            en: 'Daily Sadhana Goals Tracker',
          },
          icon: Target,
        },
        {
          view: 'divine-guidance',
          label: {
            hi: 'सतगुरु दिव्य आदेश एवं मार्गदर्शन',
            pb: 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਤੇ ਮਾਰਗਦਰਸ਼ਨ',
            en: 'Divine Guidance Oracle',
          },
          icon: Compass,
        },
        {
          view: 'community-board',
          label: {
            hi: 'साधना मंच (सत्संग संवाद)',
            pb: 'ਸਾਧਨਾ ਮੰਚ (ਸਤਿਸੰਗ ਸੰਵਾਦ)',
            en: 'Sadhana Community Board',
          },
          icon: MessageSquare,
        },
      ],
    },

    // ३. ज्ञान, बोध एवं जीवन चरित्र
    {
      id: 'section-gyan-bodh-charitra-quiz',
      numberPrefix: '३.',
      title: {
        hi: '३. ज्ञान, बोध एवं जीवन चरित्र',
        pb: '੩. ਗਿਆਨ, ਬੋਧ ਤੇ ਜੀਵਨ ਚਰਿੱਤਰ',
        en: '3. Wisdom & Life Journey',
      },
      icon: Trophy,
      items: [
        {
          view: 'life-journey',
          label: {
            hi: 'सतगुरु कबीर साहेब परिचय एवं चारों युग लीलाएं',
            pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ ਤੇ ਚਾਰੇ ਜੁੱਗ ਲੀਲਾਵਾਂ',
            en: 'Satguru Kabir Biography & Four Yugas',
          },
          icon: Crown,
        },
        {
          view: 'shabd-kosha',
          label: {
            hi: 'सतगुरु कबीर शब्द-अमृत कोश (शब्दावली)',
            pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸ਼ਬਦ-ਅੰਮ੍ਰਿਤ ਕੋਸ਼ (ਸ਼ਬਦਾਵਲੀ)',
            en: 'Shabd-Amrit Kosha (Sacred Glossary)',
          },
          icon: BookMarked,
        },
        {
          view: 'swadhyay',
          label: {
            hi: 'सतगुरु साखी स्वाध्याय एवं प्रश्नोत्तरी पद्धति',
            pb: 'ਸਤਿਗੁਰੂ ਸਾਖੀ ਸਵਾਧਿਆਏ ਤੇ ਪ੍ਰਸ਼ਨਾਵਲੀ',
            en: 'Sakhi Swadhyay & Spiritual Quiz',
          },
          icon: Feather,
        },
        {
          view: 'doha-memory' as AppView,
          label: {
            hi: 'दोहा स्मृति ट्रेनर (चेतावनी बाणी)',
            pb: 'ਦੋਹਾ ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ',
            en: 'Doha Memory Trainer',
          },
          icon: Bookmark,
          badge: { hi: 'स्मृति अभ्यास', pb: 'ਯਾਦਦਾਸ਼ਤ', en: 'Trainer' },
        },
        {
          view: 'acharya-parampara' as AppView,
          label: {
            hi: 'आचार्य परंपरा इतिहास (पावन वंशावली)',
            pb: 'ਆਚਾਰਯ ਪਰੰਪਰਾ ਇਤਿਹਾਸ',
            en: 'Acharya Parampara History',
          },
          icon: ShieldCheck,
        },
        {
          view: 'vansh-bayalis' as AppView,
          label: {
            hi: 'वंश बयालीस की पावन महिमा',
            pb: 'ਵੰਸ਼ ਬਿਆਲੀਸ ਦੀ ਪਾਵਨ ਮਹਿਮਾ',
            en: 'Glory of Vansh Bayalis (42 Lineages)',
          },
          icon: Crown,
        },
        {
          view: 'kabir-gyan-quiz' as AppView,
          label: {
            hi: 'कबीर ज्ञान प्रश्नोत्तरी (प्रमाण-पत्र)',
            pb: 'ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ',
            en: 'Kabir Gyan Spiritual Quiz',
          },
          icon: Trophy,
          badge: { hi: 'क्विज़', pb: 'ਕੁਇਜ਼', en: 'Quiz' },
        },
        {
          view: 'satsang-video',
          label: {
            hi: 'पावन सत्संग वीडियो',
            pb: 'ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ',
            en: 'Satsang Video Discourses',
          },
          icon: Play,
        },
      ],
    },

    // ४. आध्यात्मिक अन्वेषण एवं जंत्री
    {
      id: 'section-exploration-jantri-tools',
      numberPrefix: '४.',
      title: {
        hi: '४. आध्यात्मिक अन्वेषण एवं जंत्री',
        pb: '੪. ਰੂਹਾਨੀ ਖੋਜ ਤੇ ਜੰਤਰੀ',
        en: '4. Exploration & Calendar',
      },
      icon: Compass,
      items: [
        {
          view: 'jantri',
          label: {
            hi: 'साहेब जंत्री (आध्यात्मिक कैलेंडर)',
            pb: 'ਸਾਹੇਬ ਜੰਤਰੀ (ਰੂਹਾਨੀ ਕੈਲੰਡਰ)',
            en: 'Spiritual Jantri Calendar',
          },
          icon: CalendarDays,
        },
        {
          view: 'sacred-ashrams',
          label: {
            hi: 'सतगुरु पावन आश्रम व तीर्थ स्थान',
            pb: 'ਸਤਿਗੁਰੂ ਪਾਵਨ ਆਸ਼ਰਮ ਤੇ ਤੀਰਥ ਅਸਥਾਨ',
            en: 'Sacred Ashrams & Pilgrimages',
          },
          icon: MapPin,
        },
        {
          view: 'universe-map',
          label: {
            hi: 'ब्रह्मांड दर्शन (सृष्टि व लोक रचना)',
            pb: 'ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ (ਸ੍ਰਿਸ਼ਟੀ ਤੇ ਲੋਕ ਰਚਨਾ)',
            en: 'Universe Map (Brahmand Darshan)',
          },
          icon: Atom,
        },
        {
          view: 'deep-search',
          label: {
            hi: 'गहन वाणी एवं शब्द खोज',
            pb: 'ਗੂੜ੍ਹ ਬਾਣੀ ਤੇ ਸ਼ਬਦ ਖੋਜ',
            en: 'Deep Vani Search',
          },
          icon: Search,
        },
        {
          view: 'diary',
          label: {
            hi: 'आत्म-चिंतन डायरी',
            pb: 'ਆਤਮ-ਚਿੰਤਨ ਡਾਇਰੀ',
            en: 'Spiritual Contemplation Diary',
          },
          icon: Bookmark,
        },
        {
          view: 'audio-library',
          label: {
            hi: 'पावन ऑडियो लाइब्रेरी (भजनामृत)',
            pb: 'ਪਾਵਨ ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ (ਭਜਨਾਮ੍ਰਿਤ)',
            en: 'Sacred Audio Library',
            },
          icon: Music2,
        },
      ],
    },
  ];

  const allNavItems = sidebarSections.flatMap((sec) =>
    sec.items.map((item) => ({
      view: item.view,
      label: item.label[language] || item.label.hi,
      icon: item.icon,
    }))
  );

  // In Sahaj Mode, filter down strictly to Daily Pawan Sakhi and Meditation Timer
  const navItems = isSahajMode
    ? [
        { 
          view: 'daily' as AppView, 
          label: t.dailyTitle, 
          icon: Sun 
        },
        { 
          view: 'meditation-timer' as AppView, 
          label: t.tabMeditationTimer, 
          icon: Timer 
        },
      ]
    : allNavItems;

  const handleNavClick = (view: AppView) => {
    if (isSahajMode && view !== 'daily' && view !== 'meditation-timer') {
      setIsSahajMode(false);
    }
    onSelectView(view);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledAppContainer theme={theme} $transparentBg={!!globalWallpaper}>
      {/* Fullscreen Compact Top Return Bar - Always accessible on mobile & desktop */}
      {isFullscreen && (
        <div
          id="fullscreen-top-return-bar"
          style={{
            backgroundColor: theme.stepActiveBg,
            borderColor: theme.accentGold,
          }}
          className="sticky top-0 z-40 border-b px-3 py-1.5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 min-h-[48px] shadow-md select-none"
        >
          <span aria-hidden="true" />
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-sm sm:text-base font-black font-serif tracking-wide whitespace-nowrap text-center"
          >
            {exactTop}
          </span>
          <div className="justify-self-end">
          <button
            type="button"
            onClick={exitAppFullscreen}
            style={{
              backgroundColor: theme.buttonPrimaryBg,
              color: theme.buttonPrimaryText,
            }}
            className="min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 rounded-xl font-bold font-serif text-xs sm:text-sm flex items-center gap-1.5 shadow-sm hover:opacity-95 active:scale-95 transition cursor-pointer whitespace-nowrap shrink-0"
            aria-label="Exit Full Screen and Return"
          >
            <Minimize2 className="w-4 h-4 shrink-0" />
            <span>
              {language === 'pb'
                ? 'ਆਮ ਸਕ੍ਰੀਨ (ਵਾਪਸ ਆਓ)'
                : language === 'en'
                ? 'Normal Screen (Return)'
                : 'सामान्य स्क्रीन (वापस आएं)'}
            </span>
          </button>
          </div>
        </div>
      )}

      {/* Sacred Top Header - Hidden in Full-Screen Reading Mode to maximize reading space */}
      {!isFullscreen && (
        <SacredHeaderContainer theme={theme} $translucent={!!globalWallpaper}>
        {/* ================= BAR 1: TOP BAR (CENTRE: SATYANAAM) ================= */}
        <div
          id="sacred-bar-1-top"
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(24, 19, 14, 0.72)' : 'rgba(245, 228, 196, 0.78)')
              : theme.stepActiveBg,
            borderColor: theme.cardBorder,
          }}
          className={`border-b select-none ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          {/* Mobile & Small Tablet: Dedicated Centered Top Strip for 🌹।।सत्यनाम।।🌹 */}
          <div
            className="md:hidden w-full flex items-center justify-center py-1 px-2 border-b"
            style={{ borderColor: theme.cardBorder }}
          >
            <span
              style={{ color: theme.sacredMaroon }}
              className="font-serif drop-shadow-xs text-center text-base sm:text-lg font-black tracking-wide leading-tight whitespace-nowrap"
            >
              {exactTop}
            </span>
          </div>

          <div className="py-1 sm:py-1.5 px-2 xs:px-3 sm:px-5 relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between gap-1.5 sm:gap-2 min-h-[38px] sm:min-h-[44px]">
            {/* Left: Sidebar Toggle & App Brand */}
            <div className="z-10 flex items-center gap-1.5 sm:gap-2 shrink-0 justify-self-start">
              <button
                id="header-sidebar-toggle-btn"
                onClick={() => setIsSidebarOpen(true)}
                style={{ color: theme.sacredMaroon, borderColor: theme.accentGold, backgroundColor: theme.cardBg }}
                className="h-7 sm:h-7.5 px-2 sm:px-2.5 rounded-lg border flex items-center gap-1.5 hover:opacity-90 transition cursor-pointer shrink-0 shadow-2xs hover:scale-105"
                title={language === 'pb' ? 'ਸਾਰੇ ਫੀਚਰਸ ਤੇ ਗ੍ਰੰਥਾਲਯ' : language === 'en' ? 'All Features & Sacred Library' : 'समस्त पावन फीचर्स एवं ग्रन्थालय'}
                aria-label={language === 'hi' ? 'समस्त फीचर्स मेनू खोलें' : language === 'pb' ? 'ਸਾਰੇ ਫੀਚਰਸ ਮੇਨੂ ਖੋਲ੍ਹੋ' : 'Open All Features Menu'}
              >
                <Menu className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="text-[0.6875rem] sm:text-xs font-bold font-serif hidden sm:inline">
                  {language === 'pb' ? 'ਸਾਰੇ ਫੀਚਰਸ' : language === 'en' ? 'All Features' : 'समस्त फीचर्स'}
                </span>
              </button>

              <div
                id="header-brand-link"
                className="flex items-center gap-1.5 cursor-pointer select-none group shrink-0"
                title="Saheb World"
                onClick={handleHeaderBrandTap}
              >
                <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0 shadow-2xs border border-amber-600/30">
                  <img src="/Saheb_World_icon.jpg" alt="Saheb World" className="w-full h-full object-cover" />
                </div>
                <span
                  style={{ color: theme.sacredMaroon }}
                  className="text-xs sm:text-sm font-black font-serif tracking-tight drop-shadow-xs whitespace-nowrap"
                >
                  {t.appName}
                </span>
              </div>
            </div>

            {/* Desktop Centre: Strict Top Header (🌹।।सत्यनाम।।🌹) - Mathematically Centered */}
            <div className="hidden md:flex items-center justify-center text-center px-2 z-20 justify-self-center">
              <span
                style={{ color: theme.sacredMaroon }}
                className="font-serif drop-shadow-xs text-center text-lg lg:text-xl font-black tracking-wide leading-none whitespace-nowrap"
              >
                {exactTop}
              </span>
            </div>

            {/* Right: Install App, Share App & Fullscreen Buttons */}
            <div className="z-10 shrink-0 flex items-center gap-1.5 justify-end justify-self-end">
            {!pwaStandalone && !isAppInstalled && (
              <button
                id="header-install-app-btn"
                onClick={handleInstallClick}
                style={{
                  color: theme.sacredMaroon,
                  borderColor: theme.accentGold,
                  backgroundColor: theme.cardBg,
                }}
                className="h-7 sm:h-7.5 px-2 sm:px-2.5 rounded-lg border flex items-center gap-1.5 hover:opacity-95 transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0 whitespace-nowrap"
                title={language === 'pb' ? 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ' : language === 'en' ? 'Install App with Icon' : 'ऐप इनस्टॉल करें (App Icon सहित)'}
                aria-label="Install App"
              >
                <Smartphone className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 shrink-0" />
                <span className="text-[0.6875rem] font-bold font-serif whitespace-nowrap hidden xs:inline">
                  {language === 'pb' ? 'ਐਪ ਇੰਸਟਾਲ' : language === 'en' ? 'Install App' : 'ऐप इनस्टॉल'}
                </span>
              </button>
            )}

            <button
              id="header-share-app-btn"
              onClick={handleShareApp}
              style={{
                color: isAppCopied ? '#166534' : '#FFFFFF',
                borderColor: isAppCopied ? '#22C55E' : '#B45309',
                backgroundColor: isAppCopied ? '#DCFCE7' : '#B45309',
              }}
              className="h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg border flex items-center gap-1.5 hover:opacity-95 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
              title={language === 'pb' ? 'ਐਪ ਸ਼ੇਅਰ ਕਰੋ (Share App)' : language === 'en' ? 'Share App' : '📤 ऐप शेयर करें (Share App)'}
              aria-label="Share App"
            >
              {isAppCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700 shrink-0" />
                  <span className="text-[0.6875rem] font-black font-serif text-green-800 whitespace-nowrap">
                    {language === 'pb' ? 'ਕਾਪੀ ਹੋਇਆ! ✓' : language === 'en' ? 'Copied! ✓' : 'कॉपी हुआ! ✓'}
                  </span>
                </>
              ) : (
                <>
                  <span aria-hidden="true" className="text-xs leading-none">📤</span>
                  <span className="text-[0.6875rem] font-bold font-serif whitespace-nowrap">
                    {language === 'pb' ? 'ਐਪ ਸ਼ੇਅਰ ਕਰੋ' : language === 'en' ? 'Share App' : 'ऐप शेयर करें'}
                  </span>
                </>
              )}
            </button>

            {/* Majestic Fullscreen Toggle Button - Hidden in standalone / installed PWA / Android TWA / Capacitor mode */}
            {!pwaStandalone && !isCapacitorAndroid() && (
              <button
                type="button"
                onClick={toggleAppFullscreen}
                style={{
                  color: theme.sacredMaroon,
                  borderColor: theme.accentGold,
                  backgroundColor: theme.cardBg,
                }}
                className="h-7 sm:h-7.5 px-2 sm:px-2.5 rounded-lg border flex items-center gap-1.5 hover:opacity-95 transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95 shrink-0"
                title={
                  isFullscreen
                    ? (language === 'pb' ? 'ਛੋਟੀ ਸਕ੍ਰੀਨ' : language === 'en' ? 'Normal Screen' : 'सामान्य स्क्रीन')
                    : (language === 'pb' ? 'ਪੂਰੀ ਸਕ੍ਰੀਨ' : language === 'en' ? 'Full Screen' : 'पूरी स्क्रीन')
                }
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                )}
                <span className="text-[0.6875rem] font-bold font-serif whitespace-nowrap hidden sm:inline">
                  {isFullscreen 
                    ? (language === 'pb' ? 'ਛੋਟੀ ਸਕ੍ਰੀਨ' : language === 'en' ? 'Normal Screen' : 'सामान्य स्क्रीन') 
                    : (language === 'pb' ? 'ਪੂਰੀ ਸਕ੍ਰੀਨ' : language === 'en' ? 'Full Screen' : 'पूरी स्क्रीन')
                  }
                </span>
              </button>
            )}
            </div>
          </div>
        </div>

        {/* ================= BAR 2: AKHAND SATYANAAM & PLAY DHUN (MOVEABLE) ================= */}
        <div 
          className={`relative group/bar2 select-none border-b z-30 ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
          style={{ 
            borderColor: theme.accentGold, 
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(24, 19, 14, 0.70)' : 'rgba(245, 228, 196, 0.76)')
              : theme.stepActiveBg 
          }}
        >
          {/* Left Move Arrow Button */}
          <button
            type="button"
            onClick={() => scrollBar2('left')}
            className={`absolute left-1 top-1/2 -translate-y-1/2 z-40 h-6.5 w-6.5 sm:h-7 sm:w-7 rounded-full bg-amber-500/25 hover:bg-amber-500/45 text-amber-900 dark:text-amber-100 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-amber-500/50 shadow-md active:scale-90 hover:scale-110 ${
              bar2CanScrollLeft ? 'opacity-100 shadow-amber-500/20' : 'opacity-40 hover:opacity-80'
            }`}
            title={language === 'pb' ? 'ਖੱਬੇ ਪਾਸੇ ਖਿਸਕਾਓ (Move Left) ◄' : language === 'en' ? 'Move Left ◄' : 'बाईं ओर खिसकाएं (Move Left) ◄'}
            aria-label="Move bar left"
          >
            <ChevronLeft className="w-3.5 h-3.5 drop-shadow-xs" />
          </button>

          {/* Moveable Horizontal Container */}
          <div
            id="persistent-akhand-satyanaam-banner"
            ref={bar2ScrollRef}
            onMouseDown={handleBar2MouseDown}
            onTouchStart={handleBar2TouchStart}
            onTouchMove={handleBar2TouchMove}
            onTouchEnd={handleBar2TouchEnd}
            onTouchCancel={handleBar2TouchEnd}
            onWheel={handleBar2Wheel}
            onScroll={updateBar2ScrollBounds}
            className={`py-1 px-8 sm:px-10 relative overflow-x-auto scrollbar-none flex items-center justify-between gap-2.5 sm:gap-3.5 flex-nowrap scroll-smooth touch-pan-x min-h-[36px] sm:min-h-[38px] select-none ${
              isDraggingBar2 ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            title={language === 'pb' ? 'ਖਿਸਕਾਉਣ ਯੋਗ ਪੱਟੀ (ਖੱਬੇ-ਸੱਜੇ ਘਸੀਟੋ ਜਾਂ ਕਲਿੱਕ ਕਰੋ)' : language === 'en' ? 'Moveable Bar (Drag, Slide, or Click Arrows to Move)' : 'खिसकाने योग्य पट्टी (बाएं-दाएं स्लाइड, ड्रैग या तीरों से खिसकाएं)'}
          >
            {/* Left: Sacred Dove & Akhand Satyanaam Title */}
            <div 
              onClick={() => { if (bar2MovedDistance > 6) return; handleNavClick('dhun'); }} 
              className="flex items-center gap-1.5 cursor-pointer group shrink-0"
              title={language === 'pb' ? 'ਅਖੰਡ ਸਤ੍ਯਨਾਮ ਧੁਨ ਤੇ ਸਿਮਰਨ' : language === 'en' ? 'Akhand Satyanaam Dhun & Simran' : 'अखंड सत्यनाम धुन एवं सुमिरन'}
            >
              <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-500/25 border border-amber-500/50 text-xs sm:text-sm shadow-2xs group-hover:scale-105 transition-transform">
                <motion.span 
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="select-none inline-block drop-shadow-xs"
                  title={language === 'pb' ? 'ਪਾਵਨ ਹੰਸਾ (ਸ਼ੁੱਧ ਜੀਵ-ਆਤਮਾ)' : language === 'en' ? 'Pure Hansa Soul' : 'पावन हंसा (शुद्ध जीवात्मा)'}
                >
                  🕊️
                </motion.span>
                {isDhunPlaying && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs" />
                )}
              </div>
              <div className="flex items-center gap-1">
                <span
                  style={{ color: theme.sacredMaroon }}
                  className="text-xs sm:text-sm font-black font-serif tracking-normal sm:tracking-wider drop-shadow-xs whitespace-nowrap"
                >
                  {language === 'pb' ? '।। ਅਖੰਡ ਸਤਯਨਾਮ ।।' : language === 'en' ? '।। Akhand Satyanaam ।।' : '।। अखंड सत्यनाम ।।'}
                </span>
                <span className="text-[0.53rem] sm:text-[9.5px] px-1 py-0.5 rounded-md font-black font-serif bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/40 hidden xs:inline-block shadow-2xs">
                  {language === 'pb' ? 'ਪਾਵਨ ਸਿਮਰਨ' : language === 'en' ? 'Sacred Chanting' : 'पावन सुमिरन'}
                </span>
              </div>
            </div>

            {/* Center: Gliding Sacred Mahamantra Ticker (Static & Solid) */}
            <div 
              onClick={() => { if (bar2MovedDistance > 6) return; handleNavClick('dhun'); }}
              className="flex items-center justify-center text-center overflow-hidden px-1.5 cursor-pointer shrink-0 min-w-[220px] sm:min-w-[280px] max-w-[380px]"
              title={language === 'pb' ? 'ਅਖੰਡ ਸਿਮਰਨ ਤੇ ਅਮਰ ਲੋਕ ਧਾਮ' : language === 'en' ? 'Eternal Remembrance & Amar Lok' : 'अखंड सुमिरन एवं अमर लोक धाम'}
            >
              <div className="relative overflow-hidden w-full py-0.5 text-center">
                <span 
                  style={{ color: theme.sacredMaroon }}
                  className="text-[10.5px] sm:text-xs font-bold font-serif tracking-normal sm:tracking-wider opacity-90 hover:opacity-100 transition drop-shadow-2xs inline-block whitespace-nowrap"
                >
                  {language === 'pb' 
                    ? '✨ ਸਤਯ ਕਬੀਰ ਸਾਹੇਬ ਸੁਖਦਾਈ • ਅਖੰਡ ਸਿਮਰਨ • ਅਮਰ ਲੋਕ ਧਾਮ 🕊️'
                    : language === 'en'
                    ? '✨ Sat Kabir Saheb Sukhdayi • Eternal Satyanaam Remembrance • Amar Lok 🕊️'
                    : '✨ सत्य कबीर साहेब सुखदाई • अखंड सुमिरन • अमर लोक धाम 🕊️'}
                </span>
              </div>
            </div>

            {/* Right: Direct Play Dhun Toggle with Animated Sound Wave Visualizer & Quick Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                id="banner-dhun-audio-visualizer-btn"
                onClick={onToggleDhun}
                style={{
                  borderColor: isDhunPlaying ? theme.accentGold : theme.cardBorder,
                  backgroundColor: isDhunPlaying ? theme.stepActiveBg : theme.cardBg,
                }}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 shadow-2xs shrink-0 ${
                  isDhunPlaying ? 'ring-1.5 ring-amber-500/60' : ''
                }`}
                title={
                  isDhunPlaying
                    ? (language === 'pb' ? 'ਅਖੰਡ ਸਤਯਨਾਮ ਧੁਨ ਰੋਕੋ' : language === 'en' ? 'Pause Akhand Satyanaam Dhun' : 'अखंड सत्यनाम धुन रोकें')
                    : (language === 'pb' ? 'ਅਖੰਡ ਸਤਯਨਾਮ ਧੁਨ ਚਲਾਓ' : language === 'en' ? 'Play Akhand Satyanaam Dhun' : 'अखंड सत्यनाम धुन प्रारंभ करें')
                }
              >
                {/* 5-Bar Animated Audio Equalizer Visualizer */}
                <div 
                  className="flex items-end gap-[2px] h-3 sm:h-3.5 w-4 sm:w-5 justify-center" 
                  title={
                    isDhunPlaying
                      ? (language === 'pb' ? 'ਆਡੀਓ ਤਰੰਗਾਂ ਚਾਲੂ ਹਨ' : language === 'en' ? 'Audio Wave Active' : 'ध्वनि तरंगे सक्रिय')
                      : (language === 'pb' ? 'ਆਡੀਓ ਸ਼ਾਂਤ' : language === 'en' ? 'Audio Paused' : 'ऑडियो शांत')
                  }
                >
                  <span 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      isDhunPlaying 
                        ? 'bg-amber-600 animate-[bounce_0.6s_infinite_alternate]' 
                        : 'h-1.5 bg-amber-400/40'
                    }`} 
                    style={{ height: isDhunPlaying ? '85%' : '35%', animationDelay: '0ms' }}
                  />
                  <span 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      isDhunPlaying 
                        ? 'bg-amber-700 animate-[bounce_0.8s_infinite_alternate]' 
                        : 'h-2 bg-amber-400/40'
                    }`} 
                    style={{ height: isDhunPlaying ? '100%' : '55%', animationDelay: '150ms' }}
                  />
                  <span 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      isDhunPlaying 
                        ? 'bg-amber-500 animate-[bounce_0.5s_infinite_alternate]' 
                        : 'h-2.5 bg-amber-400/40'
                    }`} 
                    style={{ height: isDhunPlaying ? '70%' : '40%', animationDelay: '300ms' }}
                  />
                  <span 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      isDhunPlaying 
                        ? 'bg-amber-700 animate-[bounce_0.7s_infinite_alternate]' 
                        : 'h-1.5 bg-amber-400/40'
                    }`} 
                    style={{ height: isDhunPlaying ? '90%' : '50%', animationDelay: '200ms' }}
                  />
                  <span 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      isDhunPlaying 
                        ? 'bg-amber-600 animate-[bounce_0.9s_infinite_alternate]' 
                        : 'h-1 bg-amber-400/40'
                    }`} 
                    style={{ height: isDhunPlaying ? '75%' : '30%', animationDelay: '100ms' }}
                  />
                </div>

                <span 
                  style={{ color: theme.sacredMaroon }}
                  className="text-[0.6875rem] font-bold font-serif whitespace-nowrap flex items-center gap-1"
                >
                  {isDhunPlaying ? (
                    <>
                      <Volume2 className="w-3 h-3 text-amber-700 animate-pulse" />
                      <span>{language === 'pb' ? 'ਧੁਨ ਚਾਲੂ' : language === 'en' ? 'Live' : 'धुन चालू'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-2.5 h-2.5 text-amber-800 fill-amber-800" />
                      <span>{language === 'pb' ? 'ਅਖੰਡ ਧੁਨ' : language === 'en' ? 'Play Dhun' : 'सत्यनाम धुन'}</span>
                    </>
                  )}
                </span>
              </button>

              {/* Kar Nainon Deedar 32 Verses Button */}
              <button
                id="banner-kar-nainon-deedar-btn"
                onClick={() => setShowKarNainonDeedarModal(true)}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-amber-500/40 bg-amber-500/15 hover:bg-amber-500/25 transition-all flex items-center gap-1 cursor-pointer shadow-2xs text-[0.6875rem] font-bold font-serif text-amber-900 dark:text-amber-200 shrink-0"
                title={language === 'pb' 
                  ? 'ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ ਮਹਲ ਮੇਂ ਪਿਆਰਾ ਹੈ (੩੨ ਕੜੀਆਂ - ਕਾਇਆ ਭੇਦ ਤੇ ਯੋਗ ਸਾਧਨਾ)' 
                  : language === 'en' 
                  ? 'Kar Nainon Deedar (32 Verses - Inner Ascension)' 
                  : 'कर नैनों दीदार महल में प्यारा है (३२ कड़ियाँ - काया भेद व योग साधना)'}
              >
                <Flower2 className="w-3 h-3 text-amber-600 dark:text-amber-300 animate-pulse" />
                <span>
                  {language === 'pb' 
                    ? 'ਕਰ ਨੈਨੋਂ ਦੀਦਾਰ (੩੨ ਕੜੀਆਂ)' 
                    : language === 'en' 
                    ? 'Kar Nainon Deedar (32)' 
                    : 'कर नैनों दीदार (३२ कड़ियाँ)'}
                </span>
              </button>

              {/* Santo Shabdai Shabd Bakhana Button */}
              <button
                id="banner-santo-shabdai-shabd-btn"
                onClick={() => setShowSantoShabdaiShabdModal(true)}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-indigo-500/40 bg-indigo-500/15 hover:bg-indigo-500/25 transition-all flex items-center gap-1 cursor-pointer shadow-2xs text-[0.6875rem] font-bold font-serif text-indigo-900 dark:text-indigo-200 shrink-0"
                title={language === 'pb' 
                  ? 'ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ ਬਖਾਨਾ (੫ ਸ਼ਬਦ, ੫ ਮੁਦ੍ਰਾ ਤੇ ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ)' 
                  : language === 'en' 
                  ? 'Santo Shabdai Shabd Bakhana (5 Sounds & 5 Mudras)' 
                  : 'संतो शब्दई शब्द बखाना (५ शब्द, ५ मुद्रा व निःअक्षर ब्रह्म का भेद)'}
              >
                <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-300 animate-pulse" />
                <span>
                  {language === 'pb' 
                    ? 'ਸੰਤੋ ਸ਼ਬਦਈ ਸ਼ਬਦ (੫ ਸ਼ਬਦ/ਮੁਦ੍ਰਾ)' 
                    : language === 'en' 
                    ? 'Santo Shabdai Shabd' 
                    : 'संतो शब्दई शब्द (५ शब्द/मुद्रा)'}
                </span>
              </button>


            </div>
          </div>

          {/* Right Move Arrow Button */}
          <button
            type="button"
            onClick={() => scrollBar2('right')}
            className={`absolute right-1 top-1/2 -translate-y-1/2 z-40 h-6.5 w-6.5 sm:h-7 sm:w-7 rounded-full bg-amber-500/25 hover:bg-amber-500/45 text-amber-900 dark:text-amber-100 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-amber-500/50 shadow-md active:scale-90 hover:scale-110 ${
              bar2CanScrollRight ? 'opacity-100 shadow-amber-500/20' : 'opacity-40 hover:opacity-80'
            }`}
            title={language === 'pb' ? 'ਸੱਜੇ ਪਾਸੇ ਖਿਸਕਾਓ (Move Right) ►' : language === 'en' ? 'Move Right ►' : 'दायीं ओर खिसकाएं (Move Right) ►'}
            aria-label="Move bar right"
          >
            <ChevronRight className="w-3.5 h-3.5 drop-shadow-xs" />
          </button>

          {/* Move Indicator Dots / Quick Glide Controls */}
          <div className="flex items-center justify-center gap-1.5 pb-0.5 -mt-0.5 select-none">
            <span className="text-[0.53rem] font-bold text-amber-800/70 dark:text-amber-200/70 tracking-wider flex items-center gap-0.5">
              <span>⇄</span>
              <span>{language === 'pb' ? 'ਖਿਸਕਾਓ' : language === 'en' ? 'Move' : 'खिसकाएं'}</span>
            </span>
            <button
              type="button"
              onClick={() => scrollBar2('start')}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                !bar2CanScrollLeft ? 'w-3.5 bg-amber-600 dark:bg-amber-400' : 'w-1.5 bg-amber-400/40 hover:bg-amber-500'
              }`}
              title={language === 'pb' ? '੧. ਅਖੰਡ ਸਤ੍ਯਨਾਮ' : language === 'en' ? '1. Akhand Satyanaam' : '१. अखंड सत्यनाम'}
            />
            <button
              type="button"
              onClick={() => scrollBar2('center')}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                bar2CanScrollLeft && bar2CanScrollRight ? 'w-3.5 bg-amber-600 dark:bg-amber-400' : 'w-1.5 bg-amber-400/40 hover:bg-amber-500'
              }`}
              title={language === 'pb' ? '੨. ਪਾਵਨ ਮਹਾਮੰਤਰ' : language === 'en' ? '2. Sacred Mahamantra' : '२. पावन महामंत्र'}
            />
            <button
              type="button"
              onClick={() => scrollBar2('end')}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                !bar2CanScrollRight ? 'w-3.5 bg-amber-600 dark:bg-amber-400' : 'w-1.5 bg-amber-400/40 hover:bg-amber-500'
              }`}
              title={language === 'pb' ? '੩. ਪਾਵਨ ਧੁਨ ਤੇ ਸ਼ਬਦ' : language === 'en' ? '3. Dhun & Verses' : '३. पावन धुन एवं पद'}
            />
          </div>
        </div>

        {/* ================= BAR 3: NEW UTILITY & ICONS BAR ================= */}
        <div
          id="sacred-bar-3-tools"
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(18, 16, 14, 0.74)' : 'rgba(255, 253, 249, 0.80)')
              : theme.cardBg,
            borderColor: theme.cardBorder,
          }}
          className={`border-b py-0.5 sm:py-1 px-2 sm:px-5 relative select-none flex items-center justify-between gap-1.5 sm:gap-2.5 overflow-x-auto scrollbar-none min-h-[32px] sm:min-h-[34px] ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          {/* Left: Quick Access Sacred Shortcuts */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Quick Divine Darshan Jump */}
            <button
              onClick={() => handleNavClick('divine-darshan')}
              className={`h-6 sm:h-6.5 px-1.5 sm:px-2 rounded-md border text-[0.6875rem] font-bold flex items-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs ${
                currentView === 'divine-darshan' ? 'ring-1.5 ring-amber-500 font-black' : ''
              }`}
              style={{
                backgroundColor: currentView === 'divine-darshan' ? theme.stepActiveBg : theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon
              }}
              title={language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਦਰਸ਼ਨ' : language === 'en' ? 'Divine Darshan' : 'सतगुरु दिव्य दर्शन'}
            >
              <Sparkles className="w-3 h-3 text-amber-700 shrink-0" />
              <span className="font-serif text-[0.625rem] sm:text-[0.6875rem] font-bold">
                {language === 'pb' ? 'ਪਾਵਨ ਦਰਸ਼ਨ' : language === 'en' ? 'Darshan' : 'पावन दर्शन'}
              </span>
            </button>

            {/* Quick Aarti Sanctuary Jump */}
            <button
              onClick={() => handleNavClick('aarti-sanctuary')}
              className={`h-6 sm:h-6.5 px-1.5 sm:px-2 rounded-md border text-[0.6875rem] font-bold flex items-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs ${
                currentView === 'aarti-sanctuary' ? 'ring-1.5 ring-amber-500 font-black' : ''
              }`}
              style={{
                backgroundColor: currentView === 'aarti-sanctuary' ? theme.stepActiveBg : theme.cardBg,
                borderColor: currentView === 'aarti-sanctuary' ? theme.accentGold : theme.cardBorder,
                color: theme.sacredMaroon
              }}
              title={language === 'pb' ? 'ਸੰਧਿਆ ਆਰਤੀ' : language === 'en' ? 'Evening Aarti' : 'संध्या आरती'}
            >
              <Flame className="w-3 h-3 text-amber-600 shrink-0" />
              <span className="font-serif text-[0.625rem] sm:text-[0.6875rem]">
                {language === 'pb' ? 'ਆਰਤੀ' : language === 'en' ? 'Aarti' : 'आरती'}
              </span>
            </button>

            {/* Quick Daily Sakhi Jump */}
            <button
              onClick={() => handleNavClick('daily')}
              className={`h-6 sm:h-6.5 px-1.5 sm:px-2 rounded-md border text-[0.6875rem] font-bold flex items-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs ${
                currentView === 'daily' ? 'ring-1.5 ring-amber-500 font-black' : ''
              }`}
              style={{
                backgroundColor: currentView === 'daily' ? theme.stepActiveBg : theme.cardBg,
                borderColor: currentView === 'daily' ? theme.accentGold : theme.cardBorder,
                color: theme.sacredMaroon
              }}
              title={language === 'pb' ? 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ' : language === 'en' ? 'Daily Sakhi' : 'दैनिक पावन साखी'}
            >
              <Sun className="w-3 h-3 text-amber-700 shrink-0" />
              <span className="font-serif text-[0.625rem] sm:text-[0.6875rem]">
                {language === 'pb' ? 'ਦੈਨਿਕ ਸਾਖੀ' : language === 'en' ? 'Daily Sakhi' : 'दैनिक साखी'}
              </span>
            </button>
          </div>

          {/* Right: All Shifted Action & Utility Icons */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Divine Blessing & Flower Shower Trigger */}
            <button
              id="header-open-blessing-btn"
              onClick={onOpenBlessing}
              title={language === 'pb' ? 'ਸਤਿਗੁਰੂ ਅਸੀਸ ਤੇ ਪੁਸ਼ਪ ਵਰਖਾ' : language === 'en' ? 'Divine Blessing & Flower Shower' : 'सतगुरु आशीर्वाद एवं पुष्प वर्षा'}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="h-6 sm:h-6.5 px-2 sm:px-2.5 rounded-md border text-[0.6875rem] font-bold inline-flex items-center justify-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs shrink-0"
            >
              <Sparkles className="w-3 h-3 text-amber-800 shrink-0" />
              <span className="font-serif font-bold text-[0.625rem] sm:text-[0.6875rem]">
                {language === 'pb' ? 'ਅਸੀਸ' : language === 'en' ? 'Blessing' : 'आशीर्वाद'}
              </span>
            </button>

            {/* Advanced Reading Suite (उन्नत पठन साधन) Trigger Button in 3rd Top Bar */}
            <button
              id="header-open-advanced-reading-suite-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowReadingSuiteModal(true);
              }}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="h-6 sm:h-6.5 px-2 sm:px-2.5 rounded-md border text-[0.6875rem] font-bold inline-flex items-center justify-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs shrink-0"
              title={language === 'pb' ? 'ਉੱਨਤ ਪਠਨ ਸਾਧਨ (Advanced Reading Suite)' : language === 'en' ? 'Advanced Reading Suite' : 'उन्नत पठन साधन (Advanced Reading Suite)'}
            >
              <span className="text-[0.875rem] leading-none shrink-0" style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}>🔱</span>
              <span className="font-serif font-bold text-[0.625rem] sm:text-[0.6875rem]">
                {language === 'pb' ? 'ਉੱਨਤ ਪਠਨ ਸਾਧਨ' : language === 'en' ? 'Advanced Reading Suite' : 'उन्नत पठन साधन'}
              </span>
            </button>

            {/* Accessibility / Font Scaling Button (Quick Access for Elderly) */}
            <button
              id="header-open-accessibility-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                window.dispatchEvent(new CustomEvent('sahebworld_open_accessibility'));
              }}
              title={language === 'pb' ? 'ਅੱਖਰ ਆਕਾਰ ਅਤੇ ਸੁਗਮਤਾ (Font Size & Accessibility)' : language === 'en' ? 'Accessibility & Font Size' : 'अक्षर आकार एवं सुगमता (Accessibility)'}
              style={{
                borderColor: theme.accentGold,
                backgroundColor: theme.accentGoldLight,
                color: theme.sacredMaroon,
              }}
              className="h-6 sm:h-6.5 px-2 sm:px-2.5 rounded-md border flex items-center justify-center gap-1.5 transition cursor-pointer hover:scale-105 shadow-2xs shrink-0"
              aria-label="Accessibility"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span className="font-serif font-black text-[0.7rem] sm:text-[0.75rem]">A+</span>
            </button>

            {/* Offline Readiness Status Indicator */}
            <button
              type="button"
              id="header-network-status-btn"
              onClick={() => onSelectView('health-diagnostic')}
              title={
                isOnline
                  ? (isOfflineReady
                      ? (language === 'pb' ? 'ਆਨਲਾਈਨ · ਔਫਲਾਈਨ ਕੈਸ਼ੇ ਤਿਆਰ (ਜਾਂਚਣ ਲਈ ਕਲਿੱਕ ਕਰੋ)' : language === 'en' ? 'Online · Offline Cache Ready (Click to test)' : 'ऑनलाइन · ऑफ़लाइन कैशे तैयार (जांचने के लिए क्लिक करें)')
                      : (language === 'pb' ? 'ਆਨਲਾਈਨ (ਡਾਇਗਨੋਸਟਿਕ ਖੋਲ੍ਹੋ)' : language === 'en' ? 'Online (Open Diagnostic)' : 'ऑनलाइन (डायग्नोस्टिक खोलें)'))
                  : (language === 'pb' ? 'ਔਫਲਾਈਨ ਮੋਡ ਚਾਲੂ (ਜਾਂਚ ਲਈ ਕਲਿੱਕ ਕਰੋ)' : language === 'en' ? 'Offline Mode Active (Click to inspect)' : 'ऑफ़लाइन मोड सक्रिय (जांचने के लिए क्लिक करें)')
              }
              style={{
                borderColor: isOnline ? theme.accentGold : '#16A34A',
                backgroundColor: isOnline ? theme.cardBg : 'rgba(22, 163, 74, 0.12)',
                color: isOnline ? theme.sacredMaroon : '#166534',
              }}
              className="h-6 sm:h-6.5 px-2 rounded-md border flex items-center justify-center gap-1 transition shadow-2xs shrink-0 font-serif text-[0.625rem] font-bold cursor-pointer hover:scale-105 active:scale-95"
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="hidden md:inline">{language === 'pb' ? 'ਆਨਲਾਈਨ' : language === 'en' ? 'Online' : 'ऑनलाइन'}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>{language === 'pb' ? 'ਔਫਲਾਈਨ' : language === 'en' ? 'Offline' : 'ऑफ़लाइन'}</span>
                </>
              )}
            </button>

            {/* Settings Button */}
            <button
              id="header-open-settings-btn"
              onClick={onOpenSettings}
              title={language === 'pb' ? 'ਸੈਟਿੰਗਜ਼' : language === 'en' ? 'Settings' : 'सेटिंग्स'}
              style={{
                borderColor: theme.accentGold,
                backgroundColor: theme.cardBg,
                color: theme.sacredMaroon,
              }}
              className="h-6 sm:h-6.5 px-2 sm:px-2.5 rounded-md border flex items-center justify-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs shrink-0"
              aria-label="Settings"
            >
              <Settings className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            </button>

            {/* Admin-Only Tool Trigger (प्रशासक टूल) */}
            {isAdmin && (
              <button
                type="button"
                id="header-open-admin-injector-btn"
                onClick={() => {
                  sacredHaptics.lightTap();
                  window.dispatchEvent(new CustomEvent(OPEN_ADMIN_INJECTOR_EVENT));
                }}
                title="प्रशासक टूल (Admin Data Layer Injector)"
                style={{
                  borderColor: theme.cardBorder,
                  backgroundColor: theme.cardBg,
                  color: theme.textSecondary,
                }}
                className="h-6 sm:h-6.5 px-1.5 rounded-md border flex items-center justify-center transition cursor-pointer opacity-75 hover:opacity-100 shrink-0"
                aria-label="प्रशासक टूल"
              >
                <Database className="w-3 h-3 text-amber-800 dark:text-amber-300 shrink-0" />
              </button>
            )}

            {/* Language Diagnostics / Tri-Lingual Status & Audit Trigger */}
            <button
              id="header-open-language-diagnostics-btn"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowLanguageDiagnostics(true);
              }}
              title={language === 'pb' ? 'ਭਾਸ਼ਾ ਡਾਇਗਨੌਸਟਿਕਸ ਤੇ ਆਡਿਟ' : language === 'en' ? 'Language Diagnostics & Audit' : 'भाषा डायग्नोस्टिक्स एवं ऑडिट'}
              style={{
                borderColor: theme.accentGold,
                backgroundColor: theme.cardBg,
                color: theme.sacredMaroon,
              }}
              className="h-6 sm:h-6.5 px-2 rounded-md border flex items-center justify-center gap-1 transition cursor-pointer hover:scale-105 shadow-2xs shrink-0 font-serif text-[0.625rem] font-bold"
            >
              <span>🌐</span>
              <span className="hidden xs:inline">{language.toUpperCase()}</span>
            </button>

            {/* Language Switcher Control */}
            <div 
              className="flex items-center border rounded-md overflow-hidden font-bold shadow-2xs shrink-0 h-6 sm:h-6.5 p-0.5" 
              style={{
                borderColor: theme.mode === 'mystic_dark' ? '#F59E0B' : theme.accentGold,
                backgroundColor: theme.mode === 'mystic_dark' ? '#2A2016' : theme.stepActiveBg
              }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                const label = lng === 'hi' ? 'हि' : lng === 'pb' ? 'ਪੰ' : 'EN';
                return (
                  <button
                    key={lng}
                    id={`header-lang-${lng}`}
                    onClick={() => onSelectLanguage(lng)}
                    style={{
                      backgroundColor: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#D97706' : theme.sacredMaroon) 
                        : 'transparent',
                      color: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#000000' : '#FFFFFF') 
                        : (theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.textSecondary),
                    }}
                    className={`h-full px-1.5 sm:px-2 rounded transition-all cursor-pointer flex items-center justify-center text-[9.5px] sm:text-[0.625rem] ${
                      isSelected ? 'font-black shadow-xs' : 'font-semibold hover:opacity-90'
                    }`}
                    title={lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Morning / Evening Sadhana Prompt Banner removed as per user request */}
        </SacredHeaderContainer>
      )}

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            
              {/* Sidebar Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[310px] sm:w-[360px] z-[101] shadow-2xl flex flex-col"
              style={{ backgroundColor: theme.cardBg }}
            >
              {/* Sidebar Header with Saheb World Branding */}
              <div className="p-4 border-b flex flex-col gap-2" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
                {/* Top Center Satyanaam in Sidebar */}
                <div className="text-center w-full">
                  <span 
                    style={{ color: theme.sacredMaroon }}
                    className="text-sm sm:text-base font-black font-serif tracking-wide block drop-shadow-xs whitespace-nowrap"
                  >
                    {exactTop}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div 
                    onClick={() => {
                      handleNavClick('daily');
                      setIsSidebarOpen(false);
                    }}
                    className="flex items-center gap-3 cursor-pointer select-none group"
                  >
                      <div 
                        className="w-10 h-10 rounded-full border-2 shrink-0 group-hover:scale-105 transition shadow-sm overflow-hidden flex items-center justify-center bg-white" 
                        style={{ borderColor: theme.accentGold }}
                      >
                        <img src="/Saheb_World_icon.jpg" alt="Saheb World" className="w-full h-full object-cover" />
                      </div>
                    <div className="flex flex-col">
                      <span className="font-black font-serif text-base leading-tight tracking-tight" style={{ color: theme.sacredMaroon }}>
                        {t.appName}
                      </span>
                    </div>
                  </div>
                  <button 
                    id="sidebar-close-btn"
                    onClick={() => setIsSidebarOpen(false)}
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="p-2 rounded-xl border flex items-center justify-center hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
                    title={t.closeSidebar}
                    aria-label="Close sidebar"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Sidebar Nav Items */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 custom-scrollbar">

                {/* Sidebar Language Selection Control (भाषा चयन / ਭਾਸ਼ਾ ਚੋਣ / Select Language) */}
                <div 
                  className="p-3 rounded-2xl border flex flex-col gap-2 mb-2 shadow-2xs select-none"
                  style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black font-serif flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                      <Languages className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{language === 'pb' ? 'ਭਾਸ਼ਾ ਚੁਣੋ (Language)' : language === 'en' ? 'Select Language' : 'भाषा चयन (Language)'}</span>
                    </span>
                  </div>
                  <div 
                    className="grid grid-cols-3 gap-1 p-0.5 rounded-xl border backdrop-blur-md" 
                    style={{ 
                      borderColor: theme.mode === 'mystic_dark' ? '#F59E0B' : theme.accentGold,
                      backgroundColor: theme.cardBg
                    }}
                  >
                    {[
                      { id: 'hi' as Language, label: 'हिंदी' },
                      { id: 'pb' as Language, label: 'ਪੰਜਾਬੀ' },
                      { id: 'en' as Language, label: 'English' },
                    ].map((langItem) => {
                      const isSelected = language === langItem.id;
                      return (
                        <button
                          key={langItem.id}
                          id={`sidebar-lang-btn-${langItem.id}`}
                          onClick={() => onSelectLanguage(langItem.id)}
                          style={{
                            backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                            color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                          }}
                          className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                            isSelected ? 'shadow-xs font-black' : 'hover:bg-amber-50 dark:hover:bg-zinc-800'
                          }`}
                          title={langItem.label}
                        >
                          <span>{langItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Prominent Side Menu Share App Action Card */}
                <div className="mb-2 flex items-stretch gap-2">
                  <button
                    id="sidebar-share-app-btn"
                    type="button"
                    onClick={() => {
                      handleShareApp();
                      setIsSidebarOpen(false);
                    }}
                    className="flex-1 min-h-[44px] px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-serif font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
                  >
                    <span aria-hidden="true">📤</span>
                    <span>
                      {language === 'pb'
                        ? 'ਐਪ ਸ਼ੇਅਰ ਕਰੋ (Share App)'
                        : language === 'en'
                        ? 'Share Saheb World App'
                        : 'ऐप शेयर करें (Share App)'}
                    </span>
                  </button>
                  <a
                    href={getWhatsAppShareUrl(language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSidebarOpen(false)}
                    className="min-h-[44px] px-3 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold text-xs shadow-sm flex items-center justify-center gap-1 transition active:scale-95 shrink-0"
                    title="WhatsApp पर सीधा शेयर करें"
                    aria-label="Share on WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>WA</span>
                  </a>
                </div>

                {/* Saheb World Primary Sanctuary Tab in Menu */}
                <button
                  id="sidebar-item-saheb-world-home"
                  onClick={() => {
                    handleNavClick('daily');
                    setIsSidebarOpen(false);
                  }}
                  style={{
                    backgroundColor: currentView === 'daily' ? theme.stepActiveBg : theme.accentGoldLight,
                    borderColor: theme.accentGold,
                    color: theme.sacredMaroon,
                  }}
                  className="w-full px-3.5 py-2.5 rounded-2xl flex items-center gap-3 transition-all border shadow-xs text-left cursor-pointer mb-2"
                >
                  <div className="w-7 h-7 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-100 shrink-0"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-black font-serif leading-tight truncate">
                      {t.appName} {language === 'pb' ? '(ਮੁੱਖ ਧਾਮ)' : language === 'en' ? '(Main Sanctuary)' : '(मुख्य धाम)'}
                    </span>
                    <span className="text-[0.625rem] font-semibold opacity-80 truncate">{t.appSubtitle}</span>
                  </div>
                  {currentView === 'daily' && <div className="ml-auto w-2 h-2 rounded-full bg-amber-500 shrink-0" />}
                </button>

                {/* Combined PWA Install & Offline App Access */}
                {!pwaStandalone && !isAppInstalled && (
                  <div
                    style={{
                      backgroundColor: theme.mode === 'mystic_dark' ? '#18130E' : theme.bgSecondary,
                      borderColor: theme.mode === 'mystic_dark' ? '#F59E0B' : theme.accentGold,
                    }}
                    className="w-full p-3.5 rounded-2xl border shadow-2xs space-y-2.5 mb-3 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: theme.mode === 'mystic_dark' ? '#2A2016' : 'rgba(245, 158, 11, 0.15)',
                          borderColor: theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : 'rgba(245, 158, 11, 0.3)',
                        }}
                        className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0"
                      >
                        <Smartphone
                          className="w-5 h-5"
                          style={{ color: theme.mode === 'mystic_dark' ? '#F59E0B' : '#B45309' }}
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span
                          className="text-xs font-black font-serif leading-tight"
                          style={{ color: theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.textPrimary }}
                        >
                          {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਔਫਲਾਈਨ ਐਪ (PWA)' : language === 'en' ? 'Saheb World Offline App (PWA)' : 'साहेब वर्ल्ड ऑफ़लाइन ऐप (PWA)'}
                        </span>
                        <span
                          className="text-[0.6875rem] font-medium font-serif mt-0.5"
                          style={{ color: theme.mode === 'mystic_dark' ? '#FDE68A' : '#92400E' }}
                        >
                          {isOfflineReady
                            ? (language === 'pb' ? 'ਔਫਲਾਈਨ ਕੈਸ਼ੇ ਤਿਆਰ · ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਪੜ੍ਹੋ' : language === 'en' ? 'Offline Cache Ready · Works without Internet' : 'ऑफ़लाइन कैशे तैयार · बिना इंटरनेट संपूर्ण स्वाध्याय')
                            : (language === 'pb' ? 'ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜੋੜੋ' : language === 'en' ? 'Add to Home Screen for Offline Access' : 'बिना इंटरनेट स्वाध्याय हेतु फोन में जोड़ें')}
                        </span>
                      </div>
                    </div>
                    <PWAInstallButton
                      language={language}
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white shadow-sm"
                      onFallbackOpenModal={() => {
                        setIsSidebarOpen(false);
                        setShowInstallModal(true);
                      }}
                    />
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setShowInstallModal(true);
                        }}
                        style={{
                          borderColor: theme.accentGold,
                          color: theme.mode === 'mystic_dark' ? '#FDE68A' : theme.sacredMaroon,
                        }}
                        className="w-full min-h-[44px] px-3 py-2 rounded-xl border text-xs font-serif font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {language === 'pb'
                            ? 'GitHub Android APK / ਅਪਡੇਟ'
                            : language === 'en'
                            ? 'GitHub Android APK & Updates'
                            : 'GitHub Android APK डाउनलोड / अपडेट'}
                        </span>
                      </button>
                    )}
                  </div>
                )}

                {(pwaStandalone || isCapacitorAndroid()) && isAdmin && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      setShowInstallModal(true);
                    }}
                    style={{
                      backgroundColor: theme.mode === 'mystic_dark' ? '#1E1812' : theme.stepActiveBg,
                      borderColor: theme.accentGold,
                      color: theme.mode === 'mystic_dark' ? '#FDE68A' : theme.sacredMaroon,
                    }}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-serif font-bold mb-3 hover:opacity-95 transition cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>
                      {language === 'pb'
                        ? 'GitHub Android APK ਅੱਪਡੇਟ ਜਾਂਚੋ'
                        : language === 'en'
                        ? 'Check GitHub APK Updates'
                        : 'GitHub Android APK अपडेट जांचें'}
                    </span>
                  </button>
                )}
                
                {/* Sahaj Mode Alert Banner in Drawer if Active */}
                {isSahajMode && (
                  <div
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="p-3 rounded-2xl border flex flex-col gap-2 mb-3 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                        <span className="text-xs font-bold font-serif">{t.sahajModeBadge}</span>
                      </div>
                      <button
                        onClick={() => setIsSahajMode(false)}
                        className="px-2.5 py-1 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-bold text-[0.625rem] shadow-2xs cursor-pointer"
                      >
                        {language === 'pb' ? 'ਸਾਰੇ ਫੀਚਰਸ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Show All Features' : 'सभी फीचर्स खोलें'}
                      </button>
                    </div>
                    <p className="text-[0.625rem] opacity-85 leading-tight">
                      {language === 'pb' 
                        ? 'ਸਹਿਜ ਮੋਡ ਚਾਲੂ ਹੈ। ਹੇਠਾਂ ਦਿੱਤੇ ਕਿਸੇ ਵੀ ਫੀਚਰ ਤੇ ਟੈਪ ਕਰਕੇ ਉਸਨੂੰ ਤੁਰੰਤ ਖੋਲ੍ਹੋ।' 
                        : language === 'en'
                        ? 'Sahaj Mode active. Tap any feature below to explore.'
                        : 'सहज मोड सक्रिय है। नीचे दी गई किसी भी सुविधा पर टैप करके उसे तुरंत खोलें।'}
                    </p>
                  </div>
                )}

                {/* ================= 5 ORDERED & HARMONIZED SECTIONS ================= */}
                <div className="space-y-4 pt-1">
                  {sidebarSections.map((section) => {
                    const isCollapsed = collapsedSections[section.id];

                    return (
                      <div 
                        key={section.id} 
                        className="rounded-2xl border p-2 shadow-2xs transition-all space-y-1.5"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.015)',
                          borderColor: theme.cardBorder,
                        }}
                      >
                        {/* Section Header Button */}
                        <button
                          type="button"
                          onClick={() => toggleSectionCollapse(section.id)}
                          style={{
                            backgroundColor: theme.stepActiveBg,
                            borderColor: theme.accentGold,
                            color: theme.sacredMaroon,
                          }}
                          className="w-full px-3 py-2 rounded-xl border flex items-center justify-between gap-2 shadow-2xs cursor-pointer select-none transition-all hover:brightness-95 group"
                        >
                          <div className="flex items-center gap-2 text-left min-w-0">
                            <span className="font-serif font-black text-amber-800 dark:text-amber-300 text-xs shrink-0">
                              {section.numberPrefix}
                            </span>
                            <span className="font-serif font-black text-xs sm:text-[0.8125rem] leading-tight truncate">
                              {section.title[language] || section.title.hi}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[0.625rem] px-1.5 py-0.5 rounded-md font-bold bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                              {section.items.length}
                            </span>
                            {isCollapsed ? (
                              <ChevronDown className="w-3.5 h-3.5 text-amber-700 transition-transform group-hover:scale-110" />
                            ) : (
                              <ChevronUp className="w-3.5 h-3.5 text-amber-700 transition-transform group-hover:scale-110" />
                            )}
                          </div>
                        </button>

                        {/* Section Items */}
                        {!isCollapsed && (
                          <div className="space-y-1 pt-1">
                            {section.items.map((item) => {
                              const isActive = currentView === item.view;
                              const Icon = item.icon;

                              if (item.isDhunSpecial) {
                                return (
                                  <div
                                    key={item.view}
                                    style={{
                                      backgroundColor: isActive ? theme.stepActiveBg : isDhunPlaying ? 'rgba(245, 158, 11, 0.14)' : theme.cardBg,
                                      borderColor: isActive ? theme.accentGold : isDhunPlaying ? '#F59E0B' : theme.cardBorder,
                                    }}
                                    className={`w-full p-2 rounded-xl flex items-center justify-between gap-2 transition-all border shadow-xs ${
                                      isDhunPlaying ? 'ring-1.5 ring-amber-500/60' : ''
                                    }`}
                                  >
                                    <button
                                      type="button"
                                      onClick={() => handleNavClick('dhun')}
                                      className="flex items-center gap-2.5 flex-1 text-left cursor-pointer select-none group min-w-0"
                                      title="सत्यनाम पावन धुन कक्ष खोलें"
                                    >
                                      <div 
                                        style={{
                                          backgroundColor: isDhunPlaying ? '#8B4513' : theme.accentGoldLight,
                                          color: isDhunPlaying ? '#FFFFFF' : theme.sacredMaroon
                                        }}
                                        className="p-1.5 rounded-lg shrink-0 transition-transform group-hover:scale-105 shadow-2xs"
                                      >
                                        <Volume2 className={`w-4 h-4 ${isDhunPlaying ? 'animate-pulse' : ''}`} />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span 
                                            style={{ color: theme.sacredMaroon }}
                                            className="text-xs sm:text-[0.8125rem] font-black font-serif truncate"
                                          >
                                            {item.label[language] || item.label.hi}
                                          </span>
                                        </div>
                                        <span className="text-[9.5px] text-amber-800/80 dark:text-amber-300/80 font-medium truncate">
                                          {isDhunPlaying 
                                            ? (language === 'pb' ? '● ਧੁਨ ਚਾਲੂ ਹੈ (Playing)' : language === 'en' ? '● Dhun is Playing' : '● पावन धुन सक्रिय है')
                                            : (language === 'pb' ? 'ਅਖੰਡ ਸਤਯਨਾਮ ਧੁਨ' : language === 'en' ? 'Continuous Resonance' : 'अखंड सत्यनाम नाद')}
                                        </span>
                                      </div>
                                    </button>

                                    {/* Inline Quick Play / Pause Button */}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onToggleDhun();
                                      }}
                                      style={{
                                        backgroundColor: isDhunPlaying ? theme.stepActiveBg : '#8B4513',
                                        borderColor: isDhunPlaying ? theme.accentGold : 'transparent',
                                        color: isDhunPlaying ? theme.sacredMaroon : '#FFFFFF',
                                      }}
                                      className="px-2 py-1 rounded-lg border text-[10.5px] font-bold font-serif flex items-center gap-1 shrink-0 hover:scale-105 transition-all shadow-xs cursor-pointer active:scale-95"
                                      title={isDhunPlaying ? 'धुन रोकें (Pause Dhun)' : 'धुन प्रारंभ करें (Play Dhun)'}
                                    >
                                      {isDhunPlaying ? (
                                        <>
                                          <div className="flex items-end gap-[1px] h-2.5 w-2.5 justify-center">
                                            <span className="w-[1.5px] bg-amber-600 rounded-full animate-[bounce_0.6s_infinite_alternate] h-full" />
                                            <span className="w-[1.5px] bg-amber-700 rounded-full animate-[bounce_0.8s_infinite_alternate] h-2/3" />
                                            <span className="w-[1.5px] bg-amber-500 rounded-full animate-[bounce_0.5s_infinite_alternate] h-4/5" />
                                          </div>
                                          <span>{language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'रोकें'}</span>
                                        </>
                                      ) : (
                                        <>
                                          <Play className="w-2.5 h-2.5 fill-current" />
                                          <span>{language === 'pb' ? 'ਚਲਾਓ' : language === 'en' ? 'Play' : 'चलाएं'}</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                );
                              }

                              return (
                                <button
                                  key={item.view}
                                  type="button"
                                  onClick={() => handleNavClick(item.view)}
                                  style={{
                                    backgroundColor: isActive ? theme.stepActiveBg : 'transparent',
                                    borderColor: isActive ? theme.accentGold : 'transparent',
                                    color: isActive ? theme.sacredMaroon : theme.textPrimary
                                  }}
                                  className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 transition-all border text-left cursor-pointer group ${
                                    isActive ? 'font-bold shadow-2xs' : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                                  }`}
                                >
                                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform group-hover:scale-105 ${isActive ? 'bg-white/80 dark:bg-zinc-800 shadow-inner' : 'bg-black/5 dark:bg-white/5'}`}>
                                    <Icon className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                                  </div>
                                  <span className="text-xs sm:text-[12.5px] font-serif leading-tight flex-1">
                                    {item.label[language] || item.label.hi}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[0.5625rem] px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 font-bold shrink-0">
                                      {item.badge[language] || item.badge.hi}
                                    </span>
                                  )}
                                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* ५. उपयोगकर्ता मार्गदर्शिका एवं ऐप नीतियां (Collapsible Drawer Category) */}
                  {(() => {
                    const infoSectionId = 'section-guide-about-policies';
                    const isInfoCollapsed = collapsedSections[infoSectionId];
                    const infoItems: Array<{
                      id: string;
                      section: AboutDisclaimerSection;
                      icon: React.ComponentType<{ className?: string }>;
                      label: { hi: string; pb: string; en: string };
                    }> = [
                      {
                        id: 'sidebar-user-guide-btn',
                        section: 'guide',
                        icon: BookOpen,
                        label: {
                          hi: 'उपयोगकर्ता मार्गदर्शिका',
                          pb: 'ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ',
                          en: 'User Guide',
                        },
                      },
                      {
                        id: 'sidebar-about-us-btn',
                        section: 'about',
                        icon: Info,
                        label: {
                          hi: 'हमारे बारे में',
                          pb: 'ਸਾਡੇ ਬਾਰੇ',
                          en: 'About Us',
                        },
                      },
                      {
                        id: 'sidebar-disclaimer-btn',
                        section: 'disclaimer',
                        icon: ShieldCheck,
                        label: {
                          hi: 'अस्वीकरण',
                          pb: 'ਅਸਵੀਕਾਰਤਾ',
                          en: 'Disclaimer',
                        },
                      },
                      {
                        id: 'sidebar-privacy-policy-btn',
                        section: 'privacy',
                        icon: Lock,
                        label: {
                          hi: 'गोपनीयता नीति',
                          pb: 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ',
                          en: 'Privacy Policy',
                        },
                      },
                    ];

                    return (
                      <div
                        className="rounded-2xl border p-2 shadow-2xs transition-all space-y-1.5"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.015)',
                          borderColor: theme.cardBorder,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            toggleSectionCollapse(infoSectionId);
                          }}
                          style={{
                            backgroundColor: theme.stepActiveBg,
                            borderColor: theme.accentGold,
                            color: theme.sacredMaroon,
                          }}
                          className="w-full px-3 py-2 rounded-xl border flex items-center justify-between gap-2 shadow-2xs cursor-pointer select-none transition-all hover:brightness-95 group"
                        >
                          <div className="flex items-center gap-2 text-left min-w-0">
                            <span className="font-serif font-black text-amber-800 dark:text-amber-300 text-xs shrink-0">
                              {language === 'pb' ? '੫.' : language === 'en' ? '5.' : '५.'}
                            </span>
                            <span className="font-serif font-black text-xs sm:text-[0.8125rem] leading-tight truncate">
                              {language === 'pb'
                                ? 'ਮਾਰਗਦਰਸ਼ਿਕਾ, ਜਾਣ-ਪਛਾਣ ਤੇ ਨੀਤੀਆਂ'
                                : language === 'en'
                                ? 'User Guide, About & Policies'
                                : 'मार्गदर्शिका, परिचय एवं नीतियां'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[0.625rem] px-1.5 py-0.5 rounded-md font-bold bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                              {infoItems.length}
                            </span>
                            {isInfoCollapsed ? (
                              <ChevronDown className="w-3.5 h-3.5 text-amber-700 transition-transform group-hover:scale-110" />
                            ) : (
                              <ChevronUp className="w-3.5 h-3.5 text-amber-700 transition-transform group-hover:scale-110" />
                            )}
                          </div>
                        </button>

                        {!isInfoCollapsed && (
                          <div className="space-y-1 pt-1">
                            {infoItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <button
                                  key={item.id}
                                  id={item.id}
                                  type="button"
                                  onClick={() => {
                                    sacredHaptics.lightTap();
                                    setIsSidebarOpen(false);
                                    setAboutModalSection(item.section);
                                  }}
                                  style={{ color: theme.textPrimary }}
                                  className="w-full px-3 py-2 rounded-xl flex items-center gap-2.5 transition-all border border-transparent text-left cursor-pointer group hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                  <div className="p-1.5 rounded-lg shrink-0 transition-transform group-hover:scale-105 bg-black/5 dark:bg-white/5">
                                    <Icon className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                                  </div>
                                  <span className="text-xs sm:text-[12.5px] font-serif leading-tight flex-1">
                                    {item.label[language] || item.label.hi}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>

                {/* Sahaj Mode Indicator in Sidebar */}
                {isSahajMode && (
                  <div
                    onClick={() => {
                      setIsSidebarOpen(false);
                      onOpenSettings();
                    }}
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="p-3 rounded-2xl border flex items-center gap-3 cursor-pointer mt-3 shadow-xs hover:opacity-90 transition"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 animate-pulse" />
                    <div className="text-left">
                      <p className="text-xs font-bold font-serif">{t.sahajModeBadge}</p>
                      <p className="text-[0.625rem] opacity-85 leading-tight">{t.sahajModeSubtitle}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Footer */}
              <div 
                style={{ 
                  borderColor: theme.cardBorder, 
                  backgroundColor: theme.stepActiveBg 
                }} 
                className="p-4 border-t text-center space-y-2 shrink-0"
              >
                <div 
                  style={{ color: theme.sacredMaroon }}
                  className="text-[0.6875rem] font-serif font-bold tracking-wider opacity-85"
                >
                  {exactBottom}
                </div>
                {isAdmin && (
                  <button
                    type="button"
                    id="sidebar-open-admin-injector-btn"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      window.dispatchEvent(new CustomEvent(OPEN_ADMIN_INJECTOR_EVENT));
                    }}
                    style={{ color: theme.textMuted }}
                    className="inline-flex items-center justify-center gap-1 text-[10px] font-serif opacity-75 hover:opacity-100 transition cursor-pointer"
                  >
                    <Database className="w-3 h-3" />
                    <span>{language === 'pb' ? 'ਪ੍ਰਸ਼ਾਸਕ ਟੂਲ' : language === 'en' ? 'Admin Tools' : 'प्रशासक टूल'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main App Body - Global Edge-to-Edge Full Width with standard 16dp (px-4) padding */}
      <main className="flex-1 w-full max-w-full mx-auto px-4 py-4 sm:py-6 pb-12 transition-all duration-300">
        {children}
      </main>

      {/* Non-intrusive Clipboard Confirmation Banner after Share App click */}
      {shareFallbackBanner && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[120] w-[calc(100%-2rem)] max-w-md bg-[#FFFDF9] dark:bg-stone-900 border-2 border-amber-600 shadow-2xl rounded-2xl p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm font-serif font-bold text-stone-900 dark:text-amber-100 leading-snug">
              {language === 'pb'
                ? 'ਸੱਦਾ ਸੁਨੇਹਾ ਤੇ ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!'
                : language === 'en'
                ? 'App link & message copied!'
                : 'पावन निमंत्रण संदेश व लाइव लिंक कॉपी हो गया!'}
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setShareFallbackBanner(null)}
              className="p-1.5 rounded-lg text-stone-500 hover:bg-black/5 cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}



      {/* Natural Bottom Sacred Footer - Hidden in Full-Screen Reading Mode & Nitnem Gutka View */}
      {!isFullscreen && currentView !== 'nitnem-gutka' && (
        <footer
          id="sacred-foot-bar"
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(18, 16, 14, 0.78)' : 'rgba(255, 253, 249, 0.84)')
              : theme.cardBg,
            borderColor: theme.accentGold,
          }}
          className={`w-full border-t select-none print:hidden mt-auto ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
            {/* Left: Quick Dhun Audio & Divine Darshan */}
            <div className="flex items-center gap-1.5">
              <button
                id="footbar-dhun-toggle"
                type="button"
                onClick={onToggleDhun}
                className="px-2 py-1 rounded-md text-xs font-bold font-serif flex items-center gap-1.5 transition-all cursor-pointer border shadow-sm"
                style={
                  isDhunPlaying
                    ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText, borderColor: theme.accentGold }
                    : { backgroundColor: theme.bgSecondary, color: theme.sacredMaroon, borderColor: theme.cardBorder }
                }
                aria-label={
                  isDhunPlaying
                    ? language === 'pb'
                      ? 'ਧੁਨ ਰੋਕੋ'
                      : language === 'en'
                      ? 'Pause Dhun'
                      : 'धुन बंद करें'
                    : language === 'pb'
                    ? 'ਧੁਨ ਚਲਾਓ'
                    : language === 'en'
                    ? 'Play Dhun'
                    : 'धुन बजाएं'
                }
              >
                {isDhunPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
                <span>{t.dhunTitle}</span>
              </button>
          </div>

          {/* Center: Strict Footbar Salutation (।। साहेब बंदगी साहेब।।🙏) */}
          <div className="flex-1 min-w-0 text-center px-1">
            <span
              style={{ color: theme.sacredMaroon }}
              className="text-xs sm:text-base font-black tracking-wide font-serif whitespace-nowrap inline-block drop-shadow-2xs"
            >
              {exactBottom}
            </span>
          </div>

          {/* Right: Balance Spacer */}
          <div className="flex items-center gap-1.5 sm:gap-2 w-[75px] justify-end" />
        </div>

        {/* Footbar Branding Details in Page Flow */}
        <div 
          style={{ color: theme.sacredMaroon, backgroundColor: 'rgba(0,0,0,0.03)' }}
          className="w-full text-center py-2 px-4 border-t border-black/5 dark:border-white/5"
        >
          <span className="text-[0.625rem] sm:text-[0.6875rem] font-black tracking-normal opacity-70 font-serif whitespace-pre-line leading-relaxed">
            {t?.footerDescription || ''}
          </span>
          <div
            style={{ color: theme.textMuted }}
            className="text-[0.625rem] sm:text-xs font-serif flex items-center justify-center gap-2 pt-1.5 flex-wrap"
          >
            <span className="font-black text-amber-900 dark:text-amber-200 tracking-wide">साहेब वर्ल्ड • Saheb World</span>
            <span className="opacity-40 select-none">•</span>
            <span className="font-bold tracking-tighter uppercase font-sans text-[0.5625rem] opacity-75">{t.pwaTag}</span>
            <span className="opacity-40 select-none">•</span>
            <button
              type="button"
              onClick={onOpenSettings}
              className="cursor-pointer hover:underline font-bold text-amber-900 dark:text-amber-400 text-[0.5625rem] font-sans"
            >
              {t.themeLanguageSettings}
            </button>
            <span className="opacity-40 select-none">•</span>
            <button
              id="footer-user-guide-btn"
              type="button"
              onClick={() => setAboutModalSection('guide')}
              className="cursor-pointer hover:underline font-bold text-amber-900 dark:text-amber-400 text-[0.5625rem] font-sans"
            >
              {language === 'pb' ? 'ਮਾਰਗਦਰਸ਼ਿਕਾ (User Guide)' : language === 'en' ? 'User Guide' : 'उपयोगकर्ता मार्गदर्शिका (User Guide)'}
            </button>
            <span className="opacity-40 select-none">•</span>
            <button
              id="footer-about-us-btn"
              type="button"
              onClick={() => setAboutModalSection('about')}
              className="cursor-pointer hover:underline font-bold text-amber-900 dark:text-amber-400 text-[0.5625rem] font-sans"
            >
              {language === 'pb' ? 'ਸਾਡੇ ਬਾਰੇ (About Us)' : language === 'en' ? 'About Us' : 'हमारे बारे में (About Us)'}
            </button>
            <span className="opacity-40 select-none">•</span>
            <button
              id="footer-disclaimer-btn"
              type="button"
              onClick={() => setAboutModalSection('disclaimer')}
              className="cursor-pointer hover:underline font-bold text-amber-900 dark:text-amber-400 text-[0.5625rem] font-sans"
            >
              {language === 'pb' ? 'ਅਸਵੀਕਾਰਤਾ (Disclaimer)' : language === 'en' ? 'Disclaimer' : 'अस्वीकरण (Disclaimer)'}
            </button>
            <span className="opacity-40 select-none">•</span>
            <button
              id="footer-privacy-policy-btn"
              type="button"
              onClick={() => setAboutModalSection('privacy')}
              className="cursor-pointer hover:underline font-bold text-amber-900 dark:text-amber-400 text-[0.5625rem] font-sans"
            >
              {language === 'pb' ? 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ (Privacy Policy)' : language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति (Privacy Policy)'}
            </button>
          </div>
        </div>
      </footer>
      )}

      {/* 🧭 Compact Floating Quick Scroll Navigation Pill (Lower Bottom-Right Corner) */}
      {showScrollControls && currentView !== 'nitnem-gutka' && (
        <aside
          id="floating-quick-scroll-pill"
          aria-label="Scroll Navigation"
          className="fixed right-2 sm:right-4 bottom-5 sm:bottom-6 z-40 flex flex-col items-center gap-1 p-1 rounded-full bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border border-amber-500/35 shadow-lg transition-all duration-300 animate-fadeIn select-none"
        >
          {/* Scroll To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-amber-500/15 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 border border-amber-500/25 active:scale-95 transition-all cursor-pointer group"
            title={language === 'pb' ? 'ਸਭ ਤੋਂ ਉੱਪਰ ਜਾਓ (Top)' : language === 'en' ? 'Scroll to Top' : 'सबसे ऊपर जाएं (Top)'}
            aria-label="Scroll to Top"
          >
            <ChevronsUp size={14} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Subtle Divider Dot */}
          <div className="w-1 h-1 rounded-full bg-amber-500/40" />

          {/* Scroll To Bottom Button */}
          <button
            type="button"
            onClick={scrollToBottom}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-amber-500/15 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 border border-amber-500/25 active:scale-95 transition-all cursor-pointer group"
            title={language === 'pb' ? 'ਸਭ ਤੋਂ ਹੇਠਾਂ ਜਾਓ (Bottom)' : language === 'en' ? 'Scroll to Bottom' : 'सबसे नीचे जाएं (Bottom)'}
            aria-label="Scroll to Bottom"
          >
            <ChevronsDown size={14} className="shrink-0 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </aside>
      )}

      {/* PWA App Install Guidance Modal */}
      <AnimatePresence>
        {showInstallModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md animate-fade-in">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.accentGold,
              }}
              className="w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                  borderColor: theme.accentGold,
                }}
                className="p-4 sm:p-5 flex items-center justify-between gap-3 border-b shrink-0"
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{
                      backgroundColor: theme.mode === 'mystic_dark' ? '#18130E' : '#FEF3C7',
                      borderColor: theme.mode === 'mystic_dark' ? '#F59E0B' : '#FCD34D',
                    }}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0"
                  >
                    <Smartphone 
                      className="w-5 h-5" 
                      style={{ color: theme.mode === 'mystic_dark' ? '#F59E0B' : '#B45309' }} 
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-base sm:text-lg font-black font-serif tracking-wide leading-tight"
                      style={{ color: theme.buttonPrimaryText }}
                    >
                      {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਐਪ ਇੰਸਟਾਲ ਕਰੋ' : language === 'en' ? 'Install Saheb World App' : 'साहेब वर्ल्ड ऐप फोन में इनस्टॉल करें'}
                    </h3>
                    <p 
                      className="text-[0.6875rem] sm:text-xs font-medium opacity-90"
                      style={{ color: theme.buttonPrimaryText }}
                    >
                      {language === 'pb' ? 'ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਸਹਿਜ ਸਵਾਧਿਆਏ ਲਈ' : language === 'en' ? 'For uninterrupted offline spiritual reading' : 'बिना इंटरनेट सहज स्वाध्याय हेतु 1-क्लिक गाइड'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowInstallModal(false)}
                  className="p-2 rounded-full hover:bg-black/15 transition cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" style={{ color: theme.buttonPrimaryText }} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-left">
                {/* Instant Feedback Toast */}
                {installFeedbackToast && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-950 dark:text-emerald-200 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{installFeedbackToast}</span>
                  </motion.div>
                )}

                {/* 1. Android Home Screen Icon Preview & 1-Tap WebAPK Install Card */}
                <div 
                  style={{ 
                    backgroundColor: theme.mode === 'mystic_dark' ? '#18130E' : theme.stepActiveBg, 
                    borderColor: theme.mode === 'mystic_dark' ? '#F59E0B' : theme.accentGold 
                  }}
                  className="p-4 sm:p-5 rounded-2xl border-2 text-center shadow-sm space-y-3.5"
                >
                  {/* Realistic Android Home Screen Tile Preview */}
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[22px] overflow-hidden border-2 border-amber-600/50 bg-white shadow-lg flex items-center justify-center">
                      <img
                        src="/pwa-maskable-512x512.png"
                        alt="Saheb World App Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="text-[0.6875rem] font-bold tracking-tight"
                      style={{ color: theme.mode === 'mystic_dark' ? '#FDE68A' : theme.textPrimary }}
                    >
                      Saheb World
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-black font-serif" style={{ color: theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.sacredMaroon }}>
                      {language === 'pb' ? 'Android ਹੋਮ ਸਕ੍ਰੀਨ ਐਪ (WebAPK)' : language === 'en' ? 'Android App Icon Install (WebAPK)' : 'असली ऐप आइकन के साथ Android इंस्टॉलेशन'}
                    </h4>
                    <p className="text-xs text-amber-800 dark:text-amber-300 font-serif font-medium mt-0.5 leading-relaxed">
                      {language === 'pb' 
                        ? 'Chrome ਰਾਹੀਂ ਸਿੱਧਾ ਫੋਨ ਦੇ ਐਪ ਡਰਾਅਰ ਵਿੱਚ ਆਈਕਨ ਸਹਿਤ ਜੁੜਦਾ ਹੈ — ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ੧੦੦% ਚੱਲੇਗਾ' 
                        : language === 'en' 
                        ? 'Installs via Chrome WebAPK directly into your Android App Drawer with the Golden Chakra icon and 100% offline support.' 
                        : 'Chrome का WebAPK आपके फोन के ऐप ड्रॉअर में सतगुरु कबीर साहेब के गोल्डन चक्र आइकन के साथ इंस्टॉल होता है और बिना इंटरनेट 100% चलता है।'}
                    </p>
                  </div>

                  {/* Live Android WebAPK Readiness Checklist */}
                  <div className="rounded-xl border border-amber-600/20 bg-white/70 dark:bg-black/25 divide-y divide-amber-600/15 text-left text-xs font-serif">
                    <div className="px-3 py-2 flex items-center justify-between gap-2">
                      <span style={{ color: theme.textSecondary }}>
                        {language === 'pb' ? 'ਬ੍ਰਾਊਜ਼ਰ ਵਿੰਡੋ' : language === 'en' ? 'Browser Window' : 'ब्राउज़र विंडो'}
                      </span>
                      <span className={`font-bold ${!isRunningInIframe ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-800 dark:text-amber-300'}`}>
                        {!isRunningInIframe
                          ? language === 'pb'
                            ? 'ਸਿੱਧੇ Chrome ਵਿੱਚ ਖੁੱਲ੍ਹਾ'
                            : language === 'en'
                            ? 'Top-Level Ready'
                            : 'सीधे Chrome में खुला'
                          : language === 'pb'
                          ? 'ਪ੍ਰੀਵਿਊ ਫ੍ਰੇਮ — Chrome ਖੋਲ੍ਹੋ'
                          : language === 'en'
                          ? 'Preview Frame — Open Chrome'
                          : 'प्रीव्यू फ्रेम — नीचे Chrome बटन दबाएं'}
                      </span>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between gap-2">
                      <span style={{ color: theme.textSecondary }}>
                        {language === 'pb' ? 'ਚੱਕਰ ਆਈਕਨ ਤੇ ਮੈਨੀਫੈਸਟ' : language === 'en' ? 'Chakra Icon & Manifest' : 'गोल्डन चक्र आइकन व मैनिफेस्ट'}
                      </span>
                      <span className={`font-bold ${isManifestVerified ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-300'}`}>
                        {isManifestVerified
                          ? language === 'pb'
                            ? 'ਤਸਦੀਕਸ਼ੁਦਾ ✓'
                            : language === 'en'
                            ? 'Verified'
                            : 'सत्यापित ✓'
                          : language === 'pb'
                          ? 'ਜਾਂਚ ਜਾਰੀ...'
                          : language === 'en'
                          ? 'Checking...'
                          : 'तैयार हो रहा है'}
                      </span>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between gap-2">
                      <span style={{ color: theme.textSecondary }}>
                        {language === 'pb' ? 'ਔਫਲਾਈਨ ਭੰਡਾਰ' : language === 'en' ? 'Offline Storage' : 'ऑफ़लाइन भंडार'}
                      </span>
                      <span className={`font-bold ${isOfflineReady ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-300'}`}>
                        {isOfflineReady
                          ? language === 'pb'
                            ? 'ਤਿਆਰ (100% ਔਫਲਾਈਨ) ✓'
                            : language === 'en'
                            ? 'Ready (100% Offline)'
                            : 'सक्रिय ✓'
                          : language === 'pb'
                          ? 'ਸੇਵ ਹੋ ਰਿਹਾ ਹੈ...'
                          : language === 'en'
                          ? 'Caching...'
                          : 'सहेजा जा रहा है'}
                      </span>
                    </div>
                  </div>

                  {/* Sandbox / Direct Install Action Guidance */}
                  {(isRunningInIframe || (!deferredPrompt && !isInstallable)) && (
                    <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-left text-xs font-serif space-y-1">
                      <div className="flex items-center gap-1.5 font-black text-amber-900 dark:text-amber-300">
                        <Info className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0" />
                        <span>
                          {isIOSDevice && !isAndroidDevice
                            ? (language === 'pb' ? 'iPhone / Safari ਸੂਚਨਾ' : language === 'en' ? 'iPhone / iPad Safari Guide' : 'iPhone (Safari) हेतु निर्देश:')
                            : (language === 'pb' ? 'Android Chrome ਵਿੱਚ ਇੰਸਟਾਲ ਵਿਧੀ' : language === 'en' ? 'How to Get App Icon on Android:' : 'App Icon के साथ इंस्टॉल करने का सही तरीका:')}
                        </span>
                      </div>
                      <p className="text-[0.6875rem] text-amber-950/85 dark:text-amber-200/90 leading-relaxed">
                        {isIOSDevice && !isAndroidDevice
                          ? (language === 'pb'
                              ? 'Safari ਵਿੱਚ ਹੇਠਾਂ Share ਬਟਨ ਦਬਾ ਕੇ "Add to Home Screen" ਚੁਣੋ।'
                              : language === 'en'
                              ? 'Tap Share in Safari toolbar below and select "Add to Home Screen".'
                              : 'Safari में नीचे दिए Share बटन पर टैप करके "Add to Home Screen" चुनें।')
                          : (language === 'pb'
                              ? 'ਪ੍ਰੀਵਿਊ ਵਿੰਡੋ ਤੋਂ ਬਾਹਰ ਸਿੱਧਾ Android Chrome ਵਿੱਚ ਖੋਲ੍ਹ ਕੇ "Install App" ਤੇ ਟੈਪ ਕਰੋ।'
                              : language === 'en'
                              ? 'Open this page directly in Android Chrome (outside preview frame) — then tap Install App (not Add to Home Screen shortcut).'
                              : 'नीचे दिए "सीधे Chrome में खोलें" बटन से ऐप को बाहर Android Chrome में खोलें, फिर नीचे पॉप-अप में या ⋮ मेनू से "Install App" दबाएं — आइकन सहित असली ऐप डाउनलोड होगा।')}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons (Declarative links — zero window.open blockers) */}
                  <div className="space-y-2.5">
                    {(deferredPrompt || isInstallable) ? (
                      <button
                        type="button"
                        onClick={handleInstallClick}
                        style={{ 
                          backgroundColor: theme.buttonPrimaryBg, 
                          color: theme.buttonPrimaryText 
                        }}
                        className="w-full min-h-[44px] py-3.5 px-4 rounded-xl font-bold font-serif text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition cursor-pointer whitespace-nowrap"
                      >
                        <Download className="w-5 h-5 shrink-0" />
                        <span>{language === 'pb' ? 'ਹੁਣੇ ਫੋਨ ਵਿੱਚ ਐਪ ਇੰਸਟਾਲ ਕਰੋ' : language === 'en' ? 'Install Saheb World (With Icon)' : 'ऐप इनस्टॉल करें (App Icon सहित)'}</span>
                      </button>
                    ) : (
                      <a
                        href={getInstallHandoffUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setInstallFeedbackToast(
                            language === 'pb'
                              ? '✓ ਕ੍ਰੋਮ ਵਿੱਚ ਖੋਲ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ! ਹੇਠਾਂ "Install" ਜਾਂ ਉੱਪਰ ⋮ -> "Install App" ਚੁਣੋ।'
                              : language === 'en'
                              ? '✓ Opening in Chrome! Look for the bottom Install bar or tap ⋮ -> "Install App".'
                              : '✓ सीधे Chrome में खोला जा रहा है! वहां नीचे आए बटन या ⋮ मेनू से "Install App" दबाएं।'
                          );
                        }}
                        style={{ 
                          backgroundColor: theme.buttonPrimaryBg, 
                          color: theme.buttonPrimaryText 
                        }}
                        className="w-full min-h-[44px] py-3.5 px-4 rounded-xl font-bold font-serif text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition cursor-pointer text-center no-underline whitespace-nowrap"
                      >
                        <ExternalLink className="w-5 h-5 shrink-0" />
                        <span>
                          {language === 'pb' 
                            ? 'Chrome ਵਿੱਚ ਖੋਲ੍ਹੋ ਤੇ ਇੰਸਟਾਲ ਕਰੋ' 
                            : language === 'en' 
                            ? 'Open in Chrome & Install App' 
                            : 'सीधे Chrome में खोलें (App Icon)'}
                        </span>
                      </a>
                    )}

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                      {isAndroidDevice ? (
                        <a
                          href={getAndroidChromeIntentUrl()}
                          onClick={() => sacredHaptics.lightTap()}
                          className="min-h-[44px] py-2.5 px-3 rounded-xl border border-amber-600/35 text-amber-900 dark:text-amber-200 font-bold font-serif text-xs flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer no-underline whitespace-nowrap"
                        >
                          <Smartphone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">
                            {language === 'pb'
                              ? 'Android Chrome ਵਿੱਚ ਬਦਲੋ'
                              : language === 'en'
                              ? 'Switch to Chrome App'
                              : 'Android Chrome में बदलें'}
                          </span>
                        </a>
                      ) : (
                        <a
                          href={getInstallHandoffUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sacredHaptics.lightTap()}
                          className="min-h-[44px] py-2.5 px-3 rounded-xl border border-amber-600/35 text-amber-900 dark:text-amber-200 font-bold font-serif text-xs flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer no-underline whitespace-nowrap"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{language === 'pb' ? 'ਨਵੇਂ ਟੈਬ ਵਿੱਚ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open Standalone Tab' : 'नई टैब में खोलें'}</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={async () => {
                          sacredHaptics.lightTap();
                          const currentUrl = getInstallHandoffUrl();
                          try {
                            await navigator.clipboard.writeText(currentUrl);
                            setIsAppCopied(true);
                            setInstallFeedbackToast(
                              language === 'pb'
                                ? '✓ ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ! ਇਸਨੂੰ ਫ਼ੋਨ ਦੇ Chrome ਵਿੱਚ ਖੋਲ੍ਹੋ।'
                                : language === 'en'
                                ? '✓ Link copied! Open in Chrome on phone.'
                                : '✓ लिंक कॉपी हो गया! इसे फ़ोन के Chrome में खोलें।'
                            );
                            setTimeout(() => {
                              setIsAppCopied(false);
                              setInstallFeedbackToast(null);
                            }, 3500);
                          } catch {}
                        }}
                        className="min-h-[44px] py-2.5 px-3 rounded-xl border border-amber-600/35 text-amber-900 dark:text-amber-200 font-bold font-serif text-xs flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap"
                      >
                        {isAppCopied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                        <span className="truncate">
                          {isAppCopied
                            ? language === 'pb'
                              ? 'ਕਾਪੀ ਹੋਇਆ! ✓'
                              : language === 'en'
                              ? 'Copied!'
                              : 'कॉपी हुआ! ✓'
                            : language === 'pb'
                            ? 'ਲਿੰਕ ਕਾਪੀ ਕਰੋ'
                            : language === 'en'
                            ? 'Copy Link'
                            : 'लिंक कॉपी करें'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[0.6875rem] font-serif pt-1 text-left">
                    <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <span className="font-bold block text-amber-900 dark:text-amber-300">
                        {language === 'pb' ? '100% ਔਫਲਾਈਨ' : language === 'en' ? '100% Offline' : '100% ऑफ़लाइन'}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'pb'
                          ? 'ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਸਾਰੇ ਗ੍ਰੰਥ ਤੇ ਸਾਖੀਆਂ ਚੱਲਣਗੀਆਂ'
                          : language === 'en'
                          ? 'All scriptures & sakhis work without internet'
                          : 'बिना इंटरनेट सभी ग्रंथ व साखियाँ चलेंगी'}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <span className="font-bold block text-amber-900 dark:text-amber-300">
                        {language === 'pb' ? 'ਗੋਲਡਨ ਚੱਕਰ ਆਈਕਨ' : language === 'en' ? 'Golden Chakra Icon' : 'गोल्डन चक्र आइकन'}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'pb'
                          ? 'ਬਿਨਾਂ ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀ ਸਿੱਧਾ ਐਪ ਡਰਾਅਰ ਵਿੱਚ'
                          : language === 'en'
                          ? 'Direct to app drawer without warnings'
                          : 'बिना सुरक्षा चेतावनी सीधे ऐप ड्रॉवर में'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 1B. GitHub Releases Auto-Updated Android APK Download & Update Card (Admin Only) */}
                {isAdmin && <GitHubApkCard language={language} />}

                {/* 2. Step-by-Step Instructions (Android Chrome WebAPK focus) */}
                <div className="space-y-3 pt-1">
                  <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    {language === 'pb' ? 'ਮੋਬਾਈਲ ਗਾਈਡ (ਮਿੰਟਾਂ ਵਿੱਚ)' : language === 'en' ? 'Android Chrome Steps' : 'Android (Chrome) में इंस्टॉल करने के 3 आसान चरण:'}
                  </h5>

                  <div className="p-3.5 rounded-xl border bg-amber-500/5 border-amber-500/20 text-xs space-y-2">
                    <ol className="list-decimal list-inside space-y-1.5 text-gray-700 dark:text-gray-300 font-serif text-xs leading-relaxed">
                      <li>ऊपर <b>"सीधे Chrome में खोलें"</b> बटन दबाएं या दूसरे फोन से नीचे का <b>QR कोड</b> स्कैन करें।</li>
                      <li>यदि Chrome में साइन-इन मांगे तो अपने उसी Google खाते से एक बार लॉगिन होने दें (ताकि ऐप आइकन व डेटा लोड हो सके)।</li>
                      <li>अब Chrome में ऊपर दाईं ओर <b>३ बिंदुओं (⋮)</b> पर दबाकर <b>"Add to Home Screen" → "Install"</b> (अथवा <b>"Install App"</b>) चुनें — कुछ ही सेकंड में <b>Saheb World</b> ऐप आइकन के साथ इंस्टॉल हो जाएगा!</li>
                    </ol>
                  </div>
                </div>

                {/* 3. Scan & Share QR Code Section */}
                <div 
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.accentGold }}
                  className="p-5 rounded-2xl border-2 text-center space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <QrCode className="w-5 h-5 text-amber-600" />
                    <h5 className="text-sm sm:text-base font-black font-serif" style={{ color: theme.sacredMaroon }}>
                      {language === 'pb' ? 'ਕਿਊਆਰ ਕੋਡ ਰਾਹੀਂ ਫੋਨ ਵਿੱਚ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Scan to Open on Android Chrome' : 'मोबाइल कैमरे से स्कैन करके Chrome में खोलें'}
                    </h5>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-white p-3 rounded-2xl shadow-inner border border-amber-500/20">
                      <QRCodeSVG 
                        value={getInstallHandoffUrl()} 
                        size={140}
                        level="H"
                        includeMargin={true}
                        imageSettings={undefined}
                      />
                    </div>
                    <p className="text-[0.6875rem] sm:text-xs font-medium text-gray-600 dark:text-gray-400 max-w-[230px] mx-auto leading-snug">
                      {language === 'pb' 
                        ? 'Android ਫੋਨ ਦੇ ਕੈਮਰੇ ਨਾਲ ਇਸ ਕੋਡ ਨੂੰ ਸਕੈਨ ਕਰਕੇ "Saheb World" ਤੁਰੰਤ ਖੋਲ੍ਹੋ।' 
                        : language === 'en' 
                        ? 'Scan this QR code with your Android phone camera to launch Chrome install flow.' 
                        : 'अपने Android फोन से इस कोड को स्कैन करें — सीधे Chrome इंस्टॉल मोड में खुलेगा।'}
                    </p>

                    {/* Quick Send / Copy / WhatsApp Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-2 w-full">
                      <button
                        type="button"
                        onClick={async () => {
                          sacredHaptics.lightTap();
                          const currentUrl = getAppUrlSync();
                          try {
                            await navigator.clipboard.writeText(currentUrl);
                            setIsAppCopied(true);
                            setInstallFeedbackToast(
                              language === 'pb'
                                ? '✓ ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!'
                                : language === 'en'
                                ? '✓ Link copied!'
                                : '✓ लिंक कॉपी हो गया!'
                            );
                            setTimeout(() => {
                              setIsAppCopied(false);
                              setInstallFeedbackToast(null);
                            }, 3000);
                          } catch {}
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover:bg-amber-400 transition cursor-pointer"
                      >
                        {isAppCopied ? <Check className="w-3.5 h-3.5 text-emerald-950" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isAppCopied ? (language === 'hi' ? 'लिंक कॉपी हो गया!' : language === 'pb' ? 'ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!' : 'Link Copied!') : (language === 'hi' ? 'लिंक कॉपी करें' : language === 'pb' ? 'ਲਿੰਕ ਕਾਪੀ ਕਰੋ' : 'Copy Link')}</span>
                      </button>

                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(getSharePayloadText(language))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover:bg-emerald-500 transition cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{language === 'pb' ? 'WhatsApp ਤੇ ਭੇਜੋ' : language === 'en' ? 'Send on WhatsApp' : 'WhatsApp पर भेजें'}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Assurance */}
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-2 text-xs text-green-900 dark:text-green-300">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <p className="font-medium">
                    {language === 'pb'
                      ? 'ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ ਸਾਰੇ ਗ੍ਰੰਥ ਅਤੇ ਚਿੰਤਨ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਦੇ ਵੀ ਸੁਚਾਰੂ ਚੱਲਣਗੇ।'
                      : language === 'en'
                      ? 'Once installed, all scriptures, daily contemplations, and audio work offline anytime.'
                      : 'इनस्टॉल होने के उपरांत सभी ग्रन्थ, दैनिक चिंतन और ऑडियो बिना इंटरनेट भी निर्बाध चलेंगे।'}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-gray-100 dark:bg-zinc-800/80 border-t border-gray-200 dark:border-zinc-700 text-center shrink-0">
                <button
                  onClick={() => setShowInstallModal(false)}
                  className="px-6 py-2 rounded-xl bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 transition text-xs font-bold cursor-pointer"
                >
                  {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'समझ गए (बंद करें)'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Separate About Us or Disclaimer Modal */}
      <AboutDisclaimerModal
        isOpen={aboutModalSection !== null}
        onClose={() => setAboutModalSection(null)}
        language={language}
        onSelectLanguage={onSelectLanguage}
        section={aboutModalSection || 'about'}
      />

      {/* Kar Nainon Deedar 32 Verses Interactive Modal */}
      {showKarNainonDeedarModal && (
        <KarNainonDeedarModal
          language={language}
          onClose={() => setShowKarNainonDeedarModal(false)}
        />
      )}

      {/* Santo Shabdai Shabd Bakhana Modal */}
      {showSantoShabdaiShabdModal && (
        <SantoShabdaiShabdModal
          language={language}
          onClose={() => setShowSantoShabdaiShabdModal(false)}
        />
      )}

      {/* RATE SAHEB WORLD MODAL */}
      <AnimatePresence>
        {showRateModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="max-md w-full max-w-md p-6 rounded-3xl border-2 shadow-2xl text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black font-serif text-amber-900 dark:text-amber-200">
                  {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਨੂੰ ਰੇਟ ਕਰੋ' : language === 'en' ? 'Rate Saheb World' : 'साहेब वर्ल्ड को रेट करें'}
                </h3>
                <p className="text-xs font-serif opacity-80" style={{ color: theme.textSecondary }}>
                  {language === 'pb' ? 'ਤੁਹਾਡਾ ਅਧਿਆਤਮਿਕ ਅਨੁਭਵ ਸਾਡੇ ਲਈ ਅਨਮੋਲ ਹੈ।' : language === 'en' ? 'Your spiritual experience matters immensely to us.' : 'सतगुरु कबीर साहेब की वाणी से ओतप्रोत इस पावन सेवा को अपनी रेटिंग दें।'}
                </p>
              </div>

              {ratingGiven ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-serif font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{language === 'pb' ? 'ਧੰਨਵਾਦ! ਪਾਵਨ ਰੇਟਿੰਗ ਦਰਜ ਹੋ ਗਈ।' : language === 'en' ? 'Thank you for your rating!' : 'धन्यवाद! आपकी पावन रेटिंग दर्ज हो गई।'}</span>
                </div>
              ) : (
                <div className="flex justify-center gap-2 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRatingGiven(true)}
                      className="p-2 hover:scale-125 transition-transform cursor-pointer text-amber-500"
                    >
                      <Star className="w-8 h-8 fill-amber-500" />
                    </button>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowRateModal(false);
                  setRatingGiven(false);
                }}
                className="w-full py-2.5 rounded-xl border font-bold font-serif transition active:scale-95 cursor-pointer"
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
              >
                {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Advanced Reading Suite Standalone Modal */}
      <AdvancedReadingSuiteModal
        isOpen={showReadingSuiteModal}
        onClose={() => setShowReadingSuiteModal(false)}
        language={language}
      />

      {/* Language Diagnostics & Audit Modal */}
      <LanguageDiagnostics
        isOpen={showLanguageDiagnostics}
        onClose={() => setShowLanguageDiagnostics(false)}
      />

      {/* 🎙️ Voice Command Response Toast */}
      {voiceToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[150] bg-[#8B2500] text-white px-5 py-2.5 rounded-2xl shadow-2xl border border-amber-400/35 backdrop-blur-md font-serif font-bold text-xs sm:text-sm animate-bounce flex items-center gap-2">
          <Mic className="w-4 h-4 text-white animate-pulse" />
          <span>{voiceToast}</span>
        </div>
      )}


      {/* Compact Bottom-Centered Android Chrome WebAPK Auto-Install Bar (Top-level, Non-standalone only) */}
      {!pwaInIframe &&
        !pwaStandalone &&
        !isAppInstalled &&
        !dismissedBottomInstallBar &&
        (isInstallable || (hasInstallIntent && !isIOSDevice)) && (
          <div
            role="region"
            aria-label="Install Saheb World App"
            className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[160] w-[calc(100%-1.5rem)] max-w-md rounded-2xl border border-amber-500/45 bg-[#FFFDF9]/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-xl px-3 py-2 flex items-center justify-between gap-2.5"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src="/pwa-maskable-192x192.png"
                alt="Saheb World"
                className="w-10 h-10 rounded-xl border border-amber-500/35 shrink-0 bg-white object-cover"
              />
              <div className="min-w-0 text-left">
                <p
                  className="text-xs sm:text-sm font-black font-serif truncate"
                  style={{ color: theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.sacredMaroon }}
                >
                  {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਐਪ ਤਿਆਰ ਹੈ' : language === 'en' ? 'Saheb World App Ready' : 'साहेब वर्ल्ड ऐप तैयार है'}
                </p>
                <p
                  className="text-[11px] font-serif truncate"
                  style={{ color: theme.mode === 'mystic_dark' ? '#FDE68A' : theme.textSecondary }}
                >
                  {isInstallable
                    ? language === 'pb'
                      ? 'ਗੋਲਡਨ ਚੱਕਰ ਆਈਕਨ ਸਹਿਤ 1-ਟੈਪ ਇੰਸਟਾਲ'
                      : language === 'en'
                      ? 'Install with Golden Chakra icon'
                      : 'गोल्डन चक्र आइकन सहित 1-टैप इंस्टॉल'
                    : language === 'pb'
                    ? 'Chrome ⋮ ਮੀਨੂ ਤੋਂ Install App ਚੁਣੋ'
                    : language === 'en'
                    ? 'Tap ⋮ -> Install App in Chrome'
                    : 'Chrome ⋮ मेनू से Install App चुनें'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleInstallClick}
                className="min-h-[44px] px-3 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'pb' ? 'ਇੰਸਟਾਲ' : language === 'en' ? 'Install' : 'इनस्टॉल'}</span>
              </button>
              <button
                type="button"
                aria-label="Dismiss install banner"
                onClick={() => {
                  setDismissedBottomInstallBar(true);
                  try {
                    sessionStorage.setItem('sahebworld_dismiss_install_bar', '1');
                  } catch {
                    // ignore
                  }
                }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
                style={{ color: theme.textSecondary }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      <AdminLoginModal
        isOpen={showAdminLoginModal}
        onClose={() => setShowAdminLoginModal(false)}
        language={language}
        onOpenSettings={onOpenSettings}
      />
    </StyledAppContainer>
  );
};
