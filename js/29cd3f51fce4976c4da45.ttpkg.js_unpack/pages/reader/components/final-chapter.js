/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/reader/components/final-chapter.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("pages/reader/components/final-chapter.js", (function (exports, require, setTimeout, module, Promise, setInterval, c, clearTimeout, reject, navigator, clearInterval, data, resolve, document, history, state, event, window, utils, screen, location, callback, response, config, success, options, store, params, result, action, queryData, token, N, user, bindProps, mutation, request, initialize, status) {
  "use strict";

  function formatData(exports, require, setTimeout, module, setInterval, c, clearTimeout) {
    try {
      var reject = exports[c](clearTimeout),
        navigator = reject.value
    } catch (exports) {
      return void setTimeout(exports)
    }
    reject.done ? require(navigator) : Promise.resolve(navigator).then(module, setInterval)
  }
  var getType = exports("../../../common/vendor.js"),
    getter = exports("../../../api/reader/index.js");
  Array || getType.resolveComponent("qm-icon")(), Math || jsonParse();
  var jsonParse = function () {
      return "../../../components/qm-book-card/index.js"
    },
    createStore = getType.defineComponent({
      __name: "final-chapter",
      props: {
        bookId: {
          type: Number,
          default: 0
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (exports) {
        var require = exports,
          setTimeout = getType.reactive({
            name: "",
            recommendList: []
          }),
          module = getType.computed((function () {
            var exports;
            return "#0A0A0A" === (null == (exports = require.skinConfig) ? void 0 : exports.bgColor)
          }));

        function setInterval(exports) {
          exports ? getType.index.redirectTo({
            url: "/pages/reader/index?id=".concat(exports)
          }) : getType.index.switchTab({
            url: "/pages/index/index"
          })
        }
        return function (exports) {
            return function () {
              var require = this,
                setTimeout = arguments;
              return new Promise((function (module, Promise) {
                var setInterval = exports.apply(require, setTimeout);

                function c(exports) {
                  formatData(setInterval, module, Promise, c, clearTimeout, "next", exports)
                }

                function clearTimeout(exports) {
                  formatData(setInterval, module, Promise, c, clearTimeout, "throw", exports)
                }
                c(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function exports() {
            var module;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return exports.next = 2, getter.api_get_chapter_end_recommend({
                    book_id: require.bookId
                  });
                case 2:
                  module = exports.sent, setTimeout.name = module.current_book_name, setTimeout.recommendList = module.books || [];
                case 4:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })))(),
          function (exports, require) {
            return getType.exports({
              setInterval: setTimeout.recommendList.length > 0
            }, setTimeout.recommendList.length > 0 ? {
              state: getType.module(setTimeout.name),
              c: module.value ? 1 : "",
              navigator: getType.resolve(setTimeout.recommendList, (function (exports, require, setTimeout) {
                return {
                  setInterval: "859a884d-0-" + setTimeout,
                  state: getType.document({
                    bookCover: exports.book_cover,
                    bookName: exports.book_name,
                    bookDesc: exports.book_desc,
                    bookBottomText: exports.category,
                    isDark: module.value
                  }),
                  c: require,
                  navigator: getType.setTimeout((function (require) {
                    return setInterval(exports.book_id)
                  }))
                }
              }))
            } : {}, {
              exports: module.value ? 1 : "",
              resolve: getType.setTimeout((function (exports) {
                return setInterval()
              }))
            })
          }
      }
    }),
    error = getType._export_sfc(createStore, [
      ["__scopeId", "data-history-859a884d"]
    ]);
  tt.createComponent(error)
}));
//# sourceMappingURL=final-chapter.js.map
