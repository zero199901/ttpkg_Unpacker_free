/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-popup/index.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-popup/index.js", (function (exports, setTimeout, module, require, reject, Promise, setInterval, c, window, clearTimeout, document, clearInterval, navigator, resolve, data, history, screen, location, config, state, utils, event, callback, mutation, getter, success, response, validateData, processEvent, queryData, token, handler, options, params, bindProps, result, error, initialize, status) {
  "use strict";
  var formatData = exports("../../../../../common/vendor.js");
  Array || formatData.resolveComponent("uni-popup")(), Math;
  var getType = formatData.defineComponent({
      __name: "index",
      props: formatData.mergeModels({
        type: {
          default: "bottom"
        },
        controlHeight: {
          default: 200
        },
        contentStyle: {
          default: function () {
            return {
              background: "red"
            }
          }
        },
        isDark: {
          type: Boolean
        }
      }, {
        modelValue: {},
        modelModifiers: {}
      }),
      emits: formatData.mergeModels(["opened", "closed"], ["update:modelValue"]),
      setup: function (exports, setTimeout) {
        var module = setTimeout.emit,
          require = exports,
          reject = module,
          setInterval = formatData.ref(),
          c = formatData.useModel(exports, "modelValue"),
          window = function exports() {
            if (setInterval.value) return setInterval.value.open(), void Promise((function () {
              reject("opened")
            }), 300);
            Promise((function () {
              exports()
            }), 30)
          };
        c.value && window();
        var clearTimeout = function () {
          var exports;
          null == (exports = setInterval.value) || exports.close(), Promise((function () {
            document.value = {}, reject("closed")
          }), 300)
        };
        formatData.watch((function () {
          return c.value
        }), (function (exports) {
          exports ? window() : clearTimeout()
        }));
        var document = formatData.ref({}),
          clearInterval = 0,
          navigator = 0,
          resolve = function (exports) {
            exports.touches && (clearInterval = exports.touches[0].clientY, navigator = 0)
          },
          data = function (exports) {
            navigator = (navigator = exports.touches[0].clientY - clearInterval) < 0 ? 0 : navigator, document.value = {
              transform: "translateY(".concat(navigator, "px)")
            }
          },
          history = function (exports) {
            navigator > 100 ? clearTimeout() : document.value = {}
          };
        return function (exports, setTimeout) {
          return formatData.exports({
            setInterval: "bottom" === require.type && require.controlHeight
          }, "bottom" === require.type && require.controlHeight ? {
            state: exports.isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
            c: exports.controlHeight + "rpx",
            navigator: formatData.setTimeout(resolve),
            exports: formatData.setTimeout(data),
            resolve: formatData.setTimeout(history),
            screen: formatData.clearInterval(document.value),
            location: formatData.clearInterval(require.contentStyle)
          } : {}, {
            clearTimeout: formatData.sr(setInterval, "e9af1c21-0", {
              event: "refPopup"
            }),
            success: formatData.setTimeout(clearTimeout),
            event: formatData.document({
              type: require.type
            })
          })
        }
      }
    }),
    jsonParse = formatData._export_sfc(getType, [
      ["__scopeId", "data-history-e9af1c21"]
    ]);
  tt.createComponent(jsonParse)
}));
//# sourceMappingURL=index.js.map
