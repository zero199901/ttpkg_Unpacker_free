define("node-modules/@repo/qm-components/src/q-reader/components/book-info.js", (function (e, r, o, n, t, a, u, i, s, c, d, f, m, l, p, v, _, k, h, b, j, g, y, C, q, x, S, D, I, T, B, G, M, R, $, w, z, A, E) {
  "use strict";
  var F = e("../../../../../../common/vendor.js"),
    H = e("../../../../../../common/assets.js");
  Math || (J + K)();
  var J = function () {
      return "../../q-image/index.js"
    },
    K = function () {
      return "../../q-theme-overlay/index.js"
    },
    L = F.defineComponent({
      __name: "book-info",
      setup: function (e) {
        var r = F.useStoreReader(),
          o = r.bookInfo,
          n = F.computed((function () {
            var e = r.readerTheme,
              o = e.bgColor,
              n = e.color,
              t = e.divideColor;
            return {
              backgroundColor: o,
              color: n,
              borderBottom: "1px solid ".concat(t)
            }
          })),
          t = F.computed((function () {
            return {
              color: r.readerTheme.colorDarkerGray
            }
          }));
        return function (e, a) {
          return F.e({
            a: F.s("dark" === F.unref(r).readerStyle.name),
            b: F.p({
              src: F.unref(o).image_link
            }),
            c: F.p({
              isDark: "dark" === F.unref(r).readerStyle.name
            }),
            d: F.t(F.unref(o).title),
            e: F.n(F.unref(o).author ? "ellipsis-clamp-1" : "ellipsis-clamp-2"),
            f: F.t(F.unref(o).author),
            g: F.s(t.value),
            h: "1" === F.unref(o).is_vip
          }, "1" === F.unref(o).is_vip ? {
            i: H._imports_0$5
          } : {}, {
            j: F.p({
              isDark: "dark" === F.unref(r).readerStyle.name
            }),
            k: F.unref(o).is_over
          }, F.unref(o).is_over ? {
            l: F.t("1" === F.unref(o).is_over ? "已完结" : "更新中"),
            m: F.t(F.unref(o).total_chapter_num),
            n: F.s(t.value)
          } : {}, {
            o: F.s(n.value)
          })
        }
      }
    }),
    N = F._export_sfc(L, [
      ["__scopeId", "data-v-af4da369"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=book-info.js.map
