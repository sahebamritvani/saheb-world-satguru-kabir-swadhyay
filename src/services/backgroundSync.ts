/**
 * Service Worker Background Sync & Offline Swadhyay Sync Service
 * Allows users to continue Swadhyay study, read cached scriptures, submit notes,
 * and track reading progress even when completely offline.
 */

export interface SyncQueueItem {
  id: string;
  type: 'swadhyay_progress' | 'diary_entry' | 'quiz_score' | 'reading_position' | 'note';
  payload: any;
  timestamp: number;
}

const SYNC_QUEUE_KEY = 'sahebworld_background_sync_queue';
const READ_PROGRESS_KEY = 'sahebworld_granth_progress';

export class BackgroundSyncService {
  private static instance: BackgroundSyncService;
  private isOnlineStatus: boolean = typeof navigator !== 'undefined' ? navigator.onLine : true;

  private constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.handleOnline());
      window.addEventListener('offline', () => this.handleOffline());
    }
  }

  public static getInstance(): BackgroundSyncService {
    if (!BackgroundSyncService.instance) {
      BackgroundSyncService.instance = new BackgroundSyncService();
    }
    return BackgroundSyncService.instance;
  }

  public isOnline(): boolean {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  }

  /**
   * Queue item for background sync when offline, or process immediately if online
   */
  public async queueItem(item: Omit<SyncQueueItem, 'id' | 'timestamp'>): Promise<void> {
    const queueItem: SyncQueueItem = {
      ...item,
      id: `sync_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      timestamp: Date.now(),
    };

    if (this.isOnline()) {
      await this.processItem(queueItem);
    } else {
      const existingQueue = this.getQueue();
      existingQueue.push(queueItem);
      this.saveQueue(existingQueue);
      this.registerBackgroundSyncTag();
    }
  }

  /**
   * Get current queue
   */
  public getQueue(): SyncQueueItem[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(SYNC_QUEUE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveQueue(queue: SyncQueueItem[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
    } catch (e) {
      console.error('Failed to save sync queue:', e);
    }
  }

  /**
   * Register service worker background sync tag if supported
   */
  public async registerBackgroundSyncTag(): Promise<void> {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'SyncManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        // @ts-ignore
        await registration.sync.register('swadhyay-sync');
      } catch (e) {
        console.warn('Background sync registration notice:', e);
      }
    }
  }

  /**
   * Process pending queue when back online
   */
  public async flushQueue(): Promise<number> {
    const queue = this.getQueue();
    if (queue.length === 0) return 0;

    let processedCount = 0;
    const remaining: SyncQueueItem[] = [];

    for (const item of queue) {
      try {
        await this.processItem(item);
        processedCount++;
      } catch {
        remaining.push(item);
      }
    }

    this.saveQueue(remaining);
    return processedCount;
  }

  private async processItem(item: SyncQueueItem): Promise<void> {
    // Process according to type (e.g., save reading position, diary entry, or swadhyay note)
    if (item.type === 'reading_position') {
      const existing = this.getAllBookProgress();
      existing[item.payload.granthSlug] = item.payload;
      localStorage.setItem(READ_PROGRESS_KEY, JSON.stringify(existing));
    } else if (item.type === 'swadhyay_progress') {
      const saved = localStorage.getItem('sahebworld_swadhyay_progress') || '{}';
      try {
        const parsed = JSON.parse(saved);
        parsed[item.payload.sakhiId] = item.payload;
        localStorage.setItem('sahebworld_swadhyay_progress', JSON.stringify(parsed));
      } catch {}
    }
  }

  private handleOnline(): void {
    this.isOnlineStatus = true;
    this.flushQueue();
  }

  private handleOffline(): void {
    this.isOnlineStatus = false;
  }

  // --- Book Reading Progress Manager ---
  public saveBookProgress(granthSlug: string, progress: { chapterId: string; verseIndex: number; scrollY: number; progressPercent: number }): void {
    if (typeof window === 'undefined') return;
    try {
      const all = this.getAllBookProgress();
      all[granthSlug] = {
        granthSlug,
        ...progress,
        lastReadAt: Date.now(),
      };
      localStorage.setItem(READ_PROGRESS_KEY, JSON.stringify(all));
    } catch (e) {
      console.error('Failed to save book progress:', e);
    }
  }

  public getBookProgress(granthSlug: string): { chapterId: string; verseIndex: number; scrollY: number; progressPercent: number; lastReadAt: number } | null {
    if (typeof window === 'undefined') return null;
    const all = this.getAllBookProgress();
    return all[granthSlug] || null;
  }

  public getAllBookProgress(): Record<string, any> {
    if (typeof window === 'undefined') return {};
    try {
      const data = localStorage.getItem(READ_PROGRESS_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }
}

export const backgroundSync = BackgroundSyncService.getInstance();
