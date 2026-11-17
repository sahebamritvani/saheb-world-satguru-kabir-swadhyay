import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { offlineScriptureCache } from './services/offlineScriptureCache';

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
}

// Initialize persistent PWA Service Worker cleanly in production (top-level / standalone / permitted frames)
if (typeof window !== 'undefined' && import.meta.env.PROD && 'serviceWorker' in navigator) {
  try {
    const updateSW = registerSW({
      immediate: true,
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
