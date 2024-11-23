import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../../app/client_page/page";

render(<Page />);

test("H1ヘッダー", () => {
    // h1のテスト
    expect(
        screen.getByRole("heading", { level: 1, name: "テストページ" })
    ).toBeDefined();
    // h2のテスト
    expect(
        screen.getByRole("heading", { level: 2, name: "ヘッダーテスト" })
    ).toBeDefined();
    // h3のテスト
    expect(
        screen.getByRole("heading", { level: 3, name: "ヘッダーテスト" })
    ).toBeDefined();
    // h4のテスト
    expect(
        screen.getByRole("heading", { level: 4, name: "ヘッダーテスト" })
    ).toBeDefined();
    // h5のテスト
    expect(
        screen.getByRole("heading", { level: 5, name: "ヘッダーテスト" })
    ).toBeDefined();
    // h6のテスト
    expect(
        screen.getByRole("heading", { level: 6, name: "ヘッダーテスト" })
    ).toBeDefined();

    // h2のテスト
    expect(
        screen.getByRole("heading", { level: 2, name: "ボタンテスト" })
    ).toBeDefined();

    // ボタンのテスト
    expect(screen.getByRole("button", { name: "ボタンテスト" }).click());
});

test("H2ヘッダー", () => {
    expect(
        screen.getByRole("heading", { level: 2, name: "ボタンテスト" })
    ).toBeDefined();
});

test("ボタンがクリックされるとログが出力される", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {}); // Mock console.log
    const button = screen.getByRole("button", { name: "ボタンテスト" });

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("クリックされた");

    consoleSpy.mockRestore(); // Restore original console.log implementation
});
