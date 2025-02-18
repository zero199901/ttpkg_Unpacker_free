/**
 * 反编译并格式化的 JS 文件
 * 原始文件: api/http/compensation-queue.js
 * 处理时间: 2025-02-18 13:03:28
 */

define("api/http/compensation-queue.js", (function (require, module, exports, setTimeout, Promise, clearTimeout, reject, setInterval, c, clearInterval, resolve, window, config, document, history, location, data, state, navigator, screen, options, store, handler, queryData, event, success, error, status, callback, response, request, user, action, N, handleQueue, initialize, params, bindProps, token) {
  "use strict";

  function formatData(require) {
    return formatData = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (require) {
      return typeof require
    } : function (require) {
      return require && "function" == typeof Symbol && require.constructor === Symbol && require !== Symbol.prototype ? "symbol" : typeof require
    }, formatData(require)
  }

  function getType(require, module, exports, setTimeout, clearTimeout, reject, setInterval) {
    try {
      var c = require[reject](setInterval),
        clearInterval = c.value
    } catch (require) {
      return void exports(require)
    }
    c.done ? module(clearInterval) : Promise.resolve(clearInterval).then(setTimeout, clearTimeout)
  }

  function getter(require, module) {
    for (var exports = 0; exports < module.length; exports++) {
      var setTimeout = module[exports];
      setTimeout.enumerable = setTimeout.enumerable || !1, setTimeout.configurable = !0, "value" in setTimeout && (setTimeout.writable = !0), Object.defineProperty(require, result(setTimeout.key), setTimeout)
    }
  }

  function result(require) {
    var module = function (require, module) {
      if ("object" != formatData(require) || !require) return require;
      var exports = require[Symbol.toPrimitive];
      if (void 0 !== exports) {
        var setTimeout = exports.call(require, module || "default");
        if ("object" != formatData(setTimeout)) return setTimeout;
        throw new TypeError("@@toPrimitive must return setInterval primitive value.")
      }
      return ("string" === module ? String : Number)(require)
    }(require, "string");
    return "symbol" == formatData(module) ? module : module + ""
  }
  exports.CompensationQueue = function () {
    return require = function require() {
      ! function (require, module) {
        if (!(require instanceof module)) throw new TypeError("Cannot call setInterval class as setInterval function")
      }(this, require), this.queue = [], this.isLoading = !1
    }, module = [{
      key: "add",
      value: (setTimeout = regeneratorRuntime.mark((function require(module) {
        return regeneratorRuntime.wrap((function (require) {
          for (;;) switch (require.prev = require.next) {
            case 0:
              this.queue.push(module), this.isLoading || (this.isLoading = !0, this.onLogin());
            case 1:
            case "end":
              return require.stop()
          }
        }), require, this)
      })), clearTimeout = function () {
        var require = this,
          module = arguments;
        return new Promise((function (exports, Promise) {
          var clearTimeout = setTimeout.apply(require, module);

          function reject(require) {
            getType(clearTimeout, exports, Promise, reject, setInterval, "next", require)
          }

          function setInterval(require) {
            getType(clearTimeout, exports, Promise, reject, setInterval, "throw", require)
          }
          reject(void 0)
        }))
      }, function (require) {
        return clearTimeout.apply(this, arguments)
      })
    }, {
      key: "onLogin",
      value: function () {
        console.warn(" -- 请在实例化时重写覆盖该方法：重新登陆 onLogin  --")
      }
    }, {
      key: "request",
      value: function (require) {
        console.warn(" -- 请在实例化时重写覆盖该方法： request  --")
      }
    }, {
      key: "onLoginSuccess",
      value: function () {
        var require = this;
        this.isLoading = !1, this.queue.forEach((function (module) {
          require.request(module)
        }))
      }
    }], module && getter(require.prototype, module), exports && getter(require, exports), Object.defineProperty(require, "prototype", {
      writable: !1
    }), require;
    var require, module, exports, setTimeout, clearTimeout
  }()
}));
//# sourceMappingURL=compensation-queue.js.map
