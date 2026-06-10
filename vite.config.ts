import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // ⚙️ Automatically resolves TypeScript path mappings (e.g., @/components)
    tsconfigPaths(),
    
    // 🎨 The fast, native Tailwind v4 compiler plugin
    tailwindcss(),
    
    // ⚛️ Standard React compilation engine
    react(),
  ],
})