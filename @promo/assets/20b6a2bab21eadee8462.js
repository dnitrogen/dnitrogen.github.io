(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([[38], {
    1846: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = void 0;
        var n = r(1899).getClass;
        t.getClass = n
    },
    1896: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = t.SpinnerTypes = void 0;
        var n, a, i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = f(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), o = s(r(19)), l = r(1846), u = s(r(1665)), c = ["type", "className", "itemClassName"];
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function f(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (f = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d() {
            d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ;
            return d.apply(this, arguments)
        }
        function p(e, t, r, a) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = a;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        t.SpinnerTypes = a;
        !function(e) {
            e.WANDERING_CUBES = "wanderingCubes";
            e.CHASING_DOTS = "chasingDots";
            e.PULSING_ELLIPSIS = "pulsingEllipsis";
            e.SPINNING_CIRCLE = "spinningCircle"
        }(a || (t.SpinnerTypes = a = {}));
        var v = function(e) {
            var t = e.type
              , r = void 0 === t ? a.WANDERING_CUBES : t
              , n = e.className
              , s = e.itemClassName
              , f = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) {
                    r = i[n];
                    t.indexOf(r) >= 0 || (a[r] = e[r])
                }
                return a
            }(e, c);
            if (r === a.SPINNING_CIRCLE)
                return i.createElement("div", d({
                    className: (0,
                    o.default)(u.default.spinner, u.default[r], n)
                }, f), p("div", {
                    className: u.default.spinningCircleInner
                }, void 0, p("svg", {
                    className: u.default.circular,
                    viewBox: "25 25 50 50"
                }, void 0, p("circle", {
                    className: (0,
                    o.default)(u.default.path, u.default.path3),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), p("circle", {
                    className: (0,
                    o.default)(u.default.path, u.default.path2),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), p("circle", {
                    className: u.default.path,
                    cx: "50",
                    cy: "50",
                    r: "20"
                }))));
            var v = (0,
            o.default)((0,
            l.getClass)(u.default, r, "item"), s);
            return i.createElement("span", d({
                className: (0,
                o.default)(u.default.spinner, n)
            }, f), p("span", {
                className: (0,
                o.default)(u.default.inner, u.default[r])
            }, void 0, p("span", {
                className: v
            }), p("span", {
                className: v
            }), r === a.PULSING_ELLIPSIS ? p("span", {
                className: v
            }) : null))
        };
        v.displayName = "Spinner";
        v.Type = a;
        var y = v;
        t.default = y
    },
    1899: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = function(e, t) {
            for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
                a[i - 2] = arguments[i];
            var o = a.reduce((function(e, t) {
                return e + (0,
                n.upperCaseFirstChar)(t)
            }
            ), "")
              , l = "" + t + o
              , u = e[l];
            if (null == u) {
                0;
                return ""
            }
            return u
        }
        ;
        var n = r(1912)
    },
    1912: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.cssValueToNumber = function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t
        }
        ;
        t.getAcronym = function(e) {
            return null != e ? e.replace(/'s /g, " ").replace(/\w+/g, (function(e) {
                return e[0]
            }
            )).replace(/\s/g, "") : ""
        }
        ;
        t.truncateText = t.stripDiacritics = void 0;
        t.upperCaseFirstChar = function(e) {
            if (null == e)
                return "";
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }
        ;
        var n = /[\u0300-\u036f]/g;
        t.truncateText = function(e, t, r) {
            void 0 === r && (r = "…");
            return null == e || null == t ? "" : e.length > t ? "" + e.substring(0, t - r.length).replace(/[\s.]+$/, "") + r : e
        }
        ;
        var a = null == String.prototype.normalize ? function(e) {
            return e
        }
        : function(e) {
            return e.normalize("NFD").replace(n, "").normalize("NFC")
        }
        ;
        t.stripDiacritics = a
    },
    1936: function(e, t, r) {
        e.exports = r.p + "a188414ce83f2454b9d71a47c3d95909.svg"
    },
    2157: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = p;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = f(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n)
        }(r(1));
        var n, a = s(r(19)), i = s(r(169)), o = r(108), l = r(166), u = s(r(16)), c = s(r(1700));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function f(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (f = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d(e, t, r, a) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = a;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function p(e) {
            var t = e.analyticsLocation
              , n = e.className;
            return d(o.Row, {
                className: (0,
                a.default)(c.default.container, n)
            }, void 0, d("div", {
                "aria-hidden": !0,
                className: c.default.sparklesContainer
            }, void 0, d("img", {
                className: c.default.sparkles,
                src: r(1936),
                alt: ""
            })), d(l.H4, {
                className: c.default.title
            }, void 0, u.default.Messages.Landing.CTA_TITLE), d(i.default, {
                className: c.default.downloadButton,
                analyticsLocation: t
            }))
        }
        p.displayName = "BottomCTA"
    },
    3035: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.FeatureTileLayout = void 0;
        t.default = b;
        var n, a, i, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = p(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), l = d(r(19)), u = r(108), c = r(166), s = d(r(51)), f = d(r(1787));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (p = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function v(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == r)
                    return;
                var n, a, i = [], o = !0, l = !1;
                try {
                    for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                        i.push(n.value);
                        if (t && i.length === t)
                            break
                    }
                } catch (e) {
                    l = !0;
                    a = e
                } finally {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return i
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return y(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return y(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function m(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = n;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function h(e) {
            var t = e.title
              , r = e.subtitle
              , n = e.headline;
            return o.createElement(o.Fragment, null, m(c.H2, {
                headline: n
            }, void 0, t), m(s.default, {
                className: f.default.subtitle
            }, void 0, r))
        }
        t.FeatureTileLayout = i;
        !function(e) {
            e.IMAGE_LEFT = "image_left";
            e.IMAGE_RIGHT = "image_right";
            e.IMAGE_BOTTOM = "image_bottom"
        }(i || (t.FeatureTileLayout = i = {}));
        var g = ((n = {})[i.IMAGE_LEFT] = f.default.imageLeft,
        n[i.IMAGE_RIGHT] = f.default.imageRight,
        n[i.IMAGE_BOTTOM] = f.default.imageBottom,
        n);
        function b(e) {
            var t, r = e.className, n = e.innerClassName, a = e.imgSrc, c = e.imgAlt, s = e.imgClassName, d = e.title, p = e.subtitle, y = e.layout, b = e.headline, _ = o.useRef(null), E = v(o.useState(!1), 2), O = E[0], R = E[1];
            o.useEffect((function() {
                if (!O) {
                    e();
                    window.addEventListener("scroll", e);
                    window.addEventListener("resize", e);
                    return function() {
                        window.removeEventListener("scroll", e);
                        window.removeEventListener("resize", e)
                    }
                }
                function e() {
                    var e = _.current.getBoundingClientRect().top <= .8 * window.innerHeight;
                    R(e)
                }
            }
            ), [O]);
            return o.createElement(u.Grid, {
                ref: _,
                className: r
            }, m(u.Row, {
                className: (0,
                l.default)(f.default.container, g[y], n, (t = {},
                t[f.default.visible] = O,
                t))
            }, void 0, y !== i.IMAGE_BOTTOM ? m("img", {
                className: (0,
                l.default)(f.default.image, s),
                alt: c,
                src: a
            }) : null, m("div", {
                className: f.default.description
            }, void 0, m(h, {
                title: d,
                subtitle: p,
                headline: b
            })), y === i.IMAGE_BOTTOM ? m("img", {
                className: (0,
                l.default)(f.default.image, s),
                alt: c,
                src: a
            }) : null))
        }
        b.displayName = "FeatureTile"
    },
    3036: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = E;
        var n, a = m(r(1)), i = v(r(19)), o = r(1903), l = m(r(448)), u = r(108), c = r(166), s = v(r(51)), f = v(r(3037)), d = v(r(16)), p = v(r(1791));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function y(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (y = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function m(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = y(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }
        function h(e, t, r, a) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = a;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function g(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == r)
                    return;
                var n, a, i = [], o = !0, l = !1;
                try {
                    for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                        i.push(n.value);
                        if (t && i.length === t)
                            break
                    }
                } catch (e) {
                    l = !0;
                    a = e
                } finally {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return i
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return b(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return b(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var _ = h(f.default, {});
        function E() {
            var e, t = g(a.useState(!0), 2), n = t[0], f = t[1];
            return h(o.VisibilitySensor, {
                onChange: f
            }, void 0, h(u.Grid, {
                className: p.default.heroBackground
            }, void 0, h(l.default, {
                colorScheme: l.HeaderColorSchemes.WHITE
            }), h(u.Row, {
                className: p.default.heroContainer
            }, void 0, h("div", {
                className: p.default.heroBody
            }, void 0, h("div", {
                className: p.default.heroText
            }, void 0, h(c.H1, {}, void 0, d.default.Messages.Landing.REBRAND_HERO_TITLE), h(s.default, {
                className: p.default.heroSubtitle
            }, void 0, d.default.Messages.Landing.REBRAND_HERO_SUBTITLE)), _)), h("div", {
                "aria-hidden": !0,
                className: (0,
                i.default)(p.default.heroImageContainer, (e = {},
                e[p.default.animationPaused] = !n,
                e))
            }, void 0, h("img", {
                src: r(3044),
                className: (0,
                i.default)(p.default.backgroundImages, p.default.clouds),
                alt: ""
            }), h("img", {
                src: r(3045),
                className: p.default.foregroundLeft,
                alt: ""
            }), h("img", {
                src: r(3046),
                className: p.default.foregroundRight,
                alt: ""
            }))))
        }
        E.displayName = "Hero"
    },
    3037: function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = F;
            var n, a = A(r(1)), i = R(r(19)), o = R(r(115)), l = R(r(117)), u = r(23), c = R(r(53)), s = R(r(3038)), f = R(r(169)), d = R(r(181)), p = r(118), v = R(r(452)), y = R(r(1896)), m = A(r(64)), h = R(r(3042)), g = A(r(51)), b = R(r(31)), _ = r(10), E = R(r(16)), O = R(r(1790));
            function R(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function N(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap
                  , r = new WeakMap;
                return (N = function(e) {
                    return e ? r : t
                }
                )(e)
            }
            function A(e, t) {
                if (!t && e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var r = N(t);
                if (r && r.has(e))
                    return r.get(e);
                var n = {}
                  , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                    }
                n.default = e;
                r && r.set(e, n);
                return n
            }
            function T() {
                T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ;
                return T.apply(this, arguments)
            }
            function w(e, t, r, n, a, i, o) {
                try {
                    var l = e[i](o)
                      , u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, a)
            }
            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r)
                        return;
                    var n, a, i = [], o = !0, l = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                            i.push(n.value);
                            if (t && i.length === t)
                                break
                        }
                    } catch (e) {
                        l = !0;
                        a = e
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (l)
                                throw a
                        }
                    }
                    return i
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            function S(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps
                  , o = arguments.length - 3;
                if (t || 0 === o || (t = {
                    children: void 0
                }),
                1 === o)
                    t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++)
                        l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i)
                        void 0 === t[c] && (t[c] = i[c]);
                else
                    t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function I() {
                return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + _.Endpoints.APP
            }
            function L() {
                window.location.href = "" + _.AppRoutes.WELCOME
            }
            function C(e) {
                var t, r = e.onOpenInBrowser, n = (0,
                d.default)();
                return a.createElement(a.Fragment, null, S(f.default, {
                    className: (0,
                    i.default)(O.default.marginTop24, (t = {},
                    t[O.default.marginRight24] = n,
                    t)),
                    color: m.ButtonColors.WHITE,
                    analyticsLocation: "Landing Hero"
                }), n ? S(m.default, {
                    className: (0,
                    i.default)("gtm-click-class-open-button", O.default.marginTop24),
                    color: m.ButtonColors.DARK,
                    onClick: r
                }, void 0, E.default.Messages.Landing.OPEN_DISCORD_IN_BROWSER) : null)
            }
            function P(e) {
                var t = e.hasAcceptedTerms
                  , r = e.setHasAcceptedTerms
                  , n = (0,
                u.useStateFromStores)([v.default], (function() {
                    return v.default.isConsentRequired
                }
                ));
                a.useEffect((function() {
                    n || r(!0)
                }
                ), [n, t, r]);
                return n ? S("div", {
                    className: O.default.termsContainer
                }, void 0, S(h.default, {
                    className: O.default.termsCheckbox,
                    id: "terms-checkbox",
                    checked: t,
                    onChange: function(e) {
                        return r(e.target.checked)
                    }
                }), S("label", {
                    htmlFor: "terms-checkbox"
                }, void 0, S(g.default, {
                    type: g.TextTypes.EXTRA_SMALL,
                    className: O.default.termsText
                }, void 0, E.default.Messages.Landing.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: _.WebRoutes.TERMS,
                    privacyURL: _.WebRoutes.PRIVACY
                })))) : S("div", {
                    className: O.default.termsContainer
                }, void 0, S(g.default, {
                    type: g.TextTypes.EXTRA_SMALL,
                    className: O.default.termsText
                }, void 0, E.default.Messages.Landing.TERMS_PRIVACY.format({
                    termsURL: _.WebRoutes.TERMS,
                    privacyURL: _.WebRoutes.PRIVACY
                })))
            }
            P.displayName = "Terms";
            var j = S("path", {
                d: "M7.99986 9L0.803711 0H15.196L7.99986 9Z",
                fill: "#FFFFFF"
            });
            function x(e) {
                var t, r = e.errors;
                if ("username"in r) {
                    var n, a;
                    t = null !== (n = null === (a = r.username._errors[0]) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown Error"
                } else
                    t = "captcha_key"in r ? null : "message"in r ? r.message : Object.keys(r).map((function(e) {
                        var t;
                        return null === (t = r[e]._errors[0]) || void 0 === t ? void 0 : t.message
                    }
                    )).filter((function(e) {
                        return null != e
                    }
                    )).join(", ");
                return null != t && "" !== t ? S("div", {
                    className: O.default.errorTooltip
                }, void 0, S("div", {
                    className: O.default.error
                }, void 0, S(g.default, {
                    type: g.TextTypes.EXTRA_SMALL
                }, void 0, t)), S("svg", {
                    width: "16",
                    height: "9",
                    viewBox: "0 0 16 9",
                    className: O.default.errorArrow
                }, void 0, j)) : null
            }
            function D() {
                var t = k(a.useState(""), 2)
                  , n = t[0]
                  , u = t[1]
                  , f = k(a.useState(!1), 2)
                  , d = f[0]
                  , p = f[1]
                  , v = k(a.useState(!1), 2)
                  , h = v[0]
                  , g = v[1]
                  , R = k(a.useState({}), 2)
                  , N = R[0]
                  , A = R[1]
                  , T = a.useCallback(function() {
                    var t, r = (t = regeneratorRuntime.mark((function t(r) {
                        var a, i, u, s, f, p, v;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (null != n && "" !== n) {
                                        t.next = 3;
                                        break
                                    }
                                    A({
                                        message: E.default.Messages.Landing.USERNAME_FIELD_REQUIRED
                                    });
                                    return t.abrupt("return");
                                case 3:
                                    if (d) {
                                        t.next = 6;
                                        break
                                    }
                                    A({
                                        message: E.default.Messages.Landing.TERMS_PRIVACY_OPT_IN_TOOLTIP
                                    });
                                    return t.abrupt("return");
                                case 6:
                                    if (!h) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    g(!0);
                                    t.prev = 9;
                                    t.next = 12;
                                    return o.default.post(_.Endpoints.REGISTER).send({
                                        consent: d,
                                        fingerprint: c.default.get("fingerprint"),
                                        username: n,
                                        captcha_key: r
                                    });
                                case 12:
                                    if ((a = t.sent).ok) {
                                        l.default.setToken(a.body.token);
                                        b.default.trackEventExternally("CompleteRegistration");
                                        e.nextTick(L)
                                    } else {
                                        g(!1);
                                        A(null !== (i = a.body.errors) && void 0 !== i ? i : a.body)
                                    }
                                    t.next = 20;
                                    break;
                                case 16:
                                    t.prev = 16;
                                    t.t0 = t.catch(9);
                                    g(!1);
                                    A(null !== (u = null !== (s = null === (f = t.t0.response) || void 0 === f || null === (p = f.body) || void 0 === p ? void 0 : p.errors) && void 0 !== s ? s : null === (v = t.t0.response) || void 0 === v ? void 0 : v.body) && void 0 !== u ? u : {
                                        message: t.t0.message
                                    });
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[9, 16]])
                    }
                    )),
                    function() {
                        var e = this
                          , r = arguments;
                        return new Promise((function(n, a) {
                            var i = t.apply(e, r);
                            function o(e) {
                                w(i, n, a, o, l, "next", e)
                            }
                            function l(e) {
                                w(i, n, a, o, l, "throw", e)
                            }
                            o(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return r.apply(this, arguments)
                    }
                }(), [n, h, d])
                  , M = a.useCallback((function(e) {
                    e.preventDefault();
                    T()
                }
                ), [T]);
                return "captcha_key"in N ? S("div", {
                    className: O.default.formContainer
                }, void 0, S(s.default, {
                    sitekey: null != N.captcha_sitekey && "" !== N.captcha_sitekey ? N.captcha_sitekey : void 0,
                    captchaService: null != N.captcha_service && "" !== N.captcha_service ? N.captcha_service : void 0,
                    onVerify: function(e) {
                        T(e)
                    }
                })) : S("div", {
                    className: O.default.formContainer
                }, void 0, S("form", {
                    className: O.default.form,
                    onSubmit: M
                }, void 0, S(x, {
                    errors: N
                }), S("input", {
                    type: "text",
                    className: O.default.username,
                    placeholder: E.default.Messages.Common.ENTER_USERNAME,
                    onChange: function(e) {
                        return u(e.target.value)
                    },
                    value: n,
                    autoFocus: !0
                }), S(m.default, {
                    className: (0,
                    i.default)("gtm-click-class-register-button", O.default.tryButton),
                    disabled: h,
                    onClick: M,
                    title: E.default.Messages.Common.SUBMIT
                }, void 0, h ? S(y.default, {
                    itemClassName: O.default.spinnerItem,
                    className: O.default.spinner
                }) : S("img", {
                    className: O.default.arrow,
                    src: r(3043),
                    alt: ""
                }))), S(P, {
                    hasAcceptedTerms: d,
                    setHasAcceptedTerms: p
                }))
            }
            D.displayName = "TryDiscord";
            function B(e) {
                var t = e.setShowUnclaimedInput
                  , r = k(a.useState(null), 2)
                  , n = r[0]
                  , o = r[1]
                  , u = (0,
                p.useMwebMarketingSiteRegistrationExperiment)()
                  , c = u.isMarketingSiteRegExperimentEnabled
                  , s = u.bucket;
                a.useEffect((function() {
                    o(l.default.getToken())
                }
                ), []);
                var d = a.useCallback((function() {
                    b.default.track(_.WebAnalyticsEvents.CLICK_LANDING_CTA, T({
                        buttonstate: null != n ? "has session" : "no session"
                    }, b.default.getStaticExperimentAttributes()));
                    if (null != n) {
                        b.default.trackOutboundLink(I());
                        window.location.href = I()
                    } else {
                        t(!0);
                        b.default.trackEventExternally("BeginRegistration")
                    }
                }
                ), [t, n])
                  , v = a.useCallback((function() {
                    b.default.track(_.WebAnalyticsEvents.CLICK_LANDING_CTA, T({
                        buttonstate: null != n ? "has session" : "no session"
                    }, b.default.getStaticExperimentAttributes()));
                    b.default.trackEventExternally("BeginRegistration");
                    (0,
                    p.setFromMarketingStorageKey)();
                    window.location.href = _.AppRoutes.REGISTER
                }
                ), [n]);
                return S("div", {
                    className: O.default.ctaContainer
                }, void 0, c ? null : S(C, {
                    onOpenInBrowser: d
                }), c && s === _.ExperimentBuckets.TREATMENT_1 ? a.createElement(a.Fragment, null, S(m.default, {
                    className: (0,
                    i.default)(O.default.marginTop24, O.default.marginRight24),
                    color: m.ButtonColors.WHITE,
                    onClick: v
                }, void 0, E.default.Messages.Landing.SIGN_UP_FOR_DISCORD), S(f.default, {
                    className: (0,
                    i.default)("gtm-click-class-open-button", O.default.marginTop24),
                    color: m.ButtonColors.DARK,
                    analyticsLocation: "Landing Hero"
                })) : null, c && s === _.ExperimentBuckets.TREATMENT_2 ? S(f.default, {
                    className: (0,
                    i.default)(O.default.marginTop24),
                    color: m.ButtonColors.DARK,
                    analyticsLocation: "Landing Hero"
                }) : null, c && s === _.ExperimentBuckets.TREATMENT_3 ? S(m.default, {
                    className: (0,
                    i.default)(O.default.marginTop24, O.default.marginRight24),
                    color: m.ButtonColors.WHITE,
                    onClick: v
                }, void 0, E.default.Messages.Landing.SIGN_UP_TO_DOWNLOAD) : null)
            }
            B.displayName = "DownloadOrTry";
            var G = S(D, {});
            function F() {
                var e = k(a.useState(!1), 2)
                  , t = e[0]
                  , r = e[1];
                return t ? G : S(B, {
                    setShowUnclaimedInput: r
                })
            }
            F.displayName = "CTA"
        }
        ).call(this, r(84))
    },
    3038: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = s(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1))
          , a = c(r(3039))
          , i = r(471)
          , o = c(r(3040))
          , l = r(10)
          , u = ["captchaService", "sitekey", "className"];
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (s = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f() {
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ;
            return f.apply(this, arguments)
        }
        var d = function(e) {
            var t = e.captchaService
              , r = void 0 === t ? i.CaptchaTypes.RECAPTCHA : t
              , c = e.sitekey
              , s = e.className
              , d = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) {
                    r = i[n];
                    t.indexOf(r) >= 0 || (a[r] = e[r])
                }
                return a
            }(e, u);
            return null != c && "" !== c && r === i.CaptchaTypes.RECAPTCHA ? n.createElement(o.default, f({
                sitekey: c,
                className: s
            }, d)) : null != c && "" !== c && r === i.CaptchaTypes.HCAPTCHA ? n.createElement(a.default, f({
                sitekey: c
            }, d)) : n.createElement(o.default, f({
                sitekey: l.RECAPTCHA_SITE_KEY,
                className: s
            }, d))
        };
        d.displayName = "Captcha";
        var p = d;
        t.default = p
    },
    3039: function(e, t, r) {
        "use strict";
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
          , a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value"in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                r && e(t.prototype, r);
                n && e(t, n);
                return t
            }
        }();
        var i = r(1)
          , o = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"
          , l = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, t = "", r = e; r--; )
                t += o[64 * Math.random() | 0];
            return t
        }
          , u = []
          , c = !1
          , s = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e);
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                  , n = e.id
                  , a = void 0 === n ? null : n;
                r.renderCaptcha = r.renderCaptcha.bind(r);
                r.resetCaptcha = r.resetCaptcha.bind(r);
                r.removeCaptcha = r.removeCaptcha.bind(r);
                r.handleOnLoad = r.handleOnLoad.bind(r);
                r.handleSubmit = r.handleSubmit.bind(r);
                r.handleExpire = r.handleExpire.bind(r);
                r.handleError = r.handleError.bind(r);
                var i = "undefined" != typeof hcaptcha;
                i || (c = !1);
                r.state = {
                    isApiReady: i,
                    isRemoved: !1,
                    elementId: a || "hcaptcha-" + l(),
                    captchaId: ""
                };
                return r
            }
            a(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.languageOverride
                      , r = e.reCaptchaCompat
                      , n = this.state
                      , a = n.isApiReady;
                    n.elementId;
                    if (a)
                        this.renderCaptcha();
                    else {
                        if (!c) {
                            c = !0;
                            !function(e, t) {
                                window.hcaptchaOnLoad = function() {
                                    u = u.filter((function(e) {
                                        e();
                                        return !1
                                    }
                                    ))
                                }
                                ;
                                var r = document.createElement("script");
                                r.src = "https://hcaptcha.com/1/api.js?render=explicit&onload=hcaptchaOnLoad";
                                r.async = !0;
                                e && (r.src += "&hl=" + e);
                                !1 === t && (r.src += "&recaptchacompat=off");
                                document.head.appendChild(r)
                            }(t, r)
                        }
                        u.push(this.handleOnLoad)
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.state
                      , t = e.isApiReady
                      , r = e.isRemoved
                      , n = e.captchaId;
                    if (t && !r) {
                        hcaptcha.reset(n);
                        hcaptcha.remove(n)
                    }
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this;
                    this.props.endpoint;
                    if (!["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every((function(r) {
                        return e[r] === t.props[r]
                    }
                    ))) {
                        this.removeCaptcha();
                        this.renderCaptcha()
                    }
                }
            }, {
                key: "renderCaptcha",
                value: function() {
                    var e = this.state
                      , t = e.isApiReady
                      , r = e.elementId;
                    if (t) {
                        var a = hcaptcha.render(document.getElementById(r), n({}, this.props, {
                            "error-callback": this.handleError,
                            "expired-callback": this.handleExpire,
                            callback: this.handleSubmit
                        }));
                        this.setState({
                            isRemoved: !1,
                            captchaId: a
                        })
                    }
                }
            }, {
                key: "resetCaptcha",
                value: function() {
                    var e = this.state
                      , t = e.isApiReady
                      , r = e.isRemoved
                      , n = e.captchaId;
                    t && !r && hcaptcha.reset(n)
                }
            }, {
                key: "removeCaptcha",
                value: function() {
                    var e = this.state
                      , t = e.isApiReady
                      , r = e.isRemoved
                      , n = e.captchaId;
                    t && !r && this.setState({
                        isRemoved: !0
                    }, (function() {
                        hcaptcha.remove(n)
                    }
                    ))
                }
            }, {
                key: "handleOnLoad",
                value: function() {
                    var e = this;
                    this.setState({
                        isApiReady: !0
                    }, (function() {
                        e.renderCaptcha()
                    }
                    ))
                }
            }, {
                key: "handleSubmit",
                value: function(e) {
                    var t = this.props.onVerify
                      , r = this.state
                      , n = r.isRemoved
                      , a = r.captchaId;
                    if ("undefined" != typeof hcaptcha && !n) {
                        t(hcaptcha.getResponse(a))
                    }
                }
            }, {
                key: "handleExpire",
                value: function() {
                    var e = this.props.onExpire
                      , t = this.state
                      , r = t.isApiReady
                      , n = t.isRemoved
                      , a = t.captchaId;
                    if (r && !n) {
                        hcaptcha.reset(a);
                        e && e()
                    }
                }
            }, {
                key: "handleError",
                value: function(e) {
                    var t = this.props.onError
                      , r = this.state
                      , n = r.isApiReady
                      , a = r.isRemoved
                      , i = r.captchaId;
                    if (n && !a) {
                        hcaptcha.reset(i);
                        t && t(e)
                    }
                }
            }, {
                key: "execute",
                value: function() {
                    var e = this.state
                      , t = e.isApiReady
                      , r = e.isRemoved
                      , n = e.captchaId;
                    t && !r && hcaptcha.execute(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.elementId;
                    return i.createElement("div", {
                        id: e
                    })
                }
            }]);
            return t
        }(i.Component);
        e.exports = s
    },
    3040: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n, a = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = s(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), i = c(r(19)), o = c(r(3041)), l = c(r(1788)), u = ["className", "error", "sitekey"];
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (s = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f(e, t, r, a) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = a;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function d() {
            d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ;
            return d.apply(this, arguments)
        }
        t.default = function(e) {
            var t = e.className
              , r = e.error
              , n = e.sitekey
              , c = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) {
                    r = i[n];
                    t.indexOf(r) >= 0 || (a[r] = e[r])
                }
                return a
            }(e, u);
            return f("div", {
                className: (0,
                i.default)(null != r ? l.default.recaptchaError : null, t)
            }, void 0, a.createElement(o.default, d({
                sitekey: n
            }, c)))
        }
    },
    3041: function(e, t, r) {
        (function(t) {
            n = function(e) {
                return function(e) {
                    var t = {};
                    function r(n) {
                        if (t[n])
                            return t[n].exports;
                        var a = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        e[n].call(a.exports, a, a.exports, r);
                        a.l = !0;
                        return a.exports
                    }
                    r.m = e;
                    r.c = t;
                    r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }
                    ;
                    r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        });
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ;
                    r.t = function(e, t) {
                        1 & t && (e = r(e));
                        if (8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var n = Object.create(null);
                        r.r(n);
                        Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        });
                        if (2 & t && "string" != typeof e)
                            for (var a in e)
                                r.d(n, a, function(t) {
                                    return e[t]
                                }
                                .bind(null, a));
                        return n
                    }
                    ;
                    r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        r.d(t, "a", t);
                        return t
                    }
                    ;
                    r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ;
                    r.p = "";
                    return r(r.s = 2)
                }([function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return function(e) {
                            return Array.from(document.scripts).filter((function(t) {
                                return t.src.indexOf(e) > -1
                            }
                            ))
                        }(e).length > 0
                    };
                    t.isAnyScriptPresent = function(e) {
                        return e.reduce((function(e, t) {
                            return e || n(t)
                        }
                        ), !1)
                    }
                    ,
                    t.injectScript = function(e) {
                        var t = document.createElement("script");
                        t.async = !0;
                        t.defer = !0;
                        t.src = e;
                        document.head && document.head.appendChild(t)
                    }
                }
                , function(t, r) {
                    t.exports = e
                }
                , function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, a = r(1), i = (n = a) && n.__esModule ? n : {
                        default: n
                    }, o = r(0), l = ["https://google.com/recaptcha", "https://recaptcha.net/recaptcha", "https://www.gstatic.com/recaptcha"], u = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            });
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e);
                        function t(e) {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var r = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            r.container = null;
                            r._isAvailable = function() {
                                return Boolean(window && window.grecaptcha && window.grecaptcha.ready)
                            }
                            ;
                            r._inject = function() {
                                r.props.inject && !(0,
                                o.isAnyScriptPresent)(l) && (0,
                                o.injectScript)("https://recaptcha.net/recaptcha/api.js?render=explicit")
                            }
                            ;
                            r._prepare = function() {
                                var e = r.props
                                  , t = e.explicit
                                  , n = e.onLoad;
                                window.grecaptcha.ready((function() {
                                    r.setState({
                                        ready: !0
                                    }, (function() {
                                        t || r.renderExplicitly();
                                        n && n()
                                    }
                                    ))
                                }
                                ))
                            }
                            ;
                            r._renderRecaptcha = function(e, t) {
                                return window.grecaptcha.render(e, t)
                            }
                            ;
                            r._resetRecaptcha = function() {
                                return window.grecaptcha.reset(r.state.instanceId)
                            }
                            ;
                            r._executeRecaptcha = function() {
                                return window.grecaptcha.execute(r.state.instanceId)
                            }
                            ;
                            r._stopTimer = function() {
                                r.state.timer && clearInterval(r.state.timer)
                            }
                            ;
                            r.componentDidMount = function() {
                                r._inject();
                                if (r._isAvailable())
                                    r._prepare();
                                else {
                                    var e = setInterval((function() {
                                        if (r._isAvailable()) {
                                            r._prepare();
                                            r._stopTimer()
                                        }
                                    }
                                    ), 500);
                                    r.setState({
                                        timer: e
                                    })
                                }
                            }
                            ;
                            r.shouldComponentUpdate = function() {
                                return !r.state.rendered
                            }
                            ;
                            r.componentWillUnmount = function() {
                                r._stopTimer();
                                r.state.rendered && r._resetRecaptcha()
                            }
                            ;
                            r.renderExplicitly = function() {
                                return new Promise((function(e, t) {
                                    if (r.state.rendered)
                                        return t("This recaptcha instance has been already rendered.");
                                    if (!r.state.ready || !r.container)
                                        return t("Recaptcha is not ready for rendering yet.");
                                    var n = r._renderRecaptcha(r.container, {
                                        sitekey: r.props.sitekey,
                                        theme: r.state.invisible ? null : r.props.theme,
                                        size: r.props.size,
                                        badge: r.state.invisible ? r.props.badge : null,
                                        tabindex: r.props.tabindex,
                                        callback: r.props.onVerify,
                                        "expired-callback": r.props.onExpire,
                                        "error-callback": r.props.onError,
                                        isolated: r.state.invisible ? r.props.isolated : null,
                                        hl: r.state.invisible ? null : r.props.hl
                                    });
                                    r.setState({
                                        instanceId: n,
                                        rendered: !0
                                    }, (function() {
                                        r.props.onRender && r.props.onRender();
                                        e()
                                    }
                                    ))
                                }
                                ))
                            }
                            ;
                            r.reset = function() {
                                return new Promise((function(e, t) {
                                    if (r.state.rendered) {
                                        r._resetRecaptcha();
                                        return e()
                                    }
                                    t("This recaptcha instance did not render yet.")
                                }
                                ))
                            }
                            ;
                            r.execute = function() {
                                return new Promise((function(e, t) {
                                    if (!r.state.invisible)
                                        return t("Manual execution is only available for invisible size.");
                                    if (r.state.rendered) {
                                        r._executeRecaptcha();
                                        e()
                                    }
                                    return t("This recaptcha instance did not render yet.")
                                }
                                ))
                            }
                            ;
                            r.render = function() {
                                return i.default.createElement("div", {
                                    id: r.props.id,
                                    className: r.props.className,
                                    ref: function(e) {
                                        return r.container = e
                                    }
                                })
                            }
                            ;
                            r.state = {
                                instanceId: null,
                                ready: !1,
                                rendered: !1,
                                invisible: "invisible" === r.props.size,
                                timer: null
                            };
                            return r
                        }
                        return t
                    }(a.Component);
                    u.defaultProps = {
                        id: "",
                        className: "g-recaptcha",
                        theme: "light",
                        size: "normal",
                        badge: "bottomright",
                        tabindex: 0,
                        explicit: !1,
                        inject: !0,
                        isolated: !1,
                        hl: ""
                    };
                    t.default = u
                }
                ]).default
            }
            ,
            e.exports = n(r(1));
            var n
        }
        ).call(this, r(13))
    },
    3042: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.CheckboxTypes = void 0;
        t.default = b;
        var n, a, i, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = d(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), l = f(r(19)), u = f(r(453)), c = f(r(1789)), s = ["id", "type", "className", "checked", "onChange"];
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function d(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (d = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function p(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = n;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function v() {
            v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ;
            return v.apply(this, arguments)
        }
        t.CheckboxTypes = i;
        !function(e) {
            e[e.BRAND_LIGHT = 0] = "BRAND_LIGHT"
        }(i || (t.CheckboxTypes = i = {}));
        var y = ((n = {})[i.BRAND_LIGHT] = c.default.brandLight,
        n)
          , m = p("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, void 0, p("path", {
            d: "M5.95745 14L0 9L1.78723 6.33333L5.3617 9.33333L11.617 0L14 2L5.95745 14Z",
            fill: "#7289DA"
        }));
        function h() {
            return m
        }
        h.displayName = "Checkmark";
        var g = p(h, {});
        function b(e) {
            var t = e.id
              , r = e.type
              , n = void 0 === r ? i.BRAND_LIGHT : r
              , a = e.className
              , f = e.checked
              , d = e.onChange
              , m = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) {
                    r = i[n];
                    t.indexOf(r) >= 0 || (a[r] = e[r])
                }
                return a
            }(e, s)
              , h = o.useRef(null)
              , b = o.useCallback((function() {
                var e;
                null === (e = h.current) || void 0 === e || e.click()
            }
            ), [h]);
            return p(u.default, {
                className: (0,
                l.default)(c.default.container, y[n], a),
                onClick: b
            }, void 0, o.createElement("input", v({
                id: t,
                type: "checkbox",
                ref: h,
                className: c.default.input
            }, m, {
                checked: f,
                onChange: d
            })), p("div", {
                className: c.default.checkbox
            }, void 0, f && g))
        }
        b.displayName = "Checkbox"
    },
    3043: function(e, t, r) {
        e.exports = r.p + "cd784686ed3f8081f9ffd2ebca329a5b.svg"
    },
    3044: function(e, t, r) {
        e.exports = r.p + "e6d57714479874c665b36c7adee76b1d.svg"
    },
    3045: function(e, t, r) {
        e.exports = r.p + "8a8375ab7908384e1fd6efe408284203.svg"
    },
    3046: function(e, t, r) {
        e.exports = r.p + "c40c84ca18d84633a9d86b4046a91437.svg"
    },
    515: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = M;
        var n, a = R(r(1)), i = r(465), o = E(r(446)), l = r(23), u = E(r(116)), c = r(82), s = R(r(3035)), f = E(r(449)), d = E(r(447)), p = E(r(47)), v = r(108), y = r(167), m = E(r(2157)), h = E(r(3036)), g = r(10), b = E(r(16)), _ = E(r(1792));
        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function O(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (O = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function R(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = O(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }
        function N(e, t, r, a) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps
              , o = arguments.length - 3;
            if (t || 0 === o || (t = {
                children: void 0
            }),
            1 === o)
                t.children = a;
            else if (o > 1) {
                for (var l = new Array(o), u = 0; u < o; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && i)
                for (var c in i)
                    void 0 === t[c] && (t[c] = i[c]);
            else
                t || (t = i || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function A() {
            return N("div", {}, void 0, N(s.default, {
                imgSrc: c.Images.REBRAND_LANDING_REFRESH_INVITE_ONLY,
                imgClassName: _.default.featureImage,
                imgAlt: b.default.Messages.Landing.REBRAND_FEATURE_INVITE_ONLY_IMG_ALT,
                title: b.default.Messages.Landing.REBRAND_FEATURE_INVITE_ONLY_TITLE,
                subtitle: b.default.Messages.Landing.REBRAND_FEATURE_INVITE_ONLY_BODY,
                layout: s.FeatureTileLayout.IMAGE_LEFT
            }), N(s.default, {
                className: _.default.greyBackground,
                imgSrc: c.Images.REBRAND_LANDING_REFRESH_HANGOUT,
                imgClassName: _.default.featureImage,
                imgAlt: b.default.Messages.Landing.REBRAND_FEATURE_HANGOUT_IMG_ALT,
                title: b.default.Messages.Landing.REBRAND_FEATURE_HANGOUT_TITLE,
                subtitle: b.default.Messages.Landing.REBRAND_FEATURE_HANGOUT_BODY,
                layout: s.FeatureTileLayout.IMAGE_RIGHT
            }), N(s.default, {
                imgSrc: c.Images.REBRAND_LANDING_REFRESH_BIG_GROUPS,
                imgClassName: _.default.featureImage,
                imgAlt: b.default.Messages.Landing.REBRAND_FEATURE_BIG_GROUPS_IMG_ALT,
                title: b.default.Messages.Landing.REBRAND_FEATURE_BIG_GROUPS_TITLE,
                subtitle: b.default.Messages.Landing.REBRAND_FEATURE_BIG_GROUPS_BODY,
                layout: s.FeatureTileLayout.IMAGE_LEFT
            }), N(s.default, {
                className: _.default.greyBackground,
                innerClassName: _.default.lastFeatureTile,
                imgSrc: c.Images.REBRAND_LANDING_REFRESH_RELIABLE,
                imgAlt: b.default.Messages.Landing.REBRAND_FEATURE_RELIABLE_IMG_ALT,
                title: b.default.Messages.Landing.REBRAND_FEATURE_RELIABLE_TITLE,
                subtitle: b.default.Messages.Landing.REBRAND_FEATURE_RELIABLE_BODY,
                layout: s.FeatureTileLayout.IMAGE_BOTTOM,
                headline: !0
            }), N(v.Grid, {
                className: _.default.greyBackground
            }, void 0, N(m.default, {
                className: _.default.cta,
                analyticsLocation: "Landing Bottom CTA"
            })))
        }
        A.displayName = "Content";
        var T = N(h.default, {})
          , w = N(A, {})
          , k = N(f.default, {});
        function M(e) {
            var t = e.ottEventType
              , r = (0,
            l.useStateFromStores)([p.default], (function() {
                return p.default.fingerprint
            }
            ));
            a.useEffect((function() {
                if (null != t && null != r) {
                    var e = {
                        type: t
                    }
                      , n = (0,
                    i.parse)(location.search);
                    null != n.utm_source && "" !== n.utm_source && (e.utm_source = n.utm_source);
                    null != n.utm_medium && "" !== n.utm_medium && (e.utm_medium = n.utm_medium);
                    u.default.post({
                        url: g.Endpoints.TRACK_OTT,
                        body: e
                    })
                }
            }
            ), [r, t]);
            return N(d.default, {}, void 0, a.createElement(o.default, (0,
            y.getMetadataRefresh)(b.default.Messages.Landing)), T, w, k)
        }
        M.displayName = "Landing"
    }
}]);
//# sourceMappingURL=20b6a2bab21eadee8462.js.map
