# Web
公式webサイトを目指していますが, 現状非公式です.  
expressを使用しています.

## 構造
- app: サイトを構成する要素が入っています.
  - public: 静的なファイル群が入っています.
  - pages: 各ページのhtmlが入っています.

## 編集
- デザインを追加する場合  
public/cssなどを編集してください
- ページ追加  
pagesに新しいhtmlファイルを追加し, server.jsにルーティング設定を追加してください.


## 起動方法
```shell
# コンテナを使う場合
$ docker build . -t swk_web
$ docker run -p 8080:8080 swk_web
```

```shell
# npmが使用可能な場合
$ npm install
$ npm start
```
