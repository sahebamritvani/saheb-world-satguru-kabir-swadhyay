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
    const topHeader = SACRED_BRANDING.header[language];
    const bottomFooter = SACRED_BRANDING.footer[language];
    const srcStr = sourceText ? `\n📖 ${language === 'pb' ? 'ਸਰੋਤ' : language === 'en' ? 'Source' : 'स्रोत'}: ${sourceText}` : '';
    const meaningStr = meaningText ? `\n\n🕊️ ${language === 'pb' ? 'ਭਾਵਾਰਥ' : language === 'en' ? 'Meaning' : 'भावार्थ'}:\n${meaningText}` : '';
    const lifeMsgStr = lifeMessageText ? `\n\n🌟 ${language === 'pb' ? 'ਜੀਵਨ ਸੰਦੇਸ਼' : language === 'en' ? 'Life Message' : 'जीवन संदेश'}:\n${lifeMessageText}` : '';
    const fullText = `${topHeader}\n\n${formattedVerse}${srcStr}${meaningStr}${lifeMsgStr}\n\n${bottomFooter}\nhttps://sahebworld.app`;

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
    const topHeader = SACRED_BRANDING.header[language];
    const bottomFooter = SACRED_BRANDING.footer[language];
    const srcStr = sourceText ? `\n📖 ${language === 'pb' ? 'ਸਰੋਤ' : language === 'en' ? 'Source' : 'स्रोत'}: ${sourceText}` : '';
    const meaningStr = meaningText ? `\n\n🕊️ ${language === 'pb' ? 'ਭਾਵਾਰਥ' : language === 'en' ? 'Meaning' : 'भावार्थ'}:\n${meaningText}` : '';
    const fullText = `${topHeader}\n\n${formattedVerse}${srcStr}${meaningStr}\n\n${bottomFooter}\nhttps://sahebworld.app`;

    if (navigator.share) {
      navigator.share({
        title: sourceText || 'सत्यनाम पावन वाणी',
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
      const width = 1080;
      const height = 1080;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas not supported');

      // 1. Background Parchment / Cream
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#FFFDF7');
      bgGrad.addColorStop(0.5, '#FDF8EE');
      bgGrad.addColorStop(1, '#F7EED8');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Dual Golden Frame
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 14;
      ctx.strokeRect(36, 36, width - 72, height - 72);

      ctx.strokeStyle = '#92400E';
      ctx.lineWidth = 3;
      ctx.strokeRect(52, 52, width - 104, height - 104);

      // 3. Subtle Brand Portrait Watermark in Center
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = '/Saheb_World_icon.jpg';
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue gracefully if image fails
        });
        if (img.complete && img.naturalWidth > 0) {
          ctx.save();
          ctx.globalAlpha = 0.09;
          const imgSize = 460;
          ctx.drawImage(img, (width - imgSize) / 2, (height - imgSize) / 2, imgSize, imgSize);
          ctx.restore();
        }
      } catch {
        // Fallback watermark silently
      }

      // 4. Sacred Top Header
      ctx.fillStyle = '#6B1D1D';
      ctx.font = 'bold 40px "Noto Serif Devanagari", serif';
      ctx.textAlign = 'center';
      ctx.fillText(SACRED_BRANDING.header[language], width / 2, 120);

      // Subheading
      ctx.font = 'bold 22px "Noto Sans Devanagari", sans-serif';
      ctx.fillStyle = '#B45309';
      ctx.fillText(
        language === 'pb' ? '✦ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪ੍ਰਮਾਣਿਕ ਪਾਵਨ ਬਾਣੀ ✦' :
        language === 'en' ? '✦ Satguru Kabir Saheb Authentic Sacred Vani ✦' :
        '✦ सतगुरु कबीर साहेब प्रामाणिक पावन वाणी ✦',
        width / 2,
        165
      );

      // Source Tag
      if (sourceText) {
        ctx.font = 'italic 22px "Noto Serif Devanagari", serif';
        ctx.fillStyle = '#78350F';
        ctx.fillText(`॥ ${sourceText} ॥`, width / 2, 210);
      }

      // 5. Main Doha Verse (Bold Maroon, 2 Lines)
      ctx.font = 'bold 46px "Noto Serif Devanagari", serif';
      ctx.fillStyle = '#6B1D1D';
      const lines = formattedVerse.split('\n');
      let startY = 380 - (lines.length * 28);
      lines.forEach((line) => {
        ctx.fillText(line.trim(), width / 2, startY);
        startY += 75;
      });

      // 6. Meaning (Bhavarth)
      if (meaningText) {
        ctx.font = '500 26px "Noto Sans Devanagari", sans-serif';
        ctx.fillStyle = '#292524';
        const words = meaningText.split(' ');
        let curLine = '';
        let mY = startY + 50;
        const maxLines = 6;
        let lineCount = 0;

        for (let i = 0; i < words.length; i++) {
          const test = curLine + words[i] + ' ';
          const metrics = ctx.measureText(test);
          if (metrics.width > width - 200 && i > 0) {
            ctx.fillText(curLine.trim(), width / 2, mY);
            curLine = words[i] + ' ';
            mY += 40;
            lineCount++;
            if (lineCount >= maxLines) {
              ctx.fillText('...', width / 2, mY);
              break;
            }
          } else {
            curLine = test;
          }
        }
        if (lineCount < maxLines && curLine.trim()) {
          ctx.fillText(curLine.trim(), width / 2, mY);
        }
      }

      // 7. Footer Branding
      ctx.font = 'bold 28px "Noto Serif Devanagari", serif';
      ctx.fillStyle = '#6B1D1D';
      ctx.fillText(SACRED_BRANDING.footer[language], width / 2, height - 110);

      ctx.font = 'bold 18px "Noto Sans Devanagari", sans-serif';
      ctx.fillStyle = '#B45309';
      ctx.fillText('साहेब वर्ल्ड • Saheb World | satgurukabir.app', width / 2, height - 72);

      // Export canvas
      canvas.toBlob((blob) => {
        if (!blob) {
          setIsGeneratingImage(false);
          return;
        }
        const file = new File([blob], `SahebWorld_Vani_${verseNumber || Date.now()}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({
            title: sourceText || 'सत्यनाम पावन वाणी',
            text: formattedVerse,
            files: [file],
          }).catch(() => {
            // Trigger download if share dismissed
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `SahebWorld_Vani_${verseNumber || Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
          }).finally(() => {
            setIsGeneratingImage(false);
          });
        } else {
          // Download directly
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `SahebWorld_Vani_${verseNumber || Date.now()}.png`;
          a.click();
          URL.revokeObjectURL(url);
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
    <div 
      className={`relative w-full rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden ${
        isDarkMode 
          ? 'bg-[#241A14] border-amber-600/40 text-[#F5F5F5]' 
          : 'bg-[#FFFDF9] border-amber-600/30 text-[#1A1A1A]'
      } ${className}`}
    >
      {/* Top Row: Authentic Vani Label on Left, 4 Unified Action Buttons on Right */}
      <div 
        className={`px-3 sm:px-5 py-2.5 sm:py-3 border-b flex items-center justify-between gap-2 select-none ${
          isDarkMode 
            ? 'bg-[#2E2018] border-amber-600/30' 
            : 'bg-[#FDF8EE] border-amber-600/20'
        }`}
      >
        {/* Left: Authentic Sacred Vani Badge / Kicker */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span 
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-serif font-black tracking-wide border shadow-2xs shrink-0 bg-amber-500/15 text-amber-800 dark:text-amber-200 border-amber-500/30"
          >
            <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
            <span className="truncate">
              {customBadge || (
                language === 'pb' ? '✦ ਪ੍ਰਮਾਣਿਕ ਪਾਵਨ ਬਾਣੀ' :
                language === 'en' ? '✦ Authentic Sacred Vani' :
                '✦ प्रामाणिक पावन वाणी'
              )}
            </span>
          </span>

          {verseNumber && (
            <span className="text-[11px] font-black font-serif px-2 py-0.5 rounded-md bg-stone-500/10 dark:bg-stone-400/10 text-stone-700 dark:text-stone-300 shrink-0">
              #{verseNumber}
            </span>
          )}
        </div>

        {/* Right: 4 Master Action Icons (Audio, Copy, Share, Bookmark) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* 1. Audio Play Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 ${
              isPlayingAudio 
                ? 'bg-amber-600 text-white border-amber-700 ring-2 ring-amber-500/50' 
                : 'bg-white dark:bg-stone-800 text-amber-800 dark:text-amber-200 border-amber-600/30 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title={isPlayingAudio ? 'वाणी रोकें' : 'वाणी श्रवण करें'}
            aria-label="Play sacred audio"
          >
            {isPlayingAudio ? (
              <VolumeX className="w-4 h-4 animate-pulse text-amber-100" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            )}
          </button>

          {/* 2. Copy Text Button */}
          <button
            type="button"
            onClick={handleCopyText}
            className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 ${
              isCopied 
                ? 'bg-emerald-600 text-white border-emerald-700' 
                : 'bg-white dark:bg-stone-800 text-amber-800 dark:text-amber-200 border-amber-600/30 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title="पावन वाणी कॉपी करें"
            aria-label="Copy verse text"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-white" />
            ) : (
              <Copy className="w-4 h-4 text-amber-700 dark:text-amber-300" />
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
              className="p-1.5 sm:p-2 rounded-xl border bg-white dark:bg-stone-800 text-amber-800 dark:text-amber-200 border-amber-600/30 hover:bg-amber-50 dark:hover:bg-stone-700 transition-all cursor-pointer flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
              title="साझा करें (Share)"
              aria-label="Share verse"
            >
              <Share2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  className="absolute right-0 top-full mt-1.5 w-60 z-50 rounded-2xl border-2 border-amber-600/40 bg-[#FFFDF9] dark:bg-stone-900 shadow-2xl p-1.5 text-stone-800 dark:text-amber-100 backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={handleShareImage}
                    disabled={isGeneratingImage}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-serif font-bold hover:bg-amber-500/15 transition-colors cursor-pointer border border-transparent hover:border-amber-500/30"
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
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-serif font-bold hover:bg-amber-500/15 transition-colors cursor-pointer border border-transparent hover:border-amber-500/30 mt-1"
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

          {/* 4. Sacred Ribbon Bookmark (Bookmark Icon) */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 ${
              isBookmarked 
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-600' 
                : 'bg-white dark:bg-stone-800 text-stone-400 hover:text-amber-600 border-amber-600/30 hover:bg-amber-50 dark:hover:bg-stone-700'
            }`}
            title={isBookmarked ? 'बुकमार्क से हटाएं' : 'पावन बुकमार्क में जोड़ें'}
            aria-label="Bookmark verse"
          >
            <Bookmark 
              className={`w-4 h-4 transition-all ${
                isBookmarked 
                  ? 'fill-[#D97706] text-[#D97706]' 
                  : 'text-stone-500 dark:text-stone-400'
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Middle: Main Doha / Vani in Bold Maroon with Dynamic Font Size */}
      <div className="p-4 sm:p-6 text-center select-text">
        <div 
          style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
          className={`font-serif font-black whitespace-pre-line tracking-tight drop-shadow-2xs ${getDohaFontSizeClass()}`}
        >
          {formattedVerse}
        </div>

        {/* Source citation */}
        {sourceText && (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-xs sm:text-sm font-serif font-bold text-amber-800/80 dark:text-amber-300/80 italic">
              ॥ {sourceText} ॥
            </span>
          </div>
        )}
      </div>

      {/* Bottom: Toggleable Simple Meaning (भावार्थ) & Life Message */}
      {(meaningText || lifeMessageText) && (
        <div 
          className={`border-t transition-all ${
            isDarkMode 
              ? 'bg-[#1D140E] border-amber-600/20' 
              : 'bg-[#FAF3E0]/70 border-amber-600/15'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setIsMeaningExpanded(!isMeaningExpanded);
            }}
            className="w-full px-4 py-2 sm:py-2.5 flex items-center justify-between text-xs font-serif font-bold text-amber-900 dark:text-amber-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer select-none"
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
                className="px-4 pb-4 sm:px-6 sm:pb-5 space-y-3"
              >
                {meaningText && (
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-800 dark:text-stone-200 bg-white/70 dark:bg-stone-800/60 p-3 sm:p-3.5 rounded-xl border border-amber-500/20 shadow-2xs">
                    <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">
                      {language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Meaning:' : 'भावार्थ:'}
                    </span>
                    {meaningText}
                  </div>
                )}

                {lifeMessageText && (
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-amber-950 dark:text-amber-100 bg-amber-500/15 dark:bg-amber-900/30 p-3 sm:p-3.5 rounded-xl border border-amber-500/30 shadow-2xs">
                    <span className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-1">
                      <span>🌟</span>
                      <span>{language === 'pb' ? 'ਜੀਵਨ ਸੰਦੇਸ਼:' : language === 'en' ? 'Life Message:' : 'जीवन संदेश:'}</span>
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
        <div className="px-4 py-3 border-t border-amber-600/15 flex items-center justify-between gap-2">
          {footerExtra}
        </div>
      )}
    </div>
  );
};
