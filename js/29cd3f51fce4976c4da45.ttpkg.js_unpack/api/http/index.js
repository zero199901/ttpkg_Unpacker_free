/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/http/index.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/http/index.js", (function (exports, module, require, Promise, setTimeout, clearTimeout, setInterval, reject, c, clearInterval, document, resolve, window, navigator, data, history, state, config, location, screen, request, user, handler, success, options, status, callback, event, error, response, store, result, params, action, token, N, U, validateData, utils) {
  "use strict";

  function getType(exports) {
    return getType = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, getType(exports)
  }

  function bindProps(exports, module) {
    var require = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var Promise = Object.getOwnPropertySymbols(exports);
      module && (Promise = Promise.filter((function (module) {
        return Object.getOwnPropertyDescriptor(exports, module).enumerable
      }))), require.push.apply(require, Promise)
    }
    return require
  }

  function queryData(exports) {
    for (var module = 1; module < arguments.length; module++) {
      var require = null != arguments[module] ? arguments[module] : {};
      module % 2 ? bindProps(Object(require), !0).forEach((function (module) {
        formatData(exports, module, require[module])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : bindProps(Object(require)).forEach((function (module) {
        Object.defineProperty(exports, module, Object.getOwnPropertyDescriptor(require, module))
      }))
    }
    return exports
  }

  function formatData(exports, module, require) {
    return (module = function (exports) {
      var module = function (exports, module) {
        if ("object" != getType(exports) || !exports) return exports;
        var require = exports[Symbol.toPrimitive];
        if (void 0 !== require) {
          var Promise = require.call(exports, module || "default");
          if ("object" != getType(Promise)) return Promise;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === module ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == getType(module) ? module : module + ""
    }(module)) in exports ? Object.defineProperty(exports, module, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[module] = require, exports
  }

  function initialize(exports, module, require, Promise, clearTimeout, setInterval, reject) {
    try {
      var c = exports[setInterval](reject),
        clearInterval = c.value
    } catch (exports) {
      return void require(exports)
    }
    c.done ? module(clearInterval) : setTimeout.resolve(clearInterval).then(Promise, clearTimeout)
  }

  function handleQueue(exports) {
    return function () {
      var module = this,
        require = arguments;
      return new setTimeout((function (Promise, setTimeout) {
        var clearTimeout = exports.apply(module, require);

        function setInterval(exports) {
          initialize(clearTimeout, Promise, setTimeout, setInterval, reject, "next", exports)
        }

        function reject(exports) {
          initialize(clearTimeout, Promise, setTimeout, setInterval, reject, "throw", exports)
        }
        setInterval(void 0)
      }))
    }
  }
  var getter = exports("../../common/vendor.js"),
    jsonParse = exports("../../store/modules/user.js"),
    createStore = exports("../../store/modules/global.js"),
    mutation = exports("./compensation-queue.js"),
    watchChanges = exports("../../hooks/use-login.js");
  exports("../../hooks/use-pay.js");
  var transformData = {
      SUCCESS: 200,
      RELOAD: 307,
      ERROR: 400,
      LOGIN: 401,
      FORBIDDEN: 403,
      CONFLICT: 409,
      SERVERERROR: 500,
      SERVICEUNAVAILABLE: 503
    },
    processEvent = new mutation.CompensationQueue;
  processEvent.onLogin = handleQueue(regeneratorRuntime.mark((function exports() {
    var module;
    return regeneratorRuntime.wrap((function (exports) {
      for (;;) switch (exports.prev = exports.next) {
        case 0:
          return module = watchChanges.useLogin(), jsonParse.useUserStore().set_token(""), exports.next = 4, module.refreshToken();
        case 4:
          processEvent.onLoginSuccess();
        case 5:
        case "end":
          return exports.stop()
      }
    }), exports)
  }))), processEvent.request = function () {
    var exports = handleQueue(regeneratorRuntime.mark((function exports(module) {
      var require;
      return regeneratorRuntime.wrap((function (exports) {
        for (;;) switch (exports.prev = exports.next) {
          case 0:
            return exports.prev = 0, exports.next = 3, setupConfig(module.params, module.method);
          case 3:
            require = exports.sent, module.resolve(require), exports.next = 10;
            break;
          case 7:
            exports.prev = 7, exports.t0 = exports.catch(0), module.reject(exports.t0);
          case 10:
          case "end":
            return exports.stop()
        }
      }), exports, null, [
        [0, 7]
      ])
    })));
    return function (module) {
      return exports.apply(this, arguments)
    }
  }();
  var setupConfig = function () {
    var exports = handleQueue(regeneratorRuntime.mark((function exports(module, require) {
      var Promise, setInterval, reject;
      return regeneratorRuntime.wrap((function (exports) {
        for (;;) switch (exports.prev = exports.next) {
          case 0:
            if (exports.t0 = null == (Promise = module.header) ? void 0 : Promise.noAppConfig, exports.t0) {
              exports.next = 4;
              break
            }
            return exports.next = 4, handleQueue(regeneratorRuntime.mark((function exports() {
              var module;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    module = createStore.useGlobalStore();
                  case 1:
                    if (module.appConfigInfo.promotion_type) {
                      exports.next = 6;
                      break
                    }
                    return exports.next = 4, new setTimeout((function (exports) {
                      clearTimeout(exports, 50)
                    }));
                  case 4:
                    exports.next = 1;
                    break;
                  case 6:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })))();
          case 4:
            return setInterval = jsonParse.useUserStore(), reject = createStore.useGlobalStore(), exports.abrupt("return", new setTimeout((function (exports, Promise) {
              var setTimeout, clearTimeout = module.url,
                c = module.data,
                clearInterval = module.header,
                document = reject.appConfigInfo,
                resolve = document.promotion_type,
                window = document.distributor_id;
              clearInterval = Object.assign({}, clearInterval, {
                Authorization: "Bearer ".concat(setInterval.token),
                platform: getter.index.getSystemInfoSync().platform,
                project: "reader_paid_dyminiapp",
                "app-id": "ttc6a8b015599fe90101",
                "last-channel": null !== (setTimeout = getter.index.getStorageSync("last-channel")) && void 0 !== setTimeout ? setTimeout : "",
                "promotion-type": null != resolve ? resolve : "",
                "distributor-id": String(null != window ? window : "")
              });
              var navigator = module.contentType || "application/json";
              /^http[clearInterval]?/.test(clearTimeout) || (clearTimeout = "https://new-media.xmkanshu.com" + clearTimeout);
              var data = {
                url: clearTimeout,
                data: c,
                method: require || "POST",
                header: queryData({
                  "content-type": navigator
                }, clearInterval),
                timeout: 1e4,
                success: function (setTimeout) {
                  var clearTimeout = setTimeout.data,
                    setInterval = clearTimeout.code,
                    reject = clearTimeout.msg,
                    c = clearTimeout.data;
                  setInterval !== transformData.SUCCESS ? setInterval !== transformData.LOGIN ? ([transformData.ERROR, transformData.SERVERERROR, transformData.SERVICEUNAVAILABLE].includes(setInterval) && getter.index.showToast({
                    title: setInterval === transformData.ERROR ? reject || "请求错误" : "请求异常",
                    icon: "none",
                    duration: 3e3
                  }), Promise(setTimeout.data)) : processEvent.add({
                    params: module,
                    method: require,
                    resolve: exports,
                    reject: Promise
                  }) : exports(c)
                },
                fail: function (exports) {
                  getter.index.hideLoading(), getter.index.showToast({
                    title: "网络错误",
                    icon: "none",
                    duration: 3e3
                  }), Promise(exports)
                }
              };
              getter.index.request(data)
            })));
          case 6:
          case "end":
            return exports.stop()
        }
      }), exports)
    })));
    return function (module, require) {
      return exports.apply(this, arguments)
    }
  }();
  require.get = function (exports) {
    return setupConfig({
      url: exports,
      data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      header: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    }, "GET")
  }, require.post = function (exports) {
    return setupConfig({
      url: exports,
      data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      header: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    }, "POST")
  }
}));
//# sourceMappingURL=index.js.map
