import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        environment: "jsdom",
        reporters: ["html"],
        coverage: {
            exclude: [
                "./next.config.ts",
                ".next",
                "./vitest.config.mts",
                "./src/app/layout.tsx",
                "./src/app/**",
            ],
        },
    },
});
