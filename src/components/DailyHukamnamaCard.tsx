import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  Share2, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Languages, 
  Scroll,
  Calendar
} from 'lucide-react';
import { Language, SggsKabirVerse } from '../types';
import { getDailyHukamnama, setupMidnightHukamnamaListener, getDailyLifeDiscipline } from '../services/dailyHukamnamaService';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

interface DailyHukamnamaCardProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenFullView: () => void;
  onOpenShare?: (text: string) => void;
}

export const DailyHukamnamaCard: React.FC<DailyHukamnamaCardProps> = ({
  language,
  onLanguageChange,
  onOpenFullView,
  onOpenShare
}) => {
  const [verse, setVerse] = useState<SggsKabirVerse>(() => getDailyHukamnama(new Date()));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showRoman, setShowRoman] = useState(false);

  // Auto-update at midnight 12:00 AM
  useEffect(() => {
    const cleanup = setupMidnightHukamnamaListener(() => {
      setVerse(getDailyHukamnama(new Date()));
    });
    return cleanup;
  }, []);

  const discipline = getDailyLifeDiscipline(verse, language);

  const isPb = language === 'pb';
  const isEn = language === 'en';

  const moolLines: string[] = isPb 
    ? verse.moolGurmukhi 
    : isEn && verse.moolRoman?.length 
    ? verse.moolRoman 
    : verse.moolDevanagari;

  const bhavarthText = isPb 
    ? verse.bhavarth?.pb 
    : isEn 
    ? verse.bhavarth?.en 
    : verse.bhavarth?.hi;

  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      speechReciter.stop();
      setIsPlayingAudio(false);
    } else {
      try {
        satyanaamAudio.ringSacredBell();
      } catch {}
      const textToSpeak = verse.moolDevanagari.join(' । ') + ' । ' + (verse.bhavarth?.hi || '');
      speechReciter.speak(
        textToSpeak, 
        'hi', 
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
      setIsPlayingAudio(true);
    }
  };

  const handleShareClick = () => {
    sacredHaptics.lightTap();
    const shareText = `☬ पावन दैनिक हुकमनामा • Sri Guru Granth Sahib Ji\n` +
      `सतगुरु कबीर साहेब वाणी (अंग ${verse.ang})\n\n` +
      `${verse.moolGurmukhi.join('\n')}\n\n` +
      `${verse.moolDevanagari.join('\n')}\n\n` +
      `भावार्थ:\n${bhavarthText}\n\n` +
      `दैनिक जीवन में अनुशासन:\n• ${discipline.vicharPoint}\n• ${discipline.aacharanPoint}\n\n` +
      `।। साहेब बन्दगी साहेब ।।\nSaheb World Swadhyay App`;

    if (onOpenShare) {
      onOpenShare(shareText);
    } else if (navigator.share) {
      navigator.share({
        title: 'पावन दैनिक हुकमनामा • Saheb World',
        text: shareText
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      alert('हुकमनामा कॉपी हो गया!');
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-amber-50/90 via-amber-100/50 to-orange-50/80 dark:from-[#1E1610]/95 dark:via-[#17110C]/90 dark:to-[#120D09]/95 shadow-xl p-5 sm:p-7 backdrop-blur-md">
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-radial from-amber-400/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-radial from-orange-400/15 via-transparent to-transparent pointer-events-none" />

      {/* TOP BAR: Title Badge, SGGS Ang, and Quick Language Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-2xl bg-amber-600/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-sm sm:text-base text-amber-950 dark:text-amber-100">
                {isPb ? '☬ ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ' : isEn ? '☬ Daily Hukamnama' : '☬ पावन दैनिक हुकमनामा'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/30">
                12:00 AM स्वतः परिवर्तन
              </span>
            </div>
            <p className="text-xs text-amber-900/70 dark:text-amber-300/70 font-serif">
              ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ • {isPb ? 'ਅੰਗ' : isEn ? 'Ang' : 'अंग'} {verse.ang} {verse.raag ? `(${verse.raag})` : ''}
            </p>
          </div>
        </div>

        {/* Global Language Pill Switcher */}
        <div className="flex items-center gap-1 p-1 bg-amber-900/5 dark:bg-black/40 rounded-2xl border border-amber-500/20">
          <Languages className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 ml-1.5 mr-0.5" />
          {[
            { code: 'hi', label: 'हिंदी' },
            { code: 'pb', label: 'ਪੰਜਾਬੀ' },
            { code: 'en', label: 'EN' }
          ].map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                onLanguageChange(l.code as Language);
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                language === l.code
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-900 dark:text-amber-300 hover:bg-amber-500/15'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* SACRED MOOL VANI */}
      <div className="py-5 space-y-3">
        <div className="p-4 rounded-2xl bg-white/60 dark:bg-black/30 border border-amber-500/15 shadow-inner">
          <div className="space-y-1.5 text-center">
            {moolLines.map((line: string, idx: number) => (
              <p
                key={idx}
                className="font-serif font-black text-base sm:text-xl text-amber-950 dark:text-amber-100 leading-relaxed tracking-wide"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Secondary script if Devanagari or Gurmukhi is primary */}
          {language !== 'pb' && verse.moolGurmukhi && (
            <div className="mt-2.5 pt-2 border-t border-amber-500/10 text-center">
              <p className="text-xs text-amber-800/80 dark:text-amber-300/80 font-serif italic">
                {verse.moolGurmukhi.slice(0, 2).join(' । ')}
              </p>
            </div>
          )}
        </div>

        {/* BHAVARTH (DEEP SPIRITUAL ESSENCE) */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isPb ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ (Spiritual Essence):' : isEn ? 'Deep Spiritual Meaning:' : 'गहन आध्यात्मिक भावार्थ:'}</span>
          </span>
          <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-serif bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
            {bhavarthText}
          </p>
        </div>

        {/* DAINIK JEEVAN ANUSHASAN (DAILY LIFE DISCIPLINE TEASER) */}
        <div className="p-3.5 rounded-2xl bg-amber-600/10 dark:bg-amber-500/10 border border-amber-500/25 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{discipline.title}</span>
            </span>
            <span className="text-[10px] text-amber-700 dark:text-amber-300 font-bold">
              आज का पावन संकल्प
            </span>
          </div>

          <p className="text-xs text-gray-700 dark:text-gray-300 leading-normal line-clamp-2">
            • <strong>{isPb ? 'ਆਚਰਣ' : isEn ? 'Conduct' : 'आचरण'}:</strong> {discipline.aacharanPoint}
          </p>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-500/20">
        <div className="flex items-center gap-2">
          {/* Audio Recitation */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
              isPlayingAudio
                ? 'bg-amber-600 text-white border-amber-600 shadow-md animate-pulse'
                : 'bg-white/70 dark:bg-zinc-800/80 text-amber-900 dark:text-amber-200 border-amber-500/25 hover:bg-amber-500/15'
            }`}
            title="पावन वाणी श्रवण करें"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPlayingAudio ? 'रोकें' : 'श्रवण'}</span>
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShareClick}
            className="p-2.5 rounded-xl bg-white/70 dark:bg-zinc-800/80 text-amber-900 dark:text-amber-200 border border-amber-500/25 hover:bg-amber-500/15 transition cursor-pointer"
            title="हुकमनामा साझा करें"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Full View Button */}
        <button
          type="button"
          onClick={() => {
            sacredHaptics.lightTap();
            onOpenFullView();
          }}
          className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{isPb ? 'ਪੂਰਨ ਹੁਕਮਨਾਮਾ ਤੇ ਜੀਵਨ ਅਨੁਸ਼ਾਸਨ' : isEn ? 'Explore Full Sanctuary & Discipline' : 'पूर्ण हुकमनामा व दैनिक जीवन अनुशासन'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
