import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Volume2,
  VolumeX,
  Music,
  Bell,
  Wind,
  Sparkles,
  Disc,
  Check,
  ChevronDown,
  X,
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import {
  ambientAudio,
  AmbientSoundType,
  AMBIENT_SOUND_OPTIONS,
} from '../services/ambientAudioService';

interface AmbientSoundPlayerProps {
  language: Language;
  variant?: 'inline' | 'floating' | 'dropdown' | 'compact';
  onClose?: () => void;
  className?: string;
}

interface PopoverCoords {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
}

export const AmbientSoundPlayer: React.FC<AmbientSoundPlayerProps> = ({
  language,
  variant = 'compact',
  onClose,
  className = '',
}) => {
  const { theme } = useAppTheme();
  const [currentSound, setCurrentSound] = useState<AmbientSoundType>(ambientAudio.getCurrentSound());
  const [isPlaying, setIsPlaying] = useState<boolean>(ambientAudio.getIsPlaying());
  const [volume, setVolume] = useState<number>(ambientAudio.getVolume());
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );
  const [popoverCoords, setPopoverCoords] = useState<PopoverCoords>({ left: 16, width: 320 });

  const triggerWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsub = ambientAudio.subscribe((sound, playing, vol) => {
      setCurrentSound(sound);
      setIsPlaying(playing);
      setVolume(vol);
    });
    return () => unsub();
  }, []);

  const updateOverlayPosition = useCallback(() => {
    if (typeof window === 'undefined') return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const mobile = vw < 640;
    setIsMobileViewport(mobile);

    if (!mobile && triggerWrapRef.current) {
      const rect = triggerWrapRef.current.getBoundingClientRect();
      const popoverWidth = Math.min(340, vw - 24);
      const clampedLeft = Math.max(12, Math.min(rect.right - popoverWidth, vw - popoverWidth - 12));
      const spaceBelow = vh - rect.bottom;
      if (spaceBelow >= 360 || spaceBelow >= rect.top) {
        setPopoverCoords({
          top: Math.min(rect.bottom + 8, vh - 120),
          left: clampedLeft,
          width: popoverWidth,
        });
      } else {
        setPopoverCoords({
          bottom: vh - rect.top + 8,
          left: clampedLeft,
          width: popoverWidth,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpenMenu) return;
    updateOverlayPosition();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpenMenu(false);
        onClose?.();
      }
    };
    const handleResize = () => updateOverlayPosition();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
  }, [isOpenMenu, onClose, updateOverlayPosition]);

  const getSoundIcon = (sound: AmbientSoundType, iconClassName = 'w-4 h-4') => {
    switch (sound) {
      case 'temple_bells':
        return <Bell className={iconClassName} />;
      case 'bansuri':
        return <Wind className={iconClassName} />;
      case 'been':
        return <Music className={iconClassName} />;
      case 'tanpura':
        return <Disc className={iconClassName} />;
      case 'satyanaam':
        return <Sparkles className={iconClassName} />;
      default:
        return <VolumeX className={iconClassName} />;
    }
  };

  const handleSelectSound = (soundId: AmbientSoundType) => {
    if (soundId === 'none') {
      ambientAudio.stop();
    } else {
      ambientAudio.play(soundId);
    }
    setIsOpenMenu(false);
    onClose?.();
  };

  const currentOption =
    AMBIENT_SOUND_OPTIONS.find((o) => o.id === currentSound) || AMBIENT_SOUND_OPTIONS[0];

  const headerTitle =
    language === 'pb'
      ? 'ਪਾਵਨ ਪਿਛੋਕੜ ਧੁਨੀ (100% ਔਫ਼ਲਾਈਨ)'
      : language === 'en'
      ? 'Sacred Ambient Sound (100% Offline)'
      : 'पावन पृष्ठभूमि ध्वनि (100% ऑफ़लाइन)';

  const activeWord = language === 'pb' ? 'ਚਾਲੂ' : language === 'en' ? 'Playing' : 'चालू';

  const closeMenu = () => {
    setIsOpenMenu(false);
    onClose?.();
  };

  const renderVolumeBar = (compactMode = false) => (
    <div
      style={{ borderColor: theme.cardBorder }}
      className={`${compactMode ? 'pt-2.5 border-t' : 'p-3.5 rounded-2xl border max-w-md mx-auto'} flex items-center gap-3`}
    >
      <button
        type="button"
        onClick={() => ambientAudio.setVolume(volume === 0 ? 0.45 : 0)}
        aria-label={volume === 0 ? 'Unmute ambient sound' : 'Mute ambient sound'}
        className="min-w-[44px] min-h-[44px] sm:min-w-[36px] sm:min-h-[36px] rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 cursor-pointer hover:bg-amber-500/20 transition"
      >
        {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        aria-label={language === 'en' ? 'Ambient sound volume' : 'पृष्ठभूमि ध्वनि स्तर'}
        onChange={(e) => ambientAudio.setVolume(parseFloat(e.target.value))}
        className="w-full accent-amber-600 h-2.5 sm:h-1.5 bg-stone-200 dark:bg-stone-700 rounded-lg cursor-pointer"
      />
      <span
        style={{ color: theme.textPrimary }}
        className="text-xs font-mono font-bold tabular-nums w-10 text-right shrink-0"
      >
        {Math.round(volume * 100)}%
      </span>
    </div>
  );

  // Dropdown / Compact Variant (For Swadhyay Reader & toolbar controls)
  if (variant === 'compact' || variant === 'dropdown') {
    const portalOverlay =
      isOpenMenu && typeof document !== 'undefined'
        ? createPortal(
            <div className="fixed inset-0 z-[120]" role="dialog" aria-modal="true" aria-label={headerTitle}>
              {/* Backdrop */}
              <div
                onClick={closeMenu}
                className={`fixed inset-0 transition-opacity ${
                  isMobileViewport ? 'bg-black/55 backdrop-blur-xs' : 'bg-black/15'
                }`}
              />

              {isMobileViewport ? (
                /* Mobile Thumb-Zone Bottom Sheet Drawer */
                <div
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  className="fixed inset-x-0 bottom-0 z-[121] rounded-t-3xl border-t shadow-2xl flex flex-col max-h-[82vh] animate-fadeIn pb-[max(1rem,env(safe-area-inset-bottom))]"
                >
                  {/* Sheet Drag Handle */}
                  <div className="pt-2.5 pb-1 flex justify-center shrink-0">
                    <span className="w-10 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  </div>

                  {/* Mobile Sheet Header */}
                  <div
                    style={{ borderColor: theme.cardBorder }}
                    className="px-4 pb-3 border-b flex items-center justify-between gap-2 shrink-0"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <h3
                        style={{ color: theme.sacredMaroon }}
                        className="text-sm font-black font-serif leading-snug"
                      >
                        {headerTitle}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={closeMenu}
                      aria-label={language === 'en' ? 'Close sound menu' : 'बंद करें'}
                      className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-stone-500 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Interactive Tap List Rows (All 6 sounds, zero clipping) */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
                    {AMBIENT_SOUND_OPTIONS.map((opt) => {
                      const isSelected =
                        opt.id === 'none' ? !isPlaying : currentSound === opt.id && isPlaying;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectSound(opt.id)}
                          style={{
                            backgroundColor: isSelected ? theme.accentGoldLight : theme.bgSecondary,
                            borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                            color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                          }}
                          className="w-full min-h-[60px] p-3 rounded-2xl border text-left flex items-center justify-between gap-3 transition active:scale-[0.985] cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-amber-600 text-white shadow-xs'
                                  : 'bg-black/5 dark:bg-white/5 text-amber-700 dark:text-amber-300'
                              }`}
                            >
                              {getSoundIcon(opt.id, 'w-5 h-5')}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-serif font-bold text-sm leading-snug">
                                {opt.label[language] || opt.label.hi}
                              </div>
                              <div className="text-xs opacity-80 leading-snug mt-0.5">
                                {opt.subtitle[language] || opt.subtitle.hi}
                              </div>
                            </div>
                          </div>

                          {isSelected && (
                            <div
                              style={{ color: theme.sacredMaroon }}
                              className="flex items-center gap-1 text-xs font-bold shrink-0"
                            >
                              {opt.id !== 'none' && <span>{activeWord}</span>}
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Mobile Pinned Volume Controls */}
                  {isPlaying && <div className="px-4 pt-1 shrink-0">{renderVolumeBar(true)}</div>}
                </div>
              ) : (
                /* Desktop / Tablet Viewport-Safe Popover */
                <div
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                    top: popoverCoords.top !== undefined ? `${popoverCoords.top}px` : undefined,
                    bottom: popoverCoords.bottom !== undefined ? `${popoverCoords.bottom}px` : undefined,
                    left: `${popoverCoords.left}px`,
                    width: `${popoverCoords.width}px`,
                  }}
                  className="fixed z-[121] rounded-2xl border shadow-2xl p-3 space-y-2.5 animate-fadeIn"
                >
                  <div
                    style={{ borderColor: theme.cardBorder }}
                    className="flex items-center justify-between gap-2 pb-2 border-b"
                  >
                    <span className="text-xs font-black font-serif leading-snug" style={{ color: theme.sacredMaroon }}>
                      {headerTitle}
                    </span>
                    <button
                      type="button"
                      onClick={closeMenu}
                      aria-label={language === 'en' ? 'Close sound menu' : 'बंद करें'}
                      className="min-w-[32px] min-h-[32px] flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg cursor-pointer shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-0.5">
                    {AMBIENT_SOUND_OPTIONS.map((opt) => {
                      const isSelected =
                        opt.id === 'none' ? !isPlaying : currentSound === opt.id && isPlaying;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectSound(opt.id)}
                          style={{
                            backgroundColor: isSelected ? theme.accentGoldLight : 'transparent',
                            borderColor: isSelected ? theme.accentGold : 'transparent',
                            color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                          }}
                          className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between gap-2.5 text-xs border transition cursor-pointer hover:bg-amber-500/10 ${
                            isSelected ? 'font-bold' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 flex-1">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-black/5 dark:bg-white/5 text-amber-600 dark:text-amber-300'
                              }`}
                            >
                              {getSoundIcon(opt.id, 'w-4 h-4')}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-serif font-bold text-xs leading-snug">
                                {opt.label[language] || opt.label.hi}
                              </div>
                              <div className="text-[11px] opacity-75 leading-snug mt-0.5">
                                {opt.subtitle[language] || opt.subtitle.hi}
                              </div>
                            </div>
                          </div>

                          {isSelected && (
                            <Check style={{ color: theme.sacredMaroon }} className="w-4 h-4 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isPlaying && renderVolumeBar(true)}
                </div>
              )}
            </div>,
            document.body
          )
        : null;

    return (
      <div ref={triggerWrapRef} className={`relative inline-block text-left ${className}`}>
        <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/20 shadow-2xs">
          {/* Quick Play / Pause Toggle */}
          <button
            type="button"
            onClick={() => {
              if (isPlaying) {
                ambientAudio.stop();
              } else {
                ambientAudio.play(currentSound === 'none' ? 'tanpura' : currentSound);
              }
            }}
            style={{
              backgroundColor: isPlaying ? theme.accentGold : 'transparent',
              color: isPlaying ? '#1c1917' : theme.textPrimary,
            }}
            className={`min-h-[38px] sm:min-h-[28px] px-2.5 sm:px-2 py-1 sm:py-0.5 rounded-lg sm:rounded-md text-[11px] sm:text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isPlaying ? 'shadow-xs ring-1 ring-amber-400' : 'hover:bg-amber-500/15'
            }`}
            title={isPlaying ? 'ध्वनि विराम (Pause Ambient)' : 'पृष्ठभूमि ध्वनि चालू (Play Ambient)'}
          >
            {isPlaying ? (
              <span className="flex items-center gap-1.5">
                {getSoundIcon(currentSound, 'w-3.5 h-3.5 text-stone-950')}
                <span className="font-serif truncate max-w-[96px]">
                  {currentOption.label[language].split(' ')[0]}
                </span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="font-serif">
                  {language === 'pb' ? 'ਧੁਨੀ' : language === 'en' ? 'Sound' : 'पृष्ठभूमि'}
                </span>
              </span>
            )}
          </button>

          {/* Selector Trigger Button */}
          <button
            type="button"
            onClick={() => {
              updateOverlayPosition();
              setIsOpenMenu((prev) => !prev);
            }}
            aria-expanded={isOpenMenu}
            aria-haspopup="dialog"
            aria-label={headerTitle}
            className="min-w-[34px] min-h-[38px] sm:min-w-[26px] sm:min-h-[28px] px-1.5 rounded-lg sm:rounded-md text-stone-600 dark:text-stone-300 hover:text-amber-700 hover:bg-amber-500/10 flex items-center justify-center transition cursor-pointer shrink-0"
            title={headerTitle}
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpenMenu ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {portalOverlay}
      </div>
    );
  }

  // Inline Variant (For Full Meditation Timer view — Mobile-first Tap Rows -> Desktop Grid)
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
        {AMBIENT_SOUND_OPTIONS.map((opt) => {
          const isSelected = opt.id === 'none' ? !isPlaying : currentSound === opt.id && isPlaying;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelectSound(opt.id)}
              style={{
                backgroundColor: isSelected ? theme.accentGoldLight : theme.cardBg,
                borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                color: isSelected ? theme.sacredMaroon : theme.textPrimary,
              }}
              className={`min-h-[64px] sm:min-h-0 p-3.5 sm:p-4 rounded-2xl border-2 flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-3 sm:gap-2 text-left sm:text-center transition-all cursor-pointer hover:shadow-md active:scale-[0.985] ${
                isSelected ? 'shadow-md ring-2 ring-amber-400/35' : ''
              }`}
            >
              <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 min-w-0 flex-1 w-full">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-black/5 dark:bg-white/5 text-amber-700 dark:text-amber-300'
                  }`}
                >
                  {getSoundIcon(opt.id, 'w-5 h-5 sm:w-6 sm:h-6')}
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <span className="text-sm font-black font-serif block leading-snug">
                    {opt.label[language] || opt.label.hi}
                  </span>
                  <span className="text-xs sm:text-[11px] opacity-80 font-medium block leading-snug">
                    {opt.subtitle[language] || opt.subtitle.hi}
                  </span>
                </div>
              </div>

              {isSelected && (
                <div
                  style={{ color: theme.sacredMaroon }}
                  className="flex items-center gap-1 text-xs font-bold shrink-0 sm:mt-1"
                >
                  {opt.id !== 'none' && <span>{activeWord}</span>}
                  <Check className="w-4 h-4" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Responsive Volume Bar */}
      {isPlaying && (
        <div
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="rounded-2xl border shadow-xs max-w-md mx-auto overflow-hidden"
        >
          {renderVolumeBar(false)}
        </div>
      )}
    </div>
  );
};

