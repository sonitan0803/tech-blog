import pluginJs from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    {
        plugins: {
            import: eslintPluginImport, // eslint-plugin-import をオブジェクトとして指定
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    // {
    //     // JSX関連の無効化
    //     rules: {
    //         "react/jsx-uses-react": "off",
    //         "react/react-in-jsx-scope": "off",
    //         "no-empty-pattern": "off", // 空のオブジェクトパターンを許容
    //     },
    // },
    // {
    //     rules: {
    //         "no-console": "warn", // コンソールログをエラーとして扱う
    //     },
    // },
    {
        // インポート関連
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        ["builtin", "external"], // Node.jsモジュールと外部パッケージ
                        ["internal"], // 内部モジュール
                        ["parent", "sibling"], // 親/兄弟モジュール
                        ["type"],
                        ["index"], // インデックスファイル
                    ],
                    "newlines-between": "always", // グループ間に必ず空行を追加
                    alphabetize: {
                        order: "asc", // アルファベット順でソート
                        caseInsensitive: true, // 大文字小文字を区別しない
                    },
                    pathGroups: [
                        {
                            pattern: "features/**",
                            group: "internal",
                            position: "before",
                        },
                        {
                            pattern: "components/**",
                            group: "internal",
                            position: "before",
                        },
                        {
                            pattern: "hooks/**",
                            group: "internal",
                            position: "before",
                        },
                        {
                            pattern: "hooks/**",
                            group: "internal",
                            position: "before",
                        },
                        {
                            pattern: "types/**",
                            group: "type",
                            position: "before",
                        },
                    ],
                },
            ],
        },
    },
];
