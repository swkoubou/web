// 参考: https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
const express = require('express')
const path = require('path');

// アプリを生成
const app = express()
// ポート設定
const port = process.env.PORT || 8080;

// 静的なファイル提供用ディレクトリを設定
app.use(express.static(path.join(__dirname, 'public')))

// ルーティング
// topページ
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})
// membersページ
app.get('/members', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages/members.html'));
})
// projectページ
app.get('/project', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages/project.html'));
})


// アプリ起動
console.log("listening: http://127.0.0.1:%d", port);
app.listen(port)

