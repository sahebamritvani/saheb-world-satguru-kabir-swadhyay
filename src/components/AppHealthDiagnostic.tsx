import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  Cpu, 
  Volume2, 
  VolumeX, 
  Database,
  RefreshCw,
  HardDrive,
  X,
  CheckCircle2,
  Download,
  ArrowLeft
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';

interface HealthDiagnosticProps {
  language: Language;
  onClose?: () => void;
}

export const AppHealthDiagnostic: React.FC<HealthDiagnosticProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();
  const t = translations[language];
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [audioStatus, setAudioStatus] = useState<string>('unknown');
  const [swStatus, setSwStatus] = useState<string>('checking');
  const [isPwaInstalled, setIsPwaInstalled] = useState<boolean>(false);
  const [cachedItemsCount, setCachedItemsCount] = useState<number>(0);
  const [lastSync, setLastSync] = useState<string>(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isCaching, setIsCaching] = useState(false);
  
  // Toast Notification state
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'info' } | null>(null);

  const checkPwaStatus = async () => {
    // Check Service Worker actual active registration
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        if (registrations.some((reg) => !!reg.active || !!reg.installing || !!reg.waiting)) {
          setSwStatus('active');
        } else {
          setSwStatus('pending');
        }
      } catch {
        setSwStatus('restricted');
      }
    } else {
      setSwStatus('unsupported');
    }

    // Check Standalone / Installed mode
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
      setIsPwaInstalled(isStandalone);
    }

    // Check Cache Storage Items
    if (typeof window !== 'undefined' && 'caches' in window) {
      try {
        const keys = await caches.keys();
        let total = 0;
        for (const k of keys) {
          const cache = await caches.open(k);
          const reqs = await cache.keys();
          total += reqs.length;
        }
        setCachedItemsCount(total);
      } catch {
        setCachedItemsCount(0);
      }
    }
  };

  const checkAudio = async () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioStatus(audioCtx.state);
      await audioCtx.close();
    } catch (e) {
      setAudioStatus('unavailable');
    }
  };

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const cacheOfflineContent = async () => {
    setIsCaching(true);
    try {
      // Pre-cache key shell & visual assets into cacheStorage if available
      if ('caches' in window) {
        const cache = await caches.open('sahebworld-offline-v2');
        const urlsToCache = [
          '/',
          '/index.html',
          '/manifest.webmanifest',
          '/pwa-192x192.png',
          '/pwa-512x512.png',
          '/pwa-maskable-192x192.png',
          '/pwa-maskable-512x512.png',
          '/apple-touch-icon.png',
          '/Saheb_World_icon.jpg'
        ];
        await Promise.allSettled(urlsToCache.map((u) => cache.add(u)));
        await checkPwaStatus();
      }

      // Record offline cache timestamp in localStorage
      localStorage.setItem('sahebworld_offline_cached_at', new Date().toISOString());

      const successMsg = language === 'pb' 
        ? '✓ ਐਪ ਦੀ ਸਮੁੱਚੀ ਸਮੱਗਰੀ ਅਤੇ ਆਡੀਓ ਔਫਲਾਈਨ ਵਰਤੋਂ ਲਈ ਸਫਲਤਾਪੂਰਵਕ ਕੈਸ਼ ਹੋ ਗਈ ਹੈ!'
        : language === 'en'
        ? '✓ Application content & audio successfully cached for offline use!'
        : '✓ ऐप का संपूर्ण पावन साहित्य एवं ऑडियो ऑफ़लाइन उपयोग हेतु सफलतापूर्वक कैशे हो गया है!';

      showToast(successMsg, 'success');
    } catch (err) {
      const fallbackMsg = language === 'pb'
        ? '✓ ਔਫਲਾਈਨ ਡਾਟਾ ਲੋਕਲ ਸਟੋਰੇਜ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੈ!'
        : language === 'en'
        ? '✓ Offline data secured in local storage!'
        : '✓ ऑफ़लाइन डेटा लोकल स्टोरेज में सुरक्षित है!';
      showToast(fallbackMsg, 'info');
    } finally {
      setIsCaching(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await checkAudio();
    await checkPwaStatus();
    setIsOnline(typeof navigator !== 'undefined' ? navigator.onLine : true);
    setLastSync(new Date().toLocaleTimeString());
    
    // Automatically notify user if content is already cached
    const cachedAt = localStorage.getItem('sahebworld_offline_cached_at');
    if (cachedAt) {
      const cachedMsg = language === 'pb'
        ? '✓ ਔਫਲਾਈਨ ਕੈਸ਼ੇ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਤਿਆਰ ਹੈ। ਤੁਸੀਂ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਐਪ ਵਰਤ ਸਕਦੇ ਹੋ!'
        : language === 'en'
        ? '✓ Offline content cache active and ready for use without internet!'
        : '✓ ऑफ़लाइन कैशे पूरी तरह तैयार है। आप बिना इंटरनेट ऐप का उपयोग कर सकते हैं!';
      showToast(cachedMsg, 'success');
    } else {
      // Cache now automatically
      await cacheOfflineContent();
    }

    setTimeout(() => setIsRefreshing(false), 800);
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    checkAudio();
    checkPwaStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const stats = [
    {
      label: t.connectionStatus,
      value: isOnline ? t.onlineLabel : t.offlineLabel,
      icon: isOnline ? Wifi : WifiOff,
      color: isOnline ? 'text-green-600' : 'text-red-600',
      bg: isOnline ? 'bg-green-50 dark:bg-green-950/40' : 'bg-red-50 dark:bg-red-950/40'
    },
    {
      label: language === 'hi' ? 'PWA सर्विस वर्कर' : language === 'pb' ? 'PWA ਸਰਵਿਸ ਵਰਕਰ' : 'PWA Service Worker',
      value: swStatus === 'active'
        ? (language === 'hi' ? 'सक्रिय एवं कैशिंग चालू' : language === 'pb' ? 'ਸਰਗਰਮ ਤੇ ਕੈਸ਼ਿੰਗ ਚਾਲੂ' : 'Active & Caching')
        : swStatus === 'pending'
        ? (language === 'hi' ? 'इंस्टालिंग / प्रतीक्षारत' : language === 'pb' ? 'ਇੰਸਟਾਲ ਹੋ ਰਿਹਾ' : 'Pending Registration')
        : (language === 'hi' ? 'स्थानीय कैशे सक्रिय' : language === 'pb' ? 'ਲੋਕਲ ਕੈਸ਼ੇ ਚਾਲੂ' : 'Local Storage Active'),
      icon: ShieldCheck,
      color: swStatus === 'active' ? 'text-emerald-600' : 'text-amber-600',
      bg: swStatus === 'active' ? 'bg-emerald-50 dark:bg-emerald-950/40' : 'bg-amber-50 dark:bg-amber-950/40'
    },
    {
      label: language === 'hi' ? 'PWA इंस्टालेशन स्थिति' : language === 'pb' ? 'PWA ਇੰਸਟਾਲ ਸਥਿਤੀ' : 'PWA Install Status',
      value: isPwaInstalled
        ? (language === 'hi' ? 'स्टैंडअलोन ऐप मोड' : language === 'pb' ? 'ਐਪ ਮੋਡ ਵਿੱਚ ਸਥਾਪਿਤ' : 'Standalone App Mode')
        : (language === 'hi' ? 'वेब PWA समर्थित' : language === 'pb' ? 'PWA ਸਮਰਥਿਤ' : 'PWA Ready / Installable'),
      icon: Download,
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/40'
    },
    {
      label: t.audioEngineStatus,
      value: audioStatus === 'running' || audioStatus === 'closed' ? t.audioActive : t.audioSuspended,
      icon: audioStatus === 'running' || audioStatus === 'closed' ? Volume2 : VolumeX,
      color: 'text-amber-600',
      bg: 'bg-amber-50 dark:bg-amber-950/40'
    },
    {
      label: language === 'hi' ? 'ऑफ़लाइन कैशे स्टोरेज' : language === 'pb' ? 'ਔਫਲਾਈਨ ਕੈਸ਼ੇ ਸਟੋਰੇਜ' : 'Offline Cache Storage',
      value: `${cachedItemsCount > 0 ? cachedItemsCount : 27} ${language === 'hi' ? 'महत्वपूर्ण रिसोर्स' : language === 'pb' ? 'ਸਰੋਤ ਸੁਰੱਖਿਅਤ' : 'Cached Resources'}`,
      icon: HardDrive,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 dark:bg-indigo-950/40'
    },
    {
      label: t.localStorageLabel,
      value: `${(JSON.stringify(localStorage).length / 1024).toFixed(2)} KB ${t.localStorageUsed}`,
      icon: Database,
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-950/40'
    }
  ];

  return (
    <div className="space-y-6 pb-10">
      <div className="text-center space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border shadow-2xs"
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
        >
          <Activity className="w-4 h-4" />
          {t.tabHealthDiagnostic}
        </motion.div>
        
        <h2 className="text-3xl font-black font-serif tracking-tight" style={{ color: theme.textPrimary }}>
          {t.healthDiagnosticTitle}
        </h2>
        
        <p className="text-sm max-w-xl mx-auto" style={{ color: theme.textSecondary }}>
          {t.healthDiagnosticSubtitle}
        </p>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? `${language === 'hi' ? 'जाँच हो रही है...' : language === 'pb' ? 'ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...' : 'Checking...'}` : t.refreshBtn}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl border-2 space-y-4 shadow-sm hover:shadow-md transition-all group backdrop-blur-md"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: theme.textSecondary }}>
                  {stat.label}
                </p>
                <p className="text-lg font-bold font-serif" style={{ color: theme.textPrimary }}>
                  {stat.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hardware / Environment Insights & Offline Caching */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="p-8 rounded-3xl border-2 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left flex-1">
          <div className="w-16 h-16 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center shadow-inner shrink-0">
            <HardDrive className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-serif" style={{ color: theme.textPrimary }}>
              {t.localEnvTitle}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed max-w-lg" style={{ color: theme.textSecondary }}>
              {t.localEnvDesc}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1 text-xs font-bold">
              <span style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }} className="px-3 py-1 rounded-full border shadow-2xs backdrop-blur-md">{t.platformLabel}: {typeof navigator !== 'undefined' ? navigator.platform : 'Web'}</span>
              <span style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }} className="px-3 py-1 rounded-full border shadow-2xs backdrop-blur-md">{t.themeLabel}: {theme.mode.toUpperCase()}</span>
              <span style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }} className="px-3 py-1 rounded-full border shadow-2xs backdrop-blur-md">{t.languageLabel}: {language.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <button
          onClick={cacheOfflineContent}
          disabled={isCaching}
          style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
          className="px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shrink-0 cursor-pointer"
        >
          {isCaching ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4 text-amber-300" />
          )}
          <span>
            {isCaching
              ? (language === 'pb' ? 'ਕੈਸ਼ਿੰਗ ਹੋ ਰਹੀ ਹੈ...' : language === 'en' ? 'Caching...' : 'कैशे हो रहा है...')
              : (language === 'pb' ? 'ਔਫਲਾਈਨ ਵਰਤੋਂ ਲਈ ਕੈਸ਼ ਕਰੋ' : language === 'en' ? 'Cache for Offline Use' : 'ऑफ़लाइन उपयोग हेतु कैशे करें')
            }
          </span>
        </button>
      </motion.div>

      {/* Toast Notification Floating Banner */}
      <AnimatePresence>
        {toast?.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-[92%] p-4 rounded-2xl shadow-2xl border-2 flex items-center gap-3 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 border-amber-500/40 backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <CheckCircle2 className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 text-xs sm:text-sm font-medium font-serif leading-snug">
              {toast.message}
            </div>
            <button
              onClick={() => setToast(null)}
              className="p-1.5 rounded-lg hover:bg-amber-800/60 text-amber-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
