import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    server: {
      deps: {
        inline: ["next-auth"],
      },
    },
    coverage: {
      provider: "v8",
      exclude: [
        "**/.next/**",
        "*.d.ts",
        "postcss.config.js",
        "next.config.mjs",
        "tailwind.config.ts",
        "lib/user/auth.config.ts",
        "lib/prisma.ts",
        "prisma/*",
      ],
    },
  },
});
