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
 * Returns the exact WhatsApp/Social share text package formatted with the active live deployment link.
 */
export function getSharePayloadText(language: string = 'hi', customUrl?: string): string {
  const currentUrl = customUrl || getAppUrlSync();

  if (language === 'pb') {
    return `🙏 ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ! 🙏

ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀਆਂ ਪਾਵਨ ਬਾਣੀਆਂ, ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ ਅਤੇ ਧਰਮ-ਗ੍ਰੰਥਾਂ ਦੇ ਸ਼ੁੱਧ ਪਾਠ ਲਈ ਡਾਊਨਲੋਡ ਕਰੋ 'ਸਾਹੇਬ ਵਰਲਡ' (Saheb World) ਐਪ।

ਇਸ ਨੂੰ ਆਪਣੇ ਮੋਬਾਈਲ 'ਤੇ ਤੁਰੰਤ ਇੰਸਟਾਲ ਕਰਨ ਅਤੇ ਹੋਮ ਸਕ੍ਰੀਨ 'ਤੇ ਜੋੜਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਲਾਈਵ ਲਿੰਕ 'ਤੇ ਕਲਿੱਕ ਕਰੋ:
${currentUrl}

(ਇਸ ਲਿੰਕ ਨੂੰ ਕ੍ਰੋਮ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਖੋਲ੍ਹ ਕੇ 'Add to Home Screen' ਕਰੋ ਅਤੇ ਸਾਰੇ ਭਗਤਾਂ ਨਾਲ ਸਾਂਝਾ ਕਰੋ।)`;
  }

  if (language === 'en') {
    return (
      '🙏 Saheb Bandagi Saheb! 🙏\n\n' +
      'Download \'Saheb World\' App for sacred banis, Nitnem Gutka Saheb, and holy scriptures of Satguru Kabir Saheb.\n\n' +
      'To instantly install on your mobile and add to Home Screen, click the live link below:\n' +
      currentUrl + '\n\n' +
      '(Open this link in Chrome browser, tap \'Add to Home Screen\' and share with all devotees.)'
    );
  }

  // Exact Hindi Payload requested
  return (
    '🙏 साहेब बंदगी साहेब! 🙏\n\n' +
    'सतगुरु कबीर साहेब की पावन वाणियों, नितनेम गुटका साहेब और धर्मग्रंथों के शुद्ध पाठ के लिए डाउनलोड करें \'साहेब वर्ल्ड\' (Saheb World) ऐप।\n\n' +
    'इसे अपने मोबाइल पर तुरंत इंस्टॉल करने और होम स्क्रीन पर जोड़ने के लिए नीचे दिए गए लाइव लिंक पर क्लिक करें:\n' +
    currentUrl + '\n\n' +
    '(इस लिंक को क्रोम ब्राउज़र में खोलकर \'Add to Home Screen\' करें और सभी भक्तों के साथ साझा करें।)'
  );
}

/**
 * Bulletproof Web Share API execution with strict try-catch and multi-level fallbacks.
 */
export async function shareAppUniversally(language: string = 'hi'): Promise<{ success: boolean; method: 'native' | 'clipboard' }> {
  const currentUrl = getAppUrlSync();
  const shareText = getSharePayloadText(language, currentUrl);
  const shareTitle = language === 'pb'
    ? 'ਸਾਹੇਬ ਵਰਲਡ (Saheb World) - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਐਪ'
    : language === 'en'
    ? 'Saheb World - Satguru Kabir Saheb App'
    : 'साहेब वर्ल्ड (Saheb World) - सतगुरु कबीर साहेब पावन ऐप';

  // Level 1: Web Share API (Mobile Native Sheet) - Clean pure text share without image preview fetch
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      const shareData: ShareData = {
        title: shareTitle,
        text: shareText,
      };

      await navigator.share(shareData);
      return { success: true, method: 'native' };
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        return { success: true, method: 'native' };
      }
      console.warn('Web Share API invocation notice, falling back to clipboard:', err);
    }
  }

  // Level 2: Modern Clipboard API Fallback
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(shareText);
      return { success: true, method: 'clipboard' };
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
      return { success: true, method: 'clipboard' };
    }
  } catch (legacyErr) {
    console.warn('Legacy copy error:', legacyErr);
  }

  return { success: true, method: 'clipboard' };
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
