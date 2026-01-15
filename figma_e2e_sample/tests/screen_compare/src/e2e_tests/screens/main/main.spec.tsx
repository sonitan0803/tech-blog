import { test } from "@playwright/test";

// 1920x1080で http://localhost:4173/ のスクリーンショットを取得するテスト

test("トップページのスクリーンショット", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("http://localhost:5173/");
    await page.screenshot({
        path: "tests/screen_compare/result/design_compare/react/screens/main/Main.png",
        fullPage: true,
    });
});

test("Subボタンをクリックした後のスクリーンショット(ID:001-0001)", async ({
    page,
}) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("http://localhost:5173/");
    await page.screenshot({
        path: "tests/screen_compare/result/user_flows/screens/main/001_0001.png",
        fullPage: true,
    });
    await page.getByRole("button", { name: "Sub" }).click();
    await page.screenshot({
        path: "tests/screen_compare/result/user_flows/screens/main/001_0002.png",
        fullPage: true,
    });
});
