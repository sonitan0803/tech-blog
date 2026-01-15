import { test } from "@playwright/test";

// 1920x1080で http://localhost:4173/ のスクリーンショットを取得するテスト

test("サブのスクリーンショット", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("http://localhost:5173/");
    await page.screenshot({
        path: "tests/screen_compare/result/design_compare/react/screens/sub/Sub.png",
        fullPage: true,
    });
});
