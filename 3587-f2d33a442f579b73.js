"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3587],
  {
    74137: (e, t, r) => {
      r.d(t, { Eq: () => s });
      var n = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        l = function (e) {
          return e && (e.host || l(e.parentNode));
        },
        u = function (e, t, r, u) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = l(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[r] || (i[r] = new WeakMap());
          var c = i[r],
            d = [],
            f = new Set(),
            p = new Set(s),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          s.forEach(m);
          var v = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) v(e);
                else {
                  var t = e.getAttribute(u),
                    i = null !== t && "false" !== t,
                    a = (n.get(e) || 0) + 1,
                    l = (c.get(e) || 0) + 1;
                  n.set(e, a),
                    c.set(e, l),
                    d.push(e),
                    1 === a && i && o.set(e, !0),
                    1 === l && e.setAttribute(r, "true"),
                    i || e.setAttribute(u, "true");
                }
              });
          };
          return (
            v(t),
            f.clear(),
            a++,
            function () {
              d.forEach(function (e) {
                var t = n.get(e) - 1,
                  i = c.get(e) - 1;
                n.set(e, t),
                  c.set(e, i),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  i || e.removeAttribute(r);
              }),
                --a ||
                  ((n = new WeakMap()),
                  (n = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n,
            o = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ((n = e),
              "undefined" == typeof document
                ? null
                : (Array.isArray(n) ? n[0] : n).ownerDocument.body);
          return i
            ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))),
              u(o, i, r, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    89294: (e, t, r) => {
      r.d(t, { A: () => a });
      var n = r(7281),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        i = r(50248);
      let a = (0, n.forwardRef)((e, t) => {
        let {
          color: r = "currentColor",
          size: a = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: u,
          className: s = "",
          children: c,
          iconNode: d,
          ...f
        } = e;
        return (0, n.createElement)(
          "svg",
          {
            ref: t,
            ...o,
            width: a,
            height: a,
            stroke: r,
            strokeWidth: u ? (24 * Number(l)) / Number(a) : l,
            className: (0, i.z)("lucide", s),
            ...f,
          },
          [
            ...d.map((e) => {
              let [t, r] = e;
              return (0, n.createElement)(t, r);
            }),
            ...(Array.isArray(c) ? c : [c]),
          ]
        );
      });
    },
    35619: (e, t, r) => {
      r.d(t, { A: () => a });
      var n = r(7281),
        o = r(50248),
        i = r(89294);
      let a = (e, t) => {
        let r = (0, n.forwardRef)((r, a) => {
          let { className: l, ...u } = r;
          return (0, n.createElement)(i.A, {
            ref: a,
            iconNode: t,
            className: (0, o.z)("lucide-".concat((0, o.f)(e)), l),
            ...u,
          });
        });
        return (r.displayName = "".concat(e)), r;
      };
    },
    58003: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(35619).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    57799: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(35619).A)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    63287: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(35619).A)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    41469: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(35619).A)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    1023: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(35619).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    50248: (e, t, r) => {
      r.d(t, { f: () => n, z: () => o });
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
    },
    27291: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(7281);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = i(e, n)), (o.current = i(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    94747: (e, t, r) => {
      r.d(t, { E9: () => i, Mi: () => n, pN: () => o, xi: () => a });
      var n = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        a = "--removed-body-scroll-bar-size";
    },
    38801: (e, t, r) => {
      r.d(t, { jp: () => f });
      var n = r(7281),
        o = r(7568),
        i = r(94747),
        a = { left: 0, top: 0, right: 0, gap: 0 },
        l = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        u = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [l(r), l(n), l(o)];
        },
        s = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return a;
          var t = u(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        c = (0, o.T0)(),
        d = function (e, t, r, n) {
          var o = e.left,
            a = e.top,
            l = e.right,
            u = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat(i.E9, " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(n, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        l,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(u, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.Mi, " {\n    right: ")
              .concat(u, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(i.pN, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(i.Mi, " .")
              .concat(i.Mi, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(i.pN, " .")
              .concat(i.pN, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body {\n    ")
              .concat(i.xi, ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        f = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o,
            a = n.useMemo(
              function () {
                return s(i);
              },
              [i]
            );
          return n.createElement(c, {
            styles: d(a, !t, i, r ? "" : "!important"),
          });
        };
    },
    89327: (e, t, r) => {
      r.d(t, { A: () => _ });
      var n = r(2361),
        o = r(7281),
        i = r(94747),
        a = r(21060),
        l = (0, r(5794).f)(),
        u = function () {},
        s = o.forwardRef(function (e, t) {
          var r = o.useRef(null),
            i = o.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u,
            }),
            s = i[0],
            c = i[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            b = e.noIsolation,
            y = e.inert,
            w = e.allowPinchZoom,
            E = e.as,
            x = (0, n.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            R = (0, a.S)([r, t]),
            C = (0, n.__assign)((0, n.__assign)({}, x), s);
          return o.createElement(
            o.Fragment,
            null,
            v &&
              o.createElement(g, {
                sideCar: l,
                removeScrollBar: m,
                shards: h,
                noIsolation: b,
                inert: y,
                setCallbacks: c,
                allowPinchZoom: !!w,
                lockRef: r,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, n.__assign)((0, n.__assign)({}, C), { ref: R })
                )
              : o.createElement(
                  void 0 === E ? "div" : E,
                  (0, n.__assign)({}, C, { className: p, ref: R }),
                  f
                )
          );
        });
      (s.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (s.classNames = { fullWidth: i.pN, zeroRight: i.Mi });
      var c = r(38296),
        d = r(38801),
        f = r(7568),
        p = !1;
      if ("undefined" != typeof window)
        try {
          var m = Object.defineProperty({}, "passive", {
            get: function () {
              return (p = !0), !0;
            },
          });
          window.addEventListener("test", m, m),
            window.removeEventListener("test", m, m);
        } catch (e) {
          p = !1;
        }
      var v = !!p && { passive: !1 },
        h = function (e, t) {
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        g = function (e, t) {
          var r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              b(e, r))
            ) {
              var n = y(e, r);
              if (n[1] > n[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== document.body);
          return !1;
        },
        b = function (e, t) {
          return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
        },
        y = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        w = function (e, t, r, n, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * n,
            u = r.target,
            s = t.contains(u),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var m = y(e, u),
              v = m[0],
              h = m[1] - m[2] - a * v;
            (v || h) && b(e, u) && ((f += h), (p += v)), (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 0 === f) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 0 === p) || (!o && -l > p)) && (c = !0),
            c
          );
        },
        E = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        x = function (e) {
          return [e.deltaX, e.deltaY];
        },
        R = function (e) {
          return e && "current" in e ? e.current : e;
        },
        C = 0,
        S = [];
      let A = (0, c.m)(l, function (e) {
        var t = o.useRef([]),
          r = o.useRef([0, 0]),
          i = o.useRef(),
          a = o.useState(C++)[0],
          l = o.useState(function () {
            return (0, f.T0)();
          })[0],
          u = o.useRef(e);
        o.useEffect(
          function () {
            u.current = e;
          },
          [e]
        ),
          o.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, n.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(R),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = o.useCallback(function (e, t) {
            if ("touches" in e && 2 === e.touches.length)
              return !u.current.allowPinchZoom;
            var n,
              o = E(e),
              a = r.current,
              l = "deltaX" in e ? e.deltaX : a[0] - o[0],
              s = "deltaY" in e ? e.deltaY : a[1] - o[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = g(d, c);
            if (!f) return !0;
            if (
              (f ? (n = d) : ((n = "v" === d ? "h" : "v"), (f = g(d, c))), !f)
            )
              return !1;
            if (
              (!i.current &&
                "changedTouches" in e &&
                (l || s) &&
                (i.current = n),
              !n)
            )
              return !0;
            var p = i.current || n;
            return w(p, t, e, "h" === p ? l : s, !0);
          }, []),
          c = o.useCallback(function (e) {
            if (S.length && S[S.length - 1] === l) {
              var r = "deltaY" in e ? x(e) : E(e),
                n = t.current.filter(function (t) {
                  var n;
                  return (
                    t.name === e.type &&
                    t.target === e.target &&
                    (n = t.delta)[0] === r[0] &&
                    n[1] === r[1]
                  );
                })[0];
              if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!n) {
                var o = (u.current.shards || [])
                  .map(R)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? s(e, o[0]) : !u.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          p = o.useCallback(function (e, r, n, o) {
            var i = { name: e, delta: r, target: n, should: o };
            t.current.push(i),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== i;
                });
              }, 1);
          }, []),
          m = o.useCallback(function (e) {
            (r.current = E(e)), (i.current = void 0);
          }, []),
          h = o.useCallback(function (t) {
            p(t.type, x(t), t.target, s(t, e.lockRef.current));
          }, []),
          b = o.useCallback(function (t) {
            p(t.type, E(t), t.target, s(t, e.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            S.push(l),
            e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: b,
            }),
            document.addEventListener("wheel", c, v),
            document.addEventListener("touchmove", c, v),
            document.addEventListener("touchstart", m, v),
            function () {
              (S = S.filter(function (e) {
                return e !== l;
              })),
                document.removeEventListener("wheel", c, v),
                document.removeEventListener("touchmove", c, v),
                document.removeEventListener("touchstart", m, v);
            }
          );
        }, []);
        var y = e.removeScrollBar,
          A = e.inert;
        return o.createElement(
          o.Fragment,
          null,
          A
            ? o.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          y ? o.createElement(d.jp, { gapMode: "margin" }) : null
        );
      });
      var P = o.forwardRef(function (e, t) {
        return o.createElement(
          s,
          (0, n.__assign)({}, e, { ref: t, sideCar: A })
        );
      });
      P.classNames = s.classNames;
      let _ = P;
    },
    19301: (e, t, r) => {
      r.d(t, { A: () => _ });
      var n = r(2361),
        o = r(7281),
        i = r(94747),
        a = r(21060),
        l = (0, r(5794).f)(),
        u = function () {},
        s = o.forwardRef(function (e, t) {
          var r = o.useRef(null),
            i = o.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u,
            }),
            s = i[0],
            c = i[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            b = e.noIsolation,
            y = e.inert,
            w = e.allowPinchZoom,
            E = e.as,
            x = e.gapMode,
            R = (0, n.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            C = (0, a.S)([r, t]),
            S = (0, n.__assign)((0, n.__assign)({}, R), s);
          return o.createElement(
            o.Fragment,
            null,
            v &&
              o.createElement(g, {
                sideCar: l,
                removeScrollBar: m,
                shards: h,
                noIsolation: b,
                inert: y,
                setCallbacks: c,
                allowPinchZoom: !!w,
                lockRef: r,
                gapMode: x,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, n.__assign)((0, n.__assign)({}, S), { ref: C })
                )
              : o.createElement(
                  void 0 === E ? "div" : E,
                  (0, n.__assign)({}, S, { className: p, ref: C }),
                  f
                )
          );
        });
      (s.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (s.classNames = { fullWidth: i.pN, zeroRight: i.Mi });
      var c = r(38296),
        d = r(38801),
        f = r(7568),
        p = !1;
      if ("undefined" != typeof window)
        try {
          var m = Object.defineProperty({}, "passive", {
            get: function () {
              return (p = !0), !0;
            },
          });
          window.addEventListener("test", m, m),
            window.removeEventListener("test", m, m);
        } catch (e) {
          p = !1;
        }
      var v = !!p && { passive: !1 },
        h = function (e, t) {
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        g = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              b(e, n))
            ) {
              var o = y(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        b = function (e, t) {
          return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
        },
        y = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        w = function (e, t, r, n, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * n,
            u = r.target,
            s = t.contains(u),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var m = y(e, u),
              v = m[0],
              h = m[1] - m[2] - a * v;
            (v || h) && b(e, u) && ((f += h), (p += v)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0),
            c
          );
        },
        E = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        x = function (e) {
          return [e.deltaX, e.deltaY];
        },
        R = function (e) {
          return e && "current" in e ? e.current : e;
        },
        C = 0,
        S = [];
      let A = (0, c.m)(l, function (e) {
        var t = o.useRef([]),
          r = o.useRef([0, 0]),
          i = o.useRef(),
          a = o.useState(C++)[0],
          l = o.useState(f.T0)[0],
          u = o.useRef(e);
        o.useEffect(
          function () {
            u.current = e;
          },
          [e]
        ),
          o.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, n.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(R),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = o.useCallback(function (e, t) {
            if ("touches" in e && 2 === e.touches.length)
              return !u.current.allowPinchZoom;
            var n,
              o = E(e),
              a = r.current,
              l = "deltaX" in e ? e.deltaX : a[0] - o[0],
              s = "deltaY" in e ? e.deltaY : a[1] - o[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = g(d, c);
            if (!f) return !0;
            if (
              (f ? (n = d) : ((n = "v" === d ? "h" : "v"), (f = g(d, c))), !f)
            )
              return !1;
            if (
              (!i.current &&
                "changedTouches" in e &&
                (l || s) &&
                (i.current = n),
              !n)
            )
              return !0;
            var p = i.current || n;
            return w(p, t, e, "h" === p ? l : s, !0);
          }, []),
          c = o.useCallback(function (e) {
            if (S.length && S[S.length - 1] === l) {
              var r = "deltaY" in e ? x(e) : E(e),
                n = t.current.filter(function (t) {
                  var n;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (n = t.delta)[0] === r[0] &&
                    n[1] === r[1]
                  );
                })[0];
              if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!n) {
                var o = (u.current.shards || [])
                  .map(R)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? s(e, o[0]) : !u.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          p = o.useCallback(function (e, r, n, o) {
            var i = {
              name: e,
              delta: r,
              target: n,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(n),
            };
            t.current.push(i),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== i;
                });
              }, 1);
          }, []),
          m = o.useCallback(function (e) {
            (r.current = E(e)), (i.current = void 0);
          }, []),
          h = o.useCallback(function (t) {
            p(t.type, x(t), t.target, s(t, e.lockRef.current));
          }, []),
          b = o.useCallback(function (t) {
            p(t.type, E(t), t.target, s(t, e.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            S.push(l),
            e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: b,
            }),
            document.addEventListener("wheel", c, v),
            document.addEventListener("touchmove", c, v),
            document.addEventListener("touchstart", m, v),
            function () {
              (S = S.filter(function (e) {
                return e !== l;
              })),
                document.removeEventListener("wheel", c, v),
                document.removeEventListener("touchmove", c, v),
                document.removeEventListener("touchstart", m, v);
            }
          );
        }, []);
        var y = e.removeScrollBar,
          A = e.inert;
        return o.createElement(
          o.Fragment,
          null,
          A
            ? o.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          y ? o.createElement(d.jp, { gapMode: e.gapMode }) : null
        );
      });
      var P = o.forwardRef(function (e, t) {
        return o.createElement(
          s,
          (0, n.__assign)({}, e, { ref: t, sideCar: A })
        );
      });
      P.classNames = s.classNames;
      let _ = P;
    },
    7568: (e, t, r) => {
      r.d(t, { T0: () => l });
      var n,
        o = r(7281),
        i = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = n || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        a = function () {
          var e = i();
          return function (t, r) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        l = function () {
          var e = a();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    21060: (e, t, r) => {
      r.d(t, { S: () => o });
      var n = r(7281);
      function o(e, t) {
        var r, o, i;
        return (
          (r = t || null),
          (o = function (t) {
            return e.forEach(function (e) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e;
            });
          }),
          ((i = (0, n.useState)(function () {
            return {
              value: r,
              callback: o,
              facade: {
                get current() {
                  return i.value;
                },
                set current(value) {
                  var e = i.value;
                  e !== value && ((i.value = value), i.callback(value, e));
                },
              },
            };
          })[0]).callback = o),
          i.facade
        );
      }
    },
    38296: (e, t, r) => {
      r.d(t, { m: () => a });
      var n = r(2361),
        o = r(7281),
        i = function (e) {
          var t = e.sideCar,
            r = (0, n.__rest)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var i = t.read();
          if (!i) throw Error("Sidecar medium not found");
          return o.createElement(i, (0, n.__assign)({}, r));
        };
      function a(e, t) {
        return e.useMedium(t), i;
      }
      i.isSideCarExport = !0;
    },
    5794: (e, t, r) => {
      r.d(t, { f: () => i });
      var n = r(2361);
      function o(e) {
        return e;
      }
      function i(e) {
        void 0 === e && (e = {});
        var t,
          r,
          i,
          a =
            (void 0 === t && (t = o),
            (r = []),
            (i = !1),
            {
              read: function () {
                if (i)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return r.length ? r[r.length - 1] : null;
              },
              useMedium: function (e) {
                var n = t(e, i);
                return (
                  r.push(n),
                  function () {
                    r = r.filter(function (e) {
                      return e !== n;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (i = !0; r.length; ) {
                  var t = r;
                  (r = []), t.forEach(e);
                }
                r = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return r;
                  },
                };
              },
              assignMedium: function (e) {
                i = !0;
                var t = [];
                if (r.length) {
                  var n = r;
                  (r = []), n.forEach(e), (t = r);
                }
                var o = function () {
                    var r = t;
                    (t = []), r.forEach(e);
                  },
                  a = function () {
                    return Promise.resolve().then(o);
                  };
                a(),
                  (r = {
                    push: function (e) {
                      t.push(e), a();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), r;
                    },
                  });
              },
            });
        return (a.options = (0, n.__assign)({ async: !0, ssr: !1 }, e)), a;
      }
    },
    13752: (e, t, r) => {
      r.d(t, { A: () => n });
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
    },
    36295: (e, t, r) => {
      r.d(t, { A: () => n });
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
    },
    66439: (e, t, r) => {
      r.d(t, { A: () => n });
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
    },
    65733: (e, t, r) => {
      function n(e) {
        return e.split("-")[1];
      }
      function o(e) {
        return "y" === e ? "height" : "width";
      }
      function i(e) {
        return e.split("-")[0];
      }
      function a(e) {
        return ["top", "bottom"].includes(i(e)) ? "x" : "y";
      }
      function l(e, t, r) {
        let l,
          { reference: u, floating: s } = e,
          c = u.x + u.width / 2 - s.width / 2,
          d = u.y + u.height / 2 - s.height / 2,
          f = a(t),
          p = o(f),
          m = u[p] / 2 - s[p] / 2,
          v = "x" === f;
        switch (i(t)) {
          case "top":
            l = { x: c, y: u.y - s.height };
            break;
          case "bottom":
            l = { x: c, y: u.y + u.height };
            break;
          case "right":
            l = { x: u.x + u.width, y: d };
            break;
          case "left":
            l = { x: u.x - s.width, y: d };
            break;
          default:
            l = { x: u.x, y: u.y };
        }
        switch (n(t)) {
          case "start":
            l[f] -= m * (r && v ? -1 : 1);
            break;
          case "end":
            l[f] += m * (r && v ? -1 : 1);
        }
        return l;
      }
      r.d(t, {
        B1: () => d,
        BN: () => P,
        ER: () => _,
        Ej: () => k,
        UE: () => v,
        UU: () => E,
        cY: () => S,
        jD: () => C,
        rD: () => u,
      });
      let u = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: a,
          } = r,
          u = i.filter(Boolean),
          s = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: d, y: f } = l(c, n, s),
          p = n,
          m = {},
          v = 0;
        for (let r = 0; r < u.length; r++) {
          let { name: i, fn: h } = u[r],
            {
              x: g,
              y: b,
              data: y,
              reset: w,
            } = await h({
              x: d,
              y: f,
              initialPlacement: n,
              placement: p,
              strategy: o,
              middlewareData: m,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (d = null != g ? g : d),
            (f = null != b ? b : f),
            (m = { ...m, [i]: { ...m[i], ...y } }),
            w &&
              v <= 50 &&
              (v++,
              "object" == typeof w &&
                (w.placement && (p = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: d, y: f } = l(c, p, s))),
              (r = -1));
        }
        return { x: d, y: f, placement: p, strategy: o, middlewareData: m };
      };
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function c(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function d(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      async function f(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: o, platform: i, rects: a, elements: l, strategy: u } = e,
          {
            boundary: f = "clippingAncestors",
            rootBoundary: p = "viewport",
            elementContext: m = "floating",
            altBoundary: v = !1,
            padding: h = 0,
          } = s(t, e),
          g = c(h),
          b = l[v ? ("floating" === m ? "reference" : "floating") : m],
          y = d(
            await i.getClippingRect({
              element:
                null ==
                  (r = await (null == i.isElement ? void 0 : i.isElement(b))) ||
                r
                  ? b
                  : b.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(l.floating))),
              boundary: f,
              rootBoundary: p,
              strategy: u,
            })
          ),
          w = "floating" === m ? { ...a.floating, x: n, y: o } : a.reference,
          E = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(l.floating)),
          x = ((await (null == i.isElement ? void 0 : i.isElement(E))) &&
            (await (null == i.getScale ? void 0 : i.getScale(E)))) || {
            x: 1,
            y: 1,
          },
          R = d(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: E,
                  strategy: u,
                })
              : w
          );
        return {
          top: (y.top - R.top + g.top) / x.y,
          bottom: (R.bottom - y.bottom + g.bottom) / x.y,
          left: (y.left - R.left + g.left) / x.x,
          right: (R.right - y.right + g.right) / x.x,
        };
      }
      let p = Math.min,
        m = Math.max,
        v = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: i,
                placement: l,
                rects: u,
                platform: d,
                elements: f,
              } = t,
              { element: v, padding: h = 0 } = s(e, t) || {};
            if (null == v) return {};
            let g = c(h),
              b = { x: r, y: i },
              y = a(l),
              w = o(y),
              E = await d.getDimensions(v),
              x = "y" === y,
              R = x ? "clientHeight" : "clientWidth",
              C = u.reference[w] + u.reference[y] - b[y] - u.floating[w],
              S = b[y] - u.reference[y],
              A = await (null == d.getOffsetParent
                ? void 0
                : d.getOffsetParent(v)),
              P = A ? A[R] : 0;
            (P && (await (null == d.isElement ? void 0 : d.isElement(A)))) ||
              (P = f.floating[R] || u.floating[w]);
            let _ = P / 2 - E[w] / 2 - 1,
              k = p(g[x ? "top" : "left"], _),
              D = p(g[x ? "bottom" : "right"], _),
              N = P - E[w] - D,
              O = P / 2 - E[w] / 2 + (C / 2 - S / 2),
              T = m(k, p(O, N)),
              M =
                null != n(l) &&
                O != T &&
                u.reference[w] / 2 - (O < k ? k : D) - E[w] / 2 < 0;
            return {
              [y]: b[y] - (M ? (O < k ? k - O : N - O) : 0),
              data: { [y]: T, centerOffset: O - T },
            };
          },
        }),
        h = ["top", "right", "bottom", "left"],
        g =
          (h.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e) => g[e]);
      }
      let y = { start: "end", end: "start" };
      function w(e) {
        return e.replace(/start|end/g, (e) => y[e]);
      }
      let E = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var r, l, u, c;
              let {
                  placement: d,
                  middlewareData: p,
                  rects: m,
                  initialPlacement: v,
                  platform: h,
                  elements: g,
                } = t,
                {
                  mainAxis: y = !0,
                  crossAxis: E = !0,
                  fallbackPlacements: x,
                  fallbackStrategy: R = "bestFit",
                  fallbackAxisSideDirection: C = "none",
                  flipAlignment: S = !0,
                  ...A
                } = s(e, t),
                P = i(d),
                _ = i(v) === v,
                k = await (null == h.isRTL ? void 0 : h.isRTL(g.floating)),
                D =
                  x ||
                  (_ || !S
                    ? [b(v)]
                    : (function (e) {
                        let t = b(e);
                        return [w(e), t, w(t)];
                      })(v));
              x ||
                "none" === C ||
                D.push(
                  ...(function (e, t, r, o) {
                    let a = n(e),
                      l = (function (e, t, r) {
                        let n = ["left", "right"],
                          o = ["right", "left"];
                        switch (e) {
                          case "top":
                          case "bottom":
                            return r ? (t ? o : n) : t ? n : o;
                          case "left":
                          case "right":
                            return t ? ["top", "bottom"] : ["bottom", "top"];
                          default:
                            return [];
                        }
                      })(i(e), "start" === r, o);
                    return (
                      a &&
                        ((l = l.map((e) => e + "-" + a)),
                        t && (l = l.concat(l.map(w)))),
                      l
                    );
                  })(v, S, C, k)
                );
              let N = [v, ...D],
                O = await f(t, A),
                T = [],
                M = (null == (r = p.flip) ? void 0 : r.overflows) || [];
              if ((y && T.push(O[P]), E)) {
                let { main: e, cross: t } = (function (e, t, r) {
                  void 0 === r && (r = !1);
                  let i = n(e),
                    l = a(e),
                    u = o(l),
                    s =
                      "x" === l
                        ? i === (r ? "end" : "start")
                          ? "right"
                          : "left"
                        : "start" === i
                        ? "bottom"
                        : "top";
                  return (
                    t.reference[u] > t.floating[u] && (s = b(s)),
                    { main: s, cross: b(s) }
                  );
                })(d, m, k);
                T.push(O[e], O[t]);
              }
              if (
                ((M = [...M, { placement: d, overflows: T }]),
                !T.every((e) => e <= 0))
              ) {
                let e = ((null == (l = p.flip) ? void 0 : l.index) || 0) + 1,
                  t = N[e];
                if (t)
                  return {
                    data: { index: e, overflows: M },
                    reset: { placement: t },
                  };
                let r =
                  null ==
                  (u = M.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1]
                  )[0])
                    ? void 0
                    : u.placement;
                if (!r)
                  switch (R) {
                    case "bestFit": {
                      let e =
                        null ==
                        (c = M.map((e) => [
                          e.placement,
                          e.overflows
                            .filter((e) => e > 0)
                            .reduce((e, t) => e + t, 0),
                        ]).sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : c[0];
                      e && (r = e);
                      break;
                    }
                    case "initialPlacement":
                      r = v;
                  }
                if (d !== r) return { reset: { placement: r } };
              }
              return {};
            },
          }
        );
      };
      function x(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function R(e) {
        return h.some((t) => e[t] >= 0);
      }
      let C = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "hide",
              options: e,
              async fn(t) {
                let { rects: r } = t,
                  { strategy: n = "referenceHidden", ...o } = s(e, t);
                switch (n) {
                  case "referenceHidden": {
                    let e = x(
                      await f(t, { ...o, elementContext: "reference" }),
                      r.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: R(e),
                      },
                    };
                  }
                  case "escaped": {
                    let e = x(
                      await f(t, { ...o, altBoundary: !0 }),
                      r.floating
                    );
                    return { data: { escapedOffsets: e, escaped: R(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        S = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                let { x: r, y: o } = t,
                  l = await (async function (e, t) {
                    let { placement: r, platform: o, elements: l } = e,
                      u = await (null == o.isRTL
                        ? void 0
                        : o.isRTL(l.floating)),
                      c = i(r),
                      d = n(r),
                      f = "x" === a(r),
                      p = ["left", "top"].includes(c) ? -1 : 1,
                      m = u && f ? -1 : 1,
                      v = s(t, e),
                      {
                        mainAxis: h,
                        crossAxis: g,
                        alignmentAxis: b,
                      } = "number" == typeof v
                        ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
                        : {
                            mainAxis: 0,
                            crossAxis: 0,
                            alignmentAxis: null,
                            ...v,
                          };
                    return (
                      d &&
                        "number" == typeof b &&
                        (g = "end" === d ? -1 * b : b),
                      f ? { x: g * m, y: h * p } : { x: h * p, y: g * m }
                    );
                  })(t, e);
                return { x: r + l.x, y: o + l.y, data: l };
              },
            }
          );
        };
      function A(e) {
        return "x" === e ? "y" : "x";
      }
      let P = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: r, y: n, placement: o } = t,
                  {
                    mainAxis: l = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: r } = e;
                        return { x: t, y: r };
                      },
                    },
                    ...d
                  } = s(e, t),
                  v = { x: r, y: n },
                  h = await f(t, d),
                  g = a(i(o)),
                  b = A(g),
                  y = v[g],
                  w = v[b];
                if (l) {
                  let e = "y" === g ? "bottom" : "right";
                  y = m(y + h["y" === g ? "top" : "left"], p(y, y - h[e]));
                }
                if (u) {
                  let e = "y" === b ? "bottom" : "right";
                  w = m(w + h["y" === b ? "top" : "left"], p(w, w - h[e]));
                }
                let E = c.fn({ ...t, [g]: y, [b]: w });
                return { ...E, data: { x: E.x - r, y: E.y - n } };
              },
            }
          );
        },
        _ = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: r,
                    y: n,
                    placement: o,
                    rects: l,
                    middlewareData: u,
                  } = t,
                  {
                    offset: c = 0,
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                  } = s(e, t),
                  p = { x: r, y: n },
                  m = a(o),
                  v = A(m),
                  h = p[m],
                  g = p[v],
                  b = s(c, t),
                  y =
                    "number" == typeof b
                      ? { mainAxis: b, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...b };
                if (d) {
                  let e = "y" === m ? "height" : "width",
                    t = l.reference[m] - l.floating[e] + y.mainAxis,
                    r = l.reference[m] + l.reference[e] - y.mainAxis;
                  h < t ? (h = t) : h > r && (h = r);
                }
                if (f) {
                  var w, E;
                  let e = "y" === m ? "width" : "height",
                    t = ["top", "left"].includes(i(o)),
                    r =
                      l.reference[v] -
                      l.floating[e] +
                      ((t && (null == (w = u.offset) ? void 0 : w[v])) || 0) +
                      (t ? 0 : y.crossAxis),
                    n =
                      l.reference[v] +
                      l.reference[e] +
                      (t ? 0 : (null == (E = u.offset) ? void 0 : E[v]) || 0) -
                      (t ? y.crossAxis : 0);
                  g < r ? (g = r) : g > n && (g = n);
                }
                return { [m]: h, [v]: g };
              },
            }
          );
        },
        k = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                let r, o;
                let { placement: l, rects: u, platform: c, elements: d } = t,
                  { apply: v = () => {}, ...h } = s(e, t),
                  g = await f(t, h),
                  b = i(l),
                  y = n(l),
                  w = "x" === a(l),
                  { width: E, height: x } = u.floating;
                "top" === b || "bottom" === b
                  ? ((r = b),
                    (o =
                      y ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(d.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((o = b), (r = "end" === y ? "top" : "bottom"));
                let R = x - g[r],
                  C = E - g[o],
                  S = !t.middlewareData.shift,
                  A = R,
                  P = C;
                if (w) {
                  let e = E - g.left - g.right;
                  P = y || S ? p(C, e) : e;
                } else {
                  let e = x - g.top - g.bottom;
                  A = y || S ? p(R, e) : e;
                }
                if (S && !y) {
                  let e = m(g.left, 0),
                    t = m(g.right, 0),
                    r = m(g.top, 0),
                    n = m(g.bottom, 0);
                  w
                    ? (P =
                        E -
                        2 * (0 !== e || 0 !== t ? e + t : m(g.left, g.right)))
                    : (A =
                        x -
                        2 * (0 !== r || 0 !== n ? r + n : m(g.top, g.bottom)));
                }
                await v({ ...t, availableWidth: P, availableHeight: A });
                let _ = await c.getDimensions(d.floating);
                return E !== _.width || x !== _.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    32660: (e, t, r) => {
      r.d(t, { ll: () => M, rD: () => L });
      var n = r(65733);
      function o(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function i(e) {
        return o(e).getComputedStyle(e);
      }
      function a(e) {
        return e instanceof o(e).Node;
      }
      function l(e) {
        return a(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      function u(e) {
        return e instanceof o(e).HTMLElement;
      }
      function s(e) {
        return e instanceof o(e).Element;
      }
      function c(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function d(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: o } = i(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(o)
        );
      }
      function f(e) {
        let t = p(),
          r = i(e);
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (r.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function p() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function m(e) {
        return ["html", "body", "#document"].includes(l(e));
      }
      let v = Math.min,
        h = Math.max,
        g = Math.round;
      function b(e) {
        let t = i(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          o = u(e),
          a = o ? e.offsetWidth : r,
          l = o ? e.offsetHeight : n,
          s = g(r) !== a || g(n) !== l;
        return s && ((r = a), (n = l)), { width: r, height: n, fallback: s };
      }
      function y(e) {
        return s(e) ? e : e.contextElement;
      }
      let w = { x: 1, y: 1 };
      function E(e) {
        let t = y(e);
        if (!u(t)) return w;
        let r = t.getBoundingClientRect(),
          { width: n, height: o, fallback: i } = b(t),
          a = (i ? g(r.width) : r.width) / n,
          l = (i ? g(r.height) : r.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let x = { x: 0, y: 0 };
      function R(e, t, r) {
        var n, i;
        if ((void 0 === t && (t = !0), !p())) return x;
        let a = e ? o(e) : window;
        return !r || (t && r !== a)
          ? x
          : {
              x: (null == (n = a.visualViewport) ? void 0 : n.offsetLeft) || 0,
              y: (null == (i = a.visualViewport) ? void 0 : i.offsetTop) || 0,
            };
      }
      function C(e, t, r, i) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let a = e.getBoundingClientRect(),
          l = y(e),
          u = w;
        t && (i ? s(i) && (u = E(i)) : (u = E(e)));
        let c = R(l, r, i),
          d = (a.left + c.x) / u.x,
          f = (a.top + c.y) / u.y,
          p = a.width / u.x,
          m = a.height / u.y;
        if (l) {
          let e = o(l),
            t = i && s(i) ? o(i) : i,
            r = e.frameElement;
          for (; r && i && t !== e; ) {
            let e = E(r),
              t = r.getBoundingClientRect(),
              n = getComputedStyle(r);
            (t.x += (r.clientLeft + parseFloat(n.paddingLeft)) * e.x),
              (t.y += (r.clientTop + parseFloat(n.paddingTop)) * e.y),
              (d *= e.x),
              (f *= e.y),
              (p *= e.x),
              (m *= e.y),
              (d += t.x),
              (f += t.y),
              (r = o(r).frameElement);
          }
        }
        return (0, n.B1)({ width: p, height: m, x: d, y: f });
      }
      function S(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function A(e) {
        return s(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function P(e) {
        return C(S(e)).left + A(e).scrollLeft;
      }
      function _(e) {
        if ("html" === l(e)) return e;
        let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || S(e);
        return c(t) ? t.host : t;
      }
      function k(e, t) {
        var r;
        void 0 === t && (t = []);
        let n = (function e(t) {
            let r = _(t);
            return m(r) ? r.ownerDocument.body : u(r) && d(r) ? r : e(r);
          })(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = o(n);
        return i
          ? t.concat(a, a.visualViewport || [], d(n) ? n : [])
          : t.concat(n, k(n));
      }
      function D(e, t, r) {
        let a;
        if ("viewport" === t)
          a = (function (e, t) {
            let r = o(e),
              n = S(e),
              i = r.visualViewport,
              a = n.clientWidth,
              l = n.clientHeight,
              u = 0,
              s = 0;
            if (i) {
              (a = i.width), (l = i.height);
              let e = p();
              (!e || (e && "fixed" === t)) &&
                ((u = i.offsetLeft), (s = i.offsetTop));
            }
            return { width: a, height: l, x: u, y: s };
          })(e, r);
        else if ("document" === t)
          a = (function (e) {
            let t = S(e),
              r = A(e),
              n = e.ownerDocument.body,
              o = h(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
              a = h(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              l = -r.scrollLeft + P(e),
              u = -r.scrollTop;
            return (
              "rtl" === i(n).direction &&
                (l += h(t.clientWidth, n.clientWidth) - o),
              { width: o, height: a, x: l, y: u }
            );
          })(S(e));
        else if (s(t))
          a = (function (e, t) {
            let r = C(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              o = r.left + e.clientLeft,
              i = u(e) ? E(e) : { x: 1, y: 1 };
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: n * i.y,
            };
          })(t, r);
        else {
          let r = R(e);
          a = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return (0, n.B1)(a);
      }
      function N(e, t) {
        return u(e) && "fixed" !== i(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function O(e, t) {
        let r = o(e);
        if (!u(e)) return r;
        let n = N(e, t);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(l(n)) &&
          "static" === i(n).position;

        )
          n = N(n, t);
        return n &&
          ("html" === l(n) ||
            ("body" === l(n) && "static" === i(n).position && !f(n)))
          ? r
          : n ||
              (function (e) {
                let t = _(e);
                for (; u(t) && !m(t); ) {
                  if (f(t)) return t;
                  t = _(t);
                }
                return null;
              })(e) ||
              r;
      }
      let T = {
        getClippingRect: function (e) {
          let { element: t, boundary: r, rootBoundary: n, strategy: o } = e,
            a = [
              ...("clippingAncestors" === r
                ? (function (e, t) {
                    let r = t.get(e);
                    if (r) return r;
                    let n = k(e).filter((e) => s(e) && "body" !== l(e)),
                      o = null,
                      a = "fixed" === i(e).position,
                      u = a ? _(e) : e;
                    for (; s(u) && !m(u); ) {
                      let t = i(u),
                        r = f(u);
                      r || "fixed" !== t.position || (o = null),
                        (
                          a
                            ? !r && !o
                            : (!r &&
                                "static" === t.position &&
                                o &&
                                ["absolute", "fixed"].includes(o.position)) ||
                              (d(u) &&
                                !r &&
                                (function e(t, r) {
                                  let n = _(t);
                                  return (
                                    !(n === r || !s(n) || m(n)) &&
                                    ("fixed" === i(n).position || e(n, r))
                                  );
                                })(e, u))
                        )
                          ? (n = n.filter((e) => e !== u))
                          : (o = t),
                        (u = _(u));
                    }
                    return t.set(e, n), n;
                  })(t, this._c)
                : [].concat(r)),
              n,
            ],
            u = a[0],
            c = a.reduce((e, r) => {
              let n = D(t, r, o);
              return (
                (e.top = h(n.top, e.top)),
                (e.right = v(n.right, e.right)),
                (e.bottom = v(n.bottom, e.bottom)),
                (e.left = h(n.left, e.left)),
                e
              );
            }, D(t, u, o));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: r, strategy: n } = e,
            o = u(r),
            i = S(r);
          if (r === i) return t;
          let a = { scrollLeft: 0, scrollTop: 0 },
            s = { x: 1, y: 1 },
            c = { x: 0, y: 0 };
          if (
            (o || (!o && "fixed" !== n)) &&
            (("body" !== l(r) || d(i)) && (a = A(r)), u(r))
          ) {
            let e = C(r);
            (s = E(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
          }
          return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - a.scrollLeft * s.x + c.x,
            y: t.y * s.y - a.scrollTop * s.y + c.y,
          };
        },
        isElement: s,
        getDimensions: function (e) {
          return b(e);
        },
        getOffsetParent: O,
        getDocumentElement: S,
        getScale: E,
        async getElementRects(e) {
          let { reference: t, floating: r, strategy: n } = e,
            o = this.getOffsetParent || O,
            i = this.getDimensions;
          return {
            reference: (function (e, t, r) {
              let n = u(t),
                o = S(t),
                i = "fixed" === r,
                a = C(e, !0, i, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                c = { x: 0, y: 0 };
              if (n || (!n && !i)) {
                if ((("body" !== l(t) || d(o)) && (s = A(t)), u(t))) {
                  let e = C(t, !0, i, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else o && (c.x = P(o));
              }
              return {
                x: a.left + s.scrollLeft - c.x,
                y: a.top + s.scrollTop - c.y,
                width: a.width,
                height: a.height,
              };
            })(t, await o(r), n),
            floating: { x: 0, y: 0, ...(await i(r)) },
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => "rtl" === i(e).direction,
      };
      function M(e, t, r, n) {
        void 0 === n && (n = {});
        let {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: a = !0,
            animationFrame: l = !1,
          } = n,
          u =
            o || i
              ? [
                  ...(s(e)
                    ? k(e)
                    : e.contextElement
                    ? k(e.contextElement)
                    : []),
                  ...k(t),
                ]
              : [];
        u.forEach((e) => {
          let t = !s(e) && e.toString().includes("V");
          o && (!l || t) && e.addEventListener("scroll", r, { passive: !0 }),
            i && e.addEventListener("resize", r);
        });
        let c,
          d = null;
        a &&
          ((d = new ResizeObserver(() => {
            r();
          })),
          s(e) && !l && d.observe(e),
          s(e) || !e.contextElement || l || d.observe(e.contextElement),
          d.observe(t));
        let f = l ? C(e) : null;
        return (
          l &&
            (function t() {
              let n = C(e);
              f &&
                (n.x !== f.x ||
                  n.y !== f.y ||
                  n.width !== f.width ||
                  n.height !== f.height) &&
                r(),
                (f = n),
                (c = requestAnimationFrame(t));
            })(),
          r(),
          () => {
            var e;
            u.forEach((e) => {
              o && e.removeEventListener("scroll", r),
                i && e.removeEventListener("resize", r);
            }),
              null == (e = d) || e.disconnect(),
              (d = null),
              l && cancelAnimationFrame(c);
          }
        );
      }
      let L = (e, t, r) => {
        let o = new Map(),
          i = { platform: T, ...r },
          a = { ...i.platform, _c: o };
        return (0, n.rD)(e, t, { ...i, platform: a });
      };
    },
    56689: (e, t, r) => {
      r.d(t, { q: () => n });
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
    },
    45039: (e, t, r) => {
      r.d(t, { m: () => n });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
    },
    80075: (e, t, r) => {
      r.d(t, { m: () => n });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
    },
    755: (e, t, r) => {
      r.d(t, { H4: () => E, _V: () => w, bL: () => y });
      var n = r(7281),
        o = r(68117),
        i = r(30999),
        a = r(49543),
        l = r(27795),
        u = r(32469),
        s = "Avatar",
        [c, d] = (0, o.A)(s),
        [f, p] = c(s),
        m = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, ...o } = e,
            [i, a] = n.useState("idle");
          return (0, u.jsx)(f, {
            scope: r,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: a,
            children: (0, u.jsx)(l.sG.span, { ...o, ref: t }),
          });
        });
      m.displayName = s;
      var v = "AvatarImage",
        h = n.forwardRef((e, t) => {
          let {
              __scopeAvatar: r,
              src: o,
              onLoadingStatusChange: s = () => {},
              ...c
            } = e,
            d = p(v, r),
            f = (function (e) {
              let [t, r] = n.useState("idle");
              return (
                (0, a.N)(() => {
                  if (!e) {
                    r("error");
                    return;
                  }
                  let t = !0,
                    n = new window.Image(),
                    o = (e) => () => {
                      t && r(e);
                    };
                  return (
                    r("loading"),
                    (n.onload = o("loaded")),
                    (n.onerror = o("error")),
                    (n.src = e),
                    () => {
                      t = !1;
                    }
                  );
                }, [e]),
                t
              );
            })(o),
            m = (0, i.c)((e) => {
              s(e), d.onImageLoadingStatusChange(e);
            });
          return (
            (0, a.N)(() => {
              "idle" !== f && m(f);
            }, [f, m]),
            "loaded" === f
              ? (0, u.jsx)(l.sG.img, { ...c, ref: t, src: o })
              : null
          );
        });
      h.displayName = v;
      var g = "AvatarFallback",
        b = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, delayMs: o, ...i } = e,
            a = p(g, r),
            [s, c] = n.useState(void 0 === o);
          return (
            n.useEffect(() => {
              if (void 0 !== o) {
                let e = window.setTimeout(() => c(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            s && "loaded" !== a.imageLoadingStatus
              ? (0, u.jsx)(l.sG.span, { ...i, ref: t })
              : null
          );
        });
      b.displayName = g;
      var y = m,
        w = h,
        E = b;
    },
    7978: (e, t, r) => {
      r.d(t, { N: () => l });
      var n = r(7281),
        o = r(80577),
        i = r(8343),
        a = r(89790);
      function l(e) {
        let t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [u, s] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = e + "CollectionSlot",
          d = n.forwardRef((e, t) => {
            let { scope: r, children: o } = e,
              l = s(c, r),
              u = (0, i.s)(t, l.collectionRef);
            return n.createElement(a.DX, { ref: u }, o);
          }),
          f = e + "CollectionItemSlot",
          p = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: r } = e,
                o = n.useRef(null),
                i = n.useRef(new Map()).current;
              return n.createElement(
                u,
                { scope: t, itemMap: i, collectionRef: o },
                r
              );
            },
            Slot: d,
            ItemSlot: n.forwardRef((e, t) => {
              let { scope: r, children: o, ...l } = e,
                u = n.useRef(null),
                c = (0, i.s)(t, u),
                d = s(f, r);
              return (
                n.useEffect(
                  () => (
                    d.itemMap.set(u, { ref: u, ...l }),
                    () => void d.itemMap.delete(u)
                  )
                ),
                n.createElement(a.DX, { [p]: "", ref: c }, o)
              );
            }),
          },
          function (t) {
            let r = s(e + "CollectionConsumer", t);
            return n.useCallback(() => {
              let e = r.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(r.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
              );
            }, [r.collectionRef, r.itemMap]);
          },
          l,
        ];
      }
    },
    17419: (e, t, r) => {
      r.d(t, { N: () => u });
      var n = r(7281),
        o = r(68117),
        i = r(12435),
        a = r(85239),
        l = r(32469);
      function u(e) {
        let t = e + "CollectionProvider",
          [r, u] = (0, o.A)(t),
          [s, c] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: r } = e,
              o = n.useRef(null),
              i = n.useRef(new Map()).current;
            return (0, l.jsx)(s, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: r,
            });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = n.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = c(f, r),
              u = (0, i.s)(t, o.collectionRef);
            return (0, l.jsx)(a.DX, { ref: u, children: n });
          });
        p.displayName = f;
        let m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          h = n.forwardRef((e, t) => {
            let { scope: r, children: o, ...u } = e,
              s = n.useRef(null),
              d = (0, i.s)(t, s),
              f = c(m, r);
            return (
              n.useEffect(
                () => (
                  f.itemMap.set(s, { ref: s, ...u }),
                  () => void f.itemMap.delete(s)
                )
              ),
              (0, l.jsx)(a.DX, { [v]: "", ref: d, children: o })
            );
          });
        return (
          (h.displayName = m),
          [
            { Provider: d, Slot: p, ItemSlot: h },
            function (t) {
              let r = c(e + "CollectionConsumer", t);
              return n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            u,
          ]
        );
      }
    },
    8343: (e, t, r) => {
      r.d(t, { s: () => i, t: () => o });
      var n = r(7281);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return (0, n.useCallback)(o(...e), e);
      }
    },
    12435: (e, t, r) => {
      r.d(t, { s: () => i, t: () => o });
      var n = r(7281);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return n.useCallback(o(...e), e);
      }
    },
    80577: (e, t, r) => {
      r.d(t, { A: () => i, q: () => o });
      var n = r(7281);
      function o(e, t) {
        let r = (0, n.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            i = (0, n.useMemo)(() => o, Object.values(o));
          return (0, n.createElement)(r.Provider, { value: i }, t);
        }
        return (
          (o.displayName = e + "Provider"),
          [
            o,
            function (o) {
              let i = (0, n.useContext)(r);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => (0, n.createContext)(e));
            return function (r) {
              let o = (null == r ? void 0 : r[e]) || t;
              return (0, n.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = (0, n.createContext)(o),
                a = r.length;
              function l(t) {
                let { scope: r, children: o, ...l } = t,
                  u = (null == r ? void 0 : r[e][a]) || i,
                  s = (0, n.useMemo)(() => l, Object.values(l));
                return (0, n.createElement)(u.Provider, { value: s }, o);
              }
              return (
                (r = [...r, o]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (r, l) {
                    let u = (null == l ? void 0 : l[e][a]) || i,
                      s = (0, n.useContext)(u);
                    if (s) return s;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(o, ...t),
          ]
        );
      }
    },
    68117: (e, t, r) => {
      r.d(t, { A: () => a, q: () => i });
      var n = r(7281),
        o = r(32469);
      function i(e, t) {
        let r = n.createContext(t);
        function i(e) {
          let { children: t, ...i } = e,
            a = n.useMemo(() => i, Object.values(i));
          return (0, o.jsx)(r.Provider, { value: a, children: t });
        }
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = n.useContext(r);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function a(e, t = []) {
        let r = [],
          i = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let a = n.createContext(i),
                l = r.length;
              function u(t) {
                let { scope: r, children: i, ...u } = t,
                  s = r?.[e][l] || a,
                  c = n.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              }
              return (
                (r = [...r, i]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (r, o) {
                    let u = o?.[e][l] || a,
                      s = n.useContext(u);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(i, ...t),
          ]
        );
      }
    },
    31988: (e, t, r) => {
      r.d(t, {
        G$: () => W,
        Hs: () => E,
        UC: () => V,
        VY: () => q,
        ZL: () => K,
        bL: () => H,
        bm: () => Y,
        hE: () => X,
        hJ: () => $,
        l9: () => U,
      });
      var n = r(66439),
        o = r(7281),
        i = r(45039),
        a = r(8343),
        l = r(80577),
        u = r(54951),
        s = r(84155),
        c = r(36765),
        d = r(20084),
        f = r(45104),
        p = r(99102),
        m = r(70360),
        v = r(72767),
        h = r(89327),
        g = r(74137),
        b = r(89790);
      let y = "Dialog",
        [w, E] = (0, l.A)(y),
        [x, R] = w(y),
        C = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...l } = e,
            u = R("DialogTrigger", r),
            s = (0, a.s)(t, u.triggerRef);
          return (0, o.createElement)(
            m.sG.button,
            (0, n.A)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": u.open,
                "aria-controls": u.contentId,
                "data-state": G(u.open),
              },
              l,
              { ref: s, onClick: (0, i.m)(e.onClick, u.onOpenToggle) }
            )
          );
        }),
        S = "DialogPortal",
        [A, P] = w(S, { forceMount: void 0 }),
        _ = "DialogOverlay",
        k = (0, o.forwardRef)((e, t) => {
          let r = P(_, e.__scopeDialog),
            { forceMount: i = r.forceMount, ...a } = e,
            l = R(_, e.__scopeDialog);
          return l.modal
            ? (0, o.createElement)(
                p.C,
                { present: i || l.open },
                (0, o.createElement)(D, (0, n.A)({}, a, { ref: t }))
              )
            : null;
        }),
        D = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...i } = e,
            a = R(_, r);
          return (0, o.createElement)(
            h.A,
            { as: b.DX, allowPinchZoom: !0, shards: [a.contentRef] },
            (0, o.createElement)(
              m.sG.div,
              (0, n.A)({ "data-state": G(a.open) }, i, {
                ref: t,
                style: { pointerEvents: "auto", ...i.style },
              })
            )
          );
        }),
        N = "DialogContent",
        O = (0, o.forwardRef)((e, t) => {
          let r = P(N, e.__scopeDialog),
            { forceMount: i = r.forceMount, ...a } = e,
            l = R(N, e.__scopeDialog);
          return (0, o.createElement)(
            p.C,
            { present: i || l.open },
            l.modal
              ? (0, o.createElement)(T, (0, n.A)({}, a, { ref: t }))
              : (0, o.createElement)(M, (0, n.A)({}, a, { ref: t }))
          );
        }),
        T = (0, o.forwardRef)((e, t) => {
          let r = R(N, e.__scopeDialog),
            l = (0, o.useRef)(null),
            u = (0, a.s)(t, r.contentRef, l);
          return (
            (0, o.useEffect)(() => {
              let e = l.current;
              if (e) return (0, g.Eq)(e);
            }, []),
            (0, o.createElement)(
              L,
              (0, n.A)({}, e, {
                ref: u,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, i.m)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = r.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, i.m)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    r = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || r) && e.preventDefault();
                }),
                onFocusOutside: (0, i.m)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        M = (0, o.forwardRef)((e, t) => {
          let r = R(N, e.__scopeDialog),
            i = (0, o.useRef)(!1),
            a = (0, o.useRef)(!1);
          return (0, o.createElement)(
            L,
            (0, n.A)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var n, o;
                null === (n = e.onCloseAutoFocus) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented ||
                    (i.current ||
                      null === (o = r.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (i.current = !1),
                  (a.current = !1);
              },
              onInteractOutside: (t) => {
                var n, o;
                null === (n = e.onInteractOutside) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented ||
                    ((i.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (a.current = !0));
                let l = t.target;
                (null === (o = r.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(l)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    a.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        L = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: i,
              onOpenAutoFocus: l,
              onCloseAutoFocus: u,
              ...s
            } = e,
            f = R(N, r),
            p = (0, o.useRef)(null),
            m = (0, a.s)(t, p);
          return (
            (0, v.Oh)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                d.n,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: i,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: u,
                },
                (0, o.createElement)(
                  c.qW,
                  (0, n.A)(
                    {
                      role: "dialog",
                      id: f.contentId,
                      "aria-describedby": f.descriptionId,
                      "aria-labelledby": f.titleId,
                      "data-state": G(f.open),
                    },
                    s,
                    { ref: m, onDismiss: () => f.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        I = "DialogTitle",
        j = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...i } = e,
            a = R(I, r);
          return (0, o.createElement)(
            m.sG.h2,
            (0, n.A)({ id: a.titleId }, i, { ref: t })
          );
        }),
        F = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...i } = e,
            a = R("DialogDescription", r);
          return (0, o.createElement)(
            m.sG.p,
            (0, n.A)({ id: a.descriptionId }, i, { ref: t })
          );
        }),
        z = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...a } = e,
            l = R("DialogClose", r);
          return (0, o.createElement)(
            m.sG.button,
            (0, n.A)({ type: "button" }, a, {
              ref: t,
              onClick: (0, i.m)(e.onClick, () => l.onOpenChange(!1)),
            })
          );
        });
      function G(e) {
        return e ? "open" : "closed";
      }
      let [W, B] = (0, l.q)("DialogTitleWarning", {
          contentName: N,
          titleName: I,
          docsSlug: "dialog",
        }),
        H = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: n,
              defaultOpen: i,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [f = !1, p] = (0, s.i)({ prop: n, defaultProp: i, onChange: a });
          return (0, o.createElement)(
            x,
            {
              scope: t,
              triggerRef: c,
              contentRef: d,
              contentId: (0, u.B)(),
              titleId: (0, u.B)(),
              descriptionId: (0, u.B)(),
              open: f,
              onOpenChange: p,
              onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
              modal: l,
            },
            r
          );
        },
        U = C,
        K = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: n,
              container: i,
            } = e,
            a = R(S, t);
          return (0, o.createElement)(
            A,
            { scope: t, forceMount: r },
            o.Children.map(n, (e) =>
              (0, o.createElement)(
                p.C,
                { present: r || a.open },
                (0, o.createElement)(f.Z, { asChild: !0, container: i }, e)
              )
            )
          );
        },
        $ = k,
        V = O,
        X = j,
        q = F,
        Y = z;
    },
    97563: (e, t, r) => {
      r.d(t, {
        UC: () => et,
        VY: () => en,
        ZL: () => Q,
        bL: () => Z,
        bm: () => eo,
        hE: () => er,
        hJ: () => ee,
        l9: () => J,
      });
      var n = r(7281),
        o = r(80075),
        i = r(12435),
        a = r(68117),
        l = r(63123),
        u = r(24327),
        s = r(79551),
        c = r(8986),
        d = r(45037),
        f = r(26715),
        p = r(27795),
        m = r(80219),
        v = r(19301),
        h = r(74137),
        g = r(85239),
        b = r(32469),
        y = "Dialog",
        [w, E] = (0, a.A)(y),
        [x, R] = w(y),
        C = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: s = !0,
            } = e,
            c = n.useRef(null),
            d = n.useRef(null),
            [f = !1, p] = (0, u.i)({ prop: o, defaultProp: i, onChange: a });
          return (0, b.jsx)(x, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, l.B)(),
            titleId: (0, l.B)(),
            descriptionId: (0, l.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: s,
            children: r,
          });
        };
      C.displayName = y;
      var S = "DialogTrigger",
        A = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = R(S, r),
            l = (0, i.s)(t, a.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": K(a.open),
            ...n,
            ref: l,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      A.displayName = S;
      var P = "DialogPortal",
        [_, k] = w(P, { forceMount: void 0 }),
        D = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: i,
            } = e,
            a = R(P, t);
          return (0, b.jsx)(_, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, b.jsx)(f.C, {
                present: r || a.open,
                children: (0, b.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      D.displayName = P;
      var N = "DialogOverlay",
        O = n.forwardRef((e, t) => {
          let r = k(N, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = R(N, e.__scopeDialog);
          return i.modal
            ? (0, b.jsx)(f.C, {
                present: n || i.open,
                children: (0, b.jsx)(T, { ...o, ref: t }),
              })
            : null;
        });
      O.displayName = N;
      var T = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = R(N, r);
          return (0, b.jsx)(v.A, {
            as: g.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": K(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        M = "DialogContent",
        L = n.forwardRef((e, t) => {
          let r = k(M, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = R(M, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: n || i.open,
            children: i.modal
              ? (0, b.jsx)(I, { ...o, ref: t })
              : (0, b.jsx)(j, { ...o, ref: t }),
          });
        });
      L.displayName = M;
      var I = n.forwardRef((e, t) => {
          let r = R(M, e.__scopeDialog),
            a = n.useRef(null),
            l = (0, i.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, h.Eq)(e);
            }, []),
            (0, b.jsx)(F, {
              ...e,
              ref: l,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = r.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        j = n.forwardRef((e, t) => {
          let r = R(M, e.__scopeDialog),
            o = n.useRef(!1),
            i = n.useRef(!1);
          return (0, b.jsx)(F, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var n, a;
              null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t),
                t.defaultPrevented ||
                  (o.current ||
                    null === (a = r.triggerRef.current) ||
                    void 0 === a ||
                    a.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var n, a;
              null === (n = e.onInteractOutside) ||
                void 0 === n ||
                n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let l = t.target;
              (null === (a = r.triggerRef.current) || void 0 === a
                ? void 0
                : a.contains(l)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        F = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: l,
              ...u
            } = e,
            d = R(M, r),
            f = n.useRef(null),
            p = (0, i.s)(t, f);
          return (
            (0, m.Oh)(),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: l,
                  children: (0, b.jsx)(s.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": K(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)(q, { titleId: d.titleId }),
                    (0, b.jsx)(Y, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        z = "DialogTitle",
        G = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = R(z, r);
          return (0, b.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      G.displayName = z;
      var W = "DialogDescription",
        B = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = R(W, r);
          return (0, b.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      B.displayName = W;
      var H = "DialogClose",
        U = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = R(H, r);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function K(e) {
        return e ? "open" : "closed";
      }
      U.displayName = H;
      var $ = "DialogTitleWarning",
        [V, X] = (0, a.q)($, {
          contentName: M,
          titleName: z,
          docsSlug: "dialog",
        }),
        q = (e) => {
          let { titleId: t } = e,
            r = X($),
            o = "`"
              .concat(r.contentName, "` requires a `")
              .concat(
                r.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                r.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(r.docsSlug);
          return (
            n.useEffect(() => {
              t && !document.getElementById(t) && console.error(o);
            }, [o, t]),
            null
          );
        },
        Y = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = X("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            n.useEffect(() => {
              var e;
              let n =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              r && n && !document.getElementById(r) && console.warn(i);
            }, [i, t, r]),
            null
          );
        },
        Z = C,
        J = A,
        Q = D,
        ee = O,
        et = L,
        er = G,
        en = B,
        eo = U;
    },
    49633: (e, t, r) => {
      r.d(t, { jH: () => i });
      var n = r(7281);
      let o = (0, n.createContext)(void 0);
      function i(e) {
        let t = (0, n.useContext)(o);
        return e || t || "ltr";
      }
    },
    47269: (e, t, r) => {
      r.d(t, { jH: () => i });
      var n = r(7281);
      r(32469);
      var o = n.createContext(void 0);
      function i(e) {
        let t = n.useContext(o);
        return e || t || "ltr";
      }
    },
    36765: (e, t, r) => {
      let n;
      r.d(t, { qW: () => p });
      var o = r(66439),
        i = r(7281),
        a = r(45039),
        l = r(70360),
        u = r(8343),
        s = r(4915),
        c = r(37629);
      let d = "dismissableLayer.update",
        f = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = (0, i.forwardRef)((e, t) => {
          var r;
          let {
              disableOutsidePointerEvents: p = !1,
              onEscapeKeyDown: h,
              onPointerDownOutside: g,
              onFocusOutside: b,
              onInteractOutside: y,
              onDismiss: w,
              ...E
            } = e,
            x = (0, i.useContext)(f),
            [R, C] = (0, i.useState)(null),
            S =
              null !== (r = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== r
                ? r
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, A] = (0, i.useState)({}),
            P = (0, u.s)(t, (e) => C(e)),
            _ = Array.from(x.layers),
            [k] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            D = _.indexOf(k),
            N = R ? _.indexOf(R) : -1,
            O = x.layersWithOutsidePointerEventsDisabled.size > 0,
            T = N >= D,
            M = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = (0, s.c)(e),
                n = (0, i.useRef)(!1),
                o = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = { originalEvent: e };
                        function i() {
                          v("dismissableLayer.pointerDownOutside", r, n, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = i),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : i();
                      } else t.removeEventListener("click", o.current);
                      n.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...x.branches].some((e) => e.contains(t));
              !T ||
                r ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, S),
            L = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = (0, s.c)(e),
                n = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...x.branches].some((e) => e.contains(t)) ||
                (null == b || b(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, S);
          return (
            (0, c.U)((e) => {
              N !== x.layers.size - 1 ||
                (null == h || h(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, S),
            (0, i.useEffect)(() => {
              if (R)
                return (
                  p &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    x.layersWithOutsidePointerEventsDisabled.add(R)),
                  x.layers.add(R),
                  m(),
                  () => {
                    p &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = n);
                  }
                );
            }, [R, S, p, x]),
            (0, i.useEffect)(
              () => () => {
                R &&
                  (x.layers.delete(R),
                  x.layersWithOutsidePointerEventsDisabled.delete(R),
                  m());
              },
              [R, x]
            ),
            (0, i.useEffect)(() => {
              let e = () => A({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, i.createElement)(
              l.sG.div,
              (0, o.A)({}, E, {
                ref: P,
                style: {
                  pointerEvents: O ? (T ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, a.m)(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: (0, a.m)(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: (0, a.m)(
                  e.onPointerDownCapture,
                  M.onPointerDownCapture
                ),
              })
            )
          );
        });
      function m() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function v(e, t, r, { discrete: n }) {
        let o = r.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && o.addEventListener(e, t, { once: !0 }),
          n ? (0, l.hO)(o, i) : o.dispatchEvent(i);
      }
    },
    79551: (e, t, r) => {
      r.d(t, { qW: () => f });
      var n,
        o = r(7281),
        i = r(80075),
        a = r(27795),
        l = r(12435),
        u = r(30999),
        s = r(32469),
        c = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          var r, f;
          let {
              disableOutsidePointerEvents: v = !1,
              onEscapeKeyDown: h,
              onPointerDownOutside: g,
              onFocusOutside: b,
              onInteractOutside: y,
              onDismiss: w,
              ...E
            } = e,
            x = o.useContext(d),
            [R, C] = o.useState(null),
            S =
              null !== (f = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (r = globalThis) || void 0 === r
                ? void 0
                : r.document,
            [, A] = o.useState({}),
            P = (0, l.s)(t, (e) => C(e)),
            _ = Array.from(x.layers),
            [k] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            D = _.indexOf(k),
            N = R ? _.indexOf(R) : -1,
            O = x.layersWithOutsidePointerEventsDisabled.size > 0,
            T = N >= D,
            M = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                n = (0, u.c)(e),
                i = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", n, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (r.removeEventListener("click", a.current),
                            (a.current = t),
                            r.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else r.removeEventListener("click", a.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      r.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      r.removeEventListener("pointerdown", e),
                      r.removeEventListener("click", a.current);
                  };
                }, [r, n]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...x.branches].some((e) => e.contains(t));
              !T ||
                r ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, S),
            L = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                n = (0, u.c)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    r.addEventListener("focusin", e),
                    () => r.removeEventListener("focusin", e)
                  );
                }, [r, n]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...x.branches].some((e) => e.contains(t)) ||
                (null == b || b(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, S);
          return (
            !(function (e, t = globalThis?.document) {
              let r = (0, u.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              N !== x.layers.size - 1 ||
                (null == h || h(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, S),
            o.useEffect(() => {
              if (R)
                return (
                  v &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    x.layersWithOutsidePointerEventsDisabled.add(R)),
                  x.layers.add(R),
                  p(),
                  () => {
                    v &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = n);
                  }
                );
            }, [R, S, v, x]),
            o.useEffect(
              () => () => {
                R &&
                  (x.layers.delete(R),
                  x.layersWithOutsidePointerEventsDisabled.delete(R),
                  p());
              },
              [R, x]
            ),
            o.useEffect(() => {
              let e = () => A({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, s.jsx)(a.sG.div, {
              ...E,
              ref: P,
              style: {
                pointerEvents: O ? (T ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function m(e, t, r, n) {
        let { discrete: o } = n,
          i = r.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, a.hO)(i, l) : i.dispatchEvent(l);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let r = o.useContext(d),
            n = o.useRef(null),
            i = (0, l.s)(t, n);
          return (
            o.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, s.jsx)(a.sG.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    72767: (e, t, r) => {
      r.d(t, { Oh: () => i });
      var n = r(7281);
      let o = 0;
      function i() {
        (0, n.useEffect)(() => {
          var e, t;
          let r = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = r[0]) && void 0 !== e ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = r[1]) && void 0 !== t ? t : a()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    80219: (e, t, r) => {
      r.d(t, { Oh: () => i });
      var n = r(7281),
        o = 0;
      function i() {
        n.useEffect(() => {
          var e, t;
          let r = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = r[0]) && void 0 !== e ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = r[1]) && void 0 !== t ? t : a()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    20084: (e, t, r) => {
      r.d(t, { n: () => d });
      var n = r(66439),
        o = r(7281),
        i = r(8343),
        a = r(70360),
        l = r(4915);
      let u = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = (0, o.forwardRef)((e, t) => {
          let {
              loop: r = !1,
              trapped: d = !1,
              onMountAutoFocus: h,
              onUnmountAutoFocus: g,
              ...b
            } = e,
            [y, w] = (0, o.useState)(null),
            E = (0, l.c)(h),
            x = (0, l.c)(g),
            R = (0, o.useRef)(null),
            C = (0, i.s)(t, (e) => w(e)),
            S = (0, o.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, o.useEffect)(() => {
            if (d) {
              function e(e) {
                if (S.paused || !y) return;
                let t = e.target;
                y.contains(t) ? (R.current = t) : m(R.current, { select: !0 });
              }
              function t(e) {
                if (S.paused || !y) return;
                let t = e.relatedTarget;
                null === t || y.contains(t) || m(R.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(y);
              });
              return (
                y && r.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [d, y, S.paused]),
            (0, o.useEffect)(() => {
              if (y) {
                v.add(S);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(u, c);
                  y.addEventListener(u, E),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (m(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        f(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(y));
                }
                return () => {
                  y.removeEventListener(u, E),
                    setTimeout(() => {
                      let t = new CustomEvent(s, c);
                      y.addEventListener(s, x),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(s, x),
                        v.remove(S);
                    }, 0);
                };
              }
            }, [y, E, x, S]);
          let A = (0, o.useCallback)(
            (e) => {
              if ((!r && !d) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [o, i] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || n !== i
                    ? e.shiftKey &&
                      n === o &&
                      (e.preventDefault(), r && m(i, { select: !0 }))
                    : (e.preventDefault(), r && m(o, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, d, S.paused]
          );
          return (0, o.createElement)(
            a.sG.div,
            (0, n.A)({ tabIndex: -1 }, b, { ref: C, onKeyDown: A })
          );
        });
      function f(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function p(e, t) {
        for (let r of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function m(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      let v = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = h(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = h(e, t))[0]) || void 0 === r || r.resume();
          },
        };
      })();
      function h(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
    },
    8986: (e, t, r) => {
      r.d(t, { n: () => d });
      var n = r(7281),
        o = r(12435),
        i = r(27795),
        a = r(30999),
        l = r(32469),
        u = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = n.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: d = !1,
              onMountAutoFocus: h,
              onUnmountAutoFocus: g,
              ...b
            } = e,
            [y, w] = n.useState(null),
            E = (0, a.c)(h),
            x = (0, a.c)(g),
            R = n.useRef(null),
            C = (0, o.s)(t, (e) => w(e)),
            S = n.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          n.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (S.paused || !y) return;
                  let t = e.target;
                  y.contains(t)
                    ? (R.current = t)
                    : m(R.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !y) return;
                  let t = e.relatedTarget;
                  null === t || y.contains(t) || m(R.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(y);
              });
              return (
                y && r.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [d, y, S.paused]),
            n.useEffect(() => {
              if (y) {
                v.add(S);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(u, c);
                  y.addEventListener(u, E),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = document.activeElement;
                        for (let n of e)
                          if (
                            (m(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        f(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(y));
                }
                return () => {
                  y.removeEventListener(u, E),
                    setTimeout(() => {
                      let t = new CustomEvent(s, c);
                      y.addEventListener(s, x),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(s, x),
                        v.remove(S);
                    }, 0);
                };
              }
            }, [y, E, x, S]);
          let A = n.useCallback(
            (e) => {
              if ((!r && !d) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [o, i] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || n !== i
                    ? e.shiftKey &&
                      n === o &&
                      (e.preventDefault(), r && m(i, { select: !0 }))
                    : (e.preventDefault(), r && m(o, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, d, S.paused]
          );
          return (0, l.jsx)(i.sG.div, {
            tabIndex: -1,
            ...b,
            ref: C,
            onKeyDown: A,
          });
        });
      function f(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function p(e, t) {
        for (let r of e)
          if (
            !(function (e, t) {
              let { upTo: r } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === r || e !== r); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var v = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = h(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = h(e, t))[0]) || void 0 === r || r.resume();
          },
        };
      })();
      function h(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
    },
    83969: (e, t, r) => {
      let n;
      r.d(t, { UC: () => k, bL: () => P, l9: () => _ });
      var o = r(13752),
        i = r(7281),
        a = r(45039),
        l = r(80577),
        u = r(84155),
        s = r(8343),
        c = r(92833),
        d = (r(45104), r(99102)),
        f = r(70360),
        p = r(36765);
      let m = "HoverCard",
        [v, h] = (0, l.A)(m, [c.Bk]),
        g = (0, c.Bk)(),
        [b, y] = v(m),
        w = (0, i.forwardRef)((e, t) => {
          let { __scopeHoverCard: r, ...n } = e,
            l = y("HoverCardTrigger", r),
            u = g(r);
          return (0, i.createElement)(
            c.Mz,
            (0, o.A)({ asChild: !0 }, u),
            (0, i.createElement)(
              f.sG.a,
              (0, o.A)({ "data-state": l.open ? "open" : "closed" }, n, {
                ref: t,
                onPointerEnter: (0, a.m)(e.onPointerEnter, A(l.onOpen)),
                onPointerLeave: (0, a.m)(e.onPointerLeave, A(l.onClose)),
                onFocus: (0, a.m)(e.onFocus, l.onOpen),
                onBlur: (0, a.m)(e.onBlur, l.onClose),
                onTouchStart: (0, a.m)(e.onTouchStart, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        [E, x] = v("HoverCardPortal", { forceMount: void 0 }),
        R = "HoverCardContent",
        C = (0, i.forwardRef)((e, t) => {
          let r = x(R, e.__scopeHoverCard),
            { forceMount: n = r.forceMount, ...l } = e,
            u = y(R, e.__scopeHoverCard);
          return (0, i.createElement)(
            d.C,
            { present: n || u.open },
            (0, i.createElement)(
              S,
              (0, o.A)({ "data-state": u.open ? "open" : "closed" }, l, {
                onPointerEnter: (0, a.m)(e.onPointerEnter, A(u.onOpen)),
                onPointerLeave: (0, a.m)(e.onPointerLeave, A(u.onClose)),
                ref: t,
              })
            )
          );
        }),
        S = (0, i.forwardRef)((e, t) => {
          let {
              __scopeHoverCard: r,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: d,
              onInteractOutside: f,
              ...m
            } = e,
            v = y(R, r),
            h = g(r),
            b = (0, i.useRef)(null),
            w = (0, s.s)(t, b),
            [E, x] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (E) {
                let e = document.body;
                return (
                  (n = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = "none"),
                  (e.style.webkitUserSelect = "none"),
                  () => {
                    (e.style.userSelect = n), (e.style.webkitUserSelect = n);
                  }
                );
              }
            }, [E]),
            (0, i.useEffect)(() => {
              if (b.current) {
                let e = () => {
                  x(!1),
                    (v.isPointerDownOnContentRef.current = !1),
                    setTimeout(() => {
                      var e;
                      (null === (e = document.getSelection()) || void 0 === e
                        ? void 0
                        : e.toString()) !== "" &&
                        (v.hasSelectionRef.current = !0);
                    });
                };
                return (
                  document.addEventListener("pointerup", e),
                  () => {
                    document.removeEventListener("pointerup", e),
                      (v.hasSelectionRef.current = !1),
                      (v.isPointerDownOnContentRef.current = !1);
                  }
                );
              }
            }, [v.isPointerDownOnContentRef, v.hasSelectionRef]),
            (0, i.useEffect)(() => {
              b.current &&
                (function (e) {
                  let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: (e) =>
                        e.tabIndex >= 0
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP,
                    });
                  for (; r.nextNode(); ) t.push(r.currentNode);
                  return t;
                })(b.current).forEach((e) => e.setAttribute("tabindex", "-1"));
            }),
            (0, i.createElement)(
              p.qW,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onInteractOutside: f,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: (0, a.m)(d, (e) => {
                  e.preventDefault();
                }),
                onDismiss: v.onDismiss,
              },
              (0, i.createElement)(
                c.UC,
                (0, o.A)({}, h, m, {
                  onPointerDown: (0, a.m)(m.onPointerDown, (e) => {
                    e.currentTarget.contains(e.target) && x(!0),
                      (v.hasSelectionRef.current = !1),
                      (v.isPointerDownOnContentRef.current = !0);
                  }),
                  ref: w,
                  style: {
                    ...m.style,
                    userSelect: E ? "text" : void 0,
                    WebkitUserSelect: E ? "text" : void 0,
                    "--radix-hover-card-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-hover-card-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-hover-card-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-hover-card-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-hover-card-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                })
              )
            )
          );
        });
      function A(e) {
        return (t) => ("touch" === t.pointerType ? void 0 : e());
      }
      let P = (e) => {
          let {
              __scopeHoverCard: t,
              children: r,
              open: n,
              defaultOpen: o,
              onOpenChange: a,
              openDelay: l = 700,
              closeDelay: s = 300,
            } = e,
            d = g(t),
            f = (0, i.useRef)(0),
            p = (0, i.useRef)(0),
            m = (0, i.useRef)(!1),
            v = (0, i.useRef)(!1),
            [h = !1, y] = (0, u.i)({ prop: n, defaultProp: o, onChange: a }),
            w = (0, i.useCallback)(() => {
              clearTimeout(p.current),
                (f.current = window.setTimeout(() => y(!0), l));
            }, [l, y]),
            E = (0, i.useCallback)(() => {
              clearTimeout(f.current),
                m.current ||
                  v.current ||
                  (p.current = window.setTimeout(() => y(!1), s));
            }, [s, y]),
            x = (0, i.useCallback)(() => y(!1), [y]);
          return (
            (0, i.useEffect)(
              () => () => {
                clearTimeout(f.current), clearTimeout(p.current);
              },
              []
            ),
            (0, i.createElement)(
              b,
              {
                scope: t,
                open: h,
                onOpenChange: y,
                onOpen: w,
                onClose: E,
                onDismiss: x,
                hasSelectionRef: m,
                isPointerDownOnContentRef: v,
              },
              (0, i.createElement)(c.bL, d, r)
            )
          );
        },
        _ = w,
        k = C;
    },
    54951: (e, t, r) => {
      r.d(t, { B: () => u });
      var n,
        o = r(7281),
        i = r(56507);
      let a = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, r] = o.useState(a());
        return (
          (0, i.N)(() => {
            e || r((e) => (null != e ? e : String(l++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    63123: (e, t, r) => {
      r.d(t, { B: () => u });
      var n,
        o = r(7281),
        i = r(49543),
        a = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, r] = o.useState(a());
        return (
          (0, i.N)(() => {
            e || r((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    14989: (e, t, r) => {
      r.d(t, { b: () => l });
      var n = r(7281),
        o = r(27795),
        i = r(32469),
        a = n.forwardRef((e, t) =>
          (0, i.jsx)(o.sG.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var r;
              t.target.closest("button, input, select, textarea") ||
                (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      a.displayName = "Label";
      var l = a;
    },
    67862: (e, t, r) => {
      r.d(t, {
        B8: () => ed,
        C1: () => ev,
        LM: () => eg,
        N_: () => em,
        UC: () => eh,
        bL: () => ec,
        l9: () => ep,
        q7: () => ef,
      });
      var n = r(13752),
        o = r(7281),
        i = r(52116),
        a = r(80577),
        l = r(45039),
        u = r(70360),
        s = r(84155),
        c = r(8343),
        d = r(49633),
        f = r(99102),
        p = r(54951),
        m = r(7978),
        v = r(36765),
        h = r(19727),
        g = r(56507),
        b = r(4915),
        y = r(18804);
      let w = "NavigationMenu",
        [E, x, R] = (0, m.N)(w),
        [C, S, A] = (0, m.N)(w),
        [P, _] = (0, a.A)(w, [R, A]),
        [k, D] = P(w),
        [N, O] = P(w),
        T = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: r,
              value: i,
              onValueChange: a,
              defaultValue: l,
              delayDuration: f = 200,
              skipDelayDuration: p = 300,
              orientation: m = "horizontal",
              dir: v,
              ...h
            } = e,
            [g, b] = (0, o.useState)(null),
            y = (0, c.s)(t, (e) => b(e)),
            w = (0, d.jH)(v),
            E = (0, o.useRef)(0),
            x = (0, o.useRef)(0),
            R = (0, o.useRef)(0),
            [C, S] = (0, o.useState)(!0),
            [A = "", P] = (0, s.i)({
              prop: i,
              onChange: (e) => {
                let t = p > 0;
                "" !== e
                  ? (window.clearTimeout(R.current), t && S(!1))
                  : (window.clearTimeout(R.current),
                    (R.current = window.setTimeout(() => S(!0), p))),
                  null == a || a(e);
              },
              defaultProp: l,
            }),
            _ = (0, o.useCallback)(() => {
              window.clearTimeout(x.current),
                (x.current = window.setTimeout(() => P(""), 150));
            }, [P]),
            k = (0, o.useCallback)(
              (e) => {
                window.clearTimeout(x.current), P(e);
              },
              [P]
            ),
            D = (0, o.useCallback)(
              (e) => {
                A === e
                  ? window.clearTimeout(x.current)
                  : (E.current = window.setTimeout(() => {
                      window.clearTimeout(x.current), P(e);
                    }, f));
              },
              [A, P, f]
            );
          return (
            (0, o.useEffect)(
              () => () => {
                window.clearTimeout(E.current),
                  window.clearTimeout(x.current),
                  window.clearTimeout(R.current);
              },
              []
            ),
            (0, o.createElement)(
              M,
              {
                scope: r,
                isRootMenu: !0,
                value: A,
                dir: w,
                orientation: m,
                rootNavigationMenu: g,
                onTriggerEnter: (e) => {
                  window.clearTimeout(E.current), C ? D(e) : k(e);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(E.current), _();
                },
                onContentEnter: () => window.clearTimeout(x.current),
                onContentLeave: _,
                onItemSelect: (e) => {
                  P((t) => (t === e ? "" : e));
                },
                onItemDismiss: () => P(""),
              },
              (0, o.createElement)(
                u.sG.nav,
                (0, n.A)(
                  { "aria-label": "Main", "data-orientation": m, dir: w },
                  h,
                  { ref: y }
                )
              )
            )
          );
        }),
        M = (e) => {
          let {
              scope: t,
              isRootMenu: r,
              rootNavigationMenu: n,
              dir: i,
              orientation: a,
              children: l,
              value: u,
              onItemSelect: s,
              onItemDismiss: c,
              onTriggerEnter: d,
              onTriggerLeave: f,
              onContentEnter: m,
              onContentLeave: v,
            } = e,
            [g, y] = (0, o.useState)(null),
            [w, x] = (0, o.useState)(new Map()),
            [R, C] = (0, o.useState)(null);
          return (0, o.createElement)(
            k,
            {
              scope: t,
              isRootMenu: r,
              rootNavigationMenu: n,
              value: u,
              previousValue: (0, h.Z)(u),
              baseId: (0, p.B)(),
              dir: i,
              orientation: a,
              viewport: g,
              onViewportChange: y,
              indicatorTrack: R,
              onIndicatorTrackChange: C,
              onTriggerEnter: (0, b.c)(d),
              onTriggerLeave: (0, b.c)(f),
              onContentEnter: (0, b.c)(m),
              onContentLeave: (0, b.c)(v),
              onItemSelect: (0, b.c)(s),
              onItemDismiss: (0, b.c)(c),
              onViewportContentChange: (0, o.useCallback)((e, t) => {
                x((r) => (r.set(e, t), new Map(r)));
              }, []),
              onViewportContentRemove: (0, o.useCallback)((e) => {
                x((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
              }, []),
            },
            (0, o.createElement)(
              E.Provider,
              { scope: t },
              (0, o.createElement)(N, { scope: t, items: w }, l)
            )
          );
        },
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, ...i } = e,
            a = D("NavigationMenuList", r),
            l = (0, o.createElement)(
              u.sG.ul,
              (0, n.A)({ "data-orientation": a.orientation }, i, { ref: t })
            );
          return (0, o.createElement)(
            u.sG.div,
            { style: { position: "relative" }, ref: a.onIndicatorTrackChange },
            (0, o.createElement)(
              E.Slot,
              { scope: r },
              a.isRootMenu ? (0, o.createElement)(ee, { asChild: !0 }, l) : l
            )
          );
        }),
        [I, j] = P("NavigationMenuItem"),
        F = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, value: i, ...a } = e,
            l = (0, p.B)(),
            s = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            f = (0, o.useRef)(() => {}),
            m = (0, o.useRef)(!1),
            v = (0, o.useCallback)((e = "start") => {
              if (s.current) {
                f.current();
                let t = en(s.current);
                t.length && eo("start" === e ? t : t.reverse());
              }
            }, []),
            h = (0, o.useCallback)(() => {
              if (s.current) {
                let e = en(s.current);
                e.length &&
                  (f.current = (function (e) {
                    return (
                      e.forEach((e) => {
                        (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                          e.setAttribute("tabindex", "-1");
                      }),
                      () => {
                        e.forEach((e) => {
                          let t = e.dataset.tabindex;
                          e.setAttribute("tabindex", t);
                        });
                      }
                    );
                  })(e));
              }
            }, []);
          return (0, o.createElement)(
            I,
            {
              scope: r,
              value: i || l || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: c,
              contentRef: s,
              focusProxyRef: d,
              wasEscapeCloseRef: m,
              onEntryKeyDown: v,
              onFocusProxyEnter: v,
              onRootContentClose: h,
              onContentFocusOutside: h,
            },
            (0, o.createElement)(u.sG.li, (0, n.A)({}, a, { ref: t }))
          );
        }),
        z = "NavigationMenuTrigger",
        G = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, disabled: i, ...a } = e,
            s = D(z, e.__scopeNavigationMenu),
            d = j(z, e.__scopeNavigationMenu),
            f = (0, o.useRef)(null),
            p = (0, c.s)(f, d.triggerRef, t),
            m = el(s.baseId, d.value),
            v = eu(s.baseId, d.value),
            h = (0, o.useRef)(!1),
            g = (0, o.useRef)(!1),
            b = d.value === s.value;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              E.ItemSlot,
              { scope: r, value: d.value },
              (0, o.createElement)(
                er,
                { asChild: !0 },
                (0, o.createElement)(
                  u.sG.button,
                  (0, n.A)(
                    {
                      id: m,
                      disabled: i,
                      "data-disabled": i ? "" : void 0,
                      "data-state": ea(b),
                      "aria-expanded": b,
                      "aria-controls": v,
                    },
                    a,
                    {
                      ref: p,
                      onPointerEnter: (0, l.m)(e.onPointerEnter, () => {
                        (g.current = !1), (d.wasEscapeCloseRef.current = !1);
                      }),
                      onPointerMove: (0, l.m)(
                        e.onPointerMove,
                        es(() => {
                          i ||
                            g.current ||
                            d.wasEscapeCloseRef.current ||
                            h.current ||
                            (s.onTriggerEnter(d.value), (h.current = !0));
                        })
                      ),
                      onPointerLeave: (0, l.m)(
                        e.onPointerLeave,
                        es(() => {
                          i || (s.onTriggerLeave(), (h.current = !1));
                        })
                      ),
                      onClick: (0, l.m)(e.onClick, () => {
                        s.onItemSelect(d.value), (g.current = b);
                      }),
                      onKeyDown: (0, l.m)(e.onKeyDown, (e) => {
                        let t = {
                          horizontal: "ArrowDown",
                          vertical:
                            "rtl" === s.dir ? "ArrowLeft" : "ArrowRight",
                        }[s.orientation];
                        b &&
                          e.key === t &&
                          (d.onEntryKeyDown(), e.preventDefault());
                      }),
                    }
                  )
                )
              )
            ),
            b &&
              (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(y.b, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: d.focusProxyRef,
                  onFocus: (e) => {
                    let t = d.contentRef.current,
                      r = e.relatedTarget,
                      n = r === f.current,
                      o = null == t ? void 0 : t.contains(r);
                    (n || !o) && d.onFocusProxyEnter(n ? "start" : "end");
                  },
                }),
                s.viewport && (0, o.createElement)("span", { "aria-owns": v })
              )
          );
        }),
        W = "navigationMenu.linkSelect",
        B = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, active: i, onSelect: a, ...s } = e;
          return (0, o.createElement)(
            er,
            { asChild: !0 },
            (0, o.createElement)(
              u.sG.a,
              (0, n.A)(
                {
                  "data-active": i ? "" : void 0,
                  "aria-current": i ? "page" : void 0,
                },
                s,
                {
                  ref: t,
                  onClick: (0, l.m)(
                    e.onClick,
                    (e) => {
                      let t = e.target,
                        r = new CustomEvent(W, { bubbles: !0, cancelable: !0 });
                      if (
                        (t.addEventListener(
                          W,
                          (e) => (null == a ? void 0 : a(e)),
                          { once: !0 }
                        ),
                        (0, u.hO)(t, r),
                        !r.defaultPrevented && !e.metaKey)
                      ) {
                        let e = new CustomEvent(q, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, u.hO)(t, e);
                      }
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        H = "NavigationMenuIndicator",
        U = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...a } = e,
            l = D(H, e.__scopeNavigationMenu),
            u = !!l.value;
          return l.indicatorTrack
            ? i.createPortal(
                (0, o.createElement)(
                  f.C,
                  { present: r || u },
                  (0, o.createElement)(K, (0, n.A)({}, a, { ref: t }))
                ),
                l.indicatorTrack
              )
            : null;
        }),
        K = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, ...i } = e,
            a = D(H, r),
            l = x(r),
            [s, c] = (0, o.useState)(null),
            [d, f] = (0, o.useState)(null),
            p = "horizontal" === a.orientation,
            m = !!a.value;
          (0, o.useEffect)(() => {
            var e;
            let t =
              null === (e = l().find((e) => e.value === a.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && c(t);
          }, [l, a.value]);
          let v = () => {
            s &&
              f({
                size: p ? s.offsetWidth : s.offsetHeight,
                offset: p ? s.offsetLeft : s.offsetTop,
              });
          };
          return (
            ei(s, v),
            ei(a.indicatorTrack, v),
            d
              ? (0, o.createElement)(
                  u.sG.div,
                  (0, n.A)(
                    {
                      "aria-hidden": !0,
                      "data-state": m ? "visible" : "hidden",
                      "data-orientation": a.orientation,
                    },
                    i,
                    {
                      ref: t,
                      style: {
                        position: "absolute",
                        ...(p
                          ? {
                              left: 0,
                              width: d.size + "px",
                              transform: `translateX(${d.offset}px)`,
                            }
                          : {
                              top: 0,
                              height: d.size + "px",
                              transform: `translateY(${d.offset}px)`,
                            }),
                        ...i.style,
                      },
                    }
                  )
                )
              : null
          );
        }),
        $ = "NavigationMenuContent",
        V = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...i } = e,
            a = D($, e.__scopeNavigationMenu),
            u = j($, e.__scopeNavigationMenu),
            s = (0, c.s)(u.contentRef, t),
            d = u.value === a.value,
            p = {
              value: u.value,
              triggerRef: u.triggerRef,
              focusProxyRef: u.focusProxyRef,
              wasEscapeCloseRef: u.wasEscapeCloseRef,
              onContentFocusOutside: u.onContentFocusOutside,
              onRootContentClose: u.onRootContentClose,
              ...i,
            };
          return a.viewport
            ? (0, o.createElement)(
                X,
                (0, n.A)({ forceMount: r }, p, { ref: s })
              )
            : (0, o.createElement)(
                f.C,
                { present: r || d },
                (0, o.createElement)(
                  Y,
                  (0, n.A)({ "data-state": ea(d) }, p, {
                    ref: s,
                    onPointerEnter: (0, l.m)(
                      e.onPointerEnter,
                      a.onContentEnter
                    ),
                    onPointerLeave: (0, l.m)(
                      e.onPointerLeave,
                      es(a.onContentLeave)
                    ),
                    style: {
                      pointerEvents: !d && a.isRootMenu ? "none" : void 0,
                      ...p.style,
                    },
                  })
                )
              );
        }),
        X = (0, o.forwardRef)((e, t) => {
          let { onViewportContentChange: r, onViewportContentRemove: n } = D(
            $,
            e.__scopeNavigationMenu
          );
          return (
            (0, g.N)(() => {
              r(e.value, { ref: t, ...e });
            }, [e, t, r]),
            (0, g.N)(() => () => n(e.value), [e.value, n]),
            null
          );
        }),
        q = "navigationMenu.rootContentDismiss",
        Y = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: r,
              value: i,
              triggerRef: a,
              focusProxyRef: u,
              wasEscapeCloseRef: s,
              onRootContentClose: d,
              onContentFocusOutside: f,
              ...p
            } = e,
            m = D($, r),
            h = (0, o.useRef)(null),
            g = (0, c.s)(h, t),
            b = el(m.baseId, i),
            y = eu(m.baseId, i),
            w = x(r),
            E = (0, o.useRef)(null),
            { onItemDismiss: R } = m;
          (0, o.useEffect)(() => {
            let e = h.current;
            if (m.isRootMenu && e) {
              let t = () => {
                var t;
                R(),
                  d(),
                  e.contains(document.activeElement) &&
                    (null === (t = a.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(q, t), () => e.removeEventListener(q, t)
              );
            }
          }, [m.isRootMenu, e.value, a, R, d]);
          let C = (0, o.useMemo)(() => {
            let e = w().map((e) => e.value);
            "rtl" === m.dir && e.reverse();
            let t = e.indexOf(m.value),
              r = e.indexOf(m.previousValue),
              n = i === m.value,
              o = r === e.indexOf(i);
            if (!n && !o) return E.current;
            let a = (() => {
              if (t !== r) {
                if (n && -1 !== r) return t > r ? "from-end" : "from-start";
                if (o && -1 !== t) return t > r ? "to-start" : "to-end";
              }
              return null;
            })();
            return (E.current = a), a;
          }, [m.previousValue, m.value, m.dir, w, i]);
          return (0, o.createElement)(
            ee,
            { asChild: !0 },
            (0, o.createElement)(
              v.qW,
              (0, n.A)(
                {
                  id: y,
                  "aria-labelledby": b,
                  "data-motion": C,
                  "data-orientation": m.orientation,
                },
                p,
                {
                  ref: g,
                  onDismiss: () => {
                    var e;
                    let t = new Event(q, { bubbles: !0, cancelable: !0 });
                    null === (e = h.current) ||
                      void 0 === e ||
                      e.dispatchEvent(t);
                  },
                  onFocusOutside: (0, l.m)(e.onFocusOutside, (e) => {
                    var t;
                    f();
                    let r = e.target;
                    null !== (t = m.rootNavigationMenu) &&
                      void 0 !== t &&
                      t.contains(r) &&
                      e.preventDefault();
                  }),
                  onPointerDownOutside: (0, l.m)(
                    e.onPointerDownOutside,
                    (e) => {
                      var t;
                      let r = e.target,
                        n = w().some((e) => {
                          var t;
                          return null === (t = e.ref.current) || void 0 === t
                            ? void 0
                            : t.contains(r);
                        }),
                        o =
                          m.isRootMenu &&
                          (null === (t = m.viewport) || void 0 === t
                            ? void 0
                            : t.contains(r));
                      (n || o || !m.isRootMenu) && e.preventDefault();
                    }
                  ),
                  onKeyDown: (0, l.m)(e.onKeyDown, (e) => {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if ("Tab" === e.key && !t) {
                      let t = en(e.currentTarget),
                        n = document.activeElement,
                        o = t.findIndex((e) => e === n);
                      if (
                        eo(
                          e.shiftKey
                            ? t.slice(0, o).reverse()
                            : t.slice(o + 1, t.length)
                        )
                      )
                        e.preventDefault();
                      else {
                        var r;
                        null === (r = u.current) || void 0 === r || r.focus();
                      }
                    }
                  }),
                  onEscapeKeyDown: (0, l.m)(e.onEscapeKeyDown, (e) => {
                    s.current = !0;
                  }),
                }
              )
            )
          );
        }),
        Z = "NavigationMenuViewport",
        J = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...i } = e,
            a = !!D(Z, e.__scopeNavigationMenu).value;
          return (0, o.createElement)(
            f.C,
            { present: r || a },
            (0, o.createElement)(Q, (0, n.A)({}, i, { ref: t }))
          );
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, children: i, ...a } = e,
            s = D(Z, r),
            d = (0, c.s)(t, s.onViewportChange),
            p = O($, e.__scopeNavigationMenu),
            [m, v] = (0, o.useState)(null),
            [h, g] = (0, o.useState)(null),
            b = m ? (null == m ? void 0 : m.width) + "px" : void 0,
            y = m ? (null == m ? void 0 : m.height) + "px" : void 0,
            w = !!s.value,
            E = w ? s.value : s.previousValue;
          return (
            ei(h, () => {
              h && v({ width: h.offsetWidth, height: h.offsetHeight });
            }),
            (0, o.createElement)(
              u.sG.div,
              (0, n.A)(
                { "data-state": ea(w), "data-orientation": s.orientation },
                a,
                {
                  ref: d,
                  style: {
                    pointerEvents: !w && s.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": b,
                    "--radix-navigation-menu-viewport-height": y,
                    ...a.style,
                  },
                  onPointerEnter: (0, l.m)(e.onPointerEnter, s.onContentEnter),
                  onPointerLeave: (0, l.m)(
                    e.onPointerLeave,
                    es(s.onContentLeave)
                  ),
                }
              ),
              Array.from(p.items).map(
                ([e, { ref: t, forceMount: r, ...i }]) => {
                  let a = E === e;
                  return (0, o.createElement)(
                    f.C,
                    { key: e, present: r || a },
                    (0, o.createElement)(
                      Y,
                      (0, n.A)({}, i, {
                        ref: (0, c.t)(t, (e) => {
                          a && e && g(e);
                        }),
                      })
                    )
                  );
                }
              )
            )
          );
        }),
        ee = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, ...i } = e,
            a = D("FocusGroup", r);
          return (0, o.createElement)(
            C.Provider,
            { scope: r },
            (0, o.createElement)(
              C.Slot,
              { scope: r },
              (0, o.createElement)(
                u.sG.div,
                (0, n.A)({ dir: a.dir }, i, { ref: t })
              )
            )
          );
        }),
        et = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        er = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: r, ...i } = e,
            a = S(r),
            s = D("FocusGroupItem", r);
          return (0, o.createElement)(
            C.ItemSlot,
            { scope: r },
            (0, o.createElement)(
              u.sG.button,
              (0, n.A)({}, i, {
                ref: t,
                onKeyDown: (0, l.m)(e.onKeyDown, (e) => {
                  if (["Home", "End", ...et].includes(e.key)) {
                    let t = a().map((e) => e.ref.current);
                    if (
                      ([
                        "rtl" === s.dir ? "ArrowRight" : "ArrowLeft",
                        "ArrowUp",
                        "End",
                      ].includes(e.key) && t.reverse(),
                      et.includes(e.key))
                    ) {
                      let r = t.indexOf(e.currentTarget);
                      t = t.slice(r + 1);
                    }
                    setTimeout(() => eo(t)), e.preventDefault();
                  }
                }),
              })
            )
          );
        });
      function en(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function eo(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function ei(e, t) {
        let r = (0, b.c)(t);
        (0, g.N)(() => {
          let t = 0;
          if (e) {
            let n = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
            });
            return (
              n.observe(e),
              () => {
                window.cancelAnimationFrame(t), n.unobserve(e);
              }
            );
          }
        }, [e, r]);
      }
      function ea(e) {
        return e ? "open" : "closed";
      }
      function el(e, t) {
        return `${e}-trigger-${t}`;
      }
      function eu(e, t) {
        return `${e}-content-${t}`;
      }
      function es(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let ec = T,
        ed = L,
        ef = F,
        ep = G,
        em = B,
        ev = U,
        eh = V,
        eg = J;
    },
    92833: (e, t, r) => {
      r.d(t, {
        Mz: () => U,
        i3: () => $,
        UC: () => K,
        bL: () => H,
        Bk: () => D,
      });
      var n = r(66439),
        o = r(7281),
        i = r(32660),
        a = r(65733),
        l = r(52116),
        u = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function s(e, t) {
        let r, n, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (n = r; 0 != n--; ) if (!s(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = o[n];
            if (("_owner" !== r || !e.$$typeof) && !s(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function c(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function d(e, t) {
        let r = c(e);
        return Math.round(t * r) / r;
      }
      function f(e) {
        let t = o.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      let p = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
            return r && {}.hasOwnProperty.call(r, "current")
              ? null != r.current
                ? (0, a.UE)({ element: r.current, padding: n }).fn(t)
                : {}
              : r
              ? (0, a.UE)({ element: r, padding: n }).fn(t)
              : {};
          },
        }),
        m = (e, t) => ({ ...(0, a.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, a.BN)(e), options: [e, t] }),
        h = (e, t) => ({ ...(0, a.ER)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, a.UU)(e), options: [e, t] }),
        b = (e, t) => ({ ...(0, a.Ej)(e), options: [e, t] }),
        y = (e, t) => ({ ...(0, a.jD)(e), options: [e, t] }),
        w = (e, t) => ({ ...p(e), options: [e, t] });
      var E = r(70360);
      let x = (0, o.forwardRef)((e, t) => {
        let { children: r, width: i = 10, height: a = 5, ...l } = e;
        return (0, o.createElement)(
          E.sG.svg,
          (0, n.A)({}, l, {
            ref: t,
            width: i,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? r
            : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var R = r(8343),
        C = r(80577),
        S = r(4915),
        A = r(56507),
        P = r(22375);
      let _ = "Popper",
        [k, D] = (0, C.A)(_),
        [N, O] = k(_),
        T = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: r, virtualRef: i, ...a } = e,
            l = O("PopperAnchor", r),
            u = (0, o.useRef)(null),
            s = (0, R.s)(t, u);
          return (
            (0, o.useEffect)(() => {
              l.onAnchorChange((null == i ? void 0 : i.current) || u.current);
            }),
            i
              ? null
              : (0, o.createElement)(E.sG.div, (0, n.A)({}, a, { ref: s }))
          );
        }),
        M = "PopperContent",
        [L, I] = k(M),
        j = (0, o.forwardRef)((e, t) => {
          var r, a, p, x, C, _, k, D;
          let {
              __scopePopper: N,
              side: T = "bottom",
              sideOffset: I = 0,
              align: j = "center",
              alignOffset: F = 0,
              arrowPadding: z = 0,
              avoidCollisions: H = !0,
              collisionBoundary: U = [],
              collisionPadding: K = 0,
              sticky: $ = "partial",
              hideWhenDetached: V = !1,
              updatePositionStrategy: X = "optimized",
              onPlaced: q,
              ...Y
            } = e,
            Z = O(M, N),
            [J, Q] = (0, o.useState)(null),
            ee = (0, R.s)(t, (e) => Q(e)),
            [et, er] = (0, o.useState)(null),
            en = (0, P.X)(et),
            eo =
              null !== (r = null == en ? void 0 : en.width) && void 0 !== r
                ? r
                : 0,
            ei =
              null !== (a = null == en ? void 0 : en.height) && void 0 !== a
                ? a
                : 0,
            ea =
              "number" == typeof K
                ? K
                : { top: 0, right: 0, bottom: 0, left: 0, ...K },
            el = Array.isArray(U) ? U : [U],
            eu = el.length > 0,
            es = { padding: ea, boundary: el.filter(G), altBoundary: eu },
            {
              refs: ec,
              floatingStyles: ed,
              placement: ef,
              isPositioned: ep,
              middlewareData: em,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: n = [],
                  platform: a,
                  elements: { reference: p, floating: m } = {},
                  transform: v = !0,
                  whileElementsMounted: h,
                  open: g,
                } = e,
                [b, y] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [w, E] = o.useState(n);
              s(w, n) || E(n);
              let [x, R] = o.useState(null),
                [C, S] = o.useState(null),
                A = o.useCallback((e) => {
                  e !== D.current && ((D.current = e), R(e));
                }, []),
                P = o.useCallback((e) => {
                  e !== N.current && ((N.current = e), S(e));
                }, []),
                _ = p || x,
                k = m || C,
                D = o.useRef(null),
                N = o.useRef(null),
                O = o.useRef(b),
                T = null != h,
                M = f(h),
                L = f(a),
                I = o.useCallback(() => {
                  if (!D.current || !N.current) return;
                  let e = { placement: t, strategy: r, middleware: w };
                  L.current && (e.platform = L.current),
                    (0, i.rD)(D.current, N.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      j.current &&
                        !s(O.current, t) &&
                        ((O.current = t),
                        l.flushSync(() => {
                          y(t);
                        }));
                    });
                }, [w, t, r, L]);
              u(() => {
                !1 === g &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  y((e) => ({ ...e, isPositioned: !1 })));
              }, [g]);
              let j = o.useRef(!1);
              u(
                () => (
                  (j.current = !0),
                  () => {
                    j.current = !1;
                  }
                ),
                []
              ),
                u(() => {
                  if ((_ && (D.current = _), k && (N.current = k), _ && k)) {
                    if (M.current) return M.current(_, k, I);
                    I();
                  }
                }, [_, k, I, M, T]);
              let F = o.useMemo(
                  () => ({
                    reference: D,
                    floating: N,
                    setReference: A,
                    setFloating: P,
                  }),
                  [A, P]
                ),
                z = o.useMemo(() => ({ reference: _, floating: k }), [_, k]),
                G = o.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!z.floating) return e;
                  let t = d(z.floating, b.x),
                    n = d(z.floating, b.y);
                  return v
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(c(z.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, v, z.floating, b.x, b.y]);
              return o.useMemo(
                () => ({
                  ...b,
                  update: I,
                  refs: F,
                  elements: z,
                  floatingStyles: G,
                }),
                [b, I, F, z, G]
              );
            })({
              strategy: "fixed",
              placement: T + ("center" !== j ? "-" + j : ""),
              whileElementsMounted: (...e) =>
                (0, i.ll)(...e, { animationFrame: "always" === X }),
              elements: { reference: Z.anchor },
              middleware: [
                m({ mainAxis: I + ei, alignmentAxis: F }),
                H &&
                  v({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === $ ? h() : void 0,
                    ...es,
                  }),
                H && g({ ...es }),
                b({
                  ...es,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: r,
                    availableHeight: n,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${r}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${n}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                et && w({ element: et, padding: z }),
                W({ arrowWidth: eo, arrowHeight: ei }),
                V && y({ strategy: "referenceHidden", ...es }),
              ],
            }),
            [ev, eh] = B(ef),
            eg = (0, S.c)(q);
          (0, A.N)(() => {
            ep && (null == eg || eg());
          }, [ep, eg]);
          let eb = null === (p = em.arrow) || void 0 === p ? void 0 : p.x,
            ey = null === (x = em.arrow) || void 0 === x ? void 0 : x.y,
            ew =
              (null === (C = em.arrow) || void 0 === C
                ? void 0
                : C.centerOffset) !== 0,
            [eE, ex] = (0, o.useState)();
          return (
            (0, A.N)(() => {
              J && ex(window.getComputedStyle(J).zIndex);
            }, [J]),
            (0, o.createElement)(
              "div",
              {
                ref: ec.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...ed,
                  transform: ep ? ed.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eE,
                  "--radix-popper-transform-origin": [
                    null === (_ = em.transformOrigin) || void 0 === _
                      ? void 0
                      : _.x,
                    null === (k = em.transformOrigin) || void 0 === k
                      ? void 0
                      : k.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                L,
                {
                  scope: N,
                  placedSide: ev,
                  onArrowChange: er,
                  arrowX: eb,
                  arrowY: ey,
                  shouldHideArrow: ew,
                },
                (0, o.createElement)(
                  E.sG.div,
                  (0, n.A)({ "data-side": ev, "data-align": eh }, Y, {
                    ref: ee,
                    style: {
                      ...Y.style,
                      animation: ep ? void 0 : "none",
                      opacity:
                        null !== (D = em.hide) &&
                        void 0 !== D &&
                        D.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        F = { top: "bottom", right: "left", bottom: "top", left: "right" },
        z = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: r, ...i } = e,
            a = I("PopperArrow", r),
            l = F[a.placedSide];
          return (0,
          o.createElement)("span", { ref: a.onArrowChange, style: { position: "absolute", left: a.arrowX, top: a.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[a.placedSide], visibility: a.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(x, (0, n.A)({}, i, { ref: t, style: { ...i.style, display: "block" } })));
        });
      function G(e) {
        return null !== e;
      }
      let W = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, o, i, a;
          let { placement: l, rects: u, middlewareData: s } = t,
            c =
              (null === (r = s.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, m] = B(l),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            h =
              (null !==
                (n = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== n
                ? n
                : 0) +
              d / 2,
            g =
              (null !==
                (i = null === (a = s.arrow) || void 0 === a ? void 0 : a.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            b = "",
            y = "";
          return (
            "bottom" === p
              ? ((b = c ? v : `${h}px`), (y = `${-f}px`))
              : "top" === p
              ? ((b = c ? v : `${h}px`), (y = `${u.floating.height + f}px`))
              : "right" === p
              ? ((b = `${-f}px`), (y = c ? v : `${g}px`))
              : "left" === p &&
                ((b = `${u.floating.width + f}px`), (y = c ? v : `${g}px`)),
            { data: { x: b, y: y } }
          );
        },
      });
      function B(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      let H = (e) => {
          let { __scopePopper: t, children: r } = e,
            [n, i] = (0, o.useState)(null);
          return (0, o.createElement)(
            N,
            { scope: t, anchor: n, onAnchorChange: i },
            r
          );
        },
        U = T,
        K = j,
        $ = z;
    },
    81925: (e, t, r) => {
      r.d(t, {
        Mz: () => G,
        i3: () => B,
        UC: () => W,
        bL: () => z,
        Bk: () => R,
      });
      var n = r(7281),
        o = r(65733),
        i = r(32660),
        a = r(52116);
      let l = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
          if (r && {}.hasOwnProperty.call(r, "current")) {
            if (null != r.current)
              return (0, o.UE)({ element: r.current, padding: n }).fn(t);
          } else if (r) return (0, o.UE)({ element: r, padding: n }).fn(t);
          return {};
        },
      });
      var u = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function s(e, t) {
        let r, n, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--; ) if (!s(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = o[n];
            if (("_owner" !== r || !e.$$typeof) && !s(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function c(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function d(e, t) {
        let r = c(e);
        return Math.round(t * r) / r;
      }
      function f(e) {
        let t = n.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      var p = r(27795),
        m = r(32469),
        v = n.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...i } = e;
          return (0, m.jsx)(p.sG.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, m.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      v.displayName = "Arrow";
      var h = r(12435),
        g = r(68117),
        b = r(30999),
        y = r(49543),
        w = r(12411),
        E = "Popper",
        [x, R] = (0, g.A)(E),
        [C, S] = x(E),
        A = (e) => {
          let { __scopePopper: t, children: r } = e,
            [o, i] = n.useState(null);
          return (0, m.jsx)(C, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: r,
          });
        };
      A.displayName = E;
      var P = "PopperAnchor",
        _ = n.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: o, ...i } = e,
            a = S(P, r),
            l = n.useRef(null),
            u = (0, h.s)(t, l);
          return (
            n.useEffect(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || l.current);
            }),
            o ? null : (0, m.jsx)(p.sG.div, { ...i, ref: u })
          );
        });
      _.displayName = P;
      var k = "PopperContent",
        [D, N] = x(k),
        O = n.forwardRef((e, t) => {
          var r, v, g, E, x, R, C, A;
          let {
              __scopePopper: P,
              side: _ = "bottom",
              sideOffset: N = 0,
              align: O = "center",
              alignOffset: T = 0,
              arrowPadding: M = 0,
              avoidCollisions: L = !0,
              collisionBoundary: z = [],
              collisionPadding: G = 0,
              sticky: W = "partial",
              hideWhenDetached: B = !1,
              updatePositionStrategy: H = "optimized",
              onPlaced: U,
              ...K
            } = e,
            $ = S(k, P),
            [V, X] = n.useState(null),
            q = (0, h.s)(t, (e) => X(e)),
            [Y, Z] = n.useState(null),
            J = (0, w.X)(Y),
            Q =
              null !== (C = null == J ? void 0 : J.width) && void 0 !== C
                ? C
                : 0,
            ee =
              null !== (A = null == J ? void 0 : J.height) && void 0 !== A
                ? A
                : 0,
            et =
              "number" == typeof G
                ? G
                : { top: 0, right: 0, bottom: 0, left: 0, ...G },
            er = Array.isArray(z) ? z : [z],
            en = er.length > 0,
            eo = { padding: et, boundary: er.filter(I), altBoundary: en },
            {
              refs: ei,
              floatingStyles: ea,
              placement: el,
              isPositioned: eu,
              middlewareData: es,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: o = [],
                  platform: l,
                  elements: { reference: p, floating: m } = {},
                  transform: v = !0,
                  whileElementsMounted: h,
                  open: g,
                } = e,
                [b, y] = n.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [w, E] = n.useState(o);
              s(w, o) || E(o);
              let [x, R] = n.useState(null),
                [C, S] = n.useState(null),
                A = n.useCallback(
                  (e) => {
                    e != D.current && ((D.current = e), R(e));
                  },
                  [R]
                ),
                P = n.useCallback(
                  (e) => {
                    e !== N.current && ((N.current = e), S(e));
                  },
                  [S]
                ),
                _ = p || x,
                k = m || C,
                D = n.useRef(null),
                N = n.useRef(null),
                O = n.useRef(b),
                T = f(h),
                M = f(l),
                L = n.useCallback(() => {
                  if (!D.current || !N.current) return;
                  let e = { placement: t, strategy: r, middleware: w };
                  M.current && (e.platform = M.current),
                    (0, i.rD)(D.current, N.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      I.current &&
                        !s(O.current, t) &&
                        ((O.current = t),
                        a.flushSync(() => {
                          y(t);
                        }));
                    });
                }, [w, t, r, M]);
              u(() => {
                !1 === g &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  y((e) => ({ ...e, isPositioned: !1 })));
              }, [g]);
              let I = n.useRef(!1);
              u(
                () => (
                  (I.current = !0),
                  () => {
                    I.current = !1;
                  }
                ),
                []
              ),
                u(() => {
                  if ((_ && (D.current = _), k && (N.current = k), _ && k)) {
                    if (T.current) return T.current(_, k, L);
                    L();
                  }
                }, [_, k, L, T]);
              let j = n.useMemo(
                  () => ({
                    reference: D,
                    floating: N,
                    setReference: A,
                    setFloating: P,
                  }),
                  [A, P]
                ),
                F = n.useMemo(() => ({ reference: _, floating: k }), [_, k]),
                z = n.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!F.floating) return e;
                  let t = d(F.floating, b.x),
                    n = d(F.floating, b.y);
                  return v
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(c(F.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, v, F.floating, b.x, b.y]);
              return n.useMemo(
                () => ({
                  ...b,
                  update: L,
                  refs: j,
                  elements: F,
                  floatingStyles: z,
                }),
                [b, L, j, F, z]
              );
            })({
              strategy: "fixed",
              placement: _ + ("center" !== O ? "-" + O : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (0, i.ll)(...t, { animationFrame: "always" === H });
              },
              elements: { reference: $.anchor },
              middleware: [
                (0, o.cY)({ mainAxis: N + ee, alignmentAxis: T }),
                L &&
                  (0, o.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === W ? (0, o.ER)() : void 0,
                    ...eo,
                  }),
                L && (0, o.UU)({ ...eo }),
                (0, o.Ej)({
                  ...eo,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: r,
                        availableWidth: n,
                        availableHeight: o,
                      } = e,
                      { width: i, height: a } = r.reference,
                      l = t.floating.style;
                    l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(n, "px")
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(a, "px")
                      );
                  },
                }),
                Y && l({ element: Y, padding: M }),
                j({ arrowWidth: Q, arrowHeight: ee }),
                B && (0, o.jD)({ strategy: "referenceHidden", ...eo }),
              ],
            }),
            [ec, ed] = F(el),
            ef = (0, b.c)(U);
          (0, y.N)(() => {
            eu && (null == ef || ef());
          }, [eu, ef]);
          let ep = null === (r = es.arrow) || void 0 === r ? void 0 : r.x,
            em = null === (v = es.arrow) || void 0 === v ? void 0 : v.y,
            ev =
              (null === (g = es.arrow) || void 0 === g
                ? void 0
                : g.centerOffset) !== 0,
            [eh, eg] = n.useState();
          return (
            (0, y.N)(() => {
              V && eg(window.getComputedStyle(V).zIndex);
            }, [V]),
            (0, m.jsx)("div", {
              ref: ei.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...ea,
                transform: eu ? ea.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: eh,
                "--radix-popper-transform-origin": [
                  null === (E = es.transformOrigin) || void 0 === E
                    ? void 0
                    : E.x,
                  null === (x = es.transformOrigin) || void 0 === x
                    ? void 0
                    : x.y,
                ].join(" "),
                ...((null === (R = es.hide) || void 0 === R
                  ? void 0
                  : R.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, m.jsx)(D, {
                scope: P,
                placedSide: ec,
                onArrowChange: Z,
                arrowX: ep,
                arrowY: em,
                shouldHideArrow: ev,
                children: (0, m.jsx)(p.sG.div, {
                  "data-side": ec,
                  "data-align": ed,
                  ...K,
                  ref: q,
                  style: { ...K.style, animation: eu ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      O.displayName = k;
      var T = "PopperArrow",
        M = { top: "bottom", right: "left", bottom: "top", left: "right" },
        L = n.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = N(T, r),
            i = M[o.placedSide];
          return (0,
          m.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, m.jsx)(v, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
        });
      function I(e) {
        return null !== e;
      }
      L.displayName = T;
      var j = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, o, i, a;
          let { placement: l, rects: u, middlewareData: s } = t,
            c =
              (null === (r = s.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, m] = F(l),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            h =
              (null !==
                (i = null === (n = s.arrow) || void 0 === n ? void 0 : n.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (a = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            b = "",
            y = "";
          return (
            "bottom" === p
              ? ((b = c ? v : "".concat(h, "px")), (y = "".concat(-f, "px")))
              : "top" === p
              ? ((b = c ? v : "".concat(h, "px")),
                (y = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((b = "".concat(-f, "px")), (y = c ? v : "".concat(g, "px")))
              : "left" === p &&
                ((b = "".concat(u.floating.width + f, "px")),
                (y = c ? v : "".concat(g, "px"))),
            { data: { x: b, y } }
          );
        },
      });
      function F(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var z = A,
        G = _,
        W = O,
        B = L;
    },
    45104: (e, t, r) => {
      r.d(t, { Z: () => l });
      var n = r(66439),
        o = r(7281),
        i = r(52116),
        a = r(70360);
      let l = (0, o.forwardRef)((e, t) => {
        var r;
        let {
          container: l = null == globalThis
            ? void 0
            : null === (r = globalThis.document) || void 0 === r
            ? void 0
            : r.body,
          ...u
        } = e;
        return l
          ? i.createPortal(
              (0, o.createElement)(a.sG.div, (0, n.A)({}, u, { ref: t })),
              l
            )
          : null;
      });
    },
    45037: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(7281),
        o = r(52116),
        i = r(27795),
        a = r(49543),
        l = r(32469),
        u = n.forwardRef((e, t) => {
          var r, u;
          let { container: s, ...c } = e,
            [d, f] = n.useState(!1);
          (0, a.N)(() => f(!0), []);
          let p =
            s ||
            (d &&
              (null === (u = globalThis) || void 0 === u
                ? void 0
                : null === (r = u.document) || void 0 === r
                ? void 0
                : r.body));
          return p
            ? o.createPortal((0, l.jsx)(i.sG.div, { ...c, ref: t }), p)
            : null;
        });
      u.displayName = "Portal";
    },
    99102: (e, t, r) => {
      r.d(t, { C: () => l });
      var n = r(7281),
        o = r(52116),
        i = r(8343),
        a = r(56507);
      let l = (e) => {
        let { present: t, children: r } = e,
          l = (function (e) {
            var t, r;
            let [i, l] = (0, n.useState)(),
              s = (0, n.useRef)({}),
              c = (0, n.useRef)(e),
              d = (0, n.useRef)("none"),
              [f, p] =
                ((t = e ? "mounted" : "unmounted"),
                (r = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, n.useReducer)((e, t) => {
                  let n = r[e][t];
                  return null != n ? n : e;
                }, t));
            return (
              (0, n.useEffect)(() => {
                let e = u(s.current);
                d.current = "mounted" === f ? e : "none";
              }, [f]),
              (0, a.N)(() => {
                let t = s.current,
                  r = c.current;
                if (r !== e) {
                  let n = d.current,
                    o = u(t);
                  e
                    ? p("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? p("UNMOUNT")
                    : r && n !== o
                    ? p("ANIMATION_OUT")
                    : p("UNMOUNT"),
                    (c.current = e);
                }
              }, [e, p]),
              (0, a.N)(() => {
                if (i) {
                  let e = (e) => {
                      let t = u(s.current).includes(e.animationName);
                      e.target === i &&
                        t &&
                        (0, o.flushSync)(() => p("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === i && (d.current = u(s.current));
                    };
                  return (
                    i.addEventListener("animationstart", t),
                    i.addEventListener("animationcancel", e),
                    i.addEventListener("animationend", e),
                    () => {
                      i.removeEventListener("animationstart", t),
                        i.removeEventListener("animationcancel", e),
                        i.removeEventListener("animationend", e);
                    }
                  );
                }
                p("ANIMATION_END");
              }, [i, p]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: (0, n.useCallback)((e) => {
                  e && (s.current = getComputedStyle(e)), l(e);
                }, []),
              }
            );
          })(t),
          s =
            "function" == typeof r
              ? r({ present: l.isPresent })
              : n.Children.only(r),
          c = (0, i.s)(l.ref, s.ref);
        return "function" == typeof r || l.isPresent
          ? (0, n.cloneElement)(s, { ref: c })
          : null;
      };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    26715: (e, t, r) => {
      r.d(t, { C: () => l });
      var n = r(7281),
        o = r(52116),
        i = r(12435),
        a = r(49543),
        l = (e) => {
          let { present: t, children: r } = e,
            l = (function (e) {
              var t, r;
              let [i, l] = n.useState(),
                s = n.useRef({}),
                c = n.useRef(e),
                d = n.useRef("none"),
                [f, p] =
                  ((t = e ? "mounted" : "unmounted"),
                  (r = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  n.useReducer((e, t) => {
                    let n = r[e][t];
                    return null != n ? n : e;
                  }, t));
              return (
                n.useEffect(() => {
                  let e = u(s.current);
                  d.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, a.N)(() => {
                  let t = s.current,
                    r = c.current;
                  if (r !== e) {
                    let n = d.current,
                      o = u(t);
                    e
                      ? p("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? p("UNMOUNT")
                      : r && n !== o
                      ? p("ANIMATION_OUT")
                      : p("UNMOUNT"),
                      (c.current = e);
                  }
                }, [e, p]),
                (0, a.N)(() => {
                  if (i) {
                    let e = (e) => {
                        let t = u(s.current).includes(e.animationName);
                        e.target === i &&
                          t &&
                          o.flushSync(() => p("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === i && (d.current = u(s.current));
                      };
                    return (
                      i.addEventListener("animationstart", t),
                      i.addEventListener("animationcancel", e),
                      i.addEventListener("animationend", e),
                      () => {
                        i.removeEventListener("animationstart", t),
                          i.removeEventListener("animationcancel", e),
                          i.removeEventListener("animationend", e);
                      }
                    );
                  }
                  p("ANIMATION_END");
                }, [i, p]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: n.useCallback((e) => {
                    e && (s.current = getComputedStyle(e)), l(e);
                  }, []),
                }
              );
            })(t),
            s =
              "function" == typeof r
                ? r({ present: l.isPresent })
                : n.Children.only(r),
            c = (0, i.s)(
              l.ref,
              (function (e) {
                var t, r;
                let n =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  o = n && "isReactWarning" in n && n.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                      (n =
                        null ===
                          (r = Object.getOwnPropertyDescriptor(e, "ref")) ||
                        void 0 === r
                          ? void 0
                          : r.get) &&
                      "isReactWarning" in n &&
                      n.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(s)
            );
          return "function" == typeof r || l.isPresent
            ? n.cloneElement(s, { ref: c })
            : null;
        };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    70360: (e, t, r) => {
      r.d(t, { hO: () => u, sG: () => l });
      var n = r(36295),
        o = r(7281),
        i = r(52116),
        a = r(89790);
      let l = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, o.forwardRef)((e, r) => {
          let { asChild: i, ...l } = e,
            u = i ? a.DX : t;
          return (
            (0, o.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, o.createElement)(u, (0, n.A)({}, l, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function u(e, t) {
        e && (0, i.flushSync)(() => e.dispatchEvent(t));
      }
    },
    27795: (e, t, r) => {
      r.d(t, { hO: () => u, sG: () => l });
      var n = r(7281),
        o = r(52116),
        i = r(85239),
        a = r(32469),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              l = n ? i.DX : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(l, { ...o, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    69206: (e, t, r) => {
      r.d(t, { C1: () => E, bL: () => w });
      var n = r(7281),
        o = r(68117),
        i = r(27795),
        a = r(32469),
        l = "Progress",
        [u, s] = (0, o.A)(l),
        [c, d] = u(l),
        f = n.forwardRef((e, t) => {
          var r, n, o, l;
          let {
            __scopeProgress: u,
            value: s = null,
            max: d,
            getValueLabel: f = v,
            ...p
          } = e;
          (d || 0 === d) &&
            !b(d) &&
            console.error(
              ((r = "".concat(d)),
              (n = "Progress"),
              "Invalid prop `max` of value `"
                .concat(r, "` supplied to `")
                .concat(
                  n,
                  "`. Only numbers greater than 0 are valid max values. Defaulting to `"
                )
                .concat(100, "`."))
            );
          let m = b(d) ? d : 100;
          null === s ||
            y(s, m) ||
            console.error(
              ((o = "".concat(s)),
              (l = "Progress"),
              "Invalid prop `value` of value `"
                .concat(o, "` supplied to `")
                .concat(
                  l,
                  "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or "
                )
                .concat(
                  100,
                  " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`."
                ))
            );
          let w = y(s, m) ? s : null,
            E = g(w) ? f(w, m) : void 0;
          return (0, a.jsx)(c, {
            scope: u,
            value: w,
            max: m,
            children: (0, a.jsx)(i.sG.div, {
              "aria-valuemax": m,
              "aria-valuemin": 0,
              "aria-valuenow": g(w) ? w : void 0,
              "aria-valuetext": E,
              role: "progressbar",
              "data-state": h(w, m),
              "data-value": null != w ? w : void 0,
              "data-max": m,
              ...p,
              ref: t,
            }),
          });
        });
      f.displayName = l;
      var p = "ProgressIndicator",
        m = n.forwardRef((e, t) => {
          var r;
          let { __scopeProgress: n, ...o } = e,
            l = d(p, n);
          return (0, a.jsx)(i.sG.div, {
            "data-state": h(l.value, l.max),
            "data-value": null !== (r = l.value) && void 0 !== r ? r : void 0,
            "data-max": l.max,
            ...o,
            ref: t,
          });
        });
      function v(e, t) {
        return "".concat(Math.round((e / t) * 100), "%");
      }
      function h(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function g(e) {
        return "number" == typeof e;
      }
      function b(e) {
        return g(e) && !isNaN(e) && e > 0;
      }
      function y(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0;
      }
      m.displayName = p;
      var w = f,
        E = m;
    },
    17833: (e, t, r) => {
      r.d(t, { C1: () => j, bL: () => L, q7: () => I });
      var n = r(13752),
        o = r(7281),
        i = r(45039),
        a = r(8343),
        l = r(80577),
        u = r(70360),
        s = r(94884),
        c = r(84155),
        d = r(49633),
        f = r(22375),
        p = r(19727),
        m = r(99102);
      let v = "Radio",
        [h, g] = (0, l.A)(v),
        [b, y] = h(v),
        w = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRadio: r,
              name: l,
              checked: s = !1,
              required: c,
              disabled: d,
              value: f = "on",
              onCheck: p,
              ...m
            } = e,
            [v, h] = (0, o.useState)(null),
            g = (0, a.s)(t, (e) => h(e)),
            y = (0, o.useRef)(!1),
            w = !v || !!v.closest("form");
          return (0, o.createElement)(
            b,
            { scope: r, checked: s, disabled: d },
            (0, o.createElement)(
              u.sG.button,
              (0, n.A)(
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": s,
                  "data-state": R(s),
                  "data-disabled": d ? "" : void 0,
                  disabled: d,
                  value: f,
                },
                m,
                {
                  ref: g,
                  onClick: (0, i.m)(e.onClick, (e) => {
                    s || null == p || p(),
                      w &&
                        ((y.current = e.isPropagationStopped()),
                        y.current || e.stopPropagation());
                  }),
                }
              )
            ),
            w &&
              (0, o.createElement)(x, {
                control: v,
                bubbles: !y.current,
                name: l,
                value: f,
                checked: s,
                required: c,
                disabled: d,
                style: { transform: "translateX(-100%)" },
              })
          );
        }),
        E = (0, o.forwardRef)((e, t) => {
          let { __scopeRadio: r, forceMount: i, ...a } = e,
            l = y("RadioIndicator", r);
          return (0, o.createElement)(
            m.C,
            { present: i || l.checked },
            (0, o.createElement)(
              u.sG.span,
              (0, n.A)(
                {
                  "data-state": R(l.checked),
                  "data-disabled": l.disabled ? "" : void 0,
                },
                a,
                { ref: t }
              )
            )
          );
        }),
        x = (e) => {
          let { control: t, checked: r, bubbles: i = !0, ...a } = e,
            l = (0, o.useRef)(null),
            u = (0, p.Z)(r),
            s = (0, f.X)(t);
          return (
            (0, o.useEffect)(() => {
              let e = l.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "checked"
                ).set;
              if (u !== r && t) {
                let n = new Event("click", { bubbles: i });
                t.call(e, r), e.dispatchEvent(n);
              }
            }, [u, r, i]),
            (0, o.createElement)(
              "input",
              (0, n.A)(
                { type: "radio", "aria-hidden": !0, defaultChecked: r },
                a,
                {
                  tabIndex: -1,
                  ref: l,
                  style: {
                    ...e.style,
                    ...s,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          );
        };
      function R(e) {
        return e ? "checked" : "unchecked";
      }
      let C = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        S = "RadioGroup",
        [A, P] = (0, l.A)(S, [s.RG, g]),
        _ = (0, s.RG)(),
        k = g(),
        [D, N] = A(S),
        O = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRadioGroup: r,
              name: i,
              defaultValue: a,
              value: l,
              required: f = !1,
              disabled: p = !1,
              orientation: m,
              dir: v,
              loop: h = !0,
              onValueChange: g,
              ...b
            } = e,
            y = _(r),
            w = (0, d.jH)(v),
            [E, x] = (0, c.i)({ prop: l, defaultProp: a, onChange: g });
          return (0, o.createElement)(
            D,
            {
              scope: r,
              name: i,
              required: f,
              disabled: p,
              value: E,
              onValueChange: x,
            },
            (0, o.createElement)(
              s.bL,
              (0, n.A)({ asChild: !0 }, y, { orientation: m, dir: w, loop: h }),
              (0, o.createElement)(
                u.sG.div,
                (0, n.A)(
                  {
                    role: "radiogroup",
                    "aria-required": f,
                    "aria-orientation": m,
                    "data-disabled": p ? "" : void 0,
                    dir: w,
                  },
                  b,
                  { ref: t }
                )
              )
            )
          );
        }),
        T = (0, o.forwardRef)((e, t) => {
          let { __scopeRadioGroup: r, disabled: l, ...u } = e,
            c = N("RadioGroupItem", r),
            d = c.disabled || l,
            f = _(r),
            p = k(r),
            m = (0, o.useRef)(null),
            v = (0, a.s)(t, m),
            h = c.value === u.value,
            g = (0, o.useRef)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = (e) => {
                  C.includes(e.key) && (g.current = !0);
                },
                t = () => (g.current = !1);
              return (
                document.addEventListener("keydown", e),
                document.addEventListener("keyup", t),
                () => {
                  document.removeEventListener("keydown", e),
                    document.removeEventListener("keyup", t);
                }
              );
            }, []),
            (0, o.createElement)(
              s.q7,
              (0, n.A)({ asChild: !0 }, f, { focusable: !d, active: h }),
              (0, o.createElement)(
                w,
                (0, n.A)(
                  { disabled: d, required: c.required, checked: h },
                  p,
                  u,
                  {
                    name: c.name,
                    ref: v,
                    onCheck: () => c.onValueChange(u.value),
                    onKeyDown: (0, i.m)((e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onFocus: (0, i.m)(u.onFocus, () => {
                      var e;
                      g.current &&
                        (null === (e = m.current) || void 0 === e || e.click());
                    }),
                  }
                )
              )
            )
          );
        }),
        M = (0, o.forwardRef)((e, t) => {
          let { __scopeRadioGroup: r, ...i } = e,
            a = k(r);
          return (0, o.createElement)(E, (0, n.A)({}, a, i, { ref: t }));
        }),
        L = O,
        I = T,
        j = M;
    },
    94884: (e, t, r) => {
      r.d(t, { RG: () => E, bL: () => k, q7: () => D });
      var n = r(36295),
        o = r(7281),
        i = r(45039),
        a = r(7978),
        l = r(8343),
        u = r(80577),
        s = r(54951),
        c = r(70360),
        d = r(4915),
        f = r(84155),
        p = r(49633);
      let m = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        h = "RovingFocusGroup",
        [g, b, y] = (0, a.N)(h),
        [w, E] = (0, u.A)(h, [y]),
        [x, R] = w(h),
        C = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            g.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(
              g.Slot,
              { scope: e.__scopeRovingFocusGroup },
              (0, o.createElement)(S, (0, n.A)({}, e, { ref: t }))
            )
          )
        ),
        S = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: a,
              loop: u = !1,
              dir: s,
              currentTabStopId: h,
              defaultCurrentTabStopId: g,
              onCurrentTabStopIdChange: y,
              onEntryFocus: w,
              ...E
            } = e,
            R = (0, o.useRef)(null),
            C = (0, l.s)(t, R),
            S = (0, p.jH)(s),
            [A = null, P] = (0, f.i)({ prop: h, defaultProp: g, onChange: y }),
            [k, D] = (0, o.useState)(!1),
            N = (0, d.c)(w),
            O = b(r),
            T = (0, o.useRef)(!1),
            [M, L] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              let e = R.current;
              if (e)
                return (
                  e.addEventListener(m, N), () => e.removeEventListener(m, N)
                );
            }, [N]),
            (0, o.createElement)(
              x,
              {
                scope: r,
                orientation: a,
                dir: S,
                loop: u,
                currentTabStopId: A,
                onItemFocus: (0, o.useCallback)((e) => P(e), [P]),
                onItemShiftTab: (0, o.useCallback)(() => D(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(
                  () => L((e) => e + 1),
                  []
                ),
                onFocusableItemRemove: (0, o.useCallback)(
                  () => L((e) => e - 1),
                  []
                ),
              },
              (0, o.createElement)(
                c.sG.div,
                (0, n.A)(
                  { tabIndex: k || 0 === M ? -1 : 0, "data-orientation": a },
                  E,
                  {
                    ref: C,
                    style: { outline: "none", ...e.style },
                    onMouseDown: (0, i.m)(e.onMouseDown, () => {
                      T.current = !0;
                    }),
                    onFocus: (0, i.m)(e.onFocus, (e) => {
                      let t = !T.current;
                      if (e.target === e.currentTarget && t && !k) {
                        let t = new CustomEvent(m, v);
                        if (
                          (e.currentTarget.dispatchEvent(t),
                          !t.defaultPrevented)
                        ) {
                          let e = O().filter((e) => e.focusable);
                          _(
                            [
                              e.find((e) => e.active),
                              e.find((e) => e.id === A),
                              ...e,
                            ]
                              .filter(Boolean)
                              .map((e) => e.ref.current)
                          );
                        }
                      }
                      T.current = !1;
                    }),
                    onBlur: (0, i.m)(e.onBlur, () => D(!1)),
                  }
                )
              )
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: a = !0,
              active: l = !1,
              tabStopId: u,
              ...d
            } = e,
            f = (0, s.B)(),
            p = u || f,
            m = R("RovingFocusGroupItem", r),
            v = m.currentTabStopId === p,
            h = b(r),
            { onFocusableItemAdd: y, onFocusableItemRemove: w } = m;
          return (
            (0, o.useEffect)(() => {
              if (a) return y(), () => w();
            }, [a, y, w]),
            (0, o.createElement)(
              g.ItemSlot,
              { scope: r, id: p, focusable: a, active: l },
              (0, o.createElement)(
                c.sG.span,
                (0, n.A)(
                  { tabIndex: v ? 0 : -1, "data-orientation": m.orientation },
                  d,
                  {
                    ref: t,
                    onMouseDown: (0, i.m)(e.onMouseDown, (e) => {
                      a ? m.onItemFocus(p) : e.preventDefault();
                    }),
                    onFocus: (0, i.m)(e.onFocus, () => m.onItemFocus(p)),
                    onKeyDown: (0, i.m)(e.onKeyDown, (e) => {
                      if ("Tab" === e.key && e.shiftKey) {
                        m.onItemShiftTab();
                        return;
                      }
                      if (e.target !== e.currentTarget) return;
                      let t = (function (e, t, r) {
                        var n;
                        let o =
                          ((n = e.key),
                          "rtl" !== r
                            ? n
                            : "ArrowLeft" === n
                            ? "ArrowRight"
                            : "ArrowRight" === n
                            ? "ArrowLeft"
                            : n);
                        if (
                          !(
                            "vertical" === t &&
                            ["ArrowLeft", "ArrowRight"].includes(o)
                          ) &&
                          !(
                            "horizontal" === t &&
                            ["ArrowUp", "ArrowDown"].includes(o)
                          )
                        )
                          return P[o];
                      })(e, m.orientation, m.dir);
                      if (void 0 !== t) {
                        e.preventDefault();
                        let r = h()
                          .filter((e) => e.focusable)
                          .map((e) => e.ref.current);
                        if ("last" === t) r.reverse();
                        else if ("prev" === t || "next" === t) {
                          "prev" === t && r.reverse();
                          let n = r.indexOf(e.currentTarget);
                          r = m.loop
                            ? (function (e, t) {
                                return e.map((r, n) => e[(t + n) % e.length]);
                              })(r, n + 1)
                            : r.slice(n + 1);
                        }
                        setTimeout(() => _(r));
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        P = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
      function _(e) {
        let t = document.activeElement;
        for (let r of e)
          if (r === t || (r.focus(), document.activeElement !== t)) return;
      }
      let k = C,
        D = A;
    },
    6965: (e, t, r) => {
      r.d(t, { RG: () => E, bL: () => D, q7: () => N });
      var n = r(7281),
        o = r(80075),
        i = r(17419),
        a = r(12435),
        l = r(68117),
        u = r(63123),
        s = r(27795),
        c = r(30999),
        d = r(24327),
        f = r(47269),
        p = r(32469),
        m = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        h = "RovingFocusGroup",
        [g, b, y] = (0, i.N)(h),
        [w, E] = (0, l.A)(h, [y]),
        [x, R] = w(h),
        C = n.forwardRef((e, t) =>
          (0, p.jsx)(g.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(g.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, p.jsx)(S, { ...e, ref: t }),
            }),
          })
        );
      C.displayName = h;
      var S = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: i,
              loop: l = !1,
              dir: u,
              currentTabStopId: h,
              defaultCurrentTabStopId: g,
              onCurrentTabStopIdChange: y,
              onEntryFocus: w,
              preventScrollOnEntryFocus: E = !1,
              ...R
            } = e,
            C = n.useRef(null),
            S = (0, a.s)(t, C),
            A = (0, f.jH)(u),
            [P = null, _] = (0, d.i)({ prop: h, defaultProp: g, onChange: y }),
            [D, N] = n.useState(!1),
            O = (0, c.c)(w),
            T = b(r),
            M = n.useRef(!1),
            [L, I] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = C.current;
              if (e)
                return (
                  e.addEventListener(m, O), () => e.removeEventListener(m, O)
                );
            }, [O]),
            (0, p.jsx)(x, {
              scope: r,
              orientation: i,
              dir: A,
              loop: l,
              currentTabStopId: P,
              onItemFocus: n.useCallback((e) => _(e), [_]),
              onItemShiftTab: n.useCallback(() => N(!0), []),
              onFocusableItemAdd: n.useCallback(() => I((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => I((e) => e - 1), []),
              children: (0, p.jsx)(s.sG.div, {
                tabIndex: D || 0 === L ? -1 : 0,
                "data-orientation": i,
                ...R,
                ref: S,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.m)(e.onMouseDown, () => {
                  M.current = !0;
                }),
                onFocus: (0, o.m)(e.onFocus, (e) => {
                  let t = !M.current;
                  if (e.target === e.currentTarget && t && !D) {
                    let t = new CustomEvent(m, v);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = T().filter((e) => e.focusable);
                      k(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === P),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        E
                      );
                    }
                  }
                  M.current = !1;
                }),
                onBlur: (0, o.m)(e.onBlur, () => N(!1)),
              }),
            })
          );
        }),
        A = "RovingFocusGroupItem",
        P = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: i = !0,
              active: a = !1,
              tabStopId: l,
              ...c
            } = e,
            d = (0, u.B)(),
            f = l || d,
            m = R(A, r),
            v = m.currentTabStopId === f,
            h = b(r),
            { onFocusableItemAdd: y, onFocusableItemRemove: w } = m;
          return (
            n.useEffect(() => {
              if (i) return y(), () => w();
            }, [i, y, w]),
            (0, p.jsx)(g.ItemSlot, {
              scope: r,
              id: f,
              focusable: i,
              active: a,
              children: (0, p.jsx)(s.sG.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": m.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                  i ? m.onItemFocus(f) : e.preventDefault();
                }),
                onFocus: (0, o.m)(e.onFocus, () => m.onItemFocus(f)),
                onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    m.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return _[o];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = h()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) r.reverse();
                    else if ("prev" === t || "next" === t) {
                      "prev" === t && r.reverse();
                      let n = r.indexOf(e.currentTarget);
                      r = m.loop
                        ? (function (e, t) {
                            return e.map((r, n) => e[(t + n) % e.length]);
                          })(r, n + 1)
                        : r.slice(n + 1);
                    }
                    setTimeout(() => k(r));
                  }
                }),
              }),
            })
          );
        });
      P.displayName = A;
      var _ = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var D = C,
        N = P;
    },
    60132: (e, t, r) => {
      r.d(t, { Q6: () => H, bL: () => W, zi: () => U, CC: () => B });
      var n = r(13752),
        o = r(7281);
      function i(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
      var a = r(45039),
        l = r(8343),
        u = r(80577),
        s = r(84155),
        c = r(49633),
        d = r(19727),
        f = r(22375),
        p = r(70360),
        m = r(7978);
      let v = ["PageUp", "PageDown"],
        h = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        g = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
        },
        b = "Slider",
        [y, w, E] = (0, m.N)(b),
        [x, R] = (0, u.A)(b, [E]),
        [C, S] = x(b),
        A = (0, o.forwardRef)((e, t) => {
          let {
              name: r,
              min: u = 0,
              max: c = 100,
              step: d = 1,
              orientation: f = "horizontal",
              disabled: p = !1,
              minStepsBetweenThumbs: m = 0,
              defaultValue: g = [u],
              value: b,
              onValueChange: w = () => {},
              onValueCommit: E = () => {},
              inverted: x = !1,
              ...R
            } = e,
            [S, A] = (0, o.useState)(null),
            P = (0, l.s)(t, (e) => A(e)),
            _ = (0, o.useRef)(new Set()),
            N = (0, o.useRef)(0),
            O = "horizontal" === f,
            T = !S || !!S.closest("form"),
            [M = [], L] = (0, s.i)({
              prop: b,
              defaultProp: g,
              onChange: (e) => {
                var t;
                null === (t = [..._.current][N.current]) ||
                  void 0 === t ||
                  t.focus(),
                  w(e);
              },
            }),
            I = (0, o.useRef)(M);
          function j(e, t, { commit: r } = { commit: !1 }) {
            let n = (String(d).split(".")[1] || "").length,
              o = i(
                (function (e, t) {
                  let r = Math.pow(10, t);
                  return Math.round(e * r) / r;
                })(Math.round((e - u) / d) * d + u, n),
                [u, c]
              );
            L((e = []) => {
              var n, i;
              let a = (function (e = [], t, r) {
                let n = [...e];
                return (n[r] = t), n.sort((e, t) => e - t);
              })(e, o, t);
              if (
                ((n = a),
                !(
                  !((i = m * d) > 0) ||
                  Math.min(...n.slice(0, -1).map((e, t) => n[t + 1] - e)) >= i
                ))
              )
                return e;
              {
                N.current = a.indexOf(o);
                let t = String(a) !== String(e);
                return t && r && E(a), t ? a : e;
              }
            });
          }
          return (0, o.createElement)(
            C,
            {
              scope: e.__scopeSlider,
              disabled: p,
              min: u,
              max: c,
              valueIndexToChangeRef: N,
              thumbs: _.current,
              values: M,
              orientation: f,
            },
            (0, o.createElement)(
              y.Provider,
              { scope: e.__scopeSlider },
              (0, o.createElement)(
                y.Slot,
                { scope: e.__scopeSlider },
                (0, o.createElement)(
                  O ? k : D,
                  (0, n.A)(
                    { "aria-disabled": p, "data-disabled": p ? "" : void 0 },
                    R,
                    {
                      ref: P,
                      onPointerDown: (0, a.m)(R.onPointerDown, () => {
                        p || (I.current = M);
                      }),
                      min: u,
                      max: c,
                      inverted: x,
                      onSlideStart: p
                        ? void 0
                        : function (e) {
                            let t = (function (e, t) {
                              if (1 === e.length) return 0;
                              let r = e.map((e) => Math.abs(e - t)),
                                n = Math.min(...r);
                              return r.indexOf(n);
                            })(M, e);
                            j(e, t);
                          },
                      onSlideMove: p
                        ? void 0
                        : function (e) {
                            j(e, N.current);
                          },
                      onSlideEnd: p
                        ? void 0
                        : function () {
                            let e = I.current[N.current];
                            M[N.current] !== e && E(M);
                          },
                      onHomeKeyDown: () => !p && j(u, 0, { commit: !0 }),
                      onEndKeyDown: () =>
                        !p && j(c, M.length - 1, { commit: !0 }),
                      onStepKeyDown: ({ event: e, direction: t }) => {
                        if (!p) {
                          let r =
                              v.includes(e.key) ||
                              (e.shiftKey && h.includes(e.key)),
                            n = N.current;
                          j(M[n] + d * (r ? 10 : 1) * t, n, { commit: !0 });
                        }
                      },
                    }
                  )
                )
              )
            ),
            T &&
              M.map((e, t) =>
                (0, o.createElement)(F, {
                  key: t,
                  name: r ? r + (M.length > 1 ? "[]" : "") : void 0,
                  value: e,
                })
              )
          );
        }),
        [P, _] = x(b, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1,
        }),
        k = (0, o.forwardRef)((e, t) => {
          let {
              min: r,
              max: i,
              dir: a,
              inverted: u,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: f,
              onStepKeyDown: p,
              ...m
            } = e,
            [v, h] = (0, o.useState)(null),
            b = (0, l.s)(t, (e) => h(e)),
            y = (0, o.useRef)(),
            w = (0, c.jH)(a),
            E = "ltr" === w,
            x = (E && !u) || (!E && u);
          function R(e) {
            let t = y.current || v.getBoundingClientRect(),
              n = G([0, t.width], x ? [r, i] : [i, r]);
            return (y.current = t), n(e - t.left);
          }
          return (0, o.createElement)(
            P,
            {
              scope: e.__scopeSlider,
              startEdge: x ? "left" : "right",
              endEdge: x ? "right" : "left",
              direction: x ? 1 : -1,
              size: "width",
            },
            (0, o.createElement)(
              N,
              (0, n.A)({ dir: w, "data-orientation": "horizontal" }, m, {
                ref: b,
                style: {
                  ...m.style,
                  "--radix-slider-thumb-transform": "translateX(-50%)",
                },
                onSlideStart: (e) => {
                  let t = R(e.clientX);
                  null == s || s(t);
                },
                onSlideMove: (e) => {
                  let t = R(e.clientX);
                  null == d || d(t);
                },
                onSlideEnd: () => {
                  (y.current = void 0), null == f || f();
                },
                onStepKeyDown: (e) => {
                  let t = g[x ? "from-left" : "from-right"].includes(e.key);
                  null == p || p({ event: e, direction: t ? -1 : 1 });
                },
              })
            )
          );
        }),
        D = (0, o.forwardRef)((e, t) => {
          let {
              min: r,
              max: i,
              inverted: a,
              onSlideStart: u,
              onSlideMove: s,
              onSlideEnd: c,
              onStepKeyDown: d,
              ...f
            } = e,
            p = (0, o.useRef)(null),
            m = (0, l.s)(t, p),
            v = (0, o.useRef)(),
            h = !a;
          function b(e) {
            let t = v.current || p.current.getBoundingClientRect(),
              n = G([0, t.height], h ? [i, r] : [r, i]);
            return (v.current = t), n(e - t.top);
          }
          return (0, o.createElement)(
            P,
            {
              scope: e.__scopeSlider,
              startEdge: h ? "bottom" : "top",
              endEdge: h ? "top" : "bottom",
              size: "height",
              direction: h ? 1 : -1,
            },
            (0, o.createElement)(
              N,
              (0, n.A)({ "data-orientation": "vertical" }, f, {
                ref: m,
                style: {
                  ...f.style,
                  "--radix-slider-thumb-transform": "translateY(50%)",
                },
                onSlideStart: (e) => {
                  let t = b(e.clientY);
                  null == u || u(t);
                },
                onSlideMove: (e) => {
                  let t = b(e.clientY);
                  null == s || s(t);
                },
                onSlideEnd: () => {
                  (v.current = void 0), null == c || c();
                },
                onStepKeyDown: (e) => {
                  let t = g[h ? "from-bottom" : "from-top"].includes(e.key);
                  null == d || d({ event: e, direction: t ? -1 : 1 });
                },
              })
            )
          );
        }),
        N = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSlider: r,
              onSlideStart: i,
              onSlideMove: l,
              onSlideEnd: u,
              onHomeKeyDown: s,
              onEndKeyDown: c,
              onStepKeyDown: d,
              ...f
            } = e,
            m = S(b, r);
          return (0, o.createElement)(
            p.sG.span,
            (0, n.A)({}, f, {
              ref: t,
              onKeyDown: (0, a.m)(e.onKeyDown, (e) => {
                "Home" === e.key
                  ? (s(e), e.preventDefault())
                  : "End" === e.key
                  ? (c(e), e.preventDefault())
                  : v.concat(h).includes(e.key) && (d(e), e.preventDefault());
              }),
              onPointerDown: (0, a.m)(e.onPointerDown, (e) => {
                let t = e.target;
                t.setPointerCapture(e.pointerId),
                  e.preventDefault(),
                  m.thumbs.has(t) ? t.focus() : i(e);
              }),
              onPointerMove: (0, a.m)(e.onPointerMove, (e) => {
                e.target.hasPointerCapture(e.pointerId) && l(e);
              }),
              onPointerUp: (0, a.m)(e.onPointerUp, (e) => {
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  (t.releasePointerCapture(e.pointerId), u(e));
              }),
            })
          );
        }),
        O = (0, o.forwardRef)((e, t) => {
          let { __scopeSlider: r, ...i } = e,
            a = S("SliderTrack", r);
          return (0, o.createElement)(
            p.sG.span,
            (0, n.A)(
              {
                "data-disabled": a.disabled ? "" : void 0,
                "data-orientation": a.orientation,
              },
              i,
              { ref: t }
            )
          );
        }),
        T = "SliderRange",
        M = (0, o.forwardRef)((e, t) => {
          let { __scopeSlider: r, ...i } = e,
            a = S(T, r),
            u = _(T, r),
            s = (0, o.useRef)(null),
            c = (0, l.s)(t, s),
            d = a.values.length,
            f = a.values.map((e) => z(e, a.min, a.max)),
            m = d > 1 ? Math.min(...f) : 0,
            v = 100 - Math.max(...f);
          return (0, o.createElement)(
            p.sG.span,
            (0, n.A)(
              {
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
              },
              i,
              {
                ref: c,
                style: {
                  ...e.style,
                  [u.startEdge]: m + "%",
                  [u.endEdge]: v + "%",
                },
              }
            )
          );
        }),
        L = "SliderThumb",
        I = (0, o.forwardRef)((e, t) => {
          let r = w(e.__scopeSlider),
            [i, a] = (0, o.useState)(null),
            u = (0, l.s)(t, (e) => a(e)),
            s = (0, o.useMemo)(
              () => (i ? r().findIndex((e) => e.ref.current === i) : -1),
              [r, i]
            );
          return (0, o.createElement)(j, (0, n.A)({}, e, { ref: u, index: s }));
        }),
        j = (0, o.forwardRef)((e, t) => {
          let { __scopeSlider: r, index: i, ...u } = e,
            s = S(L, r),
            c = _(L, r),
            [d, m] = (0, o.useState)(null),
            v = (0, l.s)(t, (e) => m(e)),
            h = (0, f.X)(d),
            g = s.values[i],
            b = void 0 === g ? 0 : z(g, s.min, s.max),
            w = (function (e, t) {
              return t > 2
                ? `Value ${e + 1} of ${t}`
                : 2 === t
                ? ["Minimum", "Maximum"][e]
                : void 0;
            })(i, s.values.length),
            E = null == h ? void 0 : h[c.size],
            x = E
              ? (function (e, t, r) {
                  let n = e / 2,
                    o = G([0, 50], [0, n]);
                  return (n - o(t) * r) * r;
                })(E, b, c.direction)
              : 0;
          return (
            (0, o.useEffect)(() => {
              if (d)
                return (
                  s.thumbs.add(d),
                  () => {
                    s.thumbs.delete(d);
                  }
                );
            }, [d, s.thumbs]),
            (0, o.createElement)(
              "span",
              {
                style: {
                  transform: "var(--radix-slider-thumb-transform)",
                  position: "absolute",
                  [c.startEdge]: `calc(${b}% + ${x}px)`,
                },
              },
              (0, o.createElement)(
                y.ItemSlot,
                { scope: e.__scopeSlider },
                (0, o.createElement)(
                  p.sG.span,
                  (0, n.A)(
                    {
                      role: "slider",
                      "aria-label": e["aria-label"] || w,
                      "aria-valuemin": s.min,
                      "aria-valuenow": g,
                      "aria-valuemax": s.max,
                      "aria-orientation": s.orientation,
                      "data-orientation": s.orientation,
                      "data-disabled": s.disabled ? "" : void 0,
                      tabIndex: s.disabled ? void 0 : 0,
                    },
                    u,
                    {
                      ref: v,
                      style: void 0 === g ? { display: "none" } : e.style,
                      onFocus: (0, a.m)(e.onFocus, () => {
                        s.valueIndexToChangeRef.current = i;
                      }),
                    }
                  )
                )
              )
            )
          );
        }),
        F = (e) => {
          let { value: t, ...r } = e,
            i = (0, o.useRef)(null),
            a = (0, d.Z)(t);
          return (
            (0, o.useEffect)(() => {
              let e = i.current,
                r = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "value"
                ).set;
              if (a !== t && r) {
                let n = new Event("input", { bubbles: !0 });
                r.call(e, t), e.dispatchEvent(n);
              }
            }, [a, t]),
            (0, o.createElement)(
              "input",
              (0, n.A)({ style: { display: "none" } }, r, {
                ref: i,
                defaultValue: t,
              })
            )
          );
        };
      function z(e, t, r) {
        return i((100 / (r - t)) * (e - t), [0, 100]);
      }
      function G(e, t) {
        return (r) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0]);
        };
      }
      let W = A,
        B = O,
        H = M,
        U = I;
    },
    89790: (e, t, r) => {
      r.d(t, { DX: () => a, xV: () => u });
      var n = r(66439),
        o = r(7281),
        i = r(8343);
      let a = (0, o.forwardRef)((e, t) => {
        let { children: r, ...i } = e,
          a = o.Children.toArray(r),
          u = a.find(s);
        if (u) {
          let e = u.props.children,
            r = a.map((t) =>
              t !== u
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            l,
            (0, n.A)({}, i, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, o.createElement)(l, (0, n.A)({}, i, { ref: t }), r);
      });
      a.displayName = "Slot";
      let l = (0, o.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        if ((0, o.isValidElement)(r)) {
          let e = r.props.ref ?? r.ref;
          return (0, o.cloneElement)(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n)
                  ? o && i
                    ? (r[n] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : "style" === n
                  ? (r[n] = { ...o, ...i })
                  : "className" === n &&
                    (r[n] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(n, r.props),
            ref: t ? (0, i.t)(t, e) : e,
          });
        }
        return o.Children.count(r) > 1 ? o.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      let u = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function s(e) {
        return (0, o.isValidElement)(e) && e.type === u;
      }
    },
    85239: (e, t, r) => {
      r.d(t, { DX: () => a, xV: () => u });
      var n = r(7281),
        o = r(12435),
        i = r(32469),
        a = n.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            a = n.Children.toArray(r),
            u = a.find(s);
          if (u) {
            let e = u.props.children,
              r = a.map((t) =>
                t !== u
                  ? t
                  : n.Children.count(e) > 1
                  ? n.Children.only(null)
                  : n.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(l, {
              ...o,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, i.jsx)(l, { ...o, ref: t, children: r });
        });
      a.displayName = "Slot";
      var l = n.forwardRef((e, t) => {
        let { children: r, ...i } = e;
        if (n.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return n.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n)
                  ? o && i
                    ? (r[n] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : "style" === n
                  ? (r[n] = { ...o, ...i })
                  : "className" === n &&
                    (r[n] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(i, r.props),
            ref: t ? (0, o.t)(t, e) : e,
          });
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      var u = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function s(e) {
        return n.isValidElement(e) && e.type === u;
      }
    },
    77102: (e, t, r) => {
      r.d(t, { bL: () => x, zi: () => R });
      var n = r(7281),
        o = r(80075),
        i = r(12435),
        a = r(68117),
        l = r(24327),
        u = r(36603),
        s = r(12411),
        c = r(27795),
        d = r(32469),
        f = "Switch",
        [p, m] = (0, a.A)(f),
        [v, h] = p(f),
        g = n.forwardRef((e, t) => {
          let {
              __scopeSwitch: r,
              name: a,
              checked: u,
              defaultChecked: s,
              required: f,
              disabled: p,
              value: m = "on",
              onCheckedChange: h,
              ...g
            } = e,
            [b, y] = n.useState(null),
            x = (0, i.s)(t, (e) => y(e)),
            R = n.useRef(!1),
            C = !b || !!b.closest("form"),
            [S = !1, A] = (0, l.i)({ prop: u, defaultProp: s, onChange: h });
          return (0, d.jsxs)(v, {
            scope: r,
            checked: S,
            disabled: p,
            children: [
              (0, d.jsx)(c.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": S,
                "aria-required": f,
                "data-state": E(S),
                "data-disabled": p ? "" : void 0,
                disabled: p,
                value: m,
                ...g,
                ref: x,
                onClick: (0, o.m)(e.onClick, (e) => {
                  A((e) => !e),
                    C &&
                      ((R.current = e.isPropagationStopped()),
                      R.current || e.stopPropagation());
                }),
              }),
              C &&
                (0, d.jsx)(w, {
                  control: b,
                  bubbles: !R.current,
                  name: a,
                  value: m,
                  checked: S,
                  required: f,
                  disabled: p,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      g.displayName = f;
      var b = "SwitchThumb",
        y = n.forwardRef((e, t) => {
          let { __scopeSwitch: r, ...n } = e,
            o = h(b, r);
          return (0, d.jsx)(c.sG.span, {
            "data-state": E(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: t,
          });
        });
      y.displayName = b;
      var w = (e) => {
        let { control: t, checked: r, bubbles: o = !0, ...i } = e,
          a = n.useRef(null),
          l = (0, u.Z)(r),
          c = (0, s.X)(t);
        return (
          n.useEffect(() => {
            let e = a.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
            if (l !== r && t) {
              let n = new Event("click", { bubbles: o });
              t.call(e, r), e.dispatchEvent(n);
            }
          }, [l, r, o]),
          (0, d.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: r,
            ...i,
            tabIndex: -1,
            ref: a,
            style: {
              ...e.style,
              ...c,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function E(e) {
        return e ? "checked" : "unchecked";
      }
      var x = g,
        R = y;
    },
    93915: (e, t, r) => {
      r.d(t, { B8: () => k, UC: () => N, bL: () => _, l9: () => D });
      var n = r(7281),
        o = r(80075),
        i = r(68117),
        a = r(6965),
        l = r(26715),
        u = r(27795),
        s = r(47269),
        c = r(24327),
        d = r(63123),
        f = r(32469),
        p = "Tabs",
        [m, v] = (0, i.A)(p, [a.RG]),
        h = (0, a.RG)(),
        [g, b] = m(p),
        y = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: n,
              onValueChange: o,
              defaultValue: i,
              orientation: a = "horizontal",
              dir: l,
              activationMode: p = "automatic",
              ...m
            } = e,
            v = (0, s.jH)(l),
            [h, b] = (0, c.i)({ prop: n, onChange: o, defaultProp: i });
          return (0, f.jsx)(g, {
            scope: r,
            baseId: (0, d.B)(),
            value: h,
            onValueChange: b,
            orientation: a,
            dir: v,
            activationMode: p,
            children: (0, f.jsx)(u.sG.div, {
              dir: v,
              "data-orientation": a,
              ...m,
              ref: t,
            }),
          });
        });
      y.displayName = p;
      var w = "TabsList",
        E = n.forwardRef((e, t) => {
          let { __scopeTabs: r, loop: n = !0, ...o } = e,
            i = b(w, r),
            l = h(r);
          return (0, f.jsx)(a.bL, {
            asChild: !0,
            ...l,
            orientation: i.orientation,
            dir: i.dir,
            loop: n,
            children: (0, f.jsx)(u.sG.div, {
              role: "tablist",
              "aria-orientation": i.orientation,
              ...o,
              ref: t,
            }),
          });
        });
      E.displayName = w;
      var x = "TabsTrigger",
        R = n.forwardRef((e, t) => {
          let { __scopeTabs: r, value: n, disabled: i = !1, ...l } = e,
            s = b(x, r),
            c = h(r),
            d = A(s.baseId, n),
            p = P(s.baseId, n),
            m = n === s.value;
          return (0, f.jsx)(a.q7, {
            asChild: !0,
            ...c,
            focusable: !i,
            active: m,
            children: (0, f.jsx)(u.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": m,
              "aria-controls": p,
              "data-state": m ? "active" : "inactive",
              "data-disabled": i ? "" : void 0,
              disabled: i,
              id: d,
              ...l,
              ref: t,
              onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                i || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : s.onValueChange(n);
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && s.onValueChange(n);
              }),
              onFocus: (0, o.m)(e.onFocus, () => {
                let e = "manual" !== s.activationMode;
                m || i || !e || s.onValueChange(n);
              }),
            }),
          });
        });
      R.displayName = x;
      var C = "TabsContent",
        S = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: o,
              forceMount: i,
              children: a,
              ...s
            } = e,
            c = b(C, r),
            d = A(c.baseId, o),
            p = P(c.baseId, o),
            m = o === c.value,
            v = n.useRef(m);
          return (
            n.useEffect(() => {
              let e = requestAnimationFrame(() => (v.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, f.jsx)(l.C, {
              present: i || m,
              children: (r) => {
                let { present: n } = r;
                return (0, f.jsx)(u.sG.div, {
                  "data-state": m ? "active" : "inactive",
                  "data-orientation": c.orientation,
                  role: "tabpanel",
                  "aria-labelledby": d,
                  hidden: !n,
                  id: p,
                  tabIndex: 0,
                  ...s,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: v.current ? "0s" : void 0,
                  },
                  children: n && a,
                });
              },
            })
          );
        });
      function A(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function P(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      S.displayName = C;
      var _ = y,
        k = E,
        D = R,
        N = S;
    },
    4915: (e, t, r) => {
      r.d(t, { c: () => o });
      var n = r(7281);
      function o(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(() => {
            t.current = e;
          }),
          (0, n.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
    },
    30999: (e, t, r) => {
      r.d(t, { c: () => o });
      var n = r(7281);
      function o(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    84155: (e, t, r) => {
      r.d(t, { i: () => i });
      var n = r(7281),
        o = r(4915);
      function i({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [i, a] = (function ({ defaultProp: e, onChange: t }) {
            let r = (0, n.useState)(e),
              [i] = r,
              a = (0, n.useRef)(i),
              l = (0, o.c)(t);
            return (
              (0, n.useEffect)(() => {
                a.current !== i && (l(i), (a.current = i));
              }, [i, a, l]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          l = void 0 !== e,
          u = l ? e : i,
          s = (0, o.c)(r);
        return [
          u,
          (0, n.useCallback)(
            (t) => {
              if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && s(r);
              } else a(t);
            },
            [l, e, a, s]
          ),
        ];
      }
    },
    24327: (e, t, r) => {
      r.d(t, { i: () => i });
      var n = r(7281),
        o = r(30999);
      function i({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [i, a] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [i] = r,
              a = n.useRef(i),
              l = (0, o.c)(t);
            return (
              n.useEffect(() => {
                a.current !== i && (l(i), (a.current = i));
              }, [i, a, l]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          l = void 0 !== e,
          u = l ? e : i,
          s = (0, o.c)(r);
        return [
          u,
          n.useCallback(
            (t) => {
              if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && s(r);
              } else a(t);
            },
            [l, e, a, s]
          ),
        ];
      }
    },
    37629: (e, t, r) => {
      r.d(t, { U: () => i });
      var n = r(7281),
        o = r(4915);
      function i(e, t = null == globalThis ? void 0 : globalThis.document) {
        let r = (0, o.c)(e);
        (0, n.useEffect)(() => {
          let e = (e) => {
            "Escape" === e.key && r(e);
          };
          return (
            t.addEventListener("keydown", e),
            () => t.removeEventListener("keydown", e)
          );
        }, [r, t]);
      }
    },
    56507: (e, t, r) => {
      r.d(t, { N: () => o });
      var n = r(7281);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    },
    49543: (e, t, r) => {
      r.d(t, { N: () => o });
      var n = r(7281),
        o = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    19727: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(7281);
      function o(e) {
        let t = (0, n.useRef)({ value: e, previous: e });
        return (0, n.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    36603: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(7281);
      function o(e) {
        let t = n.useRef({ value: e, previous: e });
        return n.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    22375: (e, t, r) => {
      r.d(t, { X: () => i });
      var n = r(7281),
        o = r(56507);
      function i(e) {
        let [t, r] = (0, n.useState)(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (o = t.blockSize);
                } else (n = e.offsetWidth), (o = e.offsetHeight);
                r({ width: n, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
    12411: (e, t, r) => {
      r.d(t, { X: () => i });
      var n = r(7281),
        o = r(49543);
      function i(e) {
        let [t, r] = n.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (o = t.blockSize);
                } else (n = e.offsetWidth), (o = e.offsetHeight);
                r({ width: n, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
    18804: (e, t, r) => {
      r.d(t, { b: () => l, s: () => a });
      var n = r(66439),
        o = r(7281),
        i = r(70360);
      let a = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            i.sG.span,
            (0, n.A)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        l = a;
    },
    22552: (e, t, r) => {
      r.d(t, { b: () => l, s: () => a });
      var n = r(7281),
        o = r(27795),
        i = r(32469),
        a = n.forwardRef((e, t) =>
          (0, i.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      a.displayName = "VisuallyHidden";
      var l = a;
    },
    89499: (e, t, r) => {
      r.d(t, { F: () => i });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                  else for (r in t) t[r] && (o && (o += " "), (o += r));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        i = (e, t) => (r) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: a, defaultVariants: l } = t,
            u = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                o = null == l ? void 0 : l[e];
              if (null === t) return null;
              let i = n(t) || n(o);
              return a[e][i];
            }),
            s =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return o(
            e,
            u,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...l, ...s }[t])
                      : { ...l, ...s }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    16939: (e, t, r) => {
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, { $: () => n, A: () => o });
      let o = n;
    },
    82219: (e, t, r) => {
      r.d(t, { QP: () => q });
      let n = (e) => {
          let t = l(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || a(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            i = n ? o(e.slice(1), n) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let a = e.join("-");
          return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        a = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        l = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              u(r, n, e, t);
            }),
            n
          );
        },
        u = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : s(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                u(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              u(o, s(t, e), r, n);
            });
          });
        },
        s = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        c = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, i) => {
              r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        p = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            o = t[0],
            i = t.length,
            a = (e) => {
              let r;
              let a = [],
                l = 0,
                u = 0;
              for (let s = 0; s < e.length; s++) {
                let c = e[s];
                if (0 === l) {
                  if (c === o && (n || e.slice(s, s + i) === t)) {
                    a.push(e.slice(u, s)), (u = s + i);
                    continue;
                  }
                  if ("/" === c) {
                    r = s;
                    continue;
                  }
                }
                "[" === c ? l++ : "]" === c && l--;
              }
              let s = 0 === a.length ? e : e.substring(u),
                c = s.startsWith("!"),
                d = c ? s.substring(1) : s;
              return {
                modifiers: a,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > u ? r - u : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: a }) : a;
        },
        m = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        v = (e) => ({ cache: f(e.cacheSize), parseClassName: p(e), ...n(e) }),
        h = /\s+/,
        g = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
            } = t,
            i = [],
            a = e.trim().split(h),
            l = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                modifiers: u,
                hasImportantModifier: s,
                baseClassName: c,
                maybePostfixModifierPosition: d,
              } = r(t),
              f = !!d,
              p = n(f ? c.substring(0, d) : c);
            if (!p) {
              if (!f || !(p = n(c))) {
                l = t + (l.length > 0 ? " " + l : l);
                continue;
              }
              f = !1;
            }
            let v = m(u).join(":"),
              h = s ? v + "!" : v,
              g = h + p;
            if (i.includes(g)) continue;
            i.push(g);
            let b = o(p, f);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              i.push(h + t);
            }
            l = t + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function b() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = y(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let y = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
            e[n] && (t = y(e[n])) && (r && (r += " "), (r += t));
          return r;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        E = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        x = /^\d+\/\d+$/,
        R = new Set(["px", "full", "screen"]),
        C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        S =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        _ =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        k = (e) => N(e) || R.has(e) || x.test(e),
        D = (e) => U(e, "length", K),
        N = (e) => !!e && !Number.isNaN(Number(e)),
        O = (e) => U(e, "number", N),
        T = (e) => !!e && Number.isInteger(Number(e)),
        M = (e) => e.endsWith("%") && N(e.slice(0, -1)),
        L = (e) => E.test(e),
        I = (e) => C.test(e),
        j = new Set(["length", "size", "percentage"]),
        F = (e) => U(e, j, $),
        z = (e) => U(e, "position", $),
        G = new Set(["image", "url"]),
        W = (e) => U(e, G, X),
        B = (e) => U(e, "", V),
        H = () => !0,
        U = (e, t, r) => {
          let n = E.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        K = (e) => S.test(e) && !A.test(e),
        $ = () => !1,
        V = (e) => P.test(e),
        X = (e) => _.test(e);
      Symbol.toStringTag;
      let q = (function (e, ...t) {
        let r, n, o;
        let i = function (l) {
          return (
            (n = (r = v(t.reduce((e, t) => t(e), e()))).cache.get),
            (o = r.cache.set),
            (i = a),
            a(l)
          );
        };
        function a(e) {
          let t = n(e);
          if (t) return t;
          let i = g(e, r);
          return o(e, i), i;
        }
        return function () {
          return i(b.apply(null, arguments));
        };
      })(() => {
        let e = w("colors"),
          t = w("spacing"),
          r = w("blur"),
          n = w("brightness"),
          o = w("borderColor"),
          i = w("borderRadius"),
          a = w("borderSpacing"),
          l = w("borderWidth"),
          u = w("contrast"),
          s = w("grayscale"),
          c = w("hueRotate"),
          d = w("invert"),
          f = w("gap"),
          p = w("gradientColorStops"),
          m = w("gradientColorStopPositions"),
          v = w("inset"),
          h = w("margin"),
          g = w("opacity"),
          b = w("padding"),
          y = w("saturate"),
          E = w("scale"),
          x = w("sepia"),
          R = w("skew"),
          C = w("space"),
          S = w("translate"),
          A = () => ["auto", "contain", "none"],
          P = () => ["auto", "hidden", "clip", "visible", "scroll"],
          _ = () => ["auto", L, t],
          j = () => [L, t],
          G = () => ["", k, D],
          U = () => ["auto", N, L],
          K = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          $ = () => ["solid", "dashed", "dotted", "double", "none"],
          V = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          X = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          q = () => ["", "0", L],
          Y = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Z = () => [N, L];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [H],
            spacing: [k, D],
            blur: ["none", "", I, L],
            brightness: Z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", I, L],
            borderSpacing: j(),
            borderWidth: G(),
            contrast: Z(),
            grayscale: q(),
            hueRotate: Z(),
            invert: q(),
            gap: j(),
            gradientColorStops: [e],
            gradientColorStopPositions: [M, D],
            inset: _(),
            margin: _(),
            opacity: Z(),
            padding: j(),
            saturate: Z(),
            scale: Z(),
            sepia: q(),
            skew: Z(),
            space: j(),
            translate: j(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", L] }],
            container: ["container"],
            columns: [{ columns: [I] }],
            "break-after": [{ "break-after": Y() }],
            "break-before": [{ "break-before": Y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...K(), L] }],
            overflow: [{ overflow: P() }],
            "overflow-x": [{ "overflow-x": P() }],
            "overflow-y": [{ "overflow-y": P() }],
            overscroll: [{ overscroll: A() }],
            "overscroll-x": [{ "overscroll-x": A() }],
            "overscroll-y": [{ "overscroll-y": A() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [v] }],
            "inset-x": [{ "inset-x": [v] }],
            "inset-y": [{ "inset-y": [v] }],
            start: [{ start: [v] }],
            end: [{ end: [v] }],
            top: [{ top: [v] }],
            right: [{ right: [v] }],
            bottom: [{ bottom: [v] }],
            left: [{ left: [v] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", T, L] }],
            basis: [{ basis: _() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", L] }],
            grow: [{ grow: q() }],
            shrink: [{ shrink: q() }],
            order: [{ order: ["first", "last", "none", T, L] }],
            "grid-cols": [{ "grid-cols": [H] }],
            "col-start-end": [{ col: ["auto", { span: ["full", T, L] }, L] }],
            "col-start": [{ "col-start": U() }],
            "col-end": [{ "col-end": U() }],
            "grid-rows": [{ "grid-rows": [H] }],
            "row-start-end": [{ row: ["auto", { span: [T, L] }, L] }],
            "row-start": [{ "row-start": U() }],
            "row-end": [{ "row-end": U() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", L] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", L] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...X()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...X(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...X(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [h] }],
            mx: [{ mx: [h] }],
            my: [{ my: [h] }],
            ms: [{ ms: [h] }],
            me: [{ me: [h] }],
            mt: [{ mt: [h] }],
            mr: [{ mr: [h] }],
            mb: [{ mb: [h] }],
            ml: [{ ml: [h] }],
            "space-x": [{ "space-x": [C] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [C] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t] },
            ],
            "min-w": [{ "min-w": [L, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  L,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [I] },
                  I,
                ],
              },
            ],
            h: [
              { h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [L, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", I, D] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  O,
                ],
              },
            ],
            "font-family": [{ font: [H] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  L,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", N, O] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  k,
                  L,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", L] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", L] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [g] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [g] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", k, D] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", k, L] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: j() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  L,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", L] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [g] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...K(), z] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", F] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  W,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [g] }],
            "border-style": [{ border: [...$(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [g] }],
            "divide-style": [{ divide: $() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...$()] }],
            "outline-offset": [{ "outline-offset": [k, L] }],
            "outline-w": [{ outline: [k, D] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: G() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [g] }],
            "ring-offset-w": [{ "ring-offset": [k, D] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", I, B] }],
            "shadow-color": [{ shadow: [H] }],
            opacity: [{ opacity: [g] }],
            "mix-blend": [
              { "mix-blend": [...V(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": V() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", I, L] }],
            grayscale: [{ grayscale: [s] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [x] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [s] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [g] }],
            "backdrop-saturate": [{ "backdrop-saturate": [y] }],
            "backdrop-sepia": [{ "backdrop-sepia": [x] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  L,
                ],
              },
            ],
            duration: [{ duration: Z() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", L] }],
            delay: [{ delay: Z() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", L] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [E] }],
            "scale-x": [{ "scale-x": [E] }],
            "scale-y": [{ "scale-y": [E] }],
            rotate: [{ rotate: [T, L] }],
            "translate-x": [{ "translate-x": [S] }],
            "translate-y": [{ "translate-y": [S] }],
            "skew-x": [{ "skew-x": [R] }],
            "skew-y": [{ "skew-y": [R] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  L,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  L,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": j() }],
            "scroll-mx": [{ "scroll-mx": j() }],
            "scroll-my": [{ "scroll-my": j() }],
            "scroll-ms": [{ "scroll-ms": j() }],
            "scroll-me": [{ "scroll-me": j() }],
            "scroll-mt": [{ "scroll-mt": j() }],
            "scroll-mr": [{ "scroll-mr": j() }],
            "scroll-mb": [{ "scroll-mb": j() }],
            "scroll-ml": [{ "scroll-ml": j() }],
            "scroll-p": [{ "scroll-p": j() }],
            "scroll-px": [{ "scroll-px": j() }],
            "scroll-py": [{ "scroll-py": j() }],
            "scroll-ps": [{ "scroll-ps": j() }],
            "scroll-pe": [{ "scroll-pe": j() }],
            "scroll-pt": [{ "scroll-pt": j() }],
            "scroll-pr": [{ "scroll-pr": j() }],
            "scroll-pb": [{ "scroll-pb": j() }],
            "scroll-pl": [{ "scroll-pl": j() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", L] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [k, D, O] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    2361: (e, t, r) => {
      r.r(t),
        r.d(t, {
          __addDisposableResource: () => M,
          __assign: () => i,
          __asyncDelegator: () => S,
          __asyncGenerator: () => C,
          __asyncValues: () => A,
          __await: () => R,
          __awaiter: () => m,
          __classPrivateFieldGet: () => N,
          __classPrivateFieldIn: () => T,
          __classPrivateFieldSet: () => O,
          __createBinding: () => h,
          __decorate: () => l,
          __disposeResources: () => I,
          __esDecorate: () => s,
          __exportStar: () => g,
          __extends: () => o,
          __generator: () => v,
          __importDefault: () => D,
          __importStar: () => k,
          __makeTemplateObject: () => P,
          __metadata: () => p,
          __param: () => u,
          __propKey: () => d,
          __read: () => y,
          __rest: () => a,
          __runInitializers: () => c,
          __setFunctionName: () => f,
          __spread: () => w,
          __spreadArray: () => x,
          __spreadArrays: () => E,
          __values: () => b,
          default: () => j,
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      function l(e, t, r, n) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, r, n);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (o = e[l]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function s(e, t, r, n, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var l,
            u = n.kind,
            s = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            c = !t && e ? (n.static ? e : e.prototype) : null,
            d = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
            f = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var m = {};
          for (var v in n) m[v] = "access" === v ? {} : n[v];
          for (var v in n.access) m.access[v] = n.access[v];
          m.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var h = (0, r[p])(
            "accessor" === u ? { get: d.get, set: d.set } : d[s],
            m
          );
          if ("accessor" === u) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h)
              throw TypeError("Object expected");
            (l = a(h.get)) && (d.get = l),
              (l = a(h.set)) && (d.set = l),
              (l = a(h.init)) && o.unshift(l);
          } else (l = a(h)) && ("field" === u ? o.unshift(l) : (d[s] = l));
        }
        c && Object.defineProperty(c, n.name, d), (f = !0);
      }
      function c(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++)
          r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function m(e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function v(e, t) {
        var r,
          n,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = l(0)),
          (a.throw = l(1)),
          (a.return = l(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function l(l) {
          return function (u) {
            return (function (l) {
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), l[0] && (i = 0)), i; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & l[0]
                          ? n.return
                          : l[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                      !(o = o.call(n, l[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return i.label++, { value: l[1], done: !1 };
                    case 5:
                      i.label++, (n = l[1]), (l = [0]);
                      continue;
                    case 7:
                      (l = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        i.label = l[1];
                        break;
                      }
                      if (6 === l[0] && i.label < o[1]) {
                        (i.label = o[1]), (o = l);
                        break;
                      }
                      if (o && i.label < o[2]) {
                        (i.label = o[2]), i.ops.push(l);
                        break;
                      }
                      o[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  l = t.call(e, i);
                } catch (e) {
                  (l = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, u]);
          };
        }
      }
      var h = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(t, r);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, o);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function g(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            h(t, e, r);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
            a.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function w() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(y(arguments[t]));
        return e;
      }
      function E() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), o = 0, t = 0; t < r; t++)
          for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++)
            n[o] = i[a];
        return n;
      }
      function x(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, o = 0, i = t.length; o < i; o++)
            (!n && o in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function R(e) {
        return this instanceof R ? ((this.v = e), this) : new R(e);
      }
      function C(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          o = r.apply(e, t || []),
          i = [];
        return (
          (n = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, s);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function a(e, t) {
          o[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                i.push([e, t, r, n]) > 1 || l(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function l(e, t) {
          try {
            var r;
            (r = o[e](t)).value instanceof R
              ? Promise.resolve(r.value.v).then(u, s)
              : c(i[0][2], r);
          } catch (e) {
            c(i[0][3], e);
          }
        }
        function u(e) {
          l("next", e);
        }
        function s(e) {
          l("throw", e);
        }
        function c(e, t) {
          e(t), i.shift(), i.length && l(i[0][0], i[0][1]);
        }
      }
      function S(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, o) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: R(e[n](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function A(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = b(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, o) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, o, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function P(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var _ = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function k(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              h(t, e, r);
        return _(t, e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function N(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function O(e, t, r, n, o) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r;
      }
      function T(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function M(e, t, r) {
        if (null != t) {
          var n, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (o = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          o &&
            (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var L =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function I(e) {
        function t(t) {
          (e.error = e.hasError
            ? new L(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          n = 0;
        return (function o() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === n)
                return (n = 0), e.stack.push(r), Promise.resolve().then(o);
              if (r.dispose) {
                var i = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else n |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === n)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      let j = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: l,
        __param: u,
        __metadata: p,
        __awaiter: m,
        __generator: v,
        __createBinding: h,
        __exportStar: g,
        __values: b,
        __read: y,
        __spread: w,
        __spreadArrays: E,
        __spreadArray: x,
        __await: R,
        __asyncGenerator: C,
        __asyncDelegator: S,
        __asyncValues: A,
        __makeTemplateObject: P,
        __importStar: k,
        __importDefault: D,
        __classPrivateFieldGet: N,
        __classPrivateFieldSet: O,
        __classPrivateFieldIn: T,
        __addDisposableResource: M,
        __disposeResources: I,
      };
    },
  },
]);