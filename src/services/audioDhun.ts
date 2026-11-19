/**
 * Saheb World - Sacred Audio Engine
 * Pure Web Audio API Satyanaam Swarmandal & Satyanaam Chanting Simran Engine
 * Strictly Satyanaam (Satlok / Sant Mat Tradition) - 100% Free of any Om sound, drone, or frequency
 * 100% Offline, Zero external audio file dependencies
 */

import { Language } from '../types';

export interface DhunSoundMix {
  swarmandal: number; // 0 to 100
  veena: number;      // 0 to 100
  vocal: number;      // 0 to 100
  chime: number;      // 0 to 100
  flute: number;      // 0 to 100
  nature: number;     // 0 to 100
}

export const DEFAULT_DHUN_SOUND_MIX: DhunSoundMix = {
  swarmandal: 80,
  veena: 65,
  vocal: 85,
  chime: 60,
  flute: 50,
  nature: 35,
};

class SatyanaamAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private volume = 0.55;
  private activeLanguage: Language = 'hi';
  private vocalChantEnabled = true;
  private isMuted = false;

  // Granular Channel Gains for Sound Mix
  private soundMix: DhunSoundMix = { ...DEFAULT_DHUN_SOUND_MIX };
  private swarmandalGainNode: GainNode | null = null;
  private veenaGainNode: GainNode | null = null;
  private chimeGainNode: GainNode | null = null;
  private fluteGainNode: GainNode | null = null;
  private natureGainNode: GainNode | null = null;

  // Timers and nodes
  private swarmandalTimer: number | null = null;
  private fluteTimer: number | null = null;
  private vocalTimer: number | null = null;
  private bellTimer: number | null = null;
  private stopFadeTimer: number | null = null;
  private vocalSessionToken = 0;
  private ambientNodes: { stop: () => void; disconnect: () => void }[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const savedVocal = localStorage.getItem('sahebworld_vocal_dhun');
      if (savedVocal !== null) {
        this.vocalChantEnabled = savedVocal === 'true';
      }
      try {
        const savedMix = localStorage.getItem('sahebworld_dhun_sound_mix');
        if (savedMix) {
          this.soundMix = { ...DEFAULT_DHUN_SOUND_MIX, ...JSON.parse(savedMix) };
        }
      } catch {}

      this.isMuted = localStorage.getItem('sahebworld_is_muted') === 'true';
      window.addEventListener('sahebworld_mute_changed', (e: any) => {
        this.isMuted = e.detail;
        if (this.isMuted) {
          this.setInternalVolume(0);
        } else {
          this.setInternalVolume(this.volume);
        }
      });
    }
  }

  public getSoundMix(): DhunSoundMix {
    return { ...this.soundMix };
  }

  public setSoundMix(newMix: Partial<DhunSoundMix>) {
    this.soundMix = { ...this.soundMix, ...newMix };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sahebworld_dhun_sound_mix', JSON.stringify(this.soundMix));
      } catch {}
    }
    this.applyChannelGains();
  }

  public setChannelVolume(channel: keyof DhunSoundMix, val: number) {
    const clamped = Math.max(0, Math.min(100, val));
    this.setSoundMix({ [channel]: clamped });
  }

  private applyChannelGains() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const rampTime = 0.05;

    if (this.swarmandalGainNode) {
      const gainVal = (this.soundMix.swarmandal / 100);
      this.swarmandalGainNode.gain.setTargetAtTime(gainVal, now, rampTime);
    }
    if (this.veenaGainNode) {
      const gainVal = (this.soundMix.veena / 100);
      this.veenaGainNode.gain.setTargetAtTime(gainVal, now, rampTime);
    }
    if (this.chimeGainNode) {
      const gainVal = (this.soundMix.chime / 100);
      this.chimeGainNode.gain.setTargetAtTime(gainVal, now, rampTime);
    }
    if (this.fluteGainNode) {
      const gainVal = (this.soundMix.flute / 100);
      this.fluteGainNode.gain.setTargetAtTime(gainVal, now, rampTime);
    }
    if (this.natureGainNode) {
      const gainVal = (this.soundMix.nature / 100);
      this.natureGainNode.gain.setTargetAtTime(gainVal, now, rampTime);
    }
  }

  private setInternalVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(vol, this.ctx.currentTime, 0.05);
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play() {
    this.startDhun();
  }

  public pause() {
    this.stopDhun();
  }

  public stop() {
    this.stopDhun();
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public setLanguage(lang: Language) {
    this.activeLanguage = lang;
  }

  public getVocalChantEnabled(): boolean {
    return this.vocalChantEnabled;
  }

  public setVocalChantEnabled(enabled: boolean) {
    this.vocalChantEnabled = enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_vocal_dhun', String(enabled));
    }
    if (!enabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public toggleVocalChant(): boolean {
    this.setVocalChantEnabled(!this.vocalChantEnabled);
    return this.vocalChantEnabled;
  }

  /**
   * Starts the peaceful Satyanaam soundscape with configurable multi-channel mix:
   * 1. Pure Swarmandal / Santoor plucked harp arpeggios (Raag Kalyan / Bilawal D-major)
   * 2. Celestial Amrit Veena light shimmer (587Hz & 880Hz)
   * 3. Authentic, peaceful vocal chanting loop: "सत्यनाम... सत्यनाम"
   * 4. 3-stroke musical "Sat-ya-Naam" brass manjira chimes
   * 5. Anhad Bansuri / Devotional Flute
   * 6. Mansarovar Divine Stream
   */
  public startDhun(customMix?: Partial<DhunSoundMix>) {
    this.initContext();
    if (!this.ctx) return;
    if (this.isPlaying) {
      if (customMix) {
        this.setSoundMix(customMix);
      }
      return;
    }

    if (customMix) {
      this.soundMix = { ...this.soundMix, ...customMix };
    }

    if (this.stopFadeTimer !== null) {
      clearTimeout(this.stopFadeTimer);
      this.stopFadeTimer = null;
    }

    // Ensure any previous timers/nodes are cleared cleanly before starting
    this.clearPlaybackTimers();
    this.ambientNodes.forEach((node) => {
      node.stop();
      node.disconnect();
    });
    this.ambientNodes = [];

    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : this.volume, now + 1.2);
    this.masterGain.connect(this.ctx.destination);

    // Highpass Filter at 280Hz: Ensures NO low-frequency humming or Om frequencies (60Hz-150Hz) can ever pass through
    const highpassSafety = this.ctx.createBiquadFilter();
    highpassSafety.type = 'highpass';
    highpassSafety.frequency.setValueAtTime(280, now);
    highpassSafety.connect(this.masterGain);

    // Create Individual Channel Gain Nodes
    this.swarmandalGainNode = this.ctx.createGain();
    this.swarmandalGainNode.gain.setValueAtTime(this.soundMix.swarmandal / 100, now);
    this.swarmandalGainNode.connect(highpassSafety);

    this.veenaGainNode = this.ctx.createGain();
    this.veenaGainNode.gain.setValueAtTime(this.soundMix.veena / 100, now);
    this.veenaGainNode.connect(highpassSafety);

    this.chimeGainNode = this.ctx.createGain();
    this.chimeGainNode.gain.setValueAtTime(this.soundMix.chime / 100, now);
    this.chimeGainNode.connect(highpassSafety);

    this.fluteGainNode = this.ctx.createGain();
    this.fluteGainNode.gain.setValueAtTime(this.soundMix.flute / 100, now);
    this.fluteGainNode.connect(highpassSafety);

    this.natureGainNode = this.ctx.createGain();
    this.natureGainNode.gain.setValueAtTime(this.soundMix.nature / 100, now);
    this.natureGainNode.connect(this.masterGain);

    // 1. Satlok Amrit Veena - Soft celestial string shimmer (D5 = 587.33 Hz, A5 = 880 Hz)
    this.startAmritVeenaShimmer(this.veenaGainNode);

    // 2. Continuous Swarmandal Arpeggio Loop (Plucked strings, peaceful ashram atmosphere)
    this.playSwarmandalArpeggio(this.swarmandalGainNode);
    this.swarmandalTimer = window.setInterval(() => {
      if (this.isPlaying && this.ctx && this.swarmandalGainNode) {
        this.playSwarmandalArpeggio(this.swarmandalGainNode);
      }
    }, 3800);

    // 3. Periodic "Sat-ya-Naam" 3-tone brass chime (every 18 seconds)
    this.ringSatyanaamTripleChime();
    this.bellTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.ringSatyanaamTripleChime();
      }
    }, 18000);

    // 4. Anhad Flute Melody Loop
    this.startFluteLoop(this.fluteGainNode);

    // 5. Mansarovar Divine Stream
    this.startStreamNode(this.natureGainNode);

    // 6. Peaceful vocal chanting loop ("सत्यनाम... सत्यनाम")
    if (this.vocalChantEnabled && this.soundMix.vocal > 0) {
      this.startVocalChantingLoop();
    }
  }

  /**
   * Flute melody loop for gentle background layering
   */
  private startFluteLoop(outputNode: AudioNode) {
    if (!this.ctx) return;
    const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];
    let nIdx = 0;

    const playFluteNote = () => {
      if (!this.ctx || !this.isPlaying || !this.fluteGainNode) return;
      const t = this.ctx.currentTime;
      const f = notes[nIdx % notes.length];
      nIdx = (nIdx + 1) % notes.length;

      const osc = this.ctx.createOscillator();
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      const noteGain = this.ctx.createGain();

      vibrato.frequency.setValueAtTime(5.5, t);
      vibratoGain.gain.setValueAtTime(4.0, t);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      noteGain.gain.setValueAtTime(0, t);
      noteGain.gain.linearRampToValueAtTime(0.2, t + 0.6);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, t + 4.2);

      osc.connect(noteGain);
      noteGain.connect(outputNode);

      vibrato.start(t);
      osc.start(t);
      vibrato.stop(t + 4.3);
      osc.stop(t + 4.3);
      osc.onended = () => {
        try {
          vibrato.disconnect();
          vibratoGain.disconnect();
          osc.disconnect();
          noteGain.disconnect();
        } catch {}
      };
    };

    playFluteNote();
    this.fluteTimer = window.setInterval(playFluteNote, 3600);
  }

  /**
   * Mansarovar Stream gentle pink noise
   */
  private startStreamNode(outputNode: AudioNode) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.05;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(outputNode);
    whiteNoise.start();

    this.ambientNodes.push({
      stop: () => {
        try { whiteNoise.stop(); } catch {}
      },
      disconnect: () => {
        try { whiteNoise.disconnect(); filter.disconnect(); } catch {}
      }
    });
  }

  /**
   * Satlok Amrit Veena: Delicate high shimmer frequencies.
   * Completely above 580 Hz, strictly evoking Satlok's pure celestial serenity without any low-throat drone.
   */
  private startAmritVeenaShimmer(outputNode: AudioNode) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const frequencies = [587.33, 880.00]; // D5 and A5
    frequencies.forEach((f) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.025, now);
      osc.connect(gain);
      gain.connect(outputNode);
      osc.start(now);

      this.ambientNodes.push({
        stop: () => {
          try { osc.stop(); } catch {}
        },
        disconnect: () => {
          try { osc.disconnect(); gain.disconnect(); } catch {}
        }
      });
    });
  }

  /**
   * Plucks a series of notes from the sacred Satlok scale (D Major / Bilawal / Kalyan):
   * D4 (293.66Hz), F#4 (369.99Hz), G4 (392.00Hz), A4 (440.00Hz), B4 (493.88Hz), D5 (587.33Hz)
   * Each note has an immediate plucked acoustic attack and natural decay, reminiscent of a Swarmandal/Santoor.
   */
  private playSwarmandalArpeggio(outputNode: AudioNode) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const scale = [293.66, 369.99, 440.00, 493.88, 587.33, 440.00, 369.99];
    const delays = [0, 0.28, 0.56, 0.88, 1.22, 1.58, 1.94];

    scale.forEach((freq, idx) => {
      if (!this.ctx) return;
      const noteTime = now + delays[idx];

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Plucked string acoustic filter
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.5, noteTime);
      filter.Q.setValueAtTime(3.0, noteTime);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      // Pluck envelope: sharp attack, smooth 1.8s exponential decay
      noteGain.gain.setValueAtTime(0, noteTime);
      noteGain.gain.linearRampToValueAtTime(0.12, noteTime + 0.015);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.8);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(outputNode);

      osc.start(noteTime);
      osc.stop(noteTime + 1.85);
      osc.onended = () => {
        try {
          osc.disconnect();
          filter.disconnect();
          noteGain.disconnect();
        } catch {}
      };
    });
  }

  /**
   * Rhythmic "Sat - ya - Naam" 3-tone chime:
   * Melodically and rhythmically spells "Sat" (short), "ya" (short), "Naam" (sweet sustained bell)
   */
  public ringSatyanaamTripleChime() {
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Sat (E5), ya (G5), Naam (A5 resonant bell)
    const notes = [
      { freq: 659.25, time: 0.0, duration: 0.8, gain: 0.08 },
      { freq: 783.99, time: 0.35, duration: 0.8, gain: 0.09 },
      { freq: 880.00, time: 0.75, duration: 3.2, gain: 0.14 },
    ];

    notes.forEach(({ freq, time, duration, gain }) => {
      if (!this.ctx) return;
      const noteTime = now + time;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      g.gain.setValueAtTime(0, noteTime);
      g.gain.linearRampToValueAtTime(gain * this.volume, noteTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, noteTime + duration);

      osc.connect(g);
      g.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + duration + 0.05);
      osc.onended = () => {
        try {
          osc.disconnect();
          g.disconnect();
        } catch {}
      };
    });
  }

  /**
   * High pure sacred brass ghanti / manjira bell (used for completions, blessings, and quiz)
   */
  public ringSacredBell() {
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chimeFrequencies = [880.00, 1318.51, 1760.00, 2637.02]; // High A5 series

    const bellGain = this.ctx.createGain();
    bellGain.gain.setValueAtTime(this.volume * 0.22, now);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);
    bellGain.connect(this.ctx.destination);

    chimeFrequencies.forEach((f, i) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      osc.connect(bellGain);
      osc.start(now + (i * 0.03));
      osc.stop(now + 4.0);
    });
  }

  /**
   * Subtle, calming 3-note harmonic chime using Web Audio API
   * specifically for positive auditory reinforcement on step completion.
   * Plays a gentle rising interval (A5 880Hz -> C#6 1108.73Hz -> E6 1318.51Hz)
   * with soft bell-like exponential decay and zero harshness.
   */
  public playStepCompletionChime() {
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [
      { freq: 880.00, time: 0.0, duration: 1.2, gain: 0.12 },
      { freq: 1108.73, time: 0.12, duration: 1.5, gain: 0.14 },
      { freq: 1318.51, time: 0.25, duration: 2.2, gain: 0.16 },
    ];

    const masterChimeGain = this.ctx.createGain();
    masterChimeGain.gain.setValueAtTime(0, now);
    masterChimeGain.gain.linearRampToValueAtTime(Math.min(0.4, this.volume * 0.35), now + 0.02);
    masterChimeGain.connect(this.ctx.destination);

    notes.forEach(({ freq, time, duration, gain }) => {
      if (!this.ctx) return;
      const noteTime = now + time;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      g.gain.setValueAtTime(0, noteTime);
      g.gain.linearRampToValueAtTime(gain, noteTime + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, noteTime + duration);

      osc.connect(g);
      g.connect(masterChimeGain);

      osc.start(noteTime);
      osc.stop(noteTime + duration + 0.05);
    });
  }

  /**
   * Peaceful vocal chant of "सत्यनाम... सत्यनाम" in a calm, reverent devotional tone
   */
  private startVocalChantingLoop() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const sessionToken = ++this.vocalSessionToken;

    const chantOnce = () => {
      if (sessionToken !== this.vocalSessionToken || !this.isPlaying || !this.vocalChantEnabled) return;

      let chantPhrase = 'सत्यनाम... सत्यनाम';
      let lang = 'hi-IN';

      if (this.activeLanguage === 'pb') {
        chantPhrase = 'ਸਤਯਨਾਮ... ਸਤਯਨਾਮ';
        lang = 'pa-IN';
      } else if (this.activeLanguage === 'en') {
        chantPhrase = 'Satyanaam... Satyanaam';
        lang = 'en-US';
      }

      const utterance = new SpeechSynthesisUtterance(chantPhrase);
      utterance.lang = lang;
      utterance.rate = 0.82; // calm, contemplative tempo
      utterance.pitch = 1.02; // natural, peaceful voice
      utterance.volume = Math.max(0.2, this.volume);

      const voices = window.speechSynthesis.getVoices();
      const matched = voices.find(v => v.lang.startsWith(lang.slice(0, 2)));
      if (matched) {
        utterance.voice = matched;
      }

      utterance.onend = () => {
        // Wait 4.5 seconds of tranquil Swarmandal music before chanting again
        if (sessionToken === this.vocalSessionToken && this.isPlaying && this.vocalChantEnabled) {
          this.vocalTimer = window.setTimeout(() => {
            chantOnce();
          }, 4500);
        }
      };

      utterance.onerror = () => {
        if (sessionToken === this.vocalSessionToken && this.isPlaying && this.vocalChantEnabled) {
          this.vocalTimer = window.setTimeout(() => {
            chantOnce();
          }, 6000);
        }
      };

      window.speechSynthesis.speak(utterance);
    };

    // Begin first chant after 1.5 seconds of opening Swarmandal music
    this.vocalTimer = window.setTimeout(() => {
      chantOnce();
    }, 1500);
  }

  private clearPlaybackTimers() {
    if (this.swarmandalTimer !== null) {
      clearInterval(this.swarmandalTimer);
      this.swarmandalTimer = null;
    }
    if (this.fluteTimer !== null) {
      clearInterval(this.fluteTimer);
      this.fluteTimer = null;
    }
    if (this.vocalTimer !== null) {
      clearTimeout(this.vocalTimer);
      this.vocalTimer = null;
    }
    if (this.bellTimer !== null) {
      clearInterval(this.bellTimer);
      this.bellTimer = null;
    }
  }

  /**
   * Gracefully stops the dhun, Swarmandal, flute, and vocal chanting loop
   */
  public stopDhun() {
    this.vocalSessionToken++;
    this.clearPlaybackTimers();

    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }

    const fadingMaster = this.masterGain;
    this.masterGain = null;
    this.swarmandalGainNode = null;
    this.veenaGainNode = null;
    this.chimeGainNode = null;
    this.fluteGainNode = null;
    this.natureGainNode = null;

    if (fadingMaster && this.ctx) {
      const now = this.ctx.currentTime;
      try {
        fadingMaster.gain.cancelScheduledValues(now);
        fadingMaster.gain.setValueAtTime(fadingMaster.gain.value, now);
        fadingMaster.gain.linearRampToValueAtTime(0.0001, now + 0.35);
      } catch {}
    }

    const nodesToStop = [...this.ambientNodes];
    this.ambientNodes = [];

    if (this.stopFadeTimer !== null) {
      clearTimeout(this.stopFadeTimer);
    }
    this.stopFadeTimer = window.setTimeout(() => {
      this.stopFadeTimer = null;
      nodesToStop.forEach(node => {
        node.stop();
        node.disconnect();
      });
      try {
        fadingMaster?.disconnect();
      } catch {}
    }, 400);
  }

  public toggleDhun(): boolean {
    if (this.isPlaying) {
      this.stopDhun();
      return false;
    } else {
      this.startDhun();
      return true;
    }
  }
}

export const satyanaamAudio = new SatyanaamAudioEngine();

/**
 * Text-to-Speech Controller for Akhand Path and Sacred Reading
 * Uses a sentence-chunking queue to prevent browser TTS cut-offs on long devotional texts
 */
class SpeechRecitationEngine {
  private utterance: SpeechSynthesisUtterance | null = null;
  private isReciting = false;
  private rate = 0.9; // tranquil devotional pacing
  private pitch = 1.0; // natural vocal pitch
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private queue: string[] = [];
  private queueIndex = 0;
  private activeLangCode: 'hi' | 'pb' | 'en' = 'hi';
  private onCompleteCallback?: () => void;
  private onErrorCallback?: (err?: any) => void;
  private sessionToken = 0;
  private nextChunkTimer: number | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedRate = localStorage.getItem('sahebworld_reciter_rate');
        if (savedRate) {
          const parsed = parseFloat(savedRate);
          if (!isNaN(parsed) && parsed >= 0.5 && parsed <= 2.0) {
            this.rate = parsed;
          }
        }
        const savedPitch = localStorage.getItem('sahebworld_reciter_pitch');
        if (savedPitch) {
          const parsedPitch = parseFloat(savedPitch);
          if (!isNaN(parsedPitch) && parsedPitch >= 0.5 && parsedPitch <= 2.0) {
            this.pitch = parsedPitch;
          }
        }
      } catch {}

      if ('speechSynthesis' in window) {
        this.loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => {
            this.loadVoices();
          };
        }
      }
    }
  }

  private loadVoices() {
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        this.cachedVoices = window.speechSynthesis.getVoices() || [];
      }
    } catch {
      this.cachedVoices = [];
    }
  }

  public isAvailable(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.2, Math.min(5.0, newRate));
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sahebworld_reciter_rate', String(this.rate));
        window.dispatchEvent(new CustomEvent('sahebworld_tts_settings_changed', { detail: { rate: this.rate, pitch: this.pitch } }));
      } catch {}
    }
    if (this.utterance) {
      this.utterance.rate = this.rate;
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public setPitch(newPitch: number) {
    this.pitch = Math.max(0.5, Math.min(1.5, newPitch));
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sahebworld_reciter_pitch', String(this.pitch));
        window.dispatchEvent(new CustomEvent('sahebworld_tts_settings_changed', { detail: { rate: this.rate, pitch: this.pitch } }));
      } catch {}
    }
    if (this.utterance) {
      this.utterance.pitch = this.pitch;
    }
  }

  public getPitch(): number {
    return this.pitch;
  }

  private findVoiceForLanguage(langCode: 'hi' | 'pb' | 'en'): SpeechSynthesisVoice | undefined {
    const voices = this.cachedVoices.length > 0 
      ? this.cachedVoices 
      : (typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis.getVoices() : []);

    if (!voices || voices.length === 0) return undefined;

    if (langCode === 'hi') {
      return (
        voices.find(v => v.lang === 'hi-IN' || v.lang === 'hi_IN') ||
        voices.find(v => v.lang.toLowerCase().startsWith('hi')) ||
        voices.find(v => v.name.toLowerCase().includes('hindi') || v.name.includes('हिन्दी')) ||
        voices.find(v => v.lang === 'en-IN')
      );
    } else if (langCode === 'pb') {
      return (
        voices.find(v => v.lang === 'pa-IN' || v.lang === 'pa_IN' || v.lang.toLowerCase().startsWith('pa')) ||
        voices.find(v => v.name.toLowerCase().includes('punjabi') || v.name.toLowerCase().includes('panjabi')) ||
        voices.find(v => v.lang === 'hi-IN' || v.lang === 'hi_IN') ||
        voices.find(v => v.lang.toLowerCase().startsWith('hi')) ||
        voices.find(v => v.lang === 'en-IN')
      );
    } else {
      return (
        voices.find(v => v.lang === 'en-IN') ||
        voices.find(v => v.lang === 'en-US') ||
        voices.find(v => v.lang.toLowerCase().startsWith('en'))
      );
    }
  }

  /**
   * Cleans special characters and breaks long text into bite-sized natural chunks
   * so browsers never choke or stop midway through a sakhi or bhavarth.
   */
  private splitIntoSpeechChunks(rawText: string): string[] {
    // 1. Unwrap parentheses contents: e.g. (गोविंद) -> गोविंद
    let text = rawText.replace(/\(([^)]+)\)/g, ' $1 ');
    // 2. Remove markdown/formatting artifacts
    text = text.replace(/[*_~`#“"”'‘’]/g, ' ');
    // 3. Normalize newlines, colons, and traditional punctuation markers
    text = text.replace(/[:॥।|\n]/g, '।');

    // 4. Split by sentence terminators
    const rawSentences = text.split(/[।\.?!;]+/);
    const resultChunks: string[] = [];

    for (const sent of rawSentences) {
      const trimmed = sent.replace(/\s+/g, ' ').trim();
      if (!trimmed) continue;

      // If a single sentence is still very long (> 100 chars), split by comma for smoother breathing
      if (trimmed.length > 100 && (trimmed.includes(',') || trimmed.includes('،'))) {
        const subParts = trimmed.split(/[,،]+/);
        for (const sub of subParts) {
          const subTrim = sub.replace(/\s+/g, ' ').trim();
          if (subTrim) resultChunks.push(subTrim);
        }
      } else {
        resultChunks.push(trimmed);
      }
    }

    return resultChunks;
  }

  private playCurrentQueueChunk(token: number) {
    if (token !== this.sessionToken || !this.isReciting) return;

    if (this.queueIndex >= this.queue.length) {
      this.isReciting = false;
      this.queue = [];
      this.queueIndex = 0;
      if (typeof window !== 'undefined') {
        (window as any).__saheb_active_utterance = null;
      }
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
      return;
    }

    const chunkText = this.queue[this.queueIndex];
    if (!chunkText) {
      this.queueIndex++;
      this.playCurrentQueueChunk(token);
      return;
    }

    let lang = 'hi-IN';
    if (this.activeLangCode === 'en') lang = 'en-US';
    else if (this.activeLangCode === 'pb') lang = 'pa-IN';

    try {
      this.utterance = new SpeechSynthesisUtterance(chunkText);
      this.utterance.lang = lang;
      this.utterance.rate = this.rate;
      this.utterance.pitch = this.pitch;
      this.utterance.volume = 1.0;

      // Global reference to prevent GC drops
      if (typeof window !== 'undefined') {
        (window as any).__saheb_active_utterance = this.utterance;
      }

      const matchedVoice = this.findVoiceForLanguage(this.activeLangCode);
      if (matchedVoice) {
        this.utterance.voice = matchedVoice;
        if (this.activeLangCode === 'pb' && matchedVoice.lang.toLowerCase().startsWith('hi')) {
          this.utterance.lang = matchedVoice.lang;
        }
      }

      this.utterance.onend = () => {
        if (token === this.sessionToken && this.isReciting) {
          this.queueIndex++;
          // Small micro-pause between phrases
          if (this.nextChunkTimer !== null) {
            clearTimeout(this.nextChunkTimer);
          }
          this.nextChunkTimer = window.setTimeout(() => {
            this.nextChunkTimer = null;
            this.playCurrentQueueChunk(token);
          }, 60);
        }
      };

      this.utterance.onerror = (e) => {
        // If intentionally canceled or interrupted, don't cascade errors
        if (e && (e.error === 'canceled' || e.error === 'interrupted')) {
          return;
        }
        if (token === this.sessionToken && this.isReciting) {
          this.queueIndex++;
          this.playCurrentQueueChunk(token);
        }
      };

      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      window.speechSynthesis.speak(this.utterance);
    } catch (err) {
      if (token === this.sessionToken && this.isReciting) {
        this.queueIndex++;
        this.playCurrentQueueChunk(token);
      }
    }
  }

  public speak(
    text: string,
    langCode: 'hi' | 'pb' | 'en',
    onComplete?: () => void,
    onError?: (err?: any) => void
  ) {
    if (!this.isAvailable()) {
      if (onComplete) onComplete();
      return;
    }

    this.stop();

    const chunks = this.splitIntoSpeechChunks(text);
    if (chunks.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    this.sessionToken = Date.now();
    const currentToken = this.sessionToken;
    this.queue = chunks;
    this.queueIndex = 0;
    this.activeLangCode = langCode;
    this.onCompleteCallback = onComplete;
    this.onErrorCallback = onError;
    this.isReciting = true;

    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      this.playCurrentQueueChunk(currentToken);
    } catch (err) {
      this.isReciting = false;
      if (onError) onError(err);
    }
  }

  public stop() {
    this.sessionToken = Date.now();
    this.isReciting = false;
    this.queue = [];
    this.queueIndex = 0;
    this.onCompleteCallback = undefined;
    this.onErrorCallback = undefined;

    if (this.nextChunkTimer !== null) {
      clearTimeout(this.nextChunkTimer);
      this.nextChunkTimer = null;
    }

    if (this.utterance) {
      try {
        this.utterance.onend = null;
        this.utterance.onerror = null;
      } catch {}
      this.utterance = null;
    }
    
    if (typeof window !== 'undefined') {
      (window as any).__saheb_active_utterance = null;
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {
          // ignore
        }
      }
    }
  }

  public getIsReciting(): boolean {
    return this.isReciting;
  }
}

export const speechReciter = new SpeechRecitationEngine();

/**
 * Multi-Mode Ambient Dhun Engine for Sacred Reading (Nitnem, Katha, Swadhyay)
 */
export type DhunSoundType = 'tanpura' | 'flute' | 'satyanaam' | 'stream';

class AmbientReaderDhunEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private activeSound: DhunSoundType = 'tanpura';
  private masterGain: GainNode | null = null;
  private volume = 0.45;
  private isMuted = false;
  private loopInterval: number | null = null;
  private stopFadeTimer: number | null = null;
  private activeNodes: { stop: () => void; disconnect: () => void }[] = [];

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.isMuted = localStorage.getItem('sahebworld_is_muted') === 'true';
      window.addEventListener('sahebworld_mute_changed', (e: any) => {
        this.isMuted = e.detail;
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.1);
        }
      });
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setSoundType(type: DhunSoundType) {
    this.activeSound = type;
    if (this.isPlaying) {
      this.stop();
      this.start(type);
    }
  }

  public getSoundType(): DhunSoundType {
    return this.activeSound;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public start(soundType?: DhunSoundType) {
    if (soundType) this.activeSound = soundType;
    this.init();
    if (!this.ctx) return;
    this.stop();

    this.isPlaying = true;
    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : this.volume, now + 1.5);
    this.masterGain.connect(this.ctx.destination);

    switch (this.activeSound) {
      case 'tanpura':
        this.startTanpura();
        break;
      case 'flute':
        this.startFlute();
        break;
      case 'satyanaam':
        this.startSatyanaamResonance();
        break;
      case 'stream':
        this.startStream();
        break;
      default:
        this.startTanpura();
    }
  }

  private startTanpura() {
    if (!this.ctx || !this.masterGain) return;
    // Sa - Pa - Sa' - Sa tanpura strings (D3: 146.83Hz, A2: 110Hz, D2: 73.42Hz)
    const pitches = [293.66, 220.0, 146.83, 110.0];
    let stringIdx = 0;

    const pluck = () => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      const t = this.ctx.currentTime;
      const freq = pitches[stringIdx % pitches.length];
      stringIdx++;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(120, t + 3.2);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 3.6);
      osc.onended = () => {
        try {
          osc.disconnect();
          filter.disconnect();
          gain.disconnect();
        } catch {}
      };
    };

    pluck();
    this.loopInterval = window.setInterval(pluck, 1200);
  }

  private startFlute() {
    if (!this.ctx || !this.masterGain) return;
    // Soothing devotional notes (Sa, Re, Ga, Pa, Dha in D)
    const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];
    let nIdx = 0;

    const playFluteNote = () => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      const t = this.ctx.currentTime;
      const f = notes[nIdx % notes.length];
      nIdx = (nIdx + 1) % notes.length;

      const osc = this.ctx.createOscillator();
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      const noteGain = this.ctx.createGain();

      vibrato.frequency.setValueAtTime(5.5, t); // 5.5Hz sweet flute vibrato
      vibratoGain.gain.setValueAtTime(4.0, t);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      noteGain.gain.setValueAtTime(0, t);
      noteGain.gain.linearRampToValueAtTime(0.25, t + 0.6);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      vibrato.start(t);
      osc.start(t);
      vibrato.stop(t + 4.6);
      osc.stop(t + 4.6);
      osc.onended = () => {
        try {
          vibrato.disconnect();
          vibratoGain.disconnect();
          osc.disconnect();
          noteGain.disconnect();
        } catch {}
      };
    };

    playFluteNote();
    this.loopInterval = window.setInterval(playFluteNote, 3200);
  }

  private startSatyanaamResonance() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Highpass safety >= 280Hz: Strictly Sant Mat Satlok resonance, free of low Om frequencies and free of bells
    const highpassSafety = this.ctx.createBiquadFilter();
    highpassSafety.type = 'highpass';
    highpassSafety.frequency.setValueAtTime(280, now);
    highpassSafety.connect(this.masterGain);

    // 1. Delicate Amrit Veena shimmer (D5: 587.33Hz, A5: 880Hz)
    [587.33, 880.0].forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(idx === 0 ? 0.045 : 0.025, now + 1.8);
      osc.connect(gain);
      gain.connect(highpassSafety);
      osc.start(now);

      this.activeNodes.push({
        stop: () => { try { osc.stop(); } catch {} },
        disconnect: () => { try { osc.disconnect(); gain.disconnect(); } catch {} }
      });
    });

    // 2. Pure Satyanaam Swarmandal melodic arpeggio (D Major / Kalyan scale, zero brass bells)
    const scale = [293.66, 369.99, 440.0, 493.88, 587.33, 440.0, 369.99];
    const delays = [0, 0.34, 0.68, 1.04, 1.42, 1.82, 2.24];

    const pluckSwarmandal = () => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      const t = this.ctx.currentTime;
      scale.forEach((freq, idx) => {
        if (!this.ctx) return;
        const noteTime = t + delays[idx];
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const noteGain = this.ctx.createGain();

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 1.4, noteTime);
        filter.Q.setValueAtTime(2.8, noteTime);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        noteGain.gain.setValueAtTime(0, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.16, noteTime + 0.025);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 2.0);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(highpassSafety);

        osc.start(noteTime);
        osc.stop(noteTime + 2.05);
        osc.onended = () => {
          try {
            osc.disconnect();
            filter.disconnect();
            noteGain.disconnect();
          } catch {}
        };
      });
    };

    pluckSwarmandal();
    this.loopInterval = window.setInterval(pluckSwarmandal, 4400);

    this.activeNodes.push({
      stop: () => {},
      disconnect: () => { try { highpassSafety.disconnect(); } catch {} }
    });
  }

  private startStream() {
    if (!this.ctx || !this.masterGain) return;
    // Generate pink-noise water stream buffer
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.08;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(this.masterGain);
    whiteNoise.start();

    this.activeNodes.push({
      stop: () => {
        try { whiteNoise.stop(); } catch {}
      },
      disconnect: () => {
        try { whiteNoise.disconnect(); filter.disconnect(); } catch {}
      }
    });
  }

  public stop() {
    if (this.loopInterval !== null) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
    this.activeNodes.forEach(node => {
      node.stop();
      node.disconnect();
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
        fadingGain.gain.linearRampToValueAtTime(0, now + 0.25);
      } catch {}
      this.stopFadeTimer = window.setTimeout(() => {
        this.stopFadeTimer = null;
        try {
          fadingGain.disconnect();
        } catch {}
      }, 280);
    }
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientReaderAudio = new AmbientReaderDhunEngine();

/**
 * Stops transient speech and reader-specific background audio when switching screens or closing modals.
 */
export function stopTransientSacredAudio() {
  speechReciter.stop();
  ambientReaderAudio.stop();
}

