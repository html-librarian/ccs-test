import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        sourceMap: false,
        additionalData: `
            @import "./src/assets/scss/_mixins.scss";
        `,
      },
    },
  },
})
