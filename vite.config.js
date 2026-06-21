import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const MFE_AUTH_URL =
  process.env.MFE_AUTH_URL || "http://localhost:4001/assets/remoteEntry.js";

const MFE_COMPETENCY_URL =
  process.env.MFE_COMPETENCY_URL || "http://localhost:4002/assets/remoteEntry.js";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        // O Shell consome os remoteEntry expostos pelos MFEs
        mfe_auth: MFE_AUTH_URL,
        mfe_competency: MFE_COMPETENCY_URL,
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
