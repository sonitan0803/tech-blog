import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginImport from "eslint-plugin-import"; // importを使用

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    // eslint-plugin-importの設定
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // 対象ファイル
        plugins: {
            import: eslintPluginImport, // プラグインをオブジェクトとして指定
        },
        rules: {
            // インポート順序のルール
            "import/order": [
                "error",
                {
                    groups: [
                        ["builtin", "external"], // Node.jsモジュールと外部パッケージ
                        ["internal"], // 内部モジュール
                        ["parent", "sibling"], // 親/兄弟モジュール
                        ["index"], // インデックスファイル
                    ],
                    "newlines-between": "always", // グループ間に必ず空行を追加
                    alphabetize: {
                        order: "asc", // アルファベット順でソート
                        caseInsensitive: true, // 大文字小文字を区別しない
                    },
                },
            ],
        },
    },
];

export default eslintConfig;
