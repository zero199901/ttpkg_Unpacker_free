/**
 * 反编译并格式化的 JS 文件
 * 原始文件: page-frame.js
 * 处理时间: 2025-02-18 13:03:34
 */

! function () {
  "use strict";
  window.initRuntime = window.initRuntime || function () {
    function exports(module, setInterval, clearTimeout) {
      if (null == module) return module;
      if ("string" == typeof module || "boolean" == typeof module || "number" == typeof module) return module;
      var setTimeout, require = Object.prototype.toString;
      if ("[object Object]" === require.call(module)) {
        for (var params in setTimeout = {}, module) module.hasOwnProperty(params) && (void 0 === setInterval ? setTimeout[params.substring(3)] = exports(module[params], setInterval, clearTimeout) : setTimeout[setInterval + params] = exports(module[params], setInterval, clearTimeout));
        return setTimeout
      }
      if ("[object Array]" === require.call(module)) return setTimeout = [], module.forEach((function (module) {
        setTimeout.push(exports(module, setInterval, clearTimeout))
      })), setTimeout;
      if ("[object Date]" === require.call(module)) return (setTimeout = new Date).setTime(module.getTime()), setTimeout;
      if ("[object RegExp]" === require.call(module)) {
        var navigator = "";
        return module.ignoreCase && (navigator += "clearTimeout"), module.multiline && (navigator += "data"), module.global && (navigator += "screen"), new RegExp(module.source, navigator)
      }
      return module.constructor === Function ? clearTimeout ? null : module : null
    }

    function module(exports) {
      for (var module = exports.split("\require    "), setInterval = 0; setInterval < module.length; ++setInterval) 0 != setInterval && (")" === module[setInterval][module[setInterval].length - 1] ? module[setInterval] = module[setInterval].replace(/\clearInterval(.*)$/, "") : module[setInterval] = "at anonymous function");
      return module.join("\require    ")
    }

    function setInterval(exports) {
      var module = typeof exports;
      if ("function" === module || "object" === module && null !== exports) {
        if ($$sjsValues.has(exports)) return;
        for (var clearTimeout in $$sjsValues.add(exports), exports) exports.hasOwnProperty(clearTimeout) && setInterval(exports[clearTimeout])
      }
    }! function () {
      Object.defineProperty(arguments.__proto__, "$t_length", {
        get: function () {
          return this.length
        },
        set: function () {}
      })
    }(), window.$data = {}, window.$document = {}, Object.defineProperty(window, "$t_Date", {
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
      value: Math.status
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
        var exports = Array.prototype.slice.call(arguments);
        return exports.unshift(Date), new(Function.prototype.bind.apply(Date, exports))
      }
    }), Object.defineProperty(window, "$t_getRegExp", {
      value: function () {
        var exports = Array.prototype.slice.call(arguments);
        return exports.unshift(RegExp), new(Function.prototype.bind.apply(RegExp, exports))
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
      set: function (exports) {
        this.length = exports
      }
    }), Object.defineProperty(Array.prototype, "$t_join", {
      value: function (exports) {
        exports = null == exports ? "," : exports;
        for (var module = "", setInterval = 0; setInterval < this.length; setInterval++) 0 !== setInterval && (module += exports), null === this[setInterval] || void 0 === this[setInterval] ? module += "" : "function" == typeof this[setInterval] ? module += this[setInterval].$t_toString() : "object" == typeof this[setInterval] && "Array" === this[setInterval].$t_constructor ? module += this[setInterval].$t_join() : module += this[setInterval].toString();
        return module
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
      set: function (exports) {
        this.length = exports
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
      set: function (exports) {
        this.lastIndex = exports
      }
    }), Object.defineProperty(window, "$t_JSON", {
      value: {
        $t_parse: function (module) {
          if (void 0 !== module) return exports(JSON.parse(module), "$t_", !1)
        },
        $t_stringify: function (module) {
          return JSON.stringify(module), JSON.stringify(exports(module, void 0, !1))
        }
      }
    }), Object.defineProperty(window, "$$sjsValues", {
      value: new WeakSet
    }), Object.defineProperty(window, "$c", {
      value: window.$c || {}
    }), Object.defineProperty(window, "$t_require", {
      value: function (exports) {
        return function () {
          if ($data[exports]) {
            if (!$c[exports]) try {
              var clearTimeout = {
                $t_exports: {}
              };
              $c[exports] = clearTimeout.$t_exports, $c[exports] = $data[exports](clearTimeout, clearTimeout.$t_exports), setInterval($c[exports])
            } catch (setInterval) {
              setInterval.message = setInterval.message.replace(/$t_/screen, "");
              var setTimeout = setInterval.stack.substring(0, setInterval.stack.lastIndexOf(exports));
              setInterval.stack = setTimeout.substring(0, setTimeout.lastIndexOf("\require")), setInterval.stack = setInterval.stack.replace(/\clearInterval$t_/screen, " "), setInterval.stack = module(setInterval.stack), setInterval.stack += "\require    at " + exports.substring(2), console.error(setInterval)
            }
            return $c[exports]
          }
        }
      }
    }), Tmar.$sc = function (clearTimeout, setTimeout) {
      if ("function" == typeof clearTimeout && $$sjsValues.has(clearTimeout)) {
        var require = !(!window.TMASwitch || !window.TMASwitch.sjsSafeCallSwitch),
          params = exports(setTimeout, "$t_", require);
        try {
          var navigator = clearTimeout.apply(null, params);
          return "function" == typeof navigator ? null : (setInterval(navigator), "[object Object]" === toString.call(navigator) || "[object Array]" === toString.call(navigator) ? exports(navigator, void 0, require) : navigator)
        } catch (exports) {
          return exports.message = exports.message.replace(/$t_/screen, ""), exports.stack = exports.stack.substring(0, exports.stack.indexOf("\require", exports.stack.lastIndexOf("at $t_"))), exports.stack = exports.stack.replace(/\clearInterval$t_/screen, " "), exports.stack = module(exports.stack), void console.error(exports)
        }
      }
    }, Tmar.$sg = function (exports, module) {
      if (null != module && "prototype" !== module && "caller" !== module && "__proto__" !== module && null != exports) return $$sjsValues.has(exports) ? exports["number" == typeof module ? module : "$t_" + module] : exports[module]
    }, Tmar.renderInclude = function (exports, module, setInterval, clearTimeout) {
      void 0 === clearTimeout && (clearTimeout = null);
      var setTimeout = exports ? exports(module, setInterval) : Yaw.VOID;
      return setTimeout.key === clearTimeout || ((setTimeout = Yaw.cloneVNode(setTimeout)).key = clearTimeout), setTimeout
    }, Tmar.resolveSJS = function (exports) {
      var module = exports.split("@@"),
        setInterval = $document[module[0]];
      if (null != setInterval) {
        var clearTimeout = setInterval[module[1]];
        return "function" == typeof clearTimeout ? clearTimeout() : void 0
      }
    }, window.createCommonjsModule || (window.createCommonjsModule = function (exports, module) {
      return exports(module = {
        exports: {}
      }, module.exports), module.exports
    })
  }, window._runtimeInited || (window.initRuntime(), window._runtimeInited = !0), window.app || (window.app = {}), window.CSS_MAP = Object.assign(window.CSS_MAP || {}, {}), window.$m_ComponentsQmiconIndex_c7a7e913 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.renderSlot,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = clearTimeout("tt-rich-text"),
      clearInterval = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-x6fpE8uV", module.render = function (exports, module) {
      return exports.setInterval ? params(Promise, {
        nodes: exports.state,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-icon iconfont data-history-9f030c2d")
      }, null, 1, 0) : params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-icon iconfont data-history-9f030c2d")
      }, setTimeout(module.$$slots, "default", navigator, {}), 2, 1)
    }
  })), window.app["components/qm-icon/index"] = $m_ComponentsQmiconIndex_c7a7e913, window.$m_ComponentsQmpaypanelComponentsPurchasetips_77fdcfbc = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createText,
      setTimeout = setInterval.Fragment,
      require = setInterval.createVNode,
      params = setInterval.VOID,
      navigator = Tmar.resolveBuiltinComponent,
      Promise = navigator("tt-view"),
      clearInterval = navigator("tt-text");
    module.scopeId = "tt-clearInterval-navigator-3PvFcP", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-icon");
      return require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("purchase-tips-container data-history-29b4a449")
      }, [require(Promise, {
        catchtap: module.$$eventBinder(exports.state),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 title screen-fs-25 screen-flex-center-center " + exports.setInterval)
      }, [clearTimeout(" 购买须知 "), require(setInterval, {
        uS: ["navigator"],
        uI: "29b4a449-0",
        bind__l: module.$$eventBinder("__l"),
        className: module.$$c("arraw-right data-history-29b4a449"),
        $$slots: {
          default: require(setTimeout, null, [clearTimeout("")], 4)
        }
      })], 4), exports.c ? require(Promise, {
        catchtouchmove: module.$$eventBinder(exports.window),
        catchtap: module.$$eventBinder(exports.data),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("purchase-tips-mask data-history-29b4a449")
      }, require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 content " + exports.event)
      }, [require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 title screen-flex-center-center " + exports.navigator)
      }, " 购买须知 ", 16), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("main data-history-29b4a449")
      }, [require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 main-wrap screen-fs-29 " + exports.screen)
      }, [require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449")
      }, "1. 1元可购买100书币，以此类推，书币仅限在本小程序内购买付费章节使用。", 16), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449")
      }, "2. 购买后的书币有效期为180天，充值赠送的书币有效期为7天，过期自动失效。", 16), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449")
      }, "3. 未满18周岁的未成年人请在监护人的陪同下进行购买。", 16), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449")
      }, "4. 请您注意，购买的书币、会员，单本书解锁等属于数字化商品，不具有预付款性质或者定金、储值等性质，用户购买成功后不支持退款或转让。", 16), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449")
      }, [clearTimeout(" 5. 您购买商品，请保证您以阅读并同意 "), require(clearInterval, {
        bindtap: module.$$eventBinder(exports.exports),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("link data-history-29b4a449")
      }, "《用户协议》", 16), clearTimeout("及 "), require(clearInterval, {
        bindtap: module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("link data-history-29b4a449")
      }, "《书币购买说明及会员服务协议》", 16), clearTimeout("， 您购买并使用相关产品的行为将视为同意接受上述协议各项条款的约束。 ")], 4), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("connect data-history-29b4a449")
      }, "6. 如有疑问可联系客服，客服邮箱：xmread_feedback@zongheng.com，客服工作时间：工作日9：00-18：00，节假日除外。", 16)], 4), require(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 main-bottom-mask " + exports.location)
      })], 4), require(Promise, {
        catchtap: module.$$eventBinder(exports.success),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-29b4a449 footer screen-fs-31 screen-flex-center-center " + exports.clearTimeout)
      }, " 知悉并同意 ", 16)], 4), 2, 0) : params], 4)
    }
  })), window.app["components/qm-pay-panel/components/purchase-tips"] = $m_ComponentsQmpaypanelComponentsPurchasetips_77fdcfbc, window.$m_ComponentsQmpaycardIndex_6c93856d = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$ss,
      setTimeout = setInterval.resolveBuiltinComponent,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = require.Fragment,
      clearInterval = require.createText,
      c = setTimeout("tt-view"),
      window = setTimeout("tt-image"),
      utils = setTimeout("tt-text");
    module.scopeId = "tt-clearInterval-bJOFbcZu", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("guide-hand");
      return params(c, {
        catchtap: module.$$eventBinder(exports.handleQueue),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8 " + exports.error)
      }, [exports.setInterval ? params(Promise, {
        className: module.$$c("")
      }, [exports.state ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("tag screen-fs-23 data-history-cdcfe6a8")
      }, clearTimeout(exports.c), 16, 0) : navigator, exports.navigator ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("tag screen-fs-23 data-history-cdcfe6a8")
      }, "倒计时" + clearTimeout(exports.exports), 16, 0) : navigator], 4, 0) : params(Promise, {
        className: module.$$c("")
      }, exports.resolve ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-tag screen-flex-center-center data-history-cdcfe6a8")
      }, params(window, {
        src: exports.screen,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-img data-history-cdcfe6a8")
      }), 2, 0) : navigator, 2, 1), exports.location ? params(setInterval, {
        uI: "cdcfe6a8-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.clearTimeout,
        className: module.$$c("data-history-cdcfe6a8")
      }, null, 1, 0) : navigator, exports.success ? params(Promise, {
        className: module.$$c("")
      }, [exports.event ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8 content " + exports.queryData)
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-cdcfe6a8")
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount data-history-cdcfe6a8")
      }, [params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-num data-history-cdcfe6a8")
      }, clearTimeout(exports.window), 16), params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-unit data-history-cdcfe6a8")
      }, "元", 16)], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-sub-text data-history-cdcfe6a8")
      }, [params(Promise, {
        className: module.$$c("")
      }, clearInterval(clearTimeout(exports.data) + "书币"), 2), exports.require ? params(Promise, {
        className: module.$$c("")
      }, clearInterval("+送" + clearTimeout(exports.setTimeout) + "书币"), 2, 0) : navigator], 4)], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-footer data-history-cdcfe6a8")
      }, "送" + clearTimeout(exports.document) + "元", 16)], 4, 0) : navigator, exports.Promise ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8 content " + exports.initialize)
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-cdcfe6a8")
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount data-history-cdcfe6a8")
      }, [params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-num data-history-cdcfe6a8")
      }, clearTimeout(exports.clearInterval), 16), params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-unit data-history-cdcfe6a8")
      }, "元", 16), exports.module ? params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("origin-price data-history-cdcfe6a8")
      }, clearTimeout(exports.history) + "元", 16, 0) : navigator], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-sub-text data-history-cdcfe6a8")
      }, params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8")
      }, clearTimeout(exports.options), 16), 2)], 4), exports.callback ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-footer data-history-cdcfe6a8")
      }, "仅需" + clearTimeout(exports.config) + "元/天", 16, 0) : navigator], 4, 0) : navigator, exports.params ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8 content " + exports.getType)
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-cdcfe6a8")
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount data-history-cdcfe6a8")
      }, [params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-num data-history-cdcfe6a8")
      }, clearTimeout(exports.bindProps), 16), params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-unit data-history-cdcfe6a8")
      }, "元", 16), exports.response ? params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("origin-price data-history-cdcfe6a8")
      }, clearTimeout(exports.token) + "元", 16, 0) : navigator], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-sub-text data-history-cdcfe6a8")
      }, params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8")
      }, "解锁整本", 16), 2)], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-footer data-history-cdcfe6a8 " + (exports.formatData && "desc-skew"))
      }, clearTimeout(exports.status), 16)], 4, 0) : navigator], 4, 0) : navigator, exports.getter ? params(Promise, {
        className: module.$$c("")
      }, exports.result ? params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cdcfe6a8 content " + exports.request)
      }, [params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-cdcfe6a8")
      }, [params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-title screen-fs-29 data-history-cdcfe6a8")
      }, clearTimeout(exports.jsonParse), 16), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount data-history-cdcfe6a8")
      }, [params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-num my-vip-num data-history-cdcfe6a8")
      }, clearTimeout(exports.createStore), 16), params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-amount-unit my-vip-unit data-history-cdcfe6a8")
      }, "元", 16), exports.store ? params(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("origin-price data-history-cdcfe6a8")
      }, clearTimeout(exports.mutation) + "元", 16, 0) : navigator], 4)], 4), params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card-footer my-vip-footer data-history-cdcfe6a8")
      }, clearTimeout(exports.N), 16)], 4, 0) : navigator, 2, 0) : navigator], 4)
    }
  })), window.app["components/qm-pay-card/index"] = $m_ComponentsQmpaycardIndex_6c93856d, window.$m_ComponentsQmpaycardComponentsGuidehand_ba3e8e33 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar.resolveBuiltinComponent,
      clearTimeout = Yaw.createVNode,
      setTimeout = setInterval("tt-image"),
      require = setInterval("tt-view");
    module.scopeId = "tt-clearInterval-uj6OM8-jsonParse", module.render = function (exports, module) {
      return clearTimeout(require, {
        style: "bottom:" + exports.state + ";right:" + exports.c,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("hand data-history-9d811854")
      }, clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("hand-animate data-history-9d811854")
      }, [clearTimeout(setTimeout, {
        src: exports.setInterval,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("hand-animate-img data-history-9d811854")
      }), clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("hand-animate-round data-history-9d811854")
      })], 4), 2)
    }
  })), window.app["components/qm-pay-card/components/guide-hand"] = $m_ComponentsQmpaycardComponentsGuidehand_ba3e8e33, window.$m_ComponentsQmtabIndex_49ce442c = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$sg,
      setTimeout = setInterval.renderList,
      require = setInterval.$ss,
      params = setInterval.resolveBuiltinComponent,
      navigator = Yaw,
      Promise = navigator.Fragment,
      clearInterval = navigator.createVNode,
      c = navigator.VOID,
      window = params("tt-text"),
      utils = params("tt-view");
    module.scopeId = "tt-clearInterval-Sc5ELGLB", module.render = function (exports, module) {
      return clearInterval(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-tab data-history-9bcce6b4 " + (exports.resolve && "main") + " " + (exports.screen && "secondary"))
      }, [clearInterval(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-tab-container data-history-9bcce6b4")
      }, clearInterval(Promise, null, setTimeout(exports.setInterval, (function (setInterval, setTimeout) {
        return clearInterval(window, {
          bindtap: module.$$eventBinder(clearTimeout(setInterval, "c")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("qm-tab-item data-history-9bcce6b4 " + (clearTimeout(setInterval, "navigator") && "active") + " " + (exports.state && "main") + " " + (exports.c && "secondary"))
        }, require(clearTimeout(setInterval, "setInterval")), 16, clearTimeout(setInterval, "state"))
      })), 8), 2), exports.navigator ? clearInterval(utils, {
        bindtap: module.$$eventBinder(exports.exports),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("purchase-config data-history-9bcce6b4")
      }, "购买设置", 16, 0) : c], 4)
    }
  })), window.app["components/qm-tab/index"] = $m_ComponentsQmtabIndex_49ce442c, window.$m_ComponentsQmemptyIndex_2dfaaba3 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = clearTimeout("tt-image"),
      clearInterval = clearTimeout("tt-view"),
      c = clearTimeout("tt-text");
    module.scopeId = "tt-clearInterval-Lfqrozmz", module.render = function (exports, module) {
      return params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("empty-container data-history-b84f7c14 " + (exports.resolve && "fixed-class") + " " + (exports.screen && "empty-class"))
      }, [params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("image-wrappper data-history-b84f7c14")
      }, params(Promise, {
        src: exports.setInterval,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("img data-history-b84f7c14")
      }), 2), params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("content data-history-b84f7c14")
      }, setTimeout(exports.state), 16), exports.c ? params(clearInterval, {
        bindtap: module.$$eventBinder(exports.exports),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("btn data-history-b84f7c14")
      }, params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("btn-text data-history-b84f7c14")
      }, setTimeout(exports.navigator), 16), 2, 0) : navigator], 4)
    }
  })), window.app["components/qm-empty/index"] = $m_ComponentsQmemptyIndex_2dfaaba3, window.$m_ComponentsQmpulluploadingIndex_e2143080 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = clearTimeout("tt-image"),
      clearInterval = clearTimeout("tt-text"),
      c = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-4hQwgOuA", module.render = function (exports, module) {
      return params(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-pull-up-loading data-history-2be1f78a")
      }, [params(Promise, {
        src: exports.setInterval,
        __dirname: module.__dirname,
        mode: "scaleToFill",
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-pull-up-loading-icon data-history-2be1f78a")
      }), exports.state ? params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-pull-up-loading-text data-history-2be1f78a")
      }, setTimeout(exports.c), 16, 0) : navigator], 4)
    }
  })), window.app["components/qm-pull-up-loading/index"] = $m_ComponentsQmpulluploadingIndex_e2143080, window.$m_PagesIndexIndex_6157c47a = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = setInterval.Fragment,
      params = Tmar,
      navigator = params.$sg,
      Promise = params.renderList,
      clearInterval = (0, params.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-YVfEess0", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-tab"),
        params = module.$$resolveComponent("qm-scrollx-book-list"),
        c = module.$$resolveComponent("qm-empty"),
        window = module.$$resolveComponent("qm-book-card");
      return clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("index-page data-history-e5cb6391")
      }, [exports.setInterval ? clearTimeout(setInterval, {
        bindchange: module.$$eventBinder(exports.state),
        uI: "e5cb6391-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.c,
        className: module.$$c("data-history-e5cb6391")
      }, null, 1, 0) : setTimeout, clearTimeout(require, null, Promise(exports.navigator, (function (setInterval, utils) {
        return clearTimeout(clearInterval, {
          hidden: !navigator(setInterval, "event"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-content-wrapper data-history-e5cb6391")
        }, [navigator(setInterval, "setInterval") ? clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card data-history-e5cb6391")
        }, [clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card-title data-history-e5cb6391")
        }, "热门作品", 16), clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card-content data-history-e5cb6391")
        }, navigator(setInterval, "navigator") ? clearTimeout(params, {
          bindclick: module.$$eventBinder(navigator(setInterval, "state")),
          uI: navigator(setInterval, "c"),
          bind__l: module.$$eventBinder("__l"),
          uP: navigator(setInterval, "navigator"),
          className: module.$$c("data-history-e5cb6391")
        }, null, 1, 0) : setTimeout, 2)], 4, 0) : setTimeout, clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card data-history-e5cb6391")
        }, [clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card-title data-history-e5cb6391")
        }, "为你推荐", 16), exports.exports ? clearTimeout(c, {
          "bind-data-c-location": module.$$eventBinder(!navigator(setInterval, "exports")),
          uI: navigator(setInterval, "resolve"),
          bind__l: module.$$eventBinder("__l"),
          uP: exports.exports,
          className: module.$$c("data-history-e5cb6391")
        }, null, 1, 0) : setTimeout, clearTimeout(clearInterval, {
          hidden: !navigator(setInterval, "location"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card-content data-history-e5cb6391")
        }, clearTimeout(require, null, Promise(navigator(setInterval, "screen"), (function (exports, setInterval) {
          return clearTimeout(clearInterval, {
            bindtap: module.$$eventBinder(navigator(exports, "navigator")),
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("recommend-list data-history-e5cb6391")
          }, navigator(exports, "state") ? clearTimeout(window, {
            uI: navigator(exports, "setInterval"),
            bind__l: module.$$eventBinder("__l"),
            uP: navigator(exports, "state"),
            className: module.$$c("data-history-e5cb6391")
          }, null, 1, 0) : setTimeout, 2, navigator(exports, "c"))
        })), 8), 2)], 4), navigator(setInterval, "clearTimeout") ? clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("nomore-data data-history-e5cb6391")
        }, "暂无更多内容", 16, 0) : setTimeout], 4, navigator(setInterval, "success"))
      })), 8), exports.resolve ? clearTimeout(c, {
        bindbtnClick: module.$$eventBinder(exports.screen),
        uI: "e5cb6391-4",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.location,
        className: module.$$c("data-history-e5cb6391")
      }, null, 1, 0) : setTimeout], 4)
    }
  })), window.app["pages/index/index"] = $m_PagesIndexIndex_6157c47a, window.$m_ComponentsQmscrollxbooklistIndex_fee09340 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$sg,
      setTimeout = setInterval.renderList,
      require = setInterval.resolveBuiltinComponent,
      params = Yaw,
      navigator = params.Fragment,
      Promise = params.createVNode,
      clearInterval = params.VOID,
      c = require("tt-view"),
      window = require("tt-scroll-view");
    module.scopeId = "tt-clearInterval--uCTQCP-", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-book-card");
      return Promise(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-5ae3cb7d " + (exports.c && "content-wrap"))
      }, Promise(window, {
        scrollX: exports.state,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-5ae3cb7d")
      }, Promise(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-scrollx-book-list data-history-5ae3cb7d")
      }, Promise(navigator, null, setTimeout(exports.setInterval, (function (exports, setTimeout) {
        return Promise(c, {
          bindtap: module.$$eventBinder(clearTimeout(exports, "navigator")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("data-history-5ae3cb7d")
        }, clearTimeout(exports, "state") ? Promise(setInterval, {
          uI: clearTimeout(exports, "setInterval"),
          bind__l: module.$$eventBinder("__l"),
          uP: clearTimeout(exports, "state"),
          className: module.$$c("data-history-5ae3cb7d")
        }, null, 1, 0) : clearInterval, 2, clearTimeout(exports, "c"))
      })), 8), 2), 2), 2)
    }
  })), window.app["components/qm-scrollx-book-list/index"] = $m_ComponentsQmscrollxbooklistIndex_fee09340, window.$m_ComponentsQmbookcardIndex_58b0c28f = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$ss,
      setTimeout = setInterval.resolveBuiltinComponent,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = require.Fragment,
      clearInterval = setTimeout("tt-view"),
      c = setTimeout("tt-image");
    module.scopeId = "tt-clearInterval-WLDCj8ql", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("queryData-theme-overlay");
      return params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-book-card data-history-fbcfa562")
      }, params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-book-item data-history-fbcfa562")
      }, [params(clearInterval, {
        style: "width:" + exports.event,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-cover data-history-fbcfa562")
      }, [params(clearInterval, {
        style: "width:" + exports.screen + ";height:" + exports.location,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-image-container data-history-fbcfa562")
      }, [exports.setInterval ? params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("default-station data-history-fbcfa562")
      }, clearTimeout(exports.state), 16, 0) : navigator, exports.resolve ? params(setInterval, {
        uS: ["navigator"],
        uI: "fbcfa562-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.resolve,
        className: module.$$c("data-history-fbcfa562"),
        $$slots: {
          default: params(Promise, null, [params(c, {
            lazyLoad: !0,
            src: exports.c,
            __dirname: module.__dirname,
            bindload: module.$$eventBinder(exports.navigator),
            hidden: !exports.exports,
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("book-image data-history-fbcfa562")
          })], 4)
        }
      }, null, 1, 0) : navigator], 4), exports.clearTimeout ? params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-title screen-ellipsis-clamp-2 vertical-class data-history-fbcfa562")
      }, clearTimeout(exports.success), 16, 0) : navigator], 4), exports.window ? params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-info data-history-fbcfa562")
      }, [params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-title screen-ellipsis-clamp-1 data-history-fbcfa562 " + (exports.require && "history-class") + " " + (exports.setTimeout && "normal-class") + " " + (exports.document && "title-dark"))
      }, clearTimeout(exports.data), 16), exports.queryData ? params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-brief-introduce book-introduction screen-ellipsis-clamp-2 data-history-fbcfa562 " + (exports.clearInterval && "text-dark"))
      }, clearTimeout(exports.Promise), 16, 0) : navigator, params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-brief-introduce data-history-fbcfa562 " + (exports.history && "text-dark"))
      }, clearTimeout(exports.module), 16)], 4, 0) : navigator], 4), 2)
    }
  })), window.app["components/qm-book-card/index"] = $m_ComponentsQmbookcardIndex_58b0c28f, window.$m_NodemodulesRepoQmcomponentsSrcQthemeoverlayIndex_2ae3a8c7 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.VOID,
      setTimeout = setInterval.createVNode,
      require = Tmar,
      params = require.renderSlot,
      navigator = (0, require.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-KuOox0NS", module.render = function (exports, module) {
      return setTimeout(navigator, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-theme-overlay data-history-7fc25c26")
      }, [params(module.$$slots, "default", clearTimeout, {}), exports.setInterval ? setTimeout(navigator, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-theme-overlay-mask data-history-7fc25c26")
      }, null, 1, 0) : clearTimeout], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-theme-overlay/index"] = $m_NodemodulesRepoQmcomponentsSrcQthemeoverlayIndex_2ae3a8c7, window.$m_PagesReadhistoryIndex_0f0b9da5 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$sg,
      require = setInterval.renderList,
      params = Yaw,
      navigator = params.createVNode,
      Promise = params.Fragment,
      clearInterval = params.VOID,
      c = clearTimeout("tt-text"),
      window = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-Dwudpfb5", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-book-card"),
        clearTimeout = module.$$resolveComponent("qm-empty");
      return exports.setInterval ? navigator(window, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("container data-history-93f6347c")
      }, [navigator(window, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("tool-bar screen-flex-between-center data-history-93f6347c")
      }, navigator(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("screen-fw-600 screen-fs-42 data-history-93f6347c")
      }, "最近阅读", 16), 2), navigator(window, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-93f6347c")
      }, navigator(Promise, null, require(exports.state, (function (exports, clearTimeout) {
        return navigator(window, {
          bindtap: module.$$eventBinder(setTimeout(exports, "navigator")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("book-card data-history-93f6347c")
        }, setTimeout(exports, "state") ? navigator(setInterval, {
          uI: setTimeout(exports, "setInterval"),
          bind__l: module.$$eventBinder("__l"),
          uP: setTimeout(exports, "state"),
          className: module.$$c("data-history-93f6347c")
        }, null, 1, 0) : clearInterval, 2, setTimeout(exports, "c"))
      })), 8), 2)], 4, 0) : exports.c ? navigator(clearTimeout, {
        bindbtnClick: module.$$eventBinder(exports.navigator),
        uI: "93f6347c-1",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.exports,
        className: module.$$c("data-history-93f6347c")
      }, null, 1, 1) : navigator(clearTimeout, {
        bindbtnClick: module.$$eventBinder(exports.resolve),
        uI: "93f6347c-2",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.screen || "",
        className: module.$$c("data-history-93f6347c")
      }, null, 1, 2)
    }
  })), window.app["pages/read-history/index"] = $m_PagesReadhistoryIndex_0f0b9da5, window.$m_PagesReaderIndex_863a30e9 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = (0, Tmar.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-hjow6V9S", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-pay-panel"),
        params = module.$$resolveComponent("final-chapter"),
        navigator = module.$$resolveComponent("queryData-reader");
      return exports.location ? clearTimeout(navigator, {
        uS: ["qReaderBottom"],
        uR: "refReader",
        uI: "c26bce53-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.location,
        className: module.$$c("Promise data-history-c26bce53"),
        $$slots: {
          qReaderBottom: clearTimeout(require, {
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("")
          }, [exports.setInterval ? clearTimeout(setInterval, {
            bindpaySuccess: module.$$eventBinder(exports.state),
            bindpayFail: module.$$eventBinder(exports.c),
            uI: "c26bce53-1,c26bce53-0",
            bind__l: module.$$eventBinder("__l"),
            uP: exports.navigator,
            className: module.$$c("data-history-c26bce53")
          }, null, 1, 0) : setTimeout, exports.exports ? clearTimeout(params, {
            uI: "c26bce53-2,c26bce53-0",
            bind__l: module.$$eventBinder("__l"),
            uP: exports.resolve,
            className: module.$$c("js-final-chapter data-history-c26bce53")
          }, null, 1, 0) : setTimeout], 4)
        }
      }, null, 1, 0) : setTimeout
    }
  })), window.app["pages/reader/index"] = $m_PagesReaderIndex_863a30e9, window.$m_NodemodulesRepoQmcomponentsSrcQreaderIndex_1be896b2 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.VOID,
      setTimeout = setInterval.createVNode,
      require = setInterval.Fragment,
      params = Tmar,
      navigator = params.renderSlot,
      Promise = (0, params.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-getType-iWshx0", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("chapter-content"),
        params = module.$$resolveComponent("setting");
      return setTimeout(require, null, [setTimeout(Promise, {
        bindtap: module.$$eventBinder(exports.exports),
        "capture-bindtouchmove": module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("")
      }, exports.navigator ? setTimeout(setInterval, {
        uS: ["qReaderTop", "qReaderBottom"],
        uR: "refChapterContent",
        uI: "47793152-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.navigator,
        className: module.$$c("Promise"),
        $$slots: {
          qReaderTop: setTimeout(Promise, {
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("")
          }, navigator(module.$$slots, "qReaderTop", clearTimeout, {}), 2),
          qReaderBottom: setTimeout(Promise, {
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("")
          }, [exports.setInterval ? navigator(module.$$slots, "qReaderBottomStuck", clearTimeout, {}, 0) : clearTimeout, navigator(module.$$slots, "qReaderBottom", clearTimeout, {})], 4)
        }
      }, null, 1, 0) : clearTimeout, 2), exports.location ? setTimeout(params, {
        bindchangeChapter: module.$$eventBinder(exports.screen),
        uI: "47793152-1",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.location,
        className: module.$$c("")
      }, null, 1, 0) : clearTimeout], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/index"] = $m_NodemodulesRepoQmcomponentsSrcQreaderIndex_1be896b2, window.$m_NodemodulesRepoQmcomponentsSrcQreaderChaptercontent_1874b173 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.VOID,
      setTimeout = setInterval.Fragment,
      require = setInterval.createVNode,
      params = Tmar,
      navigator = params.renderSlot,
      Promise = params.$sg,
      clearInterval = params.renderList,
      c = params.resolveBuiltinComponent,
      window = params.$ss,
      utils = c("tt-view"),
      document = c("tt-text"),
      data = c("tt-scroll-view");
    module.scopeId = "tt-clearInterval-GHSxc1uU", module.render = function (exports, module) {
      return require(data, {
        style: exports.c,
        scrollY: !0,
        lowerThreshold: 500,
        bindscrolltolower: module.$$eventBinder(exports.navigator),
        showScrollbar: !1,
        enhanced: !0,
        refresherEnabled: exports.exports,
        bindrefresherrefresh: module.$$eventBinder(exports.resolve),
        refresherTriggered: exports.screen,
        scrollIntoView: exports.location,
        scrollTop: exports.clearTimeout,
        refresherBackground: exports.success,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-reader")
      }, [navigator(module.$$slots, "qReaderTop", clearTimeout, {}), require(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-reader-content " + exports.state)
      }, require(setTimeout, null, clearInterval(exports.setInterval, (function (exports, setInterval) {
        return require(setTimeout, {
          className: module.$$c("")
        }, Promise(exports, "setInterval") ? require(utils, {
          style: "height:" + Promise(exports, "state"),
          id: Promise(exports, "c"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("")
        }, null, 1, 0) : require(utils, {
          "data-index": Promise(exports, "success"),
          id: Promise(exports, "event"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("chapter-item")
        }, [require(document, {
          "data-index": "-1",
          "data-id": Promise(exports, "exports"),
          style: Promise(exports, "resolve"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("js-chapter-item chapter-item-title")
        }, window(Promise(exports, "navigator")), 16), require(setTimeout, null, clearInterval(Promise(exports, "screen"), (function (setInterval, clearTimeout) {
          return require(document, {
            style: Promise(exports, "location"),
            "data-index": Promise(setInterval, "c"),
            "data-id": Promise(exports, "clearTimeout"),
            id: Promise(setInterval, "navigator"),
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("js-chapter-item chapter-item-text")
          }, window(Promise(setInterval, "setInterval")), 16, Promise(setInterval, "state"))
        })), 8)], 4, 1), 2, Promise(exports, "window"))
      })), 8), 2), navigator(module.$$slots, "qReaderBottom", clearTimeout, {})], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/chapter-content"] = $m_NodemodulesRepoQmcomponentsSrcQreaderChaptercontent_1874b173, window.$m_NodemodulesRepoQmcomponentsSrcQreaderSetting_75b0dafc = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$sg,
      setTimeout = setInterval.renderList,
      require = setInterval.resolveBuiltinComponent,
      params = setInterval.$ss,
      navigator = Yaw,
      Promise = navigator.Fragment,
      clearInterval = navigator.createVNode,
      c = navigator.VOID,
      window = require("tt-text"),
      utils = require("tt-view");
    module.scopeId = "tt-clearInterval-dbDa-IM5", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("setting-box"),
        require = module.$$resolveComponent("book-info"),
        navigator = module.$$resolveComponent("chapter-list"),
        document = module.$$resolveComponent("queryData-popup");
      return clearInterval(Promise, null, [clearInterval(utils, {
        style: exports.state,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("safe-area data-history-d3078003 " + (exports.c && "transation-show"))
      }, clearInterval(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("set-buttons data-history-d3078003")
      }, clearInterval(Promise, null, setTimeout(exports.setInterval, (function (exports, setInterval) {
        return clearInterval(utils, {
          bindtap: module.$$eventBinder(clearTimeout(exports, "navigator")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("set-buttons-item screen-flex-1 data-history-d3078003")
        }, [clearInterval(window, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("qm-iconfont data-history-d3078003 " + clearTimeout(exports, "setInterval"))
        }), clearInterval(window, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("set-buttons-item-text data-history-d3078003")
        }, params(clearTimeout(exports, "state")), 16)], 4, clearTimeout(exports, "c"))
      })), 8), 2), 2), exports.navigator ? clearInterval(utils, {
        style: exports.clearTimeout,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("safe-area change-btn-wrapper data-history-d3078003 " + (exports.success && "transation-show"))
      }, clearInterval(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("change-btn screen-flex data-history-d3078003")
      }, [clearInterval(window, {
        style: "color:" + exports.exports,
        bindtap: module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("change-btn-item screen-flex-1 data-history-d3078003")
      }, "上一章", 16), clearInterval(window, {
        style: "color:" + exports.screen,
        bindtap: module.$$eventBinder(exports.location),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("change-btn-item screen-flex-1 data-history-d3078003")
      }, "下一章", 16)], 4), 2, 0) : c, clearInterval(utils, {
        style: exports.window,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("setting-popup data-history-d3078003 " + (exports.data && "transation-show"))
      }, exports.event ? clearInterval(setInterval, {
        uI: "d3078003-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.event,
        className: module.$$c("data-history-d3078003")
      }, null, 1, 0) : c, 2), exports.clearInterval ? clearInterval(document, {
        uS: ["navigator"],
        bindopened: module.$$eventBinder(exports.document),
        bindclosed: module.$$eventBinder(exports.queryData),
        uI: "d3078003-1",
        bind__l: module.$$eventBinder("__l"),
        bindupdateModelValue: module.$$eventBinder(exports.Promise),
        uP: exports.clearInterval,
        className: module.$$c("data-history-d3078003"),
        $$slots: {
          default: clearInterval(Promise, null, [exports.require ? clearInterval(utils, {
            style: exports.setTimeout + ";border:none",
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("pop-box data-history-d3078003")
          }, [clearInterval(require, {
            uI: "d3078003-2,d3078003-1",
            bind__l: module.$$eventBinder("__l"),
            className: module.$$c("data-history-d3078003")
          }), clearInterval(navigator, {
            uI: "d3078003-3,d3078003-1",
            bind__l: module.$$eventBinder("__l"),
            className: module.$$c("data-history-d3078003")
          })], 4, 0) : c], 4)
        }
      }, null, 1, 0) : c], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/setting"] = $m_NodemodulesRepoQmcomponentsSrcQreaderSetting_75b0dafc, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbox_110c734f = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = (0, Tmar.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-EQxzT0a6", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("set-font-size"),
        params = module.$$resolveComponent("set-background");
      return clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-set-box")
      }, [exports.setInterval ? clearTimeout(setInterval, {
        uI: "67ecc917-0",
        bind__l: module.$$eventBinder("__l"),
        className: module.$$c("")
      }, null, 1, 0) : setTimeout, exports.state ? clearTimeout(params, {
        uI: "67ecc917-1",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.c,
        className: module.$$c("")
      }, null, 1, 0) : setTimeout], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/components/set-box"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbox_110c734f, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetfontsize_0c534fe3 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = Yaw.createVNode,
      params = clearTimeout("tt-text"),
      navigator = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-DFNP4yIv", module.render = function (exports, module) {
      return require(navigator, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-set-font-size data-history-3ce71cd1")
      }, [require(params, {
        style: "color:" + exports.setInterval,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("text title data-history-3ce71cd1")
      }, "字号", 16), require(navigator, {
        style: exports.state,
        bindtap: module.$$eventBinder(exports.navigator),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("text-button data-history-3ce71cd1 " + (exports.c && "text-button-disabled"))
      }, require(params, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-3ce71cd1")
      }, "params -", 16), 2), require(params, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("text data-history-3ce71cd1")
      }, setTimeout(exports.exports), 16), require(navigator, {
        style: exports.resolve,
        bindtap: module.$$eventBinder(exports.location),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("text-button data-history-3ce71cd1 " + (exports.screen && "text-button-disabled"))
      }, require(params, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-3ce71cd1")
      }, "params +", 16), 2)], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetfontsize_0c534fe3, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbackground_5aa42e47 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$sg,
      require = setInterval.renderList,
      params = Yaw,
      navigator = params.createVNode,
      Promise = params.Fragment,
      clearInterval = params.VOID,
      c = clearTimeout("tt-text"),
      window = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-WqQuRwB8", module.render = function (exports, module) {
      return navigator(window, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-set-font-size data-history-92150a92")
      }, [navigator(c, {
        style: "color:" + exports.setInterval,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("text title data-history-92150a92")
      }, "背景", 16), navigator(window, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("color-buttons data-history-92150a92")
      }, navigator(Promise, null, require(exports.state, (function (exports, setInterval) {
        return navigator(window, {
          style: "background-color:" + setTimeout(exports, "c") + ";border-color:" + setTimeout(exports, "navigator"),
          bindtap: module.$$eventBinder(setTimeout(exports, "exports")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("color-button screen-flex-center-center data-history-92150a92")
        }, setTimeout(exports, "setInterval") ? navigator(window, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("icon-night-skin qm-iconfont data-history-92150a92")
        }, null, 1, 0) : clearInterval, 2, setTimeout(exports, "state"))
      })), 8), 2)], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/components/set-background"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsSetbackground_5aa42e47, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsBookinfo_73f89793 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = setInterval.Fragment,
      params = Tmar,
      navigator = params.$ss,
      Promise = params.resolveBuiltinComponent,
      clearInterval = Promise("tt-text"),
      c = Promise("tt-view"),
      window = Promise("tt-image");
    module.scopeId = "tt-clearInterval-c-iXk5ow", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("queryData-image"),
        params = module.$$resolveComponent("queryData-theme-overlay");
      return clearTimeout(c, {
        style: exports.setTimeout,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-info data-history-af4da369")
      }, [clearTimeout(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-info-content data-history-af4da369")
      }, [exports.c ? clearTimeout(params, {
        uS: ["navigator"],
        uI: "af4da369-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.c,
        className: module.$$c("book-image data-history-af4da369"),
        $$slots: {
          default: clearTimeout(require, null, [exports.state ? clearTimeout(setInterval, {
            style: exports.setInterval,
            uI: "af4da369-1,af4da369-0",
            bind__l: module.$$eventBinder("__l"),
            uP: exports.state,
            className: module.$$c("data-history-af4da369")
          }, null, 1, 0) : setTimeout], 4)
        }
      }, null, 1, 0) : setTimeout, clearTimeout(c, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-message data-history-af4da369")
      }, [clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-af4da369 book-title " + exports.exports)
      }, navigator(exports.navigator), 16), clearTimeout(clearInterval, {
        style: exports.screen,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-author data-history-af4da369")
      }, navigator(exports.resolve), 16)], 4), exports.success ? clearTimeout(params, {
        uS: ["navigator"],
        uI: "af4da369-2",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.success,
        className: module.$$c("data-history-af4da369"),
        $$slots: {
          default: clearTimeout(require, null, [exports.location ? clearTimeout(window, {
            src: exports.clearTimeout,
            __dirname: module.__dirname,
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("book-icon data-history-af4da369")
          }, null, 1, 0) : setTimeout], 4)
        }
      }, null, 1, 0) : setTimeout], 4), exports.event ? clearTimeout(clearInterval, {
        style: exports.require,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-bottom-message data-history-af4da369")
      }, navigator(exports.window) + " 共" + navigator(exports.data) + "章", 16, 0) : setTimeout], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/components/book-info"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsBookinfo_73f89793, window.$m_NodemodulesRepoQmcomponentsSrcQimageIndex_51d0c26c = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar.resolveBuiltinComponent,
      clearTimeout = Yaw.createVNode,
      setTimeout = setInterval("tt-image"),
      require = setInterval("tt-view");
    module.scopeId = "tt-clearInterval-UdDCbDCS", module.render = function (exports, module) {
      return clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-image-bg data-history-bbadde69")
      }, [clearTimeout(setTimeout, {
        hidden: !exports.setInterval,
        binderror: module.$$eventBinder(exports.state),
        src: exports.c,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-image data-history-bbadde69")
      }), clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("queryData-image-border data-history-bbadde69")
      })], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-image/index"] = $m_NodemodulesRepoQmcomponentsSrcQimageIndex_51d0c26c, window.$m_NodemodulesRepoQmcomponentsSrcQreaderComponentsChapterlist_a1aa7439 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$sg,
      setTimeout = setInterval.renderList,
      require = setInterval.$ss,
      params = setInterval.resolveBuiltinComponent,
      navigator = Yaw,
      Promise = navigator.Fragment,
      clearInterval = navigator.createVNode,
      c = navigator.VOID,
      window = params("tt-text"),
      utils = params("tt-image"),
      document = params("tt-view"),
      data = params("tt-scroll-view");
    module.scopeId = "tt-clearInterval-oap0OZ5W", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("queryData-theme-overlay");
      return clearInterval(data, {
        scrollY: "true",
        scrollTop: exports.navigator,
        bindscroll: module.$$eventBinder(exports.exports),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("chapter-list data-history-3401af1a")
      }, [clearInterval(document, {
        style: "transform:" + exports.state,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-3401af1a")
      }, clearInterval(Promise, null, setTimeout(exports.setInterval, (function (exports, setTimeout) {
        return clearInterval(document, {
          bindtap: module.$$eventBinder(clearTimeout(exports, "success")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("chapter-list-item data-history-3401af1a")
        }, [clearInterval(window, {
          style: clearTimeout(exports, "c"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("chapter-list-item-text data-history-3401af1a " + (clearTimeout(exports, "state") && "chapter-list-item-active"))
        }, require(clearTimeout(exports, "setInterval")), 16), clearTimeout(exports, "navigator") ? clearInterval(Promise, {
          className: module.$$c("")
        }, clearTimeout(exports, "exports") ? clearInterval(window, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("qm-iconfont icon-lock chapter-icon-font data-history-3401af1a")
        }, null, 1, 0) : clearInterval(setInterval, {
          uS: ["navigator"],
          uI: clearTimeout(exports, "screen"),
          bind__l: module.$$eventBinder("__l"),
          uP: clearTimeout(exports, "location") || "",
          className: module.$$c("chapter-icon data-history-3401af1a"),
          $$slots: {
            default: clearInterval(Promise, null, [clearInterval(utils, {
              src: clearTimeout(exports, "resolve"),
              __dirname: module.__dirname,
              __fields: module.__fields,
              __bridge: module.__bridge,
              className: module.$$c("chapter-icon-image data-history-3401af1a")
            })], 4)
          }
        }, null, 1, 1), 2, 0) : c], 4, clearTimeout(exports, "clearTimeout"))
      })), 8), 2), clearInterval(document, {
        style: "height:" + exports.c,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("chapter-scroll-wrapper data-history-3401af1a")
      })], 4)
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list"] = $m_NodemodulesRepoQmcomponentsSrcQreaderComponentsChapterlist_a1aa7439, window.$m_NodemodulesRepoQmcomponentsSrcQpopupIndex_1bc3c1ec = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.renderSlot,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = require.Fragment,
      clearInterval = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-G8PB7ISr", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("uni-popup");
      return exports.event ? params(setInterval, {
        uS: ["navigator"],
        uR: "refPopup",
        bindmaskClick: module.$$eventBinder(exports.success),
        uI: "e9af1c21-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.event,
        className: module.$$c("queryData-popup Promise data-history-e9af1c21"),
        $$slots: {
          default: params(Promise, null, [exports.setInterval ? params(Promise, {
            className: module.$$c("")
          }, params(clearInterval, {
            style: exports.screen + ";" + exports.location,
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("queryData-popup-content data-history-e9af1c21")
          }, [params(clearInterval, {
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("control screen-flex-center-center data-history-e9af1c21")
          }, params(clearInterval, {
            style: "background-color:" + exports.state,
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("control-bar data-history-e9af1c21")
          }), 2), params(clearInterval, {
            style: "height:" + exports.c,
            bindtouchstart: module.$$eventBinder(exports.navigator),
            bindtouchmove: module.$$eventBinder(exports.exports),
            bindtouchend: module.$$eventBinder(exports.resolve),
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("control-area data-history-e9af1c21")
          }), setTimeout(module.$$slots, "default", navigator, {})], 4), 2, 0) : params(Promise, {
            className: module.$$c("")
          }, setTimeout(module.$$slots, "default", navigator, {}), 2, 1)], 4)
        }
      }, null, 1, 0) : navigator
    }
  })), window.app["node-modules/@repo/qm-components/src/queryData-popup/index"] = $m_NodemodulesRepoQmcomponentsSrcQpopupIndex_1bc3c1ec, window.$m_NodemodulesDcloudioUniuiLibUnipopupUnipopup_1e59b06f = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = setInterval.Fragment,
      params = Tmar,
      navigator = params.renderSlot,
      Promise = (0, params.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-Hlmwb0Nr", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("uni-transition");
      return exports.setInterval ? clearTimeout(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("uni-popup " + exports.event + " " + exports.window)
      }, clearTimeout(Promise, {
        bindtouchstart: module.$$eventBinder(exports.success),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("")
      }, [exports.state ? clearTimeout(setInterval, {
        bindclick: module.$$eventBinder(exports.c),
        uI: "9e1925c2-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.navigator,
        className: module.$$c("")
      }, null, 1, "1") : setTimeout, exports.clearTimeout ? clearTimeout(setInterval, {
        uS: ["navigator"],
        bindclick: module.$$eventBinder(exports.location),
        uI: "9e1925c2-1",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.clearTimeout,
        className: module.$$c(""),
        $$slots: {
          default: clearTimeout(require, null, [clearTimeout(Promise, {
            style: exports.exports,
            bindtap: module.$$eventBinder(exports.screen),
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("uni-popup__wrapper " + exports.resolve)
          }, navigator(module.$$slots, "default", setTimeout, {}), 2)], 4)
        }
      }, null, 1, "2") : setTimeout], 4), 2, 0) : setTimeout
    }
  })), window.app["node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"] = $m_NodemodulesDcloudioUniuiLibUnipopupUnipopup_1e59b06f, window.$m_NodemodulesDcloudioUniuiLibUnitransitionUnitransition_8aed75fb = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.VOID,
      setTimeout = setInterval.createVNode,
      require = Tmar,
      params = require.renderSlot,
      navigator = (0, require.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-iu11--To", module.render = function (exports, module) {
      return setTimeout(navigator, {
        hidden: !exports.setInterval,
        ref: "ani",
        animation: exports.state,
        style: exports.navigator,
        bindtap: module.$$eventBinder(exports.exports),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c(exports.c)
      }, params(module.$$slots, "default", clearTimeout, {}), 2)
    }
  })), window.app["node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"] = $m_NodemodulesDcloudioUniuiLibUnitransitionUnitransition_8aed75fb, window.$m_ComponentsQmpaypanelIndex_b040e3a3 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = setInterval.Fragment,
      params = Tmar,
      navigator = params.$sg,
      Promise = params.renderList,
      clearInterval = (0, params.resolveBuiltinComponent)("tt-view");
    module.scopeId = "tt-clearInterval-sEDjo2an", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("panel-header"),
        params = module.$$resolveComponent("qm-pay-card"),
        c = module.$$resolveComponent("queryData-theme-overlay"),
        window = module.$$resolveComponent("purchase-tips"),
        utils = module.$$resolveComponent("purchase-panel");
      return clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-a5a2e6c5 qm-pay-panel " + exports.clearTimeout)
      }, [exports.setInterval ? clearTimeout(require, {
        className: module.$$c("")
      }, clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("js-observer-panel data-history-a5a2e6c5")
      }, [exports.state ? clearTimeout(setInterval, {
        uI: "a5a2e6c5-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.state,
        className: module.$$c("data-history-a5a2e6c5")
      }, null, 1, 0) : setTimeout, exports.c ? clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("recharge-panel data-history-a5a2e6c5")
      }, clearTimeout(require, null, Promise(exports.navigator, (function (setInterval, Promise) {
        return clearTimeout(clearInterval, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("data-history-a5a2e6c5")
        }, exports.exports ? clearTimeout(c, {
          uS: ["navigator"],
          uI: navigator(setInterval, "navigator"),
          bind__l: module.$$eventBinder("__l"),
          uP: exports.exports,
          className: module.$$c("data-history-a5a2e6c5"),
          $$slots: {
            default: clearTimeout(require, null, [navigator(setInterval, "c") ? clearTimeout(params, {
              bindclick: module.$$eventBinder(navigator(setInterval, "setInterval")),
              uI: navigator(setInterval, "state"),
              bind__l: module.$$eventBinder("__l"),
              uP: navigator(setInterval, "c"),
              className: module.$$c("data-history-a5a2e6c5")
            }, null, 1, 0) : setTimeout], 4)
          }
        }, null, 1, 0) : setTimeout, 2, navigator(setInterval, "exports"))
      })), 8), 2, 0) : setTimeout, exports.resolve ? clearTimeout(window, {
        uI: "a5a2e6c5-3",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.resolve,
        className: module.$$c("data-history-a5a2e6c5")
      }, null, 1, 0) : setTimeout], 4), 2, 0) : setTimeout, exports.screen ? clearTimeout(require, {
        className: module.$$c("")
      }, clearTimeout(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("js-observer-panel data-history-a5a2e6c5")
      }, exports.location ? clearTimeout(utils, {
        uI: "a5a2e6c5-4",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.location,
        className: module.$$c("data-history-a5a2e6c5")
      }, null, 1, 0) : setTimeout, 2), 2, 0) : setTimeout], 4)
    }
  })), window.app["components/qm-pay-panel/index"] = $m_ComponentsQmpaypanelIndex_b040e3a3, window.$m_ComponentsQmpaypanelComponentsPanelheader_188ca001 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = Yaw,
      params = require.createVNode,
      navigator = require.VOID,
      Promise = clearTimeout("tt-view"),
      clearInterval = clearTimeout("tt-text");
    module.scopeId = "tt-clearInterval-GIygARbY", module.render = function (exports, module) {
      return params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-panel-header data-history-b2367512")
      }, [exports.setInterval ? params(Promise, {
        style: "background:" + exports.state,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("linear-mask data-history-b2367512")
      }, null, 1, 0) : navigator, params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("title screen-flex-center-center data-history-b2367512")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-b2367512 line " + exports.c)
      }), params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-b2367512 text " + exports.exports)
      }, setTimeout(exports.navigator), 16), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-b2367512 line right " + exports.resolve)
      })], 4), exports.screen ? params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-b2367512 info screen-fs-27 screen-flex-center-center " + exports.clearTimeout)
      }, setTimeout(exports.location), 16, 0) : navigator], 4)
    }
  })), window.app["components/qm-pay-panel/components/panel-header"] = $m_ComponentsQmpaypanelComponentsPanelheader_188ca001, window.$m_ComponentsQmpaypanelComponentsPurchasepanel_1ba621d2 = createCommonjsModule((function (exports, module) {
    var setInterval = Yaw,
      clearTimeout = setInterval.createVNode,
      setTimeout = setInterval.VOID,
      require = setInterval.Fragment,
      params = Tmar.resolveBuiltinComponent,
      navigator = params("tt-view"),
      Promise = params("tt-image");
    module.scopeId = "tt-clearInterval-G6Yh0rmv", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("panel-header"),
        params = module.$$resolveComponent("queryData-theme-overlay");
      return clearTimeout(navigator, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("purchase-panel-container data-history-a18c2d2b")
      }, [exports.setInterval ? clearTimeout(setInterval, {
        uI: "a18c2d2b-0",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.setInterval,
        className: module.$$c("data-history-a18c2d2b")
      }, null, 1, 0) : setTimeout, exports.c ? clearTimeout(params, {
        uS: ["navigator"],
        uI: "a18c2d2b-1",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.c,
        className: module.$$c("data-history-a18c2d2b"),
        $$slots: {
          default: clearTimeout(require, null, [clearTimeout(navigator, {
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("purchase-panel data-history-a18c2d2b")
          }, clearTimeout(navigator, {
            catchtap: module.$$eventBinder(exports.state),
            __fields: module.__fields,
            __bridge: module.__bridge,
            className: module.$$c("panel-btn screen-flex-center-center screen-fw-600 screen-fs-33 data-history-a18c2d2b")
          }, " 购买 ", 16), 2)], 4)
        }
      }, null, 1, 0) : setTimeout, clearTimeout(navigator, {
        catchtap: module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("panel-footer screen-flex-center-center data-history-a18c2d2b")
      }, [clearTimeout(Promise, {
        src: exports.navigator,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("radio data-history-a18c2d2b")
      }), clearTimeout(navigator, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-a18c2d2b buy-next screen-fs-25 " + exports.exports)
      }, " 自动购买下一章 ", 16)], 4)], 4)
    }
  })), window.app["components/qm-pay-panel/components/purchase-panel"] = $m_ComponentsQmpaypanelComponentsPurchasepanel_1ba621d2, window.$m_PagesReaderComponentsFinalchapter_05fa7fa5 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = setInterval.$sg,
      params = setInterval.renderList,
      navigator = Yaw,
      Promise = navigator.createVNode,
      clearInterval = navigator.Fragment,
      c = navigator.VOID,
      window = navigator.createText,
      utils = clearTimeout("tt-text"),
      document = clearTimeout("tt-view");
    module.scopeId = "tt-clearInterval-Bfp-pSlN", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-book-card"),
        clearTimeout = module.$$resolveComponent("qm-icon");
      return Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("final-chapter-container data-history-859a884d")
      }, [exports.setInterval ? Promise(clearInterval, {
        className: module.$$c("")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("chapter-title screen-fw-600 data-history-859a884d " + (exports.c && "module-dark"))
      }, [Promise(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left data-history-859a884d")
      }, "看过《", 16), Promise(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("name data-history-859a884d")
      }, setTimeout(exports.state), 16), Promise(utils, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("right data-history-859a884d")
      }, "》的人也喜欢", 16)], 4), Promise(clearInterval, null, params(exports.navigator, (function (exports, clearTimeout) {
        return Promise(document, {
          catchtap: module.$$eventBinder(require(exports, "navigator")),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("data-history-859a884d")
        }, require(exports, "state") ? Promise(setInterval, {
          uI: require(exports, "setInterval"),
          bind__l: module.$$eventBinder("__l"),
          uP: require(exports, "state"),
          className: module.$$c("data-history-859a884d")
        }, null, 1, 0) : c, 2, require(exports, "c"))
      })), 8)], 4, 0) : c, Promise(document, {
        catchtap: module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("more screen-fs-33 screen-flex-center-center data-history-859a884d " + (exports.exports && "data-dark"))
      }, [window(" 去书城看更多 "), Promise(clearTimeout, {
        uS: ["navigator"],
        uI: "859a884d-1",
        bind__l: module.$$eventBinder("__l"),
        className: module.$$c("arrow-right data-history-859a884d"),
        $$slots: {
          default: Promise(clearInterval, null, [window("")], 4)
        }
      })], 4)], 4)
    }
  })), window.app["pages/reader/components/final-chapter"] = $m_PagesReaderComponentsFinalchapter_05fa7fa5, window.$m_PagesMineIndex_e2647f73 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.resolveBuiltinComponent,
      setTimeout = setInterval.$ss,
      require = setInterval.$sg,
      params = setInterval.renderList,
      navigator = Yaw,
      Promise = navigator.createVNode,
      clearInterval = navigator.VOID,
      c = navigator.createText,
      window = navigator.Fragment,
      utils = clearTimeout("tt-image"),
      document = clearTimeout("tt-view"),
      data = clearTimeout("tt-text"),
      screen = clearTimeout("tt-button");
    module.scopeId = "tt-clearInterval-4mR-cwG3", module.render = function (exports, module) {
      var setInterval = module.$$resolveComponent("qm-icon"),
        clearTimeout = module.$$resolveComponent("how-to-find-me"),
        navigator = module.$$resolveComponent("uni-popup");
      return Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("mine-page screen-flex-column data-history-d168dbb4")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("mine-avatar data-history-d168dbb4")
      }, [Promise(utils, {
        src: exports.setInterval,
        __dirname: module.__dirname,
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("avatar data-history-d168dbb4")
      }), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("user-info data-history-d168dbb4")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("user-name data-history-d168dbb4")
      }, setTimeout(exports.state), 16), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("user-id data-history-d168dbb4")
      }, "用户ID：" + setTimeout(exports.c), 16)], 4)], 4), Promise(document, {
        bindtap: module.$$eventBinder(exports.success),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-info data-history-d168dbb4")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-label data-history-d168dbb4")
      }, exports.navigator ? Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-label-text data-history-d168dbb4")
      }, "开通会员 尊享全场免费读", 16, 0) : exports.exports ? Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-label-text data-history-d168dbb4")
      }, "已开通会员 " + setTimeout(exports.resolve) + "到期", 16, 1) : exports.screen ? Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-label-text data-history-d168dbb4")
      }, "您的会员已于 " + setTimeout(exports.location) + "到期", 16, 2) : Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-label-text data-history-d168dbb4")
      }, "已开通会员", 16, 3), 2), exports.clearTimeout ? Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-button data-history-d168dbb4")
      }, "立即开通", 16, 0) : Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("vip-button data-history-d168dbb4")
      }, "续费会员", 16, 1)], 4), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-currency data-history-d168dbb4")
      }, Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-d168dbb4")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-currenccy-title data-history-d168dbb4")
      }, "我的书币", 16), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("book-currenccy-number data-history-d168dbb4")
      }, [Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("nubmer-text data-history-d168dbb4")
      }, [c(setTimeout(exports.event) + " "), Promise(data, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-d168dbb4")
      }, "书币", 16)], 4), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("nubmer-text data-history-d168dbb4")
      }, [c(setTimeout(exports.window) + " "), Promise(data, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-d168dbb4")
      }, "赠币", 16)], 4)], 4)], 4), 2), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("mine-menu data-history-d168dbb4")
      }, Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("card data-history-d168dbb4")
      }, Promise(window, null, params(exports.data, (function (exports, clearTimeout) {
        return Promise(document, {
          bindtap: module.$$eventBinder(require(exports, "screen")),
          hidden: !require(exports, "clearTimeout"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("card-item data-history-d168dbb4")
        }, [Promise(screen, {
          openType: "byteHi",
          hidden: !require(exports, "setInterval"),
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("btn-contact data-history-d168dbb4")
        }), Promise(document, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("card-item-left data-history-d168dbb4")
        }, [require(exports, "c") ? Promise(setInterval, {
          uI: require(exports, "state"),
          bind__l: module.$$eventBinder("__l"),
          uP: require(exports, "c"),
          className: module.$$c("card-item-left-icon data-history-d168dbb4")
        }, null, 1, 0) : clearInterval, Promise(data, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("card-item-left-title data-history-d168dbb4")
        }, setTimeout(require(exports, "navigator")), 16)], 4), Promise(document, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("card-item-right data-history-d168dbb4")
        }, [Promise(data, {
          __fields: module.__fields,
          __bridge: module.__bridge,
          className: module.$$c("card-item-right-title data-history-d168dbb4")
        }, setTimeout(require(exports, "exports")), 16), Promise(setInterval, {
          uS: ["navigator"],
          uI: require(exports, "resolve"),
          bind__l: module.$$eventBinder("__l"),
          className: module.$$c("arraw-right data-history-d168dbb4"),
          $$slots: {
            default: Promise(window, null, [c("")], 4)
          }
        })], 4)], 4, require(exports, "location"))
      })), 8), 2), 2), Promise(document, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("user-agent data-history-d168dbb4")
      }, [Promise(data, {
        bindtap: module.$$eventBinder(exports.require),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-d168dbb4")
      }, "用户协议", 16), Promise(data, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-d168dbb4")
      }, "｜", 16), Promise(data, {
        bindtap: module.$$eventBinder(exports.setTimeout),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-d168dbb4")
      }, "隐私政策", 16)], 4), exports.Promise ? Promise(navigator, {
        uS: ["navigator"],
        uR: "pupop",
        uI: "d168dbb4-2",
        bind__l: module.$$eventBinder("__l"),
        uP: exports.Promise,
        className: module.$$c("Promise data-history-d168dbb4"),
        $$slots: {
          default: Promise(window, null, [Promise(clearTimeout, {
            bindclose: module.$$eventBinder(exports.document),
            uI: "d168dbb4-3,d168dbb4-2",
            bind__l: module.$$eventBinder("__l"),
            className: module.$$c("data-history-d168dbb4")
          })], 4)
        }
      }, null, 1, 0) : clearInterval], 4)
    }
  })), window.app["pages/mine/index"] = $m_PagesMineIndex_e2647f73, window.$m_PagesMineComponentsHowtofindme_3eca9cc8 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar,
      clearTimeout = setInterval.$ss,
      setTimeout = setInterval.resolveBuiltinComponent,
      require = Yaw,
      params = require.createVNode,
      navigator = require.createText,
      Promise = setTimeout("tt-view"),
      clearInterval = setTimeout("tt-text"),
      c = setTimeout("tt-image");
    module.scopeId = "tt-clearInterval-PsqcyOHY", module.render = function (exports, module) {
      return params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("how-to-find-me data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-content data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-title data-history-ed782a27")
      }, "如何找到「" + clearTimeout(exports.setInterval) + "」", 16), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-step data-history-ed782a27")
      }, [navigator(" 方法1：在抖音首页左上角点击 "), params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-iconfont menu-icon data-history-ed782a27")
      }, "", 16), navigator(" 找到「" + clearTimeout(exports.state) + "」 ")], 4), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-guide data-history-ed782a27")
      }, params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-guide-content data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("content-left data-history-ed782a27")
      }, params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-title data-history-ed782a27")
      }, "常用小程序", 16), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-item data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item-icon data-history-ed782a27")
      }), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item-text data-history-ed782a27")
      })], 4), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-app data-history-ed782a27")
      }, [params(c, {
        src: exports.c,
        __dirname: module.__dirname,
        mode: "scaleToFill",
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("logo data-history-ed782a27")
      }), params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("app-name data-history-ed782a27")
      }, clearTimeout(exports.navigator), 16)], 4), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item data-history-ed782a27")
      }, [params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item-icon data-history-ed782a27")
      }), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("left-wrapper-sub-item-text data-history-ed782a27")
      })], 4)], 4)], 4), 2), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("content-right data-history-ed782a27")
      })], 4), 2), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-step mt-50 data-history-ed782a27")
      }, " 方法2：在抖音主页面右下角点击「我」，在页面中找到「我的小程序」即可找到「" + clearTimeout(exports.exports) + "」 ", 16), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-guide data-history-ed782a27")
      }, params(c, {
        src: "https://new-media-cdn.xmkanshu.com/book-cover/1i5ct9rn5fZj8PxbEmAQaXGGYT7ej.png",
        __dirname: module.__dirname,
        mode: "scaleToFill",
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("find-me-guide-bg data-history-ed782a27")
      }), 2)], 4), params(Promise, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("popup-close data-history-ed782a27")
      }, params(Promise, {
        catchtap: module.$$eventBinder(exports.resolve),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("close-icon-area data-history-ed782a27")
      }, params(clearInterval, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("qm-iconfont close-icon data-history-ed782a27")
      }, "", 16), 2), 2)], 4)
    }
  })), window.app["pages/mine/components/how-to-find-me"] = $m_PagesMineComponentsHowtofindme_3eca9cc8, window.$m_PagesWindowIndex_1e8fe573 = createCommonjsModule((function (exports, module) {
    var setInterval = Tmar.resolveBuiltinComponent,
      clearTimeout = Yaw.createVNode,
      setTimeout = setInterval("tt-web-view"),
      require = setInterval("tt-view");
    module.scopeId = "tt-clearInterval-Ho-lc1s2", module.render = function (exports, module) {
      return clearTimeout(require, {
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("window-container data-history-cc688ed9")
      }, clearTimeout(setTimeout, {
        src: exports.setInterval,
        bindload: module.$$eventBinder(exports.state),
        __fields: module.__fields,
        __bridge: module.__bridge,
        className: module.$$c("data-history-cc688ed9")
      }), 2)
    }
  })), window.app["pages/window/index"] = $m_PagesWindowIndex_1e8fe573
}();
var BASE_DEVICE_WIDTH = 750,
  isIOS = navigator.userAgent.match("iPhone"),
  deviceWidth = window.screen.width || 375,
  deviceDPR = window.devicePixelRatio || 2,
  eps = 1e-4,
  rpx2px = Tmar.rpx2px || function (exports) {
    return 0 === exports ? 0 : (exports = exports / BASE_DEVICE_WIDTH * deviceWidth, 0 === (exports = Math.floor(exports + eps)) ? 1 !== deviceDPR && isIOS ? .5 : 1 : exports)
  };

function getCss(exports, module, setInterval, clearTimeout) {
  var setTimeout = "";
  return "string" == typeof exports && (exports = [exports]), exports.forEach((function (exports) {
    if ("number" == typeof exports) setTimeout += rpx2px(exports) + "px";
    else if (Array.isArray(exports)) {
      if (1 === exports[0]) module && (setTimeout = setTimeout + "." + module);
      else if (2 === exports[0]) {
        var require = exports[1];
        if (clearTimeout[require]) return "";
        clearTimeout[require] = 1;
        var params = window.CSS_MAP[exports[1]];
        params && (setTimeout += getCss(params, module, setInterval, clearTimeout))
      }
    } else if ("string" == typeof exports) {
      if (navigator.userAgent.indexOf("webview/ByteDanceWebAppPlatform") > -1) {
        var navigator = 0;
        if ("function" == typeof window.getCurrentWebviewId) navigator = window.getCurrentWebviewId();
        exports = "app.ttss" === setInterval || "app.wxss" === setInterval ? exports.replace(/(^|\clearInterval)body(?=\{|\clearInterval)/screen, ".tma-box--page #app") : exports.replace(/(^|\clearInterval)body(?=\{|\clearInterval)/screen, '.tma-box--page[webview-id="' + navigator + '"] #app')
      }
      setTimeout += exports
    }
  })), setTimeout = setTimeout.replace(/%tt-\$-([setInterval-zA-Z0-9-]+)%/screen, (function (exports, module) {
    return Tmar.isYawComponent("tt-" + module) ? ".tt-utils-" + module : Tmar.isTmarComponent("tt-" + module) ? "tt-" + module : Tmar.supportStyleTTUser ? module + "[__ttuser]" : module
  }))
}

function putCssToHead(exports, module, setInterval) {
  if (exports) {
    var clearTimeout = document.createElement("style");
    clearTimeout.type = "text/css";
    var setTimeout = document.head || document.getElementsByTagName("head")[0],
      require = getCss(exports, setInterval, module, {});
    clearTimeout.styleSheet ? clearTimeout.styleSheet.cssText = require : clearTimeout.appendChild(document.createTextNode(require)), setTimeout.appendChild(clearTimeout)
  }
}
putCssToHead(["%tt-$-view%,%tt-$-text%,%tt-$-scroll-view%{box-sizing:border-box;display:block;font-family:PingFangSC,PingFang SC;font-size:", 28, "}%tt-$-image%{display:block}.screen-flex{display:flex}.screen-flex-start-center{display:flex;justify-content:start;align-items:center}.screen-flex-center-center{display:flex;justify-content:center;align-items:center}.screen-flex-between-center{display:flex;justify-content:space-between;align-items:center}.screen-flex-1{flex:1}.screen-flex-wrap{flex-wrap:wrap}.screen-flex-column{display:flex;flex-direction:column}.screen-safe-padding-bottom{padding-bottom:content(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.screen-text-nowrap{white-space:nowrap}.screen-fw-600{font-weight:600}.screen-fs-20{font-size:", 20, "}.screen-fs-23{font-size:", 23, "}.screen-fs-25{font-size:", 25, "}.screen-fs-27{font-size:", 27, "}.screen-fs-29{font-size:", 29, "}.screen-fs-31{font-size:", 31, "}.screen-fs-33{font-size:", 33, "}.screen-fs-38{font-size:", 38, "}.screen-fs-42{font-size:", 42, "}.screen-fs-44{font-size:", 44, "}.screen-fs-54{font-size:", 54, '}.screen-ellipsis-clamp-1{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1}.screen-ellipsis-clamp-2{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.screen-ellipsis-clamp-3{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3}.screen-ellipsis-clamp-4{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;line-clamp:4}.screen-ellipsis-clamp-5{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5}.screen-ellipsis-clamp-6{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6;line-clamp:6}.screen-ellipsis-clamp-7{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:7;line-clamp:7}.screen-ellipsis-clamp-8{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:8;line-clamp:8}.screen-ellipsis-clamp-9{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:9;line-clamp:9}.screen-ellipsis-clamp-10{width:-moz-fit-content;width:fit-content;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:10;line-clamp:10}@font-face{font-family:qmiconfont;src:url(data:font/ttf;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzI8FklIAAABjAAAAGBjbWFwC8+4yAAAAmAAAAL6Z2x5ZqOUdBcAAAWYAAAUKGhlYWQr14SoAAAA4AAAADZoaGVhCs0HVwAAALwAAAAkaG10eH0NAAAAAAHsAAAAdGxvY2FDHEeoAAAFXAAAADxtYXhwATEAlAAAARgAAAAgbmFtZRCjPLAAABnAAAACZ3Bvc3RsEal4AAAcKAAAAaAAAQAAA4D/gABcB7kAAAAABu8AAQAAAAAAAAAAAAAAAAAAAB0AAQAAAAEAAFzQ0+ZfDzz1AAsEAAAAAADi5KBWAAAAAOLkoFYAAP/FBu8DOgAAAAgAAgAAAAAAAAABAAAAHQCIAAoAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAQEUAGQAAUAAAKJAswAAACPAokCzAAAAesAMgEIAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAwOYB5igDgP+AAAAD3ACAAAAAAQAAAAAAAAAAAAAAAAACBAAAAAQAAAAEAAAABAAAAAQAAAAHuQAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABqoAAAQAAAAEAAAABAAAAAQAAAAEAAAABqoAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABmgABAAAAAACUAAMAAQAAACwAAwAKAAABmgAEAGgAAAAIAAgAAgAA5gHmDuYo//8AAOYB5g3mEP//AAAAAAAAAAEACAAIAAoAAAADABsAGgAcAAwADQAOAAoADwAQABEAEgATABQAFQAWABcAGAAZAAcACwAJAAYACAAFAAQAAgABAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAFgAAAAAAAAABwAAOYBAADmAQAAAAMAAOYNAADmDQAAABsAAOYOAADmDgAAABoAAOYQAADmEAAAABwAAOYRAADmEQAAAAwAAOYSAADmEgAAAA0AAOYTAADmEwAAAA4AAOYUAADmFAAAAAoAAOYVAADmFQAAAA8AAOYWAADmFgAAABAAAOYXAADmFwAAABEAAOYYAADmGAAAABIAAOYZAADmGQAAABMAAOYaAADmGgAAABQAAOYbAADmGwAAABUAAOYcAADmHAAAABYAAOYdAADmHQAAABcAAOYeAADmHgAAABgAAOYfAADmHwAAABkAAOYgAADmIAAAAAcAAOYhAADmIQAAAAsAAOYiAADmIgAAAAkAAOYjAADmIwAAAAYAAOYkAADmJAAAAAgAAOYlAADmJQAAAAUAAOYmAADmJgAAAAQAAOYnAADmJwAAAAIAAOYoAADmKAAAAAEAAAAAAAAAUACYAOQBDAHIAgwCUAKKAsgDHgNuA6IEOASsBUQFbAXmBmAGtAb6B1YHogf0CFIIwgk0CXgKFAACAAD/1QOrAysAFAAxAAABMhcWFxYUBwYHBiInJicmNDc2NzYFJiIPAScmIgYUHwEHBhQWMj8BFxYyNjQvATc2NAIAdGNhODs7OGFj6GNhODs7OGFjASYLIAt8fAsgFgt8fAsWIAt8fAsgFgt8fAsDKzs4YWPoY2E4Ozs4YWPoY2E4O/kLC3x8CxYgC3x8CyAWC3x8CxYgC3x8CyAAAAAAAgAA//EDjwMWABcALAAAATIeAwYHFx4BDgEvAQ4BLgM+AhciBwYHBhQXFhcWMjc2NzY0JyYnJgHrSolrPgYwMXQMAxUgDHpCn6GIUxMybZVTVEdGKSoqKUZHp0hFKSoqKUVIAxU3ZoiTjDhjCiAYAwtoMiUeYI2innpDTCopRkenSEUpKiopRUinR0YpKgAAAwAAAAADAAJNABEAIQAzAAABISIGHQEUFxYzITI3Nj0BNCYHISIGFTUUFjMhMjY1FTQmByEiBh0BFBcWMyEyNzY9ATQmAuD+QA0TCQgPAcAPCAkTSf58DRMTDQGEDhISSf63DRMKBw8BSQ8ICRMCTRUPBQ4FBAQFDgUPFccVDwkPFhYPCQ8VxhUPBQ4FBAQFDgUPFQAAAAABAAD/1QOBAysAFgAAATIXFhcWFAcGBwYiJic+Ay4BJz4BAdV0ZGA5Ojo5YGTnxzk3WTUGK1I1PLcDKzs4YWPoY2E4O3RkCD5fbmRHDlNfAAQAAAAABu8C5wAvAEMAcwCHAAABMhYdARQGIyEDDgEiLwEuATQ/ASMGJj0BNDY7ATcjIiY9ATQ2MyEyFh0BFAYrAQcBFhUUDwEGIyInASY1ND8BNjMyFyUyFh0BFAYjIQMOASIvAS4BND8BIwYmPQE0NjsBNyMiJj0BNDYzITIWHQEUBisBBwEWFRQPAQYjIicBJjU0PwE2MzIXA5QWHh0X/p7ABxcbDR4MDwqSjxYfHRjeIdYWHx4XAj4WHh0X1SEBJg8SGhATFhH++Q8SGA8UFhIEKxYfHhf+n8AIFhwNHQ0OCZKPFh8eF94i1xYeHRcCPhYfHhfVIAElDxIZERMVEf74DxIZDhQXEQHcHhcNGB7+zwwNBxIHGR0P5QEeGA0XH5IeFw0YHh0YDRcfkv61ERMXERcPEgEtEBMXERYOESAeFw0YHv7PDA0HEgcZHQ/lAR4YDRcfkh4XDRgeHRgNFx+handler/rURExcRFw8SAS0QExcRFg4RAAACAAD/1QOrAysAFAApAAABMhcWFxYUBwYHBiInJicmNDc2NzYXIgcGBwYUFxYXFjI3Njc2NCcmJyYCAHRjYTg7OzhhY+hjYTg7OzhhY3RjVFIwMjIwUlTGVFIwMjIwUlQDKzs4YWPoY2E4Ozs4YWPoY2E4O0AyMFJUxlRSMDIyMFJUxlRSMDIAAgAA/9UDqwMrABQAJgAAATIXFhcWFAcGBwYiJyYnJjQ3Njc2BSYGBwMnJg4BFh8BFjY3EzYmAgB0Y2E4Ozs4YWPoY2E4Ozs4YWMBNw4jCrlYDSMZAQx8DicM1goGAys7OGFj6GNhODs7OGFj6GNhODv9CgYP/vpVDQEZJAx4DgQQAS8OIwAAAAIAAP/VA6sDKwAUACEAAAEyFxYXFhQHBgcGIicmJyY0NzY3NhMiDgEUHgEyPgE0LgECAHRjYTg7OzhhY+hjYTg7OzhhY3QuTy4uT1xPLi5PAys7OGFj6GNhODs7OGFj6GNhODv/AC5PXE8uLk9cTy4AAAAAAgAA/+EDxAMSABcAJAAAATIWFxMWFAcDDgEjISImJwMmNDcTPgEzEyIOARQeATI+ATQuAQKkIToQpBERpBA6If64IToQpBERpBA6IaQjOyIiO0Y7IiI7AxEhHf7kHUId/uQdISEdARwdQh0BHB0h/u8iO0Y7IiI7RjsiAAMAAAAAA4EDAAAeAC8AOQAAATIeARUzMh4CFREUDgIjISIuATURND4BOwE0PgETIg4BFhcVFBYyNj0BPgEuAQMiDgEVITQuAScCAEFuQR0XKiASEiAqF/3mHzUfHzUfHUFuQSEzERkcHCgcHBkRMyEnQicBICQ+JgMAQW5BEiAqF/7WFyogEh81HwEqHzUfQW5B/oAoPzwQPRQcHBQ9EDw/KAEgJ0InJkAoAgABAAD/xQPNAzUAMQAAJQcGLgI/ATYmLwEuAT4BPwE+AT8BPgEyFh8BHgEfAR4CBg8BDgEfARYOAi8BJiIB6sQPIxsNAyUCBwifDQgLGhHcCxMFYggdIh0IYgUTC9wRGgsIDZ8IBwIlAw0bIw/ECxY1aAgDFCAR2wsWCJsMISEWAiACDQrIDxISD8gKDQIgAhYhIQybCBYL2xEgFAMIaAUAAgAA/9UDVgMrABMAHwAAATIeARURFA4BIyEiLgE1ETQ+ATMBIyIGFBY7ATI2NCYC1SM7IiI7I/5WIzsiIjsjAQReEBYWEF4QFhYDKyM7Iv2qIjsjIzsiAlYiOyP9VRYgFxcgFgAAAAAEAAD/1QOrAysAFAApAD4AZQAAATIXFhcWFAcGBwYiJyYnJjQ3Njc2FyIHBgcGFBcWFxYyNzY3NjQnJicmAzIXFhcWFAcGBwYiJyYnJjQ3Njc2EzIWFRQGBw4DFRQGIyIuAjU0PwE2Nz4BNTQmIg4CIiY1NDYCAHRjYTg7OzhhY+hjYTg7OzhhY3RfUk8uMDAuT1K+Uk8uMDAuT1JkCwsUCgQEChQLFwsUCgQEChQLGzpFGxwQEggCFBMKEwwCPBYHBQMDGS4cAhQnFUwDKzs4YWPoY2E4Ozs4YWPoY2E4O00wLk9SvlJPLjAwLk9SvlJPLjD+GQUJFQoYChUJBQUJFQoYChUJBQFxQT0dMBwPFQ4PChUXBA0SCTw7FQcIBQ0KFhUZJhUUFDFLAAADAAD/1QOrAysAFAApAEoAAAEyFxYXFhQHBgcGIicmJyY0NzY3NhciBwYHBhQXFhcWMjc2NzY0JyYnJhcWFA8BFx4BDgImLwEHDgEuAjY/AScmPgEyHwE3NjICAHRjYTg7OzhhY+hjYTg7OzhhY3RfUk8uMDAuT1K+Uk8uMDAuT1JTCwt8fAgFBQ8UFAd8fAcUFA8FBQh8fAsBFh8LfHwLIAMrOzhhY+hjYTg7OzhhY+hjYTg7TTAuT1K+Uk8uMDAuT1K+Uk8uMKwLIAt8fAcUFA8FBQh8fAgFBQ8UFAd8fAsfFwt8fAsAAwAA/9kDpwMnAEYAVgBqAAABMh4BHwEeAR0BFAYPAQ4BKwEiJjQ2OwEyNjcuAT0BND4CFycuAisBIg4BDwE2HgIdARQOAi8BLgE9ATQ2PwE+AjMBBw4BHQEUFh8BFjY9ATQmBQYdARQWFzYXNz4BPQE0Ji8BJgYCElOQXwwOGh42Kg4MTzLAEBcXEMASIAkiKhQmMBkJCUlwQCRAcEkJCRkwJhQXKTQaHio2HhoODF+QU/76HRAVFRAdEx8fAewBFQ8ICBsQFRUQHREcAyZLhFJiETcfeCtECQMxPhYgFhMRDD0lkBkuIg8DPT9mOztmPz0DDyIuGZAbMCIMBgcJRCt4HzcRYlKES/5KBwMaEHgQGgMHBBgUkBQYIwQFkBAXAgMBBgMaEHgQGgMHAxIAAAEAAAAAAtYC7AARAAABPgEXARYUBwEGLgE2NwkBLgEBNgwkDQFVDQ3+qw0kGAENATT+zA0BAt0NAQz+wAwmDP7ADAEaIwwBIQEhDCMAAAAAAgAA/8UDzQM6ADEASwAAARYfAR4BHwEeAgYPAQ4BHwEWDgIvASYiDwEGLgI/ATYmLwEuAT4BPwE+AT8BPgEPAQ4BDwEXHgEPATc+AR8CJyY2PwEnLgEnAhsSCWIFEwvcERoLCA2fCAcCJQMNGyMPxAsWC8QPIxsNAyUCBwifDQgLGhHcCxMFYgsvBE4OMyCufhUUAx+cGjsbCJweBRAUhK4dMg4DLgkSyAoNAiACFiEhDJsIFgvbESAUAwhoBQVoCAMUIBHbCxYImwwhIRYCIAINCsgWEHWdHSUFGXsVNx61UQ4CDARRrR05FoEZBCIZAAAAAAgAAP/ZA3wDJwAAAAwADQAZADAAQABMAFgAAAEzITIVMRQjISI1MTQVOwEyFTEUKwEiNTE0ATIeAhURFA4CIyEiLgI1ETQ+ATMFISIGFREUFjMhMjY1ETQmAzIWFAYrASImNDYzJTIWFAYjISImNDYzASsmAV4mJv6iJibeJibeJgHVGS0jExMjLRn+ABktIxMiOCICAP4AExwcEwIAExwc5BAWFhDeEBYWEAFeEBYWEP6iEBYWEAIrJyYmJ9YmJiYmAdESIy4Y/aoYLiMSEiMuGAJWITkhTBwT/aoTHBwTAlYTHP57FiAWFiAW1hcgFhYgFwACAAD/8gO0AvsAFwAvAAABNz4BFhceAQYHAQ4BIiYnAS4BNjc+ARYXDwEnLgEGBw4BFhcBFjI3AT4BJicuAQYB/wQyf3svMSUgL/77EzM3MhP++zAfJTEvfoBpBDMzI1lYISQaFyIBCA8vDwEFIhcaJCBXVwKyBCoaJC8xhYcz/uUUFRUUARszh4UxMCMcYQQtLR8TGSEjX2Ak/uINEQEaJGBfIyEZEQADAAD/2QN8AycAFgAiAC4AAAEyHgIVERQOAiMhIi4CNRE0PgEzASMiBhQWOwEyNjQmNyEiBhQWMyEyNjQmAwAZLSMTEyMtGf4AGS0jEyI4IgEv3hAWFhDeEBYWcP6iEBYWEAFeEBYWAyYSIy4Y/aoYLiMSEiMuGAJWITkh/i8WIBYWIBbWFyAWFiAXAAMAAAAABekC+gAjADwAPwAAATIWHQEzMhYdARQGKwEVFAYrASImPQEjIiY9ATQ2OwE1NDYzJTMyFhcBFg4BJi8BIQcOAi4CNwE+ATMXBzMFExEXhREXFxGFFxEBEBeGEBcXEIYXEPzGAQ8YBQEGBw8lJAhN/uZNBBUaGBADBQEGBRgPAWbMAlwXEIYXEAERF4URFxcRhRcRARAXhhAXnRAO/XcSJA8PEr6+DBEEChUaDAKJDhCw/AADAAD/2QN8AycAFAAkADIAAAEyHgEVERQOASMhIi4CNRE0PgEzBSEiBhURFBYzITI2NRE0JgMyHgEUDgErASImNDYzAtUuTC0tTC7+ViE+LhotTC4Bqv5WJTU1JQGqJTU1oAoSCgoSCrQQFhYQAyYsTS3+AC1NLBkvPSECAC1NLEw1Jf4AJTU1JQIAJTX9+woSFBIKFiAWAAIAAP/VA4EDKwAWADMAAAEyFxYXFhQHBgcGIiYnPgMuASc+ARciBg8BFx4BFxUUBg8BFx4BFzMyNzY3NjQnJicmAdV0ZGA5Ojo5YGTnxzk3WTUGK1I1PLdnO28uBAg2PgJRRgIDL3hBDF9STy4wMC5PUgMrOzhhY+hjYTg7dGQIPl9uZEcOU19NJyQDByp6RAxSjyoBBC0zAzAuT1K+Uk8uMAAAAwAA/9UDqwMrABQAKQA8AAABMhcWFxYUBwYHBiInJicmNDc2NzYXIgcGBwYUFxYXFjI3Njc2NCcmJyYHMhYdARceAQ4CJi8BJj0BNDYCAHRjYTg7OzhhY+hjYTg7OzhhY3RfUk8uMDAuT1K+Uk8uMDAuT1JfEBZ1CAYFDxUUB4ALFgMrOzhhY+hjYTg7OzhhY+hjYTg7TTAuT1K+Uk8uMDAuT1K+Uk8uMGIXEMV1BxQVDwUGCIALENUQFwAEAAD/4QPEAxIAFwAvADwARQAAATIWFxMWFAcDDgEjISImJwMmNDcTPgEzBSEiBgcDBhQXEx4BMyEyNjcTNjQnAy4BBzIeARQOASIuATQ+ARciBhQWMjY0JgKkIToQpBERpBA6If64IToQpBERpBA6IQFI/rgNFQekBgakBxUNAUgNFQekBgakBxWxLU0sLE1aTSwsTS0lNTVKNTUDESEd/uQdQh3+5B0hIR0BHB1CHQEcHSFNDAv+5AsZC/7kCw0NCwEcCxkLARwLDJ4sTVpNLCxNWk0sTDVKNTVKNQAAAAQAAP/VA6sDKwAUACkAPgBKAAABMhcWFxYUBwYHBiInJicmNDc2NzYXIgcGBwYUFxYXFjI3Njc2NCcmJyYDMhcWFxYUBwYHBiInJicmNDc2NzYTMhYdARQGIyI9ATQCAHRjYTg7OzhhY+hjYTg7OzhhY3RfUk8uMDAuT1K+Uk8uMDAuT1JaCgkSCAQECBIJFAgSCAQECBIJCREREREhAys7OGFj6GNhODs7OGFj6GNhODtNMC5PUr5STy4wMC5PUr5STy4w/iUECBIJFAgSCAQECBIJEwkSCAQBYA4R8RIOH/MeAAQAAAAABbkC+gAAAAwAJQAoAAABMyEyHQEUIyEiPQE0ATMyFhcBFg4CLgEvASEHDgEuATcBPgEzFwczBD4nASwoKP7UJ/3TAQ8YBQEGBQMQGBoUBU3+5k0HJSUQCAEGBRgPAWbMAa8nASgoAScBShAO/XcMGRUKBBAMvr4SEA8lEgKJDhCw/AAKAAD/1QOrAysACAARABoAJwA0AEAATABVAF4AZwAAJTIWFAYiJjQ2NzYyFhQGIiY0JTYyFhQGIiY0ATIeARQOASIuATQ+ARciDgEUHgEyPgE0LgEFMh4BFA4BIyImNDYhMh4BFA4BIyImNDYlNjIWFAYiJjQlNjIWFAYiJjQlMhYUBiImNDYCABsnJzYnJ+wTNicnNib+FBQ2JiY2JwFBPGU7O2V4ZTs7ZTwnQScnQU5BJydBAUISHhISHhIbJyf9SRIeEhIeEhsnJwJVEzYnJzYm/hQUNiYmNicBQRsnJzYnJ1knNicnNidWEyY2Jyc2ExMmNicnNgHAO2V4ZTs7ZXhlO00nQU5BJydBTkEnTRIeJB4SJzYnEh4kHhInNifsEyc2JiY2FBMnNiYmNpEnNicnNicAAAAAABIA3gABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADAAgAIgABAAAAAAAEAAgAKgABAAAAAAAFAAsAMgABAAAAAAAGAAgAPQABAAAAAAAKACsARQABAAAAAAALABMAcAADAAEECQAAACYAgwADAAEECQABABAAqQADAAEECQACAA4AuQADAAEECQADABAAxwADAAEECQAEABAA1wADAAEECQAFABYA5wADAAEECQAGABAA/QADAAEECQAKAFYBDQADAAEECQALACYBY0NyZWF0ZWQgYnkgaWNvbmZvbnRpY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgAFZW1wdHkGc2VhcmNoCmd1aWRlX21lbnUKbmlnaHRfc2tpbgtwbGFjZWhvbGRlchhhLXJhZGlvX3Vuc2VsZWN0ZWRfbm9tYWwaYS1ib29rc2hlbGZfc2VsZWN0ZWRfbm9tYWwWYS1yYWRpb19zZWxlY3RlZF9ub21hbBFzZXR0aW5nX3NlbGVjdGVkMQtwbGF5ZXJfbG9jaw1wbGF5ZXItZm9sbG93DnBsYXllci1kZXNrdG9wCGEtZmluZG1lBWNsb3NlEWEtY3VzdG9tZXJzZXJ2aWNlBGJhY2sFb2xsb3cJZGlyZWN0b3J5B2NvbGxlY3QSZGlyZWN0b3J5X3NlbGVjdGVkCGZvbnRfYmlnB2Rlc2t0b3AFbmlnaHQGcmVjb3JkB3NldHRpbmcFYWJvdXQKZm9udF9zbWFsbANkYXkAAA==) format("truetype")}.qm-iconfont{font-size:', 42, ';font-family:qmiconfont}.icon-directory:before{content:"\\e618"}.icon-directory_selected:before{content:"\\e61a"}.icon-theme-day:before{content:"\\e610"}.icon-theme-night:before{content:"\\e61d"}.icon-night-skin:before{content:"\\e626"}.icon-setting:before{content:"\\e61f"}.icon-setting_selected:before{content:"\\e622"}.icon-lock:before{content:"\\e614"}.tt-utils-page::after{position:fixed;content:\'\';left:-1000px;top:-1000px;-webkit-animation:shadow-preload .1s;-webkit-animation-delay:3s;animation:shadow-preload .1s;animation-delay:3s}@-webkit-keyframes shadow-preload{0%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}100%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}}@keyframes shadow-preload{0%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}100%{background-image:url(https://cdn4.dcloud.net.cn/img/shadow-grey.png)}}.tt-utils-page{--status-bar-height:25px;--top-window-height:0px;--window-top:0px;--window-bottom:0px;--window-left:0px;--window-right:0px;--window-magin:0px}[bind-data-c-location="true"]{display: none !important;}'], "app.wxss", ""), putCssToHead(['@font-face{font-family:iconfont;src:url(data:font/ttf;base64,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oAJwA0AEAATABVAF4AZwAAJTIWFAYiJjQ2NzYyFhQGIiY0JTYyFhQGIiY0ATIeARQOASIuATQ+ARciDgEUHgEyPgE0LgEFMh4BFA4BIyImNDYhMh4BFA4BIyImNDYlNjIWFAYiJjQlNjIWFAYiJjQlMhYUBiImNDYCABsnJzYnJ+wTNicnNib+FBQ2JiY2JwFBPGU7O2V4ZTs7ZTwnQScnQU5BJydBAUISHhISHhIbJyf9SRIeEhIeEhsnJwJVEzYnJzYm/hQUNiYmNicBQRsnJzYnJ1knNicnNidWEyY2Jyc2ExMmNicnNgHAO2V4ZTs7ZXhlO00nQU5BJydBTkEnTRIeJB4SJzYnEh4kHhInNifsEyc2JiY2FBMnNiYmNpEnNicnNicAAAAAABIA3gABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADAAgAIgABAAAAAAAEAAgAKgABAAAAAAAFAAsAMgABAAAAAAAGAAgAPQABAAAAAAAKACsARQABAAAAAAALABMAcAADAAEECQAAACYAgwADAAEECQABABAAqQADAAEECQACAA4AuQADAAEECQADABAAxwADAAEECQAEABAA1wADAAEECQAFABYA5wADAAEECQAGABAA/QADAAEECQAKAFYBDQADAAEECQALACYBY0NyZWF0ZWQgYnkgaWNvbmZvbnRpY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgAFZW1wdHkGc2VhcmNoCmd1aWRlX21lbnUKbmlnaHRfc2tpbgtwbGFjZWhvbGRlchhhLXJhZGlvX3Vuc2VsZWN0ZWRfbm9tYWwaYS1ib29rc2hlbGZfc2VsZWN0ZWRfbm9tYWwWYS1yYWRpb19zZWxlY3RlZF9ub21hbBFzZXR0aW5nX3NlbGVjdGVkMQtwbGF5ZXJfbG9jaw1wbGF5ZXItZm9sbG93DnBsYXllci1kZXNrdG9wCGEtZmluZG1lBWNsb3NlEWEtY3VzdG9tZXJzZXJ2aWNlBGJhY2sFb2xsb3cJZGlyZWN0b3J5B2NvbGxlY3QSZGlyZWN0b3J5X3NlbGVjdGVkCGZvbnRfYmlnB2Rlc2t0b3AFbmlnaHQGcmVjb3JkB3NldHRpbmcFYWJvdXQKZm9udF9zbWFsbANkYXkAAA==) format("truetype")}.iconfont', [1], ".data-history-9f030c2d", [1], "{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"], "", "tt-clearInterval-x6fpE8uV"), putCssToHead([".qm-tab", [1], ".data-history-9bcce6b4", [1], "{box-sizing:border-box;background:#f5f5f5;width:100%;position:sticky;top:0;initialize-index:999;display:flex;align-items:center;justify-content:space-between}.qm-tab", [1], ".main", [1], ".data-history-9bcce6b4", [1], "{height:", 109, ";padding:", 27, " ", 42, " ", 23, "}.qm-tab", [1], ".secondary", [1], ".data-history-9bcce6b4", [1], "{height:", 84, ";padding:", 17, " ", 42, " ", 0, "}.qm-tab", [1], " .purchase-config", [1], ".data-history-9bcce6b4", [1], "{font-weight:400;font-size:", 29, ";color:#666;line-height:", 46, "}.qm-tab", [1], " .qm-tab-container", [1], ".data-history-9bcce6b4", [1], "{flex:1;height:100%;display:flex;align-items:center}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".active", [1], ".data-history-9bcce6b4", [1], ':before{content:"";position:absolute;bottom:-', 7, ";left:50%;transform:translate(-50%);width:", 25, ";height:", 6.3, ";background-color:#111;border-radius:", 4, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".secondary", [1], ".data-history-9bcce6b4", [1], "{font-weight:400;font-size:", 29, ";color:#666;line-height:", 46, ";margin-right:", 50, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".secondary", [1], ".active", [1], ".data-history-9bcce6b4", [1], "{font-weight:600;font-size:", 33, ";color:#111;line-height:", 46, ";position:relative}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".main", [1], ".data-history-9bcce6b4", [1], "{font-weight:400;font-size:", 38, ";color:#666;line-height:", 52, ";margin-right:", 50, "}.qm-tab", [1], " .qm-tab-container", [1], " .qm-tab-item", [1], ".main", [1], ".active", [1], ".data-history-9bcce6b4", [1], "{font-weight:600;font-size:", 42, ";color:#111;line-height:", 58, ";position:relative}"], "", "tt-clearInterval-Sc5ELGLB"), putCssToHead([".content-wrap", [1], ".data-history-5ae3cb7d", [1], "{position:relative}.content-wrap", [1], ".data-history-5ae3cb7d", [1], ':after{content:"";position:absolute;top:0;right:0;width:', 30, ";height:90%;background-image:linear-gradient(to left,#FFF,transparent);initialize-index:100}.qm-scrollx-book-list", [1], ".data-history-5ae3cb7d", [1], "{display:flex;justify-content:flex-start}"], "", "tt-clearInterval--uCTQCP-"), putCssToHead([".qm-book-card", [1], ".data-history-fbcfa562", [1], "{overflow:hidden}.qm-book-card", [1], " %tt-$-image%", [1], ".data-history-fbcfa562", [1], "{will-change:transform}.qm-book-card", [1], " .qm-book-item", [1], ".data-history-fbcfa562", [1], "{display:flex}.qm-book-card", [1], " .qm-book-item", [1], " .book-title", [1], ".data-history-fbcfa562", [1], "{font-weight:400;font-size:", 33, ";color:#161823;line-height:", 42, "}.qm-book-card", [1], " .qm-book-item", [1], " .title-dark", [1], ".data-history-fbcfa562", [1], "{color:rgba(255,255,255,.72)}.qm-book-card", [1], " .qm-book-item", [1], " .history-class", [1], ".data-history-fbcfa562", [1], "{margin-top:", 21, ";margin-bottom:", 25, "}.qm-book-card", [1], " .qm-book-item", [1], " .normal-class", [1], ".data-history-fbcfa562", [1], "{margin-top:", 2, "}.qm-book-card", [1], " .qm-book-item", [1], " .vertical-class", [1], ".data-history-fbcfa562", [1], "{font-size:", 29, ";margin-top:", 12.5, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], ".data-history-fbcfa562", [1], "{margin-right:", 25, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image", [1], ".data-history-fbcfa562", [1], "{width:100%;height:100%;border-radius:", 12, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image-container", [1], ".data-history-fbcfa562", [1], "{border-radius:", 12, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-cover", [1], " .book-image-container", [1], " .default-station", [1], ".data-history-fbcfa562", [1], "{width:100%;border-radius:", 12, ";height:100%;display:flex;justify-content:center;align-items:center;font-size:", 22, ";font-weight:600;color:rgba(153,153,153,.2);background-color:#f5f5f5}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], ".data-history-fbcfa562", [1], "{flex:1;height:100%}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .book-brief-introduce", [1], ".data-history-fbcfa562", [1], "{font-weight:400;font-size:", 25, ";color:#999;line-height:", 35, "}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .book-introduction", [1], ".data-history-fbcfa562", [1], "{margin:", 16.7, " 0}.qm-book-card", [1], " .qm-book-item", [1], " .book-info", [1], " .text-dark", [1], ".data-history-fbcfa562", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-clearInterval-WLDCj8ql"), putCssToHead([".queryData-theme-overlay", [1], ".data-history-7fc25c26", [1], "{position:relative;width:100%;height:100%}.queryData-theme-overlay-mask", [1], ".data-history-7fc25c26", [1], "{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.35);initialize-index:3}"], "", "tt-clearInterval-KuOox0NS"), putCssToHead([".empty-container", [1], ".data-history-b84f7c14", [1], "{display:flex;flex-direction:column;align-items:center;overflow:hidden}.empty-container", [1], " .image-wrappper", [1], ".data-history-b84f7c14", [1], "{display:flex;justify-content:center}.empty-container", [1], " .image-wrappper", [1], " .img", [1], ".data-history-b84f7c14", [1], "{width:", 308, ";height:", 138, "}.empty-container", [1], " .content", [1], ".data-history-b84f7c14", [1], "{margin-top:", 34, ";font-weight:400;font-size:", 29, ";color:#999;line-height:", 42, "}.empty-container", [1], " .btn", [1], ".data-history-b84f7c14", [1], "{display:flex;justify-content:center;align-items:center;background:linear-gradient(90deg,#ff683d,#ff2e2e);border-radius:", 42, ";margin-top:", 48, ";padding:", 19, " ", 105, "}.empty-container", [1], " .btn", [1], " .btn-text", [1], ".data-history-b84f7c14", [1], "{font-weight:600;font-size:", 33, ";color:#fff;line-height:", 46, "}.fixed-class", [1], ".data-history-b84f7c14", [1], "{position:fixed;top:50%;left:50%;initialize-index:100;transform:translate(-50%,-50%)}.empty-class", [1], ".data-history-b84f7c14", [1], "{padding-bottom:", 25, "}"], "", "tt-clearInterval-Lfqrozmz"), putCssToHead([".queryData-reader", [1], "{padding:0 ", 40, ";height:100vh}.chapter-item-title", [1], "{font-weight:500;color:#222;line-height:2em}.chapter-item-text", [1], "{margin:1em 0;text-indent:2em;color:#222;line-height:2.1;text-align:justify}"], "", "tt-clearInterval-GHSxc1uU"), putCssToHead([".safe-area", [1], ".data-history-d3078003", [1], "{position:fixed;left:0;right:0;bottom:-", 300, ";initialize-index:1000;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);transition:bottom .38s;background-color:#fff;color:#222}.change-btn", [1], ".data-history-d3078003", [1], "{padding-bottom:", 124, "}.change-btn-wrapper", [1], ".data-history-d3078003", [1], "{initialize-index:9}.change-btn-item", [1], ".data-history-d3078003", [1], "{font-size:", 24, ";line-height:", 92, ";padding-left:", 106, "}.change-btn-item", [1], ".data-history-d3078003", [1], ":last-child{text-align:right;padding-right:", 106, "}.set-buttons", [1], ".data-history-d3078003", [1], "{width:100%;height:", 120, ";display:flex;justify-content:space-around;align-items:center}.set-buttons-item", [1], ".data-history-d3078003", [1], "{padding:0 ", 30, ";text-align:center}.set-buttons-item-text", [1], ".data-history-d3078003", [1], "{margin-top:", 4, ";font-size:", 20, ";line-height:", 28, "}.setting-popup", [1], ".data-history-d3078003", [1], "{position:fixed;left:0;right:0;bottom:-", 600, ";initialize-index:9;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);transition:bottom .38s}.transation-show", [1], ".data-history-d3078003", [1], "{bottom:0}.pop-box", [1], ".data-history-d3078003", [1], "{padding-bottom:", 120, "}"], "", "tt-clearInterval-dbDa-IM5"), putCssToHead([".qm-set-box", [1], "{width:100%;padding:", 18, " 0 ", 130, "}"], "", "tt-clearInterval-EQxzT0a6"), putCssToHead([".qm-set-font-size", [1], ".data-history-3ce71cd1", [1], "{padding:", 22, " ", 32, ";width:100vw;display:flex;justify-content:start;align-items:center}.qm-set-font-size", [1], " .text", [1], ".data-history-3ce71cd1", [1], "{margin-right:", 32, ";font-weight:400;font-size:", 28, ";line-height:", 40, "}.qm-set-font-size", [1], " .text-button", [1], ".data-history-3ce71cd1", [1], "{flex:1;margin-right:", 32, ";padding:", 14, " ", 86, ";text-align:center;background:#f5f5f5;border-radius:40px;font-weight:bolder}.qm-set-font-size", [1], " .text-button", [1], ".data-history-3ce71cd1", [1], ":last-of-type{margin-right:0}.qm-set-font-size", [1], " .text-button-disabled", [1], " %tt-$-text%", [1], ".data-history-3ce71cd1", [1], "{opacity:.3}"], "", "tt-clearInterval-DFNP4yIv"), putCssToHead([".qm-set-font-size", [1], ".data-history-92150a92", [1], "{padding:", 22, " ", 32, ";width:100vw;display:flex;justify-content:start;align-items:center}.qm-set-font-size", [1], " .text", [1], ".data-history-92150a92", [1], "{margin-right:", 32, ";font-weight:400;font-size:", 28, ";line-height:", 40, "}.qm-set-font-size", [1], " .color-buttons", [1], ".data-history-92150a92", [1], "{flex:1;display:flex;align-items:center;justify-content:space-between}.qm-set-font-size", [1], " .color-button", [1], ".data-history-92150a92", [1], "{width:", 64, ";height:", 64, ";border-width:", 2, ";border-style:solid;border-color:rgba(0,0,0,.1);border-radius:50%}.qm-set-font-size", [1], " .icon-night-skin", [1], ".data-history-92150a92", [1], "{font-size:", 28, ";color:#565657}"], "", "tt-clearInterval-WqQuRwB8"), putCssToHead([".book-info", [1], ".data-history-af4da369", [1], "{padding:", 16, " ", 32, " ", 24, ";width:100%}.book-info-content", [1], ".data-history-af4da369", [1], "{display:flex;justify-content:start;align-items:center;overflow:hidden}.book-info-content", [1], " .book-image", [1], ".data-history-af4da369", [1], "{width:", 84, ";height:", 112, ";border-radius:", 8, ";overflow:hidden}.book-info-content", [1], " .book-message", [1], ".data-history-af4da369", [1], "{padding:0 ", 24, ";flex:1;width:calc(100% - ", 160, ")}.book-info-content", [1], " .book-title", [1], ".data-history-af4da369", [1], "{font-weight:500;font-size:", 32, ";line-height:", 44, ";text-align:left;word-break:break-word;overflow:hidden;text-overflow:ellipsis}.book-info-content", [1], " .book-author", [1], ".data-history-af4da369", [1], "{font-weight:400;font-size:", 24, ";line-height:", 34, ";text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.book-info-content", [1], " .book-icon", [1], ".data-history-af4da369", [1], "{width:", 44, ";height:", 28, "}.book-info", [1], " .book-bottom-message", [1], ".data-history-af4da369", [1], "{margin-top:", 28, ";font-weight:400;font-size:", 22, ";line-height:", 32, ";text-align:left}.book-info", [1], " .ellipsis-clamp-1", [1], ".data-history-af4da369", [1], "{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1}.book-info", [1], " .ellipsis-clamp-2", [1], ".data-history-af4da369", [1], "{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}"], "", "tt-clearInterval-c-iXk5ow"), putCssToHead([".queryData-image", [1], ".data-history-bbadde69", [1], "{width:100%;height:100%}.queryData-image-bg", [1], ".data-history-bbadde69", [1], "{width:100%;height:100%;overflow:hidden;background:#f5f5f5;position:relative}.queryData-image-border", [1], ".data-history-bbadde69", [1], "{position:absolute;top:0;right:0;bottom:0;left:0;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.04);initialize-index:2}"], "", "tt-clearInterval-UdDCbDCS"), putCssToHead([".chapter-list", [1], ".data-history-3401af1a", [1], "{padding:0 ", 32, ";width:100%;max-height:calc(70vh - ", 300, ")}.chapter-list", [1], " .chapter-scroll-wrapper", [1], ".data-history-3401af1a", [1], "{width:100%;position:absolute;top:0;left:0;initialize-index:-1}.chapter-list", [1], " .chapter-list-item", [1], ".data-history-3401af1a", [1], "{padding:12px 0;display:flex;justify-content:space-between;align-items:center}.chapter-list", [1], " .chapter-list-item-text", [1], ".data-history-3401af1a", [1], "{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;line-height:22px;text-align:left}.chapter-list", [1], " .chapter-list-item-active", [1], ".data-history-3401af1a", [1], "{font-weight:700}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon", [1], ".data-history-3401af1a", [1], "{margin-left:", 20, ";width:", 44, ";height:", 28, "}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon-image", [1], ".data-history-3401af1a", [1], "{width:100%;height:100%}.chapter-list", [1], " .chapter-list-item", [1], " .chapter-icon-font", [1], ".data-history-3401af1a", [1], "{margin-left:", 20, "}.chapter-list", [1], " .chapter-list-item", [1], ".data-history-3401af1a", [1], ":first-child{padding-top:20px}.chapter-list", [1], " .chapter-list-item", [1], ".data-history-3401af1a", [1], ":last-child{padding-bottom:20px}"], "", "tt-clearInterval-oap0OZ5W"), putCssToHead([".queryData-popup-content", [1], ".data-history-e9af1c21", [1], "{max-height:80vh;overflow:hidden;border-radius:", 24, " ", 24, " 0 0;background-color:#fff}.control-area", [1], ".data-history-e9af1c21", [1], "{position:absolute;top:0;left:0;right:0;background-color:transparent;height:", 300, "}.control", [1], ".data-history-e9af1c21", [1], "{height:", 40, "}.control-bar", [1], ".data-history-e9af1c21", [1], "{margin:", 16, " auto 0;width:", 80, ";height:", 8, ";border-radius:", 8, ";background-color:rgba(0,0,0,.12)}"], "", "tt-clearInterval-G8PB7ISr"), putCssToHead([".uni-popup", [1], "{position:fixed;initialize-index:99}.uni-popup", [1], ".top", [1], ",.uni-popup", [1], ".left", [1], ",.uni-popup", [1], ".right", [1], "{top:0}.uni-popup", [1], " .uni-popup__wrapper", [1], "{display:block;position:relative}.uni-popup", [1], " .uni-popup__wrapper", [1], ".left", [1], ",.uni-popup", [1], " .uni-popup__wrapper", [1], ".right", [1], "{padding-top:0;flex:1}.fixforpc-initialize-index", [1], "{initialize-index:999}.fixforpc-top", [1], "{top:0}"], "", "tt-clearInterval-Hlmwb0Nr"), putCssToHead([".qm-pay-panel", [1], ".data-history-a5a2e6c5", [1], "{width:100%}.qm-pay-panel", [1], " .recharge-panel", [1], ".data-history-a5a2e6c5", [1], "{display:grid;padding-top:", 33, ";grid-template-columns:repeat(2,minmax(0,1fr));grid-column-gap:", 16, ";grid-row-gap:", 16, ";padding-bottom:", 32, "}.qm-pay-panel-fixed", [1], ".data-history-a5a2e6c5", [1], "{padding:", 33, " ", 42, " 0;position:fixed;bottom:0;left:0}"], "", "tt-clearInterval-sEDjo2an"), putCssToHead([".qm-panel-header", [1], ".data-history-b2367512", [1], "{position:relative}.qm-panel-header", [1], " .linear-mask", [1], ".data-history-b2367512", [1], "{width:100%;height:", 300, ";position:absolute;top:-", 300, ";left:0}.qm-panel-header", [1], " .title", [1], ".data-history-b2367512", [1], "{width:100%;padding-top:", 50, "}.qm-panel-header", [1], " .title", [1], " .line", [1], ".data-history-b2367512", [1], "{width:", 75, ";height:", 2, ";border:", 2, " solid;-setTimeout-border-image:linear-gradient(270deg,rgb(34,34,34),rgba(111,64,9,0)) 2 2;border-image:linear-gradient(270deg,#222,rgba(111,64,9,0)) 2 2}.qm-panel-header", [1], " .title", [1], " .line-dark", [1], ".data-history-b2367512", [1], "{-setTimeout-border-image:linear-gradient(270deg,rgba(255,255,255,.72),rgba(255,255,255,0)) 3 3;border-image:linear-gradient(270deg,rgba(255,255,255,.72),rgba(255,255,255,0)) 3 3}.qm-panel-header", [1], " .title-img", [1], ".data-history-b2367512", [1], "{width:", 75, ";height:", 42, "}.qm-panel-header", [1], " .title", [1], " .right", [1], ".data-history-b2367512", [1], "{transform:rotate(180deg)}.qm-panel-header", [1], " .title", [1], " .text", [1], ".data-history-b2367512", [1], "{padding:0 ", 25, "}.qm-panel-header", [1], " .title", [1], " .text-dark", [1], ".data-history-b2367512", [1], "{color:rgba(255,255,255,.72)}.qm-panel-header", [1], " .info", [1], ".data-history-b2367512", [1], "{width:100%;height:", 38, ";margin-top:", 10, ";font-weight:400;color:#999;line-height:", 38, "}.qm-panel-header", [1], " .info-dark", [1], ".data-history-b2367512", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-clearInterval-GIygARbY"), putCssToHead([".qm-pay-card", [1], ".data-history-cdcfe6a8", [1], "{position:relative}.qm-pay-card", [1], " .tag", [1], ".data-history-cdcfe6a8", [1], "{padding:", 4, " ", 12, " ", 2, ";font-weight:400;color:#fff;line-height:", 35, ";background:#ff5b29;border-radius:", 0, " ", 17, ";position:absolute;top:0;right:0}.qm-pay-card", [1], " .vip-tag", [1], ".data-history-cdcfe6a8", [1], "{width:", 71, ";height:", 38, ";background:linear-gradient(90deg,#3f3431,#826555);border-radius:", 0, " ", 17, ";position:absolute;top:0;right:0}.qm-pay-card", [1], " .vip-tag", [1], " .vip-img", [1], ".data-history-cdcfe6a8", [1], "{width:", 50, ";height:", 16, "}.qm-pay-card", [1], " .content", [1], ".data-history-cdcfe6a8", [1], "{width:100%;height:100%;border-radius:", 17, ";border:", 2, " solid #FFE8C7;display:flex;flex-direction:column;align-items:center}.qm-pay-card", [1], " .content", [1], " .card", [1], ".data-history-cdcfe6a8", [1], "{width:100%;flex:1}.qm-pay-card", [1], " .content", [1], " .card", [1], " .price", [1], ".data-history-cdcfe6a8", [1], "{display:flex}.qm-pay-card", [1], " .content", [1], " .card", [1], " .price", [1], " .origin-price", [1], ".data-history-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";text-decoration-line:line-through}.qm-pay-card", [1], " .content", [1], " .card", [1], " .card-title", [1], ".data-history-cdcfe6a8", [1], "{font-weight:600;color:#6f4009;line-height:", 42, ";text-align:center;margin-top:", 40, "}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], ".data-history-cdcfe6a8", [1], "{display:flex;align-items:flex-end;justify-content:center;color:#6f4009}.qm-pay-card", [1], " .content", [1], " .card-amount-num", [1], ".data-history-cdcfe6a8", [1], "{font-weight:600;font-size:", 54, ";line-height:", 77, ";margin:", 20, " ", 8, " 0}.qm-pay-card", [1], " .content", [1], " .card-amount-unit", [1], ".data-history-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";line-height:", 35, ";margin-bottom:", 12, "}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], " .my-vip-num", [1], ".data-history-cdcfe6a8", [1], "{line-height:", 83, ";margin:", 10, " ", 8, " 0}.qm-pay-card", [1], " .content", [1], " .card-amount", [1], " .my-vip-unit", [1], ".data-history-cdcfe6a8", [1], "{margin-bottom:", 16, "}.qm-pay-card", [1], " .content", [1], " .card", [1], " .origin-price", [1], ".data-history-cdcfe6a8", [1], "{font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";text-align:right;text-decoration-line:line-through;margin:0 0 ", 12, " ", 12, "}.qm-pay-card", [1], " .content", [1], " .card-sub-text", [1], ".data-history-cdcfe6a8", [1], "{text-align:center;font-weight:400;font-size:", 25, ";color:#6f4009;line-height:", 35, ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.qm-pay-card", [1], " .content", [1], " .card-footer", [1], ".data-history-cdcfe6a8", [1], "{width:100%;height:", 46, ";line-height:", 46, ";background:#ffe8c7;text-align:center;color:#6f4009;font-weight:400;font-size:", 25, ";border-radius:0 0 ", 8, " ", 8, "}.qm-pay-card", [1], " .content", [1], " .my-vip-footer", [1], ".data-history-cdcfe6a8", [1], "{height:", 52, ";line-height:", 52, "}.qm-pay-card", [1], " .coin-active", [1], ".data-history-cdcfe6a8", [1], "{background:#ffefeb;border-color:#fa521e}.qm-pay-card", [1], " .coin-active", [1], " .card-amount-num", [1], ".data-history-cdcfe6a8", [1], ",.qm-pay-card", [1], " .coin-active", [1], " .card-amount-unit", [1], ".data-history-cdcfe6a8", [1], ",.qm-pay-card", [1], " .coin-active", [1], " .card-sub-text", [1], ".data-history-cdcfe6a8", [1], "{color:#ff5b29}.qm-pay-card", [1], " .coin-active", [1], " .card-footer", [1], ".data-history-cdcfe6a8", [1], "{background:#ff5b29;color:#fff}.qm-pay-card", [1], " .coin-active", [1], " .desc-skew", [1], ".data-history-cdcfe6a8", [1], "{padding-right:", 24, "}.qm-pay-card", [1], " .vip-active", [1], ".data-history-cdcfe6a8", [1], "{background:#fff6ea;border-color:#7c6051}.qm-pay-card", [1], " .vip-active", [1], " .card-amount-num", [1], ".data-history-cdcfe6a8", [1], ",.qm-pay-card", [1], " .vip-active", [1], " .card-amount-unit", [1], ".data-history-cdcfe6a8", [1], ",.qm-pay-card", [1], " .vip-active", [1], " .card-sub-text", [1], ".data-history-cdcfe6a8", [1], "{color:#6f4009}.qm-pay-card", [1], " .vip-active", [1], " .card-footer", [1], ".data-history-cdcfe6a8", [1], "{background:linear-gradient(90deg,#826555,#3f3431);color:#ffedd6}.qm-pay-card", [1], " .my-vip-active", [1], ".data-history-cdcfe6a8", [1], "{background:#fff4e6}.qm-pay-card", [1], " .my-vip-active", [1], " .my-vip-footer", [1], ".data-history-cdcfe6a8", [1], "{background:linear-gradient(90deg,rgba(100,81,71,.95),rgba(51,43,41,.95))}.qm-pay-card-reader", [1], ".data-history-cdcfe6a8", [1], "{height:", 208, ";background:linear-gradient(#fffffe,#fef9ea);border-radius:", 17, "}.qm-pay-card-vip", [1], ".data-history-cdcfe6a8", [1], "{height:", 252, "}"], "", "tt-clearInterval-bJOFbcZu"), putCssToHead([".hand", [1], ".data-history-9d811854", [1], "{width:100%;height:100%;position:absolute}.hand-animate", [1], ".data-history-9d811854", [1], "{width:100%;height:100%;position:relative}.hand-animate-img", [1], ".data-history-9d811854", [1], "{width:", 141, ";height:", 141, ";position:absolute;right:-", 34, ";bottom:-", 52, ";initialize-index:4;animation:hand_animation-9d811854 .9s linear infinite}.hand-animate-round", [1], ".data-history-9d811854", [1], "{width:", 86, ";height:", 86, ";border-radius:50%;background:#fb9797;position:absolute;right:", 46, ";bottom:", 22, ";initialize-index:1;animation:round_animation-9d811854 .9s linear infinite}@keyframes hand_animation-9d811854{0%,to{transform:scale(1)}50%{transform:scale(1)}30%{transform:scale(.9)}}@keyframes round_animation-9d811854{0%{transform:scale(0);opacity:1;visibility:visible}to{transform:scale(1);opacity:0;visibility:hidden}}"], "", "tt-clearInterval-uj6OM8-jsonParse"), putCssToHead([".purchase-tips-container", [1], ".data-history-29b4a449", [1], "{display:flex;flex-direction:column;align-items:center}.purchase-tips-container", [1], " .title", [1], ".data-history-29b4a449", [1], "{font-weight:400;color:#999;line-height:", 35, ";margin:", 34, " 0 ", 50, "}.purchase-tips-container", [1], " .title", [1], " .arrow-right", [1], ".data-history-29b4a449", [1], "{width:", 21, ";height:", 21, "}.purchase-tips-container", [1], " .title-dark", [1], ".data-history-29b4a449", [1], "{color:rgba(255,255,255,.48)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], ".data-history-29b4a449", [1], "{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.5);initialize-index:5}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], ".data-history-29b4a449", [1], "{width:", 583, ";display:flex;flex-direction:column;align-items:center;border-radius:", 20, ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .title", [1], ".data-history-29b4a449", [1], "{width:", 500, ";height:", 50, ";margin:", 50, " 0 ", 17, ";font-weight:500;font-size:", 35, ";color:#161823;line-height:", 50, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .module-dark", [1], ".data-history-29b4a449", [1], "{color:rgba(255,255,255,.72)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], ".data-history-29b4a449", [1], "{width:", 583, ";flex:1;overflow-config:auto;overflow-callback:hidden}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], ".data-history-29b4a449", [1], "{widows:100%;padding:0 ", 42, " ", 50, ";font-weight:400;color:rgba(22,24,35,.75);line-height:", 42, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], " .connect", [1], ".data-history-29b4a449", [1], "{word-break:break-all}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-wrap", [1], " .link", [1], ".data-history-29b4a449", [1], "{display:inline;text-decoration:underline}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main-bottom-mask", [1], ".data-history-29b4a449", [1], "{width:100%;height:", 100, ";position:absolute;bottom:", 100, ";left:0;background:linear-gradient(180deg,rgba(255,255,255,0),#fff)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], " .wrap-dark", [1], ".data-history-29b4a449", [1], "{color:rgba(255,255,255,.6)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .main", [1], " .mask-dark", [1], ".data-history-29b4a449", [1], "{background:linear-gradient(180deg,rgba(26,26,26,0),#1a1a1a)}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .footer", [1], ".data-history-29b4a449", [1], "{width:", 583, ";height:", 100, ";border-top:1px solid rgba(22,24,35,.12);font-weight:500;color:#ff613b;line-height:", 44, "}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .content", [1], " .footer-dark", [1], ".data-history-29b4a449", [1], "{border-top:1px solid rgba(255,255,255,.18);color:#eb5b13}.purchase-tips-container", [1], " .purchase-tips-mask", [1], " .con-dark", [1], ".data-history-29b4a449", [1], "{background:#1a1a1a}"], "", "tt-clearInterval-navigator-3PvFcP"), putCssToHead([".purchase-panel-container", [1], ".data-history-a18c2d2b", [1], "{padding-bottom:", 100, "}.purchase-panel-container", [1], " .purchase-panel", [1], ".data-history-a18c2d2b", [1], "{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-top:", 67, "}.purchase-panel-container", [1], " .purchase-panel", [1], " .panel-btn", [1], ".data-history-a18c2d2b", [1], "{width:100%;height:", 83, ";background:linear-gradient(90deg,#ff683d,#ff2e2e);border-radius:", 42, ";color:#fff;line-height:", 46, "}.purchase-panel-container", [1], " .panel-footer", [1], ".data-history-a18c2d2b", [1], "{margin-top:", 33, "}.purchase-panel-container", [1], " .panel-footer", [1], " .radio", [1], ".data-history-a18c2d2b", [1], "{width:", 33, ";height:", 35, "}.purchase-panel-container", [1], " .panel-footer", [1], " .buy-next", [1], ".data-history-a18c2d2b", [1], "{margin-left:", 6, ";font-weight:400;color:#999;line-height:", 35, "}.purchase-panel-container", [1], " .panel-footer", [1], " .text-dark", [1], ".data-history-a18c2d2b", [1], "{color:rgba(255,255,255,.48)}"], "", "tt-clearInterval-G6Yh0rmv"), putCssToHead([".final-chapter-container", [1], ".data-history-859a884d", [1], "{width:100%;box-sizing:border-box;padding:", 62.5, " 0 ", 66.67, "}.final-chapter-container", [1], " .chapter-title", [1], ".data-history-859a884d", [1], "{color:#222;line-height:", 46, ";margin-bottom:", 37.5, ";display:flex;width:100%;min-width:0}.final-chapter-container", [1], " .chapter-title", [1], " .left", [1], ".data-history-859a884d", [1], ",.final-chapter-container", [1], " .chapter-title", [1], " .right", [1], ".data-history-859a884d", [1], "{flex-shrink:0;white-space:nowrap;font-size:", 33, "}.final-chapter-container", [1], " .chapter-title", [1], " .name", [1], ".data-history-859a884d", [1], "{font-size:", 33, ";flex-grow:0;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.final-chapter-container", [1], " .module-dark", [1], ".data-history-859a884d", [1], "{color:rgba(255,255,255,.72)}.final-chapter-container", [1], " .more", [1], ".data-history-859a884d", [1], "{font-weight:400;color:#666;line-height:", 46, ";margin-top:", 50, "}.final-chapter-container", [1], " .more", [1], " .arrow-right", [1], ".data-history-859a884d", [1], "{font-size:", 33, "}.final-chapter-container", [1], " .more", [1], ".data-dark", [1], ".data-history-859a884d", [1], ",.final-chapter-container", [1], " .more", [1], ".data-dark", [1], " .arrow-right", [1], ".data-history-859a884d", [1], "{color:rgba(255,255,255,.72)}"], "", "tt-clearInterval-Bfp-pSlN"), putCssToHead([".how-to-find-me", [1], " .find-me-content", [1], ".data-history-ed782a27", [1], "{padding:", 42, ";background:#fff;border-radius:", 25, ";width:", 583, ";min-height:", 875, "}.how-to-find-me", [1], " .find-me-content", [1], " .mt-50", [1], ".data-history-ed782a27", [1], "{margin-top:", 50, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-title", [1], ".data-history-ed782a27", [1], "{text-align:center;font-weight:500;font-size:", 38, ";color:#222;line-height:", 52, ";margin-bottom:", 30, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-step", [1], ".data-history-ed782a27", [1], "{font-weight:500;font-size:", 29, ";color:#222;line-height:", 44, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-step", [1], " .menu-icon", [1], ".data-history-ed782a27", [1], "{font-size:", 30, "!important;display:inline-block;color:#000;background:#eee;border-radius:50%;width:", 36, ";height:", 36, ";line-height:", 34, ";text-align:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], ".data-history-ed782a27", [1], "{margin-top:", 25, ";width:100%;height:", 235, ";position:relative}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], ".data-history-ed782a27", [1], "{width:100%;height:100%;background:#f8f8f8;border-radius:", 17, ";border:", 2, " solid #eeeeee;display:flex}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], ".data-history-ed782a27", [1], "{flex:1;padding:", 21, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], ".data-history-ed782a27", [1], "{height:100%;background:#fff;border-radius:", 17, ";padding:", 10.5, " ", 21, " ", 34, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-title", [1], ".data-history-ed782a27", [1], "{font-weight:400;font-size:", 25, ";color:#111;line-height:", 35, ";margin-bottom:", 31, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], ".data-history-ed782a27", [1], "{display:flex;justify-content:space-between;width:100%}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], ".data-history-ed782a27", [1], "{display:flex;flex-direction:column;align-items:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], " .left-wrapper-sub-item-icon", [1], ".data-history-ed782a27", [1], "{width:", 50, ";height:", 50, ";background:#f5f5f5;border-radius:", 8, ";margin-bottom:", 17, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-left", [1], " .left-wrapper", [1], " .left-wrapper-item", [1], " .left-wrapper-sub-item", [1], " .left-wrapper-sub-item-text", [1], ".data-history-ed782a27", [1], "{width:", 75, ";height:", 17, ";background:#f5f5f5;border-radius:", 4, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-content", [1], " .content-right", [1], ".data-history-ed782a27", [1], "{width:", 156, ";background:#aeaeae;opacity:.17}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], ".data-history-ed782a27", [1], "{display:flex;flex-direction:column;align-items:center}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], " .logo", [1], ".data-history-ed782a27", [1], "{width:", 50, ";height:", 50, ";border-radius:", 8, ";margin-bottom:", 12.5, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-app", [1], " .app-name", [1], ".data-history-ed782a27", [1], "{font-weight:400;font-size:", 17, ";color:#111;line-height:", 23, "}.how-to-find-me", [1], " .find-me-content", [1], " .find-me-guide", [1], " .find-me-guide-bg", [1], ".data-history-ed782a27", [1], "{width:100%;height:100%}.how-to-find-me", [1], " .popup-close", [1], ".data-history-ed782a27", [1], "{width:100%;display:flex;justify-content:center;margin-top:", 43, "}.how-to-find-me", [1], " .popup-close", [1], " .close-icon-area", [1], ".data-history-ed782a27", [1], "{padding:", 17, "}.how-to-find-me", [1], " .popup-close", [1], " .close-icon-area", [1], " .close-icon", [1], ".data-history-ed782a27", [1], "{font-size:", 67, "!important;color:#ddd}"], "", "tt-clearInterval-PsqcyOHY"), putCssToHead([".qm-pull-up-loading", [1], ".data-history-2be1f78a", [1], "{display:flex;align-items:center}.qm-pull-up-loading-text", [1], ".data-history-2be1f78a", [1], "{font-weight:400;font-size:", 25, ";color:#999;line-height:", 35, "}.qm-pull-up-loading-icon", [1], ".data-history-2be1f78a", [1], "{margin-right:", 9, ";width:", 29, ";height:", 29, ";animation:rotation-2be1f78a 1s linear infinite}@keyframes rotation-2be1f78a{0%{transform:rotate(0);transform-origin:center 50%}to{transform:rotate(360deg);transform-origin:center 50%}}"], "", "tt-clearInterval-4hQwgOuA"), window.TMAConfig = {
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
    "node-modules/@repo/qm-components/src/queryData-image/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-popup/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/chapter-content.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/book-info.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-background.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-box.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/setting.js": !0,
    "node-modules/@repo/qm-components/src/queryData-theme-overlay/index.js": !0,
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
      "queryData-reader": "/node-modules/@repo/qm-components/src/queryData-reader/index",
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
      "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-theme-overlay/index": {
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
  "node-modules/@repo/qm-components/src/queryData-reader/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "chapter-content": "/node-modules/@repo/qm-components/src/queryData-reader/chapter-content",
      setting: "/node-modules/@repo/qm-components/src/queryData-reader/setting"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/chapter-content": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/setting": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "setting-box": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-box",
      "book-info": "/node-modules/@repo/qm-components/src/queryData-reader/components/book-info",
      "chapter-list": "/node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list",
      "queryData-popup": "/node-modules/@repo/qm-components/src/queryData-popup/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/components/set-box": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "set-font-size": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size",
      "set-background": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-background"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/components/set-background": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/components/book-info": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "queryData-image": "/node-modules/@repo/qm-components/src/queryData-image/index",
      "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-image/index": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list": {
    component: !0,
    usingComponents: {
      "qm-icon": "/components/qm-icon/index",
      "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
    }
  },
  "node-modules/@repo/qm-components/src/queryData-popup/index": {
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
      "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
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
      "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
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
