/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-panel/components/panel-header.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-panel/components/panel-header.js", (function (exports, require, setInterval, module, c, setTimeout, clearTimeout, document, Promise, window, reject, navigator, resolve, history, utils, location, clearInterval, screen, config, data, state, event, response, result, success, params, user, action, callback, request, queryData, bindProps, handler, options, initialize, token, status, formatData, getType) {
  "use strict";
  var getter = exports("../../../common/vendor.js"),
    jsonParse = getter.defineComponent({
      __name: "panel-header",
      props: {
        firstRecharge: {
          type: Boolean,
          default: !1
        },
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        pageType: {
          type: String,
          default: ""
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (exports) {
        var require = exports,
          setInterval = getter.computed((function () {
            var exports;
            return "#0A0A0A" === (null == (exports = require.skinConfig) ? void 0 : exports.bgColor)
          })),
          module = getter.computed((function () {
            var exports = require.firstRecharge,
              setInterval = require.chapterInfo,
              module = require.pageType;
            return exports || 2 === setInterval.fiction_type && 1 === setInterval.paid_type || "purchase" === module ? "剩余内容需付费解锁" : "余额不足，请充值"
          })),
          c = getter.computed((function () {
            var exports, setInterval, module, c, setTimeout, clearTimeout, document, Promise = require.firstRecharge,
              window = require.chapterInfo;
            return "purchase" === require.pageType ? 2 === window.fiction_type && 1 === window.paid_type ? "账户余额：".concat(null == (exports = null == window ? void 0 : window.chapter_paid) ? void 0 : exports.coins_balance, "书币，解锁剩余内容需").concat(null == (setInterval = null == window ? void 0 : window.chapter_paid) ? void 0 : setInterval.chapter_price, "书币") : "账户余额：".concat(null == (module = null == window ? void 0 : window.chapter_paid) ? void 0 : module.coins_balance, "书币，解锁本章需").concat(null == (c = null == window ? void 0 : window.chapter_paid) ? void 0 : c.chapter_price, "书币") : 2 === window.fiction_type && 1 === window.paid_type ? "" : Promise ? "解锁本章需".concat(null == (setTimeout = null == window ? void 0 : window.chapter_paid) ? void 0 : setTimeout.chapter_price, "书币") : "账户余额：".concat(null == (clearTimeout = null == window ? void 0 : window.chapter_paid) ? void 0 : clearTimeout.coins_balance, "书币，解锁本章需").concat(null == (document = null == window ? void 0 : window.chapter_paid) ? void 0 : document.chapter_price, "书币")
          }));
        return function (require, setTimeout) {
          return getter.exports({
            setInterval: 2 === exports.chapterInfo.fiction_type
          }, 2 === exports.chapterInfo.fiction_type ? {
            state: "linear-gradient( 180deg, rgba(255,255,255,0) 0%, ".concat(exports.skinConfig.bgColor, " 100%)")
          } : {}, {
            c: getter.require(setInterval.value ? "line-dark" : ""),
            navigator: getter.module(module.value),
            exports: getter.require(setInterval.value ? "text-dark" : ""),
            resolve: getter.require(setInterval.value ? "line-dark" : ""),
            screen: c.value
          }, c.value ? {
            location: getter.module(c.value),
            clearTimeout: getter.require(setInterval.value ? "info-dark" : "")
          } : {})
        }
      }
    }),
    createStore = getter._export_sfc(jsonParse, [
      ["__scopeId", "data-history-b2367512"]
    ]);
  tt.createComponent(createStore)
}));
//# sourceMappingURL=panel-header.js.map
