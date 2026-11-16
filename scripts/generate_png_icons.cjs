const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const svgPath = path.join(__dirname, '../public/icon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  const targets = [
    { name: '../public/app_logo.png', size: 512 },
    { name: '../public/pwa-512x512.png', size: 512 },
    { name: '../public/pwa-maskable-512x512.png', size: 512 },
    { name: '../public/icon.png', size: 512 },
    { name: '../public/pwa-192x192.png', size: 192 },
    { name: '../public/apple-touch-icon.png', size: 180 },
    { name: '../public/assets/app_logo.png', size: 512 },
  ];

  for (const target of targets) {
    const outPath = path.join(__dirname, target.name);
    await sharp(svgBuffer)
      .resize(target.size, target.size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${target.name} (${target.size}x${target.size})`);
  }

  console.log('ALL SACRED EMBLEM ICONS GENERATED SUCCESSFULLY!');
}

generateIcons().catch(console.error);
