import React from 'react';
import { ArrowLeft, Image as ImageIcon, ShieldCheck, Award, Crown } from 'lucide-react';
import { AppView, Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface NewModulesNavBarProps {
  currentView: 'vani-card-maker' | 'satvik-sankalp' | 'kabir-gyan-quiz' | 'vansh-bayalis';
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onNavigateView: (view: AppView) => void;
  onClose: () => void;
}

export const NewModulesNavBar: React.FC<NewModulesNavBarProps> = ({
  currentView,
  language,
  onSelectLanguage,
  onNavigateView,
  onClose,
}) => {
  const { theme, isDarkMode } = useAppTheme();

  const navItems: Array<{
    view: 'vani-card-maker' | 'satvik-sankalp' | 'kabir-gyan-quiz' | 'vansh-bayalis';
    icon: React.ComponentType<{ className?: string }>;
    label: Record<Language, string>;
  }> = [
    {
      view: 'vani-card-maker',
      icon: ImageIcon,
      label: {
        hi: 'वाणी कार्ड मेकर',
        pb: 'ਬਾਣੀ ਕਾਰਡ ਮੇਕਰ',
        en: 'Card Maker',
      },
    },
    {
      view: 'satvik-sankalp',
      icon: ShieldCheck,
      label: {
        hi: 'सात्विक संकल्प',
        pb: 'ਸਾਤਵਿਕ ਸੰਕਲਪ',
        en: 'Satvik Vow',
      },
    },
    {
      view: 'kabir-gyan-quiz',
      icon: Award,
      label: {
        hi: 'कबीर प्रश्नोत्तरी',
        pb: 'ਕਬੀਰ ਕੁਇਜ਼',
        en: 'Gyan Quiz',
      },
    },
    {
      view: 'vansh-bayalis',
      icon: Crown,
      label: {
        hi: 'वंश बयालीस',
        pb: 'ਵੰਸ਼ ਬਿਆਲੀ',
        en: 'Vansh Bayalis',
      },
    },
  ];

  const langLabels: Array<{ id: Language; label: string }> = [
    { id: 'hi', label: 'हिंदी' },
    { id: 'pb', label: 'ਪੰਜਾਬੀ' },
    { id: 'en', label: 'English' },
  ];

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? 'rgba(28, 22, 18, 0.94)' : 'rgba(253, 248, 238, 0.96)',
        borderColor: theme.cardBorder,
      }}
      className="rounded-2xl border p-3 sm:p-4 shadow-sm"
    >
      {/* Smooth Module Switcher Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onNavigateView(item.view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={
                isActive
                  ? {
                      backgroundColor: '#6B1D1D',
                      borderColor: '#D97706',
                      color: '#FFFFFF',
                    }
                  : {
                      backgroundColor: theme.bgSecondary,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }
              }
              className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold flex items-center justify-center gap-2 transition cursor-pointer whitespace-nowrap ${
                isActive ? 'shadow-sm' : 'hover:border-amber-500/60'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label[language] || item.label.hi}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
