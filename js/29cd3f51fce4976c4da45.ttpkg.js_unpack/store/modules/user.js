/**
 * 反编译并格式化的 JS 文件
 * 原始文件: store/modules/user.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("store/modules/user.js", (function (require, exports, module, clearTimeout, setTimeout, clearInterval, reject, c, Promise, resolve, setInterval, screen, utils, navigator, handler, location, event, window, document, history, callback, config, result, success, data, options, store, U, state, queryData, initialize, params, bindProps, response, token, status, formatData, getType, getter) {
  "use strict";
  var jsonParse = require("../../common/vendor.js"),
    createStore = require("../../api/user/index.js"),
    mutation = {
      userInfo: jsonParse.index.getStorageSync("userInfo") || {},
      token: jsonParse.index.getStorageSync("token"),
      isLogining: !1
    },
    N = jsonParse.defineStore("user", {
      state: function () {
        return mutation
      },
      actions: {
        set_user_info: function (require) {
          this.userInfo = require, jsonParse.index.setStorageSync("userInfo", require)
        },
        update_user_info: function () {
          var require = this;
          return new setTimeout((function (exports, module) {
            createStore.api_user_info().then((function (module) {
              require.set_user_info(module), exports(module)
            })).catch((function (require) {
              module(require)
            }))
          }))
        },
        set_token: function (require) {
          this.token = require, jsonParse.index.setStorageSync("token", require)
        },
        set_is_logining: function (require) {
          this.isLogining = require
        },
        login: function () {
          var require = this;
          return new setTimeout((function (exports, module) {
            var clearTimeout = require;
            jsonParse.index.login({
              success: function (require) {
                var setTimeout = require.code;
                createStore.api_login(setTimeout).then((function (require) {
                  clearTimeout.set_token(require.access_token), exports(require)
                })).catch((function (require) {
                  module(require)
                }))
              },
              fail: function (require) {
                module(require)
              }
            })
          }))
        },
        login_app: function () {}
      }
    });
  module.useUserStore = N
}));
//# sourceMappingURL=user.js.map
