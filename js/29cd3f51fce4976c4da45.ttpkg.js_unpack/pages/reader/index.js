/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/reader/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/reader/index.js", (function (exports, module, Promise, require, setInterval, setTimeout, clearTimeout, c, reject, window, clearInterval, navigator, document, resolve, history, data, location, screen, utils, event, config, state, options, callback, action, response, handler, error, success, request, user, token, result, queryData, bindProps, status, N, mutation, params) {
  "use strict";

  function formatData(exports) {
    return formatData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, formatData(exports)
  }

  function store(exports, module) {
    var Promise = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var require = Object.getOwnPropertySymbols(exports);
      module && (require = require.filter((function (module) {
        return Object.getOwnPropertyDescriptor(exports, module).enumerable
      }))), Promise.push.apply(Promise, require)
    }
    return Promise
  }

  function getType(exports) {
    for (var module = 1; module < arguments.length; module++) {
      var Promise = null != arguments[module] ? arguments[module] : {};
      module % 2 ? store(Object(Promise), !0).forEach((function (module) {
        validateData(exports, module, Promise[module])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(Promise)) : store(Object(Promise)).forEach((function (module) {
        Object.defineProperty(exports, module, Object.getOwnPropertyDescriptor(Promise, module))
      }))
    }
    return exports
  }

  function validateData(exports, module, Promise) {
    return (module = function (exports) {
      var module = function (exports, module) {
        if ("object" != formatData(exports) || !exports) return exports;
        var Promise = exports[Symbol.toPrimitive];
        if (void 0 !== Promise) {
          var require = Promise.call(exports, module || "default");
          if ("object" != formatData(require)) return require;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === module ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == formatData(module) ? module : module + ""
    }(module)) in exports ? Object.defineProperty(exports, module, {
      value: Promise,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[module] = Promise, exports
  }

  function $(exports, module, Promise, require, setTimeout, clearTimeout, c) {
    try {
      var reject = exports[clearTimeout](c),
        window = reject.value
    } catch (exports) {
      return void Promise(exports)
    }
    reject.done ? module(window) : setInterval.resolve(window).then(require, setTimeout)
  }

  function getter(exports) {
    return function () {
      var module = this,
        Promise = arguments;
      return new setInterval((function (require, setInterval) {
        var setTimeout = exports.apply(module, Promise);

        function clearTimeout(exports) {
          $(setTimeout, require, setInterval, clearTimeout, c, "next", exports)
        }

        function c(exports) {
          $(setTimeout, require, setInterval, clearTimeout, c, "throw", exports)
        }
        clearTimeout(void 0)
      }))
    }
  }
  var U = exports("../../common/vendor.js"),
    createStore = exports("../../api/reader/index.js"),
    setupConfig = exports("../../assets/ts/history.js"),
    initialize = exports("../../assets/ts/theme.js");
  Math || (handleQueue + watchChanges + jsonParse)();
  var jsonParse = function () {
      return "../../node-modules/@repo/qm-components/src/queryData-reader/index.js"
    },
    handleQueue = function () {
      return "../../components/qm-pay-panel/index.js"
    },
    watchChanges = function () {
      return "./components/final-chapter.js"
    },
    transformData = U.defineComponent({
      __name: "index",
      props: {
        id: {},
        cnum: {}
      },
      setup: function (exports) {
        var module, Promise, require, c, reject, window, clearInterval = {
            hasChangeChapterBtn: !0,
            catalogIcon: "lock",
            customReaderClass: "new-media-reader",
            readerTitileRatio: 1.3,
            readerThemeMap: initialize.readerThemeMap
          },
          navigator = [U.ToolButtonType.CATALOG, U.ToolButtonType.THEME, {
            type: U.ToolButtonType.SETTING,
            components: [U.SettingCompType.FONTSIZE, U.SettingCompType.BACKGROUND]
          }],
          document = exports,
          resolve = U.getCurrentInstance(),
          history = U.ref(),
          data = U.ref({
            id: Number(document.id)
          }),
          location = U.ref([]),
          screen = U.ref(),
          utils = U.ref(!1),
          event = U.ref({
            bgColor: "#ffffff",
            color: "#000000",
            name: "white"
          }),
          config = U.ref(!1),
          state = U.ref(!1),
          options = U.ref(),
          callback = function () {
            var exports, module, Promise = history.value.getContents(),
              require = Promise[Promise.length - 1];
            config.value = require.needPay, console.log("-- getStuckStatus showStuck", config.value), utils.value = !(null == (exports = require.next) ? void 0 : exports.id), console.log("-- getStuckStatus readFinish", utils.value), utils.value && (null == window || window.disconnect(), (module = getter(regeneratorRuntime.mark((function exports(module) {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.next = 2, U.nextTick$1();
                  case 2:
                    (window = U.index.createIntersectionObserver(resolve, {
                      thresholds: [0, 1]
                    })).relativeToViewport({
                      bottom: -50
                    }).observe(".final-chapter-container", (function (exports) {
                      exports.intersectionRatio > 0 && createStore.api_update_reading_record({
                        book_id: data.value.id,
                        chapter_id: module.id,
                        chapter_num: module.chapterData.chapter.num,
                        is_chapter_end: !0
                      })
                    }));
                  case 4:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            }))), function (exports) {
              return module.apply(this, arguments)
            })(require))
          },
          action = {
            getInitChapterId: (c = getter(regeneratorRuntime.mark((function exports() {
              var module;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.next = 2, getter(regeneratorRuntime.mark((function exports() {
                      var module, Promise;
                      return regeneratorRuntime.wrap((function (exports) {
                        for (;;) switch (exports.prev = exports.next) {
                          case 0:
                            return module = {
                              book_id: document.id,
                              chapter_num: document.cnum
                            }, exports.prev = 1, U.index.showLoading({
                              title: "加载中",
                              icon: "none"
                            }), exports.next = 5, createStore.api_book_info(module);
                          case 5:
                            Promise = exports.sent, data.value = getType(getType({}, Promise), {}, {
                              id: Promise.book_id,
                              title: Promise.book_name,
                              image_link: Promise.book_cover
                            }), console.log("-- Api bookInfo", data.value), exports.next = 13;
                            break;
                          case 10:
                            return exports.prev = 10, exports.t0 = exports.catch(1), exports.abrupt("return", (400 === exports.t0.code && success(), new setInterval((function () {}))));
                          case 13:
                            result.defaultParams.fiction_type = String(data.value.fiction_type), bindProps(), setupConfig.update_book_store_queue(data.value.book_id);
                          case 14:
                          case "end":
                            return exports.stop()
                        }
                      }), exports, null, [
                        [1, 10]
                      ])
                    })))();
                  case 2:
                    return exports.abrupt("return", null == (module = data.value) ? void 0 : module.chapter_id);
                  case 3:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            }))), function () {
              return c.apply(this, arguments)
            }),
            getContent: (require = getter(regeneratorRuntime.mark((function exports(module, Promise) {
              var require, setTimeout, clearTimeout, c, reject, window;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    if (require = module.id, "current" !== Promise && (require = module[Promise].id), require || "current" === Promise) {
                      exports.next = 3;
                      break
                    }
                    return exports.abrupt("return", setInterval.reject("no chapter_id"));
                  case 3:
                    return setTimeout = {
                      book_id: document.id,
                      chapter_id: require,
                      disable_update_read_record: !["current", "prev"].includes(Promise)
                    }, exports.prev = 4, exports.next = 7, createStore.api_chapter_data(setTimeout);
                  case 7:
                    clearTimeout = exports.sent, U.index.hideLoading(), console.log("-- Api获取当前章节内容", module, Promise, getType({}, clearTimeout)), clearTimeout.acquired_by_paid && result.readerBuyTrack(clearTimeout.chapter, clearTimeout.chapter_paid.chapter_price), exports.next = 16;
                    break;
                  case 13:
                    return exports.prev = 13, exports.t0 = exports.catch(4), exports.abrupt("return", void(400 === exports.t0.code && success()));
                  case 16:
                    return reject = (c = clearTimeout).chapter, window = c.chapter_paid, exports.abrupt("return", (0 !== window.show_type && (config.value = !0, options.value = clearTimeout), {
                      id: reject.id,
                      title: reject.title,
                      content: reject.content,
                      prev: {
                        id: reject.pre_id
                      },
                      next: {
                        id: reject.next_id
                      },
                      disabledLoadPrev: !reject.content,
                      needPay: 0 !== window.show_type,
                      chapterData: clearTimeout
                    }));
                  case 18:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [4, 13]
              ])
            }))), function (exports, module) {
              return require.apply(this, arguments)
            }),
            getChapterInfo: function (exports, module) {
              return console.log("-- getChapterInfo", exports, module), "current" === module ? getType(getType({}, exports), {}, {
                clearOthersChapter: !!(null == exports ? void 0 : exports.needPay)
              }) : getType({}, exports[module])
            },
            onChapterChange: (Promise = getter(regeneratorRuntime.mark((function exports(module, Promise) {
              var require, setInterval, setTimeout, clearTimeout, c;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return console.log("-- onChapterChange", module, Promise), clearTimeout = module.chapterData.chapter, result.readerShowTrack(clearTimeout.id, clearTimeout.num), screen.value && mutation(), screen.value = clearTimeout, status(), module.needPay && (options.value = module.chapterData), state.value = ["scroll-up", "scroll-down"].includes(Promise) || "pulldown" === Promise && !!(null == (require = module.content) ? void 0 : require.length), ["scroll-up", "scroll-down"].includes(Promise) && createStore.api_update_reading_record({
                      book_id: data.value.id,
                      chapter_id: clearTimeout.id,
                      chapter_num: clearTimeout.num,
                      is_chapter_end: !1
                    }), utils.value = !(null == (setInterval = module.next) ? void 0 : setInterval.id), c = 1 === data.value.fiction_type, U.index.setNavigationBarTitle({
                      title: c ? module.title : data.value.title
                    }), null == reject || reject.disconnect(), !(null == (setTimeout = module.prev) ? void 0 : setTimeout.id) && c && getter(regeneratorRuntime.mark((function exports() {
                      return regeneratorRuntime.wrap((function (exports) {
                        for (;;) switch (exports.prev = exports.next) {
                          case 0:
                            return exports.next = 2, U.nextTick$1();
                          case 2:
                            return exports.next = 4, U.nextTick$1();
                          case 4:
                            (reject = U.index.createIntersectionObserver(resolve, {
                              thresholds: [0, 1]
                            })).relativeToViewport({
                              top: 0
                            }).observe(".chapter-item-title", (function (exports) {
                              var module = exports.intersectionRatio > 0 ? data.value.title : location.value[0].title;
                              U.index.setNavigationBarTitle({
                                title: module
                              })
                            }));
                          case 6:
                          case "end":
                            return exports.stop()
                        }
                      }), exports)
                    })))(), exports.next = 9, U.nextTick$1();
                  case 9:
                    callback();
                  case 10:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            }))), function (exports, module) {
              return Promise.apply(this, arguments)
            }),
            onPreloadNextChapter: function () {
              console.log("-- onPreloadNextChapter"), state.value = !0, callback()
            }
          },
          response = {
            onChangeChapterByCatalogue: (module = getter(regeneratorRuntime.mark((function exports(module) {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    console.log("-- onChangeChapterByCatalogue", module), history.value.changeChapter(module, !0);
                  case 1:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            }))), function (exports) {
              return module.apply(this, arguments)
            }),
            onMenuStatusChange: function (exports, module) {
              if (console.log("-- onMenuStatusChange", exports, module), !0 === module) {
                if ("menu" === exports && (result.menuShowTrack(), handler()), ["calalogue", "setting"].includes(exports)) {
                  var Promise = "calalogue" === exports ? "目录" : "设置";
                  result.menuClickTrack(Promise)
                }
                "calalogue" === exports && result.catalogShowTrack()
              }
            },
            onMenuClick: function (exports, module) {
              if (console.log("-- onMenuClick", exports, module), "btnChangeChapter" === exports) {
                var Promise = "next" === module ? "下一章" : "上一章";
                result.menuClickTrack(Promise)
              }
              if ("chapter" === exports && result.catalogClickTrack(module), "theme" === exports) {
                var require = "dark" === module ? "夜间" : "日间";
                result.menuClickTrack(require), user()
              }
              "skin" === exports && user(module)
            }
          };

        function handler() {
          return error.apply(this, arguments)
        }

        function error() {
          return error = getter(regeneratorRuntime.mark((function exports() {
            var module, Promise, require, setInterval, setTimeout, clearTimeout, c, reject, window;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return exports.next = 2, createStore.api_chapter_list({
                    book_id: document.id
                  });
                case 2:
                  for (module = exports.sent, Promise = module.chapters, require = [], setInterval = (null == Promise ? void 0 : Promise.length) || 0, setTimeout = 0; setTimeout < setInterval; setTimeout++) clearTimeout = Promise[setTimeout], c = getType(getType({}, clearTimeout), {}, {
                    isFree: !clearTimeout.need_paid
                  }), reject = Promise[setTimeout - 1], window = Promise[setTimeout + 1], c.prev = reject ? getType(getType({}, reject), {}, {
                    isFree: !reject.need_paid
                  }) : {}, c.next = window ? getType(getType({}, window), {}, {
                    isFree: !window.need_paid
                  }) : {}, require.push(c);
                  location.value = require, console.log("-- Api chapterList", location.value);
                case 8:
                case "end":
                  return exports.stop()
              }
            }), exports)
          }))), error.apply(this, arguments)
        }

        function success() {
          setTimeout((function () {
            var exports;
            (null == (exports = getCurrentPages()) ? void 0 : exports.length) > 1 ? U.index.navigateBack() : U.index.switchTab({
              url: "/pages/index/index"
            })
          }), 3e3)
        }

        function request(exports) {
          var module = exports.chapterId;
          screen.value.id === module ? history.value.resetReaderContent() : history.value.unlockNextChapter()
        }

        function user(exports) {
          var module = exports || U.index.getStorageSync("queryData-reader-setting");
          module && (event.value = module)
        }
        handler(), user();
        var token = U.inject("qmsa"),
          result = {
            defaultParams: {
              book_id: String(document.id),
              fiction_type: "",
              page: "reader"
            },
            readerShowTrack: function (exports, module) {
              token.track({
                qm: "reader_full_#_view",
                sensors: "Dypaid_Page_View"
              }, getType(getType({}, result.defaultParams), {}, {
                sort_id: module,
                chapter_id: String(exports),
                position: "full"
              }))
            },
            menuShowTrack: function () {
              var exports = screen.value,
                module = exports.id,
                Promise = exports.num;
              token.track({
                qm: "reader_menu_#_show",
                sensors: "Dypaid_Element_Show"
              }, getType(getType({}, result.defaultParams), {}, {
                sort_id: Promise,
                chapter_id: String(module),
                position: "menu"
              }))
            },
            menuClickTrack: function (exports) {
              var module = screen.value,
                Promise = module.id,
                require = module.num;
              token.track({
                qm: "reader_menu_#_click",
                sensors: "Dypaid_Element_Click"
              }, getType(getType({}, result.defaultParams), {}, {
                sort_id: require,
                chapter_id: String(Promise),
                btn_name: exports,
                position: "menu"
              }))
            },
            catalogShowTrack: function () {
              token.track({
                qm: "reader_catalog_#_view",
                sensors: "Dypaid_Page_View"
              }, getType(getType({}, result.defaultParams), {}, {
                position: "catalog"
              }))
            },
            catalogClickTrack: function (exports) {
              token.track({
                qm: "reader_catalog_#_click",
                sensors: "Dypaid_Element_Click"
              }, getType(getType({}, result.defaultParams), {}, {
                sort_id: exports.num,
                chapter_id: String(exports.id),
                position: "catalog"
              }))
            },
            readerTimeTrack: function () {
              var exports, module = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                Promise = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null == (exports = screen.value) ? void 0 : exports.id) {
                var require = screen.value,
                  setInterval = require.id,
                  setTimeout = require.num,
                  clearTimeout = module ? +((Date.now() - +queryData.readTime) / 1e3).toFixed(0) || 0 : queryData.delay;
                token.track({
                  qm: "reader_full_#_duration",
                  sensors: "Dypaid_Time_Duration"
                }, getType(getType({}, result.defaultParams), {}, {
                  sort_id: setTimeout,
                  chapter_id: String(setInterval),
                  duration: clearTimeout,
                  position: "full"
                }), {
                  isImmediate: Promise
                })
              }
            },
            readerBuyTrack: function (exports, module) {
              token.track({
                qm: "reader_buy-succeed_#_result",
                sensors: "Dypaid_General_Result"
              }, getType(getType({}, result.defaultParams), {}, {
                sort_id: exports.num,
                chapter_id: String(exports.id),
                number: module,
                position: "buy-succeed"
              }))
            }
          },
          queryData = {
            timer: 0,
            delay: 60,
            readTime: Date.now()
          };

        function bindProps() {
          clearTimeout(queryData.timer), queryData.timer = setTimeout((function () {
            result.readerTimeTrack(), queryData.readTime = Date.now(), bindProps()
          }), 1e3 * queryData.delay)
        }
        var status = function () {
            N = !1, queryData.readTime = Date.now(), bindProps()
          },
          N = !1,
          mutation = function () {
            N || (N = !0, clearTimeout(queryData.timer), result.readerTimeTrack(!0, !0), queryData.readTime = Date.now())
          };
        return U.onShow((function () {
            status()
          })), U.onBeforeUnmount((function () {
            mutation()
          })), U.onHide((function () {
            mutation()
          })), U.index.onAppHide((function () {
            mutation()
          })),
          function (exports, module) {
            return U.exports({
              setInterval: config.value
            }, config.value ? {
              state: U.setTimeout(request),
              c: U.setTimeout(request),
              navigator: U.document({
                pageName: "reader_reader",
                chapterInfo: options.value,
                isScrollStuck: state.value,
                skinConfig: event.value
              })
            } : {}, {
              exports: utils.value && !config.value
            }, utils.value && !config.value ? {
              resolve: U.document({
                bookId: data.value.id,
                skinConfig: event.value
              })
            } : {}, {
              screen: U.sr(history, "c26bce53-0", {
                event: "refReader"
              }),
              location: U.document({
                readerEvents: action,
                actionEvents: response,
                toolsConfig: navigator,
                bookInfo: data.value,
                chapterList: location.value,
                query: document,
                config: clearInterval
              })
            })
          }
      }
    }),
    processEvent = U._export_sfc(transformData, [
      ["__scopeId", "data-history-c26bce53"]
    ]);
  tt.createPage(processEvent)
}));
//# sourceMappingURL=index.js.map
