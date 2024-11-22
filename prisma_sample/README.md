#　概要
Prisma を利用して Docker で構築した MySql にデータを書き込み・削除・参照の基本ができるように  
リポジトリを作成

## 初期設定

以下コマンドを実行

```
$ pnpm install
$ npx prisma init --datasource-provider mysql
$ npx prisma migrate dev --name init
$ docker-compose up -d --build
$ pnpm run dev
```

## 使用したパッケージ

```
@prisma/client
```
