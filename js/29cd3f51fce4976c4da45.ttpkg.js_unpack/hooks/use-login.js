/**
 * 反编译并格式化的 JS 文件
 * 原始文件: hooks/use-login.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("hooks/use-login.js", (function (exports, require, module, Promise, clearTimeout, setTimeout, reject, setInterval, clearInterval, c, resolve, window, document, navigator, screen, history, data, state, config, location, callback, event, utils, options, handler, success, params, result, user, store, request, action, U, response, mutation, error, queryData, status, getType) {
  "use strict";

  function $(exports, require) {
    return function (exports) {
      if (Array.isArray(exports)) return exports
    }(exports) || function (exports, require) {
      var module = null == exports ? null : "undefined" != typeof Symbol && exports[Symbol.iterator] || exports["@@iterator"];
      if (null != module) {
        var Promise, clearTimeout, setTimeout, reject, setInterval = [],
          clearInterval = !0,
          c = !1;
        try {
          if (setTimeout = (module = module.call(exports)).next, 0 === require) {
            if (Object(module) !== module) return;
            clearInterval = !1
          } else
            for (; !(clearInterval = (Promise = setTimeout.call(module)).done) && (setInterval.push(Promise.value), setInterval.length !== require); clearInterval = !0);
        } catch (exports) {
          c = !0, clearTimeout = exports
        } finally {
          try {
            if (!clearInterval && null != module.return && (reject = module.return(), Object(reject) !== reject)) return
          } finally {
            if (c) throw clearTimeout
          }
        }
        return setInterval
      }
    }(exports, require) || function (exports, require) {
      if (exports) {
        if ("string" == typeof exports) return initialize(exports, require);
        var module = {}.toString.call(exports).slice(8, -1);
        return "Object" === module && exports.constructor && (module = exports.constructor.name), "Map" === module || "Set" === module ? Array.from(exports) : "Arguments" === module || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(module) ? initialize(exports, require) : void 0
      }
    }(exports, require) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function initialize(exports, require) {
    (null == require || require > exports.length) && (require = exports.length);
    for (var module = 0, Promise = Array(require); module < require; module++) Promise[module] = exports[module];
    return Promise
  }

  function bindProps(exports, require, module, Promise, setTimeout, reject, setInterval) {
    try {
      var clearInterval = exports[reject](setInterval),
        c = clearInterval.value
    } catch (exports) {
      return void module(exports)
    }
    clearInterval.done ? require(c) : clearTimeout.resolve(c).then(Promise, setTimeout)
  }

  function token(exports) {
    return function () {
      var require = this,
        module = arguments;
      return new clearTimeout((function (Promise, clearTimeout) {
        var setTimeout = exports.apply(require, module);

        function reject(exports) {
          bindProps(setTimeout, Promise, clearTimeout, reject, setInterval, "next", exports)
        }

        function setInterval(exports) {
          bindProps(setTimeout, Promise, clearTimeout, reject, setInterval, "throw", exports)
        }
        reject(void 0)
      }))
    }
  }
  var formatData = exports("../common/vendor.js"),
    getter = exports("../store/modules/user.js"),
    jsonParse = exports("../store/modules/global.js"),
    createStore = exports("../api/qm-statistics.js");
  module.useLogin = function () {
    var exports = function (exports) {
        formatData.index.showToast({
          icon: "none",
          title: exports
        }), setTimeout((function () {
          formatData.index.exitMiniProgram()
        }), 1500)
      },
      require = function () {
        var require = token(regeneratorRuntime.mark((function require(module) {
          var Promise, setTimeout, reject, setInterval, clearInterval, c;
          return regeneratorRuntime.wrap((function (require) {
            for (;;) switch (require.prev = require.next) {
              case 0:
                if (Promise = jsonParse.useGlobalStore(), !(setTimeout = getter.useUserStore()).isLogining) {
                  require.next = 3;
                  break
                }
                return require.abrupt("return");
              case 3:
                if (formatData.index.getStorageSync("token")) {
                  require.next = 13;
                  break
                }
                return setTimeout.set_is_logining(!0), require.prev = 5, require.next = 8, setTimeout.login();
              case 8:
                require.next = 13;
                break;
              case 10:
                return require.prev = 10, require.t0 = require.catch(5), require.abrupt("return", void exports("请登录再进入小程序"));
              case 13:
                return require.prev = 13, require.next = 16, clearTimeout.all([setTimeout.update_user_info(), Promise.getAppConfigInfo()]);
              case 16:
                reject = require.sent, setInterval = $(reject, 2), clearInterval = setInterval[0], c = setInterval[1], Promise.updateSystemInfo(module), module && createStore.statisticsInitParams(module, {
                  accountid: clearInterval.uid,
                  openid: clearInterval.openid,
                  unionid: clearInterval.unionid,
                  promotiontype: c.promotion_type,
                  distributor_id: c.distributor_id
                }), setTimeout.set_is_logining(!1), require.next = 26;
                break;
              case 23:
                require.prev = 23, require.t1 = require.catch(13), exports("小程序异常，请稍后重试");
              case 26:
              case "end":
                return require.stop()
            }
          }), require, null, [
            [5, 10],
            [13, 23]
          ])
        })));
        return function (exports) {
          return require.apply(this, arguments)
        }
      }(),
      module = function () {
        var exports = token(regeneratorRuntime.mark((function exports() {
          var Promise;
          return regeneratorRuntime.wrap((function (exports) {
            for (;;) switch (exports.prev = exports.next) {
              case 0:
                if ((Promise = getter.useUserStore()).token) {
                  exports.next = 13;
                  break
                }
                if (!Promise.isLogining) {
                  exports.next = 4;
                  break
                }
                return exports.abrupt("return", new clearTimeout((function (exports) {
                  setTimeout(token(regeneratorRuntime.mark((function require() {
                    return regeneratorRuntime.wrap((function (require) {
                      for (;;) switch (require.prev = require.next) {
                        case 0:
                          return require.next = 2, module();
                        case 2:
                          exports(!0);
                        case 3:
                        case "end":
                          return require.stop()
                      }
                    }), require)
                  }))), 100)
                })));
              case 4:
                if (Promise.userInfo.uid) {
                  exports.next = 9;
                  break
                }
                return Promise.set_token(""), exports.next = 8, require("");
              case 8:
                return exports.abrupt("return", void exports.sent);
              case 9:
                return Promise.set_is_logining(!0), exports.next = 12, Promise.login();
              case 12:
                Promise.set_is_logining(!1);
              case 13:
              case "end":
                return exports.stop()
            }
          }), exports)
        })));
        return function () {
          return exports.apply(this, arguments)
        }
      }();
    return {
      init: require,
      refreshToken: module
    }
  }
}));
//# sourceMappingURL=use-login.js.map
