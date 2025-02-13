/** tt-checkSum: fa41f31f3ebb3506 **/
define("common/vendor.js", (function(t, e, n, r, i, o, a, s, c, u, f, l, p, h, d, v, g, _, y, m, b, w, k, S, x, C, O, A, I, P, j, E, B, D, R, L, T, M, H) {
    "use strict";
    /**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
    function N(t, e, n, r, o, a, s) {
        try {
            var c = t[a](s),
            u = c.value
        } catch(t) {
            return void n(t)
        }
        c.done ? e(u) : i.resolve(u).then(r, o)
    }
    function z(t) {
        return function() {
            var e = this,
            n = arguments;
            return new i((function(r, i) {
                var o = t.apply(e, n);
                function a(t) {
                    N(o, r, i, a, s, "next", t)
                }
                function s(t) {
                    N(o, r, i, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    function U(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))),
            n.push.apply(n, r)
        }
        return n
    }
    function F(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? U(Object(n), !0).forEach((function(e) {
                Y(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    function q(t, e, n) {
        return e = W(e),
        function(t, e) {
            if (e && ("object" == at(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            } (t)
        } (t, V() ? Reflect.construct(e, n || [], W(t).constructor) : e.apply(t, n))
    }
    function V() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch(t) {}
        return (V = function() {
            return !! t
        })()
    }
    function W(t) {
        return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        },
        W(t)
    }
    function K(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && J(t, e)
    }
    function J(t, e) {
        return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        },
        J(t, e)
    }
    function G(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = it(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return a = t.done,
                t
            },
            e: function(t) {
                s = !0,
                o = t
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function X(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function Z(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, et(r.key), r)
        }
    }
    function Q(t, e, n) {
        return e && Z(t.prototype, e),
        n && Z(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function Y(t, e, n) {
        return (e = et(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function et(t) {
        var e = function(t, e) {
            if ("object" != at(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" != at(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String: Number)(t)
        } (t, "string");
        return "symbol" == at(e) ? e: e + ""
    }
    function nt(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        } (t) ||
        function(t, e) {
            var n = null == t ? null: "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [],
                c = !0,
                u = !1;
                try {
                    if (o = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        c = !1
                    } else for (; ! (c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                } catch(t) {
                    u = !0,
                    i = t
                } finally {
                    try {
                        if (!c && null != n.
                        return && (a = n.
                        return (), Object(a) !== a)) return
                    } finally {
                        if (u) throw i
                    }
                }
                return s
            }
        } (t, e) || it(t, e) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        } ()
    }
    function rt(t) {
        return function(t) {
            if (Array.isArray(t)) return ot(t)
        } (t) ||
        function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        } (t) || it(t) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        } ()
    }
    function it(t, e) {
        if (t) {
            if ("string" == typeof t) return ot(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ot(t, e) : void 0
        }
    }
    function ot(t, e) { (null == e || e > t.length) && (e = t.length);
        for (var n = 0,
        r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    function at(t) {
        return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        },
        at(t)
    }
    function st(t, e) {
        var n = new Set(t.split(","));
        return function(t) {
            return n.has(t)
        }
    }
    var ct, ut = {},
    ft = [],
    lt = function() {},
    pt = function() {
        return ! 1
    },
    ht = function(t) {
        return 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
    },
    dt = function(t) {
        return t.startsWith("onUpdate:")
    },
    vt = Object.assign,
    gt = function(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    },
    _t = Object.prototype.hasOwnProperty,
    yt = function(t, e) {
        return _t.call(t, e)
    },
    mt = Array.isArray,
    bt = function(t) {
        return "[object Map]" === $t(t)
    },
    wt = function(t) {
        return "[object Set]" === $t(t)
    },
    kt = function(t) {
        return "function" == typeof t
    },
    St = function(t) {
        return "string" == typeof t
    },
    xt = function(t) {
        return "symbol" == at(t)
    },
    Ct = function(t) {
        return null !== t && "object" == at(t)
    },
    Ot = function(t) {
        return (Ct(t) || kt(t)) && kt(t.then) && kt(t.
        catch)
    },
    At = Object.prototype.toString,
    $t = function(t) {
        return At.call(t)
    },
    It = function(t) {
        return $t(t).slice(8, -1)
    },
    Pt = function(t) {
        return "[object Object]" === $t(t)
    },
    jt = function(t) {
        return St(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
    },
    Et = st(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Bt = function(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n))
        }
    },
    Dt = /-(\w)/g,
    Rt = Bt((function(t) {
        return t.replace(Dt, (function(t, e) {
            return e ? e.toUpperCase() : ""
        }))
    })),
    Lt = /\B([A-Z])/g,
    Tt = Bt((function(t) {
        return t.replace(Lt, "-$1").toLowerCase()
    })),
    Mt = Bt((function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    })),
    Ht = Bt((function(t) {
        return t ? "on".concat(Mt(t)) : ""
    })),
    Nt = function(t, e) {
        return ! Object.is(t, e)
    },
    zt = function(t, e) {
        for (var n = 0; n < t.length; n++) t[n](e)
    },
    Ut = function(t, e, n) {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    Ft = function(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t: e
    };
    function qt(t) {
        if (mt(t)) {
            for (var e = {},
            n = 0; n < t.length; n++) {
                var r = t[n],
                i = St(r) ? Jt(r) : qt(r);
                if (i) for (var o in i) e[o] = i[o]
            }
            return e
        }
        if (St(t) || Ct(t)) return t
    }
    var Vt = /;(?![^(]*\))/g,
    Wt = /:([^]+)/,
    Kt = /\/\*[^]*?\*\//g;
    function Jt(t) {
        var e = {};
        return t.replace(Kt, "").split(Vt).forEach((function(t) {
            if (t) {
                var n = t.split(Wt);
                n.length > 1 && (e[n[0].trim()] = n[1].trim())
            }
        })),
        e
    }
    function Gt(t) {
        var e = "";
        if (St(t)) e = t;
        else if (mt(t)) for (var n = 0; n < t.length; n++) {
            var r = Gt(t[n]);
            r && (e += r + " ")
        } else if (Ct(t)) for (var i in t) t[i] && (e += i + " ");
        return e.trim()
    }
    var Xt = function t(e, n) {
        return n && n.__v_isRef ? t(e, n.value) : bt(n) ? Y({},
        "Map(".concat(n.size, ")"), rt(n.entries()).reduce((function(t, e, n) {
            var r = nt(e, 2),
            i = r[0],
            o = r[1];
            return t[Zt(i, n) + " =>"] = o,
            t
        }), {})) : wt(n) ? Y({},
        "Set(".concat(n.size, ")"), rt(n.values()).map((function(t) {
            return Zt(t)
        }))) : xt(n) ? Zt(n) : !Ct(n) || mt(n) || Pt(n) ? n: String(n)
    },
    Zt = function(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return xt(t) ? "Symbol(".concat(null != (e = t.description) ? e: n, ")") : t
    },
    Qt = "d",
    Yt = "onShow",
    te = "onHide",
    ee = "onLaunch",
    ne = "onError",
    re = "onThemeChange",
    ie = "onPageNotFound",
    oe = "onUnhandledRejection",
    ae = "onExit",
    se = "onLoad",
    ce = "onReady",
    ue = "onUnload",
    fe = "onInit",
    le = "onSaveExitState",
    pe = "onResize",
    he = "onBackPress",
    de = "onPageScroll",
    ve = "onTabItemTap",
    ge = "onReachBottom",
    _e = "onPullDownRefresh",
    ye = "onShareTimeline",
    me = "onAddToFavorites",
    be = "onShareAppMessage",
    we = "onNavigationBarButtonTap",
    ke = "onNavigationBarSearchInputClicked",
    Se = "onNavigationBarSearchInputChanged",
    xe = "onNavigationBarSearchInputConfirmed",
    Ce = "onNavigationBarSearchInputFocusChanged",
    Oe = /:/g,
    Ae = function(t, e) {
        for (var n, r = 0; r < t.length; r++) n = t[r](e);
        return n
    };
    function $e(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function() {
            for (var r = arguments.length,
            i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return t && (e = t.apply(n, i), t = null),
            e
        }
    }
    function Ie(t, e) {
        if (St(e)) {
            var n = (e = e.replace(/\[(\d+)\]/g, ".$1")).split("."),
            r = n[0];
            return t || (t = {}),
            1 === n.length ? t[r] : Ie(t[r], n.slice(1).join("."))
        }
    }
    var Pe = encodeURIComponent;
    function je(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe,
        n = t ? Object.keys(t).map((function(n) {
            var r = t[n];
            return void 0 === at(r) || null === r ? r = "": Pt(r) && (r = JSON.stringify(r)),
            e(n) + "=" + e(r)
        })).filter((function(t) {
            return t.length > 0
        })).join("&") : null;
        return n ? "?".concat(n) : ""
    }
    var Ee, Be = function() {
        return Q((function t(e, n) {
            var r = this;
            X(this, t),
            this.id = e,
            this.listener = {},
            this.emitCache = [],
            n && Object.keys(n).forEach((function(t) {
                r.on(t, n[t])
            }))
        }), [{
            key: "emit",
            value: function(t) {
                for (var e = arguments.length,
                n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                var i = this.listener[t];
                if (!i) return this.emitCache.push({
                    eventName: t,
                    args: n
                });
                i.forEach((function(t) {
                    t.fn.apply(t.fn, n)
                })),
                this.listener[t] = i.filter((function(t) {
                    return "once" !== t.type
                }))
            }
        },
        {
            key: "on",
            value: function(t, e) {
                this._addListener(t, "on", e),
                this._clearCache(t)
            }
        },
        {
            key: "once",
            value: function(t, e) {
                this._addListener(t, "once", e),
                this._clearCache(t)
            }
        },
        {
            key: "off",
            value: function(t, e) {
                var n = this.listener[t];
                if (n) if (e) for (var r = 0; r < n.length;) n[r].fn === e && (n.splice(r, 1), r--),
                r++;
                else delete this.listener[t]
            }
        },
        {
            key: "_clearCache",
            value: function(t) {
                for (var e = 0; e < this.emitCache.length; e++) {
                    var n = this.emitCache[e],
                    r = t ? n.eventName === t ? t: null: n.eventName;
                    r && ("number" != typeof this.emit.apply(this, [r].concat(rt(n.args))) ? (this.emitCache.splice(e, 1), e--) : this.emitCache.pop())
                }
            }
        },
        {
            key: "_addListener",
            value: function(t, e, n) { (this.listener[t] || (this.listener[t] = [])).push({
                    fn: n,
                    type: e
                })
            }
        }])
    } (),
    De = [fe, se, Yt, te, ue, he, de, ve, ge, _e, ye, be, me, le, we, ke, Se, xe, Ce],
    Re = [Yt, te, ee, ne, re, ie, oe, ae, fe, se, ce, ue, pe, he, de, ve, ge, _e, ye, me, be, le, we, ke, Se, xe, Ce],
    Le = {
        onPageScroll: 1,
        onShareAppMessage: 2,
        onShareTimeline: 4
    };
    function Te(t, e) {
        return ! ((! (arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && !kt(e)) && (Re.indexOf(t) > -1 || 0 === t.indexOf("on"))
    }
    var Me = [],
    He = $e((function(t, e) {
        if (kt(t._component.onError)) return e(t)
    })),
    Ne = function() {};
    Ne.prototype = {
        on: function(t, e, n) {
            var r = this.e || (this.e = {});
            return (r[t] || (r[t] = [])).push({
                fn: e,
                ctx: n
            }),
            this
        },
        once: function(t, e, n) {
            var r = this;
            function i() {
                r.off(t, i),
                e.apply(n, arguments)
            }
            return i._ = e,
            this.on(t, i, n)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {}),
            r = n[t],
            i = [];
            if (r && e) {
                for (var o = r.length - 1; o >= 0; o--) if (r[o].fn === e || r[o].fn._ === e) {
                    r.splice(o, 1);
                    break
                }
                i = r
            }
            return i.length ? n[t] = i: delete n[t],
            this
        }
    };
    var ze = Ne,
    Ue = "zh-Hans",
    Fe = "zh-Hant",
    qe = "en",
    Ve = "fr",
    We = "es";
    function Ke(t, e) {
        if (t) {
            if ("chinese" === (t = (t = t.trim().replace(/_/g, "-")).toLowerCase())) return Ue;
            if (0 === t.indexOf("zh")) return t.indexOf("-hans") > -1 ? Ue: t.indexOf("-hant") > -1 ? Fe: (n = t, ["-tw", "-hk", "-mo", "-cht"].find((function(t) {
                return - 1 !== n.indexOf(t)
            })) ? Fe: Ue);
            var n, r = function(t, e) {
                return e.find((function(e) {
                    return 0 === t.indexOf(e)
                }))
            } (t, [qe, Ve, We]);
            return r || void 0
        }
    }
    function Je(t) {
        return function() {
            try {
                return t.apply(t, arguments)
            } catch(t) {
                console.error(t)
            }
        }
    }
    var Ge = 1,
    Xe = {};
    function Ze(t, e, n) {
        if ("number" == typeof t) {
            var r = Xe[t];
            if (r) return r.keepAlive || delete Xe[t],
            r.callback(e, n)
        }
        return e
    }
    var Qe = "success",
    Ye = "fail",
    tn = "complete";
    var en = "success",
    nn = "fail",
    rn = "complete",
    on = {},
    an = {};
    function sn(t, e) {
        return function(n) {
            return t(n, e) || n
        }
    }
    function cn(t, e, n) {
        for (var r = !1,
        o = 0; o < t.length; o++) {
            var a = t[o];
            if (r) r = i.resolve(sn(a, n));
            else {
                var s = a(e, n);
                if (Ot(s) && (r = i.resolve(s)), !1 === s) return {
                    then: function() {},
                    catch: function() {}
                }
            }
        }
        return r || {
            then: function(t) {
                return t(e)
            },
            catch: function() {}
        }
    }
    function un(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return [en, nn, rn].forEach((function(n) {
            var r = t[n];
            if (mt(r)) {
                var i = e[n];
                e[n] = function(t) {
                    cn(r, t, e).then((function(t) {
                        return kt(i) && i(t) || t
                    }))
                }
            }
        })),
        e
    }
    function fn(t, e) {
        var n = [];
        mt(on.returnValue) && n.push.apply(n, rt(on.returnValue));
        var r = an[t];
        return r && mt(r.returnValue) && n.push.apply(n, rt(r.returnValue)),
        n.forEach((function(t) {
            e = t(e) || e
        })),
        e
    }
    function ln(t) {
        var e = Object.create(null);
        Object.keys(on).forEach((function(t) {
            "returnValue" !== t && (e[t] = on[t].slice())
        }));
        var n = an[t];
        return n && Object.keys(n).forEach((function(t) {
            "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]))
        })),
        e
    }
    function pn(t, e, n, r) {
        var i = ln(t);
        return i && Object.keys(i).length ? mt(i.invoke) ? cn(i.invoke, n).then((function(n) {
            return e.apply(void 0, [un(ln(t), n)].concat(rt(r)))
        })) : e.apply(void 0, [un(i, n)].concat(rt(r))) : e.apply(void 0, [n].concat(rt(r)))
    }
    function hn(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = e + ":fail" + (n ? " " + n: "");
        return delete r.errCode,
        Ze(t, vt({
            errMsg: i
        },
        r))
    }
    function dn(t, e, n, r) {
        var i = function(t, e) {
            t[0]
        } (e);
        if (i) return i
    }
    function vn(t, e, n, r) {
        return function(n) {
            var i = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.beforeAll,
                i = n.beforeSuccess;
                Pt(e) || (e = {});
                var o = function(t) {
                    var e = {};
                    for (var n in t) {
                        var r = t[n];
                        kt(r) && (e[n] = Je(r), delete t[n])
                    }
                    return e
                } (e),
                a = o.success,
                s = o.fail,
                c = o.complete,
                u = kt(a),
                f = kt(s),
                l = kt(c),
                p = Ge++;
                return function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    Xe[t] = {
                        name: e,
                        keepAlive: r,
                        callback: n
                    }
                } (p, t, (function(n) { (n = n || {}).errMsg = function(t, e) {
                        return t && -1 !== t.indexOf(":fail") ? e + t.substring(t.indexOf(":fail")) : e + ":ok"
                    } (n.errMsg, t),
                    kt(r) && r(n),
                    n.errMsg === t + ":ok" ? (kt(i) && i(n, e), u && a(n)) : f && s(n),
                    l && c(n)
                })),
                p
            } (t, n, r),
            o = dn(0, [n]);
            return o ? hn(i, t, o) : e(n, {
                resolve: function(e) {
                    return function(t, e, n) {
                        return Ze(t, vt(n || {},
                        {
                            errMsg: e + ":ok"
                        }))
                    } (i, t, e)
                },
                reject: function(e, n) {
                    return hn(i, t,
                    function(t) {
                        return ! t || St(t) ? t: t.stack ? (console.error(t.message + "\n" + t.stack), t.message) : t
                    } (e), n)
                }
            })
        }
    }
    function gn(t, e, n, r) {
        return function(t, e, n, r) {
            return function() {
                for (var t = arguments.length,
                n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var i = dn(0, n);
                if (i) throw new Error(i);
                return e.apply(null, n)
            }
        } (0, e)
    }
    var _n = !1,
    yn = 0,
    mn = 0;
    var bn = gn(0, (function(t, e) {
        if (0 === yn &&
        function() {
            var t = tt.getSystemInfoSync(),
            e = t.platform,
            n = t.pixelRatio,
            r = t.windowWidth;
            yn = r,
            mn = n,
            _n = "ios" === e
        } (), 0 === (t = Number(t))) return 0;
        var n = t / 750 * (e || yn);
        return n < 0 && (n = -n),
        0 === (n = Math.floor(n + 1e-4)) && (n = 1 !== mn && _n ? .5 : 1),
        t < 0 ? -n: n
    }));
    function wn(t, e) {
        Object.keys(e).forEach((function(n) {
            kt(e[n]) && (t[n] = function(t, e) {
                var n = e ? t ? t.concat(e) : mt(e) ? e: [e] : t;
                return n ?
                function(t) {
                    for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                    return e
                } (n) : n
            } (t[n], e[n]))
        }))
    }
    function kn(t, e) {
        t && e && Object.keys(e).forEach((function(n) {
            var r = t[n],
            i = e[n];
            mt(r) && kt(i) && gt(r, i)
        }))
    }
    var Sn, xn, Cn, On = gn(0, (function(t, e) {
        St(t) && Pt(e) ? wn(an[t] || (an[t] = {}), e) : Pt(t) && wn(on, t)
    })),
    An = gn(0, (function(t, e) {
        St(t) ? Pt(e) ? kn(an[t], e) : delete an[t] : Pt(t) && kn(on, t)
    })),
    $n = new ze,
    In = gn(0, (function(t, e) {
        return $n.on(t, e),
        function() {
            return $n.off(t, e)
        }
    })),
    Pn = gn(0, (function(t, e) {
        return $n.once(t, e),
        function() {
            return $n.off(t, e)
        }
    })),
    jn = gn(0, (function(t, e) {
        t ? (mt(t) || (t = [t]), t.forEach((function(t) {
            return $n.off(t, e)
        }))) : $n.e = {}
    })),
    En = gn(0, (function(t) {
        for (var e = arguments.length,
        n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        $n.emit.apply($n, [t].concat(n))
    }));
    function Bn(t) {
        try {
            return JSON.parse(t)
        } catch(t) {}
        return t
    }
    var Dn = [];
    function Rn(t, e) {
        Dn.forEach((function(n) {
            n(t, e)
        })),
        Dn.length = 0
    }
    var Ln = function(t, e) {
        return function() {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
            return function(t) {
                return ! (!Pt(t) || ![Qe, Ye, tn].find((function(e) {
                    return kt(t[e])
                })))
            } (n) ? fn(t, pn(t, e, n, o)) : fn(t, new i((function(r, i) {
                pn(t, e, vt(n, {
                    success: r,
                    fail: i
                }), o)
            })))
        }
    } ("getPushClientId",
    function(t, e, n, r) {
        return vn(t, (function(t, e) {
            var n = e.resolve,
            r = e.reject;
            i.resolve().then((function() {
                void 0 === Cn && (Cn = !1, Sn = "", xn = "uniPush is not enabled"),
                Dn.push((function(t, e) {
                    t ? n({
                        cid: t
                    }) : r(e)
                })),
                void 0 !== Sn && Rn(Sn, xn)
            }))
        }), 0, undefined)
    } ("getPushClientId")),
    Tn = [],
    Mn = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/,
    Hn = /^create|Manager$/,
    Nn = ["createBLEConnection"],
    zn = ["createBLEConnection"],
    Un = /^on|^off/;
    function Fn(t) {
        return Hn.test(t) && -1 === Nn.indexOf(t)
    }
    function qn(t) {
        return Mn.test(t) && -1 === zn.indexOf(t)
    }
    function Vn(t, e) {
        return function(t) {
            return ! (Fn(t) || qn(t) ||
            function(t) {
                return Un.test(t) && "onPush" !== t
            } (t))
        } (t) && kt(e) ?
        function() {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
            return kt(n.success) || kt(n.fail) || kt(n.complete) ? fn(t, pn(t, e, n, o)) : fn(t, new i((function(r, i) {
                pn(t, e, vt({},
                n, {
                    success: r,
                    fail: i
                }), o)
            })))
        }: e
    }
    i.prototype.
    finally || (i.prototype.
    finally = function(t) {
        var e = this.constructor;
        return this.then((function(n) {
            return e.resolve(t && t()).then((function() {
                return n
            }))
        }), (function(n) {
            return e.resolve(t && t()).then((function() {
                throw n
            }))
        }))
    });
    var Wn = ["success", "fail", "cancel", "complete"],
    Kn = function() {
        var t = kt(getApp) && getApp({
            allowDefault: !0
        });
        return t && t.$vm ? t.$vm.$locale: Ke(tt.getSystemInfoSync().language) || qe
    },
    Jn = [];
    "undefined" != typeof global && (global.getLocale = Kn);
    var Gn, Xn = "__DC_STAT_UUID";
    var Zn = {
        returnValue: function(t, e) { !
            function(t, e) {
                if (t.safeArea) {
                    var n = t.safeArea;
                    e.safeAreaInsets = {
                        top: n.top,
                        left: n.left,
                        right: t.windowWidth - n.right,
                        bottom: t.screenHeight - n.bottom
                    }
                }
            } (t, e),
            function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt;
                return function(e, n) { (Gn = Gn || t.getStorageSync(Xn)) || (Gn = Date.now() + "" + Math.floor(1e7 * Math.random()), tt.setStorage({
                        key: Xn,
                        data: Gn
                    })),
                    n.deviceId = Gn
                }
            } ()(t, e),
            function(t, e) {
                var n, r = t.brand,
                i = void 0 === r ? "": r,
                o = t.model,
                a = void 0 === o ? "": o,
                s = t.system,
                c = void 0 === s ? "": s,
                u = t.language,
                f = void 0 === u ? "": u,
                l = t.theme,
                p = t.version,
                h = (t.platform, t.fontSizeSetting),
                d = t.SDKVersion,
                v = t.pixelRatio,
                g = t.deviceOrientation,
                _ = "";
                _ = c.split(" ")[0] || "",
                n = c.split(" ")[1] || "";
                var y, m = p,
                b = function(t, e) {
                    for (var n = t.deviceType || "phone",
                    r = {
                        ipad: "pad",
                        windows: "pc",
                        mac: "pc"
                    },
                    i = Object.keys(r), o = e.toLocaleLowerCase(), a = 0; a < i.length; a++) {
                        var s = i[a];
                        if ( - 1 !== o.indexOf(s)) {
                            n = r[s];
                            break
                        }
                    }
                    return n
                } (t, a),
                w = function(t) {
                    var e = t;
                    return e && (e = e.toLocaleLowerCase()),
                    e
                } (i),
                k = function(t) {
                    "mp-toutiao".split("-")[1];
                    return t.hostName,
                    t.appName
                } (t),
                S = g,
                x = v,
                C = d,
                O = f.replace(/_/g, "-"),
                A = {
                    appId: "",
                    appName: "",
                    appVersion: "1.0.0",
                    appVersionCode: "100",
                    appLanguage: (y = O, Kn ? Kn() : y),
                    uniCompileVersion: "4.21",
                    uniRuntimeVersion: "4.21",
                    uniPlatform: "mp-toutiao",
                    deviceBrand: w,
                    deviceModel: a,
                    deviceType: b,
                    devicePixelRatio: x,
                    deviceOrientation: S,
                    osName: _.toLocaleLowerCase(),
                    osVersion: n,
                    hostTheme: l,
                    hostVersion: m,
                    hostLanguage: O,
                    hostName: k,
                    hostSDKVersion: C,
                    hostFontSizeSetting: h,
                    windowTop: 0,
                    windowBottom: 0,
                    osLanguage: void 0,
                    osTheme: void 0,
                    ua: void 0,
                    hostPackageName: void 0,
                    browserName: void 0,
                    browserVersion: void 0
                };
                vt(e, A)
            } (t, e)
        }
    },
    Qn = Zn,
    Yn = {
        args: function(t, e) {
            var n = parseInt(t.current);
            if (!isNaN(n)) {
                var r = t.urls;
                if (mt(r)) {
                    var i = r.length;
                    return i ? (n < 0 ? n = 0 : n >= i && (n = i - 1), n > 0 ? (e.current = r[n], e.urls = r.filter((function(t, e) {
                        return ! (e < n) || t !== r[n]
                    }))) : e.current = r[0], {
                        indicator: !1,
                        loop: !1
                    }) : void 0
                }
            }
        }
    },
    tr = {},
    er = 0;
    function nr(t) {
        var e = tr[t];
        return delete tr[t],
        e
    }
    var rr, ir = {
        $on: In,
        $off: jn,
        $once: Pn,
        $emit: En,
        upx2px: bn,
        interceptors: {},
        addInterceptor: On,
        removeInterceptor: An,
        onCreateVueApp: function(t) {
            if (Ee) return t(Ee);
            Me.push(t)
        },
        invokeCreateVueAppHook: function(t) {
            Ee = t,
            Me.forEach((function(e) {
                return e(t)
            }))
        },
        getLocale: Kn,
        setLocale: function(t) {
            var e = kt(getApp) && getApp();
            return !! e && (e.$vm.$locale !== t && (e.$vm.$locale = t, Jn.forEach((function(e) {
                return e({
                    locale: t
                })
            })), !0))
        },
        onLocaleChange: function(t) { - 1 === Jn.indexOf(t) && Jn.push(t)
        },
        getPushClientId: Ln,
        onPushMessage: function(t) { - 1 === Tn.indexOf(t) && Tn.push(t)
        },
        offPushMessage: function(t) {
            if (t) {
                var e = Tn.indexOf(t);
                e > -1 && Tn.splice(e, 1)
            } else Tn.length = 0
        },
        invokePushCallback: function(t) {
            if ("enabled" === t.type) Cn = !0;
            else if ("clientId" === t.type) Sn = t.cid,
            xn = t.errMsg,
            Rn(Sn, t.errMsg);
            else if ("pushMsg" === t.type) for (var e = {
                type: "receive",
                data: Bn(t.message)
            },
            n = 0; n < Tn.length && ((0, Tn[n])(e), !e.stopped); n++);
            else "click" === t.type && Tn.forEach((function(e) {
                e({
                    type: "click",
                    data: Bn(t.message)
                })
            }))
        }
    },
    or = (rr = {
        oauth: ["toutiao"],
        share: ["toutiao"],
        payment: ["toutiao"],
        push: ["toutiao"]
    },
    function(t) {
        var e, n = t.service,
        r = t.success,
        i = t.fail,
        o = t.complete;
        rr[n] ? (e = {
            errMsg: "getProvider:ok",
            service: n,
            provider: rr[n]
        },
        kt(r) && r(e)) : (e = {
            errMsg: "getProvider:fail:服务[" + n + "]不存在"
        },
        kt(i) && i(e)),
        kt(o) && o(e)
    }),
    ar = Object.freeze({
        __proto__: null,
        getProvider: or
    }),
    sr = function() {
        var t;
        return {
            args: function(e) {
                t = function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    er++;
                    var n = new tt.EventChannel(er, t);
                    return e && (tr[er] = n),
                    n
                } (e.events),
                e.url && (e.url = e.url + ( - 1 === e.url.indexOf("?") ? "?": "&") + "__id__=" + t.id)
            },
            returnValue: function(e) {
                e.eventChannel = t
            }
        }
    } (),
    cr = {
        name: tt.pay ? "pay": "requestPayment",
        args: {
            orderInfo: tt.pay ? "orderInfo": "data"
        }
    },
    ur = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt,
        r = function(t) {
            function e(t, e, n) {
                return function(i) {
                    return e(r(t, i, n))
                }
            }
            function n(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (Pt(n)) {
                    var a = !0 === o ? n: {};
                    for (var s in kt(r) && (r = r(n, a) || {}), n) if (yt(r, s)) {
                        var c = r[s];
                        kt(c) && (c = c(n[s], n, a)),
                        c ? St(c) ? a[c] = n[s] : Pt(c) && (a[c.name ? c.name: s] = c.value) : console.warn("字节跳动小程序 ".concat(t, " 暂不支持 ").concat(s))
                    } else if ( - 1 !== Wn.indexOf(s)) {
                        var u = n[s];
                        kt(u) && (a[s] = e(t, u, i))
                    } else o || yt(a, s) || (a[s] = n[s]);
                    return a
                }
                return kt(n) && (n = e(t, n, i)),
                n
            }
            function r(e, r, i) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return kt(t.returnValue) && (r = t.returnValue(e, r)),
                n(e, r, i, {},
                o)
            }
            return function(e, i) {
                if (!yt(t, e)) return i;
                var o = t[e];
                return o ?
                function(t, i) {
                    var a = o;
                    kt(o) && (a = o(t));
                    var s = [t = n(e, t, a.args, a.returnValue)];
                    void 0 !== i && s.push(i);
                    var c = tt[a.name || e].apply(tt, s);
                    return qn(e) ? r(e, c, a.returnValue, Fn(e)) : c
                }: function() {
                    console.error("字节跳动小程序 暂不支持".concat(e))
                }
            }
        } (e),
        i = {
            get: function(e, i) {
                return yt(e, i) ? e[i] : yt(t, i) ? Vn(i, t[i]) : yt(ir, i) ? Vn(i, ir[i]) : Vn(i, r(i, n[i]))
            }
        };
        return n.getEventChannel = nr,
        new Proxy({},
        i)
    } (ar, Object.freeze({
        __proto__: null,
        chooseVideo: {
            args: {
                camera: !1
            }
        },
        connectSocket: {
            args: {
                method: !1
            }
        },
        getFileInfo: {
            args: {
                digestAlgorithm: !1
            }
        },
        getSystemInfo: Zn,
        getSystemInfoSync: Qn,
        getUserInfo: {
            args: {
                lang: !1,
                timeout: !1
            }
        },
        login: {
            args: {
                scopes: !1,
                timeout: !1
            }
        },
        navigateTo: sr,
        previewImage: Yn,
        redirectTo: {},
        requestPayment: cr,
        scanCode: {
            args: {
                onlyFromCamera: !1,
                scanType: !1
            }
        },
        startAccelerometer: {
            args: {
                interval: !1
            }
        }
    }));
    new Set(Object.getOwnPropertyNames(Symbol).filter((function(t) {
        return "arguments" !== t && "caller" !== t
    })).map((function(t) {
        return Symbol[t]
    })).filter(xt));
    var fr, lr, pr = ct || (ct = void 0 !== j ? j: void 0 !== h ? h: void 0 !== f ? f: "undefined" != typeof global ? global: {}),
    hr = function(t, e) {
        var n;
        return (n = pr[t]) || (n = pr[t] = []),
        n.push(e),
        function(t) {
            n.length > 1 ? n.forEach((function(e) {
                return e(t)
            })) : n[0](t)
        }
    };
    hr("__VUE_INSTANCE_SETTERS__", (function(t) {
        return t
    })),
    hr("__VUE_SSR_SETTERS__", (function(t) {
        return t
    }));
    var dr = function() {
        return Q((function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            X(this, t),
            this.detached = e,
            this._active = !0,
            this.effects = [],
            this.cleanups = [],
            this.parent = fr,
            !e && fr && (this.index = (fr.scopes || (fr.scopes = [])).push(this) - 1)
        }), [{
            key: "active",
            get: function() {
                return this._active
            }
        },
        {
            key: "run",
            value: function(t) {
                if (this._active) {
                    var e = fr;
                    try {
                        return fr = this,
                        t()
                    } finally {
                        fr = e
                    }
                }
            }
        },
        {
            key: "on",
            value: function() {
                fr = this
            }
        },
        {
            key: "off",
            value: function() {
                fr = this.parent
            }
        },
        {
            key: "stop",
            value: function(t) {
                if (this._active) {
                    var e, n;
                    for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
                    for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
                    if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
                    if (!this.detached && this.parent && !t) {
                        var r = this.parent.scopes.pop();
                        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                    }
                    this.parent = void 0,
                    this._active = !1
                }
            }
        }])
    } ();
    function vr(t) {
        return new dr(t)
    }
    function gr() {
        return fr
    }
    var _r = function() {
        return Q((function t(e, n, r, i) {
            X(this, t),
            this.fn = e,
            this.trigger = n,
            this.scheduler = r,
            this.active = !0,
            this.deps = [],
            this._dirtyLevel = 4,
            this._trackId = 0,
            this._runnings = 0,
            this._shouldSchedule = !1,
            this._depsLength = 0,
            function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr;
                e && e.active && e.effects.push(t)
            } (this, i)
        }), [{
            key: "dirty",
            get: function() {
                if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
                    this._dirtyLevel = 1,
                    xr();
                    for (var t = 0; t < this._depsLength; t++) {
                        var e = this.deps[t];
                        if (e.computed && (e.computed.value, this._dirtyLevel >= 4)) break
                    }
                    1 === this._dirtyLevel && (this._dirtyLevel = 0),
                    Cr()
                }
                return this._dirtyLevel >= 4
            },
            set: function(t) {
                this._dirtyLevel = t ? 4 : 0
            }
        },
        {
            key: "run",
            value: function() {
                if (this._dirtyLevel = 0, !this.active) return this.fn();
                var t = wr,
                e = lr;
                try {
                    return wr = !0,
                    lr = this,
                    this._runnings++,
                    yr(this),
                    this.fn()
                } finally {
                    mr(this),
                    this._runnings--,
                    lr = e,
                    wr = t
                }
            }
        },
        {
            key: "stop",
            value: function() {
                var t;
                this.active && (yr(this), mr(this), null == (t = this.onStop) || t.call(this), this.active = !1)
            }
        }])
    } ();
    function yr(t) {
        t._trackId++,
        t._depsLength = 0
    }
    function mr(t) {
        if (t.deps.length > t._depsLength) {
            for (var e = t._depsLength; e < t.deps.length; e++) br(t.deps[e], t);
            t.deps.length = t._depsLength
        }
    }
    function br(t, e) {
        var n = t.get(e);
        void 0 !== n && e._trackId !== n && (t.delete(e), 0 === t.size && t.cleanup())
    }
    var wr = !0,
    kr = 0,
    Sr = [];
    function xr() {
        Sr.push(wr),
        wr = !1
    }
    function Cr() {
        var t = Sr.pop();
        wr = void 0 === t || t
    }
    function Or() {
        kr++
    }
    function Ar() {
        for (kr--; ! kr && Ir.length;) Ir.shift()()
    }
    function $r(t, e, n) {
        if (e.get(t) !== t._trackId) {
            e.set(t, t._trackId);
            var r = t.deps[t._depsLength];
            r !== e ? (r && br(r, t), t.deps[t._depsLength++] = e) : t._depsLength++
        }
    }
    var Ir = [];
    function Pr(t, e, n) {
        Or();
        var r, i = G(t.keys());
        try {
            for (i.s(); ! (r = i.n()).done;) {
                var o = r.value,
                a = void 0;
                o._dirtyLevel < e && (null != a ? a: a = t.get(o) === o._trackId) && (o._shouldSchedule || (o._shouldSchedule = 0 === o._dirtyLevel), o._dirtyLevel = e),
                o._shouldSchedule && (null != a ? a: a = t.get(o) === o._trackId) && (o.trigger(), o._runnings && !o.allowRecurse || 2 === o._dirtyLevel || (o._shouldSchedule = !1, o.scheduler && Ir.push(o.scheduler)))
            }
        } catch(t) {
            i.e(t)
        } finally {
            i.f()
        }
        Ar()
    }
    var jr = function(t, e) {
        var n = new Map;
        return n.cleanup = t,
        n.computed = e,
        n
    },
    Er = new WeakMap,
    Br = Symbol(""),
    Dr = Symbol("");
    function Rr(t, e, n) {
        if (wr && lr) {
            var r = Er.get(t);
            r || Er.set(t, r = new Map);
            var i = r.get(n);
            i || r.set(n, i = jr((function() {
                return r.delete(n)
            }))),
            $r(lr, i)
        }
    }
    function Lr(t, e, n, r, i, o) {
        var a = Er.get(t);
        if (a) {
            var s = [];
            if ("clear" === e) s = rt(a.values());
            else if ("length" === n && mt(t)) {
                var c = Number(r);
                a.forEach((function(t, e) { ("length" === e || !xt(e) && e >= c) && s.push(t)
                }))
            } else switch (void 0 !== n && s.push(a.get(n)), e) {
            case "add":
                mt(t) ? jt(n) && s.push(a.get("length")) : (s.push(a.get(Br)), bt(t) && s.push(a.get(Dr)));
                break;
            case "delete":
                mt(t) || (s.push(a.get(Br)), bt(t) && s.push(a.get(Dr)));
                break;
            case "set":
                bt(t) && s.push(a.get(Br))
            }
            Or();
            var u, f = G(s);
            try {
                for (f.s(); ! (u = f.n()).done;) {
                    var l = u.value;
                    l && Pr(l, 4)
                }
            } catch(t) {
                f.e(t)
            } finally {
                f.f()
            }
            Ar()
        }
    }
    var Tr = st("__proto__,__v_isRef,__isVue"),
    Mr = new Set(Object.getOwnPropertyNames(Symbol).filter((function(t) {
        return "arguments" !== t && "caller" !== t
    })).map((function(t) {
        return Symbol[t]
    })).filter(xt)),
    Hr = function() {
        var t = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach((function(e) {
            t[e] = function() {
                for (var t = Ci(this), n = 0, r = this.length; n < r; n++) Rr(t, 0, n + "");
                for (var i = arguments.length,
                o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                var s = t[e].apply(t, o);
                return - 1 === s || !1 === s ? t[e].apply(t, rt(o.map(Ci))) : s
            }
        })),
        ["push", "pop", "shift", "unshift", "splice"].forEach((function(e) {
            t[e] = function() {
                xr(),
                Or();
                for (var t = arguments.length,
                n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var i = Ci(this)[e].apply(this, n);
                return Ar(),
                Cr(),
                i
            }
        })),
        t
    } ();
    function Nr(t) {
        var e = Ci(this);
        return Rr(e, 0, t),
        e.hasOwnProperty(t)
    }
    var zr = function() {
        return Q((function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            X(this, t),
            this._isReadonly = e,
            this._isShallow = n
        }), [{
            key: "get",
            value: function(t, e, n) {
                var r = this._isReadonly,
                i = this._isShallow;
                if ("__v_isReactive" === e) return ! r;
                if ("__v_isReadonly" === e) return r;
                if ("__v_isShallow" === e) return i;
                if ("__v_raw" === e) return n === (r ? i ? yi: _i: i ? gi: vi).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t: void 0;
                var o = mt(t);
                if (!r) {
                    if (o && yt(Hr, e)) return Reflect.get(Hr, e, n);
                    if ("hasOwnProperty" === e) return Nr
                }
                var a = Reflect.get(t, e, n);
                return (xt(e) ? Mr.has(e) : Tr(e)) ? a: (r || Rr(t, 0, e), i ? a: Ei(a) ? o && jt(e) ? a: a.value: Ct(a) ? r ? bi(a) : mi(a) : a)
            }
        }])
    } (),
    Ur = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return X(this, e),
            q(this, e, [!1, t])
        }
        return K(e, t),
        Q(e, [{
            key: "set",
            value: function(t, e, n, r) {
                var i = t[e];
                if (!this._isShallow) {
                    var o = Si(i);
                    if (xi(n) || Si(n) || (i = Ci(i), n = Ci(n)), !mt(t) && Ei(i) && !Ei(n)) return ! o && (i.value = n, !0)
                }
                var a = mt(t) && jt(e) ? Number(e) < t.length: yt(t, e),
                s = Reflect.set(t, e, n, r);
                return t === Ci(r) && (a ? Nt(n, i) && Lr(t, "set", e, n) : Lr(t, "add", e, n)),
                s
            }
        },
        {
            key: "deleteProperty",
            value: function(t, e) {
                var n = yt(t, e);
                t[e];
                var r = Reflect.deleteProperty(t, e);
                return r && n && Lr(t, "delete", e, void 0),
                r
            }
        },
        {
            key: "has",
            value: function(t, e) {
                var n = Reflect.has(t, e);
                return xt(e) && Mr.has(e) || Rr(t, 0, e),
                n
            }
        },
        {
            key: "ownKeys",
            value: function(t) {
                return Rr(t, 0, mt(t) ? "length": Br),
                Reflect.ownKeys(t)
            }
        }])
    } (zr),
    Fr = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return X(this, e),
            q(this, e, [!0, t])
        }
        return K(e, t),
        Q(e, [{
            key: "set",
            value: function(t, e) {
                return ! 0
            }
        },
        {
            key: "deleteProperty",
            value: function(t, e) {
                return ! 0
            }
        }])
    } (zr),
    qr = new Ur,
    Vr = new Fr,
    Wr = new Ur(!0),
    Kr = function(t) {
        return t
    },
    Jr = function(t) {
        return Reflect.getPrototypeOf(t)
    };
    function Gr(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = Ci(t = t.__v_raw),
        o = Ci(e);
        n || (Nt(e, o) && Rr(i, 0, e), Rr(i, 0, o));
        var a = Jr(i).has,
        s = r ? Kr: n ? $i: Ai;
        return a.call(i, e) ? s(t.get(e)) : a.call(i, o) ? s(t.get(o)) : void(t !== i && t.get(e))
    }
    function Xr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = this.__v_raw,
        r = Ci(n),
        i = Ci(t);
        return e || (Nt(t, i) && Rr(r, 0, t), Rr(r, 0, i)),
        t === i ? n.has(t) : n.has(t) || n.has(i)
    }
    function Zr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t = t.__v_raw,
        !e && Rr(Ci(t), 0, Br),
        Reflect.get(t, "size", t)
    }
    function Qr(t) {
        t = Ci(t);
        var e = Ci(this);
        return Jr(e).has.call(e, t) || (e.add(t), Lr(e, "add", t, t)),
        this
    }
    function Yr(t, e) {
        e = Ci(e);
        var n = Ci(this),
        r = Jr(n),
        i = r.has,
        o = r.get,
        a = i.call(n, t);
        a || (t = Ci(t), a = i.call(n, t));
        var s = o.call(n, t);
        return n.set(t, e),
        a ? Nt(e, s) && Lr(n, "set", t, e) : Lr(n, "add", t, e),
        this
    }
    function ti(t) {
        var e = Ci(this),
        n = Jr(e),
        r = n.has,
        i = n.get,
        o = r.call(e, t);
        o || (t = Ci(t), o = r.call(e, t)),
        i && i.call(e, t);
        var a = e.delete(t);
        return o && Lr(e, "delete", t, void 0),
        a
    }
    function ei() {
        var t = Ci(this),
        e = 0 !== t.size,
        n = t.clear();
        return e && Lr(t, "clear", void 0, void 0),
        n
    }
    function ni(t, e) {
        return function(n, r) {
            var i = this,
            o = i.__v_raw,
            a = Ci(o),
            s = e ? Kr: t ? $i: Ai;
            return ! t && Rr(a, 0, Br),
            o.forEach((function(t, e) {
                return n.call(r, s(t), s(e), i)
            }))
        }
    }
    function ri(t, e, n) {
        return function() {
            var r = this.__v_raw,
            i = Ci(r),
            o = bt(i),
            a = "entries" === t || t === Symbol.iterator && o,
            s = "keys" === t && o,
            c = r[t].apply(r, arguments),
            u = n ? Kr: e ? $i: Ai;
            return ! e && Rr(i, 0, s ? Dr: Br),
            Y({
                next: function() {
                    var t = c.next(),
                    e = t.value,
                    n = t.done;
                    return n ? {
                        value: e,
                        done: n
                    }: {
                        value: a ? [u(e[0]), u(e[1])] : u(e),
                        done: n
                    }
                }
            },
            Symbol.iterator, (function() {
                return this
            }))
        }
    }
    function ii(t) {
        return function() {
            return "delete" !== t && ("clear" === t ? void 0 : this)
        }
    }
    var oi = function() {
        var t = {
            get: function(t) {
                return Gr(this, t)
            },
            get size() {
                return Zr(this)
            },
            has: Xr,
            add: Qr,
            set: Yr,
            delete: ti,
            clear: ei,
            forEach: ni(!1, !1)
        },
        e = {
            get: function(t) {
                return Gr(this, t, !1, !0)
            },
            get size() {
                return Zr(this)
            },
            has: Xr,
            add: Qr,
            set: Yr,
            delete: ti,
            clear: ei,
            forEach: ni(!1, !0)
        },
        n = {
            get: function(t) {
                return Gr(this, t, !0)
            },
            get size() {
                return Zr(this, !0)
            },
            has: function(t) {
                return Xr.call(this, t, !0)
            },
            add: ii("add"),
            set: ii("set"),
            delete: ii("delete"),
            clear: ii("clear"),
            forEach: ni(!0, !1)
        },
        r = {
            get: function(t) {
                return Gr(this, t, !0, !0)
            },
            get size() {
                return Zr(this, !0)
            },
            has: function(t) {
                return Xr.call(this, t, !0)
            },
            add: ii("add"),
            set: ii("set"),
            delete: ii("delete"),
            clear: ii("clear"),
            forEach: ni(!0, !0)
        };
        return ["keys", "values", "entries", Symbol.iterator].forEach((function(i) {
            t[i] = ri(i, !1, !1),
            n[i] = ri(i, !0, !1),
            e[i] = ri(i, !1, !0),
            r[i] = ri(i, !0, !0)
        })),
        [t, n, e, r]
    } (),
    ai = nt(oi, 4),
    si = ai[0],
    ci = ai[1],
    ui = ai[2],
    fi = ai[3];
    function li(t, e) {
        var n = e ? t ? fi: ui: t ? ci: si;
        return function(e, r, i) {
            return "__v_isReactive" === r ? !t: "__v_isReadonly" === r ? t: "__v_raw" === r ? e: Reflect.get(yt(n, r) && r in e ? n: e, r, i)
        }
    }
    var pi = {
        get: li(!1, !1)
    },
    hi = {
        get: li(!1, !0)
    },
    di = {
        get: li(!0, !1)
    },
    vi = new WeakMap,
    gi = new WeakMap,
    _i = new WeakMap,
    yi = new WeakMap;
    function mi(t) {
        return Si(t) ? t: wi(t, !1, qr, pi, vi)
    }
    function bi(t) {
        return wi(t, !0, Vr, di, _i)
    }
    function wi(t, e, n, r, i) {
        if (!Ct(t)) return t;
        if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
        var o = i.get(t);
        if (o) return o;
        var a, s = (a = t).__v_skip || !Object.isExtensible(a) ? 0 : function(t) {
            switch (t) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
            }
        } (It(a));
        if (0 === s) return t;
        var c = new Proxy(t, 2 === s ? r: n);
        return i.set(t, c),
        c
    }
    function ki(t) {
        return Si(t) ? ki(t.__v_raw) : !(!t || !t.__v_isReactive)
    }
    function Si(t) {
        return ! (!t || !t.__v_isReadonly)
    }
    function xi(t) {
        return ! (!t || !t.__v_isShallow)
    }
    function Ci(t) {
        var e = t && t.__v_raw;
        return e ? Ci(e) : t
    }
    function Oi(t) {
        return Object.isExtensible(t) && Ut(t, "__v_skip", !0),
        t
    }
    var Ai = function(t) {
        return Ct(t) ? mi(t) : t
    },
    $i = function(t) {
        return Ct(t) ? bi(t) : t
    },
    Ii = function() {
        return Q((function t(e, n, r, i) {
            var o = this;
            X(this, t),
            this.getter = e,
            this._setter = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this.__v_isReadonly = !1,
            this.effect = new _r((function() {
                return e(o._value)
            }), (function() {
                return ji(o, 2 === o.effect._dirtyLevel ? 2 : 3)
            })),
            this.effect.computed = this,
            this.effect.active = this._cacheable = !i,
            this.__v_isReadonly = r
        }), [{
            key: "value",
            get: function() {
                var t = Ci(this);
                return t._cacheable && !t.effect.dirty || !Nt(t._value, t._value = t.effect.run()) || ji(t, 4),
                Pi(t),
                t.effect._dirtyLevel >= 2 && ji(t, 2),
                t._value
            },
            set: function(t) {
                this._setter(t)
            }
        },
        {
            key: "_dirty",
            get: function() {
                return this.effect.dirty
            },
            set: function(t) {
                this.effect.dirty = t
            }
        }])
    } ();
    function Pi(t) {
        var e;
        wr && lr && (t = Ci(t), $r(lr, null != (e = t.dep) ? e: t.dep = jr((function() {
            return t.dep = void 0
        }), t instanceof Ii ? t: void 0)))
    }
    function ji(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        n = (t = Ci(t)).dep;
        n && Pr(n, e)
    }
    function Ei(t) {
        return ! (!t || !0 !== t.__v_isRef)
    }
    function Bi(t) {
        return function(t, e) {
            return Ei(t) ? t: new Di(t, !1)
        } (t)
    }
    var Di = function() {
        return Q((function t(e, n) {
            X(this, t),
            this.__v_isShallow = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this._rawValue = n ? e: Ci(e),
            this._value = n ? e: Ai(e)
        }), [{
            key: "value",
            get: function() {
                return Pi(this),
                this._value
            },
            set: function(t) {
                var e = this.__v_isShallow || xi(t) || Si(t);
                t = e ? t: Ci(t),
                Nt(t, this._rawValue) && (this._rawValue = t, this._value = e ? t: Ai(t), ji(this, 4))
            }
        }])
    } ();
    function Ri(t) {
        return Ei(t) ? t.value: t
    }
    var Li = {
        get: function(t, e, n) {
            return Ri(Reflect.get(t, e, n))
        },
        set: function(t, e, n, r) {
            var i = t[e];
            return Ei(i) && !Ei(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r)
        }
    };
    function Ti(t) {
        return ki(t) ? t: new Proxy(t, Li)
    }
    var Mi = function() {
        return Q((function t(e) {
            var n = this;
            X(this, t),
            this.dep = void 0,
            this.__v_isRef = !0;
            var r = e((function() {
                return Pi(n)
            }), (function() {
                return ji(n)
            })),
            i = r.get,
            o = r.set;
            this._get = i,
            this._set = o
        }), [{
            key: "value",
            get: function() {
                return this._get()
            },
            set: function(t) {
                this._set(t)
            }
        }])
    } (),
    Hi = function() {
        return Q((function t(e, n, r) {
            X(this, t),
            this._object = e,
            this._key = n,
            this._defaultValue = r,
            this.__v_isRef = !0
        }), [{
            key: "value",
            get: function() {
                var t = this._object[this._key];
                return void 0 === t ? this._defaultValue: t
            },
            set: function(t) {
                this._object[this._key] = t
            }
        },
        {
            key: "dep",
            get: function() {
                return t = Ci(this._object),
                e = this._key,
                null == (n = Er.get(t)) ? void 0 : n.get(e);
                var t, e, n
            }
        }])
    } ();
    function Ni(t, e, n) {
        var r = t[e];
        return Ei(r) ? r: new Hi(t, e, n)
    }
    function zi(t, e, n, r) {
        try {
            return r ? t.apply(void 0, rt(r)) : t()
        } catch(t) {
            Fi(t, e, n)
        }
    }
    function Ui(t, e, n, r) {
        if (kt(t)) {
            var i = zi(t, e, n, r);
            return i && Ot(i) && i.
            catch((function(t) {
                Fi(t, e, n)
            })),
            i
        }
        for (var o = [], a = 0; a < t.length; a++) o.push(Ui(t[a], e, n, r));
        return o
    }
    function Fi(t, e, n) {
        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (e && e.vnode, e) {
            for (var i = e.parent,
            o = e.proxy,
            a = "https://vuejs.org/error-reference/#runtime-".concat(n); i;) {
                var s = i.ec;
                if (s) for (var c = 0; c < s.length; c++) if (!1 === s[c](t, o, a)) return;
                i = i.parent
            }
            var u = e.appContext.config.errorHandler;
            if (u) return void zi(u, null, 10, [t, o, a])
        } !
        function(t, e, n) {
            console.error(t)
        } (t, 0, 0, r)
    }
    var qi = !1,
    Vi = !1,
    Wi = [],
    Ki = 0,
    Ji = [],
    Gi = null,
    Xi = 0,
    Zi = i.resolve(),
    Qi = null;
    function Yi(t) {
        var e = Qi || Zi;
        return t ? e.then(this ? t.bind(this) : t) : e
    }
    function to(t) {
        Wi.length && Wi.includes(t, qi && t.allowRecurse ? Ki + 1 : Ki) || (null == t.id ? Wi.push(t) : Wi.splice(function(t) {
            for (var e = Ki + 1,
            n = Wi.length; e < n;) {
                var r = e + n >>> 1,
                i = Wi[r],
                o = oo(i);
                o < t || o === t && i.pre ? e = r + 1 : n = r
            }
            return e
        } (t.id), 0, t), eo())
    }
    function eo() {
        qi || Vi || (Vi = !0, Qi = Zi.then(so))
    }
    function no(t) {
        return Wi.indexOf(t) > -1
    }
    function ro(t) {
        mt(t) ? Ji.push.apply(Ji, rt(t)) : Gi && Gi.includes(t, t.allowRecurse ? Xi + 1 : Xi) || Ji.push(t),
        eo()
    }
    function io(t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qi ? Ki + 1 : 0; n < Wi.length; n++) {
            var r = Wi[n];
            r && r.pre && (Wi.splice(n, 1), n--, r())
        }
    }
    var oo = function(t) {
        return null == t.id ? 1 / 0 : t.id
    },
    ao = function(t, e) {
        var n = oo(t) - oo(e);
        if (0 === n) {
            if (t.pre && !e.pre) return - 1;
            if (e.pre && !t.pre) return 1
        }
        return n
    };
    function so(t) {
        Vi = !1,
        qi = !0,
        Wi.sort(ao);
        try {
            for (Ki = 0; Ki < Wi.length; Ki++) {
                var e = Wi[Ki];
                e && !1 !== e.active && zi(e, null, 14)
            }
        } finally {
            Ki = 0,
            Wi.length = 0,
            function(t) {
                if (Ji.length) {
                    var e, n = rt(new Set(Ji)).sort((function(t, e) {
                        return oo(t) - oo(e)
                    }));
                    if (Ji.length = 0, Gi) return void(e = Gi).push.apply(e, rt(n));
                    for (Gi = n, Xi = 0; Xi < Gi.length; Xi++) Gi[Xi]();
                    Gi = null,
                    Xi = 0
                }
            } (),
            qi = !1,
            Qi = null,
            (Wi.length || Ji.length) && so()
        }
    }
    function co(t, e) {
        if (!t.isUnmounted) {
            for (var n = t.vnode.props || ut,
            r = arguments.length,
            i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
            var a = i,
            s = e.startsWith("update:"),
            c = s && e.slice(7);
            if (c && c in n) {
                var u = n["".concat("modelValue" === c ? "model": c, "Modifiers")] || ut,
                f = u.number;
                u.trim && (a = i.map((function(t) {
                    return St(t) ? t.trim() : t
                }))),
                f && (a = i.map(Ft))
            }
            var l, p = n[l = Ht(e)] || n[l = Ht(Rt(e))]; ! p && s && (p = n[l = Ht(Tt(e))]),
            p && Ui(p, t, 6, a);
            var h = n[l + "Once"];
            if (h) {
                if (t.emitted) {
                    if (t.emitted[l]) return
                } else t.emitted = {};
                t.emitted[l] = !0,
                Ui(h, t, 6, a)
            }
        }
    }
    function uo(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e.emitsCache,
        i = r.get(t);
        if (void 0 !== i) return i;
        var o = t.emits,
        a = {},
        s = !1;
        if (!kt(t)) {
            var c = function(t) {
                var n = uo(t, e, !0);
                n && (s = !0, vt(a, n))
            }; ! n && e.mixins.length && e.mixins.forEach(c),
            t.extends && c(t.extends),
            t.mixins && t.mixins.forEach(c)
        }
        return o || s ? (mt(o) ? o.forEach((function(t) {
            return a[t] = null
        })) : vt(a, o), Ct(t) && r.set(t, a), a) : (Ct(t) && r.set(t, null), null)
    }
    function fo(t, e) {
        return ! (!t || !ht(e)) && (e = e.slice(2).replace(/Once$/, ""), yt(t, e[0].toLowerCase() + e.slice(1)) || yt(t, Tt(e)) || yt(t, e))
    }
    var lo = null;
    function po(t) {
        var e = lo;
        return lo = t,
        t && t.type.__scopeId,
        e
    }
    function ho(t, e) {
        return t && (t[e] || t[Rt(e)] || t[Mt(Rt(e))])
    }
    var vo = {};
    function go(t, e, n) {
        return _o(t, e, n)
    }
    function _o(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
        r = n.immediate,
        i = n.deep,
        o = n.flush,
        a = n.once;
        n.onTrack,
        n.onTrigger;
        if (e && a) {
            var s = e;
            e = function() {
                s.apply(void 0, arguments),
                w()
            }
        }
        var c, u, f = _a,
        l = function(t) {
            return ! 0 === i ? t: bo(t, !1 === i ? 1 : void 0)
        },
        p = !1,
        h = !1;
        if (Ei(t) ? (c = function() {
            return t.value
        },
        p = xi(t)) : ki(t) ? (c = function() {
            return l(t)
        },
        p = !0) : mt(t) ? (h = !0, p = t.some((function(t) {
            return ki(t) || xi(t)
        })), c = function() {
            return t.map((function(t) {
                return Ei(t) ? t.value: ki(t) ? l(t) : kt(t) ? zi(t, f, 2) : void 0
            }))
        }) : c = kt(t) ? e ?
        function() {
            return zi(t, f, 2)
        }: function() {
            return u && u(),
            Ui(t, f, 3, [g])
        }: lt, e && i) {
            var d = c;
            c = function() {
                return bo(d())
            }
        }
        var v, g = function(t) {
            u = m.onStop = function() {
                zi(t, f, 4),
                u = m.onStop = void 0
            }
        },
        _ = h ? new Array(t.length).fill(vo) : vo,
        y = function() {
            if (m.active && m.dirty) if (e) {
                var t = m.run(); (i || p || (h ? t.some((function(t, e) {
                    return Nt(t, _[e])
                })) : Nt(t, _))) && (u && u(), Ui(e, f, 3, [t, _ === vo ? void 0 : h && _[0] === vo ? [] : _, g]), _ = t)
            } else m.run()
        };
        y.allowRecurse = !!e,
        "sync" === o ? v = y: "post" === o ? v = function() {
            return la(y, f && f.suspense)
        }: (y.pre = !0, f && (y.id = f.uid), v = function() {
            return to(y)
        });
        var m = new _r(c, lt, v),
        b = gr(),
        w = function() {
            m.stop(),
            b && gt(b.effects, m)
        };
        return e ? r ? y() : _ = m.run() : "post" === o ? la(m.run.bind(m), f && f.suspense) : m.run(),
        w
    }
    function yo(t, e, n) {
        var r, i = this.proxy,
        o = St(t) ? t.includes(".") ? mo(i, t) : function() {
            return i[t]
        }: t.bind(i, i);
        kt(e) ? r = e: (r = e.handler, n = e);
        var a = ma(this),
        s = _o(o, r.bind(i), n);
        return a(),
        s
    }
    function mo(t, e) {
        var n = e.split(".");
        return function() {
            for (var e = t,
            r = 0; r < n.length && e; r++) e = e[n[r]];
            return e
        }
    }
    function bo(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
        if (!Ct(t) || t.__v_skip) return t;
        if (e && e > 0) {
            if (n >= e) return t;
            n++
        }
        if ((r = r || new Set).has(t)) return t;
        if (r.add(t), Ei(t)) bo(t.value, e, n, r);
        else if (mt(t)) for (var i = 0; i < t.length; i++) bo(t[i], e, n, r);
        else if (wt(t) || bt(t)) t.forEach((function(t) {
            bo(t, e, n, r)
        }));
        else if (Pt(t)) for (var o in t) bo(t[o], e, n, r);
        return t
    }
    function wo() {
        return {
            app: null,
            config: {
                isNativeTag: pt,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }
    var ko = 0,
    So = null;
    function xo(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = _a || lo;
        if (r || So) {
            var i = r ? null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides: r.parent.provides: So._context.provides;
            if (i && t in i) return i[t];
            if (arguments.length > 1) return n && kt(e) ? e.call(r && r.proxy) : e
        }
    }
    var Co = function(t) {
        return t.type.__isKeepAlive
    };
    function Oo(t, e) {
        $o(t, "a", e)
    }
    function Ao(t, e) {
        $o(t, "da", e)
    }
    function $o(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _a,
        r = t.__wdc || (t.__wdc = function() {
            for (var e = n; e;) {
                if (e.isDeactivated) return;
                e = e.parent
            }
            return t()
        });
        if (Po(e, r, n), n) for (var i = n.parent; i && i.parent;) Co(i.parent.vnode) && Io(r, e, n, i),
        i = i.parent
    }
    function Io(t, e, n, r) {
        var i = Po(e, t, r, !0);
        To((function() {
            gt(r[e], i)
        }), n)
    }
    function Po(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _a,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (n) { (function(t) {
                return De.indexOf(t) > -1
            })(t) && (n = n.root);
            var i = n[t] || (n[t] = []),
            o = e.__weh || (e.__weh = function() {
                if (!n.isUnmounted) {
                    xr();
                    for (var r = arguments.length,
                    i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    var a = ma(n),
                    s = Ui(e, n, t, i);
                    return a(),
                    Cr(),
                    s
                }
            });
            return r ? i.unshift(o) : i.push(o),
            o
        }
    }
    var jo = function(t) {
        return function(e) {
            return (!ka || "sp" === t) && Po(t, (function() {
                return e.apply(void 0, arguments)
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _a)
        }
    },
    Eo = jo("bm"),
    Bo = jo("m"),
    Do = jo("bu"),
    Ro = jo("u"),
    Lo = jo("bum"),
    To = jo("um"),
    Mo = jo("sp"),
    Ho = jo("rtg"),
    No = jo("rtc");
    function zo(t) {
        Po("ec", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _a)
    }
    var Uo = function t(e) {
        return e ? wa(e) ? Ca(e) || e.proxy: t(e.parent) : null
    },
    Fo = vt(Object.create(null), {
        $: function(t) {
            return t
        },
        $el: function(t) {
            return t.__$el || (t.__$el = {})
        },
        $data: function(t) {
            return t.data
        },
        $props: function(t) {
            return t.props
        },
        $attrs: function(t) {
            return t.attrs
        },
        $slots: function(t) {
            return t.slots
        },
        $refs: function(t) {
            return t.refs
        },
        $parent: function(t) {
            return Uo(t.parent)
        },
        $root: function(t) {
            return Uo(t.root)
        },
        $emit: function(t) {
            return t.emit
        },
        $options: function(t) {
            return Xo(t)
        },
        $forceUpdate: function(t) {
            return t.f || (t.f = function() {
                t.effect.dirty = !0,
                to(t.update)
            })
        },
        $watch: function(t) {
            return yo.bind(t)
        }
    }),
    qo = function(t, e) {
        return t !== ut && !t.__isScriptSetup && yt(t, e)
    },
    Vo = {
        get: function(t, e) {
            var n, r = t._,
            i = r.ctx,
            o = r.setupState,
            a = r.data,
            s = r.props,
            c = r.accessCache,
            u = r.type,
            f = r.appContext;
            if ("$" !== e[0]) {
                var l = c[e];
                if (void 0 !== l) switch (l) {
                case 1:
                    return o[e];
                case 2:
                    return a[e];
                case 4:
                    return i[e];
                case 3:
                    return s[e]
                } else {
                    if (qo(o, e)) return c[e] = 1,
                    o[e];
                    if (a !== ut && yt(a, e)) return c[e] = 2,
                    a[e];
                    if ((n = r.propsOptions[0]) && yt(n, e)) return c[e] = 3,
                    s[e];
                    if (i !== ut && yt(i, e)) return c[e] = 4,
                    i[e];
                    Ko && (c[e] = 0)
                }
            }
            var p, h, d = Fo[e];
            return d ? ("$attrs" === e && Rr(r, 0, e), d(r)) : (p = u.__cssModules) && (p = p[e]) ? p: i !== ut && yt(i, e) ? (c[e] = 4, i[e]) : (h = f.config.globalProperties, yt(h, e) ? h[e] : void 0)
        },
        set: function(t, e, n) {
            var r = t._,
            i = r.data,
            o = r.setupState,
            a = r.ctx;
            return qo(o, e) ? (o[e] = n, !0) : i !== ut && yt(i, e) ? (i[e] = n, !0) : !(yt(r.props, e) || "$" === e[0] && e.slice(1) in r || (a[e] = n, 0))
        },
        has: function(t, e) {
            var n, r = t._,
            i = r.data,
            o = r.setupState,
            a = r.accessCache,
            s = r.ctx,
            c = r.appContext,
            u = r.propsOptions;
            return !! a[e] || i !== ut && yt(i, e) || qo(o, e) || (n = u[0]) && yt(n, e) || yt(s, e) || yt(Fo, e) || yt(c.config.globalProperties, e)
        },
        defineProperty: function(t, e, n) {
            return null != n.get ? t._.accessCache[e] = 0 : yt(n, "value") && this.set(t, e, n.value, null),
            Reflect.defineProperty(t, e, n)
        }
    };
    function Wo(t) {
        return mt(t) ? t.reduce((function(t, e) {
            return t[e] = null,
            t
        }), {}) : t
    }
    var Ko = !0;
    function Jo(t, e, n) {
        Ui(mt(t) ? t.map((function(t) {
            return t.bind(e.proxy)
        })) : t.bind(e.proxy), e, n)
    }
    function Go(t, e, n, r) {
        var i = r.includes(".") ? mo(n, r) : function() {
            return n[r]
        };
        if (St(t)) {
            var o = e[t];
            kt(o) && go(i, o)
        } else if (kt(t)) go(i, t.bind(n));
        else if (Ct(t)) if (mt(t)) t.forEach((function(t) {
            return Go(t, e, n, r)
        }));
        else {
            var a = kt(t.handler) ? t.handler.bind(n) : e[t.handler];
            kt(a) && go(i, a, t)
        }
    }
    function Xo(t) {
        var e, n = t.type,
        r = n.mixins,
        i = n.extends,
        o = t.appContext,
        a = o.mixins,
        s = o.optionsCache,
        c = o.config.optionMergeStrategies,
        u = s.get(n);
        return u ? e = u: a.length || r || i ? (e = {},
        a.length && a.forEach((function(t) {
            return Zo(e, t, c, !0)
        })), Zo(e, n, c)) : e = n,
        Ct(n) && s.set(n, e),
        e
    }
    function Zo(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = e.mixins,
        o = e.extends;
        for (var a in o && Zo(t, o, n, !0), i && i.forEach((function(e) {
            return Zo(t, e, n, !0)
        })), e) if (r && "expose" === a);
        else {
            var s = Qo[a] || n && n[a];
            t[a] = s ? s(t[a], e[a]) : e[a]
        }
        return t
    }
    var Qo = {
        data: Yo,
        props: ra,
        emits: ra,
        methods: na,
        computed: na,
        beforeCreate: ea,
        created: ea,
        beforeMount: ea,
        mounted: ea,
        beforeUpdate: ea,
        updated: ea,
        beforeDestroy: ea,
        beforeUnmount: ea,
        destroyed: ea,
        unmounted: ea,
        activated: ea,
        deactivated: ea,
        errorCaptured: ea,
        serverPrefetch: ea,
        components: na,
        directives: na,
        watch: function(t, e) {
            if (!t) return e;
            if (!e) return t;
            var n = vt(Object.create(null), t);
            for (var r in e) n[r] = ea(t[r], e[r]);
            return n
        },
        provide: Yo,
        inject: function(t, e) {
            return na(ta(t), ta(e))
        }
    };
    function Yo(t, e) {
        return e ? t ?
        function() {
            return vt(kt(t) ? t.call(this, this) : t, kt(e) ? e.call(this, this) : e)
        }: e: t
    }
    function ta(t) {
        if (mt(t)) {
            for (var e = {},
            n = 0; n < t.length; n++) e[t[n]] = t[n];
            return e
        }
        return t
    }
    function ea(t, e) {
        return t ? rt(new Set([].concat(t, e))) : e
    }
    function na(t, e) {
        return t ? vt(Object.create(null), t, e) : e
    }
    function ra(t, e) {
        return t ? mt(t) && mt(e) ? rt(new Set([].concat(rt(t), rt(e)))) : vt(Object.create(null), Wo(t), Wo(null != e ? e: {})) : e
    }
    function ia(t, e, n, r) {
        var i, o = nt(t.propsOptions, 2),
        a = o[0],
        s = o[1],
        c = !1;
        if (e) for (var u in e) if (!Et(u)) {
            var f = e[u],
            l = void 0;
            a && yt(a, l = Rt(u)) ? s && s.includes(l) ? (i || (i = {}))[l] = f: n[l] = f: fo(t.emitsOptions, u) || u in r && f === r[u] || (r[u] = f, c = !0)
        }
        if (s) for (var p = Ci(n), h = i || ut, d = 0; d < s.length; d++) {
            var v = s[d];
            n[v] = oa(a, p, v, h[v], t, !yt(h, v))
        }
        return c
    }
    function oa(t, e, n, i, o, a) {
        var s = t[n];
        if (null != s) {
            var c = yt(s, "default");
            if (c && void 0 === i) {
                var u = s.
            default;
                if (s.type !== r && !s.skipFactory && kt(u)) {
                    var f = o.propsDefaults;
                    if (n in f) i = f[n];
                    else {
                        var l = ma(o);
                        i = f[n] = u.call(null, e),
                        l()
                    }
                } else i = u
            }
            s[0] && (a && !c ? i = !1 : !s[1] || "" !== i && i !== Tt(n) || (i = !0))
        }
        return i
    }
    function aa(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e.propsCache,
        i = r.get(t);
        if (i) return i;
        var o = t.props,
        a = {},
        s = [],
        c = !1;
        if (!kt(t)) {
            var u = function(t) {
                c = !0;
                var n = nt(aa(t, e, !0), 2),
                r = n[0],
                i = n[1];
                vt(a, r),
                i && s.push.apply(s, rt(i))
            }; ! n && e.mixins.length && e.mixins.forEach(u),
            t.extends && u(t.extends),
            t.mixins && t.mixins.forEach(u)
        }
        if (!o && !c) return Ct(t) && r.set(t, ft),
        ft;
        if (mt(o)) for (var f = 0; f < o.length; f++) {
            var l = Rt(o[f]);
            sa(l) && (a[l] = ut)
        } else if (o) for (var p in o) {
            var h = Rt(p);
            if (sa(h)) {
                var d = o[p],
                v = a[h] = mt(d) || kt(d) ? {
                    type: d
                }: vt({},
                d);
                if (v) {
                    var g = fa(Boolean, v.type),
                    _ = fa(String, v.type);
                    v[0] = g > -1,
                    v[1] = _ < 0 || g < _,
                    (g > -1 || yt(v, "default")) && s.push(h)
                }
            }
        }
        var y = [a, s];
        return Ct(t) && r.set(t, y),
        y
    }
    function sa(t) {
        return "$" !== t[0] && !Et(t)
    }
    function ca(t) {
        return null === t ? "null": "function" == typeof t ? t.name || "": "object" == at(t) && t.constructor && t.constructor.name || ""
    }
    function ua(t, e) {
        return ca(t) === ca(e)
    }
    function fa(t, e) {
        return mt(e) ? e.findIndex((function(e) {
            return ua(e, t)
        })) : kt(e) && ua(e, t) ? 0 : -1
    }
    var la = ro;
    var pa = wo(),
    ha = 0;
    function da(t, e, n) {
        var r = t.type,
        i = (e ? e.appContext: t.appContext) || pa,
        o = {
            uid: ha++,
            vnode: t,
            type: r,
            parent: e,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new dr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides: Object.create(i.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: aa(r, i),
            emitsOptions: uo(r, i),
            emit: null,
            emitted: null,
            propsDefaults: ut,
            inheritAttrs: r.inheritAttrs,
            ctx: ut,
            data: ut,
            props: ut,
            attrs: ut,
            slots: ut,
            refs: ut,
            setupState: ut,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId: 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
        return o.ctx = {
            _: o
        },
        o.root = e ? e.root: o,
        o.emit = co.bind(null, o),
        t.ce && t.ce(o),
        o
    }
    var va, ga, _a = null,
    ya = function() {
        return _a || lo
    };
    va = function(t) {
        _a = t
    },
    ga = function(t) {
        ka = t
    };
    var ma = function(t) {
        var e = _a;
        return va(t),
        t.scope.on(),
        function() {
            t.scope.off(),
            va(e)
        }
    },
    ba = function() {
        _a && _a.scope.off(),
        va(null)
    };
    function wa(t) {
        return 4 & t.vnode.shapeFlag
    }
    var ka = !1;
    function Sa(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e && ga(e);
        var n = t.vnode.props,
        r = wa(t); !
        function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = {},
            o = {};
            for (var a in t.propsDefaults = Object.create(null), ia(t, e, i, o), t.propsOptions[0]) a in i || (i[a] = void 0);
            n ? t.props = r ? i: wi(i, !1, Wr, hi, gi) : t.type.props ? t.props = i: t.props = o,
            t.attrs = o
        } (t, n, r, e);
        var i = r ?
        function(t, e) {
            var n = t.type;
            t.accessCache = Object.create(null),
            t.proxy = Oi(new Proxy(t.ctx, Vo));
            var r = n.setup;
            if (r) {
                var i = t.setupContext = r.length > 1 ?
                function(t) {
                    return {
                        get attrs() {
                            return function(t) {
                                return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
                                    get: function(e, n) {
                                        return Rr(t, 0, "$attrs"),
                                        e[n]
                                    }
                                }))
                            } (t)
                        },
                        slots: t.slots,
                        emit: t.emit,
                        expose: function(e) {
                            t.exposed = e || {}
                        }
                    }
                } (t) : null,
                o = ma(t);
                xr();
                var a = zi(r, t, 0, [t.props, i]);
                Cr(),
                o(),
                Ot(a) ? a.then(ba, ba) : function(t, e, n) {
                    kt(e) ? t.render = e: Ct(e) && (t.setupState = Ti(e)),
                    xa(t)
                } (t, a)
            } else xa(t)
        } (t) : void 0;
        return e && ga(!1),
        i
    }
    function xa(t, e, n) {
        var r = t.type;
        t.render || (t.render = r.render || lt);
        var i = ma(t);
        xr();
        try { !
            function(t) {
                var e = Xo(t),
                n = t.proxy,
                r = t.ctx;
                Ko = !1,
                e.beforeCreate && Jo(e.beforeCreate, t, "bc");
                var i = e.data,
                o = e.computed,
                a = e.methods,
                s = e.watch,
                c = (e.provide, e.inject, e.created),
                u = e.beforeMount,
                f = e.mounted,
                l = e.beforeUpdate,
                p = e.updated,
                h = e.activated,
                d = e.deactivated,
                v = (e.beforeDestroy, e.beforeUnmount),
                g = (e.destroyed, e.unmounted),
                _ = e.render,
                y = e.renderTracked,
                m = e.renderTriggered,
                b = e.errorCaptured,
                w = e.serverPrefetch,
                k = e.expose,
                S = e.inheritAttrs,
                x = e.components,
                C = e.directives;
                e.filters;
                if (a) for (var O in a) {
                    var A = a[O];
                    kt(A) && (r[O] = A.bind(n))
                }
                if (i) {
                    var $ = i.call(n, n);
                    Ct($) && (t.data = mi($))
                }
                if (Ko = !0, o) {
                    var I = function() {
                        var t = o[P],
                        e = kt(t) ? t.bind(n, n) : kt(t.get) ? t.get.bind(n, n) : lt,
                        i = !kt(t) && kt(t.set) ? t.set.bind(n) : lt,
                        a = Oa({
                            get: e,
                            set: i
                        });
                        Object.defineProperty(r, P, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return a.value
                            },
                            set: function(t) {
                                return a.value = t
                            }
                        })
                    };
                    for (var P in o) I()
                }
                if (s) for (var j in s) Go(s[j], r, n, j);
                function E(t, e) {
                    mt(e) ? e.forEach((function(e) {
                        return t(e.bind(n))
                    })) : e && t(e.bind(n))
                }
                if (r.$callCreatedHook = function(e) {
                    if (c) return Jo(c, t, "c")
                },
                E(Eo, u), E(Bo, f), E(Do, l), E(Ro, p), E(Oo, h), E(Ao, d), E(zo, b), E(No, y), E(Ho, m), E(Lo, v), E(To, g), E(Mo, w), mt(k)) if (k.length) {
                    var B = t.exposed || (t.exposed = {});
                    k.forEach((function(t) {
                        Object.defineProperty(B, t, {
                            get: function() {
                                return n[t]
                            },
                            set: function(e) {
                                return n[t] = e
                            }
                        })
                    }))
                } else t.exposed || (t.exposed = {});
                _ && t.render === lt && (t.render = _),
                null != S && (t.inheritAttrs = S),
                x && (t.components = x),
                C && (t.directives = C),
                t.ctx.$onApplyOptions && t.ctx.$onApplyOptions(e, t, n)
            } (t)
        } finally {
            Cr(),
            i()
        }
    }
    function Ca(t) {
        if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(Ti(Oi(t.exposed)), {
            get: function(e, n) {
                return n in e ? e[n] : t.proxy[n]
            },
            has: function(t, e) {
                return e in t || e in Fo
            }
        }))
    }
    var Oa = function(t, e) {
        var n = function(t, e) {
            var n, r, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = kt(t);
            return o ? (n = t, r = lt) : (n = t.get, r = t.set),
            new Ii(n, r, o || !r, i)
        } (t, 0, ka);
        return n
    };
    function Aa(t) {
        return Ri(t)
    }
    var $a = "[object Array]",
    Ia = "[object Object]";
    function Pa(t, e) {
        var n = {};
        return ja(t, e),
        Ea(t, e, "", n),
        n
    }
    function ja(t, e) {
        if ((t = Aa(t)) !== e) {
            var n = $t(t),
            r = $t(e);
            if (n == Ia && r == Ia) for (var i in e) {
                var o = t[i];
                void 0 === o ? t[i] = null: ja(o, e[i])
            } else n == $a && r == $a && t.length >= e.length && e.forEach((function(e, n) {
                ja(t[n], e)
            }))
        }
    }
    function Ea(t, e, n, r) {
        if ((t = Aa(t)) !== e) {
            var i = $t(t),
            o = $t(e);
            if (i == Ia) if (o != Ia || Object.keys(t).length < Object.keys(e).length) Ba(r, n, t);
            else {
                var a = function(i) {
                    var o = Aa(t[i]),
                    a = e[i],
                    s = $t(o),
                    c = $t(a);
                    if (s != $a && s != Ia) o != a && Ba(r, ("" == n ? "": n + ".") + i, o);
                    else if (s == $a) c != $a || o.length < a.length ? Ba(r, ("" == n ? "": n + ".") + i, o) : o.forEach((function(t, e) {
                        Ea(t, a[e], ("" == n ? "": n + ".") + i + "[" + e + "]", r)
                    }));
                    else if (s == Ia) if (c != Ia || Object.keys(o).length < Object.keys(a).length) Ba(r, ("" == n ? "": n + ".") + i, o);
                    else for (var u in o) Ea(o[u], a[u], ("" == n ? "": n + ".") + i + "." + u, r)
                };
                for (var s in t) a(s)
            } else i == $a ? o != $a || t.length < e.length ? Ba(r, n, t) : t.forEach((function(t, i) {
                Ea(t, e[i], n + "[" + i + "]", r)
            })) : Ba(r, n, t)
        }
    }
    function Ba(t, e, n) {
        t[e] = n
    }
    function Da(t) {
        var e = t.ctx.__next_tick_callbacks;
        if (e && e.length) {
            var n = e.slice(0);
            e.length = 0;
            for (var r = 0; r < n.length; r++) n[r]()
        }
    }
    function Ra(t, e) {
        var n, r = t.ctx;
        return r.__next_tick_pending ||
        function(t) {
            return Wi.includes(t.update)
        } (t) ? (r.__next_tick_callbacks || (r.__next_tick_callbacks = []), r.__next_tick_callbacks.push((function() {
            e ? zi(e.bind(t.proxy), t, 14) : n && n(t.proxy)
        })), new i((function(t) {
            n = t
        }))) : Yi(e && e.bind(t.proxy))
    }
    function La(t, e) {
        var n = at(t = Aa(t));
        if ("object" === n && null !== t) {
            var r = e.get(t);
            if (void 0 !== r) return r;
            if (mt(t)) {
                var i = t.length;
                r = new Array(i),
                e.set(t, r);
                for (var o = 0; o < i; o++) r[o] = La(t[o], e)
            } else for (var a in r = {},
            e.set(t, r), t) yt(t, a) && (r[a] = La(t[a], e));
            return r
        }
        if ("symbol" !== n) return t
    }
    function Ta(t) {
        return La(t, "undefined" != typeof WeakMap ? new WeakMap: new Map)
    }
    function Ma(t, e, n) {
        if (e) {
            e = Ta(e);
            var r = t.ctx,
            i = r.mpType;
            if ("page" === i || "component" === i) {
                e.r0 = 1;
                var o = r.$scope,
                a = Pa(e,
                function(t, e) {
                    var n = t.data,
                    r = Object.create(null);
                    return e.forEach((function(t) {
                        r[t] = n[t]
                    })),
                    r
                } (o, Object.keys(e)));
                Object.keys(a).length ? (r.__next_tick_pending = !0, o.setData(a, (function() {
                    r.__next_tick_pending = !1,
                    Da(t)
                })), io()) : Da(t)
            }
        }
    }
    function Ha(t, e, n) {
        e.appContext.config.globalProperties.$applyOptions(t, e, n);
        var r = t.computed;
        if (r) {
            var i = Object.keys(r);
            if (i.length) {
                var o, a = e.ctx;
                a.$computedKeys || (a.$computedKeys = []),
                (o = a.$computedKeys).push.apply(o, i)
            }
        }
        delete e.ctx.$onApplyOptions
    }
    function Na(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = t.setupState,
        r = t.$templateRefs,
        i = t.ctx,
        o = i.$scope,
        a = i.$mpPlatform;
        if ("mp-alipay" !== a && r && o) {
            if (e) return r.forEach((function(t) {
                return za(t, null, n)
            }));
            var s = "mp-baidu" === a || "mp-toutiao" === a,
            c = function(t) {
                var e = (o.selectAllComponents(".r") || []).concat(o.selectAllComponents(".r-i-f") || []);
                return t.filter((function(t) {
                    var r = function(t, e) {
                        var n = t.find((function(t) {
                            return t && (t.properties || t.props).uI === e
                        }));
                        if (n) {
                            var r = n.$vm;
                            return r ? Ca(r.$) || r: function(t) {
                                return Ct(t) && Oi(t),
                                t
                            } (n)
                        }
                        return null
                    } (e, t.i);
                    return ! (!s || null !== r) || (za(t, r, n), !1)
                }))
            },
            u = function() {
                var e = c(r);
                e.length && t.proxy && t.proxy.$scope && t.proxy.$scope.setData({
                    r1: 1
                },
                (function() {
                    c(e)
                }))
            };
            o._$setRef ? o._$setRef(u) : Ra(t, u)
        }
    }
    function za(t, e, n) {
        var r = t.r,
        i = t.f;
        if (kt(r)) r(e, {});
        else {
            var o = St(r),
            a = Ei(r);
            if (o || a) if (i) {
                if (!a) return;
                mt(r.value) || (r.value = []);
                var s = r.value;
                if ( - 1 === s.indexOf(e)) {
                    if (s.push(e), !e) return;
                    Lo((function() {
                        return gt(s, e)
                    }), e.$)
                }
            } else o ? yt(n, r) && (n[r] = e) : Ei(r) && (r.value = e)
        }
    }
    var Ua = ro;
    function Fa(t, e) {
        var n = t.component = da(t, e.parentComponent, null);
        return n.ctx.$onApplyOptions = Ha,
        n.ctx.$children = [],
        "app" === e.mpType && (n.render = lt),
        e.onBeforeSetup && e.onBeforeSetup(n, e),
        Sa(n),
        e.parentComponent && n.proxy && e.parentComponent.ctx.$children.push(Ca(n) || n.proxy),
        function(t) {
            var e = Ja.bind(t);
            t.$updateScopedSlots = function() {
                return Yi((function() {
                    return to(e)
                }))
            };
            var n = t.effect = new _r((function() {
                if (t.isMounted) {
                    t.next;
                    var e = t.bu,
                    n = t.u;
                    Ga(t, !1),
                    Ka(),
                    e && zt(e),
                    Ga(t, !0),
                    Ma(t, Va(t)),
                    n && Ua(n)
                } else Lo((function() {
                    Na(t, !0)
                }), t),
                Ma(t, Va(t))
            }), lt, (function() {
                return to(r)
            }), t.scope),
            r = t.update = function() {
                n.dirty && n.run()
            };
            r.id = t.uid,
            Ga(t, !0),
            r()
        } (n),
        n.proxy
    }
    var qa = function(t) {
        var e;
        for (var n in t)("class" === n || "style" === n || ht(n)) && ((e || (e = {}))[n] = t[n]);
        return e
    };
    function Va(t) {
        var e, n = t.type,
        r = t.vnode,
        i = t.proxy,
        o = t.withProxy,
        a = t.props,
        s = nt(t.propsOptions, 1)[0],
        c = t.slots,
        u = t.attrs,
        f = t.emit,
        l = t.render,
        p = t.renderCache,
        h = t.data,
        d = t.setupState,
        v = t.ctx,
        g = t.uid,
        _ = t.appContext.app.config.globalProperties.pruneComponentPropsCache,
        y = t.inheritAttrs;
        t.$templateRefs = [],
        t.$ei = 0,
        _(g),
        t.__counter = 0 === t.__counter ? 1 : 0;
        var m = po(t);
        try {
            if (4 & r.shapeFlag) {
                Wa(y, a, s, u);
                var b = o || i;
                e = l.call(b, b, p, a, d, h, v)
            } else {
                Wa(y, a, s, n.props ? u: qa(u));
                var w = n;
                e = w.length > 1 ? w(a, {
                    attrs: u,
                    slots: c,
                    emit: f
                }) : w(a, null)
            }
        } catch(n) {
            Fi(n, t, 1),
            e = !1
        }
        return Na(t),
        po(m),
        e
    }
    function Wa(t, e, n, r) {
        if (e && r && !1 !== t) {
            var i = Object.keys(r).filter((function(t) {
                return "class" !== t && "style" !== t
            }));
            if (!i.length) return;
            n && i.some(dt) ? i.forEach((function(t) {
                dt(t) && t.slice(9) in n || (e[t] = r[t])
            })) : i.forEach((function(t) {
                return e[t] = r[t]
            }))
        }
    }
    var Ka = function(t) {
        xr(),
        io(),
        Cr()
    };
    function Ja() {
        var t = this.$scopedSlotsData;
        if (t && 0 !== t.length) {
            var e = this.ctx.$scope,
            n = e.data,
            r = Object.create(null);
            t.forEach((function(t) {
                var e = t.path,
                i = t.index,
                o = t.data,
                a = Ie(n, e),
                s = St(i) ? "".concat(e, ".").concat(i) : "".concat(e, "[").concat(i, "]");
                if (void 0 === a || void 0 === a[i]) r[s] = o;
                else {
                    var c = Pa(o, a[i]);
                    Object.keys(c).forEach((function(t) {
                        r[s + "." + t] = c[t]
                    }))
                }
            })),
            t.length = 0,
            Object.keys(r).length && e.setData(r)
        }
    }
    function Ga(t, e) {
        var n = t.effect,
        r = t.update;
        n.allowRecurse = r.allowRecurse = e
    }
    var Xa, Za = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        kt(t) || (t = vt({},
        t)),
        null == e || Ct(e) || (e = null);
        var n = wo(),
        r = new WeakSet,
        i = n.app = {
            _uid: ko++,
            _component: t,
            _props: e,
            _container: null,
            _context: n,
            _instance: null,
            version: "3.4.21",
            get config() {
                return n.config
            },
            set config(t) {},
            use: function(t) {
                for (var e = arguments.length,
                n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                return r.has(t) || (t && kt(t.install) ? (r.add(t), t.install.apply(t, [i].concat(n))) : kt(t) && (r.add(t), t.apply(void 0, [i].concat(n)))),
                i
            },
            mixin: function(t) {
                return n.mixins.includes(t) || n.mixins.push(t),
                i
            },
            component: function(t, e) {
                return e ? (n.components[t] = e, i) : n.components[t]
            },
            directive: function(t, e) {
                return e ? (n.directives[t] = e, i) : n.directives[t]
            },
            mount: function() {},
            unmount: function() {},
            provide: function(t, e) {
                return n.provides[t] = e,
                i
            },
            runWithContext: function(t) {
                var e = So;
                So = i;
                try {
                    return t()
                } finally {
                    So = e
                }
            }
        };
        return i
    };
    function Qa(t, e, n, r) {
        kt(e) && Po(t, e.bind(n), r)
    }
    function Ya(t, e, n) { !
        function(t, e, n) {
            var r = t.mpType || n.$mpType;
            r && "component" !== r && Object.keys(t).forEach((function(r) {
                if (Te(r, t[r], !1)) {
                    var i = t[r];
                    mt(i) ? i.forEach((function(t) {
                        return Qa(r, t, n, e)
                    })) : Qa(r, i, n, e)
                }
            }))
        } (t, e, n)
    }
    function ts(t, e, n) {
        return t[e] = n
    }
    function es(t) {
        for (var e = this[t], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return e ? e.apply(void 0, r) : (console.error("method ".concat(t, " not found")), null)
    }
    function ns(t) {
        return function(e, n, r) {
            if (!n) throw e;
            var i = t._instance;
            if (!i || !i.proxy) throw e;
            i.proxy.$callHook(ne, e)
        }
    }
    function rs(t, e) {
        return t ? rt(new Set([].concat(t, e))) : e
    }
    var is = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    os = /^(?:[A-Za-z\d+/] {
        4
    }) * ?( ? :[A - Za - z\d + /]{2}(?:==)?|[A-Za-z\d+/] {
        3
    } = ?) ? $ / ;
    function as() {
        var t, e, n = ur.getStorageSync("uni_id_token") || "",
        r = n.split(".");
        if (!n || 3 !== r.length) return {
            uid: null,
            role: [],
            permission: [],
            tokenExpired: 0
        };
        try {
            t = JSON.parse((e = r[1], decodeURIComponent(Xa(e).split("").map((function(t) {
                return "%" + ("00" + t.charCodeAt(0).toString(16)).slice( - 2)
            })).join(""))))
        } catch(t) {
            throw new Error("获取当前用户信息出错，详细错误信息为：" + t.message)
        }
        return t.tokenExpired = 1e3 * t.exp,
        delete t.exp,
        delete t.iat,
        t
    }
    Xa = "function" != typeof atob ?
    function(t) {
        if (t = String(t).replace(/[\t\n\f\r ]+/g, ""), !os.test(t)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
        var e;
        t += "==".slice(2 - (3 & t.length));
        for (var n, r, i = "",
        o = 0; o < t.length;) e = is.indexOf(t.charAt(o++)) << 18 | is.indexOf(t.charAt(o++)) << 12 | (n = is.indexOf(t.charAt(o++))) << 6 | (r = is.indexOf(t.charAt(o++))),
        i += 64 === n ? String.fromCharCode(e >> 16 & 255) : 64 === r ? String.fromCharCode(e >> 16 & 255, e >> 8 & 255) : String.fromCharCode(e >> 16 & 255, e >> 8 & 255, 255 & e);
        return i
    }: atob;
    var ss = Object.create(null);
    function cs(t) {
        delete ss[t]
    }
    function us(t) {
        if (t) {
            var e = nt(t.split(","), 2),
            n = e[0],
            r = e[1];
            return ss[n] ? ss[n][parseInt(r)] : void 0
        }
    }
    var fs = {
        install: function(t) { (function(t) {
                var e, n = t._context.config;
                n.errorHandler = He(t, ns),
                e = n.optionMergeStrategies,
                Re.forEach((function(t) {
                    e[t] = rs
                }));
                var r = n.globalProperties; !
                function(t) {
                    t.uniIDHasRole = function(t) {
                        return as().role.indexOf(t) > -1
                    },
                    t.uniIDHasPermission = function(t) {
                        var e = as().permission;
                        return this.uniIDHasRole("admin") || e.indexOf(t) > -1
                    },
                    t.uniIDTokenValid = function() {
                        return as().tokenExpired > Date.now()
                    }
                } (r),
                r.$set = ts,
                r.$applyOptions = Ya,
                r.$callMethod = es,
                ur.invokeCreateVueAppHook(t)
            })(t),
            t.config.globalProperties.pruneComponentPropsCache = cs;
            var e = t.mount;
            t.mount = function(n) {
                var r = e.call(t, n),
                i = function() {
                    var t = "createApp";
                    return "undefined" != typeof global && void 0 !== global[t] ? global[t] : "undefined" != typeof my ? my[t] : void 0
                } ();
                return i ? i(r) : "undefined" != typeof createMiniProgramApp && createMiniProgramApp(r),
                r
            }
        }
    };
    var ls = ["tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend", "touchforcechange"];
    function ps(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = ya(),
        i = r.parent,
        o = r.isMounted,
        a = r.ctx.$scope,
        s = (a.properties || a.props).uI;
        if (s) if (i || o) {
            var c = function(t, e) {
                for (var n = e.parent; n;) {
                    var r = n.$ssi;
                    if (r && r[t]) return r[t];
                    n = n.parent
                }
            } (s, r);
            c && c(t, e, n)
        } else Bo((function() {
            ps(t, e, n)
        }), r)
    }
    function hs(t) {
        return St(t) ? t: function(t) {
            var e = "";
            if (!t || St(t)) return e;
            for (var n in t) e += "".concat(n.startsWith("--") ? n: Tt(n), ":").concat(t[n], ";");
            return e
        } (qt(t))
    }
    var ds = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];
    function vs(t, e) {
        var n = t.ctx;
        n.mpType = e.mpType,
        n.$mpType = e.mpType,
        n.$mpPlatform = "mp-toutiao",
        n.$scope = e.mpInstance,
        n.$mp = {},
        n._self = {},
        t.slots = {},
        mt(e.slots) && e.slots.length && (e.slots.forEach((function(e) {
            t.slots[e] = !0
        })), t.slots[Qt] && (t.slots.
    default = !0)),
        n.getOpenerEventChannel = function() {
            return this.__eventChannel__ || (this.__eventChannel__ = new Be),
            this.__eventChannel__
        },
        n.$hasHook = gs,
        n.$callHook = _s,
        t.emit = function(t, e) {
            return function(n) {
                for (var r = e.$scope,
                i = arguments.length,
                o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                if (r && n) {
                    var s = {
                        __args__: o
                    };
                    r.triggerEvent(n, s)
                }
                return t.apply(this, [n].concat(o))
            }
        } (t.emit, n)
    }
    function gs(t) {
        var e = this.$[t];
        return ! (!e || !e.length)
    }
    function _s(t, e) {
        "mounted" === t && (_s.call(this, "bm"), this.$.isMounted = !0, t = "m"),
        "onLoad" === t && e && e.__id__ && kt(tt.getEventChannel) && (this.__eventChannel__ = tt.getEventChannel(e.__id__), delete e.__id__);
        var n = this.$[t];
        return n && Ae(n, e)
    }
    var ys = [se, Yt, te, ue, pe, ve, ge, _e, me];
    function ms(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
        if (t) {
            Object.keys(t).forEach((function(n) {
                Te(n, t[n]) && e.add(n)
            }));
            var n = t.extends,
            r = t.mixins;
            r && r.forEach((function(t) {
                return ms(t, e)
            })),
            n && ms(n, e)
        }
        return e
    }
    function bs(t, e, n) { - 1 !== n.indexOf(e) || yt(t, e) || (t[e] = function(t) {
            return "onError" === e ? getApp().$vm.$callHook(e, t) : this.$vm && this.$vm.$callHook(e, t)
        })
    }
    var ws = [ce];
    function ks(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ws;
        e.forEach((function(e) {
            return bs(t, e, n)
        }))
    }
    function Ss(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ws;
        ms(e).forEach((function(e) {
            return bs(t, e, n)
        }))
    }
    var xs = $e((function() {
        var t = [],
        e = kt(getApp) && getApp({
            allowDefault: !0
        });
        if (e && e.$vm && e.$vm.$) {
            var n = e.$vm.$.appContext.mixins;
            if (mt(n)) {
                var r = Object.keys(Le);
                n.forEach((function(e) {
                    r.forEach((function(n) {
                        yt(e, n) && !t.includes(n) && t.push(n)
                    }))
                }))
            }
        }
        return t
    })), Cs = [Yt, te, ne, re, ie, oe];
    function Os(t, e) {
        var n = t.$,
        r = {
            globalData: t.$options && t.$options.globalData || {},
            $vm: t,
            onLaunch: function(e) {
                this.$vm = t;
                var r = n.ctx;
                this.$vm && r.$scope || (vs(n, {
                    mpType: "app",
                    mpInstance: this,
                    slots: []
                }), r.globalData = this.globalData, t.$callHook(ee, e))
            }
        };
        n.onError && (n.appContext.config.errorHandler = function(e) {
            t.$callHook(ne, e)
        }),
        function(t) {
            var e = Bi(Ke(tt.getSystemInfoSync().language) || qe);
            Object.defineProperty(t, "$locale", {
                get: function() {
                    return e.value
                },
                set: function(t) {
                    e.value = t
                }
            })
        } (t);
        var i = t.$.type;
        ks(r, Cs),
        Ss(r, i);
        var o = i.methods;
        return o && vt(r, o),
        r
    }
    var As = ["externalClasses"];
    function $s(t, e) {
        for (var n, r = t.$children,
        i = r.length - 1; i >= 0; i--) {
            var o = r[i];
            if (o.$scope._$vueId === e) return o
        }
        for (var a = r.length - 1; a >= 0; a--) if (n = $s(r[a], e)) return n
    }
    function Is(t, e) {
        t.setData({
            r1: 1
        },
        (function() {
            return e()
        }))
    }
    var Ps = ["eO", "uR", "uRIF", "uI", "uT", "uP", "uS"];
    function js(t) {
        t.properties || (t.properties = {}),
        vt(t.properties,
        function(t) {
            var e = {};
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (Ps.forEach((function(t) {
                e[t] = {
                    type: null,
                    value: ""
                }
            })), e.uS = {
                type: null,
                value: [],
                observer: function(t) {
                    var e = Object.create(null);
                    t && t.forEach((function(t) {
                        e[t] = !0
                    })),
                    this.setData({
                        $slots: e
                    })
                }
            }),
            t.behaviors && t.behaviors.includes("tt://form-field") && (t.properties && t.properties.name || (e.name = {
                type: null,
                value: ""
            }), t.properties && t.properties.value || (e.value = {
                type: null,
                value: ""
            })),
            e
        } (t),
        function(t) {
            var e = {};
            return t && t.virtualHost && (t.applyFragment = !0, e.virtualHostStyle = {
                type: null,
                value: ""
            },
            e.virtualHostClass = {
                type: null,
                value: ""
            }),
            e
        } (t.options))
    }
    var Es, Bs, Ds = [String, Number, Boolean, Object, Array, null];
    function Rs(t, e) {
        var n = function(t, e) {
            return mt(t) && 1 === t.length ? t[0] : t
        } (t);
        return - 1 !== Ds.indexOf(n) ? n: null
    }
    function Ls(t) {
        t.properties.uP.observer = function() {
            var t = this.properties.uP;
            t && (this.$vm ?
            function(t, e) {
                var n = Ci(e.props),
                r = us(t) || {};
                Ts(n, r) && (function(t, e, n, r) {
                    var i = t.props,
                    o = t.attrs,
                    a = t.vnode.patchFlag,
                    s = Ci(i),
                    c = nt(t.propsOptions, 1)[0],
                    u = !1;
                    if (a > 0 && !(16 & a)) {
                        if (8 & a) for (var f = t.vnode.dynamicProps,
                        l = 0; l < f.length; l++) {
                            var p = f[l];
                            if (!fo(t.emitsOptions, p)) {
                                var h = e[p];
                                if (c) if (yt(o, p)) h !== o[p] && (o[p] = h, u = !0);
                                else {
                                    var d = Rt(p);
                                    i[d] = oa(c, s, d, h, t, !1)
                                } else h !== o[p] && (o[p] = h, u = !0)
                            }
                        }
                    } else {
                        var v;
                        for (var g in ia(t, e, i, o) && (u = !0), s) e && (yt(e, g) || (v = Tt(g)) !== g && yt(e, v)) || (c ? !n || void 0 === n[g] && void 0 === n[v] || (i[g] = oa(c, s, g, void 0, t, !0)) : delete i[g]);
                        if (o !== s) for (var _ in o) e && yt(e, _) || (delete o[_], u = !0)
                    }
                    u && Lr(t, "set", "$attrs")
                } (e, r, n), no(e.update) &&
                function(t) {
                    var e = Wi.indexOf(t);
                    e > Ki && Wi.splice(e, 1)
                } (e.update), no(e.update) || e.update())
            } (t, this.$vm.$) : "m" === this.properties.uT &&
            function(t, e) {
                var n = e.properties,
                r = us(t) || {};
                Ts(n, r, !1) && e.setData(r)
            } (t, this))
        }
    }
    function Ts(t, e) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = Object.keys(e);
        if (n && r.length !== Object.keys(t).length) return ! 0;
        for (var i = 0; i < r.length; i++) {
            var o = r[i];
            if (e[o] !== t[o]) return ! 0
        }
        return ! 1
    }
    function Ms(t, e) {
        var n = e.parse,
        r = e.mocks,
        i = e.isPage,
        o = e.initRelation,
        a = e.handleLink,
        s = e.initLifetimes;
        t = t.
    default || t;
        var c = {
            multipleSlots: !0,
            addGlobalClass: !0,
            pureDataPattern: /^uP$/
        };
        mt(t.mixins) && t.mixins.forEach((function(t) {
            Ct(t.options) && vt(c, t.options)
        })),
        t.options && vt(c, t.options);
        var u, f, l = {
            options: c,
            lifetimes: s({
                mocks: r,
                isPage: i,
                initRelation: o,
                vueOptions: t
            }),
            pageLifetimes: {
                show: function() {
                    this.$vm && this.$vm.$callHook("onPageShow")
                },
                hide: function() {
                    this.$vm && this.$vm.$callHook("onPageHide")
                },
                resize: function(t) {
                    this.$vm && this.$vm.$callHook("onPageResize", t)
                }
            },
            methods: {
                __l: a
            }
        };
        return function(t, e) {
            t.data = {},
            t.behaviors = function(t) {
                var e = t.behaviors,
                n = t.props;
                n || (t.props = n = []);
                var r = [];
                return mt(e) && e.forEach((function(t) {
                    r.push(t.replace("uni://", "tt://")),
                    "uni://form-field" === t && (mt(n) ? (n.push("name"), n.push("modelValue")) : (n.name = {
                        type: String,
                    default:
                        ""
                    },
                    n.modelValue = {
                        type: [String, Number, Boolean, Array, Object, Date],
                    default:
                        ""
                    }))
                })),
                r
            } (e)
        } (l, t),
        js(l),
        Ls(l),
        function(t, e) {
            As.forEach((function(n) {
                yt(e, n) && (t[n] = e[n])
            }))
        } (l, t),
        u = l.methods,
        f = t.wxsCallMethods,
        mt(f) && f.forEach((function(t) {
            u[t] = function(e) {
                return this.$vm[t](e)
            }
        })),
        n && n(l, {
            handleLink: a
        }),
        l
    }
    function Hs() {
        return getApp().$vm
    }
    function Ns(t) {
        return Bs || (Bs = Hs().$destroyComponent),
        Bs(t)
    }
    var zs = Page,
    Us = Component;
    function Fs(t) {
        var e = t.triggerEvent,
        n = function(n) {
            for (var r = arguments.length,
            i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
            return e.apply(t, [(a = n, Rt(a.replace(Oe, "-")))].concat(i));
            var a
        };
        try {
            t.triggerEvent = n
        } catch(e) {
            t._triggerEvent = n
        }
    }
    function qs(t, e, n) {
        n && (e = e.lifetimes || {});
        var r = e[t];
        e[t] = r ?
        function() {
            for (var t = arguments.length,
            e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return Fs(this),
            r.apply(this, e)
        }: function() {
            Fs(this)
        }
    }
    function Vs(t, e, n) {
        if (t) {
            var r = t.provides,
            i = t.parent && t.parent.provides;
            i === r && (r = t.provides = Object.create(i)),
            r[e] = n
        }
    }
    function Ws(t) {
        var e = t.$options.provide;
        if (e) {
            var n = kt(e) ? e.call(t) : e,
            r = t.$;
            for (var i in n) Vs(r, i, n[i])
        }
    }
    function Ks(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (t) {
            var i = null == t.parent ? t.vnode.appContext && t.vnode.appContext.provides: t.parent.provides;
            if (i && e in i) return i[e];
            if (arguments.length > 1) return r && kt(n) ? n() : n
        }
    }
    function Js(t) {
        var e = t.$options.inject;
        if (e) {
            var n = t.$,
            r = n.ctx;
            if (mt(e)) for (var i = 0; i < e.length; i++) {
                var o = e[i];
                r[o] = Ks(n, o)
            } else {
                var a = function() {
                    var t, i = e[s];
                    Ei(t = Ct(i) ? "default" in i ? Ks(n, i.from || s, i.
                default, !0) : Ks(n, i.from || s) : Ks(n, i)) ? Object.defineProperty(r, s, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return t.value
                        },
                        set: function(e) {
                            return t.value = e
                        }
                    }) : r[s] = t
                };
                for (var s in e) a()
            }
        }
    }
    Page = function(t) {
        return qs(se, t),
        zs(t)
    },
    Component = function(t) {
        return qs("created", t, !0),
        t.properties && t.properties.uP || (js(t), Ls(t)),
        Us(t)
    };
    var Gs = [];
    function Xs(t) {
        var e = t.mocks,
        n = t.isPage,
        r = t.initRelation,
        i = t.vueOptions;
        function o() { !
            function(t) {
                t._$setRef || (t._$setRef = function(e) {
                    Yi((function() {
                        return Is(t, e)
                    }))
                })
            } (this);
            var t = this.properties; !
            function(t, e) {
                if (t) {
                    var n = t.split(","),
                    r = n.length;
                    1 === r ? e._$vueId = n[0] : 2 === r && (e._$vueId = n[0], e._$vuePid = n[1])
                }
            } (t.uI, this);
            var o = {
                vuePid: this._$vuePid
            },
            a = this,
            s = n(a) ? "page": "component";
            "page" === s && !a.route && a.__route__ && (a.route = a.__route__);
            var c = function(t, e) {
                return (e ?
                function(t) {
                    var e = {};
                    return Pt(t) && Object.keys(t).forEach((function(n) { - 1 === Ps.indexOf(n) && (e[n] = t[n])
                    })),
                    e
                } (t) : us(t.uP)) || {}
            } (t, "page" === s);
            this.$vm = function(t, e) {
                Es || (Es = Hs().$createComponent);
                var n = Es(t, e);
                return Ca(n.$) || n
            } ({
                type: i,
                props: c
            },
            {
                mpType: s,
                mpInstance: a,
                slots: t.uS || {},
                parentComponent: o.parent && o.parent.$,
                onBeforeSetup: function(t, n) { !
                    function(t, e) {
                        Object.defineProperty(t, "refs", {
                            get: function() {
                                var t = {};
                                return function(t, e, n) {
                                    t.selectAllComponents(".r").forEach((function(t) {
                                        var e = t.properties.uR;
                                        n[e] = t.$vm || t
                                    }))
                                } (e, 0, t),
                                e.selectAllComponents(".r-i-f").forEach((function(e) {
                                    var n = e.properties.uR;
                                    n && (t[n] || (t[n] = []), t[n].push(e.$vm || e))
                                })),
                                t
                            }
                        })
                    } (t, a),
                    function(t, e, n) {
                        var r = t.ctx;
                        n.forEach((function(n) {
                            yt(e, n) && (t[n] = r[n] = e[n])
                        }))
                    } (t, a, e),
                    function(t, e) {
                        vs(t, e);
                        var n = t.ctx;
                        ds.forEach((function(t) {
                            n[t] = function() {
                                for (var e = n.$scope,
                                r = arguments.length,
                                i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                if (e && e[t]) return e[t].apply(e, i)
                            }
                        }))
                    } (t, n)
                }
            }),
            "component" === s &&
            function(t) {
                var e = t.$options;
                mt(e.behaviors) && e.behaviors.includes("uni://form-field") && t.$watch("modelValue", (function() {
                    t.$scope && t.$scope.setData({
                        name: t.name,
                        value: t.modelValue
                    })
                }), {
                    immediate: !0
                })
            } (this.$vm),
            "page" === s && (Js(this.$vm), Ws(this.$vm)),
            r(this, o)
        }
        return {
            created: function() {
                Gs.push(this)
            },
            attached: function() {
                this.__lifetimes_attached = function() {
                    o.call(this)
                };
                for (var t = this; t && t.__lifetimes_attached && Gs[0] && t === Gs[0];) Gs.shift(),
                t.__lifetimes_attached(),
                delete t.__lifetimes_attached,
                t = Gs[0]
            },
            detached: function() {
                this.$vm && (cs(this.$vm.$.uid), Ns(this.$vm))
            }
        }
    }
    var Zs = ["__route__", "__webviewId__", "__nodeId__", "__nodeid__"];
    function Qs(t) {
        return 0 === t.__nodeId__ || 0 === t.__nodeid__
    }
    var Ys = Object.create(null);
    function tc(t, e) {
        var n, r, i, o = yt(t, "__nodeId__") ? t.__nodeId__: t.__nodeid__,
        a = t.__webviewId__ + "";
        Ys[a + "_" + o] = t.$vm,
        (null === (i = null === (r = null === (n = null == t ? void 0 : t.$vm) || void 0 === n ? void 0 : n.$options) || void 0 === r ? void 0 : r.options) || void 0 === i ? void 0 : i.virtualHost) ? Is(t, (function() {
            ec.apply(t, [{
                detail: {
                    vuePid: e.vuePid,
                    nodeId: o,
                    webviewId: a
                }
            }])
        })) : t.triggerEvent("__l", {
            vuePid: e.vuePid,
            nodeId: o,
            webviewId: a
        })
    }
    function ec(t) {
        var e = t.detail,
        n = e.vuePid,
        r = e.nodeId,
        i = e.webviewId,
        o = Ys[i + "_" + r];
        if (o) {
            var a;
            n && (a = $s(this.$vm, n)),
            a || (a = this.$vm),
            o.$.parent = a.$,
            a.$children.push(o);
            var s = a.$;
            o.$.provides = s ? s.provides: Object.create(s.appContext.provides),
            Js(o),
            Ws(o),
            o.$callCreatedHook(),
            o.$options.inject && o.$.update(),
            Is(this, (function() {
                o.$callHook("mounted"),
                o.$callHook(ce)
            }))
        }
    }
    function nc(t, e) {
        var n = e.handleLink;
        t.methods.__l = n
    }
    var rc, ic = Object.freeze({
        __proto__: null,
        handleLink: ec,
        initLifetimes: Xs,
        initRelation: tc,
        instances: Ys,
        isPage: Qs,
        mocks: Zs,
        parse: nc
    }), oc = (rc = Object.freeze({
        __proto__: null,
        handleLink: ec,
        initLifetimes: function(t) {
            return vt(Xs(t), {
                ready: function() {
                    var e = this;
                    this.$vm && t.isPage(this) ? (this.pageinstance && (this.__webviewId__ = this.pageinstance.__pageId__), this.$vm.$callCreatedHook(), Is(this, (function() {
                        e.$vm.$callHook("mounted"),
                        e.$vm.$callHook(ce)
                    }))) : this.is && console.warn(this.is + " is not ready")
                },
                detached: function() {
                    this.$vm && Ns(this.$vm);
                    var t = this.__webviewId__;
                    t && Object.keys(Ys).forEach((function(e) {
                        0 === e.indexOf(t + "_") && delete Ys[e]
                    }))
                }
            })
        },
        initRelation: tc,
        isPage: Qs,
        mocks: Zs,
        parse: nc
    }),
    function(t) {
        return Component(function(t, e) {
            var n = e.parse,
            r = e.mocks,
            i = e.isPage,
            o = e.initRelation,
            a = e.handleLink,
            s = Ms(t, {
                mocks: r,
                isPage: i,
                initRelation: o,
                handleLink: a,
                initLifetimes: e.initLifetimes
            }); !
            function(t, e) {
                var n = t.properties;
                mt(e) ? e.forEach((function(t) {
                    n[t] = {
                        type: String,
                        value: ""
                    }
                })) : Pt(e) && Object.keys(e).forEach((function(t) {
                    var r = e[t];
                    if (Pt(r)) {
                        var i = r.
                    default;
                        kt(i) && (i = i());
                        var o = r.type;
                        r.type = Rs(o),
                        n[t] = {
                            type: r.type,
                            value: i
                        }
                    } else n[t] = {
                        type: Rs(r)
                    }
                }))
            } (s, (t.
        default || t).props);
            var c = s.methods;
            return c.onLoad = function(t) {
                var e;
                return this.options = t,
                this.$page = {
                    fullPath: (e = this.route + je(t),
                    function(t) {
                        return 0 === t.indexOf("/")
                    } (e) ? e: "/" + e)
                },
                this.$vm && this.$vm.$callHook(se, t)
            },
            ks(c, ys),
            Ss(c, t),
            function(t, e) {
                e && Object.keys(Le).forEach((function(n) {
                    e & Le[n] && bs(t, n, [])
                }))
            } (c, t.__runtimeHooks),
            ks(c, xs()),
            n && n(s, {
                handleLink: a
            }),
            s
        } (t, rc))
    }), ac = function(t) {
        return function(e) {
            return Component(Ms(e, t))
        }
    } (ic); tt.EventChannel = Be, tt.createApp = global.createApp = function(t) {
        return App(Os(t))
    },
    tt.createPage = oc, tt.createComponent = ac, tt.createSubpackageApp = global.createSubpackageApp = function(t) {
        var e = Os(t),
        n = kt(getApp) && getApp({
            allowDefault: !0
        });
        if (n) {
            t.$.ctx.$scope = n;
            var r = n.globalData;
            r && Object.keys(e.globalData).forEach((function(t) {
                yt(r, t) || (r[t] = e.globalData[t])
            })),
            Object.keys(e).forEach((function(t) {
                yt(n, t) || (n[t] = e[t])
            })),
            function(t, e) {
                if (kt(t.onLaunch)) {
                    var n = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
                    t.onLaunch(n)
                }
                kt(t.onShow) && tt.onAppShow && tt.onAppShow((function(t) {
                    e.$callHook("onShow", t)
                })),
                kt(t.onHide) && tt.onAppHide && tt.onAppHide((function(t) {
                    e.$callHook("onHide", t)
                }))
            } (e, t)
        }
    };
    var sc = function(t) {
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ya(); ! ka && Po(t, e, n)
        }
    },
    cc = sc(Yt), uc = sc(te), fc = sc(ee), lc = sc(ae), pc = sc(ge), hc = sc(_e);
    /*! miniapp version: 2.0.6 
 author: Evan Wu */
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    function dc(t, e, n, r) {
        return new(n || (n = i))((function(e, i) {
            function o(t) {
                try {
                    s(r.next(t))
                } catch(t) {
                    i(t)
                }
            }
            function a(t) {
                try {
                    s(r.
                    throw (t))
                } catch(t) {
                    i(t)
                }
            }
            function s(t) {
                var r;
                t.done ? e(t.value) : (r = t.value, r instanceof n ? r: new n((function(t) {
                    t(r)
                }))).then(o, a)
            }
            s((r = r.apply(t, [])).next())
        }))
    }
    var vc, gc, _c, yc = function(t) {
        var e = {},
        n = [];
        return t.forEach((function(t) {
            e["".concat(t.type, "_sdk")] = t.sdk,
            n.push(t.type)
        })),
        e.track = function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = i.reportType ? Array.isArray(i.reportType) ? i.reportType: [i.reportType] : n;
            if (o.includes("qm")) {
                if (!e.qm_sdk) return void console.error("未注册qm埋点");
                var a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return delete t.position,
                    delete t.page,
                    Object.keys(t).forEach((function(e) {
                        var n, r = t[e];
                        Array.isArray(r) ? r = r.join(",") : (n = r, Object.prototype.toString.call(n) === "[object ".concat("Boolean", "]") && (r = r ? 1 : 0)),
                        "duration" === e && (r *= 1e3),
                        t[e] = r
                    })),
                    t
                } (Object.assign({},
                r));
                e.qm_sdk.track(t.qm || t, a, i.isImmediate, i)
            }
            if (o.includes("sensors")) {
                if (!e.sensors_sdk) return void console.error("未注册sensors埋点");
                e.sensors_sdk.track(t.sensors || t, r)
            }
        },
        e.register_public = function(t, r) {
            var i = r ? Array.isArray(r) ? r: [r] : n;
            i.includes("qm") && Object.keys(t).forEach((function(n) {
                e.qm_sdk.report.set(n, t[n])
            })),
            i.includes("sensors") && (e.sensors_sdk.registerPage ? e.sensors_sdk.registerPage(t) : e.sensors_sdk.registerApp && e.sensors_sdk.registerApp(t))
        },
        e.login = function(t) {
            null == e || e.sensors_sdk.login(t),
            null == e || e.qm_sdk.login()
        },
        e
    },
    mc = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dc(void 0, 0, void 0, regeneratorRuntime.mark((function n() {
            var r, o;
            return regeneratorRuntime.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                case 0:
                    return n.next = 2,
                    i.resolve().then((function() {
                        return Su
                    }));
                case 2:
                    return (r = n.sent.
                default).init(t),
                    o = {
                        type: "qm",
                        sdk: r
                    },
                    n.abrupt("return", e ? o: yc([o]));
                case 6:
                case "end":
                    return n.stop()
                }
            }), n)
        })))
    },
    bc = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dc(void 0, 0, void 0, regeneratorRuntime.mark((function n() {
            var r, o;
            return regeneratorRuntime.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                case 0:
                    return n.next = 2,
                    i.resolve().then((function() {
                        return Wl
                    }));
                case 2:
                    return (r = n.sent.
                default).init(t),
                    o = {
                        type: "sensors",
                        sdk: r
                    },
                    n.abrupt("return", e ? o: yc([o]));
                case 6:
                case "end":
                    return n.stop()
                }
            }), n)
        })))
    },
    wc = function(t) {
        return vc = t
    },
    kc = Symbol();
    /*! join us */
    /*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
    function Sc(t) {
        return t && "object" == at(t) && "[object Object]" === Object.prototype.toString.call(t) && "function" != typeof t.toJSON
    } (_c = gc || (gc = {})).direct = "direct", _c.patchObject = "patch object", _c.patchFunction = "patch function";
    var xc = function() {};
    function Cc(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xc;
        t.push(e);
        var i = function() {
            var n = t.indexOf(e);
            n > -1 && (t.splice(n, 1), r())
        };
        return ! n && gr() &&
        function(t) {
            fr && fr.cleanups.push(t)
        } (i),
        i
    }
    function Oc(t) {
        for (var e = arguments.length,
        n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        t.slice().forEach((function(t) {
            t.apply(void 0, n)
        }))
    }
    var Ac = function(t) {
        return t()
    };
    function $c(t, e) {
        for (var n in t instanceof Map && e instanceof Map && e.forEach((function(e, n) {
            return t.set(n, e)
        })), t instanceof Set && e instanceof Set && e.forEach(t.add, t), e) if (e.hasOwnProperty(n)) {
            var r = e[n],
            i = t[n];
            Sc(i) && Sc(r) && t.hasOwnProperty(n) && !Ei(r) && !ki(r) ? t[n] = $c(i, r) : t[n] = r
        }
        return t
    }
    var Ic = Symbol(), Pc = Object.assign;
    function jc(t, e) {
        var n, r, o, a, s, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 5 ? arguments[5] : void 0,
        l = Pc({
            actions: {}
        },
        c),
        p = {
            deep: !0
        },
        h = [],
        d = [],
        v = u.state.value[t];
        function g(e) {
            var n;
            r = o = !1,
            "function" == typeof e ? (e(u.state.value[t]), n = {
                type: gc.patchFunction,
                storeId: t,
                events: a
            }) : ($c(u.state.value[t], e), n = {
                type: gc.patchObject,
                payload: e,
                storeId: t,
                events: a
            });
            var i = s = Symbol();
            Yi().then((function() {
                s === i && (r = !0)
            })),
            o = !0,
            Oc(h, n, u.state.value[t])
        }
        f || v || (u.state.value[t] = {}),
        Bi({});
        var _ = f ?
        function() {
            var t = c.state,
            e = t ? t() : {};
            this.$patch((function(t) {
                Pc(t, e)
            }))
        }: xc;
        function y(e, n) {
            return function() {
                wc(u);
                var r, o = Array.from(arguments),
                a = [],
                s = [];
                Oc(d, {
                    args: o,
                    name: e,
                    store: m,
                    after: function(t) {
                        a.push(t)
                    },
                    onError: function(t) {
                        s.push(t)
                    }
                });
                try {
                    r = n.apply(this && this.$id === t ? this: m, o)
                } catch(t) {
                    throw Oc(s, t),
                    t
                }
                return r instanceof i ? r.then((function(t) {
                    return Oc(a, t),
                    t
                })).
                catch((function(t) {
                    return Oc(s, t),
                    i.reject(t)
                })) : (Oc(a, r), r)
            }
        }
        var m = mi({
            _p: u,
            $id: t,
            $onAction: Cc.bind(null, d),
            $patch: g,
            $reset: _,
            $subscribe: function(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = Cc(h, e, i.detached, (function() {
                    return c()
                })),
                c = n.run((function() {
                    return go((function() {
                        return u.state.value[t]
                    }), (function(n) { ("sync" === i.flush ? o: r) && e({
                            storeId: t,
                            type: gc.direct,
                            events: a
                        },
                        n)
                    }), Pc({},
                    p, i))
                }));
                return s
            },
            $dispose: function() {
                n.stop(),
                h = [],
                d = [],
                u._s.delete(t)
            }
        });
        u._s.set(t, m);
        var b, w, k = (u._a && u._a.runWithContext || Ac)((function() {
            return u._e.run((function() {
                return (n = vr()).run(e)
            }))
        }));
        for (var S in k) {
            var x = k[S];
            if (Ei(x) && (!Ei(w = x) || !w.effect) || ki(x)) f || (!v || Sc(b = x) && b.hasOwnProperty(Ic) || (Ei(x) ? x.value = v[S] : $c(x, v[S])), u.state.value[t][S] = x);
            else if ("function" == typeof x) {
                var C = y(S, x);
                k[S] = C,
                l.actions[S] = x
            }
        }
        return Pc(m, k),
        Pc(Ci(m), k),
        Object.defineProperty(m, "$state", {
            get: function() {
                return u.state.value[t]
            },
            set: function(t) {
                g((function(e) {
                    Pc(e, t)
                }))
            }
        }),
        u._p.forEach((function(t) {
            Pc(m, n.run((function() {
                return t({
                    store: m,
                    app: u._a,
                    pinia: u,
                    options: l
                })
            })))
        })),
        v && f && c.hydrate && c.hydrate(m.$state, v),
        r = !0,
        o = !0,
        m
    }
    function Ec(t, e, n) {
        var r, i, o = "function" == typeof e;
        function a(t, n) {
            return (t = t || (_a || lo || So ? xo(kc, null) : null)) && wc(t),
            (t = vc)._s.has(r) || (o ? jc(r, e, i, t) : function(t, e, n, r) {
                var i, o = e.state,
                a = e.actions,
                s = e.getters,
                c = n.state.value[t];
                i = jc(t, (function() {
                    c || (n.state.value[t] = o ? o() : {});
                    var e = function(t) {
                        var e = mt(t) ? new Array(t.length) : {};
                        for (var n in t) e[n] = Ni(t, n);
                        return e
                    } (n.state.value[t]);
                    return Pc(e, a, Object.keys(s || {}).reduce((function(e, r) {
                        return e[r] = Oi(Oa((function() {
                            wc(n);
                            var e = n._s.get(t);
                            return s[r].call(e, e)
                        }))),
                        e
                    }), {}))
                }), e, n, r, !0)
            } (r, i, t)),
            t._s.get(r)
        }
        return "string" == typeof t ? (r = t, i = o ? n: e) : (i = t, r = t.id),
        a.$id = r,
        a
    }
    var Bc = function(t) {
        return t.CATALOG = "catalog",
        t.SETTING = "setting",
        t.THEME = "theme",
        t
    } (Bc || {}), Dc = function(t) {
        return t.FONTSIZE = "fontSize",
        t.BACKGROUND = "background",
        t
    } (Dc || {});
    function Rc(t, e) { (null == e || e > t.length) && (e = t.length);
        for (var n = 0,
        r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    function Lc(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))),
            n.push.apply(n, r)
        }
        return n
    }
    function Tc(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Lc(Object(n), !0).forEach((function(e) {
                Mc(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lc(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    function Mc(t, e, n) {
        return (e = qc(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function Hc(t, e, n, r, o, a, s) {
        try {
            var c = t[a](s),
            u = c.value
        } catch(t) {
            return void n(t)
        }
        c.done ? e(u) : i.resolve(u).then(r, o)
    }
    function Nc(t) {
        return function() {
            var e = this,
            n = arguments;
            return new i((function(r, i) {
                var o = t.apply(e, n);
                function a(t) {
                    Hc(o, r, i, a, s, "next", t)
                }
                function s(t) {
                    Hc(o, r, i, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    function zc(t) {
        return (zc = "function" == typeof Symbol && "symbol" == at(Symbol.iterator) ?
        function(t) {
            return at(t)
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": at(t)
        })(t)
    }
    function Uc(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function Fc(t, e, n) {
        return e &&
        function(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, qc(r.key), r)
            }
        } (t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function qc(t) {
        var e = function(t, e) {
            if ("object" != zc(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != zc(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        } (t);
        return "symbol" == zc(e) ? e: e + ""
    }
    function Vc(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.
    default:
        t
    }
    var Wc, Kc, Jc = {
        exports: {}
    },
    Gc = {
        exports: {}
    }; Wc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kc = {
        rotl: function(t, e) {
            return t << e | t >>> 32 - e
        },
        rotr: function(t, e) {
            return t << 32 - e | t >>> e
        },
        endian: function(t) {
            if (t.constructor == Number) return 16711935 & Kc.rotl(t, 8) | 4278255360 & Kc.rotl(t, 24);
            for (var e = 0; e < t.length; e++) t[e] = Kc.endian(t[e]);
            return t
        },
        randomBytes: function(t) {
            for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
            return e
        },
        bytesToWords: function(t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
            return e
        },
        wordsToBytes: function(t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
            return e
        },
        bytesToHex: function(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)),
            e.push((15 & t[n]).toString(16));
            return e.join("")
        },
        hexToBytes: function(t) {
            for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
            return e
        },
        bytesToBase64: function(t) {
            for (var e = [], n = 0; n < t.length; n += 3) for (var r = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * t.length ? e.push(Wc.charAt(r >>> 6 * (3 - i) & 63)) : e.push("=");
            return e.join("")
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var e = [], n = 0, r = 0; n < t.length; r = ++n % 4) 0 != r && e.push((Wc.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | Wc.indexOf(t.charAt(n)) >>> 6 - 2 * r);
            return e
        }
    },
    Gc.exports = Kc;
    var Xc, Zc, Qc, Yc, tu, eu = Gc.exports,
    nu = {
        utf8: {
            stringToBytes: function(t) {
                return nu.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            bytesToString: function(t) {
                return decodeURIComponent(escape(nu.bin.bytesToString(t)))
            }
        },
        bin: {
            stringToBytes: function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                return e
            },
            bytesToString: function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                return e.join("")
            }
        }
    },
    ru = nu;
    function iu(t) {
        return !! t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    Xc = eu, Zc = ru.utf8, Qc = function(t) {
        return null != t && (iu(t) || "function" == typeof(e = t).readFloatLE && "function" == typeof e.slice && iu(e.slice(0, 0)) || !!t._isBuffer);
        var e
    }, Yc = ru.bin,
    (tu = function t(e, n) {
        e.constructor == String ? e = n && "binary" === n.encoding ? Yc.stringToBytes(e) : Zc.stringToBytes(e) : Qc(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
        for (var r = Xc.bytesToWords(e), i = 8 * e.length, o = 1732584193, a = -271733879, s = -1732584194, c = 271733878, u = 0; u < r.length; u++) r[u] = 16711935 & (r[u] << 8 | r[u] >>> 24) | 4278255360 & (r[u] << 24 | r[u] >>> 8);
        r[i >>> 5] |= 128 << i % 32,
        r[14 + (i + 64 >>> 9 << 4)] = i;
        var f = t._ff,
        l = t._gg,
        p = t._hh,
        h = t._ii;
        for (u = 0; u < r.length; u += 16) {
            var d = o,
            v = a,
            g = s,
            _ = c;
            o = f(o, a, s, c, r[u + 0], 7, -680876936),
            c = f(c, o, a, s, r[u + 1], 12, -389564586),
            s = f(s, c, o, a, r[u + 2], 17, 606105819),
            a = f(a, s, c, o, r[u + 3], 22, -1044525330),
            o = f(o, a, s, c, r[u + 4], 7, -176418897),
            c = f(c, o, a, s, r[u + 5], 12, 1200080426),
            s = f(s, c, o, a, r[u + 6], 17, -1473231341),
            a = f(a, s, c, o, r[u + 7], 22, -45705983),
            o = f(o, a, s, c, r[u + 8], 7, 1770035416),
            c = f(c, o, a, s, r[u + 9], 12, -1958414417),
            s = f(s, c, o, a, r[u + 10], 17, -42063),
            a = f(a, s, c, o, r[u + 11], 22, -1990404162),
            o = f(o, a, s, c, r[u + 12], 7, 1804603682),
            c = f(c, o, a, s, r[u + 13], 12, -40341101),
            s = f(s, c, o, a, r[u + 14], 17, -1502002290),
            o = l(o, a = f(a, s, c, o, r[u + 15], 22, 1236535329), s, c, r[u + 1], 5, -165796510),
            c = l(c, o, a, s, r[u + 6], 9, -1069501632),
            s = l(s, c, o, a, r[u + 11], 14, 643717713),
            a = l(a, s, c, o, r[u + 0], 20, -373897302),
            o = l(o, a, s, c, r[u + 5], 5, -701558691),
            c = l(c, o, a, s, r[u + 10], 9, 38016083),
            s = l(s, c, o, a, r[u + 15], 14, -660478335),
            a = l(a, s, c, o, r[u + 4], 20, -405537848),
            o = l(o, a, s, c, r[u + 9], 5, 568446438),
            c = l(c, o, a, s, r[u + 14], 9, -1019803690),
            s = l(s, c, o, a, r[u + 3], 14, -187363961),
            a = l(a, s, c, o, r[u + 8], 20, 1163531501),
            o = l(o, a, s, c, r[u + 13], 5, -1444681467),
            c = l(c, o, a, s, r[u + 2], 9, -51403784),
            s = l(s, c, o, a, r[u + 7], 14, 1735328473),
            o = p(o, a = l(a, s, c, o, r[u + 12], 20, -1926607734), s, c, r[u + 5], 4, -378558),
            c = p(c, o, a, s, r[u + 8], 11, -2022574463),
            s = p(s, c, o, a, r[u + 11], 16, 1839030562),
            a = p(a, s, c, o, r[u + 14], 23, -35309556),
            o = p(o, a, s, c, r[u + 1], 4, -1530992060),
            c = p(c, o, a, s, r[u + 4], 11, 1272893353),
            s = p(s, c, o, a, r[u + 7], 16, -155497632),
            a = p(a, s, c, o, r[u + 10], 23, -1094730640),
            o = p(o, a, s, c, r[u + 13], 4, 681279174),
            c = p(c, o, a, s, r[u + 0], 11, -358537222),
            s = p(s, c, o, a, r[u + 3], 16, -722521979),
            a = p(a, s, c, o, r[u + 6], 23, 76029189),
            o = p(o, a, s, c, r[u + 9], 4, -640364487),
            c = p(c, o, a, s, r[u + 12], 11, -421815835),
            s = p(s, c, o, a, r[u + 15], 16, 530742520),
            o = h(o, a = p(a, s, c, o, r[u + 2], 23, -995338651), s, c, r[u + 0], 6, -198630844),
            c = h(c, o, a, s, r[u + 7], 10, 1126891415),
            s = h(s, c, o, a, r[u + 14], 15, -1416354905),
            a = h(a, s, c, o, r[u + 5], 21, -57434055),
            o = h(o, a, s, c, r[u + 12], 6, 1700485571),
            c = h(c, o, a, s, r[u + 3], 10, -1894986606),
            s = h(s, c, o, a, r[u + 10], 15, -1051523),
            a = h(a, s, c, o, r[u + 1], 21, -2054922799),
            o = h(o, a, s, c, r[u + 8], 6, 1873313359),
            c = h(c, o, a, s, r[u + 15], 10, -30611744),
            s = h(s, c, o, a, r[u + 6], 15, -1560198380),
            a = h(a, s, c, o, r[u + 13], 21, 1309151649),
            o = h(o, a, s, c, r[u + 4], 6, -145523070),
            c = h(c, o, a, s, r[u + 11], 10, -1120210379),
            s = h(s, c, o, a, r[u + 2], 15, 718787259),
            a = h(a, s, c, o, r[u + 9], 21, -343485551),
            o = o + d >>> 0,
            a = a + v >>> 0,
            s = s + g >>> 0,
            c = c + _ >>> 0
        }
        return Xc.endian([o, a, s, c])
    })._ff = function(t, e, n, r, i, o, a) {
        var s = t + (e & n | ~e & r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    tu._gg = function(t, e, n, r, i, o, a) {
        var s = t + (e & r | n & ~r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    tu._hh = function(t, e, n, r, i, o, a) {
        var s = t + (e ^ n ^ r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    tu._ii = function(t, e, n, r, i, o, a) {
        var s = t + (n ^ (e | ~r)) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    tu._blocksize = 16, tu._digestsize = 16, Jc.exports = function(t, e) {
        if (null == t) throw new Error("Illegal argument " + t);
        var n = Xc.wordsToBytes(tu(t, e));
        return e && e.asBytes ? n: e && e.asString ? Yc.bytesToString(n) : Xc.bytesToHex(n)
    };
    var ou, au, su = Vc(Jc.exports), cu = {
        exports: {}
    }; ou = cu, au = cu.exports,
    function(t) {
        if (null != au && "number" != typeof au.nodeType) ou.exports = t();
        else {
            var e = t(),
            n = void 0 !== h ? h: $.global;
            "function" != typeof n.btoa && (n.btoa = e.btoa),
            "function" != typeof n.atob && (n.atob = e.atob)
        }
    } ((function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function e(t) {
            this.message = t
        }
        return e.prototype = new Error,
        e.prototype.name = "InvalidCharacterError",
        {
            btoa: function(n) {
                for (var r, i, o = String(n), a = 0, s = t, c = ""; o.charAt(0 | a) || (s = "=", a % 1); c += s.charAt(63 & r >> 8 - a % 1 * 8)) {
                    if ((i = o.charCodeAt(a += 3 / 4)) > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    r = r << 8 | i
                }
                return c
            },
            atob: function(n) {
                var r = String(n).replace(/[=]+$/, "");
                if (r.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var i, o, a = 0,
                s = 0,
                c = ""; o = r.charAt(s++);~o && (i = a % 4 ? 64 * i + o: o, a++%4) ? c += String.fromCharCode(255 & i >> ( - 2 * a & 6)) : 0) o = t.indexOf(o);
                return c
            }
        }
    }));
    var uu = Vc(cu.exports);
    function fu(t, e, n) {
        if (null == t) return ! 1;
        if (Array.prototype.forEach && t.forEach === Array.prototype.forEach) t.forEach(e, n);
        else if (t.length === +t.length) {
            for (var r = 0,
            i = t.length; r < i; r++) if (r in t && e.call(n, t[r], r, t) === {}) return ! 1
        } else for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o) && e.call(n, t[o], o, t) === {}) return ! 1
    }
    function lu(t) {
        return fu(Array.prototype.slice.call(arguments, 1), (function(e) {
            for (var n in e) void 0 !== e[n] && (t[n] = e[n])
        })),
        t
    }
    function pu(t, e) {
        for (var n = su(e), r = hu(JSON.stringify(t)), i = hu(n), o = [], a = 0; a < r.length; a++) {
            var s = r[a] ^ i[a % i.length];
            o.push(s)
        }
        var c = String.fromCharCode.apply(null, o);
        return uu.btoa(c)
    }
    function hu(t) {
        var e, n, r = new Array;
        e = t.length;
        for (var i = 0; i < e; i++)(n = t.charCodeAt(i)) >= 65536 && n <= 1114111 ? (r.push(n >> 18 & 7 | 240), r.push(n >> 12 & 63 | 128), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)) : n >= 2048 && n <= 65535 ? (r.push(n >> 12 & 15 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)) : n >= 128 && n <= 2047 ? (r.push(n >> 6 & 31 | 192), r.push(63 & n | 128)) : r.push(255 & n);
        return r
    }
    var du = Object.prototype.toString;
    function vu(t) {
        return function(e) {
            return du.call(e) === "[object ".concat(t, "]")
        }
    }
    var gu = {
        isNumber: vu("Number"),
        isString: vu("String"),
        isBoolean: vu("Boolean"),
        isNull: vu("Null"),
        isUndefined: vu("Undefined"),
        isSymbol: vu("Symbol"),
        isFunction: vu("Function"),
        isObject: vu("Object"),
        isArray: vu("Array"),
        isDate: vu("Date")
    };
    function _u(t, e) {
        ur.setStorageSync(t, e)
    }
    function yu(t) {
        return ur.getStorageSync(t)
    }
    var mu = function() {
        function t() {
            Uc(this, t),
            this.mem = {
                mdata: [],
                getLength: function() {
                    return this.mdata.length
                },
                add: function(t) {
                    this.mdata.push(t)
                },
                clear: function(t) {
                    this.mdata.splice(0, t)
                }
            },
            this.session_id = "",
            this.launchs = [],
            this._state = {}
        }
        return Fc(t, [{
            key: "getUUID",
            value: function() {
                return "".concat(Date.now(), "-").concat(Math.floor(1e7 * Math.random()), "-").concat(Math.random().toString(16).replace(".", ""), "-").concat(String(31242 * Math.random()).replace(".", "").slice(0, 8))
            }
        },
        {
            key: "toState",
            value: function(t) {
                var e = null;
                if (function(t) {
                    try {
                        JSON.parse(t)
                    } catch(t) {
                        return ! 1
                    }
                    return ! 0
                } (t)) {
                    try {
                        e = JSON.parse(t)
                    } catch(t) {}
                    this._state = e,
                    this.set("distinct_id", this.getUUID())
                } else gu.isObject(t) ? (e = t, this._state = e, this.set("distinct_id", this.getUUID())) : this.set("distinct_id", this.getUUID())
            }
        },
        {
            key: "getFirstId",
            value: function() {
                return this._state.first_id
            }
        },
        {
            key: "getDistinctId",
            value: function() {
                return this._state.distinct_id
            }
        },
        {
            key: "getProps",
            value: function() {
                return this._state.props || {}
            }
        },
        {
            key: "setProps",
            value: function(t, e) {
                var n = this._state.props || {};
                e ? this.set("props", t) : (lu(n, t), this.set("props", n))
            }
        },
        {
            key: "change",
            value: function(t, e) {
                this._state[t] = e
            }
        },
        {
            key: "save",
            value: function() {
                _u("uniapp-sa-info", this._state)
            }
        },
        {
            key: "set",
            value: function(t, e) {
                var n = {};
                for (var r in "string" == typeof t ? n[t] = e: "object" === zc(t) && (n = t), this._state = this._state || {},
                n) this._state[r] = n[r];
                this.save()
            }
        },
        {
            key: "init",
            value: function(t) {
                var e = yu("uniapp-sa-info"),
                n = yu("launchs") || [];
                yu("firstlaunch") || _u("firstlaunch", (new Date).getTime()),
                this.launchs = n;
                var r = this.launchs.find((function(t) {
                    return ! t.endts
                }));
                if (r) this.session_id = r.sid;
                else {
                    var i = (new Date).getTime().toString();
                    this.launchs.push({
                        sid: i,
                        startts: (new Date).getTime()
                    }),
                    this.session_id = i,
                    _u("launchs", this.launchs)
                }
                if (e) this.toState(e),
                t.set_para({
                    first_source: e.first_visit_source,
                    first_channel: e.first_channel || t.defaultChannel
                });
                else {
                    t.is_first_launch = !0;
                    var o = new Date,
                    a = o.getTime();
                    o.setHours(23),
                    o.setMinutes(59),
                    o.setSeconds(60),
                    this.set({
                        distinct_id: t.para.did,
                        first_visit_time: a,
                        first_visit_day_time: o.getTime(),
                        first_visit_source: "",
                        first_channel: t.para.channel
                    })
                }
                t.initialState.storeIsComplete = !0,
                t.checkIsComplete()
            }
        }]),
        t
    } (), bu = mu; Date.prototype.format = function(t) {
        var e = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(this.getFullYear()).substr(4 - RegExp.$1.length))), e) new RegExp("(".concat(n, ")")).test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[n] : "00".concat(e[n]).substr("".concat(e[n]).length)));
        return t
    };
    var wu = "qmsa-request",
    ku = new(function() {
        function t() {
            Uc(this, t),
            this.para = {
                name: "sensors",
                project: "",
                server_url: "",
                max_string_length: 500
            },
            this.queue = [],
            this.trackQueue = [],
            this.waitLoginEnd = !1,
            this.getSystemInfoComplete = !1,
            this.is_first_launch = !1,
            this.LIB_VERSION = "1.0.0",
            this.LIB_NAME = "WxMiniApp",
            this.store = new bu,
            this.cacheNum = 10,
            this.send_interval_time = 3e3,
            this.info = {
                environment: {
                    appversion: "",
                    sdkversion: "2.0.6",
                    channel: "",
                    devicemodel: "",
                    os: "",
                    osversion: "",
                    resolution: "",
                    projectname: "",
                    packagename: "",
                    brand: "",
                    sdkua: "",
                    firstlaunch: ""
                },
                identity: {
                    uid: "",
                    openid: "",
                    unionid: "",
                    mp_app_id: "",
                    accountid: "",
                    pmtsource: "",
                    pmtchannel: "",
                    mktparams: ""
                },
                launchs: []
            },
            this.initialState = {
                queue: [],
                isComplete: !1,
                systemIsComplete: !1,
                storeIsComplete: !1,
                channelComplete: !1
            },
            this.isValidaPass = !1,
            this.requiredField = [{
                key: "para.server_url",
                msg: "请设置日志上报地址,key为  server_url"
            },
            {
                key: "para.qmkey",
                msg: "请设置日志加密key，key为 qmkey"
            },
            {
                key: "para.project",
                msg: "请设置日志所属项目, key为 project"
            },
            {
                key: "info.identity.mp_app_id",
                msg: "请在identity中设置小程序appid，key 为 mp_app_id"
            },
            {
                key: "info.identity.uid",
                msg: "请在identity中设置openid，key 为 openid"
            },
            {
                key: "info.identity.openid",
                msg: "请在identity中设置openid，key 为 openid"
            },
            {
                key: "info.identity.unionid",
                msg: "请在identity中设置unionid，key 为 unionid"
            },
            {
                key: "info.identity.accountid",
                msg: "请在identity中设置accountid，key 为 accountid"
            }],
            this.hasNetwork = !0
        }
        var e, n, r;
        return Fc(t, [{
            key: "checkIsComplete",
            value: function() {
                var t = this;
                this.initialState.systemIsComplete && this.initialState.storeIsComplete && (this.initialState.isComplete = !0, this.initialState.queue.length > 0 && (fu(this.initialState.queue, (function(e) {
                    t[e[0]].apply(t, Array.prototype.slice.call(e[1]))
                })), this.initialState.queue = []))
            }
        },
        {
            key: "set_para",
            value: function(t) {
                this.para = function(t) {
                    return fu(Array.prototype.slice.call(arguments, 1), (function(e) {
                        for (var n in e) void 0 !== e[n] && (gu.isObject(e[n]) && gu.isObject(t[n]) ? lu(t[n], e[n]) : t[n] = e[n])
                    })),
                    t
                } (this.para, t),
                t.cacheNum && (this.cacheNum = t.cacheNum),
                t.send_interval_time && (this.send_interval_time = t.send_interval_time),
                t.breadcrumb_max && (this.breadcrumb_max = t.breadcrumb_max),
                this.waitLoginEnd = t.waitLoginEnd
            }
        },
        {
            key: "init",
            value: (r = Nc(regeneratorRuntime.mark((function t(e) {
                var n = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        this.showTime = Date.now(),
                        this.store.init(this),
                        this.set_para(e),
                        this.get_system(e),
                        fu(["setProfile", "appShow", "appHide", "identity", "appLaunch", "setOnceProfile", "track", "clearAllRegister", "quick", "incrementProfile", "appendProfile"], (function(t) {
                            var e = n[t];
                            n[t] && (n[t] = function() {
                                this.initialState.isComplete ? e.apply(this, arguments) : this.initialState.queue.push([t, arguments])
                            })
                        })),
                        this.collect_default_events(),
                        ur.onNetworkStatusChange((function(t) {
                            n.hasNetwork = t.isConnected && ("none" !== t.networkType || "offline" !== t.networkType),
                            n.hasNetwork && n.sendStorageData()
                        })),
                        this.sendStorageData();
                    case 8:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t) {
                return r.apply(this, arguments)
            })
        },
        {
            key: "collect_default_events",
            value: function() {
                var t = this;
                this.appLaunch(),
                this.showTime = Date.now(),
                this.appShow(),
                ur.onAppHide((function() {
                    t.appHide()
                })),
                o((function() {
                    ur.onAppShow((function() {
                        t.showTime = Date.now(),
                        t.appShow()
                    }))
                }), 600)
            }
        },
        {
            key: "appLaunch",
            value: function() {
                var t = ur.getEnterOptionsSync().scene;
                this.track("miniapp_#_#_launch", {
                    scene: "".concat(t)
                })
            }
        },
        {
            key: "appShow",
            value: function(t) {
                var e = ur.getEnterOptionsSync().scene;
                t && gu.isObject(t) || (t = {});
                var n = {
                    scene: "".concat(e)
                };
                this.track("miniapp_#_#_show", n)
            }
        },
        {
            key: "appHide",
            value: function(t) {
                t && gu.isObject(t) || (t = {});
                var e, n = {
                    duration: 1e3 * Math.round((Date.now() - this.showTime) / 1e3)
                };
                n.$url_path = (e = getCurrentPages())[e.length - 1].route,
                n.$title = (getCurrentPages(), ""),
                lu(n, t),
                this.track("miniapp_#_#_hide", n, !0)
            }
        },
        {
            key: "send",
            value: function(t) {
                var e;
                this.para.show_log && console.info("----", t),
                e = -1 !== this.para.server_url.indexOf("?") ? "".concat(this.para.server_url, "&project=").concat(this.para.project, "&data=").concat(encodeURIComponent(pu(t, this.para.qmkey))) : "".concat(this.para.server_url, "?project=").concat(this.para.project, "&data=").concat(encodeURIComponent(pu(t, this.para.qmkey))),
                this.send_request(e)
            }
        },
        {
            key: "send_request",
            value: function(t) {
                var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return new i((function(r, i) {
                    ur.request({
                        method: "GET",
                        data: "String",
                        url: t,
                        success: function(o) {
                            if (200 !== o.data.code) return e.retry(t, n),
                            void i();
                            e.sendStorageData(),
                            r()
                        },
                        fail: function() {
                            e.retry(t, n),
                            i()
                        }
                    })
                }))
            }
        },
        {
            key: "get_system",
            value: function(t) {
                var e = {};
                if (ur.canIUse("getWindowInfo")) {
                    var n = (e = Tc(Tc(Tc({},
                    ur.getWindowInfo()), ur.getDeviceInfo()), ur.getAppBaseInfo())).system.split(" ");
                    e.osName = n[0],
                    e.osVersion = n[1]
                } else e = ur.getSystemInfoSync();
                var r = ur.getEnterOptionsSync().query;
                this.info.identity = Tc(Tc({},
                this.info.identity), t.identity),
                this.info.identity.uid = t.openid,
                this.info.identity.openid = t.openid,
                this.info.identity.unionid = t.unionid,
                this.info.identity.accountid = t.accountid,
                this.info.identity.mp_app_id = t.mp_app_id,
                this.info.identity.pmtsource = t.pmtsource || "",
                this.info.identity.pmtchannel = t.pmtchannel || "",
                this.info.identity.mktparams = function(t) {
                    var e = [];
                    for (var n in t) e.push("".concat(n, "=").concat(encodeURIComponent(t[n])));
                    return e.join("&")
                } (r),
                this.info.environment = Tc(Tc({},
                this.info.environment), t.environment);
                var i = e.appVersion;
                ur.getAccountInfoSync ? i = ur.getAccountInfoSync().miniProgram.version: ur.getEnvInfoSync && (i = ur.getEnvInfoSync().microapp.mpVersion),
                this.info.environment.appversion = /^\d+\.\d+\.\d+$/.test(i) ? i: "0.0.0",
                this.info.environment.devicemodel = e.model,
                this.info.environment.brand = e.brand,
                this.info.environment.channel = this.para.channel || "",
                this.info.environment.os = e.osName,
                this.info.environment.osversion = e.osVersion,
                this.info.environment.projectname = this.para.project,
                this.info.environment.packagename = e.appName,
                this.info.environment.resolution = "".concat(e.screenWidth, "*").concat(e.screenHeight);
                var o = "ios" === e.platform ? e.osVersion.replace(/\./g, "_") : "".concat(e.platform.substring(0, 1).toUpperCase() + e.platform.substring(1), " ").concat(e.osVersion, "-").concat(e.model);
                this.info.environment.sdkua = o;
                var a = yu("firstlaunch");
                a && (this.info.environment.firstlaunch = a || "");
                var s = yu("launchs") || {};
                this.info.launchs = s,
                this.initialState.systemIsComplete = !0,
                this.checkIsComplete()
            }
        },
        {
            key: "identity",
            value: function(t, e) {
                if ("number" == typeof t) t = String(t);
                else if ("string" != typeof t) return ! 1;
                var n = this.store.getFirstId(); ! 0 === e ? n ? this.store.set("first_id", t) : this.store.set("distinct_id", t) : n ? this.store.change("first_id", t) : this.store.change("distinct_id", t)
            }
        },
        {
            key: "validatorField",
            value: function() {
                for (var t = this.requiredField.length,
                e = 0; e < t; e++) if (!this.requiredField[e].key.split(".").reduce((function(t, e) {
                    return !! t && t[e]
                }), this)) return console.error(this.requiredField[e].msg),
                !1;
                return ! 0
            }
        },
        {
            key: "track",
            value: (n = Nc(regeneratorRuntime.mark((function t(e, n, r) {
                var i, o;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!this.waitLoginEnd) {
                            t.next = 3;
                            break
                        }
                        return this.trackQueue.push([e, n, r]),
                        t.abrupt("return");
                    case 3:
                        if (this.isValidaPass) {
                            t.next = 7;
                            break
                        }
                        if (this.validatorField()) {
                            t.next = 6;
                            break
                        }
                        return t.abrupt("return");
                    case 6:
                        this.isValidaPass = !0;
                    case 7:
                        if (this.para.show_log_immediately && (i = ( + new Date).toString(), console.info("------", Tc(Tc({},
                        this.info), {},
                        {
                            aggs: [{
                                sid: i,
                                count: "1",
                                eventid: e,
                                params: n || {},
                                trigger_ts: i,
                                version: this.info.environment.appversion
                            }]
                        }))), !r) {
                            t.next = 12;
                            break
                        }
                        return o = ( + new Date).toString(),
                        this.send(Tc(Tc({},
                        this.info), {},
                        {
                            aggs: [{
                                sid: o,
                                count: "1",
                                eventid: e,
                                params: n || {},
                                trigger_ts: o,
                                version: this.info.environment.appversion
                            }]
                        })),
                        t.abrupt("return");
                    case 12:
                        if (this.format_report_data(e, n), 0 !== this.queue.length) {
                            t.next = 15;
                            break
                        }
                        return t.abrupt("return");
                    case 15:
                        this.send_time();
                    case 16:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, e, r) {
                return n.apply(this, arguments)
            })
        },
        {
            key: "login",
            value: function() {
                var t = this;
                this.waitLoginEnd = !1,
                this.trackQueue.forEach((function(e) {
                    t.track.apply(t,
                    function(t) {
                        return function(t) {
                            if (Array.isArray(t)) return Rc(t)
                        } (t) ||
                        function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        } (t) ||
                        function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return Rc(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rc(t, e) : void 0
                            }
                        } (t) ||
                        function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        } ()
                    } (e))
                })),
                this.trackQueue = []
            }
        },
        {
            key: "send_time",
            value: function() {
                var t = this;
                if (this.queue && this.queue.length >= this.cacheNum) return this.send(Tc(Tc({},
                this.info), {},
                {
                    aggs: this.queue
                })),
                this.queue = [],
                void a(this.timer);
                this.queue && (this.timer = o((function() {
                    t.queue.length > 0 && t.send(Tc(Tc({},
                    t.info), {},
                    {
                        aggs: t.queue
                    })),
                    a(t.timer),
                    t.queue = []
                }), this.send_interval_time))
            }
        },
        {
            key: "format_report_data",
            value: function(t, e) {
                var n = ( + new Date).toString(),
                r = t + JSON.stringify(e || {}) + this.info.environment.appversion;
                this.find_repeat(r, n) || this.queue.push({
                    sid: this.store.session_id,
                    count: "1",
                    eventid: t,
                    params: e || {},
                    trigger_ts: n,
                    version: this.info.environment.appversion
                })
            }
        },
        {
            key: "find_repeat",
            value: function(t, e) {
                var n = !1;
                return this.queue.forEach((function(r) {
                    var i = r.eventid + JSON.stringify(r.params) + r.version;
                    t == i && (n = !0, r.count++, r.count = r.count.toString(), r.trigger_ts += "#".concat(e))
                })),
                n
            }
        },
        {
            key: "get_rdw",
            value: function() {
                for (var t = "",
                e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], n = 0; n < 10; n++) t += e[Math.round(Math.random() * (e.length - 1))];
                var r = yu("qm_rid");
                return r && "" !== r ? r: (_u("qm_rid", "#".concat(t)), "#".concat(t))
            }
        },
        {
            key: "get_params",
            value: function() {
                return Tc(Tc({},
                this.info.environment), this.info.identity)
            }
        },
        {
            key: "set_identity",
            value: function(t, e) {
                gu.isObject(t) ? this.info.identity = Tc(Tc({},
                this.info.identity), t) : this.info.identity[t] = e
            }
        },
        {
            key: "set_environment",
            value: function(t, e) {
                gu.isObject(t) ? this.info.environment = Tc(Tc({},
                this.info.environment), t) : this.info.environment[t] = e
            }
        },
        {
            key: "retry",
            value: (e = Nc(regeneratorRuntime.mark((function t(e, n) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (this.hasNetwork && !(n >= 3)) {
                            t.next = 6;
                            break
                        }
                        return (r = yu(wu) || []).push(e),
                        r.length > 30 && (r = r.slice(0, 30)),
                        _u(wu, r),
                        t.abrupt("return");
                    case 6:
                        this.send_request(e, n + 1);
                    case 7:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, n) {
                return e.apply(this, arguments)
            })
        },
        {
            key: "sendStorageData",
            value: function() {
                var t = yu(wu) || [];
                if (0 !== t.length) {
                    var e = t.shift();
                    this.send_request(e),
                    _u(wu, t)
                }
            }
        }]),
        t
    } ()), Su = Object.freeze(Object.defineProperty({
        __proto__: null,
    default:
        ku
    },
    Symbol.toStringTag, {
        value: "Module"
    }));
    /*! join us */
    function xu() {
        return xu = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; ! {}.hasOwnProperty.call(t, e) && null !== (t = $u(t)););
                return t
            } (t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t: n) : i.value
            }
        },
        xu.apply(null, arguments)
    }
    function Cu(t, e) {
        return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        },
        Cu(t, e)
    }
    function Ou(t) {
        var e = Au();
        return function() {
            var n, r = $u(t);
            if (e) {
                var i = $u(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return function(t, e) {
                if (e && ("object" == Bu(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                } (t)
            } (this, n)
        }
    }
    function Au() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch(t) {}
        return (Au = function() {
            return !! t
        })()
    }
    function $u(t) {
        return ($u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    function Iu(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function Pu(t, e, n) {
        return e &&
        function(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, Eu(r.key), r)
            }
        } (t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function ju(t, e, n) {
        return (e = Eu(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function Eu(t) {
        var e = function(t, e) {
            if ("object" != Bu(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != Bu(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        } (t);
        return "symbol" == Bu(e) ? e: e + ""
    }
    function Bu(t) {
        return (Bu = "function" == typeof Symbol && "symbol" == at(Symbol.iterator) ?
        function(t) {
            return at(t)
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": at(t)
        })(t)
    }
    function Du(t, e) { (null == e || e > t.length) && (e = t.length);
        for (var n = 0,
        r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    /*! miniapp version: 2.0.6 
 author: Evan Wu */
    var Ru = {
        is_first_launch: !1,
        launched: !1,
        _queue: [],
        mpshow_time: null,
        sa_referrer: "直接打开",
        query_share_depth: 0,
        share_distinct_id: "",
        share_method: "",
        current_scene: "",
        inited: !1,
        para: {
            server_url: "",
            send_timeout: 1e3,
            show_log: !1,
            allow_amend_share_path: !0,
            max_string_length: 500,
            datasend_timeout: 3e3,
            source_channel: [],
            batch_send: {
                send_timeout: 6e3,
                max_length: 6
            },
            preset_properties: {}
        },
        platform: "",
        lib: {
            version: "0.14.2",
            name: "MiniGame",
            method: "code"
        },
        properties: {
            $lib: "MiniGame",
            $lib_version: "0.14.2"
        },
        currentProps: {}
    },
    Lu = "utm_source utm_medium utm_campaign utm_content utm_term", Tu = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm"], Mu = {
        EMAIL: "$identity_email",
        MOBILE: "$identity_mobile",
        LOGIN: "$identity_login_id"
    },
    Hu = {},
    Nu = {},
    zu = "$identity_byte_mp_id"; Hu.identity_id = zu, Hu.bind_preset_id = [zu], Hu.unbind_without_check = [zu], Hu.login_preset_id = [zu];
    var Uu = Object.prototype.toString,
    Fu = Object.prototype.hasOwnProperty,
    qu = Array.prototype.indexOf,
    Vu = Array.prototype.slice,
    Wu = Array.prototype.isArray,
    Ku = Array.prototype.forEach,
    Ju = r.prototype.bind;
    function Gu(t) {
        return void 0 === t
    }
    function Xu(t) {
        return "[object String]" == Uu.call(t)
    }
    function Zu(t) {
        return "[object Date]" == Uu.call(t)
    }
    function Qu(t) {
        return "[object Boolean]" == Uu.call(t)
    }
    function Yu(t) {
        return "[object Number]" == Uu.call(t) && /[\d\\.]+/.test(String(t))
    }
    function tf(t) {
        try {
            JSON.parse(t)
        } catch(t) {
            return ! 1
        }
        return ! 0
    }
    function ef(t) {
        return null != t && "[object Object]" === Uu.call(t)
    }
    function nf(t) {
        return "[object Object]" === Uu.call(t)
    }
    function rf(t) {
        return Wu || "[object Array]" === Uu.call(t)
    }
    function of(t) {
        return ! (!t || !Fu.call(t, "callee"))
    }
    function af(t, e, n) {
        if (null == t) return ! 1;
        if (Ku && t.forEach === Ku) t.forEach(e, n);
        else if (t.length === +t.length) {
            for (var r = 0,
            i = t.length; r < i; r++) if (r in t && e.call(n, t[r], r, t) === {}) return ! 1
        } else for (var o in t) if (Fu.call(t, o) && e.call(n, t[o], o, t) === {}) return ! 1
    }
    function sf(t, e) {
        if (!t) return [];
        var n = [];
        return t.toArray && (n = t.toArray()),
        rf(t) && (n = Vu.call(t)),
        of(t) && (n = Vu.call(t)),
        n = cf(t),
        e && Yu(e) && (n = n.slice(e)),
        n
    }
    function cf(t) {
        var e = [];
        return null == t || af(t, (function(t) {
            e[e.length] = t
        })),
        e
    }
    function uf(t, e) {
        var n = !1;
        return null == t ? n: qu && t.indexOf === qu ? -1 != t.indexOf(e) : (af(t, (function(t) {
            if (n || (n = t === e)) return {}
        })), n)
    }
    function ff(t) {
        function e(t) {
            return t < 10 ? "0" + t: t
        }
        return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds())
    }
    function lf(t) { (ef(t) || rf(t)) && af(t, (function(e, n) {
            ef(e) || rf(e) ? lf(t[n]) : Zu(e) && (t[n] = ff(e))
        }))
    }
    function pf(t) {
        if (!t) return ! 1;
        var e = Object.prototype.toString.call(t);
        return "[object Function]" == e || "[object AsyncFunction]" == e || "[object GeneratorFunction]" == e
    }
    function hf(t) {
        return af(Vu.call(arguments, 1), (function(e) {
            for (var n in e) void 0 !== e[n] && (t[n] = e[n])
        })),
        t
    }
    function df(t) {
        return af(Vu.call(arguments, 1), (function(e) {
            for (var n in e) void 0 !== e[n] && null !== e[n] && (ef(e[n]) && ef(t[n]) ? hf(t[n], e[n]) : t[n] = e[n])
        })),
        t
    }
    function vf(t) {
        if (ef(t)) {
            for (var e in t) if (Fu.call(t, e)) return ! 1;
            return ! 0
        }
        return ! 1
    }
    function gf(t) {
        var e = {};
        return function t(e, n) {
            for (var r in n) {
                var i = n[r];
                rf(i) ? (e[r] = [], t(e[r], i)) : ef(i) ? (e[r] = {},
                t(e[r], i)) : e[r] = i
            }
        } (e, t),
        e
    }
    function _f(t) {
        return t.length > Ru.para.max_string_length ? (Ru.log("字符串长度超过限制，已经做截取--" + t), t.slice(0, Ru.para.max_string_length)) : t
    }
    function yf(t) {
        ef(t) && af(t, (function(e, n) {
            ef(e) ? yf(t[n]) : Xu(e) && (t[n] = _f(e))
        }))
    }
    function mf(t) {
        var e, n, r, i, o = "";
        for (e = n = 0, r = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
            var a = t.charCodeAt(i),
            s = null;
            a < 128 ? n++:s = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128),
            null !== s && (n > e && (o += t.substring(e, n)), o += s, e = n = i + 1)
        }
        return n > e && (o += t.substring(e, t.length)),
        o
    }
    function bf(t) {
        var e, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        s = 0,
        c = 0,
        u = "",
        f = [];
        if (!t) return t;
        t = mf(t);
        do {
            e = (o = t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++)) >> 18 & 63, n = o >> 12 & 63, r = o >> 6 & 63, i = 63 & o, f[c++] = a.charAt(e) + a.charAt(n) + a.charAt(r) + a.charAt(i)
        } while ( s < t . length );
        switch (u = f.join(""), t.length % 3) {
        case 1:
            u = u.slice(0, -2) + "==";
            break;
        case 2:
            u = u.slice(0, -1) + "="
        }
        return u
    }
    function wf(t) {
        var e = "";
        try {
            e = decodeURIComponent(t)
        } catch(n) {
            e = t
        }
        return e
    }
    var kf = {
        lib_version: "",
        launched: !1,
        lib_name: "",
        query_share_depth: 0,
        page_show_time: Date.now(),
        mp_show_time: null,
        promise_list: [],
        current_scene: "",
        is_first_launch: !1,
        _queue: [],
        inited: !1,
        hasExeInit: !1,
        scene_prefix: "",
        share_distinct_id: "",
        sa_referrer: "直接打开",
        source_channel_standard: Lu,
        latest_source_channel: Tu,
        latest_share_info: ["$latest_share_distinct_id", "$latest_share_url_path", "$latest_share_depth", "$latest_share_method"]
    };
    function Sf() {
        var t = Ru.system_api.getAppInfoSync();
        return t && t.appId ? t.appId: ""
    }
    function xf(t) {
        var e = t.split("?"),
        n = [],
        r = {};
        return e && e[1] ? (af(e[1].split("&"), (function(t) { (n = t.split("="))[0] && n[1] && (r[n[0]] = n[1])
        })), r) : {}
    }
    function Cf(t) {
        var e = Of(t),
        n = e.scene,
        r = e.q,
        i = e.query;
        for (var o in i) i[o] = wf(i[o]);
        return n && hf(i, xf(n = -1 !== (n = wf(n)).indexOf("?") ? "?" + n.replace(/\?/g, "") : "?" + n)),
        r && hf(i, xf(wf(r))),
        i
    }
    function Of(t) {
        if (!t || !ef(t.query)) return {};
        var e, n, r, i, o = {};
        return o.query = hf({},
        t.query),
        Xu(o.query.scene) && (e = o.query, n = ["utm_source", "utm_content", "utm_medium", "utm_campaign", "utm_term", "sa_utm"].concat(Ru.para.source_channel), r = new RegExp("(" + n.join("|") + ")%3D", "i"), 1 === (i = Object.keys(e)).length && "scene" === i[0] && r.test(e.scene)) && (o.scene = o.query.scene, delete o.query.scene),
        t.query.q && t.query.scancode_time && "101" === String(t.scene).slice(0, 3) && (o.q = String(o.query.q), delete o.query.q, delete o.query.scancode_time),
        o
    }
    function Af(t, e, n, r) {
        if (!ef(t)) return {};
        var i = {};
        if (t.sa_utm) for (var o in t)"sa_utm" !== o ? uf(Ru.para.source_channel, o) && (i[n + o] = t[o]) : i[r + o] = t[o];
        else for (var a in t) - 1 === (" " + Lu + " ").indexOf(" " + a + " ") ? uf(Ru.para.source_channel, a) && (i[n + a] = t[a]) : i[e + a] = t[a];
        return i
    }
    function $f(t, e) {
        if (t && ef(t) && !vf(t)) {
            var n = [];
            return af(t, (function(t, r) {
                "q" === r && Xu(t) && 0 === t.indexOf("http") || (e ? n.push(r + "=" + t) : n.push(r + "=" + wf(t)))
            })),
            n.join("&")
        }
        return ""
    }
    function If() {
        var t = {};
        try {
            var e = pf(Ru.system_api.getCurrentPages) ? Ru.system_api.getCurrentPages() : getCurrentPages();
            t = e[e.length - 1]
        } catch(t) {
            Ru.log("getCurrentPage:" + t)
        }
        return t
    }
    function Pf() {
        var t = "未取到";
        try {
            var e = If();
            t = e ? e.route: t
        } catch(t) {
            Ru.log("getCurrentPath:" + t)
        }
        return t
    }
    var jf = Number.isSafeInteger ||
    function(t) {
        return Ef(t) && Math.abs(t) <= Math.pow(2, 53) - 1
    },
    Ef = Number.isInteger ||
    function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    },
    Bf = {
        checkKeyword: function(t) {
            return /^((?!^distinct_id$|^original_id$|^device_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_group|^user_tag)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i.test(t)
        },
        checkIdLength: function(t) {
            return ! (String(t).length > 255 && (Ru.log("id 长度超过 255 个字符！"), 1))
        }
    };
    function Df(t) {
        return Xu(t) ? t.toLocaleUpperCase() : t
    }
    function Rf() {
        return !! ("object" == Bu(Ru.store._state) && Yu(Ru.store._state.first_visit_day_time) && Ru.store._state.first_visit_day_time > (new Date).getTime())
    }
    function Lf(t, e) {
        return !! t && ("未取到" === t ? "未取到": e ? t + "?" + e: t)
    }
    function Tf(t) {
        return Xu(t) ? t.replace(/^\//, "") : "取值异常"
    }
    function Mf(t) {
        return Hf(t = String(t), 113)
    }
    function Hf(t, e) {
        e = "number" == typeof e ? e: 13;
        for (var n = (t = String(t)).split(""), r = 0, i = n.length; r < i; r++) n[r].charCodeAt(0) < 126 && (n[r] = String.fromCharCode((n[r].charCodeAt(0) + e) % 126));
        return n.join("")
    }
    var Nf = wf;
    function zf(t) {
        var e = t.toLowerCase();
        return "ios" === e ? "iOS": "android" === e ? "Android": t
    }
    var Uf, Ff = (Uf = (new Date).getTime(),
    function(t) {
        return Math.ceil((Uf = (9301 * Uf + 49297) % 233280) / 233280 * t)
    });
    function qf() {
        if ("function" == typeof Uint32Array) {
            var t = "";
            if ("undefined" != typeof crypto ? t = crypto: "undefined" != typeof msCrypto && (t = msCrypto), ef(t) && t.getRandomValues) {
                var e = new Uint32Array(1);
                return t.getRandomValues(e)[0] / Math.pow(2, 32)
            }
        }
        return Ff(1e19) / 1e19
    }
    function Vf() {
        return Date.now() + "-" + Math.floor(1e7 * qf()) + "-" + qf().toString(16).replace(".", "") + "-" + String(31242 * qf()).replace(".", "").slice(0, 8)
    }
    var Wf = {
        getUUID: Vf,
        formatSystem: zf,
        indexOf: qu,
        slice: Vu,
        forEach: Ku,
        bind: Ju,
        _hasOwnProperty: Fu,
        _toString: Uu,
        isUndefined: Gu,
        isString: Xu,
        isDate: Zu,
        isBoolean: Qu,
        isNumber: Yu,
        isJSONString: tf,
        isObject: ef,
        isPlainObject: nf,
        isArray: rf,
        isFuction: function(t) {
            try {
                return /^\s*\bfunction\b/.test(t)
            } catch(t) {
                return ! 1
            }
        },
        isArguments: of,
        toString: function(t) {
            return null == t ? "": rf(t) || nf(t) && t.toString === Uu ? JSON.stringify(t, null, 2) : String(t)
        },
        unique: function(t) {
            for (var e, n = [], r = {},
            i = 0; i < t.length; i++) r[e = t[i]] || (r[e] = !0, n.push(e));
            return n
        },
        include: uf,
        values: cf,
        toArray: sf,
        each: af,
        formatDate: ff,
        searchObjDate: lf,
        utf8Encode: mf,
        decodeURIComponent: Nf,
        encodeDates: function t(e) {
            return af(e, (function(n, r) {
                Zu(n) ? e[r] = ff(n) : ef(n) && (e[r] = t(n))
            })),
            e
        },
        base64Encode: bf,
        trim: function(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        isFunction: pf,
        extend: hf,
        extend2Lev: df,
        isEmptyObject: vf,
        searchObjString: yf,
        formatString: _f,
        setLatestChannel: function(t) {
            vf(t) || (function(t, e) {
                var n = !1;
                for (var r in e) t[e[r]] && (n = !0);
                return n
            } (t, Tu) && Ru.clearAppRegister(Tu), Ru.registerApp(t))
        },
        getObjFromQuery: xf,
        getMixedQuery: Cf,
        detectOptionQuery: Of,
        setUtm: function(t, e) {
            var n = {},
            r = Cf(t),
            i = Af(r, "$", "_", "$"),
            o = Af(r, "$latest_", "_latest_", "$latest_");
            return n.pre1 = i,
            n.pre2 = o,
            hf(e, i),
            n
        },
        getCustomUtmFromQuery: Af,
        existLatestUtm: function() {
            var t = !1;
            return af(Tu, (function(e) {
                Ru.properties[e] && (t = !0)
            })),
            t
        },
        setQuery: $f,
        getCurrentPage: If,
        getCurrentPath: Pf,
        rot13defs: Mf,
        rot13obfs: Hf,
        isSafeInteger: jf,
        isInteger: Ef,
        isPresetIdKeys: function(t, e) {
            var n, r = ["$identity_anonymous_id"],
            i = function(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return Du(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Du(t, e) : void 0
                        }
                    } (t))) {
                        n && (t = n);
                        var r = 0,
                        i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                }: {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done,
                        t
                    },
                    e: function(t) {
                        s = !0,
                        o = t
                    },
                    f: function() {
                        try {
                            a || null == n.
                            return || n.
                            return ()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            } ((rf(e) && (r = r.concat(e)), r));
            try {
                for (i.s(); ! (n = i.n()).done;) if (n.value === t) return ! 0
            } catch(t) {
                i.e(t)
            } finally {
                i.f()
            }
            return ! 1
        },
        deepCopy: gf,
        check: Bf,
        getOpenidNameByAppid: function(t) {
            if ("" == t || !Xu(t)) return Ru.log("error: 参数必须是有效值"),
            !1;
            var e = Sf(),
            n = "$identity_" + t + "_openid";
            return e && (n = "$identity_" + t + "_" + e + "_openid"),
            n
        },
        validId: function(t) {
            return ! Xu(t) && !Yu(t) || "" === t || Yu(t) && (t = String(t), !/^\d+$/.test(t)) ? (Ru.log("输入 ID 类型错误"), !1) : !!Bf.checkIdLength(t) && t
        },
        isNewLoginId: function(t, e) {
            return t !== Ru.store._state.history_login_id.name || Ru.store._state.history_login_id.value !== e
        },
        isSameAndAnonymousID: function(t) {
            var e = Ru.store.getFirstId(),
            n = Ru.store.getDistinctId();
            return e ? t === e: t === n
        },
        setUpperCase: Df,
        getIsFirstDay: Rf,
        getPageProps: function() {
            var t = If(),
            e = Pf(),
            n = t.sensors_mp_url_query || "";
            return {
                $url_path: e,
                $url: Lf(e, n),
                $url_query: n
            }
        },
        getAppProps: function(t) {
            var e = {};
            return t && t.path && (e.$url_path = Tf(t.path), e.$url_query = $f(t.query), e.$url = Lf(e.$url_path, e.$url_query)),
            e
        },
        getPath: Tf,
        joinUrl: Lf,
        getPresetProperties: function() {
            if (Ru.properties && Ru.properties.$lib) {
                var t = {};
                af(Ru.properties, (function(e, n) {
                    0 === n.indexOf("$") && (t[n] = e)
                }));
                var e = {
                    $url_path: Pf(),
                    $is_first_day: Rf(),
                    $is_first_time: kf.is_first_launch
                },
                n = hf(t, e, Ru.properties, Ru.store.getProps());
                return delete n.$lib,
                n
            }
            return {}
        }
    },
    Kf = {
        batchRequest: function(t) {
            if (rf(t.data) && t.data.length > 0) {
                var e = Date.now(),
                n = Ru.para.datasend_timeout;
                t.data.forEach((function(t) {
                    t._flush_time = e
                })),
                t.data = JSON.stringify(t.data);
                var r = {
                    url: Ru.para.server_url,
                    method: "POST",
                    dataType: "text",
                    data: "data_list=" + encodeURIComponent(bf(t.data)),
                    timeout: n,
                    success: function() {
                        t.success(t.len)
                    },
                    fail: function() {
                        t.fail()
                    }
                };
                Nu.header && (r.header = Nu.header),
                Ru.system_api.request(r)
            } else t.success(t.len)
        },
        onceSend: function(t) {
            t._flush_time = Date.now();
            var e, n = JSON.stringify(t);
            e = -1 !== Ru.para.server_url.indexOf("?") ? Ru.para.server_url + "&data=" + encodeURIComponent(bf(n)) : Ru.para.server_url + "?data=" + encodeURIComponent(bf(n));
            var r = Ru.para.datasend_timeout;
            Ru.system_api.request({
                url: e,
                dataType: "text",
                method: "GET",
                timeout: r
            })
        }
    };
    function Jf() {
        if (Ru.batch_state.sended) {
            var t, e, n = Ru.batch_state.mem; (e = (t = n.length >= 100 ? n.slice(0, 100) : n).length) > 0 && (Ru.batch_state.sended = !1, Kf.batchRequest({
                data: t,
                len: e,
                success: Xf,
                fail: Gf
            }))
        }
    }
    function Gf() {
        Ru.batch_state.sended = !0,
        Ru.batch_state.failTime++
    }
    function Xf(t) {
        Ru.batch_state.clear(t),
        Ru.batch_state.sended = !0,
        Ru.batch_state.changed = !0,
        Zf(),
        Ru.batch_state.failTime = 0
    }
    function Zf() {
        Ru.batch_state.changed && (Ru.batch_state.is_first_batch_write && (Ru.batch_state.is_first_batch_write = !1, o((function() {
            Jf()
        }), 1e3)), Ru.batch_state.syncStorage && (Ru.system_api.setStorageSync("sensors_prepare_data", Ru.batch_state.mem), Ru.batch_state.changed = !1))
    }
    Ru.batch_state = {
        mem: [],
        changed: !1,
        sended: !0,
        is_first_batch_write: !0,
        sync_storage: !1,
        failTime: 0,
        getLength: function() {
            return this.mem.length
        },
        add: function(t) {
            this.mem.push(t)
        },
        clear: function(t) {
            this.mem.splice(0, t)
        }
    },
    Ru.batchWrite = Zf, Ru.prepareData = function(t) {
        var e, n = {
            distinct_id: Ru.store.getDistinctId(),
            lib: {
                $lib: Ru.lib.name,
                $lib_method: Ru.lib.method,
                $lib_version: String(Ru.lib.version)
            },
            properties: {}
        };
        if (ef(Ru.store._state.identities) && (n.identities = hf({},
        Ru.store.getIdentities())), "track_id_unbind" === t.type && "$UnbindID" === t.event && (n.identities = Wf.deepCopy(t.unbind_value), delete t.unbind_value), hf(n, Ru.store.getUnionId(), t), ef(t.properties) && !vf(t.properties) && hf(n.properties, t.properties), "track_id_unbind" === t.type && "$UnbindID" === t.event && (n.login_id && delete n.login_id, n.anonymous_id && delete n.anonymous_id), t.type && "profile" === t.type.slice(0, 7) || (n._track_id = Number(String(qf()).slice(2, 5) + String(qf()).slice(2, 4) + String(Date.now()).slice( - 4)), n.properties = hf({},
        Ru.properties, Ru.store.getProps(), Ru.currentProps, n.properties), "track" === t.type && (n.properties.$is_first_day = Rf())), n.properties.$time && Zu(n.properties.$time) ? (n.time = 1 * n.properties.$time, delete n.properties.$time) : n.time = 1 * new Date, Ru.ee.data.emit("beforeBuildCheck", n), ef(e = n.properties) && af(e, (function(t, n) {
            if (pf(t)) try {
                e[n] = t(),
                pf(e[n]) && (Ru.log("您的属性 - " + n + " 格式不满足要求，我们已经将其删除"), delete e[n])
            } catch(t) {
                delete e[n],
                Ru.log("您的属性 - " + n + " 抛出了异常，我们已经将其删除")
            }
        })), lf(n),
        function(t) {
            ef(t) && af(t, (function(e, n) {
                if (rf(e)) {
                    var r = [];
                    af(e, (function(t) {
                        if (Xu(t)) r.push(t);
                        else if (Gu(t)) r.push("null");
                        else try {
                            r.push(JSON.stringify(t))
                        } catch(t) {
                            Ru.log("您的数据 - " + n + ":" + e + " - 的数组里的值有错误,已经将其删除")
                        }
                    })),
                    t[n] = r
                }
                if (ef(e)) try {
                    t[n] = JSON.stringify(e)
                } catch(r) {
                    delete t[n],
                    Ru.log("您的数据 - " + n + ":" + e + " - 的数据值有错误,已经将其删除")
                } else Xu(e) || Yu(e) || Zu(e) || Qu(e) || rf(e) || (Ru.log("您的数据 - ", e, "-格式不满足要求，我们已经将其删除"), delete t[n])
            }))
        } (n.properties), yf(n), Ru.ee.data.emit("finalAdjustData", n), !Ru.para.server_url) return ! 1;
        Ru.log(n),
        Ru.send(n)
    },
    Ru.send = function(t) {
        if ("sensorsdata2015_binance" === Ru.storageName && "native" === Ru.para.data_report_type) return function(t) {
            var e;
            t._flush_time = Date.now(),
            e = t.event ? "sensors_" + t.event: "sensors_" + t.type,
            t.dataSource = "sensors",
            Ru.log("report_event, name: ", e, "-- key: ", t),
            __mp_private_api__.reportEvent(e, t)
        } (t),
        !1;
        Ru.para.batch_send ? (Ru.batch_state.getLength() >= 500 && (Ru.log("数据量存储过大，有异常"), Ru.batch_state.mem.shift()), Ru.batch_state.add(t), Ru.batch_state.changed = !0, Ru.batch_state.getLength() >= Ru.para.batch_send.max_length && Jf()) : Kf.onceSend(t)
    },
    Ru.log = function() {
        if (Ru.para.show_log && "object" == ("undefined" == typeof console ? "undefined": Bu(console)) && console.log) try {
            var t = Array.prototype.slice.call(arguments);
            return console.log.apply(console, t)
        } catch(t) {
            console.log(arguments[0])
        }
    },
    Ru.track = function(t, e, n) {
        Ru.prepareData({
            type: "track",
            event: t,
            properties: e
        },
        n)
    },
    Ru.setProfile = function(t) {
        Ru.prepareData({
            type: "profile_set",
            properties: t
        })
    },
    Ru.setOnceProfile = function(t, e) {
        Ru.prepareData({
            type: "profile_set_once",
            properties: t
        },
        e)
    },
    Ru.login = function(t) {
        var e = Ru.store.getFirstId(),
        n = Ru.store.getDistinctId();
        t !== n && (e || Ru.store.set("first_id", n), Ru.trackSignup(t, "$SignUp"))
    },
    Ru.logout = function(t) {
        var e = Ru.store.getFirstId();
        e ? (Ru.store.set("first_id", ""), !0 === t ? Ru.store.set("distinct_id", Vf()) : Ru.store.set("distinct_id", e)) : Ru.log("没有first_id，logout失败")
    },
    Ru.identify = function(t) { (t = Wf.validId(t)) && (Ru.store.getFirstId() ? Ru.store.set("first_id", t) : Ru.store.set("distinct_id", t))
    },
    Ru.trackSignup = function(t, e, n) {
        var r, i, o, a, s;
        ef(t) ? (r = t.id, i = t.event_name, o = t.id_name) : (r = t, i = e),
        Ru.store.set("distinct_id", r),
        a = o && o !== Mu.LOGIN ? o + "+" + r: r,
        s = Ru.store.getFirstId() || Ru.store.getDistinctId(),
        Ru.prepareData({
            original_id: s,
            distinct_id: a,
            type: "track_signup",
            event: i,
            properties: n
        })
    },
    Ru.registerApp = function(t) {
        ef(t) && !vf(t) && (Ru.currentProps = hf(Ru.currentProps, t))
    },
    Ru.clearAppRegister = function(t) {
        rf(t) && af(Ru.currentProps, (function(e, n) {
            uf(t, n) && delete Ru.currentProps[n]
        }))
    },
    Ru.register = function(t) {
        ef(t) && !vf(t) && Ru.store.setProps(t)
    },
    Ru.clearAllRegister = function() {
        Ru.store.setProps({},
        !0)
    },
    Ru.use = function(t) {
        var e = sf(arguments, 1);
        return e.unshift(this),
        ef(t) && pf(t.init) && t.init.apply(t, e),
        t
    },
    Ru.usePlugin = Ru.use, Ru.getServerUrl = function() {
        return Ru.para.server_url
    },
    Ru.registerPropertyPlugin = function(t) {
        pf(t.properties) ? !t.isMatchedWithFilter || pf(t.isMatchedWithFilter) ? Ru.ee.data.on("finalAdjustData", (function(e) {
            try {
                pf(t.isMatchedWithFilter) ? t.isMatchedWithFilter(e) && t.properties(e) : t.properties(e)
            } catch(t) {
                Ru.log("execute registerPropertyPlugin callback error:" + t)
            }
        })) : Ru.log("registerPropertyPlugin arguments error, isMatchedWithFilter must be function") : Ru.log("registerPropertyPlugin arguments error, properties must be function")
    };
    var Qf = Object.prototype.hasOwnProperty,
    Yf = {
        inited: !0,
        storageInfo: null,
        store_queue: [],
        getStorage: function() {
            return this.storageInfo || (this.storageInfo = Ru.system_api.getStorageSync(Ru.storageName) || ""),
            this.storageInfo
        },
        _state: {},
        getUUID: function() {
            return Vf()
        },
        toState: function(t) {
            var e = null,
            n = this;
            function r() {
                e.distinct_id ? n._state = e: n.set("distinct_id", Vf())
            }
            tf(t) ? (e = JSON.parse(t), r()) : ef(t) ? (e = t, r()) : this.set("distinct_id", Vf());
            var i = this._state._first_id || this._state.first_id,
            o = this._state._distinct_id || this._state.distinct_id,
            a = (this._state.history_login_id ? this._state.history_login_id: {}).name;
            if (this._state.identities && Xu(this._state.identities)) {
                var s = JSON.parse(Mf(this._state.identities));
                this._state.identities = s
            }
            function c(t) {
                for (var e in Yf._state.identities) Qf.call(Yf._state.identities, e) && e !== Hu.identity_id && e !== t && delete Yf._state.identities[e]
            }
            this._state.identities && ef(this._state.identities) && !vf(this._state.identities) || (this._state.identities = {},
            this._state.identities[Hu.identity_id] = Vf()),
            i ? a && Qf.call(this._state.identities, a) ? this._state.identities[a] !== o && (this._state.identities[a] = o, c(a), this._state.history_login_id.value = o) : (this._state.identities[Mu.LOGIN] = o, c(Mu.LOGIN), this._state.history_login_id = {
                name: Mu.LOGIN,
                value: o
            }) : this._state.history_login_id = {
                name: "",
                value: ""
            },
            this.save()
        },
        getFirstId: function() {
            return this._state._first_id || this._state.first_id
        },
        getDistinctId: function() {
            return this.getLoginDistinctId() || this._state._distinct_id || this._state.distinct_id
        },
        getUnionId: function() {
            var t = {},
            e = this._state._first_id || this._state.first_id,
            n = this.getDistinctId();
            return e && n ? (t.login_id = n, t.anonymous_id = e) : t.anonymous_id = n,
            t
        },
        getIdentities: function() {
            var t = JSON.parse(JSON.stringify(this._state.identities));
            return t.$identity_anonymous_id = this.getAnonymousId(),
            t
        },
        getAnonymousId: function() {
            return this.getUnionId().anonymous_id
        },
        getHistoryLoginId: function() {
            return ef(this._state.history_login_id) ? this._state.history_login_id: null
        },
        getLoginDistinctId: function() {
            var t = this.getHistoryLoginId();
            return ef(t) && t.value ? t.name !== Mu.LOGIN ? t.name + "+" + t.value: t.value: null
        },
        getProps: function() {
            return this._state.props || {}
        },
        setProps: function(t, e) {
            var n = this._state.props || {};
            e ? this.set("props", t) : (hf(n, t), this.set("props", n))
        },
        set: function(t, e) {
            var n = {};
            for (var r in "string" == typeof t ? n[t] = e: "object" == Bu(t) && (n = t), this._state = this._state || {},
            n) this._state[r] = n[r],
            "first_id" === r ? delete this._state._first_id: "distinct_id" === r && (delete this._state._distinct_id, Ru.events.emit("changeDistinctId"));
            this.save()
        },
        identitiesSet: function(t) {
            var e = {};
            switch (t.type) {
            case "login":
                e[Hu.identity_id] = this._state.identities[Hu.identity_id],
                e[t.id_name] = t.id;
                break;
            case "logout":
                e[Hu.identity_id] = this._state.identities[Hu.identity_id]
            }
            this.set("identities", e)
        },
        change: function(t, e) {
            this._state["_" + t] = e
        },
        encryptStorage: function() {
            var t = this.getStorage(),
            e = "data:enc;";
            ef(t) ? t = e + Hf(JSON.stringify(t)) : Xu(t) && -1 === t.indexOf(e) && (t = e + Hf(t)),
            Ru.system_api.setStorageSync(Ru.storageName, t)
        },
        save: function() {
            var t = gf(this._state),
            e = Hf(JSON.stringify(t.identities));
            t.identities = e,
            delete t._first_id,
            delete t._distinct_id,
            Ru.para.encrypt_storage && (t = "data:enc;" + Hf(JSON.stringify(t))),
            Ru.system_api.setStorageSync(Ru.storageName, t)
        },
        init: function() {
            var t = this.getStorage(),
            e = Vf();
            if (t) Xu(t) && -1 !== t.indexOf("data:enc;") && (t = t.substring(9), t = JSON.parse(Mf(t))),
            this.toState(t);
            else {
                kf.is_first_launch = !0;
                var n = new Date,
                r = n.getTime();
                n.setHours(23),
                n.setMinutes(59),
                n.setSeconds(60),
                this.set({
                    distinct_id: e,
                    first_visit_time: r,
                    first_visit_day_time: n.getTime(),
                    identities: ju({},
                    Hu.identity_id, e),
                    history_login_id: {
                        name: "",
                        value: ""
                    }
                }),
                Ru.setOnceProfile({
                    $first_visit_time: n
                })
            }
            this.checkStoreInit && this.checkStoreInit()
        }
    };
    function tl(t, e) {
        Yf._state.identities[t] = e,
        Yf.save(),
        Ru.prepareData({
            type: "track_id_bind",
            event: "$BindID"
        })
    }
    function el(t, e) {
        hasOwnProperty.call(Yf._state.identities, t) && e === Yf._state.identities[t] && (Hu.unbind_without_check && Hu.unbind_without_check.indexOf(t) < 0 && delete Yf._state.identities[t], Yf.save());
        var n = Yf.getDistinctId(),
        r = Yf.getFirstId();
        n === t + "+" + e && (Yf.set("first_id", ""), Yf.set("distinct_id", r), Yf.set("history_login_id", {
            name: "",
            value: ""
        }));
        var i = {};
        i[t] = e,
        Ru.prepareData({
            type: "track_id_unbind",
            event: "$UnbindID",
            unbind_value: i
        })
    }
    Ru.store = Yf;
    var nl = Object.freeze({
        __proto__: null,
        trackSignup: function(t, e, n) {
            var r, i, o, a;
            Wf.isObject(t) ? (r = t.id, i = t.event_name, o = t.id_name) : (r = t, i = e),
            Yf.set("distinct_id", r),
            a = o && o !== Mu.LOGIN ? o + "+" + r: r;
            var s = Yf.getFirstId() || Yf.getDistinctId();
            Ru.prepareData({
                original_id: s,
                distinct_id: a,
                type: "track_signup",
                event: i,
                properties: n
            })
        },
        bindWithoutCheck: tl,
        bind: function(t, e) {
            var n = "";
            if (Wf.isNumber(e)) {
                if (Wf.isInteger(e) && !1 === Wf.isSafeInteger(e)) return Ru.log("Value must be String"),
                !1;
                e = String(e)
            }
            if (!Wf.isString(t)) return Ru.log("Key must be String"),
            !1;
            var r = Yf.getHistoryLoginId(),
            i = r ? r.name: "",
            o = [Mu.LOGIN, i];
            return Wf.isArray(Hu.bind_preset_id) && (o = [Mu.LOGIN, i].concat(Hu.bind_preset_id)),
            !Wf.check.checkKeyword(t) || Wf.isPresetIdKeys(t, o) ? (n = "Key [" + t + "] is invalid", Ru.log(n), !1) : e && "" !== e ? Wf.isString(e) ? !!Wf.check.checkIdLength(e) && void tl(t, e) : (Ru.log("Value must be String"), !1) : (Ru.log("Value is empty or null"), !1)
        },
        unbindWithoutCheck: el,
        unbind: function(t, e) {
            var n = "";
            if (Wf.isNumber(e)) {
                if (Wf.isInteger(e) && !1 === Wf.isSafeInteger(e)) return Ru.log("Value must be String"),
                !1;
                e = String(e)
            }
            return Wf.isString(t) ? !Wf.check.checkKeyword(t) || Wf.isPresetIdKeys(t, [Mu.LOGIN]) ? (n = "Key [" + t + "] is invalid", Ru.log(n), !1) : e && "" !== e ? Wf.isString(e) ? !!Wf.check.checkIdLength(e) && void el(t, e) : (Ru.log("Value must be String"), !1) : (Ru.log("Value is empty or null"), !1) : (Ru.log("Key must be String"), !1)
        },
        loginWithKey: function(t, e) {
            if (Ru.log("loginWithKey is deprecated !!!"), !Wf.isString(t)) return Ru.log("Key must be String"),
            !1;
            var n = "";
            if (!Wf.check.checkKeyword(t) && t.length > 100) n = "Key [" + t + "] is invalid",
            Ru.log(n);
            else if (!Wf.check.checkKeyword(t)) return n = "Key [" + t + "] is invalid",
            Ru.log(n),
            !1;
            if (Wf.isPresetIdKeys(t, Hu.login_preset_id)) return n = "Key [" + t + "] is invalid",
            Ru.log(n),
            !1;
            if (! (e = Wf.validId(e))) return ! 1;
            if (Wf.isSameAndAnonymousID(e)) return ! 1;
            var r = Yf.getFirstId(),
            i = Yf.getDistinctId();
            Wf.isNewLoginId(t, e) && (Yf._state.identities[t] = e, Yf.set("history_login_id", {
                name: t,
                value: e
            }), r || Yf.set("first_id", i), Ru.trackSignup({
                id: e,
                event_name: "$SignUp",
                id_name: t
            }), Yf.identitiesSet({
                type: "login",
                id: e,
                id_name: t
            }))
        },
        login: function(t) {
            if (! (t = Wf.validId(t))) return ! 1;
            if (Wf.isSameAndAnonymousID(t)) return ! 1;
            var e = Yf.getFirstId(),
            n = Yf.getDistinctId(),
            r = Mu.LOGIN;
            Wf.isNewLoginId(r, t) && (Yf._state.identities && (Yf._state.identities[r] = t), Yf.set("history_login_id", {
                name: r,
                value: t
            }), e || Yf.set("first_id", n), Ru.trackSignup({
                id: t,
                event_name: "$SignUp"
            }), Yf.identitiesSet({
                type: "login",
                id: t,
                id_name: r
            }))
        },
        logout: function() {
            var t = Yf.getFirstId();
            Yf.identitiesSet({
                type: "logout"
            }),
            Yf.set("history_login_id", {
                name: "",
                value: ""
            }),
            t ? (Yf.set("first_id", ""), Yf.set("distinct_id", t)) : Ru.log("没有first_id，logout失败")
        },
        getIdentities: function() {
            return Wf.isEmptyObject(Yf._state) ? null: Yf.getIdentities() || null
        },
        resetAnonymousIdentity: function(t) {
            if (Yf.getFirstId()) return Ru.log("resetAnonymousIdentity must be used in a logout state ！"),
            !1;
            if ("number" == typeof t && (t = String(t)), void 0 === t) {
                var e = Yf.getUUID();
                Yf._state.identities[Hu.identity_id] = e,
                Yf.set("distinct_id", e)
            } else Wf.validId(t) && (Yf._state.identities[Hu.identity_id] = t, Yf.set("distinct_id", t))
        },
        getPresetProperties: function() {
            return Wf.getPresetProperties()
        },
        getAnonymousID: function() {
            if (!Wf.isEmptyObject(Ru.store._state)) return Ru.store._state._first_id || Ru.store._state.first_id || Ru.store._state._distinct_id || Ru.store._state.distinct_id;
            Ru.log("请先初始化SDK")
        }
    });
    for (var rl in nl) Ru[rl] = nl[rl];
    function il(t) {
        return "function" == typeof t || !(!t || "object" != Bu(t)) && il(t.listener)
    }
    var ol = function() {
        function t() {
            Iu(this, t),
            this._events = {}
        }
        return Pu(t, [{
            key: "on",
            value: function(t, e) {
                if (!t || !e) return ! 1;
                if (!il(e)) throw new Error("listener must be a function");
                this._events[t] = this._events[t] || [];
                var n = "object" == Bu(e);
                return this._events[t].push(n ? e: {
                    listener: e,
                    once: !1
                }),
                this
            }
        },
        {
            key: "prepend",
            value: function(t, e) {
                if (!t || !e) return ! 1;
                if (!il(e)) throw new Error("listener must be a function");
                this._events[t] = this._events[t] || [];
                var n = "object" == Bu(e);
                return this._events[t].unshift(n ? e: {
                    listener: e,
                    once: !1
                }),
                this
            }
        },
        {
            key: "prependOnce",
            value: function(t, e) {
                return this.prepend(t, {
                    listener: e,
                    once: !0
                })
            }
        },
        {
            key: "once",
            value: function(t, e) {
                return this.on(t, {
                    listener: e,
                    once: !0
                })
            }
        },
        {
            key: "off",
            value: function(t, e) {
                var n = this._events[t];
                if (!n) return ! 1;
                if ("number" == typeof e) n.splice(e, 1);
                else if ("function" == typeof e) for (var r = 0,
                i = n.length; r < i; r++) n[r] && n[r].listener === e && n.splice(r, 1);
                return this
            }
        },
        {
            key: "emit",
            value: function(t, e) {
                var n = this._events[t];
                if (!n) return ! 1;
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    i && (i.listener.call(this, e || {}), i.once && this.off(t, r))
                }
                return this
            }
        },
        {
            key: "removeAllListeners",
            value: function(t) {
                t && this._events[t] ? this._events[t] = [] : this._events = {}
            }
        },
        {
            key: "listeners",
            value: function(t) {
                return t && "string" == typeof t ? this._events[t] : this._events
            }
        }]),
        t
    } (), al = function(t) { !
        function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Cu(t, e)
        } (n, ol);
        var e = Ou(n);
        function n() {
            var t;
            return Iu(this, n),
            (t = e.call(this)).cacheEvents = [],
            t.maxLen = 20,
            t
        }
        return Pu(n, [{
            key: "replay",
            value: function(t, e) {
                this.on(t, e),
                this.cacheEvents.length > 0 && this.cacheEvents.forEach((function(n) {
                    n.type === t && e.call(null, n.data)
                }))
            }
        },
        {
            key: "emit",
            value: function(t, e) {
                xu($u(n.prototype), "emit", this).apply(this, arguments),
                this.cacheEvents.push({
                    type: t,
                    data: e
                }),
                this.cacheEvents.length > this.maxLen && this.cacheEvents.shift()
            }
        }]),
        n
    } (), sl = {}; sl.sdk = new al, sl.data = new al;
    var cl = function() {
        this.sub = []
    }; cl.prototype = {
        add: function(t) {
            this.sub.push(t)
        },
        emit: function(t, e) {
            this.sub.forEach((function(n) {
                n.on(t, e)
            }))
        }
    };
    var ul = function(t) {
        Ru.events.add(this),
        this._events = [],
        this.handle = t,
        this.ready = !1
    }; ul.prototype = {
        on: function(t, e) {
            if (this.ready) {
                if (pf(this.handle)) try {
                    this.handle(t, e)
                } catch(t) {
                    Ru.log(t)
                }
            } else this._events.push({
                event: t,
                data: e
            })
        },
        isReady: function() {
            var t = this;
            t.ready = !0,
            t._events.forEach((function(e) {
                if (pf(t.handle)) try {
                    t.handle(e.event, e.data)
                } catch(t) {
                    Ru.log(t)
                }
            }))
        }
    },
    Ru.ee = sl, Ru.meta = kf, Ru.kit = Kf, Ru.modules = {},
    Ru.eventSub = ul, Ru.events = new cl, Ru.init = function(t) {
        if (!0 === kf.hasExeInit) return ! 1;
        t && ef(t) && Ru.setPara(t),
        kf.hasExeInit = !0,
        t && ef(t) && Ru.setPara(t),
        sl.sdk.emit("afterInitPara"),
        Ru.store.init(),
        Ru.system.init(),
        Ru.para.batch_send && (Ru.system_api.getStorage("sensors_prepare_data", (function(t) {
            var e = [];
            t && t.data && rf(t.data) && (e = t.data, Ru.batch_state.mem = e.concat(Ru.batch_state.mem)),
            Ru.batch_state.syncStorage = !0
        })),
        function t() {
            o((function() {
                Zf(),
                t()
            }), 1e3)
        } (),
        function t() {
            o((function() {
                Jf(),
                t()
            }), Ru.para.batch_send.send_timeout * Math.pow(2, Ru.batch_state.failTime))
        } ())
    },
    Ru.setPara = function(t) {
        Ru.para = df(Ru.para, t);
        var e = [];
        if (rf(Ru.para.source_channel)) for (var n = Ru.para.source_channel.length,
        r = 0; r < n; r++) - 1 === " utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" " + Ru.para.source_channel[r] + " ") && e.push(Ru.para.source_channel[r]);
        Ru.para.source_channel = e,
        "number" != typeof Ru.para.send_timeout && (Ru.para.send_timeout = 1e3);
        var i = {
            send_timeout: 6e3,
            max_length: 6
        };
        t && t.datasend_timeout || Ru.para.batch_send && (Ru.para.datasend_timeout = 1e4),
        !0 === Ru.para.batch_send ? Ru.para.batch_send = hf({},
        i) : ef(Ru.para.batch_send) && (Ru.para.batch_send = hf({},
        i, Ru.para.batch_send)),
        Ru.para.server_url ? Ru.para.preset_properties = ef(Ru.para.preset_properties) ? Ru.para.preset_properties: {}: Ru.log("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")
    },
    Ru.checkInit = function() { ! 0 === Ru.system.inited && !0 === Ru.store.inited && (Ru.inited = !0, Ru._queue.length > 0 && (af(Ru._queue, (function(t) {
            Ru[t[0]].apply(Ru, Vu.call(t[1]))
        })), Ru._queue = []))
    },
    af(["setProfile", "setOnceProfile", "track", "identify", "bind", "unbind", "login", "logout", "registerApp", "clearAppRegister"], (function(t) {
        var e = Ru[t];
        Ru[t] = function() {
            Ru.inited ? e.apply(Ru, arguments) : Ru._queue.push([t, arguments])
        }
    }));
    var fl = {
        inited: !1,
        init: function() {
            var t = (new Date).getTimezoneOffset();
            Yu(t) && (Ru.properties.$timezone_offset = t);
            var e = Sf() || Ru.para.app_id || Ru.para.appid;
            e && (Ru.properties.$app_id = e);
            var n = new i((function(t) {
                Ru.system_api.getNetworkType({
                    success: function(t) {
                        Ru.properties.$network_type = Df(t.networkType)
                    },
                    fail: function(t) {
                        Ru.log("获取网络状态信息失败： ", t)
                    },
                    complete: function() {
                        t()
                    }
                })
            })),
            r = new i((function(t) {
                Ru.system_api.getSystemInfo({
                    success: function(t) {
                        var e = Ru.properties;
                        if (ef(t)) {
                            e.$manufacturer = t.brand,
                            e.$model = t.model,
                            e.$brand = Df(t.brand) || "",
                            e.$screen_width = Number(t.screenWidth),
                            e.$screen_height = Number(t.screenHeight),
                            e.$os = zf(t.platform),
                            e.$os_version = t.system.indexOf(" ") > -1 ? t.system.split(" ")[1] : t.system,
                            e.$mp_client_app_version = t.version || "";
                            var n = t.SDKVersion || "";
                            n && (e.$mp_client_basic_library_version = n)
                        }
                    },
                    fail: function(t) {
                        Ru.log("获取系统信息失败: ", t)
                    },
                    complete: function() {
                        t()
                    }
                })
            }));
            i.all([n, r]).then((function() {
                Ru.system.inited = !0,
                Ru.checkInit()
            }))
        }
    },
    ll = {
        request: function(t) {
            var e;
            t.timeout && (e = t.timeout, delete t.timeout);
            var n = Ru.platform_obj.request(t);
            o((function() {
                try {
                    ef(n) && pf(n.abort) && n.abort()
                } catch(t) {
                    Ru.log(t)
                }
            }), e)
        },
        getStorage: function(t, e) {
            try {
                Ru.platform_obj.getStorage({
                    key: t,
                    success: n,
                    fail: n
                })
            } catch(e) {
                try {
                    Ru.platform_obj.getStorage({
                        key: t,
                        success: n,
                        fail: n
                    })
                } catch(t) {
                    Ru.log("获取 storage 失败！", t)
                }
            }
            function n(t) {
                if (t && t.data && tf(t.data)) try {
                    var n = JSON.parse(t.data);
                    t.data = n
                } catch(t) {
                    Ru.log("parse res.data 失败！", t)
                }
                e(t)
            }
        },
        setStorage: function(t, e) {
            var n;
            try {
                n = JSON.stringify(e)
            } catch(t) {
                Ru.log("序列化缓存对象失败！", t)
            }
            try {
                Ru.platform_obj.setStorage({
                    key: t,
                    data: n
                })
            } catch(e) {
                try {
                    Ru.platform_obj.setStorage({
                        key: t,
                        data: n
                    })
                } catch(t) {
                    Ru.log("设置 storage 失败: ", t)
                }
            }
        },
        getStorageSync: function(t) {
            var e = "";
            try {
                e = Ru.platform_obj.getStorageSync(t)
            } catch(n) {
                try {
                    e = Ru.platform_obj.getStorageSync(t)
                } catch(t) {
                    Ru.log("获取 storage 失败！")
                }
            }
            return tf(e) && (e = JSON.parse(e)),
            e
        },
        setStorageSync: function(t, e) {
            var n;
            try {
                n = JSON.stringify(e)
            } catch(t) {
                Ru.log("序列化缓存对象失败！", t)
            }
            var r = function() {
                Ru.platform_obj.setStorageSync(t, n)
            };
            try {
                r()
            } catch(t) {
                Ru.log("set Storage fail --", t);
                try {
                    r()
                } catch(t) {
                    Ru.log("set Storage fail again --", t)
                }
            }
        },
        getAppInfoSync: function() {
            var t;
            if (Ru.platform_obj.getAccountInfoSync && (t = Ru.platform_obj.getAccountInfoSync()), ef(t) && ef(t.miniProgram)) return t.miniProgram
        },
        getNetworkType: function() {
            return Ru.platform_obj.getNetworkType.apply(null, arguments)
        },
        getSystemInfo: function() {
            return Ru.platform_obj.getSystemInfo.apply(null, arguments)
        }
    },
    pl = Array.prototype.forEach, hl = Array.prototype.slice, dl = Object.prototype.hasOwnProperty, vl = Object.prototype.toString;
    function gl(t) {
        return function(t, e, n) {
            if (null == t) return ! 1;
            if (pl && t.forEach === pl) t.forEach(e, n);
            else if (t.length === +t.length) {
                for (var r = 0,
                i = t.length; r < i; r++) if (r in t && e.call(n, t[r], r, t) === {}) return ! 1
            } else for (var o in t) if (dl.call(t, o) && e.call(n, t[o], o, t) === {}) return ! 1
        } (hl.call(arguments, 1), (function(e) {
            for (var n in e) void 0 !== e[n] && (t[n] = e[n])
        })),
        t
    }
    function _l(t) {
        return null !== t && "object" == Bu(t)
    }
    function yl(t) {
        if (!t) return ! 1;
        var e = Object.prototype.toString.call(t);
        return "[object Function]" == e || "[object AsyncFunction]" == e || "[object GeneratorFunction]" == e
    }
    var ml = {},
    bl = {};
    function wl(t) {
        Object.assign(bl, t)
    }
    function kl(t, e) {
        if (!_l(e)) return ! 1;
        var n, r = e.meta.scene_prefix;
        return ! (!r || (n = r, "[object String]" != vl.call(n))) && ("number" == typeof t || "string" == typeof t && "" !== t ? t = r + String(t) : "未取到值")
    }
    function Sl(t, e, n) {
        var r = t[e];
        t[e] = function(t) {
            yl(n) && n.call(this, t),
            r && yl(r) && r.call(this, t)
        }
    }
    function xl(t) {
        Sl(t, "onLaunch", bl.appOnLaunch),
        Sl(t, "onShow", bl.appOnShow),
        Sl(t, "onHide", bl.appOnHide)
    }
    function Cl(t, e) {
        if (_l(t)) {
            var n = {};
            if (t && t.path && gl(n, ml.sensors._.getAppProps(t)), t && t.scene) {
                var r = kl(t.scene, ml.sensors);
                r && (n.$scene = r, ml.sensors.meta.current_scene = r, ml.sensors.registerApp({
                    $latest_scene: r
                }))
            } else n.$scene = "未取到值";
            var i = ml.sensors._.setUtm(t, n);
            ml.sensors.meta.is_first_launch ? (n.$is_first_time = !0, ml.sensors._.isEmptyObject(i.pre1) || ml.sensors.setOnceProfile(i.pre1)) : n.$is_first_time = !1,
            ml.sensors._.isEmptyObject(i.pre2) || ml.sensors._.setLatestChannel(i.pre2),
            _l(e) && (n = gl(n, e)),
            ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appLaunch && ml.sensors.track("$MPLaunch", n)
        } else ml.sensors.log("appOnLaunch:请传入正确的参数")
    }
    function Ol(t, e) {
        var n = {};
        ml.sensors.meta.mp_show_time = (new Date).getTime(),
        t && t.path && gl(n, ml.sensors._.getAppProps(t));
        var r = ml.sensors._.setUtm(t, n);
        if (ml.sensors._.isEmptyObject(r.pre2) || ml.sensors._.setLatestChannel(r.pre2), t && t.scene) {
            var i = kl(t.scene, ml.sensors);
            i && (n.$scene = i, ml.sensors.registerApp({
                $latest_scene: i
            }))
        }
        _l(e) && (n = gl(n, e)),
        ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appShow && ml.sensors.track("$MPShow", n)
    }
    function Al(t) {
        var e = (new Date).getTime(),
        n = {};
        _l(t) && (n = gl(n, t)),
        gl(n, ml.sensors._.getPageProps());
        var r = ml.sensors.meta.mp_show_time;
        r && e - r > 0 && (e - r) / 36e5 < 24 && (n.event_duration = (e - r) / 1e3),
        ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appHide && ml.sensors.track("$MPHide", n)
    } ["appOnLaunch", "appOnShow", "appOnHide", "pageOnShow", "pageOnLoad"].forEach((function(t) {
        bl[t] = function() {
            throw new Error("需要先定义 '".concat(t, "' 才能使用"))
        }
    }));
    var $l = {
        appLaunch: !0,
        appShow: !0,
        appHide: !0
    },
    Il = {
        name: "AutoTrackApp",
        init: function(t, e) {
            if (!t) return console.log("请正确初始化 sensorsdata，才能使用插件"),
            !1;
            ml.sensors = t,
            ml.sensors.para.autoTrack = gl($l, e),
            Il.lifeCycleAPI(),
            Il.proxyFrameworkInterface()
        },
        lifeCycleAPI: function() {
            var t = {};
            t.appOnLaunch = Cl,
            t.appOnShow = Ol,
            t.appOnHide = Al,
            wl(t)
        },
        proxyFrameworkInterface: function() { !
            function(t, e) {
                function n(t) {
                    var n = App;
                    App = function(r) {
                        try {
                            t && t(r),
                            r[e.para.name] = e,
                            n.apply(this, arguments)
                        } catch(t) {
                            n.apply(this, arguments),
                            ml.sensors.log("App:" + t)
                        }
                    }
                }
                _l(e) && yl(e.platform_obj.onAppShow) && yl(e.platform_obj.onAppHide) ? (n(), e.platform_obj.onAppShow((function(t) {
                    if (!e.para.launched) {
                        var n = t || yl(e.platform_obj.getLaunchOptionsSync) && e.platform_obj.getLaunchOptionsSync() || {};
                        bl.appOnLaunch(n),
                        e.para.launched = !0
                    }
                    bl.appOnShow(t)
                })), e.platform_obj.onAppHide((function() {
                    bl.appOnHide()
                }))) : n(t)
            } (xl, ml.sensors)
        }
    },
    Pl = {};
    function jl(t) {
        var e, n = {};
        if (t) try {
            n = (e = yl(t.platform_obj.getCurrentPages) ? t.platform_obj.getCurrentPages() : getCurrentPages())[e.length - 1]
        } catch(e) {
            t.log(e)
        } else console.log("getCurrentPage:请传入 sa 对象");
        return n
    }
    var El = {
        track: function(t) {
            var e = function(t) {
                var e, n, r = {},
                i = {},
                o = t.currentTarget || {},
                a = o.dataset || {};
                return r.$element_id = o.id,
                r.$element_type = a.type,
                r.$element_content = a.content,
                r.$element_name = a.name,
                _l(t.event_prop) && (i = t.event_prop),
                r.$url_path = (e = "未取到", (n = jl(Pl.sensors)) && n.route && (e = n.route), e),
                r.$url = Pl.sensors._.getPageProps().$url,
                gl(r, i)
            } (t),
            n = t.currentTarget || {},
            r = t.target || {},
            i = t.type,
            o = Pl.sensors.para;
            if (_l(o.framework) && _l(o.framework.taro) && !o.framework.taro.createApp && r.id && n.id && r.id !== n.id) return ! 1;
            if (_l(e) && i && {
                tap: 1,
                longtap: 1,
                longpress: 1
            } [i]) {
                if (o.preset_events && o.preset_events.collect_element && !1 === o.preset_events.collect_element(arguments[0])) return ! 1;
                Pl.sensors.track("$MPClick", e)
            }
        }
    },
    Bl = {
        data: 1,
        onLoad: 1,
        onShow: 1,
        onReady: 1,
        onPullDownRefresh: 1,
        onReachBottom: 1,
        onShareAppMessage: 1,
        onPageScroll: 1,
        onResize: 1,
        onTabItemTap: 1,
        onHide: 1,
        onUnload: 1
    };
    function Dl(t, e) {
        var n = t[e];
        t[e] = function() {
            var t = n.apply(this, arguments),
            e = arguments[0];
            return _l(e) && El.track(e),
            t
        }
    }
    function Rl(t) {
        var e, n, r = [],
        i = Pl.sensors.para.autoTrack;
        if (i && i.mpClick) {
            r = function(t) {
                var e = [];
                for (var n in t)"function" != typeof t[n] || Bl[n] || e.push(n);
                return e
            } (t),
            n = (e = t).onTabItemTap,
            e.onTabItemTap = function(t) {
                n && n.apply(this, arguments);
                var e = {};
                t && (e.$element_content = t.text || ""),
                e.$element_type = "tabBar",
                e.$url_path = t.pagePath ? t.pagePath: Pl.sensors._.getCurrentPath(),
                Pl.sensors.track("$MPClick", e)
            };
            for (var o = r.length,
            a = 0; a < o; a++) Dl(t, r[a])
        }
    }
    function Ll(t) {
        Sl(t, "onShow", bl.pageOnShow),
        Sl(t, "onLoad", bl.pageOnLoad),
        Sl(t, "onUnload", bl.pageOnUnload),
        Sl(t, "onHide", bl.pageOnHide)
    }
    var Tl = function() {
        if (Pl.sensors.para.autoTrack && Pl.sensors.para.autoTrack.pageLeave) {
            var t = {},
            e = "";
            try {
                e = (t = jl(Pl.sensors)) ? t.route: ""
            } catch(t) {
                Pl.sensors.log(t)
            }
            if (Pl.sensors.meta.page_show_time >= 0 && "" !== e) {
                var n = {},
                r = (Date.now() - Pl.sensors.meta.page_show_time) / 1e3; (isNaN(r) || r < 0) && (r = 0),
                gl(n, Pl.sensors._.getPageProps()),
                n.event_duration = r,
                Pl.sensors.track("$MPPageLeave", n),
                Pl.sensors.meta.page_show_time = -1
            }
        }
    };
    function Ml(t) {
        var e = this;
        if (Pl.sensors._.isObject(t)) {
            try {
                e = jl(Pl.sensors)
            } catch(t) {
                Pl.sensors.log("pageOnLoad:" + t)
            }
            e.sensors_mp_url_query = Pl.sensors._.setQuery(t),
            e.sensors_mp_encode_url_query = Pl.sensors._.setQuery(t, !0)
        }
    }
    function Hl() {
        Pl.sensors.meta.page_show_time = Date.now();
        var t = {},
        e = "";
        try {
            var n = jl(Pl.sensors);
            e = n ? n.route: ""
        } catch(t) {
            Pl.sensors.log("pageOnShow:" + t)
        }
        gl(t, Pl.sensors._.getPageProps()),
        t.$referrer = Pl.sensors.meta.sa_referrer,
        Pl.sensors.para && Pl.sensors.para.autoTrack && Pl.sensors.para.autoTrack.pageShow && Pl.sensors.track("$MPViewScreen", t),
        Pl.sensors.meta.sa_referrer = e
    }
    function Nl() {
        Tl()
    }
    function zl() {
        Tl()
    }
    var Ul = {
        pageShow: !0,
        mpClick: !0,
        pageLeave: !1
    },
    Fl = {
        name: "AutoTrackPage",
        init: function(t, e) {
            if (!t) return console.log("请正确初始化 sensorsdata，才能使用插件"),
            !1;
            Pl.sensors = t,
            Pl.sensors.para.autoTrack = gl(Ul, e),
            Fl.lifeCycleAPI(),
            Fl.proxyFrameworkInterface()
        },
        lifeCycleAPI: function() {
            var t = {};
            t.pageOnShow = Hl,
            t.pageOnLoad = Ml,
            t.pageOnUnload = Nl,
            t.pageOnHide = zl,
            wl(t)
        },
        proxyFrameworkInterface: function() { !
            function(t, e) {
                var n = Page;
                Page = function(r) {
                    try {
                        r || (r = {}),
                        yl(t) && t(r),
                        yl(e) && e(r),
                        n.apply(this, arguments)
                    } catch(t) {
                        n.apply(this, arguments),
                        console.log("Page:" + t)
                    }
                };
                var r = Component;
                Component = function(n) {
                    try {
                        n || (n = {}),
                        n.methods || (n.methods = {}),
                        yl(t) && t(n.methods),
                        yl(e) && e(n.methods),
                        r.apply(this, arguments)
                    } catch(t) {
                        r.apply(this, arguments),
                        console.log("Component:" + t)
                    }
                }
            } (Ll, Rl)
        }
    },
    ql = {
        appLaunch: !0,
        appShow: !0,
        appHide: !0,
        pageShow: !0,
        mpClick: !0
    },
    Vl = {
        init: function(t, e) {
            if (!t) return console.log("请正确初始化 sensorsdata，才能使用插件"),
            !1;
            var n = gl(ql, e);
            t.use(Il, n),
            t.use(Fl, n)
        }
    }; Ru.lib.name = "BytedanceMini", Ru.properties.$lib = "BytedanceMini", Ru.system = fl, Ru.system_api = ll, Ru._ = Wf, Ru.storageName = "sensorsdata2015_tt", Ru.meta.scene_prefix = "byte-", Nu.header = {
        "Content-Type": "text/plain"
    },
    Ru.platform_obj = tt, Ru.use(Vl);
    /*! join us */
    var Wl = Object.freeze(Object.defineProperty({
        __proto__: null,
    default:
        Ru
    },
    Symbol.toStringTag, {
        value: "Module"
    })), Kl = {
        chapterInfoPrefix: "q-reader-chapter-info-",
        setting: "q-reader-setting"
    },
    Jl = new Map([["white", {
        bgColor: "#ffffff",
        color: "#000000"
    }], ["green", {
        bgColor: "#D1E4D0",
        color: "#172915"
    }], ["yellow", {
        bgColor: "#ECE2CB",
        color: "#40290C"
    }], ["dark", {
        bgColor: "#0A0A0A",
        color: "#ADADAD"
    }]]), Gl = rt(Jl.entries()).map((function(t) {
        var e = nt(t, 2),
        n = e[0];
        return F(F({},
        e[1]), {},
        {
            name: n
        })
    })), Xl = Array.isArray, Zl = Ec("reader-store", {
        state: function() {
            return {
                readerInstance: {},
                bookInfo: {},
                currentChapter: {},
                chapterList: [],
                readerStyle: ur.getStorageSync(Kl.setting) || {
                    bgColor: Gl[0].bgColor,
                    color: Gl[0].color,
                    name: Gl[0].name,
                    fontSize: 20,
                    prevName: Gl[0].name
                },
                readedChapterIds: [],
                menuStatus: {
                    menu: !1,
                    calalogue: !1,
                    setting: !1
                },
                actionEvents: {},
                readerConfig: {},
                readerTheme: {}
            }
        },
        actions: {
            setReaderInstance: function(t) {
                this.readerInstance = t
            },
            setBookInfo: function(t) {
                this.bookInfo = t
            },
            setCurrentChapter: function(t) {
                this.currentChapter = t
            },
            setChapterList: function(t) {
                this.chapterList = t
            },
            setReaderStyle: function(t) {
                if (this.readerStyle.name !== t.name) {
                    var e = (t.name ? this.readerStyle.name: this.readerStyle.prevName) || "white";
                    this.readerStyle = F(F(F({},
                    this.readerStyle), t), {},
                    {
                        prevName: e
                    })
                }
                t.bgColor && ur.setNavigationBarColor({
                    backgroundColor: t.bgColor,
                    frontColor: "dark" === t.name ? "#ffffff": "#000000"
                }),
                ur.setStorageSync(Kl.setting, F({},
                this.readerStyle)),
                t.name && this.setReaderTheme("dark" === t.name ? "dark": "default"),
                this.actionEvents.onMenuStatusChange("theme", this.readerStyle.name)
            },
            setReadedChapterIds: function(t) {
                Xl(t) ? this.readedChapterIds = t: this.readedChapterIds.push(t)
            },
            setMenuStatus: function(t, e) {
                "menu" !== t || e ? this.menuStatus[t] = e: this.menuStatus = {
                    menu: !1,
                    calalogue: !1,
                    setting: !1
                }
            },
            setActionEvents: function(t) {
                this.actionEvents = t
            },
            setReaderConfig: function(t) {
                this.readerConfig = t
            },
            setReaderTheme: function(t) {
                this.readerTheme = this.readerConfig.readerThemeMap[t]
            }
        }
    }); void 0 !== j || void 0 !== f || "undefined" != typeof global && global;
    var Ql, Yl = {
        exports: {}
    },
    tp = {
        exports: {}
    };
    function ep() {
        return Ql || (Ql = 1, tp.exports = (t = t ||
        function(t, e) {
            var n = Object.create ||
            function() {
                function t() {}
                return function(e) {
                    var n;
                    return t.prototype = e,
                    n = new t,
                    t.prototype = null,
                    n
                }
            } (),
            r = {},
            i = r.lib = {},
            o = i.Base = {
                extend: function(t) {
                    var e = n(this);
                    return t && e.mixIn(t),
                    e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }),
                    e.init.prototype = e,
                    e.$super = this,
                    e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments),
                    t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            a = i.WordArray = o.extend({
                init: function(t, e) {
                    t = this.words = t || [],
                    this.sigBytes = null != e ? e: 4 * t.length
                },
                toString: function(t) {
                    return (t || c).stringify(this)
                },
                concat: function(t) {
                    var e = this.words,
                    n = t.words,
                    r = this.sigBytes,
                    i = t.sigBytes;
                    if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
                        var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                    } else for (o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2];
                    return this.sigBytes += i,
                    this
                },
                clamp: function() {
                    var e = this.words,
                    n = this.sigBytes;
                    e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    e.length = t.ceil(n / 4)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0),
                    t
                },
                random: function(e) {
                    for (var n, r = [], i = function(e) {
                        var n = 987654321,
                        r = 4294967295;
                        return function() {
                            var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                            return i /= 4294967296,
                            (i += .5) * (t.random() > .5 ? 1 : -1)
                        }
                    },
                    o = 0; o < e; o += 4) {
                        var s = i(4294967296 * (n || t.random()));
                        n = 987654071 * s(),
                        r.push(4294967296 * s() | 0)
                    }
                    return new a.init(r, e)
                }
            }),
            s = r.enc = {},
            c = s.Hex = {
                stringify: function(t) {
                    for (var e = t.words,
                    n = t.sigBytes,
                    r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((o >>> 4).toString(16)),
                        r.push((15 & o).toString(16))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length,
                    n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new a.init(n, e / 2)
                }
            },
            u = s.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words,
                    n = t.sigBytes,
                    r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(o))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length,
                    n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new a.init(n, e)
                }
            },
            f = s.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(u.stringify(t)))
                    } catch(t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return u.parse(unescape(encodeURIComponent(t)))
                }
            },
            l = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new a.init,
                    this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = f.parse(t)),
                    this._data.concat(t),
                    this._nDataBytes += t.sigBytes
                },
                _process: function(e) {
                    var n = this._data,
                    r = n.words,
                    i = n.sigBytes,
                    o = this.blockSize,
                    s = i / (4 * o),
                    c = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * o,
                    u = t.min(4 * c, i);
                    if (c) {
                        for (var f = 0; f < c; f += o) this._doProcessBlock(r, f);
                        var l = r.splice(0, c);
                        n.sigBytes -= u
                    }
                    return new a.init(l, u)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(),
                    t
                },
                _minBufferSize: 0
            });
            i.Hasher = l.extend({
                cfg: o.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t),
                    this.reset()
                },
                reset: function() {
                    l.reset.call(this),
                    this._doReset()
                },
                update: function(t) {
                    return this._append(t),
                    this._process(),
                    this
                },
                finalize: function(t) {
                    return t && this._append(t),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(t) {
                    return function(e, n) {
                        return new t.init(n).finalize(e)
                    }
                },
                _createHmacHelper: function(t) {
                    return function(e, n) {
                        return new p.HMAC.init(t, n).finalize(e)
                    }
                }
            });
            var p = r.algo = {};
            return r
        } (Math), t)),
        tp.exports;
        var t
    }
    var np, rp = {
        exports: {}
    };
    function ip() {
        return np || (np = 1, rp.exports = (e = (t = o = ep()).lib, n = e.Base, r = e.WordArray, (i = t.x64 = {}).Word = n.extend({
            init: function(t, e) {
                this.high = t,
                this.low = e
            }
        }), i.WordArray = n.extend({
            init: function(t, e) {
                t = this.words = t || [],
                this.sigBytes = null != e ? e: 8 * t.length
            },
            toX32: function() {
                for (var t = this.words,
                e = t.length,
                n = [], i = 0; i < e; i++) {
                    var o = t[i];
                    n.push(o.high),
                    n.push(o.low)
                }
                return r.create(n, this.sigBytes)
            },
            clone: function() {
                for (var t = n.clone.call(this), e = t.words = this.words.slice(0), r = e.length, i = 0; i < r; i++) e[i] = e[i].clone();
                return t
            }
        }), o)),
        rp.exports;
        var t, e, n, r, i, o
    }
    var op, ap = {
        exports: {}
    };
    var sp, cp = {
        exports: {}
    };
    var up, fp = {
        exports: {}
    };
    function lp() {
        return up || (up = 1, fp.exports = (t = ep(),
        function() {
            var e = t,
            n = e.lib.WordArray;
            function r(t, e, r) {
                for (var i = [], o = 0, a = 0; a < e; a++) if (a % 4) {
                    var s = r[t.charCodeAt(a - 1)] << a % 4 * 2,
                    c = r[t.charCodeAt(a)] >>> 6 - a % 4 * 2;
                    i[o >>> 2] |= (s | c) << 24 - o % 4 * 8,
                    o++
                }
                return n.create(i, o)
            }
            e.enc.Base64 = {
                stringify: function(t) {
                    var e = t.words,
                    n = t.sigBytes,
                    r = this._map;
                    t.clamp();
                    for (var i = [], o = 0; o < n; o += 3) for (var a = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < n; s++) i.push(r.charAt(a >>> 6 * (3 - s) & 63));
                    var c = r.charAt(64);
                    if (c) for (; i.length % 4;) i.push(c);
                    return i.join("")
                },
                parse: function(t) {
                    var e = t.length,
                    n = this._map,
                    i = this._reverseMap;
                    if (!i) {
                        i = this._reverseMap = [];
                        for (var o = 0; o < n.length; o++) i[n.charCodeAt(o)] = o
                    }
                    var a = n.charAt(64);
                    if (a) {
                        var s = t.indexOf(a); - 1 !== s && (e = s)
                    }
                    return r(t, e, i)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        } (), t.enc.Base64)),
        fp.exports;
        var t
    }
    var pp, hp = {
        exports: {}
    };
    function dp() {
        return pp || (pp = 1, hp.exports = (t = ep(),
        function(e) {
            var n = t,
            r = n.lib,
            i = r.WordArray,
            o = r.Hasher,
            a = n.algo,
            s = []; !
            function() {
                for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
            } ();
            var c = a.MD5 = o.extend({
                _doReset: function() {
                    this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(t, e) {
                    for (var n = 0; n < 16; n++) {
                        var r = e + n,
                        i = t[r];
                        t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                    }
                    var o = this._hash.words,
                    a = t[e + 0],
                    c = t[e + 1],
                    h = t[e + 2],
                    d = t[e + 3],
                    v = t[e + 4],
                    g = t[e + 5],
                    _ = t[e + 6],
                    y = t[e + 7],
                    m = t[e + 8],
                    b = t[e + 9],
                    w = t[e + 10],
                    k = t[e + 11],
                    S = t[e + 12],
                    x = t[e + 13],
                    C = t[e + 14],
                    O = t[e + 15],
                    A = o[0],
                    $ = o[1],
                    I = o[2],
                    P = o[3];
                    A = u(A, $, I, P, a, 7, s[0]),
                    P = u(P, A, $, I, c, 12, s[1]),
                    I = u(I, P, A, $, h, 17, s[2]),
                    $ = u($, I, P, A, d, 22, s[3]),
                    A = u(A, $, I, P, v, 7, s[4]),
                    P = u(P, A, $, I, g, 12, s[5]),
                    I = u(I, P, A, $, _, 17, s[6]),
                    $ = u($, I, P, A, y, 22, s[7]),
                    A = u(A, $, I, P, m, 7, s[8]),
                    P = u(P, A, $, I, b, 12, s[9]),
                    I = u(I, P, A, $, w, 17, s[10]),
                    $ = u($, I, P, A, k, 22, s[11]),
                    A = u(A, $, I, P, S, 7, s[12]),
                    P = u(P, A, $, I, x, 12, s[13]),
                    I = u(I, P, A, $, C, 17, s[14]),
                    A = f(A, $ = u($, I, P, A, O, 22, s[15]), I, P, c, 5, s[16]),
                    P = f(P, A, $, I, _, 9, s[17]),
                    I = f(I, P, A, $, k, 14, s[18]),
                    $ = f($, I, P, A, a, 20, s[19]),
                    A = f(A, $, I, P, g, 5, s[20]),
                    P = f(P, A, $, I, w, 9, s[21]),
                    I = f(I, P, A, $, O, 14, s[22]),
                    $ = f($, I, P, A, v, 20, s[23]),
                    A = f(A, $, I, P, b, 5, s[24]),
                    P = f(P, A, $, I, C, 9, s[25]),
                    I = f(I, P, A, $, d, 14, s[26]),
                    $ = f($, I, P, A, m, 20, s[27]),
                    A = f(A, $, I, P, x, 5, s[28]),
                    P = f(P, A, $, I, h, 9, s[29]),
                    I = f(I, P, A, $, y, 14, s[30]),
                    A = l(A, $ = f($, I, P, A, S, 20, s[31]), I, P, g, 4, s[32]),
                    P = l(P, A, $, I, m, 11, s[33]),
                    I = l(I, P, A, $, k, 16, s[34]),
                    $ = l($, I, P, A, C, 23, s[35]),
                    A = l(A, $, I, P, c, 4, s[36]),
                    P = l(P, A, $, I, v, 11, s[37]),
                    I = l(I, P, A, $, y, 16, s[38]),
                    $ = l($, I, P, A, w, 23, s[39]),
                    A = l(A, $, I, P, x, 4, s[40]),
                    P = l(P, A, $, I, a, 11, s[41]),
                    I = l(I, P, A, $, d, 16, s[42]),
                    $ = l($, I, P, A, _, 23, s[43]),
                    A = l(A, $, I, P, b, 4, s[44]),
                    P = l(P, A, $, I, S, 11, s[45]),
                    I = l(I, P, A, $, O, 16, s[46]),
                    A = p(A, $ = l($, I, P, A, h, 23, s[47]), I, P, a, 6, s[48]),
                    P = p(P, A, $, I, y, 10, s[49]),
                    I = p(I, P, A, $, C, 15, s[50]),
                    $ = p($, I, P, A, g, 21, s[51]),
                    A = p(A, $, I, P, S, 6, s[52]),
                    P = p(P, A, $, I, d, 10, s[53]),
                    I = p(I, P, A, $, w, 15, s[54]),
                    $ = p($, I, P, A, c, 21, s[55]),
                    A = p(A, $, I, P, m, 6, s[56]),
                    P = p(P, A, $, I, O, 10, s[57]),
                    I = p(I, P, A, $, _, 15, s[58]),
                    $ = p($, I, P, A, x, 21, s[59]),
                    A = p(A, $, I, P, v, 6, s[60]),
                    P = p(P, A, $, I, k, 10, s[61]),
                    I = p(I, P, A, $, h, 15, s[62]),
                    $ = p($, I, P, A, b, 21, s[63]),
                    o[0] = o[0] + A | 0,
                    o[1] = o[1] + $ | 0,
                    o[2] = o[2] + I | 0,
                    o[3] = o[3] + P | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                    n = t.words,
                    r = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                    n[i >>> 5] |= 128 << 24 - i % 32;
                    var o = e.floor(r / 4294967296),
                    a = r;
                    n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                    n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                    t.sigBytes = 4 * (n.length + 1),
                    this._process();
                    for (var s = this._hash,
                    c = s.words,
                    u = 0; u < 4; u++) {
                        var f = c[u];
                        c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
                    }
                    return s
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(),
                    t
                }
            });
            function u(t, e, n, r, i, o, a) {
                var s = t + (e & n | ~e & r) + i + a;
                return (s << o | s >>> 32 - o) + e
            }
            function f(t, e, n, r, i, o, a) {
                var s = t + (e & r | n & ~r) + i + a;
                return (s << o | s >>> 32 - o) + e
            }
            function l(t, e, n, r, i, o, a) {
                var s = t + (e ^ n ^ r) + i + a;
                return (s << o | s >>> 32 - o) + e
            }
            function p(t, e, n, r, i, o, a) {
                var s = t + (n ^ (e | ~r)) + i + a;
                return (s << o | s >>> 32 - o) + e
            }
            n.MD5 = o._createHelper(c),
            n.HmacMD5 = o._createHmacHelper(c)
        } (Math), t.MD5)),
        hp.exports;
        var t
    }
    var vp, gp = {
        exports: {}
    };
    function _p() {
        return vp || (vp = 1, gp.exports = (e = (t = s = ep()).lib, n = e.WordArray, r = e.Hasher, i = t.algo, o = [], a = i.SHA1 = r.extend({
            _doReset: function() {
                this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, e) {
                for (var n = this._hash.words,
                r = n[0], i = n[1], a = n[2], s = n[3], c = n[4], u = 0; u < 80; u++) {
                    if (u < 16) o[u] = 0 | t[e + u];
                    else {
                        var f = o[u - 3] ^ o[u - 8] ^ o[u - 14] ^ o[u - 16];
                        o[u] = f << 1 | f >>> 31
                    }
                    var l = (r << 5 | r >>> 27) + c + o[u];
                    l += u < 20 ? 1518500249 + (i & a | ~i & s) : u < 40 ? 1859775393 + (i ^ a ^ s) : u < 60 ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514,
                    c = s,
                    s = a,
                    a = i << 30 | i >>> 2,
                    i = r,
                    r = l
                }
                n[0] = n[0] + r | 0,
                n[1] = n[1] + i | 0,
                n[2] = n[2] + a | 0,
                n[3] = n[3] + s | 0,
                n[4] = n[4] + c | 0
            },
            _doFinalize: function() {
                var t = this._data,
                e = t.words,
                n = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32,
                e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                e[15 + (r + 64 >>> 9 << 4)] = n,
                t.sigBytes = 4 * e.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var t = r.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        }), t.SHA1 = r._createHelper(a), t.HmacSHA1 = r._createHmacHelper(a), s.SHA1)),
        gp.exports;
        var t, e, n, r, i, o, a, s
    }
    var yp, mp = {
        exports: {}
    };
    function bp() {
        return yp || (yp = 1, mp.exports = (t = ep(),
        function(e) {
            var n = t,
            r = n.lib,
            i = r.WordArray,
            o = r.Hasher,
            a = n.algo,
            s = [],
            c = []; !
            function() {
                function t(t) {
                    for (var n = e.sqrt(t), r = 2; r <= n; r++) if (! (t % r)) return ! 1;
                    return ! 0
                }
                function n(t) {
                    return 4294967296 * (t - (0 | t)) | 0
                }
                for (var r = 2,
                i = 0; i < 64;) t(r) && (i < 8 && (s[i] = n(e.pow(r, .5))), c[i] = n(e.pow(r, 1 / 3)), i++),
                r++
            } ();
            var u = [],
            f = a.SHA256 = o.extend({
                _doReset: function() {
                    this._hash = new i.init(s.slice(0))
                },
                _doProcessBlock: function(t, e) {
                    for (var n = this._hash.words,
                    r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], f = n[5], l = n[6], p = n[7], h = 0; h < 64; h++) {
                        if (h < 16) u[h] = 0 | t[e + h];
                        else {
                            var d = u[h - 15],
                            v = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                            g = u[h - 2],
                            _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                            u[h] = v + u[h - 7] + _ + u[h - 16]
                        }
                        var y = r & i ^ r & o ^ i & o,
                        m = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                        b = p + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & f ^ ~s & l) + c[h] + u[h];
                        p = l,
                        l = f,
                        f = s,
                        s = a + b | 0,
                        a = o,
                        o = i,
                        i = r,
                        r = b + (m + y) | 0
                    }
                    n[0] = n[0] + r | 0,
                    n[1] = n[1] + i | 0,
                    n[2] = n[2] + o | 0,
                    n[3] = n[3] + a | 0,
                    n[4] = n[4] + s | 0,
                    n[5] = n[5] + f | 0,
                    n[6] = n[6] + l | 0,
                    n[7] = n[7] + p | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                    n = t.words,
                    r = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                    return n[i >>> 5] |= 128 << 24 - i % 32,
                    n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296),
                    n[15 + (i + 64 >>> 9 << 4)] = r,
                    t.sigBytes = 4 * n.length,
                    this._process(),
                    this._hash
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(),
                    t
                }
            });
            n.SHA256 = o._createHelper(f),
            n.HmacSHA256 = o._createHmacHelper(f)
        } (Math), t.SHA256)),
        mp.exports;
        var t
    }
    var wp, kp, Sp = {
        exports: {}
    };
    function xp() {
        return kp || (kp = 1, Sp.exports = (t = ep(), ip(),
        function() {
            var e = t,
            n = e.lib.Hasher,
            r = e.x64,
            i = r.Word,
            o = r.WordArray,
            a = e.algo;
            function s() {
                return i.create.apply(i, arguments)
            }
            var c = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)],
            u = []; !
            function() {
                for (var t = 0; t < 80; t++) u[t] = s()
            } ();
            var f = a.SHA512 = n.extend({
                _doReset: function() {
                    this._hash = new o.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)])
                },
                _doProcessBlock: function(t, e) {
                    for (var n = this._hash.words,
                    r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], f = n[5], l = n[6], p = n[7], h = r.high, d = r.low, v = i.high, g = i.low, _ = o.high, y = o.low, m = a.high, b = a.low, w = s.high, k = s.low, S = f.high, x = f.low, C = l.high, O = l.low, A = p.high, $ = p.low, I = h, P = d, j = v, E = g, B = _, D = y, R = m, L = b, T = w, M = k, H = S, N = x, z = C, U = O, F = A, q = $, V = 0; V < 80; V++) {
                        var W = u[V];
                        if (V < 16) var K = W.high = 0 | t[e + 2 * V],
                        J = W.low = 0 | t[e + 2 * V + 1];
                        else {
                            var G = u[V - 15],
                            X = G.high,
                            Z = G.low,
                            Q = (X >>> 1 | Z << 31) ^ (X >>> 8 | Z << 24) ^ X >>> 7,
                            Y = (Z >>> 1 | X << 31) ^ (Z >>> 8 | X << 24) ^ (Z >>> 7 | X << 25),
                            tt = u[V - 2],
                            et = tt.high,
                            nt = tt.low,
                            rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6,
                            it = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26),
                            ot = u[V - 7],
                            at = ot.high,
                            st = ot.low,
                            ct = u[V - 16],
                            ut = ct.high,
                            ft = ct.low;
                            K = (K = (K = Q + at + ((J = Y + st) >>> 0 < Y >>> 0 ? 1 : 0)) + rt + ((J += it) >>> 0 < it >>> 0 ? 1 : 0)) + ut + ((J += ft) >>> 0 < ft >>> 0 ? 1 : 0),
                            W.high = K,
                            W.low = J
                        }
                        var lt, pt = T & H ^ ~T & z,
                        ht = M & N ^ ~M & U,
                        dt = I & j ^ I & B ^ j & B,
                        vt = P & E ^ P & D ^ E & D,
                        gt = (I >>> 28 | P << 4) ^ (I << 30 | P >>> 2) ^ (I << 25 | P >>> 7),
                        _t = (P >>> 28 | I << 4) ^ (P << 30 | I >>> 2) ^ (P << 25 | I >>> 7),
                        yt = (T >>> 14 | M << 18) ^ (T >>> 18 | M << 14) ^ (T << 23 | M >>> 9),
                        mt = (M >>> 14 | T << 18) ^ (M >>> 18 | T << 14) ^ (M << 23 | T >>> 9),
                        bt = c[V],
                        wt = bt.high,
                        kt = bt.low,
                        St = F + yt + ((lt = q + mt) >>> 0 < q >>> 0 ? 1 : 0),
                        xt = _t + vt;
                        F = z,
                        q = U,
                        z = H,
                        U = N,
                        H = T,
                        N = M,
                        T = R + (St = (St = (St = St + pt + ((lt += ht) >>> 0 < ht >>> 0 ? 1 : 0)) + wt + ((lt += kt) >>> 0 < kt >>> 0 ? 1 : 0)) + K + ((lt += J) >>> 0 < J >>> 0 ? 1 : 0)) + ((M = L + lt | 0) >>> 0 < L >>> 0 ? 1 : 0) | 0,
                        R = B,
                        L = D,
                        B = j,
                        D = E,
                        j = I,
                        E = P,
                        I = St + (gt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0)) + ((P = lt + xt | 0) >>> 0 < lt >>> 0 ? 1 : 0) | 0
                    }
                    d = r.low = d + P,
                    r.high = h + I + (d >>> 0 < P >>> 0 ? 1 : 0),
                    g = i.low = g + E,
                    i.high = v + j + (g >>> 0 < E >>> 0 ? 1 : 0),
                    y = o.low = y + D,
                    o.high = _ + B + (y >>> 0 < D >>> 0 ? 1 : 0),
                    b = a.low = b + L,
                    a.high = m + R + (b >>> 0 < L >>> 0 ? 1 : 0),
                    k = s.low = k + M,
                    s.high = w + T + (k >>> 0 < M >>> 0 ? 1 : 0),
                    x = f.low = x + N,
                    f.high = S + H + (x >>> 0 < N >>> 0 ? 1 : 0),
                    O = l.low = O + U,
                    l.high = C + z + (O >>> 0 < U >>> 0 ? 1 : 0),
                    $ = p.low = $ + q,
                    p.high = A + F + ($ >>> 0 < q >>> 0 ? 1 : 0)
                },
                _doFinalize: function() {
                    var t = this._data,
                    e = t.words,
                    n = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                    return e[r >>> 5] |= 128 << 24 - r % 32,
                    e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                    e[31 + (r + 128 >>> 10 << 5)] = n,
                    t.sigBytes = 4 * e.length,
                    this._process(),
                    this._hash.toX32()
                },
                clone: function() {
                    var t = n.clone.call(this);
                    return t._hash = this._hash.clone(),
                    t
                },
                blockSize: 32
            });
            e.SHA512 = n._createHelper(f),
            e.HmacSHA512 = n._createHmacHelper(f)
        } (), t.SHA512)),
        Sp.exports;
        var t
    }
    var Cp, Op, Ap = {
        exports: {}
    },
    $p = {
        exports: {}
    };
    var Ip, Pp, jp = {
        exports: {}
    },
    Ep = {
        exports: {}
    };
    function Bp() {
        return Pp || (Pp = 1, Ep.exports = (e = (t = ep()).lib.Base, n = t.enc.Utf8, void(t.algo.HMAC = e.extend({
            init: function(t, e) {
                t = this._hasher = new t.init,
                "string" == typeof e && (e = n.parse(e));
                var r = t.blockSize,
                i = 4 * r;
                e.sigBytes > i && (e = t.finalize(e)),
                e.clamp();
                for (var o = this._oKey = e.clone(), a = this._iKey = e.clone(), s = o.words, c = a.words, u = 0; u < r; u++) s[u] ^= 1549556828,
                c[u] ^= 909522486;
                o.sigBytes = a.sigBytes = i,
                this.reset()
            },
            reset: function() {
                var t = this._hasher;
                t.reset(),
                t.update(this._iKey)
            },
            update: function(t) {
                return this._hasher.update(t),
                this
            },
            finalize: function(t) {
                var e = this._hasher,
                n = e.finalize(t);
                return e.reset(),
                e.finalize(this._oKey.clone().concat(n))
            }
        })))),
        Ep.exports;
        var t, e, n
    }
    var Dp, Rp, Lp = {
        exports: {}
    },
    Tp = {
        exports: {}
    };
    function Mp() {
        return Rp || (Rp = 1, Tp.exports = (s = ep(), _p(), Bp(), n = (e = (t = s).lib).Base, r = e.WordArray, o = (i = t.algo).MD5, a = i.EvpKDF = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: o,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var n = this.cfg,
                i = n.hasher.create(), o = r.create(), a = o.words, s = n.keySize, c = n.iterations; a.length < s;) {
                    u && i.update(u);
                    var u = i.update(t).finalize(e);
                    i.reset();
                    for (var f = 1; f < c; f++) u = i.finalize(u),
                    i.reset();
                    o.concat(u)
                }
                return o.sigBytes = 4 * s,
                o
            }
        }), t.EvpKDF = function(t, e, n) {
            return a.create(n).compute(t, e)
        },
        s.EvpKDF)),
        Tp.exports;
        var t, e, n, r, i, o, a, s
    }
    var Hp, Np = {
        exports: {}
    };
    function zp() {
        return Hp || (Hp = 1, Np.exports = (t = ep(), Mp(), void(t.lib.Cipher ||
        function(e) {
            var n = t,
            r = n.lib,
            i = r.Base,
            o = r.WordArray,
            a = r.BufferedBlockAlgorithm,
            s = n.enc;
            s.Utf8;
            var c = s.Base64,
            u = n.algo.EvpKDF,
            f = r.Cipher = a.extend({
                cfg: i.extend(),
                createEncryptor: function(t, e) {
                    return this.create(this._ENC_XFORM_MODE, t, e)
                },
                createDecryptor: function(t, e) {
                    return this.create(this._DEC_XFORM_MODE, t, e)
                },
                init: function(t, e, n) {
                    this.cfg = this.cfg.extend(n),
                    this._xformMode = t,
                    this._key = e,
                    this.reset()
                },
                reset: function() {
                    a.reset.call(this),
                    this._doReset()
                },
                process: function(t) {
                    return this._append(t),
                    this._process()
                },
                finalize: function(t) {
                    return t && this._append(t),
                    this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function() {
                    function t(t) {
                        return "string" == typeof t ? m: _
                    }
                    return function(e) {
                        return {
                            encrypt: function(n, r, i) {
                                return t(r).encrypt(e, n, r, i)
                            },
                            decrypt: function(n, r, i) {
                                return t(r).decrypt(e, n, r, i)
                            }
                        }
                    }
                } ()
            });
            r.StreamCipher = f.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var l = n.mode = {},
            p = r.BlockCipherMode = i.extend({
                createEncryptor: function(t, e) {
                    return this.Encryptor.create(t, e)
                },
                createDecryptor: function(t, e) {
                    return this.Decryptor.create(t, e)
                },
                init: function(t, e) {
                    this._cipher = t,
                    this._iv = e
                }
            }),
            h = l.CBC = function() {
                var t = p.extend();
                function e(t, e, n) {
                    var r = this._iv;
                    if (r) {
                        var i = r;
                        this._iv = undefined
                    } else i = this._prevBlock;
                    for (var o = 0; o < n; o++) t[e + o] ^= i[o]
                }
                return t.Encryptor = t.extend({
                    processBlock: function(t, n) {
                        var r = this._cipher,
                        i = r.blockSize;
                        e.call(this, t, n, i),
                        r.encryptBlock(t, n),
                        this._prevBlock = t.slice(n, n + i)
                    }
                }),
                t.Decryptor = t.extend({
                    processBlock: function(t, n) {
                        var r = this._cipher,
                        i = r.blockSize,
                        o = t.slice(n, n + i);
                        r.decryptBlock(t, n),
                        e.call(this, t, n, i),
                        this._prevBlock = o
                    }
                }),
                t
            } (),
            d = (n.pad = {}).Pkcs7 = {
                pad: function(t, e) {
                    for (var n = 4 * e,
                    r = n - t.sigBytes % n,
                    i = r << 24 | r << 16 | r << 8 | r,
                    a = [], s = 0; s < r; s += 4) a.push(i);
                    var c = o.create(a, r);
                    t.concat(c)
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            };
            r.BlockCipher = f.extend({
                cfg: f.cfg.extend({
                    mode: h,
                    padding: d
                }),
                reset: function() {
                    f.reset.call(this);
                    var t = this.cfg,
                    e = t.iv,
                    n = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var r = n.createEncryptor;
                    else r = n.createDecryptor,
                    this._minBufferSize = 1;
                    this._mode && this._mode.__creator == r ? this._mode.init(this, e && e.words) : (this._mode = r.call(n, this, e && e.words), this._mode.__creator = r)
                },
                _doProcessBlock: function(t, e) {
                    this._mode.processBlock(t, e)
                },
                _doFinalize: function() {
                    var t = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        t.pad(this._data, this.blockSize);
                        var e = this._process(!0)
                    } else e = this._process(!0),
                    t.unpad(e);
                    return e
                },
                blockSize: 4
            });
            var v = r.CipherParams = i.extend({
                init: function(t) {
                    this.mixIn(t)
                },
                toString: function(t) {
                    return (t || this.formatter).stringify(this)
                }
            }),
            g = (n.format = {}).OpenSSL = {
                stringify: function(t) {
                    var e = t.ciphertext,
                    n = t.salt;
                    if (n) var r = o.create([1398893684, 1701076831]).concat(n).concat(e);
                    else r = e;
                    return r.toString(c)
                },
                parse: function(t) {
                    var e = c.parse(t),
                    n = e.words;
                    if (1398893684 == n[0] && 1701076831 == n[1]) {
                        var r = o.create(n.slice(2, 4));
                        n.splice(0, 4),
                        e.sigBytes -= 16
                    }
                    return v.create({
                        ciphertext: e,
                        salt: r
                    })
                }
            },
            _ = r.SerializableCipher = i.extend({
                cfg: i.extend({
                    format: g
                }),
                encrypt: function(t, e, n, r) {
                    r = this.cfg.extend(r);
                    var i = t.createEncryptor(n, r),
                    o = i.finalize(e),
                    a = i.cfg;
                    return v.create({
                        ciphertext: o,
                        key: n,
                        iv: a.iv,
                        algorithm: t,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: t.blockSize,
                        formatter: r.format
                    })
                },
                decrypt: function(t, e, n, r) {
                    return r = this.cfg.extend(r),
                    e = this._parse(e, r.format),
                    t.createDecryptor(n, r).finalize(e.ciphertext)
                },
                _parse: function(t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t
                }
            }),
            y = (n.kdf = {}).OpenSSL = {
                execute: function(t, e, n, r) {
                    r || (r = o.random(8));
                    var i = u.create({
                        keySize: e + n
                    }).compute(t, r),
                    a = o.create(i.words.slice(e), 4 * n);
                    return i.sigBytes = 4 * e,
                    v.create({
                        key: i,
                        iv: a,
                        salt: r
                    })
                }
            },
            m = r.PasswordBasedCipher = _.extend({
                cfg: _.cfg.extend({
                    kdf: y
                }),
                encrypt: function(t, e, n, r) {
                    var i = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize);
                    r.iv = i.iv;
                    var o = _.encrypt.call(this, t, e, i.key, r);
                    return o.mixIn(i),
                    o
                },
                decrypt: function(t, e, n, r) {
                    r = this.cfg.extend(r),
                    e = this._parse(e, r.format);
                    var i = r.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                    return r.iv = i.iv,
                    _.decrypt.call(this, t, e, i.key, r)
                }
            })
        } ()))),
        Np.exports;
        var t
    }
    var Up, Fp, qp, Vp = {
        exports: {}
    },
    Wp = {
        exports: {}
    },
    Kp = {
        exports: {}
    };
    var Jp, Gp, Xp, Zp, Qp, Yp, th, eh, nh, rh, ih, oh, ah, sh, ch, uh, fh, lh, ph, hh = {
        exports: {}
    },
    dh = {
        exports: {}
    },
    vh = {
        exports: {}
    },
    gh = {
        exports: {}
    },
    _h = {
        exports: {}
    },
    yh = {
        exports: {}
    },
    mh = {
        exports: {}
    },
    bh = {
        exports: {}
    },
    wh = {
        exports: {}
    },
    kh = {
        exports: {}
    },
    Sh = {
        exports: {}
    },
    xh = {
        exports: {}
    },
    Ch = {
        exports: {}
    }; Yl.exports = function(t) {
        return t
    } (ep(), ip(),
    function() {
        return op || (op = 1, ap.exports = (t = ep(),
        function() {
            if ("function" == typeof ArrayBuffer) {
                var e = t.lib.WordArray,
                n = e.init,
                r = e.init = function(t) {
                    if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                        for (var e = t.byteLength,
                        r = [], i = 0; i < e; i++) r[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                        n.call(this, r, e)
                    } else n.apply(this, arguments)
                };
                r.prototype = e
            }
        } (), t.lib.WordArray)),
        ap.exports;
        var t
    } (),
    function() {
        return sp || (sp = 1, cp.exports = (t = ep(),
        function() {
            var e = t,
            n = e.lib.WordArray,
            r = e.enc;
            function i(t) {
                return t << 8 & 4278255360 | t >>> 8 & 16711935
            }
            r.Utf16 = r.Utf16BE = {
                stringify: function(t) {
                    for (var e = t.words,
                    n = t.sigBytes,
                    r = [], i = 0; i < n; i += 2) {
                        var o = e[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                        r.push(String.fromCharCode(o))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length,
                    r = [], i = 0; i < e; i++) r[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
                    return n.create(r, 2 * e)
                }
            },
            r.Utf16LE = {
                stringify: function(t) {
                    for (var e = t.words,
                    n = t.sigBytes,
                    r = [], o = 0; o < n; o += 2) {
                        var a = i(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                        r.push(String.fromCharCode(a))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length,
                    r = [], o = 0; o < e; o++) r[o >>> 1] |= i(t.charCodeAt(o) << 16 - o % 2 * 16);
                    return n.create(r, 2 * e)
                }
            }
        } (), t.enc.Utf16)),
        cp.exports;
        var t
    } (), lp(), dp(), _p(), bp(), wp || (wp = 1, ph = ep(), bp(), ch = (sh = ph).lib.WordArray, uh = sh.algo, fh = uh.SHA256, lh = uh.SHA224 = fh.extend({
        _doReset: function() {
            this._hash = new ch.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
        },
        _doFinalize: function() {
            var t = fh._doFinalize.call(this);
            return t.sigBytes -= 4,
            t
        }
    }), sh.SHA224 = fh._createHelper(lh), sh.HmacSHA224 = fh._createHmacHelper(lh), ph.SHA224), xp(),
    function() {
        return Cp ? Ap.exports: (Cp = 1, Ap.exports = (s = ep(), ip(), xp(), e = (t = s).x64, n = e.Word, r = e.WordArray, i = t.algo, o = i.SHA512, a = i.SHA384 = o.extend({
            _doReset: function() {
                this._hash = new r.init([new n.init(3418070365, 3238371032), new n.init(1654270250, 914150663), new n.init(2438529370, 812702999), new n.init(355462360, 4144912697), new n.init(1731405415, 4290775857), new n.init(2394180231, 1750603025), new n.init(3675008525, 1694076839), new n.init(1203062813, 3204075428)])
            },
            _doFinalize: function() {
                var t = o._doFinalize.call(this);
                return t.sigBytes -= 16,
                t
            }
        }), t.SHA384 = o._createHelper(a), t.HmacSHA384 = o._createHmacHelper(a), s.SHA384));
        var t, e, n, r, i, o, a, s
    } (),
    function() {
        return Op || (Op = 1, $p.exports = (t = ep(), ip(),
        function(e) {
            var n = t,
            r = n.lib,
            i = r.WordArray,
            o = r.Hasher,
            a = n.x64.Word,
            s = n.algo,
            c = [],
            u = [],
            f = []; !
            function() {
                for (var t = 1,
                e = 0,
                n = 0; n < 24; n++) {
                    c[t + 5 * e] = (n + 1) * (n + 2) / 2 % 64;
                    var r = (2 * t + 3 * e) % 5;
                    t = e % 5,
                    e = r
                }
                for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) u[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
                for (var i = 1,
                o = 0; o < 24; o++) {
                    for (var s = 0,
                    l = 0,
                    p = 0; p < 7; p++) {
                        if (1 & i) {
                            var h = (1 << p) - 1;
                            h < 32 ? l ^= 1 << h: s ^= 1 << h - 32
                        }
                        128 & i ? i = i << 1 ^ 113 : i <<= 1
                    }
                    f[o] = a.create(s, l)
                }
            } ();
            var l = []; !
            function() {
                for (var t = 0; t < 25; t++) l[t] = a.create()
            } ();
            var p = s.SHA3 = o.extend({
                cfg: o.cfg.extend({
                    outputLength: 512
                }),
                _doReset: function() {
                    for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new a.init;
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                },
                _doProcessBlock: function(t, e) {
                    for (var n = this._state,
                    r = this.blockSize / 2,
                    i = 0; i < r; i++) {
                        var o = t[e + 2 * i],
                        a = t[e + 2 * i + 1];
                        o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                        ($ = n[i]).high ^= a,
                        $.low ^= o
                    }
                    for (var s = 0; s < 24; s++) {
                        for (var p = 0; p < 5; p++) {
                            for (var h = 0,
                            d = 0,
                            v = 0; v < 5; v++) h ^= ($ = n[p + 5 * v]).high,
                            d ^= $.low;
                            var g = l[p];
                            g.high = h,
                            g.low = d
                        }
                        for (p = 0; p < 5; p++) {
                            var _ = l[(p + 4) % 5],
                            y = l[(p + 1) % 5],
                            m = y.high,
                            b = y.low;
                            for (h = _.high ^ (m << 1 | b >>> 31), d = _.low ^ (b << 1 | m >>> 31), v = 0; v < 5; v++)($ = n[p + 5 * v]).high ^= h,
                            $.low ^= d
                        }
                        for (var w = 1; w < 25; w++) {
                            var k = ($ = n[w]).high,
                            S = $.low,
                            x = c[w];
                            x < 32 ? (h = k << x | S >>> 32 - x, d = S << x | k >>> 32 - x) : (h = S << x - 32 | k >>> 64 - x, d = k << x - 32 | S >>> 64 - x);
                            var C = l[u[w]];
                            C.high = h,
                            C.low = d
                        }
                        var O = l[0],
                        A = n[0];
                        for (O.high = A.high, O.low = A.low, p = 0; p < 5; p++) for (v = 0; v < 5; v++) {
                            var $ = n[w = p + 5 * v],
                            I = l[w],
                            P = l[(p + 1) % 5 + 5 * v],
                            j = l[(p + 2) % 5 + 5 * v];
                            $.high = I.high ^ ~P.high & j.high,
                            $.low = I.low ^ ~P.low & j.low
                        }
                        $ = n[0];
                        var E = f[s];
                        $.high ^= E.high,
                        $.low ^= E.low
                    }
                },
                _doFinalize: function() {
                    var t = this._data,
                    n = t.words;
                    this._nDataBytes;
                    var r = 8 * t.sigBytes,
                    o = 32 * this.blockSize;
                    n[r >>> 5] |= 1 << 24 - r % 32,
                    n[(e.ceil((r + 1) / o) * o >>> 5) - 1] |= 128,
                    t.sigBytes = 4 * n.length,
                    this._process();
                    for (var a = this._state,
                    s = this.cfg.outputLength / 8,
                    c = s / 8,
                    u = [], f = 0; f < c; f++) {
                        var l = a[f],
                        p = l.high,
                        h = l.low;
                        p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8),
                        h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8),
                        u.push(h),
                        u.push(p)
                    }
                    return new i.init(u, s)
                },
                clone: function() {
                    for (var t = o.clone.call(this), e = t._state = this._state.slice(0), n = 0; n < 25; n++) e[n] = e[n].clone();
                    return t
                }
            });
            n.SHA3 = o._createHelper(p),
            n.HmacSHA3 = o._createHmacHelper(p)
        } (Math), t.SHA3)),
        $p.exports;
        var t
    } (),
    function() {
        return Ip || (Ip = 1, jp.exports = (t = ep(),
        /** @preserve
        			(c) 2012 by Cédric Mesnil. All rights reserved.
        
        			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        			*/
        function(e) {
            var n = t,
            r = n.lib,
            i = r.WordArray,
            o = r.Hasher,
            a = n.algo,
            s = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
            c = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
            u = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
            f = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
            l = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
            p = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
            h = a.RIPEMD160 = o.extend({
                _doReset: function() {
                    this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(t, e) {
                    for (var n = 0; n < 16; n++) {
                        var r = e + n,
                        i = t[r];
                        t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                    }
                    var o, a, h, b, w, k, S, x, C, O, A, $ = this._hash.words,
                    I = l.words,
                    P = p.words,
                    j = s.words,
                    E = c.words,
                    B = u.words,
                    D = f.words;
                    for (k = o = $[0], S = a = $[1], x = h = $[2], C = b = $[3], O = w = $[4], n = 0; n < 80; n += 1) A = o + t[e + j[n]] | 0,
                    A += n < 16 ? d(a, h, b) + I[0] : n < 32 ? v(a, h, b) + I[1] : n < 48 ? g(a, h, b) + I[2] : n < 64 ? _(a, h, b) + I[3] : y(a, h, b) + I[4],
                    A = (A = m(A |= 0, B[n])) + w | 0,
                    o = w,
                    w = b,
                    b = m(h, 10),
                    h = a,
                    a = A,
                    A = k + t[e + E[n]] | 0,
                    A += n < 16 ? y(S, x, C) + P[0] : n < 32 ? _(S, x, C) + P[1] : n < 48 ? g(S, x, C) + P[2] : n < 64 ? v(S, x, C) + P[3] : d(S, x, C) + P[4],
                    A = (A = m(A |= 0, D[n])) + O | 0,
                    k = O,
                    O = C,
                    C = m(x, 10),
                    x = S,
                    S = A;
                    A = $[1] + h + C | 0,
                    $[1] = $[2] + b + O | 0,
                    $[2] = $[3] + w + k | 0,
                    $[3] = $[4] + o + S | 0,
                    $[4] = $[0] + a + x | 0,
                    $[0] = A
                },
                _doFinalize: function() {
                    var t = this._data,
                    e = t.words,
                    n = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                    e[r >>> 5] |= 128 << 24 - r % 32,
                    e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                    t.sigBytes = 4 * (e.length + 1),
                    this._process();
                    for (var i = this._hash,
                    o = i.words,
                    a = 0; a < 5; a++) {
                        var s = o[a];
                        o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    return i
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(),
                    t
                }
            });
            function d(t, e, n) {
                return t ^ e ^ n
            }
            function v(t, e, n) {
                return t & e | ~t & n
            }
            function g(t, e, n) {
                return (t | ~e) ^ n
            }
            function _(t, e, n) {
                return t & n | e & ~n
            }
            function y(t, e, n) {
                return t ^ (e | ~n)
            }
            function m(t, e) {
                return t << e | t >>> 32 - e
            }
            n.RIPEMD160 = o._createHelper(h),
            n.HmacRIPEMD160 = o._createHmacHelper(h)
        } (), t.RIPEMD160)),
        jp.exports;
        var t
    } (), Bp(),
    function() {
        return Dp || (Dp = 1, Lp.exports = (c = ep(), _p(), Bp(), n = (e = (t = c).lib).Base, r = e.WordArray, o = (i = t.algo).SHA1, a = i.HMAC, s = i.PBKDF2 = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: o,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var n = this.cfg,
                i = a.create(n.hasher, t), o = r.create(), s = r.create([1]), c = o.words, u = s.words, f = n.keySize, l = n.iterations; c.length < f;) {
                    var p = i.update(e).finalize(s);
                    i.reset();
                    for (var h = p.words,
                    d = h.length,
                    v = p,
                    g = 1; g < l; g++) {
                        v = i.finalize(v),
                        i.reset();
                        for (var _ = v.words,
                        y = 0; y < d; y++) h[y] ^= _[y]
                    }
                    o.concat(p),
                    u[0]++
                }
                return o.sigBytes = 4 * f,
                o
            }
        }), t.PBKDF2 = function(t, e, n) {
            return s.create(n).compute(t, e)
        },
        c.PBKDF2)),
        Lp.exports;
        var t, e, n, r, i, o, a, s, c
    } (), Mp(), zp(),
    function() {
        return Up || (Up = 1, Vp.exports = (t = ep(), zp(), t.mode.CFB = function() {
            var e = t.lib.BlockCipherMode.extend();
            function n(t, e, n, r) {
                var i = this._iv;
                if (i) {
                    var o = i.slice(0);
                    this._iv = void 0
                } else o = this._prevBlock;
                r.encryptBlock(o, 0);
                for (var a = 0; a < n; a++) t[e + a] ^= o[a]
            }
            return e.Encryptor = e.extend({
                processBlock: function(t, e) {
                    var r = this._cipher,
                    i = r.blockSize;
                    n.call(this, t, e, i, r),
                    this._prevBlock = t.slice(e, e + i)
                }
            }),
            e.Decryptor = e.extend({
                processBlock: function(t, e) {
                    var r = this._cipher,
                    i = r.blockSize,
                    o = t.slice(e, e + i);
                    n.call(this, t, e, i, r),
                    this._prevBlock = o
                }
            }),
            e
        } (), t.mode.CFB)),
        Vp.exports;
        var t
    } (),
    function() {
        return Fp || (Fp = 1, Wp.exports = (n = ep(), zp(), n.mode.CTR = (e = (t = n.lib.BlockCipherMode.extend()).Encryptor = t.extend({
            processBlock: function(t, e) {
                var n = this._cipher,
                r = n.blockSize,
                i = this._iv,
                o = this._counter;
                i && (o = this._counter = i.slice(0), this._iv = void 0);
                var a = o.slice(0);
                n.encryptBlock(a, 0),
                o[r - 1] = o[r - 1] + 1 | 0;
                for (var s = 0; s < r; s++) t[e + s] ^= a[s]
            }
        }), t.Decryptor = e, t), n.mode.CTR)),
        Wp.exports;
        var t, e, n
    } (),
    function() {
        return qp || (qp = 1, Kp.exports = (t = ep(), zp(),
        /** @preserve
         * Counter block mode compatible with  Dr Brian Gladman fileenc.c
         * derived from CryptoJS.mode.CTR
         * Jan Hruby jhruby.web@gmail.com
         */
        t.mode.CTRGladman = function() {
            var e = t.lib.BlockCipherMode.extend();
            function n(t) {
                if (255 & ~ (t >> 24)) t += 1 << 24;
                else {
                    var e = t >> 16 & 255,
                    n = t >> 8 & 255,
                    r = 255 & t;
                    255 === e ? (e = 0, 255 === n ? (n = 0, 255 === r ? r = 0 : ++r) : ++n) : ++e,
                    t = 0,
                    t += e << 16,
                    t += n << 8,
                    t += r
                }
                return t
            }
            function r(t) {
                return 0 === (t[0] = n(t[0])) && (t[1] = n(t[1])),
                t
            }
            var i = e.Encryptor = e.extend({
                processBlock: function(t, e) {
                    var n = this._cipher,
                    i = n.blockSize,
                    o = this._iv,
                    a = this._counter;
                    o && (a = this._counter = o.slice(0), this._iv = void 0),
                    r(a);
                    var s = a.slice(0);
                    n.encryptBlock(s, 0);
                    for (var c = 0; c < i; c++) t[e + c] ^= s[c]
                }
            });
            return e.Decryptor = i,
            e
        } (), t.mode.CTRGladman)),
        Kp.exports;
        var t
    } (),
    function() {
        return Jp || (Jp = 1, hh.exports = (n = ep(), zp(), n.mode.OFB = (e = (t = n.lib.BlockCipherMode.extend()).Encryptor = t.extend({
            processBlock: function(t, e) {
                var n = this._cipher,
                r = n.blockSize,
                i = this._iv,
                o = this._keystream;
                i && (o = this._keystream = i.slice(0), this._iv = void 0),
                n.encryptBlock(o, 0);
                for (var a = 0; a < r; a++) t[e + a] ^= o[a]
            }
        }), t.Decryptor = e, t), n.mode.OFB)),
        hh.exports;
        var t, e, n
    } (),
    function() {
        return Gp ? dh.exports: (Gp = 1, dh.exports = (e = ep(), zp(), e.mode.ECB = ((t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({
            processBlock: function(t, e) {
                this._cipher.encryptBlock(t, e)
            }
        }), t.Decryptor = t.extend({
            processBlock: function(t, e) {
                this._cipher.decryptBlock(t, e)
            }
        }), t), e.mode.ECB));
        var t, e
    } (),
    function() {
        return Xp ? vh.exports: (Xp = 1, vh.exports = (t = ep(), zp(), t.pad.AnsiX923 = {
            pad: function(t, e) {
                var n = t.sigBytes,
                r = 4 * e,
                i = r - n % r,
                o = n + i - 1;
                t.clamp(),
                t.words[o >>> 2] |= i << 24 - o % 4 * 8,
                t.sigBytes += i
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        },
        t.pad.Ansix923));
        var t
    } (),
    function() {
        return Zp ? gh.exports: (Zp = 1, gh.exports = (t = ep(), zp(), t.pad.Iso10126 = {
            pad: function(e, n) {
                var r = 4 * n,
                i = r - e.sigBytes % r;
                e.concat(t.lib.WordArray.random(i - 1)).concat(t.lib.WordArray.create([i << 24], 1))
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        },
        t.pad.Iso10126));
        var t
    } (),
    function() {
        return Qp ? _h.exports: (Qp = 1, _h.exports = (t = ep(), zp(), t.pad.Iso97971 = {
            pad: function(e, n) {
                e.concat(t.lib.WordArray.create([2147483648], 1)),
                t.pad.ZeroPadding.pad(e, n)
            },
            unpad: function(e) {
                t.pad.ZeroPadding.unpad(e),
                e.sigBytes--
            }
        },
        t.pad.Iso97971));
        var t
    } (),
    function() {
        return Yp || (Yp = 1, yh.exports = (t = ep(), zp(), t.pad.ZeroPadding = {
            pad: function(t, e) {
                var n = 4 * e;
                t.clamp(),
                t.sigBytes += n - (t.sigBytes % n || n)
            },
            unpad: function(t) {
                for (var e = t.words,
                n = t.sigBytes - 1; ! (e[n >>> 2] >>> 24 - n % 4 * 8 & 255);) n--;
                t.sigBytes = n + 1
            }
        },
        t.pad.ZeroPadding)),
        yh.exports;
        var t
    } (),
    function() {
        return th ? mh.exports: (th = 1, mh.exports = (t = ep(), zp(), t.pad.NoPadding = {
            pad: function() {},
            unpad: function() {}
        },
        t.pad.NoPadding));
        var t
    } (),
    function() {
        return eh ? bh.exports: (eh = 1, bh.exports = (r = ep(), zp(), e = (t = r).lib.CipherParams, n = t.enc.Hex, t.format.Hex = {
            stringify: function(t) {
                return t.ciphertext.toString(n)
            },
            parse: function(t) {
                var r = n.parse(t);
                return e.create({
                    ciphertext: r
                })
            }
        },
        r.format.Hex));
        var t, e, n, r
    } (),
    function() {
        return nh || (nh = 1, wh.exports = (t = ep(), lp(), dp(), Mp(), zp(),
        function() {
            var e = t,
            n = e.lib.BlockCipher,
            r = e.algo,
            i = [],
            o = [],
            a = [],
            s = [],
            c = [],
            u = [],
            f = [],
            l = [],
            p = [],
            h = []; !
            function() {
                for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var n = 0,
                r = 0;
                for (e = 0; e < 256; e++) {
                    var d = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                    d = d >>> 8 ^ 255 & d ^ 99,
                    i[n] = d,
                    o[d] = n;
                    var v = t[n],
                    g = t[v],
                    _ = t[g],
                    y = 257 * t[d] ^ 16843008 * d;
                    a[n] = y << 24 | y >>> 8,
                    s[n] = y << 16 | y >>> 16,
                    c[n] = y << 8 | y >>> 24,
                    u[n] = y,
                    y = 16843009 * _ ^ 65537 * g ^ 257 * v ^ 16843008 * n,
                    f[d] = y << 24 | y >>> 8,
                    l[d] = y << 16 | y >>> 16,
                    p[d] = y << 8 | y >>> 24,
                    h[d] = y,
                    n ? (n = v ^ t[t[t[_ ^ v]]], r ^= t[t[r]]) : n = r = 1
                }
            } ();
            var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            v = r.AES = n.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var t = this._keyPriorReset = this._key,
                        e = t.words,
                        n = t.sigBytes / 4,
                        r = 4 * ((this._nRounds = n + 6) + 1), o = this._keySchedule = [], a = 0; a < r; a++) if (a < n) o[a] = e[a];
                        else {
                            var s = o[a - 1];
                            a % n ? n > 6 && a % n == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s], s ^= d[a / n | 0] << 24),
                            o[a] = o[a - n] ^ s
                        }
                        for (var c = this._invKeySchedule = [], u = 0; u < r; u++) a = r - u,
                        s = u % 4 ? o[a] : o[a - 4],
                        c[u] = u < 4 || a <= 4 ? s: f[i[s >>> 24]] ^ l[i[s >>> 16 & 255]] ^ p[i[s >>> 8 & 255]] ^ h[i[255 & s]]
                    }
                },
                encryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, i)
                },
                decryptBlock: function(t, e) {
                    var n = t[e + 1];
                    t[e + 1] = t[e + 3],
                    t[e + 3] = n,
                    this._doCryptBlock(t, e, this._invKeySchedule, f, l, p, h, o),
                    n = t[e + 1],
                    t[e + 1] = t[e + 3],
                    t[e + 3] = n
                },
                _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                    for (var c = this._nRounds,
                    u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], h = 4, d = 1; d < c; d++) {
                        var v = r[u >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & p] ^ n[h++],
                        g = r[f >>> 24] ^ i[l >>> 16 & 255] ^ o[p >>> 8 & 255] ^ a[255 & u] ^ n[h++],
                        _ = r[l >>> 24] ^ i[p >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ n[h++],
                        y = r[p >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & l] ^ n[h++];
                        u = v,
                        f = g,
                        l = _,
                        p = y
                    }
                    v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ n[h++],
                    g = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++],
                    _ = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++],
                    y = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++],
                    t[e] = v,
                    t[e + 1] = g,
                    t[e + 2] = _,
                    t[e + 3] = y
                },
                keySize: 8
            });
            e.AES = n._createHelper(v)
        } (), t.AES)),
        wh.exports;
        var t
    } (),
    function() {
        return rh || (rh = 1, kh.exports = (t = ep(), lp(), dp(), Mp(), zp(),
        function() {
            var e = t,
            n = e.lib,
            r = n.WordArray,
            i = n.BlockCipher,
            o = e.algo,
            a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
            s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
            c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            u = [{
                0 : 8421888,
                268435456 : 32768,
                536870912 : 8421378,
                805306368 : 2,
                1073741824 : 512,
                1342177280 : 8421890,
                1610612736 : 8389122,
                1879048192 : 8388608,
                2147483648 : 514,
                2415919104 : 8389120,
                2684354560 : 33280,
                2952790016 : 8421376,
                3221225472 : 32770,
                3489660928 : 8388610,
                3758096384 : 0,
                4026531840 : 33282,
                134217728 : 0,
                402653184 : 8421890,
                671088640 : 33282,
                939524096 : 32768,
                1207959552 : 8421888,
                1476395008 : 512,
                1744830464 : 8421378,
                2013265920 : 2,
                2281701376 : 8389120,
                2550136832 : 33280,
                2818572288 : 8421376,
                3087007744 : 8389122,
                3355443200 : 8388610,
                3623878656 : 32770,
                3892314112 : 514,
                4160749568 : 8388608,
                1 : 32768,
                268435457 : 2,
                536870913 : 8421888,
                805306369 : 8388608,
                1073741825 : 8421378,
                1342177281 : 33280,
                1610612737 : 512,
                1879048193 : 8389122,
                2147483649 : 8421890,
                2415919105 : 8421376,
                2684354561 : 8388610,
                2952790017 : 33282,
                3221225473 : 514,
                3489660929 : 8389120,
                3758096385 : 32770,
                4026531841 : 0,
                134217729 : 8421890,
                402653185 : 8421376,
                671088641 : 8388608,
                939524097 : 512,
                1207959553 : 32768,
                1476395009 : 8388610,
                1744830465 : 2,
                2013265921 : 33282,
                2281701377 : 32770,
                2550136833 : 8389122,
                2818572289 : 514,
                3087007745 : 8421888,
                3355443201 : 8389120,
                3623878657 : 0,
                3892314113 : 33280,
                4160749569 : 8421378
            },
            {
                0 : 1074282512,
                16777216 : 16384,
                33554432 : 524288,
                50331648 : 1074266128,
                67108864 : 1073741840,
                83886080 : 1074282496,
                100663296 : 1073758208,
                117440512 : 16,
                134217728 : 540672,
                150994944 : 1073758224,
                167772160 : 1073741824,
                184549376 : 540688,
                201326592 : 524304,
                218103808 : 0,
                234881024 : 16400,
                251658240 : 1074266112,
                8388608 : 1073758208,
                25165824 : 540688,
                41943040 : 16,
                58720256 : 1073758224,
                75497472 : 1074282512,
                92274688 : 1073741824,
                109051904 : 524288,
                125829120 : 1074266128,
                142606336 : 524304,
                159383552 : 0,
                176160768 : 16384,
                192937984 : 1074266112,
                209715200 : 1073741840,
                226492416 : 540672,
                243269632 : 1074282496,
                260046848 : 16400,
                268435456 : 0,
                285212672 : 1074266128,
                301989888 : 1073758224,
                318767104 : 1074282496,
                335544320 : 1074266112,
                352321536 : 16,
                369098752 : 540688,
                385875968 : 16384,
                402653184 : 16400,
                419430400 : 524288,
                436207616 : 524304,
                452984832 : 1073741840,
                469762048 : 540672,
                486539264 : 1073758208,
                503316480 : 1073741824,
                520093696 : 1074282512,
                276824064 : 540688,
                293601280 : 524288,
                310378496 : 1074266112,
                327155712 : 16384,
                343932928 : 1073758208,
                360710144 : 1074282512,
                377487360 : 16,
                394264576 : 1073741824,
                411041792 : 1074282496,
                427819008 : 1073741840,
                444596224 : 1073758224,
                461373440 : 524304,
                478150656 : 0,
                494927872 : 16400,
                511705088 : 1074266128,
                528482304 : 540672
            },
            {
                0 : 260,
                1048576 : 0,
                2097152 : 67109120,
                3145728 : 65796,
                4194304 : 65540,
                5242880 : 67108868,
                6291456 : 67174660,
                7340032 : 67174400,
                8388608 : 67108864,
                9437184 : 67174656,
                10485760 : 65792,
                11534336 : 67174404,
                12582912 : 67109124,
                13631488 : 65536,
                14680064 : 4,
                15728640 : 256,
                524288 : 67174656,
                1572864 : 67174404,
                2621440 : 0,
                3670016 : 67109120,
                4718592 : 67108868,
                5767168 : 65536,
                6815744 : 65540,
                7864320 : 260,
                8912896 : 4,
                9961472 : 256,
                11010048 : 67174400,
                12058624 : 65796,
                13107200 : 65792,
                14155776 : 67109124,
                15204352 : 67174660,
                16252928 : 67108864,
                16777216 : 67174656,
                17825792 : 65540,
                18874368 : 65536,
                19922944 : 67109120,
                20971520 : 256,
                22020096 : 67174660,
                23068672 : 67108868,
                24117248 : 0,
                25165824 : 67109124,
                26214400 : 67108864,
                27262976 : 4,
                28311552 : 65792,
                29360128 : 67174400,
                30408704 : 260,
                31457280 : 65796,
                32505856 : 67174404,
                17301504 : 67108864,
                18350080 : 260,
                19398656 : 67174656,
                20447232 : 0,
                21495808 : 65540,
                22544384 : 67109120,
                23592960 : 256,
                24641536 : 67174404,
                25690112 : 65536,
                26738688 : 67174660,
                27787264 : 65796,
                28835840 : 67108868,
                29884416 : 67109124,
                30932992 : 67174400,
                31981568 : 4,
                33030144 : 65792
            },
            {
                0 : 2151682048,
                65536 : 2147487808,
                131072 : 4198464,
                196608 : 2151677952,
                262144 : 0,
                327680 : 4198400,
                393216 : 2147483712,
                458752 : 4194368,
                524288 : 2147483648,
                589824 : 4194304,
                655360 : 64,
                720896 : 2147487744,
                786432 : 2151678016,
                851968 : 4160,
                917504 : 4096,
                983040 : 2151682112,
                32768 : 2147487808,
                98304 : 64,
                163840 : 2151678016,
                229376 : 2147487744,
                294912 : 4198400,
                360448 : 2151682112,
                425984 : 0,
                491520 : 2151677952,
                557056 : 4096,
                622592 : 2151682048,
                688128 : 4194304,
                753664 : 4160,
                819200 : 2147483648,
                884736 : 4194368,
                950272 : 4198464,
                1015808 : 2147483712,
                1048576 : 4194368,
                1114112 : 4198400,
                1179648 : 2147483712,
                1245184 : 0,
                1310720 : 4160,
                1376256 : 2151678016,
                1441792 : 2151682048,
                1507328 : 2147487808,
                1572864 : 2151682112,
                1638400 : 2147483648,
                1703936 : 2151677952,
                1769472 : 4198464,
                1835008 : 2147487744,
                1900544 : 4194304,
                1966080 : 64,
                2031616 : 4096,
                1081344 : 2151677952,
                1146880 : 2151682112,
                1212416 : 0,
                1277952 : 4198400,
                1343488 : 4194368,
                1409024 : 2147483648,
                1474560 : 2147487808,
                1540096 : 64,
                1605632 : 2147483712,
                1671168 : 4096,
                1736704 : 2147487744,
                1802240 : 2151678016,
                1867776 : 4160,
                1933312 : 2151682048,
                1998848 : 4194304,
                2064384 : 4198464
            },
            {
                0 : 128,
                4096 : 17039360,
                8192 : 262144,
                12288 : 536870912,
                16384 : 537133184,
                20480 : 16777344,
                24576 : 553648256,
                28672 : 262272,
                32768 : 16777216,
                36864 : 537133056,
                40960 : 536871040,
                45056 : 553910400,
                49152 : 553910272,
                53248 : 0,
                57344 : 17039488,
                61440 : 553648128,
                2048 : 17039488,
                6144 : 553648256,
                10240 : 128,
                14336 : 17039360,
                18432 : 262144,
                22528 : 537133184,
                26624 : 553910272,
                30720 : 536870912,
                34816 : 537133056,
                38912 : 0,
                43008 : 553910400,
                47104 : 16777344,
                51200 : 536871040,
                55296 : 553648128,
                59392 : 16777216,
                63488 : 262272,
                65536 : 262144,
                69632 : 128,
                73728 : 536870912,
                77824 : 553648256,
                81920 : 16777344,
                86016 : 553910272,
                90112 : 537133184,
                94208 : 16777216,
                98304 : 553910400,
                102400 : 553648128,
                106496 : 17039360,
                110592 : 537133056,
                114688 : 262272,
                118784 : 536871040,
                122880 : 0,
                126976 : 17039488,
                67584 : 553648256,
                71680 : 16777216,
                75776 : 17039360,
                79872 : 537133184,
                83968 : 536870912,
                88064 : 17039488,
                92160 : 128,
                96256 : 553910272,
                100352 : 262272,
                104448 : 553910400,
                108544 : 0,
                112640 : 553648128,
                116736 : 16777344,
                120832 : 262144,
                124928 : 537133056,
                129024 : 536871040
            },
            {
                0 : 268435464,
                256 : 8192,
                512 : 270532608,
                768 : 270540808,
                1024 : 268443648,
                1280 : 2097152,
                1536 : 2097160,
                1792 : 268435456,
                2048 : 0,
                2304 : 268443656,
                2560 : 2105344,
                2816 : 8,
                3072 : 270532616,
                3328 : 2105352,
                3584 : 8200,
                3840 : 270540800,
                128 : 270532608,
                384 : 270540808,
                640 : 8,
                896 : 2097152,
                1152 : 2105352,
                1408 : 268435464,
                1664 : 268443648,
                1920 : 8200,
                2176 : 2097160,
                2432 : 8192,
                2688 : 268443656,
                2944 : 270532616,
                3200 : 0,
                3456 : 270540800,
                3712 : 2105344,
                3968 : 268435456,
                4096 : 268443648,
                4352 : 270532616,
                4608 : 270540808,
                4864 : 8200,
                5120 : 2097152,
                5376 : 268435456,
                5632 : 268435464,
                5888 : 2105344,
                6144 : 2105352,
                6400 : 0,
                6656 : 8,
                6912 : 270532608,
                7168 : 8192,
                7424 : 268443656,
                7680 : 270540800,
                7936 : 2097160,
                4224 : 8,
                4480 : 2105344,
                4736 : 2097152,
                4992 : 268435464,
                5248 : 268443648,
                5504 : 8200,
                5760 : 270540808,
                6016 : 270532608,
                6272 : 270540800,
                6528 : 270532616,
                6784 : 8192,
                7040 : 2105352,
                7296 : 2097160,
                7552 : 0,
                7808 : 268435456,
                8064 : 268443656
            },
            {
                0 : 1048576,
                16 : 33555457,
                32 : 1024,
                48 : 1049601,
                64 : 34604033,
                80 : 0,
                96 : 1,
                112 : 34603009,
                128 : 33555456,
                144 : 1048577,
                160 : 33554433,
                176 : 34604032,
                192 : 34603008,
                208 : 1025,
                224 : 1049600,
                240 : 33554432,
                8 : 34603009,
                24 : 0,
                40 : 33555457,
                56 : 34604032,
                72 : 1048576,
                88 : 33554433,
                104 : 33554432,
                120 : 1025,
                136 : 1049601,
                152 : 33555456,
                168 : 34603008,
                184 : 1048577,
                200 : 1024,
                216 : 34604033,
                232 : 1,
                248 : 1049600,
                256 : 33554432,
                272 : 1048576,
                288 : 33555457,
                304 : 34603009,
                320 : 1048577,
                336 : 33555456,
                352 : 34604032,
                368 : 1049601,
                384 : 1025,
                400 : 34604033,
                416 : 1049600,
                432 : 1,
                448 : 0,
                464 : 34603008,
                480 : 33554433,
                496 : 1024,
                264 : 1049600,
                280 : 33555457,
                296 : 34603009,
                312 : 1,
                328 : 33554432,
                344 : 1048576,
                360 : 1025,
                376 : 34604032,
                392 : 33554433,
                408 : 34603008,
                424 : 0,
                440 : 34604033,
                456 : 1049601,
                472 : 1024,
                488 : 33555456,
                504 : 1048577
            },
            {
                0 : 134219808,
                1 : 131072,
                2 : 134217728,
                3 : 32,
                4 : 131104,
                5 : 134350880,
                6 : 134350848,
                7 : 2048,
                8 : 134348800,
                9 : 134219776,
                10 : 133120,
                11 : 134348832,
                12 : 2080,
                13 : 0,
                14 : 134217760,
                15 : 133152,
                2147483648 : 2048,
                2147483649 : 134350880,
                2147483650 : 134219808,
                2147483651 : 134217728,
                2147483652 : 134348800,
                2147483653 : 133120,
                2147483654 : 133152,
                2147483655 : 32,
                2147483656 : 134217760,
                2147483657 : 2080,
                2147483658 : 131104,
                2147483659 : 134350848,
                2147483660 : 0,
                2147483661 : 134348832,
                2147483662 : 134219776,
                2147483663 : 131072,
                16 : 133152,
                17 : 134350848,
                18 : 32,
                19 : 2048,
                20 : 134219776,
                21 : 134217760,
                22 : 134348832,
                23 : 131072,
                24 : 0,
                25 : 131104,
                26 : 134348800,
                27 : 134219808,
                28 : 134350880,
                29 : 133120,
                30 : 2080,
                31 : 134217728,
                2147483664 : 131072,
                2147483665 : 2048,
                2147483666 : 134348832,
                2147483667 : 133152,
                2147483668 : 32,
                2147483669 : 134348800,
                2147483670 : 134217728,
                2147483671 : 134219808,
                2147483672 : 134350880,
                2147483673 : 134217760,
                2147483674 : 134219776,
                2147483675 : 0,
                2147483676 : 133120,
                2147483677 : 2080,
                2147483678 : 131104,
                2147483679 : 134350848
            }],
            f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
            l = o.DES = i.extend({
                _doReset: function() {
                    for (var t = this._key.words,
                    e = [], n = 0; n < 56; n++) {
                        var r = a[n] - 1;
                        e[n] = t[r >>> 5] >>> 31 - r % 32 & 1
                    }
                    for (var i = this._subKeys = [], o = 0; o < 16; o++) {
                        var u = i[o] = [],
                        f = c[o];
                        for (n = 0; n < 24; n++) u[n / 6 | 0] |= e[(s[n] - 1 + f) % 28] << 31 - n % 6,
                        u[4 + (n / 6 | 0)] |= e[28 + (s[n + 24] - 1 + f) % 28] << 31 - n % 6;
                        for (u[0] = u[0] << 1 | u[0] >>> 31, n = 1; n < 7; n++) u[n] = u[n] >>> 4 * (n - 1) + 3;
                        u[7] = u[7] << 5 | u[7] >>> 27
                    }
                    var l = this._invSubKeys = [];
                    for (n = 0; n < 16; n++) l[n] = i[15 - n]
                },
                encryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._subKeys)
                },
                decryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._invSubKeys)
                },
                _doCryptBlock: function(t, e, n) {
                    this._lBlock = t[e],
                    this._rBlock = t[e + 1],
                    p.call(this, 4, 252645135),
                    p.call(this, 16, 65535),
                    h.call(this, 2, 858993459),
                    h.call(this, 8, 16711935),
                    p.call(this, 1, 1431655765);
                    for (var r = 0; r < 16; r++) {
                        for (var i = n[r], o = this._lBlock, a = this._rBlock, s = 0, c = 0; c < 8; c++) s |= u[c][((a ^ i[c]) & f[c]) >>> 0];
                        this._lBlock = a,
                        this._rBlock = o ^ s
                    }
                    var l = this._lBlock;
                    this._lBlock = this._rBlock,
                    this._rBlock = l,
                    p.call(this, 1, 1431655765),
                    h.call(this, 8, 16711935),
                    h.call(this, 2, 858993459),
                    p.call(this, 16, 65535),
                    p.call(this, 4, 252645135),
                    t[e] = this._lBlock,
                    t[e + 1] = this._rBlock
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
            });
            function p(t, e) {
                var n = (this._lBlock >>> t ^ this._rBlock) & e;
                this._rBlock ^= n,
                this._lBlock ^= n << t
            }
            function h(t, e) {
                var n = (this._rBlock >>> t ^ this._lBlock) & e;
                this._lBlock ^= n,
                this._rBlock ^= n << t
            }
            e.DES = i._createHelper(l);
            var d = o.TripleDES = i.extend({
                _doReset: function() {
                    var t = this._key.words;
                    this._des1 = l.createEncryptor(r.create(t.slice(0, 2))),
                    this._des2 = l.createEncryptor(r.create(t.slice(2, 4))),
                    this._des3 = l.createEncryptor(r.create(t.slice(4, 6)))
                },
                encryptBlock: function(t, e) {
                    this._des1.encryptBlock(t, e),
                    this._des2.decryptBlock(t, e),
                    this._des3.encryptBlock(t, e)
                },
                decryptBlock: function(t, e) {
                    this._des3.decryptBlock(t, e),
                    this._des2.encryptBlock(t, e),
                    this._des1.decryptBlock(t, e)
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2
            });
            e.TripleDES = i._createHelper(d)
        } (), t.TripleDES)),
        kh.exports;
        var t
    } (),
    function() {
        return ih || (ih = 1, Sh.exports = (t = ep(), lp(), dp(), Mp(), zp(),
        function() {
            var e = t,
            n = e.lib.StreamCipher,
            r = e.algo,
            i = r.RC4 = n.extend({
                _doReset: function() {
                    for (var t = this._key,
                    e = t.words,
                    n = t.sigBytes,
                    r = this._S = [], i = 0; i < 256; i++) r[i] = i;
                    i = 0;
                    for (var o = 0; i < 256; i++) {
                        var a = i % n,
                        s = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        o = (o + r[i] + s) % 256;
                        var c = r[i];
                        r[i] = r[o],
                        r[o] = c
                    }
                    this._i = this._j = 0
                },
                _doProcessBlock: function(t, e) {
                    t[e] ^= o.call(this)
                },
                keySize: 8,
                ivSize: 0
            });
            function o() {
                for (var t = this._S,
                e = this._i,
                n = this._j,
                r = 0,
                i = 0; i < 4; i++) {
                    n = (n + t[e = (e + 1) % 256]) % 256;
                    var o = t[e];
                    t[e] = t[n],
                    t[n] = o,
                    r |= t[(t[e] + t[n]) % 256] << 24 - 8 * i
                }
                return this._i = e,
                this._j = n,
                r
            }
            e.RC4 = n._createHelper(i);
            var a = r.RC4Drop = i.extend({
                cfg: i.cfg.extend({
                    drop: 192
                }),
                _doReset: function() {
                    i._doReset.call(this);
                    for (var t = this.cfg.drop; t > 0; t--) o.call(this)
                }
            });
            e.RC4Drop = n._createHelper(a)
        } (), t.RC4)),
        Sh.exports;
        var t
    } (),
    function() {
        return oh || (oh = 1, xh.exports = (t = ep(), lp(), dp(), Mp(), zp(),
        function() {
            var e = t,
            n = e.lib.StreamCipher,
            r = e.algo,
            i = [],
            o = [],
            a = [],
            s = r.Rabbit = n.extend({
                _doReset: function() {
                    for (var t = this._key.words,
                    e = this.cfg.iv,
                    n = 0; n < 4; n++) t[n] = 16711935 & (t[n] << 8 | t[n] >>> 24) | 4278255360 & (t[n] << 24 | t[n] >>> 8);
                    var r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                    i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                    for (this._b = 0, n = 0; n < 4; n++) c.call(this);
                    for (n = 0; n < 8; n++) i[n] ^= r[n + 4 & 7];
                    if (e) {
                        var o = e.words,
                        a = o[0],
                        s = o[1],
                        u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                        f = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                        l = u >>> 16 | 4294901760 & f,
                        p = f << 16 | 65535 & u;
                        for (i[0] ^= u, i[1] ^= l, i[2] ^= f, i[3] ^= p, i[4] ^= u, i[5] ^= l, i[6] ^= f, i[7] ^= p, n = 0; n < 4; n++) c.call(this)
                    }
                },
                _doProcessBlock: function(t, e) {
                    var n = this._X;
                    c.call(this),
                    i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16,
                    i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16,
                    i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16,
                    i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
                    for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8),
                    t[e + r] ^= i[r]
                },
                blockSize: 4,
                ivSize: 2
            });
            function c() {
                for (var t = this._X,
                e = this._C,
                n = 0; n < 8; n++) o[n] = e[n];
                for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0, n = 0; n < 8; n++) {
                    var r = t[n] + e[n],
                    i = 65535 & r,
                    s = r >>> 16,
                    c = ((i * i >>> 17) + i * s >>> 15) + s * s,
                    u = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
                    a[n] = c ^ u
                }
                t[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0,
                t[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0,
                t[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0,
                t[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0,
                t[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0,
                t[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0,
                t[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0,
                t[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0
            }
            e.Rabbit = n._createHelper(s)
        } (), t.Rabbit)),
        xh.exports;
        var t
    } (),
    function() {
        return ah || (ah = 1, Ch.exports = (t = ep(), lp(), dp(), Mp(), zp(),
        function() {
            var e = t,
            n = e.lib.StreamCipher,
            r = e.algo,
            i = [],
            o = [],
            a = [],
            s = r.RabbitLegacy = n.extend({
                _doReset: function() {
                    var t = this._key.words,
                    e = this.cfg.iv,
                    n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                    r = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                    this._b = 0;
                    for (var i = 0; i < 4; i++) c.call(this);
                    for (i = 0; i < 8; i++) r[i] ^= n[i + 4 & 7];
                    if (e) {
                        var o = e.words,
                        a = o[0],
                        s = o[1],
                        u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                        f = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                        l = u >>> 16 | 4294901760 & f,
                        p = f << 16 | 65535 & u;
                        for (r[0] ^= u, r[1] ^= l, r[2] ^= f, r[3] ^= p, r[4] ^= u, r[5] ^= l, r[6] ^= f, r[7] ^= p, i = 0; i < 4; i++) c.call(this)
                    }
                },
                _doProcessBlock: function(t, e) {
                    var n = this._X;
                    c.call(this),
                    i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16,
                    i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16,
                    i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16,
                    i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
                    for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8),
                    t[e + r] ^= i[r]
                },
                blockSize: 4,
                ivSize: 2
            });
            function c() {
                for (var t = this._X,
                e = this._C,
                n = 0; n < 8; n++) o[n] = e[n];
                for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0, n = 0; n < 8; n++) {
                    var r = t[n] + e[n],
                    i = 65535 & r,
                    s = r >>> 16,
                    c = ((i * i >>> 17) + i * s >>> 15) + s * s,
                    u = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
                    a[n] = c ^ u
                }
                t[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0,
                t[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0,
                t[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0,
                t[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0,
                t[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0,
                t[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0,
                t[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0,
                t[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0
            }
            e.RabbitLegacy = n._createHelper(s)
        } (), t.RabbitLegacy)),
        Ch.exports;
        var t
    } ());
    var Oh = function(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.
    default:
        t
    } (Yl.exports), Ah = function() {
        return Q((function t(e, n) {
            X(this, t),
            this.options = e,
            this.animation = ur.createAnimation(F({},
            e)),
            this.currentStepAnimates = {},
            this.next = 0,
            this.$ = n
        }), [{
            key: "_nvuePushAnimates",
            value: function(t, e) {
                var n = {};
                if (n = this.currentStepAnimates[this.next] || {
                    styles: {},
                    config: {}
                },
                $h.includes(t)) {
                    n.styles.transform || (n.styles.transform = "");
                    var r = "";
                    "rotate" === t && (r = "deg"),
                    n.styles.transform += "".concat(t, "(").concat(e + r, ") ")
                } else n.styles[t] = "".concat(e);
                this.currentStepAnimates[this.next] = n
            }
        },
        {
            key: "_animateRun",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this.$.$refs.ani.ref;
                if (n) return new i((function(r, i) {
                    nvueAnimation.transition(n, F({
                        styles: t
                    },
                    e), (function(t) {
                        r()
                    }))
                }))
            }
        },
        {
            key: "_nvueNextAnimate",
            value: function(t) {
                var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 ? arguments[2] : void 0,
                i = t[n];
                if (i) {
                    var o = i.styles,
                    a = i.config;
                    this._animateRun(o, a).then((function() {
                        n += 1,
                        e._nvueNextAnimate(t, n, r)
                    }))
                } else this.currentStepAnimates = {},
                "function" == typeof r && r(),
                this.isEnd = !0
            }
        },
        {
            key: "step",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.animation.step(t),
                this
            }
        },
        {
            key: "run",
            value: function(t) {
                this.$.animationData = this.animation.export(),
                this.$.timer = o((function() {
                    "function" == typeof t && t()
                }), this.$.durationTime)
            }
        }])
    } (), $h = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"]; $h.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((function(t) {
        Ah.prototype[t] = function() {
            var e;
            return (e = this.animation)[t].apply(e, arguments),
            this
        }
    })), n.Reader = function() {
        return Q((function t(e) {
            X(this, t),
            this.maxShowCount = 3,
            this.dataList = [],
            this._currentChapter = {
                id: "",
                title: "",
                content: [],
                prev: {},
                next: {}
            },
            this._currentIndex = 0,
            this.cacheData = {},
            this._showChapters = {},
            this.loadType = (null == e ? void 0 : e.loadType) || "preload",
            this.maxShowCount = (null == e ? void 0 : e.maxShowCount) || 3,
            this.maxCacheCount = (null == e ? void 0 : e.maxCacheCount) || 50,
            this.events = e.events
        }), [{
            key: "onInit",
            value: (u = z(regeneratorRuntime.mark((function t(e, n) {
                var r, i;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        return e && (this._currentChapter = e),
                        t.next = 3,
                        this.getContent("current");
                    case 3:
                        r = t.sent,
                        console.log("-- oninit", r),
                        this.dataList = [r],
                        this.updateView(this.dataList),
                        this._currentChapter = F({},
                        r),
                        r.needPay || (this.cacheData[r.id] = F({},
                        r)),
                        i = this.events.getChapterInfo(r, "current"),
                        this.events.onChapterChange(i, n || "init"),
                        this.onChapterChange(i);
                    case 7:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, e) {
                return u.apply(this, arguments)
            })
        },
        {
            key: "clearEmptyData",
            value: function() {
                this._showChapters = {},
                this.dataList = this.dataList.filter((function(t) {
                    return t.content.length
                })),
                this.updateView(this.dataList)
            }
        },
        {
            key: "getContent",
            value: (c = z(regeneratorRuntime.mark((function t(e, n) {
                var r, i, o, a;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (this._currentChapter.next || (this._currentChapter = this.events.getChapterInfo(this._currentChapter, "current")), r = n ? n.next && n.next.id || this._currentChapter.next.id: "next" === e ? this._currentChapter.next.id: "prev" === e ? this._currentChapter.prev.id: this._currentChapter.id, !(i = this.cacheData[r] || "")) {
                            t.next = 11;
                            break
                        }
                        if (t.t0 = !!this.events.isChangeVipStatus, !t.t0) {
                            t.next = 8;
                            break
                        }
                        return t.next = 7,
                        this.events.isChangeVipStatus( !! this._currentChapter.isFree);
                    case 7:
                        t.t0 = t.sent;
                    case 8:
                        if (t.t0) {
                            t.next = 10;
                            break
                        }
                        return t.abrupt("return", i);
                    case 10:
                        this.keepOnlyCurrentChapter();
                    case 11:
                        return t.next = 13,
                        this.events.getContent(n || this._currentChapter, e);
                    case 13:
                        return o = t.sent,
                        a = this.onDecodeContent(o.content),
                        t.abrupt("return", F(F({},
                        o), {},
                        {
                            content: a
                        }));
                    case 16:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, e) {
                return c.apply(this, arguments)
            })
        },
        {
            key: "onDecodeContent",
            value: function(t) {
                if (!t) return [];
                var e = Oh.enc.Utf8.parse(function(t) {
                    for (var e = ""; e.length < 16;) e += Math.floor(1e9 * Math.random()).toString();
                    return e.substring(0, 16)
                } ()),
                n = Oh.enc.Utf8.parse("cElRD7N0QWoShXkW"),
                r = function(t) {
                    for (var e = "",
                    n = 0; n < t.sigBytes; n++) {
                        var r = t.words[Math.floor(n / 4)] >>> 24 - n % 4 * 8 & 255;
                        e += String.fromCharCode(r)
                    }
                    return e
                } (Oh.AES.decrypt(t, n, {
                    iv: e
                })),
                i = function(t) {
                    for (var e = "",
                    n = 0; n < t.length; n++) {
                        var r = t.charCodeAt(n).toString(16);
                        e += (1 === r.length ? "0": "") + r
                    }
                    return e
                } (r.substring(16));
                return Oh.enc.Hex.parse(i).toString(Oh.enc.Utf8).split("\n")
            }
        },
        {
            key: "addPrevChapter",
            value: (s = z(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        return this.dataList.length >= this.maxCacheCount && (console.log("-- reset prev"), this.dataList = []),
                        t.next = 3,
                        this.addChapter("prev");
                    case 3:
                        return t.abrupt("return", !0);
                    case 4:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function() {
                return s.apply(this, arguments)
            })
        },
        {
            key: "preloadNextChapter",
            value: (a = z(regeneratorRuntime.mark((function t() {
                var e;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (t.t0 = !!this.events.isChangeVipStatus, !t.t0) {
                            t.next = 5;
                            break
                        }
                        return t.next = 4,
                        this.events.isChangeVipStatus( !! this._currentChapter.isFree);
                    case 4:
                        t.t0 = t.sent;
                    case 5:
                        if (!t.t0) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return", void this.keepOnlyCurrentChapter());
                    case 7:
                        return e = this.dataList[this.dataList.length - 1],
                        console.log("== preloadNextChapter", e),
                        t.next = 11,
                        this.addChapter("next", e);
                    case 11:
                        return this.events.onPreloadNextChapter(),
                        t.abrupt("return", !0);
                    case 13:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function() {
                return a.apply(this, arguments)
            })
        },
        {
            key: "addChapter",
            value: (o = z(regeneratorRuntime.mark((function t(e, n) {
                var r, i, o, a, s;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        return console.log("触发章节更新", e),
                        t.next = 3,
                        this.getContent(e, n);
                    case 3:
                        if (r = t.sent, !(this.dataList.length >= this.maxShowCount)) {
                            t.next = 12;
                            break
                        }
                        if (! ((i = "prev" === e ? this._currentIndex + this.maxShowCount - 1 : this._currentIndex - this.maxShowCount + 1) >= 0)) {
                            t.next = 12;
                            break
                        }
                        return o = this.dataList[i],
                        t.next = 10,
                        this.getChapterContentHeight(i);
                    case 10:
                        a = t.sent,
                        o.contentHeight = a,
                        o.content = [];
                    case 12:
                        "prev" === e ? (this.dataList.unshift(r), (s = this.events.getChapterInfo(r, "current")).clearOthersChapter && (this.cacheData = {},
                        this.dataList = this.dataList.slice(0, 1)), this.events.onChapterChange(s, "pulldown"), this.onChapterChange(s), this._currentChapter = F({},
                        s)) : this.dataList.push(r),
                        this.updateView(this.dataList),
                        r.needPay || (this.cacheData[r.id] = F({},
                        r)),
                        console.log("-- addChapter", this.dataList, this.cacheData);
                    case 14:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, e) {
                return o.apply(this, arguments)
            })
        },
        {
            key: "updateCurrentChapter",
            value: (r = z(regeneratorRuntime.mark((function t(e, n) {
                var r, i, o, a;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (console.log("-- updateCurrentChapter", e, n), !n) {
                            t.next = 4;
                            break
                        }
                        this._showChapters[e] = F(F({},
                        this.dataList[e]), {},
                        {
                            index: e
                        }),
                        t.next = 21;
                        break;
                    case 4:
                        if (r = this._showChapters[e].index, delete this._showChapters[e], !(i = this._showChapters[Object.keys(this._showChapters)[0]])) {
                            t.next = 20;
                            break
                        }
                        if (this._currentIndex = i.index, this._currentChapter = F({},
                        i), o = i.index - r > 0 ? "down": "up", a = this.events.getChapterInfo(i, "current"), this.events.onChapterChange(a, "scroll-".concat(o)), this.onChapterChange(a), t.t0 = !!this.events.isChangeVipStatus, !t.t0) {
                            t.next = 17;
                            break
                        }
                        return t.next = 16,
                        this.events.isChangeVipStatus( !! a.isFree);
                    case 16:
                        t.t0 = t.sent;
                    case 17:
                        if (!t.t0) {
                            t.next = 19;
                            break
                        }
                        return t.abrupt("return", void this.keepOnlyCurrentChapter("down" === o));
                    case 19:
                        this.preloadCacheChapter();
                    case 20:
                        this.dataList.length >= this.maxCacheCount && (console.log("-- reset"), this.dataList = this.dataList.slice( - 1), this._currentIndex = 0, this.updateView(this.dataList), this.onScrollToTop());
                    case 21:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function(t, e) {
                return r.apply(this, arguments)
            })
        },
        {
            key: "preloadCacheChapter",
            value: (n = z(regeneratorRuntime.mark((function t() {
                var e, n, r, i, o, a, s, c, u, f;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (! (r = this.dataList[this._currentIndex - 1] || {
                            content: []
                        }).id || 0 !== r.content.length) {
                            t.next = 9;
                            break
                        }
                        return console.log("-- preloadCacheChapter prev", r),
                        this.dataList[this._currentIndex - 1].content = (null == (e = this.cacheData[r.id]) ? void 0 : e.content) || [],
                        i = this._currentIndex - 1 + this.maxShowCount,
                        (o = this.dataList[i]).content = [],
                        t.next = 7,
                        this.getChapterContentHeight(i);
                    case 7:
                        a = t.sent,
                        o.contentHeight = a,
                        this.updateView(this.dataList);
                    case 9:
                        if (! (s = this.dataList[this._currentIndex + 1] || {
                            content: []
                        }).id || 0 !== s.content.length) {
                            t.next = 18;
                            break
                        }
                        return console.log("-- preloadCacheChapter next", s),
                        this.dataList[this._currentIndex + 1].content = (null == (n = this.cacheData[s.id]) ? void 0 : n.content) || [],
                        c = this._currentIndex + 1 - this.maxShowCount,
                        (u = this.dataList[c]).content = [],
                        t.next = 16,
                        this.getChapterContentHeight(c);
                    case 16:
                        f = t.sent,
                        u.contentHeight = f,
                        this.updateView(this.dataList);
                    case 18:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function() {
                return n.apply(this, arguments)
            })
        },
        {
            key: "keepOnlyCurrentChapter",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.cacheData = {},
                this.dataList = [F(F({},
                this.dataList[this._currentIndex]), {},
                {
                    stopPreload: !0
                })],
                this._currentChapter.prev = {},
                this.updateView(this.dataList),
                t && this.onScrollToTop()
            }
        },
        {
            key: "resetReaderContent",
            value: (e = z(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        return this.dataList = [],
                        this.cacheData = {},
                        t.next = 4,
                        this.onInit(this._currentChapter);
                    case 4:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function() {
                return e.apply(this, arguments)
            })
        },
        {
            key: "unlockNextChapter",
            value: (t = z(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                    case 0:
                        this.dataList.pop(),
                        this.preloadNextChapter();
                    case 1:
                    case "end":
                        return t.stop()
                    }
                }), t, this)
            }))),
            function() {
                return t.apply(this, arguments)
            })
        },
        {
            key: "currentChapter",
            get: function() {
                return F(F({},
                this._currentChapter), {},
                {
                    index: this._currentIndex
                })
            }
        },
        {
            key: "exposeStorageData",
            value: function() {
                return this.storageData
            }
        },
        {
            key: "onScrollToTop",
            value: function() {
                console.warn(" -- 请在实例化时重写覆盖该方法 onScrollToTop --")
            }
        },
        {
            key: "onChapterChange",
            value: function(t) {
                console.warn(" -- 请在实例化时重写覆盖该方法 onChapterChange --")
            }
        },
        {
            key: "updateView",
            value: function(t) {
                console.warn(" -- 请在实例化时重写覆盖该方法 updateView --")
            }
        },
        {
            key: "getChapterContentHeight",
            value: function(t) {
                return console.warn(" -- 请在实例化时重写覆盖该方法 getChapterContentHeight --"),
                new i((function(t) {
                    t(666)
                }))
            }
        },
        {
            key: "onScrollToView",
            value: function(t, e) {}
        }]);
        var t, e, n, r, o, a, s, c, u
    } (), n.SettingCompType = Dc, n.ToolButtonType = Bc, n._export_sfc = function(t, e) {
        var n, r = t.__vccOpts || t,
        i = G(e);
        try {
            for (i.s(); ! (n = i.n()).done;) {
                var o = nt(n.value, 2),
                a = o[0],
                s = o[1];
                r[a] = s
            }
        } catch(t) {
            i.e(t)
        } finally {
            i.f()
        }
        return r
    },
    n.a = function(t) {
        return dc(void 0, 0, void 0, regeneratorRuntime.mark((function e() {
            var n, r, i, o, a, s, c;
            return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = Object.keys(t), !((r = n.length) <= 1)) {
                        e.next = 5;
                        break
                    }
                    return console.error("只有一条配置，请使用 init_qm 或 init_sensors_tt 来注册单个平台"),
                    e.abrupt("return");
                case 5:
                    i = [],
                    o = 0;
                case 7:
                    if (! (o < r)) {
                        e.next = 22;
                        break
                    }
                    if ("qm" !== (a = n[o])) {
                        e.next = 14;
                        break
                    }
                    return e.next = 12,
                    mc(t[a], !0);
                case 12:
                    s = e.sent,
                    i.push(s);
                case 14:
                    if ("sensors" !== a) {
                        e.next = 19;
                        break
                    }
                    return e.next = 17,
                    bc(t[a], !0);
                case 17:
                    c = e.sent,
                    i.push(c);
                case 19:
                    o++,
                    e.next = 7;
                    break;
                case 22:
                    return e.abrupt("return", yc(i));
                case 23:
                case "end":
                    return e.stop()
                }
            }), e)
        })))
    },
    n.computed = Oa, n.createAnimation = function(t, e) {
        if (e) return a(e.timer),
        new Ah(t, e)
    },
    n.createPinia = function() {
        var t = vr(!0),
        e = t.run((function() {
            return Bi({})
        })),
        n = [],
        r = [],
        i = Oi({
            install: function(t) {
                wc(i),
                i._a = t,
                t.provide(kc, i),
                t.config.globalProperties.$pinia = i,
                r.forEach((function(t) {
                    return n.push(t)
                })),
                r = []
            },
            use: function(t) {
                return this._a ? n.push(t) : r.push(t),
                this
            },
            _p: n,
            _a: null,
            _e: t,
            _s: new Map,
            state: e
        });
        return i
    },
    n.createSSRApp = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return t && (t.mpType = "app"),
        function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; (void 0 !== f ? f: void 0 !== j ? j: "undefined" != typeof global ? global: "undefined" != typeof my ? my: void 0).__VUE__ = !0;
            var n = Za(t, e),
            r = n._context;
            r.config.globalProperties.$nextTick = function(t) {
                return Ra(this.$, t)
            };
            var i = function(t) {
                return t.appContext = r,
                t.shapeFlag = 6,
                t
            },
            o = function(t, e) {
                return Fa(i(t), e)
            },
            a = function(t) {
                return t &&
                function(t) {
                    var e = t.bum,
                    n = t.scope,
                    r = t.update,
                    i = t.um;
                    e && zt(e),
                    n.stop(),
                    r && (r.active = !1),
                    i && Ua(i),
                    Ua((function() {
                        t.isUnmounted = !0
                    }))
                } (t.$)
            };
            return n.mount = function() {
                t.render = lt;
                var e = Fa(i({
                    type: t
                }), {
                    mpType: "app",
                    mpInstance: null,
                    parentComponent: null,
                    slots: [],
                    props: null
                });
                return n._instance = e.$,
                e.$app = n,
                e.$createComponent = o,
                e.$destroyComponent = a,
                r.$appInstance = e,
                e
            },
            n.unmount = function() {},
            n
        } (t, e).use(fs)
    },
    n.debounce = function(t, e) {
        var n, r = t.delay,
        i = !0,
        s = function() {
            for (var t = arguments.length,
            s = new Array(t), c = 0; c < t; c++) s[c] = arguments[c];
            i ? (a(n), n = o((function() {
                i && e.apply(void 0, s),
                n = void 0
            }), r)) : e.apply(void 0, s)
        };
        return s.isPending = function() {
            return void 0 !== n
        },
        s.cancel = function() {
            i = !1
        },
        s.flush = function() {
            return e.apply(void 0, arguments)
        },
        s
    },
    n.defineComponent =
    /*! #__NO_SIDE_EFFECTS__ */
    function(t, e) {
        return kt(t) ? vt({
            name: t.name
        },
        e, {
            setup: t
        }) : t
    },
    n.defineStore = Ec, n.e = function(t) {
        for (var e = arguments.length,
        n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return vt.apply(void 0, [t].concat(n))
    },
    n.f = function(t, e) {
        return function(t, e) {
            var n;
            if (mt(t) || St(t)) {
                n = new Array(t.length);
                for (var r = 0,
                i = t.length; r < i; r++) n[r] = e(t[r], r, r)
            } else if ("number" == typeof t) {
                n = new Array(t);
                for (var o = 0; o < t; o++) n[o] = e(o + 1, o, o)
            } else if (Ct(t)) if (t[Symbol.iterator]) n = Array.from(t, (function(t, n) {
                return e(t, n, n)
            }));
            else {
                var a = Object.keys(t);
                n = new Array(a.length);
                for (var s = 0,
                c = a.length; s < c; s++) {
                    var u = a[s];
                    n[s] = e(t[u], u, s)
                }
            } else n = [];
            return n
        } (t, e)
    },
    n.getCurrentInstance = ya, n.index = ur, n.inject = xo, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    },
    n.mergeModels = function(t, e) {
        return t && e ? mt(t) && mt(e) ? t.concat(e) : vt({},
        Wo(t), Wo(e)) : t || e
    },
    n.n = function(t) {
        return Gt(t)
    },
    n.nextTick$1 = Yi, n.o = function(t, e) {
        return function(t, e) {
            var n = ya(),
            r = n.ctx,
            i = "e" + n.$ei++,
            a = r.$scope;
            if (!t) return delete a[i],
            i;
            var s = a[i];
            return s ? s.value = t: a[i] = function(t, e) {
                var n = function t(n) {
                    var r; (r = n).type && r.target && (r.preventDefault = lt, r.stopPropagation = lt, r.stopImmediatePropagation = lt, yt(r, "detail") || (r.detail = {}), yt(r, "markerId") && (r.detail = "object" == at(r.detail) ? r.detail: {},
                    r.detail.markerId = r.markerId), Pt(r.detail) && yt(r.detail, "checked") && !yt(r.detail, "value") && (r.detail.value = r.detail.checked), Pt(r.detail) && (r.target = vt({},
                    r.target, r.detail)));
                    var i = [n];
                    n.detail && n.detail.__args__ && (i = n.detail.__args__);
                    var a = t.value,
                    s = function() {
                        return Ui(function(t, e) {
                            if (mt(e)) {
                                var n = t.stopImmediatePropagation;
                                return t.stopImmediatePropagation = function() {
                                    n && n.call(t),
                                    t._stopped = !0
                                },
                                e.map((function(t) {
                                    return function(e) {
                                        return ! e._stopped && t(e)
                                    }
                                }))
                            }
                            return e
                        } (n, a), e, 5, i)
                    },
                    c = n.target,
                    u = !!c && !!c.dataset && "true" === String(c.dataset.eventsync);
                    if (!ls.includes(n.type) || u) {
                        var f = s();
                        if ("input" === n.type && (mt(f) || Ot(f))) return;
                        return f
                    }
                    o(s)
                };
                return n.value = t,
                n
            } (t, n),
            i
        } (t)
    },
    n.onBeforeUnmount = Lo, n.onExit = lc, n.onHide = uc, n.onLaunch = fc, n.onMounted = Bo, n.onPullDownRefresh = hc, n.onReachBottom = pc, n.onShow = cc, n.onUnmounted = To, n.p = function(t) {
        return function(t) {
            var e = ya(),
            n = e.uid,
            r = e.__counter;
            return n + "," + ((ss[n] || (ss[n] = [])).push(function(t) {
                return t ? ki(e = t) || Si(e) || "__vInternal" in t ? vt({},
                t) : t: null;
                var e
            } (t)) - 1) + "," + r
        } (t)
    },
    n.provide = function(t, e) {
        if (_a) {
            var n = _a.provides,
            r = _a.parent && _a.parent.provides;
            r === n && (n = _a.provides = Object.create(r)),
            n[t] = e,
            "app" === _a.type.mpType && _a.appContext.app.provide(t, e)
        }
    },
    n.r = function(t, e, n) {
        return ps(t, e, n)
    },
    n.reactive = mi, n.ref = Bi, n.resolveComponent = function(t, e) {
        return function(t, e) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = lo || _a;
            if (r) {
                var i = r.type,
                o = function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return kt(t) ? t.displayName || t.name: t.name || e && t.__name
                } (i, !1);
                if (o && (o === e || o === Rt(e) || o === Mt(Rt(e)))) return i;
                var a = ho(r[t] || i[t], e) || ho(r.appContext[t], e);
                return ! a && n ? i: a
            }
        } ("components", t, !0, e) || t
    },
    n.s = function(t) {
        return hs(t)
    },
    n.skinConfigList = Gl, n.skinConfigMap = Jl, n.sr = function(t, e, n) {
        return function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ya().$templateRefs.push({
                i: e,
                r: t,
                k: n.k,
                f: n.f
            })
        } (t, e, n)
    },
    n.storageKeys = Kl, n.t = function(t) {
        return function(t) {
            return St(t) ? t: null == t ? "": mt(t) || Ct(t) && (t.toString === At || !kt(t.toString)) ? JSON.stringify(t, Xt, 2) : String(t)
        } (t)
    },
    n.throttle = function(t, e) {
        var n, r = t.interval,
        i = !0,
        a = function() {
            i && (e.apply(void 0, arguments), i = !1, n = o((function() {
                i = !0,
                n = void 0
            }), r))
        };
        return a.isThrottled = function() {
            return void 0 !== n
        },
        a
    },
    n.unref = Ri, n.useModel = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
        r = ya(),
        i = Rt(e),
        o = Tt(e),
        a = new Mi((function(a, s) {
            var c;
            return _o((function() {
                var n = t[e];
                Nt(c, n) && (c = n, s())
            }), null, {
                flush: "sync"
            }),
            {
                get: function() {
                    return a(),
                    n.get ? n.get(c) : c
                },
                set: function(t) {
                    var a = r.vnode.props;
                    a && (e in a || i in a || o in a) && ("onUpdate:".concat(e) in a || "onUpdate:".concat(i) in a || "onUpdate:".concat(o) in a) || !Nt(t, c) || (c = t, s()),
                    r.emit("update:".concat(e), n.set ? n.set(t) : t)
                }
            }
        }));
        return a[Symbol.iterator] = function() {
            var e = 0;
            return {
                next: function() {
                    return e < 2 ? {
                        value: e++?t.modelModifiers || {}: a,
                        done: !1
                    }: {
                        done: !0
                    }
                }
            }
        },
        a
    },
    n.useStoreReader = Zl, n.watch = go
}));
//# sourceMappingURL=vendor.js.map
