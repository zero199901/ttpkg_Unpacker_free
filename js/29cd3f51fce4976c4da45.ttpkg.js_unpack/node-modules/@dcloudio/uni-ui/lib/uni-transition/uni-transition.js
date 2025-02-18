define("node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js", (function (t, n, i, o, e, r, a, s, c, u, l, f, m, h, d, y, p, b, g, v, S, O, j, w, C, A, P, T, I, k, D, z, E, X, Y, $, L, M, x) {
  "use strict";

  function B(t) {
    return function (t) {
      if (Array.isArray(t)) return N(t)
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function (t, n) {
      if (t) {
        if ("string" == typeof t) return N(t, n);
        var i = {}.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? N(t, n) : void 0
      }
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function N(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var i = 0, o = Array(n); i < n; i++) o[i] = t[i];
    return o
  }

  function _(t) {
    return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _(t)
  }

  function F(t, n) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      n && (o = o.filter((function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable
      }))), i.push.apply(i, o)
    }
    return i
  }

  function R(t) {
    for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2 ? F(Object(i), !0).forEach((function (n) {
        U(t, n, i[n])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : F(Object(i)).forEach((function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
      }))
    }
    return t
  }

  function U(t, n, i) {
    return (n = function (t) {
      var n = function (t, n) {
        if ("object" != _(t) || !t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var o = i.call(t, n || "default");
          if ("object" != _(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === n ? String : Number)(t)
      }(t, "string");
      return "symbol" == _(n) ? n : n + ""
    }(n)) in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, t
  }
  var Z = t("../../../../../common/vendor.js"),
    q = {
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
          handler: function (t) {
            t ? this.open() : this.isShow && this.close()
          },
          immediate: !0
        }
      },
      computed: {
        stylesObject: function () {
          var t = R(R({}, this.styles), {}, {
              "transition-duration": this.duration / 1e3 + "s"
            }),
            n = "";
          for (var i in t) n += this.toLine(i) + ":" + t[i] + ";";
          return n
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
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t.duration && (this.durationTime = t.duration), this.animation = Z.createAnimation(Object.assign(this.config, t), this)
        },
        onClick: function () {
          this.$emit("click", {
            detail: this.isShow
          })
        },
        step: function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.animation) {
            for (var i in t) try {
              var o;
              "object" == _(t[i]) ? (o = this.animation)[i].apply(o, B(t[i])) : this.animation[i](t[i])
            } catch (t) {
              console.error("方法 ".concat(i, " 不存在"))
            }
            return this.animation.step(n), this
          }
        },
        run: function (t) {
          this.animation && this.animation.run(t)
        },
        open: function () {
          var t = this;
          a(this.timer), this.transform = "", this.isShow = !0;
          var n = this.styleInit(!1),
            i = n.opacity,
            o = n.transform;
          void 0 !== i && (this.opacity = i), this.transform = o, this.$nextTick((function () {
            t.timer = r((function () {
              t.animation = Z.createAnimation(t.config, t), t.tranfromInit(!1).step(), t.animation.run(), t.$emit("change", {
                detail: t.isShow
              })
            }), 20)
          }))
        },
        close: function (t) {
          var n = this;
          this.animation && this.tranfromInit(!0).step().run((function () {
            n.isShow = !1, n.animationData = null, n.animation = null;
            var t = n.styleInit(!1),
              i = t.opacity,
              o = t.transform;
            n.opacity = i || 1, n.transform = o, n.$emit("change", {
              detail: n.isShow
            })
          }))
        },
        styleInit: function (t) {
          var n = this,
            i = {
              transform: ""
            },
            o = function (t, o) {
              "fade" === o ? i.opacity = n.animationType(t)[o] : i.transform += n.animationType(t)[o] + " "
            };
          return "string" == typeof this.modeClass ? o(t, this.modeClass) : this.modeClass.forEach((function (n) {
            o(t, n)
          })), i
        },
        tranfromInit: function (t) {
          var n = this,
            i = function (t, i) {
              var o = null;
              "fade" === i ? o = t ? 0 : 1 : (o = t ? "-100%" : "0", "zoom-in" === i && (o = t ? .8 : 1), "zoom-out" === i && (o = t ? 1.2 : 1), "slide-right" === i && (o = t ? "100%" : "0"), "slide-bottom" === i && (o = t ? "100%" : "0")), n.animation[n.animationMode()[i]](o)
            };
          return "string" == typeof this.modeClass ? i(t, this.modeClass) : this.modeClass.forEach((function (n) {
            i(t, n)
          })), this.animation
        },
        animationType: function (t) {
          return {
            fade: t ? 0 : 1,
            "slide-top": "translateY(".concat(t ? "0" : "-100%", ")"),
            "slide-right": "translateX(".concat(t ? "0" : "100%", ")"),
            "slide-bottom": "translateY(".concat(t ? "0" : "100%", ")"),
            "slide-left": "translateX(".concat(t ? "0" : "-100%", ")"),
            "zoom-in": "scaleX(".concat(t ? 1 : .8, ") scaleY(").concat(t ? 1 : .8, ")"),
            "zoom-out": "scaleX(".concat(t ? 1 : 1.2, ") scaleY(").concat(t ? 1 : 1.2, ")")
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
        toLine: function (t) {
          return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
      }
    },
    G = Z._export_sfc(q, [
      ["render", function (t, n, i, o, e, r) {
        return {
          a: e.isShow,
          b: e.animationData,
          c: Z.n(i.customClass),
          d: Z.s(r.transformStyles),
          e: Z.o((function () {
            return r.onClick && r.onClick.apply(r, arguments)
          }))
        }
      }]
    ]);
  tt.createComponent(G)
}));
//# sourceMappingURL=uni-transition.js.map
