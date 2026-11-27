import React from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, CheckCircle2, Flame, Award, Calendar, Share2 } from 'lucide-react';
import { Language } from '../types';
import { sacredHaptics } from '../services/haptics';
import { HaziriState } from '../services/haziriStore';
import { getAppUrlSync } from '../utils/url';

interface HaziriModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  haziriState: HaziriState;
  onTriggerFlowerShower: () => void;
  isTodayMarked?: boolean;
  onMarkNitnemHaziri?: () => void;
}

export const HaziriModal: React.FC<HaziriModalProps> = ({
  isOpen,
  onClose,
  language,
  haziriState,
  onTriggerFlowerShower,
  isTodayMarked = true,
  onMarkNitnemHaziri,
}) => {
  if (!isOpen) return null;

  const todayFormatted = new Date().toLocaleDateString(
    language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const handleShare = () => {
    sacredHaptics.lightTap();
    const shareText = language === 'pb'
      ? `🙏 ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ! ਅੱਜ ਦੀ ਸਾਧਨਾ ਹਾਜ਼ਰੀ ਦਰਜ ਹੋ ਗਈ ਹੈ।\n🔥 ਅਖੰਡ ਸ੍ਰੀਕ: ${haziriState.currentStreak} ਦਿਨ\n📅 ਤਾਰੀਖ: ${todayFormatted}\nਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਕੀ ਜੈ!`
      : language === 'en'
      ? `🙏 Saheb Bandagi Saheb! Today's Sadhana Check-in completed.\n🔥 Streak: ${haziriState.currentStreak} Days\n📅 Date: ${todayFormatted}\nGlory to Satguru Kabir Saheb!`
      : `🙏 साहेब बंदगी साहेब! आज की पावन साधना हाजिरी सफलतापूर्वक दर्ज हो गई है।\n🔥 अखंड स्ट्रीक: ${haziriState.currentStreak} दिन\n📅 दिनांक: ${todayFormatted}\nजय बन्दीछोड़ सतगुरु कबीर साहेब!`;

    if (navigator.share) {
      navigator.share({
        title: 'Daily Sadhana Haziri',
        text: shareText,
        url: getAppUrlSync(),
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(shareText);
    }
  };

  const modalContent = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 14px',
        zIndex: 100,
      }}
      className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          maxHeight: 'calc(100dvh - 104px)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        className="relative rounded-3xl shadow-2xl border-2 border-amber-500/60 bg-gradient-to-b from-amber-950 via-neutral-900 to-neutral-950 text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Pinned Header with Close button */}
        <div className="p-3 border-b border-amber-500/20 flex items-center justify-between shrink-0 relative bg-black/20">
          <span className="text-xs font-serif font-bold text-amber-300">
            {language === 'pb' ? 'ਨਿਤਨੇਮ ਹਾਜ਼िरी' : language === 'en' ? 'Daily Attendance' : 'नित्य साधना हाज़िरी'}
          </span>
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-amber-500/30 flex items-center justify-center text-amber-200 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Middle Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-2.5 sm:space-y-3">
          {/* Sacred Icon with Compact Top Spacing */}
          <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 p-0.5 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
              ✓
            </div>
          </div>

          {/* Title */}
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-serif block">
              ॥ साहेब बंदगी साहेब ॥
            </span>
            <h3 className="font-serif font-black text-lg sm:text-xl text-amber-100 leading-snug">
              {isTodayMarked
                ? (language === 'pb' ? 'ਅੱਜ ਦੀ ਸਾਧਨਾ ਹਾਜ਼ਰੀ ਦਰਜ ਹੋਈ!' : language === 'en' ? 'Today\'s Sadhana Check-in Verified!' : 'आज की साधना हाजिरी दर्ज हुई!')
                : (language === 'pb' ? 'ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਸੰਕਲਪ' : language === 'en' ? 'Daily Nitnem Haziri Sankalp' : 'नितनेम हाज़िरी संकल्प')}
            </h3>
            <p className="text-[11px] sm:text-xs text-amber-200/80 font-serif leading-snug">
              {isTodayMarked
                ? (language === 'pb'
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਨਿੱਤ ਨਿਯਮ ਸਵੀਕਾਰ ਹੋਇਆ।'
                  : language === 'en'
                  ? 'Your daily spiritual contemplation has been recorded in the presence of Satguru Kabir Saheb.'
                  : 'सतगुरु कबीर साहेब के पावन चरणों में आपका नित्य स्वाध्याय व सिमरन नियम स्वीकार हुआ।')
                : (language === 'pb'
                  ? 'ਅੱਜ ਦਾ ਪਾਠ ਪੂਰਾ ਕਰਕੇ ਆਪਣੀ ਪਵਿੱਤਰ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ।'
                  : language === 'en'
                  ? 'Record your daily Nitnem attendance in the lotus feet of Satguru Kabir Saheb.'
                  : 'नित्य पाठ संपन्न कर सतगुरु कबीर साहेब के पावन चरणों में अपनी आज की हाज़िरी दर्ज करें।')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-0.5">
              <div className="flex items-center justify-center gap-1 text-amber-400 text-[11px] font-serif font-bold">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>{language === 'pb' ? 'ਅਖੰਡ ਸ੍ਰੀਕ' : language === 'en' ? 'Streak' : 'अखंड स्ट्रीक'}</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-mono text-amber-200">
                {haziriState.currentStreak} <span className="text-[11px] font-serif">{language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Days' : 'दिन'}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-0.5">
              <div className="flex items-center justify-center gap-1 text-amber-400 text-[11px] font-serif font-bold">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'pb' ? 'ਕੁੱਲ ਹਾਜ਼ਰੀ' : language === 'en' ? 'Total Days' : 'कुल हाजिरी'}</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-mono text-amber-200">
                {haziriState.totalDays} <span className="text-[11px] font-serif">{language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Days' : 'दिन'}</span>
              </div>
            </div>
          </div>

          {/* Date Display */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-amber-300/90 font-serif bg-black/40 py-1.5 px-3 rounded-xl border border-amber-500/20">
            <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{todayFormatted}</span>
          </div>

          {/* Kabir Bani Blessing Quote */}
          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40 border border-amber-400/30 text-amber-100 font-serif italic text-[11px] sm:text-xs leading-snug">
            "नित प्रति नेम धर्म जो राखै। सोई साधू अमृत रस चाखै॥"
            <div className="text-[10px] text-amber-300 font-normal not-italic mt-0.5">
              — {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਗਰ' : language === 'en' ? 'Satguru Kabir Sagar' : 'सतगुरु कबीर सागर'}
            </div>
          </div>

        </div>

        {/* Pinned Footer Action Buttons */}
        <div className="p-4 border-t border-amber-500/20 bg-neutral-950/90 flex flex-col gap-2 shrink-0">
          {!isTodayMarked && onMarkNitnemHaziri && (
            <button
              type="button"
              onClick={() => {
                sacredHaptics.petalShower();
                onMarkNitnemHaziri();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-100 shrink-0" />
              <span>
                {language === 'pb'
                  ? 'ਅੱਜ ਦੀ ਨਿਤਨੇਮ ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ ✓'
                  : language === 'en'
                  ? 'Mark Today\'s Nitnem Haziri ✓'
                  : 'आज की हाज़िरी दर्ज करें (Mark Attendance) ✓'}
              </span>
            </button>
          )}
          <div className="flex flex-row gap-2">
            <button
              type="button"
              onClick={() => {
                sacredHaptics.petalShower();
                onTriggerFlowerShower();
              }}
              className="flex-1 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow shrink-0" />
              <span>{language === 'pb' ? 'ਫੁੱਲ ਵਰਖਾ ਕਰੋ' : language === 'en' ? 'Flower Shower' : 'पुष्प वर्षा करें'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-400/40 text-amber-200 font-serif font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0"
            >
              <Share2 className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share' : 'साझा करें'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};
