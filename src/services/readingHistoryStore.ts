export interface ReadingHistoryItem {
  id: string;
  type: 'sakhi' | 'granth' | 'nitnem' | 'ulatvasi' | 'aarti' | 'chintan';
  title: string;
  subtitle?: string;
  verseIndex?: number;
  slugOrNumber?: string | number;
  snippet?: string;
  timestamp: string;
}

const HISTORY_KEY = 'sahebworld_reading_history_v1';

export const getReadingHistory = (): ReadingHistoryItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const addReadingHistory = (item: {
  type: ReadingHistoryItem['type'];
  title: string;
  subtitle?: string;
  verseIndex?: number;
  slugOrNumber?: string | number;
  snippet?: string;
}) => {
  if (typeof window === 'undefined') return;
  try {
    const existing = getReadingHistory();
    // Filter out duplicate title/slugOrNumber if recent
    const filtered = existing.filter(
      (h) => !(h.title === item.title && h.slugOrNumber === item.slugOrNumber)
    );
    const newItem: ReadingHistoryItem = {
      ...item,
      id: 'history-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
    };
    // Keep max 10 recent items
    const updated = [newItem, ...filtered].slice(0, 10);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('sahebworld_reading_history_updated'));
  } catch (e) {
    console.warn('Failed to add reading history:', e);
  }
};

export const clearReadingHistory = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(HISTORY_KEY);
    window.dispatchEvent(new CustomEvent('sahebworld_reading_history_updated'));
  } catch (e) {
    console.warn('Failed to clear reading history:', e);
  }
};
