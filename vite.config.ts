import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base = repo name on GitHub Pages (https://<user>.github.io/<repo>/).
// Change REPO_NAME if the repository is renamed. Use '/' for a user site.
const REPO_NAME = 'E-portfolio'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? `/${REPO_NAME}/` : '/',
})
