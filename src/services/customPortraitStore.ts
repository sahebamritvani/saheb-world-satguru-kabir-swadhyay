import { doc, getDoc, onSnapshot, deleteDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { isAuthorizedAdminEmail } from './adminAuth';

export type DarshanObjectFit = 'contain' | 'cover';

export interface DarshanPortraitState {
  imageData: string | null;
  objectFit: DarshanObjectFit;
  updatedAt?: string | null;
  updatedBy?: string | null;
}

const LOCAL_IMAGE_KEY = 'sahebworld_custom_darshan_image';
const LOCAL_FIT_KEY = 'sahebworld_custom_darshan_fit';
const LOCAL_UPDATED_AT_KEY = 'sahebworld_custom_darshan_updated_at';
const IDB_NAME = 'sahebworld_sacred_media';
const IDB_STORE = 'config';
const IDB_KEY = 'darshan_portrait';
const SACRED_CONFIG_COLLECTION = 'sacred_config';
const DARSHAN_DOC_ID = 'darshan_portrait';
const MAX_FIRESTORE_DATA_URL_LENGTH = 700_000;

type ImageListener = (image: string | null) => void;
type StateListener = (state: DarshanPortraitState) => void;

const imageListeners = new Set<ImageListener>();
const stateListeners = new Set<StateListener>();

function readLocalState(): DarshanPortraitState {
  if (typeof window === 'undefined') {
    return { imageData: null, objectFit: 'contain', updatedAt: null, updatedBy: null };
  }
  try {
    const img = localStorage.getItem(LOCAL_IMAGE_KEY) || null;
    const rawFit = localStorage.getItem(LOCAL_FIT_KEY);
    const objectFit: DarshanObjectFit = rawFit === 'cover' ? 'cover' : 'contain';
    const updatedAt = localStorage.getItem(LOCAL_UPDATED_AT_KEY) || null;
    return { imageData: img, objectFit, updatedAt, updatedBy: null };
  } catch {
    return { imageData: null, objectFit: 'contain', updatedAt: null, updatedBy: null };
  }
}

let currentState: DarshanPortraitState = readLocalState();
let cloudSyncInitialized = false;

function writeLocalStorageCache(state: DarshanPortraitState) {
  if (typeof window === 'undefined') return;
  try {
    if (state.imageData) {
      localStorage.setItem(LOCAL_IMAGE_KEY, state.imageData);
    } else {
      localStorage.removeItem(LOCAL_IMAGE_KEY);
    }
    localStorage.setItem(LOCAL_FIT_KEY, state.objectFit || 'contain');
    if (state.updatedAt) {
      localStorage.setItem(LOCAL_UPDATED_AT_KEY, state.updatedAt);
    } else {
      localStorage.removeItem(LOCAL_UPDATED_AT_KEY);
    }
  } catch {
    // localStorage might be full (~5MB); IndexedDB still stores the image safely
  }
}

function openMediaDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const database = req.result;
      if (!database.objectStoreNames.contains(IDB_STORE)) {
        database.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function writeIndexedDBCache(state: DarshanPortraitState): Promise<void> {
  try {
    const database = await openMediaDB();
    await new Promise<void>((resolve, reject) => {
      const tx = database.transaction(IDB_STORE, 'readwrite');
      const store = tx.objectStore(IDB_STORE);
      store.put(state, IDB_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    database.close();
  } catch {
    // Graceful noop if IndexedDB blocked
  }
}

async function readIndexedDBCache(): Promise<DarshanPortraitState | null> {
  try {
    const database = await openMediaDB();
    const result = await new Promise<DarshanPortraitState | null>((resolve, reject) => {
      const tx = database.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.get(IDB_KEY);
      req.onsuccess = () => resolve((req.result as DarshanPortraitState) || null);
      req.onerror = () => reject(req.error);
    });
    database.close();
    return result;
  } catch {
    return null;
  }
}

function notifyAllListeners(next: DarshanPortraitState) {
  currentState = next;
  writeLocalStorageCache(next);
  writeIndexedDBCache(next).catch(() => {});
  imageListeners.forEach((listener) => listener(next.imageData));
  stateListeners.forEach((listener) => listener(next));
}

function initCloudAndOfflineHydration() {
  if (cloudSyncInitialized || typeof window === 'undefined') return;
  cloudSyncInitialized = true;

  // 1. Hydrate from IndexedDB first (instant offline persistence on PWA & Capacitor APK)
  readIndexedDBCache()
    .then((idbState) => {
      if (idbState && (idbState.imageData || idbState.objectFit !== currentState.objectFit)) {
        // Only apply IndexedDB if memory didn't already receive a newer cloud update
        if (!currentState.imageData && idbState.imageData) {
          currentState = {
            imageData: idbState.imageData,
            objectFit: idbState.objectFit === 'cover' ? 'cover' : 'contain',
            updatedAt: idbState.updatedAt || null,
            updatedBy: idbState.updatedBy || null,
          };
          imageListeners.forEach((l) => l(currentState.imageData));
          stateListeners.forEach((l) => l(currentState));
        }
      }
    })
    .catch(() => {});

  // 2. Real-time Firestore sync (Public Read so all devotees & APK see Admin-uploaded Swaroop)
  try {
    const docRef = doc(db, SACRED_CONFIG_COLLECTION, DARSHAN_DOC_ID);
    onSnapshot(
      docRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          // Only clear if snapshot explicitly comes from server when online (never wipe offline cache if fromCache empty)
          if (!snapshot.metadata.fromCache && currentState.imageData !== null && navigator.onLine) {
            // Leave offline cache untouched unless doc was genuinely deleted on server
            getDoc(docRef)
              .then((fresh) => {
                if (!fresh.exists() && !fresh.metadata.fromCache) {
                  notifyAllListeners({
                    imageData: null,
                    objectFit: currentState.objectFit,
                    updatedAt: null,
                    updatedBy: null,
                  });
                }
              })
              .catch(() => {});
          }
          return;
        }
        const data = snapshot.data() as {
          imageData?: string;
          objectFit?: DarshanObjectFit;
          updatedAt?: { toDate?: () => Date } | string;
          updatedBy?: string;
        };
        if (data?.imageData && typeof data.imageData === 'string') {
          const parsedFit: DarshanObjectFit = data.objectFit === 'cover' ? 'cover' : 'contain';
          const updatedAtStr =
            typeof data.updatedAt === 'string'
              ? data.updatedAt
              : data.updatedAt && typeof (data.updatedAt as any).toDate === 'function'
                ? (data.updatedAt as any).toDate().toISOString()
                : new Date().toISOString();

          notifyAllListeners({
            imageData: data.imageData,
            objectFit: parsedFit,
            updatedAt: updatedAtStr,
            updatedBy: data.updatedBy || null,
          });
        }
      },
      (error) => {
        // Non-fatal: keep cached portrait intact for offline / restricted preview
        handleFirestoreError(error, OperationType.GET, `${SACRED_CONFIG_COLLECTION}/${DARSHAN_DOC_ID}`);
      }
    );
  } catch {
    // Non-fatal fallback to local cache
  }
}

if (typeof window !== 'undefined') {
  initCloudAndOfflineHydration();
}

export const getCustomDarshanImage = (): string | null => {
  return currentState.imageData;
};

export const getCustomDarshanState = (): DarshanPortraitState => {
  return currentState;
};

export const getDarshanObjectFit = (): DarshanObjectFit => {
  return currentState.objectFit;
};

export async function compressDarshanImage(file: File): Promise<string> {
  const rawDataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('File read failed'));
    reader.readAsDataURL(file);
  });

  if (
    rawDataUrl.length <= 450_000 &&
    /^data:image\/(jpeg|jpg|png|webp);base64,/.test(rawDataUrl)
  ) {
    return rawDataUrl;
  }

  return await new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(rawDataUrl);
        return;
      }

      const dimensionSteps = [1080, 900, 760, 640];
      const qualities = [0.85, 0.76, 0.66, 0.56];

      for (const maxDim of dimensionSteps) {
        const scale = Math.min(1, maxDim / Math.max(img.width || 1, img.height || 1));
        const targetW = Math.max(1, Math.round((img.width || 800) * scale));
        const targetH = Math.max(1, Math.round((img.height || 800) * scale));
        canvas.width = targetW;
        canvas.height = targetH;
        ctx.clearRect(0, 0, targetW, targetH);
        ctx.drawImage(img, 0, 0, targetW, targetH);

        for (const q of qualities) {
          const jpegUrl = canvas.toDataURL('image/jpeg', q);
          if (jpegUrl.length <= MAX_FIRESTORE_DATA_URL_LENGTH) {
            resolve(jpegUrl);
            return;
          }
        }
      }

      reject(new Error('Image exceeds maximum compressed size (700KB). Please select a smaller photo.'));
    };
    img.onerror = () => reject(new Error('Invalid image file'));
    img.src = rawDataUrl;
  });
}

export interface PublishResult {
  savedLocally: boolean;
  syncedToCloud: boolean;
  needsGoogleAdminSignIn?: boolean;
  error?: string;
}

export function isFirebaseAdminSessionActive(): boolean {
  const user = auth?.currentUser;
  return !!(user?.email && user.emailVerified && isAuthorizedAdminEmail(user.email));
}

export async function publishAdminDarshanPortrait(
  dataUrl: string,
  objectFit: DarshanObjectFit = currentState.objectFit
): Promise<PublishResult> {
  if (!/^data:image\/(jpeg|jpg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(dataUrl) || dataUrl.length > 750_000) {
    return {
      savedLocally: false,
      syncedToCloud: false,
      error: 'Image format or size invalid for sacred vault.',
    };
  }

  const nextState: DarshanPortraitState = {
    imageData: dataUrl,
    objectFit,
    updatedAt: new Date().toISOString(),
    updatedBy: auth.currentUser?.email || 'local-admin',
  };
  notifyAllListeners(nextState);

  if (!isFirebaseAdminSessionActive()) {
    return {
      savedLocally: true,
      syncedToCloud: false,
      needsGoogleAdminSignIn: true,
    };
  }

  try {
    const docRef = doc(db, SACRED_CONFIG_COLLECTION, DARSHAN_DOC_ID);
    await setDoc(docRef, {
      imageData: dataUrl,
      objectFit,
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser!.email!,
    });
    return { savedLocally: true, syncedToCloud: true };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.WRITE, `${SACRED_CONFIG_COLLECTION}/${DARSHAN_DOC_ID}`);
    return {
      savedLocally: true,
      syncedToCloud: false,
      error: error?.message || 'Cloud sync failed',
    };
  }
}

export async function updateAdminDarshanObjectFit(objectFit: DarshanObjectFit): Promise<PublishResult> {
  const nextState: DarshanPortraitState = {
    ...currentState,
    objectFit,
    updatedAt: new Date().toISOString(),
  };
  notifyAllListeners(nextState);

  if (!currentState.imageData) {
    return { savedLocally: true, syncedToCloud: false };
  }

  if (!isFirebaseAdminSessionActive()) {
    return {
      savedLocally: true,
      syncedToCloud: false,
      needsGoogleAdminSignIn: true,
    };
  }

  try {
    const docRef = doc(db, SACRED_CONFIG_COLLECTION, DARSHAN_DOC_ID);
    await setDoc(docRef, {
      imageData: currentState.imageData,
      objectFit,
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser!.email!,
    });
    return { savedLocally: true, syncedToCloud: true };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.UPDATE, `${SACRED_CONFIG_COLLECTION}/${DARSHAN_DOC_ID}`);
    return { savedLocally: true, syncedToCloud: false, error: error?.message };
  }
}

export async function resetAdminDarshanPortrait(): Promise<PublishResult> {
  notifyAllListeners({
    imageData: null,
    objectFit: currentState.objectFit,
    updatedAt: null,
    updatedBy: null,
  });

  if (!isFirebaseAdminSessionActive()) {
    return { savedLocally: true, syncedToCloud: false, needsGoogleAdminSignIn: true };
  }

  try {
    const docRef = doc(db, SACRED_CONFIG_COLLECTION, DARSHAN_DOC_ID);
    await deleteDoc(docRef);
    return { savedLocally: true, syncedToCloud: true };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.DELETE, `${SACRED_CONFIG_COLLECTION}/${DARSHAN_DOC_ID}`);
    return { savedLocally: true, syncedToCloud: false, error: error?.message };
  }
}

export const setCustomDarshanImage = (dataUrl: string | null) => {
  if (dataUrl === null) {
    resetAdminDarshanPortrait().catch(() => {});
  } else {
    publishAdminDarshanPortrait(dataUrl, currentState.objectFit).catch(() => {});
  }
};

export const subscribeToCustomPortrait = (listener: ImageListener) => {
  initCloudAndOfflineHydration();
  imageListeners.add(listener);
  return () => {
    imageListeners.delete(listener);
  };
};

export const subscribeToCustomPortraitState = (listener: StateListener) => {
  initCloudAndOfflineHydration();
  stateListeners.add(listener);
  return () => {
    stateListeners.delete(listener);
  };
};
