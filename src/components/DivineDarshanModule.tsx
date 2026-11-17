import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Volume2, 
  Flower2, 
  ShieldCheck,
  Upload,
  RotateCcw,
  Cloud,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import {
  DarshanObjectFit,
  DarshanPortraitState,
  compressDarshanImage,
  getCustomDarshanState,
  isFirebaseAdminSessionActive,
  publishAdminDarshanPortrait,
  resetAdminDarshanPortrait,
  subscribeToCustomPortraitState,
  updateAdminDarshanObjectFit,
} from '../services/customPortraitStore';
import { isAdminAuthenticated, isAuthorizedAdminEmail } from '../services/adminAuth';
import { signInWithGoogle } from '../lib/firebase';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface DivineDarshanModuleProps {
  language: Language;
  onClose: () => void;
  onOpenBlessing?: (title?: string, message?: string) => void;
  onOpenSettings?: () => void;
}

export const DivineDarshanModule: React.FC<DivineDarshanModuleProps> = ({
  language,
  onClose,
  onOpenBlessing,
}) => {
  const { theme } = useAppTheme();
  const { setLanguage } = useLanguage();

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [isFirebaseAdmin, setIsFirebaseAdmin] = useState<boolean>(() => isFirebaseAdminSessionActive());
  const [flowerCount, setFlowerCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('sahebworld_darshan_flowers') || '0', 10);
    } catch {
      return 0;
    }
  });

  const [fallingPetals, setFallingPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [portraitState, setPortraitState] = useState<DarshanPortraitState>(() => getCustomDarshanState());
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAdmin(isAdminAuthenticated());
      setIsFirebaseAdmin(isFirebaseAdminSessionActive());
    };
    window.addEventListener('sahebworld:admin-auth-change', handleAuthChange);
    const unsubscribe = subscribeToCustomPortraitState((next) => {
      setPortraitState(next);
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuthChange);
      unsubscribe();
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) {
      showToast(language === 'hi' ? 'केवल एडमिन पावन स्वरूप बदल सकते हैं।' : 'Only Admin can change the portrait.');
      return;
    }
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setIsUploading(true);
    try {
      const compressedDataUrl = await compressDarshanImage(file);
      const res = await publishAdminDarshanPortrait(compressedDataUrl, portraitState.objectFit);
      if (res.syncedToCloud) {
        showToast(
          language === 'pb'
            ? '✓ ਪਾਵਨ ਸਰੂਪ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਤੇ ਗਲੋਬਲ ਸਿੰਕ ਹੋ ਗਿਆ'
            : language === 'en'
            ? '✓ Sacred portrait updated & synced for all devotees'
            : '✓ पावन स्वरूप सफलतापूर्वक सेव एवं सभी भक्तों हेतु वैश्विक सिंक हो गया'
        );
      } else if (res.needsGoogleAdminSignIn) {
        showToast(
          language === 'pb'
            ? 'ਡਿਵਾਈਸ ਤੇ ਸੁਰੱਖਿਅਤ ਹੈ — ਗਲੋਬਲ ਸਿੰਕ ਲਈ Google Admin ਸਾਈਨ-ਇਨ ਕਰੋ'
            : language === 'en'
            ? 'Saved on this device — Sign in with Admin Google account to sync globally'
            : 'इस डिवाइस पर सेव हो गया — सभी के लिए सिंक करने हेतु ऊपर Google एडमिन साइन-इन करें'
        );
      } else {
        showToast(res.error || (language === 'hi' ? 'पावन स्वरूप अपडेट हुआ' : 'Portrait updated'));
      }
    } catch (err: any) {
      showToast(
        err?.message ||
          (language === 'hi' ? 'छवि संसाधित करने में त्रुटि, कृपया छोटी छवि चुनें।' : 'Unable to process image file.')
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleAdminGoogleSync = async () => {
    if (!isAdmin) return;
    try {
      const user = await signInWithGoogle();
      setIsFirebaseAdmin(isFirebaseAdminSessionActive());
      if (user?.email && isAuthorizedAdminEmail(user.email)) {
        if (portraitState.imageData) {
          const res = await publishAdminDarshanPortrait(portraitState.imageData, portraitState.objectFit);
          if (res.syncedToCloud) {
            showToast(
              language === 'pb'
                ? '✓ Google ਐਡਮਿਨ ਪ੍ਰਮਾਣਿਤ ਅਤੇ ਪਾਵਨ ਸਰੂਪ ਗਲੋਬਲ ਸਿੰਕ ਹੋ ਗਿਆ'
                : language === 'en'
                ? '✓ Admin Google verified & sacred portrait synced globally!'
                : '✓ Google एडमिन प्रमाणित — पावन स्वरूप सभी के लिए वैश्विक सिंक हो गया!'
            );
            return;
          }
        }
        showToast(language === 'hi' ? '✓ Google एडमिन सत्र सक्रिय हो गया' : '✓ Admin Google session active');
      } else {
        showToast(
          language === 'hi'
            ? 'कृपया अधिकृत एडमिन ईमेल (smongia76@gmail.com) से साइन-इन करें।'
            : 'Please sign in with the authorized admin email (smongia76@gmail.com).'
        );
      }
    } catch {
      showToast(
        language === 'hi'
          ? 'पॉप-अप ब्लॉक हुआ या रद्द किया गया। कृपया नए टैब में Google साइन-इन आज़माएं।'
          : 'Google Sign-In popup cancelled or blocked in preview frame.'
      );
    }
  };

  const handleToggleObjectFit = async (fit: DarshanObjectFit) => {
    if (!isAdmin) return;
    await updateAdminDarshanObjectFit(fit);
    showToast(
      fit === 'contain'
        ? language === 'hi'
          ? '✓ पूर्ण चित्र फ़िट (बिना कटे) लागू'
          : '✓ Full portrait fit (uncropped)'
        : language === 'hi'
        ? '✓ फ़्रेम भरें (Cover) लागू'
        : '✓ Frame fill (Cover) applied'
    );
  };

  const handleResetImage = async () => {
    if (!isAdmin) return;
    await resetAdminDarshanPortrait();
    showToast(
      language === 'pb'
        ? 'ਮੂਲ ਸਥਾਨ ਰੀਸੈੱਟ ਹੋ ਗਿਆ'
        : language === 'en'
        ? 'Reset to sacred emblem'
        : 'पावन ध्यान प्रतीक पर रीसेट किया गया'
    );
  };

  const handleOfferFlowers = () => {
    sacredHaptics.mediumTap();
    const newCount = flowerCount + 1;
    setFlowerCount(newCount);
    try {
      localStorage.setItem('sahebworld_darshan_flowers', newCount.toString());
    } catch {}

    const newPetals = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 0.4,
      duration: 2.5 + Math.random() * 1.5,
    }));
    setFallingPetals(newPetals);
    setTimeout(() => setFallingPetals([]), 4500);

    if (onOpenBlessing) {
      onOpenBlessing(
        language === 'pb'
          ? 'ਫੁੱਲ ਅਰਪਣ ਤੇ ਸਤਿਗੁਰੂ ਪਾਵਨ ਅਸੀਸ'
          : language === 'en'
          ? 'Offer Flowers & Satguru Sacred Blessing'
          : 'पुष्प अर्पण एवं सतगुरु पावन आशीष',
        language === 'pb'
          ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਕੋਟਿ-ਕੋਟਿ ਪ੍ਰਣਾਮ।'
          : language === 'en'
          ? 'Infinite salutations at the sacred feet of Satguru Kabir Saheb.'
          : 'सतगुरु कबीर साहेब के पावन चरणों में कोटि-कोटि वंदना।'
      );
    }
  };

  const handlePranamChant = () => {
    sacredHaptics.lightTap();
    const textToSpeak =
      language === 'pb'
        ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਕੀ ਜੈ।'
        : language === 'en'
        ? 'Saheb Bandgi Saheb. Victory to Bandichhor Satguru Kabir Saheb.'
        : 'साहेब बंदगी साहेब। बंदीछोड़ सतगुरु कबीर साहेब की जय।';
    speechReciter.speak(textToSpeak, language);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 relative animate-fadeIn select-none">
      {/* Falling Flower Petals Shower Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {fallingPetals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -40, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: [1, 0.9, 0], rotate: 360 }}
            transition={{ duration: petal.duration, delay: petal.delay, ease: 'easeOut' }}
            style={{ left: `${petal.left}%` }}
            className="absolute text-xl sm:text-2xl"
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Main Darshan Card */}
      <div
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          color: theme.textPrimary,
        }}
        className="rounded-3xl border-2 p-4 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden"
      >
        {/* Top Header Bar */}
        <div
          style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}
          className="border-b -mx-4 -mt-4 sm:-mx-7 sm:-mt-7 p-4 sm:p-5 relative flex flex-col gap-4"
        >
          {/* Top Row: Language Toggles, Pranam and Back Button */}
          <div className="flex items-center justify-between gap-3">
            <div
              className="flex items-center gap-1 z-10 p-0.5 rounded-md border"
              style={{
                backgroundColor: theme.mode === 'mystic_dark' ? '#2A2016' : theme.stepActiveBg,
                borderColor: theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder,
              }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lang) => {
                const isSelected = language === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    style={{
                      backgroundColor: isSelected
                        ? theme.mode === 'mystic_dark'
                          ? '#D97706'
                          : theme.sacredMaroon
                        : 'transparent',
                      color: isSelected
                        ? theme.mode === 'mystic_dark'
                          ? '#000000'
                          : '#FFFFFF'
                        : theme.mode === 'mystic_dark'
                        ? '#FFFDF7'
                        : theme.textPrimary,
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                      isSelected ? 'font-black shadow-xs' : 'hover:opacity-90'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 z-10">
              <button
                onClick={handlePranamChant}
                className="p-2 sm:px-3 sm:py-2 rounded-xl flex items-center gap-1.5 font-bold font-serif text-xs sm:text-sm border transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                title={language === 'pb' ? 'ਨਮਨ ਵਾਣੀ' : language === 'en' ? 'Salutation Chant' : 'नमन वाणी'}
              >
                <span className="hidden sm:inline">{language === 'pb' ? 'ਨਮਨ' : language === 'en' ? 'Salutation' : 'नमन'}</span>
                <Volume2 className="w-4 h-4 text-amber-700" />
              </button>

              <button
                onClick={onClose}
                className="px-3 py-2 rounded-xl flex items-center justify-center border transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs gap-2"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                title={language === 'pb' ? 'ਪਿੱਛੇ' : language === 'en' ? 'Back' : 'वापस'}
                aria-label="Go Back"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold text-xs sm:text-sm">
                  {language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस आएं'}
                </span>
              </button>
            </div>
          </div>

          {/* Satyanaam Badge Below Header */}
          <div className="flex items-center justify-center">
            <div
              style={{ color: theme.sacredMaroon }}
              className="flex flex-row items-center justify-center gap-3 sm:gap-5 text-lg sm:text-xl md:text-2xl font-black tracking-widest font-serif drop-shadow-xs"
            >
              <span className="shrink-0 text-xl sm:text-2xl select-none" aria-hidden="true">🌹</span>
              <span className="whitespace-nowrap">
                ।।{language === 'pb' ? 'ਸਤਯਨਾਮ' : language === 'en' ? 'Satyanaam' : 'सत्यनाम'}।।
              </span>
              <span className="shrink-0 text-xl sm:text-2xl select-none" aria-hidden="true">🌹</span>
            </div>
          </div>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-center font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-200 shadow-sm"
          >
            {toastMessage}
          </motion.div>
        )}

        {/* Admin Status Banner (STRICTLY ONLY visible when Admin is authenticated) */}
        {isAdmin && (
          <div
            style={{
              backgroundColor: theme.mode === 'mystic_dark' ? '#1E293B' : '#ECFDF5',
              borderColor: '#10B981',
            }}
            className="p-3.5 sm:p-4 rounded-2xl border-2 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h5 className="text-xs sm:text-sm font-black font-serif text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                  <span>👑 सतगुरु साहेब एडमिन मोड सक्रिय (Admin Authorized)</span>
                </h5>
                <p className="text-[0.6875rem] text-emerald-900/80 dark:text-emerald-300/80 font-serif">
                  {isFirebaseAdmin
                    ? '✓ Google एडमिन क्लाउड सिंक सक्रिय — आपका अपलोड सभी भक्तों और APK में दिखाई देगा।'
                    : 'केवल आप (एडमिन) पावन स्वरूप बदल सकते हैं। सभी उपकरणों हेतु क्लाउड सिंक के लिए Google साइन-इन करें।'}
                </p>
              </div>
            </div>

            {!isFirebaseAdmin && (
              <button
                type="button"
                onClick={handleAdminGoogleSync}
                className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-serif flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs transition"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>Google एडमिन सिंक</span>
              </button>
            )}
          </div>
        )}

        {/* Central Darshan Frame */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 pt-2">
          <div className="text-center pt-1 pb-1">
            <h1
              style={{ color: theme.sacredMaroon }}
              className="text-xl sm:text-2xl md:text-3xl font-black font-serif tracking-wide leading-tight"
            >
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ'
                : language === 'en'
                ? 'Satguru Kabir Saheb Divine Sacred Darshan'
                : 'सतगुरु कबीर साहेब दिव्य पावन दर्शन'}
            </h1>
          </div>

          {/* Hidden File Input strictly gated for Admin */}
          {isAdmin && (
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/jpeg,image/png,image/webp,image/*"
              className="hidden"
            />
          )}

          {/* Sanctum Sacred Card — Zero App Icon Fallback */}
          <div
            style={{ borderColor: theme.accentGold, backgroundColor: theme.cardBg }}
            className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] rounded-3xl border-2 shadow-xl overflow-hidden flex flex-col items-center justify-center p-3 group bg-gradient-to-b from-amber-500/10 via-stone-500/5 to-amber-500/15 dark:from-zinc-900 dark:via-zinc-800/80 dark:to-zinc-900"
          >
            {portraitState.imageData ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#2A180B] via-[#3A2210] to-[#1F1208] shadow-inner border border-amber-500/40">
                <img
                  src={portraitState.imageData}
                  alt="Satguru Kabir Saheb Divine Swaroop"
                  className={`w-full h-full ${portraitState.objectFit === 'cover' ? 'object-cover' : 'object-contain'} rounded-xl select-none`}
                />
              </div>
            ) : (
              <div
                style={{
                  background: theme.mode === 'mystic_dark' || theme.mode === 'amrit_neel' || theme.mode === 'flow_state'
                    ? 'radial-gradient(circle at center, rgba(217, 119, 6, 0.22) 0%, rgba(24, 16, 10, 0.96) 75%)'
                    : 'radial-gradient(circle at center, #FFFDF5 0%, #FDF2D0 55%, #F5DFB0 100%)',
                  borderColor: theme.accentGold,
                }}
                className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner border border-amber-500/40"
              >
                {/* Sacred Golden Lotus Sanctuary Emblem (Clean SVG, never app icon) */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/50 animate-spin-slow" />
                  <div className="absolute inset-3 rounded-full bg-amber-400/15 blur-md" />
                  <svg
                    viewBox="0 0 120 120"
                    className="w-24 h-24 sm:w-28 sm:h-28 text-amber-600 dark:text-amber-400 drop-shadow-md relative z-10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <path
                      d="M60 20 C67 34, 72 44, 60 58 C48 44, 53 34, 60 20 Z"
                      fill="currentColor"
                      opacity="0.85"
                    />
                    <path
                      d="M60 58 C74 44, 88 46, 94 58 C82 68, 70 66, 60 58 Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M60 58 C46 44, 32 46, 26 58 C38 68, 50 66, 60 58 Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M36 74 C44 64, 52 64, 60 72 C68 64, 76 64, 84 74 C76 88, 66 94, 60 96 C54 94, 44 88, 36 74 Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <circle cx="60" cy="58" r="5" fill="#FFFDF7" />
                  </svg>
                </div>

                <p
                  style={{ color: theme.sacredMaroon }}
                  className="text-lg sm:text-xl font-black font-serif tracking-wide"
                >
                  {language === 'pb'
                    ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ।।'
                    : language === 'en'
                    ? '|| Satguru Kabir Saheb ||'
                    : '।। सतगुरु कबीर साहेब ।।'}
                </p>
                <p
                  style={{ color: theme.textSecondary }}
                  className="text-xs sm:text-sm font-serif mt-2 max-w-xs leading-relaxed opacity-85"
                >
                  {language === 'pb'
                    ? 'ਦਿਵਯ ਪਾਵਨ ਧਿਆਨ ਸਰੂਪ — ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਵੱਲੋਂ ਪਾਵਨ ਚਿੱਤਰ ਪ੍ਰਕਾਸ਼ਿਤ ਹੋਣ ਦੀ ਉਡੀਕ ਵਿੱਚ।'
                    : language === 'en'
                    ? 'Sacred contemplation sanctuary — awaiting authorized Admin publication of Satguru Kabir Saheb portrait.'
                    : 'पावन ध्यान एवं दर्शन स्थल — अधिकृत एडमिन द्वारा सतगुरु कबीर साहेब का पावन स्वरूप स्थापित किए जाने हेतु सुरक्षित।'}
                </p>
              </div>
            )}

            <div className="absolute inset-0 rounded-3xl ring-1 ring-amber-400/30 pointer-events-none" />
          </div>

          {/* STRICTLY ADMIN-ONLY Upload, Fit & Reset Controls */}
          {isAdmin ? (
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="min-h-[44px] px-4 py-2 rounded-xl border-2 font-bold font-serif text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer shadow-xs disabled:opacity-60"
              >
                <Upload className="w-4 h-4 text-amber-700" />
                <span>
                  {isUploading
                    ? language === 'hi'
                      ? 'अपलोड हो रहा है...'
                      : 'Uploading...'
                    : language === 'pb'
                    ? 'ਪਾਵਨ ਸਰੂਪ ਅੱਪਲੋਡ / ਬਦਲੋ'
                    : language === 'en'
                    ? 'Upload / Change Swaroop'
                    : 'पावन स्वरूप अपलोड / बदलें'}
                </span>
              </button>

              {portraitState.imageData && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      handleToggleObjectFit(portraitState.objectFit === 'contain' ? 'cover' : 'contain')
                    }
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="min-h-[44px] px-3 py-2 rounded-xl border font-bold text-xs flex items-center gap-1.5 hover:bg-black/5 transition cursor-pointer"
                  >
                    {portraitState.objectFit === 'contain' ? (
                      <>
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{language === 'hi' ? 'फ़्रेम भरें (Cover)' : 'Fill Frame'}</span>
                      </>
                    ) : (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{language === 'hi' ? 'पूर्ण चित्र (Contain)' : 'Fit Full'}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleResetImage}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textSecondary,
                    }}
                    className="min-h-[44px] px-3 py-2 rounded-xl border font-bold text-xs flex items-center gap-1.5 hover:bg-black/5 transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{language === 'pb' ? 'ਰੀਸੈੱਟ' : language === 'en' ? 'Reset' : 'रीसेट'}</span>
                  </button>
                </>
              )}
            </div>
          ) : (
            <p className="text-xs font-serif opacity-75 italic max-w-md px-2">
              {language === 'pb'
                ? '🔒 ਇਹ ਪਾਵਨ ਦਰਸ਼ਨ ਸਥਾਨ ਸਰਵਜਨਕ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ (Read-Only) ਹੈ। ਕੇਵਲ ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਹੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਸਰੂਪ ਸਥਾਪਿਤ ਜਾਂ ਬਦਲ ਸਕਦੇ ਹਨ।'
                : language === 'en'
                ? '🔒 This sacred darshan frame is read-only for visitors. Only the Authorized Admin can set or change Satguru Kabir Saheb’s portrait.'
                : '🔒 यह पावन दर्शन स्थल सभी साधकों हेतु सुरक्षित (Read-Only) है। केवल अधिकृत एडमिन ही सतगुरु कबीर साहेब का पावन स्वरूप स्थापित या परिवर्तित कर सकते हैं।'}
            </p>
          )}

          {/* Sacred Mantra & Offer Flowers Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleOfferFlowers}
              style={{
                backgroundColor: theme.sacredMaroon,
                color: '#FFFFFF',
              }}
              className="px-6 py-3 rounded-2xl font-bold font-serif text-sm sm:text-base flex items-center gap-2.5 shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              <Flower2 className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>
                {language === 'pb'
                  ? `ਪੁਸ਼ਪ ਅਰਪਣ ਕਰੋ (${flowerCount})`
                  : language === 'en'
                  ? `Offer Flowers (${flowerCount})`
                  : `पुष्प अर्पण करें (${flowerCount})`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineDarshanModule;
