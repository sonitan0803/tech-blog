import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
    webServer: {
        command: "pnpm run build && pnpm run preview",
        url: "http://localhost:4173/",
        reuseExistingServer: !process.env.CI,
    },
    testDir: "./tests",
});
