import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "همیار فنی",
        short_name: "همیار فنی",
        description: "A React PWA built with Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/HamyarF192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/HamyarF512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
