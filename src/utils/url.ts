let cachedAppUrl: string | null = null;

export const SHARED_APP_URL = 'https://ais-pre-meux3g56fqgqmol3tohmrd-795050738320.asia-east1.run.app';
export const DEV_APP_URL = 'https://ais-pre-meux3g56fqgqmol3tohmrd-795050738320.asia-east1.run.app';

/**
 * Synchronously returns the active live deployment URL.
 * Uses the active HTTPS origin in the browser so authenticated cookies & PWA WebAPK minting match cleanly,
 * falling back to cached config or the official shared preview URL.
 */
export function getAppUrlSync(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    const origin = window.location.origin;
    if (
      origin.startsWith('https://') &&
      !origin.includes('localhost') &&
      !origin.includes('127.0.0.1') &&
      !origin.includes('ais-dev-')
    ) {
      return origin;
    }
  }
  return SHARED_APP_URL;
}

/**
 * Returns the standalone app URL with an install-handoff parameter so Chrome highlights the 1-tap WebAPK bar on arrival.
 */
export function getInstallHandoffUrl(customUrl?: string): string {
  const baseUrl = (customUrl || getAppUrlSync()).replace(/\/+$/, '');
  return `${baseUrl}/?install=sahebworld`;
}

/**
 * Builds an Android Chrome Intent URI that opens the standalone URL inside Chrome even when clicked from an in-app browser/WebView.
 */
export function getAndroidChromeIntentUrl(customUrl?: string): string {
  const fullUrl = getInstallHandoffUrl(customUrl);
  if (!fullUrl.startsWith('https://')) {
    return fullUrl;
  }
  const hostAndPath = fullUrl.slice('https://'.length);
  return `intent://${hostAndPath}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(fullUrl)};end`;
}

/**
 * Resolves the public live share URL (`window.location.href` on public domains, or `SHARED_APP_URL`
 * with current path/query when running in dev/localhost preview) so shared links are always publicly accessible.
 */
export function getLiveShareUrl(): string {
  if (typeof window !== 'undefined' && window.location?.href) {
    const origin = window.location.origin;
    if (
      origin.includes('ais-dev-') ||
      origin.includes('localhost') ||
      origin.includes('127.0.0.1')
    ) {
      const publicBase = (
        cachedAppUrl && !cachedAppUrl.includes('ais-dev-') ? cachedAppUrl : SHARED_APP_URL
      ).replace(/\/+$/, '');
      const pathAndQuery = `${window.location.pathname || ''}${window.location.search || ''}${window.location.hash || ''}`;
      return pathAndQuery && pathAndQuery !== '/' ? `${publicBase}${pathAndQuery}` : publicBase;
    }
    return window.location.href;
  }
  return getAppUrlSync();
}

/**
 * Returns the exact WhatsApp/Social share text package formatted with the active live URL.
 */
export function getSharePayloadText(language: string = 'hi', customUrl?: string): string {
  const currentUrl = customUrl || getLiveShareUrl();

  if (language === 'pb') {
    return `🌹।।ਸਤਯਨਾਮ।।🌹
ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ਜੀ। 🙏

ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਬਾਣੀ ਅਤੇ ਸਾਖੀਆਂ ਦੇ ਗਹਿਰੇ ਸਵਾਧਿਆਏ ਲਈ 'Saheb World' ਐਪ ਨਾਲ ਜੁੜੋ।

✨ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:
• ਮੂਲ ਪਾਵਨ ਬਾਣੀ ਤੇ ਸਰਲ ਅਰਥ (हिन्दी, ਪੰਜਾਬੀ, English)
• ਆਡੀਓ ਪਾਠ, ਆਧਿਆਤਮਕ ਰਹੱਸ ਤੇ ਸਮਾਨੰਤਰ ਬਾਣੀਆਂ
• ਬੋਧ ਪ੍ਰਸ਼ਨਾਵਲੀ (Quiz) ਤੇ ਧਿਆਨ-ਯੋਗ
• ੧੧ ਪੜਾਅ ਪੂਰੇ ਕਰਨ 'ਤੇ ਆਪਣੇ ਨਾਮ ਦਾ ਡਿਜੀਟਲ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ!

👉 ਅੱਜ ਹੀ ਆਪਣਾ ਦੈਨਿਕ ਸਵਾਧਿਆਏ ਸ਼ੁਰੂ ਕਰੋ: ${currentUrl}

।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।। 🙏`;
  }

  if (language === 'en') {
    return `🌹||Satyanaam||🌹
Saheb Bandagi Saheb Ji. 🙏

Join the 'Saheb World' app for deep Swadhyay (self-study) of Satguru Kabir Saheb Ji's sacred Vani and Sakhis.

✨ Key Features:
• Sacred Mool Vani & clear meanings (हिन्दी, ਪੰਜਾਬੀ, English)
• Audio narration, mystical insights & parallel scripture Vanis
• Self-assessment Quiz & guided meditation yoga
• Personalized Digital Completion Certificate upon completing all 11 steps!

👉 Start your daily Swadhyay today: ${currentUrl}

|| Saheb Bandagi Saheb || 🙏`;
  }

  // Exact Hindi Devotional Invitation Payload
  return `🌹।।सत्यनाम।।🌹
साहेब बंदगी साहेब जी। 🙏

सतगुरु कबीर साहेब जी की पावन वाणी और साखियों के गहन स्वाध्याय के लिए 'Saheb World' ऐप से जुड़ें।

✨ मुख्य विशेषताएं:
• मूल पावन वाणी व सरल अर्थ (हिन्दी, ਪੰਜਾਬੀ, English)
• ऑडियो पाठ, आध्यात्मिक रहस्य व समानांतर वाणियाँ
• बोध प्रश्नोत्तरी (Quiz) व ध्यान-योग
• ११ चरण पूर्ण करने पर अपने नाम का डिजिटल सिद्धि प्रमाण-पत्र!

👉 आज ही अपना दैनिक स्वाध्याय प्रारंभ करें: ${currentUrl}

।। साहेब बंदगी साहेब ।। 🙏`;
}

export function getWhatsAppShareUrl(language: string = 'hi', customUrl?: string): string {
  const text = getSharePayloadText(language, customUrl);
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

/**
 * Bulletproof Web Share API execution with strict try-catch, Clipboard copy, and WhatsApp share URL fallback.
 */
export async function shareAppUniversally(
  language: string = 'hi'
): Promise<{
  success: boolean;
  method: 'native' | 'clipboard';
  shareText: string;
  whatsappUrl: string;
  liveUrl: string;
}> {
  const liveUrl = getLiveShareUrl();
  const shareText = getSharePayloadText(language, liveUrl);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const shareTitle =
    language === 'pb'
      ? 'ਸਾਹੇਬ ਵਰਲਡ (Saheb World) - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਐਪ'
      : language === 'en'
      ? 'Saheb World - Satguru Kabir Saheb App'
      : 'साहेब वर्ल्ड (Saheb World) - सतगुरु कबीर साहेब पावन ऐप';

  // Level 1: Web Share API (Mobile Native Sheet)
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      const shareData: ShareData = {
        title: shareTitle,
        text: shareText,
        url: liveUrl,
      };

      await navigator.share(shareData);
      return { success: true, method: 'native', shareText, whatsappUrl, liveUrl };
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        return { success: true, method: 'native', shareText, whatsappUrl, liveUrl };
      }
      console.warn('Web Share API invocation notice, falling back to clipboard:', err);
    }
  }

  // Level 2: Modern Clipboard API Fallback
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(shareText);
      return { success: true, method: 'clipboard', shareText, whatsappUrl, liveUrl };
    }
  } catch (clipErr) {
    console.warn('Clipboard write notice:', clipErr);
  }

  // Level 3: Legacy Textarea Copy Fallback
  try {
    if (typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return { success: true, method: 'clipboard', shareText, whatsappUrl, liveUrl };
    }
  } catch (legacyErr) {
    console.warn('Legacy copy error:', legacyErr);
  }

  return { success: true, method: 'clipboard', shareText, whatsappUrl, liveUrl };
}

/**
 * Asynchronously fetches the correct public URL from the backend /api/config.
 */
export async function getAppUrlAsync(): Promise<string> {
  if (cachedAppUrl) {
    return cachedAppUrl;
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    const syncUrl = getAppUrlSync();
    cachedAppUrl = syncUrl;
    return syncUrl;
  }

  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      if (data && data.appUrl) {
        cachedAppUrl = data.appUrl;
        return data.appUrl;
      }
    }
  } catch (error) {
    console.warn('Config fetch notice, using sync resolution:', error);
  }

  const url = getAppUrlSync();
  cachedAppUrl = url;
  return url;
}

// Prefetch URL configuration on module load
if (typeof window !== 'undefined') {
  getAppUrlAsync().catch(() => {});
}
