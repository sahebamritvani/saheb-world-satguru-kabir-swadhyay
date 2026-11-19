import { db } from '../lib/firebase';
import { collection, doc, setDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { LeaderboardEntry, INITIAL_SEEKERS_LEADERBOARD } from '../data/ulatvasiMetadata';

const LOCAL_STORAGE_KEY = 'sahebworld_ulatvasi_leaderboard';
const USER_PROFILE_KEY = 'sahebworld_sadhak_profile';

export interface SadhakProfile {
  name: string;
  avatarSeed: string;
  totalScore: number;
  totalSolved: number;
  bestStreak: number;
  currentStreak: number;
  totalAttempts: number;
  correctAttempts: number;
}

export const getLocalSadhakProfile = (): SadhakProfile => {
  if (typeof window === 'undefined') {
    return {
      name: 'सत्य साधक',
      avatarSeed: 'hans-1',
      totalScore: 0,
      totalSolved: 0,
      bestStreak: 0,
      currentStreak: 0,
      totalAttempts: 0,
      correctAttempts: 0,
    };
  }

  try {
    const saved = localStorage.getItem(USER_PROFILE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback
  }

  const defaultProfile: SadhakProfile = {
    name: 'सत्य साधक (You)',
    avatarSeed: 'hans-' + Math.floor(Math.random() * 100),
    totalScore: 0,
    totalSolved: 0,
    bestStreak: 0,
    currentStreak: 0,
    totalAttempts: 0,
    correctAttempts: 0,
  };
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(defaultProfile));
  } catch {}
  return defaultProfile;
};

export const saveLocalSadhakProfile = (profile: SadhakProfile) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch {}
};

export const getLeaderboardEntries = async (): Promise<LeaderboardEntry[]> => {
  let localEntries: LeaderboardEntry[] = [];
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      localEntries = JSON.parse(saved);
    }
  } catch {}

  // If no local entries exist, seed with defaults
  if (!localEntries || localEntries.length === 0) {
    localEntries = [...INITIAL_SEEKERS_LEADERBOARD];
  }

  // Include current user entry if they scored
  const profile = getLocalSadhakProfile();
  if (profile.totalScore > 0) {
    const userEntryIndex = localEntries.findIndex((e) => e.isCurrentUser || e.id === 'current-user-entry');
    const accuracy = profile.totalAttempts > 0 ? Math.round((profile.correctAttempts / profile.totalAttempts) * 100) : 100;
    
    let userTitle = 'कौतूहल खोजी';
    let userBadge = '🌟';
    if (profile.totalScore >= 1500) { userTitle = 'परम तत्वदर्शी'; userBadge = '👑'; }
    else if (profile.totalScore >= 1000) { userTitle = 'साहेब कृपा पात्र'; userBadge = '🪷'; }
    else if (profile.totalScore >= 600) { userTitle = 'उलटबांसी पारखी'; userBadge = '💎'; }
    else if (profile.totalScore >= 300) { userTitle = 'गूढ़ भेदिया'; userBadge = '🔮'; }

    const myEntry: LeaderboardEntry = {
      id: 'current-user-entry',
      name: profile.name,
      score: profile.totalScore,
      solvedCount: profile.totalSolved,
      streak: profile.bestStreak,
      accuracy,
      title: userTitle,
      badge: userBadge,
      timestamp: Date.now(),
      isCurrentUser: true,
    };

    if (userEntryIndex >= 0) {
      localEntries[userEntryIndex] = myEntry;
    } else {
      localEntries.push(myEntry);
    }
  }

  // Sort descending by score
  localEntries.sort((a, b) => b.score - a.score);

  // Try background sync with Firestore if online
  try {
    const q = query(collection(db, 'ulatvasi_leaderboard'), orderBy('score', 'desc'), limit(15));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const cloudEntries: LeaderboardEntry[] = [];
      snapshot.forEach((doc) => {
        cloudEntries.push({ id: doc.id, ...(doc.data() as any) });
      });
      if (cloudEntries.length > 0) {
        // Merge seamlessly with local user entry
        const merged = [...cloudEntries];
        if (profile.totalScore > 0) {
          const exists = merged.find((e) => e.name === profile.name || (e as any).isCurrentUser);
          if (!exists) {
            merged.push({
              id: 'current-user-entry',
              name: profile.name,
              score: profile.totalScore,
              solvedCount: profile.totalSolved,
              streak: profile.bestStreak,
              accuracy: profile.totalAttempts > 0 ? Math.round((profile.correctAttempts / profile.totalAttempts) * 100) : 100,
              title: profile.totalScore >= 1000 ? 'साहेब कृपा पात्र' : 'उलटबांसी पारखी',
              badge: profile.totalScore >= 1000 ? '🪷' : '💎',
              timestamp: Date.now(),
              isCurrentUser: true,
            });
          }
        }
        merged.sort((a, b) => b.score - a.score);
        return merged;
      }
    }
  } catch {
    // Graceful offline fallback
  }

  return localEntries;
};

export const syncScoreToLeaderboard = async (
  pointsEarned: number,
  isCorrect: boolean,
  paradoxId: string
): Promise<SadhakProfile> => {
  const profile = getLocalSadhakProfile();
  profile.totalAttempts += 1;

  if (isCorrect) {
    profile.correctAttempts += 1;
    profile.totalScore += pointsEarned;
    profile.totalSolved += 1;
    profile.currentStreak += 1;
    if (profile.currentStreak > profile.bestStreak) {
      profile.bestStreak = profile.currentStreak;
    }
  } else {
    profile.currentStreak = 0;
  }

  saveLocalSadhakProfile(profile);

  // Save to local leaderboard
  try {
    const entries = await getLeaderboardEntries();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  } catch {}

  // Attempt Firestore sync in background ONLY when user is authenticated & email verified
  try {
    const { auth } = await import('../lib/firebase');
    const currentUser = auth?.currentUser;
    if (currentUser && currentUser.emailVerified) {
      const docId = `sadhak_${currentUser.uid}`;
      const accuracy = Math.min(100, Math.max(0, Math.round((profile.correctAttempts / profile.totalAttempts) * 100)));
      
      let title = 'कौतूहल खोजी';
      let badge = '🌟';
      if (profile.totalScore >= 1500) { title = 'परम तत्वदर्शी'; badge = '👑'; }
      else if (profile.totalScore >= 1000) { title = 'साहेब कृपा पात्र'; badge = '🪷'; }
      else if (profile.totalScore >= 600) { title = 'उलटबांसी पारखी'; badge = '💎'; }
      else if (profile.totalScore >= 300) { title = 'गूढ़ भेदिया'; badge = '🔮'; }

      await setDoc(doc(db, 'ulatvasi_leaderboard', docId), {
        ownerId: currentUser.uid,
        name: (profile.name || 'साधक').slice(0, 80),
        score: Math.max(0, Math.floor(profile.totalScore)),
        solvedCount: Math.max(0, Math.floor(profile.totalSolved)),
        streak: Math.max(0, Math.floor(profile.bestStreak)),
        accuracy,
        title: title.slice(0, 100),
        badge: badge.slice(0, 16),
        lastSolvedParadox: String(paradoxId || '').slice(0, 128),
        timestamp: Date.now(),
      }, { merge: true });
    }
  } catch {
    // Non-blocking firestore sync
  }

  return profile;
};
