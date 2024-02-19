# nanoAxios

nanoAxiosは、axiosをラップした簡易的なHTTPクライアントです。簡単なAPIリクエストを行いたい時に便利な機能を提供します。

## 特徴

- axiosに基づいたシンプルなAPIリクエスト実行
- デフォルトでJSONを扱う設定済み
- カスタム設定可能（HTTPメソッド、ヘッダー、データ等）

## インストール

npmを使用してインストール:

```
npm install nano-axios
```


## 使い方


```javascript
const nanoAxios = require('nano-axios');

// 基本的なGETリクエスト:
nanoAxios('https://example.com/api/data', { method: 'get' })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// POSTリクエスト、カスタムヘッダーとデータを含む:
nanoAxios('https://example.com/api/post', {
  method: 'post',
  headers: {
    'X-Custom-Header': 'value'
  },
  data: {
    key: 'value'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

## オプション

`nanoAxios`関数は、第二引数にオプションオブジェクトを受け取ります。以下のプロパティを設定できます:

- `method`: HTTPメソッド（デフォルトは'post'）
- `headers`: 追加のHTTPヘッダー
- `data`: リクエストボディ

## 注意点

このライブラリはaxiosの簡易ラッパーであり、axiosが提供する全ての機能をカバーしているわけではありません。
エラーハンドリングは`.catch`を使用して行ってください。

## ライセンス

このライブラリはMITライセンスの下で公開されています。


# nanoAxios
**Note that this is by machine translation, so be careful about accuracy!**

nanoAxios is a simple HTTP client wrapped in axios. It provides convenient functions when you want to make simple API requests.

## Features

- Simple API request execution based on axios
- Pre-configured to handle JSON by default
- Custom configurable (HTTP methods, headers, data, etc.)

## Installation

Install using npm:.

```
npm install nano-axios
```


## Usage


```javascript
const nanoAxios = require('nano-axios');

// Basic GET request:.
nanoAxios('https://example.com/api/data', { method: 'get' })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// POST request, including custom headers and data:.
nanoAxios('https://example.com/api/post', {
  method: 'post', {
  headers: {
    'X-Custom-Header': 'value'
  }, }
  data: {
    key: 'value'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));)
```

## options

The `nanoAxios` function takes an options object as its second argument. The following properties can be set: `method`: HTTP method

- `method`: HTTP method ('post' by default)
- `headers`: Additional HTTP headers.
- `data`: request body

## Notes

This library is a simple wrapper for axios and does not cover all features provided by axios.
Error handling should be done using `.catch`.

## License

This library is released under the MIT License.