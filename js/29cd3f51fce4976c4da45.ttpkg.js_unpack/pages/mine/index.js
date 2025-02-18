/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/mine/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/mine/index.js", (function (exports, module, require, clearTimeout, setTimeout, setInterval, reject, Promise, clearInterval, c, document, window, navigator, history, resolve, data, utils, screen, location, callback, state, options, config, event, handler, action, success, response, queryData, result, user, token, U, status, error, params, getType, getter, mutation) {
  "use strict";

  function validateData(exports, module, require, clearTimeout, setInterval, reject, Promise) {
    try {
      var clearInterval = exports[reject](Promise),
        c = clearInterval.value
    } catch (exports) {
      return void require(exports)
    }
    clearInterval.done ? module(c) : setTimeout.resolve(c).then(clearTimeout, setInterval)
  }

  function initialize(exports) {
    return function () {
      var module = this,
        require = arguments;
      return new setTimeout((function (clearTimeout, setTimeout) {
        var setInterval = exports.apply(module, require);

        function reject(exports) {
          validateData(setInterval, clearTimeout, setTimeout, reject, Promise, "next", exports)
        }

        function Promise(exports) {
          validateData(setInterval, clearTimeout, setTimeout, reject, Promise, "throw", exports)
        }
        reject(void 0)
      }))
    }
  }
  var bindProps = exports("../../common/vendor.js"),
    formatData = exports("../../common/assets.js"),
    jsonParse = exports("../../store/modules/user.js"),
    createStore = exports("../../store/modules/global.js");
  Array || bindProps.resolveComponent("qm-icon")(), Math || (N + store)();
  var store = function () {
      return "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js"
    },
    N = function () {
      return "./components/how-to-find-me.js"
    },
    request = bindProps.defineComponent({
      __name: "index",
      setup: function (exports) {
        var module = createStore.useGlobalStore(),
          require = bindProps.inject("qmsa"),
          clearTimeout = jsonParse.useUserStore(),
          setTimeout = bindProps.computed((function () {
            return clearTimeout.userInfo
          })),
          setInterval = [{
            title: "交易记录",
            icon: "&#xe61e;",
            ifShow: !0,
            rightTitle: "",
            path: "/subpages/mine/trade-record/index",
            id: "trade-record"
          }, {
            title: "如何找到我",
            icon: "&#xe612;",
            ifShow: !0,
            rightTitle: "",
            id: "find-me"
          }, {
            title: "添加至桌面",
            icon: "&#xe61c;",
            ifShow: !1,
            rightTitle: "一键添加",
            id: "add-to-desktop"
          }, {
            title: "收藏小程序",
            icon: "&#xe617;",
            ifShow: !1,
            rightTitle: "",
            id: "collect-app"
          }, {
            title: "联系客服",
            icon: "&#xe615;",
            ifShow: !0,
            rightTitle: "周一至周五 9:00-18:00",
            id: "contact-us"
          }, {
            title: "关于我们",
            icon: "&#xe60e;",
            ifShow: !0,
            rightTitle: "",
            path: "/subpages/mine/about-us/index",
            id: "about-us"
          }],
          reject = function (exports) {
            bindProps.index.navigateTo({
              url: exports
            })
          },
          Promise = bindProps.ref();
        return bindProps.onHide((function () {
            Promise.value && Promise.value.close()
          })), bindProps.onShow(initialize(regeneratorRuntime.mark((function exports() {
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return exports.next = 2, clearTimeout.update_user_info();
                case 2:
                  require.track({
                    qm: "my_full_#_view",
                    sensors: "Dypaid_Page_View"
                  }, {
                    page: "my",
                    position: "full"
                  });
                case 3:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })))),
          function (exports, clearTimeout) {
            return bindProps.exports({
              setInterval: formatData._imports_0,
              state: bindProps.module(setTimeout.value.nick_name || "-"),
              c: bindProps.module(setTimeout.value.uid || "-"),
              navigator: 0 === setTimeout.value.vip_status || !setTimeout.value.vip_status
            }, 0 !== setTimeout.value.vip_status && setTimeout.value.vip_status ? 1 === setTimeout.value.vip_status ? {
              resolve: bindProps.module(setTimeout.value.vip_expire_at)
            } : 2 === setTimeout.value.vip_status ? {
              location: bindProps.module(setTimeout.value.vip_expire_at)
            } : {} : {}, {
              exports: 1 === setTimeout.value.vip_status,
              screen: 2 === setTimeout.value.vip_status,
              clearTimeout: 0 === setTimeout.value.vip_status || !setTimeout.value.vip_status
            }, (0 !== setTimeout.value.vip_status && setTimeout.value.vip_status, {}), {
              success: bindProps.setTimeout((function (exports) {
                return "/subpages/mine/vip/index", bindProps.index.navigateTo({
                  url: "/subpages/mine/vip/index"
                }), void require.track({
                  qm: "my_vip_#_click",
                  sensors: "Dypaid_Element_Click"
                }, {
                  page: "my",
                  position: "vip"
                })
              })),
              event: bindProps.module(setTimeout.value.recharge_balance || 0),
              window: bindProps.module(setTimeout.value.presented_balance || 0),
              data: bindProps.resolve(setInterval, (function (exports, module, clearTimeout) {
                return {
                  setInterval: "contact-us" === exports.id,
                  state: "d168dbb4-0-" + clearTimeout,
                  c: bindProps.document({
                    code: exports.icon
                  }),
                  navigator: bindProps.module(exports.title),
                  exports: bindProps.module(exports.rightTitle),
                  resolve: "d168dbb4-1-" + clearTimeout,
                  screen: bindProps.setTimeout((function (module) {
                    return (null == (clearTimeout = exports) ? void 0 : clearTimeout.path) && bindProps.index.navigateTo({
                      url: clearTimeout.path
                    }), void("find-me" === clearTimeout.id ? Promise.value.open() : "trade-record" === clearTimeout.id && require.track({
                      qm: "my_consume_#_click",
                      sensors: "Dypaid_Element_Click"
                    }, {
                      btn_name: clearTimeout.title,
                      page: "my",
                      position: "consume"
                    }));
                    var clearTimeout
                  })),
                  location: module,
                  clearTimeout: exports.ifShow
                }
              })),
              require: bindProps.setTimeout((function (exports) {
                return reject("/pages/window/index?url=".concat(encodeURIComponent(bindProps.unref(module).appConfigInfo.user_agreement)))
              })),
              setTimeout: bindProps.setTimeout((function (exports) {
                return reject("/pages/window/index?url=".concat(encodeURIComponent(bindProps.unref(module).appConfigInfo.privacy_policy)))
              })),
              document: bindProps.setTimeout((function (exports) {
                return Promise.value.close()
              })),
              queryData: bindProps.sr(Promise, "d168dbb4-2", {
                event: "pupop"
              }),
              Promise: bindProps.document({
                "is-mask-click": !1,
                animation: !0,
                type: "center"
              })
            })
          }
      }
    }),
    handleQueue = bindProps._export_sfc(request, [
      ["__scopeId", "data-history-d168dbb4"]
    ]);
  tt.createPage(handleQueue)
}));
//# sourceMappingURL=index.js.map
