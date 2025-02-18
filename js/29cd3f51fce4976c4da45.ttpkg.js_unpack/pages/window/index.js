define("pages/window/index.js", (function (e, t, n, i, o, r, a, d, c, u, p, s, f, l, _, g, m, v, x, j, w, y, C, I, S, b, B, N, P, R, T, U, h, k, q, z, A, D, E) {
  "use strict";
  var F = e("../../common/vendor.js"),
    G = F.defineComponent({
      __name: "index",
      props: {
        url: {
          type: String,
          default: ""
        },
        title: {
          type: String
        }
      },
      setup: function (e) {
        var t = e,
          n = function () {
            t.title && F.index.setNavigationBarTitle({
              title: t.title
            })
          };
        return function (e, i) {
          return {
            a: decodeURIComponent(t.url),
            b: F.o(n)
          }
        }
      }
    }),
    H = F._export_sfc(G, [
      ["__scopeId", "data-v-cc688ed9"]
    ]);
  tt.createPage(H)
}));
//# sourceMappingURL=index.js.map
