define("node-modules/@repo/qm-components/src/q-reader/chapter-content.js", (function (e, t, r, n, o, a, i, c, u, s, f, p, l, d, v, h, m, y, g, b, x, w, S, C, R, k, O, I, j, P, T, A, q, M, z, D, E, $, N) {
  "use strict";

  function V(e) {
    return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, V(e)
  }

  function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function K(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(r), !0).forEach((function (t) {
        U(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function U(e, t, r) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != V(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || "default");
          if ("object" != V(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == V(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function _(e) {
    return function (e) {
      if (Array.isArray(e)) return J(e)
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return J(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? J(e, t) : void 0
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n
  }

  function L(e, t, r, n, a, i, c) {
    try {
      var u = e[i](c),
        s = u.value
    } catch (e) {
      return void r(e)
    }
    u.done ? t(s) : o.resolve(s).then(n, a)
  }

  function B(e) {
    return function () {
      var t = this,
        r = arguments;
      return new o((function (n, o) {
        var a = e.apply(t, r);

        function i(e) {
          L(a, n, o, i, c, "next", e)
        }

        function c(e) {
          L(a, n, o, i, c, "throw", e)
        }
        i(void 0)
      }))
    }
  }
  var Q = e("../../../../../common/vendor.js"),
    F = Q.defineComponent({
      __name: "chapter-content",
      props: {
        events: {},
        query: {
          default: function () {
            return {
              id: ""
            }
          }
        }
      },
      setup: function (e, t) {
        var r = t.expose,
          n = Q.useStoreReader(),
          i = e,
          c = Q.getCurrentInstance(),
          u = Q.ref([]),
          s = new Q.Reader({
            events: i.events
          });
        s.updateView = function () {
          var e = B(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return u.value = JSON.parse(JSON.stringify(t)), e.next = 3, Q.nextTick$1();
                case 3:
                  y();
                case 4:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t) {
            return e.apply(this, arguments)
          }
        }(), s.getChapterContentHeight = function () {
          var e = B(regeneratorRuntime.mark((function e(t) {
            var r;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, h("#chapter-".concat(t));
                case 2:
                  return r = e.sent, e.abrupt("return", (console.log("-- chapter height", t, r), r[0] ? r[0].height : 0));
                case 4:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t) {
            return e.apply(this, arguments)
          }
        }(), s.onScrollToTop = function () {
          l.value = Math.random()
        }, s.onChapterChange = function () {
          var e = B(regeneratorRuntime.mark((function e(t) {
            var r, o;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (r = s.events.getChapterInfo(t, "current"), o = !(!r.prev || !r.prev.id || r.disabledLoadPrev), e.t0 = o, e.t0) {
                    e.next = 7;
                    break
                  }
                  return x.value = !1, e.next = 7, Q.nextTick$1();
                case 7:
                  m.value = o, n.setCurrentChapter(r), t.content && 0 !== t.content.length && (n.setReadedChapterIds(r.id), O());
                case 10:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t) {
            return e.apply(this, arguments)
          }
        }(), n.setReaderInstance(s);
        var f, p, l = Q.ref(0),
          d = Q.ref(""),
          v = function () {
            var e = B(regeneratorRuntime.mark((function e(t, r) {
              var n;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!r) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return", void(d.value = r));
                  case 2:
                    n = "chapter-item-0-".concat(t.i), d.value = n;
                  case 4:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function (t, r) {
              return e.apply(this, arguments)
            }
          }(),
          h = function () {
            var e = B(regeneratorRuntime.mark((function e(t) {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new o((function (e) {
                      var r = Q.index.createSelectorQuery();
                      r.in(c), r.select(t).boundingClientRect(), r.exec((function (t) {
                        e(t)
                      }))
                    })));
                  case 1:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function (t) {
              return e.apply(this, arguments)
            }
          }(),
          m = Q.ref(!0),
          y = function () {
            f && f.disconnect(), (f = Q.index.createIntersectionObserver(c, {
              thresholds: [0, 1],
              observeAll: !0
            })).relativeToViewport({
              top: 0
            }).observe(".chapter-item", (function (e) {
              var t = +e.dataset.index;
              s.updateCurrentChapter(t, e.intersectionRatio), 1 === e.intersectionRatio && t === u.value.length - 1 && b()
            }))
          },
          g = !1,
          b = function () {
            var e = B(regeneratorRuntime.mark((function e() {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!u.value[u.value.length - 1].needPay) {
                      e.next = 4;
                      break
                    }
                    console.log("-- 卡点，不预加载"), e.next = 17;
                    break;
                  case 4:
                    if (g) {
                      e.next = 17;
                      break
                    }
                    return g = !0, e.prev = 6, e.next = 9, s.preloadNextChapter();
                  case 9:
                    e.next = 14;
                    break;
                  case 11:
                    e.prev = 11, e.t0 = e.catch(6), console.warn("-- onScrolltolower", e.t0);
                  case 14:
                    return e.prev = 14, a((function () {
                      g = !1
                    }), 300), e.finish(14);
                  case 17:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [6, 11, 14, 17]
              ])
            })));
            return function () {
              return e.apply(this, arguments)
            }
          }(),
          x = Q.ref(!1),
          w = function () {
            var e = B(regeneratorRuntime.mark((function e() {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return x.value = !0, e.prev = 1, e.next = 4, s.addPrevChapter();
                  case 4:
                    return e.prev = 4, x.value = !1, e.finish(4);
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, , 4, 7]
              ])
            })));
            return function () {
              return e.apply(this, arguments)
            }
          }(),
          S = Q.computed((function () {
            return {
              background: n.readerStyle.bgColor
            }
          })),
          C = Q.computed((function () {
            return {
              fontSize: 2 * n.readerStyle.fontSize + "rpx",
              color: n.readerStyle.color
            }
          })),
          R = Q.computed((function () {
            var e;
            return {
              fontSize: n.readerStyle.fontSize * ((null == (e = n.readerConfig) ? void 0 : e.readerTitileRatio) || 1.15) * 2 + "rpx",
              color: n.readerStyle.color
            }
          })),
          k = {},
          O = function () {
            var e = B(regeneratorRuntime.mark((function e() {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Q.nextTick$1();
                  case 2:
                    p && p.disconnect(), k = {}, (p = Q.index.createIntersectionObserver(c, {
                      thresholds: [0],
                      observeAll: !0
                    })).relativeToViewport({
                      top: 0
                    }).observe(".js-chapter-item", (function (e) {
                      var t = +e.dataset.index,
                        r = e.dataset.id,
                        n = k[r] || new Set;
                      0 === e.intersectionRatio ? n.delete(t) : n.add(t), k[r] = n
                    }));
                  case 6:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function () {
              return e.apply(this, arguments)
            }
          }(),
          I = function () {
            var e = B(regeneratorRuntime.mark((function e() {
              var t, r;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t = Math.min.apply(Math, _(k[s.currentChapter.id].values())), r = {
                      id: s.currentChapter.id,
                      i: t
                    }, Q.index.setStorageSync(Q.storageKeys.chapterInfoPrefix + i.query.id, K(K({}, r), {}, {
                      bookId: i.query.id,
                      readedChapterIds: _(new Set(n.readedChapterIds))
                    }));
                  case 2:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function () {
              return e.apply(this, arguments)
            }
          }();
        return Q.watch((function () {
            return n.readerStyle.fontSize
          }), B(regeneratorRuntime.mark((function e() {
            var t, r, n;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return s.clearEmptyData(), t = u.value.findIndex((function (e) {
                    return e.id === s.currentChapter.id
                  })), r = Math.min.apply(Math, _(k[s.currentChapter.id].values())), n = "chapter-item-".concat(t, "-").concat(-1 === r ? 0 : r), d.value = "", e.next = 5, Q.nextTick$1();
                case 5:
                  d.value = n, O();
                case 7:
                case "end":
                  return e.stop()
              }
            }), e)
          })))), B(regeneratorRuntime.mark((function e() {
            var t, r, o, a, c, u;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (n.setReaderTheme("default"), (t = Q.index.getStorageSync(Q.storageKeys.setting)) && (t.name || (r = Q.skinConfigList.find((function (e) {
                      return e.bgColor === t.bgColor
                    })), t.name = r ? r.name : "white"), n.setReaderStyle(t)), o = Q.index.getStorageSync(Q.storageKeys.chapterInfoPrefix + i.query.id) || {}, a = o.id, !s.events.getInitChapterId) {
                    e.next = 11;
                    break
                  }
                  return e.next = 7, s.events.getInitChapterId();
                case 7:
                  c = e.sent, o.id = c, e.next = 12;
                  break;
                case 11:
                  !i.query.force && a || (o.id = i.query.cid);
                case 12:
                  return console.log("-- book init ", o), e.next = 15, s.onInit(o);
                case 15:
                  a === s.currentChapter.id && v(o), u = o.readedChapterIds || [], n.setReadedChapterIds(u);
                case 18:
                case "end":
                  return e.stop()
              }
            }), e)
          })))(), Q.index.onAppHide((function () {
            I()
          })), Q.onBeforeUnmount((function () {
            I()
          })), Q.onUnmounted((function () {
            f && f.disconnect()
          })), r({
            onScrollToView: v
          }),
          function (e, t) {
            var r;
            return {
              a: Q.f(u.value, (function (e, t, r) {
                return Q.e({
                  a: !e.content || 0 === e.content.length
                }, e.content && 0 !== e.content.length ? {
                  d: Q.t(e.title),
                  e: e.id,
                  f: Q.s(R.value),
                  g: Q.f(e.content, (function (e, r, n) {
                    return {
                      a: Q.t(e),
                      b: r,
                      c: r,
                      d: "chapter-item-".concat(t, "-").concat(r)
                    }
                  })),
                  h: Q.s(C.value),
                  i: e.id,
                  j: t,
                  k: "chapter-".concat(t)
                } : {
                  b: e.contentHeight + "px",
                  c: "chapter-".concat(t)
                }, {
                  l: "".concat(t, "_").concat(e.id)
                })
              })),
              b: Q.n((null == (r = Q.unref(n).readerConfig) ? void 0 : r.customReaderClass) || ""),
              c: Q.s(S.value),
              d: Q.o(b),
              e: m.value,
              f: Q.o(w),
              g: x.value,
              h: d.value,
              i: l.value,
              j: Q.unref(n).readerStyle.bgColor
            }
          }
      }
    });
  tt.createComponent(F)
}));
//# sourceMappingURL=chapter-content.js.map
