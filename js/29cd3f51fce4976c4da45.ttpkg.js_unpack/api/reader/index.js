define("api/reader/index.js", (function (e, n, t, i, r, a, o, p, c, d, u, _, s, g, m, f, v, h, b, k, l, j, x, q, w, y, z, A, B, C, D, E, F, G, H, I, J, K, L) {
  "use strict";
  var M = e("../http/index.js");
  t.api_book_info = function (e) {
    return M.get("/miniapp/v1/content/book/detail", e)
  }, t.api_chapter_data = function (e) {
    return M.get("/miniapp/v1/content/chapter/detail", e)
  }, t.api_chapter_list = function (e) {
    return M.get("/miniapp/v1/content/chapter/base-list", e)
  }, t.api_get_chapter_end_recommend = function (e) {
    return M.get("/miniapp/v1/content/book/chapter-end-recommend", e)
  }, t.api_reading_record_list = function (e) {
    return M.get("/miniapp/v1/user/book/reading-records", e)
  }, t.api_update_reading_record = function (e) {
    return M.post("/miniapp/v1/user/book/save-reading-record", e)
  }
}));
//# sourceMappingURL=index.js.map
