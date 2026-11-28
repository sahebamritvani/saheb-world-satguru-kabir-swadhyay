import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { formatCoupletIntoTwoLines, formatCoupletString } from '../utils/textSanitizer';
import { SACRED_SHARE_TEMPLATE } from './shareTemplate';
import magharDhamWallpaper from '../assets/images/clean_maghar_dham_nature_1794927914335.jpg';
import kabirChauraKashiWallpaper from '../assets/images/kabir_chaura_kashi_dham_1795824432847.jpg';
import lahartaraPondWallpaper from '../assets/images/lahartara_lotus_pond_dham_1795824433502.jpg';
import bandhavgarhHillWallpaper from '../assets/images/bandhavgarh_kabir_hill_dham_1795824434607.jpg';
import jagannathPuriMathWallpaper from '../assets/images/jagannath_puri_math_dham_1795824434844.jpg';
import damakhedaDarshanWallpaper from '../assets/images/damakheda_darshan_sthal_dham_1795824435749.jpg';

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
  imageSrc?: string;
}

export const CARD_THEMES: Record<string, CardThemeItem> = {
  // 1. शाही भोजपत्र क्रीम (Royal Bhojpatra Cream & Gold — default)
  royal_bhojpatra: {
    id: 'royal_bhojpatra',
    label: 'शाही भोजपत्र क्रीम',
    bg: '#FAF3E0',
    text: '#2E1C0C',
    secondary: '#78350F',
    accent: '#B45309',
  },
  // 2. मगहर पावन समाधि स्थल (Maghar Nirvana Dham)
  maghar_dham: {
    id: 'maghar_dham',
    label: 'मगहर पावन समाधि स्थल',
    bg: '#180E08',
    text: '#FEF3C7',
    secondary: '#FCD34D',
    accent: '#F59E0B',
    imageSrc: magharDhamWallpaper,
  },
  // 3. कबीर चौरा धाम, काशी (Kabir Chaura Math, Kashi)
  kabir_chaura_kashi: {
    id: 'kabir_chaura_kashi',
    label: 'कबीर चौरा धाम, काशी',
    bg: '#1C1008',
    text: '#FEF08A',
    secondary: '#FDE047',
    accent: '#FBBF24',
    imageSrc: kabirChauraKashiWallpaper,
  },
  // 4. लहरतारा पावन सरोवर (Lahartara Sacred Lotus Pond)
  lahartara_pond: {
    id: 'lahartara_pond',
    label: 'लहरतारा पावन सरोवर',
    bg: '#061824',
    text: '#E0F2FE',
    secondary: '#7DD3FC',
    accent: '#38BDF8',
    imageSrc: lahartaraPondWallpaper,
  },
  // 5. बांधवगढ़ पावन स्थल (Bandhavgarh Sacred Hill & Forest)
  bandhavgarh_forest: {
    id: 'bandhavgarh_forest',
    label: 'बांधवगढ़ पावन स्थल',
    bg: '#071A12',
    text: '#DCFCE7',
    secondary: '#86EFAC',
    accent: '#10B981',
    imageSrc: bandhavgarhHillWallpaper,
  },
  // 6. जगन्नाथ पुरी कबीर मठ (Jagannath Puri Kabir Chaura Math)
  jagannath_puri_math: {
    id: 'jagannath_puri_math',
    label: 'जगन्नाथ पुरी कबीर मठ',
    bg: '#0B192C',
    text: '#FEF9C3',
    secondary: '#FDE047',
    accent: '#EAB308',
    imageSrc: jagannathPuriMathWallpaper,
  },
  // 7. दामाखेड़ा दर्शन स्थल (Damakheda Paavan Darshan Sthal)
  damakheda_darshan: {
    id: 'damakheda_darshan',
    label: 'दामाखेड़ा दर्शन स्थल',
    bg: '#220804',
    text: '#FFEDD5',
    secondary: '#FDBA74',
    accent: '#F97316',
    imageSrc: damakhedaDarshanWallpaper,
  },

  // Backward-compatible aliases
  royal: { id: 'royal', label: 'शाही पीताम्बरी', bg: '#FFFDF9', text: '#2E1C0C', secondary: '#78350F', accent: '#B45309' },
  scenic_tree: { id: 'scenic_tree', label: 'बरगद घाट', bg: '#1A120B', text: '#FEF08A', secondary: '#FDE047', accent: '#F59E0B' },
  scenic_maghar: { id: 'scenic_maghar', label: 'मगहर तीर्थ धाम', bg: '#120D08', text: '#FEF3C7', secondary: '#FCD34D', accent: '#F59E0B' },
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
  ratio?: 'square' | 'portrait' | 'story' | '1:1' | '9:16' | '16:9' | string;
  design?: string;
  customText?: string;
}): Promise<GeneratedCardResult> {
  const { sakhi, language, ratio = '1:1', design = 'royal_bhojpatra', customText } = options;

  let width = 1080;
  let height = 1080; // Default 1:1

  if (ratio === '9:16' || ratio === 'story') {
    width = 1080;
    height = 1920; // Exact WhatsApp Status / Story vertical format
  } else if (ratio === '16:9') {
    width = 1920;
    height = 1080;
  } else if (ratio === 'portrait') {
    width = 1080;
    height = 1350;
  } else {
    width = 1080;
    height = 1080;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  const themeItem = CARD_THEMES[design] || CARD_THEMES.royal_bhojpatra || Object.values(CARD_THEMES)[0];

  // 1. Draw background (Image asset if available, else solid color + gradient)
  let imageRendered = false;
  if (themeItem.imageSrc) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = themeItem.imageSrc!;
      });
      if (img.complete && img.naturalWidth > 0) {
        imageRendered = true;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;
        let dw = width;
        let dh = height;
        let dx = 0;
        let dy = 0;
        if (imgRatio > canvasRatio) {
          dh = height;
          dw = height * imgRatio;
          dx = (width - dw) / 2;
        } else {
          dw = width;
          dh = width / imgRatio;
          dy = (height - dh) / 2;
        }
        ctx.drawImage(img, dx, dy, dw, dh);

        // Rich dark scrim overlay for high text contrast
        ctx.fillStyle = 'rgba(12, 8, 5, 0.58)';
        ctx.fillRect(0, 0, width, height);
      }
    } catch {}
  }

  if (!imageRendered) {
    ctx.fillStyle = themeItem.bg;
    ctx.fillRect(0, 0, width, height);

    // 2. Gradient Overlay for subtle depth
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    if (design === 'royal_bhojpatra') {
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.40)');
      grad.addColorStop(1, 'rgba(245, 230, 195, 0.25)');
    } else {
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  // 3. Subtle background watermark (opacity: 0.10)
  const sunGrad = ctx.createRadialGradient(width / 2, height * 0.45, 20, width / 2, height * 0.45, 320);
  sunGrad.addColorStop(0, 'rgba(217, 119, 6, 0.12)');
  sunGrad.addColorStop(0.6, 'rgba(217, 119, 6, 0.04)');
  sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = sunGrad;
  ctx.beginPath();
  ctx.arc(width / 2, height * 0.45, 320, 0, Math.PI * 2);
  ctx.fill();

  // 4. Decorative Border
  ctx.strokeStyle = themeItem.accent || '#D97706';
  ctx.lineWidth = ratio === '9:16' ? 14 : 12;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.lineWidth = 2.5;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  // 5. Header: "🌹 ।। सत्यनाम ।। 🌹"
  const headerY = ratio === '9:16' ? 120 : 100;
  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.font = 'bold 36px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText(SACRED_SHARE_TEMPLATE.header[language] || SACRED_BRANDING.header[language], width / 2, headerY);

  ctx.font = 'bold 22px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif';
  ctx.fillStyle = imageRendered ? '#FEF3C7' : themeItem.text;
  ctx.fillText(
    language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸਾਖੀ'
      : language === 'en'
      ? 'Satguru Kabir Saheb Sacred Sakhi'
      : 'सतगुरु कबीर साहेब पावन साखी',
    width / 2,
    headerY + 44
  );

  // 6. Main Verse Text (Strictly 2 lines ending with double danda ॥ with horizontal auto-fit & colophon removal)
  const cleanVerseSource = (customText || sakhi.text[language] || sakhi.text.hi)
    .replace(/॥\s*(?:ਸਲੋਕ|सलोक|Salok)\s*(?:ਭਗਤ|भगत|Bhagat)\s*(?:ਕਬੀਰ|कबीर|Kabir)\s*(?:ਜੀਉ|जीउ|Jio)\s*(?:ਕੇ|के|Ke)\s*(?:ਸਮਾਪਤ|समाप्त|Samaapat)\s*॥/gi, '')
    .replace(/\(ਸਮਾਪਤ\)|\(समाप्त\)/gi, '')
    .trim();
  const [l1, l2] = formatCoupletIntoTwoLines(cleanVerseSource, language);
  const rawLines = [l1, l2].filter(Boolean);

  const maxVerseWidth = width - 140;
  let verseFontSize = ratio === '9:16' ? 44 : 38;

  // Auto-fit check
  ctx.font = `bold italic ${verseFontSize}px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif`;
  for (const line of rawLines) {
    while (ctx.measureText(line).width > maxVerseWidth && verseFontSize > 24) {
      verseFontSize -= 1;
      ctx.font = `bold italic ${verseFontSize}px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif`;
    }
  }

  ctx.fillStyle = imageRendered ? '#FFFFFF' : themeItem.text;
  const verseLineHeight = verseFontSize * 1.5;
  let currentY = ratio === '9:16' ? height * 0.28 : height * 0.29;

  rawLines.forEach((line) => {
    ctx.fillText(line.trim(), width / 2, currentY);
    currentY += verseLineHeight;
  });

  // 7. Attribution Line right below Doha: "— सतगुरु कबीर साहेब"
  const attributionText = SACRED_SHARE_TEMPLATE.attribution[language];
  ctx.font = 'bold 24px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.fillText(attributionText, width / 2, currentY + 12);
  currentY += 46;

  // 8. Auto-Height Dynamic Bhavarth Box (100% visible, never spills or clips)
  const bhavarth = sakhi.bhavarth[language] || sakhi.bhavarth.hi;
  if (bhavarth) {
    const boxW = width - 140;
    const boxX = 70;
    const footerLimit = height * 0.85;
    const maxAllowedBoxH = Math.max(140, footerLimit - currentY - 24);
    const titlePadding = 52;
    const bottomPadding = 24;

    const words = bhavarth.split(/\s+/).filter(Boolean);
    let bFontSize = ratio === '9:16' ? 26 : 22;
    let bLines: string[] = [];
    let bLineHeight = bFontSize * 1.55;

    // Dynamic auto-fit loop so all words fit without any clipping
    while (bFontSize >= 14) {
      ctx.font = `italic ${bFontSize}px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif`;
      bLines = [];
      let curLine = '';
      for (let n = 0; n < words.length; n++) {
        const testLine = curLine ? `${curLine} ${words[n]}` : words[n];
        if (ctx.measureText(testLine).width > boxW - 50) {
          if (curLine) bLines.push(curLine);
          curLine = words[n];
        } else {
          curLine = testLine;
        }
      }
      if (curLine) bLines.push(curLine);

      bLineHeight = bFontSize * 1.55;
      const neededH = titlePadding + (bLines.length * bLineHeight) + bottomPadding;
      if (neededH <= maxAllowedBoxH || bFontSize <= 14) {
        break;
      }
      bFontSize -= 1;
    }

    const dynamicBoxH = Math.min(maxAllowedBoxH, titlePadding + bLines.length * bLineHeight + bottomPadding);
    const boxY = Math.min(footerLimit - dynamicBoxH, Math.max(currentY + 20, ratio === '9:16' ? height * 0.48 : height * 0.52));

    // Draw Golden/Translucent Box
    ctx.fillStyle = imageRendered
      ? 'rgba(12, 10, 8, 0.82)'
      : design === 'royal_bhojpatra'
      ? 'rgba(255, 253, 247, 0.92)'
      : 'rgba(12, 10, 8, 0.75)';
    ctx.strokeStyle = themeItem.accent || '#D97706';
    ctx.lineWidth = 2;

    if (typeof (ctx as any).roundRect === 'function') {
      ctx.beginPath();
      (ctx as any).roundRect(boxX, boxY, boxW, dynamicBoxH, 16);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(boxX, boxY, boxW, dynamicBoxH);
      ctx.strokeRect(boxX, boxY, boxW, dynamicBoxH);
    }

    // Localized Bhavarth Header
    const bhavarthLabel =
      language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Essence:' : 'भावार्थ:';
    ctx.fillStyle = themeItem.accent || '#D97706';
    ctx.font = 'bold 22px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
    ctx.fillText(`।। ${bhavarthLabel} ।।`, width / 2, boxY + 36);

    // Render wrapped lines safely inside box without dropping any line
    ctx.font = `italic ${bFontSize}px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif`;
    ctx.fillStyle = imageRendered ? '#FEF08A' : themeItem.text;
    let bY = boxY + titlePadding + 14;

    bLines.forEach((bl) => {
      ctx.fillText(bl.trim(), width / 2, bY);
      bY += bLineHeight;
    });
  }

  // 9. Clean Unified Localized Footer:
  const footerL1 =
    language === 'pb'
      ? 'ਸੌਜਨਯ: ਸਾਹਿਬ ਵਰਲਡ (Saheb World)'
      : language === 'en'
      ? 'Courtesy: Saheb World'
      : 'सौजन्य: साहेब वर्ल्ड (Saheb World)';

  const footerL2 =
    language === 'pb'
      ? '।। ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ ।। 🙏'
      : language === 'en'
      ? '|| Saheb Bandagi Saheb || 🙏'
      : '।। साहेब बंदगी साहेब ।। 🙏';

  ctx.fillStyle = themeItem.accent || '#D97706';
  ctx.font = 'bold 22px "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif';
  ctx.fillText(footerL1, width / 2, height - (ratio === '9:16' ? 96 : 82));

  ctx.font = 'bold 28px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
  ctx.fillStyle = imageRendered ? '#FFFFFF' : themeItem.text;
  ctx.fillText(footerL2, width / 2, height - (ratio === '9:16' ? 52 : 44));

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
