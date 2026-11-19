import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, Home, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  language?: Language;
  compact?: boolean;
  onRetry?: () => void;
  onGoHome?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('[Saheb World ErrorBoundary] Gracefully handled render issue:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onRetry?.();
  };

  private handleReload = async () => {
    this.setState({ hasError: false, error: null });
    try {
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter((k) => k.includes('workbox') || k.includes('sahebworld-app-shell'))
            .map((k) => caches.delete(k))
        );
      }
    } catch {}
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onGoHome) {
      this.props.onGoHome();
      return;
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sahebworld:emergency-reset'));
    }
  };

  public render() {
    if (this.state.hasError) {
      const lang = this.props.language || 'hi';
      const subtitle =
        this.props.fallbackTitle ||
        (lang === 'pb'
          ? 'ਪਾਵਨ ਸਤਿਸੰਗ ਅਤੇ ਸਵਾਧਿਆਏ ਪੰਨੇ ਨੂੰ ਮੁੜ ਚਾਲੂ ਕਰੋ'
          : lang === 'en'
          ? 'Gently restore this sacred reading module'
          : 'पावन सत्संग व स्वाध्याय अनुभाग को पुनः सक्रिय करें');

      const retryLabel = lang === 'pb' ? 'ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼' : lang === 'en' ? 'Retry' : 'पुनः प्रयास करें';
      const homeLabel = lang === 'pb' ? 'ਮੁੱਖ ਪੰਨਾ' : lang === 'en' ? 'Home' : 'मुख्य पृष्ठ';
      const reloadLabel = lang === 'pb' ? 'ਰੀਲੋਡ' : lang === 'en' ? 'Reload App' : 'रीलोड';

      return (
        <div
          className={`${
            this.props.compact
              ? 'min-h-[380px] py-10 px-4'
              : 'min-h-screen bg-[#FAF4E8] dark:bg-[#120A05] p-4'
          } text-[#382210] dark:text-[#E8D5B8] flex items-center justify-center`}
        >
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#1F150D] border-2 border-amber-500/30 shadow-2xl text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <span className="text-2xl font-serif font-black">🌹</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold font-serif text-[#8C2818] dark:text-amber-400">
                ।। सत्यनाम ।।
              </h2>
              <p className="text-xs opacity-75">{subtitle}</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-left font-serif leading-relaxed">
              चिंता मत कर साधु भाई, सतगुरु हैं रखवार।<br />
              नाम सुमिर मन थिर करो, सहज उतर भव पार॥
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={this.handleRetry}
                className="flex-1 min-w-[120px] py-2.5 px-4 rounded-xl bg-[#8C2818] hover:bg-[#a53a2a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer active:scale-95 z-10"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{retryLabel}</span>
              </button>
              <button
                type="button"
                onClick={this.handleGoHome}
                className="py-2.5 px-4 rounded-xl border border-amber-600/40 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition-all cursor-pointer active:scale-95 z-10"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{homeLabel}</span>
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="py-2.5 px-3 rounded-xl border border-stone-400/30 text-[11px] font-bold flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:bg-amber-500/10 transition-all cursor-pointer active:scale-95 z-10"
                title={reloadLabel}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{reloadLabel}</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
