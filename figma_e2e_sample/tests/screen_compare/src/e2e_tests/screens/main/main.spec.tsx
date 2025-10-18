import { test } from "@playwright/test";

// 1920x1080で http://localhost:4173/ のスクリーンショットを取得するテスト

test("トップページのスクリーンショット", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("http://localhost:4173/");
    await page.screenshot({
        path: "tests/screen_compare/img/react/Main.png",
        fullPage: true,
    });
});
