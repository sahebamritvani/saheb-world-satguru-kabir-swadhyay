import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Music, 
  Share2, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Calendar, 
  Check, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sun,
  Scroll,
  Download,
  Copy,
  FileText,
  Filter,
  MapPin,
  X,
  Layers,
  Timer,
  Search,
  Library,
  Target,
  MessageSquare,
  Compass,
  CalendarDays,
  History,
  Feather,
  Music2,
  Flame,
  Trophy,
  BarChart3,
  SpellCheck,
  Activity,
  Bell,
  Play,
  Crown,
  Flower2,
  Edit3,
  Quote,
  Save,
  CheckCircle2,
  ShieldAlert,
  Info,
  ShieldCheck,
  Lock,
  Atom,
  BookMarked,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sakhi, Language, SACRED_BRANDING, AppView } from '../types';
import { translations, formatSakhiShareText } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { STARTER_SAKHIS, loadFullSakhisModule } from '../data/sakhiStarterData';
import { QuoteCardModal } from './QuoteCardModal';
import { HaziriModal } from './HaziriModal';
import { DailySadhanaQuizModal } from './DailySadhanaQuizModal';
import { SacredWisdomWidget } from './SacredWisdomWidget';
import { DailyAffirmationsWidget } from './DailyAffirmationsWidget';
import { analytics } from '../services/analytics';
import { ChetawaniSaarang } from './ChetawaniSaarang';
import { DailyHukamnamaCard } from './DailyHukamnamaCard';
import { sacredHaptics } from '../services/haptics';
import { getHaziriState, markTodayHaziri, subscribeToHaziri, HaziriState } from '../services/haziriStore';
import {
  ALL_54_DASHBOARD_CARDS,
  DASHBOARD_CATEGORIES,
  DashboardCardIconKey,
  DashboardCategoryNumber,
  DashboardFeatureCard,
} from '../data/dashboardCardsCatalog';
import {
  ADMIN_SLOTS_UPDATED_EVENT,
  AdminGranthSlotId,
  SlotStatusInfo,
  getAllSlotStatuses,
} from '../services/adminSlotInjectorStore';

interface DailyPawanSakhiProps {
  sakhi: Sakhi;
  language: Language;
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  onStartSwadhyay: () => void;
  onStartQuiz: () => void;
  onOpenUlatvasiQuiz?: () => void;
  onToggleDhun: () => void;
  onOpenDhunTab?: () => void;
  isDhunPlaying: boolean;
  onOpenBlessing: () => void;
  onSaveToDiary: (reflection: string) => void;
  onOpenAkhandPath?: () => void;
  onOpenMeditationTimer?: () => void;
  onSelectSakhi?: (sakhi: Sakhi) => void;
  onRefreshSakhi?: () => void;
  onNavigateToSearch?: (query: string) => void;
  onNavigateView?: (view: AppView) => void;
  onOpenAutoCorrect?: (text: string) => void;
  onOpenDiaryWithVerse?: (verseText: string, sakhiNumber?: number) => void;
  handleSelectSakhiByNumber?: (num: number) => void;
  isCustomSakhiActive?: boolean;
}

export const DailyPawanSakhi: React.FC<DailyPawanSakhiProps> = ({
  sakhi,
  language,
  selectedDate,
  onSelectDate,
  onStartSwadhyay,
  onStartQuiz,
  onOpenUlatvasiQuiz,
  onToggleDhun,
  onOpenDhunTab,
  isDhunPlaying,
  onOpenBlessing,
  onSaveToDiary,
  onOpenAkhandPath,
  onOpenMeditationTimer,
  onSelectSakhi,
  onRefreshSakhi,
  onNavigateToSearch,
  onNavigateView,
  onOpenAutoCorrect,
  onOpenDiaryWithVerse,
  handleSelectSakhiByNumber,
  isCustomSakhiActive = false
}) => {
  const { theme, isDarkMode, fontSize, isSahajMode, setIsSahajMode, globalWallpaper } = useAppTheme();
  const { language: contextLang, setLanguage, t: contextT } = useLanguage();
  const lang = language || contextLang;
  const t = translations[lang] || contextT;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [bookmarkedToast, setBookmarkedToast] = useState(false);
  const [showQuickNote, setShowQuickNote] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [showCardModal, setShowCardModal] = useState(false);
  const [showBhavarth, setShowBhavarth] = useState(false);
  const [showContemplation, setShowContemplation] = useState(false);
  const [sakhisList, setSakhisList] = useState<Sakhi[]>(STARTER_SAKHIS);

  useEffect(() => {
    let active = true;
    loadFullSakhisModule()
      .then((mod) => {
        if (active && mod.sakhisDatabase?.length) {
          setSakhisList(mod.sakhisDatabase);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
      speechReciter.stop();
    };
  }, []);

  // Telemetry: Log Sakhi Read
  useEffect(() => {
    analytics.logEvent({
      name: 'sakhi_read',
      params: { 
        sakhi_id: sakhi.number, 
      }
    });
  }, [sakhi.number, lang]);

  // --- DAINIK CHINTAN (SAKHI-ALIGNED DAILY REFLECTION) STATE ---
  const [showKalChintan, setShowKalChintan] = useState(false);
  const [kalReflectionText, setKalReflectionText] = useState('');
  const [kalSavedToast, setKalSavedToast] = useState(false);
  const [showPastKalNotes, setShowPastKalNotes] = useState(false);
  const [pastKalNotes, setPastKalNotes] = useState<Array<{ id: string; date: string; text: string; sakhiNumber?: number; themeTitle?: string }>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('sahebworld_kal_chintan_reflections');
        if (stored) return JSON.parse(stored);
      } catch {}
    }
    return [];
  });

  useEffect(() => {
    setKalSavedToast(false);
  }, [sakhi.number]);

  const activeThemeTitle =
    sakhi.categoryTitle?.[language] ||
    sakhi.categoryTitle?.hi ||
    (language === 'pb' ? 'ਪਾਵਨ ਸਵਾਧਿਆਏ' : language === 'en' ? 'Sacred Contemplation' : 'पावन स्वाध्याय');

  const activeContemplationPrompt =
    sakhi.contemplation?.[language] ||
    sakhi.contemplation?.hi ||
    (language === 'pb'
      ? `ਸਾਖੀ #${sakhi.number} (${activeThemeTitle}) ਦੀ ਸਿੱਖਿਆ ਅੱਜ ਮੇਰੇ ਵਿਚਾਰਾਂ, ਬੋਲ-ਬਾਣੀ ਅਤੇ ਰੋਜ਼ਾਨਾ ਵਿਵਹਾਰ ਨੂੰ ਕਿਵੇਂ ਨਿਖਾਰ ਸਕਦੀ ਹੈ?`
      : language === 'en'
      ? `How can the core teaching of Sakhi #${sakhi.number} (${activeThemeTitle}) shape my thoughts, speech, and actions today?`
      : `साखी #${sakhi.number} (${activeThemeTitle}) का पावन संदेश आज मेरे विचारों, वाणी और दैनिक आचरण को किस प्रकार नई दिशा दे सकता है?`);

  const activePracticalStep =
    sakhi.practicalApplication?.[language] || sakhi.practicalApplication?.hi || '';

  const activeSakhiPrayer =
    sakhi.samarpanPrayer?.[language] || sakhi.samarpanPrayer?.hi || '';

  const activeWordMeaningsList =
    sakhi.wordMeanings?.[language]?.length
      ? sakhi.wordMeanings[language]
      : sakhi.wordMeanings?.hi || [];

  const dynamicThoughtStarters = [
    ...activeWordMeaningsList.slice(0, 2).map((wm) => ({
      label: `${wm.word} (${wm.meaning})`,
      insert:
        language === 'pb'
          ? `'${wm.word}' (${wm.meaning}) ਦਾ ਮਰਮ: `
          : language === 'en'
          ? `Meaning of '${wm.word}' (${wm.meaning}): `
          : `'${wm.word}' (${wm.meaning}) का मर्म: `,
    })),
    ...(activePracticalStep
      ? [
          {
            label:
              language === 'pb'
                ? 'ਅੱਜ ਦਾ ਵਿਵਹਾਰਕ ਅਭਿਆਸ'
                : language === 'en'
                ? 'Practical Application'
                : 'आज का व्यावहारिक अभ्यास',
            insert:
              language === 'pb'
                ? `ਅੱਜ ਦਾ ਸੰਕਲਪ (${activePracticalStep}): `
                : language === 'en'
                ? `Today's practice (${activePracticalStep}): `
                : `आज का संकल्प (${activePracticalStep}): `,
          },
        ]
      : []),
    {
      label:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} ਤੋਂ ਮੇਰਾ ਮਨਨ`
          : language === 'en'
          ? `Sakhi #${sakhi.number} Life Insight`
          : `साखी #${sakhi.number} से जीवन-सीख`,
      insert:
        language === 'pb'
          ? `ਸਾਖੀ #${sakhi.number} (${activeThemeTitle}) ਤੋਂ ਮੇਰੀ ਸਿੱਖਿਆ: `
          : language === 'en'
          ? `My takeaway from Sakhi #${sakhi.number} (${activeThemeTitle}): `
          : `साखी #${sakhi.number} (${activeThemeTitle}) से आज की सीख: `,
    },
  ];

  const handleSaveKalReflection = () => {
    if (!kalReflectionText.trim()) return;
    const clean = kalReflectionText.trim();
    onSaveToDiary(`[दैनिक चिंतन · साखी #${sakhi.number} · ${activeThemeTitle}] ${clean}`);

    const newEntry = {
      id: `chintan-${Date.now()}`,
      date: new Date().toLocaleDateString(language === 'pb' ? 'pa-IN' : language === 'hi' ? 'hi-IN' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      text: clean,
      sakhiNumber: sakhi.number,
      themeTitle: activeThemeTitle,
    };

    const updated = [newEntry, ...pastKalNotes];
    setPastKalNotes(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sahebworld_kal_chintan_reflections', JSON.stringify(updated.slice(0, 50)));
      } catch {}
    }

    setKalReflectionText('');
    setKalSavedToast(true);
    sacredHaptics.lightTap();
    setTimeout(() => setKalSavedToast(false), 4500);
  };

  // --- SPIRITUAL PROGRESS & MILESTONES STATE ---
  const [swadhyayStats, setSwadhyayStats] = useState({
    sakhisStudied: 0,
    completedSakhis: 0,
    currentSakhiSteps: 1,
    milestoneProgress: 0,
    milestoneTarget: 5,
    milestoneTitle: '',
    milestoneDesc: '',
  });

  useEffect(() => {
    const updateStats = () => {
      let studied = 0;
      let completed = 0;
      let currentSteps = 1;

      if (typeof window !== 'undefined') {
        const savedCurrent = localStorage.getItem(`sahebworld_max_unlocked_eight_step_sakhi_${sakhi.number}`) ||
                            localStorage.getItem(`sahebworld_max_unlocked_ten_step_sakhi_${sakhi.number}`);
        if (savedCurrent) {
          currentSteps = parseInt(savedCurrent, 10);
        }

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.startsWith('sahebworld_max_unlocked_eight_step_sakhi_') || key.startsWith('sahebworld_max_unlocked_ten_step_sakhi_'))) {
            studied++;
            const val = parseInt(localStorage.getItem(key) || '1', 10);
            if (val >= 8) {
              completed++;
            }
          }
        }
      }

      // Calculate Rank
      let target = 5;
      let milestoneTitle = '';
      let milestoneDesc = '';
      let progress = 0;

      if (completed < 5) {
        target = 5;
        milestoneTitle = language === 'hi' ? 'श्रावक साधक (Shravan Seeker)' : language === 'pb' ? 'ਸ਼੍ਰਾਵਕ ਸਾਧਕ' : 'Shravan Seeker';
        milestoneDesc = language === 'hi' ? 'आपकी आध्यात्मिक यात्रा का पावन आरम्भ हो चुका है।' : language === 'pb' ? 'ਤੁਹਾਡੀ ਅਧਿਆਤਮਕ ਯਾਤਰਾ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋ ਚੁੱਕੀ ਹੈ।' : 'Your sacred spiritual journey has commenced.';
        progress = (completed / 5) * 100;
      } else if (completed < 15) {
        target = 15;
        milestoneTitle = language === 'hi' ? 'सत्संग अनुरागी (Satsangi Seeker)' : language === 'pb' ? 'ਸਤਿਸੰਗ ਅਨੁਰਾਗੀ' : 'Satsangi Seeker';
        milestoneDesc = language === 'hi' ? 'आपके हृदय में गुरु वाणी का प्रेम अंकुरित हो रहा है।' : language === 'pb' ? 'ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿਚ ਗੁਰੂ ਬਾਣੀ ਦਾ ਪ੍ਰੇਮ ਪੁੰਗਰ ਰਿਹਾ ਹੈ।' : 'The love for Guru’s word is dawning in your heart.';
        progress = ((completed - 5) / 10) * 100;
      } else if (completed < 30) {
        target = 30;
        milestoneTitle = language === 'hi' ? 'पारखी हंस (Parakhi Hans)' : language === 'pb' ? 'ਪਾਰਖੀ ਹੰਸ' : 'Parakhi Hans';
        milestoneDesc = language === 'hi' ? 'आपमें सत्य और असत्य का भेद करने वाली पारखी दृष्टि जाग्रत हो रही है।' : language === 'pb' ? 'ਤੁਹਾਡੇ ਅੰਦਰ ਸੱਚ ਤੇ ਝੂਠ ਦਾ ਨਿਰਣਾ ਕਰਨ ਵਾਲੀ ਪਾਰਖੀ ਦ੍ਰਿਸ਼ਟੀ ਜਾਗ ਰਹੀ ਹੈ।' : 'You are developing the discriminative vision of truth.';
        progress = ((completed - 15) / 15) * 100;
      } else if (completed < 50) {
        target = 50;
        milestoneTitle = language === 'hi' ? 'शून्य साधक (Shunya Yogi)' : language === 'pb' ? 'ਸੁੰਨ ਸਾਧਕ' : 'Shunya Yogi';
        milestoneDesc = language === 'hi' ? 'आपकी चेतना संसार से सिमटकर शून्य समाधि की ओर अग्रसर है।' : language === 'pb' ? 'ਤੁਹਾਡੀ ਚੇਤਨਾ ਸੰਸਾਰ ਤੋਂ ਸਿਮਟ ਕੇ ਸੁੰਨ ਸਮਾਧੀ ਵੱਲ ਵੱਧ ਰਹੀ ਹੈ।' : 'Your consciousness is ascending toward the silent state.';
        progress = ((completed - 30) / 20) * 100;
      } else {
        target = 100;
        milestoneTitle = language === 'hi' ? 'सहज सिद्ध (Sahaj Siddha)' : language === 'pb' ? 'ਸਹਿਜ ਸਿੱਧ' : 'Sahaj Siddha';
        milestoneDesc = language === 'hi' ? 'सत्यनाम के साथ पूर्ण एकाकार अवस्था। भवसागर से मुक्ति।' : language === 'pb' ? 'ਸਤਯਨਾਮ ਨਾਲ ਪੂਰਨ ਇਕਮਿਕਤਾ। ਭਵਸਾਗਰ ਤੋਂ ਮੁਕਤੀ।' : 'Perfect unity with Satyanaam. Complete liberation from worldly illusions.';
        progress = 100;
      }

      setSwadhyayStats({
        sakhisStudied: studied,
        completedSakhis: completed,
        currentSakhiSteps: currentSteps,
        milestoneProgress: Math.min(progress, 100),
        milestoneTarget: target,
        milestoneTitle,
        milestoneDesc,
      });
    };

    updateStats();
    window.addEventListener('sahebworld_step_updated', updateStats);
    window.addEventListener('focus', updateStats);
    return () => {
      window.removeEventListener('sahebworld_step_updated', updateStats);
      window.removeEventListener('focus', updateStats);
    };
  }, [sakhi.number, language]);

  // --- SADHANA HAZIRI (DAILY ATTENDANCE) STATES ---
  const [haziriState, setHaziriState] = useState<HaziriState>(getHaziriState);
  const [showHaziriModal, setShowHaziriModal] = useState(false);
  const [showDailyQuizModal, setShowDailyQuizModal] = useState(false);

  useEffect(() => {
    setHaziriState(getHaziriState());
    const unsub = subscribeToHaziri((newState) => {
      setHaziriState(newState);
    });
    return () => unsub();
  }, []);

  const handleTriggerHaziri = () => {
    const updated = markTodayHaziri();
    setHaziriState(updated);
    sacredHaptics.divineBlessing();
    if (onOpenBlessing) onOpenBlessing();
    setShowHaziriModal(true);
  };

  // --- REFRESH BUTTON OPTIMIZATION STATES ---
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshNotification, setRefreshNotification] = useState<string | null>(null);

  // --- TEXT SHARING EXPORT MODAL STATES ---
  const [showTextExportModal, setShowTextExportModal] = useState(false);
  const [exportCopied, setExportCopied] = useState(false);
  const [includeMeanings, setIncludeMeanings] = useState(true);

  // --- SAKHI CATEGORIES DRAWER / SELECTOR ---
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sakhiJumpNumber, setSakhiJumpNumber] = useState('');
  const [sakhiJumpError, setSakhiJumpError] = useState<string | null>(null);

  const handleSakhiNumberJump = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sakhiJumpNumber.trim()) return;
    const num = parseInt(sakhiJumpNumber.trim(), 10);
    if (isNaN(num)) {
      setSakhiJumpError(language === 'pb' ? 'ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਸਾਖੀ ਨੰਬਰ ਦਰਜ ਕਰੋ' : language === 'en' ? 'Please enter a valid sakhi number' : 'कृपया सही साखी नंबर दर्ज करें');
      setTimeout(() => setSakhiJumpError(null), 3000);
      return;
    }

    const found = sakhisList.find((s) => s.number === num);
    if (found) {
      sacredHaptics.divineBlessing();
      setSakhiJumpError(null);
      setSakhiJumpNumber('');
      if (handleSelectSakhiByNumber) {
        handleSelectSakhiByNumber(num);
      } else {
        if (onSelectSakhi) {
          onSelectSakhi(found);
        }
        // Directly navigate to Swadhyay reader
        if (onStartSwadhyay) {
          onStartSwadhyay();
        }
      }
    } else {
      setSakhiJumpError(
        language === 'pb' 
          ? `ਸਾਖੀ #${num} ਨਹੀਂ ਮਿਲੀ (ਕੁੱਲ ਉਪਲਬਧ ਸਾਖੀਆਂ: ੧ ਤੋਂ ${sakhisList.length})` 
          : language === 'en'
          ? `Sakhi #${num} not found (Range: 1 to ${sakhisList.length})`
          : `साखी #${num} नहीं मिली (उपलब्ध सीमा: १ से ${sakhisList.length})`
      );
      setTimeout(() => setSakhiJumpError(null), 3500);
    }
  };

  // --- FEATURES SECTION COLLAPSIBLE & CATEGORY TOGGLES ---
  const [isFeaturesSectionCollapsed, setIsFeaturesSectionCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('saheb_features_section_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const [collapsedCategories, setCollapsedCategories] = useState<{ [key: number]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('saheb_features_categories_collapsed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleFeaturesSection = () => {
    sacredHaptics.lightTap();
    setIsFeaturesSectionCollapsed(prev => {
      const next = !prev;
      try {
        localStorage.setItem('saheb_features_section_collapsed', String(next));
      } catch {}
      return next;
    });
  };

  const toggleCategoryCollapse = (catId: number) => {
    sacredHaptics.lightTap();
    setCollapsedCategories(prev => {
      const next = { ...prev, [catId]: !prev[catId] };
      try {
        localStorage.setItem('saheb_features_categories_collapsed', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleToggleAllCategories = () => {
    sacredHaptics.lightTap();
    const allCollapsed = [1, 2, 3, 4, 5].every(id => collapsedCategories[id]);
    const nextState = { 1: !allCollapsed, 2: !allCollapsed, 3: !allCollapsed, 4: !allCollapsed, 5: !allCollapsed };
    setCollapsedCategories(nextState);
    try {
      localStorage.setItem('saheb_features_categories_collapsed', JSON.stringify(nextState));
    } catch {}
  };

  // All 54 Dashboard Cards Directory State (Search, Filter & Live Admin Slot Indicators)
  const [dashboardCardSearch, setDashboardCardSearch] = useState<string>('');
  const [dashboardCategoryFilter, setDashboardCategoryFilter] = useState<'all' | DashboardCategoryNumber>('all');
  const [adminSlotStatuses, setAdminSlotStatuses] = useState<Record<AdminGranthSlotId, SlotStatusInfo>>(() =>
    getAllSlotStatuses()
  );

  useEffect(() => {
    const syncStatuses = () => setAdminSlotStatuses(getAllSlotStatuses());
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, syncStatuses);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, syncStatuses);
  }, []);

  const filteredDashboardCards = useMemo(() => {
    const q = dashboardCardSearch.trim().toLowerCase();
    return ALL_54_DASHBOARD_CARDS.filter((card) => {
      if (dashboardCategoryFilter !== 'all' && card.categoryId !== dashboardCategoryFilter) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        String(card.slotNumber),
        `#${card.slotNumber}`,
        card.title.hi,
        card.title.pb,
        card.title.en,
        card.description.hi,
        card.description.pb,
        card.description.en,
        card.kicker.hi,
        card.kicker.pb,
        card.kicker.en,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [dashboardCardSearch, dashboardCategoryFilter]);

  const handleLaunchDashboardCard = (card: DashboardFeatureCard) => {
    sacredHaptics.lightTap();
    const action = card.action;

    if (action.kind === 'about-modal') {
      window.dispatchEvent(
        new CustomEvent('sahebworld_open_about_modal', { detail: { section: action.section } })
      );
      return;
    }

    if (action.kind === 'modal') {
      window.dispatchEvent(new CustomEvent(action.eventName));
      return;
    }

    if (action.kind === 'daily-anchor') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isSahajMode) setIsSahajMode(false);

    if (action.kind === 'view') {
      if (onNavigateView) onNavigateView(action.view);
    } else if (action.kind === 'granth') {
      window.dispatchEvent(
        new CustomEvent('sahebworld_open_granth', { detail: { granthSlug: action.slug } })
      );
    } else if (action.kind === 'swadhyay') {
      onStartSwadhyay();
    } else if (action.kind === 'akhand-path') {
      if (onOpenAkhandPath) onOpenAkhandPath();
      else if (onNavigateView) onNavigateView('akhand-path');
    } else if (action.kind === 'meditation-timer') {
      if (onOpenMeditationTimer) onOpenMeditationTimer();
      else if (onNavigateView) onNavigateView('meditation-timer');
    } else if (action.kind === 'dhun') {
      if (onOpenDhunTab) onOpenDhunTab();
      else if (onNavigateView) onNavigateView('dhun');
    }
  };

  const renderDashboardCardIcon = (iconKey: DashboardCardIconKey, className: string) => {
    switch (iconKey) {
      case 'book': return <BookOpen className={className} />;
      case 'library': return <Library className={className} />;
      case 'scroll': return <Scroll className={className} />;
      case 'sparkles': return <Sparkles className={className} />;
      case 'flame': return <Flame className={className} />;
      case 'atom': return <Atom className={className} />;
      case 'sun': return <Sun className={className} />;
      case 'compass': return <Compass className={className} />;
      case 'music': return <Music className={className} />;
      case 'music2': return <Music2 className={className} />;
      case 'target': return <Target className={className} />;
      case 'timer': return <Timer className={className} />;
      case 'shieldCheck': return <ShieldCheck className={className} />;
      case 'trendingUp': return <TrendingUp className={className} />;
      case 'messageSquare': return <MessageSquare className={className} />;
      case 'play': return <Play className={className} />;
      case 'feather': return <Feather className={className} />;
      case 'bookmark': return <Bookmark className={className} />;
      case 'shieldAlert': return <ShieldAlert className={className} />;
      case 'bookMarked': return <BookMarked className={className} />;
      case 'crown': return <Crown className={className} />;
      case 'history': return <History className={className} />;
      case 'calendarDays': return <CalendarDays className={className} />;
      case 'mapPin': return <MapPin className={className} />;
      case 'search': return <Search className={className} />;
      case 'image': return <ImageIcon className={className} />;
      case 'spellCheck': return <SpellCheck className={className} />;
      case 'activity': return <Activity className={className} />;
      case 'info': return <Info className={className} />;
      case 'lock': return <Lock className={className} />;
      case 'helpCircle': return <HelpCircle className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onNavigateToSearch) {
      onNavigateToSearch(searchQuery.trim());
    }
  };

  // Compute all available sakhi categories with counts
  const allCategories = useMemo(() => {
    const catMap = new Map<string, { id: string; title: string; count: number }>();
    sakhisList.forEach((s) => {
      const id = s.category || 'other';
      const title = s.categoryTitle[language] || s.categoryTitle.hi || id;
      if (!catMap.has(id)) {
        catMap.set(id, { id, title, count: 1 });
      } else {
        catMap.get(id)!.count++;
      }
    });
    return Array.from(catMap.values()).sort((a, b) => b.count - a.count);
  }, [language, sakhisList]);

  const activeDate = selectedDate || new Date();
  const isToday = useMemo(() => {
    const today = new Date();
    return (
      activeDate.getFullYear() === today.getFullYear() &&
      activeDate.getMonth() === today.getMonth() &&
      activeDate.getDate() === today.getDate()
    );
  }, [activeDate]);

  const dateFormatted = activeDate.toLocaleDateString(
    language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  const fontSizes: Record<string, string> = {
    small: 'text-lg sm:text-xl',
    normal: 'text-xl sm:text-2xl',
    medium: 'text-2xl sm:text-3xl',
    large: 'text-3xl sm:text-4xl',
    xlarge: 'text-4xl sm:text-5xl font-bold',
    xl: 'text-5xl sm:text-6xl font-extrabold',
    elderly: 'text-6xl sm:text-7xl font-black leading-relaxed text-amber-950 dark:text-amber-100',
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const bhavarthHeading = language === 'hi' ? 'भावार्थ' : language === 'pb' ? 'ਅਰਥ' : 'Meaning';
      const fullSakhiSpeech = `${sakhi.text[language]} । ${bhavarthHeading} । ${sakhi.bhavarth[language]}`;
      speechReciter.speak(
        fullSakhiSpeech,
        language,
        () => setIsSpeaking(false),
        () => setIsSpeaking(false)
      );
    }
  };

  // --- OPTIMIZED REFRESH HANDLER ---
  const handleRefresh = () => {
    setIsRefreshing(true);
    speechReciter.stop();
    setIsSpeaking(false);

    if (onRefreshSakhi) {
      onRefreshSakhi();
    } else if (onSelectSakhi) {
      // Pick an inspiring random sakhi from the database
      const randomSakhi = sakhisList[Math.floor(Math.random() * sakhisList.length)] || sakhisList[0];
      onSelectSakhi(randomSakhi);
    } else if (onSelectDate && !isToday) {
      onSelectDate(new Date());
    }

    const toastMsg = language === 'hi'
      ? 'पावन साखी ताज़ा की गई (नवीन प्रेरणा)'
      : language === 'pb'
      ? 'ਪਾਵਨ ਸਾਖੀ ਤਾਜ਼ਾ ਕੀਤੀ ਗਈ'
      : 'Sacred Sakhi refreshed!';
    setRefreshNotification(toastMsg);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);

    setTimeout(() => {
      setRefreshNotification(null);
    }, 3000);
  };

  // --- TEXT EXPORT GENERATION ---
  const generateExportText = () => {
    let out = `${exactTop}\n`;
    out += `${language === 'hi' ? 'सतगुरु कबीर साहेब पावन साखी' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸਾਖੀ' : 'Satguru Kabir Saheb Sacred Sakhi'} #${sakhi.number}\n`;
    out += `[${sakhi.categoryTitle[language]}]\n`;
    out += `--------------------------------------------------------\n\n`;
    out += `${sakhi.text[language]}\n\n`;
    
    if (sakhi.transliteration) {
      out += `"${sakhi.transliteration}"\n\n`;
    }

    if (includeMeanings && sakhi.wordMeanings && sakhi.wordMeanings[language]?.length) {
      out += `${language === 'hi' ? '।। शब्दार्थ रहस्य ।।' : language === 'pb' ? '।। ਸ਼ਬਦਾਰਥ ਰਹੱਸ ।।' : '|| Word Meanings ||'}\n`;
      sakhi.wordMeanings[language].forEach((wm) => {
        out += `• ${wm.word}: ${wm.meaning}\n`;
      });
      out += `\n`;
    }

    out += `${language === 'hi' ? '।। भावार्थ ।।' : language === 'pb' ? '।। ਭਾਵਾਰਥ ।।' : '|| Spiritual Meaning ||'}\n`;
    out += `${sakhi.bhavarth[language]}\n\n`;

    out += `${language === 'hi' ? '।। आत्म-चिंतन प्रश्न ।।' : language === 'pb' ? '।। ਆਤਮ-ਚਿੰਤਨ ।।' : '|| Self-Inquiry ||'}\n`;
    out += `${sakhi.contemplation[language]}\n\n`;

    out += `--------------------------------------------------------\n`;
    out += `${exactBottom}\n`;
    out += `${language === 'hi' ? 'साहेब वर्ल्ड - सतगुरु कबीर साहेब स्वाध्याय ऐप' : language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਐਪ' : 'Saheb World - Satguru Kabir Saheb Swadhyay'}\n`;

    return out;
  };

  const handleCopyTextExport = async () => {
    const text = generateExportText();
    try {
      await navigator.clipboard.writeText(text);
      setExportCopied(true);
      setTimeout(() => setExportCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleNativeShareExport = async () => {
    const text = generateExportText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Saheb World - Sakhi #${sakhi.number}`,
          text,
        });
        return;
      } catch {
        // fallback
      }
    }
    handleCopyTextExport();
  };

  const handleDownloadTextDoc = () => {
    const text = generateExportText();
    const filename = `kabir_sakhi_${sakhi.number}.txt`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSaveReflection = () => {
    if (!reflectionText.trim()) return;
    onSaveToDiary(reflectionText.trim());
    setReflectionText('');
    setShowQuickNote(false);
    setBookmarkedToast(true);
    setTimeout(() => setBookmarkedToast(false), 3000);
  };

  // Filtered sakhis for the category selector modal
  const categorySakhis = useMemo(() => {
    if (selectedCategoryFilter === 'all') return sakhisList.slice(0, 30);
    return sakhisList.filter((s) => s.category === selectedCategoryFilter);
  }, [selectedCategoryFilter, sakhisList]);

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto w-full px-2 sm:px-4 overflow-hidden break-words">
      {/* Unified Search & Go to Sakhi Number Jump Bar */}
      <div className="space-y-2 sticky top-0 z-20">
        <div 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
          className="rounded-2xl border p-2 sm:p-3 shadow-md backdrop-blur-md bg-opacity-95 flex flex-col md:flex-row gap-2"
        >
          {/* Main Keyword Search Input */}
          <form 
            onSubmit={handleSearchSubmit}
            className="relative flex-1 group"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-amber-600 group-focus-within:text-amber-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'दोहे या उलटबांसी खोजें (उदा: गुरु, माया, सत्य)...' : language === 'pb' ? 'ਦੋਹੇ ਜਾਂ ਉਲਟਬਾਂਸੀ ਖੋਜੋ...' : 'Search Dohas or Ulatvasi (e.g. Guru, Maya, Truth)...'}
              className="w-full pl-9 pr-8 py-2 rounded-xl border-none focus:ring-2 focus:ring-amber-500 bg-black/5 dark:bg-white/5 text-xs sm:text-sm font-medium placeholder-gray-500"
              style={{ color: theme.textPrimary }}
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-2 flex items-center p-1 hover:bg-black/5 rounded-full transition text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Go to Sakhi Number Direct Jump Input */}
          <form 
            onSubmit={handleSakhiNumberJump}
            className="flex items-center gap-1.5 shrink-0 bg-amber-500/10 dark:bg-amber-400/10 p-1 rounded-xl border border-amber-500/25"
          >
            <div className="flex items-center gap-1 pl-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 shrink-0" />
              <span className="text-[0.6875rem] font-serif font-black text-amber-900 dark:text-amber-200 whitespace-nowrap">
                {language === 'pb' ? 'ਸਾਖੀ ਨੰ.' : language === 'en' ? 'Sakhi #' : 'साखी नं.'}
              </span>
            </div>
            <input
              type="number"
              min="1"
              max={sakhisList.length}
              value={sakhiJumpNumber}
              onChange={(e) => setSakhiJumpNumber(e.target.value)}
              placeholder={`1-${sakhisList.length}`}
              className="w-18 sm:w-20 px-2 py-1.5 rounded-lg border border-amber-500/30 bg-white dark:bg-zinc-800 text-xs font-bold font-mono focus:ring-2 focus:ring-amber-500 text-center"
              style={{ color: theme.textPrimary }}
            />
            <button
              type="submit"
              className="px-2.5 py-1.5 rounded-lg font-serif font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition flex items-center gap-1 cursor-pointer active:scale-95"
              title={language === 'pb' ? 'ਸਵਾਧਿਆਏ ਪਾਠ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Go to Swadhyay' : 'स्वाध्याय खोलें'}
            >
              <span>{language === 'pb' ? 'ਜਾਓ' : language === 'en' ? 'Go' : 'जाएं'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Sakhi Jump Error Toast */}
        {sakhiJumpError && (
          <div className="p-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-700 dark:text-red-300 text-xs font-bold text-center animate-fadeIn shadow-xs">
            {sakhiJumpError}
          </div>
        )}
      </div>

      {/* Prominent Sacred Quick Access: Divine Darshan & Nitnem Gutka */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {/* Divine Darshan Card */}
        <div
          onClick={() => {
            sacredHaptics.lightTap();
            if (onNavigateView) onNavigateView('divine-darshan');
          }}
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(26, 20, 15, 0.78)' : 'rgba(255, 250, 240, 0.86)')
              : theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className={`border-2 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between cursor-pointer transition-all shadow-md hover:shadow-lg hover:scale-[1.01] group active:scale-[0.99] overflow-hidden ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0"
            >
              <span className="text-xl" aria-hidden="true">👑</span>
            </div>
            <div className="min-w-0 flex-1">
              <span
                style={{ color: theme.accentGold }}
                className="text-[0.6875rem] font-extrabold uppercase tracking-wide block truncate"
              >
                {language === 'pb' ? 'ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ' : language === 'en' ? 'Divine Sacred Darshan' : 'दिव्य पावन दर्शन'}
              </span>
              <h3
                style={{ color: theme.sacredMaroon }}
                className="font-serif font-black text-sm sm:text-base transition-colors truncate"
              >
                {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਦਰਸ਼ਨ' : language === 'en' ? 'Satguru Kabir Saheb Darshan' : 'सतगुरु कबीर साहेब दिव्य दर्शन'}
              </h3>
            </div>
          </div>
          <ChevronRight
            style={{ color: theme.sacredMaroon }}
            className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0"
          />
        </div>

        {/* Nitnem Gutka Card */}
        <div
          onClick={() => {
            sacredHaptics.lightTap();
            if (onNavigateView) onNavigateView('nitnem-gutka');
          }}
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(26, 20, 15, 0.78)' : 'rgba(255, 250, 240, 0.86)')
              : theme.cardBg,
            borderColor: theme.accentGold,
            color: theme.textPrimary,
          }}
          className={`border-2 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between cursor-pointer transition-all shadow-md hover:shadow-lg hover:scale-[1.01] group active:scale-[0.99] overflow-hidden ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0"
            >
              <span className="text-xl" aria-hidden="true">🌹</span>
            </div>
            <div className="min-w-0 flex-1">
              <span
                style={{ color: theme.accentGold }}
                className="text-[0.6875rem] font-extrabold uppercase tracking-wide block truncate"
              >
                {language === 'pb' ? 'ਨਿਤਨੇਮ ਪਾਠ ਤੇ ਸੰਗ੍ਰਹਿ' : language === 'en' ? 'Daily Path & Collection' : 'नित्य पाठ एवं संग्रह'}
              </span>
              <h3
                style={{ color: theme.sacredMaroon }}
                className="font-serif font-black text-sm sm:text-base transition-colors truncate"
              >
                {language === 'pb' ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ' : language === 'en' ? 'Nitnem Gutka Saheb' : 'नितनेम गुटका साहेब'}
              </h3>
            </div>
          </div>
          <ChevronRight
            style={{ color: theme.sacredMaroon }}
            className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0"
          />
        </div>
      </div>

      {/* Sahaj Mode Active Alert Banner */}
      {isSahajMode && (
        <div
          id="sahaj-mode-notice-banner"
          style={{
            backgroundColor: theme.accentGoldLight,
            borderColor: theme.accentGold,
            color: theme.sacredMaroon,
          }}
          className={`p-3 sm:p-4 rounded-2xl border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2.5 animate-fadeIn ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
        >
          <div className="flex items-center gap-2.5 text-center sm:text-left min-w-0 flex-1">
            <Sparkles className="w-5 h-5 animate-pulse shrink-0" style={{ color: theme.accentGold }} />
            <div className="min-w-0">
              <h4 className="font-serif font-bold text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
                <span>{language === 'pb' ? 'ਸਹਿਜ ਧਿਆਨ ਮੋਡ ਚਾਲੂ ਹੈ' : language === 'en' ? 'Sahaj Mode is Active' : 'सहज ध्यान मोड सक्रिय है'}</span>
                <span
                  style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                  className="px-1.5 py-0.2 rounded-full text-[0.5625rem] font-sans font-bold"
                >
                  {language === 'pb' ? 'ਸੀਮਤ ਝਲਕ' : language === 'en' ? 'Minimal' : 'सीमित झलक'}
                </span>
              </h4>
              <p className="text-[0.6875rem] opacity-90 mt-0.5 truncate" style={{ color: theme.textSecondary }}>
                {language === 'pb'
                  ? 'ਅਜੇ ਕੇਵਲ ਦੈਨਿਕ ਸਾਖੀ ਤੇ ਸੁਮਿਰਨ ਵਿਖਾਈ ਦੇ ਰਹੇ ਹਨ।'
                  : language === 'en'
                  ? 'Currently only Daily Sakhi and Sumiran are visible.'
                  : 'अभी केवल दैनिक साखी और सुमिरन दिखाई दे रहे हैं।'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsSahajMode(false)}
            style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
            className="px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-xs hover:opacity-95 transition cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'pb' ? 'ਸਾਰੇ ਫੀਚਰਸ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Open All Features' : 'सभी फीचर्स खोलें'}</span>
          </button>
        </div>
      )}

      {/* Main Daily Pawan Sakhi Card - Clean, Uncluttered, Edge-to-Edge Mobile Friendly */}
      <div
        id="daily-pawan-sakhi-container"
        style={{
          backgroundColor: globalWallpaper
            ? (isDarkMode ? 'rgba(18, 16, 14, 0.84)' : 'rgba(255, 253, 249, 0.88)')
            : theme.cardBg,
          borderColor: theme.cardBorder,
          color: theme.textPrimary,
        }}
        className={`rounded-3xl border shadow-xl overflow-hidden flex flex-col transition-all relative max-w-full ${globalWallpaper ? 'backdrop-blur-md' : ''}`}
      >
        {/* Sacred Header Banner */}
        <div
          style={{
            backgroundColor: globalWallpaper
              ? (isDarkMode ? 'rgba(38, 30, 22, 0.72)' : 'rgba(245, 228, 196, 0.78)')
              : theme.stepActiveBg,
            borderColor: theme.cardBorder,
          }}
          className="border-b py-2 px-3 text-center select-none"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-base sm:text-lg font-bold tracking-widest font-serif block truncate"
          >
            {exactTop}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 max-w-full">
          {/* Metadata & Actions Bar (Clean Single-Row Layout) */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b pb-3" style={{ borderColor: theme.cardBorder }}>
            {/* Date + Category Pill */}
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <div className="flex items-center gap-1.5 text-xs" style={{ color: theme.textSecondary }}>
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-bold whitespace-nowrap">{dateFormatted}</span>
              </div>
              
              <button
                type="button"
                onClick={() => setShowCategorySelector(true)}
                title={language === 'hi' ? 'श्रेणियाँ / अंग देखें' : language === 'pb' ? 'ਸ਼੍ਰੇਣੀਆਂ / ਅੰਗ ਵੇਖੋ' : 'Explore Categories'}
                style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                className="px-2 py-0.5 rounded-lg text-[0.6875rem] font-semibold hover:opacity-85 transition cursor-pointer flex items-center gap-1 border border-amber-400/20 shrink-0"
              >
                <Layers className="w-3 h-3 text-amber-600" />
                <span>{sakhi.categoryTitle[language] || sakhi.categoryTitle.hi}</span>
              </button>

              {isCustomSakhiActive ? (
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectDate) onSelectDate(new Date());
                  }}
                  title={language === 'hi' ? 'आज स्वतः चक्र पर लौटें' : language === 'pb' ? 'ਅੱਜ ਸਵੈ-ਚਾਲਿਤ ਤੇ ਪਰਤੋ' : 'Return to Auto-rotating'}
                  className="flex items-center gap-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg py-0.5 px-2 border border-amber-500/20 font-bold text-[0.625rem] cursor-pointer transition active:scale-95 shadow-xs shrink-0"
                >
                  <RotateCcw className="w-3 h-3 text-white shrink-0 animate-spin-slow" />
                  <span>{language === 'hi' ? 'दैनिक चक्र' : language === 'pb' ? 'ਦੈਨਿਕ ਚੱਕਰ' : 'Auto-rotating'}</span>
                </button>
              ) : null}
            </div>

            {/* Quick Actions (Audio, 5-Step Swadhyay, Quiz, Blessing) */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Audio Speech */}
              <button
                id="daily-listen-speech-btn"
                type="button"
                onClick={handleToggleSpeech}
                title={isSpeaking ? (language === 'hi' ? 'आवाज़ रोकें' : 'Stop voice') : t.listenBtn}
                style={{
                  backgroundColor: isSpeaking ? '#EF4444' : theme.bgSecondary,
                  borderColor: isSpeaking ? '#EF4444' : theme.borderOrnament,
                  color: isSpeaking ? '#FFFFFF' : theme.textPrimary,
                }}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition shadow-xs hover:opacity-90 cursor-pointer shrink-0 ${
                  isSpeaking ? 'animate-pulse ring-2 ring-red-400' : ''
                }`}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
                <span className="text-[0.6875rem]">{isSpeaking ? (language === 'hi' ? 'रोकें' : language === 'pb' ? 'ਰੋਕੋ' : 'Stop') : t.listenBtn}</span>
              </button>

              {/* Swadhyay 10-Step Guide */}
              <button
                type="button"
                onClick={() => {
                  if (onNavigateView) onNavigateView('swadhyay');
                  else onStartSwadhyay();
                }}
                style={{
                  backgroundColor: theme.stepActiveBg,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition shadow-xs hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[0.6875rem]">{language === 'hi' ? 'स्वाध्याय' : language === 'pb' ? 'ਸਵਾਧਿਆਏ' : 'Swadhyay'}</span>
              </button>

              {/* Sadhana Quiz */}
              <button
                type="button"
                id="daily-sadhana-quiz-btn"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setShowDailyQuizModal(true);
                }}
                style={{
                  backgroundColor: theme.stepActiveBg,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition shadow-xs hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[0.6875rem]">{language === 'hi' ? 'प्रश्नोत्तरी' : language === 'pb' ? 'ਕੁਇਜ਼' : 'Quiz'}</span>
              </button>

              {/* Blessing */}
              <button
                id="daily-open-blessing-btn"
                onClick={onOpenBlessing}
                title={t.blessingBtn}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="p-1.5 rounded-xl border text-xs font-semibold flex items-center justify-center transition shadow-xs hover:opacity-95 cursor-pointer shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              </button>
            </div>
          </div>

          {/* Quick Toast notifications */}
          {refreshNotification && (
            <div
              style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon, borderColor: theme.accentGold }}
              className="p-2 rounded-xl border text-center text-xs font-semibold shadow-xs animate-fadeIn flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3 h-3 text-amber-600 animate-spin" />
              <span>{refreshNotification}</span>
            </div>
          )}

          {copiedToast && (
            <div
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="p-2 rounded-xl text-center text-xs font-semibold shadow-md animate-fadeIn"
            >
              {t.shareCopiedToast}
            </div>
          )}

          {bookmarkedToast && (
            <div
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="p-2 rounded-xl text-center text-xs font-semibold shadow-md animate-fadeIn"
            >
              {t.savedToBookmarks}
            </div>
          )}

          {/* Central Sacred Couplet Display (Glorious Typography & No Overflow) */}
          <div
            id="daily-couplet-highlight"
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.accentGold,
            }}
            className="rounded-3xl border p-4 sm:p-7 text-center space-y-3 relative shadow-md overflow-hidden max-w-full break-words"
          >
            {/* Couplet Text */}
            <p
              style={{ color: theme.sacredMaroon }}
              className={`font-serif font-bold leading-relaxed whitespace-pre-line tracking-wide break-words ${fontSizes[fontSize]}`}
            >
              {sakhi.text[language] || sakhi.text.hi}
            </p>

            {sakhi.transliteration && (
              <p
                style={{ color: theme.textMuted }}
                className="text-xs sm:text-sm italic font-sans opacity-90 max-w-xl mx-auto break-words"
              >
                "{sakhi.transliteration}"
              </p>
            )}

            {/* Compact Action Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(`${exactTop}\n${sakhi.text[language]}\n${exactBottom}`);
                  setCopiedToast(true);
                  setTimeout(() => setCopiedToast(false), 2000);
                }}
                style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon }}
                className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition shadow-xs border border-amber-200 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{language === 'hi' ? 'कॉपी' : language === 'pb' ? 'ਕਾਪੀ' : 'Copy'}</span>
              </button>

              <button
                onClick={() => {
                  const text = `${exactTop}\n*${sakhi.text[language]}*\n\n${sakhi.bhavarth[language]}\n\n${exactBottom}\n- Saheb World App`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 bg-[#25D366] text-white hover:opacity-90 transition shadow-xs cursor-pointer"
              >
                <Share2 className="w-3 h-3" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  sacredHaptics.lightTap();
                  setShowKalChintan(!showKalChintan);
                }}
                style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon }}
                className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition shadow-xs border border-amber-300 dark:border-amber-700 cursor-pointer"
              >
                <Feather className="w-3 h-3 text-indigo-600" />
                <span>{language === 'hi' ? 'दैनिक चिंतन' : language === 'pb' ? 'ਦੈਨਿਕ ਚਿੰਤਨ' : 'Daily Reflection'}</span>
              </button>
            </div>
          </div>

          {/* Essential Bhavarth */}
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.cardBorder,
            }}
            className="rounded-2xl border p-3.5 sm:p-4 space-y-1.5 overflow-hidden break-words"
          >
            <div className="flex items-center justify-between">
              <span style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-wider block">
                {t.divineBhavarthLabel}
              </span>
              <button
                onClick={() => setShowBhavarth(!showBhavarth)}
                className="text-xs font-semibold cursor-pointer"
                style={{ color: theme.sacredMaroon }}
              >
                {showBhavarth ? (language === 'hi' ? 'छिपाएं' : language === 'pb' ? 'ਲੁਕਾਓ' : 'Hide') : (language === 'hi' ? 'दिखाएं' : language === 'pb' ? 'ਦਿਖਾਓ' : 'Show')}
              </button>
            </div>
            {showBhavarth && (
              <p style={{ color: theme.textPrimary }} className="text-sm sm:text-base leading-relaxed font-serif break-words">
                {sakhi.bhavarth[language] || sakhi.bhavarth.hi}
              </p>
            )}
          </div>

          {/* Contemplation Prompt */}
          <div
            style={{
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.borderOrnament,
            }}
            className="rounded-2xl border p-3.5 sm:p-4 space-y-1 overflow-hidden break-words"
          >
            <div className="flex items-center justify-between">
              <span style={{ color: theme.sacredMaroon }} className="text-xs font-bold uppercase tracking-wider block">
                {t.contemplationPromptTitle}
              </span>
              <button
                onClick={() => setShowContemplation(!showContemplation)}
                className="text-xs font-semibold cursor-pointer"
                style={{ color: theme.sacredMaroon }}
              >
                {showContemplation ? (language === 'hi' ? 'छिपाएं' : language === 'pb' ? 'ਲੁਕਾਓ' : 'Hide') : (language === 'hi' ? 'दिखाएं' : language === 'pb' ? 'ਦਿਖਾਓ' : 'Show')}
              </button>
            </div>
            {showContemplation && (
              <p style={{ color: theme.textPrimary }} className="text-xs sm:text-sm font-serif italic font-semibold leading-relaxed animate-fadeIn break-words">
                "{sakhi.contemplation[language] || sakhi.contemplation.hi}"
              </p>
            )}
          </div>

          {/* Quick reflection input */}
          {showQuickNote ? (
            <div
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
              className="p-4 rounded-xl border space-y-3 animate-fadeIn"
            >
              <label style={{ color: theme.textSecondary }} className="text-xs font-semibold block">
                {t.addReflectionPrompt}
              </label>
              <textarea
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder={t.reflectionPlaceholder}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none h-24"
              />
              <div className="flex items-center gap-2">
                <button
                  id="save-daily-reflection-btn"
                  onClick={handleSaveReflection}
                  disabled={!reflectionText.trim()}
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold disabled:opacity-40 cursor-pointer"
                >
                  {t.saveReflectionBtn}
                </button>
                <button
                  id="cancel-daily-reflection-btn"
                  onClick={() => setShowQuickNote(false)}
                  style={{ color: theme.textMuted }}
                  className="px-3 py-2 text-xs font-medium cursor-pointer"
                >
                  {t.cancelBtn}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                id="open-quick-reflection-btn"
                onClick={() => setShowQuickNote(true)}
                style={{ color: theme.accentGold }}
                className="text-xs font-semibold flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{t.addDiaryEntryBtn}</span>
              </button>
            </div>
          )}

          {/* ========================================================================= */}
          {/* DAINIK CHINTAN CARD: DYNAMICALLY ALIGNED TO ACTIVE DAILY SAKHI THEME      */}
          {/* ========================================================================= */}
          <div 
            id="dainik-chintan-kal-trigger-section"
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.accentGold,
            }}
            className="mt-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 shadow-sm space-y-4 text-left transition-all"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 border-amber-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-300 shrink-0">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full text-[0.625rem] font-black uppercase font-serif tracking-wider bg-indigo-500/20 text-indigo-900 dark:text-indigo-200 border border-indigo-500/40">
                      {language === 'pb' ? 'ਦੈਨਿਕ ਚਿੰਤਨ' : language === 'en' ? 'Daily Reflection' : 'दैनिक चिंतन'}
                    </span>
                    <span className="text-[0.625rem] font-serif font-bold text-amber-700 dark:text-amber-300">
                      {activeThemeTitle} • #{sakhi.number}
                    </span>
                  </div>
                  <h4 
                    style={{ color: theme.sacredMaroon }}
                    className="text-base sm:text-lg font-black font-serif tracking-tight mt-0.5"
                  >
                    {language === 'pb' 
                      ? `ਦੈਨਿਕ ਚਿੰਤਨ: '${activeThemeTitle}' ਅਤੇ ਅੱਜ ਦਾ ਆਚਰਣ` 
                      : language === 'en' 
                      ? `Daily Reflection: '${activeThemeTitle}' & Mindful Living` 
                      : `दैनिक चिंतन: '${activeThemeTitle}' व आज का आचरण`}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setShowKalChintan(!showKalChintan);
                }}
                style={{
                  backgroundColor: showKalChintan ? theme.accentGoldLight : theme.stepActiveBg,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-4 py-2 rounded-xl border text-xs font-serif font-black flex items-center justify-center gap-1.5 hover:scale-105 transition shadow-xs cursor-pointer shrink-0"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>
                  {showKalChintan
                    ? (language === 'pb' ? 'ਚਿੰਤਨ ਸਮੇਟੋ' : language === 'en' ? 'Collapse Reflection' : 'चिंतन समेटें')
                    : (language === 'pb' ? 'ਚਿੰਤਨ ਲਿਖੋ (Start Reflection)' : language === 'en' ? 'Write Reflection' : 'चिंतन लिखें (Start Reflection)')}
                </span>
                {showKalChintan ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Dynamic Sakhi-Aligned Prompt Banner */}
            <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-700 dark:text-stone-300 space-y-2">
              <p className="font-semibold text-stone-800 dark:text-stone-100">
                {activeContemplationPrompt}
              </p>
              {activePracticalStep && (
                <p className="text-xs sm:text-[0.8125rem] text-amber-900 dark:text-amber-300 flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-bold">
                      {language === 'pb' ? 'ਵਿਵਹਾਰਕ ਅਭਿਆਸ:' : language === 'en' ? 'Daily Practice:' : 'व्यावहारिक अभ्यास:'}
                    </strong>{' '}
                    {activePracticalStep}
                  </span>
                </p>
              )}
            </div>

            {/* Expandable Reflection Box */}
            <AnimatePresence>
              {showKalChintan && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 pt-2"
                >
                  {/* Active Daily Sakhi Source Anchor */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <Quote className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="font-bold text-amber-800 dark:text-amber-300 text-[0.625rem] uppercase font-mono tracking-wider">
                          {language === 'pb'
                            ? `ਪਾਵਨ ਮੂਲ ਵਾਣੀ · ਸਾਖੀ #${sakhi.number} (${activeThemeTitle})`
                            : language === 'en'
                            ? `Sacred Source Couplet · Sakhi #${sakhi.number} (${activeThemeTitle})`
                            : `पावन मूल वाणी · साखी #${sakhi.number} (${activeThemeTitle})`}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          const prefix = kalReflectionText ? `${kalReflectionText}\n\n` : '';
                          setKalReflectionText(`${prefix}[साखी #${sakhi.number} · ${activeThemeTitle}]: `);
                        }}
                        className="px-2.5 py-0.5 rounded-lg text-[0.625rem] font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 border border-amber-500/30 transition cursor-pointer shrink-0"
                      >
                        {language === 'pb' ? `+ ਸਾਖੀ #${sakhi.number} ਹਵਾਲਾ` : language === 'en' ? `+ Cite Sakhi #${sakhi.number}` : `+ साखी #${sakhi.number} सन्दर्भ जोड़ें`}
                      </button>
                    </div>

                    <div className="text-xs sm:text-sm font-serif italic font-bold text-amber-950 dark:text-amber-100 pl-5 whitespace-pre-line">
                      "{sakhi.text?.[language] || sakhi.text?.hi}"
                    </div>

                    {(sakhi.bhavarth?.[language] || sakhi.bhavarth?.hi) && (
                      <p className="text-[0.6875rem] sm:text-xs font-serif text-stone-600 dark:text-stone-300 pl-5 leading-relaxed">
                        {sakhi.bhavarth?.[language] || sakhi.bhavarth?.hi}
                      </p>
                    )}
                  </div>

                  {/* Dynamic Sakhi Thought Starters Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] font-serif">
                    <span className="text-stone-500 font-bold mr-1">
                      {language === 'pb' ? 'ਮਨਨ ਸੰਕੇਤ:' : language === 'en' ? 'Thought Starters:' : 'चिंतन सूत्र:'}
                    </span>
                    {dynamicThoughtStarters.map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          const prefix = kalReflectionText ? `${kalReflectionText} • ` : '';
                          setKalReflectionText(`${prefix}${chip.insert}`);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-white/80 dark:bg-stone-800 border border-amber-200/60 dark:border-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100/70 transition cursor-pointer shadow-xs"
                      >
                        + {chip.label}
                      </button>
                    ))}
                  </div>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      value={kalReflectionText}
                      onChange={(e) => setKalReflectionText(e.target.value)}
                      placeholder={
                        language === 'pb'
                          ? `ਸਾਖੀ #${sakhi.number} (${activeThemeTitle}) ਦੇ ਚਿੰਤਨ ਨਾਲ ਅੱਜ ਮੇਰੇ ਵਿਚਾਰਾਂ ਅਤੇ ਰੋਜ਼ਾਨਾ ਵਿਵਹਾਰ ਵਿੱਚ ਇਹ ਸਕਾਰਾਤਮਕ ਤਬਦੀਲੀ ਆਈ ਹੈ ਕਿ...`
                          : language === 'en'
                          ? `Reflecting on Sakhi #${sakhi.number} (${activeThemeTitle}), today I want to bring this insight into my thoughts and daily conduct...`
                          : `साखी #${sakhi.number} ('${activeThemeTitle}') के चिंतन से आज मेरे विचार, व्यवहार और दैनिक आचरण में यह पावन बोध जाग्रत हुआ है कि...`
                      }
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full p-3.5 sm:p-4 rounded-2xl border text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-32 leading-relaxed"
                    />
                    <div className="absolute right-3 bottom-3 text-[0.625rem] font-mono text-stone-400">
                      {kalReflectionText.length} {language === 'en' ? 'chars' : 'वर्ण'}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSaveKalReflection}
                        disabled={!kalReflectionText.trim()}
                        style={{
                          backgroundColor: theme.buttonPrimaryBg,
                          color: theme.buttonPrimaryText,
                        }}
                        className="px-5 py-2.5 rounded-2xl text-xs font-serif font-black disabled:opacity-40 hover:scale-105 transition flex items-center gap-2 shadow-sm cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>{language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save Reflection to Diary' : 'चिंतन डायरी में सुरक्षित करें'}</span>
                      </button>

                      {pastKalNotes.length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            sacredHaptics.lightTap();
                            setShowPastKalNotes(!showPastKalNotes);
                          }}
                          className="px-3 py-2 rounded-xl text-xs font-serif font-semibold text-stone-600 dark:text-stone-300 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                          <span>{language === 'pb' ? `ਪਿਛਲੇ ਚਿੰਤਨ (${pastKalNotes.length})` : language === 'en' ? `Previous (${pastKalNotes.length})` : `पूर्व चिंतन (${pastKalNotes.length})`}</span>
                        </button>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowKalChintan(false)}
                      className="text-xs font-serif text-stone-500 hover:text-stone-800 transition cursor-pointer"
                    >
                      {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Dismiss' : 'समेटें'}
                    </button>
                  </div>

                  {/* Celebratory Saved Toast */}
                  {kalSavedToast && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs font-serif flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {language === 'pb'
                          ? `✨ ਤੁਹਾਡਾ ਦੈਨਿਕ ਚਿੰਤਨ (ਸਾਖੀ #${sakhi.number} · ${activeThemeTitle}) ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋਇਆ! ${activeSakhiPrayer || 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।'}`
                          : language === 'en'
                          ? `✨ Your Daily Reflection (Sakhi #${sakhi.number} · ${activeThemeTitle}) has been saved to your journal! ${activeSakhiPrayer || 'Saheb Bandagi Saheb.'}`
                          : `✨ आपका दैनिक चिंतन (साखी #${sakhi.number} · ${activeThemeTitle}) डायरी में सुरक्षित हुआ! ${activeSakhiPrayer || 'साहेब बंदगी साहेब।'}`}
                      </span>
                    </motion.div>
                  )}

                  {/* Previous Reflections Accordion */}
                  {showPastKalNotes && pastKalNotes.length > 0 && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-amber-200/50 space-y-2 text-left">
                      <h5 className="text-xs font-serif font-black text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                        {language === 'pb' ? 'ਪਿਛਲੇ ਦੈਨਿਕ ਚਿੰਤਨ:' : language === 'en' ? 'Previous Daily Reflection Entries:' : 'पूर्व दैनिक चिंतन प्रविष्टियाँ:'}
                      </h5>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {pastKalNotes.map((note) => (
                          <div key={note.id} className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-stone-800/60 border border-stone-200/50 text-xs font-serif">
                            <div className="text-[0.625rem] font-mono text-stone-400 mb-1 flex items-center justify-between gap-2">
                              <span>{note.date}</span>
                              {note.sakhiNumber && (
                                <span className="text-amber-700 dark:text-amber-300 font-bold">
                                  #{note.sakhiNumber}{note.themeTitle ? ` · ${note.themeTitle}` : ''}
                                </span>
                              )}
                            </div>
                            <p className="text-stone-800 dark:text-stone-200 leading-relaxed italic">"{note.text}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Daily Hukamnama Card (Automatic 12:00 AM change without repetition) — Positioned after Darshan, Gutka & Daily Sakhi Cards */}
      <DailyHukamnamaCard
        language={lang}
        onLanguageChange={setLanguage}
        onOpenFullView={() => {
          if (onNavigateView) {
            onNavigateView('hukamnama');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* ========================================================================= */}
      {/* SPIRITUAL PROGRESS BAR & MILESTONES & SATSANG NOTIFICATIONS PANEL */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Widget 1: Spiritual Progress Bar & Milestones */}
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="rounded-3xl border p-5 sm:p-6 shadow-xl space-y-4 relative overflow-hidden"
        >
          {/* Decorative Background Aura */}
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center text-amber-600 shrink-0"
            >
              <Trophy className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-serif font-black text-base" style={{ color: theme.sacredMaroon }}>
                {language === 'hi' ? 'आध्यात्मिक स्वाध्याय प्रगति' : language === 'pb' ? 'ਅਧਿਆਤਮਕ ਸਵਾਧਿਆਏ ਪ੍ਰਗਤੀ' : 'Spiritual Swadhyay Progress'}
              </h4>
              <p className="text-[0.625rem] uppercase tracking-wider font-extrabold text-amber-600 font-sans">
                {language === 'hi' ? 'ग्रन्थ मील का पत्थर' : language === 'pb' ? 'ਗ੍ਰੰਥ ਮੀਲ ਪੱਥਰ' : 'Grantha Path Milestones'}
              </p>
            </div>
          </div>

          <div className="space-y-3 font-serif">
            {/* Completion Rate of current 10-step study */}
            <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'दैनिक साखी १०-चरण अध्ययन:' : language === 'pb' ? 'ਦੈਨਿਕ ਸਾਖੀ ੧੦-ਚਰਣ ਅਧਿਐਨ:' : 'Daily Sakhi 10-Step Swadhyay:'}
                </span>
                <span className="text-amber-600 font-sans">
                  {swadhyayStats.currentSakhiSteps}/10 {language === 'hi' ? 'चरण' : language === 'pb' ? 'ਚਰਣ' : 'Steps'} ({swadhyayStats.currentSakhiSteps * 10}%)
                </span>
              </div>
              <div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${swadhyayStats.currentSakhiSteps * 10}%` }}
                />
              </div>
            </div>

            {/* Lifetime Milestone Rank Progress */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="font-black text-amber-700 dark:text-amber-300 block">
                    👑 {swadhyayStats.milestoneTitle}
                  </span>
                  <p className="text-[0.6875rem] opacity-80 leading-tight" style={{ color: theme.textSecondary }}>
                    {swadhyayStats.milestoneDesc}
                  </p>
                </div>
              </div>

              {/* Milestone progress bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-[0.625rem] font-bold" style={{ color: theme.textSecondary }}>
                  <span>
                    {swadhyayStats.completedSakhis} / {swadhyayStats.milestoneTarget} {language === 'hi' ? 'साखियाँ पूर्ण' : language === 'pb' ? 'ਸਾਖੀਆਂ ਪੂਰੀਆਂ' : 'Sakhis Completed'}
                  </span>
                  <span className="font-sans">{Math.round(swadhyayStats.milestoneProgress)}%</span>
                </div>
                <div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-500"
                    style={{ width: `${swadhyayStats.milestoneProgress}%` }}
                  />
                </div>
                <p className="text-[0.5625rem] italic opacity-70 text-right">
                  {language === 'hi' 
                    ? `अगले स्तर के लिए ${swadhyayStats.milestoneTarget - swadhyayStats.completedSakhis} और साखियों का पूर्ण स्वाध्याय करें।`
                    : language === 'pb'
                    ? `ਅਗਲੇ ਪੱਧਰ ਲਈ ${swadhyayStats.milestoneTarget - swadhyayStats.completedSakhis} ਹੋਰ ਸਾਖੀਆਂ ਪੂਰੀਆਂ ਕਰੋ।`
                    : `Complete ${swadhyayStats.milestoneTarget - swadhyayStats.completedSakhis} more Sakhis to unlock next milestone.`}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* SACRED WISDOM & DAILY AFFIRMATIONS WIDGETS WITH WEB SHARE & CLIPBOARD */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        <SacredWisdomWidget
          language={language}
          onOpenSwadhyay={(s) => {
            if (s && onSelectSakhi) {
              onSelectSakhi(s);
            }
            onStartSwadhyay();
          }}
          onOpenDiaryWithVerse={onOpenDiaryWithVerse}
        />

        <DailyAffirmationsWidget
          language={language}
          onOpenDiaryWithVerse={onOpenDiaryWithVerse}
        />
      </div>

      {/* ========================================================================= */}
      {/* SAHEB WORLD SACRED FEATURES & MASTER GRANTHALAYA DIRECTORY (ALL 54 CARDS) */}
      {/* ========================================================================= */}
      <section 
        id="saheb-world-features-directory"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          color: theme.textPrimary,
        }}
        className="rounded-3xl border shadow-xl p-4 sm:p-7 space-y-5 animate-fadeIn transition-all"
      >
        {/* Header with Sacred Branding & Collapse Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: theme.cardBorder }}>
          <div className="flex items-center gap-3 min-w-0">
            <div 
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }} 
              className="w-11 h-11 rounded-2xl border flex items-center justify-center shadow-xs shrink-0"
            >
              <Library className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-black font-serif tracking-tight" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਸਮੁੱਚੇ ਪਾਵਨ ਫੀਚਰਸ ਤੇ ਗ੍ਰੰਥਾਵਲੀ' : language === 'en' ? 'Saheb World Sacred Granths & Features' : 'साहेब वर्ल्ड समग्र ग्रन्थालय एवं समस्त फीचर्स'}
                </h3>
                <span className="text-xs font-bold font-serif tabular-nums opacity-80" style={{ color: theme.sacredMaroon }}>
                  · {ALL_54_DASHBOARD_CARDS.length}{' '}
                  {language === 'pb' ? 'ਕਾਰਡ' : language === 'en' ? 'Cards' : 'कार्ड्स'}
                </span>
              </div>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: theme.textSecondary }}>
                {language === 'pb'
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਸਮੁੱਚੇ ੫੪ ਪਾਵਨ ਗ੍ਰੰਥ, ਨਿਤਨੇਮ, ਸਾਧਨਾ, ਧੁਨ, ਕੁਇਜ਼ ਤੇ ਮਾਰਗਦਰਸ਼ਿਕਾ'
                  : language === 'en'
                  ? 'All 54 Satguru Kabir Saheb Holy Granths, Nitnem Gutka, Sadhana, Quizzes & App Guides'
                  : 'सतगुरु कबीर साहेब के समस्त ५४ पावन ग्रन्थ, नितनेम, साधना, धुन, क्विज व मार्गदर्शिका'}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 shrink-0 self-end sm:self-center">
            {isSahajMode && (
              <button
                type="button"
                onClick={() => setIsSahajMode(false)}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:scale-105 transition cursor-pointer shrink-0 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'pb' ? 'ਪੂਰਨ ਦਰਸ਼ਨ ਚਾਲੂ ਕਰੋ' : language === 'en' ? 'Enable Full View' : 'पूर्ण दर्शन चालू करें'}</span>
              </button>
            )}

            {!isFeaturesSectionCollapsed && (
              <button
                type="button"
                onClick={handleToggleAllCategories}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.sacredMaroon,
                }}
                className="min-h-[40px] px-3.5 py-1.5 rounded-xl border text-xs font-bold hover:brightness-95 transition cursor-pointer shadow-2xs flex items-center gap-1.5 whitespace-nowrap shrink-0"
                title={language === 'pb' ? 'ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਖੋਲ੍ਹੋ/ਸਮੇਟੋ' : language === 'en' ? 'Toggle All Categories' : 'सभी श्रेणियां खोलें/समेटें'}
              >
                <span>
                  {[1, 2, 3, 4, 5].every(id => collapsedCategories[id])
                    ? (language === 'pb' ? 'ਸਾਰੇ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Expand All' : 'सभी खोलें')
                    : (language === 'pb' ? 'ਸਾਰੇ ਸਮੇਟੋ' : language === 'en' ? 'Collapse All' : 'सभी समेटें')}
                </span>
              </button>
            )}

            {/* Master Section Toggle (बंद करें / खोलें / Minimize / Expand) */}
            <button
              type="button"
              onClick={toggleFeaturesSection}
              style={{
                backgroundColor: isFeaturesSectionCollapsed ? theme.buttonPrimaryBg : theme.stepActiveBg,
                borderColor: theme.accentGold,
                color: isFeaturesSectionCollapsed ? theme.buttonPrimaryText : theme.sacredMaroon,
              }}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:scale-105 active:scale-95 transition cursor-pointer whitespace-nowrap shrink-0"
              title={isFeaturesSectionCollapsed ? 'ਫੀਚਰਸ ਖੋਲ੍ਹੋ (Open Features)' : 'ਫੀਚਰਸ ਬੰਦ ਕਰੋ (Close Features)'}
            >
              {isFeaturesSectionCollapsed ? (
                <>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                  <span>{language === 'pb' ? 'ਫੀਚਰਸ ਖੋਲ੍ਹੋ' : language === 'en' ? 'Show Features' : 'फीचर्स खोलें'}</span>
                </>
              ) : (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>{language === 'pb' ? 'ਫੀਚਰਸ ਬੰਦ ਕਰੋ' : language === 'en' ? 'Hide Features' : 'फीचर्स बंद करें'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Collapsed Preview State */}
        {isFeaturesSectionCollapsed ? (
          <div 
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
            className="p-4 sm:p-5 rounded-2xl border text-center space-y-3 animate-fadeIn"
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold font-serif tabular-nums" style={{ color: theme.sacredMaroon }}>
              {DASHBOARD_CATEGORIES.map((cat, idx) => {
                const count = ALL_54_DASHBOARD_CARDS.filter((c) => c.categoryId === cat.id).length;
                return (
                  <React.Fragment key={cat.id}>
                    {idx > 0 && <span aria-hidden="true" className="opacity-40">·</span>}
                    <span>
                      {cat.shortTitle[language] || cat.shortTitle.hi} ({count})
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
            <p className="text-xs max-w-md mx-auto" style={{ color: theme.textSecondary }}>
              {language === 'pb'
                ? 'ਫੀਚਰਸ ਸੈਕਸ਼ਨ ਸਮੇਟਿਆ ਹੋਇਆ ਹੈ। ਸਮੁੱਚੇ ੫੪ ਕਾਰਡ, ਗ੍ਰੰਥਾਵਲੀ, ਨਿਤਨੇਮ, ਧੁਨ ਤੇ ਸਾਧਨਾ ਸਾਧਨ ਦੇਖਣ ਲਈ ਬਟਨ ਦਬਾਓ।'
                : language === 'en'
                ? 'Features section is minimized. Tap below to browse all 54 scriptures, sadhana tools, and guides.'
                : 'फीचर्स सेक्शन अभी समेटा गया है। समस्त ५४ कार्ड्स, ग्रन्थालय, नित्य पाठ व साधना टूल्स देखने हेतु नीचे क्लिक करें।'}
            </p>
            <button
              type="button"
              onClick={toggleFeaturesSection}
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="min-h-[44px] px-5 py-2 rounded-xl text-xs font-bold font-serif hover:scale-105 active:scale-95 transition cursor-pointer shadow-md inline-flex items-center gap-2 tabular-nums"
            >
              <ChevronDown className="w-4 h-4" />
              <span>
                {language === 'pb'
                  ? `ਸਮੁੱਚੇ ${ALL_54_DASHBOARD_CARDS.length} ਕਾਰਡ ਖੋਲ੍ਹੋ`
                  : language === 'en'
                  ? `Open All ${ALL_54_DASHBOARD_CARDS.length} Cards`
                  : `समस्त ${ALL_54_DASHBOARD_CARDS.length} कार्ड्स खोलें`}
              </span>
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Search & Category Filter Toolbar across All 54 Cards */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
                <div className="relative flex-1">
                  <Search
                    className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
                    style={{ color: theme.textSecondary }}
                  />
                  <input
                    id="dashboard-cards-search-input"
                    type="text"
                    value={dashboardCardSearch}
                    onChange={(e) => setDashboardCardSearch(e.target.value)}
                    placeholder={
                      language === 'pb'
                        ? '੫੪ ਕਾਰਡਾਂ ਵਿੱਚੋਂ ਖੋਜੋ (ਜਿਵੇਂ: ਬੀਜਕ, ਆਰਤੀ, ਜੰਤਰੀ, #18)...'
                        : language === 'en'
                        ? 'Search all 54 cards (e.g., Bijak, Aarti, Jantri, #18)...'
                        : 'समस्त ५४ कार्ड्स में खोजें (जैसे: बीजक, आरती, जंत्री, #18)...'
                    }
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="w-full min-h-[44px] pl-10 pr-10 py-2 rounded-xl border text-xs sm:text-sm font-serif outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                  {dashboardCardSearch && (
                    <button
                      type="button"
                      onClick={() => setDashboardCardSearch('')}
                      aria-label={language === 'en' ? 'Clear search' : 'खोज साफ़ करें'}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div
                  className="text-xs font-semibold font-serif tabular-nums whitespace-nowrap shrink-0 self-end sm:self-center px-1"
                  style={{ color: theme.textSecondary }}
                >
                  {language === 'pb'
                    ? `ਦਿੱਖ ਰਹੇ ਕਾਰਡ: ${filteredDashboardCards.length} / ${ALL_54_DASHBOARD_CARDS.length}`
                    : language === 'en'
                    ? `Showing ${filteredDashboardCards.length} / ${ALL_54_DASHBOARD_CARDS.length} cards`
                    : `प्रदर्शित कार्ड्स: ${filteredDashboardCards.length} / ${ALL_54_DASHBOARD_CARDS.length}`}
                </div>
              </div>

              {/* Interactive Category Segmented Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setDashboardCategoryFilter('all');
                  }}
                  style={{
                    backgroundColor: dashboardCategoryFilter === 'all' ? theme.buttonPrimaryBg : theme.bgSecondary,
                    color: dashboardCategoryFilter === 'all' ? theme.buttonPrimaryText : theme.textPrimary,
                    borderColor: dashboardCategoryFilter === 'all' ? theme.buttonPrimaryBg : theme.cardBorder,
                  }}
                  className="min-h-[38px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif tabular-nums transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  {language === 'pb'
                    ? `ਸਾਰੇ (${ALL_54_DASHBOARD_CARDS.length})`
                    : language === 'en'
                    ? `All (${ALL_54_DASHBOARD_CARDS.length})`
                    : `सभी (${ALL_54_DASHBOARD_CARDS.length})`}
                </button>
                {DASHBOARD_CATEGORIES.map((cat) => {
                  const catCount = ALL_54_DASHBOARD_CARDS.filter((c) => c.categoryId === cat.id).length;
                  const active = dashboardCategoryFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setDashboardCategoryFilter(cat.id);
                      }}
                      style={{
                        backgroundColor: active ? theme.buttonPrimaryBg : theme.bgSecondary,
                        color: active ? theme.buttonPrimaryText : theme.textPrimary,
                        borderColor: active ? theme.buttonPrimaryBg : theme.cardBorder,
                      }}
                      className="min-h-[38px] px-3.5 py-1.5 rounded-xl border text-xs font-bold font-serif tabular-nums transition cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {cat.shortTitle[language] || cat.shortTitle.hi} ({catCount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Empty Filter State */}
            {filteredDashboardCards.length === 0 ? (
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                className="p-8 rounded-2xl border text-center space-y-3"
              >
                <p className="text-sm font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb'
                    ? 'ਤੁਹਾਡੀ ਖੋਜ ਅਨੁਸਾਰ ਕੋਈ ਕਾਰਡ ਨਹੀਂ ਮਿਲਿਆ।'
                    : language === 'en'
                    ? 'No cards matched your current search or filter.'
                    : 'आपकी खोज के अनुसार कोई कार्ड नहीं मिला।'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDashboardCardSearch('');
                    setDashboardCategoryFilter('all');
                  }}
                  style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                  className="min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold font-serif cursor-pointer hover:opacity-90 transition"
                >
                  {language === 'pb' ? 'ਫਿਲਟਰ ਰੀਸੈਟ ਕਰੋ' : language === 'en' ? 'Reset Filters' : 'फ़िल्टर रीसेट करें'}
                </button>
              </div>
            ) : (
              /* 5 Collapsible Category Drawers */
              <div className="space-y-6">
                {DASHBOARD_CATEGORIES.map((category) => {
                  if (dashboardCategoryFilter !== 'all' && dashboardCategoryFilter !== category.id) {
                    return null;
                  }
                  const categoryCards = filteredDashboardCards.filter((c) => c.categoryId === category.id);
                  if (categoryCards.length === 0) return null;

                  const isFiltering = dashboardCardSearch.trim().length > 0 || dashboardCategoryFilter !== 'all';
                  const isCollapsed = isFiltering ? false : Boolean(collapsedCategories[category.id]);

                  return (
                    <div key={category.id} className="space-y-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (!isFiltering) toggleCategoryCollapse(category.id);
                        }}
                        style={{
                          backgroundColor: theme.stepActiveBg,
                          borderColor: theme.cardBorder,
                          color: theme.sacredMaroon,
                        }}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border flex items-center justify-between gap-2 shadow-2xs cursor-pointer select-none transition-all hover:brightness-95 group text-left"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${category.dotColorClass}`} />
                          <h4 className="text-xs sm:text-sm tracking-wide font-black font-serif truncate">
                            {category.title[language] || category.title.hi}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs font-bold font-serif tabular-nums ${category.accentTextClass}`}>
                            {categoryCards.length}{' '}
                            {language === 'pb' ? 'ਕਾਰਡ' : language === 'en' ? 'Cards' : 'कार्ड्स'}
                          </span>
                          {!isFiltering &&
                            (isCollapsed ? (
                              <ChevronDown className="w-4 h-4 opacity-75 transition-transform group-hover:scale-110" />
                            ) : (
                              <ChevronUp className="w-4 h-4 opacity-75 transition-transform group-hover:scale-110" />
                            ))}
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 animate-fadeIn">
                          {categoryCards.map((card) => {
                            const slotStatus = adminSlotStatuses[card.slotId];
                            const isLoaded = Boolean(slotStatus?.loaded);
                            const paddedNum = String(card.slotNumber).padStart(2, '0');

                            return (
                              <button
                                key={card.slotId}
                                id={`dashboard-card-${card.slotId}`}
                                type="button"
                                onClick={() => handleLaunchDashboardCard(card)}
                                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                                className={`p-4 sm:p-5 rounded-2xl border ${card.hoverBorderClass} transition-all duration-200 hover:scale-[1.015] active:scale-[0.985] cursor-pointer flex flex-col justify-between h-full group text-left shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500`}
                              >
                                <div className="space-y-2.5 w-full">
                                  {/* Unboxed Typographic Metadata Header + Icon (Zero-Pill Discipline) */}
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold font-serif min-w-0 truncate">
                                      <span className="font-mono tabular-nums opacity-70" style={{ color: theme.textSecondary }}>
                                        {paddedNum}
                                      </span>
                                      <span aria-hidden="true" className="opacity-40">·</span>
                                      <span className={`truncate ${card.accentClass}`}>
                                        {card.kicker[language] || card.kicker.hi}
                                      </span>
                                      {isLoaded && (
                                        <>
                                          <span aria-hidden="true" className="opacity-40">·</span>
                                          <span className="text-emerald-700 dark:text-emerald-300 tabular-nums shrink-0">
                                            ✓ {slotStatus.itemCount}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                    {renderDashboardCardIcon(
                                      card.icon,
                                      `w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${card.accentClass}`
                                    )}
                                  </div>

                                  <div>
                                    <h5
                                      className="font-serif font-black text-base sm:text-[17px] leading-snug tracking-tight transition"
                                      style={{ color: theme.sacredMaroon }}
                                    >
                                      {card.title[language] || card.title.hi}
                                    </h5>
                                    <p
                                      className="text-xs opacity-85 mt-1 line-clamp-2 font-serif leading-relaxed"
                                      style={{ color: theme.textSecondary }}
                                    >
                                      {card.description[language] || card.description.hi}
                                    </p>
                                  </div>
                                </div>

                                <div
                                  style={{ borderColor: theme.cardBorder }}
                                  className="mt-3.5 pt-2.5 border-t w-full flex items-center justify-between text-[11.5px] font-bold"
                                >
                                  <span className={`font-serif ${card.accentClass}`}>
                                    {card.actionLabel[language] || card.actionLabel.hi}
                                  </span>
                                  <ChevronRight
                                    size={14}
                                    className={`${card.accentClass} group-hover:translate-x-1 transition-transform shrink-0`}
                                  />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>

      {/* SAKHI CATEGORIES EXPLORATION MODAL */}
      {showCategorySelector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
            }}
            className="w-full max-w-xl rounded-2xl border shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.cardBorder }}>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {language === 'hi' ? 'पावन साखी श्रेणियाँ (अंग संग्रह)' : language === 'pb' ? 'ਪਾਵਨ ਸਾਖੀ ਸ਼੍ਰੇਣੀਆਂ (ਅੰਗ ਸੰਗ੍ਰਹਿ)' : 'Sakhi Sacred Categories (Angs)'}
                  </h3>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>
                    {language === 'hi' ? 'आध्यात्मिक विषय के अनुसार साखियों का चयन करें' : language === 'pb' ? 'ਵਿਸ਼ੇ ਅਨੁਸਾਰ ਸਾਖੀਆਂ ਦੀ ਚੋਣ ਕਰੋ' : 'Select spiritual verses by sacred theme'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCategorySelector(false)}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Pills Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter('all')}
                style={{
                  backgroundColor: selectedCategoryFilter === 'all' ? theme.buttonPrimaryBg : theme.bgSecondary,
                  color: selectedCategoryFilter === 'all' ? theme.buttonPrimaryText : theme.textPrimary,
                  borderColor: selectedCategoryFilter === 'all' ? theme.buttonPrimaryBg : theme.cardBorder,
                }}
                className="px-3 py-1 rounded-full border font-bold text-xs whitespace-nowrap cursor-pointer transition"
              >
                {language === 'hi' ? 'सभी अंग' : language === 'pb' ? 'ਸਾਰੇ ਅੰਗ' : 'All Categories'} ({sakhisList.length})
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  style={{
                    backgroundColor: selectedCategoryFilter === cat.id ? theme.buttonPrimaryBg : theme.bgSecondary,
                    color: selectedCategoryFilter === cat.id ? theme.buttonPrimaryText : theme.textPrimary,
                    borderColor: selectedCategoryFilter === cat.id ? theme.buttonPrimaryBg : theme.cardBorder,
                  }}
                  className="px-3 py-1 rounded-full border text-xs whitespace-nowrap cursor-pointer transition flex items-center gap-1 font-medium"
                >
                  <span>{cat.title}</span>
                  <span className="text-[0.625rem] opacity-75">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Sakhis in this category */}
            <div className="space-y-2 max-h-72 overflow-y-auto divide-y" style={{ borderColor: theme.borderOrnament }}>
              {categorySakhis.map((item) => (
                <div
                  key={item.id}
                  className="pt-2 first:pt-0 pb-2 flex items-start justify-between gap-3 hover:bg-black/5 dark:hover:bg-white/5 p-2 rounded-xl transition"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span 
                        style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                        className="px-2 py-0.2 rounded-full text-[0.625rem] font-bold"
                      >
                        #{item.number}
                      </span>
                      <span className="text-[0.6875rem] font-semibold" style={{ color: theme.textSecondary }}>
                        {item.categoryTitle[language]}
                      </span>
                    </div>
                    <p className="font-serif text-xs sm:text-sm font-bold line-clamp-2" style={{ color: theme.sacredMaroon }}>
                      {item.text[language]}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectSakhi) {
                        onSelectSakhi(item);
                      }
                      setShowCategorySelector(false);
                    }}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 shrink-0 cursor-pointer shadow-xs"
                  >
                    {language === 'hi' ? 'चुनें' : language === 'pb' ? 'ਚੁਣੋ' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TEXT SHARING EXPORT MODAL */}
      {showTextExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
            }}
            className="w-full max-w-lg rounded-2xl border shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.cardBorder }}>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {language === 'hi' ? 'साखी पाठ निर्यात व शेयर' : language === 'pb' ? 'ਸਾਖੀ ਪਾਠ ਨਿਰਯਾਤ ਅਤੇ ਸ਼ੇਅਰ' : 'Export & Share Sacred Text'}
                  </h3>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>
                    {language === 'hi' ? `साखी #${sakhi.number} - ${sakhi.categoryTitle[language]}` : `Sakhi #${sakhi.number}`}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowTextExportModal(false)}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Options Toggle */}
            <div className="flex items-center justify-between text-xs px-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeMeanings}
                  onChange={(e) => setIncludeMeanings(e.target.checked)}
                  className="rounded accent-amber-600 cursor-pointer"
                />
                <span className="font-semibold" style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'विस्तृत शब्दार्थ शामिल करें' : language === 'pb' ? 'ਸ਼ਬਦਾਰਥ ਸ਼ਾਮਲ ਕਰੋ' : 'Include Word Meanings'}
                </span>
              </label>

              {exportCopied && (
                <span className="text-green-600 font-bold flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'कॉपी हो गया!' : 'Copied!'}</span>
                </span>
              )}
            </div>

            {/* Live Text Preview Box */}
            <textarea
              readOnly
              value={generateExportText()}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.textPrimary,
              }}
              className="w-full h-44 p-3 rounded-xl border font-mono text-xs focus:outline-none resize-none select-all"
            />

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopyTextExport}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="p-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                {exportCopied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                <span>{exportCopied ? (language === 'hi' ? 'कॉपी हुआ' : 'Copied') : (language === 'hi' ? 'टेक्स्ट कॉपी करें' : 'Copy Text')}</span>
              </button>

              <button
                type="button"
                onClick={handleNativeShareExport}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>{language === 'hi' ? 'शेयर करें' : language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : 'Share'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadTextDoc}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                  color: theme.textPrimary,
                }}
                className="p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>{language === 'hi' ? 'फ़ाइल डाउनलोड (.txt)' : 'Download .txt'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sacred Quote Image Card Designer & Downloader Modal */}
      <QuoteCardModal
        isOpen={showCardModal}
        onClose={() => setShowCardModal(false)}
        sakhi={sakhi}
        initialLanguage={language}
      />

      {/* Daily Sadhana Haziri Modal */}
      <HaziriModal
        isOpen={showHaziriModal}
        onClose={() => setShowHaziriModal(false)}
        language={language}
        haziriState={haziriState}
        onTriggerFlowerShower={onOpenBlessing}
      />

      {/* Daily Sadhana 3-Question Quiz Modal */}
      <DailySadhanaQuizModal
        isOpen={showDailyQuizModal}
        onClose={() => setShowDailyQuizModal(false)}
        sakhi={sakhi}
        language={language}
        onOpenBlessing={() => {
          if (onOpenBlessing) onOpenBlessing();
        }}
        onSaveToDiary={onSaveToDiary}
      />
    </div>
  );
};
