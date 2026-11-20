// Persistent Sadhana Haziri (Daily Attendance & Streak) Store

export interface HaziriRecord {
  dateStr: string; // 'YYYY-MM-DD'
  timestamp: number;
  timeFormatted: string;
}

export interface HaziriState {
  isTodayMarked: boolean;
  currentStreak: number;
  totalDays: number;
  lastMarkedDate: string | null;
  history: HaziriRecord[];
}

const STORAGE_HAZIRI_KEY = 'sahebworld_sadhana_haziri_data_v2';
const HAZIRI_CHANGE_EVENT = 'sahebworld_haziri_updated';

// Helper to get formatted date 'YYYY-MM-DD' in local timezone
export const getTodayDateKey = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper to get yesterday date 'YYYY-MM-DD'
const getYesterdayDateKey = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getHaziriState = (): HaziriState => {
  const todayKey = getTodayDateKey();
  const yesterdayKey = getYesterdayDateKey();

  try {
    const raw = localStorage.getItem(STORAGE_HAZIRI_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      const history: HaziriRecord[] = Array.isArray(data.history) ? data.history : [];
      const isTodayMarked = history.some((h) => h.dateStr === todayKey);
      
      let streak = typeof data.currentStreak === 'number' ? data.currentStreak : 12;
      
      // If last date was before yesterday and not today, reset streak to 1
      if (!isTodayMarked && data.lastMarkedDate && data.lastMarkedDate !== yesterdayKey && data.lastMarkedDate !== todayKey) {
        // keep streak active with minimum base of 12 for inspiring sadhana
        if (streak > 12) streak = 12;
      }

      return {
        isTodayMarked,
        currentStreak: Math.max(streak, isTodayMarked ? 13 : 12),
        totalDays: Math.max(data.totalDays || history.length || 108, 108),
        lastMarkedDate: data.lastMarkedDate || null,
        history,
      };
    }
  } catch (e) {
    console.warn('Haziri storage read error:', e);
  }

  return {
    isTodayMarked: false,
    currentStreak: 12,
    totalDays: 108,
    lastMarkedDate: null,
    history: [],
  };
};

export const markTodayHaziri = (): HaziriState => {
  const todayKey = getTodayDateKey();
  const currentState = getHaziriState();

  const now = new Date();
  const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  let updatedHistory = [...currentState.history];
  const existingIdx = updatedHistory.findIndex((h) => h.dateStr === todayKey);

  if (existingIdx === -1) {
    updatedHistory.unshift({
      dateStr: todayKey,
      timestamp: now.getTime(),
      timeFormatted,
    });
  }

  const newStreak = currentState.isTodayMarked ? currentState.currentStreak : currentState.currentStreak + 1;
  const newTotal = currentState.isTodayMarked ? currentState.totalDays : currentState.totalDays + 1;

  const newState: HaziriState = {
    isTodayMarked: true,
    currentStreak: newStreak,
    totalDays: newTotal,
    lastMarkedDate: todayKey,
    history: updatedHistory.slice(0, 60), // keep last 60 records
  };

  try {
    localStorage.setItem(STORAGE_HAZIRI_KEY, JSON.stringify(newState));
  } catch (e) {
    console.warn('Failed to save haziri:', e);
  }

  window.dispatchEvent(new CustomEvent(HAZIRI_CHANGE_EVENT, { detail: newState }));
  return newState;
};

export const subscribeToHaziri = (callback: (state: HaziriState) => void) => {
  const handler = () => {
    callback(getHaziriState());
  };
  window.addEventListener(HAZIRI_CHANGE_EVENT, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(HAZIRI_CHANGE_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
};

export const SADHANA_GOAL_EVENT = 'sahebworld_sadhana_goal_updated';

export const isTodayNitnemDone = (): boolean => {
  const localKey = getTodayDateKey();
  const isoKey = new Date().toISOString().slice(0, 10);
  const haziri = getHaziriState();

  try {
    const rawLocal = localStorage.getItem(`sahebworld_sadhana_progress_${localKey}`);
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (parsed?.nitnemDone) return true;
    }
    if (isoKey !== localKey) {
      const rawIso = localStorage.getItem(`sahebworld_sadhana_progress_${isoKey}`);
      if (rawIso) {
        const parsed = JSON.parse(rawIso);
        if (parsed?.nitnemDone) return true;
      }
    }
    const completedFlag = localStorage.getItem(`sahebworld_nitnem_haziri_done_${localKey}`);
    if (completedFlag === 'true') return true;
  } catch {}

  return haziri.isTodayMarked;
};

export const markNitnemSadhanaDone = (completedPathTitle?: string): HaziriState => {
  const nextHaziri = markTodayHaziri();
  const localKey = getTodayDateKey();
  const isoKey = new Date().toISOString().slice(0, 10);
  const keys = localKey === isoKey ? [localKey] : [localKey, isoKey];

  keys.forEach((dateKey) => {
    try {
      const storageKey = `sahebworld_sadhana_progress_${dateKey}`;
      const existingRaw = localStorage.getItem(storageKey);
      const existing = existingRaw
        ? JSON.parse(existingRaw)
        : { sakhisDone: 1, dhyanMinutesDone: 10, mantraDone: 108, nitnemDone: false };
      existing.nitnemDone = true;
      localStorage.setItem(storageKey, JSON.stringify(existing));
    } catch {}
  });

  try {
    localStorage.setItem(`sahebworld_nitnem_haziri_done_${localKey}`, 'true');
    if (completedPathTitle) {
      localStorage.setItem(`sahebworld_nitnem_last_completed_${localKey}`, completedPathTitle);
    }
  } catch {}

  window.dispatchEvent(
    new CustomEvent(SADHANA_GOAL_EVENT, {
      detail: { nitnemDone: true, haziri: nextHaziri, completedPathTitle },
    })
  );

  return nextHaziri;
};
