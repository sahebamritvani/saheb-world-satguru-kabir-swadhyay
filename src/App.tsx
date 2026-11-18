/**
 * Saheb World - Satguru Kabir Saheb Swadhyay Progressive Web App
 * Dedicated to the sacred teachings of Satguru Kabir Saheb
 * (Sakhi Sangrah, Kabir Sagar, Bijak)
 */

import React, { useState, useEffect, useMemo } from 'react';
import { SpiritualThemeProvider, useAppTheme } from './theme/ThemeContext';
import { LanguageProvider, useLanguage, getScriptDirection } from './context/LanguageContext';
import { Layout } from './components/Layout';
import { DailyPawanSakhi } from './components/DailyPawanSakhi';
import { SwadhyayReader } from './components/SwadhyayReader';
import { AkhandPath } from './components/AkhandPath';
import { MasterGranthLibrary } from './components/MasterGranthLibrary';
import { CoreModulesDashboard } from './components/CoreModulesDashboard';
import { NitnemGutkaReader } from './components/NitnemGutkaReader';
import { SpiritualDiary } from './components/SpiritualDiary';
import { SpiritualCalendar } from './components/SpiritualCalendar';
import { MantraTracker } from './components/MantraTracker';
import { AudioLibrary } from './components/AudioLibrary';
import { UniverseMap } from './components/UniverseMap';
import { AatmaBhushanModule } from './components/AatmaBhushanModule';
import { KabirParichayFourYugas } from './components/KabirParichayFourYugas';
import { DeepSearch } from './components/DeepSearch';
import { MeditationTimer } from './components/MeditationTimer';
import { CommunityBoard } from './components/CommunityBoard';
import { AppHealthDiagnostic } from './components/AppHealthDiagnostic';
import { NityaVaniSettings } from './components/NityaVaniSettings';
import { SatyanaamDhunPlayer } from './components/SatyanaamDhunPlayer';
import { SatyaNaamMahaMargdarshika } from './components/SatyaNaamMahaMargdarshika';
import { SacredAshrams } from './components/SacredAshrams';
import { AutoCorrectTool } from './components/AutoCorrectTool';
import { UlatvasiQuiz } from './components/UlatvasiQuiz';
import { UlatvasiLibrary } from './components/UlatvasiLibrary';
import { DainikChintan } from './components/DainikChintan';
import { GuruJiDasSutraView } from './components/GuruJiDasSutraView';
import { DiscourseEngine } from './components/DiscourseEngine';
import { RosePetalShower } from './components/RosePetalShower';
import { SettingsModal } from './components/SettingsModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { SplashScreen } from './components/SplashScreen';

import { NetworkStatusIndicator } from './components/NetworkStatusIndicator';

import { SacredMaryadaModal } from './components/SacredMaryadaModal';
import { DivineGuidance } from './components/DivineGuidance';
import { SpiritualDiscipline } from './components/SpiritualDiscipline';
import { SacredLeelas } from './components/SacredLeelas';
import { AartiSanctuary } from './components/AartiSanctuary';
import { ShabdKosha } from './components/ShabdKosha';
import { SatsangVideoLibrary } from './components/SatsangVideoLibrary';
import { DailySadhanaGoal } from './components/DailySadhanaGoal';
import { SpiritualGrowthDashboard } from './components/SpiritualGrowthDashboard';
import { BhajanRepository } from './components/BhajanRepository';
import { DamakhedaGranthIndexView } from './components/DamakhedaGranthIndexView';
import { AcharyaParampara } from './components/AcharyaParampara';
import { DivineDarshanModule } from './components/DivineDarshanModule';
import { SggsKabirBaniEngine } from './components/SggsKabirBaniEngine';
import { NatureWallpaperEngine } from './components/NatureWallpaperEngine';
import { DailyHukamnamaView } from './components/DailyHukamnamaView';
import { ChetawaniSaarang } from './components/ChetawaniSaarang';
import { DohaMemoryTrainer } from './components/DohaMemoryTrainer';
import { sakhisDatabase, getDailyPawanSakhi } from './data/sakhis';
import { Language, AppView, Sakhi, DiaryEntry } from './types';
import { translations } from './data/translations';
import { satyanaamAudio } from './services/audioDhun';
import { analytics } from './services/analytics';
import { motion, AnimatePresence } from 'motion/react';

function MainApp() {
  const { isSahajMode, setIsSahajMode } = useAppTheme();
  const { language, setLanguage } = useLanguage();

  // Initial app telemetry
  useEffect(() => {
    analytics.logEvent({ 
      name: 'app_open', 
      params: { 
        platform: typeof window !== 'undefined' ? (window.navigator as any).userAgentData?.platform || 'Web' : 'Web', 
        version: '1.2.0' 
      } 
    });
  }, []);

  // URL Routing Sync
  const getValidViewFromUrl = (): AppView => {
    if (typeof window === 'undefined') return 'daily';
    // Clean up hash: #/view or #view or just view
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    
    // Map of alias to actual view if needed
    const viewMap: Record<string, AppView> = {
      '': 'daily',
      'swadhyay': 'swadhyay',
      'das-sutra': 'das-sutra',
      'dainik-chintan': 'dainik-chintan',
      'nitnem-gutka': 'nitnem-gutka',
      'quiz': 'quiz',
      'ulatvasi-quiz': 'ulatvasi-quiz',
      'ulatvasi-library': 'ulatvasi-library',
      'akhand-path': 'akhand-path',
      'grantha': 'grantha',
      'diary': 'diary',
      'dhun': 'dhun',
      'jantri': 'jantri',
      'mantra-tracker': 'mantra-tracker',
      'audio-library': 'audio-library',
      'universe-map': 'universe-map',
      'health-diagnostic': 'health-diagnostic',
      'deep-search': 'deep-search',
      'meditation-timer': 'meditation-timer',
      'community-board': 'community-board',
      'life-journey': 'life-journey',
      'auto-correct': 'auto-correct',
      'sacred-ashrams': 'sacred-ashrams',
      'discourse-engine': 'discourse-engine',
      'divine-guidance': 'divine-guidance',
      'spiritual-discipline': 'spiritual-discipline',
      'sacred-leelas': 'sacred-leelas',
      'aarti-sanctuary': 'aarti-sanctuary',
      'shabd-kosha': 'shabd-kosha',
      'satsang-video': 'satsang-video',
      'sadhana-goals': 'sadhana-goals',
      'growth-dashboard': 'growth-dashboard',
      'bhajan-repository': 'bhajan-repository',
      'damakheda-index': 'damakheda-index',
      'acharya-parampara': 'acharya-parampara',
      'divine-darshan': 'divine-darshan',
      'chetavani-saarang': 'chetavani-saarang',
      'sggs-kabir-bani': 'sggs-kabir-bani',
      'doha-memory': 'doha-memory',
      'satya-naam': 'satya-naam',
      'aatma-bhushan': 'aatma-bhushan',
      'gyan-chakra': 'gyan-chakra',
      'nature-wallpaper': 'nature-wallpaper',
      'hukamnama': 'hukamnama'
    };
    
    if (rawHash && !viewMap[rawHash]) {
      console.warn(`[Navigation] Invalid hash provided: "${rawHash}". Falling back to 'daily'.`);
      return 'daily';
    }

    return viewMap[rawHash] || 'daily';
  };

  const [currentView, setCurrentView] = useState<AppView>(getValidViewFromUrl);

  const handleSelectView = (view: AppView, shouldPushHistory = true) => {
    console.log(`[Navigation] Navigating to view: ${view}`);
    // If user explicitly selects any other feature, disable Sahaj mode so it opens cleanly
    if (isSahajMode && view !== 'daily' && view !== 'meditation-timer') {
      setIsSahajMode(false);
    }
    setCurrentView(view);
    if (shouldPushHistory && typeof window !== 'undefined') {
      try {
        const newHash = view === 'daily' ? '' : `#${view}`;
        // Use replaceState to avoid cluttering history for every click if desired
        window.history.pushState({ view }, '', window.location.pathname + window.location.search + newHash);
      } catch {}
    }
  };

  // Listen to browser navigation (back/forward and hash changes) and custom open view events
  useEffect(() => {
    const handleUrlChange = () => {
      const view = getValidViewFromUrl();
      setCurrentView(view);
    };

    const handleOpenView = (e: Event) => {
      const customEvent = e as CustomEvent;
      const targetView = customEvent.detail?.view as AppView;
      if (targetView) {
        handleSelectView(targetView);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('sahebworld_open_view', handleOpenView as EventListener);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('sahebworld_open_view', handleOpenView as EventListener);
    };
  }, []);
  
  // Selected date for daily sakhi (defaults to today, automatically advances at midnight)
  const [dailyDate, setDailyDate] = useState<Date>(() => new Date());

  // Deterministically computed Daily Pawan Sakhi for dailyDate (rotates daily at 12:00 AM)
  const dailySakhi = useMemo(() => getDailyPawanSakhi(dailyDate), [dailyDate]);
  const [customDailySakhi, setCustomDailySakhi] = useState<Sakhi | null>(null);
  const currentDailySakhi = customDailySakhi || dailySakhi;

  // Active sakhi for dedicated Swadhyay or Quiz
  const [activeSakhi, setActiveSakhi] = useState<Sakhi>(() => getDailyPawanSakhi());
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      return localStorage.getItem('sahebworld_splash_on_launch') !== 'false';
    } catch {
      return true;
    }
  });

  const handleFinishSplash = () => {
    setShowSplash(false);
  };
  const [isBlessingOpen, setIsBlessingOpen] = useState(false);
  const [blessingInfo, setBlessingInfo] = useState<{ title?: string; message?: string }>({});
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isMaryadaOpen, setIsMaryadaOpen] = useState<boolean>(false);

  // Open Sacred Maryada Modal automatically on startup after Splash Screen finishes, if not dismissed today
  useEffect(() => {
    if (showSplash) return;
    if (typeof window !== 'undefined') {
      try {
        const todayStr = new Date().toISOString().split('T')[0];
        const lastDismissed = localStorage.getItem('sahebworld_maryada_dismissed_date');
        if (lastDismissed !== todayStr) {
          setIsMaryadaOpen(true);
        }
      } catch (e) {
        console.warn('Error reading Maryada storage:', e);
      }
    }
  }, [showSplash]);
  const [isDhunPlaying, setIsDhunPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [autoCorrectInitialText, setAutoCorrectInitialText] = useState('');
  const [diaryInitialText, setDiaryInitialText] = useState('');
  const [diaryInitialSakhiNum, setDiaryInitialSakhiNum] = useState<number | undefined>(undefined);
  const [sakhiUpdateVersion, setSakhiUpdateVersion] = useState(0);

  const handleOpenDiaryWithVerse = (verseText: string, sakhiNumber?: number) => {
    setDiaryInitialText(verseText);
    setDiaryInitialSakhiNum(sakhiNumber);
    setCurrentView('diary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Re-render when bulk replacements or database harmonizations are applied
  useEffect(() => {
    const handleSakhisUpdated = () => {
      setSakhiUpdateVersion((prev) => prev + 1);
    };
    window.addEventListener('sahebworld:sakhis-updated', handleSakhisUpdated);
    return () => window.removeEventListener('sahebworld:sakhis-updated', handleSakhisUpdated);
  }, []);

  // Global Emergency Escape & Key Listener to ensure 'daily' landing view is always reachable
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSettingsOpen(false);
        setIsAccessibilityOpen(false);
        setIsMaryadaOpen(false);
        setIsBlessingOpen(false);
        setCurrentView('daily');
        if (typeof window !== 'undefined') {
          window.history.pushState(null, '', '#/daily');
        }
      }
    };

    const handleEmergencyReset = () => {
      setIsSettingsOpen(false);
      setIsAccessibilityOpen(false);
      setIsMaryadaOpen(false);
      setIsBlessingOpen(false);
      setCurrentView('daily');
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', '#/daily');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('sahebworld:emergency-reset', handleEmergencyReset);
    window.addEventListener('sahebworld_reset_to_daily', handleEmergencyReset);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('sahebworld:emergency-reset', handleEmergencyReset);
      window.removeEventListener('sahebworld_reset_to_daily', handleEmergencyReset);
    };
  }, []);

  // Global touchstart emergency escape handler for stuck navigation
  useEffect(() => {
    let tapCount = 0;
    let lastTapTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      // 1. Reset on 3-finger simultaneous touch
      if (e.touches && e.touches.length >= 3) {
        console.warn("[Navigation Emergency] 3-finger touch detected. Resetting to daily view.");
        window.dispatchEvent(new CustomEvent('sahebworld:emergency-reset'));
        return;
      }

      // 2. Reset on 5 rapid consecutive taps
      const now = Date.now();
      if (now - lastTapTime < 500) {
        tapCount += 1;
      } else {
        tapCount = 1;
      }
      lastTapTime = now;

      if (tapCount >= 5) {
        console.warn("[Navigation Emergency] 5 rapid taps detected. Resetting to daily view.");
        window.dispatchEvent(new CustomEvent('sahebworld:emergency-reset'));
        tapCount = 0;
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useEffect(() => {
    const handleOpenMaryada = () => setIsMaryadaOpen(true);
    window.addEventListener('sahebworld_open_maryada', handleOpenMaryada);
    return () => {
      window.removeEventListener('sahebworld_open_maryada', handleOpenMaryada);
    };
  }, []);

  // Auto-advance daily sakhi when calendar day changes (at midnight or when tab is reopened)
  useEffect(() => {
    const checkDateChange = () => {
      const now = new Date();
      setDailyDate((prevDate) => {
        const isSameDay =
          prevDate.getFullYear() === now.getFullYear() &&
          prevDate.getMonth() === now.getMonth() &&
          prevDate.getDate() === now.getDate();
        return isSameDay ? prevDate : now;
      });
    };

    const intervalId = setInterval(checkDateChange, 30000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkDateChange();
      }
    };
    window.addEventListener('focus', checkDateChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', checkDateChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    satyanaamAudio.setLanguage(language);
    
    // Dynamically update root <html> element 'dir' & 'lang' attributes
    // Gurmukhi (Punjabi), Devanagari (Hindi), and Latin (English) -> 'ltr'
    if (typeof document !== 'undefined') {
      const scriptDir = getScriptDirection(language);
      const htmlLang = language === 'pb' ? 'pa' : language;
      document.documentElement.setAttribute('dir', scriptDir);
      document.documentElement.setAttribute('lang', htmlLang);
      document.documentElement.setAttribute('data-lang', language);
      document.documentElement.dir = scriptDir;
      document.documentElement.lang = htmlLang;
      if (document.body) {
        document.body.setAttribute('dir', scriptDir);
        document.body.setAttribute('data-lang', language);
        document.body.dir = scriptDir;
      }
    }
  }, [language]);

  useEffect(() => {
    const handleOpenSettings = () => setIsSettingsOpen(true);
    const handleOpenAccessibility = () => setIsAccessibilityOpen(true);
    window.addEventListener('sahebworld_open_settings', handleOpenSettings);
    window.addEventListener('sahebworld_open_accessibility', handleOpenAccessibility);
    return () => {
      window.removeEventListener('sahebworld_open_settings', handleOpenSettings);
      window.removeEventListener('sahebworld_open_accessibility', handleOpenAccessibility);
    };
  }, []);

  const handleToggleDhun = () => {
    const newState = satyanaamAudio.toggleDhun();
    setIsDhunPlaying(newState);
  };

  const handleStartSwadhyay = (sakhi?: Sakhi) => {
    if (sakhi) setActiveSakhi(sakhi);
    setCurrentView('swadhyay');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = (sakhi?: Sakhi) => {
    if (sakhi) setActiveSakhi(sakhi);
    setCurrentView('swadhyay');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBlessing = (title?: string, message?: string) => {
    setBlessingInfo({ title, message });
    setIsBlessingOpen(true);
  };

  const handleSaveToDiary = (reflectionNotes: string, sakhiNumber?: number) => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_diary_entries');
      let existing: DiaryEntry[] = [];
      if (saved) {
        try {
          existing = JSON.parse(saved);
        } catch {
          existing = [];
        }
      }

      const newEntry: DiaryEntry = {
        id: 'diary-' + Date.now(),
        sakhiNumber: sakhiNumber || activeSakhi.number,
        date: new Date().toISOString(),
        notes: reflectionNotes,
        categoryTag: activeSakhi.categoryTitle[language] || 'स्वाध्याय',
      };

      localStorage.setItem('sahebworld_diary_entries', JSON.stringify([newEntry, ...existing]));
    }
  };

  const handleSelectSakhiByNumber = (num: number) => {
    const found = sakhisDatabase.find((s) => s.number === num);
    if (found) {
      setActiveSakhi(found);
      setCurrentView('swadhyay');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Custom RTL-aware transition that automatically inverts slide-in X-offset based on document direction or language
  const rtlAwareTransition = () => {
    const docDir = typeof document !== 'undefined' ? (document.documentElement.dir || document.dir || '') : '';
    // Automatically invert x-offset for RTL document directions to maintain consistent flow
    const isInverted = docDir === 'rtl';
    const offset = isInverted ? -24 : 24;
    return {
      initial: { opacity: 0, x: offset },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -offset },
    };
  };

  const animVariants = rtlAwareTransition();

  return (
    <>
      <Layout
      currentView={currentView}
      onSelectView={handleSelectView}
      language={language}
      onSelectLanguage={setLanguage}
      onOpenSettings={() => setIsSettingsOpen(true)}
      onOpenBlessing={() => handleOpenBlessing()}
      isDhunPlaying={isDhunPlaying}
      onToggleDhun={handleToggleDhun}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={animVariants.initial}
          animate={animVariants.animate}
          exit={animVariants.exit}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full min-h-screen"
        >
          {/* View 1: Daily Pawan Sakhi Swadhyay */}
      {currentView === 'daily' && (
        <DailyPawanSakhi
          sakhi={currentDailySakhi}
          selectedDate={dailyDate}
          onSelectDate={(newDate) => {
            setDailyDate(newDate);
            setCustomDailySakhi(null);
          }}
          isCustomSakhiActive={customDailySakhi !== null}
          language={language}
          onStartSwadhyay={() => handleStartSwadhyay(currentDailySakhi)}
          onStartQuiz={() => handleStartQuiz(currentDailySakhi)}
          onOpenUlatvasiQuiz={() => {
            setCurrentView('ulatvasi-library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onToggleDhun={handleToggleDhun}
          onOpenDhunTab={() => setCurrentView('dhun')}
          isDhunPlaying={isDhunPlaying}
          onOpenBlessing={() => handleOpenBlessing()}
          onSaveToDiary={(refText) => handleSaveToDiary(refText, currentDailySakhi.number)}
          onOpenAkhandPath={() => {
            setCurrentView('akhand-path');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenMeditationTimer={() => {
            setCurrentView('meditation-timer');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectSakhi={(s) => {
            setCustomDailySakhi(s);
            setActiveSakhi(s);
          }}
          onRefreshSakhi={() => {
            const rand = sakhisDatabase[Math.floor(Math.random() * sakhisDatabase.length)];
            setCustomDailySakhi(rand);
            setActiveSakhi(rand);
          }}
          onNavigateToSearch={(query) => {
            setSearchQuery(query);
            setCurrentView('deep-search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateView={(view) => handleSelectView(view)}
          onOpenAutoCorrect={(text) => {
            setAutoCorrectInitialText(text);
            setCurrentView('auto-correct');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenDiaryWithVerse={handleOpenDiaryWithVerse}
          handleSelectSakhiByNumber={handleSelectSakhiByNumber}
        />
      )}

      {/* View 2: 5-Step Traditional Swadhyay Study */}
      {currentView === 'swadhyay' && (
        <SwadhyayReader
          key={`swadhyay-${activeSakhi?.id || 'none'}`}
          sakhi={activeSakhi}
          language={language}
          onChangeLanguage={setLanguage}
          onOpenBlessing={() =>
            handleOpenBlessing(
              translations[language].swadhyayBlessingTitle,
              translations[language].swadhyayBlessingMsg
            )
          }
          onSaveToDiary={(refText) => handleSaveToDiary(refText)}
          onStartQuiz={() => handleStartQuiz()}
          onSelectSakhi={(s) => handleStartSwadhyay(s)}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 3: Quiz redirect to integrated Swadhyay 10-Step Reader */}
      {currentView === 'quiz' && (
        <SwadhyayReader
          key={`quiz-${activeSakhi?.id || 'none'}`}
          sakhi={activeSakhi}
          language={language}
          onChangeLanguage={setLanguage}
          onOpenBlessing={() =>
            handleOpenBlessing(
              translations[language].swadhyayBlessingTitle,
              translations[language].swadhyayBlessingMsg
            )
          }
          onSaveToDiary={(refText) => handleSaveToDiary(refText)}
          onStartQuiz={() => handleStartQuiz()}
          onSelectSakhi={(s) => handleStartSwadhyay(s)}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Ulatvasi 3D Gaming Quiz & Leaderboard */}
      {currentView === 'ulatvasi-quiz' && (
        <UlatvasiQuiz
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={() =>
            handleOpenBlessing(
              translations[language].quizBlessingTitle,
              translations[language].quizBlessingMsg
            )
          }
        />
      )}

      {/* View: 250 Ulatvasi Library */}
      {currentView === 'ulatvasi-library' && (
        <UlatvasiLibrary
          language={language}
          onSelectLanguage={setLanguage}
          onSelectUlatvasi={(id) => {
            // Stay in library view as it now contains both collection and quiz
          }}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Doha Memory Trainer */}
      {currentView === 'doha-memory' && (
        <DohaMemoryTrainer
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
        />
      )}



      {/* View: Guru Ji 10 Sacred Sutras (सत्य वचन: १० पावन सूत्र) */}
      {currentView === 'das-sutra' && (
        <GuruJiDasSutraView
          language={language}
          onChangeLanguage={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title || '१० सूत्र संकल्प', msg || 'सत साहेब!')}
        />
      )}

      {/* View: Dainik Chintan (Daily Contemplation & Meditation Hub) */}
      {currentView === 'dainik-chintan' && (
        <DainikChintan
          language={language}
          onChangeLanguage={setLanguage}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title || 'चिंतन समर्पण', msg || 'सत साहेब!')}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 4: Akhand Path Continuous Scrolling & Auto-advance */}
      {currentView === 'akhand-path' && (
        <AkhandPath
          key={`akhand-path-${sakhiUpdateVersion}`}
          sakhis={[...sakhisDatabase]}
          language={language}
          onSelectSakhi={(sakhi) => handleStartSwadhyay(sakhi)}
          onOpenBlessing={() =>
            handleOpenBlessing(
              translations[language].akhandPathBlessingTitle,
              translations[language].akhandPathBlessingMsg
            )
          }
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Nitnem Gutka Saheb / Prabhat Path */}
      {currentView === 'nitnem-gutka' && (
        <NitnemGutkaReader
          language={language}
          onSelectLanguage={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
      )}

      {/* CORE MODULES & GRANTH VAULTS: Direct Views */}
      {currentView === 'grantha' && (
        <MasterGranthLibrary
          language={language}
          onSelectLanguage={setLanguage}
          onSelectView={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenDiary={() => setCurrentView('diary')}
          onOpenSwadhyay={(text) => {
            if (text) {
              setSearchQuery(text);
              setCurrentView('swadhyay');
            } else {
              setCurrentView('swadhyay');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
      )}

      {/* View 6: Personal Spiritual Diary / Journal */}
      {currentView === 'diary' && (
        <SpiritualDiary
          language={language}
          initialText={diaryInitialText}
          initialSakhiNumber={diaryInitialSakhiNum}
          onSelectSakhiNumber={handleSelectSakhiByNumber}
          onClose={() => {
            setDiaryInitialText('');
            setDiaryInitialSakhiNum(undefined);
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 8: Saheb Jantri (Spiritual Calendar) */}
      {currentView === 'jantri' && (
        <SpiritualCalendar
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenNitnem={() => {
            setCurrentView('grantha');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 9: Mantra Tracker (Sadhana) */}
      {currentView === 'mantra-tracker' && (
        <MantraTracker 
          language={language} 
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View 10: Audio Library */}
      {currentView === 'audio-library' && (
        <AudioLibrary 
          language={language} 
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View 11: Universe Map (Brahmand Darshan) */}
      {currentView === 'universe-map' && (
        <UniverseMap
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Satguru Kabir Saheb Parichay: चारों युगों की लीलाएँ */}
      {currentView === 'life-journey' && (
        <KabirParichayFourYugas
          language={language}
          onOpenSwadhyay={() => {
            setCurrentView('swadhyay');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 13: Deep Search Engine */}
      {currentView === 'deep-search' && (
        <DeepSearch 
          language={language} 
          initialQuery={searchQuery}
          onSelectSakhi={(sakhi) => handleStartSwadhyay(sakhi)}
          onSelectUlatvasi={(id) => {
            // Future: Scroll to specific Ulatvasi in library or open detail
            setCurrentView('ulatvasi-library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View 14: Meditation Timer */}
      {currentView === 'meditation-timer' && (
        <MeditationTimer 
          language={language} 
          onOpenDailySakhi={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View 15: Community Board */}
      {currentView === 'community-board' && (
        <CommunityBoard 
          language={language} 
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View: Spiritual Growth Dashboard & 10-Step Progress */}
      {currentView === 'growth-dashboard' && (
        <SpiritualGrowthDashboard 
          language={language} 
          onClose={() => setCurrentView('daily')}
          onNavigateToSwadhyay={(sakhiNum, step) => {
            if (sakhiNum) handleSelectSakhiByNumber(sakhiNum);
            setCurrentView('swadhyay');
          }}
          onNavigateView={(view) => setCurrentView(view)}
        />
      )}
      
      {/* View 12: App Health Diagnostic */}
      {currentView === 'health-diagnostic' && (
        <AppHealthDiagnostic 
          language={language} 
          onClose={() => setCurrentView('daily')}
        />
      )}

      {/* View: Sacred Ashrams & Locations */}
      {currentView === 'sacred-ashrams' && (
        <SacredAshrams 
          language={language} 
          onClose={() => setCurrentView('daily')}
          onOpenDhun={() => setCurrentView('dhun')}
          onOpenMeditation={() => setCurrentView('meditation-timer')}
        />
      )}

      {/* View 7: Satguru Satyanaam Resonance Dhun Player & Custom Audio */}
      {currentView === 'dhun' && (
        <SatyanaamDhunPlayer 
          language={language} 
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View 17: Auto-Correct Sacred Text Tool */}
      {currentView === 'auto-correct' && (
        <AutoCorrectTool 
          language={language} 
          onClose={() => {
            setAutoCorrectInitialText('');
            setCurrentView('daily');
          }}
          initialText={autoCorrectInitialText}
          onOpenSwadhyay={(sakhiNum) => handleSelectSakhiByNumber(sakhiNum)}
        />
      )}

      {/* View 18: Consolidated 5-Step Discourse Engine (Satguru Kabir Satyanaam Path-Pradarshak) */}
      {currentView === 'discourse-engine' && (
        <DiscourseEngine
          language={language}
          initialSakhi={activeSakhi}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Satguru Divine Guidance & Problem Solver */}
      {currentView === 'divine-guidance' && (
        <DivineGuidance
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
          onSaveToDiary={(notes) => handleSaveToDiary(notes)}
          onOpenSwadhyay={(sakhiNum) => {
            if (sakhiNum) handleSelectSakhiByNumber(sakhiNum);
            else {
              setCurrentView('swadhyay');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      )}

      {/* View: Panchamrit Niyam & Daily Spiritual Discipline */}
      {currentView === 'spiritual-discipline' && (
        <SpiritualDiscipline
          language={language}
          onSelectLanguage={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
        />
      )}

      {/* View: Sacred Leela Stories & Episodes */}
      {currentView === 'sacred-leelas' && (
        <SacredLeelas
          language={language}
          onSelectLanguage={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
          onOpenSwadhyay={(sakhiText) => {
            if (sakhiText) {
              setSearchQuery(sakhiText);
              setCurrentView('swadhyay');
            } else {
              setCurrentView('swadhyay');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Complete Sandhya Aarti & Prayer Sanctuary */}
      {currentView === 'aarti-sanctuary' && (
        <AartiSanctuary
          language={language}
          onSelectLanguage={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
        />
      )}

      {/* View: Kabir Shabd-Amrit Kosha (Mystical Glossary) */}
      {currentView === 'shabd-kosha' && (
        <ShabdKosha
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
          onOpenSwadhyay={(term) => {
            setSearchQuery(term);
            setCurrentView('deep-search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Sacred Satsang Video Discourses */}
      {currentView === 'satsang-video' && (
        <SatsangVideoLibrary
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Daily Sadhana Goals & Streaks Tracker */}
      {currentView === 'sadhana-goals' && (
        <DailySadhanaGoal
          language={language}
          onNavigateToSwadhyay={() => {
            setCurrentView('swadhyay');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToTimer={() => {
            setCurrentView('meditation-timer');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToMantra={() => {
            setCurrentView('mantra-tracker');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Traditional Damakheda Bhajan & Shabad Repository */}
      {currentView === 'bhajan-repository' && (
        <BhajanRepository
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Damakheda Granth-Suchi & Time-Based Dashboard */}
      {currentView === 'damakheda-index' && (
        <DamakhedaGranthIndexView
          language={language}
          onSelectSection={(secId) => {
            // Switch to nitnem-gutka and select section
            setCurrentView('nitnem-gutka');
            window.location.hash = '#nitnem-gutka';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Acharya Parampara History (placeholder) */}
      {currentView === 'acharya-parampara' && (
        <AcharyaParampara
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Satya Naam Maha Margdarshika */}
      {currentView === 'satya-naam' && (
        <SatyaNaamMahaMargdarshika
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Aatma Ke 16 Bhushan & Gyan-Chakra */}
      {(currentView === 'aatma-bhushan' || currentView === 'gyan-chakra') && (
        <AatmaBhushanModule
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSaveToDiary={(notes, sakhiNum) => handleOpenDiaryWithVerse(notes, sakhiNum)}
          onOpenDeepSearch={(q) => {
            setSearchQuery(q);
            setCurrentView('deep-search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Satguru Kabir Saheb Divine Sacred Darshan */}
      {currentView === 'divine-darshan' && (
        <DivineDarshanModule
          language={language}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBlessing={(title, msg) => handleOpenBlessing(title, msg)}
        />
      )}

      {/* View: Chetawani Saarang (Essence of Warnings) */}
      {currentView === 'chetavani-saarang' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ChetawaniSaarang 
            language={language} 
            onClose={() => {
              setCurrentView('daily');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenSwadhyay={(num) => handleSelectSakhiByNumber(num)}
          />
        </div>
      )}

      {/* View: Sri Guru Granth Sahib & Satguru Kabir Bani Engine */}
      {currentView === 'sggs-kabir-bani' && (
        <SggsKabirBaniEngine
          onBack={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Nature Wallpaper Engine */}
      {currentView === 'nature-wallpaper' && (
        <NatureWallpaperEngine
          language={language}
          onLanguageChange={setLanguage}
          onClose={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* View: Sri Guru Granth Sahib Kabir Daily Hukamnama */}
      {currentView === 'hukamnama' && (
        <DailyHukamnamaView
          language={language}
          onLanguageChange={setLanguage}
          onBack={() => {
            setCurrentView('daily');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenWallpaperEngine={() => {
            setCurrentView('nature-wallpaper');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Guaranteed Permanent Safety Fallback: Never Blank */}
      {![
        'daily', 'swadhyay', 'das-sutra', 'dainik-chintan', 'nitnem-gutka', 'quiz',
        'ulatvasi-quiz', 'ulatvasi-library', 'akhand-path', 'grantha', 'diary', 'dhun',
        'jantri', 'mantra-tracker', 'audio-library', 'universe-map', 'health-diagnostic',
        'deep-search', 'meditation-timer', 'community-board', 'life-journey', 'auto-correct',
        'sacred-ashrams', 'discourse-engine', 'divine-guidance', 'spiritual-discipline',
        'sacred-leelas', 'aarti-sanctuary', 'shabd-kosha', 'satsang-video', 'sadhana-goals',
        'growth-dashboard', 'bhajan-repository', 'damakheda-index', 'acharya-parampara',
        'divine-darshan', 'chetavani-saarang', 'sggs-kabir-bani', 'satya-naam', 'aatma-bhushan',
        'gyan-chakra', 'nature-wallpaper', 'hukamnama'
      ].includes(currentView) && (
        <DailyPawanSakhi
          sakhi={currentDailySakhi}
          selectedDate={dailyDate}
          onSelectDate={(newDate) => {
            setDailyDate(newDate);
            setCustomDailySakhi(null);
          }}
          isCustomSakhiActive={customDailySakhi !== null}
          language={language}
          onStartSwadhyay={() => handleStartSwadhyay(currentDailySakhi)}
          onStartQuiz={() => handleStartQuiz(currentDailySakhi)}
          onOpenUlatvasiQuiz={() => {
            setCurrentView('ulatvasi-library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onToggleDhun={handleToggleDhun}
          onOpenDhunTab={() => setCurrentView('dhun')}
          isDhunPlaying={isDhunPlaying}
          onOpenBlessing={() => handleOpenBlessing()}
          onSaveToDiary={(refText) => handleSaveToDiary(refText, currentDailySakhi.number)}
          onOpenAkhandPath={() => {
            setCurrentView('akhand-path');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenMeditationTimer={() => {
            setCurrentView('meditation-timer');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectSakhi={(s) => {
            setCustomDailySakhi(s);
            setActiveSakhi(s);
          }}
          onRefreshSakhi={() => {
            const rand = sakhisDatabase[Math.floor(Math.random() * sakhisDatabase.length)];
            setCustomDailySakhi(rand);
            setActiveSakhi(rand);
          }}
          onNavigateToSearch={(query) => {
            setSearchQuery(query);
            setCurrentView('deep-search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateView={(view) => handleSelectView(view)}
          onOpenAutoCorrect={(text) => {
            setAutoCorrectInitialText(text);
            setCurrentView('auto-correct');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenDiaryWithVerse={handleOpenDiaryWithVerse}
        />
      )}
        </motion.div>
      </AnimatePresence>

      {/* Global Rose Petal Shower & Divine Blessing Modal */}
      <RosePetalShower
        isOpen={isBlessingOpen}
        onClose={() => setIsBlessingOpen(false)}
        language={language}
        title={blessingInfo.title}
        message={blessingInfo.message}
      />

      {/* Global Settings Modal (Theming, Language, Audio, Notifications) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={language}
        onSelectLanguage={setLanguage}
        isDhunPlaying={isDhunPlaying}
        onToggleDhun={handleToggleDhun}
        onPreviewSplash={() => {
          setShowSplash(true);
          setIsSettingsOpen(false);
        }}
      />

      {/* Accessibility & Font Scaling Modal for Elderly Support */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        language={language}
      />

      {/* Three-Language Rotating Chakra Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            language={language}
            onFinish={handleFinishSplash}
            onSelectLanguage={setLanguage}
          />
        )}
      </AnimatePresence>

      {/* Respectful Sacred Maryada & Protocol Modal on App Startup */}
      <SacredMaryadaModal
        isOpen={isMaryadaOpen}
        onClose={() => setIsMaryadaOpen(false)}
        language={language}
      />

      {/* Network Status & Offline Toast Indicator */}
      <NetworkStatusIndicator />


    </Layout>
    </>
  );
}

export default function App() {
  return (
    <SpiritualThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </SpiritualThemeProvider>
  );
}
