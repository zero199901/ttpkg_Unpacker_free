/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/book-store/index.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/book-store/index.js", (function (exports, require, module, setTimeout, clearTimeout, document, Promise, c, clearInterval, utils, resolve, data, setInterval, reject, state, navigator, screen, location, event, history, success, window, callback, config, queryData, options, initialize, params, bindProps, response, token, status, formatData, getType, getter, result, jsonParse, createStore, store) {
  "use strict";
  var mutation = exports("../http/index.js");
  module.api_book_recommend_list = function (exports) {
    return mutation.get("/miniapp/v1/content/books/recommend", {
      preference_type: exports
    })
  }, module.api_books_hot_list = function (exports) {
    return mutation.get("/miniapp/v1/content/books/hot", {
      preference_type: exports
    })
  }, module.api_home_config = function () {
    return mutation.get("/miniapp/v1/content/home-config")
  }
}));
//# sourceMappingURL=index.js.map
