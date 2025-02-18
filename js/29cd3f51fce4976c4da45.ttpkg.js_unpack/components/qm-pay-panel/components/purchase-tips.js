/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-panel/components/purchase-tips.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-panel/components/purchase-tips.js", (function (require, setTimeout, exports, Promise, setInterval, module, clearTimeout, clearInterval, reject, c, document, navigator, resolve, window, data, event, history, utils, screen, response, token, state, options, result, success, callback, config, location, queryData, user, U, params, bindProps, getType, handler, action, initialize, status, formatData) {
  "use strict";
  var getter = require("../../../common/vendor.js"),
    jsonParse = require("../../../store/modules/global.js");
  Array || getter.resolveComponent("qm-icon")();
  var createStore = getter.defineComponent({
      __name: "purchase-tips",
      props: {
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (require) {
        var setTimeout = getter.ref(!1),
          exports = jsonParse.useGlobalStore(),
          Promise = {
            user: "/pages/window/index?url=".concat(encodeURIComponent(exports.appConfigInfo.user_agreement)),
            coin: "/pages/window/index?url=".concat(encodeURIComponent(exports.appConfigInfo.coin_buy_url))
          };

        function setInterval(require) {
          getter.index.navigateTo({
            url: require
          })
        }

        function module() {
          setTimeout.value = !setTimeout.value
        }
        return function (exports, clearTimeout) {
          return getter.exports({
            setInterval: getter.require(require.isDark ? "title-dark" : ""),
            state: getter.setTimeout(module),
            c: setTimeout.value
          }, setTimeout.value ? {
            navigator: getter.require(require.isDark ? "module-dark" : ""),
            exports: getter.setTimeout((function (require) {
              return setInterval(Promise.user)
            })),
            resolve: getter.setTimeout((function (require) {
              return setInterval(Promise.coin)
            })),
            screen: getter.require(require.isDark ? "wrap-dark" : ""),
            location: getter.require(require.isDark ? "mask-dark" : ""),
            clearTimeout: getter.require(require.isDark ? "footer-dark" : ""),
            success: getter.setTimeout(module),
            event: getter.require(require.isDark ? "con-dark" : ""),
            window: getter.setTimeout((function () {})),
            data: getter.setTimeout((function () {}))
          } : {})
        }
      }
    }),
    store = getter._export_sfc(createStore, [
      ["__scopeId", "data-history-29b4a449"]
    ]);
  tt.createComponent(store)
}));
//# sourceMappingURL=purchase-tips.js.map
