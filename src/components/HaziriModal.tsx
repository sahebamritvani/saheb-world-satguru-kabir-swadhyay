import React from 'react';
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
}

export const HaziriModal: React.FC<HaziriModalProps> = ({
  isOpen,
  onClose,
  language,
  haziriState,
  onTriggerFlowerShower,
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
      ? `🙏 ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ! ਅੱਜ ਦੀ ਸਾਧਨਾ ਹਾਜ਼ਰੀ ਦਰਜ ਹੋ ਗਈ ਹੈ।\n🔥 ਅਖੰਡ ਸ੍ਰੀਕ: ${haziriState.currentStreak} ਦਿਨ\n📅 ਤਾਰੀਖ: ${todayFormatted}\nਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਕੀ ਜੈ!`
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

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-gradient-to-b from-amber-950 via-neutral-900 to-neutral-950 text-white p-5 sm:p-7 space-y-5 text-center">
        {/* Close button */}
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onClose();
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-amber-500/30 flex items-center justify-center text-amber-200 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sacred Icon with Animated Glow */}
        <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 p-1 shadow-2xl flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-amber-400 animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
            ✓
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 font-serif">
            ॥ साहेब बंदगी साहेब ॥
          </span>
          <h3 className="font-serif font-black text-xl sm:text-2xl text-amber-100">
            {language === 'pb' ? 'ਅੱਜ ਦੀ ਸਾਧਨਾ ਹਾਜ਼ਰੀ ਦਰਜ ਹੋਈ!' : language === 'en' ? 'Today\'s Sadhana Check-in Verified!' : 'आज की साधना हाजिरी दर्ज हुई!'}
          </h3>
          <p className="text-xs text-amber-200/80 font-serif">
            {language === 'pb' 
              ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਨਿੱਤ ਨਿਯਮ ਸਵੀਕਾਰ ਹੋਇਆ।' 
              : language === 'en' 
              ? 'Your daily spiritual contemplation has been recorded in the presence of Satguru Kabir Saheb.' 
              : 'सतगुरु कबीर साहेब के पावन चरणों में आपका नित्य स्वाध्याय व सिमरन नियम स्वीकार हुआ।'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-serif font-bold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>{language === 'pb' ? 'ਅਖੰਡ ਸ੍ਰੀਕ' : language === 'en' ? 'Streak' : 'अखंड स्ट्रीक'}</span>
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-amber-200">
              {haziriState.currentStreak} <span className="text-xs font-serif">{language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Days' : 'दिन'}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-serif font-bold">
              <Award className="w-4 h-4 text-amber-300" />
              <span>{language === 'pb' ? 'ਕੁੱਲ ਹਾਜ਼ਰੀ' : language === 'en' ? 'Total Days' : 'कुल हाजिरी'}</span>
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-amber-200">
              {haziriState.totalDays} <span className="text-xs font-serif">{language === 'pb' ? 'ਦਿਨ' : language === 'en' ? 'Days' : 'दिन'}</span>
            </div>
          </div>
        </div>

        {/* Date Display */}
        <div className="flex items-center justify-center gap-2 text-xs text-amber-300/90 font-serif bg-black/40 py-2 px-3 rounded-xl border border-amber-500/20">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{todayFormatted}</span>
        </div>

        {/* Kabir Bani Blessing Quote */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40 border border-amber-400/30 text-amber-100 font-serif italic text-xs leading-relaxed">
          "नित प्रति नेम धर्म जो राखै। सोई साधू अमृत रस चाखै॥"
          <div className="text-[10px] text-amber-300 font-normal not-italic mt-1">
            — {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਗਰ' : language === 'en' ? 'Satguru Kabir Sagar' : 'सतगुरु कबीर सागर'}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => {
              sacredHaptics.petalShower();
              onTriggerFlowerShower();
            }}
            className="flex-1 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
            <span>{language === 'pb' ? 'ਫੁੱਲ ਵਰਖਾ ਕਰੋ' : language === 'en' ? 'Flower Shower' : 'पुष्प वर्षा करें'}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-400/40 text-amber-200 font-serif font-bold text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{language === 'pb' ? 'ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share' : 'साझा करें'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
