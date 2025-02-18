/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/read-history/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/read-history/index.js", (function (exports, require, module, setTimeout, Promise, clearTimeout, setInterval, c, reject, document, clearInterval, window, navigator, resolve, screen, history, location, utils, config, state, data, callback, event, options, handler, request, action, success, params, user, queryData, initialize, bindProps, response, token, result, error, store, mutation) {
  "use strict";

  function N(exports) {
    return function (exports) {
      if (Array.isArray(exports)) return status(exports)
    }(exports) || function (exports) {
      if ("undefined" != typeof Symbol && null != exports[Symbol.iterator] || null != exports["@@iterator"]) return Array.from(exports)
    }(exports) || function (exports, require) {
      if (exports) {
        if ("string" == typeof exports) return status(exports, require);
        var module = {}.toString.call(exports).slice(8, -1);
        return "Object" === module && exports.constructor && (module = exports.constructor.name), "Map" === module || "Set" === module ? Array.from(exports) : "Arguments" === module || /^(?:Ui|result)nt(?:8|16|32)(?:Clamped)?Array$/.test(module) ? status(exports, require) : void 0
      }
    }(exports) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have setInterval [Symbol.iterator]() method.")
    }()
  }

  function status(exports, require) {
    (null == require || require > exports.length) && (require = exports.length);
    for (var module = 0, setTimeout = Array(require); module < require; module++) setTimeout[module] = exports[module];
    return setTimeout
  }

  function getter(exports, require, module, setTimeout, clearTimeout, setInterval, c) {
    try {
      var reject = exports[setInterval](c),
        document = reject.value
    } catch (exports) {
      return void module(exports)
    }
    reject.done ? require(document) : Promise.resolve(document).then(setTimeout, clearTimeout)
  }
  var U = exports("../../common/vendor.js"),
    validateData = exports("../../api/reader/index.js");
  Math || (watchChanges + $)();
  var watchChanges = function () {
      return "../../components/qm-book-card/index.js"
    },
    $ = function () {
      return "../../components/qm-empty/index.js"
    },
    formatData = U.defineComponent({
      __name: "index",
      setup: function (exports) {
        var require = U.inject("qmsa"),
          module = U.ref(!1),
          setTimeout = U.ref(!1),
          clearTimeout = U.reactive({
            list: [],
            pageOption: {
              page: 1,
              pageSize: 20,
              count: 0
            }
          });

        function setInterval() {
          return c.apply(this, arguments)
        }

        function c() {
          return c = function (exports) {
            return function () {
              var require = this,
                module = arguments;
              return new Promise((function (setTimeout, Promise) {
                var clearTimeout = exports.apply(require, module);

                function setInterval(exports) {
                  getter(clearTimeout, setTimeout, Promise, setInterval, c, "next", exports)
                }

                function c(exports) {
                  getter(clearTimeout, setTimeout, Promise, setInterval, c, "throw", exports)
                }
                setInterval(void 0)
              }))
            }
          }(regeneratorRuntime.mark((function exports() {
            var require, module, Promise, setInterval, c, document = arguments;
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  if (!(require = document.length > 0 && void 0 !== document[0] && document[0])) {
                    exports.next = 7;
                    break
                  }
                  if (!(clearTimeout.pageOption.page * clearTimeout.pageOption.pageSize >= clearTimeout.pageOption.count)) {
                    exports.next = 4;
                    break
                  }
                  return exports.abrupt("return");
                case 4:
                  clearTimeout.pageOption.page++, exports.next = 8;
                  break;
                case 7:
                  clearTimeout.pageOption.page = 1;
                case 8:
                  return Promise = {
                    page: clearTimeout.pageOption.page,
                    page_size: clearTimeout.pageOption.pageSize
                  }, exports.prev = 9, setTimeout.value && !(null == (module = clearTimeout.list) ? void 0 : module.length) && reject(!0), exports.next = 13, validateData.api_reading_record_list(Promise);
                case 13:
                  c = exports.sent, clearTimeout.pageOption.count = c.pagination.count, require ? (setInterval = clearTimeout.list).push.apply(setInterval, N(c.reading_records)) : clearTimeout.list = c.reading_records, setTimeout.value = !1, exports.next = 20;
                  break;
                case 17:
                  exports.prev = 17, exports.t0 = exports.catch(9), U.index.getNetworkType({
                    success: function (exports) {
                      setTimeout.value = "none" === exports.networkType
                    }
                  });
                case 20:
                  reject(!1), U.index.stopPullDownRefresh();
                case 21:
                case "end":
                  return exports.stop()
              }
            }), exports, null, [
              [9, 17]
            ])
          }))), c.apply(this, arguments)
        }

        function reject(exports) {
          module.value = exports, exports ? U.index.showLoading({
            title: "加载中",
            icon: "none"
          }) : U.index.hideLoading()
        }

        function document() {
          U.index.switchTab({
            url: "/pages/index/index"
          })
        }
        return reject(!0), U.onShow((function () {
            require.track({
              qm: "history_full_#_view",
              sensors: "Dypaid_Page_View"
            }, {
              page: "history",
              position: "full"
            }), U.index.pageScrollTo({
              scrollTop: 0,
              duration: 200
            }), !setTimeout.value && setInterval()
          })), U.onPullDownRefresh((function () {
            setInterval()
          })), U.onReachBottom((function () {
            setInterval(!0)
          })),
          function (exports, Promise) {
            var c, reject;
            return U.exports({
              setInterval: (null == (c = clearTimeout.list) ? void 0 : c.length) || module.value
            }, (null == (reject = clearTimeout.list) ? void 0 : reject.length) || module.value ? {
              state: U.resolve(clearTimeout.list, (function (exports, module, setTimeout) {
                return {
                  setInterval: "93f6347c-0-" + setTimeout,
                  state: U.document({
                    bookCover: exports.book_cover,
                    bookName: exports.book_name,
                    bookBottomText: exports.reading_state + " · " + exports.serial_state,
                    coverWidth: 113,
                    coverHeight: 150
                  }),
                  c: exports.book_id,
                  navigator: U.setTimeout((function (setTimeout) {
                    return function (exports, module) {
                      require.track({
                        qm: "history_book_#_click",
                        sensors: "Dypaid_RecBook_Click"
                      }, {
                        book_id: String(exports.book_id),
                        booth_index: module + 1,
                        page: "history",
                        position: "book",
                        fiction_type: String(exports.fiction_type)
                      }), U.index.navigateTo({
                        url: "/pages/reader/index?id=".concat(exports.book_id)
                      })
                    }(exports, module)
                  }))
                }
              }))
            } : setTimeout.value ? {
              navigator: U.setTimeout(setInterval),
              exports: U.document({
                type: 2,
                btnText: "重试"
              })
            } : {
              resolve: U.setTimeout(document),
              screen: U.document({
                type: 1,
                showBtn: !0,
                tip: "暂无更多数据",
                btnText: "去看书"
              })
            }, {
              c: setTimeout.value
            })
          }
      }
    }),
    getType = U._export_sfc(formatData, [
      ["__scopeId", "data-history-93f6347c"]
    ]);
  tt.createPage(getType)
}));
//# sourceMappingURL=index.js.map
