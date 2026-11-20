/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __APP_VERSION__: string;
declare const __APP_VERSION_CODE__: number;
declare const __GITHUB_REPO__: string;
declare const __BUILD_ID__: string;

interface ImportMetaEnv {
  readonly VITE_GITHUB_REPOSITORY?: string;
  readonly VITE_APP_VERSION?: string;
  readonly VITE_APP_VERSION_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
