define("node-modules/@repo/qm-components/src/q-reader/components/chapter-list.js", (function (e, r, n, t, a, o, u, c, i, l, d, s, f, p, v, h, m, C, g, M, _, k, x, I, j, y, q, L, S, b, D, E, F, T, B, G, R, $, w) {
  "use strict";
  var z = e("../../../../../../common/vendor.js"),
    A = e("../../../../../../common/assets.js");
  Math || H();
  var H = function () {
      return "../../q-theme-overlay/index.js"
    },
    J = z.defineComponent({
      __name: "chapter-list",
      setup: function (e) {
        var r = z.useStoreReader(),
          n = function (e) {
            var n = r.readerTheme,
              t = n.color,
              a = n.colorDarkGray,
              o = n.activeColor,
              u = t;
            return e.id === r.currentChapter.id ? u = o : function (e) {
              return r.readedChapterIds.includes(e.id)
            }(e) && (u = a), {
              color: u
            }
          },
          t = z.ref(r.chapterList.findIndex((function (e) {
            return e.id === r.currentChapter.id
          }))),
          a = z.ref(t.value),
          o = z.ref(t.value + 10),
          u = r.chapterList.length,
          c = z.computed((function () {
            return a.value >= 1 ? 46 * (a.value - Math.min(a.value, 10)) : 0
          })),
          i = z.computed((function () {
            var e = Math.max(a.value - 10, 0),
              n = Math.min(o.value + 10, u);
            return r.chapterList.slice(e, n)
          })),
          l = function (e) {
            var r = e.detail.scrollTop - 8,
              n = Math.floor(r / 46),
              t = n + 10;
            a.value = n, o.value = Math.min(t, u)
          };
        return function (e, a) {
          return {
            a: z.f(i.value, (function (e, t, a) {
              var o, u;
              return z.e({
                a: z.t(e.title),
                b: e.id === z.unref(r).currentChapter.id ? 1 : "",
                c: z.s(n(e)),
                d: !e.isFree
              }, e.isFree ? {} : z.e({
                e: "lock" === (null == (o = z.unref(r).readerConfig) ? void 0 : o.catalogIcon)
              }, "lock" === (null == (u = z.unref(r).readerConfig) ? void 0 : u.catalogIcon) ? {} : {
                f: A._imports_0$5,
                g: "3401af1a-0-" + a,
                h: z.p({
                  isDark: "dark" === z.unref(r).readerStyle.name
                })
              }), {
                i: e.id,
                j: z.o((function (n) {
                  return function (e) {
                    r.actionEvents.onChangeChapterByCatalogue(e, r.readerInstance.currentChapter), r.actionEvents.onMenuClick("chapter", e), r.setMenuStatus("menu", !1)
                  }(e)
                }))
              })
            })),
            b: "translate3d(0, ".concat(c.value, "px, 0)"),
            c: 46 * z.unref(u) + "px",
            d: 46 * t.value,
            e: z.o(l)
          }
        }
      }
    }),
    K = z._export_sfc(J, [
      ["__scopeId", "data-v-3401af1a"]
    ]);
  tt.createComponent(K)
}));
//# sourceMappingURL=chapter-list.js.map
