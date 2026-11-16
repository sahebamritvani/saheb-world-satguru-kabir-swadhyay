/**
 * Consolidated Application Assets Registry
 * Single authoritative source for all branding logos, sacred portraits, and PWA icons.
 */

export const APP_ASSETS = {
  // Brand & Application Icons
  masterLauncher: '/Saheb_World_icon.jpg',
  appIcon: '/Saheb_World_icon.jpg',
  logo: '/Saheb_World_icon.jpg',
  icon: '/Saheb_World_icon.jpg',
  touchIcon: '/Saheb_World_icon.jpg',

  // PWA Web App Icons
  pwa192: '/pwa-192x192.png',
  pwa512: '/pwa-512x512.png',
  pwaMaskable192: '/pwa-maskable-192x192.png',
  pwaMaskable: '/pwa-maskable-512x512.png',
  appleTouchIcon: '/apple-touch-icon.png',
  manifest: '/manifest.webmanifest',

  // Sacred Temple & Darshan Portraits (Neutral)
  portraits: {
    authenticDarshan2026: '',
    kabirSahebDivyaSwaroop: '',
    authenticKabirSwaroop: '',
  },

  // Fallback / Preset URLs
  defaultPortrait: '',
} as const;

export default APP_ASSETS;
