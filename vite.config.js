import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: "/ganeshreddy-web-portfolio/",
  // build: {
  //   outDir: 'dist',
  //   sourcemap: false
  // }
})
