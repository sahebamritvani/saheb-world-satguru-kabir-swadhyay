import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAppTheme } from '../theme/ThemeContext';
import { ArrowLeft, Sparkles, Check, Languages, HelpCircle } from 'lucide-react';

interface RtlTestViewProps {
  onClose: () => void;
}

export const RtlTestView: React.FC<RtlTestViewProps> = ({ onClose }) => {
  const { language } = useLanguage();
  const { theme } = useAppTheme();
  const [testAlign, setTestAlign] = useState<'rtl' | 'ltr'>('rtl');

  const gurmukhiSamples = [
    {
      gurmukhi: 'ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥ ਜਪੁ ਜੀ ਸਾਹਿਬ ॥',
      english: 'One Universal Creator God. By The Grace Of The True Guru. Japji Sahib.',
    },
    {
      gurmukhi: 'ਕਬੀਰ ਕੋਠੇ ਮੰਡਪ ਹੇਤੁ ਕਰਿ ਕਾਹੇ ਮਰਹੁ ਸਵਾਰਿ ॥',
      english: 'Kabeer, why do you waste your life building and decorating palaces?',
    },
    {
      gurmukhi: 'ਕਾਰਜੁ ਸਾਢੇ ਤੀਨਿ ਹਥ ਘਨੀ ਤ ਪਉਨੇ ਚਾਰਿ ॥੨੧੮॥',
      english: 'In the end, your only need is three and a half cubits of land, or at most three and three quarters. ||218||',
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full pb-24 p-4 sm:p-6 animate-fadeIn">
      {/* Header */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
          color: '#FFFFFF',
        }}
        className="rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-indigo-500/25 border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-200">
              <span>🔧 DEV-ONLY DIAGNOSTIC MODE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-wide">
              Tri-Lingual RTL/LTR Alignment Tester
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 font-sans max-w-xl">
              This sandbox allows verifying layout flow directionalities, logical properties, and text align mappings on Gurmukhi (RTL) vs Latin (LTR) texts.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 active:scale-95 transition rounded-2xl text-xs font-black flex items-center gap-1.5 self-start cursor-pointer border border-white/15"
          >
            <ArrowLeft size={14} />
            <span>Return to Daily Dashboard</span>
          </button>
        </div>
      </div>

      {/* Control Panel */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="rounded-2xl border p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs"
      >
        <div className="space-y-1">
          <h2 className="text-sm font-bold font-serif" style={{ color: theme.sacredMaroon }}>
            Directionality Override Controller
          </h2>
          <p className="text-xs opacity-75" style={{ color: theme.textSecondary }}>
            Instantly swap simulated alignment rules below to verify flow.
          </p>
        </div>

        <div className="flex bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/10">
          {[
            { id: 'rtl', label: 'Simulate RTL' },
            { id: 'ltr', label: 'Simulate LTR' }
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setTestAlign(opt.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                testAlign === opt.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Test Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LTR Interface with Mixed Inline Gurmukhi and English */}
        <div 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="rounded-3xl border p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="border-b pb-3 border-amber-500/10 flex items-center gap-2">
            <span className="text-lg">🔤</span>
            <h3 className="font-serif font-black text-sm" style={{ color: theme.sacredMaroon }}>
              Standard LTR UI Container (Mixed Paragraphs)
            </h3>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textSecondary }}>
            In a left-to-right English-based interface, individual lines of Gurmukhi script should still flow beautifully. Below is a paragraph block that combines both scripts in a single sentence:
          </p>

          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/10 space-y-3">
            <p className="text-xs leading-relaxed" style={{ color: theme.textPrimary }}>
              The Guru Granth Sahib begins with the holy Mool Mantar <span className="font-bold font-serif text-amber-700 dark:text-amber-300" style={{ direction: 'rtl', unicodeBidi: 'embed' }}>ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ</span> which declares the absolute oneness of the divine, followed by <span className="font-bold font-serif text-amber-700 dark:text-amber-300" style={{ direction: 'rtl', unicodeBidi: 'embed' }}>ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥</span>.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 block tracking-wider">
              Verification Checklist:
            </span>
            <ul className="text-xs space-y-1.5 list-disc pl-4" style={{ color: theme.textSecondary }}>
              <li>Gurmukhi ligatures render correctly within Latin prose.</li>
              <li>Punctuation characters at sentence boundaries do not invert awkwardly.</li>
              <li>Layout does not break if user resizes the screen or viewport.</li>
            </ul>
          </div>
        </div>

        {/* RTL Punjabi Interface with Mixed Inline Gurmukhi and English */}
        <div 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="rounded-3xl border p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="border-b pb-3 border-amber-500/10 flex items-center gap-2">
            <span className="text-lg">☬</span>
            <h3 className="font-serif font-black text-sm" style={{ color: theme.sacredMaroon }}>
              Simulated Punjabi/Gurmukhi RTL Container
            </h3>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textSecondary }}>
            Under simulated Punjabi/Gurmukhi RTL alignment, the text flows from right-to-left while keeping embedded English terms legible from left-to-right:
          </p>

          <div 
            style={{ direction: testAlign, textAlign: testAlign === 'rtl' ? 'right' : 'left' }}
            className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border-2 border-dashed border-amber-500/35 space-y-3"
          >
            <p className="font-serif font-bold text-sm sm:text-base leading-relaxed text-amber-950 dark:text-amber-100">
              ਪਵਿੱਤਰ ਬਾਣੀ ਦਾ ਅਨੁਵਾਦ <span className="font-sans text-xs bg-amber-500/10 px-2 py-0.5 rounded text-amber-800 dark:text-amber-200" style={{ direction: 'ltr', display: 'inline-block' }}>English Translation</span> ਵਿੱਚ ਪੜ੍ਹੋ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਉਪਦੇਸ਼ਾਂ ਨੂੰ ਅਪਣਾਓ।
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 block tracking-wider">
              RTL Verification Rules:
            </span>
            <ul className="text-xs space-y-1.5 list-disc pl-4" style={{ color: theme.textSecondary }}>
              <li>The primary text starts on the right margin.</li>
              <li>The English inline box reads left-to-right correctly inside the RTL text flow.</li>
              <li>Horizontal padding is automatically mirrored via CSS logical rules.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Multilingual Block Flow Testing Section */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="rounded-3xl border p-5 sm:p-8 shadow-sm space-y-6"
      >
        <div className="border-b pb-3 border-amber-500/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif font-black text-base" style={{ color: theme.sacredMaroon }}>
              Multilingual Block Verification Matrix (Samples)
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-800 border border-amber-500/20">
            {testAlign.toUpperCase()} Flow Mode
          </span>
        </div>

        <div className="space-y-4">
          {gurmukhiSamples.map((sample, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-amber-500/5 items-center"
            >
              {/* Gurmukhi Block Container with simulated directionality */}
              <div 
                style={{ direction: testAlign, textAlign: testAlign === 'rtl' ? 'right' : 'left' }}
                className="space-y-1.5"
              >
                <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400 block tracking-wider">
                  ☬ ਗੁਰਮੁਖੀ ਮੂਲ (Sample #{idx + 1}):
                </span>
                <p className="font-serif font-black text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  {sample.gurmukhi}
                </p>
              </div>

              {/* English Translation Container (Always LTR) */}
              <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-amber-500/10 pt-3 md:pt-0 md:pl-4 text-left">
                <span className="text-[10px] uppercase font-bold text-indigo-700 dark:text-indigo-400 block tracking-wider">
                  🔤 English Translation (LTR Fixed):
                </span>
                <p className="text-xs sm:text-sm font-sans font-medium text-gray-700 dark:text-gray-300 italic">
                  {sample.english}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
