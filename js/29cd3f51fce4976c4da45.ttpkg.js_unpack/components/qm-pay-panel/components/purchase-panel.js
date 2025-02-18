define("components/qm-pay-panel/components/purchase-panel.js", (function (e, t, n, r, o, i, c, a, u, p, l, s, f, d, v, y, b, m, h, _, g, j, k, O, S, w, I, P, x, q, C, D, N, A, E, R, T, M, B) {
  "use strict";

  function F(e) {
    return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, F(e)
  }

  function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? G(Object(n), !0).forEach((function (t) {
        H(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function H(e, t, n) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != F(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" != F(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == F(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function J(e, t, n, r, i, c, a) {
    try {
      var u = e[c](a),
        p = u.value
    } catch (e) {
      return void n(e)
    }
    u.done ? t(p) : o.resolve(p).then(r, i)
  }
  var K = e("../../../common/vendor.js"),
    L = e("../../../api/pay/index.js");
  Math || (Q + U)();
  var Q = function () {
      return "./panel-header.js"
    },
    U = function () {
      return "../../../node-modules/@repo/qm-components/src/q-theme-overlay/index.js"
    },
    V = K.defineComponent({
      __name: "purchase-panel",
      props: {
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      setup: function (e) {
        var t = K.inject("qmsa"),
          n = K.ref(),
          r = K.ref(!0),
          i = e,
          c = K.computed((function () {
            var e;
            return "#0A0A0A" === (null == (e = i.skinConfig) ? void 0 : e.bgColor)
          })),
          a = K.computed((function () {
            return r.value ? c.value ? "/static/pay/radio-dark.png" : "/static/pay/radio-active.png" : "/static/pay/radio-inactive.png"
          }));

        function u() {
          r.value = !r.value
        }

        function p() {
          return l.apply(this, arguments)
        }

        function l() {
          return l = function (e) {
            return function () {
              var t = this,
                n = arguments;
              return new o((function (r, o) {
                var i = e.apply(t, n);

                function c(e) {
                  J(i, r, o, c, a, "next", e)
                }

                function a(e) {
                  J(i, r, o, c, a, "throw", e)
                }
                c(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function e() {
            var t, o, c, a, u, p, l, f;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return s("click"), p = {
                    book_id: null == (t = i.chapterInfo) ? void 0 : t.book_id,
                    chapter_id: null == (o = i.chapterInfo) ? void 0 : o.chapter.id,
                    open_auto_buy: r.value
                  }, l = {
                    bookId: p.book_id,
                    chapterId: p.chapter_id,
                    chapterNum: null == (c = i.chapterInfo) ? void 0 : c.chapter.num
                  }, e.prev = 2, e.next = 5, L.api_content_chapter_buy(p);
                case 5:
                  f = e.sent, null == (a = n.value) || a.emit("paySuccess", l), (null == f ? void 0 : f.acquired_by_paid) && s("buySuccess", null == f ? void 0 : f.chapter_price), e.next = 12;
                  break;
                case 9:
                  e.prev = 9, e.t0 = e.catch(2), 409 === e.t0.code && K.index.showToast({
                    title: e.t0.msg,
                    icon: "none"
                  }), null == (u = n.value) || u.emit("payFail", l);
                case 12:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [2, 9]
            ])
          }))), l.apply(this, arguments)
        }

        function s(e, n) {
          var r, o, c, a, u, p = {
              book_id: String(null == (r = i.chapterInfo) ? void 0 : r.book_id),
              sort_id: Number(null == (o = i.chapterInfo) ? void 0 : o.chapter.num),
              chapter_id: String(null == (a = null == (c = i.chapterInfo) ? void 0 : c.chapter) ? void 0 : a.id),
              page: "reader",
              fiction_type: String(null == (u = i.chapterInfo) ? void 0 : u.fiction_type)
            },
            l = {
              click: {
                eventName: {
                  qm: "reader_unlock_#_click",
                  sensors: "Dypaid_Button_Click"
                },
                property: z(z({}, p), {}, {
                  btn_name: "购买",
                  position: "unlock"
                })
              },
              buySuccess: {
                eventName: {
                  qm: "reader_buy-succeed_#_result",
                  sensors: "Dypaid_General_Result"
                },
                property: z(z({}, p), {}, {
                  number: Number(n),
                  position: "buy-succeed"
                })
              }
            };
          l[e] && t.track(l[e].eventName, l[e].property)
        }
        return K.onMounted((function () {
            n.value = K.inject("qmPayPanel")
          })),
          function (t, n) {
            return {
              a: K.p({
                chapterInfo: e.chapterInfo,
                pageType: "purchase",
                skinConfig: e.skinConfig
              }),
              b: K.o(p),
              c: K.p({
                isDark: c.value
              }),
              d: a.value,
              e: K.n(c.value ? "text-dark" : ""),
              f: K.o(u)
            }
          }
      }
    }),
    W = K._export_sfc(V, [
      ["__scopeId", "data-v-a18c2d2b"]
    ]);
  tt.createComponent(W)
}));
//# sourceMappingURL=purchase-panel.js.map
