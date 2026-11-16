import React, { useState, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Check, 
  Award, 
  ChevronRight,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';

interface JaapMalaCounterProps {
  language: Language;
  onClose?: () => void;
  isFloating?: boolean;
}

const MALA_TARGETS = [21, 54, 108] as const;

export const JaapMalaCounter: React.FC<JaapMalaCounterProps> = ({
  language,
  onClose,
  isFloating = false,
}) => {
  const { theme } = useAppTheme();
  const [count, setCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_mala_count');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [totalMalas, setTotalMalas] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sahebworld_mala_rounds');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [target, setTarget] = useState<number>(108);
  const [hapticFeedback, setHapticFeedback] = useState<boolean>(true);
  const [soundFeedback, setSoundFeedback] = useState<boolean>(true);
  const [isCompletedToast, setIsCompletedToast] = useState<boolean>(false);
  const [isBeadAnimating, setIsBeadAnimating] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('sahebworld_mala_count', String(count));
      localStorage.setItem('sahebworld_mala_rounds', String(totalMalas));
    } catch {}
  }, [count, totalMalas]);

  // Haptic feedback & click sound simulation via Web Audio
  const triggerFeedback = (isTargetHit = false) => {
    if (hapticFeedback && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(isTargetHit ? [100, 50, 100] : 30);
    }

    if (soundFeedback && typeof window !== 'undefined') {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);

          if (isTargetHit) {
            // Auspicious bell ping
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
            osc.start();
            osc.stop(ctx.currentTime + 0.8);
          } else {
            // Gentle wooden bead click
            osc.frequency.setValueAtTime(320, ctx.currentTime);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
          }
        }
      } catch {}
    }
  };

  const handleIncrement = () => {
    setIsBeadAnimating(true);
    setTimeout(() => setIsBeadAnimating(false), 200);

    const nextCount = count + 1;
    if (nextCount >= target) {
      triggerFeedback(true);
      setTotalMalas((prev) => prev + 1);
      setCount(0);
      setIsCompletedToast(true);
      setTimeout(() => setIsCompletedToast(false), 3500);
    } else {
      triggerFeedback(false);
      setCount(nextCount);
    }
  };

  const handleReset = () => {
    if (window.confirm(language === 'pb' ? 'ਕੀ ਤੁਸੀਂ ਮਾਲਾ ਗਿਣਤੀ ਰੀਸੈਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?' : language === 'en' ? 'Reset Jaap count to zero?' : 'क्या आप जाप गिनती रीसेट करना चाहते हैं?')) {
      setCount(0);
    }
  };

  const labels = {
    title: language === 'pb' ? 'ਸਿਮਰਨ ਜਾਪ ਮਾਲਾ' : language === 'en' ? 'Jaap Mala Counter' : 'सिमरन जाप माला',
    satyanaam: language === 'pb' ? 'ਸਤਯਨਾਮ ਸਤਯਨਾਮ' : language === 'en' ? 'Satyanaam Simran' : 'सत्यनाम सत्यनाम',
    malaRound: language === 'pb' ? 'ਪੂਰੀਆਂ ਮਾਲਾਵਾਂ' : language === 'en' ? 'Completed Malas' : 'पूर्ण मालाएं',
    tapToCount: language === 'pb' ? 'ਜਾਪ ਲਈ ਟੈਪ ਕਰੋ' : language === 'en' ? 'Tap to Count Bead' : 'जाप हेतु मनका दबाएं',
    beadsLeft: language === 'pb' ? 'ਬਾਕੀ ਮਣਕੇ' : language === 'en' ? 'Remaining' : 'शेष मनके',
    roundDone: language === 'pb' ? '੧ ਮਾਲਾ ਸੰਪੂਰਨ ਹੋਈ! ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!' : language === 'en' ? '1 Mala Completed! Saheb Bandagi Saheb!' : '१ माला पूर्ण हुई! साहेब बंदगी साहेब!',
  };

  return (
    <div className={`bg-[#faf7ee] dark:bg-[#1a1612] w-full border-0 rounded-none shadow-none p-4 sm:p-6 select-none`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xl">📿</span>
          <div>
            <h3 className="font-serif font-bold text-sm text-gray-800 dark:text-gray-100 leading-tight">
              {labels.title}
            </h3>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
              {labels.satyanaam}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSoundFeedback(!soundFeedback)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-amber-100 dark:hover:bg-zinc-800 transition"
            title="Sound Feedback"
          >
            {soundFeedback ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-amber-100 dark:hover:bg-zinc-800 transition"
            title="Reset"
          >
            <RotateCcw size={15} />
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-amber-100 dark:hover:bg-zinc-800 transition flex items-center gap-1"
            >
              <ArrowLeft size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Target Selector */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-serif">
          {labels.beadsLeft}: <strong className="text-amber-700 dark:text-amber-400">{target - count}</strong>
        </span>
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl">
          {MALA_TARGETS.map((tVal) => (
            <button
              key={tVal}
              onClick={() => {
                setTarget(tVal);
                if (count >= tVal) setCount(0);
              }}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition ${
                target === tVal
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
              }`}
            >
              {tVal}
            </button>
          ))}
        </div>
      </div>

      {/* Big Interactive Bead Bead Tap Zone */}
      <div className="relative flex flex-col items-center justify-center my-3">
        {/* Outer Circular Progress Ring */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="62"
              className="stroke-amber-100 dark:stroke-zinc-800 fill-none"
              strokeWidth="6"
            />
            <circle
              cx="72"
              cy="72"
              r="62"
              className="stroke-amber-600 dark:stroke-amber-500 fill-none transition-all duration-200"
              strokeWidth="6"
              strokeDasharray={2 * Math.PI * 62}
              strokeDashoffset={2 * Math.PI * 62 * (1 - count / target)}
              strokeLinecap="round"
            />
          </svg>

          {/* Center Interactive Button */}
          <button
            type="button"
            onClick={handleIncrement}
            className={`absolute inset-3 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center border-4 border-amber-200 dark:border-amber-800 ${
              isBeadAnimating ? 'scale-90 ring-4 ring-amber-400' : ''
            }`}
          >
            <span className="text-3xl font-black font-mono tracking-tight leading-none drop-shadow-sm">
              {count}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-100 mt-1">
              / {target}
            </span>
          </button>
        </div>

        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-serif mt-2">
          {labels.tapToCount}
        </p>
      </div>

      {/* Rounds Completed & Completion Notification */}
      <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
        <span className="text-gray-500 dark:text-gray-400 font-serif">
          {labels.malaRound}:
        </span>
        <span className="font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300">
          ✨ {totalMalas}
        </span>
      </div>

      {isCompletedToast && (
        <div className="mt-2 p-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-200 text-xs font-serif text-center animate-bounce">
          🌸 {labels.roundDone}
        </div>
      )}
    </div>
  );
};
