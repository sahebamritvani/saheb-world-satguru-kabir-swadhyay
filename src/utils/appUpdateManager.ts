/**
 * Automatic Zero-Effort App Update & Safe Cache Manager for Saheb World.
 * Preserves ALL user Sadhana, Haziri, Diary, Auth, IndexedDB, and offline scripture caches
 * during automatic background reloads, and refreshes static/scripture caches safely on manual request.
 */

const SW_RELOAD_GUARD_KEY = 'sahebworld_sw_controller_reloaded';
const VERSION_RELOAD_GUARD_KEY = 'sahebworld_version_reloaded_build';
const OFFLINE_SCRIPTURE_CACHE_V3 = 'sahebworld-sacred-scriptures-v3';
const OFFLINE_SCRIPTURE_CACHE_V2 = 'sahebworld-sacred-scriptures-v2';
const OFFLINE_PINNED_AUDIO_CACHE = 'sahebworld-pinned-audio-v1';
const OFFLINE_CHAPTER_LRU_KEY = 'sahebworld_offline_chapter_lru_v1';

let activeSwRegistration: ServiceWorkerRegistration | null = null;
let isReloadPending = false;
let isCheckingVersion = false;
let lastVersionCheckAt = 0;

export interface VersionManifest {
  version: string;
  versionCode?: number;
  buildId: string;
  builtAt?: string;
}

export function setActiveSwRegistration(registration: ServiceWorkerRegistration | undefined): void {
  if (registration) {
    activeSwRegistration = registration;
  }
}

export function getCurrentBuildId(): string {
  try {
    return typeof __BUILD_ID__ === 'string' && __BUILD_ID__ ? __BUILD_ID__ : 'dev';
  } catch {
    return 'dev';
  }
}

/**
 * Deletes only stale static/Workbox caches.
 * By default (`includeScriptureCache: false`), `offlineScriptureCache` (`sahebworld-sacred-scriptures-v3`)
 * and `sahebworld-pinned-audio-v1` are 100% preserved.
 */
export async function clearStaleStaticCaches(options?: { includeScriptureCache?: boolean }): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window)) return;

  const includeScriptureCache = Boolean(options?.includeScriptureCache);

  try {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => {
          if (key === OFFLINE_PINNED_AUDIO_CACHE) return false;
          if (key === OFFLINE_SCRIPTURE_CACHE_V3) return includeScriptureCache;

          return (
            key === OFFLINE_SCRIPTURE_CACHE_V2 ||
            key.includes('workbox') ||
            key.startsWith('sahebworld-app-shell') ||
            key.startsWith('sahebworld-html-shell') ||
            key.startsWith('sahebworld-static-assets') ||
            key.startsWith('sahebworld-api-config') ||
            key.startsWith('sahebworld-version-check')
          );
        })
        .map((key) => caches.delete(key).catch(() => false))
    );

    if (includeScriptureCache) {
      try {
        localStorage.removeItem(OFFLINE_CHAPTER_LRU_KEY);
      } catch {
        // Ignore storage errors gracefully
      }
    }
  } catch {
    // Ignore CacheStorage errors gracefully
  }
}

/**
 * Triggers a clean single reload guarded by sessionStorage so reload loops can never occur.
 */
export function performGuardedReload(guardKey: string, guardValue = '1'): boolean {
  if (typeof window === 'undefined' || isReloadPending) return false;

  try {
    const previousGuard = sessionStorage.getItem(guardKey);
    if (previousGuard === guardValue) {
      return false;
    }
    sessionStorage.setItem(guardKey, guardValue);
  } catch {
    // Fallback to in-memory lock if sessionStorage is restricted
  }

  isReloadPending = true;
  window.location.reload();
  return true;
}

/**
 * Silently checks /version.json against the running bundle's __BUILD_ID__ and triggers SW update.
 * If a newer build is detected while online, clears stale static shell caches (keeping offlineScriptureCache
 * and all user Sadhana/Haziri data intact) and performs a single guarded reload.
 */
export async function checkForNewBuildVersion(force = false): Promise<{
  updated: boolean;
  offline?: boolean;
  remoteBuildId?: string;
}> {
  if (typeof window === 'undefined' || !import.meta.env.PROD) {
    return { updated: false };
  }
  if (!navigator.onLine) {
    return { updated: false, offline: true };
  }

  const now = Date.now();
  if (!force && (isCheckingVersion || now - lastVersionCheckAt < 30_000)) {
    return { updated: false };
  }

  isCheckingVersion = true;
  lastVersionCheckAt = now;

  try {
    if (activeSwRegistration) {
      activeSwRegistration.update().catch(() => {});
    } else if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistration()
        .then((reg) => reg?.update().catch(() => {}))
        .catch(() => {});
    }

    const res = await fetch(`/version.json?t=${now}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
      },
    });

    if (!res.ok) {
      return { updated: false };
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return { updated: false };
    }

    const manifest = (await res.json()) as Partial<VersionManifest>;
    const currentBuildId = getCurrentBuildId();

    if (
      manifest?.buildId &&
      currentBuildId !== 'dev' &&
      manifest.buildId !== currentBuildId
    ) {
      await clearStaleStaticCaches({ includeScriptureCache: false });
      const reloaded = performGuardedReload(VERSION_RELOAD_GUARD_KEY, manifest.buildId);
      return { updated: reloaded, remoteBuildId: manifest.buildId };
    }

    return { updated: false, remoteBuildId: manifest?.buildId };
  } catch {
    return { updated: false };
  } finally {
    isCheckingVersion = false;
  }
}

/**
 * Registers automatic background version check listeners on visibility, focus, and network reconnect.
 */
export function initAutoUpdateListeners(): () => void {
  if (typeof window === 'undefined' || !import.meta.env.PROD) {
    return () => {};
  }

  const bootTimer = window.setTimeout(() => {
    checkForNewBuildVersion(false).catch(() => {});
  }, 2500);

  const handleVisibility = () => {
    if (document.visibilityState === 'visible') {
      checkForNewBuildVersion(false).catch(() => {});
    }
  };

  const handleFocusOrOnline = () => {
    checkForNewBuildVersion(false).catch(() => {});
  };

  document.addEventListener('visibilitychange', handleVisibility);
  window.addEventListener('focus', handleFocusOrOnline);
  window.addEventListener('online', handleFocusOrOnline);

  return () => {
    window.clearTimeout(bootTimer);
    document.removeEventListener('visibilitychange', handleVisibility);
    window.removeEventListener('focus', handleFocusOrOnline);
    window.removeEventListener('online', handleFocusOrOnline);
  };
}

/**
 * Manual one-tap update check for SettingsModal ('नया ज्ञान अपडेट जांचें').
 * Clears stale static caches & refreshes scripture snapshots from the server while preserving
 * all user diary, Haziri, Sadhana, bookmarks, settings, and pinned audio records.
 */
export async function manualCheckAndReloadUpdates(): Promise<'reloading' | 'offline'> {
  if (typeof window === 'undefined') return 'offline';
  if (!navigator.onLine) {
    return 'offline';
  }

  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations().catch(() => []);
      await Promise.all(
        regs.map(async (reg) => {
          try {
            await reg.update();
          } catch {}
          try {
            await reg.unregister();
          } catch {}
        })
      );
    }

    await clearStaleStaticCaches({ includeScriptureCache: true });

    try {
      sessionStorage.removeItem(SW_RELOAD_GUARD_KEY);
      sessionStorage.removeItem(VERSION_RELOAD_GUARD_KEY);
    } catch {}
  } catch {
    // Proceed with reload cleanly
  }

  window.location.reload();
  return 'reloading';
}

/**
 * Ensures '/' and '/index.html' are warmed into 'sahebworld-html-shell' after SW registration
 * so immediate offline Airplane Mode works seamlessly even before a second online visit.
 */
export async function warmAppShellOfflineFallback(): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window) || !navigator.onLine) return;
  try {
    const cache = await caches.open('sahebworld-html-shell');
    const urls = ['/', '/index.html'];
    await Promise.all(
      urls.map(async (u) => {
        try {
          const existing = await cache.match(u);
          if (!existing) {
            const resp = await fetch(u, { cache: 'no-cache' });
            if (resp.ok) {
              await cache.put(u, resp.clone());
            }
          }
        } catch {}
      })
    );
  } catch {}
}

export { SW_RELOAD_GUARD_KEY };
