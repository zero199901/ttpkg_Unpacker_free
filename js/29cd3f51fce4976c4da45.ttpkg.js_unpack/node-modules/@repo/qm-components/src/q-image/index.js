define("node-modules/@repo/qm-components/src/q-image/index.js", (function (e, n, o, t, r, c, s, u, a, d, i, f, m, p, v, _, l, b, x, j, q, C, g, I, h, k, w, y, z, A, B, D, E, F, G, H, J, K, L) {
  "use strict";
  var M = e("../../../../../common/vendor.js"),
    N = M.defineComponent({
      __name: "index",
      props: {
        src: {
          default: ""
        }
      },
      setup: function (e) {
        var n = e,
          o = M.ref(!0);
        return function (e, t) {
          return {
            a: o.value,
            b: M.o((function (e) {
              return o.value = !1
            })),
            c: n.src
          }
        }
      }
    }),
    O = M._export_sfc(N, [
      ["__scopeId", "data-v-bbadde69"]
    ]);
  tt.createComponent(O)
}));
//# sourceMappingURL=index.js.map
