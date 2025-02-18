define("components/qm-pay-panel/index.js", (function (e, n, t, r, o, i, a, c, u, l, p, s, d, f, v, h, m, y, _, g, b, w, k, I, j, x, S, O, P, D, C, N, T, q, A, R, E, F, M) {
  "use strict";

  function V(e) {
    return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, V(e)
  }

  function $(e, n) {
    return function (e) {
      if (Array.isArray(e)) return e
    }(e) || function (e, n) {
      var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != t) {
        var r, o, i, a, c = [],
          u = !0,
          l = !1;
        try {
          if (i = (t = t.call(e)).next, 0 === n) {
            if (Object(t) !== t) return;
            u = !1
          } else
            for (; !(u = (r = i.call(t)).done) && (c.push(r.value), c.length !== n); u = !0);
        } catch (e) {
          l = !0, o = e
        } finally {
          try {
            if (!u && null != t.return && (a = t.return(), Object(a) !== a)) return
          } finally {
            if (l) throw o
          }
        }
        return c
      }
    }(e, n) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return B(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? B(e, n) : void 0
      }
    }(e, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function B(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
    return r
  }

  function L(e, n, t, r, i, a, c) {
    try {
      var u = e[a](c),
        l = u.value
    } catch (e) {
      return void t(e)
    }
    u.done ? n(l) : o.resolve(l).then(r, i)
  }

  function U(e) {
    return function () {
      var n = this,
        t = arguments;
      return new o((function (r, o) {
        var i = e.apply(n, t);

        function a(e) {
          L(i, r, o, a, c, "next", e)
        }

        function c(e) {
          L(i, r, o, a, c, "throw", e)
        }
        a(void 0)
      }))
    }
  }

  function G(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n && (r = r.filter((function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable
      }))), t.push.apply(t, r)
    }
    return t
  }

  function z(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {};
      n % 2 ? G(Object(t), !0).forEach((function (n) {
        H(e, n, t[n])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach((function (n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }))
    }
    return e
  }

  function H(e, n, t) {
    return (n = function (e) {
      var n = function (e, n) {
        if ("object" != V(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var r = t.call(e, n || "default");
          if ("object" != V(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === n ? String : Number)(e)
      }(e, "string");
      return "symbol" == V(n) ? n : n + ""
    }(n)) in e ? Object.defineProperty(e, n, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = t, e
  }
  var J = e("../../common/vendor.js"),
    K = e("../../api/pay/index.js");
  e("../../hooks/use-login.js");
  var Q = e("../../hooks/use-pay.js");
  Math || (W + X + ee + Y + Z)();
  var W = function () {
      return "./components/panel-header.js"
    },
    X = function () {
      return "../qm-pay-card/index.js"
    },
    Y = function () {
      return "./components/purchase-tips.js"
    },
    Z = function () {
      return "./components/purchase-panel.js"
    },
    ee = function () {
      return "../../node-modules/@repo/qm-components/src/q-theme-overlay/index.js"
    },
    ne = J.defineComponent({
      __name: "index",
      props: {
        chapterInfo: {
          type: Object,
          default: function () {}
        },
        pageName: {
          type: String,
          default: ""
        },
        isScrollStuck: {
          type: Boolean,
          default: !0
        },
        skinConfig: {
          type: Object,
          default: function () {}
        }
      },
      emits: ["paySuccess", "payFail"],
      setup: function (e, n) {
        var t, r = n.emit,
          o = J.inject("qmsa"),
          a = Q.usePay().dyPay,
          c = J.reactive({
            panelInfo: {}
          }),
          u = J.getCurrentInstance(),
          l = J.ref(!1),
          p = J.ref(!1),
          s = e,
          d = J.computed((function () {
            var e;
            return "#0A0A0A" === (null == (e = s.skinConfig) ? void 0 : e.bgColor)
          })),
          f = J.computed((function () {
            var e, n;
            return (null == (n = null == (e = c.panelInfo) ? void 0 : e.panel) ? void 0 : n.items) || []
          }));

        function v(e, n) {
          var t, r, i, a, u, l, p, d, f, v, h, m, y = {
              book_id: String(null == (t = s.chapterInfo) ? void 0 : t.book_id),
              sort_id: Number(null == (i = null == (r = s.chapterInfo) ? void 0 : r.chapter) ? void 0 : i.num),
              chapter_id: String(null == (u = null == (a = s.chapterInfo) ? void 0 : a.chapter) ? void 0 : u.id),
              page: "reader",
              fiction_type: String(null == (l = s.chapterInfo) ? void 0 : l.fiction_type)
            },
            _ = {
              click: {
                eventName: {
                  qm: "reader_charge_#_click",
                  sensors: "Dypaid_Element_Click"
                },
                property: z(z({}, y), {}, {
                  panel_id: String(null == (d = null == (p = c.panelInfo) ? void 0 : p.panel) ? void 0 : d.id),
                  amount: Number(null == n ? void 0 : n.recharge_amount),
                  position: "charge"
                })
              },
              view: {
                eventName: {
                  qm: "reader_charge_#_view",
                  sensors: "Dypaid_Page_View"
                },
                property: z(z({}, y), {}, {
                  panel_id: String(null == (v = null == (f = c.panelInfo) ? void 0 : f.panel) ? void 0 : v.id),
                  position: "charge"
                })
              },
              rechargeSuccess: {
                eventName: {
                  qm: "reader_charge-succeed_#_result",
                  sensors: "Dypaid_General_Result"
                },
                property: z(z({}, y), {}, {
                  panel_id: String(null == (m = null == (h = c.panelInfo) ? void 0 : h.panel) ? void 0 : m.id),
                  amount: Number(null == n ? void 0 : n.recharge_amount),
                  pay_way: "douyin",
                  position: "charge-succeed"
                })
              },
              show: {
                eventName: {
                  qm: "reader_unlock_#_show",
                  sensors: "Dypaid_Element_Show"
                },
                property: z(z({}, y), {}, {
                  position: "unlock"
                })
              }
            };
          _[e] && o.track(_[e].eventName, _[e].property)
        }
        return J.watch((function () {
            return s.chapterInfo
          }), U(regeneratorRuntime.mark((function e() {
            var n, r;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (p.value = !1, e.t0 = 1 === (null == (r = null == (n = s.chapterInfo) ? void 0 : n.chapter_paid) ? void 0 : r.show_type), !e.t0) {
                    e.next = 5;
                    break
                  }
                  return e.next = 5, U(regeneratorRuntime.mark((function e() {
                    var n, t, r;
                    return regeneratorRuntime.wrap((function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return t = {
                            book_id: null == (n = s.chapterInfo) ? void 0 : n.book_id,
                            recharge_page_name: "reader_reader"
                          }, e.next = 3, K.api_config_recharge_panel(t);
                        case 3:
                          r = e.sent, c.panelInfo = r;
                        case 5:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })))();
                case 5:
                  return e.next = 7, J.nextTick$1();
                case 7:
                  p.value = !0, U(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, J.nextTick$1();
                        case 2:
                          t && t.disconnect(), (t = J.index.createIntersectionObserver(u)).relativeToViewport().observe(".js-observer-panel", (function (e) {
                            l.value = e.intersectionRatio > 0
                          }));
                        case 5:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })))();
                case 9:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), {
            immediate: !0,
            deep: !0
          }), J.watch([l, p], (function (e) {
            var n, t, r = $(e, 2),
              o = r[0],
              i = r[1];
            if (o && i) {
              var a = null == (t = null == (n = s.chapterInfo) ? void 0 : n.chapter_paid) ? void 0 : t.show_type;
              1 === a ? (console.log("=====view====="), v("view")) : 2 === a && (console.log("=====show====="), v("show"))
            }
          })), J.onMounted((function () {
            J.provide("qmPayPanel", u)
          })), J.onBeforeUnmount((function () {
            t && t.disconnect()
          })),
          function (n, t) {
            var u, l, p, h, m, y, _, g, b, w, k;
            return J.e({
              a: 1 === (null == (l = null == (u = e.chapterInfo) ? void 0 : u.chapter_paid) ? void 0 : l.show_type)
            }, 1 === (null == (h = null == (p = e.chapterInfo) ? void 0 : p.chapter_paid) ? void 0 : h.show_type) ? J.e({
              b: J.p({
                firstRecharge: null == (m = c.panelInfo) ? void 0 : m.user_first_recharge,
                chapterInfo: e.chapterInfo,
                skinConfig: e.skinConfig
              }),
              c: f.value.length
            }, f.value.length ? {
              d: J.f(f.value, (function (e, n, t) {
                return {
                  a: J.o((function () {
                    return (n = U(regeneratorRuntime.mark((function e(n) {
                      var t, u, l, p, d, f, h, m, y, _;
                      return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return v("click", n), y = {
                              pay_type: "douyin",
                              panel_id: c.panelInfo.panel.id,
                              panel_item_id: n.id,
                              panel_type: 0,
                              book_id: null == (t = s.chapterInfo) ? void 0 : t.book_id,
                              chapter_id: null == (l = null == (u = s.chapterInfo) ? void 0 : u.chapter) ? void 0 : l.id,
                              chapter_num: null == (d = null == (p = s.chapterInfo) ? void 0 : p.chapter) ? void 0 : d.num,
                              new_media_fiction_type: null == (f = s.chapterInfo) ? void 0 : f.fiction_type,
                              recharge_page_name: s.pageName
                            }, _ = {
                              bookId: y.book_id,
                              chapterId: y.chapter_id,
                              chapterNum: null == (m = null == (h = s.chapterInfo) ? void 0 : h.chapter) ? void 0 : m.num
                            }, e.prev = 2, e.next = 5, a(y, o);
                          case 5:
                            if (e.t0 = e.sent, e.t1 = "success" === e.t0, !e.t1) {
                              e.next = 9;
                              break
                            }
                            i((function () {
                              J.index.hideLoading()
                            }), 100), r("paySuccess", _), v("rechargeSuccess", n);
                          case 9:
                            e.next = 14;
                            break;
                          case 11:
                            e.prev = 11, e.t2 = e.catch(2), i((function () {
                              switch (e.t2) {
                                case "cancel":
                                  J.index.showToast({
                                    title: "支付已取消",
                                    icon: "none"
                                  });
                                  break;
                                case "assetPayFail":
                                  J.index.showToast({
                                    title: "下单失败",
                                    icon: "none"
                                  });
                                  break;
                                case "requestOrderFail":
                                  J.index.showToast({
                                    title: "支付失败",
                                    icon: "none"
                                  });
                                  break;
                                case "timeout":
                                  J.index.showToast({
                                    title: "订单结果获取失败，请稍后重试",
                                    icon: "none"
                                  }), r("payFail", _);
                                  break;
                                case "iosNoSupportPay":
                                  J.index.showToast({
                                    title: "IOS暂不支持支付",
                                    icon: "none"
                                  });
                                  break;
                                case "updateDyVersion":
                                  J.index.showToast({
                                    title: "请更新抖音版本",
                                    icon: "none"
                                  });
                                  break;
                                default:
                                  J.index.hideLoading()
                              }
                              console.log(e.t2, "err")
                            }), 100);
                          case 14:
                          case "end":
                            return e.stop()
                        }
                      }), e, null, [
                        [2, 11]
                      ])
                    }))), function (e) {
                      return n.apply(this, arguments)
                    })(e);
                    var n
                  })),
                  b: "a5a2e6c5-2-" + t + ",a5a2e6c5-1-" + t,
                  c: J.p({
                    kind: e.kind,
                    rechargeAmount: e.recharge_amount,
                    rechargeCoin: e.recharge_coin,
                    givingAmount: e.giving_amount,
                    givingCoin: e.giving_coin,
                    tag: e.tag,
                    tagType: e.tag_type,
                    vipTip: e.vip_tip,
                    vipDesc: e.vip_desc,
                    bottomDesc: e.bottom_desc,
                    vipDailyPrice: e.vip_daily_price,
                    vipOriginPrice: e.vip_origin_price,
                    isActive: e.is_default,
                    isDark: d.value
                  }),
                  d: "a5a2e6c5-1-" + t,
                  e: e.id
                }
              })),
              e: J.p({
                isDark: d.value
              })
            } : {}, {
              f: J.p({
                isDark: d.value
              })
            }) : {}, {
              g: 2 === (null == (_ = null == (y = e.chapterInfo) ? void 0 : y.chapter_paid) ? void 0 : _.show_type)
            }, 2 === (null == (b = null == (g = e.chapterInfo) ? void 0 : g.chapter_paid) ? void 0 : b.show_type) ? {
              h: J.p({
                chapterInfo: e.chapterInfo,
                skinConfig: e.skinConfig
              })
            } : {}, {
              i: J.n(e.isScrollStuck || (null == (k = null == (w = e.chapterInfo) ? void 0 : w.chapter) ? void 0 : k.content) ? "" : "qm-pay-panel-fixed")
            })
          }
      }
    }),
    te = J._export_sfc(ne, [
      ["__scopeId", "data-v-a5a2e6c5"]
    ]);
  tt.createComponent(te)
}));
//# sourceMappingURL=index.js.map
