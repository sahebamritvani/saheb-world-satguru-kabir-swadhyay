const sharp = require('sharp');
const fs = require('fs');

async function injectMasterIcon() {
  const sourceImage = fs.existsSync('src/assets/images/master_launcher_icon_1790839724236.jpg')
    ? 'src/assets/images/master_launcher_icon_1790839724236.jpg'
    : '/app/applet/src/assets/images/master_launcher_icon_1790839724236.jpg';

  if (!fs.existsSync(sourceImage)) {
    throw new Error('Source image not found: ' + sourceImage);
  }

  console.log('Reading master verified icon:', sourceImage);
  const masterBuffer = await sharp(sourceImage).png().toBuffer();

  const iconSizes = [
    { name: 'public/image_qlzujq.png', size: 1024 },
    { name: 'public/app_logo.png', size: 512 },
    { name: 'public/icon.png', size: 512 },
    { name: 'public/pwa-512x512.png', size: 512 },
    { name: 'public/pwa-maskable-512x512.png', size: 512 },
    { name: 'public/pwa-192x192.png', size: 192 },
    { name: 'public/pwa-144x144.png', size: 144 },
    { name: 'public/pwa-96x96.png', size: 96 },
    { name: 'public/pwa-72x72.png', size: 72 },
    { name: 'public/pwa-48x48.png', size: 48 },
    { name: 'public/apple-touch-icon.png', size: 180 },
    { name: 'public/favicon.ico', size: 64 },
  ];

  for (const { name, size } of iconSizes) {
    await sharp(masterBuffer)
      .resize(size, size, { fit: 'contain', background: '#F99B26' })
      .toFile(name);
    console.log(`Generated: ${name} (${size}x${size})`);
  }

  console.log('All launcher icons generated successfully.');
}

injectMasterIcon().catch(console.error);
