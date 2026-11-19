import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.VITE_APP_VERSION || '1.0.0'),
      __APP_VERSION_CODE__: Number(process.env.VITE_APP_VERSION_CODE || 1),
      __GITHUB_REPO__: JSON.stringify(process.env.VITE_GITHUB_REPOSITORY || ''),
    },
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        useCredentials: true,
        manifest: false,
        includeAssets: [],
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,json,woff,woff2,webmanifest}'],
          globIgnores: ['**/.aistudio/**', '**/assets/aistudio/**', '**/standalone-codesandbox.html'],
          maximumFileSizeToCacheInBytes: 35 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          ignoreURLParametersMatching: [/.*/],
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [/^\/api/, /^\/__/],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ sameOrigin, request }) =>
                sameOrigin &&
                (request.destination === 'image' ||
                  request.destination === 'font' ||
                  /\.(?:png|jpg|jpeg|svg|gif|webp|ico|woff|woff2)$/i.test(request.url)),
              handler: 'CacheFirst',
              options: {
                cacheName: 'sahebworld-static-assets',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ sameOrigin, request }) =>
                sameOrigin &&
                (request.destination === 'script' || request.destination === 'style'),
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'sahebworld-app-shell',
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 60 * 60 * 24 * 14,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ sameOrigin, url }) => sameOrigin && url.pathname.startsWith('/api/config'),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'sahebworld-api-config',
                networkTimeoutSeconds: 2,
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: false,
        },
      }),
      {
        name: 'exclude-aistudio-artifacts',
        resolveId(source) {
          if (source.includes('.aistudio/') || source.includes('.aistudio\\')) {
            return { id: source, external: true };
          }
          return null;
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    build: {
      target: 'esnext',
      chunkSizeWarningLimit: 3000,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/motion/')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'vendor-icons';
            }
            if (id.includes('node_modules/firebase/') || id.includes('node_modules/@firebase/')) {
              return 'vendor-firebase';
            }
            if (id.includes('node_modules/echarts/') || id.includes('node_modules/recharts/') || id.includes('node_modules/d3-')) {
              return 'vendor-charts';
            }
            if (id.includes('node_modules/jspdf/') || id.includes('node_modules/html2canvas/')) {
              return 'vendor-pdf';
            }
            const batchMatch = id.match(/\/src\/data\/sakhisBatch(\d+)/);
            if (batchMatch) {
              const num = parseInt(batchMatch[1], 10);
              return num <= 20 ? 'sakhis-batches-1' : 'sakhis-batches-2';
            }
            if (
              id.includes('/src/data/sakhis') &&
              (id.includes('KoAng') ||
                id.includes('GyanGudri') ||
                id.includes('PrabhatSandhya') ||
                id.includes('Arjinama') ||
                id.includes('Aarti'))
            ) {
              return 'sakhis-angs';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : { ignored: ['**/.aistudio/**'] },
    },
  };
});
