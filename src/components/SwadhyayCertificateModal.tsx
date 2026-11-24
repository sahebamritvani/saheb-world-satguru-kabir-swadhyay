import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, Printer, CheckCircle2, Loader2, AlertCircle, User, Download, Share2 } from 'lucide-react';
import { Language, Sakhi, SACRED_BRANDING } from '../types';
import confetti from 'canvas-confetti';
import { sacredHaptics } from '../services/haptics';
import { auth } from '../lib/firebase';
import { buildThemeOneLineBlessing } from '../services/swadhyayElevenSteps';
import {
  formatCertificateSakhiDoha,
  formatCertificateSeekerName,
  formatCertificateSourceLabel,
  generateCertificateCanvas,
  getCertificateFooterBrand,
  getCertificateTitle,
  loadLocalLogoAsBase64,
  printCertificateSafely,
} from '../services/certificateGenerator';

const SEEKER_NAME_STORAGE_KEY = 'sahebworld_seeker_name';

interface SwadhyayCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  sakhi: Sakhi;
  language: Language;
  themeBlessing?: string;
}

export const SwadhyayCertificateModal: React.FC<SwadhyayCertificateModalProps> = ({
  isOpen,
  onClose,
  sakhi,
  language,
  themeBlessing,
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>('/Saheb_World_icon.jpg');
  const [swaroopImgError, setSwaroopImgError] = useState(false);
  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(SEEKER_NAME_STORAGE_KEY);
      if (saved && saved.trim()) return saved.trim();
    }
    if (auth?.currentUser?.displayName) {
      return auth.currentUser.displayName;
    }
    return '';
  });
  const [statusNotice, setStatusNotice] = useState<{
    type: 'success' | 'info';
    text: string;
  } | null>(null);

  // Pre-convert local Satguru Kabir Saheb logo into inline Base64 Data URL so html-to-image PNG never renders a blank logo
  useEffect(() => {
    let cancelled = false;
    if (!isOpen) return;

    loadLocalLogoAsBase64()
      .then((base64) => {
        if (!cancelled && base64) {
          setLogoSrc(base64);
          setSwaroopImgError(false);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !userName && auth?.currentUser?.displayName) {
      setUserName(auth.currentUser.displayName);
    }
  }, [isOpen, userName]);

  const handleUserNameChange = (val: string) => {
    setUserName(val);
    try {
      localStorage.setItem(SEEKER_NAME_STORAGE_KEY, val);
    } catch {}
  };

  if (!isOpen) return null;

  const formattedSeekerName = formatCertificateSeekerName(userName, language);

  const rawBlessing =
    (themeBlessing && themeBlessing.trim()) || buildThemeOneLineBlessing(sakhi, language);
  const cleanBlessing = rawBlessing.replace(/^["“]|["”]$/g, '').trim();

  const activeMoolSakhi = formatCertificateSakhiDoha(
    sakhi.text[language] || sakhi.text.hi || '',
    language
  );
  const localizedSourceLabel = formatCertificateSourceLabel(sakhi, language);
  const certificateTitle = getCertificateTitle(language);
  const certificateFooterBrand = getCertificateFooterBrand(language);
  const pngFileName = `Saheb_World_Sakhi_${sakhi.number}_Certificate.png`;

  const renderOptions = {
    userName: userName.trim(),
    themeBlessing: cleanBlessing,
  };

  const showNotice = (type: 'success' | 'info', text: string) => {
    setStatusNotice({ type, text });
    setTimeout(() => {
      setStatusNotice(null);
    }, 5500);
  };

  /**
   * Generates a pristine, high-resolution PNG certificate data URL via robust Canvas 2D rendering.
   */
  const captureCertificatePngDataUrl = async (_pixelRatio?: number): Promise<string> => {
    const canvasCert = await generateCertificateCanvas(sakhi, language, renderOptions);
    return canvasCert.dataUrl;
  };

  const triggerPngDownload = (dataUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 1. High-resolution PNG Certificate Download (pixelRatio: 3)
  const handleDownload = async () => {
    if (isDownloading) return;
    sacredHaptics.mediumTap();
    setIsDownloading(true);

    try {
      const dataUrl = await captureCertificatePngDataUrl(3);
      triggerPngDownload(dataUrl, pngFileName);

      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
        });
      } catch {}

      const msg =
        language === 'pb'
          ? `ਪ੍ਰਮਾਣ-ਪੱਤਰ (${pngFileName}) ਤੁਹਾਡੇ ਡਿਵਾਈਸ ਵਿੱਚ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ ਹੈ।`
          : language === 'en'
          ? `Certificate (${pngFileName}) downloaded successfully!`
          : `प्रमाण-पत्र (${pngFileName}) आपके डिवाइस में सफलतापूर्वक डाउनलोड हो गया है!`;
      showNotice('success', msg);
    } catch {
      const fallbackMsg =
        language === 'pb'
          ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਡਾਊਨਲੋਡ ਕਰਨ ਵਿੱਚ ਸਮੱਸਿਆ ਆਈ, ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।'
          : language === 'en'
          ? 'Could not download certificate image here. Please try Print.'
          : 'प्रमाण-पत्र डाउनलोड करने में समस्या हुई, कृपया पुनः प्रयास करें।';
      showNotice('info', fallbackMsg);
    } finally {
      setIsDownloading(false);
    }
  };

  // 2. One-Tap Share / Download PNG Certificate Image
  const handleShare = async () => {
    if (isSharing) return;
    sacredHaptics.mediumTap();
    setIsSharing(true);

    const sacredHead = SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi;
    const sacredFoot = SACRED_BRANDING.footer[language] || SACRED_BRANDING.footer.hi;
    const shareText =
      language === 'pb'
        ? `${sacredHead}\n${certificateTitle}\nਇਹ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਕਿ ${formattedSeekerName} ਨੇ ਸਾਖੀ #${sakhi.number} (${localizedSourceLabel}) ਦਾ ੧੧-ਚਰਣੀ ਸ੍ਵਾਧਿਆਇ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।\n\n"${activeMoolSakhi}"\n\n"${cleanBlessing}"\n${certificateFooterBrand}\n${sacredFoot}`
        : language === 'en'
        ? `${sacredHead}\n${certificateTitle}\nThis certifies that ${formattedSeekerName} has successfully completed the 11-Step Swadhyay of Sakhi #${sakhi.number} (${localizedSourceLabel}).\n\n"${activeMoolSakhi}"\n\n"${cleanBlessing}"\n${certificateFooterBrand}\n${sacredFoot}`
        : `${sacredHead}\n${certificateTitle}\nयह प्रमाणित किया जाता है कि ${formattedSeekerName} ने साखी #${sakhi.number} (${localizedSourceLabel}) का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।\n\n"${activeMoolSakhi}"\n\n"${cleanBlessing}"\n${certificateFooterBrand}\n${sacredFoot}`;

    try {
      const dataUrl = await captureCertificatePngDataUrl(2);
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], pngFileName, { type: 'image/png' });

      if (
        typeof navigator !== 'undefined' &&
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: certificateTitle,
          text: shareText,
          files: [file],
        });
        try {
          confetti({
            particleCount: 100,
            spread: 85,
            origin: { y: 0.5 },
          });
        } catch {}
        showNotice(
          'success',
          language === 'pb'
            ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਇਮੇਜ ਸਫਲਤਾਪੂਰਵਕ ਸਾਂਝੀ ਕੀਤੀ ਗਈ!'
            : language === 'en'
            ? 'Certificate image shared successfully!'
            : 'प्रमाण-पत्र इमेज सफलतापूर्वक शेयर की गई!'
        );
        return;
      }

      // Direct file sharing unsupported on desktop browser -> automatic PNG download
      triggerPngDownload(dataUrl, pngFileName);
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
        });
      } catch {}
      showNotice(
        'success',
        language === 'pb'
          ? `ਪ੍ਰਮਾਣ-ਪੱਤਰ ਇਮੇਜ (${pngFileName}) ਡਾਊਨਲੋਡ ਹੋ ਗਈ ਹੈ — ਹੁਣ ਤੁਸੀਂ ਇਸਨੂੰ ਆਸਾਨੀ ਨਾਲ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹੋ!`
          : language === 'en'
          ? `Certificate image (${pngFileName}) downloaded — ready to share!`
          : `प्रमाण-पत्र इमेज (${pngFileName}) डाउनलोड हो गई है — अब आप इसे WhatsApp या अन्य माध्यम से शेयर कर सकते हैं!`
      );
    } catch (err: any) {
      if (err?.name === 'AbortError') return;
      try {
        await handleDownload();
      } catch {}
    } finally {
      setIsSharing(false);
    }
  };

  const handlePrint = async () => {
    if (isPrinting) return;
    sacredHaptics.mediumTap();
    setIsPrinting(true);

    try {
      const result = await printCertificateSafely(sakhi, language, renderOptions);
      if (result === 'fallback') {
        showNotice(
          'info',
          language === 'pb'
            ? 'ਪ੍ਰਿੰਟ ਵਿੰਡੋ ਬਲਾਕ ਹੈ — ਕਿਰਪਾ ਕਰਕੇ "ਡਾਊਨਲੋਡ" ਬਟਨ ਦੀ ਵਰਤੋਂ ਕਰੋ।'
            : language === 'en'
            ? 'Print preview is restricted here — please use Download instead.'
            : 'यहाँ प्रिंट प्रीव्यू सीमित है — कृपया "प्रमाण-पत्र डाउनलोड करें" बटन का उपयोग करें।'
        );
      }
    } catch {
      showNotice(
        'info',
        language === 'pb'
          ? 'ਪ੍ਰਿੰਟ ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਇਮੇਜ ਡਾਊਨਲੋਡ ਕਰੋ।'
          : language === 'en'
          ? 'Printing unavailable here; please use Download.'
          : 'प्रिंट उपलब्ध नहीं है, कृपया प्रमाण-पत्र डाउनलोड करें।'
      );
    } finally {
      setIsPrinting(false);
    }
  };

  const formattedDate = new Intl.DateTimeFormat(
    language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  ).format(new Date());

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#FFFDF9] dark:bg-[#1A1510] text-[#2C1E11] dark:text-[#F7F1E3] rounded-3xl shadow-2xl border-4 border-[#D97706] p-4 sm:p-8 space-y-4 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 transition cursor-pointer"
            title="Close"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Seeker Name Personalization Input */}
          <div className="pr-11">
            <label
              htmlFor="certificate-seeker-name"
              className="block text-xs font-serif font-bold text-amber-900 dark:text-amber-300 mb-1.5"
            >
              {language === 'pb'
                ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਉੱਤੇ ਸਾਧਕ ਦਾ ਨਾਮ (ਸੋਧਣਯੋਗ):'
                : language === 'en'
                ? 'Seeker Name on Certificate:'
                : 'प्रमाण-पत्र पर साधक का नाम:'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-amber-700 dark:text-amber-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="certificate-seeker-name"
                type="text"
                value={userName}
                onChange={(e) => handleUserNameChange(e.target.value)}
                placeholder={
                  language === 'pb'
                    ? 'ਆਪਣਾ ਨਾਮ ਲਿਖੋ (ਜਿਵੇਂ: ਹਰਪ੍ਰੀਤ ਸਿੰਘ)'
                    : language === 'en'
                    ? 'Enter your full name for certificate'
                    : 'अपना शुभ नाम लिखें (जैसे: सुरेन्द्र सिंह)'
                }
                maxLength={60}
                className="w-full min-h-[44px] pl-9 pr-3 py-2 rounded-xl border border-amber-500/40 bg-white/90 dark:bg-stone-900/70 text-sm font-serif font-bold text-stone-900 dark:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Certificate Content Frame — Royal Spiritual Scroll (#FFFDF7, double #D97706 / #6B1D1D border) */}
          <div
            ref={certificateRef}
            style={{ backgroundColor: '#FFFDF7', color: '#2C1E11' }}
            className="certificate-print-area p-2 sm:p-2.5 rounded-2xl border-2 border-[#D97706] bg-gradient-to-b from-[#FFFDF7] via-[#FAF3E6] to-[#FFF7E8] text-[#2C1E11] shadow-inner relative"
          >
            <div className="px-4 py-6 sm:px-8 sm:py-8 rounded-xl border-2 border-[#6B1D1D]/75 text-center space-y-5 relative overflow-hidden">
              {/* Corner Decorative Ornaments */}
              <div className="absolute top-2 left-2.5 text-[#D97706] text-lg select-none" aria-hidden="true">❖</div>
              <div className="absolute top-2 right-2.5 text-[#D97706] text-lg select-none" aria-hidden="true">❖</div>
              <div className="absolute bottom-2 left-2.5 text-[#D97706] text-lg select-none" aria-hidden="true">❖</div>
              <div className="absolute bottom-2 right-2.5 text-[#D97706] text-lg select-none" aria-hidden="true">❖</div>

              {/* Single Centered Sacred Invocation + Official Title */}
              <div className="text-center w-full space-y-2 pb-3 border-b border-[#D97706]/35">
                <p className="text-amber-800 font-serif font-black tracking-wide text-lg sm:text-xl whitespace-nowrap">
                  {SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-serif text-[#6B1D1D] tracking-wide leading-snug [word-break:keep-all] [overflow-wrap:break-word]">
                  {certificateTitle}
                </h2>
              </div>

              {/* Official Saheb World Emblem (Satguru Kabir Saheb Portrait) */}
              <div className="flex justify-center py-1">
                {!swaroopImgError ? (
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#6B1D1D] via-[#D97706] to-amber-400 shadow-lg ring-4 ring-amber-500/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={logoSrc}
                        alt="Satguru Kabir Saheb Logo"
                        crossOrigin="anonymous"
                        onError={() => {
                          if (logoSrc !== '/icon.png') {
                            setLogoSrc('/icon.png');
                          } else {
                            setSwaroopImgError(true);
                          }
                        }}
                        className="w-full h-full object-cover scale-[1.12]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6B1D1D] to-[#D97706] text-white flex items-center justify-center shadow-lg border-2 border-amber-300">
                    <Award className="w-11 h-11" />
                  </div>
                )}
              </div>

              {/* Recipient Line & Localized Granth Source */}
              <div className="space-y-4 text-center font-serif leading-relaxed px-1 sm:px-3">
                <div className="space-y-1.5">
                  <p className="text-base sm:text-lg font-bold text-[#2C1E11] [word-break:keep-all] [overflow-wrap:break-word]">
                    {language === 'pb' ? (
                      <>
                        ਇਹ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਕਿ{' '}
                        <span className="text-[#6B1D1D] underline decoration-[#D97706]/80 underline-offset-4 font-black">
                          {formattedSeekerName}
                        </span>{' '}
                        ਨੇ ਸਾਖੀ #{sakhi.number} ਦਾ ੧੧-ਚਰਣੀ ਸ੍ਵਾਧਿਆਇ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।
                      </>
                    ) : language === 'en' ? (
                      <>
                        This certifies that{' '}
                        <span className="text-[#6B1D1D] underline decoration-[#D97706]/80 underline-offset-4 font-black">
                          {formattedSeekerName}
                        </span>{' '}
                        has successfully completed the 11-Step Swadhyay of Sakhi #{sakhi.number}.
                      </>
                    ) : (
                      <>
                        यह प्रमाणित किया जाता है कि{' '}
                        <span className="text-[#6B1D1D] underline decoration-[#D97706]/80 underline-offset-4 font-black">
                          {formattedSeekerName}
                        </span>{' '}
                        ने साखी #{sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।
                      </>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm font-sans font-bold text-[#6B1D1D]/85">
                    {localizedSourceLabel}
                  </p>
                </div>

                {/* Highlighted Sacred Original Sakhi Inner Box — Clean 2-Line Doha */}
                <div className="px-4 py-4 sm:px-6 sm:py-5 rounded-xl bg-amber-500/10 border-2 border-[#D97706]/60 ring-1 ring-[#6B1D1D]/20 space-y-2 shadow-xs">
                  <p className="text-xs font-sans font-bold tracking-wider text-amber-900">
                    {language === 'pb'
                      ? '✦ ਪਾਵਨ ਮੂਲ ਸਾਖੀ ✦'
                      : language === 'en'
                      ? '✦ Sacred Original Sakhi ✦'
                      : '✦ पावन मूल साखी ✦'}
                  </p>
                  <p className="font-serif font-bold text-base sm:text-xl text-[#6B1D1D] whitespace-pre-line leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]">
                    {activeMoolSakhi || `साखी #${sakhi.number}`}
                  </p>
                </div>

                {/* 1-Line Theme-Based Blessing Below the Sakhi */}
                <p className="text-sm sm:text-base font-serif italic font-semibold text-[#5C2410] leading-snug px-2">
                  &ldquo;{cleanBlessing}&rdquo;
                </p>

                <p className="text-xs sm:text-sm font-sans font-semibold text-amber-950/80 pt-0.5">
                  {language === 'pb' ? `ਮਿਤੀ: ${formattedDate}` : language === 'en' ? `Date: ${formattedDate}` : `दिनांक: ${formattedDate}`}
                </p>
              </div>

              {/* Bottom Footer - Strictly separated Brand + Closing Salutation */}
              <div className="text-center w-full pt-3.5 border-t border-[#6B1D1D]/25 space-y-1.5">
                <p className="text-xs sm:text-sm font-sans font-bold text-amber-900/90 tracking-wide">
                  {certificateFooterBrand}
                </p>
                <span className="block font-bold font-serif text-[#6B1D1D] text-xl sm:text-2xl tracking-wide">
                  {SACRED_BRANDING.footer[language] || SACRED_BRANDING.footer.hi}
                </span>
              </div>
            </div>
          </div>

          {/* Non-intrusive Status / Download Confirmation */}
          {statusNotice && (
            <div
              role="status"
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-serif font-semibold border ${
                statusNotice.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/40 text-emerald-900 dark:text-emerald-200'
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-500/40 text-amber-950 dark:text-amber-200'
              }`}
            >
              {statusNotice.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
              )}
              <span>{statusNotice.text}</span>
            </div>
          )}

          {/* Prominent One-Tap Download & Share Certificate Image CTA */}
          <div className="pt-1 space-y-3">
            <button
              type="button"
              onClick={handleShare}
              disabled={isSharing || isDownloading}
              className="w-full min-h-[50px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#6B1D1D] via-[#8C2818] to-[#B45309] hover:opacity-95 disabled:opacity-60 text-white font-serif font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2.5 cursor-pointer transition active:scale-[0.99]"
            >
              {isSharing ? (
                <Loader2 className="w-5 h-5 animate-spin shrink-0" />
              ) : (
                <Share2 className="w-5 h-5 shrink-0" />
              )}
              <span className="leading-snug text-center">
                {language === 'pb'
                  ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਡਾਊਨਲੋਡ / ਸ਼ੇਅਰ ਕਰੋ (Download & Share Certificate Image)'
                  : language === 'en'
                  ? 'Download & Share Certificate Image'
                  : 'प्रमाण-पत्र डाउनलोड / शेयर करें (Download & Share Certificate Image)'}
              </span>
            </button>

            {/* Secondary Utility Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 disabled:opacity-60 text-white font-serif font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>
                  {language === 'pb'
                    ? 'PNG ਸੇਵ ਕਰੋ'
                    : language === 'en'
                    ? 'Save PNG'
                    : 'PNG डाउनलोड करें'}
                </span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                disabled={isPrinting}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-900 dark:text-amber-200 font-serif font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0"
              >
                {isPrinting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Printer className="w-4 h-4" />
                )}
                <span>
                  {language === 'pb'
                    ? 'ਪ੍ਰਿੰਟ ਕਰੋ'
                    : language === 'en'
                    ? 'Print'
                    : 'प्रिंट करें'}
                </span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 font-serif font-bold text-xs sm:text-sm text-stone-700 dark:text-stone-300 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer whitespace-nowrap shrink-0"
              >
                {language === 'pb'
                  ? 'ਬੰਦ ਕਰੋ'
                  : language === 'en'
                  ? 'Close'
                  : 'बंद करें'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
