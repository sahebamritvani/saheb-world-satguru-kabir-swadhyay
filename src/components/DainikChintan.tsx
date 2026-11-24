import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  BookOpen,
  Timer,
  Edit3,
  CheckCircle2,
  Share2,
  Volume2,
  Calendar,
  Layers,
  Heart,
  ChevronRight,
  ChevronLeft,
  Flame,
  Save,
  Trash2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Check,
  Compass,
  ArrowRight,
  Feather,
  Download,
  Copy
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { 
  DAINIK_CHINTAN_LIST, 
  ChintanSeed, 
  getTodayChintan, 
  getChintanByCategory 
} from '../data/dainikChintanData';
import { 
  TEN_SATYA_VACHAN_SUTRAS, 
  DAS_SUTRAS_METADATA 
} from '../data/dasSutraData';
import { GuruJiDasSutraView } from './GuruJiDasSutraView';
import { satyanaamAudio } from '../services/audioDhun';
import { useAppTheme } from '../theme/ThemeContext';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface DainikChintanProps {
  language: Language;
  onChangeLanguage?: (lang: Language) => void;
  onOpenBlessing?: (title?: string, message?: string) => void;
  onClose?: () => void;
  onNavigateToSwadhyay?: () => void;
  initialTab?: 'today' | 'timer' | 'journal' | 'wheel' | 'das-sutra';
}

interface ChintanJournalEntry {
  id: string;
  chintanId: string;
  chintanTitle: string;
  verse: string;
  reflectionText: string;
  answers: { [qIdx: number]: string };
  sankalpAccepted: boolean;
  dateStr: string;
  timestamp: number;
}

const STORAGE_JOURNAL_KEY = 'sahebworld_dainik_chintan_journal';
const STORAGE_STREAK_KEY = 'sahebworld_chintan_streak_data';

export const DainikChintan: React.FC<DainikChintanProps> = ({
  language,
  onChangeLanguage,
  onOpenBlessing,
  initialTab = 'today',
}) => {
  const { theme } = useAppTheme();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'today' | 'timer' | 'journal' | 'wheel' | 'das-sutra'>(initialTab);

  // Today's Chintan vs Selected Chintan
  const [selectedChintan, setSelectedChintan] = useState<ChintanSeed>(getTodayChintan());
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Interactive Answers & Journal State
  const [inquiryAnswers, setInquiryAnswers] = useState<{ [qIdx: number]: string }>({});
  const [reflectionText, setReflectionText] = useState('');
  const [isSankalpDone, setIsSankalpDone] = useState(false);
  const [isSavedRecently, setIsSavedRecently] = useState(false);
  const [journalEntries, setJournalEntries] = useState<ChintanJournalEntry[]>([]);

  // Streak & Metrics
  const [streakCount, setStreakCount] = useState(1);
  const [totalReflectionsDone, setTotalReflectionsDone] = useState(0);
  const [isSutrasCopied, setIsSutrasCopied] = useState(false);

  const handleCopy10Sutras = () => {
    const lines = [
      DAS_SUTRAS_METADATA.headerBadge[language],
      '',
      DAS_SUTRAS_METADATA.title[language],
      DAS_SUTRAS_METADATA.subtitle[language],
      '',
      ...TEN_SATYA_VACHAN_SUTRAS.map(
        (s) =>
          `${s.num}. ${s.sutra[language]}\n   ${DAS_SUTRAS_METADATA.bhavarthLabel[language]} ${s.bhavarth[language]}\n   ${DAS_SUTRAS_METADATA.lifeMessageLabel[language]} ${s.lifeMessage[language]}`
      ),
      '',
      DAS_SUTRAS_METADATA.salutation[language],
    ].join('\n');

    navigator.clipboard.writeText(lines);
    setIsSutrasCopied(true);
    setTimeout(() => setIsSutrasCopied(false), 2500);
  };

  // Meditation / Contemplation Timer State
  const [timerDuration, setTimerDuration] = useState<number>(300); // 5 mins default (300 sec)
  const [timeRemaining, setTimeRemaining] = useState<number>(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerStage, setTimerStage] = useState<'idle' | 'inhale' | 'exhale'>('idle');

  // Load Saved Journal & Streak on Mount
  useEffect(() => {
    try {
      const savedJournal = localStorage.getItem(STORAGE_JOURNAL_KEY);
      if (savedJournal) {
        const parsed: ChintanJournalEntry[] = JSON.parse(savedJournal);
        setJournalEntries(parsed);
        setTotalReflectionsDone(parsed.length);
      }

      const savedStreak = localStorage.getItem(STORAGE_STREAK_KEY);
      if (savedStreak) {
        const parsed = JSON.parse(savedStreak);
        setStreakCount(parsed.streak || 1);
      }
    } catch {}
  }, []);

  // Timer Tick
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            try {
              satyanaamAudio.ringSacredBell();
            } catch {}
            if (onOpenBlessing) {
              onOpenBlessing(
                language === 'hi' ? 'शांत चिंतन पूर्ण' : language === 'pb' ? 'ਸ਼ਾਂਤ ਚਿੰਤਨ ਸੰਪੂਰਨ' : 'Contemplation Complete',
                language === 'pb'
                  ? 'ਤੁਸੀਂ ਅੱਜ ਦਾ ਸ਼ਾਂਤ ਚਿੰਤਨ ਅਤੇ ਧਿਆਨ ਪੂਰਾ ਕਰ ਲਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ!'
                  : language === 'en'
                  ? 'You have completed today’s silent contemplation.'
                  : 'आपने आज का शांत चिंतन व ध्यान पूर्ण किया। सत साहेब!'
              );
            }
            return 0;
          }
          // Breath Pacer toggle every 4 seconds
          const secPassed = timerDuration - prev;
          if (secPassed % 8 < 4) {
            setTimerStage('inhale');
          } else {
            setTimerStage('exhale');
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining, timerDuration, language, onOpenBlessing]);

  const handleStartTimer = (seconds: number) => {
    setTimerDuration(seconds);
    setTimeRemaining(seconds);
    setIsTimerRunning(true);
    setTimerStage('inhale');
    try {
      satyanaamAudio.ringSacredBell();
    } catch {}
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimeRemaining(timerDuration);
    setTimerStage('idle');
  };

  const handleSaveJournalEntry = () => {
    const todayStr = new Date().toLocaleDateString(language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const newEntry: ChintanJournalEntry = {
      id: `chintan_entry_${Date.now()}`,
      chintanId: selectedChintan.id,
      chintanTitle: selectedChintan.title[language],
      verse: selectedChintan.verse[language],
      reflectionText: reflectionText.trim(),
      answers: inquiryAnswers,
      sankalpAccepted: isSankalpDone,
      dateStr: todayStr,
      timestamp: Date.now(),
    };

    const updated = [newEntry, ...journalEntries];
    setJournalEntries(updated);
    setTotalReflectionsDone(updated.length);

    try {
      localStorage.setItem(STORAGE_JOURNAL_KEY, JSON.stringify(updated));
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      localStorage.setItem(STORAGE_STREAK_KEY, JSON.stringify({ streak: newStreak, lastDate: todayStr }));
    } catch {}

    setIsSavedRecently(true);
    try {
      satyanaamAudio.ringSacredBell();
    } catch {}

    setTimeout(() => {
      setIsSavedRecently(false);
    }, 3000);

    if (onOpenBlessing) {
      onOpenBlessing(
        language === 'hi' ? 'चिंतन समर्पण' : language === 'pb' ? 'ਚਿੰਤਨ ਸਮਰਪਣ' : 'Contemplation Saved',
        language === 'pb'
          ? 'ਤੁਹਾਡੇ ਆਤਮ-ਚਿੰਤਨ ਵਿਚਾਰ ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਏ ਹਨ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!'
          : language === 'en'
          ? 'Your sacred reflections have been saved in your personal journal.'
          : 'आपके आत्म-चिंतन विचार डायरी में सुरक्षित हो गए हैं। साहेब बंदगी साहेब!'
      );
    }
  };

  const handleDeleteJournalEntry = (id: string) => {
    const filtered = journalEntries.filter((e) => e.id !== id);
    setJournalEntries(filtered);
    try {
      localStorage.setItem(STORAGE_JOURNAL_KEY, JSON.stringify(filtered));
    } catch {}
  };

  const handleExportJournal = () => {
    if (journalEntries.length === 0) return;

    const top = SACRED_BRANDING.header[language];
    const bottom = SACRED_BRANDING.footer[language];
    const dateLabel = language === 'hi' ? 'दिनांक' : language === 'pb' ? 'ਮਿਤੀ' : 'Date';
    const titleLabel = language === 'hi' ? 'चिंतन विषय' : language === 'pb' ? 'ਚਿੰਤਨ ਵਿਸ਼ਾ' : 'Topic';
    const verseLabel = language === 'hi' ? 'सतगुरु कबीर साहेब की अमर वाणी' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਮਰ ਬਾਣੀ' : 'Satguru Kabir Saheb Vani';
    const notesLabel = language === 'hi' ? 'साधक के अंतर्मन के भाव' : language === 'pb' ? 'ਅੰਦਰੂਨੀ ਵਿਚਾਰ' : 'Inner Reflections';
    const answersLabel = language === 'hi' ? 'आत्म-मंथन उत्तर' : language === 'pb' ? 'ਆਤਮ-ਮੰਥਨ ਉੱਤਰ' : 'Inquiry Answers';
    const sankalpLabel = language === 'hi' ? 'साधना संकल्प' : language === 'pb' ? 'ਸਾਧਨਾ ਸੰਕਲਪ' : 'Spiritual Resolve';

    const formatted = journalEntries
      .map((entry, idx) => {
        let text = `प्रविष्टि #${idx + 1}\n` +
          `• ${dateLabel}: ${entry.dateStr}\n` +
          `• ${titleLabel}: ${entry.chintanTitle}\n`;

        if (entry.verse) {
          text += `• ${verseLabel}:\n${entry.verse}\n`;
        }
        if (entry.reflectionText) {
          text += `• ${notesLabel}:\n${entry.reflectionText}\n`;
        }
        if (entry.answers && Object.keys(entry.answers).length > 0) {
          text += `• ${answersLabel}:\n`;
          Object.entries(entry.answers).forEach(([qIdx, ans]) => {
            text += `   - प्रश्न ${Number(qIdx) + 1}: ${ans}\n`;
          });
        }
        if (entry.sankalpAccepted) {
          text += `• ${sankalpLabel}: साधना संकल्प स्वीकृत व समर्पित\n`;
        }
        return text;
      })
      .join('\n========================================\n\n');

    const fullExport = `\uFEFF।। ${top} ।।\nसाहेब वर्ल्ड — दैनिक आत्म-चिंतन डायरी\n(कुल ${journalEntries.length} प्रविष्टियां)\n\n========================================\n\n${formatted}\n\n========================================\n\n।। ${bottom} ।।\n`;

    const blob = new Blob([fullExport], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SahebWorld_Dainik_Chintan_Diary_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareChintan = () => {
    const top = SACRED_BRANDING.header[language];
    const bottom = SACRED_BRANDING.footer[language];

    const shareText = `${top}
🌸 *${language === 'hi' ? 'आज का पावन दैनिक चिंतन' : language === 'pb' ? 'ਅੱਜ ਦਾ ਪਾਵਨ ਦੈਨਿਕ ਚਿੰਤਨ' : "Today's Sacred Daily Contemplation"}* 🌸

📌 *${selectedChintan.title[language]}*
[${selectedChintan.categoryTitle[language]}]

📜 *${language === 'hi' ? 'सतगुरु कबीर साहेब की अमर वाणी:' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਮਰ ਬਾਣੀ:' : 'Satguru Kabir Saheb Eternal Wisdom:'}*
${selectedChintan.verse[language]}

💡 *चिंतन मर्म:*
${selectedChintan.contemplationEssence[language]}

✨ *आज का साधना संकल्प:*
"${selectedChintan.sadhanaSankalp[language]}"

${bottom}`;

    if (navigator.share) {
      navigator.share({
        title: selectedChintan.title[language],
        text: shareText,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  // Trilingual labels
  const tr = {
    title: language === 'hi' ? 'दैनिक आत्म-चिंतन' : language === 'pb' ? 'ਦੈਨਿਕ ਆਤਮ-ਚਿੰਤਨ' : 'Daily Contemplation',
    subtitle: language === 'hi' ? 'सतगुरु कबीर साहेब के वचनों पर गहरा अंतर्मुखी विचार व ध्यान' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਬਚਨਾਂ ਤੇ ਗੂੜ੍ਹਾ ਅੰਦਰੂਨੀ ਚਿੰਤਨ ਤੇ ਧਿਆਨ' : 'Deep Inner Reflection & Meditation on Satguru Kabir’s Wisdom',
    tabToday: language === 'hi' ? 'आज का चिंतन' : language === 'pb' ? 'ਅੱਜ ਦਾ ਚਿੰਤਨ' : 'Today’s Contemplation',
    tabTimer: language === 'hi' ? 'शांत ध्यान टाइमर' : language === 'pb' ? 'ਸ਼ਾਂਤ ਧਿਆਨ ਟਾਈਮਰ' : 'Silent Meditation Timer',
    tabJournal: language === 'hi' ? 'मेरी चिंतन डायरी' : language === 'pb' ? 'ਮੇਰੀ ਚਿੰਤਨ ਡਾਇਰੀ' : 'Contemplation Journal',
    tabWheel: language === 'hi' ? 'चिंतन सोपान चक्र' : language === 'pb' ? 'ਚਿੰਤਨ ਚੱਕਰ' : 'Contemplation Wheel',
    shareBtn: language === 'hi' ? 'चिंतन साझा करें' : language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : 'Share',
    saveBtn: language === 'hi' ? 'चिंतन सुरक्षित करें' : language === 'pb' ? 'ਸੰਭਾਲੋ' : 'Save Reflection',
    inquiryHeading: language === 'hi' ? '३ गहन आत्म-मंथन प्रश्न' : language === 'pb' ? '੩ ਗੂੜ੍ਹ ਆਤਮ-ਮੰਥਨ ਪ੍ਰਸ਼ਨ' : '3 Deep Self-Inquiry Questions',
    sankalpHeading: language === 'hi' ? 'आज का पावन साधना संकल्प' : language === 'pb' ? 'ਅੱਜ ਦਾ ਸਾਧਨਾ ਸੰਕਲਪ' : 'Today’s Sacred Spiritual Resolve',
    resolveAccept: language === 'hi' ? 'मैंने यह संकल्प स्वीकार किया' : language === 'pb' ? 'ਮੈਂ ਇਹ ਸੰਕਲਪ ਸਵੀਕਾਰ ਕੀਤਾ' : 'I accept this spiritual resolve',
    notesPlaceholder: language === 'hi' ? 'आज के आत्म-चिंतन पर अपने अंतर्मन के भाव यहाँ लिखें...' : language === 'pb' ? 'ਅੱਜ ਦੇ ਚਿੰਤਨ ਤੇ ਆਪਣੇ ਅੰਦਰੂਨੀ ਵਿਚਾਰ ਇੱਥੇ ਲਿਖੋ...' : 'Write your sacred inner reflections here...',
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      id="dainik-chintan-hub"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border shadow-2xl overflow-hidden flex flex-col transition-all duration-300"
    >
      {/* Main Header & Tab Navigation */}
      <div className="p-4 sm:p-6 border-b space-y-4" style={{ borderColor: theme.cardBorder }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                borderColor: '#F59E0B',
              }}
              className="w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-inner shrink-0"
            >
              <Feather className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border border-amber-400/30"
                >
                  🌸 DAINIK CHINTAN
                </span>
                <span className="text-xs font-semibold" style={{ color: theme.textSecondary }}>
                  {selectedChintan.categoryTitle[language]}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-serif tracking-tight mt-0.5" style={{ color: theme.sacredMaroon }}>
                {tr.title}
              </h2>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Contemplation Streak */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: '#EF4444',
                color: '#DC2626',
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border text-xs font-bold shadow-xs"
              title="Daily Contemplation Streak"
            >
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{streakCount} {language === 'pb' ? 'ਦਿਨ ਪ੍ਰਵਾਹ' : language === 'en' ? 'days' : 'दिन प्रवाह'} 🔥</span>
            </div>

            {/* Share Button */}
            <button
              type="button"
              onClick={handleShareChintan}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.borderOrnament,
              }}
              className="px-3 py-1.5 rounded-2xl border text-xs font-bold flex items-center gap-1.5 hover:border-amber-500 transition cursor-pointer shadow-xs"
              title={tr.shareBtn}
            >
              <Share2 className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">{tr.shareBtn}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl border bg-black/5 dark:bg-white/5" style={{ borderColor: theme.cardBorder }}>
          <button
            type="button"
            onClick={() => setActiveTab('today')}
            style={{
              backgroundColor: activeTab === 'today' ? theme.buttonPrimaryBg : 'transparent',
              color: activeTab === 'today' ? theme.buttonPrimaryText : theme.textSecondary,
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{tr.tabToday}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('timer')}
            style={{
              backgroundColor: activeTab === 'timer' ? theme.buttonPrimaryBg : 'transparent',
              color: activeTab === 'timer' ? theme.buttonPrimaryText : theme.textSecondary,
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Timer className="w-3.5 h-3.5" />
            <span>{tr.tabTimer}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('journal')}
            style={{
              backgroundColor: activeTab === 'journal' ? theme.buttonPrimaryBg : 'transparent',
              color: activeTab === 'journal' ? theme.buttonPrimaryText : theme.textSecondary,
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{tr.tabJournal} ({journalEntries.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('wheel')}
            style={{
              backgroundColor: activeTab === 'wheel' ? theme.buttonPrimaryBg : 'transparent',
              color: activeTab === 'wheel' ? theme.buttonPrimaryText : theme.textSecondary,
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{tr.tabWheel}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('das-sutra')}
            style={{
              backgroundColor: activeTab === 'das-sutra' ? theme.buttonPrimaryBg : 'transparent',
              color: activeTab === 'das-sutra' ? theme.buttonPrimaryText : theme.textSecondary,
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'pb' ? '੧੦ ਸਤਯ ਵਚਨ' : language === 'en' ? '10 Truth Sutras' : '१० सत्य वचन सूत्र'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: TODAY'S CONTEMPLATION & INQUIRY */}
      {activeTab === 'today' && (
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Contemplation Banner */}
          <div
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.borderOrnament,
            }}
            className="p-5 sm:p-7 rounded-3xl border-2 shadow-md space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                {selectedChintan.categoryTitle[language]}
              </span>
              <span className="text-xs font-semibold" style={{ color: theme.textSecondary }}>
                {language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Day' : 'दिवस'} #{selectedChintan.dayNumber}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-serif tracking-wide" style={{ color: theme.sacredMaroon }}>
              {selectedChintan.title[language]}
            </h3>

            {/* Sacred Couplet via UnifiedDohaCard */}
            <UnifiedDohaCard
              id={`chintan-${selectedChintan.id}`}
              verseNumber={selectedChintan.dayNumber}
              badgeLabel={selectedChintan.categoryTitle}
              text={selectedChintan.verse}
              language={language}
            />

            {/* Core Teaching & Deep Contemplation */}
            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {language === 'pb' ? '💡 ਮੁੱਖ ਅਧਿਆਤਮਿਕ ਮਰਮ:' : language === 'en' ? '💡 Core Spiritual Essence:' : '💡 मुख्य आध्यात्मिक मर्म:'}
                </span>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textPrimary }}>
                  {selectedChintan.coreTeaching[language]}
                </p>
              </div>

              <div
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="p-4 rounded-xl border text-xs sm:text-sm leading-relaxed"
              >
                <strong className="block mb-1 text-amber-700 dark:text-amber-300">
                  {language === 'pb' ? 'ਗੂੜ੍ਹਾ ਅੰਤਰਮੁਖੀ ਚਿੰਤਨ:' : language === 'en' ? 'Deep Contemplative Inquiry:' : 'गहन अंतर्मुखी चिंतन:'}
                </strong>
                <p style={{ color: theme.textSecondary }}>
                  {selectedChintan.contemplationEssence[language]}
                </p>
              </div>
            </div>
          </div>

          {/* 3 DEEP SELF-INQUIRY QUESTIONS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h4 className="text-base sm:text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                {tr.inquiryHeading}
              </h4>
            </div>

            <div className="space-y-3">
              {selectedChintan.inquiryQuestions[language].map((q, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: theme.bgSecondary,
                    borderColor: theme.cardBorder,
                  }}
                  className="p-4 rounded-2xl border space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-semibold leading-snug" style={{ color: theme.textPrimary }}>
                      {q}
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder={language === 'pb' ? 'ਤੁਹਾਡਾ ਉੱਤਰ / ਅੰਤਰਦ੍ਰਿਸ਼ਟੀ...' : language === 'en' ? 'Your inner reflection / answer...' : 'आपका उत्तर / अंतर्दृष्टि...'}
                    value={inquiryAnswers[idx] || ''}
                    onChange={(e) =>
                      setInquiryAnswers({ ...inquiryAnswers, [idx]: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500 transition"
                    style={{ borderColor: theme.cardBorder }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DAILY SANKALP (RESOLVE) */}
          <div
            style={{
              backgroundColor: isSankalpDone ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
              borderColor: isSankalpDone ? '#22C55E' : '#F59E0B',
            }}
            className="p-5 rounded-2xl border-2 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {tr.sankalpHeading}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsSankalpDone(!isSankalpDone)}
                className={`px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1.5 transition cursor-pointer ${
                  isSankalpDone ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-stone-950'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isSankalpDone ? (language === 'pb' ? 'ਸਵੀਕਾਰ ਕੀਤਾ ✓' : language === 'en' ? 'Accepted ✓' : 'स्वीकृत ✓') : tr.resolveAccept}</span>
              </button>
            </div>

            <p className="text-sm sm:text-base font-serif italic font-bold leading-relaxed" style={{ color: theme.sacredMaroon }}>
              "{selectedChintan.sadhanaSankalp[language]}"
            </p>
          </div>

          {/* QUICK REFLECTION NOTE PAD & SAVE */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: theme.textSecondary }}>
                {language === 'pb' ? '📝 ਨਿੱਜੀ ਸਾਧਨਾ ਚਿੰਤਨ ਡਾਇਰੀ ਇੰਦਰਾਜ:' : language === 'en' ? '📝 Personal Spiritual Contemplation Entry:' : '📝 व्यक्तिगत साधना चिंतन डायरी प्रविष्टि:'}
              </span>
              {isSavedRecently && (
                <span className="text-xs font-bold text-emerald-600 animate-pulse">
                  {language === 'pb' ? 'ਸਫਲਤਾਪੂਰਵਕ ਸੰਭਾਲਿਆ ਗਿਆ! ✓' : language === 'en' ? 'Successfully Saved! ✓' : 'सफलतापूर्वक सुरक्षित हो गया! ✓'}
                </span>
              )}
            </div>

            <textarea
              rows={3}
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
              placeholder={tr.notesPlaceholder}
              className="w-full p-4 rounded-2xl border text-sm bg-white dark:bg-stone-900 focus:outline-none focus:border-amber-500 transition leading-relaxed"
              style={{ borderColor: theme.cardBorder }}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() => setActiveTab('timer')}
                className="px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 hover:bg-black/5 cursor-pointer"
                style={{ borderColor: theme.cardBorder }}
              >
                <Timer className="w-4 h-4 text-amber-500" />
                <span>{language === 'pb' ? 'ਸ਼ਾਂਤ ਧਿਆਨ ਟਾਈਮਰ ਸ਼ੁਰੂ ਕਰੋ' : language === 'en' ? 'Start Meditation Timer' : 'शांत ध्यान टाइमर शुरू करें'}</span>
              </button>

              <button
                type="button"
                onClick={handleSaveJournalEntry}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer transition hover:opacity-90"
              >
                <Save className="w-4 h-4" />
                <span>{tr.saveBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SILENT CONTEMPLATION & MEDITATION TIMER */}
      {activeTab === 'timer' && (
        <div className="p-4 sm:p-6 space-y-6 text-center">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              शांत चिंतन व ध्यान साधना
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: theme.textSecondary }}>
              {selectedChintan.meditationGuide[language]}
            </p>
          </div>

          {/* BREATHING LOTUS VISUALIZER */}
          <div className="py-6 flex flex-col items-center justify-center">
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderColor: isTimerRunning ? '#F59E0B' : theme.cardBorder,
              }}
              className={`w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 flex flex-col items-center justify-center relative shadow-2xl transition-all duration-1000 ${
                isTimerRunning && timerStage === 'inhale'
                  ? 'scale-110 shadow-amber-500/30'
                  : isTimerRunning && timerStage === 'exhale'
                  ? 'scale-95 shadow-orange-500/20'
                  : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-wider" style={{ color: theme.sacredMaroon }}>
                {formatTimer(timeRemaining)}
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                {isTimerRunning
                  ? timerStage === 'inhale'
                    ? 'श्वास अंदर लें • "सत्य"'
                    : 'श्वास छोड़ें • "नाम"'
                  : 'शांत बैठें'}
              </div>

              <div className="text-xs opacity-70 mt-1">
                {selectedChintan.title[language]}
              </div>
            </div>
          </div>

          {/* TIMER PRESET CONTROLS */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'pb' ? 'ਧਿਆਨ ਸਮਾਂ ਚੁਣੋ:' : language === 'en' ? 'Select Duration:' : 'ध्यान समय चुनें:'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: '10m', sec: 600 },
                { label: '15m', sec: 900 },
                { label: '20m', sec: 1200 },
                { label: '30m', sec: 1800 },
                { label: '45m', sec: 2700 },
                { label: '60m', sec: 3600 },
              ].map((p) => (
                <button
                  key={p.sec}
                  type="button"
                  onClick={() => handleStartTimer(p.sec)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-mono border transition-all cursor-pointer ${
                    timerDuration === p.sec && isTimerRunning
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md ring-2 ring-amber-400/40'
                      : 'bg-black/5 dark:bg-white/5 text-stone-800 dark:text-stone-200 hover:bg-amber-500/20 hover:border-amber-500/50'
                  }`}
                  style={{ borderColor: theme.cardBorder }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {isTimerRunning ? (
              <button
                type="button"
                onClick={handlePauseTimer}
                className="px-6 py-3 rounded-2xl bg-amber-500 text-stone-950 font-black text-sm flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Pause className="w-4 h-4" />
                <span>विराम (Pause)</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsTimerRunning(true)}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>आरंभ करें (Start)</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleResetTimer}
              className="p-3 rounded-2xl border flex items-center justify-center hover:bg-black/5 cursor-pointer"
              style={{ borderColor: theme.cardBorder }}
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4 text-stone-500" />
            </button>

            <button
              type="button"
              onClick={() => {
                try {
                  satyanaamAudio.ringSacredBell();
                } catch {}
              }}
              className="p-3 rounded-2xl border flex items-center justify-center hover:bg-black/5 cursor-pointer"
              style={{ borderColor: theme.cardBorder }}
              title="Ring Sacred Chime"
            >
              <Volume2 className="w-4 h-4 text-amber-500" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: CONTEMPLATION JOURNAL HISTORY */}
      {activeTab === 'journal' && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                {language === 'pb' ? 'ਸਾਧਨਾ ਚਿੰਤਨ ਡਾਇਰੀ' : language === 'en' ? 'Sadhana Contemplation Journal' : 'साधना आत्म-चिंतन डायरी'}
              </h3>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {language === 'pb' 
                  ? `ਕੁੱਲ ${journalEntries.length} ਪਾਵਨ ਚਿੰਤਨ ਪ੍ਰਵਿਸ਼ਟੀਆਂ ਸੁਰੱਖਿਅਤ` 
                  : language === 'en' 
                  ? `Total ${journalEntries.length} sacred reflections saved` 
                  : `कुल ${journalEntries.length} पावन चिंतन प्रविष्टियाँ सुरक्षित`}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {journalEntries.length > 0 && (
                <button
                  type="button"
                  onClick={handleExportJournal}
                  style={{
                    backgroundColor: theme.bgSecondary,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:border-amber-500/50 cursor-pointer transition"
                  title={language === 'pb' ? 'ਡਾਇਰੀ ਡਾਊਨਲੋਡ ਕਰੋ' : language === 'en' ? 'Download Journal' : 'डायरी डाउनलोड करें'}
                >
                  <Download className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'pb' ? 'ਡਾਊਨਲੋਡ' : language === 'en' ? 'Download' : 'डायरी डाउनलोड'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveTab('today')}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{language === 'pb' ? 'ਨਵਾਂ ਚਿੰਤਨ ਲਿਖੋ' : language === 'en' ? 'New Reflection' : 'नया चिंतन लिखें'}</span>
              </button>
            </div>
          </div>

          {journalEntries.length === 0 ? (
            <div
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
              className="p-8 rounded-3xl border text-center space-y-3"
            >
              <div className="text-4xl">📖</div>
              <p className="text-sm font-semibold" style={{ color: theme.textSecondary }}>
                अभी तक कोई चिंतन डायरी प्रविष्टि नहीं लिखी गई है। आज का चिंतन पढ़कर अपने भाव दर्ज करें।
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('today')}
                className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold shadow-md cursor-pointer"
              >
                आज का चिंतन शुरू करें
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {journalEntries.map((entry) => (
                <div
                  key={entry.id}
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                  className="p-5 rounded-2xl border space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: theme.cardBorder }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                        {entry.dateStr}
                      </span>
                      <span>•</span>
                      <strong className="text-sm font-bold" style={{ color: theme.sacredMaroon }}>
                        {entry.chintanTitle}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteJournalEntry(entry.id)}
                      className="text-stone-400 hover:text-red-500 p-1 cursor-pointer"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {entry.verse && (
                    <p className="text-xs italic font-serif text-amber-800 dark:text-amber-300">
                      "{entry.verse}"
                    </p>
                  )}

                  {entry.reflectionText && (
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                      {entry.reflectionText}
                    </p>
                  )}

                  {entry.answers && Object.keys(entry.answers).length > 0 && (
                    <div className="space-y-1 pt-1 text-xs" style={{ color: theme.textSecondary }}>
                      <span className="font-bold">प्रश्नोत्तरी उत्तर:</span>
                      {Object.entries(entry.answers).map(([qIdx, ans]) => (
                        <div key={qIdx} className="pl-2 border-l-2 border-amber-500">
                          <strong>प्रश्न {Number(qIdx) + 1}:</strong> {ans}
                        </div>
                      ))}
                    </div>
                  )}

                  {entry.sankalpAccepted && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>साधना संकल्प पूर्णतः स्वीकृत व समर्पित</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: 30-DAY CONTEMPLATION WHEEL */}
      {activeTab === 'wheel' && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'pb' ? '੩੦-ਦਿਨਾ ਚਿੰਤਨ ਸੋਪਾਨ ਚੱਕਰ' : language === 'en' ? '30-Day Contemplation Journey Wheel' : '३०-दिवसीय चिंतन सोपान चक्र'}
            </h3>
            <p className="text-xs sm:text-sm font-serif" style={{ color: theme.textSecondary }}>
              {language === 'pb' 
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਬਾਣੀ ਦੇ ਵੱਖ-ਵੱਖ ਅੰਗਾਂ ਤੇ ਆਧਾਰਿਤ ਗੂੜ੍ਹ ਆਤਮ-ਮੰਥਨ ਸੂਤਰ' 
                : language === 'en' 
                ? 'Deep contemplative verses grounded in the eternal wisdom of Satguru Kabir Saheb' 
                : 'सतगुरु कबीर साहेब की अमर वाणी के विभिन्न अध्यायों पर आधारित गहन आत्म-मंथन सूत्र'}
            </p>
          </div>

          {/* Categorized Themes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DAINIK_CHINTAN_LIST.map((seed) => {
              const isCurrent = seed.id === selectedChintan.id;

              return (
                <div
                  key={seed.id}
                  onClick={() => {
                    setSelectedChintan(seed);
                    setActiveTab('today');
                  }}
                  style={{
                    backgroundColor: isCurrent ? 'rgba(245, 158, 11, 0.12)' : theme.bgSecondary,
                    borderColor: isCurrent ? '#F59E0B' : theme.cardBorder,
                  }}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer hover:scale-[1.01] space-y-2 shadow-xs ${
                    isCurrent ? 'ring-2 ring-amber-500/40' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {seed.categoryTitle[language]}
                    </span>
                    <span className="text-xs font-bold opacity-60">
                      {language === 'pb' ? `ਦਿਨ ${seed.dayNumber}` : language === 'en' ? `Day ${seed.dayNumber}` : `दिवस ${seed.dayNumber}`}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {seed.title[language]}
                  </h4>

                  <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: theme.textSecondary }}>
                    {seed.coreTeaching[language]}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                    <span>{language === 'pb' ? 'ਚਿੰਤਨ ਕਰੋ' : language === 'en' ? 'Contemplate' : 'चिंतन करें'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 5: 10 SATYA VACHAN SUTRAS & DEEP ANALYSIS */}
      {activeTab === 'das-sutra' && (
        <div className="p-2 sm:p-4 animate-in fade-in duration-300">
          <GuruJiDasSutraView
            language={language}
            onChangeLanguage={onChangeLanguage}
            onOpenBlessing={onOpenBlessing}
          />
        </div>
      )}

    </div>
  );
};
