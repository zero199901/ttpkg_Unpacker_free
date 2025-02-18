/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-panel/components/purchase-panel.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-panel/components/purchase-panel.js", (function (exports, module, require, Promise, setTimeout, clearTimeout, c, setInterval, reject, document, window, clearInterval, resolve, navigator, history, config, state, data, location, utils, screen, success, event, request, handler, options, result, error, callback, queryData, response, token, N, params, status, user, action, mutation, bindProps) {
  "use strict";

  function formatData(exports) {
    return formatData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, formatData(exports)
  }

  function getType(exports, module) {
    var require = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var Promise = Object.getOwnPropertySymbols(exports);
      module && (Promise = Promise.filter((function (module) {
        return Object.getOwnPropertyDescriptor(exports, module).enumerable
      }))), require.push.apply(require, Promise)
    }
    return require
  }

  function initialize(exports) {
    for (var module = 1; module < arguments.length; module++) {
      var require = null != arguments[module] ? arguments[module] : {};
      module % 2 ? getType(Object(require), !0).forEach((function (module) {
        getter(exports, module, require[module])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : getType(Object(require)).forEach((function (module) {
        Object.defineProperty(exports, module, Object.getOwnPropertyDescriptor(require, module))
      }))
    }
    return exports
  }

  function getter(exports, module, require) {
    return (module = function (exports) {
      var module = function (exports, module) {
        if ("object" != formatData(exports) || !exports) return exports;
        var require = exports[Symbol.toPrimitive];
        if (void 0 !== require) {
          var Promise = require.call(exports, module || "default");
          if ("object" != formatData(Promise)) return Promise;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === module ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == formatData(module) ? module : module + ""
    }(module)) in exports ? Object.defineProperty(exports, module, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[module] = require, exports
  }

  function jsonParse(exports, module, require, Promise, clearTimeout, c, setInterval) {
    try {
      var reject = exports[c](setInterval),
        document = reject.value
    } catch (exports) {
      return void require(exports)
    }
    reject.done ? module(document) : setTimeout.resolve(document).then(Promise, clearTimeout)
  }
  var createStore = exports("../../../common/vendor.js"),
    store = exports("../../../api/pay/index.js");
  Math || (handleQueue + U)();
  var handleQueue = function () {
      return "./panel-header.js"
    },
    U = function () {
      return "../../../node-modules/@repo/qm-components/src/queryData-theme-overlay/index.js"
    },
    validateData = createStore.defineComponent({
      __name: "purchase-panel",
      props: {
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (exports) {
        var module = createStore.inject("qmsa"),
          require = createStore.ref(),
          Promise = createStore.ref(!0),
          clearTimeout = exports,
          c = createStore.computed((function () {
            var exports;
            return "#0A0A0A" === (null == (exports = clearTimeout.skinConfig) ? void 0 : exports.bgColor)
          })),
          setInterval = createStore.computed((function () {
            return Promise.value ? c.value ? "/static/pay/radio-dark.png" : "/static/pay/radio-active.png" : "/static/pay/radio-inactive.png"
          }));

        function reject() {
          Promise.value = !Promise.value
        }

        function document() {
          return window.apply(this, arguments)
        }

        function window() {
          return window = function (exports) {
            return function () {
              var module = this,
                require = arguments;
              return new setTimeout((function (Promise, setTimeout) {
                var clearTimeout = exports.apply(module, require);

                function c(exports) {
                  jsonParse(clearTimeout, Promise, setTimeout, c, setInterval, "next", exports)
                }

                function setInterval(exports) {
                  jsonParse(clearTimeout, Promise, setTimeout, c, setInterval, "throw", exports)
                }
                c(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function exports() {
            var module, setTimeout, c, setInterval, reject, document, window, resolve;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return clearInterval("click"), document = {
                    book_id: null == (module = clearTimeout.chapterInfo) ? void 0 : module.book_id,
                    chapter_id: null == (setTimeout = clearTimeout.chapterInfo) ? void 0 : setTimeout.chapter.id,
                    open_auto_buy: Promise.value
                  }, window = {
                    bookId: document.book_id,
                    chapterId: document.chapter_id,
                    chapterNum: null == (c = clearTimeout.chapterInfo) ? void 0 : c.chapter.num
                  }, exports.prev = 2, exports.next = 5, store.api_content_chapter_buy(document);
                case 5:
                  resolve = exports.sent, null == (setInterval = require.value) || setInterval.emit("paySuccess", window), (null == resolve ? void 0 : resolve.acquired_by_paid) && clearInterval("buySuccess", null == resolve ? void 0 : resolve.chapter_price), exports.next = 12;
                  break;
                case 9:
                  exports.prev = 9, exports.t0 = exports.catch(2), 409 === exports.t0.code && createStore.index.showToast({
                    title: exports.t0.msg,
                    icon: "none"
                  }), null == (reject = require.value) || reject.emit("payFail", window);
                case 12:
                case "end":
                  return exports.stop()
              }
            }), exports, null, [
              [2, 9]
            ])
          }))), window.apply(this, arguments)
        }

        function clearInterval(exports, require) {
          var Promise, setTimeout, c, setInterval, reject, document = {
              book_id: String(null == (Promise = clearTimeout.chapterInfo) ? void 0 : Promise.book_id),
              sort_id: Number(null == (setTimeout = clearTimeout.chapterInfo) ? void 0 : setTimeout.chapter.num),
              chapter_id: String(null == (setInterval = null == (c = clearTimeout.chapterInfo) ? void 0 : c.chapter) ? void 0 : setInterval.id),
              page: "reader",
              fiction_type: String(null == (reject = clearTimeout.chapterInfo) ? void 0 : reject.fiction_type)
            },
            window = {
              click: {
                eventName: {
                  qm: "reader_unlock_#_click",
                  sensors: "Dypaid_Button_Click"
                },
                property: initialize(initialize({}, document), {}, {
                  btn_name: "购买",
                  position: "unlock"
                })
              },
              buySuccess: {
                eventName: {
                  qm: "reader_buy-succeed_#_result",
                  sensors: "Dypaid_General_Result"
                },
                property: initialize(initialize({}, document), {}, {
                  number: Number(require),
                  position: "buy-succeed"
                })
              }
            };
          window[exports] && module.track(window[exports].eventName, window[exports].property)
        }
        return createStore.onMounted((function () {
            require.value = createStore.inject("qmPayPanel")
          })),
          function (module, require) {
            return {
              setInterval: createStore.document({
                chapterInfo: exports.chapterInfo,
                pageType: "purchase",
                skinConfig: exports.skinConfig
              }),
              state: createStore.setTimeout(document),
              c: createStore.document({
                isDark: c.value
              }),
              navigator: setInterval.value,
              exports: createStore.require(c.value ? "text-dark" : ""),
              resolve: createStore.setTimeout(reject)
            }
          }
      }
    }),
    watchChanges = createStore._export_sfc(validateData, [
      ["__scopeId", "data-history-a18c2d2b"]
    ]);
  tt.createComponent(watchChanges)
}));
//# sourceMappingURL=purchase-panel.js.map
