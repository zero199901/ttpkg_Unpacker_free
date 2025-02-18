define("pages/read-history/index.js", (function (e, n, t, o, r, i, a, c, u, p, s, l, d, f, g, v, h, _, y, b, m, x, k, w, S, O, T, j, A, R, q, z, B, C, D, I, P, L, M) {
  "use strict";

  function N(e) {
    return function (e) {
      if (Array.isArray(e)) return E(e)
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return E(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? E(e, n) : void 0
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function E(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
    return o
  }

  function H(e, n, t, o, i, a, c) {
    try {
      var u = e[a](c),
        p = u.value
    } catch (e) {
      return void t(e)
    }
    u.done ? n(p) : r.resolve(p).then(o, i)
  }
  var U = e("../../common/vendor.js"),
    V = e("../../api/reader/index.js");
  Math || (W + $)();
  var W = function () {
      return "../../components/qm-book-card/index.js"
    },
    $ = function () {
      return "../../components/qm-empty/index.js"
    },
    F = U.defineComponent({
      __name: "index",
      setup: function (e) {
        var n = U.inject("qmsa"),
          t = U.ref(!1),
          o = U.ref(!1),
          i = U.reactive({
            list: [],
            pageOption: {
              page: 1,
              pageSize: 20,
              count: 0
            }
          });

        function a() {
          return c.apply(this, arguments)
        }

        function c() {
          return c = function (e) {
            return function () {
              var n = this,
                t = arguments;
              return new r((function (o, r) {
                var i = e.apply(n, t);

                function a(e) {
                  H(i, o, r, a, c, "next", e)
                }

                function c(e) {
                  H(i, o, r, a, c, "throw", e)
                }
                a(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function e() {
            var n, t, r, a, c, p = arguments;
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (!(n = p.length > 0 && void 0 !== p[0] && p[0])) {
                    e.next = 7;
                    break
                  }
                  if (!(i.pageOption.page * i.pageOption.pageSize >= i.pageOption.count)) {
                    e.next = 4;
                    break
                  }
                  return e.abrupt("return");
                case 4:
                  i.pageOption.page++, e.next = 8;
                  break;
                case 7:
                  i.pageOption.page = 1;
                case 8:
                  return r = {
                    page: i.pageOption.page,
                    page_size: i.pageOption.pageSize
                  }, e.prev = 9, o.value && !(null == (t = i.list) ? void 0 : t.length) && u(!0), e.next = 13, V.api_reading_record_list(r);
                case 13:
                  c = e.sent, i.pageOption.count = c.pagination.count, n ? (a = i.list).push.apply(a, N(c.reading_records)) : i.list = c.reading_records, o.value = !1, e.next = 20;
                  break;
                case 17:
                  e.prev = 17, e.t0 = e.catch(9), U.index.getNetworkType({
                    success: function (e) {
                      o.value = "none" === e.networkType
                    }
                  });
                case 20:
                  u(!1), U.index.stopPullDownRefresh();
                case 21:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [9, 17]
            ])
          }))), c.apply(this, arguments)
        }

        function u(e) {
          t.value = e, e ? U.index.showLoading({
            title: "加载中",
            icon: "none"
          }) : U.index.hideLoading()
        }

        function p() {
          U.index.switchTab({
            url: "/pages/index/index"
          })
        }
        return u(!0), U.onShow((function () {
            n.track({
              qm: "history_full_#_view",
              sensors: "Dypaid_Page_View"
            }, {
              page: "history",
              position: "full"
            }), U.index.pageScrollTo({
              scrollTop: 0,
              duration: 200
            }), !o.value && a()
          })), U.onPullDownRefresh((function () {
            a()
          })), U.onReachBottom((function () {
            a(!0)
          })),
          function (e, r) {
            var c, u;
            return U.e({
              a: (null == (c = i.list) ? void 0 : c.length) || t.value
            }, (null == (u = i.list) ? void 0 : u.length) || t.value ? {
              b: U.f(i.list, (function (e, t, o) {
                return {
                  a: "93f6347c-0-" + o,
                  b: U.p({
                    bookCover: e.book_cover,
                    bookName: e.book_name,
                    bookBottomText: e.reading_state + " · " + e.serial_state,
                    coverWidth: 113,
                    coverHeight: 150
                  }),
                  c: e.book_id,
                  d: U.o((function (o) {
                    return function (e, t) {
                      n.track({
                        qm: "history_book_#_click",
                        sensors: "Dypaid_RecBook_Click"
                      }, {
                        book_id: String(e.book_id),
                        booth_index: t + 1,
                        page: "history",
                        position: "book",
                        fiction_type: String(e.fiction_type)
                      }), U.index.navigateTo({
                        url: "/pages/reader/index?id=".concat(e.book_id)
                      })
                    }(e, t)
                  }))
                }
              }))
            } : o.value ? {
              d: U.o(a),
              e: U.p({
                type: 2,
                btnText: "重试"
              })
            } : {
              f: U.o(p),
              g: U.p({
                type: 1,
                showBtn: !0,
                tip: "暂无更多数据",
                btnText: "去看书"
              })
            }, {
              c: o.value
            })
          }
      }
    }),
    G = U._export_sfc(F, [
      ["__scopeId", "data-v-93f6347c"]
    ]);
  tt.createPage(G)
}));
//# sourceMappingURL=index.js.map
