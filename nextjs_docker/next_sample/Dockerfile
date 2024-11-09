FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# pnpm install
RUN npm install -g pnpm

# コード全体を /app にコピー
COPY ./next_sample /app

# 依存関係をインストール
RUN pnpm install

# ビルド
RUN pnpm run build

# ポート開放
EXPOSE 3000

# 起動
CMD [ "pnpm", "start" ]