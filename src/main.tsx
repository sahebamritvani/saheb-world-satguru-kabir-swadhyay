import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { offlineScriptureCache } from './services/offlineScriptureCache';
import {
  SW_RELOAD_GUARD_KEY,
  clearStaleStaticCaches,
  getCurrentBuildId,
  performGuardedReload,
  setActiveSwRegistration,
  warmAppShellOfflineFallback,
} from './utils/appUpdateManager';

// Global safety catchers registered BEFORE any SW/audio initialization
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const msg = String(event.reason?.message || event.reason || '');
    const name = String(event.reason?.name || '');
    if (
      name === 'NotAllowedError' ||
      name === 'SecurityError' ||
      msg.includes('user gesture') ||
      msg.includes('IndexedDB') ||
      msg.includes('ServiceWorker') ||
      msg.includes('service worker')
    ) {
      event.preventDefault();
    }
  });

  window.addEventListener('error', (event) => {
    const msg = String(event.message || '');
    if (msg.includes('SecurityError') || msg.includes('ServiceWorker') || msg.includes('service worker')) {
      event.preventDefault();
    }
  });

  // Clean recovery if a dynamic Vite chunk fails to load after a new deployment
  window.addEventListener('vite:preloadError', () => {
    clearStaleStaticCaches({ includeScriptureCache: false })
      .catch(() => {})
      .finally(() => {
        performGuardedReload('sahebworld_preload_reloaded', getCurrentBuildId());
      });
  });
}

// In DEV mode, unregister any leftover Service Workers so preview reload is always fresh & never stuck
if (typeof window !== 'undefined' && !import.meta.env.PROD && 'serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        reg.unregister().catch(() => {});
      });
    }).catch(() => {});
    clearStaleStaticCaches({ includeScriptureCache: false }).catch(() => {});
  } catch {}
}

// Initialize persistent PWA Service Worker cleanly in production with automatic silent update reload
if (typeof window !== 'undefined' && import.meta.env.PROD && 'serviceWorker' in navigator) {
  try {
    let hadController = Boolean(navigator.serviceWorker.controller);

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // Ignore the initial controller claim on a brand-new first visit
      if (!hadController) {
        hadController = true;
        return;
      }
      // A newer Service Worker activated via skipWaiting + clientsClaim: reload cleanly once
      performGuardedReload(SW_RELOAD_GUARD_KEY, getCurrentBuildId());
    });

    const updateSW = registerSW({
      immediate: true,
      onRegisteredSW(_swUrl, registration) {
        setActiveSwRegistration(registration);
        warmAppShellOfflineFallback().catch(() => {});
        if (registration && navigator.onLine) {
          registration.update().catch(() => {});
        }
      },
      onOfflineReady() {
        try {
          localStorage.setItem('sahebworld_sw_offline_ready', '1');
          localStorage.setItem('sahebworld_offline_cached_at', new Date().toISOString());
        } catch {}
        window.dispatchEvent(new CustomEvent('sahebworld:pwa-offline-ready', { detail: { ready: true } }));
      },
      onNeedRefresh() {
        try {
          updateSW(true).catch(() => {});
        } catch {}
      },
      onRegisterError() {
        // Ignore restricted sandbox frame error gracefully
      },
    });
  } catch {
    // Ignore restricted sandbox frame error gracefully
  }
}

// Pre-warm offline scripture manifest cache on boot
if (typeof window !== 'undefined') {
  offlineScriptureCache.initializeCache().catch(() => {});
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}
