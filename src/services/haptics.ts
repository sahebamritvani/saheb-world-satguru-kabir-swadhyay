/**
 * Sacred Haptic Tactile Feedback Service
 * Provides authentic physical tactile patterns via navigator.vibrate()
 * for sacred moments in Saheb World (Rose Petal Shower, Quiz interactions, etc.)
 */

export const sacredHaptics = {
  /**
   * Light tactile tap when selecting an answer option or navigating
   */
  lightTap: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(18);
      } catch {}
    }
  },

  /**
   * Rose Petal Shower celebration - organic floral fluttering rhythm
   * Sequence: [touch burst, pause, petal flutter, pause, blooming sustain]
   */
  petalShower: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([40, 30, 60, 40, 90]);
      } catch {}
    }
  },

  /**
   * Divine Blessing & Pranam offering - Triple Sat-Ya-Naam reverent cadence
   */
  divineBlessing: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([50, 40, 70, 40, 110]);
      } catch {}
    }
  },

  /**
   * Correct Quiz Answer - uplifting harmonious tactile vibration
   * Complements the sacred brass bell chime
   */
  quizCorrect: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([45, 50, 85]);
      } catch {}
    }
  },

  /**
   * Incorrect / Reflective Quiz Answer - soft contemplative pulse
   */
  quizIncorrect: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([70, 45, 40]);
      } catch {}
    }
  },

  /**
   * Quiz Triumph / High Score Celebration
   */
  quizTriumph: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([50, 35, 60, 35, 120]);
      } catch {}
    }
  },

  /**
   * Celebration haptic pattern for completions and blessings
   */
  celebration: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([50, 35, 60, 35, 120]);
      } catch {}
    }
  },

  /**
   * Mystic Card Flip / Wisdom Reveal in Ulatvasi Quiz
   */
  mysticFlip: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([30, 25, 45]);
      } catch {}
    }
  },

  /**
   * Mystic Clue Reveal
   */
  clueReveal: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([25, 30, 30]);
      } catch {}
    }
  },

  /**
   * Medium tactile tap for buttons and seeking guidance
   */
  mediumTap: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(35);
      } catch {}
    }
  },

  /**
   * Success vibration pattern for completes, saves, and affirmations
   */
  successVibration: () => {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate([40, 40, 80]);
      } catch {}
    }
  },
};
