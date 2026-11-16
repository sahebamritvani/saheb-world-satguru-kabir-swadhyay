/**
 * Saheb World - Custom Satyanaam Dhun Audio Store
 * Stores user-uploaded Satyanaam Dhun audio files (.mp3, .wav, .m4a, .aac) in IndexedDB
 * for persistent playback across sessions.
 */

export interface DhunTrack {
  id: string;
  title: string;
  isCustom: boolean;
  dateAdded: number;
  dataUrl?: string; // or blob URL
  audioBlob?: Blob;
  type?: string;
  size?: number;
  customGain?: number; // 0 to 1 individual track volume adjustment
}

export interface DhunPlaylist {
  id: string;
  name: string;
  trackIds: string[];
  createdAt: number;
  description?: string;
  defaultVolume?: number; // 0 to 1
  isRepeatAll?: boolean;
}

const PLAYLISTS_STORAGE_KEY = 'sahebworld_custom_dhun_playlists';

const DB_NAME = 'SahebWorldAudioDB';
const DB_VERSION = 1;
const STORE_NAME = 'dhun_tracks';

const LISTENERS: Array<() => void> = [];

export const subscribeToCustomDhunChanges = (callback: () => void): (() => void) => {
  LISTENERS.push(callback);
  return () => {
    const idx = LISTENERS.indexOf(callback);
    if (idx > -1) LISTENERS.splice(idx, 1);
  };
};

const notifyListeners = () => {
  LISTENERS.forEach((cb) => cb());
};

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Clean up raw audio file names into sacred, readable devotional titles
 */
export const cleanDevotionalAudioTitle = (rawName: string): string => {
  if (!rawName) return 'सतगुरु सत्यनाम धुन';
  
  let cleaned = rawName.replace(/\.[^/.]+$/, ''); // remove extension
  
  // Specific match for Uditmuni Panth Dhun
  if (cleaned.toLowerCase().includes('uditmuni') || cleaned.includes('उदितमुनि')) {
    return 'सत्यनाम धुन — पंथ श्री उदितमुनि नाम साहेब';
  }
  
  // Strip leading track numbers like 01_, 02_, track_1_
  cleaned = cleaned.replace(/^(?:\d{1,3}[_\s.-]+|track[_\s.-]*\d*[_\s.-]*)/i, '');
  
  // Strip trailing timestamps/numeric hashes like _052241321, -123456
  cleaned = cleaned.replace(/[_\s.-]+\d{5,}$/, '');
  
  // Replace underscores with spaces
  cleaned = cleaned.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  
  return cleaned || 'सतगुरु सत्यनाम धुन';
};

/**
 * Save an uploaded audio file into IndexedDB
 */
export const saveCustomDhunTrack = async (file: File): Promise<DhunTrack> => {
  const db = await openDB();
  const trackId = `custom_dhun_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const title = cleanDevotionalAudioTitle(file.name);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;
        const track: DhunTrack = {
          id: trackId,
          title: title,
          isCustom: true,
          dateAdded: Date.now(),
          dataUrl: dataUrl,
          type: file.type,
          size: file.size,
        };

        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put(track);

        tx.oncomplete = () => {
          notifyListeners();
          resolve(track);
        };
        tx.onerror = () => reject(tx.error);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

/**
 * Update track title
 */
export const updateCustomDhunTrackTitle = async (trackId: string, newTitle: string): Promise<boolean> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const getReq = store.get(trackId);

      getReq.onsuccess = () => {
        const track = getReq.result as DhunTrack | undefined;
        if (track) {
          track.title = newTitle.trim() || 'सतगुरु सत्यनाम धुन';
          store.put(track);
        }
      };

      tx.oncomplete = () => {
        notifyListeners();
        resolve(true);
      };
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('Error updating track title:', err);
    return false;
  }
};

/**
 * Get all saved custom Dhun tracks
 */
export const getAllCustomDhunTracks = async (): Promise<DhunTrack[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const tracks = (request.result as DhunTrack[]) || [];
        // Auto-clean any uncleaned raw file titles
        let needsUpdate = false;
        tracks.forEach((tr) => {
          if (
            tr.title.includes('01_सत्यनाम') ||
            tr.title.includes('Panth_Shri') ||
            tr.title.includes('_052241321') ||
            tr.title.includes('Uditmuni') ||
            (tr.title.includes('_') && !tr.title.includes(' '))
          ) {
            tr.title = cleanDevotionalAudioTitle(tr.title);
            store.put(tr);
            needsUpdate = true;
          }
        });

        tracks.sort((a, b) => b.dateAdded - a.dateAdded);
        resolve(tracks);
      };
      request.onerror = () => resolve([]);
    });
  } catch (err) {
    console.warn('Audio DB store notice:', err);
    return [];
  }
};

/**
 * Delete a custom track by ID
 */
export const deleteCustomDhunTrack = async (trackId: string): Promise<boolean> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete(trackId);

      tx.oncomplete = () => {
        // Also remove from any playlist
        const playlists = getAllDhunPlaylists();
        playlists.forEach((pl) => {
          if (pl.trackIds.includes(trackId)) {
            pl.trackIds = pl.trackIds.filter((id) => id !== trackId);
            saveDhunPlaylist(pl);
          }
        });
        notifyListeners();
        resolve(true);
      };
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('Error deleting custom track notice:', err);
    return false;
  }
};

/**
 * Update individual track custom volume gain
 */
export const updateCustomTrackGain = async (trackId: string, gain: number): Promise<boolean> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const getReq = store.get(trackId);

      getReq.onsuccess = () => {
        const track = getReq.result as DhunTrack | undefined;
        if (track) {
          track.customGain = Math.max(0, Math.min(1, gain));
          store.put(track);
        }
      };

      tx.oncomplete = () => {
        notifyListeners();
        resolve(true);
      };
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('Error updating track gain:', err);
    return false;
  }
};

/**
 * Get all user playlists
 */
export const getAllDhunPlaylists = (): DhunPlaylist[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(PLAYLISTS_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.warn('Failed to parse playlists:', e);
    return [];
  }
};

/**
 * Save / Update a Playlist
 */
export const saveDhunPlaylist = (playlist: DhunPlaylist): DhunPlaylist[] => {
  if (typeof window === 'undefined') return [];
  try {
    const current = getAllDhunPlaylists();
    const existingIndex = current.findIndex((p) => p.id === playlist.id);
    let updated: DhunPlaylist[];
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = playlist;
    } else {
      updated = [playlist, ...current];
    }
    localStorage.setItem(PLAYLISTS_STORAGE_KEY, JSON.stringify(updated));
    notifyListeners();
    return updated;
  } catch (e) {
    console.warn('Failed to save playlist:', e);
    return getAllDhunPlaylists();
  }
};

/**
 * Delete a Playlist
 */
export const deleteDhunPlaylist = (playlistId: string): DhunPlaylist[] => {
  if (typeof window === 'undefined') return [];
  try {
    const current = getAllDhunPlaylists();
    const updated = current.filter((p) => p.id !== playlistId);
    localStorage.setItem(PLAYLISTS_STORAGE_KEY, JSON.stringify(updated));
    notifyListeners();
    return updated;
  } catch (e) {
    console.warn('Failed to delete playlist:', e);
    return getAllDhunPlaylists();
  }
};

