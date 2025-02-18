define("components/qm-pull-up-loading/index.js", (function (t, e, n, o, s, r, p, a, c, i, m, u, d, f, _, x, l, v, j, b, g, C, q, y, I, S, $, h, k, w, z, A, B, D, E, F, G, H, J) {
  "use strict";
  var K = t("../../common/vendor.js"),
    L = t("../../common/assets.js"),
    M = K.defineComponent({
      __name: "index",
      props: {
        text: {
          type: String,
          default: "加载中..."
        }
      },
      setup: function (t) {
        var e = t;
        return function (t, n) {
          return K.e({
            a: L._imports_0$4,
            b: e.text
          }, e.text ? {
            c: K.t(e.text)
          } : {})
        }
      }
    }),
    N = K._export_sfc(M, [
      ["__scopeId", "data-v-2be1f78a"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=index.js.map
