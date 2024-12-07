import { expect, test, vi, afterEach, describe } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TestView from "../../view/test/test.view";

describe("UIテキスト", () => {
    afterEach(cleanup);

    test("H1ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h1のテスト
        expect(
            screen.getByRole("heading", { level: 1, name: "テストページ" })
        ).toBeDefined();
    });
    test("H2ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h2のテスト
        expect(
            screen.getByRole("heading", { level: 2, name: "ヘッダーテスト" })
        ).toBeDefined();
    });
    test("H3ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h3のテスト
        expect(
            screen.getByRole("heading", { level: 3, name: "ヘッダーテスト" })
        ).toBeDefined();
    });
    test("H4ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h4のテスト
        expect(
            screen.getByRole("heading", { level: 4, name: "ヘッダーテスト" })
        ).toBeDefined();
    });
    test("H5ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h5のテスト
        expect(
            screen.getByRole("heading", { level: 5, name: "ヘッダーテスト" })
        ).toBeDefined();
    });
    test("H6ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h6のテスト
        expect(
            screen.getByRole("heading", { level: 6, name: "ヘッダーテスト" })
        ).toBeDefined();
    });
    test("H2ヘッダー", () => {
        render(<TestView onClick={() => {}} />);
        // h2のテスト
        expect(
            screen.getByRole("heading", { level: 2, name: "ボタンテスト" })
        ).toBeDefined();
    });

    test("ボタンテキスト", () => {
        render(<TestView onClick={() => {}} />);
        expect(screen.getByRole("button", { name: "ボタンテスト" }).click());
    });
});

describe("ボタンの動作確認", () => {
    afterEach(cleanup);

    test("ボタンがクリックされるとログが出力される", () => {
        render(
            <TestView
                onClick={() => {
                    console.log("クリックされた");
                }}
            />
        );
        const consoleSpy = vi
            .spyOn(console, "log")
            .mockImplementation(() => {}); // Mock console.log
        const button = screen.getByRole("button", { name: "ボタンテスト" });

        fireEvent.click(button);

        expect(consoleSpy).toHaveBeenCalledWith("クリックされた");

        consoleSpy.mockRestore(); // Restore original console.log implementation
    });

    test("クリックするとonClick()が実行されること", async () => {
        const onClickMock = vi.fn(() => {});

        render(<TestView onClick={onClickMock} />);

        expect(onClickMock).toHaveBeenCalledTimes(0);

        const button = screen.getByRole("button");
        await fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
        await fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(2);
    });
});
