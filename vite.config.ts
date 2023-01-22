import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        sourceMap: false,
        additionalData: `
            @import "./src/assets/scss/_fonts.scss";
            @import "./src/assets/scss/_mixins.scss";
        `,
      },
    },
  },
})
