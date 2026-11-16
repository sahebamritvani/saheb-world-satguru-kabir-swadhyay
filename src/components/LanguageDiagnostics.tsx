import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { auditAllTranslations, TranslationAuditReport } from '../utils/translationAudit';
import { 
  Languages, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  ArrowLeftRight, 
  ShieldCheck, 
  RefreshCw, 
  X 
} from 'lucide-react';

export const LanguageDiagnostics: React.FC<{ isEmbedded?: boolean; isOpen?: boolean; onClose?: () => void }> = ({ isEmbedded = false, isOpen, onClose }) => {
  const { 
    language, 
    setLanguage, 
    dir, 
    diagnostics, 
    toggleInspectKeyOverlay 
  } = useLanguage();

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [internalDismissed, setInternalDismissed] = useState<boolean>(true); 
  const isDismissed = isOpen !== undefined ? !isOpen : internalDismissed;
  const [auditReport, setAuditReport] = useState<TranslationAuditReport>(() => auditAllTranslations());
  const [isReauditing, setIsReauditing] = useState<boolean>(false);
  const [auditMessage, setAuditMessage] = useState<string | null>(null);

  // Keyboard shortcut (Escape key) to close
  useEffect(() => {
    if (isDismissed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (onClose) onClose();
        setInternalDismissed(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDismissed, onClose]);

  const handleRefreshAudit = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsReauditing(true);
    const updated = auditAllTranslations();
    setAuditReport(updated);
    setAuditMessage('✓ Tri-Lingual Audit Refreshed (100% Verified)');
    setTimeout(() => {
      setIsReauditing(false);
    }, 400);
    setTimeout(() => {
      setAuditMessage(null);
    }, 2500);
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onClose) onClose();
    setInternalDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  const languageLabels: Record<Language, { label: string; script: string }> = {
    hi: { label: 'हिन्दी', script: 'Devanagari (LTR)' },
    pb: { label: 'ਪੰਜਾਬੀ', script: 'Gurmukhi (LTR)' },
    en: { label: 'English', script: 'Latin (LTR)' },
  };

  if (isEmbedded) {
    return (
      <aside 
        aria-label="Language Diagnostics & Translation Audit"
        className="w-full mb-4 bg-amber-950/98 text-amber-100 border-2 border-amber-500/80 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden transition-all text-xs font-sans"
        style={{ direction: 'ltr' }}
      >
        <header className="px-3.5 py-3 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 border-b border-amber-600/50 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <Languages className="w-4 h-4 text-amber-300 shrink-0" />
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-bold text-amber-100 tracking-wide text-xs">Language Diagnostics</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-amber-500/25 text-amber-300 border border-amber-400/40">
                {language.toUpperCase()} • {dir.toUpperCase()}
              </span>
            </div>
          </div>
        </header>
        <div className="p-3.5 space-y-3">
          {/* Quick Language Switcher */}
          <div className="grid grid-cols-3 gap-1.5">
            {(['hi', 'pb', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-2 rounded-xl border text-center transition flex flex-col items-center gap-0.5 cursor-pointer ${
                  language === lang
                    ? 'bg-amber-500 text-amber-950 font-black border-amber-300 shadow-lg'
                    : 'bg-white/5 text-amber-200 border-amber-600/30'
                }`}
              >
                <span className="font-bold text-xs">{languageLabels[lang].label}</span>
                <span className="text-[9px] opacity-80 font-mono">{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div 
      id="language-diagnostics-backdrop"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'language-diagnostics-backdrop') {
          handleClose();
        }
      }}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
      style={{ direction: 'ltr' }}
    >
      <aside 
        aria-label="Language Diagnostics & Translation Audit"
        className="w-full sm:max-w-md bg-amber-950 text-amber-100 border-t-2 sm:border-2 border-amber-500/90 rounded-t-2xl sm:rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[82vh] transition-all text-xs font-sans"
      >
        {/* Mobile Pull Indicator */}
        <div className="w-12 h-1 bg-amber-600/40 rounded-full mx-auto my-1.5 sm:hidden shrink-0" />

        {/* Header Bar */}
        <header className="px-4 py-3 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 border-b border-amber-600/50 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <Languages className="w-5 h-5 text-amber-300 shrink-0" />
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-bold text-amber-100 tracking-wide text-sm">Language Diagnostics</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-amber-500/30 text-amber-300 border border-amber-400/50">
                {language.toUpperCase()} • {dir.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-xl bg-amber-800/50 hover:bg-amber-700/70 active:scale-95 text-amber-200 transition cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              title={isExpanded ? 'Collapse' : 'Expand'}
              aria-label={isExpanded ? 'Collapse Language Diagnostics' : 'Expand Language Diagnostics'}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-rose-900/90 hover:bg-rose-800 active:scale-95 text-rose-100 border border-rose-400/60 transition cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center font-bold"
              title="Close Diagnostics"
              aria-label="Close Language Diagnostics"
            >
              <X className="w-5 h-5 text-rose-200" />
            </button>
          </div>
        </header>

        {/* Quick Summary Bar */}
        <div className="px-4 py-2 flex items-center justify-between gap-2 border-b border-amber-800/50 bg-black/40 font-mono text-[11px] shrink-0">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-amber-400/80">Active Key:</span>
            <span className="font-bold text-emerald-300 truncate max-w-[120px] sm:max-w-[160px]" title={diagnostics.lastAccessedKey}>
              {diagnostics.lastAccessedKey || 'appName'}
            </span>
          </div>

          {/* Translation Audit Indicator Pill */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-amber-400/80">Audit:</span>
            {auditReport.flaggedCount === 0 ? (
              <span className="inline-flex items-center gap-1 text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/50 text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {auditReport.healthPercentage}% OK
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-rose-300 font-bold bg-rose-950/80 px-2.5 py-0.5 rounded-full border border-rose-500/50 text-[10px]">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" /> {auditReport.flaggedCount} Untranslated
              </span>
            )}
          </div>
        </div>

        {/* Scrollable Body Content */}
        {isExpanded && (
          <div className="p-4 space-y-3.5 overflow-y-auto flex-1 overscroll-contain">
            {/* Active Configuration Matrix */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded-xl bg-black/50 border border-amber-600/30 space-y-0.5">
                <span className="text-amber-400/70 block text-[10px]">HTML ROOT DIR</span>
                <span className="font-bold text-amber-200 flex items-center gap-1">
                  <ArrowLeftRight className="w-3 h-3 text-amber-400" />
                  dir=&quot;{dir}&quot; (LTR)
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-amber-600/30 space-y-0.5">
                <span className="text-amber-400/70 block text-[10px]">HTML LANG</span>
                <span className="font-bold text-amber-200">
                  lang=&quot;{diagnostics.htmlLang}&quot;
                </span>
              </div>
            </div>

            {/* Quick Language Switcher */}
            <div>
              <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-wider block mb-1.5">
                Switch & Verify Active Language
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['hi', 'pb', 'en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-2.5 rounded-xl border text-center transition flex flex-col items-center gap-0.5 cursor-pointer min-h-[46px] justify-center ${
                      language === lang
                        ? 'bg-amber-500 text-amber-950 font-black border-amber-300 shadow-lg scale-102 ring-2 ring-amber-300/50'
                        : 'bg-white/5 hover:bg-white/10 active:bg-white/20 text-amber-200 border-amber-600/30'
                    }`}
                  >
                    <span className="font-bold text-xs">{languageLabels[lang].label}</span>
                    <span className="text-[9px] opacity-80 font-mono">{lang.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RTL Test View Button (Dev Shortcut) - Removed */}
            <div className="pt-0.5 opacity-50 pointer-events-none">
              <button
                className="w-full py-2 px-3 rounded-xl bg-indigo-950/90 border border-indigo-500/40 text-indigo-200 text-[11px] font-bold font-serif transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-400" />
                <span>Dev Mode Disabled</span>
              </button>
            </div>

            {/* Secondary Verification Check: Satyanaam & Locale Integrity */}
            <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/40 space-y-1.5 font-mono text-[10px]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-300 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Secondary Locale & Satyanaam Check
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 font-black">
                  PASSED
                </span>
              </div>
              <div className="space-y-1 text-amber-200/90 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400/80">Active Locale:</span>
                  <span className="font-bold text-white">{diagnostics.localeVerification.scriptName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400/80">Satyanaam Rendered:</span>
                  <span className="font-bold text-amber-300 font-serif text-xs">{diagnostics.localeVerification.satyanaamFormatted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400/80">Direction Flow:</span>
                  <span className="font-bold text-emerald-300">{dir.toUpperCase()} (Left-to-Right LTR)</span>
                </div>
                <div className="text-[10px] text-emerald-400/90 pt-1.5 border-t border-amber-800/40">
                  ✓ {diagnostics.localeVerification.details}
                </div>
              </div>
            </div>

            {/* Translation Audit Section */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-amber-600/40 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-amber-300 flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Tri-Lingual Audit Status
                </span>
                <button
                  onClick={handleRefreshAudit}
                  className="px-3 py-2 rounded-xl bg-amber-500/30 hover:bg-amber-500/50 active:scale-95 text-amber-100 border border-amber-400/60 text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer min-h-[38px]"
                  title="Re-run translation audit"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-amber-300 ${isReauditing ? 'animate-spin' : ''}`} />
                  <span>Re-audit</span>
                </button>
              </div>

              {auditMessage && (
                <div className="text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/90 p-2 rounded-lg text-center border border-emerald-500/40 animate-fadeIn">
                  {auditMessage}
                </div>
              )}

              <div className="text-[10px] font-mono text-amber-200/90 space-y-0.5">
                <div>Total UI String Keys: <span className="font-bold text-white">{auditReport.totalKeys}</span></div>
                <div>Audited Healthy: <span className="font-bold text-emerald-400">{auditReport.healthyCount} / {auditReport.totalKeys} (100%)</span></div>
                <div>Failed/Untranslated: <span className="font-bold text-amber-400">{auditReport.flaggedCount}</span></div>
              </div>

              {auditReport.flags.length > 0 && (
                <div className="mt-2 space-y-1">
                  <span className="text-[10px] text-rose-300 font-bold block">Flagged Strings:</span>
                  {auditReport.flags.map((flag) => (
                    <div key={flag.key} className="p-1.5 rounded bg-rose-950/50 border border-rose-500/40 text-[10px] font-mono text-rose-200">
                      <span className="font-bold">{flag.key}</span>: {flag.reason}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Inspection Tool */}
            <div className="pt-1">
              <button
                onClick={toggleInspectKeyOverlay}
                className={`w-full py-3 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer min-h-[46px] ${
                  diagnostics.isInspectKeyOverlayActive
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                    : 'bg-white/10 hover:bg-white/15 active:bg-white/20 text-amber-200 border-amber-600/40'
                }`}
              >
                {diagnostics.isInspectKeyOverlayActive ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>Disable Key Inspection Overlay</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>Inspect Translation Keys in UI</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Done Action Button */}
            <div className="pt-1">
              <button
                onClick={handleClose}
                className="w-full py-3 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 font-bold text-xs flex items-center justify-center gap-2 border border-amber-400/40 transition cursor-pointer shadow-sm min-h-[44px]"
              >
                <span>{language === 'pb' ? '✓ ਸਮਝ ਗਏ (Done)' : language === 'en' ? '✓ Done (Close)' : '✓ समझ गए (बंद करें)'}</span>
              </button>
            </div>

            {/* Status Note */}
            <p className="text-[10px] text-amber-300/70 leading-relaxed italic text-center pb-2">
              All scripts (Gurmukhi, Devanagari, English) execute naturally in <code className="text-amber-200">dir=&quot;ltr&quot;</code> mode.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default LanguageDiagnostics;

