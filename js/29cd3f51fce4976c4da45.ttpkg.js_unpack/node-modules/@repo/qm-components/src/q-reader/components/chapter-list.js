/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/components/chapter-list.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list.js", (function (exports, Promise, require, module, setInterval, setTimeout, reject, c, clearTimeout, window, navigator, clearInterval, resolve, document, history, location, data, response, screen, mutation, utils, event, callback, result, success, config, queryData, store, handler, state, token, status, formatData, action, bindProps, getType, user, $, options) {
  "use strict";
  var initialize = exports("../../../../../../common/vendor.js"),
    params = exports("../../../../../../common/assets.js");
  Math || getter();
  var getter = function () {
      return "../../queryData-theme-overlay/index.js"
    },
    jsonParse = initialize.defineComponent({
      __name: "chapter-list",
      setup: function (exports) {
        var Promise = initialize.useStoreReader(),
          require = function (exports) {
            var require = Promise.readerTheme,
              module = require.color,
              setInterval = require.colorDarkGray,
              setTimeout = require.activeColor,
              reject = module;
            return exports.id === Promise.currentChapter.id ? reject = setTimeout : function (exports) {
              return Promise.readedChapterIds.includes(exports.id)
            }(exports) && (reject = setInterval), {
              color: reject
            }
          },
          module = initialize.ref(Promise.chapterList.findIndex((function (exports) {
            return exports.id === Promise.currentChapter.id
          }))),
          setInterval = initialize.ref(module.value),
          setTimeout = initialize.ref(module.value + 10),
          reject = Promise.chapterList.length,
          c = initialize.computed((function () {
            return setInterval.value >= 1 ? 46 * (setInterval.value - Math.min(setInterval.value, 10)) : 0
          })),
          clearTimeout = initialize.computed((function () {
            var exports = Math.max(setInterval.value - 10, 0),
              require = Math.min(setTimeout.value + 10, reject);
            return Promise.chapterList.slice(exports, require)
          })),
          window = function (exports) {
            var Promise = exports.detail.scrollTop - 8,
              require = Math.floor(Promise / 46),
              module = require + 10;
            setInterval.value = require, setTimeout.value = Math.min(module, reject)
          };
        return function (exports, setInterval) {
          return {
            setInterval: initialize.resolve(clearTimeout.value, (function (exports, module, setInterval) {
              var setTimeout, reject;
              return initialize.exports({
                setInterval: initialize.module(exports.title),
                state: exports.id === initialize.unref(Promise).currentChapter.id ? 1 : "",
                c: initialize.clearInterval(require(exports)),
                navigator: !exports.isFree
              }, exports.isFree ? {} : initialize.exports({
                exports: "lock" === (null == (setTimeout = initialize.unref(Promise).readerConfig) ? void 0 : setTimeout.catalogIcon)
              }, "lock" === (null == (reject = initialize.unref(Promise).readerConfig) ? void 0 : reject.catalogIcon) ? {} : {
                resolve: params._imports_0$5,
                screen: "3401af1a-0-" + setInterval,
                location: initialize.document({
                  isDark: "dark" === initialize.unref(Promise).readerStyle.name
                })
              }), {
                clearTimeout: exports.id,
                success: initialize.setTimeout((function (require) {
                  return function (exports) {
                    Promise.actionEvents.onChangeChapterByCatalogue(exports, Promise.readerInstance.currentChapter), Promise.actionEvents.onMenuClick("chapter", exports), Promise.setMenuStatus("menu", !1)
                  }(exports)
                }))
              })
            })),
            state: "translate3d(0, ".concat(c.value, "px, 0)"),
            c: 46 * initialize.unref(reject) + "px",
            navigator: 46 * module.value,
            exports: initialize.setTimeout(window)
          }
        }
      }
    }),
    createStore = initialize._export_sfc(jsonParse, [
      ["__scopeId", "data-history-3401af1a"]
    ]);
  tt.createComponent(createStore)
}));
//# sourceMappingURL=chapter-list.js.map
