import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: '/datawalker-site/',
})
// Наприклад, якщо репозиторій називається datawalker-site:
// base: '/datawalker-site/'