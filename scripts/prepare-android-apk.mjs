import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const ANDROID_DIR = path.join(ROOT, 'android');
const APP_DIR = path.join(ANDROID_DIR, 'app');
const RES_DIR = path.join(APP_DIR, 'src', 'main', 'res');
const MASTER_JPG = path.join(ROOT, 'public', 'Saheb_World_icon.jpg');
const MASKABLE_PNG = path.join(ROOT, 'public', 'pwa-maskable-512x512.png');

const VERSION_CODE = Math.max(1, Number.parseInt(process.env.APK_VERSION_CODE || '1', 10) || 1);
const VERSION_NAME = (process.env.APK_VERSION_NAME || `1.0.${VERSION_CODE}`).trim();
const HAS_KEYSTORE = Boolean(
  process.env.ANDROID_KEYSTORE_PATH && fs.existsSync(process.env.ANDROID_KEYSTORE_PATH)
);

const ICON_DENSITIES = [
  { folder: 'mipmap-mdpi', launcher: 48, foreground: 108 },
  { folder: 'mipmap-hdpi', launcher: 72, foreground: 162 },
  { folder: 'mipmap-xhdpi', launcher: 96, foreground: 216 },
  { folder: 'mipmap-xxhdpi', launcher: 144, foreground: 324 },
  { folder: 'mipmap-xxxhdpi', launcher: 192, foreground: 432 },
];

const SPLASH_CONFIGS = [
  { folder: 'drawable', width: 480, height: 800 },
  { folder: 'drawable-port-mdpi', width: 320, height: 480 },
  { folder: 'drawable-port-hdpi', width: 480, height: 800 },
  { folder: 'drawable-port-xhdpi', width: 720, height: 1280 },
  { folder: 'drawable-port-xxhdpi', width: 960, height: 1600 },
  { folder: 'drawable-port-xxxhdpi', width: 1280, height: 1920 },
  { folder: 'drawable-land-mdpi', width: 480, height: 320 },
  { folder: 'drawable-land-hdpi', width: 800, height: 480 },
  { folder: 'drawable-land-xhdpi', width: 1280, height: 720 },
  { folder: 'drawable-land-xxhdpi', width: 1600, height: 960 },
  { folder: 'drawable-land-xxxhdpi', width: 1920, height: 1280 },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function generateAndroidIcons() {
  const sourceIcon = fs.existsSync(MASKABLE_PNG) ? MASKABLE_PNG : MASTER_JPG;
  if (!fs.existsSync(sourceIcon)) {
    throw new Error(`Master icon not found at ${sourceIcon}`);
  }

  for (const { folder, launcher, foreground } of ICON_DENSITIES) {
    const outDir = path.join(RES_DIR, folder);
    ensureDir(outDir);

    // 1. Legacy Square/Rounded Launcher Icon
    const roundedRadius = Math.round(launcher * 0.2);
    const roundedMask = Buffer.from(
      `<svg width="${launcher}" height="${launcher}" xmlns="http://www.w3.org/2000/svg">` +
        `<rect x="0" y="0" width="${launcher}" height="${launcher}" rx="${roundedRadius}" ry="${roundedRadius}" fill="white"/>` +
        `</svg>`
    );

    await sharp(sourceIcon)
      .resize(launcher, launcher, { fit: 'cover' })
      .ensureAlpha()
      .composite([{ input: roundedMask, blend: 'dest-in' }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(outDir, 'ic_launcher.png'));

    // 2. Round Launcher Icon
    const circleMask = Buffer.from(
      `<svg width="${launcher}" height="${launcher}" xmlns="http://www.w3.org/2000/svg">` +
        `<circle cx="${launcher / 2}" cy="${launcher / 2}" r="${launcher / 2}" fill="white"/>` +
        `</svg>`
    );

    await sharp(sourceIcon)
      .resize(launcher, launcher, { fit: 'cover' })
      .ensureAlpha()
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(outDir, 'ic_launcher_round.png'));

    // 3. Android Adaptive Foreground Layer (108dp canvas with emblem safely inside 72dp center)
    const artSize = Math.round(foreground * 0.72);
    const pad = Math.round((foreground - artSize) / 2);
    const fgCircleMask = Buffer.from(
      `<svg width="${artSize}" height="${artSize}" xmlns="http://www.w3.org/2000/svg">` +
        `<defs><radialGradient id="g" cx="50%" cy="50%" r="50%">` +
        `<stop offset="88%" stop-color="white" stop-opacity="1"/>` +
        `<stop offset="99%" stop-color="white" stop-opacity="0"/>` +
        `</radialGradient></defs>` +
        `<circle cx="${artSize / 2}" cy="${artSize / 2}" r="${artSize / 2}" fill="url(#g)"/>` +
        `</svg>`
    );

    const trimmedArt = await sharp(MASTER_JPG)
      .resize(artSize, artSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .ensureAlpha()
      .composite([{ input: fgCircleMask, blend: 'dest-in' }])
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: foreground,
        height: foreground,
        channels: 4,
        background: { r: 255, g: 253, b: 245, alpha: 0 },
      },
    })
      .composite([{ input: trimmedArt, top: pad, left: pad }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(outDir, 'ic_launcher_foreground.png'));
  }

  // Write Adaptive Icon XML & Background Color
  const valuesDir = path.join(RES_DIR, 'values');
  const anydpiDir = path.join(RES_DIR, 'mipmap-anydpi-v26');
  ensureDir(valuesDir);
  ensureDir(anydpiDir);

  fs.writeFileSync(
    path.join(valuesDir, 'ic_launcher_background.xml'),
    `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#FFFDF5</color>
</resources>
`
  );

  const adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`;
  fs.writeFileSync(path.join(anydpiDir, 'ic_launcher.xml'), adaptiveXml);
  fs.writeFileSync(path.join(anydpiDir, 'ic_launcher_round.xml'), adaptiveXml);

  // Sync top-level /res/drawable/app_icon.png as well
  const rootResDrawable = path.join(ROOT, 'res', 'drawable');
  ensureDir(rootResDrawable);
  await sharp(sourceIcon)
    .resize(512, 512, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(rootResDrawable, 'app_icon.png'));
}

async function generateSplashScreens() {
  for (const { folder, width, height } of SPLASH_CONFIGS) {
    const outDir = path.join(RES_DIR, folder);
    ensureDir(outDir);

    const emblemSize = Math.round(Math.min(width, height) * 0.42);
    const circleMask = Buffer.from(
      `<svg width="${emblemSize}" height="${emblemSize}" xmlns="http://www.w3.org/2000/svg">` +
        `<defs><radialGradient id="s" cx="50%" cy="50%" r="50%">` +
        `<stop offset="86%" stop-color="white" stop-opacity="1"/>` +
        `<stop offset="99%" stop-color="white" stop-opacity="0"/>` +
        `</radialGradient></defs>` +
        `<circle cx="${emblemSize / 2}" cy="${emblemSize / 2}" r="${emblemSize / 2}" fill="url(#s)"/>` +
        `</svg>`
    );

    const emblemBuf = await sharp(MASTER_JPG)
      .resize(emblemSize, emblemSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .ensureAlpha()
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png()
      .toBuffer();

    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 255, g: 253, b: 208, alpha: 1 }, // #FFFDD0
      },
    })
      .composite([
        {
          input: emblemBuf,
          left: Math.round((width - emblemSize) / 2),
          top: Math.round((height - emblemSize) / 2),
        },
      ])
      .flatten({ background: { r: 255, g: 253, b: 208 } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outDir, 'splash.png'));
  }
}

function patchGradleAndManifest() {
  const buildGradlePath = path.join(APP_DIR, 'build.gradle');
  if (fs.existsSync(buildGradlePath)) {
    let gradle = fs.readFileSync(buildGradlePath, 'utf8');

    // Stamp monotonic versionCode & versionName
    gradle = gradle.replace(/versionCode\s+\d+/g, `versionCode ${VERSION_CODE}`);
    gradle = gradle.replace(/versionName\s+["'][^"']+["']/g, `versionName "${VERSION_NAME}"`);

    // Configure release keystore signing cleanly if provided
    if (HAS_KEYSTORE && !gradle.includes('signingConfigs {')) {
      const signingBlock = `    signingConfigs {
        release {
            storeFile file(System.getenv("ANDROID_KEYSTORE_PATH"))
            storePassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
            keyAlias System.getenv("ANDROID_KEY_ALIAS")
            keyPassword System.getenv("ANDROID_KEY_PASSWORD")
        }
    }
    buildTypes {`;
      gradle = gradle.replace(/\s*buildTypes\s*\{/, `\n${signingBlock}`);
      gradle = gradle.replace(
        /(buildTypes\s*\{[\s\S]*?release\s*\{)/,
        `$1\n            signingConfig signingConfigs.release`
      );
    }

    fs.writeFileSync(buildGradlePath, gradle);
  }

  const stringsXmlPath = path.join(RES_DIR, 'values', 'strings.xml');
  if (fs.existsSync(stringsXmlPath)) {
    let stringsXml = fs.readFileSync(stringsXmlPath, 'utf8');
    stringsXml = stringsXml.replace(
      /<string name="app_name">.*?<\/string>/,
      '<string name="app_name">Saheb World</string>'
    );
    stringsXml = stringsXml.replace(
      /<string name="title_activity_main">.*?<\/string>/,
      '<string name="title_activity_main">Saheb World</string>'
    );
    fs.writeFileSync(stringsXmlPath, stringsXml);
  }

  const manifestPath = path.join(APP_DIR, 'src', 'main', 'AndroidManifest.xml');
  if (fs.existsSync(manifestPath)) {
    let manifest = fs.readFileSync(manifestPath, 'utf8');
    if (!manifest.includes('android:usesCleartextTraffic')) {
      manifest = manifest.replace(
        '<application',
        '<application android:usesCleartextTraffic="false" android:hardwareAccelerated="true"'
      );
    }
    if (!manifest.includes('android.permission.ACCESS_NETWORK_STATE')) {
      manifest = manifest.replace(
        '<uses-permission android:name="android.permission.INTERNET" />',
        '<uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />'
      );
    }
    fs.writeFileSync(manifestPath, manifest);
  }
}

async function main() {
  if (!fs.existsSync(APP_DIR)) {
    throw new Error('Android project directory missing. Run "npx cap add android" first.');
  }
  await generateAndroidIcons();
  await generateSplashScreens();
  patchGradleAndManifest();
  console.log(
    `✓ Android Capacitor APK assets & manifest prepared (v${VERSION_NAME}, code ${VERSION_CODE}, signedRelease=${HAS_KEYSTORE})`
  );
}

main().catch((err) => {
  console.error('Failed preparing Android APK resources:', err);
  process.exit(1);
});
