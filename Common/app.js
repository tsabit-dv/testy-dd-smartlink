!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.HCPModule_Common = t() : e.HCPModule_Common = t()
}(self, (function() {
    return function() {
        "use strict";
        var e, t, n = {
            ec6a63: function(e) {
                e.exports = delegate_library
            }
        }, r = {};
        function o(e) {
            var t = r[e];
            if (void 0 !== t)
                return t.exports;
            var i = r[e] = {
                id: e,
                exports: {}
            };
            return n[e].call(i.exports, i, i.exports, o),
            i.exports
        }
        o.m = n,
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return o.d(t, {
                a: t
            }),
            t
        }
        ,
        o.d = function(e, t) {
            for (var n in t)
                o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ,
        o.f = {},
        o.e = function(e) {
            return Promise.all(Object.keys(o.f).reduce((function(t, n) {
                return o.f[n](e, t),
                t
            }
            ), []))
        }
        ,
        o.u = function(e) {
            return "./Common/" + e + "_chunk." + {
                45: "084320ac2578e1b2bac6",
                124: "63d969ccd91abcf517d2",
                310: "8b78316f20a55423fc2f",
                856: "3f4fdcf1ed550a8fda48"
            }[e] + ".js"
        }
        ,
        o.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        e = {},
        t = "HCPModule_Common:",
        o.l = function(n, r, i, u) {
            if (e[n])
                e[n].push(r);
            else {
                var c, a;
                if (void 0 !== i)
                    for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                        var d = f[l];
                        if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + i) {
                            c = d;
                            break
                        }
                    }
                c || (a = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                o.nc && c.setAttribute("nonce", o.nc),
                c.setAttribute("data-webpack", t + i),
                c.src = n),
                e[n] = [r];
                var s = function(t, r) {
                    c.onerror = c.onload = null,
                    clearTimeout(p);
                    var o = e[n];
                    if (delete e[n],
                    c.parentNode && c.parentNode.removeChild(c),
                    o && o.forEach((function(e) {
                        return e(r)
                    }
                    )),
                    t)
                        return t(r)
                }
                  , p = setTimeout(s.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = s.bind(null, c.onerror),
                c.onload = s.bind(null, c.onload),
                a && document.head.appendChild(c)
            }
        }
        ,
        o.r = function(e) {
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
            o.g.importScripts && (e = o.g.location + "");
            var t = o.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src),
            !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src)
            }
            if (!e)
                throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
            o.p = e + "../"
        }(),
        function() {
            var e = {
                622: 0
            };
            o.f.j = function(t, n) {
                var r = o.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r)
                        n.push(r[2]);
                    else {
                        var i = new Promise((function(n, o) {
                            r = e[t] = [n, o]
                        }
                        ));
                        n.push(r[2] = i);
                        var u = o.p + o.u(t)
                          , c = new Error;
                        o.l(u, (function(n) {
                            if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                            r)) {
                                var i = n && ("load" === n.type ? "missing" : n.type)
                                  , u = n && n.target && n.target.src;
                                c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + u + ")",
                                c.name = "ChunkLoadError",
                                c.type = i,
                                c.request = u,
                                r[1](c)
                            }
                        }
                        ), "chunk-" + t, t)
                    }
            }
            ;
            var t = function(t, n) {
                var r, i, u = n[0], c = n[1], a = n[2], f = 0;
                if (u.some((function(t) {
                    return 0 !== e[t]
                }
                ))) {
                    for (r in c)
                        o.o(c, r) && (o.m[r] = c[r]);
                    if (a)
                        a(o)
                }
                for (t && t(n); f < u.length; f++)
                    i = u[f],
                    o.o(e, i) && e[i] && e[i][0](),
                    e[i] = 0
            }
              , n = self.webpackChunkHCPModule_Common = self.webpackChunkHCPModule_Common || [];
            n.forEach(t.bind(null, 0)),
            n.push = t.bind(null, n.push.bind(n))
        }();
        var i = {};
        return function() {
            o.r(i),
            o.d(i, {
                BuildVersion: function() {
                    return e
                }
            }),
            i.default = Promise.all([o.e(856), o.e(45)]).then(o.bind(o, "438ad9"));
            var e = {
                version: 1698845979997
            }
        }(),
        i
    }()
}
));
