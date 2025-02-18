/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/qm-statistics.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/qm-statistics.js", (function (exports, require, Promise, module, setTimeout, setInterval, clearTimeout, c, clearInterval, reject, document, window, navigator, resolve, data, history, config, location, state, screen, utils, success, handler, options, event, request, queryData, params, error, callback, status, result, user, token, store, getter, U, response, mutation) {
  "use strict";

  function action(exports) {
    return action = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, action(exports)
  }

  function initialize(exports) {
    return function (exports) {
      if (Array.isArray(exports)) return handleQueue(exports)
    }(exports) || function (exports) {
      if ("undefined" != typeof Symbol && null != exports[Symbol.iterator] || null != exports["@@iterator"]) return Array.from(exports)
    }(exports) || function (exports, require) {
      if (exports) {
        if ("string" == typeof exports) return handleQueue(exports, require);
        var Promise = {}.toString.call(exports).slice(8, -1);
        return "Object" === Promise && exports.constructor && (Promise = exports.constructor.name), "Map" === Promise || "Set" === Promise ? Array.from(exports) : "Arguments" === Promise || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(Promise) ? handleQueue(exports, require) : void 0
      }
    }(exports) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function handleQueue(exports, require) {
    (null == require || require > exports.length) && (require = exports.length);
    for (var Promise = 0, module = Array(require); Promise < require; Promise++) module[Promise] = exports[Promise];
    return module
  }

  function watchChanges(exports, require) {
    var Promise = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var module = Object.getOwnPropertySymbols(exports);
      require && (module = module.filter((function (require) {
        return Object.getOwnPropertyDescriptor(exports, require).enumerable
      }))), Promise.push.apply(Promise, module)
    }
    return Promise
  }

  function formatData(exports) {
    for (var require = 1; require < arguments.length; require++) {
      var Promise = null != arguments[require] ? arguments[require] : {};
      require % 2 ? watchChanges(Object(Promise), !0).forEach((function (require) {
        getType(exports, require, Promise[require])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(Promise)) : watchChanges(Object(Promise)).forEach((function (require) {
        Object.defineProperty(exports, require, Object.getOwnPropertyDescriptor(Promise, require))
      }))
    }
    return exports
  }

  function getType(exports, require, Promise) {
    return (require = function (exports) {
      var require = function (exports, require) {
        if ("object" != action(exports) || !exports) return exports;
        var Promise = exports[Symbol.toPrimitive];
        if (void 0 !== Promise) {
          var module = Promise.call(exports, require || "default");
          if ("object" != action(module)) return module;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === require ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == action(require) ? require : require + ""
    }(require)) in exports ? Object.defineProperty(exports, require, {
      value: Promise,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[require] = Promise, exports
  }

  function N(exports, require, Promise, module, setInterval, clearTimeout, c) {
    try {
      var clearInterval = exports[clearTimeout](c),
        reject = clearInterval.value
    } catch (exports) {
      return void Promise(exports)
    }
    clearInterval.done ? require(reject) : setTimeout.resolve(reject).then(module, setInterval)
  }

  function $(exports) {
    return function () {
      var require = this,
        Promise = arguments;
      return new setTimeout((function (module, setTimeout) {
        var setInterval = exports.apply(require, Promise);

        function clearTimeout(exports) {
          N(setInterval, module, setTimeout, clearTimeout, c, "next", exports)
        }

        function c(exports) {
          N(setInterval, module, setTimeout, clearTimeout, c, "throw", exports)
        }
        clearTimeout(void 0)
      }))
    }
  }
  var bindProps = exports("../common/vendor.js"),
    jsonParse = exports("../store/index.js"),
    createStore = exports("../mixin/share.js"),
    validateData = exports("../hooks/use-login.js");
  exports("../hooks/use-pay.js");
  var transformData = exports("../store/modules/global.js");
  Math;
  var processEvent = bindProps.reactive({}),
    setupConfig = [];

  function ee(exports) {
    var require = [];
    for (var Promise in exports) require.push("".concat(Promise, "=").concat(encodeURIComponent(exports[Promise])));
    return require.join("&")
  }
  var ne = {
      __name: "App",
      setup: function (exports) {
        var require = validateData.useLogin(),
          Promise = transformData.useGlobalStore();
        return bindProps.onLaunch(function () {
            var exports = $(regeneratorRuntime.mark((function exports(module) {
              var setTimeout, setInterval;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return setTimeout = module.query, console.log("App Lauch", setTimeout), Promise.getSystemInfo(), Promise.getHeaderInfo(), bindProps.index.hideShareMenu(), tt.disableUserScreenRecord(), Object.assign(processEvent, {
                      track: function () {
                        for (var exports = arguments.length, require = new Array(exports), Promise = 0; Promise < exports; Promise++) require[Promise] = arguments[Promise];
                        setupConfig.push(require)
                      }
                    }), te.provide("qmsa", processEvent), setInterval = processEvent, exports.next = 5, $(regeneratorRuntime.mark((function exports() {
                      var require, Promise, module, setTimeout, setInterval, clearTimeout, c, clearInterval = arguments;
                      return regeneratorRuntime.wrap((function (exports) {
                        for (;;) switch (exports.prev = exports.next) {
                          case 0:
                            return require = "reader_paid_dyminiapp", Promise = "ttc6a8b015599fe90101", module = (clearInterval.length > 0 && void 0 !== clearInterval[0] ? clearInterval[0] : {}).channel || "rd-default", setTimeout = {
                              qm: {
                                waitLoginEnd: !0,
                                show_log: !0,
                                qmkey: "6528j4pbr2h85fodbu3n1neomgesj0tp",
                                project: require,
                                mp_app_id: Promise,
                                channel: module,
                                server_url: "https://drs.wtzw.com/frontend",
                                environment: {
                                  debugmode: 0
                                }
                              },
                              sensors: {
                                name: "sensors",
                                server_url: "https://qm-data.wtzw.com/sa?project=demand_side_platform",
                                autoTrack: {
                                  appLaunch: !0,
                                  appShow: !0,
                                  appHide: !0,
                                  pageShow: !0,
                                  pageShare: !0,
                                  mpClick: !1,
                                  mpFavorite: !0,
                                  pageLeave: !1
                                },
                                show_log: !0
                              }
                            }, exports.next = 7, bindProps.setInterval(setTimeout);
                          case 7:
                            return setInterval = exports.sent, clearTimeout = setInterval.qm_sdk.get_params(), c = clearTimeout.appversion, exports.abrupt("return", (setInterval.register_public({
                              pub_project: require,
                              mp_app_id: Promise,
                              channel: module,
                              appversion: c
                            }, "sensors"), Object.assign(processEvent, setInterval), te.provide("qmsa", processEvent), setInterval));
                          case 11:
                          case "end":
                            return exports.stop()
                        }
                      }), exports)
                    })))(setTimeout);
                  case 5:
                    setInterval = exports.sent, require.init(setInterval);
                  case 7:
                  case "end":
                    return exports.stop()
                }
              }), exports)
            })));
            return function (require) {
              return exports.apply(this, arguments)
            }
          }()), bindProps.onShow((function () {
            var exports = bindProps.index.getEnterOptionsSync(),
              require = exports.scene,
              module = exports.query;
            console.log("App Show", require, module), module.channel && bindProps.index.setStorageSync("last-channel", module.channel), module.channel && module.channel !== Promise.entryQuery.channel && function (exports, require) {
              (null == exports ? void 0 : exports.qm_sdk) && (exports.qm_sdk.set_identity({
                mktparams: ee(require)
              }), exports.qm_sdk.set_environment({
                channel: require.channel
              }), exports.register_public({
                channel: require.channel
              }, "sensors"))
            }(bindProps.inject("qmsa"), module), Promise.setEntryQuery(formatData(formatData({}, module), {}, {
              scene: require
            }))
          })), bindProps.onHide((function () {
            console.log("App Hide")
          })), bindProps.onExit((function () {
            tt.enableUserScreenRecord()
          })),
          function () {}
      }
    },
    re = function () {
      return "../components/qm-icon/index.js"
    },
    te = bindProps.createSSRApp(ne);

  function oe() {
    return te.mixin(createStore.share), te.component("qmIcon", re), te.use(jsonParse.store), {
      app: te
    }
  }
  oe().app.mount("#app"), Promise.app = te, Promise.createApp = oe, Promise.getServerParams = function (exports) {
    var require = exports.qm_sdk.get_params();
    return (null == require ? void 0 : require.appversion) && (null == require ? void 0 : require.channel) || exports.sensors_sdk.track("Dypaid_Sdk_Error", {
      error_log: "请检查serverParams，" + (require ? "appversion:".concat(require.appversion, "，channel:").concat(require.channel) : "没有获取到sdk的params")
    }), {
      "app-version": null == require ? void 0 : require.appversion,
      channel: null == require ? void 0 : require.channel
    }
  }, Promise.statisticsInitParams = function (exports, require) {
    var Promise = console.error;
    console.error = function () {
      for (var require = arguments.length, module = new Array(require), setTimeout = 0; setTimeout < require; setTimeout++) module[setTimeout] = arguments[setTimeout];
      Promise.apply(console, module);
      var setInterval = module.join("。");
      (setInterval.startsWith("请设置日志") || setInterval.startsWith("请在identity中设置")) && exports.sensors_sdk.track("Dypaid_Sdk_Error", {
        error_log: setInterval
      })
    }, exports.qm_sdk.set_identity(formatData(formatData({}, require), {}, {
      accountid: require.accountid,
      openid: require.openid,
      unionid: require.unionid,
      uid: require.openid
    })), exports.register_public({
      openid: require.openid,
      unionid: require.unionid
    }, "sensors"), exports.login(require.accountid), setupConfig.length > 0 && (setupConfig.forEach((function (require) {
      exports.track.apply(exports, initialize(require))
    })), setupConfig = [])
  }
}));
//# sourceMappingURL=qm-statistics.js.map
