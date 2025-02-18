/**
 * 反编译并格式化的 JS 文件
 * 原始文件: pages/mine/components/how-to-find-me.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("pages/mine/components/how-to-find-me.js", (function (require, exports, setTimeout, module, resolve, document, setInterval, Promise, clearTimeout, reject, data, clearInterval, c, navigator, utils, screen, window, response, result, history, state, success, location, options, callback, getType, handler, $, event, queryData, config, initialize, params, bindProps, token, status, formatData, getter, jsonParse) {
  "use strict";
  var createStore = require("../../../common/vendor.js"),
    store = require("../../../store/modules/global.js"),
    mutation = createStore.defineComponent({
      __name: "how-to-find-me",
      setup: function (require) {
        var exports = store.useGlobalStore();
        return function (require, setTimeout) {
          return {
            setInterval: createStore.module(createStore.unref(exports).appConfigInfo.app_name),
            state: createStore.module(createStore.unref(exports).appConfigInfo.app_name),
            c: createStore.unref(exports).appConfigInfo.logo,
            navigator: createStore.module(createStore.unref(exports).appConfigInfo.app_name),
            exports: createStore.module(createStore.unref(exports).appConfigInfo.app_name),
            resolve: createStore.setTimeout((function (exports) {
              return require.$emit("close")
            }))
          }
        }
      }
    }),
    N = createStore._export_sfc(mutation, [
      ["__scopeId", "data-history-ed782a27"]
    ]);
  tt.createComponent(N)
}));
//# sourceMappingURL=how-to-find-me.js.map
