define("components/qm-empty/index.js", (function (t, e, n, o, i, s, p, r, a, c, d, u, f, m, y, l, x, _, b, B, v, g, h, j, w, C, F, k, S, T, q, I, N, $, z, A, D, E, G) {
  "use strict";
  var H = t("../../common/vendor.js"),
    J = t("../../common/assets.js"),
    K = {
      __name: "index",
      props: {
        type: {
          type: Number,
          default: 1
        },
        tip: {
          type: String,
          default: "暂无数据"
        },
        isFixed: {
          type: Boolean,
          default: !0
        },
        showBtn: {
          type: Boolean,
          default: !1
        },
        btnText: {
          type: String,
          default: "重试"
        }
      },
      emits: ["btnClick"],
      setup: function (t, e) {
        var n = e.emit,
          o = t;
        return function (e, i) {
          return H.e({
            a: J._imports_0$2,
            b: H.t(1 === t.type ? o.tip : "网络异常，请重试"),
            c: 2 === t.type || t.showBtn
          }, 2 === t.type || t.showBtn ? {
            d: H.t(t.btnText),
            e: H.o((function (t) {
              return n("btnClick")
            }))
          } : {}, {
            f: o.isFixed ? 1 : "",
            g: o.isFixed ? "" : 1
          })
        }
      }
    },
    L = H._export_sfc(K, [
      ["__scopeId", "data-v-b84f7c14"]
    ]);
  tt.createComponent(L)
}));
//# sourceMappingURL=index.js.map
