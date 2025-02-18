define("components/qm-pay-panel/components/purchase-tips.js", (function (n, o, e, r, a, t, i, s, u, c, p, d, f, l, m, k, v, _, g, C, D, b, w, I, j, x, y, h, q, R, U, A, B, G, S, T, z, E, F) {
  "use strict";
  var H = n("../../../common/vendor.js"),
    J = n("../../../store/modules/global.js");
  Array || H.resolveComponent("qm-icon")();
  var K = H.defineComponent({
      __name: "purchase-tips",
      props: {
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (n) {
        var o = H.ref(!1),
          e = J.useGlobalStore(),
          r = {
            user: "/pages/window/index?url=".concat(encodeURIComponent(e.appConfigInfo.user_agreement)),
            coin: "/pages/window/index?url=".concat(encodeURIComponent(e.appConfigInfo.coin_buy_url))
          };

        function a(n) {
          H.index.navigateTo({
            url: n
          })
        }

        function t() {
          o.value = !o.value
        }
        return function (e, i) {
          return H.e({
            a: H.n(n.isDark ? "title-dark" : ""),
            b: H.o(t),
            c: o.value
          }, o.value ? {
            d: H.n(n.isDark ? "t-dark" : ""),
            e: H.o((function (n) {
              return a(r.user)
            })),
            f: H.o((function (n) {
              return a(r.coin)
            })),
            g: H.n(n.isDark ? "wrap-dark" : ""),
            h: H.n(n.isDark ? "mask-dark" : ""),
            i: H.n(n.isDark ? "footer-dark" : ""),
            j: H.o(t),
            k: H.n(n.isDark ? "con-dark" : ""),
            l: H.o((function () {})),
            m: H.o((function () {}))
          } : {})
        }
      }
    }),
    L = H._export_sfc(K, [
      ["__scopeId", "data-v-29b4a449"]
    ]);
  tt.createComponent(L)
}));
//# sourceMappingURL=purchase-tips.js.map
