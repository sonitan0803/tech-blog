## 初期設定

install @prisma/client

npx prisma init --datasource-provider mysql
npx prisma migrate dev --name init
