# 参考: https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

FROM node:18

# コンテナにアプリ用のディレクトリを作成する
WORKDIR /usr/src/app

# 実行に必要な依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションの本体ファイル群をコピー
COPY . .

# 8080ポートを使うよ宣言
EXPOSE 8080

# 起動!
CMD ["node", "./app/server.js"]