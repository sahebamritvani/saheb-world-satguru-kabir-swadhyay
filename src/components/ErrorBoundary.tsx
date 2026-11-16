import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
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

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF4E8] dark:bg-[#120A05] text-[#382210] dark:text-[#E8D5B8] flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#1F150D] border-2 border-amber-500/30 shadow-2xl text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <span className="text-2xl font-serif font-black">🌹</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold font-serif text-[#8C2818] dark:text-amber-400">
                ।। सत्यनाम ।।
              </h2>
              <p className="text-xs opacity-75">
                पावन सत्संग व स्वाध्याय पृष्ठ को पुनः सक्रिय करें
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-left font-serif leading-relaxed">
              चिंता मत कर साधु भाई, सतगुरु हैं रखवार।<br/>
              नाम सुमिर मन थिर करो, सहज उतर भव पार॥
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-[#8C2818] hover:bg-[#a53a2a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer active:scale-95 z-10"
              >
                <RotateCcw className="w-4 h-4" />
                <span>पुनः लोड करें (Reload)</span>
              </button>
              <button
                type="button"
                onClick={this.handleGoHome}
                className="py-3 px-4 rounded-xl border border-amber-600/40 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition-all cursor-pointer active:scale-95 z-10"
              >
                <Home className="w-4 h-4" />
                <span>मुख्य पृष्ठ</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
