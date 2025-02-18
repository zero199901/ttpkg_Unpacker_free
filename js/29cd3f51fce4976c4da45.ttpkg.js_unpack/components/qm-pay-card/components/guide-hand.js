/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-card/components/guide-hand.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-card/components/guide-hand.js", (function (module, require, exports, setInterval, setTimeout, navigator, document, Promise, c, clearTimeout, clearInterval, reject, data, location, resolve, screen, config, utils, window, state, event, history, callback, bindProps, success, response, token, N, user, queryData, result, options, initialize, params, status, formatData, getType, getter, jsonParse) {
  "use strict";
  var createStore = module("../../../common/vendor.js"),
    store = createStore.defineComponent({
      __name: "guide-hand",
      props: {
        handBottom: {
          type: Number,
          default: 0
        },
        handRight: {
          type: Number,
          default: 0
        },
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (module) {
        return function (require, exports) {
          return {
            setInterval: module.isDark ? "/static/pay/hand-dark.png" : "/static/pay/hand.png",
            state: module.handBottom + "rpx",
            c: module.handRight + "rpx"
          }
        }
      }
    }),
    mutation = createStore._export_sfc(store, [
      ["__scopeId", "data-history-9d811854"]
    ]);
  tt.createComponent(mutation)
}));
//# sourceMappingURL=guide-hand.js.map
