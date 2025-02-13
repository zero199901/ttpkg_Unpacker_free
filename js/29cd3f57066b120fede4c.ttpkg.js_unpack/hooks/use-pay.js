define("hooks/use-pay.js", (function(e, r, t, n, o, a, s, u, i, c, p, l, d, f, m, y, g, v, _, b, h, w, O, k, j, x, P, R, S, I, D, F, N, q, L, A, E, G, M) {
    "use strict";
    function z(e) {
        return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        z(e)
    }
    function T(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter((function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))),
            t.push.apply(t, n)
        }
        return t
    }
    function U(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? T(Object(t), !0).forEach((function(r) {
                C(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach((function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }
    function C(e, r, t) {
        return (r = function(e) {
            var r = function(e, r) {
                if ("object" != z(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, r || "default");
                    if ("object" != z(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String: Number)(e)
            } (e, "string");
            return "symbol" == z(r) ? r: r + ""
        } (r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function H(e, r, t, n, a, s, u) {
        try {
            var i = e[s](u),
            c = i.value
        } catch(e) {
            return void t(e)
        }
        i.done ? r(c) : o.resolve(c).then(n, a)
    }
    function V(e) {
        return function() {
            var r = this,
            t = arguments;
            return new o((function(n, o) {
                var a = e.apply(r, t);
                function s(e) {
                    H(a, n, o, s, u, "next", e)
                }
                function u(e) {
                    H(a, n, o, s, u, "throw", e)
                }
                s(void 0)
            }))
        }
    }
    var B = e("../common/vendor.js"),
    J = e("../api/pay/index.js"),
    K = e("../api/qm-statistics.js"),
    Q = e("../store/modules/global.js").useGlobalStore();
    t.usePay = function() {
        var e, r, t = !1,
        n = B.index.getSystemInfoSync().platform,
        s = function() {
            var r = V(regeneratorRuntime.mark((function r(t) {
                return regeneratorRuntime.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.abrupt("return", (console.log(t.data, "params"), new o((function(r, n) {
                            var o;
                            tt.requestOrder({
                                data: t.data,
                                byteAuthorization: t.byte_authorization,
                                success: (o = V(regeneratorRuntime.mark((function e(o) {
                                    var a;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                            e.next = 3,
                                            u(o.orderId, t.trade_no);
                                        case 3:
                                            return a = e.sent,
                                            e.abrupt("return", r(a));
                                        case 7:
                                            return e.prev = 7,
                                            e.t0 = e.
                                            catch(0),
                                            e.abrupt("return", n(e.t0));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                        }
                                    }), e, null, [[0, 7]])
                                }))),
                                function(e) {
                                    return o.apply(this, arguments)
                                }),
                                fail: function(r) {
                                    console.log(r, "request-order-err"),
                                    p(t.trade_no),
                                    e.track({
                                        sensors: "Dypaid_RequestOrder_Fail"
                                    },
                                    {
                                        err_no: String(r.errNo),
                                        err_msg: r.errMsg,
                                        log_id: r.errLogId,
                                        trade_no: t.trade_no
                                    }),
                                    21050 === r.errNo ? n("iosNoSupportPay") : n("requestOrderFail")
                                }
                            })
                        }))));
                    case 1:
                    case "end":
                        return r.stop()
                    }
                }), r)
            })));
            return function(e) {
                return r.apply(this, arguments)
            }
        } (),
        u = function() {
            var r = V(regeneratorRuntime.mark((function r(a, s) {
                return regeneratorRuntime.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.abrupt("return", new o((function(r, o) {
                            var u, c, l = {
                                orderId: a
                            };
                            if ("ios" === n) {
                                if (!tt.canIUse("getOrderPayment.object.imId") || !tt.canIUse("getOrderPayment.object.immediate")) return p(s),
                                o("updateDyVersion");
                                Object.assign(l, {
                                    imId: Q.appConfigInfo.im_id,
                                    immediate: !1
                                })
                            }
                            tt.getOrderPayment(U(U({},
                            l), {},
                            {
                                success: (c = V(regeneratorRuntime.mark((function t(n) {
                                    var u;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return p(s),
                                            console.log(n, "get-order-payment-suc"),
                                            e.track({
                                                sensors: "Dypaid_GetOrderPayment_Success"
                                            },
                                            {
                                                order_id: n.orderId,
                                                log_id: n.logId,
                                                trade_no: s
                                            }),
                                            t.prev = 1,
                                            t.next = 4,
                                            i(a, s);
                                        case 4:
                                            u = t.sent,
                                            r(u),
                                            t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8,
                                            t.t0 = t.
                                            catch(1),
                                            o(t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                        }
                                    }), t, null, [[1, 8]])
                                }))),
                                function(e) {
                                    return c.apply(this, arguments)
                                }),
                                fail: (u = V(regeneratorRuntime.mark((function u(c) {
                                    var l, d, f;
                                    return regeneratorRuntime.wrap((function(u) {
                                        for (;;) switch (u.prev = u.next) {
                                        case 0:
                                            if (e.track({
                                                sensors:
                                                "Dypaid_GetOrderPayment_Fail"
                                            },
                                            {
                                                err_no: String(c.errNo),
                                                err_msg: c.errMsg,
                                                log_id: c.logId,
                                                trade_no: s
                                            }), console.log(c, "get-order-payment-err"), p(s), l = "android" === n && [1, 2, 9].includes(c.errNo), d = "ios" === n && !c.errMsg.includes("支付场景不符合"), !l && !d) {
                                                u.next = 16;
                                                break
                                            }
                                            return t = !0,
                                            u.prev = 4,
                                            u.next = 7,
                                            i(a, s, c.errNo);
                                        case 7:
                                            f = u.sent,
                                            r(f),
                                            u.next = 14;
                                            break;
                                        case 11:
                                            u.prev = 11,
                                            u.t0 = u.
                                            catch(4),
                                            o(u.t0);
                                        case 14:
                                            u.next = 17;
                                            break;
                                        case 16:
                                            "ios" !== n && 4 === c.errNo ? o("cancel") : o("requestOrderFail");
                                        case 17:
                                        case "end":
                                            return u.stop()
                                        }
                                    }), u, null, [[4, 11]])
                                }))),
                                function(e) {
                                    return u.apply(this, arguments)
                                })
                            }))
                        })));
                    case 1:
                    case "end":
                        return r.stop()
                    }
                }), r)
            })));
            return function(e, t) {
                return r.apply(this, arguments)
            }
        } (),
        i = function() {
            var r = V(regeneratorRuntime.mark((function r(n, a, s) {
                var u, i;
                return regeneratorRuntime.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                    case 0:
                        return u = 0,
                        tt.showLoading({
                            title: "查询订单结果...",
                            mask: !0
                        }),
                        i = function() {
                            var r = V(regeneratorRuntime.mark((function r() {
                                var l, d;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (u++, console.log("调用第 ".concat(u, " 次 API")), !(u > 10)) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", (t && e.track({
                                            sensors: "Dypaid_Fail_Result"
                                        },
                                        {
                                            err_no: String(s),
                                            is_success: !1,
                                            trade_no: a
                                        }), t = !1, p(a), e.track({
                                            sensors: "Dypaid_Order_Result_Timeout"
                                        },
                                        {
                                            trade_no: a
                                        }), o.reject("timeout")));
                                    case 2:
                                        return r.prev = 2,
                                        l = {
                                            order_id: n,
                                            trade_no: a
                                        },
                                        r.next = 6,
                                        J.api_asset_pay_sync_result(l);
                                    case 6:
                                        if (d = r.sent, console.log(d, "API响应"), 4 !== d.state) {
                                            r.next = 12;
                                            break
                                        }
                                        r.t0 = (t && e.track({
                                            sensors: "Dypaid_Fail_Result"
                                        },
                                        {
                                            err_no: String(s),
                                            is_success: !0,
                                            trade_no: a
                                        }), t = !1, p(a), e.track({
                                            sensors: "Dypaid_Order_Result_Success"
                                        },
                                        {
                                            trade_no: a,
                                            poll_count: String(u)
                                        }), o.resolve("success")),
                                        r.next = 15;
                                        break;
                                    case 12:
                                        return r.next = 14,
                                        c(1e3);
                                    case 14:
                                        r.t0 = i();
                                    case 15:
                                        return r.abrupt("return", r.t0);
                                    case 18:
                                        return r.prev = 18,
                                        r.t1 = r.
                                        catch(2),
                                        r.abrupt("return", (t && e.track({
                                            sensors: "Dypaid_Fail_Result"
                                        },
                                        {
                                            err_no: String(s),
                                            is_success: !1,
                                            trade_no: a
                                        }), t = !1, console.error(r.t1, "API调用出错"), p(a), o.reject("timeout")));
                                    case 21:
                                    case "end":
                                        return r.stop()
                                    }
                                }), r, null, [[2, 18]])
                            })));
                            return function() {
                                return r.apply(this, arguments)
                            }
                        } (),
                        r.abrupt("return", i());
                    case 4:
                    case "end":
                        return r.stop()
                    }
                }), r)
            })));
            return function(e, t, n) {
                return r.apply(this, arguments)
            }
        } (),
        c = function(e) {
            return new o((function(r) {
                return a(r, e)
            }))
        },
        p = function(r) {
            tt.hideLoading({
                fail: function() {
                    tt.hideLoading(),
                    e.track({
                        sensors: "Dypaid_HideLoading_Error"
                    },
                    r ? {
                        trade_no: r
                    }: {})
                }
            })
        };
        return {
            dyPay: (r = V(regeneratorRuntime.mark((function r(t, n) {
                var a, u, i, c;
                return regeneratorRuntime.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.prev = 0,
                        e = n,
                        a = U({},
                        t),
                        u = K.getServerParams(n),
                        tt.showLoading({
                            title: "正在获取订单",
                            mask: !0
                        }),
                        r.next = 6,
                        J.api_asset_pay(a, u);
                    case 6:
                        return i = r.sent,
                        r.prev = 7,
                        r.next = 10,
                        s(i);
                    case 10:
                        return c = r.sent,
                        r.abrupt("return", o.resolve(c));
                    case 14:
                        return r.prev = 14,
                        r.t0 = r.
                        catch(7),
                        r.abrupt("return", o.reject(r.t0));
                    case 17:
                        r.next = 22;
                        break;
                    case 19:
                        return r.prev = 19,
                        r.t1 = r.
                        catch(0),
                        r.abrupt("return", (p(), o.reject("assetPayFail")));
                    case 22:
                    case "end":
                        return r.stop()
                    }
                }), r, null, [[0, 19], [7, 14]])
            }))),
            function(e, t) {
                return r.apply(this, arguments)
            })
        }
    }
}));
//# sourceMappingURL=use-pay.js.map
