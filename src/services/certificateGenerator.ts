import { Sakhi, Language } from '../types';

export interface GeneratedCertificate {
  dataUrl: string;
  blob: Blob;
  fileNamePdf: string;
  fileNamePng: string;
}

const SWAROOP_IMAGE_PATH = '/Saheb_World_icon.jpg';

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

  // Soft divine radial halo behind Swaroop
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
    // White medallion backdrop
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Circular clip focused tightly on the centered Swaroop emblem (excluding edge dot)
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

    // Double golden seal border
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
    // Graceful fallback emblem if asset is unavailable
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
  language: Language
): Promise<GeneratedCertificate> {
  if (typeof document === 'undefined') {
    throw new Error('Document is unavailable');
  }

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {
    // Continue even if font promise is unsupported
  }

  const swaroopImg = await loadImageSafe(SWAROOP_IMAGE_PATH);

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

  // 1. Warm Antique Parchment Gradient Background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.5, '#FAF3E6');
  bgGrad.addColorStop(1, '#FFF5DF');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle Radial Sacred Glow centered cleanly across body
  const glow = ctx.createRadialGradient(
    width / 2,
    height * 0.44,
    50,
    width / 2,
    height * 0.44,
    720
  );
  glow.addColorStop(0, 'rgba(245, 158, 11, 0.11)');
  glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  // 2. Ornate Double Golden Frame
  ctx.strokeStyle = '#B45309';
  ctx.lineWidth = 8;
  drawRoundedRect(ctx, 46, 46, width - 92, height - 92, 28);
  ctx.stroke();

  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, 66, 66, width - 132, height - 132, 20);
  ctx.stroke();

  // Corner Flourishes
  ctx.fillStyle = '#B45309';
  ctx.font = 'bold 34px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❖', 102, 102);
  ctx.fillText('❖', width - 102, 102);
  ctx.fillText('❖', 102, height - 102);
  ctx.fillText('❖', width - 102, height - 102);

  // --- Dynamic Measurement Pass for Balanced A4 Typography & Spacing ---
  const mantraFontSize = 44;
  const titleFontSize = 54;
  const titleLineHeight = 72;
  const medallionRadius = 128; // 256x256 prominent Satguru Kabir Saheb Swaroop
  const completionFontSize = 40;
  const completionLineHeight = 56;
  const subtitleFontSize = 30;
  const blessingFontSize = 40;
  const blessingLineHeight = 62;
  const vaniLabelFontSize = 30;
  const vaniFontSize = 38;
  const vaniLineHeight = 56;
  const dateFontSize = 28;
  const closingFontSize = 48;

  const titleText =
    language === 'pb'
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸਵਾਧਿਆਏ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ'
      : language === 'en'
      ? 'Satguru Kabir Saheb Sacred Swadhyay Certificate'
      : 'सतगुरु कबीर साहेब पावन स्वाध्याय सिद्धि प्रमाण-पत्र';

  ctx.font = `bold ${titleFontSize}px ${serifFont}`;
  const titleLines = wrapTextLines(ctx, titleText, width - 200);

  const completionText =
    language === 'pb'
      ? `ਸਾਖੀ #${sakhi.number} ਦਾ ੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕੀਤਾ।`
      : language === 'en'
      ? `Successfully completed the 11-Step Sacred Swadhyay of Sakhi #${sakhi.number}.`
      : `साखी #${sakhi.number} का ११-चरणीय स्वाध्याय सफलतापूर्वक पूर्ण किया।`;

  ctx.font = `bold ${completionFontSize}px ${serifFont}`;
  const completionLines = wrapTextLines(ctx, completionText, width - 200);

  const activeVani = sakhi.text[language] || sakhi.text.hi || '';
  ctx.font = `bold ${vaniFontSize}px ${serifFont}`;
  const vaniLines = activeVani.trim()
    ? wrapTextLines(ctx, activeVani, width - 210).slice(0, 4)
    : [];

  // Heights of each section block
  const mantraBlockH = 52;
  const titleBlockH = titleLines.length * titleLineHeight;
  const dividerBlockH = 24;
  const swaroopBlockH = medallionRadius * 2;
  const completionBlockH = completionLines.length * completionLineHeight + 44; // includes grantha subtitle
  const blessingLines = [
    '"पूरन भये मनोरथा, सतगुरु दई लखाय।',
    'कहैं कबीर सो हंस जन, अमरलोक में जाय।।' + '"'
  ];
  const blessingPadY = 44;
  const blessingBoxH = blessingPadY * 2 + blessingLines.length * blessingLineHeight;
  const vaniBlockH = vaniLines.length > 0 ? 48 + vaniLines.length * vaniLineHeight : 0;
  const dateBlockH = 38;
  const footerBlockH = 82; // divider + closing mantra

  const totalContentH =
    mantraBlockH +
    titleBlockH +
    dividerBlockH +
    swaroopBlockH +
    completionBlockH +
    blessingBoxH +
    vaniBlockH +
    dateBlockH +
    footerBlockH;

  const topMarginY = 114;
  const bottomMarginY = height - 110;
  const usableHeight = bottomMarginY - topMarginY;
  const leftoverSpace = Math.max(120, usableHeight - totalContentH);

  // Proportionally distribute all vertical gaps across the 8 transitions so the certificate has zero dead space
  const unitGap = leftoverSpace / (vaniLines.length > 0 ? 11.5 : 10);
  const gapAfterMantra = unitGap * 0.7;
  const gapAfterTitle = unitGap * 0.9;
  const gapAfterDivider = unitGap * 1.1;
  const gapAfterSwaroop = unitGap * 1.15;
  const gapAfterCompletion = unitGap * 1.4;
  const gapAfterBlessing = unitGap * 1.45;
  const gapAfterVani = vaniLines.length > 0 ? unitGap * 1.7 : 0;
  const gapBeforeFooter = unitGap * 1.1;

  // --- Render Pass ---
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  let cursorY = topMarginY;

  // 3. Top Centered Sacred Mantra: ।।सत्यनाम।।
  ctx.fillStyle = '#B45309';
  ctx.font = `bold ${mantraFontSize}px ${serifFont}`;
  ctx.fillText('।।सत्यनाम।।', width / 2, cursorY);
  cursorY += mantraBlockH + gapAfterMantra;

  // 4. Main Certificate Title
  ctx.fillStyle = '#8C2818';
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

  // 6. Recipient Completion Statement & Grantha Subtitle
  ctx.fillStyle = '#38200B';
  ctx.font = `bold ${completionFontSize}px ${serifFont}`;
  for (const line of completionLines) {
    ctx.fillText(line, width / 2, cursorY);
    cursorY += completionLineHeight;
  }

  const categoryName = sakhi.categoryTitle[language] || sakhi.categoryTitle.hi;
  ctx.fillStyle = '#78350F';
  ctx.font = `600 ${subtitleFontSize}px ${sansFont}`;
  ctx.fillText(`${sakhi.grantha}  •  ${categoryName}`, width / 2, cursorY + 8);
  cursorY += 44 + gapAfterCompletion;

  // 7. Sacred Blessing Couplet Box
  const boxX = 115;
  const boxW = width - 230;
  ctx.fillStyle = 'rgba(217, 119, 6, 0.09)';
  drawRoundedRect(ctx, boxX, cursorY, boxW, blessingBoxH, 24);
  ctx.fill();

  ctx.strokeStyle = 'rgba(217, 119, 6, 0.48)';
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, boxX, cursorY, boxW, blessingBoxH, 24);
  ctx.stroke();

  ctx.fillStyle = '#8C2818';
  ctx.font = `italic bold ${blessingFontSize}px ${serifFont}`;
  let coupletY = cursorY + blessingPadY;
  for (const line of blessingLines) {
    ctx.fillText(line, width / 2, coupletY);
    coupletY += blessingLineHeight;
  }
  cursorY += blessingBoxH + gapAfterBlessing;

  // 8. Active Sakhi Mool Vani Section
  if (vaniLines.length > 0) {
    ctx.fillStyle = '#92400E';
    ctx.font = `bold ${vaniLabelFontSize}px ${sansFont}`;
    ctx.fillText(
      language === 'pb'
        ? `— ਪਾਵਨ ਮੂਲ ਸਾਖੀ #${sakhi.number} —`
        : language === 'en'
        ? `— Sacred Sakhi #${sakhi.number} —`
        : `— पावन मूल साखी #${sakhi.number} —`,
      width / 2,
      cursorY
    );
    cursorY += 48;

    ctx.fillStyle = '#2E1C0C';
    ctx.font = `bold ${vaniFontSize}px ${serifFont}`;
    for (const line of vaniLines) {
      ctx.fillText(line, width / 2, cursorY);
      cursorY += vaniLineHeight;
    }
    cursorY += gapAfterVani;
  }

  // 9. Date Line (No App Link Printed)
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

  // 10. Footer Divider & Centered Closing: ।।साहेब बंदगी साहेब।।
  const footerTopY = Math.max(cursorY, bottomMarginY - footerBlockH);
  ctx.strokeStyle = 'rgba(180, 83, 9, 0.35)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(190, footerTopY);
  ctx.lineTo(width - 190, footerTopY);
  ctx.stroke();

  ctx.fillStyle = '#8C2818';
  ctx.font = `bold ${closingFontSize}px ${serifFont}`;
  ctx.fillText('।।साहेब बंदगी साहेब।।', width / 2, footerTopY + 26);

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
    fileNamePdf: `Swadhyay_Certificate_Sakhi_${sakhi.number}.pdf`,
    fileNamePng: `Swadhyay_Certificate_Sakhi_${sakhi.number}.png`,
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
  language: Language
): Promise<{ format: 'pdf' | 'png'; fileName: string; generated: GeneratedCertificate }> {
  const generated = await generateCertificateCanvas(sakhi, language);

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
  language: Language
): Promise<'printed' | 'fallback'> {
  const generated = await generateCertificateCanvas(sakhi, language);

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
