import { useEffect, useState, useCallback } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

// Capture beforeinstallprompt globally even before React mounts
let globalDeferredPrompt: BeforeInstallPromptEvent | null = null;
const promptListeners = new Set<(e: BeforeInstallPromptEvent | null) => void>();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    globalDeferredPrompt = e as BeforeInstallPromptEvent;
    promptListeners.forEach((cb) => cb(globalDeferredPrompt));
  });

  window.addEventListener('appinstalled', () => {
    globalDeferredPrompt = null;
    promptListeners.forEach((cb) => cb(null));
  });
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
    () => globalDeferredPrompt
  );
  const [isInstalled, setIsInstalled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    );
  });
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [isChrome, setIsChrome] = useState<boolean>(false);
  const [hasInstallIntent, setHasInstallIntent] = useState<boolean>(false);
  const [isManifestVerified, setIsManifestVerified] = useState<boolean>(false);
  const [isOfflineReady, setIsOfflineReady] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sahebworld_sw_offline_ready') === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua));
    setIsAndroid(/android/.test(ua));
    setIsChrome(/chrome|crios|edga/.test(ua) && !/samsungbrowser|ucbrowser|opr\//.test(ua));

    // Read one-time ?install=sahebworld handoff param cleanly
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('install') === 'sahebworld') {
        setHasInstallIntent(true);
        urlParams.delete('install');
        const nextQuery = urlParams.toString();
        const cleanedUrl =
          window.location.pathname + (nextQuery ? `?${nextQuery}` : '') + window.location.hash;
        window.history.replaceState({}, '', cleanedUrl);
      }
    } catch {
      // ignore URL parsing issues
    }

    const checkStandalone = () => {
      const standalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true;
      setIsInstalled(standalone);
    };
    checkStandalone();

    const syncPrompt = (promptEvent: BeforeInstallPromptEvent | null) => {
      setDeferredPrompt(promptEvent);
    };
    promptListeners.add(syncPrompt);

    const handleAppInstalled = () => {
      globalDeferredPrompt = null;
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    const handleOfflineReady = () => {
      setIsOfflineReady(true);
    };

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((reg) => {
          if (reg?.active) setIsOfflineReady(true);
        })
        .catch(() => {});
    }

    // Verify Web App Manifest + maskable/any icons load cleanly with session credentials
    const verifyManifest = async () => {
      try {
        const manifestLink = document.querySelector('link[rel="manifest"]')?.getAttribute('href') || '/manifest.webmanifest';
        const res = await fetch(manifestLink, { credentials: 'include' });
        if (!res.ok) return;
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('json') && !ct.includes('manifest')) return;
        const data = await res.json();
        const icons = Array.isArray(data?.icons) ? data.icons : [];
        const has192 = icons.some((i: any) => String(i?.sizes).includes('192x192'));
        const has512 = icons.some((i: any) => String(i?.sizes).includes('512x512'));
        const hasMaskable = icons.some((i: any) => String(i?.purpose).includes('maskable'));
        if (has192 && has512 && hasMaskable && data?.display === 'standalone') {
          setIsManifestVerified(true);
        }
      } catch {
        // Offline or network blocked
      }
    };
    verifyManifest();

    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('sahebworld:pwa-offline-ready', handleOfflineReady);

    return () => {
      promptListeners.delete(syncPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('sahebworld:pwa-offline-ready', handleOfflineReady);
    };
  }, []);

  const install = useCallback(async () => {
    const activePrompt = deferredPrompt || globalDeferredPrompt;
    if (!activePrompt) return false;
    try {
      await activePrompt.prompt();
      const { outcome } = await activePrompt.userChoice;
      if (outcome === 'accepted') {
        globalDeferredPrompt = null;
        setDeferredPrompt(null);
        setIsInstalled(true);
        return true;
      }
    } catch {
      // Prompt dismissed or restricted
    }
    return false;
  }, [deferredPrompt]);

  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    isAndroid,
    isChrome,
    isInIframe,
    isOfflineReady,
    isManifestVerified,
    hasInstallIntent,
    install,
  };
}
