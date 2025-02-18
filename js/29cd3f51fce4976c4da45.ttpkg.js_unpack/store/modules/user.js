define("store/modules/user.js", (function (n, e, t, i, o, s, u, c, r, f, a, g, _, d, S, h, k, l, p, v, x, y, I, j, m, w, L, U, b, q, z, A, B, C, D, E, F, G, H) {
  "use strict";
  var J = n("../../common/vendor.js"),
    K = n("../../api/user/index.js"),
    M = {
      userInfo: J.index.getStorageSync("userInfo") || {},
      token: J.index.getStorageSync("token"),
      isLogining: !1
    },
    N = J.defineStore("user", {
      state: function () {
        return M
      },
      actions: {
        set_user_info: function (n) {
          this.userInfo = n, J.index.setStorageSync("userInfo", n)
        },
        update_user_info: function () {
          var n = this;
          return new o((function (e, t) {
            K.api_user_info().then((function (t) {
              n.set_user_info(t), e(t)
            })).catch((function (n) {
              t(n)
            }))
          }))
        },
        set_token: function (n) {
          this.token = n, J.index.setStorageSync("token", n)
        },
        set_is_logining: function (n) {
          this.isLogining = n
        },
        login: function () {
          var n = this;
          return new o((function (e, t) {
            var i = n;
            J.index.login({
              success: function (n) {
                var o = n.code;
                K.api_login(o).then((function (n) {
                  i.set_token(n.access_token), e(n)
                })).catch((function (n) {
                  t(n)
                }))
              },
              fail: function (n) {
                t(n)
              }
            })
          }))
        },
        login_app: function () {}
      }
    });
  t.useUserStore = N
}));
//# sourceMappingURL=user.js.map
