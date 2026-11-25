import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, KeyRound, LogOut, Database, Sliders } from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { Language } from '../types';
import {
  isAdminAuthenticated,
  setAdminAuthenticated,
  verifyAdminPin,
} from '../services/adminAuth';
import { OPEN_ADMIN_INJECTOR_EVENT } from '../services/adminSlotInjectorStore';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenSettings?: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenSettings,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [passkeyInput, setPasskeyInput] = useState<string>('');
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  useEffect(() => {
    const syncAuth = () => {
      setIsAdmin(isAdminAuthenticated());
    };
    syncAuth();
    window.addEventListener('sahebworld:admin-auth-change', syncAuth);
    window.addEventListener('storage', syncAuth);
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', syncAuth);
      window.removeEventListener('storage', syncAuth);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setPasskeyInput('');
      setStatusNotice(null);
      return;
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePasskeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPin(passkeyInput)) {
      setIsAdmin(true);
      setPasskeyInput('');
      setStatusNotice(
        language === 'pb'
          ? '✓ ਪ੍ਰਮਾਣੀਕਰਨ ਸਫਲ!'
          : language === 'en'
          ? '✓ Administrator verified!'
          : '✓ प्रमाणीकरण सफल!'
      );
      setTimeout(() => {
        setStatusNotice(null);
      }, 2500);
    } else {
      setStatusNotice(
        language === 'pb'
          ? '✗ ਅਯੋਗ ਪਾਸਕੀ।'
          : language === 'en'
          ? '✗ Invalid passkey.'
          : '✗ अमान्य गुप्त पासकी।'
      );
      setTimeout(() => setStatusNotice(null), 3500);
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAdmin(false);
    setStatusNotice(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="w-full max-w-md rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col"
      >
        <div
          style={{
            backgroundColor: theme.buttonPrimaryBg,
            color: theme.buttonPrimaryText,
            borderColor: theme.accentGold,
          }}
          className="px-5 py-4 border-b flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h2 className="font-serif font-black text-base sm:text-lg truncate">
              {language === 'pb'
                ? 'ਪ੍ਰਸ਼ਾਸਕ ਪ੍ਰਮਾਣੀਕਰਨ'
                : language === 'en'
                ? 'Administrator Access'
                : 'प्रशासक प्रमाणीकरण'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] rounded-xl flex items-center justify-center hover:bg-black/15 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {statusNotice && (
            <div
              className={`p-3 rounded-xl border text-xs font-bold text-center font-serif ${
                isDarkMode
                  ? 'bg-amber-950/60 border-amber-500/40 text-amber-200'
                  : 'bg-amber-50 border-amber-400 text-amber-950'
              }`}
            >
              {statusNotice}
            </div>
          )}

          {isAdmin ? (
            <div className="space-y-3">
              <div
                className={`p-3.5 rounded-2xl border text-xs font-serif leading-relaxed ${
                  isDarkMode
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-950'
                }`}
              >
                {language === 'pb'
                  ? 'ਪ੍ਰਸ਼ਾਸਕ ਸੈਸ਼ਨ ਸਰਗਰਮ ਹੈ। ਤੁਸੀਂ ਸੈਟਿੰਗਜ਼ ਸਟੂਡੀਓ, ਦਰਸ਼ਨ, ਆਡੀਓ ਤੇ ਡੇਟਾ ਲੇਅਰ ਇੰਜੈਕਟਰ ਪ੍ਰਬੰਧਨ ਕਰ ਸਕਦੇ ਹੋ।'
                  : language === 'en'
                  ? 'Administrator session is active. You can manage portraits, media uploads, and content slots.'
                  : 'प्रशासक सत्र सक्रिय है। अब आप सेटिंग्स स्टूडियो, पावन दर्शन, ऑडियो एवं डेटा लेयर इंजेक्टर प्रबंधन कर सकते हैं।'}
              </div>

              {onOpenSettings && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSettings();
                  }}
                  style={{
                    backgroundColor: theme.stepActiveBg,
                    borderColor: theme.accentGold,
                    color: theme.sacredMaroon,
                  }}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-bold font-serif transition cursor-pointer flex items-center justify-center gap-2 hover:brightness-95"
                >
                  <Sliders className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'pb'
                      ? 'ਸੈਟਿੰਗਜ਼ ਮੀਡੀਆ ਸਟੂਡੀਓ ਖੋਲ੍ਹੋ'
                      : language === 'en'
                      ? 'Open Settings Media Studio'
                      : 'सेटिंग्स मीडिया स्टूडियो खोलें'}
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent(OPEN_ADMIN_INJECTOR_EVENT));
                }}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full min-h-[44px] py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-bold font-serif transition cursor-pointer flex items-center justify-center gap-2 hover:brightness-95"
              >
                <Database className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  {language === 'pb'
                    ? 'ਡੇਟਾ ਲੇਅਰ ਇੰਜੈਕਟਰ ਖੋਲ੍ਹੋ'
                    : language === 'en'
                    ? 'Open Data Layer Injector'
                    : 'प्रशासक डेटा लेयर इंजेक्टर खोलें'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold font-serif transition cursor-pointer flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>
                  {language === 'pb'
                    ? 'ਲੌਗ-ਆਉਟ ਕਰੋ'
                    : language === 'en'
                    ? 'Logout'
                    : 'लॉग-आउट करें'}
                </span>
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              <p className="text-xs font-serif opacity-80 leading-relaxed" style={{ color: theme.textSecondary }}>
                {language === 'pb'
                  ? 'ਐਡਮਿਨ ਪੈਨਲ ਖੋਲ੍ਹਣ ਲਈ ਆਪਣੀ ਗੁਪਤ ਪਾਸਕੀ / ਪ੍ਰਸ਼ਾਸਕ ਪਿੰਨ ਦਰਜ ਕਰੋ।'
                  : language === 'en'
                  ? 'Enter your secret administrator passkey / PIN to unlock admin controls.'
                  : 'प्रशासक पैनल व डेटा लेयर इंजेक्टर खोलने के लिए अपनी गुप्त पासकी / प्रशासक पिन दर्ज करें।'}
              </p>

              <form onSubmit={handlePasskeySubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600 opacity-70 pointer-events-none" />
                  <input
                    type="password"
                    autoComplete="off"
                    value={passkeyInput}
                    onChange={(e) => setPasskeyInput(e.target.value)}
                    placeholder={
                      language === 'pb'
                        ? 'ਗੁਪਤ ਪਾਸਕੀ / ਪਿੰਨ'
                        : language === 'en'
                        ? 'Admin Passkey / PIN'
                        : 'गुप्त पासकी / प्रशासक पिन'
                    }
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full min-h-[44px] pl-9 pr-3 py-2 rounded-xl border text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="min-h-[44px] py-2 px-4 rounded-xl text-xs sm:text-sm font-bold font-serif transition cursor-pointer shadow-xs whitespace-nowrap"
                >
                  {language === 'pb'
                    ? 'ਪ੍ਰਮਾਣਿਤ'
                    : language === 'en'
                    ? 'Verify'
                    : 'सत्यापित करें'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
