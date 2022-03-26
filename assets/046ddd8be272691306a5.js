(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([[24], {
    1918: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = o(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                }
            n.default = e;
            r && r.set(e, n)
        }(r(1));
        function o(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (o = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function a(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , u = arguments.length - 3;
            if (t || 0 === u || (t = {
                children: void 0
            }),
            1 === u)
                t.children = o;
            else if (u > 1) {
                for (var i = new Array(u), l = 0; l < u; l++)
                    i[l] = arguments[l + 3];
                t.children = i
            }
            if (t && a)
                for (var f in a)
                    void 0 === t[f] && (t[f] = a[f]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        t.default = function(e) {
            var t = e.width
              , r = void 0 === t ? 32 : t
              , n = e.height
              , o = void 0 === n ? 32 : n
              , u = e.color
              , i = void 0 === u ? "currentColor" : u;
            return a("svg", {
                width: r,
                height: o,
                viewBox: "0 0 32 32",
                fill: "none",
                className: e.className
            }, void 0, a("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z",
                fill: i,
                className: e.foreground
            }))
        }
    },
    1920: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            var t, r = (i = n.useState(null !== (t = window.innerWidth) && void 0 !== t ? t : 1080),
            l = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(i) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], u = !0, i = !1;
                    try {
                        for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                            a.push(n.value);
                            if (t && a.length === t)
                                break
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                    return a
                }
            }(i, l) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                }
            }(i, l) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), o = r[0], u = r[1];
            var i, l;
            n.useEffect((function() {
                function t() {
                    var t = Math.min(window.innerWidth, e.current.getBoundingClientRect().width);
                    u(t)
                }
                t();
                window.addEventListener("resize", t);
                return function() {
                    return window.removeEventListener("resize", t)
                }
            }
            ), [e]);
            return o
        }
        ;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = o(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1));
        function o(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (o = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
    },
    2084: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = h;
        var n, o = function(e, t) {
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
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), a = c(r(19)), u = r(170), i = c(r(1920)), l = c(r(1685)), f = ["className", "items", "renderItem", "currentIndex", "itemWidth", "children", "offsetX"];
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
        function p(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , u = arguments.length - 3;
            if (t || 0 === u || (t = {
                children: void 0
            }),
            1 === u)
                t.children = o;
            else if (u > 1) {
                for (var i = new Array(u), l = 0; l < u; l++)
                    i[l] = arguments[l + 3];
                t.children = i
            }
            if (t && a)
                for (var f in a)
                    void 0 === t[f] && (t[f] = a[f]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function v(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == r)
                    return;
                var n, o, a = [], u = !0, i = !1;
                try {
                    for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                        a.push(n.value);
                        if (t && a.length === t)
                            break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        u || null == r.return || r.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return a
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
        function h(e) {
            var t = e.className
              , r = e.items
              , n = e.renderItem
              , c = e.currentIndex
              , s = e.itemWidth
              , y = e.children
              , h = e.offsetX
              , m = void 0 === h ? 0 : h
              , b = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++) {
                    r = a[n];
                    t.indexOf(r) >= 0 || (o[r] = e[r])
                }
                return o
            }(e, f)
              , w = o.useRef(null)
              , g = (0,
            i.default)(w)
              , O = v(o.useState(0), 2)
              , S = O[0]
              , M = O[1];
            o.useEffect((function() {
                M(-c * s - s / 2 + g / 2 + m)
            }
            ), [c, s, g, m]);
            var _ = (0,
            u.useSpring)({
                transform: "translateX(" + S + "px)"
            });
            return o.createElement("div", d({
                ref: w,
                className: (0,
                a.default)(l.default.container, t)
            }, b), p(u.animated.div, {
                className: l.default.itemContainer,
                style: _
            }, void 0, r.map((function(e, t) {
                return p("div", {
                    className: l.default.item,
                    style: {
                        width: s
                    }
                }, t, n(e))
            }
            ))), y)
        }
        h.displayName = "Carousel"
    },
    2085: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = v;
        var n, o = function(e, t) {
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
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), a = r(2086), u = c(r(1918)), i = c(r(1920)), l = c(r(16)), f = c(r(1686));
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
        function p(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , u = arguments.length - 3;
            if (t || 0 === u || (t = {
                children: void 0
            }),
            1 === u)
                t.children = o;
            else if (u > 1) {
                for (var i = new Array(u), l = 0; l < u; l++)
                    i[l] = arguments[l + 3];
                t.children = i
            }
            if (t && a)
                for (var f in a)
                    void 0 === t[f] && (t[f] = a[f]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function v(e) {
            var t = e.items
              , r = e.currentIndex
              , n = e.setCurrentIndex
              , c = e.setOffsetX
              , s = o.useRef(null)
              , v = (0,
            i.default)(s);
            function y() {
                n(0 === r ? t.length - 1 : r - 1)
            }
            function h() {
                var e = r === t.length - 1;
                n(e ? 0 : r + 1)
            }
            var m = (0,
            a.useSwipeable)({
                onSwiping: function(e) {
                    c(-e.deltaX)
                },
                onSwipedLeft: function() {
                    return h()
                },
                onSwipedRight: function() {
                    return y()
                },
                onSwiped: function() {
                    return c(0)
                }
            });
            return o.createElement("div", {
                className: f.default.container,
                ref: s,
                onClick: function(e) {
                    var t = e.clientX / v;
                    t <= .4 ? y() : t >= .6 && h()
                }
            }, o.createElement("div", d({
                className: f.default.innerContainer
            }, m), p("div", {
                className: f.default.arrowLeftBackground,
                onClick: y,
                "aria-label": l.default.Messages.Common.PREVIOUS_IMAGE
            }, void 0, p(u.default, {
                className: f.default.arrowLeft
            })), p("div", {
                className: f.default.arrowRightBackground,
                onClick: h,
                "aria-label": l.default.Messages.Common.NEXT_IMAGE
            }, void 0, p(u.default, {
                className: f.default.arrowRight
            }))))
        }
        v.displayName = "CarouselArrows"
    },
    2086: function(e, t, r) {
        "use strict";
        r.r(t);
        r.d(t, "DOWN", (function() {
            return p
        }
        ));
        r.d(t, "LEFT", (function() {
            return c
        }
        ));
        r.d(t, "RIGHT", (function() {
            return s
        }
        ));
        r.d(t, "Swipeable", (function() {
            return g
        }
        ));
        r.d(t, "UP", (function() {
            return d
        }
        ));
        r.d(t, "useSwipeable", (function() {
            return w
        }
        ));
        var n = r(1)
          , o = r.n(n)
          , a = r(3)
          , u = r.n(a);
        function i() {
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ;
            return i.apply(this, arguments)
        }
        var l = {
            preventDefaultTouchmoveEvent: !1,
            delta: 10,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0
        }
          , f = {
            xy: [0, 0],
            swiping: !1,
            eventData: void 0,
            start: void 0
        }
          , c = "Left"
          , s = "Right"
          , d = "Up"
          , p = "Down"
          , v = "mousemove"
          , y = "mouseup";
        function h(e, t) {
            if (0 === t)
                return e;
            var r = Math.PI / 180 * t;
            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)]
        }
        function m(e, t) {
            var r = function(t) {
                t.touches && t.touches.length > 1 || e((function(e, r) {
                    if (r.trackMouse) {
                        document.addEventListener(v, n);
                        document.addEventListener(y, u)
                    }
                    var o = t.touches ? t.touches[0] : t
                      , a = h([o.clientX, o.clientY], r.rotationAngle);
                    return i({}, e, f, {
                        eventData: {
                            initial: [].concat(a),
                            first: !0
                        },
                        xy: a,
                        start: t.timeStamp || 0
                    })
                }
                ))
            }
              , n = function(t) {
                e((function(e, r) {
                    if (!e.xy[0] || !e.xy[1] || t.touches && t.touches.length > 1)
                        return e;
                    var n = t.touches ? t.touches[0] : t
                      , o = h([n.clientX, n.clientY], r.rotationAngle)
                      , a = o[0]
                      , u = o[1]
                      , l = e.xy[0] - a
                      , f = e.xy[1] - u
                      , v = Math.abs(l)
                      , y = Math.abs(f)
                      , m = (t.timeStamp || 0) - e.start
                      , b = Math.sqrt(v * v + y * y) / (m || 1);
                    if (v < r.delta && y < r.delta && !e.swiping)
                        return e;
                    var w = function(e, t, r, n) {
                        return e > t ? r > 0 ? c : s : n > 0 ? d : p
                    }(v, y, l, f)
                      , g = i({}, e.eventData, {
                        event: t,
                        absX: v,
                        absY: y,
                        deltaX: l,
                        deltaY: f,
                        velocity: b,
                        dir: w
                    });
                    r.onSwiping && r.onSwiping(g);
                    var O = !1;
                    (r.onSwiping || r.onSwiped || r["onSwiped" + w]) && (O = !0);
                    O && r.preventDefaultTouchmoveEvent && r.trackTouch && t.cancelable && t.preventDefault();
                    return i({}, e, {
                        eventData: i({}, g, {
                            first: !1
                        }),
                        swiping: !0
                    })
                }
                ))
            }
              , o = function(t) {
                e((function(e, r) {
                    var n;
                    if (e.swiping) {
                        n = i({}, e.eventData, {
                            event: t
                        });
                        r.onSwiped && r.onSwiped(n);
                        r["onSwiped" + n.dir] && r["onSwiped" + n.dir](n)
                    }
                    return i({}, e, f, {
                        eventData: n
                    })
                }
                ))
            }
              , a = function() {
                document.removeEventListener(v, n);
                document.removeEventListener(y, u)
            }
              , u = function(e) {
                a();
                o(e)
            }
              , l = function(e) {
                if (e && e.addEventListener) {
                    var t = [["touchstart", r], ["touchmove", n], ["touchend", o]];
                    t.forEach((function(t) {
                        var r = t[0]
                          , n = t[1];
                        return e.addEventListener(r, n)
                    }
                    ));
                    return function() {
                        return t.forEach((function(t) {
                            var r = t[0]
                              , n = t[1];
                            return e.removeEventListener(r, n)
                        }
                        ))
                    }
                }
            }
              , m = {
                ref: function(t) {
                    null !== t && e((function(e, r) {
                        if (e.el === t)
                            return e;
                        var n = {};
                        if (e.el && e.el !== t && e.cleanUpTouch) {
                            e.cleanUpTouch();
                            n.cleanUpTouch = null
                        }
                        r.trackTouch && t && (n.cleanUpTouch = l(t));
                        return i({}, e, {
                            el: t
                        }, n)
                    }
                    ))
                }
            };
            t.trackMouse && (m.onMouseDown = r);
            return [m, l]
        }
        function b(e, t, r) {
            var n = {};
            if (!t.trackTouch && e.cleanUpTouch) {
                e.cleanUpTouch();
                n.cleanUpTouch = null
            } else
                t.trackTouch && !e.cleanUpTouch && e.el && (n.cleanUpTouch = r(e.el));
            return i({}, e, n)
        }
        function w(e) {
            var t = e.trackMouse
              , r = o.a.useRef(i({}, f, {
                type: "hook"
            }))
              , n = o.a.useRef();
            n.current = i({}, l, e);
            var a = o.a.useMemo((function() {
                return m((function(e) {
                    return r.current = e(r.current, n.current)
                }
                ), {
                    trackMouse: t
                })
            }
            ), [t])
              , u = a[0]
              , c = a[1];
            r.current = b(r.current, n.current, c);
            return u
        }
        var g = function(e) {
            !function(e, t) {
                e.prototype = Object.create(t.prototype);
                e.prototype.constructor = e;
                e.__proto__ = t
            }(t, e);
            function t(t) {
                var r;
                (r = e.call(this, t) || this)._set = function(e) {
                    r.transientState = e(r.transientState, r.props)
                }
                ;
                r.transientState = i({}, f, {
                    type: "class"
                });
                return r
            }
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , r = e.style
                  , n = e.nodeName
                  , a = void 0 === n ? "div" : n
                  , u = e.innerRef
                  , l = e.children
                  , f = e.trackMouse
                  , c = m(this._set, {
                    trackMouse: f
                })
                  , s = c[0]
                  , d = c[1];
                this.transientState = b(this.transientState, this.props, d);
                var p = u ? function(e) {
                    return u(e),
                    s.ref(e)
                }
                : s.ref;
                return o.a.createElement(a, i({}, s, {
                    className: t,
                    style: r,
                    ref: p
                }), l)
            }
            ;
            return t
        }(o.a.PureComponent);
        g.propTypes = {
            onSwiped: u.a.func,
            onSwiping: u.a.func,
            onSwipedUp: u.a.func,
            onSwipedRight: u.a.func,
            onSwipedDown: u.a.func,
            onSwipedLeft: u.a.func,
            delta: u.a.number,
            preventDefaultTouchmoveEvent: u.a.bool,
            nodeName: u.a.string,
            trackMouse: u.a.bool,
            trackTouch: u.a.bool,
            innerRef: u.a.func,
            rotationAngle: u.a.number
        };
        g.defaultProps = l
    },
    2101: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = w;
        var n, o = function(e, t) {
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
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                }
            n.default = e;
            r && r.set(e, n);
            return n
        }(r(1)), a = r(82), u = s(r(2084)), i = s(r(2085)), l = s(r(1920)), f = s(r(16)), c = s(r(1702));
        function s(e) {
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
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == r)
                    return;
                var n, o, a = [], u = !0, i = !1;
                try {
                    for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                        a.push(n.value);
                        if (t && a.length === t)
                            break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        u || null == r.return || r.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return v(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return v(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function y(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , u = arguments.length - 3;
            if (t || 0 === u || (t = {
                children: void 0
            }),
            1 === u)
                t.children = o;
            else if (u > 1) {
                for (var i = new Array(u), l = 0; l < u; l++)
                    i[l] = arguments[l + 3];
                t.children = i
            }
            if (t && a)
                for (var f in a)
                    void 0 === t[f] && (t[f] = a[f]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        for (var h = [], m = 1; m <= 21; m++)
            [4, 5, 16, 20].includes(m) || h.push({
                url: a.Images["JOBS_CAROUSEL_" + m],
                retinaUrl: a.Images["JOBS_CAROUSEL_" + m + "_2X"]
            });
        function b(e) {
            return y("div", {
                className: c.default.carouselItemOuter
            }, void 0, y("div", {
                className: c.default.carouselItemContainer
            }, void 0, y("img", {
                className: c.default.carouselItemImage,
                src: e.url,
                srcSet: e.retinaUrl + " 2x",
                alt: ""
            })))
        }
        b.displayName = "CarouselItem";
        function w(e) {
            var t = e.className
              , r = p(o.useState(640), 2)
              , n = r[0]
              , a = r[1]
              , s = p(o.useState(5), 2)
              , d = s[0]
              , v = s[1]
              , m = p(o.useState(0), 2)
              , w = m[0]
              , g = m[1]
              , O = o.useRef(null)
              , S = (0,
            l.default)(O);
            o.useEffect((function() {
                a(Math.min(640, .8 * S))
            }
            ), [S]);
            return o.createElement("div", {
                className: c.default.container,
                ref: O
            }, y(u.default, {
                className: t,
                items: h,
                renderItem: b,
                currentIndex: d,
                offsetX: w,
                itemWidth: n,
                "aria-label": f.default.Messages.Jobs.REFRESH_CAROUSEL_LABEL
            }, void 0, y(i.default, {
                setOffsetX: g,
                currentIndex: d,
                setCurrentIndex: v,
                items: h
            })))
        }
        w.displayName = "OfficeCarousel"
    }
}]);
//# sourceMappingURL=046ddd8be272691306a5.js.map
