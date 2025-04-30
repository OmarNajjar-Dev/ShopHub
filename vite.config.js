import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const defineEnv = {};
  for (const key of Object.keys(env)) {
    defineEnv[`process.env.${key}`] = JSON.stringify(env[key]);
  }

  return defineConfig({
    plugins: [react(), tailwindcss(), compress()],
    define: defineEnv,
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
