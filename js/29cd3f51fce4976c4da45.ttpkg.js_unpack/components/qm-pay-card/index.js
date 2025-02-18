define("components/qm-pay-card/index.js", (function (e, i, t, n, r, a, o, c, p, u, v, g, d, l, s, m, f, y, S, h, k, A, _, P, D, O, C, b, T, N, j, M, q, x, I, B, w, G, z) {
  "use strict";
  var E = e("../../common/vendor.js"),
    F = e("../../common/assets.js"),
    H = e("../../store/modules/global.js");
  Array || E.resolveComponent("template")(), Math || J();
  var J = function () {
      return "./components/guide-hand.js"
    },
    K = E.defineComponent({
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
      setup: function (e, i) {
        var t = i.emit,
          n = H.useGlobalStore(),
          r = e,
          a = E.ref(),
          o = E.ref(0),
          u = E.computed((function () {
            return function (e) {
              var i = Math.floor(e / 60 / 60),
                t = Math.floor(e / 60 % 60),
                n = Math.floor(e % 60);
              return i = i < 10 ? "0".concat(i) : i, t = t < 10 ? "0".concat(t) : t, n = n < 10 ? "0".concat(n) : n, "".concat(i, ":").concat(t, ":").concat(n)
            }(o.value)
          })),
          v = E.computed((function () {
            return ["qm-pay-card", "my_vip" === r.pageSource ? "qm-pay-card-vip" : "qm-pay-card-reader"]
          }));

        function g() {
          !n.systemInfo.isIos || n.appConfigInfo.im_id ? t("click") : E.index.showToast({
            title: "iOS暂不支持支付",
            icon: "none"
          })
        }

        function d() {
          a.value && (p(a.value), a.value = null)
        }
        return E.onMounted((function () {
            1 !== r.tagType || isNaN(Number(r.tag)) || (o.value = Number(r.tag), a.value = c((function () {
              o.value ? o.value -= 1 : d()
            }), 1e3))
          })), E.onUnmounted((function () {
            d()
          })),
          function (i, t) {
            return E.e({
              a: e.tag
            }, e.tag ? E.e({
              b: !e.tagType
            }, e.tagType ? {} : {
              c: E.t(e.tag)
            }, {
              d: e.tagType && o.value
            }, e.tagType && o.value ? {
              e: E.t(u.value)
            } : {}) : E.e({
              f: 2 === e.kind
            }, 2 === e.kind ? {
              g: F._imports_0$3
            } : {}), {
              h: e.isActive
            }, e.isActive ? {
              i: E.p({
                handBottom: "my_vip" === e.pageSource ? 16 : 0,
                handRight: "my_vip" === e.pageSource ? 0 : 24,
                isDark: e.isDark
              })
            } : {}, {
              j: "reader_reader" === e.pageSource
            }, "reader_reader" === e.pageSource ? E.e({
              k: 0 === e.kind
            }, 0 === e.kind ? E.e({
              l: E.t(e.rechargeAmount),
              m: E.t(e.rechargeCoin),
              n: "0" !== e.givingCoin
            }, "0" !== e.givingCoin ? {
              o: E.t(e.givingCoin)
            } : {}, {
              p: E.t(e.givingAmount),
              q: E.n(e.isActive ? "coin-active" : "")
            }) : {}, {
              r: 2 === e.kind
            }, 2 === e.kind ? E.e({
              s: E.t(e.rechargeAmount),
              t: "0" !== e.vipOriginPrice
            }, "0" !== e.vipOriginPrice ? {
              v: E.t(e.vipOriginPrice)
            } : {}, {
              w: E.t(e.vipDesc),
              x: "0" !== e.vipDailyPrice
            }, "0" !== e.vipDailyPrice ? {
              y: E.t(e.vipDailyPrice)
            } : {}, {
              z: E.n(e.isActive ? "vip-active" : "")
            }) : {}, {
              A: 3 === e.kind
            }, 3 === e.kind ? E.e({
              B: E.t(e.rechargeAmount),
              C: "0" !== e.vipOriginPrice
            }, "0" !== e.vipOriginPrice ? {
              D: E.t(e.vipOriginPrice)
            } : {}, {
              E: E.t(e.bottomDesc),
              F: e.isActive ? 1 : "",
              G: E.n(e.isActive ? "coin-active" : "")
            }) : {}) : {}, {
              H: "my_vip" === e.pageSource
            }, "my_vip" === e.pageSource ? E.e({
              I: 2 === e.kind
            }, 2 === e.kind ? E.e({
              J: E.t(e.vipTip),
              K: E.t(e.rechargeAmount),
              L: "0" !== e.vipOriginPrice
            }, "0" !== e.vipOriginPrice ? {
              M: E.t(e.vipOriginPrice)
            } : {}, {
              N: E.t(e.vipDesc),
              O: E.n(e.isActive ? "vip-active my-vip-active" : "")
            }) : {}) : {}, {
              P: E.n(v.value),
              Q: E.o(g)
            })
          }
      }
    }),
    L = E._export_sfc(K, [
      ["__scopeId", "data-v-cdcfe6a8"]
    ]);
  tt.createComponent(L)
}));
//# sourceMappingURL=index.js.map
