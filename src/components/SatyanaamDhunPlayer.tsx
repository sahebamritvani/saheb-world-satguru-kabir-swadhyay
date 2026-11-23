import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Upload, 
  Trash2, 
  Music, 
  Clock, 
  Sparkles, 
  Radio, 
  Disc,
  Edit2,
  Check,
  X,
  SkipBack,
  SkipForward,
  ArrowLeft,
  ListMusic,
  Plus,
  Sliders,
  ArrowUp,
  ArrowDown,
  Repeat,
  Shuffle,
  Lock,
  ShieldCheck,
  Cloud,
  Pin,
  Download,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { getDailyAffirmation } from '../data/dailyAffirmations';
import { Language } from '../types';
import { 
  satyanaamAudio, 
  DEFAULT_DHUN_SOUND_MIX, 
  DhunSoundMix 
} from '../services/audioDhun';
import { 
  DhunTrack, 
  DhunPlaylist,
  saveCustomDhunTrack, 
  getAllCustomDhunTracks, 
  deleteCustomDhunTrack, 
  updateCustomDhunTrackTitle,
  updateCustomTrackGain,
  getAllDhunPlaylists,
  saveDhunPlaylist,
  deleteDhunPlaylist,
  subscribeToCustomDhunChanges 
} from '../services/customAudioStore';
import { sacredHaptics } from '../services/haptics';
import { isAdminAuthenticated, isFirebaseAdminVerified } from '../services/adminAuth';
import {
  subscribeToSacredMedia,
  publishAdminSacredMedia,
  deleteAdminSacredMedia,
} from '../services/sacredMediaService';
import {
  OfflineAudioMeta,
  pinAudioForOffline,
  unpinOfflineAudio,
  getOfflinePlayableUrl,
  subscribeToPinnedAudio,
  formatAudioSize,
} from '../services/offlineAudioCache';

interface SatyanaamDhunPlayerProps {
  language: Language;
  onClose?: () => void;
}

export const SatyanaamDhunPlayer: React.FC<SatyanaamDhunPlayerProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();

  // Mode: 'synth' (Web Audio API) | 'custom' (IndexedDB/HTML5 audio) | 'playlist' (Custom Sequences)
  const [activeMode, setActiveMode] = useState<'synth' | 'custom' | 'playlist'>('synth');

  // Synthesized Dhun states
  const [isSynthPlaying, setIsSynthPlaying] = useState<boolean>(satyanaamAudio.getIsPlaying());
  const [synthVolume, setSynthVolume] = useState<number>(satyanaamAudio.getVolume());
  const [vocalEnabled, setVocalEnabled] = useState<boolean>(satyanaamAudio.getVocalChantEnabled());
  const [soundMix, setSoundMix] = useState<DhunSoundMix>(satyanaamAudio.getSoundMix());
  const [showMixer, setShowMixer] = useState<boolean>(false);

  // Admin & Offline Pinning state
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [cloudTracks, setCloudTracks] = useState<(DhunTrack & { isCloud?: boolean })[]>([]);
  const [pinnedMap, setPinnedMap] = useState<Record<string, OfflineAudioMeta>>({});
  const [pinProgress, setPinProgress] = useState<Record<string, number>>({});

  // Custom audio tracks state
  const [customTracks, setCustomTracks] = useState<DhunTrack[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<DhunTrack | null>(null);
  const [isCustomPlaying, setIsCustomPlaying] = useState<boolean>(false);
  const [customVolume, setCustomVolume] = useState<number>(0.8);
  const [customCurrentTime, setCustomCurrentTime] = useState<number>(0);
  const [customDuration, setCustomDuration] = useState<number>(0);
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [editingTrackId, setEditingTrackId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>('');
  const [affirmation] = useState(() => getDailyAffirmation(language));

  // Custom Playlist state
  const [playlists, setPlaylists] = useState<DhunPlaylist[]>([]);
  const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);
  const [playlistTrackIndex, setPlaylistTrackIndex] = useState<number>(0);
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState<boolean>(false);
  const [newPlaylistName, setNewPlaylistName] = useState<string>('');
  const [newPlaylistDesc, setNewPlaylistDesc] = useState<string>('');
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeatAll, setIsRepeatAll] = useState<boolean>(true);

  // Meditation timer
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const uploadPlayTimerRef = useRef<number | null>(null);
  const isMountedRef = useRef<boolean>(true);
  const playbackConfigRef = useRef({
    isLooping: true,
    activeMode: 'synth' as 'synth' | 'custom' | 'playlist',
    activePlaylistTracks: [] as DhunTrack[],
    playlistTrackIndex: 0,
    isRepeatAll: true,
    isShuffle: false,
    customVolume: 0.8,
  });

  const allDhunTracks: (DhunTrack & { isCloud?: boolean })[] = [
    ...cloudTracks,
    ...customTracks,
  ];

  // Load custom tracks, cloud audio tracks, admin state, and playlists on mount
  useEffect(() => {
    const handleAuth = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', handleAuth);

    loadTracksAndPlaylists();
    const unsubscribe = subscribeToCustomDhunChanges(() => {
      loadTracksAndPlaylists();
    });
    const unsubMedia = subscribeToSacredMedia((items) => {
      const mapped: (DhunTrack & { isCloud?: boolean })[] = items
        .filter((it) => it.mediaType === 'audio')
        .map((it) => ({
          id: it.id,
          title: it.title,
          isCustom: false,
          dateAdded: Date.parse(it.createdAt) || Date.now(),
          dataUrl: it.mediaUrl,
          size: 0,
          type: 'audio/mpeg',
          isCloud: true,
        }));
      setCloudTracks(mapped);
    });

    const unsubPinned = subscribeToPinnedAudio((map) => {
      setPinnedMap(map);
    });

    return () => {
      isMountedRef.current = false;
      window.removeEventListener('sahebworld:admin-auth-change', handleAuth);
      unsubscribe();
      unsubMedia();
      unsubPinned();
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (uploadPlayTimerRef.current) clearTimeout(uploadPlayTimerRef.current);
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.removeAttribute('src');
          audioRef.current.load();
        } catch {}
        audioRef.current = null;
      }
    };
  }, []);

  const loadTracksAndPlaylists = async () => {
    const tracks = await getAllCustomDhunTracks();
    setCustomTracks(tracks);
    if (tracks.length > 0 && !selectedTrack) {
      setSelectedTrack(tracks[0]);
    }
    const pls = getAllDhunPlaylists();
    setPlaylists(pls);
    if (pls.length > 0 && !activePlaylistId) {
      setActivePlaylistId(pls[0].id);
    }
  };

  useEffect(() => {
    if (!selectedTrack && allDhunTracks.length > 0) {
      setSelectedTrack(allDhunTracks[0]);
    }
  }, [cloudTracks, customTracks]);

  const activePlaylist = playlists.find((p) => p.id === activePlaylistId) || null;

  // Resolve playlist tracks
  const activePlaylistTracks = (activePlaylist?.trackIds || [])
    .map((tid) => allDhunTracks.find((tr) => tr.id === tid))
    .filter(Boolean) as DhunTrack[];

  // Keep latest playlist/playback config in ref so Audio event listeners bind cleanly once
  useEffect(() => {
    playbackConfigRef.current = {
      isLooping,
      activeMode,
      activePlaylistTracks,
      playlistTrackIndex,
      isRepeatAll,
      isShuffle,
      customVolume,
    };
  }, [isLooping, activeMode, activePlaylistTracks, playlistTrackIndex, isRepeatAll, isShuffle, customVolume]);

  // Sync Audio Element (attach listeners once)
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      if (isMountedRef.current) setCustomDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      if (isMountedRef.current) setCustomCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      const cfg = playbackConfigRef.current;
      if (cfg.activeMode === 'playlist' && cfg.activePlaylistTracks.length > 0) {
        let nextIndex = cfg.playlistTrackIndex + 1;
        if (nextIndex >= cfg.activePlaylistTracks.length) {
          if (cfg.isRepeatAll) {
            nextIndex = 0;
          } else {
            setIsCustomPlaying(false);
            return;
          }
        }
        if (cfg.isShuffle && cfg.activePlaylistTracks.length > 1) {
          nextIndex = Math.floor(Math.random() * cfg.activePlaylistTracks.length);
        }
        setPlaylistTrackIndex(nextIndex);
        const nextTrack = cfg.activePlaylistTracks[nextIndex];
        if (nextTrack) {
          setSelectedTrack(nextTrack);
          getOfflinePlayableUrl(nextTrack.id, nextTrack.dataUrl).then((resolved) => {
            if (!isMountedRef.current || !audioRef.current) return;
            audioRef.current.src = resolved || nextTrack.dataUrl || '';
            const gain = nextTrack.customGain !== undefined ? nextTrack.customGain : 1;
            audioRef.current.volume = playbackConfigRef.current.customVolume * gain;
            audioRef.current.play().catch(() => {});
          });
        }
      } else if (cfg.isLooping) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        setIsCustomPlaying(false);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Update Custom Track Source when selectedTrack changes (resolving offline cached Blob first)
  useEffect(() => {
    let cancelled = false;
    if (audioRef.current && selectedTrack?.dataUrl) {
      const wasPlaying = isCustomPlaying;
      getOfflinePlayableUrl(selectedTrack.id, selectedTrack.dataUrl).then((resolved) => {
        if (cancelled || !audioRef.current) return;
        audioRef.current.src = resolved || selectedTrack.dataUrl || '';
        const gain = selectedTrack.customGain !== undefined ? selectedTrack.customGain : 1;
        audioRef.current.volume = customVolume * gain;
        audioRef.current.loop = activeMode === 'playlist' ? false : isLooping;

        if (wasPlaying && (activeMode === 'custom' || activeMode === 'playlist')) {
          audioRef.current.play().catch(() => {});
        }
      });
    }
    return () => {
      cancelled = true;
    };
  }, [selectedTrack]);

  // Update volume
  useEffect(() => {
    if (audioRef.current && selectedTrack) {
      const gain = selectedTrack.customGain !== undefined ? selectedTrack.customGain : 1;
      audioRef.current.volume = customVolume * gain;
    }
  }, [customVolume, selectedTrack]);

  // Update loop
  useEffect(() => {
    if (audioRef.current && activeMode !== 'playlist') {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping, activeMode]);

  // Labels Object supporting hi, pb, en with strictly correct Punjabi spelling (ਸਤਯਨਾਮ)
  const labels = {
    hi: {
      title: 'सतगुरु सत्यनाम रेजोनेंस धुन',
      subtitle: 'सत्यनाम स्मरण, पवित्र तानपुरा एवं आत्मिक सिमरन संगीत',
      synthTab: 'सत्यनाम अमृत नाद',
      customTab: 'मेरी धुन सूची',
      playlistTab: 'कस्टम धुन प्लेलिस्ट',
      uploadBtn: 'सत्यनाम धुन जोड़ें (.mp3 / .wav)',
      synthDesc: 'शुद्ध तानपुरा, मंझीरा एवं सत्यनाम ध्वनि सिमरन (100% ऑफ़लाइन वेब ऑडियो)',
      customDesc: 'आपकी अपनी सहेजी गई सत्यनाम धुन ऑडियो फ़ाइलें',
      playlistDesc: 'अपनी पसंदीदा सत्यनाम धुनों का क्रमबद्ध अनुक्रम (Playlist) बनाएं और सुनें',
      loop: 'पुनरावृत्ति (Loop)',
      repeatAll: 'पूरी प्लेलिस्ट रिपीट',
      shuffle: 'शफ़ल (Shuffle)',
      timer: 'ध्यान समय (Timer)',
      timerOff: 'निरंतर',
      playingBadge: 'धुन प्रवाहित',
      pausedBadge: 'विराम',
      noCustomTitle: 'कोई ऑडियो फ़ाइल उपलब्ध नहीं',
      noCustomSubtitle: 'नीचे बटन पर क्लिक करके अपनी सत्यनाम धुन MP3 / M4A फ़ाइल जोड़ें',
      vocalToggle: 'स्वर सिमरन ("सत्यनाम")',
      synthSimranTitle: '|| सत्यनाम अमृत नाद सिमरन ||',
      vocalOn: 'चालू (ON)',
      vocalOff: 'बंद (OFF)',
      uploading: 'अपलोड हो रहा है...',
      savedList: 'सहेजी गई ऑडियो सूची',
      selectedDhun: 'सत्यनाम ऑडियो फ़ाइल',
      playingText: 'चल रहा है',
      deleteTitle: 'हटाएं',
      completedToast: 'सत्यनाम ध्यान समय पूरा हुआ।',
      errorToast: 'ऑडियो प्ले करने में त्रुटि।',
      addedToast: 'सत्यनाम धुन फ़ाइल सफलतापूर्वक जोड़ी गई!',
      saveFailedToast: 'फ़ाइल सहेजने में विफल।',
      removedToast: 'धुन फ़ाइल हटाई गई',
      invalidFileToast: 'कृपया केवल ऑडियो फ़ाइल (.mp3, .wav, .m4a) चुनें।',
      mixerTitle: 'ध्वनि मिश्रण (Sound Layer Mixer)',
      swarmandal: 'तानपुरा / स्वरमंडल',
      veena: 'पवित्र वीणा',
      vocalMix: 'सत्यनाम स्वर गान',
      chime: 'मंझीरा व घंटियाँ',
      flute: 'दिव्य बाँसुरी',
      nature: 'अनहद नाद / प्रकृति गूंज',
      createPlaylist: 'नई प्लेलिस्ट बनाएं',
      playlistNamePlaceholder: 'प्लेलिस्ट का नाम (उदा. प्रातःकालीन सिमरन)',
      playlistDescPlaceholder: 'संक्षिप्त विवरण (वैकल्पिक)',
      addTrackToPl: 'ट्रैक जोड़ें',
      savePlBtn: 'प्लेलिस्ट सहेजें',
      emptyPlaylistMsg: 'इस प्लेलिस्ट में कोई ट्रैक नहीं है। नीचे से ट्रैक जोड़ें।',
      noPlaylistsMsg: 'कोई प्लेलिस्ट नहीं बनी है। पहली सत्यनाम प्लेलिस्ट बनाएं!',
      trackGain: 'ट्रैक वॉल्यूम',
    },
    pb: {
      title: 'ਅਖੰਡ ਸਤਯਨਾਮ ਧੁਨ',
      subtitle: 'ਸਤਯਨਾਮ ਸਿਮਰਨ, ਪਵਿੱਤਰ ਤਾਨਪੁਰਾ ਅਤੇ ਰੂਹਾਨੀ ਧੁਨ',
      synthTab: 'ਸਤਯਨਾਮ ਅੰਮ੍ਰਿਤ ਨਾਦ',
      customTab: 'ਮੇਰੀ ਧੁਨ ਸੂਚੀ',
      playlistTab: 'ਕਸਟਮ ਧੁਨ ਪਲੇਲਿਸਟ',
      uploadBtn: 'ਸਤਯਨਾਮ ਧੁਨ ਜੋੜੋ (.mp3 / .wav)',
      synthDesc: 'ਸ਼ੁੱਧ ਤਾਨਪੁਰਾ, ਮੰਝੀਰਾ ਅਤੇ ਸਤਯਨਾਮ ਧੁਨੀ ਸਿਮਰਨ (100% ਆਫ਼ਲਾਈਨ ਵੈੱਬ ਆਡੀਓ)',
      customDesc: 'ਤੁਹਾਡੀਆਂ ਆਪਣੀਆਂ ਸਤਯਨਾਮ ਧੁਨ ਫਾਈਲਾਂ',
      playlistDesc: 'ਆਪਣੀਆਂ ਮਨਪਸੰਦ ਸਤਯਨਾਮ ਧੁਨਾਂ ਦੀ ਕ੍ਰਮਬੱਧ ਪਲੇਲਿਸਟ ਬਣਾਓ ਅਤੇ ਲੜੀਵਾਰ ਸੁਣੋ',
      loop: 'ਲੂਪ (Loop)',
      repeatAll: 'ਪੂਰੀ ਪਲੇਲਿਸਟ ਰਿਪੀਟ',
      shuffle: 'ਸ਼ਫਲ (Shuffle)',
      timer: 'ਧਿਆਨ ਸਮਾਂ',
      timerOff: 'ਨਿਰੰਤਰ',
      playingBadge: 'ਧੁਨ ਚੱਲ ਰਹੀ ਹੈ',
      pausedBadge: 'ਰੁਕੀ ਹੋਈ',
      noCustomTitle: 'ਕੋਈ ਆਡੀਓ ਫਾਈਲ ਨਹੀਂ',
      noCustomSubtitle: 'ਆਪਣੀ ਸਤਯਨਾਮ ਧੁਨ MP3 / M4A ਫਾਈਲ ਅੱਪਲੋਡ ਕਰੋ',
      vocalToggle: 'ਸਵਰ ਸਿਮਰਨ ("ਸਤਯਨਾਮ")',
      synthSimranTitle: '|| ਸਤਯਨਾਮ ਅੰਮ੍ਰਿਤ ਨਾਦ ਸਿਮਰਨ ||',
      vocalOn: 'ਚਾਲੂ (ON)',
      vocalOff: 'ਬੰਦ (OFF)',
      uploading: 'ਅੱਪਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
      savedList: 'ਸੰਭਾਲੀ ਹੋਈ ਆਡੀਓ ਸੂਚੀ',
      selectedDhun: 'ਸਤਯਨਾਮ ਆਡੀਓ ਫਾਈਲ',
      playingText: 'ਚੱਲ ਰਿਹਾ ਹੈ',
      deleteTitle: 'ਹਟਾਓ',
      completedToast: 'ਸਤਯਨਾਮ ਧਿਆਨ ਸਮਾਂ ਪੂਰਾ ਹੋਇਆ।',
      errorToast: 'ਆਡੀਓ ਚਲਾਉਣ ਵਿੱਚ ਗਲਤੀ।',
      addedToast: 'ਸਤਯਨਾਮ ਧੁਨ ਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਜੋੜੀ ਗਈ!',
      saveFailedToast: 'ਫਾਈਲ ਸੰਭਾਲਣ ਵਿੱਚ ਅਸਫਲ।',
      removedToast: 'ਧੁਨ ਫਾਈਲ ਹਟਾਈ ਗਈ',
      invalidFileToast: 'ਕਿਰਪਾ ਕਰਕੇ ਕੇਵਲ ਆਡੀਓ ਫਾਈਲ (.mp3, .wav, .m4a) ਚੁਣੋ।',
      mixerTitle: 'ਧੁਨੀ ਮਿਸ਼ਰਣ (Sound Layer Mixer)',
      swarmandal: 'ਤਾਨਪੁਰਾ / ਸਵਰਮੰਡਲ',
      veena: 'ਪਵਿੱਤਰ ਵੀਣਾ',
      vocalMix: 'ਸਤਯਨਾਮ ਸਵਰ ਗਾਇਨ',
      chime: 'ਮੰਝੀਰਾ ਤੇ ਘੰਟੀਆਂ',
      flute: 'ਦਿਵਯ ਬੰਸਰੀ',
      nature: 'ਅਨਹਦ ਨਾਦ / ਕੁਦਰਤ ਗੂੰਜ',
      createPlaylist: 'ਨਵੀਂ ਪਲੇਲਿਸਟ ਬਣਾਓ',
      playlistNamePlaceholder: 'ਪਲੇਲਿਸਟ ਦਾ ਨਾਮ (ਉਦਾ. ਸਵੇਰ ਦਾ ਸਿਮਰਨ)',
      playlistDescPlaceholder: 'ਵੇਰਵਾ (ਵਿਕਲਪਿਕ)',
      addTrackToPl: 'ਟਰੈਕ ਜੋੜੋ',
      savePlBtn: 'ਪਲੇਲਿਸਟ ਸੰਭਾਲੋ',
      emptyPlaylistMsg: 'ਇਸ ਪਲੇਲਿਸਟ ਵਿੱਚ ਕੋਈ ਟਰੈਕ ਨਹੀਂ ਹੈ। ਹੇਠਾਂ ਤੋਂ ਟਰੈਕ ਜੋੜੋ।',
      noPlaylistsMsg: 'ਕੋਈ ਪਲੇਲਿਸਟ ਨਹੀਂ ਬਣੀ। ਪਹਿਲੀ ਸਤਯਨਾਮ ਪਲੇਲਿਸਟ ਤਿਆਰ ਕਰੋ!',
      trackGain: 'ਟਰੈਕ ਵਾਲੀਅਮ',
    },
    en: {
      title: 'Satguru Satyanaam Resonance Dhun',
      subtitle: 'Harmonic Satyanaam Simran & Sacred Spiritual Drone',
      synthTab: 'Satyanaam Amrit Naad',
      customTab: 'My Dhun Tracks',
      playlistTab: 'Custom Dhun Playlist',
      uploadBtn: 'Upload Dhun (.mp3 / .wav)',
      synthDesc: 'Pure Tanpura, Manjira & Satyanaam Chanting (100% Offline)',
      customDesc: 'Your personal uploaded Satyanaam Dhun audio tracks',
      playlistDesc: 'Create personalized sequences of Satyanaam Dhun tracks with custom volume mixing',
      loop: 'Loop Track',
      repeatAll: 'Repeat All Playlist',
      shuffle: 'Shuffle',
      timer: 'Meditation Timer',
      timerOff: 'Continuous',
      playingBadge: 'Dhun Playing',
      pausedBadge: 'Paused',
      noCustomTitle: 'No Custom Track Loaded',
      noCustomSubtitle: 'Click the button below to upload your Satyanaam Dhun audio file',
      vocalToggle: 'Vocal Chant ("Satyanaam")',
      synthSimranTitle: '|| Satyanaam Amrit Naad Simran ||',
      vocalOn: 'ON',
      vocalOff: 'OFF',
      uploading: 'Uploading...',
      savedList: 'Saved Audio Tracks',
      selectedDhun: 'Satyanaam Audio File',
      playingText: 'Playing',
      deleteTitle: 'Delete',
      completedToast: 'Satyanaam Meditation Session Completed.',
      errorToast: 'Error playing audio track.',
      addedToast: 'Satyanaam Dhun track added successfully!',
      saveFailedToast: 'Failed to save audio file.',
      removedToast: 'Track removed.',
      invalidFileToast: 'Please select an audio file (.mp3, .wav, .m4a).',
      mixerTitle: 'Sound Layer Mixer',
      swarmandal: 'Tanpura / Swarmandal',
      veena: 'Sacred Veena',
      vocalMix: 'Satyanaam Vocal Chant',
      chime: 'Manjira & Chimes',
      flute: 'Divine Bansuri / Flute',
      nature: 'Anhad Naad / Drone',
      createPlaylist: 'Create New Playlist',
      playlistNamePlaceholder: 'Playlist Name (e.g., Morning Simran)',
      playlistDescPlaceholder: 'Description (optional)',
      addTrackToPl: 'Add Track',
      savePlBtn: 'Save Playlist',
      emptyPlaylistMsg: 'No tracks in this playlist. Add tracks below.',
      noPlaylistsMsg: 'No custom playlists yet. Create your first Satyanaam playlist!',
      trackGain: 'Track Volume',
    }
  };

  const t = labels[language] || labels.hi;

  // Handle Meditation Timer
  useEffect(() => {
    if (timerMinutes > 0) {
      setRemainingSeconds(timerMinutes * 60);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

      timerIntervalRef.current = window.setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            stopAllAudio();
            showToast(t.completedToast);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setRemainingSeconds(0);
    }
  }, [timerMinutes, language]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => {
      toastTimerRef.current = null;
      if (isMountedRef.current) setToastMessage(null);
    }, 3500);
  };

  const stopAllAudio = () => {
    satyanaamAudio.stopDhun();
    setIsSynthPlaying(false);

    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsCustomPlaying(false);
  };

  const handleClosePlayer = () => {
    stopAllAudio();
    onClose?.();
  };

  // Synth Play/Pause Toggle
  const handleToggleSynth = () => {
    sacredHaptics.lightTap();
    if (isSynthPlaying) {
      satyanaamAudio.stopDhun();
      setIsSynthPlaying(false);
    } else {
      if (isCustomPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsCustomPlaying(false);
      }
      satyanaamAudio.startDhun();
      setIsSynthPlaying(true);
      setActiveMode('synth');
    }
  };

  // Custom Audio Play/Pause Toggle
  const handleToggleCustom = () => {
    sacredHaptics.lightTap();
    if (!selectedTrack || !audioRef.current) {
      if (allDhunTracks.length === 0) {
        if (isAdmin) {
          fileInputRef.current?.click();
        } else {
          showToast(language === 'hi' ? 'केवल एडमिन ही नई ऑडियो धुन अपलोड कर सकते हैं।' : 'Admin-only upload.');
        }
        return;
      }
    }

    if (isCustomPlaying) {
      if (audioRef.current) audioRef.current.pause();
      setIsCustomPlaying(false);
    } else {
      if (isSynthPlaying) {
        satyanaamAudio.stopDhun();
        setIsSynthPlaying(false);
      }

      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsCustomPlaying(true);
        }).catch((err) => {
          console.error('Playback error:', err);
          showToast(t.errorToast);
        });
      }
    }
  };

  // Playlist track playback trigger
  const handlePlayPlaylistTrack = async (index: number) => {
    sacredHaptics.lightTap();
    if (!activePlaylistTracks[index] || !audioRef.current) return;
    setPlaylistTrackIndex(index);
    const tr = activePlaylistTracks[index];
    setSelectedTrack(tr);
    const resolved = await getOfflinePlayableUrl(tr.id, tr.dataUrl);
    if (!audioRef.current) return;
    audioRef.current.src = resolved || tr.dataUrl || '';
    const gain = tr.customGain !== undefined ? tr.customGain : 1;
    audioRef.current.volume = customVolume * gain;

    if (isSynthPlaying) {
      satyanaamAudio.stopDhun();
      setIsSynthPlaying(false);
    }

    audioRef.current.play().then(() => {
      setIsCustomPlaying(true);
    }).catch(() => {
      showToast(t.errorToast);
    });
  };

  // Pin Cloud Audio Track for Offline Playback
  const handleTogglePinOffline = async (e: React.MouseEvent, tr: DhunTrack & { isCloud?: boolean }) => {
    e.stopPropagation();
    sacredHaptics.lightTap();
    if (!tr.dataUrl) return;

    if (pinnedMap[tr.id]) {
      await unpinOfflineAudio(tr.id);
      showToast(language === 'hi' ? `✓ "${tr.title}" ऑफ़लाइन कैश से हटाया गया` : `Removed "${tr.title}" from offline cache`);
      return;
    }

    setPinProgress((prev) => ({ ...prev, [tr.id]: 5 }));
    const res = await pinAudioForOffline(
      {
        id: tr.id,
        title: tr.title,
        mediaUrl: tr.dataUrl,
      },
      (pct) => {
        setPinProgress((prev) => ({ ...prev, [tr.id]: pct }));
      }
    );

    setPinProgress((prev) => {
      const next = { ...prev };
      delete next[tr.id];
      return next;
    });

    if (res.success) {
      sacredHaptics.successVibration();
      showToast(language === 'hi' ? `✓ "${tr.title}" बिना इंटरनेट सुनने हेतु सेव हो गया!` : `Pinned "${tr.title}" for offline playback!`);
    } else {
      showToast(res.error || t.saveFailedToast);
    }
  };

  // Handle Sound Mix Slider
  const handleSoundMixChange = (channel: keyof DhunSoundMix, val: number) => {
    satyanaamAudio.setChannelVolume(channel, val);
    setSoundMix(satyanaamAudio.getSoundMix());
  };

  // Handle Track Volume Gain
  const handleTrackGainChange = async (trackId: string, gain: number) => {
    await updateCustomTrackGain(trackId, gain);
    setCustomTracks((prev) =>
      prev.map((tr) => (tr.id === trackId ? { ...tr, customGain: gain } : tr))
    );
    if (selectedTrack?.id === trackId && audioRef.current) {
      audioRef.current.volume = customVolume * gain;
    }
  };

  // Handle File Upload (Admin-Only)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) {
      e.target.value = '';
      showToast(language === 'hi' ? 'केवल अधिकृत एडमिन ही ऑडियो अपलोड कर सकते हैं।' : 'Only Admin can upload audio.');
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('audio/') && !file.name.match(/\.(mp3|wav|m4a|aac|ogg|webm)$/i)) {
      showToast(t.invalidFileToast);
      return;
    }

    setIsUploading(true);
    try {
      const track = await saveCustomDhunTrack(file);
      setSelectedTrack(track);
      setActiveMode('custom');

      // Also sync to global Cloud sacred_media if Firebase Admin is active
      if (isFirebaseAdminVerified()) {
        const cleanTitle = file.name.replace(/\.[^/.]+$/, '');
        const res = await publishAdminSacredMedia({
          mediaType: 'audio',
          title: cleanTitle,
          category: 'satsang',
          speakerOrArtist: 'Satguru Kabir Saheb Ashram',
          file,
        });
        if (res.success) {
          showToast(language === 'hi' ? '✓ सत्यनाम धुन क्लाउड व डिवाइस में अपलोड हो गई!' : t.addedToast);
        } else {
          showToast(t.addedToast);
        }
      } else {
        showToast(t.addedToast);
      }

      // Also add to active playlist if open in playlist mode
      if (activePlaylistId && activePlaylist) {
        const updatedTrackIds = [...activePlaylist.trackIds, track.id];
        saveDhunPlaylist({ ...activePlaylist, trackIds: updatedTrackIds });
      }
      
      // Auto play uploaded track
      if (uploadPlayTimerRef.current) clearTimeout(uploadPlayTimerRef.current);
      uploadPlayTimerRef.current = window.setTimeout(() => {
        uploadPlayTimerRef.current = null;
        if (isMountedRef.current && audioRef.current) {
          audioRef.current.src = track.dataUrl || '';
          audioRef.current.play().then(() => {
            if (isMountedRef.current) setIsCustomPlaying(true);
          }).catch(() => {});
        }
      }, 300);
    } catch (err) {
      console.error('Failed to save audio file:', err);
      showToast(t.saveFailedToast);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDeleteTrack = async (e: React.MouseEvent, trackId: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    sacredHaptics.lightTap();
    if (selectedTrack?.id === trackId) {
      if (audioRef.current) audioRef.current.pause();
      setIsCustomPlaying(false);
      setSelectedTrack(null);
    }
    const isCloudItem = cloudTracks.some((c) => c.id === trackId);
    if (isCloudItem) {
      await deleteAdminSacredMedia(trackId);
    } else {
      await deleteCustomDhunTrack(trackId);
    }
    showToast(t.removedToast);
  };

  const handleStartRename = (e: React.MouseEvent, tr: DhunTrack) => {
    e.stopPropagation();
    if (!isAdmin) return;
    setEditingTrackId(tr.id);
    setEditingTitle(tr.title);
  };

  const handleSaveRename = async (e: React.MouseEvent, trackId: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    if (editingTitle.trim()) {
      await updateCustomDhunTrackTitle(trackId, editingTitle.trim());
      if (selectedTrack?.id === trackId) {
        setSelectedTrack((prev) => prev ? { ...prev, title: editingTitle.trim() } : prev);
      }
      showToast(language === 'hi' ? 'धुन का नाम अपडेट हो गया!' : 'Track title updated!');
    }
    setEditingTrackId(null);
  };

  // Playlist Management Handlers (Admin-Only mutations)
  const handleCreatePlaylist = () => {
    if (!isAdmin || !newPlaylistName.trim()) return;
    sacredHaptics.lightTap();
    const newPl: DhunPlaylist = {
      id: `pl_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: newPlaylistName.trim(),
      description: newPlaylistDesc.trim(),
      trackIds: selectedTrack ? [selectedTrack.id] : [],
      createdAt: Date.now(),
      defaultVolume: 0.8,
      isRepeatAll: true,
    };
    const updated = saveDhunPlaylist(newPl);
    setPlaylists(updated);
    setActivePlaylistId(newPl.id);
    setNewPlaylistName('');
    setNewPlaylistDesc('');
    setIsCreatingPlaylist(false);
    showToast(language === 'hi' ? 'नई प्लेलिस्ट बन गई!' : language === 'pb' ? 'ਨਵੀਂ ਪਲੇਲਿਸਟ ਬਣ ਗਈ!' : 'Playlist created!');
  };

  const handleDeletePlaylist = (e: React.MouseEvent, plId: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    sacredHaptics.lightTap();
    const updated = deleteDhunPlaylist(plId);
    setPlaylists(updated);
    if (activePlaylistId === plId) {
      setActivePlaylistId(updated.length > 0 ? updated[0].id : null);
    }
    showToast(language === 'hi' ? 'प्लेलिस्ट हटाई गई' : language === 'pb' ? 'ਪਲੇਲਿਸਟ ਹਟਾਈ ਗਈ' : 'Playlist deleted');
  };

  const handleAddTrackToPlaylist = (plId: string, trackId: string) => {
    if (!isAdmin) return;
    sacredHaptics.lightTap();
    const pl = playlists.find((p) => p.id === plId);
    if (!pl) return;
    if (pl.trackIds.includes(trackId)) return;
    const updated = saveDhunPlaylist({
      ...pl,
      trackIds: [...pl.trackIds, trackId],
    });
    setPlaylists(updated);
    showToast(language === 'hi' ? 'ट्रैक प्लेलिस्ट में जोड़ा गया' : 'Track added to playlist');
  };

  const handleRemoveTrackFromPlaylist = (plId: string, trackId: string) => {
    if (!isAdmin) return;
    sacredHaptics.lightTap();
    const pl = playlists.find((p) => p.id === plId);
    if (!pl) return;
    const updated = saveDhunPlaylist({
      ...pl,
      trackIds: pl.trackIds.filter((id) => id !== trackId),
    });
    setPlaylists(updated);
  };

  const handleMoveTrackOrder = (plId: string, fromIndex: number, toIndex: number) => {
    if (!isAdmin) return;
    sacredHaptics.lightTap();
    const pl = playlists.find((p) => p.id === plId);
    if (!pl || toIndex < 0 || toIndex >= pl.trackIds.length) return;
    const newTrackIds = [...pl.trackIds];
    const [moved] = newTrackIds.splice(fromIndex, 1);
    newTrackIds.splice(toIndex, 0, moved);
    const updated = saveDhunPlaylist({
      ...pl,
      trackIds: newTrackIds,
    });
    setPlaylists(updated);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCustomCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleQuickJump = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.max(0, Math.min(audioRef.current.duration, audioRef.current.currentTime + seconds));
      audioRef.current.currentTime = newTime;
      setCustomCurrentTime(newTime);
    }
  };

  const isAnyPlaying = isSynthPlaying || isCustomPlaying;

  return (
    <div
      id="satyanaam-dhun-player-card"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.accentGold,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border-2 shadow-2xl p-4 sm:p-7 relative overflow-hidden transition-all duration-300"
    >
      {isAdmin && (
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.webm"
          className="hidden"
          onChange={handleFileUpload}
        />
      )}

      {/* Radiant Glow in Background during Playback */}
      {isAnyPlaying && (
        <div
          style={{ backgroundColor: theme.accentGoldLight }}
          className="absolute -inset-10 blur-3xl opacity-35 pointer-events-none animate-pulse duration-1000"
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon }}
          className="absolute top-3 left-1/2 -translate-x-1/2 z-30 py-1.5 px-4 rounded-full text-xs font-bold border border-amber-400/40 shadow-lg flex items-center gap-2 animate-fadeIn"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-amber-400/20">
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 mb-1">
            <Radio className={`w-3.5 h-3.5 ${isAnyPlaying ? 'text-amber-600 animate-pulse' : 'text-stone-400'}`} />
            <span>{isAnyPlaying ? t.playingBadge : t.pausedBadge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-wide" style={{ color: theme.sacredMaroon }}>
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm mt-0.5" style={{ color: theme.textSecondary }}>
            {t.subtitle}
          </p>
        </div>

        {/* Header Actions (Admin-Only Upload & Close) */}
        <div className="flex items-center gap-2">
          {isAdmin ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 hover:opacity-90 active:scale-95 transition cursor-pointer"
            >
              <Upload className={`w-4 h-4 ${isUploading ? 'animate-spin' : ''}`} />
              <span>{isUploading ? t.uploading : t.uploadBtn}</span>
            </button>
          ) : (
            <div className="px-3 py-1.5 rounded-xl bg-stone-500/10 border border-stone-500/20 text-[11px] font-bold flex items-center gap-1.5" style={{ color: theme.textSecondary }}>
              <Lock className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'pb' ? 'ਕੇਵਲ ਐਡਮਿਨ ਅੱਪਲੋਡ' : language === 'en' ? 'Admin-Only Upload' : 'केवल एडमिन अपलोड'}</span>
            </div>
          )}

          {onClose && (
            <button
              id="close-dhun-player-btn"
              type="button"
              onClick={handleClosePlayer}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-2xs active:scale-95"
              title={language === 'hi' ? 'वापस जाएं' : language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'Go Back'}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'hi' ? 'वापस जाएं' : language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'Back'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Mode Switcher Tabs (3 Distinct Modes: Synth, Tracks, Playlist) */}
      <div className="flex items-center justify-center p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 my-5 max-w-xl mx-auto border border-amber-400/20 gap-1">
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            setActiveMode('synth');
          }}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeMode === 'synth'
              ? 'bg-amber-500 text-stone-950 shadow-md scale-102'
              : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
          }`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.synthTab}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            setActiveMode('custom');
          }}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeMode === 'custom'
              ? 'bg-amber-500 text-stone-950 shadow-md scale-102'
              : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
          }`}
        >
          <Music className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.customTab}</span>
          {allDhunTracks.length > 0 && (
            <span className="px-1.5 py-0.2 text-[10px] bg-stone-950 text-amber-200 rounded-full font-black shrink-0">
              {allDhunTracks.length}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            setActiveMode('playlist');
          }}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeMode === 'playlist'
              ? 'bg-amber-500 text-stone-950 shadow-md scale-102'
              : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
          }`}
        >
          <ListMusic className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.playlistTab}</span>
          {playlists.length > 0 && (
            <span className="px-1.5 py-0.2 text-[10px] bg-amber-700 text-white rounded-full font-black shrink-0">
              {playlists.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Controls Body */}
      {activeMode === 'synth' && (
        /* --- MODE 1: Synthesized Web Audio API Satyanaam Resonance --- */
        <div className="space-y-6 py-2 text-center">
          {/* Animated Mandala Visualizer */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto flex items-center justify-center">
            <div
              className={`absolute inset-0 rounded-full border-2 border-amber-400/40 transition-all duration-1000 ${
                isSynthPlaying ? 'scale-110 border-amber-500 animate-ping opacity-30' : ''
              }`}
            />
            <div
              className={`absolute inset-2 rounded-full border border-dashed border-amber-500/50 ${
                isSynthPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '20s' }}
            />
            
            <button
              type="button"
              onClick={handleToggleSynth}
              style={{
                backgroundColor: isSynthPlaying ? theme.sacredMaroon : theme.accentGold,
                color: isSynthPlaying ? '#fef3c7' : '#292524',
              }}
              className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-108 active:scale-95 cursor-pointer ring-4 ring-amber-400/30"
              aria-label={isSynthPlaying ? 'Pause Dhun' : 'Play Dhun'}
            >
              {isSynthPlaying ? (
                <Pause className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md" />
              ) : (
                <Play className="w-10 h-10 sm:w-12 sm:h-12 translate-x-1 drop-shadow-md" />
              )}
            </button>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
              {t.synthSimranTitle}
            </h3>
            <p className="text-xs sm:text-sm max-w-md mx-auto" style={{ color: theme.textSecondary }}>
              {t.synthDesc}
            </p>
          </div>

          {/* Controls Panel */}
          <div className="max-w-md mx-auto p-4 rounded-2xl border border-amber-400/20 bg-black/5 dark:bg-white/5 space-y-4 text-left">
            {/* Master Volume */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const newVol = synthVolume > 0 ? 0 : 0.6;
                  setSynthVolume(newVol);
                  satyanaamAudio.setVolume(newVol);
                }}
                className="text-amber-600 dark:text-amber-400 cursor-pointer"
              >
                {synthVolume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={synthVolume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setSynthVolume(val);
                  satyanaamAudio.setVolume(val);
                }}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-200 dark:bg-stone-700 rounded-lg"
              />
              <span className="text-xs font-bold w-10 text-right font-mono" style={{ color: theme.textMuted }}>
                {Math.round(synthVolume * 100)}%
              </span>
            </div>

            {/* Vocal Chant Toggle */}
            <div className="flex items-center justify-between pt-1 border-t border-amber-400/20">
              <span className="text-xs font-bold" style={{ color: theme.textPrimary }}>
                {t.vocalToggle}
              </span>
              <button
                type="button"
                onClick={() => {
                  const newState = satyanaamAudio.toggleVocalChant();
                  setVocalEnabled(newState);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                  vocalEnabled
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'bg-stone-300 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                }`}
              >
                {vocalEnabled ? t.vocalOn : t.vocalOff}
              </button>
            </div>

            {/* Sound Layer Mixer Toggle */}
            <div className="pt-2 border-t border-amber-400/20">
              <button
                type="button"
                onClick={() => setShowMixer(!showMixer)}
                className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center justify-between text-xs font-bold transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.mixerTitle}</span>
                </div>
                <span>{showMixer ? '▲' : '▼'}</span>
              </button>

              {showMixer && (
                <div className="mt-3 space-y-3 p-3 rounded-xl bg-black/10 dark:bg-white/5 border border-amber-500/20 text-xs">
                  {/* Swarmandal */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.swarmandal}</span>
                      <span className="font-mono text-amber-600">{soundMix.swarmandal}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.swarmandal}
                      onChange={(e) => handleSoundMixChange('swarmandal', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Veena */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.veena}</span>
                      <span className="font-mono text-amber-600">{soundMix.veena}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.veena}
                      onChange={(e) => handleSoundMixChange('veena', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Vocal */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.vocalMix}</span>
                      <span className="font-mono text-amber-600">{soundMix.vocal}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.vocal}
                      onChange={(e) => handleSoundMixChange('vocal', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Chime */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.chime}</span>
                      <span className="font-mono text-amber-600">{soundMix.chime}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.chime}
                      onChange={(e) => handleSoundMixChange('chime', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Flute */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.flute}</span>
                      <span className="font-mono text-amber-600">{soundMix.flute}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.flute}
                      onChange={(e) => handleSoundMixChange('flute', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Nature */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>{t.nature}</span>
                      <span className="font-mono text-amber-600">{soundMix.nature}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundMix.nature}
                      onChange={(e) => handleSoundMixChange('nature', parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Custom Tracks Library */}
      {activeMode === 'custom' && (
        <div className="space-y-6 py-2">
          {allDhunTracks.length === 0 ? (
            /* Empty state for custom uploads (Admin-Only upload trigger) */
            <div 
              onClick={isAdmin ? () => fileInputRef.current?.click() : undefined}
              className={`text-center p-8 rounded-2xl border-2 border-dashed border-amber-400/40 bg-black/5 dark:bg-white/5 transition space-y-3 ${isAdmin ? 'cursor-pointer hover:border-amber-500' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-600">
                {isAdmin ? <Disc className="w-8 h-8 animate-spin duration-3000" /> : <Lock className="w-8 h-8" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                  {t.noCustomTitle}
                </h3>
                <p className="text-xs max-w-sm mx-auto" style={{ color: theme.textSecondary }}>
                  {isAdmin
                    ? t.noCustomSubtitle
                    : (language === 'pb'
                        ? 'ਇਹ ਸੂਚੀ ਪਬਲਿਕ ਰੀਡ-ਓਨਲੀ ਹੈ। ਸਿਰਫ਼ ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਹੀ ਨਵੀਆਂ ਧੁਨਾਂ ਜੋੜ ਸਕਦੇ ਹਨ।'
                        : language === 'en'
                        ? 'Public read-only library. Only the Authorized Admin can upload audio tracks.'
                        : 'यह सूची पब्लिक रीड-ओनली है। केवल अधिकृत एडमिन (smongia76@gmail.com) ही नई ऑडियो धुन जोड़ सकते हैं।')}
                </p>
              </div>
              {isAdmin && (
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>{t.uploadBtn}</span>
                </button>
              )}
            </div>
          ) : (
            /* Active Custom Track Player UI */
            <div className="space-y-5">
              {/* Active Playing Track Banner */}
              <div className="p-4 rounded-2xl border-2 border-amber-400/30 bg-amber-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 bg-amber-500/20 border border-amber-500/40 ${isCustomPlaying ? 'animate-bounce' : ''}`}>
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2">
                      <span>{t.selectedDhun}</span>
                      {selectedTrack && pinnedMap[selectedTrack.id] && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold normal-case tracking-normal inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> ऑफ़लाइन उपलब्ध ({formatAudioSize(pinnedMap[selectedTrack.id].sizeBytes)})
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold font-serif line-clamp-1" style={{ color: theme.sacredMaroon }}>
                      {selectedTrack?.title || t.selectedDhun}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-shrink-0">
                  {selectedTrack && (selectedTrack as DhunTrack & { isCloud?: boolean }).isCloud && selectedTrack.dataUrl && (
                    <button
                      type="button"
                      onClick={(e) => handleTogglePinOffline(e, selectedTrack)}
                      disabled={pinProgress[selectedTrack.id] !== undefined}
                      className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                        pinnedMap[selectedTrack.id]
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-200 hover:bg-amber-500/20'
                      }`}
                    >
                      {pinProgress[selectedTrack.id] !== undefined ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{pinProgress[selectedTrack.id]}%</span>
                        </>
                      ) : pinnedMap[selectedTrack.id] ? (
                        <>
                          <Pin className="w-4 h-4" />
                          <span>ऑफ़लाइन सेव</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>ऑफ़लाइन डाउनलोड</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Main Play/Pause Button */}
                  <button
                    type="button"
                    onClick={handleToggleCustom}
                    style={{
                      backgroundColor: theme.buttonPrimaryBg,
                      color: theme.buttonPrimaryText,
                    }}
                    className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer flex-shrink-0"
                  >
                    {isCustomPlaying ? (
                      <Pause className="w-7 h-7" />
                    ) : (
                      <Play className="w-7 h-7 translate-x-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Progress Seeker Bar */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={customDuration || 100}
                  value={customCurrentTime}
                  onChange={handleSeek}
                  className="w-full accent-amber-500 h-2 rounded-lg bg-stone-200 dark:bg-stone-700 cursor-pointer"
                />
                <div className="flex justify-between text-xs font-mono" style={{ color: theme.textMuted }}>
                  <span>{formatTime(customCurrentTime)}</span>
                  <span>{formatTime(customDuration)}</span>
                </div>
              </div>

              {/* Volume & Loop Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl border border-amber-400/20 bg-black/5 dark:bg-white/5">
                {/* Volume Slider */}
                <div className="flex items-center gap-2 flex-1 min-w-[140px]">
                  <Volume2 className="w-4 h-4 text-amber-600" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={customVolume}
                    onChange={(e) => setCustomVolume(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 h-1.5 rounded-lg bg-stone-300 dark:bg-stone-700 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold">{Math.round(customVolume * 100)}%</span>
                </div>

                {/* Loop Toggle */}
                <button
                  type="button"
                  onClick={() => setIsLooping(!isLooping)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                    isLooping
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.loop}</span>
                </button>
              </div>

              {/* Custom Track List with Track-level gain slider */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider px-1 flex items-center justify-between" style={{ color: theme.textMuted }}>
                  <span>{t.savedList} ({allDhunTracks.length})</span>
                  <span>{t.trackGain}</span>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {allDhunTracks.map((tr) => {
                    const isSelected = selectedTrack?.id === tr.id;
                    const gainVal = tr.customGain !== undefined ? tr.customGain : 1;
                    return (
                      <div
                        key={tr.id}
                        onClick={() => {
                          setSelectedTrack(tr);
                          setActiveMode('custom');
                        }}
                        className={`p-2.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer transition ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 shadow-xs'
                            : 'bg-black/5 dark:bg-white/5 border-transparent hover:border-amber-400/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          {tr.isCloud ? (
                            <Cloud className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-emerald-600' : 'text-emerald-500/70'}`} />
                          ) : (
                            <Music className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-amber-600' : 'text-stone-400'}`} />
                          )}
                          
                          {isAdmin && editingTrackId === tr.id && !tr.isCloud ? (
                            <div className="flex items-center gap-1.5 flex-1" onClick={(e) => e.stopPropagation()}>
                              <input
                                type="text"
                                value={editingTitle}
                                onChange={(e) => setEditingTitle(e.target.value)}
                                autoFocus
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') handleSaveRename(e as any, tr.id);
                                  if (e.key === 'Escape') setEditingTrackId(null);
                                }}
                                className="w-full text-xs font-bold px-2 py-1 rounded-md border border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none"
                              />
                              <button
                                type="button"
                                onClick={(e) => handleSaveRename(e, tr.id)}
                                className="p-1 rounded bg-amber-500 text-stone-950 hover:bg-amber-600 transition"
                                title="Save Title"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingTrackId(null);
                                }}
                                className="p-1 rounded text-stone-400 hover:text-stone-600"
                                title="Cancel"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs font-bold truncate" style={{ color: theme.textPrimary }}>
                              {tr.title}
                            </span>
                          )}
                        </div>

                        {/* Individual Track Gain Slider & Admin-Only Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-lg border border-amber-500/20">
                            <span className="text-[10px] font-mono text-amber-600">Vol:</span>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.05"
                              value={gainVal}
                              onChange={(e) => handleTrackGainChange(tr.id, parseFloat(e.target.value))}
                              className="w-16 accent-amber-500 h-1 bg-stone-300 dark:bg-stone-700 rounded-lg cursor-pointer"
                              title="Track Specific Volume"
                            />
                            <span className="text-[10px] font-mono w-6 text-right">{Math.round(gainVal * 100)}%</span>
                          </div>

                          {editingTrackId !== tr.id && (
                            <div className="flex items-center gap-1 flex-shrink-0">
                              {tr.isCloud && tr.dataUrl && (
                                <button
                                  type="button"
                                  onClick={(e) => handleTogglePinOffline(e, tr)}
                                  disabled={pinProgress[tr.id] !== undefined}
                                  className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 border transition cursor-pointer ${
                                    pinnedMap[tr.id]
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 hover:bg-amber-500/20'
                                  }`}
                                  title={pinnedMap[tr.id] ? 'ऑफ़लाइन कैश हटाएँ' : 'बिना इंटरनेट सुनने हेतु डाउनलोड करें'}
                                >
                                  {pinProgress[tr.id] !== undefined ? (
                                    <>
                                      <Loader2 className="w-3 h-3 animate-spin" />
                                      <span>{pinProgress[tr.id]}%</span>
                                    </>
                                  ) : pinnedMap[tr.id] ? (
                                    <>
                                      <Pin className="w-3 h-3" />
                                      <span>✓ ऑफ़लाइन</span>
                                    </>
                                  ) : (
                                    <>
                                      <Download className="w-3 h-3" />
                                      <span>सेव</span>
                                    </>
                                  )}
                                </button>
                              )}
                              {isSelected && isCustomPlaying && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 animate-pulse">
                                  {t.playingText}
                                </span>
                              )}
                              {isAdmin && !tr.isCloud && (
                                <button
                                  type="button"
                                  onClick={(e) => handleStartRename(e, tr)}
                                  className="p-1 rounded-lg hover:text-amber-600 text-stone-400 transition cursor-pointer"
                                  title="नाम बदलें (Rename)"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {isAdmin && (
                                <button
                                  type="button"
                                  onClick={(e) => handleDeleteTrack(e, tr.id)}
                                  className="p-1 rounded-lg hover:text-red-600 text-stone-400 transition cursor-pointer"
                                  title={t.deleteTitle}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: Custom Dhun Playlist Sequencer */}
      {activeMode === 'playlist' && (
        <div className="space-y-5 py-2">
          {/* Playlist Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div>
              <div className="flex items-center gap-2">
                <ListMusic className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                  {activePlaylist ? activePlaylist.name : t.playlistTab}
                </h3>
              </div>
              <p className="text-xs mt-0.5" style={{ color: theme.textSecondary }}>
                {activePlaylist?.description || t.playlistDesc}
              </p>
            </div>

            {isAdmin && (
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsCreatingPlaylist(!isCreatingPlaylist)}
                  className="px-3 py-1.5 rounded-xl bg-[#8B2500] text-white hover:bg-amber-700 text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t.createPlaylist}</span>
                </button>

                {activePlaylist && (
                  <button
                    type="button"
                    onClick={(e) => handleDeletePlaylist(e, activePlaylist.id)}
                    className="px-2.5 py-1.5 rounded-xl bg-red-500/10 text-red-600 hover:bg-red-500/20 text-xs font-bold border border-red-500/20 cursor-pointer"
                    title="Delete Playlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* New Playlist Form Modal / Drawer (Admin-Only) */}
          {isAdmin && isCreatingPlaylist && (
            <div className="p-4 rounded-2xl border-2 border-amber-500/40 bg-black/5 dark:bg-white/5 space-y-3 animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                {t.createPlaylist}
              </h4>
              <input
                type="text"
                placeholder={t.playlistNamePlaceholder}
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                className="w-full text-xs font-bold p-2 rounded-xl border border-amber-500/40 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none"
              />
              <input
                type="text"
                placeholder={t.playlistDescPlaceholder}
                value={newPlaylistDesc}
                onChange={(e) => setNewPlaylistDesc(e.target.value)}
                className="w-full text-xs p-2 rounded-xl border border-amber-500/30 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingPlaylist(false)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreatePlaylist}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 shadow-md hover:bg-amber-600"
                >
                  {t.savePlBtn}
                </button>
              </div>
            </div>
          )}

          {/* Playlist Selector Tabs (if multiple) */}
          {playlists.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5">
              {playlists.map((pl) => (
                <button
                  key={pl.id}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setActivePlaylistId(pl.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition cursor-pointer flex items-center gap-1.5 border ${
                    activePlaylistId === pl.id
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-xs'
                      : 'bg-black/5 dark:bg-white/5 text-stone-700 dark:text-stone-300 border-amber-400/20 hover:border-amber-500'
                  }`}
                >
                  <ListMusic className="w-3.5 h-3.5" />
                  <span>{pl.name}</span>
                  <span className="text-[10px] opacity-75">({pl.trackIds.length})</span>
                </button>
              ))}
            </div>
          )}

          {/* Playlist Controls & Playback Bar */}
          {activePlaylist && (
            <div className="space-y-4">
              {/* Playback & Controls Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (activePlaylistTracks.length > 0) {
                        handlePlayPlaylistTrack(playlistTrackIndex);
                      }
                    }}
                    className="w-10 h-10 rounded-xl bg-[#8B2500] text-white flex items-center justify-center hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                  >
                    {isCustomPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
                  </button>

                  <div>
                    <span className="text-[11px] font-mono text-amber-700 dark:text-amber-300">
                      {activePlaylistTracks.length > 0
                        ? `Track ${playlistTrackIndex + 1} of ${activePlaylistTracks.length}`
                        : 'No tracks'}
                    </span>
                    <div className="text-xs font-bold truncate max-w-[200px]" style={{ color: theme.sacredMaroon }}>
                      {activePlaylistTracks[playlistTrackIndex]?.title || 'Select Track'}
                    </div>
                  </div>
                </div>

                {/* Playlist Modes: Repeat All, Shuffle */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setIsRepeatAll(!isRepeatAll);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border transition cursor-pointer ${
                      isRepeatAll
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-xs'
                        : 'bg-black/5 dark:bg-white/5 text-stone-500 border-amber-500/20'
                    }`}
                    title={t.repeatAll}
                  >
                    <Repeat className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">{t.repeatAll}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setIsShuffle(!isShuffle);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border transition cursor-pointer ${
                      isShuffle
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-xs'
                        : 'bg-black/5 dark:bg-white/5 text-stone-500 border-amber-500/20'
                    }`}
                    title={t.shuffle}
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">{t.shuffle}</span>
                  </button>
                </div>
              </div>

              {/* Playlist Ordered Track List */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider px-1 text-amber-700 dark:text-amber-300">
                  || {language === 'hi' ? 'प्लेलिस्ट ट्रैक क्रम (Sequenced Tracks)' : language === 'pb' ? 'ਪਲੇਲਿਸਟ ਟਰੈਕ ਲੜੀ' : 'Playlist Sequence'} ||
                </div>

                {activePlaylistTracks.length === 0 ? (
                  <div className="p-4 rounded-xl border border-dashed border-amber-400/40 text-center text-xs text-stone-500">
                    {t.emptyPlaylistMsg}
                  </div>
                ) : (
                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                    {activePlaylistTracks.map((tr, idx) => {
                      const isCurrent = playlistTrackIndex === idx;
                      const gainVal = tr.customGain !== undefined ? tr.customGain : 1;
                      return (
                        <div
                          key={`${tr.id}_${idx}`}
                          onClick={() => handlePlayPlaylistTrack(idx)}
                          className={`p-2 rounded-xl border flex items-center justify-between gap-2 transition cursor-pointer ${
                            isCurrent
                              ? 'bg-amber-500/20 border-amber-500 shadow-xs'
                              : 'bg-black/5 dark:bg-white/5 border-transparent hover:border-amber-400/30'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <Music className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-amber-600' : 'text-stone-400'}`} />
                            <span className="text-xs font-bold truncate" style={{ color: theme.textPrimary }}>
                              {tr.title}
                            </span>
                          </div>

                          {/* Sequencer Controls: Move Up, Move Down, Volume slider, Remove */}
                          <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                            {/* Track Gain Slider */}
                            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded border border-amber-500/20">
                              <span className="text-[9px] font-mono text-amber-600">Vol:</span>
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={gainVal}
                                onChange={(e) => handleTrackGainChange(tr.id, parseFloat(e.target.value))}
                                className="w-12 accent-amber-500 h-1 bg-stone-300 dark:bg-stone-700 rounded cursor-pointer"
                              />
                            </div>

                            {/* Move Up, Move Down, Remove (Admin-Only) */}
                            {isAdmin && (
                              <>
                                <button
                                  type="button"
                                  disabled={idx === 0}
                                  onClick={() => handleMoveTrackOrder(activePlaylist.id, idx, idx - 1)}
                                  className="p-1 rounded hover:bg-amber-500/20 text-stone-400 disabled:opacity-30 cursor-pointer"
                                  title="Move Up"
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  disabled={idx === activePlaylistTracks.length - 1}
                                  onClick={() => handleMoveTrackOrder(activePlaylist.id, idx, idx + 1)}
                                  className="p-1 rounded hover:bg-amber-500/20 text-stone-400 disabled:opacity-30 cursor-pointer"
                                  title="Move Down"
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleRemoveTrackFromPlaylist(activePlaylist.id, tr.id)}
                                  className="p-1 rounded hover:text-red-600 text-stone-400 cursor-pointer"
                                  title="Remove"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Add Tracks into Active Playlist from Library (Admin-Only) */}
              {isAdmin && (
                <div className="mt-4 pt-3 border-t border-amber-500/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider px-1 text-stone-500">
                    + {language === 'hi' ? 'लाइब्रेरी से ट्रैक जोड़ें' : language === 'pb' ? 'ਲਾਇਬ੍ਰੇਰੀ ਤੋਂ ਟਰੈਕ ਜੋੜੋ' : 'Add Available Tracks to Playlist'}
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                    {allDhunTracks.map((tr) => {
                      const isAlreadyIn = activePlaylist.trackIds.includes(tr.id);
                      return (
                        <button
                          key={`avail_${tr.id}`}
                          type="button"
                          disabled={isAlreadyIn}
                          onClick={() => handleAddTrackToPlaylist(activePlaylist.id, tr.id)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                            isAlreadyIn
                              ? 'bg-amber-500/10 text-stone-400 border-transparent opacity-60'
                              : 'bg-black/5 dark:bg-white/5 border-amber-500/30 text-stone-800 dark:text-stone-200 hover:bg-amber-500 hover:text-stone-950 cursor-pointer'
                          }`}
                        >
                          <Plus className="w-3 h-3" />
                          <span className="truncate max-w-[150px]">{tr.title}</span>
                          {isAlreadyIn && <Check className="w-3 h-3 text-amber-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {playlists.length === 0 && (
            <div className="p-6 rounded-2xl border-2 border-dashed border-amber-400/40 text-center space-y-3">
              <ListMusic className="w-8 h-8 mx-auto text-amber-600" />
              <p className="text-xs text-stone-500">
                {isAdmin
                  ? t.noPlaylistsMsg
                  : (language === 'hi'
                      ? 'अभी कोई सार्वजनिक प्लेलिस्ट नहीं है। केवल अधिकृत एडमिन ही प्लेलिस्ट बना सकते हैं।'
                      : t.noPlaylistsMsg)}
              </p>
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => setIsCreatingPlaylist(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs shadow-md cursor-pointer"
                >
                  {t.createPlaylist}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Meditation Timer Footer */}
      <div 
        className="mt-5 pt-4 border-t border-amber-400/20 flex flex-col gap-3.5"
        style={{ borderColor: theme.cardBorder }}
      >
        {/* Daily Affirmation */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
          <p className="text-xs font-bold font-serif italic text-amber-900 dark:text-amber-200">
            "{affirmation.text[language]}"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
          <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold font-serif" style={{ color: theme.sacredMaroon }}>
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{language === 'pb' ? 'ਧਿਆਨ ਸਮਾਂ (Timer):' : language === 'en' ? 'Meditation Timer:' : 'ध्यान समय (Timer):'}</span>
          </div>

          {remainingSeconds > 0 ? (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-mono font-black text-xs shadow-xs animate-pulse">
              ⏱️ {formatTime(remainingSeconds)} {language === 'pb' ? 'ਬਾਕੀ' : language === 'en' ? 'left' : 'शेष'}
            </span>
          ) : (
            <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 font-serif">
              {timerMinutes === 0 
                ? (language === 'pb' ? '(ਨਿਰੰਤਰ ਚੱਲੇਗਾ)' : language === 'en' ? '(Continuous Play)' : '(निरंतर प्रवाह)') 
                : ''}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Requested Timer Presets: Off, 10m, 15m, 20m, 30m, 45m, 60m */}
          {[0, 10, 15, 20, 30, 45, 60].map((mins) => {
            const isSelected = timerMinutes === mins;
            return (
              <button
                key={mins}
                type="button"
                onClick={() => setTimerMinutes(mins)}
                style={{
                  backgroundColor: isSelected ? theme.accentGold : undefined,
                  color: isSelected ? '#1c1917' : undefined,
                  borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black font-mono border transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                  isSelected
                    ? 'shadow-md ring-2 ring-amber-400/40 font-black'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400'
                }`}
              >
                {mins === 0 
                  ? (language === 'pb' ? 'ਬੰਦ (Off)' : language === 'en' ? 'Off' : 'ऑफ (Off)') 
                  : `${mins}m`}
              </button>
            );
          })}

          {onClose && (
            <button
              id="footer-close-dhun-player-btn"
              type="button"
              onClick={handleClosePlayer}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="ml-auto sm:ml-2 px-3 py-1.5 rounded-xl border text-xs font-bold font-serif flex items-center gap-1 hover:scale-105 transition-all cursor-pointer shadow-2xs active:scale-95"
              title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Back' : 'वापस जाएं'}</span>
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
