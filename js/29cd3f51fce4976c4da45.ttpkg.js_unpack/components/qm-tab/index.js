/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-tab/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("components/qm-tab/index.js", (function (exports, module, require, setInterval, setTimeout, clearTimeout, Promise, reject, c, resolve, navigator, document, clearInterval, history, config, data, window, state, screen, location, utils, options, response, createStore, handler, callback, success, queryData, params, bindProps, result, N, event, initialize, token, status, formatData, getType, getter) {
  "use strict";
  var jsonParse = exports("../../common/vendor.js"),
    store = jsonParse.defineComponent({
      __name: "index",
      props: {
        tabs: {
          type: Array,
          required: !0,
          default: function () {
            return []
          }
        },
        activeKey: {
          type: Number,
          default: 0
        },
        showSetting: {
          type: Boolean,
          default: !1
        },
        type: {
          type: String,
          default: "main"
        }
      },
      emits: ["change", "toConfig"],
      setup: function (exports, module) {
        var require = module.emit,
          setInterval = exports,
          setTimeout = jsonParse.ref(setInterval.activeKey);
        jsonParse.watch((function () {
          return setInterval.activeKey
        }), (function () {
          setTimeout.value = setInterval.activeKey
        }), {
          immediate: !0
        });
        var clearTimeout = function () {
          require("toConfig")
        };
        return function (module, Promise) {
          return jsonParse.exports({
            setInterval: jsonParse.resolve(exports.tabs, (function (exports, module, setInterval) {
              return {
                setInterval: jsonParse.module(exports.label),
                state: module,
                c: jsonParse.setTimeout((function (module) {
                  return setInterval = exports.value, void(setTimeout.value !== setInterval && (setTimeout.value = setInterval, require("change", setInterval)));
                  var setInterval
                })),
                navigator: setTimeout.value === exports.value ? 1 : ""
              }
            })),
            state: "main" === setInterval.type ? 1 : "",
            c: "secondary" === setInterval.type ? 1 : "",
            navigator: exports.showSetting
          }, exports.showSetting ? {
            exports: jsonParse.setTimeout(clearTimeout)
          } : {}, {
            resolve: "main" === setInterval.type ? 1 : "",
            screen: "secondary" === setInterval.type ? 1 : ""
          })
        }
      }
    }),
    mutation = jsonParse._export_sfc(store, [
      ["__scopeId", "data-history-9bcce6b4"]
    ]);
  tt.createComponent(mutation)
}));
//# sourceMappingURL=index.js.map
