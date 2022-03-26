(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([[35], {
    1846: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = void 0;
        var a = r(1899).getClass;
        t.getClass = a
    },
    1899: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = function(e, t) {
            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                n[o - 2] = arguments[o];
            var l = n.reduce((function(e, t) {
                return e + (0,
                a.upperCaseFirstChar)(t)
            }
            ), "")
              , u = "" + t + l
              , f = e[u];
            if (null == f) {
                0;
                return ""
            }
            return f
        }
        ;
        var a = r(1912)
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
        var a = /[\u0300-\u036f]/g;
        t.truncateText = function(e, t, r) {
            void 0 === r && (r = "…");
            return null == e || null == t ? "" : e.length > t ? "" + e.substring(0, t - r.length).replace(/[\s.]+$/, "") + r : e
        }
        ;
        var n = null == String.prototype.normalize ? function(e) {
            return e
        }
        : function(e) {
            return e.normalize("NFD").replace(a, "").normalize("NFC")
        }
        ;
        t.stripDiacritics = n
    },
    1918: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var a;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = n(t);
            if (r && r.has(e))
                return r.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
                if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                    u && (u.get || u.set) ? Object.defineProperty(a, l, u) : a[l] = e[l]
                }
            a.default = e;
            r && r.set(e, a)
        }(r(1));
        function n(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (n = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function o(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , l = arguments.length - 3;
            if (t || 0 === l || (t = {
                children: void 0
            }),
            1 === l)
                t.children = n;
            else if (l > 1) {
                for (var u = new Array(l), f = 0; f < l; f++)
                    u[f] = arguments[f + 3];
                t.children = u
            }
            if (t && o)
                for (var i in o)
                    void 0 === t[i] && (t[i] = o[i]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
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
              , a = e.height
              , n = void 0 === a ? 32 : a
              , l = e.color
              , u = void 0 === l ? "currentColor" : l;
            return o("svg", {
                width: r,
                height: n,
                viewBox: "0 0 32 32",
                fill: "none",
                className: e.className
            }, void 0, o("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z",
                fill: u,
                className: e.foreground
            }))
        }
    },
    2326: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            switch (e) {
            case o.default.WINDOWS:
                return n.Images.REFRESH_DOWNLOAD_WINDOWS;
            case o.default.MAC:
                return n.Images.REFRESH_DOWNLOAD_MAC;
            case o.default.ANDROID:
                return n.Images.REFRESH_DOWNLOAD_ANDROID;
            case o.default.IOS:
                return n.Images.REFRESH_DOWNLOAD_IOS;
            default:
                return n.Images.REFRESH_DOWNLOAD_LINUX
            }
        }
        ;
        var a, n = r(82), o = (a = r(52)) && a.__esModule ? a : {
            default: a
        }
    },
    3047: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = g;
        O(r(1));
        var a, n = r(23), o = m(r(468)), l = m(r(169)), u = O(r(448)), f = m(r(52)), i = r(108), d = r(166), s = O(r(51)), c = m(r(2326)), p = m(r(16)), v = m(r(1793));
        function m(e) {
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
        function O(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = y(t);
            if (r && r.has(e))
                return r.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                }
            a.default = e;
            r && r.set(e, a);
            return a
        }
        function D(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , l = arguments.length - 3;
            if (t || 0 === l || (t = {
                children: void 0
            }),
            1 === l)
                t.children = n;
            else if (l > 1) {
                for (var u = new Array(l), f = 0; f < l; f++)
                    u[f] = arguments[f + 3];
                t.children = u
            }
            if (t && o)
                for (var i in o)
                    void 0 === t[i] && (t[i] = o[i]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function g() {
            var e = (0,
            n.useStateFromStores)([f.default], (function() {
                return f.default.platform
            }
            ))
              , t = (0,
            o.default)(e, !1);
            return D(i.Grid, {
                className: v.default.outerContainer
            }, void 0, D(u.default, {
                colorScheme: u.HeaderColorSchemes.WHITE
            }), D(i.Row, {
                className: v.default.container
            }, void 0, D("div", {
                className: v.default.body
            }, void 0, D("div", {
                className: v.default.text
            }, void 0, D(d.H1, {}, void 0, p.default.Messages.Download.HERO_TITLE), D(s.default, {
                className: v.default.subtitle,
                type: s.TextTypes.LARGE
            }, void 0, p.default.Messages.Download.HERO_SUBTITLE)), D("div", {
                className: v.default.buttonContainer
            }, void 0, D(l.default, {
                className: v.default.downloadButton,
                analyticsLocation: "Downloads Page"
            }), D(s.default, {
                className: v.default.infoText,
                type: s.TextTypes.SMALL
            }, void 0, t.main.info))), D("div", {
                className: v.default.imageContainer
            }, void 0, D("img", {
                className: v.default.image,
                src: (0,
                c.default)(e),
                alt: ""
            }))))
        }
        g.displayName = "Hero"
    },
    3048: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = L;
        var a, n = N(r(1)), o = _(r(19)), l = r(23), u = _(r(1918)), f = N(r(468)), i = _(r(483)), d = _(r(52)), s = r(64), c = r(108), p = r(166), v = _(r(51)), m = r(1846), y = _(r(482)), O = _(r(2326)), D = _(r(16)), g = _(r(1794));
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function w(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (w = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function N(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = w(t);
            if (r && r.has(e))
                return r.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                }
            a.default = e;
            r && r.set(e, a);
            return a
        }
        function h(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , l = arguments.length - 3;
            if (t || 0 === l || (t = {
                children: void 0
            }),
            1 === l)
                t.children = n;
            else if (l > 1) {
                for (var u = new Array(l), f = 0; f < l; f++)
                    u[f] = arguments[f + 3];
                t.children = u
            }
            if (t && o)
                for (var i in o)
                    void 0 === t[i] && (t[i] = o[i]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var b = "Download Page"
          , M = [d.default.IOS, d.default.ANDROID, d.default.LINUX, d.default.WINDOWS, d.default.MAC];
        function S(e) {
            return n.useMemo((function() {
                return M.filter((function(t) {
                    return t !== e
                }
                ))
            }
            ), [e])
        }
        function C(e) {
            switch (e) {
            case d.default.WINDOWS:
                return D.default.Messages.Download.WINDOWS;
            case d.default.MAC:
                return D.default.Messages.Download.MAC;
            case d.default.LINUX:
                return D.default.Messages.Download.LINUX;
            case d.default.ANDROID:
                return D.default.Messages.Download.ANDROID;
            case d.default.IOS:
                return D.default.Messages.Download.IOS;
            default:
                return "unknown FIXME"
            }
        }
        function I(e, t) {
            var r = (0,
            f.getAppDetails)(e, t, !0);
            return r.main.hasPTBText ? null == r.formats ? [{
                key: t,
                name: C(t),
                link: r.url,
                onClick: function() {
                    return (0,
                    i.default)(t, !0, b, r.url, !1)
                }
            }] : r.formats.map((function(e) {
                var r = d.default.getDownloadLink(t, !0, e.value);
                return {
                    key: "" + t + e.label,
                    name: C(t) + " " + e.label,
                    link: r,
                    onClick: function() {
                        return (0,
                        i.default)(t, !0, b, r, !1)
                    }
                }
            }
            )) : []
        }
        function P(e) {
            var t, r = e.className, a = e.platform, n = (0,
            f.default)(a);
            if (null != n.formats) {
                var l = n.formats.map((function(e) {
                    var t = d.default.getDownloadLink(a, !1, e.value);
                    return {
                        key: e.value,
                        name: e.value,
                        link: t,
                        onClick: function() {
                            return (0,
                            i.default)(a, !1, b, t, !1)
                        }
                    }
                }
                ));
                t = h(y.default, {
                    className: g.default.platformButton,
                    items: l,
                    color: s.ButtonColors.DARK,
                    navId: a + "-dropdown"
                }, void 0, D.default.Messages.Download.DOWNLOAD, h(u.default, {
                    className: g.default.dropdownArrow,
                    width: 24,
                    height: 24
                }))
            } else
                t = h(s.LinkButton, {
                    className: g.default.platformButton,
                    color: s.ButtonColors.DARK,
                    href: n.url,
                    onClick: function() {
                        return (0,
                        i.default)(a, !1, b, n.url, !1)
                    },
                    alt: n.other.header
                }, void 0, D.default.Messages.Download.DOWNLOAD);
            return h("div", {
                className: (0,
                o.default)(g.default.card, r)
            }, void 0, h("div", {
                className: g.default.cardTextContainer
            }, void 0, h(p.H3, {
                className: g.default.platformName
            }, void 0, C(a)), t), h("img", {
                className: g.default.platformImage,
                src: (0,
                O.default)(a),
                alt: ""
            }))
        }
        P.displayName = "PlatformCard";
        function A(e) {
            var t = e.current
              , r = S(t)
              , a = (0,
            l.useStateFromStores)([d.default], (function() {
                return function(e, t, r) {
                    var a = I(e, t);
                    r.forEach((function(t) {
                        a = a.concat(I(e, t))
                    }
                    ));
                    return a
                }(d.default, t, r)
            }
            ), [t, r]);
            return h("div", {
                className: g.default.ptbCard,
                id: "ptb-card"
            }, void 0, h(p.H3, {}, void 0, D.default.Messages.Download.PUBLIC_TEST_BUILD_TITLE), h(v.default, {
                className: g.default.ptbSubtitle
            }, void 0, D.default.Messages.Download.PUBLIC_TEST_BUILD_SUBTITLE), h(y.default, {
                color: s.ButtonColors.DARK,
                items: a,
                navId: "ptb-dropdown"
            }, void 0, D.default.Messages.Download.PUBLIC_TEST_BUILD_DOWNLOAD, h(u.default, {
                className: g.default.dropdownArrow,
                width: 24,
                height: 24
            })))
        }
        A.displayName = "PTBCard";
        function L() {
            var e = (0,
            l.useStateFromStores)([d.default], (function() {
                return d.default.platform
            }
            ))
              , t = S(e);
            return h(c.Grid, {
                className: g.default.container
            }, void 0, h(c.Row, {}, void 0, h("div", {
                className: g.default.cardContainer
            }, void 0, t.map((function(e, t) {
                return h(P, {
                    className: (0,
                    m.getClass)(g.default, "card" + t),
                    platform: e
                }, e)
            }
            )), h(A, {
                current: e
            }))))
        }
        L.displayName = "OtherPlatforms"
    },
    516: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = g;
        var a, n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = v(t);
            if (r && r.has(e))
                return r.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                }
            a.default = e;
            r && r.set(e, a);
            return a
        }(r(1)), o = p(r(446)), l = r(82), u = p(r(449)), f = p(r(447)), i = r(167), d = p(r(3047)), s = p(r(3048)), c = p(r(16));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function v(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (v = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function m(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , l = arguments.length - 3;
            if (t || 0 === l || (t = {
                children: void 0
            }),
            1 === l)
                t.children = n;
            else if (l > 1) {
                for (var u = new Array(l), f = 0; f < l; f++)
                    u[f] = arguments[f + 3];
                t.children = u
            }
            if (t && o)
                for (var i in o)
                    void 0 === t[i] && (t[i] = o[i]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var y = m(d.default, {})
          , O = m(s.default, {})
          , D = m(u.default, {});
        function g() {
            return m(f.default, {}, void 0, n.createElement(o.default, (0,
            i.getMetadataRefresh)(c.default.Messages.Download, l.ImageMetaData.DOWNLOAD)), y, O, D)
        }
        g.displayName = "Download"
    }
}]);
//# sourceMappingURL=11363bee0bc2ecf404b0.js.map
