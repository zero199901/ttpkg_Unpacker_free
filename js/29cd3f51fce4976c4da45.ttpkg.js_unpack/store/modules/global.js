define("store/modules/global.js", (function (t, e, n, o, r, i, s, f, c, a, u, p, y, l, h, m, d, b, g, v, I, O, j, w, S, _, P, W, C, D, E, G, Q, x, B, H, k, M, N) {
  "use strict";

  function R(t) {
    return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, R(t)
  }

  function q(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      e && (o = o.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.push.apply(n, o)
    }
    return n
  }

  function A(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? q(Object(n), !0).forEach((function (e) {
        T(t, e, n[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }))
    }
    return t
  }

  function T(t, e, n) {
    return (e = function (t) {
      var e = function (t, e) {
        if ("object" != R(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(t, e || "default");
          if ("object" != R(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
      }(t, "string");
      return "symbol" == R(e) ? e : e + ""
    }(e)) in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var z = t("../../common/vendor.js"),
    F = t("../../api/user/index.js"),
    J = {
      systemInfo: {},
      headerInfo: {},
      entryQuery: {},
      appConfigInfo: {}
    },
    K = z.defineStore("global-data", {
      state: function () {
        return J
      },
      actions: {
        getSystemInfo: function () {
          var t = z.index.getSystemInfoSync(),
            e = A(A({}, t), {}, {
              isIos: "ios" === t.platform
            });
          console.log("--systeminfo", e), this.systemInfo = e
        },
        updateSystemInfo: function (t) {
          var e = t.qm_sdk.get_params(),
            n = {
              app_version: e.appversion,
              platform: this.systemInfo.platform,
              os_name: this.systemInfo.osName,
              device_brand: this.systemInfo.deviceBrand,
              device_model: this.systemInfo.deviceModel,
              screen_width: this.systemInfo.screenWidth,
              screen_height: this.systemInfo.screenHeight
            };
          this.systemInfo.appversion = e.appversion, F.api_update_system_info({
            device_info: n
          })
        },
        getAppConfigInfo: function () {
          var t = this;
          return new r((function (e, n) {
            F.api_config_info().then((function (n) {
              t.appConfigInfo = n || {}, e(n)
            })).catch((function (t) {
              n(t)
            }))
          }))
        },
        getHeaderInfo: function () {
          var t = z.index.getMenuButtonBoundingClientRect(),
            e = {};
          e.totalHeight = t.top + t.height, e.leftGap = this.systemInfo.windowWidth - t.right, e.titleWidth = t.left - e.leftGap - t.width;
          var n = this.systemInfo.screenWidth / 375;
          e.threePointRight = t.width / 4 * 3 + e.leftGap - 22 * n, e.top = t.top, e.left = t.left, e.height = t.height, e.leftWidth = t.width, console.log("--headerinfo", e), this.headerInfo = e
        },
        setEntryQuery: function (t) {
          this.entryQuery = A(A({}, this.entryQuery), t)
        }
      }
    });
  n.useGlobalStore = K
}));
//# sourceMappingURL=global.js.map
