define("api/http/compensation-queue.js", (function (n, t, e, o, r, i, u, a, c, s, f, l, y, p, v, h, m, b, d, g, w, L, S, q, k, j, P, E, x, C, O, R, T, N, Q, z, A, B, D) {
  "use strict";

  function F(n) {
    return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
      return typeof n
    } : function (n) {
      return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, F(n)
  }

  function G(n, t, e, o, i, u, a) {
    try {
      var c = n[u](a),
        s = c.value
    } catch (n) {
      return void e(n)
    }
    c.done ? t(s) : r.resolve(s).then(o, i)
  }

  function H(n, t) {
    for (var e = 0; e < t.length; e++) {
      var o = t[e];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, I(o.key), o)
    }
  }

  function I(n) {
    var t = function (n, t) {
      if ("object" != F(n) || !n) return n;
      var e = n[Symbol.toPrimitive];
      if (void 0 !== e) {
        var o = e.call(n, t || "default");
        if ("object" != F(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return ("string" === t ? String : Number)(n)
    }(n, "string");
    return "symbol" == F(t) ? t : t + ""
  }
  e.CompensationQueue = function () {
    return n = function n() {
      ! function (n, t) {
        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, n), this.queue = [], this.isLoading = !1
    }, t = [{
      key: "add",
      value: (o = regeneratorRuntime.mark((function n(t) {
        return regeneratorRuntime.wrap((function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              this.queue.push(t), this.isLoading || (this.isLoading = !0, this.onLogin());
            case 1:
            case "end":
              return n.stop()
          }
        }), n, this)
      })), i = function () {
        var n = this,
          t = arguments;
        return new r((function (e, r) {
          var i = o.apply(n, t);

          function u(n) {
            G(i, e, r, u, a, "next", n)
          }

          function a(n) {
            G(i, e, r, u, a, "throw", n)
          }
          u(void 0)
        }))
      }, function (n) {
        return i.apply(this, arguments)
      })
    }, {
      key: "onLogin",
      value: function () {
        console.warn(" -- 请在实例化时重写覆盖该方法：重新登陆 onLogin  --")
      }
    }, {
      key: "request",
      value: function (n) {
        console.warn(" -- 请在实例化时重写覆盖该方法： request  --")
      }
    }, {
      key: "onLoginSuccess",
      value: function () {
        var n = this;
        this.isLoading = !1, this.queue.forEach((function (t) {
          n.request(t)
        }))
      }
    }], t && H(n.prototype, t), e && H(n, e), Object.defineProperty(n, "prototype", {
      writable: !1
    }), n;
    var n, t, e, o, i
  }()
}));
//# sourceMappingURL=compensation-queue.js.map
