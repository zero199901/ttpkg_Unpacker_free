define("pages/reader/index.js", (function (e, t, r, n, a, o, i, c, u, l, s, d, p, f, v, m, h, g, _, k, y, b, w, x, T, C, S, P, j, O, R, D, I, q, B, E, N, M, A) {
  "use strict";

  function F(e) {
    return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, F(e)
  }

  function L(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? L(Object(r), !0).forEach((function (t) {
        V(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function V(e, t, r) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != F(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || "default");
          if ("object" != F(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == F(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function $(e, t, r, n, o, i, c) {
    try {
      var u = e[i](c),
        l = u.value
    } catch (e) {
      return void r(e)
    }
    u.done ? t(l) : a.resolve(l).then(n, o)
  }

  function H(e) {
    return function () {
      var t = this,
        r = arguments;
      return new a((function (n, a) {
        var o = e.apply(t, r);

        function i(e) {
          $(o, n, a, i, c, "next", e)
        }

        function c(e) {
          $(o, n, a, i, c, "throw", e)
        }
        i(void 0)
      }))
    }
  }
  var U = e("../../common/vendor.js"),
    K = e("../../api/reader/index.js"),
    Z = e("../../assets/ts/history.js"),
    z = e("../../assets/ts/theme.js");
  Math || (Q + W + J)();
  var J = function () {
      return "../../node-modules/@repo/qm-components/src/q-reader/index.js"
    },
    Q = function () {
      return "../../components/qm-pay-panel/index.js"
    },
    W = function () {
      return "./components/final-chapter.js"
    },
    X = U.defineComponent({
      __name: "index",
      props: {
        id: {},
        cnum: {}
      },
      setup: function (e) {
        var t, r, n, c, u, l, s = {
            hasChangeChapterBtn: !0,
            catalogIcon: "lock",
            customReaderClass: "new-media-reader",
            readerTitileRatio: 1.3,
            readerThemeMap: z.readerThemeMap
          },
          d = [U.ToolButtonType.CATALOG, U.ToolButtonType.THEME, {
            type: U.ToolButtonType.SETTING,
            components: [U.SettingCompType.FONTSIZE, U.SettingCompType.BACKGROUND]
          }],
          p = e,
          f = U.getCurrentInstance(),
          v = U.ref(),
          m = U.ref({
            id: Number(p.id)
          }),
          h = U.ref([]),
          g = U.ref(),
          _ = U.ref(!1),
          k = U.ref({
            bgColor: "#ffffff",
            color: "#000000",
            name: "white"
          }),
          y = U.ref(!1),
          b = U.ref(!1),
          w = U.ref(),
          x = function () {
            var e, t, r = v.value.getContents(),
              n = r[r.length - 1];
            y.value = n.needPay, console.log("-- getStuckStatus showStuck", y.value), _.value = !(null == (e = n.next) ? void 0 : e.id), console.log("-- getStuckStatus readFinish", _.value), _.value && (null == l || l.disconnect(), (t = H(regeneratorRuntime.mark((function e(t) {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, U.nextTick$1();
                  case 2:
                    (l = U.index.createIntersectionObserver(f, {
                      thresholds: [0, 1]
                    })).relativeToViewport({
                      bottom: -50
                    }).observe(".final-chapter-container", (function (e) {
                      e.intersectionRatio > 0 && K.api_update_reading_record({
                        book_id: m.value.id,
                        chapter_id: t.id,
                        chapter_num: t.chapterData.chapter.num,
                        is_chapter_end: !0
                      })
                    }));
                  case 4:
                  case "end":
                    return e.stop()
                }
              }), e)
            }))), function (e) {
              return t.apply(this, arguments)
            })(n))
          },
          T = {
            getInitChapterId: (c = H(regeneratorRuntime.mark((function e() {
              var t;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, H(regeneratorRuntime.mark((function e() {
                      var t, r;
                      return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = {
                              book_id: p.id,
                              chapter_num: p.cnum
                            }, e.prev = 1, U.index.showLoading({
                              title: "加载中",
                              icon: "none"
                            }), e.next = 5, K.api_book_info(t);
                          case 5:
                            r = e.sent, m.value = G(G({}, r), {}, {
                              id: r.book_id,
                              title: r.book_name,
                              image_link: r.book_cover
                            }), console.log("-- Api bookInfo", m.value), e.next = 13;
                            break;
                          case 10:
                            return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", (400 === e.t0.code && j(), new a((function () {}))));
                          case 13:
                            I.defaultParams.fiction_type = String(m.value.fiction_type), B(), Z.update_book_store_queue(m.value.book_id);
                          case 14:
                          case "end":
                            return e.stop()
                        }
                      }), e, null, [
                        [1, 10]
                      ])
                    })))();
                  case 2:
                    return e.abrupt("return", null == (t = m.value) ? void 0 : t.chapter_id);
                  case 3:
                  case "end":
                    return e.stop()
                }
              }), e)
            }))), function () {
              return c.apply(this, arguments)
            }),
            getContent: (n = H(regeneratorRuntime.mark((function e(t, r) {
              var n, o, i, c, u, l;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = t.id, "current" !== r && (n = t[r].id), n || "current" === r) {
                      e.next = 3;
                      break
                    }
                    return e.abrupt("return", a.reject("no chapter_id"));
                  case 3:
                    return o = {
                      book_id: p.id,
                      chapter_id: n,
                      disable_update_read_record: !["current", "prev"].includes(r)
                    }, e.prev = 4, e.next = 7, K.api_chapter_data(o);
                  case 7:
                    i = e.sent, U.index.hideLoading(), console.log("-- Api获取当前章节内容", t, r, G({}, i)), i.acquired_by_paid && I.readerBuyTrack(i.chapter, i.chapter_paid.chapter_price), e.next = 16;
                    break;
                  case 13:
                    return e.prev = 13, e.t0 = e.catch(4), e.abrupt("return", void(400 === e.t0.code && j()));
                  case 16:
                    return u = (c = i).chapter, l = c.chapter_paid, e.abrupt("return", (0 !== l.show_type && (y.value = !0, w.value = i), {
                      id: u.id,
                      title: u.title,
                      content: u.content,
                      prev: {
                        id: u.pre_id
                      },
                      next: {
                        id: u.next_id
                      },
                      disabledLoadPrev: !u.content,
                      needPay: 0 !== l.show_type,
                      chapterData: i
                    }));
                  case 18:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [4, 13]
              ])
            }))), function (e, t) {
              return n.apply(this, arguments)
            }),
            getChapterInfo: function (e, t) {
              return console.log("-- getChapterInfo", e, t), "current" === t ? G(G({}, e), {}, {
                clearOthersChapter: !!(null == e ? void 0 : e.needPay)
              }) : G({}, e[t])
            },
            onChapterChange: (r = H(regeneratorRuntime.mark((function e(t, r) {
              var n, a, o, i, c;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return console.log("-- onChapterChange", t, r), i = t.chapterData.chapter, I.readerShowTrack(i.id, i.num), g.value && M(), g.value = i, E(), t.needPay && (w.value = t.chapterData), b.value = ["scroll-up", "scroll-down"].includes(r) || "pulldown" === r && !!(null == (n = t.content) ? void 0 : n.length), ["scroll-up", "scroll-down"].includes(r) && K.api_update_reading_record({
                      book_id: m.value.id,
                      chapter_id: i.id,
                      chapter_num: i.num,
                      is_chapter_end: !1
                    }), _.value = !(null == (a = t.next) ? void 0 : a.id), c = 1 === m.value.fiction_type, U.index.setNavigationBarTitle({
                      title: c ? t.title : m.value.title
                    }), null == u || u.disconnect(), !(null == (o = t.prev) ? void 0 : o.id) && c && H(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, U.nextTick$1();
                          case 2:
                            return e.next = 4, U.nextTick$1();
                          case 4:
                            (u = U.index.createIntersectionObserver(f, {
                              thresholds: [0, 1]
                            })).relativeToViewport({
                              top: 0
                            }).observe(".chapter-item-title", (function (e) {
                              var t = e.intersectionRatio > 0 ? m.value.title : h.value[0].title;
                              U.index.setNavigationBarTitle({
                                title: t
                              })
                            }));
                          case 6:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    })))(), e.next = 9, U.nextTick$1();
                  case 9:
                    x();
                  case 10:
                  case "end":
                    return e.stop()
                }
              }), e)
            }))), function (e, t) {
              return r.apply(this, arguments)
            }),
            onPreloadNextChapter: function () {
              console.log("-- onPreloadNextChapter"), b.value = !0, x()
            }
          },
          C = {
            onChangeChapterByCatalogue: (t = H(regeneratorRuntime.mark((function e(t) {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    console.log("-- onChangeChapterByCatalogue", t), v.value.changeChapter(t, !0);
                  case 1:
                  case "end":
                    return e.stop()
                }
              }), e)
            }))), function (e) {
              return t.apply(this, arguments)
            }),
            onMenuStatusChange: function (e, t) {
              if (console.log("-- onMenuStatusChange", e, t), !0 === t) {
                if ("menu" === e && (I.menuShowTrack(), S()), ["calalogue", "setting"].includes(e)) {
                  var r = "calalogue" === e ? "目录" : "设置";
                  I.menuClickTrack(r)
                }
                "calalogue" === e && I.catalogShowTrack()
              }
            },
            onMenuClick: function (e, t) {
              if (console.log("-- onMenuClick", e, t), "btnChangeChapter" === e) {
                var r = "next" === t ? "下一章" : "上一章";
                I.menuClickTrack(r)
              }
              if ("chapter" === e && I.catalogClickTrack(t), "theme" === e) {
                var n = "dark" === t ? "夜间" : "日间";
                I.menuClickTrack(n), R()
              }
              "skin" === e && R(t)
            }
          };

        function S() {
          return P.apply(this, arguments)
        }

        function P() {
          return P = H(regeneratorRuntime.mark((function e() {
            var t, r, n, a, o, i, c, u, l;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, K.api_chapter_list({
                    book_id: p.id
                  });
                case 2:
                  for (t = e.sent, r = t.chapters, n = [], a = (null == r ? void 0 : r.length) || 0, o = 0; o < a; o++) i = r[o], c = G(G({}, i), {}, {
                    isFree: !i.need_paid
                  }), u = r[o - 1], l = r[o + 1], c.prev = u ? G(G({}, u), {}, {
                    isFree: !u.need_paid
                  }) : {}, c.next = l ? G(G({}, l), {}, {
                    isFree: !l.need_paid
                  }) : {}, n.push(c);
                  h.value = n, console.log("-- Api chapterList", h.value);
                case 8:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), P.apply(this, arguments)
        }

        function j() {
          o((function () {
            var e;
            (null == (e = getCurrentPages()) ? void 0 : e.length) > 1 ? U.index.navigateBack() : U.index.switchTab({
              url: "/pages/index/index"
            })
          }), 3e3)
        }

        function O(e) {
          var t = e.chapterId;
          g.value.id === t ? v.value.resetReaderContent() : v.value.unlockNextChapter()
        }

        function R(e) {
          var t = e || U.index.getStorageSync("q-reader-setting");
          t && (k.value = t)
        }
        S(), R();
        var D = U.inject("qmsa"),
          I = {
            defaultParams: {
              book_id: String(p.id),
              fiction_type: "",
              page: "reader"
            },
            readerShowTrack: function (e, t) {
              D.track({
                qm: "reader_full_#_view",
                sensors: "Dypaid_Page_View"
              }, G(G({}, I.defaultParams), {}, {
                sort_id: t,
                chapter_id: String(e),
                position: "full"
              }))
            },
            menuShowTrack: function () {
              var e = g.value,
                t = e.id,
                r = e.num;
              D.track({
                qm: "reader_menu_#_show",
                sensors: "Dypaid_Element_Show"
              }, G(G({}, I.defaultParams), {}, {
                sort_id: r,
                chapter_id: String(t),
                position: "menu"
              }))
            },
            menuClickTrack: function (e) {
              var t = g.value,
                r = t.id,
                n = t.num;
              D.track({
                qm: "reader_menu_#_click",
                sensors: "Dypaid_Element_Click"
              }, G(G({}, I.defaultParams), {}, {
                sort_id: n,
                chapter_id: String(r),
                btn_name: e,
                position: "menu"
              }))
            },
            catalogShowTrack: function () {
              D.track({
                qm: "reader_catalog_#_view",
                sensors: "Dypaid_Page_View"
              }, G(G({}, I.defaultParams), {}, {
                position: "catalog"
              }))
            },
            catalogClickTrack: function (e) {
              D.track({
                qm: "reader_catalog_#_click",
                sensors: "Dypaid_Element_Click"
              }, G(G({}, I.defaultParams), {}, {
                sort_id: e.num,
                chapter_id: String(e.id),
                position: "catalog"
              }))
            },
            readerTimeTrack: function () {
              var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null == (e = g.value) ? void 0 : e.id) {
                var n = g.value,
                  a = n.id,
                  o = n.num,
                  i = t ? +((Date.now() - +q.readTime) / 1e3).toFixed(0) || 0 : q.delay;
                D.track({
                  qm: "reader_full_#_duration",
                  sensors: "Dypaid_Time_Duration"
                }, G(G({}, I.defaultParams), {}, {
                  sort_id: o,
                  chapter_id: String(a),
                  duration: i,
                  position: "full"
                }), {
                  isImmediate: r
                })
              }
            },
            readerBuyTrack: function (e, t) {
              D.track({
                qm: "reader_buy-succeed_#_result",
                sensors: "Dypaid_General_Result"
              }, G(G({}, I.defaultParams), {}, {
                sort_id: e.num,
                chapter_id: String(e.id),
                number: t,
                position: "buy-succeed"
              }))
            }
          },
          q = {
            timer: 0,
            delay: 60,
            readTime: Date.now()
          };

        function B() {
          i(q.timer), q.timer = o((function () {
            I.readerTimeTrack(), q.readTime = Date.now(), B()
          }), 1e3 * q.delay)
        }
        var E = function () {
            N = !1, q.readTime = Date.now(), B()
          },
          N = !1,
          M = function () {
            N || (N = !0, i(q.timer), I.readerTimeTrack(!0, !0), q.readTime = Date.now())
          };
        return U.onShow((function () {
            E()
          })), U.onBeforeUnmount((function () {
            M()
          })), U.onHide((function () {
            M()
          })), U.index.onAppHide((function () {
            M()
          })),
          function (e, t) {
            return U.e({
              a: y.value
            }, y.value ? {
              b: U.o(O),
              c: U.o(O),
              d: U.p({
                pageName: "reader_reader",
                chapterInfo: w.value,
                isScrollStuck: b.value,
                skinConfig: k.value
              })
            } : {}, {
              e: _.value && !y.value
            }, _.value && !y.value ? {
              f: U.p({
                bookId: m.value.id,
                skinConfig: k.value
              })
            } : {}, {
              g: U.sr(v, "c26bce53-0", {
                k: "refReader"
              }),
              h: U.p({
                readerEvents: T,
                actionEvents: C,
                toolsConfig: d,
                bookInfo: m.value,
                chapterList: h.value,
                query: p,
                config: s
              })
            })
          }
      }
    }),
    Y = U._export_sfc(X, [
      ["__scopeId", "data-v-c26bce53"]
    ]);
  tt.createPage(Y)
}));
//# sourceMappingURL=index.js.map
