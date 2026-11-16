import React, { useState, useEffect } from 'react';
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
  X
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { 
  ambientAudio, 
  AmbientSoundType, 
  AMBIENT_SOUND_OPTIONS 
} from '../services/ambientAudioService';

interface AmbientSoundPlayerProps {
  language: Language;
  variant?: 'inline' | 'floating' | 'dropdown' | 'compact';
  onClose?: () => void;
  className?: string;
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

  useEffect(() => {
    const unsub = ambientAudio.subscribe((sound, playing, vol) => {
      setCurrentSound(sound);
      setIsPlaying(playing);
      setVolume(vol);
    });
    return () => unsub();
  }, []);

  const getSoundIcon = (sound: AmbientSoundType, className = "w-3.5 h-3.5") => {
    switch (sound) {
      case 'temple_bells':
        return <Bell className={className} />;
      case 'bansuri':
        return <Wind className={className} />;
      case 'been':
        return <Music className={className} />;
      case 'tanpura':
        return <Disc className={className} />;
      case 'satyanaam':
        return <Sparkles className={className} />;
      default:
        return <VolumeX className={className} />;
    }
  };

  const handleSelectSound = (soundId: AmbientSoundType) => {
    if (soundId === 'none') {
      ambientAudio.stop();
    } else {
      ambientAudio.play(soundId);
    }
    setIsOpenMenu(false);
  };

  const currentOption = AMBIENT_SOUND_OPTIONS.find((o) => o.id === currentSound) || AMBIENT_SOUND_OPTIONS[0];

  // Dropdown / Compact Variant (For Swadhyay Reader & Pothi Paath toolbars)
  if (variant === 'compact' || variant === 'dropdown') {
    return (
      <div className={`relative inline-block text-left ${className}`}>
        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-amber-400/20 shadow-2xs">
          {/* Quick Play/Pause Toggle */}
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
            className={`px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlaying ? 'shadow-xs ring-1 ring-amber-400' : 'hover:bg-amber-500/15'
            }`}
            title={isPlaying ? 'ध्वनि विराम (Pause Ambient)' : 'पृष्ठभूमि ध्वनि चालू (Play Ambient)'}
          >
            {isPlaying ? (
              <span className="flex items-center gap-1">
                {getSoundIcon(currentSound, "w-3 h-3 text-stone-950 animate-pulse")}
                <span className="font-serif truncate max-w-[85px]">
                  {currentOption.label[language].split(' ')[0]}
                </span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Volume2 className="w-3 h-3 text-stone-400" />
                <span className="font-serif">
                  {language === 'pb' ? 'ਧੁਨੀ' : language === 'en' ? 'Sound' : 'पृष्ठभूमि'}
                </span>
              </span>
            )}
          </button>

          {/* Selector Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="p-1 rounded-md text-stone-500 hover:text-amber-600 transition cursor-pointer"
            title="ध्वनि प्रकार चुनें (Select Ambient Sound)"
          >
            <ChevronDown className={`w-3 h-3 transition-transform ${isOpenMenu ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpenMenu && (
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="absolute right-0 top-full mt-1.5 w-64 sm:w-72 rounded-2xl border-2 shadow-2xl z-50 p-2.5 space-y-2 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-amber-400/20">
              <span className="text-xs font-black font-serif" style={{ color: theme.sacredMaroon }}>
                {language === 'pb' ? 'ਪਾਵਨ ਪਿਛੋਕੜ ਧੁਨ (Ambient)' : language === 'en' ? 'Sacred Ambient Sound' : 'पावन पृष्ठभूमि ध्वनि (100% ऑफ़लाइन)'}
              </span>
              <button
                type="button"
                onClick={() => setIsOpenMenu(false)}
                className="p-1 text-stone-400 hover:text-stone-600 rounded-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sound options list */}
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              {AMBIENT_SOUND_OPTIONS.map((opt) => {
                const isSelected = currentSound === opt.id && isPlaying;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectSound(opt.id)}
                    style={{
                      backgroundColor: isSelected ? theme.accentGoldLight : 'transparent',
                      color: isSelected ? theme.sacredMaroon : theme.textPrimary,
                    }}
                    className={`w-full p-2 rounded-xl text-left flex items-center justify-between gap-2 text-xs transition cursor-pointer hover:bg-amber-500/10 ${
                      isSelected ? 'font-bold border border-amber-400/50' : 'border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-500 text-stone-950' : 'bg-black/5 dark:bg-white/5 text-amber-600'}`}>
                        {getSoundIcon(opt.id, "w-3.5 h-3.5")}
                      </div>
                      <div className="min-w-0">
                        <div className="font-serif truncate font-bold">{opt.label[language]}</div>
                        <div className="text-[10px] opacity-70 truncate">{opt.subtitle[language]}</div>
                      </div>
                    </div>

                    {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Volume Control */}
            {isPlaying && (
              <div className="pt-2 border-t border-amber-400/20 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => ambientAudio.setVolume(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-stone-200 dark:bg-stone-700 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] font-mono font-bold w-7 text-right">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Inline Grid Variant (For Full Meditation Timer view)
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {AMBIENT_SOUND_OPTIONS.map((opt) => {
          const isSelected = currentSound === opt.id && isPlaying;
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
              className={`p-3 sm:p-4 rounded-2xl border-2 flex flex-col items-center gap-2 text-center transition-all cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-95 ${
                isSelected ? 'shadow-md ring-2 ring-amber-400/40' : ''
              }`}
            >
              <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-amber-500 text-stone-950 shadow-xs' : 'bg-black/5 dark:bg-white/5 text-amber-600'}`}>
                {getSoundIcon(opt.id, `w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? 'animate-pulse' : ''}`)}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs sm:text-sm font-black font-serif block">{opt.label[language]}</span>
                <span className="text-[10px] opacity-75 font-medium block line-clamp-1">{opt.subtitle[language]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Volume Bar */}
      {isPlaying && (
        <div 
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
          className="p-3 rounded-xl border flex items-center justify-between gap-3 max-w-sm mx-auto shadow-inner"
        >
          <button
            type="button"
            onClick={() => ambientAudio.setVolume(volume === 0 ? 0.45 : 0)}
            className="text-amber-600 cursor-pointer"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => ambientAudio.setVolume(parseFloat(e.target.value))}
            className="w-full accent-amber-500 h-1.5 rounded-lg bg-stone-200 dark:bg-stone-700 cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-stone-600 dark:text-stone-300 w-9 text-right">
            {Math.round(volume * 100)}%
          </span>
        </div>
      )}
    </div>
  );
};
