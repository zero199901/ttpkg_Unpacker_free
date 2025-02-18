define("node-modules/@repo/qm-components/src/q-reader/index.js", (function (e, n, t, r, o, u, a, i, c, s, f, l, d, m, p, h, v, g, S, y, C, b, w, k, I, R, x, M, A, E, B, j, q, T, L, N, U, V, _) {
  "use strict";

  function O(e) {
    return function (e) {
      if (Array.isArray(e)) return $(e)
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return $(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? $(e, n) : void 0
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function $(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
    return r
  }

  function z(e, n, t, r, u, a, i) {
    try {
      var c = e[a](i),
        s = c.value
    } catch (e) {
      return void t(e)
    }
    c.done ? n(s) : o.resolve(s).then(r, u)
  }

  function D(e) {
    return function () {
      var n = this,
        t = arguments;
      return new o((function (r, o) {
        var u = e.apply(n, t);

        function a(e) {
          z(u, r, o, a, i, "next", e)
        }

        function i(e) {
          z(u, r, o, a, i, "throw", e)
        }
        a(void 0)
      }))
    }
  }
  var F = e("../../../../../common/vendor.js");
  Math || (G + H)();
  var G = function () {
      return "./chapter-content.js"
    },
    H = function () {
      return "./setting.js"
    },
    J = F.defineComponent({
      __name: "index",
      props: {
        readerEvents: {},
        actionEvents: {},
        toolsConfig: {
          default: function () {
            return []
          }
        },
        bookInfo: {
          default: function () {
            return {}
          }
        },
        chapterList: {
          default: function () {
            return []
          }
        },
        query: {
          default: function () {
            return {
              id: ""
            }
          }
        },
        showReaderBottomStuck: {
          type: Boolean
        },
        config: {}
      },
      setup: function (e, n) {
        var t = n.expose,
          r = F.useStoreReader(),
          o = e,
          u = F.ref();
        r.setReaderConfig(o.config), F.watch((function () {
          return o.bookInfo
        }), (function (e) {
          r.setBookInfo(e)
        }), {
          immediate: !0
        }), F.watch((function () {
          return o.chapterList
        }), (function (e) {
          r.setChapterList(e)
        }), {
          immediate: !0
        });
        var a, i = function () {
            var e = D(regeneratorRuntime.mark((function e(n, t, o) {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r.readerInstance.onInit(n, o), t && r.readerInstance.onScrollToTop(), r.setMenuStatus("menu", !1);
                  case 1:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function (n, t, r) {
              return e.apply(this, arguments)
            }
          }(),
          c = function (e) {
            var n = r.currentChapter[e];
            i(n, !0, "btn")
          },
          s = function () {
            r.menuStatus.calalogue ? r.setMenuStatus("calalogue", !1) : (r.setMenuStatus("menu", !r.menuStatus.menu), o.actionEvents.onMenuStatusChange("menu", r.menuStatus.menu))
          },
          f = F.debounce({
            delay: 100
          }, (function () {
            r.menuStatus.menu && !r.menuStatus.calalogue && (o.actionEvents.onMenuStatusChange("menu", !1), r.setMenuStatus("menu", !1))
          }));
        return r.setActionEvents(o.actionEvents), t({
            changeChapter: i,
            onScrollToView: function (e, n) {
              return u.value.onScrollToView(e, n)
            },
            resetReaderContent: (a = D(regeneratorRuntime.mark((function e() {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, r.readerInstance.resetReaderContent();
                  case 2:
                  case "end":
                    return e.stop()
                }
              }), e)
            }))), function () {
              return a.apply(this, arguments)
            }),
            getContents: function () {
              return O(r.readerInstance.dataList)
            },
            unlockNextChapter: function () {
              r.readerInstance.unlockNextChapter()
            }
          }), F.onBeforeUnmount((function () {
            r.setMenuStatus("menu", !1)
          })),
          function (e, n) {
            return F.e({
              a: e.showReaderBottomStuck
            }, e.showReaderBottomStuck ? {
              b: F.r("qReaderBottomStuck", {
                bgColor: F.unref(r).readerStyle.bgColor
              })
            } : {}, {
              c: F.sr(u, "47793152-0", {
                k: "refChapterContent"
              }),
              d: F.p({
                query: o.query,
                events: o.readerEvents
              }),
              e: F.o(s),
              f: F.o((function () {
                return F.unref(f) && F.unref(f).apply(void 0, arguments)
              })),
              g: F.o(c),
              h: F.p({
                toolsConfig: o.toolsConfig
              })
            })
          }
      }
    });
  tt.createComponent(J)
}));
//# sourceMappingURL=index.js.map
