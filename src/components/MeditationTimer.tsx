import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Music, 
  Wind, 
  Waves, 
  Bell, 
  Volume2,
  VolumeX,
  AudioWaveform as Waveform,
  Sun,
  Sparkles,
  ChevronLeft,
  X,
  Flame,
  Award,
  BookOpen,
  Star,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { AmbientSoundPlayer } from './AmbientSoundPlayer';
import { AnhadNaadVisualizer } from './AnhadNaadVisualizer';

interface MeditationTimerProps {
  language: Language;
  onOpenDailySakhi?: () => void;
  onClose?: () => void;
}

type AmbientSound = 'none' | 'nature' | 'flute' | 'been' | 'satyanaam';

export const MeditationTimer: React.FC<MeditationTimerProps> = ({ language, onOpenDailySakhi, onClose }) => {
  const { theme, isSahajMode } = useAppTheme();
  const t = translations[language];
  
  const [totalDuration, setTotalDuration] = useState(600);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
  const [isActive, setIsActive] = useState(false);
  const [selectedSound, setSelectedSound] = useState<AmbientSound>('none');
  const [volume, setVolume] = useState(0.5);

  // Modals state
  const [showRateModal, setShowRateModal] = useState(false);
  const [ratingGiven, setRatingGiven] = useState(false);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);
  const [milestoneMessage, setMilestoneMessage] = useState('');

  // Meditation Streaks & Stats
  const [meditationStats, setMeditationStats] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedMins = parseInt(localStorage.getItem('sahebworld_meditation_total_mins') || '0', 10);
        const savedStreak = parseInt(localStorage.getItem('sahebworld_meditation_streak') || '0', 10);
        return { totalMins: savedMins, streak: savedStreak };
      } catch {
        return { totalMins: 0, streak: 0 };
      }
    }
    return { totalMins: 0, streak: 0 };
  });
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeAudioNodesRef = useRef<{ stop?: () => void; disconnect?: () => void }[]>([]);

  const stopAudio = () => {
    activeAudioNodesRef.current.forEach((n) => {
      try { n.stop?.(); } catch {}
      try { n.disconnect?.(); } catch {}
    });
    activeAudioNodesRef.current = [];
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close().catch(() => {});
        } catch {}
        audioCtxRef.current = null;
      }
      masterGainRef.current = null;
    };
  }, []);

  const startAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    
    const ctx = audioCtxRef.current;
    const gain = masterGainRef.current!;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    
    stopAudio();

    if (selectedSound === 'none') return;

    if (selectedSound === 'nature') {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.Q.setValueAtTime(10, ctx.currentTime);
      
      noise.connect(filter);
      filter.connect(gain);
      noise.start();
      activeAudioNodesRef.current.push(noise, filter);
    } else if (selectedSound === 'flute') {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(5, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(10, ctx.currentTime);
      
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      
      osc.connect(gain);
      lfo.start();
      osc.start();
      activeAudioNodesRef.current.push(osc, lfo, lfoGain);
    } else if (selectedSound === 'been') {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      
      osc.connect(filter);
      filter.connect(gain);
      osc.start();
      activeAudioNodesRef.current.push(osc, filter);
    } else if (selectedSound === 'satyanaam') {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, ctx.currentTime);
      osc.connect(gain);
      osc.start();
      activeAudioNodesRef.current.push(osc);
    }
  };

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setMeditationStats((s) => {
              const addedMins = Math.floor(totalDuration / 60);
              const newTotal = s.totalMins + addedMins;
              const newStreak = s.streak + 1;
              if (typeof window !== 'undefined') {
                localStorage.setItem('sahebworld_meditation_total_mins', newTotal.toString());
                localStorage.setItem('sahebworld_meditation_streak', newStreak.toString());
              }
              setMilestoneMessage(
                language === 'pb' 
                  ? `ਧੰਨ ਸਾਧਨਾ! ਤੁਸੀਂ ਸਫਲਤਾਪੂਰਵਕ ${addedMins} ਮਿੰਟ ਦਾ ਧਿਆਨ ਪੂਰਾ ਕਰ ਲਿਆ ਹੈ। (ਕੁੱਲ ਸਟ੍ਰੀਕ: ${newStreak} ਸੈਸ਼ਨ)`
                  : language === 'en'
                  ? `Blessed Meditation! Successfully completed ${addedMins} mins of Anhad contemplation. (Streak: ${newStreak} sessions)`
                  : `धन्य साधना! आपने सफलतापूर्वक ${addedMins} मिनट का पावन ध्यान पूर्ण कर लिया है। (कुल सत्र: ${newStreak})`
              );
              setShowMilestoneModal(true);
              return { totalMins: newTotal, streak: newStreak };
            });
            playBell();
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, totalDuration, language]);

  useEffect(() => {
    if (isActive) {
      startAudio();
    } else {
      stopAudio();
    }
  }, [isActive, selectedSound]);

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [volume]);

  const playBell = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0.5, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 2);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Compute Anhad Stillness Level based on total completed minutes
  const getAnhadLevel = (mins: number) => {
    if (mins >= 180) {
      return {
        level: 4,
        title: language === 'pb' ? '੪. ਨਿਹਿ-ਅਕਸ਼ਰ ਅਨਹਦ ਸਮਾਧੀ' : language === 'en' ? 'Level 4: Nih-Akshar Anhad Samadhi' : 'स्तर ४: निह-अक्षर अनहद समाधि',
        desc: language === 'pb' ? 'ਪਰਮ ਅਵਿਨਾਸ਼ੀ ਨਿਹਿ-ਅਕਸ਼ਰ ਸਤਯਨਾਮ ਵਿੱਚ ਪੂਰਨ ਅਭੇਦਤਾ।' : language === 'en' ? 'Supreme unitive absorption in the eternal Nih-Akshar Satyanaam.' : 'परम अविनाशी निह-अक्षर सत्यनाम में पूर्ण तन्मयता एवं अद्वैत स्थिति।',
        progress: 100,
      };
    } else if (mins >= 60) {
      return {
        level: 3,
        title: language === 'pb' ? '੩. ਸੁਰਤ-ਸ਼ਬਦ ਅਭਿਆਸ' : language === 'en' ? 'Level 3: Surat-Shabad Yoga' : 'स्तर ३: सुरति-शब्द योग अभ्यास',
        desc: language === 'pb' ? 'ਚੇਤਨਾ ਦਾ ਅੰਦਰੂਨੀ ਅਨਾਹਤ ਧੁਨ ਨਾਲ ਲਗਾਤਾਰ ਮੇਲ।' : language === 'en' ? 'Continuous blending of inner consciousness into Anahat resonance.' : 'चेतना का घट के भीतर अनहद नाद स्पंदन के साथ निरंतर जुड़ाव।',
        progress: Math.min(100, (mins / 180) * 100),
      };
    } else if (mins >= 15) {
      return {
        level: 2,
        title: language === 'pb' ? '੨. ਅੰਤਰ-ਧਿਆਨ ਸਾਧਨਾ' : language === 'en' ? 'Level 2: Antar-Dhyan Focus' : 'स्तर २: अंतर-ध्यान एकाग्रता',
        desc: language === 'pb' ? 'ਸੁਆਸਾਂ ਦੀ ਗਤੀ ਨਾਲ ਮਨ ਦਾ ਸ਼ਾਂਤ ਹੋਣਾ।' : language === 'en' ? 'Stabilizing awareness with incoming and outgoing breath.' : 'श्वास की गति के साथ मन और वृत्तियों का स्थिर होना।',
        progress: Math.min(100, (mins / 60) * 100),
      };
    } else {
      return {
        level: 1,
        title: language === 'pb' ? '੧. ਬਹਿਰ-ਮੁਖੀ ਵਿਸ਼ਰਾਮ' : language === 'en' ? 'Level 1: Bahir-Mukhi Relaxation' : 'स्तर १: बहिर्मुखी विश्राम',
        desc: language === 'pb' ? 'ਬਾਹਰੀ ਹਲਚਲ ਨੂੰ ਛੱਡ ਕੇ ਅੰਦਰ ਵੱਲ ਮੁੜਨਾ।' : language === 'en' ? 'Releasing outer turmoil and turning attention inward.' : 'बाहरी चंचलता को त्यागकर आंतरिक शांति की ओर पहला कदम।',
        progress: Math.max(10, Math.min(100, (mins / 15) * 100)),
      };
    }
  };

  const currentLevel = getAnhadLevel(meditationStats.totalMins);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Dedicated Top Action & Navigation Bar (Including Rate Saheb World & Return/Close) */}
      <div 
        className="flex items-center justify-between gap-3 p-3 rounded-2xl border shadow-sm backdrop-blur-md"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center gap-2">
          {onOpenDailySakhi && (
            <button
              id="meditation-return-daily-sakhi-btn"
              type="button"
              onClick={onOpenDailySakhi}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.sacredMaroon,
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border hover:opacity-90 transition cursor-pointer shadow-xs active:scale-95"
              title={t.openDailySakhiBtn}
            >
              <ChevronLeft className="w-4 h-4" />
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">{t.openDailySakhiBtn}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border shadow-xs"
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>{t.tabMeditationTimer}</span>
          </motion.div>

          {/* Rate Saheb World Button in Top Bar */}
          <button
            id="meditation-rate-top-btn"
            type="button"
            onClick={() => setShowRateModal(true)}
            style={{
              backgroundColor: theme.stepActiveBg,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border shadow-xs hover:scale-105 transition active:scale-95 cursor-pointer"
            title="Rate Saheb World"
          >
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
            <span>{language === 'pb' ? 'ਰੇਟ ਕਰੋ' : language === 'en' ? 'Rate' : 'रेट साहेब वर्ल्ड'}</span>
          </button>
        </div>

      </div>

      {/* Main Title Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight" style={{ color: theme.textPrimary }}>
          {t.meditationTimerTitle}
        </h2>

        <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm max-w-md mx-auto font-serif opacity-80">
          {language === 'pb' 
            ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਅਨੁਸਾਰ ਨਿਹਿ-ਅਕਸ਼ਰ ਸਤਯਨਾਮ ਅਤੇ ਅਨਾਹਤ ਨਾਦ ਦੀ ਸਾਧਨਾ' 
            : language === 'en' 
            ? 'Deep Anhad Contemplation on Nih-Akshar Satyanaam as taught by Satguru Kabir Saheb' 
            : 'सतगुरु कबीर साहेब के वचनानुसार निह-अक्षर सत्यनाम एवं अनहद नाद की पावन साधना'}
        </p>
      </div>

      {/* VISUAL PROGRESS TRACKER & ANHAD STILLNESS STREAKS */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-5 sm:p-6 rounded-3xl border-2 shadow-md space-y-4 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-serif font-black flex items-center gap-2 text-amber-900 dark:text-amber-200">
            <Award className="w-5 h-5 text-amber-600 animate-bounce" />
            <span>{language === 'pb' ? 'ਅਨਹਦ ਸਥਿਰਤਾ ਅਤੇ ਫੋਕਸ ਧਿਆਨ ਸ੍ਰੀਕ (Anhad Streaks)' : language === 'en' ? 'Anhad Stillness & Focus Streak Tracker' : 'अनहद स्थिरता एवं फोकस ध्यान प्रगति (Anhad Streaks)'}</span>
          </h3>

          <div className="flex items-center gap-3 text-xs font-mono font-bold">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
              <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>{meditationStats.streak} {language === 'pb' ? 'ਸੈਸ਼ਨ' : language === 'en' ? 'Sessions' : 'सत्र पूर्ण'}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-600/10 text-amber-900 dark:text-amber-200 border border-amber-500/20">
              <Timer className="w-3.5 h-3.5 text-amber-600" />
              <span>{meditationStats.totalMins} {language === 'pb' ? 'ਮਿੰਟ' : language === 'en' ? 'Mins' : 'कुल मिनट'}</span>
            </span>
          </div>
        </div>

        {/* Current Anhad Level Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold font-serif uppercase tracking-wider text-amber-900 dark:text-amber-200">
              {currentLevel.title}
            </span>
            <span className="text-xs font-mono font-black text-amber-700 dark:text-amber-300">
              {Math.round(currentLevel.progress)}%
            </span>
          </div>

          <div className="w-full bg-amber-950/10 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${currentLevel.progress}%` }}
            />
          </div>

          <p className="text-xs font-serif text-amber-950/80 dark:text-amber-100/80">
            {currentLevel.desc}
          </p>
        </div>
      </div>

      {/* Timer Display */}
      <div className="flex flex-col items-center justify-center space-y-8">
        <div 
          className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-8 flex items-center justify-center shadow-2xl bg-white dark:bg-stone-900"
          style={{ borderColor: theme.cardBorder }}
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke={theme.accentGold}
              strokeWidth="8"
              strokeDasharray="100%"
              strokeDashoffset={`${100 - (timeLeft / (totalDuration || 600)) * 100}%`}
              className="transition-all duration-1000"
              style={{ strokeLinecap: 'round' }}
            />
          </svg>

          <div className="text-center space-y-1">
            <span className="text-6xl font-black font-mono tracking-tighter" style={{ color: theme.textPrimary }}>
              {formatTime(timeLeft)}
            </span>
            <p className="text-sm font-black uppercase tracking-widest font-serif" style={{ color: theme.sacredMaroon }}>
              {isActive ? t.deepSumiran : t.meditationReady}
            </p>
            {isActive && (
              <div className="pt-2">
                <AnhadNaadVisualizer isActive={true} />
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setTimeLeft(totalDuration);
              setIsActive(false);
            }}
            className="p-4 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-stone-800 transition active:scale-95 shadow-md cursor-pointer"
            style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
            title="रीसेट करें (Reset)"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setIsActive(!isActive)}
            className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-amber-400/30"
            style={{ backgroundColor: theme.sacredMaroon }}
            title={isActive ? 'विराम (Pause)' : 'प्रारंभ (Start)'}
          >
            {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </button>

          <div className="p-4 flex flex-col items-center gap-2">
            <Volume2 className="w-5 h-5 text-amber-600" />
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-amber-600 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Preset Times */}
      <div className="space-y-3 max-w-xl mx-auto text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider font-serif" style={{ color: theme.sacredMaroon }}>
          {language === 'pb' ? 'ਧਿਆਨ ਸਮਾਂ ਚੁਣੋ' : language === 'en' ? 'Select Meditation Duration' : 'ध्यान समय चुनें (Duration)'}
        </h4>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {[10, 15, 20, 30, 45, 60].map((mins) => {
            const isSel = totalDuration === mins * 60;
            return (
              <button
                key={mins}
                onClick={() => {
                  setTotalDuration(mins * 60);
                  setTimeLeft(mins * 60);
                  setIsActive(false);
                }}
                style={{
                  backgroundColor: isSel ? theme.accentGold : theme.cardBg,
                  borderColor: isSel ? theme.accentGold : theme.cardBorder,
                  color: isSel ? '#1c1917' : theme.textPrimary,
                }}
                className={`px-4 py-2 rounded-xl border-2 font-black font-mono text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xs ${
                  isSel ? 'shadow-md ring-2 ring-amber-400/40' : 'hover:border-amber-500'
                }`}
              >
                {mins}m
              </button>
            );
          })}
        </div>
      </div>

      {/* NIH-AKSHAR & SATYANAAM WISDOM WIDGET */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-5 rounded-3xl border-2 shadow-sm max-w-2xl mx-auto space-y-3"
      >
        <h4 className="text-sm font-serif font-black flex items-center gap-2 text-amber-900 dark:text-amber-200">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>{language === 'pb' ? 'ਨਿਹਿ-ਅਕਸ਼ਰ ਅਤੇ ਸਤਯਨਾਮ ਤੱਤ ਗਿਆਨ' : language === 'en' ? 'Nih-Akshar & Satyanaam Wisdom Widget' : 'निह-अक्षर एवं सत्यनाम तत्त्व ज्ञान'}</span>
        </h4>
        <p className="text-xs sm:text-sm font-serif leading-relaxed text-amber-950/80 dark:text-amber-100/80">
          {language === 'pb'
            ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਅਨੁਸਾਰ ‘ਨਿਹਿ-ਅਕਸ਼ਰ’ ਉਹ ਪਰਮ ਅਵਿਨਾਸ਼ੀ ਸਤਯਨਾਮ ਹੈ ਜੋ ਅੱਖਰਾਂ ਅਤੇ ਨਾਸ਼ਵਾਨ ਧੁਨੀਆਂ ਤੋਂ ਪਰ੍ਹੇ ਹੈ। ਧਿਆਨ ਸਮੇਂ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਇਸ ਅਨਾਹਤ ਨਾਦ ਵਿੱਚ ਸੁਰਤ ਜੋੜਨ ਨਾਲ ਆਤਮਾ ਸੱਚਖੰਡ ਦੀ ਪ੍ਰਾਪਤੀ ਕਰਦੀ ਹੈ।'
            : language === 'en'
            ? 'According to Satguru Kabir Saheb, \'Nih-Akshar\' is the Supreme Eternal Satyanaam that transcends written letters and temporal sounds. Merging inner attention into this uncreated Anahat resonance leads the soul to supreme liberation.'
            : 'सतगुरु कबीर साहेब के अनुसार ‘निह-अक्षर’ वह परम अविनाशी सत्यनाम है जो वर्णमाला और नश्वर ध्वनियों से परे है। ध्यान काल में चित्त को शांत कर इसी अनहद नाद और निह-अक्षर सत्यनाम में सुरति को लीन करने से आत्मा काल के जाल से मुक्त होती है।'}
        </p>
      </div>

      {/* Ambient Sound Selection (100% Offline Procedural Flute, Been, Bells & Tanpura) */}
      <div className="space-y-4 max-w-2xl mx-auto border-t pt-6" style={{ borderColor: theme.cardBorder }}>
        <h3 className="text-base sm:text-lg font-bold font-serif text-center flex items-center justify-center gap-2" style={{ color: theme.sacredMaroon }}>
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>{language === 'pb' ? 'ਪਾਵਨ ਧਿਆਨ ਪਿਛੋਕੜ ਧੁਨੀ (100% ਔਫ਼ਲਾਈਨ)' : language === 'en' ? 'Sacred Ambient Focus Audio (100% Offline)' : 'पावन ध्यान पृष्ठभूमि ध्वनि (100% ऑफ़लाइन)'}</span>
        </h3>
        
        <AmbientSoundPlayer language={language} variant="inline" />
      </div>

      {/* CELEBRATORY MILESTONE MODAL */}
      <AnimatePresence>
        {showMilestoneModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="max-md w-full max-w-md p-6 rounded-3xl border-2 shadow-2xl text-center space-y-4 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />

              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center text-amber-600 animate-bounce">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-black font-serif text-amber-900 dark:text-amber-200">
                  {language === 'pb' ? '🌹 ਅਨਹਦ ਸਮਾਧੀ ਪੜਾਅ ਪੂਰਾ! 🌹' : language === 'en' ? '🌹 Anhad Stillness Milestone! 🌹' : '🌹 पावन ध्यान पड़ाव पूर्ण! 🌹'}
                </h3>
                <p className="text-sm font-serif text-amber-950/80 dark:text-amber-100/80 leading-relaxed">
                  {milestoneMessage}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-serif italic text-amber-900 dark:text-amber-300">
                "सतगुरु कबीर साहेब के निह-अक्षर सत्यनाम के स्मरण से घट-घट में अनहद नाद प्रकट होता है।"
              </div>

              <button
                type="button"
                onClick={() => setShowMilestoneModal(false)}
                className="w-full py-3 rounded-2xl font-bold font-serif text-white shadow-lg transition active:scale-95 cursor-pointer"
                style={{ backgroundColor: theme.sacredMaroon }}
              >
                {language === 'pb' ? 'ਧੰਨਵਾਦ (Continue)' : language === 'en' ? 'Continue Journey' : 'आगे बढ़ें (Continue)'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RATE SAHEB WORLD MODAL */}
      <AnimatePresence>
        {showRateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="max-md w-full max-w-md p-6 rounded-3xl border-2 shadow-2xl text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black font-serif text-amber-900 dark:text-amber-200">
                  {language === 'pb' ? 'ਸਾਹੇਬ ਵਰਲਡ ਨੂੰ ਰੇਟ ਕਰੋ' : language === 'en' ? 'Rate Saheb World' : 'साहेब वर्ल्ड को रेट करें'}
                </h3>
                <p className="text-xs font-serif opacity-80" style={{ color: theme.textSecondary }}>
                  {language === 'pb' ? 'ਤੁਹਾਡਾ ਅਧਿਆਤਮਿਕ ਅਨੁਭਵ ਸਾਡੇ ਲਈ ਅਨਮੋਲ ਹੈ।' : language === 'en' ? 'Your spiritual experience matters immensely to us.' : 'सतगुरु कबीर साहेब की वाणी से ओतप्रोत इस पावन सेवा को अपनी रेटिंग दें।'}
                </p>
              </div>

              {ratingGiven ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-serif font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{language === 'pb' ? 'ਧੰਨਵਾਦ! ਪਾਵਨ ਰੇਟਿੰਗ ਦਰਜ ਹੋ ਗਈ।' : language === 'en' ? 'Thank you for your rating!' : 'धन्यवाद! आपकी पावन रेटिंग दर्ज हो गई।'}</span>
                </div>
              ) : (
                <div className="flex justify-center gap-2 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRatingGiven(true)}
                      className="p-2 hover:scale-125 transition-transform cursor-pointer text-amber-500"
                    >
                      <Star className="w-8 h-8 fill-amber-500" />
                    </button>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowRateModal(false);
                  setRatingGiven(false);
                }}
                className="w-full py-2.5 rounded-xl border font-bold font-serif transition active:scale-95 cursor-pointer"
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
              >
                {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
