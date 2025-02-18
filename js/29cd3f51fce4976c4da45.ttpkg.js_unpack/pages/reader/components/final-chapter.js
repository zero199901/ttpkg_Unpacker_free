define("pages/reader/components/final-chapter.js", (function (e, n, o, t, r, a, c, i, u, d, s, m, f, p, v, b, k, l, _, g, h, x, C, y, j, w, L, A, I, T, q, D, N, R, B, M, O, z, E) {
  "use strict";

  function F(e, n, o, t, a, c, i) {
    try {
      var u = e[c](i),
        d = u.value
    } catch (e) {
      return void o(e)
    }
    u.done ? n(d) : r.resolve(d).then(t, a)
  }
  var G = e("../../../common/vendor.js"),
    H = e("../../../api/reader/index.js");
  Array || G.resolveComponent("qm-icon")(), Math || J();
  var J = function () {
      return "../../../components/qm-book-card/index.js"
    },
    K = G.defineComponent({
      __name: "final-chapter",
      props: {
        bookId: {
          type: Number,
          default: 0
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (e) {
        var n = e,
          o = G.reactive({
            name: "",
            recommendList: []
          }),
          t = G.computed((function () {
            var e;
            return "#0A0A0A" === (null == (e = n.skinConfig) ? void 0 : e.bgColor)
          }));

        function a(e) {
          e ? G.index.redirectTo({
            url: "/pages/reader/index?id=".concat(e)
          }) : G.index.switchTab({
            url: "/pages/index/index"
          })
        }
        return function (e) {
            return function () {
              var n = this,
                o = arguments;
              return new r((function (t, r) {
                var a = e.apply(n, o);

                function c(e) {
                  F(a, t, r, c, i, "next", e)
                }

                function i(e) {
                  F(a, t, r, c, i, "throw", e)
                }
                c(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function e() {
            var t;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, H.api_get_chapter_end_recommend({
                    book_id: n.bookId
                  });
                case 2:
                  t = e.sent, o.name = t.current_book_name, o.recommendList = t.books || [];
                case 4:
                case "end":
                  return e.stop()
              }
            }), e)
          })))(),
          function (e, n) {
            return G.e({
              a: o.recommendList.length > 0
            }, o.recommendList.length > 0 ? {
              b: G.t(o.name),
              c: t.value ? 1 : "",
              d: G.f(o.recommendList, (function (e, n, o) {
                return {
                  a: "859a884d-0-" + o,
                  b: G.p({
                    bookCover: e.book_cover,
                    bookName: e.book_name,
                    bookDesc: e.book_desc,
                    bookBottomText: e.category,
                    isDark: t.value
                  }),
                  c: n,
                  d: G.o((function (n) {
                    return a(e.book_id)
                  }))
                }
              }))
            } : {}, {
              e: t.value ? 1 : "",
              f: G.o((function (e) {
                return a()
              }))
            })
          }
      }
    }),
    P = G._export_sfc(K, [
      ["__scopeId", "data-v-859a884d"]
    ]);
  tt.createComponent(P)
}));
//# sourceMappingURL=final-chapter.js.map
