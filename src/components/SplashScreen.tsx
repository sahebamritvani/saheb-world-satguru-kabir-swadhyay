import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { getCustomDarshanImage, subscribeToCustomPortrait } from '../services/customPortraitStore';

interface SplashScreenProps {
  language: Language;
  onFinish: () => void;
  onSelectLanguage?: (lang: Language) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  language,
  onFinish,
  onSelectLanguage,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeLang, setActiveLang] = useState<Language>(language);
  const [customImage, setCustomImage] = useState<string | null>(() => getCustomDarshanImage());
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    const unsubscribe = subscribeToCustomPortrait((img) => {
      setCustomImage(img);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  // Synchronize internal state with external language prop
  useEffect(() => {
    setActiveLang(language);
  }, [language]);

  useEffect(() => {
    // Keep splash screen visible for divine darshan, then smoothly fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    const finishTimer = setTimeout(() => {
      onFinishRef.current();
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const handleManualEnter = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinishRef.current();
    }, 150);
  };

  // Top Header text according to active language state
  const topHeaderDisplay = activeLang === 'pb'
    ? '🌹॥ ਸਤਯਨਾਮ ॥🌹'
    : activeLang === 'en'
    ? '🌹|| Satyanaam ||🌹'
    : '🌹॥ सत्यनाम ॥🌹';

  // Bottom Title according to active language state
  const titleText = activeLang === 'pb'
    ? 'ਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ'
    : activeLang === 'en'
    ? 'Bandichoor Satguru Kabir Saheb'
    : 'बंदीछोड़ सतगुरु कबीर साहेब';

  const subtitleText = activeLang === 'pb'
    ? 'ਪਾਵਨ ਆਤਮ-ਗਿਆਨ ਅਤੇ ਸਵਾਧਿਆਏ'
    : activeLang === 'en'
    ? 'Sacred Spiritual Wisdom & Swadhyay'
    : 'पावन आत्म-ज्ञान एवं स्वाध्याय';

  const footerText = activeLang === 'pb'
    ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।। 🙏'
    : activeLang === 'en'
    ? '|| Saheb Bandagi Saheb || 🙏'
    : '।। साहेब बंदगी साहेब ।। 🙏';

  // Ring text repetition string for 360-degree spinning overlay
  const ringTextString = activeLang === 'pb'
    ? '॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ ॥ ਸਤਯਨਾਮ ॥ '
    : activeLang === 'en'
    ? '|| Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || || Satyanaam || '
    : '॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ॥ सत्यनाम ॥ ';

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          onClick={onFinish}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between py-10 px-4 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F3EAD8] text-stone-900 select-none cursor-pointer transition-opacity duration-500 ease-in-out overflow-y-auto"
        >
          {/* Top Language-Sensitive Header - Balanced */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-serif font-black text-amber-800 tracking-[0.2em] drop-shadow-sm flex items-center gap-2"
          >
            <span className="opacity-60">🌹</span>
            {topHeaderDisplay.replace(/🌹/g, '').replace(/॥/g, '').replace(/\|\|/g, '').trim()}
            <span className="opacity-60">🌹</span>
          </motion.div>

          <div className="relative flex items-center justify-center w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] my-2">
            {/* 1. CENTRAL SYMBOLIC MEDALLION */}
            <div 
              style={{ backgroundColor: '#4A151B', borderColor: '#D97706' }}
              className="absolute z-10 w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border-[4px] shadow-2xl flex items-center justify-center overflow-hidden"
            >
              {customImage ? (
                <img 
                  src={customImage} 
                  alt="Custom Darshan"
                  className="w-full h-full object-cover select-none"
                />
              ) : (
                <div className="text-amber-500/30 text-5xl font-serif font-black tracking-widest">॥</div>
              )}
            </div>

            {/* 2. DYNAMIC ROTATING CHAKRA OVERLAY - BALANCED CIRCUMFERENCE */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-xl overflow-visible">
                <defs>
                  <path id="chakraCirclePath" d="M 150, 150 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Outer Sacred Borders */}
                <circle cx="150" cy="150" r="135" fill="none" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="150" cy="150" r="115" fill="none" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4" />

                {/* Rotating Solid Typography Text */}
                <text
                  fill="#8C2818"
                  fontSize="14.5"
                  fontWeight="900"
                  fontFamily="Noto Serif Devanagari, Noto Serif Gurmukhi, serif"
                  filter="url(#goldGlow)"
                  letterSpacing="0.05em"
                >
                  <textPath 
                    href="#chakraCirclePath" 
                    startOffset="0%"
                  >
                    {ringTextString}
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Sacred Titles Below circular Emblem */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-1.5"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#8C2818] tracking-wide drop-shadow-xs">
              {titleText}
            </h1>
            <p className="text-sm sm:text-base text-[#964B15] font-serif font-bold max-w-xs sm:max-w-md mx-auto">
              {subtitleText}
            </p>
          </motion.div>

          {/* Bottom Footer & Saffron Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-sm text-center pb-2 flex flex-col items-center gap-2.5"
          >
            <div className="w-full bg-[#EEDBBD]/80 border border-amber-300/40 h-2 rounded-full overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-[#EA580C] via-[#F59E0B] to-[#FBBF24] h-full rounded-full animate-[progress_2.8s_linear_forwards]" />
            </div>

            <div className="text-xs sm:text-sm font-serif font-bold text-[#8C2818] tracking-wide">
              {footerText}
            </div>

            {/* Direct Enter Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleManualEnter();
              }}
              className="mt-1 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-serif font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-400/40 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>
                {activeLang === 'pb' 
                  ? 'ਪਾਵਨ ਗ੍ਰੰਥਾਲਯ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰੋ' 
                  : activeLang === 'en' 
                  ? 'Enter Sacred Granth Sanctuary' 
                  : 'पावन ग्रन्थालय में प्रवेश करें'}
              </span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
