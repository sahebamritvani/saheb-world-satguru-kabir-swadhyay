import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeMode } from '../types';
import banyanGhatWallpaper from '../assets/images/clean_banyan_ghat_nature_1794393850217.jpg';
import magharDhamWallpaper from '../assets/images/clean_maghar_dham_nature_1794393850589.jpg';

export interface SpiritualTheme {
  mode: ThemeMode;
  bg: string;
  bgSecondary: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentGold: string;
  accentGoldLight: string;
  sacredMaroon: string;
  buttonPrimaryBg: string;
  buttonPrimaryText: string;
  stepActiveBg: string;
  fontDisplay: string;
  fontBody: string;
  borderOrnament: string;
  isNatureWallpaper?: boolean;
}

export const themes: Record<ThemeMode, SpiritualTheme> = {
  bhojpatra: {
    mode: 'bhojpatra',
    bg: '#F7F1E3', // Authentic Warm Parchment
    bgSecondary: '#F4ECD8',
    cardBg: '#FFFDF9',
    cardBorder: 'rgba(217, 193, 158, 0.5)',
    cardShadow: '0 4px 20px -2px rgba(90, 60, 20, 0.1)',
    textPrimary: '#1A1A1A', // Deep Sepia/Charcoal Black
    textSecondary: '#5D4037',
    textMuted: '#7A5E44',
    accentGold: '#D35400', // Spiritual Orange
    accentGoldLight: '#FBE8C8',
    sacredMaroon: '#8B0000', // Deep Maroon
    buttonPrimaryBg: '#8B0000',
    buttonPrimaryText: '#FFFFFF',
    stepActiveBg: '#F5E4C4',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(217, 193, 158, 0.5)',
  },
  amrit_neel: {
    mode: 'amrit_neel',
    bg: '#121212', // Jet Black
    bgSecondary: '#1A1A1A', // Deep Charcoal
    cardBg: '#1A1A1A',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    cardShadow: '0 6px 30px -4px rgba(0, 0, 0, 0.9)',
    textPrimary: '#F5F5F5', // Creamy White
    textSecondary: '#B3B3B3', // Light Gray
    textMuted: '#808080',
    accentGold: '#FFD700', // Bright Gold
    accentGoldLight: '#262626',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#FFD700',
    buttonPrimaryText: '#121212',
    stepActiveBg: '#333333',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(255, 255, 255, 0.15)',
  },
  mystic_dark: {
    mode: 'mystic_dark',
    bg: '#121212',
    bgSecondary: '#1A1A1A',
    cardBg: '#1A1A1A',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    cardShadow: '0 6px 30px -4px rgba(0, 0, 0, 0.9)',
    textPrimary: '#F5F5F5',
    textSecondary: '#B3B3B3',
    textMuted: '#808080',
    accentGold: '#FFD700',
    accentGoldLight: '#262626',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#FFD700',
    buttonPrimaryText: '#121212',
    stepActiveBg: '#333333',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(255, 255, 255, 0.15)',
  },
  high_readability_light: {
    mode: 'high_readability_light',
    bg: '#F8F9FA',
    bgSecondary: '#E9ECEF',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0, 0, 0, 0.15)',
    cardShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textPrimary: '#000000',
    textSecondary: '#495057',
    textMuted: '#6C757D',
    accentGold: '#8C2818',
    accentGoldLight: '#F8D7DA',
    sacredMaroon: '#8C2818',
    buttonPrimaryBg: '#1A1A1A',
    buttonPrimaryText: '#FFFFFF',
    stepActiveBg: '#E9ECEF',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    borderOrnament: 'rgba(0, 0, 0, 0.1)',
  },
  flow_state: {
    mode: 'flow_state',
    bg: '#080E1E',
    bgSecondary: '#0F172A',
    cardBg: '#131E36',
    cardBorder: 'rgba(251, 191, 36, 0.3)',
    cardShadow: '0 8px 32px -4px rgba(8, 14, 30, 0.9)',
    textPrimary: '#FFFFFF', // White text
    textSecondary: '#FFD700', // Bright yellow
    textMuted: '#CBD5E1',
    accentGold: '#FBBF24',
    accentGoldLight: '#1E293B',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#F59E0B',
    buttonPrimaryText: '#080E1E',
    stepActiveBg: '#1C2B4E',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(251, 191, 36, 0.35)',
  },
};

const GlobalSpiritualStyles = createGlobalStyle<{ theme: SpiritualTheme }>`
  :root {
    --bg-primary: ${({ theme }) => theme.bg};
    --card-bg: ${({ theme }) => theme.cardBg};
    --card-border: ${({ theme }) => theme.cardBorder};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --accent-gold: ${({ theme }) => theme.accentGold};
    --sacred-maroon: ${({ theme }) => theme.sacredMaroon};
    --step-active-bg: ${({ theme }) => theme.stepActiveBg};
  }

  *, *::before, *::after {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html {
    /* Global Font Scaling - Affects everything using rem */
    &.font-size-small { font-size: 14px; }
    &.font-size-normal { font-size: 16px; }
    &.font-size-medium { font-size: 17px; }
    &.font-size-large { font-size: 18px; }
    &.font-size-xlarge { font-size: 20px; }
    &.font-size-xl { font-size: 22px; }
    &.font-size-elderly { font-size: 24px; }
  }

  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.textPrimary};
    font-family: ${({ theme }) => theme.fontBody};
    transition: background-color 0.35s ease, color 0.35s ease;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    
    /* Specific Reader Scaling */
    &.font-size-small { --reader-font-size: 14px; }
    &.font-size-normal { --reader-font-size: 16px; }
    &.font-size-medium { --reader-font-size: 18px; }
    &.font-size-large { --reader-font-size: 22px; }
    &.font-size-xlarge { --reader-font-size: 28px; }
    &.font-size-xl { --reader-font-size: 32px; }
    &.font-size-elderly { 
      --reader-font-size: 28px;
      font-weight: 700;
      line-height: 1.5;
    }
  }

  /* Smooth scrollbars */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bgSecondary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.borderOrnament};
    border-radius: 9999px;
  }
`;

export const StyledAppContainer = styled.div<{ theme: SpiritualTheme; $wallpaper?: any }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textPrimary};
  transition: all 0.35s ease-in-out;
  position: relative;
  overflow-x: clip;

  ${({ $wallpaper }) => $wallpaper && `
    background-image: ${$wallpaper.backgroundImage};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${$wallpaper.overlay};
      z-index: 0;
      pointer-events: none;
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  `}
`;

export const SacredHeaderContainer = styled.header<{ theme: SpiritualTheme }>`
  background-color: ${({ theme }) => theme.cardBg};
  border-bottom: 1.5px solid ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  position: sticky;
  top: 0;
  z-index: 40;
  transition: all 0.3s ease;
`;

export const SacredFooterContainer = styled.footer<{ theme: SpiritualTheme }>`
  background-color: ${({ theme }) => theme.cardBg};
  border-top: 1.5px solid ${({ theme }) => theme.cardBorder};
  transition: all 0.3s ease;
  margin-top: auto;
`;

export const StyledCard = styled.div<{ theme: SpiritualTheme; $highlight?: boolean }>`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme, $highlight }) => ($highlight ? theme.accentGold : theme.cardBorder)};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 1.25rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  
  @media (min-width: 640px) {
    padding: 1.75rem;
  }
`;

interface ThemeContextType {
  theme: SpiritualTheme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly';
  setFontSize: (size: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly') => void;
  lineHeight: 'small' | 'medium' | 'large';
  setLineHeight: (height: 'small' | 'medium' | 'large') => void;
  widthMode: 'narrow' | 'medium' | 'wide';
  setWidthMode: (mode: 'narrow' | 'medium' | 'wide') => void;
  fontFamily: 'serif' | 'sans';
  setFontFamily: (font: 'serif' | 'sans') => void;
  isSahajMode: boolean;
  setIsSahajMode: (enabled: boolean) => void;
  isAutoNightMode: boolean;
  setIsAutoNightMode: (enabled: boolean) => void;
  isMuted: boolean;
  setIsMuted: (enabled: boolean) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  readingFramework: 'scroll' | 'parallel' | 'flip';
  setReadingFramework: (framework: 'scroll' | 'parallel' | 'flip') => void;
  autoScrollActive: boolean;
  setAutoScrollActive: (active: boolean) => void;
  autoScrollSpeed: number;
  setAutoScrollSpeed: (speed: number) => void;
  zenModeActive: boolean;
  setZenModeActive: (active: boolean) => void;
  larivaarModeActive: boolean;
  setLarivaarModeActive: (active: boolean) => void;
  visraamModeActive: boolean;
  setVisraamModeActive: (active: boolean) => void;
  globalWallpaper: string | null;
  setGlobalWallpaper: (wallpaperId: string | null) => void;
  getWallpaperCss: (wallpaperId: string | null) => any;
}

import { analytics } from '../services/analytics';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const isNightTimeSolar = (date = new Date()): boolean => {
  const hours = date.getHours() + date.getMinutes() / 60;
  // Local solar twilight & sunset: ~18:30 (6:30 PM) to ~06:00 (6:00 AM)
  return hours >= 18.5 || hours < 6.0;
};

export const SpiritualThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSahajMode, setIsSahajModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_sahaj_mode') === 'true';
    }
    return false;
  });

  const [isAutoNightMode, setIsAutoNightModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_auto_night_mode') === 'true';
    }
    return false;
  });

  const [isMuted, setIsMutedState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_is_muted') === 'true';
    }
    return false;
  });

  const [speechRate, setSpeechRateState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_speech_rate');
      return saved ? parseFloat(saved) : 1.0;
    }
    return 1.0;
  });

  const [readingFramework, setReadingFrameworkState] = useState<'scroll' | 'parallel' | 'flip'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('sahebworld_reading_framework') as any) || 'scroll';
    }
    return 'scroll';
  });

  const [autoScrollActive, setAutoScrollActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_autoscroll_active') === 'true';
    }
    return false;
  });

  const [autoScrollSpeed, setAutoScrollSpeedState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_autoscroll_speed');
      return saved ? parseFloat(saved) : 1.0;
    }
    return 1.0;
  });

  const [zenModeActive, setZenModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_zen_mode_active') === 'true';
    }
    return false;
  });

  const [larivaarModeActive, setLarivaarModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_larivaar_mode_active') === 'true';
    }
    return false;
  });

  const [visraamModeActive, setVisraamModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_visraam_mode_active') === 'true';
    }
    return false;
  });
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_theme_mode');
      if (saved && ['bhojpatra', 'amrit_neel', 'mystic_dark', 'flow_state', 'high_readability_light'].includes(saved)) {
        return saved as ThemeMode;
      }
    }
    return 'bhojpatra';
  });

  const [globalWallpaper, setGlobalWallpaperState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_global_wallpaper');
    }
    return null;
  });

  const [fontSize, setFontSizeState] = useState<'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_fontsize');
      if (saved && ['small', 'normal', 'medium', 'large', 'xlarge', 'xl', 'elderly'].includes(saved)) {
        return saved as any;
      }
    }
    return 'normal';
  });

  const [lineHeight, setLineHeightState] = useState<'small' | 'medium' | 'large'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_lineheight');
      if (saved && ['small', 'medium', 'large'].includes(saved)) {
        return saved as 'small' | 'medium' | 'large';
      }
    }
    return 'medium';
  });

  const [widthMode, setWidthModeState] = useState<'narrow' | 'medium' | 'wide'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_widthmode');
      if (saved && ['narrow', 'medium', 'wide'].includes(saved)) {
        return saved as 'narrow' | 'medium' | 'wide';
      }
    }
    return 'wide';
  });

  const [fontFamily, setFontFamilyState] = useState<'serif' | 'sans'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_fontfamily');
      if (saved && ['serif', 'sans'].includes(saved)) {
        return saved as 'serif' | 'sans';
      }
    }
    return 'serif';
  });

  const setThemeMode = (mode: ThemeMode) => {
    const oldMode = themeMode;
    setThemeModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_theme_mode', mode);
      // Telemetry
      if (oldMode !== mode) {
        analytics.logEvent({
          name: 'theme_change',
          params: { from: oldMode, to: mode }
        });
      }
    }
  };

  const setFontSize = (size: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly') => {
    setFontSizeState(size);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_fontsize', size);
    }
  };

  const setLineHeight = (height: 'small' | 'medium' | 'large') => {
    setLineHeightState(height);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_lineheight', height);
    }
  };

  const setWidthMode = (mode: 'narrow' | 'medium' | 'wide') => {
    setWidthModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_widthmode', mode);
    }
  };

  const setFontFamily = (font: 'serif' | 'sans') => {
    setFontFamilyState(font);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_fontfamily', font);
    }
  };

  const setIsSahajMode = (enabled: boolean) => {
    setIsSahajModeState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_sahaj_mode', String(enabled));
    }
  };

  const setGlobalWallpaper = (wallpaperId: string | null) => {
    setGlobalWallpaperState(wallpaperId);
    if (typeof window !== 'undefined') {
      if (wallpaperId) {
        localStorage.setItem('sahebworld_global_wallpaper', wallpaperId);
      } else {
        localStorage.removeItem('sahebworld_global_wallpaper');
      }
      window.dispatchEvent(new CustomEvent('sahebworld_wallpaper_changed', { detail: wallpaperId }));
    }
  };

  const setIsAutoNightMode = (enabled: boolean) => {
    setIsAutoNightModeState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_auto_night_mode', String(enabled));
    }
    if (enabled) {
      const isNight = isNightTimeSolar();
      setThemeMode(isNight ? 'mystic_dark' : 'bhojpatra');
    }
  };

  const setSpeechRate = (rate: number) => {
    setSpeechRateState(rate);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_speech_rate', String(rate));
      window.dispatchEvent(new CustomEvent('sahebworld_tts_settings_changed', { detail: { rate } }));
    }
  };

  const setReadingFramework = (framework: 'scroll' | 'parallel' | 'flip') => {
    setReadingFrameworkState(framework);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_reading_framework', framework);
    }
  };

  const setAutoScrollActive = (active: boolean) => {
    setAutoScrollActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_autoscroll_active', String(active));
    }
  };

  const setAutoScrollSpeed = (speed: number) => {
    setAutoScrollSpeedState(speed);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_autoscroll_speed', String(speed));
    }
  };

  const setZenModeActive = (active: boolean) => {
    setZenModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_zen_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_zen_mode_active', { detail: active }));
    }
  };

  const setLarivaarModeActive = (active: boolean) => {
    setLarivaarModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_larivaar_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_larivaar_mode_active', { detail: active }));
    }
  };

  const setVisraamModeActive = (active: boolean) => {
    setVisraamModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_visraam_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_visraam_mode_active', { detail: active }));
    }
  };

  const getWallpaperCss = (wallpaperId: string | null) => {
    if (!wallpaperId) return null;

    const overlays = {
      dark: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
      medium: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))',
      light: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
    };

    const wallpapers: Record<string, { backgroundImage: string; overlay: string }> = {
      banyan_ghat: {
        backgroundImage: `url("${banyanGhatWallpaper}")`,
        overlay: overlays.medium
      },
      maghar_dham: {
        backgroundImage: `url("${magharDhamWallpaper}")`,
        overlay: overlays.medium
      },
      dawn_mountain: {
        backgroundImage: 'linear-gradient(135deg, #1A0F03 0%, #4A280B 50%, #9E5B1A 100%)',
        overlay: overlays.light
      },
      emerald_forest: {
        backgroundImage: 'linear-gradient(135deg, #04120C 0%, #0B2D1F 50%, #2B7051 100%)',
        overlay: overlays.medium
      },
      sunset_sky: {
        backgroundImage: 'linear-gradient(135deg, #1E0517 0%, #4A0E2E 50%, #8C1F38 100%, #F4A261 100%)',
        overlay: overlays.medium
      },
      sacred_river: {
        backgroundImage: 'linear-gradient(135deg, #02101C 0%, #0B2D46 50%, #228BE6 100%)',
        overlay: overlays.medium
      },
      golden_autumn: {
        backgroundImage: 'linear-gradient(135deg, #190E02 0%, #422406 50%, #B87319 100%)',
        overlay: overlays.medium
      }
    };

    return wallpapers[wallpaperId] || null;
  };

  const setIsMuted = (enabled: boolean) => {
    setIsMutedState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_is_muted', String(enabled));
      window.dispatchEvent(new CustomEvent('sahebworld_mute_changed', { detail: enabled }));
    }
  };

  // Sun-Aware Auto-Night Mode background checker
  useEffect(() => {
    if (!isAutoNightMode) return;

    const checkSolarTheme = () => {
      const isNight = isNightTimeSolar();
      const targetMode: ThemeMode = isNight ? 'amrit_neel' : 'bhojpatra';
      if (themeMode !== targetMode) {
        setThemeMode(targetMode);
      }
    };

    checkSolarTheme();
    const interval = setInterval(checkSolarTheme, 60000); // Verify every 60s
    return () => clearInterval(interval);
  }, [isAutoNightMode, themeMode]);

  const isDarkMode = themeMode === 'amrit_neel' || themeMode === 'mystic_dark' || themeMode === 'flow_state';
  const activeTheme = themes[themeMode] || themes.bhojpatra;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = themeMode === 'amrit_neel' || themeMode === 'mystic_dark' || themeMode === 'flow_state';
      const root = document.documentElement;
      
      if (isDark) {
        root.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        root.classList.remove('dark');
        document.body.classList.remove('dark');
      }

      root.setAttribute('data-theme', themeMode);

      // Strictly enforce CSS custom properties on :root for instant reactivity
      root.style.setProperty('--bg-primary', activeTheme.bg);
      root.style.setProperty('--bg-secondary', activeTheme.bgSecondary);
      root.style.setProperty('--card-bg', activeTheme.cardBg);
      root.style.setProperty('--card-border', activeTheme.cardBorder);
      root.style.setProperty('--text-primary', activeTheme.textPrimary);
      root.style.setProperty('--text-secondary', activeTheme.textSecondary);
      root.style.setProperty('--text-muted', activeTheme.textMuted);
      root.style.setProperty('--accent-gold', activeTheme.accentGold);
      root.style.setProperty('--sacred-maroon', activeTheme.sacredMaroon);
      root.style.setProperty('--step-active-bg', activeTheme.stepActiveBg);

      // Font size class update
      const fontSizeClasses = ['font-size-small', 'font-size-normal', 'font-size-medium', 'font-size-large', 'font-size-xlarge', 'font-size-xl', 'font-size-elderly'];
      fontSizeClasses.forEach(c => {
        root.classList.remove(c);
        document.body.classList.remove(c);
      });
      root.classList.add(`font-size-${fontSize}`);
      document.body.classList.add(`font-size-${fontSize}`);

      window.dispatchEvent(new CustomEvent('sahebworld_theme_changed', { detail: themeMode }));
    }
  }, [themeMode, activeTheme, fontSize]);

  // Cross-component theme sync listener
  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail !== themeMode) {
        setThemeModeState(customEvent.detail);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'sahebworld_theme_mode' && e.newValue && e.newValue !== themeMode) {
        setThemeModeState(e.newValue as ThemeMode);
      }
    };

    window.addEventListener('sahebworld_set_theme_mode', handleThemeChange as EventListener);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('sahebworld_set_theme_mode', handleThemeChange as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [themeMode]);

  const toggleDarkMode = () => {
    const nextMode: ThemeMode = (themeMode === 'amrit_neel' || themeMode === 'mystic_dark') ? 'bhojpatra' : 'amrit_neel';
    setThemeMode(nextMode);
  };

  const contextValue = useMemo(() => ({
    theme: activeTheme, 
    themeMode,
    setThemeMode,
    isDarkMode,
    toggleDarkMode,
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    fontFamily,
    setFontFamily,
    isSahajMode,
    setIsSahajMode,
    isAutoNightMode,
    setIsAutoNightMode,
    isMuted,
    setIsMuted,
    speechRate,
    setSpeechRate,
    readingFramework,
    setReadingFramework,
    autoScrollActive,
    setAutoScrollActive,
    autoScrollSpeed,
    setAutoScrollSpeed,
    zenModeActive,
    setZenModeActive,
    larivaarModeActive,
    setLarivaarModeActive,
    visraamModeActive,
    setVisraamModeActive,
    globalWallpaper,
    setGlobalWallpaper,
    getWallpaperCss
  }), [
    activeTheme,
    themeMode,
    isDarkMode,
    fontSize,
    lineHeight,
    widthMode,
    fontFamily,
    isSahajMode,
    isAutoNightMode,
    isMuted,
    speechRate,
    readingFramework,
    autoScrollActive,
    autoScrollSpeed,
    zenModeActive,
    larivaarModeActive,
    visraamModeActive,
    globalWallpaper
  ]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={activeTheme}>
        <GlobalSpiritualStyles theme={activeTheme} />
        <StyledAppContainer theme={activeTheme} $wallpaper={getWallpaperCss(globalWallpaper)}>
          {children}
        </StyledAppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used within a SpiritualThemeProvider');
  }
  return ctx;
}

// Export ThemeManager hook alias for universal compatibility
export const useThemeManager = useAppTheme;

