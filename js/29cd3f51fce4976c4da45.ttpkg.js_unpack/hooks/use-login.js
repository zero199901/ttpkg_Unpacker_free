define("hooks/use-login.js", (function (e, n, t, r, i, o, u, a, s, c, f, l, p, d, g, v, m, b, y, h, x, k, _, w, S, j, A, I, R, L, O, T, U, C, M, P, q, E, G) {
  "use strict";

  function $(e, n) {
    return function (e) {
      if (Array.isArray(e)) return e
    }(e) || function (e, n) {
      var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != t) {
        var r, i, o, u, a = [],
          s = !0,
          c = !1;
        try {
          if (o = (t = t.call(e)).next, 0 === n) {
            if (Object(t) !== t) return;
            s = !1
          } else
            for (; !(s = (r = o.call(t)).done) && (a.push(r.value), a.length !== n); s = !0);
        } catch (e) {
          c = !0, i = e
        } finally {
          try {
            if (!s && null != t.return && (u = t.return(), Object(u) !== u)) return
          } finally {
            if (c) throw i
          }
        }
        return a
      }
    }(e, n) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return z(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? z(e, n) : void 0
      }
    }(e, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function z(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
    return r
  }

  function B(e, n, t, r, o, u, a) {
    try {
      var s = e[u](a),
        c = s.value
    } catch (e) {
      return void t(e)
    }
    s.done ? n(c) : i.resolve(c).then(r, o)
  }

  function D(e) {
    return function () {
      var n = this,
        t = arguments;
      return new i((function (r, i) {
        var o = e.apply(n, t);

        function u(e) {
          B(o, r, i, u, a, "next", e)
        }

        function a(e) {
          B(o, r, i, u, a, "throw", e)
        }
        u(void 0)
      }))
    }
  }
  var F = e("../common/vendor.js"),
    H = e("../store/modules/user.js"),
    J = e("../store/modules/global.js"),
    K = e("../api/qm-statistics.js");
  t.useLogin = function () {
    var e = function (e) {
        F.index.showToast({
          icon: "none",
          title: e
        }), o((function () {
          F.index.exitMiniProgram()
        }), 1500)
      },
      n = function () {
        var n = D(regeneratorRuntime.mark((function n(t) {
          var r, o, u, a, s, c;
          return regeneratorRuntime.wrap((function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                if (r = J.useGlobalStore(), !(o = H.useUserStore()).isLogining) {
                  n.next = 3;
                  break
                }
                return n.abrupt("return");
              case 3:
                if (F.index.getStorageSync("token")) {
                  n.next = 13;
                  break
                }
                return o.set_is_logining(!0), n.prev = 5, n.next = 8, o.login();
              case 8:
                n.next = 13;
                break;
              case 10:
                return n.prev = 10, n.t0 = n.catch(5), n.abrupt("return", void e("请登录再进入小程序"));
              case 13:
                return n.prev = 13, n.next = 16, i.all([o.update_user_info(), r.getAppConfigInfo()]);
              case 16:
                u = n.sent, a = $(u, 2), s = a[0], c = a[1], r.updateSystemInfo(t), t && K.statisticsInitParams(t, {
                  accountid: s.uid,
                  openid: s.openid,
                  unionid: s.unionid,
                  promotiontype: c.promotion_type,
                  distributor_id: c.distributor_id
                }), o.set_is_logining(!1), n.next = 26;
                break;
              case 23:
                n.prev = 23, n.t1 = n.catch(13), e("小程序异常，请稍后重试");
              case 26:
              case "end":
                return n.stop()
            }
          }), n, null, [
            [5, 10],
            [13, 23]
          ])
        })));
        return function (e) {
          return n.apply(this, arguments)
        }
      }(),
      t = function () {
        var e = D(regeneratorRuntime.mark((function e() {
          var r;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if ((r = H.useUserStore()).token) {
                  e.next = 13;
                  break
                }
                if (!r.isLogining) {
                  e.next = 4;
                  break
                }
                return e.abrupt("return", new i((function (e) {
                  o(D(regeneratorRuntime.mark((function n() {
                    return regeneratorRuntime.wrap((function (n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          return n.next = 2, t();
                        case 2:
                          e(!0);
                        case 3:
                        case "end":
                          return n.stop()
                      }
                    }), n)
                  }))), 100)
                })));
              case 4:
                if (r.userInfo.uid) {
                  e.next = 9;
                  break
                }
                return r.set_token(""), e.next = 8, n("");
              case 8:
                return e.abrupt("return", void e.sent);
              case 9:
                return r.set_is_logining(!0), e.next = 12, r.login();
              case 12:
                r.set_is_logining(!1);
              case 13:
              case "end":
                return e.stop()
            }
          }), e)
        })));
        return function () {
          return e.apply(this, arguments)
        }
      }();
    return {
      init: n,
      refreshToken: t
    }
  }
}));
//# sourceMappingURL=use-login.js.map
