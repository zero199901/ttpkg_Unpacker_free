define("pages/index/index.js", (function (e, t, n, o, r, i, a, c, s, u, l, p, m, d, _, f, h, g, k, v, b, x, w, y, N, T, D, R, S, F, K, j, q, C, L, B, P, I, M) {
  "use strict";

  function V(e, t, n, o, i, a, c) {
    try {
      var s = e[a](c),
        u = s.value
    } catch (e) {
      return void n(e)
    }
    s.done ? t(u) : r.resolve(u).then(o, i)
  }

  function z(e) {
    return function () {
      var t = this,
        n = arguments;
      return new r((function (o, r) {
        var i = e.apply(t, n);

        function a(e) {
          V(i, o, r, a, c, "next", e)
        }

        function c(e) {
          V(i, o, r, a, c, "throw", e)
        }
        a(void 0)
      }))
    }
  }
  var A = e("../../common/vendor.js"),
    E = e("../../api/book-store/index.js");
  Math || (G + H + O + J)();
  var G = function () {
      return "../../components/qm-tab/index.js"
    },
    H = function () {
      return "../../components/qm-scrollx-book-list/index.js"
    },
    J = function () {
      return "../../components/qm-book-card/index.js"
    },
    O = function () {
      return "../../components/qm-empty/index.js"
    },
    Q = A.defineComponent({
      __name: "index",
      setup: function (e) {
        var t = A.inject("qmsa"),
          n = [{
            label: "女生",
            value: 2
          }, {
            label: "男生",
            value: 1
          }],
          o = function (e) {
            var t = A.index.getStorageSync(e),
              n = t.list,
              o = t.expire;
            return o && o >= (new Date).getTime() - 144e5 ? n : []
          },
          i = function (e) {
            var t = e.category || "",
              n = e.reading_count || "";
            return t + (t && n ? " · " : "") + n
          },
          a = [{}, {}, {}, {}, {}],
          c = A.reactive({
            activeKey: 0,
            initFlag: !0,
            storageData: {
              1: {
                hot_list: a,
                recommend_list: a
              },
              2: {
                hot_list: a,
                recommend_list: a
              }
            },
            isFinish: !1,
            hasNetwork: !0
          }),
          s = function (e, n, o) {
            t.track({
              qm: 1 === c.activeKey ? "bs-male_".concat(o, "_#_click") : "bs-female_".concat(o, "_#_click"),
              sensors: "Dypaid_RecBook_Click"
            }, {
              book_id: String(e.book_id),
              booth_index: n + 1,
              page: 1 === c.activeKey ? "bs-male" : "bs-female",
              position: o,
              fiction_type: String(e.fiction_type)
            })
          },
          u = function (e, t) {
            l(e.book_id), s(e, t, "hot")
          },
          l = function (e) {
            A.index.navigateTo({
              url: "/pages/reader/index?id=".concat(e)
            })
          },
          p = function () {
            var e = z(regeneratorRuntime.mark((function e() {
              var t;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, E.api_home_config();
                  case 3:
                    t = e.sent, c.activeKey = t.preference_type, c.hasNetwork = !0, _(t.preference_type), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), A.index.getNetworkType({
                      success: function (e) {
                        c.hasNetwork = !("none" === e.networkType)
                      }
                    });
                  case 10:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [0, 7]
              ])
            })));
            return function () {
              return e.apply(this, arguments)
            }
          }(),
          m = function () {
            var e = z(regeneratorRuntime.mark((function e(t) {
              var n, r, i;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = o("hot_list_" + t), r = n.length, e.prev = 1, c.storageData[t].hot_list = 0 !== n.length ? n : a, e.next = 5, E.api_books_hot_list(t);
                  case 5:
                    i = e.sent, 0 === n.length && (c.storageData[t].hot_list = i.books), A.index.setStorageSync("hot_list_" + t, {
                      list: i.books,
                      expire: Date.now()
                    }), c.hasNetwork = !0, e.next = 12;
                    break;
                  case 9:
                    e.prev = 9, e.t0 = e.catch(1), 0 === r && (c.storageData[t].hot_list = []), A.index.getNetworkType({
                      success: function (e) {
                        console.log(e.networkType, "networkType"), c.hasNetwork = !("none" === e.networkType)
                      }
                    });
                  case 12:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, 9]
              ])
            })));
            return function (t) {
              return e.apply(this, arguments)
            }
          }(),
          d = function () {
            var e = z(regeneratorRuntime.mark((function e(t) {
              var n, r, i;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = o("recommend_list_" + t), r = n.length, e.prev = 1, c.storageData[t].recommend_list = 0 !== n.length ? n : a, e.next = 5, E.api_book_recommend_list(t);
                  case 5:
                    i = e.sent, 0 === n.length && (c.storageData[t].recommend_list = i.books), A.index.setStorageSync("recommend_list_" + t, {
                      list: i.books,
                      expire: Date.now()
                    }), c.isFinish = !0, c.hasNetwork = !0, e.next = 12;
                    break;
                  case 9:
                    e.prev = 9, e.t0 = e.catch(1), 0 === r && (c.storageData[t].recommend_list = []), c.isFinish = !1, A.index.getNetworkType({
                      success: function (e) {
                        c.hasNetwork = !("none" === e.networkType)
                      }
                    });
                  case 12:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, 9]
              ])
            })));
            return function (t) {
              return e.apply(this, arguments)
            }
          }(),
          _ = function (e) {
            var n = 1 === e ? "male" : "female";
            console.log(n, "_trackName"), t.track({
              qm: "bs-".concat(n, "_full_#_view"),
              sensors: "Dypaid_Page_View"
            }, {
              page: "bs-".concat(n),
              position: "full"
            })
          },
          f = function (e) {
            c.activeKey = e, A.index.pageScrollTo({
              scrollTop: 0,
              duration: 200
            }), _(e)
          };
        A.onShow(z(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                A.index.pageScrollTo({
                  scrollTop: 0,
                  duration: 200
                }), c.initFlag || (m(1), m(2), d(1), d(2)), 0 !== c.activeKey && _(c.activeKey);
              case 1:
              case "end":
                return e.stop()
            }
          }), e)
        }))));
        var h = function () {
          var e = z(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return c.initFlag = !0, A.index.showLoading({
                    title: "加载中"
                  }), e.next = 4, r.all([p(), m(1), m(2), d(1), d(2)]);
                case 4:
                  A.index.hideLoading(), c.initFlag = !1;
                case 6:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function () {
            return e.apply(this, arguments)
          }
        }();
        return h(),
          function (e, t) {
            return A.e({
              a: c.hasNetwork
            }, c.hasNetwork ? {
              b: A.o(f),
              c: A.p({
                tabs: n,
                activeKey: c.activeKey
              })
            } : {}, {
              d: A.f(c.storageData, (function (e, t, n) {
                return A.e({
                  a: e.hot_list.length > 0
                }, e.hot_list.length > 0 ? {
                  b: A.o(u),
                  c: "e5cb6391-1-" + n,
                  d: A.p({
                    bookList: e.hot_list,
                    scroll: e.hot_list.length > 4
                  })
                } : {}, {
                  e: 0 === e.recommend_list.length,
                  f: "e5cb6391-2-" + n,
                  g: A.f(e.recommend_list, (function (e, t, o) {
                    return {
                      a: "e5cb6391-3-" + n + "-" + o,
                      b: A.p({
                        bookCover: e.book_cover,
                        bookName: e.book_name,
                        bookDesc: e.book_desc,
                        bookBottomText: i(e)
                      }),
                      c: t,
                      d: A.o((function (n) {
                        return function (e, t) {
                          l(e.book_id), s(e, t, "recommend")
                        }(e, t)
                      }))
                    }
                  })),
                  h: e.recommend_list.length > 0,
                  i: e.recommend_list.length > 0 && c.isFinish
                }, (e.recommend_list.length > 0 && c.isFinish, {}), {
                  j: t,
                  k: c.activeKey === Number(t) && c.hasNetwork
                })
              })),
              e: A.p({
                type: 1,
                tip: "暂无书籍数据",
                isFixed: !1
              }),
              f: !c.hasNetwork
            }, c.hasNetwork ? {} : {
              g: A.o(h),
              h: A.p({
                type: 2
              })
            })
          }
      }
    }),
    U = A._export_sfc(Q, [
      ["__scopeId", "data-v-e5cb6391"]
    ]);
  tt.createPage(U)
}));
//# sourceMappingURL=index.js.map
