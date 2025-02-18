/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-panel/index.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-panel/index.js", (function (exports, require, module, Promise, setTimeout, clearTimeout, setInterval, c, reject, window, document, clearInterval, navigator, resolve, history, location, data, config, utils, screen, state, options, event, result, success, callback, handler, request, error, token, response, N, action, queryData, params, user, status, formatData, mutation) {
  "use strict";

  function validateData(exports) {
    return validateData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (exports) {
      return typeof exports
    } : function (exports) {
      return exports && "function" == typeof Symbol && exports.constructor === Symbol && exports !== Symbol.prototype ? "symbol" : typeof exports
    }, validateData(exports)
  }

  function $(exports, require) {
    return function (exports) {
      if (Array.isArray(exports)) return exports
    }(exports) || function (exports, require) {
      var module = null == exports ? null : "undefined" != typeof Symbol && exports[Symbol.iterator] || exports["@@iterator"];
      if (null != module) {
        var Promise, setTimeout, clearTimeout, setInterval, c = [],
          reject = !0,
          window = !1;
        try {
          if (clearTimeout = (module = module.call(exports)).next, 0 === require) {
            if (Object(module) !== module) return;
            reject = !1
          } else
            for (; !(reject = (Promise = clearTimeout.call(module)).done) && (c.push(Promise.value), c.length !== require); reject = !0);
        } catch (exports) {
          window = !0, setTimeout = exports
        } finally {
          try {
            if (!reject && null != module.return && (setInterval = module.return(), Object(setInterval) !== setInterval)) return
          } finally {
            if (window) throw setTimeout
          }
        }
        return c
      }
    }(exports, require) || function (exports, require) {
      if (exports) {
        if ("string" == typeof exports) return bindProps(exports, require);
        var module = {}.toString.call(exports).slice(8, -1);
        return "Object" === module && exports.constructor && (module = exports.constructor.name), "Map" === module || "Set" === module ? Array.from(exports) : "Arguments" === module || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(module) ? bindProps(exports, require) : void 0
      }
    }(exports, require) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function bindProps(exports, require) {
    (null == require || require > exports.length) && (require = exports.length);
    for (var module = 0, Promise = Array(require); module < require; module++) Promise[module] = exports[module];
    return Promise
  }

  function store(exports, require, module, Promise, clearTimeout, setInterval, c) {
    try {
      var reject = exports[setInterval](c),
        window = reject.value
    } catch (exports) {
      return void module(exports)
    }
    reject.done ? require(window) : setTimeout.resolve(window).then(Promise, clearTimeout)
  }

  function U(exports) {
    return function () {
      var require = this,
        module = arguments;
      return new setTimeout((function (Promise, setTimeout) {
        var clearTimeout = exports.apply(require, module);

        function setInterval(exports) {
          store(clearTimeout, Promise, setTimeout, setInterval, c, "next", exports)
        }

        function c(exports) {
          store(clearTimeout, Promise, setTimeout, setInterval, c, "throw", exports)
        }
        setInterval(void 0)
      }))
    }
  }

  function getType(exports, require) {
    var module = Object.keys(exports);
    if (Object.getOwnPropertySymbols) {
      var Promise = Object.getOwnPropertySymbols(exports);
      require && (Promise = Promise.filter((function (require) {
        return Object.getOwnPropertyDescriptor(exports, require).enumerable
      }))), module.push.apply(module, Promise)
    }
    return module
  }

  function initialize(exports) {
    for (var require = 1; require < arguments.length; require++) {
      var module = null != arguments[require] ? arguments[require] : {};
      require % 2 ? getType(Object(module), !0).forEach((function (require) {
        getter(exports, require, module[require])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(module)) : getType(Object(module)).forEach((function (require) {
        Object.defineProperty(exports, require, Object.getOwnPropertyDescriptor(module, require))
      }))
    }
    return exports
  }

  function getter(exports, require, module) {
    return (require = function (exports) {
      var require = function (exports, require) {
        if ("object" != validateData(exports) || !exports) return exports;
        var module = exports[Symbol.toPrimitive];
        if (void 0 !== module) {
          var Promise = module.call(exports, require || "default");
          if ("object" != validateData(Promise)) return Promise;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === require ? String : Number)(exports)
      }(exports, "string");
      return "symbol" == validateData(require) ? require : require + ""
    }(require)) in exports ? Object.defineProperty(exports, require, {
      value: module,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : exports[require] = module, exports
  }
  var jsonParse = exports("../../common/vendor.js"),
    createStore = exports("../../api/pay/index.js");
  exports("../../hooks/use-login.js");
  var handleQueue = exports("../../hooks/use-pay.js");
  Math || (watchChanges + transformData + ee + processEvent + setupConfig)();
  var watchChanges = function () {
      return "./components/panel-header.js"
    },
    transformData = function () {
      return "../qm-pay-card/index.js"
    },
    processEvent = function () {
      return "./components/purchase-tips.js"
    },
    setupConfig = function () {
      return "./components/purchase-panel.js"
    },
    ee = function () {
      return "../../node-modules/@repo/qm-components/src/queryData-theme-overlay/index.js"
    },
    ne = jsonParse.defineComponent({
      __name: "index",
      props: {
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        pageName: {
          type: String,
          default: ""
        },
        isScrollStuck: {
          type: Boolean,
          default: !0
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      emits: ["paySuccess", "payFail"],
      setup: function (exports, require) {
        var module, Promise = require.emit,
          setTimeout = jsonParse.inject("qmsa"),
          setInterval = handleQueue.usePay().dyPay,
          c = jsonParse.reactive({
            panelInfo: {}
          }),
          reject = jsonParse.getCurrentInstance(),
          window = jsonParse.ref(!1),
          document = jsonParse.ref(!1),
          clearInterval = exports,
          navigator = jsonParse.computed((function () {
            var exports;
            return "#0A0A0A" === (null == (exports = clearInterval.skinConfig) ? void 0 : exports.bgColor)
          })),
          resolve = jsonParse.computed((function () {
            var exports, require;
            return (null == (require = null == (exports = c.panelInfo) ? void 0 : exports.panel) ? void 0 : require.items) || []
          }));

        function history(exports, require) {
          var module, Promise, clearTimeout, setInterval, reject, window, document, navigator, resolve, history, location, data, config = {
              book_id: String(null == (module = clearInterval.chapterInfo) ? void 0 : module.book_id),
              sort_id: Number(null == (clearTimeout = null == (Promise = clearInterval.chapterInfo) ? void 0 : Promise.chapter) ? void 0 : clearTimeout.num),
              chapter_id: String(null == (reject = null == (setInterval = clearInterval.chapterInfo) ? void 0 : setInterval.chapter) ? void 0 : reject.id),
              page: "reader",
              fiction_type: String(null == (window = clearInterval.chapterInfo) ? void 0 : window.fiction_type)
            },
            utils = {
              click: {
                eventName: {
                  qm: "reader_charge_#_click",
                  sensors: "Dypaid_Element_Click"
                },
                property: initialize(initialize({}, config), {}, {
                  panel_id: String(null == (navigator = null == (document = c.panelInfo) ? void 0 : document.panel) ? void 0 : navigator.id),
                  amount: Number(null == require ? void 0 : require.recharge_amount),
                  position: "charge"
                })
              },
              view: {
                eventName: {
                  qm: "reader_charge_#_view",
                  sensors: "Dypaid_Page_View"
                },
                property: initialize(initialize({}, config), {}, {
                  panel_id: String(null == (history = null == (resolve = c.panelInfo) ? void 0 : resolve.panel) ? void 0 : history.id),
                  position: "charge"
                })
              },
              rechargeSuccess: {
                eventName: {
                  qm: "reader_charge-succeed_#_result",
                  sensors: "Dypaid_General_Result"
                },
                property: initialize(initialize({}, config), {}, {
                  panel_id: String(null == (data = null == (location = c.panelInfo) ? void 0 : location.panel) ? void 0 : data.id),
                  amount: Number(null == require ? void 0 : require.recharge_amount),
                  pay_way: "douyin",
                  position: "charge-succeed"
                })
              },
              show: {
                eventName: {
                  qm: "reader_unlock_#_show",
                  sensors: "Dypaid_Element_Show"
                },
                property: initialize(initialize({}, config), {}, {
                  position: "unlock"
                })
              }
            };
          utils[exports] && setTimeout.track(utils[exports].eventName, utils[exports].property)
        }
        return jsonParse.watch((function () {
            return clearInterval.chapterInfo
          }), U(regeneratorRuntime.mark((function exports() {
            var require, Promise;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  if (document.value = !1, exports.t0 = 1 === (null == (Promise = null == (require = clearInterval.chapterInfo) ? void 0 : require.chapter_paid) ? void 0 : Promise.show_type), !exports.t0) {
                    exports.next = 5;
                    break
                  }
                  return exports.next = 5, U(regeneratorRuntime.mark((function exports() {
                    var require, module, Promise;
                    return regeneratorRuntime.wrap((function (exports) {
                      for (;;) switch (exports.prev = exports.next) {
                        case 0:
                          return module = {
                            book_id: null == (require = clearInterval.chapterInfo) ? void 0 : require.book_id,
                            recharge_page_name: "reader_reader"
                          }, exports.next = 3, createStore.api_config_recharge_panel(module);
                        case 3:
                          Promise = exports.sent, c.panelInfo = Promise;
                        case 5:
                        case "end":
                          return exports.stop()
                      }
                    }), exports)
                  })))();
                case 5:
                  return exports.next = 7, jsonParse.nextTick$1();
                case 7:
                  document.value = !0, U(regeneratorRuntime.mark((function exports() {
                    return regeneratorRuntime.wrap((function (exports) {
                      for (;;) switch (exports.prev = exports.next) {
                        case 0:
                          return exports.next = 2, jsonParse.nextTick$1();
                        case 2:
                          module && module.disconnect(), (module = jsonParse.index.createIntersectionObserver(reject)).relativeToViewport().observe(".js-observer-panel", (function (exports) {
                            window.value = exports.intersectionRatio > 0
                          }));
                        case 5:
                        case "end":
                          return exports.stop()
                      }
                    }), exports)
                  })))();
                case 9:
                case "end":
                  return exports.stop()
              }
            }), exports)
          }))), {
            immediate: !0,
            deep: !0
          }), jsonParse.watch([window, document], (function (exports) {
            var require, module, Promise = $(exports, 2),
              setTimeout = Promise[0],
              clearTimeout = Promise[1];
            if (setTimeout && clearTimeout) {
              var setInterval = null == (module = null == (require = clearInterval.chapterInfo) ? void 0 : require.chapter_paid) ? void 0 : module.show_type;
              1 === setInterval ? (console.log("=====view====="), history("view")) : 2 === setInterval && (console.log("=====show====="), history("show"))
            }
          })), jsonParse.onMounted((function () {
            jsonParse.provide("qmPayPanel", reject)
          })), jsonParse.onBeforeUnmount((function () {
            module && module.disconnect()
          })),
          function (require, module) {
            var reject, window, document, location, data, config, utils, screen, state, options, event;
            return jsonParse.exports({
              setInterval: 1 === (null == (window = null == (reject = exports.chapterInfo) ? void 0 : reject.chapter_paid) ? void 0 : window.show_type)
            }, 1 === (null == (location = null == (document = exports.chapterInfo) ? void 0 : document.chapter_paid) ? void 0 : location.show_type) ? jsonParse.exports({
              state: jsonParse.document({
                firstRecharge: null == (data = c.panelInfo) ? void 0 : data.user_first_recharge,
                chapterInfo: exports.chapterInfo,
                skinConfig: exports.skinConfig
              }),
              c: resolve.value.length
            }, resolve.value.length ? {
              navigator: jsonParse.resolve(resolve.value, (function (exports, require, module) {
                return {
                  setInterval: jsonParse.setTimeout((function () {
                    return (require = U(regeneratorRuntime.mark((function exports(require) {
                      var module, reject, window, document, navigator, resolve, location, data, config, utils;
                      return regeneratorRuntime.wrap((function (exports) {
                        for (;;) switch (exports.prev = exports.next) {
                          case 0:
                            return history("click", require), config = {
                              pay_type: "douyin",
                              panel_id: c.panelInfo.panel.id,
                              panel_item_id: require.id,
                              panel_type: 0,
                              book_id: null == (module = clearInterval.chapterInfo) ? void 0 : module.book_id,
                              chapter_id: null == (window = null == (reject = clearInterval.chapterInfo) ? void 0 : reject.chapter) ? void 0 : window.id,
                              chapter_num: null == (navigator = null == (document = clearInterval.chapterInfo) ? void 0 : document.chapter) ? void 0 : navigator.num,
                              new_media_fiction_type: null == (resolve = clearInterval.chapterInfo) ? void 0 : resolve.fiction_type,
                              recharge_page_name: clearInterval.pageName
                            }, utils = {
                              bookId: config.book_id,
                              chapterId: config.chapter_id,
                              chapterNum: null == (data = null == (location = clearInterval.chapterInfo) ? void 0 : location.chapter) ? void 0 : data.num
                            }, exports.prev = 2, exports.next = 5, setInterval(config, setTimeout);
                          case 5:
                            if (exports.t0 = exports.sent, exports.t1 = "success" === exports.t0, !exports.t1) {
                              exports.next = 9;
                              break
                            }
                            clearTimeout((function () {
                              jsonParse.index.hideLoading()
                            }), 100), Promise("paySuccess", utils), history("rechargeSuccess", require);
                          case 9:
                            exports.next = 14;
                            break;
                          case 11:
                            exports.prev = 11, exports.t2 = exports.catch(2), clearTimeout((function () {
                              switch (exports.t2) {
                                case "cancel":
                                  jsonParse.index.showToast({
                                    title: "支付已取消",
                                    icon: "none"
                                  });
                                  break;
                                case "assetPayFail":
                                  jsonParse.index.showToast({
                                    title: "下单失败",
                                    icon: "none"
                                  });
                                  break;
                                case "requestOrderFail":
                                  jsonParse.index.showToast({
                                    title: "支付失败",
                                    icon: "none"
                                  });
                                  break;
                                case "timeout":
                                  jsonParse.index.showToast({
                                    title: "订单结果获取失败，请稍后重试",
                                    icon: "none"
                                  }), Promise("payFail", utils);
                                  break;
                                case "iosNoSupportPay":
                                  jsonParse.index.showToast({
                                    title: "IOS暂不支持支付",
                                    icon: "none"
                                  });
                                  break;
                                case "updateDyVersion":
                                  jsonParse.index.showToast({
                                    title: "请更新抖音版本",
                                    icon: "none"
                                  });
                                  break;
                                default:
                                  jsonParse.index.hideLoading()
                              }
                              console.log(exports.t2, "err")
                            }), 100);
                          case 14:
                          case "end":
                            return exports.stop()
                        }
                      }), exports, null, [
                        [2, 11]
                      ])
                    }))), function (exports) {
                      return require.apply(this, arguments)
                    })(exports);
                    var require
                  })),
                  state: "a5a2e6c5-2-" + module + ",a5a2e6c5-1-" + module,
                  c: jsonParse.document({
                    kind: exports.kind,
                    rechargeAmount: exports.recharge_amount,
                    rechargeCoin: exports.recharge_coin,
                    givingAmount: exports.giving_amount,
                    givingCoin: exports.giving_coin,
                    tag: exports.tag,
                    tagType: exports.tag_type,
                    vipTip: exports.vip_tip,
                    vipDesc: exports.vip_desc,
                    bottomDesc: exports.bottom_desc,
                    vipDailyPrice: exports.vip_daily_price,
                    vipOriginPrice: exports.vip_origin_price,
                    isActive: exports.is_default,
                    isDark: navigator.value
                  }),
                  navigator: "a5a2e6c5-1-" + module,
                  exports: exports.id
                }
              })),
              exports: jsonParse.document({
                isDark: navigator.value
              })
            } : {}, {
              resolve: jsonParse.document({
                isDark: navigator.value
              })
            }) : {}, {
              screen: 2 === (null == (utils = null == (config = exports.chapterInfo) ? void 0 : config.chapter_paid) ? void 0 : utils.show_type)
            }, 2 === (null == (state = null == (screen = exports.chapterInfo) ? void 0 : screen.chapter_paid) ? void 0 : state.show_type) ? {
              location: jsonParse.document({
                chapterInfo: exports.chapterInfo,
                skinConfig: exports.skinConfig
              })
            } : {}, {
              clearTimeout: jsonParse.require(exports.isScrollStuck || (null == (event = null == (options = exports.chapterInfo) ? void 0 : options.chapter) ? void 0 : event.content) ? "" : "qm-pay-panel-fixed")
            })
          }
      }
    }),
    te = jsonParse._export_sfc(ne, [
      ["__scopeId", "data-history-a5a2e6c5"]
    ]);
  tt.createComponent(te)
}));
//# sourceMappingURL=index.js.map
