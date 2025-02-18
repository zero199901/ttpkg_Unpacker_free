/**
 * 反编译并格式化的 JS 文件
 * 原始文件: components/qm-pay-card/index.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("components/qm-pay-card/index.js", (function (exports, clearTimeout, module, require, Promise, setInterval, setTimeout, c, document, reject, history, screen, navigator, window, clearInterval, data, resolve, config, handler, location, event, params, utils, error, token, request, response, state, action, N, success, mutation, queryData, callback, result, bindProps, options, getType, initialize) {
  "use strict";
  var status = exports("../../common/vendor.js"),
    formatData = exports("../../common/assets.js"),
    getter = exports("../../store/modules/global.js");
  Array || status.resolveComponent("template")(), Math || jsonParse();
  var jsonParse = function () {
      return "./components/guide-hand.js"
    },
    createStore = status.defineComponent({
      __name: "index",
      props: {
        pageSource: {
          type: String,
          default: "reader_reader"
        },
        isActive: {
          type: Boolean,
          default: !1
        },
        kind: {
          type: Number,
          default: 0
        },
        rechargeAmount: {
          type: String,
          default: ""
        },
        rechargeCoin: {
          type: String,
          default: ""
        },
        givingAmount: {
          type: String,
          default: ""
        },
        givingCoin: {
          type: String,
          default: ""
        },
        tag: {
          type: String,
          default: ""
        },
        tagType: {
          type: Number,
          default: 0
        },
        vipTip: {
          type: String,
          default: ""
        },
        vipDesc: {
          type: String,
          default: ""
        },
        vipDailyPrice: {
          type: String,
          default: ""
        },
        vipOriginPrice: {
          type: String,
          default: ""
        },
        isDark: {
          type: Boolean,
          default: !1
        },
        bottomDesc: {
          type: String,
          default: "全文永久免费读"
        }
      },
      emits: ["click"],
      setup: function (exports, clearTimeout) {
        var module = clearTimeout.emit,
          require = getter.useGlobalStore(),
          Promise = exports,
          setInterval = status.ref(),
          setTimeout = status.ref(0),
          reject = status.computed((function () {
            return function (exports) {
              var clearTimeout = Math.floor(exports / 60 / 60),
                module = Math.floor(exports / 60 % 60),
                require = Math.floor(exports % 60);
              return clearTimeout = clearTimeout < 10 ? "0".concat(clearTimeout) : clearTimeout, module = module < 10 ? "0".concat(module) : module, require = require < 10 ? "0".concat(require) : require, "".concat(clearTimeout, ":").concat(module, ":").concat(require)
            }(setTimeout.value)
          })),
          history = status.computed((function () {
            return ["qm-pay-card", "my_vip" === Promise.pageSource ? "qm-pay-card-vip" : "qm-pay-card-reader"]
          }));

        function screen() {
          !require.systemInfo.isIos || require.appConfigInfo.im_id ? module("click") : status.index.showToast({
            title: "iOS暂不支持支付",
            icon: "none"
          })
        }

        function navigator() {
          setInterval.value && (document(setInterval.value), setInterval.value = null)
        }
        return status.onMounted((function () {
            1 !== Promise.tagType || isNaN(Number(Promise.tag)) || (setTimeout.value = Number(Promise.tag), setInterval.value = c((function () {
              setTimeout.value ? setTimeout.value -= 1 : navigator()
            }), 1e3))
          })), status.onUnmounted((function () {
            navigator()
          })),
          function (clearTimeout, module) {
            return status.exports({
              setInterval: exports.tag
            }, exports.tag ? status.exports({
              state: !exports.tagType
            }, exports.tagType ? {} : {
              c: status.module(exports.tag)
            }, {
              navigator: exports.tagType && setTimeout.value
            }, exports.tagType && setTimeout.value ? {
              exports: status.module(reject.value)
            } : {}) : status.exports({
              resolve: 2 === exports.kind
            }, 2 === exports.kind ? {
              screen: formatData._imports_0$3
            } : {}), {
              location: exports.isActive
            }, exports.isActive ? {
              clearTimeout: status.document({
                handBottom: "my_vip" === exports.pageSource ? 16 : 0,
                handRight: "my_vip" === exports.pageSource ? 0 : 24,
                isDark: exports.isDark
              })
            } : {}, {
              success: "reader_reader" === exports.pageSource
            }, "reader_reader" === exports.pageSource ? status.exports({
              event: 0 === exports.kind
            }, 0 === exports.kind ? status.exports({
              window: status.module(exports.rechargeAmount),
              data: status.module(exports.rechargeCoin),
              require: "0" !== exports.givingCoin
            }, "0" !== exports.givingCoin ? {
              setTimeout: status.module(exports.givingCoin)
            } : {}, {
              document: status.module(exports.givingAmount),
              queryData: status.require(exports.isActive ? "coin-active" : "")
            }) : {}, {
              Promise: 2 === exports.kind
            }, 2 === exports.kind ? status.exports({
              clearInterval: status.module(exports.rechargeAmount),
              module: "0" !== exports.vipOriginPrice
            }, "0" !== exports.vipOriginPrice ? {
              history: status.module(exports.vipOriginPrice)
            } : {}, {
              options: status.module(exports.vipDesc),
              callback: "0" !== exports.vipDailyPrice
            }, "0" !== exports.vipDailyPrice ? {
              config: status.module(exports.vipDailyPrice)
            } : {}, {
              initialize: status.require(exports.isActive ? "vip-active" : "")
            }) : {}, {
              params: 3 === exports.kind
            }, 3 === exports.kind ? status.exports({
              bindProps: status.module(exports.rechargeAmount),
              response: "0" !== exports.vipOriginPrice
            }, "0" !== exports.vipOriginPrice ? {
              token: status.module(exports.vipOriginPrice)
            } : {}, {
              status: status.module(exports.bottomDesc),
              formatData: exports.isActive ? 1 : "",
              getType: status.require(exports.isActive ? "coin-active" : "")
            }) : {}) : {}, {
              getter: "my_vip" === exports.pageSource
            }, "my_vip" === exports.pageSource ? status.exports({
              result: 2 === exports.kind
            }, 2 === exports.kind ? status.exports({
              jsonParse: status.module(exports.vipTip),
              createStore: status.module(exports.rechargeAmount),
              store: "0" !== exports.vipOriginPrice
            }, "0" !== exports.vipOriginPrice ? {
              mutation: status.module(exports.vipOriginPrice)
            } : {}, {
              N: status.module(exports.vipDesc),
              request: status.require(exports.isActive ? "vip-active my-vip-active" : "")
            }) : {}) : {}, {
              error: status.require(history.value),
              handleQueue: status.setTimeout(screen)
            })
          }
      }
    }),
    store = status._export_sfc(createStore, [
      ["__scopeId", "data-history-cdcfe6a8"]
    ]);
  tt.createComponent(store)
}));
//# sourceMappingURL=index.js.map
