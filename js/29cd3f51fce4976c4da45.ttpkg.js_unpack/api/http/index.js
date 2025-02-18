define("api/http/index.js", (function (e, t, n, r, o, i, a, u, c, s, p, f, l, d, m, v, b, y, h, g, O, R, S, j, w, E, x, k, P, C, L, I, A, T, D, N, U, V, _) {
  "use strict";

  function G(e) {
    return G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, G(e)
  }

  function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? B(Object(n), !0).forEach((function (t) {
        F(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function F(e, t, n) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != G(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" != G(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == G(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function z(e, t, n, r, i, a, u) {
    try {
      var c = e[a](u),
        s = c.value
    } catch (e) {
      return void n(e)
    }
    c.done ? t(s) : o.resolve(s).then(r, i)
  }

  function Q(e) {
    return function () {
      var t = this,
        n = arguments;
      return new o((function (r, o) {
        var i = e.apply(t, n);

        function a(e) {
          z(i, r, o, a, u, "next", e)
        }

        function u(e) {
          z(i, r, o, a, u, "throw", e)
        }
        a(void 0)
      }))
    }
  }
  var H = e("../../common/vendor.js"),
    J = e("../../store/modules/user.js"),
    K = e("../../store/modules/global.js"),
    M = e("./compensation-queue.js"),
    W = e("../../hooks/use-login.js");
  e("../../hooks/use-pay.js");
  var X = {
      SUCCESS: 200,
      RELOAD: 307,
      ERROR: 400,
      LOGIN: 401,
      FORBIDDEN: 403,
      CONFLICT: 409,
      SERVERERROR: 500,
      SERVICEUNAVAILABLE: 503
    },
    Y = new M.CompensationQueue;
  Y.onLogin = Q(regeneratorRuntime.mark((function e() {
    var t;
    return regeneratorRuntime.wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return t = W.useLogin(), J.useUserStore().set_token(""), e.next = 4, t.refreshToken();
        case 4:
          Y.onLoginSuccess();
        case 5:
        case "end":
          return e.stop()
      }
    }), e)
  }))), Y.request = function () {
    var e = Q(regeneratorRuntime.mark((function e(t) {
      var n;
      return regeneratorRuntime.wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.prev = 0, e.next = 3, Z(t.params, t.method);
          case 3:
            n = e.sent, t.resolve(n), e.next = 10;
            break;
          case 7:
            e.prev = 7, e.t0 = e.catch(0), t.reject(e.t0);
          case 10:
          case "end":
            return e.stop()
        }
      }), e, null, [
        [0, 7]
      ])
    })));
    return function (t) {
      return e.apply(this, arguments)
    }
  }();
  var Z = function () {
    var e = Q(regeneratorRuntime.mark((function e(t, n) {
      var r, a, u;
      return regeneratorRuntime.wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (e.t0 = null == (r = t.header) ? void 0 : r.noAppConfig, e.t0) {
              e.next = 4;
              break
            }
            return e.next = 4, Q(regeneratorRuntime.mark((function e() {
              var t;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t = K.useGlobalStore();
                  case 1:
                    if (t.appConfigInfo.promotion_type) {
                      e.next = 6;
                      break
                    }
                    return e.next = 4, new o((function (e) {
                      i(e, 50)
                    }));
                  case 4:
                    e.next = 1;
                    break;
                  case 6:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))();
          case 4:
            return a = J.useUserStore(), u = K.useGlobalStore(), e.abrupt("return", new o((function (e, r) {
              var o, i = t.url,
                c = t.data,
                s = t.header,
                p = u.appConfigInfo,
                f = p.promotion_type,
                l = p.distributor_id;
              s = Object.assign({}, s, {
                Authorization: "Bearer ".concat(a.token),
                platform: H.index.getSystemInfoSync().platform,
                project: "reader_paid_dyminiapp",
                "app-id": "ttc6a8b015599fe90101",
                "last-channel": null !== (o = H.index.getStorageSync("last-channel")) && void 0 !== o ? o : "",
                "promotion-type": null != f ? f : "",
                "distributor-id": String(null != l ? l : "")
              });
              var d = t.contentType || "application/json";
              /^http[s]?/.test(i) || (i = "https://new-media.xmkanshu.com" + i);
              var m = {
                url: i,
                data: c,
                method: n || "POST",
                header: q({
                  "content-type": d
                }, s),
                timeout: 1e4,
                success: function (o) {
                  var i = o.data,
                    a = i.code,
                    u = i.msg,
                    c = i.data;
                  a !== X.SUCCESS ? a !== X.LOGIN ? ([X.ERROR, X.SERVERERROR, X.SERVICEUNAVAILABLE].includes(a) && H.index.showToast({
                    title: a === X.ERROR ? u || "请求错误" : "请求异常",
                    icon: "none",
                    duration: 3e3
                  }), r(o.data)) : Y.add({
                    params: t,
                    method: n,
                    resolve: e,
                    reject: r
                  }) : e(c)
                },
                fail: function (e) {
                  H.index.hideLoading(), H.index.showToast({
                    title: "网络错误",
                    icon: "none",
                    duration: 3e3
                  }), r(e)
                }
              };
              H.index.request(m)
            })));
          case 6:
          case "end":
            return e.stop()
        }
      }), e)
    })));
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }();
  n.get = function (e) {
    return Z({
      url: e,
      data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      header: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    }, "GET")
  }, n.post = function (e) {
    return Z({
      url: e,
      data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      header: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    }, "POST")
  }
}));
//# sourceMappingURL=index.js.map
