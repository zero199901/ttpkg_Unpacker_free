/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-book-card/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("components/qm-book-card/index.js", (function (exports, setTimeout, module, Promise, require, setInterval, clearTimeout, c, document, event, reject, clearInterval, state, navigator, resolve, window, history, data, config, token, location, callback, screen, action, utils, N, handler, success, queryData, response, initialize, bindProps, watchChanges, getter, result, mutation, $, options, params) {
  "use strict";
  var status = exports("../../common/vendor.js"),
    formatData = "渺渺故事会";
  Math || getType();
  var getType = function () {
      return "../../node-modules/@repo/qm-components/src/queryData-theme-overlay/index.js"
    },
    jsonParse = status.defineComponent({
      __name: "index",
      props: {
        bookCover: {
          type: String,
          default: ""
        },
        bookName: {
          type: String,
          default: ""
        },
        bookDesc: {
          type: String,
          default: ""
        },
        bookBottomText: {
          type: String,
          default: ""
        },
        bookType: {
          type: String,
          default: "horizontal"
        },
        coverWidth: {
          type: Number,
          default: 143
        },
        coverHeight: {
          type: Number,
          default: 192
        },
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (exports) {
        var setTimeout = formatData,
          module = status.ref(!1),
          Promise = exports,
          require = function () {
            status.nextTick$1((function () {
              module.value = !0
            }))
          };
        return function (setInterval, clearTimeout) {
          return status.exports({
            setInterval: !module.value
          }, module.value ? {} : {
            state: status.module(status.unref(setTimeout))
          }, {
            c: Promise.bookCover,
            navigator: status.setTimeout(require),
            exports: module.value,
            resolve: status.document({
              isDark: exports.isDark
            }),
            screen: Promise.coverWidth + "rpx",
            location: Promise.coverHeight + "rpx",
            clearTimeout: "vertical" === Promise.bookType
          }, "vertical" === Promise.bookType ? {
            success: status.module(Promise.bookName)
          } : {}, {
            event: Promise.coverWidth + "rpx",
            window: "horizontal" === Promise.bookType
          }, "horizontal" === Promise.bookType ? status.exports({
            data: status.module(Promise.bookName),
            require: Promise.bookDesc ? "" : 1,
            setTimeout: Promise.bookDesc ? 1 : "",
            document: exports.isDark ? 1 : "",
            queryData: Promise.bookDesc
          }, Promise.bookDesc ? {
            Promise: status.module(Promise.bookDesc),
            clearInterval: exports.isDark ? 1 : ""
          } : {}, {
            module: status.module(Promise.bookBottomText),
            history: exports.isDark ? 1 : ""
          }) : {})
        }
      }
    }),
    createStore = status._export_sfc(jsonParse, [
      ["__scopeId", "data-history-fbcfa562"]
    ]);
  tt.createComponent(createStore)
}));
//# sourceMappingURL=index.js.map
