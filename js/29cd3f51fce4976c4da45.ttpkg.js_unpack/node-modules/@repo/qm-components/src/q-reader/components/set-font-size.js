/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/components/set-font-size.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size.js", (function (exports, require, setTimeout, Promise, module, c, reject, setInterval, resolve, navigator, clearTimeout, clearInterval, window, handler, data, history, document, initialize, config, utils, response, location, screen, state, success, event, queryData, user, action, callback, bindProps, status, getType, result, mutation, options, params, token, formatData) {
  "use strict";
  var getter = exports("../../../../../../common/vendor.js"),
    jsonParse = getter.defineComponent({
      __name: "set-font-size",
      setup: function (exports) {
        var require = getter.useStoreReader(),
          setTimeout = getter.throttle({
            interval: 300
          }, (function (exports) {
            var setTimeout = require.readerStyle.fontSize;
            "add" === exports && (setTimeout += 2), "cost" === exports && (setTimeout -= 2), setTimeout < 12 && (setTimeout = 12), setTimeout > 30 && (setTimeout = 30), require.setReaderStyle({
              fontSize: setTimeout
            }), require.actionEvents.onMenuClick("fontSize", setTimeout)
          })),
          Promise = getter.computed((function () {
            var exports = require.readerTheme;
            return {
              backgroundColor: exports.fontSizeBgColor,
              color: exports.color
            }
          }));
        return function (exports, module) {
          return {
            setInterval: getter.unref(require).readerTheme.colorGray,
            state: getter.clearInterval(Promise.value),
            c: 12 === getter.unref(require).readerStyle.fontSize ? 1 : "",
            navigator: getter.setTimeout((function (exports) {
              return getter.unref(setTimeout)("cost")
            })),
            exports: getter.module(getter.unref(require).readerStyle.fontSize),
            resolve: getter.clearInterval(Promise.value),
            screen: 30 === getter.unref(require).readerStyle.fontSize ? 1 : "",
            location: getter.setTimeout((function (exports) {
              return getter.unref(setTimeout)("add")
            }))
          }
        }
      }
    }),
    createStore = getter._export_sfc(jsonParse, [
      ["__scopeId", "data-history-3ce71cd1"]
    ]);
  tt.createComponent(createStore)
}));
//# sourceMappingURL=set-font-size.js.map
