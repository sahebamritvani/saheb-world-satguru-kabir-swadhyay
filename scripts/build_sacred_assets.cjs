const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateMasterEmblem() {
  const size = 1024;
  const center = size / 2; // 512
  const portraitRadius = 350; // Inner portrait radius
  const ringInner = 345;
  const ringOuter = 415;
  const textRadius = 380; // Centerline of top arc for text

  console.log('Generating 1024x1024 master spiritual emblem on saffron canvas...');

  // 1. Prepare authentic portrait of Satguru Kabir Saheb sitting on the pink lotus with white crown
  const portraitSource = fs.existsSync('public/authentic_kabir_swaroop.jpg')
    ? 'public/authentic_kabir_swaroop.jpg'
    : 'public/kabir_saheb_divya_swaroop.png';

  const portrait = await sharp(portraitSource)
    .resize(portraitRadius * 2, portraitRadius * 2, { fit: 'cover', position: 'top' })
    .toBuffer();

  const circleMask = Buffer.from(`
    <svg width="${portraitRadius * 2}" height="${portraitRadius * 2}">
      <circle cx="${portraitRadius}" cy="${portraitRadius}" r="${portraitRadius}" fill="white" />
    </svg>
  `);

  const circularPortrait = await sharp(portrait)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 2. Build Saffron Canvas + Golden Rim + Curved "॥ सत्यनाम ॥" SVG
  const masterSvg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Spiritual Saffron Gradients -->
      <radialGradient id="saffronBg" cx="50%" cy="50%" r="65%" fx="50%" fy="45%">
        <stop offset="0%" stop-color="#FF9800" />
        <stop offset="45%" stop-color="#F57C00" />
        <stop offset="75%" stop-color="#E65100" />
        <stop offset="100%" stop-color="#BF360C" />
      </radialGradient>

      <radialGradient id="spiritualAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFF9C4" stop-opacity="0.45" />
        <stop offset="40%" stop-color="#FFE082" stop-opacity="0.25" />
        <stop offset="80%" stop-color="#FFB300" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#E65100" stop-opacity="0" />
      </radialGradient>

      <!-- Golden Rim Multi-Stop Gradients -->
      <linearGradient id="goldRimGradient" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stop-color="#FFF8E1" />
        <stop offset="15%" stop-color="#FFE082" />
        <stop offset="35%" stop-color="#FFD54F" />
        <stop offset="50%" stop-color="#FFC107" />
        <stop offset="65%" stop-color="#FFA000" />
        <stop offset="85%" stop-color="#D4AF37" />
        <stop offset="100%" stop-color="#8A5A00" />
      </linearGradient>

      <linearGradient id="goldInnerBevel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFDE7" />
        <stop offset="50%" stop-color="#FFD54F" />
        <stop offset="100%" stop-color="#5D4037" />
      </linearGradient>

      <linearGradient id="textGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FFFDE7" />
        <stop offset="100%" stop-color="#FFE082" />
      </linearGradient>

      <!-- Drop Shadows & Glow Filters -->
      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#3E2723" flood-opacity="0.6" />
      </filter>

      <filter id="textShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3E2723" flood-opacity="0.9" />
      </filter>

      <!-- Arch Curvature along Upper Inner Edge of Circular Golden Ring -->
      <!-- Center is 512, 512. Radius is ${textRadius}. Sweeps along the top half -->
      <path
        id="topSatyanaamArc"
        d="M ${center - textRadius}, ${center} A ${textRadius},${textRadius} 0 0,1 ${center + textRadius}, ${center}"
        fill="none"
      />

      <!-- Bottom Salutation Arc along Lower Inner Edge -->
      <path
        id="bottomSalutationArc"
        d="M ${center + textRadius}, ${center} A ${textRadius},${textRadius} 0 0,1 ${center - textRadius}, ${center}"
        fill="none"
      />
    </defs>

    <!-- 1. Spiritual Saffron 1:1 Canvas -->
    <rect width="${size}" height="${size}" fill="url(#saffronBg)" />

    <!-- Subtle Sacred Mandala Radiance in Background -->
    <circle cx="${center}" cy="${center}" r="490" fill="none" stroke="#FFD54F" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="8 6" />
    <circle cx="${center}" cy="${center}" r="470" fill="none" stroke="#FFE082" stroke-width="1" stroke-opacity="0.2" />
    <circle cx="${center}" cy="${center}" r="450" fill="url(#spiritualAura)" />

    <!-- Sacred Corner Accents (Spiritual Lotus Petals/Ornaments) -->
    <g fill="#FFE082" opacity="0.35">
      <circle cx="70" cy="70" r="10" />
      <circle cx="954" cy="70" r="10" />
      <circle cx="70" cy="954" r="10" />
      <circle cx="954" cy="954" r="10" />
    </g>

    <!-- 2. Pristine High-Resolution Circular Golden Rim Layer -->
    <!-- Outer Golden Drop Shadow -->
    <circle cx="${center}" cy="${center}" r="${ringOuter}" fill="none" stroke="#000000" stroke-width="3" stroke-opacity="0.25" filter="url(#subtleShadow)" />

    <!-- Main Solid Golden Ring -->
    <circle cx="${center}" cy="${center}" r="${(ringOuter + ringInner) / 2}" fill="none" stroke="url(#goldRimGradient)" stroke-width="${ringOuter - ringInner}" filter="url(#goldGlow)" />

    <!-- Outer Decorative Concentric Rings -->
    <circle cx="${center}" cy="${center}" r="${ringOuter}" fill="none" stroke="#FFE082" stroke-width="3" />
    <circle cx="${center}" cy="${center}" r="${ringOuter - 4}" fill="none" stroke="#FFF9C4" stroke-width="1.5" stroke-opacity="0.8" />
    <circle cx="${center}" cy="${center}" r="${ringOuter + 8}" fill="none" stroke="#FFD54F" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="4 6" />

    <!-- Inner Golden Edge of Rim -->
    <circle cx="${center}" cy="${center}" r="${ringInner}" fill="none" stroke="#FFFDE7" stroke-width="3" />
    <circle cx="${center}" cy="${center}" r="${ringInner + 4}" fill="none" stroke="#8A5A00" stroke-width="1" stroke-opacity="0.7" />

    <!-- Holy Word "॥ सत्यनाम ॥" along the TOP Arc Center of the Circular Ring -->
    <!-- Curved gracefully just above Satguru Kabir Saheb's white crown -->
    <g filter="url(#textShadow)">
      <text
        font-family="'Noto Serif Devanagari', 'Noto Sans Devanagari', 'Mukta', 'FreeSerif', 'DejaVu Serif', serif"
        font-size="44"
        font-weight="900"
        letter-spacing="5"
        fill="url(#textGoldGradient)"
        stroke="#4E2608"
        stroke-width="2"
        paint-order="stroke fill"
        text-anchor="middle"
      >
        <textPath href="#topSatyanaamArc" startOffset="50%" text-anchor="middle">
          ॥ सत्यनाम ॥
        </textPath>
      </text>
    </g>

    <!-- Bottom Arc: "॥ साहेब बंदगी साहेब ॥" gracefully arched along lower inner edge -->
    <g filter="url(#textShadow)">
      <text
        font-family="'Noto Serif Devanagari', 'Noto Sans Devanagari', 'Mukta', 'FreeSerif', 'DejaVu Serif', serif"
        font-size="28"
        font-weight="800"
        letter-spacing="4"
        fill="url(#textGoldGradient)"
        stroke="#4E2608"
        stroke-width="1.5"
        paint-order="stroke fill"
        text-anchor="middle"
      >
        <textPath href="#bottomSalutationArc" startOffset="50%" text-anchor="middle">
          ॥ साहेब बंदगी साहेब ॥
        </textPath>
      </text>
    </g>

    <!-- Inner Rim Frame Drop Shadow onto portrait edge -->
    <circle cx="${center}" cy="${center}" r="${portraitRadius}" fill="none" stroke="#4E2608" stroke-width="4" stroke-opacity="0.6" />
  </svg>
  `;

  // Render SVG background and golden frame
  const svgBuffer = Buffer.from(masterSvg);
  const baseCanvas = await sharp(svgBuffer).png().toBuffer();

  // 3. Composite the authentic portrait in the center inside the circular golden rim
  // Position is center - portraitRadius
  const portraitLeft = center - portraitRadius;
  const portraitTop = center - portraitRadius;

  // Composite portrait underneath the top text by layering:
  // Layer 1: Background + Saffron canvas
  // Layer 2: Circular authentic portrait
  // Layer 3: Golden Rim and Arched "॥ सत्यनाम ॥" overlay
  // This guarantees Satguru Kabir Saheb's crown and lotus are framed perfectly and NEVER obscured!

  const backgroundSvg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="saffronBg" cx="50%" cy="50%" r="65%" fx="50%" fy="45%">
        <stop offset="0%" stop-color="#FF9800" />
        <stop offset="45%" stop-color="#F57C00" />
        <stop offset="75%" stop-color="#E65100" />
        <stop offset="100%" stop-color="#BF360C" />
      </radialGradient>
      <radialGradient id="spiritualAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFF9C4" stop-opacity="0.45" />
        <stop offset="40%" stop-color="#FFE082" stop-opacity="0.25" />
        <stop offset="80%" stop-color="#FFB300" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#E65100" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="${size}" height="${size}" fill="url(#saffronBg)" />
    <circle cx="${center}" cy="${center}" r="490" fill="none" stroke="#FFD54F" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="8 6" />
    <circle cx="${center}" cy="${center}" r="470" fill="none" stroke="#FFE082" stroke-width="1" stroke-opacity="0.2" />
    <circle cx="${center}" cy="${center}" r="450" fill="url(#spiritualAura)" />
  </svg>
  `;

  const frameOverlaySvg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldRimGradient" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stop-color="#FFF8E1" />
        <stop offset="15%" stop-color="#FFE082" />
        <stop offset="35%" stop-color="#FFD54F" />
        <stop offset="50%" stop-color="#FFC107" />
        <stop offset="65%" stop-color="#FFA000" />
        <stop offset="85%" stop-color="#D4AF37" />
        <stop offset="100%" stop-color="#8A5A00" />
      </linearGradient>
      <linearGradient id="textGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FFFDE7" />
        <stop offset="100%" stop-color="#FFE082" />
      </linearGradient>
      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#3E2723" flood-opacity="0.7" />
      </filter>
      <filter id="textShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3E2723" flood-opacity="0.9" />
      </filter>
      <path
        id="topSatyanaamArc"
        d="M ${center - textRadius}, ${center} A ${textRadius},${textRadius} 0 0,1 ${center + textRadius}, ${center}"
        fill="none"
      />
      <path
        id="bottomSalutationArc"
        d="M ${center + textRadius}, ${center} A ${textRadius},${textRadius} 0 0,1 ${center - textRadius}, ${center}"
        fill="none"
      />
    </defs>

    <!-- Outer Decorative Concentric Rings -->
    <circle cx="${center}" cy="${center}" r="${ringOuter + 8}" fill="none" stroke="#FFD54F" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="4 6" />

    <!-- Main Solid Golden Ring Frame -->
    <circle cx="${center}" cy="${center}" r="${(ringOuter + ringInner) / 2}" fill="none" stroke="url(#goldRimGradient)" stroke-width="${ringOuter - ringInner}" filter="url(#goldGlow)" />

    <!-- Fine Concentric Linework -->
    <circle cx="${center}" cy="${center}" r="${ringOuter}" fill="none" stroke="#FFE082" stroke-width="3" />
    <circle cx="${center}" cy="${center}" r="${ringOuter - 4}" fill="none" stroke="#FFF9C4" stroke-width="1.5" stroke-opacity="0.8" />
    <circle cx="${center}" cy="${center}" r="${ringInner}" fill="none" stroke="#FFFDE7" stroke-width="3" />
    <circle cx="${center}" cy="${center}" r="${ringInner + 4}" fill="none" stroke="#8A5A00" stroke-width="1" stroke-opacity="0.7" />

    <!-- Circular Rim Inner Shadow framing the portrait -->
    <circle cx="${center}" cy="${center}" r="${portraitRadius}" fill="none" stroke="#3E2723" stroke-width="4" stroke-opacity="0.7" />

    <!-- Arched Holy Word "॥ सत्यनाम ॥" along the top arc center of the circular golden ring -->
    <g filter="url(#textShadow)">
      <text
        font-family="'Noto Serif Devanagari', 'Noto Sans Devanagari', 'Mukta', 'FreeSerif', 'DejaVu Serif', serif"
        font-size="44"
        font-weight="900"
        letter-spacing="5"
        fill="url(#textGoldGradient)"
        stroke="#4E2608"
        stroke-width="2"
        paint-order="stroke fill"
        text-anchor="middle"
      >
        <textPath href="#topSatyanaamArc" startOffset="50%" text-anchor="middle">
          ॥ सत्यनाम ॥
        </textPath>
      </text>
    </g>

    <!-- Arched "॥ साहेब बंदगी साहेब ॥" along bottom arc -->
    <g filter="url(#textShadow)">
      <text
        font-family="'Noto Serif Devanagari', 'Noto Sans Devanagari', 'Mukta', 'FreeSerif', 'DejaVu Serif', serif"
        font-size="28"
        font-weight="800"
        letter-spacing="4"
        fill="url(#textGoldGradient)"
        stroke="#4E2608"
        stroke-width="1.5"
        paint-order="stroke fill"
        text-anchor="middle"
      >
        <textPath href="#bottomSalutationArc" startOffset="50%" text-anchor="middle">
          ॥ साहेब बंदगी साहेब ॥
        </textPath>
      </text>
    </g>
  </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(backgroundSvg)).png().toBuffer();
  const overlayBuffer = await sharp(Buffer.from(frameOverlaySvg)).png().toBuffer();

  const masterEmblemBuffer = await sharp(bgBuffer)
    .composite([
      { input: circularPortrait, left: portraitLeft, top: portraitTop },
      { input: overlayBuffer, left: 0, top: 0 }
    ])
    .png()
    .toBuffer();

  console.log('Master Emblem generated. Size:', masterEmblemBuffer.length);

  // Write Master Image and Derivative Icons
  const masterPath = 'public/app_logo.png';
  await sharp(masterEmblemBuffer).toFile(masterPath);
  console.log(`Saved: ${masterPath}`);

  const icon512Path = 'public/icon.png';
  await sharp(masterEmblemBuffer).resize(512, 512).toFile(icon512Path);
  console.log(`Saved: ${icon512Path}`);

  const pwa512Path = 'public/pwa-512x512.png';
  await sharp(masterEmblemBuffer).resize(512, 512).toFile(pwa512Path);
  console.log(`Saved: ${pwa512Path}`);

  const pwaMaskablePath = 'public/pwa-maskable-512x512.png';
  await sharp(masterEmblemBuffer).resize(512, 512).toFile(pwaMaskablePath);
  console.log(`Saved: ${pwaMaskablePath}`);

  const pwa192Path = 'public/pwa-192x192.png';
  await sharp(masterEmblemBuffer).resize(192, 192).toFile(pwa192Path);
  console.log(`Saved: ${pwa192Path}`);

  const appleTouchPath = 'public/apple-touch-icon.png';
  await sharp(masterEmblemBuffer).resize(180, 180).toFile(appleTouchPath);
  console.log(`Saved: ${appleTouchPath}`);

  const faviconPath = 'public/favicon.ico';
  await sharp(masterEmblemBuffer).resize(64, 64).toFile(faviconPath);
  console.log(`Saved: ${faviconPath}`);

  console.log('All static master assets successfully re-compiled in square 1:1 format on Saffron background!');
}

generateMasterEmblem().catch(console.error);
