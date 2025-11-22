import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
base: '/cs3870__f/' // repo name between slashes
})