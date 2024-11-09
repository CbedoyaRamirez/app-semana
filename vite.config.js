import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "https://cbedoyaramirez.github.io/app-semana/",
  plugins: [react()],
})
