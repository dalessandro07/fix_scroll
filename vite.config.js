import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy-assets'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: assetInfo => {
          if (assetInfo.facadeModuleId) {
            return 'assets/popup.js'
          }
        }
      }
    }
  },
  plugins: [
    copy({
      assets: ['images', 'manifest.json', 'background.js']
    })
  ]
})
