/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/chapter-content.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/chapter-content.js", (function (exports, module, Promise, require, setTimeout, setInterval, clearTimeout, c, reject, clearInterval, resolve, document, window, navigator, history, location, data, config, screen, state, callback, options, handler, response, user, event, request, result, success, error, action, params, queryData, mutation, initialize, token, status, $, N) {
  "use strict";

  function validateData(exports) {
    return validateData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, validateData(exports)
  }

  function getter(exports, module) {
    var Promise = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var require = Object.getOwnPropertySymbols(exports);
      module && (require = require.filter((function (module) {
        return Object.getOwnPropertyDescriptor(exports, module).enumerable
      }))), Promise.push.apply(Promise, require)
    }
    return Promise
  }

  function createStore(exports) {
    for (var module = 1; module < arguments.length; module++) {
      var Promise = null != arguments[module] ? arguments[module] : {};
      module % 2 ? getter(Object(Promise), !0).forEach((function (module) {
        U(exports, module, Promise[module])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(Promise)) : getter(Object(Promise)).forEach((function (module) {
        Object.defineProperty(exports, module, Object.getOwnPropertyDescriptor(Promise, module))
      }))
    }
    return exports
  }

  function U(exports, module, Promise) {
    return (module = function (exports) {
      var module = function (exports, module) {
        if ("object" != validateData(exports) || !exports) return exports;
        var Promise = exports[Symbol.toPrimitive];
        if (void 0 !== Promise) {
          var require = Promise.call(exports, module || "default");
          if ("object" != validateData(require)) return require;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === module ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == validateData(module) ? module : module + ""
    }(module)) in exports ? Object.defineProperty(exports, module, {
      value: Promise,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[module] = Promise, exports
  }

  function utils(exports) {
    return function (exports) {
      if (Array.isArray(exports)) return jsonParse(exports)
    }(exports) || function (exports) {
      if ("undefined" != typeof Symbol && null != exports[Symbol.iterator] || null != exports["@@iterator"]) return Array.from(exports)
    }(exports) || function (exports, module) {
      if (exports) {
        if ("string" == typeof exports) return jsonParse(exports, module);
        var Promise = {}.toString.call(exports).slice(8, -1);
        return "Object" === Promise && exports.constructor && (Promise = exports.constructor.name), "Map" === Promise || "Set" === Promise ? Array.from(exports) : "Arguments" === Promise || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(Promise) ? jsonParse(exports, module) : void 0
      }
    }(exports) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function jsonParse(exports, module) {
    (null == module || module > exports.length) && (module = exports.length);
    for (var Promise = 0, require = Array(module); Promise < module; Promise++) require[Promise] = exports[Promise];
    return require
  }

  function store(exports, module, Promise, require, setInterval, clearTimeout, c) {
    try {
      var reject = exports[clearTimeout](c),
        clearInterval = reject.value
    } catch (exports) {
      return void Promise(exports)
    }
    reject.done ? module(clearInterval) : setTimeout.resolve(clearInterval).then(require, setInterval)
  }

  function bindProps(exports) {
    return function () {
      var module = this,
        Promise = arguments;
      return new setTimeout((function (require, setTimeout) {
        var setInterval = exports.apply(module, Promise);

        function clearTimeout(exports) {
          store(setInterval, require, setTimeout, clearTimeout, c, "next", exports)
        }

        function c(exports) {
          store(setInterval, require, setTimeout, clearTimeout, c, "throw", exports)
        }
        clearTimeout(void 0)
      }))
    }
  }
  var handleQueue = exports("../../../../../common/vendor.js"),
    formatData = handleQueue.defineComponent({
      __name: "chapter-content",
      props: {
        events: {},
        query: {
          default: function () {
            return {
              id: ""
            }
          }
        }
      },
      setup: function (exports, module) {
        var Promise = module.expose,
          require = handleQueue.useStoreReader(),
          clearTimeout = exports,
          c = handleQueue.getCurrentInstance(),
          reject = handleQueue.ref([]),
          clearInterval = new handleQueue.Reader({
            events: clearTimeout.events
          });
        clearInterval.updateView = function () {
          var exports = bindProps(regeneratorRuntime.mark((function exports(module) {
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return reject.value = JSON.parse(JSON.stringify(module)), exports.next = 3, handleQueue.nextTick$1();
                case 3:
                  config();
                case 4:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })));
          return function (module) {
            return exports.apply(this, arguments)
          }
        }(), clearInterval.getChapterContentHeight = function () {
          var exports = bindProps(regeneratorRuntime.mark((function exports(module) {
            var Promise;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return exports.next = 2, location("#chapter-".concat(module));
                case 2:
                  return Promise = exports.sent, exports.abrupt("return", (console.log("-- chapter height", module, Promise), Promise[0] ? Promise[0].height : 0));
                case 4:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })));
          return function (module) {
            return exports.apply(this, arguments)
          }
        }(), clearInterval.onScrollToTop = function () {
          window.value = Math.random()
        }, clearInterval.onChapterChange = function () {
          var exports = bindProps(regeneratorRuntime.mark((function exports(module) {
            var Promise, setTimeout;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  if (Promise = clearInterval.events.getChapterInfo(module, "current"), setTimeout = !(!Promise.prev || !Promise.prev.id || Promise.disabledLoadPrev), exports.t0 = setTimeout, exports.t0) {
                    exports.next = 7;
                    break
                  }
                  return callback.value = !1, exports.next = 7, handleQueue.nextTick$1();
                case 7:
                  data.value = setTimeout, require.setCurrentChapter(Promise), module.content && 0 !== module.content.length && (require.setReadedChapterIds(Promise.id), request());
                case 10:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })));
          return function (module) {
            return exports.apply(this, arguments)
          }
        }(), require.setReaderInstance(clearInterval);
        var resolve, document, window = handleQueue.ref(0),
          navigator = handleQueue.ref(""),
          history = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports(module, Promise) {
              var require;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    if (!Promise) {
                      exports.next = 2;
                      break
                    }
                    return exports.abrupt("return", void(navigator.value = Promise));
                  case 2:
                    require = "chapter-item-0-".concat(module.clearTimeout), navigator.value = require;
                  case 4:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function (module, Promise) {
              return exports.apply(this, arguments)
            }
          }(),
          location = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports(module) {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.abrupt("return", new setTimeout((function (exports) {
                      var Promise = handleQueue.index.createSelectorQuery();
                      Promise.in(c), Promise.select(module).boundingClientRect(), Promise.exec((function (module) {
                        exports(module)
                      }))
                    })));
                  case 1:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function (module) {
              return exports.apply(this, arguments)
            }
          }(),
          data = handleQueue.ref(!0),
          config = function () {
            resolve && resolve.disconnect(), (resolve = handleQueue.index.createIntersectionObserver(c, {
              thresholds: [0, 1],
              observeAll: !0
            })).relativeToViewport({
              top: 0
            }).observe(".chapter-item", (function (exports) {
              var module = +exports.dataset.index;
              clearInterval.updateCurrentChapter(module, exports.intersectionRatio), 1 === exports.intersectionRatio && module === reject.value.length - 1 && state()
            }))
          },
          screen = !1,
          state = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports() {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    if (!reject.value[reject.value.length - 1].needPay) {
                      exports.next = 4;
                      break
                    }
                    console.log("-- 卡点，不预加载"), exports.next = 17;
                    break;
                  case 4:
                    if (screen) {
                      exports.next = 17;
                      break
                    }
                    return screen = !0, exports.prev = 6, exports.next = 9, clearInterval.preloadNextChapter();
                  case 9:
                    exports.next = 14;
                    break;
                  case 11:
                    exports.prev = 11, exports.t0 = exports.catch(6), console.warn("-- onScrolltolower", exports.t0);
                  case 14:
                    return exports.prev = 14, setInterval((function () {
                      screen = !1
                    }), 300), exports.finish(14);
                  case 17:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [6, 11, 14, 17]
              ])
            })));
            return function () {
              return exports.apply(this, arguments)
            }
          }(),
          callback = handleQueue.ref(!1),
          options = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports() {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return callback.value = !0, exports.prev = 1, exports.next = 4, clearInterval.addPrevChapter();
                  case 4:
                    return exports.prev = 4, callback.value = !1, exports.finish(4);
                  case 7:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [1, , 4, 7]
              ])
            })));
            return function () {
              return exports.apply(this, arguments)
            }
          }(),
          handler = handleQueue.computed((function () {
            return {
              background: require.readerStyle.bgColor
            }
          })),
          response = handleQueue.computed((function () {
            return {
              fontSize: 2 * require.readerStyle.fontSize + "rpx",
              color: require.readerStyle.color
            }
          })),
          user = handleQueue.computed((function () {
            var exports;
            return {
              fontSize: require.readerStyle.fontSize * ((null == (exports = require.readerConfig) ? void 0 : exports.readerTitileRatio) || 1.15) * 2 + "rpx",
              color: require.readerStyle.color
            }
          })),
          event = {},
          request = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports() {
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.next = 2, handleQueue.nextTick$1();
                  case 2:
                    document && document.disconnect(), event = {}, (document = handleQueue.index.createIntersectionObserver(c, {
                      thresholds: [0],
                      observeAll: !0
                    })).relativeToViewport({
                      top: 0
                    }).observe(".js-chapter-item", (function (exports) {
                      var module = +exports.dataset.index,
                        Promise = exports.dataset.id,
                        require = event[Promise] || new Set;
                      0 === exports.intersectionRatio ? require.delete(module) : require.add(module), event[Promise] = require
                    }));
                  case 6:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function () {
              return exports.apply(this, arguments)
            }
          }(),
          result = function () {
            var exports = bindProps(regeneratorRuntime.mark((function exports() {
              var module, Promise;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    module = Math.min.apply(Math, utils(event[clearInterval.currentChapter.id].values())), Promise = {
                      id: clearInterval.currentChapter.id,
                      clearTimeout: module
                    }, handleQueue.index.setStorageSync(handleQueue.storageKeys.chapterInfoPrefix + clearTimeout.query.id, createStore(createStore({}, Promise), {}, {
                      bookId: clearTimeout.query.id,
                      readedChapterIds: utils(new Set(require.readedChapterIds))
                    }));
                  case 2:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function () {
              return exports.apply(this, arguments)
            }
          }();
        return handleQueue.watch((function () {
            return require.readerStyle.fontSize
          }), bindProps(regeneratorRuntime.mark((function exports() {
            var module, Promise, require;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return clearInterval.clearEmptyData(), module = reject.value.findIndex((function (exports) {
                    return exports.id === clearInterval.currentChapter.id
                  })), Promise = Math.min.apply(Math, utils(event[clearInterval.currentChapter.id].values())), require = "chapter-item-".concat(module, "-").concat(-1 === Promise ? 0 : Promise), navigator.value = "", exports.next = 5, handleQueue.nextTick$1();
                case 5:
                  navigator.value = require, request();
                case 7:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })))), bindProps(regeneratorRuntime.mark((function exports() {
            var module, Promise, setTimeout, setInterval, c, reject;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  if (require.setReaderTheme("default"), (module = handleQueue.index.getStorageSync(handleQueue.storageKeys.setting)) && (module.name || (Promise = handleQueue.skinConfigList.find((function (exports) {
                      return exports.bgColor === module.bgColor
                    })), module.name = Promise ? Promise.name : "white"), require.setReaderStyle(module)), setTimeout = handleQueue.index.getStorageSync(handleQueue.storageKeys.chapterInfoPrefix + clearTimeout.query.id) || {}, setInterval = setTimeout.id, !clearInterval.events.getInitChapterId) {
                    exports.next = 11;
                    break
                  }
                  return exports.next = 7, clearInterval.events.getInitChapterId();
                case 7:
                  c = exports.sent, setTimeout.id = c, exports.next = 12;
                  break;
                case 11:
                  !clearTimeout.query.force && setInterval || (setTimeout.id = clearTimeout.query.cid);
                case 12:
                  return console.log("-- book init ", setTimeout), exports.next = 15, clearInterval.onInit(setTimeout);
                case 15:
                  setInterval === clearInterval.currentChapter.id && history(setTimeout), reject = setTimeout.readedChapterIds || [], require.setReadedChapterIds(reject);
                case 18:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })))(), handleQueue.index.onAppHide((function () {
            result()
          })), handleQueue.onBeforeUnmount((function () {
            result()
          })), handleQueue.onUnmounted((function () {
            resolve && resolve.disconnect()
          })), Promise({
            onScrollToView: history
          }),
          function (exports, module) {
            var Promise;
            return {
              setInterval: handleQueue.resolve(reject.value, (function (exports, module, Promise) {
                return handleQueue.exports({
                  setInterval: !exports.content || 0 === exports.content.length
                }, exports.content && 0 !== exports.content.length ? {
                  navigator: handleQueue.module(exports.title),
                  exports: exports.id,
                  resolve: handleQueue.clearInterval(user.value),
                  screen: handleQueue.resolve(exports.content, (function (exports, Promise, require) {
                    return {
                      setInterval: handleQueue.module(exports),
                      state: Promise,
                      c: Promise,
                      navigator: "chapter-item-".concat(module, "-").concat(Promise)
                    }
                  })),
                  location: handleQueue.clearInterval(response.value),
                  clearTimeout: exports.id,
                  success: module,
                  event: "chapter-".concat(module)
                } : {
                  state: exports.contentHeight + "px",
                  c: "chapter-".concat(module)
                }, {
                  window: "".concat(module, "utils").concat(exports.id)
                })
              })),
              state: handleQueue.require((null == (Promise = handleQueue.unref(require).readerConfig) ? void 0 : Promise.customReaderClass) || ""),
              c: handleQueue.clearInterval(handler.value),
              navigator: handleQueue.setTimeout(state),
              exports: data.value,
              resolve: handleQueue.setTimeout(options),
              screen: callback.value,
              location: navigator.value,
              clearTimeout: window.value,
              success: handleQueue.unref(require).readerStyle.bgColor
            }
          }
      }
    });
  tt.createComponent(formatData)
}));
//# sourceMappingURL=chapter-content.js.map
