define("node-modules/@repo/qm-components/src/q-reader/setting.js", (function (e, t, n, o, r, u, a, i, c, l, s, p, f, m, g, y, d, v, T, S, b, h, C, k, O, j, E, M, B, L, w, G, P, I, x, A, _, D, N) {
  "use strict";

  function q(e) {
    return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, q(e)
  }

  function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, o)
    }
    return n
  }

  function R(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(n), !0).forEach((function (t) {
        V(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function V(e, t, n) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != q(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" != q(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == q(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var z = e("../../../../../common/vendor.js");
  Math || (F + J + K + Q)();
  var F = function () {
      return "./components/set-box.js"
    },
    J = function () {
      return "./components/book-info.js"
    },
    K = function () {
      return "./components/chapter-list.js"
    },
    Q = function () {
      return "../q-popup/index.js"
    },
    U = z.defineComponent({
      __name: "setting",
      props: {
        toolsConfig: {
          default: function () {
            return []
          }
        }
      },
      emits: ["changeChapter"],
      setup: function (e, t) {
        var n = t.emit,
          o = z.useStoreReader(),
          r = V(V(V({}, z.ToolButtonType.CATALOG, {
            iconLink: "icon-directory",
            activeIconLink: "icon-directory_selected",
            title: "目录",
            type: "catalog"
          }), z.ToolButtonType.THEME, {
            iconLink: "icon-theme-night",
            activeIconLink: "icon-theme-day",
            title: "夜间",
            activeTitle: "日间",
            type: "theme"
          }), z.ToolButtonType.SETTING, {
            iconLink: "icon-setting",
            activeIconLink: "icon-setting_selected",
            title: "设置",
            type: "setting"
          }),
          u = n,
          a = e,
          i = z.computed((function () {
            return !o.currentChapter.prev || !o.currentChapter.prev.id
          })),
          c = z.computed((function () {
            return !o.currentChapter.next || !o.currentChapter.next.id
          })),
          l = z.computed((function () {
            var e = o.readerTheme,
              t = e.bgColor,
              n = e.color,
              r = e.divideColor;
            return {
              backgroundColor: t,
              color: n,
              borderTop: "1px solid ".concat(r)
            }
          })),
          s = z.computed((function () {
            return a.toolsConfig.map((function (e) {
              return z.isString(e) ? r[e] : R(R({}, r[e.type]), e)
            }))
          })),
          p = z.computed((function () {
            var e = a.toolsConfig.find((function (e) {
              return !z.isString(e) && e.type === z.ToolButtonType.SETTING
            }));
            return e && !z.isString(e) ? e.components : []
          })),
          f = z.throttle({
            interval: 300
          }, (function (e) {
            if (e === z.ToolButtonType.THEME) {
              var t = o.readerStyle,
                n = t.name,
                r = t.prevName,
                u = "dark" === n ? r : "dark";
              return o.setReaderStyle(R({
                name: u
              }, z.skinConfigMap.get(u))), void o.actionEvents.onMenuClick("theme", r)
            }
            var a = !1,
              i = !1;
            e === z.ToolButtonType.CATALOG ? (a = !o.menuStatus.calalogue, o.menuStatus.setting && o.actionEvents.onMenuStatusChange("setting", !1)) : e === z.ToolButtonType.SETTING && (i = !o.menuStatus.setting, o.actionEvents.onMenuStatusChange("setting", i)), o.setMenuStatus("setting", i), o.setMenuStatus("calalogue", a)
          })),
          m = function (e) {
            o.actionEvents.onMenuStatusChange("calalogue", e), e || o.setMenuStatus("calalogue", !1)
          },
          g = function (e) {
            return new Map([
              [z.ToolButtonType.SETTING, o.menuStatus.setting],
              [z.ToolButtonType.CATALOG, o.menuStatus.calalogue],
              [z.ToolButtonType.THEME, "dark" === o.readerStyle.name]
            ]).get(e.type) ? e.activeIconLink : e.iconLink
          },
          y = function (e) {
            return new Map([
              [z.ToolButtonType.SETTING, o.menuStatus.setting],
              [z.ToolButtonType.CATALOG, o.menuStatus.calalogue],
              [z.ToolButtonType.THEME, "dark" === o.readerStyle.name]
            ]).get(e.type) && e.activeTitle || e.title
          },
          d = z.throttle({
            interval: 300
          }, (function (e) {
            o.actionEvents.onMenuClick("btnChangeChapter", e), "prev" === e && i.value || "next" === e && c.value || u("changeChapter", e)
          }));
        return function (e, t) {
          var n, r;
          return z.e({
            a: z.f(s.value, (function (e, t, n) {
              return {
                a: z.n(g(e)),
                b: z.t(y(e)),
                c: t,
                d: z.o((function (t) {
                  return z.unref(f)(e.type)
                }))
              }
            })),
            b: z.s(l.value),
            c: z.unref(o).menuStatus.menu ? 1 : "",
            d: null == (n = z.unref(o).readerConfig) ? void 0 : n.hasChangeChapterBtn
          }, (null == (r = z.unref(o).readerConfig) ? void 0 : r.hasChangeChapterBtn) ? {
            e: i.value ? z.unref(o).readerTheme.colorDarkGray : "",
            f: z.o((function (e) {
              return z.unref(d)("prev")
            })),
            g: c.value ? z.unref(o).readerTheme.colorDarkGray : "",
            h: z.o((function (e) {
              return z.unref(d)("next")
            })),
            i: z.s(l.value),
            j: z.unref(o).menuStatus.menu ? 1 : ""
          } : {}, {
            k: z.p({
              componentsConfig: p.value
            }),
            l: z.s(l.value),
            m: z.unref(o).menuStatus.setting ? 1 : "",
            n: z.unref(o).menuStatus.calalogue
          }, z.unref(o).menuStatus.calalogue ? {
            o: z.s(l.value)
          } : {}, {
            p: z.o((function (e) {
              return m(!0)
            })),
            q: z.o((function (e) {
              return m(!1)
            })),
            r: z.o((function (e) {
              return z.unref(o).menuStatus.calalogue = e
            })),
            s: z.p({
              contentStyle: {
                backgroundColor: z.unref(o).readerTheme.bgColor
              },
              isDark: "dark" === z.unref(o).readerStyle.name,
              modelValue: z.unref(o).menuStatus.calalogue
            })
          })
        }
      }
    }),
    W = z._export_sfc(U, [
      ["__scopeId", "data-v-d3078003"]
    ]);
  tt.createComponent(W)
}));
//# sourceMappingURL=setting.js.map
