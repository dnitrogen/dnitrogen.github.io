(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([[42], {
    1954: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var r, o, a = function(e, t) {
                if (!t && e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var n = u(t);
                if (n && n.has(e))
                    return n.get(e);
                var r = {}
                  , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                    }
                r.default = e;
                n && n.set(e, r);
                return r
            }(n(1)), i = n(1903), l = (r = n(1983)) && r.__esModule ? r : {
                default: r
            };
            function u(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap
                  , n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                }
                )(e)
            }
            function c(e, t, n, r) {
                o || (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps
                  , i = arguments.length - 3;
                if (t || 0 === i || (t = {
                    children: void 0
                }),
                1 === i)
                    t.children = r;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++)
                        l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a)
                        void 0 === t[c] && (t[c] = a[c]);
                else
                    t || (t = a || {});
                return {
                    $$typeof: o,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                }
                ;
                return s(e, t)
            }
            var f = function(t) {
                !function(e, t) {
                    e.prototype = Object.create(t.prototype);
                    e.prototype.constructor = e;
                    s(e, t)
                }(n, t);
                function n() {
                    for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    (n = t.call.apply(t, [this].concat(o)) || this).anim = null;
                    n.animationContainer = null;
                    n.isVisible = !1;
                    n.rafId = null;
                    n.loadAnimation = function() {
                        var e = n.props
                          , t = e.animationData
                          , r = e.loop
                          , o = e.renderer
                          , a = e.rendererSettings
                          , i = e.setAnimationInstance;
                        n.anim = l.default.loadAnimation({
                            animationData: t,
                            container: n.animationContainer,
                            autoplay: !1,
                            loop: r,
                            renderer: o,
                            rendererSettings: a
                        });
                        i && i(n.anim);
                        n.maybePlayAnimation()
                    }
                    ;
                    n.maybePlayAnimation = function() {
                        n.isVisible && n.anim && n.props.autoplay && "complete" === e.document.readyState && (n.rafId = e.requestAnimationFrame((function() {
                            return n.anim.play()
                        }
                        )))
                    }
                    ;
                    n.handleReadyStateChange = function() {
                        n.maybePlayAnimation()
                    }
                    ;
                    n.handleVisibilityChange = function(t) {
                        var r = n.props
                          , o = r.autoplay
                          , a = r.onVisibilityChange;
                        a && a(t);
                        if (o && n.anim && "complete" === e.document.readyState) {
                            var i = t ? "play" : "pause";
                            n.rafId = e.requestAnimationFrame((function() {
                                return n.anim[i]()
                            }
                            ))
                        }
                        n.isVisible = t
                    }
                    ;
                    n.setRef = function(e) {
                        n.animationContainer = e;
                        var t = n.props.setContainerRef;
                        t && t(e)
                    }
                    ;
                    return n
                }
                var r = n.prototype;
                r.componentDidMount = function() {
                    e.document.addEventListener("readystatechange", this.handleReadyStateChange);
                    this.rafId = e.requestAnimationFrame(this.loadAnimation)
                }
                ;
                r.componentWillUnmount = function() {
                    e.document.removeEventListener("readystatechange", this.handleReadyStateChange);
                    e.cancelAnimationFrame(this.rafId);
                    null != this.anim && this.anim.destroy()
                }
                ;
                r.render = function() {
                    var e = this.props["aria-label"];
                    return c(i.VisibilitySensor, {
                        onChange: this.handleVisibilityChange
                    }, void 0, a.createElement("div", {
                        ref: this.setRef,
                        className: this.props.className,
                        "aria-label": e
                    }))
                }
                ;
                return n
            }(a.PureComponent);
            t.default = f;
            f.displayName = "AnimationWrapper";
            f.defaultProps = {
                autoplay: !0,
                loop: !0,
                renderer: "svg",
                rendererSettings: {
                    preserveAspectRatio: "xMinYMid meet"
                }
            }
        }
        ).call(this, n(13))
    },
    1983: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var r = e.isServerRendering ? {
                loadAnimation: function() {
                    return {
                        playAnimation: function() {}
                    }
                }
            } : n(1984);
            t.default = r
        }
        ).call(this, n(13))
    },
    2153: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var r = s(n(174))
          , o = s(n(74))
          , a = s(n(176))
          , i = s(n(464))
          , l = s(n(2154))
          , u = s(n(451))
          , c = n(65);
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1;
                r.configurable = !0;
                "value"in r && (r.writable = !0);
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t) {
            d = Object.setPrototypeOf || function(e, t) {
                e.__proto__ = t;
                return e
            }
            ;
            return d(e, t)
        }
        var p = c.RPC_STARTING_PORT + c.RPC_PORT_RANGE - 1;
        function y(e, t) {
            if (null == e || null == t)
                throw new Error("cmd and name required");
            return e + ":" + t
        }
        var v, m = a.default.parse(location.search.slice(1)), _ = parseInt(m.rpc || c.RPC_STARTING_PORT, 10), R = function(e) {
            !function(e, t) {
                e.prototype = Object.create(t.prototype);
                e.prototype.constructor = e;
                d(e, t)
            }(t, e);
            function t() {
                return e.apply(this, arguments) || this
            }
            var n = t.prototype;
            n.connect = function() {
                var e = this;
                if (null == v)
                    if (_ > p) {
                        _ = c.RPC_STARTING_PORT;
                        this.emit("disconnected")
                    } else {
                        try {
                            v = new WebSocket("ws://127.0.0.1:" + this.port + "/?v=" + c.RPC_VERSION)
                        } catch (e) {
                            this.disconnect({
                                code: c.RPCCloseCodes.CLOSE_ABNORMAL
                            });
                            return
                        }
                        if (null != v) {
                            v.onmessage = function(t) {
                                var n;
                                try {
                                    if ("string" != typeof t.data)
                                        throw new Error("payload data not a string");
                                    n = JSON.parse(t.data)
                                } catch (t) {
                                    e.emit("error", t);
                                    e.disconnect();
                                    return
                                }
                                var r = n
                                  , o = r.cmd
                                  , a = r.evt
                                  , i = r.nonce
                                  , u = r.data;
                                if (o !== c.RPCCommands.DISPATCH) {
                                    var s = null;
                                    if (a === c.RPCEvents.ERROR) {
                                        s = new l.default(u.code,u.message);
                                        u = null
                                    }
                                    e.emit(y(o, i), s, u)
                                } else {
                                    if (a === c.RPCEvents.READY) {
                                        e.emit("connected");
                                        return
                                    }
                                    if (a === c.RPCEvents.ERROR) {
                                        e.emit("error", new l.default(u.code,u.message));
                                        e.disconnect();
                                        return
                                    }
                                    e.emit(y(o, a), u)
                                }
                            }
                            ;
                            v.onclose = v.onerror = function(t) {
                                return e.disconnect(t)
                            }
                        }
                    }
            }
            ;
            n.disconnect = function(e) {
                if (null != e && null != e.code && [c.RPCCloseCodes.CLOSE_ABNORMAL, c.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                    _++;
                    v = null;
                    this.connect()
                } else if (null != v) {
                    this.emit("disconnected");
                    v.close();
                    v = null
                }
            }
            ;
            n.subscribe = function(e, t, n) {
                this.on(y(c.RPCCommands.DISPATCH, e), n);
                return this.request(c.RPCCommands.SUBSCRIBE, t, e)
            }
            ;
            n.unsubscribe = function(e, t, n) {
                this.removeListener(y(c.RPCCommands.DISPATCH, e), n);
                return this.request(c.RPCCommands.UNSUBSCRIBE, t, e)
            }
            ;
            n.request = function(e, t, n) {
                var r = this;
                return new Promise((function(o, a) {
                    if (r.connected) {
                        var l = i.default.v4()
                          , u = JSON.stringify({
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: l
                        });
                        r.once(y(e, l), (function(e, t) {
                            return null != e ? a(e) : o(t)
                        }
                        ));
                        v && v.send(u)
                    } else {
                        r.once("connected", (function() {
                            r.removeAllListeners("disconnected");
                            o(r.request(e, t, n))
                        }
                        ));
                        r.once("disconnected", (function() {
                            r.removeAllListeners("connected");
                            a(new Error("disconnected during request"))
                        }
                        ));
                        r.connect()
                    }
                }
                ))
            }
            ;
            n.requestOnce = function(e, t, n) {
                return u.default.post({
                    url: "http://127.0.0.1:" + this.port + "/rpc?v=" + c.RPC_VERSION,
                    body: {
                        cmd: e,
                        args: t,
                        evt: n,
                        nonce: i.default.v4()
                    }
                }).then((function(e) {
                    var t = e.body
                      , n = t.evt
                      , r = t.data;
                    if (n === c.RPCEvents.ERROR)
                        throw new l.default(r.code,r.message);
                    return r
                }
                ))
            }
            ;
            n.requestRedirect = function(e, t, n) {
                if ("Chrome" === o.default.name && parseInt(o.default.version, 10) >= 58)
                    return this.requestOnce(e, t, n);
                var r = encodeURIComponent(JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: i.default.v4()
                }))
                  , a = encodeURIComponent(location.protocol + "//" + location.host + location.pathname + "?done=true");
                window.open("http://127.0.0.1:" + this.port + "/rpc?v=" + c.RPC_VERSION + "&payload=" + r + "&callback=" + a, "_self");
                return new Promise((function() {
                    return null
                }
                ))
            }
            ;
            !function(e, t, n) {
                t && f(e.prototype, t);
                n && f(e, n);
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(t, [{
                key: "port",
                get: function() {
                    return _
                }
            }, {
                key: "connected",
                get: function() {
                    return null != v && v.readyState === WebSocket.OPEN
                }
            }]);
            return t
        }(r.default), E = new R;
        t.default = E
    },
    2180: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = c;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = l(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r)
        }(n(1));
        var r, o = i(n(16)), a = i(n(1814));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (l = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function u(e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var l = new Array(i), u = 0; u < i; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && a)
                for (var c in a)
                    void 0 === t[c] && (t[c] = a[c]);
            else
                t || (t = a || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function c() {
            return u("div", {
                className: a.default.pill
            }, void 0, o.default.Messages.Nitro.REFRESH_PRICE_YEARLY_DISCOUNT.format({
                yearlyDiscount: 16
            }))
        }
        c.displayName = "DiscountPill"
    },
    3153: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            var t = e.onCtaClick
              , n = p.default.getLocale();
            return o.createElement(o.Fragment, null, R(c.Grid, {
                className: y.default.container
            }, void 0, R(c.Row, {}, void 0, R("div", {
                className: y.default.body
            }, void 0, R("img", {
                className: y.default.title,
                src: i.Images.REBRAND_NITRO_CLASSIC_LOGO,
                alt: p.default.Messages.Nitro.NITRO_CLASSIC
            }), R(s.default, {
                className: y.default.subtitle
            }, void 0, p.default.Messages.Nitro.NITRO_CLASSIC_SUBHEADING), R("div", {
                className: y.default.ctaContainer
            }, void 0, R(u.default, {
                className: y.default.ctaButton,
                color: u.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.FOOTER, d.WebAnalyticsObjectType.YEARLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_YEARLY.format({
                price: (0,
                a.formatPrice)(d.NITRO_CLASSIC_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
            }), b), R(u.default, {
                className: y.default.ctaButton,
                color: u.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.FOOTER, d.WebAnalyticsObjectType.MONTHLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_MONTHLY.format({
                price: (0,
                a.formatPrice)(d.NITRO_CLASSIC_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
            }))))), P))
        }
        ;
        var r, o = _(n(1)), a = n(2179), i = n(82), l = v(n(1954)), u = _(n(64)), c = n(108), s = v(n(51)), f = v(n(2180)), d = n(10), p = v(n(16)), y = v(n(1815));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function _(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }
        function R(e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var l = new Array(i), u = 0; u < i; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && a)
                for (var c in a)
                    void 0 === t[c] && (t[c] = a[c]);
            else
                t || (t = a || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function E(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n)
                    return;
                var r, o, a = [], i = !0, l = !1;
                try {
                    for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                        a.push(r.value);
                        if (t && a.length === t)
                            break
                    }
                } catch (e) {
                    l = !0;
                    o = e
                } finally {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return O(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function S() {
            var e = E(o.useState(null), 2)
              , t = e[0]
              , r = e[1];
            o.useEffect((function() {
                n.e(5).then(n.t.bind(null, 2090, 7)).then((function(e) {
                    var t = e.default;
                    r(t)
                }
                ))
            }
            ));
            return null == t ? null : R(l.default, {
                animationData: t,
                className: y.default.animation,
                "aria-label": p.default.Messages.Nitro.REFRESH_CLASSIC_ANIMATION_LABEL
            })
        }
        S.displayName = "ClassicAnimation";
        var b = R(f.default, {})
          , P = R(S, {})
    },
    3155: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = O;
        _(n(1));
        var r, o = n(2179), a = n(82), i = _(n(448)), l = _(n(3156)), u = _(n(64)), c = n(108), s = _(n(51)), f = v(n(2180)), d = n(10), p = v(n(16)), y = v(n(1816));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function _(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }
        function R(e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var l = new Array(i), u = 0; u < i; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && a)
                for (var c in a)
                    void 0 === t[c] && (t[c] = a[c]);
            else
                t || (t = a || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var E = R(f.default, {});
        function O(e) {
            var t = e.onCtaClick
              , n = p.default.getLocale();
            return R("div", {
                className: y.default.outerContainer
            }, void 0, R(c.Grid, {
                className: y.default.background
            }, void 0, R(i.default, {
                colorScheme: i.HeaderColorSchemes.WHITE
            }), R(c.Row, {
                className: y.default.container
            }, void 0, R("div", {
                className: y.default.titleContainer
            }, void 0, R("img", {
                className: y.default.staticWumpus,
                src: a.Images.NITRO_WUMPUS_FLYING_MECH,
                alt: ""
            }), R("img", {
                className: y.default.title,
                src: a.Images.REBRAND_NITRO_LOGO,
                alt: p.default.Messages.Nitro.NITRO
            })), R(s.default, {
                type: s.TextTypes.LARGE,
                className: y.default.subtitle
            }, void 0, p.default.Messages.Nitro.REFRESH_HERO_SUBTITLE), R("div", {
                className: y.default.ctaContainer
            }, void 0, R(u.default, {
                className: y.default.ctaButton,
                color: u.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.HERO, d.WebAnalyticsObjectType.YEARLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_YEARLY.format({
                price: (0,
                o.formatPrice)(d.NITRO_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
            }), E), R(u.default, {
                className: y.default.ctaButton,
                color: u.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.HERO, d.WebAnalyticsObjectType.MONTHLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_MONTHLY.format({
                price: (0,
                o.formatPrice)(d.NITRO_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
            })))), R("div", {
                className: y.default.videoWrapper
            }, void 0, R(l.default, {
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: y.default.video
            }, void 0, R(l.ResponsiveVideoSources, {
                media: "(min-width: 1920px)"
            }, void 0, R("source", {
                src: a.Videos.NITRO_HERO_2560_WEBM,
                type: "video/webm"
            }), R("source", {
                src: a.Videos.NITRO_HERO_2560_MP4,
                type: "video/mp4"
            })), R(l.ResponsiveVideoSources, {
                media: "(min-width: 1440px) and (max-width: 1920px)"
            }, void 0, R("source", {
                src: a.Videos.NITRO_HERO_1920_WEBM,
                type: "video/webm"
            }), R("source", {
                src: a.Videos.NITRO_HERO_1920_MP4,
                type: "video/mp4"
            })), R(l.ResponsiveVideoSources, {
                media: "(min-width: 1024px) and (max-width: 1440px)"
            }, void 0, R("source", {
                src: a.Videos.NITRO_HERO_1440_WEBM,
                type: "video/webm"
            }), R("source", {
                src: a.Videos.NITRO_HERO_1440_MP4,
                type: "video/mp4"
            }))))))
        }
        O.displayName = "Hero"
    },
    3156: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = t.ResponsiveVideoSources = void 0;
        var r, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = l(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }(n(1)), a = (r = n(1945)) && r.__esModule ? r : {
            default: r
        }, i = ["forwardedRef", "onBreakpointChange"];
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (l = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function u() {
            u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            return u.apply(this, arguments)
        }
        function c(e, t) {
            c = Object.setPrototypeOf || function(e, t) {
                e.__proto__ = t;
                return e
            }
            ;
            return c(e, t)
        }
        t.ResponsiveVideoSources = function(e) {
            return e.children
        }
        ;
        var s = function(e) {
            if (null == window.matchMedia)
                return null;
            var t = o.Children.toArray(e).findIndex((function(e) {
                return window.matchMedia(e.props.media).matches
            }
            ));
            return t > -1 ? t : null
        }
          , f = function(e) {
            !function(e, t) {
                e.prototype = Object.create(t.prototype);
                e.prototype.constructor = e;
                c(e, t)
            }(t, e);
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                (t = e.call.apply(e, [this].concat(r)) || this).state = {
                    activeVideoIndex: s(t.props.children)
                };
                t.handleResize = (0,
                a.default)((function() {
                    var e = s(t.props.children);
                    e !== t.state.activeVideoIndex && t.setState({
                        activeVideoIndex: e
                    })
                }
                ), 50);
                return t
            }
            var n = t.prototype;
            n.componentDidMount = function() {
                window.addEventListener("resize", this.handleResize)
            }
            ;
            n.componentDidUpdate = function(e, t) {
                var n = this.props.onBreakpointChange;
                null != n && t.activeVideoIndex !== this.state.activeVideoIndex && n()
            }
            ;
            n.componentWillUnmount = function() {
                window.removeEventListener("resize", this.handleResize)
            }
            ;
            n.renderResponsiveVideoSources = function() {
                var e = this.state.activeVideoIndex
                  , t = o.Children.toArray(this.props.children);
                return null == e || null == t[e] ? null : t[e]
            }
            ;
            n.render = function() {
                var e = this.state.activeVideoIndex
                  , t = this.props
                  , n = t.forwardedRef
                  , r = (t.onBreakpointChange,
                function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(t, i));
                return o.createElement("video", u({
                    key: e,
                    ref: n
                }, r), this.renderResponsiveVideoSources())
            }
            ;
            return t
        }(o.Component);
        f.displayName = "ResponsiveVideo";
        var d = o.forwardRef((function(e, t) {
            return o.createElement(f, u({}, e, {
                forwardedRef: t
            }))
        }
        ));
        t.default = d
    },
    3157: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = b;
        _(n(1));
        var r, o = v(n(19)), a = n(2179), i = n(82), l = _(n(64)), u = n(108), c = n(166), s = _(n(51)), f = v(n(2180)), d = n(10), p = v(n(16)), y = v(n(1817));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function _(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }
        function R(e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var l = new Array(i), u = 0; u < i; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && a)
                for (var c in a)
                    void 0 === t[c] && (t[c] = a[c]);
            else
                t || (t = a || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function E(e) {
            var t = e.className
              , n = e.title
              , r = e.subtitle
              , a = e.imgSrc;
            return R("div", {
                className: (0,
                o.default)(y.default.perkTile, t)
            }, void 0, R("div", {}, void 0, R(s.default, {
                type: s.TextTypes.LARGE,
                className: y.default.perkTitle
            }, void 0, n), R(s.default, {
                type: s.TextTypes.SMALL,
                className: y.default.perkSubtitle
            }, void 0, r)), R("img", {
                className: y.default.perkImage,
                src: a,
                alt: ""
            }))
        }
        E.displayName = "PerkTile";
        var O = R(f.default, {});
        function S(e) {
            var t = e.onCtaClick
              , n = p.default.getLocale();
            return R(u.Row, {
                className: y.default.ctaContainer
            }, void 0, R(c.H3, {
                className: y.default.ctaTitle,
                "aria-label": p.default.Messages.Nitro.READY_TO_PLAY_HEADING_LABEL
            }, void 0, p.default.Messages.Nitro.READY_TO_PLAY_HEADING), R(l.default, {
                className: y.default.ctaButton,
                color: l.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.BODY, d.WebAnalyticsObjectType.YEARLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_YEARLY.format({
                price: (0,
                a.formatPrice)(d.NITRO_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
            }), O), R(l.default, {
                className: y.default.ctaButton,
                color: l.ButtonColors.DARK,
                onClick: function() {
                    return t(d.WebAnalyticsObjectLocation.BODY, d.WebAnalyticsObjectType.MONTHLY)
                }
            }, void 0, p.default.Messages.Nitro.REFRESH_PRICE_MONTHLY.format({
                price: (0,
                a.formatPrice)(d.NITRO_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
            })))
        }
        S.displayName = "Cta";
        function b(e) {
            var t = e.onCtaClick;
            return R(u.Grid, {}, void 0, R(u.Row, {
                className: y.default.container
            }, void 0, R(c.H2, {
                headline: !0,
                className: y.default.title
            }, void 0, p.default.Messages.Nitro.REFRESH_PERKS_TITLE), R(s.default, {
                type: s.TextTypes.LARGE,
                className: y.default.subtitle
            }, void 0, p.default.Messages.Nitro.REFRESH_PERKS_SUBTITLE)), R(u.Row, {
                className: y.default.perksContainer
            }, void 0, R(E, {
                className: y.default.perkBetterEmoji,
                title: p.default.Messages.Nitro.REFRESH_PERKS_BETTER_EMOJI_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_BETTER_EMOJI_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_BETTER_EMOJIS
            }), R(E, {
                className: y.default.perkPersonalProfile,
                title: p.default.Messages.Nitro.REFRESH_PERKS_PERSONAL_PROFILE_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_PERSONAL_PROFILE_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_PERSONAL_PROFILE
            }), R(E, {
                className: y.default.perkSupportServer,
                title: p.default.Messages.Nitro.REFRESH_PERKS_SUPPORT_SERVER_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_SUPPORT_SERVER_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_SUPPORT_SERVER
            }), R(E, {
                className: y.default.perkRepSupport,
                title: p.default.Messages.Nitro.REFRESH_PERKS_REP_SUPPORT_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_REP_SUPPORT_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_REP_SUPPORT
            }), R(E, {
                className: y.default.perkBiggerMemes,
                title: p.default.Messages.Nitro.REFRESH_PERKS_BIGGER_MEMES_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_BIGGER_MEMES_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_BIGGER_MEMES
            }), R(E, {
                className: y.default.perkHDVideo,
                title: p.default.Messages.Nitro.REFRESH_PERKS_HD_VIDEO_TITLE,
                subtitle: p.default.Messages.Nitro.REFRESH_PERKS_HD_VIDEO_SUBTITLE,
                imgSrc: i.Images.REFRESH_NITRO_HD_VIDEO
            })), R(S, {
                onCtaClick: t
            }))
        }
        b.displayName = "Perks"
    },
    3158: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            var t = s(r.useState(null), 2)
              , n = t[0]
              , u = t[1]
              , c = s(r.useState(!1), 2)
              , f = c[0]
              , y = c[1];
            r.useEffect((function() {
                Promise.race([new Promise((function(e) {
                    o.default.once("connected", (function() {
                        u(o.default);
                        y(!0);
                        e()
                    }
                    ));
                    o.default.once("disconnected", (function() {
                        u(null)
                    }
                    ));
                    o.default.connect()
                }
                )), new Promise((function(e) {
                    setTimeout(e, 3e3)
                }
                ))])
            }
            ), []);
            return r.useCallback((function(t, r) {
                (null != n ? Promise.resolve(n) : Promise.reject(n)).then((function(e) {
                    return e.request("DEEP_LINK", {
                        type: "USER_SETTINGS",
                        params: {
                            section: d,
                            fingerprint: a.default.fingerprint
                        }
                    })
                }
                ), p).then((function(n) {
                    i.default.track(l.WebAnalyticsEvents.MKTG_PAGE_CTA_CLICKED, {
                        rpc_connected: f,
                        location_page: e.path.substring(1),
                        location_section: t,
                        location_object: l.WebAnalyticsObject.BUTTON_CTA,
                        location_object_type: r
                    });
                    i.default.trackEventExternally("Click-" + r + "-" + t);
                    "function" == typeof n && n()
                }
                ))
            }
            ), [e.path, n, f])
        }
        ;
        var r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = c(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }(n(1))
          , o = u(n(2153))
          , a = u(n(47))
          , i = u(n(31))
          , l = n(10);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (c = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function s(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n)
                    return;
                var r, o, a = [], i = !0, l = !1;
                try {
                    for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                        a.push(r.value);
                        if (t && a.length === t)
                            break
                    }
                } catch (e) {
                    l = !0;
                    o = e
                } finally {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return f(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var d = "PREMIUM"
          , p = function() {
            window.location = l.AppRoutes.SETTINGS(d.toLowerCase())
        }
    },
    532: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = R;
        var r, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = v(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                }
            r.default = e;
            n && n.set(e, r);
            return r
        }(n(1)), a = y(n(446)), i = y(n(449)), l = y(n(447)), u = n(167), c = y(n(3153)), s = y(n(3155)), f = y(n(3157)), d = y(n(3158)), p = y(n(16));
        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function v(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (v = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function m(e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var l = new Array(i), u = 0; u < i; u++)
                    l[u] = arguments[u + 3];
                t.children = l
            }
            if (t && a)
                for (var c in a)
                    void 0 === t[c] && (t[c] = a[c]);
            else
                t || (t = a || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var _ = m(i.default, {});
        function R(e) {
            var t = e.match
              , n = (0,
            d.default)(t);
            return m(l.default, {}, void 0, o.createElement(a.default, (0,
            u.getMetadataRefresh)(p.default.Messages.Nitro)), m(s.default, {
                onCtaClick: n
            }), m(f.default, {
                onCtaClick: n
            }), m(c.default, {
                onCtaClick: n
            }), _)
        }
        R.displayName = "Nitro"
    }
}]);
//# sourceMappingURL=55a31d9b28b176c22d0d.js.map
