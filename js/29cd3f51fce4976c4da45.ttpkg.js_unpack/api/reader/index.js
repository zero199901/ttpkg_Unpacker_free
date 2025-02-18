/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/reader/index.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/reader/index.js", (function (exports, require, module, clearTimeout, Promise, setInterval, setTimeout, document, c, navigator, reject, utils, clearInterval, screen, data, resolve, history, location, state, event, window, success, callback, queryData, options, config, initialize, params, bindProps, response, token, status, formatData, getType, getter, result, jsonParse, createStore, store) {
  "use strict";
  var mutation = exports("../http/index.js");
  module.api_book_info = function (exports) {
    return mutation.get("/miniapp/v1/content/book/detail", exports)
  }, module.api_chapter_data = function (exports) {
    return mutation.get("/miniapp/v1/content/chapter/detail", exports)
  }, module.api_chapter_list = function (exports) {
    return mutation.get("/miniapp/v1/content/chapter/base-list", exports)
  }, module.api_get_chapter_end_recommend = function (exports) {
    return mutation.get("/miniapp/v1/content/book/chapter-end-recommend", exports)
  }, module.api_reading_record_list = function (exports) {
    return mutation.get("/miniapp/v1/user/book/reading-records", exports)
  }, module.api_update_reading_record = function (exports) {
    return mutation.post("/miniapp/v1/user/book/save-reading-record", exports)
  }
}));
//# sourceMappingURL=index.js.map
