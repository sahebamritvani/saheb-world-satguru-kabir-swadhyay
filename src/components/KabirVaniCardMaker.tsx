import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  Share2,
  MessageCircle,
  Check,
  Sparkles,
  User,
  Palette,
  Quote,
  RotateCcw,
} from 'lucide-react';
import { AppView, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { NewModulesNavBar } from './NewModulesNavBar';

interface KabirVaniCardMakerProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onNavigateView: (view: AppView) => void;
  onClose: () => void;
}

type CardThemeId = 'saffron-sunset' | 'pure-white-gold' | 'royal-maroon' | 'serene-lotus';

interface CardThemeConfig {
  id: CardThemeId;
  name: Record<Language, string>;
  bgGradient: [string, string, string];
  previewBgClass: string;
  borderColor: string;
  innerBorderColor: string;
  textColor: string;
  accentColor: string;
  mutedColor: string;
  badgeBg: string;
}

const CARD_THEMES: CardThemeConfig[] = [
  {
    id: 'saffron-sunset',
    name: {
      hi: 'केसरिया संध्या (Saffron Sunset)',
      pb: 'ਕੇਸਰੀ ਸੰਧਿਆ (Saffron Sunset)',
      en: 'Saffron Sunset',
    },
    bgGradient: ['#7C2D12', '#C2410C', '#D97706'],
    previewBgClass: 'bg-gradient-to-br from-[#7C2D12] via-[#C2410C] to-[#D97706]',
    borderColor: '#FDE68A',
    innerBorderColor: 'rgba(253, 230, 138, 0.45)',
    textColor: '#FFFBEB',
    accentColor: '#FDE047',
    mutedColor: '#FEF3C7',
    badgeBg: 'rgba(67, 20, 7, 0.42)',
  },
  {
    id: 'pure-white-gold',
    name: {
      hi: 'श्वेत एवं स्वर्ण (Pure White & Gold)',
      pb: 'ਸ਼ੁੱਧ ਚਿੱਟਾ ਤੇ ਸੁਨਹਿਰੀ (White & Gold)',
      en: 'Pure White & Gold',
    },
    bgGradient: ['#FFFFFF', '#FDF8EE', '#FEF3C7'],
    previewBgClass: 'bg-gradient-to-br from-[#FFFFFF] via-[#FDF8EE] to-[#FEF3C7]',
    borderColor: '#D97706',
    innerBorderColor: 'rgba(217, 119, 6, 0.35)',
    textColor: '#451A03',
    accentColor: '#6B1D1D',
    mutedColor: '#78350F',
    badgeBg: 'rgba(217, 119, 6, 0.12)',
  },
  {
    id: 'royal-maroon',
    name: {
      hi: 'शाही महरून (Royal Maroon)',
      pb: 'ਸ਼ਾਹੀ ਮਹਿਰੂਨ (Royal Maroon)',
      en: 'Royal Maroon',
    },
    bgGradient: ['#3B0A0A', '#6B1D1D', '#4C0D0D'],
    previewBgClass: 'bg-gradient-to-br from-[#3B0A0A] via-[#6B1D1D] to-[#4C0D0D]',
    borderColor: '#F59E0B',
    innerBorderColor: 'rgba(245, 158, 11, 0.4)',
    textColor: '#FFFDF7',
    accentColor: '#FBBF24',
    mutedColor: '#FDE68A',
    badgeBg: 'rgba(0, 0, 0, 0.32)',
  },
  {
    id: 'serene-lotus',
    name: {
      hi: 'शान्त कमल (Serene Lotus)',
      pb: 'ਸ਼ਾਂਤ ਕਮਲ (Serene Lotus)',
      en: 'Serene Lotus',
    },
    bgGradient: ['#FFF1F2', '#FDF2F8', '#FEF3C7'],
    previewBgClass: 'bg-gradient-to-br from-[#FFF1F2] via-[#FDF2F8] to-[#FEF3C7]',
    borderColor: '#9D174D',
    innerBorderColor: 'rgba(157, 23, 77, 0.28)',
    textColor: '#500724',
    accentColor: '#9D174D',
    mutedColor: '#831843',
    badgeBg: 'rgba(157, 23, 77, 0.08)',
  },
];

const PRELOADED_QUOTES: Record<Language, string[]> = {
  hi: [
    'गुरु गोविन्द दोऊ खड़े, काके लागूं पाँय। बलिहारी गुरु आपने, गोविन्द दियो बताय।।',
    'ऐसी वाणी बोलिए, मन का आपा खोय। औरन को शीतल करे, आपहुं शीतल होय।।',
    '।। साहेब बंदगी साहेब ।।',
  ],
  pb: [
    'ਗੁਰੂ ਗੋਵਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਂਇ। ਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਨੇ, ਗੋਵਿੰਦ ਦਿਓ ਬਤਾਇ।।',
    'ਐਸੀ ਬਾਣੀ ਬੋਲੀਏ, ਮਨ ਕਾ ਆਪਾ ਖੋਇ। ਔਰਨ ਕੋ ਸੀਤਲ ਕਰੇ, ਆਪਹੁਂ ਸੀਤਲ ਹੋਇ।।',
    '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।',
  ],
  en: [
    'Guru and God both stand before me, to whom should I bow first? Glory to the Guru, who showed me the path to God.',
    'Speak such sweet words that dissolve ego, bringing peace to others and tranquility to yourself.',
    '|| Saheb Bandagi Saheb ||',
  ],
};

const STORAGE_KEY = 'sahebworld_card_maker_prefs_v1';

interface CardMakerPrefs {
  senderName: string;
  selectedTheme: CardThemeId;
  cardsGeneratedCount: number;
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const para of paragraphs) {
    const words = para.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      lines.push('');
      continue;
    }
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const testLine = `${currentLine} ${words[i]}`;
      if (ctx.measureText(testLine).width <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
  }
  return lines;
}

export const KabirVaniCardMaker: React.FC<KabirVaniCardMakerProps> = ({
  language,
  onSelectLanguage,
  onNavigateView,
  onClose,
}) => {
  const { theme, isDarkMode } = useAppTheme();

  const [prefs, setPrefs] = useState<CardMakerPrefs>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          senderName: typeof parsed.senderName === 'string' ? parsed.senderName : '',
          selectedTheme: parsed.selectedTheme || 'saffron-sunset',
          cardsGeneratedCount: Number(parsed.cardsGeneratedCount) || 0,
        };
      }
    } catch {}
    return {
      senderName: '',
      selectedTheme: 'saffron-sunset',
      cardsGeneratedCount: 0,
    };
  });

  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  const [quoteText, setQuoteText] = useState<string>(() => PRELOADED_QUOTES[language][0]);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isCustomMode) {
      const presets = PRELOADED_QUOTES[language] || PRELOADED_QUOTES.hi;
      setQuoteText(presets[selectedPresetIdx] || presets[0]);
    }
  }, [language, selectedPresetIdx, isCustomMode]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  const activeTheme = CARD_THEMES.find((t) => t.id === prefs.selectedTheme) || CARD_THEMES[0];

  const ui = {
    hi: {
      title: 'कबीर वाणी कार्ड मेकर',
      subtitle: 'पावन दोहे, साखी या अपनी शुभकामनाओं के साथ सुंदर आध्यात्मिक कार्ड बनाएं, डाउनलोड करें और शेयर करें।',
      selectQuote: '१. पावन वाणी चुनें या स्वयं लिखें',
      writeOwn: 'अपना संदेश लिखें',
      customPlaceholder: 'अपना दोहा, साखी या पावन शुभकामना यहाँ लिखें...',
      yourName: '२. आपका नाम (कार्ड के नीचे दिखेगा)',
      namePlaceholder: 'उदा. रामदास साहेब / आपका शुभ नाम',
      courtesyPrefix: 'सौजन्य:',
      chooseTheme: '३. आध्यात्मिक थीम चुनें',
      livePreview: 'कार्ड पूर्वावलोकन (Live Preview)',
      downloadBtn: 'कार्ड डाउनलोड करें (PNG)',
      shareBtn: 'शेयर करें',
      whatsappBtn: 'WhatsApp पर भेजें',
      resetBtn: 'रीसेट',
      createdLabel: 'निर्मित कार्ड:',
      downloadedToast: 'पावन वाणी कार्ड सफलतापूर्वक डाउनलोड हो गया!',
      sharedToast: 'कार्ड साझा किया गया!',
      defaultCourtesy: 'सौजन्य: साहेब वर्ल्ड साधक परिवार',
    },
    pb: {
      title: 'ਕਬੀਰ ਬਾਣੀ ਕਾਰਡ ਮੇਕਰ',
      subtitle: 'ਪਾਵਨ ਦੋਹੇ, ਸਾਖੀ ਜਾਂ ਆਪਣੀਆਂ ਸ਼ੁਭਕਾਮਨਾਵਾਂ ਨਾਲ ਸੁੰਦਰ ਅਧਿਆਤਮਕ ਕਾਰਡ ਬਣਾਓ, ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਸਾਂਝਾ ਕਰੋ।',
      selectQuote: '੧. ਪਾਵਨ ਬਾਣੀ ਚੁਣੋ ਜਾਂ ਖੁਦ ਲਿਖੋ',
      writeOwn: 'ਆਪਣਾ ਸੰਦੇਸ਼ ਲਿਖੋ',
      customPlaceholder: 'ਆਪਣਾ ਦੋਹਾ, ਸਾਖੀ ਜਾਂ ਪਾਵਨ ਸੰਦੇਸ਼ ਇੱਥੇ ਲਿਖੋ...',
      yourName: '੨. ਤੁਹਾਡਾ ਨਾਮ (ਕਾਰਡ ਦੇ ਹੇਠਾਂ ਦਿਖੇਗਾ)',
      namePlaceholder: 'ਜਿਵੇਂ: ਗੁਰਮੁਖ ਸਿੰਘ / ਤੁਹਾਡਾ ਨਾਮ',
      courtesyPrefix: 'ਸੌਜਨ੍ਯ:',
      chooseTheme: '੩. ਅਧਿਆਤਮਕ ਥੀਮ ਚੁਣੋ',
      livePreview: 'ਕਾਰਡ ਝਲਕ (Live Preview)',
      downloadBtn: 'ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ (PNG)',
      shareBtn: 'ਸਾਂਝਾ ਕਰੋ',
      whatsappBtn: 'WhatsApp ਤੇ ਭੇਜੋ',
      resetBtn: 'ਰੀਸੈੱਟ',
      createdLabel: 'ਬਣਾਏ ਗਏ ਕਾਰਡ:',
      downloadedToast: 'ਪਾਵਨ ਬਾਣੀ ਕਾਰਡ ਸਫਲਤਾਪੂਰਵਕ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ!',
      sharedToast: 'ਕਾਰਡ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ!',
      defaultCourtesy: 'ਸੌਜਨ੍ਯ: ਸਾਹੇਬ ਵਰਲਡ ਸਾਧਕ ਪਰਿਵਾਰ',
    },
    en: {
      title: 'Kabir Vani Greeting Card Maker',
      subtitle: 'Create, customize, download, and share devotional greeting cards with sacred couplets and your personal courtesy.',
      selectQuote: '1. Choose a Sacred Quote or Write Your Own',
      writeOwn: 'Write Custom Quote',
      customPlaceholder: 'Type your Kabir Doha, Sakhi, or spiritual greeting here...',
      yourName: '2. Your Name (Displayed at bottom of card)',
      namePlaceholder: 'e.g., Ananya Sharma',
      courtesyPrefix: 'Courtesy:',
      chooseTheme: '3. Select Spiritual Background Theme',
      livePreview: 'Live Card Preview',
      downloadBtn: 'Download Card (PNG)',
      shareBtn: 'Share Card',
      whatsappBtn: 'Share on WhatsApp',
      resetBtn: 'Reset',
      createdLabel: 'Cards Created:',
      downloadedToast: 'Sacred greeting card downloaded successfully!',
      sharedToast: 'Card shared!',
      defaultCourtesy: 'Courtesy: Saheb World Seeker Family',
    },
  }[language];

  const courtesyLine = prefs.senderName.trim()
    ? `${ui.courtesyPrefix} ${prefs.senderName.trim()}`
    : ui.defaultCourtesy;

  const renderCardToCanvas = async (): Promise<{ blob: Blob; dataUrl: string }> => {
    const canvas = canvasRef.current || document.createElement('canvas');
    const size = 1080;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context unavailable');

    // Gradient background
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, activeTheme.bgGradient[0]);
    grad.addColorStop(0.5, activeTheme.bgGradient[1]);
    grad.addColorStop(1, activeTheme.bgGradient[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    // Subtle radial glow
    const rad = ctx.createRadialGradient(size / 2, size * 0.45, 40, size / 2, size * 0.45, size * 0.55);
    rad.addColorStop(0, 'rgba(255,255,255,0.12)');
    rad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, size, size);

    // Outer frame
    ctx.strokeStyle = activeTheme.borderColor;
    ctx.lineWidth = 10;
    ctx.strokeRect(42, 42, size - 84, size - 84);

    // Inner hairline frame
    ctx.strokeStyle = activeTheme.innerBorderColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(66, 66, size - 132, size - 132);

    // Corner ornamental lotus arcs
    const corners = [
      [66, 66],
      [size - 66, 66],
      [66, size - 66],
      [size - 66, size - 66],
    ];
    ctx.fillStyle = activeTheme.borderColor;
    for (const [cx, cy] of corners) {
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    // Header text: Satyanaam
    ctx.textAlign = 'center';
    ctx.fillStyle = activeTheme.accentColor;
    ctx.font = 'bold 36px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(SACRED_BRANDING.header[language], size / 2, 165);

    // Lotus divider
    ctx.font = '44px serif';
    ctx.fillText('🪷', size / 2, 238);

    // Main quote text
    const trimmedQuote = quoteText.trim() || PRELOADED_QUOTES[language][0];
    ctx.fillStyle = activeTheme.textColor;
    const fontSizePx = trimmedQuote.length > 130 ? 40 : trimmedQuote.length > 85 ? 46 : 52;
    ctx.font = `bold ${fontSizePx}px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif`;
    const wrappedLines = wrapCanvasText(ctx, trimmedQuote, size - 210);
    const lineHeight = fontSizePx * 1.48;
    const totalTextHeight = wrappedLines.length * lineHeight;
    let startY = Math.max(330, size / 2 - totalTextHeight / 2 + 10);

    for (const line of wrappedLines) {
      ctx.fillText(line, size / 2, startY);
      startY += lineHeight;
    }

    // Divider above courtesy
    ctx.strokeStyle = activeTheme.innerBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(260, size - 250);
    ctx.lineTo(size - 260, size - 250);
    ctx.stroke();

    // Courtesy / Name at bottom
    ctx.fillStyle = activeTheme.accentColor;
    ctx.font = 'bold 34px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(courtesyLine, size / 2, size - 188);

    // Saheb Bandagi Footer
    ctx.fillStyle = activeTheme.mutedColor;
    ctx.font = '600 26px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(
      `${SACRED_BRANDING.footer[language]} · Saheb World`,
      size / 2,
      size - 122
    );

    const dataUrl = canvas.toDataURL('image/png');
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((b) => {
        if (b) resolve(b);
        else reject(new Error('Failed to create image blob'));
      }, 'image/png');
    });

    return { blob, dataUrl };
  };

  const incrementCount = () => {
    setPrefs((prev) => ({
      ...prev,
      cardsGeneratedCount: prev.cardsGeneratedCount + 1,
    }));
  };

  const showToast = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3500);
  };

  const handleDownloadCard = async () => {
    try {
      setIsGenerating(true);
      sacredHaptics.mediumTap();
      const { dataUrl } = await renderCardToCanvas();
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `saheb-world-card-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      incrementCount();
      showToast(ui.downloadedToast);
    } catch {
      showToast('Could not generate image.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNativeShare = async () => {
    try {
      setIsGenerating(true);
      sacredHaptics.mediumTap();
      const { blob, dataUrl } = await renderCardToCanvas();
      const file = new File([blob], 'saheb-world-kabir-vani.png', { type: 'image/png' });
      const shareText = `${SACRED_BRANDING.header[language]}\n\n"${quoteText.trim()}"\n\n${courtesyLine}\n${SACRED_BRANDING.footer[language]}`;

      if (navigator.share) {
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: ui.title,
            text: shareText,
            files: [file],
          });
          incrementCount();
          showToast(ui.sharedToast);
          return;
        }
        await navigator.share({
          title: ui.title,
          text: shareText,
        });
        incrementCount();
        showToast(ui.sharedToast);
        return;
      }

      // Fallback: download image
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `saheb-world-card-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      incrementCount();
      showToast(ui.downloadedToast);
    } catch {
      // User cancelled share
    } finally {
      setIsGenerating(false);
    }
  };

  const handleWhatsAppShare = () => {
    sacredHaptics.lightTap();
    const message = `${SACRED_BRANDING.header[language]}\n\n"${quoteText.trim()}"\n\n${courtesyLine}\n${SACRED_BRANDING.footer[language]}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    incrementCount();
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 animate-fadeIn">
      <NewModulesNavBar
        currentView="vani-card-maker"
        language={language}
        onSelectLanguage={onSelectLanguage}
        onNavigateView={onNavigateView}
        onClose={onClose}
      />

      {/* Header */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
          borderColor: '#D97706',
        }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-md space-y-2"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1
            style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
            className="text-xl sm:text-3xl font-serif font-black tracking-tight"
          >
            {ui.title}
          </h1>
          <span
            style={{ color: theme.textSecondary }}
            className="text-xs font-serif font-bold tabular-nums"
          >
            {ui.createdLabel} {prefs.cardsGeneratedCount}
          </span>
        </div>
        <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed max-w-3xl">
          {ui.subtitle}
        </p>
      </div>

      {/* Main 2-Column Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Controls Column */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
            borderColor: theme.cardBorder,
          }}
          className="lg:col-span-6 rounded-3xl border p-5 sm:p-6 shadow-sm space-y-5 flex flex-col justify-between"
        >
          <div className="space-y-5">
            {/* 1. Quote Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <label
                  style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                  className="text-sm font-serif font-black flex items-center gap-2"
                >
                  <Quote className="w-4 h-4 text-[#D97706]" />
                  <span>{ui.selectQuote}</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setIsCustomMode((prev) => !prev);
                  }}
                  style={
                    isCustomMode
                      ? { backgroundColor: '#6B1D1D', color: '#FFFFFF' }
                      : { backgroundColor: theme.bgSecondary, color: theme.textPrimary, borderColor: theme.cardBorder }
                  }
                  className="px-3 py-1.5 rounded-lg border text-xs font-serif font-bold cursor-pointer transition whitespace-nowrap"
                >
                  {ui.writeOwn}
                </button>
              </div>

              <div className="space-y-2">
                {(PRELOADED_QUOTES[language] || PRELOADED_QUOTES.hi).map((q, idx) => {
                  const selected = !isCustomMode && selectedPresetIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setIsCustomMode(false);
                        setSelectedPresetIdx(idx);
                        setQuoteText(q);
                      }}
                      style={{
                        backgroundColor: selected
                          ? isDarkMode
                            ? 'rgba(217, 119, 6, 0.2)'
                            : '#FDF8EE'
                          : theme.bgSecondary,
                        borderColor: selected ? '#D97706' : theme.cardBorder,
                        color: theme.textPrimary,
                      }}
                      className="w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-serif leading-relaxed transition cursor-pointer flex items-start justify-between gap-2"
                    >
                      <span>{q}</span>
                      {selected && <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />}
                    </button>
                  );
                })}
              </div>

              <textarea
                rows={3}
                value={quoteText}
                onChange={(e) => {
                  setIsCustomMode(true);
                  setQuoteText(e.target.value);
                }}
                placeholder={ui.customPlaceholder}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: isCustomMode ? '#D97706' : theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full p-3 rounded-xl border text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
              />
            </div>

            {/* 2. Sender Name */}
            <div className="space-y-2">
              <label
                htmlFor="card-maker-sender-name"
                style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                className="text-sm font-serif font-black flex items-center gap-2"
              >
                <User className="w-4 h-4 text-[#D97706]" />
                <span>{ui.yourName}</span>
              </label>
              <input
                id="card-maker-sender-name"
                type="text"
                value={prefs.senderName}
                onChange={(e) => setPrefs((prev) => ({ ...prev, senderName: e.target.value }))}
                placeholder={ui.namePlaceholder}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>

            {/* 3. Background Themes */}
            <div className="space-y-2.5">
              <div
                style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
                className="text-sm font-serif font-black flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#D97706]" />
                <span>{ui.chooseTheme}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CARD_THEMES.map((tItem) => {
                  const isSelected = prefs.selectedTheme === tItem.id;
                  return (
                    <button
                      key={tItem.id}
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setPrefs((prev) => ({ ...prev, selectedTheme: tItem.id }));
                      }}
                      style={{
                        borderColor: isSelected ? '#D97706' : theme.cardBorder,
                        backgroundColor: theme.bgSecondary,
                      }}
                      className={`min-h-[48px] p-2.5 rounded-xl border-2 flex items-center gap-3 transition cursor-pointer text-left ${
                        isSelected ? 'ring-2 ring-amber-500/30 shadow-xs' : 'hover:border-amber-500/50'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg shrink-0 border border-black/15 ${tItem.previewBgClass}`}
                      />
                      <span
                        style={{ color: theme.textPrimary }}
                        className="text-xs font-serif font-bold truncate"
                      >
                        {tItem.name[language] || tItem.name.hi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t space-y-2.5" style={{ borderColor: theme.cardBorder }}>
            {statusMessage && (
              <div className="p-2.5 rounded-xl bg-emerald-600/15 border border-emerald-600/30 text-emerald-800 dark:text-emerald-200 text-xs font-serif font-bold text-center">
                {statusMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleDownloadCard}
                className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#6B1D1D] hover:bg-[#541515] text-white text-xs sm:text-sm font-serif font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer active:scale-[0.99] disabled:opacity-60"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{ui.downloadBtn}</span>
              </button>

              <button
                type="button"
                disabled={isGenerating}
                onClick={handleNativeShare}
                className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs sm:text-sm font-serif font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer active:scale-[0.99] disabled:opacity-60"
              >
                <Share2 className="w-4 h-4 shrink-0" />
                <span>{ui.shareBtn}</span>
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="flex-1 min-h-[44px] px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-serif font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{ui.whatsappBtn}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsCustomMode(false);
                  setSelectedPresetIdx(0);
                  setQuoteText(PRELOADED_QUOTES[language][0]);
                }}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="min-h-[44px] px-3.5 py-2 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer hover:brightness-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{ui.resetBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Column */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#1C1612' : '#FDF8EE',
            borderColor: theme.cardBorder,
          }}
          className="lg:col-span-6 rounded-3xl border p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between">
            <span
              style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
              className="text-sm font-serif font-black flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>{ui.livePreview}</span>
            </span>
            <span style={{ color: theme.textSecondary }} className="text-xs font-serif">
              {activeTheme.name[language]}
            </span>
          </div>

          {/* Card Visual Frame */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`w-full max-w-[460px] aspect-square rounded-2xl p-5 sm:p-8 shadow-xl relative flex flex-col justify-between text-center transition-all ${activeTheme.previewBgClass}`}
              style={{
                border: `4px solid ${activeTheme.borderColor}`,
              }}
            >
              <div
                className="absolute inset-3 rounded-xl pointer-events-none"
                style={{ border: `1.5px solid ${activeTheme.innerBorderColor}` }}
              />

              <div className="relative z-10 space-y-1.5 pt-2">
                <p
                  style={{ color: activeTheme.accentColor }}
                  className="text-sm sm:text-base font-serif font-black tracking-wide"
                >
                  {SACRED_BRANDING.header[language]}
                </p>
                <div className="text-2xl select-none" aria-hidden="true">
                  🪷
                </div>
              </div>

              <div className="relative z-10 px-2 my-auto">
                <p
                  style={{ color: activeTheme.textColor }}
                  className="text-base sm:text-xl font-serif font-bold leading-relaxed whitespace-pre-line break-words"
                >
                  {quoteText.trim() || PRELOADED_QUOTES[language][0]}
                </p>
              </div>

              <div
                className="relative z-10 pt-3 border-t space-y-1 pb-1"
                style={{ borderColor: activeTheme.innerBorderColor }}
              >
                <p
                  style={{ color: activeTheme.accentColor }}
                  className="text-xs sm:text-sm font-serif font-black"
                >
                  {courtesyLine}
                </p>
                <p
                  style={{ color: activeTheme.mutedColor }}
                  className="text-[11px] font-serif font-semibold opacity-90"
                >
                  {SACRED_BRANDING.footer[language]} · Saheb World
                </p>
              </div>
            </div>
          </div>

          <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
