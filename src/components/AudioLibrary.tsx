import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Music2,
  Headphones,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Disc,
  X,
  Upload,
  Trash2,
  Plus,
  Cloud,
  Link2,
  ShieldCheck,
  Pin,
  Download,
  CheckCircle2,
  WifiOff,
  Loader2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { isAdminAuthenticated } from '../services/adminAuth';
import {
  subscribeToSacredMedia,
  publishAdminSacredMedia,
  deleteAdminSacredMedia,
  SacredMediaItem,
} from '../services/sacredMediaService';
import {
  OfflineAudioMeta,
  pinAudioForOffline,
  unpinOfflineAudio,
  getOfflinePlayableUrl,
  subscribeToPinnedAudio,
  formatAudioSize,
} from '../services/offlineAudioCache';

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
  mediaUrl?: string;
  isCloud?: boolean;
}

const parseDurationToSeconds = (durationStr: string): number => {
  const parts = durationStr.split(':').map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
};

const formatSecondsToTime = (seconds: number): string => {
  const safe = isNaN(seconds) || seconds < 0 ? 0 : seconds;
  const mins = Math.floor(safe / 60);
  const secs = Math.floor(safe % 60);
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
      en: 'The ultimate purpose of human life and the key of Satyanaam meditation',
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

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [cloudItems, setCloudItems] = useState<SacredMediaItem[]>([]);

  // Admin upload drawer state
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'satsang' | 'granth' | 'bhajan'>('satsang');
  const [uploadArtist, setUploadArtist] = useState('सतगुरु कबीर साहेब सत्संग');
  const [uploadDuration, setUploadDuration] = useState('05:00');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadUrl, setUploadUrl] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [adminStatusMsg, setAdminStatusMsg] = useState<string | null>(null);

  const [pinnedMap, setPinnedMap] = useState<Record<string, OfflineAudioMeta>>({});
  const [pinProgress, setPinProgress] = useState<Record<string, number>>({});
  const [playingFromOfflineCache, setPlayingFromOfflineCache] = useState<boolean>(false);

  const htmlAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleAuth = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', handleAuth);
    const unsubMedia = subscribeToSacredMedia((items) => {
      setCloudItems(items.filter((it) => it.mediaType === 'audio'));
    });
    const unsubPinned = subscribeToPinnedAudio((map) => {
      setPinnedMap(map);
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuth);
      unsubMedia();
      unsubPinned();
      if (htmlAudioRef.current) {
        try {
          htmlAudioRef.current.pause();
          htmlAudioRef.current.removeAttribute('src');
          htmlAudioRef.current.load();
        } catch {}
      }
      satyanaamAudio.pause();
    };
  }, []);

  const allTracks: AudioTrack[] = useMemo(() => {
    const mappedCloud: AudioTrack[] = cloudItems.map((it) => {
      const cat: 'granth' | 'bhajan' | 'satsang' =
        it.category === 'granth' || it.category === 'bhajan' ? it.category : 'satsang';
      return {
        id: it.id,
        title: { hi: it.title, pb: it.title, en: it.title },
        category: cat,
        duration: it.duration || '05:00',
        artist: it.speakerOrArtist || 'सतगुरु कबीर साहेब आश्रम',
        description: {
          hi: it.description || 'एडमिन द्वारा प्रकाशित पावन ऑडियो वाणी',
          pb: it.description || 'ਐਡਮਿਨ ਵੱਲੋਂ ਪ੍ਰਕਾਸ਼ਿਤ ਪਾਵਨ ਆਡੀਓ ਬਾਣੀ',
          en: it.description || 'Sacred audio published by Admin',
        },
        mediaUrl: it.mediaUrl,
        isCloud: true,
      };
    });
    return [...mappedCloud, ...TRACKS_DATABASE];
  }, [cloudItems]);

  const [activeTrack, setActiveTrack] = useState<AudioTrack | null>(TRACKS_DATABASE[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'offline' | 'bookmarks' | 'granth' | 'bhajan' | 'satsang'>('all');

  // Interactive Playhead Current Time (seconds) and actual duration for real files
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [realAudioDuration, setRealAudioDuration] = useState<number>(0);

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

  // Load last preserved playhead position for active track
  useEffect(() => {
    if (activeTrack) {
      setRealAudioDuration(0);
      try {
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem(`sahebworld_audio_last_time_${activeTrack.id}`);
          setCurrentTime(saved ? Number(saved) : 0);
        }
      } catch {
        setCurrentTime(0);
      }
    }
  }, [activeTrack?.id]);

  // Simulated playback playhead ticker effect (for built-in synth tracks without mediaUrl)
  useEffect(() => {
    let interval: number | null = null;
    if (isPlaying && activeTrack && !activeTrack.mediaUrl) {
      const maxSeconds = parseDurationToSeconds(activeTrack.duration);
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1;
          if (maxSeconds > 0 && next >= maxSeconds) {
            setIsPlaying(false);
            if (interval) clearInterval(interval);
            return 0;
          }
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

  // Real HTML5 audio listeners for Admin-uploaded audio files / HTTPS URLs
  useEffect(() => {
    const audioEl = htmlAudioRef.current;
    if (!audioEl) return;

    const onLoadedMetadata = () => {
      if (audioEl.duration && !isNaN(audioEl.duration)) {
        setRealAudioDuration(Math.floor(audioEl.duration));
      }
    };
    const onTimeUpdate = () => {
      const sec = Math.floor(audioEl.currentTime || 0);
      setCurrentTime(sec);
      if (activeTrack) {
        try {
          localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(sec));
        } catch {}
      }
    };
    const onEnded = () => {
      setIsPlaying(false);
    };

    audioEl.addEventListener('loadedmetadata', onLoadedMetadata);
    audioEl.addEventListener('timeupdate', onTimeUpdate);
    audioEl.addEventListener('ended', onEnded);
    return () => {
      audioEl.removeEventListener('loadedmetadata', onLoadedMetadata);
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
      audioEl.removeEventListener('ended', onEnded);
    };
  }, [activeTrack?.id]);

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
    setBookmarkedTrackIds((prev) =>
      prev.includes(trackId) ? prev.filter((id) => id !== trackId) : [...prev, trackId]
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

  const togglePlay = async (track: AudioTrack) => {
    sacredHaptics.lightTap();
    const audioEl = htmlAudioRef.current;

    if (activeTrack?.id === track.id) {
      if (isPlaying) {
        if (track.mediaUrl && audioEl) {
          audioEl.pause();
        } else {
          satyanaamAudio.pause();
        }
        setIsPlaying(false);
      } else {
        if (track.mediaUrl && audioEl) {
          satyanaamAudio.pause();
          const playableUrl = (await getOfflinePlayableUrl(track.id, track.mediaUrl)) || track.mediaUrl;
          setPlayingFromOfflineCache(playableUrl.startsWith('blob:') || Boolean(pinnedMap[track.id]));
          if (audioEl.src !== playableUrl) {
            audioEl.src = playableUrl;
          }
          audioEl.play().catch(() => {});
        } else {
          if (audioEl) audioEl.pause();
          setPlayingFromOfflineCache(false);
          satyanaamAudio.play();
        }
        setIsPlaying(true);
      }
    } else {
      selectTrack(track);
      if (track.mediaUrl && audioEl) {
        satyanaamAudio.pause();
        const playableUrl = (await getOfflinePlayableUrl(track.id, track.mediaUrl)) || track.mediaUrl;
        setPlayingFromOfflineCache(playableUrl.startsWith('blob:') || Boolean(pinnedMap[track.id]));
        audioEl.src = playableUrl;
        audioEl.currentTime = 0;
        audioEl.play().catch(() => {});
      } else {
        if (audioEl) audioEl.pause();
        setPlayingFromOfflineCache(false);
        satyanaamAudio.ringSatyanaamTripleChime();
        satyanaamAudio.play();
      }
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

    setSavedTimestamps((prev) => {
      const next = { ...prev };
      if (!next[trackId]) {
        next[trackId] = [];
      }
      if (!next[trackId].some((t) => t.seconds === currentTime)) {
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
    setSavedTimestamps((prev) => {
      const next = { ...prev };
      if (next[trackId]) {
        next[trackId] = next[trackId].filter((t) => t.id !== timestampId);
        try {
          localStorage.setItem('sahebworld_audio_saved_timestamps', JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  };

  const resumeFromTimestamp = async (seconds: number) => {
    sacredHaptics.lightTap();
    setCurrentTime(seconds);
    if (activeTrack) {
      try {
        localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(seconds));
      } catch {}
      if (activeTrack.mediaUrl && htmlAudioRef.current) {
        const playableUrl = (await getOfflinePlayableUrl(activeTrack.id, activeTrack.mediaUrl)) || activeTrack.mediaUrl;
        setPlayingFromOfflineCache(playableUrl.startsWith('blob:') || Boolean(pinnedMap[activeTrack.id]));
        if (htmlAudioRef.current.src !== playableUrl) {
          htmlAudioRef.current.src = playableUrl;
        }
        htmlAudioRef.current.currentTime = seconds;
        htmlAudioRef.current.play().catch(() => {});
      } else {
        setPlayingFromOfflineCache(false);
        satyanaamAudio.play();
      }
    }
    setIsPlaying(true);
  };

  const handleTogglePinOffline = async (e: React.MouseEvent, track: AudioTrack) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    if (!track.mediaUrl) return;

    if (pinnedMap[track.id]) {
      await unpinOfflineAudio(track.id);
      setAdminStatusMsg(
        isHi
          ? `✓ "${track.title[language] || track.title.hi}" ऑफ़लाइन कैश से हटाया गया।`
          : `✓ "${track.title[language] || track.title.hi}" removed from offline cache.`
      );
      setTimeout(() => setAdminStatusMsg(null), 3000);
      return;
    }

    setPinProgress((prev) => ({ ...prev, [track.id]: 5 }));
    const res = await pinAudioForOffline(
      {
        id: track.id,
        title: track.title[language] || track.title.hi,
        artist: track.artist,
        category: track.category,
        duration: track.duration,
        mediaUrl: track.mediaUrl,
      },
      (pct) => {
        setPinProgress((prev) => ({ ...prev, [track.id]: pct }));
      }
    );

    setPinProgress((prev) => {
      const next = { ...prev };
      delete next[track.id];
      return next;
    });

    if (res.success) {
      sacredHaptics.successVibration();
      setAdminStatusMsg(
        isHi
          ? `✓ "${track.title[language] || track.title.hi}" बिना इंटरनेट सुनने हेतु फोन में सेव हो गया!`
          : `✓ "${track.title[language] || track.title.hi}" cached for offline listening!`
      );
    } else {
      setAdminStatusMsg(`✗ ${res.error || 'ऑफ़लाइन सहेजने में त्रुटि'}`);
    }
    setTimeout(() => setAdminStatusMsg(null), 4000);
  };

  const handleAdminPublishAudio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    setIsPublishing(true);
    setAdminStatusMsg(null);
    const res = await publishAdminSacredMedia({
      mediaType: 'audio',
      title: uploadTitle,
      category: uploadCategory,
      speakerOrArtist: uploadArtist,
      duration: uploadDuration,
      description: uploadDescription,
      mediaUrl: uploadUrl,
      file: uploadFile,
    });
    setIsPublishing(false);
    if (res.success) {
      setAdminStatusMsg('✓ पावन ऑडियो सफलतापूर्वक क्लाउड में प्रकाशित हो गया!');
      setUploadTitle('');
      setUploadDescription('');
      setUploadUrl('');
      setUploadFile(null);
      setShowUploadForm(false);
      setTimeout(() => setAdminStatusMsg(null), 4000);
    } else {
      setAdminStatusMsg(`✗ ${res.error}`);
    }
  };

  const handleAdminDeleteAudio = async (e: React.MouseEvent, trackId: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    const res = await deleteAdminSacredMedia(trackId);
    if (res.success) {
      await unpinOfflineAudio(trackId);
      if (activeTrack?.id === trackId) {
        if (htmlAudioRef.current) htmlAudioRef.current.pause();
        setIsPlaying(false);
        setActiveTrack(TRACKS_DATABASE[0]);
      }
      setAdminStatusMsg('✓ ऑडियो ट्रैक हटाया गया।');
      setTimeout(() => setAdminStatusMsg(null), 3000);
    } else {
      setAdminStatusMsg(`✗ ${res.error}`);
    }
  };

  const pinnedOfflineCount = Object.keys(pinnedMap).length;

  const filteredTracks = allTracks.filter((tr) => {
    if (selectedFilter === 'offline') return Boolean(pinnedMap[tr.id]);
    if (selectedFilter === 'bookmarks') return bookmarkedTrackIds.includes(tr.id);
    if (selectedFilter === 'all') return true;
    return tr.category === selectedFilter;
  });

  const activeMaxSeconds =
    activeTrack?.mediaUrl && realAudioDuration > 0
      ? realAudioDuration
      : parseDurationToSeconds(activeTrack?.duration || '05:00') || 300;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto space-y-6 pb-20"
    >
      <audio ref={htmlAudioRef} className="hidden" preload="metadata" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
            {t.audioLibraryTitle}
          </h2>
          <p className="text-xs opacity-60 italic">
            {isHi ? 'सत्यनाम पावन धुन, आरती, ग्रंथ वाणी एवं कबीर अमृत संगीत' : isPb ? 'ਸਤਯਨਾਮ ਅੰਮ੍ਰਿਤ ਧੁਨ ਤੇ ਪਾਵਨ ਗ੍ਰੰਥ ਬਾਣੀ' : t.audioLibrarySubtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {isAdmin && (
            <button
              type="button"
              onClick={() => setShowUploadForm((prev) => !prev)}
              className="min-h-[40px] px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition"
            >
              <Plus className="w-4 h-4" />
              <span>{isHi ? 'नया ऑडियो अपलोड (Admin)' : isPb ? 'ਨਵਾਂ ਆਡੀਓ ਅੱਪਲੋਡ' : 'Upload Audio'}</span>
            </button>
          )}

          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
        </div>
      </div>

      {adminStatusMsg && (
        <div className="p-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-center" style={{ color: theme.textPrimary }}>
          {adminStatusMsg}
        </div>
      )}

      {/* Admin-Only Upload Form */}
      {isAdmin && showUploadForm && (
        <form
          onSubmit={handleAdminPublishAudio}
          className="p-5 rounded-3xl border-2 border-emerald-500/40 space-y-3.5 shadow-lg"
          style={{ backgroundColor: theme.cardBg }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-black font-serif" style={{ color: theme.sacredMaroon }}>
                नया पावन ऑडियो प्रकाशित करें (Admin Cloud Upload)
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowUploadForm(false)}
              className="p-1.5 rounded-lg hover:bg-black/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              placeholder="ऑडियो का शीर्षक (उदा. संध्या आरती / बीजक प्रवचन)"
              className="w-full px-3 py-2 rounded-xl border text-xs font-bold outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
            <select
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value as 'satsang' | 'granth' | 'bhajan')}
              className="w-full px-3 py-2 rounded-xl border text-xs font-bold outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            >
              <option value="satsang">सत्संग / प्रवचन (Satsang)</option>
              <option value="granth">ग्रंथ पाठ (Granth)</option>
              <option value="bhajan">पावन भजन / आरती (Bhajan)</option>
            </select>
            <input
              type="text"
              value={uploadArtist}
              onChange={(e) => setUploadArtist(e.target.value)}
              placeholder="वक्ता / गायक नाम"
              className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
            <input
              type="text"
              value={uploadDuration}
              onChange={(e) => setUploadDuration(e.target.value)}
              placeholder="अवधि (जैसे 08:30)"
              className="w-full px-3 py-2 rounded-xl border text-xs font-mono outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
          </div>

          <textarea
            rows={2}
            value={uploadDescription}
            onChange={(e) => setUploadDescription(e.target.value)}
            placeholder="संक्षिप्त आध्यात्मिक विवरण (वैकल्पिक)"
            className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-amber-500/50 cursor-pointer text-xs font-bold hover:bg-amber-500/10">
              <Upload className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="truncate">{uploadFile ? uploadFile.name : 'ऑडियो फ़ाइल चुनें (.mp3 / .wav)'}</span>
              <input
                type="file"
                accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg"
                className="hidden"
                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
              />
            </label>

            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-amber-600 shrink-0" />
              <input
                type="url"
                value={uploadUrl}
                onChange={(e) => setUploadUrl(e.target.value)}
                placeholder="या सीधा HTTPS MP3 लिंक पेस्ट करें..."
                className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPublishing || (!uploadFile && !uploadUrl.trim())}
            className="w-full min-h-[44px] py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md disabled:opacity-50 cursor-pointer transition"
          >
            {isPublishing ? 'अपलोड हो रहा है...' : '☁️ सभी भक्तों के लिए ऑडियो प्रकाशित करें'}
          </button>
        </form>
      )}

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
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                      {isPlaying ? '▶ ' + t.playingNowLabel : '⏸ तैयार'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold">
                      {activeTrack.mediaUrl && realAudioDuration > 0 ? formatSecondsToTime(realAudioDuration) : activeTrack.duration}
                    </span>
                    {activeTrack.isCloud && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 inline-flex items-center gap-1">
                        <Cloud className="w-3 h-3" /> क्लाउड वाणी
                      </span>
                    )}
                    {activeTrack.mediaUrl && pinnedMap[activeTrack.id] && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white inline-flex items-center gap-1 shadow-2xs">
                        <CheckCircle2 className="w-3 h-3" />
                        {playingFromOfflineCache ? 'ऑफ़लाइन प्लेबैक सक्रिय' : `ऑफ़लाइन कैश्ड (${formatAudioSize(pinnedMap[activeTrack.id].sizeBytes)})`}
                      </span>
                    )}
                    {!activeTrack.mediaUrl && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 inline-flex items-center gap-1">
                        <WifiOff className="w-3 h-3" /> 100% ऑफ़लाइन
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-serif mb-1 leading-tight" style={{ color: theme.textPrimary }}>
                    {activeTrack.title[language]}
                  </h3>
                  <p className="text-xs opacity-75 mb-3" style={{ color: theme.textSecondary }}>
                    {activeTrack.description[language]}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <button
                      onClick={() => togglePlay(activeTrack)}
                      style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
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

                    {/* Pin for Offline Button in Player (for Admin Cloud Audios) */}
                    {activeTrack.mediaUrl && (
                      <button
                        type="button"
                        onClick={(e) => handleTogglePinOffline(e, activeTrack)}
                        disabled={pinProgress[activeTrack.id] !== undefined}
                        className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                          pinnedMap[activeTrack.id]
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs hover:bg-emerald-700'
                            : 'bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/40 hover:bg-amber-500/20'
                        }`}
                        title={pinnedMap[activeTrack.id] ? 'ऑफ़लाइन कैश हटाएँ' : 'बिना इंटरनेट सुनने हेतु फोन में सहेजें'}
                      >
                        {pinProgress[activeTrack.id] !== undefined ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{pinProgress[activeTrack.id]}%</span>
                          </>
                        ) : pinnedMap[activeTrack.id] ? (
                          <>
                            <Pin className="w-4 h-4" />
                            <span>{isHi ? 'ऑफ़लाइन सेव' : isPb ? 'ਆਫ਼ਲਾਈਨ ਸੇਵ' : 'Pinned Offline'}</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>{isHi ? 'ऑफ़लाइन डाउनलोड' : isPb ? 'ਆਫ਼ਲਾਈਨ ਡਾਊਨਲੋਡ' : 'Pin for Offline'}</span>
                          </>
                        )}
                      </button>
                    )}

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
                  <span>{activeTrack.mediaUrl && realAudioDuration > 0 ? formatSecondsToTime(realAudioDuration) : activeTrack.duration}</span>
                </div>
                <div className="relative w-full h-2 bg-black/10 dark:bg-white/10 rounded-full cursor-pointer group">
                  <input
                    type="range"
                    min={0}
                    max={activeMaxSeconds}
                    value={Math.min(currentTime, activeMaxSeconds)}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentTime(val);
                      if (activeTrack.mediaUrl && htmlAudioRef.current) {
                        htmlAudioRef.current.currentTime = val;
                      }
                      try {
                        localStorage.setItem(`sahebworld_audio_last_time_${activeTrack.id}`, String(val));
                      } catch {}
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-100"
                    style={{ width: `${Math.min(100, (currentTime / Math.max(1, activeMaxSeconds)) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Segment Tagger Form (Personal local study bookmark) */}
              <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl border" style={{ borderColor: theme.cardBorder }}>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 w-full">
                    <label className="block text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">
                      📌 {isHi ? 'विशिष्ट सत्संग प्रसंग समय बचाएं (Bookmark Segment)' : 'Tag/Save Discourse Segment'}
                    </label>
                    <input
                      type="text"
                      id="audio-custom-label-input"
                      placeholder={isHi ? 'प्रसंग का शीर्षक (उदा. आदि सत्कथा का मर्म)' : 'Title for this segment (e.g. key revelation)'}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs bg-white/80 dark:bg-stone-900/80 focus:ring-1 focus:ring-amber-500 font-semibold focus:outline-hidden"
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

      {/* Filter Tabs (Including Offline Pinned & Audio Bookmarks) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedFilter('all')}
          style={{
            backgroundColor: selectedFilter === 'all' ? theme.buttonPrimaryBg : theme.cardBg,
            color: selectedFilter === 'all' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: selectedFilter === 'all' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          {isHi ? 'सभी ऑडियो' : isPb ? 'ਸਾਰੇ ਆਡੀਓ' : 'All Audio'} ({allTracks.length})
        </button>

        <button
          onClick={() => setSelectedFilter('offline')}
          style={{
            backgroundColor: selectedFilter === 'offline' ? '#059669' : theme.cardBg,
            color: selectedFilter === 'offline' ? '#FFF' : theme.textPrimary,
            borderColor: selectedFilter === 'offline' ? '#059669' : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap flex items-center gap-1.5 cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          <Pin className="w-3.5 h-3.5" />
          <span>{isHi ? 'ऑफ़लाइन सहेजे गए' : isPb ? 'ਆਫ਼ਲਾਈਨ ਸੇਵ' : 'Offline Pinned'} ({pinnedOfflineCount})</span>
        </button>

        <button
          onClick={() => setSelectedFilter('bookmarks')}
          style={{
            backgroundColor: selectedFilter === 'bookmarks' ? theme.buttonPrimaryBg : theme.cardBg,
            color: selectedFilter === 'bookmarks' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: selectedFilter === 'bookmarks' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap flex items-center gap-1.5 cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>{isHi ? 'बुकमार्क किए गए ऑडियो' : isPb ? 'ਬੁੱਕਮਾਰਕ ਆਡੀਓ' : 'Bookmarked Audio'} ({bookmarkedTrackIds.length})</span>
        </button>

        <button
          onClick={() => setSelectedFilter('satsang')}
          style={{
            backgroundColor: selectedFilter === 'satsang' ? theme.buttonPrimaryBg : theme.cardBg,
            color: selectedFilter === 'satsang' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: selectedFilter === 'satsang' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          {t.playSatsangBtn}
        </button>

        <button
          onClick={() => setSelectedFilter('granth')}
          style={{
            backgroundColor: selectedFilter === 'granth' ? theme.buttonPrimaryBg : theme.cardBg,
            color: selectedFilter === 'granth' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: selectedFilter === 'granth' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          {t.granthAudioLabel}
        </button>

        <button
          onClick={() => setSelectedFilter('bhajan')}
          style={{
            backgroundColor: selectedFilter === 'bhajan' ? theme.buttonPrimaryBg : theme.cardBg,
            color: selectedFilter === 'bhajan' ? theme.buttonPrimaryText : theme.textPrimary,
            borderColor: selectedFilter === 'bhajan' ? theme.buttonPrimaryBg : theme.cardBorder,
          }}
          className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs backdrop-blur-md"
        >
          {t.bhajanAudioLabel}
        </button>
      </div>

      {/* Tracks List */}
      <div className="space-y-3">
        {filteredTracks.length === 0 ? (
          <div className="p-8 rounded-3xl border text-center space-y-2 backdrop-blur-md" style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}>
            {selectedFilter === 'offline' ? (
              <WifiOff className="w-8 h-8 opacity-30 mx-auto" />
            ) : (
              <Bookmark className="w-8 h-8 opacity-30 mx-auto" />
            )}
            <p className="font-bold text-sm" style={{ color: theme.textPrimary }}>
              {selectedFilter === 'offline'
                ? (isHi ? 'अभी कोई भजन या आरती ऑफ़लाइन पिन नहीं है' : isPb ? 'ਹਾਲੇ ਕੋਈ ਆਫ਼ਲਾਈਨ ਆਡੀਓ ਸੇਵ ਨਹੀਂ' : 'No offline pinned audio yet')
                : (isHi ? 'कोई ऑडियो ट्रैक नहीं मिला' : 'No audio tracks found')}
            </p>
            <p className="text-xs opacity-60">
              {selectedFilter === 'offline'
                ? (isHi ? 'एडमिन द्वारा डाले गए भजन/आरती पर "ऑफ़लाइन सेव" बटन दबाकर बिना इंटरनेट सुनने हेतु कैश करें।' : 'Tap "Pin Offline" on any Admin audio track to cache it on your phone.')
                : (isHi ? 'किसी भी ट्रैक पर बुकमार्क आइकन दबाकर अपनी पसंदीदा सूची में जोड़ें।' : 'Click the bookmark icon on any track to save it here.')}
            </p>
          </div>
        ) : (
          filteredTracks.map((track) => {
            const isActive = activeTrack?.id === track.id;
            const isBookmarked = bookmarkedTrackIds.includes(track.id);
            const pinnedMeta = pinnedMap[track.id];
            const dlProgress = pinProgress[track.id];

            return (
              <div
                key={track.id}
                onClick={() => togglePlay(track)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 sm:gap-4 hover:shadow-md backdrop-blur-md ${
                  isActive ? 'bg-amber-500/10 border-amber-500/40' : ''
                }`}
                style={{
                  backgroundColor: isActive ? 'rgba(245, 158, 11, 0.14)' : theme.cardBg,
                  borderColor: isActive ? theme.accentGold : theme.cardBorder,
                }}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    isActive && isPlaying ? 'bg-[#8B2500] text-white shadow-md' : 'bg-black/5 dark:bg-white/10 group-hover:bg-amber-100'
                  }`}
                >
                  {isActive && isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 text-amber-700" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold truncate ${isActive ? 'text-amber-900 dark:text-amber-200' : ''}`} style={{ color: theme.textPrimary }}>
                      {track.title[language]}
                    </span>
                    {track.isCloud && <Cloud className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                    {pinnedMeta && (
                      <span title="ऑफ़लाइन उपलब्ध" className="inline-flex shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] opacity-75 truncate" style={{ color: theme.textSecondary }}>
                    {track.description[language]}
                  </p>
                  <div className="text-[10px] opacity-60 uppercase tracking-wider mt-0.5 font-mono flex items-center gap-2 flex-wrap">
                    <span>{track.duration} • {track.artist}</span>
                    {!track.mediaUrl && (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">• ✓ बिल्ट-इन ऑफ़लाइन</span>
                    )}
                    {pinnedMeta && (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">• 📌 ऑफ़लाइन ({formatAudioSize(pinnedMeta.sizeBytes)})</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {track.mediaUrl && (
                    <button
                      type="button"
                      onClick={(e) => handleTogglePinOffline(e, track)}
                      disabled={dlProgress !== undefined}
                      className={`min-h-[36px] px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                        pinnedMeta
                          ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                          : 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 hover:bg-amber-500/20'
                      }`}
                      title={pinnedMeta ? 'ऑफ़लाइन कैश हटाएँ' : 'बिना इंटरनेट सुनने हेतु डाउनलोड/पिन करें'}
                    >
                      {dlProgress !== undefined ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>{dlProgress}%</span>
                        </>
                      ) : pinnedMeta ? (
                        <>
                          <Pin className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isHi ? 'ऑफ़लाइन' : 'Pinned'}</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isHi ? 'ऑफ़लाइन सेव' : 'Pin'}</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(track.id, e)}
                    className="p-2 rounded-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
                    title={isBookmarked ? 'बुकमार्क हटाएं' : 'बुकमार्क करें'}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-600" />
                    ) : (
                      <Bookmark className="w-4 h-4 opacity-40 hover:opacity-100" />
                    )}
                  </button>

                  {isAdmin && track.isCloud && (
                    <button
                      type="button"
                      onClick={(e) => handleAdminDeleteAudio(e, track.id)}
                      className="p-2 rounded-xl border border-red-500/20 text-red-600 hover:bg-red-500/10 transition cursor-pointer"
                      title="एडमिन: ऑडियो हटाएं"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};
