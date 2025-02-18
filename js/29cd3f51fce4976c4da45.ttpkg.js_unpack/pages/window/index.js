/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/window/index.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/window/index.js", (function (exports, module, require, clearTimeout, setTimeout, Promise, setInterval, navigator, c, reject, document, clearInterval, resolve, window, utils, screen, data, history, callback, success, options, config, response, result, handler, state, bindProps, N, error, user, action, U, location, event, queryData, initialize, params, token, status) {
  "use strict";
  var formatData = exports("../../common/vendor.js"),
    getType = formatData.defineComponent({
      __name: "index",
      props: {
        url: {
          type: String,
          default: ""
        },
        title: {
          type: String
        }
      },
      setup: function (exports) {
        var module = exports,
          require = function () {
            module.title && formatData.index.setNavigationBarTitle({
              title: module.title
            })
          };
        return function (exports, clearTimeout) {
          return {
            setInterval: decodeURIComponent(module.url),
            state: formatData.setTimeout(require)
          }
        }
      }
    }),
    getter = formatData._export_sfc(getType, [
      ["__scopeId", "data-history-cc688ed9"]
    ]);
  tt.createPage(getter)
}));
//# sourceMappingURL=index.js.map
