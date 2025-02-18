define("api/user/index.js", (function (n, i, p, o, t, e, a, c, u, f, r, s, g, _, d, v, m, A, C, j, l, x, h, y, b, k, q, w, z, B, D, E, F, G, H, I, J, K, L) {
  "use strict";
  var M = n("../http/index.js");
  p.api_config_info = function () {
    return M.get("/miniapp/v1/initial/config", {}, {
      noAppConfig: !0
    })
  }, p.api_login = function (n) {
    return M.post("/miniapp/v1/account/active", {
      code: n
    }, {
      noAppConfig: !0
    })
  }, p.api_update_system_info = function (n) {
    return M.post("/miniapp/v1/account/update-device", n, {
      noAppConfig: !0
    })
  }, p.api_user_info = function () {
    return M.get("/miniapp/v1/account/me", {}, {
      noAppConfig: !0
    })
  }
}));
//# sourceMappingURL=index.js.map
