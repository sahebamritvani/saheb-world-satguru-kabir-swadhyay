/**
 * Saheb World - Sacred Ambient Audio Engine
 * 100% Offline Procedural Synthesis for Sacred Meditation & Swadhyay Reading Focus
 * Zero network requests, 100% offline pure Web Audio API
 * 
 * Features:
 * 1. Temple Bells (मन्दिर घण्टियाँ व मंजीरा): Multi-harmonic resonant brass bells & manjira
 * 2. Bansuri (दिव्य बांसुरी): Warm Indian bamboo flute with breath formant & gentle vibrato melody
 * 3. Been (पावन बीन): Hypnotic spiritual been / drone with dual reed and formant filters
 * 4. Tanpura (मधुर तानपुरा): Classical 4-string acoustic Tanpura arpeggio with natural jwari resonance
 * 5. Satyanaam Naad (सत्यनाम अमृत नाद): Plucked swarmandal harp & amrit veena shimmer
 */

export type AmbientSoundType = 'none' | 'temple_bells' | 'bansuri' | 'been' | 'tanpura' | 'satyanaam';

export interface AmbientSoundOption {
  id: AmbientSoundType;
  label: {
    hi: string;
    pb: string;
    en: string;
  };
  subtitle: {
    hi: string;
    pb: string;
    en: string;
  };
  iconName: 'bell' | 'flute' | 'been' | 'tanpura' | 'satyanaam' | 'none';
}

export const AMBIENT_SOUND_OPTIONS: AmbientSoundOption[] = [
  {
    id: 'none',
    label: {
      hi: 'मौन (शांत)',
      pb: 'ਮੌਨ (ਸ਼ਾਂਤ)',
      en: 'Silent (Off)',
    },
    subtitle: {
      hi: 'केवल पूर्ण मौन',
      pb: 'ਸਿਰਫ ਪੂਰਨ ਮੌਨ',
      en: 'Pure silence',
    },
    iconName: 'none',
  },
  {
    id: 'temple_bells',
    label: {
      hi: 'मन्दिर घण्टियाँ व मंजीरा',
      pb: 'ਮੰਦਰ ਘੰਟੀਆਂ ਤੇ ਮੰਝੀਰਾ',
      en: 'Temple Bells & Chimes',
    },
    subtitle: {
      hi: 'पवित्र पीतल घण्टा व मंजीरा नाद',
      pb: 'ਪਵਿੱਤਰ ਪਿੱਤਲ ਘੰਟਾ ਤੇ ਮੰਝੀਰਾ ਨਾਦ',
      en: 'Sacred brass bells and delicate chimes',
    },
    iconName: 'bell',
  },
  {
    id: 'bansuri',
    label: {
      hi: 'दिव्य बांसुरी',
      pb: 'ਦਿਵਯ ਬੰਸਰੀ',
      en: 'Sacred Bansuri (Flute)',
    },
    subtitle: {
      hi: 'मधुर बांसुरी स्वर व शांत राग',
      pb: 'ਮਿੱਠੀ ਬੰਸਰੀ ਸੁਰ ਤੇ ਸ਼ਾਂਤ ਰਾਗ',
      en: 'Mellow bamboo flute melody with gentle breath vibrato',
    },
    iconName: 'flute',
  },
  {
    id: 'been',
    label: {
      hi: 'पावन बीन नाद',
      pb: 'ਪਾਵਨ ਬੀਨ ਨਾਦ',
      en: 'Spiritual Been & Drone',
    },
    subtitle: {
      hi: 'पारंपरिक संत बीन व तान',
      pb: 'ਰਵਾਇਤੀ ਸੰਤ ਬੀਨ ਤੇ ਤਾਨ',
      en: 'Hypnotic spiritual been drone & resonance',
    },
    iconName: 'been',
  },
  {
    id: 'tanpura',
    label: {
      hi: 'मधुर तानपुरा',
      pb: 'ਮਧੁਰ ਤਾਨਪੁਰਾ',
      en: 'Soft Acoustic Tanpura',
    },
    subtitle: {
      hi: 'शास्त्रीय ४-तार तानपुरा मंद्र सुर',
      pb: 'ਸ਼ਾਸਤਰੀ ੪-ਤਾਰ ਤਾਨਪੁਰਾ ਸੁਰ',
      en: 'Continuous 4-string acoustic Tanpura arpeggio',
    },
    iconName: 'tanpura',
  },
  {
    id: 'satyanaam',
    label: {
      hi: 'सत्यनाम अमृत नाद',
      pb: 'ਸਤਯਨਾਮ ਅੰਮ੍ਰਿਤ ਨਾਦ',
      en: 'Satyanaam Resonance',
    },
    subtitle: {
      hi: 'स्वरामण्डल व वीणा दिव्य तरंग',
      pb: 'ਸਵਰਮੰਡਲ ਤੇ ਵੀਣਾ ਦਿਵਯ ਤਰੰਗ',
      en: 'Swarmandal harp and celestial Amrit Veena',
    },
    iconName: 'satyanaam',
  },
];

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private currentSound: AmbientSoundType = 'none';
  private isPlaying = false;
  private volume = 0.45;
  private activeTimers: number[] = [];
  private activeNodes: { stop?: () => void; disconnect: () => void }[] = [];
  private listeners: ((sound: AmbientSoundType, isPlaying: boolean, volume: number) => void)[] = [];
  private stopFadeTimer: number | null = null;
  private cachedBansuriNoiseBuffer: AudioBuffer | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedSound = localStorage.getItem('sahebworld_ambient_sound') as AmbientSoundType;
      const savedVol = localStorage.getItem('sahebworld_ambient_vol');
      if (savedVol !== null) {
        this.volume = parseFloat(savedVol) || 0.45;
      }
      if (savedSound && savedSound !== 'none') {
        this.currentSound = savedSound;
      }
    }
  }

  private initContext() {
    if (typeof window === 'undefined') return;

    if (this.ctx && this.ctx.state === 'closed') {
      this.ctx = null;
      this.masterGain = null;
      this.cachedBansuriNoiseBuffer = null;
    }

    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }

    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      // Mobile Safari / Chrome gesture unlock via zero-amplitude 1-sample buffer
      try {
        const silentBuf = this.ctx.createBuffer(1, 1, this.ctx.sampleRate);
        const silentSrc = this.ctx.createBufferSource();
        silentSrc.buffer = silentBuf;
        silentSrc.connect(this.ctx.destination);
        silentSrc.start(0);
      } catch {
        // Ignore if unlock fails
      }
    }
  }

  public subscribe(listener: (sound: AmbientSoundType, isPlaying: boolean, volume: number) => void) {
    this.listeners.push(listener);
    listener(this.currentSound, this.isPlaying, this.volume);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l(this.currentSound, this.isPlaying, this.volume));
  }

  public getCurrentSound(): AmbientSoundType {
    return this.currentSound;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.08);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_ambient_vol', String(this.volume));
    }
    this.notify();
  }

  public toggleSound(sound: AmbientSoundType) {
    if (this.isPlaying && this.currentSound === sound) {
      this.stop();
    } else {
      this.play(sound);
    }
  }

  public play(sound: AmbientSoundType = this.currentSound, vol?: number) {
    if (sound === 'none') {
      this.stop();
      return;
    }

    this.initContext();
    if (!this.ctx) return;

    if (vol !== undefined) {
      this.volume = vol;
    }

    this.cleanupNodes();
    this.currentSound = sound;
    this.isPlaying = true;

    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_ambient_sound', sound);
    }

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 0.8);
    this.masterGain.connect(this.ctx.destination);

    switch (sound) {
      case 'temple_bells':
        this.startTempleBellsEngine(this.masterGain);
        break;
      case 'bansuri':
        this.startBansuriEngine(this.masterGain);
        break;
      case 'been':
        this.startBeenEngine(this.masterGain);
        break;
      case 'tanpura':
        this.startTanpuraEngine(this.masterGain);
        break;
      case 'satyanaam':
        this.startSatyanaamEngine(this.masterGain);
        break;
    }

    this.notify();
  }

  public stop() {
    this.isPlaying = false;
    this.cleanupNodes();
    this.notify();
  }

  private cleanupNodes() {
    this.activeTimers.forEach((t) => clearInterval(t));
    this.activeTimers = [];

    this.activeNodes.forEach((n) => {
      try {
        if (n.stop) n.stop();
      } catch {}
      try {
        n.disconnect();
      } catch {}
    });
    this.activeNodes = [];

    if (this.stopFadeTimer !== null) {
      clearTimeout(this.stopFadeTimer);
      this.stopFadeTimer = null;
    }

    if (this.masterGain && this.ctx) {
      const fadingGain = this.masterGain;
      this.masterGain = null;
      const now = this.ctx.currentTime;
      try {
        fadingGain.gain.cancelScheduledValues(now);
        fadingGain.gain.setValueAtTime(fadingGain.gain.value, now);
        fadingGain.gain.linearRampToValueAtTime(0.0001, now + 0.3);
      } catch {}
      this.stopFadeTimer = window.setTimeout(() => {
        this.stopFadeTimer = null;
        try {
          fadingGain.disconnect();
        } catch {}
      }, 340);
    }
  }

  // ==========================================
  // 1. TEMPLE BELLS & MANJIRA ENGINE
  // ==========================================
  private startTempleBellsEngine(outputNode: AudioNode) {
    if (!this.ctx) return;

    const ringOnce = () => {
      if (!this.ctx || !this.isPlaying) return;
      const now = this.ctx.currentTime;

      // Heavy resonant brass temple bell (Fundamental 330 Hz / E4 with bright harmonics)
      const harmonics = [
        { ratio: 1.0, gain: 0.18, decay: 4.5 },
        { ratio: 2.76, gain: 0.12, decay: 3.8 },
        { ratio: 4.07, gain: 0.08, decay: 3.0 },
        { ratio: 5.43, gain: 0.05, decay: 2.2 },
        { ratio: 8.91, gain: 0.02, decay: 1.2 },
      ];

      const bellFund = 329.63; // E4
      harmonics.forEach((h) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(bellFund * h.ratio, now);

        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(h.gain, now + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(g);
        g.connect(outputNode);

        osc.start(now);
        osc.stop(now + h.decay + 0.1);
        osc.onended = () => {
          try { osc.disconnect(); g.disconnect(); } catch {}
        };
      });

      // Subtle high-pitch manjira shimmer after 0.4s
      const manjiraTime = now + 0.4;
      [1760, 2640, 3520].forEach((freq) => {
        if (!this.ctx) return;
        const mOsc = this.ctx.createOscillator();
        const mGain = this.ctx.createGain();

        mOsc.type = 'sine';
        mOsc.frequency.setValueAtTime(freq, manjiraTime);

        mGain.gain.setValueAtTime(0, manjiraTime);
        mGain.gain.linearRampToValueAtTime(0.02, manjiraTime + 0.005);
        mGain.gain.exponentialRampToValueAtTime(0.0001, manjiraTime + 2.0);

        mOsc.connect(mGain);
        mGain.connect(outputNode);

        mOsc.start(manjiraTime);
        mOsc.stop(manjiraTime + 2.1);
        mOsc.onended = () => {
          try { mOsc.disconnect(); mGain.disconnect(); } catch {}
        };
      });
    };

    ringOnce();
    const timer = window.setInterval(ringOnce, 7500);
    this.activeTimers.push(timer);
  }

  // ==========================================
  // 2. BANSURI (SACRED BAMBOO FLUTE) ENGINE
  // ==========================================
  private startBansuriEngine(outputNode: AudioNode) {
    if (!this.ctx) return;

    // Warm, meditative Raag Bilawal / Bhupali scale notes (Sa, Re, Ga, Pa, Dha)
    // E4, F#4, G#4, B4, C#5, E5
    const bansuriNotes = [329.63, 369.99, 415.30, 493.88, 554.37, 659.25, 554.37, 493.88];
    let noteIndex = 0;

    const playFluteTone = () => {
      if (!this.ctx || !this.isPlaying) return;
      const now = this.ctx.currentTime;
      const targetFreq = bansuriNotes[noteIndex % bansuriNotes.length];
      noteIndex++;

      const duration = 4.2;

      // 1. Fundamental tone oscillator (sine)
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(targetFreq, now);

      // Subtle flute glissando / portamento
      osc.frequency.exponentialRampToValueAtTime(targetFreq * 1.002, now + duration);

      // 2. Vibrato LFO (5.2 Hz)
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(5.2, now);
      vibratoGain.gain.setValueAtTime(targetFreq * 0.015, now);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);
      vibrato.start(now);
      vibrato.stop(now + duration);

      // 3. Breath Air Noise (reuse single cached white-noise buffer)
      if (!this.cachedBansuriNoiseBuffer || this.cachedBansuriNoiseBuffer.sampleRate !== this.ctx.sampleRate) {
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        this.cachedBansuriNoiseBuffer = noiseBuffer;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = this.cachedBansuriNoiseBuffer;
      noise.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(targetFreq * 2.5, now);
      noiseFilter.Q.setValueAtTime(6.0, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0, now);
      noiseGain.gain.linearRampToValueAtTime(0.012, now + 0.6);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(outputNode);
      noise.start(now);
      noise.stop(now + duration);

      // 4. Tone Envelope: gentle swelling attack and peaceful breath release
      const toneGain = this.ctx.createGain();
      toneGain.gain.setValueAtTime(0, now);
      toneGain.gain.linearRampToValueAtTime(0.14, now + 0.8);
      toneGain.gain.setValueAtTime(0.14, now + duration - 1.2);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(toneGain);
      toneGain.connect(outputNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);
      osc.onended = () => {
        try {
          vibrato.disconnect();
          vibratoGain.disconnect();
          noise.disconnect();
          noiseFilter.disconnect();
          noiseGain.disconnect();
          osc.disconnect();
          toneGain.disconnect();
        } catch {}
      };
    };

    playFluteTone();
    const timer = window.setInterval(playFluteTone, 4600);
    this.activeTimers.push(timer);
  }

  // ==========================================
  // 3. BEEN (SPIRITUAL BEEN & DRONE) ENGINE
  // ==========================================
  private startBeenEngine(outputNode: AudioNode) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Base Drone (110 Hz / A2)
    const droneOsc = this.ctx.createOscillator();
    const droneGain = this.ctx.createGain();
    const droneFilter = this.ctx.createBiquadFilter();

    droneOsc.type = 'sawtooth';
    droneOsc.frequency.setValueAtTime(110, now);

    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(420, now);
    droneFilter.Q.setValueAtTime(4.0, now);

    droneGain.gain.setValueAtTime(0, now);
    droneGain.gain.linearRampToValueAtTime(0.07, now + 1.5);

    droneOsc.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(outputNode);
    droneOsc.start(now);

    this.activeNodes.push({
      stop: () => {
        try { droneOsc.stop(); } catch {}
      },
      disconnect: () => {
        try { droneOsc.disconnect(); droneFilter.disconnect(); droneGain.disconnect(); } catch {}
      },
    });

    // Melodic Been Chanter Reed (swaying between 220Hz - 330Hz with nasal formant)
    const beenScale = [220.00, 246.94, 277.18, 329.63, 369.99, 329.63, 277.18];
    let noteIdx = 0;

    const playBeenNote = () => {
      if (!this.ctx || !this.isPlaying) return;
      const cNow = this.ctx.currentTime;
      const freq = beenScale[noteIdx % beenScale.length];
      noteIdx++;

      const chanter = this.ctx.createOscillator();
      const chanterFilter = this.ctx.createBiquadFilter();
      const chanterGain = this.ctx.createGain();

      chanter.type = 'sawtooth';
      chanter.frequency.setValueAtTime(freq, cNow);
      chanter.frequency.linearRampToValueAtTime(freq * 1.01, cNow + 3.2);

      // Nasal gourd formant filter
      chanterFilter.type = 'bandpass';
      chanterFilter.frequency.setValueAtTime(freq * 2.2, cNow);
      chanterFilter.Q.setValueAtTime(5.5, cNow);

      chanterGain.gain.setValueAtTime(0, cNow);
      chanterGain.gain.linearRampToValueAtTime(0.06, cNow + 0.5);
      chanterGain.gain.exponentialRampToValueAtTime(0.0001, cNow + 3.4);

      chanter.connect(chanterFilter);
      chanterFilter.connect(chanterGain);
      chanterGain.connect(outputNode);

      chanter.start(cNow);
      chanter.stop(cNow + 3.5);
      chanter.onended = () => {
        try { chanter.disconnect(); chanterFilter.disconnect(); chanterGain.disconnect(); } catch {}
      };
    };

    playBeenNote();
    const chanterTimer = window.setInterval(playBeenNote, 3600);
    this.activeTimers.push(chanterTimer);
  }

  // ==========================================
  // 4. SOFT ACOUSTIC TANPURA ENGINE
  // ==========================================
  private startTanpuraEngine(outputNode: AudioNode) {
    if (!this.ctx) return;

    // 4 strings in standard tuning (Pa, Sa, Sa, Sa):
    // String 1: G3 (196 Hz)
    // String 2: C4 (261.63 Hz)
    // String 3: C4 (261.63 Hz)
    // String 4: C3 (130.81 Hz - low Sa base)
    const strings = [196.00, 261.63, 261.63, 130.81];
    const delays = [0, 1.25, 2.5, 3.75]; // Plucked at regular 1.25s intervals (5.0s full loop)

    const pluckString = (freq: number, delay: number) => {
      if (!this.ctx || !this.isPlaying) return;
      const now = this.ctx.currentTime + delay;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      // Triangle / sawtooth mix for rich harmonic jwari buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      // Jwari filter (enhances 800Hz - 1500Hz buzz)
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.5, now);
      filter.Q.setValueAtTime(4.0, now);

      // Pluck envelope
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(outputNode);

      osc.start(now);
      osc.stop(now + 4.9);
      osc.onended = () => {
        try { osc.disconnect(); filter.disconnect(); gain.disconnect(); } catch {}
      };
    };

    const cycleTanpura = () => {
      if (!this.isPlaying) return;
      strings.forEach((f, i) => pluckString(f, delays[i]));
    };

    cycleTanpura();
    const timer = window.setInterval(cycleTanpura, 5000);
    this.activeTimers.push(timer);
  }

  // ==========================================
  // 5. SATYANAAM RESONANCE & SWARMANDAL
  // ==========================================
  private startSatyanaamEngine(outputNode: AudioNode) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Celestial High Veena Shimmer (D5 & A5)
    [587.33, 880.00].forEach((f) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.02, now + 1.0);

      osc.connect(g);
      g.connect(outputNode);
      osc.start(now);

      this.activeNodes.push({
        stop: () => {
          try { osc.stop(); } catch {}
        },
        disconnect: () => {
          try { osc.disconnect(); g.disconnect(); } catch {}
        },
      });
    });

    // Plucked Swarmandal Arpeggio
    const scale = [293.66, 369.99, 440.00, 493.88, 587.33, 440.00, 369.99];
    const delays = [0, 0.28, 0.56, 0.88, 1.22, 1.58, 1.94];

    const playArpeggio = () => {
      if (!this.ctx || !this.isPlaying) return;
      const cNow = this.ctx.currentTime;

      scale.forEach((freq, idx) => {
        if (!this.ctx) return;
        const noteTime = cNow + delays[idx];

        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 1.5, noteTime);
        filter.Q.setValueAtTime(3.0, noteTime);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        noteGain.gain.setValueAtTime(0, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.1, noteTime + 0.015);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.8);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(outputNode);

        osc.start(noteTime);
        osc.stop(noteTime + 1.85);
        osc.onended = () => {
          try { osc.disconnect(); filter.disconnect(); noteGain.disconnect(); } catch {}
        };
      });
    };

    playArpeggio();
    const arpTimer = window.setInterval(playArpeggio, 3800);
    this.activeTimers.push(arpTimer);
  }
}

export const ambientAudio = new AmbientAudioEngine();
