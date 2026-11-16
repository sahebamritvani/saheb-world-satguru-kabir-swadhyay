import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WifiOff, Wifi, X, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAppTheme } from '../theme/ThemeContext';
import { offlineScriptureCache } from '../services/offlineScriptureCache';
import { useOnlineStatus } from '../hooks/usePWAInstall';

interface NetworkStatusIndicatorProps {
  language?: Language;
}

export const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({ language: propLang }) => {
  const { language: ctxLang } = useLanguage();
  const { isDarkMode } = useAppTheme();
  const language = propLang || ctxLang;
  const isOnline = useOnlineStatus();

  const [showOnlineToast, setShowOnlineToast] = useState<boolean>(false);
  const [isOfflineToastDismissed, setIsOfflineToastDismissed] = useState<boolean>(false);
  const [wasOffline, setWasOffline] = useState<boolean>(false);

  useEffect(() => {
    offlineScriptureCache.initializeCache().catch(() => {});
  }, []);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setShowOnlineToast(false);
      setIsOfflineToastDismissed(false);
    } else if (wasOffline) {
      setShowOnlineToast(true);
      const timer = window.setTimeout(() => {
        setShowOnlineToast(false);
      }, 3500);
      return () => window.clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  const localizedMessages = {
    offlineTitle: {
      hi: 'ऑफ़लाइन मोड सक्रिय',
      pb: 'ਔਫਲਾਈਨ ਮੋਡ ਚਾਲੂ',
      en: 'Offline Mode Active'
    },
    offlineDesc: {
      hi: 'नितनेम गुटका, सत्यनाम धुन, साखियाँ व सभी ग्रंथ बिना इंटरनेट पूर्णतः उपलब्ध हैं।',
      pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ, ਸਤਯਨਾਮ ਧੁਨ, ਸਾਖੀਆਂ ਤੇ ਸਾਰੇ ਗ੍ਰੰਥ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਪੂਰੀ ਤਰ੍ਹਾਂ ਉਪਲਬਧ ਹਨ।',
      en: 'Nitnem Gutka, Satyanaam Dhun, Sakhis & all scriptures are working offline.'
    },
    onlineMsg: {
      hi: 'इंटरनेट पुनः जुड़ गया · सभी साधन सिंक हैं',
      pb: 'ਇੰਟਰਨੈੱਟ ਮੁੜ ਜੁੜ ਗਿਆ · ਸਾਰੇ ਸਾਧਨ ਸਿੰਕ ਹਨ',
      en: 'Back Online · Content Synchronized'
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {!isOnline && !isOfflineToastDismissed && (
          <motion.aside
            key="offline-toast"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Offline Mode Notification"
            style={{
              backgroundColor: isDarkMode ? '#18130E' : '#FFFDF9',
              borderColor: isDarkMode ? '#F59E0B' : '#D97706',
              color: isDarkMode ? '#FFFDF7' : '#2D1B0F',
            }}
            className="pointer-events-auto max-w-sm sm:max-w-md p-3.5 rounded-2xl border-2 shadow-2xl backdrop-blur-md flex items-start gap-3 text-left font-serif select-none"
          >
            <div
              style={{
                backgroundColor: isDarkMode ? '#2A2016' : '#FEF3C7',
                borderColor: isDarkMode ? 'rgba(253, 230, 138, 0.4)' : '#F59E0B',
              }}
              className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
            >
              <WifiOff className="w-5 h-5 text-amber-600" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black">
                <BookOpen className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 shrink-0" />
                <span style={{ color: isDarkMode ? '#FDE68A' : '#8C2818' }}>
                  {localizedMessages.offlineTitle[language]}
                </span>
              </div>
              <p
                style={{ color: isDarkMode ? '#E2D9C8' : '#5A3A17' }}
                className="text-[11px] sm:text-xs font-sans mt-1 leading-snug"
              >
                {localizedMessages.offlineDesc[language]}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOfflineToastDismissed(true)}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition cursor-pointer shrink-0"
              title="Dismiss"
              aria-label="Dismiss offline notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.aside>
        )}

        {isOnline && showOnlineToast && (
          <motion.div
            key="online-toast"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto max-w-sm p-3 rounded-2xl bg-emerald-950/95 text-emerald-100 border-2 border-emerald-500/60 shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-xs font-bold font-serif"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-800/60 border border-emerald-400/50 flex items-center justify-center shrink-0">
              <Wifi className="w-4 h-4 text-emerald-300" />
            </div>
            <span className="flex-1">{localizedMessages.onlineMsg[language]}</span>
            <button
              type="button"
              onClick={() => setShowOnlineToast(false)}
              className="p-1 rounded-md hover:bg-white/10 text-emerald-300 transition cursor-pointer"
              aria-label="Dismiss online notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
