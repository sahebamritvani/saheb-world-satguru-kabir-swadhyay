import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Edit3 } from 'lucide-react';
import { AppView, Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import {
  OPEN_ADMIN_INJECTOR_EVENT,
  getLoadedInjectedPanelsForView,
} from '../services/adminSlotInjectorStore';
import { isAdminAuthenticated } from '../services/adminAuth';

interface AdminInjectedContentBannerProps {
  view: AppView;
  language: Language;
  updateVersion: number;
}

export const AdminInjectedContentBanner: React.FC<AdminInjectedContentBannerProps> = ({
  view,
  language,
  updateVersion,
}) => {
  const { theme, isDarkMode } = useAppTheme();
  const [expandedSlotIds, setExpandedSlotIds] = useState<Record<string, boolean>>({});
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());

  useEffect(() => {
    const syncAdmin = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', syncAdmin);
    window.addEventListener('storage', syncAdmin);
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', syncAdmin);
      window.removeEventListener('storage', syncAdmin);
    };
  }, []);

  const panels = useMemo(
    () => getLoadedInjectedPanelsForView(view),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [view, updateVersion]
  );

  if (panels.length === 0) return null;

  const toggleExpand = (slotId: string) => {
    setExpandedSlotIds((prev) => ({
      ...prev,
      [slotId]: prev[slotId] === false ? true : !(prev[slotId] ?? true),
    }));
  };

  const openEditorForSlot = (slotId: string) => {
    if (!isAdminAuthenticated()) return;
    window.dispatchEvent(
      new CustomEvent(OPEN_ADMIN_INJECTOR_EVENT, { detail: { slotId } })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4 space-y-3">
      {panels.map(({ slot, entries }) => {
        const isExpanded = expandedSlotIds[slot.id] ?? true;
        const headingText = slot.title[language] || slot.title.hi;

        return (
          <section
            key={slot.id}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
            }}
            className="rounded-xl border shadow-sm overflow-hidden"
            aria-label={headingText}
          >
            {/* Header Row */}
            <div
              style={{
                backgroundColor: isDarkMode ? 'rgba(217, 119, 6, 0.08)' : theme.stepActiveBg,
                borderColor: theme.cardBorder,
              }}
              className="px-4 sm:px-5 py-3 border-b flex items-center justify-between gap-3"
            >
              <div className="min-w-0 space-y-0.5">
                <div
                  className="text-[11px] font-sans tracking-wide flex flex-wrap items-center gap-1.5"
                  style={{ color: theme.textSecondary }}
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 shrink-0" />
                  <span>
                    {language === 'pb'
                      ? 'ਵਧੀਕ ਪਾਵਨ ਸੰਗ੍ਰਹਿ'
                      : language === 'en'
                      ? 'Additional Sacred Collection'
                      : 'अतिरिक्त पावन संग्रह'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    #{String(slot.slotNumber).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    {entries.length}{' '}
                    {language === 'pb'
                      ? 'ਪ੍ਰਵਿਸ਼ਟੀਆਂ'
                      : language === 'en'
                      ? entries.length === 1
                        ? 'entry'
                        : 'entries'
                      : 'प्रविष्टि'}
                  </span>
                </div>
                <h3
                  style={{ color: theme.sacredMaroon }}
                  className="text-sm sm:text-base font-bold font-serif truncate"
                >
                  {headingText}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => openEditorForSlot(slot.id)}
                    style={{
                      borderColor: theme.cardBorder,
                      color: theme.sacredMaroon,
                    }}
                    className="min-h-[38px] px-3 py-1.5 rounded-lg border text-xs font-semibold font-serif inline-flex items-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Edit3 className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {language === 'pb' ? 'ਸੋਧੋ' : language === 'en' ? 'Edit' : 'संपादित करें'}
                    </span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => toggleExpand(slot.id)}
                  style={{
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                  }}
                  aria-expanded={isExpanded}
                  className="min-h-[38px] px-2.5 py-1.5 rounded-lg border text-xs font-semibold inline-flex items-center gap-1 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Body Entries */}
            {isExpanded && (
              <div className="p-4 sm:p-5 divide-y space-y-4" style={{ borderColor: theme.cardBorder }}>
                {entries.map((entry, idx) => {
                  const activeLines =
                    entry.lines[language]?.length > 0 ? entry.lines[language] : entry.lines.hi;
                  const entryTitle = entry.title[language] || entry.title.hi;
                  const entryContext = entry.context?.[language] || entry.context?.hi;

                  return (
                    <article
                      key={entry.id}
                      className={idx > 0 ? 'pt-4 space-y-2' : 'space-y-2'}
                      style={{ borderColor: theme.cardBorder }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-xs font-mono tabular-nums opacity-70 shrink-0"
                          style={{ color: theme.textSecondary }}
                        >
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <h4
                          className="text-sm sm:text-base font-bold font-serif"
                          style={{ color: theme.sacredMaroon }}
                        >
                          {entryTitle}
                        </h4>
                      </div>

                      <div className="space-y-1.5 pl-6">
                        {activeLines.map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className="text-sm sm:text-base font-serif leading-relaxed"
                            style={{ color: theme.textPrimary }}
                          >
                            {line}
                          </p>
                        ))}
                        {entryContext && (
                          <p
                            className="text-xs sm:text-sm font-serif leading-relaxed pt-1"
                            style={{ color: theme.textSecondary }}
                          >
                            {entryContext}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};
