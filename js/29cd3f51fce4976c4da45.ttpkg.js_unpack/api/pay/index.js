/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/pay/index.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/pay/index.js", (function (module, setInterval, require, exports, document, reject, clearTimeout, clearInterval, Promise, setTimeout, utils, c, config, resolve, screen, state, window, history, location, data, navigator, success, callback, event, queryData, options, initialize, params, bindProps, response, token, status, formatData, getType, getter, result, jsonParse, createStore, store) {
  "use strict";
  var mutation = module("../http/index.js");
  require.api_asset_pay = function (module, setInterval) {
    return mutation.post("/miniapp/v1/asset/pay", module, setInterval)
  }, require.api_asset_pay_sync_result = function (module) {
    return mutation.post("/miniapp/v1/asset/pay-result", module)
  }, require.api_config_recharge_panel = function (module) {
    return mutation.get("/miniapp/v1/configure/recharge-panel", module)
  }, require.api_content_chapter_buy = function (module) {
    return mutation.post("/miniapp/v1/content/chapter/buy", module)
  }, require.api_get_auto_buy_status = function () {
    return mutation.get("/miniapp/v1/user/auto-buy-status/global")
  }, require.api_set_auto_buy_status = function (module) {
    return mutation.post("/miniapp/v1/user/auto-buy-status/global/change", module)
  }
}));
//# sourceMappingURL=index.js.map
