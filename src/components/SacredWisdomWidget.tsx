import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Share2, 
  RotateCw, 
  BookOpen, 
  Bookmark, 
  Heart, 
  Flame, 
  Volume2, 
  VolumeX,
  Feather
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sakhisDatabase } from '../data/sakhis';
import { sacredHaptics } from '../services/haptics';
import { speechReciter } from '../services/audioDhun';

interface SacredWisdomWidgetProps {
  language: Language;
  onOpenSwadhyay?: (sakhi?: Sakhi) => void;
  onOpenDiaryWithVerse?: (verseText: string, sakhiNumber?: number) => void;
}

export const SacredWisdomWidget: React.FC<SacredWisdomWidgetProps> = ({
  language,
  onOpenSwadhyay,
  onOpenDiaryWithVerse
}) => {
  const { theme } = useAppTheme();
  
  // Random Sakhi state
  const [currentSakhi, setCurrentSakhi] = useState<Sakhi>(() => {
    const randomIndex = Math.floor(Math.random() * sakhisDatabase.length);
    return sakhisDatabase[randomIndex] || sakhisDatabase[0];
  });

  const [isCopied, setIsCopied] = useState(false);
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Stop speech if language changes
  useEffect(() => {
    speechReciter.stop();
    setIsPlayingAudio(false);
  }, [language]);

  const handleShuffle = () => {
    sacredHaptics.lightTap();
    setIsShuffling(true);
    speechReciter.stop();
    setIsPlayingAudio(false);
    
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * sakhisDatabase.length);
      // Ensure different verse
      if (sakhisDatabase[randomIndex]?.id === currentSakhi.id && sakhisDatabase.length > 1) {
        randomIndex = (randomIndex + 1) % sakhisDatabase.length;
      }
      setCurrentSakhi(sakhisDatabase[randomIndex] || sakhisDatabase[0]);
      setIsShuffling(false);
    }, 200);
  };

  const getFormattedVerseText = () => {
    const text = currentSakhi.text[language] || currentSakhi.text.hi;
    const bhavarth = currentSakhi.bhavarth[language] || currentSakhi.bhavarth.hi;
    const header = SACRED_BRANDING.header[language];
    const footer = SACRED_BRANDING.footer[language];
    
    return `।। ${header} ।।\n\n` +
      `📜 साखी #${currentSakhi.number} (${currentSakhi.categoryTitle[language] || currentSakhi.categoryTitle.hi})\n\n` +
      `"${text}"\n\n` +
      `💡 भावार्थ: ${bhavarth}\n\n` +
      `।। ${footer} ।।\n` +
      `📱 Saheb World App`;
  };

  const handleCopyToClipboard = async () => {
    sacredHaptics.lightTap();
    const textToCopy = getFormattedVerseText();
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setIsCopied(true);
      sacredHaptics.successVibration();
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.warn('Clipboard copy error:', err);
    }
  };

  const handleShare = async () => {
    sacredHaptics.lightTap();
    const textToShare = getFormattedVerseText();
    const shareTitle = language === 'pb' 
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਬਿਬੇਕ - ਸਾਹੇਬ ਵਰਲਡ' 
      : language === 'en' 
      ? 'Satguru Kabir Saheb Sacred Wisdom - Saheb World' 
      : 'सतगुरु कबीर साहेब पावन विवेक - साहेब वर्ल्ड';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: textToShare,
          url: window.location.origin
        });
        sacredHaptics.successVibration();
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          // Fallback to clipboard if share was rejected or failed
          handleCopyToClipboard();
        }
      }
    } else {
      // Fallback if Web Share API is not supported in current environment
      handleCopyToClipboard();
      setShareToast(
        language === 'pb' 
          ? 'ਟੈਕਸਟ ਕਾਪੀ ਹੋ ਗਿਆ ਹੈ, ਤੁਸੀਂ ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹੋ।' 
          : language === 'en' 
          ? 'Verse copied to clipboard! Ready to share.' 
          : 'साखी कॉपी हो गई है, आप इसे किसी भी सोशल मीडिया पर शेयर कर सकते हैं।'
      );
      setTimeout(() => setShareToast(null), 3000);
    }
  };

  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      speechReciter.stop();
      setIsPlayingAudio(false);
    } else {
      const verseText = currentSakhi.text[language] || currentSakhi.text.hi;
      setIsPlayingAudio(true);
      speechReciter.speak(verseText, language, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleReflectInJournal = () => {
    sacredHaptics.lightTap();
    if (onOpenDiaryWithVerse) {
      onOpenDiaryWithVerse(
        currentSakhi.text[language] || currentSakhi.text.hi,
        currentSakhi.number
      );
    }
  };

  return (
    <motion.div 
      id="sacred-wisdom-widget"
      initial={{ opacity: 0, y: 22, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.accentGold,
        color: theme.textPrimary
      }}
      className="rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-4 relative overflow-hidden transition-all group"
    >
      {/* Decorative Subtle Background Aura */}
      <div 
        className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ backgroundColor: theme.accentGold }}
      />
      <div 
        className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full blur-2xl opacity-10 pointer-events-none"
        style={{ backgroundColor: theme.sacredMaroon }}
      />

      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3.5" style={{ borderColor: theme.cardBorder }}>
        <div className="flex items-center gap-2.5">
          <div 
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="w-10 h-10 rounded-2xl border flex items-center justify-center text-amber-600 shadow-2xs shrink-0"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-black text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
                {language === 'pb' ? 'ਪਾਵਨ ਬਿਬੇਕ ਤੇ ਸੂਤਰ' : language === 'en' ? 'Sacred Wisdom' : 'पावन विवेक एवं अमर सूत्र'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                #{currentSakhi.number}
              </span>
            </div>
            <p className="text-[11px] opacity-75 font-serif line-clamp-1" style={{ color: theme.textSecondary }}>
              {currentSakhi.categoryTitle[language] || currentSakhi.categoryTitle.hi} • {currentSakhi.grantha}
            </p>
          </div>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Audio Recitation */}
          <button
            type="button"
            onClick={handleToggleAudio}
            style={{
              backgroundColor: isPlayingAudio ? theme.sacredMaroon : theme.bgSecondary,
              borderColor: isPlayingAudio ? theme.sacredMaroon : theme.cardBorder,
              color: isPlayingAudio ? '#FFFFFF' : theme.textPrimary,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={isPlayingAudio ? 'Stop Audio' : 'Listen Verse'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4 text-white animate-pulse" />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें'}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'सुनें'}</span>
              </>
            )}
          </button>

          {/* Shuffle Random Verse */}
          <button
            type="button"
            onClick={handleShuffle}
            disabled={isShuffling}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.cardBorder,
              color: theme.sacredMaroon,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
            title={language === 'pb' ? 'ਹੋਰ ਬਿਬੇਕ ਦੇਖੋ' : language === 'en' ? 'Shuffle Verse' : 'नया विवेक देखें'}
          >
            <RotateCw className={`w-4 h-4 text-amber-600 ${isShuffling ? 'animate-spin' : ''}`} />
            <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਬਦਲੋ' : language === 'en' ? 'Shuffle' : 'बदलें'}</span>
          </button>

          {/* Copy to Clipboard */}
          <button
            type="button"
            onClick={handleCopyToClipboard}
            style={{
              backgroundColor: isCopied ? '#10B981' : theme.bgSecondary,
              borderColor: isCopied ? '#10B981' : theme.cardBorder,
              color: isCopied ? '#FFFFFF' : theme.textPrimary,
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={language === 'pb' ? 'ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy to Clipboard' : 'कॉपी करें'}
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-[11px]">{language === 'pb' ? 'ਕਾਪੀ ਹੋ ਗਿਆ' : language === 'en' ? 'Copied' : 'कॉपी हुआ'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਕਾਪੀ' : language === 'en' ? 'Copy' : 'कॉपी'}</span>
              </>
            )}
          </button>

          {/* Web Share API Button */}
          <button
            type="button"
            onClick={handleShare}
            style={{
              backgroundColor: theme.buttonPrimaryBg,
              color: theme.buttonPrimaryText,
              borderColor: theme.accentGold,
            }}
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
            title={language === 'pb' ? 'ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share Verse' : 'सोशल मीडिया पर शेयर करें'}
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[11px]">{language === 'pb' ? 'ਸ਼ੇਅਰ' : language === 'en' ? 'Share' : 'शेयर'}</span>
          </button>
        </div>
      </div>

      {/* Main Verse Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSakhi.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
          className="rounded-2xl border p-4 sm:p-6 space-y-3.5 text-center relative"
        >
          {/* Sacred Invocation */}
          <span 
            style={{ color: theme.accentGold }}
            className="text-[11px] uppercase tracking-widest font-black block font-serif"
          >
            {language === 'pb' ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਚਨਾਮ੍ਰਿਤ ।।' : language === 'en' ? '।। Satguru Kabir Sacred Word ।।' : '।। सतगुरु कबीर वचनामृत ।।'}
          </span>

          {/* Main Couplet / Verse */}
          <p 
            style={{ color: theme.sacredMaroon }}
            className="font-serif font-black text-base sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line tracking-wide"
          >
            {currentSakhi.text[language] || currentSakhi.text.hi}
          </p>

          {/* Transliteration */}
          {currentSakhi.transliteration && (
            <p className="text-xs sm:text-sm italic opacity-75 max-w-xl mx-auto font-sans">
              {currentSakhi.transliteration}
            </p>
          )}

          {/* Meaning / Bhavarth */}
          <div 
            style={{ borderColor: theme.cardBorder }}
            className="pt-3 mt-3 border-t text-left"
          >
            <div className="flex items-start gap-2">
              <span className="text-xs font-black text-amber-600 shrink-0 mt-0.5">
                {language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Meaning:' : 'भावार्थ:'}
              </span>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-serif" style={{ color: theme.textSecondary }}>
                {currentSakhi.bhavarth[language] || currentSakhi.bhavarth.hi}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Journaling & Contemplation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="opacity-75 font-serif" style={{ color: theme.textSecondary }}>
            {language === 'pb' 
              ? 'ਰੋਜ਼ਾਨਾ ਅੰਮ੍ਰਿਤ ਵਚਨਾਂ ਦਾ ਮਨਨ ਕਰੋ' 
              : language === 'en' 
              ? 'Contemplate sacred wisdom daily' 
              : 'दैनिक पावन वचनों का आत्म-मनन करें'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenDiaryWithVerse && (
            <button
              type="button"
              onClick={handleReflectInJournal}
              style={{ color: theme.accentGold }}
              className="font-bold flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਦਰਜ ਕਰੋ' : language === 'en' ? 'Reflect in Journal' : 'जर्नल / डायरी में चिंतन लिखें'}</span>
            </button>
          )}

          {onOpenSwadhyay && (
            <button
              type="button"
              onClick={() => onOpenSwadhyay(currentSakhi)}
              style={{
                backgroundColor: theme.stepActiveBg,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon
              }}
              className="px-3 py-1 rounded-xl border font-bold flex items-center gap-1 hover:scale-105 transition cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'pb' ? 'ਸਵਾਧਿਆਏ' : language === 'en' ? 'Swadhyay' : 'स्वाध्याय'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Share Toast Feedback */}
      {shareToast && (
        <div 
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
          className="p-2.5 rounded-xl border text-center text-xs font-bold animate-fadeIn shadow-md"
        >
          {shareToast}
        </div>
      )}
    </motion.div>
  );
};
