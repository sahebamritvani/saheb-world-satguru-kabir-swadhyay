import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { buildThemeOneLineBlessing } from './swadhyayElevenSteps';
import { formatCoupletIntoTwoLines } from '../utils/textSanitizer';

export interface GeneratedCertificate {
  dataUrl: string;
  blob: Blob;
  fileNamePdf: string;
  fileNamePng: string;
}

export interface CertificateRenderOptions {
  userName?: string;
  themeBlessing?: string;
}

const HONORIFIC_PREFIXES = [
  // Multi-word / combined first
  'श्री/सुश्री',
  'ਸ਼੍ਰੀ/ਸੁਸ਼੍ਰੀ',
  'ਸ੍ਰੀ/ਸ੍ਰੀਮਤੀ',
  'shri/smt',
  'sri/smt',
  // Devanagari
  'श्रीमती',
  'सुश्री',
  'श्रीमान',
  'श्री',
  'साध्वी',
  'साधक',
  'साधु',
  'संत',
  'सन्त',
  'आचार्य',
  'महंत',
  'स्वामी',
  'भक्त',
  'गुरु',
  'भाई',
  'बहन',
  'माता',
  'डॉ',
  'पं',
  'प्रो',
  // Gurmukhi
  'ਸ੍ਰੀਮਤੀ',
  'ਸ਼੍ਰੀਮਤੀ',
  'ਸੁਸ੍ਰੀ',
  'ਸੁਸ਼੍ਰੀ',
  'ਸ੍ਰੀਮਾਨ',
  'ਸ੍ਰੀ',
  'ਸ਼੍ਰੀ',
  'ਸਾਧਵੀ',
  'ਸਾਧਕ',
  'ਸਾਧੂ',
  'ਸੰਤ',
  'ਭਗਤ',
  'ਭਾਈ',
  'ਬੀਬੀ',
  'ਮਾਤਾ',
  'ਸਰਦਾਰ',
  'ਡਾ',
  // English / Roman
  'shrimati',
  'sushri',
  'shree',
  'shri',
  'sri',
  'mrs',
  'ms',
  'mr',
  'miss',
  'smt',
  'sant',
  'sadhu',
  'sadhak',
  'sadhvi',
  'seeker',
  'devotee',
  'bhai',
  'sardar',
  'bibi',
  'mata',
  'swami',
  'acharya',
  'mahant',
  'dr',
  'prof',
];

/**
 * Formats the seeker's name cleanly without duplicating honorifics (e.g. "श्री/सुश्री सुश्री स्मृति")
 * and ensures a respectful "जी / ਜੀ / Ji" suffix.
 */
export function formatCertificateSeekerName(rawName: string | undefined, language: Language): string {
  const cleaned = (rawName || '')
    .trim()
    .replace(/^(?:श्री\/सुश्री|ਸ਼੍ਰੀ\/ਸੁਸ਼੍ਰੀ|ਸ੍ਰੀ\/ਸ੍ਰੀਮਤੀ|Sri\/Smt|Shri\/Smt)\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) {
    return language === 'pb'
      ? 'ਸ਼ਰਧਾਲੂ ਸਾਧਕ ਜੀ'
      : language === 'en'
      ? 'Devout Seeker'
      : 'श्रद्धालु साधक जी';
  }

  const lower = cleaned.toLowerCase();
  const hasHonorific = HONORIFIC_PREFIXES.some((prefix) => {
    const pLower = prefix.toLowerCase();
    if (lower === pLower) return true;
    return (
      lower.startsWith(`${pLower} `) ||
      lower.startsWith(`${pLower}.`) ||
      lower.startsWith(`${pLower}।`)
    );
  });

  const withPrefix = hasHonorific
    ? cleaned
    : language === 'pb'
    ? `ਸਾਧਕ ${cleaned}`
    : language === 'en'
    ? `Seeker ${cleaned}`
    : `साधक ${cleaned}`;

  const hasRespectfulSuffix = /(?:^|\s)(?:जी|ਜੀ|ji)\.?$/i.test(withPrefix);
  if (hasRespectfulSuffix) {
    return withPrefix;
  }

  return language === 'pb'
    ? `${withPrefix} ਜੀ`
    : language === 'en'
    ? `${withPrefix} Ji`
    : `${withPrefix} जी`;
}

/**
 * Localizes Granth name strictly into the active language so English doesn't leak into HI/PB certificates.
 */
export function localizeGranthaName(grantha: string | undefined, language: Language): string {
  const raw = (grantha || '').trim();
  const key = raw.toLowerCase();

  const map: Record<string, { hi: string; pb: string; en: string }> = {
    'kabir sagar': { hi: 'कबीर सागर', pb: 'ਕਬੀਰ ਸਾਗਰ', en: 'Kabir Sagar' },
    'sakhi sangrah': { hi: 'साखी संग्रह', pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ', en: 'Sakhi Sangrah' },
    'bijak': { hi: 'कबीर बीजक', pb: 'ਕਬੀਰ ਬੀਜਕ', en: 'Kabir Bijak' },
    'kabir bijak': { hi: 'कबीर बीजक', pb: 'ਕਬੀਰ ਬੀਜਕ', en: 'Kabir Bijak' },
    'beejak': { hi: 'कबीर बीजक', pb: 'ਕਬੀਰ ਬੀਜਕ', en: 'Kabir Bijak' },
    'anurag sagar': { hi: 'अनुराग सागर', pb: 'ਅਨੁਰਾਗ ਸਾਗਰ', en: 'Anurag Sagar' },
    'padavali': { hi: 'कबीर पदावली', pb: 'ਕਬੀਰ ਪਦਾਵਲੀ', en: 'Kabir Padavali' },
    'prabhat-sandhya': { hi: 'प्रभात-संध्या पाठ', pb: 'ਪ੍ਰਭਾਤ-ਸੰਧਿਆ ਪਾਠ', en: 'Prabhat-Sandhya Path' },
    'granthavali': { hi: 'कबीर ग्रंथावली', pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ', en: 'Kabir Granthavali' },
    'kabir granthavali': { hi: 'कबीर ग्रंथावली', pb: 'ਕਬੀਰ ਗ੍ਰੰਥਾਵਲੀ', en: 'Kabir Granthavali' },
    'shabdawali': { hi: 'कबीर शब्दावली', pb: 'ਕਬੀਰ ਸ਼ਬਦਾਵਲੀ', en: 'Kabir Shabdawali' },
  };

  if (map[key]) {
    return map[key][language] || map[key].hi;
  }

  return raw || (language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ' : language === 'en' ? 'Kabir Sagar' : 'कबीर सागर');
}

/**
 * Formats the Granth & Category label cleanly (e.g., "कबीर सागर (ज्ञान गुदड़ी)").
 */
export function formatCertificateSourceLabel(sakhi: Sakhi, language: Language): string {
  const grantha = localizeGranthaName(sakhi.grantha, language);
  let category = (sakhi.categoryTitle?.[language] || sakhi.categoryTitle?.hi || '').trim();

  if (language !== 'en') {
    category = category
      .replace(/\(\s*(?:Kabir Sagar|Bijak|Beejak|Sakhi Sangrah|Granthavali|Anurag Sagar)\s*\)/gi, '')
      .trim();
  }

  if (grantha && category && grantha.toLowerCase() !== category.toLowerCase()) {
    return `${grantha} (${category})`;
  }
  return grantha || category;
}

/**
 * Cleans any duplicate Satyanaam header, trailing Saheb Bandagi footer, or broken "//" punctuation
 * from a Sakhi verse so the Certificate Sakhi box renders a pristine 2-line Doha.
 */
export function formatCertificateSakhiDoha(rawVerse: string | undefined, language: Language): string {
  const input = (rawVerse || '').trim();
  if (!input) return '';

  const isInvocationLine = (line: string) => {
    const stripped = line
      .replace(/[🌹🌺✨🙏।॥|/\\\-–—•·\[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    return (
      stripped === 'सत्यनाम' ||
      stripped === 'सतनाम' ||
      stripped === 'ਸਤਯਨਾਮ' ||
      stripped === 'ਸਤਨਾਮ' ||
      stripped === 'satyanaam' ||
      stripped === 'satnaam' ||
      stripped === 'satnam'
    );
  };

  const isClosingSalutationLine = (line: string) => {
    const stripped = line
      .replace(/[🌹🌺✨🙏।॥|/\\\-–—•·\[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    return (
      stripped === 'साहेब बंदगी साहेब' ||
      stripped === 'साहेब बंदगी' ||
      stripped === 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ' ||
      stripped === 'ਸਾਹੇਬ ਬੰਦਗੀ' ||
      stripped === 'saheb bandagi saheb' ||
      stripped === 'saheb bandgi saheb' ||
      stripped === 'saheb bandagi' ||
      stripped === 'saheb bandgi'
    );
  };

  let lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !isInvocationLine(l) && !isClosingSalutationLine(l));

  // Strip any inline trailing salutation or leading invocation
  lines = lines
    .map((line) =>
      line
        .replace(/^[🌹\s।॥|/]*(?:सत्यनाम|सतनाम|ਸਤਯਨਾਮ|ਸਤਨਾਮ|Satyanaam|Satnaam)[🌹\s।॥|/]*/i, '')
        .replace(
          /[।\s।॥|/]*(?:साहेब\s*बंदगी(?:\s*साहेब)?|ਸਾਹੇਬ\s*ਬੰਦਗੀ(?:\s*ਸਾਹੇਬ)?|Saheb\s*Banda?gi(?:\s*Saheb)?)[🙏\s।॥|/\.]*$/gi,
          ''
        )
        .replace(/🙏+/g, '')
        .trim()
    )
    .filter(Boolean);

  if (lines.length === 1) {
    lines = formatCoupletIntoTwoLines(lines[0]).filter(Boolean);
  }

  if (language === 'en') {
    return lines
      .map((line) =>
        line
          .replace(/\s*\/\/+\s*$/g, '')
          .replace(/\s*\|\s*$/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      )
      .filter(Boolean)
      .join('\n');
  }

  const normalized = lines
    .map((line) =>
      line
        .replace(/\s*\/\/+\s*/g, ' ॥ ')
        .replace(/([^\s])॥/g, '$1 ॥')
        .replace(/([^\s])।।/g, '$1 ॥')
        .replace(/।।/g, '॥')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter(Boolean);

  if (normalized.length > 0) {
    const lastIdx = normalized.length - 1;
    let last = normalized[lastIdx];
    if (/।\s*$/.test(last) && !/॥\s*$/.test(last)) {
      last = last.replace(/।\s*$/, ' ॥').trim();
    } else if (!/[।॥?!.]$/.test(last)) {
      last = `${last} ॥`;
    }
    normalized[lastIdx] = last;
  }

  return normalized.join('\n');
}

export function getCertificateTitle(language: Language): string {
  return language === 'pb'
    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸ੍ਵਾਧਿਆਇ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ'
    : language === 'en'
    ? 'Satguru Kabir Saheb Sacred Swadhyay Completion Certificate'
    : 'सतगुरु कबीर साहेब पावन स्वाध्याय सिद्धि प्रमाण-पत्र';
}

export function getCertificateFooterBrand(language: Language): string {
  return language === 'pb'
    ? 'ਸਾਹੇਬ ਵਰਲਡ • ਪਾਵਨ ਸ੍ਵਾਧਿਆਇ ਮੰਚ'
    : language === 'en'
    ? 'Saheb World • Sacred Swadhyay Sanctuary'
    : 'साहेब वर्ल्ड • पावन स्वाध्याय मंच';
}

const SWAROOP_IMAGE_PATHS = ['/Saheb_World_icon.jpg', '/icon.png'];

export async function loadLocalLogoAsBase64(): Promise<string | null> {
  if (typeof window === 'undefined') return null;
  for (const path of SWAROOP_IMAGE_PATHS) {
    try {
      const response = await fetch(path, { cache: 'force-cache' });
      if (!response.ok) continue;
      const blob = await response.blob();
      const base64 = await new Promise<string | null>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(typeof reader.result === 'string' ? reader.result : null);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
      if (base64) return base64;
    } catch {
      // Try next local fallback path
    }
  }
  return null;
}

function loadImageSafe(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (typeof Image === 'undefined') {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const timeout = setTimeout(() => resolve(null), 3500);
    img.onload = () => {
      clearTimeout(timeout);
      resolve(img);
    };
    img.onerror = () => {
      clearTimeout(timeout);
      resolve(null);
    };
    img.src = src;
  });
}

async function loadSwaroopImage(): Promise<HTMLImageElement | null> {
  const base64 = await loadLocalLogoAsBase64();
  if (base64) {
    const img = await loadImageSafe(base64);
    if (img) return img;
  }
  for (const path of SWAROOP_IMAGE_PATHS) {
    const img = await loadImageSafe(path);
    if (img) return img;
  }
  return null;
}

function wrapTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) {
      lines.push('');
      continue;
    }
    const words = trimmed.split(/\s+/);
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (ctx.measureText(testLine).width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
  }

  return lines;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawHorizontalOrnamentDivider(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  y: number,
  halfSpan: number
) {
  ctx.save();
  ctx.strokeStyle = 'rgba(180, 83, 9, 0.42)';
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(centerX - halfSpan, y);
  ctx.lineTo(centerX - 28, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX + 28, y);
  ctx.lineTo(centerX + halfSpan, y);
  ctx.stroke();

  ctx.fillStyle = '#B45309';
  ctx.font = 'bold 24px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❖', centerX, y + 1);
  ctx.restore();
}

function drawSwaroopMedallion(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  swaroopImg: HTMLImageElement | null,
  serifFont: string
) {
  ctx.save();

  const halo = ctx.createRadialGradient(
    centerX,
    centerY,
    radius * 0.65,
    centerX,
    centerY,
    radius + 36
  );
  halo.addColorStop(0, 'rgba(245, 158, 11, 0.28)');
  halo.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 36, 0, Math.PI * 2);
  ctx.fill();

  if (swaroopImg && swaroopImg.width > 0 && swaroopImg.height > 0) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 4, 0, Math.PI * 2);
    ctx.clip();

    const cropRatio = 0.88;
    const sw = swaroopImg.width * cropRatio;
    const sh = swaroopImg.height * cropRatio;
    const sx = (swaroopImg.width - sw) / 2;
    const sy = Math.max(0, (swaroopImg.height - sh) / 2 - swaroopImg.height * 0.015);

    ctx.drawImage(
      swaroopImg,
      sx,
      sy,
      sw,
      sh,
      centerX - radius,
      centerY - radius,
      radius * 2,
      radius * 2
    );
    ctx.restore();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#B45309';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 6, 0, Math.PI * 2);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#FCD34D';
    ctx.stroke();
  } else {
    const emblemGrad = ctx.createLinearGradient(
      centerX - radius,
      centerY - radius,
      centerX + radius,
      centerY + radius
    );
    emblemGrad.addColorStop(0, '#F59E0B');
    emblemGrad.addColorStop(1, '#B45309');

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = emblemGrad;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#FCD34D';
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold 36px ${serifFont}`;
    ctx.fillText('सत्यनाम', centerX, centerY);
  }

  ctx.restore();
}

export async function generateCertificateCanvas(
  sakhi: Sakhi,
  language: Language,
  options: CertificateRenderOptions = {}
): Promise<GeneratedCertificate> {
  if (typeof document === 'undefined') {
    throw new Error('Document is unavailable');
  }

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {}

  const swaroopImg = await loadSwaroopImage();

  // Exact A4 portrait proportion (1240 x 1754)
  const width = 1240;
  const height = 1754;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context unavailable');
  }

  const serifFont =
    '"Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
  const sansFont =
    '"Noto Sans Devanagari", "Noto Sans Gurmukhi", system-ui, sans-serif';

  // 1. Warm Cream / Parchment Background (#FFFDF7)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#FFFDF7');
  bgGrad.addColorStop(0.5, '#FAF3E6');
  bgGrad.addColorStop(1, '#FFF7E8');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(
    width / 2,
    height * 0.44,
    50,
    width / 2,
    height * 0.44,
    720
  );
  glow.addColorStop(0, 'rgba(217, 119, 6, 0.10)');
  glow.addColorStop(1, 'rgba(217, 119, 6, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  // 2. Double Ornate Golden-Maroon Frame (#D97706 outer, #6B1D1D inner)
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 8;
  drawRoundedRect(ctx, 44, 44, width - 88, height - 88, 28);
  ctx.stroke();

  ctx.strokeStyle = '#6B1D1D';
  ctx.lineWidth = 3.5;
  drawRoundedRect(ctx, 64, 64, width - 128, height - 128, 20);
  ctx.stroke();

  ctx.fillStyle = '#D97706';
  ctx.font = 'bold 34px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❖', 102, 102);
  ctx.fillText('❖', width - 102, 102);
  ctx.fillText('❖', 102, height - 102);
  ctx.fillText('❖', width - 102, height - 102);

  // --- Resolved Certificate Copy & Metrics ---
  const formattedSeekerName = formatCertificateSeekerName(options.userName, language);

  const resolvedBlessing =
    (options.themeBlessing && options.themeBlessing.trim()) ||
    buildThemeOneLineBlessing(sakhi, language);

  const mantraFontSize = 44;
  const titleFontSize = 50;
  const titleLineHeight = 68;
  const medallionRadius = 120;
  const completionFontSize = 35;
  const completionLineHeight = 54;
  const subtitleFontSize = 28;
  const sakhiFontSize = 40;
  const sakhiLineHeight = 62;
  const blessingFontSize = 29;
  const blessingLineHeight = 44;
  const dateFontSize = 26;
  const brandFontSize = 26;
  const closingFontSize = 44;

  const titleText = getCertificateTitle(language);

  ctx.font = `bold ${titleFontSize}px ${serifFont}`;
  const titleLines = wrapTextLines(ctx, titleText, width - 200);

  const completionText =
    language === 'pb'
      ? `ਇਹ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਕਿ ${formattedSeekerName} ਨੇ ਸਾਖੀ #${sakhi.number} ਦਾ ੧੧-ਚਰਣੀ ਸ੍ਵਾਧਿਆਇ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।`
      : language === 'en'
      ? `This certifies that ${formattedSeekerName} has successfully completed the 11-Step Swadhyay of Sakhi #${sakhi.number}.`
      : `यह प्रमाणित किया जाता है कि ${formattedSeekerName} ने साखी #${sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।`;

  ctx.font = `bold ${completionFontSize}px ${serifFont}`;
  const completionLines = wrapTextLines(ctx, completionText, width - 210);

  // Main Highlight Box contains ONLY the clean 2-line Mool Sakhi Doha (no duplicate header or footer)
  const activeVani = formatCertificateSakhiDoha(sakhi.text[language] || sakhi.text.hi || '', language);
  ctx.font = `bold ${sakhiFontSize}px ${serifFont}`;
  const sakhiBoxLines = activeVani
    ? wrapTextLines(ctx, activeVani, width - 270).slice(0, 5)
    : [`साखी #${sakhi.number}`];

  const quotedBlessing = `"${resolvedBlessing.replace(/^["“]|["”]$/g, '')}"`;
  ctx.font = `italic 600 ${blessingFontSize}px ${serifFont}`;
  const oneLineBlessingLines = wrapTextLines(ctx, quotedBlessing, width - 220).slice(0, 3);

  // Vertical block heights
  const mantraBlockH = 54;
  const titleBlockH = titleLines.length * titleLineHeight;
  const dividerBlockH = 24;
  const swaroopBlockH = medallionRadius * 2;
  const completionBlockH = completionLines.length * completionLineHeight + 44;
  const sakhiBoxPadY = 44;
  const sakhiLabelH = 40;
  const sakhiBoxH = sakhiBoxPadY * 2 + sakhiLabelH + sakhiBoxLines.length * sakhiLineHeight;
  const themeBlessingBlockH = oneLineBlessingLines.length * blessingLineHeight;
  const dateBlockH = 36;
  const footerBlockH = 114; // divider + brand line + bottom mantra

  const totalContentH =
    mantraBlockH +
    titleBlockH +
    dividerBlockH +
    swaroopBlockH +
    completionBlockH +
    sakhiBoxH +
    themeBlessingBlockH +
    dateBlockH +
    footerBlockH;

  const topMarginY = 108;
  const bottomMarginY = height - 102;
  const usableHeight = bottomMarginY - topMarginY;
  const leftoverSpace = Math.max(96, usableHeight - totalContentH);

  const unitGap = leftoverSpace / 9.5;
  const gapAfterMantra = unitGap * 0.7;
  const gapAfterTitle = unitGap * 0.85;
  const gapAfterDivider = unitGap * 1.0;
  const gapAfterSwaroop = unitGap * 1.1;
  const gapAfterCompletion = unitGap * 1.3;
  const gapAfterSakhiBox = unitGap * 1.25;
  const gapAfterBlessing = unitGap * 1.05;
  const gapBeforeFooter = unitGap * 1.1;

  // --- Render Pass ---
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  let cursorY = topMarginY;

  // 3. Top Centered Sacred Mantra
  ctx.fillStyle = '#B45309';
  ctx.font = `bold ${mantraFontSize}px ${serifFont}`;
  ctx.fillText(SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi, width / 2, cursorY);
  cursorY += mantraBlockH + gapAfterMantra;

  // 4. Main Certificate Title
  ctx.fillStyle = '#6B1D1D';
  ctx.font = `bold ${titleFontSize}px ${serifFont}`;
  for (const line of titleLines) {
    ctx.fillText(line, width / 2, cursorY);
    cursorY += titleLineHeight;
  }
  cursorY += gapAfterTitle;

  // Ornamental Divider
  drawHorizontalOrnamentDivider(ctx, width / 2, cursorY + dividerBlockH / 2, 340);
  cursorY += dividerBlockH + gapAfterDivider;

  // 5. Satguru Kabir Saheb Divya Swaroop Medallion
  const swaroopCenterY = cursorY + medallionRadius;
  drawSwaroopMedallion(ctx, width / 2, swaroopCenterY, medallionRadius, swaroopImg, serifFont);
  cursorY += swaroopBlockH + gapAfterSwaroop;

  // 6. Recipient Completion Statement (Prominent User Name) & Localized Grantha Subtitle
  ctx.fillStyle = '#38200B';
  ctx.font = `bold ${completionFontSize}px ${serifFont}`;
  for (const line of completionLines) {
    ctx.fillText(line, width / 2, cursorY);
    cursorY += completionLineHeight;
  }

  const localizedSource = formatCertificateSourceLabel(sakhi, language);
  ctx.fillStyle = '#6B1D1D';
  ctx.font = `600 ${subtitleFontSize}px ${sansFont}`;
  ctx.fillText(localizedSource, width / 2, cursorY + 8);
  cursorY += 44 + gapAfterCompletion;

  // 7. Main Highlight Box — Clean 2-Line Sacred Original Sakhi Doha
  const boxX = 110;
  const boxW = width - 220;
  ctx.fillStyle = 'rgba(217, 119, 6, 0.08)';
  drawRoundedRect(ctx, boxX, cursorY, boxW, sakhiBoxH, 24);
  ctx.fill();

  ctx.strokeStyle = 'rgba(107, 29, 29, 0.38)';
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, boxX, cursorY, boxW, sakhiBoxH, 24);
  ctx.stroke();

  let boxInnerY = cursorY + sakhiBoxPadY;
  ctx.fillStyle = '#92400E';
  ctx.font = `bold 24px ${sansFont}`;
  ctx.fillText(
    language === 'pb'
      ? '✦ ਪਾਵਨ ਮੂਲ ਸਾਖੀ ✦'
      : language === 'en'
      ? '✦ Sacred Original Sakhi ✦'
      : '✦ पावन मूल साखी ✦',
    width / 2,
    boxInnerY
  );
  boxInnerY += sakhiLabelH;

  ctx.fillStyle = '#6B1D1D';
  ctx.font = `bold ${sakhiFontSize}px ${serifFont}`;
  for (const line of sakhiBoxLines) {
    ctx.fillText(line, width / 2, boxInnerY);
    boxInnerY += sakhiLineHeight;
  }
  cursorY += sakhiBoxH + gapAfterSakhiBox;

  // 8. 1-Line Theme-Based Blessing below Sakhi
  ctx.fillStyle = '#5C2410';
  ctx.font = `italic 600 ${blessingFontSize}px ${serifFont}`;
  for (const line of oneLineBlessingLines) {
    ctx.fillText(line, width / 2, cursorY);
    cursorY += blessingLineHeight;
  }
  cursorY += gapAfterBlessing;

  // 9. Date Line
  const formattedDate = new Intl.DateTimeFormat(
    language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  ).format(new Date());

  ctx.fillStyle = '#6B4C2C';
  ctx.font = `600 ${dateFontSize}px ${sansFont}`;
  ctx.fillText(
    language === 'pb'
      ? `ਮਿਤੀ: ${formattedDate}`
      : language === 'en'
      ? `Date: ${formattedDate}`
      : `दिनांक: ${formattedDate}`,
    width / 2,
    cursorY
  );
  cursorY += dateBlockH + gapBeforeFooter;

  // 10. Footer Divider + App Brand Line + Centered Closing: ।। साहेब बंदगी साहेब ।। 🙏
  const footerTopY = Math.max(cursorY, bottomMarginY - footerBlockH);
  ctx.strokeStyle = 'rgba(107, 29, 29, 0.28)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(190, footerTopY);
  ctx.lineTo(width - 190, footerTopY);
  ctx.stroke();

  ctx.fillStyle = '#78350F';
  ctx.font = `600 ${brandFontSize}px ${sansFont}`;
  ctx.fillText(getCertificateFooterBrand(language), width / 2, footerTopY + 18);

  ctx.fillStyle = '#6B1D1D';
  ctx.font = `bold ${closingFontSize}px ${serifFont}`;
  ctx.fillText(
    SACRED_BRANDING.footer[language] || SACRED_BRANDING.footer.hi,
    width / 2,
    footerTopY + 56
  );

  const dataUrl = canvas.toDataURL('image/png');
  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => {
        if (b) resolve(b);
        else reject(new Error('Failed to create certificate PNG blob'));
      },
      'image/png',
      1.0
    );
  });

  return {
    dataUrl,
    blob,
    fileNamePdf: `Saheb_World_Sakhi_${sakhi.number}_Certificate.pdf`,
    fileNamePng: `Saheb_World_Sakhi_${sakhi.number}_Certificate.png`,
  };
}

function triggerAnchorDownload(href: string, fileName: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadCertificatePdf(
  sakhi: Sakhi,
  language: Language,
  options: CertificateRenderOptions = {}
): Promise<{ format: 'pdf' | 'png'; fileName: string; generated: GeneratedCertificate }> {
  const generated = await generateCertificateCanvas(sakhi, language, options);

  try {
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(generated.dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

    try {
      const pdfBlob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      triggerAnchorDownload(blobUrl, generated.fileNamePdf);
      setTimeout(() => {
        try {
          URL.revokeObjectURL(blobUrl);
        } catch {}
      }, 10000);
      return { format: 'pdf', fileName: generated.fileNamePdf, generated };
    } catch {
      pdf.save(generated.fileNamePdf);
      return { format: 'pdf', fileName: generated.fileNamePdf, generated };
    }
  } catch {
    const pngUrl = URL.createObjectURL(generated.blob);
    triggerAnchorDownload(pngUrl, generated.fileNamePng);
    setTimeout(() => {
      try {
        URL.revokeObjectURL(pngUrl);
      } catch {}
    }, 10000);
    return { format: 'png', fileName: generated.fileNamePng, generated };
  }
}

export async function printCertificateSafely(
  sakhi: Sakhi,
  language: Language,
  options: CertificateRenderOptions = {}
): Promise<'printed' | 'fallback'> {
  const generated = await generateCertificateCanvas(sakhi, language, options);

  return new Promise((resolve) => {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      iframe.setAttribute('aria-hidden', 'true');

      const htmlDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${generated.fileNamePdf}</title>
  <style>
    @page { size: A4 portrait; margin: 6mm; }
    html, body { margin: 0; padding: 0; background: #ffffff; text-align: center; }
    img { max-width: 100%; max-height: 98vh; width: auto; height: auto; display: block; margin: 0 auto; }
  </style>
</head>
<body>
  <img id="cert-img" src="${generated.dataUrl}" alt="Swadhyay Certificate" />
</body>
</html>`;

      let cleaned = false;
      const cleanup = () => {
        if (cleaned) return;
        cleaned = true;
        setTimeout(() => {
          try {
            if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
          } catch {}
        }, 1500);
      };

      iframe.onload = () => {
        try {
          const win = iframe.contentWindow;
          if (!win) {
            cleanup();
            resolve('fallback');
            return;
          }
          win.focus();
          win.print();
          cleanup();
          resolve('printed');
        } catch {
          cleanup();
          try {
            window.print();
            resolve('printed');
          } catch {
            resolve('fallback');
          }
        }
      };

      iframe.srcdoc = htmlDoc;
      document.body.appendChild(iframe);

      setTimeout(() => {
        if (!cleaned) {
          cleanup();
          resolve('fallback');
        }
      }, 4000);
    } catch {
      try {
        window.print();
        resolve('printed');
      } catch {
        resolve('fallback');
      }
    }
  });
}
