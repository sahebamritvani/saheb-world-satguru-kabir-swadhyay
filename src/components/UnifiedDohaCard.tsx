import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Share2, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Image as ImageIcon, 
  MessageSquare, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { formatCoupletString } from '../utils/textSanitizer';
import { buildStandardShareText, renderStandardDohaCanvas } from '../services/shareTemplate';

export interface UnifiedDohaCardProps {
  id?: string | number;
  verseNumber?: number | string;
  badgeLabel?: string | { hi: string; pb: string; en: string };
  source?: string | { hi: string; pb: string; en: string };
  text: string | { hi: string; pb: string; en: string };
  meaning?: string | { hi: string; pb: string; en: string };
  lifeMessage?: string | { hi: string; pb: string; en: string };
  language: Language;
  onBookmarkChange?: (isBookmarked: boolean) => void;
  className?: string;
  defaultExpandedMeaning?: boolean;
  footerExtra?: React.ReactNode;
}

export const UnifiedDohaCard: React.FC<UnifiedDohaCardProps> = ({
  id,
  verseNumber,
  badgeLabel,
  source,
  text,
  meaning,
  lifeMessage,
  language,
  onBookmarkChange,
  className = '',
  defaultExpandedMeaning = true,
  footerExtra,
}) => {
  const { isDarkMode, fontSize } = useAppTheme();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isMeaningExpanded, setIsMeaningExpanded] = useState(defaultExpandedMeaning);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Storage key for bookmark
  const verseKey = id ? `verse_${id}` : verseNumber ? `verse_num_${verseNumber}` : `verse_${typeof text === 'string' ? text.slice(0, 20) : text.hi.slice(0, 20)}`;
  
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const saved = localStorage.getItem('sahebworld_saved_verses');
      if (saved) {
        const list = JSON.parse(saved);
        return Array.isArray(list) && list.some((item: any) => item.key === verseKey || item.id === id);
      }
      return false;
    } catch {
      return false;
    }
  });

  // Resolve localized strings
  const getLocalized = (val?: string | { hi: string; pb: string; en: string }): string => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[language] || val.hi || '';
  };

  const rawVerseText = getLocalized(text);
  const formattedVerse = formatCoupletString(rawVerseText);
  const meaningText = getLocalized(meaning);
  const lifeMessageText = getLocalized(lifeMessage);
  const sourceText = getLocalized(source);
  const customBadge = getLocalized(badgeLabel);

  // Close share menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  // Audio Playback via Web Speech API
  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(formattedVerse.replace(/\n/g, ' '));
    utterance.lang = language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN';
    utterance.rate = 0.9;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  // Copy Clean Text with Sacred Headers & Footers
  const handleCopyText = async () => {
    sacredHaptics.lightTap();
    const fullText = buildStandardShareText({
      text: rawVerseText,
      language,
      source: sourceText,
      meaning: meaningText,
      lifeMessage: lifeMessageText,
      sakhiNumber: verseNumber,
    });

    try {
      await navigator.clipboard.writeText(fullText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = fullText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    }
  };

  // Bookmark Toggle with Diary Sync
  const handleToggleBookmark = () => {
    sacredHaptics.mediumTap();
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);

    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_saved_verses');
        let list: any[] = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(list)) list = [];

        if (nextState) {
          const newEntry = {
            key: verseKey,
            id: id || verseKey,
            number: verseNumber,
            text: formattedVerse,
            meaning: meaningText,
            lifeMessage: lifeMessageText,
            source: sourceText,
            savedAt: new Date().toISOString(),
          };
          list = [newEntry, ...list.filter((x: any) => x.key !== verseKey)];
        } else {
          list = list.filter((x: any) => x.key !== verseKey && x.id !== id);
        }
        localStorage.setItem('sahebworld_saved_verses', JSON.stringify(list));
        window.dispatchEvent(new CustomEvent('sahebworld_diary_updated'));
      }
    } catch (e) {
      console.warn('Bookmark sync warning:', e);
    }

    if (onBookmarkChange) {
      onBookmarkChange(nextState);
    }
  };

  // Native or WhatsApp Text Share
  const handleShareText = () => {
    sacredHaptics.lightTap();
    setShowShareMenu(false);
    const fullText = buildStandardShareText({
      text: rawVerseText,
      language,
      source: sourceText,
      meaning: meaningText,
      lifeMessage: lifeMessageText,
      sakhiNumber: verseNumber,
    });

    const shareTitle = sourceText || (language === 'pb' ? 'ਸਤਯਨਾਮ ਪਾਵਨ ਬਾਣੀ' : language === 'en' ? 'Satyanaam Sacred Vani' : 'सत्यनाम पावन वाणी');

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: fullText,
      }).catch(() => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`, '_blank');
      });
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`, '_blank');
    }
  };

  // Generate and Download/Share Image Canvas
  const handleShareImage = async () => {
    sacredHaptics.mediumTap();
    setShowShareMenu(false);
    setIsGeneratingImage(true);

    try {
      const canvas = document.createElement('canvas');
      await renderStandardDohaCanvas(canvas, {
        verseText: rawVerseText,
        language,
        sourceText,
        meaningText,
      });

      canvas.toBlob((blob) => {
        if (!blob) {
          setIsGeneratingImage(false);
          return;
        }
        const file = new File([blob], `SahebWorld_Vani_${verseNumber || Date.now()}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          const shareText = buildStandardShareText({
            text: rawVerseText,
            language,
            source: sourceText,
            sakhiNumber: verseNumber,
          });
          navigator.share({
            title: sourceText || (language === 'pb' ? 'ਸਤਯਨਾਮ ਪਾਵਨ ਬਾਣੀ' : language === 'en' ? 'Satyanaam Sacred Vani' : 'सत्यनाम पावन वाणी'),
            text: shareText,
            files: [file],
          }).catch(() => {
            // Trigger download if share dismissed
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `SahebWorld_Vani_${verseNumber || Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          }).finally(() => {
            setIsGeneratingImage(false);
          });
        } else {
          // Download directly
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `SahebWorld_Vani_${verseNumber || Date.now()}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(url), 1000);
          setIsGeneratingImage(false);
        }
      }, 'image/png');
    } catch (err) {
      console.warn('Canvas export error:', err);
      setIsGeneratingImage(false);
    }
  };

  // Dynamic Font Size Class Calculation based on ThemeContext fontSize
  const getDohaFontSizeClass = () => {
    switch (fontSize) {
      case 'small':
        return 'text-base sm:text-lg leading-relaxed';
      case 'medium':
        return 'text-xl sm:text-2xl leading-relaxed';
      case 'large':
        return 'text-2xl sm:text-3xl leading-relaxed';
      case 'xlarge':
      case 'xl':
        return 'text-3xl sm:text-4xl leading-loose';
      case 'elderly':
        return 'text-3xl sm:text-4xl lg:text-5xl font-black leading-loose';
      case 'normal':
      default:
        return 'text-lg sm:text-xl md:text-2xl leading-relaxed';
    }
  };

  return (
    <article
      className={`relative w-full py-5 sm:py-6 px-2 sm:px-4 transition-colors duration-200 ${
        isDarkMode
          ? 'text-[#F5F5F5]'
          : 'bg-[#FDF8EE]/45 text-[#1A1A1A]'
      } ${className}`}
    >
      {/* Top Row: Clean Unboxed Vani Label on Left (flex-1 min-w-0) + 4 Compact Action Icons on Right (zero overlap) */}
      <div className="flex items-center justify-between gap-[6px] mb-3.5 select-none">
        <div className="flex-1 min-w-0">
          <span
            style={{ color: '#D97706' }}
            className="text-xs sm:text-sm font-serif font-black tracking-wide truncate block"
          >
            {customBadge || (
              language === 'pb' ? '✦ ਪ੍ਰਮਾਣਿਕ ਪਾਵਨ ਬਾਣੀ' :
              language === 'en' ? '✦ Authentic Sacred Vani' :
              '✦ प्रामाणिक पावन वाणी'
            )}{verseNumber ? ` #${verseNumber}` : ''}
          </span>
        </div>

        {/* Right: 4 Compact Action Icons (Audio, Copy, Share, Bookmark) */}
        <div className="shrink-0 flex items-center gap-[6px]">
          {/* 1. Audio Play Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`w-8 h-8 rounded-lg border transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
              isPlayingAudio
                ? 'bg-amber-600 text-white border-amber-700 ring-2 ring-amber-500/40'
                : 'bg-[#FFFDF9] dark:bg-stone-800/80 text-amber-800 dark:text-amber-200 border-amber-600/25 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title={isPlayingAudio ? 'वाणी रोकें' : 'वाणी श्रवण करें'}
            aria-label="Play sacred audio"
          >
            {isPlayingAudio ? (
              <VolumeX className="w-3.5 h-3.5 animate-pulse text-amber-100" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
            )}
          </button>

          {/* 2. Copy Text Button */}
          <button
            type="button"
            onClick={handleCopyText}
            className={`w-8 h-8 rounded-lg border transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
              isCopied
                ? 'bg-emerald-600 text-white border-emerald-700'
                : 'bg-[#FFFDF9] dark:bg-stone-800/80 text-amber-800 dark:text-amber-200 border-amber-600/25 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title="पावन वाणी कॉपी करें"
            aria-label="Copy verse text"
          >
            {isCopied ? (
              <Check className="w-3.5 h-3.5 text-white" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
            )}
          </button>

          {/* 3. Share Menu Dropdown Button */}
          <div className="relative" ref={shareMenuRef}>
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowShareMenu(!showShareMenu);
              }}
              className="w-8 h-8 rounded-lg border bg-[#FFFDF9] dark:bg-stone-800/80 text-amber-800 dark:text-amber-200 border-amber-600/25 hover:bg-amber-50 dark:hover:bg-stone-700 transition-all cursor-pointer flex items-center justify-center active:scale-95"
              title="साझा करें (Share)"
              aria-label="Share verse"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  className="absolute right-0 top-full mt-1.5 w-60 z-50 rounded-2xl border border-amber-600/35 bg-[#FFFDF9] dark:bg-stone-900 shadow-xl p-1.5 text-stone-800 dark:text-amber-100 backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={handleShareImage}
                    disabled={isGeneratingImage}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-serif font-bold hover:bg-amber-500/15 transition-colors cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div className="font-black text-amber-900 dark:text-amber-200">
                        {language === 'pb' ? 'ਚਿੱਤਰ ਰੂਪ ਵਿੱਚ ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share as Image' : 'चित्र रूप में साझा करें'}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">
                        {language === 'pb' ? 'ਸੁੰਦਰ ਭੋਜਪੱਤਰ ਕਾਰਡ' : language === 'en' ? 'Sacred parchment card' : 'पावन भोजपत्र कार्ड'}
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareText}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-serif font-bold hover:bg-amber-500/15 transition-colors cursor-pointer mt-1"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div className="font-black text-amber-900 dark:text-amber-200">
                        {language === 'pb' ? 'ਟੈਕਸਟ ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share as Text' : 'टेक्स्ट साझा करें'}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">
                        WhatsApp / Messages
                      </div>
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Sacred Ribbon Bookmark */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            className={`w-8 h-8 rounded-lg border transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-600'
                : 'bg-[#FFFDF9] dark:bg-stone-800/80 text-stone-400 hover:text-amber-600 border-amber-600/25 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title={isBookmarked ? 'बुकमार्क से हटाएं' : 'पावन बुकमार्क में जोड़ें'}
            aria-label="Bookmark verse"
          >
            <Bookmark
              className={`w-3.5 h-3.5 transition-all ${
                isBookmarked
                  ? 'fill-[#D97706] text-[#D97706]'
                  : 'text-stone-500 dark:text-stone-400'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Middle: Main Doha / Vani in Bold Maroon (2 clean lines) */}
      <div className="py-3 sm:py-4 px-1 text-center select-text">
        <div
          style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
          className={`font-serif font-black whitespace-pre-line tracking-tight ${getDohaFontSizeClass()}`}
        >
          {formattedVerse}
        </div>

        {/* Source citation */}
        {sourceText && (
          <div className="mt-2.5 flex items-center justify-center gap-1.5">
            <span className="text-xs sm:text-sm font-serif font-bold text-amber-800/85 dark:text-amber-300/85 italic">
              ॥ {sourceText} ॥
            </span>
          </div>
        )}
      </div>

      {/* Bottom: Open Scripture Meaning (भावार्थ) & Life Message without nested heavy boxes */}
      {(meaningText || lifeMessageText) && (
        <div className="mt-2">
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setIsMeaningExpanded(!isMeaningExpanded);
            }}
            className="w-full py-1.5 px-2 flex items-center justify-between text-xs font-serif font-bold text-amber-900 dark:text-amber-200 hover:opacity-80 transition-opacity cursor-pointer select-none"
          >
            <span className="flex items-center gap-1.5">
              <span>📖</span>
              <span>{language === 'pb' ? 'ਸਰਲ ਭਾਵਾਰਥ ਤੇ ਜੀਵਨ ਸੰਦੇਸ਼' : language === 'en' ? 'Simple Meaning & Life Message' : 'सरल भावार्थ एवं जीवन संदेश'}</span>
            </span>
            {isMeaningExpanded ? (
              <ChevronUp className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            )}
          </button>

          <AnimatePresence>
            {isMeaningExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-2 pl-3 sm:pl-4 border-l-2 border-amber-500/35 space-y-2.5 text-left"
              >
                {meaningText && (
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-800 dark:text-stone-200">
                    <span className="font-bold text-amber-900 dark:text-amber-300 mr-1.5">
                      {language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Meaning:' : 'भावार्थ:'}
                    </span>
                    {meaningText}
                  </div>
                )}

                {lifeMessageText && (
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-amber-950 dark:text-amber-100">
                    <span className="font-bold text-amber-900 dark:text-amber-200 mr-1.5">
                      🌟 {language === 'pb' ? 'ਜੀਵਨ ਸੰਦੇਸ਼:' : language === 'en' ? 'Life Message:' : 'जीवन संदेश:'}
                    </span>
                    {lifeMessageText}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {footerExtra && (
        <div className="pt-3 mt-2 flex items-center justify-between gap-2">
          {footerExtra}
        </div>
      )}

      {/* Open Sacred Scripture Divider Line with Centered ✦ */}
      <div className="relative mt-6 flex items-center justify-center select-none" aria-hidden="true">
        <div className="w-full border-b border-[rgba(217,119,6,0.25)]" />
        <span className="absolute px-3 text-xs font-bold text-[#D97706] bg-[#FDF8EE] dark:bg-[#1E150F]">
          ✦
        </span>
      </div>
    </article>
  );
};
