/**
 * 反编译并格式化的 JS 文件
 * 原始文件: node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js
 * 处理时间: 2025-02-18 13:03:32
 */

define("node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js", (function (module, clearTimeout, setTimeout, clearInterval, exports, require, setInterval, Promise, location, document, window, reject, c, navigator, resolve, data, screen, event, state, response, config, options, callback, error, user, action, handler, history, getter, params, mutation, bindProps, token, result, success, validateData, watchChanges, $, initialize) {
  "use strict";
  var request = module("../../../../../common/vendor.js"),
    utils = {
      name: "uniPopup",
      components: {},
      emits: ["change", "maskClick"],
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        isMaskClick: {
          type: Boolean,
          default: null
        },
        maskClick: {
          type: Boolean,
          default: null
        },
        backgroundColor: {
          type: String,
          default: "none"
        },
        safeArea: {
          type: Boolean,
          default: !0
        },
        maskBackgroundColor: {
          type: String,
          default: "rgba(0, 0, 0, 0.4)"
        },
        borderRadius: {
          type: String
        }
      },
      watch: {
        type: {
          handler: function (module) {
            this.config[module] && this[this.config[module]](!0)
          },
          immediate: !0
        },
        isDesktop: {
          handler: function (module) {
            this.config[module] && this[this.config[this.type]](!0)
          },
          immediate: !0
        },
        maskClick: {
          handler: function (module) {
            this.mkclick = module
          },
          immediate: !0
        },
        isMaskClick: {
          handler: function (module) {
            this.mkclick = module
          },
          immediate: !0
        },
        showPopup: function (module) {}
      },
      data: function () {
        return {
          duration: 300,
          ani: [],
          showPopup: !1,
          showTrans: !1,
          popupWidth: 0,
          popupHeight: 0,
          config: {
            top: "top",
            bottom: "bottom",
            center: "center",
            left: "left",
            right: "right",
            message: "top",
            dialog: "center",
            share: "bottom"
          },
          maskClass: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          transClass: {
            backgroundColor: "transparent",
            borderRadius: this.borderRadius || "0",
            position: "fixed",
            left: 0,
            right: 0
          },
          maskShow: !0,
          mkclick: !0,
          popupstyle: "top"
        }
      },
      computed: {
        getStyles: function () {
          var module = {
            backgroundColor: this.bg
          };
          return this.borderRadius, module = Object.assign(module, {
            borderRadius: this.borderRadius
          })
        },
        isDesktop: function () {
          return this.popupWidth >= 500 && this.popupHeight >= 500
        },
        bg: function () {
          return "" === this.backgroundColor || "none" === this.backgroundColor ? "transparent" : this.backgroundColor
        }
      },
      mounted: function () {
        var module = this;
        ! function () {
          var clearTimeout = request.index.getSystemInfoSync(),
            setTimeout = clearTimeout.windowWidth,
            clearInterval = clearTimeout.windowHeight,
            exports = clearTimeout.windowTop,
            require = clearTimeout.safeArea,
            setInterval = (clearTimeout.screenHeight, clearTimeout.safeAreaInsets);
          module.popupWidth = setTimeout, module.popupHeight = clearInterval + (exports || 0), require && module.safeArea ? module.safeAreaInsets = setInterval.bottom : module.safeAreaInsets = 0
        }()
      },
      unmounted: function () {
        this.setH5Visible()
      },
      activated: function () {
        this.setH5Visible(!this.showPopup)
      },
      deactivated: function () {
        this.setH5Visible(!0)
      },
      created: function () {
        null === this.isMaskClick && null === this.maskClick ? this.mkclick = !0 : this.mkclick = null !== this.isMaskClick ? this.isMaskClick : this.maskClick, this.animation ? this.duration = 300 : this.duration = 0, this.messageChild = null, this.clearPropagation = !1, this.maskClass.backgroundColor = this.maskBackgroundColor
      },
      methods: {
        setH5Visible: function () {},
        closeMask: function () {
          this.maskShow = !1
        },
        disableMask: function () {
          this.mkclick = !1
        },
        clear: function (module) {
          module.stopPropagation(), this.clearPropagation = !0
        },
        open: function (module) {
          this.showPopup || (module && -1 !== ["top", "center", "bottom", "left", "right", "message", "dialog", "share"].indexOf(module) || (module = this.type), this.config[module] ? (this[this.config[module]](), this.$emit("change", {
            show: !0,
            type: module
          })) : console.error("缺少类型：", module))
        },
        close: function (module) {
          var clearTimeout = this;
          this.showTrans = !1, this.$emit("change", {
            show: !1,
            type: this.type
          }), setInterval(this.timer), this.timer = require((function () {
            clearTimeout.showPopup = !1
          }), 300)
        },
        touchstart: function () {
          this.clearPropagation = !1
        },
        onTap: function () {
          this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"), this.mkclick && this.close())
        },
        top: function (module) {
          var clearTimeout = this;
          this.popupstyle = this.isDesktop ? "fixforpc-top" : "top", this.ani = ["slide-top"], this.transClass = {
            position: "fixed",
            left: 0,
            right: 0,
            backgroundColor: this.bg,
            borderRadius: this.borderRadius || "0"
          }, module || (this.showPopup = !0, this.showTrans = !0, this.$nextTick((function () {
            clearTimeout.messageChild && "message" === clearTimeout.type && clearTimeout.messageChild.timerClose()
          })))
        },
        bottom: function (module) {
          this.popupstyle = "bottom", this.ani = ["slide-bottom"], this.transClass = {
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            paddingBottom: this.safeAreaInsets + "px",
            backgroundColor: this.bg,
            borderRadius: this.borderRadius || "0"
          }, module || (this.showPopup = !0, this.showTrans = !0)
        },
        center: function (module) {
          this.popupstyle = "center", this.ani = ["zoom-out", "fade"], this.transClass = {
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: this.borderRadius || "0"
          }, module || (this.showPopup = !0, this.showTrans = !0)
        },
        left: function (module) {
          this.popupstyle = "left", this.ani = ["slide-left"], this.transClass = {
            position: "fixed",
            left: 0,
            bottom: 0,
            top: 0,
            backgroundColor: this.bg,
            borderRadius: this.borderRadius || "0",
            display: "flex",
            flexDirection: "column"
          }, module || (this.showPopup = !0, this.showTrans = !0)
        },
        right: function (module) {
          this.popupstyle = "right", this.ani = ["slide-right"], this.transClass = {
            position: "fixed",
            bottom: 0,
            right: 0,
            top: 0,
            backgroundColor: this.bg,
            borderRadius: this.borderRadius || "0",
            display: "flex",
            flexDirection: "column"
          }, module || (this.showPopup = !0, this.showTrans = !0)
        }
      }
    };
  Array || request.resolveComponent("uni-transition")(), Math;
  var queryData = request._export_sfc(utils, [
    ["render", function (module, clearTimeout, setTimeout, clearInterval, exports, require) {
      return request.exports({
        setInterval: exports.showPopup
      }, exports.showPopup ? request.exports({
        state: exports.maskShow
      }, exports.maskShow ? {
        c: request.setTimeout(require.onTap),
        navigator: request.document({
          name: "mask",
          "mode-class": "fade",
          styles: exports.maskClass,
          duration: exports.duration,
          show: exports.showTrans
        })
      } : {}, {
        exports: request.clearInterval(require.getStyles),
        resolve: request.require(exports.popupstyle),
        screen: request.setTimeout((function () {
          return require.clear && require.clear.apply(require, arguments)
        })),
        location: request.setTimeout(require.onTap),
        clearTimeout: request.document({
          "mode-class": exports.ani,
          name: "content",
          styles: exports.transClass,
          duration: exports.duration,
          show: exports.showTrans
        }),
        success: request.setTimeout((function () {
          return require.touchstart && require.touchstart.apply(require, arguments)
        })),
        event: request.require(exports.popupstyle),
        window: request.require(require.isDesktop ? "fixforpc-initialize-index" : "")
      }) : {})
    }]
  ]);
  tt.createComponent(queryData)
}));
//# sourceMappingURL=uni-popup.js.map
