import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
    webServer: {
        command: "pnpm run build && pnpm run dev",
        url: "http://localhost:5173/",
        reuseExistingServer: !process.env.CI,
    },
    testDir: "./tests",
});
