/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/index.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/index.js", (function (exports, require, module, Promise, setTimeout, reject, setInterval, clearTimeout, c, clearInterval, resolve, window, navigator, data, document, location, history, screen, handler, config, response, state, options, event, result, user, callback, mutation, params, status, bindProps, success, queryData, action, store, N, U, validateData, utils) {
  "use strict";

  function request(exports) {
    return function (exports) {
      if (Array.isArray(exports)) return $(exports)
    }(exports) || function (exports) {
      if ("undefined" != typeof Symbol && null != exports[Symbol.iterator] || null != exports["@@iterator"]) return Array.from(exports)
    }(exports) || function (exports, require) {
      if (exports) {
        if ("string" == typeof exports) return $(exports, require);
        var module = {}.toString.call(exports).slice(8, -1);
        return "Object" === module && exports.constructor && (module = exports.constructor.name), "Map" === module || "Set" === module ? Array.from(exports) : "Arguments" === module || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(module) ? $(exports, require) : void 0
      }
    }(exports) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function $(exports, require) {
    (null == require || require > exports.length) && (require = exports.length);
    for (var module = 0, Promise = Array(require); module < require; module++) Promise[module] = exports[module];
    return Promise
  }

  function initialize(exports, require, module, Promise, reject, setInterval, clearTimeout) {
    try {
      var c = exports[setInterval](clearTimeout),
        clearInterval = c.value
    } catch (exports) {
      return void module(exports)
    }
    c.done ? require(clearInterval) : setTimeout.resolve(clearInterval).then(Promise, reject)
  }

  function token(exports) {
    return function () {
      var require = this,
        module = arguments;
      return new setTimeout((function (Promise, setTimeout) {
        var reject = exports.apply(require, module);

        function setInterval(exports) {
          initialize(reject, Promise, setTimeout, setInterval, clearTimeout, "next", exports)
        }

        function clearTimeout(exports) {
          initialize(reject, Promise, setTimeout, setInterval, clearTimeout, "throw", exports)
        }
        setInterval(void 0)
      }))
    }
  }
  var formatData = exports("../../../../../common/vendor.js");
  Math || (getType + getter)();
  var getType = function () {
      return "./chapter-content.js"
    },
    getter = function () {
      return "./setting.js"
    },
    jsonParse = formatData.defineComponent({
      __name: "index",
      props: {
        readerEvents: {},
        actionEvents: {},
        toolsConfig: {
          default: function () {
            return []
          }
        },
        bookInfo: {
          default: function () {
            return {}
          }
        },
        chapterList: {
          default: function () {
            return []
          }
        },
        query: {
          default: function () {
            return {
              id: ""
            }
          }
        },
        showReaderBottomStuck: {
          type: Boolean
        },
        config: {}
      },
      setup: function (exports, require) {
        var module = require.expose,
          Promise = formatData.useStoreReader(),
          setTimeout = exports,
          reject = formatData.ref();
        Promise.setReaderConfig(setTimeout.config), formatData.watch((function () {
          return setTimeout.bookInfo
        }), (function (exports) {
          Promise.setBookInfo(exports)
        }), {
          immediate: !0
        }), formatData.watch((function () {
          return setTimeout.chapterList
        }), (function (exports) {
          Promise.setChapterList(exports)
        }), {
          immediate: !0
        });
        var setInterval, clearTimeout = function () {
            var exports = token(regeneratorRuntime.mark((function exports(require, module, setTimeout) {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    Promise.readerInstance.onInit(require, setTimeout), module && Promise.readerInstance.onScrollToTop(), Promise.setMenuStatus("menu", !1);
                  case 1:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function (require, module, Promise) {
              return exports.apply(this, arguments)
            }
          }(),
          c = function (exports) {
            var require = Promise.currentChapter[exports];
            clearTimeout(require, !0, "btn")
          },
          clearInterval = function () {
            Promise.menuStatus.calalogue ? Promise.setMenuStatus("calalogue", !1) : (Promise.setMenuStatus("menu", !Promise.menuStatus.menu), setTimeout.actionEvents.onMenuStatusChange("menu", Promise.menuStatus.menu))
          },
          resolve = formatData.debounce({
            delay: 100
          }, (function () {
            Promise.menuStatus.menu && !Promise.menuStatus.calalogue && (setTimeout.actionEvents.onMenuStatusChange("menu", !1), Promise.setMenuStatus("menu", !1))
          }));
        return Promise.setActionEvents(setTimeout.actionEvents), module({
            changeChapter: clearTimeout,
            onScrollToView: function (exports, require) {
              return reject.value.onScrollToView(exports, require)
            },
            resetReaderContent: (setInterval = token(regeneratorRuntime.mark((function exports() {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.next = 2, Promise.readerInstance.resetReaderContent();
                  case 2:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            }))), function () {
              return setInterval.apply(this, arguments)
            }),
            getContents: function () {
              return request(Promise.readerInstance.dataList)
            },
            unlockNextChapter: function () {
              Promise.readerInstance.unlockNextChapter()
            }
          }), formatData.onBeforeUnmount((function () {
            Promise.setMenuStatus("menu", !1)
          })),
          function (exports, require) {
            return formatData.exports({
              setInterval: exports.showReaderBottomStuck
            }, exports.showReaderBottomStuck ? {
              state: formatData.Promise("qReaderBottomStuck", {
                bgColor: formatData.unref(Promise).readerStyle.bgColor
              })
            } : {}, {
              c: formatData.sr(reject, "47793152-0", {
                event: "refChapterContent"
              }),
              navigator: formatData.document({
                query: setTimeout.query,
                events: setTimeout.readerEvents
              }),
              exports: formatData.setTimeout(clearInterval),
              resolve: formatData.setTimeout((function () {
                return formatData.unref(resolve) && formatData.unref(resolve).apply(void 0, arguments)
              })),
              screen: formatData.setTimeout(c),
              location: formatData.document({
                toolsConfig: setTimeout.toolsConfig
              })
            })
          }
      }
    });
  tt.createComponent(jsonParse)
}));
//# sourceMappingURL=index.js.map
