import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: 'https://api.training.acc.theburo.nl',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api(?=\/|$)/, ''),
          headers: {
            'X-Api-Secret': env.API_SECRET,
            'X-Sandbox': env.API_SANDBOX,
          },
        },
      },
    },
  }
})