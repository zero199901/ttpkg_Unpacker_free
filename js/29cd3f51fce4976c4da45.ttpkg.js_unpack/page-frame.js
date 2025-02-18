! function () {
  "use strict";
  window.initRuntime = window.initRuntime || function () {
    function e(t, a, i) {
      if (null == t) return t;
      if ("string" == typeof t || "boolean" == typeof t || "number" == typeof t) return t;
      var o, n = Object.prototype.toString;
      if ("[object Object]" === n.call(t)) {
        for (var A in o = {}, t) t.hasOwnProperty(A) && (void 0 === a ? o[A.substring(3)] = e(t[A], a, i) : o[a + A] = e(t[A], a, i));
        return o
      }
      if ("[object Array]" === n.call(t)) return o = [], t.forEach((function (t) {
        o.push(e(t, a, i))
      })), o;
      if ("[object Date]" === n.call(t)) return (o = new Date).setTime(t.getTime()), o;
      if ("[object RegExp]" === n.call(t)) {
        var d = "";
        return t.ignoreCase && (d += "i"), t.multiline && (d += "m"), t.global && (d += "g"), new RegExp(t.source, d)
      }
      return t.constructor === Function ? i ? null : t : null
    }

    function t(e) {
      for (var t = e.split("\n    "), a = 0; a < t.length; ++a) 0 != a && (")" === t[a][t[a].length - 1] ? t[a] = t[a].replace(/\s(.*)$/, "") : t[a] = "at anonymous function");
      return t.join("\n    ")
    }

    function a(e) {
      var t = typeof e;
      if ("function" === t || "object" === t && null !== e) {
        if ($$sjsValues.has(e)) return;
        for (var i in $$sjsValues.add(e), e) e.hasOwnProperty(i) && a(e[i])
      }
    }! function () {
      Object.defineProperty(arguments.__proto__, "$t_length", {
        get: function () {
          return this.length
        },
        set: function () {}
      })
    }(), window.$m = {}, window.$p = {}, Object.defineProperty(window, "$t_Date", {
      value: Date
    }), Object.defineProperty(window, "$t_Number", {
      value: Number
    }), Object.defineProperty(window, "$t_parseInt", {
      value: parseInt
    }), Object.defineProperty(window, "$t_parseFloat", {
      value: parseFloat
    }), Object.defineProperty(window, "$t_isNaN", {
      value: isNaN
    }), Object.defineProperty(window, "$t_isFinite", {
      value: isFinite
    }), Object.defineProperty(window, "$t_decodeURI", {
      value: decodeURI
    }), Object.defineProperty(window, "$t_encodeURI", {
      value: encodeURI
    }), Object.defineProperty(window, "$t_decodeURIComponent", {
      value: decodeURIComponent
    }), Object.defineProperty(window, "$t_encodeURIComponent", {
      value: encodeURIComponent
    }), Object.defineProperty(Date, "$t_now", {
      value: Date.now
    }), Object.defineProperty(Date, "$t_parse", {
      value: Date.parse
    }), Object.defineProperty(Date, "$t_UTC", {
      value: Date.UTC
    }), Object.defineProperty(Number, "$t_MAX_VALUE", {
      value: Number.MAX_VALUE
    }), Object.defineProperty(Number, "$t_MIN_VALUE", {
      value: Number.MIN_VALUE
    }), Object.defineProperty(Number, "$t_NEGATIVE_INFINITY", {
      value: Number.NEGATIVE_INFINITY
    }), Object.defineProperty(Number, "$t_POSITIVE_INFINITY", {
      value: Number.POSITIVE_INFINITY
    }), Object.defineProperty(window, "$t_Math", {
      value: {}
    }), Object.defineProperty(window, "$t_console", {
      value: {}
    }), Object.defineProperty($t_Math, "$t_E", {
      value: Math.E
    }), Object.defineProperty($t_Math, "$t_LN10", {
      value: Math.LN10
    }), Object.defineProperty($t_Math, "$t_LN2", {
      value: Math.LN2
    }), Object.defineProperty($t_Math, "$t_LOG2E", {
      value: Math.LOG2E
    }), Object.defineProperty($t_Math, "$t_LOG10E", {
      value: Math.LOG10E
    }), Object.defineProperty($t_Math, "$t_PI", {
      value: Math.PI
    }), Object.defineProperty($t_Math, "$t_SQRT1_2", {
      value: Math.SQRT1_2
    }), Object.defineProperty($t_Math, "$t_SQRT2", {
      value: Math.SQRT2
    }), Object.defineProperty($t_Math, "$t_abs", {
      value: Math.abs
    }), Object.defineProperty($t_Math, "$t_acos", {
      value: Math.acos
    }), Object.defineProperty($t_Math, "$t_asin", {
      value: Math.asin
    }), Object.defineProperty($t_Math, "$t_atan", {
      value: Math.atan
    }), Object.defineProperty($t_Math, "$t_atan2", {
      value: Math.atan2
    }), Object.defineProperty($t_Math, "$t_ceil", {
      value: Math.ceil
    }), Object.defineProperty($t_Math, "$t_cos", {
      value: Math.cos
    }), Object.defineProperty($t_Math, "$t_exp", {
      value: Math.exp
    }), Object.defineProperty($t_Math, "$t_floor", {
      value: Math.floor
    }), Object.defineProperty($t_Math, "$t_log", {
      value: Math.log
    }), Object.defineProperty($t_Math, "$t_max", {
      value: Math.max
    }), Object.defineProperty($t_Math, "$t_min", {
      value: Math.min
    }), Object.defineProperty($t_Math, "$t_pow", {
      value: Math.pow
    }), Object.defineProperty($t_Math, "$t_random", {
      value: Math.random
    }), Object.defineProperty($t_Math, "$t_round", {
      value: Math.round
    }), Object.defineProperty($t_Math, "$t_sin", {
      value: Math.sin
    }), Object.defineProperty($t_Math, "$t_sqrt", {
      value: Math.sqrt
    }), Object.defineProperty($t_Math, "$t_tan", {
      value: Math.tan
    }), Object.defineProperty($t_console, "$t_log", {
      value: window.sjsLog || console.log
    }), Object.defineProperty(window, "$t_getDate", {
      value: function () {
        var e = Array.prototype.slice.call(arguments);
        return e.unshift(Date), new(Function.prototype.bind.apply(Date, e))
      }
    }), Object.defineProperty(window, "$t_getRegExp", {
      value: function () {
        var e = Array.prototype.slice.call(arguments);
        return e.unshift(RegExp), new(Function.prototype.bind.apply(RegExp, e))
      }
    }), Object.defineProperty(Object.prototype, "$t_constructor", {
      writable: !0,
      value: "Object"
    }), Object.defineProperty(Object.prototype, "$t_toString", {
      writable: !0,
      value: function () {
        return "[object Object]"
      }
    }), Object.defineProperty(Function.prototype, "$t_constructor", {
      value: "Function"
    }), Object.defineProperty(Array.prototype, "$t_constructor", {
      value: "Array"
    }), Object.defineProperty(String.prototype, "$t_constructor", {
      value: "String"
    }), Object.defineProperty(Boolean.prototype, "$t_constructor", {
      value: "Boolean"
    }), Object.defineProperty(Number.prototype, "$t_constructor", {
      value: "Number"
    }), Object.defineProperty(Date.prototype, "$t_constructor", {
      value: "Date"
    }), Object.defineProperty(RegExp.prototype, "$t_constructor", {
      value: "RegExp"
    }), Object.defineProperty(Function.prototype, "$t_length", {
      get: function () {
        return this.length
      },
      set: function () {}
    }), Object.defineProperty(Function.prototype, "$t_toString", {
      value: "[function Function]"
    }), Object.defineProperty(Array.prototype, "$t_concat", {
      value: Array.prototype.concat
    }), Object.defineProperty(Array.prototype, "$t_pop", {
      value: Array.prototype.pop
    }), Object.defineProperty(Array.prototype, "$t_push", {
      value: Array.prototype.push
    }), Object.defineProperty(Array.prototype, "$t_reverse", {
      value: Array.prototype.reverse
    }), Object.defineProperty(Array.prototype, "$t_shift", {
      value: Array.prototype.shift
    }), Object.defineProperty(Array.prototype, "$t_slice", {
      value: Array.prototype.slice
    }), Object.defineProperty(Array.prototype, "$t_sort", {
      value: Array.prototype.sort
    }), Object.defineProperty(Array.prototype, "$t_splice", {
      value: Array.prototype.splice
    }), Object.defineProperty(Array.prototype, "$t_unshift", {
      value: Array.prototype.unshift
    }), Object.defineProperty(Array.prototype, "$t_indexOf", {
      value: Array.prototype.indexOf
    }), Object.defineProperty(Array.prototype, "$t_lastIndexOf", {
      value: Array.prototype.lastIndexOf
    }), Object.defineProperty(Array.prototype, "$t_every", {
      value: Array.prototype.every
    }), Object.defineProperty(Array.prototype, "$t_some", {
      value: Array.prototype.some
    }), Object.defineProperty(Array.prototype, "$t_forEach", {
      value: Array.prototype.forEach
    }), Object.defineProperty(Array.prototype, "$t_map", {
      value: Array.prototype.map
    }), Object.defineProperty(Array.prototype, "$t_filter", {
      value: Array.prototype.filter
    }), Object.defineProperty(Array.prototype, "$t_reduce", {
      value: Array.prototype.reduce
    }), Object.defineProperty(Array.prototype, "$t_reduceRight", {
      value: Array.prototype.reduceRight
    }), Object.defineProperty(Array.prototype, "$t_length", {
      get: function () {
        return this.length
      },
      set: function (e) {
        this.length = e
      }
    }), Object.defineProperty(Array.prototype, "$t_join", {
      value: function (e) {
        e = null == e ? "," : e;
        for (var t = "", a = 0; a < this.length; a++) 0 !== a && (t += e), null === this[a] || void 0 === this[a] ? t += "" : "function" == typeof this[a] ? t += this[a].$t_toString() : "object" == typeof this[a] && "Array" === this[a].$t_constructor ? t += this[a].$t_join() : t += this[a].toString();
        return t
      }
    }), Object.defineProperty(Array.prototype, "$t_toString", {
      value: this.$t_join
    }), Object.defineProperty(String.prototype, "$t_toString", {
      value: String.prototype.toString
    }), Object.defineProperty(String.prototype, "$t_valueOf", {
      value: String.prototype.valueOf
    }), Object.defineProperty(String.prototype, "$t_charAt", {
      value: String.prototype.charAt
    }), Object.defineProperty(String.prototype, "$t_charCodeAt", {
      value: String.prototype.charCodeAt
    }), Object.defineProperty(String.prototype, "$t_concat", {
      value: String.prototype.concat
    }), Object.defineProperty(String.prototype, "$t_indexOf", {
      value: String.prototype.indexOf
    }), Object.defineProperty(String.prototype, "$t_lastIndexOf", {
      value: String.prototype.lastIndexOf
    }), Object.defineProperty(String.prototype, "$t_localeCompare", {
      value: String.prototype.localeCompare
    }), Object.defineProperty(String.prototype, "$t_match", {
      value: String.prototype.match
    }), Object.defineProperty(String.prototype, "$t_replace", {
      value: String.prototype.replace
    }), Object.defineProperty(String.prototype, "$t_search", {
      value: String.prototype.search
    }), Object.defineProperty(String.prototype, "$t_slice", {
      value: String.prototype.slice
    }), Object.defineProperty(String.prototype, "$t_split", {
      value: String.prototype.split
    }), Object.defineProperty(String.prototype, "$t_substring", {
      value: String.prototype.substring
    }), Object.defineProperty(String.prototype, "$t_toLowerCase", {
      value: String.prototype.toLowerCase
    }), Object.defineProperty(String.prototype, "$t_toUpperCase", {
      value: String.prototype.toUpperCase
    }), Object.defineProperty(String.prototype, "$t_toLocaleUpperCase", {
      value: String.prototype.toLocaleUpperCase
    }), Object.defineProperty(String.prototype, "$t_trim", {
      value: String.prototype.trim
    }), Object.defineProperty(String.prototype, "$t_length", {
      get: function () {
        return this.length
      },
      set: function (e) {
        this.length = e
      }
    }), Object.defineProperty(Boolean.prototype, "$t_toString", {
      value: Boolean.prototype.toString
    }), Object.defineProperty(Boolean.prototype, "$t_valueOf", {
      value: Boolean.prototype.valueOf
    }), Object.defineProperty(Number.prototype, "$t_toString", {
      value: Number.prototype.toString
    }), Object.defineProperty(Number.prototype, "$t_toLocaleString", {
      value: Number.prototype.toLocaleString
    }), Object.defineProperty(Number.prototype, "$t_valueOf", {
      value: Number.prototype.valueOf
    }), Object.defineProperty(Number.prototype, "$t_toFixed", {
      value: Number.prototype.toFixed
    }), Object.defineProperty(Number.prototype, "$t_toExponential", {
      value: Number.prototype.toExponential
    }), Object.defineProperty(Number.prototype, "$t_toPrecision", {
      value: Number.prototype.toPrecision
    }), Object.defineProperty(Date.prototype, "$t_toString", {
      value: Date.prototype.toString
    }), Object.defineProperty(Date.prototype, "$t_toDateString", {
      value: Date.prototype.toDateString
    }), Object.defineProperty(Date.prototype, "$t_toTimeString", {
      value: Date.prototype.toTimeString
    }), Object.defineProperty(Date.prototype, "$t_toLocaleString", {
      value: Date.prototype.toLocaleString
    }), Object.defineProperty(Date.prototype, "$t_toLocaleDateString", {
      value: Date.prototype.toLocaleDateString
    }), Object.defineProperty(Date.prototype, "$t_toLocaleTimeString", {
      value: Date.prototype.toLocaleTimeString
    }), Object.defineProperty(Date.prototype, "$t_valueOf", {
      value: Date.prototype.valueOf
    }), Object.defineProperty(Date.prototype, "$t_getTime", {
      value: Date.prototype.getTime
    }), Object.defineProperty(Date.prototype, "$t_getFullYear", {
      value: Date.prototype.getFullYear
    }), Object.defineProperty(Date.prototype, "$t_getUTCFullYear", {
      value: Date.prototype.getUTCFullYear
    }), Object.defineProperty(Date.prototype, "$t_getMonth", {
      value: Date.prototype.getMonth
    }), Object.defineProperty(Date.prototype, "$t_getUTCMonth", {
      value: Date.prototype.getUTCMonth
    }), Object.defineProperty(Date.prototype, "$t_getDate", {
      value: Date.prototype.getDate
    }), Object.defineProperty(Date.prototype, "$t_getUTCDate", {
      value: Date.prototype.getUTCDate
    }), Object.defineProperty(Date.prototype, "$t_getDay", {
      value: Date.prototype.getDay
    }), Object.defineProperty(Date.prototype, "$t_getUTCDay", {
      value: Date.prototype.getUTCDay
    }), Object.defineProperty(Date.prototype, "$t_getHours", {
      value: Date.prototype.getHours
    }), Object.defineProperty(Date.prototype, "$t_getUTCHours", {
      value: Date.prototype.getUTCHours
    }), Object.defineProperty(Date.prototype, "$t_getMinutes", {
      value: Date.prototype.getMinutes
    }), Object.defineProperty(Date.prototype, "$t_getUTCMinutes", {
      value: Date.prototype.getUTCMinutes
    }), Object.defineProperty(Date.prototype, "$t_getSeconds", {
      value: Date.prototype.getSeconds
    }), Object.defineProperty(Date.prototype, "$t_getUTCSeconds", {
      value: Date.prototype.getUTCSeconds
    }), Object.defineProperty(Date.prototype, "$t_getMilliseconds", {
      value: Date.prototype.getMilliseconds
    }), Object.defineProperty(Date.prototype, "$t_getUTCMilliseconds", {
      value: Date.prototype.getUTCMilliseconds
    }), Object.defineProperty(Date.prototype, "$t_getTimezoneOffset", {
      value: Date.prototype.getTimezoneOffset
    }), Object.defineProperty(Date.prototype, "$t_setTime", {
      value: Date.prototype.setTime
    }), Object.defineProperty(Date.prototype, "$t_setMilliseconds", {
      value: Date.prototype.setMilliseconds
    }), Object.defineProperty(Date.prototype, "$t_setUTCMilliseconds", {
      value: Date.prototype.setUTCMilliseconds
    }), Object.defineProperty(Date.prototype, "$t_setSeconds", {
      value: Date.prototype.setSeconds
    }), Object.defineProperty(Date.prototype, "$t_setUTCSeconds", {
      value: Date.prototype.setUTCSeconds
    }), Object.defineProperty(Date.prototype, "$t_setMinutes", {
      value: Date.prototype.setMinutes
    }), Object.defineProperty(Date.prototype, "$t_setUTCMinutes", {
      value: Date.prototype.setUTCMinutes
    }), Object.defineProperty(Date.prototype, "$t_setHours", {
      value: Date.prototype.setHours
    }), Object.defineProperty(Date.prototype, "$t_setUTCHours", {
      value: Date.prototype.setUTCHours
    }), Object.defineProperty(Date.prototype, "$t_setDate", {
      value: Date.prototype.setDate
    }), Object.defineProperty(Date.prototype, "$t_setUTCDate", {
      value: Date.prototype.setUTCDate
    }), Object.defineProperty(Date.prototype, "$t_setMonth", {
      value: Date.prototype.setMonth
    }), Object.defineProperty(Date.prototype, "$t_setUTCMonth", {
      value: Date.prototype.setUTCMonth
    }), Object.defineProperty(Date.prototype, "$t_setFullYear", {
      value: Date.prototype.setFullYear
    }), Object.defineProperty(Date.prototype, "$t_setUTCFullYear", {
      value: Date.prototype.setUTCFullYear
    }), Object.defineProperty(Date.prototype, "$t_toUTCString", {
      value: Date.prototype.toUTCString
    }), Object.defineProperty(Date.prototype, "$t_toISOString", {
      value: Date.prototype.toISOString
    }), Object.defineProperty(Date.prototype, "$t_toJSON", {
      value: Date.prototype.toJSON
    }), Object.defineProperty(RegExp.prototype, "$t_exec", {
      value: RegExp.prototype.exec
    }), Object.defineProperty(RegExp.prototype, "$t_test", {
      value: RegExp.prototype.test
    }), Object.defineProperty(RegExp.prototype, "$t_toString", {
      value: RegExp.prototype.toString
    }), Object.defineProperty(RegExp.prototype, "$t_source", {
      get: function () {
        return this.source
      },
      set: function () {}
    }), Object.defineProperty(RegExp.prototype, "$t_global", {
      get: function () {
        return this.global
      },
      set: function () {}
    }), Object.defineProperty(RegExp.prototype, "$t_ignoreCase", {
      get: function () {
        return this.ignoreCase
      },
      set: function () {}
    }), Object.defineProperty(RegExp.prototype, "$t_multiline", {
      get: function () {
        return this.multiline
      },
      set: function () {}
    }), Object.defineProperty(RegExp.prototype, "$t_lastIndex", {
      get: function () {
        return this.lastIndex
      },
      set: function (e) {
        this.lastIndex = e
      }
    }), Object.defineProperty(window, "$t_JSON", {
      value: {
        $t_parse: function (t) {
          if (void 0 !== t) return e(JSON.parse(t), "$t_", !1)
        },
        $t_stringify: function (t) {
          return JSON.stringify(t), JSON.stringify(e(t, void 0, !1))
        }
      }
    }), Object.defineProperty(window, "$$sjsValues", {
      value: new WeakSet
    }), Object.defineProperty(window, "$c", {
      value: window.$c || {}
    }), Object.defineProperty(window, "$t_require", {
      value: function (e) {
        return function () {
          if ($m[e]) {
            if (!$c[e]) try {
              var i = {
                $t_exports: {}
              };
              $c[e] = i.$t_exports, $c[e] = $m[e](i, i.$t_exports), a($c[e])
            } catch (a) {
              a.message = a.message.replace(/$t_/g, "");
              var o = a.stack.substring(0, a.stack.lastIndexOf(e));
              a.stack = o.substring(0, o.lastIndexOf("\n")), a.stack = a.stack.replace(/\s$t_/g, " "), a.stack = t(a.stack), a.stack += "\n    at " + e.substring(2), console.error(a)
            }
            return $c[e]
          }
        }
      }
    }), Tmar.$sc = function (i, o) {
      if ("function" == typeof i && $$sjsValues.has(i)) {
        var n = !(!window.TMASwitch || !window.TMASwitch.sjsSafeCallSwitch),
          A = e(o, "$t_", n);
        try {
          var d = i.apply(null, A);
          return "function" == typeof d ? null : (a(d), "[object Object]" === toString.call(d) || "[object Array]" === toString.call(d) ? e(d, void 0, n) : d)
        } catch (e) {
          return e.message = e.message.replace(/$t_/g, ""), e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at $t_"))), e.stack = e.stack.replace(/\s$t_/g, " "), e.stack = t(e.stack), void console.error(e)
        }
      }
    }, Tmar.$sg = function (e, t) {
      if (null != t && "prototype" !== t && "caller" !== t && "__proto__" !== t && null != e) return $$sjsValues.has(e) ? e["number" == typeof t ? t : "$t_" + t] : e[t]
    }, Tmar.renderInclude = function (e, t, a, i) {
      void 0 === i && (i = null);
      var o = e ? e(t, a) : Yaw.VOID;
      return o.key === i || ((o = Yaw.cloneVNode(o)).key = i), o
    }, Tmar.resolveSJS = function (e) {
      var t = e.split("@@"),
        a = $p[t[0]];
      if (null != a) {
        var i = a[t[1]];
        return "function" == typeof i ? i() : void 0
      }
    }, window.createCommonjsModule || (window.createCommonjsModule = function (e, t) {
      return e(t = {
        exports: {}
      }, t.exports), t.exports
    })
  }, window._runtimeInited || (window.initRuntime(), window._runtimeInited = !0), window.app || (window.app = {}), window.CSS_MAP = Object.assign(window.CSS_MAP || {}, {}), window.$m_ComponentsQmiconIndex_c7a7e913 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.renderSlot,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = i("tt-rich-text"),
      s = i("tt-view");
    t.scopeId = "tt-s-x6fpE8uV", t.render = function (e, t) {
      return e.a ? A(r, {
        nodes: e.b,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-icon iconfont data-v-9f030c2d")
      }, null, 1, 0) : A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-icon iconfont data-v-9f030c2d")
      }, o(t.$$slots, "default", d, {}), 2, 1)
    }
  })), window.app["components/qm-icon/index"] = $m_ComponentsQmiconIndex_c7a7e913, window.$m_ComponentsQmpaypanelComponentsPurchasetips_77fdcfbc = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createText,
      o = a.Fragment,
      n = a.createVNode,
      A = a.VOID,
      d = Tmar.resolveBuiltinComponent,
      r = d("tt-view"),
      s = d("tt-text");
    t.scopeId = "tt-s-d-3PvFcP", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-icon");
      return n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("purchase-tips-container data-v-29b4a449")
      }, [n(r, {
        catchtap: t.$$eventBinder(e.b),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 title g-fs-25 g-flex-center-center " + e.a)
      }, [i(" 购买须知 "), n(a, {
        uS: ["d"],
        uI: "29b4a449-0",
        bind__l: t.$$eventBinder("__l"),
        className: t.$$c("arraw-right data-v-29b4a449"),
        $$slots: {
          default: n(o, null, [i("")], 4)
        }
      })], 4), e.c ? n(r, {
        catchtouchmove: t.$$eventBinder(e.l),
        catchtap: t.$$eventBinder(e.m),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("purchase-tips-mask data-v-29b4a449")
      }, n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 content " + e.k)
      }, [n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 title g-flex-center-center " + e.d)
      }, " 购买须知 ", 16), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("main data-v-29b4a449")
      }, [n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 main-wrap g-fs-29 " + e.g)
      }, [n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449")
      }, "1. 1元可购买100书币，以此类推，书币仅限在本小程序内购买付费章节使用。", 16), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449")
      }, "2. 购买后的书币有效期为180天，充值赠送的书币有效期为7天，过期自动失效。", 16), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449")
      }, "3. 未满18周岁的未成年人请在监护人的陪同下进行购买。", 16), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449")
      }, "4. 请您注意，购买的书币、会员，单本书解锁等属于数字化商品，不具有预付款性质或者定金、储值等性质，用户购买成功后不支持退款或转让。", 16), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449")
      }, [i(" 5. 您购买商品，请保证您以阅读并同意 "), n(s, {
        bindtap: t.$$eventBinder(e.e),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("link data-v-29b4a449")
      }, "《用户协议》", 16), i("及 "), n(s, {
        bindtap: t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("link data-v-29b4a449")
      }, "《书币购买说明及会员服务协议》", 16), i("， 您购买并使用相关产品的行为将视为同意接受上述协议各项条款的约束。 ")], 4), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("connect data-v-29b4a449")
      }, "6. 如有疑问可联系客服，客服邮箱：xmread_feedback@zongheng.com，客服工作时间：工作日9：00-18：00，节假日除外。", 16)], 4), n(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 main-bottom-mask " + e.h)
      })], 4), n(r, {
        catchtap: t.$$eventBinder(e.j),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-29b4a449 footer g-fs-31 g-flex-center-center " + e.i)
      }, " 知悉并同意 ", 16)], 4), 2, 0) : A], 4)
    }
  })), window.app["components/qm-pay-panel/components/purchase-tips"] = $m_ComponentsQmpaypanelComponentsPurchasetips_77fdcfbc, window.$m_ComponentsQmpaycardIndex_6c93856d = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$ss,
      o = a.resolveBuiltinComponent,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = n.Fragment,
      s = n.createText,
      c = o("tt-view"),
      l = o("tt-image"),
      _ = o("tt-text");
    t.scopeId = "tt-s-bJOFbcZu", t.render = function (e, t) {
      var a = t.$$resolveComponent("guide-hand");
      return A(c, {
        catchtap: t.$$eventBinder(e.Q),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8 " + e.P)
      }, [e.a ? A(r, {
        className: t.$$c("")
      }, [e.b ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("tag g-fs-23 data-v-cdcfe6a8")
      }, i(e.c), 16, 0) : d, e.d ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("tag g-fs-23 data-v-cdcfe6a8")
      }, "倒计时" + i(e.e), 16, 0) : d], 4, 0) : A(r, {
        className: t.$$c("")
      }, e.f ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-tag g-flex-center-center data-v-cdcfe6a8")
      }, A(l, {
        src: e.g,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-img data-v-cdcfe6a8")
      }), 2, 0) : d, 2, 1), e.h ? A(a, {
        uI: "cdcfe6a8-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.i,
        className: t.$$c("data-v-cdcfe6a8")
      }, null, 1, 0) : d, e.j ? A(r, {
        className: t.$$c("")
      }, [e.k ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8 content " + e.q)
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-cdcfe6a8")
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount data-v-cdcfe6a8")
      }, [A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-num data-v-cdcfe6a8")
      }, i(e.l), 16), A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-unit data-v-cdcfe6a8")
      }, "元", 16)], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-sub-text data-v-cdcfe6a8")
      }, [A(r, {
        className: t.$$c("")
      }, s(i(e.m) + "书币"), 2), e.n ? A(r, {
        className: t.$$c("")
      }, s("+送" + i(e.o) + "书币"), 2, 0) : d], 4)], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-footer data-v-cdcfe6a8")
      }, "送" + i(e.p) + "元", 16)], 4, 0) : d, e.r ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8 content " + e.z)
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-cdcfe6a8")
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount data-v-cdcfe6a8")
      }, [A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-num data-v-cdcfe6a8")
      }, i(e.s), 16), A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-unit data-v-cdcfe6a8")
      }, "元", 16), e.t ? A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("origin-price data-v-cdcfe6a8")
      }, i(e.v) + "元", 16, 0) : d], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-sub-text data-v-cdcfe6a8")
      }, A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8")
      }, i(e.w), 16), 2)], 4), e.x ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-footer data-v-cdcfe6a8")
      }, "仅需" + i(e.y) + "元/天", 16, 0) : d], 4, 0) : d, e.A ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8 content " + e.G)
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-cdcfe6a8")
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount data-v-cdcfe6a8")
      }, [A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-num data-v-cdcfe6a8")
      }, i(e.B), 16), A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-unit data-v-cdcfe6a8")
      }, "元", 16), e.C ? A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("origin-price data-v-cdcfe6a8")
      }, i(e.D) + "元", 16, 0) : d], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-sub-text data-v-cdcfe6a8")
      }, A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8")
      }, "解锁整本", 16), 2)], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-footer data-v-cdcfe6a8 " + (e.F && "desc-skew"))
      }, i(e.E), 16)], 4, 0) : d], 4, 0) : d, e.H ? A(r, {
        className: t.$$c("")
      }, e.I ? A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cdcfe6a8 content " + e.O)
      }, [A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-cdcfe6a8")
      }, [A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-title g-fs-29 data-v-cdcfe6a8")
      }, i(e.J), 16), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount data-v-cdcfe6a8")
      }, [A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-num my-vip-num data-v-cdcfe6a8")
      }, i(e.K), 16), A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-amount-unit my-vip-unit data-v-cdcfe6a8")
      }, "元", 16), e.L ? A(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("origin-price data-v-cdcfe6a8")
      }, i(e.M) + "元", 16, 0) : d], 4)], 4), A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card-footer my-vip-footer data-v-cdcfe6a8")
      }, i(e.N), 16)], 4, 0) : d, 2, 0) : d], 4)
    }
  })), window.app["components/qm-pay-card/index"] = $m_ComponentsQmpaycardIndex_6c93856d, window.$m_ComponentsQmpaycardComponentsGuidehand_ba3e8e33 = createCommonjsModule((function (e, t) {
    var a = Tmar.resolveBuiltinComponent,
      i = Yaw.createVNode,
      o = a("tt-image"),
      n = a("tt-view");
    t.scopeId = "tt-s-uj6OM8-J", t.render = function (e, t) {
      return i(n, {
        style: "bottom:" + e.b + ";right:" + e.c,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("hand data-v-9d811854")
      }, i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("hand-animate data-v-9d811854")
      }, [i(o, {
        src: e.a,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("hand-animate-img data-v-9d811854")
      }), i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("hand-animate-round data-v-9d811854")
      })], 4), 2)
    }
  })), window.app["components/qm-pay-card/components/guide-hand"] = $m_ComponentsQmpaycardComponentsGuidehand_ba3e8e33, window.$m_ComponentsQmtabIndex_49ce442c = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$sg,
      o = a.renderList,
      n = a.$ss,
      A = a.resolveBuiltinComponent,
      d = Yaw,
      r = d.Fragment,
      s = d.createVNode,
      c = d.VOID,
      l = A("tt-text"),
      _ = A("tt-view");
    t.scopeId = "tt-s-Sc5ELGLB", t.render = function (e, t) {
      return s(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-tab data-v-9bcce6b4 " + (e.f && "main") + " " + (e.g && "secondary"))
      }, [s(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-tab-container data-v-9bcce6b4")
      }, s(r, null, o(e.a, (function (a, o) {
        return s(l, {
          bindtap: t.$$eventBinder(i(a, "c")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("qm-tab-item data-v-9bcce6b4 " + (i(a, "d") && "active") + " " + (e.b && "main") + " " + (e.c && "secondary"))
        }, n(i(a, "a")), 16, i(a, "b"))
      })), 8), 2), e.d ? s(_, {
        bindtap: t.$$eventBinder(e.e),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("purchase-config data-v-9bcce6b4")
      }, "购买设置", 16, 0) : c], 4)
    }
  })), window.app["components/qm-tab/index"] = $m_ComponentsQmtabIndex_49ce442c, window.$m_ComponentsQmemptyIndex_2dfaaba3 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = i("tt-image"),
      s = i("tt-view"),
      c = i("tt-text");
    t.scopeId = "tt-s-Lfqrozmz", t.render = function (e, t) {
      return A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("empty-container data-v-b84f7c14 " + (e.f && "fixed-class") + " " + (e.g && "empty-class"))
      }, [A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("image-wrappper data-v-b84f7c14")
      }, A(r, {
        src: e.a,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("img data-v-b84f7c14")
      }), 2), A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("content data-v-b84f7c14")
      }, o(e.b), 16), e.c ? A(s, {
        bindtap: t.$$eventBinder(e.e),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("btn data-v-b84f7c14")
      }, A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("btn-text data-v-b84f7c14")
      }, o(e.d), 16), 2, 0) : d], 4)
    }
  })), window.app["components/qm-empty/index"] = $m_ComponentsQmemptyIndex_2dfaaba3, window.$m_ComponentsQmpulluploadingIndex_e2143080 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = i("tt-image"),
      s = i("tt-text"),
      c = i("tt-view");
    t.scopeId = "tt-s-4hQwgOuA", t.render = function (e, t) {
      return A(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-pull-up-loading data-v-2be1f78a")
      }, [A(r, {
        src: e.a,
        __dirname: t.__dirname,
        mode: "scaleToFill",
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-pull-up-loading-icon data-v-2be1f78a")
      }), e.b ? A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-pull-up-loading-text data-v-2be1f78a")
      }, o(e.c), 16, 0) : d], 4)
    }
  })), window.app["components/qm-pull-up-loading/index"] = $m_ComponentsQmpulluploadingIndex_e2143080, window.$m_PagesIndexIndex_6157c47a = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = a.Fragment,
      A = Tmar,
      d = A.$sg,
      r = A.renderList,
      s = (0, A.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-YVfEess0", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-tab"),
        A = t.$$resolveComponent("qm-scrollx-book-list"),
        c = t.$$resolveComponent("qm-empty"),
        l = t.$$resolveComponent("qm-book-card");
      return i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("index-page data-v-e5cb6391")
      }, [e.a ? i(a, {
        bindchange: t.$$eventBinder(e.b),
        uI: "e5cb6391-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.c,
        className: t.$$c("data-v-e5cb6391")
      }, null, 1, 0) : o, i(n, null, r(e.d, (function (a, _) {
        return i(s, {
          hidden: !d(a, "k"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-content-wrapper data-v-e5cb6391")
        }, [d(a, "a") ? i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card data-v-e5cb6391")
        }, [i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card-title data-v-e5cb6391")
        }, "热门作品", 16), i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card-content data-v-e5cb6391")
        }, d(a, "d") ? i(A, {
          bindclick: t.$$eventBinder(d(a, "b")),
          uI: d(a, "c"),
          bind__l: t.$$eventBinder("__l"),
          uP: d(a, "d"),
          className: t.$$c("data-v-e5cb6391")
        }, null, 1, 0) : o, 2)], 4, 0) : o, i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card data-v-e5cb6391")
        }, [i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card-title data-v-e5cb6391")
        }, "为你推荐", 16), e.e ? i(c, {
          "bind-data-c-h": t.$$eventBinder(!d(a, "e")),
          uI: d(a, "f"),
          bind__l: t.$$eventBinder("__l"),
          uP: e.e,
          className: t.$$c("data-v-e5cb6391")
        }, null, 1, 0) : o, i(s, {
          hidden: !d(a, "h"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card-content data-v-e5cb6391")
        }, i(n, null, r(d(a, "g"), (function (e, a) {
          return i(s, {
            bindtap: t.$$eventBinder(d(e, "d")),
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("recommend-list data-v-e5cb6391")
          }, d(e, "b") ? i(l, {
            uI: d(e, "a"),
            bind__l: t.$$eventBinder("__l"),
            uP: d(e, "b"),
            className: t.$$c("data-v-e5cb6391")
          }, null, 1, 0) : o, 2, d(e, "c"))
        })), 8), 2)], 4), d(a, "i") ? i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("nomore-data data-v-e5cb6391")
        }, "暂无更多内容", 16, 0) : o], 4, d(a, "j"))
      })), 8), e.f ? i(c, {
        bindbtnClick: t.$$eventBinder(e.g),
        uI: "e5cb6391-4",
        bind__l: t.$$eventBinder("__l"),
        uP: e.h,
        className: t.$$c("data-v-e5cb6391")
      }, null, 1, 0) : o], 4)
    }
  })), window.app["pages/index/index"] = $m_PagesIndexIndex_6157c47a, window.$m_ComponentsQmscrollxbooklistIndex_fee09340 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$sg,
      o = a.renderList,
      n = a.resolveBuiltinComponent,
      A = Yaw,
      d = A.Fragment,
      r = A.createVNode,
      s = A.VOID,
      c = n("tt-view"),
      l = n("tt-scroll-view");
    t.scopeId = "tt-s--uCTQCP-", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-book-card");
      return r(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-5ae3cb7d " + (e.c && "content-wrap"))
      }, r(l, {
        scrollX: e.b,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-5ae3cb7d")
      }, r(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-scrollx-book-list data-v-5ae3cb7d")
      }, r(d, null, o(e.a, (function (e, o) {
        return r(c, {
          bindtap: t.$$eventBinder(i(e, "d")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("data-v-5ae3cb7d")
        }, i(e, "b") ? r(a, {
          uI: i(e, "a"),
          bind__l: t.$$eventBinder("__l"),
          uP: i(e, "b"),
          className: t.$$c("data-v-5ae3cb7d")
        }, null, 1, 0) : s, 2, i(e, "c"))
      })), 8), 2), 2), 2)
    }
  })), window.app["components/qm-scrollx-book-list/index"] = $m_ComponentsQmscrollxbooklistIndex_fee09340, window.$m_ComponentsQmbookcardIndex_58b0c28f = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$ss,
      o = a.resolveBuiltinComponent,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = n.Fragment,
      s = o("tt-view"),
      c = o("tt-image");
    t.scopeId = "tt-s-WLDCj8ql", t.render = function (e, t) {
      var a = t.$$resolveComponent("q-theme-overlay");
      return A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-book-card data-v-fbcfa562")
      }, A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-book-item data-v-fbcfa562")
      }, [A(s, {
        style: "width:" + e.k,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-cover data-v-fbcfa562")
      }, [A(s, {
        style: "width:" + e.g + ";height:" + e.h,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-image-container data-v-fbcfa562")
      }, [e.a ? A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("default-station data-v-fbcfa562")
      }, i(e.b), 16, 0) : d, e.f ? A(a, {
        uS: ["d"],
        uI: "fbcfa562-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.f,
        className: t.$$c("data-v-fbcfa562"),
        $$slots: {
          default: A(r, null, [A(c, {
            lazyLoad: !0,
            src: e.c,
            __dirname: t.__dirname,
            bindload: t.$$eventBinder(e.d),
            hidden: !e.e,
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("book-image data-v-fbcfa562")
          })], 4)
        }
      }, null, 1, 0) : d], 4), e.i ? A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-title g-ellipsis-clamp-2 vertical-class data-v-fbcfa562")
      }, i(e.j), 16, 0) : d], 4), e.l ? A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-info data-v-fbcfa562")
      }, [A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-title g-ellipsis-clamp-1 data-v-fbcfa562 " + (e.n && "history-class") + " " + (e.o && "normal-class") + " " + (e.p && "title-dark"))
      }, i(e.m), 16), e.q ? A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-brief-introduce book-introduction g-ellipsis-clamp-2 data-v-fbcfa562 " + (e.s && "text-dark"))
      }, i(e.r), 16, 0) : d, A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-brief-introduce data-v-fbcfa562 " + (e.v && "text-dark"))
      }, i(e.t), 16)], 4, 0) : d], 4), 2)
    }
  })), window.app["components/qm-book-card/index"] = $m_ComponentsQmbookcardIndex_58b0c28f, window.$m_NodemodulesRepoQmcomponentsSrcQthemeoverlayIndex_2ae3a8c7 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.VOID,
      o = a.createVNode,
      n = Tmar,
      A = n.renderSlot,
      d = (0, n.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-KuOox0NS", t.render = function (e, t) {
      return o(d, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-theme-overlay data-v-7fc25c26")
      }, [A(t.$$slots, "default", i, {}), e.a ? o(d, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-theme-overlay-mask data-v-7fc25c26")
      }, null, 1, 0) : i], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-theme-overlay/index"] = $m_NodemodulesRepoQmcomponentsSrcQthemeoverlayIndex_2ae3a8c7, window.$m_PagesReadhistoryIndex_0f0b9da5 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$sg,
      n = a.renderList,
      A = Yaw,
      d = A.createVNode,
      r = A.Fragment,
      s = A.VOID,
      c = i("tt-text"),
      l = i("tt-view");
    t.scopeId = "tt-s-Dwudpfb5", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-book-card"),
        i = t.$$resolveComponent("qm-empty");
      return e.a ? d(l, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("container data-v-93f6347c")
      }, [d(l, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("tool-bar g-flex-between-center data-v-93f6347c")
      }, d(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("g-fw-600 g-fs-42 data-v-93f6347c")
      }, "最近阅读", 16), 2), d(l, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-93f6347c")
      }, d(r, null, n(e.b, (function (e, i) {
        return d(l, {
          bindtap: t.$$eventBinder(o(e, "d")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("book-card data-v-93f6347c")
        }, o(e, "b") ? d(a, {
          uI: o(e, "a"),
          bind__l: t.$$eventBinder("__l"),
          uP: o(e, "b"),
          className: t.$$c("data-v-93f6347c")
        }, null, 1, 0) : s, 2, o(e, "c"))
      })), 8), 2)], 4, 0) : e.c ? d(i, {
        bindbtnClick: t.$$eventBinder(e.d),
        uI: "93f6347c-1",
        bind__l: t.$$eventBinder("__l"),
        uP: e.e,
        className: t.$$c("data-v-93f6347c")
      }, null, 1, 1) : d(i, {
        bindbtnClick: t.$$eventBinder(e.f),
        uI: "93f6347c-2",
        bind__l: t.$$eventBinder("__l"),
        uP: e.g || "",
        className: t.$$c("data-v-93f6347c")
      }, null, 1, 2)
    }
  })), window.app["pages/read-history/index"] = $m_PagesReadhistoryIndex_0f0b9da5, window.$m_PagesReaderIndex_863a30e9 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = (0, Tmar.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-hjow6V9S", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-pay-panel"),
        A = t.$$resolveComponent("final-chapter"),
        d = t.$$resolveComponent("q-reader");
      return e.h ? i(d, {
        uS: ["qReaderBottom"],
        uR: "refReader",
        uI: "c26bce53-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.h,
        className: t.$$c("r data-v-c26bce53"),
        $$slots: {
          qReaderBottom: i(n, {
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("")
          }, [e.a ? i(a, {
            bindpaySuccess: t.$$eventBinder(e.b),
            bindpayFail: t.$$eventBinder(e.c),
            uI: "c26bce53-1,c26bce53-0",
            bind__l: t.$$eventBinder("__l"),
            uP: e.d,
            className: t.$$c("data-v-c26bce53")
          }, null, 1, 0) : o, e.e ? i(A, {
            uI: "c26bce53-2,c26bce53-0",
            bind__l: t.$$eventBinder("__l"),
            uP: e.f,
            className: t.$$c("js-final-chapter data-v-c26bce53")
          }, null, 1, 0) : o], 4)
        }
      }, null, 1, 0) : o
    }
  })), window.app["pages/reader/index"] = $m_PagesReaderIndex_863a30e9, window.$m_NodemodulesRepoQmcomponentsSrcQreaderIndex_1be896b2 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.VOID,
      o = a.createVNode,
      n = a.Fragment,
      A = Tmar,
      d = A.renderSlot,
      r = (0, A.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-G-iWshx0", t.render = function (e, t) {
      var a = t.$$resolveComponent("chapter-content"),
        A = t.$$resolveComponent("setting");
      return o(n, null, [o(r, {
        bindtap: t.$$eventBinder(e.e),
        "capture-bindtouchmove": t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("")
      }, e.d ? o(a, {
        uS: ["qReaderTop", "qReaderBottom"],
        uR: "refChapterContent",
        uI: "47793152-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.d,
        className: t.$$c("r"),
        $$slots: {
          qReaderTop: o(r, {
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("")
          }, d(t.$$slots, "qReaderTop", i, {}), 2),
          qReaderBottom: o(r, {
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("")
          }, [e.a ? d(t.$$slots, "qReaderBottomStuck", i, {}, 0) : i, d(t.$$slots, "qReaderBottom", i, {})], 4)
        }
      }, null, 1, 0) : i, 2), e.h ? o(A, {
        bindchangeChapter: t.$$eventBinder(e.g),
        uI: "47793152-1",
        bind__l: t.$$eventBinder("__l"),
        uP: e.h,
        className: t.$$c("")
      }, null, 1, 0) : i], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/index"] = $m_NodemodulesRepoQmcomponentsSrcQreaderIndex_1be896b2, window.$m_NodemodulesRepoQmcomponentsSrcQreaderChaptercontent_1874b173 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.VOID,
      o = a.Fragment,
      n = a.createVNode,
      A = Tmar,
      d = A.renderSlot,
      r = A.$sg,
      s = A.renderList,
      c = A.resolveBuiltinComponent,
      l = A.$ss,
      _ = c("tt-view"),
      p = c("tt-text"),
      m = c("tt-scroll-view");
    t.scopeId = "tt-s-GHSxc1uU", t.render = function (e, t) {
      return n(m, {
        style: e.c,
        scrollY: !0,
        lowerThreshold: 500,
        bindscrolltolower: t.$$eventBinder(e.d),
        showScrollbar: !1,
        enhanced: !0,
        refresherEnabled: e.e,
        bindrefresherrefresh: t.$$eventBinder(e.f),
        refresherTriggered: e.g,
        scrollIntoView: e.h,
        scrollTop: e.i,
        refresherBackground: e.j,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-reader")
      }, [d(t.$$slots, "qReaderTop", i, {}), n(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-reader-content " + e.b)
      }, n(o, null, s(e.a, (function (e, a) {
        return n(o, {
          className: t.$$c("")
        }, r(e, "a") ? n(_, {
          style: "height:" + r(e, "b"),
          id: r(e, "c"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("")
        }, null, 1, 0) : n(_, {
          "data-index": r(e, "j"),
          id: r(e, "k"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("chapter-item")
        }, [n(p, {
          "data-index": "-1",
          "data-id": r(e, "e"),
          style: r(e, "f"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("js-chapter-item chapter-item-title")
        }, l(r(e, "d")), 16), n(o, null, s(r(e, "g"), (function (a, i) {
          return n(p, {
            style: r(e, "h"),
            "data-index": r(a, "c"),
            "data-id": r(e, "i"),
            id: r(a, "d"),
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("js-chapter-item chapter-item-text")
          }, l(r(a, "a")), 16, r(a, "b"))
        })), 8)], 4, 1), 2, r(e, "l"))
      })), 8), 2), d(t.$$slots, "qReaderBottom", i, {})], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/chapter-content"] = $m_NodemodulesRepoQmcomponentsSrcQreaderChaptercontent_1874b173, window.$m_NodemodulesRepoQmcomponentsSrcQreaderSetting_75b0dafc = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$sg,
      o = a.renderList,
      n = a.resolveBuiltinComponent,
      A = a.$ss,
      d = Yaw,
      r = d.Fragment,
      s = d.createVNode,
      c = d.VOID,
      l = n("tt-text"),
      _ = n("tt-view");
    t.scopeId = "tt-s-dbDa-IM5", t.render = function (e, t) {
      var a = t.$$resolveComponent("setting-box"),
        n = t.$$resolveComponent("book-info"),
        d = t.$$resolveComponent("chapter-list"),
        p = t.$$resolveComponent("q-popup");
      return s(r, null, [s(_, {
        style: e.b,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("safe-area data-v-d3078003 " + (e.c && "transation-show"))
      }, s(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("set-buttons data-v-d3078003")
      }, s(r, null, o(e.a, (function (e, a) {
        return s(_, {
          bindtap: t.$$eventBinder(i(e, "d")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("set-buttons-item g-flex-1 data-v-d3078003")
        }, [s(l, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("qm-iconfont data-v-d3078003 " + i(e, "a"))
        }), s(l, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("set-buttons-item-text data-v-d3078003")
        }, A(i(e, "b")), 16)], 4, i(e, "c"))
      })), 8), 2), 2), e.d ? s(_, {
        style: e.i,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("safe-area change-btn-wrapper data-v-d3078003 " + (e.j && "transation-show"))
      }, s(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("change-btn g-flex data-v-d3078003")
      }, [s(l, {
        style: "color:" + e.e,
        bindtap: t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("change-btn-item g-flex-1 data-v-d3078003")
      }, "上一章", 16), s(l, {
        style: "color:" + e.g,
        bindtap: t.$$eventBinder(e.h),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("change-btn-item g-flex-1 data-v-d3078003")
      }, "下一章", 16)], 4), 2, 0) : c, s(_, {
        style: e.l,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("setting-popup data-v-d3078003 " + (e.m && "transation-show"))
      }, e.k ? s(a, {
        uI: "d3078003-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.k,
        className: t.$$c("data-v-d3078003")
      }, null, 1, 0) : c, 2), e.s ? s(p, {
        uS: ["d"],
        bindopened: t.$$eventBinder(e.p),
        bindclosed: t.$$eventBinder(e.q),
        uI: "d3078003-1",
        bind__l: t.$$eventBinder("__l"),
        bindupdateModelValue: t.$$eventBinder(e.r),
        uP: e.s,
        className: t.$$c("data-v-d3078003"),
        $$slots: {
          default: s(r, null, [e.n ? s(_, {
            style: e.o + ";border:none",
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("pop-box data-v-d3078003")
          }, [s(n, {
            uI: "d3078003-2,d3078003-1",
            bind__l: t.$$eventBinder("__l"),
            className: t.$$c("data-v-d3078003")
          }), s(d, {
            uI: "d3078003-3,d3078003-1",
            bind__l: t.$$eventBinder("__l"),
            className: t.$$c("data-v-d3078003")
          })], 4, 0) : c], 4)
        }
      }, null, 1, 0) : c], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/setting"] = $m_NodemodulesRepoQmcomponentsSrcQreaderSetting_75b0dafc, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbox_110c734f = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = (0, Tmar.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-EQxzT0a6", t.render = function (e, t) {
      var a = t.$$resolveComponent("set-font-size"),
        A = t.$$resolveComponent("set-background");
      return i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-set-box")
      }, [e.a ? i(a, {
        uI: "67ecc917-0",
        bind__l: t.$$eventBinder("__l"),
        className: t.$$c("")
      }, null, 1, 0) : o, e.b ? i(A, {
        uI: "67ecc917-1",
        bind__l: t.$$eventBinder("__l"),
        uP: e.c,
        className: t.$$c("")
      }, null, 1, 0) : o], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/components/set-box"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbox_110c734f, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetfontsize_0c534fe3 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = Yaw.createVNode,
      A = i("tt-text"),
      d = i("tt-view");
    t.scopeId = "tt-s-DFNP4yIv", t.render = function (e, t) {
      return n(d, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-set-font-size data-v-3ce71cd1")
      }, [n(A, {
        style: "color:" + e.a,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("text title data-v-3ce71cd1")
      }, "字号", 16), n(d, {
        style: e.b,
        bindtap: t.$$eventBinder(e.d),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("text-button data-v-3ce71cd1 " + (e.c && "text-button-disabled"))
      }, n(A, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-3ce71cd1")
      }, "A -", 16), 2), n(A, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("text data-v-3ce71cd1")
      }, o(e.e), 16), n(d, {
        style: e.f,
        bindtap: t.$$eventBinder(e.h),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("text-button data-v-3ce71cd1 " + (e.g && "text-button-disabled"))
      }, n(A, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-3ce71cd1")
      }, "A +", 16), 2)], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/components/set-font-size"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetfontsize_0c534fe3, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbackground_5aa42e47 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$sg,
      n = a.renderList,
      A = Yaw,
      d = A.createVNode,
      r = A.Fragment,
      s = A.VOID,
      c = i("tt-text"),
      l = i("tt-view");
    t.scopeId = "tt-s-WqQuRwB8", t.render = function (e, t) {
      return d(l, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-set-font-size data-v-92150a92")
      }, [d(c, {
        style: "color:" + e.a,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("text title data-v-92150a92")
      }, "背景", 16), d(l, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("color-buttons data-v-92150a92")
      }, d(r, null, n(e.b, (function (e, a) {
        return d(l, {
          style: "background-color:" + o(e, "c") + ";border-color:" + o(e, "d"),
          bindtap: t.$$eventBinder(o(e, "e")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("color-button g-flex-center-center data-v-92150a92")
        }, o(e, "a") ? d(l, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("icon-night-skin qm-iconfont data-v-92150a92")
        }, null, 1, 0) : s, 2, o(e, "b"))
      })), 8), 2)], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/components/set-background"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbackground_5aa42e47, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsBookinfo_73f89793 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = a.Fragment,
      A = Tmar,
      d = A.$ss,
      r = A.resolveBuiltinComponent,
      s = r("tt-text"),
      c = r("tt-view"),
      l = r("tt-image");
    t.scopeId = "tt-s-c-iXk5ow", t.render = function (e, t) {
      var a = t.$$resolveComponent("q-image"),
        A = t.$$resolveComponent("q-theme-overlay");
      return i(c, {
        style: e.o,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-info data-v-af4da369")
      }, [i(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-info-content data-v-af4da369")
      }, [e.c ? i(A, {
        uS: ["d"],
        uI: "af4da369-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.c,
        className: t.$$c("book-image data-v-af4da369"),
        $$slots: {
          default: i(n, null, [e.b ? i(a, {
            style: e.a,
            uI: "af4da369-1,af4da369-0",
            bind__l: t.$$eventBinder("__l"),
            uP: e.b,
            className: t.$$c("data-v-af4da369")
          }, null, 1, 0) : o], 4)
        }
      }, null, 1, 0) : o, i(c, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-message data-v-af4da369")
      }, [i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-af4da369 book-title " + e.e)
      }, d(e.d), 16), i(s, {
        style: e.g,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-author data-v-af4da369")
      }, d(e.f), 16)], 4), e.j ? i(A, {
        uS: ["d"],
        uI: "af4da369-2",
        bind__l: t.$$eventBinder("__l"),
        uP: e.j,
        className: t.$$c("data-v-af4da369"),
        $$slots: {
          default: i(n, null, [e.h ? i(l, {
            src: e.i,
            __dirname: t.__dirname,
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("book-icon data-v-af4da369")
          }, null, 1, 0) : o], 4)
        }
      }, null, 1, 0) : o], 4), e.k ? i(s, {
        style: e.n,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-bottom-message data-v-af4da369")
      }, d(e.l) + " 共" + d(e.m) + "章", 16, 0) : o], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/components/book-info"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsBookinfo_73f89793, window.$m_NodemodulesRepoQmcomponentsSrcQimageIndex_51d0c26c = createCommonjsModule((function (e, t) {
    var a = Tmar.resolveBuiltinComponent,
      i = Yaw.createVNode,
      o = a("tt-image"),
      n = a("tt-view");
    t.scopeId = "tt-s-UdDCbDCS", t.render = function (e, t) {
      return i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-image-bg data-v-bbadde69")
      }, [i(o, {
        hidden: !e.a,
        binderror: t.$$eventBinder(e.b),
        src: e.c,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-image data-v-bbadde69")
      }), i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("q-image-border data-v-bbadde69")
      })], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-image/index"] = $m_NodemodulesRepoQmcomponentsSrcQimageIndex_51d0c26c, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsChapterlist_a1aa7439 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$sg,
      o = a.renderList,
      n = a.$ss,
      A = a.resolveBuiltinComponent,
      d = Yaw,
      r = d.Fragment,
      s = d.createVNode,
      c = d.VOID,
      l = A("tt-text"),
      _ = A("tt-image"),
      p = A("tt-view"),
      m = A("tt-scroll-view");
    t.scopeId = "tt-s-oap0OZ5W", t.render = function (e, t) {
      var a = t.$$resolveComponent("q-theme-overlay");
      return s(m, {
        scrollY: "true",
        scrollTop: e.d,
        bindscroll: t.$$eventBinder(e.e),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("chapter-list data-v-3401af1a")
      }, [s(p, {
        style: "transform:" + e.b,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-3401af1a")
      }, s(r, null, o(e.a, (function (e, o) {
        return s(p, {
          bindtap: t.$$eventBinder(i(e, "j")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("chapter-list-item data-v-3401af1a")
        }, [s(l, {
          style: i(e, "c"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("chapter-list-item-text data-v-3401af1a " + (i(e, "b") && "chapter-list-item-active"))
        }, n(i(e, "a")), 16), i(e, "d") ? s(r, {
          className: t.$$c("")
        }, i(e, "e") ? s(l, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("qm-iconfont icon-lock chapter-icon-font data-v-3401af1a")
        }, null, 1, 0) : s(a, {
          uS: ["d"],
          uI: i(e, "g"),
          bind__l: t.$$eventBinder("__l"),
          uP: i(e, "h") || "",
          className: t.$$c("chapter-icon data-v-3401af1a"),
          $$slots: {
            default: s(r, null, [s(_, {
              src: i(e, "f"),
              __dirname: t.__dirname,
              __fields: t.__fields,
              __bridge: t.__bridge,
              className: t.$$c("chapter-icon-image data-v-3401af1a")
            })], 4)
          }
        }, null, 1, 1), 2, 0) : c], 4, i(e, "i"))
      })), 8), 2), s(p, {
        style: "height:" + e.c,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("chapter-scroll-wrapper data-v-3401af1a")
      })], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/q-reader/components/chapter-list"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsChapterlist_a1aa7439, window.$m_NodemodulesRepoQmcomponentsSrcQpopupIndex_1bc3c1ec = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.renderSlot,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = n.Fragment,
      s = i("tt-view");
    t.scopeId = "tt-s-G8PB7ISr", t.render = function (e, t) {
      var a = t.$$resolveComponent("uni-popup");
      return e.k ? A(a, {
        uS: ["d"],
        uR: "refPopup",
        bindmaskClick: t.$$eventBinder(e.j),
        uI: "e9af1c21-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.k,
        className: t.$$c("q-popup r data-v-e9af1c21"),
        $$slots: {
          default: A(r, null, [e.a ? A(r, {
            className: t.$$c("")
          }, A(s, {
            style: e.g + ";" + e.h,
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("q-popup-content data-v-e9af1c21")
          }, [A(s, {
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("control g-flex-center-center data-v-e9af1c21")
          }, A(s, {
            style: "background-color:" + e.b,
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("control-bar data-v-e9af1c21")
          }), 2), A(s, {
            style: "height:" + e.c,
            bindtouchstart: t.$$eventBinder(e.d),
            bindtouchmove: t.$$eventBinder(e.e),
            bindtouchend: t.$$eventBinder(e.f),
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("control-area data-v-e9af1c21")
          }), o(t.$$slots, "default", d, {})], 4), 2, 0) : A(r, {
            className: t.$$c("")
          }, o(t.$$slots, "default", d, {}), 2, 1)], 4)
        }
      }, null, 1, 0) : d
    }
  })), window.app["node-modules/@repo/qm-components/src/q-popup/index"] = $m_NodemodulesRepoQmcomponentsSrcQpopupIndex_1bc3c1ec, window.$m_NodemodulesDcloudioUniuiLibUnipopupUnipopup_1e59b06f = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = a.Fragment,
      A = Tmar,
      d = A.renderSlot,
      r = (0, A.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-Hlmwb0Nr", t.render = function (e, t) {
      var a = t.$$resolveComponent("uni-transition");
      return e.a ? i(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("uni-popup " + e.k + " " + e.l)
      }, i(r, {
        bindtouchstart: t.$$eventBinder(e.j),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("")
      }, [e.b ? i(a, {
        bindclick: t.$$eventBinder(e.c),
        uI: "9e1925c2-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.d,
        className: t.$$c("")
      }, null, 1, "1") : o, e.i ? i(a, {
        uS: ["d"],
        bindclick: t.$$eventBinder(e.h),
        uI: "9e1925c2-1",
        bind__l: t.$$eventBinder("__l"),
        uP: e.i,
        className: t.$$c(""),
        $$slots: {
          default: i(n, null, [i(r, {
            style: e.e,
            bindtap: t.$$eventBinder(e.g),
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("uni-popup__wrapper " + e.f)
          }, d(t.$$slots, "default", o, {}), 2)], 4)
        }
      }, null, 1, "2") : o], 4), 2, 0) : o
    }
  })), window.app["node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"] = $m_NodemodulesDcloudioUniuiLibUnipopupUnipopup_1e59b06f, window.$m_NodemodulesDcloudioUniuiLibUnitransitionUnitransition_8aed75fb = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.VOID,
      o = a.createVNode,
      n = Tmar,
      A = n.renderSlot,
      d = (0, n.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-iu11--To", t.render = function (e, t) {
      return o(d, {
        hidden: !e.a,
        ref: "ani",
        animation: e.b,
        style: e.d,
        bindtap: t.$$eventBinder(e.e),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c(e.c)
      }, A(t.$$slots, "default", i, {}), 2)
    }
  })), window.app["node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"] = $m_NodemodulesDcloudioUniuiLibUnitransitionUnitransition_8aed75fb, window.$m_ComponentsQmpaypanelIndex_b040e3a3 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = a.Fragment,
      A = Tmar,
      d = A.$sg,
      r = A.renderList,
      s = (0, A.resolveBuiltinComponent)("tt-view");
    t.scopeId = "tt-s-sEDjo2an", t.render = function (e, t) {
      var a = t.$$resolveComponent("panel-header"),
        A = t.$$resolveComponent("qm-pay-card"),
        c = t.$$resolveComponent("q-theme-overlay"),
        l = t.$$resolveComponent("purchase-tips"),
        _ = t.$$resolveComponent("purchase-panel");
      return i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-a5a2e6c5 qm-pay-panel " + e.i)
      }, [e.a ? i(n, {
        className: t.$$c("")
      }, i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("js-observer-panel data-v-a5a2e6c5")
      }, [e.b ? i(a, {
        uI: "a5a2e6c5-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.b,
        className: t.$$c("data-v-a5a2e6c5")
      }, null, 1, 0) : o, e.c ? i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("recharge-panel data-v-a5a2e6c5")
      }, i(n, null, r(e.d, (function (a, r) {
        return i(s, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("data-v-a5a2e6c5")
        }, e.e ? i(c, {
          uS: ["d"],
          uI: d(a, "d"),
          bind__l: t.$$eventBinder("__l"),
          uP: e.e,
          className: t.$$c("data-v-a5a2e6c5"),
          $$slots: {
            default: i(n, null, [d(a, "c") ? i(A, {
              bindclick: t.$$eventBinder(d(a, "a")),
              uI: d(a, "b"),
              bind__l: t.$$eventBinder("__l"),
              uP: d(a, "c"),
              className: t.$$c("data-v-a5a2e6c5")
            }, null, 1, 0) : o], 4)
          }
        }, null, 1, 0) : o, 2, d(a, "e"))
      })), 8), 2, 0) : o, e.f ? i(l, {
        uI: "a5a2e6c5-3",
        bind__l: t.$$eventBinder("__l"),
        uP: e.f,
        className: t.$$c("data-v-a5a2e6c5")
      }, null, 1, 0) : o], 4), 2, 0) : o, e.g ? i(n, {
        className: t.$$c("")
      }, i(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("js-observer-panel data-v-a5a2e6c5")
      }, e.h ? i(_, {
        uI: "a5a2e6c5-4",
        bind__l: t.$$eventBinder("__l"),
        uP: e.h,
        className: t.$$c("data-v-a5a2e6c5")
      }, null, 1, 0) : o, 2), 2, 0) : o], 4)
    }
  })), window.app["components/qm-pay-panel/index"] = $m_ComponentsQmpaypanelIndex_b040e3a3, window.$m_ComponentsQmpaypanelComponentsPanelheader_188ca001 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = Yaw,
      A = n.createVNode,
      d = n.VOID,
      r = i("tt-view"),
      s = i("tt-text");
    t.scopeId = "tt-s-GIygARbY", t.render = function (e, t) {
      return A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-panel-header data-v-b2367512")
      }, [e.a ? A(r, {
        style: "background:" + e.b,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("linear-mask data-v-b2367512")
      }, null, 1, 0) : d, A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("title g-flex-center-center data-v-b2367512")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-b2367512 line " + e.c)
      }), A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-b2367512 text " + e.e)
      }, o(e.d), 16), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-b2367512 line right " + e.f)
      })], 4), e.g ? A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-b2367512 info g-fs-27 g-flex-center-center " + e.i)
      }, o(e.h), 16, 0) : d], 4)
    }
  })), window.app["components/qm-pay-panel/components/panel-header"] = $m_ComponentsQmpaypanelComponentsPanelheader_188ca001, window.$m_ComponentsQmpaypanelComponentsPurchasepanel_1ba621d2 = createCommonjsModule((function (e, t) {
    var a = Yaw,
      i = a.createVNode,
      o = a.VOID,
      n = a.Fragment,
      A = Tmar.resolveBuiltinComponent,
      d = A("tt-view"),
      r = A("tt-image");
    t.scopeId = "tt-s-G6Yh0rmv", t.render = function (e, t) {
      var a = t.$$resolveComponent("panel-header"),
        A = t.$$resolveComponent("q-theme-overlay");
      return i(d, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("purchase-panel-container data-v-a18c2d2b")
      }, [e.a ? i(a, {
        uI: "a18c2d2b-0",
        bind__l: t.$$eventBinder("__l"),
        uP: e.a,
        className: t.$$c("data-v-a18c2d2b")
      }, null, 1, 0) : o, e.c ? i(A, {
        uS: ["d"],
        uI: "a18c2d2b-1",
        bind__l: t.$$eventBinder("__l"),
        uP: e.c,
        className: t.$$c("data-v-a18c2d2b"),
        $$slots: {
          default: i(n, null, [i(d, {
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("purchase-panel data-v-a18c2d2b")
          }, i(d, {
            catchtap: t.$$eventBinder(e.b),
            __fields: t.__fields,
            __bridge: t.__bridge,
            className: t.$$c("panel-btn g-flex-center-center g-fw-600 g-fs-33 data-v-a18c2d2b")
          }, " 购买 ", 16), 2)], 4)
        }
      }, null, 1, 0) : o, i(d, {
        catchtap: t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("panel-footer g-flex-center-center data-v-a18c2d2b")
      }, [i(r, {
        src: e.d,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("radio data-v-a18c2d2b")
      }), i(d, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-a18c2d2b buy-next g-fs-25 " + e.e)
      }, " 自动购买下一章 ", 16)], 4)], 4)
    }
  })), window.app["components/qm-pay-panel/components/purchase-panel"] = $m_ComponentsQmpaypanelComponentsPurchasepanel_1ba621d2, window.$m_PagesReaderComponentsFinalchapter_05fa7fa5 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = a.$sg,
      A = a.renderList,
      d = Yaw,
      r = d.createVNode,
      s = d.Fragment,
      c = d.VOID,
      l = d.createText,
      _ = i("tt-text"),
      p = i("tt-view");
    t.scopeId = "tt-s-Bfp-pSlN", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-book-card"),
        i = t.$$resolveComponent("qm-icon");
      return r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("final-chapter-container data-v-859a884d")
      }, [e.a ? r(s, {
        className: t.$$c("")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("chapter-title g-fw-600 data-v-859a884d " + (e.c && "t-dark"))
      }, [r(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left data-v-859a884d")
      }, "看过《", 16), r(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("name data-v-859a884d")
      }, o(e.b), 16), r(_, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("right data-v-859a884d")
      }, "》的人也喜欢", 16)], 4), r(s, null, A(e.d, (function (e, i) {
        return r(p, {
          catchtap: t.$$eventBinder(n(e, "d")),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("data-v-859a884d")
        }, n(e, "b") ? r(a, {
          uI: n(e, "a"),
          bind__l: t.$$eventBinder("__l"),
          uP: n(e, "b"),
          className: t.$$c("data-v-859a884d")
        }, null, 1, 0) : c, 2, n(e, "c"))
      })), 8)], 4, 0) : c, r(p, {
        catchtap: t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("more g-fs-33 g-flex-center-center data-v-859a884d " + (e.e && "m-dark"))
      }, [l(" 去书城看更多 "), r(i, {
        uS: ["d"],
        uI: "859a884d-1",
        bind__l: t.$$eventBinder("__l"),
        className: t.$$c("arrow-right data-v-859a884d"),
        $$slots: {
          default: r(s, null, [l("")], 4)
        }
      })], 4)], 4)
    }
  })), window.app["pages/reader/components/final-chapter"] = $m_PagesReaderComponentsFinalchapter_05fa7fa5, window.$m_PagesMineIndex_e2647f73 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.resolveBuiltinComponent,
      o = a.$ss,
      n = a.$sg,
      A = a.renderList,
      d = Yaw,
      r = d.createVNode,
      s = d.VOID,
      c = d.createText,
      l = d.Fragment,
      _ = i("tt-image"),
      p = i("tt-view"),
      m = i("tt-text"),
      g = i("tt-button");
    t.scopeId = "tt-s-4mR-cwG3", t.render = function (e, t) {
      var a = t.$$resolveComponent("qm-icon"),
        i = t.$$resolveComponent("how-to-find-me"),
        d = t.$$resolveComponent("uni-popup");
      return r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("mine-page g-flex-column data-v-d168dbb4")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("mine-avatar data-v-d168dbb4")
      }, [r(_, {
        src: e.a,
        __dirname: t.__dirname,
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("avatar data-v-d168dbb4")
      }), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("user-info data-v-d168dbb4")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("user-name data-v-d168dbb4")
      }, o(e.b), 16), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("user-id data-v-d168dbb4")
      }, "用户ID：" + o(e.c), 16)], 4)], 4), r(p, {
        bindtap: t.$$eventBinder(e.j),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-info data-v-d168dbb4")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-label data-v-d168dbb4")
      }, e.d ? r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-label-text data-v-d168dbb4")
      }, "开通会员 尊享全场免费读", 16, 0) : e.e ? r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-label-text data-v-d168dbb4")
      }, "已开通会员 " + o(e.f) + "到期", 16, 1) : e.g ? r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-label-text data-v-d168dbb4")
      }, "您的会员已于 " + o(e.h) + "到期", 16, 2) : r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-label-text data-v-d168dbb4")
      }, "已开通会员", 16, 3), 2), e.i ? r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-button data-v-d168dbb4")
      }, "立即开通", 16, 0) : r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("vip-button data-v-d168dbb4")
      }, "续费会员", 16, 1)], 4), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-currency data-v-d168dbb4")
      }, r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-d168dbb4")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-currenccy-title data-v-d168dbb4")
      }, "我的书币", 16), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("book-currenccy-number data-v-d168dbb4")
      }, [r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("nubmer-text data-v-d168dbb4")
      }, [c(o(e.k) + " "), r(m, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-d168dbb4")
      }, "书币", 16)], 4), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("nubmer-text data-v-d168dbb4")
      }, [c(o(e.l) + " "), r(m, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-d168dbb4")
      }, "赠币", 16)], 4)], 4)], 4), 2), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("mine-menu data-v-d168dbb4")
      }, r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("card data-v-d168dbb4")
      }, r(l, null, A(e.m, (function (e, i) {
        return r(p, {
          bindtap: t.$$eventBinder(n(e, "g")),
          hidden: !n(e, "i"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("card-item data-v-d168dbb4")
        }, [r(g, {
          openType: "byteHi",
          hidden: !n(e, "a"),
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("btn-contact data-v-d168dbb4")
        }), r(p, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("card-item-left data-v-d168dbb4")
        }, [n(e, "c") ? r(a, {
          uI: n(e, "b"),
          bind__l: t.$$eventBinder("__l"),
          uP: n(e, "c"),
          className: t.$$c("card-item-left-icon data-v-d168dbb4")
        }, null, 1, 0) : s, r(m, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("card-item-left-title data-v-d168dbb4")
        }, o(n(e, "d")), 16)], 4), r(p, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("card-item-right data-v-d168dbb4")
        }, [r(m, {
          __fields: t.__fields,
          __bridge: t.__bridge,
          className: t.$$c("card-item-right-title data-v-d168dbb4")
        }, o(n(e, "e")), 16), r(a, {
          uS: ["d"],
          uI: n(e, "f"),
          bind__l: t.$$eventBinder("__l"),
          className: t.$$c("arraw-right data-v-d168dbb4"),
          $$slots: {
            default: r(l, null, [c("")], 4)
          }
        })], 4)], 4, n(e, "h"))
      })), 8), 2), 2), r(p, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("user-agent data-v-d168dbb4")
      }, [r(m, {
        bindtap: t.$$eventBinder(e.n),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-d168dbb4")
      }, "用户协议", 16), r(m, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-d168dbb4")
      }, "｜", 16), r(m, {
        bindtap: t.$$eventBinder(e.o),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-d168dbb4")
      }, "隐私政策", 16)], 4), e.r ? r(d, {
        uS: ["d"],
        uR: "pupop",
        uI: "d168dbb4-2",
        bind__l: t.$$eventBinder("__l"),
        uP: e.r,
        className: t.$$c("r data-v-d168dbb4"),
        $$slots: {
          default: r(l, null, [r(i, {
            bindclose: t.$$eventBinder(e.p),
            uI: "d168dbb4-3,d168dbb4-2",
            bind__l: t.$$eventBinder("__l"),
            className: t.$$c("data-v-d168dbb4")
          })], 4)
        }
      }, null, 1, 0) : s], 4)
    }
  })), window.app["pages/mine/index"] = $m_PagesMineIndex_e2647f73, window.$m_PagesMineComponentsHowtofindme_3eca9cc8 = createCommonjsModule((function (e, t) {
    var a = Tmar,
      i = a.$ss,
      o = a.resolveBuiltinComponent,
      n = Yaw,
      A = n.createVNode,
      d = n.createText,
      r = o("tt-view"),
      s = o("tt-text"),
      c = o("tt-image");
    t.scopeId = "tt-s-PsqcyOHY", t.render = function (e, t) {
      return A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("how-to-find-me data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-content data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-title data-v-ed782a27")
      }, "如何找到「" + i(e.a) + "」", 16), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-step data-v-ed782a27")
      }, [d(" 方法1：在抖音首页左上角点击 "), A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-iconfont menu-icon data-v-ed782a27")
      }, "", 16), d(" 找到「" + i(e.b) + "」 ")], 4), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-guide data-v-ed782a27")
      }, A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-guide-content data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("content-left data-v-ed782a27")
      }, A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-title data-v-ed782a27")
      }, "常用小程序", 16), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-item data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item-icon data-v-ed782a27")
      }), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item-text data-v-ed782a27")
      })], 4), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-app data-v-ed782a27")
      }, [A(c, {
        src: e.c,
        __dirname: t.__dirname,
        mode: "scaleToFill",
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("logo data-v-ed782a27")
      }), A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("app-name data-v-ed782a27")
      }, i(e.d), 16)], 4), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item data-v-ed782a27")
      }, [A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item-icon data-v-ed782a27")
      }), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("left-wrapper-sub-item-text data-v-ed782a27")
      })], 4)], 4)], 4), 2), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("content-right data-v-ed782a27")
      })], 4), 2), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-step mt-50 data-v-ed782a27")
      }, " 方法2：在抖音主页面右下角点击「我」，在页面中找到「我的小程序」即可找到「" + i(e.e) + "」 ", 16), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-guide data-v-ed782a27")
      }, A(c, {
        src: "https://new-media-cdn.xmkanshu.com/book-cover/1i5ct9rn5fZj8PxbEmAQaXGGYT7ej.png",
        __dirname: t.__dirname,
        mode: "scaleToFill",
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("find-me-guide-bg data-v-ed782a27")
      }), 2)], 4), A(r, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("popup-close data-v-ed782a27")
      }, A(r, {
        catchtap: t.$$eventBinder(e.f),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("close-icon-area data-v-ed782a27")
      }, A(s, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("qm-iconfont close-icon data-v-ed782a27")
      }, "", 16), 2), 2)], 4)
    }
  })), window.app["pages/mine/components/how-to-find-me"] = $m_PagesMineComponentsHowtofindme_3eca9cc8, window.$m_PagesWindowIndex_1e8fe573 = createCommonjsModule((function (e, t) {
    var a = Tmar.resolveBuiltinComponent,
      i = Yaw.createVNode,
      o = a("tt-web-view"),
      n = a("tt-view");
    t.scopeId = "tt-s-Ho-lc1s2", t.render = function (e, t) {
      return i(n, {
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("window-container data-v-cc688ed9")
      }, i(o, {
        src: e.a,
        bindload: t.$$eventBinder(e.b),
        __fields: t.__fields,
        __bridge: t.__bridge,
        className: t.$$c("data-v-cc688ed9")
      }), 2)
    }
  })), window.app["pages/window/index"] = $m_PagesWindowIndex_1e8fe573
}();
var BASE_DEVICE_WIDTH = 750,
  isIOS = navigator.userAgent.match("iPhone"),
  deviceWidth = window.screen.width || 375,
  deviceDPR = window.devicePixelRatio || 2,
  eps = 1e-4,
  rpx2px = Tmar.rpx2px || function (e) {
    return 0 === e ? 0 : (e = e / BASE_DEVICE_WIDTH * deviceWidth, 0 === (e = Math.floor(e + eps)) ? 1 !== deviceDPR && isIOS ? .5 : 1 : e)
  };

function getCss(e, t, a, i) {
  var o = "";
  return "string" == typeof e && (e = [e]), e.forEach((function (e) {
    if ("number" == typeof e) o += rpx2px(e) + "px";
    else if (Array.isArray(e)) {
      if (1 === e[0]) t && (o = o + "." + t);
      else if (2 === e[0]) {
        var n = e[1];
        if (i[n]) return "";
        i[n] = 1;
        var A = window.CSS_MAP[e[1]];
        A && (o += getCss(A, t, a, i))
      }
    } else if ("string" == typeof e) {
      if (navigator.userAgent.indexOf("webview/ByteDanceWebAppPlatform") > -1) {
        var d = 0;
        if ("function" == typeof window.getCurrentWebviewId) d = window.getCurrentWebviewId();
        e = "app.ttss" === a || "app.wxss" === a ? e.replace(/(^|\s)body(?=\{|\s)/g, ".tma-box--page #app") : e.replace(/(^|\s)body(?=\{|\s)/g, '.tma-box--page[webview-id="' + d + '"] #app')
      }
      o += e
    }
  })), o = o.replace(/%tt-\$-([a-zA-Z0-9-]+)%/g, (function (e, t) {
    return Tmar.isYawComponent("tt-" + t) ? ".tt-_-" + t : Tmar.isTmarComponent("tt-" + t) ? "tt-" + t : Tmar.supportStyleTTUser ? t + "[__ttuser]" : t
  }))
}

function putCssToHead(e, t, a) {
  if (e) {
    var i = document.createElement("style");
    i.type = "text/css";
    var o = document.head || document.getElementsByTagName("head")[0],
      n = getCss(e, a, t, {});
    i.styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n)), o.appendChild(i)
  }
}
putCssToHead(["%tt-$-view%,%tt-$-text%,%tt-$-scroll-view%{box-sizing:border-box;display:block;font-family:PingFangSC,PingFang SC;font-size:", 28, "}%tt-$-image%{display:block}.g-flex{display:flex}.g-flex-start-center{display:flex;justify-content:start;align-items:center}.g-flex-center-center{display:flex;justify-content:center;align-items:center}.g-flex-between-center{display:flex;justify-content:space-between;align-items:center}.g-flex-1{flex:1}.g-flex-wrap{flex-wrap:wrap}.g-flex-column{display:flex;flex-direction:column}.g-safe-padding-bottom{padding-bottom:content(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.g-text-nowrap{white-space:nowrap}.g-fw-600{font-weight:600}.g-fs-20{font-size:", 20, "}.g-fs-23{font-size:", 23, "}.g-fs-25{font-size:", 25, "}.g-fs-27{font-size:", 27, "}.g-fs-29{font-size:", 29, "}.g-fs-31{font-size:", 31, "}.g-fs-33{font-size:", 33, "}.g-fs-38{font-size:", 38, "}.g-fs-42{font-size:", 42, "}.g-fs-44{font-size:", 44, "}.g-fs-54{font-size:", 54, '}.g-ellipsis-clamp-1{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1}.g-ellipsis-clamp-2{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.g-ellipsis-clamp-3{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3}.g-ellipsis-clamp-4{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;line-clamp:4}.g-ellipsis-clamp-5{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5}.g-ellipsis-clamp-6{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6;line-clamp:6}.g-ellipsis-clamp-7{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:7;line-clamp:7}.g-ellipsis-clamp-8{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:8;line-clamp:8}.g-ellipsis-clamp-9{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:9;line-clamp:9}.g-ellipsis-clamp-10{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:10;line-clamp:10}@font-face{font-family:qmiconfont;src:url(data:font/ttf;base64,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AEAATABVAF4AZwAAJTIWFAYiJjQ2NzYyFhQGIiY0JTYyFhQGIiY0ATIeARQOASIuATQ+ARciDgEUHgEyPgE0LgEFMh4BFA4BIyImNDYhMh4BFA4BIyImNDYlNjIWFAYiJjQlNjIWFAYiJjQlMhYUBiImNDYCABsnJzYnJ+wTNicnNib+FBQ2JiY2JwFBPGU7O2V4ZTs7ZTwnQScnQU5BJydBAUISHhISHhIbJyf9SRIeEhIeEhsnJwJVEzYnJzYm/hQUNiYmNicBQRsnJzYnJ1knNicnNidWEyY2Jyc2ExMmNicnNgHAO2V4ZTs7ZXhlO00nQU5BJydBTkEnTRIeJB4SJzYnEh4kHhInNifsEyc2JiY2FBMnNiYmNpEnNicnNicAAAAAABIA3gABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADAAgAIgABAAAAAAAEAAgAKgABAAAAAAAFAAsAMgABAAAAAAAGAAgAPQABAAAAAAAKACsARQABAAAAAAALABMAcAADAAEECQAAACYAgwADAAEECQABABAAqQADAAEECQACAA4AuQADAAEECQADABAAxwADAAEECQAEABAA1wADAAEECQAFABYA5wADAAEECQAGABAA/QADAAEECQAKAFYBDQADAAEECQALACYBY0NyZWF0ZWQgYnkgaWNvbmZvbnRpY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgAFZW1wdHkGc2VhcmNoCmd1aWRlX21lbnUKbmlnaHRfc2tpbgtwbGFjZWhvbGRlchhhLXJhZGlvX3Vuc2VsZWN0ZWRfbm9tYWwaYS1ib29rc2hlbGZfc2VsZWN0ZWRfbm9tYWwWYS1yYWRpb19zZWxlY3RlZF9ub21hbBFzZXR0aW5nX3NlbGVjdGVkMQtwbGF5ZXJfbG9jaw1wbGF5ZXItZm9sbG93DnBsYXllci1kZXNrdG9wCGEtZmluZG1lBWNsb3NlEWEtY3VzdG9tZXJzZXJ2aWNlBGJhY2sFb2xsb3cJZGlyZWN0b3J5B2NvbGxlY3QSZGlyZWN0b3J5X3NlbGVjdGVkCGZvbnRfYmlnB2Rlc2t0b3AFbmlnaHQGcmVjb3JkB3NldHRpbmcFYWJvdXQKZm9udF9zbWFsbANkYXkAAA==) format("truetype")}.qm-iconfont{font-size:', 42, ';font-family:qmiconfont}.icon-directory:before{content:"\\e618"}.icon-directory_selected:before{content:"\\e61a"}.icon-theme-day:before{content:"\\e610"}.icon-theme-night:before{content:"\\e61d"}.icon-night-skin:before{content:"\\e626"}.icon-setting:before{content:"\\e61f"}.icon-setting_selected:before{content:"\\e622"}.icon-lock:before{content:"\\e614"}.tt-_-page::after{position:fixed;content:\'\';left:-1000px;top:-1000px;-webkit-animation:shadow-preload .1s;-webkit-animation-delay:3s;animation:shadow-preload .1s;animation-delay:3s}@-webkit-keyframes shadow-preload{0%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}100%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}}@keyframes shadow-preload{0%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}100%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}}.tt-_-page{--status-bar-height:25px;--top-window-height:0px;--window-top:0px;--window-bottom:0px;--window-left:0px;--window-right:0px;--window-magin:0px}[bind-data-c-h="true"]{display: none !important;}'], "app.wxss", ""), putCssToHead(['@font-face{font-family:iconfont;src:url(data:font/ttf;base64,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AEAATABVAF4AZwAAJTIWFAYiJjQ2NzYyFhQGIiY0JTYyFhQGIiY0ATIeARQOASIuATQ+ARciDgEUHgEyPgE0LgEFMh4BFA4BIyImNDYhMh4BFA4BIyImNDYlNjIWFAYiJjQlNjIWFAYiJjQlMhYUBiImNDYCABsnJzYnJ+wTNicnNib+FBQ2JiY2JwFBPGU7O2V4ZTs7ZTwnQScnQU5BJydBAUISHhISHhIbJyf9SRIeEhIeEhsnJwJVEzYnJzYm/hQUNiYmNicBQRsnJzYnJ1knNicnNidWEyY2Jyc2ExMmNicnNgHAO2V4ZTs7ZXhlO00nQU5BJydBTkEnTRIeJB4SJzYnEh4kHhInNifsEyc2JiY2FBMnNiYmNpEnNicnNicAAAAAABIA3gABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADAAgAIgABAAAAAAAEAAgAKgABAAAAAAAFAAsAMgABAAAAAAAGAAgAPQABAAAAAAAKACsARQABAAAAAAALABMAcAADAAEECQAAACYAgwADAAEECQABABAAqQADAAEECQACAA4AuQADAAEECQADABAAxwADAAEECQAEABAA1wADAAEECQAFABYA5wADAAEECQAGABAA/QADAAEECQAKAFYBDQADAAEECQALACYBY0NyZWF0ZWQgYnkgaWNvbmZvbnRpY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgAFZW1wdHkGc2VhcmNoCmd1aWRlX21lbnUKbmlnaHRfc2tpbgtwbGFjZWhvbGRlchhhLXJhZGlvX3Vuc2VsZWN0ZWRfbm9tYWwaYS1ib29rc2hlbGZfc2VsZWN0ZWRfbm9tYWwWYS1yYWRpb19zZWxlY3RlZF9ub21hbBFzZXR0aW5nX3NlbGVjdGVkMQtwbGF5ZXJfbG9jaw1wbGF5ZXItZm9sbG93DnBsYXllci1kZXNrdG9wCGEtZmluZG1lBWNsb3NlEWEtY3VzdG9tZXJzZXJ2aWNlBGJhY2sFb2xsb3cJZGlyZWN0b3J5B2NvbGxlY3QSZGlyZWN0b3J5X3NlbGVjdGVkCGZvbnRfYmlnB2Rlc2t0b3AFbmlnaHQGcmVjb3JkB3NldHRpbmcFYWJvdXQKZm9udF9zbWFsbANkYXkAAA==) format("truetype")}.iconfont', [1], ".data-v-9f030c2d", [1], "{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"], "", "tt-s-x6fpE8uV"), putCssToHead([".qm-tab", [1], ".data-v-9bcce6b4", [1], "{box-sizing:border-box;background:#f5f5f5;width:100%;position:sticky;top:0;z-index:999;display:flex;align-items:center;justify-content:space-between}.qm-tab", [1], ".main", [1], ".data-v-9bcce6b4", [1], "{height:", 109, ";padding:", 27, " ", 42, " ", 23, "}.qm-tab", [1], ".secondary", [1], ".data-v-9bcce6b4", [1], "{height:", 84, ";padding:", 17, " ", 42, " ", 0, "}.qm-tab", [1], " .purchase-config", [1], ".data-v-9bcce6b4", [1], "{font-weight:400;font-size:", 29, ";color:#666;line-height:", 46, "}.qm-tab", [1], " .qm-tab-container", [1], ".data-v-9bcce6b4", [1], "{flex:1;height:100%;display:flex;align-items:center}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".active", [1], ".data-v-9bcce6b4", [1], ':before{content:"";position:absolute;bottom:-', 7, ";left:50%;transform:translate(-50%);width:", 25, ";height:", 6.3, ";background-color:#111;border-radius:", 4, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".secondary", [1], ".data-v-9bcce6b4", [1], "{font-weight:400;font-size:", 29, ";color:#666;line-height:", 46, ";margin-right:", 50, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".secondary", [1], ".active", [1], ".data-v-9bcce6b4", [1], "{font-weight:600;font-size:", 33, ";color:#111;line-height:", 46, ";position:relative}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".main", [1], ".data-v-9bcce6b4", [1], "{font-weight:400;font-size:", 38, ";color:#666;line-height:", 52, ";margin-right:", 50, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".main", [1], ".active", [1], ".data-v-9bcce6b4", [1], "{font-weight:600;font-size:", 42, ";color:#111;line-height:", 58, ";position:relative}"], "", "tt-s-Sc5ELGLB"), putCssToHead([".content-wrap", [1], ".data-v-5ae3cb7d", [1], "{position:relative}.content-wrap", [1], ".data-v-5ae3cb7d", [1], ':after{content:"";position:absolute;top:0;right:0;width:', 30, ";height:90%;background-image:linear-gradient(to left,#FFF,transparent);z-index:100}.qm-scrollx-book-list", [1], ".data-v-5ae3cb7d", [1], "{display:flex;justify-content:flex-start}"], "", "tt-s--uCTQCP-"), putCssToHead([".qm-book-card", [1], ".data-v-fbcfa562", [1], "{overflow:hidden}.qm-book-card", [1], " %tt-$-image%", [1], ".data-v-fbcfa562", [1], "{will-change:transform}.qm-book-card", [1], " .qm-book-item", [1], ".data-v-fbcfa562", [1], "{display:flex}.qm-book-card", [1], " .qm-book-item", [1], " .book-title", [1], ".data-v-fbcfa562", [1], "{font-weight:400;font-size:", 33, ";color:#161823;line-height:", 42, "}.qm-book-card", [1], " .qm-book-item", [1], " .title-dark", [1], ".data-v-fbcfa562", [1], "{color:rgba(255,255,255,.72)}.qm-book-card", [1], " .qm-book-item", [1], " .history-class", [1], ".data-v-fbcfa562", [1], "{margin-top:", 21, ";margin-bottom:", 25, "}.qm-book-card", [1], " .qm-book-item", [1], " .normal-class", [1], ".data-v-fbcfa562", [1], "{margin-top:", 2, "}.qm-book-card", [1], " .qm-book-item", [1], " .vertical-class", [1], ".data-v-fbcfa562", [1], "{font-size:", 29, ";margin-top:", 12.5, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], ".data-v-fbcfa562", [1], "{margin-right:", 25, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image", [1], ".data-v-fbcfa562", [1], "{width:100%;height:100%;border-radius:", 12, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image-container", [1], ".data-v-fbcfa562", [1], "{border-radius:", 12, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image-container", [1], " .default-station", [1], ".data-v-fbcfa562", [1], "{width:100%;border-radius:", 12, ";height:100%;display:flex;justify-content:center;align-items:center;font-size:", 22, ";font-weight:600;color:rgba(153,153,153,.2);background-color:#f5f5f5}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], ".data-v-fbcfa562", [1], "{flex:1;height:100%}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .book-brief-introduce", [1], ".data-v-fbcfa562", [1], "{font-weight:400;font-size:", 25, ";color:#999;line-height:", 35, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .book-introduction", [1], ".data-v-fbcfa562", [1], "{margin:", 16.7, " 0}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .text-dark", [1], ".data-v-fbcfa562", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-s-WLDCj8ql"), putCssToHead([".q-theme-overlay", [1], ".data-v-7fc25c26", [1], "{position:relative;width:100%;height:100%}.q-theme-overlay-mask", [1], ".data-v-7fc25c26", [1], "{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.35);z-index:3}"], "", "tt-s-KuOox0NS"), putCssToHead([".empty-container", [1], ".data-v-b84f7c14", [1], "{display:flex;flex-direction:column;align-items:center;overflow:hidden}.empty-container", [1], " .image-wrappper", [1], ".data-v-b84f7c14", [1], "{display:flex;justify-content:center}.empty-container", [1], " .image-wrappper", [1], " .img", [1], ".data-v-b84f7c14", [1], "{width:", 308, ";height:", 138, "}.empty-container", [1], " .content", [1], ".data-v-b84f7c14", [1], "{margin-top:", 34, ";font-weight:400;font-size:", 29, ";color:#999;line-height:", 42, "}.empty-container", [1], " .btn", [1], ".data-v-b84f7c14", [1], "{display:flex;justify-content:center;align-items:center;background:linear-gradient(90deg,#ff683d,#ff2e2e);border-radius:", 42, ";margin-top:", 48, ";padding:", 19, " ", 105, "}.empty-container", [1], " .btn", [1], " .btn-text", [1], ".data-v-b84f7c14", [1], "{font-weight:600;font-size:", 33, ";color:#fff;line-height:", 46, "}.fixed-class", [1], ".data-v-b84f7c14", [1], "{position:fixed;top:50%;left:50%;z-index:100;transform:translate(-50%,-50%)}.empty-class", [1], ".data-v-b84f7c14", [1], "{padding-bottom:", 25, "}"], "", "tt-s-Lfqrozmz"), putCssToHead([".q-reader", [1], "{padding:0 ", 40, ";height:100vh}.chapter-item-title", [1], "{font-weight:500;color:#222;line-height:2em}.chapter-item-text", [1], "{margin:1em 0;text-indent:2em;color:#222;line-height:2.1;text-align:justify}"], "", "tt-s-GHSxc1uU"), putCssToHead([".safe-area", [1], ".data-v-d3078003", [1], "{position:fixed;left:0;right:0;bottom:-", 300, ";z-index:1000;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);transition:bottom .38s;background-color:#fff;color:#222}.change-btn", [1], ".data-v-d3078003", [1], "{padding-bottom:", 124, "}.change-btn-wrapper", [1], ".data-v-d3078003", [1], "{z-index:9}.change-btn-item", [1], ".data-v-d3078003", [1], "{font-size:", 24, ";line-height:", 92, ";padding-left:", 106, "}.change-btn-item", [1], ".data-v-d3078003", [1], ":last-child{text-align:right;padding-right:", 106, "}.set-buttons", [1], ".data-v-d3078003", [1], "{width:100%;height:", 120, ";display:flex;justify-content:space-around;align-items:center}.set-buttons-item", [1], ".data-v-d3078003", [1], "{padding:0 ", 30, ";text-align:center}.set-buttons-item-text", [1], ".data-v-d3078003", [1], "{margin-top:", 4, ";font-size:", 20, ";line-height:", 28, "}.setting-popup", [1], ".data-v-d3078003", [1], "{position:fixed;left:0;right:0;bottom:-", 600, ";z-index:9;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);transition:bottom .38s}.transation-show", [1], ".data-v-d3078003", [1], "{bottom:0}.pop-box", [1], ".data-v-d3078003", [1], "{padding-bottom:", 120, "}"], "", "tt-s-dbDa-IM5"), putCssToHead([".qm-set-box", [1], "{width:100%;padding:", 18, " 0 ", 130, "}"], "", "tt-s-EQxzT0a6"), putCssToHead([".qm-set-font-size", [1], ".data-v-3ce71cd1", [1], "{padding:", 22, " ", 32, ";width:100vw;display:flex;justify-content:start;align-items:center}.qm-set-font-size", [1], " .text", [1], ".data-v-3ce71cd1", [1], "{margin-right:", 32, ";font-weight:400;font-size:", 28, ";line-height:", 40, "}.qm-set-font-size", [1], " .text-button", [1], ".data-v-3ce71cd1", [1], "{flex:1;margin-right:", 32, ";padding:", 14, " ", 86, ";text-align:center;background:#f5f5f5;border-radius:40px;font-weight:bolder}.qm-set-font-size", [1], " .text-button", [1], ".data-v-3ce71cd1", [1], ":last-of-type{margin-right:0}.qm-set-font-size", [1], " .text-button-disabled", [1], " %tt-$-text%", [1], ".data-v-3ce71cd1", [1], "{opacity:.3}"], "", "tt-s-DFNP4yIv"), putCssToHead([".qm-set-font-size", [1], ".data-v-92150a92", [1], "{padding:", 22, " ", 32, ";width:100vw;display:flex;justify-content:start;align-items:center}.qm-set-font-size", [1], " .text", [1], ".data-v-92150a92", [1], "{margin-right:", 32, ";font-weight:400;font-size:", 28, ";line-height:", 40, "}.qm-set-font-size", [1], " .color-buttons", [1], ".data-v-92150a92", [1], "{flex:1;display:flex;align-items:center;justify-content:space-between}.qm-set-font-size", [1], " .color-button", [1], ".data-v-92150a92", [1], "{width:", 64, ";height:", 64, ";border-width:", 2, ";border-style:solid;border-color:rgba(0,0,0,.1);border-radius:50%}.qm-set-font-size", [1], " .icon-night-skin", [1], ".data-v-92150a92", [1], "{font-size:", 28, ";color:#565657}"], "", "tt-s-WqQuRwB8"), putCssToHead([".book-info", [1], ".data-v-af4da369", [1], "{padding:", 16, " ", 32, " ", 24, ";width:100%}.book-info-content", [1], ".data-v-af4da369", [1], "{display:flex;justify-content:start;align-items:center;overflow:hidden}.book-info-content", [1], " .book-image", [1], ".data-v-af4da369", [1], "{width:", 84, ";height:", 112, ";border-radius:", 8, ";overflow:hidden}.book-info-content", [1], " .book-message", [1], ".data-v-af4da369", [1], "{padding:0 ", 24, ";flex:1;width:calc(100% - ", 160, ")}.book-info-content", [1], " .book-title", [1], ".data-v-af4da369", [1], "{font-weight:500;font-size:", 32, ";line-height:", 44, ";text-align:left;word-break:break-word;overflow:hidden;text-overflow:ellipsis}.book-info-content", [1], " .book-author", [1], ".data-v-af4da369", [1], "{font-weight:400;font-size:", 24, ";line-height:", 34, ";text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.book-info-content", [1], " .book-icon", [1], ".data-v-af4da369", [1], "{width:", 44, ";height:", 28, "}.book-info", [1], " .book-bottom-message", [1], ".data-v-af4da369", [1], "{margin-top:", 28, ";font-weight:400;font-size:", 22, ";line-height:", 32, ";text-align:left}.book-info", [1], " .ellipsis-clamp-1", [1], ".data-v-af4da369", [1], "{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1}.book-info", [1], " .ellipsis-clamp-2", [1], ".data-v-af4da369", [1], "{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}"], "", "tt-s-c-iXk5ow"), putCssToHead([".q-image", [1], ".data-v-bbadde69", [1], "{width:100%;height:100%}.q-image-bg", [1], ".data-v-bbadde69", [1], "{width:100%;height:100%;overflow:hidden;background:#f5f5f5;position:relative}.q-image-border", [1], ".data-v-bbadde69", [1], "{position:absolute;top:0;right:0;bottom:0;left:0;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.04);z-index:2}"], "", "tt-s-UdDCbDCS"), putCssToHead([".chapter-list", [1], ".data-v-3401af1a", [1], "{padding:0 ", 32, ";width:100%;max-height:calc(70vh - ", 300, ")}.chapter-list", [1], " .chapter-scroll-wrapper", [1], ".data-v-3401af1a", [1], "{width:100%;position:absolute;top:0;left:0;z-index:-1}.chapter-list", [1], " .chapter-list-item", [1], ".data-v-3401af1a", [1], "{padding:12px 0;display:flex;justify-content:space-between;align-items:center}.chapter-list", [1], " .chapter-list-item-text", [1], ".data-v-3401af1a", [1], "{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;line-height:22px;text-align:left}.chapter-list", [1], " .chapter-list-item-active", [1], ".data-v-3401af1a", [1], "{font-weight:700}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon", [1], ".data-v-3401af1a", [1], "{margin-left:", 20, ";width:", 44, ";height:", 28, "}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon-image", [1], ".data-v-3401af1a", [1], "{width:100%;height:100%}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon-font", [1], ".data-v-3401af1a", [1], "{margin-left:", 20, "}.chapter-list", [1], " .chapter-list-item", [1], ".data-v-3401af1a", [1], ":first-child{padding-top:20px}.chapter-list", [1], " .chapter-list-item", [1], ".data-v-3401af1a", [1], ":last-child{padding-bottom:20px}"], "", "tt-s-oap0OZ5W"), putCssToHead([".q-popup-content", [1], ".data-v-e9af1c21", [1], "{max-height:80vh;overflow:hidden;border-radius:", 24, " ", 24, " 0 0;background-color:#fff}.control-area", [1], ".data-v-e9af1c21", [1], "{position:absolute;top:0;left:0;right:0;background-color:transparent;height:", 300, "}.control", [1], ".data-v-e9af1c21", [1], "{height:", 40, "}.control-bar", [1], ".data-v-e9af1c21", [1], "{margin:", 16, " auto 0;width:", 80, ";height:", 8, ";border-radius:", 8, ";background-color:rgba(0,0,0,.12)}"], "", "tt-s-G8PB7ISr"), putCssToHead([".uni-popup", [1], "{position:fixed;z-index:99}.uni-popup", [1], ".top", [1], ",.uni-popup", [1], ".left", [1], ",.uni-popup", [1], ".right", [1], "{top:0}.uni-popup", [1], " .uni-popup__wrapper", [1], "{display:block;position:relative}.uni-popup", [1], " .uni-popup__wrapper", [1], ".left", [1], ",.uni-popup", [1], " .uni-popup__wrapper", [1], ".right", [1], "{padding-top:0;flex:1}.fixforpc-z-index", [1], "{z-index:999}.fixforpc-top", [1], "{top:0}"], "", "tt-s-Hlmwb0Nr"), putCssToHead([".qm-pay-panel", [1], ".data-v-a5a2e6c5", [1], "{width:100%}.qm-pay-panel", [1], " .recharge-panel", [1], ".data-v-a5a2e6c5", [1], "{display:grid;padding-top:", 33, ";grid-template-columns:repeat(2,minmax(0,1fr));grid-column-gap:", 16, ";grid-row-gap:", 16, ";padding-bottom:", 32, "}.qm-pay-panel-fixed", [1], ".data-v-a5a2e6c5", [1], "{padding:", 33, " ", 42, " 0;position:fixed;bottom:0;left:0}"], "", "tt-s-sEDjo2an"), putCssToHead([".qm-panel-header", [1], ".data-v-b2367512", [1], "{position:relative}.qm-panel-header", [1], " .linear-mask", [1], ".data-v-b2367512", [1], "{width:100%;height:", 300, ";position:absolute;top:-", 300, ";left:0}.qm-panel-header", [1], " .title", [1], ".data-v-b2367512", [1], "{width:100%;padding-top:", 50, "}.qm-panel-header", [1], " .title", [1], " .line", [1], ".data-v-b2367512", [1], "{width:", 75, ";height:", 2, ";border:", 2, " solid;-o-border-image:linear-gradient(270deg,rgb(34,34,34),rgba(111,64,9,0)) 2 2;border-image:linear-gradient(270deg,#222,rgba(111,64,9,0)) 2 2}.qm-panel-header", [1], " .title", [1], " .line-dark", [1], ".data-v-b2367512", [1], "{-o-border-image:linear-gradient(270deg,rgba(255,255,255,.72),rgba(255,255,255,0)) 3 3;border-image:linear-gradient(270deg,rgba(255,255,255,.72),rgba(255,255,255,0)) 3 3}.qm-panel-header", [1], " .title-img", [1], ".data-v-b2367512", [1], "{width:", 75, ";height:", 42, "}.qm-panel-header", [1], " .title", [1], " .right", [1], ".data-v-b2367512", [1], "{transform:rotate(180deg)}.qm-panel-header", [1], " .title", [1], " .text", [1], ".data-v-b2367512", [1], "{padding:0 ", 25, "}.qm-panel-header", [1], " .title", [1], " .text-dark", [1], ".data-v-b2367512", [1], "{color:rgba(255,255,255,.72)}.qm-panel-header", [1], " .info", [1], ".data-v-b2367512", [1], "{width:100%;height:", 38, ";margin-top:", 10, ";font-weight:400;color:#999;line-height:", 38, "}.qm-panel-header", [1], " .info-dark", [1], ".data-v-b2367512", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-s-GIygARbY"), putCssToHead([".qm-pay-card", [1], ".data-v-cdcfe6a8", [1], "{position:relative}.qm-pay-card", [1], " .tag", [1], ".data-v-cdcfe6a8", [1], "{padding:", 4, " ", 12, " ", 2, ";font-weight:400;color:#fff;line-height:", 35, ";background:#ff5b29;border-radius:", 0, " ", 17, ";position:absolute;top:0;right:0}.qm-pay-card", [1], " .vip-tag", [1], ".data-v-cdcfe6a8", [1], "{width:", 71, ";height:", 38, ";background:linear-gradient(90deg,#3f3431,#826555);border-radius:", 0, " ", 17, ";position:absolute;top:0;right:0}.qm-pay-card", [1], " .vip-tag", [1], " .vip-img", [1], ".data-v-cdcfe6a8", [1], "{width:", 50, ";height:", 16, "}.qm-pay-card", [1], " .content", [1], ".data-v-cdcfe6a8", [1], "{width:100%;height:100%;border-radius:", 17, ";border:", 2, " solid #FFE8C7;display:flex;flex-direction:column;align-items:center}.qm-pay-card", [1], " .content", [1], " .card", [1], ".data-v-cdcfe6a8", [1], "{width:100%;flex:1}.qm-pay-card", [1], " .content", [1], " .card", [1], " .price", [1], ".data-v-cdcfe6a8", [1], "{display:flex}.qm-pay-card", [1], " .content", [1], " .card", [1], " .price", [1], " .origin-price", [1], ".data-v-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";text-decoration-line:line-through}.qm-pay-card", [1], " .content", [1], " .card", [1], " .card-title", [1], ".data-v-cdcfe6a8", [1], "{font-weight:600;color:#6f4009;line-height:", 42, ";text-align:center;margin-top:", 40, "}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], ".data-v-cdcfe6a8", [1], "{display:flex;align-items:flex-end;justify-content:center;color:#6f4009}.qm-pay-card", [1], " .content", [1], " .card-amount-num", [1], ".data-v-cdcfe6a8", [1], "{font-weight:600;font-size:", 54, ";line-height:", 77, ";margin:", 20, " ", 8, " 0}.qm-pay-card", [1], " .content", [1], " .card-amount-unit", [1], ".data-v-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";line-height:", 35, ";margin-bottom:", 12, "}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], " .my-vip-num", [1], ".data-v-cdcfe6a8", [1], "{line-height:", 83, ";margin:", 10, " ", 8, " 0}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], " .my-vip-unit", [1], ".data-v-cdcfe6a8", [1], "{margin-bottom:", 16, "}.qm-pay-card", [1], " .content", [1], " .card", [1], " .origin-price", [1], ".data-v-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";text-align:right;text-decoration-line:line-through;margin:0 0 ", 12, " ", 12, "}.qm-pay-card", [1], " .content", [1], " .card-sub-text", [1], ".data-v-cdcfe6a8", [1], "{text-align:center;font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.qm-pay-card", [1], " .content", [1], " .card-footer", [1], ".data-v-cdcfe6a8", [1], "{width:100%;height:", 46, ";line-height:", 46, ";background:#ffe8c7;text-align:center;color:#6f4009;font-weight:400;font-size:", 25, ";border-radius:0 0 ", 8, " ", 8, "}.qm-pay-card", [1], " .content", [1], " .my-vip-footer", [1], ".data-v-cdcfe6a8", [1], "{height:", 52, ";line-height:", 52, "}.qm-pay-card", [1], " .coin-active", [1], ".data-v-cdcfe6a8", [1], "{background:#ffefeb;border-color:#fa521e}.qm-pay-card", [1], " .coin-active", [1], " .card-amount-num", [1], ".data-v-cdcfe6a8", [1], ",.qm-pay-card", [1], " .coin-active", [1], " .card-amount-unit", [1], ".data-v-cdcfe6a8", [1], ",.qm-pay-card", [1], " .coin-active", [1], " .card-sub-text", [1], ".data-v-cdcfe6a8", [1], "{color:#ff5b29}.qm-pay-card", [1], " .coin-active", [1], " .card-footer", [1], ".data-v-cdcfe6a8", [1], "{background:#ff5b29;color:#fff}.qm-pay-card", [1], " .coin-active", [1], " .desc-skew", [1], ".data-v-cdcfe6a8", [1], "{padding-right:", 24, "}.qm-pay-card", [1], " .vip-active", [1], ".data-v-cdcfe6a8", [1], "{background:#fff6ea;border-color:#7c6051}.qm-pay-card", [1], " .vip-active", [1], " .card-amount-num", [1], ".data-v-cdcfe6a8", [1], ",.qm-pay-card", [1], " .vip-active", [1], " .card-amount-unit", [1], ".data-v-cdcfe6a8", [1], ",.qm-pay-card", [1], " .vip-active", [1], " .card-sub-text", [1], ".data-v-cdcfe6a8", [1], "{color:#6f4009}.qm-pay-card", [1], " .vip-active", [1], " .card-footer", [1], ".data-v-cdcfe6a8", [1], "{background:linear-gradient(90deg,#826555,#3f3431);color:#ffedd6}.qm-pay-card", [1], " .my-vip-active", [1], ".data-v-cdcfe6a8", [1], "{background:#fff4e6}.qm-pay-card", [1], " .my-vip-active", [1], " .my-vip-footer", [1], ".data-v-cdcfe6a8", [1], "{background:linear-gradient(90deg,rgba(100,81,71,.95),rgba(51,43,41,.95))}.qm-pay-card-reader", [1], ".data-v-cdcfe6a8", [1], "{height:", 208, ";background:linear-gradient(#fffffe,#fef9ea);border-radius:", 17, "}.qm-pay-card-vip", [1], ".data-v-cdcfe6a8", [1], "{height:", 252, "}"], "", "tt-s-bJOFbcZu"), putCssToHead([".hand", [1], ".data-v-9d811854", [1], "{width:100%;height:100%;position:absolute}.hand-animate", [1], ".data-v-9d811854", [1], "{width:100%;height:100%;position:relative}.hand-animate-img", [1], ".data-v-9d811854", [1], "{width:", 141, ";height:", 141, ";position:absolute;right:-", 34, ";bottom:-", 52, ";z-index:4;animation:hand_animation-9d811854 .9s linear infinite}.hand-animate-round", [1], ".data-v-9d811854", [1], "{width:", 86, ";height:", 86, ";border-radius:50%;background:#fb9797;position:absolute;right:", 46, ";bottom:", 22, ";z-index:1;animation:round_animation-9d811854 .9s linear infinite}@keyframes hand_animation-9d811854{0%,to{transform:scale(1)}50%{transform:scale(1)}30%{transform:scale(.9)}}@keyframes round_animation-9d811854{0%{transform:scale(0);opacity:1;visibility:visible}to{transform:scale(1);opacity:0;visibility:hidden}}"], "", "tt-s-uj6OM8-J"), putCssToHead([".purchase-tips-container", [1], ".data-v-29b4a449", [1], "{display:flex;flex-direction:column;align-items:center}.purchase-tips-container", [1], " .title", [1], ".data-v-29b4a449", [1], "{font-weight:400;color:#999;line-height:", 35, ";margin:", 34, " 0 ", 50, "}.purchase-tips-container", [1], " .title", [1], " .arrow-right", [1], ".data-v-29b4a449", [1], "{width:", 21, ";height:", 21, "}.purchase-tips-container", [1], " .title-dark", [1], ".data-v-29b4a449", [1], "{color:rgba(255,255,255,.48)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], ".data-v-29b4a449", [1], "{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.5);z-index:5}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], ".data-v-29b4a449", [1], "{width:", 583, ";display:flex;flex-direction:column;align-items:center;border-radius:", 20, ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .title", [1], ".data-v-29b4a449", [1], "{width:", 500, ";height:", 50, ";margin:", 50, " 0 ", 17, ";font-weight:500;font-size:", 35, ";color:#161823;line-height:", 50, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .t-dark", [1], ".data-v-29b4a449", [1], "{color:rgba(255,255,255,.72)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], ".data-v-29b4a449", [1], "{width:", 583, ";flex:1;overflow-y:auto;overflow-x:hidden}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], ".data-v-29b4a449", [1], "{widows:100%;padding:0 ", 42, " ", 50, ";font-weight:400;color:rgba(22,24,35,.75);line-height:", 42, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], " .connect", [1], ".data-v-29b4a449", [1], "{word-break:break-all}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], " .link", [1], ".data-v-29b4a449", [1], "{display:inline;text-decoration:underline}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-bottom-mask", [1], ".data-v-29b4a449", [1], "{width:100%;height:", 100, ";position:absolute;bottom:", 100, ";left:0;background:linear-gradient(180deg,rgba(255,255,255,0),#fff)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], " .wrap-dark", [1], ".data-v-29b4a449", [1], "{color:rgba(255,255,255,.6)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], " .mask-dark", [1], ".data-v-29b4a449", [1], "{background:linear-gradient(180deg,rgba(26,26,26,0),#1a1a1a)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .footer", [1], ".data-v-29b4a449", [1], "{width:", 583, ";height:", 100, ";border-top:1px solid rgba(22,24,35,.12);font-weight:500;color:#ff613b;line-height:", 44, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .footer-dark", [1], ".data-v-29b4a449", [1], "{border-top:1px solid rgba(255,255,255,.18);color:#eb5b13}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .con-dark", [1], ".data-v-29b4a449", [1], "{background:#1a1a1a}"], "", "tt-s-d-3PvFcP"), putCssToHead([".purchase-panel-container", [1], ".data-v-a18c2d2b", [1], "{padding-bottom:", 100, "}.purchase-panel-container", [1], " .purchase-panel", [1], ".data-v-a18c2d2b", [1], "{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-top:", 67, "}.purchase-panel-container", [1], " .purchase-panel", [1], " .panel-btn", [1], ".data-v-a18c2d2b", [1], "{width:100%;height:", 83, ";background:linear-gradient(90deg,#ff683d,#ff2e2e);border-radius:", 42, ";color:#fff;line-height:", 46, "}.purchase-panel-container", [1], " .panel-footer", [1], ".data-v-a18c2d2b", [1], "{margin-top:", 33, "}.purchase-panel-container", [1], " .panel-footer", [1], " .radio", [1], ".data-v-a18c2d2b", [1], "{width:", 33, ";height:", 35, "}.purchase-panel-container", [1], " .panel-footer", [1], " .buy-next", [1], ".data-v-a18c2d2b", [1], "{margin-left:", 6, ";font-weight:400;color:#999;line-height:", 35, "}.purchase-panel-container", [1], " .panel-footer", [1], " .text-dark", [1], ".data-v-a18c2d2b", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-s-G6Yh0rmv"), putCssToHead([".final-chapter-container", [1], ".data-v-859a884d", [1], "{width:100%;box-sizing:border-box;padding:", 62.5, " 0 ", 66.67, "}.final-chapter-container", [1], " .chapter-title", [1], ".data-v-859a884d", [1], "{color:#222;line-height:", 46, ";margin-bottom:", 37.5, ";display:flex;width:100%;min-width:0}.final-chapter-container", [1], " .chapter-title", [1], " .left", [1], ".data-v-859a884d", [1], ",.final-chapter-container", [1], " .chapter-title", [1], " .right", [1], ".data-v-859a884d", [1], "{flex-shrink:0;white-space:nowrap;font-size:", 33, "}.final-chapter-container", [1], " .chapter-title", [1], " .name", [1], ".data-v-859a884d", [1], "{font-size:", 33, ";flex-grow:0;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.final-chapter-container", [1], " .t-dark", [1], ".data-v-859a884d", [1], "{color:rgba(255,255,255,.72)}.final-chapter-container", [1], " .more", [1], ".data-v-859a884d", [1], "{font-weight:400;color:#666;line-height:", 46, ";margin-top:", 50, "}.final-chapter-container", [1], " .more", [1], " .arrow-right", [1], ".data-v-859a884d", [1], "{font-size:", 33, "}.final-chapter-container", [1], " .more", [1], ".m-dark", [1], ".data-v-859a884d", [1], ",.final-chapter-container", [1], " .more", [1], ".m-dark", [1], " .arrow-right", [1], ".data-v-859a884d", [1], "{color:rgba(255,255,255,.72)}"], "", "tt-s-Bfp-pSlN"), putCssToHead([".how-to-find-me", [1], " .find-me-content", [1], ".data-v-ed782a27", [1], "{padding:", 42, ";background:#fff;border-radius:", 25, ";width:", 583, ";min-height:", 875, "}.how-to-find-me", [1], " .find-me-content", [1], " .mt-50", [1], ".data-v-ed782a27", [1], "{margin-top:", 50, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-title", [1], ".data-v-ed782a27", [1], "{text-align:center;font-weight:500;font-size:", 38, ";color:#222;line-height:", 52, ";margin-bottom:", 30, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-step", [1], ".data-v-ed782a27", [1], "{font-weight:500;font-size:", 29, ";color:#222;line-height:", 44, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-step", [1], " .menu-icon", [1], ".data-v-ed782a27", [1], "{font-size:", 30, "!important;display:inline-block;color:#000;background:#eee;border-radius:50%;width:", 36, ";height:", 36, ";line-height:", 34, ";text-align:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], ".data-v-ed782a27", [1], "{margin-top:", 25, ";width:100%;height:", 235, ";position:relative}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], ".data-v-ed782a27", [1], "{width:100%;height:100%;background:#f8f8f8;border-radius:", 17, ";border:", 2, " solid #eeeeee;display:flex}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], ".data-v-ed782a27", [1], "{flex:1;padding:", 21, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], ".data-v-ed782a27", [1], "{height:100%;background:#fff;border-radius:", 17, ";padding:", 10.5, " ", 21, " ", 34, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-title", [1], ".data-v-ed782a27", [1], "{font-weight:400;font-size:", 25, ";color:#111;line-height:", 35, ";margin-bottom:", 31, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], ".data-v-ed782a27", [1], "{display:flex;justify-content:space-between;width:100%}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], ".data-v-ed782a27", [1], "{display:flex;flex-direction:column;align-items:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], " .left-wrapper-sub-item-icon", [1], ".data-v-ed782a27", [1], "{width:", 50, ";height:", 50, ";background:#f5f5f5;border-radius:", 8, ";margin-bottom:", 17, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], " .left-wrapper-sub-item-text", [1], ".data-v-ed782a27", [1], "{width:", 75, ";height:", 17, ";background:#f5f5f5;border-radius:", 4, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-right", [1], ".data-v-ed782a27", [1], "{width:", 156, ";background:#aeaeae;opacity:.17}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], ".data-v-ed782a27", [1], "{display:flex;flex-direction:column;align-items:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], " .logo", [1], ".data-v-ed782a27", [1], "{width:", 50, ";height:", 50, ";border-radius:", 8, ";margin-bottom:", 12.5, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], " .app-name", [1], ".data-v-ed782a27", [1], "{font-weight:400;font-size:", 17, ";color:#111;line-height:", 23, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-bg", [1], ".data-v-ed782a27", [1], "{width:100%;height:100%}.how-to-find-me", [1], " .popup-close", [1], ".data-v-ed782a27", [1], "{width:100%;display:flex;justify-content:center;margin-top:", 43, "}.how-to-find-me", [1], " .popup-close", [1], " .close-icon-area", [1], ".data-v-ed782a27", [1], "{padding:", 17, "}.how-to-find-me", [1], " .popup-close", [1], " .close-icon-area", [1], " .close-icon", [1], ".data-v-ed782a27", [1], "{font-size:", 67, "!important;color:#ddd}"], "", "tt-s-PsqcyOHY"), putCssToHead([".qm-pull-up-loading", [1], ".data-v-2be1f78a", [1], "{display:flex;align-items:center}.qm-pull-up-loading-text", [1], ".data-v-2be1f78a", [1], "{font-weight:400;font-size:", 25, ";color:#999;line-height:", 35, "}.qm-pull-up-loading-icon", [1], ".data-v-2be1f78a", [1], "{margin-right:", 9, ";width:", 29, ";height:", 29, ";animation:rotation-2be1f78a 1s linear infinite}@keyframes rotation-2be1f78a{0%{transform:rotate(0);transform-origin:center 50%}to{transform:rotate(360deg);transform-origin:center 50%}}"], "", "tt-s-4hQwgOuA"), window.TMAConfig = {
  appId: "ttc6a8b015599fe90101",
  entryPagePath: "pages/index/index",
  isMicroApp: !0,
  pages: ["pages/index/index", "pages/read-history/index", "pages/reader/index", "pages/mine/index", "pages/window/index", "subpages/mine/vip/index", "subpages/mine/trade-record/index", "subpages/mine/purchase-config/index", "subpages/mine/about-us/index"],
  subPackages: [{
    root: "subpages/mine/",
    pages: ["vip/index", "trade-record/index", "purchase-config/index", "about-us/index"]
  }],
  networkTimeout: {
    request: 6e4,
    uploadFile: 6e4,
    connectSocket: 6e4,
    downloadFile: 6e4
  },
  global: {
    window: {
      navigationBarTextStyle: "black",
      navigationBarTitleText: "渺渺故事会",
      navigationBarBackgroundColor: "#F5F5F5",
      backgroundColor: "#F5F5F5"
    }
  },
  tabBar: {
    color: "#111111",
    selectedColor: "#FF613B",
    borderStyle: "black",
    backgroundColor: "#FFFFFF",
    list: [{
      pagePath: "pages/read-history/index",
      iconPath: "static/tabbar/history.png",
      selectedIconPath: "static/tabbar/history-on.png",
      text: "最近阅读"
    }, {
      pagePath: "pages/index/index",
      iconPath: "static/tabbar/store.png",
      selectedIconPath: "static/tabbar/store-on.png",
      text: "书城"
    }, {
      pagePath: "pages/mine/index",
      iconPath: "static/tabbar/mine.png",
      selectedIconPath: "static/tabbar/mine-on.png",
      text: "我的"
    }]
  },
  navigateToMiniProgramAppIdList: [],
  permission: {},
  prefetches: {},
  preloadRule: {
    "pages/mine/index": {
      network: "all",
      packages: ["subpages/mine/"]
    }
  },
  prefetchRules: {},
  ttPlugins: {},
  extAlias: {},
  npmAlias: {},
  pluginPages: [],
  fallbackPluginPages: {},
  debug: !1,
  ttLaunchApp: {},
  widgets: [],
  ext: {},
  extAppid: "",
  customClose: !1,
  fileRecord: {
    "api/book-store/index.js": !0,
    "api/http/compensation-queue.js": !0,
    "api/http/index.js": !0,
    "api/mine/index.js": !0,
    "api/pay/index.js": !0,
    "api/qm-statistics.js": !0,
    "api/reader/index.js": !0,
    "api/user/index.js": !0,
    "assets/ts/history.js": !0,
    "assets/ts/theme.js": !0,
    "common/assets.js": !0,
    "common/vendor.js": !0,
    "components/qm-book-card/index.js": !0,
    "components/qm-empty/index.js": !0,
    "components/qm-icon/index.js": !0,
    "components/qm-pay-card/components/guide-hand.js": !0,
    "components/qm-pay-card/index.js": !0,
    "components/qm-pay-panel/components/panel-header.js": !0,
    "components/qm-pay-panel/components/purchase-panel.js": !0,
    "components/qm-pay-panel/components/purchase-tips.js": !0,
    "components/qm-pay-panel/index.js": !0,
    "components/qm-pull-up-loading/index.js": !0,
    "components/qm-scrollx-book-list/index.js": !0,
    "components/qm-tab/index.js": !0,
    "hooks/index.js": !0,
    "hooks/use-login.js": !0,
    "hooks/use-pay.js": !0,
    "mixin/share.js": !0,
    "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js": !0,
    "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js": !0,
    "node-modules/@repo/qm-components/src/q-image/index.js": !0,
    "node-modules/@repo/qm-components/src/q-popup/index.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/chapter-content.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/components/book-info.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/components/chapter-list.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/components/set-background.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/components/set-box.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/components/set-font-size.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/index.js": !0,
    "node-modules/@repo/qm-components/src/q-reader/setting.js": !0,
    "node-modules/@repo/qm-components/src/q-theme-overlay/index.js": !0,
    "pages/index/index.js": !0,
    "pages/mine/components/how-to-find-me.js": !0,
    "pages/mine/index.js": !0,
    "pages/read-history/index.js": !0,
    "pages/reader/components/final-chapter.js": !0,
    "pages/reader/index.js": !0,
    "pages/window/index.js": !0,
    "store/index.js": !0,
    "store/modules/global.js": !0,
    "store/modules/user.js": !0,
    "subpages/mine/about-us/index.js": !0,
    "subpages/mine/components/trade-record-list.js": !0,
    "subpages/mine/purchase-config/index.js": !0,
    "subpages/mine/trade-record/index.js": !0,
    "subpages/mine/vip/index.js": !0,
    "app.js": !0,
    "bdp_industry_sdk/main.js": !0,
    "bdp_industry_sdk/index.js": !0
  },
  usingProvide: !1,
  component2: !1,
  industrySDKPages: [],
  industrySDK: !0,
  gameFiles: [],
  publishVideoHookPriorityList: [],
  referrerPolicy: {},
  usePrivacyCheck: !1,
  appLaunchInfo: {
    path: "pages/index/index",
    query: {}
  },
  network: {
    maxRequestConcurrent: 5,
    maxUploadConcurrent: 2,
    maxDownloadConcurrent: 5
  }
}, window.__allConfig__ = {
  "pages/index/index": {
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-tab": "/components/qm-tab/index",
      "qm-scrollx-book-list": "/components/qm-scrollx-book-list/index",
      "qm-book-card": "/components/qm-book-card/index",
      "qm-empty": "/components/qm-empty/index"
    }
  },
  "pages/read-history/index": {
    navigationBarBackgroundColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    enablePullDownRefresh: !0,
    onReachBottomDistance: 500,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-book-card": "/components/qm-book-card/index",
      "qm-empty": "/components/qm-empty/index"
    }
  },
  "pages/reader/index": {
    navigationBarTitleText: "",
    navigationBarBackgroundColor: "#FFFFFF",
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "q-reader": "/node-modules/@repo/qm-components/src/q-reader/index",
      "qm-pay-panel": "/components/qm-pay-panel/index",
      "final-chapter": "/pages/reader/components/final-chapter"
    }
  },
  "pages/mine/index": {
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "uni-popup": "/node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup",
      "how-to-find-me": "/pages/mine/components/how-to-find-me"
    }
  },
  "pages/window/index": {
    navigationBarTitleText: "",
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "subpages/mine/vip/index": {
    navigationBarTitleText: "VIP",
    backgroundColor: "#2F231A",
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "purchase-tips": "/components/qm-pay-panel/components/purchase-tips",
      "qm-pay-card": "/components/qm-pay-card/index"
    }
  },
  "subpages/mine/trade-record/index": {
    navigationBarTitleText: "交易记录",
    navigationBarBackgroundColor: "#FFFFFF",
    onReachBottomDistance: 100,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-tab": "/components/qm-tab/index",
      "trade-record-list": "/subpages/mine/components/trade-record-list"
    }
  },
  "subpages/mine/purchase-config/index": {
    navigationBarTitleText: "购买设置",
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "subpages/mine/about-us/index": {
    navigationBarTitleText: "关于我们",
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-icon/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-tab/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-scrollx-book-list/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-book-card": "/components/qm-book-card/index"
    }
  },
  "components/qm-book-card/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "q-theme-overlay": "/node-modules/@repo/qm-components/src/q-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-theme-overlay/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-empty/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "chapter-content": "/node-modules/@repo/qm-components/src/q-reader/chapter-content",
      setting: "/node-modules/@repo/qm-components/src/q-reader/setting"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/chapter-content": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/setting": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "setting-box": "/node-modules/@repo/qm-components/src/q-reader/components/set-box",
      "book-info": "/node-modules/@repo/qm-components/src/q-reader/components/book-info",
      "chapter-list": "/node-modules/@repo/qm-components/src/q-reader/components/chapter-list",
      "q-popup": "/node-modules/@repo/qm-components/src/q-popup/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/components/set-box": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "set-font-size": "/node-modules/@repo/qm-components/src/q-reader/components/set-font-size",
      "set-background": "/node-modules/@repo/qm-components/src/q-reader/components/set-background"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/components/set-font-size": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/components/set-background": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/components/book-info": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "q-image": "/node-modules/@repo/qm-components/src/q-image/index",
      "q-theme-overlay": "/node-modules/@repo/qm-components/src/q-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-image/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-reader/components/chapter-list": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "q-theme-overlay": "/node-modules/@repo/qm-components/src/q-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/q-popup/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "uni-popup": "/node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"
    }
  },
  "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "uni-transition": "/node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"
    }
  },
  "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-pay-panel/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "panel-header": "/components/qm-pay-panel/components/panel-header",
      "qm-pay-card": "/components/qm-pay-card/index",
      "purchase-tips": "/components/qm-pay-panel/components/purchase-tips",
      "purchase-panel": "/components/qm-pay-panel/components/purchase-panel",
      "q-theme-overlay": "/node-modules/@repo/qm-components/src/q-theme-overlay/index"
    }
  },
  "components/qm-pay-panel/components/panel-header": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-pay-card/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "guide-hand": "/components/qm-pay-card/components/guide-hand"
    }
  },
  "components/qm-pay-card/components/guide-hand": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-pay-panel/components/purchase-tips": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "components/qm-pay-panel/components/purchase-panel": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "panel-header": "/components/qm-pay-panel/components/panel-header",
      "q-theme-overlay": "/node-modules/@repo/qm-components/src/q-theme-overlay/index"
    }
  },
  "pages/reader/components/final-chapter": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-book-card": "/components/qm-book-card/index"
    }
  },
  "pages/mine/components/how-to-find-me": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "subpages/mine/components/trade-record-list": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "qm-empty": "/components/qm-empty/index",
      "qm-pull-up-loading": "/components/qm-pull-up-loading/index"
    }
  },
  "components/qm-pull-up-loading/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "bdp_industry_sdk/pay-button": {},
  "bdp_industry_sdk/address-area": {},
  "bdp_industry_sdk/consume-card": {},
  "bdp_industry_sdk/store-area": {},
  "bdp_industry_sdk/rate-button": {},
  "bdp_industry_sdk/member-button": {}
}, window.__ExtensionConfig__ = {}, window.compilerVersion = "1.35.4", setTimeout((function () {
  "object" == typeof ttJSCore && "function" == typeof ttJSCore.onDocumentReady ? ttJSCore.onDocumentReady() : webkit.messageHandlers.onDocumentReady.postMessage("")
}), 0), window.microapp_page_frame_loaded = !0;
