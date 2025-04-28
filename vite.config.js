import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://your-backend.com', // رابط الـ backend الأساسي
        changeOrigin: true,
        secure: false, // ← لو كان HTTPS بشهادة محلية
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
});
