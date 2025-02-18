/**
 * 反编译并格式化的 JS 文件
 * 原始文件: assets/ts/history.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("assets/ts/history.js", (function (exports, module, require, Promise, setTimeout, clearTimeout, c, reject, setInterval, clearInterval, resolve, navigator, location, screen, history, config, window, handler, document, event, data, callback, utils, state, success, queryData, status, options, initialize, params, bindProps, response, token, formatData, getType, getter, result, jsonParse, createStore) {
  "use strict";
  var store = exports("../../common/vendor.js"),
    mutation = "reading-books";
  require.update_book_store_queue = function (exports) {
    if (exports) {
      var module = function () {
        var exports = [];
        try {
          exports = store.index.getStorageSync(mutation) || []
        } catch (module) {
          exports = []
        }
        return exports
      }().filter((function (module) {
        return module !== exports
      }));
      return module.push(exports), module.length > 50 && function () {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((function (exports) {
            store.index.removeStorage({
              key: "queryData-reader-chapter-info-" + exports
            })
          }))
        }(module.splice(0, module.length - 50)),
        function (exports) {
          try {
            store.index.setStorageSync(mutation, exports)
          } catch (exports) {
            return !1
          }
          return !0
        }(module)
    }
  }
}));
//# sourceMappingURL=history.js.map
