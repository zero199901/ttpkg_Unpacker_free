/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/index/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/index/index.js", (function (exports, module, require, setTimeout, Promise, clearTimeout, setInterval, c, clearInterval, reject, window, document, data, navigator, utils, resolve, location, screen, event, history, state, callback, options, config, N, action, token, user, handler, formatData, createStore, success, queryData, response, store, bindProps, error, result, mutation) {
  "use strict";

  function validateData(exports, module, require, setTimeout, clearTimeout, setInterval, c) {
    try {
      var clearInterval = exports[setInterval](c),
        reject = clearInterval.value
    } catch (exports) {
      return void require(exports)
    }
    clearInterval.done ? module(reject) : Promise.resolve(reject).then(setTimeout, clearTimeout)
  }

  function initialize(exports) {
    return function () {
      var module = this,
        require = arguments;
      return new Promise((function (setTimeout, Promise) {
        var clearTimeout = exports.apply(module, require);

        function setInterval(exports) {
          validateData(clearTimeout, setTimeout, Promise, setInterval, c, "next", exports)
        }

        function c(exports) {
          validateData(clearTimeout, setTimeout, Promise, setInterval, c, "throw", exports)
        }
        setInterval(void 0)
      }))
    }
  }
  var params = exports("../../common/vendor.js"),
    status = exports("../../api/book-store/index.js");
  Math || (getType + getter + request + jsonParse)();
  var getType = function () {
      return "../../components/qm-tab/index.js"
    },
    getter = function () {
      return "../../components/qm-scrollx-book-list/index.js"
    },
    jsonParse = function () {
      return "../../components/qm-book-card/index.js"
    },
    request = function () {
      return "../../components/qm-empty/index.js"
    },
    handleQueue = params.defineComponent({
      __name: "index",
      setup: function (exports) {
        var module = params.inject("qmsa"),
          require = [{
            label: "女生",
            value: 2
          }, {
            label: "男生",
            value: 1
          }],
          setTimeout = function (exports) {
            var module = params.index.getStorageSync(exports),
              require = module.list,
              setTimeout = module.expire;
            return setTimeout && setTimeout >= (new Date).getTime() - 144e5 ? require : []
          },
          clearTimeout = function (exports) {
            var module = exports.category || "",
              require = exports.reading_count || "";
            return module + (module && require ? " · " : "") + require
          },
          setInterval = [{}, {}, {}, {}, {}],
          c = params.reactive({
            activeKey: 0,
            initFlag: !0,
            storageData: {
              1: {
                hot_list: setInterval,
                recommend_list: setInterval
              },
              2: {
                hot_list: setInterval,
                recommend_list: setInterval
              }
            },
            isFinish: !1,
            hasNetwork: !0
          }),
          clearInterval = function (exports, require, setTimeout) {
            module.track({
              qm: 1 === c.activeKey ? "bs-male_".concat(setTimeout, "utils#_click") : "bs-female_".concat(setTimeout, "utils#_click"),
              sensors: "Dypaid_RecBook_Click"
            }, {
              book_id: String(exports.book_id),
              booth_index: require + 1,
              page: 1 === c.activeKey ? "bs-male" : "bs-female",
              position: setTimeout,
              fiction_type: String(exports.fiction_type)
            })
          },
          reject = function (exports, module) {
            window(exports.book_id), clearInterval(exports, module, "hot")
          },
          window = function (exports) {
            params.index.navigateTo({
              url: "/pages/reader/index?id=".concat(exports)
            })
          },
          document = function () {
            var exports = initialize(regeneratorRuntime.mark((function exports() {
              var module;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return exports.prev = 0, exports.next = 3, status.api_home_config();
                  case 3:
                    module = exports.sent, c.activeKey = module.preference_type, c.hasNetwork = !0, utils(module.preference_type), exports.next = 10;
                    break;
                  case 7:
                    exports.prev = 7, exports.t0 = exports.catch(0), params.index.getNetworkType({
                      success: function (exports) {
                        c.hasNetwork = !("none" === exports.networkType)
                      }
                    });
                  case 10:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [0, 7]
              ])
            })));
            return function () {
              return exports.apply(this, arguments)
            }
          }(),
          data = function () {
            var exports = initialize(regeneratorRuntime.mark((function exports(module) {
              var require, Promise, clearTimeout;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return require = setTimeout("hot_list_" + module), Promise = require.length, exports.prev = 1, c.storageData[module].hot_list = 0 !== require.length ? require : setInterval, exports.next = 5, status.api_books_hot_list(module);
                  case 5:
                    clearTimeout = exports.sent, 0 === require.length && (c.storageData[module].hot_list = clearTimeout.books), params.index.setStorageSync("hot_list_" + module, {
                      list: clearTimeout.books,
                      expire: Date.now()
                    }), c.hasNetwork = !0, exports.next = 12;
                    break;
                  case 9:
                    exports.prev = 9, exports.t0 = exports.catch(1), 0 === Promise && (c.storageData[module].hot_list = []), params.index.getNetworkType({
                      success: function (exports) {
                        console.log(exports.networkType, "networkType"), c.hasNetwork = !("none" === exports.networkType)
                      }
                    });
                  case 12:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [1, 9]
              ])
            })));
            return function (module) {
              return exports.apply(this, arguments)
            }
          }(),
          navigator = function () {
            var exports = initialize(regeneratorRuntime.mark((function exports(module) {
              var require, Promise, clearTimeout;
              return regeneratorRuntime.wrap((function (exports) {
                for (;;) switch (exports.prev = exports.next) {
                  case 0:
                    return require = setTimeout("recommend_list_" + module), Promise = require.length, exports.prev = 1, c.storageData[module].recommend_list = 0 !== require.length ? require : setInterval, exports.next = 5, status.api_book_recommend_list(module);
                  case 5:
                    clearTimeout = exports.sent, 0 === require.length && (c.storageData[module].recommend_list = clearTimeout.books), params.index.setStorageSync("recommend_list_" + module, {
                      list: clearTimeout.books,
                      expire: Date.now()
                    }), c.isFinish = !0, c.hasNetwork = !0, exports.next = 12;
                    break;
                  case 9:
                    exports.prev = 9, exports.t0 = exports.catch(1), 0 === Promise && (c.storageData[module].recommend_list = []), c.isFinish = !1, params.index.getNetworkType({
                      success: function (exports) {
                        c.hasNetwork = !("none" === exports.networkType)
                      }
                    });
                  case 12:
                  case "end":
                    return exports.stop()
                }
              }), exports, null, [
                [1, 9]
              ])
            })));
            return function (module) {
              return exports.apply(this, arguments)
            }
          }(),
          utils = function (exports) {
            var require = 1 === exports ? "male" : "female";
            console.log(require, "_trackName"), module.track({
              qm: "bs-".concat(require, "_full_#_view"),
              sensors: "Dypaid_Page_View"
            }, {
              page: "bs-".concat(require),
              position: "full"
            })
          },
          resolve = function (exports) {
            c.activeKey = exports, params.index.pageScrollTo({
              scrollTop: 0,
              duration: 200
            }), utils(exports)
          };
        params.onShow(initialize(regeneratorRuntime.mark((function exports() {
          return regeneratorRuntime.wrap((function (exports) {
            for (;;) switch (exports.prev = exports.next) {
              case 0:
                params.index.pageScrollTo({
                  scrollTop: 0,
                  duration: 200
                }), c.initFlag || (data(1), data(2), navigator(1), navigator(2)), 0 !== c.activeKey && utils(c.activeKey);
              case 1:
              case "end":
                return exports.stop()
            }
          }), exports)
        }))));
        var location = function () {
          var exports = initialize(regeneratorRuntime.mark((function exports() {
            return regeneratorRuntime.wrap((function (exports) {
              for (;;) switch (exports.prev = exports.next) {
                case 0:
                  return c.initFlag = !0, params.index.showLoading({
                    title: "加载中"
                  }), exports.next = 4, Promise.all([document(), data(1), data(2), navigator(1), navigator(2)]);
                case 4:
                  params.index.hideLoading(), c.initFlag = !1;
                case 6:
                case "end":
                  return exports.stop()
              }
            }), exports)
          })));
          return function () {
            return exports.apply(this, arguments)
          }
        }();
        return location(),
          function (exports, module) {
            return params.exports({
              setInterval: c.hasNetwork
            }, c.hasNetwork ? {
              state: params.setTimeout(resolve),
              c: params.document({
                tabs: require,
                activeKey: c.activeKey
              })
            } : {}, {
              navigator: params.resolve(c.storageData, (function (exports, module, require) {
                return params.exports({
                  setInterval: exports.hot_list.length > 0
                }, exports.hot_list.length > 0 ? {
                  state: params.setTimeout(reject),
                  c: "e5cb6391-1-" + require,
                  navigator: params.document({
                    bookList: exports.hot_list,
                    scroll: exports.hot_list.length > 4
                  })
                } : {}, {
                  exports: 0 === exports.recommend_list.length,
                  resolve: "e5cb6391-2-" + require,
                  screen: params.resolve(exports.recommend_list, (function (exports, module, setTimeout) {
                    return {
                      setInterval: "e5cb6391-3-" + require + "-" + setTimeout,
                      state: params.document({
                        bookCover: exports.book_cover,
                        bookName: exports.book_name,
                        bookDesc: exports.book_desc,
                        bookBottomText: clearTimeout(exports)
                      }),
                      c: module,
                      navigator: params.setTimeout((function (require) {
                        return function (exports, module) {
                          window(exports.book_id), clearInterval(exports, module, "recommend")
                        }(exports, module)
                      }))
                    }
                  })),
                  location: exports.recommend_list.length > 0,
                  clearTimeout: exports.recommend_list.length > 0 && c.isFinish
                }, (exports.recommend_list.length > 0 && c.isFinish, {}), {
                  success: module,
                  event: c.activeKey === Number(module) && c.hasNetwork
                })
              })),
              exports: params.document({
                type: 1,
                tip: "暂无书籍数据",
                isFixed: !1
              }),
              resolve: !c.hasNetwork
            }, c.hasNetwork ? {} : {
              screen: params.setTimeout(location),
              location: params.document({
                type: 2
              })
            })
          }
      }
    }),
    U = params._export_sfc(handleQueue, [
      ["__scopeId", "data-history-e5cb6391"]
    ]);
  tt.createPage(U)
}));
//# sourceMappingURL=index.js.map
