/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/user/index.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/user/index.js", (function (require, clearTimeout, document, setTimeout, module, exports, setInterval, c, reject, resolve, Promise, clearInterval, screen, utils, navigator, history, data, params, response, success, window, callback, location, config, state, event, queryData, options, initialize, bindProps, token, status, formatData, getType, getter, result, jsonParse, createStore, store) {
  "use strict";
  var mutation = require("../http/index.js");
  document.api_config_info = function () {
    return mutation.get("/miniapp/v1/initial/config", {}, {
      noAppConfig: !0
    })
  }, document.api_login = function (require) {
    return mutation.post("/miniapp/v1/account/active", {
      code: require
    }, {
      noAppConfig: !0
    })
  }, document.api_update_system_info = function (require) {
    return mutation.post("/miniapp/v1/account/update-device", require, {
      noAppConfig: !0
    })
  }, document.api_user_info = function () {
    return mutation.get("/miniapp/v1/account/me", {}, {
      noAppConfig: !0
    })
  }
}));
//# sourceMappingURL=index.js.map
