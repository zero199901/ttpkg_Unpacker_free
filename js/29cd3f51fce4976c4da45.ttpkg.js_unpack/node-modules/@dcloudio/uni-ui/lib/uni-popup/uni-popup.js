define("node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js", (function(t, i, o, s, e, n, a, r, h, p, l, u, c, d, f, m, g, k, b, C, y, w, x, P, R, T, S, v, H, A, M, B, D, I, j, V, W, $, z) {
    "use strict";
    var O = t("../../../../../common/vendor.js"),
    _ = {
        name: "uniPopup",
        components: {},
        emits: ["change", "maskClick"],
        props: {
            animation: {
                type: Boolean,
            default:
                !0
            },
            type: {
                type: String,
            default:
                "center"
            },
            isMaskClick: {
                type: Boolean,
            default:
                null
            },
            maskClick: {
                type: Boolean,
            default:
                null
            },
            backgroundColor: {
                type: String,
            default:
                "none"
            },
            safeArea: {
                type: Boolean,
            default:
                !0
            },
            maskBackgroundColor: {
                type: String,
            default:
                "rgba(0, 0, 0, 0.4)"
            },
            borderRadius: {
                type: String
            }
        },
        watch: {
            type: {
                handler: function(t) {
                    this.config[t] && this[this.config[t]](!0)
                },
                immediate: !0
            },
            isDesktop: {
                handler: function(t) {
                    this.config[t] && this[this.config[this.type]](!0)
                },
                immediate: !0
            },
            maskClick: {
                handler: function(t) {
                    this.mkclick = t
                },
                immediate: !0
            },
            isMaskClick: {
                handler: function(t) {
                    this.mkclick = t
                },
                immediate: !0
            },
            showPopup: function(t) {}
        },
        data: function() {
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
            getStyles: function() {
                var t = {
                    backgroundColor: this.bg
                };
                return this.borderRadius,
                t = Object.assign(t, {
                    borderRadius: this.borderRadius
                })
            },
            isDesktop: function() {
                return this.popupWidth >= 500 && this.popupHeight >= 500
            },
            bg: function() {
                return "" === this.backgroundColor || "none" === this.backgroundColor ? "transparent": this.backgroundColor
            }
        },
        mounted: function() {
            var t = this; !
            function() {
                var i = O.index.getSystemInfoSync(),
                o = i.windowWidth,
                s = i.windowHeight,
                e = i.windowTop,
                n = i.safeArea,
                a = (i.screenHeight, i.safeAreaInsets);
                t.popupWidth = o,
                t.popupHeight = s + (e || 0),
                n && t.safeArea ? t.safeAreaInsets = a.bottom: t.safeAreaInsets = 0
            } ()
        },
        unmounted: function() {
            this.setH5Visible()
        },
        activated: function() {
            this.setH5Visible(!this.showPopup)
        },
        deactivated: function() {
            this.setH5Visible(!0)
        },
        created: function() {
            null === this.isMaskClick && null === this.maskClick ? this.mkclick = !0 : this.mkclick = null !== this.isMaskClick ? this.isMaskClick: this.maskClick,
            this.animation ? this.duration = 300 : this.duration = 0,
            this.messageChild = null,
            this.clearPropagation = !1,
            this.maskClass.backgroundColor = this.maskBackgroundColor
        },
        methods: {
            setH5Visible: function() {},
            closeMask: function() {
                this.maskShow = !1
            },
            disableMask: function() {
                this.mkclick = !1
            },
            clear: function(t) {
                t.stopPropagation(),
                this.clearPropagation = !0
            },
            open: function(t) {
                this.showPopup || (t && -1 !== ["top", "center", "bottom", "left", "right", "message", "dialog", "share"].indexOf(t) || (t = this.type), this.config[t] ? (this[this.config[t]](), this.$emit("change", {
                    show: !0,
                    type: t
                })) : console.error("缺少类型：", t))
            },
            close: function(t) {
                var i = this;
                this.showTrans = !1,
                this.$emit("change", {
                    show: !1,
                    type: this.type
                }),
                a(this.timer),
                this.timer = n((function() {
                    i.showPopup = !1
                }), 300)
            },
            touchstart: function() {
                this.clearPropagation = !1
            },
            onTap: function() {
                this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"), this.mkclick && this.close())
            },
            top: function(t) {
                var i = this;
                this.popupstyle = this.isDesktop ? "fixforpc-top": "top",
                this.ani = ["slide-top"],
                this.transClass = {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    backgroundColor: this.bg,
                    borderRadius: this.borderRadius || "0"
                },
                t || (this.showPopup = !0, this.showTrans = !0, this.$nextTick((function() {
                    i.messageChild && "message" === i.type && i.messageChild.timerClose()
                })))
            },
            bottom: function(t) {
                this.popupstyle = "bottom",
                this.ani = ["slide-bottom"],
                this.transClass = {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    paddingBottom: this.safeAreaInsets + "px",
                    backgroundColor: this.bg,
                    borderRadius: this.borderRadius || "0"
                },
                t || (this.showPopup = !0, this.showTrans = !0)
            },
            center: function(t) {
                this.popupstyle = "center",
                this.ani = ["zoom-out", "fade"],
                this.transClass = {
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
                },
                t || (this.showPopup = !0, this.showTrans = !0)
            },
            left: function(t) {
                this.popupstyle = "left",
                this.ani = ["slide-left"],
                this.transClass = {
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    top: 0,
                    backgroundColor: this.bg,
                    borderRadius: this.borderRadius || "0",
                    display: "flex",
                    flexDirection: "column"
                },
                t || (this.showPopup = !0, this.showTrans = !0)
            },
            right: function(t) {
                this.popupstyle = "right",
                this.ani = ["slide-right"],
                this.transClass = {
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    top: 0,
                    backgroundColor: this.bg,
                    borderRadius: this.borderRadius || "0",
                    display: "flex",
                    flexDirection: "column"
                },
                t || (this.showPopup = !0, this.showTrans = !0)
            }
        }
    };
    Array || O.resolveComponent("uni-transition")(),
    Math;
    var q = O._export_sfc(_, [["render",
    function(t, i, o, s, e, n) {
        return O.e({
            a: e.showPopup
        },
        e.showPopup ? O.e({
            b: e.maskShow
        },
        e.maskShow ? {
            c: O.o(n.onTap),
            d: O.p({
                name: "mask",
                "mode-class": "fade",
                styles: e.maskClass,
                duration: e.duration,
                show: e.showTrans
            })
        }: {},
        {
            e: O.s(n.getStyles),
            f: O.n(e.popupstyle),
            g: O.o((function() {
                return n.clear && n.clear.apply(n, arguments)
            })),
            h: O.o(n.onTap),
            i: O.p({
                "mode-class": e.ani,
                name: "content",
                styles: e.transClass,
                duration: e.duration,
                show: e.showTrans
            }),
            j: O.o((function() {
                return n.touchstart && n.touchstart.apply(n, arguments)
            })),
            k: O.n(e.popupstyle),
            l: O.n(n.isDesktop ? "fixforpc-z-index": "")
        }) : {})
    }]]);
    tt.createComponent(q)
}));
//# sourceMappingURL=uni-popup.js.map
