import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Clock, Info, ShieldCheck, ShieldAlert, Save, LogIn, ExternalLink, Volume2, CheckCircle2, Sunrise, Sunset, Sparkles, Activity, Lightbulb } from 'lucide-react';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { db, auth, signInWithGoogle, handleFirestoreError, OperationType } from '../lib/firebase';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { satyanaamAudio } from '../services/audioDhun';

interface NityaVaniSettingsProps {
  language: Language;
}

export const NityaVaniSettings: React.FC<NityaVaniSettingsProps> = ({ language }) => {
  const { theme } = useAppTheme();
  const t = translations[language];
  const isHi = language === 'hi';
  const isPb = language === 'pb';
  
  const [user, setUser] = useState<User | null>(null);

  // Morning reminder state (अमृतवेला नित्यम व ध्यान)
  const [morningEnabled, setMorningEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_morning_reminder_enabled');
      if (saved !== null) return saved === 'true';
      // legacy fallback
      const legacy = localStorage.getItem('sahebworld_nitya_vani_enabled');
      if (legacy !== null) return legacy === 'true';
    }
    return true; // enabled by default for seekers
  });

  const [morningTime, setMorningTime] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_morning_reminder_time');
      if (saved) return saved;
      const legacy = localStorage.getItem('sahebworld_nitya_vani_time');
      if (legacy) return legacy;
    }
    return '05:00';
  });

  // Evening reminder state (संध्या आरती व सुमिरन)
  const [eveningEnabled, setEveningEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_evening_reminder_enabled');
      if (saved !== null) return saved === 'true';
    }
    return true; // enabled by default for seekers
  });

  const [eveningTime, setEveningTime] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_evening_reminder_time');
      if (saved) return saved;
    }
    return '19:00';
  });

  // Daily Chintan reminder state
  const [chintanEnabled, setChintanEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_chintan_reminder_enabled');
      return saved === 'true';
    }
    return false;
  });

  const [chintanTime, setChintanTime] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_chintan_reminder_time');
      if (saved) return saved;
    }
    return '12:00';
  });

  // Mantra Tracker reminder state
  const [mantraEnabled, setMantraEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_mantra_reminder_enabled');
      return saved === 'true';
    }
    return false;
  });

  const [mantraTime, setMantraTime] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_mantra_reminder_time');
      if (saved) return saved;
    }
    return '16:00';
  });

  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [testAlertToast, setTestAlertToast] = useState<string | null>(null);
  const [activeScheduledNotice, setActiveScheduledNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [permission, setPermission] = useState<NotificationPermission>(() => {
    return typeof Notification !== 'undefined' ? Notification.permission : 'default';
  });

  const isIframe = typeof window !== 'undefined' && window.self !== window.top;

  // Active Background Scheduler: checks current time every 30 seconds
  useEffect(() => {
    const checkSchedule = () => {
      if (typeof window === 'undefined') return;
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTimeStr = `${hours}:${minutes}`;
      const todayDateStr = now.toISOString().split('T')[0];

      // Morning Trigger
      if (morningEnabled && currentTimeStr === morningTime) {
        const lastMorning = localStorage.getItem('sahebworld_last_morning_alert');
        if (lastMorning !== todayDateStr) {
          localStorage.setItem('sahebworld_last_morning_alert', todayDateStr);
          triggerScheduledAlert('morning');
        }
      }

      // Evening Trigger
      if (eveningEnabled && currentTimeStr === eveningTime) {
        const lastEvening = localStorage.getItem('sahebworld_last_evening_alert');
        if (lastEvening !== todayDateStr) {
          localStorage.setItem('sahebworld_last_evening_alert', todayDateStr);
          triggerScheduledAlert('evening');
        }
      }

      // Chintan Trigger
      if (chintanEnabled && currentTimeStr === chintanTime) {
        const lastChintan = localStorage.getItem('sahebworld_last_chintan_alert');
        if (lastChintan !== todayDateStr) {
          localStorage.setItem('sahebworld_last_chintan_alert', todayDateStr);
          triggerScheduledAlert('chintan');
        }
      }

      // Mantra Trigger
      if (mantraEnabled && currentTimeStr === mantraTime) {
        const lastMantra = localStorage.getItem('sahebworld_last_mantra_alert');
        if (lastMantra !== todayDateStr) {
          localStorage.setItem('sahebworld_last_mantra_alert', todayDateStr);
          triggerScheduledAlert('mantra');
        }
      }
    };

    const interval = setInterval(checkSchedule, 30000);
    // initial check
    checkSchedule();
    return () => clearInterval(interval);
  }, [morningEnabled, morningTime, eveningEnabled, eveningTime, language]);

  const triggerScheduledAlert = (type: 'morning' | 'evening' | 'chintan' | 'mantra') => {
    try {
      satyanaamAudio.ringSatyanaamTripleChime();
    } catch {}

    const title = 
      type === 'morning' ? (isHi ? '।।सत्यनाम।। प्रातः अमृतवेला नित्यम व ध्यान' : 'Satyanaam - Morning Nitnem') :
      type === 'evening' ? (isHi ? '।।सत्यनाम।। सायं संध्या आरती व नाम सुमिरन' : 'Satyanaam - Evening Aarti') :
      type === 'chintan' ? (isHi ? '।।सत्यनाम।। पावन दैनिक चिंतन समय' : 'Satyanaam - Daily Chintan Time') :
      (isHi ? '।।सत्यनाम।। नाम-सिमरन (मंत्र) ट्रैकर स्मरण' : 'Satyanaam - Mantra Tracker Reminder');

    const body = 
      type === 'morning' ? (isHi ? 'उठ जाग मुसाफिर भोर भई, अब रैन कहाँ जो सोवत है।' : 'Awaken to the sacred dawn.') :
      type === 'evening' ? (isHi ? 'सांझ भई दिन बीता, घट में जोत जगाओ।' : 'Evening falls. Kindle the flame of devotion.') :
      type === 'chintan' ? (isHi ? 'आज का पावन दैनिक चिंतन एवं साखी स्वाध्याय पूर्ण करें।' : 'Time for your daily contemplation and sacred study.') :
      (isHi ? 'अपने आज के नाम-सिमरन (माला) का लक्ष्य पूर्ण करें।' : 'Keep up with your daily mantra chanting goals.');

    setActiveScheduledNotice(body);
    setTimeout(() => setActiveScheduledNotice(null), 8000);

    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: '/favicon.ico',
          badge: '/favicon.ico',
        });
      } catch {}
    }
  };

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Settings Listener from Firestore
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const settingsRef = doc(db, 'users', user.uid, 'settings', 'default');
    const unsubscribe = onSnapshot(settingsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.morningEnabled !== undefined) {
          setMorningEnabled(Boolean(data.morningEnabled));
          localStorage.setItem('sahebworld_morning_reminder_enabled', String(data.morningEnabled));
        }
        if (data.morningTime) {
          setMorningTime(String(data.morningTime));
          localStorage.setItem('sahebworld_morning_reminder_time', String(data.morningTime));
        }
        if (data.eveningEnabled !== undefined) {
          setEveningEnabled(Boolean(data.eveningEnabled));
          localStorage.setItem('sahebworld_evening_reminder_enabled', String(data.eveningEnabled));
        }
        if (data.eveningTime) {
          setEveningTime(String(data.eveningTime));
          localStorage.setItem('sahebworld_evening_reminder_time', String(data.eveningTime));
        }
        if (data.chintanEnabled !== undefined) {
          setChintanEnabled(Boolean(data.chintanEnabled));
          localStorage.setItem('sahebworld_chintan_reminder_enabled', String(data.chintanEnabled));
        }
        if (data.chintanTime) {
          setChintanTime(String(data.chintanTime));
          localStorage.setItem('sahebworld_chintan_reminder_time', String(data.chintanTime));
        }
        if (data.mantraEnabled !== undefined) {
          setMantraEnabled(Boolean(data.mantraEnabled));
          localStorage.setItem('sahebworld_mantra_reminder_enabled', String(data.mantraEnabled));
        }
        if (data.mantraTime) {
          setMantraTime(String(data.mantraTime));
          localStorage.setItem('sahebworld_mantra_reminder_time', String(data.mantraTime));
        }
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${user.uid}/settings/default`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const requestPermission = async () => {
    if (typeof Notification === 'undefined' || isIframe) return 'denied';
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    } catch {
      return 'denied';
    }
  };

  const handleTestAlert = (type: 'morning' | 'evening' | 'chintan' | 'mantra') => {
    try {
      satyanaamAudio.ringSatyanaamTripleChime();
    } catch {}

    const title = 
      type === 'morning' ? (isHi ? 'प्रातः स्मरण (Test)' : 'Morning Reminder') :
      type === 'evening' ? (isHi ? 'सायं स्मरण (Test)' : 'Evening Reminder') :
      type === 'chintan' ? (isHi ? 'दैनिक चिंतन (Test)' : 'Daily Chintan Reminder') :
      (isHi ? 'मंत्र ट्रैकर (Test)' : 'Mantra Tracker Reminder');

    const body = 
      type === 'morning' ? (isHi ? 'प्रातः कालीन नित्यम स्वाध्याय करें।' : 'Morning Nitnem study.') :
      type === 'evening' ? (isHi ? 'सायं कालीन आरती व सुमिरन करें।' : 'Evening Aarti and Simran.') :
      type === 'chintan' ? (isHi ? 'आज का पावन चिंतन पूर्ण करें।' : 'Complete your daily contemplation.') :
      (isHi ? 'नाम-सिमरन का लक्ष्य पूर्ण करें।' : 'Complete your chanting goals.');

    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: '/favicon.ico',
        });
      } catch {}
    }

    setTestAlertToast(type === 'morning' ? (isHi ? 'प्रातः स्मरण परीक्षण सफल (घंटी बजी)' : 'Morning reminder tested') : (isHi ? 'सायं स्मरण परीक्षण सफल (घंटी बजी)' : 'Evening reminder tested'));
    setTimeout(() => setTestAlertToast(null), 3500);
  };

  const handleOpenInNewTab = () => {
    if (typeof window !== 'undefined') {
      window.open(window.location.href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSavedSuccess(false);

    // Save to local storage for immediate offline/guest use
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_morning_reminder_enabled', String(morningEnabled));
      localStorage.setItem('sahebworld_morning_reminder_time', morningTime);
      localStorage.setItem('sahebworld_evening_reminder_enabled', String(eveningEnabled));
      localStorage.setItem('sahebworld_evening_reminder_time', eveningTime);
      localStorage.setItem('sahebworld_chintan_reminder_enabled', String(chintanEnabled));
      localStorage.setItem('sahebworld_chintan_reminder_time', chintanTime);
      localStorage.setItem('sahebworld_mantra_reminder_enabled', String(mantraEnabled));
      localStorage.setItem('sahebworld_mantra_reminder_time', mantraTime);
      // legacy sync
      localStorage.setItem('sahebworld_nitya_vani_enabled', String(morningEnabled || eveningEnabled || chintanEnabled || mantraEnabled));
      localStorage.setItem('sahebworld_nitya_vani_time', morningTime);
    }

    // Sync to Firestore if user is signed in & verified
    if (user && user.emailVerified) {
      const safeTime = (val: string, fallback: string) =>
        /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val) ? val : fallback;
      const safeLang = language === 'pb' || language === 'en' ? language : 'hi';
      try {
        const settingsRef = doc(db, 'users', user.uid, 'settings', 'default');
        await setDoc(settingsRef, {
          morningEnabled: Boolean(morningEnabled),
          morningTime: safeTime(morningTime, '06:00'),
          eveningEnabled: Boolean(eveningEnabled),
          eveningTime: safeTime(eveningTime, '19:00'),
          chintanEnabled: Boolean(chintanEnabled),
          chintanTime: safeTime(chintanTime, '12:00'),
          mantraEnabled: Boolean(mantraEnabled),
          mantraTime: safeTime(mantraTime, '21:00'),
          nityaVaniEnabled: Boolean(morningEnabled || eveningEnabled || chintanEnabled || mantraEnabled),
          nityaVaniTime: safeTime(morningTime, '06:00'),
          language: safeLang,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}/settings/default`);
      }
    }

    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const [authNotice, setAuthNotice] = useState<string | null>(null);

  const handleSignIn = async () => {
    setAuthNotice(null);
    try {
      await signInWithGoogle();
    } catch {
      setAuthNotice(
        isHi
          ? 'गूगल साइन-इन के लिए कृपया ऐप को नए टैब में खोलें, अथवा बिना साइन-इन के सेटिंग्स सुरक्षित रखें।'
          : isPb
          ? 'ਗੂਗਲ ਸਾਈਨ-ਇਨ ਲਈ ਨਵੇਂ ਟੈਬ ਵਿੱਚ ਖੋਲ੍ਹੋ।'
          : 'Please open the app in a new tab to complete Google Sign-in.'
      );
      setTimeout(() => setAuthNotice(null), 5000);
    }
  };

  if (loading && user) {
    return (
      <div className="flex items-center justify-center p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-7 h-7 border-3 border-t-transparent rounded-full"
          style={{ borderColor: theme.sacredMaroon, borderTopColor: 'transparent' }}
        />
      </div>
    );
  }

  return (
    <div 
      className="p-4 sm:p-5 rounded-2xl border space-y-5 transition-all shadow-sm"
      style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
    >
      {/* Header with Icon and Subtitle */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-amber-900/10 dark:border-amber-100/10">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
            style={{ backgroundColor: theme.sacredMaroon }}
          >
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-serif" style={{ color: theme.textPrimary }}>
              {isHi ? 'दैनिक स्मरण सूचनाएँ (Push Notifications)' : isPb ? 'ਰੋਜ਼ਾਨਾ ਸਿਮਰਨ ਸੂਚਨਾਵਾਂ' : 'Daily Sadhana Push Notifications'}
            </h4>
            <p className="text-[11px] opacity-75" style={{ color: theme.textSecondary }}>
              {isHi ? 'साधकों के लिए सुबह-शाम नित्यम, आरती और ध्यान का पावन स्मरण' : isPb ? 'ਸਵੇਰ-ਸ਼ਾਮ ਨਿਤਨੇਮ ਤੇ ਧਿਆਨ ਦਾ ਪਾਵਨ ਚੇਤਾਵਨੀ ਸੰਦੇਸ਼' : 'Morning & Evening reminders for daily Nitnem, Aarti & Meditation'}
            </p>
          </div>
        </div>

        {user ? (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-green-100 text-green-800 border border-green-200 shrink-0">
            Cloud Sync
          </span>
        ) : (
          <button
            onClick={handleSignIn}
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg border bg-white dark:bg-zinc-800 hover:bg-gray-50 flex items-center gap-1 shrink-0 transition cursor-pointer"
            style={{ borderColor: theme.cardBorder, color: theme.sacredMaroon }}
            title={t.continueWithGoogle}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{t.continueWithGoogle}</span>
          </button>
        )}
      </div>

      {authNotice && (
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-200">
          {authNotice}
        </div>
      )}

      {/* Permission Status Bar */}
      <div 
        className="flex items-center justify-between p-3 rounded-xl border text-xs"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center gap-2">
          {permission === 'granted' ? (
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
          ) : (
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          )}
          <span className="font-semibold" style={{ color: theme.textPrimary }}>
            {permission === 'granted' 
              ? (isHi ? 'ब्राउज़र सूचना अनुमति सक्रिय है' : isPb ? 'ਬ੍ਰਾਊਜ਼ਰ ਨੋਟੀਫਿਕੇਸ਼ਨ ਕਿਰਿਆਸ਼ੀਲ ਹੈ' : 'Browser notifications enabled')
              : (isHi ? 'स्थानीय इन-ऐप स्मरण व ध्वनि सक्रिय' : isPb ? 'ਇਨ-ਐਪ ਸਿਮਰਨ ਕਿਰਿਆਸ਼ੀਲ' : 'In-app chimes & local alerts active')}
          </span>
        </div>
        {permission !== 'granted' && !isIframe && (
          <button
            type="button"
            onClick={requestPermission}
            className="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-bold text-[11px] hover:bg-amber-700 transition cursor-pointer"
          >
            {isHi ? 'अनुमति दें' : 'Grant'}
          </button>
        )}
      </div>

      {/* Responsive Guidance / Full Window Guidance if restricted in Iframe or Denied */}
      {(isIframe || permission === 'denied') && (
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 space-y-2 text-xs">
          <div className="flex items-start gap-2 text-amber-900 dark:text-amber-200">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              {t.pushNoticeIframe}
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenInNewTab}
            className="w-full py-2 px-3 rounded-lg border border-amber-300 dark:border-amber-700 bg-white/90 dark:bg-zinc-800 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-100/60 transition cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{t.openInNewTab}</span>
          </button>
        </div>
      )}

      {/* DUAL SLOTS: 1. Morning Reminder (प्रातः स्मरण) */}
      <div 
        className="p-4 rounded-xl border space-y-3 transition-all"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center">
              <Sunrise className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm block" style={{ color: theme.textPrimary }}>
                {isHi ? '१. प्रातः स्मरण: अमृतवेला नित्यम व ध्यान' : isPb ? '੧. ਸਵੇਰ ਦਾ ਸਿਮਰਨ: ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਨਿਤਨੇਮ' : '1. Morning: Amritvela Nitnem & Dhyan'}
              </span>
              <span className="text-[11px] opacity-70" style={{ color: theme.textSecondary }}>
                {morningEnabled ? (isHi ? 'सक्रिय • ब्रह्म मुहूर्त अनुशंसित' : 'Active • Dawn recommended') : (isHi ? 'निष्क्रिय' : 'Off')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMorningEnabled(!morningEnabled)}
            className={`w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 relative cursor-pointer ${
              morningEnabled ? 'bg-amber-700' : 'bg-gray-300 dark:bg-zinc-600'
            }`}
          >
            <motion.div
              animate={{ x: morningEnabled ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5.5 h-5.5 bg-white rounded-full shadow-md"
            />
          </button>
        </div>

        {morningEnabled && (
          <div className="pt-2 flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-1.5 pb-1 text-[11px] font-bold opacity-75" style={{ color: theme.textPrimary }}>
                <Clock className="w-3 h-3" />
                <span>{isHi ? 'प्रातः समय' : isPb ? 'ਸਵੇਰ ਦਾ ਸਮਾਂ' : 'Morning Time'}</span>
              </div>
              <input
                type="time"
                value={morningTime}
                onChange={(e) => setMorningTime(e.target.value)}
                className="w-full p-2 rounded-lg border text-sm font-bold font-mono text-center outline-none cursor-pointer"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              />
            </div>
            <button
              type="button"
              onClick={() => handleTestAlert('morning')}
              className="mt-4 px-3 py-2 rounded-lg border text-xs font-bold flex items-center gap-1 hover:bg-amber-500/10 cursor-pointer"
              style={{ borderColor: theme.accentGold, color: theme.sacredMaroon }}
              title="Test morning alert"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isHi ? 'परीक्षण' : 'Test'}</span>
            </button>
          </div>
        )}
      </div>

      {/* DUAL SLOTS: 2. Evening Reminder (सायं स्मरण) */}
      <div 
        className="p-4 rounded-xl border space-y-3 transition-all"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-700 flex items-center justify-center">
              <Sunset className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm block" style={{ color: theme.textPrimary }}>
                {isHi ? '२. सायं स्मरण: संध्या आरती व नाम सुमिरन' : isPb ? '੨. ਸ਼ਾਮ ਦਾ ਸਿਮਰਨ: ਸੰਧਿਆ ਆਰਤੀ' : '2. Evening: Sandhya Aarti & Simran'}
              </span>
              <span className="text-[11px] opacity-70" style={{ color: theme.textSecondary }}>
                {eveningEnabled ? (isHi ? 'सक्रिय • गोधूलि वेला अनुशंसित' : 'Active • Twilight recommended') : (isHi ? 'निष्क्रिय' : 'Off')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEveningEnabled(!eveningEnabled)}
            className={`w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 relative cursor-pointer ${
              eveningEnabled ? 'bg-amber-700' : 'bg-gray-300 dark:bg-zinc-600'
            }`}
          >
            <motion.div
              animate={{ x: eveningEnabled ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5.5 h-5.5 bg-white rounded-full shadow-md"
            />
          </button>
        </div>

        {eveningEnabled && (
          <div className="pt-2 flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-1.5 pb-1 text-[11px] font-bold opacity-75" style={{ color: theme.textPrimary }}>
                <Clock className="w-3 h-3" />
                <span>{isHi ? 'सायं समय' : isPb ? 'ਸ਼ਾਮ ਦਾ ਸਮਾਂ' : 'Evening Time'}</span>
              </div>
              <input
                type="time"
                value={eveningTime}
                onChange={(e) => setEveningTime(e.target.value)}
                className="w-full p-2 rounded-lg border text-sm font-bold font-mono text-center outline-none cursor-pointer"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              />
            </div>
            <button
              type="button"
              onClick={() => handleTestAlert('evening')}
              className="mt-4 px-3 py-2 rounded-lg border text-xs font-bold flex items-center gap-1 hover:bg-amber-500/10 cursor-pointer"
              style={{ borderColor: theme.accentGold, color: theme.sacredMaroon }}
              title="Test evening alert"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isHi ? 'परीक्षण' : 'Test'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Scheduled Alert Live Toast */}
      {activeScheduledNotice && (
        <div className="p-3 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold text-center shadow-lg animate-bounce flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>{activeScheduledNotice}</span>
        </div>
      )}

      {/* Save Settings Action */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-[0.98] shadow cursor-pointer"
          style={{ backgroundColor: savedSuccess ? '#15803d' : theme.sacredMaroon }}
        >
          {saving ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
          ) : savedSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>{isHi ? 'स्मरण सेटिंग्स सुरक्षित हो गईं!' : isPb ? 'ਸੈਟਿੰਗਾਂ ਸੰਭਾਲੀਆਂ ਗਈਆਂ!' : 'Reminders saved successfully!'}</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>{isHi ? 'स्मरण सेटिंग्स सुरक्षित करें (Save Reminders)' : isPb ? 'ਸੈਟਿੰਗਾਂ ਸੰਭਾਲੋ' : 'Save Reminder Settings'}</span>
            </>
          )}
        </button>
      </div>

      {/* Animated Confirmation Toast */}
      <AnimatePresence>
        {testAlertToast && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="p-2.5 rounded-xl bg-green-50 border border-green-200 text-green-900 text-xs text-center font-bold flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>{testAlertToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
