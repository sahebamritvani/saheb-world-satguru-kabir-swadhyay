import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage, handleFirestoreError, OperationType } from '../lib/firebase';
import { isAdminAuthenticated, isAuthorizedAdminEmail } from './adminAuth';
import { compressDarshanImage } from './customPortraitStore';

export type SacredMediaType = 'audio' | 'video' | 'image';

export interface SacredMediaItem {
  id: string;
  mediaType: SacredMediaType;
  title: string;
  description?: string;
  category?: string;
  speakerOrArtist?: string;
  duration?: string;
  mediaUrl: string;
  youtubeId?: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

const SACRED_MEDIA_COLLECTION = 'sacred_media';
const LOCAL_CACHE_KEY = 'sahebworld_sacred_media_cache_v1';
const MAX_DIRECT_DATA_URL_LENGTH = 700_000;

type MediaListener = (items: SacredMediaItem[]) => void;
const listeners = new Set<MediaListener>();

let cachedItems: SacredMediaItem[] = readLocalCache();
let cloudListenerInitialized = false;

function readLocalCache(): SacredMediaItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LOCAL_CACHE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalCache(items: SacredMediaItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    // Only cache metadata + compact URLs (avoid blowing 5MB localStorage quota with giant base64 audio)
    const compact = items.slice(0, 60);
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(compact));
  } catch {
    // Graceful noop if storage quota tight
  }
}

function notifyAll(next: SacredMediaItem[]): void {
  cachedItems = next;
  writeLocalCache(next);
  listeners.forEach((l) => l(next));
}

function parseTimestamp(val: unknown): string {
  if (typeof val === 'string') return val;
  if (val && typeof (val as { toDate?: () => Date }).toDate === 'function') {
    return (val as { toDate: () => Date }).toDate().toISOString();
  }
  return new Date().toISOString();
}

function initCloudSubscription(): void {
  if (cloudListenerInitialized || typeof window === 'undefined') return;
  cloudListenerInitialized = true;

  try {
    const q = query(collection(db, SACRED_MEDIA_COLLECTION), orderBy('createdAt', 'desc'));
    onSnapshot(
      q,
      (snapshot) => {
        const items: SacredMediaItem[] = snapshot.docs.map((d) => {
          const data = d.data() as Record<string, unknown>;
          return {
            id: d.id,
            mediaType: (data.mediaType as SacredMediaType) || 'audio',
            title: String(data.title || 'पावन सामग्री'),
            description: data.description ? String(data.description) : '',
            category: data.category ? String(data.category) : '',
            speakerOrArtist: data.speakerOrArtist ? String(data.speakerOrArtist) : '',
            duration: data.duration ? String(data.duration) : '',
            mediaUrl: String(data.mediaUrl || ''),
            youtubeId: data.youtubeId ? String(data.youtubeId) : '',
            createdAt: parseTimestamp(data.createdAt),
            updatedAt: parseTimestamp(data.updatedAt),
            updatedBy: String(data.updatedBy || ''),
          };
        });
        notifyAll(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, SACRED_MEDIA_COLLECTION);
      }
    );
  } catch {
    // Non-fatal fallback to local cache
  }
}

export function getSacredMediaCache(): SacredMediaItem[] {
  return cachedItems;
}

export function subscribeToSacredMedia(listener: MediaListener): () => void {
  initCloudSubscription();
  listeners.add(listener);
  listener(cachedItems);
  return () => {
    listeners.delete(listener);
  };
}

export function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.replace('/', '').split('/')[0];
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }
    const vParam = url.searchParams.get('v');
    if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) return vParam;
    const parts = url.pathname.split('/');
    const embedIdx = parts.findIndex((p) => p === 'embed' || p === 'shorts' || p === 'live');
    if (embedIdx >= 0 && parts[embedIdx + 1] && /^[a-zA-Z0-9_-]{11}$/.test(parts[embedIdx + 1])) {
      return parts[embedIdx + 1];
    }
  } catch {
    return null;
  }
  return null;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('File read failed'));
    reader.readAsDataURL(file);
  });
}

function isFirebaseAdminReady(): boolean {
  const user = auth?.currentUser;
  return !!(user?.email && user.emailVerified && isAuthorizedAdminEmail(user.email));
}

export interface MediaPublishInput {
  mediaType: SacredMediaType;
  title: string;
  description?: string;
  category?: string;
  speakerOrArtist?: string;
  duration?: string;
  mediaUrl?: string;
  file?: File | null;
}

export interface MediaPublishResult {
  success: boolean;
  item?: SacredMediaItem;
  error?: string;
}

export async function publishAdminSacredMedia(input: MediaPublishInput): Promise<MediaPublishResult> {
  if (!isAdminAuthenticated() || !isFirebaseAdminReady()) {
    return {
      success: false,
      error: 'केवल अधिकृत एडमिन ही ऑडियो, वीडियो या चित्र अपलोड कर सकते हैं।',
    };
  }

  const cleanTitle = input.title.trim().slice(0, 200);
  if (!cleanTitle) {
    return { success: false, error: 'कृपया शीर्षक (Title) अवश्य दर्ज करें।' };
  }

  let finalUrl = (input.mediaUrl || '').trim();
  let youtubeId = '';

  if (input.mediaType === 'video' && finalUrl && !input.file) {
    const yt = extractYouTubeId(finalUrl);
    if (yt) {
      youtubeId = yt;
      finalUrl = `https://www.youtube.com/watch?v=${yt}`;
    }
  }

  if (input.file) {
    const file = input.file;
    try {
      if (input.mediaType === 'image') {
        finalUrl = await compressDarshanImage(file);
      } else {
        // Upload audio/video to Firebase Storage first; if small <= 450KB and Storage blocked, fallback to data URL
        const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const storagePath = `sacred_media/${input.mediaType}/${Date.now()}_${safeFileName}`;
        try {
          const storageRef = ref(storage, storagePath);
          const snap = await uploadBytes(storageRef, file, { contentType: file.type || undefined });
          finalUrl = await getDownloadURL(snap.ref);
        } catch (storageErr) {
          if (file.size <= 450_000) {
            const dataUrl = await readFileAsDataUrl(file);
            if (dataUrl.length <= MAX_DIRECT_DATA_URL_LENGTH && /^data:(audio|video|image)\//.test(dataUrl)) {
              finalUrl = dataUrl;
            } else {
              throw storageErr;
            }
          } else {
            return {
              success: false,
              error:
                input.mediaType === 'video'
                  ? 'बड़ी वीडियो फ़ाइल के लिए कृपया YouTube लिंक या HTTPS वीडियो URL दर्ज करें (या Firebase Storage सक्षम करें)।'
                  : 'बड़ी ऑडियो फ़ाइल (450KB से अधिक) के लिए कृपया Firebase Storage सक्षम करें या सीधा HTTPS MP3 लिंक दर्ज करें।',
            };
          }
        }
      }
    } catch (err: any) {
      return { success: false, error: err?.message || 'फ़ाइल प्रोसेस करने में त्रुटि हुई।' };
    }
  }

  if (!finalUrl || !/^(https:\/\/|data:(image|audio|video)\/)/.test(finalUrl) || finalUrl.length > 750_000) {
    return {
      success: false,
      error: 'कृपया मान्य फ़ाइल या HTTPS / YouTube लिंक प्रदान करें।',
    };
  }

  const mediaId = `sm_${input.mediaType}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const adminEmail = auth.currentUser!.email!;

  const payload: Record<string, unknown> = {
    mediaType: input.mediaType,
    title: cleanTitle,
    mediaUrl: finalUrl,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    updatedBy: adminEmail.slice(0, 128),
  };

  if (input.description?.trim()) payload.description = input.description.trim().slice(0, 2000);
  if (input.category?.trim()) payload.category = input.category.trim().slice(0, 100);
  if (input.speakerOrArtist?.trim()) payload.speakerOrArtist = input.speakerOrArtist.trim().slice(0, 120);
  if (input.duration?.trim()) payload.duration = input.duration.trim().slice(0, 32);
  if (youtubeId) payload.youtubeId = youtubeId.slice(0, 32);

  try {
    await setDoc(doc(db, SACRED_MEDIA_COLLECTION, mediaId), payload);
    const nowIso = new Date().toISOString();
    const createdItem: SacredMediaItem = {
      id: mediaId,
      mediaType: input.mediaType,
      title: cleanTitle,
      description: input.description?.trim() || '',
      category: input.category?.trim() || '',
      speakerOrArtist: input.speakerOrArtist?.trim() || '',
      duration: input.duration?.trim() || '',
      mediaUrl: finalUrl,
      youtubeId,
      createdAt: nowIso,
      updatedAt: nowIso,
      updatedBy: adminEmail,
    };
    return { success: true, item: createdItem };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.CREATE, `${SACRED_MEDIA_COLLECTION}/${mediaId}`);
    return { success: false, error: error?.message || 'क्लाउड सेव विफल रहा।' };
  }
}

export async function deleteAdminSacredMedia(mediaId: string): Promise<{ success: boolean; error?: string }> {
  if (!isAdminAuthenticated() || !isFirebaseAdminReady()) {
    return {
      success: false,
      error: 'केवल अधिकृत एडमिन ही सामग्री हटा सकते हैं।',
    };
  }
  if (!/^[a-zA-Z0-9_-]{1,128}$/.test(mediaId)) {
    return { success: false, error: 'Invalid media ID.' };
  }
  try {
    await deleteDoc(doc(db, SACRED_MEDIA_COLLECTION, mediaId));
    return { success: true };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.DELETE, `${SACRED_MEDIA_COLLECTION}/${mediaId}`);
    return { success: false, error: error?.message || 'हटाने में त्रुटि हुई।' };
  }
}
