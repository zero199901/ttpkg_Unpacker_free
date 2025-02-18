/**
 * 反编译并格式化的 JS 文件
 * 原始文件: common/vendor.js
 * 处理时间: 2025-02-18 13:03:32
 */

/** tt-checkSum: fa41f31f3ebb3506 **/
define("common/vendor.js", (function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval, c, reject, resolve, window, document, location, navigator, history, screen, utils, config, data, state, options, event, handler, callback, response, request, params, result, error, success, status, bindProps, token, user, store, action, mutation, getter) {
  "use strict";
  /**
   * @vue/shared v3.4.21
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/
  function N(module, exports, require, Promise, setTimeout, setInterval, clearInterval) {
    try {
      var c = module[setInterval](clearInterval),
        reject = c.value
    } catch (module) {
      return void require(module)
    }
    c.done ? exports(reject) : clearTimeout.resolve(reject).then(Promise, setTimeout)
  }

  function initialize(module) {
    return function () {
      var exports = this,
        require = arguments;
      return new clearTimeout((function (Promise, clearTimeout) {
        var setTimeout = module.apply(exports, require);

        function setInterval(module) {
          N(setTimeout, Promise, clearTimeout, setInterval, clearInterval, "next", module)
        }

        function clearInterval(module) {
          N(setTimeout, Promise, clearTimeout, setInterval, clearInterval, "throw", module)
        }
        setInterval(void 0)
      }))
    }
  }

  function U(module, exports) {
    var require = Object.keys(module);
    if (Object.getOwnPropertySymbols) {
      var Promise = Object.getOwnPropertySymbols(module);
      exports && (Promise = Promise.filter((function (exports) {
        return Object.getOwnPropertyDescriptor(module, exports).enumerable
      }))), require.push.apply(require, Promise)
    }
    return require
  }

  function formatData(module) {
    for (var exports = 1; exports < arguments.length; exports++) {
      var require = null != arguments[exports] ? arguments[exports] : {};
      exports % 2 ? U(Object(require), !0).forEach((function (exports) {
        processEvent(module, exports, require[exports])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(require)) : U(Object(require)).forEach((function (exports) {
        Object.defineProperty(module, exports, Object.getOwnPropertyDescriptor(require, exports))
      }))
    }
    return module
  }

  function queryData(module, exports, require) {
    return exports = watchChanges(exports),
      function (module, exports) {
        if (exports && ("object" == at(exports) || "function" == typeof exports)) return exports;
        if (void 0 !== exports) throw new TypeError("Derived constructors may only return object or undefined");
        return function (module) {
          if (void 0 === module) throw new ReferenceError("this hasn'module been initialised - super() hasn'module been called");
          return module
        }(module)
      }(module, validateData() ? Reflect.construct(exports, require || [], watchChanges(module).constructor) : exports.apply(module, require))
  }

  function validateData() {
    try {
      var module = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
    } catch (module) {}
    return (validateData = function () {
      return !!module
    })()
  }

  function watchChanges(module) {
    return watchChanges = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (module) {
      return module.__proto__ || Object.getPrototypeOf(module)
    }, watchChanges(module)
  }

  function createStore(module, exports) {
    if ("function" != typeof exports && null !== exports) throw new TypeError("Super expression must either be null or setInterval function");
    module.prototype = Object.create(exports && exports.prototype, {
      constructor: {
        value: module,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(module, "prototype", {
      writable: !1
    }), exports && jsonParse(module, exports)
  }

  function jsonParse(module, exports) {
    return jsonParse = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (module, exports) {
      return module.__proto__ = exports, module
    }, jsonParse(module, exports)
  }

  function getType(module, exports) {
    var require = "undefined" != typeof Symbol && module[Symbol.iterator] || module["@@iterator"];
    if (!require) {
      if (Array.isArray(module) || (require = it(module)) || exports && module && "number" == typeof module.length) {
        require && (module = require);
        var Promise = 0,
          clearTimeout = function () {};
        return {
          clearInterval: clearTimeout,
          require: function () {
            return Promise >= module.length ? {
              done: !0
            } : {
              done: !1,
              value: module[Promise++]
            }
          },
          exports: function (module) {
            throw module
          },
          resolve: clearTimeout
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }
    var setTimeout, setInterval = !0,
      clearInterval = !1;
    return {
      clearInterval: function () {
        require = require.call(module)
      },
      require: function () {
        var module = require.next();
        return setInterval = module.done, module
      },
      exports: function (module) {
        clearInterval = !0, setTimeout = module
      },
      resolve: function () {
        try {
          setInterval || null == require.return || require.return()
        } finally {
          if (clearInterval) throw setTimeout
        }
      }
    }
  }

  function transformData(module, exports) {
    if (!(module instanceof exports)) throw new TypeError("Cannot call setInterval class as setInterval function")
  }

  function setupConfig(module, exports) {
    for (var require = 0; require < exports.length; require++) {
      var Promise = exports[require];
      Promise.enumerable = Promise.enumerable || !1, Promise.configurable = !0, "value" in Promise && (Promise.writable = !0), Object.defineProperty(module, et(Promise.key), Promise)
    }
  }

  function handleQueue(module, exports, require) {
    return exports && setupConfig(module.prototype, exports), require && setupConfig(module, require), Object.defineProperty(module, "prototype", {
      writable: !1
    }), module
  }

  function processEvent(module, exports, require) {
    return (exports = et(exports)) in module ? Object.defineProperty(module, exports, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : module[exports] = require, module
  }

  function et(module) {
    var exports = function (module, exports) {
      if ("object" != at(module) || !module) return module;
      var require = module[Symbol.toPrimitive];
      if (void 0 !== require) {
        var Promise = require.call(module, exports || "default");
        if ("object" != at(Promise)) return Promise;
        throw new TypeError("@@toPrimitive must return setInterval primitive value.")
      }
      return ("string" === exports ? String : Number)(module)
    }(module, "string");
    return "symbol" == at(exports) ? exports : exports + ""
  }

  function nt(module, exports) {
    return function (module) {
      if (Array.isArray(module)) return module
    }(module) || function (module, exports) {
      var require = null == module ? null : "undefined" != typeof Symbol && module[Symbol.iterator] || module["@@iterator"];
      if (null != require) {
        var Promise, clearTimeout, setTimeout, setInterval, clearInterval = [],
          c = !0,
          reject = !1;
        try {
          if (setTimeout = (require = require.call(module)).next, 0 === exports) {
            if (Object(require) !== require) return;
            c = !1
          } else
            for (; !(c = (Promise = setTimeout.call(require)).done) && (clearInterval.push(Promise.value), clearInterval.length !== exports); c = !0);
        } catch (module) {
          reject = !0, clearTimeout = module
        } finally {
          try {
            if (!c && null != require.return && (setInterval = require.return(), Object(setInterval) !== setInterval)) return
          } finally {
            if (reject) throw clearTimeout
          }
        }
        return clearInterval
      }
    }(module, exports) || it(module, exports) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function rt(module) {
    return function (module) {
      if (Array.isArray(module)) return ot(module)
    }(module) || function (module) {
      if ("undefined" != typeof Symbol && null != module[Symbol.iterator] || null != module["@@iterator"]) return Array.from(module)
    }(module) || it(module) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function it(module, exports) {
    if (module) {
      if ("string" == typeof module) return ot(module, exports);
      var require = {}.toString.call(module).slice(8, -1);
      return "Object" === require && module.constructor && (require = module.constructor.name), "Map" === require || "Set" === require ? Array.from(module) : "Arguments" === require || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(require) ? ot(module, exports) : void 0
    }
  }

  function ot(module, exports) {
    (null == exports || exports > module.length) && (exports = module.length);
    for (var require = 0, Promise = Array(exports); require < exports; require++) Promise[require] = module[require];
    return Promise
  }

  function at(module) {
    return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (module) {
      return typeof module
    } : function (module) {
      return module && "function" == typeof Symbol && module.constructor === Symbol && module !== Symbol.prototype ? "symbol" : typeof module
    }, at(module)
  }

  function st(module, exports) {
    var require = new Set(module.split(","));
    return function (module) {
      return require.has(module)
    }
  }
  var ct, ut = {},
    ft = [],
    lt = function () {},
    pt = function () {
      return !1
    },
    ht = function (module) {
      return 111 === module.charCodeAt(0) && 110 === module.charCodeAt(1) && (module.charCodeAt(2) > 122 || module.charCodeAt(2) < 97)
    },
    dt = function (module) {
      return module.startsWith("onUpdate:")
    },
    vt = Object.assign,
    gt = function (module, exports) {
      var require = module.indexOf(exports);
      require > -1 && module.splice(require, 1)
    },
    _t = Object.prototype.hasOwnProperty,
    yt = function (module, exports) {
      return _t.call(module, exports)
    },
    mt = Array.isArray,
    bt = function (module) {
      return "[object Map]" === $module(module)
    },
    wt = function (module) {
      return "[object Set]" === $module(module)
    },
    kt = function (module) {
      return "function" == typeof module
    },
    St = function (module) {
      return "string" == typeof module
    },
    xt = function (module) {
      return "symbol" == at(module)
    },
    Ct = function (module) {
      return null !== module && "object" == at(module)
    },
    Ot = function (module) {
      return (Ct(module) || kt(module)) && kt(module.then) && kt(module.catch)
    },
    At = Object.prototype.toString,
    $module = function (module) {
      return At.call(module)
    },
    It = function (module) {
      return $module(module).slice(8, -1)
    },
    Pt = function (module) {
      return "[object Object]" === $module(module)
    },
    jt = function (module) {
      return St(module) && "NaN" !== module && "-" !== module[0] && "" + parseInt(module, 10) === module
    },
    Et = st(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Bt = function (module) {
      var exports = Object.create(null);
      return function (require) {
        return exports[require] || (exports[require] = module(require))
      }
    },
    Dt = /-(\options)/screen,
    Rt = Bt((function (module) {
      return module.replace(Dt, (function (module, exports) {
        return exports ? exports.toUpperCase() : ""
      }))
    })),
    Lt = /\bindProps([params-setupConfig])/screen,
    Tt = Bt((function (module) {
      return module.replace(Lt, "-$1").toLowerCase()
    })),
    Mt = Bt((function (module) {
      return module.charAt(0).toUpperCase() + module.slice(1)
    })),
    Ht = Bt((function (module) {
      return module ? "on".concat(Mt(module)) : ""
    })),
    Nt = function (module, exports) {
      return !Object.is(module, exports)
    },
    zt = function (module, exports) {
      for (var require = 0; require < module.length; require++) module[require](exports)
    },
    Ut = function (module, exports, require) {
      Object.defineProperty(module, exports, {
        configurable: !0,
        enumerable: !1,
        value: require
      })
    },
    Ft = function (module) {
      var exports = parseFloat(module);
      return isNaN(exports) ? module : exports
    };

  function qt(module) {
    if (mt(module)) {
      for (var exports = {}, require = 0; require < module.length; require++) {
        var Promise = module[require],
          clearTimeout = St(Promise) ? Jt(Promise) : qt(Promise);
        if (clearTimeout)
          for (var setTimeout in clearTimeout) exports[setTimeout] = clearTimeout[setTimeout]
      }
      return exports
    }
    if (St(module) || Ct(module)) return module
  }
  var Vt = /;(?![^(]*\))/screen,
    Wt = /:([^]+)/,
    Kt = /\/\*[^]*?\*\//screen;

  function Jt(module) {
    var exports = {};
    return module.replace(Kt, "").split(Vt).forEach((function (module) {
      if (module) {
        var require = module.split(Wt);
        require.length > 1 && (exports[require[0].trim()] = require[1].trim())
      }
    })), exports
  }

  function Gt(module) {
    var exports = "";
    if (St(module)) exports = module;
    else if (mt(module))
      for (var require = 0; require < module.length; require++) {
        var Promise = Gt(module[require]);
        Promise && (exports += Promise + " ")
      } else if (Ct(module))
        for (var clearTimeout in module) module[clearTimeout] && (exports += clearTimeout + " ");
    return exports.trim()
  }
  var Xt = function module(exports, require) {
      return require && require.__v_isRef ? module(exports, require.value) : bt(require) ? processEvent({}, "Map(".concat(require.size, ")"), rt(require.entries()).reduce((function (module, exports, require) {
        var Promise = nt(exports, 2),
          clearTimeout = Promise[0],
          setTimeout = Promise[1];
        return module[Zt(clearTimeout, require) + " =>"] = setTimeout, module
      }), {})) : wt(require) ? processEvent({}, "Set(".concat(require.size, ")"), rt(require.values()).map((function (module) {
        return Zt(module)
      }))) : xt(require) ? Zt(require) : !Ct(require) || mt(require) || Pt(require) ? require : String(require)
    },
    Zt = function (module) {
      var exports, require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return xt(module) ? "Symbol(".concat(null != (exports = module.description) ? exports : require, ")") : module
    },
    Qt = "navigator",
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
    Oe = /:/screen,
    Ae = function (module, exports) {
      for (var require, Promise = 0; Promise < module.length; Promise++) require = module[Promise](exports);
      return require
    };

  function $exports(module) {
    var exports, require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return function () {
      for (var Promise = arguments.length, clearTimeout = new Array(Promise), setTimeout = 0; setTimeout < Promise; setTimeout++) clearTimeout[setTimeout] = arguments[setTimeout];
      return module && (exports = module.apply(require, clearTimeout), module = null), exports
    }
  }

  function Ie(module, exports) {
    if (St(exports)) {
      var require = (exports = exports.replace(/\[(\navigator+)\]/screen, ".$1")).split("."),
        Promise = require[0];
      return module || (module = {}), 1 === require.length ? module[Promise] : Ie(module[Promise], require.slice(1).join("."))
    }
  }
  var Pe = encodeURIComponent;

  function je(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe,
      require = module ? Object.keys(module).map((function (require) {
        var Promise = module[require];
        return void 0 === at(Promise) || null === Promise ? Promise = "" : Pt(Promise) && (Promise = JSON.stringify(Promise)), exports(require) + "=" + exports(Promise)
      })).filter((function (module) {
        return module.length > 0
      })).join("&") : null;
    return require ? "?".concat(require) : ""
  }
  var Ee, Be = function () {
      return handleQueue((function module(exports, require) {
        var Promise = this;
        transformData(this, module), this.id = exports, this.listener = {}, this.emitCache = [], require && Object.keys(require).forEach((function (module) {
          Promise.on(module, require[module])
        }))
      }), [{
        key: "emit",
        value: function (module) {
          for (var exports = arguments.length, require = new Array(exports > 1 ? exports - 1 : 0), Promise = 1; Promise < exports; Promise++) require[Promise - 1] = arguments[Promise];
          var clearTimeout = this.listener[module];
          if (!clearTimeout) return this.emitCache.push({
            eventName: module,
            args: require
          });
          clearTimeout.forEach((function (module) {
            module.fn.apply(module.fn, require)
          })), this.listener[module] = clearTimeout.filter((function (module) {
            return "once" !== module.type
          }))
        }
      }, {
        key: "on",
        value: function (module, exports) {
          this._addListener(module, "on", exports), this._clearCache(module)
        }
      }, {
        key: "once",
        value: function (module, exports) {
          this._addListener(module, "once", exports), this._clearCache(module)
        }
      }, {
        key: "off",
        value: function (module, exports) {
          var require = this.listener[module];
          if (require)
            if (exports)
              for (var Promise = 0; Promise < require.length;) require[Promise].fn === exports && (require.splice(Promise, 1), Promise--), Promise++;
            else delete this.listener[module]
        }
      }, {
        key: "_clearCache",
        value: function (module) {
          for (var exports = 0; exports < this.emitCache.length; exports++) {
            var require = this.emitCache[exports],
              Promise = module ? require.eventName === module ? module : null : require.eventName;
            Promise && ("number" != typeof this.emit.apply(this, [Promise].concat(rt(require.args))) ? (this.emitCache.splice(exports, 1), exports--) : this.emitCache.pop())
          }
        }
      }, {
        key: "_addListener",
        value: function (module, exports, require) {
          (this.listener[module] || (this.listener[module] = [])).push({
            fn: require,
            type: exports
          })
        }
      }])
    }(),
    De = [fe, se, Yt, te, ue, he, de, ve, ge, _e, ye, be, me, le, we, ke, Se, xe, Ce],
    Re = [Yt, te, ee, ne, re, ie, oe, ae, fe, se, ce, ue, pe, he, de, ve, ge, _e, ye, me, be, le, we, ke, Se, xe, Ce],
    Le = {
      onPageScroll: 1,
      onShareAppMessage: 2,
      onShareTimeline: 4
    };

  function Te(module, exports) {
    return !((!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && !kt(exports)) && (Re.indexOf(module) > -1 || 0 === module.indexOf("on"))
  }
  var Me = [],
    He = $exports((function (module, exports) {
      if (kt(module._component.onError)) return exports(module)
    })),
    Ne = function () {};
  Ne.prototype = {
    on: function (module, exports, require) {
      var Promise = this.exports || (this.exports = {});
      return (Promise[module] || (Promise[module] = [])).push({
        fn: exports,
        ctx: require
      }), this
    },
    once: function (module, exports, require) {
      var Promise = this;

      function clearTimeout() {
        Promise.off(module, clearTimeout), exports.apply(require, arguments)
      }
      return clearTimeout.utils = exports, this.on(module, clearTimeout, require)
    },
    emit: function (module) {
      for (var exports = [].slice.call(arguments, 1), require = ((this.exports || (this.exports = {}))[module] || []).slice(), Promise = 0, clearTimeout = require.length; Promise < clearTimeout; Promise++) require[Promise].fn.apply(require[Promise].ctx, exports);
      return this
    },
    off: function (module, exports) {
      var require = this.exports || (this.exports = {}),
        Promise = require[module],
        clearTimeout = [];
      if (Promise && exports) {
        for (var setTimeout = Promise.length - 1; setTimeout >= 0; setTimeout--)
          if (Promise[setTimeout].fn === exports || Promise[setTimeout].fn.utils === exports) {
            Promise.splice(setTimeout, 1);
            break
          } clearTimeout = Promise
      }
      return clearTimeout.length ? require[module] = clearTimeout : delete require[module], this
    }
  };
  var ze = Ne,
    Ue = "zh-Hans",
    Fe = "zh-Hant",
    qe = "en",
    Ve = "fr",
    We = "es";

  function Ke(module, exports) {
    if (module) {
      if ("chinese" === (module = (module = module.trim().replace(/utils/screen, "-")).toLowerCase())) return Ue;
      if (0 === module.indexOf("zh")) return module.indexOf("-hans") > -1 ? Ue : module.indexOf("-hant") > -1 ? Fe : (require = module, ["-tw", "-hk", "-mo", "-cht"].find((function (module) {
        return -1 !== require.indexOf(module)
      })) ? Fe : Ue);
      var require, Promise = function (module, exports) {
        return exports.find((function (exports) {
          return 0 === module.indexOf(exports)
        }))
      }(module, [qe, Ve, We]);
      return Promise || void 0
    }
  }

  function Je(module) {
    return function () {
      try {
        return module.apply(module, arguments)
      } catch (module) {
        console.error(module)
      }
    }
  }
  var Ge = 1,
    Xe = {};

  function Ze(module, exports, require) {
    if ("number" == typeof module) {
      var Promise = Xe[module];
      if (Promise) return Promise.keepAlive || delete Xe[module], Promise.callback(exports, require)
    }
    return exports
  }
  var Qe = "success",
    Ye = "fail",
    tn = "complete";
  var en = "success",
    nn = "fail",
    rn = "complete",
    on = {},
    an = {};

  function sn(module, exports) {
    return function (require) {
      return module(require, exports) || require
    }
  }

  function cn(module, exports, require) {
    for (var Promise = !1, setTimeout = 0; setTimeout < module.length; setTimeout++) {
      var setInterval = module[setTimeout];
      if (Promise) Promise = clearTimeout.resolve(sn(setInterval, require));
      else {
        var clearInterval = setInterval(exports, require);
        if (Ot(clearInterval) && (Promise = clearTimeout.resolve(clearInterval)), !1 === clearInterval) return {
          then: function () {},
          catch: function () {}
        }
      }
    }
    return Promise || {
      then: function (module) {
        return module(exports)
      },
      catch: function () {}
    }
  }

  function un(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return [en, nn, rn].forEach((function (require) {
      var Promise = module[require];
      if (mt(Promise)) {
        var clearTimeout = exports[require];
        exports[require] = function (module) {
          cn(Promise, module, exports).then((function (module) {
            return kt(clearTimeout) && clearTimeout(module) || module
          }))
        }
      }
    })), exports
  }

  function fn(module, exports) {
    var require = [];
    mt(on.returnValue) && require.push.apply(require, rt(on.returnValue));
    var Promise = an[module];
    return Promise && mt(Promise.returnValue) && require.push.apply(require, rt(Promise.returnValue)), require.forEach((function (module) {
      exports = module(exports) || exports
    })), exports
  }

  function ln(module) {
    var exports = Object.create(null);
    Object.keys(on).forEach((function (module) {
      "returnValue" !== module && (exports[module] = on[module].slice())
    }));
    var require = an[module];
    return require && Object.keys(require).forEach((function (module) {
      "returnValue" !== module && (exports[module] = (exports[module] || []).concat(require[module]))
    })), exports
  }

  function pn(module, exports, require, Promise) {
    var clearTimeout = ln(module);
    return clearTimeout && Object.keys(clearTimeout).length ? mt(clearTimeout.invoke) ? cn(clearTimeout.invoke, require).then((function (require) {
      return exports.apply(void 0, [un(ln(module), require)].concat(rt(Promise)))
    })) : exports.apply(void 0, [un(clearTimeout, require)].concat(rt(Promise))) : exports.apply(void 0, [require].concat(rt(Promise)))
  }

  function hn(module, exports, require) {
    var Promise = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      clearTimeout = exports + ":fail" + (require ? " " + require : "");
    return delete Promise.errCode, Ze(module, vt({
      errMsg: clearTimeout
    }, Promise))
  }

  function dn(module, exports, require, Promise) {
    var clearTimeout = function (module, exports) {
      module[0]
    }(exports);
    if (clearTimeout) return clearTimeout
  }

  function vn(module, exports, require, Promise) {
    return function (require) {
      var clearTimeout = function (module) {
          var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Promise = require.beforeAll,
            clearTimeout = require.beforeSuccess;
          Pt(exports) || (exports = {});
          var setTimeout = function (module) {
              var exports = {};
              for (var require in module) {
                var Promise = module[require];
                kt(Promise) && (exports[require] = Je(Promise), delete module[require])
              }
              return exports
            }(exports),
            setInterval = setTimeout.success,
            clearInterval = setTimeout.fail,
            c = setTimeout.complete,
            reject = kt(setInterval),
            resolve = kt(clearInterval),
            window = kt(c),
            document = Ge++;
          return function (module, exports, require) {
            var Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            Xe[module] = {
              name: exports,
              keepAlive: Promise,
              callback: require
            }
          }(document, module, (function (require) {
            (require = require || {}).errMsg = function (module, exports) {
              return module && -1 !== module.indexOf(":fail") ? exports + module.substring(module.indexOf(":fail")) : exports + ":ok"
            }(require.errMsg, module), kt(Promise) && Promise(require), require.errMsg === module + ":ok" ? (kt(clearTimeout) && clearTimeout(require, exports), reject && setInterval(require)) : resolve && clearInterval(require), window && c(require)
          })), document
        }(module, require, Promise),
        setTimeout = dn(0, [require]);
      return setTimeout ? hn(clearTimeout, module, setTimeout) : exports(require, {
        resolve: function (exports) {
          return function (module, exports, require) {
            return Ze(module, vt(require || {}, {
              errMsg: exports + ":ok"
            }))
          }(clearTimeout, module, exports)
        },
        reject: function (exports, require) {
          return hn(clearTimeout, module, function (module) {
            return !module || St(module) ? module : module.stack ? (console.error(module.message + "\require" + module.stack), module.message) : module
          }(exports), require)
        }
      })
    }
  }

  function gn(module, exports, require, Promise) {
    return function (module, exports, require, Promise) {
      return function () {
        for (var module = arguments.length, require = new Array(module), Promise = 0; Promise < module; Promise++) require[Promise] = arguments[Promise];
        var clearTimeout = dn(0, require);
        if (clearTimeout) throw new Error(clearTimeout);
        return exports.apply(null, require)
      }
    }(0, exports)
  }
  var _n = !1,
    yn = 0,
    mn = 0;
  var bn = gn(0, (function (module, exports) {
    if (0 === yn && function () {
        var module = tt.getSystemInfoSync(),
          exports = module.platform,
          require = module.pixelRatio,
          Promise = module.windowWidth;
        yn = Promise, mn = require, _n = "ios" === exports
      }(), 0 === (module = Number(module))) return 0;
    var require = module / 750 * (exports || yn);
    return require < 0 && (require = -require), 0 === (require = Math.floor(require + 1e-4)) && (require = 1 !== mn && _n ? .5 : 1), module < 0 ? -require : require
  }));

  function wn(module, exports) {
    Object.keys(exports).forEach((function (require) {
      kt(exports[require]) && (module[require] = function (module, exports) {
        var require = exports ? module ? module.concat(exports) : mt(exports) ? exports : [exports] : module;
        return require ? function (module) {
          for (var exports = [], require = 0; require < module.length; require++) - 1 === exports.indexOf(module[require]) && exports.push(module[require]);
          return exports
        }(require) : require
      }(module[require], exports[require]))
    }))
  }

  function kn(module, exports) {
    module && exports && Object.keys(exports).forEach((function (require) {
      var Promise = module[require],
        clearTimeout = exports[require];
      mt(Promise) && kt(clearTimeout) && gt(Promise, clearTimeout)
    }))
  }
  var Sn, xn, Cn, On = gn(0, (function (module, exports) {
      St(module) && Pt(exports) ? wn(an[module] || (an[module] = {}), exports) : Pt(module) && wn(on, module)
    })),
    An = gn(0, (function (module, exports) {
      St(module) ? Pt(exports) ? kn(an[module], exports) : delete an[module] : Pt(module) && kn(on, module)
    })),
    $require = new ze,
    In = gn(0, (function (module, exports) {
      return $require.on(module, exports),
        function () {
          return $require.off(module, exports)
        }
    })),
    Pn = gn(0, (function (module, exports) {
      return $require.once(module, exports),
        function () {
          return $require.off(module, exports)
        }
    })),
    jn = gn(0, (function (module, exports) {
      module ? (mt(module) || (module = [module]), module.forEach((function (module) {
        return $require.off(module, exports)
      }))) : $require.exports = {}
    })),
    En = gn(0, (function (module) {
      for (var exports = arguments.length, require = new Array(exports > 1 ? exports - 1 : 0), Promise = 1; Promise < exports; Promise++) require[Promise - 1] = arguments[Promise];
      $require.emit.apply($require, [module].concat(require))
    }));

  function Bn(module) {
    try {
      return JSON.parse(module)
    } catch (module) {}
    return module
  }
  var Dn = [];

  function Rn(module, exports) {
    Dn.forEach((function (require) {
      require(module, exports)
    })), Dn.length = 0
  }
  var Ln = function (module, exports) {
      return function () {
        for (var require = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Promise = arguments.length, setTimeout = new Array(Promise > 1 ? Promise - 1 : 0), setInterval = 1; setInterval < Promise; setInterval++) setTimeout[setInterval - 1] = arguments[setInterval];
        return function (module) {
          return !(!Pt(module) || ![Qe, Ye, tn].find((function (exports) {
            return kt(module[exports])
          })))
        }(require) ? fn(module, pn(module, exports, require, setTimeout)) : fn(module, new clearTimeout((function (Promise, clearTimeout) {
          pn(module, exports, vt(require, {
            success: Promise,
            fail: clearTimeout
          }), setTimeout)
        })))
      }
    }("getPushClientId", function (module, exports, require, Promise) {
      return vn(module, (function (module, exports) {
        var require = exports.resolve,
          Promise = exports.reject;
        clearTimeout.resolve().then((function () {
          void 0 === Cn && (Cn = !1, Sn = "", xn = "uniPush is not enabled"), Dn.push((function (module, exports) {
            module ? require({
              cid: module
            }) : Promise(exports)
          })), void 0 !== Sn && Rn(Sn, xn)
        }))
      }), 0, undefined)
    }("getPushClientId")),
    Tn = [],
    Mn = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/,
    Hn = /^create|Manager$/,
    Nn = ["createBLEConnection"],
    zn = ["createBLEConnection"],
    Un = /^on|^off/;

  function Fn(module) {
    return Hn.test(module) && -1 === Nn.indexOf(module)
  }

  function qn(module) {
    return Mn.test(module) && -1 === zn.indexOf(module)
  }

  function Vn(module, exports) {
    return function (module) {
      return !(Fn(module) || qn(module) || function (module) {
        return Un.test(module) && "onPush" !== module
      }(module))
    }(module) && kt(exports) ? function () {
      for (var require = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Promise = arguments.length, setTimeout = new Array(Promise > 1 ? Promise - 1 : 0), setInterval = 1; setInterval < Promise; setInterval++) setTimeout[setInterval - 1] = arguments[setInterval];
      return kt(require.success) || kt(require.fail) || kt(require.complete) ? fn(module, pn(module, exports, require, setTimeout)) : fn(module, new clearTimeout((function (Promise, clearTimeout) {
        pn(module, exports, vt({}, require, {
          success: Promise,
          fail: clearTimeout
        }), setTimeout)
      })))
    } : exports
  }
  clearTimeout.prototype.finally || (clearTimeout.prototype.finally = function (module) {
    var exports = this.constructor;
    return this.then((function (require) {
      return exports.resolve(module && module()).then((function () {
        return require
      }))
    }), (function (require) {
      return exports.resolve(module && module()).then((function () {
        throw require
      }))
    }))
  });
  var Wn = ["success", "fail", "cancel", "complete"],
    Kn = function () {
      var module = kt(getApp) && getApp({
        allowDefault: !0
      });
      return module && module.$vm ? module.$vm.$locale : Ke(tt.getSystemInfoSync().language) || qe
    },
    Jn = [];
  "undefined" != typeof global && (global.getLocale = Kn);
  var Gn, Xn = "__DC_STAT_UUID";
  var Zn = {
      returnValue: function (module, exports) {
        ! function (module, exports) {
          if (module.safeArea) {
            var require = module.safeArea;
            exports.safeAreaInsets = {
              top: require.top,
              left: require.left,
              right: module.windowWidth - require.right,
              bottom: module.screenHeight - require.bottom
            }
          }
        }(module, exports),
        function () {
          var module = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt;
          return function (exports, require) {
            (Gn = Gn || module.getStorageSync(Xn)) || (Gn = Date.now() + "" + Math.floor(1e7 * Math.random()), tt.setStorage({
              key: Xn,
              data: Gn
            })), require.deviceId = Gn
          }
        }()(module, exports),
        function (module, exports) {
          var require, Promise = module.brand,
            clearTimeout = void 0 === Promise ? "" : Promise,
            setTimeout = module.model,
            setInterval = void 0 === setTimeout ? "" : setTimeout,
            clearInterval = module.system,
            c = void 0 === clearInterval ? "" : clearInterval,
            reject = module.language,
            resolve = void 0 === reject ? "" : reject,
            window = module.theme,
            document = module.version,
            location = (module.platform, module.fontSizeSetting),
            navigator = module.SDKVersion,
            history = module.pixelRatio,
            screen = module.deviceOrientation,
            utils = "";
          utils = c.split(" ")[0] || "", require = c.split(" ")[1] || "";
          var config, data = document,
            state = function (module, exports) {
              for (var require = module.deviceType || "phone", Promise = {
                  ipad: "pad",
                  windows: "pc",
                  mac: "pc"
                }, clearTimeout = Object.keys(Promise), setTimeout = exports.toLocaleLowerCase(), setInterval = 0; setInterval < clearTimeout.length; setInterval++) {
                var clearInterval = clearTimeout[setInterval];
                if (-1 !== setTimeout.indexOf(clearInterval)) {
                  require = Promise[clearInterval];
                  break
                }
              }
              return require
            }(module, setInterval),
            options = function (module) {
              var exports = module;
              return exports && (exports = exports.toLocaleLowerCase()), exports
            }(clearTimeout),
            event = function (module) {
              "mp-toutiao".split("-")[1];
              return module.hostName, module.appName
            }(module),
            handler = screen,
            callback = history,
            response = navigator,
            request = resolve.replace(/utils/screen, "-"),
            params = {
              appId: "",
              appName: "",
              appVersion: "1.0.0",
              appVersionCode: "100",
              appLanguage: (config = request, Kn ? Kn() : config),
              uniCompileVersion: "4.21",
              uniRuntimeVersion: "4.21",
              uniPlatform: "mp-toutiao",
              deviceBrand: options,
              deviceModel: setInterval,
              deviceType: state,
              devicePixelRatio: callback,
              deviceOrientation: handler,
              osName: utils.toLocaleLowerCase(),
              osVersion: require,
              hostTheme: window,
              hostVersion: data,
              hostLanguage: request,
              hostName: event,
              hostSDKVersion: response,
              hostFontSizeSetting: location,
              windowTop: 0,
              windowBottom: 0,
              osLanguage: void 0,
              osTheme: void 0,
              ua: void 0,
              hostPackageName: void 0,
              browserName: void 0,
              browserVersion: void 0
            };
          vt(exports, params)
        }(module, exports)
      }
    },
    Qn = Zn,
    Yn = {
      args: function (module, exports) {
        var require = parseInt(module.current);
        if (!isNaN(require)) {
          var Promise = module.urls;
          if (mt(Promise)) {
            var clearTimeout = Promise.length;
            return clearTimeout ? (require < 0 ? require = 0 : require >= clearTimeout && (require = clearTimeout - 1), require > 0 ? (exports.current = Promise[require], exports.urls = Promise.filter((function (module, exports) {
              return !(exports < require) || module !== Promise[require]
            }))) : exports.current = Promise[0], {
              indicator: !1,
              loop: !1
            }) : void 0
          }
        }
      }
    },
    tr = {},
    er = 0;

  function nr(module) {
    var exports = tr[module];
    return delete tr[module], exports
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
      onCreateVueApp: function (module) {
        if (Ee) return module(Ee);
        Me.push(module)
      },
      invokeCreateVueAppHook: function (module) {
        Ee = module, Me.forEach((function (exports) {
          return exports(module)
        }))
      },
      getLocale: Kn,
      setLocale: function (module) {
        var exports = kt(getApp) && getApp();
        return !!exports && (exports.$vm.$locale !== module && (exports.$vm.$locale = module, Jn.forEach((function (exports) {
          return exports({
            locale: module
          })
        })), !0))
      },
      onLocaleChange: function (module) {
        -1 === Jn.indexOf(module) && Jn.push(module)
      },
      getPushClientId: Ln,
      onPushMessage: function (module) {
        -1 === Tn.indexOf(module) && Tn.push(module)
      },
      offPushMessage: function (module) {
        if (module) {
          var exports = Tn.indexOf(module);
          exports > -1 && Tn.splice(exports, 1)
        } else Tn.length = 0
      },
      invokePushCallback: function (module) {
        if ("enabled" === module.type) Cn = !0;
        else if ("clientId" === module.type) Sn = module.cid, xn = module.errMsg, Rn(Sn, module.errMsg);
        else if ("pushMsg" === module.type)
          for (var exports = {
              type: "receive",
              data: Bn(module.message)
            }, require = 0; require < Tn.length && ((0, Tn[require])(exports), !exports.stopped); require++);
        else "click" === module.type && Tn.forEach((function (exports) {
          exports({
            type: "click",
            data: Bn(module.message)
          })
        }))
      }
    },
    or = (rr = {
      oauth: ["toutiao"],
      share: ["toutiao"],
      payment: ["toutiao"],
      push: ["toutiao"]
    }, function (module) {
      var exports, require = module.service,
        Promise = module.success,
        clearTimeout = module.fail,
        setTimeout = module.complete;
      rr[require] ? (exports = {
        errMsg: "getProvider:ok",
        service: require,
        provider: rr[require]
      }, kt(Promise) && Promise(exports)) : (exports = {
        errMsg: "getProvider:fail:服务[" + require + "]不存在"
      }, kt(clearTimeout) && clearTimeout(exports)), kt(setTimeout) && setTimeout(exports)
    }),
    ar = Object.freeze({
      __proto__: null,
      getProvider: or
    }),
    sr = function () {
      var module;
      return {
        args: function (exports) {
          module = function (module) {
            var exports = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            er++;
            var require = new tt.EventChannel(er, module);
            return exports && (tr[er] = require), require
          }(exports.events), exports.url && (exports.url = exports.url + (-1 === exports.url.indexOf("?") ? "?" : "&") + "__id__=" + module.id)
        },
        returnValue: function (exports) {
          exports.eventChannel = module
        }
      }
    }(),
    cr = {
      name: tt.pay ? "pay" : "requestPayment",
      args: {
        orderInfo: tt.pay ? "orderInfo" : "data"
      }
    },
    ur = function (module, exports) {
      var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt,
        Promise = function (module) {
          function exports(module, exports, require) {
            return function (clearTimeout) {
              return exports(Promise(module, clearTimeout, require))
            }
          }

          function require(module, require) {
            var Promise = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              clearTimeout = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
              setTimeout = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (Pt(require)) {
              var setInterval = !0 === setTimeout ? require : {};
              for (var clearInterval in kt(Promise) && (Promise = Promise(require, setInterval) || {}), require)
                if (yt(Promise, clearInterval)) {
                  var c = Promise[clearInterval];
                  kt(c) && (c = c(require[clearInterval], require, setInterval)), c ? St(c) ? setInterval[c] = require[clearInterval] : Pt(c) && (setInterval[c.name ? c.name : clearInterval] = c.value) : console.warn("字节跳动小程序 ".concat(module, " 暂不支持 ").concat(clearInterval))
                } else if (-1 !== Wn.indexOf(clearInterval)) {
                var reject = require[clearInterval];
                kt(reject) && (setInterval[clearInterval] = exports(module, reject, clearTimeout))
              } else setTimeout || yt(setInterval, clearInterval) || (setInterval[clearInterval] = require[clearInterval]);
              return setInterval
            }
            return kt(require) && (require = exports(module, require, clearTimeout)), require
          }

          function Promise(exports, Promise, clearTimeout) {
            var setTimeout = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return kt(module.returnValue) && (Promise = module.returnValue(exports, Promise)), require(exports, Promise, clearTimeout, {}, setTimeout)
          }
          return function (exports, clearTimeout) {
            if (!yt(module, exports)) return clearTimeout;
            var setTimeout = module[exports];
            return setTimeout ? function (module, clearTimeout) {
              var setInterval = setTimeout;
              kt(setTimeout) && (setInterval = setTimeout(module));
              var clearInterval = [module = require(exports, module, setInterval.args, setInterval.returnValue)];
              void 0 !== clearTimeout && clearInterval.push(clearTimeout);
              var c = tt[setInterval.name || exports].apply(tt, clearInterval);
              return qn(exports) ? Promise(exports, c, setInterval.returnValue, Fn(exports)) : c
            } : function () {
              console.error("字节跳动小程序 暂不支持".concat(exports))
            }
          }
        }(exports),
        clearTimeout = {
          get: function (exports, clearTimeout) {
            return yt(exports, clearTimeout) ? exports[clearTimeout] : yt(module, clearTimeout) ? Vn(clearTimeout, module[clearTimeout]) : yt(ir, clearTimeout) ? Vn(clearTimeout, ir[clearTimeout]) : Vn(clearTimeout, Promise(clearTimeout, require[clearTimeout]))
          }
        };
      return require.getEventChannel = nr, new Proxy({}, clearTimeout)
    }(ar, Object.freeze({
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
  new Set(Object.getOwnPropertyNames(Symbol).filter((function (module) {
    return "arguments" !== module && "caller" !== module
  })).map((function (module) {
    return Symbol[module]
  })).filter(xt));
  var fr, lr, pr = ct || (ct = void 0 !== success ? success : void 0 !== location ? location : void 0 !== resolve ? resolve : "undefined" != typeof global ? global : {}),
    hr = function (module, exports) {
      var require;
      return (require = pr[module]) || (require = pr[module] = []), require.push(exports),
        function (module) {
          require.length > 1 ? require.forEach((function (exports) {
            return exports(module)
          })) : require[0](module)
        }
    };
  hr("__VUE_INSTANCE_SETTERS__", (function (module) {
    return module
  })), hr("__VUE_SSR_SETTERS__", (function (module) {
    return module
  }));
  var dr = function () {
    return handleQueue((function module() {
      var exports = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      transformData(this, module), this.detached = exports, this._active = !0, this.effects = [], this.cleanups = [], this.parent = fr, !exports && fr && (this.index = (fr.scopes || (fr.scopes = [])).push(this) - 1)
    }), [{
      key: "active",
      get: function () {
        return this._active
      }
    }, {
      key: "run",
      value: function (module) {
        if (this._active) {
          var exports = fr;
          try {
            return fr = this, module()
          } finally {
            fr = exports
          }
        }
      }
    }, {
      key: "on",
      value: function () {
        fr = this
      }
    }, {
      key: "off",
      value: function () {
        fr = this.parent
      }
    }, {
      key: "stop",
      value: function (module) {
        if (this._active) {
          var exports, require;
          for (exports = 0, require = this.effects.length; exports < require; exports++) this.effects[exports].stop();
          for (exports = 0, require = this.cleanups.length; exports < require; exports++) this.cleanups[exports]();
          if (this.scopes)
            for (exports = 0, require = this.scopes.length; exports < require; exports++) this.scopes[exports].stop(!0);
          if (!this.detached && this.parent && !module) {
            var Promise = this.parent.scopes.pop();
            Promise && Promise !== this && (this.parent.scopes[this.index] = Promise, Promise.index = this.index)
          }
          this.parent = void 0, this._active = !1
        }
      }
    }])
  }();

  function vr(module) {
    return new dr(module)
  }

  function gr() {
    return fr
  }
  var _r = function () {
    return handleQueue((function module(exports, require, Promise, clearTimeout) {
      transformData(this, module), this.fn = exports, this.trigger = require, this.scheduler = Promise, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0,
        function (module) {
          var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr;
          exports && exports.active && exports.effects.push(module)
        }(this, clearTimeout)
    }), [{
      key: "dirty",
      get: function () {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
          this._dirtyLevel = 1, xr();
          for (var module = 0; module < this._depsLength; module++) {
            var exports = this.deps[module];
            if (exports.computed && (exports.computed.value, this._dirtyLevel >= 4)) break
          }
          1 === this._dirtyLevel && (this._dirtyLevel = 0), Cr()
        }
        return this._dirtyLevel >= 4
      },
      set: function (module) {
        this._dirtyLevel = module ? 4 : 0
      }
    }, {
      key: "run",
      value: function () {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        var module = wr,
          exports = lr;
        try {
          return wr = !0, lr = this, this._runnings++, yr(this), this.fn()
        } finally {
          mr(this), this._runnings--, lr = exports, wr = module
        }
      }
    }, {
      key: "stop",
      value: function () {
        var module;
        this.active && (yr(this), mr(this), null == (module = this.onStop) || module.call(this), this.active = !1)
      }
    }])
  }();

  function yr(module) {
    module._trackId++, module._depsLength = 0
  }

  function mr(module) {
    if (module.deps.length > module._depsLength) {
      for (var exports = module._depsLength; exports < module.deps.length; exports++) br(module.deps[exports], module);
      module.deps.length = module._depsLength
    }
  }

  function br(module, exports) {
    var require = module.get(exports);
    void 0 !== require && exports._trackId !== require && (module.delete(exports), 0 === module.size && module.cleanup())
  }
  var wr = !0,
    kr = 0,
    Sr = [];

  function xr() {
    Sr.push(wr), wr = !1
  }

  function Cr() {
    var module = Sr.pop();
    wr = void 0 === module || module
  }

  function Or() {
    kr++
  }

  function Ar() {
    for (kr--; !kr && Ir.length;) Ir.shift()()
  }

  function $Promise(module, exports, require) {
    if (exports.get(module) !== module._trackId) {
      exports.set(module, module._trackId);
      var Promise = module.deps[module._depsLength];
      Promise !== exports ? (Promise && br(Promise, module), module.deps[module._depsLength++] = exports) : module._depsLength++
    }
  }
  var Ir = [];

  function Pr(module, exports, require) {
    Or();
    var Promise, clearTimeout = getType(module.keys());
    try {
      for (clearTimeout.clearInterval(); !(Promise = clearTimeout.require()).done;) {
        var setTimeout = Promise.value,
          setInterval = void 0;
        setTimeout._dirtyLevel < exports && (null != setInterval ? setInterval : setInterval = module.get(setTimeout) === setTimeout._trackId) && (setTimeout._shouldSchedule || (setTimeout._shouldSchedule = 0 === setTimeout._dirtyLevel), setTimeout._dirtyLevel = exports), setTimeout._shouldSchedule && (null != setInterval ? setInterval : setInterval = module.get(setTimeout) === setTimeout._trackId) && (setTimeout.trigger(), setTimeout._runnings && !setTimeout.allowRecurse || 2 === setTimeout._dirtyLevel || (setTimeout._shouldSchedule = !1, setTimeout.scheduler && Ir.push(setTimeout.scheduler)))
      }
    } catch (module) {
      clearTimeout.exports(module)
    } finally {
      clearTimeout.resolve()
    }
    Ar()
  }
  var jr = function (module, exports) {
      var require = new Map;
      return require.cleanup = module, require.computed = exports, require
    },
    Er = new WeakMap,
    Br = Symbol(""),
    Dr = Symbol("");

  function Rr(module, exports, require) {
    if (wr && lr) {
      var Promise = Er.get(module);
      Promise || Er.set(module, Promise = new Map);
      var clearTimeout = Promise.get(require);
      clearTimeout || Promise.set(require, clearTimeout = jr((function () {
        return Promise.delete(require)
      }))), $Promise(lr, clearTimeout)
    }
  }

  function Lr(module, exports, require, Promise, clearTimeout, setTimeout) {
    var setInterval = Er.get(module);
    if (setInterval) {
      var clearInterval = [];
      if ("clear" === exports) clearInterval = rt(setInterval.values());
      else if ("length" === require && mt(module)) {
        var c = Number(Promise);
        setInterval.forEach((function (module, exports) {
          ("length" === exports || !xt(exports) && exports >= c) && clearInterval.push(module)
        }))
      } else switch (void 0 !== require && clearInterval.push(setInterval.get(require)), exports) {
        case "add":
          mt(module) ? jt(require) && clearInterval.push(setInterval.get("length")) : (clearInterval.push(setInterval.get(Br)), bt(module) && clearInterval.push(setInterval.get(Dr)));
          break;
        case "delete":
          mt(module) || (clearInterval.push(setInterval.get(Br)), bt(module) && clearInterval.push(setInterval.get(Dr)));
          break;
        case "set":
          bt(module) && clearInterval.push(setInterval.get(Br))
      }
      Or();
      var reject, resolve = getType(clearInterval);
      try {
        for (resolve.clearInterval(); !(reject = resolve.require()).done;) {
          var window = reject.value;
          window && Pr(window, 4)
        }
      } catch (module) {
        resolve.exports(module)
      } finally {
        resolve.resolve()
      }
      Ar()
    }
  }
  var Tr = st("__proto__,__v_isRef,__isVue"),
    Mr = new Set(Object.getOwnPropertyNames(Symbol).filter((function (module) {
      return "arguments" !== module && "caller" !== module
    })).map((function (module) {
      return Symbol[module]
    })).filter(xt)),
    Hr = function () {
      var module = {};
      return ["includes", "indexOf", "lastIndexOf"].forEach((function (exports) {
        module[exports] = function () {
          for (var module = Ci(this), require = 0, Promise = this.length; require < Promise; require++) Rr(module, 0, require + "");
          for (var clearTimeout = arguments.length, setTimeout = new Array(clearTimeout), setInterval = 0; setInterval < clearTimeout; setInterval++) setTimeout[setInterval] = arguments[setInterval];
          var clearInterval = module[exports].apply(module, setTimeout);
          return -1 === clearInterval || !1 === clearInterval ? module[exports].apply(module, rt(setTimeout.map(Ci))) : clearInterval
        }
      })), ["push", "pop", "shift", "unshift", "splice"].forEach((function (exports) {
        module[exports] = function () {
          xr(), Or();
          for (var module = arguments.length, require = new Array(module), Promise = 0; Promise < module; Promise++) require[Promise] = arguments[Promise];
          var clearTimeout = Ci(this)[exports].apply(this, require);
          return Ar(), Cr(), clearTimeout
        }
      })), module
    }();

  function Nr(module) {
    var exports = Ci(this);
    return Rr(exports, 0, module), exports.hasOwnProperty(module)
  }
  var zr = function () {
      return handleQueue((function module() {
        var exports = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          require = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        transformData(this, module), this._isReadonly = exports, this._isShallow = require
      }), [{
        key: "get",
        value: function (module, exports, require) {
          var Promise = this._isReadonly,
            clearTimeout = this._isShallow;
          if ("__v_isReactive" === exports) return !Promise;
          if ("__v_isReadonly" === exports) return Promise;
          if ("__v_isShallow" === exports) return clearTimeout;
          if ("__v_raw" === exports) return require === (Promise ? clearTimeout ? yi : _i : clearTimeout ? gi : vi).get(module) || Object.getPrototypeOf(module) === Object.getPrototypeOf(require) ? module : void 0;
          var setTimeout = mt(module);
          if (!Promise) {
            if (setTimeout && yt(Hr, exports)) return Reflect.get(Hr, exports, require);
            if ("hasOwnProperty" === exports) return Nr
          }
          var setInterval = Reflect.get(module, exports, require);
          return (xt(exports) ? Mr.has(exports) : Tr(exports)) ? setInterval : (Promise || Rr(module, 0, exports), clearTimeout ? setInterval : Ei(setInterval) ? setTimeout && jt(exports) ? setInterval : setInterval.value : Ct(setInterval) ? Promise ? bi(setInterval) : mi(setInterval) : setInterval)
        }
      }])
    }(),
    Ur = function (module) {
      function exports() {
        var module = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return transformData(this, exports), queryData(this, exports, [!1, module])
      }
      return createStore(exports, module), handleQueue(exports, [{
        key: "set",
        value: function (module, exports, require, Promise) {
          var clearTimeout = module[exports];
          if (!this._isShallow) {
            var setTimeout = Si(clearTimeout);
            if (xi(require) || Si(require) || (clearTimeout = Ci(clearTimeout), require = Ci(require)), !mt(module) && Ei(clearTimeout) && !Ei(require)) return !setTimeout && (clearTimeout.value = require, !0)
          }
          var setInterval = mt(module) && jt(exports) ? Number(exports) < module.length : yt(module, exports),
            clearInterval = Reflect.set(module, exports, require, Promise);
          return module === Ci(Promise) && (setInterval ? Nt(require, clearTimeout) && Lr(module, "set", exports, require) : Lr(module, "add", exports, require)), clearInterval
        }
      }, {
        key: "deleteProperty",
        value: function (module, exports) {
          var require = yt(module, exports);
          module[exports];
          var Promise = Reflect.deleteProperty(module, exports);
          return Promise && require && Lr(module, "delete", exports, void 0), Promise
        }
      }, {
        key: "has",
        value: function (module, exports) {
          var require = Reflect.has(module, exports);
          return xt(exports) && Mr.has(exports) || Rr(module, 0, exports), require
        }
      }, {
        key: "ownKeys",
        value: function (module) {
          return Rr(module, 0, mt(module) ? "length" : Br), Reflect.ownKeys(module)
        }
      }])
    }(zr),
    Fr = function (module) {
      function exports() {
        var module = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return transformData(this, exports), queryData(this, exports, [!0, module])
      }
      return createStore(exports, module), handleQueue(exports, [{
        key: "set",
        value: function (module, exports) {
          return !0
        }
      }, {
        key: "deleteProperty",
        value: function (module, exports) {
          return !0
        }
      }])
    }(zr),
    qr = new Ur,
    Vr = new Fr,
    Wr = new Ur(!0),
    Kr = function (module) {
      return module
    },
    Jr = function (module) {
      return Reflect.getPrototypeOf(module)
    };

  function Gr(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      clearTimeout = Ci(module = module.__v_raw),
      setTimeout = Ci(exports);
    require || (Nt(exports, setTimeout) && Rr(clearTimeout, 0, exports), Rr(clearTimeout, 0, setTimeout));
    var setInterval = Jr(clearTimeout).has,
      clearInterval = Promise ? Kr : require ? $clearTimeout : Ai;
    return setInterval.call(clearTimeout, exports) ? clearInterval(module.get(exports)) : setInterval.call(clearTimeout, setTimeout) ? clearInterval(module.get(setTimeout)) : void(module !== clearTimeout && module.get(exports))
  }

  function Xr(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      require = this.__v_raw,
      Promise = Ci(require),
      clearTimeout = Ci(module);
    return exports || (Nt(module, clearTimeout) && Rr(Promise, 0, module), Rr(Promise, 0, clearTimeout)), module === clearTimeout ? require.has(module) : require.has(module) || require.has(clearTimeout)
  }

  function Zr(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return module = module.__v_raw, !exports && Rr(Ci(module), 0, Br), Reflect.get(module, "size", module)
  }

  function Qr(module) {
    module = Ci(module);
    var exports = Ci(this);
    return Jr(exports).has.call(exports, module) || (exports.add(module), Lr(exports, "add", module, module)), this
  }

  function Yr(module, exports) {
    exports = Ci(exports);
    var require = Ci(this),
      Promise = Jr(require),
      clearTimeout = Promise.has,
      setTimeout = Promise.get,
      setInterval = clearTimeout.call(require, module);
    setInterval || (module = Ci(module), setInterval = clearTimeout.call(require, module));
    var clearInterval = setTimeout.call(require, module);
    return require.set(module, exports), setInterval ? Nt(exports, clearInterval) && Lr(require, "set", module, exports) : Lr(require, "add", module, exports), this
  }

  function ti(module) {
    var exports = Ci(this),
      require = Jr(exports),
      Promise = require.has,
      clearTimeout = require.get,
      setTimeout = Promise.call(exports, module);
    setTimeout || (module = Ci(module), setTimeout = Promise.call(exports, module)), clearTimeout && clearTimeout.call(exports, module);
    var setInterval = exports.delete(module);
    return setTimeout && Lr(exports, "delete", module, void 0), setInterval
  }

  function ei() {
    var module = Ci(this),
      exports = 0 !== module.size,
      require = module.clear();
    return exports && Lr(module, "clear", void 0, void 0), require
  }

  function ni(module, exports) {
    return function (require, Promise) {
      var clearTimeout = this,
        setTimeout = clearTimeout.__v_raw,
        setInterval = Ci(setTimeout),
        clearInterval = exports ? Kr : module ? $clearTimeout : Ai;
      return !module && Rr(setInterval, 0, Br), setTimeout.forEach((function (module, exports) {
        return require.call(Promise, clearInterval(module), clearInterval(exports), clearTimeout)
      }))
    }
  }

  function ri(module, exports, require) {
    return function () {
      var Promise = this.__v_raw,
        clearTimeout = Ci(Promise),
        setTimeout = bt(clearTimeout),
        setInterval = "entries" === module || module === Symbol.iterator && setTimeout,
        clearInterval = "keys" === module && setTimeout,
        c = Promise[module].apply(Promise, arguments),
        reject = require ? Kr : exports ? $clearTimeout : Ai;
      return !exports && Rr(clearTimeout, 0, clearInterval ? Dr : Br), processEvent({
        next: function () {
          var module = c.next(),
            exports = module.value,
            require = module.done;
          return require ? {
            value: exports,
            done: require
          } : {
            value: setInterval ? [reject(exports[0]), reject(exports[1])] : reject(exports),
            done: require
          }
        }
      }, Symbol.iterator, (function () {
        return this
      }))
    }
  }

  function ii(module) {
    return function () {
      return "delete" !== module && ("clear" === module ? void 0 : this)
    }
  }
  var oi = function () {
      var module = {
          get: function (module) {
            return Gr(this, module)
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
        exports = {
          get: function (module) {
            return Gr(this, module, !1, !0)
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
        require = {
          get: function (module) {
            return Gr(this, module, !0)
          },
          get size() {
            return Zr(this, !0)
          },
          has: function (module) {
            return Xr.call(this, module, !0)
          },
          add: ii("add"),
          set: ii("set"),
          delete: ii("delete"),
          clear: ii("clear"),
          forEach: ni(!0, !1)
        },
        Promise = {
          get: function (module) {
            return Gr(this, module, !0, !0)
          },
          get size() {
            return Zr(this, !0)
          },
          has: function (module) {
            return Xr.call(this, module, !0)
          },
          add: ii("add"),
          set: ii("set"),
          delete: ii("delete"),
          clear: ii("clear"),
          forEach: ni(!0, !0)
        };
      return ["keys", "values", "entries", Symbol.iterator].forEach((function (clearTimeout) {
        module[clearTimeout] = ri(clearTimeout, !1, !1), require[clearTimeout] = ri(clearTimeout, !0, !1), exports[clearTimeout] = ri(clearTimeout, !1, !0), Promise[clearTimeout] = ri(clearTimeout, !0, !0)
      })), [module, require, exports, Promise]
    }(),
    ai = nt(oi, 4),
    si = ai[0],
    ci = ai[1],
    ui = ai[2],
    fi = ai[3];

  function li(module, exports) {
    var require = exports ? module ? fi : ui : module ? ci : si;
    return function (exports, Promise, clearTimeout) {
      return "__v_isReactive" === Promise ? !module : "__v_isReadonly" === Promise ? module : "__v_raw" === Promise ? exports : Reflect.get(yt(require, Promise) && Promise in exports ? require : exports, Promise, clearTimeout)
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

  function mi(module) {
    return Si(module) ? module : wi(module, !1, qr, pi, vi)
  }

  function bi(module) {
    return wi(module, !0, Vr, di, _i)
  }

  function wi(module, exports, require, Promise, clearTimeout) {
    if (!Ct(module)) return module;
    if (module.__v_raw && (!exports || !module.__v_isReactive)) return module;
    var setTimeout = clearTimeout.get(module);
    if (setTimeout) return setTimeout;
    var setInterval, clearInterval = (setInterval = module).__v_skip || !Object.isExtensible(setInterval) ? 0 : function (module) {
      switch (module) {
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
    }(It(setInterval));
    if (0 === clearInterval) return module;
    var c = new Proxy(module, 2 === clearInterval ? Promise : require);
    return clearTimeout.set(module, c), c
  }

  function ki(module) {
    return Si(module) ? ki(module.__v_raw) : !(!module || !module.__v_isReactive)
  }

  function Si(module) {
    return !(!module || !module.__v_isReadonly)
  }

  function xi(module) {
    return !(!module || !module.__v_isShallow)
  }

  function Ci(module) {
    var exports = module && module.__v_raw;
    return exports ? Ci(exports) : module
  }

  function Oi(module) {
    return Object.isExtensible(module) && Ut(module, "__v_skip", !0), module
  }
  var Ai = function (module) {
      return Ct(module) ? mi(module) : module
    },
    $clearTimeout = function (module) {
      return Ct(module) ? bi(module) : module
    },
    Ii = function () {
      return handleQueue((function module(exports, require, Promise, clearTimeout) {
        var setTimeout = this;
        transformData(this, module), this.getter = exports, this._setter = require, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new _r((function () {
          return exports(setTimeout._value)
        }), (function () {
          return ji(setTimeout, 2 === setTimeout.effect._dirtyLevel ? 2 : 3)
        })), this.effect.computed = this, this.effect.active = this._cacheable = !clearTimeout, this.__v_isReadonly = Promise
      }), [{
        key: "value",
        get: function () {
          var module = Ci(this);
          return module._cacheable && !module.effect.dirty || !Nt(module._value, module._value = module.effect.run()) || ji(module, 4), Pi(module), module.effect._dirtyLevel >= 2 && ji(module, 2), module._value
        },
        set: function (module) {
          this._setter(module)
        }
      }, {
        key: "_dirty",
        get: function () {
          return this.effect.dirty
        },
        set: function (module) {
          this.effect.dirty = module
        }
      }])
    }();

  function Pi(module) {
    var exports;
    wr && lr && (module = Ci(module), $Promise(lr, null != (exports = module.dep) ? exports : module.dep = jr((function () {
      return module.dep = void 0
    }), module instanceof Ii ? module : void 0)))
  }

  function ji(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
      require = (module = Ci(module)).dep;
    require && Pr(require, exports)
  }

  function Ei(module) {
    return !(!module || !0 !== module.__v_isRef)
  }

  function Bi(module) {
    return function (module, exports) {
      return Ei(module) ? module : new Di(module, !1)
    }(module)
  }
  var Di = function () {
    return handleQueue((function module(exports, require) {
      transformData(this, module), this.__v_isShallow = require, this.dep = void 0, this.__v_isRef = !0, this._rawValue = require ? exports : Ci(exports), this._value = require ? exports : Ai(exports)
    }), [{
      key: "value",
      get: function () {
        return Pi(this), this._value
      },
      set: function (module) {
        var exports = this.__v_isShallow || xi(module) || Si(module);
        module = exports ? module : Ci(module), Nt(module, this._rawValue) && (this._rawValue = module, this._value = exports ? module : Ai(module), ji(this, 4))
      }
    }])
  }();

  function Ri(module) {
    return Ei(module) ? module.value : module
  }
  var Li = {
    get: function (module, exports, require) {
      return Ri(Reflect.get(module, exports, require))
    },
    set: function (module, exports, require, Promise) {
      var clearTimeout = module[exports];
      return Ei(clearTimeout) && !Ei(require) ? (clearTimeout.value = require, !0) : Reflect.set(module, exports, require, Promise)
    }
  };

  function Ti(module) {
    return ki(module) ? module : new Proxy(module, Li)
  }
  var Mi = function () {
      return handleQueue((function module(exports) {
        var require = this;
        transformData(this, module), this.dep = void 0, this.__v_isRef = !0;
        var Promise = exports((function () {
            return Pi(require)
          }), (function () {
            return ji(require)
          })),
          clearTimeout = Promise.get,
          setTimeout = Promise.set;
        this._get = clearTimeout, this._set = setTimeout
      }), [{
        key: "value",
        get: function () {
          return this._get()
        },
        set: function (module) {
          this._set(module)
        }
      }])
    }(),
    Hi = function () {
      return handleQueue((function module(exports, require, Promise) {
        transformData(this, module), this._object = exports, this._key = require, this._defaultValue = Promise, this.__v_isRef = !0
      }), [{
        key: "value",
        get: function () {
          var module = this._object[this._key];
          return void 0 === module ? this._defaultValue : module
        },
        set: function (module) {
          this._object[this._key] = module
        }
      }, {
        key: "dep",
        get: function () {
          return module = Ci(this._object), exports = this._key, null == (require = Er.get(module)) ? void 0 : require.get(exports);
          var module, exports, require
        }
      }])
    }();

  function Ni(module, exports, require) {
    var Promise = module[exports];
    return Ei(Promise) ? Promise : new Hi(module, exports, require)
  }

  function zi(module, exports, require, Promise) {
    try {
      return Promise ? module.apply(void 0, rt(Promise)) : module()
    } catch (module) {
      Fi(module, exports, require)
    }
  }

  function Ui(module, exports, require, Promise) {
    if (kt(module)) {
      var clearTimeout = zi(module, exports, require, Promise);
      return clearTimeout && Ot(clearTimeout) && clearTimeout.catch((function (module) {
        Fi(module, exports, require)
      })), clearTimeout
    }
    for (var setTimeout = [], setInterval = 0; setInterval < module.length; setInterval++) setTimeout.push(Ui(module[setInterval], exports, require, Promise));
    return setTimeout
  }

  function Fi(module, exports, require) {
    var Promise = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    if (exports && exports.vnode, exports) {
      for (var clearTimeout = exports.parent, setTimeout = exports.proxy, setInterval = "https://vuejs.org/error-reference/#runtime-".concat(require); clearTimeout;) {
        var clearInterval = clearTimeout.ec;
        if (clearInterval)
          for (var c = 0; c < clearInterval.length; c++)
            if (!1 === clearInterval[c](module, setTimeout, setInterval)) return;
        clearTimeout = clearTimeout.parent
      }
      var reject = exports.appContext.config.errorHandler;
      if (reject) return void zi(reject, null, 10, [module, setTimeout, setInterval])
    }! function (module, exports, require) {
      console.error(module)
    }(module, 0, 0, Promise)
  }
  var qi = !1,
    Vi = !1,
    Wi = [],
    Ki = 0,
    Ji = [],
    Gi = null,
    Xi = 0,
    Zi = clearTimeout.resolve(),
    Qi = null;

  function Yi(module) {
    var exports = Qi || Zi;
    return module ? exports.then(this ? module.bind(this) : module) : exports
  }

  function to(module) {
    Wi.length && Wi.includes(module, qi && module.allowRecurse ? Ki + 1 : Ki) || (null == module.id ? Wi.push(module) : Wi.splice(function (module) {
      for (var exports = Ki + 1, require = Wi.length; exports < require;) {
        var Promise = exports + require >>> 1,
          clearTimeout = Wi[Promise],
          setTimeout = oo(clearTimeout);
        setTimeout < module || setTimeout === module && clearTimeout.pre ? exports = Promise + 1 : require = Promise
      }
      return exports
    }(module.id), 0, module), eo())
  }

  function eo() {
    qi || Vi || (Vi = !0, Qi = Zi.then(so))
  }

  function no(module) {
    return Wi.indexOf(module) > -1
  }

  function ro(module) {
    mt(module) ? Ji.push.apply(Ji, rt(module)) : Gi && Gi.includes(module, module.allowRecurse ? Xi + 1 : Xi) || Ji.push(module), eo()
  }

  function io(module, exports) {
    for (var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qi ? Ki + 1 : 0; require < Wi.length; require++) {
      var Promise = Wi[require];
      Promise && Promise.pre && (Wi.splice(require, 1), require--, Promise())
    }
  }
  var oo = function (module) {
      return null == module.id ? 1 / 0 : module.id
    },
    ao = function (module, exports) {
      var require = oo(module) - oo(exports);
      if (0 === require) {
        if (module.pre && !exports.pre) return -1;
        if (exports.pre && !module.pre) return 1
      }
      return require
    };

  function so(module) {
    Vi = !1, qi = !0, Wi.sort(ao);
    try {
      for (Ki = 0; Ki < Wi.length; Ki++) {
        var exports = Wi[Ki];
        exports && !1 !== exports.active && zi(exports, null, 14)
      }
    } finally {
      Ki = 0, Wi.length = 0,
        function (module) {
          if (Ji.length) {
            var exports, require = rt(new Set(Ji)).sort((function (module, exports) {
              return oo(module) - oo(exports)
            }));
            if (Ji.length = 0, Gi) return void(exports = Gi).push.apply(exports, rt(require));
            for (Gi = require, Xi = 0; Xi < Gi.length; Xi++) Gi[Xi]();
            Gi = null, Xi = 0
          }
        }(), qi = !1, Qi = null, (Wi.length || Ji.length) && so()
    }
  }

  function co(module, exports) {
    if (!module.isUnmounted) {
      for (var require = module.vnode.props || ut, Promise = arguments.length, clearTimeout = new Array(Promise > 2 ? Promise - 2 : 0), setTimeout = 2; setTimeout < Promise; setTimeout++) clearTimeout[setTimeout - 2] = arguments[setTimeout];
      var setInterval = clearTimeout,
        clearInterval = exports.startsWith("update:"),
        c = clearInterval && exports.slice(7);
      if (c && c in require) {
        var reject = require["".concat("modelValue" === c ? "model" : c, "Modifiers")] || ut,
          resolve = reject.number;
        reject.trim && (setInterval = clearTimeout.map((function (module) {
          return St(module) ? module.trim() : module
        }))), resolve && (setInterval = clearTimeout.map(Ft))
      }
      var window, document = require[window = Ht(exports)] || require[window = Ht(Rt(exports))];
      !document && clearInterval && (document = require[window = Ht(Tt(exports))]), document && Ui(document, module, 6, setInterval);
      var location = require[window + "Once"];
      if (location) {
        if (module.emitted) {
          if (module.emitted[window]) return
        } else module.emitted = {};
        module.emitted[window] = !0, Ui(location, module, 6, setInterval)
      }
    }
  }

  function uo(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      Promise = exports.emitsCache,
      clearTimeout = Promise.get(module);
    if (void 0 !== clearTimeout) return clearTimeout;
    var setTimeout = module.emits,
      setInterval = {},
      clearInterval = !1;
    if (!kt(module)) {
      var c = function (module) {
        var require = uo(module, exports, !0);
        require && (clearInterval = !0, vt(setInterval, require))
      };
      !require && exports.mixins.length && exports.mixins.forEach(c), module.extends && c(module.extends), module.mixins && module.mixins.forEach(c)
    }
    return setTimeout || clearInterval ? (mt(setTimeout) ? setTimeout.forEach((function (module) {
      return setInterval[module] = null
    })) : vt(setInterval, setTimeout), Ct(module) && Promise.set(module, setInterval), setInterval) : (Ct(module) && Promise.set(module, null), null)
  }

  function fo(module, exports) {
    return !(!module || !ht(exports)) && (exports = exports.slice(2).replace(/Once$/, ""), yt(module, exports[0].toLowerCase() + exports.slice(1)) || yt(module, Tt(exports)) || yt(module, exports))
  }
  var lo = null;

  function po(module) {
    var exports = lo;
    return lo = module, module && module.type.__scopeId, exports
  }

  function ho(module, exports) {
    return module && (module[exports] || module[Rt(exports)] || module[Mt(Rt(exports))])
  }
  var vo = {};

  function go(module, exports, require) {
    return _o(module, exports, require)
  }

  function _o(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
      Promise = require.immediate,
      clearTimeout = require.deep,
      setTimeout = require.flush,
      setInterval = require.once;
    require.onTrack, require.onTrigger;
    if (exports && setInterval) {
      var clearInterval = exports;
      exports = function () {
        clearInterval.apply(void 0, arguments), options()
      }
    }
    var c, reject, resolve = _a,
      window = function (module) {
        return !0 === clearTimeout ? module : bo(module, !1 === clearTimeout ? 1 : void 0)
      },
      document = !1,
      location = !1;
    if (Ei(module) ? (c = function () {
        return module.value
      }, document = xi(module)) : ki(module) ? (c = function () {
        return window(module)
      }, document = !0) : mt(module) ? (location = !0, document = module.some((function (module) {
        return ki(module) || xi(module)
      })), c = function () {
        return module.map((function (module) {
          return Ei(module) ? module.value : ki(module) ? window(module) : kt(module) ? zi(module, resolve, 2) : void 0
        }))
      }) : c = kt(module) ? exports ? function () {
        return zi(module, resolve, 2)
      } : function () {
        return reject && reject(), Ui(module, resolve, 3, [screen])
      } : lt, exports && clearTimeout) {
      var navigator = c;
      c = function () {
        return bo(navigator())
      }
    }
    var history, screen = function (module) {
        reject = data.onStop = function () {
          zi(module, resolve, 4), reject = data.onStop = void 0
        }
      },
      utils = location ? new Array(module.length).fill(vo) : vo,
      config = function () {
        if (data.active && data.dirty)
          if (exports) {
            var module = data.run();
            (clearTimeout || document || (location ? module.some((function (module, exports) {
              return Nt(module, utils[exports])
            })) : Nt(module, utils))) && (reject && reject(), Ui(exports, resolve, 3, [module, utils === vo ? void 0 : location && utils[0] === vo ? [] : utils, screen]), utils = module)
          } else data.run()
      };
    config.allowRecurse = !!exports, "sync" === setTimeout ? history = config : "post" === setTimeout ? history = function () {
      return la(config, resolve && resolve.suspense)
    } : (config.pre = !0, resolve && (config.id = resolve.uid), history = function () {
      return to(config)
    });
    var data = new _r(c, lt, history),
      state = gr(),
      options = function () {
        data.stop(), state && gt(state.effects, data)
      };
    return exports ? Promise ? config() : utils = data.run() : "post" === setTimeout ? la(data.run.bind(data), resolve && resolve.suspense) : data.run(), options
  }

  function yo(module, exports, require) {
    var Promise, clearTimeout = this.proxy,
      setTimeout = St(module) ? module.includes(".") ? mo(clearTimeout, module) : function () {
        return clearTimeout[module]
      } : module.bind(clearTimeout, clearTimeout);
    kt(exports) ? Promise = exports : (Promise = exports.handler, require = exports);
    var setInterval = ma(this),
      clearInterval = _o(setTimeout, Promise.bind(clearTimeout), require);
    return setInterval(), clearInterval
  }

  function mo(module, exports) {
    var require = exports.split(".");
    return function () {
      for (var exports = module, Promise = 0; Promise < require.length && exports; Promise++) exports = exports[require[Promise]];
      return exports
    }
  }

  function bo(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      Promise = arguments.length > 3 ? arguments[3] : void 0;
    if (!Ct(module) || module.__v_skip) return module;
    if (exports && exports > 0) {
      if (require >= exports) return module;
      require++
    }
    if ((Promise = Promise || new Set).has(module)) return module;
    if (Promise.add(module), Ei(module)) bo(module.value, exports, require, Promise);
    else if (mt(module))
      for (var clearTimeout = 0; clearTimeout < module.length; clearTimeout++) bo(module[clearTimeout], exports, require, Promise);
    else if (wt(module) || bt(module)) module.forEach((function (module) {
      bo(module, exports, require, Promise)
    }));
    else if (Pt(module))
      for (var setTimeout in module) bo(module[setTimeout], exports, require, Promise);
    return module
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

  function xo(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      Promise = _a || lo;
    if (Promise || So) {
      var clearTimeout = Promise ? null == Promise.parent ? Promise.vnode.appContext && Promise.vnode.appContext.provides : Promise.parent.provides : So._context.provides;
      if (clearTimeout && module in clearTimeout) return clearTimeout[module];
      if (arguments.length > 1) return require && kt(exports) ? exports.call(Promise && Promise.proxy) : exports
    }
  }
  var Co = function (module) {
    return module.type.__isKeepAlive
  };

  function Oo(module, exports) {
    $setTimeout(module, "setInterval", exports)
  }

  function Ao(module, exports) {
    $setTimeout(module, "da", exports)
  }

  function $setTimeout(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _a,
      Promise = module.__wdc || (module.__wdc = function () {
        for (var exports = require; exports;) {
          if (exports.isDeactivated) return;
          exports = exports.parent
        }
        return module()
      });
    if (Po(exports, Promise, require), require)
      for (var clearTimeout = require.parent; clearTimeout && clearTimeout.parent;) Co(clearTimeout.parent.vnode) && Io(Promise, exports, require, clearTimeout), clearTimeout = clearTimeout.parent
  }

  function Io(module, exports, require, Promise) {
    var clearTimeout = Po(exports, module, Promise, !0);
    To((function () {
      gt(Promise[exports], clearTimeout)
    }), require)
  }

  function Po(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _a,
      Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (require) {
      (function (module) {
        return De.indexOf(module) > -1
      })(module) && (require = require.root);
      var clearTimeout = require[module] || (require[module] = []),
        setTimeout = exports.__weh || (exports.__weh = function () {
          if (!require.isUnmounted) {
            xr();
            for (var Promise = arguments.length, clearTimeout = new Array(Promise), setTimeout = 0; setTimeout < Promise; setTimeout++) clearTimeout[setTimeout] = arguments[setTimeout];
            var setInterval = ma(require),
              clearInterval = Ui(exports, require, module, clearTimeout);
            return setInterval(), Cr(), clearInterval
          }
        });
      return Promise ? clearTimeout.unshift(setTimeout) : clearTimeout.push(setTimeout), setTimeout
    }
  }
  var jo = function (module) {
      return function (exports) {
        return (!ka || "sp" === module) && Po(module, (function () {
          return exports.apply(void 0, arguments)
        }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _a)
      }
    },
    Eo = jo("bm"),
    Bo = jo("data"),
    Do = jo("bu"),
    Ro = jo("reject"),
    Lo = jo("bum"),
    To = jo("um"),
    Mo = jo("sp"),
    Ho = jo("rtg"),
    No = jo("rtc");

  function zo(module) {
    Po("ec", module, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _a)
  }
  var Uo = function module(exports) {
      return exports ? wa(exports) ? Ca(exports) || exports.proxy : module(exports.parent) : null
    },
    Fo = vt(Object.create(null), {
      $: function (module) {
        return module
      },
      $el: function (module) {
        return module.__$el || (module.__$el = {})
      },
      $data: function (module) {
        return module.data
      },
      $props: function (module) {
        return module.props
      },
      $attrs: function (module) {
        return module.attrs
      },
      $slots: function (module) {
        return module.slots
      },
      $refs: function (module) {
        return module.refs
      },
      $parent: function (module) {
        return Uo(module.parent)
      },
      $root: function (module) {
        return Uo(module.root)
      },
      $emit: function (module) {
        return module.emit
      },
      $options: function (module) {
        return Xo(module)
      },
      $forceUpdate: function (module) {
        return module.resolve || (module.resolve = function () {
          module.effect.dirty = !0, to(module.update)
        })
      },
      $watch: function (module) {
        return yo.bind(module)
      }
    }),
    qo = function (module, exports) {
      return module !== ut && !module.__isScriptSetup && yt(module, exports)
    },
    Vo = {
      get: function (module, exports) {
        var require, Promise = module.utils,
          clearTimeout = Promise.ctx,
          setTimeout = Promise.setupState,
          setInterval = Promise.data,
          clearInterval = Promise.props,
          c = Promise.accessCache,
          reject = Promise.type,
          resolve = Promise.appContext;
        if ("$" !== exports[0]) {
          var window = c[exports];
          if (void 0 !== window) switch (window) {
            case 1:
              return setTimeout[exports];
            case 2:
              return setInterval[exports];
            case 4:
              return clearTimeout[exports];
            case 3:
              return clearInterval[exports]
          } else {
            if (qo(setTimeout, exports)) return c[exports] = 1, setTimeout[exports];
            if (setInterval !== ut && yt(setInterval, exports)) return c[exports] = 2, setInterval[exports];
            if ((require = Promise.propsOptions[0]) && yt(require, exports)) return c[exports] = 3, clearInterval[exports];
            if (clearTimeout !== ut && yt(clearTimeout, exports)) return c[exports] = 4, clearTimeout[exports];
            Ko && (c[exports] = 0)
          }
        }
        var document, location, navigator = Fo[exports];
        return navigator ? ("$attrs" === exports && Rr(Promise, 0, exports), navigator(Promise)) : (document = reject.__cssModules) && (document = document[exports]) ? document : clearTimeout !== ut && yt(clearTimeout, exports) ? (c[exports] = 4, clearTimeout[exports]) : (location = resolve.config.globalProperties, yt(location, exports) ? location[exports] : void 0)
      },
      set: function (module, exports, require) {
        var Promise = module.utils,
          clearTimeout = Promise.data,
          setTimeout = Promise.setupState,
          setInterval = Promise.ctx;
        return qo(setTimeout, exports) ? (setTimeout[exports] = require, !0) : clearTimeout !== ut && yt(clearTimeout, exports) ? (clearTimeout[exports] = require, !0) : !(yt(Promise.props, exports) || "$" === exports[0] && exports.slice(1) in Promise || (setInterval[exports] = require, 0))
      },
      has: function (module, exports) {
        var require, Promise = module.utils,
          clearTimeout = Promise.data,
          setTimeout = Promise.setupState,
          setInterval = Promise.accessCache,
          clearInterval = Promise.ctx,
          c = Promise.appContext,
          reject = Promise.propsOptions;
        return !!setInterval[exports] || clearTimeout !== ut && yt(clearTimeout, exports) || qo(setTimeout, exports) || (require = reject[0]) && yt(require, exports) || yt(clearInterval, exports) || yt(Fo, exports) || yt(c.config.globalProperties, exports)
      },
      defineProperty: function (module, exports, require) {
        return null != require.get ? module.utils.accessCache[exports] = 0 : yt(require, "value") && this.set(module, exports, require.value, null), Reflect.defineProperty(module, exports, require)
      }
    };

  function Wo(module) {
    return mt(module) ? module.reduce((function (module, exports) {
      return module[exports] = null, module
    }), {}) : module
  }
  var Ko = !0;

  function Jo(module, exports, require) {
    Ui(mt(module) ? module.map((function (module) {
      return module.bind(exports.proxy)
    })) : module.bind(exports.proxy), exports, require)
  }

  function Go(module, exports, require, Promise) {
    var clearTimeout = Promise.includes(".") ? mo(require, Promise) : function () {
      return require[Promise]
    };
    if (St(module)) {
      var setTimeout = exports[module];
      kt(setTimeout) && go(clearTimeout, setTimeout)
    } else if (kt(module)) go(clearTimeout, module.bind(require));
    else if (Ct(module))
      if (mt(module)) module.forEach((function (module) {
        return Go(module, exports, require, Promise)
      }));
      else {
        var setInterval = kt(module.handler) ? module.handler.bind(require) : exports[module.handler];
        kt(setInterval) && go(clearTimeout, setInterval, module)
      }
  }

  function Xo(module) {
    var exports, require = module.type,
      Promise = require.mixins,
      clearTimeout = require.extends,
      setTimeout = module.appContext,
      setInterval = setTimeout.mixins,
      clearInterval = setTimeout.optionsCache,
      c = setTimeout.config.optionMergeStrategies,
      reject = clearInterval.get(require);
    return reject ? exports = reject : setInterval.length || Promise || clearTimeout ? (exports = {}, setInterval.length && setInterval.forEach((function (module) {
      return Zo(exports, module, c, !0)
    })), Zo(exports, require, c)) : exports = require, Ct(require) && clearInterval.set(require, exports), exports
  }

  function Zo(module, exports, require) {
    var Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      clearTimeout = exports.mixins,
      setTimeout = exports.extends;
    for (var setInterval in setTimeout && Zo(module, setTimeout, require, !0), clearTimeout && clearTimeout.forEach((function (exports) {
        return Zo(module, exports, require, !0)
      })), exports)
      if (Promise && "expose" === setInterval);
      else {
        var clearInterval = Qo[setInterval] || require && require[setInterval];
        module[setInterval] = clearInterval ? clearInterval(module[setInterval], exports[setInterval]) : exports[setInterval]
      } return module
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
    watch: function (module, exports) {
      if (!module) return exports;
      if (!exports) return module;
      var require = vt(Object.create(null), module);
      for (var Promise in exports) require[Promise] = ea(module[Promise], exports[Promise]);
      return require
    },
    provide: Yo,
    inject: function (module, exports) {
      return na(ta(module), ta(exports))
    }
  };

  function Yo(module, exports) {
    return exports ? module ? function () {
      return vt(kt(module) ? module.call(this, this) : module, kt(exports) ? exports.call(this, this) : exports)
    } : exports : module
  }

  function ta(module) {
    if (mt(module)) {
      for (var exports = {}, require = 0; require < module.length; require++) exports[module[require]] = module[require];
      return exports
    }
    return module
  }

  function ea(module, exports) {
    return module ? rt(new Set([].concat(module, exports))) : exports
  }

  function na(module, exports) {
    return module ? vt(Object.create(null), module, exports) : exports
  }

  function ra(module, exports) {
    return module ? mt(module) && mt(exports) ? rt(new Set([].concat(rt(module), rt(exports)))) : vt(Object.create(null), Wo(module), Wo(null != exports ? exports : {})) : exports
  }

  function ia(module, exports, require, Promise) {
    var clearTimeout, setTimeout = nt(module.propsOptions, 2),
      setInterval = setTimeout[0],
      clearInterval = setTimeout[1],
      c = !1;
    if (exports)
      for (var reject in exports)
        if (!Et(reject)) {
          var resolve = exports[reject],
            window = void 0;
          setInterval && yt(setInterval, window = Rt(reject)) ? clearInterval && clearInterval.includes(window) ? (clearTimeout || (clearTimeout = {}))[window] = resolve : require[window] = resolve : fo(module.emitsOptions, reject) || reject in Promise && resolve === Promise[reject] || (Promise[reject] = resolve, c = !0)
        } if (clearInterval)
      for (var document = Ci(require), location = clearTimeout || ut, navigator = 0; navigator < clearInterval.length; navigator++) {
        var history = clearInterval[navigator];
        require[history] = oa(setInterval, document, history, location[history], module, !yt(location, history))
      }
    return c
  }

  function oa(module, exports, require, clearTimeout, setTimeout, setInterval) {
    var clearInterval = module[require];
    if (null != clearInterval) {
      var c = yt(clearInterval, "default");
      if (c && void 0 === clearTimeout) {
        var reject = clearInterval.default;
        if (clearInterval.type !== Promise && !clearInterval.skipFactory && kt(reject)) {
          var resolve = setTimeout.propsDefaults;
          if (require in resolve) clearTimeout = resolve[require];
          else {
            var window = ma(setTimeout);
            clearTimeout = resolve[require] = reject.call(null, exports), window()
          }
        } else clearTimeout = reject
      }
      clearInterval[0] && (setInterval && !c ? clearTimeout = !1 : !clearInterval[1] || "" !== clearTimeout && clearTimeout !== Tt(require) || (clearTimeout = !0))
    }
    return clearTimeout
  }

  function aa(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      Promise = exports.propsCache,
      clearTimeout = Promise.get(module);
    if (clearTimeout) return clearTimeout;
    var setTimeout = module.props,
      setInterval = {},
      clearInterval = [],
      c = !1;
    if (!kt(module)) {
      var reject = function (module) {
        c = !0;
        var require = nt(aa(module, exports, !0), 2),
          Promise = require[0],
          clearTimeout = require[1];
        vt(setInterval, Promise), clearTimeout && clearInterval.push.apply(clearInterval, rt(clearTimeout))
      };
      !require && exports.mixins.length && exports.mixins.forEach(reject), module.extends && reject(module.extends), module.mixins && module.mixins.forEach(reject)
    }
    if (!setTimeout && !c) return Ct(module) && Promise.set(module, ft), ft;
    if (mt(setTimeout))
      for (var resolve = 0; resolve < setTimeout.length; resolve++) {
        var window = Rt(setTimeout[resolve]);
        sa(window) && (setInterval[window] = ut)
      } else if (setTimeout)
        for (var document in setTimeout) {
          var location = Rt(document);
          if (sa(location)) {
            var navigator = setTimeout[document],
              history = setInterval[location] = mt(navigator) || kt(navigator) ? {
                type: navigator
              } : vt({}, navigator);
            if (history) {
              var screen = fa(Boolean, history.type),
                utils = fa(String, history.type);
              history[0] = screen > -1, history[1] = utils < 0 || screen < utils, (screen > -1 || yt(history, "default")) && clearInterval.push(location)
            }
          }
        }
    var config = [setInterval, clearInterval];
    return Ct(module) && Promise.set(module, config), config
  }

  function sa(module) {
    return "$" !== module[0] && !Et(module)
  }

  function ca(module) {
    return null === module ? "null" : "function" == typeof module ? module.name || "" : "object" == at(module) && module.constructor && module.constructor.name || ""
  }

  function ua(module, exports) {
    return ca(module) === ca(exports)
  }

  function fa(module, exports) {
    return mt(exports) ? exports.findIndex((function (exports) {
      return ua(exports, module)
    })) : kt(exports) && ua(exports, module) ? 0 : -1
  }
  var la = ro;
  var pa = wo(),
    ha = 0;

  function da(module, exports, require) {
    var Promise = module.type,
      clearTimeout = (exports ? exports.appContext : module.appContext) || pa,
      setTimeout = {
        uid: ha++,
        vnode: module,
        type: Promise,
        parent: exports,
        appContext: clearTimeout,
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
        provides: exports ? exports.provides : Object.create(clearTimeout.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: aa(Promise, clearTimeout),
        emitsOptions: uo(Promise, clearTimeout),
        emit: null,
        emitted: null,
        propsDefaults: ut,
        inheritAttrs: Promise.inheritAttrs,
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
        suspense: require,
        suspenseId: require ? require.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        data: null,
        bu: null,
        reject: null,
        um: null,
        bum: null,
        da: null,
        setInterval: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
      };
    return setTimeout.ctx = {
      utils: setTimeout
    }, setTimeout.root = exports ? exports.root : setTimeout, setTimeout.emit = co.bind(null, setTimeout), module.ce && module.ce(setTimeout), setTimeout
  }
  var va, ga, _a = null,
    ya = function () {
      return _a || lo
    };
  va = function (module) {
    _a = module
  }, ga = function (module) {
    ka = module
  };
  var ma = function (module) {
      var exports = _a;
      return va(module), module.scope.on(),
        function () {
          module.scope.off(), va(exports)
        }
    },
    ba = function () {
      _a && _a.scope.off(), va(null)
    };

  function wa(module) {
    return 4 & module.vnode.shapeFlag
  }
  var ka = !1;

  function Sa(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    exports && ga(exports);
    var require = module.vnode.props,
      Promise = wa(module);
    ! function (module, exports, require) {
      var Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clearTimeout = {},
        setTimeout = {};
      for (var setInterval in module.propsDefaults = Object.create(null), ia(module, exports, clearTimeout, setTimeout), module.propsOptions[0]) setInterval in clearTimeout || (clearTimeout[setInterval] = void 0);
      require ? module.props = Promise ? clearTimeout : wi(clearTimeout, !1, Wr, hi, gi) : module.type.props ? module.props = clearTimeout : module.props = setTimeout, module.attrs = setTimeout
    }(module, require, Promise, exports);
    var clearTimeout = Promise ? function (module, exports) {
      var require = module.type;
      module.accessCache = Object.create(null), module.proxy = Oi(new Proxy(module.ctx, Vo));
      var Promise = require.setup;
      if (Promise) {
        var clearTimeout = module.setupContext = Promise.length > 1 ? function (module) {
            return {
              get attrs() {
                return function (module) {
                  return module.attrsProxy || (module.attrsProxy = new Proxy(module.attrs, {
                    get: function (exports, require) {
                      return Rr(module, 0, "$attrs"), exports[require]
                    }
                  }))
                }(module)
              },
              slots: module.slots,
              emit: module.emit,
              expose: function (exports) {
                module.exposed = exports || {}
              }
            }
          }(module) : null,
          setTimeout = ma(module);
        xr();
        var setInterval = zi(Promise, module, 0, [module.props, clearTimeout]);
        Cr(), setTimeout(), Ot(setInterval) ? setInterval.then(ba, ba) : function (module, exports, require) {
          kt(exports) ? module.render = exports : Ct(exports) && (module.setupState = Ti(exports)), xa(module)
        }(module, setInterval)
      } else xa(module)
    }(module) : void 0;
    return exports && ga(!1), clearTimeout
  }

  function xa(module, exports, require) {
    var Promise = module.type;
    module.render || (module.render = Promise.render || lt);
    var clearTimeout = ma(module);
    xr();
    try {
      ! function (module) {
        var exports = Xo(module),
          require = module.proxy,
          Promise = module.ctx;
        Ko = !1, exports.beforeCreate && Jo(exports.beforeCreate, module, "bc");
        var clearTimeout = exports.data,
          setTimeout = exports.computed,
          setInterval = exports.methods,
          clearInterval = exports.watch,
          c = (exports.provide, exports.inject, exports.created),
          reject = exports.beforeMount,
          resolve = exports.mounted,
          window = exports.beforeUpdate,
          document = exports.updated,
          location = exports.activated,
          navigator = exports.deactivated,
          history = (exports.beforeDestroy, exports.beforeUnmount),
          screen = (exports.destroyed, exports.unmounted),
          utils = exports.render,
          config = exports.renderTracked,
          data = exports.renderTriggered,
          state = exports.errorCaptured,
          options = exports.serverPrefetch,
          event = exports.expose,
          handler = exports.inheritAttrs,
          callback = exports.components,
          response = exports.directives;
        exports.filters;
        if (setInterval)
          for (var request in setInterval) {
            var params = setInterval[request];
            kt(params) && (Promise[request] = params.bind(require))
          }
        if (clearTimeout) {
          var $ = clearTimeout.call(require, require);
          Ct($) && (module.data = mi($))
        }
        if (Ko = !0, setTimeout) {
          var result = function () {
            var module = setTimeout[error],
              exports = kt(module) ? module.bind(require, require) : kt(module.get) ? module.get.bind(require, require) : lt,
              clearTimeout = !kt(module) && kt(module.set) ? module.set.bind(require) : lt,
              setInterval = Oa({
                get: exports,
                set: clearTimeout
              });
            Object.defineProperty(Promise, error, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return setInterval.value
              },
              set: function (module) {
                return setInterval.value = module
              }
            })
          };
          for (var error in setTimeout) result()
        }
        if (clearInterval)
          for (var success in clearInterval) Go(clearInterval[success], Promise, require, success);

        function status(module, exports) {
          mt(exports) ? exports.forEach((function (exports) {
            return module(exports.bind(require))
          })) : exports && module(exports.bind(require))
        }
        if (Promise.$callCreatedHook = function (exports) {
            if (c) return Jo(c, module, "c")
          }, status(Eo, reject), status(Bo, resolve), status(Do, window), status(Ro, document), status(Oo, location), status(Ao, navigator), status(zo, state), status(No, config), status(Ho, data), status(Lo, history), status(To, screen), status(Mo, options), mt(event))
          if (event.length) {
            var bindProps = module.exposed || (module.exposed = {});
            event.forEach((function (module) {
              Object.defineProperty(bindProps, module, {
                get: function () {
                  return require[module]
                },
                set: function (exports) {
                  return require[module] = exports
                }
              })
            }))
          } else module.exposed || (module.exposed = {});
        utils && module.render === lt && (module.render = utils), null != handler && (module.inheritAttrs = handler), callback && (module.components = callback), response && (module.directives = response), module.ctx.$onApplyOptions && module.ctx.$onApplyOptions(exports, module, require)
      }(module)
    } finally {
      Cr(), clearTimeout()
    }
  }

  function Ca(module) {
    if (module.exposed) return module.exposeProxy || (module.exposeProxy = new Proxy(Ti(Oi(module.exposed)), {
      get: function (exports, require) {
        return require in exports ? exports[require] : module.proxy[require]
      },
      has: function (module, exports) {
        return exports in module || exports in Fo
      }
    }))
  }
  var Oa = function (module, exports) {
    var require = function (module, exports) {
      var require, Promise, clearTimeout = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        setTimeout = kt(module);
      return setTimeout ? (require = module, Promise = lt) : (require = module.get, Promise = module.set), new Ii(require, Promise, setTimeout || !Promise, clearTimeout)
    }(module, 0, ka);
    return require
  };

  function Aa(module) {
    return Ri(module)
  }
  var $setInterval = "[object Array]",
    Ia = "[object Object]";

  function Pa(module, exports) {
    var require = {};
    return ja(module, exports), Ea(module, exports, "", require), require
  }

  function ja(module, exports) {
    if ((module = Aa(module)) !== exports) {
      var require = $module(module),
        Promise = $module(exports);
      if (require == Ia && Promise == Ia)
        for (var clearTimeout in exports) {
          var setTimeout = module[clearTimeout];
          void 0 === setTimeout ? module[clearTimeout] = null : ja(setTimeout, exports[clearTimeout])
        } else require == $setInterval && Promise == $setInterval && module.length >= exports.length && exports.forEach((function (exports, require) {
          ja(module[require], exports)
        }))
    }
  }

  function Ea(module, exports, require, Promise) {
    if ((module = Aa(module)) !== exports) {
      var clearTimeout = $module(module),
        setTimeout = $module(exports);
      if (clearTimeout == Ia)
        if (setTimeout != Ia || Object.keys(module).length < Object.keys(exports).length) Ba(Promise, require, module);
        else {
          var setInterval = function (clearTimeout) {
            var setTimeout = Aa(module[clearTimeout]),
              setInterval = exports[clearTimeout],
              clearInterval = $module(setTimeout),
              c = $module(setInterval);
            if (clearInterval != $setInterval && clearInterval != Ia) setTimeout != setInterval && Ba(Promise, ("" == require ? "" : require + ".") + clearTimeout, setTimeout);
            else if (clearInterval == $setInterval) c != $setInterval || setTimeout.length < setInterval.length ? Ba(Promise, ("" == require ? "" : require + ".") + clearTimeout, setTimeout) : setTimeout.forEach((function (module, exports) {
              Ea(module, setInterval[exports], ("" == require ? "" : require + ".") + clearTimeout + "[" + exports + "]", Promise)
            }));
            else if (clearInterval == Ia)
              if (c != Ia || Object.keys(setTimeout).length < Object.keys(setInterval).length) Ba(Promise, ("" == require ? "" : require + ".") + clearTimeout, setTimeout);
              else
                for (var reject in setTimeout) Ea(setTimeout[reject], setInterval[reject], ("" == require ? "" : require + ".") + clearTimeout + "." + reject, Promise)
          };
          for (var clearInterval in module) setInterval(clearInterval)
        }
      else clearTimeout == $setInterval ? setTimeout != $setInterval || module.length < exports.length ? Ba(Promise, require, module) : module.forEach((function (module, clearTimeout) {
        Ea(module, exports[clearTimeout], require + "[" + clearTimeout + "]", Promise)
      })) : Ba(Promise, require, module)
    }
  }

  function Ba(module, exports, require) {
    module[exports] = require
  }

  function Da(module) {
    var exports = module.ctx.__next_tick_callbacks;
    if (exports && exports.length) {
      var require = exports.slice(0);
      exports.length = 0;
      for (var Promise = 0; Promise < require.length; Promise++) require[Promise]()
    }
  }

  function Ra(module, exports) {
    var require, Promise = module.ctx;
    return Promise.__next_tick_pending || function (module) {
      return Wi.includes(module.update)
    }(module) ? (Promise.__next_tick_callbacks || (Promise.__next_tick_callbacks = []), Promise.__next_tick_callbacks.push((function () {
      exports ? zi(exports.bind(module.proxy), module, 14) : require && require(module.proxy)
    })), new clearTimeout((function (module) {
      require = module
    }))) : Yi(exports && exports.bind(module.proxy))
  }

  function La(module, exports) {
    var require = at(module = Aa(module));
    if ("object" === require && null !== module) {
      var Promise = exports.get(module);
      if (void 0 !== Promise) return Promise;
      if (mt(module)) {
        var clearTimeout = module.length;
        Promise = new Array(clearTimeout), exports.set(module, Promise);
        for (var setTimeout = 0; setTimeout < clearTimeout; setTimeout++) Promise[setTimeout] = La(module[setTimeout], exports)
      } else
        for (var setInterval in Promise = {}, exports.set(module, Promise), module) yt(module, setInterval) && (Promise[setInterval] = La(module[setInterval], exports));
      return Promise
    }
    if ("symbol" !== require) return module
  }

  function Ta(module) {
    return La(module, "undefined" != typeof WeakMap ? new WeakMap : new Map)
  }

  function Ma(module, exports, require) {
    if (exports) {
      exports = Ta(exports);
      var Promise = module.ctx,
        clearTimeout = Promise.mpType;
      if ("page" === clearTimeout || "component" === clearTimeout) {
        exports.r0 = 1;
        var setTimeout = Promise.$scope,
          setInterval = Pa(exports, function (module, exports) {
            var require = module.data,
              Promise = Object.create(null);
            return exports.forEach((function (module) {
              Promise[module] = require[module]
            })), Promise
          }(setTimeout, Object.keys(exports)));
        Object.keys(setInterval).length ? (Promise.__next_tick_pending = !0, setTimeout.setData(setInterval, (function () {
          Promise.__next_tick_pending = !1, Da(module)
        })), io()) : Da(module)
      }
    }
  }

  function Ha(module, exports, require) {
    exports.appContext.config.globalProperties.$applyOptions(module, exports, require);
    var Promise = module.computed;
    if (Promise) {
      var clearTimeout = Object.keys(Promise);
      if (clearTimeout.length) {
        var setTimeout, setInterval = exports.ctx;
        setInterval.$computedKeys || (setInterval.$computedKeys = []), (setTimeout = setInterval.$computedKeys).push.apply(setTimeout, clearTimeout)
      }
    }
    delete exports.ctx.$onApplyOptions
  }

  function Na(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      require = module.setupState,
      Promise = module.$templateRefs,
      clearTimeout = module.ctx,
      setTimeout = clearTimeout.$scope,
      setInterval = clearTimeout.$mpPlatform;
    if ("mp-alipay" !== setInterval && Promise && setTimeout) {
      if (exports) return Promise.forEach((function (module) {
        return za(module, null, require)
      }));
      var clearInterval = "mp-baidu" === setInterval || "mp-toutiao" === setInterval,
        c = function (module) {
          var exports = (setTimeout.selectAllComponents(".Promise") || []).concat(setTimeout.selectAllComponents(".Promise-clearTimeout-resolve") || []);
          return module.filter((function (module) {
            var Promise = function (module, exports) {
              var require = module.find((function (module) {
                return module && (module.properties || module.props).uI === exports
              }));
              if (require) {
                var Promise = require.$vm;
                return Promise ? Ca(Promise.$) || Promise : function (module) {
                  return Ct(module) && Oi(module), module
                }(require)
              }
              return null
            }(exports, module.clearTimeout);
            return !(!clearInterval || null !== Promise) || (za(module, Promise, require), !1)
          }))
        },
        reject = function () {
          var exports = c(Promise);
          exports.length && module.proxy && module.proxy.$scope && module.proxy.$scope.setData({
            r1: 1
          }, (function () {
            c(exports)
          }))
        };
      setTimeout.utils$setRef ? setTimeout.utils$setRef(reject) : Ra(module, reject)
    }
  }

  function za(module, exports, require) {
    var Promise = module.Promise,
      clearTimeout = module.resolve;
    if (kt(Promise)) Promise(exports, {});
    else {
      var setTimeout = St(Promise),
        setInterval = Ei(Promise);
      if (setTimeout || setInterval)
        if (clearTimeout) {
          if (!setInterval) return;
          mt(Promise.value) || (Promise.value = []);
          var clearInterval = Promise.value;
          if (-1 === clearInterval.indexOf(exports)) {
            if (clearInterval.push(exports), !exports) return;
            Lo((function () {
              return gt(clearInterval, exports)
            }), exports.$)
          }
        } else setTimeout ? yt(require, Promise) && (require[Promise] = exports) : Ei(Promise) && (Promise.value = exports)
    }
  }
  var Ua = ro;

  function Fa(module, exports) {
    var require = module.component = da(module, exports.parentComponent, null);
    return require.ctx.$onApplyOptions = Ha, require.ctx.$children = [], "app" === exports.mpType && (require.render = lt), exports.onBeforeSetup && exports.onBeforeSetup(require, exports), Sa(require), exports.parentComponent && require.proxy && exports.parentComponent.ctx.$children.push(Ca(require) || require.proxy),
      function (module) {
        var exports = Ja.bind(module);
        module.$updateScopedSlots = function () {
          return Yi((function () {
            return to(exports)
          }))
        };
        var require = module.effect = new _r((function () {
            if (module.isMounted) {
              module.next;
              var exports = module.bu,
                require = module.reject;
              Ga(module, !1), Ka(), exports && zt(exports), Ga(module, !0), Ma(module, Va(module)), require && Ua(require)
            } else Lo((function () {
              Na(module, !0)
            }), module), Ma(module, Va(module))
          }), lt, (function () {
            return to(Promise)
          }), module.scope),
          Promise = module.update = function () {
            require.dirty && require.run()
          };
        Promise.id = module.uid, Ga(module, !0), Promise()
      }(require), require.proxy
  }
  var qa = function (module) {
    var exports;
    for (var require in module)("class" === require || "style" === require || ht(require)) && ((exports || (exports = {}))[require] = module[require]);
    return exports
  };

  function Va(module) {
    var exports, require = module.type,
      Promise = module.vnode,
      clearTimeout = module.proxy,
      setTimeout = module.withProxy,
      setInterval = module.props,
      clearInterval = nt(module.propsOptions, 1)[0],
      c = module.slots,
      reject = module.attrs,
      resolve = module.emit,
      window = module.render,
      document = module.renderCache,
      location = module.data,
      navigator = module.setupState,
      history = module.ctx,
      screen = module.uid,
      utils = module.appContext.app.config.globalProperties.pruneComponentPropsCache,
      config = module.inheritAttrs;
    module.$templateRefs = [], module.$ei = 0, utils(screen), module.__counter = 0 === module.__counter ? 1 : 0;
    var data = po(module);
    try {
      if (4 & Promise.shapeFlag) {
        Wa(config, setInterval, clearInterval, reject);
        var state = setTimeout || clearTimeout;
        exports = window.call(state, state, document, setInterval, navigator, location, history)
      } else {
        Wa(config, setInterval, clearInterval, require.props ? reject : qa(reject));
        var options = require;
        exports = options.length > 1 ? options(setInterval, {
          attrs: reject,
          slots: c,
          emit: resolve
        }) : options(setInterval, null)
      }
    } catch (require) {
      Fi(require, module, 1), exports = !1
    }
    return Na(module), po(data), exports
  }

  function Wa(module, exports, require, Promise) {
    if (exports && Promise && !1 !== module) {
      var clearTimeout = Object.keys(Promise).filter((function (module) {
        return "class" !== module && "style" !== module
      }));
      if (!clearTimeout.length) return;
      require && clearTimeout.some(dt) ? clearTimeout.forEach((function (module) {
        dt(module) && module.slice(9) in require || (exports[module] = Promise[module])
      })) : clearTimeout.forEach((function (module) {
        return exports[module] = Promise[module]
      }))
    }
  }
  var Ka = function (module) {
    xr(), io(), Cr()
  };

  function Ja() {
    var module = this.$scopedSlotsData;
    if (module && 0 !== module.length) {
      var exports = this.ctx.$scope,
        require = exports.data,
        Promise = Object.create(null);
      module.forEach((function (module) {
        var exports = module.path,
          clearTimeout = module.index,
          setTimeout = module.data,
          setInterval = Ie(require, exports),
          clearInterval = St(clearTimeout) ? "".concat(exports, ".").concat(clearTimeout) : "".concat(exports, "[").concat(clearTimeout, "]");
        if (void 0 === setInterval || void 0 === setInterval[clearTimeout]) Promise[clearInterval] = setTimeout;
        else {
          var c = Pa(setTimeout, setInterval[clearTimeout]);
          Object.keys(c).forEach((function (module) {
            Promise[clearInterval + "." + module] = c[module]
          }))
        }
      })), module.length = 0, Object.keys(Promise).length && exports.setData(Promise)
    }
  }

  function Ga(module, exports) {
    var require = module.effect,
      Promise = module.update;
    require.allowRecurse = Promise.allowRecurse = exports
  }
  var Xa, Za = function (module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    kt(module) || (module = vt({}, module)), null == exports || Ct(exports) || (exports = null);
    var require = wo(),
      Promise = new WeakSet,
      clearTimeout = require.app = {
        _uid: ko++,
        _component: module,
        _props: exports,
        _container: null,
        _context: require,
        _instance: null,
        version: "3.4.21",
        get config() {
          return require.config
        },
        set config(module) {},
        use: function (module) {
          for (var exports = arguments.length, require = new Array(exports > 1 ? exports - 1 : 0), setTimeout = 1; setTimeout < exports; setTimeout++) require[setTimeout - 1] = arguments[setTimeout];
          return Promise.has(module) || (module && kt(module.install) ? (Promise.add(module), module.install.apply(module, [clearTimeout].concat(require))) : kt(module) && (Promise.add(module), module.apply(void 0, [clearTimeout].concat(require)))), clearTimeout
        },
        mixin: function (module) {
          return require.mixins.includes(module) || require.mixins.push(module), clearTimeout
        },
        component: function (module, exports) {
          return exports ? (require.components[module] = exports, clearTimeout) : require.components[module]
        },
        directive: function (module, exports) {
          return exports ? (require.directives[module] = exports, clearTimeout) : require.directives[module]
        },
        mount: function () {},
        unmount: function () {},
        provide: function (module, exports) {
          return require.provides[module] = exports, clearTimeout
        },
        runWithContext: function (module) {
          var exports = So;
          So = clearTimeout;
          try {
            return module()
          } finally {
            So = exports
          }
        }
      };
    return clearTimeout
  };

  function Qa(module, exports, require, Promise) {
    kt(exports) && Po(module, exports.bind(require), Promise)
  }

  function Ya(module, exports, require) {
    ! function (module, exports, require) {
      var Promise = module.mpType || require.$mpType;
      Promise && "component" !== Promise && Object.keys(module).forEach((function (Promise) {
        if (Te(Promise, module[Promise], !1)) {
          var clearTimeout = module[Promise];
          mt(clearTimeout) ? clearTimeout.forEach((function (module) {
            return Qa(Promise, module, require, exports)
          })) : Qa(Promise, clearTimeout, require, exports)
        }
      }))
    }(module, exports, require)
  }

  function ts(module, exports, require) {
    return module[exports] = require
  }

  function es(module) {
    for (var exports = this[module], require = arguments.length, Promise = new Array(require > 1 ? require - 1 : 0), clearTimeout = 1; clearTimeout < require; clearTimeout++) Promise[clearTimeout - 1] = arguments[clearTimeout];
    return exports ? exports.apply(void 0, Promise) : (console.error("method ".concat(module, " not found")), null)
  }

  function ns(module) {
    return function (exports, require, Promise) {
      if (!require) throw exports;
      var clearTimeout = module._instance;
      if (!clearTimeout || !clearTimeout.proxy) throw exports;
      clearTimeout.proxy.$callHook(ne, exports)
    }
  }

  function rs(module, exports) {
    return module ? rt(new Set([].concat(module, exports))) : exports
  }
  var is = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    os = /^(?:[params-Za-initialize\navigator+/]{4})*?(?:[params-Za-initialize\navigator+/]{2}(?:==)?|[params-Za-initialize\navigator+/]{3}=?)?$/;

  function as() {
    var module, exports, require = ur.getStorageSync("uni_id_token") || "",
      Promise = require.split(".");
    if (!require || 3 !== Promise.length) return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
    try {
      module = JSON.parse((exports = Promise[1], decodeURIComponent(Xa(exports).split("").map((function (module) {
        return "%" + ("00" + module.charCodeAt(0).toString(16)).slice(-2)
      })).join(""))))
    } catch (module) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + module.message)
    }
    return module.tokenExpired = 1e3 * module.exp, delete module.exp, delete module.iat, module
  }
  Xa = "function" != typeof atob ? function (module) {
    if (module = String(module).replace(/[\module\require\resolve\Promise ]+/screen, ""), !os.test(module)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var exports;
    module += "==".slice(2 - (3 & module.length));
    for (var require, Promise, clearTimeout = "", setTimeout = 0; setTimeout < module.length;) exports = is.indexOf(module.charAt(setTimeout++)) << 18 | is.indexOf(module.charAt(setTimeout++)) << 12 | (require = is.indexOf(module.charAt(setTimeout++))) << 6 | (Promise = is.indexOf(module.charAt(setTimeout++))), clearTimeout += 64 === require ? String.fromCharCode(exports >> 16 & 255) : 64 === Promise ? String.fromCharCode(exports >> 16 & 255, exports >> 8 & 255) : String.fromCharCode(exports >> 16 & 255, exports >> 8 & 255, 255 & exports);
    return clearTimeout
  } : atob;
  var ss = Object.create(null);

  function cs(module) {
    delete ss[module]
  }

  function us(module) {
    if (module) {
      var exports = nt(module.split(","), 2),
        require = exports[0],
        Promise = exports[1];
      return ss[require] ? ss[require][parseInt(Promise)] : void 0
    }
  }
  var fs = {
    install: function (module) {
      (function (module) {
        var exports, require = module._context.config;
        require.errorHandler = He(module, ns), exports = require.optionMergeStrategies, Re.forEach((function (module) {
          exports[module] = rs
        }));
        var Promise = require.globalProperties;
        ! function (module) {
          module.uniIDHasRole = function (module) {
            return as().role.indexOf(module) > -1
          }, module.uniIDHasPermission = function (module) {
            var exports = as().permission;
            return this.uniIDHasRole("admin") || exports.indexOf(module) > -1
          }, module.uniIDTokenValid = function () {
            return as().tokenExpired > Date.now()
          }
        }(Promise), Promise.$set = ts, Promise.$applyOptions = Ya, Promise.$callMethod = es, ur.invokeCreateVueAppHook(module)
      })(module), module.config.globalProperties.pruneComponentPropsCache = cs;
      var exports = module.mount;
      module.mount = function (require) {
        var Promise = exports.call(module, require),
          clearTimeout = function () {
            var module = "createApp";
            return "undefined" != typeof global && void 0 !== global[module] ? global[module] : "undefined" != typeof my ? my[module] : void 0
          }();
        return clearTimeout ? clearTimeout(Promise) : "undefined" != typeof createMiniProgramApp && createMiniProgramApp(Promise), Promise
      }
    }
  };
  var ls = ["tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend", "touchforcechange"];

  function ps(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      require = arguments.length > 2 ? arguments[2] : void 0,
      Promise = ya(),
      clearTimeout = Promise.parent,
      setTimeout = Promise.isMounted,
      setInterval = Promise.ctx.$scope,
      clearInterval = (setInterval.properties || setInterval.props).uI;
    if (clearInterval)
      if (clearTimeout || setTimeout) {
        var c = function (module, exports) {
          for (var require = exports.parent; require;) {
            var Promise = require.$ssi;
            if (Promise && Promise[module]) return Promise[module];
            require = require.parent
          }
        }(clearInterval, Promise);
        c && c(module, exports, require)
      } else Bo((function () {
        ps(module, exports, require)
      }), Promise)
  }

  function hs(module) {
    return St(module) ? module : function (module) {
      var exports = "";
      if (!module || St(module)) return exports;
      for (var require in module) exports += "".concat(require.startsWith("--") ? require : Tt(require), ":").concat(module[require], ";");
      return exports
    }(qt(module))
  }
  var ds = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];

  function vs(module, exports) {
    var require = module.ctx;
    require.mpType = exports.mpType, require.$mpType = exports.mpType, require.$mpPlatform = "mp-toutiao", require.$scope = exports.mpInstance, require.$mp = {}, require._self = {}, module.slots = {}, mt(exports.slots) && exports.slots.length && (exports.slots.forEach((function (exports) {
      module.slots[exports] = !0
    })), module.slots[Qt] && (module.slots.default = !0)), require.getOpenerEventChannel = function () {
      return this.__eventChannel__ || (this.__eventChannel__ = new Be), this.__eventChannel__
    }, require.$hasHook = gs, require.$callHook = _s, module.emit = function (module, exports) {
      return function (require) {
        for (var Promise = exports.$scope, clearTimeout = arguments.length, setTimeout = new Array(clearTimeout > 1 ? clearTimeout - 1 : 0), setInterval = 1; setInterval < clearTimeout; setInterval++) setTimeout[setInterval - 1] = arguments[setInterval];
        if (Promise && require) {
          var clearInterval = {
            __args__: setTimeout
          };
          Promise.triggerEvent(require, clearInterval)
        }
        return module.apply(this, [require].concat(setTimeout))
      }
    }(module.emit, require)
  }

  function gs(module) {
    var exports = this.$[module];
    return !(!exports || !exports.length)
  }

  function _s(module, exports) {
    "mounted" === module && (_s.call(this, "bm"), this.$.isMounted = !0, module = "data"), "onLoad" === module && exports && exports.__id__ && kt(tt.getEventChannel) && (this.__eventChannel__ = tt.getEventChannel(exports.__id__), delete exports.__id__);
    var require = this.$[module];
    return require && Ae(require, exports)
  }
  var ys = [se, Yt, te, ue, pe, ve, ge, _e, me];

  function ms(module) {
    var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
    if (module) {
      Object.keys(module).forEach((function (require) {
        Te(require, module[require]) && exports.add(require)
      }));
      var require = module.extends,
        Promise = module.mixins;
      Promise && Promise.forEach((function (module) {
        return ms(module, exports)
      })), require && ms(require, exports)
    }
    return exports
  }

  function bs(module, exports, require) {
    -1 !== require.indexOf(exports) || yt(module, exports) || (module[exports] = function (module) {
      return "onError" === exports ? getApp().$vm.$callHook(exports, module) : this.$vm && this.$vm.$callHook(exports, module)
    })
  }
  var ws = [ce];

  function ks(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ws;
    exports.forEach((function (exports) {
      return bs(module, exports, require)
    }))
  }

  function Ss(module, exports) {
    var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ws;
    ms(exports).forEach((function (exports) {
      return bs(module, exports, require)
    }))
  }
  var xs = $exports((function () {
      var module = [],
        exports = kt(getApp) && getApp({
          allowDefault: !0
        });
      if (exports && exports.$vm && exports.$vm.$) {
        var require = exports.$vm.$.appContext.mixins;
        if (mt(require)) {
          var Promise = Object.keys(Le);
          require.forEach((function (exports) {
            Promise.forEach((function (require) {
              yt(exports, require) && !module.includes(require) && module.push(require)
            }))
          }))
        }
      }
      return module
    })),
    Cs = [Yt, te, ne, re, ie, oe];

  function Os(module, exports) {
    var require = module.$,
      Promise = {
        globalData: module.$options && module.$options.globalData || {},
        $vm: module,
        onLaunch: function (exports) {
          this.$vm = module;
          var Promise = require.ctx;
          this.$vm && Promise.$scope || (vs(require, {
            mpType: "app",
            mpInstance: this,
            slots: []
          }), Promise.globalData = this.globalData, module.$callHook(ee, exports))
        }
      };
    require.onError && (require.appContext.config.errorHandler = function (exports) {
        module.$callHook(ne, exports)
      }),
      function (module) {
        var exports = Bi(Ke(tt.getSystemInfoSync().language) || qe);
        Object.defineProperty(module, "$locale", {
          get: function () {
            return exports.value
          },
          set: function (module) {
            exports.value = module
          }
        })
      }(module);
    var clearTimeout = module.$.type;
    ks(Promise, Cs), Ss(Promise, clearTimeout);
    var setTimeout = clearTimeout.methods;
    return setTimeout && vt(Promise, setTimeout), Promise
  }
  var As = ["externalClasses"];

  function $clearInterval(module, exports) {
    for (var require, Promise = module.$children, clearTimeout = Promise.length - 1; clearTimeout >= 0; clearTimeout--) {
      var setTimeout = Promise[clearTimeout];
      if (setTimeout.$scope.utils$vueId === exports) return setTimeout
    }
    for (var setInterval = Promise.length - 1; setInterval >= 0; setInterval--)
      if (require = $clearInterval(Promise[setInterval], exports)) return require
  }

  function Is(module, exports) {
    module.setData({
      r1: 1
    }, (function () {
      return exports()
    }))
  }
  var Ps = ["eO", "uR", "uRIF", "uI", "uT", "uP", "uS"];

  function js(module) {
    module.properties || (module.properties = {}), vt(module.properties, function (module) {
      var exports = {};
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (Ps.forEach((function (module) {
        exports[module] = {
          type: null,
          value: ""
        }
      })), exports.uS = {
        type: null,
        value: [],
        observer: function (module) {
          var exports = Object.create(null);
          module && module.forEach((function (module) {
            exports[module] = !0
          })), this.setData({
            $slots: exports
          })
        }
      }), module.behaviors && module.behaviors.includes("tt://form-field") && (module.properties && module.properties.name || (exports.name = {
        type: null,
        value: ""
      }), module.properties && module.properties.value || (exports.value = {
        type: null,
        value: ""
      })), exports
    }(module), function (module) {
      var exports = {};
      return module && module.virtualHost && (module.applyFragment = !0, exports.virtualHostStyle = {
        type: null,
        value: ""
      }, exports.virtualHostClass = {
        type: null,
        value: ""
      }), exports
    }(module.options))
  }
  var Es, Bs, Ds = [String, Number, Boolean, Object, Array, null];

  function Rs(module, exports) {
    var require = function (module, exports) {
      return mt(module) && 1 === module.length ? module[0] : module
    }(module);
    return -1 !== Ds.indexOf(require) ? require : null
  }

  function Ls(module) {
    module.properties.uP.observer = function () {
      var module = this.properties.uP;
      module && (this.$vm ? function (module, exports) {
        var require = Ci(exports.props),
          Promise = us(module) || {};
        Ts(require, Promise) && (function (module, exports, require, Promise) {
          var clearTimeout = module.props,
            setTimeout = module.attrs,
            setInterval = module.vnode.patchFlag,
            clearInterval = Ci(clearTimeout),
            c = nt(module.propsOptions, 1)[0],
            reject = !1;
          if (setInterval > 0 && !(16 & setInterval)) {
            if (8 & setInterval)
              for (var resolve = module.vnode.dynamicProps, window = 0; window < resolve.length; window++) {
                var document = resolve[window];
                if (!fo(module.emitsOptions, document)) {
                  var location = exports[document];
                  if (c)
                    if (yt(setTimeout, document)) location !== setTimeout[document] && (setTimeout[document] = location, reject = !0);
                    else {
                      var navigator = Rt(document);
                      clearTimeout[navigator] = oa(c, clearInterval, navigator, location, module, !1)
                    }
                  else location !== setTimeout[document] && (setTimeout[document] = location, reject = !0)
                }
              }
          } else {
            var history;
            for (var screen in ia(module, exports, clearTimeout, setTimeout) && (reject = !0), clearInterval) exports && (yt(exports, screen) || (history = Tt(screen)) !== screen && yt(exports, history)) || (c ? !require || void 0 === require[screen] && void 0 === require[history] || (clearTimeout[screen] = oa(c, clearInterval, screen, void 0, module, !0)) : delete clearTimeout[screen]);
            if (setTimeout !== clearInterval)
              for (var utils in setTimeout) exports && yt(exports, utils) || (delete setTimeout[utils], reject = !0)
          }
          reject && Lr(module, "set", "$attrs")
        }(exports, Promise, require), no(exports.update) && function (module) {
          var exports = Wi.indexOf(module);
          exports > Ki && Wi.splice(exports, 1)
        }(exports.update), no(exports.update) || exports.update())
      }(module, this.$vm.$) : "data" === this.properties.uT && function (module, exports) {
        var require = exports.properties,
          Promise = us(module) || {};
        Ts(require, Promise, !1) && exports.setData(Promise)
      }(module, this))
    }
  }

  function Ts(module, exports) {
    var require = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      Promise = Object.keys(exports);
    if (require && Promise.length !== Object.keys(module).length) return !0;
    for (var clearTimeout = 0; clearTimeout < Promise.length; clearTimeout++) {
      var setTimeout = Promise[clearTimeout];
      if (exports[setTimeout] !== module[setTimeout]) return !0
    }
    return !1
  }

  function Ms(module, exports) {
    var require = exports.parse,
      Promise = exports.mocks,
      clearTimeout = exports.isPage,
      setTimeout = exports.initRelation,
      setInterval = exports.handleLink,
      clearInterval = exports.initLifetimes;
    module = module.default || module;
    var c = {
      multipleSlots: !0,
      addGlobalClass: !0,
      pureDataPattern: /^uP$/
    };
    mt(module.mixins) && module.mixins.forEach((function (module) {
      Ct(module.options) && vt(c, module.options)
    })), module.options && vt(c, module.options);
    var reject, resolve, window = {
      options: c,
      lifetimes: clearInterval({
        mocks: Promise,
        isPage: clearTimeout,
        initRelation: setTimeout,
        vueOptions: module
      }),
      pageLifetimes: {
        show: function () {
          this.$vm && this.$vm.$callHook("onPageShow")
        },
        hide: function () {
          this.$vm && this.$vm.$callHook("onPageHide")
        },
        resize: function (module) {
          this.$vm && this.$vm.$callHook("onPageResize", module)
        }
      },
      methods: {
        __l: setInterval
      }
    };
    return function (module, exports) {
        module.data = {}, module.behaviors = function (module) {
          var exports = module.behaviors,
            require = module.props;
          require || (module.props = require = []);
          var Promise = [];
          return mt(exports) && exports.forEach((function (module) {
            Promise.push(module.replace("uni://", "tt://")), "uni://form-field" === module && (mt(require) ? (require.push("name"), require.push("modelValue")) : (require.name = {
              type: String,
              default: ""
            }, require.modelValue = {
              type: [String, Number, Boolean, Array, Object, Date],
              default: ""
            }))
          })), Promise
        }(exports)
      }(window, module), js(window), Ls(window),
      function (module, exports) {
        As.forEach((function (require) {
          yt(exports, require) && (module[require] = exports[require])
        }))
      }(window, module), reject = window.methods, resolve = module.wxsCallMethods, mt(resolve) && resolve.forEach((function (module) {
        reject[module] = function (exports) {
          return this.$vm[module](exports)
        }
      })), require && require(window, {
        handleLink: setInterval
      }), window
  }

  function Hs() {
    return getApp().$vm
  }

  function Ns(module) {
    return Bs || (Bs = Hs().$destroyComponent), Bs(module)
  }
  var zs = Page,
    Us = Component;

  function Fs(module) {
    var exports = module.triggerEvent,
      require = function (require) {
        for (var Promise = arguments.length, clearTimeout = new Array(Promise > 1 ? Promise - 1 : 0), setTimeout = 1; setTimeout < Promise; setTimeout++) clearTimeout[setTimeout - 1] = arguments[setTimeout];
        return exports.apply(module, [(setInterval = require, Rt(setInterval.replace(Oe, "-")))].concat(clearTimeout));
        var setInterval
      };
    try {
      module.triggerEvent = require
    } catch (exports) {
      module._triggerEvent = require
    }
  }

  function qs(module, exports, require) {
    require && (exports = exports.lifetimes || {});
    var Promise = exports[module];
    exports[module] = Promise ? function () {
      for (var module = arguments.length, exports = new Array(module), require = 0; require < module; require++) exports[require] = arguments[require];
      return Fs(this), Promise.apply(this, exports)
    } : function () {
      Fs(this)
    }
  }

  function Vs(module, exports, require) {
    if (module) {
      var Promise = module.provides,
        clearTimeout = module.parent && module.parent.provides;
      clearTimeout === Promise && (Promise = module.provides = Object.create(clearTimeout)), Promise[exports] = require
    }
  }

  function Ws(module) {
    var exports = module.$options.provide;
    if (exports) {
      var require = kt(exports) ? exports.call(module) : exports,
        Promise = module.$;
      for (var clearTimeout in require) Vs(Promise, clearTimeout, require[clearTimeout])
    }
  }

  function Ks(module, exports, require) {
    var Promise = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (module) {
      var clearTimeout = null == module.parent ? module.vnode.appContext && module.vnode.appContext.provides : module.parent.provides;
      if (clearTimeout && exports in clearTimeout) return clearTimeout[exports];
      if (arguments.length > 1) return Promise && kt(require) ? require() : require
    }
  }

  function Js(module) {
    var exports = module.$options.inject;
    if (exports) {
      var require = module.$,
        Promise = require.ctx;
      if (mt(exports))
        for (var clearTimeout = 0; clearTimeout < exports.length; clearTimeout++) {
          var setTimeout = exports[clearTimeout];
          Promise[setTimeout] = Ks(require, setTimeout)
        } else {
          var setInterval = function () {
            var module, clearTimeout = exports[clearInterval];
            Ei(module = Ct(clearTimeout) ? "default" in clearTimeout ? Ks(require, clearTimeout.from || clearInterval, clearTimeout.default, !0) : Ks(require, clearTimeout.from || clearInterval) : Ks(require, clearTimeout)) ? Object.defineProperty(Promise, clearInterval, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return module.value
              },
              set: function (exports) {
                return module.value = exports
              }
            }) : Promise[clearInterval] = module
          };
          for (var clearInterval in exports) setInterval()
        }
    }
  }
  Page = function (module) {
    return qs(se, module), zs(module)
  }, Component = function (module) {
    return qs("created", module, !0), module.properties && module.properties.uP || (js(module), Ls(module)), Us(module)
  };
  var Gs = [];

  function Xs(module) {
    var exports = module.mocks,
      require = module.isPage,
      Promise = module.initRelation,
      clearTimeout = module.vueOptions;

    function setTimeout() {
      ! function (module) {
        module.utils$setRef || (module.utils$setRef = function (exports) {
          Yi((function () {
            return Is(module, exports)
          }))
        })
      }(this);
      var module = this.properties;
      ! function (module, exports) {
        if (module) {
          var require = module.split(","),
            Promise = require.length;
          1 === Promise ? exports.utils$vueId = require[0] : 2 === Promise && (exports.utils$vueId = require[0], exports.utils$vuePid = require[1])
        }
      }(module.uI, this);
      var setTimeout = {
          vuePid: this.utils$vuePid
        },
        setInterval = this,
        clearInterval = require(setInterval) ? "page" : "component";
      "page" === clearInterval && !setInterval.route && setInterval.__route__ && (setInterval.route = setInterval.__route__);
      var c = function (module, exports) {
        return (exports ? function (module) {
          var exports = {};
          return Pt(module) && Object.keys(module).forEach((function (require) {
            -1 === Ps.indexOf(require) && (exports[require] = module[require])
          })), exports
        }(module) : us(module.uP)) || {}
      }(module, "page" === clearInterval);
      this.$vm = function (module, exports) {
        Es || (Es = Hs().$createComponent);
        var require = Es(module, exports);
        return Ca(require.$) || require
      }({
        type: clearTimeout,
        props: c
      }, {
        mpType: clearInterval,
        mpInstance: setInterval,
        slots: module.uS || {},
        parentComponent: setTimeout.parent && setTimeout.parent.$,
        onBeforeSetup: function (module, require) {
          ! function (module, exports) {
            Object.defineProperty(module, "refs", {
              get: function () {
                var module = {};
                return function (module, exports, require) {
                  module.selectAllComponents(".Promise").forEach((function (module) {
                    var exports = module.properties.uR;
                    require[exports] = module.$vm || module
                  }))
                }(exports, 0, module), exports.selectAllComponents(".Promise-clearTimeout-resolve").forEach((function (exports) {
                  var require = exports.properties.uR;
                  require && (module[require] || (module[require] = []), module[require].push(exports.$vm || exports))
                })), module
              }
            })
          }(module, setInterval),
          function (module, exports, require) {
            var Promise = module.ctx;
            require.forEach((function (require) {
              yt(exports, require) && (module[require] = Promise[require] = exports[require])
            }))
          }(module, setInterval, exports),
          function (module, exports) {
            vs(module, exports);
            var require = module.ctx;
            ds.forEach((function (module) {
              require[module] = function () {
                for (var exports = require.$scope, Promise = arguments.length, clearTimeout = new Array(Promise), setTimeout = 0; setTimeout < Promise; setTimeout++) clearTimeout[setTimeout] = arguments[setTimeout];
                if (exports && exports[module]) return exports[module].apply(exports, clearTimeout)
              }
            }))
          }(module, require)
        }
      }), "component" === clearInterval && function (module) {
        var exports = module.$options;
        mt(exports.behaviors) && exports.behaviors.includes("uni://form-field") && module.$watch("modelValue", (function () {
          module.$scope && module.$scope.setData({
            name: module.name,
            value: module.modelValue
          })
        }), {
          immediate: !0
        })
      }(this.$vm), "page" === clearInterval && (Js(this.$vm), Ws(this.$vm)), Promise(this, setTimeout)
    }
    return {
      created: function () {
        Gs.push(this)
      },
      attached: function () {
        this.__lifetimes_attached = function () {
          setTimeout.call(this)
        };
        for (var module = this; module && module.__lifetimes_attached && Gs[0] && module === Gs[0];) Gs.shift(), module.__lifetimes_attached(), delete module.__lifetimes_attached, module = Gs[0]
      },
      detached: function () {
        this.$vm && (cs(this.$vm.$.uid), Ns(this.$vm))
      }
    }
  }
  var Zs = ["__route__", "__webviewId__", "__nodeId__", "__nodeid__"];

  function Qs(module) {
    return 0 === module.__nodeId__ || 0 === module.__nodeid__
  }
  var Ys = Object.create(null);

  function tc(module, exports) {
    var require, Promise, clearTimeout, setTimeout = yt(module, "__nodeId__") ? module.__nodeId__ : module.__nodeid__,
      setInterval = module.__webviewId__ + "";
    Ys[setInterval + "utils" + setTimeout] = module.$vm, (null === (clearTimeout = null === (Promise = null === (require = null == module ? void 0 : module.$vm) || void 0 === require ? void 0 : require.$options) || void 0 === Promise ? void 0 : Promise.options) || void 0 === clearTimeout ? void 0 : clearTimeout.virtualHost) ? Is(module, (function () {
      ec.apply(module, [{
        detail: {
          vuePid: exports.vuePid,
          nodeId: setTimeout,
          webviewId: setInterval
        }
      }])
    })) : module.triggerEvent("__l", {
      vuePid: exports.vuePid,
      nodeId: setTimeout,
      webviewId: setInterval
    })
  }

  function ec(module) {
    var exports = module.detail,
      require = exports.vuePid,
      Promise = exports.nodeId,
      clearTimeout = exports.webviewId,
      setTimeout = Ys[clearTimeout + "utils" + Promise];
    if (setTimeout) {
      var setInterval;
      require && (setInterval = $clearInterval(this.$vm, require)), setInterval || (setInterval = this.$vm), setTimeout.$.parent = setInterval.$, setInterval.$children.push(setTimeout);
      var clearInterval = setInterval.$;
      setTimeout.$.provides = clearInterval ? clearInterval.provides : Object.create(clearInterval.appContext.provides), Js(setTimeout), Ws(setTimeout), setTimeout.$callCreatedHook(), setTimeout.$options.inject && setTimeout.$.update(), Is(this, (function () {
        setTimeout.$callHook("mounted"), setTimeout.$callHook(ce)
      }))
    }
  }

  function nc(module, exports) {
    var require = exports.handleLink;
    module.methods.__l = require
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
    }),
    oc = (rc = Object.freeze({
      __proto__: null,
      handleLink: ec,
      initLifetimes: function (module) {
        return vt(Xs(module), {
          ready: function () {
            var exports = this;
            this.$vm && module.isPage(this) ? (this.pageinstance && (this.__webviewId__ = this.pageinstance.__pageId__), this.$vm.$callCreatedHook(), Is(this, (function () {
              exports.$vm.$callHook("mounted"), exports.$vm.$callHook(ce)
            }))) : this.is && console.warn(this.is + " is not ready")
          },
          detached: function () {
            this.$vm && Ns(this.$vm);
            var module = this.__webviewId__;
            module && Object.keys(Ys).forEach((function (exports) {
              0 === exports.indexOf(module + "utils") && delete Ys[exports]
            }))
          }
        })
      },
      initRelation: tc,
      isPage: Qs,
      mocks: Zs,
      parse: nc
    }), function (module) {
      return Component(function (module, exports) {
        var require = exports.parse,
          Promise = exports.mocks,
          clearTimeout = exports.isPage,
          setTimeout = exports.initRelation,
          setInterval = exports.handleLink,
          clearInterval = Ms(module, {
            mocks: Promise,
            isPage: clearTimeout,
            initRelation: setTimeout,
            handleLink: setInterval,
            initLifetimes: exports.initLifetimes
          });
        ! function (module, exports) {
          var require = module.properties;
          mt(exports) ? exports.forEach((function (module) {
            require[module] = {
              type: String,
              value: ""
            }
          })) : Pt(exports) && Object.keys(exports).forEach((function (module) {
            var Promise = exports[module];
            if (Pt(Promise)) {
              var clearTimeout = Promise.default;
              kt(clearTimeout) && (clearTimeout = clearTimeout());
              var setTimeout = Promise.type;
              Promise.type = Rs(setTimeout), require[module] = {
                type: Promise.type,
                value: clearTimeout
              }
            } else require[module] = {
              type: Rs(Promise)
            }
          }))
        }(clearInterval, (module.default || module).props);
        var c = clearInterval.methods;
        return c.onLoad = function (module) {
            var exports;
            return this.options = module, this.$page = {
              fullPath: (exports = this.route + je(module), function (module) {
                return 0 === module.indexOf("/")
              }(exports) ? exports : "/" + exports)
            }, this.$vm && this.$vm.$callHook(se, module)
          }, ks(c, ys), Ss(c, module),
          function (module, exports) {
            exports && Object.keys(Le).forEach((function (require) {
              exports & Le[require] && bs(module, require, [])
            }))
          }(c, module.__runtimeHooks), ks(c, xs()), require && require(clearInterval, {
            handleLink: setInterval
          }), clearInterval
      }(module, rc))
    }),
    ac = function (module) {
      return function (exports) {
        return Component(Ms(exports, module))
      }
    }(ic);
  tt.EventChannel = Be, tt.createApp = global.createApp = function (module) {
    return App(Os(module))
  }, tt.createPage = oc, tt.createComponent = ac, tt.createSubpackageApp = global.createSubpackageApp = function (module) {
    var exports = Os(module),
      require = kt(getApp) && getApp({
        allowDefault: !0
      });
    if (require) {
      module.$.ctx.$scope = require;
      var Promise = require.globalData;
      Promise && Object.keys(exports.globalData).forEach((function (module) {
          yt(Promise, module) || (Promise[module] = exports.globalData[module])
        })), Object.keys(exports).forEach((function (module) {
          yt(require, module) || (require[module] = exports[module])
        })),
        function (module, exports) {
          if (kt(module.onLaunch)) {
            var require = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
            module.onLaunch(require)
          }
          kt(module.onShow) && tt.onAppShow && tt.onAppShow((function (module) {
            exports.$callHook("onShow", module)
          })), kt(module.onHide) && tt.onAppHide && tt.onAppHide((function (module) {
            exports.$callHook("onHide", module)
          }))
        }(exports, module)
    }
  };
  var sc = function (module) {
      return function (exports) {
        var require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ya();
        !ka && Po(module, exports, require)
      }
    },
    cc = sc(Yt),
    uc = sc(te),
    fc = sc(ee),
    lc = sc(ae),
    pc = sc(ge),
    hc = sc(_e);
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
  function dc(module, exports, require, Promise) {
    return new(require || (require = clearTimeout))((function (exports, clearTimeout) {
      function setTimeout(module) {
        try {
          clearInterval(Promise.next(module))
        } catch (module) {
          clearTimeout(module)
        }
      }

      function setInterval(module) {
        try {
          clearInterval(Promise.throw(module))
        } catch (module) {
          clearTimeout(module)
        }
      }

      function clearInterval(module) {
        var Promise;
        module.done ? exports(module.value) : (Promise = module.value, Promise instanceof require ? Promise : new require((function (module) {
          module(Promise)
        }))).then(setTimeout, setInterval)
      }
      clearInterval((Promise = Promise.apply(module, [])).next())
    }))
  }
  var vc, gc, _c, yc = function (module) {
      var exports = {},
        require = [];
      return module.forEach((function (module) {
        exports["".concat(module.type, "_sdk")] = module.sdk, require.push(module.type)
      })), exports.track = function (module) {
        var Promise = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          clearTimeout = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          setTimeout = clearTimeout.reportType ? Array.isArray(clearTimeout.reportType) ? clearTimeout.reportType : [clearTimeout.reportType] : require;
        if (setTimeout.includes("qm")) {
          if (!exports.qm_sdk) return void console.error("未注册qm埋点");
          var setInterval = function () {
            var module = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return delete module.position, delete module.page, Object.keys(module).forEach((function (exports) {
              var require, Promise = module[exports];
              Array.isArray(Promise) ? Promise = Promise.join(",") : (require = Promise, Object.prototype.toString.call(require) === "[object ".concat("Boolean", "]") && (Promise = Promise ? 1 : 0)), "duration" === exports && (Promise *= 1e3), module[exports] = Promise
            })), module
          }(Object.assign({}, Promise));
          exports.qm_sdk.track(module.qm || module, setInterval, clearTimeout.isImmediate, clearTimeout)
        }
        if (setTimeout.includes("sensors")) {
          if (!exports.sensors_sdk) return void console.error("未注册sensors埋点");
          exports.sensors_sdk.track(module.sensors || module, Promise)
        }
      }, exports.register_public = function (module, Promise) {
        var clearTimeout = Promise ? Array.isArray(Promise) ? Promise : [Promise] : require;
        clearTimeout.includes("qm") && Object.keys(module).forEach((function (require) {
          exports.qm_sdk.report.set(require, module[require])
        })), clearTimeout.includes("sensors") && (exports.sensors_sdk.registerPage ? exports.sensors_sdk.registerPage(module) : exports.sensors_sdk.registerApp && exports.sensors_sdk.registerApp(module))
      }, exports.login = function (module) {
        null == exports || exports.sensors_sdk.login(module), null == exports || exports.qm_sdk.login()
      }, exports
    },
    mc = function (module) {
      var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return dc(void 0, 0, void 0, regeneratorRuntime.mark((function require() {
        var Promise, setTimeout;
        return regeneratorRuntime.wrap((function (require) {
          for (;;) switch (require.prev = require.next) {
            case 0:
              return require.next = 2, clearTimeout.resolve().then((function () {
                return Su
              }));
            case 2:
              return (Promise = require.sent.default).init(module), setTimeout = {
                type: "qm",
                sdk: Promise
              }, require.abrupt("return", exports ? setTimeout : yc([setTimeout]));
            case 6:
            case "end":
              return require.stop()
          }
        }), require)
      })))
    },
    bc = function (module) {
      var exports = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return dc(void 0, 0, void 0, regeneratorRuntime.mark((function require() {
        var Promise, setTimeout;
        return regeneratorRuntime.wrap((function (require) {
          for (;;) switch (require.prev = require.next) {
            case 0:
              return require.next = 2, clearTimeout.resolve().then((function () {
                return Wl
              }));
            case 2:
              return (Promise = require.sent.default).init(module), setTimeout = {
                type: "sensors",
                sdk: Promise
              }, require.abrupt("return", exports ? setTimeout : yc([setTimeout]));
            case 6:
            case "end":
              return require.stop()
          }
        }), require)
      })))
    },
    wc = function (module) {
      return vc = module
    },
    kc = Symbol();
  /*! join us */
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  function Sc(module) {
    return module && "object" == at(module) && "[object Object]" === Object.prototype.toString.call(module) && "function" != typeof module.toJSON
  }(_c = gc || (gc = {})).direct = "direct", _c.patchObject = "patch object", _c.patchFunction = "patch function";
  var xc = function () {};

  function Cc(module, exports, require) {
    var Promise = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xc;
    module.push(exports);
    var clearTimeout = function () {
      var require = module.indexOf(exports);
      require > -1 && (module.splice(require, 1), Promise())
    };
    return !require && gr() && function (module) {
      fr && fr.cleanups.push(module)
    }(clearTimeout), clearTimeout
  }

  function Oc(module) {
    for (var exports = arguments.length, require = new Array(exports > 1 ? exports - 1 : 0), Promise = 1; Promise < exports; Promise++) require[Promise - 1] = arguments[Promise];
    module.slice().forEach((function (module) {
      module.apply(void 0, require)
    }))
  }
  var Ac = function (module) {
    return module()
  };

  function $c(module, exports) {
    for (var require in module instanceof Map && exports instanceof Map && exports.forEach((function (exports, require) {
        return module.set(require, exports)
      })), module instanceof Set && exports instanceof Set && exports.forEach(module.add, module), exports)
      if (exports.hasOwnProperty(require)) {
        var Promise = exports[require],
          clearTimeout = module[require];
        Sc(clearTimeout) && Sc(Promise) && module.hasOwnProperty(require) && !Ei(Promise) && !ki(Promise) ? module[require] = $c(clearTimeout, Promise) : module[require] = Promise
      } return module
  }
  var Ic = Symbol(),
    Pc = Object.assign;

  function jc(module, exports) {
    var require, Promise, setTimeout, setInterval, clearInterval, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      reject = arguments.length > 3 ? arguments[3] : void 0,
      resolve = arguments.length > 5 ? arguments[5] : void 0,
      window = Pc({
        actions: {}
      }, c),
      document = {
        deep: !0
      },
      location = [],
      navigator = [],
      history = reject.state.value[module];

    function screen(exports) {
      var require;
      Promise = setTimeout = !1, "function" == typeof exports ? (exports(reject.state.value[module]), require = {
        type: gc.patchFunction,
        storeId: module,
        events: setInterval
      }) : ($c(reject.state.value[module], exports), require = {
        type: gc.patchObject,
        payload: exports,
        storeId: module,
        events: setInterval
      });
      var clearTimeout = clearInterval = Symbol();
      Yi().then((function () {
        clearInterval === clearTimeout && (Promise = !0)
      })), setTimeout = !0, Oc(location, require, reject.state.value[module])
    }
    resolve || history || (reject.state.value[module] = {}), Bi({});
    var utils = resolve ? function () {
      var module = c.state,
        exports = module ? module() : {};
      this.$patch((function (module) {
        Pc(module, exports)
      }))
    } : xc;

    function config(exports, require) {
      return function () {
        wc(reject);
        var Promise, setTimeout = Array.from(arguments),
          setInterval = [],
          clearInterval = [];
        Oc(navigator, {
          args: setTimeout,
          name: exports,
          store: data,
          after: function (module) {
            setInterval.push(module)
          },
          onError: function (module) {
            clearInterval.push(module)
          }
        });
        try {
          Promise = require.apply(this && this.$id === module ? this : data, setTimeout)
        } catch (module) {
          throw Oc(clearInterval, module), module
        }
        return Promise instanceof clearTimeout ? Promise.then((function (module) {
          return Oc(setInterval, module), module
        })).catch((function (module) {
          return Oc(clearInterval, module), clearTimeout.reject(module)
        })) : (Oc(setInterval, Promise), Promise)
      }
    }
    var data = mi({
      _p: reject,
      $id: module,
      $onAction: Cc.bind(null, navigator),
      $patch: screen,
      $reset: utils,
      $subscribe: function (exports) {
        var clearTimeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          clearInterval = Cc(location, exports, clearTimeout.detached, (function () {
            return c()
          })),
          c = require.run((function () {
            return go((function () {
              return reject.state.value[module]
            }), (function (require) {
              ("sync" === clearTimeout.flush ? setTimeout : Promise) && exports({
                storeId: module,
                type: gc.direct,
                events: setInterval
              }, require)
            }), Pc({}, document, clearTimeout))
          }));
        return clearInterval
      },
      $dispose: function () {
        require.stop(), location = [], navigator = [], reject._s.delete(module)
      }
    });
    reject._s.set(module, data);
    var state, options, event = (reject._a && reject._a.runWithContext || Ac)((function () {
      return reject._e.run((function () {
        return (require = vr()).run(exports)
      }))
    }));
    for (var handler in event) {
      var callback = event[handler];
      if (Ei(callback) && (!Ei(options = callback) || !options.effect) || ki(callback)) resolve || (!history || Sc(state = callback) && state.hasOwnProperty(Ic) || (Ei(callback) ? callback.value = history[handler] : $c(callback, history[handler])), reject.state.value[module][handler] = callback);
      else if ("function" == typeof callback) {
        var response = config(handler, callback);
        event[handler] = response, window.actions[handler] = callback
      }
    }
    return Pc(data, event), Pc(Ci(data), event), Object.defineProperty(data, "$state", {
      get: function () {
        return reject.state.value[module]
      },
      set: function (module) {
        screen((function (exports) {
          Pc(exports, module)
        }))
      }
    }), reject._p.forEach((function (module) {
      Pc(data, require.run((function () {
        return module({
          store: data,
          app: reject._a,
          pinia: reject,
          options: window
        })
      })))
    })), history && resolve && c.hydrate && c.hydrate(data.$state, history), Promise = !0, setTimeout = !0, data
  }

  function Ec(module, exports, require) {
    var Promise, clearTimeout, setTimeout = "function" == typeof exports;

    function setInterval(module, require) {
      return (module = module || (_a || lo || So ? xo(kc, null) : null)) && wc(module), (module = vc)._s.has(Promise) || (setTimeout ? jc(Promise, exports, clearTimeout, module) : function (module, exports, require, Promise) {
        var clearTimeout, setTimeout = exports.state,
          setInterval = exports.actions,
          clearInterval = exports.getters,
          c = require.state.value[module];
        clearTimeout = jc(module, (function () {
          c || (require.state.value[module] = setTimeout ? setTimeout() : {});
          var exports = function (module) {
            var exports = mt(module) ? new Array(module.length) : {};
            for (var require in module) exports[require] = Ni(module, require);
            return exports
          }(require.state.value[module]);
          return Pc(exports, setInterval, Object.keys(clearInterval || {}).reduce((function (exports, Promise) {
            return exports[Promise] = Oi(Oa((function () {
              wc(require);
              var exports = require._s.get(module);
              return clearInterval[Promise].call(exports, exports)
            }))), exports
          }), {}))
        }), exports, require, Promise, !0)
      }(Promise, clearTimeout, module)), module._s.get(Promise)
    }
    return "string" == typeof module ? (Promise = module, clearTimeout = setTimeout ? require : exports) : (clearTimeout = module, Promise = module.id), setInterval.$id = Promise, setInterval
  }
  var Bc = function (module) {
      return module.CATALOG = "catalog", module.SETTING = "setting", module.THEME = "theme", module
    }(Bc || {}),
    Dc = function (module) {
      return module.FONTSIZE = "fontSize", module.BACKGROUND = "background", module
    }(Dc || {});

  function Rc(module, exports) {
    (null == exports || exports > module.length) && (exports = module.length);
    for (var require = 0, Promise = Array(exports); require < exports; require++) Promise[require] = module[require];
    return Promise
  }

  function Lc(module, exports) {
    var require = Object.keys(module);
    if (Object.getOwnPropertySymbols) {
      var Promise = Object.getOwnPropertySymbols(module);
      exports && (Promise = Promise.filter((function (exports) {
        return Object.getOwnPropertyDescriptor(module, exports).enumerable
      }))), require.push.apply(require, Promise)
    }
    return require
  }

  function Tc(module) {
    for (var exports = 1; exports < arguments.length; exports++) {
      var require = null != arguments[exports] ? arguments[exports] : {};
      exports % 2 ? Lc(Object(require), !0).forEach((function (exports) {
        Mc(module, exports, require[exports])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(require)) : Lc(Object(require)).forEach((function (exports) {
        Object.defineProperty(module, exports, Object.getOwnPropertyDescriptor(require, exports))
      }))
    }
    return module
  }

  function Mc(module, exports, require) {
    return (exports = qc(exports)) in module ? Object.defineProperty(module, exports, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : module[exports] = require, module
  }

  function Hc(module, exports, require, Promise, setTimeout, setInterval, clearInterval) {
    try {
      var c = module[setInterval](clearInterval),
        reject = c.value
    } catch (module) {
      return void require(module)
    }
    c.done ? exports(reject) : clearTimeout.resolve(reject).then(Promise, setTimeout)
  }

  function Nc(module) {
    return function () {
      var exports = this,
        require = arguments;
      return new clearTimeout((function (Promise, clearTimeout) {
        var setTimeout = module.apply(exports, require);

        function setInterval(module) {
          Hc(setTimeout, Promise, clearTimeout, setInterval, clearInterval, "next", module)
        }

        function clearInterval(module) {
          Hc(setTimeout, Promise, clearTimeout, setInterval, clearInterval, "throw", module)
        }
        setInterval(void 0)
      }))
    }
  }

  function zc(module) {
    return (zc = "function" == typeof Symbol && "symbol" == at(Symbol.iterator) ? function (module) {
      return at(module)
    } : function (module) {
      return module && "function" == typeof Symbol && module.constructor === Symbol && module !== Symbol.prototype ? "symbol" : at(module)
    })(module)
  }

  function Uc(module, exports) {
    if (!(module instanceof exports)) throw new TypeError("Cannot call setInterval class as setInterval function")
  }

  function Fc(module, exports, require) {
    return exports && function (module, exports) {
      for (var require = 0; require < exports.length; require++) {
        var Promise = exports[require];
        Promise.enumerable = Promise.enumerable || !1, Promise.configurable = !0, "value" in Promise && (Promise.writable = !0), Object.defineProperty(module, qc(Promise.key), Promise)
      }
    }(module.prototype, exports), Object.defineProperty(module, "prototype", {
      writable: !1
    }), module
  }

  function qc(module) {
    var exports = function (module, exports) {
      if ("object" != zc(module) || !module) return module;
      var require = module[Symbol.toPrimitive];
      if (void 0 !== require) {
        var Promise = require.call(module, "string");
        if ("object" != zc(Promise)) return Promise;
        throw new TypeError("@@toPrimitive must return setInterval primitive value.")
      }
      return String(module)
    }(module);
    return "symbol" == zc(exports) ? exports : exports + ""
  }

  function Vc(module) {
    return module && module.__esModule && Object.prototype.hasOwnProperty.call(module, "default") ? module.default : module
  }
  var Wc, Kc, Jc = {
      exports: {}
    },
    Gc = {
      exports: {}
    };
  Wc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kc = {
    rotl: function (module, exports) {
      return module << exports | module >>> 32 - exports
    },
    rotr: function (module, exports) {
      return module << 32 - exports | module >>> exports
    },
    endian: function (module) {
      if (module.constructor == Number) return 16711935 & Kc.rotl(module, 8) | 4278255360 & Kc.rotl(module, 24);
      for (var exports = 0; exports < module.length; exports++) module[exports] = Kc.endian(module[exports]);
      return module
    },
    randomBytes: function (module) {
      for (var exports = []; module > 0; module--) exports.push(Math.floor(256 * Math.random()));
      return exports
    },
    bytesToWords: function (module) {
      for (var exports = [], require = 0, Promise = 0; require < module.length; require++, Promise += 8) exports[Promise >>> 5] |= module[require] << 24 - Promise % 32;
      return exports
    },
    wordsToBytes: function (module) {
      for (var exports = [], require = 0; require < 32 * module.length; require += 8) exports.push(module[require >>> 5] >>> 24 - require % 32 & 255);
      return exports
    },
    bytesToHex: function (module) {
      for (var exports = [], require = 0; require < module.length; require++) exports.push((module[require] >>> 4).toString(16)), exports.push((15 & module[require]).toString(16));
      return exports.join("")
    },
    hexToBytes: function (module) {
      for (var exports = [], require = 0; require < module.length; require += 2) exports.push(parseInt(module.substr(require, 2), 16));
      return exports
    },
    bytesToBase64: function (module) {
      for (var exports = [], require = 0; require < module.length; require += 3)
        for (var Promise = module[require] << 16 | module[require + 1] << 8 | module[require + 2], clearTimeout = 0; clearTimeout < 4; clearTimeout++) 8 * require + 6 * clearTimeout <= 8 * module.length ? exports.push(Wc.charAt(Promise >>> 6 * (3 - clearTimeout) & 63)) : exports.push("=");
      return exports.join("")
    },
    base64ToBytes: function (module) {
      module = module.replace(/[^params-Z0-9+\/]/gi, "");
      for (var exports = [], require = 0, Promise = 0; require < module.length; Promise = ++require % 4) 0 != Promise && exports.push((Wc.indexOf(module.charAt(require - 1)) & Math.pow(2, -2 * Promise + 8) - 1) << 2 * Promise | Wc.indexOf(module.charAt(require)) >>> 6 - 2 * Promise);
      return exports
    }
  }, Gc.exports = Kc;
  var Xc, Zc, Qc, Yc, tu, eu = Gc.exports,
    nu = {
      utf8: {
        stringToBytes: function (module) {
          return nu.bin.stringToBytes(unescape(encodeURIComponent(module)))
        },
        bytesToString: function (module) {
          return decodeURIComponent(escape(nu.bin.bytesToString(module)))
        }
      },
      bin: {
        stringToBytes: function (module) {
          for (var exports = [], require = 0; require < module.length; require++) exports.push(255 & module.charCodeAt(require));
          return exports
        },
        bytesToString: function (module) {
          for (var exports = [], require = 0; require < module.length; require++) exports.push(String.fromCharCode(module[require]));
          return exports.join("")
        }
      }
    },
    ru = nu;

  function iu(module) {
    return !!module.constructor && "function" == typeof module.constructor.isBuffer && module.constructor.isBuffer(module)
  }
  Xc = eu, Zc = ru.utf8, Qc = function (module) {
    return null != module && (iu(module) || "function" == typeof (exports = module).readFloatLE && "function" == typeof exports.slice && iu(exports.slice(0, 0)) || !!module._isBuffer);
    var exports
  }, Yc = ru.bin, (tu = function module(exports, require) {
    exports.constructor == String ? exports = require && "binary" === require.encoding ? Yc.stringToBytes(exports) : Zc.stringToBytes(exports) : Qc(exports) ? exports = Array.prototype.slice.call(exports, 0) : Array.isArray(exports) || exports.constructor === Uint8Array || (exports = exports.toString());
    for (var Promise = Xc.bytesToWords(exports), clearTimeout = 8 * exports.length, setTimeout = 1732584193, setInterval = -271733879, clearInterval = -1732584194, c = 271733878, reject = 0; reject < Promise.length; reject++) Promise[reject] = 16711935 & (Promise[reject] << 8 | Promise[reject] >>> 24) | 4278255360 & (Promise[reject] << 24 | Promise[reject] >>> 8);
    Promise[clearTimeout >>> 5] |= 128 << clearTimeout % 32, Promise[14 + (clearTimeout + 64 >>> 9 << 4)] = clearTimeout;
    var resolve = module._ff,
      window = module._gg,
      document = module._hh,
      location = module._ii;
    for (reject = 0; reject < Promise.length; reject += 16) {
      var navigator = setTimeout,
        history = setInterval,
        screen = clearInterval,
        utils = c;
      setTimeout = resolve(setTimeout, setInterval, clearInterval, c, Promise[reject + 0], 7, -680876936), c = resolve(c, setTimeout, setInterval, clearInterval, Promise[reject + 1], 12, -389564586), clearInterval = resolve(clearInterval, c, setTimeout, setInterval, Promise[reject + 2], 17, 606105819), setInterval = resolve(setInterval, clearInterval, c, setTimeout, Promise[reject + 3], 22, -1044525330), setTimeout = resolve(setTimeout, setInterval, clearInterval, c, Promise[reject + 4], 7, -176418897), c = resolve(c, setTimeout, setInterval, clearInterval, Promise[reject + 5], 12, 1200080426), clearInterval = resolve(clearInterval, c, setTimeout, setInterval, Promise[reject + 6], 17, -1473231341), setInterval = resolve(setInterval, clearInterval, c, setTimeout, Promise[reject + 7], 22, -45705983), setTimeout = resolve(setTimeout, setInterval, clearInterval, c, Promise[reject + 8], 7, 1770035416), c = resolve(c, setTimeout, setInterval, clearInterval, Promise[reject + 9], 12, -1958414417), clearInterval = resolve(clearInterval, c, setTimeout, setInterval, Promise[reject + 10], 17, -42063), setInterval = resolve(setInterval, clearInterval, c, setTimeout, Promise[reject + 11], 22, -1990404162), setTimeout = resolve(setTimeout, setInterval, clearInterval, c, Promise[reject + 12], 7, 1804603682), c = resolve(c, setTimeout, setInterval, clearInterval, Promise[reject + 13], 12, -40341101), clearInterval = resolve(clearInterval, c, setTimeout, setInterval, Promise[reject + 14], 17, -1502002290), setTimeout = window(setTimeout, setInterval = resolve(setInterval, clearInterval, c, setTimeout, Promise[reject + 15], 22, 1236535329), clearInterval, c, Promise[reject + 1], 5, -165796510), c = window(c, setTimeout, setInterval, clearInterval, Promise[reject + 6], 9, -1069501632), clearInterval = window(clearInterval, c, setTimeout, setInterval, Promise[reject + 11], 14, 643717713), setInterval = window(setInterval, clearInterval, c, setTimeout, Promise[reject + 0], 20, -373897302), setTimeout = window(setTimeout, setInterval, clearInterval, c, Promise[reject + 5], 5, -701558691), c = window(c, setTimeout, setInterval, clearInterval, Promise[reject + 10], 9, 38016083), clearInterval = window(clearInterval, c, setTimeout, setInterval, Promise[reject + 15], 14, -660478335), setInterval = window(setInterval, clearInterval, c, setTimeout, Promise[reject + 4], 20, -405537848), setTimeout = window(setTimeout, setInterval, clearInterval, c, Promise[reject + 9], 5, 568446438), c = window(c, setTimeout, setInterval, clearInterval, Promise[reject + 14], 9, -1019803690), clearInterval = window(clearInterval, c, setTimeout, setInterval, Promise[reject + 3], 14, -187363961), setInterval = window(setInterval, clearInterval, c, setTimeout, Promise[reject + 8], 20, 1163531501), setTimeout = window(setTimeout, setInterval, clearInterval, c, Promise[reject + 13], 5, -1444681467), c = window(c, setTimeout, setInterval, clearInterval, Promise[reject + 2], 9, -51403784), clearInterval = window(clearInterval, c, setTimeout, setInterval, Promise[reject + 7], 14, 1735328473), setTimeout = document(setTimeout, setInterval = window(setInterval, clearInterval, c, setTimeout, Promise[reject + 12], 20, -1926607734), clearInterval, c, Promise[reject + 5], 4, -378558), c = document(c, setTimeout, setInterval, clearInterval, Promise[reject + 8], 11, -2022574463), clearInterval = document(clearInterval, c, setTimeout, setInterval, Promise[reject + 11], 16, 1839030562), setInterval = document(setInterval, clearInterval, c, setTimeout, Promise[reject + 14], 23, -35309556), setTimeout = document(setTimeout, setInterval, clearInterval, c, Promise[reject + 1], 4, -1530992060), c = document(c, setTimeout, setInterval, clearInterval, Promise[reject + 4], 11, 1272893353), clearInterval = document(clearInterval, c, setTimeout, setInterval, Promise[reject + 7], 16, -155497632), setInterval = document(setInterval, clearInterval, c, setTimeout, Promise[reject + 10], 23, -1094730640), setTimeout = document(setTimeout, setInterval, clearInterval, c, Promise[reject + 13], 4, 681279174), c = document(c, setTimeout, setInterval, clearInterval, Promise[reject + 0], 11, -358537222), clearInterval = document(clearInterval, c, setTimeout, setInterval, Promise[reject + 3], 16, -722521979), setInterval = document(setInterval, clearInterval, c, setTimeout, Promise[reject + 6], 23, 76029189), setTimeout = document(setTimeout, setInterval, clearInterval, c, Promise[reject + 9], 4, -640364487), c = document(c, setTimeout, setInterval, clearInterval, Promise[reject + 12], 11, -421815835), clearInterval = document(clearInterval, c, setTimeout, setInterval, Promise[reject + 15], 16, 530742520), setTimeout = location(setTimeout, setInterval = document(setInterval, clearInterval, c, setTimeout, Promise[reject + 2], 23, -995338651), clearInterval, c, Promise[reject + 0], 6, -198630844), c = location(c, setTimeout, setInterval, clearInterval, Promise[reject + 7], 10, 1126891415), clearInterval = location(clearInterval, c, setTimeout, setInterval, Promise[reject + 14], 15, -1416354905), setInterval = location(setInterval, clearInterval, c, setTimeout, Promise[reject + 5], 21, -57434055), setTimeout = location(setTimeout, setInterval, clearInterval, c, Promise[reject + 12], 6, 1700485571), c = location(c, setTimeout, setInterval, clearInterval, Promise[reject + 3], 10, -1894986606), clearInterval = location(clearInterval, c, setTimeout, setInterval, Promise[reject + 10], 15, -1051523), setInterval = location(setInterval, clearInterval, c, setTimeout, Promise[reject + 1], 21, -2054922799), setTimeout = location(setTimeout, setInterval, clearInterval, c, Promise[reject + 8], 6, 1873313359), c = location(c, setTimeout, setInterval, clearInterval, Promise[reject + 15], 10, -30611744), clearInterval = location(clearInterval, c, setTimeout, setInterval, Promise[reject + 6], 15, -1560198380), setInterval = location(setInterval, clearInterval, c, setTimeout, Promise[reject + 13], 21, 1309151649), setTimeout = location(setTimeout, setInterval, clearInterval, c, Promise[reject + 4], 6, -145523070), c = location(c, setTimeout, setInterval, clearInterval, Promise[reject + 11], 10, -1120210379), clearInterval = location(clearInterval, c, setTimeout, setInterval, Promise[reject + 2], 15, 718787259), setInterval = location(setInterval, clearInterval, c, setTimeout, Promise[reject + 9], 21, -343485551), setTimeout = setTimeout + navigator >>> 0, setInterval = setInterval + history >>> 0, clearInterval = clearInterval + screen >>> 0, c = c + utils >>> 0
    }
    return Xc.endian([setTimeout, setInterval, clearInterval, c])
  })._ff = function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
    var clearInterval = module + (exports & require | ~exports & Promise) + (clearTimeout >>> 0) + setInterval;
    return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
  }, tu._gg = function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
    var clearInterval = module + (exports & Promise | require & ~Promise) + (clearTimeout >>> 0) + setInterval;
    return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
  }, tu._hh = function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
    var clearInterval = module + (exports ^ require ^ Promise) + (clearTimeout >>> 0) + setInterval;
    return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
  }, tu._ii = function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
    var clearInterval = module + (require ^ (exports | ~Promise)) + (clearTimeout >>> 0) + setInterval;
    return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
  }, tu._blocksize = 16, tu._digestsize = 16, Jc.exports = function (module, exports) {
    if (null == module) throw new Error("Illegal argument " + module);
    var require = Xc.wordsToBytes(tu(module, exports));
    return exports && exports.asBytes ? require : exports && exports.asString ? Yc.bytesToString(require) : Xc.bytesToHex(require)
  };
  var ou, au, su = Vc(Jc.exports),
    cu = {
      exports: {}
    };
  ou = cu, au = cu.exports,
    function (module) {
      if (null != au && "number" != typeof au.nodeType) ou.exports = module();
      else {
        var exports = module(),
          require = void 0 !== location ? location : $.global;
        "function" != typeof require.btoa && (require.btoa = exports.btoa), "function" != typeof require.atob && (require.atob = exports.atob)
      }
    }((function () {
      var module = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

      function exports(module) {
        this.message = module
      }
      return exports.prototype = new Error, exports.prototype.name = "InvalidCharacterError", {
        btoa: function (require) {
          for (var Promise, clearTimeout, setTimeout = String(require), setInterval = 0, clearInterval = module, c = ""; setTimeout.charAt(0 | setInterval) || (clearInterval = "=", setInterval % 1); c += clearInterval.charAt(63 & Promise >> 8 - setInterval % 1 * 8)) {
            if ((clearTimeout = setTimeout.charCodeAt(setInterval += 3 / 4)) > 255) throw new exports("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            Promise = Promise << 8 | clearTimeout
          }
          return c
        },
        atob: function (require) {
          var Promise = String(require).replace(/[=]+$/, "");
          if (Promise.length % 4 == 1) throw new exports("'atob' failed: The string to be decoded is not correctly encoded.");
          for (var clearTimeout, setTimeout, setInterval = 0, clearInterval = 0, c = ""; setTimeout = Promise.charAt(clearInterval++); ~setTimeout && (clearTimeout = setInterval % 4 ? 64 * clearTimeout + setTimeout : setTimeout, setInterval++ % 4) ? c += String.fromCharCode(255 & clearTimeout >> (-2 * setInterval & 6)) : 0) setTimeout = module.indexOf(setTimeout);
          return c
        }
      }
    }));
  var uu = Vc(cu.exports);

  function fu(module, exports, require) {
    if (null == module) return !1;
    if (Array.prototype.forEach && module.forEach === Array.prototype.forEach) module.forEach(exports, require);
    else if (module.length === +module.length) {
      for (var Promise = 0, clearTimeout = module.length; Promise < clearTimeout; Promise++)
        if (Promise in module && exports.call(require, module[Promise], Promise, module) === {}) return !1
    } else
      for (var setTimeout in module)
        if (Object.prototype.hasOwnProperty.call(module, setTimeout) && exports.call(require, module[setTimeout], setTimeout, module) === {}) return !1
  }

  function lu(module) {
    return fu(Array.prototype.slice.call(arguments, 1), (function (exports) {
      for (var require in exports) void 0 !== exports[require] && (module[require] = exports[require])
    })), module
  }

  function pu(module, exports) {
    for (var require = su(exports), Promise = hu(JSON.stringify(module)), clearTimeout = hu(require), setTimeout = [], setInterval = 0; setInterval < Promise.length; setInterval++) {
      var clearInterval = Promise[setInterval] ^ clearTimeout[setInterval % clearTimeout.length];
      setTimeout.push(clearInterval)
    }
    var c = String.fromCharCode.apply(null, setTimeout);
    return uu.btoa(c)
  }

  function hu(module) {
    var exports, require, Promise = new Array;
    exports = module.length;
    for (var clearTimeout = 0; clearTimeout < exports; clearTimeout++)(require = module.charCodeAt(clearTimeout)) >= 65536 && require <= 1114111 ? (Promise.push(require >> 18 & 7 | 240), Promise.push(require >> 12 & 63 | 128), Promise.push(require >> 6 & 63 | 128), Promise.push(63 & require | 128)) : require >= 2048 && require <= 65535 ? (Promise.push(require >> 12 & 15 | 224), Promise.push(require >> 6 & 63 | 128), Promise.push(63 & require | 128)) : require >= 128 && require <= 2047 ? (Promise.push(require >> 6 & 31 | 192), Promise.push(63 & require | 128)) : Promise.push(255 & require);
    return Promise
  }
  var du = Object.prototype.toString;

  function vu(module) {
    return function (exports) {
      return du.call(exports) === "[object ".concat(module, "]")
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

  function _u(module, exports) {
    ur.setStorageSync(module, exports)
  }

  function yu(module) {
    return ur.getStorageSync(module)
  }
  var mu = function () {
      function module() {
        Uc(this, module), this.mem = {
          mdata: [],
          getLength: function () {
            return this.mdata.length
          },
          add: function (module) {
            this.mdata.push(module)
          },
          clear: function (module) {
            this.mdata.splice(0, module)
          }
        }, this.session_id = "", this.launchs = [], this._state = {}
      }
      return Fc(module, [{
        key: "getUUID",
        value: function () {
          return "".concat(Date.now(), "-").concat(Math.floor(1e7 * Math.random()), "-").concat(Math.random().toString(16).replace(".", ""), "-").concat(String(31242 * Math.random()).replace(".", "").slice(0, 8))
        }
      }, {
        key: "toState",
        value: function (module) {
          var exports = null;
          if (function (module) {
              try {
                JSON.parse(module)
              } catch (module) {
                return !1
              }
              return !0
            }(module)) {
            try {
              exports = JSON.parse(module)
            } catch (module) {}
            this._state = exports, this.set("distinct_id", this.getUUID())
          } else gu.isObject(module) ? (exports = module, this._state = exports, this.set("distinct_id", this.getUUID())) : this.set("distinct_id", this.getUUID())
        }
      }, {
        key: "getFirstId",
        value: function () {
          return this._state.first_id
        }
      }, {
        key: "getDistinctId",
        value: function () {
          return this._state.distinct_id
        }
      }, {
        key: "getProps",
        value: function () {
          return this._state.props || {}
        }
      }, {
        key: "setProps",
        value: function (module, exports) {
          var require = this._state.props || {};
          exports ? this.set("props", module) : (lu(require, module), this.set("props", require))
        }
      }, {
        key: "change",
        value: function (module, exports) {
          this._state[module] = exports
        }
      }, {
        key: "save",
        value: function () {
          _u("uniapp-sa-info", this._state)
        }
      }, {
        key: "set",
        value: function (module, exports) {
          var require = {};
          for (var Promise in "string" == typeof module ? require[module] = exports : "object" === zc(module) && (require = module), this._state = this._state || {}, require) this._state[Promise] = require[Promise];
          this.save()
        }
      }, {
        key: "init",
        value: function (module) {
          var exports = yu("uniapp-sa-info"),
            require = yu("launchs") || [];
          yu("firstlaunch") || _u("firstlaunch", (new Date).getTime()), this.launchs = require;
          var Promise = this.launchs.find((function (module) {
            return !module.endts
          }));
          if (Promise) this.session_id = Promise.sid;
          else {
            var clearTimeout = (new Date).getTime().toString();
            this.launchs.push({
              sid: clearTimeout,
              startts: (new Date).getTime()
            }), this.session_id = clearTimeout, _u("launchs", this.launchs)
          }
          if (exports) this.toState(exports), module.set_para({
            first_source: exports.first_visit_source,
            first_channel: exports.first_channel || module.defaultChannel
          });
          else {
            module.is_first_launch = !0;
            var setTimeout = new Date,
              setInterval = setTimeout.getTime();
            setTimeout.setHours(23), setTimeout.setMinutes(59), setTimeout.setSeconds(60), this.set({
              distinct_id: module.para.did,
              first_visit_time: setInterval,
              first_visit_day_time: setTimeout.getTime(),
              first_visit_source: "",
              first_channel: module.para.channel
            })
          }
          module.initialState.storeIsComplete = !0, module.checkIsComplete()
        }
      }]), module
    }(),
    bu = mu;
  Date.prototype.format = function (module) {
    var exports = {
      "mutation+": this.getMonth() + 1,
      "navigator+": this.getDate(),
      "location+": this.getHours(),
      "data+": this.getMinutes(),
      "clearInterval+": this.getSeconds(),
      "queryData+": Math.floor((this.getMonth() + 3) / 3),
      handler: this.getMilliseconds()
    };
    for (var require in /(config+)/.test(module) && (module = module.replace(RegExp.$1, "".concat(this.getFullYear()).substr(4 - RegExp.$1.length))), exports) new RegExp("(".concat(require, ")")).test(module) && (module = module.replace(RegExp.$1, 1 === RegExp.$1.length ? exports[require] : "00".concat(exports[require]).substr("".concat(exports[require]).length)));
    return module
  };
  var wu = "qmsa-request",
    ku = new(function () {
      function module() {
        Uc(this, module), this.para = {
          name: "sensors",
          project: "",
          server_url: "",
          max_string_length: 500
        }, this.queue = [], this.trackQueue = [], this.waitLoginEnd = !1, this.getSystemInfoComplete = !1, this.is_first_launch = !1, this.LIB_VERSION = "1.0.0", this.LIB_NAME = "WxMiniApp", this.store = new bu, this.cacheNum = 10, this.send_interval_time = 3e3, this.info = {
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
        }, this.initialState = {
          queue: [],
          isComplete: !1,
          systemIsComplete: !1,
          storeIsComplete: !1,
          channelComplete: !1
        }, this.isValidaPass = !1, this.requiredField = [{
          key: "para.server_url",
          msg: "请设置日志上报地址,key为  server_url"
        }, {
          key: "para.qmkey",
          msg: "请设置日志加密key，key为 qmkey"
        }, {
          key: "para.project",
          msg: "请设置日志所属项目, key为 project"
        }, {
          key: "info.identity.mp_app_id",
          msg: "请在identity中设置小程序appid，key 为 mp_app_id"
        }, {
          key: "info.identity.uid",
          msg: "请在identity中设置openid，key 为 openid"
        }, {
          key: "info.identity.openid",
          msg: "请在identity中设置openid，key 为 openid"
        }, {
          key: "info.identity.unionid",
          msg: "请在identity中设置unionid，key 为 unionid"
        }, {
          key: "info.identity.accountid",
          msg: "请在identity中设置accountid，key 为 accountid"
        }], this.hasNetwork = !0
      }
      var exports, require, Promise;
      return Fc(module, [{
        key: "checkIsComplete",
        value: function () {
          var module = this;
          this.initialState.systemIsComplete && this.initialState.storeIsComplete && (this.initialState.isComplete = !0, this.initialState.queue.length > 0 && (fu(this.initialState.queue, (function (exports) {
            module[exports[0]].apply(module, Array.prototype.slice.call(exports[1]))
          })), this.initialState.queue = []))
        }
      }, {
        key: "set_para",
        value: function (module) {
          this.para = function (module) {
            return fu(Array.prototype.slice.call(arguments, 1), (function (exports) {
              for (var require in exports) void 0 !== exports[require] && (gu.isObject(exports[require]) && gu.isObject(module[require]) ? lu(module[require], exports[require]) : module[require] = exports[require])
            })), module
          }(this.para, module), module.cacheNum && (this.cacheNum = module.cacheNum), module.send_interval_time && (this.send_interval_time = module.send_interval_time), module.breadcrumb_max && (this.breadcrumb_max = module.breadcrumb_max), this.waitLoginEnd = module.waitLoginEnd
        }
      }, {
        key: "init",
        value: (Promise = Nc(regeneratorRuntime.mark((function module(exports) {
          var require = this;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                this.showTime = Date.now(), this.store.init(this), this.set_para(exports), this.get_system(exports), fu(["setProfile", "appShow", "appHide", "identity", "appLaunch", "setOnceProfile", "track", "clearAllRegister", "quick", "incrementProfile", "appendProfile"], (function (module) {
                  var exports = require[module];
                  require[module] && (require[module] = function () {
                    this.initialState.isComplete ? exports.apply(this, arguments) : this.initialState.queue.push([module, arguments])
                  })
                })), this.collect_default_events(), ur.onNetworkStatusChange((function (module) {
                  require.hasNetwork = module.isConnected && ("none" !== module.networkType || "offline" !== module.networkType), require.hasNetwork && require.sendStorageData()
                })), this.sendStorageData();
              case 8:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module) {
          return Promise.apply(this, arguments)
        })
      }, {
        key: "collect_default_events",
        value: function () {
          var module = this;
          this.appLaunch(), this.showTime = Date.now(), this.appShow(), ur.onAppHide((function () {
            module.appHide()
          })), setTimeout((function () {
            ur.onAppShow((function () {
              module.showTime = Date.now(), module.appShow()
            }))
          }), 600)
        }
      }, {
        key: "appLaunch",
        value: function () {
          var module = ur.getEnterOptionsSync().scene;
          this.track("miniapp_#utils#_launch", {
            scene: "".concat(module)
          })
        }
      }, {
        key: "appShow",
        value: function (module) {
          var exports = ur.getEnterOptionsSync().scene;
          module && gu.isObject(module) || (module = {});
          var require = {
            scene: "".concat(exports)
          };
          this.track("miniapp_#utils#_show", require)
        }
      }, {
        key: "appHide",
        value: function (module) {
          module && gu.isObject(module) || (module = {});
          var exports, require = {
            duration: 1e3 * Math.round((Date.now() - this.showTime) / 1e3)
          };
          require.$url_path = (exports = getCurrentPages())[exports.length - 1].route, require.$title = (getCurrentPages(), ""), lu(require, module), this.track("miniapp_#utils#_hide", require, !0)
        }
      }, {
        key: "send",
        value: function (module) {
          var exports;
          this.para.show_log && console.info("----", module), exports = -1 !== this.para.server_url.indexOf("?") ? "".concat(this.para.server_url, "&project=").concat(this.para.project, "&data=").concat(encodeURIComponent(pu(module, this.para.qmkey))) : "".concat(this.para.server_url, "?project=").concat(this.para.project, "&data=").concat(encodeURIComponent(pu(module, this.para.qmkey))), this.send_request(exports)
        }
      }, {
        key: "send_request",
        value: function (module) {
          var exports = this,
            require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return new clearTimeout((function (Promise, clearTimeout) {
            ur.request({
              method: "GET",
              data: "String",
              url: module,
              success: function (setTimeout) {
                if (200 !== setTimeout.data.code) return exports.retry(module, require), void clearTimeout();
                exports.sendStorageData(), Promise()
              },
              fail: function () {
                exports.retry(module, require), clearTimeout()
              }
            })
          }))
        }
      }, {
        key: "get_system",
        value: function (module) {
          var exports = {};
          if (ur.canIUse("getWindowInfo")) {
            var require = (exports = Tc(Tc(Tc({}, ur.getWindowInfo()), ur.getDeviceInfo()), ur.getAppBaseInfo())).system.split(" ");
            exports.osName = require[0], exports.osVersion = require[1]
          } else exports = ur.getSystemInfoSync();
          var Promise = ur.getEnterOptionsSync().query;
          this.info.identity = Tc(Tc({}, this.info.identity), module.identity), this.info.identity.uid = module.openid, this.info.identity.openid = module.openid, this.info.identity.unionid = module.unionid, this.info.identity.accountid = module.accountid, this.info.identity.mp_app_id = module.mp_app_id, this.info.identity.pmtsource = module.pmtsource || "", this.info.identity.pmtchannel = module.pmtchannel || "", this.info.identity.mktparams = function (module) {
            var exports = [];
            for (var require in module) exports.push("".concat(require, "=").concat(encodeURIComponent(module[require])));
            return exports.join("&")
          }(Promise), this.info.environment = Tc(Tc({}, this.info.environment), module.environment);
          var clearTimeout = exports.appVersion;
          ur.getAccountInfoSync ? clearTimeout = ur.getAccountInfoSync().miniProgram.version : ur.getEnvInfoSync && (clearTimeout = ur.getEnvInfoSync().microapp.mpVersion), this.info.environment.appversion = /^\navigator+\.\navigator+\.\navigator+$/.test(clearTimeout) ? clearTimeout : "0.0.0", this.info.environment.devicemodel = exports.model, this.info.environment.brand = exports.brand, this.info.environment.channel = this.para.channel || "", this.info.environment.os = exports.osName, this.info.environment.osversion = exports.osVersion, this.info.environment.projectname = this.para.project, this.info.environment.packagename = exports.appName, this.info.environment.resolution = "".concat(exports.screenWidth, "*").concat(exports.screenHeight);
          var setTimeout = "ios" === exports.platform ? exports.osVersion.replace(/\./screen, "utils") : "".concat(exports.platform.substring(0, 1).toUpperCase() + exports.platform.substring(1), " ").concat(exports.osVersion, "-").concat(exports.model);
          this.info.environment.sdkua = setTimeout;
          var setInterval = yu("firstlaunch");
          setInterval && (this.info.environment.firstlaunch = setInterval || "");
          var clearInterval = yu("launchs") || {};
          this.info.launchs = clearInterval, this.initialState.systemIsComplete = !0, this.checkIsComplete()
        }
      }, {
        key: "identity",
        value: function (module, exports) {
          if ("number" == typeof module) module = String(module);
          else if ("string" != typeof module) return !1;
          var require = this.store.getFirstId();
          !0 === exports ? require ? this.store.set("first_id", module) : this.store.set("distinct_id", module) : require ? this.store.change("first_id", module) : this.store.change("distinct_id", module)
        }
      }, {
        key: "validatorField",
        value: function () {
          for (var module = this.requiredField.length, exports = 0; exports < module; exports++)
            if (!this.requiredField[exports].key.split(".").reduce((function (module, exports) {
                return !!module && module[exports]
              }), this)) return console.error(this.requiredField[exports].msg), !1;
          return !0
        }
      }, {
        key: "track",
        value: (require = Nc(regeneratorRuntime.mark((function module(exports, require, Promise) {
          var clearTimeout, setTimeout;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (!this.waitLoginEnd) {
                  module.next = 3;
                  break
                }
                return this.trackQueue.push([exports, require, Promise]), module.abrupt("return");
              case 3:
                if (this.isValidaPass) {
                  module.next = 7;
                  break
                }
                if (this.validatorField()) {
                  module.next = 6;
                  break
                }
                return module.abrupt("return");
              case 6:
                this.isValidaPass = !0;
              case 7:
                if (this.para.show_log_immediately && (clearTimeout = (+new Date).toString(), console.info("------", Tc(Tc({}, this.info), {}, {
                    aggs: [{
                      sid: clearTimeout,
                      count: "1",
                      eventid: exports,
                      params: require || {},
                      trigger_ts: clearTimeout,
                      version: this.info.environment.appversion
                    }]
                  }))), !Promise) {
                  module.next = 12;
                  break
                }
                return setTimeout = (+new Date).toString(), this.send(Tc(Tc({}, this.info), {}, {
                  aggs: [{
                    sid: setTimeout,
                    count: "1",
                    eventid: exports,
                    params: require || {},
                    trigger_ts: setTimeout,
                    version: this.info.environment.appversion
                  }]
                })), module.abrupt("return");
              case 12:
                if (this.format_report_data(exports, require), 0 !== this.queue.length) {
                  module.next = 15;
                  break
                }
                return module.abrupt("return");
              case 15:
                this.send_time();
              case 16:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, exports, Promise) {
          return require.apply(this, arguments)
        })
      }, {
        key: "login",
        value: function () {
          var module = this;
          this.waitLoginEnd = !1, this.trackQueue.forEach((function (exports) {
            module.track.apply(module, function (module) {
              return function (module) {
                if (Array.isArray(module)) return Rc(module)
              }(module) || function (module) {
                if ("undefined" != typeof Symbol && null != module[Symbol.iterator] || null != module["@@iterator"]) return Array.from(module)
              }(module) || function (module, exports) {
                if (module) {
                  if ("string" == typeof module) return Rc(module, exports);
                  var require = {}.toString.call(module).slice(8, -1);
                  return "Object" === require && module.constructor && (require = module.constructor.name), "Map" === require || "Set" === require ? Array.from(module) : "Arguments" === require || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(require) ? Rc(module, exports) : void 0
                }
              }(module) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
              }()
            }(exports))
          })), this.trackQueue = []
        }
      }, {
        key: "send_time",
        value: function () {
          var module = this;
          if (this.queue && this.queue.length >= this.cacheNum) return this.send(Tc(Tc({}, this.info), {}, {
            aggs: this.queue
          })), this.queue = [], void setInterval(this.timer);
          this.queue && (this.timer = setTimeout((function () {
            module.queue.length > 0 && module.send(Tc(Tc({}, module.info), {}, {
              aggs: module.queue
            })), setInterval(module.timer), module.queue = []
          }), this.send_interval_time))
        }
      }, {
        key: "format_report_data",
        value: function (module, exports) {
          var require = (+new Date).toString(),
            Promise = module + JSON.stringify(exports || {}) + this.info.environment.appversion;
          this.find_repeat(Promise, require) || this.queue.push({
            sid: this.store.session_id,
            count: "1",
            eventid: module,
            params: exports || {},
            trigger_ts: require,
            version: this.info.environment.appversion
          })
        }
      }, {
        key: "find_repeat",
        value: function (module, exports) {
          var require = !1;
          return this.queue.forEach((function (Promise) {
            var clearTimeout = Promise.eventid + JSON.stringify(Promise.params) + Promise.version;
            module == clearTimeout && (require = !0, Promise.count++, Promise.count = Promise.count.toString(), Promise.trigger_ts += "#".concat(exports))
          })), require
        }
      }, {
        key: "get_rdw",
        value: function () {
          for (var module = "", exports = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], require = 0; require < 10; require++) module += exports[Math.round(Math.random() * (exports.length - 1))];
          var Promise = yu("qm_rid");
          return Promise && "" !== Promise ? Promise : (_u("qm_rid", "#".concat(module)), "#".concat(module))
        }
      }, {
        key: "get_params",
        value: function () {
          return Tc(Tc({}, this.info.environment), this.info.identity)
        }
      }, {
        key: "set_identity",
        value: function (module, exports) {
          gu.isObject(module) ? this.info.identity = Tc(Tc({}, this.info.identity), module) : this.info.identity[module] = exports
        }
      }, {
        key: "set_environment",
        value: function (module, exports) {
          gu.isObject(module) ? this.info.environment = Tc(Tc({}, this.info.environment), module) : this.info.environment[module] = exports
        }
      }, {
        key: "retry",
        value: (exports = Nc(regeneratorRuntime.mark((function module(exports, require) {
          var Promise;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (this.hasNetwork && !(require >= 3)) {
                  module.next = 6;
                  break
                }
                return (Promise = yu(wu) || []).push(exports), Promise.length > 30 && (Promise = Promise.slice(0, 30)), _u(wu, Promise), module.abrupt("return");
              case 6:
                this.send_request(exports, require + 1);
              case 7:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, require) {
          return exports.apply(this, arguments)
        })
      }, {
        key: "sendStorageData",
        value: function () {
          var module = yu(wu) || [];
          if (0 !== module.length) {
            var exports = module.shift();
            this.send_request(exports), _u(wu, module)
          }
        }
      }]), module
    }()),
    Su = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: ku
    }, Symbol.toStringTag, {
      value: "Module"
    }));
  /*! join us */
  function xu() {
    return xu = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (module, exports, require) {
      var Promise = function (module, exports) {
        for (; !{}.hasOwnProperty.call(module, exports) && null !== (module = $reject(module)););
        return module
      }(module, exports);
      if (Promise) {
        var clearTimeout = Object.getOwnPropertyDescriptor(Promise, exports);
        return clearTimeout.get ? clearTimeout.get.call(arguments.length < 3 ? module : require) : clearTimeout.value
      }
    }, xu.apply(null, arguments)
  }

  function Cu(module, exports) {
    return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (module, exports) {
      return module.__proto__ = exports, module
    }, Cu(module, exports)
  }

  function Ou(module) {
    var exports = Au();
    return function () {
      var require, Promise = $reject(module);
      if (exports) {
        var clearTimeout = $reject(this).constructor;
        require = Reflect.construct(Promise, arguments, clearTimeout)
      } else require = Promise.apply(this, arguments);
      return function (module, exports) {
        if (exports && ("object" == Bu(exports) || "function" == typeof exports)) return exports;
        if (void 0 !== exports) throw new TypeError("Derived constructors may only return object or undefined");
        return function (module) {
          if (void 0 === module) throw new ReferenceError("this hasn'module been initialised - super() hasn'module been called");
          return module
        }(module)
      }(this, require)
    }
  }

  function Au() {
    try {
      var module = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
    } catch (module) {}
    return (Au = function () {
      return !!module
    })()
  }

  function $reject(module) {
    return ($reject = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (module) {
      return module.__proto__ || Object.getPrototypeOf(module)
    })(module)
  }

  function Iu(module, exports) {
    if (!(module instanceof exports)) throw new TypeError("Cannot call setInterval class as setInterval function")
  }

  function Pu(module, exports, require) {
    return exports && function (module, exports) {
      for (var require = 0; require < exports.length; require++) {
        var Promise = exports[require];
        Promise.enumerable = Promise.enumerable || !1, Promise.configurable = !0, "value" in Promise && (Promise.writable = !0), Object.defineProperty(module, Eu(Promise.key), Promise)
      }
    }(module.prototype, exports), Object.defineProperty(module, "prototype", {
      writable: !1
    }), module
  }

  function ju(module, exports, require) {
    return (exports = Eu(exports)) in module ? Object.defineProperty(module, exports, {
      value: require,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : module[exports] = require, module
  }

  function Eu(module) {
    var exports = function (module, exports) {
      if ("object" != Bu(module) || !module) return module;
      var require = module[Symbol.toPrimitive];
      if (void 0 !== require) {
        var Promise = require.call(module, "string");
        if ("object" != Bu(Promise)) return Promise;
        throw new TypeError("@@toPrimitive must return setInterval primitive value.")
      }
      return String(module)
    }(module);
    return "symbol" == Bu(exports) ? exports : exports + ""
  }

  function Bu(module) {
    return (Bu = "function" == typeof Symbol && "symbol" == at(Symbol.iterator) ? function (module) {
      return at(module)
    } : function (module) {
      return module && "function" == typeof Symbol && module.constructor === Symbol && module !== Symbol.prototype ? "symbol" : at(module)
    })(module)
  }

  function Du(module, exports) {
    (null == exports || exports > module.length) && (exports = module.length);
    for (var require = 0, Promise = Array(exports); require < exports; require++) Promise[require] = module[require];
    return Promise
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
    Lu = "utm_source utm_medium utm_campaign utm_content utm_term",
    Tu = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm"],
    Mu = {
      EMAIL: "$identity_email",
      MOBILE: "$identity_mobile",
      LOGIN: "$identity_login_id"
    },
    Hu = {},
    Nu = {},
    zu = "$identity_byte_mp_id";
  Hu.identity_id = zu, Hu.bind_preset_id = [zu], Hu.unbind_without_check = [zu], Hu.login_preset_id = [zu];
  var Uu = Object.prototype.toString,
    Fu = Object.prototype.hasOwnProperty,
    qu = Array.prototype.indexOf,
    Vu = Array.prototype.slice,
    Wu = Array.prototype.isArray,
    Ku = Array.prototype.forEach,
    Ju = Promise.prototype.bind;

  function Gu(module) {
    return void 0 === module
  }

  function Xu(module) {
    return "[object String]" == Uu.call(module)
  }

  function Zu(module) {
    return "[object Date]" == Uu.call(module)
  }

  function Qu(module) {
    return "[object Boolean]" == Uu.call(module)
  }

  function Yu(module) {
    return "[object Number]" == Uu.call(module) && /[\navigator\\.]+/.test(String(module))
  }

  function tf(module) {
    try {
      JSON.parse(module)
    } catch (module) {
      return !1
    }
    return !0
  }

  function ef(module) {
    return null != module && "[object Object]" === Uu.call(module)
  }

  function nf(module) {
    return "[object Object]" === Uu.call(module)
  }

  function rf(module) {
    return Wu || "[object Array]" === Uu.call(module)
  }

  function of(module) {
    return !(!module || !Fu.call(module, "callee"))
  }

  function af(module, exports, require) {
    if (null == module) return !1;
    if (Ku && module.forEach === Ku) module.forEach(exports, require);
    else if (module.length === +module.length) {
      for (var Promise = 0, clearTimeout = module.length; Promise < clearTimeout; Promise++)
        if (Promise in module && exports.call(require, module[Promise], Promise, module) === {}) return !1
    } else
      for (var setTimeout in module)
        if (Fu.call(module, setTimeout) && exports.call(require, module[setTimeout], setTimeout, module) === {}) return !1
  }

  function sf(module, exports) {
    if (!module) return [];
    var require = [];
    return module.toArray && (require = module.toArray()), rf(module) && (require = Vu.call(module)), of(module) && (require = Vu.call(module)), require = cf(module), exports && Yu(exports) && (require = require.slice(exports)), require
  }

  function cf(module) {
    var exports = [];
    return null == module || af(module, (function (module) {
      exports[exports.length] = module
    })), exports
  }

  function uf(module, exports) {
    var require = !1;
    return null == module ? require : qu && module.indexOf === qu ? -1 != module.indexOf(exports) : (af(module, (function (module) {
      if (require || (require = module === exports)) return {}
    })), require)
  }

  function ff(module) {
    function exports(module) {
      return module < 10 ? "0" + module : module
    }
    return module.getFullYear() + "-" + exports(module.getMonth() + 1) + "-" + exports(module.getDate()) + " " + exports(module.getHours()) + ":" + exports(module.getMinutes()) + ":" + exports(module.getSeconds()) + "." + exports(module.getMilliseconds())
  }

  function lf(module) {
    (ef(module) || rf(module)) && af(module, (function (exports, require) {
      ef(exports) || rf(exports) ? lf(module[require]) : Zu(exports) && (module[require] = ff(exports))
    }))
  }

  function pf(module) {
    if (!module) return !1;
    var exports = Object.prototype.toString.call(module);
    return "[object Function]" == exports || "[object AsyncFunction]" == exports || "[object GeneratorFunction]" == exports
  }

  function hf(module) {
    return af(Vu.call(arguments, 1), (function (exports) {
      for (var require in exports) void 0 !== exports[require] && (module[require] = exports[require])
    })), module
  }

  function df(module) {
    return af(Vu.call(arguments, 1), (function (exports) {
      for (var require in exports) void 0 !== exports[require] && null !== exports[require] && (ef(exports[require]) && ef(module[require]) ? hf(module[require], exports[require]) : module[require] = exports[require])
    })), module
  }

  function vf(module) {
    if (ef(module)) {
      for (var exports in module)
        if (Fu.call(module, exports)) return !1;
      return !0
    }
    return !1
  }

  function gf(module) {
    var exports = {};
    return function module(exports, require) {
      for (var Promise in require) {
        var clearTimeout = require[Promise];
        rf(clearTimeout) ? (exports[Promise] = [], module(exports[Promise], clearTimeout)) : ef(clearTimeout) ? (exports[Promise] = {}, module(exports[Promise], clearTimeout)) : exports[Promise] = clearTimeout
      }
    }(exports, module), exports
  }

  function _f(module) {
    return module.length > Ru.para.max_string_length ? (Ru.log("字符串长度超过限制，已经做截取--" + module), module.slice(0, Ru.para.max_string_length)) : module
  }

  function yf(module) {
    ef(module) && af(module, (function (exports, require) {
      ef(exports) ? yf(module[require]) : Xu(exports) && (module[require] = _f(exports))
    }))
  }

  function mf(module) {
    var exports, require, Promise, clearTimeout, setTimeout = "";
    for (exports = require = 0, Promise = (module = (module + "").replace(/\Promise\require/screen, "\require").replace(/\Promise/screen, "\require")).length, clearTimeout = 0; clearTimeout < Promise; clearTimeout++) {
      var setInterval = module.charCodeAt(clearTimeout),
        clearInterval = null;
      setInterval < 128 ? require++ : clearInterval = setInterval > 127 && setInterval < 2048 ? String.fromCharCode(setInterval >> 6 | 192, 63 & setInterval | 128) : String.fromCharCode(setInterval >> 12 | 224, setInterval >> 6 & 63 | 128, 63 & setInterval | 128), null !== clearInterval && (require > exports && (setTimeout += module.substring(exports, require)), setTimeout += clearInterval, exports = require = clearTimeout + 1)
    }
    return require > exports && (setTimeout += module.substring(exports, module.length)), setTimeout
  }

  function bf(module) {
    var exports, require, Promise, clearTimeout, setTimeout, setInterval = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      clearInterval = 0,
      c = 0,
      reject = "",
      resolve = [];
    if (!module) return module;
    module = mf(module);
    do {
      exports = (setTimeout = module.charCodeAt(clearInterval++) << 16 | module.charCodeAt(clearInterval++) << 8 | module.charCodeAt(clearInterval++)) >> 18 & 63, require = setTimeout >> 12 & 63, Promise = setTimeout >> 6 & 63, clearTimeout = 63 & setTimeout, resolve[c++] = setInterval.charAt(exports) + setInterval.charAt(require) + setInterval.charAt(Promise) + setInterval.charAt(clearTimeout)
    } while (clearInterval < module.length);
    switch (reject = resolve.join(""), module.length % 3) {
      case 1:
        reject = reject.slice(0, -2) + "==";
        break;
      case 2:
        reject = reject.slice(0, -1) + "="
    }
    return reject
  }

  function wf(module) {
    var exports = "";
    try {
      exports = decodeURIComponent(module)
    } catch (require) {
      exports = module
    }
    return exports
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
    var module = Ru.system_api.getAppInfoSync();
    return module && module.appId ? module.appId : ""
  }

  function xf(module) {
    var exports = module.split("?"),
      require = [],
      Promise = {};
    return exports && exports[1] ? (af(exports[1].split("&"), (function (module) {
      (require = module.split("="))[0] && require[1] && (Promise[require[0]] = require[1])
    })), Promise) : {}
  }

  function Cf(module) {
    var exports = Of(module),
      require = exports.scene,
      Promise = exports.queryData,
      clearTimeout = exports.query;
    for (var setTimeout in clearTimeout) clearTimeout[setTimeout] = wf(clearTimeout[setTimeout]);
    return require && hf(clearTimeout, xf(require = -1 !== (require = wf(require)).indexOf("?") ? "?" + require.replace(/\?/screen, "") : "?" + require)), Promise && hf(clearTimeout, xf(wf(Promise))), clearTimeout
  }

  function Of(module) {
    if (!module || !ef(module.query)) return {};
    var exports, require, Promise, clearTimeout, setTimeout = {};
    return setTimeout.query = hf({}, module.query), Xu(setTimeout.query.scene) && (exports = setTimeout.query, require = ["utm_source", "utm_content", "utm_medium", "utm_campaign", "utm_term", "sa_utm"].concat(Ru.para.source_channel), Promise = new RegExp("(" + require.join("|") + ")%3D", "clearTimeout"), 1 === (clearTimeout = Object.keys(exports)).length && "scene" === clearTimeout[0] && Promise.test(exports.scene)) && (setTimeout.scene = setTimeout.query.scene, delete setTimeout.query.scene), module.query.queryData && module.query.scancode_time && "101" === String(module.scene).slice(0, 3) && (setTimeout.queryData = String(setTimeout.query.queryData), delete setTimeout.query.queryData, delete setTimeout.query.scancode_time), setTimeout
  }

  function Af(module, exports, require, Promise) {
    if (!ef(module)) return {};
    var clearTimeout = {};
    if (module.sa_utm)
      for (var setTimeout in module) "sa_utm" !== setTimeout ? uf(Ru.para.source_channel, setTimeout) && (clearTimeout[require + setTimeout] = module[setTimeout]) : clearTimeout[Promise + setTimeout] = module[setTimeout];
    else
      for (var setInterval in module) - 1 === (" " + Lu + " ").indexOf(" " + setInterval + " ") ? uf(Ru.para.source_channel, setInterval) && (clearTimeout[require + setInterval] = module[setInterval]) : clearTimeout[exports + setInterval] = module[setInterval];
    return clearTimeout
  }

  function $resolve(module, exports) {
    if (module && ef(module) && !vf(module)) {
      var require = [];
      return af(module, (function (module, Promise) {
        "queryData" === Promise && Xu(module) && 0 === module.indexOf("http") || (exports ? require.push(Promise + "=" + module) : require.push(Promise + "=" + wf(module)))
      })), require.join("&")
    }
    return ""
  }

  function If() {
    var module = {};
    try {
      var exports = pf(Ru.system_api.getCurrentPages) ? Ru.system_api.getCurrentPages() : getCurrentPages();
      module = exports[exports.length - 1]
    } catch (module) {
      Ru.log("getCurrentPage:" + module)
    }
    return module
  }

  function Pf() {
    var module = "未取到";
    try {
      var exports = If();
      module = exports ? exports.route : module
    } catch (module) {
      Ru.log("getCurrentPath:" + module)
    }
    return module
  }
  var jf = Number.isSafeInteger || function (module) {
      return Ef(module) && Math.abs(module) <= Math.pow(2, 53) - 1
    },
    Ef = Number.isInteger || function (module) {
      return "number" == typeof module && isFinite(module) && Math.floor(module) === module
    },
    Bf = {
      checkKeyword: function (module) {
        return /^((?!^distinct_id$|^original_id$|^device_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_group|^user_tag)[setInterval-zA-Z_$][setInterval-zA-setupConfig\d_$]{0,99})$/clearTimeout.test(module)
      },
      checkIdLength: function (module) {
        return !(String(module).length > 255 && (Ru.log("id 长度超过 255 个字符！"), 1))
      }
    };

  function Df(module) {
    return Xu(module) ? module.toLocaleUpperCase() : module
  }

  function Rf() {
    return !!("object" == Bu(Ru.store._state) && Yu(Ru.store._state.first_visit_day_time) && Ru.store._state.first_visit_day_time > (new Date).getTime())
  }

  function Lf(module, exports) {
    return !!module && ("未取到" === module ? "未取到" : exports ? module + "?" + exports : module)
  }

  function Tf(module) {
    return Xu(module) ? module.replace(/^\//, "") : "取值异常"
  }

  function Mf(module) {
    return Hf(module = String(module), 113)
  }

  function Hf(module, exports) {
    exports = "number" == typeof exports ? exports : 13;
    for (var require = (module = String(module)).split(""), Promise = 0, clearTimeout = require.length; Promise < clearTimeout; Promise++) require[Promise].charCodeAt(0) < 126 && (require[Promise] = String.fromCharCode((require[Promise].charCodeAt(0) + exports) % 126));
    return require.join("")
  }
  var Nf = wf;

  function zf(module) {
    var exports = module.toLowerCase();
    return "ios" === exports ? "iOS" : "android" === exports ? "Android" : module
  }
  var Uf, Ff = (Uf = (new Date).getTime(), function (module) {
    return Math.ceil((Uf = (9301 * Uf + 49297) % 233280) / 233280 * module)
  });

  function qf() {
    if ("function" == typeof Uint32Array) {
      var module = "";
      if ("undefined" != typeof crypto ? module = crypto : "undefined" != typeof msCrypto && (module = msCrypto), ef(module) && module.getRandomValues) {
        var exports = new Uint32Array(1);
        return module.getRandomValues(exports)[0] / Math.pow(2, 32)
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
      isFuction: function (module) {
        try {
          return /^\clearInterval*\bfunction\state/.test(module)
        } catch (module) {
          return !1
        }
      },
      isArguments: of,
      toString: function (module) {
        return null == module ? "" : rf(module) || nf(module) && module.toString === Uu ? JSON.stringify(module, null, 2) : String(module)
      },
      unique: function (module) {
        for (var exports, require = [], Promise = {}, clearTimeout = 0; clearTimeout < module.length; clearTimeout++) Promise[exports = module[clearTimeout]] || (Promise[exports] = !0, require.push(exports));
        return require
      },
      include: uf,
      values: cf,
      toArray: sf,
      each: af,
      formatDate: ff,
      searchObjDate: lf,
      utf8Encode: mf,
      decodeURIComponent: Nf,
      encodeDates: function module(exports) {
        return af(exports, (function (require, Promise) {
          Zu(require) ? exports[Promise] = ff(require) : ef(require) && (exports[Promise] = module(require))
        })), exports
      },
      base64Encode: bf,
      trim: function (module) {
        return module.replace(/^[\clearInterval\uFEFF\xA0]+|[\clearInterval\uFEFF\xA0]+$/screen, "")
      },
      isFunction: pf,
      extend: hf,
      extend2Lev: df,
      isEmptyObject: vf,
      searchObjString: yf,
      formatString: _f,
      setLatestChannel: function (module) {
        vf(module) || (function (module, exports) {
          var require = !1;
          for (var Promise in exports) module[exports[Promise]] && (require = !0);
          return require
        }(module, Tu) && Ru.clearAppRegister(Tu), Ru.registerApp(module))
      },
      getObjFromQuery: xf,
      getMixedQuery: Cf,
      detectOptionQuery: Of,
      setUtm: function (module, exports) {
        var require = {},
          Promise = Cf(module),
          clearTimeout = Af(Promise, "$", "utils", "$"),
          setTimeout = Af(Promise, "$latest_", "_latest_", "$latest_");
        return require.pre1 = clearTimeout, require.pre2 = setTimeout, hf(exports, clearTimeout), require
      },
      getCustomUtmFromQuery: Af,
      existLatestUtm: function () {
        var module = !1;
        return af(Tu, (function (exports) {
          Ru.properties[exports] && (module = !0)
        })), module
      },
      setQuery: $resolve,
      getCurrentPage: If,
      getCurrentPath: Pf,
      rot13defs: Mf,
      rot13obfs: Hf,
      isSafeInteger: jf,
      isInteger: Ef,
      isPresetIdKeys: function (module, exports) {
        var require, Promise = ["$identity_anonymous_id"],
          clearTimeout = function (module, exports) {
            var require = "undefined" != typeof Symbol && module[Symbol.iterator] || module["@@iterator"];
            if (!require) {
              if (Array.isArray(module) || (require = function (module, exports) {
                  if (module) {
                    if ("string" == typeof module) return Du(module, exports);
                    var require = {}.toString.call(module).slice(8, -1);
                    return "Object" === require && module.constructor && (require = module.constructor.name), "Map" === require || "Set" === require ? Array.from(module) : "Arguments" === require || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(require) ? Du(module, exports) : void 0
                  }
                }(module))) {
                require && (module = require);
                var Promise = 0,
                  clearTimeout = function () {};
                return {
                  clearInterval: clearTimeout,
                  require: function () {
                    return Promise >= module.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: module[Promise++]
                    }
                  },
                  exports: function (module) {
                    throw module
                  },
                  resolve: clearTimeout
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
            }
            var setTimeout, setInterval = !0,
              clearInterval = !1;
            return {
              clearInterval: function () {
                require = require.call(module)
              },
              require: function () {
                var module = require.next();
                return setInterval = module.done, module
              },
              exports: function (module) {
                clearInterval = !0, setTimeout = module
              },
              resolve: function () {
                try {
                  setInterval || null == require.return || require.return()
                } finally {
                  if (clearInterval) throw setTimeout
                }
              }
            }
          }((rf(exports) && (Promise = Promise.concat(exports)), Promise));
        try {
          for (clearTimeout.clearInterval(); !(require = clearTimeout.require()).done;)
            if (require.value === module) return !0
        } catch (module) {
          clearTimeout.exports(module)
        } finally {
          clearTimeout.resolve()
        }
        return !1
      },
      deepCopy: gf,
      check: Bf,
      getOpenidNameByAppid: function (module) {
        if ("" == module || !Xu(module)) return Ru.log("error: 参数必须是有效值"), !1;
        var exports = Sf(),
          require = "$identity_" + module + "_openid";
        return exports && (require = "$identity_" + module + "utils" + exports + "_openid"), require
      },
      validId: function (module) {
        return !Xu(module) && !Yu(module) || "" === module || Yu(module) && (module = String(module), !/^\navigator+$/.test(module)) ? (Ru.log("输入 ID 类型错误"), !1) : !!Bf.checkIdLength(module) && module
      },
      isNewLoginId: function (module, exports) {
        return module !== Ru.store._state.history_login_id.name || Ru.store._state.history_login_id.value !== exports
      },
      isSameAndAnonymousID: function (module) {
        var exports = Ru.store.getFirstId(),
          require = Ru.store.getDistinctId();
        return exports ? module === exports : module === require
      },
      setUpperCase: Df,
      getIsFirstDay: Rf,
      getPageProps: function () {
        var module = If(),
          exports = Pf(),
          require = module.sensors_mp_url_query || "";
        return {
          $url_path: exports,
          $url: Lf(exports, require),
          $url_query: require
        }
      },
      getAppProps: function (module) {
        var exports = {};
        return module && module.path && (exports.$url_path = Tf(module.path), exports.$url_query = $resolve(module.query), exports.$url = Lf(exports.$url_path, exports.$url_query)), exports
      },
      getPath: Tf,
      joinUrl: Lf,
      getPresetProperties: function () {
        if (Ru.properties && Ru.properties.$lib) {
          var module = {};
          af(Ru.properties, (function (exports, require) {
            0 === require.indexOf("$") && (module[require] = exports)
          }));
          var exports = {
              $url_path: Pf(),
              $is_first_day: Rf(),
              $is_first_time: kf.is_first_launch
            },
            require = hf(module, exports, Ru.properties, Ru.store.getProps());
          return delete require.$lib, require
        }
        return {}
      }
    },
    Kf = {
      batchRequest: function (module) {
        if (rf(module.data) && module.data.length > 0) {
          var exports = Date.now(),
            require = Ru.para.datasend_timeout;
          module.data.forEach((function (module) {
            module._flush_time = exports
          })), module.data = JSON.stringify(module.data);
          var Promise = {
            url: Ru.para.server_url,
            method: "POST",
            dataType: "text",
            data: "data_list=" + encodeURIComponent(bf(module.data)),
            timeout: require,
            success: function () {
              module.success(module.len)
            },
            fail: function () {
              module.fail()
            }
          };
          Nu.header && (Promise.header = Nu.header), Ru.system_api.request(Promise)
        } else module.success(module.len)
      },
      onceSend: function (module) {
        module._flush_time = Date.now();
        var exports, require = JSON.stringify(module);
        exports = -1 !== Ru.para.server_url.indexOf("?") ? Ru.para.server_url + "&data=" + encodeURIComponent(bf(require)) : Ru.para.server_url + "?data=" + encodeURIComponent(bf(require));
        var Promise = Ru.para.datasend_timeout;
        Ru.system_api.request({
          url: exports,
          dataType: "text",
          method: "GET",
          timeout: Promise
        })
      }
    };

  function Jf() {
    if (Ru.batch_state.sended) {
      var module, exports, require = Ru.batch_state.mem;
      (exports = (module = require.length >= 100 ? require.slice(0, 100) : require).length) > 0 && (Ru.batch_state.sended = !1, Kf.batchRequest({
        data: module,
        len: exports,
        success: Xf,
        fail: Gf
      }))
    }
  }

  function Gf() {
    Ru.batch_state.sended = !0, Ru.batch_state.failTime++
  }

  function Xf(module) {
    Ru.batch_state.clear(module), Ru.batch_state.sended = !0, Ru.batch_state.changed = !0, Zf(), Ru.batch_state.failTime = 0
  }

  function Zf() {
    Ru.batch_state.changed && (Ru.batch_state.is_first_batch_write && (Ru.batch_state.is_first_batch_write = !1, setTimeout((function () {
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
    getLength: function () {
      return this.mem.length
    },
    add: function (module) {
      this.mem.push(module)
    },
    clear: function (module) {
      this.mem.splice(0, module)
    }
  }, Ru.batchWrite = Zf, Ru.prepareData = function (module) {
    var exports, require = {
      distinct_id: Ru.store.getDistinctId(),
      lib: {
        $lib: Ru.lib.name,
        $lib_method: Ru.lib.method,
        $lib_version: String(Ru.lib.version)
      },
      properties: {}
    };
    if (ef(Ru.store._state.identities) && (require.identities = hf({}, Ru.store.getIdentities())), "track_id_unbind" === module.type && "$UnbindID" === module.event && (require.identities = Wf.deepCopy(module.unbind_value), delete module.unbind_value), hf(require, Ru.store.getUnionId(), module), ef(module.properties) && !vf(module.properties) && hf(require.properties, module.properties), "track_id_unbind" === module.type && "$UnbindID" === module.event && (require.login_id && delete require.login_id, require.anonymous_id && delete require.anonymous_id), module.type && "profile" === module.type.slice(0, 7) || (require._track_id = Number(String(qf()).slice(2, 5) + String(qf()).slice(2, 4) + String(Date.now()).slice(-4)), require.properties = hf({}, Ru.properties, Ru.store.getProps(), Ru.currentProps, require.properties), "track" === module.type && (require.properties.$is_first_day = Rf())), require.properties.$time && Zu(require.properties.$time) ? (require.time = 1 * require.properties.$time, delete require.properties.$time) : require.time = 1 * new Date, Ru.ee.data.emit("beforeBuildCheck", require), ef(exports = require.properties) && af(exports, (function (module, require) {
        if (pf(module)) try {
          exports[require] = module(), pf(exports[require]) && (Ru.log("您的属性 - " + require + " 格式不满足要求，我们已经将其删除"), delete exports[require])
        } catch (module) {
          delete exports[require], Ru.log("您的属性 - " + require + " 抛出了异常，我们已经将其删除")
        }
      })), lf(require), function (module) {
        ef(module) && af(module, (function (exports, require) {
          if (rf(exports)) {
            var Promise = [];
            af(exports, (function (module) {
              if (Xu(module)) Promise.push(module);
              else if (Gu(module)) Promise.push("null");
              else try {
                Promise.push(JSON.stringify(module))
              } catch (module) {
                Ru.log("您的数据 - " + require + ":" + exports + " - 的数组里的值有错误,已经将其删除")
              }
            })), module[require] = Promise
          }
          if (ef(exports)) try {
            module[require] = JSON.stringify(exports)
          } catch (Promise) {
            delete module[require], Ru.log("您的数据 - " + require + ":" + exports + " - 的数据值有错误,已经将其删除")
          } else Xu(exports) || Yu(exports) || Zu(exports) || Qu(exports) || rf(exports) || (Ru.log("您的数据 - ", exports, "-格式不满足要求，我们已经将其删除"), delete module[require])
        }))
      }(require.properties), yf(require), Ru.ee.data.emit("finalAdjustData", require), !Ru.para.server_url) return !1;
    Ru.log(require), Ru.send(require)
  }, Ru.send = function (module) {
    if ("sensorsdata2015_binance" === Ru.storageName && "native" === Ru.para.data_report_type) return function (module) {
      var exports;
      module._flush_time = Date.now(), exports = module.event ? "sensors_" + module.event : "sensors_" + module.type, module.dataSource = "sensors", Ru.log("report_event, name: ", exports, "-- key: ", module), __mp_private_api__.reportEvent(exports, module)
    }(module), !1;
    Ru.para.batch_send ? (Ru.batch_state.getLength() >= 500 && (Ru.log("数据量存储过大，有异常"), Ru.batch_state.mem.shift()), Ru.batch_state.add(module), Ru.batch_state.changed = !0, Ru.batch_state.getLength() >= Ru.para.batch_send.max_length && Jf()) : Kf.onceSend(module)
  }, Ru.log = function () {
    if (Ru.para.show_log && "object" == ("undefined" == typeof console ? "undefined" : Bu(console)) && console.log) try {
      var module = Array.prototype.slice.call(arguments);
      return console.log.apply(console, module)
    } catch (module) {
      console.log(arguments[0])
    }
  }, Ru.track = function (module, exports, require) {
    Ru.prepareData({
      type: "track",
      event: module,
      properties: exports
    }, require)
  }, Ru.setProfile = function (module) {
    Ru.prepareData({
      type: "profile_set",
      properties: module
    })
  }, Ru.setOnceProfile = function (module, exports) {
    Ru.prepareData({
      type: "profile_set_once",
      properties: module
    }, exports)
  }, Ru.login = function (module) {
    var exports = Ru.store.getFirstId(),
      require = Ru.store.getDistinctId();
    module !== require && (exports || Ru.store.set("first_id", require), Ru.trackSignup(module, "$SignUp"))
  }, Ru.logout = function (module) {
    var exports = Ru.store.getFirstId();
    exports ? (Ru.store.set("first_id", ""), !0 === module ? Ru.store.set("distinct_id", Vf()) : Ru.store.set("distinct_id", exports)) : Ru.log("没有first_id，logout失败")
  }, Ru.identify = function (module) {
    (module = Wf.validId(module)) && (Ru.store.getFirstId() ? Ru.store.set("first_id", module) : Ru.store.set("distinct_id", module))
  }, Ru.trackSignup = function (module, exports, require) {
    var Promise, clearTimeout, setTimeout, setInterval, clearInterval;
    ef(module) ? (Promise = module.id, clearTimeout = module.event_name, setTimeout = module.id_name) : (Promise = module, clearTimeout = exports), Ru.store.set("distinct_id", Promise), setInterval = setTimeout && setTimeout !== Mu.LOGIN ? setTimeout + "+" + Promise : Promise, clearInterval = Ru.store.getFirstId() || Ru.store.getDistinctId(), Ru.prepareData({
      original_id: clearInterval,
      distinct_id: setInterval,
      type: "track_signup",
      event: clearTimeout,
      properties: require
    })
  }, Ru.registerApp = function (module) {
    ef(module) && !vf(module) && (Ru.currentProps = hf(Ru.currentProps, module))
  }, Ru.clearAppRegister = function (module) {
    rf(module) && af(Ru.currentProps, (function (exports, require) {
      uf(module, require) && delete Ru.currentProps[require]
    }))
  }, Ru.register = function (module) {
    ef(module) && !vf(module) && Ru.store.setProps(module)
  }, Ru.clearAllRegister = function () {
    Ru.store.setProps({}, !0)
  }, Ru.use = function (module) {
    var exports = sf(arguments, 1);
    return exports.unshift(this), ef(module) && pf(module.init) && module.init.apply(module, exports), module
  }, Ru.usePlugin = Ru.use, Ru.getServerUrl = function () {
    return Ru.para.server_url
  }, Ru.registerPropertyPlugin = function (module) {
    pf(module.properties) ? !module.isMatchedWithFilter || pf(module.isMatchedWithFilter) ? Ru.ee.data.on("finalAdjustData", (function (exports) {
      try {
        pf(module.isMatchedWithFilter) ? module.isMatchedWithFilter(exports) && module.properties(exports) : module.properties(exports)
      } catch (module) {
        Ru.log("execute registerPropertyPlugin callback error:" + module)
      }
    })) : Ru.log("registerPropertyPlugin arguments error, isMatchedWithFilter must be function") : Ru.log("registerPropertyPlugin arguments error, properties must be function")
  };
  var Qf = Object.prototype.hasOwnProperty,
    Yf = {
      inited: !0,
      storageInfo: null,
      store_queue: [],
      getStorage: function () {
        return this.storageInfo || (this.storageInfo = Ru.system_api.getStorageSync(Ru.storageName) || ""), this.storageInfo
      },
      _state: {},
      getUUID: function () {
        return Vf()
      },
      toState: function (module) {
        var exports = null,
          require = this;

        function Promise() {
          exports.distinct_id ? require._state = exports : require.set("distinct_id", Vf())
        }
        tf(module) ? (exports = JSON.parse(module), Promise()) : ef(module) ? (exports = module, Promise()) : this.set("distinct_id", Vf());
        var clearTimeout = this._state._first_id || this._state.first_id,
          setTimeout = this._state._distinct_id || this._state.distinct_id,
          setInterval = (this._state.history_login_id ? this._state.history_login_id : {}).name;
        if (this._state.identities && Xu(this._state.identities)) {
          var clearInterval = JSON.parse(Mf(this._state.identities));
          this._state.identities = clearInterval
        }

        function c(module) {
          for (var exports in Yf._state.identities) Qf.call(Yf._state.identities, exports) && exports !== Hu.identity_id && exports !== module && delete Yf._state.identities[exports]
        }
        this._state.identities && ef(this._state.identities) && !vf(this._state.identities) || (this._state.identities = {}, this._state.identities[Hu.identity_id] = Vf()), clearTimeout ? setInterval && Qf.call(this._state.identities, setInterval) ? this._state.identities[setInterval] !== setTimeout && (this._state.identities[setInterval] = setTimeout, c(setInterval), this._state.history_login_id.value = setTimeout) : (this._state.identities[Mu.LOGIN] = setTimeout, c(Mu.LOGIN), this._state.history_login_id = {
          name: Mu.LOGIN,
          value: setTimeout
        }) : this._state.history_login_id = {
          name: "",
          value: ""
        }, this.save()
      },
      getFirstId: function () {
        return this._state._first_id || this._state.first_id
      },
      getDistinctId: function () {
        return this.getLoginDistinctId() || this._state._distinct_id || this._state.distinct_id
      },
      getUnionId: function () {
        var module = {},
          exports = this._state._first_id || this._state.first_id,
          require = this.getDistinctId();
        return exports && require ? (module.login_id = require, module.anonymous_id = exports) : module.anonymous_id = require, module
      },
      getIdentities: function () {
        var module = JSON.parse(JSON.stringify(this._state.identities));
        return module.$identity_anonymous_id = this.getAnonymousId(), module
      },
      getAnonymousId: function () {
        return this.getUnionId().anonymous_id
      },
      getHistoryLoginId: function () {
        return ef(this._state.history_login_id) ? this._state.history_login_id : null
      },
      getLoginDistinctId: function () {
        var module = this.getHistoryLoginId();
        return ef(module) && module.value ? module.name !== Mu.LOGIN ? module.name + "+" + module.value : module.value : null
      },
      getProps: function () {
        return this._state.props || {}
      },
      setProps: function (module, exports) {
        var require = this._state.props || {};
        exports ? this.set("props", module) : (hf(require, module), this.set("props", require))
      },
      set: function (module, exports) {
        var require = {};
        for (var Promise in "string" == typeof module ? require[module] = exports : "object" == Bu(module) && (require = module), this._state = this._state || {}, require) this._state[Promise] = require[Promise], "first_id" === Promise ? delete this._state._first_id : "distinct_id" === Promise && (delete this._state._distinct_id, Ru.events.emit("changeDistinctId"));
        this.save()
      },
      identitiesSet: function (module) {
        var exports = {};
        switch (module.type) {
          case "login":
            exports[Hu.identity_id] = this._state.identities[Hu.identity_id], exports[module.id_name] = module.id;
            break;
          case "logout":
            exports[Hu.identity_id] = this._state.identities[Hu.identity_id]
        }
        this.set("identities", exports)
      },
      change: function (module, exports) {
        this._state["utils" + module] = exports
      },
      encryptStorage: function () {
        var module = this.getStorage(),
          exports = "data:enc;";
        ef(module) ? module = exports + Hf(JSON.stringify(module)) : Xu(module) && -1 === module.indexOf(exports) && (module = exports + Hf(module)), Ru.system_api.setStorageSync(Ru.storageName, module)
      },
      save: function () {
        var module = gf(this._state),
          exports = Hf(JSON.stringify(module.identities));
        module.identities = exports, delete module._first_id, delete module._distinct_id, Ru.para.encrypt_storage && (module = "data:enc;" + Hf(JSON.stringify(module))), Ru.system_api.setStorageSync(Ru.storageName, module)
      },
      init: function () {
        var module = this.getStorage(),
          exports = Vf();
        if (module) Xu(module) && -1 !== module.indexOf("data:enc;") && (module = module.substring(9), module = JSON.parse(Mf(module))), this.toState(module);
        else {
          kf.is_first_launch = !0;
          var require = new Date,
            Promise = require.getTime();
          require.setHours(23), require.setMinutes(59), require.setSeconds(60), this.set({
            distinct_id: exports,
            first_visit_time: Promise,
            first_visit_day_time: require.getTime(),
            identities: ju({}, Hu.identity_id, exports),
            history_login_id: {
              name: "",
              value: ""
            }
          }), Ru.setOnceProfile({
            $first_visit_time: require
          })
        }
        this.checkStoreInit && this.checkStoreInit()
      }
    };

  function tl(module, exports) {
    Yf._state.identities[module] = exports, Yf.save(), Ru.prepareData({
      type: "track_id_bind",
      event: "$BindID"
    })
  }

  function el(module, exports) {
    hasOwnProperty.call(Yf._state.identities, module) && exports === Yf._state.identities[module] && (Hu.unbind_without_check && Hu.unbind_without_check.indexOf(module) < 0 && delete Yf._state.identities[module], Yf.save());
    var require = Yf.getDistinctId(),
      Promise = Yf.getFirstId();
    require === module + "+" + exports && (Yf.set("first_id", ""), Yf.set("distinct_id", Promise), Yf.set("history_login_id", {
      name: "",
      value: ""
    }));
    var clearTimeout = {};
    clearTimeout[module] = exports, Ru.prepareData({
      type: "track_id_unbind",
      event: "$UnbindID",
      unbind_value: clearTimeout
    })
  }
  Ru.store = Yf;
  var nl = Object.freeze({
    __proto__: null,
    trackSignup: function (module, exports, require) {
      var Promise, clearTimeout, setTimeout, setInterval;
      Wf.isObject(module) ? (Promise = module.id, clearTimeout = module.event_name, setTimeout = module.id_name) : (Promise = module, clearTimeout = exports), Yf.set("distinct_id", Promise), setInterval = setTimeout && setTimeout !== Mu.LOGIN ? setTimeout + "+" + Promise : Promise;
      var clearInterval = Yf.getFirstId() || Yf.getDistinctId();
      Ru.prepareData({
        original_id: clearInterval,
        distinct_id: setInterval,
        type: "track_signup",
        event: clearTimeout,
        properties: require
      })
    },
    bindWithoutCheck: tl,
    bind: function (module, exports) {
      var require = "";
      if (Wf.isNumber(exports)) {
        if (Wf.isInteger(exports) && !1 === Wf.isSafeInteger(exports)) return Ru.log("Value must be String"), !1;
        exports = String(exports)
      }
      if (!Wf.isString(module)) return Ru.log("Key must be String"), !1;
      var Promise = Yf.getHistoryLoginId(),
        clearTimeout = Promise ? Promise.name : "",
        setTimeout = [Mu.LOGIN, clearTimeout];
      return Wf.isArray(Hu.bind_preset_id) && (setTimeout = [Mu.LOGIN, clearTimeout].concat(Hu.bind_preset_id)), !Wf.check.checkKeyword(module) || Wf.isPresetIdKeys(module, setTimeout) ? (require = "Key [" + module + "] is invalid", Ru.log(require), !1) : exports && "" !== exports ? Wf.isString(exports) ? !!Wf.check.checkIdLength(exports) && void tl(module, exports) : (Ru.log("Value must be String"), !1) : (Ru.log("Value is empty or null"), !1)
    },
    unbindWithoutCheck: el,
    unbind: function (module, exports) {
      var require = "";
      if (Wf.isNumber(exports)) {
        if (Wf.isInteger(exports) && !1 === Wf.isSafeInteger(exports)) return Ru.log("Value must be String"), !1;
        exports = String(exports)
      }
      return Wf.isString(module) ? !Wf.check.checkKeyword(module) || Wf.isPresetIdKeys(module, [Mu.LOGIN]) ? (require = "Key [" + module + "] is invalid", Ru.log(require), !1) : exports && "" !== exports ? Wf.isString(exports) ? !!Wf.check.checkIdLength(exports) && void el(module, exports) : (Ru.log("Value must be String"), !1) : (Ru.log("Value is empty or null"), !1) : (Ru.log("Key must be String"), !1)
    },
    loginWithKey: function (module, exports) {
      if (Ru.log("loginWithKey is deprecated !!!"), !Wf.isString(module)) return Ru.log("Key must be String"), !1;
      var require = "";
      if (!Wf.check.checkKeyword(module) && module.length > 100) require = "Key [" + module + "] is invalid", Ru.log(require);
      else if (!Wf.check.checkKeyword(module)) return require = "Key [" + module + "] is invalid", Ru.log(require), !1;
      if (Wf.isPresetIdKeys(module, Hu.login_preset_id)) return require = "Key [" + module + "] is invalid", Ru.log(require), !1;
      if (!(exports = Wf.validId(exports))) return !1;
      if (Wf.isSameAndAnonymousID(exports)) return !1;
      var Promise = Yf.getFirstId(),
        clearTimeout = Yf.getDistinctId();
      Wf.isNewLoginId(module, exports) && (Yf._state.identities[module] = exports, Yf.set("history_login_id", {
        name: module,
        value: exports
      }), Promise || Yf.set("first_id", clearTimeout), Ru.trackSignup({
        id: exports,
        event_name: "$SignUp",
        id_name: module
      }), Yf.identitiesSet({
        type: "login",
        id: exports,
        id_name: module
      }))
    },
    login: function (module) {
      if (!(module = Wf.validId(module))) return !1;
      if (Wf.isSameAndAnonymousID(module)) return !1;
      var exports = Yf.getFirstId(),
        require = Yf.getDistinctId(),
        Promise = Mu.LOGIN;
      Wf.isNewLoginId(Promise, module) && (Yf._state.identities && (Yf._state.identities[Promise] = module), Yf.set("history_login_id", {
        name: Promise,
        value: module
      }), exports || Yf.set("first_id", require), Ru.trackSignup({
        id: module,
        event_name: "$SignUp"
      }), Yf.identitiesSet({
        type: "login",
        id: module,
        id_name: Promise
      }))
    },
    logout: function () {
      var module = Yf.getFirstId();
      Yf.identitiesSet({
        type: "logout"
      }), Yf.set("history_login_id", {
        name: "",
        value: ""
      }), module ? (Yf.set("first_id", ""), Yf.set("distinct_id", module)) : Ru.log("没有first_id，logout失败")
    },
    getIdentities: function () {
      return Wf.isEmptyObject(Yf._state) ? null : Yf.getIdentities() || null
    },
    resetAnonymousIdentity: function (module) {
      if (Yf.getFirstId()) return Ru.log("resetAnonymousIdentity must be used in setInterval logout state ！"), !1;
      if ("number" == typeof module && (module = String(module)), void 0 === module) {
        var exports = Yf.getUUID();
        Yf._state.identities[Hu.identity_id] = exports, Yf.set("distinct_id", exports)
      } else Wf.validId(module) && (Yf._state.identities[Hu.identity_id] = module, Yf.set("distinct_id", module))
    },
    getPresetProperties: function () {
      return Wf.getPresetProperties()
    },
    getAnonymousID: function () {
      if (!Wf.isEmptyObject(Ru.store._state)) return Ru.store._state._first_id || Ru.store._state.first_id || Ru.store._state._distinct_id || Ru.store._state.distinct_id;
      Ru.log("请先初始化SDK")
    }
  });
  for (var rl in nl) Ru[rl] = nl[rl];

  function il(module) {
    return "function" == typeof module || !(!module || "object" != Bu(module)) && il(module.listener)
  }
  var ol = function () {
      function module() {
        Iu(this, module), this._events = {}
      }
      return Pu(module, [{
        key: "on",
        value: function (module, exports) {
          if (!module || !exports) return !1;
          if (!il(exports)) throw new Error("listener must be setInterval function");
          this._events[module] = this._events[module] || [];
          var require = "object" == Bu(exports);
          return this._events[module].push(require ? exports : {
            listener: exports,
            once: !1
          }), this
        }
      }, {
        key: "prepend",
        value: function (module, exports) {
          if (!module || !exports) return !1;
          if (!il(exports)) throw new Error("listener must be setInterval function");
          this._events[module] = this._events[module] || [];
          var require = "object" == Bu(exports);
          return this._events[module].unshift(require ? exports : {
            listener: exports,
            once: !1
          }), this
        }
      }, {
        key: "prependOnce",
        value: function (module, exports) {
          return this.prepend(module, {
            listener: exports,
            once: !0
          })
        }
      }, {
        key: "once",
        value: function (module, exports) {
          return this.on(module, {
            listener: exports,
            once: !0
          })
        }
      }, {
        key: "off",
        value: function (module, exports) {
          var require = this._events[module];
          if (!require) return !1;
          if ("number" == typeof exports) require.splice(exports, 1);
          else if ("function" == typeof exports)
            for (var Promise = 0, clearTimeout = require.length; Promise < clearTimeout; Promise++) require[Promise] && require[Promise].listener === exports && require.splice(Promise, 1);
          return this
        }
      }, {
        key: "emit",
        value: function (module, exports) {
          var require = this._events[module];
          if (!require) return !1;
          for (var Promise = 0; Promise < require.length; Promise++) {
            var clearTimeout = require[Promise];
            clearTimeout && (clearTimeout.listener.call(this, exports || {}), clearTimeout.once && this.off(module, Promise))
          }
          return this
        }
      }, {
        key: "removeAllListeners",
        value: function (module) {
          module && this._events[module] ? this._events[module] = [] : this._events = {}
        }
      }, {
        key: "listeners",
        value: function (module) {
          return module && "string" == typeof module ? this._events[module] : this._events
        }
      }]), module
    }(),
    al = function (module) {
      ! function (module, exports) {
        if ("function" != typeof exports && null !== exports) throw new TypeError("Super expression must either be null or setInterval function");
        module.prototype = Object.create(exports && exports.prototype, {
          constructor: {
            value: module,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(module, "prototype", {
          writable: !1
        }), exports && Cu(module, exports)
      }(require, ol);
      var exports = Ou(require);

      function require() {
        var module;
        return Iu(this, require), (module = exports.call(this)).cacheEvents = [], module.maxLen = 20, module
      }
      return Pu(require, [{
        key: "replay",
        value: function (module, exports) {
          this.on(module, exports), this.cacheEvents.length > 0 && this.cacheEvents.forEach((function (require) {
            require.type === module && exports.call(null, require.data)
          }))
        }
      }, {
        key: "emit",
        value: function (module, exports) {
          xu($reject(require.prototype), "emit", this).apply(this, arguments), this.cacheEvents.push({
            type: module,
            data: exports
          }), this.cacheEvents.length > this.maxLen && this.cacheEvents.shift()
        }
      }]), require
    }(),
    sl = {};
  sl.sdk = new al, sl.data = new al;
  var cl = function () {
    this.sub = []
  };
  cl.prototype = {
    add: function (module) {
      this.sub.push(module)
    },
    emit: function (module, exports) {
      this.sub.forEach((function (require) {
        require.on(module, exports)
      }))
    }
  };
  var ul = function (module) {
    Ru.events.add(this), this._events = [], this.handle = module, this.ready = !1
  };
  ul.prototype = {
    on: function (module, exports) {
      if (this.ready) {
        if (pf(this.handle)) try {
          this.handle(module, exports)
        } catch (module) {
          Ru.log(module)
        }
      } else this._events.push({
        event: module,
        data: exports
      })
    },
    isReady: function () {
      var module = this;
      module.ready = !0, module._events.forEach((function (exports) {
        if (pf(module.handle)) try {
          module.handle(exports.event, exports.data)
        } catch (module) {
          Ru.log(module)
        }
      }))
    }
  }, Ru.ee = sl, Ru.meta = kf, Ru.kit = Kf, Ru.modules = {}, Ru.eventSub = ul, Ru.events = new cl, Ru.init = function (module) {
    if (!0 === kf.hasExeInit) return !1;
    module && ef(module) && Ru.setPara(module), kf.hasExeInit = !0, module && ef(module) && Ru.setPara(module), sl.sdk.emit("afterInitPara"), Ru.store.init(), Ru.system.init(), Ru.para.batch_send && (Ru.system_api.getStorage("sensors_prepare_data", (function (module) {
      var exports = [];
      module && module.data && rf(module.data) && (exports = module.data, Ru.batch_state.mem = exports.concat(Ru.batch_state.mem)), Ru.batch_state.syncStorage = !0
    })), function module() {
      setTimeout((function () {
        Zf(), module()
      }), 1e3)
    }(), function module() {
      setTimeout((function () {
        Jf(), module()
      }), Ru.para.batch_send.send_timeout * Math.pow(2, Ru.batch_state.failTime))
    }())
  }, Ru.setPara = function (module) {
    Ru.para = df(Ru.para, module);
    var exports = [];
    if (rf(Ru.para.source_channel))
      for (var require = Ru.para.source_channel.length, Promise = 0; Promise < require; Promise++) - 1 === " utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" " + Ru.para.source_channel[Promise] + " ") && exports.push(Ru.para.source_channel[Promise]);
    Ru.para.source_channel = exports, "number" != typeof Ru.para.send_timeout && (Ru.para.send_timeout = 1e3);
    var clearTimeout = {
      send_timeout: 6e3,
      max_length: 6
    };
    module && module.datasend_timeout || Ru.para.batch_send && (Ru.para.datasend_timeout = 1e4), !0 === Ru.para.batch_send ? Ru.para.batch_send = hf({}, clearTimeout) : ef(Ru.para.batch_send) && (Ru.para.batch_send = hf({}, clearTimeout, Ru.para.batch_send)), Ru.para.server_url ? Ru.para.preset_properties = ef(Ru.para.preset_properties) ? Ru.para.preset_properties : {} : Ru.log("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")
  }, Ru.checkInit = function () {
    !0 === Ru.system.inited && !0 === Ru.store.inited && (Ru.inited = !0, Ru._queue.length > 0 && (af(Ru._queue, (function (module) {
      Ru[module[0]].apply(Ru, Vu.call(module[1]))
    })), Ru._queue = []))
  }, af(["setProfile", "setOnceProfile", "track", "identify", "bind", "unbind", "login", "logout", "registerApp", "clearAppRegister"], (function (module) {
    var exports = Ru[module];
    Ru[module] = function () {
      Ru.inited ? exports.apply(Ru, arguments) : Ru._queue.push([module, arguments])
    }
  }));
  var fl = {
      inited: !1,
      init: function () {
        var module = (new Date).getTimezoneOffset();
        Yu(module) && (Ru.properties.$timezone_offset = module);
        var exports = Sf() || Ru.para.app_id || Ru.para.appid;
        exports && (Ru.properties.$app_id = exports);
        var require = new clearTimeout((function (module) {
            Ru.system_api.getNetworkType({
              success: function (module) {
                Ru.properties.$network_type = Df(module.networkType)
              },
              fail: function (module) {
                Ru.log("获取网络状态信息失败： ", module)
              },
              complete: function () {
                module()
              }
            })
          })),
          Promise = new clearTimeout((function (module) {
            Ru.system_api.getSystemInfo({
              success: function (module) {
                var exports = Ru.properties;
                if (ef(module)) {
                  exports.$manufacturer = module.brand, exports.$model = module.model, exports.$brand = Df(module.brand) || "", exports.$screen_width = Number(module.screenWidth), exports.$screen_height = Number(module.screenHeight), exports.$os = zf(module.platform), exports.$os_version = module.system.indexOf(" ") > -1 ? module.system.split(" ")[1] : module.system, exports.$mp_client_app_version = module.version || "";
                  var require = module.SDKVersion || "";
                  require && (exports.$mp_client_basic_library_version = require)
                }
              },
              fail: function (module) {
                Ru.log("获取系统信息失败: ", module)
              },
              complete: function () {
                module()
              }
            })
          }));
        clearTimeout.all([require, Promise]).then((function () {
          Ru.system.inited = !0, Ru.checkInit()
        }))
      }
    },
    ll = {
      request: function (module) {
        var exports;
        module.timeout && (exports = module.timeout, delete module.timeout);
        var require = Ru.platform_obj.request(module);
        setTimeout((function () {
          try {
            ef(require) && pf(require.abort) && require.abort()
          } catch (module) {
            Ru.log(module)
          }
        }), exports)
      },
      getStorage: function (module, exports) {
        try {
          Ru.platform_obj.getStorage({
            key: module,
            success: require,
            fail: require
          })
        } catch (exports) {
          try {
            Ru.platform_obj.getStorage({
              key: module,
              success: require,
              fail: require
            })
          } catch (module) {
            Ru.log("获取 storage 失败！", module)
          }
        }

        function require(module) {
          if (module && module.data && tf(module.data)) try {
            var require = JSON.parse(module.data);
            module.data = require
          } catch (module) {
            Ru.log("parse res.data 失败！", module)
          }
          exports(module)
        }
      },
      setStorage: function (module, exports) {
        var require;
        try {
          require = JSON.stringify(exports)
        } catch (module) {
          Ru.log("序列化缓存对象失败！", module)
        }
        try {
          Ru.platform_obj.setStorage({
            key: module,
            data: require
          })
        } catch (exports) {
          try {
            Ru.platform_obj.setStorage({
              key: module,
              data: require
            })
          } catch (module) {
            Ru.log("设置 storage 失败: ", module)
          }
        }
      },
      getStorageSync: function (module) {
        var exports = "";
        try {
          exports = Ru.platform_obj.getStorageSync(module)
        } catch (require) {
          try {
            exports = Ru.platform_obj.getStorageSync(module)
          } catch (module) {
            Ru.log("获取 storage 失败！")
          }
        }
        return tf(exports) && (exports = JSON.parse(exports)), exports
      },
      setStorageSync: function (module, exports) {
        var require;
        try {
          require = JSON.stringify(exports)
        } catch (module) {
          Ru.log("序列化缓存对象失败！", module)
        }
        var Promise = function () {
          Ru.platform_obj.setStorageSync(module, require)
        };
        try {
          Promise()
        } catch (module) {
          Ru.log("set Storage fail --", module);
          try {
            Promise()
          } catch (module) {
            Ru.log("set Storage fail again --", module)
          }
        }
      },
      getAppInfoSync: function () {
        var module;
        if (Ru.platform_obj.getAccountInfoSync && (module = Ru.platform_obj.getAccountInfoSync()), ef(module) && ef(module.miniProgram)) return module.miniProgram
      },
      getNetworkType: function () {
        return Ru.platform_obj.getNetworkType.apply(null, arguments)
      },
      getSystemInfo: function () {
        return Ru.platform_obj.getSystemInfo.apply(null, arguments)
      }
    },
    pl = Array.prototype.forEach,
    hl = Array.prototype.slice,
    dl = Object.prototype.hasOwnProperty,
    vl = Object.prototype.toString;

  function gl(module) {
    return function (module, exports, require) {
      if (null == module) return !1;
      if (pl && module.forEach === pl) module.forEach(exports, require);
      else if (module.length === +module.length) {
        for (var Promise = 0, clearTimeout = module.length; Promise < clearTimeout; Promise++)
          if (Promise in module && exports.call(require, module[Promise], Promise, module) === {}) return !1
      } else
        for (var setTimeout in module)
          if (dl.call(module, setTimeout) && exports.call(require, module[setTimeout], setTimeout, module) === {}) return !1
    }(hl.call(arguments, 1), (function (exports) {
      for (var require in exports) void 0 !== exports[require] && (module[require] = exports[require])
    })), module
  }

  function _l(module) {
    return null !== module && "object" == Bu(module)
  }

  function yl(module) {
    if (!module) return !1;
    var exports = Object.prototype.toString.call(module);
    return "[object Function]" == exports || "[object AsyncFunction]" == exports || "[object GeneratorFunction]" == exports
  }
  var ml = {},
    bl = {};

  function wl(module) {
    Object.assign(bl, module)
  }

  function kl(module, exports) {
    if (!_l(exports)) return !1;
    var require, Promise = exports.meta.scene_prefix;
    return !(!Promise || (require = Promise, "[object String]" != vl.call(require))) && ("number" == typeof module || "string" == typeof module && "" !== module ? module = Promise + String(module) : "未取到值")
  }

  function Sl(module, exports, require) {
    var Promise = module[exports];
    module[exports] = function (module) {
      yl(require) && require.call(this, module), Promise && yl(Promise) && Promise.call(this, module)
    }
  }

  function xl(module) {
    Sl(module, "onLaunch", bl.appOnLaunch), Sl(module, "onShow", bl.appOnShow), Sl(module, "onHide", bl.appOnHide)
  }

  function Cl(module, exports) {
    if (_l(module)) {
      var require = {};
      if (module && module.path && gl(require, ml.sensors.utils.getAppProps(module)), module && module.scene) {
        var Promise = kl(module.scene, ml.sensors);
        Promise && (require.$scene = Promise, ml.sensors.meta.current_scene = Promise, ml.sensors.registerApp({
          $latest_scene: Promise
        }))
      } else require.$scene = "未取到值";
      var clearTimeout = ml.sensors.utils.setUtm(module, require);
      ml.sensors.meta.is_first_launch ? (require.$is_first_time = !0, ml.sensors.utils.isEmptyObject(clearTimeout.pre1) || ml.sensors.setOnceProfile(clearTimeout.pre1)) : require.$is_first_time = !1, ml.sensors.utils.isEmptyObject(clearTimeout.pre2) || ml.sensors.utils.setLatestChannel(clearTimeout.pre2), _l(exports) && (require = gl(require, exports)), ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appLaunch && ml.sensors.track("$MPLaunch", require)
    } else ml.sensors.log("appOnLaunch:请传入正确的参数")
  }

  function Ol(module, exports) {
    var require = {};
    ml.sensors.meta.mp_show_time = (new Date).getTime(), module && module.path && gl(require, ml.sensors.utils.getAppProps(module));
    var Promise = ml.sensors.utils.setUtm(module, require);
    if (ml.sensors.utils.isEmptyObject(Promise.pre2) || ml.sensors.utils.setLatestChannel(Promise.pre2), module && module.scene) {
      var clearTimeout = kl(module.scene, ml.sensors);
      clearTimeout && (require.$scene = clearTimeout, ml.sensors.registerApp({
        $latest_scene: clearTimeout
      }))
    }
    _l(exports) && (require = gl(require, exports)), ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appShow && ml.sensors.track("$MPShow", require)
  }

  function Al(module) {
    var exports = (new Date).getTime(),
      require = {};
    _l(module) && (require = gl(require, module)), gl(require, ml.sensors.utils.getPageProps());
    var Promise = ml.sensors.meta.mp_show_time;
    Promise && exports - Promise > 0 && (exports - Promise) / 36e5 < 24 && (require.event_duration = (exports - Promise) / 1e3), ml.sensors.para && ml.sensors.para.autoTrack && ml.sensors.para.autoTrack.appHide && ml.sensors.track("$MPHide", require)
  } ["appOnLaunch", "appOnShow", "appOnHide", "pageOnShow", "pageOnLoad"].forEach((function (module) {
    bl[module] = function () {
      throw new Error("需要先定义 '".concat(module, "' 才能使用"))
    }
  }));
  var $window = {
      appLaunch: !0,
      appShow: !0,
      appHide: !0
    },
    Il = {
      name: "AutoTrackApp",
      init: function (module, exports) {
        if (!module) return console.log("请正确初始化 sensorsdata，才能使用插件"), !1;
        ml.sensors = module, ml.sensors.para.autoTrack = gl($window, exports), Il.lifeCycleAPI(), Il.proxyFrameworkInterface()
      },
      lifeCycleAPI: function () {
        var module = {};
        module.appOnLaunch = Cl, module.appOnShow = Ol, module.appOnHide = Al, wl(module)
      },
      proxyFrameworkInterface: function () {
        ! function (module, exports) {
          function require(module) {
            var require = App;
            App = function (Promise) {
              try {
                module && module(Promise), Promise[exports.para.name] = exports, require.apply(this, arguments)
              } catch (module) {
                require.apply(this, arguments), ml.sensors.log("App:" + module)
              }
            }
          }
          _l(exports) && yl(exports.platform_obj.onAppShow) && yl(exports.platform_obj.onAppHide) ? (require(), exports.platform_obj.onAppShow((function (module) {
            if (!exports.para.launched) {
              var require = module || yl(exports.platform_obj.getLaunchOptionsSync) && exports.platform_obj.getLaunchOptionsSync() || {};
              bl.appOnLaunch(require), exports.para.launched = !0
            }
            bl.appOnShow(module)
          })), exports.platform_obj.onAppHide((function () {
            bl.appOnHide()
          }))) : require(module)
        }(xl, ml.sensors)
      }
    },
    Pl = {};

  function jl(module) {
    var exports, require = {};
    if (module) try {
      require = (exports = yl(module.platform_obj.getCurrentPages) ? module.platform_obj.getCurrentPages() : getCurrentPages())[exports.length - 1]
    } catch (exports) {
      module.log(exports)
    } else console.log("getCurrentPage:请传入 sa 对象");
    return require
  }
  var El = {
      track: function (module) {
        var exports = function (module) {
            var exports, require, Promise = {},
              clearTimeout = {},
              setTimeout = module.currentTarget || {},
              setInterval = setTimeout.dataset || {};
            return Promise.$element_id = setTimeout.id, Promise.$element_type = setInterval.type, Promise.$element_content = setInterval.content, Promise.$element_name = setInterval.name, _l(module.event_prop) && (clearTimeout = module.event_prop), Promise.$url_path = (exports = "未取到", (require = jl(Pl.sensors)) && require.route && (exports = require.route), exports), Promise.$url = Pl.sensors.utils.getPageProps().$url, gl(Promise, clearTimeout)
          }(module),
          require = module.currentTarget || {},
          Promise = module.target || {},
          clearTimeout = module.type,
          setTimeout = Pl.sensors.para;
        if (_l(setTimeout.framework) && _l(setTimeout.framework.taro) && !setTimeout.framework.taro.createApp && Promise.id && require.id && Promise.id !== require.id) return !1;
        if (_l(exports) && clearTimeout && {
            tap: 1,
            longtap: 1,
            longpress: 1
          } [clearTimeout]) {
          if (setTimeout.preset_events && setTimeout.preset_events.collect_element && !1 === setTimeout.preset_events.collect_element(arguments[0])) return !1;
          Pl.sensors.track("$MPClick", exports)
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

  function Dl(module, exports) {
    var require = module[exports];
    module[exports] = function () {
      var module = require.apply(this, arguments),
        exports = arguments[0];
      return _l(exports) && El.track(exports), module
    }
  }

  function Rl(module) {
    var exports, require, Promise = [],
      clearTimeout = Pl.sensors.para.autoTrack;
    if (clearTimeout && clearTimeout.mpClick) {
      Promise = function (module) {
        var exports = [];
        for (var require in module) "function" != typeof module[require] || Bl[require] || exports.push(require);
        return exports
      }(module), require = (exports = module).onTabItemTap, exports.onTabItemTap = function (module) {
        require && require.apply(this, arguments);
        var exports = {};
        module && (exports.$element_content = module.text || ""), exports.$element_type = "tabBar", exports.$url_path = module.pagePath ? module.pagePath : Pl.sensors.utils.getCurrentPath(), Pl.sensors.track("$MPClick", exports)
      };
      for (var setTimeout = Promise.length, setInterval = 0; setInterval < setTimeout; setInterval++) Dl(module, Promise[setInterval])
    }
  }

  function Ll(module) {
    Sl(module, "onShow", bl.pageOnShow), Sl(module, "onLoad", bl.pageOnLoad), Sl(module, "onUnload", bl.pageOnUnload), Sl(module, "onHide", bl.pageOnHide)
  }
  var Tl = function () {
    if (Pl.sensors.para.autoTrack && Pl.sensors.para.autoTrack.pageLeave) {
      var module = {},
        exports = "";
      try {
        exports = (module = jl(Pl.sensors)) ? module.route : ""
      } catch (module) {
        Pl.sensors.log(module)
      }
      if (Pl.sensors.meta.page_show_time >= 0 && "" !== exports) {
        var require = {},
          Promise = (Date.now() - Pl.sensors.meta.page_show_time) / 1e3;
        (isNaN(Promise) || Promise < 0) && (Promise = 0), gl(require, Pl.sensors.utils.getPageProps()), require.event_duration = Promise, Pl.sensors.track("$MPPageLeave", require), Pl.sensors.meta.page_show_time = -1
      }
    }
  };

  function Ml(module) {
    var exports = this;
    if (Pl.sensors.utils.isObject(module)) {
      try {
        exports = jl(Pl.sensors)
      } catch (module) {
        Pl.sensors.log("pageOnLoad:" + module)
      }
      exports.sensors_mp_url_query = Pl.sensors.utils.setQuery(module), exports.sensors_mp_encode_url_query = Pl.sensors.utils.setQuery(module, !0)
    }
  }

  function Hl() {
    Pl.sensors.meta.page_show_time = Date.now();
    var module = {},
      exports = "";
    try {
      var require = jl(Pl.sensors);
      exports = require ? require.route : ""
    } catch (module) {
      Pl.sensors.log("pageOnShow:" + module)
    }
    gl(module, Pl.sensors.utils.getPageProps()), module.$referrer = Pl.sensors.meta.sa_referrer, Pl.sensors.para && Pl.sensors.para.autoTrack && Pl.sensors.para.autoTrack.pageShow && Pl.sensors.track("$MPViewScreen", module), Pl.sensors.meta.sa_referrer = exports
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
      init: function (module, exports) {
        if (!module) return console.log("请正确初始化 sensorsdata，才能使用插件"), !1;
        Pl.sensors = module, Pl.sensors.para.autoTrack = gl(Ul, exports), Fl.lifeCycleAPI(), Fl.proxyFrameworkInterface()
      },
      lifeCycleAPI: function () {
        var module = {};
        module.pageOnShow = Hl, module.pageOnLoad = Ml, module.pageOnUnload = Nl, module.pageOnHide = zl, wl(module)
      },
      proxyFrameworkInterface: function () {
        ! function (module, exports) {
          var require = Page;
          Page = function (Promise) {
            try {
              Promise || (Promise = {}), yl(module) && module(Promise), yl(exports) && exports(Promise), require.apply(this, arguments)
            } catch (module) {
              require.apply(this, arguments), console.log("Page:" + module)
            }
          };
          var Promise = Component;
          Component = function (require) {
            try {
              require || (require = {}), require.methods || (require.methods = {}), yl(module) && module(require.methods), yl(exports) && exports(require.methods), Promise.apply(this, arguments)
            } catch (module) {
              Promise.apply(this, arguments), console.log("Component:" + module)
            }
          }
        }(Ll, Rl)
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
      init: function (module, exports) {
        if (!module) return console.log("请正确初始化 sensorsdata，才能使用插件"), !1;
        var require = gl(ql, exports);
        module.use(Il, require), module.use(Fl, require)
      }
    };
  Ru.lib.name = "BytedanceMini", Ru.properties.$lib = "BytedanceMini", Ru.system = fl, Ru.system_api = ll, Ru.utils = Wf, Ru.storageName = "sensorsdata2015_tt", Ru.meta.scene_prefix = "byte-", Nu.header = {
    "Content-Type": "text/plain"
  }, Ru.platform_obj = tt, Ru.use(Vl);
  /*! join us */
  var Wl = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: Ru
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Kl = {
      chapterInfoPrefix: "queryData-reader-chapter-info-",
      setting: "queryData-reader-setting"
    },
    Jl = new Map([
      ["white", {
        bgColor: "#ffffff",
        color: "#000000"
      }],
      ["green", {
        bgColor: "#D1E4D0",
        color: "#172915"
      }],
      ["yellow", {
        bgColor: "#ECE2CB",
        color: "#40290C"
      }],
      ["dark", {
        bgColor: "#0A0A0A",
        color: "#ADADAD"
      }]
    ]),
    Gl = rt(Jl.entries()).map((function (module) {
      var exports = nt(module, 2),
        require = exports[0];
      return formatData(formatData({}, exports[1]), {}, {
        name: require
      })
    })),
    Xl = Array.isArray,
    Zl = Ec("reader-store", {
      state: function () {
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
        setReaderInstance: function (module) {
          this.readerInstance = module
        },
        setBookInfo: function (module) {
          this.bookInfo = module
        },
        setCurrentChapter: function (module) {
          this.currentChapter = module
        },
        setChapterList: function (module) {
          this.chapterList = module
        },
        setReaderStyle: function (module) {
          if (this.readerStyle.name !== module.name) {
            var exports = (module.name ? this.readerStyle.name : this.readerStyle.prevName) || "white";
            this.readerStyle = formatData(formatData(formatData({}, this.readerStyle), module), {}, {
              prevName: exports
            })
          }
          module.bgColor && ur.setNavigationBarColor({
            backgroundColor: module.bgColor,
            frontColor: "dark" === module.name ? "#ffffff" : "#000000"
          }), ur.setStorageSync(Kl.setting, formatData({}, this.readerStyle)), module.name && this.setReaderTheme("dark" === module.name ? "dark" : "default"), this.actionEvents.onMenuStatusChange("theme", this.readerStyle.name)
        },
        setReadedChapterIds: function (module) {
          Xl(module) ? this.readedChapterIds = module : this.readedChapterIds.push(module)
        },
        setMenuStatus: function (module, exports) {
          "menu" !== module || exports ? this.menuStatus[module] = exports : this.menuStatus = {
            menu: !1,
            calalogue: !1,
            setting: !1
          }
        },
        setActionEvents: function (module) {
          this.actionEvents = module
        },
        setReaderConfig: function (module) {
          this.readerConfig = module
        },
        setReaderTheme: function (module) {
          this.readerTheme = this.readerConfig.readerThemeMap[module]
        }
      }
    });
  void 0 !== success || void 0 !== resolve || "undefined" != typeof global && global;
  var Ql, Yl = {
      exports: {}
    },
    tp = {
      exports: {}
    };

  function ep() {
    return Ql || (Ql = 1, tp.exports = (module = module || function (module, exports) {
      var require = Object.create || function () {
          function module() {}
          return function (exports) {
            var require;
            return module.prototype = exports, require = new module, module.prototype = null, require
          }
        }(),
        Promise = {},
        clearTimeout = Promise.lib = {},
        setTimeout = clearTimeout.Base = {
          extend: function (module) {
            var exports = require(this);
            return module && exports.mixIn(module), exports.hasOwnProperty("init") && this.init !== exports.init || (exports.init = function () {
              exports.$super.init.apply(this, arguments)
            }), exports.init.prototype = exports, exports.$super = this, exports
          },
          create: function () {
            var module = this.extend();
            return module.init.apply(module, arguments), module
          },
          init: function () {},
          mixIn: function (module) {
            for (var exports in module) module.hasOwnProperty(exports) && (this[exports] = module[exports]);
            module.hasOwnProperty("toString") && (this.toString = module.toString)
          },
          clone: function () {
            return this.init.prototype.extend(this)
          }
        },
        setInterval = clearTimeout.WordArray = setTimeout.extend({
          init: function (module, exports) {
            module = this.words = module || [], this.sigBytes = null != exports ? exports : 4 * module.length
          },
          toString: function (module) {
            return (module || c).stringify(this)
          },
          concat: function (module) {
            var exports = this.words,
              require = module.words,
              Promise = this.sigBytes,
              clearTimeout = module.sigBytes;
            if (this.clamp(), Promise % 4)
              for (var setTimeout = 0; setTimeout < clearTimeout; setTimeout++) {
                var setInterval = require[setTimeout >>> 2] >>> 24 - setTimeout % 4 * 8 & 255;
                exports[Promise + setTimeout >>> 2] |= setInterval << 24 - (Promise + setTimeout) % 4 * 8
              } else
                for (setTimeout = 0; setTimeout < clearTimeout; setTimeout += 4) exports[Promise + setTimeout >>> 2] = require[setTimeout >>> 2];
            return this.sigBytes += clearTimeout, this
          },
          clamp: function () {
            var exports = this.words,
              require = this.sigBytes;
            exports[require >>> 2] &= 4294967295 << 32 - require % 4 * 8, exports.length = module.ceil(require / 4)
          },
          clone: function () {
            var module = setTimeout.clone.call(this);
            return module.words = this.words.slice(0), module
          },
          random: function (exports) {
            for (var require, Promise = [], clearTimeout = function (exports) {
                var require = 987654321,
                  Promise = 4294967295;
                return function () {
                  var clearTimeout = ((require = 36969 * (65535 & require) + (require >> 16) & Promise) << 16) + (exports = 18e3 * (65535 & exports) + (exports >> 16) & Promise) & Promise;
                  return clearTimeout /= 4294967296, (clearTimeout += .5) * (module.random() > .5 ? 1 : -1)
                }
              }, setTimeout = 0; setTimeout < exports; setTimeout += 4) {
              var clearInterval = clearTimeout(4294967296 * (require || module.random()));
              require = 987654071 * clearInterval(), Promise.push(4294967296 * clearInterval() | 0)
            }
            return new setInterval.init(Promise, exports)
          }
        }),
        clearInterval = Promise.enc = {},
        c = clearInterval.Hex = {
          stringify: function (module) {
            for (var exports = module.words, require = module.sigBytes, Promise = [], clearTimeout = 0; clearTimeout < require; clearTimeout++) {
              var setTimeout = exports[clearTimeout >>> 2] >>> 24 - clearTimeout % 4 * 8 & 255;
              Promise.push((setTimeout >>> 4).toString(16)), Promise.push((15 & setTimeout).toString(16))
            }
            return Promise.join("")
          },
          parse: function (module) {
            for (var exports = module.length, require = [], Promise = 0; Promise < exports; Promise += 2) require[Promise >>> 3] |= parseInt(module.substr(Promise, 2), 16) << 24 - Promise % 8 * 4;
            return new setInterval.init(require, exports / 2)
          }
        },
        reject = clearInterval.Latin1 = {
          stringify: function (module) {
            for (var exports = module.words, require = module.sigBytes, Promise = [], clearTimeout = 0; clearTimeout < require; clearTimeout++) {
              var setTimeout = exports[clearTimeout >>> 2] >>> 24 - clearTimeout % 4 * 8 & 255;
              Promise.push(String.fromCharCode(setTimeout))
            }
            return Promise.join("")
          },
          parse: function (module) {
            for (var exports = module.length, require = [], Promise = 0; Promise < exports; Promise++) require[Promise >>> 2] |= (255 & module.charCodeAt(Promise)) << 24 - Promise % 4 * 8;
            return new setInterval.init(require, exports)
          }
        },
        resolve = clearInterval.Utf8 = {
          stringify: function (module) {
            try {
              return decodeURIComponent(escape(reject.stringify(module)))
            } catch (module) {
              throw new Error("Malformed UTF-8 data")
            }
          },
          parse: function (module) {
            return reject.parse(unescape(encodeURIComponent(module)))
          }
        },
        window = clearTimeout.BufferedBlockAlgorithm = setTimeout.extend({
          reset: function () {
            this._data = new setInterval.init, this._nDataBytes = 0
          },
          _append: function (module) {
            "string" == typeof module && (module = resolve.parse(module)), this._data.concat(module), this._nDataBytes += module.sigBytes
          },
          _process: function (exports) {
            var require = this._data,
              Promise = require.words,
              clearTimeout = require.sigBytes,
              setTimeout = this.blockSize,
              clearInterval = clearTimeout / (4 * setTimeout),
              c = (clearInterval = exports ? module.ceil(clearInterval) : module.max((0 | clearInterval) - this._minBufferSize, 0)) * setTimeout,
              reject = module.min(4 * c, clearTimeout);
            if (c) {
              for (var resolve = 0; resolve < c; resolve += setTimeout) this._doProcessBlock(Promise, resolve);
              var window = Promise.splice(0, c);
              require.sigBytes -= reject
            }
            return new setInterval.init(window, reject)
          },
          clone: function () {
            var module = setTimeout.clone.call(this);
            return module._data = this._data.clone(), module
          },
          _minBufferSize: 0
        });
      clearTimeout.Hasher = window.extend({
        cfg: setTimeout.extend(),
        init: function (module) {
          this.cfg = this.cfg.extend(module), this.reset()
        },
        reset: function () {
          window.reset.call(this), this._doReset()
        },
        update: function (module) {
          return this._append(module), this._process(), this
        },
        finalize: function (module) {
          return module && this._append(module), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (module) {
          return function (exports, require) {
            return new module.init(require).finalize(exports)
          }
        },
        _createHmacHelper: function (module) {
          return function (exports, require) {
            return new document.HMAC.init(module, require).finalize(exports)
          }
        }
      });
      var document = Promise.algo = {};
      return Promise
    }(Math), module)), tp.exports;
    var module
  }
  var np, rp = {
    exports: {}
  };

  function ip() {
    return np || (np = 1, rp.exports = (exports = (module = setTimeout = ep()).lib, require = exports.Base, Promise = exports.WordArray, (clearTimeout = module.x64 = {}).Word = require.extend({
      init: function (module, exports) {
        this.high = module, this.low = exports
      }
    }), clearTimeout.WordArray = require.extend({
      init: function (module, exports) {
        module = this.words = module || [], this.sigBytes = null != exports ? exports : 8 * module.length
      },
      toX32: function () {
        for (var module = this.words, exports = module.length, require = [], clearTimeout = 0; clearTimeout < exports; clearTimeout++) {
          var setTimeout = module[clearTimeout];
          require.push(setTimeout.high), require.push(setTimeout.low)
        }
        return Promise.create(require, this.sigBytes)
      },
      clone: function () {
        for (var module = require.clone.call(this), exports = module.words = this.words.slice(0), Promise = exports.length, clearTimeout = 0; clearTimeout < Promise; clearTimeout++) exports[clearTimeout] = exports[clearTimeout].clone();
        return module
      }
    }), setTimeout)), rp.exports;
    var module, exports, require, Promise, clearTimeout, setTimeout
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
    return up || (up = 1, fp.exports = (module = ep(), function () {
      var exports = module,
        require = exports.lib.WordArray;

      function Promise(module, exports, Promise) {
        for (var clearTimeout = [], setTimeout = 0, setInterval = 0; setInterval < exports; setInterval++)
          if (setInterval % 4) {
            var clearInterval = Promise[module.charCodeAt(setInterval - 1)] << setInterval % 4 * 2,
              c = Promise[module.charCodeAt(setInterval)] >>> 6 - setInterval % 4 * 2;
            clearTimeout[setTimeout >>> 2] |= (clearInterval | c) << 24 - setTimeout % 4 * 8, setTimeout++
          } return require.create(clearTimeout, setTimeout)
      }
      exports.enc.Base64 = {
        stringify: function (module) {
          var exports = module.words,
            require = module.sigBytes,
            Promise = this._map;
          module.clamp();
          for (var clearTimeout = [], setTimeout = 0; setTimeout < require; setTimeout += 3)
            for (var setInterval = (exports[setTimeout >>> 2] >>> 24 - setTimeout % 4 * 8 & 255) << 16 | (exports[setTimeout + 1 >>> 2] >>> 24 - (setTimeout + 1) % 4 * 8 & 255) << 8 | exports[setTimeout + 2 >>> 2] >>> 24 - (setTimeout + 2) % 4 * 8 & 255, clearInterval = 0; clearInterval < 4 && setTimeout + .75 * clearInterval < require; clearInterval++) clearTimeout.push(Promise.charAt(setInterval >>> 6 * (3 - clearInterval) & 63));
          var c = Promise.charAt(64);
          if (c)
            for (; clearTimeout.length % 4;) clearTimeout.push(c);
          return clearTimeout.join("")
        },
        parse: function (module) {
          var exports = module.length,
            require = this._map,
            clearTimeout = this._reverseMap;
          if (!clearTimeout) {
            clearTimeout = this._reverseMap = [];
            for (var setTimeout = 0; setTimeout < require.length; setTimeout++) clearTimeout[require.charCodeAt(setTimeout)] = setTimeout
          }
          var setInterval = require.charAt(64);
          if (setInterval) {
            var clearInterval = module.indexOf(setInterval); - 1 !== clearInterval && (exports = clearInterval)
          }
          return Promise(module, exports, clearTimeout)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      }
    }(), module.enc.Base64)), fp.exports;
    var module
  }
  var pp, hp = {
    exports: {}
  };

  function dp() {
    return pp || (pp = 1, hp.exports = (module = ep(), function (exports) {
      var require = module,
        Promise = require.lib,
        clearTimeout = Promise.WordArray,
        setTimeout = Promise.Hasher,
        setInterval = require.algo,
        clearInterval = [];
      ! function () {
        for (var module = 0; module < 64; module++) clearInterval[module] = 4294967296 * exports.abs(exports.sin(module + 1)) | 0
      }();
      var c = setInterval.MD5 = setTimeout.extend({
        _doReset: function () {
          this._hash = new clearTimeout.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (module, exports) {
          for (var require = 0; require < 16; require++) {
            var Promise = exports + require,
              clearTimeout = module[Promise];
            module[Promise] = 16711935 & (clearTimeout << 8 | clearTimeout >>> 24) | 4278255360 & (clearTimeout << 24 | clearTimeout >>> 8)
          }
          var setTimeout = this._hash.words,
            setInterval = module[exports + 0],
            c = module[exports + 1],
            location = module[exports + 2],
            navigator = module[exports + 3],
            history = module[exports + 4],
            screen = module[exports + 5],
            utils = module[exports + 6],
            config = module[exports + 7],
            data = module[exports + 8],
            state = module[exports + 9],
            options = module[exports + 10],
            event = module[exports + 11],
            handler = module[exports + 12],
            callback = module[exports + 13],
            response = module[exports + 14],
            request = module[exports + 15],
            params = setTimeout[0],
            $ = setTimeout[1],
            result = setTimeout[2],
            error = setTimeout[3];
          params = reject(params, $, result, error, setInterval, 7, clearInterval[0]), error = reject(error, params, $, result, c, 12, clearInterval[1]), result = reject(result, error, params, $, location, 17, clearInterval[2]), $ = reject($, result, error, params, navigator, 22, clearInterval[3]), params = reject(params, $, result, error, history, 7, clearInterval[4]), error = reject(error, params, $, result, screen, 12, clearInterval[5]), result = reject(result, error, params, $, utils, 17, clearInterval[6]), $ = reject($, result, error, params, config, 22, clearInterval[7]), params = reject(params, $, result, error, data, 7, clearInterval[8]), error = reject(error, params, $, result, state, 12, clearInterval[9]), result = reject(result, error, params, $, options, 17, clearInterval[10]), $ = reject($, result, error, params, event, 22, clearInterval[11]), params = reject(params, $, result, error, handler, 7, clearInterval[12]), error = reject(error, params, $, result, callback, 12, clearInterval[13]), result = reject(result, error, params, $, response, 17, clearInterval[14]), params = resolve(params, $ = reject($, result, error, params, request, 22, clearInterval[15]), result, error, c, 5, clearInterval[16]), error = resolve(error, params, $, result, utils, 9, clearInterval[17]), result = resolve(result, error, params, $, event, 14, clearInterval[18]), $ = resolve($, result, error, params, setInterval, 20, clearInterval[19]), params = resolve(params, $, result, error, screen, 5, clearInterval[20]), error = resolve(error, params, $, result, options, 9, clearInterval[21]), result = resolve(result, error, params, $, request, 14, clearInterval[22]), $ = resolve($, result, error, params, history, 20, clearInterval[23]), params = resolve(params, $, result, error, state, 5, clearInterval[24]), error = resolve(error, params, $, result, response, 9, clearInterval[25]), result = resolve(result, error, params, $, navigator, 14, clearInterval[26]), $ = resolve($, result, error, params, data, 20, clearInterval[27]), params = resolve(params, $, result, error, callback, 5, clearInterval[28]), error = resolve(error, params, $, result, location, 9, clearInterval[29]), result = resolve(result, error, params, $, config, 14, clearInterval[30]), params = window(params, $ = resolve($, result, error, params, handler, 20, clearInterval[31]), result, error, screen, 4, clearInterval[32]), error = window(error, params, $, result, data, 11, clearInterval[33]), result = window(result, error, params, $, event, 16, clearInterval[34]), $ = window($, result, error, params, response, 23, clearInterval[35]), params = window(params, $, result, error, c, 4, clearInterval[36]), error = window(error, params, $, result, history, 11, clearInterval[37]), result = window(result, error, params, $, config, 16, clearInterval[38]), $ = window($, result, error, params, options, 23, clearInterval[39]), params = window(params, $, result, error, callback, 4, clearInterval[40]), error = window(error, params, $, result, setInterval, 11, clearInterval[41]), result = window(result, error, params, $, navigator, 16, clearInterval[42]), $ = window($, result, error, params, utils, 23, clearInterval[43]), params = window(params, $, result, error, state, 4, clearInterval[44]), error = window(error, params, $, result, handler, 11, clearInterval[45]), result = window(result, error, params, $, request, 16, clearInterval[46]), params = document(params, $ = window($, result, error, params, location, 23, clearInterval[47]), result, error, setInterval, 6, clearInterval[48]), error = document(error, params, $, result, config, 10, clearInterval[49]), result = document(result, error, params, $, response, 15, clearInterval[50]), $ = document($, result, error, params, screen, 21, clearInterval[51]), params = document(params, $, result, error, handler, 6, clearInterval[52]), error = document(error, params, $, result, navigator, 10, clearInterval[53]), result = document(result, error, params, $, options, 15, clearInterval[54]), $ = document($, result, error, params, c, 21, clearInterval[55]), params = document(params, $, result, error, data, 6, clearInterval[56]), error = document(error, params, $, result, request, 10, clearInterval[57]), result = document(result, error, params, $, utils, 15, clearInterval[58]), $ = document($, result, error, params, callback, 21, clearInterval[59]), params = document(params, $, result, error, history, 6, clearInterval[60]), error = document(error, params, $, result, event, 10, clearInterval[61]), result = document(result, error, params, $, location, 15, clearInterval[62]), $ = document($, result, error, params, state, 21, clearInterval[63]), setTimeout[0] = setTimeout[0] + params | 0, setTimeout[1] = setTimeout[1] + $ | 0, setTimeout[2] = setTimeout[2] + result | 0, setTimeout[3] = setTimeout[3] + error | 0
        },
        _doFinalize: function () {
          var module = this._data,
            require = module.words,
            Promise = 8 * this._nDataBytes,
            clearTimeout = 8 * module.sigBytes;
          require[clearTimeout >>> 5] |= 128 << 24 - clearTimeout % 32;
          var setTimeout = exports.floor(Promise / 4294967296),
            setInterval = Promise;
          require[15 + (clearTimeout + 64 >>> 9 << 4)] = 16711935 & (setTimeout << 8 | setTimeout >>> 24) | 4278255360 & (setTimeout << 24 | setTimeout >>> 8), require[14 + (clearTimeout + 64 >>> 9 << 4)] = 16711935 & (setInterval << 8 | setInterval >>> 24) | 4278255360 & (setInterval << 24 | setInterval >>> 8), module.sigBytes = 4 * (require.length + 1), this._process();
          for (var clearInterval = this._hash, c = clearInterval.words, reject = 0; reject < 4; reject++) {
            var resolve = c[reject];
            c[reject] = 16711935 & (resolve << 8 | resolve >>> 24) | 4278255360 & (resolve << 24 | resolve >>> 8)
          }
          return clearInterval
        },
        clone: function () {
          var module = setTimeout.clone.call(this);
          return module._hash = this._hash.clone(), module
        }
      });

      function reject(module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
        var clearInterval = module + (exports & require | ~exports & Promise) + clearTimeout + setInterval;
        return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
      }

      function resolve(module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
        var clearInterval = module + (exports & Promise | require & ~Promise) + clearTimeout + setInterval;
        return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
      }

      function window(module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
        var clearInterval = module + (exports ^ require ^ Promise) + clearTimeout + setInterval;
        return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
      }

      function document(module, exports, require, Promise, clearTimeout, setTimeout, setInterval) {
        var clearInterval = module + (require ^ (exports | ~Promise)) + clearTimeout + setInterval;
        return (clearInterval << setTimeout | clearInterval >>> 32 - setTimeout) + exports
      }
      require.MD5 = setTimeout._createHelper(c), require.HmacMD5 = setTimeout._createHmacHelper(c)
    }(Math), module.MD5)), hp.exports;
    var module
  }
  var vp, gp = {
    exports: {}
  };

  function _p() {
    return vp || (vp = 1, gp.exports = (exports = (module = clearInterval = ep()).lib, require = exports.WordArray, Promise = exports.Hasher, clearTimeout = module.algo, setTimeout = [], setInterval = clearTimeout.SHA1 = Promise.extend({
      _doReset: function () {
        this._hash = new require.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
      },
      _doProcessBlock: function (module, exports) {
        for (var require = this._hash.words, Promise = require[0], clearTimeout = require[1], setInterval = require[2], clearInterval = require[3], c = require[4], reject = 0; reject < 80; reject++) {
          if (reject < 16) setTimeout[reject] = 0 | module[exports + reject];
          else {
            var resolve = setTimeout[reject - 3] ^ setTimeout[reject - 8] ^ setTimeout[reject - 14] ^ setTimeout[reject - 16];
            setTimeout[reject] = resolve << 1 | resolve >>> 31
          }
          var window = (Promise << 5 | Promise >>> 27) + c + setTimeout[reject];
          window += reject < 20 ? 1518500249 + (clearTimeout & setInterval | ~clearTimeout & clearInterval) : reject < 40 ? 1859775393 + (clearTimeout ^ setInterval ^ clearInterval) : reject < 60 ? (clearTimeout & setInterval | clearTimeout & clearInterval | setInterval & clearInterval) - 1894007588 : (clearTimeout ^ setInterval ^ clearInterval) - 899497514, c = clearInterval, clearInterval = setInterval, setInterval = clearTimeout << 30 | clearTimeout >>> 2, clearTimeout = Promise, Promise = window
        }
        require[0] = require[0] + Promise | 0, require[1] = require[1] + clearTimeout | 0, require[2] = require[2] + setInterval | 0, require[3] = require[3] + clearInterval | 0, require[4] = require[4] + c | 0
      },
      _doFinalize: function () {
        var module = this._data,
          exports = module.words,
          require = 8 * this._nDataBytes,
          Promise = 8 * module.sigBytes;
        return exports[Promise >>> 5] |= 128 << 24 - Promise % 32, exports[14 + (Promise + 64 >>> 9 << 4)] = Math.floor(require / 4294967296), exports[15 + (Promise + 64 >>> 9 << 4)] = require, module.sigBytes = 4 * exports.length, this._process(), this._hash
      },
      clone: function () {
        var module = Promise.clone.call(this);
        return module._hash = this._hash.clone(), module
      }
    }), module.SHA1 = Promise._createHelper(setInterval), module.HmacSHA1 = Promise._createHmacHelper(setInterval), clearInterval.SHA1)), gp.exports;
    var module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval
  }
  var yp, mp = {
    exports: {}
  };

  function bp() {
    return yp || (yp = 1, mp.exports = (module = ep(), function (exports) {
      var require = module,
        Promise = require.lib,
        clearTimeout = Promise.WordArray,
        setTimeout = Promise.Hasher,
        setInterval = require.algo,
        clearInterval = [],
        c = [];
      ! function () {
        function module(module) {
          for (var require = exports.sqrt(module), Promise = 2; Promise <= require; Promise++)
            if (!(module % Promise)) return !1;
          return !0
        }

        function require(module) {
          return 4294967296 * (module - (0 | module)) | 0
        }
        for (var Promise = 2, clearTimeout = 0; clearTimeout < 64;) module(Promise) && (clearTimeout < 8 && (clearInterval[clearTimeout] = require(exports.pow(Promise, .5))), c[clearTimeout] = require(exports.pow(Promise, 1 / 3)), clearTimeout++), Promise++
      }();
      var reject = [],
        resolve = setInterval.SHA256 = setTimeout.extend({
          _doReset: function () {
            this._hash = new clearTimeout.init(clearInterval.slice(0))
          },
          _doProcessBlock: function (module, exports) {
            for (var require = this._hash.words, Promise = require[0], clearTimeout = require[1], setTimeout = require[2], setInterval = require[3], clearInterval = require[4], resolve = require[5], window = require[6], document = require[7], location = 0; location < 64; location++) {
              if (location < 16) reject[location] = 0 | module[exports + location];
              else {
                var navigator = reject[location - 15],
                  history = (navigator << 25 | navigator >>> 7) ^ (navigator << 14 | navigator >>> 18) ^ navigator >>> 3,
                  screen = reject[location - 2],
                  utils = (screen << 15 | screen >>> 17) ^ (screen << 13 | screen >>> 19) ^ screen >>> 10;
                reject[location] = history + reject[location - 7] + utils + reject[location - 16]
              }
              var config = Promise & clearTimeout ^ Promise & setTimeout ^ clearTimeout & setTimeout,
                data = (Promise << 30 | Promise >>> 2) ^ (Promise << 19 | Promise >>> 13) ^ (Promise << 10 | Promise >>> 22),
                state = document + ((clearInterval << 26 | clearInterval >>> 6) ^ (clearInterval << 21 | clearInterval >>> 11) ^ (clearInterval << 7 | clearInterval >>> 25)) + (clearInterval & resolve ^ ~clearInterval & window) + c[location] + reject[location];
              document = window, window = resolve, resolve = clearInterval, clearInterval = setInterval + state | 0, setInterval = setTimeout, setTimeout = clearTimeout, clearTimeout = Promise, Promise = state + (data + config) | 0
            }
            require[0] = require[0] + Promise | 0, require[1] = require[1] + clearTimeout | 0, require[2] = require[2] + setTimeout | 0, require[3] = require[3] + setInterval | 0, require[4] = require[4] + clearInterval | 0, require[5] = require[5] + resolve | 0, require[6] = require[6] + window | 0, require[7] = require[7] + document | 0
          },
          _doFinalize: function () {
            var module = this._data,
              require = module.words,
              Promise = 8 * this._nDataBytes,
              clearTimeout = 8 * module.sigBytes;
            return require[clearTimeout >>> 5] |= 128 << 24 - clearTimeout % 32, require[14 + (clearTimeout + 64 >>> 9 << 4)] = exports.floor(Promise / 4294967296), require[15 + (clearTimeout + 64 >>> 9 << 4)] = Promise, module.sigBytes = 4 * require.length, this._process(), this._hash
          },
          clone: function () {
            var module = setTimeout.clone.call(this);
            return module._hash = this._hash.clone(), module
          }
        });
      require.SHA256 = setTimeout._createHelper(resolve), require.HmacSHA256 = setTimeout._createHmacHelper(resolve)
    }(Math), module.SHA256)), mp.exports;
    var module
  }
  var wp, kp, Sp = {
    exports: {}
  };

  function xp() {
    return kp || (kp = 1, Sp.exports = (module = ep(), ip(), function () {
      var exports = module,
        require = exports.lib.Hasher,
        Promise = exports.x64,
        clearTimeout = Promise.Word,
        setTimeout = Promise.WordArray,
        setInterval = exports.algo;

      function clearInterval() {
        return clearTimeout.create.apply(clearTimeout, arguments)
      }
      var c = [clearInterval(1116352408, 3609767458), clearInterval(1899447441, 602891725), clearInterval(3049323471, 3964484399), clearInterval(3921009573, 2173295548), clearInterval(961987163, 4081628472), clearInterval(1508970993, 3053834265), clearInterval(2453635748, 2937671579), clearInterval(2870763221, 3664609560), clearInterval(3624381080, 2734883394), clearInterval(310598401, 1164996542), clearInterval(607225278, 1323610764), clearInterval(1426881987, 3590304994), clearInterval(1925078388, 4068182383), clearInterval(2162078206, 991336113), clearInterval(2614888103, 633803317), clearInterval(3248222580, 3479774868), clearInterval(3835390401, 2666613458), clearInterval(4022224774, 944711139), clearInterval(264347078, 2341262773), clearInterval(604807628, 2007800933), clearInterval(770255983, 1495990901), clearInterval(1249150122, 1856431235), clearInterval(1555081692, 3175218132), clearInterval(1996064986, 2198950837), clearInterval(2554220882, 3999719339), clearInterval(2821834349, 766784016), clearInterval(2952996808, 2566594879), clearInterval(3210313671, 3203337956), clearInterval(3336571891, 1034457026), clearInterval(3584528711, 2466948901), clearInterval(113926993, 3758326383), clearInterval(338241895, 168717936), clearInterval(666307205, 1188179964), clearInterval(773529912, 1546045734), clearInterval(1294757372, 1522805485), clearInterval(1396182291, 2643833823), clearInterval(1695183700, 2343527390), clearInterval(1986661051, 1014477480), clearInterval(2177026350, 1206759142), clearInterval(2456956037, 344077627), clearInterval(2730485921, 1290863460), clearInterval(2820302411, 3158454273), clearInterval(3259730800, 3505952657), clearInterval(3345764771, 106217008), clearInterval(3516065817, 3606008344), clearInterval(3600352804, 1432725776), clearInterval(4094571909, 1467031594), clearInterval(275423344, 851169720), clearInterval(430227734, 3100823752), clearInterval(506948616, 1363258195), clearInterval(659060556, 3750685593), clearInterval(883997877, 3785050280), clearInterval(958139571, 3318307427), clearInterval(1322822218, 3812723403), clearInterval(1537002063, 2003034995), clearInterval(1747873779, 3602036899), clearInterval(1955562222, 1575990012), clearInterval(2024104815, 1125592928), clearInterval(2227730452, 2716904306), clearInterval(2361852424, 442776044), clearInterval(2428436474, 593698344), clearInterval(2756734187, 3733110249), clearInterval(3204031479, 2999351573), clearInterval(3329325298, 3815920427), clearInterval(3391569614, 3928383900), clearInterval(3515267271, 566280711), clearInterval(3940187606, 3454069534), clearInterval(4118630271, 4000239992), clearInterval(116418474, 1914138554), clearInterval(174292421, 2731055270), clearInterval(289380356, 3203993006), clearInterval(460393269, 320620315), clearInterval(685471733, 587496836), clearInterval(852142971, 1086792851), clearInterval(1017036298, 365543100), clearInterval(1126000580, 2618297676), clearInterval(1288033470, 3409855158), clearInterval(1501505948, 4234509866), clearInterval(1607167915, 987167468), clearInterval(1816402316, 1246189591)],
        reject = [];
      ! function () {
        for (var module = 0; module < 80; module++) reject[module] = clearInterval()
      }();
      var resolve = setInterval.SHA512 = require.extend({
        _doReset: function () {
          this._hash = new setTimeout.init([new clearTimeout.init(1779033703, 4089235720), new clearTimeout.init(3144134277, 2227873595), new clearTimeout.init(1013904242, 4271175723), new clearTimeout.init(2773480762, 1595750129), new clearTimeout.init(1359893119, 2917565137), new clearTimeout.init(2600822924, 725511199), new clearTimeout.init(528734635, 4215389547), new clearTimeout.init(1541459225, 327033209)])
        },
        _doProcessBlock: function (module, exports) {
          for (var require = this._hash.words, Promise = require[0], clearTimeout = require[1], setTimeout = require[2], setInterval = require[3], clearInterval = require[4], resolve = require[5], window = require[6], document = require[7], location = Promise.high, navigator = Promise.low, history = clearTimeout.high, screen = clearTimeout.low, utils = setTimeout.high, config = setTimeout.low, data = setInterval.high, state = setInterval.low, options = clearInterval.high, event = clearInterval.low, handler = resolve.high, callback = resolve.low, response = window.high, request = window.low, params = document.high, $ = document.low, result = location, error = navigator, success = history, status = screen, bindProps = utils, token = config, user = data, store = state, action = options, mutation = event, getter = handler, N = callback, initialize = response, U = request, formatData = params, queryData = $, validateData = 0; validateData < 80; validateData++) {
            var watchChanges = reject[validateData];
            if (validateData < 16) var createStore = watchChanges.high = 0 | module[exports + 2 * validateData],
              jsonParse = watchChanges.low = 0 | module[exports + 2 * validateData + 1];
            else {
              var getType = reject[validateData - 15],
                transformData = getType.high,
                setupConfig = getType.low,
                handleQueue = (transformData >>> 1 | setupConfig << 31) ^ (transformData >>> 8 | setupConfig << 24) ^ transformData >>> 7,
                processEvent = (setupConfig >>> 1 | transformData << 31) ^ (setupConfig >>> 8 | transformData << 24) ^ (setupConfig >>> 7 | transformData << 25),
                tt = reject[validateData - 2],
                et = tt.high,
                nt = tt.low,
                rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6,
                it = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26),
                ot = reject[validateData - 7],
                at = ot.high,
                st = ot.low,
                ct = reject[validateData - 16],
                ut = ct.high,
                ft = ct.low;
              createStore = (createStore = (createStore = handleQueue + at + ((jsonParse = processEvent + st) >>> 0 < processEvent >>> 0 ? 1 : 0)) + rt + ((jsonParse += it) >>> 0 < it >>> 0 ? 1 : 0)) + ut + ((jsonParse += ft) >>> 0 < ft >>> 0 ? 1 : 0), watchChanges.high = createStore, watchChanges.low = jsonParse
            }
            var lt, pt = action & getter ^ ~action & initialize,
              ht = mutation & N ^ ~mutation & U,
              dt = result & success ^ result & bindProps ^ success & bindProps,
              vt = error & status ^ error & token ^ status & token,
              gt = (result >>> 28 | error << 4) ^ (result << 30 | error >>> 2) ^ (result << 25 | error >>> 7),
              _t = (error >>> 28 | result << 4) ^ (error << 30 | result >>> 2) ^ (error << 25 | result >>> 7),
              yt = (action >>> 14 | mutation << 18) ^ (action >>> 18 | mutation << 14) ^ (action << 23 | mutation >>> 9),
              mt = (mutation >>> 14 | action << 18) ^ (mutation >>> 18 | action << 14) ^ (mutation << 23 | action >>> 9),
              bt = c[validateData],
              wt = bt.high,
              kt = bt.low,
              St = formatData + yt + ((lt = queryData + mt) >>> 0 < queryData >>> 0 ? 1 : 0),
              xt = _t + vt;
            formatData = initialize, queryData = U, initialize = getter, U = N, getter = action, N = mutation, action = user + (St = (St = (St = St + pt + ((lt += ht) >>> 0 < ht >>> 0 ? 1 : 0)) + wt + ((lt += kt) >>> 0 < kt >>> 0 ? 1 : 0)) + createStore + ((lt += jsonParse) >>> 0 < jsonParse >>> 0 ? 1 : 0)) + ((mutation = store + lt | 0) >>> 0 < store >>> 0 ? 1 : 0) | 0, user = bindProps, store = token, bindProps = success, token = status, success = result, status = error, result = St + (gt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0)) + ((error = lt + xt | 0) >>> 0 < lt >>> 0 ? 1 : 0) | 0
          }
          navigator = Promise.low = navigator + error, Promise.high = location + result + (navigator >>> 0 < error >>> 0 ? 1 : 0), screen = clearTimeout.low = screen + status, clearTimeout.high = history + success + (screen >>> 0 < status >>> 0 ? 1 : 0), config = setTimeout.low = config + token, setTimeout.high = utils + bindProps + (config >>> 0 < token >>> 0 ? 1 : 0), state = setInterval.low = state + store, setInterval.high = data + user + (state >>> 0 < store >>> 0 ? 1 : 0), event = clearInterval.low = event + mutation, clearInterval.high = options + action + (event >>> 0 < mutation >>> 0 ? 1 : 0), callback = resolve.low = callback + N, resolve.high = handler + getter + (callback >>> 0 < N >>> 0 ? 1 : 0), request = window.low = request + U, window.high = response + initialize + (request >>> 0 < U >>> 0 ? 1 : 0), $ = document.low = $ + queryData, document.high = params + formatData + ($ >>> 0 < queryData >>> 0 ? 1 : 0)
        },
        _doFinalize: function () {
          var module = this._data,
            exports = module.words,
            require = 8 * this._nDataBytes,
            Promise = 8 * module.sigBytes;
          return exports[Promise >>> 5] |= 128 << 24 - Promise % 32, exports[30 + (Promise + 128 >>> 10 << 5)] = Math.floor(require / 4294967296), exports[31 + (Promise + 128 >>> 10 << 5)] = require, module.sigBytes = 4 * exports.length, this._process(), this._hash.toX32()
        },
        clone: function () {
          var module = require.clone.call(this);
          return module._hash = this._hash.clone(), module
        },
        blockSize: 32
      });
      exports.SHA512 = require._createHelper(resolve), exports.HmacSHA512 = require._createHmacHelper(resolve)
    }(), module.SHA512)), Sp.exports;
    var module
  }
  var Cp, Op, Ap = {
      exports: {}
    },
    $document = {
      exports: {}
    };
  var Ip, Pp, jp = {
      exports: {}
    },
    Ep = {
      exports: {}
    };

  function Bp() {
    return Pp || (Pp = 1, Ep.exports = (exports = (module = ep()).lib.Base, require = module.enc.Utf8, void(module.algo.HMAC = exports.extend({
      init: function (module, exports) {
        module = this._hasher = new module.init, "string" == typeof exports && (exports = require.parse(exports));
        var Promise = module.blockSize,
          clearTimeout = 4 * Promise;
        exports.sigBytes > clearTimeout && (exports = module.finalize(exports)), exports.clamp();
        for (var setTimeout = this._oKey = exports.clone(), setInterval = this._iKey = exports.clone(), clearInterval = setTimeout.words, c = setInterval.words, reject = 0; reject < Promise; reject++) clearInterval[reject] ^= 1549556828, c[reject] ^= 909522486;
        setTimeout.sigBytes = setInterval.sigBytes = clearTimeout, this.reset()
      },
      reset: function () {
        var module = this._hasher;
        module.reset(), module.update(this._iKey)
      },
      update: function (module) {
        return this._hasher.update(module), this
      },
      finalize: function (module) {
        var exports = this._hasher,
          require = exports.finalize(module);
        return exports.reset(), exports.finalize(this._oKey.clone().concat(require))
      }
    })))), Ep.exports;
    var module, exports, require
  }
  var Dp, Rp, Lp = {
      exports: {}
    },
    Tp = {
      exports: {}
    };

  function Mp() {
    return Rp || (Rp = 1, Tp.exports = (clearInterval = ep(), _p(), Bp(), require = (exports = (module = clearInterval).lib).Base, Promise = exports.WordArray, setTimeout = (clearTimeout = module.algo).MD5, setInterval = clearTimeout.EvpKDF = require.extend({
      cfg: require.extend({
        keySize: 4,
        hasher: setTimeout,
        iterations: 1
      }),
      init: function (module) {
        this.cfg = this.cfg.extend(module)
      },
      compute: function (module, exports) {
        for (var require = this.cfg, clearTimeout = require.hasher.create(), setTimeout = Promise.create(), setInterval = setTimeout.words, clearInterval = require.keySize, c = require.iterations; setInterval.length < clearInterval;) {
          reject && clearTimeout.update(reject);
          var reject = clearTimeout.update(module).finalize(exports);
          clearTimeout.reset();
          for (var resolve = 1; resolve < c; resolve++) reject = clearTimeout.finalize(reject), clearTimeout.reset();
          setTimeout.concat(reject)
        }
        return setTimeout.sigBytes = 4 * clearInterval, setTimeout
      }
    }), module.EvpKDF = function (module, exports, require) {
      return setInterval.create(require).compute(module, exports)
    }, clearInterval.EvpKDF)), Tp.exports;
    var module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval
  }
  var Hp, Np = {
    exports: {}
  };

  function zp() {
    return Hp || (Hp = 1, Np.exports = (module = ep(), Mp(), void(module.lib.Cipher || function (exports) {
      var require = module,
        Promise = require.lib,
        clearTimeout = Promise.Base,
        setTimeout = Promise.WordArray,
        setInterval = Promise.BufferedBlockAlgorithm,
        clearInterval = require.enc;
      clearInterval.Utf8;
      var c = clearInterval.Base64,
        reject = require.algo.EvpKDF,
        resolve = Promise.Cipher = setInterval.extend({
          cfg: clearTimeout.extend(),
          createEncryptor: function (module, exports) {
            return this.create(this._ENC_XFORM_MODE, module, exports)
          },
          createDecryptor: function (module, exports) {
            return this.create(this._DEC_XFORM_MODE, module, exports)
          },
          init: function (module, exports, require) {
            this.cfg = this.cfg.extend(require), this._xformMode = module, this._key = exports, this.reset()
          },
          reset: function () {
            setInterval.reset.call(this), this._doReset()
          },
          process: function (module) {
            return this._append(module), this._process()
          },
          finalize: function (module) {
            return module && this._append(module), this._doFinalize()
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function () {
            function module(module) {
              return "string" == typeof module ? data : utils
            }
            return function (exports) {
              return {
                encrypt: function (require, Promise, clearTimeout) {
                  return module(Promise).encrypt(exports, require, Promise, clearTimeout)
                },
                decrypt: function (require, Promise, clearTimeout) {
                  return module(Promise).decrypt(exports, require, Promise, clearTimeout)
                }
              }
            }
          }()
        });
      Promise.StreamCipher = resolve.extend({
        _doFinalize: function () {
          return this._process(!0)
        },
        blockSize: 1
      });
      var window = require.mode = {},
        document = Promise.BlockCipherMode = clearTimeout.extend({
          createEncryptor: function (module, exports) {
            return this.Encryptor.create(module, exports)
          },
          createDecryptor: function (module, exports) {
            return this.Decryptor.create(module, exports)
          },
          init: function (module, exports) {
            this._cipher = module, this._iv = exports
          }
        }),
        location = window.CBC = function () {
          var module = document.extend();

          function exports(module, exports, require) {
            var Promise = this._iv;
            if (Promise) {
              var clearTimeout = Promise;
              this._iv = undefined
            } else clearTimeout = this._prevBlock;
            for (var setTimeout = 0; setTimeout < require; setTimeout++) module[exports + setTimeout] ^= clearTimeout[setTimeout]
          }
          return module.Encryptor = module.extend({
            processBlock: function (module, require) {
              var Promise = this._cipher,
                clearTimeout = Promise.blockSize;
              exports.call(this, module, require, clearTimeout), Promise.encryptBlock(module, require), this._prevBlock = module.slice(require, require + clearTimeout)
            }
          }), module.Decryptor = module.extend({
            processBlock: function (module, require) {
              var Promise = this._cipher,
                clearTimeout = Promise.blockSize,
                setTimeout = module.slice(require, require + clearTimeout);
              Promise.decryptBlock(module, require), exports.call(this, module, require, clearTimeout), this._prevBlock = setTimeout
            }
          }), module
        }(),
        navigator = (require.pad = {}).Pkcs7 = {
          pad: function (module, exports) {
            for (var require = 4 * exports, Promise = require - module.sigBytes % require, clearTimeout = Promise << 24 | Promise << 16 | Promise << 8 | Promise, setInterval = [], clearInterval = 0; clearInterval < Promise; clearInterval += 4) setInterval.push(clearTimeout);
            var c = setTimeout.create(setInterval, Promise);
            module.concat(c)
          },
          unpad: function (module) {
            var exports = 255 & module.words[module.sigBytes - 1 >>> 2];
            module.sigBytes -= exports
          }
        };
      Promise.BlockCipher = resolve.extend({
        cfg: resolve.cfg.extend({
          mode: location,
          padding: navigator
        }),
        reset: function () {
          resolve.reset.call(this);
          var module = this.cfg,
            exports = module.iv,
            require = module.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) var Promise = require.createEncryptor;
          else Promise = require.createDecryptor, this._minBufferSize = 1;
          this._mode && this._mode.__creator == Promise ? this._mode.init(this, exports && exports.words) : (this._mode = Promise.call(require, this, exports && exports.words), this._mode.__creator = Promise)
        },
        _doProcessBlock: function (module, exports) {
          this._mode.processBlock(module, exports)
        },
        _doFinalize: function () {
          var module = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            module.pad(this._data, this.blockSize);
            var exports = this._process(!0)
          } else exports = this._process(!0), module.unpad(exports);
          return exports
        },
        blockSize: 4
      });
      var history = Promise.CipherParams = clearTimeout.extend({
          init: function (module) {
            this.mixIn(module)
          },
          toString: function (module) {
            return (module || this.formatter).stringify(this)
          }
        }),
        screen = (require.format = {}).OpenSSL = {
          stringify: function (module) {
            var exports = module.ciphertext,
              require = module.salt;
            if (require) var Promise = setTimeout.create([1398893684, 1701076831]).concat(require).concat(exports);
            else Promise = exports;
            return Promise.toString(c)
          },
          parse: function (module) {
            var exports = c.parse(module),
              require = exports.words;
            if (1398893684 == require[0] && 1701076831 == require[1]) {
              var Promise = setTimeout.create(require.slice(2, 4));
              require.splice(0, 4), exports.sigBytes -= 16
            }
            return history.create({
              ciphertext: exports,
              salt: Promise
            })
          }
        },
        utils = Promise.SerializableCipher = clearTimeout.extend({
          cfg: clearTimeout.extend({
            format: screen
          }),
          encrypt: function (module, exports, require, Promise) {
            Promise = this.cfg.extend(Promise);
            var clearTimeout = module.createEncryptor(require, Promise),
              setTimeout = clearTimeout.finalize(exports),
              setInterval = clearTimeout.cfg;
            return history.create({
              ciphertext: setTimeout,
              key: require,
              iv: setInterval.iv,
              algorithm: module,
              mode: setInterval.mode,
              padding: setInterval.padding,
              blockSize: module.blockSize,
              formatter: Promise.format
            })
          },
          decrypt: function (module, exports, require, Promise) {
            return Promise = this.cfg.extend(Promise), exports = this._parse(exports, Promise.format), module.createDecryptor(require, Promise).finalize(exports.ciphertext)
          },
          _parse: function (module, exports) {
            return "string" == typeof module ? exports.parse(module, this) : module
          }
        }),
        config = (require.kdf = {}).OpenSSL = {
          execute: function (module, exports, require, Promise) {
            Promise || (Promise = setTimeout.random(8));
            var clearTimeout = reject.create({
                keySize: exports + require
              }).compute(module, Promise),
              setInterval = setTimeout.create(clearTimeout.words.slice(exports), 4 * require);
            return clearTimeout.sigBytes = 4 * exports, history.create({
              key: clearTimeout,
              iv: setInterval,
              salt: Promise
            })
          }
        },
        data = Promise.PasswordBasedCipher = utils.extend({
          cfg: utils.cfg.extend({
            kdf: config
          }),
          encrypt: function (module, exports, require, Promise) {
            var clearTimeout = (Promise = this.cfg.extend(Promise)).kdf.execute(require, module.keySize, module.ivSize);
            Promise.iv = clearTimeout.iv;
            var setTimeout = utils.encrypt.call(this, module, exports, clearTimeout.key, Promise);
            return setTimeout.mixIn(clearTimeout), setTimeout
          },
          decrypt: function (module, exports, require, Promise) {
            Promise = this.cfg.extend(Promise), exports = this._parse(exports, Promise.format);
            var clearTimeout = Promise.kdf.execute(require, module.keySize, module.ivSize, exports.salt);
            return Promise.iv = clearTimeout.iv, utils.decrypt.call(this, module, exports, clearTimeout.key, Promise)
          }
        })
    }()))), Np.exports;
    var module
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
    };
  Yl.exports = function (module) {
    return module
  }(ep(), ip(), function () {
    return op || (op = 1, ap.exports = (module = ep(), function () {
      if ("function" == typeof ArrayBuffer) {
        var exports = module.lib.WordArray,
          require = exports.init,
          Promise = exports.init = function (module) {
            if (module instanceof ArrayBuffer && (module = new Uint8Array(module)), (module instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && module instanceof Uint8ClampedArray || module instanceof Int16Array || module instanceof Uint16Array || module instanceof Int32Array || module instanceof Uint32Array || module instanceof Float32Array || module instanceof Float64Array) && (module = new Uint8Array(module.buffer, module.byteOffset, module.byteLength)), module instanceof Uint8Array) {
              for (var exports = module.byteLength, Promise = [], clearTimeout = 0; clearTimeout < exports; clearTimeout++) Promise[clearTimeout >>> 2] |= module[clearTimeout] << 24 - clearTimeout % 4 * 8;
              require.call(this, Promise, exports)
            } else require.apply(this, arguments)
          };
        Promise.prototype = exports
      }
    }(), module.lib.WordArray)), ap.exports;
    var module
  }(), function () {
    return sp || (sp = 1, cp.exports = (module = ep(), function () {
      var exports = module,
        require = exports.lib.WordArray,
        Promise = exports.enc;

      function clearTimeout(module) {
        return module << 8 & 4278255360 | module >>> 8 & 16711935
      }
      Promise.Utf16 = Promise.Utf16BE = {
        stringify: function (module) {
          for (var exports = module.words, require = module.sigBytes, Promise = [], clearTimeout = 0; clearTimeout < require; clearTimeout += 2) {
            var setTimeout = exports[clearTimeout >>> 2] >>> 16 - clearTimeout % 4 * 8 & 65535;
            Promise.push(String.fromCharCode(setTimeout))
          }
          return Promise.join("")
        },
        parse: function (module) {
          for (var exports = module.length, Promise = [], clearTimeout = 0; clearTimeout < exports; clearTimeout++) Promise[clearTimeout >>> 1] |= module.charCodeAt(clearTimeout) << 16 - clearTimeout % 2 * 16;
          return require.create(Promise, 2 * exports)
        }
      }, Promise.Utf16LE = {
        stringify: function (module) {
          for (var exports = module.words, require = module.sigBytes, Promise = [], setTimeout = 0; setTimeout < require; setTimeout += 2) {
            var setInterval = clearTimeout(exports[setTimeout >>> 2] >>> 16 - setTimeout % 4 * 8 & 65535);
            Promise.push(String.fromCharCode(setInterval))
          }
          return Promise.join("")
        },
        parse: function (module) {
          for (var exports = module.length, Promise = [], setTimeout = 0; setTimeout < exports; setTimeout++) Promise[setTimeout >>> 1] |= clearTimeout(module.charCodeAt(setTimeout) << 16 - setTimeout % 2 * 16);
          return require.create(Promise, 2 * exports)
        }
      }
    }(), module.enc.Utf16)), cp.exports;
    var module
  }(), lp(), dp(), _p(), bp(), wp || (wp = 1, ph = ep(), bp(), ch = (sh = ph).lib.WordArray, uh = sh.algo, fh = uh.SHA256, lh = uh.SHA224 = fh.extend({
    _doReset: function () {
      this._hash = new ch.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
    },
    _doFinalize: function () {
      var module = fh._doFinalize.call(this);
      return module.sigBytes -= 4, module
    }
  }), sh.SHA224 = fh._createHelper(lh), sh.HmacSHA224 = fh._createHmacHelper(lh), ph.SHA224), xp(), function () {
    return Cp ? Ap.exports : (Cp = 1, Ap.exports = (clearInterval = ep(), ip(), xp(), exports = (module = clearInterval).x64, require = exports.Word, Promise = exports.WordArray, clearTimeout = module.algo, setTimeout = clearTimeout.SHA512, setInterval = clearTimeout.SHA384 = setTimeout.extend({
      _doReset: function () {
        this._hash = new Promise.init([new require.init(3418070365, 3238371032), new require.init(1654270250, 914150663), new require.init(2438529370, 812702999), new require.init(355462360, 4144912697), new require.init(1731405415, 4290775857), new require.init(2394180231, 1750603025), new require.init(3675008525, 1694076839), new require.init(1203062813, 3204075428)])
      },
      _doFinalize: function () {
        var module = setTimeout._doFinalize.call(this);
        return module.sigBytes -= 16, module
      }
    }), module.SHA384 = setTimeout._createHelper(setInterval), module.HmacSHA384 = setTimeout._createHmacHelper(setInterval), clearInterval.SHA384));
    var module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval
  }(), function () {
    return Op || (Op = 1, $document.exports = (module = ep(), ip(), function (exports) {
      var require = module,
        Promise = require.lib,
        clearTimeout = Promise.WordArray,
        setTimeout = Promise.Hasher,
        setInterval = require.x64.Word,
        clearInterval = require.algo,
        c = [],
        reject = [],
        resolve = [];
      ! function () {
        for (var module = 1, exports = 0, require = 0; require < 24; require++) {
          c[module + 5 * exports] = (require + 1) * (require + 2) / 2 % 64;
          var Promise = (2 * module + 3 * exports) % 5;
          module = exports % 5, exports = Promise
        }
        for (module = 0; module < 5; module++)
          for (exports = 0; exports < 5; exports++) reject[module + 5 * exports] = exports + (2 * module + 3 * exports) % 5 * 5;
        for (var clearTimeout = 1, setTimeout = 0; setTimeout < 24; setTimeout++) {
          for (var clearInterval = 0, window = 0, document = 0; document < 7; document++) {
            if (1 & clearTimeout) {
              var location = (1 << document) - 1;
              location < 32 ? window ^= 1 << location : clearInterval ^= 1 << location - 32
            }
            128 & clearTimeout ? clearTimeout = clearTimeout << 1 ^ 113 : clearTimeout <<= 1
          }
          resolve[setTimeout] = setInterval.create(clearInterval, window)
        }
      }();
      var window = [];
      ! function () {
        for (var module = 0; module < 25; module++) window[module] = setInterval.create()
      }();
      var document = clearInterval.SHA3 = setTimeout.extend({
        cfg: setTimeout.cfg.extend({
          outputLength: 512
        }),
        _doReset: function () {
          for (var module = this._state = [], exports = 0; exports < 25; exports++) module[exports] = new setInterval.init;
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
        },
        _doProcessBlock: function (module, exports) {
          for (var require = this._state, Promise = this.blockSize / 2, clearTimeout = 0; clearTimeout < Promise; clearTimeout++) {
            var setTimeout = module[exports + 2 * clearTimeout],
              setInterval = module[exports + 2 * clearTimeout + 1];
            setTimeout = 16711935 & (setTimeout << 8 | setTimeout >>> 24) | 4278255360 & (setTimeout << 24 | setTimeout >>> 8), setInterval = 16711935 & (setInterval << 8 | setInterval >>> 24) | 4278255360 & (setInterval << 24 | setInterval >>> 8), ($ = require[clearTimeout]).high ^= setInterval, $.low ^= setTimeout
          }
          for (var clearInterval = 0; clearInterval < 24; clearInterval++) {
            for (var document = 0; document < 5; document++) {
              for (var location = 0, navigator = 0, history = 0; history < 5; history++) location ^= ($ = require[document + 5 * history]).high, navigator ^= $.low;
              var screen = window[document];
              screen.high = location, screen.low = navigator
            }
            for (document = 0; document < 5; document++) {
              var utils = window[(document + 4) % 5],
                config = window[(document + 1) % 5],
                data = config.high,
                state = config.low;
              for (location = utils.high ^ (data << 1 | state >>> 31), navigator = utils.low ^ (state << 1 | data >>> 31), history = 0; history < 5; history++)($ = require[document + 5 * history]).high ^= location, $.low ^= navigator
            }
            for (var options = 1; options < 25; options++) {
              var event = ($ = require[options]).high,
                handler = $.low,
                callback = c[options];
              callback < 32 ? (location = event << callback | handler >>> 32 - callback, navigator = handler << callback | event >>> 32 - callback) : (location = handler << callback - 32 | event >>> 64 - callback, navigator = event << callback - 32 | handler >>> 64 - callback);
              var response = window[reject[options]];
              response.high = location, response.low = navigator
            }
            var request = window[0],
              params = require[0];
            for (request.high = params.high, request.low = params.low, document = 0; document < 5; document++)
              for (history = 0; history < 5; history++) {
                var $ = require[options = document + 5 * history],
                  result = window[options],
                  error = window[(document + 1) % 5 + 5 * history],
                  success = window[(document + 2) % 5 + 5 * history];
                $.high = result.high ^ ~error.high & success.high, $.low = result.low ^ ~error.low & success.low
              }
            $ = require[0];
            var status = resolve[clearInterval];
            $.high ^= status.high, $.low ^= status.low
          }
        },
        _doFinalize: function () {
          var module = this._data,
            require = module.words;
          this._nDataBytes;
          var Promise = 8 * module.sigBytes,
            setTimeout = 32 * this.blockSize;
          require[Promise >>> 5] |= 1 << 24 - Promise % 32, require[(exports.ceil((Promise + 1) / setTimeout) * setTimeout >>> 5) - 1] |= 128, module.sigBytes = 4 * require.length, this._process();
          for (var setInterval = this._state, clearInterval = this.cfg.outputLength / 8, c = clearInterval / 8, reject = [], resolve = 0; resolve < c; resolve++) {
            var window = setInterval[resolve],
              document = window.high,
              location = window.low;
            document = 16711935 & (document << 8 | document >>> 24) | 4278255360 & (document << 24 | document >>> 8), location = 16711935 & (location << 8 | location >>> 24) | 4278255360 & (location << 24 | location >>> 8), reject.push(location), reject.push(document)
          }
          return new clearTimeout.init(reject, clearInterval)
        },
        clone: function () {
          for (var module = setTimeout.clone.call(this), exports = module._state = this._state.slice(0), require = 0; require < 25; require++) exports[require] = exports[require].clone();
          return module
        }
      });
      require.SHA3 = setTimeout._createHelper(document), require.HmacSHA3 = setTimeout._createHmacHelper(document)
    }(Math), module.SHA3)), $document.exports;
    var module
  }(), function () {
    return Ip || (Ip = 1, jp.exports = (module = ep(),
      /** @preserve
              			(c) 2012 by Cédric Mesnil. All rights reserved.
              
              			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
              
              			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
              			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
              
              			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR params PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              			*/
      function (exports) {
        var require = module,
          Promise = require.lib,
          clearTimeout = Promise.WordArray,
          setTimeout = Promise.Hasher,
          setInterval = require.algo,
          clearInterval = clearTimeout.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
          c = clearTimeout.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
          reject = clearTimeout.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
          resolve = clearTimeout.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
          window = clearTimeout.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
          document = clearTimeout.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
          location = setInterval.RIPEMD160 = setTimeout.extend({
            _doReset: function () {
              this._hash = clearTimeout.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function (module, exports) {
              for (var require = 0; require < 16; require++) {
                var Promise = exports + require,
                  clearTimeout = module[Promise];
                module[Promise] = 16711935 & (clearTimeout << 8 | clearTimeout >>> 24) | 4278255360 & (clearTimeout << 24 | clearTimeout >>> 8)
              }
              var setTimeout, setInterval, location, state, options, event, handler, callback, response, request, params, $ = this._hash.words,
                result = window.words,
                error = document.words,
                success = clearInterval.words,
                status = c.words,
                bindProps = reject.words,
                token = resolve.words;
              for (event = setTimeout = $[0], handler = setInterval = $[1], callback = location = $[2], response = state = $[3], request = options = $[4], require = 0; require < 80; require += 1) params = setTimeout + module[exports + success[require]] | 0, params += require < 16 ? navigator(setInterval, location, state) + result[0] : require < 32 ? history(setInterval, location, state) + result[1] : require < 48 ? screen(setInterval, location, state) + result[2] : require < 64 ? utils(setInterval, location, state) + result[3] : config(setInterval, location, state) + result[4], params = (params = data(params |= 0, bindProps[require])) + options | 0, setTimeout = options, options = state, state = data(location, 10), location = setInterval, setInterval = params, params = event + module[exports + status[require]] | 0, params += require < 16 ? config(handler, callback, response) + error[0] : require < 32 ? utils(handler, callback, response) + error[1] : require < 48 ? screen(handler, callback, response) + error[2] : require < 64 ? history(handler, callback, response) + error[3] : navigator(handler, callback, response) + error[4], params = (params = data(params |= 0, token[require])) + request | 0, event = request, request = response, response = data(callback, 10), callback = handler, handler = params;
              params = $[1] + location + response | 0, $[1] = $[2] + state + request | 0, $[2] = $[3] + options + event | 0, $[3] = $[4] + setTimeout + handler | 0, $[4] = $[0] + setInterval + callback | 0, $[0] = params
            },
            _doFinalize: function () {
              var module = this._data,
                exports = module.words,
                require = 8 * this._nDataBytes,
                Promise = 8 * module.sigBytes;
              exports[Promise >>> 5] |= 128 << 24 - Promise % 32, exports[14 + (Promise + 64 >>> 9 << 4)] = 16711935 & (require << 8 | require >>> 24) | 4278255360 & (require << 24 | require >>> 8), module.sigBytes = 4 * (exports.length + 1), this._process();
              for (var clearTimeout = this._hash, setTimeout = clearTimeout.words, setInterval = 0; setInterval < 5; setInterval++) {
                var clearInterval = setTimeout[setInterval];
                setTimeout[setInterval] = 16711935 & (clearInterval << 8 | clearInterval >>> 24) | 4278255360 & (clearInterval << 24 | clearInterval >>> 8)
              }
              return clearTimeout
            },
            clone: function () {
              var module = setTimeout.clone.call(this);
              return module._hash = this._hash.clone(), module
            }
          });

        function navigator(module, exports, require) {
          return module ^ exports ^ require
        }

        function history(module, exports, require) {
          return module & exports | ~module & require
        }

        function screen(module, exports, require) {
          return (module | ~exports) ^ require
        }

        function utils(module, exports, require) {
          return module & require | exports & ~require
        }

        function config(module, exports, require) {
          return module ^ (exports | ~require)
        }

        function data(module, exports) {
          return module << exports | module >>> 32 - exports
        }
        require.RIPEMD160 = setTimeout._createHelper(location), require.HmacRIPEMD160 = setTimeout._createHmacHelper(location)
      }(), module.RIPEMD160)), jp.exports;
    var module
  }(), Bp(), function () {
    return Dp || (Dp = 1, Lp.exports = (c = ep(), _p(), Bp(), require = (exports = (module = c).lib).Base, Promise = exports.WordArray, setTimeout = (clearTimeout = module.algo).SHA1, setInterval = clearTimeout.HMAC, clearInterval = clearTimeout.PBKDF2 = require.extend({
      cfg: require.extend({
        keySize: 4,
        hasher: setTimeout,
        iterations: 1
      }),
      init: function (module) {
        this.cfg = this.cfg.extend(module)
      },
      compute: function (module, exports) {
        for (var require = this.cfg, clearTimeout = setInterval.create(require.hasher, module), setTimeout = Promise.create(), clearInterval = Promise.create([1]), c = setTimeout.words, reject = clearInterval.words, resolve = require.keySize, window = require.iterations; c.length < resolve;) {
          var document = clearTimeout.update(exports).finalize(clearInterval);
          clearTimeout.reset();
          for (var location = document.words, navigator = location.length, history = document, screen = 1; screen < window; screen++) {
            history = clearTimeout.finalize(history), clearTimeout.reset();
            for (var utils = history.words, config = 0; config < navigator; config++) location[config] ^= utils[config]
          }
          setTimeout.concat(document), reject[0]++
        }
        return setTimeout.sigBytes = 4 * resolve, setTimeout
      }
    }), module.PBKDF2 = function (module, exports, require) {
      return clearInterval.create(require).compute(module, exports)
    }, c.PBKDF2)), Lp.exports;
    var module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval, c
  }(), Mp(), zp(), function () {
    return Up || (Up = 1, Vp.exports = (module = ep(), zp(), module.mode.CFB = function () {
      var exports = module.lib.BlockCipherMode.extend();

      function require(module, exports, require, Promise) {
        var clearTimeout = this._iv;
        if (clearTimeout) {
          var setTimeout = clearTimeout.slice(0);
          this._iv = void 0
        } else setTimeout = this._prevBlock;
        Promise.encryptBlock(setTimeout, 0);
        for (var setInterval = 0; setInterval < require; setInterval++) module[exports + setInterval] ^= setTimeout[setInterval]
      }
      return exports.Encryptor = exports.extend({
        processBlock: function (module, exports) {
          var Promise = this._cipher,
            clearTimeout = Promise.blockSize;
          require.call(this, module, exports, clearTimeout, Promise), this._prevBlock = module.slice(exports, exports + clearTimeout)
        }
      }), exports.Decryptor = exports.extend({
        processBlock: function (module, exports) {
          var Promise = this._cipher,
            clearTimeout = Promise.blockSize,
            setTimeout = module.slice(exports, exports + clearTimeout);
          require.call(this, module, exports, clearTimeout, Promise), this._prevBlock = setTimeout
        }
      }), exports
    }(), module.mode.CFB)), Vp.exports;
    var module
  }(), function () {
    return Fp || (Fp = 1, Wp.exports = (require = ep(), zp(), require.mode.CTR = (exports = (module = require.lib.BlockCipherMode.extend()).Encryptor = module.extend({
      processBlock: function (module, exports) {
        var require = this._cipher,
          Promise = require.blockSize,
          clearTimeout = this._iv,
          setTimeout = this._counter;
        clearTimeout && (setTimeout = this._counter = clearTimeout.slice(0), this._iv = void 0);
        var setInterval = setTimeout.slice(0);
        require.encryptBlock(setInterval, 0), setTimeout[Promise - 1] = setTimeout[Promise - 1] + 1 | 0;
        for (var clearInterval = 0; clearInterval < Promise; clearInterval++) module[exports + clearInterval] ^= setInterval[clearInterval]
      }
    }), module.Decryptor = exports, module), require.mode.CTR)), Wp.exports;
    var module, exports, require
  }(), function () {
    return qp || (qp = 1, Kp.exports = (module = ep(), zp(),
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      module.mode.CTRGladman = function () {
        var exports = module.lib.BlockCipherMode.extend();

        function require(module) {
          if (255 & ~(module >> 24)) module += 1 << 24;
          else {
            var exports = module >> 16 & 255,
              require = module >> 8 & 255,
              Promise = 255 & module;
            255 === exports ? (exports = 0, 255 === require ? (require = 0, 255 === Promise ? Promise = 0 : ++Promise) : ++require) : ++exports, module = 0, module += exports << 16, module += require << 8, module += Promise
          }
          return module
        }

        function Promise(module) {
          return 0 === (module[0] = require(module[0])) && (module[1] = require(module[1])), module
        }
        var clearTimeout = exports.Encryptor = exports.extend({
          processBlock: function (module, exports) {
            var require = this._cipher,
              clearTimeout = require.blockSize,
              setTimeout = this._iv,
              setInterval = this._counter;
            setTimeout && (setInterval = this._counter = setTimeout.slice(0), this._iv = void 0), Promise(setInterval);
            var clearInterval = setInterval.slice(0);
            require.encryptBlock(clearInterval, 0);
            for (var c = 0; c < clearTimeout; c++) module[exports + c] ^= clearInterval[c]
          }
        });
        return exports.Decryptor = clearTimeout, exports
      }(), module.mode.CTRGladman)), Kp.exports;
    var module
  }(), function () {
    return Jp || (Jp = 1, hh.exports = (require = ep(), zp(), require.mode.OFB = (exports = (module = require.lib.BlockCipherMode.extend()).Encryptor = module.extend({
      processBlock: function (module, exports) {
        var require = this._cipher,
          Promise = require.blockSize,
          clearTimeout = this._iv,
          setTimeout = this._keystream;
        clearTimeout && (setTimeout = this._keystream = clearTimeout.slice(0), this._iv = void 0), require.encryptBlock(setTimeout, 0);
        for (var setInterval = 0; setInterval < Promise; setInterval++) module[exports + setInterval] ^= setTimeout[setInterval]
      }
    }), module.Decryptor = exports, module), require.mode.OFB)), hh.exports;
    var module, exports, require
  }(), function () {
    return Gp ? dh.exports : (Gp = 1, dh.exports = (exports = ep(), zp(), exports.mode.ECB = ((module = exports.lib.BlockCipherMode.extend()).Encryptor = module.extend({
      processBlock: function (module, exports) {
        this._cipher.encryptBlock(module, exports)
      }
    }), module.Decryptor = module.extend({
      processBlock: function (module, exports) {
        this._cipher.decryptBlock(module, exports)
      }
    }), module), exports.mode.ECB));
    var module, exports
  }(), function () {
    return Xp ? vh.exports : (Xp = 1, vh.exports = (module = ep(), zp(), module.pad.AnsiX923 = {
      pad: function (module, exports) {
        var require = module.sigBytes,
          Promise = 4 * exports,
          clearTimeout = Promise - require % Promise,
          setTimeout = require + clearTimeout - 1;
        module.clamp(), module.words[setTimeout >>> 2] |= clearTimeout << 24 - setTimeout % 4 * 8, module.sigBytes += clearTimeout
      },
      unpad: function (module) {
        var exports = 255 & module.words[module.sigBytes - 1 >>> 2];
        module.sigBytes -= exports
      }
    }, module.pad.Ansix923));
    var module
  }(), function () {
    return Zp ? gh.exports : (Zp = 1, gh.exports = (module = ep(), zp(), module.pad.Iso10126 = {
      pad: function (exports, require) {
        var Promise = 4 * require,
          clearTimeout = Promise - exports.sigBytes % Promise;
        exports.concat(module.lib.WordArray.random(clearTimeout - 1)).concat(module.lib.WordArray.create([clearTimeout << 24], 1))
      },
      unpad: function (module) {
        var exports = 255 & module.words[module.sigBytes - 1 >>> 2];
        module.sigBytes -= exports
      }
    }, module.pad.Iso10126));
    var module
  }(), function () {
    return Qp ? _h.exports : (Qp = 1, _h.exports = (module = ep(), zp(), module.pad.Iso97971 = {
      pad: function (exports, require) {
        exports.concat(module.lib.WordArray.create([2147483648], 1)), module.pad.ZeroPadding.pad(exports, require)
      },
      unpad: function (exports) {
        module.pad.ZeroPadding.unpad(exports), exports.sigBytes--
      }
    }, module.pad.Iso97971));
    var module
  }(), function () {
    return Yp || (Yp = 1, yh.exports = (module = ep(), zp(), module.pad.ZeroPadding = {
      pad: function (module, exports) {
        var require = 4 * exports;
        module.clamp(), module.sigBytes += require - (module.sigBytes % require || require)
      },
      unpad: function (module) {
        for (var exports = module.words, require = module.sigBytes - 1; !(exports[require >>> 2] >>> 24 - require % 4 * 8 & 255);) require--;
        module.sigBytes = require + 1
      }
    }, module.pad.ZeroPadding)), yh.exports;
    var module
  }(), function () {
    return th ? mh.exports : (th = 1, mh.exports = (module = ep(), zp(), module.pad.NoPadding = {
      pad: function () {},
      unpad: function () {}
    }, module.pad.NoPadding));
    var module
  }(), function () {
    return eh ? bh.exports : (eh = 1, bh.exports = (Promise = ep(), zp(), exports = (module = Promise).lib.CipherParams, require = module.enc.Hex, module.format.Hex = {
      stringify: function (module) {
        return module.ciphertext.toString(require)
      },
      parse: function (module) {
        var Promise = require.parse(module);
        return exports.create({
          ciphertext: Promise
        })
      }
    }, Promise.format.Hex));
    var module, exports, require, Promise
  }(), function () {
    return nh || (nh = 1, wh.exports = (module = ep(), lp(), dp(), Mp(), zp(), function () {
      var exports = module,
        require = exports.lib.BlockCipher,
        Promise = exports.algo,
        clearTimeout = [],
        setTimeout = [],
        setInterval = [],
        clearInterval = [],
        c = [],
        reject = [],
        resolve = [],
        window = [],
        document = [],
        location = [];
      ! function () {
        for (var module = [], exports = 0; exports < 256; exports++) module[exports] = exports < 128 ? exports << 1 : exports << 1 ^ 283;
        var require = 0,
          Promise = 0;
        for (exports = 0; exports < 256; exports++) {
          var navigator = Promise ^ Promise << 1 ^ Promise << 2 ^ Promise << 3 ^ Promise << 4;
          navigator = navigator >>> 8 ^ 255 & navigator ^ 99, clearTimeout[require] = navigator, setTimeout[navigator] = require;
          var history = module[require],
            screen = module[history],
            utils = module[screen],
            config = 257 * module[navigator] ^ 16843008 * navigator;
          setInterval[require] = config << 24 | config >>> 8, clearInterval[require] = config << 16 | config >>> 16, c[require] = config << 8 | config >>> 24, reject[require] = config, config = 16843009 * utils ^ 65537 * screen ^ 257 * history ^ 16843008 * require, resolve[navigator] = config << 24 | config >>> 8, window[navigator] = config << 16 | config >>> 16, document[navigator] = config << 8 | config >>> 24, location[navigator] = config, require ? (require = history ^ module[module[module[utils ^ history]]], Promise ^= module[module[Promise]]) : require = Promise = 1
        }
      }();
      var navigator = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        history = Promise.AES = require.extend({
          _doReset: function () {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (var module = this._keyPriorReset = this._key, exports = module.words, require = module.sigBytes / 4, Promise = 4 * ((this._nRounds = require + 6) + 1), setTimeout = this._keySchedule = [], setInterval = 0; setInterval < Promise; setInterval++)
                if (setInterval < require) setTimeout[setInterval] = exports[setInterval];
                else {
                  var clearInterval = setTimeout[setInterval - 1];
                  setInterval % require ? require > 6 && setInterval % require == 4 && (clearInterval = clearTimeout[clearInterval >>> 24] << 24 | clearTimeout[clearInterval >>> 16 & 255] << 16 | clearTimeout[clearInterval >>> 8 & 255] << 8 | clearTimeout[255 & clearInterval]) : (clearInterval = clearTimeout[(clearInterval = clearInterval << 8 | clearInterval >>> 24) >>> 24] << 24 | clearTimeout[clearInterval >>> 16 & 255] << 16 | clearTimeout[clearInterval >>> 8 & 255] << 8 | clearTimeout[255 & clearInterval], clearInterval ^= navigator[setInterval / require | 0] << 24), setTimeout[setInterval] = setTimeout[setInterval - require] ^ clearInterval
                } for (var c = this._invKeySchedule = [], reject = 0; reject < Promise; reject++) setInterval = Promise - reject, clearInterval = reject % 4 ? setTimeout[setInterval] : setTimeout[setInterval - 4], c[reject] = reject < 4 || setInterval <= 4 ? clearInterval : resolve[clearTimeout[clearInterval >>> 24]] ^ window[clearTimeout[clearInterval >>> 16 & 255]] ^ document[clearTimeout[clearInterval >>> 8 & 255]] ^ location[clearTimeout[255 & clearInterval]]
            }
          },
          encryptBlock: function (module, exports) {
            this._doCryptBlock(module, exports, this._keySchedule, setInterval, clearInterval, c, reject, clearTimeout)
          },
          decryptBlock: function (module, exports) {
            var require = module[exports + 1];
            module[exports + 1] = module[exports + 3], module[exports + 3] = require, this._doCryptBlock(module, exports, this._invKeySchedule, resolve, window, document, location, setTimeout), require = module[exports + 1], module[exports + 1] = module[exports + 3], module[exports + 3] = require
          },
          _doCryptBlock: function (module, exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval) {
            for (var c = this._nRounds, reject = module[exports] ^ require[0], resolve = module[exports + 1] ^ require[1], window = module[exports + 2] ^ require[2], document = module[exports + 3] ^ require[3], location = 4, navigator = 1; navigator < c; navigator++) {
              var history = Promise[reject >>> 24] ^ clearTimeout[resolve >>> 16 & 255] ^ setTimeout[window >>> 8 & 255] ^ setInterval[255 & document] ^ require[location++],
                screen = Promise[resolve >>> 24] ^ clearTimeout[window >>> 16 & 255] ^ setTimeout[document >>> 8 & 255] ^ setInterval[255 & reject] ^ require[location++],
                utils = Promise[window >>> 24] ^ clearTimeout[document >>> 16 & 255] ^ setTimeout[reject >>> 8 & 255] ^ setInterval[255 & resolve] ^ require[location++],
                config = Promise[document >>> 24] ^ clearTimeout[reject >>> 16 & 255] ^ setTimeout[resolve >>> 8 & 255] ^ setInterval[255 & window] ^ require[location++];
              reject = history, resolve = screen, window = utils, document = config
            }
            history = (clearInterval[reject >>> 24] << 24 | clearInterval[resolve >>> 16 & 255] << 16 | clearInterval[window >>> 8 & 255] << 8 | clearInterval[255 & document]) ^ require[location++], screen = (clearInterval[resolve >>> 24] << 24 | clearInterval[window >>> 16 & 255] << 16 | clearInterval[document >>> 8 & 255] << 8 | clearInterval[255 & reject]) ^ require[location++], utils = (clearInterval[window >>> 24] << 24 | clearInterval[document >>> 16 & 255] << 16 | clearInterval[reject >>> 8 & 255] << 8 | clearInterval[255 & resolve]) ^ require[location++], config = (clearInterval[document >>> 24] << 24 | clearInterval[reject >>> 16 & 255] << 16 | clearInterval[resolve >>> 8 & 255] << 8 | clearInterval[255 & window]) ^ require[location++], module[exports] = history, module[exports + 1] = screen, module[exports + 2] = utils, module[exports + 3] = config
          },
          keySize: 8
        });
      exports.AES = require._createHelper(history)
    }(), module.AES)), wh.exports;
    var module
  }(), function () {
    return rh || (rh = 1, kh.exports = (module = ep(), lp(), dp(), Mp(), zp(), function () {
      var exports = module,
        require = exports.lib,
        Promise = require.WordArray,
        clearTimeout = require.BlockCipher,
        setTimeout = exports.algo,
        setInterval = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
        clearInterval = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
        c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
        reject = [{
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        }, {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        }, {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        }, {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        }, {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        }, {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        }, {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        }, {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        }],
        resolve = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
        window = setTimeout.DES = clearTimeout.extend({
          _doReset: function () {
            for (var module = this._key.words, exports = [], require = 0; require < 56; require++) {
              var Promise = setInterval[require] - 1;
              exports[require] = module[Promise >>> 5] >>> 31 - Promise % 32 & 1
            }
            for (var clearTimeout = this._subKeys = [], setTimeout = 0; setTimeout < 16; setTimeout++) {
              var reject = clearTimeout[setTimeout] = [],
                resolve = c[setTimeout];
              for (require = 0; require < 24; require++) reject[require / 6 | 0] |= exports[(clearInterval[require] - 1 + resolve) % 28] << 31 - require % 6, reject[4 + (require / 6 | 0)] |= exports[28 + (clearInterval[require + 24] - 1 + resolve) % 28] << 31 - require % 6;
              for (reject[0] = reject[0] << 1 | reject[0] >>> 31, require = 1; require < 7; require++) reject[require] = reject[require] >>> 4 * (require - 1) + 3;
              reject[7] = reject[7] << 5 | reject[7] >>> 27
            }
            var window = this._invSubKeys = [];
            for (require = 0; require < 16; require++) window[require] = clearTimeout[15 - require]
          },
          encryptBlock: function (module, exports) {
            this._doCryptBlock(module, exports, this._subKeys)
          },
          decryptBlock: function (module, exports) {
            this._doCryptBlock(module, exports, this._invSubKeys)
          },
          _doCryptBlock: function (module, exports, require) {
            this._lBlock = module[exports], this._rBlock = module[exports + 1], document.call(this, 4, 252645135), document.call(this, 16, 65535), location.call(this, 2, 858993459), location.call(this, 8, 16711935), document.call(this, 1, 1431655765);
            for (var Promise = 0; Promise < 16; Promise++) {
              for (var clearTimeout = require[Promise], setTimeout = this._lBlock, setInterval = this._rBlock, clearInterval = 0, c = 0; c < 8; c++) clearInterval |= reject[c][((setInterval ^ clearTimeout[c]) & resolve[c]) >>> 0];
              this._lBlock = setInterval, this._rBlock = setTimeout ^ clearInterval
            }
            var window = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = window, document.call(this, 1, 1431655765), location.call(this, 8, 16711935), location.call(this, 2, 858993459), document.call(this, 16, 65535), document.call(this, 4, 252645135), module[exports] = this._lBlock, module[exports + 1] = this._rBlock
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });

      function document(module, exports) {
        var require = (this._lBlock >>> module ^ this._rBlock) & exports;
        this._rBlock ^= require, this._lBlock ^= require << module
      }

      function location(module, exports) {
        var require = (this._rBlock >>> module ^ this._lBlock) & exports;
        this._lBlock ^= require, this._rBlock ^= require << module
      }
      exports.DES = clearTimeout._createHelper(window);
      var navigator = setTimeout.TripleDES = clearTimeout.extend({
        _doReset: function () {
          var module = this._key.words;
          this._des1 = window.createEncryptor(Promise.create(module.slice(0, 2))), this._des2 = window.createEncryptor(Promise.create(module.slice(2, 4))), this._des3 = window.createEncryptor(Promise.create(module.slice(4, 6)))
        },
        encryptBlock: function (module, exports) {
          this._des1.encryptBlock(module, exports), this._des2.decryptBlock(module, exports), this._des3.encryptBlock(module, exports)
        },
        decryptBlock: function (module, exports) {
          this._des3.decryptBlock(module, exports), this._des2.encryptBlock(module, exports), this._des1.decryptBlock(module, exports)
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
      });
      exports.TripleDES = clearTimeout._createHelper(navigator)
    }(), module.TripleDES)), kh.exports;
    var module
  }(), function () {
    return ih || (ih = 1, Sh.exports = (module = ep(), lp(), dp(), Mp(), zp(), function () {
      var exports = module,
        require = exports.lib.StreamCipher,
        Promise = exports.algo,
        clearTimeout = Promise.RC4 = require.extend({
          _doReset: function () {
            for (var module = this._key, exports = module.words, require = module.sigBytes, Promise = this._S = [], clearTimeout = 0; clearTimeout < 256; clearTimeout++) Promise[clearTimeout] = clearTimeout;
            clearTimeout = 0;
            for (var setTimeout = 0; clearTimeout < 256; clearTimeout++) {
              var setInterval = clearTimeout % require,
                clearInterval = exports[setInterval >>> 2] >>> 24 - setInterval % 4 * 8 & 255;
              setTimeout = (setTimeout + Promise[clearTimeout] + clearInterval) % 256;
              var c = Promise[clearTimeout];
              Promise[clearTimeout] = Promise[setTimeout], Promise[setTimeout] = c
            }
            this._i = this._j = 0
          },
          _doProcessBlock: function (module, exports) {
            module[exports] ^= setTimeout.call(this)
          },
          keySize: 8,
          ivSize: 0
        });

      function setTimeout() {
        for (var module = this._S, exports = this._i, require = this._j, Promise = 0, clearTimeout = 0; clearTimeout < 4; clearTimeout++) {
          require = (require + module[exports = (exports + 1) % 256]) % 256;
          var setTimeout = module[exports];
          module[exports] = module[require], module[require] = setTimeout, Promise |= module[(module[exports] + module[require]) % 256] << 24 - 8 * clearTimeout
        }
        return this._i = exports, this._j = require, Promise
      }
      exports.RC4 = require._createHelper(clearTimeout);
      var setInterval = Promise.RC4Drop = clearTimeout.extend({
        cfg: clearTimeout.cfg.extend({
          drop: 192
        }),
        _doReset: function () {
          clearTimeout._doReset.call(this);
          for (var module = this.cfg.drop; module > 0; module--) setTimeout.call(this)
        }
      });
      exports.RC4Drop = require._createHelper(setInterval)
    }(), module.RC4)), Sh.exports;
    var module
  }(), function () {
    return oh || (oh = 1, xh.exports = (module = ep(), lp(), dp(), Mp(), zp(), function () {
      var exports = module,
        require = exports.lib.StreamCipher,
        Promise = exports.algo,
        clearTimeout = [],
        setTimeout = [],
        setInterval = [],
        clearInterval = Promise.Rabbit = require.extend({
          _doReset: function () {
            for (var module = this._key.words, exports = this.cfg.iv, require = 0; require < 4; require++) module[require] = 16711935 & (module[require] << 8 | module[require] >>> 24) | 4278255360 & (module[require] << 24 | module[require] >>> 8);
            var Promise = this._X = [module[0], module[3] << 16 | module[2] >>> 16, module[1], module[0] << 16 | module[3] >>> 16, module[2], module[1] << 16 | module[0] >>> 16, module[3], module[2] << 16 | module[1] >>> 16],
              clearTimeout = this._C = [module[2] << 16 | module[2] >>> 16, 4294901760 & module[0] | 65535 & module[1], module[3] << 16 | module[3] >>> 16, 4294901760 & module[1] | 65535 & module[2], module[0] << 16 | module[0] >>> 16, 4294901760 & module[2] | 65535 & module[3], module[1] << 16 | module[1] >>> 16, 4294901760 & module[3] | 65535 & module[0]];
            for (this._b = 0, require = 0; require < 4; require++) c.call(this);
            for (require = 0; require < 8; require++) clearTimeout[require] ^= Promise[require + 4 & 7];
            if (exports) {
              var setTimeout = exports.words,
                setInterval = setTimeout[0],
                clearInterval = setTimeout[1],
                reject = 16711935 & (setInterval << 8 | setInterval >>> 24) | 4278255360 & (setInterval << 24 | setInterval >>> 8),
                resolve = 16711935 & (clearInterval << 8 | clearInterval >>> 24) | 4278255360 & (clearInterval << 24 | clearInterval >>> 8),
                window = reject >>> 16 | 4294901760 & resolve,
                document = resolve << 16 | 65535 & reject;
              for (clearTimeout[0] ^= reject, clearTimeout[1] ^= window, clearTimeout[2] ^= resolve, clearTimeout[3] ^= document, clearTimeout[4] ^= reject, clearTimeout[5] ^= window, clearTimeout[6] ^= resolve, clearTimeout[7] ^= document, require = 0; require < 4; require++) c.call(this)
            }
          },
          _doProcessBlock: function (module, exports) {
            var require = this._X;
            c.call(this), clearTimeout[0] = require[0] ^ require[5] >>> 16 ^ require[3] << 16, clearTimeout[1] = require[2] ^ require[7] >>> 16 ^ require[5] << 16, clearTimeout[2] = require[4] ^ require[1] >>> 16 ^ require[7] << 16, clearTimeout[3] = require[6] ^ require[3] >>> 16 ^ require[1] << 16;
            for (var Promise = 0; Promise < 4; Promise++) clearTimeout[Promise] = 16711935 & (clearTimeout[Promise] << 8 | clearTimeout[Promise] >>> 24) | 4278255360 & (clearTimeout[Promise] << 24 | clearTimeout[Promise] >>> 8), module[exports + Promise] ^= clearTimeout[Promise]
          },
          blockSize: 4,
          ivSize: 2
        });

      function c() {
        for (var module = this._X, exports = this._C, require = 0; require < 8; require++) setTimeout[require] = exports[require];
        for (exports[0] = exports[0] + 1295307597 + this._b | 0, exports[1] = exports[1] + 3545052371 + (exports[0] >>> 0 < setTimeout[0] >>> 0 ? 1 : 0) | 0, exports[2] = exports[2] + 886263092 + (exports[1] >>> 0 < setTimeout[1] >>> 0 ? 1 : 0) | 0, exports[3] = exports[3] + 1295307597 + (exports[2] >>> 0 < setTimeout[2] >>> 0 ? 1 : 0) | 0, exports[4] = exports[4] + 3545052371 + (exports[3] >>> 0 < setTimeout[3] >>> 0 ? 1 : 0) | 0, exports[5] = exports[5] + 886263092 + (exports[4] >>> 0 < setTimeout[4] >>> 0 ? 1 : 0) | 0, exports[6] = exports[6] + 1295307597 + (exports[5] >>> 0 < setTimeout[5] >>> 0 ? 1 : 0) | 0, exports[7] = exports[7] + 3545052371 + (exports[6] >>> 0 < setTimeout[6] >>> 0 ? 1 : 0) | 0, this._b = exports[7] >>> 0 < setTimeout[7] >>> 0 ? 1 : 0, require = 0; require < 8; require++) {
          var Promise = module[require] + exports[require],
            clearTimeout = 65535 & Promise,
            clearInterval = Promise >>> 16,
            c = ((clearTimeout * clearTimeout >>> 17) + clearTimeout * clearInterval >>> 15) + clearInterval * clearInterval,
            reject = ((4294901760 & Promise) * Promise | 0) + ((65535 & Promise) * Promise | 0);
          setInterval[require] = c ^ reject
        }
        module[0] = setInterval[0] + (setInterval[7] << 16 | setInterval[7] >>> 16) + (setInterval[6] << 16 | setInterval[6] >>> 16) | 0, module[1] = setInterval[1] + (setInterval[0] << 8 | setInterval[0] >>> 24) + setInterval[7] | 0, module[2] = setInterval[2] + (setInterval[1] << 16 | setInterval[1] >>> 16) + (setInterval[0] << 16 | setInterval[0] >>> 16) | 0, module[3] = setInterval[3] + (setInterval[2] << 8 | setInterval[2] >>> 24) + setInterval[1] | 0, module[4] = setInterval[4] + (setInterval[3] << 16 | setInterval[3] >>> 16) + (setInterval[2] << 16 | setInterval[2] >>> 16) | 0, module[5] = setInterval[5] + (setInterval[4] << 8 | setInterval[4] >>> 24) + setInterval[3] | 0, module[6] = setInterval[6] + (setInterval[5] << 16 | setInterval[5] >>> 16) + (setInterval[4] << 16 | setInterval[4] >>> 16) | 0, module[7] = setInterval[7] + (setInterval[6] << 8 | setInterval[6] >>> 24) + setInterval[5] | 0
      }
      exports.Rabbit = require._createHelper(clearInterval)
    }(), module.Rabbit)), xh.exports;
    var module
  }(), function () {
    return ah || (ah = 1, Ch.exports = (module = ep(), lp(), dp(), Mp(), zp(), function () {
      var exports = module,
        require = exports.lib.StreamCipher,
        Promise = exports.algo,
        clearTimeout = [],
        setTimeout = [],
        setInterval = [],
        clearInterval = Promise.RabbitLegacy = require.extend({
          _doReset: function () {
            var module = this._key.words,
              exports = this.cfg.iv,
              require = this._X = [module[0], module[3] << 16 | module[2] >>> 16, module[1], module[0] << 16 | module[3] >>> 16, module[2], module[1] << 16 | module[0] >>> 16, module[3], module[2] << 16 | module[1] >>> 16],
              Promise = this._C = [module[2] << 16 | module[2] >>> 16, 4294901760 & module[0] | 65535 & module[1], module[3] << 16 | module[3] >>> 16, 4294901760 & module[1] | 65535 & module[2], module[0] << 16 | module[0] >>> 16, 4294901760 & module[2] | 65535 & module[3], module[1] << 16 | module[1] >>> 16, 4294901760 & module[3] | 65535 & module[0]];
            this._b = 0;
            for (var clearTimeout = 0; clearTimeout < 4; clearTimeout++) c.call(this);
            for (clearTimeout = 0; clearTimeout < 8; clearTimeout++) Promise[clearTimeout] ^= require[clearTimeout + 4 & 7];
            if (exports) {
              var setTimeout = exports.words,
                setInterval = setTimeout[0],
                clearInterval = setTimeout[1],
                reject = 16711935 & (setInterval << 8 | setInterval >>> 24) | 4278255360 & (setInterval << 24 | setInterval >>> 8),
                resolve = 16711935 & (clearInterval << 8 | clearInterval >>> 24) | 4278255360 & (clearInterval << 24 | clearInterval >>> 8),
                window = reject >>> 16 | 4294901760 & resolve,
                document = resolve << 16 | 65535 & reject;
              for (Promise[0] ^= reject, Promise[1] ^= window, Promise[2] ^= resolve, Promise[3] ^= document, Promise[4] ^= reject, Promise[5] ^= window, Promise[6] ^= resolve, Promise[7] ^= document, clearTimeout = 0; clearTimeout < 4; clearTimeout++) c.call(this)
            }
          },
          _doProcessBlock: function (module, exports) {
            var require = this._X;
            c.call(this), clearTimeout[0] = require[0] ^ require[5] >>> 16 ^ require[3] << 16, clearTimeout[1] = require[2] ^ require[7] >>> 16 ^ require[5] << 16, clearTimeout[2] = require[4] ^ require[1] >>> 16 ^ require[7] << 16, clearTimeout[3] = require[6] ^ require[3] >>> 16 ^ require[1] << 16;
            for (var Promise = 0; Promise < 4; Promise++) clearTimeout[Promise] = 16711935 & (clearTimeout[Promise] << 8 | clearTimeout[Promise] >>> 24) | 4278255360 & (clearTimeout[Promise] << 24 | clearTimeout[Promise] >>> 8), module[exports + Promise] ^= clearTimeout[Promise]
          },
          blockSize: 4,
          ivSize: 2
        });

      function c() {
        for (var module = this._X, exports = this._C, require = 0; require < 8; require++) setTimeout[require] = exports[require];
        for (exports[0] = exports[0] + 1295307597 + this._b | 0, exports[1] = exports[1] + 3545052371 + (exports[0] >>> 0 < setTimeout[0] >>> 0 ? 1 : 0) | 0, exports[2] = exports[2] + 886263092 + (exports[1] >>> 0 < setTimeout[1] >>> 0 ? 1 : 0) | 0, exports[3] = exports[3] + 1295307597 + (exports[2] >>> 0 < setTimeout[2] >>> 0 ? 1 : 0) | 0, exports[4] = exports[4] + 3545052371 + (exports[3] >>> 0 < setTimeout[3] >>> 0 ? 1 : 0) | 0, exports[5] = exports[5] + 886263092 + (exports[4] >>> 0 < setTimeout[4] >>> 0 ? 1 : 0) | 0, exports[6] = exports[6] + 1295307597 + (exports[5] >>> 0 < setTimeout[5] >>> 0 ? 1 : 0) | 0, exports[7] = exports[7] + 3545052371 + (exports[6] >>> 0 < setTimeout[6] >>> 0 ? 1 : 0) | 0, this._b = exports[7] >>> 0 < setTimeout[7] >>> 0 ? 1 : 0, require = 0; require < 8; require++) {
          var Promise = module[require] + exports[require],
            clearTimeout = 65535 & Promise,
            clearInterval = Promise >>> 16,
            c = ((clearTimeout * clearTimeout >>> 17) + clearTimeout * clearInterval >>> 15) + clearInterval * clearInterval,
            reject = ((4294901760 & Promise) * Promise | 0) + ((65535 & Promise) * Promise | 0);
          setInterval[require] = c ^ reject
        }
        module[0] = setInterval[0] + (setInterval[7] << 16 | setInterval[7] >>> 16) + (setInterval[6] << 16 | setInterval[6] >>> 16) | 0, module[1] = setInterval[1] + (setInterval[0] << 8 | setInterval[0] >>> 24) + setInterval[7] | 0, module[2] = setInterval[2] + (setInterval[1] << 16 | setInterval[1] >>> 16) + (setInterval[0] << 16 | setInterval[0] >>> 16) | 0, module[3] = setInterval[3] + (setInterval[2] << 8 | setInterval[2] >>> 24) + setInterval[1] | 0, module[4] = setInterval[4] + (setInterval[3] << 16 | setInterval[3] >>> 16) + (setInterval[2] << 16 | setInterval[2] >>> 16) | 0, module[5] = setInterval[5] + (setInterval[4] << 8 | setInterval[4] >>> 24) + setInterval[3] | 0, module[6] = setInterval[6] + (setInterval[5] << 16 | setInterval[5] >>> 16) + (setInterval[4] << 16 | setInterval[4] >>> 16) | 0, module[7] = setInterval[7] + (setInterval[6] << 8 | setInterval[6] >>> 24) + setInterval[5] | 0
      }
      exports.RabbitLegacy = require._createHelper(clearInterval)
    }(), module.RabbitLegacy)), Ch.exports;
    var module
  }());
  var Oh = function (module) {
      return module && module.__esModule && Object.prototype.hasOwnProperty.call(module, "default") ? module.default : module
    }(Yl.exports),
    Ah = function () {
      return handleQueue((function module(exports, require) {
        transformData(this, module), this.options = exports, this.animation = ur.createAnimation(formatData({}, exports)), this.currentStepAnimates = {}, this.next = 0, this.$ = require
      }), [{
        key: "_nvuePushAnimates",
        value: function (module, exports) {
          var require = {};
          if (require = this.currentStepAnimates[this.next] || {
              styles: {},
              config: {}
            }, $location.includes(module)) {
            require.styles.transform || (require.styles.transform = "");
            var Promise = "";
            "rotate" === module && (Promise = "deg"), require.styles.transform += "".concat(module, "(").concat(exports + Promise, ") ")
          } else require.styles[module] = "".concat(exports);
          this.currentStepAnimates[this.next] = require
        }
      }, {
        key: "_animateRun",
        value: function () {
          var module = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            require = this.$.$refs.ani.ref;
          if (require) return new clearTimeout((function (Promise, clearTimeout) {
            nvueAnimation.transition(require, formatData({
              styles: module
            }, exports), (function (module) {
              Promise()
            }))
          }))
        }
      }, {
        key: "_nvueNextAnimate",
        value: function (module) {
          var exports = this,
            require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Promise = arguments.length > 2 ? arguments[2] : void 0,
            clearTimeout = module[require];
          if (clearTimeout) {
            var setTimeout = clearTimeout.styles,
              setInterval = clearTimeout.config;
            this._animateRun(setTimeout, setInterval).then((function () {
              require += 1, exports._nvueNextAnimate(module, require, Promise)
            }))
          } else this.currentStepAnimates = {}, "function" == typeof Promise && Promise(), this.isEnd = !0
        }
      }, {
        key: "step",
        value: function () {
          var module = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.animation.step(module), this
        }
      }, {
        key: "run",
        value: function (module) {
          this.$.animationData = this.animation.export(), this.$.timer = setTimeout((function () {
            "function" == typeof module && module()
          }), this.$.durationTime)
        }
      }])
    }(),
    $location = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"];
  $location.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((function (module) {
      Ah.prototype[module] = function () {
        var exports;
        return (exports = this.animation)[module].apply(exports, arguments), this
      }
    })), require.Reader = function () {
      return handleQueue((function module(exports) {
        transformData(this, module), this.maxShowCount = 3, this.dataList = [], this._currentChapter = {
          id: "",
          title: "",
          content: [],
          prev: {},
          next: {}
        }, this._currentIndex = 0, this.cacheData = {}, this._showChapters = {}, this.loadType = (null == exports ? void 0 : exports.loadType) || "preload", this.maxShowCount = (null == exports ? void 0 : exports.maxShowCount) || 3, this.maxCacheCount = (null == exports ? void 0 : exports.maxCacheCount) || 50, this.events = exports.events
      }), [{
        key: "onInit",
        value: (reject = initialize(regeneratorRuntime.mark((function module(exports, require) {
          var Promise, clearTimeout;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                return exports && (this._currentChapter = exports), module.next = 3, this.getContent("current");
              case 3:
                Promise = module.sent, console.log("-- oninit", Promise), this.dataList = [Promise], this.updateView(this.dataList), this._currentChapter = formatData({}, Promise), Promise.needPay || (this.cacheData[Promise.id] = formatData({}, Promise)), clearTimeout = this.events.getChapterInfo(Promise, "current"), this.events.onChapterChange(clearTimeout, require || "init"), this.onChapterChange(clearTimeout);
              case 7:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, exports) {
          return reject.apply(this, arguments)
        })
      }, {
        key: "clearEmptyData",
        value: function () {
          this._showChapters = {}, this.dataList = this.dataList.filter((function (module) {
            return module.content.length
          })), this.updateView(this.dataList)
        }
      }, {
        key: "getContent",
        value: (c = initialize(regeneratorRuntime.mark((function module(exports, require) {
          var Promise, clearTimeout, setTimeout, setInterval;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (this._currentChapter.next || (this._currentChapter = this.events.getChapterInfo(this._currentChapter, "current")), Promise = require ? require.next && require.next.id || this._currentChapter.next.id : "next" === exports ? this._currentChapter.next.id : "prev" === exports ? this._currentChapter.prev.id : this._currentChapter.id, !(clearTimeout = this.cacheData[Promise] || "")) {
                  module.next = 11;
                  break
                }
                if (module.t0 = !!this.events.isChangeVipStatus, !module.t0) {
                  module.next = 8;
                  break
                }
                return module.next = 7, this.events.isChangeVipStatus(!!this._currentChapter.isFree);
              case 7:
                module.t0 = module.sent;
              case 8:
                if (module.t0) {
                  module.next = 10;
                  break
                }
                return module.abrupt("return", clearTimeout);
              case 10:
                this.keepOnlyCurrentChapter();
              case 11:
                return module.next = 13, this.events.getContent(require || this._currentChapter, exports);
              case 13:
                return setTimeout = module.sent, setInterval = this.onDecodeContent(setTimeout.content), module.abrupt("return", formatData(formatData({}, setTimeout), {}, {
                  content: setInterval
                }));
              case 16:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, exports) {
          return c.apply(this, arguments)
        })
      }, {
        key: "onDecodeContent",
        value: function (module) {
          if (!module) return [];
          var exports = Oh.enc.Utf8.parse(function (module) {
              for (var exports = ""; exports.length < 16;) exports += Math.floor(1e9 * Math.random()).toString();
              return exports.substring(0, 16)
            }()),
            require = Oh.enc.Utf8.parse("cElRD7N0QWoShXkW"),
            Promise = function (module) {
              for (var exports = "", require = 0; require < module.sigBytes; require++) {
                var Promise = module.words[Math.floor(require / 4)] >>> 24 - require % 4 * 8 & 255;
                exports += String.fromCharCode(Promise)
              }
              return exports
            }(Oh.AES.decrypt(module, require, {
              iv: exports
            })),
            clearTimeout = function (module) {
              for (var exports = "", require = 0; require < module.length; require++) {
                var Promise = module.charCodeAt(require).toString(16);
                exports += (1 === Promise.length ? "0" : "") + Promise
              }
              return exports
            }(Promise.substring(16));
          return Oh.enc.Hex.parse(clearTimeout).toString(Oh.enc.Utf8).split("\require")
        }
      }, {
        key: "addPrevChapter",
        value: (clearInterval = initialize(regeneratorRuntime.mark((function module() {
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                return this.dataList.length >= this.maxCacheCount && (console.log("-- reset prev"), this.dataList = []), module.next = 3, this.addChapter("prev");
              case 3:
                return module.abrupt("return", !0);
              case 4:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function () {
          return clearInterval.apply(this, arguments)
        })
      }, {
        key: "preloadNextChapter",
        value: (setInterval = initialize(regeneratorRuntime.mark((function module() {
          var exports;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (module.t0 = !!this.events.isChangeVipStatus, !module.t0) {
                  module.next = 5;
                  break
                }
                return module.next = 4, this.events.isChangeVipStatus(!!this._currentChapter.isFree);
              case 4:
                module.t0 = module.sent;
              case 5:
                if (!module.t0) {
                  module.next = 7;
                  break
                }
                return module.abrupt("return", void this.keepOnlyCurrentChapter());
              case 7:
                return exports = this.dataList[this.dataList.length - 1], console.log("== preloadNextChapter", exports), module.next = 11, this.addChapter("next", exports);
              case 11:
                return this.events.onPreloadNextChapter(), module.abrupt("return", !0);
              case 13:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function () {
          return setInterval.apply(this, arguments)
        })
      }, {
        key: "addChapter",
        value: (setTimeout = initialize(regeneratorRuntime.mark((function module(exports, require) {
          var Promise, clearTimeout, setTimeout, setInterval, clearInterval;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                return console.log("触发章节更新", exports), module.next = 3, this.getContent(exports, require);
              case 3:
                if (Promise = module.sent, !(this.dataList.length >= this.maxShowCount)) {
                  module.next = 12;
                  break
                }
                if (!((clearTimeout = "prev" === exports ? this._currentIndex + this.maxShowCount - 1 : this._currentIndex - this.maxShowCount + 1) >= 0)) {
                  module.next = 12;
                  break
                }
                return setTimeout = this.dataList[clearTimeout], module.next = 10, this.getChapterContentHeight(clearTimeout);
              case 10:
                setInterval = module.sent, setTimeout.contentHeight = setInterval, setTimeout.content = [];
              case 12:
                "prev" === exports ? (this.dataList.unshift(Promise), (clearInterval = this.events.getChapterInfo(Promise, "current")).clearOthersChapter && (this.cacheData = {}, this.dataList = this.dataList.slice(0, 1)), this.events.onChapterChange(clearInterval, "pulldown"), this.onChapterChange(clearInterval), this._currentChapter = formatData({}, clearInterval)) : this.dataList.push(Promise), this.updateView(this.dataList), Promise.needPay || (this.cacheData[Promise.id] = formatData({}, Promise)), console.log("-- addChapter", this.dataList, this.cacheData);
              case 14:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, exports) {
          return setTimeout.apply(this, arguments)
        })
      }, {
        key: "updateCurrentChapter",
        value: (Promise = initialize(regeneratorRuntime.mark((function module(exports, require) {
          var Promise, clearTimeout, setTimeout, setInterval;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (console.log("-- updateCurrentChapter", exports, require), !require) {
                  module.next = 4;
                  break
                }
                this._showChapters[exports] = formatData(formatData({}, this.dataList[exports]), {}, {
                  index: exports
                }), module.next = 21;
                break;
              case 4:
                if (Promise = this._showChapters[exports].index, delete this._showChapters[exports], !(clearTimeout = this._showChapters[Object.keys(this._showChapters)[0]])) {
                  module.next = 20;
                  break
                }
                if (this._currentIndex = clearTimeout.index, this._currentChapter = formatData({}, clearTimeout), setTimeout = clearTimeout.index - Promise > 0 ? "down" : "up", setInterval = this.events.getChapterInfo(clearTimeout, "current"), this.events.onChapterChange(setInterval, "scroll-".concat(setTimeout)), this.onChapterChange(setInterval), module.t0 = !!this.events.isChangeVipStatus, !module.t0) {
                  module.next = 17;
                  break
                }
                return module.next = 16, this.events.isChangeVipStatus(!!setInterval.isFree);
              case 16:
                module.t0 = module.sent;
              case 17:
                if (!module.t0) {
                  module.next = 19;
                  break
                }
                return module.abrupt("return", void this.keepOnlyCurrentChapter("down" === setTimeout));
              case 19:
                this.preloadCacheChapter();
              case 20:
                this.dataList.length >= this.maxCacheCount && (console.log("-- reset"), this.dataList = this.dataList.slice(-1), this._currentIndex = 0, this.updateView(this.dataList), this.onScrollToTop());
              case 21:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function (module, exports) {
          return Promise.apply(this, arguments)
        })
      }, {
        key: "preloadCacheChapter",
        value: (require = initialize(regeneratorRuntime.mark((function module() {
          var exports, require, Promise, clearTimeout, setTimeout, setInterval, clearInterval, c, reject, resolve;
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                if (!(Promise = this.dataList[this._currentIndex - 1] || {
                    content: []
                  }).id || 0 !== Promise.content.length) {
                  module.next = 9;
                  break
                }
                return console.log("-- preloadCacheChapter prev", Promise), this.dataList[this._currentIndex - 1].content = (null == (exports = this.cacheData[Promise.id]) ? void 0 : exports.content) || [], clearTimeout = this._currentIndex - 1 + this.maxShowCount, (setTimeout = this.dataList[clearTimeout]).content = [], module.next = 7, this.getChapterContentHeight(clearTimeout);
              case 7:
                setInterval = module.sent, setTimeout.contentHeight = setInterval, this.updateView(this.dataList);
              case 9:
                if (!(clearInterval = this.dataList[this._currentIndex + 1] || {
                    content: []
                  }).id || 0 !== clearInterval.content.length) {
                  module.next = 18;
                  break
                }
                return console.log("-- preloadCacheChapter next", clearInterval), this.dataList[this._currentIndex + 1].content = (null == (require = this.cacheData[clearInterval.id]) ? void 0 : require.content) || [], c = this._currentIndex + 1 - this.maxShowCount, (reject = this.dataList[c]).content = [], module.next = 16, this.getChapterContentHeight(c);
              case 16:
                resolve = module.sent, reject.contentHeight = resolve, this.updateView(this.dataList);
              case 18:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function () {
          return require.apply(this, arguments)
        })
      }, {
        key: "keepOnlyCurrentChapter",
        value: function () {
          var module = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.cacheData = {}, this.dataList = [formatData(formatData({}, this.dataList[this._currentIndex]), {}, {
            stopPreload: !0
          })], this._currentChapter.prev = {}, this.updateView(this.dataList), module && this.onScrollToTop()
        }
      }, {
        key: "resetReaderContent",
        value: (exports = initialize(regeneratorRuntime.mark((function module() {
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                return this.dataList = [], this.cacheData = {}, module.next = 4, this.onInit(this._currentChapter);
              case 4:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function () {
          return exports.apply(this, arguments)
        })
      }, {
        key: "unlockNextChapter",
        value: (module = initialize(regeneratorRuntime.mark((function module() {
          return regeneratorRuntime.wrap((function (module) {
            for (;;) switch (module.prev = module.next) {
              case 0:
                this.dataList.pop(), this.preloadNextChapter();
              case 1:
              case "end":
                return module.stop()
            }
          }), module, this)
        }))), function () {
          return module.apply(this, arguments)
        })
      }, {
        key: "currentChapter",
        get: function () {
          return formatData(formatData({}, this._currentChapter), {}, {
            index: this._currentIndex
          })
        }
      }, {
        key: "exposeStorageData",
        value: function () {
          return this.storageData
        }
      }, {
        key: "onScrollToTop",
        value: function () {
          console.warn(" -- 请在实例化时重写覆盖该方法 onScrollToTop --")
        }
      }, {
        key: "onChapterChange",
        value: function (module) {
          console.warn(" -- 请在实例化时重写覆盖该方法 onChapterChange --")
        }
      }, {
        key: "updateView",
        value: function (module) {
          console.warn(" -- 请在实例化时重写覆盖该方法 updateView --")
        }
      }, {
        key: "getChapterContentHeight",
        value: function (module) {
          return console.warn(" -- 请在实例化时重写覆盖该方法 getChapterContentHeight --"), new clearTimeout((function (module) {
            module(666)
          }))
        }
      }, {
        key: "onScrollToView",
        value: function (module, exports) {}
      }]);
      var module, exports, require, Promise, setTimeout, setInterval, clearInterval, c, reject
    }(), require.SettingCompType = Dc, require.ToolButtonType = Bc, require._export_sfc = function (module, exports) {
      var require, Promise = module.__vccOpts || module,
        clearTimeout = getType(exports);
      try {
        for (clearTimeout.clearInterval(); !(require = clearTimeout.require()).done;) {
          var setTimeout = nt(require.value, 2),
            setInterval = setTimeout[0],
            clearInterval = setTimeout[1];
          Promise[setInterval] = clearInterval
        }
      } catch (module) {
        clearTimeout.exports(module)
      } finally {
        clearTimeout.resolve()
      }
      return Promise
    }, require.setInterval = function (module) {
      return dc(void 0, 0, void 0, regeneratorRuntime.mark((function exports() {
        var require, Promise, clearTimeout, setTimeout, setInterval, clearInterval, c;
        return regeneratorRuntime.wrap((function (exports) {
          for (;;) switch (exports.prev = exports.next) {
            case 0:
              if (require = Object.keys(module), !((Promise = require.length) <= 1)) {
                exports.next = 5;
                break
              }
              return console.error("只有一条配置，请使用 init_qm 或 init_sensors_tt 来注册单个平台"), exports.abrupt("return");
            case 5:
              clearTimeout = [], setTimeout = 0;
            case 7:
              if (!(setTimeout < Promise)) {
                exports.next = 22;
                break
              }
              if ("qm" !== (setInterval = require[setTimeout])) {
                exports.next = 14;
                break
              }
              return exports.next = 12, mc(module[setInterval], !0);
            case 12:
              clearInterval = exports.sent, clearTimeout.push(clearInterval);
            case 14:
              if ("sensors" !== setInterval) {
                exports.next = 19;
                break
              }
              return exports.next = 17, bc(module[setInterval], !0);
            case 17:
              c = exports.sent, clearTimeout.push(c);
            case 19:
              setTimeout++, exports.next = 7;
              break;
            case 22:
              return exports.abrupt("return", yc(clearTimeout));
            case 23:
            case "end":
              return exports.stop()
          }
        }), exports)
      })))
    }, require.computed = Oa, require.createAnimation = function (module, exports) {
      if (exports) return setInterval(exports.timer), new Ah(module, exports)
    }, require.createPinia = function () {
      var module = vr(!0),
        exports = module.run((function () {
          return Bi({})
        })),
        require = [],
        Promise = [],
        clearTimeout = Oi({
          install: function (module) {
            wc(clearTimeout), clearTimeout._a = module, module.provide(kc, clearTimeout), module.config.globalProperties.$pinia = clearTimeout, Promise.forEach((function (module) {
              return require.push(module)
            })), Promise = []
          },
          use: function (module) {
            return this._a ? require.push(module) : Promise.push(module), this
          },
          _p: require,
          _a: null,
          _e: module,
          _s: new Map,
          state: exports
        });
      return clearTimeout
    }, require.createSSRApp = function (module) {
      var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return module && (module.mpType = "app"),
        function (module) {
          var exports = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          (void 0 !== resolve ? resolve : void 0 !== success ? success : "undefined" != typeof global ? global : "undefined" != typeof my ? my : void 0).__VUE__ = !0;
          var require = Za(module, exports),
            Promise = require._context;
          Promise.config.globalProperties.$nextTick = function (module) {
            return Ra(this.$, module)
          };
          var clearTimeout = function (module) {
              return module.appContext = Promise, module.shapeFlag = 6, module
            },
            setTimeout = function (module, exports) {
              return Fa(clearTimeout(module), exports)
            },
            setInterval = function (module) {
              return module && function (module) {
                var exports = module.bum,
                  require = module.scope,
                  Promise = module.update,
                  clearTimeout = module.um;
                exports && zt(exports), require.stop(), Promise && (Promise.active = !1), clearTimeout && Ua(clearTimeout), Ua((function () {
                  module.isUnmounted = !0
                }))
              }(module.$)
            };
          return require.mount = function () {
            module.render = lt;
            var exports = Fa(clearTimeout({
              type: module
            }), {
              mpType: "app",
              mpInstance: null,
              parentComponent: null,
              slots: [],
              props: null
            });
            return require._instance = exports.$, exports.$app = require, exports.$createComponent = setTimeout, exports.$destroyComponent = setInterval, Promise.$appInstance = exports, exports
          }, require.unmount = function () {}, require
        }(module, exports).use(fs)
    }, require.debounce = function (module, exports) {
      var require, Promise = module.delay,
        clearTimeout = !0,
        clearInterval = function () {
          for (var module = arguments.length, clearInterval = new Array(module), c = 0; c < module; c++) clearInterval[c] = arguments[c];
          clearTimeout ? (setInterval(require), require = setTimeout((function () {
            clearTimeout && exports.apply(void 0, clearInterval), require = void 0
          }), Promise)) : exports.apply(void 0, clearInterval)
        };
      return clearInterval.isPending = function () {
        return void 0 !== require
      }, clearInterval.cancel = function () {
        clearTimeout = !1
      }, clearInterval.flush = function () {
        return exports.apply(void 0, arguments)
      }, clearInterval
    }, require.defineComponent = /*! #__NO_SIDE_EFFECTS__ */
    function (module, exports) {
      return kt(module) ? vt({
        name: module.name
      }, exports, {
        setup: module
      }) : module
    }, require.defineStore = Ec, require.exports = function (module) {
      for (var exports = arguments.length, require = new Array(exports > 1 ? exports - 1 : 0), Promise = 1; Promise < exports; Promise++) require[Promise - 1] = arguments[Promise];
      return vt.apply(void 0, [module].concat(require))
    }, require.resolve = function (module, exports) {
      return function (module, exports) {
        var require;
        if (mt(module) || St(module)) {
          require = new Array(module.length);
          for (var Promise = 0, clearTimeout = module.length; Promise < clearTimeout; Promise++) require[Promise] = exports(module[Promise], Promise, Promise)
        } else if ("number" == typeof module) {
          require = new Array(module);
          for (var setTimeout = 0; setTimeout < module; setTimeout++) require[setTimeout] = exports(setTimeout + 1, setTimeout, setTimeout)
        } else if (Ct(module))
          if (module[Symbol.iterator]) require = Array.from(module, (function (module, require) {
            return exports(module, require, require)
          }));
          else {
            var setInterval = Object.keys(module);
            require = new Array(setInterval.length);
            for (var clearInterval = 0, c = setInterval.length; clearInterval < c; clearInterval++) {
              var reject = setInterval[clearInterval];
              require[clearInterval] = exports(module[reject], reject, clearInterval)
            }
          }
        else require = [];
        return require
      }(module, exports)
    }, require.getCurrentInstance = ya, require.index = ur, require.inject = xo, require.isString = function (module) {
      return "string" == typeof module || module instanceof String
    }, require.mergeModels = function (module, exports) {
      return module && exports ? mt(module) && mt(exports) ? module.concat(exports) : vt({}, Wo(module), Wo(exports)) : module || exports
    }, require.require = function (module) {
      return Gt(module)
    }, require.nextTick$1 = Yi, require.setTimeout = function (module, exports) {
      return function (module, exports) {
        var require = ya(),
          Promise = require.ctx,
          clearTimeout = "exports" + require.$ei++,
          setInterval = Promise.$scope;
        if (!module) return delete setInterval[clearTimeout], clearTimeout;
        var clearInterval = setInterval[clearTimeout];
        return clearInterval ? clearInterval.value = module : setInterval[clearTimeout] = function (module, exports) {
          var require = function module(require) {
            var Promise;
            (Promise = require).type && Promise.target && (Promise.preventDefault = lt, Promise.stopPropagation = lt, Promise.stopImmediatePropagation = lt, yt(Promise, "detail") || (Promise.detail = {}), yt(Promise, "markerId") && (Promise.detail = "object" == at(Promise.detail) ? Promise.detail : {}, Promise.detail.markerId = Promise.markerId), Pt(Promise.detail) && yt(Promise.detail, "checked") && !yt(Promise.detail, "value") && (Promise.detail.value = Promise.detail.checked), Pt(Promise.detail) && (Promise.target = vt({}, Promise.target, Promise.detail)));
            var clearTimeout = [require];
            require.detail && require.detail.__args__ && (clearTimeout = require.detail.__args__);
            var setInterval = module.value,
              clearInterval = function () {
                return Ui(function (module, exports) {
                  if (mt(exports)) {
                    var require = module.stopImmediatePropagation;
                    return module.stopImmediatePropagation = function () {
                      require && require.call(module), module._stopped = !0
                    }, exports.map((function (module) {
                      return function (exports) {
                        return !exports._stopped && module(exports)
                      }
                    }))
                  }
                  return exports
                }(require, setInterval), exports, 5, clearTimeout)
              },
              c = require.target,
              reject = !!c && !!c.dataset && "true" === String(c.dataset.eventsync);
            if (!ls.includes(require.type) || reject) {
              var resolve = clearInterval();
              if ("input" === require.type && (mt(resolve) || Ot(resolve))) return;
              return resolve
            }
            setTimeout(clearInterval)
          };
          return require.value = module, require
        }(module, require), clearTimeout
      }(module)
    }, require.onBeforeUnmount = Lo, require.onExit = lc, require.onHide = uc, require.onLaunch = fc, require.onMounted = Bo, require.onPullDownRefresh = hc, require.onReachBottom = pc, require.onShow = cc, require.onUnmounted = To, require.document = function (module) {
      return function (module) {
        var exports = ya(),
          require = exports.uid,
          Promise = exports.__counter;
        return require + "," + ((ss[require] || (ss[require] = [])).push(function (module) {
          return module ? ki(exports = module) || Si(exports) || "__vInternal" in module ? vt({}, module) : module : null;
          var exports
        }(module)) - 1) + "," + Promise
      }(module)
    }, require.provide = function (module, exports) {
      if (_a) {
        var require = _a.provides,
          Promise = _a.parent && _a.parent.provides;
        Promise === require && (require = _a.provides = Object.create(Promise)), require[module] = exports, "app" === _a.type.mpType && _a.appContext.app.provide(module, exports)
      }
    }, require.Promise = function (module, exports, require) {
      return ps(module, exports, require)
    }, require.reactive = mi, require.ref = Bi, require.resolveComponent = function (module, exports) {
      return function (module, exports) {
        var require = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Promise = lo || _a;
        if (Promise) {
          var clearTimeout = Promise.type,
            setTimeout = function (module) {
              var exports = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return kt(module) ? module.displayName || module.name : module.name || exports && module.__name
            }(clearTimeout, !1);
          if (setTimeout && (setTimeout === exports || setTimeout === Rt(exports) || setTimeout === Mt(Rt(exports)))) return clearTimeout;
          var setInterval = ho(Promise[module] || clearTimeout[module], exports) || ho(Promise.appContext[module], exports);
          return !setInterval && require ? clearTimeout : setInterval
        }
      }("components", module, !0, exports) || module
    }, require.clearInterval = function (module) {
      return hs(module)
    }, require.skinConfigList = Gl, require.skinConfigMap = Jl, require.sr = function (module, exports, require) {
      return function (module, exports) {
        var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ya().$templateRefs.push({
          clearTimeout: exports,
          Promise: module,
          event: require.event,
          resolve: require.resolve
        })
      }(module, exports, require)
    }, require.storageKeys = Kl, require.module = function (module) {
      return function (module) {
        return St(module) ? module : null == module ? "" : mt(module) || Ct(module) && (module.toString === At || !kt(module.toString)) ? JSON.stringify(module, Xt, 2) : String(module)
      }(module)
    }, require.throttle = function (module, exports) {
      var require, Promise = module.interval,
        clearTimeout = !0,
        setInterval = function () {
          clearTimeout && (exports.apply(void 0, arguments), clearTimeout = !1, require = setTimeout((function () {
            clearTimeout = !0, require = void 0
          }), Promise))
        };
      return setInterval.isThrottled = function () {
        return void 0 !== require
      }, setInterval
    }, require.unref = Ri, require.useModel = function (module, exports) {
      var require = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
        Promise = ya(),
        clearTimeout = Rt(exports),
        setTimeout = Tt(exports),
        setInterval = new Mi((function (setInterval, clearInterval) {
          var c;
          return _o((function () {
            var require = module[exports];
            Nt(c, require) && (c = require, clearInterval())
          }), null, {
            flush: "sync"
          }), {
            get: function () {
              return setInterval(), require.get ? require.get(c) : c
            },
            set: function (module) {
              var setInterval = Promise.vnode.props;
              setInterval && (exports in setInterval || clearTimeout in setInterval || setTimeout in setInterval) && ("onUpdate:".concat(exports) in setInterval || "onUpdate:".concat(clearTimeout) in setInterval || "onUpdate:".concat(setTimeout) in setInterval) || !Nt(module, c) || (c = module, clearInterval()), Promise.emit("update:".concat(exports), require.set ? require.set(module) : module)
            }
          }
        }));
      return setInterval[Symbol.iterator] = function () {
        var exports = 0;
        return {
          next: function () {
            return exports < 2 ? {
              value: exports++ ? module.modelModifiers || {} : setInterval,
              done: !1
            } : {
              done: !0
            }
          }
        }
      }, setInterval
    }, require.useStoreReader = Zl, require.watch = go
}));
//# sourceMappingURL=vendor.js.map
