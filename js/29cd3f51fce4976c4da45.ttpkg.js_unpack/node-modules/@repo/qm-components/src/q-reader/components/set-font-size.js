define("node-modules/@repo/qm-components/src/q-reader/components/set-font-size.js", (function (e, n, o, r, t, c, u, a, f, d, i, s, l, S, m, v, p, z, y, _, C, h, g, b, j, k, q, R, T, x, B, E, G, I, M, w, A, D, F) {
  "use strict";
  var H = e("../../../../../../common/vendor.js"),
    J = H.defineComponent({
      __name: "set-font-size",
      setup: function (e) {
        var n = H.useStoreReader(),
          o = H.throttle({
            interval: 300
          }, (function (e) {
            var o = n.readerStyle.fontSize;
            "add" === e && (o += 2), "cost" === e && (o -= 2), o < 12 && (o = 12), o > 30 && (o = 30), n.setReaderStyle({
              fontSize: o
            }), n.actionEvents.onMenuClick("fontSize", o)
          })),
          r = H.computed((function () {
            var e = n.readerTheme;
            return {
              backgroundColor: e.fontSizeBgColor,
              color: e.color
            }
          }));
        return function (e, t) {
          return {
            a: H.unref(n).readerTheme.colorGray,
            b: H.s(r.value),
            c: 12 === H.unref(n).readerStyle.fontSize ? 1 : "",
            d: H.o((function (e) {
              return H.unref(o)("cost")
            })),
            e: H.t(H.unref(n).readerStyle.fontSize),
            f: H.s(r.value),
            g: 30 === H.unref(n).readerStyle.fontSize ? 1 : "",
            h: H.o((function (e) {
              return H.unref(o)("add")
            }))
          }
        }
      }
    }),
    K = H._export_sfc(J, [
      ["__scopeId", "data-v-3ce71cd1"]
    ]);
  tt.createComponent(K)
}));
//# sourceMappingURL=set-font-size.js.map
