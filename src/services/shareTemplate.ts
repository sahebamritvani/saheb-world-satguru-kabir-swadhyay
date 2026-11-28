import { Language } from '../types';
import { formatCoupletIntoTwoLines, formatCoupletString } from '../utils/textSanitizer';

/**
 * Standardized Sacred Share Template across the entire Saheb World App
 * Strictly enforces:
 * - Top Header: "🌹 ।। सत्यनाम ।। 🌹" (HI), "🌹 ।। ਸਤਯਨਾਮ ।। 🌹" (PB), "🌹 || Satyanaam || 🌹" (EN)
 * - Center Doha: 2 distinct lines, bold maroon text, ending with proper double vertical bar (॥)
 * - Attribution Line right below Doha: "— सद्गुरु कबीर साहेब" (HI), "— ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ" (PB), "— Satguru Kabir Saheb" (EN)
 * - Clean Unified Footer (no duplicate branding):
 *   HI: "सौजन्यः साहेब वर्ल्ड साधक परिवार (Saheb World)\n।। साहेब बंदगी साहेब ।। 🙏"
 *   PB: "ਸੌਜੰਨਿਆ: ਸਾਹੇਬ ਵਰਲਡ ਸਾਧਕ ਪਰਿਵਾਰ (Saheb World)\n।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।। 🙏"
 *   EN: "Courtesy: Saheb World Sadhak Parivar\n|| Saheb Bandagi Saheb || 🙏"
 */
export const SACRED_SHARE_TEMPLATE = {
  header: {
    hi: '🌹 ।। सत्यनाम ।। 🌹',
    pb: '🌹 ।। ਸਤਯਨਾਮ ।। 🌹',
    en: '🌹 || Satyanaam || 🌹',
  },
  attribution: {
    hi: '— सतगुरु कबीर साहेब',
    pb: '— ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ',
    en: '— Satguru Kabir Saheb',
  },
  footer: {
    hi: 'सौजन्य: साहेब वर्ल्ड (Saheb World)\n।। साहेब बंदगी साहेब ।। 🙏',
    pb: 'ਸੌਜਨਯ: ਸਾਹਿਬ ਵਰਲਡ (Saheb World)\n।। ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ ।। 🙏',
    en: 'Courtesy: Saheb World\n|| Saheb Bandagi Saheb || 🙏',
  },
} as const;

export interface StandardShareOptions {
  text: string;
  language: Language;
  attribution?: string;
  customCourtesy?: string;
  source?: string;
  meaning?: string;
  lifeMessage?: string;
  sakhiNumber?: number | string;
}

/**
 * Builds the exact standardized share text for WhatsApp, native share, or clipboard.
 */
export function buildStandardShareText(options: StandardShareOptions): string {
  const {
    text,
    language,
    attribution,
    customCourtesy,
    source,
    meaning,
    lifeMessage,
    sakhiNumber,
  } = options;

  const header = SACRED_SHARE_TEMPLATE.header[language] || SACRED_SHARE_TEMPLATE.header.hi;
  const standardAttribution =
    attribution || SACRED_SHARE_TEMPLATE.attribution[language] || SACRED_SHARE_TEMPLATE.attribution.hi;

  const formattedDoha = formatCoupletString(text, language);

  let footerText: string;
  if (customCourtesy && customCourtesy.trim()) {
    const cleaned = customCourtesy
      .replace(/^(?:सौजन्य[ः:]|ਸੌਜੰਨਿਆ:|Courtesy:)\s*/i, '')
      .replace(/\s*\(Saheb World\)$/i, '')
      .trim();
    if (language === 'pb') {
      footerText = `ਸੌਜੰਨਿਆ: ${cleaned} (Saheb World)\n।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।। 🙏`;
    } else if (language === 'en') {
      footerText = `Courtesy: ${cleaned} (Saheb World)\n|| Saheb Bandagi Saheb || 🙏`;
    } else {
      footerText = `सौजन्यः ${cleaned} (Saheb World)\n।। साहेब बंदगी साहेब ।। 🙏`;
    }
  } else {
    footerText = SACRED_SHARE_TEMPLATE.footer[language] || SACRED_SHARE_TEMPLATE.footer.hi;
  }

  const sections: string[] = [header, ''];

  if (sakhiNumber) {
    const numLabel =
      language === 'pb'
        ? `ਸਾਖੀ #${sakhiNumber}`
        : language === 'en'
        ? `Sakhi #${sakhiNumber}`
        : `साखी #${sakhiNumber}`;
    sections.push(`[${numLabel}]`);
  }

  sections.push(formattedDoha);
  sections.push(standardAttribution);

  if (source && source.trim()) {
    const srcPrefix =
      language === 'pb' ? '📖 ਸਰੋਤ' : language === 'en' ? '📖 Source' : '📖 स्रोत';
    sections.push('');
    sections.push(`${srcPrefix}: ${source.trim()}`);
  }

  if (meaning && meaning.trim()) {
    const meaningPrefix =
      language === 'pb'
        ? '🕊️ ਭਾਵਾਰਥ'
        : language === 'en'
        ? '🕊️ Spiritual Meaning'
        : '🕊️ भावार्थ';
    sections.push('');
    sections.push(`${meaningPrefix}:\n${meaning.trim()}`);
  }

  if (lifeMessage && lifeMessage.trim()) {
    const lifeMsgPrefix =
      language === 'pb'
        ? '🌟 ਜੀਵਨ ਸੰਦੇਸ਼'
        : language === 'en'
        ? '🌟 Life Message'
        : '🌟 जीवन संदेश';
    sections.push('');
    sections.push(`${lifeMsgPrefix}:\n${lifeMessage.trim()}`);
  }

  sections.push('');
  sections.push(footerText);

  return sections.join('\n');
}

/**
 * Renders the standardized sacred Doha card on an HTML5 canvas.
 * Guaranteed:
 * - Warm cream background (#FFFDF7 / #FDF8EE)
 * - Dual gold and maroon borders (#D97706 / #6B1D1D) with corner ornaments
 * - Top Header: "🌹 ।। सत्यनाम ।। 🌹"
 * - Center Doha: Bold maroon (#6B1D1D), 2 distinct lines ending with double vertical bar (॥)
 * - Attribution Line: "— सद्गुरु कबीर साहेब"
 * - Clean Unified Footer: "सौजन्यः साहेब वर्ल्ड साधक परिवार (Saheb World)\n।। साहेब बंदगी साहेब ।। 🙏"
 * - Zero duplicate branding!
 */
export async function renderStandardDohaCanvas(
  canvas: HTMLCanvasElement,
  options: {
    verseText: string;
    language: Language;
    sourceText?: string;
    meaningText?: string;
    customCourtesy?: string;
    width?: number;
    height?: number;
  }
): Promise<void> {
  const {
    verseText,
    language,
    sourceText,
    meaningText,
    customCourtesy,
    width = 1080,
    height = 1080,
  } = options;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context not available');

  try {
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {}

  const serifFont = '"Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
  const sansFont = '"Noto Sans Devanagari", "Noto Sans Gurmukhi", system-ui, sans-serif';

  // 1. Warm Antique Cream / Parchment Background (#FFFDF7 to #FAF3E6)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#FFFDF7');
  bgGrad.addColorStop(0.5, '#FDF8EE');
  bgGrad.addColorStop(1, '#FAF3E6');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle radial divine golden glow
  const glow = ctx.createRadialGradient(
    width / 2,
    height * 0.45,
    30,
    width / 2,
    height * 0.45,
    width * 0.55
  );
  glow.addColorStop(0, 'rgba(217, 119, 6, 0.12)');
  glow.addColorStop(1, 'rgba(217, 119, 6, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  // 2. Dual Ornate Borders: Outer Gold (#D97706), Inner Maroon (#6B1D1D)
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 12;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.strokeStyle = '#6B1D1D';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(54, 54, width - 108, height - 108);

  // Corner Ornaments
  ctx.fillStyle = '#D97706';
  ctx.font = 'bold 30px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❖', 86, 86);
  ctx.fillText('❖', width - 86, 86);
  ctx.fillText('❖', 86, height - 86);
  ctx.fillText('❖', width - 86, height - 86);

  // 3. Subtle Portrait Watermark in Center (~8% opacity)
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/Saheb_World_icon.jpg';
    await new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    });
    if (img.complete && img.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = 0.08;
      const imgSize = 420;
      ctx.drawImage(img, (width - imgSize) / 2, (height - imgSize) / 2 - 20, imgSize, imgSize);
      ctx.restore();
    }
  } catch {}

  // 4. Top Header: "🌹 ।। सत्यनाम ।। 🌹"
  ctx.fillStyle = '#6B1D1D';
  ctx.font = `bold 42px ${serifFont}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(SACRED_SHARE_TEMPLATE.header[language], width / 2, 112);

  // Decorative divider below header
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 160, 172);
  ctx.lineTo(width / 2 - 22, 172);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width / 2 + 22, 172);
  ctx.lineTo(width / 2 + 160, 172);
  ctx.stroke();

  ctx.fillStyle = '#D97706';
  ctx.font = 'bold 20px serif';
  ctx.textBaseline = 'middle';
  ctx.fillText('🪷', width / 2, 172);

  // Sub-header / Source (if present)
  let contentTopY = 220;
  if (sourceText && sourceText.trim()) {
    ctx.font = `italic 600 24px ${sansFont}`;
    ctx.fillStyle = '#78350F';
    ctx.textBaseline = 'top';
    ctx.fillText(`॥ ${sourceText.trim()} ॥`, width / 2, 204);
    contentTopY = 250;
  }

  // 5. Center Doha: Strictly TWO distinct lines with ending "॥"
  const [line1, line2] = formatCoupletIntoTwoLines(verseText, language);
  const dohaLines = [line1, line2].filter(Boolean);

  // Calculate dynamic typography and vertical centering
  const maxDohaWidth = width - 160;
  let dohaFontSize = 46;
  ctx.font = `bold ${dohaFontSize}px ${serifFont}`;

  while (
    dohaFontSize > 32 &&
    dohaLines.some((l) => ctx.measureText(l).width > maxDohaWidth)
  ) {
    dohaFontSize -= 2;
    ctx.font = `bold ${dohaFontSize}px ${serifFont}`;
  }

  const lineHeight = dohaFontSize * 1.55;
  const dohaBlockH = dohaLines.length * lineHeight;
  const attributionH = 44;
  const meaningBlockH = meaningText && meaningText.trim() ? 160 : 0;
  const footerBlockH = 150;
  const availableH = height - contentTopY - footerBlockH;

  let dohaStartY = contentTopY + Math.max(20, (availableH - dohaBlockH - attributionH - meaningBlockH) * 0.42);

  ctx.fillStyle = '#6B1D1D'; // Bold sacred maroon
  ctx.font = `bold ${dohaFontSize}px ${serifFont}`;
  ctx.textBaseline = 'top';

  for (const line of dohaLines) {
    ctx.fillText(line, width / 2, dohaStartY);
    dohaStartY += lineHeight;
  }

  // 6. Attribution Line right below Doha: "— सद्गुरु कबीर साहेब"
  const attributionText = SACRED_SHARE_TEMPLATE.attribution[language];
  ctx.fillStyle = '#B45309'; // Warm golden-amber
  ctx.font = `bold 28px ${serifFont}`;
  ctx.fillText(attributionText, width / 2, dohaStartY + 14);
  dohaStartY += attributionH + 18;

  // 7. Meaning (Bhavarth) if provided and space permits
  if (meaningText && meaningText.trim()) {
    ctx.fillStyle = 'rgba(217, 119, 6, 0.08)';
    const boxW = width - 200;
    const boxX = 100;
    const boxY = dohaStartY + 10;
    const boxH = Math.min(180, height - footerBlockH - boxY - 30);

    if (boxH >= 110) {
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(boxX, boxY, boxW, boxH, 18);
      } else {
        ctx.rect(boxX, boxY, boxW, boxH);
      }
      ctx.fill();

      ctx.strokeStyle = 'rgba(217, 119, 6, 0.32)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      ctx.font = `600 22px ${sansFont}`;
      ctx.fillStyle = '#292524';
      ctx.textBaseline = 'top';

      const words = meaningText.trim().split(/\s+/);
      let curLine = '';
      let textY = boxY + 22;
      let linesCount = 0;
      const maxLines = boxH > 140 ? 3 : 2;

      for (const w of words) {
        const test = curLine ? `${curLine} ${w}` : w;
        if (ctx.measureText(test).width > boxW - 50) {
          ctx.fillText(curLine, width / 2, textY);
          curLine = w;
          textY += 34;
          linesCount++;
          if (linesCount >= maxLines) {
            curLine = '';
            break;
          }
        } else {
          curLine = test;
        }
      }
      if (curLine && linesCount < maxLines) {
        ctx.fillText(curLine, width / 2, textY);
      }
    }
  }

  // 8. Clean Unified Footer:
  // "सौजन्यः साहेब वर्ल्ड साधक परिवार (Saheb World)"
  // "।। साहेब बंदगी साहेब ।। 🙏"
  // (Zero duplicate branding!)
  const footerLine1 =
    customCourtesy && customCourtesy.trim()
      ? language === 'pb'
        ? `ਸੌਜੰਨਿਆ: ${customCourtesy.trim()} (Saheb World)`
        : language === 'en'
        ? `Courtesy: ${customCourtesy.trim()} (Saheb World)`
        : `सौजन्यः ${customCourtesy.trim()} (Saheb World)`
      : SACRED_SHARE_TEMPLATE.footer[language].split('\n')[0];

  const footerLine2 = SACRED_SHARE_TEMPLATE.footer[language].split('\n')[1];

  const footerTopY = height - 146;

  // Horizontal divider
  ctx.strokeStyle = 'rgba(107, 29, 29, 0.28)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(180, footerTopY);
  ctx.lineTo(width - 180, footerTopY);
  ctx.stroke();

  // Courtesy line
  ctx.fillStyle = '#78350F';
  ctx.font = `bold 24px ${sansFont}`;
  ctx.textBaseline = 'top';
  ctx.fillText(footerLine1, width / 2, footerTopY + 16);

  // Sacred closing salutation
  ctx.fillStyle = '#6B1D1D';
  ctx.font = `bold 34px ${serifFont}`;
  ctx.fillText(footerLine2, width / 2, footerTopY + 54);
}
