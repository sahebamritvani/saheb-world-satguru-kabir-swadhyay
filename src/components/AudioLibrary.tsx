import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ListMusic, Mic2, Disc, ChevronRight, Music2, Share2, Headphones, ArrowLeft, Bookmark, BookmarkCheck, Sparkles, Volume2, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface AudioLibraryProps {
  language: Language;
  onClose?: () => void;
}

interface AudioTrack {
  id: string;
  title: Record<Language, string>;
  category: 'granth' | 'bhajan' | 'satsang';
  duration: string;
  artist: string;
  description: Record<Language, string>;
}

const parseDurationToSeconds = (durationStr: string): number => {
  const parts = durationStr.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
};

const formatSecondsToTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const TRACKS_DATABASE: AudioTrack[] = [
  {
    id: 'track-satyanaam-dhun',
    title: {
      hi: 'सत्यनाम परम पावन अमृत धुन (४३२ हर्ट्ज़)',
      pb: 'ਸਤਯਨਾਮ ਪਰਮ ਪਾਵਨ ਅੰਮ੍ਰਿਤ ਧੁਨ (੪੩੨ Hz)',
      en: 'Satyanaam Sacred Amrit Dhun (432 Hz Resonance)',
    },
    category: 'satsang',
    duration: '21:00',
    artist: 'सतगुरु कबीर साहेब ध्यान आश्रम',
    description: {
      hi: 'घट के भीतर अनहद नाद और सूरत-शब्द योग को जाग्रत करने वाली दिव्य ध्वनि',
      pb: 'ਹਿਰਦੇ ਅੰਦਰ ਅਨਹਦ ਨਾਦ ਤੇ ਸੁਰਤ-ਸ਼ਬਦ ਨੂੰ ਜਗਾਉਣ ਵਾਲੀ ਧੁਨ',
      en: 'Inner resonance to activate Surat-Shabad Yoga and peace',
    },
  },
  {
    id: 'track-discourse-soul',
    title: {
      hi: 'सत्यनाम भेद रहस्य सत्संग प्रवचन',
      pb: 'ਸਤਯਨਾਮ ਭੇਦ ਰਹੱਸ ਸਤਿਸੰਗ ਪ੍ਰਵਚਨ',
      en: 'The Mystery of Satyanaam & Surat-Shabad',
    },
    category: 'satsang',
    duration: '45:15',
    artist: 'पूज्य आचार्य श्री जी',
    description: {
      hi: 'मनुष्य जन्म का परम लक्ष्य और सत्यनाम सुमिरन की गुप्त कुंजी',
      pb: 'ਮਨੁੱਖਾ ਜਨਮ ਦਾ ਪਰਮ ਲਕਸ਼ ਤੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਦੀ ਗੁਪਤ ਕੁੰਜੀ',
      en: 'The ultimate purpose of human life and the key of Satnam meditation',
    },
  },
  {
    id: 'track-kabir-sagar-creation',
    title: {
      hi: 'कबीर सागर: सृष्टि रचना एवं आदि अनादि सत्य कथा',
      pb: 'ਕਬੀਰ ਸਾਗਰ: ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਤੇ ਆਦਿ ਸਤਿ ਕਥਾ',
      en: 'Kabir Sagar: Genesis of the Cosmos & Eternity',
    },
    category: 'satsang',
    duration: '32:40',
    artist: 'कबीर पंथी सत्संग मण्डल',
    description: {
      hi: 'सृष्टि उत्पत्ति से लेकर सत्यलोक गमन तक की प्रामाणिक ऐतिहासिक गाथा',
      pb: 'ਸ੍ਰਇਸ਼ਟੀ ਦੀ ਸਾਜਨਾ ਤੋਂ ਸੱਚਖੰਡ ਗਮਨ ਤੱਕ ਦੀ ਪਾਵਨ ਕਥਾ',
      en: 'The authentic historical narrative from genesis to the eternal realm',
    },
  },
  {
    id: 'track-bijak-essence',
    title: {
      hi: 'बीजक सार: पाखंड खण्डन व परब्रह्म साक्षात्कार',
      pb: 'ਬੀਜਕ ਸਾਰ: ਪਾਖੰਡ ਖੰਡਨ ਤੇ ਸੱਚਾ ਰੂਹਾਨੀ ਉਪਦੇਸ਼',
      en: 'Essence of Bijak: Dispelling Illusion & Experiencing Truth',
    },
    category: 'satsang',
    duration: '15:10',
    artist: 'सतगुरु कबीर विचार सभा',
    description: {
      hi: 'बीजक साखियों और रमैनी का तत्व ज्ञान और रहस्यमय विश्लेषण',
      pb: 'ਬੀਜਕ ਸਾਖੀਆਂ ਤੇ ਰਮੈਣੀ ਦਾ ਅਧਿਆਤਮਿਕ ਤੱਤ ਗਿਆਨ',
      en: 'A profound spiritual analysis of the sacred Bijak couplets and hymns',
    },
  },
];

export const AudioLibrary: React.FC<AudioLibraryProps> = ({ language, onClose }) => {
  const t = translations[language];
  const { theme } = useAppTheme();
  const isHi = language === 'hi';
  const isPb = language === 'pb';

  const [activeTrack, setActiveTrack] = useState<AudioTrack | null>(TRACKS_DATABASE[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'bookmarks' | 'granth' | 'bhajan' | 'satsang'>('all');

  // Interactive Playhead Current Time (seconds)
  const [currentTime, setCurrentTime] = useState<number>(0);

  // Audio Bookmarks state persisted in localStorage
  const [bookmarkedTrackIds, setBookmarkedTrackIds] = useState<string[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_audio_bookmarks');
        return saved ? JSON.parse(saved) : ['track-satyanaam-dhun'];
      }
    } catch {}
    return ['track-satyanaam-dhun'];
  });

  // Track Segment Saved Timestamps state persisted in localStorage
  interface SavedTimestamp {
    id: string;
    seconds: number;
    label: string;
    createdAt: string;
  }
  const [savedTimestamps, setSavedTimestamps] = useState<Record<string, SavedTimestamp[]>>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_audio_saved_timestamps');
        return saved ? JSON.parse(saved) : {};
      }
    } catch {}
    return {};
  });

  // Effect to load last preserved playhead position for the active track
  useEffect(() => {
    if (activeTrack) {
      try {
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem(`sahebworld_audio_last_time_${activeTrack.id}`);
          if (saved) {
            setCurrentTime(Number(saved));
          } else {
            setCurrentTime(0);
          }
        }
      } catch {
        setCurrentTime(0);
      }
    }
  }, [activeTrack]);

  // Simulated playback playhead ticker effect
  useEffect(() => {
    let interval: number | null = null;
    if (isPlaying && activeTrack) {
      const maxSeconds = parseDurationToSeconds(activeTrack.duration);
      interval = window.setInterval(() => {
        setCurrentTime(prev => {
          const next = prev + 1;
          if (next >= maxSeconds) {
            setIsPlaying(false);
            if (interval) clearInterval(interval);
            return 0;
          }
          // Save playhead to localStorage for resuming later
          try {
            localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(next));
          } catch {}
          return next;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeTrack]);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('sahebworld_audio_bookmarks', JSON.stringify(bookmarkedTrackIds));
      }
    } catch {}
  }, [bookmarkedTrackIds]);

  const toggleBookmark = (trackId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sacredHaptics.lightTap();
    setBookmarkedTrackIds(prev => 
      prev.includes(trackId) ? prev.filter(id => id !== trackId) : [...prev, trackId]
    );
  };

  const selectTrack = (track: AudioTrack) => {
    setActiveTrack(track);
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(`sahebworld_audio_last_time_${track.id}`);
        setCurrentTime(saved ? Number(saved) : 0);
      }
    } catch {
      setCurrentTime(0);
    }
  };

  const togglePlay = (track: AudioTrack) => {
    sacredHaptics.lightTap();
    if (activeTrack?.id === track.id) {
      if (isPlaying) {
        satyanaamAudio.pause();
        setIsPlaying(false);
      } else {
        satyanaamAudio.play();
        setIsPlaying(true);
      }
    } else {
      selectTrack(track);
      satyanaamAudio.ringSatyanaamTripleChime();
      satyanaamAudio.play();
      setIsPlaying(true);
    }
  };

  const saveCurrentTimestamp = (customLabel?: string) => {
    if (!activeTrack) return;
    sacredHaptics.lightTap();
    const trackId = activeTrack.id;
    const timeStr = formatSecondsToTime(currentTime);
    const defaultLabel = isHi 
      ? `सत्संग अंश (${timeStr})` 
      : isPb 
      ? `ਸਤਿਸੰਗ ਅੰਸ਼ (${timeStr})` 
      : `Satsang segment (${timeStr})`;
    const label = customLabel?.trim() || defaultLabel;

    const newTimestamp: SavedTimestamp = {
      id: Date.now().toString(),
      seconds: currentTime,
      label,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSavedTimestamps(prev => {
      const next = { ...prev };
      if (!next[trackId]) {
        next[trackId] = [];
      }
      if (!next[trackId].some(t => t.seconds === currentTime)) {
        next[trackId] = [...next[trackId], newTimestamp].sort((a, b) => a.seconds - b.seconds);
      }
      try {
        localStorage.setItem('sahebworld_audio_saved_timestamps', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const deleteTimestamp = (trackId: string, timestampId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    setSavedTimestamps(prev => {
      const next = { ...prev };
      if (next[trackId]) {
        next[trackId] = next[trackId].filter(t => t.id !== timestampId);
        try {
          localStorage.setItem('sahebworld_audio_saved_timestamps', JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  };

  const resumeFromTimestamp = (seconds: number) => {
    sacredHaptics.lightTap();
    setCurrentTime(seconds);
    if (activeTrack) {
      try {
        localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(seconds));
      } catch {}
    }
    satyanaamAudio.play();
    setIsPlaying(true);
  };

  const filteredTracks = TRACKS_DATABASE.filter(tr => {
    if (selectedFilter === 'bookmarks') return bookmarkedTrackIds.includes(tr.id);
    if (selectedFilter === 'all') return true;
    return tr.category === selectedFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto space-y-6 pb-20"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
            {t.audioLibraryTitle}
          </h2>
          <p className="text-xs opacity-60 italic">
            {isHi ? 'सत्यनाम पावन धुन, आरती, ग्रंथ वाणी एवं कबीर अमृत संगीत' : isPb ? 'ਸਤਯਨਾਮ ਅੰਮ੍ਰਿਤ ਧੁਨ ਤੇ ਪਾਵਨ ਗ੍ਰੰਥ ਬਾਣੀ' : t.audioLibrarySubtitle}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm">
            <Headphones className="w-6 h-6" />
          </div>
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

      {/* Featured Active Player */}
      <AnimatePresence mode="wait">
        {activeTrack && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-6 rounded-3xl shadow-xl border relative overflow-hidden group"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Disc className={`w-36 h-36 ${isPlaying ? 'animate-spin-slow' : ''}`} />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-amber-600 shadow-inner flex items-center justify-center text-white shrink-0 relative overflow-hidden">
                  <Music2 className="w-12 h-12" />
                  {isPlaying && (
                    <span className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                      {isPlaying ? '▶ ' + t.playingNowLabel : '⏸ तैयार'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold">
                      {activeTrack.duration}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-serif mb-1 leading-tight" style={{ color: theme.textPrimary }}>
                    {activeTrack.title[language]}
                  </h3>
                  <p className="text-xs opacity-75 mb-3" style={{ color: theme.textSecondary }}>
                    {activeTrack.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <button 
                      onClick={() => togglePlay(activeTrack)}
                      style={{ backgroundColor: theme.sacredMaroon, color: '#FFF' }}
                      className="w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer"
                      title={isPlaying ? 'विराम (Pause)' : 'श्रवण करें (Play)'}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                    </button>
                    
                    {/* Bookmark Button in Player */}
                    <button
                      onClick={(e) => toggleBookmark(activeTrack.id, e)}
                      className="p-3 rounded-full border transition cursor-pointer hover:scale-105"
                      style={{
                        borderColor: theme.cardBorder,
                        backgroundColor: bookmarkedTrackIds.includes(activeTrack.id) ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                        color: bookmarkedTrackIds.includes(activeTrack.id) ? '#D97706' : theme.textSecondary,
                      }}
                      title={bookmarkedTrackIds.includes(activeTrack.id) ? 'बुकमार्क हटाया' : 'ऑडियो बुकमार्क करें'}
                    >
                      {bookmarkedTrackIds.includes(activeTrack.id) ? (
                        <BookmarkCheck className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>

                    {/* Resume State Indicator if applicable */}
                    {currentTime > 0 && !isPlaying && (
                      <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                        ⏱ {isHi ? `पिछली स्थिति से पुनः प्रारंभ: ${formatSecondsToTime(currentTime)}` : `Resume position: ${formatSecondsToTime(currentTime)}`}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Seek Bar & Playhead Controls */}
              <div className="space-y-1.5 pt-2 border-t" style={{ borderColor: theme.cardBorder }}>
                <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
                  <span>{formatSecondsToTime(currentTime)}</span>
                  <span>{activeTrack.duration}</span>
                </div>
                <div className="relative w-full h-2 bg-black/10 dark:bg-white/10 rounded-full cursor-pointer group">
                  <input
                    type="range"
                    min={0}
                    max={parseDurationToSeconds(activeTrack.duration)}
                    value={currentTime}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentTime(val);
                      try {
                        localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(val));
                      } catch {}
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-100"
                    style={{ width: `${(currentTime / parseDurationToSeconds(activeTrack.duration)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Segment Tagger Form */}
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl border" style={{ borderColor: theme.cardBorder }}>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 w-full">
                    <label className="block text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">
                      📌 {isHi ? 'विशिष्ट सत्संग प्रसंग समय बचाएं (Bookmark Segment)' : 'Tag/Save Discourse Segment'}
                    </label>
                    <input
                      type="text"
                      id="audio-custom-label-input"
                      placeholder={isHi ? "प्रसंग का शीर्षक (उदा. आदि सत्कथा का मर्म)" : "Title for this segment (e.g. key revelation)"}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs bg-white dark:bg-stone-900 focus:ring-1 focus:ring-amber-500 font-semibold focus:outline-hidden"
                      style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('audio-custom-label-input') as HTMLInputElement;
                      const label = input ? input.value.trim() : '';
                      saveCurrentTimestamp(label);
                      if (input) input.value = '';
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-black text-xs transition cursor-pointer shadow-md shrink-0 sm:mt-4 whitespace-nowrap"
                  >
                    {isHi ? 'समय सहेजें' : 'Save Timestamp'}
                  </button>
                </div>
              </div>

              {/* Saved Segments / Timestamps List */}
              {savedTimestamps[activeTrack.id] && savedTimestamps[activeTrack.id].length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <BookmarkCheck className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600">
                      {isHi ? 'सहेजे गए सत्संग अंश' : 'Saved Satsang Segments'} ({savedTimestamps[activeTrack.id].length})
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto no-scrollbar">
                    {savedTimestamps[activeTrack.id].map((ts) => (
                      <div 
                        key={ts.id}
                        onClick={() => resumeFromTimestamp(ts.seconds)}
                        className="p-3 rounded-xl border flex items-center justify-between gap-3 text-xs bg-black/5 dark:bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/30 transition cursor-pointer group shadow-2xs"
                        style={{ borderColor: theme.cardBorder }}
                      >
                        <div className="flex items-center gap-2.5 truncate font-semibold">
                          <span className="font-mono text-amber-700 dark:text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md font-bold">
                            {formatSecondsToTime(ts.seconds)}
                          </span>
                          <span className="truncate" style={{ color: theme.textPrimary }}>{ts.label}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => deleteTimestamp(activeTrack.id, ts.id, e)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-500/10 transition cursor-pointer shrink-0"
                          title="Delete saved segment"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs (Including Audio Bookmarks) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedFilter('all')}
          style={{
            backgroundColor: selectedFilter === 'all' ? theme.sacredMaroon : theme.cardBg,
            color: selectedFilter === 'all' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'all' ? theme.sacredMaroon : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs"
        >
          {isHi ? 'सभी ऑडियो' : isPb ? 'ਸਾਰੇ ਆਡੀਓ' : 'All Audio'} ({TRACKS_DATABASE.length})
        </button>

        <button
          onClick={() => setSelectedFilter('bookmarks')}
          style={{
            backgroundColor: selectedFilter === 'bookmarks' ? '#D97706' : theme.cardBg,
            color: selectedFilter === 'bookmarks' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'bookmarks' ? '#D97706' : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap flex items-center gap-1.5 cursor-pointer transition shadow-2xs"
        >
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>{isHi ? 'बुकमार्क किए गए ऑडियो' : isPb ? 'ਬੁੱਕਮਾਰਕ ਆਡੀਓ' : 'Bookmarked Audio'} ({bookmarkedTrackIds.length})</span>
        </button>

        <button
          onClick={() => setSelectedFilter('satsang')}
          style={{
            backgroundColor: selectedFilter === 'satsang' ? theme.sacredMaroon : theme.cardBg,
            color: selectedFilter === 'satsang' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'satsang' ? theme.sacredMaroon : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs"
        >
          {t.playSatsangBtn}
        </button>

        <button
          onClick={() => setSelectedFilter('granth')}
          style={{
            backgroundColor: selectedFilter === 'granth' ? theme.sacredMaroon : theme.cardBg,
            color: selectedFilter === 'granth' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'granth' ? theme.sacredMaroon : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs"
        >
          {t.granthAudioLabel}
        </button>

        <button
          onClick={() => setSelectedFilter('bhajan')}
          style={{
            backgroundColor: selectedFilter === 'bhajan' ? theme.sacredMaroon : theme.cardBg,
            color: selectedFilter === 'bhajan' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'bhajan' ? theme.sacredMaroon : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs"
        >
          {t.bhajanAudioLabel}
        </button>
      </div>

      {/* Tracks List */}
      <div className="space-y-3">
        {filteredTracks.length === 0 ? (
          <div className="p-8 rounded-3xl border text-center space-y-2" style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}>
            <Bookmark className="w-8 h-8 opacity-30 mx-auto" />
            <p className="font-bold text-sm" style={{ color: theme.textPrimary }}>
              {isHi ? 'कोई बुकमार्क किया गया ऑडियो नहीं मिला' : 'No bookmarked audios found'}
            </p>
            <p className="text-xs opacity-60">
              {isHi ? 'किसी भी ट्रैक पर बुकमार्क आइकन दबाकर अपनी पसंदीदा सूची में जोड़ें।' : 'Click the bookmark icon on any track to save it here.'}
            </p>
          </div>
        ) : (
          filteredTracks.map(track => {
            const isActive = activeTrack?.id === track.id;
            const isBookmarked = bookmarkedTrackIds.includes(track.id);

            return (
              <div 
                key={track.id}
                onClick={() => togglePlay(track)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 hover:shadow-md ${
                  isActive ? 'bg-amber-500/10 border-amber-500/40' : ''
                }`}
                style={{ 
                  backgroundColor: isActive ? 'rgba(245, 158, 11, 0.1)' : theme.cardBg,
                  borderColor: isActive ? theme.accentGold : theme.cardBorder 
                }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                  isActive && isPlaying ? 'bg-amber-600 text-white shadow-md' : 'bg-black/5 dark:bg-white/10 group-hover:bg-amber-100'
                }`}>
                  {isActive && isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 text-amber-700" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold truncate ${isActive ? 'text-amber-900 dark:text-amber-200' : ''}`} style={{ color: theme.textPrimary }}>
                      {track.title[language]}
                    </span>
                  </div>
                  <p className="text-[11px] opacity-75 truncate" style={{ color: theme.textSecondary }}>
                    {track.description[language]}
                  </p>
                  <div className="text-[10px] opacity-50 uppercase tracking-wider mt-0.5 font-mono">
                    {track.duration} • {track.artist}
                  </div>
                </div>

                {/* Bookmark Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => toggleBookmark(track.id, e)}
                  className="p-2 rounded-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer shrink-0"
                  title={isBookmarked ? 'बुकमार्क हटाएं' : 'बुकमार्क करें'}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-amber-600" />
                  ) : (
                    <Bookmark className="w-4 h-4 opacity-40 hover:opacity-100" />
                  )}
                </button>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};
