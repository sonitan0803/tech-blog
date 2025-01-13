# Eslint 初期設定

以下のコマンドで初期設定をおこなう

```
$ pnpm create @eslint/config@latest
```

# プラグイン

## インポートの順番

### インストール

```
$ pnpm install eslint-plugin-import --save-dev
```

### eslint.config.js

```diff
+ import eslintPluginImport from "eslint-plugin-import";

+ {
+         plugins: {
+             import: eslintPluginImport, // eslint-plugin-import をオブジェクトとして指定
+         },
+     },
```

# 参考

[ESLint を v9 にアップデートして Flat Config に移行する](https://zenn.dev/hsato_workman/articles/728e1551ab8b36)
[公式](https://eslint.org/docs/latest/use/getting-started)
