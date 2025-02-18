/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js
 * 处理时间: 2025-02-18 13:03:33
 */

define("node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js", (function (module, require, clearTimeout, setTimeout, exports, Promise, setInterval, clearInterval, c, reject, window, resolve, data, location, navigator, config, document, state, screen, history, handler, request, success, options, response, params, error, action, result, event, token, initialize, status, transformData, processEvent, $, store, mutation, callback) {
  "use strict";

  function bindProps(module) {
    return function (module) {
      if (Array.isArray(module)) return N(module)
    }(module) || function (module) {
      if ("undefined" != typeof Symbol && null != module[Symbol.iterator] || null != module["@@iterator"]) return Array.from(module)
    }(module) || function (module, require) {
      if (module) {
        if ("string" == typeof module) return N(module, require);
        var clearTimeout = {}.toString.call(module).slice(8, -1);
        return "Object" === clearTimeout && module.constructor && (clearTimeout = module.constructor.name), "Map" === clearTimeout || "Set" === clearTimeout ? Array.from(module) : "Arguments" === clearTimeout || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(clearTimeout) ? N(module, require) : void 0
      }
    }(module) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function N(module, require) {
    (null == require || require > module.length) && (require = module.length);
    for (var clearTimeout = 0, setTimeout = Array(require); clearTimeout < require; clearTimeout++) setTimeout[clearTimeout] = module[clearTimeout];
    return setTimeout
  }

  function utils(module) {
    return utils = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (module) {
      return typeof module
    } : function (module) {
      return module && "function" == typeof Symbol && module.constructor === Symbol && module !== Symbol.prototype ? "symbol" : typeof module
    }, utils(module)
  }

  function formatData(module, require) {
    var clearTimeout = Object.keys(module);
    if (Object.getOwnPropertySymbols) {
      var setTimeout = Object.getOwnPropertySymbols(module);
      require && (setTimeout = setTimeout.filter((function (require) {
        return Object.getOwnPropertyDescriptor(module, require).enumerable
      }))), clearTimeout.push.apply(clearTimeout, setTimeout)
    }
    return clearTimeout
  }

  function user(module) {
    for (var require = 1; require < arguments.length; require++) {
      var clearTimeout = null != arguments[require] ? arguments[require] : {};
      require % 2 ? formatData(Object(clearTimeout), !0).forEach((function (require) {
        U(module, require, clearTimeout[require])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(clearTimeout)) : formatData(Object(clearTimeout)).forEach((function (require) {
        Object.defineProperty(module, require, Object.getOwnPropertyDescriptor(clearTimeout, require))
      }))
    }
    return module
  }

  function U(module, require, clearTimeout) {
    return (require = function (module) {
      var require = function (module, require) {
        if ("object" != utils(module) || !module) return module;
        var clearTimeout = module[Symbol.toPrimitive];
        if (void 0 !== clearTimeout) {
          var setTimeout = clearTimeout.call(module, require || "default");
          if ("object" != utils(setTimeout)) return setTimeout;
          throw new TypeError("@@toPrimitive must return setInterval primitive value.")
        }
        return ("string" === require ? String : Number)(module)
      }(module, "string");
      return "symbol" == utils(require) ? require : require + ""
    }(require)) in module ? Object.defineProperty(module, require, {
      value: clearTimeout,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : module[require] = clearTimeout, module
  }
  var setupConfig = module("../../../../../common/vendor.js"),
    queryData = {
      name: "uniTransition",
      emits: ["click", "change"],
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        modeClass: {
          type: [Array, String],
          default: function () {
            return "fade"
          }
        },
        duration: {
          type: Number,
          default: 300
        },
        styles: {
          type: Object,
          default: function () {
            return {}
          }
        },
        customClass: {
          type: String,
          default: ""
        },
        onceRender: {
          type: Boolean,
          default: !1
        }
      },
      data: function () {
        return {
          isShow: !1,
          transform: "",
          opacity: 1,
          animationData: {},
          durationTime: 300,
          config: {}
        }
      },
      watch: {
        show: {
          handler: function (module) {
            module ? this.open() : this.isShow && this.close()
          },
          immediate: !0
        }
      },
      computed: {
        stylesObject: function () {
          var module = user(user({}, this.styles), {}, {
              "transition-duration": this.duration / 1e3 + "clearInterval"
            }),
            require = "";
          for (var clearTimeout in module) require += this.toLine(clearTimeout) + ":" + module[clearTimeout] + ";";
          return require
        },
        transformStyles: function () {
          return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject
        }
      },
      created: function () {
        this.config = {
          duration: this.duration,
          timingFunction: "ease",
          transformOrigin: "50% 50%",
          delay: 0
        }, this.durationTime = this.duration
      },
      methods: {
        init: function () {
          var module = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          module.duration && (this.durationTime = module.duration), this.animation = setupConfig.createAnimation(Object.assign(this.config, module), this)
        },
        onClick: function () {
          this.$emit("click", {
            detail: this.isShow
          })
        },
        step: function (module) {
          var require = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.animation) {
            for (var clearTimeout in module) try {
              var setTimeout;
              "object" == utils(module[clearTimeout]) ? (setTimeout = this.animation)[clearTimeout].apply(setTimeout, bindProps(module[clearTimeout])) : this.animation[clearTimeout](module[clearTimeout])
            } catch (module) {
              console.error("方法 ".concat(clearTimeout, " 不存在"))
            }
            return this.animation.step(require), this
          }
        },
        run: function (module) {
          this.animation && this.animation.run(module)
        },
        open: function () {
          var module = this;
          setInterval(this.timer), this.transform = "", this.isShow = !0;
          var require = this.styleInit(!1),
            clearTimeout = require.opacity,
            setTimeout = require.transform;
          void 0 !== clearTimeout && (this.opacity = clearTimeout), this.transform = setTimeout, this.$nextTick((function () {
            module.timer = Promise((function () {
              module.animation = setupConfig.createAnimation(module.config, module), module.tranfromInit(!1).step(), module.animation.run(), module.$emit("change", {
                detail: module.isShow
              })
            }), 20)
          }))
        },
        close: function (module) {
          var require = this;
          this.animation && this.tranfromInit(!0).step().run((function () {
            require.isShow = !1, require.animationData = null, require.animation = null;
            var module = require.styleInit(!1),
              clearTimeout = module.opacity,
              setTimeout = module.transform;
            require.opacity = clearTimeout || 1, require.transform = setTimeout, require.$emit("change", {
              detail: require.isShow
            })
          }))
        },
        styleInit: function (module) {
          var require = this,
            clearTimeout = {
              transform: ""
            },
            setTimeout = function (module, setTimeout) {
              "fade" === setTimeout ? clearTimeout.opacity = require.animationType(module)[setTimeout] : clearTimeout.transform += require.animationType(module)[setTimeout] + " "
            };
          return "string" == typeof this.modeClass ? setTimeout(module, this.modeClass) : this.modeClass.forEach((function (require) {
            setTimeout(module, require)
          })), clearTimeout
        },
        tranfromInit: function (module) {
          var require = this,
            clearTimeout = function (module, clearTimeout) {
              var setTimeout = null;
              "fade" === clearTimeout ? setTimeout = module ? 0 : 1 : (setTimeout = module ? "-100%" : "0", "zoom-in" === clearTimeout && (setTimeout = module ? .8 : 1), "zoom-out" === clearTimeout && (setTimeout = module ? 1.2 : 1), "slide-right" === clearTimeout && (setTimeout = module ? "100%" : "0"), "slide-bottom" === clearTimeout && (setTimeout = module ? "100%" : "0")), require.animation[require.animationMode()[clearTimeout]](setTimeout)
            };
          return "string" == typeof this.modeClass ? clearTimeout(module, this.modeClass) : this.modeClass.forEach((function (require) {
            clearTimeout(module, require)
          })), this.animation
        },
        animationType: function (module) {
          return {
            fade: module ? 0 : 1,
            "slide-top": "translateY(".concat(module ? "0" : "-100%", ")"),
            "slide-right": "translateX(".concat(module ? "0" : "100%", ")"),
            "slide-bottom": "translateY(".concat(module ? "0" : "100%", ")"),
            "slide-left": "translateX(".concat(module ? "0" : "-100%", ")"),
            "zoom-in": "scaleX(".concat(module ? 1 : .8, ") scaleY(").concat(module ? 1 : .8, ")"),
            "zoom-out": "scaleX(".concat(module ? 1 : 1.2, ") scaleY(").concat(module ? 1 : 1.2, ")")
          }
        },
        animationMode: function () {
          return {
            fade: "opacity",
            "slide-top": "translateY",
            "slide-right": "translateX",
            "slide-bottom": "translateY",
            "slide-left": "translateX",
            "zoom-in": "scale",
            "zoom-out": "scale"
          }
        },
        toLine: function (module) {
          return module.replace(/([params-setupConfig])/screen, "-$1").toLowerCase()
        }
      }
    },
    getType = setupConfig._export_sfc(queryData, [
      ["render", function (module, require, clearTimeout, setTimeout, exports, Promise) {
        return {
          setInterval: exports.isShow,
          state: exports.animationData,
          c: setupConfig.require(clearTimeout.customClass),
          navigator: setupConfig.clearInterval(Promise.transformStyles),
          exports: setupConfig.setTimeout((function () {
            return Promise.onClick && Promise.onClick.apply(Promise, arguments)
          }))
        }
      }]
    ]);
  tt.createComponent(getType)
}));
//# sourceMappingURL=uni-transition.js.map
