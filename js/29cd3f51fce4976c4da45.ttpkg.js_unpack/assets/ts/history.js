define("assets/ts/history.js", (function (e, t, n, r, o, i, c, u, a, s, f, d, h, g, v, y, l, S, p, k, m, x, _, b, j, q, E, w, z, A, B, C, D, F, G, H, I, J, K) {
  "use strict";
  var L = e("../../common/vendor.js"),
    M = "reading-books";
  n.update_book_store_queue = function (e) {
    if (e) {
      var t = function () {
        var e = [];
        try {
          e = L.index.getStorageSync(M) || []
        } catch (t) {
          e = []
        }
        return e
      }().filter((function (t) {
        return t !== e
      }));
      return t.push(e), t.length > 50 && function () {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((function (e) {
            L.index.removeStorage({
              key: "q-reader-chapter-info-" + e
            })
          }))
        }(t.splice(0, t.length - 50)),
        function (e) {
          try {
            L.index.setStorageSync(M, e)
          } catch (e) {
            return !1
          }
          return !0
        }(t)
    }
  }
}));
//# sourceMappingURL=history.js.map
