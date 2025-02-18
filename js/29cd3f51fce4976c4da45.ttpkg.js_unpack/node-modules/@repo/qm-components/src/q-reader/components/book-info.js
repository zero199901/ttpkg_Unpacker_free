/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/components/book-info.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/components/book-info.js", (function (exports, Promise, setTimeout, require, module, setInterval, reject, clearTimeout, clearInterval, c, navigator, resolve, data, window, document, history, utils, event, location, state, success, screen, config, response, queryData, callback, handler, token, result, action, bindProps, getType, mutation, user, $, options, initialize, params, status) {
  "use strict";
  var formatData = exports("../../../../../../common/vendor.js"),
    getter = exports("../../../../../../common/assets.js");
  Math || (jsonParse + createStore)();
  var jsonParse = function () {
      return "../../queryData-image/index.js"
    },
    createStore = function () {
      return "../../queryData-theme-overlay/index.js"
    },
    store = formatData.defineComponent({
      __name: "book-info",
      setup: function (exports) {
        var Promise = formatData.useStoreReader(),
          setTimeout = Promise.bookInfo,
          require = formatData.computed((function () {
            var exports = Promise.readerTheme,
              setTimeout = exports.bgColor,
              require = exports.color,
              module = exports.divideColor;
            return {
              backgroundColor: setTimeout,
              color: require,
              borderBottom: "1px solid ".concat(module)
            }
          })),
          module = formatData.computed((function () {
            return {
              color: Promise.readerTheme.colorDarkerGray
            }
          }));
        return function (exports, setInterval) {
          return formatData.exports({
            setInterval: formatData.clearInterval("dark" === formatData.unref(Promise).readerStyle.name),
            state: formatData.document({
              src: formatData.unref(setTimeout).image_link
            }),
            c: formatData.document({
              isDark: "dark" === formatData.unref(Promise).readerStyle.name
            }),
            navigator: formatData.module(formatData.unref(setTimeout).title),
            exports: formatData.require(formatData.unref(setTimeout).author ? "ellipsis-clamp-1" : "ellipsis-clamp-2"),
            resolve: formatData.module(formatData.unref(setTimeout).author),
            screen: formatData.clearInterval(module.value),
            location: "1" === formatData.unref(setTimeout).is_vip
          }, "1" === formatData.unref(setTimeout).is_vip ? {
            clearTimeout: getter._imports_0$5
          } : {}, {
            success: formatData.document({
              isDark: "dark" === formatData.unref(Promise).readerStyle.name
            }),
            event: formatData.unref(setTimeout).is_over
          }, formatData.unref(setTimeout).is_over ? {
            window: formatData.module("1" === formatData.unref(setTimeout).is_over ? "已完结" : "更新中"),
            data: formatData.module(formatData.unref(setTimeout).total_chapter_num),
            require: formatData.clearInterval(module.value)
          } : {}, {
            setTimeout: formatData.clearInterval(require.value)
          })
        }
      }
    }),
    N = formatData._export_sfc(store, [
      ["__scopeId", "data-history-af4da369"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=book-info.js.map
