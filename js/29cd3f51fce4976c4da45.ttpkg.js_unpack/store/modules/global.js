/**
 * 反编译并格式化的 JS 文件
 * 原始文件: store/modules/global.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("store/modules/global.js", (function (module, exports, require, setTimeout, Promise, clearTimeout, clearInterval, resolve, c, setInterval, reject, document, config, window, location, data, navigator, state, screen, history, result, request, success, options, handler, utils, error, watchChanges, response, token, status, getType, handleQueue, callback, bindProps, getter, event, mutation, N) {
  "use strict";

  function user(module) {
    return user = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (module) {
      return typeof module
    } : function (module) {
      return module && "function" == typeof Symbol && module.constructor === Symbol && module !== Symbol.prototype ? "symbol" : typeof module
    }, user(module)
  }

  function queryData(module, exports) {
    var require = Object.keys(module);
    if (Object.getOwnPropertySymbols) {
      var setTimeout = Object.getOwnPropertySymbols(module);
      exports && (setTimeout = setTimeout.filter((function (exports) {
        return Object.getOwnPropertyDescriptor(module, exports).enumerable
      }))), require.push.apply(require, setTimeout)
    }
    return require
  }

  function params(module) {
    for (var exports = 1; exports < arguments.length; exports++) {
      var require = null != arguments[exports] ? arguments[exports] : {};
      exports % 2 ? queryData(Object(require), !0).forEach((function (exports) {
        action(module, exports, require[exports])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(require)) : queryData(Object(require)).forEach((function (exports) {
        Object.defineProperty(module, exports, Object.getOwnPropertyDescriptor(require, exports))
      }))
    }
    return module
  }

  function action(module, exports, require) {
    return (exports = function (module) {
      var exports = function (module, exports) {
        if ("object" != user(module) || !module) return module;
        var require = module[Symbol.toPrimitive];
        if (void 0 !== require) {
          var setTimeout = require.call(module, exports || "default");
          if ("object" != user(setTimeout)) return setTimeout;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === exports ? String : Number)(module)
      }(module, "string");
      return "symbol" == user(exports) ? exports : exports + ""
    }(exports)) in module ? Object.defineProperty(module, exports, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : module[exports] = require, module
  }
  var initialize = module("../../common/vendor.js"),
    formatData = module("../../api/user/index.js"),
    jsonParse = {
      systemInfo: {},
      headerInfo: {},
      entryQuery: {},
      appConfigInfo: {}
    },
    createStore = initialize.defineStore("global-data", {
      state: function () {
        return jsonParse
      },
      actions: {
        getSystemInfo: function () {
          var module = initialize.index.getSystemInfoSync(),
            exports = params(params({}, module), {}, {
              isIos: "ios" === module.platform
            });
          console.log("--systeminfo", exports), this.systemInfo = exports
        },
        updateSystemInfo: function (module) {
          var exports = module.qm_sdk.get_params(),
            require = {
              app_version: exports.appversion,
              platform: this.systemInfo.platform,
              os_name: this.systemInfo.osName,
              device_brand: this.systemInfo.deviceBrand,
              device_model: this.systemInfo.deviceModel,
              screen_width: this.systemInfo.screenWidth,
              screen_height: this.systemInfo.screenHeight
            };
          this.systemInfo.appversion = exports.appversion, formatData.api_update_system_info({
            device_info: require
          })
        },
        getAppConfigInfo: function () {
          var module = this;
          return new Promise((function (exports, require) {
            formatData.api_config_info().then((function (require) {
              module.appConfigInfo = require || {}, exports(require)
            })).catch((function (module) {
              require(module)
            }))
          }))
        },
        getHeaderInfo: function () {
          var module = initialize.index.getMenuButtonBoundingClientRect(),
            exports = {};
          exports.totalHeight = module.top + module.height, exports.leftGap = this.systemInfo.windowWidth - module.right, exports.titleWidth = module.left - exports.leftGap - module.width;
          var require = this.systemInfo.screenWidth / 375;
          exports.threePointRight = module.width / 4 * 3 + exports.leftGap - 22 * require, exports.top = module.top, exports.left = module.left, exports.height = module.height, exports.leftWidth = module.width, console.log("--headerinfo", exports), this.headerInfo = exports
        },
        setEntryQuery: function (module) {
          this.entryQuery = params(params({}, this.entryQuery), module)
        }
      }
    });
  require.useGlobalStore = createStore
}));
//# sourceMappingURL=global.js.map
