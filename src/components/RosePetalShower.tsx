import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  X, 
  ArrowLeft,
  Flower2, 
  CheckCircle2, 
  Volume2,
  ShieldCheck
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { RosePetalIcon } from './RosePetalIcon';
import { satyanaamAudio, speechReciter } from '../services/audioDhun';
import {
  DarshanPortraitState,
  getCustomDarshanState,
  subscribeToCustomPortraitState,
} from '../services/customPortraitStore';
import { sacredHaptics } from '../services/haptics';

interface RosePetalShowerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  title?: string;
  message?: string;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  color: string;
  opacity: number;
}

export const RosePetalShower: React.FC<RosePetalShowerProps> = ({
  isOpen,
  onClose,
  language,
  title,
  message,
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const [flowerCount, setFlowerCount] = useState<number>(1);
  const [portraitState, setPortraitState] = useState<DarshanPortraitState>(() => getCustomDarshanState());

  useEffect(() => {
    const unsubscribe = subscribeToCustomPortraitState((state) => {
      setPortraitState(state);
    });
    return () => unsubscribe();
  }, []);

  const petalColors = [
    '#9E1A2A', // Deep Velvet Red
    '#C02638', // Crimson Rose
    '#D9384E', // Vivid Rose Petal
    '#E85A6E', // Soft Bloom Pink
    '#F28294', // Blush Rose
    '#F8A5B2', // Tender Rose Leaflet
  ];

  const triggerCelebration = () => {
    setFlowerCount((prev) => prev + 1);

    // Sacred physical tactile feedback (petal cascade rhythm)
    sacredHaptics.petalShower();

    // Ring sacred triple chime in audio engine
    try {
      satyanaamAudio.ringSatyanaamTripleChime();
    } catch {
      // Audio optional
    }

    // Supplementary gold and crimson sparkles
    try {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.25 },
        colors: ['#D4AF37', '#FFD700', '#C02638', '#E6C280', '#9E1A2A'],
        ticks: 220,
        gravity: 0.55,
        scalar: 0.95,
      });
    } catch {
      // ignore
    }

    // Initialize custom canvas rose petals
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      const petalCount = window.innerWidth < 640 ? 55 : 95;
      const newPetals: Petal[] = [];

      for (let i = 0; i < petalCount; i++) {
        newPetals.push({
          x: Math.random() * width,
          y: -20 - Math.random() * (height * 0.8),
          size: Math.random() * 20 + 8, // Varying sizes from 8px to 28px
          speedY: Math.random() * 1.8 + 1.2,
          speedX: (Math.random() - 0.5) * 1.6,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          flip: Math.random() * 2 * Math.PI,
          flipSpeed: Math.random() * 0.04 + 0.02,
          color: petalColors[Math.floor(Math.random() * petalColors.length)],
          opacity: Math.random() * 0.3 + 0.7,
        });
      }
      petalsRef.current = newPetals;
    }
  };

  const handlePranamChant = () => {
    sacredHaptics.divineBlessing();
    const text = language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਕੋਟਿ-ਕੋਟਿ ਨਮਨ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।'
      : language === 'en'
      ? 'Infinite salutations and floral offerings at the sacred lotus feet of Satguru Kabir Saheb. Saheb Bandgi Saheb.'
      : 'सतगुरु कबीर साहेब जी के पावन चरणों में कोटि-कोटि नमन। साहेब बंदगी साहेब दयाल।';
    speechReciter.speak(text, language);
  };

  useEffect(() => {
    if (isOpen) {
      triggerCelebration();

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };
      window.addEventListener('resize', handleResize);

      let step = 0;
      const render = () => {
        step += 0.02;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const petals = petalsRef.current;
        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(step + i * 0.1) * 1.5;
          p.rotation += p.rotationSpeed;
          p.flip += p.flipSpeed;

          // Recycle petals to top
          if (p.y > canvas.height + 30) {
            p.y = -30;
            p.x = Math.random() * canvas.width;
          }

          // Draw organic rose petal
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.scale(Math.cos(p.flip), 1);
          ctx.globalAlpha = p.opacity;

          ctx.beginPath();
          const r = p.size;
          ctx.moveTo(0, -r * 0.6);
          ctx.bezierCurveTo(r * 0.8, -r * 0.6, r * 0.9, r * 0.4, 0, r * 0.9);
          ctx.bezierCurveTo(-r * 0.9, r * 0.4, -r * 0.8, -r * 0.6, 0, -r * 0.6);

          ctx.fillStyle = p.color;
          ctx.fill();

          // Subtle inner vein highlight
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -r * 0.4);
          ctx.lineTo(0, r * 0.5);
          ctx.stroke();

          ctx.restore();
        }

        animationFrameRef.current = requestAnimationFrame(render);
      };

      animationFrameRef.current = requestAnimationFrame(render);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  return (
    <div
      id="divine-blessing-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      {/* Fullscreen Canvas for Rose Petal Varsha */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-10 w-full h-full"
      />

      {/* Modal Dialog with mobile scrollability max-h-[90vh] */}
      <div
        id="divine-blessing-card"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-lg rounded-2xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Center Strict Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-b py-2.5 px-4 select-none"
        >
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-nowrap">
            <span className="text-base sm:text-xl select-none shrink-0" aria-hidden="true">🌹</span>
            <span
              style={{ color: theme.sacredMaroon }}
              className="text-base sm:text-lg md:text-xl font-black tracking-widest font-serif drop-shadow-xs whitespace-nowrap"
            >
              {language === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : language === 'en' ? '|| Satyanaam ||' : '।। सत्यनाम ।।'}
            </span>
            <span className="text-base sm:text-xl select-none shrink-0" aria-hidden="true">🌹</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 text-center flex-1">
          
          {/* Header Tag */}
          <div className="space-y-1">
            <div
              style={{ 
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon 
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs"
            >
              <RosePetalIcon size={14} color="#8B4513" className="w-3.5 h-3.5 text-[#8B4513] animate-pulse" />
              <span>{language === 'pb' ? 'ਫੁੱਲ ਭੇਟ ਤੇ ਨਮਨ' : language === 'en' ? 'Offer Flowers & Pranam' : 'पुष्प अर्पण व नमन'} • {language === 'pb' ? 'ਪੁਸ਼ਪ ਵਰਖਾ' : language === 'en' ? 'Flower Shower' : 'पुष्प वर्षा'} #{flowerCount}</span>
              <RosePetalIcon size={14} color="#8B4513" className="w-3.5 h-3.5 text-[#8B4513] animate-pulse" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
              {title || (language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਦਰਸ਼ਨ' : language === 'en' ? 'Divine Darshan & Salutations' : 'सतगुरु कबीर साहेब पावन दर्शन व नमन')}
            </h2>
          </div>

          {/* DIVINE SYMBOLIC EMBLEM: Sacred Radiant Representation of Satguru Kabir Saheb */}
          <div className="relative mx-auto flex flex-col items-center">
            <div
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center pointer-events-none"
            >
              {/* Outer Golden Aura Glow */}
              <div
                style={{ backgroundColor: theme.accentGoldLight }}
                className="absolute -inset-3 rounded-full blur-xl opacity-75 animate-pulse transition-opacity pointer-events-none"
              />

              {/* Rotating Sacred Halo Ring */}
              <div
                style={{ borderColor: theme.accentGold }}
                className="absolute -inset-1 rounded-full border-2 border-dashed animate-spin-slow opacity-60 transition-opacity"
              />

              {/* Ornate Circular Emblem - Admin Satguru Swaroop or Sacred Lotus Medallion */}
              <div
                style={{
                  backgroundColor: theme.stepActiveBg,
                  borderColor: theme.accentGold,
                }}
                className="relative w-full h-full rounded-full border-4 overflow-hidden shadow-2xl ring-4 ring-amber-400/30 flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 dark:from-zinc-900 dark:to-zinc-950"
              >
                {portraitState.imageData ? (
                  <img
                    src={portraitState.imageData}
                    alt="Satguru Kabir Saheb"
                    className={`w-full h-full ${portraitState.objectFit === 'cover' ? 'object-cover' : 'object-contain'} select-none`}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-amber-700 dark:text-amber-300 p-3">
                    <Sparkles className="w-10 h-10 mb-1 animate-pulse" />
                    <span className="font-serif font-black text-sm tracking-wide" style={{ color: theme.sacredMaroon }}>
                      {language === 'pb' ? 'ਸਤਯਨਾਮ' : language === 'en' ? 'Satyanaam' : 'सत्यनाम'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Under Emblem */}
            <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
              <div
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold border shadow-xs inline-flex items-center gap-1"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'pb' ? 'ਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ' : (language === 'en' ? 'Bandichhor Satguru Kabir Saheb' : 'बंदीछोड़ सतगुरु कबीर साहेब')}</span>
              </div>

              <button
                type="button"
                onClick={handlePranamChant}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                  color: theme.sacredMaroon,
                }}
                className="px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 hover:opacity-90 shadow-2xs cursor-pointer transition"
              >
                <Volume2 className="w-3 h-3 text-amber-600" />
                <span>{language === 'pb' ? 'ਨਮਨ ਬਾਣੀ' : (language === 'en' ? 'Salutation' : 'नमन वाणी')}</span>
              </button>
            </div>
          </div>

          {/* Sacred Blessing Verse in Parchment Frame */}
          <div
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.borderOrnament,
            }}
            className="rounded-xl border p-3.5 sm:p-4 relative"
          >
            <div
              style={{ color: theme.accentGold }}
              className="text-[11px] uppercase tracking-widest font-bold mb-1 opacity-90"
            >
              {language === 'pb' 
                ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਮੰਗਲ ਅਸੀਸ ।।' 
                : language === 'en' 
                ? '|| Satguru Kabir Saheb Auspicious Blessing ||' 
                : '।। सतगुरु कबीर साहेब मंगल आशीष ।।'}
            </div>
            <p
              style={{ color: theme.sacredMaroon }}
              className="text-base sm:text-lg font-serif font-bold leading-relaxed italic"
            >
              {t.blessingQuote}
            </p>
            <div
              style={{ backgroundColor: theme.borderOrnament }}
              className="h-px w-24 mx-auto my-2.5 opacity-60"
            />
            <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm leading-relaxed">
              {message || t.blessingText}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
            <button
              id="trigger-more-petals-btn"
              onClick={triggerCelebration}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Flower2 className="w-4 h-4 text-pink-200" />
              <span>{language === 'pb' ? 'ਫੁੱਲ ਮੁੜ ਭੇਟ ਕਰੋ' : language === 'en' ? 'Offer Flowers Again' : 'पुष्प पुनः अर्पित करें'}</span>
            </button>

            <button
              id="close-blessing-modal-btn"
              onClick={onClose}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.textPrimary,
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-700 dark:text-amber-300" />
              <span>{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Back' : 'वापस जाएं'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Center Strict Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2 px-4 text-center select-none"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-sm sm:text-base font-semibold tracking-wider block font-serif"
          >
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};
