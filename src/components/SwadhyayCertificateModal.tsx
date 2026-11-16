import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Share2, X, Printer, Download, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Language, Sakhi } from '../types';
import confetti from 'canvas-confetti';
import { sacredHaptics } from '../services/haptics';
import {
  downloadCertificatePdf,
  generateCertificateCanvas,
  printCertificateSafely,
} from '../services/certificateGenerator';

interface SwadhyayCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  sakhi: Sakhi;
  language: Language;
}

export const SwadhyayCertificateModal: React.FC<SwadhyayCertificateModalProps> = ({
  isOpen,
  onClose,
  sakhi,
  language,
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [swaroopImgError, setSwaroopImgError] = useState(false);
  const [statusNotice, setStatusNotice] = useState<{
    type: 'success' | 'info';
    text: string;
  } | null>(null);

  if (!isOpen) return null;

  const showNotice = (type: 'success' | 'info', text: string) => {
    setStatusNotice({ type, text });
    setTimeout(() => {
      setStatusNotice(null);
    }, 5000);
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    sacredHaptics.mediumTap();
    setIsDownloading(true);

    try {
      const result = await downloadCertificatePdf(sakhi, language);

      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
        });
      } catch {}

      const msg =
        language === 'pb'
          ? `ਪ੍ਰਮਾਣ-ਪੱਤਰ (${result.fileName}) ਤੁਹਾਡੇ Downloads ਫੋਲਡਰ ਵਿੱਚ ਸੇਵ ਹੋ ਗਿਆ ਹੈ।`
          : language === 'en'
          ? `Certificate (${result.fileName}) saved to your Downloads folder.`
          : `प्रमाण-पत्र (${result.fileName}) आपके डिवाइस के Downloads फोल्डर में सेव हो गया है।`;
      showNotice('success', msg);
    } catch {
      const fallbackMsg =
        language === 'pb'
          ? 'ਡਾਊਨਲੋਡ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋ ਸਕਿਆ, ਕਿਰਪਾ ਕਰਕੇ ਪ੍ਰਿੰਟ ਜਾਂ ਸਾਂਝਾ ਕਰੋ ਬਟਨ ਵਰਤੋ।'
          : language === 'en'
          ? 'Download could not start in this view. Try Print or Share instead.'
          : 'इस ब्राउज़र व्यू में डाउनलोड शुरू नहीं हो सका। कृपया प्रिंट या साझा करें बटन का उपयोग करें।';
      showNotice('info', fallbackMsg);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = async () => {
    if (isPrinting) return;
    sacredHaptics.mediumTap();
    setIsPrinting(true);

    try {
      const result = await printCertificateSafely(sakhi, language);
      if (result === 'fallback') {
        showNotice(
          'info',
          language === 'pb'
            ? 'ਪ੍ਰਿੰਟ ਵਿੰਡੋ ਬਲਾਕ ਹੈ — ਕਿਰਪਾ ਕਰਕੇ "ਡਾਊਨਲੋਡ PDF" ਬਟਨ ਦੀ ਵਰਤੋਂ ਕਰੋ।'
            : language === 'en'
            ? 'Print preview is restricted here — please use "Download PDF" to save and print.'
            : 'यहाँ प्रिंट प्रीव्यू सीमित है — कृपया "डाउनलोड PDF" बटन से सेव करके प्रिंट करें।'
        );
      }
    } catch {
      showNotice(
        'info',
        language === 'pb'
          ? 'ਪ੍ਰਿੰਟ ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ PDF ਡਾਊਨਲੋਡ ਕਰੋ।'
          : language === 'en'
          ? 'Printing unavailable here; please use Download PDF.'
          : 'प्रिंट उपलब्ध नहीं है, कृपया PDF डाउनलोड करें।'
      );
    } finally {
      setIsPrinting(false);
    }
  };

  const handleShare = async () => {
    sacredHaptics.lightTap();
    const activeVani = (sakhi.text[language] || sakhi.text.hi || '').trim();
    const shareText = `।।सत्यनाम।।\n📜 सतगुरु कबीर साहेब पावन स्वाध्याय सिद्धि प्रमाण-पत्र\nसाखी #${sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।\n"पूरन भये मनोरथा, सतगुरु दई लखाय।\nकहैं कबीर सो हंस जन, अमरलोक में जाय।।"${activeVani ? `\n\n${activeVani}` : ''}\n\n।।साहेब बंदगी साहेब।।`;

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        // Attempt sharing certificate image + text if supported
        try {
          const generated = await generateCertificateCanvas(sakhi, language);
          const file = new File([generated.blob], generated.fileNamePng, {
            type: 'image/png',
          });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: 'Satguru Kabir Saheb Swadhyay Certificate',
              text: shareText,
              files: [file],
            });
            showNotice(
              'success',
              language === 'pb'
                ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ!'
                : language === 'en'
                ? 'Certificate shared successfully!'
                : 'प्रमाण-पत्र सफलतापूर्वक साझा किया गया!'
            );
            return;
          }
        } catch (fileErr: any) {
          if (fileErr?.name === 'AbortError') return;
        }

        await navigator.share({
          title: 'Satguru Kabir Saheb Swadhyay Certificate',
          text: shareText,
        });
        showNotice(
          'success',
          language === 'pb'
            ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ!'
            : language === 'en'
            ? 'Certificate shared!'
            : 'प्रमाण-पत्र साझा किया गया!'
        );
        return;
      }
    } catch (err: any) {
      if (err?.name === 'AbortError') return;
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        showNotice(
          'success',
          language === 'pb'
            ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਸੁਨੇਹਾ ਕਾਪੀ ਹੋ ਗਿਆ!'
            : language === 'en'
            ? 'Certificate message copied to clipboard!'
            : 'प्रमाण-पत्र संदेश कॉपी हो गया है! अब आप इसे WhatsApp पर भेज सकते हैं।'
        );
        return;
      }
    } catch {}

    showNotice(
      'info',
      language === 'pb'
        ? 'ਕਿਰਪਾ ਕਰਕੇ "ਡਾਊਨਲੋਡ PDF" ਰਾਹੀਂ ਸੇਵ ਕਰਕੇ ਸਾਂਝਾ ਕਰੋ।'
        : language === 'en'
        ? 'Please use Download PDF to save and share the file.'
        : 'कृपया "डाउनलोड PDF" द्वारा फ़ाइल सेव करके साझा करें।'
    );
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
          className="relative w-full max-w-2xl bg-[#FFFDF9] dark:bg-[#1A1510] text-[#2C1E11] dark:text-[#F7F1E3] rounded-3xl shadow-2xl border-4 border-[#D97706] p-4 sm:p-8 space-y-5 my-auto"
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

          {/* Certificate Content Frame (Printable Preview Target) */}
          <div
            ref={certificateRef}
            className="certificate-print-area px-5 py-6 sm:px-8 sm:py-8 rounded-2xl border-2 border-double border-amber-600/50 bg-gradient-to-b from-[#FFFDF8] via-[#FAF3E6] to-[#FFF6E3] dark:from-[#201A14] dark:via-[#1A140E] dark:to-[#16100A] text-center space-y-5 shadow-inner relative overflow-hidden"
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2.5 left-2.5 text-amber-700/45 text-xl select-none">❖</div>
            <div className="absolute top-2.5 right-2.5 text-amber-700/45 text-xl select-none">❖</div>
            <div className="absolute bottom-2.5 left-2.5 text-amber-700/45 text-xl select-none">❖</div>
            <div className="absolute bottom-2.5 right-2.5 text-amber-700/45 text-xl select-none">❖</div>

            {/* Top Sacred Heading - Centered */}
            <div className="text-center w-full space-y-2 pb-3 border-b border-amber-600/25">
              <p className="text-amber-800 dark:text-amber-400 font-serif font-black tracking-widest text-base sm:text-lg">
                ।।सत्यनाम।।
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-serif text-[#8C2818] dark:text-amber-300 tracking-wide leading-snug [word-break:keep-all] [overflow-wrap:break-word]">
                {language === 'pb'
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸਵਾਧਿਆਏ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ'
                  : language === 'en'
                  ? 'Satguru Kabir Saheb Sacred Swadhyay Certificate'
                  : 'सतगुरु कबीर साहेब पावन स्वाध्याय सिद्धि प्रमाण-पत्र'}
              </h2>
            </div>

            {/* Satguru Kabir Saheb Divya Swaroop Medallion */}
            <div className="flex justify-center py-1">
              {!swaroopImgError ? (
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-700 via-amber-400 to-amber-600 shadow-lg ring-4 ring-amber-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/Saheb_World_icon.jpg"
                      alt="Satguru Kabir Saheb Swaroop"
                      referrerPolicy="no-referrer"
                      onError={() => setSwaroopImgError(true)}
                      className="w-full h-full object-cover scale-[1.12]"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center shadow-lg border-2 border-amber-300">
                  <Award className="w-11 h-11" />
                </div>
              )}
            </div>

            {/* Certificate Content - Centered & Balanced */}
            <div className="space-y-4 text-center font-serif leading-relaxed px-1 sm:px-3">
              <div className="space-y-1.5">
                <p className="text-base sm:text-lg font-bold text-amber-950 dark:text-amber-100 [word-break:keep-all] [overflow-wrap:break-word]">
                  {language === 'pb'
                    ? `ਸਾਖੀ #${sakhi.number} ਦਾ ੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।`
                    : language === 'en'
                    ? `Successfully completed the 11-Step Swadhyay of Sakhi #${sakhi.number}.`
                    : `साखी #${sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।`}
                </p>
                <p className="text-xs sm:text-sm font-sans font-semibold text-amber-800/85 dark:text-amber-300/85">
                  {sakhi.grantha} · {sakhi.categoryTitle[language] || sakhi.categoryTitle.hi}
                </p>
              </div>

              {/* Sacred Blessing Couplet */}
              <div className="px-4 py-4 sm:px-6 sm:py-5 rounded-xl bg-amber-500/10 border border-amber-500/35">
                <p className="font-serif font-bold text-base sm:text-lg text-[#8C2818] dark:text-amber-300 italic whitespace-pre-line leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]">
                  "पूरन भये मनोरथा, सतगुरु दई लखाय।{'\n'}कहैं कबीर सो हंस जन, अमरलोक में जाय।।"
                </p>
              </div>

              {/* Active Mool Sakhi Vani */}
              {(sakhi.text[language] || sakhi.text.hi) && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs sm:text-sm font-sans font-bold text-amber-900 dark:text-amber-400">
                    {language === 'pb'
                      ? `— ਪਾਵਨ ਮੂਲ ਸਾਖੀ #${sakhi.number} —`
                      : language === 'en'
                      ? `— Sacred Sakhi #${sakhi.number} —`
                      : `— पावन मूल साखी #${sakhi.number} —`}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-bold text-[#2E1C0C] dark:text-amber-100 whitespace-pre-line leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]">
                    {sakhi.text[language] || sakhi.text.hi}
                  </p>
                </div>
              )}

              <p className="text-xs sm:text-sm font-sans font-medium text-amber-900/80 dark:text-amber-200/80 pt-1">
                {language === 'pb' ? `ਮਿਤੀ: ${formattedDate}` : language === 'en' ? `Date: ${formattedDate}` : `दिनांक: ${formattedDate}`}
              </p>
            </div>

            {/* Bottom Footer - Centered */}
            <div className="text-center w-full pt-4 border-t border-amber-600/30">
              <span className="font-bold font-serif text-[#8C2818] dark:text-amber-300 text-xl sm:text-2xl tracking-wide">
                ।।साहेब बंदगी साहेब।।
              </span>
            </div>
          </div>

          {/* Non-intrusive Status / Download Path Confirmation */}
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

          {/* Action Buttons (Separate Download PDF & Print, >= 44px Touch Targets) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 disabled:opacity-60 text-white font-serif font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0"
            >
              {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>
                {language === 'pb'
                  ? 'ਡਾਊਨਲੋਡ PDF'
                  : language === 'en'
                  ? 'Download PDF'
                  : 'प्रमाण-पत्र डाउनलोड करें'}
              </span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              disabled={isPrinting}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-serif font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0"
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
              onClick={handleShare}
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-900 dark:text-amber-200 font-serif font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0"
            >
              <Share2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
              <span>
                {language === 'pb'
                  ? 'ਸਾਂਝਾ ਕਰੋ'
                  : language === 'en'
                  ? 'Share'
                  : 'साझा करें'}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 font-serif font-bold text-xs sm:text-sm text-stone-700 dark:text-stone-300 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {language === 'pb'
                ? 'ਬੰਦ ਕਰੋ'
                : language === 'en'
                ? 'Close'
                : 'बंद करें'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
