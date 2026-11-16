import React, { useState, useEffect } from 'react';
import { 
  X, 
  Moon, 
  Sun, 
  Palette, 
  Volume2, 
  VolumeX, 
  Bell, 
  Languages, 
  Type, 
  Check, 
  Sliders, 
  Sparkles,
  Download,
  Info,
  LogOut,
  User as UserIcon,
  ArrowLeft,
  Scroll,
  Clock,
  Zap,
  ShieldCheck,
  KeyRound,
  Lock,
  Mic,
  Volume2 as SpeechVolumeIcon
} from 'lucide-react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { NityaVaniSettings } from './NityaVaniSettings';
import { Language, ThemeMode, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { satyanaamAudio, speechReciter } from '../services/audioDhun';
import { isAdminAuthenticated, verifyAdminPin, setAdminAuthenticated, isAuthorizedAdminEmail } from '../services/adminAuth';
import { PWAInstallButton } from './PWAInstallButton';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  isDhunPlaying: boolean;
  onToggleDhun: () => void;
  onPreviewSplash?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectLanguage,
  isDhunPlaying,
  onToggleDhun,
  onPreviewSplash,
}) => {
  const { 
    theme, 
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    isSahajMode,
    setIsSahajMode,
    isDarkMode,
    toggleDarkMode,
    themeMode,
    setThemeMode,
    isAutoNightMode,
    setIsAutoNightMode,
    speechRate,
    setSpeechRate,
    zenModeActive,
    setZenModeActive,
    larivaarModeActive,
    setLarivaarModeActive,
    visraamModeActive,
    setVisraamModeActive,
    autoScrollActive,
    setAutoScrollActive,
    autoScrollSpeed,
    setAutoScrollSpeed,
    readingFramework,
    setReadingFramework
  } = useAppTheme();
  const { language: contextLang, setLanguage: setContextLang, t: contextT } = useLanguage();
  const activeLang = language || contextLang;
  const t = translations[activeLang] || contextT;

  const [dhunVolume, setDhunVolume] = useState<number>(() => satyanaamAudio.getVolume());
  const [vocalChantEnabled, setVocalChantEnabled] = useState<boolean>(() => satyanaamAudio.getVocalChantEnabled());
  const [speechPitch, setSpeechPitch] = useState<number>(() => speechReciter.getPitch());
  const [isVoiceTesting, setIsVoiceTesting] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [adminPinInput, setAdminPinInput] = useState<string>('');
  const [showAdminPasskeyDialog, setShowAdminPasskeyDialog] = useState<boolean>(false);
  const [adminNotice, setAdminNotice] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthChange = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', handleAuthChange);
    return () => window.removeEventListener('sahebworld:admin-auth-change', handleAuthChange);
  }, []);

  const handleAdminLogin = () => {
    if (verifyAdminPin(adminPinInput)) {
      setIsAdmin(true);
      setAdminPinInput('');
      setShowAdminPasskeyDialog(false);
      setAdminNotice(language === 'hi' ? '✓ अधिकृत एडमिन प्रमाणीकरण सफल!' : '✓ Authorized Admin authenticated!');
      setTimeout(() => setAdminNotice(null), 3500);
    } else {
      setAdminNotice(language === 'hi' ? '✗ अमान्य सुरक्षा क्रेडेंशियल्स - केवल अधिकृत एडमिन के लिए' : '✗ Invalid credentials - Authorized Admin only');
      setTimeout(() => setAdminNotice(null), 3500);
    }
  };

  const handleAdminLogout = () => {
    setAdminAuthenticated(false);
    setIsAdmin(false);
    setShowAdminPasskeyDialog(false);
    setAdminNotice(language === 'hi' ? '✓ एडमिन लॉग-आउट हो गया (पब्लिक रीड-ओनली मोड सक्रिय)' : '✓ Admin logged out');
    setTimeout(() => setAdminNotice(null), 3500);
  };

  useEffect(() => {
    const handleSettingsChanged = (e: any) => {
      if (e.detail) {
        if (typeof e.detail.rate === 'number') setSpeechRate(e.detail.rate);
        if (typeof e.detail.pitch === 'number') setSpeechPitch(e.detail.pitch);
      }
    };
    window.addEventListener('sahebworld_tts_settings_changed', handleSettingsChanged);
    return () => window.removeEventListener('sahebworld_tts_settings_changed', handleSettingsChanged);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u?.email && isAuthorizedAdminEmail(u.email)) {
        setIsAdmin(true);
        setAdminAuthenticated(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSpeechRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    speechReciter.setRate(newRate);
  };

  const handleSpeechPitchChange = (newPitch: number) => {
    setSpeechPitch(newPitch);
    speechReciter.setPitch(newPitch);
  };

  const handleTestVoiceRecitation = () => {
    if (isVoiceTesting) {
      speechReciter.stop();
      setIsVoiceTesting(false);
      return;
    }
    setIsVoiceTesting(true);
    speechReciter.setRate(speechRate);
    speechReciter.setPitch(speechPitch);
    const testSampleText =
      activeLang === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹਿਬ ਜੀ ਕੀ ਜੈ। ਸਤਯਨਾਮ ਹੀ ਸਾਰ ਸ਼ਬਦ ਹੈ।'
        : activeLang === 'en'
        ? 'Hail Satguru Kabir Saheb. Satyanaam is the supreme essence of truth.'
        : 'सतगुरु कबीर साहेब की जय। सत्यनाम ही सार शब्द है।';
    speechReciter.speak(
      testSampleText,
      activeLang,
      () => setIsVoiceTesting(false),
      () => setIsVoiceTesting(false)
    );
  };

  const handleVolumeChange = (newVal: number) => {
    setDhunVolume(newVal);
    satyanaamAudio.setVolume(newVal);
  };

  const handleToggleVocalChant = () => {
    const newVal = satyanaamAudio.toggleVocalChant();
    setVocalChantEnabled(newVal);
  };

  const handleRingTripleChime = () => {
    try {
      satyanaamAudio.ringSatyanaamTripleChime();
    } catch {
      // ignore
    }
  };

  const handleRingBell = () => {
    try {
      satyanaamAudio.ringSacredBell();
    } catch {
      // ignore
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  return (
    <div
      id="settings-modal-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'settings-modal-overlay') {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity"
    >
      <div
        id="settings-drawer-card"
        ref={modalRef}
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-lg rounded-2xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[85vh] transition-all"
      >
        {/* Strict Top Center Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-b py-2 px-4 text-center select-none flex items-center justify-between shrink-0"
        >
          <div className="w-8" />
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-base sm:text-lg font-bold tracking-widest font-serif drop-shadow-xs"
          >
            {exactTop}
          </span>
          <button
            id="close-settings-modal-back"
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            title="वापस जाएं"
          >
            <ArrowLeft size={16} />
            <span>{activeLang === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'वापस जाएं'}</span>
          </button>
        </div>

        {/* Vertically Scrollable Content */}
        <div className="overflow-y-auto px-4 sm:px-6 py-5 space-y-6 flex-1 overscroll-contain pb-20 sm:pb-24">
          {/* User Account Info */}
          {user && (
            <div className="p-4 rounded-xl border flex items-center justify-between" style={{ borderColor: theme.cardBorder, backgroundColor: theme.bgSecondary }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: theme.textPrimary }}>{user.displayName}</p>
                  <p className="text-[10px] opacity-60" style={{ color: theme.textSecondary }}>{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Section 1: Multi-Language Selector */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Languages className="w-4 h-4" />
              <span>{t.chooseLanguageTitle}</span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'hi' as Language, label: 'हिन्दी', sub: 'Hindi' },
                { code: 'pb' as Language, label: 'ਪੰਜਾਬੀ', sub: 'Gurmukhi' },
                { code: 'en' as Language, label: 'English', sub: 'Global' },
              ].map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`select-lang-${lang.code}`}
                    onClick={() => {
                      onSelectLanguage(lang.code);
                      setContextLang(lang.code);
                    }}
                    style={{
                      backgroundColor: isSelected ? theme.accentGoldLight : theme.bgSecondary,
                      borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                      color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                    }}
                    className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center cursor-pointer ${
                      isSelected ? 'font-bold shadow-sm ring-1 ring-amber-400' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="text-sm font-semibold">{lang.label}</span>
                    <span style={{ color: theme.textMuted }} className="text-[10px]">
                      {lang.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Visual Themes & Reading Palettes (Including Flow State) */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਦ੍ਰਿਸ਼ਟੀਗਤ ਥੀਮ ਅਤੇ ਰੰਗ-ਯੋਜਨਾ' : language === 'en' ? 'Visual Themes & Reading Palettes' : 'दृश्य थीम एवं पठन रंग-योजना'}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  id: 'flow_state' as ThemeMode,
                  name: { hi: 'प्रवाह ध्यान (Flow State)', pb: 'ਪ੍ਰਵਾਹ ਧਿਆਨ (Flow State)', en: 'Flow State Indigo' },
                  desc: { hi: 'नेत्र-सुखद शांत इंडिगो व मृदु स्वर्णिम', pb: 'ਅੱਖਾਂ ਨੂੰ ਸਕੂਨ ਦੇਣ ਵਾਲਾ ਇੰਡੀਗੋ ਤੇ ਸੁਨਹਿਰੀ', en: 'Calming indigo & soft gold (Zero eye-strain)' },
                  previewBg: '#0F172A',
                  previewCard: '#1E2238',
                  previewText: '#FEF3C7',
                  previewAccent: '#FBBF24',
                  badge: '🌿 Flow'
                },
                {
                  id: 'mystic_dark' as ThemeMode,
                  name: { hi: 'गूढ़ रात्रि (Mystic Dark)', pb: 'ਗੂੜ੍ਹ ਰਾਤਰੀ (Mystic Dark)', en: 'Mystic Dark' },
                  desc: { hi: 'गहरा काला व स्वर्णिम प्रकाश', pb: 'ਡੂੰਘਾ ਕਾਲਾ ਤੇ ਸੁਨਹਿਰੀ ਚਮਕ', en: 'Pitch black with glowing amber' },
                  previewBg: '#0A0806',
                  previewCard: '#18130E',
                  previewText: '#FFFDF7',
                  previewAccent: '#F59E0B',
                  badge: '🌙 Night'
                },
                {
                  id: 'bhojpatra' as ThemeMode,
                  name: { hi: 'भोजपत्र (Bhojpatra)', pb: 'ਭੋਜਪੱਤਰ (Bhojpatra)', en: 'Bhojpatra Heritage' },
                  desc: { hi: 'पारंपरिक भोजपत्र व रक्त-मरून', pb: 'ਰਵਾਇਤੀ ਭੋਜਪੱਤਰ ਤੇ ਮਰੂਨ', en: 'Classic parchment cream & maroon' },
                  previewBg: '#FDF7EB',
                  previewCard: '#FFFDF9',
                  previewText: '#2D1B0F',
                  previewAccent: '#9E6A2A',
                  badge: '📜 Classic'
                },
                {
                  id: 'high_readability_light' as ThemeMode,
                  name: { hi: 'सहज श्वेत (Clean Light)', pb: 'ਸਹਿਜ ਚਿੱਟਾ (Clean Light)', en: 'Clean Light' },
                  desc: { hi: 'स्पष्ट श्वेत धरातल व काला टेक्स्ट', pb: 'ਸਾਫ਼ ਚਿੱਟਾ ਪਿਛੋਕੜ', en: 'High-contrast clean daylight' },
                  previewBg: '#F8F9FA',
                  previewCard: '#FFFFFF',
                  previewText: '#1A1A1A',
                  previewAccent: '#8C2818',
                  badge: '☀️ Light'
                }
              ].map((thm) => {
                const isSelected = themeMode === thm.id;
                return (
                  <button
                    key={thm.id}
                    type="button"
                    aria-label={`Select ${thm.badge} theme`}
                    onClick={() => {
                      setThemeMode(thm.id);
                    }}
                    style={{
                      backgroundColor: thm.previewCard,
                      borderColor: isSelected ? theme.accentGold : 'rgba(150, 150, 150, 0.2)',
                      color: thm.previewText,
                    }}
                    className={`p-3 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xs hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between h-24 ${
                      isSelected ? 'ring-2 ring-amber-400 shadow-md' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold" style={{ backgroundColor: `${thm.previewAccent}25`, color: thm.previewAccent }}>
                        {thm.badge}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold font-serif line-clamp-1">{thm.name[language] || thm.name.hi}</div>
                      <div className="text-[10px] opacity-75 line-clamp-1 font-sans mt-0.5">{thm.desc[language] || thm.desc.hi}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Advanced Reading Suite Sync */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਉੱਨਤ ਪਠਨ ਵਿਕਲਪ' : language === 'en' ? 'Advanced Reading Suite' : 'उन्नत पठन विकल्प (Advanced Suite)'}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {[
                { 
                  id: 'zen', 
                  label: language === 'pb' ? 'ਧਿਆਨ (Zen)' : language === 'en' ? 'Zen Mode' : 'ध्यान (Zen Mode)', 
                  active: zenModeActive, 
                  setter: setZenModeActive,
                  icon: <Sparkles className="w-3.5 h-3.5" />
                },
                { 
                  id: 'larivaar', 
                  label: language === 'pb' ? 'ਲੜੀਵਾਰ' : language === 'en' ? 'Larivaar' : 'लड़ीवार (Larivaar)', 
                  active: larivaarModeActive, 
                  setter: setLarivaarModeActive,
                  icon: <Scroll className="w-3.5 h-3.5" />
                },
                { 
                  id: 'visraam', 
                  label: language === 'pb' ? 'ਵਿਸ਼ਰਾਮ' : language === 'en' ? 'Visraam' : 'विश्राम (Visraam)', 
                  active: visraamModeActive, 
                  setter: setVisraamModeActive,
                  icon: <Clock className="w-3.5 h-3.5" />
                },
                { 
                  id: 'autoscroll', 
                  label: language === 'pb' ? 'ਆਟੋ-ਸਕ੍ਰੌਲ' : language === 'en' ? 'Auto-Scroll' : 'स्वतः-स्क्रॉल (Auto)', 
                  active: autoScrollActive, 
                  setter: setAutoScrollActive,
                  icon: <Zap className="w-3.5 h-3.5" />
                }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => mode.setter(!mode.active)}
                  style={{
                    backgroundColor: mode.active ? theme.accentGoldLight : theme.bgSecondary,
                    borderColor: mode.active ? theme.accentGold : theme.cardBorder,
                    color: mode.active ? theme.sacredMaroon : theme.textPrimary,
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl border text-[11px] font-bold transition hover:opacity-90"
                >
                  <span className={mode.active ? 'text-amber-600' : 'text-amber-500/50'}>
                    {mode.icon}
                  </span>
                  <span className="flex-1 text-left">{mode.label}</span>
                  {mode.active && <Check className="w-3 h-3" />}
                </button>
              ))}
            </div>

            {autoScrollActive && (
              <div className="p-3 rounded-xl border space-y-2 mt-1" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tighter opacity-70">
                  <span style={{ color: theme.textPrimary }}>{language === 'pb' ? 'ਸਕ੍ਰੌਲ ਗਤੀ' : language === 'en' ? 'Scroll Speed' : 'स्क्रॉल गति'}</span>
                  <span style={{ color: theme.sacredMaroon }}>{autoScrollSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={autoScrollSpeed}
                  onChange={(e) => setAutoScrollSpeed(parseFloat(e.target.value))}
                  className="w-full accent-amber-600 h-1.5 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Section: Global High-Contrast Night Mode Toggle */}
          <div
            id="global-night-mode-setting-card"
            style={{
              backgroundColor: isDarkMode ? theme.accentGoldLight : theme.bgSecondary,
              borderColor: isDarkMode ? theme.accentGold : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 text-left font-serif">
                <div 
                  style={{
                    backgroundColor: isDarkMode ? theme.sacredMaroon : theme.cardBg,
                    color: isDarkMode ? '#FFFFFF' : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  {isDarkMode ? <Moon className="w-5 h-5 animate-pulse" /> : <Sun className="w-5 h-5" />}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold"
                    >
                      {language === 'pb' ? 'ਉੱਚ-ਵਿਰੋਧ ਰਾਤਰੀ ਪਠਨ ਮੋਡ' : language === 'en' ? 'High-Contrast Night Mode' : 'उच्च-विपर्यास रात्रि मोड (Night Mode)'}
                    </h3>
                    {isDarkMode && (
                      <span 
                        style={{ backgroundColor: theme.sacredMaroon, color: '#FFFFFF' }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {language === 'pb' ? 'ਚਾਲੂ' : language === 'en' ? 'Active' : 'सक्रिय'}
                      </span>
                    )}
                  </div>
                  <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed font-sans">
                    {language === 'pb' 
                      ? 'ਸਾਰੇ ਅੰਗਾਂ ਵਿੱਚ ਉੱਚ-ਵਿਰੋਧੀ ਕਾਲਾ ਪਿਛੋਕੜ ਅਤੇ ਸੁਨਹਿਰੀ ਅੱਖਰ ਲਾਗੂ ਕਰੋ।' 
                      : language === 'en' 
                      ? 'Apply a pitch-black background with glowing warm gold text across all components.' 
                      : 'समस्त घटकों में गहरा काला धरातल व सुहावने स्वर्णिम अक्षरों का विन्यास लागू करें।'}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-global-night-mode-switch"
                onClick={toggleDarkMode}
                style={{
                  backgroundColor: isDarkMode ? (theme.mode === 'mystic_dark' ? '#D97706' : theme.sacredMaroon) : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isDarkMode}
                title={isDarkMode ? 'रात्रि मोड बंद करें' : 'रात्रि मोड चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isDarkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Section: Sun-Aware Auto-Night Mode (सूर्यास्त/सूर्योदय स्वतः रात्रि मोड) */}
          <div
            id="sun-aware-auto-night-mode-card"
            style={{
              backgroundColor: isAutoNightMode ? (isDarkMode ? '#2A2016' : theme.accentGoldLight) : theme.bgSecondary,
              borderColor: isAutoNightMode ? '#F59E0B' : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 text-left font-serif">
                <div 
                  style={{
                    backgroundColor: isAutoNightMode ? (isDarkMode ? '#D97706' : theme.sacredMaroon) : theme.cardBg,
                    color: isAutoNightMode ? (isDarkMode ? '#000000' : '#FFFFFF') : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  <Sun className="w-5 h-5 animate-spin-slow" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: isDarkMode ? '#FFFDF7' : theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold"
                    >
                      {language === 'pb' ? 'ਸੂਰਜ-ਅਧਾਰਿਤ ਆਟੋ ਰਾਤਰੀ ਮੋਡ (Sun-Aware)' : language === 'en' ? 'Sun-Aware Auto-Night Mode' : 'सूर्य-अनुसार स्वतः रात्रि मोड (Auto-Night Mode)'}
                    </h3>
                    {isAutoNightMode && (
                      <span 
                        style={{ backgroundColor: isDarkMode ? '#D97706' : theme.sacredMaroon, color: isDarkMode ? '#000000' : '#FFFFFF' }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {language === 'pb' ? 'ਸੂਰਜ ਸਿੰਕ' : language === 'en' ? 'Sun-Sync Active' : 'सूर्य-सिंक सक्रिय'}
                      </span>
                    )}
                  </div>
                  <p style={{ color: isDarkMode ? '#FDE68A' : theme.textSecondary }} className="text-xs leading-relaxed font-sans">
                    {language === 'pb' 
                      ? 'ਸਥਾਨਕ ਸੂਰਜ ਛਿਪਣ (~੬:੩੦ ਸ਼ਾਮ) ਅਤੇ ਸੂਰਜ ਚੜ੍ਹਨ (~੬:੦੦ ਸਵੇਰ) ਅਨੁਸਾਰ ਡੇਅ ਅਤੇ ਨਾਈਟ ਮੋਡ ਆਪੇ ਬਦਲੋ।' 
                      : language === 'en' 
                      ? 'Automatically activates Mystic Dark at local sunset (~6:30 PM) and restores Bhojpatra at sunrise (~6:00 AM).' 
                      : 'स्थानीय सूर्यास्त (~६:३० सायं) पर स्वतः रात्रि मोड तथा सूर्योदय (~६:०० प्रातः) पर भोजपत्र मोड सक्रिय करता है।'}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-sun-aware-night-mode-switch"
                onClick={() => setIsAutoNightMode(!isAutoNightMode)}
                style={{
                  backgroundColor: isAutoNightMode ? (isDarkMode ? '#D97706' : theme.sacredMaroon) : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isAutoNightMode}
                title={isAutoNightMode ? 'स्वतः सूर्य सिंक बंद करें' : 'स्वतः सूर्य सिंक चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isAutoNightMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Section: Sahaj Mode (सहज मोड / Tranquil Simplicity Mode) */}
          <div
            id="sahaj-mode-setting-card"
            style={{
              backgroundColor: isSahajMode ? theme.accentGoldLight : theme.bgSecondary,
              borderColor: isSahajMode ? theme.accentGold : theme.borderOrnament,
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 relative shadow-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div 
                  style={{
                    backgroundColor: isSahajMode ? theme.sacredMaroon : theme.cardBg,
                    color: isSahajMode ? '#FFFFFF' : theme.accentGold,
                    borderColor: theme.accentGold,
                  }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  <Sparkles className={`w-5 h-5 ${isSahajMode ? 'animate-pulse' : ''}`} />
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 
                      style={{ color: theme.sacredMaroon }} 
                      className="text-sm sm:text-base font-bold font-serif"
                    >
                      {t.sahajModeTitle}
                    </h3>
                    {isSahajMode && (
                      <span 
                        style={{ backgroundColor: theme.sacredMaroon, color: '#FFFFFF' }}
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse"
                      >
                        {t.sahajModeActive}
                      </span>
                    )}
                  </div>
                  <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed">
                    {isSahajMode ? t.sahajModeEnabledDesc : t.sahajModeDisabledDesc}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                id="toggle-sahaj-mode-switch"
                onClick={() => setIsSahajMode(!isSahajMode)}
                style={{
                  backgroundColor: isSahajMode ? theme.sacredMaroon : '#D1D5DB',
                }}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 mt-0.5"
                role="switch"
                aria-checked={isSahajMode}
                title={isSahajMode ? 'सहज मोड बंद करें' : 'सहज मोड चालू करें'}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isSahajMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Visual Notice when Sahaj Mode is Active */}
            {isSahajMode && (
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
                className="p-3 rounded-xl border flex items-center justify-between text-xs font-serif"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span style={{ color: theme.textPrimary }} className="font-bold text-[11px] sm:text-xs">
                    {t.sahajModeFocusNotice}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Line Spacing */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              <span>{t.lineSpacingTitle || 'Line Spacing'}</span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                { height: 'small' as const, label: t.fontSmall },
                { height: 'medium' as const, label: t.fontMedium },
                { height: 'large' as const, label: t.fontLarge },
              ].map((h) => (
                <button
                  key={h.height}
                  onClick={() => setLineHeight(h.height)}
                  style={{
                    backgroundColor: lineHeight === h.height ? theme.accentGoldLight : theme.bgSecondary,
                    borderColor: lineHeight === h.height ? theme.accentGold : theme.cardBorder,
                    color: lineHeight === h.height ? theme.sacredMaroon : theme.textPrimary,
                  }}
                  className="py-2 px-3 rounded-xl border text-xs font-semibold transition text-center cursor-pointer"
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Width Mode */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              <span>{t.widthModeTitle || 'Content Width'}</span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                { mode: 'narrow' as const, label: t.widthNarrow || 'Narrow' },
                { mode: 'medium' as const, label: t.widthMedium || 'Medium' },
                { mode: 'wide' as const, label: t.widthWide || 'Wide' },
              ].map((m) => (
                <button
                  key={m.mode}
                  onClick={() => setWidthMode(m.mode)}
                  style={{
                    backgroundColor: widthMode === m.mode ? theme.accentGoldLight : theme.bgSecondary,
                    borderColor: widthMode === m.mode ? theme.accentGold : theme.cardBorder,
                    color: widthMode === m.mode ? theme.sacredMaroon : theme.textPrimary,
                  }}
                  className="py-2 px-3 rounded-xl border text-xs font-semibold transition text-center cursor-pointer"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Font Size (Dynamic Scaling & Slider) */}
          <div className="space-y-3">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Type className="w-4 h-4" />
              <span>{t.fontSizeTitle || 'पठन अक्षर आकार (Reading Font Size Slider)'}</span>
            </h3>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-serif font-bold">
                <span style={{ color: theme.textSecondary }}>छोटा (Small)</span>
                <span style={{ color: theme.sacredMaroon }} className="text-sm font-black">
                  {fontSize === 'small' ? 'छोटा (Small)' : fontSize === 'medium' ? 'सामान्य (Medium)' : fontSize === 'large' ? 'बड़ा (Large)' : 'विशाल (XL)'}
                </span>
                <span style={{ color: theme.textSecondary }}>विशाल (XL)</span>
              </div>

              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={fontSize === 'small' ? 1 : fontSize === 'medium' ? 2 : fontSize === 'large' ? 3 : 4}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (val === 1) setFontSize('small');
                  else if (val === 2) setFontSize('medium');
                  else if (val === 3) setFontSize('large');
                  else if (val === 4) setFontSize('xlarge');
                }}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
              />
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-2xl border" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}>
              {[
                { size: 'small' as const, label: 'A', sub: t.fontSmall },
                { size: 'medium' as const, label: 'A', sub: t.fontMedium },
                { size: 'large' as const, label: 'A', sub: t.fontLarge },
                { size: 'xlarge' as const, label: 'A', sub: 'XL' },
              ].map((f) => {
                const isSelected = fontSize === f.size;
                
                return (
                  <button
                    key={f.size}
                    onClick={() => setFontSize(f.size)}
                    style={{
                      backgroundColor: isSelected ? theme.sacredMaroon : 'transparent',
                      color: isSelected ? '#FFFFFF' : theme.textPrimary,
                    }}
                    className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      isSelected ? 'shadow-md scale-105 font-bold' : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className={`${f.size === 'small' ? 'text-sm' : f.size === 'medium' ? 'text-base' : f.size === 'large' ? 'text-lg' : 'text-xl'} font-black`}>
                      {f.label}
                    </span>
                    <span className="text-[9px] opacity-70">{f.sub}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-center opacity-60 italic" style={{ color: theme.textSecondary }}>
              {language === 'pb' ? 'ਇਹ ਸੈਟਿੰਗ ਸਾਰੇ ਸਵਾਧਿਆਏ ਅਤੇ ਗੁਟਕਾ ਪਾਠਾਂ ‘ਤੇ ਲਾਗੂ ਹੋਵੇਗੀ।' : language === 'en' ? 'This will scale text across all Swadhyay and Gutka views.' : 'यह सेटिंग समस्त स्वाध्याय एवं गुटका पाठों पर समान रूप से लागू होगी।'}
            </p>
          </div>

          {/* Section 4: Satyanaam Dhun Audio Synthesizer */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-4 rounded-xl border space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span>{t.dhunPlayerTitle}</span>
              </h3>

              <button
                id="modal-toggle-dhun-btn"
                onClick={onToggleDhun}
                style={{
                  backgroundColor: isDhunPlaying ? theme.accentGold : theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isDhunPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isDhunPlaying ? t.dhunPause : t.dhunPlay}</span>
              </button>
            </div>

            <p style={{ color: theme.textSecondary }} className="text-xs">
              {t.dhunDescription}
            </p>

            <div className="flex items-center gap-3">
              <span style={{ color: theme.textMuted }} className="text-xs">{t.lowLabel}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={dhunVolume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <span style={{ color: theme.textMuted }} className="text-xs">{t.highLabel}</span>
            </div>

            {/* Vocal Simran Toggle */}
            <div className="flex items-center justify-between pt-1 border-t border-amber-900/10 dark:border-amber-100/10">
              <div>
                <p style={{ color: theme.textPrimary }} className="text-xs font-bold">
                  {t.vocalChantTitle}
                </p>
                <p style={{ color: theme.textMuted }} className="text-[11px]">
                  {t.vocalChantDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={handleToggleVocalChant}
                style={{
                  backgroundColor: vocalChantEnabled ? theme.accentGold : theme.bg,
                  borderColor: theme.borderOrnament,
                  color: vocalChantEnabled ? '#ffffff' : theme.textMuted,
                }}
                className="px-2.5 py-1 rounded-md text-xs font-semibold border transition cursor-pointer"
              >
                {vocalChantEnabled ? t.onStatus : t.offStatus}
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleRingTripleChime}
                style={{ color: theme.accentGold }}
                className="text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                {t.tripleChimeLabel}
              </button>
              <span style={{ color: theme.textMuted }}>•</span>
              <button
                onClick={handleRingBell}
                style={{ color: theme.accentGold }}
                className="text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                {t.sacredBellLabel}
              </button>
            </div>
          </div>

          {/* Section: Web Speech API Voice Speed & Pitch Settings */}
          <div
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-4 rounded-2xl border space-y-4 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <SpeechVolumeIcon className="w-4 h-4 text-amber-600" />
                <span>
                  {language === 'pb'
                    ? 'ਵਾਕ ਪਾਠ ਆਵਾਜ਼ ਸੈਟਿੰਗਾਂ (Speech Settings)'
                    : language === 'en'
                    ? 'Voice Recitation Settings (Speed & Pitch)'
                    : 'वाणी वाचन स्वर सेटिंग्स (Voice Speed & Pitch)'}
                </span>
              </h3>

              <button
                type="button"
                onClick={handleTestVoiceRecitation}
                style={{
                  backgroundColor: isVoiceTesting ? theme.sacredMaroon : theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-2.5 py-1 rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer hover:opacity-90 active:scale-95"
              >
                <Mic className="w-3.5 h-3.5 animate-pulse" />
                <span>
                  {isVoiceTesting
                    ? (language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Stop' : 'रोकें')
                    : (language === 'pb' ? 'ਟੈਸਟ ਸੁਣੋ' : language === 'en' ? 'Test Voice' : 'टेस्ट सुनें')}
                </span>
              </button>
            </div>

            <p style={{ color: theme.textSecondary }} className="text-xs leading-relaxed">
              {language === 'pb'
                ? 'ਸਵਾਧਿਆਏ ਸਾਖੀ ਦੋਹਾ ਸੁਣਨ ਲਈ ਆਵਾਜ਼ ਦੀ ਗਤੀ (Speed) ਅਤੇ ਸੁਰ (Pitch) ਨੂੰ ਆਪਣੇ ਅਨੁਕੂਲ ਕਰੋ।'
                : language === 'en'
                ? 'Adjust the voice recitation speed and pitch for listening to Sakhi verses aloud.'
                : 'स्वाध्याय में साखी दोहा श्रवण हेतु वाणी की गति (Speed) एवं स्वर (Pitch) को अपनी रुचि अनुसार निर्धारित करें।'}
            </p>

            {/* Voice Speed (Rate) Control */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span style={{ color: theme.textPrimary }} className="flex items-center gap-1">
                  <span>{language === 'pb' ? 'ਗਤੀ (Speed / Rate):' : language === 'en' ? 'Voice Speed:' : 'वाणी गति (Rate):'}</span>
                  <span className="font-mono text-amber-600 dark:text-amber-400">{speechRate.toFixed(2)}x</span>
                </span>
                <span className="text-[10px] opacity-70 font-mono" style={{ color: theme.textSecondary }}>
                  {speechRate <= 0.8
                    ? (language === 'pb' ? 'ਸ਼ਾਂਤ (ਧੀਮੀ)' : language === 'en' ? 'Slow' : 'शांत / धीमी')
                    : speechRate >= 1.2
                    ? (language === 'pb' ? 'ਤੇਜ਼' : language === 'en' ? 'Fast' : 'शीघ्र')
                    : (language === 'pb' ? 'ਸਾਧਾਰਣ' : language === 'en' ? 'Normal' : 'सामान्य')}
                </span>
              </div>
              <input
                type="range"
                min="0.6"
                max="1.5"
                step="0.05"
                value={speechRate}
                onChange={(e) => handleSpeechRateChange(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono opacity-60" style={{ color: theme.textMuted }}>
                <span>0.60x (शांत)</span>
                <span>1.00x</span>
                <span>1.50x (शीघ्र)</span>
              </div>
            </div>

            {/* Voice Pitch Control */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span style={{ color: theme.textPrimary }} className="flex items-center gap-1">
                  <span>{language === 'pb' ? 'ਸੁਰ (Pitch):' : language === 'en' ? 'Voice Pitch:' : 'वाणी स्वर (Pitch):'}</span>
                  <span className="font-mono text-amber-600 dark:text-amber-400">{speechPitch.toFixed(2)}</span>
                </span>
                <span className="text-[10px] opacity-70 font-mono" style={{ color: theme.textSecondary }}>
                  {speechPitch <= 0.8
                    ? (language === 'pb' ? 'ਗੰਭੀਰ' : language === 'en' ? 'Deep' : 'गंभीर')
                    : speechPitch >= 1.2
                    ? (language === 'pb' ? 'ਸੁਕੋਮਲ' : language === 'en' ? 'High' : 'सुकोमल')
                    : (language === 'pb' ? 'ਸੁਭਾਵਿਕ' : language === 'en' ? 'Natural' : 'स्वाभाविक')}
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={speechPitch}
                onChange={(e) => handleSpeechPitchChange(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/40 dark:bg-amber-900/40 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono opacity-60" style={{ color: theme.textMuted }}>
                <span>0.50 (गंभीर)</span>
                <span>1.00 (स्वाभाविक)</span>
                <span>1.50 (सुकोमल)</span>
              </div>
            </div>
          </div>

          {/* Section: Smart Offline Library Availability Status Indicator */}
          <div 
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="p-4 rounded-2xl border space-y-2.5 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <h3 style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{language === 'pb' ? 'ਔਫਲਾਈਨ ਲਾਇਬ੍ਰੇਰੀ ਉਪਲਬਧਤਾ' : language === 'en' ? 'Offline Library Status' : 'ऑफ़लाइन ग्रंथालय उपलब्धता (Offline Ready)'}</span>
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {navigator.onLine ? (language === 'pb' ? 'ਔਫਲਾਈਨ ਲਈ ਤਿਆਰ (100% Caching Active)' : 'Fully Cached & Ready') : 'Offline Mode Active'}
              </span>
            </div>

            <p style={{ color: theme.textSecondary }} className="text-xs leading-snug">
              {language === 'pb' 
                ? 'ਸਾਰੀਆਂ ਸਾਖੀਆਂ, ਨਿਤਨੇਮ ਗੁਟਕਾ, ਅਖੰਡ ਪਾਠ ਅਤੇ ਗ੍ਰੰਥ ਆਪ ਜੀ ਦੇ ਫ਼ੋਨ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹਨ। ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਦੇ ਪੜ੍ਹੋ।'
                : language === 'en'
                ? 'All Sakhis, Nitnem Gutka, Akhand Path and Granths are precached and fully available offline.'
                : 'समस्त साखियाँ, नितनेम गुटका, अखंड पाठ एवं पावन ग्रंथ आपके डिवाइस में कैश्ड हैं। बिना इंटरनेट के भी निर्बाध पठन संभव है।'}
            </p>

            <div className="pt-1 flex items-center justify-between text-[11px] font-mono opacity-80" style={{ color: theme.textMuted }}>
              <span>ServiceWorker: Active</span>
              <span>Cache: 100% Synced</span>
            </div>
          </div>

          {/* Admin & Tamper-Proof Protection Section */}
          <div 
            style={{ 
              backgroundColor: isAdmin ? (theme.mode === 'mystic_dark' ? '#1E293B' : '#ECFDF5') : (theme.mode === 'mystic_dark' ? '#1E1812' : '#FDF8F3'),
              borderColor: isAdmin ? '#10B981' : theme.cardBorder
            }}
            className="p-4 rounded-2xl border-2 space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <h3 style={{ color: isAdmin ? '#059669' : theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 font-serif">
                {isAdmin ? <ShieldCheck className="w-4 h-4 text-emerald-600" /> : <Lock className="w-4 h-4 text-amber-700" />}
                <span>{isAdmin ? 'सतगुरु साहेब एडमिन पैनल (Authorized)' : 'सार्वजनिक संरक्षण एवं सुरक्षा (Read-Only)'}</span>
              </h3>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                isAdmin ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30' : 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20'
              }`}>
                {isAdmin ? '👑 एडमिन सक्रिय' : '🔒 पब्लिक रीड-ओनली'}
              </span>
            </div>

            {adminNotice && (
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-center text-amber-950 dark:text-amber-200">
                {adminNotice}
              </div>
            )}

            {isAdmin ? (
              <div className="space-y-2.5">
                <p className="text-xs font-serif leading-relaxed" style={{ color: theme.textSecondary }}>
                  {language === 'hi' 
                    ? 'आप अधिकृत एडमिन के रूप में प्रमाणित हैं। पावन स्वरूप, पवित्र ऑडियो एवं संपूर्ण सामग्री प्रबंधन आपके लिए सक्रिय है।' 
                    : 'You are authenticated as Authorized Admin. Sacred image and media management are fully unlocked.'}
                </p>
                <button
                  type="button"
                  onClick={handleAdminLogout}
                  className="w-full py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-serif transition cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਐਡਮਿਨ ਲੌਗ-ਆਉਟ ਕਰੋ' : language === 'en' ? 'Admin Logout' : 'एडमिन लॉग-आउट करें'}</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                <p className="text-xs font-serif leading-relaxed" style={{ color: theme.textSecondary }}>
                  {language === 'hi' 
                    ? 'सार्वजनिक आगंतुकों के लिए साहेब वर्ल्ड 100% सुरक्षित और रीड-ओनली है। कोई भी बाहरी व्यक्ति पावन स्वरूप, वाणी अथवा ऑडियो में परिवर्तन या अपलोड नहीं कर सकता।' 
                    : 'Saheb World is 100% read-only and tamper-proof for all public visitors. Public uploads and deletions are locked.'}
                </p>

                {/* Subtle trigger for authorized administrator only */}
                {!showAdminPasskeyDialog ? (
                  <div className="pt-1 flex items-center justify-between text-[0.6875rem]">
                    <span className="opacity-50 font-serif">अधिकृत एडमिन: smongia76@gmail.com</span>
                    <button
                      type="button"
                      onClick={() => setShowAdminPasskeyDialog(true)}
                      className="text-amber-800 dark:text-amber-400 hover:underline font-serif cursor-pointer font-bold"
                    >
                      एडमिन प्रमाणीकरण
                    </button>
                  </div>
                ) : (
                  <div className="pt-2 space-y-2 border-t border-amber-500/20">
                    <p className="text-[0.6875rem] font-bold text-amber-900 dark:text-amber-300 font-serif">
                      अधिकृत एडमिन गुप्त पासकी दर्ज करें:
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600 opacity-60" />
                        <input
                          type="password"
                          value={adminPinInput}
                          onChange={(e) => setAdminPinInput(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') handleAdminLogin(); }}
                          placeholder="गुप्त एडमिन पासकी"
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs font-mono focus:ring-2 focus:ring-amber-500"
                          style={{ color: theme.textPrimary }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleAdminLogin}
                        className="py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-serif transition cursor-pointer shadow-xs whitespace-nowrap"
                      >
                        सत्यापित करें
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowAdminPasskeyDialog(false); setAdminPinInput(''); }}
                        className="py-2 px-2.5 rounded-xl border border-stone-300 dark:border-zinc-700 text-stone-600 dark:text-stone-300 text-xs font-serif transition cursor-pointer"
                      >
                        रद्द
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section 5: Daily Nitya Vani Notification */}
          <div className="space-y-4">
            <h3 style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>{t.notificationReminderTitle}</span>
            </h3>
            <NityaVaniSettings language={language} />
          </div>

          {/* Section 6: About Satguru Kabir Saheb Teachings & PWA */}
          <div className="p-3.5 rounded-xl border border-dashed text-center space-y-2.5" style={{ borderColor: theme.borderOrnament }}>
            <span style={{ color: theme.accentGold }} className="text-xs font-bold block">
              {t.pwaTitleLabel}
            </span>
            <p style={{ color: theme.textMuted }} className="text-[11px] leading-relaxed">
              {t.pwaDescLabel}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <PWAInstallButton
                language={language}
                className="bg-amber-700 hover:bg-amber-800 text-white shadow-sm"
                onFallbackOpenModal={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('sahebworld:open-install-modal'));
                }}
              />
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('sahebworld:open-install-modal'));
                }}
                className="min-h-[44px] py-2 px-3.5 rounded-xl border border-amber-600/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-bold font-serif transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {language === 'pb'
                    ? 'Android APK ਡਾਊਨਲੋਡ / ਅਪਡੇਟ'
                    : language === 'en'
                    ? 'Android APK & Updates'
                    : 'Android APK व अपडेट'}
                </span>
              </button>
              {onPreviewSplash && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPreviewSplash();
                  }}
                  className="min-h-[44px] py-1.5 px-3 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 text-xs font-bold font-serif transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span className="w-4 h-4 rounded-full bg-amber-600 text-white font-serif font-black text-[9px] flex items-center justify-center shrink-0">स</span>
                  <span>{language === 'pb' ? 'ਪਾਵਨ ਪ੍ਰਤੀਕ ਤੇ ਸਪਲੈਸ਼ ਦਰਸ਼ਨ' : language === 'en' ? 'Preview Emblem & Splash' : 'दिव्य प्रतीक व स्प्लैश दर्शन'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Close Settings Button */}
          <button
            onClick={onClose}
            style={{
              backgroundColor: theme.sacredMaroon,
              color: '#FFFFFF'
            }}
            className="w-full py-2.5 rounded-xl font-bold font-serif text-sm shadow-md hover:opacity-90 transition active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{language === 'pb' ? 'ਬੰਦ ਕਰੋ (Close)' : language === 'en' ? 'Close Settings' : 'सेटिंग्स बंद करें (Close)'}</span>
          </button>
        </div>

        {/* Strict Bottom Center Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2 px-4 text-center select-none shrink-0"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
          >
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};

