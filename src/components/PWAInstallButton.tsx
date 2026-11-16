import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';

interface PWAInstallButtonProps {
  language?: Language;
  className?: string;
  onFallbackOpenModal?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  language = 'hi',
  className = '',
  onFallbackOpenModal,
}) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Automatically suppress install trigger when running in standalone mode
  if (isInstalled) {
    return null;
  }

  const label =
    language === 'pb'
      ? isInstallable
        ? 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ (1-ਟੈਪ)'
        : 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ'
      : language === 'en'
      ? isInstallable
        ? 'Install App (With Icon)'
        : 'Install App'
      : isInstallable
      ? 'ऐप इनस्टॉल करें (App Icon)'
      : 'ऐप इनस्टॉल करें';

  const handleClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (accepted) return;
    }
    if (isIOS && !isAndroid) {
      setShowIOSGuide(true);
      return;
    }
    if (onFallbackOpenModal) {
      onFallbackOpenModal();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sahebworld:open-install-modal'));
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`min-h-[44px] px-3.5 py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-serif font-bold whitespace-nowrap shrink-0 transition cursor-pointer ${
          className ||
          'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
        }`}
      >
        {isIOS && !isAndroid ? (
          <Smartphone className="w-4 h-4 shrink-0" />
        ) : (
          <Download className="w-4 h-4 shrink-0" />
        )}
        <span>{label}</span>
      </button>

      {showIOSGuide && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#FFFDF9] dark:bg-zinc-900 border-2 border-amber-500/40 p-5 shadow-2xl space-y-3 text-left">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-black font-serif text-amber-950 dark:text-amber-100">
                {language === 'pb'
                  ? 'iPhone / iPad ਤੇ ਇੰਸਟਾਲ ਕਰੋ'
                  : language === 'en'
                  ? 'Install on iPhone / iPad'
                  : 'iPhone / iPad पर ऐप इनस्टॉल करें'}
              </h3>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
                aria-label="Close iOS Install Guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm font-serif text-gray-700 dark:text-gray-300">
              <li>
                {language === 'pb'
                  ? 'Safari ਵਿੱਚ ਹੇਠਾਂ Share ਬਟਨ ਤੇ ਟੈਪ ਕਰੋ।'
                  : language === 'en'
                  ? 'Tap the Share button in Safari toolbar.'
                  : 'Safari टूलबार में नीचे दिए गए Share बटन पर टैप करें।'}
              </li>
              <li>
                {language === 'pb'
                  ? '"Add to Home Screen" ਚੁਣੋ ਅਤੇ Add ਤੇ ਟੈਪ ਕਰੋ।'
                  : language === 'en'
                  ? 'Scroll down and tap "Add to Home Screen".'
                  : 'नीचे स्क्रॉल करके "Add to Home Screen" चुनें और जोड़ें।'}
              </li>
            </ol>
            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="w-full min-h-[44px] rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-serif font-bold transition cursor-pointer"
            >
              {language === 'pb' ? 'ਠੀਕ ਹੈ' : language === 'en' ? 'Got It' : 'ठीक है'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
