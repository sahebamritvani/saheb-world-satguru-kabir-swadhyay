import { triggerSacredFlowerShower } from './flowerShower';

const STORAGE_SHRADDHA_KEY = 'sahebworld_shraddha_suman_total_v4';
const STORAGE_USER_OFFERED_KEY = 'sahebworld_shraddha_user_offered_v4';
const SHRADDHA_CHANGE_EVENT = 'sahebworld_shraddha_suman_changed';

export interface ShraddhaState {
  totalCount: number;
  hasOffered: boolean;
  userTotalOffered: number;
}

export const getShraddhaState = (): ShraddhaState => {
  try {
    const rawTotal = localStorage.getItem(STORAGE_SHRADDHA_KEY);
    const rawOffered = localStorage.getItem(STORAGE_USER_OFFERED_KEY);
    const totalCount = rawTotal ? parseInt(rawTotal, 10) : 1088;
    const userTotalOffered = rawOffered ? parseInt(rawOffered, 10) : 0;

    return {
      totalCount: Number.isFinite(totalCount) ? totalCount : 1088,
      hasOffered: userTotalOffered > 0,
      userTotalOffered,
    };
  } catch {
    return {
      totalCount: 1088,
      hasOffered: false,
      userTotalOffered: 0,
    };
  }
};

export const offerShraddhaSuman = (): ShraddhaState => {
  const current = getShraddhaState();
  const newTotal = current.totalCount + 1;
  const newUserOffered = current.userTotalOffered + 1;

  const newState: ShraddhaState = {
    totalCount: newTotal,
    hasOffered: true,
    userTotalOffered: newUserOffered,
  };

  try {
    localStorage.setItem(STORAGE_SHRADDHA_KEY, newTotal.toString());
    localStorage.setItem(STORAGE_USER_OFFERED_KEY, newUserOffered.toString());
  } catch (e) {
    console.warn('Shraddha save error:', e);
  }

  // Trigger joyful petal shower
  triggerSacredFlowerShower();

  // Dispatch global event for instant sync across all open modals and cards
  window.dispatchEvent(new CustomEvent(SHRADDHA_CHANGE_EVENT, { detail: newState }));

  return newState;
};

export const resetShraddhaSuman = (): ShraddhaState => {
  const newState: ShraddhaState = {
    totalCount: 1088,
    hasOffered: false,
    userTotalOffered: 0,
  };

  try {
    localStorage.setItem(STORAGE_SHRADDHA_KEY, '1088');
    localStorage.setItem(STORAGE_USER_OFFERED_KEY, '0');
    // Also clear previous version keys
    localStorage.removeItem('sahebworld_shraddha_suman_total');
    localStorage.removeItem('sahebworld_shraddha_user_offered');
    localStorage.removeItem('sahebworld_shraddha_suman_total_v2');
    localStorage.removeItem('sahebworld_shraddha_user_offered_v2');
    localStorage.removeItem('sahebworld_shraddha_suman_total_v3');
    localStorage.removeItem('sahebworld_shraddha_user_offered_v3');
  } catch (e) {
    console.warn('Shraddha reset error:', e);
  }

  window.dispatchEvent(new CustomEvent(SHRADDHA_CHANGE_EVENT, { detail: newState }));
  return newState;
};

export const subscribeToShraddhaSuman = (callback: (state: ShraddhaState) => void) => {
  const handler = () => {
    callback(getShraddhaState());
  };
  window.addEventListener(SHRADDHA_CHANGE_EVENT, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(SHRADDHA_CHANGE_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
};
