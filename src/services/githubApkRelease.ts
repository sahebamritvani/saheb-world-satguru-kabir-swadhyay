export const CURRENT_APP_VERSION: string =
  typeof __APP_VERSION__ !== 'undefined' && __APP_VERSION__ ? __APP_VERSION__ : '1.0.0';

export const CURRENT_APP_VERSION_CODE: number =
  typeof __APP_VERSION_CODE__ !== 'undefined' && Number.isFinite(__APP_VERSION_CODE__)
    ? __APP_VERSION_CODE__
    : 1;

export const BUILTIN_GITHUB_REPO: string =
  typeof __GITHUB_REPO__ !== 'undefined' && __GITHUB_REPO__ ? __GITHUB_REPO__ : '';

const STORAGE_REPO_KEY = 'sahebworld_github_repo';
const STORAGE_RELEASE_CACHE_KEY = 'sahebworld_github_release_cache';

export type GitHubReleaseStatus =
  | 'ready'
  | 'no-releases-yet'
  | 'repo-not-found'
  | 'rate-limited'
  | 'offline'
  | 'unconfigured';

export interface GitHubApkReleaseInfo {
  status: GitHubReleaseStatus;
  repo: string;
  tagName?: string;
  versionName?: string;
  apkDownloadUrl?: string;
  apkFileName?: string;
  apkSizeBytes?: number;
  publishedAt?: string;
  releasePageUrl?: string;
  actionsPageUrl?: string;
  hasNewerVersion?: boolean;
  fromCache?: boolean;
}

/**
 * Extracts a clean "owner/repo" slug from a GitHub URL or shorthand string.
 */
export function parseGitHubRepoSlug(rawInput: string): string | null {
  const trimmed = (rawInput || '').trim();
  if (!trimmed) return null;

  const cleaned = trimmed
    .replace(/^https?:\/\/(www\.)?github\.com\//i, '')
    .replace(/^github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/^\/+|\/+$/g, '');

  const parts = cleaned.split('/').filter(Boolean);
  if (parts.length < 2) return null;

  const owner = parts[0];
  const repo = parts[1];
  if (!/^[a-zA-Z0-9_.-]+$/.test(owner) || !/^[a-zA-Z0-9_.-]+$/.test(repo)) {
    return null;
  }
  return `${owner}/${repo}`;
}

export function getConfiguredGitHubRepo(): string {
  try {
    const saved = localStorage.getItem(STORAGE_REPO_KEY);
    if (saved) {
      const parsed = parseGitHubRepoSlug(saved);
      if (parsed) return parsed;
    }
  } catch {
    // ignore storage restriction
  }
  const builtIn = parseGitHubRepoSlug(BUILTIN_GITHUB_REPO);
  return builtIn || 'sahebamritvani/saheb-world-satguru-kabir-swadhyay';
}

export function saveConfiguredGitHubRepo(rawInput: string): string | null {
  const parsed = parseGitHubRepoSlug(rawInput);
  try {
    if (parsed) {
      localStorage.setItem(STORAGE_REPO_KEY, parsed);
    } else if (!rawInput.trim()) {
      localStorage.removeItem(STORAGE_REPO_KEY);
    }
  } catch {
    // ignore storage restriction
  }
  return parsed;
}

export function getRollingApkDownloadUrl(repo: string): string {
  return `https://github.com/${repo}/releases/latest/download/Saheb-World.apk`;
}

export function getGitHubReleasesPageUrl(repo: string): string {
  return `https://github.com/${repo}/releases`;
}

export function getGitHubActionsPageUrl(repo: string): string {
  return `https://github.com/${repo}/actions`;
}

export function compareVersionStrings(latest: string, current: string): number {
  const clean = (v: string) =>
    v
      .replace(/^v/i, '')
      .split('.')
      .map((n) => Number.parseInt(n.replace(/[^\d]/g, ''), 10) || 0);

  const a = clean(latest);
  const b = clean(current);
  const maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    const av = a[i] || 0;
    const bv = b[i] || 0;
    if (av > bv) return 1;
    if (av < bv) return -1;
  }
  return 0;
}

function readCachedRelease(repo: string): GitHubApkReleaseInfo | null {
  try {
    const raw = localStorage.getItem(STORAGE_RELEASE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GitHubApkReleaseInfo;
    if (parsed?.repo === repo && parsed?.apkDownloadUrl) {
      return { ...parsed, fromCache: true };
    }
  } catch {
    // ignore invalid cache
  }
  return null;
}

function writeCachedRelease(info: GitHubApkReleaseInfo): void {
  try {
    if (info.status === 'ready' && info.apkDownloadUrl) {
      localStorage.setItem(STORAGE_RELEASE_CACHE_KEY, JSON.stringify(info));
    }
  } catch {
    // ignore quota error
  }
}

export async function fetchLatestGitHubApkRelease(
  repoOverride?: string
): Promise<GitHubApkReleaseInfo> {
  const repo = parseGitHubRepoSlug(repoOverride || getConfiguredGitHubRepo());
  if (!repo) {
    return { status: 'unconfigured', repo: '' };
  }

  const releasePageUrl = getGitHubReleasesPageUrl(repo);
  const actionsPageUrl = getGitHubActionsPageUrl(repo);

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    const cached = readCachedRelease(repo);
    if (cached) return cached;
    return {
      status: 'offline',
      repo,
      releasePageUrl,
      actionsPageUrl,
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    });

    if (res.status === 403 || res.status === 429) {
      const cached = readCachedRelease(repo);
      if (cached) return cached;
      return { status: 'rate-limited', repo, releasePageUrl, actionsPageUrl };
    }

    if (res.status === 404) {
      // Distinguish between missing repository vs repository without published release yet
      try {
        const repoRes = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (repoRes.status === 404) {
          return { status: 'repo-not-found', repo, releasePageUrl, actionsPageUrl };
        }
      } catch {
        // ignore subcheck error
      }
      return { status: 'no-releases-yet', repo, releasePageUrl, actionsPageUrl };
    }

    if (!res.ok) {
      const cached = readCachedRelease(repo);
      if (cached) return cached;
      return { status: 'no-releases-yet', repo, releasePageUrl, actionsPageUrl };
    }

    const data = await res.json();
    const assets = Array.isArray(data?.assets) ? data.assets : [];
    const apkAsset =
      assets.find((a: any) => String(a?.name || '').toLowerCase() === 'saheb-world.apk') ||
      assets.find((a: any) => String(a?.name || '').toLowerCase().endsWith('.apk'));

    const tagName = String(data?.tag_name || '').trim() || `v${CURRENT_APP_VERSION}`;
    const versionName = tagName.replace(/^v/i, '');
    const apkDownloadUrl = apkAsset?.browser_download_url || getRollingApkDownloadUrl(repo);
    const hasNewerVersion = compareVersionStrings(versionName, CURRENT_APP_VERSION) > 0;

    const result: GitHubApkReleaseInfo = {
      status: apkAsset ? 'ready' : 'no-releases-yet',
      repo,
      tagName,
      versionName,
      apkDownloadUrl,
      apkFileName: apkAsset?.name || 'Saheb-World.apk',
      apkSizeBytes: typeof apkAsset?.size === 'number' ? apkAsset.size : undefined,
      publishedAt: data?.published_at || data?.created_at,
      releasePageUrl: data?.html_url || releasePageUrl,
      actionsPageUrl,
      hasNewerVersion,
    };

    writeCachedRelease(result);
    return result;
  } catch {
    const cached = readCachedRelease(repo);
    if (cached) return cached;
    return { status: 'offline', repo, releasePageUrl, actionsPageUrl };
  } finally {
    clearTimeout(timeout);
  }
}

export function formatApkSizeMb(bytes?: number): string {
  if (!bytes || !Number.isFinite(bytes) || bytes <= 0) return '';
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
