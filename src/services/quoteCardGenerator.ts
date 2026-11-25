import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { formatCoupletIntoTwoLines, formatCoupletString } from '../utils/textSanitizer';
import { SACRED_SHARE_TEMPLATE } from './shareTemplate';

export interface GeneratedCardResult {
  blob: Blob;
  objectUrl: string;
  dataUrl?: string;
  fileName: string;
  width?: number;
  height?: number;
}

export interface CardThemeItem {
  id: string;
  label: string;
  bg: string;
  text: string;
  secondary?: string;
  accent?: string;
}

export const CARD_THEMES: Record<string, CardThemeItem> = {
  scenic_tree: { id: 'scenic_tree', label: 'बरगद घाट', bg: '#1A120B', text: '#FEF08A', secondary: '#FDE047', accent: '#F59E0B' },
  scenic_maghar: { id: 'scenic_maghar', label: 'मगहर तीर्थ धाम', bg: '#120D08', text: '#FEF3C7', secondary: '#FCD34D', accent: '#F59E0B' },
  royal: { id: 'royal', label: 'शाही पीताम्बरी', bg: '#FFFDF9', text: '#2E1C0C', secondary: '#78350F', accent: '#B45309' },
  saffron: { id: 'saffron', label: 'केसरिया भक्ति', bg: '#FDF2E9', text: '#2E1A0C', secondary: '#9A3412', accent: '#EA580C' },
  emerald: { id: 'emerald', label: 'हरित शांति', bg: '#E8F8F5', text: '#142C24', secondary: '#065F46', accent: '#059669' },
  oled: { id: 'oled', label: 'परम शांत (डार्क)', bg: '#121212', text: '#E5E7EB', secondary: '#9CA3AF', accent: '#D97706' },
  nature_mountain: { id: 'nature_mountain', label: 'उषःकाल पर्वत', bg: '#2D1B06', text: '#FAD074', secondary: '#F59E0B', accent: '#F59E0B' },
  nature_forest: { id: 'nature_forest', label: 'सघन वन', bg: '#061A12', text: '#6EE7B7', secondary: '#34D399', accent: '#10B981' },
  nature_sunset: { id: 'nature_sunset', label: 'संध्या लालिमा', bg: '#2A0820', text: '#FFD166', secondary: '#FB7185', accent: '#F43F5E' },
  nature_river: { id: 'nature_river', label: 'अमृत सरिता', bg: '#031B2E', text: '#67E8F9', secondary: '#38BDF8', accent: '#06B6D4' },
  nature_autumn: { id: 'nature_autumn', label: 'स्वर्ण ऋतु', bg: '#2C1A04', text: '#FFE082', secondary: '#FBBF24', accent: '#F59E0B' },
};

export function triggerBlobDownload(objectUrl: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadOrShareImage(
  result: GeneratedCardResult,
  title: string,
  text: string
): Promise<'shared' | 'downloaded'> {
  if (navigator.share && navigator.canShare) {
    try {
      const file = new File([result.blob], result.fileName, { type: 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title,
          text,
          files: [file],
        });
        return 'shared';
      }
    } catch (e: any) {
      if (e?.name === 'AbortError') return 'shared';
    }
  }

  triggerBlobDownload(result.objectUrl, result.fileName);
  return 'downloaded';
}

export async function generateQuoteCardCanvas(options: {
  sakhi: Sakhi;
  language: Language;
  ratio?: 'square' | 'portrait' | 'story' | string;
  design?: string;
  customText?: string;
}): Promise<GeneratedCardResult> {
  const { sakhi, language, ratio = 'square', design = 'royal', customText } = options;

  let width = 1080;
  let height = 1080;
  if (ratio === 'portrait') {
    width = 1080;
    height = 1350;
  } else if (ratio === 'story') {
    width = 1080;
    height = 1920;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  const themeItem = CARD_THEMES[design] || CARD_THEMES.scenic_maghar || Object.values(CARD_THEMES)[0];

  // Draw background
  ctx.fillStyle = themeItem.bg;
  ctx.fillRect(0, 0, width, height);

  // Gradient Overlay
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, 'rgba(255,255,255,0.06)');
  grad.addColorStop(1, 'rgba(0,0,0,0.25)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Decorative Border
  ctx.strokeStyle = themeItem.accent || '#D97706';
  ctx.lineWidth = 14;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  ctx.lineWidth = 3;
  ctx.strokeRect(54, 54, width - 108, height - 108);

  // Header: "🌹 ।। सत्यनाम ।। 🌹"
  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.font = 'bold 38px "Noto Serif Devanagari", serif';
  ctx.textAlign = 'center';
  ctx.fillText(SACRED_SHARE_TEMPLATE.header[language] || SACRED_BRANDING.header[language], width / 2, 120);

  ctx.font = '24px "Noto Sans Devanagari", sans-serif';
  ctx.fillStyle = themeItem.text;
  ctx.fillText(
    language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸਾਖੀ'
      : language === 'en'
      ? 'Satguru Kabir Saheb Sacred Sakhi'
      : 'सतगुरु कबीर साहेब पावन साखी',
    width / 2,
    165
  );

  // Main Verse Text (Strictly 2 lines ending with double danda ॥)
  const rawText = customText || sakhi.text[language] || sakhi.text.hi;
  const [line1, line2] = formatCoupletIntoTwoLines(rawText, language);
  const lines = [line1, line2].filter(Boolean);

  ctx.font = 'bold 44px "Noto Serif Devanagari", serif';
  ctx.fillStyle = themeItem.text;

  let currentY = height * 0.40 - (lines.length * 30);
  lines.forEach((line) => {
    ctx.fillText(line.trim(), width / 2, currentY);
    currentY += 68;
  });

  // Attribution Line right below the Doha: "— सद्गुरु कबीर साहेब"
  const attributionText = SACRED_SHARE_TEMPLATE.attribution[language];
  ctx.font = 'bold 26px "Noto Serif Devanagari", serif';
  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.fillText(attributionText, width / 2, currentY + 10);
  currentY += 46;

  // Bhavarth
  const bhavarth = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
  if (bhavarth) {
    ctx.font = 'italic 28px "Noto Sans Devanagari", sans-serif';
    ctx.fillStyle = themeItem.text;
    ctx.globalAlpha = 0.88;
    
    // Line wrap for bhavarth
    const words = bhavarth.split(' ');
    let currentLine = '';
    let bY = currentY + 40;
    const maxBhavarthLines = ratio === 'story' ? 10 : 4;
    let lineCount = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = currentLine + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > width - 180 && n > 0) {
        ctx.fillText(currentLine, width / 2, bY);
        currentLine = words[n] + ' ';
        bY += 42;
        lineCount++;
        if (lineCount >= maxBhavarthLines) {
          ctx.fillText('...', width / 2, bY);
          break;
        }
      } else {
        currentLine = testLine;
      }
    }
    if (lineCount < maxBhavarthLines && currentLine.trim()) {
      ctx.fillText(currentLine, width / 2, bY);
    }
    ctx.globalAlpha = 1.0;
  }

  // Clean Unified Footer:
  // "सौजन्यः साहेब वर्ल्ड साधक परिवार (Saheb World)"
  // "।। साहेब बंदगी साहेब ।। 🙏"
  // Zero duplicate branding!
  const footerLines = SACRED_SHARE_TEMPLATE.footer[language].split('\n');
  const footerL1 = footerLines[0];
  const footerL2 = footerLines[1];

  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.font = 'bold 23px "Noto Sans Devanagari", sans-serif';
  ctx.fillText(footerL1, width / 2, height - 92);

  ctx.font = 'bold 30px "Noto Serif Devanagari", serif';
  ctx.fillStyle = themeItem.text;
  ctx.fillText(footerL2, width / 2, height - 52);

  return new Promise<GeneratedCardResult>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas toBlob failed'));
        return;
      }
      const objectUrl = URL.createObjectURL(blob);
      const fileName = `SahebWorld_Sakhi_${sakhi.number || 'Card'}_${Date.now()}.png`;
      resolve({
        blob,
        objectUrl,
        fileName,
        width,
        height,
      });
    }, 'image/png');
  });
}
