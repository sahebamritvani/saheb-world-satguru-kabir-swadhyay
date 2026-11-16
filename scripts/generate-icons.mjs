import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const svgPath = path.resolve('public/icon.svg');
const svg = fs.readFileSync(svgPath, 'utf-8');

const targets = [
  { size: 192, filename: 'public/pwa-192x192.png' },
  { size: 512, filename: 'public/pwa-512x512.png' },
  { size: 512, filename: 'public/pwa-maskable-512x512.png' },
  { size: 512, filename: 'public/app_logo.png' },
  { size: 180, filename: 'public/apple-touch-icon.png' },
  { size: 64, filename: 'public/favicon.ico' },
];

for (const { size, filename } of targets) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(path.resolve(filename), pngBuffer);
  console.log(`Generated ${filename} (${size}x${size})`);
}
