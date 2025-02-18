define("components/qm-book-card/index.js", (function (e, o, t, r, n, a, i, c, p, k, u, s, b, d, f, l, v, m, y, D, h, x, g, T, _, N, S, j, q, C, z, B, W, H, I, M, $, w, A) {
  "use strict";
  var E = e("../../common/vendor.js"),
    F = "渺渺故事会";
  Math || G();
  var G = function () {
      return "../../node-modules/@repo/qm-components/src/q-theme-overlay/index.js"
    },
    J = E.defineComponent({
      __name: "index",
      props: {
        bookCover: {
          type: String,
          default: ""
        },
        bookName: {
          type: String,
          default: ""
        },
        bookDesc: {
          type: String,
          default: ""
        },
        bookBottomText: {
          type: String,
          default: ""
        },
        bookType: {
          type: String,
          default: "horizontal"
        },
        coverWidth: {
          type: Number,
          default: 143
        },
        coverHeight: {
          type: Number,
          default: 192
        },
        isDark: {
          type: Boolean,
          default: !1
        }
      },
      setup: function (e) {
        var o = F,
          t = E.ref(!1),
          r = e,
          n = function () {
            E.nextTick$1((function () {
              t.value = !0
            }))
          };
        return function (a, i) {
          return E.e({
            a: !t.value
          }, t.value ? {} : {
            b: E.t(E.unref(o))
          }, {
            c: r.bookCover,
            d: E.o(n),
            e: t.value,
            f: E.p({
              isDark: e.isDark
            }),
            g: r.coverWidth + "rpx",
            h: r.coverHeight + "rpx",
            i: "vertical" === r.bookType
          }, "vertical" === r.bookType ? {
            j: E.t(r.bookName)
          } : {}, {
            k: r.coverWidth + "rpx",
            l: "horizontal" === r.bookType
          }, "horizontal" === r.bookType ? E.e({
            m: E.t(r.bookName),
            n: r.bookDesc ? "" : 1,
            o: r.bookDesc ? 1 : "",
            p: e.isDark ? 1 : "",
            q: r.bookDesc
          }, r.bookDesc ? {
            r: E.t(r.bookDesc),
            s: e.isDark ? 1 : ""
          } : {}, {
            t: E.t(r.bookBottomText),
            v: e.isDark ? 1 : ""
          }) : {})
        }
      }
    }),
    K = E._export_sfc(J, [
      ["__scopeId", "data-v-fbcfa562"]
    ]);
  tt.createComponent(K)
}));
//# sourceMappingURL=index.js.map
