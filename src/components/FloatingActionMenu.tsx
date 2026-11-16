import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower2, 
  Settings, 
  Search, 
  Timer, 
  Mic, 
  ChevronsUp, 
  ChevronsDown, 
  Feather,
  X,
  Compass,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Language, AppView } from '../types';
import { sacredHaptics } from '../services/haptics';
import { satyanaamAudio } from '../services/audioDhun';
import { useAppTheme } from '../theme/ThemeContext';

interface FloatingActionMenuProps {
  language: Language;
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  onOpenSettings: () => void;
  onOpenBlessing: () => void;
  isListeningVoice?: boolean;
  onToggleVoiceListening?: () => void;
  onScrollToTop?: () => void;
  onScrollToBottom?: () => void;
  onScrollUp?: () => void;
  onScrollDown?: () => void;
  isDhunPlaying?: boolean;
  onToggleDhun?: () => void;
}

export const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({
  language,
  currentView,
  onSelectView,
  onOpenSettings,
  onOpenBlessing,
  isListeningVoice = false,
  onToggleVoiceListening,
  onScrollToTop,
  onScrollToBottom,
  onScrollUp,
  onScrollDown,
  isDhunPlaying = false,
  onToggleDhun,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [expandVertical, setExpandVertical] = useState<'up' | 'down'>('up');
  const [expandHorizontal, setExpandHorizontal] = useState<'left' | 'right'>('left');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const { theme } = useAppTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const actionButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Intersection Observer / Scroll listener to reduce opacity during active scrolling
  useEffect(() => {
    let scrollTimer: any = null;
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rootEl) {
        rootEl.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // Close menu on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        sacredHaptics.lightTap();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setFocusedIndex((prev) => {
          const next = prev < actionButtonsRef.current.length - 1 ? prev + 1 : 0;
          actionButtonsRef.current[next]?.focus();
          return next;
        });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setFocusedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : actionButtonsRef.current.length - 1;
          actionButtonsRef.current[next]?.focus();
          return next;
        });
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // When menu opens, reset focused index and auto-focus first item
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(0);
      const timer = setTimeout(() => {
        actionButtonsRef.current[0]?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Hindi spelling: "सत्यनाम"
  const labels = {
    hi: {
      title: 'त्वरित सेवाएं',
      flowers: 'पुष्प अर्पण (दिव्य आशीष)',
      settings: 'नित्य वाणी सेटिंग्स',
      search: 'गहन साखी व ग्रंथ खोज',
      meditation: 'साधना व ध्यान टाइमर',
      diary: 'साधक दैनिकी व शुकराना',
      voice: isListeningVoice ? 'आवाज नियंत्रण चालू है' : 'आवाज नियंत्रण (Voice Nav)',
      scrollTop: 'शीर्ष पर जाएं (Top)',
      scrollBottom: 'नीचे जाएं (Bottom)',
      scrollUp: 'ऊपर स्क्रॉल करें',
      scrollDown: 'नीचे स्क्रॉल करें',
      dhun: isDhunPlaying ? 'सत्यनाम धुन बंद करें' : 'सत्यनाम धुन बजाएं',
    },
    pb: {
      title: 'ਤੁਰੰਤ ਸੇਵਾਵਾਂ',
      flowers: 'ਪੁਸ਼ਪ ਅਰਪਣ (ਦਿਵਯ ਅਸੀਸ)',
      settings: 'ਨਿੱਤ ਬਾਣੀ ਸੈਟਿੰਗਜ਼',
      search: 'ਖੋਜ ਸਾਖੀ ਤੇ ਗ੍ਰੰਥ',
      meditation: 'ਸਾਧਨਾ ਤੇ ਧਿਆਨ ਟਾਈਮਰ',
      diary: 'ਸਾਧਕ ਦੈਨਿਕੀ ਤੇ ਸ਼ੁਕਰਾਨਾ',
      voice: isListeningVoice ? 'ਆਵਾਜ਼ ਨਿਯੰਤਰਣ ਚਾਲੂ' : 'ਆਵਾਜ਼ ਨਿਯੰਤਰਣ',
      scrollTop: 'ਉੱਪਰ ਜਾਓ (Top)',
      scrollBottom: 'ਹੇਠਾਂ ਜਾਓ (Bottom)',
      scrollUp: 'ਉੱਪਰ ਸਕ੍ਰੋਲ',
      scrollDown: 'ਹੇਠਾਂ ਸਕ੍ਰੋਲ',
      dhun: isDhunPlaying ? 'ਸਤਯਨਾਮੁ ਧੁਨ ਬੰਦ ਕਰੋ' : 'ਸਤਯਨਾਮੁ ਧੁਨ ਚਲਾਓ',
    },
    en: {
      title: 'Quick Actions',
      flowers: 'Offer Flowers & Blessing',
      settings: 'Nitya Vani Settings',
      search: 'Search Sakhi & Granth',
      meditation: 'Sadhana & Meditation Timer',
      diary: 'Spiritual Diary & Gratitude',
      voice: isListeningVoice ? 'Voice Nav Listening...' : 'Voice Navigation',
      scrollTop: 'Scroll to Top',
      scrollBottom: 'Scroll to Bottom',
      scrollUp: 'Scroll Up',
      scrollDown: 'Scroll Down',
      dhun: isDhunPlaying ? 'Stop Dhun' : 'Play Satyanaam Dhun',
    },
  }[language] || {
    title: 'त्वरित सेवाएं',
    flowers: 'पुष्प अर्पण (दिव्य आशीष)',
    settings: 'नित्य वाणी सेटिंग्स',
    search: 'गहन साखी व ग्रंथ खोज',
    meditation: 'साधना व ध्यान टाइमर',
    diary: 'साधक दैनिकी व शुकराना',
    voice: 'आवाज नियंत्रण',
    scrollTop: 'शीर्ष पर जाएं',
    scrollBottom: 'नीचे जाएं',
    dhun: 'सत्यनाम धुन',
  };

  const toggleMenu = () => {
    sacredHaptics.mediumTap();
    if (!isOpen) {
      try {
        satyanaamAudio.ringSatyanaamTripleChime();
      } catch {}

      // Boundary detection before expanding menu
      if (menuRef.current && typeof window !== 'undefined') {
        const rect = menuRef.current.getBoundingClientRect();
        const spaceAbove = rect.top;
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceLeft = rect.left;
        const spaceRight = window.innerWidth - rect.right;

        // Determine optimal expansion direction (up if >300px above, else down)
        setExpandVertical(spaceAbove < 320 && spaceBelow > spaceAbove ? 'down' : 'up');
        setExpandHorizontal(spaceRight > spaceLeft ? 'right' : 'left');
      }
    }
    setIsOpen(!isOpen);
  };

  const handleAction = (action: () => void) => {
    sacredHaptics.lightTap();
    action();
    setIsOpen(false);
  };

  const menuActions = [
    {
      id: 'offer-flowers',
      icon: <Flower2 className="w-5 h-5 text-rose-500 animate-pulse shrink-0" aria-hidden="true" />,
      label: labels.flowers,
      color: 'bg-rose-500/15 border-rose-500/40 text-rose-800 dark:text-rose-200 hover:bg-rose-500/25 focus:ring-2 focus:ring-rose-500',
      onClick: () => {
        sacredHaptics.petalShower();
        onOpenBlessing();
      },
    },
    {
      id: 'settings',
      icon: <Settings className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />,
      label: labels.settings,
      color: 'bg-amber-500/15 border-amber-500/40 text-amber-900 dark:text-amber-200 hover:bg-amber-500/25 focus:ring-2 focus:ring-amber-500',
      onClick: onOpenSettings,
    },
    {
      id: 'search',
      icon: <Search className="w-5 h-5 text-indigo-500 shrink-0" aria-hidden="true" />,
      label: labels.search,
      color: 'bg-indigo-500/15 border-indigo-500/40 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-500/25 focus:ring-2 focus:ring-indigo-500',
      onClick: () => onSelectView('deep-search'),
    },
    {
      id: 'meditation',
      icon: <Timer className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />,
      label: labels.meditation,
      color: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-500/25 focus:ring-2 focus:ring-emerald-500',
      onClick: () => onSelectView('meditation-timer'),
    },
    {
      id: 'diary',
      icon: <Feather className="w-5 h-5 text-purple-600 shrink-0" aria-hidden="true" />,
      label: labels.diary,
      color: 'bg-purple-500/15 border-purple-500/40 text-purple-900 dark:text-purple-200 hover:bg-purple-500/25 focus:ring-2 focus:ring-purple-500',
      onClick: () => onSelectView('diary'),
    },
  ];

  if (onToggleVoiceListening) {
    menuActions.push({
      id: 'voice',
      icon: <Mic className={`w-5 h-5 shrink-0 ${isListeningVoice ? 'text-red-500 animate-pulse' : 'text-blue-500'}`} aria-hidden="true" />,
      label: labels.voice,
      color: isListeningVoice 
        ? 'bg-red-500/20 border-red-500/50 text-red-700 dark:text-red-300 hover:bg-red-500/30 font-bold focus:ring-2 focus:ring-red-500'
        : 'bg-blue-500/15 border-blue-500/40 text-blue-900 dark:text-blue-200 hover:bg-blue-500/25 focus:ring-2 focus:ring-blue-500',
      onClick: onToggleVoiceListening,
    });
  }

  if (onToggleDhun) {
    menuActions.push({
      id: 'dhun',
      icon: isDhunPlaying ? <Volume2 className="w-5 h-5 text-amber-500 animate-pulse shrink-0" aria-hidden="true" /> : <VolumeX className="w-5 h-5 text-zinc-500 shrink-0" aria-hidden="true" />,
      label: labels.dhun,
      color: isDhunPlaying
        ? 'bg-amber-500/20 border-amber-500/50 text-amber-900 dark:text-amber-200 hover:bg-amber-500/30 focus:ring-2 focus:ring-amber-500'
        : 'bg-zinc-500/15 border-zinc-500/40 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-500/25 focus:ring-2 focus:ring-zinc-500',
      onClick: onToggleDhun,
    });
  }

  if (onScrollUp) {
    menuActions.push({
      id: 'scroll-up',
      icon: <ChevronsUp className="w-4 h-4 text-amber-600 shrink-0 opacity-70" aria-hidden="true" />,
      label: labels.scrollUp,
      color: 'bg-amber-500/5 border-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 focus:ring-1 focus:ring-amber-500',
      onClick: onScrollUp,
    });
  }

  if (onScrollDown) {
    menuActions.push({
      id: 'scroll-down',
      icon: <ChevronsDown className="w-4 h-4 text-amber-600 shrink-0 opacity-70" aria-hidden="true" />,
      label: labels.scrollDown,
      color: 'bg-amber-500/5 border-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 focus:ring-1 focus:ring-amber-500',
      onClick: onScrollDown,
    });
  }

  if (onScrollToTop) {
    menuActions.push({
      id: 'scroll-top',
      icon: <ChevronsUp className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />,
      label: labels.scrollTop,
      color: 'bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500',
      onClick: onScrollToTop,
    });
  }

  if (onScrollToBottom) {
    menuActions.push({
      id: 'scroll-bottom',
      icon: <ChevronsDown className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />,
      label: labels.scrollBottom,
      color: 'bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500',
      onClick: onScrollToBottom,
    });
  }

  // Dynamic positioning style
  const positionClasses = `${expandVertical === 'up' ? 'bottom-14 sm:bottom-16 mb-2' : 'top-14 sm:top-16 mt-2'} ${expandHorizontal === 'left' ? 'right-0' : 'left-0'}`;

  return (
    <nav 
      aria-label={labels.title} 
      ref={menuRef} 
      className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-7 z-[120] print:hidden touch-manipulation select-none transition-opacity duration-300 ${isScrolling && !isOpen ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
    >
      {/* Dim Backdrop Overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-[-1] bg-black/30 dark:bg-black/60 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Action Menu List with Boundary-Aware Dynamic Positioning & ARIA Menu Role */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-action-menu-dropdown"
            role="menu"
            aria-orientation="vertical"
            aria-label={labels.title}
            initial={{ opacity: 0, scale: 0.85, y: expandVertical === 'up' ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: expandVertical === 'up' ? 20 : -20 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            className={`absolute ${positionClasses} flex flex-col items-end gap-1.5 sm:gap-2 max-w-[90vw] w-[260px] sm:w-[280px] p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-2xl border-2 backdrop-blur-xl overflow-hidden`}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.accentGold,
              boxShadow: theme.cardShadow,
            }}
          >
            {/* Header Title inside Menu */}
            <div className="w-full px-2.5 py-1.5 border-b flex items-center justify-between gap-2 shrink-0 min-h-[36px]" style={{ borderColor: theme.cardBorder }}>
              <span className="text-[11px] font-black uppercase tracking-wider font-serif flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
                <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" aria-hidden="true" />
                <span>{labels.title}</span>
              </span>
              <span className="text-[10px] font-mono opacity-70" style={{ color: theme.textMuted }}>
                ।। साहेब ।।
              </span>
            </div>

            {/* Menu Buttons List - Height-constrained to 48vh to strictly fit viewport with minimum 48px touch targets */}
            <div className="w-full space-y-1.5 max-h-[48vh] sm:max-h-[60vh] overflow-y-auto pr-1">
              {menuActions.map((act, index) => (
                <motion.button
                  key={act.id}
                  ref={(el) => { actionButtonsRef.current[index] = el; }}
                  role="menuitem"
                  tabIndex={0}
                  aria-label={act.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.025 }}
                  onClick={() => handleAction(act.onClick)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleAction(act.onClick);
                    }
                  }}
                  className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl sm:rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-serif font-bold transition-all transform active:scale-95 cursor-pointer shadow-xs focus:outline-hidden touch-manipulation ${act.color}`}
                  title={act.label}
                >
                  <span className="flex items-center gap-2.5 leading-tight">
                    {act.icon}
                    <span>{act.label}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Unified Floating Action Button (FAB) with Minimum 48x48px Touch Target */}
      <motion.button
        id="unified-floating-action-menu-btn"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={isOpen ? "floating-action-menu-dropdown" : undefined}
        aria-label={isOpen ? "मेनू बंद करें (Close Quick Actions)" : "त्वरित सेवाएं मेनू खोलें (Open Quick Actions Menu)"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMenu}
        title={labels.title}
        className="relative min-w-[48px] min-h-[48px] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl border-2 transition-all cursor-pointer group overflow-hidden focus:outline-hidden focus:ring-4 focus:ring-amber-400 active:scale-95 touch-manipulation"
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)' 
            : 'linear-gradient(135deg, #881337 0%, #9F1239 50%, #B45309 100%)',
          borderColor: '#FDE68A',
          boxShadow: '0 10px 30px -5px rgba(159, 18, 57, 0.5), 0 0 15px rgba(251, 191, 36, 0.4)',
        }}
      >
        {/* Subtle glowing ring effect */}
        <span className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping pointer-events-none opacity-40 group-hover:opacity-75" aria-hidden="true" />

        {/* Icon transition between Compass/Flower and Close X */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.18 }}
              className="text-amber-100 flex items-center justify-center min-w-[24px] min-h-[24px]"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="open-icon"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-center text-amber-200 min-w-[24px] min-h-[24px]"
            >
              <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse group-hover:rotate-12 transition-transform drop-shadow-md" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active voice indicator dot if mic listening */}
        {isListeningVoice && !isOpen && (
          <span className="absolute top-1 right-1 flex h-3.5 w-3.5" aria-label="Voice Listening Active">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border border-white"></span>
          </span>
        )}
      </motion.button>
    </nav>
  );
};
