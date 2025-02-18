define("components/qm-pay-card/components/guide-hand.js", (function (t, n, e, a, o, d, p, r, c, i, s, u, m, h, f, g, y, _, l, b, k, v, x, B, j, C, D, N, R, q, I, w, z, A, E, F, G, H, J) {
  "use strict";
  var K = t("../../../common/vendor.js"),
    L = K.defineComponent({
      __name: "guide-hand",
      props: {
        handBottom: {
          type: Number,
          default: 0
        },
        handRight: {
          type: Number,
          default: 0
        },
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (t) {
        return function (n, e) {
          return {
            a: t.isDark ? "/static/pay/hand-dark.png" : "/static/pay/hand.png",
            b: t.handBottom + "rpx",
            c: t.handRight + "rpx"
          }
        }
      }
    }),
    M = K._export_sfc(L, [
      ["__scopeId", "data-v-9d811854"]
    ]);
  tt.createComponent(M)
}));
//# sourceMappingURL=guide-hand.js.map
