/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/components/set-background.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/components/set-background.js", (function (exports, require, Promise, setTimeout, module, setInterval, c, reject, clearInterval, navigator, clearTimeout, data, resolve, document, event, window, history, response, utils, state, screen, config, handler, location, success, queryData, user, action, callback, params, bindProps, status, getType, result, store, mutation, options, initialize, token) {
  "use strict";
  var formatData = exports("../../../../../../common/vendor.js"),
    getter = formatData.defineComponent({
      __name: "set-background",
      setup: function (exports) {
        var require = formatData.useStoreReader();
        return function (exports, Promise) {
          return {
            setInterval: formatData.unref(require).readerTheme.colorGray,
            state: formatData.resolve(formatData.unref(formatData.skinConfigList), (function (exports, Promise, setTimeout) {
              return formatData.exports({
                setInterval: "dark" === exports.name
              }, (exports.name, {}), {
                state: exports.name,
                c: exports.bgColor,
                navigator: formatData.unref(require).readerStyle.name === exports.name ? formatData.unref(require).readerTheme.skinActiveBorderColor : "",
                exports: formatData.setTimeout((function (Promise) {
                  return function (exports) {
                    require.setReaderStyle(exports), require.actionEvents.onMenuClick("skin", exports)
                  }(exports)
                }))
              })
            }))
          }
        }
      }
    }),
    jsonParse = formatData._export_sfc(getter, [
      ["__scopeId", "data-history-92150a92"]
    ]);
  tt.createComponent(jsonParse)
}));
//# sourceMappingURL=set-background.js.map
