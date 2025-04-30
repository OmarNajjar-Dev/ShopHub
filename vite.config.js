import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";

export default ({ mode }) => {
  const env = loadEnv(mode, import.meta.env.cwd(), "");
  import.meta.env = { ...import.meta.env, ...env };

  return defineConfig({
    plugins: [react(), tailwindcss(), compress()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
