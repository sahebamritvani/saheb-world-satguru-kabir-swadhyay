import React, { useState, useRef } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  QrCode,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { Language } from '../types';
import { satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { triggerBlobDownload } from '../services/quoteCardGenerator';

interface ShareAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const APP_URL = 'https://saheb-world-satguru-kabir-swadhyay.vercel.app/';
const APP_SHORT_URL = 'saheb-world-satguru-kabir-swadhyay.vercel.app';

export const ShareAppModal: React.FC<ShareAppModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const qrCanvasRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Localized texts
  const t = {
    modalTitle:
      language === 'pb'
        ? 'ਐਪ ਸ਼ੇਅਰ ਅਤੇ ਪਾਵਨ QR ਕੋਡ'
        : language === 'en'
        ? 'Share App & Sacred QR Code'
        : 'ऐप शेयर एवं पावन QR कोड',
    modalSub:
      language === 'pb'
        ? 'ਸਤਿਸੰਗ ਸਮੂਹ ਅਤੇ ਸਾਧਕ ਪਰਿਵਾਰ ਨਾਲ ਸਾਂਝਾ ਕਰੋ'
        : language === 'en'
        ? 'Share with Satsang Devotees & Groups'
        : 'सत्संग समूह एवं साधक परिवार के साथ साझा करें',
    headerGreeting:
      language === 'pb'
        ? '🌹 ।। ਸਤਯਨਾਮ ।। 🌹'
        : language === 'en'
        ? '🌹 || Satyanaam || 🌹'
        : '🌹 ।। सत्यनाम ।। 🌹',
    appTitle:
      language === 'pb'
        ? 'ਸਾਹੇਬ ਵਰਲਡ (Saheb World)'
        : language === 'en'
        ? 'Saheb World'
        : 'साहेब वर्ल्ड (Saheb World)',
    appSubtitle:
      language === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸ੍ਵਾਧਿਆਇ ਅਤੇ ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ'
        : language === 'en'
        ? 'Satguru Kabir Saheb Swadhyay & Nitnem Gutka Saheb'
        : 'सतगुरु कबीर साहेब स्वाध्याय एवं नितनेम गुटका साहेब',
    scanNotice:
      language === 'pb'
        ? 'ਕਿਸੇ ਵੀ ਮੋਬਾਈਲ ਕੈਮਰੇ ਨਾਲ ਤੁਰੰਤ ਸਕੈਨ ਕਰੋ'
        : language === 'en'
        ? 'Fast Scan with Any Smartphone Camera'
        : 'किसी भी मोबाइल कैमरे से तुरंत स्कैन करें',
    bandagiFooter:
      language === 'pb'
        ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।। 🙏'
        : language === 'en'
        ? '|| Saheb Bandagi Saheb || 🙏'
        : '।। साहेब बंदगी साहेब ।। 🙏',
    downloadCardBtn:
      language === 'pb'
        ? '📥 QR ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ'
        : language === 'en'
        ? '📥 Download QR Card'
        : '📥 QR कार्ड डाउनलोड करें',
    whatsAppBtn:
      language === 'pb'
        ? 'WhatsApp ਤੇ ਭੇਜੋ'
        : language === 'en'
        ? 'Send on WhatsApp'
        : 'WhatsApp पर भेजें',
    copyLinkBtn:
      language === 'pb'
        ? 'ਲਿੰਕ ਕਾਪੀ ਕਰੋ'
        : language === 'en'
        ? 'Copy Link'
        : 'लिंक कॉपी करें',
    copiedText:
      language === 'pb'
        ? 'ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!'
        : language === 'en'
        ? 'Link Copied!'
        : 'लिंक कॉपी हो गया!',
    nativeShareBtn:
      language === 'pb'
        ? 'ਹੋਰ ਐਪਸ ਤੇ ਸ਼ੇਅਰ ਕਰੋ'
        : language === 'en'
        ? 'Share via Other Apps'
        : 'अन्य ऐप्स पर शेयर करें',
    downloadSuccess:
      language === 'pb'
        ? 'QR ਕਾਰਡ ਸਫਲਤਾਪੂਰਵਕ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ!'
        : language === 'en'
        ? 'QR Card downloaded successfully!'
        : 'QR कार्ड सफलतापूर्वक डाउनलोड हो गया!',
  };

  // Pre-formatted share invite text
  const shareMessageText =
    language === 'pb'
      ? `${t.headerGreeting}\n\n*${t.appTitle}*\n${t.appSubtitle}\n\nਪਾਵਨ ਕਬੀਰ ਬਾਣੀ, ਦੈਨਿਕ ਹੁਕਮਨਾਮਾ, ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ ਅਤੇ ਕਬੀਰ ਬੀਜਕ ਦਾ ਸੰਪੂਰਣ ਆਧਿਆਤਮਿਕ ਮੰਚ।\n\n📲 ਹੁਣੇ ਪਧਾਰੋ ਅਤੇ ਸ੍ਵਾਧਿਆਇ ਕਰੋ:\n${APP_URL}\n\nਸੌਜਨਯ: ਸਾਹੇਬ ਵਰਲਡ (Saheb World)\n${t.bandagiFooter}`
      : language === 'en'
      ? `${t.headerGreeting}\n\n*${t.appTitle}*\n${t.appSubtitle}\n\nSacred Kabir Vani, Daily Hukamnama, Nitnem Gutka Saheb, and Kabir Bijak sanctuary.\n\n📲 Visit & Immerse in Swadhyay:\n${APP_URL}\n\nCourtesy: Saheb World\n${t.bandagiFooter}`
      : `${t.headerGreeting}\n\n*${t.appTitle}*\n${t.appSubtitle}\n\nपावन कबीर वाणी, दैनिक हुकमनामा, नितनेम गुटका साहेब एवं कबीर बीजक का सम्पूर्ण आध्यात्मिक मंच।\n\n📲 अभी पधारें एवं स्वाध्याय करें:\n${APP_URL}\n\nसौजन्य: साहेब वर्ल्ड (Saheb World)\n${t.bandagiFooter}`;

  // Copy Link Handler
  const handleCopyLink = async () => {
    sacredHaptics.lightTap();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(APP_URL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = APP_URL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      showToast(t.copiedText);
      try {
        satyanaamAudio.ringSacredBell();
      } catch {}
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast(APP_URL);
    }
  };

  // WhatsApp Share Handler
  const handleWhatsAppShare = () => {
    sacredHaptics.lightTap();
    const encoded = encodeURIComponent(shareMessageText);
    const waUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Native Share Handler
  const handleNativeShare = async () => {
    sacredHaptics.lightTap();
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.appTitle,
          text: shareMessageText,
          url: APP_URL,
        });
        return;
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
      }
    }
    handleCopyLink();
  };

  // Download High-Resolution Branded QR Card as PNG
  const handleDownloadQRCard = async () => {
    sacredHaptics.mediumTap();
    setIsDownloading(true);

    try {
      const qrCanvas = qrCanvasRef.current?.querySelector('canvas') as HTMLCanvasElement | null;
      if (!qrCanvas) {
        throw new Error('QR Canvas element not found');
      }

      // Create an offscreen canvas at high resolution
      const width = 1080;
      const height = 1520;
      const cardCanvas = document.createElement('canvas');
      cardCanvas.width = width;
      cardCanvas.height = height;
      const ctx = cardCanvas.getContext('2d');
      if (!ctx) throw new Error('2D context not available');

      // 1. Royal Cream & Gold Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#FFFDF8');
      bgGrad.addColorStop(0.4, '#FAF4E6');
      bgGrad.addColorStop(1, '#F3E5C8');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle Watermark Mandala Glow
      const centerGrad = ctx.createRadialGradient(width / 2, height * 0.52, 40, width / 2, height * 0.52, 420);
      centerGrad.addColorStop(0, 'rgba(217, 119, 6, 0.12)');
      centerGrad.addColorStop(0.6, 'rgba(217, 119, 6, 0.03)');
      centerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height * 0.52, 420, 0, Math.PI * 2);
      ctx.fill();

      // 2. Ornate Golden Borders
      const accentGold = '#B45309';
      const sacredMaroon = '#701A05';

      ctx.strokeStyle = accentGold;
      ctx.lineWidth = 14;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      ctx.strokeStyle = sacredMaroon;
      ctx.lineWidth = 3;
      ctx.strokeRect(54, 54, width - 108, height - 108);

      // Corner Ornaments
      const drawCornerDot = (x: number, y: number) => {
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = sacredMaroon;
        ctx.fill();
        ctx.strokeStyle = accentGold;
        ctx.lineWidth = 3;
        ctx.stroke();
      };
      drawCornerDot(40, 40);
      drawCornerDot(width - 40, 40);
      drawCornerDot(40, height - 40);
      drawCornerDot(width - 40, height - 40);

      // 3. Top Header: "🌹 ।। सत्यनाम ।। 🌹"
      ctx.textAlign = 'center';
      ctx.fillStyle = sacredMaroon;
      ctx.font = 'bold 44px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
      ctx.fillText(t.headerGreeting, width / 2, 145);

      // Divider Line
      ctx.strokeStyle = accentGold;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 200, 175);
      ctx.lineTo(width / 2 + 200, 175);
      ctx.stroke();

      // 4. App Title & Subtitle
      ctx.fillStyle = '#2E1C0C';
      ctx.font = 'bold 50px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
      ctx.fillText(t.appTitle, width / 2, 255);

      ctx.fillStyle = sacredMaroon;
      ctx.font = 'bold 26px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif';
      ctx.fillText(t.appSubtitle, width / 2, 310);

      // 5. White QR Container Box with soft shadow
      const qrBoxSize = 580;
      const qrBoxX = (width - qrBoxSize) / 2;
      const qrBoxY = 370;

      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 3;

      if (typeof (ctx as any).roundRect === 'function') {
        ctx.beginPath();
        (ctx as any).roundRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 28);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize);
        ctx.strokeRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize);
      }

      // Draw QR Code from the pure Canvas (scaled up cleanly, high contrast)
      const qrDrawSize = 480;
      const qrDrawX = qrBoxX + (qrBoxSize - qrDrawSize) / 2;
      const qrDrawY = qrBoxY + (qrBoxSize - qrDrawSize) / 2;
      ctx.drawImage(qrCanvas, qrDrawX, qrDrawY, qrDrawSize, qrDrawSize);

      // 6. Fast Scanning Badge below QR
      ctx.fillStyle = '#78350F';
      ctx.font = 'bold 24px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif';
      ctx.fillText(`⚡ ${t.scanNotice}`, width / 2, 1010);

      // 7. Clean Short URL pill
      const urlBoxW = 760;
      const urlBoxH = 58;
      const urlBoxX = (width - urlBoxW) / 2;
      const urlBoxY = 1060;

      ctx.fillStyle = '#FAF0D7';
      ctx.strokeStyle = accentGold;
      ctx.lineWidth = 2;
      if (typeof (ctx as any).roundRect === 'function') {
        ctx.beginPath();
        (ctx as any).roundRect(urlBoxX, urlBoxY, urlBoxW, urlBoxH, 16);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillRect(urlBoxX, urlBoxY, urlBoxW, urlBoxH);
        ctx.strokeRect(urlBoxX, urlBoxY, urlBoxW, urlBoxH);
      }

      ctx.fillStyle = '#8B2500';
      ctx.font = 'bold 26px "Courier New", monospace, sans-serif';
      ctx.fillText(APP_SHORT_URL, width / 2, urlBoxY + 39);

      // 8. Footer Line 1: Courtesy
      const footerL1 =
        language === 'pb'
          ? 'ਸੌਜਨਯ: ਸਾਹੇਬ ਵਰਲਡ (Saheb World)'
          : language === 'en'
          ? 'Courtesy: Saheb World'
          : 'सौजन्य: साहेब वर्ल्ड (Saheb World)';

      ctx.fillStyle = '#78350F';
      ctx.font = 'bold 26px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif';
      ctx.fillText(footerL1, width / 2, 1260);

      // Footer Line 2: Sacred Bandagi
      ctx.fillStyle = sacredMaroon;
      ctx.font = 'bold 36px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
      ctx.fillText(t.bandagiFooter, width / 2, 1330);

      // Convert to blob and download
      cardCanvas.toBlob((blob) => {
        if (!blob) {
          setIsDownloading(false);
          return;
        }
        const objectUrl = URL.createObjectURL(blob);
        triggerBlobDownload(objectUrl, `SahebWorld_App_QR_Card_${Date.now()}.png`);
        try {
          satyanaamAudio.ringSacredBell();
        } catch {}
        showToast(t.downloadSuccess);
        setIsDownloading(false);
      }, 'image/png');
    } catch (err) {
      console.error('Failed to generate QR Card PNG:', err);
      setIsDownloading(false);
    }
  };

  return (
    <div
      id="saheb-world-share-modal-backdrop"
      style={{
        position: 'fixed',
        top: '42px',
        bottom: '42px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
      }}
      className="bg-black/80 backdrop-blur-md overflow-hidden print:hidden"
      onClick={onClose}
    >
      <div
        id="saheb-world-share-modal-container"
        style={{
          width: '100%',
          maxWidth: '470px',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        className="bg-[#FFFDF9] dark:bg-[#1C1712] rounded-3xl border-2 border-amber-600/40 shadow-2xl text-stone-900 dark:text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-amber-600/20 bg-amber-500/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-600 text-white shadow-sm">
              <QrCode className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-amber-950 dark:text-amber-100">
                {t.modalTitle}
              </h3>
              <p className="text-[10px] text-amber-900/70 dark:text-amber-300/70">
                {t.modalSub}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center text-xs shadow-md animate-fadeIn flex items-center justify-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Branded Scannable QR Card */}
          <div
            id="saheb-world-qr-card"
            className="p-4 sm:p-5 rounded-2xl border-2 border-amber-600/30 bg-[#FAF4E6] dark:bg-[#251E17] text-center shadow-lg relative overflow-hidden"
          >
            {/* Ornate Inner Border Line */}
            <div className="border border-amber-600/30 rounded-xl p-3 sm:p-4 bg-white/70 dark:bg-black/25">
              {/* Header Greeting */}
              <div className="text-amber-800 dark:text-amber-300 font-serif font-bold text-xs sm:text-sm tracking-wider">
                {t.headerGreeting}
              </div>

              {/* Title & Subtitle */}
              <div className="mt-1">
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#701A05] dark:text-amber-200">
                  {t.appTitle}
                </h4>
                <p className="text-[11px] font-sans text-amber-900/80 dark:text-amber-300/80 mt-0.5">
                  {t.appSubtitle}
                </p>
              </div>

              {/* Scannable QR Code Canvas (Instant Scan, Pure High Contrast, Level H) */}
              <div
                ref={qrCanvasRef}
                className="my-3.5 mx-auto p-3.5 bg-white rounded-2xl border-2 border-amber-500/40 shadow-md inline-flex items-center justify-center"
              >
                <QRCodeCanvas
                  value={APP_URL}
                  size={195}
                  level="H"
                  marginSize={3}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                />
              </div>

              {/* Fast-Scan Camera Guide */}
              <div className="text-[11px] font-semibold text-amber-900 dark:text-amber-300 flex items-center justify-center gap-1 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.scanNotice}</span>
              </div>

              {/* Short URL Label */}
              <div className="p-1.5 px-2.5 rounded-lg bg-amber-50 dark:bg-black/40 border border-amber-500/30 font-mono text-[11px] text-amber-900 dark:text-amber-200 break-all select-all">
                {APP_SHORT_URL}
              </div>

              {/* Bottom Bandagi */}
              <div className="mt-3 text-xs sm:text-sm font-serif font-bold text-[#8B2500] dark:text-amber-200">
                {t.bandagiFooter}
              </div>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="space-y-2">
            {/* Primary: Download QR Card */}
            <button
              type="button"
              onClick={handleDownloadQRCard}
              disabled={isDownloading}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8B2500] to-[#B45309] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'सहेजा जा रहा है...' : t.downloadCardBtn}</span>
            </button>

            {/* Secondary Row: WhatsApp & Copy Link */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm hover:brightness-105 active:scale-[0.99] transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsAppBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className={`py-2.5 px-3 rounded-xl font-bold text-xs border shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-black/5 dark:bg-white/5 border-amber-600/30 text-amber-950 dark:text-amber-100 hover:bg-black/10'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? t.copiedText : t.copyLinkBtn}</span>
              </button>
            </div>

            {/* Tertiary: Native Share */}
            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/20 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.nativeShareBtn}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
