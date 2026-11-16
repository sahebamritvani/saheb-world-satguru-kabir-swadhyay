const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Radial Gradient (Spherical 3D glow) -->
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="85%">
      <stop offset="0%" stop-color="#FFFDF2"/>
      <stop offset="35%" stop-color="#FDF3DB"/>
      <stop offset="70%" stop-color="#ECC695"/>
      <stop offset="100%" stop-color="#C59152"/>
    </radialGradient>

    <!-- Metallic Gold Gradient for Borders & Highlights -->
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE8B2"/>
      <stop offset="25%" stop-color="#E5B353"/>
      <stop offset="50%" stop-color="#FFFDF2"/>
      <stop offset="75%" stop-color="#C98F32"/>
      <stop offset="100%" stop-color="#8C5C0F"/>
    </linearGradient>

    <!-- Velvet Red Gradient (Lotus Petals) -->
    <linearGradient id="petalRed" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF5252"/>
      <stop offset="40%" stop-color="#C61A09"/>
      <stop offset="100%" stop-color="#540502"/>
    </linearGradient>

    <!-- Dark Velvet Red Gradient (Background Lotus Petals) -->
    <linearGradient id="petalRedDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#B22222"/>
      <stop offset="60%" stop-color="#730B0B"/>
      <stop offset="100%" stop-color="#330101"/>
    </linearGradient>

    <!-- Glowing Flame Gradient (The Divine Light) -->
    <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="#FFF59D"/>
      <stop offset="60%" stop-color="#FFB300"/>
      <stop offset="100%" stop-color="#E65100"/>
    </linearGradient>

    <!-- Soft Golden Aura Gradient -->
    <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF8E1" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#FFE082" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FFE082" stop-opacity="0"/>
    </radialGradient>

    <!-- Deep Mahogany Pedestal Gradient -->
    <linearGradient id="mahoganyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6E3027"/>
      <stop offset="50%" stop-color="#401511"/>
      <stop offset="100%" stop-color="#240806"/>
    </linearGradient>

    <!-- Shadow Filter for 3D Depth -->
    <filter id="dropShadow" x="-20%" y="-20%" width="145%" height="145%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#3A1C0B" flood-opacity="0.45"/>
    </filter>

    <!-- Divine Glow Filter -->
    <filter id="divineGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Clip Path for App Icon Radius -->
    <clipPath id="iconClip">
      <rect width="512" height="512" rx="112" ry="112"/>
    </clipPath>
  </defs>

  <g clip-path="url(#iconClip)">
    <!-- Base Background -->
    <rect width="512" height="512" fill="url(#bgGrad)"/>

    <!-- 3D Luxury Outer Frame Border -->
    <rect x="8" y="8" width="496" height="496" rx="104" ry="104" fill="none" stroke="url(#goldMetallic)" stroke-width="14"/>
    <rect x="20" y="20" width="472" height="472" rx="92" ry="92" fill="none" stroke="#68390E" stroke-width="2" opacity="0.4"/>
    <rect x="26" y="26" width="460" height="460" rx="86" ry="86" fill="none" stroke="url(#goldMetallic)" stroke-width="2" stroke-dasharray="8 6" opacity="0.8"/>

    <!-- Background Divine Circular Aura Grid (MANDALA SUNBURST) -->
    <g opacity="0.2" stroke="url(#goldMetallic)" stroke-width="1" fill="none" transform="translate(256, 212)">
      <!-- Removed top-most circular lines to clear space for text -->
      <circle r="95" stroke-dasharray="4 4" />
      <circle r="70" />
      <circle r="45" stroke-dasharray="2 2" />
      <!-- Radiant Rays of the Mandala - shortened to not reach top -->
      <path d="M 0,-40 L 0,135 M -95,0 L 95,0 M -95,-95 L 95,95 M -95,95 L 95,-95" stroke-width="1.2"/>
    </g>

    <!-- Center Divine Soft Yellow Aura Bloom -->
    <circle cx="256" cy="212" r="140" fill="url(#auraGrad)" filter="url(#divineGlow)"/>

    <!-- Magic Sparkles (Spiritual Sparks) -->
    <path d="M 135,175 Q 135,160 120,160 Q 135,160 135,145 Q 135,160 150,160 Q 135,160 135,175 Z" fill="url(#goldMetallic)" filter="url(#dropShadow)"/>
    <path d="M 377,175 Q 377,160 362,160 Q 377,160 377,145 Q 377,160 392,160 Q 377,160 377,175 Z" fill="url(#goldMetallic)" filter="url(#dropShadow)"/>

    <!-- MAIN LOTUS & FLAME EMBLEM (With 3D Drop Shadow) -->
    <g transform="translate(256, 212) scale(1.65)" filter="url(#dropShadow)">
      <!-- 1. Far-left petal (Background layer) -->
      <path d="M -44,-6 C -34,-25 -14,-18 -10,14 C -24,17 -37,14 -44,-6 Z" fill="url(#petalRedDark)" stroke="url(#goldMetallic)" stroke-width="0.7"/>
      
      <!-- 2. Far-right petal (Background layer) -->
      <path d="M 44,-6 C 35,-25 15,-18 10,14 C 25,17 38,14 44,-6 Z" fill="url(#petalRedDark)" stroke="url(#goldMetallic)" stroke-width="0.7"/>

      <!-- 3. Left-inner petal -->
      <path d="M -26,-26 C -18,-43 -5,-26 -5,14 C -15,17 -22,9 -26,-26 Z" fill="url(#petalRed)" stroke="url(#goldMetallic)" stroke-width="0.8"/>

      <!-- 4. Right-inner petal -->
      <path d="M 26,-26 C 18,-43 5,-26 5,14 C 15,17 22,9 26,-26 Z" fill="url(#petalRed)" stroke="url(#goldMetallic)" stroke-width="0.8"/>

      <!-- 5. Center background petal -->
      <path d="M 0,-45 C 13,-20 13,14 0,24 C -13,14 -13,-20 0,-45 Z" fill="url(#petalRedDark)" stroke="url(#goldMetallic)" stroke-width="0.8"/>

      <!-- 6. Glowing Inner Golden Flame Petal (With Inner Shine) -->
      <path d="M 0,-34 C 8,-16 8,10 0,20 C -8,10 -8,-16 0,-34 Z" fill="url(#flameGrad)" stroke="url(#goldMetallic)" stroke-width="1.2"/>
      <!-- Soft flame inner light core -->
      <path d="M 0,-26 C 4,-12 4,8 0,15 C -4,8 -4,-12 0,-26 Z" fill="#FFFFFF" opacity="0.6"/>

      <!-- 7. Bottom pedestal / Base boat (Solid Mahogany with Gold Trim) -->
      <path d="M -42,16 C -20,28 20,28 42,16 C 30,34 -30,34 -42,16 Z" fill="url(#mahoganyGrad)" stroke="url(#goldMetallic)" stroke-width="1.2"/>
    </g>

    <!-- Header Text: || सत्यनाम || (Glow and drop shadow) -->
    <text x="256" y="50" text-anchor="middle" font-family="'Cinzel', 'Noto Serif Devanagari', 'Times New Roman', Georgia, serif" font-weight="900" font-size="34" fill="#3D1A0A" letter-spacing="4" filter="url(#dropShadow)">
      ।। सत्यनाम ।।
    </text>

    <!-- Main Title: SAHEB WORLD (Deep Brown Text to match सत्यनाम) -->
    <text x="256" y="362" text-anchor="middle" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-weight="900" font-size="44" fill="#3D1A0A" letter-spacing="2" filter="url(#dropShadow)">
      SAHEB WORLD
    </text>

    <!-- Sub-Title: सतगुरु कबीर साहेब स्वाध्याय (Elegant contrast color) -->
    <text x="256" y="408" text-anchor="middle" font-family="'Noto Serif Devanagari', 'Times New Roman', Georgia, serif" font-weight="bold" font-size="22" fill="#541B0E" letter-spacing="0.5">
      सतगुरु कबीर साहेब स्वाध्याय
    </text>

    <!-- Bottom Text: ।। साहेब बंदगी साहेब ।। (Deep classic brown) -->
    <text x="256" y="468" text-anchor="middle" font-family="'Noto Serif Devanagari', 'Times New Roman', Georgia, serif" font-weight="bold" font-size="24" fill="#3D1A0A" letter-spacing="2" filter="url(#dropShadow)">
      ।। साहेब बंदगी साहेब ।।
    </text>
  </g>
</svg>`;

fs.writeFileSync('public/icon.svg', svg);
console.log('Successfully written public/icon.svg');
