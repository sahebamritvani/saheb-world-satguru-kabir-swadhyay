import React, { useState, useEffect, useMemo } from 'react';
import { HardDrive, Trash2, ShieldAlert, Check, RefreshCw, Layers, Database, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface StorageCapacityReportProps {
  language: Language;
  onRefreshStats?: () => void;
}

export const StorageCapacityReport: React.FC<StorageCapacityReportProps> = ({
  language,
  onRefreshStats,
}) => {
  const { theme } = useAppTheme();
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [resetCategory, setResetCategory] = useState<'diary' | 'progress' | 'all' | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [statsTrigger, setStatsTrigger] = useState<number>(0);

  const isHi = language === 'hi';
  const isPb = language === 'pb';

  // Dynamic Browser Storage Size Calculation (grouped by category)
  const storageDetails = useMemo(() => {
    if (typeof window === 'undefined') return { diary: 0, goals: 0, progress: 0, prefs: 0, total: 0 };
    
    let diaryBytes = 0;
    let goalsBytes = 0;
    let progressBytes = 0;
    let prefsBytes = 0;

    try {
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          const val = localStorage[key] || '';
          const keyLen = key.length + val.length;

          if (key === 'sahebworld_diary_entries' || key.includes('sahebworld_diary')) {
            diaryBytes += keyLen;
          } else if (
            key.includes('streak') || 
            key.includes('target') || 
            key.includes('goal') || 
            key === 'sahebworld_daily_sadhana_state'
          ) {
            goalsBytes += keyLen;
          } else if (
            key.includes('step_sakhi') || 
            key.includes('max_unlocked') || 
            key.includes('last_sakhi') || 
            key.includes('progress') ||
            key === 'sahebworld_current_reading_text' ||
            key === 'sahebworld_current_reading_title' ||
            key.includes('bookmarks')
          ) {
            progressBytes += keyLen;
          } else if (key.startsWith('sahebworld_')) {
            prefsBytes += keyLen;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    const dKB = parseFloat((diaryBytes / 1024).toFixed(2));
    const gKB = parseFloat((goalsBytes / 1024).toFixed(2));
    const pKB = parseFloat((progressBytes / 1024).toFixed(2));
    const prKB = parseFloat((prefsBytes / 1024).toFixed(2));
    const tKB = parseFloat((dKB + gKB + pKB + prKB).toFixed(2));

    return {
      diary: Math.max(dKB, 0),
      goals: Math.max(gKB, 0),
      progress: Math.max(pKB, 0),
      prefs: Math.max(prKB, 0),
      total: Math.max(tKB, 0.5),
    };
  }, [statsTrigger]);

  const totalLimitKB = 5120; // 5MB standard LocalStorage limit
  const totalPercentUsed = parseFloat(((storageDetails.total / totalLimitKB) * 100).toFixed(4));

  const handleClearCache = (category: 'diary' | 'progress' | 'all') => {
    sacredHaptics.successVibration();
    try {
      if (category === 'diary') {
        localStorage.removeItem('sahebworld_diary_entries');
        setSuccessNotice(isHi ? 'साधना जर्नल प्रविष्टियां सफलतापूर्वक हटा दी गईं!' : isPb ? 'ਜਰਨਲ ਨੋਟ ਸਫਲਤਾਪੂਰਵਕ ਹਟਾਏ ਗਏ!' : 'Spiritual Diary entries cleared successfully!');
      } else if (category === 'progress') {
        // Clear progress keys
        const keysToRemove: string[] = [];
        for (const key in localStorage) {
          if (
            key.includes('step_sakhi') || 
            key.includes('max_unlocked') || 
            key.includes('last_sakhi') || 
            key.includes('progress') ||
            key === 'sahebworld_current_reading_text' ||
            key === 'sahebworld_current_reading_title'
          ) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        setSuccessNotice(isHi ? 'पठन प्रगति व स्वाध्याय इतिहास रीसेट कर दिया गया!' : isPb ? 'ਪਠਨ ਪ੍ਰਗਤੀ ਤੇ ਇਤਿਹਾਸ ਰੀਸੈਟ ਹੋ ਗਿਆ!' : 'Reading progress cache cleared!');
      } else if (category === 'all') {
        // Clear all SahebWorld keys
        const keysToRemove: string[] = [];
        for (const key in localStorage) {
          if (key.startsWith('sahebworld_')) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        setSuccessNotice(isHi ? 'सभी स्थानिक डेटा (All Cache & Data) सफलतापूर्वक साफ़ किया गया!' : isPb ? 'ਸਾਰਾ ਸਥਾਨਕ ਡੇਟਾ ਸਫਲਤਾਪੂਰਵਕ ਸਾਫ਼ ਹੋ ਗਿਆ!' : 'All local app data cleared successfully!');
      }

      setStatsTrigger(prev => prev + 1);
      if (onRefreshStats) onRefreshStats();
      setTimeout(() => setSuccessNotice(null), 3500);
    } catch (e) {
      console.error(e);
    }
    setShowConfirmModal(false);
    setResetCategory(null);
  };

  const triggerConfirmModal = (category: 'diary' | 'progress' | 'all') => {
    sacredHaptics.lightTap();
    setResetCategory(category);
    setShowConfirmModal(true);
  };

  return (
    <div className="space-y-5">
      {/* Category Breakdown Table */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-4 sm:p-5 rounded-2xl border shadow-2xs space-y-4"
      >
        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5" style={{ color: theme.sacredMaroon }}>
          <Layers className="w-4 h-4 text-amber-600" />
          <span>{isHi ? 'भंडारण श्रेणी विवरण' : isPb ? 'ਭੰਡਾਰਨ ਸ਼੍ਰੇਣੀ ਵੇਰਵਾ' : 'Storage Category Breakdown'}</span>
        </h4>

        {successNotice && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs font-bold font-serif text-center flex items-center justify-center gap-1.5 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{successNotice}</span>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr style={{ borderColor: theme.cardBorder }} className="border-b text-[10px] uppercase opacity-60 tracking-wider">
                <th className="py-2.5 font-bold">{isHi ? 'श्रेणी' : isPb ? 'ਸ਼੍ਰੇਣੀ' : 'Category'}</th>
                <th className="py-2.5 font-bold text-center">{isHi ? 'वर्णन' : isPb ? 'ਵੇਰਵਾ' : 'Scope'}</th>
                <th className="py-2.5 font-bold text-right">{isHi ? 'आकार' : isPb ? 'ਆਕਾਰ' : 'Size'}</th>
                <th className="py-2.5 font-bold text-right">{isHi ? 'प्रबंध' : isPb ? 'ਪ੍ਰਬੰਧ' : 'Manage'}</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: theme.cardBorder }}>
              {/* Category 1: Diary */}
              <tr>
                <td className="py-3 font-serif font-black" style={{ color: theme.textPrimary }}>
                  📝 {isHi ? 'साधना जर्नल' : isPb ? 'ਸਾਧਨਾ ਜਰਨਲ' : 'Diary Entries'}
                </td>
                <td className="py-3 text-stone-500 dark:text-stone-400">
                  {isHi ? 'व्यक्तिगत विचार, संकल्प व टिप्पणियां' : isPb ? 'ਨਿੱਜੀ ਵਿਚਾਰ, ਸੰਕਲਪ ਅਤੇ ਟਿੱਪਣੀਆਂ' : 'My Reflections & Daily logs'}
                </td>
                <td className="py-3 text-right font-mono font-bold" style={{ color: theme.sacredMaroon }}>
                  {storageDetails.diary} KB
                </td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => triggerConfirmModal('diary')}
                    className="px-2.5 py-1 text-[11px] font-bold text-red-600 bg-red-500/5 hover:bg-red-500/15 border border-red-200 dark:border-red-900/30 rounded-lg cursor-pointer transition"
                  >
                    {isHi ? 'साफ़ करें' : isPb ? 'ਸਾਫ਼ ਕਰੋ' : 'Clear'}
                  </button>
                </td>
              </tr>

              {/* Category 2: Progress */}
              <tr>
                <td className="py-3 font-serif font-black" style={{ color: theme.textPrimary }}>
                  📖 {isHi ? 'स्वाध्याय प्रगति' : isPb ? 'ਪਠਨ ਪ੍ਰਗਤੀ' : 'Progress Cache'}
                </td>
                <td className="py-3 text-stone-500 dark:text-stone-400">
                  {isHi ? 'अनलॉक सोपान, अंतिम साखी व बुकमार्क' : isPb ? 'ਅਨਲੌਕ ਪੜਾਅ, ਅੰਤਿਮ ਸਾਖੀ ਅਤੇ ਬੁੱਕਮਾਰਕ' : 'Step unlocking & Reading index'}
                </td>
                <td className="py-3 text-right font-mono font-bold" style={{ color: theme.sacredMaroon }}>
                  {storageDetails.progress} KB
                </td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => triggerConfirmModal('progress')}
                    className="px-2.5 py-1 text-[11px] font-bold text-red-600 bg-red-500/5 hover:bg-red-500/15 border border-red-200 dark:border-red-900/30 rounded-lg cursor-pointer transition"
                  >
                    {isHi ? 'रीसेट करें' : isPb ? 'ਰੀਸੈੱਟ ਕਰੋ' : 'Reset'}
                  </button>
                </td>
              </tr>

              {/* Category 3: Goals */}
              <tr>
                <td className="py-3 font-serif font-black" style={{ color: theme.textPrimary }}>
                  🎯 {isHi ? 'साधना लक्ष्य' : isPb ? 'ਸਾਧਨਾ ਟੀਚੇ' : 'Sadhana Goals'}
                </td>
                <td className="py-3 text-stone-500 dark:text-stone-400">
                  {isHi ? 'अखंड प्रवाह, माला जाप व ध्यान सत्र' : isPb ? 'ਅਖੰਡ ਪ੍ਰਵਾਹ, ਮਾਲਾ ਜਾਪ ਅਤੇ ਧਿਆਨ ਸੈਸ਼ਨ' : 'Daily meditation & Simran logs'}
                </td>
                <td className="py-3 text-right font-mono font-bold" style={{ color: theme.sacredMaroon }}>
                  {storageDetails.goals} KB
                </td>
                <td className="py-3 text-right text-stone-400 italic text-[11px] font-serif">
                  {isHi ? 'सिंक सुरक्षित' : isPb ? 'ਸਿੰਕ ਸੁਰੱਖਿਅਤ' : 'Synced'}
                </td>
              </tr>

              {/* Category 4: Prefs */}
              <tr>
                <td className="py-3 font-serif font-black" style={{ color: theme.textPrimary }}>
                  ⚙️ {isHi ? 'ऐप प्राथमिकताएं' : isPb ? 'ਮੋਡ ਤੇ ਸੈਟਿੰਗ' : 'Preferences'}
                </td>
                <td className="py-3 text-stone-500 dark:text-stone-400">
                  {isHi ? 'पाठ आकार, थीम मोड, भाषा' : isPb ? 'ਪਾਠ ਆਕਾਰ, ਥੀਮ ਮੋਡ ਅਤੇ ਭਾਸ਼ਾ' : 'Font size, sound & reading layout'}
                </td>
                <td className="py-3 text-right font-mono font-bold" style={{ color: theme.sacredMaroon }}>
                  {storageDetails.prefs} KB
                </td>
                <td className="py-3 text-right text-stone-400 italic text-[11px] font-serif">
                  {isHi ? 'सुरक्षित' : isPb ? 'ਸੁਰੱਖਿਅਤ' : 'Protected'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Global Reset Controls */}
        <div className="pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: theme.cardBorder }}>
          <div className="flex items-center gap-1.5 opacity-70">
            <RefreshCw className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{isHi ? 'डेटा प्रबंधन स्वायत्तता रिपोर्ट' : isPb ? 'ਸਥਾਨਕ ਡੇਟਾ ਪ੍ਰਬੰਧਨ ਰਿਪੋਰਟ' : 'Autonomous local data engine'}</span>
          </div>

          <button
            onClick={() => triggerConfirmModal('all')}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isHi ? 'संपूर्ण ऐप डेटा साफ़ करें' : isPb ? 'ਸਾਰਾ ਐਪ ਡੇਟਾ ਸਾਫ਼ ਕਰੋ' : 'Clear App Cache & All Data'}</span>
          </button>
        </div>
      </div>

      {/* Confirmation Double Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            className="relative w-full max-w-sm rounded-2xl border-2 p-5 space-y-4 shadow-2xl animate-scaleUp text-center"
          >
            <div className="w-12 h-10 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20 flex items-center justify-center mx-auto mb-1">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif font-black text-sm uppercase text-red-600">
                {isHi ? '⚠️ अंतिम चेतावनी' : isPb ? '⚠️ ਅੰਤਿਮ ਚੇਤਾਵਨੀ' : '⚠️ Master Reset Confirmation'}
              </h4>
              <p style={{ color: theme.textPrimary }} className="text-xs font-serif leading-relaxed">
                {resetCategory === 'diary' ? (
                  isHi
                    ? 'क्या आप सचमुच अपने सभी साधना जर्नल डायरी के पावन विचारों को हटाना चाहते हैं? यह प्रक्रिया अपरिवर्तनीय है!'
                    : isPb
                    ? 'ਕੀ ਤੁਸੀਂ ਸੱਚਮੁੱਚ ਆਪਣੀ ਸਾਧਨਾ ਡਾਇਰੀ ਦੇ ਸਾਰੇ ਨੋਟ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਲਏ ਜਾ ਸਕਦੇ।'
                    : 'Do you really want to permanently delete all your spiritual diary and reflection notes? This cannot be undone.'
                ) : resetCategory === 'progress' ? (
                  isHi
                    ? 'क्या आप अपने सभी सोपानों की प्रगति और स्वाध्याय पठन इतिहास को रीसेट करना चाहते हैं?'
                    : isPb
                    ? 'ਕੀ ਤੁਸੀਂ ਆਪਣੇ ਸਾਰੇ ਪੜਾਵਾਂ ਦੀ ਪ੍ਰਗਤੀ ਅਤੇ ਸਵਾਧਿਆਏ ਇਤਿਹਾਸ ਨੂੰ ਰੀਸੈੱਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?'
                    : 'Do you really want to reset all step unlocks and study history back to default step 1?'
                ) : (
                  isHi
                    ? 'क्या आप सचमुच पूरे साहेबवर्ल्ड ऐप के डेटा और स्थानीय फ़ाइलों को मिटाना चाहते हैं? आपकी प्रगति और डायरी दोनों स्थायी रूप से डिलीट हो जाएंगे।'
                    : isPb
                    ? 'ਕੀ ਤੁਸੀਂ ਸੱਚਮੁੱਚ ਸਾਹੇਬਵਰਲਡ ਐਪ ਦਾ ਸਾਰਾ ਸਥਾਨਕ ਡੇਟਾ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ ਤੇ ਡਾਇਰੀ ਦੋਵੇਂ ਹਮੇਸ਼ਾ ਲਈ ਮਿਟ ਜਾਣਗੀਆਂ।'
                    : 'This will perform a full factory reset of SahebWorld, clearing all progress, custom themes, goals, and spiritual diary logs. Are you absolutely certain?'
                )}
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  sacredHaptics.lightTap();
                  setShowConfirmModal(false);
                  setResetCategory(null);
                }}
                style={{ backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }}
                className="flex-1 py-2 rounded-xl border text-xs font-bold hover:bg-black/5 active:scale-95 transition cursor-pointer"
              >
                {isHi ? 'नहीं, वापस जाएं' : isPb ? 'ਨਹੀਂ, ਵਾਪਸ ਜਾਓ' : 'Cancel'}
              </button>

              <button
                onClick={() => handleClearCache(resetCategory || 'all')}
                className="flex-1 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 transition cursor-pointer"
              >
                {isHi ? 'हाँ, नष्ट करें' : isPb ? 'ਹਾਂ, ਮਿਟਾਓ' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
