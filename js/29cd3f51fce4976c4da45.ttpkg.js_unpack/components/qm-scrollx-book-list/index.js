define("components/qm-scrollx-book-list/index.js", (function (o, e, n, t, r, c, i, a, s, u, l, d, f, b, m, p, k, v, _, x, y, j, C, q, L, h, A, B, I, M, N, T, g, w, z, D, E, F, G) {
  "use strict";
  var H = o("../../common/vendor.js");
  Math || J();
  var J = function () {
      return "../qm-book-card/index.js"
    },
    K = H.defineComponent({
      __name: "index",
      props: {
        bookList: {
          type: Array,
          default: function () {
            return [{}, {}, {}, {}, {}]
          }
        },
        scroll: {
          type: Boolean,
          default: !0
        }
      },
      emits: ["click"],
      setup: function (o, e) {
        var n = e.emit,
          t = o;
        return function (e, r) {
          return {
            a: H.f(o.bookList, (function (o, e, t) {
              return {
                a: "5ae3cb7d-0-" + t,
                b: H.p({
                  bookCover: o.book_cover,
                  bookName: o.book_name,
                  bookType: "vertical"
                }),
                c: e,
                d: H.o((function (t) {
                  return function (o, e) {
                    n("click", o, e)
                  }(o, e)
                }))
              }
            })),
            b: t.scroll,
            c: t.scroll ? 1 : ""
          }
        }
      }
    }),
    O = H._export_sfc(K, [
      ["__scopeId", "data-v-5ae3cb7d"]
    ]);
  tt.createComponent(O)
}));
//# sourceMappingURL=index.js.map
