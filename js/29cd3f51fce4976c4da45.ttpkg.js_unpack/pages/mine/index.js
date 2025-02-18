define("pages/mine/index.js", (function (e, t, n, i, o, a, u, r, s, c, p, l, d, v, f, m, _, g, h, x, b, w, y, k, S, T, j, C, q, I, R, D, U, E, P, A, G, H, M) {
  "use strict";

  function V(e, t, n, i, a, u, r) {
    try {
      var s = e[u](r),
        c = s.value
    } catch (e) {
      return void n(e)
    }
    s.done ? t(c) : o.resolve(c).then(i, a)
  }

  function z(e) {
    return function () {
      var t = this,
        n = arguments;
      return new o((function (i, o) {
        var a = e.apply(t, n);

        function u(e) {
          V(a, i, o, u, r, "next", e)
        }

        function r(e) {
          V(a, i, o, u, r, "throw", e)
        }
        u(void 0)
      }))
    }
  }
  var B = e("../../common/vendor.js"),
    F = e("../../common/assets.js"),
    J = e("../../store/modules/user.js"),
    K = e("../../store/modules/global.js");
  Array || B.resolveComponent("qm-icon")(), Math || (N + L)();
  var L = function () {
      return "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js"
    },
    N = function () {
      return "./components/how-to-find-me.js"
    },
    O = B.defineComponent({
      __name: "index",
      setup: function (e) {
        var t = K.useGlobalStore(),
          n = B.inject("qmsa"),
          i = J.useUserStore(),
          o = B.computed((function () {
            return i.userInfo
          })),
          a = [{
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
          u = function (e) {
            B.index.navigateTo({
              url: e
            })
          },
          r = B.ref();
        return B.onHide((function () {
            r.value && r.value.close()
          })), B.onShow(z(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, i.update_user_info();
                case 2:
                  n.track({
                    qm: "my_full_#_view",
                    sensors: "Dypaid_Page_View"
                  }, {
                    page: "my",
                    position: "full"
                  });
                case 3:
                case "end":
                  return e.stop()
              }
            }), e)
          })))),
          function (e, i) {
            return B.e({
              a: F._imports_0,
              b: B.t(o.value.nick_name || "-"),
              c: B.t(o.value.uid || "-"),
              d: 0 === o.value.vip_status || !o.value.vip_status
            }, 0 !== o.value.vip_status && o.value.vip_status ? 1 === o.value.vip_status ? {
              f: B.t(o.value.vip_expire_at)
            } : 2 === o.value.vip_status ? {
              h: B.t(o.value.vip_expire_at)
            } : {} : {}, {
              e: 1 === o.value.vip_status,
              g: 2 === o.value.vip_status,
              i: 0 === o.value.vip_status || !o.value.vip_status
            }, (0 !== o.value.vip_status && o.value.vip_status, {}), {
              j: B.o((function (e) {
                return "/subpages/mine/vip/index", B.index.navigateTo({
                  url: "/subpages/mine/vip/index"
                }), void n.track({
                  qm: "my_vip_#_click",
                  sensors: "Dypaid_Element_Click"
                }, {
                  page: "my",
                  position: "vip"
                })
              })),
              k: B.t(o.value.recharge_balance || 0),
              l: B.t(o.value.presented_balance || 0),
              m: B.f(a, (function (e, t, i) {
                return {
                  a: "contact-us" === e.id,
                  b: "d168dbb4-0-" + i,
                  c: B.p({
                    code: e.icon
                  }),
                  d: B.t(e.title),
                  e: B.t(e.rightTitle),
                  f: "d168dbb4-1-" + i,
                  g: B.o((function (t) {
                    return (null == (i = e) ? void 0 : i.path) && B.index.navigateTo({
                      url: i.path
                    }), void("find-me" === i.id ? r.value.open() : "trade-record" === i.id && n.track({
                      qm: "my_consume_#_click",
                      sensors: "Dypaid_Element_Click"
                    }, {
                      btn_name: i.title,
                      page: "my",
                      position: "consume"
                    }));
                    var i
                  })),
                  h: t,
                  i: e.ifShow
                }
              })),
              n: B.o((function (e) {
                return u("/pages/window/index?url=".concat(encodeURIComponent(B.unref(t).appConfigInfo.user_agreement)))
              })),
              o: B.o((function (e) {
                return u("/pages/window/index?url=".concat(encodeURIComponent(B.unref(t).appConfigInfo.privacy_policy)))
              })),
              p: B.o((function (e) {
                return r.value.close()
              })),
              q: B.sr(r, "d168dbb4-2", {
                k: "pupop"
              }),
              r: B.p({
                "is-mask-click": !1,
                animation: !0,
                type: "center"
              })
            })
          }
      }
    }),
    Q = B._export_sfc(O, [
      ["__scopeId", "data-v-d168dbb4"]
    ]);
  tt.createPage(Q)
}));
//# sourceMappingURL=index.js.map
