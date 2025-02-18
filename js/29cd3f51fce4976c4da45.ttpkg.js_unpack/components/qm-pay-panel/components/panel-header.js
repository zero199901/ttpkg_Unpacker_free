define("components/qm-pay-panel/components/panel-header.js", (function (e, n, a, t, c, o, i, p, r, l, u, d, f, v, _, h, s, g, y, m, b, k, C, I, j, A, R, T, x, O, q, B, S, w, z, D, E, F, G) {
  "use strict";
  var H = e("../../../common/vendor.js"),
    J = H.defineComponent({
      __name: "panel-header",
      props: {
        firstRecharge: {
          type: Boolean,
          default: !1
        },
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        pageType: {
          type: String,
          default: ""
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (e) {
        var n = e,
          a = H.computed((function () {
            var e;
            return "#0A0A0A" === (null == (e = n.skinConfig) ? void 0 : e.bgColor)
          })),
          t = H.computed((function () {
            var e = n.firstRecharge,
              a = n.chapterInfo,
              t = n.pageType;
            return e || 2 === a.fiction_type && 1 === a.paid_type || "purchase" === t ? "剩余内容需付费解锁" : "余额不足，请充值"
          })),
          c = H.computed((function () {
            var e, a, t, c, o, i, p, r = n.firstRecharge,
              l = n.chapterInfo;
            return "purchase" === n.pageType ? 2 === l.fiction_type && 1 === l.paid_type ? "账户余额：".concat(null == (e = null == l ? void 0 : l.chapter_paid) ? void 0 : e.coins_balance, "书币，解锁剩余内容需").concat(null == (a = null == l ? void 0 : l.chapter_paid) ? void 0 : a.chapter_price, "书币") : "账户余额：".concat(null == (t = null == l ? void 0 : l.chapter_paid) ? void 0 : t.coins_balance, "书币，解锁本章需").concat(null == (c = null == l ? void 0 : l.chapter_paid) ? void 0 : c.chapter_price, "书币") : 2 === l.fiction_type && 1 === l.paid_type ? "" : r ? "解锁本章需".concat(null == (o = null == l ? void 0 : l.chapter_paid) ? void 0 : o.chapter_price, "书币") : "账户余额：".concat(null == (i = null == l ? void 0 : l.chapter_paid) ? void 0 : i.coins_balance, "书币，解锁本章需").concat(null == (p = null == l ? void 0 : l.chapter_paid) ? void 0 : p.chapter_price, "书币")
          }));
        return function (n, o) {
          return H.e({
            a: 2 === e.chapterInfo.fiction_type
          }, 2 === e.chapterInfo.fiction_type ? {
            b: "linear-gradient( 180deg, rgba(255,255,255,0) 0%, ".concat(e.skinConfig.bgColor, " 100%)")
          } : {}, {
            c: H.n(a.value ? "line-dark" : ""),
            d: H.t(t.value),
            e: H.n(a.value ? "text-dark" : ""),
            f: H.n(a.value ? "line-dark" : ""),
            g: c.value
          }, c.value ? {
            h: H.t(c.value),
            i: H.n(a.value ? "info-dark" : "")
          } : {})
        }
      }
    }),
    K = H._export_sfc(J, [
      ["__scopeId", "data-v-b2367512"]
    ]);
  tt.createComponent(K)
}));
//# sourceMappingURL=panel-header.js.map
