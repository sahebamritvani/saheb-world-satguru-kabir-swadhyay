const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateIcons() {
  const publicDir = path.join(__dirname, '..', 'public');
  // Use authentic portrait as the master source
  const sourceImage = path.join(publicDir, 'kabir_saheb_divya_swaroop.png');

  console.log('Generating authentic PWA icons from:', sourceImage);

  // 1. Standard 512x512 PNG
  await sharp(sourceImage)
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('✓ Created pwa-512x512.png (512x512 true PNG)');

  // 2. Standard 192x192 PNG
  await sharp(sourceImage)
    .resize(192, 192, { fit: 'cover' })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('✓ Created pwa-192x192.png (192x192 true PNG)');

  // 3. Apple Touch Icon 180x180 PNG
  await sharp(sourceImage)
    .resize(180, 180, { fit: 'cover' })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created apple-touch-icon.png (180x180 true PNG)');

  // 4. App Logo 512x512 PNG
  await sharp(sourceImage)
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'app_logo.png'));
  console.log('✓ Created app_logo.png (512x512 true PNG)');

  // 5. icon.png 512x512 PNG
  await sharp(sourceImage)
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'icon.png'));
  console.log('✓ Created icon.png (512x512 true PNG)');

  // 6. Maskable 512x512 icon (with standard 15% safe padding as required by Android adaptive icons)
  // Inner image size: 410x410 centered on 512x512 background
  const innerResized = await sharp(sourceImage)
    .resize(410, 410, { fit: 'cover' })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 139, g: 69, b: 19, alpha: 1 } // Deep sacred amber theme #8B4513
    }
  })
    .composite([
      {
        input: innerResized,
        top: 51,
        left: 51
      }
    ])
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('✓ Created pwa-maskable-512x512.png (512x512 with safe-zone padding)');

  // 7. Favicon 48x48 PNG / ICO
  await sharp(sourceImage)
    .resize(48, 48, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('✓ Created favicon.ico');

  console.log('All PWA icons generated successfully!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
