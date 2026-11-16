import React, { useEffect, useState, useCallback } from 'react';
import {
  Download,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  GitBranch,
  AlertCircle,
  Edit3,
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import {
  CURRENT_APP_VERSION,
  GitHubApkReleaseInfo,
  fetchLatestGitHubApkRelease,
  formatApkSizeMb,
  getConfiguredGitHubRepo,
  getGitHubActionsPageUrl,
  getGitHubReleasesPageUrl,
  parseGitHubRepoSlug,
  saveConfiguredGitHubRepo,
} from '../services/githubApkRelease';
import { isCapacitorAndroid } from '../services/capacitorBridge';

interface GitHubApkCardProps {
  language: Language;
  onReleaseFetched?: (info: GitHubApkReleaseInfo) => void;
}

export const GitHubApkCard: React.FC<GitHubApkCardProps> = ({
  language,
  onReleaseFetched,
}) => {
  const { theme } = useAppTheme();
  const isDark = theme.mode === 'mystic_dark' || theme.mode === 'flow_state';
  const runningInApk = isCapacitorAndroid();

  const [repo, setRepo] = useState<string>(() => getConfiguredGitHubRepo());
  const [repoInput, setRepoInput] = useState<string>(() => getConfiguredGitHubRepo());
  const [isEditingRepo, setIsEditingRepo] = useState<boolean>(false);
  const [repoError, setRepoError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [releaseInfo, setReleaseInfo] = useState<GitHubApkReleaseInfo | null>(null);

  const loadRelease = useCallback(
    async (targetRepo?: string) => {
      const slug = targetRepo ?? repo;
      if (!slug) {
        const unconf: GitHubApkReleaseInfo = { status: 'unconfigured', repo: '' };
        setReleaseInfo(unconf);
        onReleaseFetched?.(unconf);
        return;
      }
      setIsLoading(true);
      try {
        const info = await fetchLatestGitHubApkRelease(slug);
        setReleaseInfo(info);
        onReleaseFetched?.(info);
      } finally {
        setIsLoading(false);
      }
    },
    [repo, onReleaseFetched]
  );

  useEffect(() => {
    loadRelease();
  }, [loadRelease]);

  const handleSaveRepo = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = repoInput.trim();
    if (!trimmed) {
      saveConfiguredGitHubRepo('');
      setRepo('');
      setIsEditingRepo(false);
      setRepoError(null);
      await loadRelease('');
      return;
    }

    const parsed = parseGitHubRepoSlug(trimmed);
    if (!parsed) {
      setRepoError(
        language === 'pb'
          ? 'ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ GitHub URL ਜਾਂ owner/repo ਲਿਖੋ।'
          : language === 'en'
          ? 'Please enter a valid GitHub URL or owner/repo format.'
          : 'कृपया सही GitHub लिंक या owner/repo नाम दर्ज करें (जैसे: username/saheb-world)।'
      );
      return;
    }

    saveConfiguredGitHubRepo(parsed);
    setRepo(parsed);
    setRepoInput(parsed);
    setRepoError(null);
    setIsEditingRepo(false);
    await loadRelease(parsed);
  };

  const formattedDate = releaseInfo?.publishedAt
    ? new Date(releaseInfo.publishedAt).toLocaleDateString(
        language === 'pb' ? 'pa-IN' : language === 'en' ? 'en-US' : 'hi-IN',
        { day: 'numeric', month: 'short', year: 'numeric' }
      )
    : '';

  const sizeLabel = formatApkSizeMb(releaseInfo?.apkSizeBytes);

  return (
    <div
      style={{
        backgroundColor: isDark ? '#18130E' : theme.bgSecondary,
        borderColor: isDark ? '#D97706' : theme.accentGold,
      }}
      className="p-4 sm:p-5 rounded-2xl border-2 space-y-3.5 text-left shadow-xs"
    >
      {/* Card Title Row */}
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-0.5 min-w-0">
          <h4
            className="text-sm sm:text-base font-black font-serif flex items-center gap-2"
            style={{ color: isDark ? '#FFFDF7' : theme.sacredMaroon }}
          >
            <GitBranch className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              {language === 'pb'
                ? 'GitHub Android APK (ਆਟੋ-ਅਪਡੇਟ)'
                : language === 'en'
                ? 'GitHub Android APK (Auto-Updated)'
                : 'GitHub Android APK फाइल (ऑटो-अपडेट)'}
            </span>
          </h4>
          <p className="text-[0.6875rem] font-serif tabular-nums" style={{ color: theme.textSecondary }}>
            {language === 'en'
              ? `Current App Build: v${CURRENT_APP_VERSION}${runningInApk ? ' · Android APK' : ' · Web PWA'}`
              : `वर्तमान बिल्ड: v${CURRENT_APP_VERSION}${runningInApk ? ' · Android APK' : ' · वेब ऐप'}`}
            {repo ? ` · ${repo}` : ''}
          </p>
        </div>

        {repo && (
          <button
            type="button"
            onClick={() => {
              setIsEditingRepo((prev) => !prev);
              setRepoInput(repo);
              setRepoError(null);
            }}
            className="min-h-[44px] min-w-[44px] px-2.5 rounded-xl border border-amber-600/30 flex items-center justify-center gap-1 text-xs font-serif font-bold hover:bg-amber-500/10 transition cursor-pointer shrink-0 whitespace-nowrap"
            style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}
            title={language === 'en' ? 'Change GitHub Repo' : 'GitHub रिपॉजिटरी बदलें'}
          >
            <Edit3 className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xs:inline">{language === 'en' ? 'Edit' : 'बदलें'}</span>
          </button>
        )}
      </div>

      {/* Repo Link / Editor Form */}
      {(!repo || isEditingRepo) && (
        <form onSubmit={handleSaveRepo} className="space-y-2.5">
          <label
            htmlFor="github-repo-slug-input"
            className="block text-xs font-serif font-bold"
            style={{ color: isDark ? '#FDE68A' : theme.textPrimary }}
          >
            {language === 'pb'
              ? 'ਆਪਣੀ GitHub ਰਿਪੋਜ਼ਿਟਰੀ ਜੋੜੋ (ਜਿਵੇਂ: username/saheb-world):'
              : language === 'en'
              ? 'Connect your GitHub repository (e.g. username/saheb-world):'
              : 'अपनी GitHub रिपॉजिटरी का नाम या लिंक जोड़ें:'}
          </label>
          <div className="flex flex-col xs:flex-row gap-2">
            <input
              id="github-repo-slug-input"
              type="text"
              value={repoInput}
              onChange={(e) => setRepoInput(e.target.value)}
              placeholder="username/saheb-world"
              className="flex-1 min-h-[44px] px-3 py-2 rounded-xl border border-amber-500/40 bg-white dark:bg-zinc-900 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
              style={{ color: theme.textPrimary }}
            />
            <button
              type="submit"
              className="min-h-[44px] px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-serif font-bold whitespace-nowrap shrink-0 transition cursor-pointer"
            >
              {language === 'en' ? 'Save & Check' : 'जोड़ें व जांचें'}
            </button>
          </div>
          {repoError && (
            <p className="text-xs font-serif text-red-600 dark:text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{repoError}</span>
            </p>
          )}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[0.6875rem] sm:text-xs font-serif space-y-1 leading-relaxed" style={{ color: theme.textSecondary }}>
            <p className="font-bold" style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}>
              {language === 'en' ? 'How auto-updating APK works:' : 'AI Studio से स्वतः APK अपडेट कैसे बनेगी:'}
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>{language === 'en' ? 'Export / push this project to your public GitHub repository from Google AI Studio.' : 'Google AI Studio में ऊपर दिए GitHub (Save to GitHub) से इस कोड को अपनी रिपॉजिटरी में भेजें।'}</li>
              <li>{language === 'en' ? 'GitHub Actions automatically builds a fresh signed Saheb-World.apk on every push.' : 'कोड पहुंचते ही GitHub Actions स्वतः गोल्डन चक्र आइकन वाली Saheb-World.apk बना देगा।'}</li>
              <li>{language === 'en' ? 'Enter owner/repo above to download and receive update alerts right inside this app.' : 'रिपॉजिटरी का नाम यहाँ जोड़ते ही सीधे ऐप के अंदर डाउनलोड व अपडेट बटन सक्रिय हो जाएगा।'}</li>
            </ol>
          </div>
        </form>
      )}

      {/* Active Repo Status & Download Controls */}
      {repo && !isEditingRepo && (
        <div className="space-y-3">
          {isLoading ? (
            <div className="p-3.5 rounded-xl border border-amber-500/25 bg-black/5 dark:bg-white/5 flex items-center gap-2.5 text-xs font-serif" style={{ color: theme.textSecondary }}>
              <RefreshCw className="w-4 h-4 animate-spin text-amber-600 shrink-0" />
              <span>{language === 'en' ? 'Checking latest GitHub APK release...' : 'GitHub Releases से नवीनतम APK जांची जा रही है...'}</span>
            </div>
          ) : releaseInfo?.status === 'ready' && releaseInfo.apkDownloadUrl ? (
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl border border-emerald-500/35 bg-emerald-500/10 space-y-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-black font-serif text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      {releaseInfo.hasNewerVersion
                        ? (language === 'en' ? `New APK Update Ready (${releaseInfo.tagName})` : `नया APK अपडेट उपलब्ध है (${releaseInfo.tagName})`)
                        : (language === 'en' ? `Latest APK Ready (${releaseInfo.tagName})` : `नवीनतम Android APK तैयार है (${releaseInfo.tagName})`)}
                    </span>
                  </span>
                </div>
                <p className="text-[0.6875rem] font-serif tabular-nums text-emerald-900/80 dark:text-emerald-200/80">
                  {releaseInfo.apkFileName || 'Saheb-World.apk'}
                  {sizeLabel ? ` · ${sizeLabel}` : ''}
                  {formattedDate ? ` · ${formattedDate}` : ''}
                  {releaseInfo.fromCache ? (language === 'en' ? ' · Cached' : ' · कैश्ड') : ''}
                </p>
              </div>

              <a
                href={releaseInfo.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={releaseInfo.apkFileName || 'Saheb-World.apk'}
                style={{
                  backgroundColor: isDark ? '#D97706' : theme.sacredMaroon,
                  color: isDark ? '#000000' : '#FFFFFF',
                }}
                className="w-full min-h-[44px] py-3 px-4 rounded-xl font-bold font-serif text-sm sm:text-base flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition cursor-pointer no-underline whitespace-nowrap"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>
                  {releaseInfo.hasNewerVersion
                    ? (language === 'en' ? `Download Update (${releaseInfo.tagName})` : `नया APK अपडेट डाउनलोड करें (${releaseInfo.tagName})`)
                    : (language === 'en' ? 'Download Android APK (.apk)' : 'Android APK डाउनलोड करें (.apk)')}
                </span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={releaseInfo.releasePageUrl || getGitHubReleasesPageUrl(repo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] py-2 px-3 rounded-xl border border-amber-600/35 text-xs font-serif font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer no-underline whitespace-nowrap"
                  style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{language === 'en' ? 'Releases Page' : 'Releases पेज'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => loadRelease()}
                  className="min-h-[44px] py-2 px-3 rounded-xl border border-amber-600/35 text-xs font-serif font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap"
                  style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}
                >
                  <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{language === 'en' ? 'Check Updates' : 'अपडेट जांचें'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs font-serif space-y-1">
                <p className="font-bold flex items-center gap-1.5" style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}>
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {releaseInfo?.status === 'repo-not-found'
                      ? (language === 'en' ? 'Repository not accessible (check name or set to Public)' : 'रिपॉजिटरी नहीं मिली (नाम जांचें या रिपॉजिटरी Public रखें)')
                      : releaseInfo?.status === 'offline'
                      ? (language === 'en' ? 'Offline right now — connect to internet to fetch APK' : 'फ़िलहाल इंटरनेट बंद है — APK डाउनलोड के लिए ऑनलाइन आएं')
                      : (language === 'en' ? 'First APK build is pending or still running in GitHub Actions (~3-5 min)' : 'पहली APK अभी GitHub Actions में बन रही है या पुश की प्रतीक्षा में है (~3-5 मिनट)')}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getGitHubActionsPageUrl(repo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] py-2 px-3 rounded-xl border border-amber-600/35 text-xs font-serif font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer no-underline whitespace-nowrap"
                  style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{language === 'en' ? 'GitHub Actions' : 'बिल्ड स्थिति देखें'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => loadRelease()}
                  className="min-h-[44px] py-2 px-3 rounded-xl border border-amber-600/35 text-xs font-serif font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer whitespace-nowrap"
                  style={{ color: isDark ? '#FDE68A' : theme.sacredMaroon }}
                >
                  <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{language === 'en' ? 'Recheck Now' : 'पुनः जांचें'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
