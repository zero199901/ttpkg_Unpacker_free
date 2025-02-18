define("api/book-store/index.js", (function (e, n, t, o, i, p, r, c, s, _, f, m, a, u, b, d, g, h, k, v, j, l, x, y, q, w, z, A, B, C, D, E, F, G, H, I, J, K, L) {
  "use strict";
  var M = e("../http/index.js");
  t.api_book_recommend_list = function (e) {
    return M.get("/miniapp/v1/content/books/recommend", {
      preference_type: e
    })
  }, t.api_books_hot_list = function (e) {
    return M.get("/miniapp/v1/content/books/hot", {
      preference_type: e
    })
  }, t.api_home_config = function () {
    return M.get("/miniapp/v1/content/home-config")
  }
}));
//# sourceMappingURL=index.js.map
