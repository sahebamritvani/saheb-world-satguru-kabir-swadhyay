const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create a sacred golden emblem SVG with Lotus flower & Devanagari "सत्यनाम"
const svgContent = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A0E17"/>
      <stop offset="50%" stop-color="#70121E"/>
      <stop offset="100%" stop-color="#2D080E"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE259"/>
      <stop offset="100%" stop-color="#FFA751"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Circle -->
  <circle cx="256" cy="256" r="248" fill="url(#bgGrad)" stroke="url(#goldGrad)" stroke-width="12"/>
  <circle cx="256" cy="256" r="230" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-dasharray="10 8"/>

  <!-- Sacred Text Top -->
  <text x="256" y="150" text-anchor="middle" fill="url(#goldGrad)" font-family="serif" font-size="52" font-weight="900" filter="url(#glow)">।। सत्यनाम ।।</text>

  <!-- Stylized Sacred Lotus -->
  <g transform="translate(256, 310)" fill="url(#goldGrad)">
    <!-- Central Petal -->
    <path d="M 0,-100 C 30,-50 40,-10 0,20 C -40,-10 -30,-50 0,-100 Z" />
    <!-- Left Petal 1 -->
    <path d="M -20,-85 C -60,-40 -60,0 -10,25 C -50,10 -80,-30 -20,-85 Z" />
    <!-- Right Petal 1 -->
    <path d="M 20,-85 C 60,-40 60,0 10,25 C 50,10 80,-30 20,-85 Z" />
    <!-- Left Petal 2 -->
    <path d="M -40,-60 C -90,-20 -80,20 -15,30 C -65,20 -95,-10 -40,-60 Z" />
    <!-- Right Petal 2 -->
    <path d="M 40,-60 C 90,-20 80,20 15,30 C 65,20 95,-10 40,-60 Z" />
    <!-- Base Lotus Base -->
    <path d="M -70,35 C -30,50 30,50 70,35 C 50,20 -50,20 -70,35 Z" />
  </g>

  <!-- Sacred Subtitle Bottom -->
  <text x="256" y="420" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="4">SAHEB WORLD</text>
</svg>
`;

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  const srcAssetsDir = path.join(__dirname, '../src/assets');
  const svgBuffer = Buffer.from(svgContent);

  const targets = [
    { file: path.join(publicDir, 'favicon-16x16.png'), size: 16 },
    { file: path.join(publicDir, 'favicon-32x32.png'), size: 32 },
    { file: path.join(publicDir, 'pwa-48x48.png'), size: 48 },
    { file: path.join(publicDir, 'pwa-72x72.png'), size: 72 },
    { file: path.join(publicDir, 'pwa-96x96.png'), size: 96 },
    { file: path.join(publicDir, 'pwa-144x144.png'), size: 144 },
    { file: path.join(publicDir, 'apple-touch-icon.png'), size: 180 },
    { file: path.join(publicDir, 'pwa-192x192.png'), size: 192 },
    { file: path.join(publicDir, 'icon.png'), size: 192 },
    { file: path.join(publicDir, 'app_icon.png'), size: 512 },
    { file: path.join(publicDir, 'app_logo.png'), size: 512 },
    { file: path.join(publicDir, 'pwa-512x512.png'), size: 512 },
    { file: path.join(publicDir, 'pwa-maskable-512x512.png'), size: 512 },
    { file: path.join(publicDir, 'Saheb_World_icon.jpg'), size: 512, format: 'jpeg' },
    { file: path.join(publicDir, 'assets/Saheb_World_icon.jpg'), size: 512, format: 'jpeg' },
    { file: path.join(srcAssetsDir, 'Saheb_World_icon.jpg'), size: 512, format: 'jpeg' }
  ];

  for (const t of targets) {
    fs.mkdirSync(path.dirname(t.file), { recursive: true });
    let pipeline = sharp(svgBuffer).resize(t.size, t.size);
    if (t.format === 'jpeg') {
      await pipeline.jpeg({ quality: 95 }).toFile(t.file);
    } else {
      await pipeline.png().toFile(t.file);
    }
    console.log(`Generated: ${t.file}`);
  }

  // Generate favicon.ico (32x32)
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
