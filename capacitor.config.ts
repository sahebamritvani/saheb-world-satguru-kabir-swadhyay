import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sahebworld.satgurukabir',
  appName: 'Saheb World',
  webDir: 'dist',
  backgroundColor: '#FFFDD0',
  server: {
    androidScheme: 'https',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    backgroundColor: '#FFFDD0',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      launchAutoHide: true,
      backgroundColor: '#FFFDD0',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CENTER',
      showSpinner: false,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#8B4513',
    },
  },
};

export default config;
