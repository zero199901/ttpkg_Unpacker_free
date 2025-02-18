define("components/qm-tab/index.js", (function (e, t, n, a, o, i, r, u, c, f, d, p, s, v, y, m, l, b, g, h, _, w, C, K, S, x, j, q, A, B, I, N, k, z, D, E, F, G, H) {
  "use strict";
  var J = e("../../common/vendor.js"),
    L = J.defineComponent({
      __name: "index",
      props: {
        tabs: {
          type: Array,
          required: !0,
          default: function () {
            return []
          }
        },
        activeKey: {
          type: Number,
          default: 0
        },
        showSetting: {
          type: Boolean,
          default: !1
        },
        type: {
          type: String,
          default: "main"
        }
      },
      emits: ["change", "toConfig"],
      setup: function (e, t) {
        var n = t.emit,
          a = e,
          o = J.ref(a.activeKey);
        J.watch((function () {
          return a.activeKey
        }), (function () {
          o.value = a.activeKey
        }), {
          immediate: !0
        });
        var i = function () {
          n("toConfig")
        };
        return function (t, r) {
          return J.e({
            a: J.f(e.tabs, (function (e, t, a) {
              return {
                a: J.t(e.label),
                b: t,
                c: J.o((function (t) {
                  return a = e.value, void(o.value !== a && (o.value = a, n("change", a)));
                  var a
                })),
                d: o.value === e.value ? 1 : ""
              }
            })),
            b: "main" === a.type ? 1 : "",
            c: "secondary" === a.type ? 1 : "",
            d: e.showSetting
          }, e.showSetting ? {
            e: J.o(i)
          } : {}, {
            f: "main" === a.type ? 1 : "",
            g: "secondary" === a.type ? 1 : ""
          })
        }
      }
    }),
    M = J._export_sfc(L, [
      ["__scopeId", "data-v-9bcce6b4"]
    ]);
  tt.createComponent(M)
}));
//# sourceMappingURL=index.js.map
