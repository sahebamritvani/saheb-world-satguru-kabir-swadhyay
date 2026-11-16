import React, { useState } from 'react';
import { X, Volume2, Play, Square, VolumeX, Sliders, Type, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose, language }) => {
  const { fontSize, setFontSize, globalWallpaper, setGlobalWallpaper } = useAppTheme();
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [fontSizeScale, setFontSizeScale] = useState<number>(100);

  if (!isOpen) return null;

  const sampleText = language === 'pb' 
    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਅੰਮ੍ਰਿਤ ਬਾਣੀ - ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ।' 
    : language === 'en' 
    ? 'Satguru Kabir Saheb divine grace and inner remembrance of Satyanaam.' 
    : 'सतगुरु कबीर साहेब की अमृतवाणी - सत्यनाम का पावन सुमिरन।';

  const handleTestSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(sampleText);
    utterance.rate = speechRate;
    utterance.lang = language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-amber-50 dark:bg-zinc-900 border-2 border-amber-500/30 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header - Fixed at top of modal */}
        <div className="flex justify-between items-center border-b border-amber-500/20 p-5 shrink-0">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <h3 className="text-lg font-bold font-serif text-amber-900 dark:text-amber-100">
              {language === 'pb' ? 'ਸੁਗਮਤਾ ਅਤੇ ਵਾਚਨ ਸੈਟਿੰਗਾਂ' : language === 'en' ? 'Accessibility & Speech Vani' : 'सुगमता एवं वाणी सेटिंग्स'}
            </h3>
          </div>
          <button onClick={() => { handleStopSpeech(); onClose(); }} className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition cursor-pointer">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="p-6 space-y-5 overflow-y-auto custom-scrollbar">

        {/* Speech / Vani Section */}
        <div className="space-y-3 bg-white/70 dark:bg-zinc-800/70 p-4 rounded-2xl border border-amber-500/20 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold font-serif text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-amber-600" />
              {language === 'pb' ? 'ਵਾਣੀ ਉਚਾਰਣ ਗਤੀ (Speech Rate)' : language === 'en' ? 'Speech Rate Control' : 'वाणी वाचन गति (Speech Rate)'}
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200">
              {speechRate}x
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[0.75, 1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setSpeechRate(rate)}
                className={`py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                  speechRate === rate 
                    ? 'bg-amber-700 text-white border-amber-800 shadow-sm' 
                    : 'bg-white dark:bg-zinc-700 text-amber-900 dark:text-amber-100 border-amber-300 hover:bg-amber-50'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleTestSpeech}
              className="flex-1 py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              {isSpeaking ? <Square className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4" />}
              <span>{isSpeaking ? (language === 'pb' ? 'ਵਾਣੀ ਰੋਕੋ' : 'Stop Speech') : (language === 'pb' ? 'वाणी परीक्षण (Test Vani)' : language === 'en' ? 'Test Speech Vani' : 'वाणी परीक्षण सुनें')}</span>
            </button>
            {isSpeaking && (
              <button
                type="button"
                onClick={handleStopSpeech}
                className="py-2 px-3 rounded-xl bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition cursor-pointer"
              >
                <VolumeX className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਬੰਦ' : 'Stop'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Readability & Font Scale Section */}
        <div className="space-y-3 bg-white/70 dark:bg-zinc-800/70 p-4 rounded-2xl border border-amber-500/20 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold font-serif text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-amber-600" />
              {language === 'pb' ? 'ਅੱਖਰ ਆਕਾਰ (Font Size):' : language === 'en' ? 'Font Size:' : 'अक्षर आकार (Font Size):'}
            </span>
            <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-600 text-white">
              {fontSize === 'small' && 'A-'}
              {fontSize === 'normal' && 'A'}
              {fontSize === 'medium' && 'A+'}
              {fontSize === 'large' && 'A++'}
              {fontSize === 'xlarge' && 'A+++'}
              {fontSize === 'xl' && 'A++++'}
              {fontSize === 'elderly' && '👵 A+++++ (Elderly Mode)'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'small', label: 'A-' },
              { id: 'normal', label: 'A' },
              { id: 'medium', label: 'A+' },
              { id: 'large', label: 'A++' },
              { id: 'xlarge', label: 'A+++' },
              { id: 'xl', label: '7XL' },
              { id: 'elderly', label: '👵 Elderly' },
            ].map((fObj) => (
              <button
                key={fObj.id}
                type="button"
                onClick={() => setFontSize(fObj.id as any)}
                className={`py-2 px-2 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                  fontSize === fObj.id
                    ? 'bg-amber-700 text-white border-amber-800 shadow-sm'
                    : 'bg-white dark:bg-zinc-700 text-amber-900 dark:text-amber-100 border-amber-300 hover:bg-amber-50'
                }`}
              >
                {fObj.label}
              </button>
            ))}
          </div>
        </div>

        {/* Nature Wallpaper Global Toggle */}
        <div className="bg-emerald-500/10 dark:bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold font-serif text-emerald-900 dark:text-emerald-200">
                {language === 'pb' ? 'ਕੁਦਰਤੀ ਥੀਮ (Nature Theme)' : language === 'en' ? 'Global Nature Theme' : 'कुदरती थीम (Global Nature)'}
              </span>
            </div>
            <button
              onClick={() => setGlobalWallpaper(globalWallpaper ? null : 'banyan_ghat')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                globalWallpaper ? 'bg-emerald-600' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  globalWallpaper ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-[10px] text-emerald-800/70 dark:text-emerald-200/50 leading-tight">
            {language === 'pb' 
              ? 'ਇਸ ਨੂੰ ਚਾਲੂ ਕਰਨ ਨਾਲ ਪੂਰੇ ਐਪ ਵਿੱਚ ਕੁਦਰਤੀ ਬੈਕਗ੍ਰਾਊਂਡ ਲਾਗੂ ਹੋ ਜਾਵੇਗਾ।' 
              : language === 'en' 
              ? 'Enabling this applies a scenic nature backdrop across the entire application.' 
              : 'इसे चालू करने पर पूरे ऐप में कुदरती बैकग्राउंड लागू हो जाएगा।'}
          </p>
        </div>

        </div>

        <div className="flex justify-end p-6 border-t border-amber-500/10 shrink-0">
          <button 
            type="button"
            onClick={() => { handleStopSpeech(); onClose(); }} 
            className="w-full py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-2xl font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{language === 'pb' ? 'ਸੈਟਿੰਗਜ਼ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save & Close' : 'सेटिंग्स सहेजें एवं बंद करें'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

