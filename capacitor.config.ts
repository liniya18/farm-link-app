import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.farmlink.app',
  appName: 'FarmLink',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
