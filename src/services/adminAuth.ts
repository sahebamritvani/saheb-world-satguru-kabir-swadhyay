// Admin Authentication Helper Service for Saheb World
// Protects all sacred uploads, portrait changes, and content controls
import { auth } from '../lib/firebase';

const ADMIN_AUTH_KEY = 'sahebworld_admin_authenticated';
export const AUTHORIZED_ADMIN_EMAIL = 'smongia76@gmail.com';
const AUTHORIZED_PASSKEYS = ['SatguruKabirSaheb@76', 'SahebAdmin76', 'KabirSahebAdmin108'];

export function isAuthorizedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return email.toLowerCase().trim() === AUTHORIZED_ADMIN_EMAIL.toLowerCase();
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // 1. Direct check with authenticated Google User
    const currentEmail = auth?.currentUser?.email;
    if (isAuthorizedAdminEmail(currentEmail)) {
      return true;
    }
    // 2. Local verified session key
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAdminAuthenticated(authStatus: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ADMIN_AUTH_KEY, authStatus ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('sahebworld:admin-auth-change', { detail: { isAuthenticated: authStatus } }));
  } catch {}
}

export function verifyAdminPin(passkey: string): boolean {
  const clean = passkey.trim();
  const valid = AUTHORIZED_PASSKEYS.includes(clean);
  if (valid) {
    setAdminAuthenticated(true);
  }
  return valid;
}
