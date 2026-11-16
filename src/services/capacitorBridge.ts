import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';

export function isCapacitorAndroid(): boolean {
  try {
    return typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
  } catch {
    return false;
  }
}

export function isCapacitorNative(): boolean {
  try {
    return typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
  } catch {
    return false;
  }
}

/**
 * Registers Android hardware/gesture back button listener when running inside the compiled APK.
 * Returns a cleanup callback. No-ops safely inside web browsers.
 */
export function registerAndroidBackHandler(onBackPressed: () => boolean): () => void {
  if (!isCapacitorNative()) {
    return () => {};
  }

  let removed = false;
  let listenerHandle: { remove: () => Promise<void> } | null = null;

  CapApp.addListener('backButton', ({ canGoBack }) => {
    const handled = onBackPressed();
    if (handled) return;
    if (canGoBack && typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      CapApp.minimizeApp().catch(() => {
        CapApp.exitApp().catch(() => {});
      });
    }
  })
    .then((handle) => {
      if (removed) {
        handle.remove().catch(() => {});
      } else {
        listenerHandle = handle;
      }
    })
    .catch(() => {});

  return () => {
    removed = true;
    listenerHandle?.remove().catch(() => {});
  };
}
