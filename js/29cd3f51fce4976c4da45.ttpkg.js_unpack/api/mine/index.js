define("api/mine/index.js", (function (e, n, i, r, s, t, a, c, p, o, u, d, m, f, _, v, g, j, x, y, h, b, k, l, q, w, z, A, B, C, D, E, F, G, H, I, J, K, L) {
  "use strict";
  var M = e("../http/index.js");
  i.api_consume_records = function (e) {
    return M.get("/miniapp/v1/asset/consume-records", e)
  }, i.api_pay_records = function (e) {
    return M.get("/miniapp/v1/asset/pay-records", e)
  }
}));
//# sourceMappingURL=index.js.map
