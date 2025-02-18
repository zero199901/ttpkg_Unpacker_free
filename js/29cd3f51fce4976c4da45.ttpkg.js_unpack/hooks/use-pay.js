/**
 * 反编译并格式化的 JS 文件
 * 原始文件: hooks/use-pay.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("hooks/use-pay.js", (function (exports, Promise, module, require, setTimeout, setInterval, clearInterval, reject, clearTimeout, c, document, window, navigator, resolve, data, config, screen, history, utils, state, location, options, request, event, success, callback, error, user, handler, result, token, formatData, N, queryData, store, params, status, getType, mutation) {
  "use strict";

  function initialize(exports) {
    return initialize = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, initialize(exports)
  }

  function action(exports, Promise) {
    var module = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var require = Object.getOwnPropertySymbols(exports);
      Promise && (require = require.filter((function (Promise) {
        return Object.getOwnPropertyDescriptor(exports, Promise).enumerable
      }))), module.push.apply(module, require)
    }
    return module
  }

  function U(exports) {
    for (var Promise = 1; Promise < arguments.length; Promise++) {
      var module = null != arguments[Promise] ? arguments[Promise] : {};
      Promise % 2 ? action(Object(module), !0).forEach((function (Promise) {
        response(exports, Promise, module[Promise])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(module)) : action(Object(module)).forEach((function (Promise) {
        Object.defineProperty(exports, Promise, Object.getOwnPropertyDescriptor(module, Promise))
      }))
    }
    return exports
  }

  function response(exports, Promise, module) {
    return (Promise = function (exports) {
      var Promise = function (exports, Promise) {
        if ("object" != initialize(exports) || !exports) return exports;
        var module = exports[Symbol.toPrimitive];
        if (void 0 !== module) {
          var require = module.call(exports, Promise || "default");
          if ("object" != initialize(require)) return require;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === Promise ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == initialize(Promise) ? Promise : Promise + ""
    }(Promise)) in exports ? Object.defineProperty(exports, Promise, {
      value: module,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[Promise] = module, exports
  }

  function getter(exports, Promise, module, require, setInterval, clearInterval, reject) {
    try {
      var clearTimeout = exports[clearInterval](reject),
        c = clearTimeout.value
    } catch (exports) {
      return void module(exports)
    }
    clearTimeout.done ? Promise(c) : setTimeout.resolve(c).then(require, setInterval)
  }

  function validateData(exports) {
    return function () {
      var Promise = this,
        module = arguments;
      return new setTimeout((function (require, setTimeout) {
        var setInterval = exports.apply(Promise, module);

        function clearInterval(exports) {
          getter(setInterval, require, setTimeout, clearInterval, reject, "next", exports)
        }

        function reject(exports) {
          getter(setInterval, require, setTimeout, clearInterval, reject, "throw", exports)
        }
        clearInterval(void 0)
      }))
    }
  }
  var bindProps = exports("../common/vendor.js"),
    jsonParse = exports("../api/pay/index.js"),
    createStore = exports("../api/qm-statistics.js"),
    handleQueue = exports("../store/modules/global.js").useGlobalStore();
  module.usePay = function () {
    var exports, Promise, module = !1,
      require = bindProps.index.getSystemInfoSync().platform,
      clearInterval = function () {
        var Promise = validateData(regeneratorRuntime.mark((function Promise(module) {
          return regeneratorRuntime.wrap((function (Promise) {
            for (;;) switch (Promise.prev = Promise.next) {
              case 0:
                return Promise.abrupt("return", (console.log(module.data, "params"), new setTimeout((function (Promise, require) {
                  var setTimeout;
                  tt.requestOrder({
                    data: module.data,
                    byteAuthorization: module.byte_authorization,
                    success: (setTimeout = validateData(regeneratorRuntime.mark((function exports(setTimeout) {
                      var setInterval;
                      return regeneratorRuntime.wrap((function (exports) {
                        for (;;) switch (exports.prev = exports.next) {
                          case 0:
                            return exports.prev = 0, exports.next = 3, reject(setTimeout.orderId, module.trade_no);
                          case 3:
                            return setInterval = exports.sent, exports.abrupt("return", Promise(setInterval));
                          case 7:
                            return exports.prev = 7, exports.t0 = exports.catch(0), exports.abrupt("return", require(exports.t0));
                          case 10:
                          case "end":
                            return exports.stop()
                        }
                      }), exports, null, [
                        [0, 7]
                      ])
                    }))), function (exports) {
                      return setTimeout.apply(this, arguments)
                    }),
                    fail: function (Promise) {
                      console.log(Promise, "request-order-err"), document(module.trade_no), exports.track({
                        sensors: "Dypaid_RequestOrder_Fail"
                      }, {
                        err_no: String(Promise.errNo),
                        err_msg: Promise.errMsg,
                        log_id: Promise.errLogId,
                        trade_no: module.trade_no
                      }), 21050 === Promise.errNo ? require("iosNoSupportPay") : require("requestOrderFail")
                    }
                  })
                }))));
              case 1:
              case "end":
                return Promise.stop()
            }
          }), Promise)
        })));
        return function (exports) {
          return Promise.apply(this, arguments)
        }
      }(),
      reject = function () {
        var Promise = validateData(regeneratorRuntime.mark((function Promise(setInterval, clearInterval) {
          return regeneratorRuntime.wrap((function (Promise) {
            for (;;) switch (Promise.prev = Promise.next) {
              case 0:
                return Promise.abrupt("return", new setTimeout((function (Promise, setTimeout) {
                  var reject, c, window = {
                    orderId: setInterval
                  };
                  if ("ios" === require) {
                    if (!tt.canIUse("getOrderPayment.object.imId") || !tt.canIUse("getOrderPayment.object.immediate")) return document(clearInterval), setTimeout("updateDyVersion");
                    Object.assign(window, {
                      imId: handleQueue.appConfigInfo.im_id,
                      immediate: !1
                    })
                  }
                  tt.getOrderPayment(U(U({}, window), {}, {
                    success: (c = validateData(regeneratorRuntime.mark((function module(require) {
                      var reject;
                      return regeneratorRuntime.wrap((function (module) {
                        for (;;) switch (module.prev = module.next) {
                          case 0:
                            return document(clearInterval), console.log(require, "get-order-payment-suc"), exports.track({
                              sensors: "Dypaid_GetOrderPayment_Success"
                            }, {
                              order_id: require.orderId,
                              log_id: require.logId,
                              trade_no: clearInterval
                            }), module.prev = 1, module.next = 4, clearTimeout(setInterval, clearInterval);
                          case 4:
                            reject = module.sent, Promise(reject), module.next = 11;
                            break;
                          case 8:
                            module.prev = 8, module.t0 = module.catch(1), setTimeout(module.t0);
                          case 11:
                          case "end":
                            return module.stop()
                        }
                      }), module, null, [
                        [1, 8]
                      ])
                    }))), function (exports) {
                      return c.apply(this, arguments)
                    }),
                    fail: (reject = validateData(regeneratorRuntime.mark((function reject(c) {
                      var window, navigator, resolve;
                      return regeneratorRuntime.wrap((function (reject) {
                        for (;;) switch (reject.prev = reject.next) {
                          case 0:
                            if (exports.track({
                                sensors: "Dypaid_GetOrderPayment_Fail"
                              }, {
                                err_no: String(c.errNo),
                                err_msg: c.errMsg,
                                log_id: c.logId,
                                trade_no: clearInterval
                              }), console.log(c, "get-order-payment-err"), document(clearInterval), window = "android" === require && [1, 2, 9].includes(c.errNo), navigator = "ios" === require && !c.errMsg.includes("支付场景不符合"), !window && !navigator) {
                              reject.next = 16;
                              break
                            }
                            return module = !0, reject.prev = 4, reject.next = 7, clearTimeout(setInterval, clearInterval, c.errNo);
                          case 7:
                            resolve = reject.sent, Promise(resolve), reject.next = 14;
                            break;
                          case 11:
                            reject.prev = 11, reject.t0 = reject.catch(4), setTimeout(reject.t0);
                          case 14:
                            reject.next = 17;
                            break;
                          case 16:
                            "ios" !== require && 4 === c.errNo ? setTimeout("cancel") : setTimeout("requestOrderFail");
                          case 17:
                          case "end":
                            return reject.stop()
                        }
                      }), reject, null, [
                        [4, 11]
                      ])
                    }))), function (exports) {
                      return reject.apply(this, arguments)
                    })
                  }))
                })));
              case 1:
              case "end":
                return Promise.stop()
            }
          }), Promise)
        })));
        return function (exports, module) {
          return Promise.apply(this, arguments)
        }
      }(),
      clearTimeout = function () {
        var Promise = validateData(regeneratorRuntime.mark((function Promise(require, setInterval, clearInterval) {
          var reject, clearTimeout;
          return regeneratorRuntime.wrap((function (Promise) {
            for (;;) switch (Promise.prev = Promise.next) {
              case 0:
                return reject = 0, tt.showLoading({
                  title: "查询订单结果...",
                  mask: !0
                }), clearTimeout = function () {
                  var Promise = validateData(regeneratorRuntime.mark((function Promise() {
                    var window, navigator;
                    return regeneratorRuntime.wrap((function (Promise) {
                      for (;;) switch (Promise.prev = Promise.next) {
                        case 0:
                          if (reject++, console.log("调用第 ".concat(reject, " 次 API")), !(reject > 10)) {
                            Promise.next = 2;
                            break
                          }
                          return Promise.abrupt("return", (module && exports.track({
                            sensors: "Dypaid_Fail_Result"
                          }, {
                            err_no: String(clearInterval),
                            is_success: !1,
                            trade_no: setInterval
                          }), module = !1, document(setInterval), exports.track({
                            sensors: "Dypaid_Order_Result_Timeout"
                          }, {
                            trade_no: setInterval
                          }), setTimeout.reject("timeout")));
                        case 2:
                          return Promise.prev = 2, window = {
                            order_id: require,
                            trade_no: setInterval
                          }, Promise.next = 6, jsonParse.api_asset_pay_sync_result(window);
                        case 6:
                          if (navigator = Promise.sent, console.log(navigator, "API响应"), 4 !== navigator.state) {
                            Promise.next = 12;
                            break
                          }
                          Promise.t0 = (module && exports.track({
                            sensors: "Dypaid_Fail_Result"
                          }, {
                            err_no: String(clearInterval),
                            is_success: !0,
                            trade_no: setInterval
                          }), module = !1, document(setInterval), exports.track({
                            sensors: "Dypaid_Order_Result_Success"
                          }, {
                            trade_no: setInterval,
                            poll_count: String(reject)
                          }), setTimeout.resolve("success")), Promise.next = 15;
                          break;
                        case 12:
                          return Promise.next = 14, c(1e3);
                        case 14:
                          Promise.t0 = clearTimeout();
                        case 15:
                          return Promise.abrupt("return", Promise.t0);
                        case 18:
                          return Promise.prev = 18, Promise.t1 = Promise.catch(2), Promise.abrupt("return", (module && exports.track({
                            sensors: "Dypaid_Fail_Result"
                          }, {
                            err_no: String(clearInterval),
                            is_success: !1,
                            trade_no: setInterval
                          }), module = !1, console.error(Promise.t1, "API调用出错"), document(setInterval), setTimeout.reject("timeout")));
                        case 21:
                        case "end":
                          return Promise.stop()
                      }
                    }), Promise, null, [
                      [2, 18]
                    ])
                  })));
                  return function () {
                    return Promise.apply(this, arguments)
                  }
                }(), Promise.abrupt("return", clearTimeout());
              case 4:
              case "end":
                return Promise.stop()
            }
          }), Promise)
        })));
        return function (exports, module, require) {
          return Promise.apply(this, arguments)
        }
      }(),
      c = function (exports) {
        return new setTimeout((function (Promise) {
          return setInterval(Promise, exports)
        }))
      },
      document = function (Promise) {
        tt.hideLoading({
          fail: function () {
            tt.hideLoading(), exports.track({
              sensors: "Dypaid_HideLoading_Error"
            }, Promise ? {
              trade_no: Promise
            } : {})
          }
        })
      };
    return {
      dyPay: (Promise = validateData(regeneratorRuntime.mark((function Promise(module, require) {
        var setInterval, reject, clearTimeout, c;
        return regeneratorRuntime.wrap((function (Promise) {
          for (;;) switch (Promise.prev = Promise.next) {
            case 0:
              return Promise.prev = 0, exports = require, setInterval = U({}, module), reject = createStore.getServerParams(require), tt.showLoading({
                title: "正在获取订单",
                mask: !0
              }), Promise.next = 6, jsonParse.api_asset_pay(setInterval, reject);
            case 6:
              return clearTimeout = Promise.sent, Promise.prev = 7, Promise.next = 10, clearInterval(clearTimeout);
            case 10:
              return c = Promise.sent, Promise.abrupt("return", setTimeout.resolve(c));
            case 14:
              return Promise.prev = 14, Promise.t0 = Promise.catch(7), Promise.abrupt("return", setTimeout.reject(Promise.t0));
            case 17:
              Promise.next = 22;
              break;
            case 19:
              return Promise.prev = 19, Promise.t1 = Promise.catch(0), Promise.abrupt("return", (document(), setTimeout.reject("assetPayFail")));
            case 22:
            case "end":
              return Promise.stop()
          }
        }), Promise, null, [
          [0, 19],
          [7, 14]
        ])
      }))), function (exports, module) {
        return Promise.apply(this, arguments)
      })
    }
  }
}));
//# sourceMappingURL=use-pay.js.map
