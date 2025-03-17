
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "your-username" and "ACM-W" with your actual GitHub username and repo name
export default defineConfig({
  plugins: [react()],
  base: "/ACM-W/", // Ensure the correct repository name is set
});
