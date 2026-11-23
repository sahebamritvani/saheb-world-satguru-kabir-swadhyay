import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Sparkles, 
  Check, 
  Smartphone, 
  Image as ImageIcon,
  FileText,
  Copy,
  MessageCircle,
  CheckCheck
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { translations, getLocalizedGranthaName, formatSakhiShareText } from '../data/translations';
import { 
  generateQuoteCardCanvas, 
  downloadOrShareImage, 
  triggerBlobDownload,
  CARD_THEMES, 
  GeneratedCardResult 
} from '../services/quoteCardGenerator';
import { satyanaamAudio } from '../services/audioDhun';
import { formatCoupletString, ensureSatguruKabirSaheb } from '../utils/textSanitizer';

interface QuoteCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  sakhi: Sakhi;
  initialLanguage: Language;
  onLanguageChange?: (lang: Language) => void;
  isBellEnabled?: boolean;
}

export const QuoteCardModal: React.FC<QuoteCardModalProps> = ({
  isOpen,
  onClose,
  sakhi,
  initialLanguage,
  onLanguageChange,
  isBellEnabled = true,
}) => {
  const [activeTab, setActiveTab] = useState<'image' | 'text'>('image');
  const [cardLanguage, setCardLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    setCardLanguage(initialLanguage);
  }, [initialLanguage]);

  const [cardDesign, setCardDesign] = useState<'royal' | 'saffron' | 'emerald' | 'oled' | 'nature_mountain' | 'nature_forest' | 'nature_sunset' | 'nature_river' | 'nature_autumn' | 'scenic_tree' | 'scenic_maghar'>('scenic_tree');
  const [cardRatio, setCardRatio] = useState<'1:1' | '9:16'>('1:1');

  useEffect(() => {
    setGeneratedCard(null);
  }, [sakhi.id, cardDesign, cardRatio, cardLanguage]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedCard, setGeneratedCard] = useState<GeneratedCardResult | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [copiedVerseOnly, setCopiedVerseOnly] = useState<boolean>(false);

  if (!isOpen) return null;

  const t = translations[cardLanguage] || translations.hi;
  const currentTheme = CARD_THEMES[cardDesign] || CARD_THEMES.scenic_tree;

  const themesList = [
    { id: 'scenic_tree', label: t.themeBanyanGhat, bg: '#1A120B', text: '#FEF08A' },
    { id: 'scenic_maghar', label: t.themeMagharDham, bg: '#120D08', text: '#FEF3C7' },
    { id: 'royal', label: t.themeRoyal, bg: '#FFFDF9', text: '#2E1C0C' },
    { id: 'saffron', label: t.themeSaffron, bg: '#FDF2E9', text: '#2E1A0C' },
    { id: 'emerald', label: t.themeEmerald, bg: '#E8F8F5', text: '#142C24' },
    { id: 'oled', label: t.themeOled, bg: '#121212', text: '#E5E7EB' },
    { id: 'nature_mountain', label: t.themeDawn, bg: '#2D1B06', text: '#FAD074' },
    { id: 'nature_forest', label: t.themeForest, bg: '#061A12', text: '#6EE7B7' },
    { id: 'nature_sunset', label: t.themeSunset, bg: '#2A0820', text: '#FFD166' },
    { id: 'nature_river', label: t.themeRiver, bg: '#031B2E', text: '#67E8F9' },
    { id: 'nature_autumn', label: t.themeAutumn, bg: '#2C1A04', text: '#FFE082' },
  ] as const;

  const shareTextContent = formatSakhiShareText(
    sakhi.text[cardLanguage] || sakhi.text.hi,
    sakhi.bhavarth[cardLanguage] || sakhi.bhavarth.hi,
    sakhi.contemplation[cardLanguage] || sakhi.contemplation.hi,
    cardLanguage,
    sakhi.number
  );

  const handleGenerateAndSave = async (preferShare: boolean = false) => {
    setIsGenerating(true);
    setDownloadSuccessToast(null);

    try {
      const result = await generateQuoteCardCanvas({
        sakhi,
        language: cardLanguage,
        ratio: cardRatio,
        design: cardDesign,
      });

      setGeneratedCard(result);

      if (isBellEnabled) {
        try {
          satyanaamAudio.ringSacredBell();
        } catch {}
      }

      if (preferShare) {
        const status = await downloadOrShareImage(
          result,
          `Saheb World - Sakhi #${sakhi.number}`,
          `।। साहेब बंदगी साहेब ।।\n${sakhi.text[cardLanguage] || sakhi.text.hi}`
        );
        if (status === 'shared') {
          setDownloadSuccessToast(
            cardLanguage === 'hi' ? 'साखी कार्ड साझा / सहेजा गया!' : cardLanguage === 'pb' ? 'ਸਾਖੀ ਕਾਰਡ ਸਾਂਝਾ / ਸੰਭਾਲਿਆ ਗਿਆ!' : 'Card Shared / Saved!'
          );
        } else {
          setDownloadSuccessToast(
            cardLanguage === 'hi' ? 'डाउनलोड शुरू हो गया है!' : cardLanguage === 'pb' ? 'ਡਾਊਨਲੋਡ ਸ਼ੁਰੂ ਹੋ ਗਿਆ!' : 'Download Started!'
          );
        }
      } else {
        // Direct download using clean blob URL
        triggerBlobDownload(result.objectUrl, result.fileName);
        setDownloadSuccessToast(
          cardLanguage === 'hi' ? 'चित्र डाउनलोड हो गया है!' : cardLanguage === 'pb' ? 'ਤਸਵੀਰ ਡਾਊਨਲੋਡ ਹੋ ਗਈ ਹੈ!' : 'Image downloaded!'
        );
      }
    } catch (err: any) {
      console.error('Failed to generate quote card:', err);
    } finally {
      setIsGenerating(false);
      setTimeout(() => setDownloadSuccessToast(null), 5000);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareTextContent);
      setCopiedSuccess(true);
      setDownloadSuccessToast(
        cardLanguage === 'hi' ? 'संपूर्ण साखी पाठ कॉपी हो गया!' : cardLanguage === 'pb' ? 'ਪੂਰਾ ਸਾਖੀ ਪਾਠ ਕਾਪੀ ਹੋ ਗਿਆ!' : 'Full Sakhi text copied!'
      );
      setTimeout(() => {
        setCopiedSuccess(false);
        setDownloadSuccessToast(null);
      }, 3000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  const handleCopyVerseOnly = async () => {
    try {
      const verse = sakhi.text[cardLanguage] || sakhi.text.hi;
      await navigator.clipboard.writeText(verse);
      setCopiedVerseOnly(true);
      setDownloadSuccessToast(
        cardLanguage === 'hi' ? 'केवल मूल साखी कॉपी हो गई!' : cardLanguage === 'pb' ? 'ਕੇਵਲ ਮੂਲ ਸਾਖੀ ਕਾਪੀ ਹੋ ਗਈ!' : 'Verse only copied!'
      );
      setTimeout(() => {
        setCopiedVerseOnly(false);
        setDownloadSuccessToast(null);
      }, 3000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  const handleShareNativeText = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Saheb World - Sakhi #${sakhi.number}`,
          text: shareTextContent,
        });
        setDownloadSuccessToast(
          cardLanguage === 'hi' ? 'साखी संदेश साझा किया गया!' : cardLanguage === 'pb' ? 'ਸਾਖੀ ਸੰਦੇਸ਼ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ!' : 'Sakhi shared!'
        );
        setTimeout(() => setDownloadSuccessToast(null), 3000);
        return;
      } catch (err: any) {
        if (err.name === 'AbortError') return;
      }
    }
    // Fallback to clipboard
    handleCopyText();
  };

  const handleShareWhatsApp = async () => {
    await handleShareNativeText();
  };

  return (
    <div
      id="quote-card-modal-backdrop"
      className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto print:hidden"
    >
      <div
        id="quote-card-modal-container"
        className="bg-white dark:bg-[#1C1712] rounded-3xl border border-amber-500/30 w-full max-w-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/10 dark:border-white/10 bg-amber-50/70 dark:bg-amber-950/40">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300">
              {activeTab === 'image' ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-amber-950 dark:text-amber-100">
                {activeTab === 'image' 
                  ? (t.designerTitle || 'साखी सन्देश कार्ड डिज़ाइनर')
                  : (cardLanguage === 'hi' ? 'साखी टेक्स्ट शेयर व कॉपी' : cardLanguage === 'pb' ? 'ਸਾਖੀ ਟੈਕਸਟ ਸ਼ੇਅਰ ਤੇ ਕਾਪੀ' : 'Share Sakhi as Text')}
              </h3>
              <p className="text-[10px] text-amber-800/70 dark:text-amber-300/70">
                {cardLanguage === 'hi' ? 'चित्र कार्ड व टेक्स्ट सन्देश दोनों उपलब्ध हैं' : 'Both Image Card & Text Formats Available'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Image Card vs Share as Text */}
        <div className="flex border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20 p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('image')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'image'
                ? 'bg-[#8B2500] text-white shadow-md'
                : 'bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>{cardLanguage === 'hi' ? '🖼️ चित्र कार्ड (Image Card)' : cardLanguage === 'pb' ? '🖼️ ਫੋਟੋ ਕਾਰਡ (Image Card)' : '🖼️ Image Card'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'text'
                ? 'bg-[#8B2500] text-white shadow-md'
                : 'bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{cardLanguage === 'hi' ? '📝 टेक्स्ट शेयर (Share as Text)' : cardLanguage === 'pb' ? '📝 ਟੈਕਸਟ ਸ਼ੇਅਰ (Share as Text)' : '📝 Share as Text'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs">
          {/* Language Selector (Always visible on top) */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-amber-500/5 border border-amber-500/15">
            <span className="font-bold text-[11px] text-amber-950 dark:text-amber-200 shrink-0">
              {t.downloadLangLabel || 'भाषा:'}
            </span>
            <div className="flex gap-1 flex-1 max-w-xs">
              {([
                { code: 'hi', label: 'हिन्दी' },
                { code: 'pb', label: 'ਪੰਜਾਬੀ' },
                { code: 'en', label: 'English' },
              ] as const).map((lObj) => (
                <button
                  key={lObj.code}
                  type="button"
                  onClick={() => {
                    setCardLanguage(lObj.code);
                    onLanguageChange?.(lObj.code);
                    setGeneratedCard(null);
                  }}
                  className={`flex-1 py-1.5 px-1 rounded-xl border text-center font-bold text-[10px] transition cursor-pointer ${
                    cardLanguage === lObj.code
                      ? 'bg-[#8B2500] text-white border-amber-600 shadow-sm'
                      : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/10'
                  }`}
                >
                  {lObj.label}
                </button>
              ))}
            </div>
          </div>

          {/* Success Toast */}
          {downloadSuccessToast && (
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center text-xs shadow-md animate-fadeIn flex items-center justify-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>{downloadSuccessToast}</span>
            </div>
          )}

          {/* TAB 1: IMAGE CARD DESIGNER */}
          {activeTab === 'image' && (
            <div className="space-y-4">
              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Theme Style Selector */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-[11px] text-amber-950 dark:text-amber-200">
                    {t.themeStyleLabel || 'थीम शैली:'}
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {themesList.map((th) => (
                      <button
                        key={th.id}
                        type="button"
                        onClick={() => {
                          setCardDesign(th.id as any);
                          setGeneratedCard(null);
                        }}
                        style={{ backgroundColor: th.bg, color: th.text }}
                        className={`p-1.5 rounded-xl border text-center transition cursor-pointer text-[10px] font-bold shadow-xs ${
                          cardDesign === th.id
                            ? 'border-amber-600 ring-2 ring-amber-500/50 scale-[1.02]'
                            : 'border-black/15 dark:border-white/15 hover:opacity-90'
                        }`}
                      >
                        {th.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Aspect Ratio Selector */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-[11px] text-amber-950 dark:text-amber-200">
                    {t.aspectRatioLabel || 'आकार (Ratio):'}
                  </label>
                  <div className="flex gap-1.5">
                    {[
                      { id: '1:1', label: '1:1', sub: 'पोस्ट / DP' },
                      { id: '9:16', label: '9:16', sub: 'स्टेटस / स्टोरी' },
                    ].map((rObj) => (
                      <button
                        key={rObj.id}
                        type="button"
                        onClick={() => {
                          setCardRatio(rObj.id as any);
                          setGeneratedCard(null);
                        }}
                        className={`flex-1 py-1 px-1.5 rounded-xl border text-center transition cursor-pointer ${
                          cardRatio === rObj.id
                            ? 'bg-[#8B2500] text-white border-amber-600 shadow-sm'
                            : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300'
                        }`}
                      >
                        <span className="font-bold block text-[11px]">{rObj.label}</span>
                        <span className="text-[9px] block opacity-85">{rObj.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rendered Preview Card / Generated Image */}
              {generatedCard ? (
                <div className="space-y-2">
                  <div className="rounded-2xl border border-amber-500/30 overflow-hidden shadow-lg bg-black/5 dark:bg-black/40 p-2 text-center">
                    <img
                      src={generatedCard.objectUrl}
                      alt={`Saheb World Sakhi ${sakhi.number}`}
                      className="max-h-[260px] sm:max-h-[320px] mx-auto rounded-xl object-contain shadow-md"
                    />
                  </div>

                  {/* Mobile phone tip */}
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-[11px] flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-snug">
                      {cardLanguage === 'hi'
                        ? 'मोबाइल टिप: यदि फ़ोन में डाउनलोड न हो, तो ऊपर दिए गए चित्र को २ सेकंड दबाकर रखें (Long Press) और "Save Image" (फ़ोटो सहेजें) पर टैप करें।'
                        : cardLanguage === 'pb'
                        ? 'ਮੋਬਾਈਲ ਸੁਝਾਅ: ਜੇਕਰ ਫੋਨ ਵਿੱਚ ਡਾਊਨਲੋਡ ਨਾ ਹੋਵੇ, ਤਾਂ ਉੱਪਰ ਤਸਵੀਰ ਨੂੰ ਦਬਾ ਕੇ ਰੱਖੋ (Long Press) ਅਤੇ "Save Image" ਚੁਣੋ।'
                        : 'Mobile tip: If auto-download is restricted on your phone, simply long-press the preview above and choose "Save Image".'}
                    </p>
                  </div>
                </div>
              ) : (
                /* Live CSS Card Preview */
                <div
                  className="p-4 sm:p-6 rounded-2xl border text-center relative overflow-hidden transition-all duration-300 shadow-md flex flex-col justify-start gap-3"
                  style={{
                    backgroundColor: currentTheme.bg,
                    borderColor: currentTheme.accent,
                    color: currentTheme.text,
                  }}
                >
                  {/* Header preview */}
                  <div className="space-y-1">
                    <span
                      style={{ color: currentTheme.secondary }}
                      className="text-sm sm:text-base font-bold tracking-widest font-serif block"
                    >
                      {SACRED_BRANDING.header[cardLanguage]}
                    </span>
                    <span
                      style={{ color: currentTheme.accent }}
                      className="text-xs font-bold font-serif block opacity-90"
                    >
                      {translations[cardLanguage].bandichhorLabel}
                    </span>
                    <div
                      style={{ backgroundColor: currentTheme.accent }}
                      className="w-24 h-[1.5px] mx-auto opacity-50 my-1"
                    />
                  </div>

                  {/* Couplet Body Preview */}
                  <div className="space-y-1.5 py-1">
                    <span
                      style={{ color: currentTheme.accent }}
                      className="text-[10px] font-mono font-bold tracking-wider uppercase block"
                    >
                      {cardLanguage === 'pb'
                        ? `ਸਾਖੀ #${sakhi.number} • ${getLocalizedGranthaName(sakhi.grantha, 'pb')}`
                        : cardLanguage === 'en'
                        ? `Sakhi #${sakhi.number} • ${getLocalizedGranthaName(sakhi.grantha, 'en')}`
                        : `साखी #${sakhi.number} • ${getLocalizedGranthaName(sakhi.grantha, 'hi')}`}
                    </span>
                    {formatCoupletString(sakhi.text[cardLanguage] || sakhi.text.hi).split('\n').map((line, idx) => (
                      <p
                        key={idx}
                        style={{ color: currentTheme.secondary }}
                        className="font-serif font-black leading-relaxed text-sm sm:text-base"
                      >
                        {line.trim()}
                      </p>
                    ))}
                  </div>

                  {/* Bhavarth Box Preview */}
                  <div
                    style={{
                      borderColor: currentTheme.accent,
                      backgroundColor: cardDesign === 'oled' ? '#1F1F1F' : 'rgba(184, 120, 40, 0.05)',
                    }}
                    className="p-2.5 rounded-xl border text-left text-[11px] leading-relaxed"
                  >
                    <span
                      style={{ color: currentTheme.accent }}
                      className="font-bold block text-[10px] uppercase tracking-wider mb-0.5"
                    >
                      {translations[cardLanguage].bhavarthLabel}
                    </span>
                    <p className="line-clamp-3 font-serif opacity-90">
                      {ensureSatguruKabirSaheb(sakhi.bhavarth[cardLanguage] || sakhi.bhavarth.hi)}
                    </p>
                  </div>

                  {/* Footer Preview */}
                  <div
                    style={{ borderColor: currentTheme.accent }}
                    className="pt-2 border-t border-dashed opacity-80 flex items-center justify-between text-[10px] font-serif"
                  >
                    <span style={{ color: currentTheme.accent }} className="font-bold">
                      {SACRED_BRANDING.footer[cardLanguage]}
                    </span>
                    <span style={{ color: currentTheme.accent }}>
                      {translations[cardLanguage].appName}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons for Image */}
              <div className="space-y-2 pt-1">
                {generatedCard ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* 1. Share / Gallery Button (Mobile Native) */}
                    <button
                      type="button"
                      onClick={() => handleGenerateAndSave(true)}
                      disabled={isGenerating}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>
                        {cardLanguage === 'hi'
                          ? '📱 गैलरी में सहेजें / शेयर करें'
                          : cardLanguage === 'pb'
                          ? '📱 ਗੈਲਰੀ ਵਿੱਚ ਸੰਭਾਲੋ / ਸ਼ੇਅਰ ਕਰੋ'
                          : '📱 Save to Gallery / Share'}
                      </span>
                    </button>

                    {/* 2. Direct Download Button */}
                    <button
                      type="button"
                      onClick={() => triggerBlobDownload(generatedCard.objectUrl, generatedCard.fileName)}
                      className="flex-1 py-3 px-4 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15 text-neutral-900 dark:text-neutral-100 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
                    >
                      <Download className="w-4 h-4 text-amber-600" />
                      <span>
                        {cardLanguage === 'hi'
                          ? '⬇️ सीधा डाउनलोड'
                          : cardLanguage === 'pb'
                          ? '⬇️ ਸਿੱਧਾ ਡਾਊਨਲੋਡ'
                          : '⬇️ Direct Download'}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Primary Button: Generates & Downloads / Shares */}
                    <button
                      type="button"
                      onClick={() => handleGenerateAndSave(true)}
                      disabled={isGenerating}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>चित्र तैयार हो रहा है...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>
                            {cardLanguage === 'hi'
                              ? 'चित्र तैयार व डाउनलोड करें (Download Card)'
                              : cardLanguage === 'pb'
                              ? 'ਤਸਵੀਰ ਡਾਊਨਲੋਡ ਕਰੋ (Download Card)'
                              : 'Generate & Download Card'}
                          </span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('text')}
                      className="py-3 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
                    >
                      <FileText className="w-4 h-4 text-amber-600" />
                      <span>
                        {cardLanguage === 'hi' ? '📝 टेक्स्ट के रूप में शेयर करें' : cardLanguage === 'pb' ? '📝 ਟੈਕਸਟ ਸ਼ੇਅਰ ਕਰੋ' : '📝 Share as Text'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SHARE AS TEXT (पाठ / टेक्स्ट सन्देश) */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              {/* Formatted Text Box Preview */}
              <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-3 font-serif">
                <div className="flex items-center justify-between pb-2 border-b border-amber-500/20 text-[11px] text-amber-900/80 dark:text-amber-200/80 font-bold">
                  <span>{SACRED_BRANDING.header[cardLanguage]}</span>
                  <span>साखी #{sakhi.number}</span>
                </div>

                {/* Verse */}
                <div className="text-sm sm:text-base font-bold text-amber-950 dark:text-amber-100 whitespace-pre-line leading-relaxed">
                  {sakhi.text[cardLanguage] || sakhi.text.hi}
                </div>

                {/* Bhavarth */}
                <div className="pt-2 border-t border-amber-500/10 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase block">
                    ।। {translations[cardLanguage].bhavarthLabel} ।।
                  </span>
                  <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    {sakhi.bhavarth[cardLanguage] || sakhi.bhavarth.hi}
                  </p>
                </div>

                {/* Contemplation */}
                <div className="pt-2 border-t border-amber-500/10 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase block">
                    ।। {cardLanguage === 'pb' ? 'ਆਤਮ-ਚਿੰਤਨ' : cardLanguage === 'en' ? 'Self-Inquiry' : 'आत्म-चिंतन'} ।।
                  </span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                    {sakhi.contemplation[cardLanguage] || sakhi.contemplation.hi}
                  </p>
                </div>

                <div className="pt-2 border-t border-dashed border-amber-500/20 text-[10px] text-amber-800/70 dark:text-amber-300/70 flex justify-between">
                  <span>{SACRED_BRANDING.footer[cardLanguage]}</span>
                  <span>{translations[cardLanguage].appName}</span>
                </div>
              </div>

              {/* Text Sharing Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {/* 1. Share via WhatsApp */}
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {cardLanguage === 'hi' ? 'WhatsApp पर शेयर करें' : cardLanguage === 'pb' ? 'WhatsApp ਤੇ ਸ਼ੇਅਰ ਕਰੋ' : 'Share on WhatsApp'}
                  </span>
                </button>

                {/* 2. Native Share (Apps / Social Media) */}
                <button
                  type="button"
                  onClick={handleShareNativeText}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>
                    {cardLanguage === 'hi' ? '📱 अन्य ऐप्स पर शेयर करें' : cardLanguage === 'pb' ? '📱 ਹੋਰ ਐਪਸ ਤੇ ਸ਼ੇਅਰ ਕਰੋ' : '📱 Share to Any App'}
                  </span>
                </button>

                {/* 3. Copy Full Text */}
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="py-2.5 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-neutral-100 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
                >
                  {copiedSuccess ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
                  <span>
                    {copiedSuccess 
                      ? (cardLanguage === 'hi' ? 'कॉपी हो गया!' : 'Copied!')
                      : (cardLanguage === 'hi' ? '📋 संपूर्ण पाठ कॉपी करें' : cardLanguage === 'pb' ? '📋 ਪੂਰਾ ਪਾਠ ਕਾਪੀ ਕਰੋ' : '📋 Copy Full Text')}
                  </span>
                </button>

                {/* 4. Copy Verse Only */}
                <button
                  type="button"
                  onClick={handleCopyVerseOnly}
                  className="py-2.5 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-neutral-100 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
                >
                  {copiedVerseOnly ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
                  <span>
                    {copiedVerseOnly 
                      ? (cardLanguage === 'hi' ? 'साखी कॉपी हो गई!' : 'Verse Copied!')
                      : (cardLanguage === 'hi' ? '📑 केवल मूल साखी कॉपी करें' : cardLanguage === 'pb' ? '📑 ਕੇਵਲ ਮੂਲ ਸਾਖੀ ਕਾਪੀ ਕਰੋ' : '📑 Copy Verse Only')}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
