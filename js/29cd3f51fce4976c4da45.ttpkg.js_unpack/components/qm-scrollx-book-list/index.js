/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-scrollx-book-list/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("components/qm-scrollx-book-list/index.js", (function (setTimeout, exports, require, module, Promise, c, clearTimeout, setInterval, clearInterval, reject, window, navigator, resolve, state, data, document, event, history, utils, callback, config, success, response, queryData, store, location, params, bindProps, result, mutation, N, action, screen, options, initialize, token, status, formatData, getType) {
  "use strict";
  var getter = setTimeout("../../common/vendor.js");
  Math || jsonParse();
  var jsonParse = function () {
      return "../qm-book-card/index.js"
    },
    createStore = getter.defineComponent({
      __name: "index",
      props: {
        bookList: {
          type: Array,
          default: function () {
            return [{}, {}, {}, {}, {}]
          }
        },
        scroll: {
          type: Boolean,
          default: !0
        }
      },
      emits: ["click"],
      setup: function (setTimeout, exports) {
        var require = exports.emit,
          module = setTimeout;
        return function (exports, Promise) {
          return {
            setInterval: getter.resolve(setTimeout.bookList, (function (setTimeout, exports, module) {
              return {
                setInterval: "5ae3cb7d-0-" + module,
                state: getter.document({
                  bookCover: setTimeout.book_cover,
                  bookName: setTimeout.book_name,
                  bookType: "vertical"
                }),
                c: exports,
                navigator: getter.setTimeout((function (module) {
                  return function (setTimeout, exports) {
                    require("click", setTimeout, exports)
                  }(setTimeout, exports)
                }))
              }
            })),
            state: module.scroll,
            c: module.scroll ? 1 : ""
          }
        }
      }
    }),
    request = getter._export_sfc(createStore, [
      ["__scopeId", "data-history-5ae3cb7d"]
    ]);
  tt.createComponent(request)
}));
//# sourceMappingURL=index.js.map
