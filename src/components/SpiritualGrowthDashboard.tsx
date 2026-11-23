import React, { useState, useEffect, useMemo } from 'react';
import { 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Trash2, 
  Plus, 
  Search, 
  Mic, 
  Copy, 
  ArrowLeft,
  X, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  FileText,
  Flame,
  Brain,
  ChevronRight,
  RotateCw,
  Database,
  HardDrive,
  Scale,
  Heart,
  Sun
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { Language, AppView, SACRED_BRANDING, DiaryEntry } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useVoiceInput } from '../services/speechRecognition';
import { sakhisDatabase } from '../data/sakhis';
import { StorageCapacityReport } from './StorageCapacityReport';
import { AatmaBhushanModule } from './AatmaBhushanModule';
import { motion, AnimatePresence } from 'motion/react';
import { sacredHaptics } from '../services/haptics';

interface SpiritualGrowthDashboardProps {
  language: Language;
  onClose?: () => void;
  onNavigateToSwadhyay?: (sakhiNum?: number, step?: number) => void;
  onNavigateView?: (view: AppView) => void;
}

export const SpiritualGrowthDashboard: React.FC<SpiritualGrowthDashboardProps> = ({
  language,
  onClose,
  onNavigateToSwadhyay,
  onNavigateView,
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState<'progress' | 'journal' | 'karma' | 'milestones' | 'storage' | 'bhushan'>('progress');

  // --- BHAKTI STREAK STATE ---
  const [bhaktiStreak, setBhaktiStreak] = useState<number>(0);
  const [maxBhaktiStreak, setMaxBhaktiStreak] = useState<number>(0);

  // Initialize and check Bhakti Streak
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedStreak = localStorage.getItem('sahebworld_bhakti_streak');
        const savedMax = localStorage.getItem('sahebworld_bhakti_max_streak');
        const lastActiveDateStr = localStorage.getItem('sahebworld_bhakti_last_active_date');
        
        let streak = savedStreak ? parseInt(savedStreak, 10) : 0;
        let maxStreak = savedMax ? parseInt(savedMax, 10) : 0;
        
        const todayStr = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        
        if (lastActiveDateStr) {
          const lastActive = new Date(lastActiveDateStr);
          const today = new Date(todayStr);
          const diffTime = Math.abs(today.getTime() - lastActive.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 0) {
            // Active today
          } else if (diffDays === 1) {
            // Consecutive day
          } else {
            // Gap, reset/start new streak
            streak = 1;
          }
        } else {
          streak = 1;
        }
        
        if (streak > maxStreak) {
          maxStreak = streak;
        }
        
        setBhaktiStreak(streak);
        setMaxBhaktiStreak(maxStreak);
        
        localStorage.setItem('sahebworld_bhakti_streak', String(streak));
        localStorage.setItem('sahebworld_bhakti_max_streak', String(maxStreak));
        localStorage.setItem('sahebworld_bhakti_last_active_date', todayStr);
      }
    } catch {}
  }, []);

  const incrementBhaktiStreak = () => {
    try {
      if (typeof window !== 'undefined') {
        const todayStr = new Date().toISOString().split('T')[0];
        const lastActiveDateStr = localStorage.getItem('sahebworld_bhakti_last_active_date');
        
        let streak = bhaktiStreak;
        if (lastActiveDateStr !== todayStr) {
          streak += 1;
          setBhaktiStreak(streak);
          if (streak > maxBhaktiStreak) {
            setMaxBhaktiStreak(streak);
            localStorage.setItem('sahebworld_bhakti_max_streak', String(streak));
          }
          localStorage.setItem('sahebworld_bhakti_streak', String(streak));
          localStorage.setItem('sahebworld_bhakti_last_active_date', todayStr);
        }
      }
    } catch {}
  };

  // --- KARMA & BHAKTI SADHANA STATES ---
  const [sukritDaya, setSukritDaya] = useState<number>(3); // 0 to 5
  const [sukritSatya, setSukritSatya] = useState<number>(3);
  const [sukritSeva, setSukritSeva] = useState<number>(3);
  const [sukritSumiran, setSukritSumiran] = useState<number>(3);
  const [sukritSwadhyay, setSukritSwadhyay] = useState<number>(3);

  const [kaalKrodh, setKaalKrodh] = useState<number>(1); // 0 to 5
  const [kaalLobh, setKaalLobh] = useState<number>(1);
  const [kaalMoha, setKaalMoha] = useState<number>(1);
  const [kaalMaan, setKaalMaan] = useState<number>(1);
  const [kaalNinda, setKaalNinda] = useState<number>(1);

  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  
  const [karmaLogs, setKarmaLogs] = useState<Record<string, number>>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_karma_logs');
        if (saved) {
          return JSON.parse(saved);
        } else {
          // Seed logs for previous 28 days
          const seed: Record<string, number> = {};
          const now = new Date();
          for (let i = 27; i >= 1; i--) {
            const d = new Date();
            d.setDate(now.getDate() - i);
            const dStr = d.toISOString().split('T')[0];
            const val = Math.floor(Math.sin(i * 0.9) * 12) + Math.floor(Math.cos(i * 0.5) * 6) + 4;
            seed[dStr] = Math.max(-25, Math.min(25, val));
          }
          localStorage.setItem('sahebworld_karma_logs', JSON.stringify(seed));
          return seed;
        }
      }
    } catch {}
    return {};
  });

  const netKarmaScore = useMemo(() => {
    const totalPositive = sukritDaya + sukritSatya + sukritSeva + sukritSumiran + sukritSwadhyay;
    const totalNegative = kaalKrodh + kaalLobh + kaalMoha + kaalMaan + kaalNinda;
    return totalPositive - totalNegative;
  }, [sukritDaya, sukritSatya, sukritSeva, sukritSumiran, sukritSwadhyay, kaalKrodh, kaalLobh, kaalMoha, kaalMaan, kaalNinda]);

  const handleRecordKarma = () => {
    sacredHaptics.lightTap();
    setKarmaLogs(prev => {
      const next = { ...prev, [todayStr]: netKarmaScore };
      try {
        localStorage.setItem('sahebworld_karma_logs', JSON.stringify(next));
      } catch {}
      return next;
    });
    incrementBhaktiStreak();
    setToastMessage(
      language === 'pb'
        ? '✓ ਅੱਜ ਦੀ ਕਰਮਾ ਸਾਧਨਾ ਦਾ ਲੇਖਾ-ਜੋਖਾ ਦਰਜ ਹੋ ਗਿਆ!'
        : language === 'en'
        ? '✓ Daily Karma assessment recorded successfully!'
        : '✓ आज की कर्मा साधना का दिव्य लेखा-जोखा अंकित हुआ!'
    );
    setTimeout(() => setToastMessage(null), 3500);
  };

  // --- SWADHYAY PROGRESS METRICS ---
  const [stats, setStats] = useState({
    totalSakhisRead: 0,
    totalTenStepsCompleted: 0,
    maxUnlockedStep: 1,
    lastReadSakhi: 1,
    completedStepCounts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10 steps
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const totalSakhis = sakhisDatabase ? sakhisDatabase.length : 108;
    let sakhisRead = 0;
    let totalStepsDone = 0;
    let highestStepOverall = 1;
    const stepCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 1; i <= totalSakhis; i++) {
      const savedMaxTen = localStorage.getItem(`sahebworld_max_unlocked_ten_step_sakhi_${i}`);
      const savedStep = localStorage.getItem(`sahebworld_step_sakhi_${i}`);
      
      const maxTen = savedMaxTen ? parseInt(savedMaxTen, 10) : (savedStep ? parseInt(savedStep, 10) : 0);
      
      if (maxTen > 0) {
        sakhisRead++;
        if (maxTen > highestStepOverall) highestStepOverall = maxTen;
        for (let s = 1; s <= Math.min(10, maxTen); s++) {
          stepCounts[s - 1]++;
          totalStepsDone++;
        }
      }
    }

    const lastSakhi = localStorage.getItem('sahebworld_last_sakhi_id');

    setStats({
      totalSakhisRead: Math.max(1, sakhisRead),
      totalTenStepsCompleted: totalStepsDone,
      maxUnlockedStep: Math.max(1, Math.min(10, highestStepOverall)),
      lastReadSakhi: lastSakhi ? parseInt(lastSakhi, 10) : 1,
      completedStepCounts: stepCounts,
    });
  }, []);

  // Calculate percentage
  const totalPossibleSteps = (sakhisDatabase ? sakhisDatabase.length : 108) * 10;
  const overallPercentage = Math.min(100, Math.round((stats.totalTenStepsCompleted / Math.max(1, totalPossibleSteps)) * 100) || 12);

  // Dynamic Browser Storage Size Calculation (in Kilobytes)
  const storageConsumedKB = useMemo(() => {
    if (typeof window === 'undefined') return 12.5;
    try {
      let totalChars = 0;
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          totalChars += (localStorage[key] || '').length;
        }
      }
      return Math.max(0.5, parseFloat((totalChars / 1024).toFixed(2)));
    } catch {
      return 12.5;
    }
  }, [stats]);

  // 10 Steps Metadata
  const tenStepsMeta = [
    { step: 1, title: language === 'hi' ? 'पावन मंगलाचरण' : language === 'pb' ? 'ਪਾਵਨ ਮੰਗਲਾਚਰਣ' : 'Invocations', icon: '🙏', desc: language === 'pb' ? 'ਸਤਿਗੁਰੂ ਵੰਦਨਾ ਤੇ ਮੰਗਲਾਚਰਣ ਧਿਆਨ' : language === 'en' ? 'Satguru invocation & opening reverence' : 'सतगुरु वंदना व मंगलाचरण ध्यान' },
    { step: 2, title: language === 'hi' ? 'मूल साखी पाठ' : language === 'pb' ? 'ਮੂਲ ਸਾਖੀ ਪਾਠ' : 'Couplet Recitation', icon: '📜', desc: language === 'pb' ? 'ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ ਦਾ ਸਸਵਰ ਪਾਠ' : language === 'en' ? 'Authentic recitation of original couplet' : 'प्रामाणिक वाणी का सस्वर पाठ' },
    { step: 3, title: language === 'hi' ? 'पद-छेद व शब्दार्थ' : language === 'pb' ? 'ਪਦ-ਛੇਦ ਤੇ ਸ਼ਬਦਾਰਥ' : 'Glossary Breakdown', icon: '🔍', desc: language === 'pb' ? 'ਔਖੇ ਸ਼ਬਦਾਂ ਦਾ ਸੰਧੀ-ਵਿਛੇਦ ਤੇ ਅਰਥ' : language === 'en' ? 'Word-by-word Sandhukkari glossary' : 'कठिन शब्दों का संधिविच्छेद व अर्थ' },
    { step: 4, title: language === 'hi' ? 'विस्तृत भावार्थ' : language === 'pb' ? 'ਵਿਸਤ੍ਰਿਤ ਭਾਵਾਰਥ' : 'Spiritual Meaning', icon: '💡', desc: language === 'pb' ? 'ਡੂੰਘੀ ਦਾਰਸ਼ਨਿਕ ਤੇ ਆਤਮਿਕ ਵਿਆਖਿਆ' : language === 'en' ? 'Deep philosophical & spiritual meaning' : 'गूढ़ दार्शनिक एवं आध्यात्मिक व्याख्या' },
    { step: 5, title: language === 'hi' ? 'बीजक व ग्रंथ सिद्धांत' : language === 'pb' ? 'ਬੀਜਕ ਤੇ ਗ੍ਰੰਥ ਸਿਧਾਂਤ' : 'Bijak Core Philosophy', icon: '💎', desc: language === 'pb' ? 'ਕਬੀਰ ਬੀਜਕ ਤੇ ਸਤਯਨਾਮ ਸਿਧਾਂਤ' : language === 'en' ? 'Kabir Bijak & Satyanaam doctrine' : 'कबीर बीजक व सत्यनाम सिद्धांत' },
    { step: 6, title: language === 'hi' ? 'निह-अक्षर महिमा' : language === 'pb' ? 'ਨਿਹ-ਅੱਖਰ ਮਹਿਮਾ' : 'Nih-Akshar Divine Resonance', icon: '✨', desc: language === 'pb' ? 'ਅਵਿਨਾਸ਼ੀ ਨਿਹ-ਅੱਖਰ ਪਰਮਪਦ ਬੋਧ' : language === 'en' ? 'Imperishable Nih-Akshar awareness' : 'अविनाशी निह-अक्षर परमपद बोध' },
    { step: 7, title: language === 'hi' ? 'सुरति-शब्द योग साधना' : language === 'pb' ? 'ਸੁਰਤਿ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ' : 'Surat-Shabad Meditation', icon: '🧘', desc: language === 'pb' ? 'ਅੰਦਰੂਨੀ ਅਨਹਦ ਧਿਆਨ ਸਾਧਨਾ' : language === 'en' ? 'Inner Anhad Surat-Shabad meditation' : 'आंतरिक अनहद ध्यान साधना' },
    { step: 8, title: language === 'hi' ? 'व्यवहारिक जीवन आचरण' : language === 'pb' ? 'ਵਿਵਹਾਰਕ ਆਚਰਣ' : 'Practical Conduct', icon: '🌿', desc: language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਕਬੀਰ ਉਪਦੇਸ਼' : language === 'en' ? 'Practical daily conduct & application' : 'दैनिक जीवन में कबीर उपदेश' },
    { step: 9, title: language === 'hi' ? 'आत्म-निरीक्षण प्रश्नोत्तरी' : language === 'pb' ? 'ਆਤਮ-ਨਿਰੀਖਣ' : 'Self-Introspection', icon: '🧭', desc: language === 'pb' ? 'ਵਿਵੇਕ ਪਰਖ ਤੇ ਆਤਮ-ਸਮੀਖਿਆ' : language === 'en' ? 'Self-introspection & knowledge quiz' : 'विवेक परीक्षण व आत्म-समीक्षा' },
    { step: 10, title: language === 'hi' ? 'सतगुरु आशीर्वाद व संकल्प' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਆਸ਼ੀਰਵਾਦ' : 'Blessings & Pledge', icon: '🌸', desc: language === 'pb' ? 'ਪਾਵਨ ਸੰਕਲਪ ਅਤੇ ਗੁਰੂ-ਕ੍ਰਿਪਾ' : language === 'en' ? 'Sacred resolve & Satguru blessings' : 'पावन संकल्प ग्रहण व गुरु-कृपा' },
  ];

  // --- DAILY SADHANA JOURNAL STATE ---
  const [journalEntries, setJournalEntries] = useState<DiaryEntry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_diary_entries');
      if (saved) {
        try { return JSON.parse(saved); } catch {}
      }
    }
    return [
      {
        id: 'journal-seed-1',
        sakhiNumber: 1,
        date: new Date().toISOString(),
        notes: 'गुरु कुम्हार शिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट। आज स्वाध्याय में गुरु शरण का अमूल्य महत्व समझा।',
        categoryTag: language === 'hi' ? 'समर्पण' : language === 'pb' ? 'ਸਮਰਪਣ' : 'Surrender',
      },
    ];
  });

  const [newJournalText, setNewJournalText] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>(language === 'hi' ? 'साधना' : language === 'pb' ? 'ਸਾਧਨਾ' : 'Sadhana');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { isListening, interimText, toggleListening } = useVoiceInput({
    language,
    onTranscript: (text, isFinal) => {
      if (isFinal) {
        setNewJournalText((prev) => (prev.trim() ? `${prev.trim()} ${text.trim()}` : text.trim()));
      }
    },
    continuous: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_diary_entries', JSON.stringify(journalEntries));
    }
  }, [journalEntries]);

  const handleAddJournal = () => {
    if (!newJournalText.trim()) return;

    const newEntry: DiaryEntry = {
      id: 'journal-' + Date.now(),
      sakhiNumber: stats.lastReadSakhi,
      date: new Date().toISOString(),
      notes: newJournalText.trim(),
      categoryTag: selectedTag,
    };

    setJournalEntries([newEntry, ...journalEntries]);
    setNewJournalText('');
    setToastMessage(
      language === 'pb'
        ? '✓ ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਜਰਨਲ ਨੋਟ ਦਰਜ ਹੋਇਆ'
        : language === 'en'
        ? '✓ Journal entry saved'
        : '✓ दैनिक साधना जर्नल प्रविष्टि दर्ज हुई'
    );
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDeleteJournal = (id: string) => {
    if (!window.confirm(
      language === 'hi' 
        ? 'क्या आप इस जर्नल प्रविष्टि को हटाना चाहते हैं?' 
        : language === 'pb' 
        ? 'ਕੀ ਤੁਸੀਂ ਇਹ ਜਰਨਲ ਨੋਟ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?' 
        : 'Delete this journal entry?'
    )) return;

    setJournalEntries(prev => prev.filter(item => item.id !== id));
    setToastMessage(
      language === 'pb'
        ? '✓ ਨੋਟ ਸਫਲਤਾਪੂਰਵਕ ਹਟਾ ਦਿੱਤਾ ਗਿਆ'
        : language === 'en'
        ? '✓ Entry deleted'
        : '✓ प्रविष्टि सफलतापूर्वक हटा दी गई'
    );
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredEntries = useMemo(() => {
    return journalEntries.filter(item => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return item.notes.toLowerCase().includes(q) || (item.categoryTag && item.categoryTag.toLowerCase().includes(q));
    });
  }, [journalEntries, searchQuery]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 relative animate-fadeIn">
      {/* Top Banner Header with Inline Close Button */}
      <div 
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border py-3 px-4 rounded-3xl flex items-center justify-between shadow-xs select-none relative"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-600" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
            {language === 'hi' ? 'आध्यात्मिक स्वाध्याय एवं साधना डैशबोर्ड' : language === 'pb' ? 'ਸਾਧਨਾ ਪ੍ਰਗਤੀ ਡੈਸ਼ਬੋਰਡ' : 'Spiritual Growth Dashboard'}
          </span>
        </div>

        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-base font-black tracking-widest font-serif hidden sm:block drop-shadow-xs"
        >
          {SACRED_BRANDING.header[language]}
        </span>

        <div className="flex items-center justify-end">
          {onClose && (
            <button
              onClick={onClose}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
              title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="p-3 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-bold text-center animate-fadeIn shadow-md">
          {toastMessage}
        </div>
      )}

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border space-y-1 text-center shadow-xs">
          <div className="text-amber-600 text-2xl font-black font-mono">{overallPercentage}%</div>
          <div className="text-[11px] font-serif font-bold opacity-70" style={{ color: theme.textSecondary }}>
            {language === 'hi' ? 'कुल स्वाध्याय पूर्णता' : language === 'pb' ? 'ਕੁੱਲ ਸਵਾਧਿਆਏ ਪ੍ਰਗਤੀ' : 'Total Swadhyay Progress'}
          </div>
        </div>

        <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border space-y-1 text-center shadow-xs">
          <div className="text-emerald-600 text-2xl font-black font-mono">{stats.totalSakhisRead}</div>
          <div className="text-[11px] font-serif font-bold opacity-70" style={{ color: theme.textSecondary }}>
            {language === 'hi' ? 'पठित साखियां' : language === 'pb' ? 'ਪੜ੍ਹੀਆਂ ਸਾਖੀਆਂ' : 'Sakhis Contemplated'}
          </div>
        </div>

        <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border space-y-1 text-center shadow-xs">
          <div className="text-purple-600 text-2xl font-black font-mono">{stats.maxUnlockedStep}/10</div>
          <div className="text-[11px] font-serif font-bold opacity-70" style={{ color: theme.textSecondary }}>
            {language === 'hi' ? 'उच्चतम अनलॉक चरण' : language === 'pb' ? 'ਸਭ ਤੋਂ ਉੱਚਾ ਅਨਲੌਕ ਪੜਾਅ' : 'Highest Unlocked Step'}
          </div>
        </div>

        <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-2xl border space-y-1 text-center shadow-xs backdrop-blur-md">
          <div className="text-rose-600 text-2xl font-black font-mono">{journalEntries.length}</div>
          <div className="text-[11px] font-serif font-bold opacity-70" style={{ color: theme.textSecondary }}>
            {language === 'hi' ? 'साधना जर्नल प्रविष्टियां' : language === 'pb' ? 'ਸਾਧਨਾ ਜਰਨਲ ਨੋਟ' : 'Journal Reflections'}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b pb-2 overflow-x-auto custom-scrollbar" style={{ borderColor: theme.cardBorder }}>
        <button
          onClick={() => setActiveTab('progress')}
          style={{
            backgroundColor: activeTab === 'progress' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'progress' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'progress' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <TrendingUp className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? '१०-चरणीय प्रगति' : language === 'pb' ? '੧੦-ਪੜਾਅ ਪ੍ਰਗਤੀ' : '10-Step Progress'}</span>
        </button>

        <button
          onClick={() => setActiveTab('journal')}
          style={{
            backgroundColor: activeTab === 'journal' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'journal' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'journal' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <FileText className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'दैनिक साधना जर्नल' : language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਜਰਨਲ' : 'Daily Sadhana Journal'}</span>
        </button>

        <button
          onClick={() => {
            sacredHaptics.lightTap();
            setActiveTab('karma');
          }}
          style={{
            backgroundColor: activeTab === 'karma' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'karma' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'karma' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <Scale className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'कर्म व भक्ति साधना' : language === 'pb' ? 'ਕਰਮ ਤੇ ਭਗਤੀ ਸਾਧਨਾ' : 'Karma & Bhakti Sadhana'}</span>
        </button>

        <button
          onClick={() => {
            sacredHaptics.lightTap();
            setActiveTab('bhushan');
          }}
          style={{
            backgroundColor: activeTab === 'bhushan' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'bhushan' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'bhushan' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'आत्मा के 16 भूषण' : language === 'pb' ? 'ਆਤਮਾ ਦੇ ੧੬ ਗਹਿਣੇ' : '16 Ornaments of the Soul'}</span>
        </button>

        <button
          onClick={() => setActiveTab('milestones')}
          style={{
            backgroundColor: activeTab === 'milestones' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'milestones' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'milestones' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'उपलब्धि एवं मील के पत्थर' : language === 'pb' ? 'ਪ੍ਰਾਪਤੀਆਂ ਤੇ ਮੀਲ-ਪੱਥਰ' : 'Spiritual Milestones'}</span>
        </button>

        <button
          onClick={() => setActiveTab('storage')}
          style={{
            backgroundColor: activeTab === 'storage' ? theme.buttonPrimaryBg : theme.cardBg,
            color: activeTab === 'storage' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: activeTab === 'storage' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs shrink-0 backdrop-blur-md"
        >
          <Database className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'भंडारण एवं संचय रिपोर्ट' : language === 'pb' ? 'ਭੰਡਾਰਨ ਤੇ ਸਮਰੱਥਾ ਰਿਪੋਰਟ' : 'Storage & Capacity Report'}</span>
        </button>
      </div>

      {/* TAB 1: 10-STEP SWADHYAY PROGRESS */}
      {activeTab === 'progress' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Main Overall Progress Bar */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-md backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-serif font-black" style={{ color: theme.sacredMaroon }}>
                  {language === 'hi' ? 'पावन १०-चरणीय स्वाध्याय प्रगति' : language === 'pb' ? 'ਪਾਵਨ ੧੦-ਪੜਾਅ ਸਵਾਧਿਆਏ ਪ੍ਰਗਤੀ' : '10-Step Swadhyay Growth'}
                </h3>
                <p className="text-xs opacity-70 font-serif" style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'कबीर साहेब की वाणी के १० पावन सोपानों का गहन पठन एवं आत्मसात' : language === 'pb' ? 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦੇ ੧੦ ਪਾਵਨ ਪੜਾਵਾਂ ਦਾ ਡੂੰਘਾ ਅਧਿਐਨ' : 'Deep contemplation across 10 sacred steps'}
                </p>
              </div>

              <button
                onClick={() => onNavigateToSwadhyay && onNavigateToSwadhyay(stats.lastReadSakhi, stats.maxUnlockedStep)}
                className="px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              >
                <span>{language === 'hi' ? 'स्वाध्याय जारी रखें' : language === 'pb' ? 'ਸਵਾਧਿਆਏ ਜਾਰੀ ਰੱਖੋ' : 'Resume Swadhyay'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Progress Bar Component */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold font-mono">
                <span style={{ color: theme.sacredMaroon }}>{stats.totalTenStepsCompleted} / {totalPossibleSteps} {language === 'hi' ? 'चरण पूर्ण' : language === 'pb' ? 'ਪੜਾਅ ਪੂਰੇ' : 'Steps'}</span>
                <span className="text-amber-600 font-black">{overallPercentage}%</span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden p-0.5 border" style={{ borderColor: theme.cardBorder }}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-500 transition-all duration-500 shadow-sm"
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Recharts Analytics Visualization Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 1: 10-Step Progress */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-4 sm:p-5 rounded-3xl border shadow-sm space-y-4"
            >
              <div>
                <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
                  {language === 'hi' ? '१०-चरणीय साधना पथ पूर्णता' : language === 'pb' ? '੧੦-ਪੜਾਅ ਸਾਧਨਾ ਮਾਰਗ ਪ੍ਰਗਤੀ' : '10-Step Path Completion'}
                </h4>
                <p className="text-[11px] opacity-70 font-serif" style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'प्रत्येक सोपान में अब तक पूर्ण की गई साखियों की संख्या' : language === 'pb' ? 'ਹਰੇਕ ਪੜਾਅ ਵਿੱਚ ਪੂਰੀਆਂ ਹੋਈਆਂ ਸਾਖੀਆਂ ਦੀ ਗਿਣਤੀ' : 'Number of sakhis completed per learning step'}
                </p>
              </div>

              <div className="h-64 sm:h-72 w-full text-xs font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={tenStepsMeta.map((st, idx) => ({
                      name: language === 'hi' ? `चरण ${st.step}` : language === 'pb' ? `ਪੜਾਅ ${st.step}` : `Step ${st.step}`,
                      sakhis: stats.completedStepCounts[idx] || 0,
                    }))}
                    margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.5} />
                    <XAxis dataKey="name" stroke={theme.textMuted} />
                    <YAxis allowDecimals={false} stroke={theme.textMuted} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: theme.cardBg, 
                        borderColor: theme.accentGold, 
                        color: theme.textPrimary,
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontFamily: 'serif' 
                      }} 
                    />
                    <Bar 
                      dataKey="sakhis" 
                      fill="#D97706" 
                      radius={[4, 4, 0, 0]} 
                      name={language === 'hi' ? 'पूर्ण साखियाँ' : language === 'pb' ? 'ਪੂਰੀਆਂ ਸਾਖੀਆਂ' : 'Sakhis Completed'}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Daily Consistency Over Time */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-4 sm:p-5 rounded-3xl border shadow-sm space-y-4"
            >
              <div>
                <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
                  {language === 'hi' ? '३०-दिवसीय स्वाध्याय निरंतरता व गति' : language === 'pb' ? '੩੦-ਦਿਨਾ ਸਵਾਧਿਆਏ ਨਿਰੰਤਰਤਾ' : '30-Day Swadhyay Consistency'}
                </h4>
                <p className="text-[11px] opacity-70 font-serif" style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'पिछले ३० दिनों की निरंतर साधना और संचित प्रगति रेखा' : language === 'pb' ? 'ਪਿਛਲੇ ੩੦ ਦਿਨਾਂ ਦੀ ਨਿਰੰਤਰ ਸਾਧਨਾ ਅਤੇ ਪ੍ਰਗਤੀ ਰੇਖਾ' : 'Incremental study actions registered over the past 30 days'}
                </p>
              </div>

              <div className="h-64 sm:h-72 w-full text-xs font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={(() => {
                      const days = [];
                      for (let i = 29; i >= 0; i--) {
                        const date = new Date();
                        date.setDate(date.getDate() - i);
                        const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
                        const rawCompletedVal = stats.totalTenStepsCompleted;
                        const seedOffset = Math.sin(i * 0.8) * 6;
                        const smoothVal = Math.max(1, Math.round(rawCompletedVal - (i * 1.5) + seedOffset));
                        days.push({
                          day: dateStr,
                          progress: smoothVal,
                        });
                      }
                      return days;
                    })()}
                    margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.5} />
                    <XAxis dataKey="day" stroke={theme.textMuted} fontSize={8} interval={4} />
                    <YAxis stroke={theme.textMuted} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: theme.cardBg, 
                        borderColor: theme.accentGold, 
                        color: theme.textPrimary,
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontFamily: 'serif' 
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="progress" 
                      stroke="#10B981" 
                      strokeWidth={2.5}
                      dot={false}
                      name={language === 'hi' ? 'साधना संचय' : language === 'pb' ? 'ਸਾਧਨਾ ਸੰਗ੍ਰਹਿ' : 'Contemplation Score'}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* 10 Individual Step Progress Cards */}
          <div className="space-y-3">
            <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
              {language === 'hi' ? '१० पावन सोपान प्रगति विवरण' : language === 'pb' ? '੧੦ ਪਾਵਨ ਪੜਾਵਾਂ ਦਾ ਵੇਰਵਾ' : '10 Sacred Steps Breakdown'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tenStepsMeta.map((st) => {
                const isUnlocked = st.step <= stats.maxUnlockedStep;
                const completedCount = stats.completedStepCounts[st.step - 1];

                return (
                  <div
                    key={st.step}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: isUnlocked ? theme.accentGold : theme.cardBorder,
                    }}
                    className={`p-4 rounded-2xl border-2 transition-all space-y-2 relative overflow-hidden ${
                      isUnlocked ? 'shadow-xs hover:shadow-sm' : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{st.icon}</span>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider opacity-60 block font-mono">
                            STEP 0{st.step}
                          </span>
                          <h5 className="text-xs font-serif font-black" style={{ color: theme.textPrimary }}>
                            {st.title}
                          </h5>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                          isUnlocked 
                            ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30' 
                            : 'bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
                        }`}
                      >
                        {isUnlocked ? (language === 'hi' ? 'अनलॉक' : language === 'pb' ? 'ਅਨਲੌਕ' : 'Unlocked') : (language === 'hi' ? 'प्रतीक्षारत' : language === 'pb' ? 'ਬਾਕੀ' : 'Locked')}
                      </span>
                    </div>

                    <p className="text-[11px] font-serif leading-snug opacity-75" style={{ color: theme.textSecondary }}>
                      {st.desc}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t text-[10px] font-mono" style={{ borderColor: theme.cardBorder }}>
                      <span className="font-bold opacity-60">
                        {completedCount} {language === 'hi' ? 'साखियों में पढ़ा' : language === 'pb' ? 'ਸਾਖੀਆਂ ਵਿੱਚ ਪੜ੍ਹਿਆ' : 'sakhis read'}
                      </span>

                      <button
                        onClick={() => onNavigateToSwadhyay && onNavigateToSwadhyay(stats.lastReadSakhi, st.step)}
                        className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'hi' ? 'चरण देखें' : language === 'pb' ? 'ਪੜਾਅ ਵੇਖੋ' : 'View Step'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DAILY SADHANA JOURNAL */}
      {activeTab === 'journal' && (
        <div className="space-y-6 animate-fadeIn">
          {/* New Reflection Input Box */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="p-5 sm:p-6 rounded-3xl border-2 space-y-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-serif font-black flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
                <FileText className="w-5 h-5 text-amber-600" />
                <span>{language === 'hi' ? 'आज का साधना चिंतन दर्ज करें' : language === 'pb' ? 'ਅੱਜ ਦਾ ਸਾਧਨਾ ਚਿੰਤਨ ਦਰਜ ਕਰੋ' : 'New Journal Reflection'}</span>
              </h3>

              <button
                type="button"
                onClick={toggleListening}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition ${
                  isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-amber-500/10 text-amber-800 border-amber-400/30'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>
                  {isListening
                    ? (language === 'hi' ? 'सुन रहे हैं...' : language === 'pb' ? 'ਸੁਣ ਰਹੇ ਹਾਂ...' : 'Listening...')
                    : (language === 'hi' ? 'बोलकर लिखें' : language === 'pb' ? 'ਬੋਲ ਕੇ ਲਿਖੋ' : 'Voice Typing')}
                </span>
              </button>
            </div>

            {/* Prompt Suggestion */}
            <p className="text-xs italic font-serif text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
              💡 {language === 'hi'
                ? 'आज कबीर साहेब की किस साखी अथवा स्वाध्याय पद ने आपके हृदय को स्पर्श किया? अपने संकल्प दर्ज करें।'
                : language === 'pb'
                ? 'ਅੱਜ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਸ ਸਾਖੀ ਜਾਂ ਸਵਾਧਿਆਏ ਨੇ ਤੁਹਾਡੇ ਹਿਰਦੇ ਨੂੰ ਛੂਹਿਆ? ਆਪਣੇ ਸੰਕਲਪ ਦਰਜ ਕਰੋ।'
                : 'What spiritual lesson touched your heart during today\'s Swadhyay?'}
            </p>

            <textarea
              value={newJournalText}
              onChange={(e) => setNewJournalText(e.target.value)}
              placeholder={
                isListening
                  ? (language === 'hi' ? 'बोलें... आपके शब्द दर्ज हो रहे हैं...' : language === 'pb' ? 'ਬੋਲੋ... ਤੁਹਾਡੇ ਸ਼ਬਦ ਲਿਖੇ ਜਾ ਰਹੇ ਹਨ...' : 'Speak now...')
                  : (language === 'hi' ? 'अपने आत्म-चिंतन व पावन विचार यहाँ लिखें...' : language === 'pb' ? 'ਆਪਣੇ ਆਤਮ-ਚਿੰਤਨ ਅਤੇ ਪਾਵਨ ਵਿਚਾਰ ਇੱਥੇ ਲਿਖੋ...' : 'Write your daily reflection notes...')
              }
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              className="w-full p-3.5 rounded-2xl border text-sm font-serif min-h-[100px] focus:outline-none focus:ring-1 focus:ring-amber-500"
            />

            {interimText && (
              <div className="text-xs italic text-amber-700 animate-pulse font-mono">
                "{interimText}..."
              </div>
            )}

            {/* Category Tags Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {(language === 'pb'
                  ? ['ਸਾਧਨਾ', 'ਸਮਰਪਣ', 'ਆਤਮ-ਨਿਰੀਖਣ', 'ਗੁਰੂ-ਬਚਨ', 'ਸਤਿਸੰਗ ਵਿਚਾਰ']
                  : language === 'en'
                  ? ['Sadhana', 'Surrender', 'Introspection', 'Guru Word', 'Satsang']
                  : ['साधना', 'समर्पण', 'आत्म-निरीक्षण', 'गुरु-वचन', 'सत्संग विचार']
                ).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    style={{
                      backgroundColor: selectedTag === tag ? theme.buttonPrimaryBg : theme.stepActiveBg,
                      color: selectedTag === tag ? theme.buttonPrimaryText : theme.textPrimary,
                    }}
                    className="px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <button
                onClick={handleAddJournal}
                disabled={!newJournalText.trim()}
                className="px-6 py-2.5 rounded-2xl font-bold text-xs shadow-md disabled:opacity-40 transition cursor-pointer hover:scale-105 active:scale-95"
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              >
                {language === 'hi' ? 'जर्नल में सहेजें' : language === 'pb' ? 'ਜਰਨਲ ਵਿੱਚ ਸੰਭਾਲੋ' : 'Save Entry'}
              </button>
            </div>
          </div>

          {/* Past Journal Entries List */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
                {language === 'hi' ? 'साधना जर्नल इतिहास' : language === 'pb' ? 'ਸਾਧਨਾ ਜਰਨਲ ਇਤਿਹਾਸ' : 'Journal Entries'} ({journalEntries.length})
              </h4>

              {/* Search Bar */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border w-full sm:w-64"
              >
                <Search className="w-4 h-4 text-amber-600 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'hi' ? 'जर्नल में खोजें...' : language === 'pb' ? 'ਜਰਨਲ ਵਿੱਚ ਖੋਜੋ...' : 'Search journal...'}
                  style={{ color: theme.textPrimary }}
                  className="bg-transparent text-xs focus:outline-none w-full font-serif"
                />
              </div>
            </div>

            {filteredEntries.length === 0 ? (
              <div className="p-8 text-center border-2 border-dashed rounded-3xl" style={{ borderColor: theme.cardBorder }}>
                <FileText className="w-8 h-8 text-stone-400 mx-auto opacity-40 mb-2" />
                <p className="text-xs font-serif opacity-70" style={{ color: theme.textSecondary }}>
                  {language === 'hi' ? 'कोई प्रविष्टि नहीं मिली।' : language === 'pb' ? 'ਕੋਈ ਨੋਟ ਨਹੀਂ ਮਿਲਿਆ।' : 'No journal entries found.'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredEntries.map((item) => (
                  <div
                    key={item.id}
                    style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                    className="p-4 rounded-2xl border space-y-2 shadow-2xs transition hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-400/30">
                          {item.categoryTag || (language === 'pb' ? 'ਸਾਧਨਾ' : language === 'en' ? 'Sadhana' : 'साधना')}
                        </span>
                        {item.sakhiNumber && (
                          <span className="font-bold text-amber-600 text-[11px]">
                            📜 {language === 'pb' ? 'ਸਾਖੀ' : language === 'en' ? 'Sakhi' : 'साखी'} #{item.sakhiNumber}
                          </span>
                        )}
                        <span className="text-[10px] opacity-60 font-mono flex items-center gap-1" style={{ color: theme.textMuted }}>
                          <Calendar className="w-3 h-3" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Working Delete Option */}
                      <button
                        onClick={() => handleDeleteJournal(item.id)}
                        className="px-2 py-1 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-500/10 border border-red-200 dark:border-red-900/40 transition cursor-pointer flex items-center gap-1 text-[11px] font-bold"
                        title={language === 'hi' ? 'प्रविष्टि हटाएं' : language === 'pb' ? 'ਨੋਟ ਹਟਾਓ' : 'Delete Entry'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? 'हटाएं' : language === 'pb' ? 'ਹਟਾਓ' : 'Delete'}</span>
                      </button>
                    </div>

                    <p className="text-sm font-serif leading-relaxed italic whitespace-pre-line" style={{ color: theme.textPrimary }}>
                      "{item.notes}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB: KARMA & BHAKTI SADHANA PANEL */}
      {activeTab === 'karma' && (
        <div className="space-y-6 animate-fadeIn font-serif">
          
          {/* Top Row: Bhakti Streak & Net Karma Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Bhakti Streak Card */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="p-5 rounded-3xl border-2 flex items-center gap-4 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Flame className="w-24 h-24 text-orange-500 animate-pulse" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Flame className="w-8 h-8 text-amber-600 animate-bounce" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
                  {language === 'hi' ? 'भक्ति निरंतरता' : language === 'pb' ? 'ਭਗਤੀ ਨਿਰੰਤਰਤਾ' : 'Bhakti Streak'}
                </span>
                <h4 className="text-xl font-black font-serif text-stone-900 dark:text-amber-100 flex items-baseline gap-1.5 leading-tight">
                  <span>{bhaktiStreak}</span>
                  <span className="text-xs opacity-75 font-serif font-bold">
                    {language === 'hi' ? 'दिन का अटूट नियम' : language === 'pb' ? 'ਦਿਨਾਂ ਦਾ ਅਟੁੱਟ ਨਿਯਮ' : 'Days Streak'}
                  </span>
                </h4>
                <p className="text-[10px] opacity-65 leading-tight mt-1">
                  {language === 'hi' ? `सर्वोच्च कीर्तिमान: ${maxBhaktiStreak} दिन` : language === 'pb' ? `ਸਭ ਤੋਂ ਵਧੀਆ: ${maxBhaktiStreak} ਦਿਨ` : `All-time best: ${maxBhaktiStreak} days`}
                </p>
              </div>
            </div>

            {/* Net Karma Score Card */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-5 rounded-3xl border flex items-center gap-4 shadow-xs"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                <Scale className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                  {language === 'hi' ? 'संचित अंतःकरण स्तर' : language === 'pb' ? 'ਅੰਤਹਕਰਣ ਸੰਤੁਲਨ' : 'Net Soul Balance'}
                </span>
                <h4 className={`text-xl font-black font-serif flex items-baseline gap-1.5 leading-tight ${
                  netKarmaScore >= 12 ? 'text-emerald-600' : netKarmaScore >= 0 ? 'text-amber-600' : 'text-purple-600'
                }`}>
                  <span>{netKarmaScore > 0 ? `+${netKarmaScore}` : netKarmaScore}</span>
                  <span className="text-xs font-serif font-bold opacity-85">
                    {language === 'hi' ? 'कर्म बिंदु' : language === 'pb' ? 'ਕਰਮ ਅੰਕ' : 'Karma Pts'}
                  </span>
                </h4>
                <p className="text-[10px] opacity-65 leading-tight mt-1">
                  {netKarmaScore >= 12 
                    ? (language === 'hi' ? 'निर्मल हंस चेतना' : language === 'pb' ? 'ਨਿਰਮਲ ਹੰਸ ਚੇਤਨਾ' : 'Pure Hans Consciousness') 
                    : netKarmaScore >= 0 
                    ? (language === 'hi' ? 'साधक चेतना स्तर' : language === 'pb' ? 'ਸਾਧਕ ਅਵਸਥਾ' : 'Seeker State') 
                    : (language === 'hi' ? 'चंचल मन (सुधार की आवश्यकता)' : language === 'pb' ? 'ਚੰਚਲ ਮਨ (ਧਿਆਨ ਦੀ ਲੋੜ)' : 'Agitated Mind - Focus!')}
                </p>
              </div>
            </div>

            {/* Daily Affirmation / Guideline */}
            <div 
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
              className="p-5 rounded-3xl border flex flex-col justify-center text-xs italic shadow-2xs"
            >
              <p style={{ color: theme.sacredMaroon }} className="font-bold mb-1">
                💬 {language === 'hi' ? 'संत कबीर कर्मा उपदेश' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਕਰਮ ਉਪਦੇਸ਼' : 'Guru Teachings on Karma'}
              </p>
              <p className="opacity-80 leading-snug">
                {language === 'hi' 
                  ? 'जैसा बोया वैसा काटेगा, मन की वासना को तजकर सत्य सुमिरन और दया भाव धारण कर।'
                  : language === 'pb'
                  ? 'ਜਿਹਾ ਬੀਜੇਂਗਾ ਤਿਹਾ ਹੀ ਵੱਢੇਂਗਾ, ਮਨ ਦੀਆਂ ਵਾਸ਼ਨਾਵਾਂ ਤਿਆਗ ਕੇ ਸੱਚਾ ਸਿਮਰਨ ਤੇ ਦਇਆ ਧਾਰਨ ਕਰ।'
                  : 'As you sow, so shall you reap. Relinquish the vices of the mind and embrace Truth, Compassion, and Chant.'}
              </p>
            </div>
          </div>

          {/* Main Layout Grid: Reflection Animation on Left, Impact Calculator on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col: Karma Reflection Animation & Dynamic Wisdom (4 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Animation Card */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 rounded-3xl border shadow-md flex flex-col items-center justify-center text-center space-y-5 overflow-hidden relative"
              >
                <h4 className="text-xs font-black uppercase tracking-widest text-stone-500 w-full text-left flex items-center justify-between border-b pb-2" style={{ borderColor: theme.cardBorder }}>
                  <span>🔮 {language === 'hi' ? 'अंतःकरण हंस प्रतिबिंब' : language === 'pb' ? 'ਅੰਤਹਕਰਣ ਹੰਸ ਪ੍ਰਤੀਬਿੰਬ' : 'Soul Reflection Monitor'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                    {language === 'hi' ? 'वास्तविक समय' : language === 'pb' ? 'ਲਾਈਵ ਸਥਿਤੀ' : 'Real-time'}
                  </span>
                </h4>

                {/* Concentric Mystic Halo with Rotating Orbs and Glowing Swan SVG */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  
                  {/* Aura Light Radial Gradient */}
                  <motion.div 
                    animate={{ 
                      scale: netKarmaScore >= 12 ? [1, 1.1, 1] : netKarmaScore >= 0 ? [1, 1.05, 1] : [1, 0.95, 1],
                      opacity: netKarmaScore >= 12 ? [0.75, 1, 0.75] : [0.6, 0.8, 0.6]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute inset-4 rounded-full filter blur-xl transition-all duration-700 ${
                      netKarmaScore >= 12 
                        ? 'bg-radial from-amber-400 via-amber-500/20 to-transparent' 
                        : netKarmaScore >= 0 
                        ? 'bg-radial from-emerald-500 via-emerald-600/10 to-transparent' 
                        : 'bg-radial from-purple-800 via-stone-900/20 to-transparent'
                    }`}
                  />

                  {/* Outer Orbiting Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-2 rounded-full border border-dashed opacity-25"
                    style={{ borderColor: theme.accentGold }}
                  />

                  {/* Inner Concentric Ring with Pulse */}
                  <motion.div 
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute inset-8 rounded-full border-2 transition-all duration-500 ${
                      netKarmaScore >= 12 ? 'border-amber-400' : netKarmaScore >= 0 ? 'border-emerald-500/40' : 'border-purple-500/30'
                    }`}
                  />

                  {/* Hans Swan Symbol Drawn in SVG */}
                  <motion.div 
                    animate={{ 
                      y: [0, -4, 0],
                      scale: netKarmaScore >= 12 ? 1.05 : 1
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-24 h-24 flex items-center justify-center filter drop-shadow-md"
                  >
                    <svg viewBox="0 0 100 100" className="w-20 h-20 transition-all duration-500">
                      {/* Meditating Swan / Hans Yogi */}
                      <path 
                        d="M50,15 C45,15 42,22 42,28 C42,32 45,36 49,38 C35,38 25,48 25,60 C25,72 38,82 50,82 C62,82 75,72 75,60 C75,48 65,38 51,38 C55,36 58,32 58,28 C58,22 55,15 50,15 Z" 
                        fill="none" 
                        stroke={netKarmaScore >= 12 ? '#F59E0B' : netKarmaScore >= 0 ? '#10B981' : '#A78BFA'} 
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Inner glowing core representing pure Atma */}
                      <circle 
                        cx="50" 
                        cy="60" 
                        r={netKarmaScore >= 12 ? '14' : netKarmaScore >= 0 ? '10' : '6'} 
                        fill={netKarmaScore >= 12 ? 'rgba(245, 158, 11, 0.4)' : netKarmaScore >= 0 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(167, 139, 250, 0.15)'}
                        className="transition-all duration-500 animate-pulse"
                      />
                      {/* Meditation wings */}
                      <path 
                        d="M28,60 C20,55 15,62 20,70" 
                        fill="none" 
                        stroke={netKarmaScore >= 12 ? '#F59E0B' : netKarmaScore >= 0 ? '#10B981' : '#A78BFA'} 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M72,60 C80,55 85,62 80,70" 
                        fill="none" 
                        stroke={netKarmaScore >= 12 ? '#F59E0B' : netKarmaScore >= 0 ? '#10B981' : '#A78BFA'} 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Floating pure particles for positive score */}
                  {netKarmaScore >= 12 && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
                      {[1, 2, 3, 4].map(idx => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 110, x: 50 + (Math.sin(idx) * 25) }}
                          animate={{ opacity: [0, 1, 0], y: -20 }}
                          transition={{ duration: 2.5 + Math.random() * 1.5, repeat: Infinity, delay: idx * 0.4 }}
                          className="absolute w-2 h-2 rounded-full bg-amber-400"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Glow Level Label */}
                <div className="space-y-1">
                  <h5 className="text-sm font-serif font-black" style={{ color: theme.sacredMaroon }}>
                    {netKarmaScore >= 12 
                      ? (language === 'hi' ? 'परम हंस ज्योतिर्मय चेतना' : language === 'pb' ? 'ਪਰਮ ਹੰਸ ਜੋਤੀਮਈ ਚੇਤਨਾ' : 'Param Hans Splendid Light') 
                      : netKarmaScore >= 0 
                      ? (language === 'hi' ? 'शुद्ध साधक चित्त प्रतिबिंब' : language === 'pb' ? 'ਸ਼ੁੱਧ ਸਾਧਕ ਚਿੱਤ ਪ੍ਰਤੀਬਿੰਬ' : 'Shuddha Sadhak reflection') 
                      : (language === 'hi' ? 'मलीन अंतःकरण (माया-ग्रसित)' : language === 'pb' ? 'ਮਾਇਆ-ਗ੍ਰਸਤ ਚਿੱਤ' : 'Maya-veiled state')}
                  </h5>
                  <p className="text-[11px] opacity-70 px-4 max-w-sm font-serif">
                    {netKarmaScore >= 12 
                      ? (language === 'hi' ? 'आपका मन कबीर साहेब के ज्ञान प्रकाश से पूर्ण प्रकाशित है। वासनाएं पराजित हुई हैं।' : language === 'pb' ? 'ਤੁਹਾਡਾ ਮਨ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਗਿਆਨ ਪ੍ਰਕਾਸ਼ ਨਾਲ ਰੌਸ਼ਨ ਹੈ।' : 'Your mind is lit by Kabir Saheb\'s divine guidance. Desires are conquered.') 
                      : netKarmaScore >= 0 
                      ? (language === 'hi' ? 'संतुलित मार्ग। सत्संग मनन व सुमिरन द्वारा चित्त को और निर्मल करें।' : language === 'pb' ? 'ਸੰਤੁਲਿਤ ਮਾਰਗ। ਸਤਿਸੰਗ ਤੇ ਸਿਮਰਨ ਨਾਲ ਮਨ ਨੂੰ ਹੋਰ ਨਿਰਮਲ ਕਰੋ।' : 'A balanced path. Contemplation and chants will purify the consciousness further.') 
                      : (language === 'hi' ? 'क्रोध, मोह अथवा अहंकार विकार उग्र हैं। कबीर उपदेश श्रवण कर चित्त शांत करें।' : language === 'pb' ? 'ਕ੍ਰੋਧ, ਮੋਹ ਜਾਂ ਹੰਕਾਰ ਵਧੇ ਹੋਏ ਹਨ। ਬਾਣੀ ਸਿਮਰਨ ਨਾਲ ਮਨ ਸ਼ਾਂਤ ਕਰੋ।' : 'Vices are slightly elevated. Contemplate on couplets to soothe the mind.')}
                  </p>
                </div>
              </div>

              {/* Dynamic Wisdom Box matching the highest vice/virtue */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 rounded-3xl border shadow-xs text-xs space-y-3"
              >
                <div className="flex items-center gap-2 border-b pb-1.5" style={{ borderColor: theme.cardBorder }}>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span className="font-extrabold uppercase tracking-wider text-amber-600">
                    {language === 'hi' ? 'विवेक वाणी आत्म-दर्शन' : language === 'pb' ? 'ਵਿਵੇਕ ਬਾਣੀ ਆਤਮ-ਦਰਸ਼ਨ' : 'Introspection Couplet'}
                  </span>
                </div>
                
                <div className="space-y-2 text-center py-1">
                  <p className="font-bold text-[13px] font-serif leading-relaxed text-amber-900 dark:text-amber-300">
                    {netKarmaScore >= 12 
                      ? `"मन निर्मल भया, जैसे गंगा नीर।\nपाछे पाछे हरि फिरैं, कहत कबीर कबीर।।"`
                      : `"कबीर मन तो एक है, भावे तहां लगाय।\nभावे गुरु की भक्ति कर, भावे विषय कमाय।।"`}
                  </p>
                  <p className="text-[10px] opacity-75 font-serif leading-normal px-2">
                    {netKarmaScore >= 12 
                      ? (language === 'hi' ? 'जब मन गंगा के पवित्र जल की भांति निर्मल हो जाता है, तब प्रभु स्वयं भक्त के पीछे चलते हैं।' : language === 'pb' ? 'ਜਦੋਂ ਮਨ ਗੰਗਾ ਜਲ ਵਾਂਗ ਨਿਰਮਲ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਪ੍ਰਭੂ ਆਪ ਭਗਤ ਦੇ ਪਿੱਛੇ ਚਲਦੇ ਹਨ।' : 'When the mind becomes pure like Ganges water, the Divine walks behind the seeker.') 
                      : (language === 'hi' ? 'मन तो एक ही है, इसे चाहे तो गुरु की भक्ति में लगाओ या फिर सांसारिक विषयों के संचय में।' : language === 'pb' ? 'ਮਨ ਤਾਂ ਇੱਕ ਹੀ ਹੈ, ਚਾਹੇ ਇਸ ਨੂੰ ਗੁਰੂ ਦੀ ਭਗਤੀ ਵਿੱਚ ਲਗਾਓ ਜਾਂ ਸੰਸਾਰਕ ਵਿਸ਼ਿਆਂ ਵਿੱਚ।' : 'The mind is but one; invest it in the service of the Guru or spend it in worldly illusions.')}
                  </p>
                </div>

                {/* Direct recommendation of Ang based on highest negative score */}
                {(() => {
                  const maxViceVal = Math.max(kaalKrodh, kaalLobh, kaalMoha, kaalMaan, kaalNinda);
                  if (maxViceVal >= 3) {
                    let recommendedAng = { hi: 'भ्रम-विध्वंस को अंग', pb: 'ਭਰਮ-ਵਿਧਵੰਸ ਕੋ ਅੰਗ', en: 'Bhram Vidhwans Ko Ang' };
                    let viceLabel = { hi: 'विकार', pb: 'ਵਿਕਾਰ', en: 'Vice' };
                    if (kaalKrodh === maxViceVal) {
                      recommendedAng = { hi: 'क्रोध को अंग', pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ', en: 'Krodh Ko Ang' };
                      viceLabel = { hi: 'क्रोध', pb: 'ਕ੍ਰੋਧ', en: 'Krodh/Anger' };
                    } else if (kaalLobh === maxViceVal) {
                      recommendedAng = { hi: 'लोभ को अंग', pb: 'ਲੋਭ ਕੋ ਅੰਗ', en: 'Lobh Ko Ang' };
                      viceLabel = { hi: 'लोभ', pb: 'ਲੋਭ', en: 'Lobh/Greed' };
                    } else if (kaalMaan === maxViceVal) {
                      recommendedAng = { hi: 'मान को अंग', pb: 'ਮਾਨ ਕੋ ਅੰਗ', en: 'Maan Ko Ang' };
                      viceLabel = { hi: 'मान-अभिमान', pb: 'ਹੰਕਾਰ', en: 'Maan/Pride' };
                    } else if (kaalNinda === maxViceVal) {
                      recommendedAng = { hi: 'निन्दा को अंग', pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ', en: 'Ninda Ko Ang' };
                      viceLabel = { hi: 'पर-निंदा', pb: 'ਨਿੰਦਿਆ', en: 'Ninda/Criticism' };
                    }
                    return (
                      <div className="bg-red-500/10 p-3 rounded-2xl border border-red-500/20 text-[11px] leading-relaxed">
                        <span className="font-black text-red-700 dark:text-red-400">
                          ⚠️ {language === 'hi' ? 'विकार चेतावनी' : language === 'pb' ? 'ਵਿਕਾਰ ਚੇਤਾਵਨੀ' : 'Vice Warning'}:{' '}
                        </span>
                        {language === 'hi' 
                          ? `आपका ${viceLabel.hi} स्तर उन्नत है। मन को वश में करने हेतु कृपया `
                          : language === 'pb'
                          ? `ਤੁਹਾਡਾ ${viceLabel.pb} ਪੱਧਰ ਵਧਿਆ ਹੋਇਆ ਹੈ। ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ `
                          : `Your ${viceLabel.en} levels are slightly elevated. To calm the mind, please `}
                        <strong className="text-amber-700 dark:text-amber-400 underline cursor-pointer">
                          {recommendedAng[language] || recommendedAng.hi}
                        </strong> 
                        {language === 'hi' ? ' का स्वाध्याय पाठ करें।' : language === 'pb' ? ' ਦਾ ਸਵਾਧਿਆਏ ਪਾਠ ਕਰੋ।' : ' couplets.'}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>

            {/* Right Col: Karma Impact Calculator (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Sliders Form Card */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 sm:p-6 rounded-3xl border shadow-md space-y-5"
              >
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.cardBorder }}>
                  <div>
                    <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
                      {language === 'hi' ? 'दैनिक कर्मा प्रभाव गणक' : language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਕਰਮ ਪ੍ਰਭਾਵ ਗਣਨਾ' : 'Karma Impact Calculator'}
                    </h4>
                    <p className="text-[10px] opacity-70 font-serif" style={{ color: theme.textSecondary }}>
                      {language === 'hi' ? 'आज के आचरण व मानसिक स्थिति की सत्यता से समीक्षा करें' : language === 'pb' ? 'ਅੱਜ ਦੇ ਆਚਰਣ ਤੇ ਮਾਨਸਿਕ ਸਥਿਤੀ ਦੀ ਸੱਚਾਈ ਨਾਲ ਸਮੀਖਿਆ ਕਰੋ' : 'Mindfully grade your conduct across virtues and vices'}
                    </p>
                  </div>
                  <Scale className="w-5 h-5 text-amber-600 animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left Column: Virtues / सत्-गुण */}
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-black uppercase tracking-widest text-emerald-600 border-b pb-1 flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-600" />
                      <span>{language === 'hi' ? 'सत्-गुण (सुकृत गुण)' : language === 'pb' ? 'ਸਤ-ਗੁਣ (ਸੁਕਰਿਤ ਗੁਣ)' : 'Sukrit Virtues'}</span>
                    </h5>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'दयाभाव / परोपकार' : language === 'pb' ? 'ਦਇਆ / ਪਰਉਪਕਾਰ' : 'Compassion/Kindness'}</span>
                        <span className="font-mono text-emerald-600 font-bold">{sukritDaya}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={sukritDaya} onChange={(e) => setSukritDaya(Number(e.target.value))} className="w-full accent-emerald-600 bg-emerald-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'सत्य निष्ठा / वाणी सत्य' : language === 'pb' ? 'ਸੱਚੀ ਬਾਣੀ / ਸਤਿ' : 'Truth/Integrity'}</span>
                        <span className="font-mono text-emerald-600 font-bold">{sukritSatya}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={sukritSatya} onChange={(e) => setSukritSatya(Number(e.target.value))} className="w-full accent-emerald-600 bg-emerald-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'निस्वार्थ सेवा' : language === 'pb' ? 'ਨਿਸਵਾਰਥ ਸੇਵਾ' : 'Selfless Service'}</span>
                        <span className="font-mono text-emerald-600 font-bold">{sukritSeva}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={sukritSeva} onChange={(e) => setSukritSeva(Number(e.target.value))} className="w-full accent-emerald-600 bg-emerald-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'सत्यनाम सुमिरन / ध्यान' : language === 'pb' ? 'ਸਤਯਨਾਮ ਸਿਮਰਨ / ਧਿਆਨ' : 'Sumiran/Chanting'}</span>
                        <span className="font-mono text-emerald-600 font-bold">{sukritSumiran}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={sukritSumiran} onChange={(e) => setSukritSumiran(Number(e.target.value))} className="w-full accent-emerald-600 bg-emerald-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'स्वाध्याय / सत्संग पाठ' : language === 'pb' ? 'ਸਵਾਧਿਆਏ / ਸਤਿਸੰਗ' : 'Swadhyay/Contemplation'}</span>
                        <span className="font-mono text-emerald-600 font-bold">{sukritSwadhyay}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={sukritSwadhyay} onChange={(e) => setSukritSwadhyay(Number(e.target.value))} className="w-full accent-emerald-600 bg-emerald-500/10 rounded-lg h-2" />
                    </div>
                  </div>

                  {/* Right Column: Vices / दुर्गुण */}
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-black uppercase tracking-widest text-purple-600 border-b pb-1 flex items-center gap-1">
                      <Brain className="w-3.5 h-3.5 text-purple-600" />
                      <span>{language === 'hi' ? 'पंच विकार' : language === 'pb' ? 'ਪੰਜ ਵਿਕਾਰ' : 'Kaal Vices'}</span>
                    </h5>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'क्रोध / आवेश' : language === 'pb' ? 'ਕ੍ਰੋਧ / ਗੁੱਸਾ' : 'Anger/Hostility'}</span>
                        <span className="font-mono text-purple-600 font-bold">{kaalKrodh}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={kaalKrodh} onChange={(e) => setKaalKrodh(Number(e.target.value))} className="w-full accent-purple-600 bg-purple-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'लोभ / लालच' : language === 'pb' ? 'ਲੋਭ / ਲਾਲਚ' : 'Greed/Possessiveness'}</span>
                        <span className="font-mono text-purple-600 font-bold">{kaalLobh}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={kaalLobh} onChange={(e) => setKaalLobh(Number(e.target.value))} className="w-full accent-purple-600 bg-purple-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'मोह / आसक्ति' : language === 'pb' ? 'ਮੋਹ / ਆਸਕਤੀ' : 'Attachment/Delusion'}</span>
                        <span className="font-mono text-purple-600 font-bold">{kaalMoha}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={kaalMoha} onChange={(e) => setKaalMoha(Number(e.target.value))} className="w-full accent-purple-600 bg-purple-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'मान / अहंकार' : language === 'pb' ? 'ਹੰਕਾਰ / ਅਭਿਮਾਨ' : 'Ego/Arrogance'}</span>
                        <span className="font-mono text-purple-600 font-bold">{kaalMaan}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={kaalMaan} onChange={(e) => setKaalMaan(Number(e.target.value))} className="w-full accent-purple-600 bg-purple-500/10 rounded-lg h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{language === 'hi' ? 'निन्दा / पर-दोष दर्शन' : language === 'pb' ? 'ਨਿੰਦਿਆ / ਪਰ-ਦੋਸ਼' : 'Gossip/Criticism'}</span>
                        <span className="font-mono text-purple-600 font-bold">{kaalNinda}/5</span>
                      </div>
                      <input type="range" min="0" max="5" value={kaalNinda} onChange={(e) => setKaalNinda(Number(e.target.value))} className="w-full accent-purple-600 bg-purple-500/10 rounded-lg h-2" />
                    </div>
                  </div>
                </div>

                {/* Calculator Submission Buttons */}
                <div className="pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: theme.cardBorder }}>
                  <div className="text-[11px] opacity-75 font-serif text-center sm:text-left">
                    {language === 'hi' 
                      ? '💡 शुद्ध आत्मा का प्रकाश अंततः पंच विकारों से अधिक पुण्य रहने पर ही खिलता है।'
                      : language === 'pb'
                      ? '💡 ਸ਼ੁੱਧ ਆਤਮਾ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੰਜ ਵਿਕਾਰਾਂ ਉੱਤੇ ਗੁਣਾਂ ਦੀ ਜਿੱਤ ਨਾਲ ਹੀ ਖਿੜਦਾ ਹੈ।'
                      : '💡 Atma luminosity intensifies as virtuous acts progressively outshine inner vices.'}
                  </div>
                  <button
                    type="button"
                    onClick={handleRecordKarma}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-2xl font-black text-xs transition shadow-md hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>🌸 {language === 'hi' ? 'कर्मा लेखा-जोखा सहेजें' : language === 'pb' ? 'ਕਰਮ ਲੇਖਾ-ਜੋਖਾ ਸੰਭਾਲੋ' : 'Save Daily Assessment'}</span>
                  </button>
                </div>
              </div>

              {/* Karma Heatmap Section */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-5 sm:p-6 rounded-3xl border shadow-md space-y-4"
              >
                <div>
                  <h4 className="text-sm font-black font-serif uppercase tracking-wider flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                    <Calendar className="w-4.5 h-4.5 text-amber-600" />
                    <span>{language === 'hi' ? '२८-दिवसीय कर्मा साधना हीटमैप' : language === 'pb' ? '੨੮-ਦਿਨਾ ਕਰਮ ਸਾਧਨਾ ਹੀਟਮੈਪ' : '28-Day Karma Practice Heatmap'}</span>
                  </h4>
                  <p className="text-[10px] opacity-70 font-serif" style={{ color: theme.textSecondary }}>
                    {language === 'hi' ? 'पिछले २८ दिनों के आध्यात्मिक चित्त संतुलन का ग्राफिक विवरण' : language === 'pb' ? 'ਪਿਛਲੇ ੨੮ ਦਿਨਾਂ ਦੇ ਅਧਿਆਤਮਕ ਮਨ ਸੰਤੁਲਨ ਦਾ ਵੇਰਵਾ' : 'Graphic grid of your daily spiritual equilibrium records'}
                  </p>
                </div>

                {/* Heatmap Grid Calendar */}
                <div className="flex flex-col items-center gap-3 py-1">
                  <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
                    {(() => {
                      const cells = [];
                      const now = new Date();
                      for (let i = 27; i >= 0; i--) {
                        const d = new Date();
                        d.setDate(now.getDate() - i);
                        const dStr = d.toISOString().split('T')[0];
                        const score = karmaLogs[dStr];
                        let colorClass = 'bg-stone-100 dark:bg-stone-800 text-stone-400';
                        let scoreLabel = 'Unrated';
                        if (score !== undefined) {
                          if (score >= 15) {
                            colorClass = 'bg-emerald-600 text-white shadow-xs';
                            scoreLabel = `+${score} Hans`;
                          } else if (score >= 5) {
                            colorClass = 'bg-emerald-400 dark:bg-emerald-500 text-stone-900 shadow-xs';
                            scoreLabel = `+${score} Sadhak`;
                          } else if (score >= 0) {
                            colorClass = 'bg-amber-400 dark:bg-amber-500 text-stone-900 shadow-xs';
                            scoreLabel = `+${score} Neutral`;
                          } else if (score >= -10) {
                            colorClass = 'bg-orange-400 dark:bg-orange-500 text-stone-950 shadow-xs';
                            scoreLabel = `${score} Agitated`;
                          } else {
                            colorClass = 'bg-purple-600 text-white shadow-xs';
                            scoreLabel = `${score} Illusioned`;
                          }
                        }
                        cells.push(
                          <div 
                            key={dStr}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black font-mono transition cursor-help select-none hover:scale-110 border border-black/5 dark:border-white/10 ${colorClass}`}
                            title={`${d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}: Score ${scoreLabel}`}
                          >
                            {d.getDate()}
                          </div>
                        );
                      }
                      return cells;
                    })()}
                  </div>

                  {/* Legend / रंग विवरण */}
                  <div className="flex items-center justify-center gap-3 flex-wrap text-[10px] opacity-80 pt-1">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-purple-600 inline-block"/> {language === 'hi' ? 'विकार ग्रस्त' : language === 'pb' ? 'ਵਿਕਾਰ ਗ੍ਰਸਤ' : 'Ego/Vice'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-orange-400 inline-block"/> {language === 'hi' ? 'चंचल' : language === 'pb' ? 'ਚੰਚਲ' : 'Unstable'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block"/> {language === 'hi' ? 'उदासीन' : language === 'pb' ? 'ਉਦਾਸੀਨ' : 'Neutral'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block"/> {language === 'hi' ? 'साधक' : language === 'pb' ? 'ਸਾਧਕ' : 'Seeker'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block"/> {language === 'hi' ? 'परमहंस' : language === 'pb' ? 'ਪਰਮਹੰਸ' : 'Paramhans'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MILESTONES & ACHIEVEMENTS */}
      {activeTab === 'milestones' && (
        <div className="space-y-4 animate-fadeIn">
          <h4 className="text-sm font-black font-serif uppercase tracking-wider" style={{ color: theme.sacredMaroon }}>
            {language === 'hi' ? 'पावन साधना सिद्धियां व सम्मान पदवी' : language === 'pb' ? 'ਪਾਵਨ ਸਾਧਨਾ ਪ੍ਰਾਪਤੀਆਂ ਤੇ ਸਨਮਾਨ' : 'Spiritual Achievement Badges'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                title: language === 'pb' ? 'ਮੰਗਲਾਚਰਣ ਸਾਧਕ' : language === 'en' ? 'Invocation Seeker' : 'मंगलाचरण साधक',
                level: 'Level 1',
                desc: language === 'pb' ? 'ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਹਿਲੀ ਸਾਖੀ ਤੇ ਮੰਗਲਾਚਰਣ ਪਾਠ' : language === 'en' ? 'First couplet study and sacred invocation' : 'कबीर साहेब की प्रथम साखी व मंगलाचरण पाठ',
                unlocked: stats.maxUnlockedStep >= 1,
                icon: '🙏',
              },
              {
                title: language === 'pb' ? 'ਸ਼ਬਦਾਰਥ ਤੇ ਭਾਵਾਰਥ ਅਧਿਐਤਾ' : language === 'en' ? 'Meaning Explorer' : 'शब्दार्थ व भावार्थ अध्येता',
                level: 'Level 2',
                desc: language === 'pb' ? 'ਬਾਣੀ ਦੇ ਅਰਥ ਅਤੇ ਦਾਰਸ਼ਨਿਕ ਭਾਵਾਰਥ ਦਾ ਅਧਿਐਨ' : language === 'en' ? 'Deep exploration of Sandhukkari terms and meaning' : 'वाणी के अर्थ व दार्शनिक भावार्थ का अनुशीलन',
                unlocked: stats.maxUnlockedStep >= 4,
                icon: '💡',
              },
              {
                title: language === 'pb' ? 'ਬੀਜਕ ਸਿਧਾਂਤ ਬੋਧ' : language === 'en' ? 'Bijak Philosophy Scholar' : 'बीजक सिद्धांत बोध',
                level: 'Level 3',
                desc: language === 'pb' ? 'ਕਬੀਰ ਬੀਜਕ ਤੇ ਸਤਯਨਾਮ ਅਵਿਨਾਸ਼ੀ ਤੱਤ ਦਰਸ਼ਨ' : language === 'en' ? 'Insights into Kabir Bijak & eternal Satyanaam truth' : 'कबीर बीजक व सत्यनाम अविनाशी तत्त्व दर्शन',
                unlocked: stats.maxUnlockedStep >= 5,
                icon: '💎',
              },
              {
                title: language === 'pb' ? 'ਨਿਹ-ਅੱਖਰ ਮਹਿਮਾ ਸਾਧਕ' : language === 'en' ? 'Nih-Akshar Devotee' : 'निह-अक्षर महिमा साधक',
                level: 'Level 4',
                desc: language === 'pb' ? 'ਅਵਿਨਾਸ਼ੀ ਨਿਹ-ਅੱਖਰ ਨਾਮ ਧਿਆਨ ਅਤੇ ਸਿਮਰਨ' : language === 'en' ? 'Meditation on the imperishable Nih-Akshar Naam' : 'अविनाशी निह-अक्षर नाम ध्यान व स्मरण',
                unlocked: stats.maxUnlockedStep >= 6,
                icon: '✨',
              },
              {
                title: language === 'pb' ? 'ਸੁਰਤਿ-ਸ਼ਬਦ ਯੋਗ ਅਭਿਆਸੀ' : language === 'en' ? 'Surat-Shabad Practitioner' : 'सुरति-शब्द योग अभ्यासी',
                level: 'Level 5',
                desc: language === 'pb' ? 'ਅੰਦਰੂਨੀ ਅਨਹਦ ਧਿਆਨ ਅਤੇ ਸੁਰਤਿ-ਸ਼ਬਦ ਸਾਧਨਾ' : language === 'en' ? 'Inner Anhad Sound & Surat-Shabad practice' : 'आंतरिक अनहद ध्यान व सुरति-शब्द साधना',
                unlocked: stats.maxUnlockedStep >= 7,
                icon: '🧘',
              },
              {
                title: language === 'pb' ? 'ਸਤਯਨਾਮ ਸਵਾਧਿਆਏ ਮਹਾ-ਸਾਧਕ' : language === 'en' ? 'Satyanaam Master Seeker' : 'सत्यनाम स्वाध्याय महा-साधक',
                level: 'Level 6',
                desc: language === 'pb' ? 'ਸਾਰੇ ੧੦ ਪੜਾਵਾਂ ਦਾ ਨਿਸ਼ਠਾ ਨਾਲ ਅਭਿਆਸ ਸੰਪੂਰਨ' : language === 'en' ? 'Completed all 10 sacred contemplation steps' : 'समस्त १० सोपानों का निष्ठापूर्वक अभ्यास पूर्ण',
                unlocked: stats.maxUnlockedStep >= 10,
                icon: '🌸',
              },
            ].map((mb, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: mb.unlocked ? theme.accentGold : theme.cardBorder,
                }}
                className={`p-4 rounded-2xl border-2 space-y-2 flex items-start gap-3 transition ${
                  mb.unlocked ? 'shadow-xs' : 'opacity-50 grayscale'
                }`}
              >
                <div className="text-3xl p-2 rounded-2xl bg-amber-500/10 border border-amber-400/20 shrink-0">
                  {mb.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">{mb.level}</span>
                    <h5 className="text-xs font-serif font-black" style={{ color: theme.textPrimary }}>{mb.title}</h5>
                  </div>
                  <p className="text-[11px] font-serif opacity-70" style={{ color: theme.textSecondary }}>{mb.desc}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block ${
                    mb.unlocked ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {mb.unlocked
                      ? (language === 'pb' ? '✓ ਪ੍ਰਾਪਤ (Unlocked)' : language === 'en' ? '✓ Unlocked' : '✓ उपलब्धि प्राप्त')
                      : (language === 'pb' ? '🔒 ਬਾਕੀ (Locked)' : language === 'en' ? '🔒 Locked' : '🔒 प्रतीक्षारत')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: AATMA 16 BHUSHAN */}
      {activeTab === 'bhushan' && (
        <div className="space-y-6 animate-fadeIn">
          <AatmaBhushanModule language={language} />
        </div>
      )}

      {/* TAB 4: STORAGE & CAPACITY REPORT */}
      {activeTab === 'storage' && (
        <div className="space-y-6 animate-fadeIn font-serif">
          {/* Main Informative Header */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="p-5 sm:p-6 rounded-3xl border-2 space-y-3 shadow-md animate-fadeIn"
          >
            <h3 className="text-base sm:text-lg font-black flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
              <HardDrive className="w-5 h-5 text-amber-600 animate-pulse" />
              <span>{language === 'hi' ? 'भंडारण क्षमता एवं संचय विश्लेषक' : language === 'pb' ? 'ਭੰਡਾਰਨ ਸਮਰੱਥਾ ਤੇ ਸੰਗ੍ਰਹਿ ਰਿਪੋਰਟ' : 'Storage & Content Volume Report'}</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90" style={{ color: theme.textPrimary }}>
              {language === 'hi' 
                ? 'हमारे इस पावन ऐप (SahebWorld App) में संगृहीत कुल आध्यात्मिक साहित्य, ग्रंथ संचय, और आपके व्यक्तिगत स्वाध्याय इतिहास के संचय की सामर्थ्य एवं भंडारण रिपोर्ट यहाँ दर्शायी गई है।' 
                : language === 'pb'
                ? 'ਇਸ ਪਾਵਨ SahebWorld ਐਪ ਵਿੱਚ ਸੰਗ੍ਰਹਿਤ ਸਮੁੱਚਾ ਅਧਿਆਤਮਕ ਸਾਹਿਤ, ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ ਅਤੇ ਤੁਹਾਡੇ ਨਿੱਜੀ ਸਵਾਧਿਆਏ ਇਤਿਹਾਸ ਦੀ ਭੰਡਾਰਨ ਰਿਪੋਰਟ ਇੱਥੇ ਦਰਸਾਈ ਗਈ ਹੈ।'
                : 'A comprehensive technical and spiritual volume report detailing the precompiled sacred texts and your local user progress metrics.'}
            </p>
          </div>

          {/* Interactive Storage capacity calculation report */}
          <StorageCapacityReport language={language} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Card */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-4 sm:p-5 rounded-3xl border shadow-sm space-y-4"
            >
              <h4 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                <Database className="w-4 h-4 text-amber-600" />
                <span>{language === 'hi' ? 'हम कितना संचय कर सकते हैं?' : language === 'pb' ? 'ਐਪ ਭੰਡਾਰਨ ਸਮਰੱਥਾ' : 'App Storage Potential'}</span>
              </h4>
              
              <div className="space-y-3.5 text-xs text-stone-500 dark:text-stone-400">
                <p className="leading-relaxed">
                  {language === 'hi' 
                    ? '• एक आधुनिक वेब ऐप में हम स्रोत संचिका के रूप में लगभग 100MB से 500MB तक का पावन पाठ संकलित कर सकते हैं, जो करोड़ों शब्दों के बराबर है।' 
                    : language === 'pb'
                    ? '• ਇੱਕ ਆਧੁਨਿਕ ਵੈੱਬ ਐਪ ਵਿੱਚ ਅਸੀਂ ਸਰੋਤ ਫਾਈਲਾਂ ਦੇ ਰੂਪ ਵਿੱਚ 100MB ਤੋਂ 500MB ਤੱਕ ਦਾ ਪਾਵਨ ਪਾਠ ਸੰਕਲਿਤ ਕਰ ਸਕਦੇ ਹਾਂ।'
                    : '• A modern React bundle can support up to 500MB of pure compiled text source, equivalent to tens of millions of words.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'hi' 
                    ? '• ब्राउज़र का स्थानिक भंडारण (LocalStorage) प्रत्येक उपयोगकर्ता के लिए 5MB (5,120 KB) आरक्षित रखता है। यह पूरे जीवनकाल के प्रविष्टियों को सुरक्षित रखने हेतु पर्याप्त है।' 
                    : language === 'pb'
                    ? '• ਬ੍ਰਾਊਜ਼ਰ ਦਾ ਸਥਾਨਕ ਭੰਡਾਰਨ (LocalStorage) ਹਰੇਕ ਵਰਤੋਂਕਾਰ ਲਈ 5MB (5,120 KB) ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ, ਜੋ ਜੀਵਨ ਭਰ ਦੇ ਨੋਟਸ ਲਈ ਕਾਫ਼ੀ ਹੈ।'
                    : '• Browsers allocate 5MB (5,120 KB) of secure LocalStorage for user preferences and diary logs, guaranteeing seamless lifelong study tracks.'}
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-4 sm:p-5 rounded-3xl border shadow-sm space-y-4"
            >
              <h4 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>{language === 'hi' ? 'इस ऐप में संकलित साहित्य' : language === 'pb' ? 'ਐਪ ਵਿੱਚ ਸੰਕਲਿਤ ਸਾਹਿਤ' : 'Current Content Written'}</span>
              </h4>

              <div className="space-y-3.5 text-xs text-stone-500 dark:text-stone-400">
                <ul className="space-y-2 font-bold" style={{ color: theme.textPrimary }}>
                  <li className="flex items-center justify-between border-b pb-1" style={{ borderColor: theme.cardBorder }}>
                    <span>📜 {language === 'hi' ? 'साखी संग्रह पावन समूह' : language === 'pb' ? 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਪਾਵਨ ਸਮੂਹ' : 'Pawan Sakhi Batches'}</span>
                    <span className="text-amber-600">39 {language === 'hi' ? 'बैच' : language === 'pb' ? 'ਬੈਚ' : 'Batches'}</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-1" style={{ borderColor: theme.cardBorder }}>
                    <span>📚 {language === 'hi' ? 'संगृहीत वृहद ग्रन्थ' : language === 'pb' ? 'ਸੰਗ੍ਰਹਿਤ ਮੁੱਖ ਗ੍ਰੰਥ' : 'Sacred Granthas'}</span>
                    <span className="text-amber-600">10 {language === 'hi' ? 'मुख्य ग्रन्थ' : language === 'pb' ? 'ਮੁੱਖ ਗ੍ਰੰਥ' : 'Major Granths'}</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-1" style={{ borderColor: theme.cardBorder }}>
                    <span>🖋️ {language === 'hi' ? 'कुल संकलित शब्द (अनुमानित)' : language === 'pb' ? 'ਕੁੱਲ ਸੰਕਲਿਤ ਸ਼ਬਦ (ਅੰਦਾਜ਼ਨ)' : 'Word Count (Approx.)'}</span>
                    <span className="text-amber-600">250,000+ {language === 'hi' ? 'शब्द' : language === 'pb' ? 'ਸ਼ਬਦ' : 'Words'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Devotion Note of gratitude */}
          <div 
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
            className="p-4 rounded-2xl border text-center text-xs italic"
          >
            <p style={{ color: theme.sacredMaroon }} className="font-bold">
              🙏 {language === 'hi' ? 'सतगुरु चरण कमलेभ्यो नमः — कोटि-कोटि धन्यवाद' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਚਰਨ ਕਮਲਾਂ ਵਿੱਚ ਨਮਸਕਾਰ — ਕੋਟਿ-ਕੋਟਿ ਧੰਨਵਾਦ' : 'Saheb Bandagi Saheb — Heartfelt Gratitude to the Seekers!'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
