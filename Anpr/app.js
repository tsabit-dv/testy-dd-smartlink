!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.HCPModule_Anpr = t() : e.HCPModule_Anpr = t()
}(self, (function() {
    return function() {
        "use strict";
        var e, t, n, r, o = {
            ec6a63: function(e) {
                e.exports = delegate_library
            },
            "5c6d89": function(e) {
                e.exports = vendorGraph_library
            }
        }, u = {};
        function i(e) {
            var t = u[e];
            if (void 0 !== t)
                return t.exports;
            var n = u[e] = {
                id: e,
                exports: {}
            };
            return o[e].call(n.exports, n, n.exports, i),
            n.exports
        }
        i.m = o,
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return i.d(t, {
                a: t
            }),
            t
        }
        ,
        t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        }
        : function(e) {
            return e.__proto__
        }
        ,
        i.t = function(n, r) {
            if (1 & r && (n = this(n)),
            8 & r)
                return n;
            if ("object" == typeof n && n) {
                if (4 & r && n.__esModule)
                    return n;
                if (16 & r && "function" == typeof n.then)
                    return n
            }
            var o = Object.create(null);
            i.r(o);
            var u = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var c = 2 & r && n; "object" == typeof c && !~e.indexOf(c); c = t(c))
                Object.getOwnPropertyNames(c).forEach((function(e) {
                    u[e] = function() {
                        return n[e]
                    }
                }
                ));
            return u.default = function() {
                return n
            }
            ,
            i.d(o, u),
            o
        }
        ,
        i.d = function(e, t) {
            for (var n in t)
                i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ,
        i.f = {},
        i.e = function(e) {
            return Promise.all(Object.keys(i.f).reduce((function(t, n) {
                return i.f[n](e, t),
                t
            }
            ), []))
        }
        ,
        i.u = function(e) {
            return "./Anpr/" + e + "_chunk." + {
                70: "e9add7ddb0b4e2fdd417",
                86: "92dbeb72fb5eefd67fa8",
                227: "89f846e23ec01ee5d79f",
                239: "8dc1220b319fb9fc0076",
                409: "05c2ca12817f7b1c2e8a",
                422: "c13718fb681f13a6853a",
                554: "9da08fc3316b8963cd98",
                632: "aadae51ec37c16c97c18",
                962: "b56e88ae93e427544f1a",
                987: "b1a6b11109ab42710728"
            }[e] + ".js"
        }
        ,
        i.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n = {},
        r = "HCPModule_Anpr:",
        i.l = function(e, t, o, u) {
            if (n[e])
                n[e].push(t);
            else {
                var c, f;
                if (void 0 !== o)
                    for (var a = document.getElementsByTagName("script"), d = 0; d < a.length; d++) {
                        var l = a[d];
                        if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + o) {
                            c = l;
                            break
                        }
                    }
                c || (f = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                i.nc && c.setAttribute("nonce", i.nc),
                c.setAttribute("data-webpack", r + o),
                c.src = e),
                n[e] = [t];
                var p = function(t, r) {
                    c.onerror = c.onload = null,
                    clearTimeout(s);
                    var o = n[e];
                    if (delete n[e],
                    c.parentNode && c.parentNode.removeChild(c),
                    o && o.forEach((function(e) {
                        return e(r)
                    }
                    )),
                    t)
                        return t(r)
                }
                  , s = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = p.bind(null, c.onerror),
                c.onload = p.bind(null, c.onload),
                f && document.head.appendChild(c)
            }
        }
        ,
        i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        function() {
            var e;
            i.g.importScripts && (e = i.g.location + "");
            var t = i.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src),
            !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src)
            }
            if (!e)
                throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
            i.p = e + "../"
        }(),
        function() {
            var e = {
                509: 0
            };
            i.f.j = function(t, n) {
                var r = i.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r)
                        n.push(r[2]);
                    else {
                        var o = new Promise((function(n, o) {
                            r = e[t] = [n, o]
                        }
                        ));
                        n.push(r[2] = o);
                        var u = i.p + i.u(t)
                          , c = new Error;
                        i.l(u, (function(n) {
                            if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                            r)) {
                                var o = n && ("load" === n.type ? "missing" : n.type)
                                  , u = n && n.target && n.target.src;
                                c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + u + ")",
                                c.name = "ChunkLoadError",
                                c.type = o,
                                c.request = u,
                                r[1](c)
                            }
                        }
                        ), "chunk-" + t, t)
                    }
            }
            ;
            var t = function(t, n) {
                var r, o, u = n[0], c = n[1], f = n[2], a = 0;
                if (u.some((function(t) {
                    return 0 !== e[t]
                }
                ))) {
                    for (r in c)
                        i.o(c, r) && (i.m[r] = c[r]);
                    if (f)
                        f(i)
                }
                for (t && t(n); a < u.length; a++)
                    o = u[a],
                    i.o(e, o) && e[o] && e[o][0](),
                    e[o] = 0
            }
              , n = self.webpackChunkHCPModule_Anpr = self.webpackChunkHCPModule_Anpr || [];
            n.forEach(t.bind(null, 0)),
            n.push = t.bind(null, n.push.bind(n))
        }();
        var c = {};
        return function() {
            i.r(c),
            i.d(c, {
                BuildVersion: function() {
                    return u
                },
                default: function() {
                    return o
                },
                exportComponents: function() {
                    return f
                },
                exportData: function() {
                    return a
                }
            });
            var e = {};
            i.r(e),
            i.d(e, {
                localLess: function() {
                    return n
                }
            });
            var t = {};
            i.r(t),
            i.d(t, {
                navData: function() {
                    return r
                }
            });
            var n = function() {
                return i.e(227).then(i.t.bind(i, "9d0669", 23))
            }
              , r = i.e(409).then(i.bind(i, "c95f3c"))
              , o = function() {
                return Promise.all([i.e(987), i.e(554)]).then(i.bind(i, "d7f9f1"))
            }
              , u = {
                version: 1698720256634
            }
              , f = e
              , a = t
        }(),
        c
    }()
}
));
