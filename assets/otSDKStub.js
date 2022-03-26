var OneTrustStub = function(e) {
    "use strict";
    var t, o, n, i, a, r, s, l, c, p, u, d, m, h, f, g, b, A, C, v, y, I, S, w, T, L, R, B, D, G, E, P, _, U, k, O, F, V, x, N, H, M, j, K, z, q = new function() {
        this.optanonCookieName = "OptanonConsent",
        this.optanonHtmlGroupData = [],
        this.optanonHostData = [],
        this.genVendorsData = [],
        this.IABCookieValue = "",
        this.oneTrustIABCookieName = "eupubconsent",
        this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal",
        this.isStubReady = !0,
        this.geolocationCookiesParam = "geolocation",
        this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"],
        this.stubFileName = "otSDKStub",
        this.DATAFILEATTRIBUTE = "data-domain-script",
        this.bannerScriptName = "otBannerSdk.js",
        this.mobileOnlineURL = [],
        this.isMigratedURL = !1,
        this.migratedCCTID = "[[OldCCTID]]",
        this.migratedDomainId = "[[NewDomainId]]",
        this.userLocation = {
            country: "",
            state: ""
        }
    }
    ;
    (o = t = t || {})[o.Unknown = 0] = "Unknown",
    o[o.BannerCloseButton = 1] = "BannerCloseButton",
    o[o.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
    o[o.AcceptAll = 3] = "AcceptAll",
    o[o.RejectAll = 4] = "RejectAll",
    o[o.BannerSaveSettings = 5] = "BannerSaveSettings",
    (i = n = n || {})[i.Purpose = 1] = "Purpose",
    i[i.SpecialFeature = 2] = "SpecialFeature",
    (r = a = a || {}).Legal = "legal",
    r.UserFriendly = "user_friendly",
    (l = s = s || {}).Top = "top",
    l.Bottom = "bottom",
    (p = c = c || {})[p.Banner = 0] = "Banner",
    p[p.PrefCenterHome = 1] = "PrefCenterHome",
    p[p.VendorList = 2] = "VendorList",
    p[p.CookieList = 3] = "CookieList",
    (d = u = u || {})[d.RightArrow = 39] = "RightArrow",
    d[d.LeftArrow = 37] = "LeftArrow",
    (h = m = m || {}).AfterTitle = "AfterTitle",
    h.AfterDescription = "AfterDescription",
    h.AfterDPD = "AfterDPD",
    (g = f = f || {}).PlusMinus = "Plusminus",
    g.Caret = "Caret",
    g.NoAccordion = "NoAccordion",
    (A = b = b || {}).Consent = "Consent",
    A.LI = "LI",
    A.AddtlConsent = "AddtlConsent",
    (v = C = C || {}).Iab1Pub = "eupubconsent",
    v.Iab2Pub = "eupubconsent-v2",
    v.Iab1Eu = "euconsent",
    v.Iab2Eu = "euconsent-v2",
    (I = y = y || {})[I.Disabled = 0] = "Disabled",
    I[I.Consent = 1] = "Consent",
    I[I.LegInt = 2] = "LegInt",
    (w = S = S || {})[w["Banner - Allow All"] = 1] = "Banner - Allow All",
    w[w["Banner - Reject All"] = 2] = "Banner - Reject All",
    w[w["Banner - Close"] = 3] = "Banner - Close",
    w[w["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
    w[w["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
    w[w["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
    (L = T = T || {}).Active = "1",
    L.InActive = "0",
    (B = R = R || {}).Host = "Host",
    B.GenVendor = "GenVen",
    (G = D = D || {})[G.Host = 1] = "Host",
    G[G.GenVen = 2] = "GenVen",
    G[G.HostAndGenVen = 3] = "HostAndGenVen",
    (P = E = E || {})[P.minDays = 1] = "minDays",
    P[P.maxDays = 30] = "maxDays",
    P[P.maxYear = 31536e3] = "maxYear",
    P[P.maxSecToDays = 86400] = "maxSecToDays",
    (U = _ = _ || {})[U.RTL = 0] = "RTL",
    U[U.LTR = 1] = "LTR",
    (O = k = k || {})[O.GoogleVendor = 1] = "GoogleVendor",
    O[O.GeneralVendor = 2] = "GeneralVendor",
    (V = F = F || {})[V.Days = 1] = "Days",
    V[V.Weeks = 7] = "Weeks",
    V[V.Months = 30] = "Months",
    V[V.Years = 365] = "Years",
    (N = x = x || {}).Checkbox = "Checkbox",
    N.Toggle = "Toggle",
    (M = H = H || {}).SlideIn = "Slide_In",
    M.FadeIn = "Fade_In",
    M.RemoveAnimation = "Remove_Animation",
    (K = j = j || {}).Link = "Link",
    K.Icon = "Icon";
    var J = "geo"
      , W = "otpreview"
      , Y = ((z = {})[F.Days] = "PCenterVendorListLifespanDay",
    z[F.Weeks] = "LfSpnWk",
    z[F.Months] = "PCenterVendorListLifespanMonth",
    z[F.Years] = "LfSpnYr",
    Q.prototype.initConsentSDK = function() {
        this.initCustomEventPolyfill(),
        this.ensureHtmlGroupDataInitialised(),
        this.updateGtmMacros(),
        this.getParam(),
        this.fetchBannerSDKDependency()
    }
    ,
    Q.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL(),
        this.otFetch(q.bannerDataParentURL, this.getLocation.bind(this))
    }
    ,
    Q.prototype.getLocation = function(e) {
        if (!e.RuleSet[0].Type)
            return this.iabTypeAdded = !1,
            window.__cmp = this.executeCmpApi,
            window.__tcfapi = this.executeTcfApi,
            this.intializeIabStub(),
            this.addBannerSDKScript(e);
        var t = window;
        if (t.OneTrust && t.OneTrust.geolocationResponse) {
            var o = t.OneTrust.geolocationResponse;
            this.setGeoLocation(o.countryCode, o.stateCode),
            this.addBannerSDKScript(e)
        } else {
            var n = this.readCookieParam(q.optanonCookieName, q.geolocationCookiesParam);
            if (n || e.SkipGeolocation) {
                var i = n.split(";")[0]
                  , a = n.split(";")[1];
                this.setGeoLocation(i, a),
                this.addBannerSDKScript(e)
            } else
                this.getGeoLocation(e)
        }
    }
    ,
    Q.prototype.getGeolocationURL = function(e) {
        var t = e.TenantFeatures
          , o = "" + q.stubScriptElement.getAttribute("src").split(q.stubFileName)[0] + e.Version;
        if (new RegExp("^file://","i").test(o) && e.MobileSDK) {
            var n = "/" + e.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js";
            return t && t.CookieV2GeolocationJsonApi ? q.storageBaseURL + n : "." + n
        }
        return e.GeolocationUrl
    }
    ,
    Q.prototype.geoLocationJsonCallback = function(e, t) {
        t && this.setGeoLocation(t.country, t.state),
        this.addBannerSDKScript(e)
    }
    ,
    Q.prototype.getGeoLocation = function(e) {
        var t = this
          , o = e.TenantFeatures
          , n = this.getGeolocationURL(e);
        o && o.CookieV2GeolocationJsonApi ? this.otFetch(n, this.geoLocationJsonCallback.bind(this, e), !0) : (window.jsonFeed = function(e) {
            t.setGeoLocation(e.country, e.state)
        }
        ,
        this.jsonp(n, this.addBannerSDKScript.bind(this, e)))
    }
    ,
    Q.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""),
        q.userLocation = {
            country: e,
            state: t
        }
    }
    ,
    Q.prototype.otFetch = function(e, t, o) {
        if (void 0 === o && (o = !1),
        new RegExp("^file://","i").test(e))
            this.otFetchOfflineFile(e, t);
        else {
            q.mobileOnlineURL.push(e);
            var n = new XMLHttpRequest;
            n.onload = function() {
                t(JSON.parse(this.responseText))
            }
            ,
            n.onerror = function() {
                t()
            }
            ,
            n.open("GET", e),
            o && n.setRequestHeader("accept", "application/json"),
            n.send()
        }
    }
    ,
    Q.prototype.otFetchOfflineFile = function(e, t) {
        var o = (e = e.replace(".json", ".js")).split("/")
          , n = o[o.length - 1].split(".js")[0];
        this.jsonp(e, function() {
            t(window[n])
        })
    }
    ,
    Q.prototype.jsonp = function(e, t) {
        var o = document.createElement("script");
        o.setAttribute("src", e),
        o.async = !0,
        o.type = "text/javascript",
        this.crossOrigin && o.setAttribute("crossorigin", this.crossOrigin),
        document.getElementsByTagName("head")[0].appendChild(o),
        new RegExp("^file://","i").test(e) || q.mobileOnlineURL.push(e),
        t && (o.onload = o.onerror = function() {
            t()
        }
        )
    }
    ,
    Q.prototype.getRegionSet = function(e) {
        var t, o, n, i = q.userLocation, a = e.RuleSet.filter(function(e) {
            return !0 === e.Default
        });
        if (!i.country && !i.state)
            return a && 0 < a.length ? a[0] : null;
        for (var r = i.state.toLowerCase(), s = i.country.toLowerCase(), l = 0; l < e.RuleSet.length; l++)
            if (!0 === e.RuleSet[l].Global)
                n = e.RuleSet[l];
            else {
                var c = e.RuleSet[l].States;
                if (c[s] && 0 <= c[s].indexOf(r)) {
                    o = e.RuleSet[l];
                    break
                }
                0 <= e.RuleSet[l].Countries.indexOf(s) && (t = e.RuleSet[l])
            }
        return o || t || n
    }
    ,
    Q.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData(),
        this.initializeGroupData(),
        this.initializeHostData(),
        this.initializeGenVenData()
    }
    ,
    Q.prototype.initializeGroupData = function() {
        var e = this.readCookieParam(q.optanonCookieName, "groups");
        e && (q.optanonHtmlGroupData = this.deserialiseStringToArray(e))
    }
    ,
    Q.prototype.initializeHostData = function() {
        var e = this.readCookieParam(q.optanonCookieName, "hosts");
        e && (q.optanonHostData = this.deserialiseStringToArray(e))
    }
    ,
    Q.prototype.initializeGenVenData = function() {
        var e = this.readCookieParam(q.optanonCookieName, "genVendors");
        e && (q.genVendorsData = this.deserialiseStringToArray(e))
    }
    ,
    Q.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied(),
        this.validateIABGlobalScope()
    }
    ,
    Q.prototype.validateIABGlobalScope = function() {
        var e = this.readCookieParam(q.optanonCookieName, q.oneTrustIsIABCrossConsentEnableParam);
        e ? "true" === e ? (q.hasIABGlobalScope = !0,
        q.isStubReady = !1) : (q.hasIABGlobalScope = !1,
        q.IABCookieValue = this.getCookie(q.oneTrustIABCookieName)) : q.isStubReady = !1
    }
    ,
    Q.prototype.validateIABGDPRApplied = function() {
        var e = this.readCookieParam(q.optanonCookieName, q.geolocationCookiesParam).split(";")[0];
        e ? this.isBoolean(e) ? q.oneTrustIABgdprAppliesGlobally = "true" === e : q.oneTrustIABgdprAppliesGlobally = 0 <= q.EUCOUNTRIES.indexOf(e) : q.isStubReady = !1
    }
    ,
    Q.prototype.isBoolean = function(e) {
        return "true" === e || "false" === e
    }
    ,
    Q.prototype.readCookieParam = function(e, t) {
        var o, n, i, a, r = this.getCookie(e);
        if (r) {
            for (n = {},
            i = r.split("&"),
            o = 0; o < i.length; o += 1)
                a = i[o].split("="),
                n[decodeURIComponent(a[0])] = decodeURIComponent(a[1]).replace(/\+/g, " ");
            return t && n[t] ? n[t] : t && !n[t] ? "" : n
        }
        return ""
    }
    ,
    Q.prototype.getCookie = function(e) {
        if (this.isAmp) {
            var t = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
            if (t)
                return t[e] || null
        }
        var o, n, i = e + "=", a = document.cookie.split(";");
        for (o = 0; o < a.length; o += 1) {
            for (n = a[o]; " " == n.charAt(0); )
                n = n.substring(1, n.length);
            if (0 == n.indexOf(i))
                return n.substring(i.length, n.length)
        }
        return null
    }
    ,
    Q.prototype.updateGtmMacros = function() {
        var e, t = [];
        for (e = 0; e < q.optanonHtmlGroupData.length; e++)
            this.endsWith(q.optanonHtmlGroupData[e], ":1") && t.push(q.optanonHtmlGroupData[e].replace(":1", ""));
        for (e = 0; e < q.optanonHostData.length; e++)
            this.endsWith(q.optanonHostData[e], ":1") && t.push(q.optanonHostData[e].replace(":1", ""));
        for (e = 0; e < q.genVendorsData.length; e++)
            this.endsWith(q.genVendorsData[e], ":1") && t.push(q.genVendorsData[e].replace(":1", ""));
        var o = "," + this.serialiseArrayToString(t) + ",";
        window.OnetrustActiveGroups = o,
        window.OptanonActiveGroups = o,
        void 0 !== window.dataLayer ? window.dataLayer.constructor === Array && (window.dataLayer.push({
            OnetrustActiveGroups: o
        }),
        window.dataLayer.push({
            OptanonActiveGroups: o
        })) : window.dataLayer = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: o
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: o
        }];
        var n, i = new CustomEvent("consent.onetrust",{
            detail: t
        });
        t.length && (window.dataLayer.constructor === Array && window.dataLayer.push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }),
        n = new CustomEvent("OneTrustGroupsUpdated",{
            detail: t
        })),
        setTimeout(function() {
            window.dispatchEvent(i),
            n && window.dispatchEvent(n)
        })
    }
    ,
    Q.prototype.deserialiseStringToArray = function(e) {
        return e ? e.split(",") : []
    }
    ,
    Q.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }
    ,
    Q.prototype.serialiseArrayToString = function(e) {
        return e.toString()
    }
    ,
    Q.prototype.setStubScriptElement = function() {
        q.stubScriptElement = document.querySelector("script[src*='" + q.stubFileName + "']"),
        q.stubScriptElement && q.stubScriptElement.hasAttribute(q.DATAFILEATTRIBUTE) ? this.domainId = q.stubScriptElement.getAttribute(q.DATAFILEATTRIBUTE).trim() : q.stubScriptElement || (q.stubScriptElement = document.querySelector("script[src*='" + q.migratedCCTID + "']"),
        q.stubScriptElement && (q.isMigratedURL = !0,
        this.domainId = q.migratedDomainId.trim()))
    }
    ,
    Q.prototype.setDomainDataFileURL = function() {
        this.setStubScriptElement();
        var e = q.stubScriptElement.getAttribute("src")
          , t = -1 < e.indexOf("/consent");
        e && (q.isMigratedURL ? q.storageBaseURL = e.split("/consent/" + q.migratedCCTID)[0] : q.storageBaseURL = t ? e.split("/consent")[0] : e.split("/scripttemplates/" + q.stubFileName)[0]),
        this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1,
        q.bannerBaseDataURL = q.storageBaseURL && q.storageBaseURL + "/consent/" + this.domainId,
        q.bannerDataParentURL = q.bannerBaseDataURL + "/" + this.domainId + ".json"
    }
    ,
    Q.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            o
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }
    ,
    Q.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var e = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        e && e.parentElement.removeChild(e)
    }
    ,
    Q.prototype.getParamForIE = function() {
        return {
            get: function(e) {
                var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? null : decodeURI(t[1]) || ""
            }
        }
    }
    ,
    Q.prototype.getParam = function() {
        window.document.documentMode ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var e = "true" === this.urlParams.get("otreset")
          , t = "true" === this.urlParams.get("otpreview");
        this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase();
        var o = this.readCookieParam(W, "expiry")
          , n = this.readCookieParam(W, J);
        this.isReset = e || o && new Date(o) < new Date,
        this.isPreview = !this.isReset && (t || o && new Date(o) > new Date),
        this.setGeoParam(this.geoFromUrl || n)
    }
    ,
    Q.prototype.setGeoParam = function(e) {
        if (e) {
            var t = window;
            t.OneTrust || (t.OneTrust = {});
            var o = e.split(",");
            t.OneTrust.geolocationResponse = {
                countryCode: o[0],
                stateCode: o[1]
            }
        }
    }
    ,
    Q);
    function Q() {
        var c = this;
        this.iabType = null,
        this.iabTypeAdded = !0,
        this.crossOrigin = null,
        this.isAmp = !1,
        this.domainId = "",
        this.isReset = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.addBannerSDKScript = function(e) {
            var t = null;
            c.iabTypeAdded && ("IAB" !== (t = c.getRegionSet(e)).Type && "IAB2" !== t.Type || (c.iabType = t.Type,
            c.intializeIabStub()),
            "IAB2" !== t.Type && c.removeTcf());
            var o = q.stubScriptElement.cloneNode(!0)
              , n = "";
            n = e.UseSDKRefactor ? (q.isMigratedURL && (o.src = q.storageBaseURL + "/scripttemplates/new/scripttemplates/" + q.stubFileName + ".js"),
            q.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.Version + "/" + q.bannerScriptName) : "5.11.0" === e.Version ? (q.isMigratedURL && (o.src = q.storageBaseURL + "/scripttemplates/old/scripttemplates/" + q.stubFileName + ".js"),
            q.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + q.bannerScriptName) : (q.isMigratedURL && (o.src = q.storageBaseURL + "/scripttemplates/" + q.stubFileName + ".js"),
            q.storageBaseURL + "/scripttemplates/" + e.Version + "/" + q.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin"].forEach(function(e) {
                q.stubScriptElement.getAttribute(e) && o.setAttribute(e, q.stubScriptElement.getAttribute(e))
            }),
            c.crossOrigin = q.stubScriptElement.getAttribute("crossorigin") || null,
            c.isAmp = !!q.stubScriptElement.getAttribute("amp"),
            window.otStubData = {
                domainData: e,
                stubElement: o,
                bannerBaseDataURL: q.bannerBaseDataURL,
                mobileOnlineURL: q.mobileOnlineURL,
                userLocation: q.userLocation,
                regionRule: t,
                crossOrigin: c.crossOrigin,
                isAmp: c.isAmp,
                isPreview: c.isPreview,
                isReset: c.isReset,
                geoFromUrl: c.geoFromUrl,
                domainId: c.domainId,
                urlParams: c.urlParams
            },
            c.jsonp(n, null)
        }
        ,
        this.intializeIabStub = function() {
            var e = window;
            c.iabTypeAdded ? ("IAB" === c.iabType ? void 0 === e.__cmp && (window.__cmp = c.executeCmpApi) : void 0 === e.__tcfapi && (window.__tcfapi = c.executeTcfApi),
            c.addIabFrame()) : c.addBackwardIabFrame(),
            e.receiveOTMessage = c.receiveIabMessage,
            (e.attachEvent || window.addEventListener)("message", e.receiveOTMessage, !1)
        }
        ,
        this.addIabFrame = function() {
            var e = window
              , t = "IAB" === c.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5))
        }
        ,
        this.addBackwardIabFrame = function() {
            var e = window
              , t = "__cmpLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5));
            var o = "__tcfapiLocator";
            !e.frames[o] && (e.document.body ? c.addLocator(o, "TCF") : setTimeout(c.addIabFrame, 5))
        }
        ,
        this.addLocator = function(e, t) {
            var o = window
              , n = o.document.createElement("iframe");
            n.style.cssText = "display:none",
            n.name = e,
            n.setAttribute("title", t + " Locator"),
            o.document.body.appendChild(n)
        }
        ,
        this.receiveIabMessage = function(n) {
            var i = "string" == typeof n.data
              , e = {};
            try {
                e = i ? JSON.parse(n.data) : n.data
            } catch (e) {}
            if (e.__cmpCall && "IAB" === c.iabType) {
                var a = e.__cmpCall.callId
                  , r = e.__cmpCall.command
                  , t = e.__cmpCall.parameter;
                c.executeCmpApi(r, t, function(e, t) {
                    var o = {
                        __cmpReturn: {
                            returnValue: e,
                            success: t,
                            callId: a,
                            command: r
                        }
                    };
                    n.source.postMessage(i ? JSON.stringify(o) : o, n.origin)
                })
            } else
                e.__cmpCall && "IAB2" === c.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            if (e.__tcfapiCall && "IAB2" === c.iabType) {
                var s = e.__tcfapiCall.callId
                  , l = e.__tcfapiCall.command
                  , o = (t = e.__tcfapiCall.parameter,
                e.__tcfapiCall.version);
                c.executeTcfApi(l, t, function(e, t) {
                    var o = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: s,
                            command: l
                        }
                    };
                    n && n.source && n.source.postMessage && n.source.postMessage(i ? JSON.stringify(o) : o, "*")
                }, o)
            } else
                e.__tcfapiCall && "IAB" === c.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }
        ,
        this.executeCmpApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            c.iabType = "IAB";
            var o = e[0]
              , n = e[1]
              , i = e[2];
            if ("function" == typeof i && o)
                if (q.isStubReady && q.IABCookieValue)
                    switch (o) {
                    case "ping":
                        c.getPingRequest(i, !0);
                        break;
                    case "getConsentData":
                        c.getConsentDataRequest(i);
                        break;
                    default:
                        c.addToQueue(o, n, i)
                    }
                else
                    c.addToQueue(o, n, i)
        }
        ,
        this.executeTcfApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            if (c.iabType = "IAB2",
            !e.length)
                return window.__tcfapi.a || [];
            var o = e[0]
              , n = e[1]
              , i = e[2]
              , a = e[3];
            "function" == typeof i && o && ("ping" === o ? c.getPingRequest(i) : c.addToQueue(o, n, i, a))
        }
        ,
        this.addToQueue = function(e, t, o, n) {
            var i = window
              , a = "IAB" === c.iabType ? "__cmp" : "__tcfapi";
            i[a].a = i[a].a || [],
            i[a].a.push([e, t, o, n])
        }
        ,
        this.getPingRequest = function(e, t) {
            if (void 0 === t && (t = !1),
            e) {
                var o = {}
                  , n = !1;
                "IAB" === c.iabType ? (o = {
                    gdprAppliesGlobally: q.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: t
                },
                n = !0) : "IAB2" === c.iabType && (o = {
                    gdprApplies: q.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    displayStatus: "stub",
                    apiVersion: "2.0",
                    cmpVersion: void 0,
                    cmpId: void 0,
                    gvlVersion: void 0,
                    tcfPolicyVersion: void 0
                },
                n = !0),
                e(o, n)
            }
        }
        ,
        this.getConsentDataRequest = function(e) {
            e && q.IABCookieValue && e({
                gdprApplies: q.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: q.hasIABGlobalScope,
                consentData: q.IABCookieValue
            }, !0)
        }
        ,
        this.initConsentSDK()
    }
    var X = new Y;
    return e.OtSDKStub = Y,
    e.otSdkStub = X,
    e
}({});
