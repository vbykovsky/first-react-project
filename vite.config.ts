import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve("./src/components"),
      "@containers": path.resolve("./src/containers"),
      "@services": path.resolve("./src/services"),
      "@ts": path.resolve("./src/ts"),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
