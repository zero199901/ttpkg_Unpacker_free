/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@repo/qm-components/src/q-reader/setting.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@repo/qm-components/src/queryData-reader/setting.js", (function (exports, module, require, setTimeout, Promise, reject, setInterval, clearTimeout, c, window, clearInterval, document, resolve, data, screen, config, navigator, history, action, handler, state, location, response, event, request, success, status, mutation, bindProps, store, options, getType, error, result, callback, params, utils, token, N) {
  "use strict";

  function queryData(exports) {
    return queryData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, queryData(exports)
  }

  function getter(exports, module) {
    var require = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var setTimeout = Object.getOwnPropertySymbols(exports);
      module && (setTimeout = setTimeout.filter((function (module) {
        return Object.getOwnPropertyDescriptor(exports, module).enumerable
      }))), require.push.apply(require, setTimeout)
    }
    return require
  }

  function user(exports) {
    for (var module = 1; module < arguments.length; module++) {
      var require = null != arguments[module] ? arguments[module] : {};
      module % 2 ? getter(Object(require), !0).forEach((function (module) {
        validateData(exports, module, require[module])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : getter(Object(require)).forEach((function (module) {
        Object.defineProperty(exports, module, Object.getOwnPropertyDescriptor(require, module))
      }))
    }
    return exports
  }

  function validateData(exports, module, require) {
    return (module = function (exports) {
      var module = function (exports, module) {
        if ("object" != queryData(exports) || !exports) return exports;
        var require = exports[Symbol.toPrimitive];
        if (void 0 !== require) {
          var setTimeout = require.call(exports, module || "default");
          if ("object" != queryData(setTimeout)) return setTimeout;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === module ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == queryData(module) ? module : module + ""
    }(module)) in exports ? Object.defineProperty(exports, module, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[module] = require, exports
  }
  var initialize = exports("../../../../../common/vendor.js");
  Math || (formatData + jsonParse + createStore + handleQueue)();
  var formatData = function () {
      return "./components/set-box.js"
    },
    jsonParse = function () {
      return "./components/book-info.js"
    },
    createStore = function () {
      return "./components/chapter-list.js"
    },
    handleQueue = function () {
      return "../queryData-popup/index.js"
    },
    U = initialize.defineComponent({
      __name: "setting",
      props: {
        toolsConfig: {
          default: function () {
            return []
          }
        }
      },
      emits: ["changeChapter"],
      setup: function (exports, module) {
        var require = module.emit,
          setTimeout = initialize.useStoreReader(),
          Promise = validateData(validateData(validateData({}, initialize.ToolButtonType.CATALOG, {
            iconLink: "icon-directory",
            activeIconLink: "icon-directory_selected",
            title: "目录",
            type: "catalog"
          }), initialize.ToolButtonType.THEME, {
            iconLink: "icon-theme-night",
            activeIconLink: "icon-theme-day",
            title: "夜间",
            activeTitle: "日间",
            type: "theme"
          }), initialize.ToolButtonType.SETTING, {
            iconLink: "icon-setting",
            activeIconLink: "icon-setting_selected",
            title: "设置",
            type: "setting"
          }),
          reject = require,
          setInterval = exports,
          clearTimeout = initialize.computed((function () {
            return !setTimeout.currentChapter.prev || !setTimeout.currentChapter.prev.id
          })),
          c = initialize.computed((function () {
            return !setTimeout.currentChapter.next || !setTimeout.currentChapter.next.id
          })),
          window = initialize.computed((function () {
            var exports = setTimeout.readerTheme,
              module = exports.bgColor,
              require = exports.color,
              Promise = exports.divideColor;
            return {
              backgroundColor: module,
              color: require,
              borderTop: "1px solid ".concat(Promise)
            }
          })),
          clearInterval = initialize.computed((function () {
            return setInterval.toolsConfig.map((function (exports) {
              return initialize.isString(exports) ? Promise[exports] : user(user({}, Promise[exports.type]), exports)
            }))
          })),
          document = initialize.computed((function () {
            var exports = setInterval.toolsConfig.find((function (exports) {
              return !initialize.isString(exports) && exports.type === initialize.ToolButtonType.SETTING
            }));
            return exports && !initialize.isString(exports) ? exports.components : []
          })),
          resolve = initialize.throttle({
            interval: 300
          }, (function (exports) {
            if (exports === initialize.ToolButtonType.THEME) {
              var module = setTimeout.readerStyle,
                require = module.name,
                Promise = module.prevName,
                reject = "dark" === require ? Promise : "dark";
              return setTimeout.setReaderStyle(user({
                name: reject
              }, initialize.skinConfigMap.get(reject))), void setTimeout.actionEvents.onMenuClick("theme", Promise)
            }
            var setInterval = !1,
              clearTimeout = !1;
            exports === initialize.ToolButtonType.CATALOG ? (setInterval = !setTimeout.menuStatus.calalogue, setTimeout.menuStatus.setting && setTimeout.actionEvents.onMenuStatusChange("setting", !1)) : exports === initialize.ToolButtonType.SETTING && (clearTimeout = !setTimeout.menuStatus.setting, setTimeout.actionEvents.onMenuStatusChange("setting", clearTimeout)), setTimeout.setMenuStatus("setting", clearTimeout), setTimeout.setMenuStatus("calalogue", setInterval)
          })),
          data = function (exports) {
            setTimeout.actionEvents.onMenuStatusChange("calalogue", exports), exports || setTimeout.setMenuStatus("calalogue", !1)
          },
          screen = function (exports) {
            return new Map([
              [initialize.ToolButtonType.SETTING, setTimeout.menuStatus.setting],
              [initialize.ToolButtonType.CATALOG, setTimeout.menuStatus.calalogue],
              [initialize.ToolButtonType.THEME, "dark" === setTimeout.readerStyle.name]
            ]).get(exports.type) ? exports.activeIconLink : exports.iconLink
          },
          config = function (exports) {
            return new Map([
              [initialize.ToolButtonType.SETTING, setTimeout.menuStatus.setting],
              [initialize.ToolButtonType.CATALOG, setTimeout.menuStatus.calalogue],
              [initialize.ToolButtonType.THEME, "dark" === setTimeout.readerStyle.name]
            ]).get(exports.type) && exports.activeTitle || exports.title
          },
          navigator = initialize.throttle({
            interval: 300
          }, (function (exports) {
            setTimeout.actionEvents.onMenuClick("btnChangeChapter", exports), "prev" === exports && clearTimeout.value || "next" === exports && c.value || reject("changeChapter", exports)
          }));
        return function (exports, module) {
          var require, Promise;
          return initialize.exports({
            setInterval: initialize.resolve(clearInterval.value, (function (exports, module, require) {
              return {
                setInterval: initialize.require(screen(exports)),
                state: initialize.module(config(exports)),
                c: module,
                navigator: initialize.setTimeout((function (module) {
                  return initialize.unref(resolve)(exports.type)
                }))
              }
            })),
            state: initialize.clearInterval(window.value),
            c: initialize.unref(setTimeout).menuStatus.menu ? 1 : "",
            navigator: null == (require = initialize.unref(setTimeout).readerConfig) ? void 0 : require.hasChangeChapterBtn
          }, (null == (Promise = initialize.unref(setTimeout).readerConfig) ? void 0 : Promise.hasChangeChapterBtn) ? {
            exports: clearTimeout.value ? initialize.unref(setTimeout).readerTheme.colorDarkGray : "",
            resolve: initialize.setTimeout((function (exports) {
              return initialize.unref(navigator)("prev")
            })),
            screen: c.value ? initialize.unref(setTimeout).readerTheme.colorDarkGray : "",
            location: initialize.setTimeout((function (exports) {
              return initialize.unref(navigator)("next")
            })),
            clearTimeout: initialize.clearInterval(window.value),
            success: initialize.unref(setTimeout).menuStatus.menu ? 1 : ""
          } : {}, {
            event: initialize.document({
              componentsConfig: document.value
            }),
            window: initialize.clearInterval(window.value),
            data: initialize.unref(setTimeout).menuStatus.setting ? 1 : "",
            require: initialize.unref(setTimeout).menuStatus.calalogue
          }, initialize.unref(setTimeout).menuStatus.calalogue ? {
            setTimeout: initialize.clearInterval(window.value)
          } : {}, {
            document: initialize.setTimeout((function (exports) {
              return data(!0)
            })),
            queryData: initialize.setTimeout((function (exports) {
              return data(!1)
            })),
            Promise: initialize.setTimeout((function (exports) {
              return initialize.unref(setTimeout).menuStatus.calalogue = exports
            })),
            clearInterval: initialize.document({
              contentStyle: {
                backgroundColor: initialize.unref(setTimeout).readerTheme.bgColor
              },
              isDark: "dark" === initialize.unref(setTimeout).readerStyle.name,
              modelValue: initialize.unref(setTimeout).menuStatus.calalogue
            })
          })
        }
      }
    }),
    watchChanges = initialize._export_sfc(U, [
      ["__scopeId", "data-history-d3078003"]
    ]);
  tt.createComponent(watchChanges)
}));
//# sourceMappingURL=setting.js.map
