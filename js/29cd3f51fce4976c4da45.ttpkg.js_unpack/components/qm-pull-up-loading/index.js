/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pull-up-loading/index.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pull-up-loading/index.js", (function (module, exports, require, setTimeout, clearInterval, Promise, document, setInterval, c, clearTimeout, data, reject, navigator, resolve, utils, callback, window, history, success, state, screen, response, queryData, config, result, handler, $, location, event, options, initialize, params, bindProps, token, status, formatData, getType, getter, jsonParse) {
  "use strict";
  var createStore = module("../../common/vendor.js"),
    store = module("../../common/assets.js"),
    mutation = createStore.defineComponent({
      __name: "index",
      props: {
        text: {
          type: String,
          default: "加载中..."
        }
      },
      setup: function (module) {
        var exports = module;
        return function (module, require) {
          return createStore.exports({
            setInterval: store._imports_0$4,
            state: exports.text
          }, exports.text ? {
            c: createStore.module(exports.text)
          } : {})
        }
      }
    }),
    N = createStore._export_sfc(mutation, [
      ["__scopeId", "data-history-2be1f78a"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=index.js.map
