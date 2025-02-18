/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-empty/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("components/qm-empty/index.js", (function (module, exports, require, setTimeout, clearTimeout, clearInterval, document, Promise, setInterval, c, navigator, reject, resolve, data, config, window, callback, utils, state, bindProps, history, screen, location, success, options, response, formatData, event, handler, action, queryData, result, N, $, initialize, params, token, status, getType) {
  "use strict";
  var getter = module("../../common/vendor.js"),
    jsonParse = module("../../common/assets.js"),
    createStore = {
      __name: "index",
      props: {
        type: {
          type: Number,
          default: 1
        },
        tip: {
          type: String,
          default: "暂无数据"
        },
        isFixed: {
          type: Boolean,
          default: !0
        },
        showBtn: {
          type: Boolean,
          default: !1
        },
        btnText: {
          type: String,
          default: "重试"
        }
      },
      emits: ["btnClick"],
      setup: function (module, exports) {
        var require = exports.emit,
          setTimeout = module;
        return function (exports, clearTimeout) {
          return getter.exports({
            setInterval: jsonParse._imports_0$2,
            state: getter.module(1 === module.type ? setTimeout.tip : "网络异常，请重试"),
            c: 2 === module.type || module.showBtn
          }, 2 === module.type || module.showBtn ? {
            navigator: getter.module(module.btnText),
            exports: getter.setTimeout((function (module) {
              return require("btnClick")
            }))
          } : {}, {
            resolve: setTimeout.isFixed ? 1 : "",
            screen: setTimeout.isFixed ? "" : 1
          })
        }
      }
    },
    store = getter._export_sfc(createStore, [
      ["__scopeId", "data-history-b84f7c14"]
    ]);
  tt.createComponent(store)
}));
//# sourceMappingURL=index.js.map
