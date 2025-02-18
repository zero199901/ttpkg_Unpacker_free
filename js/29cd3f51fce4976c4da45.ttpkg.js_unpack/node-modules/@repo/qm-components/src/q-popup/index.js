define("node-modules/@repo/qm-components/src/q-popup/index.js", (function (e, o, t, n, u, r, a, c, l, i, p, s, d, f, m, v, g, h, y, b, _, k, x, M, H, j, C, V, Y, q, D, S, w, A, B, I, P, z, E) {
  "use strict";
  var F = e("../../../../../common/vendor.js");
  Array || F.resolveComponent("uni-popup")(), Math;
  var G = F.defineComponent({
      __name: "index",
      props: F.mergeModels({
        type: {
          default: "bottom"
        },
        controlHeight: {
          default: 200
        },
        contentStyle: {
          default: function () {
            return {
              background: "red"
            }
          }
        },
        isDark: {
          type: Boolean
        }
      }, {
        modelValue: {},
        modelModifiers: {}
      }),
      emits: F.mergeModels(["opened", "closed"], ["update:modelValue"]),
      setup: function (e, o) {
        var t = o.emit,
          n = e,
          u = t,
          a = F.ref(),
          c = F.useModel(e, "modelValue"),
          l = function e() {
            if (a.value) return a.value.open(), void r((function () {
              u("opened")
            }), 300);
            r((function () {
              e()
            }), 30)
          };
        c.value && l();
        var i = function () {
          var e;
          null == (e = a.value) || e.close(), r((function () {
            p.value = {}, u("closed")
          }), 300)
        };
        F.watch((function () {
          return c.value
        }), (function (e) {
          e ? l() : i()
        }));
        var p = F.ref({}),
          s = 0,
          d = 0,
          f = function (e) {
            e.touches && (s = e.touches[0].clientY, d = 0)
          },
          m = function (e) {
            d = (d = e.touches[0].clientY - s) < 0 ? 0 : d, p.value = {
              transform: "translateY(".concat(d, "px)")
            }
          },
          v = function (e) {
            d > 100 ? i() : p.value = {}
          };
        return function (e, o) {
          return F.e({
            a: "bottom" === n.type && n.controlHeight
          }, "bottom" === n.type && n.controlHeight ? {
            b: e.isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
            c: e.controlHeight + "rpx",
            d: F.o(f),
            e: F.o(m),
            f: F.o(v),
            g: F.s(p.value),
            h: F.s(n.contentStyle)
          } : {}, {
            i: F.sr(a, "e9af1c21-0", {
              k: "refPopup"
            }),
            j: F.o(i),
            k: F.p({
              type: n.type
            })
          })
        }
      }
    }),
    J = F._export_sfc(G, [
      ["__scopeId", "data-v-e9af1c21"]
    ]);
  tt.createComponent(J)
}));
//# sourceMappingURL=index.js.map
