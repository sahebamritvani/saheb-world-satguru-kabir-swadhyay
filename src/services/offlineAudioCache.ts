/**
 * Saheb World - Offline Audio Pinning & Cache Service
 * Enables devotees to pin/download Admin-published Bhajans, Aartis, and Satsang audio
 * into IndexedDB (plus CacheStorage fallback) for 100% offline playback on phone/PWA/APK.
 */

const DB_NAME = 'SahebWorldOfflineAudioDB';
const DB_VERSION = 1;
const STORE_NAME = 'pinned_audio_blobs';
const CACHE_STORAGE_NAME = 'sahebworld-pinned-audio-v1';
const META_STORAGE_KEY = 'sahebworld_offline_pinned_audio_meta_v1';

export interface OfflineAudioMeta {
  id: string;
  title: string;
  artist?: string;
  category?: string;
  duration?: string;
  mediaUrl: string;
  mimeType: string;
  sizeBytes: number;
  storageMode: 'idb-blob' | 'cache-api';
  pinnedAt: number;
}

interface StoredAudioRecord extends OfflineAudioMeta {
  audioBlob?: Blob;
}

type PinnedListener = (map: Record<string, OfflineAudioMeta>) => void;
const listeners = new Set<PinnedListener>();
const objectUrlCache = new Map<string, string>();

let memoryMetaCache: Record<string, OfflineAudioMeta> = readMetaFromStorage();

function readMetaFromStorage(): Record<string, OfflineAudioMeta> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(META_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeMetaToStorage(next: Record<string, OfflineAudioMeta>): void {
  memoryMetaCache = next;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(META_STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }
  listeners.forEach((cb) => cb(next));
}

function openOfflineDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB is unavailable in this browser'));
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (ev) => {
      const db = (ev.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('IndexedDB open error'));
  });
}

async function putBlobRecord(record: StoredAudioRecord): Promise<void> {
  const db = await openOfflineDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('IndexedDB write failed'));
  });
}

async function getBlobRecord(id: string): Promise<StoredAudioRecord | null> {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(id);
      req.onsuccess = () => resolve((req.result as StoredAudioRecord) || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function deleteBlobRecord(id: string): Promise<void> {
  try {
    const db = await openOfflineDB();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {}
}

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(',');
  const header = parts[0] || '';
  const base64 = parts[1] || '';
  const mimeMatch = header.match(/data:([^;]+);/i);
  const mime = mimeMatch ? mimeMatch[1] : 'audio/mpeg';
  const binaryStr = atob(base64);
  const len = binaryStr.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryStr.charCodeAt(i);
  }
  return new Blob([bytes], { type: mime });
}

export function formatAudioSize(bytes: number): string {
  if (!bytes || bytes <= 0) return 'कैश्ड';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function getPinnedAudioMap(): Record<string, OfflineAudioMeta> {
  return memoryMetaCache;
}

export function isAudioPinnedOffline(id: string): boolean {
  return Boolean(memoryMetaCache[id]);
}

export function subscribeToPinnedAudio(cb: PinnedListener): () => void {
  listeners.add(cb);
  cb(memoryMetaCache);
  return () => {
    listeners.delete(cb);
  };
}

export function getTotalPinnedAudioStats(): { count: number; totalBytes: number } {
  const items = Object.values(memoryMetaCache);
  const totalBytes = items.reduce((acc, item) => acc + (item.sizeBytes || 0), 0);
  return { count: items.length, totalBytes };
}

/**
 * Downloads/caches an Admin-published audio track into IndexedDB (or CacheStorage if no-cors)
 */
export async function pinAudioForOffline(
  input: {
    id: string;
    title: string;
    artist?: string;
    category?: string;
    duration?: string;
    mediaUrl: string;
  },
  onProgress?: (percent: number) => void
): Promise<{ success: boolean; meta?: OfflineAudioMeta; error?: string }> {
  if (!input.mediaUrl) {
    return { success: false, error: 'ऑडियो लिंक उपलब्ध नहीं है।' };
  }

  onProgress?.(5);

  try {
    let audioBlob: Blob | undefined;
    let storageMode: 'idb-blob' | 'cache-api' = 'idb-blob';
    let mimeType = 'audio/mpeg';
    let sizeBytes = 0;

    if (input.mediaUrl.startsWith('data:')) {
      audioBlob = dataUrlToBlob(input.mediaUrl);
      mimeType = audioBlob.type || 'audio/mpeg';
      sizeBytes = audioBlob.size;
      onProgress?.(85);
    } else {
      try {
        const res = await fetch(input.mediaUrl, { mode: 'cors' });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        mimeType = res.headers.get('content-type') || 'audio/mpeg';
        const contentLengthHeader = res.headers.get('content-length');
        const total = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;

        if (res.body && total > 0) {
          const reader = res.body.getReader();
          const chunks: Uint8Array[] = [];
          let received = 0;
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
              chunks.push(value);
              received += value.length;
              onProgress?.(Math.min(92, Math.max(10, Math.round((received / total) * 90))));
            }
          }
          audioBlob = new Blob(chunks as BlobPart[], { type: mimeType });
        } else {
          audioBlob = await res.blob();
          onProgress?.(85);
        }
        sizeBytes = audioBlob.size;
      } catch {
        // Fallback: store via Cache API with no-cors opaque response if remote host restricts CORS
        if (typeof window !== 'undefined' && 'caches' in window) {
          const cache = await caches.open(CACHE_STORAGE_NAME);
          const opaqueRes = await fetch(input.mediaUrl, { mode: 'no-cors' });
          await cache.put(input.mediaUrl, opaqueRes);
          storageMode = 'cache-api';
          onProgress?.(90);
        } else {
          return {
            success: false,
            error: 'यह ऑडियो स्रोत ऑफ़लाइन डाउनलोड की अनुमति नहीं देता (CORS/नेटवर्क त्रुटि)।',
          };
        }
      }
    }

    const meta: OfflineAudioMeta = {
      id: input.id,
      title: input.title,
      artist: input.artist,
      category: input.category,
      duration: input.duration,
      mediaUrl: input.mediaUrl,
      mimeType,
      sizeBytes,
      storageMode,
      pinnedAt: Date.now(),
    };

    if (storageMode === 'idb-blob' && audioBlob) {
      await putBlobRecord({ ...meta, audioBlob });
      // Warm object URL cache immediately
      const prevUrl = objectUrlCache.get(input.id);
      if (prevUrl) URL.revokeObjectURL(prevUrl);
      objectUrlCache.set(input.id, URL.createObjectURL(audioBlob));
    }

    onProgress?.(100);
    writeMetaToStorage({ ...memoryMetaCache, [input.id]: meta });
    return { success: true, meta };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'ऑफ़लाइन सहेजने में त्रुटि हुई। कृपया इंटरनेट कनेक्शन जांचें।',
    };
  }
}

export async function unpinOfflineAudio(id: string): Promise<void> {
  const existing = memoryMetaCache[id];
  const prevUrl = objectUrlCache.get(id);
  if (prevUrl) {
    URL.revokeObjectURL(prevUrl);
    objectUrlCache.delete(id);
  }
  await deleteBlobRecord(id);
  if (existing?.mediaUrl && existing.mediaUrl.startsWith('http') && typeof window !== 'undefined' && 'caches' in window) {
    try {
      const cache = await caches.open(CACHE_STORAGE_NAME);
      await cache.delete(existing.mediaUrl);
    } catch {}
  }
  const next = { ...memoryMetaCache };
  delete next[id];
  writeMetaToStorage(next);
}

export async function clearAllPinnedAudio(): Promise<void> {
  const ids = Object.keys(memoryMetaCache);
  for (const id of ids) {
    const u = objectUrlCache.get(id);
    if (u) URL.revokeObjectURL(u);
    objectUrlCache.delete(id);
  }
  try {
    const db = await openOfflineDB();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {}
  if (typeof window !== 'undefined' && 'caches' in window) {
    try {
      await caches.delete(CACHE_STORAGE_NAME);
    } catch {}
  }
  writeMetaToStorage({});
}

/**
 * Resolves a playable URL for <audio>, preferring local IndexedDB Blob when pinned offline!
 */
export async function getOfflinePlayableUrl(id: string, fallbackUrl?: string): Promise<string | undefined> {
  const cachedObjUrl = objectUrlCache.get(id);
  if (cachedObjUrl) return cachedObjUrl;

  if (memoryMetaCache[id]?.storageMode === 'idb-blob' || !navigator.onLine) {
    const record = await getBlobRecord(id);
    if (record?.audioBlob) {
      const url = URL.createObjectURL(record.audioBlob);
      objectUrlCache.set(id, url);
      return url;
    }
  }
  return fallbackUrl;
}
