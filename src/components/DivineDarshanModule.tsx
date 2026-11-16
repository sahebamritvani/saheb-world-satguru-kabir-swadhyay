import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Volume2, 
  Flower2, 
  ShieldCheck,
  Lock,
  Upload,
  RotateCcw,
  KeyRound
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getCustomDarshanImage, setCustomDarshanImage, subscribeToCustomPortrait } from '../services/customPortraitStore';
import { isAdminAuthenticated } from '../services/adminAuth';
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
  onOpenSettings,
}) => {
  const { theme } = useAppTheme();
  const { setLanguage } = useLanguage();

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [flowerCount, setFlowerCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('sahebworld_darshan_flowers') || '0', 10);
    } catch {
      return 0;
    }
  });

  const [fallingPetals, setFallingPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [customImage, setCustomImage] = useState<string | null>(() => getCustomDarshanImage());
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAdmin(isAdminAuthenticated());
    };
    window.addEventListener('sahebworld:admin-auth-change', handleAuthChange);
    const unsubscribe = subscribeToCustomPortrait((img) => {
      setCustomImage(img);
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuthChange);
      unsubscribe();
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) {
      showToast(language === 'hi' ? 'केवल एडमिन पावन स्वरूप बदल सकते हैं।' : 'Only Admin can change the portrait.');
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomDarshanImage(dataUrl);
        showToast(language === 'pb' ? 'ਪਾਵਨ ਸਰੂਪ ਸਫਲਤਾਪੂਰਵਕ ਬਦਲਿਆ ਗਿਆ' : language === 'en' ? 'Portrait updated successfully' : 'पावन स्वरूप सफलतापूर्वक बदला गया');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = () => {
    if (!isAdmin) return;
    setCustomDarshanImage(null);
    showToast(language === 'pb' ? 'ਮੂਲ ਸਥਾਨ ਰੀਸੈੱਟ ਹੋ ਗਿਆ' : language === 'en' ? 'Reset to default portrait' : 'मूल स्वरूप पर रीसेट किया गया');
  };

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
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
        language === 'pb' ? 'ਫੁੱਲ ਅਰਪਣ ਤੇ ਸਤਿਗੁਰੂ ਪਾਵਨ ਅਸੀਸ' : language === 'en' ? 'Offer Flowers & Satguru Sacred Blessing' : 'पुष्प अर्पण एवं सतगुरु पावन आशीष',
        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਕੋਟਿ-ਕੋਟਿ ਪ੍ਰਣਾਮ।' : language === 'en' ? 'Infinite salutations at the sacred feet of Satguru Kabir Saheb.' : 'सतगुरु कबीर साहेब के पावन चरणों में कोटि-कोटि वंदना।'
      );
    }
  };

  const handlePranamChant = () => {
    sacredHaptics.lightTap();
    const textToSpeak = language === 'pb' 
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
                        ? (theme.mode === 'mystic_dark' ? '#D97706' : theme.sacredMaroon)
                        : 'transparent',
                      color: isSelected
                        ? (theme.mode === 'mystic_dark' ? '#000000' : '#FFFFFF')
                        : (theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.textPrimary),
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
                <span className="font-bold text-xs sm:text-sm">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाओ'}</span>
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
              <span className="whitespace-nowrap">।।{language === 'pb' ? 'ਸਤਯਨਾਮ' : language === 'en' ? 'Satyanaam' : 'सत्यनाम'}।।</span>
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

        {/* Admin Status Banner (Only visible when Admin is logged in) */}
        {isAdmin && (
          <div 
            style={{
              backgroundColor: theme.mode === 'mystic_dark' ? '#1E293B' : '#ECFDF5',
              borderColor: '#10B981',
            }}
            className="p-3.5 sm:p-4 rounded-2xl border-2 shadow-xs flex items-center justify-between gap-3 animate-fadeIn"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h5 className="text-xs sm:text-sm font-black font-serif text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                  <span>👑 सतगुरु साहेब एडमिन मोड सक्रिय (Admin Authorized)</span>
                </h5>
                <p className="text-[0.6875rem] text-emerald-900/80 dark:text-emerald-300/80 font-serif">
                  आप एडमिन के रूप में पावन स्वरूप व सामग्री प्रबंधित करने के लिए अधिकृत हैं।
                </p>
              </div>
            </div>
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

          {/* Hidden File Input for Admin */}
          {isAdmin && (
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/*" 
              className="hidden" 
            />
          )}

          {/* Sanctum Sacred Card */}
          <div 
            style={{ borderColor: theme.accentGold, backgroundColor: theme.cardBg }}
            className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] rounded-3xl border-2 shadow-xl overflow-hidden flex flex-col items-center justify-center p-3 group bg-gradient-to-b from-amber-500/5 via-stone-500/5 to-amber-500/10 dark:from-zinc-900 dark:via-zinc-800/80 dark:to-zinc-900"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-inner border border-amber-500/30">
              <img 
                src={customImage || "/Saheb_World_icon.jpg"} 
                alt="Satguru Kabir Saheb Divine Darshan"
                className="w-full h-full object-cover rounded-xl select-none"
              />
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-amber-400/30 pointer-events-none" />
          </div>

          {/* Admin Upload & Reset Controls */}
          {isAdmin ? (
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-4 py-2.5 rounded-xl border-2 font-bold font-serif text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer shadow-xs"
              >
                <Upload className="w-4 h-4 text-amber-700" />
                <span>{language === 'pb' ? 'ਪਾਵਨ ਸਰੂਪ ਬਦਲੋ' : language === 'en' ? 'Change Portrait' : 'पावन स्वरूप बदलें'}</span>
              </button>

              {customImage && (
                <button
                  onClick={handleResetImage}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textSecondary,
                  }}
                  className="px-3 py-2.5 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:bg-black/5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਰੀਸੈੱਟ' : language === 'en' ? 'Reset' : 'रीसेट'}</span>
                </button>
              )}
            </div>
          ) : (
            <p className="text-xs font-serif opacity-60 italic">
              {language === 'hi' ? '🔒 यह पावन स्वरूप सार्वजनिक रूप से सुरक्षित एवं अपरिवर्तनीय है।' : '🔒 This sacred portrait is publically protected and immutable.'}
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
              <span>{language === 'pb' ? `ਪੁਸ਼ਪ ਅਰਪਣ ਕਰੋ (${flowerCount})` : language === 'en' ? `Offer Flowers (${flowerCount})` : `पुष्प अर्पण करें (${flowerCount})`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineDarshanModule;
