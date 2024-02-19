const axios = require('axios');

/**
 * axiosをラップした簡易HTTPクライアント
 * @param {string} url - リクエストするURL
 * @param {object} [options={}] - カスタム設定オブジェクト
 * @param {object} [options.data={}] - リクエストボディ
 * @param {string} [options.method='post'] - HTTPメソッド
 * @param {object} [options.headers={}] - 追加のHTTPヘッダー
 * @returns {Promise} - レスポンスオブジェクト
 *
 * 利用例:
 * ```
 * // GETリクエスト
 * nanoAxios('https://example.com/api/data', { method: 'get' })
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 *
 * // POSTリクエスト、カスタムヘッダーとデータを含む
 * nanoAxios('https://example.com/api/post', {
 *   method: 'post',
 *   headers: {
 *     'X-Custom-Header': 'value'
 *   },
 *   data: {
 *     key: 'value'
 *   }
 * })
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
const nanoAxios = async(url, options = {}) => {
  // デフォルト設定
  const defaultConfig = {
    method: 'post',
    url: url,
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {},
  };

  // ユーザーからの設定をマージ
  const config = {
    // Spread構文でデフォルト設定を上書き
    ...defaultConfig,
    ...options,
    headers: {
      // Spread構文でデフォルトヘッダーを上書き
      ...defaultConfig.headers,
      ...options.headers,
    },
    data: JSON.stringify(options.data || {}),
  };

  try {
    // APIリクエストを実行し、レスポンスを直接返す
    const response = await axios.request(config);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = nanoAxios;
module.exports.default = nanoAxios;