define("pages/mine/components/how-to-find-me.js", (function (n, e, o, t, f, p, a, r, i, u, m, s, c, d, _, g, l, C, I, v, b, j, h, w, x, G, S, $, k, q, y, z, A, B, D, E, F, H, J) {
  "use strict";
  var K = n("../../../common/vendor.js"),
    L = n("../../../store/modules/global.js"),
    M = K.defineComponent({
      __name: "how-to-find-me",
      setup: function (n) {
        var e = L.useGlobalStore();
        return function (n, o) {
          return {
            a: K.t(K.unref(e).appConfigInfo.app_name),
            b: K.t(K.unref(e).appConfigInfo.app_name),
            c: K.unref(e).appConfigInfo.logo,
            d: K.t(K.unref(e).appConfigInfo.app_name),
            e: K.t(K.unref(e).appConfigInfo.app_name),
            f: K.o((function (e) {
              return n.$emit("close")
            }))
          }
        }
      }
    }),
    N = K._export_sfc(M, [
      ["__scopeId", "data-v-ed782a27"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=how-to-find-me.js.map
