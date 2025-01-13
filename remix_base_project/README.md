# 参考

[ESLint を v9 にアップデートして Flat Config に移行する](https://zenn.dev/hsato_workman/articles/728e1551ab8b36)

###

```
$ pnpm create @eslint/config@latest
$ pnpm install eslint-plugin-import --save-dev
```

```diff
+ import eslintPluginImport from "eslint-plugin-import";

+ {
+         plugins: {
+             import: eslintPluginImport, // eslint-plugin-import をオブジェクトとして指定
+         },
+     },
```
