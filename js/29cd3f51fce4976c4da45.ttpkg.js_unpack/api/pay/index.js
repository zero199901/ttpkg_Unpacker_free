define("api/pay/index.js", (function (t, a, n, e, p, u, i, s, r, o, _, c, y, f, g, b, l, v, h, m, d, j, x, k, q, w, z, A, B, C, D, E, F, G, H, I, J, K, L) {
  "use strict";
  var M = t("../http/index.js");
  n.api_asset_pay = function (t, a) {
    return M.post("/miniapp/v1/asset/pay", t, a)
  }, n.api_asset_pay_sync_result = function (t) {
    return M.post("/miniapp/v1/asset/pay-result", t)
  }, n.api_config_recharge_panel = function (t) {
    return M.get("/miniapp/v1/configure/recharge-panel", t)
  }, n.api_content_chapter_buy = function (t) {
    return M.post("/miniapp/v1/content/chapter/buy", t)
  }, n.api_get_auto_buy_status = function () {
    return M.get("/miniapp/v1/user/auto-buy-status/global")
  }, n.api_set_auto_buy_status = function (t) {
    return M.post("/miniapp/v1/user/auto-buy-status/global/change", t)
  }
}));
//# sourceMappingURL=index.js.map
