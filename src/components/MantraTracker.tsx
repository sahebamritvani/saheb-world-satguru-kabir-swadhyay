import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, History, RotateCcw, Plus, CheckCircle2, Trophy, Clock, Bell, ArrowLeft, X, Volume2, VolumeX, Activity, Sparkles, Disc, Sliders } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { satyanaamAudio } from '../services/audioDhun';
import { NityaVaniSettings } from './NityaVaniSettings';

interface MantraTrackerProps {
  language: Language;
  onClose?: () => void;
}

interface MantraSession {
  date: string;
  count: number;
}

export const MantraTracker: React.FC<MantraTrackerProps> = ({ language: propLanguage, onClose }) => {
  const { language: contextLang, t: contextT } = useLanguage();
  const activeLang = propLanguage || contextLang;
  const language = activeLang;
  const t = translations[activeLang] || contextT;
  const { theme } = useAppTheme();

  const [totalMalas, setTotalMalas] = useState(0);
  const [sessions, setSessions] = useState<MantraSession[]>([]);
  const [dailyGoal, setDailyGoal] = useState(11);
  const [isRhythmPlaying, setIsRhythmPlaying] = useState(false);
  const [beadProgress, setBeadProgress] = useState(0); // 0 to 108
  const [waveformPulse, setWaveformPulse] = useState(0);
  const [showSpiritualPrefsModal, setShowSpiritualPrefsModal] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedCount = localStorage.getItem('sahebworld_mantra_total');
    const savedSessions = localStorage.getItem('sahebworld_mantra_sessions');
    const savedGoal = localStorage.getItem('sahebworld_mantra_goal');
    const savedBeads = localStorage.getItem('sahebworld_mantra_beads');

    if (savedCount) setTotalMalas(parseInt(savedCount));
    if (savedSessions) setSessions(JSON.parse(savedSessions));
    if (savedGoal) setDailyGoal(parseInt(savedGoal));
    if (savedBeads) setBeadProgress(parseInt(savedBeads));
  }, []);

  const saveToStorage = (count: number, sess: MantraSession[], beads: number) => {
    localStorage.setItem('sahebworld_mantra_total', String(count));
    localStorage.setItem('sahebworld_mantra_sessions', JSON.stringify(sess));
    localStorage.setItem('sahebworld_mantra_beads', String(beads));
  };

  const handleIncrementBead = () => {
    let nextBead = beadProgress + 1;
    let newTotal = totalMalas;
    const today = new Date().toISOString().split('T')[0];
    const newSessions = [...sessions];

    // Trigger visual pulse
    setWaveformPulse((prev) => prev + 1);

    if (nextBead >= 108) {
      nextBead = 0;
      newTotal += 1;
      setTotalMalas(newTotal);

      const todayIndex = newSessions.findIndex(s => s.date === today);
      if (todayIndex > -1) {
        newSessions[todayIndex].count += 1;
      } else {
        newSessions.unshift({ date: today, count: 1 });
      }
      setSessions(newSessions);
    }

    setBeadProgress(nextBead);
    saveToStorage(newTotal, newSessions, nextBead);
  };

  const handleLogFullMala = () => {
    const newTotal = totalMalas + 1;
    setTotalMalas(newTotal);

    const today = new Date().toISOString().split('T')[0];
    const newSessions = [...sessions];
    const todayIndex = newSessions.findIndex(s => s.date === today);

    if (todayIndex > -1) {
      newSessions[todayIndex].count += 1;
    } else {
      newSessions.unshift({ date: today, count: 1 });
    }

    setSessions(newSessions);
    setBeadProgress(0);
    saveToStorage(newTotal, newSessions, 0);
    setWaveformPulse((prev) => prev + 10);
  };

  const toggleRhythmAudio = () => {
    if (isRhythmPlaying) {
      satyanaamAudio.stop();
      setIsRhythmPlaying(false);
    } else {
      satyanaamAudio.play();
      setIsRhythmPlaying(true);
    }
  };

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const resetProgress = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    setTotalMalas(0);
    setSessions([]);
    setBeadProgress(0);
    if (isRhythmPlaying) {
      satyanaamAudio.stop();
      setIsRhythmPlaying(false);
    }
    localStorage.removeItem('sahebworld_mantra_total');
    localStorage.removeItem('sahebworld_mantra_sessions');
    localStorage.removeItem('sahebworld_mantra_beads');
    setShowResetConfirm(false);
  };

  const todayCount = sessions.find(s => s.date === new Date().toISOString().split('T')[0])?.count || 0;
  const progressPercent = Math.min((todayCount / dailyGoal) * 100, 100);

  // 36 Audio Waveform Bars Generator
  const numBars = 36;
  const activeBarsCount = Math.round((beadProgress / 108) * numBars);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Standardized Sacred Top Bar */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      <div className="flex items-center justify-end px-2">
        {onClose && (
          <button
            type="button"
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

      <div className="text-center">
        <h2 className="text-3xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
          {t.mantraTrackerTitle}
        </h2>
        <p className="text-sm opacity-70 italic">{t.mantraTrackerSubtitle}</p>
      </div>

      {/* Main Counter Card */}
      <div 
        className="p-8 rounded-3xl shadow-xl border text-center space-y-6 relative overflow-hidden"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-black/5">
          <motion.div 
            className="h-full bg-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest opacity-50 block">{t.totalCountsLabel}</span>
          <div className="text-6xl font-black font-serif" style={{ color: theme.accentGold }}>
            {totalMalas}
          </div>
          <span className="text-xs font-bold opacity-60">
            {totalMalas === 1 ? (language === 'en' ? 'Mala' : t.malasLabel) : t.malasLabel} {t.goalAchieved}
          </span>
        </div>

        {/* --- AUDIO WAVEFORM NAAM JAP PROGRESS VISUALIZER --- */}
        <div className="p-5 rounded-2xl bg-amber-950/5 border border-amber-500/20 space-y-3">
          <div className="flex items-center justify-between text-xs font-serif font-bold">
            <span className="flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
              <Activity className="w-4 h-4 text-amber-600 animate-pulse" />
              {language === 'pb' ? 'ਨਾਮ ਜਪ ਆਡੀਓ ਵੇਵਫਾਰਮ (108 ਮਣਕੇ)' : language === 'en' ? 'Naam Jap Audio Waveform (108 Beads)' : 'नाम जप ऑडियो वेवफॉर्म प्रगति (108 मनके)'}
            </span>
            <span className="text-amber-800 font-mono font-black">
              {beadProgress} / 108 {language === 'hi' ? 'मनका' : language === 'pb' ? 'ਮਣਕਾ' : 'Bead'}
            </span>
          </div>

          {/* Interactive 36-Bar Audio Waveform Container */}
          <div className="h-16 flex items-end justify-between gap-1 px-2 py-1 bg-amber-950/10 rounded-xl border border-amber-500/10 overflow-hidden">
            {Array.from({ length: numBars }).map((_, i) => {
              const isActive = i <= activeBarsCount;
              // Generate organic sinusoidal heights for waveform
              const baseHeightPercent = 20 + Math.abs(Math.sin((i / numBars) * Math.PI * 3 + waveformPulse * 0.2)) * 75;
              const isPulsing = isRhythmPlaying || waveformPulse > 0;

              return (
                <motion.div
                  key={i}
                  animate={{
                    height: isPulsing ? [`${baseHeightPercent * 0.6}%`, `${baseHeightPercent}%`, `${baseHeightPercent * 0.8}%`] : `${baseHeightPercent}%`,
                  }}
                  transition={{
                    duration: 0.6 + (i % 5) * 0.1,
                    repeat: isPulsing ? Infinity : 0,
                    repeatType: 'mirror',
                  }}
                  className={`flex-1 rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-300 shadow-sm shadow-amber-500/50'
                      : 'bg-amber-900/20'
                  }`}
                />
              );
            })}
          </div>

          {/* Audio Chanting Controls & Jap Taps */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={toggleRhythmAudio}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isRhythmPlaying
                  ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                  : 'bg-white dark:bg-zinc-800 text-amber-900 dark:text-amber-200 border-amber-200'
              }`}
            >
              {isRhythmPlaying ? <Volume2 className="w-3.5 h-3.5 animate-bounce" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>
                {isRhythmPlaying
                  ? (language === 'pb' ? 'ਧੁਨ ਰੋਕੋ' : language === 'en' ? 'Stop Rhythm' : 'ध्वनि रोकें')
                  : (language === 'pb' ? 'ਸਤਯਨਾਮ ਧੁਨ ਸੁਣੋ' : language === 'en' ? 'Play Rhythm' : 'सत्यनाम ध्वनि चालू करें')
                }
              </span>
            </button>

            <button
              onClick={handleIncrementBead}
              style={{ backgroundColor: theme.sacredMaroon }}
              className="px-4 py-1.5 rounded-xl text-white text-xs font-bold font-serif flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                +1 {language === 'pb' ? 'ਮਣਕਾ ਜਪੋ' : language === 'en' ? 'Jap Bead' : 'मनका जपें'}
              </span>
            </button>
          </div>
        </div>

        {/* Full Mala Log Action Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleLogFullMala}
            style={{ backgroundColor: theme.accentGold, color: '#FFF' }}
            className="w-32 h-32 rounded-full shadow-lg flex flex-col items-center justify-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <Plus className="w-8 h-8" />
            <span className="text-xs font-bold uppercase tracking-wider">{t.logMalaBtn}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-black/5 space-y-1">
            <Target className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <span className="text-[10px] uppercase font-black opacity-50 block">{t.dailyGoalLabel}</span>
            <div className="text-xl font-black">{dailyGoal}</div>
          </div>
          <div className="p-4 rounded-2xl bg-black/5 space-y-1">
            <TrendingUp className="w-4 h-4 mx-auto text-green-600 mb-1" />
            <span className="text-[10px] uppercase font-black opacity-50 block">{language === 'pb' ? 'ਅੱਜ' : language === 'hi' ? 'आज' : 'Today'}</span>
            <div className="text-xl font-black">{todayCount}</div>
          </div>
        </div>
      </div>

      {/* History */}
      <div 
        className="p-6 rounded-3xl shadow-md border space-y-4"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2">
            <History className="w-4 h-4 text-amber-500" />
            {t.mantraHistoryTitle}
          </h3>
          <button onClick={resetProgress} className="text-[10px] uppercase font-bold opacity-40 hover:opacity-100 flex items-center gap-1 cursor-pointer">
            <RotateCcw className="w-3 h-3" />
            {t.resetProgressBtn}
          </button>
        </div>

        <div className="space-y-2">
          {sessions.length === 0 ? (
            <p className="text-center py-8 text-xs opacity-40">{t.noSimranSessions}</p>
          ) : (
            sessions.slice(0, 7).map((s, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/5 border border-transparent hover:border-amber-200 transition">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.count >= dailyGoal ? 'bg-green-100' : 'bg-amber-100'}`}>
                    {s.count >= dailyGoal ? <Trophy className="w-4 h-4 text-green-600" /> : <Clock className="w-4 h-4 text-amber-600" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold">{new Date(s.date).toLocaleDateString(language === 'pb' ? 'pa-IN' : language === 'hi' ? 'hi-IN' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div className="text-[10px] opacity-60">{t.statusLabel}: {s.count >= dailyGoal ? t.simranGoalReached : t.simranGoalPending}</div>
                  </div>
                </div>
                <div className="text-sm font-black">{s.count} {t.malasLabel}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Spiritual Preferences & Daily Reminders Shortcut */}
      <div 
        className="p-5 rounded-3xl border border-amber-200 bg-amber-50/50 flex items-center justify-between gap-4"
        style={{ borderColor: theme.cardBorder }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black font-serif">
              {activeLang === 'pb' ? 'ਆਧਿਆਤਮਿਕ ਪ੍ਰਾਥਮਿਕਤਾਵਾਂ ਤੇ ਨਿਤਨੇਮ ਸਮਾਂ' : activeLang === 'en' ? 'Spiritual Preferences & Nitya Vani Time' : 'आध्यात्मिक प्राथमिकताएं एवं अमृतवेला समय'}
            </h4>
            <p className="text-[10px] opacity-60">
              {activeLang === 'pb' ? 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਸਿਮਰਨ ਤੇ ਨਿਤਨੇਮ ਲਈ ਨੋਟੀਫਿਕੇਸ਼ਨ ਸੈਟਿੰਗਜ਼' : activeLang === 'en' ? 'Configure Amritvela simran & daily Vani notification timing' : 'अमृतवेला नाम-सिमरन व नित्य वाणी हेतु प्राथमिकताएं'}
            </p>
          </div>
        </div>
        <button 
          onClick={() => setShowSpiritualPrefsModal(true)}
          style={{ backgroundColor: theme.sacredMaroon }}
          className="px-3.5 py-2 rounded-xl text-white text-[11px] font-bold font-serif flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer shrink-0"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>
            {activeLang === 'pb' ? 'ਪ੍ਰਾਥਮਿਕਤਾਵਾਂ' : activeLang === 'en' ? 'Preferences' : 'आध्यात्मिक प्राथमिकताएं'}
          </span>
        </button>
      </div>

      {/* Dedicated Spiritual Preferences & Nitya Vani Settings Modal */}
      <AnimatePresence>
        {showSpiritualPrefsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="max-w-lg w-full p-6 rounded-3xl border shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: theme.cardBorder }}>
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-600" />
                  <h3 className="text-base font-serif font-black" style={{ color: theme.sacredMaroon }}>
                    {activeLang === 'pb' ? 'ਆਧਿਆਤਮਿਕ ਪ੍ਰਾਥਮਿਕਤਾਵਾਂ' : activeLang === 'en' ? 'Spiritual Preferences' : 'आध्यात्मिक प्राथमिकताएं एवं नित्य नियम'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowSpiritualPrefsModal(false)}
                  className="p-1.5 rounded-full hover:bg-red-100 text-red-600 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <NityaVaniSettings language={activeLang} />

              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowSpiritualPrefsModal(false)}
                  style={{ backgroundColor: theme.accentGold }}
                  className="px-6 py-2 rounded-xl text-white text-xs font-bold font-serif cursor-pointer shadow-md"
                >
                  {activeLang === 'pb' ? 'ਸੰਪੂਰਨ' : activeLang === 'en' ? 'Done' : 'पूर्ण'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* In-app Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="max-w-md w-full p-6 rounded-3xl border shadow-2xl space-y-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mx-auto flex items-center justify-center">
                <RotateCcw className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-serif font-black" style={{ color: theme.textPrimary }}>
                {t.resetProgressBtn}?
              </h3>

              <p className="text-xs opacity-70 leading-relaxed">
                {language === 'pb' ? 'ਕੀ ਤੁਸੀਂ ਆਪਣੀ ਸਿਮਰਨ ਪ੍ਰਗਤੀ (Malas & History) ਨੂੰ ਰੀਸੈਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਹ ਕਾਰਵਾਈ ਵਾਪਸ ਨਹੀਂ ਲਈ ਜਾ ਸਕਦੀ।' : language === 'hi' ? 'क्या आप अपनी सिमरन प्रगति (Malas & History) को रीसेट करना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।' : 'Are you sure you want to reset all Simran progress and history? This action cannot be undone.'}
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  {language === 'pb' ? 'ਰੱਦ ਕਰੋ' : language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  onClick={confirmReset}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold transition hover:bg-red-700 cursor-pointer shadow-md"
                >
                  {t.resetProgressBtn}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
